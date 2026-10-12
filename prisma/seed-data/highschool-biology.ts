import type { Course, SeedEdge } from './types.js';

export const highschoolBiologyEdges: SeedEdge[] = [
  // Rank 0 -> Rank 1
  { id: 'bio-chem-kom', source: 'bio-chemia-zycia', target: 'bio-komorka' },

  // Rank 1 -> Rank 2
  { id: 'bio-kom-metab', source: 'bio-komorka', target: 'bio-metabolizm' },

  // Rank 2 -> Rank 3
  { id: 'bio-metab-genmol', source: 'bio-metabolizm', target: 'bio-genetyka-mol' },
  { id: 'bio-kom-genklas', source: 'bio-komorka', target: 'bio-genetyka-klas' },

  // Rank 3 -> Rank 4
  { id: 'bio-metab-fizjo', source: 'bio-metabolizm', target: 'bio-fizjologia-czlowieka' },
  { id: 'bio-genmol-odpor', source: 'bio-genetyka-mol', target: 'bio-odpornosc' },
  { id: 'bio-fizjo-odpor', source: 'bio-fizjologia-czlowieka', target: 'bio-odpornosc' },

  // Rank 4 -> Rank 5
  { id: 'bio-genklas-ewolucja', source: 'bio-genetyka-klas', target: 'bio-ewolucja-ekologia' },
  { id: 'bio-odpor-ewolucja', source: 'bio-odpornosc', target: 'bio-ewolucja-ekologia' },
];

