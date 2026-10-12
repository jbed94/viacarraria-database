import type { Course, SeedEdge } from './types.js';

export const highschoolChemistryEdges: SeedEdge[] = [
  // Rank 0 -> Rank 1
  { id: 'chem-atom-termo', source: 'chem-atom-wiazania', target: 'chem-termo-kinetyka' },
  { id: 'chem-stechio-termo', source: 'chem-stechiometria', target: 'chem-termo-kinetyka' },
  { id: 'chem-stechio-roztwory', source: 'chem-stechiometria', target: 'chem-roztwory' },

  // Rank 1 -> Rank 2
  { id: 'chem-termo-redoks', source: 'chem-termo-kinetyka', target: 'chem-redoks' },
  { id: 'chem-roztwory-redoks', source: 'chem-roztwory', target: 'chem-redoks' },
  { id: 'chem-roztwory-nieorg', source: 'chem-roztwory', target: 'chem-nieorganiczna' },

  // Rank 2 -> Rank 3
  { id: 'chem-atom-weglowodory', source: 'chem-atom-wiazania', target: 'chem-weglowodory' },
  { id: 'chem-nieorg-weglowodory', source: 'chem-nieorganiczna', target: 'chem-weglowodory' },
  { id: 'chem-weglowodory-pochodne', source: 'chem-weglowodory', target: 'chem-organiczna-pochodne' },
  { id: 'chem-redoks-pochodne', source: 'chem-redoks', target: 'chem-organiczna-pochodne' },
];

