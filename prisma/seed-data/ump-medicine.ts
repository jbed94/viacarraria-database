import type { Course, SeedEdge } from './types.js';

export const umpMedicineEdges: SeedEdge[] = [
  // Rok 1 -> Rok 2
  { id: 'ump-anat-fizjo', source: 'ump-med-anatomia', target: 'ump-med-fizjologia' },
  { id: 'ump-histo-fizjo', source: 'ump-med-histologia', target: 'ump-med-fizjologia' },
  { id: 'ump-biofiz-fizjo', source: 'ump-med-biofizyka', target: 'ump-med-fizjologia' },
  { id: 'ump-histo-bioch', source: 'ump-med-histologia', target: 'ump-med-biochemia' },

  // Rok 2 -> Rok 3
  { id: 'ump-fizjo-patofiz', source: 'ump-med-fizjologia', target: 'ump-med-patofizjologia' },
  { id: 'ump-fizjo-patomorf', source: 'ump-med-fizjologia', target: 'ump-med-patomorfologia' },
  { id: 'ump-bioch-farma', source: 'ump-med-biochemia', target: 'ump-med-farmakologia' },
  { id: 'ump-immu-patomorf', source: 'ump-med-immunologia', target: 'ump-med-patomorfologia' },
  { id: 'ump-immu-mikro', source: 'ump-med-immunologia', target: 'ump-med-mikrobiologia' },

  // Rok 3 -> Rok 4
  { id: 'ump-patofiz-interna', source: 'ump-med-patofizjologia', target: 'ump-med-interna1' },
  { id: 'ump-farma-interna', source: 'ump-med-farmakologia', target: 'ump-med-interna1' },
  { id: 'ump-patomorf-chirurgia', source: 'ump-med-patomorfologia', target: 'ump-med-chirurgia1' },
  { id: 'ump-mikro-pediatria', source: 'ump-med-mikrobiologia', target: 'ump-med-pediatria' },
  { id: 'ump-interna-pediatria', source: 'ump-med-interna1', target: 'ump-med-pediatria' },

  // Rok 4 -> Rok 5
  { id: 'ump-interna-neuro', source: 'ump-med-interna1', target: 'ump-med-neurologia' },
  { id: 'ump-chirurgia-gineko', source: 'ump-med-chirurgia1', target: 'ump-med-ginekologia' },
  { id: 'ump-interna-psychiatria', source: 'ump-med-interna1', target: 'ump-med-psychiatria' },

  // Rok 5 -> Rok 6
  { id: 'ump-interna-sor', source: 'ump-med-interna1', target: 'ump-med-sor' },
  { id: 'ump-chirurgia-sor', source: 'ump-med-chirurgia1', target: 'ump-med-sor' },
  { id: 'ump-neuro-lek', source: 'ump-med-neurologia', target: 'ump-med-praktyka-lek' },
  { id: 'ump-gineko-lek', source: 'ump-med-ginekologia', target: 'ump-med-praktyka-lek' },
  { id: 'ump-sor-lek', source: 'ump-med-sor', target: 'ump-med-praktyka-lek' },
];

