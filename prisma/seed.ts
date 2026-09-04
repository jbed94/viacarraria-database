import { mkdir, writeFile } from 'fs/promises';
import { join } from 'path';

import {
  Prisma,
  PrismaClient,
  SourceStatus,
} from '@prisma/client';

import type { Course, SeedEdge } from './seed-data/types.js';
import {
  computerScienceCourses,
  computerScienceEdges,
} from './seed-data/computer-science.js';
import {
  financeCourses,
  financeEdges,
} from './seed-data/finance.js';
import {
  medicineCourses,
  medicineEdges,
} from './seed-data/medicine.js';
import { generateCoursePdf } from './seed-data/pdf-generator.js';
import { syncDirectus } from './directus-sync.js';

const prisma = new PrismaClient();

type SeedSource = {
  id: string;
  nodeId: string;
  name: string;
  content: string;
  fileType?: string;
  buffer?: Buffer;
  fileHash?: string;
};

type SeedGraph = {
  id: string;
  slug: string;
  title: string;
  category: string;
  description: string;
  nodes: Prisma.InputJsonArray;
  edges: Prisma.InputJsonArray;
  sources: SeedSource[];
};

function createGraph(
  id: string,
  slug: string,
  title: string,
  category: string,
  description: string,
  courses: Course[],
  edges: SeedEdge[],
): SeedGraph {
  return {
    id,
    slug,
    title,
    category,
    description,
    nodes: courses.map((course) => ({
      id: course.id,
      position: {
        x: course.rank * 500,
        y: course.order * 180 + 24,
      },
      data: {
        title: course.title,
        category: course.category,
        description: course.description,
      },
    })) as Prisma.InputJsonArray,
    edges: edges as Prisma.InputJsonArray,
    sources: courses.flatMap((course) => {
      const pdf = generateCoursePdf({
        courseId: course.id,
        courseTitle: course.title,
        category: course.category,
        description: course.description,
        rank: course.rank,
        order: course.order,
      });

      return [
        {
          id: `source-${course.id}-core`,
          nodeId: course.id,
          name: `${course.title} - Core Notes.md`,
          fileType: 'text/markdown',
          content: course.coreNotes,
        },
        {
          id: `source-${course.id}-review`,
          nodeId: course.id,
          name: `${course.title} - Review Prompts.md`,
          fileType: 'text/markdown',
          content: course.reviewPrompts,
        },
        {
          id: `source-${course.id}-syllabus-pdf`,
          nodeId: course.id,
          name: `${course.title} - Syllabus & Reading Guide.pdf`,
          fileType: 'application/pdf',
          content: pdf.markdown,
          buffer: pdf.buffer,
          fileHash: pdf.fileHash,
        },
      ];
    }),
  };
}

const graphs: SeedGraph[] = [
  createGraph(
    'system-medicine',
    'medicine',
    'Medicine: Polish Medical Programme',
    'Medicine',
    'A six-year, dependency-first map of the subjects commonly encountered in a Polish medical degree programme.',
    medicineCourses,
    medicineEdges,
  ),
  createGraph(
    'system-computer-science',
    'computer-science',
    'Computer Science',
    'Computer Science',
    'A six-semester route from programming and mathematics to distributed systems and an engineering capstone.',
    computerScienceCourses,
    computerScienceEdges,
  ),
  createGraph(
    'system-finance',
    'finance',
    'Finance & Valuation',
    'Finance',
    'A six-semester map from accounting and economics to valuation, risk, regulation, and a finance capstone.',
    financeCourses,
    financeEdges,
  ),
];

async function main(): Promise<void> {
  await prisma.user.upsert({
    where: { id: 'jbed94' },
    update: {
      name: 'Via Carraria',
      email: 'system@viacarraria.local',
      emailVerified: true,
      username: 'Via Carraria',
      isAnonymous: false,
      subscriptionTier: 'PRO',
    },
    create: {
      id: 'jbed94',
      name: 'Via Carraria',
      email: 'system@viacarraria.local',
      emailVerified: true,
      username: 'Via Carraria',
      isAnonymous: false,
      subscriptionTier: 'PRO',
    },
  });

  await prisma.graphTemplate.deleteMany({
    where: { slug: 'language-learning' },
  });
  await prisma.graph.deleteMany({
    where: {
      id: { in: ['system-language-learning', 'system-medical-foundations'] },
      userId: 'jbed94',
    },
  });

  for (const graph of graphs) {
    await prisma.graph.upsert({
      where: { id: graph.id },
      update: {
        title: graph.title,
        description: graph.description,
        nodes: graph.nodes,
        edges: graph.edges,
        isPublic: true,
        isPrepared: true,
      },
      create: {
        id: graph.id,
        title: graph.title,
        description: graph.description,
        userId: 'jbed94',
        isPublic: true,
        isPrepared: true,
        nodes: graph.nodes,
        edges: graph.edges,
      },
    });

    await prisma.graphTemplate.upsert({
      where: { slug: graph.slug },
      update: {
        title: graph.title,
        description: graph.description,
        category: graph.category,
        nodes: graph.nodes,
        edges: graph.edges,
      },
      create: {
        id: `template-${graph.slug}`,
        slug: graph.slug,
        title: graph.title,
        description: graph.description,
        category: graph.category,
        nodes: graph.nodes,
        edges: graph.edges,
      },
    });

    const pdfDir = join(process.cwd(), 'prisma', 'seed-data', 'pdfs');
    await mkdir(pdfDir, { recursive: true });

    const uploadDir = process.env.UPLOAD_DIR;
    if (uploadDir) {
      await mkdir(uploadDir, { recursive: true });
    }

    for (const source of graph.sources) {
      if (source.buffer) {
        await writeFile(join(pdfDir, `${source.id}.pdf`), source.buffer);
        if (uploadDir) {
          await writeFile(join(uploadDir, `${source.id}.pdf`), source.buffer);
        }
      }
    }

    await prisma.nodeSource.deleteMany({ where: { graphId: graph.id } });
    await prisma.nodeSource.createMany({
      data: graph.sources.map((source) => ({
        id: source.id,
        nodeId: source.nodeId,
        graphId: graph.id,
        name: source.name,
        fileType: source.fileType ?? 'text/markdown',
        fileUrl: `seed://${source.id}`,
        fileHash: source.fileHash ?? source.id,
        sizeBytes: source.buffer
          ? source.buffer.length
          : Buffer.byteLength(source.content, 'utf8'),
        status: SourceStatus.READY,
        content: source.content,
      })),
    });
  }

  await syncDirectus();

  const apiUrl = process.env.API_URL ?? 'http://localhost:3000/api';
  const internalToken = process.env.INTERNAL_SERVICE_TOKEN ?? '';
  for (const graph of graphs) {
    try {
      await fetch(`${apiUrl}/graphs/${graph.id}/index`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'x-internal-token': internalToken,
        },
      }).catch(() => undefined);
    } catch {
      // Non-blocking
    }
  }
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (error: unknown) => {
    await prisma.$disconnect();
    throw error;
  });
