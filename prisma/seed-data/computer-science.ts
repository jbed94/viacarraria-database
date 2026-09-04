import type { Course, SeedEdge } from './types.js';

export const computerScienceEdges: SeedEdge[] = [
  { id: 'cs-programming-oop', source: 'cs-programming', target: 'cs-oop' },
  { id: 'cs-programming-algorithms', source: 'cs-programming', target: 'cs-algorithms' },
  { id: 'cs-programming-architecture', source: 'cs-programming', target: 'cs-architecture' },
  { id: 'cs-math-algorithms', source: 'cs-math', target: 'cs-algorithms' },
  { id: 'cs-calculus-algorithms', source: 'cs-calculus', target: 'cs-algorithms' },
  { id: 'cs-oop-databases', source: 'cs-oop', target: 'cs-databases' },
  { id: 'cs-oop-software-engineering', source: 'cs-oop', target: 'cs-software-engineering' },
  { id: 'cs-algorithms-databases', source: 'cs-algorithms', target: 'cs-databases' },
  { id: 'cs-algorithms-systems', source: 'cs-algorithms', target: 'cs-systems' },
  { id: 'cs-architecture-operating-systems', source: 'cs-architecture', target: 'cs-operating-systems' },
  { id: 'cs-databases-systems', source: 'cs-databases', target: 'cs-systems' },
  { id: 'cs-networks-systems', source: 'cs-networks', target: 'cs-systems' },
  { id: 'cs-networks-security', source: 'cs-networks', target: 'cs-security' },
  { id: 'cs-software-engineering-cloud', source: 'cs-software-engineering', target: 'cs-cloud' },
  { id: 'cs-operating-systems-security', source: 'cs-operating-systems', target: 'cs-security' },
  { id: 'cs-operating-systems-systems', source: 'cs-operating-systems', target: 'cs-systems' },
  { id: 'cs-security-capstone', source: 'cs-security', target: 'cs-capstone' },
  { id: 'cs-systems-cloud', source: 'cs-systems', target: 'cs-cloud' },
  { id: 'cs-systems-capstone', source: 'cs-systems', target: 'cs-capstone' },
  { id: 'cs-cloud-capstone', source: 'cs-cloud', target: 'cs-capstone' },
];