export const umpMedicineCourses: Course[] = [
  // Rok 1 (rank: 0)
  {
    id: 'ump-med-anatomia',
    title: 'Anatomia Prawidłowa i Topograficzna',
    category: 'Rok I',
    description:
      'Anatomia opisowa, czynnościowa i topograficzna układu kostno-stawowego, mięśniowego, naczyniowego i OUN w Zakładzie Anatomii Prawidłowej UMP.',
    rank: 0,
    order: 0,
    coreNotes: `# Anatomia Prawidłowa i Topograficzna — Wydział Lekarski UMP

## 1. Topografia Klatki Piersiowej i Unaczynienie Serca
- **Śródpiersie (Mediastinum)**:
  - Śródpiersie górne (powyżej kąta mostka Ludwiga na poziomie Th4/Th5): grasica/ciało tłuszczowe grasicy, żyły ramienno-głowowe, żyła główna górna (SVC), łuk aorty z trzema odgałęzieniami (pień ramienno-głowowy, tętnica szyjna wspólna lewa, tętnica podobojczykowa lewa), tchawica, przełyk, nerwy błędne (CN X) oraz nerwy przeponowe (C3-C5).
  - Śródpiersie przednie: więzadła mostkowo-osierdziowe, węzły chłonne.
  - Śródpiersie środkowe: osierdzie, serce, opuszka aorty, pień płucny dzielący się na tętnicę płucną prawą i lewą, ujścia czterech żył płucnych.
  - Śródpiersie tylne: przełyk z przednim i tylnym splotem przełykowym, aorta zstępująca piersiowa, przewód piersiowy (*ductus thoracicus* zbierający chłonkę z 3/4 ciała), żyła nieparzysta (*v. azygos*) uchodząca do SVC oraz żyła nieparzysta krótka (*v. hemiazygos*).
- **Unaczynienie Wieńcowe Serca**:
  - *Lewa tętnica wieńcowa (LCA)*: Odchodzi z lewej zatoki aorty; dzieli się na:
    - Gałąź międzykomorową przednią (LAD - Left Anterior Descending / gałąź zstępująca): zaopatruje przednią ścianę lewej komory, koniuszek serca oraz przednie 2/3 przegrody międzykomorowej. Najczęstsze miejsce zawału mięśnia sercowego (*artery of sudden death*).
    - Gałąź okalającą (LCx - Circumflex): zaopatruje boczną i tylną ścianę lewej komory.
  - *Prawa tętnica wieńcowa (RCA)*: Odchodzi z prawej zatoki aorty; biegnie w bruździe wieńcowej, oddaje gałąź węzła zatokowo-węzłowego (SA node w 60% przypadków), gałąź brzeżną prawą oraz gałąź międzykomorową tylną (PDA - Posterior Descending Artery) w sercu z dominacją prawostronną (85-90% populacji).

## 2. Neuroanatomia Ośrodkowego Układu Nerwowego i Krążenie Mózgowe
- **Koło Tętnicze Mózgu (Koło Willisa)**:
  - Zapewnia oboczne krążenie krwi w mózgowiu w przypadku zwężenia naczyń domózgowych.
  - Przedni układ naczyniowy: Tętnice szyjne wewnętrzne (ICA) $\\to$ tętnice przednie mózgu (ACA, zespolone nieparzystą tętnicą łączącą przednią ACoA) oraz tętnice środkowe mózgu (MCA - zaopatrujące większość powierzchni wypukłej półkul).
  - Tylny układ naczyniowy: Tętnice kręgowe (odchodzące od tętnic podobojczykowych) łączące się w tętnicę podstawną (*a. basilaris*) $\\to$ tętnice tylne mózgu (PCA).
  - Zespolenia przednio-tylne: Parzyste tętnice łączące tylne (PCoA) łączące ICA z PCA.
  - Najczęstsza lokalizacja tętniaków workowatych predysponujących do krwotoku podpajęczynówkowego (SAH): Rozwidlenie ACoA (ok. 30-35%), odejście PCoA od ICA (ok. 30%), rozwidlenie MCA (ok. 20%).
- **Drogi Ruchowe i Czuciowe**:
  - *Droga korowo-rdzeniowa (piramidowa)*: Rozpoczyna się w komórkach piramidowych Betza kory ruchowej (pole 4 Brodmanna zakrętu przedśrodkowego), przechodzi przez odnogę tylną torebki wewnętrznej (*capsula interna*), odnogi mózgu, most, piramidy rdzenia przedłużonego, gdzie 80-90% włókien ulega skrzyżowaniu (skrzyżowanie piramid) tworząc drogę korowo-rdzeniową boczną w sznurze bocznym rdzenia kręgowego.
  - *Sznury tylne (układ lemniskalny)*: Pęczek smukły (Golla - od kończyn dolnych) i pęczek klinowaty (Burdacha - od kończyn górnych) przewodzące czucie epikrytyczne, wibracji i propriocepcję. Przełączenie w jądrach sznurów tylnych rdzenia przedłużonego, skrzyżowanie wstęg przyśrodkowych i dojście do jądra brzusznego tylno-bocznego wzgórza (VPL).

## 3. Topografia Jamy Brzusznej i Miednicy
- **Przestrzeń Zaotrzewnowa (Spatium Retroperitoneale)**:
  - Nerki w powięzi Geroty otoczone torebką tłuszczową, nadnercza, moczowody.
  - Aorta brzuszna (rozwidlenie na poziomie L4 na tętnice biodrowe wspólne) oraz żyła główna dolna (IVC - powstaje na poziomie L5).
  - Trzustka: głowa objęta pętlą dwunastnicy, trzon i ogon dochodzący do wnęki śledziony w więzadle przeponowo-śledzionowym.
- **Odgałęzienia Trzewne Aorty Brzusznej**:
  - Pień trzewny (na poziomie Th12): tętnica żołądkowa lewa, wątrobowa wspólna (oddaje tętnicę żołądkowo-dwunastniczą i wątrobową właściwą), śledzionowa.
  - Tętnica krezkowa górna (SMA - na poziomie L1): unaczynia jelito cienkie (czcze i kręte), kątnicę z wyrostkiem robaczkowym, wstępnicę i 2/3 prawe poprzecznicy.
  - Tętnica krezkowa dolna (IMA - na poziomie L3): 1/3 lewa poprzecznicy, zstępnica, esica, górna część odbytnicy. Punkt Griffithsa i punkt Sudecka jako miejsca krytycznego unaczynienia obocznego.

## 4. Podręczniki Obowiązujące na UMP
1. Adam Bochenek, Michał Reicher — *Anatomia człowieka* (Tomy I–V). Państwowy Zakład Wydawnictw Lekarskich (PZWL).
2. Frank H. Netter — *Atlas anatomii człowieka*. Edra Urban & Partner.
3. Richard L. Drake, A. Wayne Vogl, Adam W. M. Mitchell — *Gray Anatomia. Podręcznik dla studentów* (Tomy I–III). Edra Urban & Partner.`,
    reviewPrompts: `# Anatomia Prawidłowa — Pytania Szpilkowe i Egzaminacyjne (UMP)

## Pytania Egzaminacyjne i Prosektoryjne
1. **Otwory Przepony i Poziomy Kręgowe**: Wymień struktury anatomiczne przechodzące przez trzy główne rozwory przepony:
   - Rozwór żyły głównej (poziom Th8)
   - Rozwór przełykowy (poziom Th10)
   - Rozwór aortowy (poziom Th12)
   Podaj unerwienie ruchowe i czuciowe przepony.
2. **Kanał Pachwinowy i Przepukliny**: Zdefiniuj 4 ściany kanału pachwinowego (przednia, tylna, górna, dolna), pierścień pachwinowy powierzchowny i głęboki. Czym różni się przepuklina pachwinowa skośna (wrodzona, przez pierścień głęboki bocznie od naczyń nabrzusznych dolnych) od prostej (nabyta, przez trójkąt Hesselbacha przyśrodkowo od naczyń nabrzusznych dolnych)?
3. **Porażenie Nerwu Promieniowego vs Łokciowego vs Pośrodkowego**:
   - Porażenie nerwu promieniowego w bruździe nerwu promieniowego kości ramiennej: objaw "ręki opadającej".
   - Porażenie nerwu pośrodkowego w zespole cieśni nadgarstka i na ramieniu: objaw "ręki błogosławiącej" oraz "ręki małpiej".
   - Porażenie nerwu łokciowego w bruździe nerwu łokciowego: objaw "ręki szponiastej" i test Fromenta.`,
  },
  {
    id: 'ump-med-histologia',
    title: 'Histologia, Embriologia i Cytofizjologia',
    category: 'Rok I',
    description:
      'Budowa mikroskopowa tkanek i narządów, embriogeneza, różnicowanie komórkowe i techniki immunohistochemiczne.',
    rank: 0,
    order: 1,
    coreNotes: `# Histologia z Embriologią — Katedra Histologii i Embriologii UMP

## 1. Tkanki Podstawowe i Połączenia Międzykomórkowe
- **Tkanka Nabłonkowa**:
  - Klasyfikacja morfologiczna: nabłonek jednowarstwowy płaski (śródbłonek naczyń *endothelium*, międzybłonek jam surowiczych *mesothelium*), jednowarstwowy sześcienny (kanaliki nerkowe), jednowarstwowy walcowaty (żołądek, jelita), wielorzędowy walcowaty urzęsiony (drogi oddechowe).
  - Nabłonki wielowarstwowe: płaski rogowaciejący (naskórek) i nierogowaciejący (jama ustna, przełyk, pochwa), przejściowy / urotelium (pęcherz moczowy — komórki baldaszkowate z płytkami białkowymi uroplakin).
  - Połączenia międzykomórkowe:
    - Obwódka zamykająca (*Zonula occludens / Tight Junction*): białka klaudyny i okludyny, uszczelnienie przestrzeni międzykomórkowej (bariera krew-mózg, nabłonek jelitowy).
    - Obwódka zwierająca (*Zonula adherens*): kadheryny powiązane z filamentami aktynowymi za pośrednictwem katenin.
    - Desmosom (*Macula adherens*): desmogleiny i desmokolliny zakotwiczone w płytce desmoplakinowej połączonej z filamentami pośrednimi (tonofilamentami cytokeratynowymi).
    - Połączenia szczelinowe (*Nexus / Gap Junctions*): heksamer koneksyn tworzący konekson, umożliwiający przepływ jonów ($Ca^{2+}$, cAMP) i sprzężenie elektryczne (kardiomiocyty).

## 2. Histologia Narządowa Układu Sercowo-Naczyniowego i Oddechowego
- **Ściana Naczynia Krwionośnego**:
  - *Tunica intima*: monowarstwa śródbłonka spoczywająca na błonie podstawnej, ciałka Weibela-Palade'a (magazynujące czynnik von Willebranda i P-selektynę).
  - *Tunica media*: komórki mięśniowe gładkie i włókna sprężyste. Tętnice typu sprężystego (aorta — amortyzacja fali tętna, efekt Windkessla) vs tętnice typu mięśniowego (regulacja oporu obwodowego).
  - *Tunica adventitia*: tkanka łączna włóknista, naczynia naczyń (*vasa vasorum*) oraz nerwy naczyniowe (*nervi vasorum*).
- **Pęcherzyk Płucny i Bariera Krew-Powietrze**:
  - Pneumocyty typu I: płaskie komórki pokrywające 95% powierzchni pęcherzyków, wyspecjalizowane w dyfuzji gazów.
  - Pneumocyty typu II: komórki sześcienne z ciałkami blaszkowatymi (*lamellar bodies*), syntetyzujące i wydzielające surfaktant płucny (dipalmitoilofosfatydylocholina DPPC, białka SP-A, SP-B, SP-C, SP-D) zapobiegający zapadaniu się pęcherzyków przy wydechu.
  - Bariera dyfuzyjna (grubość 0.2-0.5 $\\mu$m): monowarstwa surfaktantu, wypustka pneumocyta typu I, zrośnięte błony podstawne nabłonka i śródbłonka, komórka śródbłonka naczynia włosowatego.

## 3. Histologia Układu Moczowego i Bariera Filtracyjna Kłębuszka
- **Ciałko Nerkowe Malpighiego**:
  - Kłębuszek naczyniowy (*glomerulus*) zasilany tętniczką doprowadzającą (*vas afferens*) i drenowany tętniczką odprowadzającą (*vas efferens*).
  - Bariera filtracyjna kłębuszka nerkowego:
    1. Okienkowaty śródbłonek naczyń włosowatych (*fenestrated endothelium*, pory 70-90 nm).
    2. Gruba trójwarstwowa błona podstawna kłębuszka (GBM): *lamina rara interna*, *lamina densa* (kolagen typu IV), *lamina rara externa* (bogata w siarczan heparanu — ładunek ujemny zapobiegający filtracji albumin).
    3. Wypustki stopowate podocytów (pedicles) tworzące szczeliny filtracyjne z błonką szczelinową (*slit diaphragm*) zbudowaną z nefryny i podocyny.
  - Aparat przykłębuszkowy (JGA): komórki ziarniste JG (wydzielające reninę), plamka gęsta (*macula densa* kanalików dalszych — osmoreceptor stężenia $NaCl$) oraz komórki mezangium pozakłębuszkowego (komórki Goormaghtigha).

## 4. Embriologia i Pochodne Listków Zarodkowych
- Ektoderma: układ nerwowy (OUN i obwodowy z grzebieni nerwowych), naskórek, nabłonek rogówki i soczewka, szkliwo zębów, rdzeń nadnerczy.
- Mezoderma: szkielet osiowy i kończyn, mięśnie, układ sercowo-naczyniowy, krew i szpik, nerki i gonady, kora nadnerczy, śledziona.
- Endoderma: nabłonek układu pokarmowego i oddechowego, miąższ wątroby i trzustki, tarczyca, przytarczyce, pęcherz moczowy.

## 5. Literatura
1. Maciej Zabel — *Histologia. Podręcznik dla studentów medycyny*. Edra Urban & Partner.
2. Wojciech Sawicki, Jacek Malejczyk — *Histologia*. PZWL.
3. Anthony L. Mescher — *Junqueira. Histologia. Podręcznik i atlas*. Edra Urban & Partner.`,
    reviewPrompts: `# Histologia — Rozpoznawanie Preparatów i Pytania Egzaminacyjne

## Pytania Egzaminacyjne (UMP)
1. **Różnicowanie Mięśniówki pod Mikroskopem**: Podaj cechy morfologiczne pozwalające na pewne odróżnienie w barwieniu H&E kardiomiocytów mięśnia sercowego od włókien mięśnia szkieletowego (położenie jąder, widoczność wstawek, rozgałęzienia komórek, obecność triad vs diad).
2. **Histologia Węzła Chłonnego**: Opisz architekturę histologiczną węzła chłonnego: strefa korowa (grudki chłonne pierwotne i wtórne z ośrodkami rozmnażania — strefa grasiczoniezależna, komórki B), strefa przykorowa (strefa grasiczozależna, komórki T, żyłki z wysokim śródbłonkiem HEV) oraz pasma i zatoki rdzenne.
3. **Patologia Zespołu Nerczycowego na Poziomie Ultrastrukturalnym**: Wyjaśnij, jakie uszkodzenie w mikroskopie elektronowym obserwuje się w chorobie zmian minimalnych (MCD - Minimal Change Disease) oraz dlaczego prowadzi to do masywnego białkomoczu selektywnego (zniesienie ładunku ujemnego GBM i zlanie wyrostków stopowatych podocytów).`,
  },
  {
    id: 'ump-med-biofizyka',
    title: 'Biofizyka Medyczna',
    category: 'Rok I',
    description:
      'Termodynamika procesów biologicznych, potencjały spoczynkowe i czynnościowe, promieniowanie jonizujące, podstawy USG, RTG i MRI.',
    rank: 0,
    order: 2,
    coreNotes: `# Biofizyka Medyczna — Katedra Biofizyki UMP

## 1. Biofizyka Błon Komórkowych i Potencjały Bioelektryczne
- **Transport Błonowy**:
  - Dyfuzja prosta (I prawo Ficka: $J = -D \\frac{dc}{dx}$). Dyfuzja ułatwiona (kanały jonowe, nośniki uniport, symport, antyport).
  - Transport aktywny pierwotny (pompa sodowo-potasowa $Na^+/K^+$-ATPaza: eksport $3 Na^+$, import $2 K^+$, zużycie 1 cząsteczki ATP, charakter elektrogenny).
- **Potencjał Spoczynkowy Błony Komórkowej**:
  - Równanie Nernsta dla potencjału równowagowego pojedynczego jonu w temperaturze fizjologicznej 310 K (37°C):
    $$E_{ion} = \\frac{RT}{zF} \\ln \\frac{[ion]_{zew}}{[ion]_{wew}} \\approx \\frac{61{,}5}{z} \\log_{10} \\frac{[ion]_{zew}}{[ion]_{wew}} \\text{ [mV]}$$
    Dla $K^+$: ok. -90 mV; dla $Na^+$: ok. +60 mV.
  - Równanie Goldmana-Hodgkina-Katza (GHK) uwzględniające względne przepuszczalności jonowe $P_K : P_{Na} : P_{Cl}$:
    $$V_m = \\frac{RT}{F} \\ln \\left( \\frac{P_K [K^+]_o + P_{Na} [Na^+]_o + P_{Cl} [Cl^-]_i}{P_K [K^+]_i + P_{Na} [Na^+]_i + P_{Cl} [Cl^-]_o} \\right)$$
    W spoczynku $P_K \\gg P_{Na}$, stąd potencjał spoczynkowy neuronu wynosi ok. -70 mV.
- **Potencjał Czynnościowy**:
  - Depolaryzacja: Otwarcie bramkowanych napięciem kanałów sodowych $Na_v$, masywny napływ jonów sodu do wnętrza komórki.
  - Repolaryzacja: Inaktywacja kanałów $Na_v$ (bramka inaktywacyjna) i wolniejsze otwarcie napięciowo-zależnych kanałów potasowych $K_v$ (odpływ $K^+$).
  - Refrakcja bezwzględna (stan inaktywacji kanałów $Na_v$) i względna (hiperpolaryzacja następcza).

## 2. Hemodynamika Układu Krążenia
- Płyn nieniutonowski: Lepkość krwi zależy od gradientu prędkości ścinania i hematokrytu (zjawisko Fåhræusa-Lindqvista w mikrokrążeniu).
- **Równanie Ciągłości Strumienia i Prawo Poiseuille'a**:
  $$Q = S_1 v_1 = S_2 v_2 = \\text{const}, \\quad Q = \\frac{\\pi r^4 \\Delta P}{8 \\eta L}$$
  Opór naczyniowy $R = \\frac{8 \\eta L}{\\pi r^4}$. Zmniejszenie promienia naczynia o połowę ($r/2$) zwiększa opór hydrodynamiczny 16-krotnie ($2^4 = 16$).
- Liczba Reynoldsa $Re = \\frac{\\rho v d}{\\eta}$: przejście przepływu laminarnego w turbulentny ($Re > 2000-2300$), powstawanie szmerów naczyniowych i sercowych (szmery Korotkowa przy pomiarze ciśnienia).

## 3. Podstawy Fizyczne Obrazowania Medycznego
- **Promieniowanie Rentgenowskie (RTG i Tomografia Komputerowa CT)**:
  - Promieniowanie hamowania (*Bremsstrahlung*) oraz promieniowanie charakterystyczne lampy RTG.
  - Osłabienie wiązki: Prawo Lamberta-Beera $I = I_0 e^{-\\mu x}$. Efekt fotoelektryczny (dominuje dla niskich energii, kontrast kość/tkanka miękka zależny od $Z^3$) oraz rozpraszanie komptonowskie.
  - Skala Hounsfielda (HU): $HU = 1000 \\times \\frac{\\mu - \\mu_{woda}}{\\mu_{woda}}$. Powietrze: -1000 HU, woda: 0 HU, kość korowa: +1000 HU do +3000 HU.
- **Rezonans Magnetyczny (MRI)**:
  - Moment magnetyczny i spin protonów wodoru $^{1}H$. Precesja w silnym statycznym polu magnetycznym $B_0$ z częstotliwością Larmora: $\\omega_0 = \\gamma B_0$.
  - Impuls fal radiowych RF o częstotliwości rezonansowej odchyla wektor magnetyzacji.
  - Czasy relaksacji:
    - $T_1$ (relaksacja podłużna / spin-sieć): powrót magnetyzacji wzdłuż osi $Z$. Płyn mózgowo-rdzeniowy ciemny w $T_1$.
    - $T_2$ (relaksacja poprzeczna / spin-spin): zanik magnetyzacji w płaszczyźnie $XY$ wskutek defazowania spinów. Płyn mózgowo-rdzeniowy jasny w $T_2$.
- **Ultrasonografia (USG)**:
  - Zjawisko piezoelektryczne głowicy ultradźwiękowej (1-15 MHz).
  - Odbicie fali na granicy ośrodków o różnej impedancji akustycznej $Z = \\rho c$. Współczynnik odbicia $R = \\left(\\frac{Z_2 - Z_1}{Z_2 + Z_1}\\right)^2$.
  - Efekt Dopplera: przesunięcie częstotliwości $\\Delta f = \\frac{2 f_0 v \\cos \\theta}{c}$ do ilościowej oceny przepływu krwi w naczyniach.

## 4. Literatura
1. Feliks Jaroszyk (red.) — *Biofizyka. Podręcznik dla studentów*. Wydawnictwo Lekarskie PZWL (Profesor Jaroszyk był wieloletnim kierownikiem Katedry Biofizyki UMP!).
2. Russell K. Hobbie, Bradley J. Roth — *Intermediate Physics for Medicine and Biology*. Springer.`,
    reviewPrompts: `# Biofizyka Medyczna — Pytania Egzaminacyjne

## Pytania Kolokwialne (UMP)
1. **Równanie GHK i Hiperkaliemia**: W jaki sposób gwałtowny wzrost stężenia jonów potasu w osoczu ($[K^+]_o$ z 4.0 do 8.5 mmol/l) wpływa na spoczynkowy potencjał błonowy kardiomiocytów zgodnie z równaniem GHK? Wyjaśnij, dlaczego prowadzi to do inaktywacji kanałów sodowych i zatrzymania krążenia w rozkurczu.
2. **Prawo Poiseuille'a w Nadciśnieniu Tętniczym**: Oblicz procentowy wzrost oporu naczyniowego przy skurczu tętniczki oporowej zmniejszającym jej promień o 10% ($r_2 = 0.9 r_1$).
3. **Zasady Bezpieczeństwa w MRI**: Wyjaśnij fizyczny mechanizm powstawania sił translacyjnych i skręcających działających na ciała ferromagnetyczne w polu 3T oraz mechanizm oparzeń indukowanych prądami wirowymi w pętlach przewodzących.`,
  },
  {
    id: 'ump-med-fizjologia',
    title: 'Fizjologia Człowieka i Neurofizjologia',
    category: 'Rok II',
    description:
      'Fizjologia układu krążenia, oddychania, nerek, przewodu pokarmowego, endokrynologii i neurofizjologia wg podręcznika Konturka.',
    rank: 1,
    order: 0,
    coreNotes: `# Fizjologia Człowieka — Katedra Fizjologii UMP

## 1. Fizjologia Układu Krążenia i Cykl Pracy Serca
- **Cykl Pracy Serca (Diagram Wiggersa)**:
  1. Skurcz przedsionków (faza napełniania komór, załamek P w EKG, IV ton serca).
  2. Skurcz izowolumetryczny komór: Zamknięcie zastawek przedsionkowo-komorowych (mitralnej i trójdzielnej — I ton serca $S_1$). Wzrost ciśnienia w lewej komorze przy stałej objętości (wszystkie zastawki zamknięte) aż do przekroczenia ciśnienia rozkurczowego w aorcie (ok. 80 mmHg).
  3. Faza szybkiego i zredukowanego wyrzutu: Otwarcie zastawki aortalnej i pnia płucnego. Objętość wyrzutowa (SV - Stroke Volume, ok. 70 ml).
  4. Rozkurcz izowolumetryczny komór: Zamknięcie zastawek półksiężycowatych aorty i pnia płucnego (II ton serca $S_2$, wcięcie anakrotyczne na krzywej ciśnienia aortalnego).
  5. Faza szybkiego i zredukowanego napełniania komór: Otwarcie zastawek AV (III ton serca $S_3$ fizjologiczny u dzieci, patologiczny w niewydolności skurczowej lewej komory).
- **Regulacja Kurczliwości Serca**:
  - *Prawo Franka-Starlinga (Heterometryczna regulacja)*: Siła skurczu kardiomiocytów wzrasta wraz ze stopniem początkowego rozciągnięcia sarkomerów na koniec rozkurczu (obciążenie wstępne - *preload*, objętość końcoworozkurczowa EDV).
  - *Regulacja Homeometryczna (Inotropizm dodatni)*: Stymulacja receptorów $\\beta_1$-adrenergicznych przez noradrenalinę/adrenalinę $\\to$ aktywacja białka $G_s \\to$ wzrost cAMP $\\to$ kinaza białkowa A (PKA) fosforyluje kanały wapniowe typu L ($Ca_v1.2$) oraz fosfolamban (aktywacja pompy SERCA2a przyspieszająca rozkurcz — luzitropizm dodatni).
- **Rzut Serca (CO - Cardiac Output)**:
  $$CO = HR \\times SV \\approx 70\\text{ bpm} \\times 70\\text{ ml} \\approx 5\\text{ l/min}$$
  Wskaźnik sercowy $CI = CO / BSA \\approx 2.5 - 4.0\\text{ l/min/m}^2$.

## 2. Fizjologia Oddychania i Wymiana Gazowa
- **Mechanika Oddychania**:
  - Wdech: aktywny skurcz przepony i mięśni międzyżebrowych zewnętrznych, spadek ciśnienia w jamie opłucnej do -8 cm $H_2O$.
  - Wydech spokojny: proces bierny dzięki sprężystości płuc i klatki piersiowej.
  - Podatność płuc ($C = \\frac{\\Delta V}{\\Delta P}$): obniżona w zwłóknieniu płuc i obrzęku płuc, podwyższona w rozedmie.
- **Krzywa Dysocjacji Oksyhemoglobiny**:
  - Przesunięcie w prawo (efekt Bohra — ułatwione oddawanie tlenu w tkankach): wzrost $pCO_2$, spadek pH (kwasica), wzrost temperatury, wzrost stężenia 2,3-bisfosfoglicerynianu (2,3-BPG).
  - Przesunięcie w lewo (zwiększone powinowactwo hemoglobiny do tlenu): spadek $pCO_2$, zasadowica, hipotermia, spadek 2,3-BPG, obecność hemoglobiny płodowej HbF lub karboksyhemoglobiny (HbCO w zatruciu tlenkiem węgla).

## 3. Fizjologia Nerek i Gospodarka Wodno-Elektrolitowa
- **Wskaźnik Filtracji Kłębuszkowej (GFR)**: Normalnie 120-125 ml/min (ok. 180 l/dobę). Klirens inuliny jako złoty standard pomiaru GFR ($C = \\frac{U \\cdot V}{P}$). Klirens kreatyniny i wzór CKD-EPI.
- **Wzmacniacz Przeciwprądowy w Pętli Henlego**:
  - Ramię zstępujące: przepuszczalne dla wody (akwaporyny AQP1), nieprzepuszczalne dla jonów.
  - Grube ramię wstępujące: nieprzepuszczalne dla wody, aktywny kotransporter $Na^+-K^+-2Cl^-$ (NKCC2, cel działania diuretyków pętlowych np. furosemidu). Buduje hiperosmolarny gradient w rdzeniu nerki (do 1200 mOsm/kg $H_2O$).
- **Hormonalna Regulacja Objętości i Osmolalności**:
  - Wazopresyna (ADH / AVP): wydzielana z tylnego płata przysadki w odpowiedzi na wzrost osmolalności osocza (>285-290 mOsm/kg). Działa na receptory $V_2$ w cewkach zbiorczych, powodując wbudowanie akwaporyn AQP2 do błony szczytowej.
  - Układ RAA (Renina-Angiotensyna-Aldosteron): spadek perfuzji nerek stymuluje wydzielanie reniny $\\to$ konwersja angiotensynogenu do Ang I $\\to$ enzym ACE w śródbłonku płucnym przekształca Ang I w Ang II (silny wazokonstriktor, stymuluje wydzielanie aldosteronu w korze nadnerczy). Aldosteron zwiększa reabsorpcję $Na^+$ i wydalanie $K^+ / H^+$ w cewkach dalszych.

## 4. Literatura
1. Stanisław J. Konturek — *Fizjologia człowieka* (Tomy I–IV). Edra Urban & Partner.
2. William F. Ganong — *Fizjologia*. PZWL.
3. John E. Hall, Michael E. Hall — *Guyton and Hall Textbook of Medical Physiology* (14th Edition). Elsevier.`,
    reviewPrompts: `# Fizjologia Człowieka — Zagadnienia Egzaminacyjne

## Pytania Kolokwialne (UMP)
1. **Odruch z Baroreceptorów Tętniczych**: Wyjaśnij krok po kroku odpowiedź odruchową z baroreceptorów zatoki szyjnej (nerw IX) i łuku aorty (nerw X) na nagłą pionizację ciała (spadek ciśnienia tętniczego). Jak zmienia się aktywność układu współczulnego i przywspółczulnego w pniu mózgu (jądro pasma samotnego NTS)?
2. **Krzywa Dysocjacji Oksyhemoglobiny i Efekt Bohra**: Przedstaw fizjologiczne znaczenie przesunięcia krzywej dysocjacji hemoglobiny w prawo w pracujących mięśniach szkieletowych. Jakie czynniki biochemiczne odpowiadają za to zjawisko?
3. **Kanalik Nerkowy a Równowaga Kwasowo-Zasadowa**: Opisz mechanizmy regeneracji i reabsorpcji wodorowęglanów ($HCO_3^-$) w kanaliku proksymalnym oraz mechanizm wydalania jonów wodorowych ($H^+$) w postaci kwasowości miareczkowej ($H_2PO_4^-$) i jonów amonowych ($NH_4^+$) w cewce zbiorczej.`,
  },
  {
    id: 'ump-med-biochemia',
    title: 'Biochemia Kliniczna i Biologia Molekularna',
    category: 'Rok II',
    description:
      'Glikoliza, cykl Krebsa, fosforylacja oksydacyjna, metabolizm lipidów, aminokwasów, synteza mocznika i replikacja DNA wg Stryera i Harpera.',
    rank: 1,
    order: 1,
    coreNotes: `# Biochemia Lekarska — Katedra Biochemii UMP

## 1. Bioenergetyka i Katabolizm Węglowodanów
- **Glikoliza (Szlak Embdena-Meyerhofa-Parnasa)**:
  - Zachodzi w cytozolu. 10 reakcji enzymatycznych przekształcających 1 cząsteczkę glukozy w 2 cząsteczki pirogronianu z zyskiem netto 2 ATP i 2 NADH.
  - Trzy nieodwracalne punkty kontrolne (reakcje regulatorowe):
    1. Heksokinaza / Glukokinaza (wątrobowa, wysokie $K_m$, niehamowana przez glukozo-6-fosforan).
    2. Fosfofruktokinaza-1 (PFK-1): Główny enzym regulatorowy glikolizy. Aktywowany allosterycznie przez fruktozo-2,6-bisfosforan (F-2,6-BP) i AMP; hamowany przez ATP i cytrynian.
    3. Kinaza pirogronianowa: Aktywowana przez fruktozo-1,6-bisfosforan (sprzężenie w przód *feedforward*).
- **Kompleks Dehydrogenazy Pirogronianowej (PDH)**:
  - Zlokalizowany w macierzy mitochondrialnej. Dekarboksylacja oksydacyjna pirogronianu do acetylo-CoA.
  - Wymaga 5 koenzymów: pirofosforan tiaminy (TPP, witamina B1), lipoamid, koenzym A (CoA-SH, kwas pantotenowy), FAD (witamina B2), NAD+ (witamina B3).
- **Cykl Kwasu Cytrynowego (Cykl Krebsa / Cykl Kwasów Trikarboksylowych TCA)**:
  - Ostateczny szlak utleniania węglowodanów, kwasów tłuszczowych i aminokwasów.
  - Zysk z 1 cząsteczki acetylo-CoA: 3 NADH, 1 $FADH_2$, 1 GTP (ATP), 2 $CO_2$.
  - Enzymy regulatorowe: syntaza cytrynianowa, dehydrogenaza izocytrynianowa, dehydrogenaza $\\alpha$-ketoglutaranowa.
- **Łańcuch Oddechowy i Fosforylacja Oksydacyjna**:
  - Cztery kompleksy enzymatyczne w wewnętrznej błonie mitochondrialnej:
    - Kompleks I (dehydrogenaza NADH): transfer elektronów z NADH na ubichinon (koenzym Q), pompowanie $4 H^+$.
    - Kompleks II (dehydrogenaza bursztynianowa): transfer z $FADH_2$ na ubichinon, brak pompowania protonów.
    - Kompleks III (oksydoreduktaza cytochrom c): cykl Q, pompowanie $4 H^+$.
    - Kompleks IV (oksydaza cytochromowa c): redukcja $O_2$ do $2 H_2O$, pompowanie $2 H^+$.
  - Syntaza ATP (Kompleks V): gradient protonowy $\\Delta p$ napędza obrót podjednostki $F_0$ i syntezę ATP w domenie katalitycznej $F_1$ (teoria chemiosmotyczna Petera Mitchella). Rozprzęgacze: termogenina (UCP1 w brunatnej tkance tłuszczowej), 2,4-dinitrofenol (DNP).

## 2. Metabolizm Lipidów i Lipoproteiny Osocza
- **$\\beta$-Oksydacja Kwasów Tłuszczowych**:
  - Aktywacja kwasu tłuszczowego do acylo-CoA w cytozolu.
  - Czółenko karnitynowe: palmitoilotransferaza karnitynowa I (CPT-I — enzym hamowany przez malonylo-CoA, uniemożliwiając jednoczesną syntezę i degradację kwasów tłuszczowych), translokaza karnityna-acylokarnityna, CPT-II.
  - 4 powtarzające się etapy w mitochondrium: utlenianie (FAD), uwodnienie, utlenianie (NAD+), tioliza (CoA-SH). Wydzielanie 1 acetylo-CoA, 1 NADH, 1 $FADH_2$ w każdym cyklu.
- **Ketogeneza**: Wyczerpanie szczawiooctanu w wątrobie (np. w nieleczonej cukrzycy typu 1 lub głodzeniu) $\\to$ nadmiar acetylo-CoA przekształcany w ciała ketonowe: acetooctan, $\\beta$-hydroksymaślan i aceton.
- **Profil Lipoproteinowy**:
  - Chylomikrony (ApoB-48): transport triglicerydów egzogennych z jelita.
  - VLDL (ApoB-100): transport triglicerydów endogennych z wątroby.
  - LDL (ApoB-100): transport cholesterolu do tkanek obwodowych; receptor LDL wychwytujący cząstki w procesie endocytozy (mutacja w hipercholesterolemii rodzinnej FH).
  - HDL (ApoA-I): zwrotny transport cholesterolu z tkanek do wątroby za pośrednictwem enzymu LCAT.

## 3. Metabolizm Związków Azotowych i Cykl Mocznikowy
- Transaminacja aminokwasów: enzymy AST (aminotransferaza asparaginianowa) i ALT (alaninowa) z fosforanem pirydoksalu (PLP, witamina B6).
- Oksydacyjna deaminacja glutaminianu przez dehydrogenazę glutaminianową z uwolnieniem wolnego amoniaku ($NH_4^+$).
- **Cykl Mocznikowy (Cykl Krebsa-Henseleita)**:
  - Zachodzi wyłącznie w hepatocytach (częściowo w mitochondrium, częściowo w cytozolu).
  - Enzym regulatorowy: Syntetaza karbamoilofosforanowa I (CPS-I w mitochondrium), bezwzględnie zależna od allosterycznego aktywatora $N$-acetyloglutaminianu (NAG).
  - Reakcje: CPS-I $\\to$ karbamoilotransferaza ornitynowa (OTC — najczęstszy defekt wrodzony sprzężony z chromosomem X) $\\to$ syntetaza argininobursztynianowa $\\to$ liaza argininobursztynianowa $\\to$ arginaza-1 (odszczepienie mocznika i regeneracja ornityny).

## 4. Literatura
1. Jeremy M. Berg, John L. Tymoczko, Gregory J. Gatto Jr., Lubert Stryer — *Biochemia*. PWN.
2. Victor W. Rodwell i in. — *Biochemia Harpera* (Wydanie VII polskie). PZWL.`,
    reviewPrompts: `# Biochemia Lekarska — Zagadnienia Egzaminacyjne

## Pytania Kolokwialne (UMP)
1. **Regulacja Fruktozo-2,6-bisfosforanu**: Wyjaśnij, w jaki sposób insulina i glukagon regulują poziom fruktozo-2,6-bisfosforanu w hepatocytach za pośrednictwem dwufunkcyjnego enzymu PFK-2/FBPaza-2. Jak przekłada się to na przełączanie komórki pomiędzy glikolizą a glukoneogenezą?
2. **Kwasica Ketonowa w Cukrzycy Typu 1**: Wyjaśnij biochemiczny mechanizm powstawania ciał ketonowych u pacjenta z bezwzględnym niedoborem insuliny. Dlaczego tkanki nie są w stanie utlenić acetylo-CoA w cyklu Krebsa pomimo jego drastycznego nadmiaru?
3. **Hiperamonemia i Defekty Cyklu Mocznikowego**: Czym różni się obraz laboratoryjny wrodzonego niedoboru karbamoilotransferazy ornitynowej (OTC) od niedoboru syntetazy karbamoilofosforanowej I (CPS-I)? Wskaż rolę kwasu orotowego w diagnostyce różnicowej.`,
  },
  {
    id: 'ump-med-immunologia',
    title: 'Immunologia Lekarska',
    category: 'Rok II',
    description:
      'Odpowiedź wrodzona i nabyta, prezentacja antygenu MHC I/II, subpopulacje limfocytów Th/Treg, nadwrażliwości I-IV i autoimmunizacja.',
    rank: 1,
    order: 2,
    coreNotes: `# Immunologia Lekarska — Katedra Immunologii Klinicznej UMP

## 1. Odpowiedź Wrodzona (Nieswoista) vs Nabyta (Swoista)
- **Odpowiedź Wrodzona**:
  - Receptory rozpoznające wzorce (PRR - Pattern Recognition Receptors): Receptory Toll-podobne (TLR: TLR4 rozpoznający bakteryjny LPS, TLR3 rozpoznający wirusowy dsRNA), receptory NOD-podobne (NLR aktywujące inflamasom NLRP3 i kaspazę-1).
  - Rozpoznawane cząsteczki: PAMP (Pathogen-Associated Molecular Patterns) oraz DAMP (Damage-Associated Molecular Patterns — np. ATP, kwas moczowy).
  - Komórki żerne: Neutrofile (wybuch tlenowy z udziałem oksydazy NADPH i mieloperoksydazy MPO, sieci NET), makrofagi (fenotyp prozapalny M1 vs naprawczy M2), komórki dendrytyczne (profesjonalne APC).
  - Komórki NK (Natural Killer): Zabijanie komórek nowotworowych i zakażonych wirusami pozbawionych ekspresji MHC klasy I (*Missing Self Hypothesis*).
- **Układ Dopełniacza**:
  - Droga klasyczna (aktywowana przez kompleksy antygen-przeciwciało IgM lub IgG).
  - Droga lektynowa (lektyna wiążąca mannozę MBL).
  - Droga alternatywna (spontaniczna hydroliza składnika C3).
  - Zbieżność dróg na poziomie konwertazy C3 i C5 $\\to$ kompleks ataku błonowego MAC (C5b-C6-C7-C8-C9) powodujący lizę osmotyczną komórki docelowej. Anaflotoksyny prozapalne: C3a i C5a (silny chemoatraktant dla neutrofili).

## 2. Prezentacja Antygenu i Główny Układ Zgodności Tkankowej (MHC / HLA)
- **MHC Klasy I (HLA-A, HLA-B, HLA-C)**:
  - Ekspresja na wszystkich komórkach jądrzastych organizmu i płytkach krwi.
  - Łańcuch ciężki $\\alpha$ połączony niekowalencyjnie z $\\beta_2$-mikroglobuliną.
  - Prezentacja antygenów endogennych (wirusowych, nowotworowych) degradowanych w proteasomie, transportowanych przez białka TAP do siateczki śródplazmatycznej.
  - Rozpoznawane przez limfocyty T cytotoksyczne ($CD8^+$).
- **MHC Klasy II (HLA-DP, HLA-DQ, HLA-DR)**:
  - Ekspresja na profesjonalnych komórkach prezentujących antygen (APC: komórki dendrytyczne, makrofagi, limfocyty B).
  - Heterodimer złożony z łańcucha $\\alpha$ i $\\beta$.
  - Prezentacja antygenów egzogennych pochłoniętych na drodze fagocytozy/endocytozy, degradowanych w lizosomach. Łańcuch niezmienny Ii (CD74) i cząsteczka CLIP.
  - Rozpoznawane przez limfocyty T pomocnicze ($CD4^+$).

## 3. Różnicowanie Limfocytów Th i Tolerancja Immunologiczna
- **Subpopulacje Limfocytów Th ($CD4^+$)**:
  - *Th1*: Różnicowanie indukowane przez IL-12 i IFN-$\\gamma$ (czynnik transkrypcyjny T-bet). Wydzielają IFN-$\\gamma$ i TNF-$\\alpha$, aktywują makrofagi do walki z patogenami wewnątrzkomórkowymi.
  - *Th2*: Różnicowanie pod wpływem IL-4 (czynnik GATA-3). Wydzielają IL-4, IL-5, IL-13, stymulują limfocyty B do produkcji IgE, aktywują eozynofile w zakażeniach pasożytniczych i alergiach.
  - *Th17*: Różnicowanie pod wpływem IL-6 i TGF-$\\beta$ (czynnik ROR$\\gamma$t). Wydzielają IL-17A, rekrutują neutrofile w infekcjach bakteryjnych i grzybiczych, odgrywają kluczową rolę w autoagresji.
  - *Treg (regulatorowe)*: Ekspresja $CD4^+ CD25^+ \\text{FoxP3}^+$. Wydzielają IL-10 i TGF-$\\beta$, hamują autoreaktywne limfocyty T, utrzymują obwodową tolerancję immunologiczną.

## 4. Reakcje Nadwrażliwości wg Coombsa i Gella
- **Typ I (Anafilaktyczny / Atopowy)**: Zależny od przeciwciał IgE wiążących się z receptorami $Fc\\varepsilon RI$ na komórkach tucznych i bazofilach. Degranulacja histaminy, leukotrienów $LTC_4, LTD_4$, PAF. Wstrząs anafilaktyczny, astma atopowa.
- **Typ II (Cytotoksyczny)**: Przeciwciała IgG/IgM skierowane przeciwko antygenom powierzchniowym komórek. Lizo-zależna od dopełniacza (CDC) lub cytotoksyczność komórkowa zależna od przeciwciał (ADCC). Konflikt serologiczny Rh, niedokrwistość immunohemolityczna, miastenia (*Myasthenia gravis* przeciw receptorom AChR), choroba Gravesa-Basedowa.
- **Typ III (Kompleksów Immunologicznych)**: Odkładanie się krążących kompleksów antygen-przeciwciało w ścianach naczyń i kłębuszkach nerkowych z aktywacją dopełniacza i neutrofili. Toczeń rumieniowaty układowy (SLE), popaciorkowcowe KZN, choroba posurowicza.
- **Typ IV (Komórkowy / Opóźniony - DTH)**: Zależny od uczulonych limfocytów Th1/Th17 i makrofagów (brak udziału przeciwciał). Próba tuberkulinowa Mantoux, kontaktowe zapalenie skóry (nikiel), odrzucanie przeszczepu allogenicznego.

## 5. Literatura
1. Jakub Gołąb, Marek Jakóbisiak, Witold Lasek, Tomasz Stokłosa — *Immunologia* (Wydanie 8). Wydawnictwo Naukowe PWN.
2. Kenneth Murphy, Casey Weaver — *Janeway's Immunobiology* (9th Edition). Garland Science.`,
    reviewPrompts: `# Immunologia Lekarska — Zagadnienia Egzaminacyjne

## Pytania Kolokwialne (UMP)
1. **Tolerancja Centralna vs Obwodowa**: Wyjaśnij mechanizm selekcji pozytywnej (restrykcja MHC) i negatywnej (eliminacja komórek o zbyt wysokim powinowactwie do autoantygenów) limfocytów T w grasicy. Jaka jest rola regulatora transkrypcyjnego AIRE i czym objawia się zespół APECED?
2. **Mechanizm Działania Przeciwciał Monoklonalnych w Onkologii**: Opisz mechanizm blokady punktów kontrolnych układu odpornościowego (*Immune Checkpoints*) przez przeciwciała anty-PD-1 (niwolumab, pembrolizumab) oraz anty-CTLA-4 (ipilimumab). W jaki sposób zdejmuje to anergia z limfocytów T naciekających guz?
3. **Wstrząs Anafilaktyczny — Patomechanizm i Leczenie**: Przedstaw kaskadę mediatorów uwalnianych z mastocytów w reakcji anafilaktycznej. Dlaczego adrenalina (domięśniowo w przednio-boczną powierzchnię uda) jest lekiem pierwszego rzutu, a nie leki przeciwhistaminowe czy glikokortykosteroidy?`,
  },
  {
    id: 'ump-med-patomorfologia',
    title: 'Patomorfologia Kliniczna i Sekcyjna',
    category: 'Rok III',
    description:
      'Zwyrodnienia komórkowe, martwica vs apoptoza, zapalenia ostre i przewlekłe, nowotwory łagodne i złośliwe, ocena TNM i immunohistochemia.',
    rank: 2,
    order: 0,
    coreNotes: `# Patomorfologia Kliniczna — Katedra Patomorfologii Klinicznej UMP

## 1. Uszkodzenie i Śmierć Komórki: Martwica vs Apoptoza
- **Martwica (Necrosis)**:
  - Zawsze proces patologiczny; obrzęk komórki (*oncosis*), przerwanie ciągłości błon komórkowych, wyciek enzymów do podścieliska, masywny odczyn zapalny.
  - Zmiany jądrowe: pyknoza (*pyknosis* — obkurczenie i zagęszczenie chromatyny), karioreksja (*karyorrhexis* — fragmentacja jądra), karioliza (*karyolysis* — rozpuszczenie jądra przez endonukleazy).
  - Typy martwicy:
    - *Martwica skrzepowa (Necrosis coagulativa)*: Denaturacja białek strukturalnych z zachowaniem zarysów komórek i architektury tkanki przez wiele dni. Typowa dla zawałów niedokrwiennych większości narządów litych (serce, nerki, śledziona) z wyjątkiem mózgu.
    - *Martwica rozpływna (Necrosis colliquativa)*: Enzymatyczna lizja martwych komórek z utworzeniem płynnej masy. Typowa dla zawałów mózgu (udar niedokrwienny) oraz ogniskowych infekcji bakteryjnych i grzybiczych (ropnie).
    - *Martwica serowata (Necrosis caseosa)*: Charakterystyczna dla gruźlicy (*Mycobacterium tuberculosis*). Makroskopowo biało-szara, krucha masa przypominająca twaróg; mikroskopowo bezpostaciowe eozynochłonne resztki komórkowe otoczone ziarniniakiem.
    - *Martwica tkanki tłuszczowej (martwica Balsera)*: W ostrym zapaleniu trzustki (OZT) w wyniku uwolnienia lipaz trzustkowych. Zmydlanie tłuszczów (*saponificatio*) — wiązanie uwolnionych kwasów tłuszczowych z jonami wapnia dające kredowobiałe ogniska.
- **Apoptoza (Apoptosis)**:
  - Programowana, kontrolowana genetycznie śmierć komórki bez przerwania błony plazmatycznej i bez odczynu zapalnego.
  - Szlak wewnątrzpochodny (mitochondrialny): Stres komórkowy, uszkodzenie DNA (białko p53) $\\to$ aktywacja proapoptotycznych białek Bax/Bak, hamowanie Bcl-2 $\\to$ uwolnienie cytochromu c z mitochondriów $\\to$ formowanie apoptozomu z białkiem Apaf-1 $\\to$ aktywacja kaspazy inicjatorowej 9 $\\to$ aktywacja kaspaz egzekutorowych 3 i 7.
  - Szlak zewnątrzpochodny (receptorów śmierci): Ligandy FasL lub TNF-$\\alpha$ wiążące się z receptorami Fas (CD95) lub TNFR1 $\\to$ rekrutacja adaptera FADD $\\to$ aktywacja kaspazy 8.

## 2. Onkologia Morfologiczna i Biologia Nowotworów
- **Cechy Różnicujące Nowotwory Łagodne i Złośliwe**:
  - *Nowotwory łagodne*: Dobrze zróżnicowane (przypominają tkankę macierzystą), powolny wzrost, rosną rozprężająco z wytworzeniem torebki łącznotkankowej, nie naciekają podścieliska, nie dają przerzutów.
  - *Nowotwory złośliwe*: Anaplazja (brak zróżnicowania), pleomorfizm komórkowy i jądrowy, hiperchromazja jąder, wysoki wskaźnik jądrowo-cytoplazmatyczny (N/C), liczne i atypowe figury podziału mitotycznego (wrzeciona trój- lub wielobiegunowe), naciekanie i niszczenie otaczających tkanek, zdolność do tworzenia przerzutów (*metastases* drogą naczyń chłonnych, krwionośnych lub przez jamy ciała).
- **Klasyfikacja TNM (UICC / AJCC)**:
  - **T (Tumor)**: Wielkość i zasięg naciekania ogniska pierwotnego ($T_{is}$ — rak przedinwazyjny *in situ*, $T_1 - T_4$).
  - **N (Nodes)**: Obecność i lokalizacja przerzutów w regionalnych węzłach chłonnych ($N_0 - N_3$). Biopsja węzła wartowniczego (*Sentinel Lymph Node Biopsy*).
  - **M (Metastasis)**: Przerzuty odległe ($M_0$ — brak, $M_1$ — obecne przerzuty odległe).
- **Immunohistochemia (IHC) w Diagnostyce Onkologicznej**:
  - Cytokeratyny (CK AE1/AE3, CK7, CK20): Markery nabłonkowe różnicujące raki.
  - Wimentyna: Marker nowotworów mezenchymalnych (mięsaki).
  - CD45 (LCA): Marker chłoniaków i białaczek.
  - S100, Melan-A, HMB-45: Markery czerniaka złośliwego.
  - Receptory ER, PR, HER2 (nadekspresja / amplifikacja) oraz indeks proliferacyjny Ki-67 w raku piersi.

## 3. Literatura
1. Vinay Kumar, Abul K. Abbas, Jon C. Aster — *Robbins Patologia* (Wydanie 10). Edra Urban & Partner.
2. Jerzy Stachura, Wenancjusz Domagała — *Patologia znaczy słowo o chorobie* (Tomy I–II). Polska Akademia Umiejętności.`,
    reviewPrompts: `# Patomorfologia — Zagadnienia Egzaminacyjne

## Pytania Kolokwialne (UMP)
1. **Morfologia Zawału Mięśnia Sercowego w Czasie**: Przedstaw chronologię zmian histopatologicznych w zawale serca:
   - 0–4 h: brak zmian w mikroskopie świetlnym (lub falistość włókien).
   - 4–24 h: wczesna martwica skrzepowa, eozynofilia kardiomiocytów, wczesny naciek z neutrofili.
   - 1–3 dni: całkowita martwica skrzepowa z utratą jąder, gęsty naciek neutrofilowy.
   - 3–7 dni: rozpad kardiomiocytów, napływ makrofagów fagocytujących martwicę (okres najwyższego ryzyka pęknięcia wolnej ściany serca lub przegrody!).
   - 7–14 dni: ziarninowanie naczyniowe i synteza kolagenu.
   - >2 miesiące: dojrzała włóknista blizna pozawałowa.
2. **Karcynogeneza Jelita Grubego (Szlak Gruczolak-Rak)**: Opisz sekwencję mutacji Vogelsteina w gruczolakoraku jelita grubego: inaktywacja genu supresorowego APC $\\to$ mutacja onkogenu KRAS $\\to$ utrata genu supresorowego TP53.
3. **Biopsja Węzła Wartowniczego**: Zdefiniuj pojęcie węzła wartowniczego (*sentinel lymph node*) i wyjaśnij, dlaczego ujemny wynik śródoperacyjnego badania histopatologicznego węzła wartowniczego pozwala odstąpić od pełnej limfadenektomii pachowej w raku piersi.`,
  },
  {
    id: 'ump-med-patofizjologia',
    title: 'Patofizjologia Ogólna i Kliniczna',
    category: 'Rok III',
    description:
      'Wstrząs kardiogenny i septyczny, mechanizmy niewydolności serca, ARDS, kwasice i zasadowice metaboliczne oraz oddechowe.',
    rank: 2,
    order: 1,
    coreNotes: `# Patofizjologia Kliniczna — Katedra Patofizjologii UMP

## 1. Patofizjologia Wstrząsu i Niewydolności Krążenia
- **Definicja Wstrząsu**: Stan ostrej, uogólnionej hipoperfuzji tkanek prowadzący do hipoksji komórkowej, przejścia na metabolizm beztlenowy, kwasicy mleczanowej i postępującej niewydolności wielonarządowej (MODS).
- **Cztery Główne Kategorie Wstrząsu**:
  1. *Wstrząs Kardiogenny*: Pierwotna niewydolność pompy mięśnia sercowego (masywny zawał serca, ostra niedomykalność mitralna, pęknięcie przegrody). Spadek rzutu serca ($CO \\downarrow$), wzrost ciśnienia zaklinowania w naczyniach włosowatych płuc ($PCWP \\uparrow$), kompensacyjny wzrost oporu naczyniowego ($SVR \\uparrow$).
  2. *Wstrząs Hipowolemiczny*: Utrata objętości krwi krążącej (krwotok, oparzenia, odwodnienie). Spadek obciążenia wstępnego, $CO \\downarrow$, $PCWP \\downarrow$, $SVR \\uparrow$.
  3. *Wstrząs Dystrybucyjny (Septyczny, Anafilaktyczny, Neurogenny)*: Patologiczna wazodylatacja łożyska naczyniowego i przeciekanie osocza do przestrzeni pozanaczyniowej. Spadek oporu obwodowego ($SVR \\downarrow\\downarrow$), kompensacyjny hiperdynamiczny rzut serca ($CO \\uparrow$ we wczesnej fazie ciepłej sepsy).
  4. *Wstrząs Obturacyjny*: Mechaniczna przeszkoda w napełnianiu lub opróżnianiu jam serca (masywna zatorowość płucna, tamponada serca, odma prężna). Gwałtowny spadek rzutu serca przy wysokim ciśnieniu żylnym.

## 2. Zaburzenia Równowagi Kwasowo-Zasadowej (RKZ)
- Wartości referencyjne gazometrii krwi tętniczej: pH: 7.35–7.45; $pCO_2$: 35–45 mmHg; $HCO_3^-$: 22–26 mmol/l; zasady buforowe BE: -2 do +2 mmol/l.
- **Kwasica Metaboliczna**: Spadek pH i spadek $HCO_3^-$.
  - Kompensacja oddechowa: Hiperwentylacja (oddech Kussmaula) wypłukująca $CO_2$ ($pCO_2 \\downarrow$, reguła Wintera: oczekiwane $pCO_2 = 1.5 [HCO_3^-] + 8 \\pm 2$).
  - Luka anionowa (Anion Gap - AG): $AG = [Na^+] - ([Cl^-] + [HCO_3^-])$. Norma: 8–12 mmol/l.
  - *Kwasica ze zwiększoną luką anionową (HAGMA)*: Mnemonic MUDPILES (Metanol, Uremia/Mocznica, Cukrzycowa kwasica ketonowa DKA, Paraldehyd/Glikol propylenowy, Izoniazyd/Żelazo, Kwasica mleczanowa L-lactate/D-lactate, Glikol etylenowy, Salicylany).
  - *Kwasica z prawidłową luką anionową (NAGMA / hiperchloremiczna)*: Utrata wodorowęglanów przez przewód pokarmowy (biegunki, przetoki) lub nerkowa kwasica cewkowa (RTA typu 1, 2, 4).
- **Zasadowica Metaboliczna**: Wzrost pH i wzrost $HCO_3^-$. Utrata jonów $H^+$ i chloru w wymiotach (zwężenie odźwiernika) lub stosowanie diuretyków pętlowych/tiazydowych. Kompensacja: hipowentylacja ($pCO_2 \\uparrow$).

## 3. Zespół Ostrej Niewydolności Oddechowej (ARDS)
- Definicja Berlińska ARDS: Ostre wystąpienie objawów (w ciągu 7 dni od zadziałania czynnika sprawczego), obustronne zacienienia w badaniu obrazowym RTG/TK niewyjaśnione kardiogennym obrzękiem płuc, wskaźnik oksygenacji $PaO_2/FiO_2 \\le 300\\text{ mmHg}$ przy PEEP $\\ge 5\\text{ cm } H_2O$.
  - Łagodny: $200 < PaO_2/FiO_2 \\le 300$
  - Umiarkowany: $100 < PaO_2/FiO_2 \\le 200$
  - Ciężki: $PaO_2/FiO_2 \\le 100$
- Patomechanizm: Uszkodzenie komórek śródbłonka i pneumocytów pęcherzykowych przez kaskadę cytokin (TNF-$\\alpha$, IL-1$\\beta$, IL-6) i pobudzone neutrofile $\\to$ masywny przesięk białkowego płynu do wnętrza pęcherzyków, utrata surfaktantu, powstawanie błon szklistych (*hyaline membranes*), zapadanie pęcherzyków i drastyczny wzrost przecieku płucnego (*Right-to-Left Shunt*).

## 4. Literatura
1. Gary D. Hammer, Stephen J. McPhee — *Pathophysiology of Disease: An Introduction to Clinical Medicine* (8th Edition). McGraw-Hill.
2. Andrzej Szczeklik, Piotr Gajewski — *Interna Szczeklika*. Medycyna Praktyczna (rozdziały patofizjologiczne).`,
    reviewPrompts: `# Patofizjologia — Kazusy Kliniczne i Pytania

## Kazusy Kliniczne (UMP)
1. **Analiza Gazometrii Krwi Tętniczej**: Pacjent z cukrzycą typu 1 przyjęty na SOR z zaburzeniami świadomości. Wyniki gazometrii: pH: 7.12, $pCO_2$: 20 mmHg, $HCO_3^-$: 6 mmol/l, $Na^+$: 135 mmol/l, $Cl^-$: 95 mmol/l, glikemia: 480 mg/dl.
   - Zidentyfikuj pierwotne zaburzenie RKZ oraz oceń adekwatność kompensacji oddechowej wg reguły Wintera.
   - Oblicz lukę anionową i zinterpretuj wynik.
2. **Hemodynamika We Wstrząsie**: Porównaj w tabeli parametry hemodynamiczne (CO, SVR, PCWP, $ScvO_2$) we wczesnym wstrząsie septycznym vs wstrząsie kardiogennym. Dlaczego saturacja krwi żylnej centralnej $ScvO_2$ we wstrząsie septycznym bywa podwyższona pomimo ciężkiej hipoksji komórkowej?
3. **Patofizjologia Przeciążenia Ciśnieniowego vs Objętościowego Serca**: Czym różni się przerost dośrodkowy komory (zwężenie zastawki aortalnej, nadciśnienie — replikacja sarkomerów równoległa) od przerostu odśrodkowego (niedomykalność aortalna, mitralna — replikacja sarkomerów szeregowa)?`,
  },
  {
    id: 'ump-med-farmakologia',
    title: 'Farmakologia Ogólna i Toksykologia',
    category: 'Rok III',
    description:
      'Farmakokinetyka (ADME), farmakodynamika, układ krążenia (ACEI, beta-blokery), antybiotykoterapia celowana i toksykologia kliniczna.',
    rank: 2,
    order: 2,
    coreNotes: `# Farmakologia i Toksykologia — Katedra Farmakologii UMP

## 1. Farmakokinetyka (ADME) i Parametry Ilościowe
- **ADME**: Wchłanianie (*Absorption*), Dystrybucja (*Distribution*), Metabolizm (*Metabolism*), Wydalanie (*Excretion*).
- **Dostępność Biologiczna ($F$)**: Odsetek podanej dawki leku docierający do krążenia ogólnego w postaci niezmienionej. Dla podania dożylnego $F = 100\\%$ ($F=1$). Wyznaczana ze stosunku pól pod krzywą stężenia w czasie ($AUC$):
  $$F = \\frac{AUC_{p.o.} \\times D_{i.v.}}{AUC_{i.v.} \\times D_{p.o.}}$$
  Efekt pierwszego przejścia (*First-Pass Effect*): metabolizm leku w błonie śluzowej jelita i wątrobie przed dotarciem do krążenia systemowego.
- **Objętość Dystrybucji ($V_d$)**:
  $$V_d = \\frac{D}{C_0}$$
  gdzie $D$ to dawka leku, a $C_0$ ekstrapolowane stężenie początkowe w osoczu. Niskie $V_d$ (3–5 l) oznacza uwięzienie leku w łożysku naczyniowym (np. heparyna niefrakcjonowana); bardzo wysokie $V_d$ (>100–1000 l) wskazuje na masywną kumulację w tkance tłuszczowej lub wiązanie wewnątrzkomórkowe (np. digoksyna, chlorochina).
- **Klirens ($Cl$) i Biologiczny Okres Półtrwania ($t_{1/2}$)**:
  $$t_{1/2} = \\frac{\\ln 2 \\times V_d}{Cl} \\approx \\frac{0{,}693 \\times V_d}{Cl}$$
  Stan stacjonarny (*Steady State* $C_{ss}$) osiągany jest po upływie $4 - 5 \\times t_{1/2}$ regularnego dawkowania leku.
- **Biotransformacja Wątrobowa**: Faza I (reakcje utleniania, redukcji, hydrolizy z udziałem cytochromu P450 — izoenzymy CYP3A4, CYP2D6, CYP2C9). Faza II (reakcje sprzęgania z kwasem glukuronowym, glutationem, siarczanem).

## 2. Farmakologia Układu Sercowo-Naczyniowego
- **Inhibitory Konwertazy Angiotensyny (ACEI - ramipryl, peryndopryl) i Sartany (ARB - losartan, walsartan)**:
  - Blokada syntezy Ang II (ACEI) lub blokada receptora $AT_1$ (ARB).
  - Wskazania: nadciśnienie tętnicze, niewydolność serca ze zredukowaną frakcją wyrzutową (HFrEF), nefropatia cukrzycowa (działanie nefroprotekcyjne poprzez rozszerzenie tętniczki odprowadzającej kłębuszka).
  - Działania niepożądane ACEI: suchy uporczywy kaszel (kumulacja bradykininy rozkładanej przez enzym ACE), obrzęk naczynioruchowy Quinckego, hiperkaliemia. Przeciwwskazane w ciąży oraz obustronnym zwężeniu tętnic nerkowych.
- **Leki $\\beta$-Adrenolityczne ($\\beta$-blokery)**:
  - Kardioselektywne $\\beta_1$ (bisoprolol, metoprolol succinat, nebiwolol — dodatkowo uwalnia tlenek azotu NO).
  - Nieselektywne $\\beta_1/\\beta_2$ (propranolol) oraz o działaniu wazodylatacyjnym $\\alpha_1/\\beta$ (karwedilol).
  - Efekty: ujemny inotropizm, chronotropizm, dromotropizm i batmotropizm. Wskazania: choroba wieńcowa, HFrEF (poprawa przeżycia), tachyarytmie.
- **Antagoniści Wapnia (CCB - Calcium Channel Blockers)**:
  - Dihydropirydynowe (amlodypina, lerkanidypina): selektywne działanie naczyniorozszerzające na tętniczki obwodowe.
  - Niedihydropirydynowe (werapamil, diltiazem): działanie depresyjne na węzeł SA i AV (przeciwwskazane w połączeniu z $\\beta$-blokerami ze względu na ryzyko bloku AV i asystolii).

## 3. Zasady Racjonalnej Antybiotykoterapii
- **Antybiotyki $\\beta$-Laktamowe**: Penicyliny, cefalosporyny, karbapenemy, monobaktamy.
  - Mechanizm: wiązanie z białkami PBP (Penicillin-Binding Proteins) i hamowanie biosyntezy peptydoglikanu (mureiny) ściany komórkowej bakterii. Działanie bakteriobójcze zależne od czasu utrzymywania się stężenia powyżej MIC ($T > MIC$).
- **Inhibitory Syntezy Białek Bakteryjnych**:
  - Podjednostka 30S rybosomu: Aminoglikozydy (gentamycyna — bakteriobójcze, zależne od szczytowego stężenia $C_{max}/MIC$, oto- i nefrotoksyczne), Tetracykliny (doksycyklina — bakteriostatyczne).
  - Podjednostka 50S rybosomu: Makrolidy (klarytromycyna, azytromycyna — wydłużenie odstępu QT), Linkozamidy (klindamycyna).
- **Fluorochinolony (cyprofloksacyna, lewofloksacyna)**:
  - Hamowanie bakteryjnej gyrazy DNA (topoizomerazy II) i topoizomerazy IV. Działania niepożądane: tendinopatie (ryzyko zerwania ścięgna Achillesa), tętniaki aorty.

## 4. Literatura
1. Wojciech Kostowski, Zbigniew S. Herman — *Farmakologia. Podstawy farmakoterapii* (Tomy I–II). PZWL.
2. Bertram G. Katzung, Todd W. Vanderah — *Basic & Clinical Pharmacology* (15th Edition). McGraw-Hill.`,
    reviewPrompts: `# Farmakologia — Obliczenia i Przypadki Kliniczne

## Zadania i Pytania Egzaminacyjne
1. **Kalkulacja Dawki Nasycającej i Podtrzymującej**: Lek o wąskim indeksie terapeutycznym ma objętość dystrybucji $V_d = 50\\text{ l}$, klirens $Cl = 2.5\\text{ l/h}$ oraz docelowe stężenie terapeutyczne w osoczu $C_{target} = 10\\text{ mg/l}$.
   - Oblicz jednorazową dożylną dawkę nasycającą ($Loading\\ Dose = V_d \\times C_{target}$).
   - Oblicz dożylną dawkę podtrzymującą w infuzji ciągłej ($Maintenance\\ Dose = Cl \\times C_{target}$) na godzinę.
2. **Interakcje Lekowe z Udziałem CYP3A4**: Pacjent przewlekle leczony simwastatyną (substrat CYP3A4) otrzymał klarytromycynę (silny inhibitor CYP3A4) z powodu zapalenia płuc. Wyjaśnij mechanizm interakcji i opisz groźne powikłanie mięśniowe (rabdomioliza, ostra niewydolność nerek).
3. **Odtrutki w Toksykologii Klinicznej**: Podaj swoiste odtrutki (*antidota*) stosowane w ostrych zatruciach:
   - Paracetamolem ($N$-acetylocysteina — odbudowa rezerw glutationu).
   - Benzodiazepinami (flumazenil — antagonista receptora $GABA_A$).
   - Opioidami (nalokson — antagonista receptora opioidowego $\\mu$).
   - Związkami fosforoorganicznymi / gazami bojowymi (atropina + pralidoksym).`,
  },
  {
    id: 'ump-med-mikrobiologia',
    title: 'Mikrobiologia Lekarska z Wirusologią',
    category: 'Rok III',
    description:
      'Bakterie Gram-dodatnie i Gram-ujemne, mechanizmy oporności (MRSA, ESBL, KPC), wirusologia (HBV, HCV, HIV) oraz diagnostyka molekularna.',
    rank: 2,
    order: 3,
    coreNotes: `# Mikrobiologia Lekarska — Katedra Mikrobiologii Lekarskiej UMP

## 1. Biologia Bakterii i Mechanizmy Patogenności
- **Struktura Ściany Komórkowej**:
  - Bakterie Gram-dodatnie ($G^+$): Gruba wielowarstwowa mureina (peptydoglikan, do 40 warstw), kwasy tejchojowe i lipotejchojowe, barwią się na fioletowo w barwieniu Grama.
  - Bakterie Gram-ujemne ($G^-$): Cienka pojedyncza warstwa peptydoglikanu otoczona zewnętrzną błoną lipidową zawierającą **lipopolisacharyd (LPS / endotoksyna)**. Budowa LPS: lipid A (odpowiedzialny za toksyczność we wstrząsie septycznym), oligosacharyd rdzeniowy oraz antygen O (łańcuch boczny). Przestrzeń periplazmatyczna.
- **Czynniki Zjadliwości (Wirulencji)**:
  - Otoczki bakteryjne (ochrona przed fagocytozą — *Streptococcus pneumoniae*, *Neisseria meningitidis*, *Haemophilus influenzae*).
  - Egzotoksyny:
    - Toksyny A-B: Toksyna błonicza (*Corynebacterium diphtheriae* — inaktywacja EF-2), toksyna cholery (*Vibrio cholerae* — trwała aktywacja białka $G_s$, wzrost cAMP, biegunka ryżowa), toksyna tężcowa (*Clostridium tetani* — tetanospazmina blokująca uwalnianie GABA i glicyny, skurcze spastyczne), toksyna botulinowa (*Clostridium botulinum* — blokada uwalniania acetylocholiny, porażenie wiotkie).
    - Superantygeny: Toksyna wstrząsu toksycznego TSST-1 (*Staphylococcus aureus*) niespecyficznie łącząca TCR z MHC II i wywołująca burzę cytokinową.

## 2. Mechanizmy Oporności na Przeciwbiotyki (Alert-Patogeny ESKAPE)
- Akronim **ESKAPE**: *Enterococcus faecium*, *Staphylococcus aureus*, *Klebsiella pneumoniae*, *Acinetobacter baumannii*, *Pseudomonas aeruginosa*, *Enterobacter* spp.
- **Kluczowe Mechanizmy Oporności**:
  - **MRSA (Methicillin-Resistant Staphylococcus aureus)**: Modyfikacja białka docelowego PBP. Nabycie genu *mecA* lub *mecC* kodującego białko PBP2a o niskim powinowactwie do wszystkich klasycznych antybiotyków $\\beta$-laktamowych. Leczenie: wankomycyna, daptomycyna, linezolid, ceftarolina (cefalosporyna V generacji).
  - **VRE (Vancomycin-Resistant Enterococci)**: Modyfikacja celu — zamiana końcowego fragmentu peptydu D-Ala-D-Ala na D-Ala-D-Lac w mureinie (operon *vanA*, *vanB*).
  - **ESBL (Extended-Spectrum Beta-Lactamases)**: $\\beta$-laktamazy o rozszerzonym spektrum substratowym hydrolizujące penicyliny, cefalosporyny (I–IV generacji) i aztreonam. Hamowane przez inhibitory (kwas klawulanowy, tazobaktam).
  - **Karbapenemazy (CRE - Carbapenem-Resistant Enterobacterales)**:
    - Klasa A: KPC (*Klebsiella pneumoniae carbapenemase*).
    - Klasa B: Metallo-$\\beta$-laktamazy (MBL — NDM-1 New Delhi, VIM, IMP) zależne od jonów cynku $Zn^{2+}$, oporne na wszystkie $\\beta$-laktamy z wyjątkiem aztreonamu.
    - Klasa D: OXA-48.
    - Opcje terapeutyczne: ceftazydym-awibaktam, meropenem-waborbaktam, cefiderokol, kolistyna.

## 3. Wirusologia Lekarska: WZW i HIV
- **Wirusy Zapalenia Wątroby (Hepatotropowe)**:
  - HAV i HEV: wirusy bezotoczkowe, przenoszone drogą fekalno-oralną, ostre zakażenia bez tendencji do przewlekania (z wyjątkiem HEV u immunosupresyjnych).
  - **HBV (Hepadnaviridae, dsDNA z odwrotną transkryptazą)**: Przenoszony drogą parenteralną, płciową i wertykalną. Serologia: HBsAg (obecność zakażenia), anty-HBs (odporność po szczepieniu lub przebyciu), anty-HBc IgM (ostre zakażenie), anty-HBc Total (kontakt z wirusem), HBeAg (wysoka replikacja).
  - **HCV (Flaviviridae, ssRNA+)**: Główna przyczyna przewlekłego zapalenia, marskości i raka wątrobowokomórkowego (HCC). Rewolucja terapeutyczna: leki o bezpośrednim działaniu przeciwwirusowym (DAA - pangenotypowe schematy sofosbuwir/welpataswir, glekaprewir/pibrentaswir) z odsetkiem wyleczeń SVR > 98%.
- **HIV (Retroviridae, Lentivirus, ssRNA+)**:
  - Glikoproteiny otoczkowe gp120 (wiązanie z CD4 i koreceptorami CCR5 / CXCR4) oraz gp41 (fuzja z błoną komórkową).
  - Enzymy wirusowe: odwrotna transkryptaza (RT), integraza, proteaza.
  - Fazy zakażenia: ostra choroba retrowirusowa, bezobjawowa latencja kliniczna, pełnoobjawowy AIDS (spadek limfocytów $CD4^+ < 200/\\mu$l lub wystąpienie chorób wskaźnikowych: pneumocystoza PCP, toksoplazmoza mózgu, mięsak Kaposiego).
  - Terapia cART: skojarzenie 2 NRTI + INSTI (inhibitor integrazy).

## 4. Literatura
1. Danuta Dzierżanowska — *Antybiotykoterapia praktyczna*. $\\alpha$-medica press.
2. Patrick R. Murray, Ken S. Rosenthal, Michael A. Pfaller — *Mikrobiologia medyczna*. Edra Urban & Partner.`,
    reviewPrompts: `# Mikrobiologia Lekarska — Zadania Diagnostyczne

## Zagadnienia Egzaminacyjne (UMP)
1. **Interpretacja Profilu Serologicznego WZW B**: Zinterpretuj poniższe profile serologiczne pacjentów:
   - Pacjent A: HBsAg (-), anty-HBs (+), anty-HBc Total (-).
   - Pacjent B: HBsAg (-), anty-HBs (+), anty-HBc Total (+).
   - Pacjent C: HBsAg (+), HBeAg (+), anty-HBc IgM (+), anty-HBs (-).
2. **Diagnostyka i Postępowanie w Zakażeniu Clostridioides difficile (CDI)**: Pacjent po 14 dniach terapii klindamycyną rozwinął obfitą wodnistą biegunkę z leukocytozą 25 000/$\\mu$l. Opisz algorytm diagnostyczny (test GDH + toksyny A/B w kale) oraz leczenie I rzutu (wankomycyna p.o. lub fidaksomycyna p.o.).
3. **Szok Toksyczny a Gronkowce**: Przedstaw mechanizm patogenetyczny zespołu wstrząsu toksycznego (TSS) indukowanego przez toksynę TSST-1. Dlaczego antybiotyki hamujące syntezę białek (klindamycyna) są dołączane do terapii bakteriobójczej w zakażeniach toksynotwórczych?`,
  },
  {
    id: 'ump-med-interna1',
    title: 'Choroby Wewnętrzne (Interna Szczeklika) — Kardiologia i Pulmonologia',
    category: 'Rok IV',
    description:
      'Choroba wieńcowa (OZW/STEMI/NSTEMI), niewydolność serca wg wytycznych ESC, astma oskrzelowa (GINA), POChP (GOLD) i zatorowość płucna.',
    rank: 3,
    order: 0,
    coreNotes: `# Kardiologia i Pulmonologia — Kliniki Internistyczne UMP (Szczeklik)

## 1. Ostre Zespoły Wieńcowe (OZW / ACS) wg Wytycznych ESC
- **Podział Kliniczny OZW**:
  - **STEMI (ST-Elevation Myocardial Infarction)**: Ostry ból dławicowy w klatce piersiowej, przetrwałe uniesienie odcinka ST w EKG ($\\ge 2.5\\text{ mm}$ u mężczyzn <40 r.ż., $\\ge 2\\text{ mm}$ u mężczyzn $\\ge 40$ r.ż., $\\ge 1.5\\text{ mm}$ u kobiet w odprowadzeniach $V_2-V_3$; $\\ge 1\\text{ mm}$ w pozostałych odprowadzeniach) lub świeży blok lewej odnogi pęczka Hisa (LBBB). Wymaga natychmiastowej pierwotnej przezskórnej interwencji wieńcowej (pPCI) z czasem "od pierwszego kontaktu medycznego do otwarcia tętnicy" <90-120 minut.
  - **NSTE-ACS (NSTEMI / UAP)**: Brak przetrwałego uniesienia ST (możliwe obniżenie ST, ujemne załamki T lub brak zmian).
    - NSTEMI: Podwyższone stężenie biomarkerów martwicy mięśnia sercowego (troponiny sercowe o wysokiej czułości hs-cTnI / hs-cTnT z dynamiką wzrostu/spadku w protokole 0/1h lub 0/2h).
    - UAP (Dławica piersiowa niestabilna): Ujemne troponiny sercowe, ból wieńcowy spoczynkowy, nowo powstały (de novo) lub narastający (*crescendo*).
- **Farmakoterapia Ostra i Przewlekła w OZW**:
  - Dwuletkowa terapia przeciwpłytkowa (DAPT): Kwas acetylosalicylowy (ASA, dawka nasycająca 150-300 mg) + silny inhibitor receptora $P2Y_{12}$ (tikagrelor 180 mg lub prasugrel 60 mg; klopidogrel 600 mg tylko przy przeciwwskazaniach).
  - Leczenie przeciwkrzepliwe: Heparyna niefrakcjonowana (UFH) i.v. pod kontrolą ACT podczas PCI lub enoksaparyna.
  - Intensywna terapia statynowa: Atorwastatyna 80 mg lub rosuwastatyna 40 mg (cel terapeutyczny: LDL < 55 mg/dl i redukcja $\\ge 50\\%$).
  - $\\beta$-bloker i ACEI wdrożone w ciągu pierwszych 24 h przy stabilnym ciśnieniu.

## 2. Przewlekła Niewydolność Serca (HF) wg Wytycznych ESC
- **Klasyfikacja na Podstawie Frakcji Wyrzutowej Lewej Komory (LVEF)**:
  - HFrEF (ze zredukowaną frakcją wyrzutową): LVEF $\\le 40\\%$.
  - HFmrEF (z umiarkowanie zredukowaną frakcją): LVEF 41–49%.
  - HFpEF (z zachowaną frakcją): LVEF $\\ge 50\\%$ z dowodami podwyższonych ciśnień napełniania (NT-proBNP, parametry echokardiograficzne $E/e'$).
- **Cztery Filary Farmakoterapii HFrEF Redukujące Śmiertelność (The Fantastic Four)**:
  1. *Inhibitor SGLT2 (Flozyna)*: Empagliflozyna 10 mg lub dapagliflozyna 10 mg 1x dz.
  2. *Inhibitor Neprylizyny i Receptora Angiotensyny (ARNI)*: Sakubitryl/walsartan (lub ACEI/ARB przy nietolerancji).
  3. *Kardioselektywny $\\beta$-bloker*: Bisoprolol, metoprolol succinat lub karwedilol.
  4. *Antagonista Receptora Mineralokortykoidowego (MRA)*: Spironolakton lub eplerenon (kontrola $K^+$ i kreatyniny).
- Diuretyki pętlowe (furosemid, torasemid) stosowane objawowo w celu eliminacji przewodnienia i obrzęków (brak wpływu na przeżycie długoterminowe).

## 3. Pulmonologia: POChP vs Astma Oskrzelowa
- **Podstawy Spirometrii**:
  - FVC (Forced Vital Capacity): Natężona pojemność życiowa.
  - $FEV_1$ (Forced Expiratory Volume in 1 second): Natężona objętość wydechowa pierwszosekundowa.
  - Wskaźnik Tiffeneau: $FEV_1 / FVC$. Wartość po inhalacji leku rozkurczającego $< 0.70$ definiuje nieodwracalną obturację dróg oddechowych.
- **Przewlekła Obturacyjna Choroba Płuc (POChP wg GOLD)**:
  - Choroba tytoniowa; postępujące, utrwalone ograniczenie przepływu przez drogi oddechowe z przewlekłym zapaleniem oskrzeli i rozedmą.
  - Grupy kliniczne GOLD ABE: ocena nasilenia objawów (mMRC, test CAT) oraz ryzyka zaostrzeń.
  - Leczenie wziewne: LAMA (tiotropium), LABA (formoterol, wilanterol), ICS (wziewne glikokortykosteroidy u chorych z eozynofilią krwi $\\ge 300/\\mu$l i częstymi zaostrzeniami).
- **Astma Oskrzelowa wg Wytycznych GINA**:
  - Przewlekłe eozynofilowe zapalenie dróg oddechowych ze zmienną obturacją i nadreaktywnością oskrzeli.
  - Rewolucja GINA: Odradzanie stosowania SABA (salbutamolu) w monoterapii. Leczeniem doraźnym i kontrolującym z wyboru we wszystkich stopniach jest połączenie niskiej dawki ICS z formoterolem (tzw. terapia SMART).

## 4. Zatorowość Płucna (PE)
- Triada Virchowa: uszkodzenie śródbłonka, zastój krwi, nadkrzepliwość (trombofilia).
- Skala Wellsa i Genewska do oceny prawdopodobieństwa klinicznego. D-dimery jako test wykluczający przy niskim prawdopodobieństwie (wysoka wartość predykcyjna ujemna NPV).
- Złoty standard diagnostyczny: Angio-TK tętnic płucnych.
- Skala PESI / sPESI do oceny ryzyka zgonu. PE wysokiego ryzyka (wstrząs, hipotensja) $\\to$ natychmiastowa tromboliza celowana (rtPA 100 mg i.v.). PE niewysokiego ryzyka $\\to$ antykoagulacja DOAC (rywaroksaban, apiksaban).

## 5. Literatura
1. Andrzej Szczeklik, Piotr Gajewski (red.) — *Interna Szczeklika. Podręcznik chorób wewnętrznych*. Medycyna Praktyczna, Kraków (biblia polskich internistów).
2. *Wytyczne ESC (European Society of Cardiology)* dotyczące OZW, Niewydolności Serca i Zatorowości Płucnej. Kardiologia Polska.`,
    reviewPrompts: `# Kardiologia i Pulmonologia — Kazusy Kliniczne i EKG

## Przypadki Kliniczne (UMP)
1. **Analiza EKG i Postępowanie w STEMI**: 58-letni mężczyzna z silnym piekącym bólem zamostkowym trwającym od 45 minut, promieniującym do żuchwy i lewego barku. Zapis EKG wykazuje uniesienie odcinka ST o 4 mm w odprowadzeniach $V_1-V_4$ z lustrzanym obniżeniem ST w II, III, aVF.
   - Wskaż lokalizację zawału (ściana przednia) i prawdopodobne naczynie dozawałowe (LAD).
   - Przedstaw natychmiastowe postępowanie przedszpitalne i szpitalne (leki, czasy docelowe PCI).
2. **Kwalifikacja do Farmakoterapii w HFrEF**: 65-letnia pacjentka z dusznością NYHA III i LVEF 28%. W badaniach laboratoryjnych: eGFR 45 ml/min, potas 4.4 mmol/l, NT-proBNP 3200 pg/ml.
   - Zaproponuj kompletny schemat leczenia złożony z "4 filarów" i uzasadnij wdrożenie inhibitora SGLT2 u pacjentki bez cukrzycy.
3. **Diagnostyka Różnicowa Zaostrzenia POChP vs Zatorowości Płucnej**: Pacjent z wieloletnim POChP zgłasza gwałtowne nasilenie duszności w ciągu 2 godzin z kłuciem w klatce piersiowej, tachykardią 115 bpm i $SpO_2$ 86%. Jakie badania wykonasz w pierwszej kolejności, aby wykluczyć zatorowość płucną i odmę prężną?`,
  },
  {
    id: 'ump-med-chirurgia1',
    title: 'Chirurgia Ogólna i Urazowa',
    category: 'Rok IV',
    description:
      'Ostre zapalenie wyrostka robaczkowego, niedrożność jelit, ostre zapalenie trzustki, protokół ATLS i techniki laparoskopowe.',
    rank: 3,
    order: 1,
    coreNotes: `# Chirurgia Ogólna i Obrażenia Ciała — Katedra Chirurgii Ogólnej UMP

## 1. Ostry Brzuch: Diagnostyka i Wskazania do Laparotomii
- **Objawy Otrzewnowe (Peritoneal Signs)**:
  - *Objaw Blumberga*: Ostry ból przy gwałtownym zwolnieniu ucisku powłok brzusznych (zapalenie otrzewnej ściennej).
  - *Obrona mięśniowa (Défense musculaire)*: Mimowolny odruchowy skurcz mięśni powłok brzusznych; w pełnym zapaleniu otrzewnej "brzuch deskowaty".
  - *Objaw Rovsinga*: Ucisk w lewym dole biodrowym wywołuje ból w prawym dole biodrowym w wyniku przemieszczenia gazów (zapalenie wyrostka).
  - *Objaw Jaworskiego*: Ból przy opuszczaniu uniesionej prawej kończyny dolnej przy ucisku w punkcie McBurneya (zakątnicze położenie wyrostka).
  - *Objaw Chełmońskiego*: Bolesność przy wstrząsaniu okolicy podżebrowej prawej (zapalenie pęcherzyka żółciowego).
  - *Objaw Murphy'ego*: Zatrzymanie wdechu z powodu bólu podczas głębokiego ucisku pod prawym łukiem żebrowym.
- **Ostre Zapalenie Wyrostka Robaczkowego (Appendicitis)**:
  - Etiologia: Zatkanie światła wyrostka przez kamień kałowy (*fecalith*), rozrost tkanki limfatycznej lub ciało obce $\\to$ wzrost ciśnienia wewnątrzświatłowego, niedokrwienie ściany, zgorzel i perforacja.
  - Skala Alvarado do oceny prawdopodobieństwa zapalenia wyrostka robaczkowego.
  - Postępowanie: Apendektomia laparoskopowa z profilaktyką antybiotykową.
- **Niedrożność Przewodu Pokarmowego (Ileus)**:
  - *Niedrożność mechaniczna*: Ze zatkania (guz jelita grubego, kamień żółciowy) lub zadzierzgnięcia (*strangulatio* — zrosty pooperacyjne, uwięźnięta przepuklina, skręt jelita *volvulus*). Objawy: silny ból kolkowy, wymioty, zatrzymanie gazów i stolca, metaliczne dźwięki perystaltyki ("objaw spadającej kropli").
  - *Niedrożność porażenna*: Brak perystaltyki ("cisza w brzuchu"), w przebiegu zapalenia otrzewnej, hipokaliemii, po operacjach brzusznych.
  - Przeglądowe RTG jamy brzusznej na stojąco: Poziomy płynów w pętlach jelitowych z obecnością gazu powyżej.

## 2. Choroby Dróg Żółciowych i Ostre Zapalenie Trzustki
- **Kamica Pęcherzyka Żółciowego i Ostre Zapalenie Pęcherzyka (ACC)**:
  - Usg jamy brzusznej jako badanie z wyboru: Pogrubienie ściany pęcherzyka >3-4 mm, objaw Murphy'ego pod głowicą USG, kamienie ze stożkiem cienia akustycznego, płyn okołopęcherzykowy.
  - Leczenie: Wczesna cholecystektomia laparoskopowa (w ciągu 72 h od początku objawów).
- **Ostre Zapalenie Trzustki (OZT)**:
  - Dwie główne przyczyny (80% przypadków): Kamica żółciowa (biliary pancreatitis) oraz alkohol.
  - Rozpoznanie (wymagane $\\ge 2$ z 3 kryteriów):
    1. Typowy ból w nadbrzuszu, opasujący, promieniujący do kręgosłupa.
    2. Aktywność lipazy lub amylazy w surowicy przekraczająca 3-krotnie górną granicę normy (lipaza bardziej swoista i dłużej podwyższona).
    3. Cechy OZT w badaniach obrazowych (TK z kontrastem / USG / MR).
  - Skale ciężkości: Skala APACHE II, skala Ransona, zmodyfikowana klasyfikacja Atlanta (postać łagodna obrzękowa vs ciężka martwicza).
  - Leczenie: Agresywna płynoterapia krystaloidowa (Ringer Mleczan), skuteczne uśmierzanie bólu (opioidy), wczesne żywienie dojelitowe. Antybiotykoterapia rutynowa niezalecana (wyłącznie przy zakażonej martwicy trzustki).

## 3. Protokół Zaopatrywania Urazów ATLS (Advanced Trauma Life Support)
- **Badanie Wstępne ABCDE**:
  - **A**irway z ochroną kręgosłupa szyjnego: Udrożnienie dróg oddechowych z ręczną stabilizacją osiową kręgosłupa szyjnego w linii pośrodkowej.
  - **B**reathing i wentylacja: Wykluczenie stanów natychmiastowego zagrożenia życia: odma prężna (odbarczenie igłowe w II przestrzeni międzyżebrowej w linii środkowo-obojczykowej lub V przestrzeni w linii pachowej przedniej), odma otwarta, wiotka klatka piersiowa, masywny krwiak opłucnej.
  - **C**irculation z kontrolą krwawienia: Zatamowanie krwawień zewnętrznych (opaski uciskowe stazy taktyczne), ocena tętna, nawrotu kapilarnego, protokół masywnej transfuzji (MTP 1:1:1 krew pełna / KKCz : FFP : KKP) z kwasem traneksamowym (TXA). Badanie eFAST (Extended Focused Assessment with Sonography for Trauma).
  - **D**isability: Ocena neurologiczna wg Glasgow Coma Scale (GCS) i reakcji źrenic na światło.
  - **E**xposure / Environment: Całkowite rozebranie pacjenta z jednoczesną profilaktyką hipotermii (ogrzewanie płynów, koce grzewcze).

## 4. Literatura
1. Jan Fibak (red.) — *Chirurgia. Podręcznik dla studentów medycyny*. PZWL.
2. Wojciech Noszczyk — *Chirurgia* (Tomy I–II). Wydawnictwo Lekarskie PZWL.
3. American College of Surgeons — *ATLS: Advanced Trauma Life Support Student Course Manual* (10th Edition).`,
    reviewPrompts: `# Chirurgia Ogólna — Przypadki Kliniczne i Decyzje Operacyjne

## Przypadki Kliniczne (UMP)
1. **Podejrzenie Perforacji Przewodu Pokarmowego**: 62-letni pacjent z chorobą wrzodową żołądka nagle poczuł rozdzierający ból w nadbrzuszu ("cios sztyletem"), z deskowatym napięciem powłok brzusznych.
   - Jakie badanie obrazowe wykonasz w trybie pilnym i czego poszukujesz (sierp powietrza pod kopułami przepony w RTG klatki piersiowej na stojąco)?
   - Jakie jest natychmiastowe postępowanie chirurgiczne?
2. **Postępowanie w Odmie Prężnej**: Pacjent po wypadku komunikacyjnym, siny, duszny, z tachykardią 140 bpm, ciśnieniem 70/40 mmHg. Po stronie prawej brak szmerów oddechowych, bębenkowy odgłos opukowy, przesunięcie tchawicy na stronę lewą i poszerzenie żył szyjnych.
   - Dlaczego wykonanie RTG klatki piersiowej w tym momencie jest błędem sztuki lekarskiej?
   - Opisz procedurę natychmiastowego odbarczenia odmy prężnej.
3. **Badanie eFAST w Urazach**: Wymień 4 standardowe okna akustyczne w badaniu USG FAST oraz 2 dodatkowe pola w badaniu eFAST. Jakiej patologii poszukuje się w zachyłku Morrisona (przestrzeń wątrobowo-nerkowa)?`,
  },
  {
    id: 'ump-med-pediatria',
    title: 'Pediatria i Medycyna Rozwojowa',
    category: 'Rok IV',
    description:
      'Rozwój psychomotoryczny, siatki centylowe, Program Szczepień Ochronnych (PSO), odwodnienie, infekcyjne choroby wysypkowe wieku dziecięcego.',
    rank: 3,
    order: 2,
    coreNotes: `# Pediatria Kliniczna — Kliniki Pediatryczne UMP (Szpital Kliniczny im. K. Jonschera)

## 1. Rozwój Psychomotoryczny Dziecka i Siatki Centylowe
- **Kamienie Milowe Rozwoju Psychomotorycznego**:
  - 3 miesiąc: Unoszenie głowy w leżeniu na brzuchu, uśmiech społeczny, gruchanie.
  - 6 miesiąc: Samodzielne siedzenie z podparciem, przekładanie zabawki z rączki do rączki, gaworzenie samogłoskowe.
  - 9 miesiąc: Siedzenie bez podparcia, chwyt pęsetowy (kciuk i palec wskazujący), lęk przed obcymi.
  - 12 miesiąc: Stanie samodzielne, pierwsze słowa ze znaczeniem ("mama", "tata"), chodzenie za jedną rękę.
  - 18 miesiąc: Samodzielne chodzenie, budowanie wieży z 3-4 klocków, sygnalizowanie potrzeb fizjologicznych.
  - 24 miesiąc: Bieganie, budowanie prostych zdań 2-wyrazowych, wchodzenie po schodach.
- **Ocena Fizyczna na Siatkach Centylowych**:
  - Centyle masy ciała, długości/wzrostu i obwodu głowy. Norma wąska: 10–90 centyl; norma szeroka: 3–97 centyl.
  - Kanał centylowy: Prawidłowo dziecko powinno rozwijać się wzdłuż swojego ustalonego kanału centylowego. Przekroczenie w dół dwóch głównych linii centylowych wymaga diagnostyki w kierunku zaburzeń wzrastania (*Failure to Thrive* - FTT, celiakia, niedoczynność tarczycy, niedobór hormonu wzrostu).

## 2. Program Szczepień Ochronnych (PSO) w Polsce
- **Szczepienia Obowiązkowe (Bezpłatne w Kalendarzu Szczepień)**:
  - W 1. dobie życia: WZW typu B (HepB) oraz Gruźlica (BCG).
  - W 2. miesiącu życia: DTP (Błonica, Tężec, Krztusiec — pełnokomórkowa DTwP lub bezkomórkowa DTaP), Hib (*Haemophilus influenzae* typ b), Pneumokoki (PCV), Rotawirusy (szczepionka doustna).
  - W 13.-14. miesiącu życia: MMR (Odra, Świnka, Różyczka — szczepionka żywa atenuowana) oraz dawki przypominające PCV.
- Szczepienia zalecane: Ospa wietrzna, Meningokoki (grupy B - 4CMenB oraz grup A, C, W, Y), HPV (od 9 do 14 r.ż.), Grypa, KZM (Kleszczowe Zapalenie Mózgu).

## 3. Ostra Biegunka Infekcyjna i Odwodnienie u Dzieci
- Etiologia: Najczęściej wirusowa (Rotawirusy, Norowirusy, Adenowirusy).
- **Ocena Stopnia Odwodnienia wg WHO**:
  - *Łagodne (<3-5% ubytku masy ciała)*: Prawidłowy stan świadomości, pragnienie lekko wzmożone, prawidłowy nawrót kapilarny (<2 s), wilgotne śluzówki.
  - *Umiarkowane (5-9% ubytku masy ciała)*: Niepokój, zapadnięte gałki oczne, suchy język, opóźniony powrót fałdu skórnego (>2 s), zmniejszone wydalanie moczu (oliguria).
  - *Ciężkie ($\\ge 10% ubytku masy ciała)*: Apatia, letarg lub śpiączka, chłodne kończyny, nawrót kapilarny >3 s, tachykardia, nitkowate tętno, hipotensja (objawy wstrząsu hipowolemicznego).
- **Leczenie Odwodnienia**:
  - Odwodnienie łagodne i umiarkowane: Doustny Płyn Nawadniający (DPN / ORS o obniżonej osmolalności 245 mOsm/l) — 50–100 ml/kg m.c. w ciągu pierwszych 4 godzin, małe porcje podawane łyżeczką lub strzykawką.
  - Odwodnienie ciężkie: Natychmiastowa płynoterapia dożylna (krystaloidy — Płyn Ringera lub 0.9% NaCl) 20 ml/kg m.c. w bolusie w ciągu 15-30 minut, powtarzane do ustąpienia cech wstrząsu.

## 4. Dziecięce Choroby Wysypkowe
- **Odra (Morbilli)**: Wirus odry (Paramyxoviridae). Gorączka, zapalenie spojówek ze światłowstrętem, kaszel, plamki Koplika na błonie śluzowej policzków (patognomoniczne!). Wysypka plamisto-grudkowa zstępująca (od głowy w dół), zlewająca się, ustępująca z otrębiastym łuszczeniem.
- **Różyczka (Rubella)**: Wirus różyczki (Togaviridae). Powiększenie węzłów chłonnych karkowych i potylicznych, bladoróżowa drobnoplamista wysypka. Skrajnie niebezpieczna u kobiet w ciąży (zespół różyczki wrodzonej Gregga: zaćma, wady serca PDA, głuchota).
- **Ospa Wietrzna (Varicella)**: Wirus VZV (Herpesviridae). Wysypka polimorficzna ("obraz gwieździstego nieba"): plamki $\\to$ grudki $\\to$ pęcherzyki z płynem $\\to$ krosty $\\to$ strupki, świąd, zajęcie owłosionej skóry głowy i błon śluzowych.
- **Szkarlatyna (Płonica)**: *Streptococcus pyogenes* (Paciorkowiec grupy A). Angina paciorkowcowa, "język malinowy", drobnoplamista wysypka na tułowiu i zgięciach stawowych (objaw Pastii), trójkąt Fiłatowa (bladość wokół ust). Leczenie: Penicylina V przez 10 dni.

## 5. Literatura
1. Anna Dobrzańska, Józef Ryżko — *Pediatria. Podręcznik do Lekarskiego Egzaminu Końcowego i Państwowego Egzaminu Specjalizacyjnego*. Edra Urban & Partner.
2. Robert M. Kliegman i in. — *Nelson Textbook of Pediatrics* (21st Edition). Elsevier.`,
    reviewPrompts: `# Pediatria — Zagadnienia Egzaminacyjne i Dawkowanie Leków

## Kazusy Kliniczne (UMP)
1. **Gorączka i Wysypka Wybroczynowa**: 2-letnie dziecko przywiezione w nocy z gorączką 39.8°C, wymiotami i apatią. Na kończynach dolnych obecne drobne, nieblednące pod uciskiem wybroczyny plamicze (*petocje*), szybko narastające.
   - Jakie rozpoznanie należy natychmiast podejrzewać (inwazyjna choroba meningokokowa / posocznica meningokokowa *Neisseria meningitidis*)?
   - Jakie jest natychmiastowe postępowanie przedszpitalne (podanie ceftriaksonu i.v./i.m. lub penicyliny krystalicznej bez opóźniania transportu)?
2. **Krup (Podgłośniowe Zapalenie Krtani)**: 18-miesięczny chłopiec budzi się w nocy ze szczekającym kaszlem, świstem wdechowym (*stridor*) i dusznością.
   - Jaki wirus jest najczęstszą przyczyną (wirus paragrypy)?
   - Jaki lek podasz w pierwszej kolejności (deksametazon doustnie/domięśniowo 0.15-0.6 mg/kg m.c. oraz nebulizacja z adrenaliny w ciężkim stridorze)?
3. **Kalkulacja Płynów wg Reguły Hollidaya-Segara**: Oblicz dobowe zapotrzebowanie na płyny u 8-letniego dziecka o masie ciała 25 kg:
   - Pierwsze 10 kg: $100\\text{ ml/kg} = 1000\\text{ ml}$
   - Drugie 10 kg: $50\\text{ ml/kg} = 500\\text{ ml}$
   - Pozostałe 5 kg: $20\\text{ ml/kg} = 100\\text{ ml}$
   - Łącznie: $1600\\text{ ml/dobę}$.`,
  },
  {
    id: 'ump-med-neurologia',
    title: 'Neurologia z Neurochirurgią',
    category: 'Rok V',
    description:
      'Udar niedokrwienny i krwotoczny (tPA, trombektomia mechaniczna), padaczka, stwardnienie rozsiane (SM), choroba Parkinsona i skala Glasgow (GCS).',
    rank: 4,
    order: 0,
    coreNotes: `# Neurologia Kliniczna — Katedra i Klinika Neurologii UMP

## 1. Udar Mózgu: Diagnostyka i Leczenie Hiperostre
- **Udar Niedokrwienny Mózgu (85% przypadków)**:
  - Okno terapeutyczne: "Czas to mózg" (*Time is Brain* — obumiera 1.9 miliona neuronów na minutę nieleczonego udaru z zamknięciem dużego naczynia).
  - Skala NIHSS (National Institutes of Health Stroke Scale) do ilościowej oceny deficytu neurologicznego (0-42 pkt).
  - Wykluczenie krwawienia w pilnym badaniu TK głowy bez kontrastu (*Non-contrast CT*). Wczesne cechy niedokrwienia: zatarcie zróżnicowania korowo-podkorowego, zatarcie wstęgi wyspy, objaw hiperdensyjnej tętnicy środkowej mózgu (MCA sign).
  - **Leczenie Reperfazyjne**:
    1. *Dożylna Tromboliza (rt-PA - alteplaza)*: 0.9 mg/kg m.c. (maks. 90 mg; 10% w bolusie, 90% w 60-minutowym wlewie). Okno czasowe: do 4.5 godziny od wystąpienia objawów (lub od czasu, gdy pacjent był ostatnio widziany w stanie zdrowym). Przeciwwskazania: krwawienie wewnątrzczaszkowe, duży uraz/operacja w ciągu 14 dni, ciśnienie tętnicze $>185/110\\text{ mmHg}$ oporne na leczenie, INR > 1.7.
    2. *Trombektomia Mechaniczna (EVT)*: Wprowadzenie stentu odzyskującego (*stent retriever*) lub aspiracja skrzepliny w przypadku niedrożności dużego naczynia (LVO - Large Vessel Occlusion: ICA, odcinek M1/M2 MCA, tętnica podstawna). Okno czasowe: do 6 godzin (lub do 24 godzin przy selekcji za pomocą zaawansowanego obrazowania perfuzyjnego CT/MR wg kryteriów badań DAWN i DEFUSE-3).
- **Krwotok Śródmózgowy (ICH) i Podpajęczynówkowy (SAH)**:
  - Krwotok śródmózgowy: Najczęściej wtórny do przewlekłego nadciśnienia tętniczego (mikrotętniaki Charcota-Boucharda w jądrach podkorowych) lub mózgowej angiopatii amyloidowej (CAA — krwotoki płatowe u osób starszych).
  - Krwotok podpajęczynówkowy (SAH): Pęknięcie tętniaka workowatego koła Willisa. Nagły, najsilniejszy ból głowy w życiu ("uderzenie pioruna"), sztywność karku, światłowstręt. Powikłania: skurcz naczyniowy (*vasospasm* — profilaktyka nimodypiną), wodogłowie normotensyjne.

## 2. Padaczka i Stany Napadowe
- Klasyfikacja ILAE (2017):
  - Napady o początku ogniskowym (z zachowaną vs zaburzoną świadomością; ruchowe vs nieruchowe).
  - Napady o początku uogólnionym (napady toniczno-kloniczne *Grand Mal*, napady nieświadomości *Absence / Petit Mal* — wyładowania iglica-fala wolna 3 Hz w EEG, napady miokloniczne, atoniczne).
- **Stan Padaczkowy (Status Epilepticus)**:
  - Napad trwający $\\ge 5$ minut lub co najmniej 2 napady bez odzyskania przytomności pomiędzy nimi.
  - Terapia I rzutu: Benzodiazepiny i.v. (lorazepam 4 mg lub diazepam 10 mg i.v.; midazolam 10 mg i.m. w warunkach przedszpitalnych).
  - Terapia II rzutu: Lewetiracetam (60 mg/kg), walproinian sodu (40 mg/kg) lub fosfenytoina i.v.
  - Terapia III rzutu (po 30 minutach): Znieczulenie ogólne na OIT (propofol, midazolam, tiopental) z monitorowaniem ciągłym EEG.

## 3. Stwardnienie Rozsiane (Sclerosis Multiplex - SM)
- Przewlekła choroba autoimmunologiczna OUN charakteryzująca się rozsianiem w czasie i przestrzeni (*Dissemination in Time and Space* wg kryteriów McDonalda).
- Postaci kliniczne: Rzutowo-remisyjna (RRMS — najczęstsza), wtórnie postępująca (SPMS), pierwotnie postępująca (PPMS).
- Diagnostyka: Rezonans magnetyczny (ogniska demielinizacyjne wokół komór bocznych — "palce Dawsona"), badanie płynu mózgowo-rdzeniowego (prążki oligoklonalne IgG obecne w PMR, a nieobecne w surowicy).
- Leczenie rzutu: Metyloprednizolon 1000 mg i.v. przez 3-5 dni. Leczenie modyfikujące przebieg choroby (DMT): ocrelizumab (anty-CD20), natalizumab (anty-integryna $\\alpha_4$), fumaran dimetylu, fingolimod.

## 4. Choroby Neurozwyrodnieniowe: Zespół Parkinsona
- Zwyrodnienie neuronów dopaminergicznych w części zbitej istoty czarnej (*substantia nigra pars compacta*) z obecnością ciał Lewy'ego (agregaty $\\alpha$-synukleiny).
- Osiowe objawy parkinsonowskie (TRAP):
  - **T**remor: Drżenie spoczynkowe ("kręcenie pigułek", 4-6 Hz), ustępujące podczas ruchów celowych.
  - **R**igidity: Sztywność mięśniowa typu "rury ołowianej" lub "koła zębatego".
  - **A**kinesia / Bradykinezja: Spowolnienie ruchowe, mikrografia, hipomimia ("twarz maskowata"), chód drobnymi kroczkami z propulsją.
  - **P**ostural Instability: Niestabilność postawy (zaburzenia odruchów postawnych).
- Farmakoterapia: Lewodopa (L-DOPA z inhibitorem obwodowej DOPA-dekarboksylazy — karbidopą lub benserazydem), agoniści dopaminy (pramipeksol, ropinirol), inhibitory MAO-B (selegilina, rasagilina), stymulacja głębokomózgowa (DBS jądra niskowzgórzowego STN).

## 5. Literatura
1. Wojciech Kozubski, Paweł P. Liberski — *Neurologia. Podręcznik dla studentów medycyny* (Tomy I–II). PZWL.
2. Allan H. Ropper, Martin A. Samuels, Joshua P. Klein — *Adams and Victor's Principles of Neurology* (11th Edition). McGraw-Hill.`,
    reviewPrompts: `# Neurologia — Badanie Neurologiczne i Przypadki

## Kazusy Kliniczne (UMP)
1. **Zespół Ostrej Niedrożności Tętnicy Środkowej Mózgu (MCA)**: 70-letnia pacjentka z migotaniem przedsionków nagle doznała niedowładu połowiczego prawostronnego z przewagą kończyny górnej, opadnięcia prawego kącika ust, zwrotu gałek ocznych w stronę lewą oraz afazji całkowitej (ruchowej i czuciowej).
   - Wyjaśnij mechanizm objawów na podstawie unaczynienia półkuli dominującej przez MCA.
   - Jakie badania i decyzje terapeutyczne podejmiesz w pierwszych 15 minutach na SOR?
2. **Diagnostyka Różnicowa Objawu Babińskiego**: Czym różni się uszkodzenie ośrodkowego neuronu ruchowego (zespół piramidowy — spastyczność, wygórowane odruchy głębokie, klonusy, obecny objaw Babińskiego) od uszkodzenia obwodowego neuronu ruchowego (wiotkość, zniesienie odruchów, fascykulacje, zanik mięśni)?
3. **Skala Śpiączki Glasgow (GCS)**: Skalkuluj punktację GCS dla pacjenta po urazie czaszkowo-mózgowym, który otwiera oczy na ból (2 pkt), wydaje niezrozumiałe dźwięki (2 pkt) oraz lokalizuje bodziec bólowy (5 pkt). Łączny wynik: 9 pkt. Czy pacjent wymaga intubacji dotchawiczej (próg intubacji GCS $\\le 8$)?`,
  },
  {
    id: 'ump-med-ginekologia',
    title: 'Położnictwo, Ginekologia i Onkologia Ginekologiczna',
    category: 'Rok V',
    description:
      'Fizjologia porodu, stany nagłe w położnictwie (stan przedrzucawkowy, krwotoki), diagnostyka prenatalna i nowotwory narządu rodnego.',
    rank: 4,
    order: 1,
    coreNotes: `# Położnictwo i Ginekologia — Kliniki Ginekologiczno-Położnicze UMP (ul. Polna)

## 1. Fizjologia Ciąży i Porodu
- **Fizjologiczny Przebieg Porodu Siłami Natury**:
  - *I okres porodu*: Od początku regularnej czynności skurczowej do pełnego rozwarcia ujścia szyjki macicy (10 cm). Faza utajona i faza aktywna.
  - *II okres porodu*: Od pełnego rozwarcia do urodzenia noworodka (parcie, zwroty główki: przygięcie, obrót wewnętrzny, odgięcie, obrót zewnętrzny).
  - *III okres porodu*: Od urodzenia noworodka do wydalenia łożyska i błon płodowych (zwykle do 30 minut). Profilaktyka krwotoku: aktywne prowadzenie III okresu (oksytocyna 10 j. i.m./i.v. po urodzeniu przedniego barku, kontrolowane pociąganie za pępowinę).
  - *IV okres porodu*: Wczesny okres poporodowy (2 godziny obserwacji parametrów matki, obkurczenia macicy i krwawienia).
- **Kardiotokografia (KTG)**:
  - FHR (Fetal Heart Rate): Podstawowa akcja serca płodu (norma: 110–160 bpm).
  - Zmienność (*Variability*): Prawidłowa 5–25 bpm.
  - Akceleracje: Przemijający wzrost FHR o $\\ge 15$ bpm trwający $\\ge 15$ s (świadczy o dobrostanie płodu).
  - Deceleracje:
    - Deceleracje wczesne: Synchroniczne ze skurczem macicy, wynik kompresji główki płodu (odruch z nerwu błędnego), fizjologiczne.
    - Deceleracje późne: Rozpoczynają się po szczycie skurczu macicy; objaw hipoksji płodu i niewydolności maciczno-łożyskowej (wskazanie do pilnego cięcia cesarskiego!).
    - Deceleracje zmienne: Związane z uciskiem pępowiny.

## 2. Stany Nagłe w Położnictwie
- **Stan Przedrzucawkowy (Preeclampsia - PE) i Rzucawka (Eclampsia)**:
  - Definicja PE: Nowo rozpoznane nadciśnienie tętnicze ($\\ge 140/90\\text{ mmHg}$) po 20. tygodniu ciąży z towarzyszącym białkomoczem ($\\ge 300\\text{ mg/24 h}$ lub PCR $\\ge 0.3\\text{ mg/mg}$) lub cechami dysfunkcji narządowej matki (małopłytkowość, uszkodzenie wątroby, niewydolność nerek, zaburzenia neurologiczne).
  - Zespół HELLP: Powikłanie ciężkiej PE: **H**emolysis (niedokrwistość hemolityczna mikroangiopatyczna, schistocyty, podwyższona bilirubina i LDH), **E**levated **L**iver enzymes (wzrost AST/ALT), **L**ow **P**latelets (małopłytkowość $<100 000/\\mu$l).
  - Rzucawka: Wystąpienie drgawek toniczno-klonicznych u pacjentki z PE niewyjaśnionych inną przyczyną.
  - Leczenie: Siarczan magnezu ($MgSO_4$ — schemat Pritchard: dawka nasycająca 4-6 g i.v., podtrzymująca 1-2 g/h) jako lek przeciwdrgawkowy z wyboru. Leki hipotensyjne: labetalol, metyldopa, hydralazyna. Ostateczne leczenie: ukończenie ciąży.
- **Krwotoki Położnicze i Krwotok Poporodowy (PPH)**:
  - Utrata krwi $>500\\text{ ml}$ po porodzie siłami natury lub $>1000\\text{ ml}$ po cięciu cesarskim.
  - Zasada 4T:
    1. **T**one (Atonia macicy — 70% przyczyn): brak obkurczenia macicy. Postępowanie: masaż macicy, uterotoniki (oksytocyna, metyloergometryna, karboprost, mizoprostol), tamponada balonowa Bakriego.
    2. **T**rauma (Uraz dróg rodnych): pęknięcie krocza, szyjki macicy, krwiaki.
    3. **T**issue (Zatrzymanie tkanek): resztki łożyska lub błon płodowych (wymaga łyżeczkowania).
    4. **T**hrombin (Zaburzenia krzepnięcia): DIC, koagulopatia ze zużycia.

## 3. Onkologia Ginekologiczna
- **Rak Szyjki Macicy**:
  - Etiologia: Przetrwałe zakażenie onkogennymi typami wirusa brodawczaka ludzkiego (HPV 16 i 18 odpowiadają za 70% przypadków; onkoproteiny E6 degradująca p53 i E7 inaktywująca pRb).
  - Profilaktyka: Szczepienia przeciw HPV oraz cytologia (konwencjonalna lub na podłożu płynnym LBC) z testem molekularnym HPV-DNA.
- **Rak Trzonu Macicy (Rak Błony Śluzowej Macicy / Endometrium)**:
  - Najczęstszy nowotwór złośliwy narządu rodnego w krajach rozwiniętych.
  - Czynniki ryzyka: hiperestrogenizm bez równoważącego wpływu progesteronu (otyłość, cukrzyca, nierództwo, tamoksyfen, zespół Lyncha).
  - Objaw kardynalny: Krwawienie z dróg rodnych u kobiety po menopauzie (wymaga pilnej biopsji aspiracyjnej endometrium lub abrazji frakcjonowanej).

## 4. Literatura
1. Grzegorz H. Bręborowicz (red.) — *Położnictwo i ginekologia* (Tomy I–II). Wydawnictwo Lekarskie PZWL (Profesor Bręborowicz — wieloletni Rektor UMP i nestor polskiego położnictwa!).
2. F. Gary Cunningham i in. — *Williams Obstetrics* (25th Edition). McGraw-Hill.`,
    reviewPrompts: `# Ginekologia i Położnictwo — Kazusy Kliniczne

## Kazusy Kliniczne (UMP)
1. **Postępowanie w Ciężkim Stanie Przedrzucawkowym**: Ciężarna w 34. tygodniu ciąży zgłasza się z ciśnieniem 175/110 mmHg, silnym bólem głowy i zaburzeniami widzenia ("błyski przed oczami"). W moczu białkomocz 4.5 g/dobę.
   - Jakie leki wdrożysz natychmiast (siarczan magnezu we wlewie i.v. w profilaktyce drgawek rzucawkowych + labetalol i.v.)?
   - Wskaż objawy toksyczności magnezu (zanik odruchu rzepkowego, depresja oddechowa) oraz podaj odtrutkę (glukonian wapnia 10% i.v.).
2. **Diagnostyka Krwawienia w III Trymestrze**: Kobieta w 32. tygodniu ciąży zgłasza się z nagłym, obfitym, bezbolesnym krwawieniem z dróg rodnych żywoczerwoną krwią. Brzuch jest miękki, niebolesny.
   - Jaką patologię podejrzewasz w pierwszej kolejności (łożysko przodujące - *placenta previa*)?
   - Dlaczego badanie palpacyjne przez pochwę (*per vaginam*) jest w tym momencie bezwzględnie przeciwwskazane przed wykonaniem USG?
3. **Ciąża Pozamaciczna (Ektopowa)**: 26-letnia pacjentka z opóźnieniem miesiączki o 3 tygodnie zgłasza ból w podbrzuszu po stronie prawej. Stężenie $\\beta$-hCG wynosi 3500 mIU/ml, a w przezpochwowym USG jama macicy jest pusta. Jakie jest rozpoznanie i postępowanie?`,
  },
  {
    id: 'ump-med-psychiatria',
    title: 'Psychiatria i Zdrowie Psychiczne',
    category: 'Rok V',
    description:
      'Zaburzenia nastroju (depresja, ChAD), schizofrenia, zaburzenia lękowe, psychofarmakoterapia (SSRI, SNRI, LPP) i stany nagłe w psychiatrii.',
    rank: 4,
    order: 2,
    coreNotes: `# Psychiatria Kliniczna — Katedra Psychiatrii UMP (Szpital Kliniczny przy ul. Szpitalnej)

## 1. Zaburzenia Nastroju (Afektywne) wg ICD-11 i DSM-5
- **Epizod Depresyjny (Depresja Duża - MDD)**:
  - Kryteria diagnostyczne (przynajmniej 5 z 9 objawów trwających $\\ge 2$ tygodnie, w tym przynajmniej jeden objaw osiowy):
    1. Obniżony nastrój (dysforia, smutek) przez większość dnia.
    2. Anhedonia: utrata zainteresowań i zdolności odczuwania przyjemności (objaw osiowy).
    3. Spadek lub wzrost masy ciała / apetytu.
    4. Bezsenność (zwłaszcza wczesne wybudzanie się rano) lub hipersomnia.
    5. Pobudzenie lub zahamowanie psychoruchowe.
    6. Przewlekłe zmęczenie, spadek energii.
    7. Poczucie bezwartościowości lub nadmierne, nieadekwatne poczucie winy.
    8. Trudności w koncentracji i podejmowaniu decyzji.
    9. Nawracające myśli o śmierci, myśli lub plany samobójcze.
- **Choroba Afektywna Dwubiegunowa (ChAD / Bipolar Disorder)**:
  - *ChAD Typu I*: Wystąpienie co najmniej jednego pełnego epizodu manii (nastrój euforyczny lub drażliwy, gonitwa myśli, słowotok, zmniejszona potrzeba snu np. 2 h na dobę, zachowania wielkościowe i ryzykowne — wydawanie pieniędzy, hiperseksualność).
  - *ChAD Typu II*: Wystąpienie co najmniej jednego epizodu hipomanii (brak zaburzeń funkcjonowania społecznego, brak objawów psychotycznych) oraz co najmniej jednego ciężkiego epizodu depresji.
  - Leki stabilizujące nastrój (normotymiki): Lit (węglan litu — złoty standard redukujący ryzyko samobójstwa, wąskie okno terapeutyczne 0.6–1.0 mmol/l), walproinian sodu, lamotrygina, atypowe leki przeciwpsychotyczne (kwetiapina, olanzapina).

## 2. Schizofrenia i Zaburzenia Psychotyczne
- **Objawy Schizofrenii wg Kraepelina i Bleulera (4A)**:
  - Autyzm, Zaburzenia Asocjacji (rozkojarzenie), Zaburzenia Afektu (afekt blady/niedostosowany), Ambiwalencja / Ambitendencja.
- **Współczesny Podział Objawów**:
  - *Objawy pozytywne (wytwórcze)*: Omamy (halucynacje — najczęściej słuchowe komentujące lub nakazujące) oraz urojeniowe interpretacje rzeczywistości (urojenia prześladowcze, ksobne, oddziaływania, odsłonięcia myśli).
  - *Objawy negatywne (ubytkowe)*: Apatia, abulia (brak woli działania), anhedonia, alogia (ubóstwo mowy), wycofanie społeczne.
  - *Objawy dezorganizacji*: Rozkojarzenie toku myślenia, neologizmy, zachowania dziwaczne, katatonia (otępienie lub pobudzenie katatoniczne, objaw giętkości woskowej *flexibilitas cerea*).
- **Hipoteza Dopaminowa Schizofrenii**: Nadaktywność dopaminergiczna w szlaku mezolimbicznym (odpowiada za objawy pozytywne) oraz hipoaktywność dopaminergiczna w szlaku mezokortykalnym (objawy negatywne i poznawcze).

## 3. Psychofarmakoterapia Nowoczesna
- **Leki Przeciwdepresyjne**:
  - *SSRI (Inhibitory wychwytu zwrotnego serotoniny)*: Sertralina, escitalopram, paroksetyna, fluoksetyna. Leki I rzutu w depresji i zaburzeniach lękowych. Efekt terapeutyczny ujawnia się po 2–4 tygodniach.
  - *SNRI (Serotonina + Noradrenalina)*: Wenlafaksyna, duloksetyna (skuteczne także w bólu neuropatycznym).
  - *Inne*: Bupropion (NDRI — brak dysfunkcji seksualnych), Mirtazapina (antagonista $\\alpha_2$ — nasila sen i apetyt).
- **Leki Przeciwpsychotyczne (Neuroleptyki)**:
  - *Klasyczne (I generacja - FGA)*: Haloperidol, chlorpromazyna. Silni antagoniści receptora $D_2$. Wysokie ryzyko objawów pozapiramidowych (EPS: dystonie ostre, akatyzja, parkinsonizm polekowy, późne dyskinezy).
  - *Atypowe (II generacja - SGA)*: Olanzapina, kwetiapina, rysperydon, arypiprazol (częściowy agonista $D_2$), klozapina (jedyny lek zarejestrowany w schizofrenii lekoopornej; ryzyko agranulocytozy wymagające monitorowania morfologii krwi!). Niższe ryzyko EPS, wyższe ryzyko zespołu metabolicznego (przyrost masy ciała, hiperglikemia, dyslipidemia).

## 4. Stany Nagłe w Psychiatrii
- **Złośliwy Zespół Neuroleptyczny (NMS)**:
  - Zagrażające życiu powikłanie terapii neuroleptykami: skrajna sztywność mięśniowa ("sztywność rury ołowianej"), hipertermia (>38-40°C), niestabilność wegetatywna (tachykardia, labilne ciśnienie tętnicze), zaburzenia świadomości, potężny wzrost kinazy kreatynowej (CK > 1000–10000 U/l) i leukocytoza.
  - Leczenie: Natychmiastowe odstawienie neuroleptyku, chłodzenie, płynoterapia, bromokryptyna (agonista dopaminy) oraz dantrolen (lek zwiotczający mięśnie).
- **Zespół Serotoninowy**:
  - Nadmiar serotoniny (np. połączenie SSRI z MAOI lub tramadolem): klonusy, hiperrefleksja, pobudzenie, biegunka, drżenia.
- **Ocena Ryzyka Samobójczego**: Skala SAD PERSONS.

## 5. Literatura
1. Janusz Rybakowski, Stanisław Pużyński, Jacek Wciórka — *Psychiatria* (Tomy I–III). Elsevier Urban & Partner (Profesor Rybakowski — światowy autorytet w terapii litem i wieloletni kierownik Kliniki Psychiatrii Dorosłych UMP!).
2. Benjamin J. Sadock, Virginia A. Sadock, Pedro Ruiz — *Kaplan & Sadock's Comprehensive Textbook of Psychiatry*. Wolters Kluwer.`,
    reviewPrompts: `# Psychiatria — Kazusy Kliniczne i Diagnostyka

## Kazusy Kliniczne (UMP)
1. **Ostra Dystonia Polekowa vs Złośliwy Zespół Neuroleptyczny**: 24-letni pacjent po podaniu 5 mg haloperidolu i.m. na ostrym dyżurze doznał bolesnego skrętu szyi w jedną stronę (*torticollis*) oraz przymusowego patrzenia gałkami ocznymi w górę (*napady spojrzeniowe*).
   - Jakie jest rozpoznanie (ostra dystonia polekowa)?
   - Jaki lek podasz w celu natychmiastowego przerwania objawów (antycholinergik: biperyden 5 mg i.v./i.m. lub difenhydramina)?
2. **Kwalifikacja do Klozapiny w Schizofrenii**: U 28-letniego pacjenta ze schizofrenią paranoidalną nie uzyskano remisji pomimo kolejnego stosowania olanzapiny (20 mg/d przez 8 tyg.) i rysperydonu (6 mg/d przez 8 tyg.).
   - Wyjaśnij kryteria rozpoznania schizofrenii lekoopornej.
   - Jakie badanie krwi musi być wykonane przed rozpoczęciem leczenia klozapiną oraz jak często musi być powtarzane w pierwszych 18 tygodniach (morfologia krwi z rozmazem — bezwzględna liczba neutrofili ANC co tydzień)?
3. **Toksyczność Litu**: Pacjent z ChAD leczony litem zgłasza nasilone drżenie rąk, ataksję, dyzartrię, nudności i biegunkę. Poziom litu wynosi 2.1 mmol/l. Jakie jest postępowanie (nawadnianie solą fizjologiczną, hemodializa przy ciężkiej intoksykacji)?`,
  },
  {
    id: 'ump-med-sor',
    title: 'Medycyna Ratunkowa i Intensywna Terapia (ACLS/ATLS)',
    category: 'Rok VI',
    description:
      'Resuscytacja krążeniowo-oddechowa (ALS wg ERC), intubacja w trybie RSI, wstrząs anafilaktyczny, zatrucia i ultrasonografia stanów nagłych (POCUS).',
    rank: 5,
    order: 0,
    coreNotes: `# Medycyna Ratunkowa i Stanów Nagłych — Zakład Medycyny Ratunkowej UMP

## 1. Zaawansowane Zabiegi Resuscytacyjne (ALS wg Wytycznych ERC 2021/2025)
- **Algorytm Nagłego Zatrzymania Krążenia (NZK)**:
  - Rozpoznanie: Brak reakcji na bodźce, brak prawidłowego oddechu (lub agonalny oddech *gasping*), brak tętna na tętnicy szyjnej przez maksymalnie 10 sekund.
  - Natychmiastowe rozpoczęcie uciśnięć klatki piersiowej: Częstość 100–120/min, głębokość 5–6 cm, pełna relaksacja klatki piersiowej, minimalizacja przerw w uciskaniu. Stosunek uciśnięć do wentylacji 30:2 (lub uciskanie ciągłe po intubacji z wentylacją 10 oddechów/min).
  - Podłączenie kardiomonitora / defibrylatora i ocena rytmu serca:
- **Rytmy do Defibrylacji (Shockable Rhythms)**:
  - *Migotanie komór (VF - Ventricular Fibrillation)* oraz *Częstoskurcz komorowy bez tętna (pVT - Pulseless Ventricular Tachycardia)*.
  - Wykonaj 1 wyładowanie defibrylatora (dwufazowy: 150–200 J; jednofazowy: 360 J).
  - Natychmiast podejmij RKO przez 2 minuty (bez sprawdzania tętna i rytmu zaraz po strzale!).
  - Ocena rytmu po 2 minutach: Jeśli nadal VF/pVT $\\to$ 2. wyładowanie $\\to$ RKO 2 minuty $\\to$ po 3. nieskutecznym wyładowaniu podaj **Adrenalinę 1 mg i.v.** oraz **Amiodaron 300 mg i.v.** (lub lidokainę 100 mg). Kolejna dawka amiodaronu 150 mg po 5. wyładowaniu. Adrenalina powtarzana co 3–5 minut (co drugi cykl).
- **Rytmy Niedefibrylacyjne (Non-Shockable Rhythms)**:
  - *Asystolia* oraz *Aktywność elektryczna bez tętna (PEA - Pulseless Electrical Activity)*.
  - Brak wskazań do defibrylacji! Natychmiast RKO 2 minuty.
  - **Adrenalina 1 mg i.v.** podana tak szybko, jak to możliwe, i powtarzana co 3–5 minut.
- **Odwracalne Przyczyny NZK (Reguła 4H i 4T)**:
  - **4H**: Hipoksja, Hipowolemia, Hipo-/Hiperkaliemia (oraz inne zaburzenia metaboliczne/kwasica), Hipo-/Hipertermia.
  - **4T**: Tamponada serca, Toksyny / Zatrucia, Thrombosis (Zatorowość płucna lub zawał wieńcowy), Tension pneumothorax (Odma prężna).

## 2. Zabezpieczenie Dróg Oddechowych: Intubacja w Trybie Szybkim (RSI)
- **Rapid Sequence Induction / Intubation (RSI)**:
  - Wskazania: Niewydolność oddechowa, utrata odruchów obronnych (GCS $\\le 8$), wysokie ryzyko aspiracji treści żołądkowej ("pełny żołądek").
  - Etapy RSI (7P):
    1. *Preparation*: Sprzęt (laryngoskop / wideolaryngoskop, rurka intubacyjna z mankietem, ssak, leki, sprzęt do ratunkowej konikotomii).
    2. *Preoxygenation*: 100% tlen przez 3-5 minut (wypłukanie azotu z płuc, stworzenie rezerwy tlenowej na czas bezdechu).
    3. *Pretreatment*: Opcjonalnie leki zmniejszające odczyn współczulny (np. fentanyl).
    4. *Paralysis with induction*: Równoczesne podanie leku indukującego sen (etomidat 0.3 mg/kg, ketamina 1-2 mg/kg lub propofol 1.5-2.5 mg/kg) oraz środka zwiotczającego o szybkim początku (sukcynylocholina 1.5 mg/kg lub rokuronium 1.2 mg/kg).
    5. *Protection and positioning*: Pozycja węszenia (*sniffing position*).
    6. *Placement with proof*: Wprowadzenie rurki pod kontrolą wzroku przez struny głosowe. Weryfikacja: kapnografia ilościowa (krzywa $EtCO_2$ — złoty standard!), osłuchiwanie symetrii szmerów oddechowych.
    7. *Post-intubation management*: Zabezpieczenie rurki, sedacja, mechaniczna wentylacja.

## 3. Tachyarytmie i Bradyarytmie w Stanach Nagłych
- **Bradykardia z Objawami Zagrożenia Życia (Hipotensja, Wstrząs, Omdlenie)**:
  - Lek I rzutu: Atropina 0.5 mg i.v. (powtarzana do dawki maks. 3 mg).
  - Przy braku reakcji: Adrenalina we wlewie (2–10 $\\mu$g/min), dopamina (2–10 $\\mu$g/kg/min) lub przezskórna elektrostymulacja serca (*Transcutaneous Pacing*).
- **Tachyarytmie Niestabilne (Zaburzenia Świadomości, Ból Wieńcowy, Wstrząs)**:
  - Wskazanie do natychmiastowej kardiowersji elektrycznej zsynchronizowanej z załamkiem R w EKG (w sedacji).

## 4. Literatura
1. European Resuscitation Council (ERC) — *Guidelines for Resuscitation 2021*. Resuscitation Journal.
2. Judith E. Tintinalli i in. — *Tintinalli's Emergency Medicine: A Comprehensive Study Guide* (9th Edition). McGraw-Hill.`,
    reviewPrompts: `# Medycyna Ratunkowa — Scenariusze Symulacyjne (ALS/POCUS)

## Scenariusze Symulacji Medycznej (UMP)
1. **Scenariusz NZK w Rytmie VF**: Zespół RKO wjeżdża do sali chorych, gdzie u 62-letniego mężczyzny doszło do nagłego zatrzymania krążenia. Kardiomonitor pokazuje migotanie komór (VF).
   - Krok po kroku przedstaw komendy kierownika zespołu (lidera RKO) przez pierwsze 3 cykle defibrylacji.
   - Kiedy podasz amiodaron i adrenalinę? Jaką energię wyładowania ustawisz na defibrylatorze dwufazowym?
2. **Postępowanie w Ciężkiej Hiperkaliemii z Zapisem EKG**: Pacjent dializowany z poziomem potasu $K^+ = 8.2\\text{ mmol/l}$. EKG wykazuje wysokie, szpiczaste załamki T, poszerzenie zespołów QRS i spłaszczenie załamków P.
   - Jaki lek podasz w pierwszej kolejności w celu stabilizacji błony komórkowej kardiomiocytów (10% glukonian wapnia lub chlorek wapnia i.v.)?
   - Jakie leki zastosujesz w celu przesunięcia potasu do wnętrza komórek (insulina krótzkodziałająca z 40% glukozą, nebulizacja z salbutamolu)?
   - W jaki sposób usuniesz nadmiar potasu z organizmu (hemodializa na cito, żywice jonowymienne)?
3. **Odwrócenie Blokady Nerwowo-Mięśniowej po Rokuronium**: Wyjaśnij mechanizm działania sugammadeksu jako cząsteczki chelatującej rokuronium w sytuacji "can't intubate, can't oxygenate" (CICO).`,
  },
  {
    id: 'ump-med-praktyka-lek',
    title: 'Repetytorium Kliniczne i Przygotowanie do LEK',
    category: 'Rok VI',
    description:
      'Integracja wiedzy klinicznej z 6 lat studiów, analiza pytań Lekarskiego Egzaminu Końcowego (LEK), prawo medyczne i bioetyka.',
    rank: 5,
    order: 1,
    coreNotes: `# Repetytorium Kliniczne i Przygotowanie do LEK — Wydział Lekarski UMP

## 1. Struktura i Zakres Merytoryczny Lekarskiego Egzaminu Końcowego (LEK)
- **Organizacja Egzaminu (Centrum Egzaminów Medycznych w Łodzi - CEM)**:
  - 200 pytań testowych jednokrotnego wyboru (5 dystraktorów, 1 poprawna odpowiedź), czas trwania: 4 godziny.
  - Próg zaliczenia: 56% poprawnych odpowiedzi (minimum 112 punktów).
  - Podział dziedzinowy pytań:
    - Choroby Wewnętrzne (w tym kardiologia, pulmonologia, nefrologia, gastrologia, endokrynologia, hematologia, reumatologia): 39 pytań.
    - Pediatria (w tym neonatologia): 29 pytań.
    - Chirurgia (w tym chirurgia ogólna, urazowa, dziecięca, naczyniowa): 27 pytań.
    - Położnictwo i Ginekologia: 26 pytań.
    - Medycyna Ratunkowa i Intensywna Terapia: 20 pytań.
    - Medycyna Rodzinna: 20 pytań.
    - Psychiatria: 14 pytań.
    - Bioetyka i Prawo Medyczne: 10 pytań.
    - Zdrowie Publiczne i Orzecznictwo Lekarskie: 15 pytań.

## 2. Wysokopunktowane Zagadnienia Problemowe (High-Yield Topics)
- **Interpretacja Badań Laboratoryjnych w LEK**:
  - Wskaźniki uszkodzenia wątroby: Wzrost ALT/AST >1000 U/l (ostre wirusowe zapalenie, zatrucie paracetamolem, niedokrwienie wątroby). Wskaźniki cholestazy: ALP (fosfataza zasadowa) i GGTP (zapalenie dróg żółciowych, kamica przewodowa, PBC, PSC).
  - Różnicowanie niedokrwistości: MCV < 80 fl (mikrocytarna: niedobór żelaza z niską ferrytyną vs anemia chorób przewlekłych z wysoką ferrytyną vs talasemia); MCV > 100 fl (makrocytarna: niedobór witaminy B12 / kwasu foliowego, alkoholizm, mielodysplazja).
- **Złote Standardy Diagnostyczne i Leki Pierwszego Rzutu**:
  - Zapalenie opon mózgowo-rdzeniowych: Nakłucie lędźwiowe PMR (wcześniejsze TK głowy tylko przy podejrzeniu ciasnoty wewnątrzczaszkowej lub ogniskowych objawach ubytkowych). Leczenie empiryczne: Ceftriakson + Wankomycyna (+ Ampicylina u osób >50 r.ż. lub z obniżoną odpornością przeciw *Listeria monocytogenes*) + Deksametazon.
  - Zatorowość płucna: Angio-TK klatki piersiowej.
  - Tętniak aorty brzusznej (AAA): Badanie przesiewowe: USG; planowanie zabiegu: Angio-TK. Wskazanie do operacji: średnica $\\ge 55\\text{ mm}$ u mężczyzn, $\\ge 50\\text{ mm}$ u kobiet lub szybki rozrost $>10\\text{ mm}$ na rok.

## 3. Prawo Medyczne i Kodeks Etyki Lekarskiej (KEL)
- **Zgoda na Udzielenie Świadczenia Zdrowotnego**:
  - Pacjent małoletni do 16 r.ż.: Zgodę wyraża przedstawiciel ustawowy (rodzic/opiekun).
  - Pacjent w wieku 16–18 lat: Zgoda podwójna (zgoda równoległa pacjenta i przedstawiciela ustawowego). W przypadku rozbieżności decyduje Sąd Opiekuńczy.
  - Zabiegi operacyjne i metody leczenia o podwyższonym ryzyku wymagają bezwzględnie zgody pisemnej.
  - Działanie bez zgody: Dopuszczalne wyłącznie w sytuacji nagłej, gdy zwłoka groziłaby niebezpieczeństwem utraty życia lub ciężkiego uszczerbku na zdrowiu (art. 33 i 34 Ustawy o zawodach lekarza i lekarza dentysty), po zasięgnięciu w miarę możliwości opinii drugiego lekarza i odnotowaniu w dokumentacji.
- **Tajemnica Lekarska**:
  - Obowiązuje również po śmierci pacjenta.
  - Zwolnienie z tajemnicy: Zgoda pacjenta (lub po śmierci osoby bliskiej, chyba że inna osoba bliska się sprzeciwi), żądanie sądu lub prokuratora w postępowaniu karnym, gdy zachowanie tajemnicy zagraża życiu lub zdrowiu pacjenta lub innych osób, orzekanie w sprawach sanitarno-epidemiologicznych.

## 4. Literatura
1. Baza Oficjalnych Pytań LEK — Centrum Egzaminów Medycznych (CEM w Łodzi).
2. Ustawa z dnia 5 grudnia 1996 r. o zawodach lekarza i lekarza dentysty.
3. Kodeks Etyki Lekarskiej (KEL) — Naczelna Izba Lekarska (NIL).`,
    reviewPrompts: `# Repetytorium do LEK — Przykładowe Pytania Egzaminacyjne CEM

## Pytania Testowe Format LEK
1. **Pytanie LEK (Interna / Kardiologia)**: 65-letni mężczyzna z utrwalonym migotaniem przedsionków i nadciśnieniem tętniczym, bez przebytego udaru mózgu i bez cukrzycy. Wskaż właściwe postępowanie przeciwkrzepliwe na podstawie skali $CHA_2DS_2-VASc$:
   - A. Tylko kwas acetylosalicylowy (ASA 75 mg)
   - B. ASA w połączeniu z klopidogrelem
   - C. Doustny antykoagulant niebędący antagonistą witaminy K (DOAC) lub VKA
   - D. Brak konieczności stosowania antykoagulacji
   - E. Heparyna drobnocząsteczkowa w dawce profilaktycznej
   *(Odpowiedź prawidłowa: C. Punktacja $CHA_2DS_2-VASc = 2$ — wiek 65-74 lata [1 pkt] + nadciśnienie [1 pkt]; u mężczyzn $\\ge 2$ pkt stanowi bezwzględne wskazanie do DOAC/VKA).*
2. **Pytanie LEK (Pediatria)**: 3-letnie dziecko z nagłą dusznością wdechową, wysoką gorączką 40°C, ślinotokiem, przyjmujące pozycję "wąchacza" z wyciągniętą szyją. Które z poniższych działań jest bezwzględnie przeciwwskazane:
   - A. Badanie gardła szpatułką w gabinecie bez zabezpieczenia anestezjologicznego
   - B. Podanie tlenu przez maskę
   - C. Wezwanie zespołu anestezjologicznego do intubacji
   - D. Podanie ceftriaksonu dożylnie
   - E. Monitorowanie saturacji pulsoksymetrem
   *(Odpowiedź prawidłowa: A. Podejrzenie ostrego zapalenia nagłośni epiglottitis; podrażnienie szpatułką grozi nagłym skurczem krtani i zgonem).*
3. **Pytanie LEK (Prawo Medyczne)**: Kto jest uprawniony do wyrażenia zgody na pobranie komórek, tkanek lub narządów ze zwłok osoby zmarłej w Polsce:
   - W Polsce obowiązuje zasada zgody domniemanej (pobranie jest dopuszczalne, o ile zmarły za życia nie wyraził sprzeciwu w Centralnym Rejestrze Sprzeciwów CRS, w formie pisemnej lub ustnej w obecności 2 świadków).`,
  },
];
