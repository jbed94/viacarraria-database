import { createHash } from 'crypto';

export type CoursePdfOptions = {
  courseId: string;
  courseTitle: string;
  category: string;
  description: string;
  rank: number;
  order: number;
};

function escapePdfText(text: string): string {
  return text
    .replace(/\\/g, '\\\\')
    .replace(/\(/g, '\\(')
    .replace(/\)/g, '\\)')
    .replace(/[^\x20-\x7E]/g, ' '); // Map non-ASCII to space for standard Helvetica
}

export function generateCoursePdf(options: CoursePdfOptions): {
  buffer: Buffer;
  markdown: string;
  fileHash: string;
} {
  const { courseId, courseTitle, category, description, rank } = options;

  const modules = [
    `Module 1: Foundations of ${courseTitle} and Theoretical Prerequisites`,
    `Module 2: Core Architectures, Structural Modeling, and Implementation`,
    `Module 3: Advanced Methodologies, Performance Optimization, and Analytics`,
    `Module 4: Empirical Problem Solving, Practical Labs, and Capstone Case Study`,
  ];

  const bibliography = [
    `Standard Academic Reference Handbook for ${category}, 4th Edition.`,
    `Principles of Contemporary ${courseTitle}: A Rigorous Approach.`,
    `Applied Research Papers in ${category} (IEEE/ACM/Elsevier).`,
  ];

  // Markdown representation for DB content, vector search indexing, and GraphRAG retrieval
  const markdown = `# ${courseTitle} — Official Syllabus, Curriculum Guide & Academic Reference

**Discipline / Program**: ${category}  
**Academic Progression Stage**: Level ${rank + 1} (Rank ${rank}, Order ${options.order})  
**Official Course Identifier**: \`${courseId.toUpperCase()}\`  
**ECTS Allocation / Weight**: ${rank === 0 ? 6 : rank <= 2 ? 5 : 4} ECTS credits  
**Delivery Mode**: Synchronous Lectures, Guided Laboratory Practicums, Problem-Based Seminars  

---

## 1. Course Description & Learning Outcomes

### 1.1 Program Synopsis
${description}

This syllabus establishes the authoritative academic roadmap and prerequisite framework for **${courseTitle}**. The module is structured to develop both rigorous theoretical grounding and high-level applied problem-solving competence, preparing students for advanced specialization and real-world execution within ${category}.

### 1.2 Targeted Learning Outcomes (Polish Qualifications Framework / PRK Levels 6-7)
- **Knowledge (Wiedza)**:
  - Thorough understanding of foundational axioms, structural formalisms, and systemic paradigms governing ${courseTitle}.
  - Familiarity with state-of-the-art academic methodologies, empirical standards, and contemporary industry benchmarks.
  - Comprehensive comprehension of error taxonomy, failure modes, diagnostic principles, and mitigation strategies.
- **Skills (Umiejętności)**:
  - Ability to formulate, derive, and analytically solve complex multi-stage problems within ${category}.
  - Practical proficiency in deploying professional toolchains, verified algorithms, and laboratory apparatus.
  - Capacity to interpret empirical data, diagnose anomalies, and synthesize evidence-backed conclusions.
- **Social Competencies (Kompetencje Społeczne)**:
  - Adherence to scientific integrity, professional ethics, safety protocols, and statutory compliance.
  - Critical evaluation of technical and empirical literature with evidence-based reasoning.

---

## 2. Comprehensive 15-Week Lecture & Module Syllabus

### Week 1–3: Foundations & Theoretical Prerequisites
- **Lecture 1**: Epistemological foundations, historical progression, and axiomatics of ${courseTitle}.
- **Lecture 2**: Mathematical formalisms, state models, and fundamental conservation/invariance principles.
- **Lecture 3**: Core domain abstractions, nomenclature standards, and boundary condition modeling.
- *Seminar/Lab*: Diagnostic assessment of baseline knowledge; setup of analytical environments and verification toolchains.

### Week 4–6: Structural Mechanics, Core Architecture & Methodologies
- **Lecture 4**: Structural decomposition, primary components, and state-machine formulations.
- **Lecture 5**: Analytical derivation of core governing dynamics and transactional properties.
- **Lecture 6**: Comparative evaluation of architectural paradigms and standard design tradeoffs.
- *Seminar/Lab*: Hands-on implementation of core algorithms/procedures; empirical verification against canonical reference datasets.

### Week 7–9: Optimization, Scalability & Advanced Diagnostics
- **Lecture 7**: Quantitative performance bounds, complexity analysis, and asymptotic behavior.
- **Lecture 8**: Resilience engineering, edge-case mitigation, and anomaly handling protocols.
- **Lecture 9**: Systematic diagnosis of degraded performance, fault localization, and telemetry instrumentation.
- *Seminar/Lab*: Benchmark execution under adverse synthetic workloads; profiling memory, latency, and resource bottlenecks.

### Week 10–12: Cross-System Integration & Real-World Case Studies
- **Lecture 10**: Interface design, interoperability contracts, and protocol harmonization.
- **Lecture 11**: Real-world industrial and clinical failure case studies: post-mortem dissection of catastrophic errors.
- **Lecture 12**: Statutory regulations, ISO/IEC standards, compliance checklists, and ethics in ${category}.
- *Seminar/Lab*: Multi-tier integration project; peer code/methodology review and defensibility drills.

### Week 13–15: Advanced Frontier Topics & Capstone Synthesis
- **Lecture 13**: Contemporary frontiers and state-of-the-art literature review (IEEE/ACM/Elsevier/Springer).
- **Lecture 14**: Synthesis of cross-disciplinary dependencies and spatial knowledge graph traversal.
- **Lecture 15**: Comprehensive course summary, examination preparation, and defense of capstone findings.
- *Seminar/Lab*: Capstone project presentations, oral defenses, and final laboratory sign-offs.

---

## 3. Practical Laboratory Protocols & Problem Sets

Students must complete four structured laboratory problem sets throughout the semester:
1. **Lab Practicum 1 (Baseline Verification)**:
   - Formulate test harnesses to validate core theoretical properties under canonical initial conditions.
   - Document quantitative baseline metrics with reproducible artifacts.
2. **Lab Practicum 2 (Architectural Synthesis)**:
   - Design and construct an end-to-end operational module embodying the core principles of ${courseTitle}.
   - Demonstrate modularity, invariant preservation, and formal unit verification.
3. **Lab Practicum 3 (Stress Testing & Diagnostic Profiling)**:
   - Subject the synthesized module to high-throughput stress workloads and extreme edge-case boundaries.
   - Profile resource utilization, identify throughput bottlenecks, and apply formal optimization techniques.
4. **Lab Practicum 4 (Capstone Defense)**:
   - Synthesize all theoretical and applied concepts into an integrated final project report.
   - Defend technical decisions against rigorous questioning by the examination panel.

---

## 4. Formal Assessment, Examination Rubric & Grading

| Component | Weight | Criteria & Performance Thresholds |
| :--- | :---: | :--- |
| **Laboratory Practicums & Assignments** | 40% | Code/protocol correctness, reproducibility, adherence to style guidelines, test coverage ≥ 90% |
| **Midterm Written Assessment** | 25% | Conceptual mastery, formal derivations, analytical problem solving under time constraints |
| **Final Comprehensive Exam & Defense** | 35% | Synthesis across modules, oral viva voce defense, edge-case troubleshooting scenarios |

---

## 5. Annotated Primary Literature & Academic Reference Bibliography

${bibliography.map((b, idx) => `### Reference [${idx + 1}]: ${b}
- **Relevance**: Essential foundational textbook establishing standard vocabulary, theoretical frameworks, and laboratory methods.
- **Assigned Reading**: Chapters 1–8 (Core Foundations), Chapters 11–14 (Advanced Applied Topics).
- **Study Directives**: Focus on end-of-chapter analytical derivations and reproducible case examples.`).join('\n\n')}

### Supplemental Academic Resources:
- Current research proceedings in ${category} published by leading academic repositories.
- National curriculum directives and professional accreditation board specifications.
- Formal documentation, official specifications, and statutory standards governing ${courseTitle}.

---

## 6. High-Yield Review Prompts & Conceptual Self-Assessment

1. **Theoretical Derivation**: State the primary governing equations or axioms of ${courseTitle}. Derive the equilibrium or optimal condition from first principles.
2. **Failure Analysis**: Describe a realistic failure scenario where standard assumptions in ${courseTitle} break down. How can such degradation be detected early and resolved?
3. **Systemic Tradeoffs**: Contrast the primary architectural design pattern taught in this course with its leading alternative. What are the space, time, cost, and reliability tradeoffs?
4. **Prerequisite Synthesis**: How does mastery of this course enable downstream understanding of advanced topics in ${category}? Identify two direct prerequisite connections in the knowledge graph.
`;

  // Page 1 Text Stream
  const page1Lines = [
    'BT',
    '/F1 16 Tf',
    '50 730 Td',
    `(${escapePdfText(courseTitle)} - Syllabus) Tj`,
    '/F2 10 Tf',
    '0 -24 Td',
    `(${escapePdfText(`Category: ${category} | Level: Stage ${rank + 1} | ID: ${courseId}`)}) Tj`,
    '0 -20 Td',
    '(--------------------------------------------------------------------------------) Tj',
    '/F1 12 Tf',
    '0 -26 Td',
    '(1. Course Overview & Theoretical Objectives) Tj',
    '/F2 10 Tf',
    '0 -18 Td',
    `(${escapePdfText(description.slice(0, 85))}) Tj`,
    '0 -14 Td',
    `(${escapePdfText(description.slice(85, 170) || 'Comprehensive coverage of core principles, methodologies, and applications.')}) Tj`,
    '0 -24 Td',
    '/F1 12 Tf',
    '(2. Weekly Module Schedule) Tj',
    '/F2 10 Tf',
    ...modules.flatMap((mod) => [
      '0 -18 Td',
      `(${escapePdfText(`* ${mod.slice(0, 80)}`)}) Tj`,
    ]),
    '0 -24 Td',
    '/F1 12 Tf',
    '(3. Assessment Structure) Tj',
    '/F2 10 Tf',
    '0 -18 Td',
    '(Laboratory Projects: 40% | Midterm Assessment: 25% | Final Capstone: 35%) Tj',
    'ET',
  ].join('\n');

  // Page 2 Text Stream
  const page2Lines = [
    'BT',
    '/F1 16 Tf',
    '50 730 Td',
    `(${escapePdfText(courseTitle)} - Reading & Reference Guide) Tj`,
    '/F2 10 Tf',
    '0 -24 Td',
    '(Academic Literature and Recommended Bibliography) Tj',
    '0 -20 Td',
    '(--------------------------------------------------------------------------------) Tj',
    '/F1 12 Tf',
    '0 -26 Td',
    '(4. Primary Textbooks & Publications) Tj',
    '/F2 10 Tf',
    ...bibliography.flatMap((book, idx) => [
      '0 -20 Td',
      `(${escapePdfText(`[${idx + 1}] ${book}`)}) Tj`,
      '0 -14 Td',
      '(    Comprehensive study material and supplemental exercises.) Tj',
    ]),
    '0 -30 Td',
    '/F1 12 Tf',
    '(5. Academic Integrity & Study Directives) Tj',
    '/F2 10 Tf',
    '0 -18 Td',
    '(All coursework must reflect independent research and spatial reasoning.) Tj',
    '0 -14 Td',
    '(Study roadmaps should be cross-referenced with prerequisite nodes.) Tj',
    'ET',
  ].join('\n');

  const stream1Length = Buffer.byteLength(page1Lines, 'latin1');
  const stream2Length = Buffer.byteLength(page2Lines, 'latin1');

  // PDF Object definitions
  // 1: Catalog
  // 2: Pages tree
  // 3: Page 1
  // 4: Page 2
  // 5: Font F1 (Helvetica-Bold)
  // 6: Font F2 (Helvetica)
  // 7: Contents Page 1
  // 8: Contents Page 2

  const header = '%PDF-1.4\n%\xE2\xE3\xCF\xD3\n';

  const obj1 = '1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n';
  const obj2 = '2 0 obj\n<< /Type /Pages /Kids [3 0 R 4 0 R] /Count 2 >>\nendobj\n';
  const obj3 =
    '3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 5 0 R /F2 6 0 R >> >> /Contents 7 0 R >>\nendobj\n';
  const obj4 =
    '4 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 5 0 R /F2 6 0 R >> >> /Contents 8 0 R >>\nendobj\n';
  const obj5 = '5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>\nendobj\n';
  const obj6 = '6 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj\n';
  const obj7 = `7 0 obj\n<< /Length ${stream1Length} >>\nstream\n${page1Lines}\nendstream\nendobj\n`;
  const obj8 = `8 0 obj\n<< /Length ${stream2Length} >>\nstream\n${page2Lines}\nendstream\nendobj\n`;

  const objects = [obj1, obj2, obj3, obj4, obj5, obj6, obj7, obj8];

  let currentOffset = Buffer.byteLength(header, 'latin1');
  const offsets: number[] = [];

  for (const obj of objects) {
    offsets.push(currentOffset);
    currentOffset += Buffer.byteLength(obj, 'latin1');
  }

  const xrefOffset = currentOffset;
  let xref = `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
  for (const off of offsets) {
    xref += `${off.toString().padStart(10, '0')} 00000 n \n`;
  }

  const trailer = `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF\n`;

  const fullPdfString = header + objects.join('') + xref + trailer;
  const buffer = Buffer.from(fullPdfString, 'latin1');
  const fileHash = createHash('sha256').update(buffer).digest('hex');

  return { buffer, markdown, fileHash };
}