export const computerScienceCourses: Course[] = [
  {
    id: 'cs-programming',
    title: 'Programming Fundamentals',
    category: 'Semester 1',
    description:
      'Problem decomposition, program structure, testing, and data representation.',
    rank: 0,
    order: 0,
    coreNotes: `# Programming Fundamentals

## 1. Computational Thinking & Problem Decomposition
Programming begins with decomposing broad challenges into unambiguous computational steps. Systematic decomposition requires:
- **State Representation**: Choosing appropriate data primitives (integers, floating-point numbers, characters, booleans) and compound structures.
- **Control Flow**: Directing program execution deterministically using conditionals (\`if/else\`, pattern matching) and loops (\`for\`, \`while\`).
- **Functional Abstraction**: Encapsulating reusable logic into functions with explicit inputs, predictable return values, and minimal side effects.

## 2. Memory Organization: Stack vs. Heap
- **The Call Stack**:
  - Automatically manages local variable storage and function frame lifecycles.
  - Follows Last-In, First-Out (LIFO) discipline; allocation and deallocation involve simply moving the stack pointer.
  - Characterized by fixed frame sizes determined at compile time; unbounded recursion risks stack overflow errors.
- **The Heap**:
  - Used for dynamic memory allocations where object lifecycles outlive the allocating stack frame.
  - Requires explicit pointer management or automatic runtime garbage collection (mark-and-sweep, reference counting).
  - Subject to fragmentation and heap allocation latency overheads.

## 3. Pointers, References, and Value Semantics
- **Pass-by-Value**: A complete copy of the variable data is passed to the subroutine; modifications inside the function do not affect the caller.
- **Pass-by-Reference / Pointer**: The memory address is passed, enabling in-place modification of caller data and avoiding heavy copy overheads for large structs.
- **Aliasing & Mutability**: When multiple references point to the same memory segment, uncontrolled concurrent or sequential mutation can lead to subtle bugs.

## 4. Testing, Invariants, and Debugging
- **Assertions & Invariants**: Preconditions validate inputs before execution; postconditions guarantee output invariants before returning.
- **Unit Testing**: Testing isolated units of code against boundary conditions (null pointers, empty arrays, integer overflows, off-by-one indices).
- **Static Analysis & Linters**: Early detection of memory leaks, uninitialized variables, and type mismatches before compilation or execution.`,
    reviewPrompts: `# Programming Fundamentals — Applied Review & Exercises

## Self-Check Questions
1. **Memory Allocation**: Trace what happens in memory when a dynamic array exceeds its allocated capacity. Compare the reallocation cost to amortized insertion time.
2. **Call Stack Tracing**: Draw the call stack frames for an implementation of the Euclidean algorithm for greatest common divisor (GCD) computing \`gcd(48, 18)\`.
3. **Pointers vs. Values**: In languages like C or Go, why is returning a pointer to a stack-allocated local variable undefined behavior? How does a heap-based allocation resolve this?

## Practical Implementation Exercise
Implement a generic singly linked list that supports:
- Insertion at head and tail in $O(1)$ time.
- Node deletion by value in $O(n)$ time.
- In-place reversal in $O(n)$ time and $O(1)$ auxiliary space without memory leaks.`,
  },
  {
    id: 'cs-math',
    title: 'Discrete Mathematics',
    category: 'Semester 1',
    description:
      'Logic, proofs, combinatorics, relations, and graph theory for computing.',
    rank: 0,
    order: 1,
    coreNotes: `# Discrete Mathematics for Computing

## 1. Propositional & Predicate Logic
- **Boolean Connectives**: Conjunction ($\\land$), disjunction ($\\lor$), negation ($\\neg$), material implication ($P \\implies Q \\equiv \\neg P \\lor Q$), and biconditional ($P \\iff Q$).
- **Quantifiers**: Universal quantifier ($\\forall x$) and existential quantifier ($\\exists x$). De Morgan's laws for quantifiers:
  $$\\neg(\\forall x P(x)) \\equiv \\exists x \\neg P(x)$$
  $$\\neg(\\exists x P(x)) \\equiv \\forall x \\neg P(x)$$
- **Normal Forms**: Conjunctive Normal Form (CNF) and Disjunctive Normal Form (DNF) form the foundation of SAT solvers and digital logic circuit design.

## 2. Mathematical Proof Techniques
- **Direct Proof**: Proving that $P \\implies Q$ by assuming $P$ is true and deriving $Q$ through axioms and theorems.
- **Proof by Contradiction (Reductio ad Absurdum)**: Assuming $\\neg P$ is true and demonstrating that this leads to an impossible logical contradiction.
- **Proof by Induction**:
  - *Base Case*: Prove $P(0)$ or $P(1)$ holds.
  - *Inductive Step*: Prove that $\\forall k, P(k) \\implies P(k+1)$.
  - *Strong Induction*: Assume $P(1), P(2), \\dots, P(k)$ all hold to prove $P(k+1)$.

## 3. Set Theory, Relations, and Functions
- **Equivalence Relations**: A binary relation $R$ on set $A$ that is reflexive ($aRa$), symmetric ($aRb \\implies bRa$), and transitive ($aRb \\land bRc \\implies aRc$). It partitions $A$ into disjoint equivalence classes.
- **Partial Orders (Posets)**: Reflexive, antisymmetric ($aRb \\land bRa \\implies a = b$), and transitive relations. Used to model scheduling dependencies and topological sorting.
- **Bijections & Cardinality**: Injective (one-to-one) and surjective (onto) mappings. Demonstrates countable infinity ($|\\mathbb{N}| = |\\mathbb{Q}|$) vs. uncountable continuum ($|\\mathbb{R}| > |\\mathbb{N}|$) via Cantor's diagonal argument.

## 4. Graph Theory Foundations
- **Graph Definitions**: $G = (V, E)$, directed vs. undirected, weighted vs. unweighted.
- **Eulerian vs. Hamiltonian Paths**:
  - *Eulerian Path*: Traverses every edge exactly once; exists if and only if vertices with odd degrees are either 0 or 2.
  - *Hamiltonian Path*: Visits every vertex exactly once; determining existence is NP-complete.
- **Trees & Spanning Forests**: An undirected graph is a tree if and only if it is connected and acyclic, satisfying $|E| = |V| - 1$.`,
    reviewPrompts: `# Discrete Mathematics — Review Prompts & Proof Challenges

## Proof Challenges
1. **Induction Challenge**: Prove by mathematical induction that for every positive integer $n$:
   $$\\sum_{i=1}^n i^2 = \\frac{n(n+1)(2n+1)}{6}$$
2. **Pigeonhole Principle**: Prove that in any group of 6 people, there must either be 3 mutual acquaintances or 3 mutual strangers.
3. **Graph Degree Sum Formula**: Prove the Handshaking Lemma: $\\sum_{v \\in V} \\deg(v) = 2|E|$, and explain why the number of vertices with odd degree in any graph must be even.

## Algorithmic Connections
Explain how the concept of a partial order directly dictates the validity of dependency resolution in package managers and build systems like Make and Turborepo.`,
  },
  {
    id: 'cs-calculus',
    title: 'Calculus & Linear Algebra',
    category: 'Semester 1',
    description:
      'Mathematical models, vectors, matrices, and change needed for technical computing.',
    rank: 0,
    order: 2,
    coreNotes: `# Calculus & Linear Algebra for Computing

## 1. Vectors, Norms, and Vector Spaces
- **Vector Operations**: Addition, scalar multiplication, dot product $\\mathbf{u} \\cdot \\mathbf{v} = \\sum u_i v_i = \\|\\mathbf{u}\\| \\|\\mathbf{v}\\| \\cos\\theta$.
- **Vector Norms**:
  - $L_1$ Norm (Manhattan): $\\|\\mathbf{x}\\|_1 = \\sum |x_i|$
  - $L_2$ Norm (Euclidean): $\\|\\mathbf{x}\\|_2 = \\sqrt{\\sum x_i^2}$
  - $L_\\infty$ Norm (Max): $\\|\\mathbf{x}\\|_\\infty = \\max |x_i|$
- **Cosine Similarity**: Normalizes dot product by vector magnitudes, providing scale-invariant similarity metric crucial for text and embedding search:
  $$\\text{CosineSim}(\\mathbf{u}, \\mathbf{v}) = \\frac{\\mathbf{u} \\cdot \\mathbf{v}}{\\|\\mathbf{u}\\|_2 \\|\\mathbf{v}\\|_2}$$

## 2. Matrix Algebra and Transformations
- **Matrix Multiplication**: Composition of linear transformations. For $A \\in \\mathbb{R}^{m \\times k}$ and $B \\in \\mathbb{R}^{k \\times n}$, $C = AB \\in \\mathbb{R}^{m \\times n}$.
- **Determinants & Invertibility**: A square matrix $A$ is invertible if and only if $\\det(A) \\neq 0$. The determinant represents the signed volume scaling factor of the transformation.
- **Rank-Nullity Theorem**: For matrix $A \\in \\mathbb{R}^{m \\times n}$, $\\text{rank}(A) + \\text{nullity}(A) = n$.

## 3. Eigendecomposition and SVD
- **Eigenvalues and Eigenvectors**: Non-zero vector $\\mathbf{v}$ and scalar $\\lambda$ satisfying $A\\mathbf{v} = \\lambda \\mathbf{v}$. Fundamental to Principal Component Analysis (PCA) and PageRank.
- **Singular Value Decomposition (SVD)**: Any real matrix $A \\in \\mathbb{R}^{m \\times n}$ factors into:
  $$A = U \\Sigma V^T$$
  where $U$ and $V$ are orthogonal matrices containing left and right singular vectors, and $\\Sigma$ contains non-negative singular values ordered by magnitude. SVD enables optimal low-rank matrix approximation and latent semantic analysis.

## 4. Multivariable Calculus & Gradient Descent
- **Partial Derivatives & The Gradient**: For scalar function $f(\\mathbf{x}): \\mathbb{R}^n \\to \\mathbb{R}$, the gradient $\\nabla f(\\mathbf{x}) = \\left[\\frac{\\partial f}{\\partial x_1}, \\dots, \\frac{\\partial f}{\\partial x_n}\\right]^T$ points in the direction of steepest ascent.
- **Hessian Matrix**: Symmetric matrix of second-order partial derivatives describing local curvature and determining whether critical points are minima, maxima, or saddle points.
- **First-Order Optimization**: Gradient descent updates parameter vector $\\mathbf{\\theta}_{t+1} = \\mathbf{\\theta}_t - \\eta \\nabla f(\\mathbf{\\theta}_t)$ with learning rate $\\eta$.`,
    reviewPrompts: `# Calculus & Linear Algebra — Practice & Review

## Analytical Exercises
1. **Orthogonal Projections**: Given a subspace $S = \\text{span}(\\mathbf{a})$, derive the projection matrix $P = \\mathbf{a}(\\mathbf{a}^T\\mathbf{a})^{-1}\\mathbf{a}^T$. Show that $P^2 = P$ and $P^T = P$.
2. **Eigenvalues of Symmetric Matrices**: Prove that the eigenvalues of any real symmetric matrix are strictly real, and that eigenvectors corresponding to distinct eigenvalues are orthogonal.
3. **Gradient Descent Convergence**: Consider the quadratic loss $f(x) = \\frac{1}{2} x^T A x - b^T x$. Derive its analytical minimum and compute the optimal learning rate $\\eta$ in terms of the maximum eigenvalue of $A$.`,
  },
  {
    id: 'cs-oop',
    title: 'Object-Oriented Programming',
    category: 'Semester 2',
    description:
      'Encapsulation, composition, interfaces, and maintainable program design.',
    rank: 1,
    order: 0,
    coreNotes: `# Object-Oriented Software Design

## 1. Core Principles of Object Orientation
- **Encapsulation**: Bundling state and methods operating on that state within an object, while restricting direct external access via access modifiers (\`private\`, \`protected\`, \`public\`). Ensures invariants cannot be broken by client code.
- **Abstraction**: Exposing clean, minimal interfaces that hide internal algorithmic and structural complexity.
- **Inheritance vs. Composition**:
  - Inheritance establishes an "is-a" taxonomy. Misuse creates fragile base class problems and tight coupling.
  - Composition establishes a "has-a" relationship, favoring interchangeable components and dynamic runtime behavior.
- **Polymorphism**: Dynamic dispatch allows derived types to override base class methods, enabling callers to treat heterogeneous objects uniformly through common abstractions.

## 2. SOLID Design Principles
- **S — Single Responsibility Principle (SRP)**: A class should have one, and only one, reason to change.
- **O — Open/Closed Principle (OCP)**: Software entities should be open for extension, but closed for modification.
- **L — Liskov Substitution Principle (LSP)**: Subtypes must be substitutable for their base types without altering program correctness.
- **I — Interface Segregation Principle (ISP)**: Clients should not be forced to depend upon interfaces they do not use; prioritize small, focused interfaces.
- **D — Dependency Inversion Principle (DIP)**: High-level modules should not depend on low-level modules; both should depend on abstractions.

## 3. Foundational Gang of Four (GoF) Design Patterns
- **Creational**:
  - *Factory Method & Abstract Factory*: Decouple client creation logic from concrete class instantiation.
  - *Builder*: Construct complex objects step-by-step with fluent validation.
- **Structural**:
  - *Adapter*: Convert incompatible class interfaces into compatible forms.
  - *Decorator*: Dynamically attach additional responsibilities to an object without subclassing.
- **Behavioral**:
  - *Strategy*: Define a family of interchangeable algorithms encapsulated in discrete strategy classes.
  - *Observer*: Publish-subscribe event bus where state changes in the subject automatically notify registered observers.`,
    reviewPrompts: `# Object-Oriented Programming — Architecture Review

## Design Challenges
1. **LSP Violation Analysis**: Explain why a \`Square\` subclass inheriting from a \`Rectangle\` class violates the Liskov Substitution Principle when \`setWidth()\` and \`setHeight()\` operate independently. Provide a refactored hierarchy.
2. **Pattern Application**: Model a notification system that can send messages via Email, SMS, or Slack, supports optional batching, and can log delivery metrics. Identify which creational, structural, and behavioral patterns you would combine.
3. **Composition vs. Inheritance Case**: Refactor an inheritance-heavy employee hierarchy (\`SalariedEmployee\`, \`HourlyEmployee\`, \`CommissionedEmployee\`, \`Manager\`) using composition with payment strategies and role responsibilities.`,
  },
  {
    id: 'cs-algorithms',
    title: 'Algorithms & Data Structures',
    category: 'Semester 2',
    description:
      'Data organisation, algorithm design, and time-space complexity analysis.',
    rank: 1,
    order: 1,
    coreNotes: `# Algorithms & Data Structures

## 1. Asymptotic Complexity & Algorithmic Analysis
- **Notations**: Big-O ($O$, asymptotic upper bound), Big-Omega ($\\Omega$, lower bound), Big-Theta ($\\Theta$, tight bound).
- **Master Theorem**: For recurrences $T(n) = a T(n/b) + f(n)$:
  - Case 1: If $f(n) = O(n^{\\log_b a - \\epsilon})$, then $T(n) = \\Theta(n^{\\log_b a})$.
  - Case 2: If $f(n) = \\Theta(n^{\\log_b a} \\log^k n)$, then $T(n) = \\Theta(n^{\\log_b a} \\log^{k+1} n)$.
  - Case 3: If $f(n) = \\Omega(n^{\\log_b a + \\epsilon})$ and regularity condition holds, $T(n) = \\Theta(f(n))$.

## 2. Linear and Tree Data Structures
- **Dynamic Arrays**: $O(1)$ amortized append, $O(n)$ worst-case resize; cache-friendly contiguous layout.
- **Hash Tables**: $O(1)$ average lookup/insert; collision resolution via separate chaining vs. open addressing (linear probing, double hashing). Load factor threshold $\\alpha \\approx 0.7$ triggers rehashing.
- **Self-Balancing Trees**:
  - *AVL Trees*: Strictly height-balanced ($|h_L - h_R| \\le 1$); faster lookups, more rotations on insertion.
  - *Red-Black Trees*: Looser balance using color invariants; maximum height $2\\log_2(n+1)$, optimal for insert-heavy associative containers (\`std::map\`, \`TreeMap\`).
- **Heaps & Priority Queues**: Complete binary trees satisfying heap property (min-heap or max-heap). Insert $O(\\log n)$, extract-min $O(\\log n)$, heapify an unordered array in $O(n)$ time.

## 3. Graph Algorithms
- **Traversals**: Breadth-First Search (BFS, uses FIFO queue, finds unweighted shortest paths) and Depth-First Search (DFS, uses stack/recursion, computes topological ordering and strongly connected components).
- **Single-Source Shortest Paths**:
  - *Dijkstra's Algorithm*: Greedy relaxation using min-priority queue; $O((|V| + |E|) \\log |V|)$ time. Requires non-negative edge weights.
  - *Bellman-Ford*: Dynamic programming relaxing all edges $|V|-1$ times; $O(|V||E|)$ time. Detects negative weight cycles.
- **Minimum Spanning Trees**:
  - *Prim's Algorithm*: Grows tree from starting node; best for dense graphs.
  - *Kruskal's Algorithm*: Sorts edges and joins components using Disjoint Set Union (DSU / Union-Find) with path compression; $O(|E| \\log |E|)$ time.

## 4. Dynamic Programming & Greedy Strategies
- **Optimal Substructure & Overlapping Subproblems**: Conditions required for DP.
- **Approaches**: Memoization (top-down recursion with cache) vs. Tabulation (bottom-up iterative table).
- **Canonical Problems**: Knapsack (0/1 vs fractional), Longest Common Subsequence (LCS), Matrix Chain Multiplication, Edit Distance.`,
    reviewPrompts: `# Algorithms & Data Structures — Problem Sets

## Algorithmic Scenarios
1. **Hash Table Worst-Case Denial of Service**: Explain how adversarial query crafting can degrade a hash table from $O(1)$ to $O(n)$ lookup time. What mitigation techniques (e.g., SipHash, universal hashing) protect web servers?
2. **Dijkstra vs. Bellman-Ford**: Why does Dijkstra fail when an edge weight is negative, even if the graph has no negative cycles? Construct a 3-node counterexample.
3. **Dynamic Programming Walkthrough**: Write the recurrence relation and space-optimized transition equation for the 0/1 Knapsack problem with capacity $W$ and $N$ items. Show how the auxiliary space reduces from $O(NW)$ to $O(W)$.`,
  },
  {
    id: 'cs-architecture',
    title: 'Computer Architecture',
    category: 'Semester 2',
    description:
      'Processors, memory, instruction execution, and the hardware foundations of software.',
    rank: 1,
    order: 2,
    coreNotes: `# Computer Architecture & Hardware Foundations

## 1. Von Neumann Model & Instruction Cycle
- **Von Neumann Architecture**: Unified memory storing both instructions and data; communication occurs over shared memory bus, creating the Von Neumann bottleneck.
- **Instruction Execution Cycle**:
  1. *Fetch*: Program Counter (PC) specifies memory address; instruction loaded into Instruction Register (IR).
  2. *Decode*: Control unit interprets opcode and operand registers.
  3. *Execute*: Arithmetic Logic Unit (ALU) computes result or evaluates branch.
  4. *Memory Access*: Read/write data operands if required.
  5. *Write-back*: Result committed to destination register.

## 2. Processor Pipelining & Hazard Resolution
- **Instruction Pipelining**: Breaking instruction execution into stages (e.g., classic RISC 5-stage: IF, ID, EX, MEM, WB) to achieve single-cycle throughput ($CPI \\approx 1$).
- **Pipeline Hazards**:
  - *Structural Hazards*: Hardware resource conflicts (e.g., single memory port simultaneous fetch and load). Resolved via separate Harvard L1 instruction and data caches.
  - *Data Hazards (RAW, WAR, WAW)*: Read-After-Write dependency where subsequent instruction needs uncommitted result. Resolved via operand forwarding / bypassing, or compiler branch delay slots and pipeline stalls (bubbles).
  - *Control Hazards*: Branch condition outcome unknown when next instruction must be fetched. Resolved via static/dynamic branch prediction (branch target buffers, two-level adaptive predictors) and speculative execution.

## 3. The Memory Hierarchy & Cache Coherence
- **Hierarchy Structure**:
  - Registers ($<1$ ns latency)
  - L1 Cache (1-2 ns, per-core, split I/D)
  - L2 Cache (3-10 ns, per-core)
  - L3 Cache (10-30 ns, shared across cores)
  - Main Memory (DRAM, 50-100 ns)
  - Non-Volatile Storage (NVMe SSD, $10-100\\;\\mu$s)
- **Cache Organization**: Cache lines (typically 64 bytes), direct-mapped vs. set-associative vs. fully associative. Eviction policies: LRU, LFU, FIFO.
- **Write Policies**: Write-through (synchronous DRAM update) vs. Write-back (dirty bit tracking, deferred flush).
- **Multicore Coherence**: MESI protocol (Modified, Exclusive, Shared, Invalid) snooping the interconnect bus to maintain uniform memory views across per-core caches.

## 4. Virtual Memory & Address Translation
- **Paging**: Virtual address divided into Virtual Page Number (VPN) and page offset.
- **Page Tables & TLB**: Multi-level page tables convert VPN to Physical Frame Number (PFN). Translation Lookaside Buffer (TLB) acts as an ultra-fast hardware associative cache for recent translations; TLB misses incur high memory-walk latency.`,
    reviewPrompts: `# Computer Architecture — Technical Exercises

## Analysis Tasks
1. **Cache Miss Analysis**: Calculate the average memory access time (AMAT) for a system with:
   - L1 hit time: 1 ns, L1 hit rate: 95%
   - L2 hit time: 5 ns, L2 hit rate: 80%
   - Main memory access time: 70 ns
2. **False Sharing**: In multithreaded programming, explain how two threads independently modifying separate variables located on the same 64-byte cache line cause severe performance degradation. How does memory padding mitigate this?
3. **Spectre & Meltdown Vulnerabilities**: Explain how modern CPU speculative execution and branch prediction create side-channel timing leaks across security boundaries.`,
  },
  {
    id: 'cs-databases',
    title: 'Databases & Indexing',
    category: 'Semester 3',
    description:
      'Relational database modelling, SQL, transactions, query plans, and indexes with their performance tradeoffs.',
    rank: 2,
    order: 0,
    coreNotes: `# Relational Databases, Indexing, and Concurrency

## 1. Relational Modeling & Schema Normalization
- **Relational Algebra**: Selection ($\\sigma$), projection ($\\pi$), Cartesian product ($\\times$), joins ($\\bowtie$), set operations.
- **Functional Dependencies & Normal Forms**:
  - *1NF*: Atomic values, no repeating groups.
  - *2NF*: 1NF plus all non-key attributes fully functionally dependent on the entire primary key.
  - *3NF*: 2NF plus no transitive dependencies between non-key attributes ($X \\to Y \\land Y \\to Z$).
  - *BCNF (Boyce-Codd)*: For every functional dependency $X \\to Y$, $X$ must be a superkey. Eliminates redundancy and update/delete anomalies.

## 2. Physical Indexing Structures
- **B-Tree & B+ Tree Indexes**:
  - B+ Tree stores all key-data pointers in leaf nodes linked sequentially for range scans.
  - Internal nodes store only search keys and child pointers, achieving high fan-out ($100-500$) and shallow depth ($3-4$ levels for millions of records).
  - Search, insert, and delete all execute in $O(\\log_B N)$ disk page reads.
- **Hash Indexes**: $O(1)$ point lookups, but incapable of supporting range queries or prefix matching.
- **LSM Trees (Log-Structured Merge-Trees)**: Used in write-heavy storage engines (Cassandra, RocksDB). Writes append sequentially to in-memory MemTable and write-ahead log (WAL); compacted periodically into sorted SSTables on disk.

## 3. Transaction Management & ACID Properties
- **Atomicity**: All operations succeed or all roll back via Write-Ahead Logging (WAL) and undo logs.
- **Consistency**: Transactions transition the database from one valid state respecting all schema constraints to another.
- **Isolation**: Concurrent transactions execute without mutual interference.
- **Durability**: Committed data survives power failure via WAL flushes to disk.

## 4. ANSI SQL Isolation Levels & Concurrency Control
| Isolation Level | Dirty Read | Non-Repeatable Read | Phantom Read |
| :--- | :---: | :---: | :---: |
| **Read Uncommitted** | Possible | Possible | Possible |
| **Read Committed** | Prevented | Possible | Possible |
| **Repeatable Read** | Prevented | Prevented | Possible (in strict standard) |
| **Serializable** | Prevented | Prevented | Prevented |

- **MVCC (Multi-Version Concurrency Control)**: Readers do not block writers, and writers do not block readers. Each query sees a consistent snapshot based on transaction commit timestamps (\`xmin\` and \`xmax\` in PostgreSQL).`,
    reviewPrompts: `# Databases & Indexing — Deep Dive

## Performance & Optimization Questions
1. **EXPLAIN ANALYZE Interpretation**: Given a query with \`WHERE user_id = 42 AND created_at > '2026-01-01' ORDER BY created_at DESC LIMIT 10\`, compare the performance of:
   - Index on \`(user_id)\`
   - Composite index on \`(user_id, created_at DESC)\`
   - Explain why index column ordering is crucial.
2. **Deadlock Scenarios**: Describe how two transactions updating rows in opposite order (Tx 1 updates A then B; Tx 2 updates B then A) enter a deadlock. How does the database engine detect and break deadlocks?
3. **Write Amplification in LSM Trees**: Explain write amplification, read amplification, and space amplification tradeoffs between B+ Trees and LSM Trees in high-throughput write workloads.`,
  },
  {
    id: 'cs-networks',
    title: 'Computer Networks',
    category: 'Semester 3',
    description:
      'Network layers, protocols, addressing, latency, reliability, and observability.',
    rank: 2,
    order: 1,
    coreNotes: `# Computer Networks & Communications

## 1. Network Layering Models: OSI vs. TCP/IP
- **Layer 2 (Data Link)**: Ethernet frames, 48-bit MAC addressing, ARP (Address Resolution Protocol), CSMA/CD and modern full-duplex switched networks.
- **Layer 3 (Network)**: IP packet forwarding, routing protocols (OSPF link-state, BGP path-vector), IPv4 (32-bit, CIDR subnetting, NAT) and IPv6 (128-bit, stateless autoconfiguration).
- **Layer 4 (Transport)**: End-to-end communication multiplexing via ports, reliability, congestion control.
- **Layer 7 (Application)**: Application-specific semantics (HTTP, DNS, SSH, gRPC).

## 2. Transport Protocols: TCP vs. UDP
- **TCP (Transmission Control Protocol)**:
  - *Connection Establishment*: Three-Way Handshake (\`SYN\` $\\to$ \`SYN-ACK\` $\\to$ \`ACK\`).
  - *Connection Teardown*: Four-Way Handshake (\`FIN\` $\\to$ \`ACK\` $\\to$ \`FIN\` $\\to$ \`ACK\`) with \`TIME_WAIT\` state preventing stale packet collision.
  - *Flow Control*: Receiver advertises window size (\`rwnd\`) indicating available buffer capacity.
  - *Congestion Control*:
    - *Slow Start*: Congestion window (\`cwnd\`) doubles every RTT until slow start threshold (\`ssthresh\`).
    - *Congestion Avoidance*: Linear additive increase ($+1$ MSS per RTT).
    - *Fast Retransmit & Fast Recovery*: Triggered by 3 duplicate ACKs without waiting for timeout.
- **UDP (User Datagram Protocol)**:
  - Connectionless, unreliable, low-overhead datagram service. Preferred for real-time media, DNS lookups, and modern protocols built atop user-space reliability (QUIC/HTTP/3).

## 3. Application Protocols: HTTP Evolution & DNS
- **DNS (Domain Name System)**: Distributed, hierarchical lookup resolving FQDNs via recursive resolvers, root nameservers, TLD servers, and authoritative nameservers with TTL-based caching.
- **HTTP/1.1**: Persistent TCP connections, head-of-line (HoL) blocking at request level.
- **HTTP/2**: Binary framing, single TCP multiplexed connection with independent bidirectional streams, header compression (HPACK). Still subject to transport-level TCP HoL blocking.
- **HTTP/3 (QUIC)**: Runs over UDP; embeds TLS 1.3 encryption by default; independent stream packet loss recovery eliminates transport HoL blocking; supports 0-RTT connection resumption and connection migration across IP changes.`,
    reviewPrompts: `# Computer Networks — Systems Review

## Protocol Analysis
1. **TCP Handshake Tracing**: What happens if the final \`ACK\` in a 3-way TCP handshake is lost in transit? When does the client consider the connection established versus the server?
2. **Subnetting Calculation**: Given the network \`192.168.10.0/26\`:
   - What is the subnet mask?
   - How many usable host IP addresses are available?
   - What are the network and broadcast addresses?
3. **HTTP/2 vs. HTTP/3 Latency in High-Loss Environments**: Explain why a 5% packet loss rate on a high-latency cellular network causes worse throughput degradation in HTTP/2 than in HTTP/3.`,
  },
  {
    id: 'cs-software-engineering',
    title: 'Software Engineering',
    category: 'Semester 3',
    description:
      'Requirements, version control, testing, delivery, and collaborative software practice.',
    rank: 2,
    order: 2,
    coreNotes: `# Software Engineering Practice & Architecture

## 1. Development Lifecycles & Agile Methodologies
- **Process Models**: Waterfall (sequential, high upfront specification) vs. Iterative Agile (Scrum, Kanban, XP).
- **Core Agile Practices**: Small incremental batches, continuous stakeholder feedback, daily standups, sprint retrospectives, story point estimation with planning poker.
- **Technical Debt**: The implied cost of future refactoring incurred by choosing a fast and expedient solution now instead of a well-architected approach.

## 2. Version Control Architecture: Git Internals
- **Directed Acyclic Graph (DAG)**: Git stores repository history as an immutable graph of commit nodes pointing to ancestor commits.
- **Object Types**:
  - *Blob*: Raw file contents without metadata or permissions.
  - *Tree*: Represents a directory; maps filenames, modes, and object hashes to blobs and child trees.
  - *Commit*: Top-level metadata (author, committer, timestamp, message, parent commit hashes, root tree hash).
  - *Annotated Tag*: Signed reference pointer.
- **Branching & Merging**: Fast-forward merges vs. 3-way merge commits vs. interactive rebasing.

## 3. Continuous Integration & Continuous Delivery (CI/CD)
- **CI Pipeline Stages**:
  1. *Linting & Static Analysis*: Enforcement of syntax conventions, formatting, and AST-level rule checks.
  2. *Unit & Integration Testing*: Rapid feedback verification on isolated and connected components.
  3. *Security Scans*: Dependency vulnerability analysis (SAST) and secret leak prevention.
  4. *Container Image Artifact Build*: Deterministic, multi-stage reproducible builds.
- **Deployment Strategies**:
  - *Blue-Green Deployment*: Two identical environments; router flips traffic instantaneously from Blue to Green.
  - *Canary Deployment*: Gradually roll out new release to a small percentage of users (1%, 5%, 25%, 100%) while monitoring error budgets.

## 4. Observability: Metrics, Logs, and Traces
- **Metrics**: Aggregated numerical time series (counters, gauges, histograms) monitoring system health (RED method: Rate, Errors, Duration).
- **Structured Logs**: Context-rich JSON events with correlation IDs for post-incident debugging.
- **Distributed Tracing**: Propagating trace and span IDs across microservice boundaries (OpenTelemetry) to identify latency bottlenecks in asynchronous call graphs.`,
    reviewPrompts: `# Software Engineering — Practical Scenarios

## Engineering Scenarios
1. **Git Merge Conflict Resolution**: Two developers modify the same file concurrently. One renames the function; the other modifies its implementation. How does Git detect and report this conflict, and what git commands inspect the common ancestor?
2. **CI Pipeline Flakiness**: A test suite exhibits non-deterministic failures (1 failure per 50 runs). Outline a diagnostic methodology to detect race conditions, unmocked system clocks, or leaked state between tests.
3. **Deployment Strategy Selection**: A payment gateway service requires schema changes and zero downtime. Compare Blue-Green versus Canary deployments with attention to backwards-incompatible database migrations.`,
  },
  {
    id: 'cs-operating-systems',
    title: 'Operating Systems',
    category: 'Semester 4',
    description:
      'Processes, memory, filesystems, concurrency, and resource isolation.',
    rank: 3,
    order: 0,
    coreNotes: `# Operating Systems: Concurrency, Memory, and Kernels

## 1. Kernel Architecture & The System Call Boundary
- **Dual-Mode Operation**: Hardware enforcement of User Mode (Ring 3) vs. Kernel Mode (Ring 0) using privileged CPU instructions.
- **System Calls**: Software interrupts (\`syscall\` / \`sysenter\`) that cause controlled trap into the kernel handler vector, switching stack contexts and verifying user pointer validity.
- **Monolithic vs. Microkernel**: Monolithic kernels (Linux) run drivers and filesystems in kernel space for speed; microkernels (Mach, seL4) run minimal scheduler/IPC in kernel space and move drivers to user space for fault isolation.

## 2. Processes, Threads, and Scheduling
- **Process Control Block (PCB)**: Stores PID, process state, program counter, register context, open file descriptors, memory map, and CPU scheduling priority.
- **Processes vs. Threads**: Threads within the same process share virtual address space, heap, and open file descriptors, but each maintains a private stack and register state.
- **CPU Scheduling**:
  - *Preemptive Scheduling*: Timer interrupts trigger context switches.
  - *Completely Fair Scheduler (CFS)*: Uses red-black tree indexed by virtual runtime (\`vruntime\`) to provide weighted fair CPU allocation.

## 3. Concurrency, Synchronization, and Deadlocks
- **Critical Sections & Race Conditions**: Multiple threads accessing shared mutable state concurrently where final outcome depends on execution timing.
- **Synchronization Primitives**:
  - *Atomic Instructions*: Compare-and-Swap (CAS), Test-and-Set.
  - *Mutex*: Mutual exclusion lock with sleep/wake queue; only lock holder may release.
  - *Semaphore*: Counting primitive maintaining integer permit counter.
  - *Spinlock*: Busy-waiting lock suitable only for short critical sections in kernel handlers where sleeping is forbidden.
- **Deadlock: The Four Coffman Conditions**:
  1. *Mutual Exclusion*: Resources cannot be shared.
  2. *Hold and Wait*: Process holds resources while requesting others.
  3. *No Preemption*: Resources cannot be forcibly taken.
  4. *Circular Wait*: Closed chain of processes where each waits for resource held by next.

## 4. Virtual Memory & Filesystem Implementation
- **Demand Paging**: Pages loaded from backing store only upon page fault interrupt. Page replacement algorithms: Optimal, Least Recently Used (LRU), Clock algorithm.
- **Inodes & Filesystems**: An inode stores file metadata, permissions, and direct/indirect block pointers. Directory entries map filenames to inode numbers; hard links share inodes, soft links store path strings.`,
    reviewPrompts: `# Operating Systems — Deep Dive

## Systems Questions
1. **Context Switch Overhead**: Detail all actions performed by the CPU and OS when switching context from Thread A to Thread B within the same process, versus between different processes.
2. **Dining Philosophers Problem**: Formalize the deadlock condition in Dijkstra's dining philosophers problem. Provide two distinct deadlock-free synchronization algorithms (e.g., asymmetric picking order, resource hierarchy).
3. **Copy-on-Write (COW)**: Explain how Linux implements \`fork()\` efficiently using virtual memory page table permissions marked as read-only. What happens when either parent or child executes a memory write?`,
  },
  {
    id: 'cs-security',
    title: 'Applied Cybersecurity',
    category: 'Semester 4',
    description:
      'Threat modelling, identity, secure design, vulnerability management, and incident response.',
    rank: 3,
    order: 1,
    coreNotes: `# Applied Cybersecurity & Defense in Depth

## 1. Security Foundations & Threat Modeling
- **The CIA Triad**: Confidentiality (unauthorized disclosure prevention), Integrity (unauthorized alteration prevention), Availability (timely and reliable access).
- **The STRIDE Threat Model**:
  - **S**poofing identity $\\to$ Authentication
  - **T**ampering with data $\\to$ Integrity / digital signatures
  - **R**epudiation $\\to$ Non-repudiation / audit logging
  - **I**nformation disclosure $\\to$ Encryption / authorization
  - **D**enial of service $\\to$ Rate limiting / high availability
  - **E**levation of privilege $\\to$ Least privilege access control

## 2. Cryptographic Building Blocks
- **Symmetric Encryption**: Same key for encryption and decryption. Advanced Encryption Standard (AES) in Galois/Counter Mode (GCM) provides Authenticated Encryption with Associated Data (AEAD).
- **Asymmetric Encryption**: Public/private key pair (RSA, Elliptic Curve Cryptography / ECDSA, Ed25519). Public key encrypts or verifies; private key decrypts or signs.
- **Cryptographic Hashing**: One-way, collision-resistant functions (SHA-256). Password hashing requires salted, memory-hard key derivation functions (Argon2id, bcrypt, PBKDF2) to resist GPU/ASIC rainbow table attacks.
- **Public Key Infrastructure (PKI)**: X.509 digital certificates bind public keys to identities, validated via hierarchical Certificate Authority (CA) trust chains.

## 3. Web Application Security: OWASP Top 10
- **SQL Injection (SQLi)**: Untrusted input concatenated into SQL query strings. Remediated strictly by parameterized prepared statements and ORM abstraction.
- **Cross-Site Scripting (XSS)**:
  - *Stored*: Malicious script stored in database and executed by other visitors.
  - *Reflected*: Script reflected off server error message or search input.
  - *DOM-based*: Client JavaScript unsafely modifies DOM with untrusted data.
  - *Defense*: Context-aware output encoding, Content Security Policy (CSP), \`HttpOnly\` cookie flags.
- **Cross-Site Request Forgery (CSRF)**: Forcing an authenticated browser to submit unauthorized requests. Defended via SameSite cookie attributes and cryptographic anti-CSRF synchronizer tokens.

## 4. Identity & Access Management (IAM)
- **OAuth 2.0 & OpenID Connect (OIDC)**: Delegated authorization framework; OIDC adds an identity layer with signed JWT ID tokens.
- **JSON Web Tokens (JWT)**: Compact, URL-safe tokens consisting of Header, Payload, and Signature. Vulnerable to algorithm confusion (\`"alg": "none"\`) and insecure key storage.`,
    reviewPrompts: `# Cybersecurity — Analysis & Exploits

## Vulnerability Mitigation
1. **JWT Security Audit**: Review a JWT implementation where tokens are signed with RS256, but the verification endpoint uses \`jwt.verify(token, key)\` without specifying allowed algorithms. How can an attacker forge admin tokens using HMAC-SHA256?
2. **CSRF vs. SameSite Cookies**: How does configuring cookies with \`SameSite=Lax\` protect against CSRF attacks in modern browsers? In which specific cross-site navigation scenarios can a GET request still send Lax cookies?
3. **Timing Attacks on Cryptographic Comparison**: Why is standard string equality (\`a === b\`) dangerous when verifying password hashes or HMAC signatures? Write a constant-time comparison function and explain how it prevents timing side-channels.`,
  },
  {
    id: 'cs-systems',
    title: 'Distributed Systems',
    category: 'Semester 5',
    description:
      'Replication, consistency, messaging, failure handling, and service coordination.',
    rank: 4,
    order: 0,
    coreNotes: `# Distributed Systems Architecture & Consensus

## 1. Fundamental Fallacies & The CAP Theorem
- **Fallacies of Distributed Computing**: The network is reliable; latency is zero; bandwidth is infinite; the network is secure; topology doesn't change; there is one administrator; transport cost is zero; the network is homogeneous.
- **The CAP Theorem**: In an asynchronous network subject to network partitions (P), a distributed system can guarantee at most one of:
  - *Consistency (C)*: Every read receives the most recent write or an error (Linearizability).
  - *Availability (A)*: Every non-failing node returns a non-error response for every request.
- **PACELC Theorem**: If there is a Partition (P), how does system trade Availability (A) and Consistency (C); Else (E), how does system trade Latency (L) and Consistency (C)?

## 2. Replication & Distributed Consensus
- **Replication Topologies**:
  - *Single-Leader*: All writes go to leader, streamed asynchronously or synchronously to followers. High read scalability, vulnerable to leader failover split-brain.
  - *Multi-Leader*: Writes accepted at multiple nodes (cross-datacenter); requires conflict resolution (Last-Write-Wins, CRDTs).
  - *Leaderless (Dynamo-style)*: Quorum reads and writes ($R + W > N$) with read repair and anti-entropy background processes.
- **Raft Consensus Protocol**:
  - *Leader Election*: Randomized election timeouts prevent split votes; candidate must have up-to-date log to win.
  - *Log Replication*: Leader appends commands to log and replicates to followers; entry is committed once stored on a majority of nodes.
  - *Safety Invariant*: If an entry is committed at a given index, no other entry can ever be committed at that index in any subsequent term.

## 3. Distributed Transactions & Eventual Consistency
- **Two-Phase Commit (2PC)**: Prepare phase (coordinator queries all participants) followed by Commit phase. Blocking protocol: if coordinator crashes during commit phase, participants remain locked.
- **The Saga Pattern**: Sequence of local transactions where each step publishes an event; failures trigger compensatory transactions backwards, achieving eventual consistency without distributed locks.
- **Event-Driven Messaging**: Message brokers (RabbitMQ, Kafka) decouple service producers from consumers, providing message persistence, backpressure management, and dead-letter queue (DLQ) retry topologies.`,
    reviewPrompts: `# Distributed Systems — Scenario Challenges

## Distributed Design Problems
1. **Split-Brain Prevention**: In a 3-node Raft cluster, a network partition isolates Node A from Nodes B and C. Explain step-by-step how the cluster elects a new leader, which partition continues accepting writes, and what happens when the network heals.
2. **Linearizability vs. Eventual Consistency**: A banking ledger requires strict linearizability for withdrawals, while a social media like counter tolerates eventual consistency. Contrast their storage engine and replication design.
3. **Idempotency in Distributed Payments**: When a mobile client submits a payment request over an unreliable cellular connection, the request times out. How do idempotency keys and transactional outbox patterns prevent duplicate charges?`,
  },
  {
    id: 'cs-cloud',
    title: 'Cloud & Data Platforms',
    category: 'Semester 5',
    description:
      'Scalable deployment, data pipelines, managed services, and operational cost awareness.',
    rank: 4,
    order: 1,
    coreNotes: `# Cloud Infrastructure, Containers, and Data Platforms

## 1. Containerization & Linux Namespaces
- **Containers vs. Virtual Machines**: VMs run guest operating systems over a hypervisor; containers share the host Linux kernel, isolating user-space processes with minimal startup latency and overhead.
- **Kernel Primitive Foundations**:
  - *Namespaces*: Isolate system resources (PID, Mount, Network, IPC, UTS, User).
  - *Control Groups (cgroups v2)*: Limit, police, and account for resource usage (CPU cores, memory limits, I/O bandwidth).
  - *Union File Systems (OverlayFS)*: Layered, copy-on-write image filesystems enabling efficient image caching and deduplication.

## 2. Container Orchestration with Kubernetes
- **Control Plane Architecture**:
  - *kube-apiserver*: REST API gateway and declarative state coordinator.
  - *etcd*: Consistent, distributed key-value store holding entire cluster state.
  - *kube-scheduler*: Assigns unscheduled pods to nodes based on resource requests, affinities, and taints/tolerations.
  - *kube-controller-manager*: Enforces desired state reconciliation loops (ReplicaSet, Deployment, Node controllers).
- **Core Abstractions**:
  - *Pod*: Atomic deployable unit of co-located containers sharing network namespace (localhost) and storage volumes.
  - *Service*: Stable virtual IP and DNS name balancing traffic across ephemeral pod replicas.
  - *Ingress / Gateway API*: L7 HTTP reverse proxy routing external traffic into cluster services.
  - *Horizontal Pod Autoscaler (HPA) & KEDA*: Event-driven autoscaling based on CPU/memory metrics or queue depth (RabbitMQ, Kafka).

## 3. Distributed Data Platforms & Analytical Processing
- **OLTP vs. OLAP**:
  - *OLTP (Online Transaction Processing)*: Row-oriented storage (PostgreSQL), normalized schema, high concurrency, low-latency point queries.
  - *OLAP (Online Analytical Processing)*: Columnar storage (ClickHouse, Snowflake, Parquet), denormalized star/snowflake schemas, vectorized query execution over billions of records.
- **Data Pipeline Paradigms**: Batch processing (Apache Spark) vs. Stream processing (Apache Flink, Kafka Streams). Lambda architecture vs. Kappa architecture.`,
    reviewPrompts: `# Cloud & Data Platforms — Architectural Exercises

## Design Tasks
1. **Zero-Downtime Deployment Configuration**: Write a Kubernetes Deployment manifest demonstrating:
   - \`readinessProbe\` and \`livenessProbe\` definitions with appropriate initial delays and failure thresholds.
   - \`rollingUpdate\` strategy with \`maxSurge: 25%\` and \`maxUnavailable: 0\`.
2. **KEDA Scale-to-Zero Architecture**: Explain how KEDA (Kubernetes Event-driven Autoscaling) monitors an external RabbitMQ queue, scales a worker deployment from 0 to $N$ pods upon message arrival, and scales back down when the queue drains.
3. **Columnar Compression Mechanics**: Why does columnar storage (like Apache Parquet) achieve significantly higher compression ratios and faster aggregation speeds for queries like \`SELECT AVG(price) WHERE country = 'PL'\` compared to row-oriented databases?`,
  },
  {
    id: 'cs-capstone',
    title: 'Engineering Capstone',
    category: 'Semester 6',
    description:
      'Deliver a complete system by combining technical design, implementation, testing, and communication.',
    rank: 5,
    order: 0,
    coreNotes: `# Systems Engineering Capstone & Production Readiness

## 1. Architectural Decision Records (ADRs)
Architectural decisions require documented context, explicit alternatives considered, and evaluated trade-offs. Standard ADR structure:
- **Title**: Clear, numbered decision title (e.g., \`ADR-004: Adopt PostgreSQL with pgvector for Hybrid Search\`).
- **Status**: Proposed, Accepted, Deprecated, Superseded.
- **Context**: Problem statement, business drivers, performance requirements, team skills, and environmental constraints.
- **Decision**: Specific architectural choice adopted.
- **Consequences**: Positive outcomes, operational trade-offs, ongoing costs, and required technical mitigations.

## 2. Service Level Objectives (SLOs) & Error Budgets
- **Service Level Indicator (SLI)**: Quantitative measure of service performance (e.g., HTTP request latency $\\le 200$ ms, successful response rate $\\ge 99.9\\%$).
- **Service Level Objective (SLO)**: Target reliability metric agreed upon by engineering and product (e.g., 99.9% availability over rolling 30 days).
- **Service Level Agreement (SLA)**: Legal contract with financial penalties if SLO is breached.
- **Error Budget**: The allowable unreliability ($100\\% - \\text{SLO}$). When exhausted, feature development pauses in favor of reliability engineering.

## 3. Disaster Recovery: RPO and RTO
- **Recovery Point Objective (RPO)**: The maximum acceptable age of files/data that must be recovered from backup storage for normal operations to resume (acceptable data loss window).
- **Recovery Time Objective (RTO)**: The maximum acceptable duration of time that can elapse before service restoration following a disaster (acceptable downtime window).
- **Strategies**: Active-Passive with cold standby, Warm standby with asynchronous database replication, Active-Active multi-region routing.

## 4. Production Readiness Checklist
- **Database**: Automated backups with verified restore drills, read replicas for heavy reporting, connection pooling (PgBouncer), schema migration rollback scripts.
- **Security**: Secret rotation mechanism, least-privilege service accounts, automated dependency vulnerability alerts, DDoS and rate limiting guards.
- **Observability**: Distributed tracing across all async microservices, dashboard alerting on SLO burn rate rather than raw CPU spikes.`,
    reviewPrompts: `# Engineering Capstone — Defense & Evaluation

## Architectural Defense Questions
1. **SLO Breach Action Plan**: Your service has consumed 80% of its monthly error budget in the first week due to a database lock contention incident. What immediate engineering governance policies should be enforced?
2. **Disaster Recovery Exercise**: Outline a step-by-step disaster recovery drill for a total regional cloud outage:
   - Data tier failover to secondary region.
   - DNS record cutover with low TTL.
   - Validating data integrity before opening traffic to users.
3. **Capacity Planning Calculation**: Your application processes 2,000 requests/sec with an average database read query time of 15 ms. Calculate the minimum database connection pool size required using Little's Law ($L = \\lambda W$).`,
  },
];