export const highschoolBiologyCourses: Course[] = [
  // Rank 0
  {
    id: 'bio-chemia-zycia',
    title: 'Chemiczne Podstawy Życia i Enzymologia',
    category: 'Biochemia Komórki',
    description:
      'Woda, pierwiastki biogenne, węglowodany, lipidy, białka, struktura enzymów, kinetyka Michaelisa-Menten oraz inhibicja (CKE).',
    rank: 0,
    order: 0,
    coreNotes: `# Chemiczne Podstawy Życia i Enzymologia — Matura Rozszerzona CKE

## 1. Właściwości Fizykochemiczne Wody a Życie
Woda stanowi 60–80% masy organizmów i posiada unikalne właściwości wynikające z jej dipolarnej budowy i tworzenia wiązań wodorowych:
- **Wysokie ciepło właściwe**: Zapewnia termostabilność organizmów zmienno- i stałocieplnych.
- **Wysokie ciepło parowania**: Umożliwia termoregulację (parowanie potu u ssaków, transpiracja u roślin).
- **Duże napięcie powierzchniowe i siły kohezji/adhezji**: Umożliwiają transport wody w naczyniach ksylemu wbrew sile grawitacji.
- **Gęstość maksymalna w temperaturze 4°C**: Zjawisko anomalnej rozszerzalności wody umożliwia przetrwanie organizmów wodnych przy dnie zamarzających zbiorników.

## 2. Makrocząsteczki Biologiczne
- **Białka**: Polimery złożone z 20 L-$\\alpha$-aminokwasów połączonych wiązaniami peptydowymi ($-CO-NH-$).
  - Struktura I-rzędowa: Liniowa sekwencja aminokwasów.
  - Struktura II-rzędowa: $\\alpha$-helisa i $\\beta$-harmonijka (wiązania wodorowe).
  - Struktura III-rzędowa: Przestrzenne zwinięcie pod wpływem mostków disiarczkowych ($-S-S-$), oddziaływań hydrofobowych i elektrostatycznych.
  - Struktura IV-rzędowa: Kompleks kilku łańcuchów polipeptydowych (np. tetramer hemoglobiny).
- **Lipidy**: Związki hydrofobowe. Fosfolipidy (cząsteczki amfipatyczne budujące dwuwarstwy błonowe), triglicerydy (magazyn energii), steroidy (cholesterol stabilizujący błony).

## 3. Enzymologia i Kinetyka Reakcji
- Enzymy to biokatalizatory obniżające energię aktywacji ($E_a$) reakcji chemicznej bez wpływu na stałą równowagi.
- Centrum aktywne enzymu: Miejsce wiązania substratu (model indukowanego dopasowania Koshlanda).
- Czynniki wpływające na aktywność: Temperatura (optimum, denaturacja termiczna powyżej 45–50°C), pH środowiska (pepsyna pH 1.5–2, trypsyna pH 8).
- **Inhibicja enzymatyczna**:
  - *Kompetycyjna*: Inhibitor ma strukturę zbliżoną do substratu i konkuruje o centrum aktywne (zwiększa $K_m$, nie zmienia $V_{\\max}$).
  - *Niekompetycyjna*: Inhibitor wiąże się poza centrum aktywnym (nie zmienia $K_m$, zmniejsza $V_{\\max}$).

## 3. Wiązania Chemiczne w Makrocząsteczkach Biologicznych
- **Wiązanie peptydowe**: Kowalencyjne wiązanie amidowe powstające między grupą $\alpha$-karboksylową jednego aminokwasu a grupą $\alpha$-aminową drugiego. Posiada częściowy charakter wiązania podwójnego (40%), co wymusza sztywność i płaską strukturę w konfiguracji *trans*.
- **Rzędowość struktury białek**:
  - *I-rzędowa*: Liniowa sekwencja aminokwasów połączonych wiązaniami peptydowymi.
  - *II-rzędowa*: Regularne sfałdowania łańcucha polipeptydowego ($\alpha$-helisa, $\beta$-harmonijka) stabilizowane wiązaniami wodorowymi między atomami szkieletu peptydowego.
  - *III-rzędowa*: Przestrzenne ułożenie łańcucha stabilizowane mostkami dwusiarczkowymi ($-S-S-$ cysteiny), wiązaniami jonowymi, oddziaływaniami hydrofobowymi i siłami van der Waalsa.
  - *IV-rzędowa*: Przestrzenny kompleks dwóch lub więcej podjednostek polipeptydowych (np. tetramer hemoglobiny $\alpha_2\beta_2$).
- **Właściwości wody kluczowe dla biosfery**:
  - Wysokie ciepło właściwe i ciepło parowania — doskonały termoregulator homeostazy ustrojowej.
  - Największa gęstość w temperaturze $+4^\circ\text{C}$ — umożliwia przetrwanie organizmów wodnych przy dnie zamarzających zbiorników.
  - Kohezja (wiązania wodorowe) i adhezja — kapilarny transport wody w wiązkach naczyniowych roślin (ksylemie) pod wpływem ssącej siły transpiracji.`,
    reviewPrompts: `# Enzymologia — Zadania Maturalne CKE
1. Na podstawie wykresu kinetyki reakcji enzymatycznej wyjaśnij, jak obecność inhibitora kompetycyjnego wpływa na stałą Michaelisa $K_m$ oraz prędkość maksymalną $V_{\\max}$.
2. Wyjaśnij, dlaczego wysokie stężenie soli metali ciężkich powoduje nieodwracalną denaturację białek.
3. Wyjaśnij, dlaczego denaturacja białka pod wpływem wysokiej temperatury prowadzi do utraty jego aktywności katalitycznej, odnosząc się do rzędowości struktur białkowych.
4. Porównaj strukturę i funkcję biologiczną glikogenu, skrobi oraz celulozy, uwzględniając rodzaj tworzących je monomerów i typy wiązań glikozydowych.`,
  },

  // Rank 1
  {
    id: 'bio-komorka',
    title: 'Budowa Komórki i Błony Biologiczne',
    category: 'Cytologia',
    description:
      'Organella komórkowe, teoria endosymbiozy, transport bierny i aktywny przez błony, cytoszkielet, cykl komórkowy, mitoza i mejoza.',
    rank: 1,
    order: 0,
    coreNotes: `# Cytologia: Budowa i Funkcjonowanie Komórki — CKE

## 1. Błony Biologiczne i Zjawiska Transportu
- **Płynno-mozaikowy model Singera-Nicholsona**: Płynna dwuwarstwa fosfolipidowa z białkami integralnymi i powierzchniowymi. Cholesterol zmniejsza płynność błony w wysokiej temperaturze, a zapobiega jej krzepnięciu w niskiej.
- **Mechanizmy transportu**:
  - Transport bierny (zgodnie z gradientem stężeń, bez nakładu ATP): Dyfuzja prosta ($O_2, CO_2$), dyfuzja ułatwiona przez białka kanałowe i nośnikowe (akwaporyny dla wody, GLUT dla glukozy).
  - Transport aktywny (wbrew gradientowi stężeń, wymaga ATP): Pierwotny (pompa sodowo-potasowa $3Na^+/2K^+$), wtórny (symport sodowo-glukozowy, antyport).
  - Transport pęcherzykowy: Endocytoza (fagocytoza i pinocytoza) oraz egzocytoza.

## 2. Organella i Teoria Endosymbiozy
- **Mitochondria i Chloroplasty**: Półautonomiczne organella otoczone podwójną błoną, posiadające własne koliste DNA (mtDNA, cpDNA) oraz małe rybosomy 70S.
- **Teoria Endosymbiozy Margulis**: Mitochondria wywodzą się z bakterii tlenowych ($\\alpha$-proteobakterii), a chloroplasty z fototroficznych sinic pochłoniętych przez pierwotne komórki eukariotyczne.

## 3. Cykl Komórkowy: Mitoza vs. Mejoza
- Interfaza: Faza $G_1$ (wzrost komórki), faza $S$ (replikacja DNA, przejście z $2c$ do $4c$), faza $G_2$ (synteza białek wrzeciona kariokinetycznego).
- **Mitoza**: Podział komórek somatycznych ($2n \\to 2n$), zachowanie identyczności genetycznej.
- **Mejoza**: Podział redukcyjny gamet ($2n \\to 1n$).
  - Profaza I: Koniugacja chromosomów homologicznych tworzących biwalenty, proces **crossing-over** (wymiana odcinków chromatyd niesiostrzanych będąca źródłem zmienności rekombinacyjnej).
  - Anafaza I: Losowe rozejście się chromosomów homologicznych (redukcja ploidalności).

## 3. Kompartmentacja i Płynna Mozaika Błony Komórkowej
- **Model płynnej mozaiki Singera-Nicolsona**:
  - Dwuwarstwa fosfolipidowa o charakterze amfipatycznym (polarne hydrofilowe głowy na zewnątrz, niepolarne hydrofobowe ogony kwasów tłuszczowych do wewnątrz).
  - Cholesterol — wbudowany między kwasy tłuszczowe, ogranicza płynność błony w wysokiej temperaturze i zapobiega jej sztywnieniu w niskiej.
  - Glikokaliks — płaszcz cukrowy na zewnętrznej powierzchni komórek zwierzęcych odpowiedzialny za rozpoznawanie komórkowe i adhezję tkankową.
- **Mechanizmy transportu błonowego**:
  - *Dyfuzja prosta*: Zgodna z gradientem stężeń, nienasycalna, dla małych cząsteczek niepolarnych ($O_2, CO_2$) oraz $H_2O$ (osmoza).
  - *Dyfuzja ułatwiona*: Zgodna z gradientem stężeń, za pośrednictwem białek kanałowych lub nośnikowych (np. GLUT-1 dla glukozy).
  - *Transport aktywny pierwotny*: Wbrew gradientowi stężeń z bezpośrednią hydrolizą ATP. Klasyczny model: **pompa sodowo-potasowa ($Na^+/K^+$ ATP-aza)** pompująca $3\text{ Na}^+$ na zewnątrz i $2\text{ K}^+$ do wnętrza komórki, generując ujemny potencjał spoczynkowy.
  - *Transport aktywny wtórny*: Wykorzystuje gradient elektrochemiczny wytworzony przez pompę pierwotną (np. symport sodowo-glukozowy SGLT w jelicie).
- **Teoria endosymbiozy mitochondriów i chloroplastów**:
  - Dowody: własne koliste cząsteczki DNA pozbawione białek histonowych, rybosomy o współczynniku sedymentacji 70S, podwójna błona (wewnętrzna bogata w kardiolipinę), autonomiczne podziały przez przewężenie.`,
    reviewPrompts: `# Cytologia — Zadania z Arkuszy Maturalnych
1. Porównaj zawartość materiału genetycznego ($n$ i $c$) w komórce w fazie $G_1$, metafazie mitozy oraz anafazie II mejozy.
2. Przedstaw 3 dowody potwierdzające endosymbiotyczne pochodzenie mitochondriów.
3. Wyjaśnij zjawisko plazmolizy i deplazmolizy w komórkach roślinnych, określając potencjał osmotyczny i kierunek przepływu wody w roztworze hipertonicznym i hipotonicznym.
4. Przedstaw drogę białka enzymatycznego od translacji na rybosomach siateczki śródplazmatycznej szorstkiej aż do jego wydzielenia drogą egzocytozy poza komórkę, uwzględniając modyfikacje potranslacyjne w aparacie Golgiego.`,
  },

  // Rank 2
  {
    id: 'bio-metabolizm',
    title: 'Metabolizm: Oddychanie i Fotosynteza C3/C4/CAM',
    category: 'Metabolizm Komórkowy',
    description:
      'Glikoliza, cykl Krebsa, fosforylacja oksydacyjna, fotofosforylacja cykliczna i niecykliczna, faza ciemna Calvina i adaptacje C4/CAM.',
    rank: 2,
    order: 0,
    coreNotes: `# Metabolizm Komórkowy — Matura Rozszerzona CKE

## 1. Oddychanie Tlenowe (Katabolizm)
Sumaryczne równanie:
$$C_6H_{12}O_6 + 6O_2 \\to 6CO_2 + 6H_2O + \\sim 30-32\\text{ ATP}$$
- **Glikoliza** (w cytozolu): Beztlenowe utlenienie glukozy do 2 cząsteczek pirogronianu, zysk netto 2 ATP i 2 NADH.
- **Reakcja pomostowa** (w matriks mitochondrium): Oksydacyjna dekarboksylacja pirogronianu do acetylo-CoA ($2\\text{ NADH} + 2CO_2$).
- **Cykl Krebsa** (w matriks): Kondensacja acetylo-CoA ze szczawiooctanem do cytrynianu. Z 1 cząsteczki glukozy powstaje: 6 NADH, 2 $FADH_2$, 2 ATP/GTP i $4 CO_2$.
- **Łańcuch oddechowy** (w grzebieniach wewnętrznej błony): Przenoszenie elektronów na tlen cząsteczkowy (ostateczny akceptor), wytworzenie gradientu protonowego i syntaza ATP w procesie chemiosmozy.

## 2. Fotosynteza (Anabolizm Autotroficzny)
$$6CO_2 + 6H_2O \\xrightarrow{h\\nu} C_6H_{12}O_6 + 6O_2$$
- **Faza Jasna (zależna od światła)** — w tylakoidach chloroplastów:
  - Fotoliza wody przy fotosystemie II (PSII): Źródło elektronów, protonów i tlenu wydzielanego do atmosfery.
  - Fotofosforylacja niecykliczna: Wytworzenie siły asymilacyjnej (ATP i NADPH).
  - Fotofosforylacja cykliczna (tylko PSI): Produkcja wyłącznie ATP bez NADPH i fotolizy wody.
- **Faza Ciemna (Cykl Calvina-Bensona)** — w stromie chloroplastów:
  - Karboksylacja: Asymilacja $CO_2$ przez enzym RuBisCO do rybulozo-1,5-bisfosforanu (RuBP) $\\to$ 3-PGA.
  - Redukcja: Zużycie siły asymilacyjnej (ATP i NADPH) do syntezy aldehydu 3-fosfoglicerynowego (PGAL).
  - Regeneracja RuBP z reszty cząsteczek PGAL.

## 3. Rośliny C4 i CAM jako Adaptacje do Suszy
- **Rośliny C4** (np. kukurydza): Przestrzenna separacja asymilacji $CO_2$ (anatomia wieńcowa Kranz). Pierwotny akceptor $CO_2$ to fosfoenolopirogronian (PEP) katalizowany przez karboksylazę PEP w komórkach mezofilu, transport jabłczanu do komórek pochwy okołowiązkowej omijający fotooddychanie RuBisCO.
- **Rośliny CAM** (sukulenty, kaktusy): Czasowa separacja — otwieranie aparatów szparkowych w nocy (wiązanie $CO_2$ w kwasie jabłkowym w wakuoli) i zamykanie w dzień przy intensywnym nasłonecznieniu.

## 3. Kinetyka Enzymatyczna i Regulacja Allosteryczna
- **Model indukowanego dopasowania Koshlanda**: Centrum aktywne enzymu zmienia konformację pod wpływem wiązania substratu, stabilizując stan przejściowy i obniżając energię aktywacji reakcji.
- **Parametry kinetyczne Michaelisa-Menten**:
  - $V_{\max}$ — maksymalna szybkość reakcji przy całkowitym wysyceniu enzymu substratem.
  - Stała Michaelisa $K_m$ — stężenie substratu, przy którym szybkość reakcji osiąga $\frac{1}{2}V_{\max}$. Mniejsza wartość $K_m$ oznacza większe powinowactwo enzymu do substratu.
- **Typy inhibicji enzymatycznej**:
  - *Kompetycyjna*: Inhibitor konkuruje z substratem o centrum aktywne (strukturalnie podobny). Skutek: $K_m$ rośnie, $V_{\max}$ pozostaje bez zmian (można ją przełamać nadmiarem substratu).
  - *Niekompetycyjna*: Inhibitor wiąże się poza centrum aktywnym (miejsce allosteryczne), deformując enzym. Skutek: $V_{\max}$ spada, $K_m$ bez zmian.

## 4. Oksydacyjna Fosforylacja i Cykl Krebsa
- **Bilans energetyczny utleniania 1 cząsteczki glukozy**:
  1. Glikoliza (cytozol): Glukoza $\to$ 2 Pirogronian + 2 ATP (fosforylacja substratowa) + 2 NADH.
  2. Reakcja pomostowa (matriks): 2 Pirogronian $\to$ 2 Acetylo-CoA + 2 $CO_2$ + 2 NADH.
  3. Cykl Krebsa (matriks): 2 Acetylo-CoA $\to$ 4 $CO_2$ + 6 NADH + 2 $FADH_2$ + 2 GTP/ATP.
  4. Łańcuch oddechowy i chemiosmoza Mitchella (grzebienie mitochondrialne): Przepływ elektronów przez kompleksy I, III, IV pompuje protony $H^+$ z matriks do przestrzeni międzybłonowej. Powrót protonów przez syntazę ATP napędza fosforylację ADP do ATP.
  - Całkowity zysk netto wynosi ok. **30–32 ATP** z cząsteczki glukozy.

## 5. Fotosynteza Roślin C3, C4 i CAM
- Faza zależna od światła: fotoliza wody w PS II ($2H_2O \to 4H^+ + 4e^- + O_2$), niefosforylacyjny i cykliczny transport elektronów, redukcja $NADP^+ \to NADPH$.
- Cykl Calvina (faza ciemna): karboksylacja RuBP przez enzym RuBisCO do 3-PGA, redukcja do GAP (aldehydu 3-fosfoglicerynowego) kosztem ATP i NADPH, regeneracja akceptora RuBP.
- Rośliny C4 (kukurydza, trzcina cukrowa): anatomiczna separacja w komórkach mezofilu i pochew okołowiązkowych (asymilacja $CO_2$ przez karboksylazę PEP) w celu eliminacji fotooddychania.
- Rośliny CAM (sukulentne): czasowa separacja — otwieranie aparatów szparkowych wyłącznie w nocy.`,
    reviewPrompts: `# Metabolizm — Zadania Doświadczalne CKE
1. Sformułuj problem badawczy i hipotezę do doświadczenia badającego wpływ natężenia światła na intensywność fotosyntezy u moczarki kanadyjskiej.
2. Wyjaśnij, dlaczego fotooddychanie (fotooddech) obniża wydajność fotosyntezy u roślin typu C3 w warunkach wysokiej temperatury i suszy.
3. Wykaż rolę tlenu jako ostatecznego akceptora elektronów w łańcuchu oddechowym oraz wyjaśnij, dlaczego cyjanek potasu (inhibitor oksydazy cytochromowej) prowadzi do natychmiastowego zablokowania syntezy ATP w komórce.
4. Porównaj metabolizm roślin typu C3, C4 i CAM, uwzględniając budowę anatomiczną liścia oraz mechanizmy unikania fotooddychania w warunkach stresu suszy i wysokiej temperatury.`,
  },

  // Rank 3
  {
    id: 'bio-genetyka-mol',
    title: 'Genetyka Molekularna i Inżynieria Genetyczna',
    category: 'Genetyka',
    description:
      'Struktura DNA i RNA, replikacja semikonserwatywna, ekspresja genu (transkrypcja, splicing, kod genetyczny, translacja), operon laktozowy i PCR.',
    rank: 3,
    order: 0,
    coreNotes: `# Genetyka Molekularna i Biotechnologia — CKE

## 1. Kwasy Nukleinowe i Replikacja DNA
- DNA: Podwójna helisa Watsona-Cricka, antyrównoległe nici ($5' \\to 3'$ i $3' \\to 5'$), reguła komplementarności Chargaffa ($A=T$ dwoma wiązaniami wodorowymi, $G\\equiv C$ trzema wiązaniami).
- **Semikonserwatywna replikacja DNA**:
  - Helikaza rozplata podwójną helisę, prymaza syntetyzuje starter RNA.
  - Polimeraza DNA III syntetyzuje nową nić wyłącznie w kierunku $5' \\to 3'$ (nić wiodąca w sposób ciągły, nić opóźniona w postaci fragmentów Okazaki łączonych przez ligazę).

## 2. Ekspresja Informacji Genetycznej
- **Transkrypcja**: Polimeraza RNA przepisuje nić matrycową DNA na pre-mRNA.
- **Obróbka posttranskrypcyjna (splicing)**: Wycinanie intronów (sekwencji niekodujących) i łączenie eksonów przez spliceosom. Alternatywny splicing umożliwia syntezę wielu różnych białek z pojedynczego genu!
- **Kod Genetyczny**: Trójkowy, bezprzecinkowy, niezachodzący, zdegenerowany (wiele kodonów może kodować ten sam aminokwas), jednoznaczny i prawie uniwersalny. Kodon START: AUG (metionina), kodony STOP: UAA, UAG, UGA.
- **Translacja**: Inicjacja, elongacja (rybosom, tRNA transportujące aminokwasy do miejsc A i P) i terminacja.

## 3. Regulacja Ekspresji Genów i Biotechnologia
- **Operon Laktozowy u *E. coli***: Przy braku laktozy białko represor wiąże się z operatorem i blokuje transkrypcję genów struktury. Obecność allolaktozy inaktywuje represor, odblokowując syntezę laktazy.
- **Metody Inżynierii Genetycznej**:
  - Reakcja łańcuchowa polimerazy (PCR): Denaturacja termiczna (95°C), przyłączanie starterów (55°C), elongacja polimerazą Taq (72°C).
  - Klonowanie molekularne i plazmidy jako wektory genetyczne.

## 4. Replikacja DNA i Aparat Enzymatyczny Widełek Replikacyjnych
- **Semikonserwatywny model replikacji**: Każda nowa podwójna helisa DNA zawiera jedną nić macierzystą i jedną nowo zsyntetyzowaną (eksperyment Meselsona-Stahla z izotopem $^{15}N$).
- **Enzymy replikacyjne**:
  - *Helikaza*: Rozrywa wiązania wodorowe między komplementarnymi zasadami, rozplatając helisę.
  - *Topoizomeraza (giraza)*: Usuwa naprężenia torsyjne przed widełkami replikacyjnymi.
  - *Białka SSB*: Stabilizują jednoniciowy DNA, zapobiegając jego ponownemu połączeniu.
  - *Prymaza*: Syntetyzuje krótkie oligonukleotydowe startery RNA (primery).
  - *Polimeraza DNA III*: Syntetyzuje nową nić wyłącznie w kierunku $5' \to 3'$. Na nici wiodącej synteza jest ciągła, na nici opóźnionej nieciągła w postaci **fragmentów Okazaki**.
  - *Polimeraza DNA I*: Wykazuje aktywność egzonukleazy $5' \to 3'$, wycina startery RNA i uzupełnia luki deoksyrybonukleotydami.
  - *Ligaza*: Łączy fragmenty Okazaki wiązaniami fosfodiestrowymi.

## 5. Ekspresja Genów i Regulacja Operonu Laktozowego
- **Obróbka posttranskrypcyjna (pre-mRNA $\to$ mRNA u Eukaryota)**:
  - *Capping*: Dołączenie 7-metyloguanozyny (czapeczki $5'$) chroniącej przed degradacją i ułatwiającej wiązanie z rybosomem.
  - *Poliadenylacja*: Dołączenie ogona poli(A) na końcu $3'$ stabilizującego cząsteczkę.
  - *Splicing*: Wycinanie sekwencji niekodujących (intronów) i scalanie sekwencji kodujących (eksonów) przez spliceosomy (snRNP). Alternatywny splicing umożliwia syntezę wielu różnych białek z jednego genu!
- **Operon laktozowy (*lac*) u Escherichia coli**:
  - W nieobecności laktozy: białko represora wiąże się z operatorem, blokując polimerazę RNA (brak transkrypcji genów $lacZ, lacY, lacA$).
  - W obecności laktozy: allolaktoza wiąże się z represorem jako induktor, zmieniając jego konformację; represor odłącza się od operatora i zachodzi wydajna ekspresja enzymów rozkładających laktozę.`,
    reviewPrompts: `# Genetyka Molekularna — Pytania i Zadania CKE
1. Dany jest fragment nici kodującej DNA: 5'-TAC GGC TTA GCT-3'. Zapisz sekwencję powstającego mRNA oraz odczytaj sekwencję aminokwasów z tabeli kodu genetycznego.
2. Na czym polega i jakie znaczenie biologiczne ma alternatywny splicing u organizmów eukariotycznych?
3. Podaj sekwencję aminokwasów kodowaną przez podany fragment nici matrycowej DNA: $3'-TAC\;CGG\;TAA\;CCA\;ACT-5'$, korzystając z tabeli kodu genetycznego, oraz wskaż skutek mutacji polegającej na delecji pierwszej zasady guaniny.
4. Przedstaw mechanizm regulacji pozytywnej operonu laktozowego z udziałem kompleksu CAP-cAMP w warunkach niedoboru glukozy w pożywce bakteryjnej.`,
  },
  {
    id: 'bio-genetyka-klas',
    title: 'Genetyka Klasyczna i Genetyka Człowieka',
    category: 'Genetyka',
    description:
      'Prawa Mendla, dominacja zupełna i niezupełna, kodominacja, cechy sprzężone z płcią, mapowanie chromosomów Morgana i choroby genetyczne człowieka.',
    rank: 3,
    order: 1,
    coreNotes: `# Genetyka Klasyczna i Choroby Człowieka — CKE

## 1. Prawa Mendla i Relacje Między Allelami
- **I Prawo Mendla (Czystości gamet)**: Do każdej gamety trafia tylko jeden allel z danej pary alleli.
- **II Prawo Mendla (Niezależnej segregacji cech)**: Allele różnych genów segregują do gamet niezależnie od siebie (dotyczy genów niesprzężonych, leżących na różnych chromosomach).
- **Relacje alleli**:
  - Dominacja zupełna ($A > a$, fenotyp 3:1 w pokoleniu $F_2$).
  - Dominacja niezupełna (fenotyp pośredni heterozygoty, np. wyżlin większy, stosunek 1:2:1).
  - Kodominacja: Równorzędna ekspresja obu alleli (np. układ grup krwi AB u człowieka: allele $I^A$ i $I^B$).

## 2. Sprzężenie Genów i Chromosomowa Teoria Morgana
- Geny leżące na tym samym chromosomie dziedziczą się wspólnie (są sprzężone).
- Częstość crossing-over jako miara odległości między genami: $1\\%\\text{ rekombinantów} = 1\\text{ cM (centymorgan)}$.

## 3. Dziedziczenie Cech Sprzężonych z Płcią u Człowieka
- Płeć heterogametyczna męska ($XY$) i homogametyczna żeńska ($XX$).
- Cechy recesywne sprzężone z chromosomem $X$:
  - Hemofilia (niedobór czynnika krzepnięcia VIII lub IX).
  - Daltonizm (zaburzenie rozpoznawania barwy czerwonej i zielonej).
  - Dystrofia mięśniowa Duchenne'a.
  - Kobiety są nosicielkami ($X^D X^d$), chorują głównie mężczyźni ($X^d Y$).

## 4. Mutacje i Aberracje Chromosomowe
- Mutacje genowe punktowe: Substytucje (tranzycje/transwersje), insercje, delecje (przesunięcie ramki odczytu).
- Aberracje liczbowe: Aneuploidie (trisomia 21 — Zespół Downa, trisomia 18 — Zespół Edwardsa, monosomia X — Zespół Turnera $45,X0$, Zespół Klinefeltera $47,XXY$).

## 3. Teoria Chromosomowa Morgana i Sprzężenia Genów
- Thomas Hunt Morgan (badania na *Drosophila melanogaster*):
  - Geny usytuowane są liniowo na chromosomach w określonych miejscach zwanych *loci*.
  - Geny leżące na tym samym chromosomie to **geny sprzężone** — dziedziczą się wspólnie, chyba że zajdzie między nimi proces crossing-over.
  - **Crossing-over**: Wymiana odpowiadających sobie odcinków chromatyd niesiostrzanych chromosomów homologicznych w profazie I podziału mejotycznego (pachyten).
  - Częstość rekombinacji jest wprost proporcjonalna do odległości fizycznej między genami na chromosomie:
    $$1\text{ cM (centymorgan)} = 1\text{ map unit} = 1\%\text{ gamet rekombinowanych}$$

## 4. Dziedziczenie Cech u Człowieka i Aberracje Chromosomowe
- **Choroby sprzężone z płcią (sprzężone z chromosomem X, recesywne)**:
  - Hemofilia (niedobór czynnika krzepnięcia VIII lub IX), daltonizm (zaburzenie widzenia barw czerwono-zielonych), dystrofia mięśniowa Duchenne'a (mutacja genu dystrofiny).
  - Kobiety są nosicielkami ($X^D X^d$), chorują niemal wyłącznie mężczyźni ($X^d Y$) z racji hemizygotyczności.
- **Aberracje chromosomowe liczbowe (aneuploidie)**:
  - Powstają w wyniku nondysjunkcji (nierozchodzenia się) chromosomów w mejozie I lub chromatyd w mejozie II.
  - Zespół Downa: trisomia chromosomu 21 ($47, XX, +21$ lub $47, XY, +21$).
  - Zespół Edwardsa: trisomia chromosomu 18 ($47, +18$).
  - Zespół Pataua: trisomia chromosomu 13 ($47, +13$).
  - Zespół Turnera: monosomia chromosomu X u kobiet ($45, X0$) — fenotypowo żeński, niski wzrost, dysgenezja gonad, bezpłodność.
  - Zespół Klinefeltera: dodatkowy chromosom X u mężczyzn ($47, XXY$) — fenotyp męski, wysoki wzrost, ginekomastia, hipogonadyzm.`,
    reviewPrompts: `# Genetyka — Krzyżówki i Analiza Rodowodów
1. Matka o grupie krwi A (jej ojciec miał grupę 0) i ojciec o grupie krwi B (jego matka miała grupę 0) spodziewają się dziecka. Wyznacz prawdopodobieństwo urodzenia dziecka o grupie krwi 0.
2. Wyjaśnij, dlaczego kobieta o genotypie $X^H X^h$ nie wykazuje objawów hemofilii, a jej synowie mają 50% ryzyka zachorowania.
3. Kobieta o prawidłowym widzeniu barw, której ojciec był daltonistą, poślubiła mężczyznę o prawidłowym wzroku. Oblicz prawdopodobieństwo urodzenia chorego syna oraz chorej córki.
4. Skrzyżowano podwójnie heterozygotyczną samicę muszki owocowej o szarym ciele i normalnych skrzydłach ($BbVv$) z homozygotycznym recesywnym samcem o czarnym ciele i skrzydłach szczątkowych ($bbvv$). W potomstwie otrzymano: 965 szarych/normalnych, 944 czarnych/szczątkowych, 206 szarych/szczątkowych i 185 czarnych/normalnych. Oblicz odległość genetyczną między genami $b$ i $v$ w centymorganach.`,
  },

  // Rank 4
  {
    id: 'bio-fizjologia-czlowieka',
    title: 'Fizjologia Człowieka i Homeostaza',
    category: 'Fizjologia Człowieka',
    description:
      'Układ nerwowy, łuk odruchowy, nefron i powstawanie moczu, regulacja hormonalna (sprzężenia zwrotne) i układ krążenia w zadaniach CKE.',
    rank: 4,
    order: 0,
    coreNotes: `# Fizjologia Narządowa Człowieka — CKE

## 1. Układ Nerwowy i Przewodnictwo
- Potencjał spoczynkowy ($-70\\text{ mV}$) utrzymywany przez pompę $Na^+/K^+$-ATPazę oraz kanały przecieku potasowego.
- Potencjał czynnościowy: Otwarcie napięciozależnych kanałów sodowych $\\to$ gwałtowna depolaryzacja do $+30\\text{ mV}$, inaktywacja kanałów $Na^+$ i otwarcie kanałów $K^+$ $\\to$ repolaryzacja.
- Synapsa chemiczna: Napływ jonów $Ca^{2+}$ do kolbki synaptycznej $\\to$ egzocytoza neuroprzekaźnika (acetylocholina) do szczeliny synaptycznej.

## 2. Układ Wydalniczy i Czynność Nefronu
- **Filtracja kłębuszkowa**: Ciśnienie hydrostatyczne w kłębuszku Malpighiego wymusza powstawanie moczu pierwotnego (ok. 180 l/dobę) pozbawionego białek i elementów morfotycznych krwi.
- **Resorpcja i Sekrecja**:
  - Kanalik kręty I rzędu: Resorpcja obowiązkowa glukozy, aminokwasów i $Na^+$.
  - Pętla Henlego: Ramie zstępujące (przepuszczalne dla wody), ramię wstępujące (aktywny transport $Na^+$ i $Cl^-$, nieprzepuszczalne dla wody — wzmacniacz przeciwprądowy).
  - Kanalik dalszy i cewka zbiorcza: Resorpcja fakultatywna wody pod wpływem wazopresyny (ADH) i sodu pod wpływem aldosteronu.

## 3. Regulacja Hormonalna i Homeostaza
- Ujemne sprzężenie zwrotne: Oś podwzgórze (TRH) – przysadka (TSH) – tarczyca ($T_3/T_4$).
- Regulacja glikemii: Komórki $\\beta$ trzustki wytwarzają insulinę (obniża poziom glukozy, stymuluje glikogenogenezę), komórki $\\alpha$ wytwarzają glukagon (podnosi poziom glukozy, stymuluje glikogenolizę).

## 3. Neurofizjologia: Potencjał Czynnościowy i Synapsa
- **Potencjał spoczynkowy neuronu (ok. $-70\text{ mV}$)**:
  - Utrzymywany przez nierównomierny rozkład jonów (wysokie $[K^+]$ wewnątrz, wysokie $[Na^+]$ i $[Cl^-]$ na zewnątrz) oraz wyższą przepuszczalność błony spoczynkowej dla jonów potasu.
  - Ciągła praca elektrogennej pompy $Na^+/K^+$ ATP-azy.
- **Potencjał czynnościowy (reakcja „wszystko albo nic”)**:
  1. *Depolaryzacja*: Otwarcie napięciozależnych kanałów sodowych $Na^+$, masowy napływ sodu do wnętrza komórki, inwersja potencjału do $+30\text{ mV}$.
  2. *Repolaryzacja*: Inaktywacja kanałów sodowych i otwarcie wolniejszych napięciozależnych kanałów potasowych $K^+$, wypływ potasu na zewnątrz komórki.
  3. *Hiperpolaryzacja i refrakcja*: Chwilowy spadek potencjału poniżej $-70\text{ mV}$ (refrakcja bezwzględna uniemożliwia ponowne pobudzenie).
- **Przewodnictwo synaptyczne**: Potencjał czynnościowy docierający do kolbki synaptycznej otwiera napięciozależne kanały $Ca^{2+}$. Napływ wapnia indukuje egzocytozę pęcherzyków z neurotransmiterem (np. acetylocholiną) do szczeliny synaptycznej.

## 4. Fizjologia Układu Krążenia i Transport Gazów
- Układ przewodzący serca: węzeł zatokowo-przedsionkowy (SA — nadrzędny rozrusznik serca) $\to$ węzeł przedsionkowo-komorowy (AV) $\to$ pęczek Hisa $\to$ włókna Purkinjego.
- Krzywa dysocjacji hemoglobiny i **efekt Bohra**: Spadek pH osocza (wzrost kwasowości wywołany wzrostem stężenia $CO_2$ i kwasu mlekowego w pracujących mięśniach) obniża powinowactwo hemoglobiny do tlenu, ułatwiając jego oddawanie do tkanek obwodowych.

## 5. Układ Wydalniczy i Wzmacniacz Przeciwprądowy
- Nefron: filtracja kłębuszkowa w ciałku nerkowym (efektywne ciśnienie filtracji = ciśnienie hydrostatyczne krwi minus ciśnienie onkotyczne białek minus ciśnienie torebki Bowmana).
- Pętla Henlego: zstępujące ramię przepuszczalne dla wody, wstępujące grube ramię nieprzepuszczalne dla wody aktywnie pompujące jony $Na^+$ i $Cl^-$ do rdzenia nerki. Tworzy to hiperosmotyczny gradient rdzenia nerkowego.
- Regulacja hormonalna:
  - **Wazopresyna (ADH)**: Wydzielana przez tylny płat przysadki w odpowiedzi na wzrost osmolarności osocza; zwiększa ekspresję akwaporyn-2 w cewkach zbiorczych, nasilając resorpcję wody i zagęszczając mocz.
  - **Układ RAA (renina-angiotensyna-aldosteron)**: Spadek ciśnienia krwi indukuje wydzielanie reniny przez aparat przykłębuszkowy $\to$ angiotensyna II obkurcza naczynia i pobudza korę nadnerczy do wydzielania aldosteronu $\to$ aldosteron zwiększa wchłanianie zwrotne sodu i wody.`,
    reviewPrompts: `# Fizjologia — Zadania Maturalne CKE
1. Wyjaśnij mechanizm działania hormonu antydiuretycznego (wazopresyny ADH) na zagęszczanie moczu w kanalikach zbiorczych nerki.
2. Przedstaw drogę impulsu nerwowego w bezwarunkowym odruchu kolanowym (łuk odruchowy dwuneuronowy).
3. Wyjaśnij mechanizm powstawania obrzęków u pacjentów z ciężkim zespołem nerczycowym przebiegającym z masywnym białkomoczem, uwzględniając ciśnienie onkotyczne osocza.
4. Przedstaw hormonalną regulację poziomu wapnia we krwi przez parathormon (PTH), kalcytoninę i aktywną witaminę D3 (kalcytriol), wskazując ich narządy docelowe.`,
  },
  {
    id: 'bio-odpornosc',
    title: 'Układ Odpornościowy i Obrona Organizmu',
    category: 'Immunologia',
    description:
      'Odpowiedź nieswoista i swoista, limfocyty B i T, przeciwciała, odporność czynna vs bierna, alergie, konflikty serologiczne i HIV.',
    rank: 4,
    order: 1,
    coreNotes: `# Układ Odpornościowy Człowieka — CKE

## 1. Narządy Układu Chłonnego
- Centralne (pierwotne): Grasica (dojrzewanie limfocytów T), szpik kostny czerwony (powstawanie komórek krwi, dojrzewanie limfocytów B).
- Obwodowe (wtórne): Śledziona (filtracja krwi), węzły chłonne (filtracja limfy), migdałki, grudki chłonne MALT.

## 2. Rodzaje Odporności
- **Nieswoista (Wrodzona)**: Bariery mechaniczne (skóra, śluz), chemiczne (kwas solny w żołądku, lizozym w łzach/ślinie), komórki żerne (neutrofile, makrofagi).
- **Swoista (Nabyta)**:
  - Humoralna: Limfocyty B przekształcające się w komórki plazmatyczne wytwarzające przeciwciała (immunoglobuliny).
  - Komórkowa: Limfocyty Tc bezpośrednio niszczące komórki zakażone wirusem lub zmienione nowotworowo.
- **Odporność Czynna vs Bierna**:
  - Czynna naturalna: Po przebyciu zakażenia (powstają komórki pamięci).
  - Czynna sztuczna: Szczepionka (osłabione lub martwe patogeny / antygeny).
  - Bierna naturalna: Przeciwciała matczyne przez łożysko (IgG) lub mleko (IgA).
  - Bierna sztuczna: Surowica odpornościowa (gotowe przeciwciała podawane natychmiastowo, np. po ukąszeniu żmii).

## 3. Komórki i Narządy Układu Odpornościowego
- **Centralne narządy limfatyczne**:
  - *Grasica*: Miejsce dojrzewania i selekcji limfocytów T (eliminacja limfocytów autoreaktywnych w procesie delecji klonalnej — tolerancja centralna).
  - *Szpik kostny czerwony*: Miejsce powstawania wszystkich komórek krwi i dojrzewania limfocytów B.
- **Obwodowe narządy limfatyczne**: Śledziona (filtracja krwi z antygenów i zużytych erytrocytów), węzły chłonne (filtracja limfy), migdałki, kępki Peyera w jelicie (tkanka MALT/GALT).

## 4. Mechanizmy Odpowiedzi Nabytej (Swoistej)
- **Komórki prezentujące antygen (APC)**: Komórki dendrytyczne, makrofagi, limfocyty B.
- **Układ MHC (Major Histocompatibility Complex)**:
  - *MHC klasy I*: Występuje na wszystkich komórkach jądrzastych organizmu; prezentuje antygeny endogenne (pochodzenia wirusowego lub nowotworowego) limfocytom cytotoksycznym $T_{CD8+}$ (Tc). Limfocyty Tc zabijają komórkę zakażoną za pomocą perforyn (perforacja błony) i granzymów (indukcja apoptozy).
  - *MHC klasy II*: Występuje wyłącznie na profesjonalnych komórkach APC; prezentuje zfagocytowane antygeny egzogenne limfocytom pomocniczym $T_{CD4+}$ (Th). Limfocyty Th wydzielają cytokiny (interleukiny) aktywujące limfocyty B i makrofagi.
- **Klasy immunoglobulin (przeciwciał)**:
  - *IgG*: Główne przeciwciała surowicy, przechodzą przez łożysko, dominują w odpowiedzi wtórnej.
  - *IgM*: Pentamery, pierwsze przeciwciała wytwarzane w pierwotnej odpowiedzi immunologicznej.
  - *IgA*: Dimery obecne w wydzielinach śluzowo-surowiczych (ślina, łzy, siara, pot), chronią nabłonki.
  - *IgE*: Wiążą się z komórkami tucznymi i bazofilami, biorą udział w reakcjach alergicznych i obronie przeciw pasożytom.
  - *IgD*: Receptory powierzchniowe dziewiczych limfocytów B.`,
    reviewPrompts: `# Odporność — Pytania Maturalne
1. Wytłumacz, dlaczego powtórny kontakt z tym samym antygenem wywołuje szybszą i silniejszą odpowiedź immunologiczną niż kontakt pierwotny.
2. Zdefiniuj mechanizm konfliktu serologicznego Rh między matką $Rh^-$ a płodem $Rh^+$.
3. Porównaj odporność czynną (naturalną i sztuczną) z odpornością bierną (naturalną i sztuczną), podając po jednym przykładzie medycznym dla każdej z nich oraz określając trwałość wytworzonej ochrony.
4. Wyjaśnij mechanizm powstawania konfliktu serologicznego w układzie Rh u ciężarnej matki Rh- noszącej płód Rh+, ze szczególnym uwzględnieniem klasy przeciwciał anty-Rh i wskazań do podania immunoglobuliny anty-D.`,
  },

  // Rank 5
  {
    id: 'bio-ewolucja-ekologia',
    title: 'Ewolucjonizm, Ekologia i Ochrona Przyrody',
    category: 'Ewolucja i Ekologia',
    description:
      'Dobór naturalny, prawo Hardyego-Weinberga, specjacja, zależności międzygatunkowe, obieg pierwiastków (węgiel, azot) i sukcesja ekologiczna.',
    rank: 5,
    order: 0,
    coreNotes: `# Ewolucjonizm i Ekologia — Matura Rozszerzona CKE

## 1. Mechanizmy Ewolucji i Prawo Hardy'ego-Weinberga
- **Dobór naturalny**: Różnicowe przeżywanie i rozród osobników o określonych genotypach.
  - Stabilizujący: Eliminuje skrajne fenotypy w stałym środowisku (np. masa ciała noworodków ludzkich).
  - Kierunkowy: Promuje fenotyp z jednego ze skrajów (np. melanizm przemysłowy krępaka brzozowego).
  - Różnicujący (rozrywający): Promuje oba fenotypy skrajne, eliminując średnie.
- **Prawo Hardy'ego-Weinberga**: W populacji idealnej (panmiksycznej, nieskończenie dużej, bez mutacji, migracji i doboru) częstości alleli i genotypów pozostają stałe z pokolenia na pokolenie:
  $$p + q = 1, \\quad p^2 + 2pq + q^2 = 1$$
  gdzie $p^2$ to częstość homozygot dominujących ($AA$), $2pq$ heterozygot ($Aa$), a $q^2$ homozygot recesywnych ($aa$).

## 2. Ekologia Populacji i Ekosystemów
- **Zależności międzygatunkowe**:
  - Antagonistyczne: Drapieżnictwo, pasożytnictwo, roślinożerność, konkurencja.
  - Nieantagonistyczne: Mutualizm obligatoryjny (symbioza, np. mikoryza), mutualizm fakultatywny (protokooperacja), komensalizm.
- **Przepływ energii i krążenie materii**:
  - Energia przepływa przez ekosystem jednokierunkowo (reguła 10% wydajności ekologicznej Lindemana).
  - Materia krąży w cyklach biogeochemicznych (obieg węgla, azotu z bakteriami wiążącymi $N_2$ *Rhizobium* i nitryfikacyjnymi *Nitrosomonas* / *Nitrobacter*).

## 3. Równowaga Genetyczna Populacji (Prawo Hardy'ego-Weinberga)
W idealnej populacji mendlowskiej częstości alleli i genotypów pozostają stałe z pokolenia na pokolenie:
$$p + q = 1 \implies p^2 + 2pq + q^2 = 1$$
Gdzie:
- $p$ — częstość allelu dominującego $A$.
- $q$ — częstość allelu recesywnego $a$.
- $p^2$ — częstość homozygot dominujących $AA$.
- $2pq$ — częstość heterozygot $Aa$.
- $q^2$ — częstość homozygot recesywnych $aa$.
- **Warunki spełnienia prawa**: Nieskończenie duża liczebność populacji, losowe kojarzenie osobników (panmiksja), brak doboru naturalnego, brak mutacji, brak migracji i przepływu genów.

## 4. Ekologia Ekosystemów i Cykle Biogeochemiczne
- **Piramidy ekologiczne**:
  - *Piramida energii*: Zawsze o kształcie prawidłowym (zwężająca się ku górze) z powodu strat energii na każdym poziomie troficznym w postaci ciepła (reguła 10% wydajności Lindemana).
  - *Piramida biomasy*: Zwykle prawidłowa, w ekosystemach pelagicznych oceanów może być odwrócona z powodu szybkiej rotacji fitoplanktonu o dużej produkcji pierwotnej.
- **Obieg azotu w przyrodzie**:
  - *Wiązanie azotu atmosferycznego ($N_2 \to NH_3$)*: Wolnożyjące bakterie glebowe (*Azotobacter*, *Clostridium*) oraz symbiotyczne (*Rhizobium* w brodawkach korzeniowych roślin motylkowych) za pomocą enzymu nitrogenazy.
  - *Nitryfikacja*: Dwuetapowe utlenianie jonów amonowych przez bakterie chemosyntetyzujące:
    1. $2NH_4^+ + 3O_2 \to 2NO_2^- + 4H^+ + 2H_2O$ (*Nitrosomonas*).
    2. $2NO_2^- + O_2 \to 2NO_3^-$ (*Nitrobacter*).
  - *Denitryfikacja*: Beztlenowa redukcja azotanów ($NO_3^-$) do azotu cząsteczkowego ($N_2$) przez bakterie denitryfikacyjne (*Pseudomonas*).`,
    reviewPrompts: `# Ewolucja i Ekologia — Zadania Obliczeniowe CKE
1. W populacji spełniającej założenia prawa Hardy'ego-Weinberga 9% osobników wykazuje recesywną cechę albinizmu ($q^2 = 0{,}09$). Oblicz odsetek heterozygot (nosicieli) w tej populacji.
2. Przedstaw różnice pomiędzy sukcesją pierwotną a wtórną na konkretnych przykładach środowiskowych.
3. W populacji ludzkiej będącej w stanie równowagi genetycznej częstość występowania mukowiscydozy (choroby autosomalnej recesywnej) wynosi $1$ na $2500$ urodzeń. Oblicz odsetek bezobjawowych nosicieli zmutowanego allelu w tej populacji.
4. Porównaj strategię rozrodu typu $r$ ze strategią typu $K$, podając po dwa przykłady gatunków dla każdej z nich oraz charakteryzując ich krzywe przeżywania i dynamikę liczebności w środowisku.`,
  },
];
