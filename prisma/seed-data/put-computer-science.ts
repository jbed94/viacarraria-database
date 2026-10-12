import type { Course, SeedEdge } from './types.js';

export const putCsEdges: SeedEdge[] = [
  // Semester 1 -> Semester 2
  { id: 'put-prog1-aisd', source: 'put-cs-prog1', target: 'put-cs-aisd' },
  { id: 'put-prog1-po', source: 'put-cs-prog1', target: 'put-cs-po' },
  { id: 'put-am1-aisd', source: 'put-cs-am1', target: 'put-cs-aisd' },
  { id: 'put-logika-aisd', source: 'put-cs-logika', target: 'put-cs-aisd' },
  { id: 'put-am1-algeb', source: 'put-cs-am1', target: 'put-cs-algeb' },

  // Semester 2 -> Semester 3
  { id: 'put-prog1-akso', source: 'put-cs-prog1', target: 'put-cs-akso' },
  { id: 'put-po-bazy', source: 'put-cs-po', target: 'put-cs-bazy' },
  { id: 'put-aisd-bazy', source: 'put-cs-aisd', target: 'put-cs-bazy' },
  { id: 'put-algeb-rachprawd', source: 'put-cs-algeb', target: 'put-cs-rach-prawd' },
  { id: 'put-am1-rachprawd', source: 'put-cs-am1', target: 'put-cs-rach-prawd' },

  // Semester 3 -> Semester 4
  { id: 'put-akso-sieci', source: 'put-cs-akso', target: 'put-cs-sieci' },
  { id: 'put-po-io', source: 'put-cs-po', target: 'put-cs-io' },
  { id: 'put-bazy-io', source: 'put-cs-bazy', target: 'put-cs-io' },

  // Semester 4 -> Semester 5
  { id: 'put-aisd-ai', source: 'put-cs-aisd', target: 'put-cs-sztuczna-int' },
  { id: 'put-rachprawd-ai', source: 'put-cs-rach-prawd', target: 'put-cs-sztuczna-int' },
  { id: 'put-sieci-dist', source: 'put-cs-sieci', target: 'put-cs-systemy-rozproszone' },
  { id: 'put-akso-dist', source: 'put-cs-akso', target: 'put-cs-systemy-rozproszone' },

  // Semester 5 -> Semester 6
  { id: 'put-sieci-sec', source: 'put-cs-sieci', target: 'put-cs-bezpieczenstwo' },
  { id: 'put-dist-cloud', source: 'put-cs-systemy-rozproszone', target: 'put-cs-cloud' },
  { id: 'put-io-cloud', source: 'put-cs-io', target: 'put-cs-cloud' },

  // Semester 6 -> Semester 7
  { id: 'put-sec-capstone', source: 'put-cs-bezpieczenstwo', target: 'put-cs-inzynierski' },
  { id: 'put-cloud-capstone', source: 'put-cs-cloud', target: 'put-cs-inzynierski' },
  { id: 'put-ai-capstone', source: 'put-cs-sztuczna-int', target: 'put-cs-inzynierski' },
];

