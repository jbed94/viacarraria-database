import { mkdir, writeFile } from 'fs/promises';
import { join } from 'path';

import 'dotenv/config';
import { PrismaPg } from '@prisma/adapter-pg';
import {
  Prisma,
  PrismaClient,
  SourceStatus,
} from '@prisma/client';
import { Pool } from 'pg';

import type { Course, SeedEdge } from './seed-data/types.js';
import {
  putCsCourses,
  putCsEdges,
} from './seed-data/put-computer-science.js';
import {
  umpMedicineCourses,
  umpMedicineEdges,
} from './seed-data/ump-medicine.js';
import {
  criminalCaseCourses,
  criminalCaseEdges,
  commercialCaseCourses,
  commercialCaseEdges,
  administrativeCaseCourses,
  administrativeCaseEdges,
} from './seed-data/legal-cases.js';
import {
  highschoolMathCourses,
  highschoolMathEdges,
} from './seed-data/highschool-math.js';
import {
  highschoolHistoryCourses,
  highschoolHistoryEdges,
} from './seed-data/highschool-history.js';
import {
  highschoolBiologyCourses,
  highschoolBiologyEdges,
} from './seed-data/highschool-biology.js';
import {
  highschoolChemistryCourses,
  highschoolChemistryEdges,
} from './seed-data/highschool-chemistry.js';
import { generateCoursePdf } from './seed-data/pdf-generator.js';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

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
          name: 'Core Notes.md',
          fileType: 'text/markdown',
          content: course.coreNotes,
        },
        {
          id: `source-${course.id}-review`,
          nodeId: course.id,
          name: 'Review Prompts.md',
          fileType: 'text/markdown',
          content: course.reviewPrompts,
        },
        {
          id: `source-${course.id}-syllabus-pdf`,
          nodeId: course.id,
          name: 'Syllabus & Reading Guide.pdf',
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
  // 1. Poznan University of Technology (PUT) — Computer Science
  createGraph(
    'system-put-cs',
    'put-computer-science',
    'Informatyka — Politechnika Poznańska (PUT)',
    'Informatyka',
    'Oficjalny 7-semestralny program studiów inżynierskich na Wydziale Informatyki i Telekomunikacji Politechniki Poznańskiej: od programowania w C/C++ i algorytmów po uczenie maszynowe, chmurę i projekt inżynierski.',
    putCsCourses,
    putCsEdges,
  ),

  // 2. Medical University of Poznan (UMP) — Medicine (Kierunek Lekarski)
  createGraph(
    'system-ump-medicine',
    'ump-medicine',
    'Kierunek Lekarski — Uniwersytet Medyczny w Poznaniu (UMP)',
    'Medycyna',
    'Pełny 6-letni program jednolitych studiów magisterskich na Wydziale Lekarskim Uniwersytetu Medycznego im. Karola Marcinkowskiego w Poznaniu: od anatomii i biochemii, przez patomorfologię i internę Szczeklika, po medycynę ratunkową i LEK.',
    umpMedicineCourses,
    umpMedicineEdges,
  ),

  // 3. Prawnicy — Sprawa Karna Gospodarcza (KPK / KK)
  createGraph(
    'system-legal-criminal',
    'legal-criminal-case',
    'Sprawa Karna: Oszustwo Finansowe i Cyberprzestępczość (KPK/KK)',
    'Prawo Karne',
    'Symulacja procedury karnej gospodarczej przed organami ścigania i Sądem Okręgowym w Poznaniu: zawiadomienie GIIF, zabezpieczenie nośników, areszt tymczasowy, ekspertyzy IT i blockchain, akt oskarżenia, przewód sądowy, wyrok i apelacja.',
    criminalCaseCourses,
    criminalCaseEdges,
  ),

  // 4. Prawnicy — Sprawa Gospodarcza / Cywilna (KPC / KC)
  createGraph(
    'system-legal-commercial',
    'legal-commercial-case',
    'Sprawa Gospodarcza: Spór o Wdrożenie IT i Kary Umowne (KPC/KC)',
    'Prawo Gospodarcze',
    'Proces cywilny w postępowaniu gospodarczym: wezwanie przedsądowe, odstąpienie, pozew z zabezpieczeniem konta bankowego, zarzut potrącenia i miarkowania kary umownej (art. 484 § 2 k.c.), plan rozprawy, opinia biegłego ds. ERP, wyrok i ugoda.',
    commercialCaseCourses,
    commercialCaseEdges,
  ),

  // 5. Prawnicy — Sprawa Sądowoadministracyjna (KPA / PPSA)
  createGraph(
    'system-legal-administrative',
    'legal-administrative-case',
    'Sprawa Sądowoadministracyjna: Zaskarżenie Decyzji Środowiskowej OZE (KPA/PPSA)',
    'Prawo Administracyjne',
    'Wieloinstancyjna kontrola legalności aktu administracyjnego: wniosek o DŚU dla farmy wiatrowej, raport OOŚ, decyzja wójta, odwołanie do SKO w Poznaniu, skarga do WSA w Poznaniu i skarga kasacyjna do Naczelnego Sądu Administracyjnego w Warszawie.',
    administrativeCaseCourses,
    administrativeCaseEdges,
  ),

  // 6. Liceum — Matematyka (Poziom Rozszerzony CKE)
  createGraph(
    'system-matura-math',
    'matura-matematyka',
    'Matematyka — Poziom Rozszerzony (Liceum CKE)',
    'Liceum Ogólnokształcące',
    '10 połączonych działów do matury rozszerzonej z matematyki: funkcje i wartość bezwzględna, wielomiany, trygonometria, ciągi i szeregi, planimetria, geometria analityczna, stereometria, rachunek różniczkowy, optymalizacja i prawdopodobieństwo.',
    highschoolMathCourses,
    highschoolMathEdges,
  ),

  // 7. Liceum — Historia (Poziom Rozszerzony CKE)
  createGraph(
    'system-matura-history',
    'matura-historia',
    'Historia — Poziom Rozszerzony (Liceum CKE)',
    'Liceum Ogólnokształcące',
    'Chronologiczny graf wiedzy maturalnej z historii: starożytność, średniowiecze, Rzeczpospolita Obojga Narodów, rozbiory, wiek XIX, II Rzeczpospolita, II wojna światowa, PRL oraz Solidarność i transformacja 1989 roku.',
    highschoolHistoryCourses,
    highschoolHistoryEdges,
  ),

  // 8. Liceum — Biologia (Poziom Rozszerzony CKE)
  createGraph(
    'system-matura-biology',
    'matura-biologia',
    'Biologia — Poziom Rozszerzony (Liceum CKE)',
    'Liceum Ogólnokształcące',
    'Kompleksowy repetytorium maturalne z biologii: chemia życia i enzymologia, cytologia, metabolizm i fotosynteza, genetyka molekularna, genetyka klasyczna Mendla, fizjologia człowieka, odporność i ewolucja z ekologią.',
    highschoolBiologyCourses,
    highschoolBiologyEdges,
  ),

  // 9. Liceum — Chemia (Poziom Rozszerzony CKE)
  createGraph(
    'system-matura-chemistry',
    'matura-chemia',
    'Chemia — Poziom Rozszerzony (Liceum CKE)',
    'Liceum Ogólnokształcące',
    'Pełny zakres wymagań matury rozszerzonej z chemii: budowa atomu i wiązania, stechiometria i gazy, termochemia i kinetyka, roztwory i pH, redoks i elektrochemia, związki nieorganiczne, węglowodory oraz pochodne z biochemią.',
    highschoolChemistryCourses,
    highschoolChemistryEdges,
  ),
];

