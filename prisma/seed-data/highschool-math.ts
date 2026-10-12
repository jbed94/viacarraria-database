import type { Course, SeedEdge } from './types.js';

export const highschoolMathEdges: SeedEdge[] = [
  // Rank 0 -> Rank 1
  { id: 'math-funkcje-tryg', source: 'math-funkcje', target: 'math-trygonometria' },
  { id: 'math-funkcje-ciagi', source: 'math-funkcje', target: 'math-ciagi' },
  { id: 'math-wielomiany-ciagi', source: 'math-wielomiany', target: 'math-ciagi' },

  // Rank 1 -> Rank 2
  { id: 'math-tryg-planim', source: 'math-trygonometria', target: 'math-planimetria' },
  { id: 'math-funkcje-analityczna', source: 'math-funkcje', target: 'math-analityczna' },
  { id: 'math-planim-analityczna', source: 'math-planimetria', target: 'math-analityczna' },

  // Rank 2 -> Rank 3
  { id: 'math-planim-stereo', source: 'math-planimetria', target: 'math-stereometria' },
  { id: 'math-ciagi-pochodne', source: 'math-ciagi', target: 'math-pochodne' },
  { id: 'math-wielomiany-pochodne', source: 'math-wielomiany', target: 'math-pochodne' },

  // Rank 3 -> Rank 4
  { id: 'math-pochodne-optym', source: 'math-pochodne', target: 'math-optymalizacja' },
  { id: 'math-stereo-optym', source: 'math-stereometria', target: 'math-optymalizacja' },
  { id: 'math-ciagi-kombinatoryka', source: 'math-ciagi', target: 'math-kombinatoryka' },
];

