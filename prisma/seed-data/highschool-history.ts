import type { Course, SeedEdge } from './types.js';

export const highschoolHistoryEdges: SeedEdge[] = [
  { id: 'hist-star-sred', source: 'hist-starozytnosc', target: 'hist-sredniowiecze' },
  { id: 'hist-sred-nowoz', source: 'hist-sredniowiecze', target: 'hist-nowozytnosc-rp' },
  { id: 'hist-nowoz-osw', source: 'hist-nowozytnosc-rp', target: 'hist-oswiecenie' },
  { id: 'hist-osw-xix', source: 'hist-oswiecenie', target: 'hist-wiek-xix' },
  { id: 'hist-xix-iirp', source: 'hist-wiek-xix', target: 'hist-ii-rp' },
  { id: 'hist-iirp-iiwojna', source: 'hist-ii-rp', target: 'hist-ii-wojna' },
  { id: 'hist-iiwojna-prl', source: 'hist-ii-wojna', target: 'hist-prl' },
  { id: 'hist-prl-1989', source: 'hist-prl', target: 'hist-solidarnosc-1989' },
];

export const highschoolHistoryCourses: Course[] = [
  // Epoka 1 (rank: 0)
  {
    id: 'hist-starozytnosc',
    title: 'Starożytność: Od Bliskiego Wschodu do Upadku Rzymu',
    category: 'Starożytność',
    description:
      'Cywilizacje Mezopotamii i Egiptu, polis greckie, demokracja ateńska, ewolucja ustrojowa Rzymu (Republika, Pryncypat, Dominat) i prawo rzymskie.',
    rank: 0,
    order: 0,
    coreNotes: `# Starożytność — Matura Rozszerzona z Historii (CKE)

## 1. Cywilizacje Dorzecza Wielkich Rzek
- **Mezopotamia**: Tygrys i Eufrat, państwa-miasta Sumerów (pismo klinowe, koło, zikkuraty), prawo Hammurabiego (*kodeks talionu* — oko za oko, ząb za ząb ze zróżnicowaniem stanowym: awilum, muszkenum, wardum).
- **Egipt faraonów**: Nil jako podstawa gospodarki, monarchia despotyczna, politeizm, reforma monoteistyczna Echnatona (kult Atona).

## 2. Świat Grecki (Hellada)
- **Model Polis**: Wspólnota obywatelska, agora, akropol.
- **Sparta**: Ustrój likurgijski (apella, geruzja, eforowie, dwaj królowie), struktura społeczna (spartiaci, periojkowie, heloci), wychowanie spartańskie (*agoge*).
- **Ateny**: Ewolucja od monarchii przez reformy Solona (strząśnięcie długów, podział na 4 klasy majątkowe) i Kleistenesa (podział na fyle, ostracyzm) do demokracji Peryklesa (zgromadzenie ludowe *eklezja*, Rada Pięciuset *bule*, diety za udział we władzy).
- **Wojny perskie**: Maraton (490 p.n.e.), Termopile i Salamina (480 p.n.e.), Plateje (479 p.n.e.).

## 3. Rzym: Od Miasta do Imperium
- **Republika**: Konsulowie, trybuni ludowi (*ius vetandi*, nietykalność osobista), senat, zgromadzenia (*komicja*). Walka plebejuszy z patrycjuszami i Prawo XII Tablic (449 p.n.e.).
- **Kryzys Republiki**: Reformy braci Grakchów, armia zawodowa Mariusza, dyktatura Sulli, I i II triumwirat, bitwa pod Akcjum (31 p.n.e.).
- **Cesarstwo**: Pryncypat Oktawiana Augusta (*Pax Romana*), Dominat Dioklecjana (tetrarchia), edykt mediolański Konstantyna Wielkiego (313 r. n.e.), podział imperium przez Teodozjusza (395 r. n.e.) na część zachodnią i wschodnią, upadek Rzymu (476 r. n.e. — Odoaker).

## 4. Prawo Rzymskie i Ewolucja Instytucjonalna
- **Prawo XII Tablic (Lex Duodecim Tabularum, 449 p.n.e.)**: Pierwsza kodyfikacja prawa rzymskiego, postulat plebejuszy eliminujący arbitralność patrycjuszowskich sędziów. Zasady odpowiedzialności majątkowej, prawa rodzinnego (*patria potestas*) i procedury sądowej (*legis actio*).
- **Corpus Iuris Civilis Justyniana (529–534 n.e.)**:
  - *Institutiones* — podręcznik prawa dla studentów.
  - *Digesta (Pandectae)* — wyciągi z pism wybitnych prawników rzymskich (Ulpian, Papinian, Paulus, Gaius).
  - *Codex Justinianus* — zbiór konstytucji cesarskich od Hadriana.
  - *Novellae* — konstytucje wydane po opublikowaniu Kodeksu.
- **Myśl polityczna i filozofia państwa**:
  - Platon (*Państwo*, *Prawa*): koncepcja państwa idealnego opartego na cnocie mądrości, podział na filozofów-władców, strażników i wytwórców.
  - Arystoteles (*Polityka*): człowiek jako *zoon politikon* (istota społeczna/polityczna), rozróżnienie ustrojów prawych (monarchia, arystokracja, politeia) oraz zdegenerowanych (tyrania, oligarchia, demokracja/ochlokracja).
  - Cyceron (*De re publica*): państwo jako *res publica, res populi* (rzecz ludu złączonego węzłem prawa i wspólnotą pożytku).`,
    reviewPrompts: `# Starożytność — Analiza Źródłowa i Esej Maturalny
1. Porównaj ustrój polityczny Aten w V w. p.n.e. z ustrojem Republiki Rzymskiej w III–II w. p.n.e., wskazując zakres uprawnień obywatelskich.
2. Scharakteryzuj rolę chrześcijaństwa w Cesarstwie Rzymskim od prześladowań Nerona i Dioklecjana po uznanie za religię panującą za panowania Teodozjusza Wielkiego.
3. Dokonaj analizy porównawczej statusu społecznego i prawnego helotów w Sparcie oraz niewolników w Rzymie okresu pryncypatu.
4. Wyjaśnij, w jaki sposób przejście od armii obywatelskiej opartej na cenzusie majątkowym do armii zawodowej Mariusza wpłynęło na destabilizację ustroju republikańskiego w Rzymie I w. p.n.e.`,
  },

  // Epoka 2 (rank: 1)
  {
    id: 'hist-sredniowiecze',
    title: 'Średniowiecze: Polska Piastów i Uniwersalizm Europejski',
    category: 'Średniowiecze',
    description:
      'Chrzest Mieszka I (966), Zjazd Gnieźnieński (1000), koronacja Chrobrego, rozbicie dzielnicowe, unia w Krewie (1385) i spór papiestwa z cesarstwem.',
    rank: 1,
    order: 0,
    coreNotes: `# Średniowiecze w Polsce i Europie — CKE

## 1. Narodziny Państwa Polskiego (Piastowie)
- **Mieszko I**: Zjednoczenie plemion Polan, chrzest Polski w 966 r. (aspekt chrystianizacyjny i suwerenności politycznej), dokument *Dagome iudex* (oddanie państwa pod opiekę Stolicy Apostolskiej ok. 991 r.).
- **Bolesław Chrobry**: Zjazd Gnieźnieński w 1000 r. (Otton III, utworzenie archidiecezji gnieźnieńskiej i biskupstw w Krakowie, Wrocławiu i Kołobrzegu), wojny z Niemcami (pokój w Budziszynie 1018 r.) i pierwsza koronacja królewska w 1025 r.

## 2. Kryzys i Rozbicie Dzielnicowe
- **Testament Bolesława Krzywoustego (1138 r.)**: Zasada senioratu i pryncypatu, dzielnica senioralna ze stolicą w Krakowie.
- Skutki rozbicia: Osłabienie militarne, sprowadzenie Krzyżaków przez Konrada Mazowieckiego (1226 r.), najazdy mongolskie (bitwa pod Legnicą 1241 r.).
- **Zjednoczenie państwa**: Władysław Łokietek (koronacja w Krakowie 1320 r.).
- **Kazimierz III Wielki**: Dyplomacja (zjazd w Wyszehradzie, pokój w Kaliszu 1343 r.), kodyfikacja praw (statuty wiślicko-piotrkowskie), założenie Akademii Krakowskiej (1364 r.), przysłowie: *„Zastał Polskę drewnianą, a zostawił murowaną”*.

## 3. Unia Polsko-Litewska i Jagiellonowie
- **Unia w Krewie (1385 r.)**: Chrzest Jagiełły, małżeństwo z Jadwigą Andegaweńską, inkorporacja Litwy do Korony.
- Wielka Wojna z Zakonem Krzyżackim: Bitwa pod Grunwaldem (15 lipca 1410 r.), I i II pokój toruński (1466 r. — odzyskanie Pomorza Gdańskiego i Prus Królewskich).

## 3. Spór o Inwestyturę i Uniwersalizm Średniowieczny
- **Cezaropapizm a papocezaryzm**:
  - *Dictatus Papae* Grzegorza VII (1075 r.): sformułowanie prymatu papieża nad monarchami świeckimi, prawo detronizacji cesarzy (*ius deponendi*) i wyłączność powoływania biskupów.
  - Spór Grzegorza VII z Henrykiem IV: klątwa papieska, upokorzenie cesarza w Canossie (1077 r.), wybór antypapieża Klemensa III.
  - **Konkordat w Wormacji (1122 r.)**: Kalikst II i Henryk V — rozdzielenie inwestytury duchownej (pierścień i pastorał wręczane przez Kościół) od inwestytury świeckiej (berło i dobra lenne nadawane przez cesarza).
- **Prawo Lokacyjne w Polsce (XIII–XIV w.)**:
  - Lokacje miast i wsi na prawie niemieckim (magdeburskim, chełmińskim, średzkim).
  - Wprowadzenie immunitetów gospodarczych i sądowych, instytucji sołtysa/wójta oraz ławy miejskiej.
  - Okres *wolnizny* (zwolnienia z czynszów na czas zagospodarowania) oraz przejście na gospodarkę czynszową i trójpolówkę.

## 4. Od Rozbicia do Zjednoczonego Królestwa
- **Przywilej koszycki (1374 r.)**: Ludwik Węgierski w zamian za sukcesję dla córek (Jadwigi) obniża poradlne dla szlachty z 12 do 2 groszy z łanu i zobowiązuje się nie nakładać nowych podatków bez zgody rycerstwa — początek kształtowania stanowych przywilejów szlacheckich w Polsce.
- **Unia polsko-litewska w Krewie (1385 r.)**: Unia personalna — Jagiełło zobowiązuje się przyjąć chrzest, schrystianizować Litwę, poślubić Jadwigę i *applicare* ziemie litewskie i ruskie do Korony Królestwa Polskiego. Bitwa pod Grunwaldem (1410 r.) i pokój toruński (1411 r.).`,
    reviewPrompts: `# Średniowiecze — Pytania Maturalne
1. Wyjaśnij geopolityczne i cywilizacyjne znaczenie Zjazdu Gnieźnieńskiego w 1000 r. dla pozycji międzynarodowej państwa Bolesława Chrobrego.
2. Przedstaw przyczyny, etapy i skutki unii personalnej Polski i Litwy od układu w Krewie (1385) do unii lubelskiej (1569).
3. Przedstaw postanowienia unii w Horodle (1413 r.) i wyjaśnij jej znaczenie dla zbliżenia ustrojowego i społecznego Korony oraz Wielkiego Księstwa Litewskiego.
4. Dokonaj analizy celów politycznych i gospodarczych Kazimierza Wielkiego zrealizowanych w statutach wiślicko-piotrkowskich.`,
  },

  // Epoka 3 (rank: 2)
  {
    id: 'hist-nowozytnosc-rp',
    title: 'Rzeczpospolita Obojga Narodów w XVI–XVII Wieku',
    category: 'Nowożytność',
    description:
      'Złoty wiek, humanizm, Unia Lubelska (1569), demokracja szlachecka, wolna elekcja (Artykuły Henrykowskie), potop szwedzki, husaria i Jan III Sobieski.',
    rank: 2,
    order: 0,
    coreNotes: `# Rzeczpospolita Obojga Narodów — Złoty i Srebrny Wiek (CKE)

## 1. Złoty Wiek i Unia Realna
- **Unia Lubelska (1569 r.)**: Przekształcenie unii personalnej w unię realną Rzeczypospolitej Obojga Narodów: wspólny monarcha, sejm, polityka zagraniczna i moneta; odrębne wojsko, skarb, urzędy centralne i sądownictwo.
- **Konfederacja Warszawska (1573 r.)**: Gwarancja pokoju religijnego i wolności wyznania dla szlachty (*państwo bez stosów*).

## 2. Ustrój Demokracji Szlacheckiej
- Sejm Walny trójstanowy: Król, Senat, Izba Poselska. Konstytucja *Nihil novi* (1505 r. — nic nowego bez zgody sejmu).
- **Pierwsza Wolna Elekcja (1573 r.)**: Wybór Henryka Walezego. Podpisanie fundamentów ustrojowych:
  - *Artykuły Henrykowskie*: Niezmienne zasady ustroju (wolna elekcja, zwoływanie sejmu co 2 lata, zakaz nakładania podatków bez sejmu, prawo do wypowiedzenia posłuszeństwa *de non praestanda oboedientia*).
  - *Pacta Conventa*: Osobiste zobowiązania każdego wybranego monarchy.

## 3. Konflikty XVII Wieku (Srebrny Wiek i Kryzys)
- **Wojny z Moskwą**: Dymitriady, zdobycie Moskwy przez hetmana Stanisława Żółkiewskiego (bitwa pod Kłuszynem 1610 r.), rozejm w Deulinie (1619 r.).
- **Powstanie Bohdana Chmielnickiego (1648 r.)**: Bunt kozacki na Ukrainie, ugoda w Perejasławiu z Rosją (1654 r.).
- **Potop Szwedzki (1655–1660)**: Najazd Karola X Gustawa, obrona Jasnej Góry, śluby lwowskie Jana Kazimierza, partyzantka Stefana Czarnieckiego, traktat w Oliwie (1660 r.).
- **Wojny z Turcją**: Cecora (1620), Chocim (1621, 1673), Odsiecz Wiedeńska Jana III Sobieskiego (12 września 1683 r.).
- **Degeneracja parlamentaryzmu**: Pierwsze zerwanie sejmu przez *liberum veto* (Władysław Siciński w 1652 r.).

## 4. Demokracja Szlachecka i Ruch Egzekucyjny
- **Konstytucja Nihil novi (1505 r., Radom)**: Zasada *nic nowego bez wspólnej zgody senatu i posłów* — ugruntowanie trójstanowego sejmu walnego (król, senat, izba poselska).
- **Ruch egzekucyjny (za Zygmunta II Augusta)**:
  - Przywódcy: Mikołaj Sienicki, Rafał Leszczyński.
  - Postulaty: egzekucja dóbr (zwrot bezprawnie trzymanych królewszczyzn), powołanie wojska kwarcianego (finansowanego z 1/4 dochodów dóbr koronnych), unifikacja państwa i egzekucja praw.
- **Unia Lubelska (1569 r.)**: Powstanie Rzeczypospolitej Obojga Narodów jako unii realnej. Wspólne: władca wybierany na wspólnej elekcji, sejm walny, polityka zagraniczna i obronna, moneta. Odrębne: skarby, wojska, urzędy centralne (marszałkowie, hetmani, kanclerze, podskarbiowie), sądownictwo i prawo (*Statuty Litewskie*).
- **Artykuły henrykowskie (1573 r.)**: Stały zbiór fundamentalnych praw ustrojowych Rzeczypospolitej:
  - Wolna elekcja *viritim*.
  - Zwoływanie sejmu co 2 lata na 6 tygodni.
  - 16 senatorów-rezydentów kontrolujących monarchę.
  - Artykuł o wypowiedzeniu posłuszeństwa (*de non praestanda oboedientia*) w przypadku złamania praw przez władcę.
- **Tolerancja religijna**: Konfederacja warszawska (1573 r.) — wieczysty pokój między różniącymi się w wierze (*dissidentes in religione*).`,
    reviewPrompts: `# Nowożytność — Tematy Wypracowań Maturalnych
1. Scharakteryzuj ustrój Rzeczypospolitej Obojga Narodów w dobie demokracji szlacheckiej. Wyjaśnij, czy ustrój ten był źródłem potęgi, czy przyczyną późniejszego upadku państwa.
2. Przedstaw skutki wojen XVII wieku dla demografii, gospodarki i kultury Rzeczypospolitej.
3. Przeanalizuj przyczyny i skutki kryzysu militarnego i ustrojowego Rzeczypospolitej w dobie wojen połowy XVII wieku (powstanie Chmielnickiego, potop szwedzki, wojny z Rosją).
4. Wykaż na wybranych przykładach źródłowych różnice między artykułami henrykowskimi a pacta conventa.`,
  },

  // Epoka 4 (rank: 3)
  {
    id: 'hist-oswiecenie',
    title: 'Oświecenie, Sejm Wielki i Rozbiory Polski',
    category: 'Oświecenie i Rozbiory',
    description:
      'Czasy saskie, mecenat Stanisława Augusta Poniatowskiego, Sejm Czteroletni, Konstytucja 3 Maja (1791), Targowica, insurekcja kościuszkowska i III rozbiory.',
    rank: 3,
    order: 0,
    coreNotes: `# Oświecenie i Upadek Rzeczypospolitej — CKE

## 1. Kryzys Epoki Saskiej i Pierwsze Reformy
- Unia personalna z Saksonią (August II Mocny, August III). Sejm Niemy (1717 r.) i narzucenie protektoratu rosyjskiego przez Piotra I.
- Początki Oświecenia: Stanisław Konarski i *Collegium Nobilum* (1740 r.), dzieło *O skutecznym rad sposobie*.
- Elekcja Stanisława Augusta Poniatowskiego (1764 r.), Szkoła Rycerska, mecenat królewski (obiady czwartkowe).
- Konfederacja Barska (1768–1772) i **I Rozbiór Polski (1772 r.)** przez Rosję, Prusy i Austrię.

## 2. Sejm Wielki (Czteroletni) 1788–1792
- Korzystna koniunktura międzynarodowa (wojna Rosji z Turcją).
- Reformy: Ustawa o miastach królewskich, aukcja wojska do 100 tysięcy.
- **Konstytucja 3 Maja 1791 r.**:
  - Pierwsza w Europie i druga na świecie nowoczesna konstytucja pisana.
  - Trójpodział władzy Monteskiusza: Władza ustawodawcza (Sejm dwuizbowy bez liberum veto, decyduje większość), wykonawcza (Król i Straż Praw), sądownicza (niezawisłe sądy).
  - Likwidacja wolnej elekcji (dziedziczność tronu w dynastii saskiej Wettinów) i zniesienie odrębności Korony i Litwy.

## 3. Konfederacja Targowicka i Kolejne Rozbiory
- Zdrada magnacka: Konfederacja targowicka (1792 r. — Szczęsny Potocki, Seweryn Rzewuski, Ksawery Branicki) i wojna w obronie konstytucji (bitwy pod Zieleńcami i Dubienką, ustanowienie orderu Virtuti Militari).
- **II Rozbiór Polski (1793 r.)** dokonany przez Rosję i Prusy (sejm grodzieński).
- **Insurekcja Kościuszkowska (1794 r.)**: Przysięga Tadeusza Kościuszki na Rynku w Krakowie, bitwa pod Racławicami (kosynierzy), Uniwersał Połaniecki (zniesienie poddaństwa osobistego chłopów), rzeź Pragi przez wojska Suworowa.
- **III Rozbiór Polski (1795 r.)**: Ostateczna likwidacja państwa polskiego przez Rosję, Prusy i Austrię, abdykacja Stanisława Augusta Poniatowskiego.

## 4. Oświecenie Stanisławowskie i Reformy Sejmu Czteroletniego
- **Modernizacja edukacji i kultury**:
  - Szkoła Rycerska (Korpus Kadetów, 1765 r.) — wychowanie obywatelskie i wojskowe (Tadeusz Kościuszko).
  - Komisja Edukacji Narodowej (KEN, 1773 r.) — pierwsze w świecie ministerstwo oświaty, powołane po kasacie zakonu jezuitów. Zreformowanie uniwersytetów (Szkoła Główna Koronna w Krakowie i Szkoła Główna Litewska w Wilnie).
  - Towarzystwo do Ksiąg Elementarnych pod kierownictwem Grzegorza Piramowicza — nowoczesne podręczniki w języku polskim.
- **Sejm Wielki (Czteroletni) 1788–1792**:
  - Marszałkowie: Stanisław Małachowski i Kazimierz Nestor Sapieha.
  - Stronnictwa sejmowe: patriotyczne (Ignacy Potocki, Hugo Kołłątaj), królewskie (Stanisław August Poniatowski), hetmańskie/konserwatywne (Szczęsny Potocki, Seweryn Rzewuski).
  - Ustawy wstępne: aukcja wojska do 100 tysięcy (zredukowana do 65 tys.), ofiara dziesiątego grosza, prawo o sejmikach (wykluczenie gołoty szlacheckiej), prawo o miastach królewskich (1791 r. — wolność osobista mieszczan, nietykalność majątkowa, prawo nabywania ziemi i dostęp do urzędów).
- **Ustawa Rządowa z dnia 3 maja 1791 r.**:
  - Trójpodział władzy wg Monteskiusza: władza ustawodawcza (Sejm dwuizbowy — zniesienie *liberum veto* i instrukcji poselskich, decyzje większością głosów), wykonawcza (król i Straż Praw złożona z prymasa i 5 ministrów), sądownicza (niezawisłe sądy stanowe).
  - Likwidacja wolnej elekcji — wprowadzenie dziedziczności tronu (dynastia saska Wettinów).
  - Chłopi oddani pod opiekę prawa i rządu krajowego.`,
    reviewPrompts: `# Rozbiory — Pytania do Tekstów Źródłowych
1. Dokonaj analizy postanowień Ustawy Rządowej z dnia 3 maja 1791 r. pod kątem zasady trójpodziału władzy oraz pozycji monarchy w państwie.
2. Scharakteryzuj przyczyny wewnętrzne i zewnętrzne upadku Rzeczypospolitej w XVIII wieku.
3. Przedstaw okoliczności zawiązania konfederacji targowickiej (1792 r.) i oceń postawę króla Stanisława Augusta Poniatowskiego w wojnie z Rosją w obronie Konstytucji 3 Maja.
4. Porównaj postanowienia Uniwersału połanieckiego Tadeusza Kościuszki (1794 r.) z sytuacją prawną i ekonomiczną chłopów pańszczyźnianych przed wybuchem insurekcji.`,
  },

  // Epoka 5 (rank: 4)
  {
    id: 'hist-wiek-xix',
    title: 'Wiek XIX: Walka o Niepodległość i Praca Organiczna',
    category: 'Wiek XIX',
    description:
      'Legiony Dąbrowskiego, Księstwo Warszawskie, Powstanie Listopadowe (1830), Powstanie Styczniowe (1863), Wielka Emigracja i praca organiczna w Wielkopolsce.',
    rank: 4,
    order: 0,
    coreNotes: `# Ziemie Polskie pod Zaborami (1795–1914) — CKE

## 1. Epopeja Napoleońska i Księstwo Warszawskie
- Utworzenie Legionów Polskich we Włoszech (1797 r. — Jan Henryk Dąbrowski, Józef Wybicki — *Pieśń Legionów Polskich we Włoszech*).
- **Księstwo Warszawskie (1807–1815)**: Utworzone traktatem w Tylży przez Napoleona, konstytucja z Kodeksem Cywilnym Napoleona (*„Wszyscy ludzie rodzą się równi i wolni”*), armia ks. Józefa Poniatowskiego (bitwa pod Raszynem 1809 r.).
- Kongres Wiedeński (1815 r.): Likwidacja Księstwa, powstanie Królestwa Polskiego (Kongresowego) w unii personalnej z carem Rosji, Wielkiego Księstwa Poznańskiego i Rzeczypospolitej Krakowskiej.

## 2. Wielkie Powstania Narodowe
- **Powstanie Listopadowe (1830–1831)**:
  - Noc listopadowa (29/30 listopada 1830 r. — Sprzysiężenie Podchorążych Piotra Wysockiego).
  - Detronizacja cara Mikołaja I przez Sejm w styczniu 1831 r., regularna wojna polsko-rosyjska (bitwy pod Stoczkiem, Olszynką Grochowską, Ostrołęką).
  - Skutki: Wielka Emigracja (Paryż, obóz Hôtel Lambert ks. Adama Jerzego Czartoryskiego, Towarzystwo Demokratyczne Polskie, twórczość Mickiewicza, Słowackiego, Chopina), represje, Cytadela warszawska.
- **Powstanie Styczniowe (1863–1864)**:
  - Branka Aleksandra Wielopolskiego, wybuch powstania 22 stycznia 1863 r., wojna partyzancka.
  - Tajne Państwo Podziemne, ostatni dyktator Romuald Traugutt.
  - Skutki: Uwłaszczenie chłopów ukazem carskim z 1864 r., bezwzględna rusyfikacja, zsyłki na Sybir, likwidacja autonomii Królestwa Polskiego (tzw. Kraj Przywiślański).

## 3. Praca Organiczna i Ziemie Zaboru Pruskiego (Wielkopolska)
- Dezawuowanie walki zbrojnej na rzecz podnoszenia poziomu gospodarczego i edukacyjnego:
  - Dezydery Chłapowski (nowoczesne rolnictwo w Turwi).
  - Karol Marcinkowski (Towarzystwo Pomocy Naukowej w Poznaniu 1841 r., Bazar Poznański).
  - Hipolit Cegielski (fabryka maszyn rolniczych w Poznaniu).
- Walka z germanizacją i Kulturkampfem kanclerza Bismarcka (sprawa dzieci z Wrześni 1901 r., wóz Michała Drzymały).

## 4. Powstania Narodowe i Myśl Emigracyjna
- **Powstanie Listopadowe (1830–1831)**:
  - Noc listopadowa (29/30 listopada 1830 r., Szkoła Podchorążych pod wodzą Piotra Wysockiego).
  - Detronizacja cara Mikołaja I przez Sejm (25 stycznia 1831 r.) — przekształcenie powstania w regularną wojnę polsko-rosyjską.
  - Bitwy: Stoczek, Dobre, Olszynka Grochowska, Iganie, Ostrołęka (klęska gen. Jana Skrzyneckiego). Upadek Warszawy (szturm Paskiewicza, obrona Woli gen. Józefa Sowińskiego).
  - Skutki: Wielka Emigracja, zniesienie Konstytucji Królestwa Polskiego i wprowadzenie Statutu Organicznego (1832 r.), stan wojenny, rusyfikacja, kasata Uniwersytetu Warszawskiego.
- **Wielka Emigracja i Nurty Polityczne**:
  - **Hotel Lambert** (książę Adam Jerzy Czartoryski): monarchia konstytucyjna, odzyskanie niepodległości dzięki interwencji dyplomatycznej mocarstw zachodnich (Wielka Brytania, Francja), umiarkowane reformy społeczne (uwłaszczenie za odszkodowaniem).
  - **Towarzystwo Demokratyczne Polskie (TDP)**: Mały Manifest (1832 r.) i Wielki Manifest (Poitiers 1836 r.) — republika demokratyczna, niepodległość wywalczona własnymi siłami narodu w powstaniu zbrojnym, bezwarunkowe uwłaszczenie chłopów.
  - **Gromady Ludu Polskiego** (Stanisław Worcell): radykalny socjalizm utopijny, likwidacja własności prywatnej i podziałów stanowych.
- **Powstanie Styczniowe (1863–1864)**:
  - Przyczyna bezpośrednia: branka do carskiego wojska zarządzona przez margrabiego Aleksandra Wielopolskiego.
  - Walki partyzanckie: ponad 1200 potyczek, brak regularnej armii. Dyktatorzy: Ludwik Mierosławski, Marian Langiewicz, Romuald Traugutt.
  - Dekret uwłaszczeniowy cara Aleksandra II (marzec 1864 r.) odciągający wieś od walki powstańczej.`,
    reviewPrompts: `# Wiek XIX — Zadania Maturalne CKE
1. Porównaj Powstanie Listopadowe i Powstanie Styczniowe pod kątem charakteru walk, zaplecza społecznego, roli regularnej armii oraz skutków politycznych.
2. Przedstaw program i osiągnięcia organiczników w zaborze pruskim w XIX wieku.
3. Porównaj ustrój, granice i stopień suwerenności Księstwa Warszawskiego (1807–1815) oraz Królestwa Polskiego w dobie konstytucyjnej (1815–1830).
4. Wyjaśnij założenia pracy organicznej i pracy u podstaw w zaborze pruskim i rosyjskim po klęsce powstania styczniowego.`,
  },

  // Epoka 6 (rank: 5)
  {
    id: 'hist-ii-rp',
    title: 'I Wojna Światowa i II Rzeczpospolita (1914–1939)',
    category: 'Dwudziestolecie Międzywojenne',
    description:
      'Akt 5 listopada, orędzie Wilsona, Powstanie Wielkopolskie, Wojna z bolszewikami (1920), Konstytucja Marcowa, zamach majowy Piłsudskiego i COP.',
    rank: 5,
    order: 0,
    coreNotes: `# Odrodzenie Państwa Polskiego i II RP — CKE

## 1. Droga do Niepodległości (1914–1918)
- Orientacje polityczne: Proaustriacka/niepodległościowa (Józef Piłsudski, Legiony Polskie) vs prorosyjska/anty-niemiecka (Roman Dmowski, Komitet Narodowy Polski w Paryżu).
- Umiędzynarodowienie sprawy polskiej: 13. punkt orędzia prezydenta USA Woodrowa Wilsona (styczeń 1918 r.).
- **11 listopada 1918 r.**: Przekazanie władzy wojskowej Józefowi Piłsudskiemu przez Radę Regencyjną w Warszawie (koniec I wojny światowej).
- **Powstanie Wielkopolskie (27 grudnia 1918 r.)**: Przyjazd Ignacego Jana Paderewskiego do Poznania, jedyne zwycięskie powstanie na ziemiach polskich, powrót Wielkopolski do macierzy zatwierdzony traktatem wersalskim (1919 r.).

## 2. Kształtowanie Granic i Wojna Polsko-Bolszewicka (1919–1921)
- Koncepcja inkorporacyjna Dmowskiego vs federacyjna Piłsudskiego.
- Wyprawa kijowska, kontrofensywa Armii Czerwonej (Tuchaczewski).
- **Bitwa Warszawska (13–25 sierpnia 1920 r.)**: Manewr znad Wieprza, „Cud nad Wisłą”, ocalenie niepodległości Polski i zatrzymanie komunizmu. Traktat ryski (18 marca 1921 r.).

## 3. Życie Polityczne i Gospodarcze II RP
- **Konstytucja Marcowa (1921 r.)**: Ustrój republiki parlamentarnej, przewaga Sejmu nad rządem i prezydentem.
- Zabójstwo prezydenta Gabriela Narutowicza (grudzień 1922 r.).
- **Przewrót Majowy (12–14 maja 1926 r.)**: Zbrojny zamach stanu Józefa Piłsudskiego, ukształtowanie rządów sanacji (Nowela Sierpniowa 1926, Konstytucja Kwietniowa 1935 wprowadzająca prymat prezydenta).
- **Wielkie Inwestycje**: Reforma walutowa Władysława Grabskiego (wprowadzenie złotego), budowa portu morskiego w Gdyni (Eugeniusz Kwiatkowski) i Centralnego Okręgu Przemysłowego (COP).

## 4. Kształtowanie Granic i Dyplomacja II RP
- **Granica zachodnia i południowa**:
  - Powstanie wielkopolskie (27 grudnia 1918 – luty 1919 r., gen. Józef Dowbor-Muśnicki) — jedyne zakończone pełnym sukcesem militarnym powstanie; przyłączenie Wielkopolski potwierdzone traktatem wersalskim.
  - Powstania śląskie: I (1919), II (1920 — likwidacja Sipo i powołanie policji parytetycznej), III (1921 — Wojciech Korfanty, bitwa o Górę św. Anny) oraz podział Górnego Śląska przez Ligę Narodów (Polska otrzymała mniejszy terytorialnie, lecz kluczowy przemysłowo obszar).
  - Plebiscyty na Warmii, Mazurach i Powiślu (11 lipca 1920 r.) — niekorzystny wynik dla Polski z powodu trwającej ofensywy bolszewickiej.
- **Wojna polsko-bolszewicka (1919–1920)**:
  - Wyprawa kijowska (maj 1920 r.) w sojuszu z Semenem Petlurą.
  - Bitwa Warszawska (13–25 sierpnia 1920 r.) — manewr znad Wieprza marszałka Piłsudskiego, rozbicie wojsk Tuchaczewskiego.
  - Traktat ryski (18 marca 1921 r.): wyznaczenie polsko-radzieckiej granicy (kompromis terytorialny na wschód od linii drugiego rozbioru).

## 5. Przewrót Majowy i Ewolucja Autorytarna
- **Przyczyny zamachu majowego (12–14 maja 1926 r.)**: kryzys sejmokracji, hiperinflacja (przed reformą Grabskiego), spory gabinetowe (chjeno-piast), wojna celna z Niemcami (1925 r.), układ w Locarno marginalizujący Polskę.
- **Konstytucja kwietniowa (23 kwietnia 1935 r.)**:
  - Odejście od trójpodziału władzy na rzecz jednolitej władzy państwowej skupionej w osobie Prezydenta Rzeczypospolitej.
  - Prezydent odpowiada wyłącznie przed Bogiem i historią za losy państwa.
  - Zwierzchnictwo prezydenta nad rządem, sejmem, senatem, siłami zbrojnymi, sądami i kontrolą państwową.
  - Wprowadzenie prerogatyw osobistych prezydenta niewymagających kontrasygnaty premiera.`,
    reviewPrompts: `# II RP — Zagadnienia Egzaminacyjne
1. Porównaj pozycję ustrojową Prezydenta Rzeczypospolitej w świetle Konstytucji Marcowej z 1921 r. oraz Konstytucji Kwietniowej z 1935 r.
2. Scharakteryzuj rolę Romana Dmowskiego i Józefa Piłsudskiego w procesie odbudowy niepodległego państwa polskiego.
3. Dokonaj analizy reformy walutowo-skarbowej Władysława Grabskiego z 1924 r. i jej wpływu na stabilizację makroekonomiczną odrodzonego państwa polskiego.
4. Scharakteryzuj koncepcję budowy Centralnego Okręgu Przemysłowego (COP) wicepremiera Eugeniusza Kwiatkowskiego w kontekście modernizacji gospodarczej i obronnej kraju.`,
  },

  // Epoka 7 (rank: 6)
  {
    id: 'hist-ii-wojna',
    title: 'II Wojna Światowa: Okupacja, Ruch Oporu i Sprawa Polska',
    category: 'II Wojna Światowa',
    description:
      'Pakt Ribbentrop-Mołotow, kampania wrześniowa 1939, zbrodnia katyńska, Holokaust, Polskie Państwo Podziemne, Powstanie Warszawskie i konferencja w Jałcie.',
    rank: 6,
    order: 0,
    coreNotes: `# II Wojna Światowa na Ziemiach Polskich (1939–1945) — CKE

## 1. Wybuch Wojny i Agresja Dwóch Totalitaryzmów
- **Pakt Ribbentrop-Mołotow (23 sierpnia 1939 r.)**: Tajny protokół dodatkowy o rozbiorze Polski wzdłuż linii rzek Narew-Wisła-San.
- **Wojna Obronna 1939 r.**: Westerplatte, bitwa nad Bzurą, obrona Helu, bitwa pod Kockiem (gen. Kleeberg). Agresja ZSRR na Polskę 17 września 1939 r.
- Internowanie władz II RP w Rumunii. Utworzenie legalnego Rządu RP na Uchodźstwie (Władysław Raczkiewicz — prezydent, gen. Władysław Sikorski — premier i Naczelny Wódz).

## 2. Okupacja Niemiecka i Sowiecka
- **Terror niemiecki**: Generalne Gubernatorstwo (Hans Frank), obozy koncentracyjne i zagłady (Auschwitz-Birkenau, Treblinka, Majdanek), Akcja AB, eksterminacja inteligencji. Zagłada ludności żydowskiej (Holokaust/Szoa), powstanie w getcie warszawskim (kwiecień 1943 r., Marek Edelman).
- **Terror sowiecki**: Zsyłki na Sybir (4 wielkie fale deportacji), zbrodnia katyńska (wiosna 1940 r. — zamordowanie blisko 22 tys. polskich oficerów i policjantów przez NKWD).

## 3. Fenomen Polskiego Państwa Podziemnego
- Pion cywilny (Delegat Rządu na Kraj, podziemny wymiar sprawiedliwości, tajne nauczanie) oraz pion wojskowy: **Armia Krajowa (AK)** pod dowództwem gen. Stefana Roweckiego „Grota”, gen. Tadeusza Komorowskiego „Bora”.
- Akcja „Burza” i **Powstanie Warszawskie (1 sierpnia – 2 października 1944 r.)**: 63 dni heroicznej walki powstańców, brak pomocy Armii Czerwonej stojącej na Pradze, zniszczenie Warszawy na rozkaz Hitlera.
- Sprawa polska w polityce mocarstw: Teheran (1943), Jałta (luty 1945), Poczdam (1945) — oddanie Polski pod sowiecką strefę wpływów (linia Curzona na wschodzie, ziemie zachodnie).

## 4. Polskie Państwo Podziemne i Siły Zbrojne na Obczyźnie
- **Fenomen Polskiego Państwa Podziemnego (PPP)**:
  - Władza cywilna: Krajowa Reprezentacja Polityczna (później Rada Jedności Narodowej) oraz Delegatura Rządu na Kraj (Delegat Rządu w randze wicepremiera: Cyryl Ratajski, Jan Piekałkiewicz, Jan Stanisław Jankowski).
  - Ramię zbrojne: Służba Zwycięstwu Polski (SZP) $\to$ Związek Walki Zbrojnej (ZWZ) $\to$ Armia Krajowa (AK, gen. Stefan Rowecki „Grot”, gen. Tadeusz Komorowski „Bór”, gen. Leopold Okulicki „Niedźwiadek”).
  - Podziemne sądownictwo (Cywilne i Wojskowe Sądy Specjalne wydające wyroki śmierci za zdradę i kolaborację), tajne nauczanie (Tajne Komplety) i akcje sabotażowo-dywersyjne (Kedyw).
- **Powstanie Warszawskie (1 sierpnia – 2 października 1944 r.)**:
  - Plan polityczny i militarny: Akcja „Burza” — wyzwolenie stolicy własnymi siłami tuż przed wkroczeniem Armii Czerwonej i wystąpienie w roli gospodarza wobec władz radzieckich.
  - 63 dni heroicznej walki: zbrodnie SS na Woli i Ochocie (rzeź Woli — Reinefarth, Dirlewanger), bierność Armii Czerwonej na prawym brzegu Wisły, odmowa lądowania aliantom na radzieckich lotniskach.
  - Skutki: śmierć ok. 180 tys. cywilów i 18 tys. powstańców, niemal całkowite wyburzenie lewobrzeżnej Warszawy przez Niemców.

## 5. Sprawa Polska na Konferencjach Koalicji Antyhitlerowskiej
- **Teheran (1943)**: Wstępne ustalenie linii Curzona jako wschodniej granicy Polski bez wiedzy polskiego rządu.
- **Jałta (luty 1945)**: Churchill, Roosevelt, Stalin — potwierdzenie linii Curzona na wschodzie i rekompensata terytorialna na zachodzie i północy. Utworzenie Tymczasowego Rządu Jedności Narodowej (TRJN) pod kontrolą komunistów i deklaracja wolnych wyborów.
- **Poczdam (lipiec-sierpień 1945)**: Ostateczne oddanie pod polską administrację Ziem Odzyskanych (Warmia, Mazury, Pomorze Zachodnie, Śląsk, Ziemia Lubuska) oraz decyzja o wysiedleniu ludności niemieckiej.`,
    reviewPrompts: `# II Wojna Światowa — Analiza Historyczna
1. Wyjaśnij, na czym polegał ewenement struktury Polskiego Państwa Podziemnego na tle ruchów oporu w okupowanej Europie.
2. Przedstaw militarne i polityczne uwarunkowania podjęcia decyzji o wybuchu Powstania Warszawskiego.
3. Przedstaw szlak bojowy Polskich Sił Zbrojnych na Zachodzie (Narwik, Bitwa o Anglię, Tobruk, Monte Cassino, Falaise, Arnhem) i oceń ich wkład militarny w zwycięstwo koalicji.
4. Scharakteryzuj przebieg i konsekwencje Zbrodni Katyńskiej (1940 r.) oraz jej wpływ na relacje rządu gen. Władysława Sikorskiego z ZSRR.`,
  },

  // Epoka 8 (rank: 7)
  {
    id: 'hist-prl',
    title: 'Polska pod Rządami Komunistów (1944–1980)',
    category: 'Polska Ludowa',
    description:
      'Manifest PKWN, sfałszowane referendum 1946 i wybory 1947, Żołnierze Niezłomni, stalinizm, Poznański Czerwiec 1956, Marzec 68, Grudzień 70 i KOR.',
    rank: 7,
    order: 0,
    coreNotes: `# Polska Rzeczpospolita Ludowa (PRL) — CKE

## 1. Narzucenie Władzy Komunistycznej (1944–1948)
- PKWN i Manifest z 22 lipca 1944 r. (ogłoszony w Moskwie).
- Proces Szesnastu w Moskwie (czerwiec 1945 r.) — uwięzienie przywódców Polskiego Państwa Podziemnego.
- Opozycja legalna: Stanisław Mikołajczyk i Polskie Stronnictwo Ludowe (PSL).
- Sfałszowane referendum ludowe „3 razy TAK” (1946 r.) oraz wybory do Sejmu Ustawodawczego (styczeń 1947 r.).
- Podziemie niepodległościowe (Żołnierze Wyklęci/Niezłomni — Danuta Siedzikówna „Inka”, Witold Pilecki, Łukasz Ciepliński).

## 2. Stalinizm i Poznański Przełom 1956
- Bierut, represje UB/Informacji Wojskowej, procesy pokazowe, uwięzienie prymasa Stefana Wyszyńskiego.
- Powstanie PZPR w grudniu 1948 r. (połączenie PPR i koncesjonowanego PPS).
- **Poznański Czerwiec 1956 r.**: Pierwszy w PRL strajk generalny robotników w Zakładach Cegielskiego (ZISPO) w Poznaniu. Demonstracje pod hasłem *„Chleba i wolności”*, krwawe stłumienie przez wojsko i czołgi (ponad 70 ofiar śmiertelnych, śmierć 13-letniego Romka Strzałkowskiego).
- Polski Październik 1956 r.: Dojście do władzy Władysława Gomułki, odwilż polityczna, uwolnienie prymasa.

## 3. Kryzysy Społeczno-Polityczne
- **Marzec 1968 r.**: Zdjęcie „Dziadów” Dejmka, protesty studentów, antysemicka nagonka władz, emigracja tysięcy polskich Żydów.
- **Grudzień 1970 r.**: Podwyżki cen żywności, strajki na Wybrzeżu (Gdańsk, Gdynia, Szczecin), użycie ostrej amunicji przeciw robotnikom (*Czarny Czwartek*). Odsunięcie Gomułki, rządy Edwarda Gierka.
- Dekada Gierka (1970–1980): Modernizacja na zachodnie kredyty, budowa Huty Katowice, fiasko gospodarcze, strajki w Radomiu i Ursusie (czerwiec 1976 r.).
- **Narodziny Zorganizowanej Opozycji**: Powstanie Komitetu Obrony Robotników (KOR — Kuroń, Modzelewski, Lipski), ROPCiO, WZZ. Wybór kardynała Karola Wojtyły na papieża Jana Pawła II (16 października 1978 r.) i I pielgrzymka do Polski (1979 r. — *„Niech zstąpi Duch Twój...”*).

## 4. Stalinizacja i Aparat Terroru w Polsce (1944–1956)
- **Manifest PKWN (22 lipca 1944 r., Chełm/Lublin)**: Powołanie marionetkowego rządu komunistycznego pod kuratelą Stalina, zapowiedź reformy rolnej bez odszkodowań i nacjonalizacji przemysłu.
- **Likwidacja opozycji legalnej i niepodległościowej**:
  - Sfałszowane referendum ludowe „3xTAK” (30 czerwca 1946 r.) oraz wybory do Sejmu Ustawodawczego (styczeń 1947 r.) niszczące Polskie Stronnictwo Ludowe (PSL) Stanisława Mikołajczyka.
  - Podziemie antykomunistyczne (Żołnierze Wyklęci / Niezłomni): WiN (Zrzeszenie Wolność i Niezawisłość), NSZ (Narodowe Siły Zbrojne). Śledztwa i pokazowe procesy prowadzone przez MBP (Ministerstwo Bezpieczeństwa Publicznego: Różański, Brystygierowa), egzekucje rtm. Witolda Pileckiego, mjr. Zygmunta Szendzielarza „Łupaszki”, płk. Łukasza Cieplińskiego.
  - Likwidacja niezależności Kościoła katolickiego: proces bpa Czesława Kaczmarka, internowanie prymasa Stefana Wyszyńskiego (1953–1956, Jasnogórskie Śluby Narodu Polskiego).

## 5. Kryzysy Społeczno-Polityczne w PRL
- **Poznański Czerwiec 1956**: Strajk robotników Zakładów im. Stalina (Cegielskiego) pod hasłami „Chleba i wolności”. Krwawe stłumienie buntu przez wojsko (ponad 50 zabitych, w tym Romek Strzałkowski).
- **Październik 1956**: Przesilenie polityczne, dojście do władzy Władysława Gomułki, chwilowa odwilż (rehabilitacje, uwolnienie kard. Wyszyńskiego, zaprzestanie przymusowej kolektywizacji).
- **Marzec 1968**: Zdjęcie z afisza Teatru Narodowego „Dziadów” w reżyserii Kazimierza Dejmka, wiec na Uniwersytecie Warszawskim (8 marca), antysemicka kampania moczarowców w PZPR i emigracja pomarcowa inteligencji żydowskiej.
- **Grudzień 1970**: Drastyczne podwyżki cen żywności przed świętami, strajki stoczniowców w Gdańsku, Gdyni i Szczecinie. Decyzja Gomułki o użyciu broni palnej („czarny czwartek” w Gdyni). Ustąpienie Gomułki, I sekretarzem zostaje Edward Gierek.`,
    reviewPrompts: `# PRL — Pytania Maturalne
1. Wyjaśnij genezę, przebieg i historyczne znaczenie Poznańskiego Czerwca 1956 roku.
2. Przedstaw formy i metody oporu polskiego społeczeństwa wobec władzy komunistycznej w latach 1956–1980.
3. Scharakteryzuj politykę gospodarczo-społeczną ekipy Edwarda Gierka w latach 70. XX wieku (kredyty zachodnie, inwestycje przemysłowe) i wyjaśnij przyczyny załamania gospodarczego w 1976 r.
4. Omów genezę, strukturę i formy działalności Komitetu Obrony Robotników (KOR) po protestach w Radomiu i Ursusie w 1976 r.`,
  },

  // Epoka 9 (rank: 8)
  {
    id: 'hist-solidarnosc-1989',
    title: 'Solidarność, Stan Wojenny i Przełom 1989 Roku',
    category: 'Transformacja Ustrojowa',
    description:
      'Strajki sierpniowe 1980, 21 postulatów, NSZZ „Solidarność”, stan wojenny (13 grudnia 1981), Okrągły Stół i wybory 4 czerwca 1989 r.',
    rank: 8,
    order: 0,
    coreNotes: `# „Solidarność” i Upadek Komunizmu w Polsce — CKE

## 1. Karnawał „Solidarności” (1980–1981)
- Sierpień 1980: Fala strajków w Stoczni Gdańskiej im. Lenina w obronie Anny Walentynowicz. Powstanie Międzyzakładowego Komitetu Strajkowego (MKS) z Lechem Wałęsą na czele.
- **21 Postulatów MKS**: Utworzenie niezależnych związków zawodowych, prawo do strajku, wolność słowa, zwolnienie więźniów politycznych.
- Porozumienia Sierpniowe (31 sierpnia 1980 r. w Gdańsku, Szczecinie, Jastrzębiu).
- Rejestracja Niezależnego Samorządnego Związku Zawodowego „Solidarność” (blisko 10 milionów członków!). I Krajowy Zjazd Delegatów i Posłanie do ludzi pracy Europy Wschodniej.

## 2. Stan Wojenny (13 grudnia 1981 r.)
- Wprowadzenie stanu wojennego przez Wojskową Radę Ocalenia Narodowego (WRON) pod przewodnictwem gen. Wojciecha Jaruzelskiego z naruszeniem konstytucji PRL.
- Internowanie tysięcy działaczy opozycji, pacyfikacja strajków (krwawa pacyfikacja kopalni „Wujek” w Katowicach — śmierć 9 górników).
- Działalność podziemna: Tymczasowa Komisja Koordynacyjna (TKK), wydawnictwa drugiego obiegu, zamordowanie ks. Jerzego Popiełuszki przez funkcjonariuszy SB (październik 1984 r.).

## 3. Przełom Roku 1989 i Narodziny III RP
- Fale strajków wiosną i latem 1988 r. wymuszające dialog władzy z opozycją.
- **Obrady Okrągłego Stołu (luty – kwiecień 1989 r.)**: Porozumienie rządu i opozycji solidarnościowej — ponowna legalizacja „Solidarności”, powołanie urzędu Prezydenta PRL, utworzenie Senatu oraz kontraktowe wybory parlamentarne.
- **Wybory 4 Czerwca 1989 r.**: Zmiażdżenie komunistów przez Komitet Obywatelski „Solidarność” (zdobycie 99 na 100 miejsc w Senacie i 100% możliwych 35% mandatów w Sejmie).
- Powstanie rządu Tadeusza Mazowieckiego (pierwszy niekomunistyczny premier w Europie Środkowo-Wschodniej od 1945 r.).
- Plan Balcerowicza (reformy rynkowe) i Nowela Grudniowa 1989 r. (przywrócenie nazwy Rzeczpospolita Polska i orła w koronie).

## 4. Narodziny NSZZ „Solidarność” i Stan Wojenny
- **Sierpień 1980**: Fala strajków po podwyżkach cen mięsa, strajk okupacyjny w Stoczni Gdańskiej im. Lenina (Anna Walentynowicz, Lech Wałęsa). Powstanie MKS i ogłoszenie **21 postulatów** (utworzenie wolnych związków zawodowych niezależnych od partii, prawo do strajku, wolność słowa i druku, zniesienie cenzury, uwolnienie więźniów politycznych).
- **Porozumienia Sierpniowe (31 sierpnia 1980 r.)**: Podpisanie porozumień w Gdańsku (Wałęsa i Jagielski), Szczecinie i Jastrzębiu-Zdroju. Rejestracja NSZZ „Solidarność” (10 mln członków).
- **Stan wojenny (13 grudnia 1981 r.)**:
  - Powołanie Wojskowej Rady Ocalenia Narodowego (WRON) pod przewodnictwem gen. Wojciecha Jaruzelskiego.
  - Zawieszenie swobód obywatelskich, militaryzacja zakładów pracy, godzina milicyjna, internowanie ok. 10 tysięcy działaczy opozycji.
  - Pacyfikacja kopalni „Wujek” w Katowicach (16 grudnia 1981 r. — śmierć 9 górników od kul ZOMO).
  - Działalność podziemia: Tymczasowa Komisja Koordynacyjna (TKK), prasa drugiego obiegu, demonstracje uliczne, męczeńska śmierć ks. Jerzego Popiełuszki zamordowanego przez oficerów SB (październik 1984 r.).

## 5. Okrągły Stół i Transformacja Ustrojowa 1989
- **Obrady Okrągłego Stołu (6 lutego – 5 kwietnia 1989 r.)**:
  - Strona rządowa (Kiszczak, Reykowski) i solidarnościowo-opozycyjna (Wałęsa, Mazowiecki, Geremek, Kuroń) przy udziale mediatorów kościelnych.
  - Ustalenia: ponowna rejestracja NSZZ „Solidarność”, utworzenie urzędu Prezydenta PRL, powołanie Senatu, kontraktowe wybory do Sejmu (65% mandatów zagwarantowanych dla koalicji PZPR-ZSL-SD, 35% wolnych mandatów) oraz całkowicie wolne wybory do 100-osobowego Senatu.
- **Wybory 4 czerwca 1989 r.**: Zdecydowane zwycięstwo Komitetu Obywatelskiego „Solidarność” (99 na 100 miejsc w Senacie, 161 na 161 możliwych mandatów w Sejmie).
- **Rząd Tadeusza Mazowieckiego (12 września 1989 r.)**: Pierwszy niekomunistyczny premier w Europie Środkowo-Wschodniej („gruba kreska”).
- **Nowela grudniowa (29 grudnia 1989 r.)**: Zmiana Konstytucji — Rzeczpospolita Polska jako demokratyczne państwo prawne, przywrócenie korony orłowi w godle państwowym, likwidacja zapisu o przewodniej roli PZPR i sojuszu z ZSRR.`,
    reviewPrompts: `# Transformacja 1989 — Tematy Wypracowań CKE
1. Dokonaj bilansu obrad Okrągłego Stołu i wyborów 4 czerwca 1989 r. w procesie pokojowego demontażu reżimu komunistycznego w Polsce.
2. Przedstaw międzynarodowy kontekst upadku komunizmu w Europie Środkowo-Wschodniej (Jesień Narodów 1989).
3. Przedstaw założenia i skutki społeczne Planu Balcerowicza (styczeń 1990 r.) jako programu przejścia od gospodarki centralnie planowanej do rynkowej.
4. Oceń rolę pierwszej pielgrzymki papieża Jana Pawła II do Ojczyzny w czerwcu 1979 r. w procesie przebudzenia społecznego i powstania ruchu „Solidarności”.`,
  },
];