async function main(): Promise<void> {
  await prisma.$executeRawUnsafe(
    `UPDATE "User" SET "id" = 'system', "username" = 'system' WHERE "id" = 'jbed94' AND NOT EXISTS (SELECT 1 FROM "User" WHERE "id" = 'system')`,
  );

  await prisma.user.upsert({
    where: { id: 'system' },
    update: {
      name: 'Via Carraria System',
      email: 'system@viacarraria.local',
      emailVerified: true,
      username: 'system',
      isAnonymous: false,
      subscriptionTier: 'REGISTERED',
    },
    create: {
      id: 'system',
      name: 'Via Carraria System',
      email: 'system@viacarraria.local',
      emailVerified: true,
      username: 'system',
      isAnonymous: false,
      subscriptionTier: 'REGISTERED',
    },
  });

  const defaultSettings = [
    {
      key: 'similarityQuota',
      value: {
        anonymousThroughputPerMinute: 30,
        registeredThroughputPerMinute: 120,
      },
    },
    {
      key: 'storageConfig',
      value: { defaultStorageLimitMb: 100 },
    },
    {
      key: 'adConfig',
      value: {
        effectiveEcpm: 1.5,
        canvasAdDensity: 35,
        maxCanvasAds: 5,
      },
    },
  ];

  for (const setting of defaultSettings) {
    await prisma.systemSettings.upsert({
      where: { key: setting.key },
      update: {},
      create: {
        key: setting.key,
        value: setting.value,
      },
    });
  }

  await prisma.planDefinition.deleteMany({
    where: { tier: 'PRO' },
  });

  await prisma.planDefinition.upsert({
    where: { tier: 'ANONYMOUS' },
    update: {
      name: 'Anonymous Guest',
      description: 'Public exploration with single-seed shallow crawl.',
      adsEnabled: true,
      limits: {
        maxNodes: 0,
        maxSourcesPerGraph: 0,
        maxSourceSizeBytes: 0,
        maxSelectedNodes: 2,
        maxGraphs: 0,
        maxPrivateGraphs: 0,
        allowedCrawlDepths: ['shallow'],
        allowedHypothesisGroups: 0,
        pdfUploadsAllowed: false,
        maxUploadsPerHour: 0,
      },
    },
    create: {
      id: 'plan-anon',
      tier: 'ANONYMOUS',
      name: 'Anonymous Guest',
      description: 'Public exploration with single-seed shallow crawl.',
      adsEnabled: true,
      limits: {
        maxNodes: 0,
        maxSourcesPerGraph: 0,
        maxSourceSizeBytes: 0,
        maxSelectedNodes: 2,
        maxGraphs: 0,
        maxPrivateGraphs: 0,
        allowedCrawlDepths: ['shallow'],
        allowedHypothesisGroups: 0,
        pdfUploadsAllowed: false,
        maxUploadsPerHour: 0,
      },
      version: 1,
    },
  });

  await prisma.planDefinition.upsert({
    where: { tier: 'REGISTERED' },
    update: {
      name: 'Registered User',
      description:
        'Full graph creation and deep multi-hop traversal with 100MB source storage.',
      adsEnabled: true,
      limits: {
        maxNodes: null,
        maxSourcesPerGraph: null,
        maxSourceSizeBytes: 52428800,
        maxSelectedNodes: null,
        maxGraphs: null,
        maxPrivateGraphs: null,
        allowedCrawlDepths: ['shallow', 'default', 'deep'],
        allowedHypothesisGroups: 4,
        pdfUploadsAllowed: true,
        maxUploadsPerHour: 50,
      },
    },
    create: {
      id: 'plan-registered',
      tier: 'REGISTERED',
      name: 'Registered User',
      description:
        'Full graph creation and deep multi-hop traversal with 100MB source storage.',
      adsEnabled: true,
      limits: {
        maxNodes: null,
        maxSourcesPerGraph: null,
        maxSourceSizeBytes: 52428800,
        maxSelectedNodes: null,
        maxGraphs: null,
        maxPrivateGraphs: null,
        allowedCrawlDepths: ['shallow', 'default', 'deep'],
        allowedHypothesisGroups: 4,
        pdfUploadsAllowed: true,
        maxUploadsPerHour: 50,
      },
      version: 1,
    },
  });

  await prisma.graphTemplate.deleteMany({
    where: {
      slug: {
        in: [
          'language-learning',
          'medicine',
          'computer-science',
          'finance',
        ],
      },
    },
  });
  await prisma.graph.deleteMany({
    where: {
      id: {
        in: [
          'system-language-learning',
          'system-medical-foundations',
          'system-medicine',
          'system-computer-science',
          'system-finance',
        ],
      },
    },
  });

  for (const graph of graphs) {
    await prisma.graph.upsert({
      where: { id: graph.id },
      update: {
        title: graph.title,
        description: graph.description,
        userId: 'system',
        nodes: graph.nodes,
        edges: graph.edges,
        isPublic: true,
        isPrepared: true,
      },
      create: {
        id: graph.id,
        title: graph.title,
        description: graph.description,
        userId: 'system',
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
  .then(async () => {
    await prisma.$disconnect();
    await pool.end();
  })
  .catch(async (error: unknown) => {
    await prisma.$disconnect();
    await pool.end();
    throw error;
  });