export const highschoolChemistryCourses: Course[] = [
  // Rank 0
  {
    id: 'chem-atom-wiazania',
    title: 'Budowa Atomu, Układ Okresowy i Wiązania Chemiczne',
    category: 'Chemia Ogólna',
    description:
      'Liczby kwantowe, konfiguracja elektronowa (podpowłokowa i klatkowa), reguła Hunda, hybrydyzacja sp/sp2/sp3, VSEPR i wiązania międzycząsteczkowe.',
    rank: 0,
    order: 0,
    coreNotes: `# Budowa Atomu i Wiązania Chemiczne — Matura Rozszerzona CKE

## 1. Struktura Elektronowa Atomu i Liczby Kwantowe
- **Główna liczba kwantowa ($n$)**: Określa numer powłoki i poziom energetyczny ($n = 1, 2, 3, \\dots$).
- **Poboczna liczba kwantowa ($l$)**: Kształt orbitalu ($l = 0$ [s], $1$ [p], $2$ [d], $3$ [f]).
- **Magnetyczna ($m$)**: Orientacja przestrzenna ($-l \\le m \\le l$).
- **Magnetyczna spinowa ($m_s$)**: Własny moment pędu elektronu ($m_s = \\pm \\frac{1}{2}$).
- **Zasady obsadzania orbitali**:
  - *Zakaz Pauliego*: W atomie nie mogą istnieć dwa elektrony o identycznym zestawie 4 liczb kwantowych.
  - *Reguła Hunda*: Orbitale zdegenerowane obsadzane są pojedynczo niesparowanymi elektronami o równoległych spinach.
  - *Promocja elektronowa*: Występuje dla miedziowców i chromowców (np. $_{24}\\text{Cr}: [\\text{Ar}] 3d^5 4s^1$, $_{29}\\text{Cu}: [\\text{Ar}] 3d^{10} 4s^1$).

## 2. Wiązania Chemiczne i Teoria VSEPR
- **Rodzaje wiązań**:
  - Kowalencyjne niespolaryzowane ($\\Delta E < 0{,}4$).
  - Kowalencyjne spolaryzowane ($0{,}4 \\le \\Delta E < 1{,}7$).
  - Jonowe ($\\Delta E \\ge 1{,}7$).
  - Koordynacyjne (donorowo-akceptorowe, np. jon amonowy $NH_4^+$, hydroniowy $H_3O^+$).
- **Hybrydyzacja orbitali atomowych**:
  - $sp$: Liniowa ($180^\\circ$), np. $BeCl_2$, $C_2H_2$ (etyn).
  - $sp^2$: Trójkątna płaska ($120^\\circ$), np. $BF_3$, $C_2H_4$ (eten).
  - $sp^3$: Tetraedryczna ($109{,}5^\\circ$), np. $CH_4$, $NH_3$ (piramida trygonalna, wolna para elektronowa odpycha wiązania do $107^\\circ$), $H_2O$ (kątowa $104{,}5^\\circ$).

## 3. Wiązania Międzycząsteczkowe
- Wiązania wodorowe (atom wodoru związany z $F, O, N$): Warunkują wysoką temperaturę wrzenia wody, strukturę DNA i białek.
- Siły van der Waalsa (oddziaływania dipol-dipol i siły dyspersyjne Londona).

## 3. Teoria VSEPR i Hybrydyzacja Orbitali Atomowych
- **Liczba przestrzenna (LP)**: Suma liczby wiązań typu $\sigma$ oraz liczby wolnych par elektronowych wokół atomu centralnego: $LP = \sigma + WPE$.
  - $LP = 2$: Hybrydyzacja $sp$, geometria liniowa (kąt $180^\circ$), np. $BeCl_2, CO_2, C_2H_2$.
  - $LP = 3$: Hybrydyzacja $sp^2$:
    - 0 WPE: trójkątna płaska (kąt $120^\circ$), np. $BF_3, SO_3, C_2H_4$.
    - 1 WPE: kątowa (kąt $< 120^\circ$), np. $SO_2, NO_2^-$.
  - $LP = 4$: Hybrydyzacja $sp^3$:
    - 0 WPE: tetraedryczna (kąt $109{,}5^\circ$), np. $CH_4, NH_4^+, SO_4^{2-}$.
    - 1 WPE: piramida trygonalna (kąt ok. $107^\circ$), np. $NH_3, H_3O^+, PCl_3$.
    - 2 WPE: kątowa (kąt ok. $104{,}5^\circ$), np. $H_2O, H_2S$.
- **Polarność cząsteczek a moment dipolowy ($\vec{\mu}$)**: Cząsteczka jest polarna (posiada trwały dipol $\mu > 0$), gdy wektorowa suma momentów dipolowych poszczególnych wiązań nie jest równa zeru (asymetria przestrzenna cząsteczki, np. $H_2O, NH_3$). Symetryczne cząsteczki ($CO_2, CCl_4, BF_3$) są apolarne pomimo obecności silnie spolaryzowanych wiązań kowalencyjnych.`,
    reviewPrompts: `# Budowa Atomu — Zadania Maturalne CKE
1. Przedstaw pełną konfigurację elektronową jonu $Fe^{3+}$ w zapisie podpowłokowym skróconym (z rdzeniem gazu szlachetnego) i wskaż liczbę niesparowanych elektronów.
2. Na podstawie metody VSEPR określ typ hybrydyzacji atomu centralnego, liczbę wolnych par elektronowych oraz geometrię cząsteczki $SO_2$.
3. Dla cząsteczki trifluorku chloru ($ClF_3$) oraz jonu trijodkowego ($I_3^-$) określ liczbę przestrzenną, typ hybrydyzacji atomu centralnego oraz kształt geometryczny drobiny wg modelu VSEPR.
4. Porównaj właściwości fizyczne (temperaturę wrzenia, prężność par, lotność) etanolu i eteru dimetylowego, wyjaśniając obserwowaną różnicę obecnością międzycząsteczkowych wiązań wodorowych.`,
  },
  {
    id: 'chem-stechiometria',
    title: 'Stechiometria Chemiczna i Prawa Gazowe',
    category: 'Chemia Ogólna',
    description:
      'Mol, masa molowa, objętość molowa gazów w warunkach normalnych, równanie Clapeyrona, wydajność reakcji i ustalanie wzorów elementarnych.',
    rank: 0,
    order: 1,
    coreNotes: `# Stechiometria Chemiczna i Gazy — CKE

## 1. Pojęcia Podstawowe i Obliczenia Molowe
- **Mol**: Liczba Avogadra cząstek $N_A = 6{,}022 \\times 10^{23}\\text{ mol}^{-1}$.
- **Masa molowa ($M$)**: Masa 1 mola substancji wyrażana w $\\text{g/mol}$. Zależność: $n = \\frac{m}{M}$.
- **Objętość molowa gazu w warunkach normalnych** ($T = 273{,}15\\text{ K}$, $p = 1013{,}25\\text{ hPa}$):
  $$V_{mol} = 22{,}4\\text{ dm}^3\\text{/mol}$$

## 2. Równanie Stanu Gazu Doskonałego (Clapeyrona)
Dla dowolnych warunków ciśnienia i temperatury:
$$p \\cdot V = n \\cdot R \\cdot T$$
gdzie stała gazowa $R = 83{,}14\\text{ }\\frac{\\text{hPa} \\cdot \\text{dm}^3}{\\text{mol} \\cdot \\text{K}} = 8{,}314\\text{ }\\frac{\\text{J}}{\\text{mol} \\cdot \\text{K}}$.

## 3. Zadania na Wydajność i Substrat w Niedomiarze
- Ustalenie substratu limitującego (w niedomiarze) w oparciu o stosunek molowy równania stechiometrycznego.
- Wydajność procentowa reakcji:
  $$W = \\frac{m_{\\text{rzeczywista}}}{m_{\\text{teoretyczna}}} \\times 100\\%$$

## 4. Wyznaczanie Wzorów Związków Chemicznych
- Skład procentowy masowy $\\to$ stosunek molowy atomów $\\to$ wzór empiryczny (najprostszy).
- Po uwzględnieniu masy molowej związku $\\to$ wzór rzeczywisty (sumaryczny).

## 3. Równanie Stanu Gazu Doskonałego (Clapeyrona)
Dla gazów rzeczywistych w warunkach zbliżonych do normalnych:
$$pV = nRT = \frac{m}{M} RT$$
Gdzie:
- $p$ — ciśnienie gazu $[\text{Pa}]$ lub $[\text{hPa}]$.
- $V$ — objętość gazu $[\text{m}^3]$ lub $[\text{dm}^3]$.
- $n$ — liczba moli $[\text{mol}]$.
- $R$ — uniwersalna stała gazowa: $R = 8{,}314\;\frac{\text{J}}{\text{mol} \cdot \text{K}} = 83{,}14\;\frac{\text{hPa} \cdot \text{dm}^3}{\text{mol} \cdot \text{K}}$.
- $T$ — temperatura bezwzględna w Kelvinach ($T = t + 273{,}15$).
- Gęstość gazu: $d = \frac{pM}{RT}$.

## 4. Zadania z Nadmiarem, Niedomiarem i Wydajnością
- **Substrat ograniczający (w niedomiarze)**: Wszelkie obliczenia ilości produktów prowadzimy zawsze w oparciu o substrat, który przereagowuje całkowicie.
- **Wydajność procentowa reakcji ($\eta$)**:
  $$\eta = \frac{m_{\text{rzeczywista}}}{m_{\text{teoretyczna}}} \times 100\% = \frac{n_{\text{rzeczywista}}}{n_{\text{teoretyczna}}} \times 100\%$$
- **Mieszaniny reagujące równolegle**: Tworzenie układu dwóch równań liniowych z dwiema niewiadomymi (np. roztwarzanie stopu glinu i magnezu w kwasie solnym i pomiar wydzielonego wodoru).`,
    reviewPrompts: `# Stechiometria — Zadania Obliczeniowe CKE
1. Próbkę stopu glinu i miedzi o masie 10,0 g roztworzono w nadmiarze kwasu solnego, w wyniku czego wydzieliło się 6,72 dm³ wodoru (warunki normalne). Oblicz zawartość procentową miedzi w stopie.
2. Spalono 4,4 g węglowodoru, otrzymując 13,2 g $CO_2$ i 7,2 g $H_2O$. Wyznacz wzór rzeczywisty tego węglowodoru, wiedząc że jego gęstość w warunkach normalnych wynosi $1{,}96\\text{ g/dm}^3$.
3. Próbkę mosiądzu (stopu miedzi i cynku) o masie $10{,}00\text{ g}$ poddano działaniu nadmiaru kwasu solnego. W reakcji wydzieliło się $1{,}68\text{ dm}^3$ wodoru (odmierzonego w warunkach normalnych). Oblicz skład procentowy masowy tego mosiądzu.
4. W zamkniętym reaktorze o objętości $5{,}0\text{ dm}^3$ w temperaturze $400\text{ K}$ pod ciśnieniem $1500\text{ hPa}$ znajduje się tlenek węgla(IV). Oblicz masę tego gazu w reaktorze.`,
  },

  // Rank 1
  {
    id: 'chem-termo-kinetyka',
    title: 'Termochemia, Kinetyka i Równowaga Reakcji',
    category: 'Fizykochemia',
    description:
      'Entalpia reakcji ΔH, prawo Hessa, szybkość reakcji, energia aktywacji, reguła przekory Le Chateliera-Brauna i stała równowagi Kc.',
    rank: 1,
    order: 0,
    coreNotes: `# Termochemia i Kinetyka Chemiczna — Matura Rozszerzona CKE

## 1. Termochemia i Entalpia Reakcji
- Reakcja egzotermiczna (oddawanie ciepła do otoczenia, $\\Delta H < 0$).
- Reakcja endotermiczna (pobieranie ciepła z otoczenia, $\\Delta H > 0$).
- **Prawo Hessa**: Standardowa entalpia reakcji jest sumą standardowych entalpii tworzenia produktów pomniejszoną o sumę entalpii tworzenia substratów:
  $$\\Delta H_r^\\circ = \\sum n \\Delta H_t^\\circ(\\text{produkty}) - \\sum m \\Delta H_t^\\circ(\\text{substraty})$$
  *(Pamiętaj: standardowa entalpia tworzenia pierwiastków w stanach podstawowych wynosi 0!)*

## 2. Kinetyka Chemiczna
- Równanie kinetyczne reakcji $aA + bB \\to C$:
  $$v = k [A]^a [B]^b$$
  gdzie $k$ to stała szybkości reakcji zależna od temperatury (równanie Arrheniusa: $k = A e^{-E_a / RT}$).
- Czynniki przyspieszające reakcję: Wzrost stężenia substratów, wzrost temperatury (reguła van 't Hoffa: wzrost o 10°C zwiększa szybkość 2–4 razy), stopień rozdrobnienia, obecność katalizatora (obniża energię aktywacji $E_a$).

## 3. Równowaga Chemiczna i Reguła Przekory
- Dla reakcji $aA + bB \\rightleftharpoons cC + dD$ stała równowagi stężeniowej:
  $$K_c = \\frac{[C]^c [D]^d}{[A]^a [B]^b}$$
- **Reguła przekory Le Chateliera-Brauna**: Układ w stanie równowagi reaguje na bodziec zewnętrzny tak, aby zminimalizować jego skutki:
  - Podwyższenie temperatury $\\implies$ przesunięcie w stronę reakcji endotermicznej ($\\Delta H > 0$).
  - Zwiększenie ciśnienia $\\implies$ przesunięcie w stronę mniejszej liczby moli gazów.
  - Usunięcie produktu $\\implies$ przesunięcie równowagi w prawo.

## 4. Prawo Hessa i Standardowa Entalpia Reakcji
- **Standardowa entalpia tworzenia ($\Delta H_{tw}^\circ$)**: Zmiana entalpii towarzysząca syntezie 1 mola danego związku chemicznego z pierwiastków w ich najbardziej trwałych stanach termodynamicznych w warunkach standardowych ($298{,}15\text{ K}, 10^5\text{ Pa}$). Entalpia tworzenia pierwiastków w stanie podstawowym wynosi z definicji $0\text{ kJ/mol}$.
- **Prawo Hessa**: Standardowy efekt cieplny reakcji chemicznej nie zależy od drogi przemiany, a jedynie od stanu początkowego i końcowego:
  $$\Delta H_r^\circ = \sum n \cdot \Delta H_{tw}^\circ(\text{produktów}) - \sum m \cdot \Delta H_{tw}^\circ(\text{substratów})$$
- **Równanie Arrheniusa i energia aktywacji**:
  $$k = A \cdot e^{-\frac{E_a}{RT}}$$
  Wzrost temperatury gwałtownie zwiększa stałą szybkości reakcji $k$, powiększając frakcję cząsteczek posiadających energię zderzenia większą lub równą energii aktywacji $E_a$.

## 5. Przesunięcie Stanu Równowagi (Reguła Le Chateliera-Brauna)
- **Wpływ temperatury**:
  - Dla reakcji egzotermicznej ($\Delta H < 0$): Ogrzanie układu przesuwa równowagę w stronę substratów (w lewo), stała $K$ maleje.
  - Dla reakcji endotermicznej ($\Delta H > 0$): Ogrzanie przesuwa równowagę w stronę produktów (w prawo), stała $K$ rośnie.
- **Wpływ ciśnienia (dla gazów)**: Wzrost ciśnienia przesuwa równowagę w stronę mniejszej sumarycznej liczby moli reagentów gazowych.
- **Katalizator**: Nie przesuwa stanu równowagi ani nie zmienia stałej $K$; przyspiesza w jednakowym stopniu reakcję wprost i reakcję odwrotną, skracając czas osiągnięcia stanu równowagi.`,
    reviewPrompts: `# Kinetyka i Równowaga — Zadania Maturalne
1. Dla reakcji syntezy amoniaku: $N_{2(g)} + 3H_{2(g)} \\rightleftharpoons 2NH_{3(g)}, \\Delta H = -92\\text{ kJ}$. Określ, jak wpłynie na wydajność amoniaku: a) wzrost temperatury, b) wzrost ciśnienia, c) dodanie katalizatora żelazowego.
2. Oblicz entalpię spalania etanu na podstawie standardowych entalpii tworzenia $CO_2$, $H_2O_{(c)}$ oraz $C_2H_6$.
3. Oblicz standardową entalpię spalania metanu do gazowego $CO_2$ i ciekłej $H_2O$, dysponując standardowymi entalpiami tworzenia: $\Delta H_{tw}^\circ(CH_4) = -74{,}8\text{ kJ/mol}$, $\Delta H_{tw}^\circ(CO_2) = -393{,}5\text{ kJ/mol}$, $\Delta H_{tw}^\circ(H_2O_{(c)}) = -285{,}8\text{ kJ/mol}$.
4. Do naczynia wprowadzono $2\text{ mole } SO_2$ i $1\text{ mol } O_2$. Po ustaleniu się stanu równowagi $2SO_2 + O_2 \rightleftharpoons 2SO_3$ w temperaturze $T$ stwierdzono obecność $1{,}6\text{ mola } SO_3$. Oblicz stałą równowagi $K_c$ wiedząc, że objętość naczynia wynosiła $2{,}0\text{ dm}^3$.`,
  },
  {
    id: 'chem-roztwory',
    title: 'Roztwory Wodne, pH, Iloczyn Rozpuszczalności i Hydroliza',
    category: 'Chemia Roztworów',
    description:
      'Stężenie procentowe i molowe, dysocjacja Ostwalda, iloczyn jonowy wody, pH i pOH, hydroliza soli i roztwory buforowe w zadaniach CKE.',
    rank: 1,
    order: 1,
    coreNotes: `# Roztwory Wodne i Równowagi Jonowe — CKE

## 1. Stężenia Roztworów i Przeliczanie
- Stężenie procentowe: $C_p = \\frac{m_s}{m_r} \\times 100\\%$.
- Stężenie molowe: $C_m = \\frac{n}{V_r} = \\frac{m_s}{M \\cdot V_r}$.
- Wzór na przeliczanie stężeń z gęstością roztworu $d$ [g/dm³]:
  $$C_m = \\frac{C_p \\cdot d}{100\\% \\cdot M}$$

## 2. Dysocjacja Elektrolityczna i Prawo Rozcieńczeń Ostwalda
- Stopień dysocjacji: $\\alpha = \\frac{C_{zdisocjowane}}{C_0}$.
- Prawo Ostwalda: $K = \\frac{\\alpha^2 C_0}{1 - \\alpha}$. Gdy $\\alpha < 0{,}05$ (lub $\\frac{C_0}{K} \\ge 400$), stosujemy uproszczenie: $K = \\alpha^2 C_0 \\implies \\alpha = \\sqrt{\\frac{K}{C_0}}$.

## 3. Wykładnik Wodorowy (pH) i Iloczyn Jonowy Wody
- Woda w temp. 25°C: $K_w = [H^+][OH^-] = 10^{-14} \\implies \\text{pH} + \\text{pOH} = 14$.
- Obliczanie pH kwasów mocnych ($[H^+] = C_0$) i słabych ($[H^+] = \\sqrt{K_a \\cdot C_0}$).

## 4. Hydroliza Soli i Bufory
- Sól mocnego kwasu i słabej zasady (np. $NH_4Cl$): Hydroliza kationowa, odczyn kwasowy ($\text{pH} < 7$).
- Sól słabego kwasu i mocnej zasady (np. $CH_3COONa$): Hydroliza anionowa, odczyn zasadowy ($\text{pH} > 7$).
- **Roztwory buforowe**: Mieszanina słabego kwasu i jego soli (bufor octanowy) lub słabej zasady i jej soli (bufor amonowy) — utrzymują stałe pH przy dodatku niewielkich ilości mocnych kwasów lub zasad.
- **Iloczyn rozpuszczalności ($K_{so}$)**: Warunek strącenia osadu dla soli $A_m B_n$: iloczyn stężeń jonów w roztworze $I > K_{so}$.

## 4. Teoria Brønsteda-Lowry'ego i Równowagi Jonowe
- Kwas Brønsteda: donor protonu ($H^+$). Zasada Brønsteda: akceptor protonu.
- **Sprzężona para kwas-zasada**: Różnią się dokładnie o jeden proton $H^+$:
  $$\\underbrace{CH_3COOH}_{\text{kwas}_1} + \\underbrace{H_2O}_{\text{zasada}_2} \rightleftharpoons \\underbrace{CH_3COO^-}_{\text{zasada}_1} + \\underbrace{H_3O^+}_{\text{kwas}_2}$$
- **Prawo rozcieńczeń Ostwalda**: Dla słabego jednoprotonowego kwasu o stężeniu $C_0$ i stopniu dysocjacji $\alpha$:
  $$K_a = \frac{\alpha^2 C_0}{1 - \alpha}$$
  Gdy $\alpha < 0{,}05$ (lub $\frac{C_0}{K_a} \ge 400$), stosujemy wzór uproszczony:
  $$K_a \approx \alpha^2 C_0 \implies \alpha = \sqrt{\frac{K_a}{C_0}}, \quad [H^+] = \sqrt{K_a \cdot C_0}, \quad pH = -\log\sqrt{K_a \cdot C_0}$$

## 5. Roztwory Buforowe i Iloczyn Rozpuszczalności
- **Roztwór buforowy**: Mieszanina słabego kwasu i soli tego kwasu z mocną zasadą (bufor octanowy $CH_3COOH/CH_3COONa$) lub słabej zasady i soli z mocnym kwasem (bufor amonowy $NH_3 \cdot H_2O / NH_4Cl$).
- **Równanie Hendersona-Hasselbalcha**:
  $$pH = pK_a + \log\frac{[A^-]}{[HA]}$$
  Utrzymuje niemal stałe pH przy dodaniu niewielkich ilości mocnego kwasu lub mocnej zasady oraz przy rozcieńczaniu.
- **Iloczyn rozpuszczalności ($K_{so}$)**: Dla trudno rozpuszczalnej soli $M_m X_n \rightleftharpoons m M^{n+} + n X^{m-}$:
  $$K_{so} = [M^{n+}]^m \cdot [X^{m-}]^n$$
  Osad wytrąca się, gdy iloczyn stężeń jonów w roztworze przekracza wartość $K_{so}$ ($I_s > K_{so}$).`,
    reviewPrompts: `# Roztwory i pH — Zadania Egzaminacyjne CKE
1. Oblicz pH 0,05-molowego roztworu kwasu mrówkowego ($HCOOH$) o stałej kwasowości $K_a = 1{,}8 \\times 10^{-4}$.
2. Czy po zmieszaniu równych objętości roztworu $BaCl_2$ o stężeniu $0{,}002\\text{ mol/dm}^3$ i roztworu $Na_2SO_4$ o stężeniu $0{,}0004\\text{ mol/dm}^3$ wytrąci się osad $BaSO_4$ ($K_{so} = 1{,}1 \\times 10^{-10}$)?
3. Oblicz pH $0{,}05\text{ mol/dm}^3$ roztworu kwasu mrówkowego ($HCOOH$), którego stała dysocjacji wynosi $K_a = 1{,}8 \times 10^{-4}$.
4. Do $500\text{ cm}^3$ $0{,}02\text{ mol/dm}^3$ roztworu $AgNO_3$ dodano $500\text{ cm}^3$ $0{,}001\text{ mol/dm}^3$ roztworu $NaCl$. Odpowiedz z uzasadnieniem rachunkowym, czy wytrąci się osad $AgCl$, jeżeli $K_{so}(AgCl) = 1{,}8 \times 10^{-10}$.`,
  },

  // Rank 2
  {
    id: 'chem-redoks',
    title: 'Reakcje Utleniania-Redukcji i Elektrochemia',
    category: 'Elektrochemia',
    description:
      'Stopnie utlenienia, bilans jonowo-elektronowy, potencjały standardowe, ogniwo Daniella, siła elektromotoryczna (SEM) i elektroliza soli.',
    rank: 2,
    order: 0,
    coreNotes: `# Redoks i Elektrochemia — Matura Rozszerzona CKE

## 1. Bilansowanie Reakcji Redoks Metodą Jonowo-Elektronową
- **Utlenianie**: Proces oddawania elektronów, reduktor podwyższa swój stopień utlenienia.
- **Redukcja**: Proces przyłączania elektronów, utleniacz obniża swój stopień utlenienia.
- Bilansowanie w środowisku kwasowym ($H^+ / H_2O$) oraz zasadowym ($OH^- / H_2O$):
  - Przykład manganu:
    - Środowisko kwasowe: $MnO_4^- + 8H^+ + 5e^- \\to Mn^{2+} + 4H_2O$ (odbarwienie z fioletowego na bezbarwny).
    - Środowisko obojętne: $MnO_4^- + 2H_2O + 3e^- \\to MnO_{2\\downarrow} + 4OH^-$ (brunatny osad).
    - Środowisko silnie zasadowe: $MnO_4^- + e^- \\to MnO_4^{2-}$ (zielony roztwór).

## 2. Szereg Napięciowy Metali i Ogniwa Galwaniczne
- Metale o niższym potencjale standardowym $E^\\circ$ są silniejszymi reduktorami i wypierają metale o wyższym $E^\\circ$ z roztworów ich soli.
- Metale nieszlachetne ($E^\\circ < 0$) wypierają wodór z kwasów nieutleniających.
- **Ogniwo Galwaniczne (np. Daniella $Zn | Zn^{2+} || Cu^{2+} | Cu$)**:
  - Anoda (biegun ujemny, utlenianie): $Zn \\to Zn^{2+} + 2e^-$.
  - Katoda (biegun dodatni, redukcja): $Cu^{2+} + 2e^- \\to Cu$.
  - Siła Elektromotoryczna: $\\text{SEM} = E_{\\text{katody}}^\\circ - E_{\\text{anody}}^\\circ > 0$.

## 3. Elektroliza (Wymuszony Przepływ Prądu)
- W roztworze wodnym:
  - Na katodzie (biegun ujemny): Redukcja kationu metalu o $E^\\circ > -0{,}83\\text{ V}$ lub redukcja wody: $2H_2O + 2e^- \\to H_{2\\uparrow} + 2OH^-$.
  - Na anodzie (biegun dodatni): Utlenianie anionów beztlenowych ($Cl^-, Br^-$) lub utlenianie wody: $2H_2O \\to O_{2\\uparrow} + 4H^+ + 4e^-$ (dla anionów tlenowych $SO_4^{2-}, NO_3^-$).

## 4. Ogniwa Galwaniczne i Szereg Napięciowy Metali
- **Ogniwo Daniella**:
  - Anoda (biegun ujemny $-$): Utlenianie cynku: $Zn_{(s)} \to Zn^{2+}_{(aq)} + 2e^-$ ($E^\circ = -0{,}76\text{ V}$).
  - Katoda (biegun dodatni $+$): Redukcja miedzi: $Cu^{2+}_{(aq)} + 2e^- \to Cu_{(s)}$ ($E^\circ = +0{,}34\text{ V}$).
  - Siła elektromotoryczna (SEM):
    $$\text{SEM} = E_{\text{katody}}^\circ - E_{\text{anody}}^\circ = +0{,}34\text{ V} - (-0{,}76\text{ V}) = +1{,}10\text{ V}$$
  - Klucz roztworu (mostek solny z $KCl$ lub $KNO_3$): zamyka obwód elektryczny i utrzymuje elektroobojętność roztworów w obu półogniwach.

## 5. Prawa Elektrolizy Faradaya
- **I prawo Faradaya**: Masa substancji $m$ wydzielonej na elektrodzie jest wprost proporcjonalna do ładunku elektrycznego $Q = I \cdot t$ przepływającego przez elektrolit:
  $$m = \frac{M \cdot I \cdot t}{z \cdot F}$$
  Gdzie:
  - $M$ — masa molowa substancji $[\text{g/mol}]$.
  - $I$ — natężenie prądu $[\text{A}]$.
  - $t$ — czas trwania elektrolizy $[\text{s}]$.
  - $z$ — liczba elektronów wymienianych w reakcji elektrodowej (wartościowość).
  - $F$ — stała Faradaya: $F \approx 96485\text{ C/mol}$ (ładunek 1 mola elektronów).
- **Procesy na elektrodach obojętnych (Pt, C) w roztworach wodnych**:
  - Na katodzie: jony metali o potencjale $E^\circ > 0$ ($Cu^{2+}, Ag^+$) redukują się przed jonami wodoru. Metale bardzo aktywne ($E^\circ < -0{,}83\text{ V}$, np. $Na^+, K^+, Ca^{2+}$) nie wydzielają się z roztworów wodnych — redukcji ulega woda: $2H_2O + 2e^- \to H_2\\uparrow + 2OH^-$.
  - Na anodzie: jony beztlenowe ($Cl^-, Br^-, I^-$) utleniają się łatwiej niż woda. Reszty kwasów tlenowych ($SO_4^{2-}, NO_3^-$) nie ulegają utlenieniu — utlenia się woda: $2H_2O \to O_2\\uparrow + 4H^+ + 4e^-$.`,
    reviewPrompts: `# Reakcje Redoks — Zadania Maturalne CKE
1. Zbilansuj metodą jonowo-elektronową reakcję: $K_2Cr_2O_7 + FeSO_4 + H_2SO_4 \\to Cr_2(SO_4)_3 + Fe_2(SO_4)_3 + K_2SO_4 + H_2O$. Wskaż utleniacz i reduktor.
2. Zapisz schemat ogniwa zbudowanego z półogniwa cynkowego i srebrnego oraz oblicz jego standardową siłę elektromotoryczną SEM.
3. Podczas elektrolizy wodnego roztworu siarczanu(VI) miedzi(II) z zastosowaniem elektrod platynowych przez elektrolizer płynął prąd o natężeniu $2{,}5\text{ A}$ w czasie $3860\text{ s}$. Oblicz masę miedzi wydzielonej na katodzie oraz objętość tlenu wydzielonego na anodzie w warunkach normalnych.
4. Dobierz współczynniki w równaniu reakcji redoks metodą bilansu jonowo-elektronowego:
   $$KMnO_4 + Na_2SO_3 + H_2SO_4 \to MnSO_4 + Na_2SO_4 + K_2SO_4 + H_2O$$
   Wskaż utleniacz, reduktor oraz procesy utleniania i redukcji.`,
  },
  {
    id: 'chem-nieorganiczna',
    title: 'Systematyka i Reakcje Związków Nieorganicznych',
    category: 'Chemia Nieorganiczna',
    description:
      'Tlenki amfoteryczne (Al2O3, ZnO, Cr2O3), właściwości pierwiastków bloków s, p, d, związki kompleksowe i reakcje strąceniowe.',
    rank: 2,
    order: 1,
    coreNotes: `# Chemia Nieorganiczna — Matura Rozszerzona CKE

## 1. Charakter Chemiczny Tlenków
- **Tlenki kwasowe**: Reagują z zasadami, dając sole (np. $SO_2, SO_3, P_4O_{10}, CO_2$).
- **Tlenki zasadowe**: Reagują z kwasami, dając sole (np. $Na_2O, CaO, BaO, FeO$).
- **Tlenki obojętne**: Nie reagują z kwasami ani zasadami ($CO, NO, N_2O$).
- **Tlenki amfoteryczne**: Reagują zarówno z mocnymi kwasami, jak i mocnymi zasadami, nie reagują z wodą:
  - Przykłady: $Al_2O_3, ZnO, Cr_2O_3, BeO, PbO, CuO$.
  - Reakcja $Al_2O_3$ z zasadą:
    $$Al_2O_3 + 2NaOH + 3H_2O \\to 2Na[Al(OH)_4] \\quad (\\text{tetrahydroksoglinian sodu})$$

## 2. Pierwiastki Bloku d (Metale Przejściowe)
- **Chrom ($Cr$)**:
  - $Cr^{2+}$: Silne właściwości redukujące (błękitny).
  - $Cr^{3+}$: Amfoteryczny ($Cr(OH)_3$ szarozielony osad rozpuszczalny w nadmiarze $NaOH$ z utworzeniem zielonego $[Cr(OH)_6]^{3-}$).
  - $Cr^{VI}$: Równowaga chromianowo-dichromianowa zależna od pH:
    $$2CrO_4^{2-} (\\text{żółty}) + 2H^+ \\rightleftharpoons Cr_2O_7^{2-} (\\text{pomarańczowy}) + H_2O$$
- **Miedź ($Cu$)**: Wodorotlenek miedzi(II) $Cu(OH)_2$ (niebieski osad galaretowaty) — odczynnik do wykrywania alkoholi polihydroksylowych (szafirowy kompleks) i cukrów redukujących (próba Trommera).

## 3. Związki Amfoteryczne i Hydroksokompleksy
Tlenki i wodorotlenki pierwiastków takich jak $Al, Zn, Cr(III), Be, Sn, Pb$ wykazują właściwości amfoteryczne — reagują zarówno z mocnymi kwasami, jak i z mocnymi zasadami:
- **Tlenek glinu ($Al_2O_3$)**:
  - Reakcja z kwasem: $Al_2O_3 + 6HCl \to 2AlCl_3 + 3H_2O$
  - Reakcja z zasadą: $Al_2O_3 + 2NaOH + 3H_2O \to 2Na[Al(OH)_4]$ (tetrahydroksoglinian sodu)
- **Wodorotlenek cynku ($Zn(OH)_2$)**:
  - Z kwasem: $Zn(OH)_2 + 2H^+ \to Zn^{2+} + 2H_2O$
  - Z zasadą: $Zn(OH)_2 + 2OH^- \to [Zn(OH)_4]^{2-}$ (jon tetrahydroksocynkanowy)

## 4. Chemia Chromu i Manganu na Różnych Stopniach Utlenienia
- **Mangan**:
  - $Mn^{VII}$ ($MnO_4^-$, fioletowy): silny utleniacz:
    - Środowisko kwasowe ($H^+$): redukcja do $Mn^{2+}$ (bezbarwny/bladoróżowy).
    - Środowisko obojętne lub słabo zasadowe: redukcja do $MnO_2$ (brunatny osad tlenku manganu(IV)).
    - Środowisko silnie zasadowe ($OH^-$): redukcja do $MnO_4^{2-}$ (zielony jon manganianowy(VI)).
- **Chrom**:
  - Równowaga chromianowo-dichromianowa zależna od pH roztworu:
    $$2CrO_4^{2-} \text{ (żółty)} + 2H^+ \rightleftharpoons Cr_2O_7^{2-} \text{ (pomarańczowy)} + H_2O$$
    Zakwaszenie środowiska przesuwa równowagę ku barwie pomarańczowej; alkalizacja ku żółtej.
  - Właściwości $Cr(OH)_3$: szarozielony galaretowaty osad o charakterze amfoterycznym:
    $$Cr(OH)_3 + 3OH^- \to [Cr(OH)_6]^{3-} \text{ (szmaragdowozielony heksahydroksochromian(III))}$$
    Utlenianie $Cr(III)$ w środowisku alkalicznym wodą utlenioną ($H_2O_2$): powstaje żółty roztwór jonów $CrO_4^{2-}$.

## 5. Działanie Kwasów Utleniających na Metale
- Stężony i rozcieńczony kwas azotowy(V) oraz stężony kwas siarkowy(VI) reagują z metalami leżącymi za wodorem w szeregu napięciowym ($Cu, Ag, Hg$) bez wydzielania wodoru cząsteczkowego:
  - $Cu + 4HNO_{3\text{ (stęż.)}} \to Cu(NO_3)_2 + 2NO_2\\uparrow \text{ (brunatny gaz)} + 2H_2O$
  - $3Cu + 8HNO_{3\text{ (rozc.)}} \to 3Cu(NO_3)_2 + 2NO\\uparrow \text{ (bezbarwny gaz utleniający się w powietrzu do } NO_2) + 4H_2O$
  - $Cu + 2H_2SO_{4\text{ (stęż.)}} \\xrightarrow{\Delta} CuSO_4 + SO_2\\uparrow \text{ (gaz o duszącym zapachu)} + 2H_2O$
- **Pasywacja**: Na zimno żelazo ($Fe$), glin ($Al$) i chrom ($Cr$) ulegają pasywacji w stężonym $HNO_3$ i stężonym $H_2SO_4$ (tworzenie szczelnej warstewki tlenkowej chroniącej przed dalszym roztwarzaniem).`,
    reviewPrompts: `# Chemia Nieorganiczna — Doświadczenia Chemiczne CKE
1. Zaprojektuj doświadczenie pozwalające udowodnić amfoteryczny charakter wodorotlenku cynku $Zn(OH)_2$. Zapisz obserwacje i równania reakcji w formie jonowej skróconej.
2. Jak zmieni się barwa roztworu chromianu(VI) potasu po dodaniu kwasu siarkowego(VI)? Odpowiedź uzasadnij równaniem reakcji.
3. Przedstaw za pomocą równań reakcji w formie jonowej skróconej doświadczenie potwierdzające amfoteryczny charakter wodorotlenku chromu(III).
4. Zaproponuj ciąg reakcji chemicznych pozwalający na odróżnienie roztworu siarczanu(VI) żelaza(II) od roztworu siarczanu(VI) żelaza(III) za pomocą wodnego roztworu wodorotlenku sodu oraz tiocyjanianu potasu ($KSCN$).`,
  },

  // Rank 3
  {
    id: 'chem-weglowodory',
    title: 'Węglowodory i Mechanizmy Reakcji Organicznych',
    category: 'Chemia Organiczna',
    description:
      'Alkany (SR), alkeny (AE, reguła Markownikowa), alkiny, arenów (SE, kierujący wpływ podstawników I i II rodzaju) oraz izomeria cis/trans.',
    rank: 3,
    order: 0,
    coreNotes: `# Węglowodory i Mechanizmy Reakcji — CKE

## 1. Alkany i Mechanizm Substytucji Rodnikowej ($S_R$)
- Chlorowanie metanu w obecności światła ($h\\nu$):
  1. *Inicjacja*: Homolityczny rozpad cząsteczki chloru na dwa rodniki: $Cl_2 \\xrightarrow{h\\nu} 2Cl^\\bullet$.
  2. *Propagacja*: $CH_4 + Cl^\\bullet \\to CH_3^\\bullet + HCl$, a następnie $CH_3^\\bullet + Cl_2 \\to CH_3Cl + Cl^\\bullet$.
  3. *Terminacja*: Rekombinacja rodników, np. $CH_3^\\bullet + CH_3^\\bullet \\to C_2H_6$.

## 2. Alkeny, Alkiny i Addycja Elektrofilowa ($A_E$)
- Odróżnianie węglowodorów nienasyconych od nasyconych: Odbarwienie wody bromowej ($Br_2/H_2O$) oraz roztworu $KMnO_4$.
- **Reguła Markownikowa**: W addycji cząsteczek typu $HX$ lub $H_2O$ do niesymetrycznego alkenu atom wodoru przyłącza się do atomu węgla o większej liczbie związanych atomów wodoru:
  $$CH_3-CH=CH_2 + HBr \\to CH_3-CH(Br)-CH_3 \\quad (2\\text{-bromopropan})$$
- Addycja wody do alkinów (reakcja Kuczerowa): Addycja w obecności $Hg^{2+}/H^+$. Z etynu powstaje aldehyd octowy, z wyższych alkinów ketony (przejściowy enol ulega tautomerii keto-enolowej).

## 3. Areny i Substytucja Elektrofilowa ($S_E$)
- Pierścień benzenowy posiada zdelokalizowany sekstet elektronów $\\pi$.
- Reakcje: Nitrowanie ($HNO_3/H_2SO_4$), bromowanie ($Br_2/FeBr_3$), alkilowanie i acylowanie Friedela-Craftsa.
- **Kierujący wpływ podstawników**:
  - *I rodzaju* (aktywujące, orto-/para-kierujące): $-OH, -NH_2, -CH_3$ oraz słabo dezaktywujące chlorowce $-Cl, -Br$.
  - *II rodzaju* (dezaktywujące, meta-kierujące): $-NO_2, -COOH, -CHO, -SO_3H$.

## 3. Mechanizmy Reakcji w Chemii Węglowodorów
- **Substytucja rodnikowa ($S_R$) w alkanach**:
  - *Inicjacja*: Homolityczny rozpad cząsteczki chloru/bromu pod wpływem światła kwantów $h\nu$: $Cl_2 \\xrightarrow{h\nu} 2Cl^\bullet$.
  - *Propagacja*: Atak rodnika chlorowego na cząsteczkę węglowodoru: $CH_4 + Cl^\bullet \to CH_3^\bullet + HCl$, a następnie $CH_3^\bullet + Cl_2 \to CH_3Cl + Cl^\bullet$.
  - *Terminacja*: Rekombinacja rodników wygaszająca reakcję łańcuchową: $Cl^\bullet + Cl^\bullet \to Cl_2$, $CH_3^\bullet + CH_3^\bullet \to C_2H_6$.
  - Trwałość rodników alkilowych: III-rzędowy > II-rzędowy > I-rzędowy (stąd selektywność bromowania propanu do 2-bromopropanu).
- **Addycja elektrofilowa ($A_E$) w alkenach i alkinach**:
  - Heterolityczny rozpad cząsteczki odczynnika ($Br^\delta+ - Br^\delta-$) indukowany przez chmurę elektronów $\pi$.
  - Atak elektrofila $Br^+$ z utworzeniem cyklicznego jonu bromoniowego lub karbokationu, a następnie atak nukleofila $Br^-$ od przeciwnej strony (stereoselektywna addycja *anti*).
  - **Reguła Markownikowa**: W addycji cząsteczek niesymetrycznych ($HX, H_2O$) atom wodoru przyłącza się do tego atomu węgla przy wiązaniu wielokrotnym, który jest związany z większą liczbą atomów wodoru (wynika to z wyższej trwałości powstającego bardziej podstawionego karbokationu).
- **Substytucja elektrofilowa ($S_E$) w arenach**:
  - Tworzenie kompleksu $\pi$, a następnie kompleksu $\sigma$ (kationu benzenoniowego) z utratą aromatyczności, i wreszcie oderwanie protonu odtwarzające sekstet aromatyczny.
  - Wpływ podstawników:
    - Podstawniki I rodzaju (aktywujące pierścień aromatyczny mezomerycznie $+M$): $-OH, -NH_2, -OCH_3, -CH_3$ — kierują kolejny podstawnik w pozycje *orto* i *para*.
    - Podstawniki II rodzaju (deaktywujące pierścień $-M$ lub $-I$): $-NO_2, -COOH, -CHO, -SO_3H$ — kierują kolejny podstawnik w pozycję *meta*.`,
    reviewPrompts: `# Węglowodory — Mechanizmy i Zadania CKE
1. Zapisz schemat i nazwy produktów addycji bromowodoru do 2-metylobut-2-enu ze wskazaniem produktu głównego wg reguły Markownikowa.
2. Wyjaśnij, dlaczego nitrowanie toluenu zachodzi w łagodniejszych warunkach niż nitrowanie benzenu i wskaż powstające izomery.
3. Przedstaw dwuetapowy mechanizm addycji elektrofilowej chlorowodoru ($HCl$) do propenu i uzasadnij, dlaczego głównym produktem reakcji jest 2-chloropropan, a nie 1-chloropropan.
4. Zapisz równania reakcji nitrowania benzenu, toluenu oraz nitrobenzenu mieszaniną nitrującą ($HNO_3 + H_2SO_4$), podając nazwy systematyczne głównych produktów organicznych i określając względną łatwość zachodzenia tych reakcji.`,
  },
  {
    id: 'chem-organiczna-pochodne',
    title: 'Pochodne Węglowodorów i Biocząsteczki',
    category: 'Chemia Organiczna',
    description:
      'Alkohole, fenole, aldehydy i ketony (Tollens, Trommer), kwasy karboksylowe, estry, aminy, aminokwasy, wiązanie peptydowe i cukry.',
    rank: 3,
    order: 1,
    coreNotes: `# Jedno- i Wielofunkcyjne Pochodne Węglowodorów — CKE

## 1. Alkohole i Fenole
- Alkohole I-, II- i III-rzędowe: Utlenianie łagodne ($CuO$ na gorąco):
  - Alkohol I-rzędowy $\\to$ aldehyd $\\to$ kwas karboksylowy.
  - Alkohol II-rzędowy $\\to$ keton.
  - Alkohol III-rzędowy nie ulega utlenieniu w tych warunkach.
- Próba jodoformowa: Wykrywanie ugrupowania $CH_3-CH(OH)-$ lub $CH_3-CO-$ (żółty osad $CHI_3$).
- Fenol: Wykazuje słabe właściwości kwasowe (reaguje z $NaOH$, nie reaguje z $NaHCO_3$), fioletowe zabarwienie z roztworem $FeCl_3$.

## 2. Aldehydy i Ketony — Identyfikacja Grupy Karbonylowej
- **Próba Tollensa (Lustra srebrnego)**: Redukcja odczynnika Tollensa $[Ag(NH_3)_2]^+$ w środowisku zasadowym przez aldehydy do metalicznego srebra $Ag^0$.
- **Próba Trommera**: Redukcja świeżo strąconego niebieskiego $Cu(OH)_2$ na gorąco przez aldehydy do ceglastoczerwonego tlenku miedzi(I) $Cu_2O_{\\downarrow}$. Ketony w tych próbach dają wynik negatywny (z wyjątkiem $\\alpha$-hydroksyketonów jak fruktoza).

## 3. Aminokwasy i Wiązanie Peptydowe
- Zwitterjon (jon obojnaczy) w punkcie izoelektrycznym ($pI$): $H_3N^+-CHR-COO^-$.
- Kondensacja dwóch aminokwasów z wydzieleniem cząsteczki wody tworzy wiązanie peptydowe:
  $$-CO-NH-$$
- Reakcja biuretowa: Wykrywanie wiązań peptydowych (minimum dwóch) za pomocą zasadowego roztworu $CuSO_4$ $\\to$ fioletowe zabarwienie.
- Reakcja ksantoproteinowa: Wykrywanie aminokwasów aromatycznych pod wpływem stężonego $HNO_3$ $\\to$ żółte zabarwienie.

## 3. Utlenianie Alkoholi i Próby Identyfikacyjne Związków Karbonylowych
- **Rzędowość alkoholi a podatność na utlenianie**:
  - *Alkohole I-rzędowe*: Łagodne utlenianie (np. $CuO, \Delta$) daje aldehydy ($R-CH_2OH + CuO \\xrightarrow{\Delta} R-CHO + Cu + H_2O$); silne utleniacze ($KMnO_4, K_2Cr_2O_7/H^+$) utleniają dalej do kwasów karboksylowych.
  - *Alkohole II-rzędowe*: Utleniają się wyłącznie do ketonów ($R_1-CH(OH)-R_2 + CuO \to R_1-CO-R_2 + Cu + H_2O$).
  - *Alkohole III-rzędowe*: Nie ulegają utlenieniu w łagodnych warunkach z zachowaniem szkieletu węglowego (brak atomu wodoru przy węglu z grupą $-OH$).
- **Reakcje charakterystyczne aldehydów (właściwości redukujące)**:
  - **Próba Tollensa (lustro srebrowe)**: Reakcja z amoniakalnym roztworem tlenku srebra:
    $$R-CHO + 2[Ag(NH_3)_2]^+ + 3OH^- \\xrightarrow{\Delta} R-COO^- + 2Ag\downarrow + 4NH_3 + 2H_2O$$
  - **Próba Trommera**: Reakcja ze świeżo strąconym wodorotlenkiem miedzi(II) na gorąco:
    $$R-CHO + 2Cu(OH)_2 + OH^- \\xrightarrow{\Delta} R-COO^- + Cu_2O\downarrow\text{ (ceglastoczerwony osad)} + 3H_2O$$
- **Próba jodoformowa**: Wykrywanie grupy metylokarbonylowej ($CH_3-C=O$) oraz alkoholi z ugrupowaniem $CH_3-CH(OH)-$ za pomocą jodu w środowisku zasadowym ($I_2 / NaOH$) z wytrąceniem żółtego krystalicznego osadu jodoformu ($CHI_3$).

## 4. Pochodne Kwasowe, Aminy i Związki Biologiczne
- **Reakcja estryfikacji Fischera**:
  Kwas karboksylowy + Alkohol $\\xrightleftharpoons{H^+}$ Ester + Woda (reakcja odwracalna, katalizowana mocnym kwasem mineralnym). Mechanizm addycji nukleofilowej cząsteczki alkoholu do węgla karbonylowego z eliminacją cząsteczki wody.
- **Aminokwasy i Punkt Izoelektryczny ($pI$)**:
  - Posiadają kwasową grupę karboksylową $-COOH$ i zasadową grupę aminową $-NH_2$. W roztworach wodnych występują w postaci jonów obojnaczych ($NH_3^+-CHR-COO^-$).
  - Przy $pH < pI$: dominują kationy ($NH_3^+-CHR-COOH$) wędrujące w polu elektrycznym ku katodzie.
  - Przy $pH > pI$: dominują aniony ($NH_2-CHR-COO^-$) wędrujące ku anodzie.
  - Przy $pH = pI$: ładunek wypadkowy cząsteczki wynosi 0, aminokwas nie migruje w polu elektroforetycznym.
- **Reakcje barwne białek**:
  - *Reakcja biuretowa*: Fioletowe zabarwienie ze świeżo strąconym $Cu(OH)_2$ w środowisku zasadowym — wykrywa obecność co najmniej dwóch wiązań peptydowych leżących blisko siebie.
  - *Reakcja ksantoproteinowa*: Żółte zabarwienie pod wpływem stężonego $HNO_3$ (przechodzące w pomarańczowe po dodaniu amoniaku) — wykrywa obecność aminokwasów z pierścieniami aromatycznymi (fenyloalanina, tyrozyna, tryptofan).`,
    reviewPrompts: `# Pochodne Węglowodorów — Doświadczenia i Zadania CKE
1. Zaprojektuj próbę probówkową pozwalającą na jednoznaczne odróżnienie propanalu od propanonu. Podaj obserwacje i równanie reakcji.
2. Zapisz wzór dipeptydu Ala-Gly w formie jonu obojnaczego w środowisku o pH równym jego punktowi izoelektrycznemu.
3. Zapisz równania reakcji chemicznych pozwalających na odróżnienie wodnego roztworu glukozy od wodnego roztworu sacharozy za pomocą próby Trommera przed i po przeprowadzeniu kwasowej hydrolizy.
4. Punkt izoelektryczny alaniny wynosi $pI = 6{,}0$. Przedstaw wzory jonów alaniny dominujących w roztworze o $pH = 2{,}0$ oraz w roztworze o $pH = 10{,}0$ i wskaż kierunek ich wędrówki podczas elektroforezy.`,
  },
];