export const highschoolMathCourses: Course[] = [
  // Rank 0
  {
    id: 'math-funkcje',
    title: 'Funkcje i Równania z Wartością Bezwzględną',
    category: 'Analiza i Algebra',
    description:
      'Własności funkcji, przekształcenia wykresów, równania i nierówności z wartością bezwzględną, funkcja liniowa i kwadratowa z parametrem (CKE).',
    rank: 0,
    order: 0,
    coreNotes: `# Funkcje i Wartość Bezwzględna — Matura Rozszerzona CKE

## 1. Definicja i Własności Wartości Bezwzględnej
Wartość bezwzględna liczby rzeczywistej $x$:
$$|x| = \\begin{cases} x & \\text{dla } x \\ge 0 \\\\ -x & \\text{dla } x < 0 \\end{cases}$$
- **Własności algebraiczne**:
  - $|a \\cdot b| = |a| \\cdot |b|$ oraz $\\left|\\frac{a}{b}\\right| = \\frac{|a|}{|b|}$ dla $b \\ne 0$.
  - Nierówność trójkąta: $|a + b| \\le |a| + |b|$.
  - Tożsamość pierwiastkowa: $\\sqrt{x^2} = |x|$.

## 2. Równania i Nierówności z Modułem
- Postać $|f(x)| = g(x)$: Równoważna koniunkcji $g(x) \\ge 0 \\land (f(x) = g(x) \\lor f(x) = -g(x))$.
- Nierówności modułowe:
  - $|x - a| < r \\iff a - r < x < a + r$ (interpretacja geometryczna odległości na osi liczbowej).
  - Metoda przedziałowa dla sumy modułów $|x - x_1| + |x - x_2| = m$: wyznaczenie punktów zerowych wyrażeń podmodułowych i analiza w przedziałach rozłącznych.

## 3. Przekształcenia Wykresów Funkcji
Dla danej funkcji bazowej $y = f(x)$:
- $y = f(x) + q$ — przesunięcie o wektor $[0, q]$.
- $y = f(x - p)$ — przesunięcie o wektor $[p, 0]$.
- $y = -f(x)$ — symetria osiowa względem osi $OX$.
- $y = f(-x)$ — symetria osiowa względem osi $OY$.
- $y = |f(x)|$ — odbicie części wykresu leżącej pod osią $OX$ ponad tę oś.
- $y = f(|x|)$ — usunięcie wykresu dla $x < 0$ i symetryczne odbicie części dla $x \\ge 0$ na lewą stronę osi $OY$.

## 4. Funkcja Kwadratowa z Parametrem
Dla równania $ax^2 + bx + c = 0$:
- Wyróżnik trójmianu: $\\Delta = b^2 - 4ac$.
- Dwa różne pierwiastki tego samego znaku: $\\Delta > 0 \\land x_1 \\cdot x_2 > 0$.
- Dwa różne pierwiastki dodatnie: $\\Delta > 0 \\land x_1 \\cdot x_2 > 0 \\land x_1 + x_2 > 0$.
- Wzory Viète'a: $x_1 + x_2 = -\\frac{b}{a}$, $x_1 x_2 = \\frac{c}{a}$.

## 5. Równania z Parametrem i Warunki na Pierwiastki Trójmianu
W zadaniach maturalnych CKE rozszerzonych kluczowe jest formułowanie pełnego układu warunków koniecznych i dostatecznych dla pierwiastków równania $f(x) = ax^2 + bx + c = 0$:
- **Dwa różne pierwiastki większe od liczby $k$**:
  $$\begin{cases} a \ne 0 \\ \Delta > 0 \\ x_w = -\frac{b}{2a} > k \\ a \cdot f(k) > 0 \end{cases}$$
- **Dwa różne pierwiastki mniejsze od liczby $k$**:
  $$\begin{cases} a \ne 0 \\ \Delta > 0 \\ x_w < k \\ a \cdot f(k) > 0 \end{cases}$$
- **Liczba $k$ leży ściśle pomiędzy dwoma pierwiastkami ($x_1 < k < x_2$)**:
  $$\begin{cases} a \ne 0 \\ a \cdot f(k) < 0 \end{cases}$$
  *(Uwaga: w tym przypadku warunek $\Delta > 0$ jest spełniony automatycznie, ponieważ ramiona paraboli i wartość w punkcie $k$ mają przeciwne znaki).*

## 6. Złożenie Funkcji i Odwracalność
- **Definicja złożenia**: Dla funkcji $f: Y \to Z$ i $g: X \to Y$, funkcja złożona $(f \circ g)(x) = f(g(x))$ ma dziedzinę $D_{f \circ g} = \{x \in D_g : g(x) \in D_f\}$.
- **Różnowartościowość (iniekcja)**: $f(x_1) = f(x_2) \implies x_1 = x_2$.
- **Funkcja odwrotna**: Wykres $f^{-1}(x)$ jest symetryczny do $f(x)$ względem prostej $y = x$. Dziedzina funkcji odwrotnej to zbiór wartości funkcji wyjściowej: $D_{f^{-1}} = W_f$.`,
    reviewPrompts: `# Funkcje — Zadania Maturalne CKE
1. Wyznacz wszystkie wartości parametru $m$, dla których równanie $x^2 + (m - 3)x + m^2 - 4m + 3 = 0$ ma dwa różne pierwiastki rzeczywiste jednakowych znaków.
2. Rozwiąż nierówność $|2x - 6| + |x + 1| \\le 7$ metodą przedziałową na osi liczbowej.
3. Wyznacz wszystkie wartości parametru $m$, dla których równanie $(m-1)x^2 - 2(m+1)x + m - 2 = 0$ posiada dwa różne pierwiastki rzeczywiste $x_1, x_2$ spełniające nierówność $x_1^2 + x_2^2 \le (x_1 x_2)^2 + 3$.
4. Dana jest funkcja $f(x) = |x^2 - 4x + 3|$. Naszkicuj wykres funkcji $g(m)$, która każdej liczbie rzeczywistej $m$ przyporządkowuje liczbę rozwiązań równania $f(x) = m$. Podaj zbiór wartości i punkty nieciągłości funkcji $g$.`,
  },
  {
    id: 'math-wielomiany',
    title: 'Wielomiany i Wyrażenia Wymierne',
    category: 'Algebra Wyższa',
    description:
      'Twierdzenie Bézouta, schemat Hornera, rozkład na czynniki, wzory Viètea dla wielomianu stopnia 3 oraz nierówności wymierne na siatce znaków.',
    rank: 0,
    order: 1,
    coreNotes: `# Wielomiany i Wyrażenia Wymierne — Matura Rozszerzona CKE

## 1. Twierdzenie Bézouta i Pierwiastki Wielomianu
- **Twierdzenie o reszcie**: Reszta z dzielenia wielomianu $W(x)$ przez dwumian $(x - a)$ jest równa $W(a)$.
- **Twierdzenie Bézouta**: Liczba $a$ jest pierwiastkiem wielomianu $W(x)$ wtedy i tylko wtedy, gdy wielomian $W(x)$ jest podzielny przez dwumian $(x - a)$, czyli $W(x) = (x - a)Q(x)$.
- **Twierdzenie o pierwiastkach wymiernych**: Jeśli wielomian $W(x) = a_n x^n + \\dots + a_1 x + a_0$ o współczynnikach całkowitych ma pierwiastek wymierny postaci $\\frac{p}{q}$ (ułamek nieskracalny), to $p$ jest dzielnikiem wyrazu wolnego $a_0$, a $q$ jest dzielnikiem współczynnika wiodącego $a_n$.

## 2. Schemat Hornera
Szybki algorytm dzielenia wielomianu przez dwumian $(x - c)$:
$$b_n = a_n, \\quad b_{k-1} = a_{k-1} + c \\cdot b_k$$
Ostatni współczynnik $b_0$ stanowi resztę z dzielenia $R = W(c)$.

## 3. Równania i Nierówności Wymierne
- **Dziedzina**: Zawsze określamy warunek mianownika $Q(x) \\ne 0$.
- **Sprowadzenie nierówności wymiernej do postaci iloczynowej**:
  $$\\frac{P(x)}{Q(x)} > 0 \\iff P(x) \\cdot Q(x) > 0 \\quad (\\text{przy } Q(x) \\ne 0)$$
- **Wężyk znaków (Siatka znaków)**:
  - Rysujemy oś liczbową i nanosimy wszystkie pierwiastki.
  - Dla pierwiastków o krotności parzystej (np. $(x - 2)^2$) linia wykresu odbija się od osi (nie zmienia znaku).
  - Dla pierwiastków o krotności nieparzystej (np. $(x + 1)^3$) linia przecina oś.

## 4. Wzory Viète'a dla Wielomianów Wyższych Stopni
Dla wielomianu stopnia 3: $W(x) = ax^3 + bx^2 + cx + d = a(x - x_1)(x - x_2)(x - x_3)$:
- $x_1 + x_2 + x_3 = -\frac{b}{a}$
- $x_1 x_2 + x_2 x_3 + x_3 x_1 = \frac{c}{a}$
- $x_1 x_2 x_3 = -\frac{d}{a}$

Dla wielomianu stopnia 4: $W(x) = ax^4 + bx^3 + cx^2 + dx + e$:
- $\sum x_i = -\frac{b}{a}, \quad \sum x_i x_j = \frac{c}{a}, \quad \sum x_i x_j x_k = -\frac{d}{a}, \quad x_1 x_2 x_3 x_4 = \frac{e}{a}$

## 5. Dzielenie z Resztą i Wielomiany z Parametrami
Reszta $R(x)$ z dzielenia wielomianu $W(x)$ przez wielomian stopnia $n$ ma stopień co najwyżej $n-1$:
- Dzielenie przez $(x-a)(x-b)$ (dla $a \ne b$):
  $$W(x) = P(x)(x-a)(x-b) + Ax + B$$
  Tworzymy układ równań: $\begin{cases} W(a) = Aa + B \\ W(b) = Ab + B \end{cases}$ i natychmiast wyznaczamy współczynniki reszty liniowej $A$ i $B$.
- Rozkład wielomianu symetrycznego: dla równań $ax^4 + bx^3 + cx^2 + bx + a = 0$ dzielimy obustronnie przez $x^2$ i podstawiamy zmienną pomocniczą $t = x + \frac{1}{x}$, pamiętając że $x^2 + \frac{1}{x^2} = t^2 - 2$ oraz $|t| \ge 2$.`,
    reviewPrompts: `# Wielomiany — Zadania Egzaminacyjne
1. Wyznacz pierwiastki wielomianu $W(x) = 2x^3 - 5x^2 - 4x + 3$ wiedząc, że jednym z nich jest liczba całkowita.
2. Rozwiąż nierówność wymierną $\\frac{x^2 - 4x + 3}{x^2 - 1} \\ge 2$.
3. Wielomian $W(x)$ przy dzieleniu przez $(x-1)$ daje resztę $4$, a przy dzieleniu przez $(x+2)$ daje resztę $-5$. Wyznacz resztę z dzielenia wielomianu $W(x)$ przez trójmian $P(x) = x^2 + x - 2$.
4. Rozwiąż równanie algebraiczne $x^4 - 3x^3 + 4x^2 - 3x + 1 = 0$ stosując podstawienie $t = x + \frac{1}{x}$.`,
  },

  // Rank 1
  {
    id: 'math-trygonometria',
    title: 'Trygonometria Kąta Dowolnego i Równania',
    category: 'Trygonometria',
    description:
      'Wzory redukcyjne, tożsamości trygonometryczne sumy kątów, równania trygonometryczne jednorodne i wykresy funkcji z okresem podstawowym.',
    rank: 1,
    order: 0,
    coreNotes: `# Trygonometria — Poziom Rozszerzony CKE

## 1. Podstawowe Tożsamości Trygonometryczne
- Jedynka trygonometryczna: $\\sin^2 \\alpha + \\cos^2 \\alpha = 1$.
- Tangens: $\\text{tg}\\,\\alpha = \\frac{\\sin \\alpha}{\\cos \\alpha}$ dla $\\alpha \\ne \\frac{\\pi}{2} + k\\pi$.

## 2. Wzory na Funkcje Sumy i Różnicy Kątów
$$\\sin(\\alpha \\pm \\beta) = \\sin \\alpha \\cos \\beta \\pm \\cos \\alpha \\sin \\beta$$
$$\\cos(\\alpha \\pm \\beta) = \\cos \\alpha \\cos \\beta \\mp \\sin \\alpha \\sin \\beta$$
$$\\text{tg}(\\alpha \\pm \\beta) = \\frac{\\text{tg}\\,\\alpha \\pm \\text{tg}\\,\\beta}{1 \\mp \\text{tg}\\,\\alpha \\cdot \\text{tg}\\,\\beta}$$
- **Funkcje podwojonego kąta**:
  $$\\sin(2\\alpha) = 2\\sin \\alpha \\cos \\alpha$$
  $$\\cos(2\\alpha) = \\cos^2 \\alpha - \\sin^2 \\alpha = 2\\cos^2 \\alpha - 1 = 1 - 2\\sin^2 \\alpha$$

## 3. Równania Trygonometryczne
- $\\sin x = a$ dla $a \\in [-1, 1]$:
  $$x = x_0 + 2k\\pi \\quad \\lor \\quad x = \\pi - x_0 + 2k\\pi, \\quad k \\in \\mathbb{Z}$$
- $\\cos x = a$ dla $a \\in [-1, 1]$:
  $$x = x_0 + 2k\\pi \\quad \\lor \\quad x = -x_0 + 2k\\pi, \\quad k \\in \\mathbb{Z}$$
- Równania jednorodne stopnia 2: $a \\sin^2 x + b \\sin x \\cos x + c \\cos^2 x = 0$ (dzielenie obustronne przez $\\cos^2 x$ przy założeniu $\\cos x \\ne 0$ i podstawienie $t = \\text{tg}\\,x$).

## 2. Tożsamości Kątów Złożonych i Iloczynowe
- **Suma i różnica kątów**:
  - $\sin(\alpha \pm \beta) = \sin \alpha \cos \beta \pm \cos \alpha \sin \beta$
  - $\cos(\alpha \pm \beta) = \cos \alpha \cos \beta \mp \sin \alpha \sin \beta$
  - $\tan(\alpha \pm \beta) = \frac{\tan \alpha \pm \tan \beta}{1 \mp \tan \alpha \tan \beta}$
- **Przekształcenia sumy w iloczyn**:
  - $\sin \alpha + \sin \beta = 2 \sin\frac{\alpha + \beta}{2} \cos\frac{\alpha - \beta}{2}$
  - $\cos \alpha + \cos \beta = 2 \cos\frac{\alpha + \beta}{2} \cos\frac{\alpha - \beta}{2}$
  - $\cos \alpha - \cos \beta = -2 \sin\frac{\alpha + \beta}{2} \sin\frac{\alpha - \beta}{2}$
- **Podwojony kąt**:
  - $\sin(2\alpha) = 2\sin\alpha\cos\alpha$
  - $\cos(2\alpha) = \cos^2\alpha - \sin^2\alpha = 2\cos^2\alpha - 1 = 1 - 2\sin^2\alpha$

## 3. Równania Jednorodne i Podstawienia Uniwersalne
- **Równanie typu $A\sin^2 x + B\sin x \cos x + C\cos^2 x = 0$**:
  1. Sprawdzamy czy $\cos x = 0$ jest rozwiązaniem.
  2. Jeśli nie, dzielimy obustronnie przez $\cos^2 x$, otrzymując równanie kwadratowe ze zmienną $t = \tan x$: $At^2 + Bt + C = 0$.
- **Równanie typu $a\sin x + b\cos x = c$**:
  Dzielimy przez $\sqrt{a^2 + b^2}$, wprowadzając kąt pomocniczy $\phi$ taki, że $\cos\phi = \frac{a}{\sqrt{a^2+b^2}}$ oraz $\sin\phi = \frac{b}{\sqrt{a^2+b^2}}$, sprowadzając do postaci $\sin(x + \phi) = \frac{c}{\sqrt{a^2+b^2}}$.`,
    reviewPrompts: `# Trygonometria — Zadania Maturalne
1. Rozwiąż w przedziale $[0, 2\\pi]$ równanie: $\\cos(2x) + 3\\sin x = 2$.
2. Wykaż tożsamość: $\\frac{\\sin 3\\alpha - \\sin \\alpha}{\\cos 3\\alpha + \\cos \\alpha} = \\text{tg}\\,\\alpha$.
3. Rozwiąż równanie $\cos(2x) + \sin x = 0$ w przedziale $[0, 2\pi]$.
4. Wykaż tożsamość: $\frac{\sin(3\alpha) - \sin \alpha}{\cos(3\alpha) + \cos \alpha} = \tan \alpha$ dla wszystkich $\alpha$, dla których mianownik jest różny od zera.`,
  },
  {
    id: 'math-ciagi',
    title: 'Ciągi Liczbowe, Granice i Szereg Geometryczny',
    category: 'Analiza Matematyczna',
    description:
      'Granice ciągów liczbowych, twierdzenie o trzech ciągach, ciąg arytmetyczny i geometryczny oraz suma nieskończonego szeregu geometrycznego (|q| < 1).',
    rank: 1,
    order: 1,
    coreNotes: `# Ciągi Liczbowe i Szereg Geometryczny — CKE

## 1. Ciąg Arytmetyczny i Geometryczny
- **Ciąg Arytmetyczny**: $a_n = a_1 + (n - 1)r$, suma częściowa:
  $$S_n = \\frac{a_1 + a_n}{2} \\cdot n = \\frac{2a_1 + (n - 1)r}{2} \\cdot n$$
  Związek sąsiednich wyrazów: $a_n = \\frac{a_{n-1} + a_{n+1}}{2}$.
- **Ciąg Geometryczny**: $a_n = a_1 \\cdot q^{n-1}$, suma częściowa:
  $$S_n = a_1 \\cdot \\frac{1 - q^n}{1 - q} \\quad (\\text{dla } q \\ne 1)$$
  Związek sąsiednich wyrazów: $a_n^2 = a_{n-1} \\cdot a_{n+1}$.

## 2. Granice Ciągów Liczbowych
- Wyrażenia nieoznaczone: $\\left[\\frac{\\infty}{\\infty}\\right], \\left[\\frac{0}{0}\\right], [\\infty - \\infty], [0 \\cdot \\infty]$.
- Metoda wyciągania najwyższej potęgi mianownika przed nawias.
- Zastosowanie sprzężenia: $\\sqrt{A} - \\sqrt{B} = \\frac{A - B}{\\sqrt{A} + \\sqrt{B}}$.
- Twierdzenie o trzech ciągach: Wyznaczanie granic ciągów zawierających funkcje ograniczone (np. $\\sin n$).

## 3. Szereg Geometryczny (Nieskończony)
Dla ciągu geometrycznego o ilorazie $|q| < 1$, ciąg sum częściowych jest zbieżny, a jego granicą jest suma szeregu:
$$S = \\sum_{n=1}^{\\infty} a_1 q^{n-1} = \\frac{a_1}{1 - q}$$

## 4. Granica Ciągu Liczbowego
- **Definicja Cauchy'ego**: $\lim_{n\to\infty} a_n = g \iff \forall_{\epsilon > 0} \exists_{N \in \mathbb{N}} \forall_{n > N} |a_n - g| < \epsilon$.
- **Twierdzenie o trzech ciągach**: Jeżeli $a_n \le b_n \le c_n$ dla prawie wszystkich $n$, oraz $\lim_{n\to\infty} a_n = \lim_{n\to\infty} c_n = g$, to $\lim_{n\to\infty} b_n = g$.
- **Granica z liczbą $e$**: $\lim_{n\to\infty} \left(1 + \frac{1}{n}\right)^n = e \approx 2{,}71828$. Ogólnie: $\lim_{n\to\infty} \left(1 + \frac{k}{a_n}\right)^{a_n} = e^k$, o ile $a_n \to \infty$.
- **Technika mnożenia przez sprzężenie**: Dla symboli nieoznaczonych $\infty - \infty$ typu $\sqrt{A_n} - \sqrt{B_n}$:
  $$\sqrt{A_n} - \sqrt{B_n} = \frac{A_n - B_n}{\sqrt{A_n} + \sqrt{B_n}}$$

## 5. Szereg Geometryczny
- Szereg geometryczny $a_1 + a_1 q + a_1 q^2 + \dots = \sum_{n=1}^\infty a_1 q^{n-1}$ jest zbieżny wtedy i tylko wtedy, gdy $|q| < 1$.
- Suma nieskończonego szeregu geometrycznego zbieżnego:
  $$S = \frac{a_1}{1 - q}$$
- W zadaniach CKE często pojawia się funkcja postaci $f(x) = \frac{a_1(x)}{1 - q(x)}$, której dziedzinę wyznacza warunek zbieżności $|q(x)| < 1$.`,
    reviewPrompts: `# Ciągi — Zadania Maturalne
1. Oblicz granicę ciągu: $\\lim_{n \\to \\infty} \\left( \\sqrt{4n^2 + 3n - 1} - 2n \\right)$.
2. Rozwiąż równanie: $1 + \\frac{1}{x} + \\frac{1}{x^2} + \\dots = 3x - 1$, w którym po lewej stronie występuje suma zbieżnego szeregu geometrycznego.
3. Oblicz granicę ciągu: $\lim_{n\to\infty} \left(\sqrt{9n^2 + 6n - 1} - 3n\right)$.
4. Rozwiąż równanie, w którym lewa strona jest sumą nieskończonego szeregu geometrycznego: $x + x^3 + x^5 + \dots = \frac{2}{3}$.`,
  },

  // Rank 2
  {
    id: 'math-planimetria',
    title: 'Planimetria i Geometria Euklidesowa',
    category: 'Geometria',
    description:
      'Twierdzenie sinusów i cosinusów, pole trójkąta (wzór Herona), kąty wpisane i środkowe, okręgi wpisane/opisane i twierdzenie o dwusiecznej.',
    rank: 2,
    order: 0,
    coreNotes: `# Planimetria — Poziom Rozszerzony CKE

## 1. Twierdzenia Kluczowe w Dowolnym Trójkącie
- **Twierdzenie Sinusów**:
  $$\\frac{a}{\\sin \\alpha} = \\frac{b}{\\sin \\beta} = \\frac{c}{\\sin \\gamma} = 2R$$
  gdzie $R$ jest promieniem okręgu opisanego na trójkącie.
- **Twierdzenie Cosinusów (Carnota)**:
  $$a^2 = b^2 + c^2 - 2bc \\cos \\alpha$$
- **Wzory na pole trójkąta**:
  $$P = \\frac{1}{2}ab \\sin \\gamma = \\frac{abc}{4R} = p \\cdot r = \\sqrt{p(p - a)(p - b)(p - c)}$$
  gdzie $p = \\frac{a + b + c}{2}$ to połowa obwodu, a $r$ to promień okręgu wpisanego.

## 2. Okręgi i Kąty
- **Kąt środkowy i wpisany**: Miara kąta środkowego opartego na tym samym łuku jest dwukrotnie większa od miary kąta wpisanego: $\\beta = 2\\alpha$.
- **Twierdzenie o dwusiecznej kąta w trójkącie**: Dwusieczna kąta wewnętrznego trójkąta dzieli przeciwległy bok na dwa odcinki, których stosunek długości jest równy stosunkowi długości pozostałych boków: $\\frac{x}{y} = \\frac{a}{b}$.
- **Twierdzenie o siecznych i stycznych**: Dla punktu $P$ leżącego na zewnątrz okręgu: $|PT|^2 = |PA| \\cdot |PB|$.

## 4. Związki Miarowe i Wzory na Pole Trójkąta
Dla trójkąta o bokach $a, b, c$, kątach $\alpha, \beta, \gamma$, promieniu okręgu opisanego $R$ i wpisanego $r$, oraz połowie obwodu $p = \frac{a+b+c}{2}$:
- $P = \frac{1}{2}ab \sin\gamma$
- Wzór Herona: $P = \sqrt{p(p-a)(p-b)(p-c)}$
- Związki z promieniami: $P = p \cdot r$ oraz $P = \frac{abc}{4R}$

## 5. Ważne Twierdzenia Planimetryczne CKE
- **Twierdzenie o dwusiecznej kąta**: Dwusieczna kąta wewnętrznego trójkąta dzieli bok przeciwległy na odcinki proporcjonalne do pozostałych boków: $\frac{x}{y} = \frac{a}{b}$.
- **Twierdzenie o siecznych i stycznych**: Jeżeli z punktu $P$ leżącego na zewnątrz okręgu poprowadzimy styczną o punkcie styczności $T$ oraz sieczną przecinającą okrąg w punktach $A$ i $B$, to:
  $$|PT|^2 = |PA| \cdot |PB|$$
- **Czworokąt wpisany w okrąg**: Suma przeciwległych kątów wynosi $180^\circ$ ($\alpha + \gamma = \beta + \delta = 180^\circ$). Twierdzenie Ptolemeusza: iloczyn przekątnych jest równy sumie iloczynów przeciwległych boków: $ef = ac + bd$.
- **Czworokąt opisany na okręgu**: Sumy przeciwległych boków są równe: $a + c = b + d$.`,
    reviewPrompts: `# Planimetria — Zadania Dowodowe
1. W trójkącie $ABC$ boki mają długości $a=5$, $b=6$, $c=7$. Oblicz promień okręgu wpisanego $r$ oraz promień okręgu opisanego $R$.
2. Udowodnij, że w czworokącie wpisanym w okrąg suma miar przeciwległych kątów wynosi $180^\\circ$.
3. W trójkącie $ABC$ boki mają długości $AB = 8$, $BC = 6$, $AC = 7$. Dwusieczna kąta $C$ przecina bok $AB$ w punkcie $D$. Oblicz długość odcinka $CD$.
4. Wykaż, że w trójkącie prostokątnym o przyprostokątnych $a, b$ i przeciwprostokątnej $c$, promień okręgu wpisanego wyraża się wzorem $r = \frac{a + b - c}{2}$.`,
  },
  {
    id: 'math-analityczna',
    title: 'Geometria Analityczna na Płaszczyźnie',
    category: 'Geometria',
    description:
      'Wektory, iloczyn skalarny, równanie ogólne i kierunkowe prostej, odległość punktu od prostej, równanie okręgu i styczne do okręgu.',
    rank: 2,
    order: 1,
    coreNotes: `# Geometria Analityczna — Matura Rozszerzona CKE

## 1. Wektory w Układzie Współrzędnych
- Wektor $\\vec{v} = [v_x, v_y]$, długość: $|\\vec{v}| = \\sqrt{v_x^2 + v_y^2}$.
- Iloczyn skalarny: $\\vec{u} \\circ \\vec{v} = u_x v_x + u_y v_y = |\\vec{u}| \\cdot |\\vec{v}| \\cos \\theta$.
- Warunek prostopadłości wektorów: $\\vec{u} \\perp \\vec{v} \\iff u_x v_x + u_y v_y = 0$.

## 2. Prosta na Płaszczyźnie
- Postać ogólna: $Ax + By + C = 0$, gdzie wektor $\\vec{n} = [A, B]$ jest wektorem normalnym (prostopadłym do prostej).
- Odległość punktu $P(x_0, y_0)$ od prostej $k$:
  $$d(P, k) = \\frac{|A x_0 + B y_0 + C|}{\\sqrt{A^2 + B^2}}$$
- Odległość między prostymi równoległymi $Ax + By + C_1 = 0$ i $Ax + By + C_2 = 0$:
  $$d = \\frac{|C_1 - C_2|}{\\sqrt{A^2 + B^2}}$$

## 3. Okrąg i Wzajemne Położenie z Prostą
- Równanie kanoniczne okręgu o środku $S(a, b)$ i promieniu $r$:
  $$(x - a)^2 + (y - b)^2 = r^2$$
- Wyznaczanie stycznych do okręgu: Odległość środka okręgu $S$ od prostej stycznej jest równa dokładnie promieniowi $d(S, k) = r$.

## 4. Wzajemne Położenie Prostej i Okręgu
Dany jest okrąg $(x - a)^2 + (y - b)^2 = r^2$ oraz prosta $Ax + By + C = 0$:
- Obliczamy odległość środka $S(a, b)$ od prostej: $d = \frac{|Aa + Bb + C|}{\sqrt{A^2 + B^2}}$.
  - $d < r$ — prosta jest sieczną (2 punkty wspólne).
  - $d = r$ — prosta jest styczna (1 punkt wspólny).
  - $d > r$ — prosta jest rozłączna z okręgiem.

## 5. Równania Stycznych do Okręgu
- Styczna przechodząca przez punkt $P(x_0, y_0)$ leżący na okręgu:
  $$(x_0 - a)(x - a) + (y_0 - b)(y - b) = r^2$$
- Styczne przechodzące przez punkt zewnętrzny $P(x_1, y_1)$: zapisujemy pęk prostych $y - y_1 = m(x - x_1) \iff mx - y + y_1 - mx_1 = 0$ i nakładamy warunek odległości środka okręgu $d(S, l) = r$, wyznaczając współczynniki kierunkowe $m_1, m_2$.

## 6. Pole Trójkąta i Przekształcenia Afiniczne
Pole trójkąta o wierzchołkach $A(x_A, y_A), B(x_B, y_B), C(x_C, y_C)$ za pomocą wyznacznika par wektorów:
$$P_{ABC} = \frac{1}{2} |\det(\vec{AB}, \vec{AC})| = \frac{1}{2} |(x_B - x_A)(y_C - y_A) - (y_B - y_A)(x_C - x_A)|$$`,
    reviewPrompts: `# Geometria Analityczna — Zadania Maturalne
1. Wyznacz równania stycznych do okręgu $(x - 1)^2 + (y + 2)^2 = 5$ przechodzących przez punkt $P(4, 2)$ leżący poza okręgiem.
2. Punkty $A(-2, 1)$ i $B(4, 5)$ są wierzchołkami trójkąta równoramiennego $ABC$, w którym $|AC| = |BC|$. Wierzchołek $C$ leży na prostej $y = 2x - 3$. Wyznacz współrzędne punktu $C$.
3. Wyznacz równania wszystkich prostych stycznych do okręgu $x^2 + y^2 - 4x + 6y + 4 = 0$ i prostopadłych do prostej $3x - 4y + 7 = 0$.
4. Punkty $A = (-2, 1)$ i $B = (4, 3)$ są wierzchołkami trójkąta równoramiennego $ABC$, w którym $|AC| = |BC|$. Wierzchołek $C$ leży na prostej $y = 2x - 5$. Wyznacz współrzędne wierzchołka $C$ oraz pole tego trójkąta.`,
  },

  // Rank 3
  {
    id: 'math-stereometria',
    title: 'Stereometria: Graniastosłupy, Ostrosłupy i Bryły Obrotowe',
    category: 'Geometria Przestrzenna',
    description:
      'Kąty w przestrzeni (nachylenia krawędzi/ściany do podstawy, kąt dwuścienny), twierdzenie o trzech prostopadłych, przekroje i bryły wpisane.',
    rank: 3,
    order: 0,
    coreNotes: `# Stereometria — Poziom Rozszerzony CKE

## 1. Kąty w Przestrzeni Trójwymiarowej
- **Kąt między prostą a płaszczyzną**: Kąt między prostą a jej rzutem prostokątnym na tę płaszczyznę.
- **Kąt dwuścienny (między dwiema płaszczyznami)**: Kąt liniowy utworzony przez dwie proste leżące na tych płaszczyznach, prostopadłe do ich krawędzi wspólnej w tym samym punkcie.

## 2. Twierdzenie o Trzech Prostopadłych
Jeżeli prosta $k$ leżąca na płaszczyźnie $\\pi$ jest prostopadła do rzutu prostokątnego prostej $m$ na tę płaszczyznę, to prosta $k$ jest prostopadła do samej prostej $m$:
$$k \\perp m' \\implies k \\perp m$$

## 3. Przekroje Wielościanów
- Konstrukcja śladów płaszczyzny przekroju na ścianach bocznych ostrosłupów i graniastosłupów.
- Krawędzie cięcia leżące na ścianach przeciwległych i równoległych w graniastosłupach są do siebie równoległe.

## 4. Bryły Obrotowe
- **Walec**: $V = \\pi r^2 h$, $P_b = 2\\pi r h$.
- **Stożek**: $V = \\frac{1}{3}\\pi r^2 h$, $P_b = \\pi r l$ (gdzie $l = \\sqrt{r^2 + h^2}$).
- **Kula**: $V = \\frac{4}{3}\\pi R^3$, $P = 4\\pi R^2$.

## 4. Kąty w Przestrzeni i Rzuty Prostokątne
- **Twierdzenie o trzech prostopadłych**: Jeżeli prosta $k$ w płaszczyźnie $\pi$ jest prostopadła do rzutu prostokątnego prostej $l$ na płaszczyznę $\pi$, to prosta $k$ jest prostopadła do samej prostej $l$.
- **Kąt nachylenia krawędzi bocznej do płaszczyzny podstawy**: Kąt między krawędzią a jej rzutem prostokątnym na płaszczyznę podstawy (odcinek łączący spodek wysokości ze spodkiem krawędzi).
- **Kąt dwuścienny między ścianą boczną a podstawą**: Wyznaczany przez dwie proste leżące w obu płaszczyznach, prostopadłe do ich krawędzi wspólnej w tym samym punkcie (zwykle wysokość ściany bocznej i promień okręgu wpisanego w podstawę).

## 5. Bryły Wpisane i Opisane
- Kula wpisana w ostrosłup: Środek kuli leży na wysokości ostrosłupa, w punkcie równo oddalonym od wszystkich ścian. Wzór na objętość przez pole całkowite: $V = \frac{1}{3} P_c \cdot r_{kuli}$.
- Stożek opisany na kuli: Przekrój osiowy stożka stanowi trójkąt równoramienny z wpisanym kołem wielkim kuli. Umożliwia to bezpośrednie zastosowanie tożsamości planimetrycznych ($r = \frac{P}{p}$).`,
    reviewPrompts: `# Stereometria — Zadania Maturalne CKE
1. W ostrosłupie prawidłowym czworokątnym krawędź podstawy ma długość $a$, a kąt nachylenia ściany bocznej do płaszczyzny podstawy wynosi $\\alpha$. Wyznacz objętość kuli wpisanej w ten ostrosłup.
3. W ostrosłupie prawidłowym czworokątnym krawędź podstawy ma długość $a$, a kąt między krawędzią boczną a płaszczyzną podstawy wynosi $\alpha$. Wyznacz objętość i pole powierzchni całkowitej tego ostrosłupa.
4. Oblicz cosinus kąta między sąsiednimi ścianami bocznymi w czworościanie foremnym o krawędzi $a$.`,
  },
  {
    id: 'math-pochodne',
    title: 'Rachunek Różniczkowy: Pochodna i Przebieg Zmienności',
    category: 'Rachunek Różniczkowy',
    description:
      'Definicja pochodnej, reguły różniczkowania, równanie stycznej do wykresu, warunek konieczny i wystarczający istnienia ekstremum lokalnego.',
    rank: 3,
    order: 1,
    coreNotes: `# Rachunek Różniczkowy — Matura Rozszerzona CKE

## 1. Definicja i Interpretacja Pochodnej
- **Pochodna funkcji w punkcie $x_0$**:
  $$f'(x_0) = \\lim_{h \\to 0} \\frac{f(x_0 + h) - f(x_0)}{h}$$
- **Interpretacja geometryczna**: Pochodna $f'(x_0)$ jest równa współczynnikowi kierunkowemu stycznej do wykresu funkcji $f$ w punkcie $P(x_0, f(x_0))$.
- **Równanie prostej stycznej**:
  $$y - f(x_0) = f'(x_0)(x - x_0)$$

## 2. Reguły Różniczkowania
- Pochodne funkcji potęgowej: $(x^n)' = n x^{n-1}$.
- Suma i różnica: $(u \\pm v)' = u' \\pm v'$.
- Iloczyn funkcji: $(u \\cdot v)' = u' v + u v'$.
- Iloraz funkcji: $\\left(\\frac{u}{v}\\right)' = \\frac{u' v - u v'}{v^2}$ dla $v \\ne 0$.
- Pochodna funkcji złożonej: $[f(g(x))]' = f'(g(x)) \\cdot g'(x)$.

## 3. Monotoniczność i Ekstrema Lokalne
- **Warunek monotoniczności**:
  - Jeżeli $f'(x) > 0$ w przedziale $(a, b)$, to funkcja jest rosnąca.
  - Jeżeli $f'(x) < 0$ w przedziale $(a, b)$, to funkcja jest malejąca.
- **Warunek konieczny istnienia ekstremum (Twierdzenie Fermata)**: Jeżeli funkcja $f$ ma w punkcie $x_0$ ekstremum lokalne i jest w nim różniczkowalna, to $f'(x_0) = 0$.
- **Warunek wystarczający**: Jeżeli $f'(x_0) = 0$ oraz pochodna zmienia znak przy przejściu przez $x_0$:
  - Z $+$ na $-$ $\\implies$ maksimum lokalne.
  - Z $-$ na $+$ $\\implies$ minimum lokalne.

## 4. Druga Pochodna, Wypukłość i Punkty Przegięcia
- Funkcja $f(x)$ jest:
  - Ściśle wypukła ($\cup$) na przedziale $(a, b)$, gdy $f''(x) > 0$ dla każdego $x \in (a, b)$.
  - Ściśle wklęsła ($\cap$) na przedziale $(a, b)$, gdy $f''(x) < 0$ dla każdego $x \in (a, b)$.
- **Punkt przegięcia**: Punkt $(x_0, f(x_0))$, w którym funkcja zmienia charakter wypukłości (druga pochodna zmienia znak). Warunek konieczny: $f''(x_0) = 0$ lub $f''(x_0)$ nie istnieje.

## 5. Twierdzenie o Wartości Średniej (Lagrange'a)
Jeżeli funkcja $f$ jest ciągła w przedziale domkniętym $[a, b]$ i różniczkowalna w przedziale otwartym $(a, b)$, to istnieje punkt $c \in (a, b)$ taki, że:
$$f'(c) = \frac{f(b) - f(a)}{b - a}$$
Interpretacja: na wykresie istnieje przynajmniej jeden punkt, w którym styczna jest równoległa do siecznej przechodzącej przez końce wykresu.`,
    reviewPrompts: `# Rachunek Różniczkowy — Ćwiczenia CKE
1. Wyznacz równanie stycznej do wykresu funkcji $f(x) = \\frac{2x - 1}{x + 3}$ w punkcie o odciętej $x_0 = 1$.
2. Wyznacz przedziały monotoniczności oraz ekstrema lokalne funkcji $f(x) = x^3 - 6x^2 + 9x + 2$.
3. Wyznacz równanie stycznej do wykresu funkcji $f(x) = \frac{2x - 1}{x + 2}$ w punkcie o odciętej $x_0 = 1$.
4. Zbadaj przedziały monotoniczności oraz wyznacz ekstrema lokalne funkcji $f(x) = x^3 - 6x^2 + 9x + 2$.`,
  },

  // Rank 4
  {
    id: 'math-optymalizacja',
    title: 'Zagadnienia Optymalizacyjne z Użyciem Pochodnej',
    category: 'Rachunek Różniczkowy',
    description:
      'Zadania z arkusza maturalnego za 5-7 pkt: budowa funkcji celu jednej zmiennej, określenie dziedziny geometrycznej/fizycznej i wyznaczenie ekstremum.',
    rank: 4,
    order: 0,
    coreNotes: `# Zadania Optymalizacyjne — Matura Rozszerzona CKE

## 1. Algorytm Rozwiązywania Zadań Optymalizacyjnych
1. **Analiza treści i rysunek pomocniczy**: Wprowadzenie oznaczeń zmiennych wielkości (np. promień $r$, wysokość $h$, bok $x$).
2. **Relacja wiążąca (warunek zadania)**: Wyznaczenie zależności pomiędzy zmiennymi z warunków brzegowych (np. stała objętość $V = \\pi r^2 h = 500$, pole powierzchni, obwód).
3. **Konstrukcja funkcji celu jednej zmiennej**: Wyrażenie optymalizowanej wielkości (np. kosztu blachy, pola powierzchni całkowitej) wyłącznie za pomocą jednej zmiennej $f(x)$.
4. **Precyzyjne wyznaczenie dziedziny fizycznej/geometrycznej $D_f$**: Uwzględnienie ograniczeń wielkości dodatnich (np. $x > 0$, $h(x) > 0$). *Brak dziedziny skutkuje utratą punktów w kluczu CKE!*
5. **Obliczenie pochodnej $f'(x)$ i wyznaczenie miejsc zerowych**: Rozwiązanie równania $f'(x) = 0$.
6. **Weryfikacja ekstremum**: Uzasadnienie, że w wyznaczonym punkcie funkcja osiąga wartość najmniejszą lub największą (badanie zmiany znaku pochodnej).
7. **Odpowiedź**: Podanie ostatecznych wymiarów oraz optymalnej wartości funkcji z jednostkami.

## 4. Schemat Rozwiązywania Zadań Optymalizacyjnych CKE
1. **Analiza geometryczna/fizyczna**: Rysunek pomocniczy z oznaczeniem zmiennych.
2. **Związek między zmiennymi**: Wykorzystanie twierdzenia Pitagorasa, podobieństwa trójkątów, czy wzorów na objętość/pole do uzależnienia wszystkich wielkości od jednej zmiennej $x$.
3. **Określenie dziedziny geometrycznej**: Precyzyjne wyznaczenie przedziału $D = (x_{\min}, x_{\max})$ na podstawie warunków dodatniości długości boków. Brak dziedziny skutkuje utratą punktów w kryteriach CKE!
4. **Wyznaczenie funkcji celu**: Zapisanie optymalizowanej wielkości $f(x)$.
5. **Wyznaczenie pochodnej**: Obliczenie $f'(x)$ i uproszczenie wyrażenia.
6. **Miejsca zerowe i badanie znaku pochodnej**:
   - $f'(x_0) = 0$
   - Wykazanie, że dla $x < x_0$ pochodna $f'(x) > 0$ a dla $x > x_0$ pochodna $f'(x) < 0$, co gwarantuje maksimum globalne w punkcie $x_0$.
7. **Obliczenie wartości optymalnej**: Wyliczenie szukanych wymiarów oraz optymalnej wartości funkcji.`,
    reviewPrompts: `# Zadanie Optymalizacyjne Maturalne (7 pkt)
Pojemnik w kształcie prostopadłościanu z otwartą górą ma mieć podstawę kwadratową o boku $x$ i objętość $V = 32\\text{ dm}^3$. Koszt wykonania podstawy wynosi 20 zł za $\\text{dm}^2$, a ścian bocznych 10 zł za $\\text{dm}^2$. Wyznacz wymiary pojemnika, dla których łączny koszt wykonania będzie najmniejszy. Oblicz ten minimalny koszt.
3. Z arkusza blachy o wymiarach $30\text{ cm} \times 50\text{ cm}$ wycinamy w czterech rogach jednakowe kwadraty o boku $x$, a następnie zaginamy brzegi tworząc otwarte prostopadłościenne pudełko. Wyznacz $x$, dla którego objętość pudełka jest największa.
4. W kulę o promieniu $R$ wpisano walec o największej objętości. Wyznacz promień podstawy i wysokość tego walca oraz jego objętość w zależności od $R$.`,
  },
  {
    id: 'math-kombinatoryka',
    title: 'Kombinatoryka i Teoria Prawdopodobieństwa',
    category: 'Rachunek Prawdopodobieństwa',
    description:
      'Reguła mnożenia i dodawania, kombinacje z powtórzeniami, prawdopodobieństwo całkowite, wzór Bayesa i schemat Bernoulliego.',
    rank: 4,
    order: 1,
    coreNotes: `# Kombinatoryka i Prawdopodobieństwo — CKE

## 1. Techniki Kombinatoryczne
- **Permutacje**: $P_n = n!$.
- **Wariacje bez powtórzeń**: $V_n^k = \\frac{n!}{(n - k)!}$.
- **Wariacje z powtórzeniami**: $\\overline{V}_n^k = n^k$.
- **Kombinacje bez powtórzeń**: $\\binom{n}{k} = \\frac{n!}{k!(n - k)!}$.

## 2. Aksjomatyka Prawdopodobieństwa i Zdarzenia Losowe
- Własność prawdopodobieństwa sumy zdarzeń:
  $$P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$$
- Prawdopodobieństwo warunkowe:
  $$P(A | B) = \\frac{P(A \\cap B)}{P(B)} \\quad (\\text{dla } P(B) > 0)$$
- **Niezależność zdarzeń**: $A$ i $B$ są niezależne $\\iff P(A \\cap B) = P(A) \\cdot P(B)$.

## 3. Twierdzenie o Prawdopodobieństwie Całkowitym i Wzór Bayesa
Dla zupełnego układu zdarzeń $B_1, B_2, \\dots, B_n$ parami rozłącznych takich, że $\\sum P(B_i) = 1$:
$$P(A) = \\sum_{i=1}^n P(A | B_i) \\cdot P(B_i)$$
Wzór Bayesa:
$$P(B_k | A) = \\frac{P(A | B_k) P(B_k)}{P(A)}$$

## 4. Schemat Bernoulliego
Prawdopodobieństwo uzyskania dokładnie $k$ sukcesów w $n$ niezależnych próbach o prawdopodobieństwie sukcesu $p$:
$$P_n(k) = \\binom{n}{k} p^k (1 - p)^{n - k}$$

## 4. Schemat Bernoulliego i Zmienna Losowa
- **Doświadczenie Bernoulliego**: Ciąg $n$ niezależnych powtórzeń doświadczenia losowego z dwoma możliwymi wynikami: sukcesem z prawdopodobieństwem $p$ oraz porażką z prawdopodobieństwem $q = 1 - p$.
- Prawdopodobieństwo uzyskania dokładnie $k$ sukcesów:
  $$P_n(k) = \binom{n}{k} p^k (1 - p)^{n - k}$$
- Wartość oczekiwana liczby sukcesów: $E(X) = n \cdot p$, wariancja: $D^2(X) = n \cdot p \cdot (1 - p)$.

## 5. Prawdopodobieństwo Warunkowe i Wzór Bayesa
- $P(A|B) = \frac{P(A \cap B)}{P(B)}$ (dla $P(B) > 0$).
- Niezależność zdarzeń: Zdarzenia $A$ i $B$ są niezależne $\iff P(A \cap B) = P(A) \cdot P(B)$.
- **Wzór na prawdopodobieństwo całkowite**: Jeżeli zdarzenia $B_1, B_2, \dots, B_n$ stanowią zupełny podział przestrzeni $\Omega$ (rozłączne i ich suma daje $\Omega$), to:
  $$P(A) = \sum_{i=1}^n P(A|B_i) \cdot P(B_i)$$
- **Wzór Bayesa**: Umożliwia obliczenie prawdopodobieństwa przyczyny po zaobserwowaniu skutku:
  $$P(B_k|A) = \frac{P(A|B_k) \cdot P(B_k)}{\sum_{i=1}^n P(A|B_i) \cdot P(B_i)}$$`,
    reviewPrompts: `# Prawdopodobieństwo — Zadania Maturalne
1. W urnie I znajdują się 3 kule białe i 2 czarne, a w urnie II 4 białe i 1 czarna. Losujemy urnę, a z niej jedną kulę. Oblicz prawdopodobieństwo wylosowania kuli białej oraz prawdopodobieństwo, że kula pochodziła z urny I, jeśli okazała się biała.
3. Ze zbioru liczb $\{1, 2, 3, \dots, 20\}$ losujemy kolejno bez zwracania dwie liczby. Oblicz prawdopodobieństwo, że suma wylosowanych liczb jest parzysta, pod warunkiem że ich iloczyn jest podzielny przez $4$.
4. Rzucamy symetryczną sześcienną kostką do gry 6 razy. Oblicz prawdopodobieństwo wyrzucenia co najmniej 5 razy ścianki z liczbą oczek podzielną przez 3.`,
  },
];
