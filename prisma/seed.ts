import {
  Prisma,
  PrismaClient,
  SourceStatus,
} from '@prisma/client';

const prisma = new PrismaClient();

type Course = {
  id: string;
  title: string;
  category: string;
  description: string;
  rank: number;
  order: number;
};

type SeedSource = {
  id: string;
  nodeId: string;
  name: string;
  content: string;
};

type SeedEdge = {
  id: string;
  source: string;
  target: string;
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

const medicineCourses: Course[] = [
  {
    id: 'med-medical-biology',
    title: 'Medical Biology & Genetics',
    category: 'Year 1',
    description:
      'Cell biology, inheritance, and molecular mechanisms used throughout medical reasoning.',
    rank: 0,
    order: 0,
  },
  {
    id: 'med-biochemistry',
    title: 'Biochemistry',
    category: 'Year 1',
    description:
      'Metabolism, enzymes, and biochemical pathways that explain normal and altered function.',
    rank: 0,
    order: 1,
  },
  {
    id: 'med-anatomy',
    title: 'Anatomy',
    category: 'Year 1',
    description:
      'Macroscopic structure, regional relationships, and clinically relevant anatomy of the body.',
    rank: 0,
    order: 2,
  },
  {
    id: 'med-histology',
    title: 'Histology & Embryology',
    category: 'Year 1',
    description:
      'Tissues, organ microstructure, and developmental processes that establish normal form.',
    rank: 0,
    order: 3,
  },
  {
    id: 'med-physiology',
    title: 'Physiology',
    category: 'Year 2',
    description:
      'Integrated function and regulation of cardiovascular, respiratory, renal, and endocrine systems.',
    rank: 1,
    order: 0,
  },
  {
    id: 'med-immunology',
    title: 'Immunology & Microbiology',
    category: 'Year 2',
    description:
      'Host defence, pathogens, laboratory diagnosis, and principles of infection prevention.',
    rank: 1,
    order: 1,
  },
  {
    id: 'med-pathophysiology',
    title: 'Pathophysiology',
    category: 'Year 2',
    description:
      'Mechanisms by which normal regulation fails and produces symptoms, signs, and disease patterns.',
    rank: 1,
    order: 2,
  },
  {
    id: 'med-pathomorphology',
    title: 'Pathomorphology',
    category: 'Year 3',
    description:
      'Structural changes in cells, tissues, and organs that support diagnosis and prognosis.',
    rank: 2,
    order: 0,
  },
  {
    id: 'med-pharmacology',
    title: 'Pharmacology & Toxicology',
    category: 'Year 3',
    description:
      'Drug mechanisms, therapeutic choices, adverse effects, interactions, and poisoning principles.',
    rank: 2,
    order: 1,
  },
  {
    id: 'med-internal-medicine',
    title: 'Internal Medicine',
    category: 'Year 4',
    description:
      'Clinical assessment and management of adult medical conditions across organ systems.',
    rank: 3,
    order: 0,
  },
  {
    id: 'med-surgery',
    title: 'Surgery',
    category: 'Year 4',
    description:
      'Perioperative assessment, surgical disease, acute care, and procedural safety.',
    rank: 3,
    order: 1,
  },
  {
    id: 'med-paediatrics',
    title: 'Paediatrics',
    category: 'Year 5',
    description:
      'Growth, development, and age-specific diagnosis and treatment from newborns to adolescents.',
    rank: 4,
    order: 0,
  },
  {
    id: 'med-obgyn',
    title: 'Obstetrics & Gynaecology',
    category: 'Year 5',
    description:
      'Reproductive health, pregnancy care, childbirth, and gynaecological conditions.',
    rank: 4,
    order: 1,
  },
  {
    id: 'med-neuro-psych',
    title: 'Neurology & Psychiatry',
    category: 'Year 5',
    description:
      'Neurological localisation, mental health assessment, and safe patient-centred treatment.',
    rank: 4,
    order: 2,
  },
  {
    id: 'med-clinical-rotations',
    title: 'Clinical Rotations & LEK Preparation',
    category: 'Year 6',
    description:
      'Supervised rotations, integrated clinical decisions, and preparation for the Polish medical final examination.',
    rank: 5,
    order: 0,
  },
];

const computerScienceCourses: Course[] = [
  {
    id: 'cs-programming',
    title: 'Programming Fundamentals',
    category: 'Semester 1',
    description:
      'Problem decomposition, program structure, testing, and data representation.',
    rank: 0,
    order: 0,
  },
  {
    id: 'cs-math',
    title: 'Discrete Mathematics',
    category: 'Semester 1',
    description:
      'Logic, proofs, combinatorics, relations, and graph theory for computing.',
    rank: 0,
    order: 1,
  },
  {
    id: 'cs-calculus',
    title: 'Calculus & Linear Algebra',
    category: 'Semester 1',
    description:
      'Mathematical models, vectors, matrices, and change needed for technical computing.',
    rank: 0,
    order: 2,
  },
  {
    id: 'cs-oop',
    title: 'Object-Oriented Programming',
    category: 'Semester 2',
    description:
      'Encapsulation, composition, interfaces, and maintainable program design.',
    rank: 1,
    order: 0,
  },
  {
    id: 'cs-algorithms',
    title: 'Algorithms & Data Structures',
    category: 'Semester 2',
    description:
      'Data organisation, algorithm design, and time-space complexity analysis.',
    rank: 1,
    order: 1,
  },
  {
    id: 'cs-architecture',
    title: 'Computer Architecture',
    category: 'Semester 2',
    description:
      'Processors, memory, instruction execution, and the hardware foundations of software.',
    rank: 1,
    order: 2,
  },
  {
    id: 'cs-databases',
    title: 'Databases & Indexing',
    category: 'Semester 3',
    description:
      'Relational database modelling, SQL, transactions, query plans, and indexes with their performance tradeoffs.',
    rank: 2,
    order: 0,
  },
  {
    id: 'cs-networks',
    title: 'Computer Networks',
    category: 'Semester 3',
    description:
      'Network layers, protocols, addressing, latency, reliability, and observability.',
    rank: 2,
    order: 1,
  },
  {
    id: 'cs-software-engineering',
    title: 'Software Engineering',
    category: 'Semester 3',
    description:
      'Requirements, version control, testing, delivery, and collaborative software practice.',
    rank: 2,
    order: 2,
  },
  {
    id: 'cs-operating-systems',
    title: 'Operating Systems',
    category: 'Semester 4',
    description:
      'Processes, memory, filesystems, concurrency, and resource isolation.',
    rank: 3,
    order: 0,
  },
  {
    id: 'cs-security',
    title: 'Applied Cybersecurity',
    category: 'Semester 4',
    description:
      'Threat modelling, identity, secure design, vulnerability management, and incident response.',
    rank: 3,
    order: 1,
  },
  {
    id: 'cs-systems',
    title: 'Distributed Systems',
    category: 'Semester 5',
    description:
      'Replication, consistency, messaging, failure handling, and service coordination.',
    rank: 4,
    order: 0,
  },
  {
    id: 'cs-cloud',
    title: 'Cloud & Data Platforms',
    category: 'Semester 5',
    description:
      'Scalable deployment, data pipelines, managed services, and operational cost awareness.',
    rank: 4,
    order: 1,
  },
  {
    id: 'cs-capstone',
    title: 'Engineering Capstone',
    category: 'Semester 6',
    description:
      'Deliver a complete system by combining technical design, implementation, testing, and communication.',
    rank: 5,
    order: 0,
  },
];

const financeCourses: Course[] = [
  {
    id: 'fin-mathematics',
    title: 'Mathematics for Finance',
    category: 'Semester 1',
    description:
      'Functions, percentage change, discounting, and quantitative reasoning for financial decisions.',
    rank: 0,
    order: 0,
  },
  {
    id: 'fin-microeconomics',
    title: 'Microeconomics',
    category: 'Semester 1',
    description:
      'Consumer choice, firms, market structure, and incentives behind prices and allocation.',
    rank: 0,
    order: 1,
  },
  {
    id: 'fin-accounting',
    title: 'Financial Accounting',
    category: 'Semester 1',
    description:
      'Financial statements, accruals, cash flow, and the language used to assess organisations.',
    rank: 0,
    order: 2,
  },
  {
    id: 'fin-statistics',
    title: 'Probability & Statistics',
    category: 'Semester 2',
    description:
      'Distributions, estimation, hypothesis testing, and uncertainty in financial observations.',
    rank: 1,
    order: 0,
  },
  {
    id: 'fin-corporate-finance',
    title: 'Corporate Finance',
    category: 'Semester 2',
    description:
      'Capital budgeting, cost of capital, financing choices, and value creation for firms.',
    rank: 1,
    order: 1,
  },
  {
    id: 'fin-macroeconomics',
    title: 'Macroeconomics',
    category: 'Semester 2',
    description:
      'Growth, inflation, monetary policy, fiscal policy, and cycles affecting financial markets.',
    rank: 1,
    order: 2,
  },
  {
    id: 'fin-financial-markets',
    title: 'Financial Markets & Institutions',
    category: 'Semester 3',
    description:
      'Banking, exchanges, central banks, market participants, and the flow of capital.',
    rank: 2,
    order: 0,
  },
  {
    id: 'fin-econometrics',
    title: 'Econometrics',
    category: 'Semester 3',
    description:
      'Regression models, inference, and careful interpretation of empirical financial data.',
    rank: 2,
    order: 1,
  },
  {
    id: 'fin-valuation',
    title: 'Investments & Valuation',
    category: 'Semester 3',
    description:
      'Equity, bonds, discounted cash flow, multiples, and portfolio-level investment choices.',
    rank: 2,
    order: 2,
  },
  {
    id: 'fin-risk',
    title: 'Risk Management',
    category: 'Semester 4',
    description:
      'Market, credit, liquidity, and operational risk measurement, control, and reporting.',
    rank: 3,
    order: 0,
  },
  {
    id: 'fin-derivatives',
    title: 'Derivatives',
    category: 'Semester 4',
    description:
      'Forwards, futures, options, swaps, pricing intuition, and hedging applications.',
    rank: 3,
    order: 1,
  },
  {
    id: 'fin-financial-modelling',
    title: 'Financial Modelling',
    category: 'Semester 5',
    description:
      'Build transparent, auditable models that translate assumptions into decisions.',
    rank: 4,
    order: 0,
  },
  {
    id: 'fin-regulation',
    title: 'Financial Regulation & Ethics',
    category: 'Semester 5',
    description:
      'Financial supervision, consumer protection, conduct, disclosure, and responsible decision-making.',
    rank: 4,
    order: 1,
  },
  {
    id: 'fin-capstone',
    title: 'Finance Capstone',
    category: 'Semester 6',
    description:
      'Integrate accounting, valuation, risk, and market evidence into a defensible recommendation.',
    rank: 5,
    order: 0,
  },
];

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
    sources: courses.flatMap((course) => [
      {
        id: `source-${course.id}-core`,
        nodeId: course.id,
        name: `${course.title} - Core Notes.md`,
        content: `# ${course.title}\n\n${course.description}\n\n**Study focus:** establish the key vocabulary, mechanisms, and connections before progressing through the programme.`,
      },
      {
        id: `source-${course.id}-review`,
        nodeId: course.id,
        name: `${course.title} - Review Prompts.md`,
        content: `# ${course.title}: review prompts\n\nExplain the main ideas in your own words, identify a practical application, and relate this subject to its incoming and outgoing prerequisites.`,
      },
    ]),
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
    [
      { id: 'med-biology-biochemistry', source: 'med-medical-biology', target: 'med-biochemistry' },
      { id: 'med-biology-histology', source: 'med-medical-biology', target: 'med-histology' },
      { id: 'med-anatomy-physiology', source: 'med-anatomy', target: 'med-physiology' },
      { id: 'med-biochemistry-physiology', source: 'med-biochemistry', target: 'med-physiology' },
      { id: 'med-histology-pathophysiology', source: 'med-histology', target: 'med-pathophysiology' },
      { id: 'med-physiology-pathophysiology', source: 'med-physiology', target: 'med-pathophysiology' },
      { id: 'med-immunology-pathomorphology', source: 'med-immunology', target: 'med-pathomorphology' },
      { id: 'med-pathophysiology-pathomorphology', source: 'med-pathophysiology', target: 'med-pathomorphology' },
      { id: 'med-pathophysiology-pharmacology', source: 'med-pathophysiology', target: 'med-pharmacology' },
      { id: 'med-pathomorphology-internal', source: 'med-pathomorphology', target: 'med-internal-medicine' },
      { id: 'med-pharmacology-internal', source: 'med-pharmacology', target: 'med-internal-medicine' },
      { id: 'med-pathomorphology-surgery', source: 'med-pathomorphology', target: 'med-surgery' },
      { id: 'med-internal-paediatrics', source: 'med-internal-medicine', target: 'med-paediatrics' },
      { id: 'med-surgery-obgyn', source: 'med-surgery', target: 'med-obgyn' },
      { id: 'med-internal-neuro-psych', source: 'med-internal-medicine', target: 'med-neuro-psych' },
      { id: 'med-paediatrics-rotations', source: 'med-paediatrics', target: 'med-clinical-rotations' },
      { id: 'med-obgyn-rotations', source: 'med-obgyn', target: 'med-clinical-rotations' },
      { id: 'med-neuro-psych-rotations', source: 'med-neuro-psych', target: 'med-clinical-rotations' },
    ],
  ),
  createGraph(
    'system-computer-science',
    'computer-science',
    'Computer Science',
    'Computer Science',
    'A six-semester route from programming and mathematics to distributed systems and an engineering capstone.',
    computerScienceCourses,
    [
      { id: 'cs-programming-oop', source: 'cs-programming', target: 'cs-oop' },
      { id: 'cs-programming-algorithms', source: 'cs-programming', target: 'cs-algorithms' },
      { id: 'cs-math-algorithms', source: 'cs-math', target: 'cs-algorithms' },
      { id: 'cs-programming-architecture', source: 'cs-programming', target: 'cs-architecture' },
      { id: 'cs-oop-databases', source: 'cs-oop', target: 'cs-databases' },
      { id: 'cs-algorithms-databases', source: 'cs-algorithms', target: 'cs-databases' },
      { id: 'cs-algorithms-networks', source: 'cs-algorithms', target: 'cs-networks' },
      { id: 'cs-oop-software-engineering', source: 'cs-oop', target: 'cs-software-engineering' },
      { id: 'cs-architecture-operating-systems', source: 'cs-architecture', target: 'cs-operating-systems' },
      { id: 'cs-algorithms-operating-systems', source: 'cs-algorithms', target: 'cs-operating-systems' },
      { id: 'cs-networks-security', source: 'cs-networks', target: 'cs-security' },
      { id: 'cs-operating-systems-security', source: 'cs-operating-systems', target: 'cs-security' },
      { id: 'cs-databases-systems', source: 'cs-databases', target: 'cs-systems' },
      { id: 'cs-networks-systems', source: 'cs-networks', target: 'cs-systems' },
      { id: 'cs-operating-systems-systems', source: 'cs-operating-systems', target: 'cs-systems' },
      { id: 'cs-databases-cloud', source: 'cs-databases', target: 'cs-cloud' },
      { id: 'cs-systems-cloud', source: 'cs-systems', target: 'cs-cloud' },
      { id: 'cs-software-engineering-capstone', source: 'cs-software-engineering', target: 'cs-capstone' },
      { id: 'cs-security-capstone', source: 'cs-security', target: 'cs-capstone' },
      { id: 'cs-cloud-capstone', source: 'cs-cloud', target: 'cs-capstone' },
    ],
  ),
  createGraph(
    'system-finance',
    'finance',
    'Finance',
    'Finance',
    'A six-semester map from accounting and economics to valuation, risk, regulation, and a finance capstone.',
    financeCourses,
    [
      { id: 'fin-mathematics-statistics', source: 'fin-mathematics', target: 'fin-statistics' },
      { id: 'fin-micro-corporate', source: 'fin-microeconomics', target: 'fin-corporate-finance' },
      { id: 'fin-accounting-corporate', source: 'fin-accounting', target: 'fin-corporate-finance' },
      { id: 'fin-micro-macro', source: 'fin-microeconomics', target: 'fin-macroeconomics' },
      { id: 'fin-macro-markets', source: 'fin-macroeconomics', target: 'fin-financial-markets' },
      { id: 'fin-statistics-econometrics', source: 'fin-statistics', target: 'fin-econometrics' },
      { id: 'fin-accounting-valuation', source: 'fin-accounting', target: 'fin-valuation' },
      { id: 'fin-corporate-valuation', source: 'fin-corporate-finance', target: 'fin-valuation' },
      { id: 'fin-markets-valuation', source: 'fin-financial-markets', target: 'fin-valuation' },
      { id: 'fin-statistics-risk', source: 'fin-statistics', target: 'fin-risk' },
      { id: 'fin-markets-risk', source: 'fin-financial-markets', target: 'fin-risk' },
      { id: 'fin-valuation-derivatives', source: 'fin-valuation', target: 'fin-derivatives' },
      { id: 'fin-risk-derivatives', source: 'fin-risk', target: 'fin-derivatives' },
      { id: 'fin-econometrics-modelling', source: 'fin-econometrics', target: 'fin-financial-modelling' },
      { id: 'fin-valuation-modelling', source: 'fin-valuation', target: 'fin-financial-modelling' },
      { id: 'fin-markets-regulation', source: 'fin-financial-markets', target: 'fin-regulation' },
      { id: 'fin-risk-regulation', source: 'fin-risk', target: 'fin-regulation' },
      { id: 'fin-financial-modelling-capstone', source: 'fin-financial-modelling', target: 'fin-capstone' },
      { id: 'fin-regulation-capstone', source: 'fin-regulation', target: 'fin-capstone' },
      { id: 'fin-derivatives-capstone', source: 'fin-derivatives', target: 'fin-capstone' },
    ],
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

    await prisma.nodeSource.deleteMany({ where: { graphId: graph.id } });
    await prisma.nodeSource.createMany({
      data: graph.sources.map((source) => ({
        id: source.id,
        nodeId: source.nodeId,
        graphId: graph.id,
        name: source.name,
        fileType: 'text/markdown',
        fileUrl: `seed://${source.id}`,
        fileHash: source.id,
        sizeBytes: source.content.length,
        status: SourceStatus.READY,
        content: source.content,
      })),
    });
  }
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (error: unknown) => {
    await prisma.$disconnect();
    throw error;
  });