export const putCsCourses: Course[] = [
  // Semestr 1 (rank: 0)
  {
    id: 'put-cs-prog1',
    title: 'Podstawy Programowania (C/C++)',
    category: 'Semestr 1',
    description:
      'Programowanie proceduralne w C/C++, wskaźniki, alokacja pamięci, struktury danych i kompilacja GCC na Politechnice Poznańskiej.',
    rank: 0,
    order: 0,
    coreNotes: `# Podstawy Programowania — Wydział Informatyki i Telekomunikacji PP

## 1. Wprowadzenie do Architektury Maszyny i Kompilacji w Ekosystemie GNU/Linux
Programowanie w języku C na WIT Politechniki Poznańskiej stanowi fundament zrozumienia działania komputera na styku oprogramowania i sprzętu:
- **Etapy translacji kodu**:
  1. *Preprocesor* (\`cpp\`): rozwinięcie dyrektyw (\`#include\`, \`#define\`, kompilacja warunkowa \`#ifdef\`, makra parametryczne).
  2. *Właściwy kompilator* (\`gcc -S\`): zamiana kodu C na asembler platformy docelowej (np. x86_64, instrukcje AT&T vs Intel).
  3. *Asembler* (\`as\`): translacja instrukcji asemblerowych na binarny plik obiektowy (\`.o\`, format Executable and Linkable Format - ELF).
  4. *Konsolidator* (\`ld\`): łączenie modułów obiektowych i bibliotek systemowych (\`libc.so\`, \`libm.so\`) w wykonywalny plik binarny.
- **Flagi rygoru jakości kodu**: \`gcc -Wall -Wextra -pedantic -std=c11 -O2 -g -fsanitize=address,undefined\`. Flaga \`-Wall\` i \`-Wextra\` aktywuje ostrzeżenia o niezainicjalizowanych zmiennych, ukrytych konwersjach i nieużywanych parametrach.

## 2. Zarządzanie Pamięcią: Układ Pamięci Procesu, Stos a Sterta
Wirtualna przestrzeń adresowa procesu w 64-bitowym systemie Linux składa się z wyodrębnionych segmentów:
- **Segment Tekstu (.text)**: Zawiera skompilowane instrukcje maszynowe, zabezpieczony flagą read-only w celu uniknięcia przypadkowej modyfikacji kodu.
- **Segment Danych Zainicjalizowanych (.data)**: Zmienne globalne i statyczne zainicjalizowane w kodzie źródłowym.
- **Segment BSS (.bss - Block Started by Symbol)**: Zmienne globalne i statyczne niezainicjalizowane, zerowane przez jądro przed startem funkcji \`main()\`.
- **Segment Stosu (Call Stack)**:
  - Automatyczny czas życia zmiennych lokalnych; rośnie w dół w kierunku niższych adresów w architekturze x86_64.
  - Ramka stosu (\`Stack Frame\`): przechowuje wskaźnik ramki (\`%rbp\`), adres powrotu instrukcji (\`return address\`), argumenty funkcji przekraczające limit rejestrów oraz zmienne automatyczne.
  - Ograniczony rozmiar (domyślnie 8MB w systemach Linux, limit sprawdzany przez \`ulimit -s\`); niebezpieczeństwo błędu *Stack Overflow* przy nieskończonej rekurencji lub alokacji wielkich tablic lokalnych (\`int big_arr[2000000]\`).
- **Segment Sterty (Heap)**:
  - Dynamiczny przydział pamięci rosnący w górę za pomocą wywołań systemowych \`brk()\` oraz \`mmap()\`.
  - Funkcje biblioteki standardowej: \`malloc(size_t size)\`, \`calloc(size_t num, size_t size)\` (zeruje przydzielony obszar), \`realloc(void *ptr, size_t new_size)\` oraz zwalnianie \`free(void *ptr)\`.
  - Typowe anomalie:
    - *Memory Leak*: Utrata referencji do zaalokowanego bloku bez wywołania \`free()\`.
    - *Dangling Pointer*: Użycie wskaźnika po zwolnieniu pamięci (*Use-After-Free*).
    - *Double Free*: Ponowne zwolnienie tego samego wskaźnika prowadzące do korupcji metadanych alokatora \`ptmalloc\`.
  - Diagnostyka w laboratorium: Valgrind (\`valgrind --leak-check=full --show-leak-kinds=all --track-origins=yes ./program\`).

## 3. Arytmetyka Wskaźników, Typy Złożone i Struktury Danych
Wskaźnik przechowuje adres komórki pamięci. Inkrementacja wskaźnika \`ptr + 1\` przesuwa adres o wartość \`sizeof(*ptr)\` bajtów.

\`\`\`c
#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

typedef struct Node {
    int value;
    struct Node* next;
} Node;

typedef struct LinkedList {
    Node* head;
    size_t size;
} LinkedList;

LinkedList* list_create(void) {
    LinkedList* list = (LinkedList*)malloc(sizeof(LinkedList));
    if (!list) {
        perror("Fatal: Failed to allocate linked list container");
        exit(EXIT_FAILURE);
    }
    list->head = NULL;
    list->size = 0;
    return list;
}

bool list_push_front(LinkedList* list, int val) {
    if (!list) return false;
    Node* newNode = (Node*)malloc(sizeof(Node));
    if (!newNode) return false;
    newNode->value = val;
    newNode->next = list->head;
    list->head = newNode;
    list->size++;
    return true;
}

void list_destroy(LinkedList* list) {
    if (!list) return;
    Node* current = list->head;
    while (current != NULL) {
        Node* next = current->next;
        free(current);
        current = next;
    }
    free(list);
}
\`\`\`

## 4. Reprezentacja Bitowa i Operacje Niskopoziomowe
- Operatory bitowe: koniunkcja (\`&\`), alternatywa (\`|\`), różnica symetryczna (\`^\`), negacja (\`~\`), przesunięcia bitowe (\`<<\`, \`>>\`).
- Reprezentacja liczb całkowitych ze znakiem w kodzie uzupełnień do dwóch (U2 / Two's Complement): wartość najstarszego bitu (MSB) to $-2^{n-1}$.
- Liczby zmiennoprzecinkowe w standardzie IEEE 754: znak (1 bit), cecha / wykładnik ze skrzywieniem (*biased exponent*), mantysa / ułamek (*significand*). Wartości specjalne: $\\pm 0$, $\\pm \\infty$, NaN (Not a Number), denormalia.

## 5. Zalecana Literatura Akademicka (WIT PP)
1. Brian W. Kernighan, Dennis M. Ritchie — *Język ANSI C*. Wydawnictwa Naukowo-Techniczne (WNT), Warszawa.
2. Stephen Prata — *Język C++. Szkoła programowania*. Helion.
3. Robert Love — *Programowanie w systemie Linux. Praktyczny przewodnik*. Helion.
4. Randal E. Bryant, David R. O'Hallaron — *Computer Systems: A Programmer's Perspective* (CS:APP). Pearson.`,
    reviewPrompts: `# Podstawy Programowania — Zadania Powtórkowe i Laboratorium

## Pytania Teoretyczne i Kolokwialne (Politechnika Poznańska)
1. **Analiza Ramki Stosu**: Narysuj układ ramki stosu przed i po wywołaniu rekurencyjnej funkcji \`int fib(int n)\`. Gdzie odkładany jest adres powrotu, rejestr \`%rbp\` i zmienna lokalna? Jakie instrukcje asemblera realizują prolog (\`push %rbp; mov %rsp, %rbp\`) i epilog (\`leave; ret\`)?
2. **Semantyka Wskaźników**: Wyjaśnij, dlaczego zapis \`*(arr + i)\` jest ściśle tożsamy z \`arr[i]\`, a także dlaczego wyrażenie \`i[arr]\` kompiluje się poprawnie w języku C.
3. **Specyfikator \`const\`**: Wyjaśnij różnice semantyczne pomiędzy:
   - \`const int *ptr\` (wskaźnik na stałą wartość całkowitą)
   - \`int * const ptr\` (stały wskaźnik na modyfikowalną wartość)
   - \`const int * const ptr\` (stały wskaźnik na stałą wartość)
4. **Zarządzanie Pamięcią**: Czym różni się zachowanie alokatora \`realloc(ptr, 0)\` od \`realloc(NULL, size)\`? Co się stanie, jeśli \`realloc\` nie znajdzie ciągłego bloku pamięci w dotychczasowej lokalizacji?

## Zadanie Laboratoryjne (Projekt Zaliczeniowy)
Zaprojektuj dynamiczny wektor (\`Vector\`) przechowujący elementy typu \`void*\` ze współczynnikiem rozrostu 2.0x. Zaimplementuj obsługę błędów alokacji, automatyczne kurczenie przy spadku zapełnienia poniżej 25% oraz zweryfikuj brak wycieków pamięci w narzędziu Valgrind.`,
  },
  {
    id: 'put-cs-am1',
    title: 'Analiza Matematyczna I',
    category: 'Semestr 1',
    description:
      'Ciągi liczbowe, granice, pochodne, twierdzenie Lagrangea, wzór Taylora oraz rachunek całkowy funkcji jednej zmiennej.',
    rank: 0,
    order: 1,
    coreNotes: `# Analiza Matematyczna I — Kurs Podstawowy Politechniki Poznańskiej

## 1. Ciągi Liczbowe, Granice i Zbieżność
- **Definicja granicy według Cauchy'ego**:
  $$\\lim_{n \\to \\infty} a_n = g \\iff \\forall_{\\varepsilon > 0} \\exists_{N \\in \\mathbb{N}} \\forall_{n > N} |a_n - g| < \\varepsilon$$
- **Aksjomat Ciągłości Dedekinda**: Każdy niepusty i ograniczony z góry podzbiór liczb rzeczywistych $\\mathbb{R}$ posiada kres górny (supremum).
- **Twierdzenie Bolzano-Weierstrassa**: Z każdego ciągu ograniczonego w $\\mathbb{R}$ można wybrać podciąg zbieżny.
- **Twierdzenie o trzech ciągach**:
  Jeśli dla prawie wszystkich $n$ zachodzi $a_n \\le b_n \\le c_n$ oraz $\\lim a_n = \\lim c_n = g$, to ciąg $(b_n)$ jest zbieżny i $\\lim b_n = g$.
- **Liczba Eulera $e$**:
  $$e = \\lim_{n \\to \\infty} \\left(1 + \\frac{1}{n}\\right)^n = \\sum_{k=0}^{\\infty} \\frac{1}{k!} \\approx 2{,}718281828459$$

## 2. Rachunek Różniczkowy Funkcji Jednej Zmiennej
- **Pochodna funkcji w punkcie $x_0$**:
  $$f'(x_0) = \\lim_{h \\to 0} \\frac{f(x_0 + h) - f(x_0)}{h}$$
- **Twierdzenia o Wartości Średniej**:
  - *Twierdzenie Rolle'a*: Jeśli $f \\in C[a, b]$, $f \\in D(a, b)$ oraz $f(a) = f(b)$, to istnieje $c \\in (a, b)$ takie, że $f'(c) = 0$.
  - *Twierdzenie Lagrange'a*:
    $$f'(c) = \\frac{f(b) - f(a)}{b - a}, \\quad c \\in (a, b)$$
  - *Twierdzenie Cauchy'ego*: $\\frac{f'(c)}{g'(c)} = \\frac{f(b) - f(a)}{g(b) - g(a)}$.
- **Wzór Taylora i Maclaurina**:
  $$f(x) = \\sum_{k=0}^{n} \\frac{f^{(k)}(x_0)}{k!} (x - x_0)^k + R_n(x)$$
  Postać reszty Lagrange'a: $R_n(x) = \\frac{f^{(n+1)}(c)}{(n+1)!} (x - x_0)^{n+1}$ dla pewnego $c$ leżącego pomiędzy $x_0$ a $x$.
- **Reguła de l'Hospitala**: Obliczanie granic wyrażeń nieoznaczonych $\\left[\\frac{0}{0}\\right]$ oraz $\\left[\\frac{\\infty}{\\infty}\\right]$.

## 3. Rachunek Całkowy Funkcji Jednej Zmiennej
- **Całka Oznaczona Riemanna**: Granica sum całkowych Riemanna przy średnicy podziału $\\lambda(P) \\to 0$. Warunek całkowalności: każda funkcja ciągła na przedziale domkniętym $[a, b]$ jest całkowalna w sensie Riemanna.
- **Podstawowe Twierdzenie Rachunku Całkowego (Wzór Newtona-Leibniza)**:
  $$\\int_a^b f(x)\\,dx = F(b) - F(a) = [F(x)]_a^b, \\quad \\text{gdzie } F'(x) = f(x)$$
- **Metody Całkowania**:
  - Całkowanie przez części: $\\int u(x)v'(x)\\,dx = u(x)v(x) - \\int u'(x)v(x)\\,dx$.
  - Całkowanie przez podstawienie: $\\int f(g(x))g'(x)\\,dx = \\int f(u)\\,du$, gdzie $u = g(x)$.
  - Całkowanie funkcji wymiernych: Rozkład na ułamki proste pierwszego i drugiego rodzaju nad $\\mathbb{R}$.

## 4. Szeregi Liczbowe i Kryteria Zbieżności
- Warunek konieczny zbieżności: $\\lim_{n \\to \\infty} a_n = 0$.
- Kryteria zbieżności szeregów o wyrazach dodatnich:
  - Kryterium d'Alemberta: $\\lim_{n \\to \\infty} \\frac{a_{n+1}}{a_n} = g < 1$.
  - Kryterium Cauchy'ego: $\\lim_{n \\to \\infty} \\sqrt[n]{a_n} = g < 1$.
  - Kryterium całkowe Maclaurina-Cauchy'ego: $\\sum_{n=1}^\\infty a_n < \\infty \\iff \\int_1^\\infty f(x)\\,dx < \\infty$.
  - Kryterium Leibniza dla szeregów naprzemiennych $\\sum (-1)^n b_n$.

## 5. Literatura Obowiązująca
1. W. Krysicki, L. Włodarski — *Analiza matematyczna w zadaniach*, Tom I i II. PWN.
2. G.M. Fichtenholz — *Rachunek różniczkowy i całkowy*, Tom I. Wydawnictwo Naukowe PWN.
3. Marian Gewert, Zbigniew Skoczylas — *Analiza matematyczna 1. Definicje, twierdzenia, wzory*. Oficyna Wydawnicza GiS.`,
    reviewPrompts: `# Analiza Matematyczna I — Zadania i Kolokwium

## Zagadnienia Egzaminacyjne (WIT PP)
1. **Reguła de l'Hospitala vs Szeregi Taylora**: Oblicz granicę:
   $$\\lim_{x \\to 0} \\frac{x - \\sin x}{x^3}$$
   stosując dwukrotnie regułę de l'Hospitala, a następnie zweryfikuj wynik rozwijając $\\sin x$ w szereg Maclaurina do rzędu 3.
2. **Badanie Przebiegu Zmienności Funkcji**: Wyznacz dziedzinę, punkty przecięcia z osiami, asymptoty ukośne/pionowe, przedziały monotoniczności, ekstrema lokalne oraz punkty przegięcia dla funkcji:
   $$f(x) = \\frac{x^2 - 4}{x - 1}$$
3. **Całka Oznaczona i Długość Łuku**: Oblicz pole obszaru ograniczonego parabolą $y = x^2$ oraz prostą $y = 2x + 3$.
4. **Zbieżność Szeregów**: Zbadaj bezwzględną i warunkową zbieżność szeregu:
   $$\\sum_{n=1}^{\\infty} \\frac{(-1)^n}{\\sqrt{n} + 2}$$`,
  },
  {
    id: 'put-cs-logika',
    title: 'Logika i Matematyka Dyskretna',
    category: 'Semestr 1',
    description:
      'Klasyczny rachunek zdań, kwantyfikatory, indukcja matematyczna, relacje równoważności, teoria grafów i kombinatoryka.',
    rank: 0,
    order: 2,
    coreNotes: `# Logika i Matematyka Dyskretna — WIT Politechnika Poznańska

## 1. Klasyczny Rachunek Zdań (KRZ) i Rachunek Predykatów
- **Aksjomatyka i Tautologie**:
  - Prawa de Morgana: $\\neg (p \\land q) \\iff (\\neg p \\lor \\neg q)$ oraz $\\neg (p \\lor q) \\iff (\\neg p \\land \\neg q)$.
  - Prawo kontrapozycji: $(p \\implies q) \\iff (\\neg q \\implies \\neg p)$.
  - Reguły dowodzenia: Modus Ponens ($\\frac{p, p \\implies q}{q}$), Modus Tollens, Reductio ad Absurdum (dowód nie wprost).
- **Postacie Normalne Formuł**:
  - Koniunkcyjna Postać Normalna (CNF): Koniunkcja alternatyw literałów $\\bigwedge_i (l_{i,1} \\lor \\dots \\lor l_{i,k})$.
  - Dysjunkcyjna Postać Normalna (DNF): Alternatywa koniunkcji literałów.
  - Zagadnienie spełnialności formuł logicznych (SAT): Pierwszy problem udowodniony jako NP-zupełny (twierdzenie Cooka-Levina). Algorytm DPLL (Davis-Putnam-Logemann-Loveland) z propagacją jednostkową (*unit propagation*) i eliminacją czystych literałów (*pure literal elimination*).

## 2. Teoria Mnogości, Relacje i Porządki
- **Iloczyn kartezjański, relacje dwuargumentowe $R \\subseteq A \\times B$**.
- **Własności relacji**: zwrotność, przeciwzwrotność, symetria, antysymetria, przechodniość, spójność.
- **Relacja Równoważności**: Zwrotna, symetryczna i przechodnia. Każda relacja równoważności wyznacza podział zbioru $A$ na rozłączne klasy abstrakcji $[x]_R = \\{y \\in A : x R y\\}$.
- **Częściowy Porządek (Poset)**: Zwrotny, antysymetryczny i przechodni. Diagramy Hassego, elementy maksymalne/minimalne, największe/najmniejsze. Kresy: supremum i infimum. Kraty (Lattices) algebraiczne.

## 3. Kombinatoryka i Zasada Indukcji Matematycznej
- **Zasada Indukcji Matematycznej**:
  $$\\Big( P(n_0) \\land \\forall_{k \\ge n_0} [P(k) \\implies P(k+1)] \\Big) \\implies \\forall_{n \\ge n_0} P(n)$$
- **Zasada Szufladkowa Dirichleta**: Jeśli $n+1$ przedmiotów umieścimy w $n$ szufladkach, to co najmniej w jednej szufladce znajdą się co najmniej dwa przedmioty.
- **Wzór włączeń i wyłączeń (Inclusion-Exclusion Principle)**:
  $$\\left| \\bigcup_{i=1}^n A_i \\right| = \\sum_{k=1}^n (-1)^{k-1} \\sum_{1 \\le i_1 < \\dots < i_k \\le n} |A_{i_1} \\cap \\dots \\cap A_{i_k}|$$
- **Współczynniki dwumianowe i tożsamości Pascala**: $\\binom{n}{k} = \\frac{n!}{k!(n-k)!}$, $\\binom{n}{k} = \\binom{n-1}{k-1} + \\binom{n-1}{k}$.

## 4. Wprowadzenie do Teorii Grafów
- Grafy nieskierowane $G = (V, E)$, stopień wierzchołka $\\deg(v)$.
- **Lemat o uściskach dłoni (Handshaking Lemma)**: $\\sum_{v \\in V} \\deg(v) = 2|E|$. Wniosek: liczba wierzchołków o stopniu nieparzystym jest parzysta.
- Grafy planarne: Grafy dające się narysować na płaszczyźnie bez przecięć krawędzi. Wzór Eulera: $V - E + F = 2$. Twierdzenie Kuratowskiego: graf jest planarny $\\iff$ nie zawiera podgrafu homeomorficznego z $K_5$ lub $K_{3,3}$.

## 5. Literatura
1. Kenneth A. Ross, Charles R.B. Wright — *Matematyka dyskretna*. Wydawnictwo Naukowe PWN.
2. Helena Rasiowa — *Wstęp do matematyki współczesnej*. PWN.
3. Robin J. Wilson — *Wprowadzenie do teorii grafów*. PWN.`,
    reviewPrompts: `# Logika i Matematyka Dyskretna — Weryfikacja Wiedzy

## Zadania Teoretyczne i Kolokwialne
1. **Dowód Indukcyjny**: Udowodnij za pomocą zasady indukcji matematycznej, że dla każdej liczby naturalnej $n \\ge 1$ zachodzi tożsamość:
   $$\\sum_{k=1}^n k^3 = \\left( \\frac{n(n+1)}{2} \\right)^2$$
2. **Transformacja do CNF**: Przekształć formułę logiczną $\\neg (p \\implies (q \\land r))$ do równoważnej Koniunkcyjnej Postaci Normalnej (CNF).
3. **Relacje i Klasy Abstrakcji**: W zbiorze liczb całkowitych $\\mathbb{Z}$ zdefiniowano relację $x R y \\iff 5 \\mid (x - y)$. Udowodnij, że $R$ jest relacją równoważności i wyznacz jej klasy abstrakcji (pierścienie reszt $\\mathbb{Z}_5$).
4. **Planarność Grafu**: Udowodnij, że pełny graf dwudzielny $K_{3,3}$ nie jest grafem planarnym, korzystając z zależności $E \\le 2V - 4$ dla grafów bez trójkątów.`,
  },
  {
    id: 'put-cs-aisd',
    title: 'Algorytmy i Struktury Danych',
    category: 'Semestr 2',
    description:
      'Złożoność obliczeniowa, algorytmy sortowania, zrównoważone drzewa BST/AVL, grafowe BFS/DFS, Dijkstra i programowanie dynamiczne.',
    rank: 1,
    order: 0,
    coreNotes: `# Algorytmy i Struktury Danych — Instytut Informatyki PP

## 1. Asymptotyczna Złożoność Obliczeniowa
- **Formalne definicje notacji Landaua**:
  - $O(g(n)) = \\{f(n) : \\exists_{c > 0, n_0} \\forall_{n \\ge n_0} 0 \\le f(n) \\le c g(n)\\}$ (asymptotyczne ograniczenie górne).
  - $\\Omega(g(n)) = \\{f(n) : \\exists_{c > 0, n_0} \\forall_{n \\ge n_0} 0 \\le c g(n) \\le f(n)\\}$ (asymptotyczne ograniczenie dolne).
  - $\\Theta(g(n)) = O(g(n)) \\cap \\Omega(g(n))$ (asymptotycznie dokładne ograniczenie).
- **Twierdzenie o Rekurencji Uniwersalnej (Master Theorem)** dla relacji $T(n) = aT(n/b) + f(n)$:
  1. Jeżeli $f(n) = O(n^{\\log_b a - \\varepsilon})$ dla pewnego $\\varepsilon > 0$, to $T(n) = \\Theta(n^{\\log_b a})$.
  2. Jeżeli $f(n) = \\Theta(n^{\\log_b a} \\log^k n)$ dla $k \\ge 0$, to $T(n) = \\Theta(n^{\\log_b a} \\log^{k+1} n)$.
  3. Jeżeli $f(n) = \\Omega(n^{\\log_b a + \\varepsilon})$ dla pewnego $\\varepsilon > 0$ i zachodzi warunek regularności $a f(n/b) \\le c f(n)$ dla $c < 1$, to $T(n) = \\Theta(f(n))$.

## 2. Zaawansowane Struktury Danych
- **Drzewa Samorównoważące (AVL Trees)**:
  - Niezmiennik wyważenia: dla każdego węzła $v$, współczynnik wyważenia $BF(v) = h(\\text{right}) - h(\\text{left}) \\in \\{-1, 0, 1\\}$.
  - Operacje rotacji: Pojedyncza lewa (LL), pojedyncza prawa (RR), podwójna lewo-prawa (LR), podwójna prawo-lewa (RL). Złożoność wyszukiwania, wstawiania i usuwania: $O(\\log n)$.
- **Drzewa Czerwono-Czarne (Red-Black Trees)**:
  - Własności: każdy węzeł jest czerwony lub czarny; korzeń jest czarny; czerwony węzeł nie może mieć czerwonego dziecka; każda ścieżka od korzenia do liścia ma tę samą czarną wysokość (*black-height*). Wykorzystywane w STL (\`std::map\`, \`std::set\`).
- **Tablice z Haszowaniem (Hash Tables)**:
  - Funkcje haszujące: uniwersalne haszowanie, funkcja MurmurHash3.
  - Kolizje: Adresowanie łańcuchowe (*Chaining*) vs Otwarte adresowanie (*Open Addressing* — próbkowanie liniowe, kwadratowe, haszowanie dwukrotne). Złożoność średnia $O(1)$, pesymistyczna $O(n)$.
- **Kolejki Priorytetowe i Kopce Binarne**: Tablicowa reprezentacja kopca (dla węzła $i$: lewy syn $2i+1$, prawy syn $2i+2$, rodzic $\\lfloor(i-1)/2\\rfloor$). Algorytm budowania kopca \`BuildHeap\` w czasie liniowym $O(n)$.

## 3. Algorytmy Grafowe
- **Przeszukiwanie Grafu**:
  - Breadth-First Search (BFS): Kolejka FIFO, wyznaczanie najkrótszych ścieżek w grafach nieważonych, $O(V + E)$.
  - Depth-First Search (DFS): Stos LIFO/rekurencja, klasyfikacja krawędzi (drzewowe, powrotne, w przód, poprzeczne), sortowanie topologiczne w DAG, silnie spójne składowe (algorytm Kosaraju, algorytm Tarjana).
- **Najkrótsze Ścieżki w Grafach Ważonych**:
  - *Algorytm Dijkstry*: Zachłanny wybór wierzchołka o minimalnym oszacowaniu odległości. Z kopcem binarnym: $O((V + E) \\log V)$, z kopcem Fibonacciego: $O(E + V \\log V)$. Wymaga wag nieujemnych ($w(e) \\ge 0$).
  - *Algorytm Bellmana-Forda*: Relaksacja wszystkich krawędzi $V-1$ razy. Obsługuje wagi ujemne i wykrywa ujemne cykle osiągalne ze źródła. Złożoność $O(V \\cdot E)$.
  - *Algorytm Floyda-Warshalla*: Programowanie dynamiczne dla wszystkich par wierzchołków. Macierz odległości $D^{(k)}[i][j] = \\min(D^{(k-1)}[i][j], D^{(k-1)}[i][k] + D^{(k-1)}[k][j])$. Złożoność $O(V^3)$.
- **Minimalne Drzewo Rozpinające (MST)**:
  - *Algorytm Kruskala*: Sortowanie krawędzi i struktura zbiorów rozłącznych Union-Find z kompresją ścieżek i rangami. $O(E \\log E)$.
  - *Algorytm Prima*: Rozszerzanie drzewa o najlżejszą krawędź przekraczającą przekrój. $O(E \\log V)$.

## 4. Paradygmaty Konstrukcji Algorytmów
- **Dziel i Zwyciężaj (Divide and Conquer)**: Sortowanie przez scalanie (*MergeSort* — gwarantowane $\\Theta(n \\log n)$), sortowanie szybkie (*QuickSort* — średnio $\\Theta(n \\log n)$, pesymistycznie $\\Theta(n^2)$ eliminowane przez algorytm Median-of-Medians).
- **Programowanie Dynamiczne (DP)**:
  - Problem plecakowy 0-1 (Knapsack Problem): $dp[i][w] = \\max(dp[i-1][w], dp[i-1][w - w_i] + v_i)$. Złożoność pseudowielomianowa $O(n W)$.
  - Najdłuższy wspólny podciąg (LCS) i odległość edycyjna Levenshteina.

## 5. Literatura
1. Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, Clifford Stein — *Wprowadzenie do algorytmów* (CLRS). Wydawnictwa Naukowo-Techniczne.
2. Robert Sedgewick, Kevin Wayne — *Algorytmy*. Helion.
3. Steven S. Skiena — *The Algorithm Design Manual*. Springer.`,
    reviewPrompts: `# Algorytmy i Struktury Danych — Zadania Egzaminacyjne

## Pytania Teoretyczne i Zadania Egzaminacyjne
1. **Dolna Granica Sortowania**: Przedstaw formalny dowód dolnej granicy pesymistycznej złożoności sortowania opartego na porównaniach $\\Omega(n \\log n)$, wykorzystując model drzewa decyzyjnego o $n!$ liściach i wzór Stirlinga $\\ln(n!) \\approx n \\ln n - n$.
2. **Rotacje w Drzewie AVL**: Narysuj drzewo AVL powstałe po kolejnym wstawieniu kluczy: $10, 20, 30, 40, 50, 25$. Wskaż moment wystąpienia niewyważenia oraz przeprowadź niezbędne rotacje (RR i RL).
3. **Algorytm Dijkstry vs Bellman-Ford**: Dlaczego algorytm Dijkstry zawodzi w obecności wag ujemnych nawet wówczas, gdy w grafie nie występują cykle o ujemnej wadze? Przedstaw minimalny kontrprzykład (3 wierzchołki).
4. **Zadanie Programistyczne (DP)**: Zaimplementuj w C++ algorytm znajdujący Najdłuższy Rosnący Podciąg (LIS - Longest Increasing Subsequence) w tablicy $n$-elementowej w czasie $O(n \\log n)$ przy użyciu programowania dynamicznego z wyszukiwaniem binarnym (\`std::lower_bound\`).`,
  },
  {
    id: 'put-cs-algeb',
    title: 'Algebra Liniowa i Geometria Analityczna',
    category: 'Semestr 2',
    description:
      'Macierze, układy Cramera, eliminacja Gaussa-Jordana, przestrzenie liniowe, przekształcenia liniowe, wektory i wartości własne.',
    rank: 1,
    order: 1,
    coreNotes: `# Algebra Liniowa — Fundamenty dla Informatyki (Politechnika Poznańska)

## 1. Układy Równań Liniowych i Rachunek Macierzowy
- **Układ równań liniowych $Ax = b$**:
  - Macierz główna $A \\in M_{m \\times n}(\\mathbb{R})$, macierz rozszerzona $[A | b]$.
  - **Twierdzenie Kroneckera-Capellego**: Układ ma rozwiązanie $\\iff \\text{rank}(A) = \\text{rank}([A|b])$. Jeśli $\\text{rank}(A) = n$ (liczba zmiennych), układ jest oznaczony (dokładnie 1 rozwiązanie). Jeśli $\\text{rank}(A) < n$, układ jest nieoznaczony i posiada nieskończenie wiele rozwiązań zależnych od $n - \\text{rank}(A)$ parametrów.
- **Metoda eliminacji Gaussa i Gaussa-Jordana**: Operacje elementarne na wierszach (zamiana wierszy, mnożenie przez niezerowy skalar, dodanie wielokrotności innego wiersza), sprowadzenie macierzy do postaci schodkowej zredukowanej.
- **Rozkład LU i LUP macierzy**: Faktoryzacja $P A = L U$, gdzie $P$ jest macierzą permutacji, $L$ macierzą dolnotrójkątną z jedynkami na przekątnej, a $U$ macierzą górnotrójkątną. Umożliwia rozwiązanie układu w czasie $O(n^2)$ po jednorazowym koszcie faktoryzacji $O(n^3)$.

## 2. Przestrzenie Wektorowe, Bazy i Przekształcenia Liniowe
- Przestrzeń wektorowa nad ciałem $\\mathbb{R}$, aksjomaty łączności, przemienności, elementu neutralnego i rozdzielności.
- Liniowa niezależność wektorów: $\\sum_{i=1}^k \\alpha_i v_i = 0 \\iff \\alpha_1 = \\dots = \\alpha_k = 0$.
- Baza przestrzeni wektorowej i wymiar $\\dim(V)$.
- **Ortogonalizacja Grama-Schmidta**: Konstrukcja bazy ortonormalnej $\\{u_1, \\dots, u_k\\}$ ze zbioru wektorów liniowo niezależnych $\\{v_1, \\dots, v_k\\}$:
  $$u_1 = \\frac{v_1}{\\|v_1\\|}, \\quad u_k = \\frac{v_k - \\sum_{j=1}^{k-1} \\langle v_k, u_j \\rangle u_j}{\\|v_k - \\sum_{j=1}^{k-1} \\langle v_k, u_j \\rangle u_j\\|}$$
- Przekształcenia liniowe $T: V \\to W$: jądro $\\ker(T) = \\{v \\in V : T(v) = 0\\}$ oraz obraz $\\text{im}(T) = \\{T(v) : v \\in V\\}$.
- **Twierdzenie o rzędzie i zerowości (Rank-Nullity Theorem)**:
  $$\\dim(V) = \\dim(\\ker(T)) + \\dim(\\text{im}(T))$$

## 3. Zagadnienie Własne, Diagonalizacja i Rozkład SVD
- **Wartości własne i wektory własne**: $A v = \\lambda v$ dla niezerowego wektora $v$.
- Równanie charakterystyczne: $\\det(A - \\lambda I) = 0$.
- Krotność algebraiczna vs krotność geometryczna wartości własnej. Macierz jest diagonalizowalna $\\iff$ dla każdej wartości własnej krotność algebraiczna równa się krotności geometrycznej ($A = P D P^{-1}$).
- **Rozkład według wartości osobliwych (Singular Value Decomposition - SVD)**:
  $$A = U \\Sigma V^T, \\quad A \\in M_{m \\times n}(\\mathbb{R})$$
  gdzie $U \\in M_{m \\times m}$ i $V \\in M_{n \\times n}$ są macierzami ortogonalnymi, a $\\Sigma \\in M_{m \\times n}$ zawiera nieujemne wartości osobliwe $\\sigma_1 \\ge \\sigma_2 \\ge \\dots \\ge 0$ na przekątnej. SVD stanowi fundament analizy głównych składowych (PCA), kompresji obrazów i redukcji szumów w systemach informatycznych.

## 4. Literatura
1. Gilbert Strang — *Linear Algebra and Its Applications*. Cengage Learning.
2. Tadeusz Jurlewicz, Zbigniew Skoczylas — *Algebra liniowa w zadaniach*. Oficyna Wydawnicza GiS.
3. David C. Lay — *Linear Algebra and Its Applications*. Pearson.`,
    reviewPrompts: `# Algebra Liniowa — Zagadnienia Kontrolne

## Zadania Egzaminacyjne
1. **Rozwiązanie Układu z Parametrem**: Przedyskutuj liczbę rozwiązań układu równań liniowych w zależności od parametru $p \\in \\mathbb{R}$:
   $$\\begin{cases} px + y + z = 1 \\\\ x + py + z = p \\\\ x + y + pz = p^2 \\end{cases}$$
2. **Diagonalizacja Macierzy**: Zbadaj diagonalizowalność macierzy $A = \\begin{pmatrix} 2 & 1 \\\\ 0 & 2 \\end{pmatrix}$. Jeśli to możliwe, wyznacz macierz $P$ taką, że $P^{-1}AP$ jest macierzą diagonalną.
3. **Ortogonalizacja Grama-Schmidta**: Zastosuj proces Grama-Schmidta do wektorów $v_1 = (1, 1, 0)$, $v_2 = (1, 0, 1)$, $v_3 = (0, 1, 1)$ w przestrzeni $\\mathbb{R}^3$ ze standardowym iloczynem skalarnym.
4. **Zastosowanie SVD w Kompresji**: Wyjaśnij, w jaki sposób twierdzenie Eckarta-Younga-Mirsky'ego uzasadnia optymalność obcięcia macierzy $\\Sigma$ do pierwszych $k$ wartości osobliwych w normie Frobeniusa.`,
  },
  {
    id: 'put-cs-po',
    title: 'Programowanie Obiektowe (Java/C++)',
    category: 'Semestr 2',
    description:
      'Paradygmaty obiektowe: abstrakcja, enkapsulacja, polimorfizm, generyki, wzorce projektowe GoF, obsługa wyjątków i testy jednostkowe.',
    rank: 1,
    order: 2,
    coreNotes: `# Programowanie Obiektowe — WIT PP

## 1. Filary Paradygmatu Obiektowego i Zasady SOLID
- **Abstrakcja i Enkapsulacja**: Ukrywanie wewnętrznej reprezentacji stanu, interfejs publiczny jako kontrakt transakcyjny, niezmienniki klas (*class invariants*).
- **Dziedziczenie i Polimorfizm**:
  - Wiązanie statyczne (early binding) vs wiązanie dynamiczne (late binding / dynamic dispatch).
  - Mechanizm tablic metod wirtualnych (*vtable*) i wskaźników do vtable (*vptr*) w C++.
- **Pięć Zasad SOLID**:
  - **S** — Single Responsibility Principle (SRP): Klasa powinna mieć tylko jeden powód do zmiany.
  - **O** — Open/Closed Principle (OCP): Klasy powinny być otwarte na rozbudowę, lecz zamknięte na modyfikację.
  - **L** — Liskov Substitution Principle (LSP): Obiekty podtypów muszą być w pełni zastępowalne obiektami typów bazowych bez naruszania poprawności programu.
  - **I** — Interface Segregation Principle (ISP): Wiele dedykowanych interfejsów jest lepszych niż jeden ogólny interfejs gruby (*fat interface*).
  - **D** — Dependency Inversion Principle (DIP): Moduły wysokiego poziomu nie powinny zależeć od modułów niskiego poziomu; oba powinny zależeć od abstrakcji.

## 2. Katalog Wzorców Projektowych GoF (Gang of Four)
- **Wzorce Kreacyjne**:
  - *Factory Method* i *Abstract Factory*: Enkapsulacja tworzenia rodzin powiązanych obiektów.
  - *Builder*: Krok po kroku konstrukcja złożonych obiektów z czytelnym interfejsem Fluent API.
  - *Singleton*: Gwarancja istnienia dokładnie jednej instancji klasy. Wersja bezpieczna wątkowo w Javie: *Double-Checked Locking* ze specyfikatorem \`volatile\` lub wzorzec *Bill Pugh Singleton* oparty na statycznej klasie wewnętrznej.
- **Wzorce Strukturalne**:
  - *Adapter*: Przekształcenie interfejsu klasy w inny interfejs oczekiwany przez klienta.
  - *Decorator*: Dynamiczne dołączanie nowych odpowiedzialności do obiektu bez użycia dziedziczenia (np. strumienie w \`java.io\`).
  - *Facade*: Uproszczony interfejs do złożonego podsystemu bibliotecznego.
- **Wzorce Behawioralne**:
  - *Strategy*: Definicja rodziny wymiennych algorytmów zamkniętych w dedykowanych obiektach (realizacja OCP).
  - *Observer*: Relacja jeden-do-wielu, w której zmiana stanu obiektu obserwowanego automatycznie powiadamia wszystkich subskrybentów.
  - *Command*: Enkapsulacja żądania jako obiektu, umożliwiająca parametryzację operacji, kolejkowanie i operacje *undo/redo*.

## 3. Modele Zarządzania Pamięcią: RAII w C++ vs Garbage Collection w JVM
- **C++ i Idiom RAII (Resource Acquisition Is Initialization)**:
  - Czas życia zasobu powiązany z czasem życia obiektu na stosie. Destruktory wywoływane deterministycznie podczas zwijania stosu (*stack unwinding*).
  - Inteligentne wskaźniki (C++11): \`std::unique_ptr\` (wyłączna własność, zerowy narzut wydajnościowy), \`std::shared_ptr\` (współdzielona własność z atomowym licznikiem referencji) oraz \`std::weak_ptr\` (zapobieganie cyklom referencyjnym).
- **Java i Wirtualna Maszyna (JVM)**:
  - Automatyczne zarządzanie pamięcią: generacyjny Garbage Collector (G1 GC, ZGC).
  - Pamięć sterty podzielona na generację młodą (Eden, Survivor Spaces S0/S1) i starą (Tenured/Old). Algorytm *Mark-Sweep-Compact*.
  - Zjawisko *Stop-The-World* (STW) i techniki minimalizacji pauz GC w systemach wysokiej wydajności.

## 4. Literatura
1. Joshua Bloch — *Effective Java* (Wydanie 3). Helion / Addison-Wesley.
2. Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides — *Wzorce projektowe. Elementy oprogramowania obiektowego wielokrotnego użytku*. WNT.
3. Scott Meyers — *Effective Modern C++*. O'Reilly.`,
    reviewPrompts: `# Programowanie Obiektowe — Laboratorium i Projekt

## Pytania Egzaminacyjne
1. **Zasada Podstawienia Liskov (LSP)**: Przedstaw klasyczny przykład naruszenia zasady LSP na relacji Prostokąt - Kwadrat. Dlaczego dziedziczenie kwadratu po prostokącie narusza kontrakt metody \`setWidth()\` i \`setHeight()\`?
2. **Tablice Metod Wirtualnych**: Wyjaśnij, w jaki sposób kompilator C++ realizuje polimorfizm dynamiczny. Ile dodatkowej pamięci zajmuje obiekt klasy posiadającej przynajmniej jedną metodę wirtualną? Co to jest czysta metoda wirtualna (*pure virtual function*)?
3. **Wzorzec Observer i Thread Safety**: Zaprojektuj szkielet wzorca Obserwator w języku Java, w którym rejestracja i powiadamianie obserwatorów są w pełni bezpieczne w środowisku wielowątkowym bez ryzyka zakleszczenia (*deadlock*) w trakcie wywoływania obcych metod (*alien methods*).
4. **Zadanie Laboratoryjne**: Zaimplementuj wzorzec Dekorator w C++ dla systemu fakturowania: klasa bazowa \`SimpleInvoice\` dekorowana przez \`VatDecorator\` (+23%), \`DiscountDecorator\` (-10%) oraz \`ShippingDecorator\`. Wykorzystaj \`std::unique_ptr\` do bezpiecznego zarządzania łańcuchem dekoratorów.`,
  },
  {
    id: 'put-cs-akso',
    title: 'Architektura Komputerów i Systemy Operacyjne',
    category: 'Semestr 3',
    description:
      'Model von Neumanna, asembler x86-64, wielozadaniowość, zarządzanie pamięcią wirtualną, semafory, muteksy i system plików ext4.',
    rank: 2,
    order: 0,
    coreNotes: `# Architektura Komputerów i Systemy Operacyjne — WIT PP

## 1. Architektura Sprzętowa, Mikroarchitektura i Potokowość
- **Architektura von Neumanna vs Harvardzka**: Wspólna vs rozdzielona magistrala danych i instrukcji maszynowych.
- **Klasyczny 5-stopniowy potok RISC (Instruction Pipeline)**:
  1. IF (*Instruction Fetch*): pobranie instrukcji z pamięci podręcznej I-Cache pod adresem \`%rip\`.
  2. ID (*Instruction Decode*): dekodowanie instrukcji i odczyt rejestrów.
  3. EX (*Execute*): wykonanie operacji w jednostce ALU lub obliczenie adresu pamięci.
  4. MEM (*Memory Access*): odczyt lub zapis danych do pamięci D-Cache.
  5. WB (*Write Back*): zapis wyniku operacji do rejestru docelowego.
- **Hazardi w potoku**:
  - Hazardy strukturalne: konflikt dostępu do tego samego zasobu sprzętowego.
  - Hazardy danych: zależności typu RAW (*Read-After-Write*), WAR (*Write-After-Read*), WAW (*Write-After-Write*). Rozwiązywane przez *data forwarding* (przesyłanie wprost) lub wprowadzanie bąbelków (*pipeline stalls*).
  - Hazardy sterowania: skoki warunkowe. Rozwiązywane przez predyktory skoków (*Dynamic Branch Prediction* — tablica historii skoków BHT, bufor docelowych adresów BTB).

## 2. Pamięć Podręczna (Cache) i Protokoły Spójności
- Organizacja pamięci podręcznej: mapowanie bezpośrednie (*Direct-Mapped*), w pełni skojarzone (*Fully Associative*), skojarzeniowe grupowe (*Set-Associative*).
- Formuła adresu pamięci: \`Tag | Set Index | Block Offset\`.
- Polityki zapisu: *Write-Through* vs *Write-Back* z bitem modyfikacji (*dirty bit*).
- Protokoły spójności pamięci podręcznych w architekturach wielordzeniowych: Protokół **MESI** (Modified, Exclusive, Shared, Invalid) i podsłuchiwanie magistrali (*Bus Snooping*).

## 3. Jądro Systemu Operacyjnego i Pamięć Wirtualna
- **Tryby pracy procesora**: Pierścień 0 (*Kernel Mode*) vs Pierścień 3 (*User Mode*). Przejście przez przerwania sprzętowe, pułapki (*traps*) oraz instrukcję \`syscall\`.
- **Stronicowanie Pamięci (Paging)**:
  - 4-poziomowe tablice stron w architekturze x86_64: PML4 $\\to$ PDPT $\\to$ PD $\\to$ PT $\\to$ Strona fizyczna (4 KiB).
  - Rejestr kontrolny CR3 przechowujący fizyczny adres bazowy PML4 aktualnego procesu.
  - Bufor translacji stron (TLB - Translation Lookaside Buffer): asocjacyjna pamięć podręczna translacji adresów wirtualnych na fizyczne. Błąd chybienia TLB (*TLB miss*) i czyszczenie TLB przy przełączaniu kontekstu.
  - Błąd braku strony (*Page Fault*): obsługa stronicowania na żądanie (*demand paging*), wymiana stron z dyskową przestrzenią wymiany (*swap space*). Algorytmy zastępowania stron: LRU, FIFO, zegarowy (*Clock Algorithm*).

## 4. Zarządzanie Procesami, Wątkami i Synchronizacja
- Stan procesu: Nowy, Gotowy (Ready), Wykonywany (Running), Oczekujący (Blocked/Waiting), Zakończony (Terminated).
- Blok Kontrolny Procesu (PCB - Process Control Block) i Blok Kontrolny Wątku (TCB).
- Narzut przełączania kontekstu (*Context Switch*): zapis rejestrów, przełączenie mapy pamięci wirtualnej (CR3), inwalidacja TLB, utrata lokalności w pamięci podręcznej L1/L2.
- **Warunki Coffmana dla Zakleszczenia (Deadlock)**:
  1. *Wzajemne wykluczanie (Mutual Exclusion)*: Zasób może być używany tylko przez jeden proces naraz.
  2. *Przetrzymywanie i oczekiwanie (Hold and Wait)*: Proces trzyma zasób i żąda kolejnego.
  3. *Brak wywłaszczenia (No Preemption)*: Zasób nie może zostać odebrany siłą.
  4. *Oczekiwanie cykliczne (Circular Wait)*: Istnieje cykliczny łańcuch procesów oczekujących na zasoby trzymane przez kolejny proces.
- Prymitywy synchronizacji: Muteksy z obsługą inwersji priorytetów (*Priority Inheritance Protocol*), semafory zliczające Dijkstry, zmienne warunkowe (\`pthread_cond_wait\`), blokady wirujące (*spinlocks*).

## 5. Literatura
1. Andrew S. Tanenbaum, Herbert Bos — *Nowoczesne systemy operacyjne*. Helion.
2. David A. Patterson, John L. Hennessy — *Organizacja i architektura komputerów. Interfejs sprzęt/oprogramowanie*. PWN.
3. Robert Love — *Jądro Linuksa. Przewodnik po rozwoju kodu*. Helion.`,
    reviewPrompts: `# Systemy Operacyjne — Pytania Laboratoryjne

## Pytania Egzaminacyjne
1. **Translacja Adresów Wirtualnych**: W 64-bitowym systemie z 4-poziomowym stronicowaniem rozmiar strony wynosi 4 KiB ($2^{12}$ B). Ile bitów adresu przypada na przesunięcie wewnątrz strony (*offset*), a ile bitów na każdy z indeksów w tabelach stron? Narysuj schemat dekodowania adresu wirtualnego.
2. **Rozwiązywanie Zakleszczeń**: Wymień 4 warunki Coffmana i opisz algorytm Bankiera Dijkstry jako metodę unikania zakleszczeń (*deadlock avoidance*).
3. **Problem Pisarzy i Czytelników**: Zaimplementuj w języku C rozwiązanie problemu czytelników i pisarzy z priorytetem dla pisarzy, wykorzystując muteksy POSIX i zmienne warunkowe. Uzasadnij brak możliwości zagłodzenia pisarzy.
4. **Zadanie Laboratoryjne (Linux Kernel)**: Napisz prosty moduł jądra Linuksa rejestrujący urządzenie znakowe (\`character device\`), obsługujący operacje \`open\`, \`read\`, \`write\` i \`release\` z zabezpieczeniem bufora cyklicznego muteksem jądra (\`mutex_lock\`).`,
  },
  {
    id: 'put-cs-bazy',
    title: 'Bazy Danych i Systemy Relacyjne',
    category: 'Semestr 3',
    description:
      'Algebra relacji, normalizacja 1NF-BCNF, SQL (DML, DDL), transakcje ACID, indeksowanie B+ drzewem i optymalizator PostgreSQL.',
    rank: 2,
    order: 1,
    coreNotes: `# Bazy Danych — Instytut Informatyki PP

## 1. Relacyjny Model Danych i Algebra Relacji
- Formalna definicja relacji jako podzbioru iloczynu kartezjańskiego domen atrybutów $R \\subseteq D_1 \\times D_2 \\times \\dots \\times D_n$.
- **Operatory Algebry Relacji**:
  - Selekcja (restrykcja): $\\sigma_{\\theta}(R) = \\{t \\in R : \\theta(t)\\}$.
  - Projekcja (rzut): $\\pi_{A_1, \\dots, A_k}(R) = \\{t[A_1, \\dots, A_k] : t \\in R\\}$.
  - Iloczyn kartezjański: $R \\times S$.
  - Złączenie naturalne: $R \\bowtie S = \\pi_{R \\cup S}(\\sigma_{R.A_1 = S.A_1 \\land \\dots}(R \\times S))$.
  - Różnica zbiorów: $R \\setminus S$, suma $R \\cup S$, przekrój $R \\cap S$.

## 2. Teoria Zależności Funkcyjnych i Postacie Normalne
- Zależność funkcyjna $X \\to Y$: Jeśli dwie krotki zgadzają się na zbiorze atrybutów $X$, to muszą zgadzać się na zbiorze $Y$.
- **Aksjomaty Armstronga**: Zwrotność ($Y \\subseteq X \\implies X \\to Y$), Wzbogacanie ($X \\to Y \\implies XZ \\to YZ$), Przechodniość ($X \\to Y \\land Y \\to Z \\implies X \\to Z$).
- **Postacie Normalne Schematów**:
  - **1NF**: Wartości wszystkich atrybutów są atomowe (brak tablic i struktur zagnieżdżonych w kolumnach).
  - **2NF**: Jest w 1NF oraz każdy atrybut niekluczowy jest w pełni zależny funkcyjnie od każdego klucza potencjalnego (brak częściowych zależności od podzbioru klucza złożonego).
  - **3NF**: Jest w 2NF oraz żaden atrybut niekluczowy nie zależy przechodnio od klucza potencjalnego ($X \\to A \\implies X$ jest nadkluczem lub $A$ jest atrybutem głównym/kluczowym).
  - **BCNF (Boyce-Codd Normal Form)**: Dla każdej nietrywialnej zależności funkcyjnej $X \\to A$, zbiór $X$ jest nadkluczem relacji.

## 3. Wewnętrzna Architektura SZBD i Indeksowanie
- **B+ Drzewa (B+ Trees)**:
  - Zrównoważone drzewa poszukiwań o wysokim stopniu rozgałęzienia (*fan-out*), optymalizowane pod kątem odczytu blokowego ze stron dyskowych (typowo 4 KB lub 8 KB na stronę).
  - Wszystkie dane (rekordy lub identyfikatory TID) przechowywane są w liściach. Węzły wewnętrzne zawierają wyłącznie klucze sterujące wyszukiwaniem.
  - Liście połączone w dwukierunkową listę wiązaną, co gwarantuje złożoność skanowania zakresowego (*Range Scan*) $O(\\log n + k)$, gdzie $k$ jest liczbą pasujących rekordów.
- **Inne Typy Indeksów w PostgreSQL**:
  - *Hash Index*: Szybkie wyszukiwanie punktowe na równość ($O(1)$), brak wsparcia dla zapytań zakresowych.
  - *GIN (Generalized Inverted Index)*: Indeks odwrócony, niezbędny do przeszukiwania pełnotekstowego (Full-Text Search), tablic i dokumentów JSONB.
  - *GiST (Generalized Search Tree)*: Indeks drzewiasty dla danych przestrzennych (R-drzewa), geometrii PostGIS oraz typów zakresowych (*Range Types*).
  - *BRIN (Block Range Index)*: Indeks podsumowujący minimalne i maksymalne wartości w blokach stron dyskowych; ekstremalnie lekki dla danych posortowanych chronologicznie (np. timestamp logów).

## 4. Transakcje, Własności ACID i Poziomy Izolacji
- **Własności ACID**:
  - **A**tomicity: Wszystko albo nic (realizowane przez dziennik wyprzedzający WAL - Write-Ahead Logging).
  - **C**onsistency: Przejście z jednego spójnego stanu bazy danych do innego, z zachowaniem więzów integralności.
  - **I**solation: Równoległe wykonywanie transakcji nie wpływa na ich poprawność.
  - **D**urability: Zmiany zatwierdzone (\`COMMIT\`) są trwale zachowane na nośniku nawet w przypadku awarii zasilania.
- **Anomalie Współbieżności i Poziomy Izolacji (ANSI SQL)**:
  - *Read Uncommitted*: Brudny odczyt (*Dirty Read*).
  - *Read Committed*: Odczyt niepowtarzalny (*Non-Repeatable Read*). Domyślny poziom w PostgreSQL.
  - *Repeatable Read*: Odczyt widmowy (*Phantom Read*). W PostgreSQL realizowany przez Snapshot Isolation.
  - *Serializable*: Pełna serializowalność transakcji, eliminacja anomalii *Write Skew* przy użyciu Serializable Snapshot Isolation (SSI).
- **Wielowersyjność (MVCC - Multi-Version Concurrency Control)**:
  - Pisarze nie blokują czytelników, czytelnicy nie blokują pisarzy.
  - Nagłówki krotek w PostgreSQL: \`xmin\` (ID transakcji tworzącej) oraz \`xmax\` (ID transakcji usuwającej/aktualizującej).
  - Proces \`VACUUM\` i \`AUTOVACUUM\`: usuwanie martwych krotek (*dead tuples*) i zapobieganie zjawisku *Transaction ID Wraparound*.

## 5. Literatura
1. Abraham Silberschatz, Henry F. Korth, S. Sudarshan — *Database System Concepts* (7th Edition). McGraw-Hill.
2. Hector Garcia-Molina, Jeffrey D. Ullman, Jennifer Widom — *Systemy baz danych. Pełny podręcznik*. Helion.
3. Markus Winand — *SQL Performance Explained*. Markus Winand Publishing.`,
    reviewPrompts: `# Bazy Danych — Zadania Egzaminacyjne i SQL

## Pytania Teoretyczne i Kolokwialne
1. **Dekompozycja do BCNF**: Dana jest relacja $R(A, B, C, D)$ ze zbiorem zależności funkcyjnych $F = \\{A \\to B, BC \\to D, D \\to A\\}$. Wyznacz wszystkie klucze potencjalne relacji $R$, sprawdź czy relacja jest w BCNF oraz przeprowadź bezstratną dekompozycję do BCNF z zachowaniem zależności.
2. **Optymalizacja Zapytań SQL**: Dana jest tabela zawierająca 20 milionów wierszy: \`Orders(id, customer_id, order_date, total_amount, status)\`. Zaprojektuj optymalny indeks złożony dla zapytania:
   \`\`\`sql
   SELECT customer_id, SUM(total_amount) 
   FROM Orders 
   WHERE status = 'COMPLETED' AND order_date >= '2026-01-01' 
   GROUP BY customer_id;
   \`\`\`
   Uzasadnij kolejność kolumn w indeksie wielokolumnowym pod kątem mechanizmu B+ drzewa.
3. **Anomalia Write Skew**: Przedstaw scenariusz ilustrujący anomalię odchylenia zapisu (*Write Skew*) występującą na poziomie izolacji *Snapshot Isolation / Repeatable Read* w systemie grafiku dyżurów lekarskich (wymóg: przynajmniej jeden lekarz na dyżurze). Dlaczego poziom *Repeatable Read* pozwala na zatwierdzenie obu transakcji jednocześnie?`,
  },
  {
    id: 'put-cs-rach-prawd',
    title: 'Rachunek Prawdopodobieństwa i Statystyka',
    category: 'Semestr 3',
    description:
      'Zmienne losowe dyskretne i ciągłe, twierdzenie Bayesa, estymatory, przedziały ufności i testowanie hipotez w uczeniu maszynowym.',
    rank: 2,
    order: 2,
    coreNotes: `# Rachunek Prawdopodobieństwa i Statystyka — WIT PP

## 1. Aksjomatyka Kołmogorowa i Prawdopodobieństwo Warunkowe
- **Przestrzeń probabilistyczna $(\\Omega, \\mathcal{F}, P)$**:
  1. $P(A) \\ge 0$ dla każdego zdarzenia $A \\in \\mathcal{F}$.
  2. $P(\\Omega) = 1$.
  3. $\\sigma$-addytywność: dla rozłącznych zdarzeń $A_1, A_2, \\dots$ zachodzi $P(\\bigcup_i A_i) = \\sum_i P(A_i)$.
- **Prawdopodobieństwo warunkowe i Twierdzenie o Prawdopodobieństwie Całkowitym**:
  $$P(A|B) = \\frac{P(A \\cap B)}{P(B)}, \\quad P(A) = \\sum_{i=1}^n P(A|B_i) P(B_i)$$
- **Twierdzenie Bayesa**:
  $$P(B_k|A) = \\frac{P(A|B_k) P(B_k)}{\\sum_{i=1}^n P(A|B_i) P(B_i)}$$
  Stanowi fundament klasyfikatorów Bayesa (Naive Bayes) oraz bayesowskiego wnioskowania statystycznego.

## 2. Zmienne Losowe i Rozkłady Prawdopodobieństwa
- **Zmienne losowe dyskretne**: Rozkład Bernoulliego, dwumianowy $B(n, p)$, Poissona $\\text{Pois}(\\lambda)$, geometryczny.
- **Zmienne losowe ciągłe**:
  - Gęstość prawdopodobieństwa $f(x)$ i dystrybuanta $F(x) = P(X \\le x) = \\int_{-\\infty}^x f(t)\\,dt$.
  - Rozkład jednostajny $U(a, b)$, wykładniczy $\\text{Exp}(\\lambda)$ (własność braku pamięci).
  - Rozkład normalny (Gaussa) $\\mathcal{N}(\\mu, \\sigma^2)$:
    $$f(x) = \\frac{1}{\\sigma \\sqrt{2\\pi}} \\exp\\left( -\\frac{(x - \\mu)^2}{2\\sigma^2} \\right)$$
- **Momenty Zmiennej Losowej**:
  - Wartość oczekiwana $E[X]$, wariancja $\\text{Var}(X) = E[(X - E[X])^2] = E[X^2] - (E[X])^2$, odchylenie standardowe $\\sigma$.
  - Kowariancja $\\text{Cov}(X, Y) = E[(X - E[X])(Y - E[Y])]$ oraz współczynnik korelacji liniowej Pearsona $\\rho(X, Y) = \\frac{\\text{Cov}(X, Y)}{\\sigma_X \\sigma_Y} \\in [-1, 1]$.

## 3. Twierdzenia Graniczne i Wnioskowanie Statystyczne
- **Prawa Wielkich Liczb (LLN)**: Słabe prawo wielkich liczb Chinczyna i mocne prawo Kołmogorowa: średnia z próby $\\bar{X}_n$ dąży prawie na pewno do wartości oczekiwanej $\\mu$.
- **Centralne Twierdzenie Graniczne (CLT - Lindeberga-Lévy'ego)**: Suma niezależnych zmiennych losowych o jednakowym rozkładzie i skończonej wariancji dąży asymptotycznie do rozkładu normalnego:
  $$\\frac{\\sum_{i=1}^n X_i - n\\mu}{\\sigma \\sqrt{n}} \\xrightarrow{d} \\mathcal{N}(0, 1)$$
- **Estymacja Parametryczna**:
  - Estymator nieobciążony, zgodny i efektywny.
  - Metoda Największej Wiarygodności (MLE - Maximum Likelihood Estimation): maksymalizacja funkcji log-wiarogodności $\\ln L(\\theta) = \\sum \\ln f(x_i; \\theta)$.
- **Testowanie Hipotez Statystycznych**:
  - Hipoteza zerowa $H_0$ vs alternatywna $H_1$.
  - Błąd I rodzaju (odrzucenie prawdziwej $H_0$, poziom istotności $\\alpha$) vs Błąd II rodzaju (brak odrzucenia fałszywej $H_0$, prawdopodobieństwo $\\beta$). Moc testu $1 - \\beta$.
  - Test t-Studenta, test zgodności chi-kwadrat Pearsona, wartość $p$-value.

## 4. Literatura
1. Jacek Koronacki, Jan Mielniczuk — *Statystyka dla studentów kierunków technicznych i przyrodniczych*. WNT.
2. Sheldon Ross — *A First Course in Probability*. Pearson.
3. Christopher M. Bishop — *Pattern Recognition and Machine Learning*. Springer.`,
    reviewPrompts: `# Statystyka i Prawdopodobieństwo — Zadania

## Zagadnienia Egzaminacyjne
1. **Paradoks Testu Medycznego (Bayes)**: Test na rzadką chorobę (występującą u 0.1% populacji) ma czułość 99% (prawdopodobieństwo pozytywnego wyniku u chorego) oraz swoistość 95% (prawdopodobieństwo negatywnego wyniku u zdrowego). Oblicz prawdopodobieństwo, że osoba z wynikiem pozytywnym rzeczywiście jest chora.
2. **Estymator MLE dla Rozkładu Poissona**: Wyznacz estymator największej wiarygodności (MLE) parametru $\\lambda$ dla próby prostej $x_1, \\dots, x_n$ pochodzącej z rozkładu Poissona $P(X = k) = \\frac{\\lambda^k e^{-\\lambda}}{k!}$. Wykaż, że otrzymany estymator jest nieobciążony.
3. **Zastosowanie CLT w Analizie Wydajności**: Czas odpowiedzi serwera WWW jest zmienną losową o wartości oczekiwanej $\\mu = 50\\text{ ms}$ i odchyleniu standardowym $\\sigma = 20\\text{ ms}$. Oblicz prawdopodobieństwo, że średni czas obsługi 100 niezależnych zapytań przekroczy $54\\text{ ms}$.`,
  },
  {
    id: 'put-cs-sieci',
    title: 'Sieci Komputerowe i Protokoły Komunikacyjne',
    category: 'Semestr 4',
    description:
      'Modele OSI i TCP/IP, Ethernet, IPv4/IPv6, routing OSPF/BGP, kontrola przeciążeń TCP (Cubic/BBR), DNS i bezpieczeństwo TLS 1.3.',
    rank: 3,
    order: 0,
    coreNotes: `# Sieci Komputerowe — Katedra Sieci Komputerowych WIT PP

## 1. Architektura Warstwowa: Modele OSI vs TCP/IP
- **Warstwa Fizyczna i Łącza Danych (L1/L2)**:
  - Ramka Ethernet II: Adresy MAC (48-bitowe), pole EtherType, suma kontrolna CRC32 (FCS).
  - Protokoły przełączania: Tablica MAC, algorytm Spanning Tree Protocol (STP / RSTP - 802.1w) eliminujący pętle w sieci L2, sieci wirtualne VLAN (tagowanie IEEE 802.1Q).
  - Protokół ARP (Address Resolution Protocol): mapowanie adresu IPv4 na adres sprzętowy MAC.
- **Warstwa Sieciowa (L3)**:
  - Adresacja IPv4: klasy adresów, maski podsieci, bezklasowe trasowanie CIDR (Classless Inter-Domain Routing).
  - Protokół IPv6: 128-bitowe adresy, eliminacja fragmentacji w routerach (Path MTU Discovery), Neighbor Discovery Protocol (NDP).
  - Routing: Protokoły wektora odległości (RIP) vs stanu łącza (OSPF — algorytm Dijkstry). Routing międzyoperatorski BGP-4 (Border Gateway Protocol, routing wektora ścieżki).
  - Mechanizm translacji adresów NAT/NAPT (Network Address and Port Translation) i protokół ICMP.

## 2. Warstwa Transportowa (L4): UDP i TCP
- **Protokół UDP**: Bezpołączeniowy, bez potwierdzeń, minimalny nagłówek 8-bajtowy. Zastosowania: DNS, streaming multimedialny, protokół QUIC / HTTP/3.
- **Protokół TCP**:
  - Połączeniowy, niezawodny strumień bajtów z kontrolą kolejności i retransmisją.
  - Trójetapowe nawiązywanie połączenia (*Three-Way Handshake*): \`SYN\` $\\to$ \`SYN-ACK\` $\\to$ \`ACK\` (sekwencyjne numery ISN).
  - Zamykanie połączenia: \`FIN\` $\\to$ \`ACK\` oraz stan \`TIME_WAIT\` (zapobieganie kolizji pakietów z opóźnionymi duplikatami).
  - Sterowanie przepływem (*Flow Control*): Mechanizm przesuwnego okna (*Sliding Window*), pole \`Window Size\` w nagłówku, zapobieganie syndromowi małego okna (algorytm Nagle'a po stronie nadawcy, opóźnione potwierdzenia Clarka po stronie odbiorcy).
  - Kontrola przeciążeń (*Congestion Control*):
    - Stany automatu: *Slow Start* (wykładniczy rozrost okna cwnd), *Congestion Avoidance* (liniowy rozrost AIMD), *Fast Retransmit*, *Fast Recovery*.
    - Algorytmy przeciążeniowe: TCP Reno (utrata pakietu jako sygnał przeciążenia), TCP Cubic (krzywa sześcienna, domyślna w Linuksie), TCP BBR (Bottleneck Bandwidth and RTT — estymacja pasma i opóźnienia fizycznego).

## 3. Warstwa Aplikacji (L7) i Bezpieczeństwo Komunikacji
- **Protokół DNS**: Hierarchiczna, rozproszona baza danych (Root Servers, TLD, serwery autorytatywne), rekordy A, AAAA, CNAME, MX, TXT, rekurencja vs iteracja.
- **Protokoły Web**:
  - HTTP/1.1: Trwałe połączenia (*Keep-Alive*), problem blokowania czoła kolejki (*Head-of-Line Blocking* na poziomie HTTP).
  - HTTP/2: Binarny framing, multipleksowanie wielu strumieni w pojedynczym połączeniu TCP, kompresja nagłówków HPACK, Server Push.
  - HTTP/3: Oparty na protokole transportowym **QUIC** (UDP), eliminacja HoL blocking na poziomie transportowym, szybsze nawiązywanie połączenia 0-RTT.
- **Protokół TLS 1.3 (Transport Layer Security)**:
  - Uzgadnianie kluczy metodą Ephemeral Diffie-Hellman (ECDHE) zapewniające doskonałe utajnienie w przód (*Perfect Forward Secrecy - PFS*).
  - Uwierzytelnianie serwera certyfikatami X.509 w infrastrukturze PKI. Szyfrowanie symetryczne AEAD (AES-256-GCM, ChaCha20-Poly1305).
  - Skrócenie procedury handshake do 1-RTT.

## 4. Literatura
1. James F. Kurose, Keith W. Ross — *Sieci komputerowe. Ujęcie odgórne*. Helion.
2. Andrew S. Tanenbaum, David J. Wetherall — *Sieci komputerowe* (Wydanie 5). Helion.
3. W. Richard Stevens — *TCP/IP Illustrated, Volume 1: The Protocols*. Addison-Wesley.`,
    reviewPrompts: `# Sieci Komputerowe — Laboratorium i Analiza Wireshark

## Pytania Egzaminacyjne
1. **Analiza Handshake TCP w Wireshark**: Wyjaśnij cel wymiany numerów sekwencyjnych ISN (*Initial Sequence Number*) podczas procedury nawiązywania połączenia 3-way handshake. Dlaczego ISN nie może być stałą wartością początkową równą zero (atak TCP Sequence Prediction)?
2. **Kalkulacja Podsieci CIDR**: Firma otrzymała blok adresowy \`192.168.10.0/24\`. Podziel tę przestrzeń na 4 równe podsieci. Dla każdej podsieci podaj: adres sieci, maskę podsieci, zakres adresów użytecznych dla hostów oraz adres rozgłoszeniowy (broadcast).
3. **HTTP/2 vs HTTP/3 na Poziomie Transportu**: Wyjaśnij, w jaki sposób utrata pojedynczego pakietu IP wpływa na transfer danych w protokole HTTP/2 (działającym na TCP) w porównaniu do HTTP/3 (działającym na QUIC/UDP).
4. **Zadanie Laboratoryjne (Gniazda Sieciowe)**: Zaimplementuj w języku C współbieżny serwer echo oparty na gniazdach POSIX (\`sys/socket.h\`) wykorzystujący wielodostępne wywołanie systemowe \`epoll\` w trybie Edge-Triggered (ET).`,
  },
  {
    id: 'put-cs-io',
    title: 'Inżynieria Oprogramowania i Projektowanie Systemów',
    category: 'Semestr 4',
    description:
      'Metodyki Agile/Scrum, modelowanie UML, wzorce architektoniczne, Domain-Driven Design (DDD), CI/CD oraz automatyzacja testów.',
    rank: 3,
    order: 1,
    coreNotes: `# Inżynieria Oprogramowania — WIT Politechnika Poznańska

## 1. Cykl Życia Oprogramowania i Zwinne Metodyki Wytwórcze
- **Modele Wytwórcze**:
  - Model kaskadowy (Waterfall): Sekwencyjne etapy, rygorystyczna specyfikacja wymagań, wysoki koszt zmian w późnych fazach.
  - Metodyki Zwinne (Agile Manifesto): Ludzie i interakcje ponad procesy i narzędzia; działające oprogramowanie ponad obszerną dokumentację; współpraca z klientem ponad negocjacje umów; reagowanie na zmiany ponad realizację planu.
- **Ramy Scrum**:
  - Role: Właściciel Produktu (Product Owner), Scrum Master, Zespół Deweloperski (Developers).
  - Zdarzenia: Sprint (1-4 tygodnie), Planowanie Sprintu, Codzienny Scrum (Daily), Przegląd Sprintu (Sprint Review), Retrospektywa Sprintu.
  - Artefakty: Rejestr Produktu (Product Backlog), Rejestr Sprintu (Sprint Backlog), Przyrost (Increment) spełniający Definicję Ukończenia (Definition of Done - DoD).

## 2. Domain-Driven Design (DDD) i Modelowanie Domeny
- **Strategiczne DDD**:
  - Język Wszechobecny (*Ubiquitous Language*): Jednolity aparat pojęciowy uzgodniony pomiędzy ekspertami dziedzinowymi a inżynierami oprogramowania.
  - Ograniczone Konteksty (*Bounded Contexts*): Granice modeli dziedzinowych w architekturze korporacyjnej.
  - Mapa Kontekstów (*Context Mapping*): Relacje między kontekstami (Shared Kernel, Customer-Supplier, Conformist, Anti-Corruption Layer - ACL).
- **Taktyczne DDD**:
  - *Encja (Entity)*: Obiekt definiowany przez unikalną tożsamość (*ID*) trwającą przez cały cykl życia, a nie przez stan atrybutów.
  - *Obiekt Wartości (Value Object)*: Obiekt niemutowalny definiowany wyłącznie przez sumę swoich atrybutów (brak ID; dwa obiekty o tych samych wartościach są równe).
  - *Agregat (Aggregate)*: Klaster powiązanych obiektów biznesowych traktowany jako jednostka spójności transakcyjnej z wyznaczonym korzeniem agregatu (*Aggregate Root*). Wszelkie modyfikacje stanu muszą przechodzić przez korzeń agregatu.
  - *Zdarzenie Domenowe (Domain Event)*: Niemutowalny fakt biznesowy, który zaszedł w domenie w przeszłości (np. \`OrderPlacedEvent\`).

## 3. Wzorce Architektoniczne Nowoczesnych Systemów
- **Architektura Sześciokątna (Hexagonal Architecture / Ports & Adapters)**:
  - Rdzeń biznesowy całkowicie odizolowany od bibliotek zewnętrznych, frameworków i baz danych.
  - Porty wejściowe i wyjściowe definiujące abstrakcyjne interfejsy; adaptery implementujące szczegóły techniczne (REST controller, adapter PostgreSQL, adapter kolejki RabbitMQ).
- **Architektura Czysta (Clean Architecture / Onion Architecture)**: Zasada zależności kierująca się zawsze do wewnątrz, w stronę reguł biznesowych przedsiębiorstwa.
- **Wzorzec CQRS (Command Query Responsibility Segregation)**:
  - Rozdzielenie modelu zapisu (Commands — transakcyjne mutacje, rygor reguł biznesowych) od modelu odczytu (Queries — zoptymalizowane widoki zmaterializowane pod kątem wyświetlania w UI).
- **Event Sourcing**:
  - Stan encji nie jest utrwalany bezpośrednio w bazie relacyjnej, lecz rekonstruowany poprzez odtworzenie sekwencji zdarzeń biznesowych zapisanych w niezmiennym dzienniku zdarzeń (*Event Store*).

## 4. Piramida Testów i Praktyki CI/CD
- **Piramida Testów Mike'a Cohna**:
  - Podstawa: Testy jednostkowe (*Unit Tests*) — szybkie, izolowane, mockujące zależności zewnętrzne (największa liczba).
  - Środek: Testy integracyjne (*Integration Tests*) — weryfikacja współpracy z bazą danych (np. Testcontainers), brokerem wiadomości i API.
  - Szczyt: Testy End-to-End (*E2E Tests*) — testy całego systemu z punktu widzenia użytkownika końcowego (najwolniejsze, najbardziej podatne na flakiness).
- **Test-Driven Development (TDD)**: Cykl *Red-Green-Refactor*.
- **Ciągła Integracja i Wdrażanie (CI/CD)**: Zautomatyzowane potoki budowania, lintery kodu, statyczna analiza bezpieczeństwa (SAST), automatyczne uruchamianie testów i bezprzestojowe wdrażanie (Blue-Green Deployment, Canary Release).

## 5. Literatura
1. Eric Evans — *Domain-Driven Design. Zapewnianie spójności architektury oprogramowania*. Helion.
2. Martin Fowler — *Refaktoryzacja. Ulepszanie struktury istniejącego kodu* (Wydanie 2). Helion.
3. Robert C. Martin — *Czysta architektura. Przewodnik dla profesjonalistów*. Helion.`,
    reviewPrompts: `# Inżynieria Oprogramowania — Projekt i Warsztaty

## Pytania Egzaminacyjne
1. **Reguły Agregatu w DDD**: Wyjaśnij 4 fundamentalne reguły projektowania agregatów według Vaughna Vernona:
   - Ochrona niezmienników biznesowych w granicach agregatu.
   - Projektowanie małych agregatów.
   - Odwoływanie się do innych agregatów wyłącznie przez ich tożsamość (ID).
   - Osiąganie spójności ostatecznej (*Eventual Consistency*) poza granicami agregatu.
2. **Architektura Hexagonalna a DIP**: W jaki sposób architektura portów i adapterów realizuje zasadę odwrócenia zależności (Dependency Inversion Principle)? Narysuj diagram pakietów pokazujący kierunek zależności pomiędzy warstwą domenową, aplikacyjną i infrastrukturalną.
3. **Event Sourcing i CQRS**: W jaki sposób system oparty na Event Sourcingu radzi sobie z audytowalnością oraz analizą stanu systemu w dowolnym punkcie w przeszłości (*Time-Travel Debugging*)? Jakie wyzwania wiążą się z ewolucją schematów zdarzeń (*Event Versioning*)?`,
  },
  {
    id: 'put-cs-sztuczna-int',
    title: 'Sztuczna Inteligencja i Uczenie Maszynowe',
    category: 'Semestr 5',
    description:
      'Uczenie nadzorowane i nienadzorowane, regresja, drzewa decyzyjne, sieci neuronowe, algorytm wstecznej propagacji błędu i Transformers.',
    rank: 4,
    order: 0,
    coreNotes: `# Sztuczna Inteligencja i Uczenie Maszynowe — WIT PP

## 1. Klasyczne Uczenie Maszynowe: Paradygmaty i Modele
- **Podział Uczenia Maszynowego**:
  - Uczenie nadzorowane (*Supervised Learning*): Zbiór par wejście-etykieta $(x_i, y_i)$. Zadania: regresja ($y \\in \\mathbb{R}$) oraz klasyfikacja ($y \\in \\{1, \\dots, K\\}$).
  - Uczenie nienadzorowane (*Unsupervised Learning*): Odkrywanie ukrytych struktur w danych $x_i$. Zadania: klasteryzacja ($k$-średnich, DBSCAN), redukcja wymiarowości (PCA, t-SNE).
  - Uczenie przez wzmacnianie (*Reinforcement Learning*): Agent wchodzący w interakcję ze środowiskiem (MDP - Markov Decision Process), maksymalizujący skumulowaną nagrodę.
- **Regresja Liniowa i Logistyczna**:
  - Regresja liniowa: Minimalizacja funkcji kosztu Mean Squared Error (MSE) metodą spadku wzdłuż gradientu (*Gradient Descent*):
    $$J(\\theta) = \\frac{1}{2m} \\sum_{i=1}^m (h_\\theta(x^{(i)}) - y^{(i)})^2$$
  - Regresja logistyczna: Modelowanie prawdopodobieństwa przynależności do klasy przy użyciu funkcji sigmoidalnej $\\sigma(z) = \\frac{1}{1 + e^{-z}}$. Funkcja kosztu: Binarna Entropia Krzyżowa (*Binary Cross-Entropy* / Log Loss).
- **Kompromis Między Obciążeniem a Wariancją (Bias-Variance Tradeoff)**:
  - *Underfitting* (wysokie obciążenie): Model zbyt prosty, niezdolny do uchwycenia relacji w danych.
  - *Overfitting* (wysoka wariancja): Model dopasowany do szumu w zbiorze treningowym, słaba zdolność generalizacji.
  - Regularyzacja: L2 (Ridge, kurczenie wag) oraz L1 (Lasso, selekcja cech poprzez zerowanie wag).
- **Drzewa Decyzyjne i Metody Zespołowe (Ensemble Methods)**:
  - Kryteria podziału: Zanieczyszczenie Giniego (*Gini Impurity*) i Entropia Shannona (zysk informacyjny *Information Gain*).
  - *Bagging* (Bootstrap Aggregating) i Lasy Losowe (*Random Forests*): Redukcja wariancji poprzez uśrednianie wyników drzew trenowanych na podzbiorach bootstrapowych.
  - *Boosting* (XGBoost, LightGBM): Sekwencyjne trenowanie słabych klasyfikatorów korygujących błędy poprzedników.

## 2. Głębokie Sieci Neuronowe (Deep Learning)
- **Wielowarstwowy Perceptron (MLP)**:
  - Warstwy gęste: $z^{[l]} = W^{[l]} a^{[l-1]} + b^{[l]}$, $a^{[l]} = g(z^{[l]})$.
  - Nieliniowe funkcje aktywacji: ReLU ($f(x) = \\max(0, x)$ — eliminacja problemu zanikającego gradientu), Leaky ReLU, GELU, Sigmoid, Softmax dla klasyfikacji wieloklasowej.
- **Algorytm Wstecznej Propagacji Błędu (Backpropagation)**:
  - Wyprowadzenie oparte na wielowymiarowej regule łańcuchowej różniczkowania (*Chain Rule*).
  - Gradient błędu względem wag:
    $$\\frac{\\partial \\mathcal{L}}{\\partial W^{[l]}} = \\delta^{[l]} (a^{[l-1]})^T, \\quad \\text{gdzie } \\delta^{[l]} = \\frac{\\partial \\mathcal{L}}{\\partial z^{[l]}} = (W^{[l+1]})^T \\delta^{[l+1]} \\odot g'(z^{[l]})$$
- **Optymalizatory Gradientowe**:
  - Stochastic Gradient Descent (SGD) z pędem (*Momentum*).
  - RMSProp i **Adam** (Adaptive Moment Estimation): połączenie adaptacyjnego tempa uczenia opartego na pierwszym (średnia) i drugim (wariancja) momencie gradientu.
- **Techniki Stabilizacji Uczenia**:
  - Normalizacja wsadowa (*Batch Normalization*) i normalizacja warstwowa (*Layer Normalization*).
  - Dropout: Losowe zerowanie neuronów podczas treningu zapobiegające ko-adaptacji cech.

## 3. Nowoczesne Architektury: CNN i Transformers
- **Konwolucyjne Sieci Neuronowe (CNN)**:
  - Operacja splotu dyskretnego, filtry/kernele wykrywające cechy lokalne, niezmienniczość translacyjna, warstwy łączące (*Pooling*).
  - Klasyczne architektury: ResNet (połączenia rezydualne *Skip Connections* umożliwiające trening sieci o setkach warstw bez zanikania gradientu).
- **Architektura Transformers i Mechanizm Samouwag (Self-Attention)**:
  - Równanie skalowanego iloczynu skalarnego uwagi (*Scaled Dot-Product Attention*):
    $$\\text{Attention}(Q, K, V) = \\text{softmax}\\left( \\frac{Q K^T}{\\sqrt{d_k}} \\right) V$$
    gdzie $Q$ (Query), $K$ (Key), $V$ (Value) to rzuty liniowe wektorów wejściowych.
  - *Multi-Head Attention*: Wielogłowicowa uwaga pozwalająca modelowi na jednoczesne skupianie się na informacjach z różnych przestrzeni reprezentacyjnych.
  - Kodowanie pozycyjne (*Positional Encoding*), architektury koder-dekoder vs dekoder-only (rodzina GPT, LLM).

## 4. Literatura
1. Ian Goodfellow, Yoshua Bengio, Aaron Courville — *Głębokie uczenie* (Deep Learning). Wydawnictwo Naukowe PWN.
2. Aurélien Géron — *Uczenie maszynowe z użyciem Scikit-Learn i TensorFlow* (Wydanie 3). Helion.
3. Stuart Russell, Peter Norvig — *Artificial Intelligence: A Modern Approach* (4th Edition). Pearson.`,
    reviewPrompts: `# Sztuczna Inteligencja — Kolokwium i Laboratorium

## Pytania Egzaminacyjne
1. **Wyprowadzenie Wstecznej Propagacji**: Wyprowadź krok po kroku wzór na gradient funkcji straty $\\mathcal{L}$ względem macierzy wag $W$ dla pojedynczej warstwy liniowej z aktywacją sigmoidalną $\\sigma(z)$, stosując regułę łańcuchową.
2. **Mechanizm Self-Attention**: Dlaczego w formule $\\text{Attention}(Q, K, V)$ iloczyn $Q K^T$ jest dzielony przez czynnik skalujący $\\sqrt{d_k}$? Co dzieje się z gradientami funkcji softmax, gdy iloczyn skalarny osiąga bardzo duże wartości bez skalowania?
3. **Metryki Klasyfikacji**: Zdefiniuj precyzję (*Precision*), pełność (*Recall*) oraz miarę $F_1$-score. Kiedy w diagnozie medycznej preferujemy maksymalizację Recall kosztem Precision? Narysuj typowy kształt krzywej ROC i wyjaśnij interpretację pola AUC.
4. **Zadanie Laboratoryjne (PyTorch)**: Zaimplementuj w PyTorch klasyfikator obrazów CIFAR-10 z blokami Residual Block, normalizacją Batch Normalization oraz optymalizatorem AdamW z harmonogramem Cosine Annealing.`,
  },
  {
    id: 'put-cs-systemy-rozproszone',
    title: 'Systemy Rozproszone i Przetwarzanie Równoległe',
    category: 'Semestr 5',
    description:
      'Zegary logiczne Lamporta, algorytmy konsensusu (Raft, Paxos), twierdzenie CAP, model aktora, transakcje 2PC i architektury rozproszone.',
    rank: 4,
    order: 1,
    coreNotes: `# Systemy Rozproszone — Katedra Informatyki PP

## 1. Natura Systemów Rozproszonych i Modele Czasu
- **Złudzenia Przetwarzania Rozproszonego (Fallacies of Distributed Computing)** wg Petera Deutscha:
  1. Sieć jest niezawodna.
  2. Opóźnienie jest równe zero.
  3. Przepustowość jest nieskończona.
  4. Sieć jest bezpieczna.
  5. Topologia się nie zmienia.
  6. Jest tylko jeden administrator.
  7. Koszt transportu jest zerowy.
  8. Sieć jest jednorodna.
- **Czas i Kolejność Zdarzeń**:
  - Brak globalnego zegara fizycznego; skośność zegarów (*Clock Skew* and *Clock Drift*).
  - Relacja *Happened-Before* Lesliego Lamporta ($a \\to b$).
  - **Zegary Logiczne Lamporta**: Skalary inkrementowane przy każdym zdarzeniu lokalnym i synchronizowane z etykietami odbieranych komunikatów ($C(e) = \\max(C_{local}, C_{msg}) + 1$). Zapewniają częściowy porządek przyczynowy.
  - **Zegary Wektorowe (Vector Clocks)**: Wektory rozmiaru $N$ pozwalające na bezbłędne odróżnienie zdarzeń powiązanych przyczynowo od zdarzeń współbieżnych (*Concurrent Events* $a \\parallel b$).

## 2. Twierdzenie CAP, Teoremat PACELC i Spójność Danych
- **Twierdzenie CAP Erica Brewera**: W rozproszonym magazynie danych z partycjonowaniem sieciowym ($P$) system może zagwarantować co najwyżej:
  - Spójność silną (**C**onsistency / Linearizability): Każdy odczyt zwraca najnowszy zapis.
  - Dostępność (**A**vailability): Każde żądanie bezbłędnego węzła otrzymuje odpowiedź bez gwarancji najświeższych danych.
- **Teoremat PACELC Daniela Abadiego**: Rozszerzenie CAP: W przypadku partycjonowania (**P**) wybierasz między dostępnością (**A**) a spójnością (**C**); w przeciwnym razie (**E**lse), wybierasz między opóźnieniem (**L**atency) a spójnością (**C**onsistency).
- **Modele Spójności**:
  - *Linearyzowalność (Linearizability / Strict Consistency)*: Wszystkie operacje wydają się zachodzić atomowo w pewnym globalnym punkcie czasowym.
  - *Spójność Sekwencyjna (Sequential Consistency)*: Wszystkie procesy widzą tę samą kolejność operacji, zgodną z porządkiem programu każdego procesu.
  - *Spójność Przyczynowa (Causal Consistency)*: Operacje powiązane przyczynowo są widziane w tej samej kolejności przez wszystkie węzły.
  - *Spójność Ostateczna (Eventual Consistency)*: W przypadku braku nowych zapisów wszystkie repliki ostatecznie zbiegną się do tego samego stanu (np. mechanizmy CRDT - Conflict-Free Replicated Data Types).

## 3. Algorytmy Konsensusu Rozproszonego
- **Problem Osiągania Zgody (Consensus Problem)**:
  - Twierdzenie FLP (Fischer, Lynch, Paterson): W asynchronicznym systemie rozproszonym żaden deterministyczny algorytm konsensusu nie może zagwarantować bezpieczeństwa i żywotności w obecności choćby jednego węzła ulegającego awarii typu *Crash-Stop*.
- **Algorytm Raft**:
  - Zaprojektowany pod kątem zrozumiałości i jednoznacznego podziału odpowiedzialności.
  - Stany węzła: *Follower*, *Candidate*, *Leader*.
  - *Wybór Lidera (Leader Election)*: Losowe czasy oczekiwania (*Randomized Election Timeouts* — 150-300 ms) zapobiegające remisom (*Split Votes*). Większość głosów kworum ($Q = \\lfloor N/2 \\rfloor + 1$).
  - *Replikacja Dziennika (Log Replication)*: Lider rozsyła wpisy w komunikatach \`AppendEntries\`. Wpis uznaje się za zatwierdzony (*Committed*), gdy zostanie zapisany na większości węzłów kworum.
  - Niezmiennik bezpieczeństwa lidera (*Leader Completeness*): Jeśli wpis został zatwierdzony w danej kadencji, to znajdzie się w dziennikach liderów wszystkich wyższych kadencji.
- **Rozproszone Transakcje Dwufazowe (Two-Phase Commit - 2PC)**:
  - Faza 1: *Prepare* (Koordynator pyta uczestników; uczestnicy blokują zasoby i odpowiadają \`VOTE_COMMIT\` lub \`VOTE_ABORT\`).
  - Faza 2: *Commit* (Jeśli wszyscy zagłosowali na tak, koordynator rozsyła \`GLOBAL_COMMIT\`; w przeciwnym razie \`GLOBAL_ABORT\`).
  - Główna wada 2PC: Protokół blokujący (*blocking protocol*); awaria koordynatora w fazie 2 blokuje uczestników w nieskończoność.

## 4. Literatura
1. Martin Kleppmann — *Przetwarzanie danych w dużej skali. Niezawodność, skalowalność i łatwość konserwacji systemów*. O'Reilly / Helion.
2. George Coulouris, Jean Dollimore, Tim Kindberg, Gordon Blair — *Distributed Systems: Concepts and Design* (5th Edition). Addison-Wesley.
3. Diego Ongaro, John Ousterhout — *In Search of an Understandable Consensus Algorithm (Raft)*. USENIX ATC '14.`,
    reviewPrompts: `# Systemy Rozproszone — Zagadnienia Egzaminacyjne

## Pytania Teoretyczne i Kolokwialne
1. **Zegary Wektorowe i Współbieżność**: W systemie złożonym z 3 procesów ($P_1, P_2, P_3$) początkowe wektory wynoszą $(0, 0, 0)$. Następuje zdarzenie lokalne w $P_1$, wysłanie wiadomości do $P_2$, zdarzenie w $P_3$ i odebranie wiadomości w $P_2$. Przedstaw aktualizacje wektorów zegarowych i wykaż, które zdarzenia są współbieżne ($a \\parallel b$).
2. **Mechanizm Wyboru Lidera w Raft**: Opisz procedurę przejścia węzła ze stanu Follower do Candidate po upływie *election timeout*. W jaki sposób losowość czasu oczekiwania zapobiega zjawisku wielokrotnego rozbicia głosów (*Split-Vote Storm*)?
3. **Problem Blokowania w 2PC**: Wyjaśnij, w jakiej dokładnie sytuacji protokół Two-Phase Commit pozostawia uczestników w stanie niepewności (*uncertainty state*). Dlaczego protokół Three-Phase Commit (3PC) nie przyjął się w praktyce inżynierskiej w obecności partycji sieciowych?
4. **Zadanie Projektowe**: Zaprojektuj rozproszoną kolejkę zadań z semantyką dostarczania *At-Least-Once*, wykorzystując idempotencję operacji i deduplikację kluczy w oparciu o rozproszony magazyn Redis z mechanizmem Redlock.`,
  },
  {
    id: 'put-cs-bezpieczenstwo',
    title: 'Bezpieczeństwo Systemów Komputerowych i Kryptografia',
    category: 'Semestr 6',
    description:
      'Kryptografia asymetryczna (RSA, ECC), haszowanie, podatności oprogramowania (Buffer Overflow, ROP, SQLi), TLS i Zero Trust.',
    rank: 5,
    order: 0,
    coreNotes: `# Bezpieczeństwo i Kryptografia — WIT PP

## 1. Kryptografia Symetryczna i Asymetryczna
- **Kryptografia Symetryczna**:
  - Szyfry blokowe: AES (Advanced Encryption Standard — Rijndael, rozmiar bloku 128 bitów, klucze 128/192/256 bitów).
  - Tryby operacyjne szyfrów blokowych:
    - ECB (*Electronic Codebook*): Niezalecany; identyczne bloki tekstu jawnego dają identyczne bloki szyfrogramu (ujawnia strukturę danych).
    - CBC (*Cipher Block Chaining*): Wymaga losowego wektora inicjalizacyjnego IV i dopełnienia (PKCS#7). Podatność na atak *Padding Oracle*.
    - GCM (*Galois/Counter Mode*): Uwierzytelnione szyfrowanie z danymi stowarzyszonymi (AEAD). Zapewnia poufność i integralność jednocześnie.
- **Kryptografia Asymetryczna**:
  - **Algorytm RSA**:
    - Generacja kluczy: Wybór dużych liczb pierwszych $p, q$; moduł $n = p \\cdot q$, funkcja Eulera $\\varphi(n) = (p-1)(q-1)$.
    - Klucz publiczny $(e, n)$, gdzie $\\gcd(e, \\varphi(n)) = 1$ (często $e = 65537$). Klucz prywatny $d = e^{-1} \\pmod{\\varphi(n)}$ obliczany rozszerzonym algorytmem Euklidesa.
    - Szyfrowanie: $c = m^e \\pmod n$; Deszyfrowanie: $m = c^d \\pmod n$. Wymaga dopełnienia optymalnego OAEP.
  - **Kryptografia Krzywych Eliptycznych (ECC)**:
    - Równanie Weierstrassa: $y^2 = x^3 + ax + b \\pmod p$.
    - Problem logarytmu dyskretnego na krzywych eliptycznych (ECDLP). Zapewnia to samo bezpieczeństwo co RSA przy znacznie krótszych kluczach (256-bitowy klucz ECC odpowiada 3072-bitowemu kluczowi RSA).
    - Algorytmy: ECDH (uzgadnianie kluczy), ECDSA / Ed25519 (podpisy cyfrowe).
- **Kryptograficzne Funkcje Skrótu (Haszujące)**:
  - Własności: Odporność na przeciwobraz (*Pre-image resistance*), drugi przeciwobraz (*Second pre-image resistance*) oraz kolizje (*Collision resistance*).
  - Rodziny: SHA-2 (SHA-256), SHA-3 (funkcja gąbki Keccak). Bezpieczne haszowanie haseł z solą i kosztem obliczeniowym: Argon2id, bcrypt, PBKDF2.

## 2. Podatności Oprogramowania Niskopoziomowego (Binary Exploitation)
- **Przepełnienie Bufora na Stosie (Stack-Based Buffer Overflow)**:
  - Nadpisanie adresu powrotu (\`saved %rip\`) na stosie w wyniku użycia niebezpiecznych funkcji C (\`strcpy\`, \`gets\`, \`sprintf\`).
  - Wstrzyknięcie kodu maszynowego powłoki (*Shellcode*).
- **Mechanizmy Ochronne Kompilatora i Jądra**:
  - *Stack Canaries* (\`-fstack-protector-all\`): Losowa wartość umieszczana na stosie przed adresem powrotu, weryfikowana w epilogu funkcji.
  - *DEP / NX (Data Execution Prevention / No-Execute bit)*: Oznaczenie stron stosu i sterty flagą braku możliwości wykonywania instrukcji maszynowych.
  - *ASLR (Address Space Layout Randomization)*: Losowe rozmieszczenie bazowych adresów stosu, sterty i bibliotek współdzielonych w pamięci wirtualnej procesu.
  - *PIE (Position Independent Executable)*: Losowanie adresu segmentu kodu programu.
- **Techniki Obejścia Ochrony: Programowanie Zorientowane na Powroty (ROP - Return-Oriented Programming)**:
  - Składanie łańcuchów instrukcji z istniejących w pamięci fragmentów kodu zakończonych instrukcją \`ret\` (*ROP Gadgets*).

## 3. Bezpieczeństwo Aplikacji Webowych (OWASP Top 10)
- **Injection (SQL Injection, Command Injection)**: Niekontrolowane wykonanie danych wprowadzonych przez użytkownika jako kodu interpretera. Środek zaradczy: Zapytania sparametryzowane (*Prepared Statements*).
- **Cross-Site Scripting (XSS)**: Stored, Reflected, DOM-based. Wstrzyknięcie złośliwego kodu JavaScript do przeglądarki ofiary. Środek zaradczy: Kontekstowe kodowanie wyjścia, nagłówek Content Security Policy (CSP).
- **Cross-Site Request Forgery (CSRF)**: Wymuszenie wykonania nieautoryzowanej operacji w sesji zalogowanego użytkownika. Środek zaradczy: Tokeny anty-CSRF (*Synchronizer Token Pattern*), atrybut ciasteczek \`SameSite=Strict/Lax\`.
- **Model Zero Trust**: Zasada ciągłej weryfikacji tożsamości (*Never Trust, Always Verify*), mikrosegmentacja sieci, uwierzytelnianie wieloskładnikowe (MFA / FIDO2 WebAuthn).

## 4. Literatura
1. Ross J. Anderson — *Inżynieria bezpieczeństwa*. WNT.
2. Jon Erickson — *Hacking: Sztuka unikania zabezpieczeń*. Helion.
3. William Stallings — *Kryptografia i bezpieczeństwo sieci komputerowych*. Helion.`,
    reviewPrompts: `# Bezpieczeństwo — Zadania Audytorskie i Egzamin

## Pytania Egzaminacyjne
1. **Analiza Matematyczna RSA**: W algorytmie RSA wybrano liczby pierwsze $p = 61$ oraz $q = 53$. Oblicz moduł $n$, wartość funkcji Eulera $\\varphi(n)$, dobierz poprawny wykładnik publiczny $e$ oraz oblicz odpowiadający mu klucz prywatny $d$ za pomocą rozszerzonego algorytmu Euklidesa.
2. **Mechanizm ROP w Walce z DEP/NX**: Wyjaśnij, w jaki sposób technika ROP (*Return-Oriented Programming*) umożliwia wykonanie dowolnego kodu atakującego pomimo włączonej ochrony NX/DEP uniemożliwiającej wykonywanie kodu na stosie.
3. **Podatność SQL Injection i Ochrona**: Przeanalizuj poniższy fragment kodu w PHP:
   \`\`\`php
   $sql = "SELECT * FROM users WHERE user = '" . $_POST['user'] . "' AND pass = '" . $_POST['pass'] . "'";
   \`\`\`
   Podaj ciąg wejściowy pozwalający zalogować się jako administrator bez znajomości hasła oraz przepisz zapytanie z użyciem PDO Prepared Statements.
4. **Zadanie Laboratoryjne (Audyt Kodu)**: Zidentyfikuj podatność Format String Vulnerability w podanym programie C (\`printf(user_input)\`) i wyjaśnij, jak za pomocą specyfikatorów \`%x\` oraz \`%n\` można odczytać i nadpisać pamięć procesu.`,
  },
  {
    id: 'put-cs-cloud',
    title: 'Chmura Obliczeniowa i Architektury Cloud-Native',
    category: 'Semestr 6',
    description:
      'Konteneryzacja Docker, orkiestracja Kubernetes, Infrastructure as Code (Terraform), service mesh, skalowalność i telemetria OpenTelemetry.',
    rank: 5,
    order: 1,
    coreNotes: `# Chmura Obliczeniowa i DevOps — WIT Politechnika Poznańska

## 1. Podstawy Wirtualizacji i Konteneryzacja (Docker)
- **Wirtualizacja Pełna (Hypervisor Typu 1 i 2)** vs **Konteneryzacja**:
  - Maszyny wirtualne (KVM, ESXi): Wirtualizacja sprzętu, osobne jądro systemu operacyjnego dla każdego systemu-gościa (*Guest OS*), wysoki narzut pamięci i czasu uruchamiania.
  - Kontenery: Współdzielenie jądra systemu gospodarza (*Host OS*); izolacja procesów w przestrzeni użytkownika.
- **Prymitywy Jądra Linuksa Stanowiące Fundament Kontenerów**:
  - *Namespaces (Przestrzenie Nazw)*: Izolacja widoków zasobów systemowych:
    - \`pid\` (izolacja drzewa identyfikatorów procesów).
    - \`net\` (własne interfejsy sieciowe, tablice routingu, reguły iptables).
    - \`mnt\` (izolacja punktów montowania systemów plików).
    - \`ipc\` (izolacja kolejek komunikatów i pamięci współdzielonej).
    - \`uts\` (izolacja nazwy hosta i domeny).
    - \`user\` (mapowanie identyfikatorów UID/GID w kontenerze na nieuprzywilejowane UID na hoście).
  - *Control Groups (cgroups v2)*: Ograniczanie, ewidencjonowanie i priorytetyzacja zużycia zasobów sprzętowych (CPU, RAM, I/O dyskowe, limity procesów \`pids.max\`).
  - *Union File Systems (OverlayFS)*: Nakładanie warstw obrazu kontenera: warstwy bazowe tylko do odczytu (*Read-Only Layers*) oraz pojedyncza warstwa robocza do zapisu (*Writable Container Layer*) z mechanizmem kopiowania przy zapisie (*Copy-on-Write - CoW*).

## 2. Orkiestracja Kontenerów w Klastrze: Kubernetes (K8s)
- **Komponenty Płaszczyzny Sterowania (Control Plane)**:
  - \`kube-apiserver\`: Centralny punkt wejściowy REST API, uwierzytelnianie, autoryzacja RBAC i walidacja obiektów klastra.
  - \`etcd\`: Rozproszona baza klucz-wartość zapewniająca spójność stanu klastra (oparta na algorytmie Raft).
  - \`kube-scheduler\`: Przydział nowo utworzonych Podów do optymalnych węzłów roboczych na podstawie dostępnych zasobów, kolokacji (*affinity/anti-affinity*) i tolerancji (*taints and tolerations*).
  - \`kube-controller-manager\`: Pętla kontrolna monitorująca pożądany stan klastra (DeploymentController, StatefulSetController, NodeController).
- **Komponenty Węzłów Roboczych (Worker Nodes)**:
  - \`kubelet\`: Agent węzła komunikujący się z API serwerem i zarządzający cyklem życia kontenerów za pośrednictwem interfejsu Container Runtime Interface (CRI — containerd, CRI-O).
  - \`kube-proxy\`: Utrzymanie reguł sieciowych (iptables / IPVS) dla routingu ruchu usług (*Kubernetes Services*).
- **Abstrakcje Obiektowe**:
  - *Pod*: Najmniejsza jednostka wdrożeniowa; grupa jednego lub więcej kontenerów dzielących przestrzeń sieciową (\`localhost\`) i wolumeny dyskowe.
  - *Deployment & ReplicaSet*: Deklaratywne zarządzanie wersjami aplikacji i skalowaniem replik bez przestojów (*Rolling Updates*).
  - *Service*: Stabilny punkt dostępowy (ClusterIP, NodePort, LoadBalancer) z równoważeniem obciążenia.
  - *Ingress*: Zarządzanie dostępem HTTP/HTTPS z zewnątrz klastra (routing domenowy i ścieżkowy, terminacja SSL/TLS).

## 3. Infrastructure as Code (IaC) i Praktyki GitOps
- **Zasada Deklaratywności**: Zdefiniowanie stanu docelowego zamiast skryptów imperatywnych.
- **Terraform (HCL - HashiCorp Configuration Language)**:
  - Planowanie zmian (\`terraform plan\`) i aplikowanie (\`terraform apply\`).
  - Plik stanu (\`terraform.tfstate\`) z blokadą w zdalnym backendzie (AWS S3 + DynamoDB) zapobiegający konfliktom równoległych wdrożeń.
  - Modularyzacja infrastruktury chmurowej (VPC, podsieci, klastry EKS/GKE).
- **GitOps (ArgoCD, Flux)**: Git jako jedyne źródło prawdy (*Single Source of Truth*) dla konfiguracji infrastruktury i aplikacji. Pętla synchronizacji automatycznie wykrywająca i korygująca dryft konfiguracyjny (*configuration drift*).

## 4. Obserwowalność Systemów Chmurowych (Observability)
- **Trzy Filary Obserwowalności**:
  - *Metryki (Metrics)*: Dane agregowalne w czasie (np. zużycie CPU, liczba zapytań na sekundę). Standard Prometheus, zapytania PromQL.
  - *Logi (Logs)*: Ustrukturyzowane zdarzenia (JSON) indeksowane centralnie (Loki, Elasticsearch).
  - *Ślady Rozproszone (Distributed Tracing)*: Śledzenie ścieżki pojedynczego żądania HTTP/gRPC przez mikroserwisy (nagłówki W3C Trace Context: \`traceparent\`, \`tracestate\`). Standard **OpenTelemetry** (OTel) i Jaeger.
- **Zarządzanie Niezawodnością wg Google SRE**:
  - SLI (Service Level Indicator): Mierzalna wartość telemetryczna (np. procent żądań z kodem HTTP < 500).
  - SLO (Service Level Objective): Cel biznesowy (np. 99.9% zapytań z sukcesem w oknie 30-dniowym).
  - SLA (Service Level Agreement): Zobowiązanie umowne z klientem z konsekwencjami finansowymi.
  - Budżet Błędów (*Error Budget*): $100\\% - \\text{SLO}$; rezerwa na bezpieczne wdrażanie innowacji.

## 5. Literatura
1. Kelsey Hightower, Brendan Burns, Joe Beda — *Kubernetes. Najlepsze praktyki*. O'Reilly / Helion.
2. Betsy Beyer, Chris Jones, Jennifer Petoff, Niall Richard Murphy — *Site Reliability Engineering. Jak Google zarządza systemami produkcyjnymi*. Helion.
3. Yevgeniy Brikman — *Terraform: Up & Running* (3rd Edition). O'Reilly.`,
    reviewPrompts: `# Chmura Obliczeniowa — Zadania Architektoniczne

## Pytania Egzaminacyjne
1. **Mechanizmy Izolacji Kontenerów**: Szczegółowo omów różnicę pomiędzy rolą linuksowych *Namespaces* a *Cgroups* w procesie izolacji kontenera Docker. Jakie zagrożenie niesie uruchomienie kontenera z flagą \`--privileged\`?
2. **Architektura Kubernetes etcd**: Dlaczego klaster \`etcd\` w środowisku produkcyjnym wymaga nieparzystej liczby węzłów (3, 5)? Wytłumacz pojęcie kworum i opisz zachowanie klastra 3-węzłowego przy awarii 2 węzłów.
3. **Cykl Życia Poda i Sondy Zdrowia**: Wytłumacz różnice w przeznaczeniu i zachowaniu trzech sond Kubernetes:
   - \`startupProbe\`
   - \`livenessProbe\` (co robi kubelet, gdy sonda zawiedzie?)
   - \`readinessProbe\` (co robi Service, gdy sonda zawiedzie?)
4. **Zadanie Wdrożeniowe (Manifest K8s)**: Napisz manifest YAML dla wdrożenia mikroserwisu (\`Deployment\`) z 3 replikami, żądaniami i limitami zasobów (\`resources.requests\` / \`limits\`), konfiguracją \`HorizontalPodAutoscaler\` (skalowanie przy CPU > 80%) oraz bezprzestojową strategią aktualizacji \`RollingUpdate\` z parametrami \`maxSurge: 1\` i \`maxUnavailable: 0\`.`,
  },
  {
    id: 'put-cs-inzynierski',
    title: 'Projekt Inżynierski i Praca Dyplomowa',
    category: 'Semestr 7',
    description:
      'Realizacja pełnoskalowego projektu inżynierskiego, architektura, testy akceptacyjne, deployment produkcyjny i obrona dyplomu na WIT PP.',
    rank: 6,
    order: 0,
    coreNotes: `# Projekt Inżynierski — Wydział Informatyki i Telekomunikacji PP

## 1. Wytyczne Formalne i Standardy Jakości Projektu Inżynierskiego WIT PP
Projekt inżynierski na Wydziale Informatyki i Telekomunikacji Politechniki Poznańskiej stanowi zwieńczenie studiów I stopnia (tytuł inżyniera informatyki):
- **Zakres merytoryczny**: Opracowanie, implementacja, weryfikacja empiryczna oraz wdrożenie produkcyjne zaawansowanego systemu informatycznego rozwiązującego rzeczywisty problem naukowy lub przemysłowy.
- **Skład zespołu**: Projekty realizowane indywidualnie lub w zespołach 2-4 osobowych pod kierunkiem promotora z instytutów WIT PP.
- **Struktura pracy inżynierskiej**:
  1. *Wstęp*: Geneza problemu, cel pracy, teza inżynierska, zakres funkcjonalny i niefunkcjonalny.
  2. *Analiza dziedzinowa i przegląd literatury*: Przegląd istniejących rozwiązań (State of the Art), analiza porównawcza, uzasadnienie wyboru technologii.
  3. *Projekt architektury systemu*: Diagramy architektoniczne C4 Model (Context, Container, Component, Code), model danych, specyfikacja interfejsów API (OpenAPI/gRPC), schemat bezpieczeństwa.
  4. *Implementacja*: Omówienie kluczowych modułów algorytmicznych, obsługa współbieżności, integracja z usługami zewnętrznymi.
  5. *Testowanie i ewaluacja wydajności*: Metodyka testów, testy jednostkowe, integracyjne, obciążeniowe (JMeter/k6), profilowanie zużycia zasobów, analiza wyników.
  6. *Wdrożenie produkcyjne*: Środowisko chmurowe, konfiguracja CI/CD, konteneryzacja, telemetria.
  7. *Podsumowanie*: Stopień realizacji celów, wnioski inżynierskie, kierunki dalszego rozwoju systemu.

## 2. Inżynieria Niezawodności i Produkcyjna Gotowość (Production Readiness)
- **Checklista Gotowości Produkcyjnej**:
  - *Bezpieczeństwo*: Skanowanie zależności (Dependabot, Snyk), statyczna analiza kodu (SonarQube), uwierzytelnianie OAuth2/OIDC, rotacja kluczy tajnych (HashiCorp Vault), brak hardcoded credentials w repozytorium git.
  - *Wydajność*: Testy wydajnościowe wyznaczające punkt załamania systemu (*Breaking Point*), analiza zapytań SQL z użyciem \`EXPLAIN ANALYZE\`, strategie buforowania (Redis cache-aside), kompresja zasobów.
  - *Skalowalność*: Horyzontalne skalowanie bezstanowych mikroserwisów (HPA), asynchroniczne przetwarzanie zadań ciężkich za pośrednictwem kolejek komunikatów (RabbitMQ, Apache Kafka).
  - *Niezawodność*: Mechanizmy odpornościowe w bibliotekach klienckich — ponawianie z wykładniczym opóźnieniem i szumem (*Exponential Backoff with Jitter*), bezpiecznik obwodowy (*Circuit Breaker* — np. Resilience4j), izolacja zasobów (*Bulkhead pattern*).
  - *Odzyskiwanie po awarii (DR)*: Zautomatyzowane kopie zapasowe baz danych (Point-in-Time Recovery), wyznaczone wskaźniki RTO (Recovery Time Objective) oraz RPO (Recovery Point Objective).

## 3. Przygotowanie do Egzaminu Dyplomowego i Obrony Pracy
- Prezentacja inżynierska przed Komisją Egzaminacyjną WIT PP:
  - Zwięzła demonstracja działającego prototypu produkcyjnego (*Live Demo*).
  - Obrona wyborów architektonicznych i technologicznych.
  - Odpowiedzi na pytania problemowe z zakresu 7 semestrów studiów inżynierskich: algorytmy, bazy danych, systemy operacyjne, sieci komputerowe, inżynieria oprogramowania.

## 4. Literatura
1. Michael T. Nygard — *Release It! Design and Deploy Production-Ready Software* (2nd Edition). Pragmatic Bookshelf.
2. Simon Brown — *Software Architecture for Developers* (C4 Model). Leanpub.
3. Wytyczne redakcyjne prac dyplomowych Wydziału Informatyki i Telekomunikacji Politechniki Poznańskiej.`,
    reviewPrompts: `# Projekt Inżynierski — Kryteria Oceny i Obrona Dyplomowa

## Pytania Komisji Egzaminacyjnej (WIT PP)
1. **Uzasadnienie Architektury Systemu**: Przedstaw architekturę swojego projektu dyplomowego w notacji C4 na poziomie Containers. Dlaczego zdecydowano się na wybraną architekturę (np. modularny monolit vs mikroserwisy) i jakie konkretne kompromisy (*tradeoffs*) to ze sobą niosło?
2. **Metodyka Testów Obciążeniowych**: Jakimi narzędziami i według jakiego profilu obciążenia zweryfikowano odporność systemu na wysokie natężenie ruchu? Przy jakim progu liczby równoległych użytkowników czas odpowiedzi przekroczył założony limit SLO i co stanowiło wąskie gardło (*bottleneck*)?
3. **Obsługa Awarii Komponentu Krytycznego**: Co dzieje się w systemie w sytuacji nagłej niedostępności głównej relacyjnej bazy danych lub zewnętrznego dostawcy tożsamości (IdP)? W jaki sposób aplikacja informuje użytkownika i jak chroni dane przed utratą?`,
  },
];
