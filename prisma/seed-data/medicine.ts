import type { Course, SeedEdge } from './types.js';

export const medicineEdges: SeedEdge[] = [
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
];

export const medicineCourses: Course[] = [
  {
    id: 'med-medical-biology',
    title: 'Medical Biology & Genetics',
    category: 'Year 1',
    description:
      'Cell biology, inheritance, and molecular mechanisms used throughout medical reasoning.',
    rank: 0,
    order: 0,
    coreNotes: `# Medical Biology & Human Genetics

## 1. Cell Cycle Regulation & Checkpoints
- **Cell Cycle Phases**: $G_1$ (growth, organelle synthesis) $\\to$ $S$ (DNA replication) $\\to$ $G_2$ (mitotic preparation) $\\to$ $M$ (mitosis and cytokinesis). Non-dividing cells enter quiescent $G_0$.
- **Cyclins & Cyclin-Dependent Kinases (CDKs)**:
  - Cyclin D-CDK4/6 phosphorylates Retinoblastoma protein (pRb), releasing E2F transcription factor to initiate $S$-phase gene expression.
  - Cyclin E-CDK2 drives transition through the $G_1/S$ restriction checkpoint.
  - Cyclin B-CDK1 (MPF) triggers mitotic spindle entry.
- **DNA Damage Response (p53 Pathway)**:
  - ATM/ATR kinases detect double-strand breaks and activate p53 via phosphorylation.
  - p53 upregulates p21 (CDK inhibitor) halting the cell cycle, and triggers GADD45 for DNA repair.
  - Irreparable damage induces transcription of pro-apoptotic genes (BAX, PUMA), releasing Cytochrome C from mitochondria to trigger caspase-9 activation.

## 2. Mendelian & Non-Mendelian Inheritance
- **Autosomal Dominant**: Expressed in heterozygotes; 50% recurrence risk (e.g., Marfan syndrome, Huntington disease, Familial Hypercholesterolemia). Often exhibits variable expressivity and incomplete penetrance.
- **Autosomal Recessive**: Expressed only in homozygotes; 25% recurrence risk among carrier parents; frequently involves enzyme deficiencies (e.g., Cystic Fibrosis - CFTR $\\Delta$F508, Phenylketonuria).
- **X-Linked Recessive**: Primarily affects males; carrier mothers transmit to 50% of sons; affected fathers transmit carrier status to 100% of daughters (e.g., Duchenne Muscular Dystrophy, Hemophilia A/B).
- **Mitochondrial Inheritance**: Exclusively maternal transmission; maternal mutations passed to all offspring; exhibits heteroplasmy (variable severity based on proportion of mutated vs. wild-type mitochondria; e.g., MELAS, Leber Hereditary Optic Neuropathy).

## 3. Cytogenetics & Molecular Diagnostics
- **Chromosomal Aberrations**:
  - *Numerical*: Aneuploidies resulting from meiotic non-disjunction (Down syndrome: Trisomy 21; Edwards: Trisomy 18; Patau: Trisomy 13; Turner: 45,X; Klinefelter: 47,XXY).
  - *Structural*: Translocations (Balanced Robertsonian translocations between acrocentric chromosomes 13, 14, 15, 21, 22), deletions (Cri-du-chat 5p-), microdeletions (DiGeorge syndrome 22q11.2).
- **Diagnostic Methodologies**: Karyotyping (G-banding, resolution $5-10$ Mb), Fluorescence In Situ Hybridization (FISH), Chromosomal Microarray (aCGH), Next-Generation Sequencing (NGS panels, Whole Exome Sequencing).`,
    reviewPrompts: `# Medical Biology & Genetics — Clinical Scenarios

## Clinical Case Studies
1. **Pedigree Analysis**: A 28-year-old asymptomatic male's paternal grandfather and father developed choreiform movements and progressive cognitive decline in their 40s (Huntington disease).
   - What is the inheritance pattern and genetic mechanism (trinucleotide repeat expansion CAG)?
   - Explain the concept of genetic anticipation when the defect is transmitted paternally.
   - Outline the ethical and genetic counseling protocol for presymptomatic testing.
2. **Cystic Fibrosis Diagnostics**: A newborn presents with meconium ileus. Describe the sweat chloride test threshold, the molecular defect of CFTR $\\Delta$F508 in protein trafficking, and how targeted potentiator/corrector therapies (Ivacaftor/Lumacaftor) function.
3. **Maternal Age and Non-Disjunction**: Explain the cellular mechanism underlying the increased risk of meiotic non-disjunction in maternal oocytes with advancing age compared to paternal spermatogenesis.`,
  },
  {
    id: 'med-biochemistry',
    title: 'Biochemistry',
    category: 'Year 1',
    description:
      'Metabolism, enzymes, and biochemical pathways that explain normal and altered function.',
    rank: 0,
    order: 1,
    coreNotes: `# Medical Biochemistry & Metabolic Integration

## 1. Enzyme Kinetics & Regulation
- **Michaelis-Menten Kinetics**:
  $$v_0 = \\frac{V_{\\max} [S]}{K_m + [S]}$$
  where $K_m$ is the substrate concentration at which reaction velocity is half-maximal ($V_{\\max}/2$), inversely reflecting enzyme affinity.
- **Inhibition Mechanisms**:
  - *Competitive Inhibition*: Substrate analog binds active site; $K_m$ increases, $V_{\\max}$ unchanged (reversible by high $[S]$; e.g., Statins inhibiting HMG-CoA reductase).
  - *Non-Competitive Inhibition*: Binds allosteric site; $K_m$ unchanged, $V_{\\max}$ decreases.
  - *Uncompetitive Inhibition*: Binds only enzyme-substrate [ES] complex; both $K_m$ and $V_{\\max}$ decrease proportionally.

## 2. Carbohydrate Metabolism & Bioenergetics
- **Glycolysis**: Cytosolic breakdown of glucose to 2 pyruvate, yielding net 2 ATP and 2 NADH.
  - *Rate-Limiting Step*: Phosphofructokinase-1 (PFK-1), allosterically activated by AMP and Fructose-2,6-bisphosphate (regulated by insulin/glucagon), inhibited by ATP and citrate.
- **Pyruvate Dehydrogenase (PDH) Complex**: Mitochondrial conversion of pyruvate to Acetyl-CoA; requires 5 cofactors: TPP (Vitamin $B_1$), FAD ($B_2$), NAD ($B_3$), CoA ($B_5$), and Lipoic acid. Deficiencies produce lactic acidosis (Wernicke-Korsakoff).
- **Tricarboxylic Acid (TCA) Cycle**: Oxidizes Acetyl-CoA, producing 3 NADH, 1 $\\text{FADH}_2$, 1 GTP per turn. Rate-limiting: Isocitrate dehydrogenase.
- **Oxidative Phosphorylation & The Electron Transport Chain (ETC)**:
  - Complexes I-IV pump protons across inner mitochondrial membrane creating electrochemical proton gradient ($\\Delta \\mu_{H^+}$).
  - Complex V (ATP Synthase) harnesses proton motive force to synthesize ATP.
  - Uncouplers (2,4-DNP, Thermogenin in brown fat) dissipate gradient as heat without generating ATP.

## 3. Lipid & Amino Acid Metabolism
- **Beta-Oxidation**: Fatty acyl-CoA transported into mitochondria via Carnitine shuttle; sequential cleavage into Acetyl-CoA producing NADH and $\\text{FADH}_2$.
- **Ketogenesis**: Liver mitochondria synthesize acetoacetate and $\\beta$-hydroxybutyrate from excess Acetyl-CoA during fasting or untreated diabetic ketoacidosis (DKA).
- **The Urea Cycle**: Liver pathway detoxifying ammonia into water-soluble urea; rate-limiting step: Carbamoyl phosphate synthetase I (CPS I), allosterically activated by N-acetylglutamate (NAG).`,
    reviewPrompts: `# Medical Biochemistry — Metabolic Cases & Questions

## Applied Clinical Scenarios
1. **Diabetic Ketoacidosis (DKA) Biochemistry**: Trace the biochemical cascade in Type 1 Diabetes where insulin deficiency and glucagon excess trigger uninhibited lipolysis in adipose tissue, excessive hepatic ketogenesis, and metabolic acidosis with an elevated anion gap.
2. **G6PD Deficiency & Hemolytic Anemia**: Explain how glucose-6-phosphate dehydrogenase deficiency impairs the Pentose Phosphate Pathway, limits NADPH production, leaves erythrocytes vulnerable to oxidative stress from antimalarial drugs or fava beans, and produces Heinz bodies and bite cells.
3. **Hyperammonemia in Urea Cycle Disorders**: A neonate presents with lethargy, vomiting, and cerebral edema with blood ammonia $>500\\;\\mu\\text{mol/L}$. Contrast Ornithine Transcarbamylase (OTC) deficiency (X-linked, elevated urine orotic acid) with CPS I deficiency.`,
  },
  {
    id: 'med-anatomy',
    title: 'Anatomy',
    category: 'Year 1',
    description:
      'Macroscopic structure, regional relationships, and clinically relevant anatomy of the body.',
    rank: 0,
    order: 2,
    coreNotes: `# Clinical & Regional Human Anatomy

## 1. Thorax: Cardiopulmonary Anatomy & Mediastinum
- **Mediastinal Compartments**:
  - *Superior Mediastinum*: Thymus, great vessels (aortic arch, brachiocephalic veins, SVC), trachea, esophagus, thoracic duct, vagus and phrenic nerves.
  - *Anterior Mediastinum*: Internal thoracic vessels, remnant thymus.
  - *Middle Mediastinum*: Pericardium, heart, ascending aorta, pulmonary trunk, phrenic nerves.
  - *Posterior Mediastinum*: Descending thoracic aorta, azygos and hemiazygos veins, esophagus, vagus nerves, sympathetic trunks.
- **Coronary Circulation**:
  - *Left Coronary Artery (LCA)*: Divides into Left Anterior Descending (LAD - "widowmaker", supplies anterior LV wall and anterior $2/3$ of interventricular septum) and Circumflex (LCx, supplies lateral LV wall).
  - *Right Coronary Artery (RCA)*: Supplies right ventricle, SA node (60%), AV node (90%), and gives rise to Posterior Descending Artery (PDA) in right-dominant hearts (85%).

## 2. Abdomen & Pelvis: Peritoneal & Vascular Anatomy
- **Peritoneal Spaces & Foramen of Winslow**:
  - Greater sac and lesser sac (omental bursa).
  - Epiploic foramen (of Winslow) boundaries: anterior = hepatoduodenal ligament (portal triad: common bile duct, hepatic artery proper, portal vein); posterior = IVC; superior = caudate lobe of liver; inferior = 1st part of duodenum.
  - Pringle maneuver: Clamping hepatoduodenal ligament compresses portal vein and hepatic artery to control catastrophic hepatic hemorrhage.
- **Portal-Systemic Anastomoses (Portocaval Shunts)**:
  - Esophageal: Left gastric vein $\\leftrightarrow$ azygos vein (esophageal varices).
  - Paraumbilical: Paraumbilical veins $\\leftrightarrow$ epigastric veins (caput medusae).
  - Rectal: Superior rectal vein $\\leftrightarrow$ middle/inferior rectal veins (anorectal varices).

## 3. Neuroanatomy & Musculoskeletal Innervation
- **Brachial Plexus ($C_5 - T_1$)**:
  - Roots $\\to$ Trunks (Upper, Middle, Lower) $\\to$ Divisions $\\to$ Cords (Lateral, Posterior, Medial) $\\to$ Terminal branches (Musculocutaneous, Axillary, Radial, Median, Ulnar).
  - Erb-Duchenne palsy (Upper trunk $C_5-C_6$ traction): "Waiter's tip" hand (loss of abduction, external rotation, supination).
  - Klumpke palsy (Lower trunk $C_8-T_1$ traction): "Claw hand" with intrinsic hand muscle atrophy and possible Horner syndrome.
- **Lower Limb Peripheral Nerve Injuries**:
  - Common Fibular (Peroneal) Nerve: Winds around fibular neck; damage results in foot drop (loss of dorsiflexion and eversion) and sensory loss on dorsum of foot.
  - Tibial Nerve: Popliteal fossa passing deep to flexor retinaculum; loss of plantar flexion and inversion.`,
    reviewPrompts: `# Clinical Anatomy — Case Studies & Dissection Review

## Practical Scenarios
1. **Coronary Artery Occlusion Localization**: A 55-year-old male presents with acute ST-elevation myocardial infarction (STEMI) in leads II, III, and aVF with complete heart block. Which coronary artery is occluded, and what anatomical structures (including conduction nodes) explain these findings?
2. **Femoral Triangle Anatomy & Hernias**: Outline the boundaries and contents of the femoral triangle (NAVEL from lateral to medial). Contrast the anatomical relationship of an indirect inguinal hernia, direct inguinal hernia, and femoral hernia to the inferior epigastric vessels and inguinal ligament.
3. **Cranial Nerve Foramina**: Trace the cranial exit foramina for CN VII (Facial) and CN IX-XI (Glossopharyngeal, Vagus, Accessory). Explain why jugular foramen syndrome produces dysphagia, vocal cord paralysis, and trapezius weakness.`,
  },
  {
    id: 'med-histology',
    title: 'Histology & Embryology',
    category: 'Year 1',
    description:
      'Tissues, organ microstructure, and developmental processes that establish normal form.',
    rank: 0,
    order: 3,
    coreNotes: `# Medical Histology & Human Embryology

## 1. Primary Tissues & Microscopic Organization
- **Epithelial Tissue**: Simple vs. stratified, squamous, cuboidal, columnar, pseudostratified ciliated (respiratory epithelium), transitional / urothelium. Cell junctions: tight junctions (zonula occludens), adherens junctions, desmosomes (macula adherens), gap junctions, hemidesmosomes (integrin-based basement membrane anchoring).
- **Connective Tissue**: Fibroblasts, collagen types (Type I: bone, tendon, skin; Type II: hyaline cartilage; Type III: reticulin fibers, blood vessels; Type IV: basement membrane).
- **Muscle Tissue**:
  - *Skeletal*: Striated, multinucleated peripheral nuclei, voluntary, organized sarcomeres (Z-line, I-band, A-band, H-zone, M-line).
  - *Cardiac*: Striated, single central nucleus, branched fibers, intercalated discs (fascia adherens + gap junctions).
  - *Smooth*: Non-striated, involuntary, spindle-shaped, dense bodies acting as Z-disc equivalents.

## 2. Specialized Organ Histology
- **Respiratory System**: Ciliated pseudostratified columnar epithelium with goblet cells transitioning into simple cuboidal in bronchioles; Clara/club cells; Type I pneumocytes (95% alveolar surface, gas exchange barrier) and Type II pneumocytes (surfactant secretion: dipalmitoylphosphatidylcholine; progenitor capability).
- **Gastrointestinal Architecture**: Concentric layers: Mucosa (epithelium, lamina propria, muscularis mucosae), Submucosa (Meissner plexus), Muscularis externa (inner circular, Auerbach myenteric plexus, outer longitudinal), Serosa/Adventitia.
- **Renal Microstructure**: Renal corpuscle (glomerular capillaries, podocyte foot processes with filtration slit diaphragms, Bowman capsule), proximal convoluted tubule (dense brush border), loop of Henle, distal convoluted tubule, macula densa (juxtaglomerular apparatus).

## 3. Human Embryology & Morphogenesis
- **Early Development**: Fertilization $\\to$ Morula $\\to$ Blastocyst (Inner cell mass / embryoblast and trophoblast) $\\to$ Implantation.
- **Gastrulation (Week 3)**: Formation of trilaminar embryonic disc:
  - *Ectoderm*: Surface ectoderm (epidermis, lens), Neural crest (PNS neurons, melanocytes, adrenal medulla, craniofacial bones), Neural tube (CNS, retina, spinal cord).
  - *Mesoderm*: Paraxial (somites: axial skeleton, skeletal muscle), Intermediate (urogenital system), Lateral plate (cardiovascular system, serous membranes).
  - *Endoderm*: Epithelial lining of GI tract, respiratory tree, liver, pancreas, bladder.
- **Branchial (Pharyngeal) Apparatus**:
  - 1st Arch (CN V): Mandible, maxilla, malleus, incus, muscles of mastication.
  - 2nd Arch (CN VII): Stapes, styloid, hyoid upper body, muscles of facial expression.
  - 3rd Arch (CN IX): Hyoid lower body, stylopharyngeus.
  - 4th & 6th Arches (CN X): Laryngeal cartilages and intrinsic laryngeal muscles.`,
    reviewPrompts: `# Histology & Embryology — Review & Pathological Correlations

## Microscopic & Embryologic Challenges
1. **Branchial Cleft Anomalies**: A 6-year-old child presents with a persistent lateral cervical fistula discharging mucus anterior to the lower third of the sternocleidomastoid muscle. Explain the embryological origin of this persistent 2nd pharyngeal cleft anomaly versus a thyroglossal duct cyst.
2. **Glomerular Filtration Barrier Microstructure**: Detail the three anatomical layers constituting the renal glomerular filtration barrier, the role of negative charge (heparan sulfate), and explain the histological breakdown occurring in minimal change disease.
3. **Surfactant Deficiency in Prematurity**: Explain the developmental timeline of Type II pneumocyte maturation and surfactant production during gestation. How does administration of antenatal corticosteroids accelerate pulmonary maturity?`,
  },
  {
    id: 'med-physiology',
    title: 'Physiology',
    category: 'Year 2',
    description:
      'Integrated function and regulation of cardiovascular, respiratory, renal, and endocrine systems.',
    rank: 1,
    order: 0,
    coreNotes: `# Systemic Medical Physiology

## 1. Cardiovascular Dynamics & Electrophysiology
- **Cardiac Action Potentials**:
  - *Ventricular Myocyte (Fast Response)*: Phase 0 (rapid $Na^+$ influx), Phase 1 (transient $K^+$ out), Phase 2 (plateau: balance of $Ca^{2+}$ influx through L-type channels and $K^+$ efflux), Phase 3 (rapid repolarization via delayed rectifier $K^+$ channels), Phase 4 (resting potential $\\approx -90$ mV).
  - *SA/AV Node (Slow Pacemaker Response)*: Phase 4 spontaneous diastolic depolarization driven by funny current ($I_f$, inward $Na^+$) and transient T-type $Ca^{2+}$ channels; Phase 0 driven by L-type $Ca^{2+}$ (no fast $Na^+$ channels).
- **Cardiac Output & Pressure-Volume Loops**:
  $$CO = HR \\times SV, \\quad SV = EDV - ESV$$
  - *Preload*: End-Diastolic Volume; Frank-Starling mechanism increases force of contraction as sarcomeres stretch toward optimal overlap.
  - *Afterload*: Total peripheral resistance / aortic pressure that ventricles must overcome to eject blood.
  - *Inotropy (Contractility)*: Shifts pressure-volume loop upward and to the left ($EF = SV / EDV \\times 100\\%$).

## 2. Respiratory Mechanics & Gas Exchange
- **Ventilation & Compliance**: Transpulmonary pressure ($P_{tp} = P_{alv} - P_{ip}$). Intrapleural pressure is normally negative ($-5\\;\\text{cm } H_2O$ at rest, dropping to $-8$ during inspiration).
- **Ventilation-Perfusion ($V/Q$) Matching**:
  - Normal overall ratio $\\approx 0.8$.
  - $V/Q = 0$ (Shunt): Perfusion without ventilation (atelectasis, foreign body); uncorrected by supplemental oxygen.
  - $V/Q = \\infty$ (Dead Space): Ventilation without perfusion (pulmonary embolism).
  - Hypoxic pulmonary vasoconstriction diverts blood flow away from underventilated lung zones.
- **Oxygen-Hemoglobin Dissociation Curve**: Sigmoidal curve due to cooperative $O_2$ binding.
  - Right shift (Bohr effect, easier $O_2$ unloading to tissues): $\\uparrow H^+$ (lower pH), $\\uparrow pCO_2$, $\\uparrow 2,3\\text{-DPG}$, $\\uparrow \\text{Temperature}$.

## 3. Renal & Acid-Base Physiology
- **Glomerular Filtration Rate (GFR)**: Net ultrafiltration pressure determined by Starling forces:
  $$GFR = K_f [(P_{GC} - P_{BS}) - (\\pi_{GC} - \\pi_{BS})]$$
- **Renin-Angiotensin-Aldosterone System (RAAS)**: Macula densa senses low $NaCl$ delivery $\\to$ Juxtaglomerular cells secrete Renin $\\to$ Cleaves Angiotensinogen to Ang I $\\to$ Pulmonary ACE converts to Angiotensin II (causes efferent arteriolar constriction, systemic vasoconstriction, stimulates Aldosterone release for $Na^+$ reabsorption and $K^+/H^+$ secretion).
- **Acid-Base Regulation (Davenport Diagram)**:
  - Henderson-Hasselbalch: $pH = 6.1 + \\log\\left(\\frac{[HCO_3^-]}{0.03 \\times PaCO_2}\\right)$.
  - Anion Gap: $AG = [Na^+] - ([Cl^-] + [HCO_3^-])$, normal $8-12\\;\\text{mEq/L}$. Elevated in MUDPILES (Methanol, Uremia, DKA, Paraldehyde, Isoniazid, Lactic acidosis, Ethylene glycol, Salicylates).`,
    reviewPrompts: `# Medical Physiology — Integrated Cases

## Clinical Physiology Cases
1. **Arterial Blood Gas (ABG) Interpretation**: A 45-year-old patient in septic shock presents with:
   - $pH = 7.22$, $PaCO_2 = 28\\;\\text{mmHg}$, $[HCO_3^-] = 11\\;\\text{mEq/L}$, $[Na^+] = 138\\;\\text{mEq/L}$, $[Cl^-] = 98\\;\\text{mEq/L}$.
   - Identify primary disturbance, calculate the anion gap, and evaluate respiratory compensation using Winter's formula ($Expected\\;PaCO_2 = 1.5[HCO_3^-] + 8 \\pm 2$).
2. **Hemorrhagic Shock Compensatory Mechanisms**: Trace the acute neurohumoral reflex responses (carotid baroreceptor unloading, sympathetic activation, RAAS, ADH release) following a 1,000 mL acute blood loss.
3. **Pressure-Volume Loop Alterations**: Draw and explain the pressure-volume loop alterations observed in severe Aortic Stenosis versus severe Mitral Regurgitation.`,
  },
  {
    id: 'med-immunology',
    title: 'Immunology & Microbiology',
    category: 'Year 2',
    description:
      'Host defence, pathogens, laboratory diagnosis, and principles of infection prevention.',
    rank: 1,
    order: 1,
    coreNotes: `# Medical Immunology & Clinical Microbiology

## 1. Innate Immunity & Antigen Presentation
- **Pattern Recognition**: Toll-Like Receptors (TLRs) recognize Pathogen-Associated Molecular Patterns (PAMPs, e.g., TLR-4 recognizes Gram-negative LPS) and DAMPs, activating NF-$\\kappa$B to transcribe pro-inflammatory cytokines (IL-1, IL-6, TNF-$\\alpha$).
- **Complement Cascade**:
  - *Classical Pathway*: Antigen-antibody complexes (IgM, IgG) bind C1.
  - *Lectin Pathway*: MBL binds bacterial mannose.
  - *Alternative Pathway*: Spontaneous C3 hydrolysis on foreign microbial surfaces.
  - *Convergence*: C3 convertase $\\to$ C5 convertase $\\to$ Membrane Attack Complex (MAC: C5b-9) causing microbial lysis. C3b acts as opsonin; C3a/C5a act as anaphylatoxins.
- **Antigen Presentation (MHC Class I vs. II)**:
  - *MHC Class I*: Expressed on all nucleated cells; presents endogenous intracellular peptides to $CD8^+$ cytotoxic T cells.
  - *MHC Class II*: Expressed on professional APCs (dendritic cells, macrophages, B cells); presents exogenous ingested antigens to $CD4^+$ helper T cells.

## 2. Adaptive Immunity & Hypersensitivity
- **T Helper Cell Polarization**:
  - $Th_1$ (driven by IL-12, IFN-$\\gamma$): Activates macrophages and cytotoxic responses against intracellular pathogens.
  - $Th_2$ (driven by IL-4): Stimulates B-cell IgE switching, eosinophils, and helminth immunity.
  - $Th_{17}$ (driven by IL-6, TGF-$\\beta$): Recruits neutrophils against extracellular mucosal bacteria and fungi.
- **Gell and Coombs Hypersensitivity**:
  - *Type I (Immediate)*: IgE cross-linking on mast cells triggering histamine/leukotriene degranulation (anaphylaxis, allergic asthma).
  - *Type II (Cytotoxic)*: Antibodies (IgG/IgM) bind cellular antigens, causing complement lysis or ADCC (Goodpasture, autoimmune hemolytic anemia).
  - *Type III (Immune Complex)*: Soluble antigen-antibody complexes deposit in microvasculature (SLE, post-streptococcal glomerulonephritis, serum sickness).
  - *Type IV (Delayed-Type)*: T-cell mediated; macrophage activation and cytokine release after 48-72 hours (Mantoux tuberculin test, contact dermatitis).

## 3. Systematic Clinical Microbiology
- **Gram-Positive Bacteria**:
  - *Cocci*: *Staphylococcus aureus* (catalase+, coagulase+; MRSA with altered PBP-2a), *Streptococcus pyogenes* (Group A, $\\beta$-hemolytic, bacitracin-sensitive; causes pharyngitis, rheumatic fever, necrotizing fasciitis), *Streptococcus pneumoniae* ($\\alpha$-hemolytic, optochin-sensitive).
  - *Bacilli*: *Clostridioides difficile* (pseudomembranous colitis), *Listeria monocytogenes* (tumbling motility, neonatal meningitis).
- **Gram-Negative Bacteria**:
  - *Enterobacteriaceae*: *E. coli* (UTI, sepsis, EHEC producing Shiga-like toxin and HUS), *Klebsiella pneumoniae*, *Pseudomonas aeruginosa* (oxidase+, non-fermenting, biofilm producer in cystic fibrosis).
- **Clinical Virology**: Retroviruses (HIV: gp120 binding CD4/CCR5, viral load vs. CD4 count monitoring), Herpesviridae (HSV, VZV, EBV, CMV), Hepatitis viruses (HBV serology: HBsAg, anti-HBs, anti-HBc IgM/IgG, HBeAg).`,
    reviewPrompts: `# Immunology & Microbiology — Diagnostic Scenarios

## Clinical Diagnostic Challenges
1. **Hepatitis B Serological Panel Interpretation**: A 32-year-old healthcare worker sustains a needlestick injury. Decode the following patient laboratory results:
   - Panel A: $\\text{HBsAg}(-), \\text{anti-HBc}(-), \\text{anti-HBs}(+)$.
   - Panel B: $\\text{HBsAg}(+), \\text{anti-HBc IgM}(+), \\text{anti-HBs}(-)$.
   - Panel C: $\\text{HBsAg}(-), \\text{anti-HBc IgG}(+), \\text{anti-HBs}(+)$.
2. **Anaphylaxis Pathophysiology & Management**: Explain the intracellular signaling mechanism of IgE-mediated mast cell degranulation during anaphylaxis. Why is intramuscular epinephrine the immediate first-line medication rather than antihistamines or corticosteroids?
3. **Antimicrobial Resistance Mechanisms**: Contrast beta-lactamase enzymatic cleavage, target alteration (PBP-2a in MRSA, altered DNA gyrase in fluoroquinolone resistance), and efflux pumps in *Pseudomonas aeruginosa*.`,
  },
  {
    id: 'med-pathophysiology',
    title: 'Pathophysiology',
    category: 'Year 2',
    description:
      'Mechanisms by which normal regulation fails and produces symptoms, signs, and disease patterns.',
    rank: 1,
    order: 2,
    coreNotes: `# General & Systemic Pathophysiology

## 1. Cellular Injury, Death, and Hemodynamics
- **Reversible vs. Irreversible Cell Injury**:
  - *Reversible*: Cellular swelling (loss of $Na^+/K^+$ ATPase pump), fatty change, blebbing.
  - *Irreversible*: Severe mitochondrial vacuolization, amorphous calcium influx, plasma membrane rupture, nuclear pyknosis, karyorrhexis, and karyolysis.
  - *Apoptosis vs. Necrosis*: Necrosis causes cell lysis with inflammation; apoptosis is ATP-dependent programmed cell shrinkage with intact membranes and no inflammatory reaction.
- **Thrombosis & Virchow's Triad**:
  1. *Endothelial Injury*: Denuded basement membrane exposes collagen and von Willebrand factor (vWF).
  2. *Abnormal Blood Flow*: Stasis (atrial fibrillation, prolonged immobilization) or turbulence.
  3. *Hypercoagulability*: Factor V Leiden (resistance to activated protein C), Prothrombin G20210A, Antiphospholipid syndrome.

## 2. Pathophysiology of Shock States
Shock is defined as systemic tissue hypoperfusion resulting in inadequate cellular oxygen delivery ($DO_2 < VO_2$).
| Shock Classification | Cardiac Output (CO) | Systemic Vascular Resistance (SVR) | Central Venous / Wedge Pressure (PCWP) | Central Venous Oxygen ($ScvO_2$) |
| :--- | :---: | :---: | :---: | :---: |
| **Hypovolemic** (hemorrhage, severe dehydration) | $\\downarrow$ | $\\uparrow$ (vasoconstriction) | $\\downarrow$ | $\\downarrow$ |
| **Cardiogenic** (massive MI, acute HF) | $\\downarrow$ | $\\uparrow$ | $\\uparrow$ | $\\downarrow$ |
| **Distributive** (Septic, Anaphylactic) | $\\uparrow$ (early) | $\\downarrow\\downarrow$ (vasodilation) | $\\downarrow$ or normal | $\\uparrow$ (extraction failure) |
| **Obstructive** (PE, cardiac tamponade, tension PTX) | $\\downarrow$ | $\\uparrow$ | $\\uparrow$ | $\\downarrow$ |

- **Septic Shock Cascade**: Microbial endotoxin/exotoxin activates monocytes $\\to$ Cytokine storm (IL-1, TNF-$\\alpha$) $\\to$ Endothelial nitric oxide synthase (eNOS/iNOS) release $\\to$ Profound systemic vasodilation, capillary leak, microvascular thrombosis, and multiorgan dysfunction syndrome (MODS).

## 3. Heart Failure & Pulmonary Pathophysiology
- **Heart Failure Pathophysiology**:
  - *HFrEF (Systolic)*: Ejection fraction $<40\\%$; impaired contractility, eccentric hypertrophy, progressive ventricular dilation.
  - *HFpEF (Diastolic)*: Normal EF; impaired ventricular relaxation and reduced compliance, concentric hypertrophy, elevated filling pressures.
  - *Neurohumoral Maladaptation*: Long-term sympathetic activation and RAAS promote cardiac fibrosis, remodeling, and adverse afterload escalation.
- **Respiratory Failure**:
  - *Type 1 (Hypoxemic)*: $PaO_2 < 60\\;\\text{mmHg}$ with normal/low $PaCO_2$ ($V/Q$ mismatch, shunt, diffusion limitation as in ARDS, severe pneumonia).
  - *Type 2 (Hypercapnic)*: $PaCO_2 > 50\\;\\text{mmHg}$ (alveolar hypoventilation due to COPD, neuromuscular weakness, central hypoventilation).`,
    reviewPrompts: `# Pathophysiology — Mechanisms & Clinical Evaluation

## Case Walkthroughs
1. **Septic Shock Resuscitation Mechanics**: Detail why a septic patient presents with warm extremities and a wide pulse pressure in the early "warm shock" phase, followed by refractory hypotension despite fluid boluses.
2. **ARDS Pathophysiology**: Walk through the exudative, proliferative, and fibrotic phases of Acute Respiratory Distress Syndrome (ARDS). How does alveolar-capillary membrane destruction produce non-cardiogenic pulmonary edema and severe refractory hypoxemia?
3. **Cardiorenal Syndrome**: Explain the hemodynamic and neurohormonal feedback loops whereby worsening heart failure precipitates acute kidney injury, and how aggressive loop diuretic therapy can complicate the balance between decongestion and renal perfusion.`,
  },
  {
    id: 'med-pathomorphology',
    title: 'Pathomorphology',
    category: 'Year 3',
    description:
      'Structural changes in cells, tissues, and organs that support diagnosis and prognosis.',
    rank: 2,
    order: 0,
    coreNotes: `# Clinical Pathomorphology & Histopathology

## 1. Cellular Adaptations & Patterns of Tissue Necrosis
- **Adaptations**:
  - *Hypertrophy*: Increase in cell size (e.g., left ventricular hypertrophy in hypertension).
  - *Hyperplasia*: Increase in cell number (e.g., benign prostatic hyperplasia).
  - *Atrophy*: Shrinkage in cell size and function via ubiquitin-proteasome degradation and autophagy.
  - *Metaplasia*: Reversible transformation of one differentiated cell type into another (e.g., Barrett esophagus: stratified squamous replaced by intestinal columnar with goblet cells).
- **Patterns of Necrosis**:
  - *Coagulative*: Ghost cell outlines preserved with loss of nuclei; typical of ischemic infarction in solid organs (heart, kidney, spleen).
  - *Liquefactive*: Complete enzymatic digestion into liquid viscous mass; typical of brain infarcts and bacterial abscesses.
  - *Caseous*: Friable cheese-like debris surrounded by granulomatous inflammation; hallmark of tuberculosis.
  - *Fat Necrosis*: Enzymatic saponification of adipose tissue by lipases with calcium deposition; seen in acute pancreatitis and breast trauma.
  - *Fibrinoid*: Antigen-antibody complexes deposited in blood vessel walls with leaked fibrin; seen in vasculitis and malignant hypertension.

## 2. Neoplasia & Tumor Biology
- **Benign vs. Malignant Criteria**:
  - *Benign*: Well-differentiated, slow growth, cohesive expansile mass, encapsulated, absence of metastasis.
  - *Malignant*: Anaplasia, pleomorphism, hyperchromatic nuclei, high nuclear-to-cytoplasmic ratio, atypical mitoses, local invasion through basement membrane, vascular/lymphatic metastasis.
- **TNM Staging System**:
  - **T** (Tumor size and local extent: Tis, T1-T4).
  - **N** (Regional lymph node involvement: N0-N3).
  - **M** (Distant metastasis: M0, M1). Staging dictates prognosis and clinical management far more reliably than histological grading.

## 3. Cardiovascular & Pulmonary Pathology
- **Atherosclerosis Progression**: Endothelial injury $\\to$ LDL accumulation and oxidation in tunica intima $\\to$ Monocyte recruitment $\\to$ Macrophage foam cells (fatty streak) $\\to$ Smooth muscle proliferation and extracellular matrix synthesis (fibromuscular cap) $\\to$ Plaque rupture with acute luminal thrombus.
- **Myocardial Infarction Histological Timeline**:
  - *0-4 hours*: Minimal change; wavy myocardial fibers.
  - *4-24 hours*: Early coagulative necrosis, contraction band necrosis, marginal hemorrhage, early neutrophil infiltration.
  - *1-3 days*: Dense neutrophilic infiltrate, loss of nuclei (karyolysis).
  - *3-7 days*: Macrophage phagocytosis of dead myocytes, yellow-tan softening; peak risk of myocardial wall rupture, ventricular septal defect, and papillary muscle rupture.
  - *7-10 days*: Granulation tissue with extensive capillaries and collagen deposition.
  - *2 months+*: Dense, mature collagenous scar tissue.`,
    reviewPrompts: `# Pathomorphology — Diagnostic Histology & Cases

## Histopathology Challenges
1. **Myocardial Infarction Timeline Correlation**: A 62-year-old male dies suddenly 5 days after an acute myocardial infarction. At autopsy, the heart shows a hemopericardium and a transmural ventricular wall tear. Explain the histological composition of the infarcted tissue on day 5 that predisposed him to mechanical rupture.
2. **Barrett Esophagus & Adenocarcinoma Staging**: Detail the histological hallmark of Barrett esophagus on endoscopic biopsy. Outline the progression from low-grade dysplasia to high-grade dysplasia and invasive adenocarcinoma, including basement membrane invasion.
3. **Granulomatous Inflammation Morphology**: Describe the microscopic structure of a caseating granuloma (central caseous necrosis, epithelioid histiocytes, Langhans multinucleated giant cells, peripheral lymphocytic rim). List the primary infectious and non-infectious differential diagnoses.`,
  },
  {
    id: 'med-pharmacology',
    title: 'Pharmacology & Toxicology',
    category: 'Year 3',
    description:
      'Drug mechanisms, therapeutic choices, adverse effects, interactions, and poisoning principles.',
    rank: 2,
    order: 1,
    coreNotes: `# Medical Pharmacology & Clinical Toxicology

## 1. Pharmacokinetics & Dynamics (ADME)
- **Absorption & Bioavailability ($F$)**: Fraction of administered drug reaching systemic circulation:
  $$F = \\frac{AUC_{\\text{oral}}}{AUC_{\\text{IV}}} \\times 100\\%$$
- **Distribution**:
  $$V_d = \\frac{\\text{Total Drug in Body}}{C_{\\text{plasma}}}$$
  High $V_d$ indicates extensive tissue and fat distribution (lipophilic drugs); low $V_d$ indicates retention in plasma (hydrophilic, highly protein-bound).
- **Clearance & Elimination**:
  $$CL = \\frac{\\text{Rate of Elimination}}{C_{\\text{plasma}}}, \\quad t_{1/2} = \\frac{0.693 \\times V_d}{CL}$$
  - *First-Order Kinetics*: Constant fraction of drug eliminated per unit time; rate is proportional to concentration.
  - *Zero-Order Kinetics*: Constant amount of drug eliminated per unit time due to enzyme saturation (Ethanol, Phenytoin, high-dose Aspirin).
- **Phase I vs. Phase II Metabolism**:
  - *Phase I (Cytochrome P450)*: Oxidation, reduction, hydrolysis yielding polar metabolites (CYP3A4, CYP2D6; vulnerable to inducers like Rifampin, Phenytoin; and inhibitors like Ketoconazole, Macrolides, Grapefruit juice).
  - *Phase II*: Glucuronidation, acetylation, sulfation yielding inactive water-soluble conjugates.

## 2. Cardiovascular & Autonomic Pharmacology
- **Antihypertensive & Heart Failure Agents**:
  - *ACE Inhibitors (Enalapril, Ramipril)*: Inhibit conversion of Ang I to Ang II; prevent cardiac remodeling; adverse effect: dry cough and angioedema due to bradykinin accumulation.
  - *ARBs (Losartan, Valsartan)*: Block $AT_1$ receptors without bradykinin accumulation.
  - *Beta-Blockers (Metoprolol, Carvedilol, Bisoprolol)*: Reduce heart rate, myocardial contractility, and renin release; proven mortality benefit in chronic HFrEF.
  - *SGLT2 Inhibitors (Dapagliflozin, Empagliflozin)*: Inhibit proximal renal glucose/sodium reabsorption; profound cardiovascular and renal protection in both HFrEF and HFpEF.

## 3. Antimicrobial Pharmacology
- **Cell Wall Synthesis Inhibitors**:
  - *Beta-Lactams (Penicillins, Cephalosporins, Carbapenems)*: Inhibit transpeptidases (PBPs); bactericidal.
  - *Glycopeptides (Vancomycin)*: Binds D-Ala-D-Ala terminus of cell wall peptidoglycan; active only against Gram-positives (MRSA, oral for *C. diff*).
- **Protein Synthesis Inhibitors**:
  - 30S Subunit: Aminoglycosides (Gentamicin - bactericidal, nephrotoxic, ototoxic), Tetracyclines (Doxycycline - bacteriostatic).
  - 50S Subunit: Macrolides (Azithromycin), Clindamycin, Linezolid.

## 4. Clinical Toxicology & Antidotes
| Toxin / Drug Poisoning | Toxic Manifestation | Specific Antidote |
| :--- | :--- | :--- |
| **Paracetamol (Acetaminophen)** | Hepatic necrosis (toxic NAPQI metabolite) | **N-Acetylcysteine (NAC)** (replenishes glutathione) |
| **Opioids (Morphine, Fentanyl)** | Respiratory depression, miosis, coma | **Naloxone** (competitive opioid antagonist) |
| **Benzodiazepines** | Sedation, ataxia, respiratory depression | **Flumazenil** (GABA receptor antagonist) |
| **Organophosphates** | Cholinergic crisis: SLUDGEM, bradycardia | **Atropine** + **Pralidoxime (2-PAM)** |
| **Digoxin** | Arrhythmias, hyperkalemia, yellow vision | **Digoxin Immune Fab (DigiFab)** |`,
    reviewPrompts: `# Pharmacology & Toxicology — Clinical Prescribing Cases

## Prescription Scenarios
1. **Paracetamol Overdose Management**: An 18-year-old presents 6 hours after ingesting 20 grams of paracetamol.
   - Explain how CYP2E1 generates toxic NAPQI when glutathione is exhausted.
   - Interpret the Rumack-Matthew nomogram to guide decision-making.
   - Detail the administration protocol and window for N-acetylcysteine.
2. **Cytochrome P450 Drug Interaction**: A patient on chronic Warfarin therapy is prescribed Clarithromycin for an atypical respiratory infection. Five days later, his INR is 8.5 with gross hematuria. Explain the pharmacokinetic mechanism of CYP3A4/CYP2C9 inhibition.
3. **Gentamicin Therapeutic Drug Monitoring**: Explain why aminoglycosides require therapeutic peak and trough monitoring. Contrast the concentration-dependent bactericidal killing and post-antibiotic effect with the pathophysiology of nephrotoxicity.`,
  },
  {
    id: 'med-internal-medicine',
    title: 'Internal Medicine',
    category: 'Year 4',
    description:
      'Clinical assessment and management of adult medical conditions across organ systems.',
    rank: 3,
    order: 0,
    coreNotes: `# Clinical Internal Medicine

## 1. Cardiology: Acute Coronary Syndromes (ACS)
- **Clinical Presentation**: Retrosternal pressure/squeezing pain radiating to left arm, neck, or jaw, accompanied by diaphoresis, dyspnea, or nausea.
- **Diagnostic Triage**:
  - *STEMI*: Persistent ST-elevation $\\ge 1$ mm in $\\ge 2$ contiguous leads (or new LBBB). Immediate reperfusion required (Primary PCI within 90 minutes of medical contact).
  - *NSTEMI*: Cardiac biomarkers (high-sensitivity troponin I/T) elevated without ST-elevation (ST depression, T-wave inversion). Early invasive angiography within 24 hours.
  - *Unstable Angina*: Angina at rest or crescendo pattern with normal troponin levels.
- **Acute Medical Management**: Aspirin (300 mg loading) + $P2Y_{12}$ inhibitor (Ticagrelor or Prasugrel), unfractionated heparin or LMWH, sublingual nitroglycerin, beta-blocker, high-intensity statin (Atorvastatin 80 mg).

## 2. Pulmonology: COPD & Community-Acquired Pneumonia (CAP)
- **COPD Exacerbation**:
  - *Pathophysiology*: Progressive airflow limitation driven by chronic bronchitis and emphysema, triggered by viral/bacterial infections or air pollution.
  - *Management*: Controlled oxygen therapy ($SpO_2$ target $88-92\\%$ to prevent hypercapnic respiratory drive loss), inhaled short-acting bronchodilators (Salbutamol + Ipratropium), systemic corticosteroids (Prednisone 40 mg for 5 days), antibiotics if purulent sputum present, Non-Invasive Ventilation (BiPAP) for acute respiratory acidosis ($pH < 7.35, PaCO_2 > 45$).
- **Community-Acquired Pneumonia**:
  - *Etiology*: *Streptococcus pneumoniae*, *Haemophilus influenzae*, atypical pathogens (*Mycoplasma*, *Legionella*).
  - *CURB-65 Severity Score*: **C**onfusion, **U**rea $>7\\;\\text{mmol/L}$, **R**espiratory rate $\\ge 30$, **B**lood pressure (SBP $<90$ or DBP $\\le 60$), Age $\\ge \\mathbf{65}$. Scores $\\ge 2$ warrant inpatient admission; $\\ge 3$ warrants ICU evaluation.

## 3. Endocrinology: Diabetes Mellitus & Thyroid Emergencies
- **Type 2 Diabetes Diagnostic Criteria**:
  - Fasting plasma glucose $\\ge 126\\;\\text{mg/dL}$ ($7.0\\;\\text{mmol/L}$) on two occasions.
  - $HbA1c \\ge 6.5\\%$ ($48\\;\\text{mmol/mol}$).
  - 2-hour post-OGTT glucose $\\ge 200\\;\\text{mg/dL}$ ($11.1\\;\\text{mmol/L}$).
  - Random glucose $\\ge 200\\;\\text{mg/dL}$ with classic symptoms of hyperglycemia.
- **Diabetic Ketoacidosis (DKA) vs. Hyperosmolar Hyperglycemic State (HHS)**:
  - *DKA*: Blood glucose $250-600\\;\\text{mg/dL}$, elevated ketones, metabolic acidosis ($pH < 7.30, HCO_3^- < 18$). Protocol: aggressive isotonic saline, IV regular insulin infusion ($0.1\\;\\text{units/kg/hr}$), potassium repletion (maintain $4-5\\;\\text{mEq/L}$ before insulin).
  - *HHS*: Extreme hyperglycemia ($>600\\;\\text{mg/dL}$), serum osmolality $>320\\;\\text{mOsm/kg}$, absent significant ketoacidosis; profound dehydration.`,
    reviewPrompts: `# Internal Medicine — Clinical Assessment & Decision-Making

## Clinical Management Challenges
1. **Differential Diagnosis of Acute Dyspnea**: A 68-year-old female presents with acute onset dyspnea, orthopnea, bilateral lower extremity edema, and basilar crackles.
   - Outline the diagnostic workup (ECG, chest X-ray, NT-proBNP, point-of-care cardiac ultrasound).
   - How does an elevated NT-proBNP differentiate acute decompensated heart failure from a primary COPD exacerbation?
   - Formulate initial emergency pharmacological management.
2. **Acute Chest Pain Stratification**: Detail the TIMI and GRACE risk score components for acute coronary syndromes, and determine when a patient requires emergent vs. urgent coronary catheterization.
3. **Severe Hypokalemia in DKA Treatment**: Why must insulin administration be delayed if serum potassium is $<3.3\\;\\text{mEq/L}$, and what are the characteristic ECG findings of progressive hypokalemia?`,
  },
  {
    id: 'med-surgery',
    title: 'Surgery',
    category: 'Year 4',
    description:
      'Perioperative assessment, surgical disease, acute care, and procedural safety.',
    rank: 3,
    order: 1,
    coreNotes: `# General & Acute Care Surgery

## 1. The Acute Abdomen: Diagnosis & Surgical Decision-Making
- **Evaluation Principles**: Distinguishing surgical emergencies from medical causes; sudden vs. gradual onset, somatic vs. visceral pain.
- **Acute Appendicitis**:
  - *Pathophysiology*: Luminal obstruction by fecalith or lymphoid hyperplasia $\\to$ elevated intraluminal pressure $\\to$ venous congestion $\\to$ ischemic gangrene and perforation.
  - *Signs*: McBurney point tenderness, Rovsing sign (left lower quadrant pressure elicits RLQ pain), Psoas sign, Obturator sign.
  - *Scoring*: Alvarado score $\\ge 7$ strongly predicts acute appendicitis; ultrasound or contrast CT confirms.
- **Acute Cholecystitis**:
  - *Pathophysiology*: Gallstone impaction in cystic duct producing chemical and secondary bacterial inflammation.
  - *Signs*: Murphy sign (inspiratory arrest on deep palpation of RUQ); ultrasound demonstrates gallstones, gallbladder wall thickening ($>3$ mm), pericholecystic fluid, and sonographic Murphy sign.
  - *Management*: Early laparoscopic cholecystectomy within 72 hours of admission.
- **Bowel Obstruction**:
  - *Small Bowel Obstruction (SBO)*: Most common cause: postoperative adhesions (60-70%), followed by incarcerated hernias. Abdominal X-ray demonstrates dilated small bowel loops ($>3$ cm) with air-fluid levels and absence of colonic gas.
  - *Large Bowel Obstruction (LBO)*: Most common cause: colorectal adenocarcinoma, diverticulitis, volvulus.

## 2. Advanced Trauma Life Support (ATLS Protocol)
The primary survey systematically identifies and treats immediate life-threatening conditions (ABCDE approach):
- **A — Airway with Cervical Spine Protection**: Ensure patent airway; jaw thrust / chin lift; endotracheal intubation if GCS $\\le 8$ or airway compromised. Rigid cervical collar.
- **B — Breathing and Ventilation**: Inspect chest excursions, auscultate breath sounds.
  - *Tension Pneumothorax*: Immediate needle decompression (5th intercostal space anterior axillary line or 2nd space midclavicular line) followed by tube thoracostomy.
  - *Massive Hemothorax*: $>1500$ mL initial chest tube output requires emergency thoracotomy.
  - *Flail Chest*: $\\ge 2$ contiguous ribs fractured in $\\ge 2$ places producing paradoxical chest wall movement.
- **C — Circulation with Hemorrhage Control**: Direct pressure on external bleeding; pelvic binder for unstable fractures; two large-bore IVs; 1:1:1 balanced massive transfusion protocol (PRBCs, FFP, Platelets). FAST ultrasound exam (Focused Assessment with Sonography for Trauma).
- **D — Disability**: Glasgow Coma Scale (GCS 3-15) and pupillary light reflex.
- **E — Exposure / Environmental Control**: Complete undressing to identify hidden injuries; prevent hypothermia (warm fluids and air blankets).`,
    reviewPrompts: `# Surgery — Emergency & Trauma Scenarios

## Operative & Emergency Cases
1. **Acute Perforated Peptic Ulcer**: A 52-year-old male presents with sudden-onset, severe "knife-like" epigastric pain followed by generalized peritonitis with a board-like rigid abdomen.
   - What diagnostic imaging is indicated (erect chest X-ray demonstrating pneumoperitoneum)?
   - Detail the preoperative resuscitation and emergent surgical approach (Graham patch repair).
2. **FAST Ultrasound Interpretation**: During an ATLS trauma assessment for a hypotensive blunt abdominal trauma patient, the FAST exam reveals fluid in the hepatorenal space (Morison pouch) and splenorenal recess. What is the immediate next step in management for a hemodynamically unstable patient?
3. **Postoperative Fever Differential (The "5 Ws")**: A postoperative patient develops fever on day 3 following a hemicolectomy. Outline the systematic evaluation of: Wind (atelectasis), Water (UTI), Wound (surgical site infection), Walking (DVT/PE), and Wonder drugs.`,
  },
  {
    id: 'med-paediatrics',
    title: 'Paediatrics',
    category: 'Year 5',
    description:
      'Growth, development, and age-specific diagnosis and treatment from newborns to adolescents.',
    rank: 4,
    order: 0,
    coreNotes: `# Clinical Paediatrics & Child Health

## 1. Neonatal Assessment & Newborn Screening
- **The APGAR Score**: Evaluated at 1 and 5 minutes post-delivery:
  - **A**ppearance (Color: blue, acrocyanosis, pink).
  - **P**ulse ($0, <100, \\ge 100$ bpm).
  - **G**rimace (Reflex irritability: none, grimace, cry/cough).
  - **A**ctivity (Muscle tone: flaccid, some flexion, active motion).
  - **R**espiration (Absent, weak/irregular, vigorous cry).
  - Scores $\\ge 7$ indicate normal transition; $\\le 3$ represents severe distress requiring immediate resuscitation.
- **Neonatal Jaundice**:
  - *Physiological*: Appears after 24 hours, peaks at day 3-5, unconjugated bilirubin, benign.
  - *Pathological*: Appears within first 24 hours, rapidly rising bilirubin ($>5\\;\\text{mg/dL/day}$), conjugated fraction $>20\\%$, persists $>2$ weeks. Causes: ABO/Rh incompatibility, G6PD deficiency, biliary atresia (acholic stools). Phototherapy converts unconjugated bilirubin into water-soluble lumirubin.
- **Newborn Screening in Poland**: Universal dried blood spot heel prick test for phenylketonuria (PKU), congenital hypothyroidism, cystic fibrosis, congenital adrenal hyperplasia, and spinal muscular atrophy (SMA).

## 2. Developmental Milestones & Growth
- **Gross Motor**: 3 months (head support), 6 months (rolls over, sits with support), 9 months (crawls, sits unsupported), 12 months (stands, first steps), 18 months (runs, kicks ball).
- **Fine Motor & Language**: 4 months (reaches for objects), 9 months (pincer grasp), 12 months (1-2 single words with meaning), 2 years (2-word phrases, 50-word vocabulary).
- **Red Flags**: Failure to sit unsupported by 9 months; inability to walk by 18 months; absence of expressive words by 18 months; loss of previously acquired milestones (regression indicates metabolic/neurodegenerative disease).

## 3. Common Pediatric Emergencies & Infections
- **Acute Laryngotracheobronchitis (Croup)**:
  - *Etiology*: Parainfluenza virus.
  - *Presentation*: Barking cough, inspiratory stridor, hoarseness; "steeple sign" on AP neck X-ray.
  - *Management*: Single dose oral/IV Dexamethasone ($0.15-0.6\\;\\text{mg/kg}$); nebulized racemic epinephrine for moderate-to-severe stridor at rest.
- **Pediatric Dehydration & Fluid Therapy**:
  - *Holliday-Segar Maintenance Fluid Method*:
    - First 10 kg: $100\\;\\text{mL/kg/day}$
    - Second 10 kg: $50\\;\\text{mL/kg/day}$
    - Each kg $>20$: $20\\;\\text{mL/kg/day}$
  - *Acute Resuscitation*: $20\\;\\text{mL/kg}$ isotonic crystalloid bolus over 15-30 minutes for signs of shock.`,
    reviewPrompts: `# Paediatrics — Clinical Cases & Calculations

## Pediatric Cases
1. **Pediatric Fluid Calculation**: Calculate the 24-hour maintenance fluid volume and hourly infusion rate for a 16 kg child hospitalized with mild viral gastroenteritis using the Holliday-Segar rule.
2. **Febrile Seizure Evaluation**: An 18-month-old presents with a 2-minute generalized tonic-clonic seizure occurring during an acute temperature spike to $39.2^\\circ\\text{C}$ due to otitis media.
   - Distinguish simple febrile seizures from complex febrile seizures.
   - Outline the diagnostic criteria, parental reassurance advice, and long-term risk of epilepsy.
3. **Pediatric Meningitis Diagnostic Workup**: A 3-month-old infant presents with fever, poor feeding, irritability, and a bulging anterior fontanelle without clear nuchal rigidity. Outline the urgent diagnostic and empirical antibiotic protocol.`,
  },
  {
    id: 'med-obgyn',
    title: 'Obstetrics & Gynaecology',
    category: 'Year 5',
    description:
      'Reproductive health, pregnancy care, childbirth, and gynaecological conditions.',
    rank: 4,
    order: 1,
    coreNotes: `# Obstetrics & Gynaecology

## 1. Antenatal Care & Hypertensive Disorders of Pregnancy
- **Physiological Adaptations in Pregnancy**: Plasma volume expands 50%, RBC mass expands 20-30% (physiological hemodilution anemia), cardiac output increases 30-50%, systemic vascular resistance decreases, GFR increases 50% (lower baseline serum creatinine $0.4-0.6\\;\\text{mg/dL}$).
- **Hypertensive Disorders Spectrum**:
  - *Gestational Hypertension*: SBP $\\ge 140$ or DBP $\\ge 90$ after 20 weeks gestation without proteinuria or end-organ dysfunction.
  - *Pre-eclampsia*: Hypertension after 20 weeks with proteinuria ($\\ge 300$ mg/24h or protein/creatinine ratio $\\ge 0.3$) or signs of end-organ damage (thrombocytopenia, elevated transaminases, renal insufficiency, pulmonary edema, visual disturbances).
  - *HELLP Syndrome*: **H**emolysis (schistocytes, elevated LDH), **E**levated **L**iver enzymes (AST/ALT $>2\\times$ normal), **L**ow **P**latelets ($<100,000/\\mu\\text{L}$).
  - *Eclampsia*: New-onset generalized tonic-clonic seizures in a patient with pre-eclampsia. Seizure prophylaxis: IV Magnesium Sulfate (4-6 g loading, then $1-2\\;\\text{g/hr}$).

## 2. Normal Labor & Obstetric Emergencies
- **Stages of Labor**:
  - *Stage 1*: Onset of regular contractions to full cervical dilation (10 cm); latent phase ($0-6$ cm) and active phase ($6-10$ cm).
  - *Stage 2*: Full cervical dilation to delivery of infant.
  - *Stage 3*: Delivery of infant to complete expulsion of placenta.
  - *Stage 4*: First 1-2 hours postpartum (highest risk of hemorrhage).
- **Postpartum Hemorrhage (PPH)**:
  - Definition: Blood loss $\\ge 500$ mL after vaginal delivery or $\\ge 1000$ mL after cesarean section.
  - *The 4 Ts*: **T**one (uterine atony, 70-80%), **T**rauma (lacerations, rupture), **T**issue (retained placenta), **T**hrombin (coagulopathy).
  - *Management*: Uterine bimanual massage, IV Oxytocin (first-line uterotonic), Ergometrine, Carboprost ($PGF_{2\\alpha}$), Misoprostol, intrauterine balloon tamponade (Bakri balloon), surgical embolization/hysterectomy.

## 3. Core Gynaecological Pathology & Oncology
- **Ectopic Pregnancy**: Implantation outside endometrial cavity (95% in fallopian tube ampulla). Triad: amenorrhea, vaginal bleeding, unilateral pelvic pain. Diagnostic hallmark: transvaginal ultrasound showing empty uterus with serum $\\beta$-hCG above discriminatory zone ($1500-2000\\;\\text{mIU/mL}$).
- **Cervical Cancer Screening**: High-risk HPV testing (types 16 and 18 cause $>70\\%$ of cases) and Pap smear cytology detecting Cervical Intraepithelial Neoplasia (CIN I-III).`,
    reviewPrompts: `# Obstetrics & Gynaecology — Clinical Decision Scenarios

## Clinical Scenarios
1. **Severe Pre-eclampsia Stabilization**: A 34-week primigravida presents with severe headache, BP 175/115 mmHg, and $3+$ proteinuria.
   - Formulate immediate antihypertensive therapy (IV Labetalol or Hydralazine, oral Nifedipine).
   - Detail Magnesium Sulfate administration protocol and monitoring signs of magnesium toxicity (loss of deep tendon reflexes, respiratory depression).
   - What is the definitive treatment for pre-eclampsia?
2. **Suspected Ectopic Pregnancy Algorithm**: A 24-year-old female presents with acute pelvic pain, vaginal spotting, and positive urine pregnancy test. Outline the clinical algorithm distinguishing an intrauterine pregnancy, failing pregnancy, and ruptured ectopic pregnancy.
3. **Managing Postpartum Hemorrhage**: Walk through the step-by-step escalation protocol for a massive postpartum hemorrhage due to uterine atony following a precipitous delivery.`,
  },
  {
    id: 'med-neuro-psych',
    title: 'Neurology & Psychiatry',
    category: 'Year 5',
    description:
      'Neurological localisation, mental health assessment, and safe patient-centred treatment.',
    rank: 4,
    order: 2,
    coreNotes: `# Clinical Neurology & Psychiatry

## 1. Neurological Localization & Cerebrovascular Disease
- **Upper vs. Lower Motor Neuron Lesions**:
  - *Upper Motor Neuron (UMN)*: Hyperreflexia, spasticity (clasp-knife), positive Babinski sign, hypertonia, minimal disuse atrophy.
  - *Lower Motor Neuron (LMN)*: Hyporeflexia or flaccid paralysis, fasciculations, severe muscle wasting and denervation atrophy.
- **Acute Ischemic Stroke**:
  - *Vascular Syndromes*:
    - Middle Cerebral Artery (MCA): Contralateral hemiparesis and hemisensory loss (face and arm $>$ leg), homonymous hemianopia, aphasia (dominant left hemisphere: Broca or Wernicke) or hemineglect (non-dominant right hemisphere).
    - Anterior Cerebral Artery (ACA): Contralateral lower extremity motor and sensory deficit $>$ upper extremity.
    - Posterior Cerebral Artery (PCA): Contralateral homonymous hemianopia with macular sparing.
  - *Acute Thrombolytic Window*: IV Alteplase (tPA, $0.9\\;\\text{mg/kg}$) within 4.5 hours of symptom onset after ruling out hemorrhage on non-contrast head CT. Mechanical endovascular thrombectomy for large vessel occlusions up to 24 hours.

## 2. Epilepsy & Movement Disorders
- **Seizure Classification**: Focal (with or without dyscognitive features) vs. Generalized (Absence, Tonic-Clonic, Atonic).
- **Status Epilepticus Protocol**: Ongoing seizure activity $>5$ minutes or $\\ge 2$ seizures without recovery. First-line: IV Lorazepam ($0.1\\;\\text{mg/kg}$) or IM Midazolam; Second-line: IV Levetiracetam, Fosphenytoin, or Valproate; Third-line: General anesthesia with Propofol or Midazolam.
- **Parkinson Disease**: Loss of dopaminergic neurons in substantia nigra pars compacta with intracellular $\\alpha$-synuclein Lewy bodies. Cardinal motor tetrad: resting tremor (pill-rolling, 4-6 Hz), rigidity (cogwheel), akinesia/bradykinesia, postural instability. First-line therapy: Levodopa/Carbidopa.

## 3. Clinical Psychiatry: Mood, Psychosis, and Emergencies
- **Major Depressive Disorder (MDD)**: $\\ge 5$ of 9 SIGECAPS symptoms for $\\ge 2$ weeks: **S**leep changes, **I**nterest loss (anhedonia), **G**uilt, **E**nergy lack, **C**oncentration deficits, **A**ppetite changes, **P**sychomotor agitation/retardation, **S**uicidal ideation. First-line: SSRIs (Sertraline, Escitalopram).
- **Bipolar Disorder**: Bipolar I requires $\\ge 1$ manic episode (elevated mood, grandiosity, decreased need for sleep, pressured speech, flight of ideas, risky behavior for $\\ge 1$ week); Bipolar II requires hypomania and major depression. Mood stabilizers: Lithium, Valproate, Quetiapine.
- **Psychiatric Emergencies**:
  - *Neuroleptic Malignant Syndrome (NMS)*: Caused by dopamine antagonists (antipsychotics); lead-pipe rigidity, hyperthermia, autonomic instability, elevated creatine kinase. Treatment: Dantrolene, Bromocriptine.
  - *Serotonin Syndrome*: Caused by SSRI/MAOI/TCA combinations; hyperreflexia, clonus, tremor, diaphoresis. Treatment: Cyproheptadine.`,
    reviewPrompts: `# Neurology & Psychiatry — Case Examinations

## Differential Diagnosis Scenarios
1. **Acute Stroke Thrombolysis Checklist**: A 65-year-old female presents 2 hours after acute onset right-sided hemiplegia and expressive aphasia. Detail the contraindications to IV alteplase (active bleeding, recent intracranial hemorrhage, platelets $<100,000$, INR $>1.7$, recent major surgery).
2. **NMS vs. Serotonin Syndrome Differentiation**: Contrast the clinical features, neuromuscular findings (lead-pipe rigidity vs. neuromuscular clonus and hyperreflexia), and therapeutic antidotes for Neuroleptic Malignant Syndrome versus Serotonin Syndrome.
3. **Acute Delirium in the Elderly**: An 82-year-old postoperative patient develops acute fluctuating confusion, visual hallucinations, and reversal of sleep-wake cycles. Outline the diagnostic algorithm to identify reversible organic causes (infection/UTI, electrolytes, medications, hypoxia) before prescribing low-dose antipsychotics.`,
  },
  {
    id: 'med-clinical-rotations',
    title: 'Clinical Rotations & LEK Preparation',
    category: 'Year 6',
    description:
      'Supervised rotations, integrated clinical decisions, and preparation for the Polish medical final examination.',
    rank: 5,
    order: 0,
    coreNotes: `# Clinical Rotations, Medical Law & LEK Examination Blueprint

## 1. Polish Medical Final Examination (LEK) Structure & Blueprint
The **Lekarski Egzamin Końcowy (LEK)** is the national licensing examination administered by the Centrum Egzaminów Medycznych (CEM) in Łódź, required to obtain full medical practice rights (Prawo Wykonywania Zawodu) in Poland:
- **Test Format**: 200 multiple-choice questions (5 options, 1 correct answer) administered over 4 hours.
- **Content Distribution**:
  - Internal Medicine (*Choroby Wewnętrzne*): 39 questions (~20%)
  - Paediatrics (*Pediatria*): 29 questions (~15%)
  - Surgery (*Chirurgia*): 27 questions (~14%)
  - Obstetrics & Gynaecology (*Ginekologia i Położnictwo*): 26 questions (~13%)
  - Psychiatry (*Psychiatria*): 14 questions (~7%)
  - Emergency Medicine & Intensive Care (*Medycyna Ratunkowa i Intensywna Terapia*): 20 questions (~10%)
  - Family Medicine (*Medycyna Rodzinna*): 20 questions (~10%)
  - Bioethics & Medical Law (*Prawo Medyczne i Bioetyka*): 15 questions (~7.5%)
  - Public Health (*Zdrowie Publiczne*): 10 questions (~5%)
- **Passing Threshold**: 56% (minimum 112 points out of 200).

## 2. Emergency Medicine & Resuscitation Protocols (ERC Guidelines)
- **Basic Life Support (BLS)**:
  - Unresponsive victim without normal breathing $\\to$ Call for help / activate EMS.
  - Chest compressions: 30 compressions to 2 ventilations (depth 5-6 cm, rate 100-120/min).
  - Early AED application.
- **Advanced Life Support (ALS) Algorithm**:
  - *Shockable Rhythms*: Ventricular Fibrillation (VF) and Pulseless Ventricular Tachycardia (pVT). Deliver 1 shock (150-200 J biphasic), resume CPR immediately for 2 minutes; Epinephrine 1 mg IV after 3rd shock (every 3-5 min); Amiodarone 300 mg IV after 3rd shock, additional 150 mg after 5th shock.
  - *Non-Shockable Rhythms*: Asystole and Pulseless Electrical Activity (PEA). Immediate CPR for 2 minutes, Epinephrine 1 mg IV as soon as vascular access established.
  - *Reversible Causes (The 4 Hs and 4 Ts)*:
    - **H**ypoxia, **H**ypovolemia, **H**ypo/hyperkalemia, **H**ypo/hyperthermia.
    - **T**ension pneumothorax, **T**amponade (cardiac), **T**oxins, **T**hrombosis (pulmonary or coronary).

## 3. Polish Medical Law, Bioethics, and Patient Rights
- **Informed Consent (*Zgoda na zabieg medyczny*)**:
  - Ordinary examination: implied or verbal consent.
  - Surgical operations or procedures with heightened risk: written informed consent mandatory.
  - Minors (aged 16-18): dual consent (*zgoda kumulatywna* - both legal guardian and minor patient must consent).
- **Medical Confidentiality (*Tajemnica lekarska*)**:
  - Bound even after patient's death.
  - Exceptions: statutory obligation (communicable diseases), patient consent, imminent threat to life/health of patient or third parties.
- **Declaration of Death (*Stwierdzenie zgonu*)**:
  - Brain death protocol: irreversible cessation of brainstem function evaluated by a multidisciplinary specialist committee (clinical reflex tests, apnea test, confirmatory instrumental tests: EEG, cerebral angiography).`,
    reviewPrompts: `# Clinical Rotations & LEK Preparation — High-Yield Synthesis

## LEK Case Challenges
1. **ALS Shockable Algorithm Decision Sequence**: During a cardiac arrest code in the hospital ward, the monitor shows ventricular fibrillation. Detail the sequence: shock energy selection, timing of pulse and rhythm checks, CPR continuity, and exact timing of Epinephrine vs. Amiodarone administration.
2. **Medical Law Dilemma (Minor Consent)**: A 17-year-old male with acute appendicitis refuses appendectomy, while his parents insist on the operation. How does Polish medical law resolve conflicts in dual consent (*zgoda kumulatywna*), and which authority is consulted?
3. **Multidisciplinary LEK Synthesis Case**: A 72-year-old male with longstanding diabetes and atrial fibrillation presents with acute onset severe abdominal pain out of proportion to physical exam findings and an elevated serum lactate. Synthesize the vascular surgical emergency (acute mesenteric ischemia), diagnostic modality (contrast CT angiography), and immediate operative interventions.`,
  },
];
