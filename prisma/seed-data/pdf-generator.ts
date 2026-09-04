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

  // Markdown representation for DB content and search indexing
  const markdown = `# ${courseTitle} — Official Syllabus & Reference Guide

**Category**: ${category}  
**Academic Level**: Tier ${rank + 1}  
**Course Code**: \`${courseId.toUpperCase()}\`

---

## 1. Course Description & Core Objectives
${description}

The primary goal of this curriculum is to equip students with both foundational domain models and hands-on analytical fluency. Students are expected to complete weekly problem sets and integrate theoretical concepts directly into spatial graph representations.

---

## 2. Weekly Lecture & Module Outline
${modules.map((m, idx) => `### ${m}\n- In-depth theoretical lecture, conceptual derivations, and real-world case discussions.\n- Guided laboratory exercises focusing on rigorous verification and reproducible outcomes.`).join('\n\n')}

---

## 3. Assessment & Examination Structure
- **Laboratory Projects & Assignments**: 40%
- **Midterm Comprehensive Assessment**: 25%
- **Final Examination & Capstone Defense**: 35%

---

## 4. Recommended Primary Literature & Reading List
${bibliography.map((b, idx) => `${idx + 1}. *${b}*`).join('\n')}
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
