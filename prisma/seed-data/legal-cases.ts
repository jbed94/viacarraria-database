import type { Course, SeedEdge } from './types.js';

// ============================================================================
// CASE 1: SPRAWA KARNA GOSPODARCZA (KPK / KK)
// ============================================================================
export const criminalCaseEdges: SeedEdge[] = [
  // Etap 0 (Śledztwo) -> Etap 1 (Środki Przymusu i Zarzuty)
  { id: 'crim-zawiad-przeszukanie', source: 'crim-zawiadomienie', target: 'crim-przeszukanie' },
  { id: 'crim-przeszukanie-zarzuty', source: 'crim-przeszukanie', target: 'crim-zarzuty' },
  { id: 'crim-zarzuty-areszt', source: 'crim-zarzuty', target: 'crim-areszt' },

  // Etap 1 -> Etap 2 (Opinie Biegłych)
  { id: 'crim-przeszukanie-opiniait', source: 'crim-przeszukanie', target: 'crim-opinia-it' },
  { id: 'crim-zarzuty-opiniafin', source: 'crim-zarzuty', target: 'crim-opinia-fin' },

  // Etap 2 -> Etap 3 (Akt Oskarżenia)
  { id: 'crim-opiniait-akt', source: 'crim-opinia-it', target: 'crim-akt-oskarzenia' },
  { id: 'crim-opiniafin-akt', source: 'crim-opinia-fin', target: 'crim-akt-oskarzenia' },
  { id: 'crim-areszt-akt', source: 'crim-areszt', target: 'crim-akt-oskarzenia' },

  // Etap 3 -> Etap 4 (Przewód Sądowy)
  { id: 'crim-akt-rozprawa1', source: 'crim-akt-oskarzenia', target: 'crim-rozprawa1' },
  { id: 'crim-rozprawa1-rozprawa2', source: 'crim-rozprawa1', target: 'crim-rozprawa2' },
  { id: 'crim-rozprawa2-glosy', source: 'crim-rozprawa2', target: 'crim-glosy-stron' },

  // Etap 4 -> Etap 5 (Wyrok i Apelacja)
  { id: 'crim-glosy-wyrokso', source: 'crim-glosy-stron', target: 'crim-wyrok-so' },
  { id: 'crim-wyrokso-apelacja', source: 'crim-wyrok-so', target: 'crim-apelacja' },
  { id: 'crim-apelacja-prawomocny', source: 'crim-apelacja', target: 'crim-wyrok-prawomocny' },
];

export const criminalCaseCourses: Course[] = [
  // Etap 0 (rank: 0)
  {
    id: 'crim-zawiadomienie',
    title: 'Zawiadomienie GIIF i Wszczęcie Śledztwa',
    category: 'Etap 0: Śledztwo',
    description:
      'Zawiadomienie o podejrzeniu popełnienia przestępstwa prania brudnych pieniędzy (art. 299 k.k.) oraz postanowienie o wszczęciu śledztwa w sprawie (in rem).',
    rank: 0,
    order: 0,
    coreNotes: `# Akta Sprawy Karnej: Postanowienie o Wszczęciu Śledztwa
**Sygnatura akt Prokuratury**: PO II Ds 142/2024  
**Organ prowadzący**: Prokuratura Okręgowa w Poznaniu — 2. Wydział do Spraw Przestępczości Gospodarczej i Finansowo-Skarbowej

---

## 1. Zawiadomienie Generalnego Inspektora Informacji Finansowej (GIIF)
W dniu 14 marca 2024 r. do Prokuratury Okręgowej w Poznaniu wpłynęło zawiadomienie Generalnego Inspektora Informacji Finansowej sporządzone w trybie art. 86 ust. 1 ustawy z dnia 1 marca 2018 r. o przeciwdziałaniu praniu pieniędzy oraz finansowaniu terroryzmu (Dz.U. z 2023 r. poz. 1124).
- **Opis transakcji podejrzanych (STR)**:
  - W okresie od stycznia 2023 r. do lutego 2024 r. na rachunek spółki *Vortex Capital Sp. z o.o.* w banku mBank S.A. wpłynęły środki pieniężne w łącznej kwocie **14.850.000 PLN** z tytułu rzekomych usług doradztwa IT i optymalizacji algorytmicznej.
  - Środki te były niezwłocznie dzielone na transze poniżej progu raportowego 15.000 EUR i transferowane na rachunki giełd kryptowalutowych (m.in. Binance, Kraken) oraz podmiotów typu *shell company* zarejestrowanych na Cyprze i w Zjednoczonych Emiratach Arabskich.

## 2. Postanowienie o Wszczęciu Śledztwa (art. 303 k.p.k.)
Dnia 18 marca 2024 r. Prokurator Prokuratury Okręgowej w Poznaniu wydał postanowienie:
1. O **wszczęciu śledztwa w sprawie (*in rem*)** o czyn z art. 299 § 1 i 5 k.k. w zw. z art. 286 § 1 k.k. w zw. z art. 294 § 1 k.k. w zw. z art. 12 § 1 k.k.
2. Powierzeniu prowadzenia śledztwa w całości funkcjonariuszom Centralnego Biura Zwalczania Cyberprzestępczości (CBZC) Zarząd w Poznaniu.
3. Wystąpieniu do Sądu Okręgowego w Poznaniu z wnioskiem o wydanie postanowienia o blokadzie rachunków bankowych na okres 6 miesięcy na podstawie art. 106a ust. 3 ustawy — Prawo bankowe.`,
    reviewPrompts: `# Kwestie Proceduralne — Śledztwo in rem
1. Na jakiej podstawie prokurator może przedłużyć blokadę rachunku bankowego ponad pierwotny termin 72 godzin i jaki środek zaskarżenia przysługuje posiadaczowi rachunku?
2. Wyjaśnij różnicę materialnoprawną pomiędzy fazą śledztwa *in rem* a fazą *in personam*.`,
  },
  {
    id: 'crim-przeszukanie',
    title: 'Przeszukanie Siedziby i Zabezpieczenie Dowodów',
    category: 'Etap 0: Śledztwo',
    description:
      'Czynności niecierpiące zwłoki w trybie art. 217 i 220 k.p.k.: przeszukanie biura, zajęcie serwerów NAS, nośników NVMe i dokumentacji.',
    rank: 0,
    order: 1,
    coreNotes: `# Protokół Przeszukania i Zabezpieczenia Rzeczy (art. 217, 220, 228 k.p.k.)

**Miejsce czynności**: Siedziba spółki *Vortex Capital Sp. z o.o.*, ul. Roosevelta 18, 60-829 Poznań  
**Data i godzina**: 22 marca 2024 r., godz. 06:15 – 14:40  
**Uczestnicy**: Funkcjonariusze CBZC Wydział w Poznaniu, biegły z zakresu informatyki śledczej, prezes zarządu Tomasz M.

---

## 1. Przebieg Czynności Przeszukania
- Przed przystąpieniem do czynności okazano nakaz prokuratorski oraz wezwano Tomasza M. do dobrowolnego wydania urządzeń rejestrujących dane, haseł dostępowych oraz dokumentacji księgowej.
- Tomasz M. oświadczył, że nie wyda dobrowolnie nośników danych i odmawia podania haseł szyfrujących do macierzy dyskowych.

## 2. Spis i Opis Zabezpieczonych Przedmiotów (Karty Dowodowe nr 1–18)
1. **Dowód rzeczowy Drz 1/24**: Macierz dyskowa Synology NAS 4-bay z 4 dyskami Seagate IronWolf 8TB w konfiguracji RAID 5.
2. **Dowód rzeczowy Drz 2/24**: Komputer przenośny Apple MacBook Pro 16" (nr seryjny C02D...), uruchomiony w chwili wejścia (dokonano natychmiastowego zrzutu pamięci operacyjnej RAM przy użyciu narzędzia *LiME/OSXpmem* na dedykowany nośnik forensyczny z blokadą zapisu *write-blocker*).
3. **Dowód rzeczowy Drz 3/24**: Dwa portfele sprzętowe Ledger Nano X zabezpieczone w klatce Faradaya.
4. **Dowód rzeczowy Drz 4/24**: Segregatory z napisem „Faktury VAT 2023/2024 – Consulting & Advisory” zawierające 142 faktury z firmami zarejestrowanymi w rajach podatkowych.

## 3. Oświadczenia i Zastrzeżenia do Protokołu
Obrońca Tomasza M. adw. Janusz K. zgłosił zastrzeżenie do protokołu w trybie art. 224 § 2 k.p.k., wskazując, iż zabezpieczony laptop zawierał korespondencję objętą tajemnicą obrończą i tajemnicą przedsiębiorstwa. Zabezpieczone nośniki zapieczętowano w bezpiecznych kopertach z podpisami obecnych.
## 4. Standardy Informatyki Śledczej i Łańcuch Dowodowy (Chain of Custody)
- **Kopia Binarna Bit-po-Bicie (Bit-Stream Image)**:
  - Wykonana za pomocą urządzenia blokującego zapis sprzętowy Tableau T8u Forensic USB 3.0 Bridge.
  - Obliczenie skrótów kryptograficznych dysków źródłowych i obrazów forensycznych:
    - *Dysk 1 (NVMe Samsung 990 Pro 2TB)*: SHA-256 = \`a9f4c3b288e17412d09ff93108c4e51240a5b817e0892c90fa189c452e89d14a\`
    - *Dysk 2 (RAID5 Synology Member 1)*: SHA-256 = \`b814a09c4f1e5821d309ee8812c41870fa5b8109e0892c90fa189c452e89d99b\`
- **Zabezpieczenie Pamięci Ulotnej RAM**:
  - Zrzut pamięci RAM (\`memdump.raw\`) o rozmiarze 64 GB wykonany przed wyłączeniem stacji roboczej pozwolił na zachowanie otwartych sesji przeglądarek, kluczy sesyjnych TLS oraz odszyfrowanych portfeli MetaMask.

## 5. Protokół Rozpoznania Zastrzeżeń z art. 225 § 3 k.p.k.
- Wobec oświadczenia obrońcy, że dyski zawierają pisma obrończe podlegające bezwzględnemu zakazowi dowodowemu (art. 225 § 3 k.p.k. w zw. z art. 178 pkt 1 k.p.k.), prokurator przekazał zabezpieczone zapieczętowane pakiety do Sądu Rejonowego Poznań-Stare Miasto celem zbadania zawartości przez sędziego bez udziału oskarżyciela publicznego.
`,
    reviewPrompts: `# Pytania Proceduralne — Czynności Dowodowe
1. W jaki sposób organ procesowy powinien postąpić z nośnikami danych, co do których osoba przeszukiwana oświadcza, że zawierają korespondencję z obrońcą (art. 225 § 3 k.p.k.)?
2. Wyjaśnij zasady zachowania łańcucha dowodowego (*chain of custody*) w informatyce śledczej i znaczenie obliczania skrótów kryptograficznych SHA-256 dla kopii binarnych dysków.
3. Wyjaśnij, w jakiej procedurze sąd orzeka o dopuszczeniu do śledztwa dokumentów lub nośników objętych tajemnicą obrończą (art. 225 § 3 k.p.k.) oraz jakie są konsekwencje naruszenia zakazu dowodowego z art. 178 pkt 1 k.p.k.
4. Czym różni się przeszukanie lokalu w porze nocnej (art. 221 k.p.k.) w lokalu mieszkalnym od przeszukania w lokalu przedsiębiorstwa lub instytucji?`,
  },

  // Etap 1 (rank: 1)
  {
    id: 'crim-zarzuty',
    title: 'Przedstawienie Zarzutów i Przesłuchanie Podejrzanego',
    category: 'Etap 1: Środki Przymusu',
    description:
      'Wydanie postanowienia o przedstawieniu zarzutów z art. 286 § 1 k.k. i art. 299 § 1 i 5 k.k. (przejście w fazę in personam) oraz odmowa składania wyjaśnień.',
    rank: 1,
    order: 0,
    coreNotes: `# Postanowienie o Przedstawieniu Zarzutów (art. 313 § 1 k.p.k.)

**Data**: 23 marca 2024 r., godz. 10:00  
**Prokurator**: Prokurator Prokuratury Okręgowej w Poznaniu

---

## 1. Treść Zarzutów
Podejrzanemu Tomaszowi M. zarzuca się, że:
> W okresie od dnia 12 stycznia 2023 roku do dnia 28 lutego 2024 roku w Poznaniu, działając w krótkich odstępach czasu w wykonaniu z góry powziętego zamiaru (art. 12 § 1 k.k.), w celu osiągnięcia korzyści majątkowej, jako prezes zarządu spółki *Vortex Capital Sp. z o.o.*, doprowadził 48 inwestorów do niekorzystnego rozporządzenia mieniem znacznej wartości w łącznej kwocie **14.850.000 PLN** poprzez wprowadzenie ich w błąd co do rzeczywistego przeznaczenia wpłacanych środków oraz gwarantowanego zysku z rzekomego funduszu algorytmicznego arbitrażu kryptowalutowego, a następnie podejmował czynności mające na celu udaremnienie i znaczne utrudnienie stwierdzenia ich przestępnego pochodzenia i miejsca przechowywania poprzez transfery przez zagraniczne rachunki i giełdy kryptowalutowe,
> 
> **tj. o przestępstwo z art. 286 § 1 k.k. w zw. z art. 294 § 1 k.k. oraz z art. 299 § 1 i § 5 k.k. w zw. z art. 11 § 2 k.k. w zw. z art. 12 § 1 k.k.**

## 2. Przebieg Przesłuchania
- Po odczytaniu postanowienia o przedstawieniu zarzutów i pouczeniu o treści art. 74, 175 i 300 k.p.k., podejrzany oświadczył:  
  *„Zrozumiałem treść zarzucanego mi czynu. Nie przyznaję się do popełnienia zarzucanych mi przestępstw. Odmawiam składania jakichkolwiek wyjaśnień i odmawiam odpowiedzi na jakiekolwiek pytania przesłuchującego do czasu zapoznania się mojego obrońcy z całością zgromadzonego w sprawie materiału dowodowego.”*
- Obrońca podejrzanego wniósł o natychmiastowe umożliwienie obrońcy końcowego zaznajomienia się z protokołami czynności, w których podejrzany ma prawo brać udział.
## 3. Postanowienie o Przedstawieniu Zarzutów (art. 313 § 1 k.p.k.)
Dnia 23 marca 2024 r. prokurator ogłosił podejrzanemu Tomaszowi M., że zarzuca mu:
- Popełnienie w okresie od 1 stycznia 2023 r. do 20 marca 2024 r. w Poznaniu i innych miejscowościach, działając w krótkich odstępach czasu w wykonaniu z góry powziętego zamiaru, w celu osiągnięcia korzyści majątkowej, przestępstwa oszustwa w stosunku do mienia znacznej wartości poprzez wprowadzenie 48 osób w błąd co do zamiaru i możliwości wywiązania się z umów powierniczych i doprowadzenie ich do niekorzystnego rozporządzenia mieniem w łącznej kwocie **14.850.000 PLN** (art. 286 § 1 k.k. w zw. z art. 294 § 1 k.k. w zw. z art. 12 § 1 k.k.) oraz podejmowania czynności mających na celu udaremnienie lub znaczne utrudnienie stwierdzenia przestępnego pochodzenia tych środków poprzez transfery kryptoaktywów (art. 299 § 1 i 5 k.k.).

## 4. Przebieg Przesłuchania Podejrzanego i Linia Obrony
- Podejrzany po pouczeniu o prawie do odmowy składania wyjaśnień (art. 175 k.p.k.) złożył oświadczenie, że nie przyznaje się do winy i złoży wyjaśnienia.
- Linia obrony: Tomasz M. twierdził, że środki klientów zostały utracone w wyniku niespodziewanego błędu w oprogramowaniu zewnętrznej giełdy oraz ataku typu *flash-loan exploit*, a nie w wyniku świadomego zaboru kapitału. Nie przedstawił jednak żadnych logów potwierdzających ten incydent.

## 5. Zabezpieczenie Majątkowe na Mieniu Podejrzanego (art. 291 k.p.k.)
- Prokurator wydał postanowienie o zabezpieczeniu majątkowym grożących kar grzywny, przepadku korzyści oraz obowiązku naprawienia szkody poprzez:
  1. Ustanowienie hipoteki przymusowej do kwoty 5.000.000 PLN na nieruchomości willowej podejrzanego w Suchym Lesie k. Poznania (KW nr PO1P/00142859/2).
  2. Zajęcie 100% udziałów Tomasza M. w spółce *Vortex Capital Sp. z o.o.* o wartości nominalnej 500.000 PLN.
  3. Zajęcie luksusowego samochodu Porsche 911 GT3 RS (rok prod. 2023).
`,
    reviewPrompts: `# Pytania — Status Podejrzanego i Prawo do Obrony
1. Jakie konsekwencje procesowe wywołuje odmowa składania wyjaśnień przez podejrzanego w świetle zasady *nemo se ipsum prodere tenetur*?
2. Kiedy organ prowadzący śledztwo ma obowiązek wydać postanowienie o zmianie lub uzupełnieniu zarzutów w trybie art. 314 k.p.k.?
3. Przedstaw wymogi formalne postanowienia o przedstawieniu zarzutów określone w art. 313 § 2 k.p.k. Jakie konsekwencje rodzi brak dokładnego określenia zarzucanego czynu?
4. Wyjaśnij zasady stosowania instytucji tzw. konfiskaty rozszerzonej (art. 45 § 2 k.k.) i domniemania przestępnego pochodzenia mienia sprawcy.`,
  },
  {
    id: 'crim-areszt',
    title: 'Tymczasowe Aresztowanie i Zabezpieczenie Majątkowe',
    category: 'Etap 1: Środki Przymusu',
    description:
      'Wniosek o zastosowanie środka izolacyjnego na podst. art. 249 i 258 § 2 k.p.k., posiedzenie aresztowe Sądu Rejonowego oraz hipoteka przymusowa.',
    rank: 1,
    order: 1,
    coreNotes: `# Postanowienie Sądu Rejonowego Poznań-Stare Miasto w Poznaniu
**Sygnatura akt**: III Kp 312/24  
**Data**: 24 marca 2024 r.  
**Skład**: Sędzia Sądu Rejonowego

---

## 1. Rozstrzygnięcie w Przedmiocie Środka Zapobiegawczego
Sąd po rozpoznaniu na posiedzeniu jawnym z wyłączeniem jawności wniosku Prokuratora Prokuratury Okręgowej w Poznaniu:
1. Na podstawie art. 249 § 1, art. 250 § 1 i 2, art. 258 § 1 pkt 2 oraz § 2 k.p.k. **zastosować wobec podejrzanego Tomasza M. środek zapobiegawczy w postaci tymczasowego aresztowania na okres 3 (trzech) miesięcy**, tj. do dnia 22 czerwca 2024 roku, godz. 06:15.
2. Zastrzec, że tymczasowe aresztowanie ulegnie zmianie na poręczenie majątkowe w kwocie **2.500.000 PLN** pod warunkiem wpłacenia wskazanej kwoty w terminie 14 dni na rachunek depozytowy Sądu (art. 257 § 2 k.p.k.) — *wniosek prokuratora o brak klauzuli warunkowej oddalono*.

## 2. Uzasadnienie Sądu
- **Przesłanka ogólna (art. 249 § 1 k.p.k.)**: Zabezpieczony materiał dowodowy w postaci protokołów zeznań pokrzywdzonych oraz dokumentacji bankowej stwarza duże prawdopodobieństwo, że podejrzany popełnił zarzucane mu czyny.
- **Przesłanki szczególne (art. 258 § 1 i 2 k.p.k.)**:
  - Zagrożenie surową karą pozbawienia wolności (górna granica ustawowego zagrożenia wynosi 10 lat, a w warunkach art. 299 § 5 k.k. do 12 lat).
  - Uzasadniona obawa matactwa procesowego: podejrzany posiadał dostęp do zagranicznych rachunków, narzędzi kryptograficznych oraz podmiotów w jurysdykcjach nieprowadzących wymiany informacji podatkowych.

## 3. Postanowienie o Zabezpieczeniu Majątkowym (art. 291 k.p.k.)
Prokurator wydał postanowienie o zabezpieczeniu wykonania przyszłej kary grzywny, przepadku korzyści oraz obowiązku naprawienia szkody poprzez ustanowienie hipoteki przymusowej do kwoty 6.000.000 PLN na nieruchomości willowej podejrzanego w podpoznańskim Suchym Lesie oraz zajęcie 3 samochodów luksusowych (Porsche 911 GT3, Mercedes-AMG G63).
## 3. Przesłanki Zastosowania Tymczasowego Aresztowania (art. 249 i 258 k.p.k.)
- **Przesłanka Ogólna (art. 249 § 1 k.p.k.)**: Duże prawdopodobieństwo popełnienia przestępstwa wykazane zeznaniami świadków, wyciągami bankowymi i zrzutami pamięci RAM z laptopa podejrzanego.
- **Przesłanki Szczególne (art. 258 k.p.k.)**:
  - Uzasadniona obawa ucieczki lub ukrycia się (art. 258 § 1 pkt 1 k.p.k.) — podejrzany posiadał ważny paszport ZEA oraz bilety lotnicze do Dubaju na dzień 24 marca 2024 r.
  - Uzasadniona obawa matactwa (art. 258 § 1 pkt 2 k.p.k.) — próba usunięcia kopii zapasowych w chmurze AWS tuż przed wejściem funkcjonariuszy CBZC.
  - Grożąca surowa kara (art. 258 § 2 k.p.k.) — przestępstwo z art. 299 § 5 k.k. zagrożone jest karą do 10 lat pozbawienia wolności, a z art. 294 § 1 k.k. do lat 10.

## 4. Postanowienie Sądu Rejonowego Poznań-Stare Miasto w Poznaniu
- Sygnatura akt: **III Kp 312/24**, Dnia 24 marca 2024 r.
- Sąd zastosował tymczasowe aresztowanie wobec Tomasza M. na okres 3 miesięcy, tj. do dnia 22 czerwca 2024 r., zastrzegając osadzenie w Areszcie Śledczym w Poznaniu przy ul. Młyńskiej.
- Sąd uznał, że żaden środek o charakterze wolnościowym (poręczenie majątkowe, dozór Policji, zakaz opuszczania kraju) nie zabezpieczy prawidłowego toku śledztwa w fazie weryfikacji powiązań zagranicznych.
`,
    reviewPrompts: `# Środki Zapobiegawcze — Praktyka Sądowa
1. W jakim terminie i do jakiego sądu przysługuje zażalenie na postanowienie sądu rejonowego o zastosowaniu tymczasowego aresztowania?
2. Jakie przesłanki muszą być spełnione, aby sąd mógł orzec tzw. areszt warunkowy na podstawie art. 257 § 2 k.p.k.?
3. Scharakteryzuj zasadę proporcjonalności i minimalizacji środków przymusu procesowego określoną w art. 257 § 1 k.p.k. (dyrektywa preferowania środków wolnościowych).
4. W jakim terminie i do jakiego organu przysługuje zażalenie na postanowienie sądu rejonowego o zastosowaniu tymczasowego aresztowania i czy wniesienie zażalenia wstrzymuje wykonanie orzeczenia?`,
  },

  // Etap 2 (rank: 2)
  {
    id: 'crim-opinia-it',
    title: 'Dowód z Opinii Biegłego z Informatyki Śledczej',
    category: 'Etap 2: Dowody w Śledztwie',
    description:
      'Kluczowy dowód: analiza zabezpieczonej macierzy i pamięci RAM, odzyskanie korespondencji Signal/Telegram, rekonstrukcja transakcji blockchain.',
    rank: 2,
    order: 0,
    coreNotes: `# Opinia Sądowa Biegłego z Zakresu Informatyki Śledczej i Analizy Blockchain
**Biegły**: dr inż. Krzysztof W., biegły sądowy przy Sądzie Okręgowym w Poznaniu  
**Podstawa powołania**: Postanowienie Prokuratora Prokuratury Okręgowej z dnia 25 marca 2024 r.

---

## 1. Przedmiot Badań i Metodologia
- Analiza binarnego obrazu dysków zabezpieczonych w spółce *Vortex Capital* (obrazy E01 wykonane z weryfikacją sum kontrolnych SHA-256).
- Analiza zrzutu pamięci ulotnej RAM laptopa MacBook Pro.
- Śledzenie przepływów na łańcuchu bloków (On-Chain Forensics) przy użyciu narzędzi Chainalysis Reactor i Elliptic.

## 2. Ustalenia Biegłego (Kluczowe Wnioski)
1. **Brak faktycznego algorytmu tradingowego**: W zbadanym repozytorium kodu odnaleziono jedynie prosty skrypt w Pythonie generujący losowe wykresy świecowe w bibliotece \`matplotlib\`, które były przesyłane inwestorom na pulpicie klienta jako rzekome „zyski z arbitrażu”. Żadne transakcje giełdowe na rynkach kontraktów futures nie były zawierane.
2. **Mechanizm piramidy finansowej (schemat Ponziego)**: Wypłaty zysków dla pierwszych 6 inwestorów były w 100% finansowane z bezpośrednich wpłat nowych klientów pozyskanych w IV kwartale 2023 r.
3. **Analiza portfeli krypto**: Zidentyfikowano 12 adresów portfeli Ethereum i Tron kontrolowanych przez Tomasza M., na które przelano równowartość **2.850.000 USDT**, a następnie przepuszczono przez mikser kryptowalutowy Tornado Cash. Biegłemu udało się zdeszyfrować klucze prywatne z odnalezionego w pamięci RAM pliku zrzutu schowka.
## 3. Metodologia Badań Informatyki Śledczej
- Biegły sądowy z listy Prezesa Sądu Okręgowego w Poznaniu przeprowadził analizę zgodnie z normami ISO/IEC 27037 (Guidelines for identification, collection, acquisition and preservation of digital evidence).
- Środowisko badawcze: SANS SIFT Workstation, Autopsy Forensic Browser, Volatility 3, Ghidra (deasemblacja oprogramowania giełdowego).
- Badanie transakcji kryptograficznych: Analiza klastrów adresowych narzędziem Chainalysis Reactor. Wykazano, że 3.200.000 USDT przelano przez mikser kryptowalutowy Tornado Cash, a następnie przetransferowano na prywatny adres sprzętowy odnaleziony w portfelu Ledger Nano X oskarżonego.

## 4. Ostateczne Konkluzje Biegłego
1. Kod źródłowy rzekomego bota *ArbitrageAI Pro* odnaleziony na macierzy NAS składał się z zaledwie 350 linii prostego skryptu generującego losowe liczby w interfejsie webowym użytkownika (\`Math.random()\`), imitujące fikcyjne transakcje na giełdach.
2. W systemie nie znaleziono żadnych mechanizmów integracji z rzeczywistymi API giełd kryptowalutowych (brak kluczy API, brak zapytań HTTP do Binance/Coinbase w logach sieciowych routera).
3. Hipoteza obrony o zewnętrznym ataku hakerskim została całkowicie wykluczona na podstawie braku jakichkolwiek anomalii w logach systemowych jądra (\`auth.log\`, \`syslog\`) oraz nienaruszonej sumy kontrolnej baz danych.
`,
    reviewPrompts: `# Dowód z Opinii Biegłego w Postępowaniu Karnym
1. W jakich przypadkach opinia biegłego jest uznawana za niepełną lub niejasną w rozumieniu art. 201 k.p.k. i jakie działania może podjąć obrona?
2. Czy wydruki z komercyjnych narzędzi analitycznych blockchain (np. Chainalysis) mogą stanowić samodzielny dokument prywatny czy wymagają weryfikacji w trybie opinii biegłego?
3. Jakie warunki formalne musi spełniać opinia biegłego, aby nie została uznana za niepełną lub niejasną w rozumieniu art. 201 k.p.k.?
4. W jakich sytuacjach organ procesowy jest zobowiązany do powołania innego biegłego lub zażądania opinii uzupełniającej?`,
  },
  {
    id: 'crim-opinia-fin',
    title: 'Dowód z Opinii Biegłego Rewidenta ds. Finansów',
    category: 'Etap 2: Dowody w Śledztwie',
    description:
      'Rekonstrukcja ksiąg rachunkowych, fałszywe faktury za usługi niematerialne, ustalenie dokładnej kwoty uszczuplenia i szkody majątkowej.',
    rank: 2,
    order: 1,
    coreNotes: `# Opinia Biegłego z Zakresu Rachunkowości, Finansów i Podatków
**Biegła**: mgr Maria S., Biegły Rewident  
**Zakres**: Zbadanie prawidłowości rozliczeń finansowych spółki *Vortex Capital Sp. z o.o.* w latach 2023–2024.

---

## 1. Ustalenia Rachunkowo-Finansowe
- **Puste Faktury**: W księgach ujawniono 34 faktury na łączną kwotę **4.200.000 PLN** wystawione przez podmioty cypryjskie za rzekome „licencje na oprogramowanie wysokich częstotliwości (HFT)”. Podmioty te nie zatrudniały żadnych pracowników, a ich rachunki były obsługiwane z tego samego adresu IP w Poznaniu, z którego logował się Tomasz M.
- **Rzeczywista wielkość szkody**: Łączna kwota wpłat od 48 pokrzywdzonych wyniosła 14.850.000 PLN. Zwrotowi w formie rzekomych dywidend uległa kwota 1.820.000 PLN.
- **Rzeczywista szkoda majątkowa pokrzywdzonych**: **13.030.000 PLN**.
- **Wartość korzyści majątkowej osiągniętej z przestępstwa (art. 45 § 1 k.k.)**: Biegła ustaliła, że oskarżony Tomasz M. przetransferował na własne cele konsumpcyjne kwotę co najmniej 7.400.000 PLN.
## 3. Metodologia Badania Przepływów Kapitałowych
- Biegły rewident przeprowadził analizę kryminalistyczną ksiąg rachunkowych i 12 rachunków bankowych powiązanych z oskarżonym.
- Rekonstrukcja strumieni finansowych wykazała:
  - 48 inwestorów wpłaciło łączną kwotę **14.850.000 PLN**.
  - Wypłacono rzekome "zyski z arbitrażu" w łącznej kwocie **1.820.000 PLN** dla pierwszych 9 inwestorów, co posłużyło jako uwiarygodnienie schematu w celach marketingowych.
  - Koszty operacyjne (reklama, wynajem luksusowego biura): **1.200.000 PLN**.
  - Wypłaty bezpośrednie i transfery zagraniczne na rzecz Tomasza M. i powiązanych cypryjskich wehikułów: **11.830.000 PLN**.

## 4. Kwalifikacja Schematu jako Klasycznej Piramidy Finansowej (Ponzi Scheme)
- Biegły stwierdził w konkluzji: Spółka nie generowała żadnych przychodów operacyjnych z działalności lokacyjnej ani handlu papierami wartościowymi czy walutami. Jedynym źródłem środków na wypłaty dla wcześniejszych klientów były wpłaty dokonywane przez kolejnych inwestorów.
`,
    reviewPrompts: `# Kwestie Szkody w Przestępstwach Przeciwko Mieniu
1. Zdefiniuj pojęcie mienia znacznej wartości (art. 115 § 5 k.k.) oraz mienia o wielkiej wartości (art. 115 § 6 k.k.).
2. Jakie przesłanki decydują o zastosowaniu art. 45 § 1 k.k. dotyczącego obligatoryjnego przepadku korzyści majątkowej osiągniętej z przestępstwa?
3. Wyjaśnij różnicę dowodową pomiędzy opinią prywatną zleconą przez obrońcę a opinią biegłego powołanego postanowieniem organu procesowego (art. 393 § 3 k.p.k.).
4. W jaki sposób biegły rewident kalkuluje rzeczywistą szkodę majątkową w przestępstwach gospodarczych w rozumieniu art. 46 § 1 k.k.?`,
  },

  // Etap 3 (rank: 3)
  {
    id: 'crim-akt-oskarzenia',
    title: 'Akt Oskarżenia do Sądu Okręgowego w Poznaniu',
    category: 'Etap 3: Akt Oskarżenia',
    description:
      'Zamknięcie śledztwa (art. 321 k.p.k.), sporządzenie i skierowanie aktu oskarżenia do III Wydziału Karnego Sądu Okręgowego w Poznaniu.',
    rank: 3,
    order: 0,
    coreNotes: `# Akt Oskarżenia (art. 332 k.p.k.)
**Sąd właściwy**: Sąd Okręgowy w Poznaniu — III Wydział Karny  
**Sygnatura prokuratorska**: PO II Ds 142/2024  
**Data**: 28 czerwca 2024 r.

---

## 1. Komparycja Aktu Oskarżenia
Prokurator Prokuratury Okręgowej w Poznaniu oskarża:
**Tomasza M.**, urodzonego 14 września 1982 r. w Poznaniu, syna Andrzeja i Haliny, obywatela polskiego, o wykształceniu wyższym informatycznym, uprzednio niekaranego, tymczasowo aresztowanego w Areszcie Śledczym w Poznaniu:

O to, że:
W okresie od 12 stycznia 2023 r. do 28 lutego 2024 r. w Poznaniu, działając w krótkich odstępach czasu w wykonaniu z góry powziętego zamiaru, w celu osiągnięcia korzyści majątkowej, jako prezes zarządu Vortex Capital Sp. z o.o., doprowadził 48 osób do niekorzystnego rozporządzenia mieniem w łącznej kwocie 13.030.000 PLN stanowiącym mienie o wielkiej wartości, wprowadzając ich w błąd poprzez oferowanie nieistniejących inwestycji w fundusz arbitrażowy kryptowalut, a następnie podjął czynności mające na celu udaremnienie i znaczne utrudnienie stwierdzenia przestępnego pochodzenia tych środków poprzez transfer na zagraniczne rachunki i miksery kryptowalut,
**tj. o przestępstwo z art. 286 § 1 k.k. w zw. z art. 294 § 1 k.k. i art. 299 § 1 i 5 k.k. w zw. z art. 11 § 2 k.k. w zw. z art. 12 § 1 k.k.**

## 2. Wnioski Dowodowe Oskarżyciela Publicznego
1. Wezwanie i bezpośrednie przesłuchanie na rozprawie oskarżonego oraz 12 kluczowych świadków (pokrzywdzonych i pracowników biura).
2. Odczytanie w trybie art. 391 § 1 k.p.k. zeznań pozostałych 36 świadków pokrzywdzonych.
3. Bezpośrednie przesłuchanie na rozprawie biegłego ds. informatyki śledczej oraz biegłej rewident.
4. Ujawnienie bez odczytywania protokołów przeszukań, wydruków transakcji bankowych i opinii pisemnych (art. 394 k.p.k.).
## 3. Elementy Konstrukcyjne Aktu Oskarżenia (art. 332 i 333 k.p.k.)
- **Dane personalne oskarżonego**: Tomasz M., uprzednio niekarany, wykształcenie wyższe informatyczne.
- **Opis zarzucanych przestępstw z podaniem czasu, miejsca, sposobu i okoliczności ich popełnienia oraz skutków**:
  - Zarzut I: Oszustwo w stosunku do mienia znacznej wartości na szkodę 48 osób (art. 286 § 1 k.k. w zw. z art. 294 § 1 k.k. w zw. z art. 12 § 1 k.k.).
  - Zarzut II: Pranie brudnych pieniędzy w porozumieniu z innymi osobami z osiągnięciem znacznej korzyści majątkowej (art. 299 § 1 i 5 k.k.).
- **Wskazanie sądu właściwego do rozpoznania sprawy**: Sąd Okręgowy w Poznaniu — jako sąd I instancji właściwy rzeczowo na podstawie art. 25 § 1 pkt 2 k.p.k. (zbrodnie i występki z art. 294 k.k. i art. 299 § 5 k.k.).
- **Wykaz dowodów do przeprowadzenia na rozprawie**: 48 świadków-pokrzywdzonych, 2 biegłych, 64 tomy akt dokumentacji bankowej i protokołów oględzin.
`,
    reviewPrompts: `# Czynności Wstępne Sądu po Wpłynięciu Aktu Oskarżenia
1. W jakich przypadkach prezes sądu lub przewodniczący wydziału kieruje sprawę na posiedzenie w trybie art. 339 k.p.k. (np. zwrot sprawy prokuratorowi w celu uzupełnienia śledztwa)?
2. Jakie wymogi formalne musi spełniać odpowiedź obrońcy na akt oskarżenia?
3. Przedstaw uprawnienia pokrzywdzonego w fazie wniesienia aktu oskarżenia, w szczególności termin i tryb zgłoszenia oświadczenia o działaniu w charakterze oskarżyciela posiłkowego (art. 54 § 1 k.p.k.).
4. Wyjaśnij instytucję posiedzenia wstępnego w postępowaniu karnym (art. 349 k.p.k.) i jego cele organizacyjne.`,
  },

  // Etap 4 (rank: 4)
  {
    id: 'crim-rozprawa1',
    title: 'Rozprawa Główna: Otwarcie Przewodu i Wyjaśnienia',
    category: 'Etap 4: Przewód Sądowy',
    description:
      'Rozpoczęcie przewodu sądowego (art. 385 k.p.k.), odczytanie aktu oskarżenia, wyjaśnienia oskarżonego i wniosek o status małego świadka koronnego.',
    rank: 4,
    order: 0,
    coreNotes: `# Protokół Rozprawy Głównej przed Sądem Okręgowym w Poznaniu
**Sygnatura akt**: III K 189/24  
**Data**: 10 września 2024 r., sala 114 Sądu Okręgowego w Poznaniu  
**Skład**: Przewodniczący — Sędzia SO (spr.), Sędzia SO, 3 Ławników  
**Strony**: Prokurator PO w Poznaniu, Oskarżony Tomasz M. (doprowadzony z AŚ), Obrońca adw. Janusz K., Pełnomocnik oskarżycieli posiłkowych adw. Marta B.

---

## 1. Otwarcie Przewodu Sądowego
- Przewodniczący sprawdził obecność stron i świadków.
- Prokurator odczytał akt oskarżenia.
- Przewodniczący pouczył oskarżonego o prawie do składania wyjaśnień, odmowy składania wyjaśnień lub odpowiedzi na pytania.

## 2. Wyjaśnienia Oskarżonego Tomasza M.
Oskarżony oświadczył:  
*„Przyznaję się jedynie częściowo do zarzucanego mi czynu, to jest przyznaję, że projekt inwestycyjny poniósł klapę techniczną i nie byłem w stanie zrealizować obiecanych zysków, jednakże kategorycznie zaprzeczam, abym od początku działał z zamiarem oszukania inwestorów (*animus decipiendi*). Chciałem stworzyć przełomowy algorytm, ale padłem ofiarą szantażu ze strony grupy przestępczej z Ukrainy, która wymusiła transfer środków do Tornado Cash. Chcę ujawnić dane tych osób i złożyć wniosek o nadzwyczajne złagodzenie kary na podstawie art. 60 § 3 k.k.”*

Obrońca oskarżonego złożył wniosek o uchylenie tymczasowego aresztowania z uwagi na wolę współpracy oskarżonego. Sąd wniosek oddalił z uwagi na brak weryfikacji twierdzeń oskarżonego.
## 3. Otwarcie Przewodu Sądowego i Stanowisko Oskarżonego
- Przewodniczący składu sędziowskiego zarządził wprowadzenie oskarżonego z aresztu śledczego w asyście policji sądowej.
- Prokurator odczytał zwięzły akt oskarżenia.
- Pouczenie oskarżonego przez Przewodniczącego o przysługujących mu prawach, w tym prawie do odmowy odpowiedzi na poszczególne pytania bez podawania przyczyn (art. 386 § 1 k.p.k.).
- Oskarżony podtrzymał swoje dotychczasowe wyjaśnienia ze śledztwa, odmawiając odpowiedzi na pytania prokuratora i pełnomocników oskarżycieli posiłkowych, zgadzając się odpowiadać wyłącznie na pytania swojego obrońcy.
`,
    reviewPrompts: `# Przewód Sądowy — Instytucje Prawne
1. Jakie warunki muszą być kumulatywnie spełnione, aby sprawca mógł skorzystać z obligatoryjnego nadzwyczajnego złagodzenia kary przewidzianego w art. 60 § 3 k.k. (*mały świadek koronny*)?
3. W jakich przypadkach dopuszczalne jest odczytanie na rozprawie głównej protokołów wcześniej złożonych wyjaśnień oskarżonego (art. 389 k.p.k.)?
4. Wyjaśnij zasady jawności rozprawy głównej w procesie karnym oraz podstawy do wyłączenia jawności w całości lub w części (art. 359 i 360 k.p.k.).`,
  },
  {
    id: 'crim-rozprawa2',
    title: 'Rozprawa Główna: Przesłuchanie Świadków i Biegłych',
    category: 'Etap 4: Przewód Sądowy',
    description:
      'Konfrontacja biegłego IT z prywatną ekspertyzą obrony, zeznania pokrzywdzonych oraz oddalenie spóźnionych wniosków dowodowych.',
    rank: 4,
    order: 1,
    coreNotes: `# Protokół Rozprawy Głównej — Postępowanie Dowodowe
**Data**: 15 października 2024 r.  
**Sąd Okręgowy w Poznaniu, Wydział III Karny**

---

## 1. Przesłuchanie Biegłego ds. Informatyki Śledczej
Biegły dr inż. Krzysztof W. podtrzymał w całości opinię pisemną i złożył ustną opinię uzupełniającą:
- Na pytanie obrońcy dotyczące rzekomego ataku hakerskiego i szantażu:  
  *„Przeanalizowałem szczegółowo logi dostępowe serwerów. Żadne połączenia z podejrzanych adresów IP nie miały miejsca. Wszystkie transfery kryptowalut do Tornado Cash zostały zainicjowane z prywatnego adresu IP oskarżonego w Suchym Lesie, przy użyciu klucza sprzętowego Ledger zabezpieczonego kodem PIN znanym wyłącznie oskarżonemu. Twierdzenia o szantażu są technicznie niewiarygodne.”*

## 2. Postanowienie Sądu w Przedmiocie Wniosków Dowodowych
Obrońca oskarżonego złożył wniosek o powołanie nowego zespołu biegłych z zagranicy.
Sąd na podstawie art. 170 § 1 pkt 5 k.p.k. postanowił **oddalić wniosek dowodowy obrońcy**, uznając, że w sposób oczywisty zmierza on do przedłużenia postępowania, a opinia dotychczasowa jest jasna, pełna i niesprzeczna.
## 3. Przebieg Postępowania Dowodowego Przed Sądem Okręgowym
- Przesłuchanie kluczowych pokrzywdzonych: Inwestor A.K. zeznał, że został wprowadzony w błąd przez profesjonalnie wyglądającą platformę oraz zapewnienia o gwarantowanym zwrocie z kapitału na poziomie 18% w skali roku bez ryzyka rynkowego.
- Konfrontacja biegłego ds. informatyki śledczej z prywatną opinią przedstawioną przez obrońcę: Biegły sądowy obalił twierdzenia obrony, wykazując matematycznie, że skrypt symulacyjny nie mógł przeprowadzić żadnej transakcji w protokole FIX/REST z uwagi na brak poprawnych nagłówków uwierzytelniających.
- Sąd oddalił wniosek dowodowy obrońcy o powołanie kolejnego biegłego z art. 170 § 1 pkt 5 k.p.k. jako zmierzający w sposób oczywisty do przedłużenia postępowania.
`,
    reviewPrompts: `# Dowody w Postępowaniu Karnym
1. Wskaż podstawy oddalenia wniosku dowodowego wymienione w art. 170 § 1 k.p.k. i wyjaśnij pojęcie prekluzji dowodowej w procesie karnym.
3. Przedstaw podstawy oddalenia wniosku dowodowego określone w art. 170 § 1 k.p.k. i wyjaśnij przesłankę zmierzania w sposób oczywisty do przedłużenia postępowania (pkt 5).
4. Jakie rygory procesowe wiążą się z konfrontacją osób przesłuchiwanych (art. 172 k.p.k.)?`,
  },
  {
    id: 'crim-glosy-stron',
    title: 'Zamknięcie Przewodu Sądowego i Głosy Stron',
    category: 'Etap 4: Przewód Sądowy',
    description:
      'Głosy stron (art. 406 k.p.k.): mowa prokuratora (wniosek o 8 lat pozbawienia wolności), pełnomocnika i mowa obrońcy.',
    rank: 4,
    order: 2,
    coreNotes: `# Przebieg Końcowy Rozprawy — Mowy Końcowe (art. 405 i 406 k.p.k.)

**Data**: 12 listopada 2024 r.  
Przewodniczący składu ogłosił zamknięcie przewodu sądowego i udzielił głosu stronom.

---

## 1. Mowa Prokuratora Prokuratury Okręgowej
Prokurator wniósł o:
1. Uznanie Tomasza M. za winnego zarzucanego mu czynu z art. 286 § 1 k.k. w zw. z art. 294 § 1 k.k. i art. 299 § 1 i 5 k.k.
2. Wymierzenie kary łącznej **8 (ośmiu) lat pozbawienia wolności** oraz kary grzywny w wymiarze 500 stawek dziennych po 500 PLN każda (250.000 PLN).
3. Orzeczenie przepadku korzyści majątkowej osiągniętej z przestępstwa w kwocie **7.400.000 PLN** (art. 45 § 1 k.k.).
4. Orzeczenie obowiązku naprawienia szkody na rzecz 48 pokrzywdzonych w łącznej kwocie 13.030.000 PLN (art. 46 § 1 k.k.).

## 2. Mowa Obrońcy Oskarżonego
Obrońca adw. Janusz K. wniósł o uniewinnienie oskarżonego, podnosząc brak zamiaru bezpośredniego (*dolus directus*) w chwili zawierania umów, a alternatywnie o zmianę kwalifikacji na przestępstwo z art. 296 k.k. (niegospodarność) i orzeczenie kary z warunkowym zawieszeniem jej wykonania.

## 3. Ostatnie Słowo Oskarżonego
Oskarżony oświadczył: *„Przepraszam inwestorów za zaistniałą sytuację. Nigdy nie chciałem nikogo skrzywdzić. Proszę o łagodny wymiar kary.”*
## 4. Argumentacja Stron Procesowych
- **Prokurator**: Wskazał na wysoki stopień społecznej szkodliwości czynu, bezwzględne wykorzystanie zaufania obywateli, wielomilionowe straty materialne doprowadzające niektórych pokrzywdzonych do ruiny finansowej oraz premedytację i kamuflaż za pomocą jurysdykcji rajów podatkowych.
- **Pełnomocnik Oskarżycieli Posiłkowych**: Poparł wnioski prokuratora, podkreślając konieczność bezwzględnego orzeczenia obowiązku naprawienia szkody (art. 46 § 1 k.k.) z rygorem natychmiastowej wykonalności.
- **Obrońca**: Podnosił naruszenie zasady domniemania niewinności (*in dubio pro reo* z art. 5 § 2 k.p.k.), wskazując na ryzyko inwestycyjne wpisane w rynek kryptoaktywów i brak bezpośrednich dowodów na to, że oskarżony planował defraudację od pierwszego dnia działalności.
`,
    reviewPrompts: `# Mowy Końcowe w Procesie Karnym
1. W jakiej kolejności przewodniczący udziela głosu stronom w myśl art. 406 § 1 k.p.k. i jakie znaczenie procesowe ma prawo do ostatniego słowa oskarżonego?
3. Jakie znaczenie procesowe ma kolejność zabierania głosu przez strony w art. 406 § 1 k.p.k. i dlaczego obrońca oraz oskarżony zawsze przemawiają na końcu?
4. Czy sąd może ograniczyć czas wystąpienia stron w mowach końcowych?`,
  },

  // Etap 5 (rank: 5)
  {
    id: 'crim-wyrok-so',
    title: 'Wyrok Sądu Okręgowego z Pisemnym Uzasadnieniem',
    category: 'Etap 5: Wyrok i Apelacja',
    description:
      'Wyrok skazujący: 6 lat pozbawienia wolności, grzywna, naprawienie szkody (art. 46 k.k.) i przepadek korzyści na rzecz Skarbu Państwa.',
    rank: 5,
    order: 0,
    coreNotes: `# Wyrok w Imieniu Rzeczypospolitej Polskiej
**Sygnatura akt**: III K 189/24  
**Sąd Okręgowy w Poznaniu — III Wydział Karny**  
**Dnia**: 26 listopada 2024 r.

---

## 1. Sentencja Wyroku
Sąd Okręgowy w Poznaniu po rozpoznaniu sprawy Tomasza M.:
1. **Uznaje oskarżonego Tomasza M. za winnego** popełnienia zarzucanego mu czynu z art. 286 § 1 k.k. w zw. z art. 294 § 1 k.k. i art. 299 § 1 i 5 k.k. w zw. z art. 11 § 2 k.k. w zw. z art. 12 § 1 k.k. i za to na podstawie art. 299 § 5 k.k. w zw. z art. 11 § 3 k.k. wymierza mu **karę 6 (sześciu) lat pozbawienia wolności** oraz 400 stawek dziennych grzywny po 300 PLN każda.
2. Na podstawie art. 46 § 1 k.k. nakłada na oskarżonego **obowiązek naprawienia szkody w całości** poprzez zapłatę solidarnie na rzecz 48 pokrzywdzonych kwoty 13.030.000 PLN.
3. Na podstawie art. 45 § 1 k.k. orzeka **przepadek na rzecz Skarbu Państwa równowartości korzyści majątkowej** osiągniętej z przestępstwa w kwocie 7.400.000 PLN.
4. Na podstawie art. 63 § 1 k.k. zalicza oskarżonemu na poczet orzeczonej kary okres rzeczywistego pozbawienia wolności od dnia 22 marca 2024 r.

## 2. Główne Motywy Pisemnego Uzasadnienia (art. 424 k.p.k.)
- Sąd ustalił, że sprawca od samego początku nie posiadał zaplecza technicznego ani algorytmicznego, a mechanizm wpłat i wypłat miał charakter klasycznej piramidy finansowej.
- Zamiar bezpośredni kierunkowy (*dolus directus coloratus*) wynika jednoznacznie z kamuflażu operacji bankowych oraz faktu posłużenia się fikcyjnymi fakturami podmiotów cypryjskich.
## 3. Motywy Prawne Wyroku Sądu Okręgowego
- Kwalifikacja prawna: Kumulatywny zbieg przepisów z art. 11 § 2 k.k.
- Sąd nie miał wątpliwości co do winy oskarżonego: "Działanie oskarżonego było w pełni zaplanowane, cyniczne i ukierunkowane na transfer pozyskanego kapitału poza granice jurysdykcji polskiej. Oszukańczy charakter procederu wynikał wprost ze struktury kodu informatycznego."
- Okoliczności obciążające: Działanie w warunkach czynu ciągłego, znaczna wartość zagarniętego mienia, wielość pokrzywdzonych, brak jakiejkolwiek próby dobrowolnego naprawienia szkody.
- Okoliczności łagodzące: Dotychczasowa niekaralność oskarżonego.
`,
    reviewPrompts: `# Wyrok i Uzasadnienie w Procesie Karnym
1. W jakim terminie strona może złożyć wniosek o sporządzenie i doręczenie uzasadnienia wyroku na piśmie (art. 422 k.p.k.) i jakie są skutki uchybienia temu terminowi?
3. Wyjaśnij zasady orzekania środka kompensacyjnego w postaci obowiązku naprawienia szkody (art. 46 § 1 k.k.) w sytuacji wielości pokrzywdzonych.
4. Czym różni się przepadek korzyści majątkowej (art. 45 k.k.) od przepadku przedmiotów służących do popełnienia przestępstwa (art. 44 k.k.)?`,
  },
  {
    id: 'crim-apelacja',
    title: 'Apelacja Obrońcy do Sądu Apelacyjnego w Poznaniu',
    category: 'Etap 5: Wyrok i Apelacja',
    description:
      'Wniesienie środka odwoławczego: zarzuty obrazy art. 7 k.p.k. (dowolna ocena dowodów), błędu w ustaleniach faktycznych i rażącej niewspółmierności kary.',
    rank: 5,
    order: 1,
    coreNotes: `# Apelacja Obrońcy Oskarżonego (art. 427 i 444 k.p.k.)
**Do**: Sąd Apelacyjny w Poznaniu — II Wydział Karny  
**Za pośrednictwem**: Sądu Okręgowego w Poznaniu  
**Wartość przedmiotu zaskarżenia**: Wyrok SO w Poznaniu z dnia 26 listopada 2024 r. (sygn. III K 189/24) w całości na korzyść oskarżonego.

---

## 1. Zarzuty Apelacyjne (art. 438 k.p.k.)
Wyrokowi zarzucam:
1. **Obrazę przepisów postępowania mającą wpływ na treść orzeczenia (art. 438 pkt 2 k.p.k.)**, a mianowicie **art. 7 k.p.k.** poprzez przekroczenie granic swobodnej oceny dowodów i przyjęcie dowolnej oceny wyjaśnień oskarżonego oraz odmowę wiarygodności jego relacji o zewnętrznym ataku teleinformatycznym;
2. **Obrazę art. 170 § 1 pkt 5 k.p.k.** poprzez bezzasadne oddalenie wniosku o opinię instytutu naukowego;
3. **Błąd w ustaleniach faktycznych przyjętych za podstawę orzeczenia (art. 438 pkt 3 k.p.k.)** polegający na bezpodstawnym przyjęciu, że oskarżony działał z zamiarem bezpośrednim oszustwa już w dacie przyjmowania pierwszych wpłat;
4. Z ostrożności procesowej — **rażącą niewspółmierność (surowość) kary (art. 438 pkt 4 k.p.k.)**.

## 2. Wnioski Apelacji
Wnoszę o:
1. Zmianę zaskarżonego wyroku i uniewinnienie oskarżonego od zarzucanych mu czynów,
2. Ewentualnie — o uchylenie wyroku i przekazanie sprawy Sądowi I instancji do ponownego rozpoznania.
## 3. Szczegółowe Rozwinięcie Zarzutów Odwoławczych
- **Zarzut Obrazy Art. 7 k.p.k.**: Obrońca wywodził, że Sąd Okręgowy ocenił wyjaśnienia oskarżonego w sposób jednostronny i dowolny, przyjmując apriorycznie wersję oskarżenia i ignorując fakt, że oskarżony osobiście padł ofiarą załamania płynności zagranicznych platform arbitrażowych.
- **Zarzut Błędu w Ustaleniach Faktycznych**: Ustalenie zamiaru bezpośredniego w oparciu o sam fakt braku zysków stanowiło niedopuszczalne domniemanie winy sprzeczne z art. 5 § 2 k.p.k.
- **Zarzut Niewspółmierności Kary**: Orzeczenie kary 6 lat pozbawienia wolności dla osoby młodocianej/uprzednio niekaranej bez uwzględnienia celów wychowawczych kary (art. 54 § 1 k.k.).
`,
    reviewPrompts: `# Postępowanie Apelacyjne w Sprawach Karnych
1. Wyjaśnij granice rozpoznania sprawy przez sąd odwoławczy w myśl art. 433 k.p.k. oraz bezwzględne przyczyny odwoławcze z art. 439 k.p.k.
3. Przedstaw konstrukcję względnych przyczyn odwoławczych z art. 438 k.p.k. i wyjaśnij, dlaczego nie można stawiać jednocześnie zarzutu obrazy prawa materialnego i błędu w ustaleniach faktycznych co do tego samego uchybienia.
4. Czym różni się apelacja w procesie karnym od skargi kasacyjnej pod względem granic kontroli instancyjnej?`,
  },
  {
    id: 'crim-wyrok-prawomocny',
    title: 'Prawomocny Wyrok Sądu Apelacyjnego i Wykonanie Kary',
    category: 'Etap 5: Wyrok i Apelacja',
    description:
      'Wyrok Sądu Apelacyjnego w Poznaniu utrzymujący w mocy orzeczenie co do winy z korektą wymiaru grzywny. Prawomocność materialna i formalna.',
    rank: 5,
    order: 2,
    coreNotes: `# Wyrok Sądu Apelacyjnego w Poznaniu — Prawomocne Zakończenie
**Sygnatura akt**: II AKa 95/25  
**Data**: 14 marca 2025 r.

---

## 1. Rozstrzygnięcie Sądu Odwoławczego
Sąd Apelacyjny w Poznaniu po rozpoznaniu apelacji obrońcy oskarżonego Tomasza M.:
1. **Zaskarżony wyrok utrzymuje w mocy** co do przypisania winy, kwalifikacji prawnej czynu, kary pozbawienia wolności (6 lat) oraz obowiązków naprawienia szkody i przepadku.
2. Zmienia zaskarżony wyrok jedynie w zakresie orzeczenia o grzywnie, obniżając stawkę dzienną do kwoty 200 PLN.
3. Zasądza od oskarżonego koszty sądowe za postępowanie odwoławcze.

## 2. Motywy Sądu Apelacyjnego
- Ocena dowodów przeprowadzona przez Sąd Okręgowy w pełni korzysta z ochrony art. 7 k.p.k., opiera się na zasadach logiki i doświadczenia życiowego oraz bezspornych ustaleniach biegłego ds. cyberprzestępczości.
- Wyrok jest **prawomocny z chwilą ogłoszenia** (res iudicata).
- Akta skierowano do Wydziału Penitencjarnego Sądu Okręgowego celem wdrożenia wykonania kary w zakładzie karnym typu półotwartego/zamkniętego oraz komorniczej egzekucji roszczeń naprawienia szkody na rzecz pokrzywdzonych.
## 3. Skutki Prawne Prawomocnego Wyroku Skazującego
- Wyrok jest prawomocny i wykonalny z chwilą ogłoszenia przez Sąd Apelacyjny.
- **Postępowanie Wykonawcze (Kodeks karny wykonawczy)**:
  - Wdrożenie wykonania kary 6 lat pozbawienia wolności w Zakładzie Karnym w Rawiczu.
  - Skierowanie wyroku z klauzulą wykonalności do komornika sądowego celem egzekucji kwoty 13.030.000 PLN z zabezpieczonych uprzednio nieruchomości i luksusowego pojazdu na rzecz pokrzywdzonych.
  - Wprowadzenie danych skazanego do Krajowego Rejestru Karnego (KRK).
`,
    reviewPrompts: `# Prawomocność i Nadzwyczajne Środki Zaskarżenia
1. W jakim terminie i na jakich podstawach stronie przysługuje skarga kasacyjna do Sądu Najwyższego (art. 519 i nast. k.p.k.)?
3. Jakie warunki formalne i materialne muszą zaistnieć, aby skazany mógł ubiegać się o warunkowe przedterminowe zwolnienie z odbycia reszty kary pozbawienia wolności (art. 77 i 78 k.k.)?
4. W jakim terminie i do kogo skazany lub Prokurator Generalny może wnieść kasację od prawomocnego wyroku sądu odwoławczego (art. 521 i 524 k.p.k.)?`,
  },
];

// ============================================================================
// CASE 2: SPRAWA CYWILNA GOSPODARCZA (KPC / KC)
// ============================================================================
export const commercialCaseEdges: SeedEdge[] = [
  // Etap 0 (Przedsądowy) -> Etap 1 (Pozew i Zabezpieczenie)
  { id: 'comm-wezw-odst', source: 'comm-wezwanie', target: 'comm-odstapienie' },
  { id: 'comm-odst-pozew', source: 'comm-odstapienie', target: 'comm-pozew' },
  { id: 'comm-pozew-zab', source: 'comm-pozew', target: 'comm-zabezpieczenie' },

  // Etap 1 -> Etap 2 (Odpowiedź na pozew i Plan Rozprawy)
  { id: 'comm-pozew-odp', source: 'comm-pozew', target: 'comm-odpowiedz' },
  { id: 'comm-odp-plan', source: 'comm-odpowiedz', target: 'comm-posiedzenie-przygot' },

  // Etap 2 -> Etap 3 (Postępowanie Dowodowe)
  { id: 'comm-plan-swiadkowie', source: 'comm-posiedzenie-przygot', target: 'comm-zeznania-swiadkow' },
  { id: 'comm-plan-biegly', source: 'comm-posiedzenie-przygot', target: 'comm-opinia-bieglego' },

  // Etap 3 -> Etap 4 (Wyrok SO)
  { id: 'comm-swiadkowie-wyrok', source: 'comm-zeznania-swiadkow', target: 'comm-wyrok-so' },
  { id: 'comm-biegly-wyrok', source: 'comm-opinia-bieglego', target: 'comm-wyrok-so' },
  { id: 'comm-wyrok-uzasadnienie', source: 'comm-wyrok-so', target: 'comm-uzasadnienie' },

  // Etap 4 -> Etap 5 (Prawomocność i Ugoda)
  { id: 'comm-uzas-ugoda', source: 'comm-uzasadnienie', target: 'comm-ugoda-apelacja' },
];

export const commercialCaseCourses: Course[] = [
  // Etap 0 (rank: 0)
  {
    id: 'comm-wezwanie',
    title: 'Przedsądowe Wezwanie do Usunięcia Wad Wdrożenia ERP',
    category: 'Etap 0: Przedsądowy',
    description:
      'Wezwanie wykonawcy do usunięcia 18 wad krytycznych systemu ERP w trybie art. 476 k.c. i wyznaczenie dodatkowego terminu pod rygorem odstąpienia.',
    rank: 0,
    order: 0,
    coreNotes: `# Przedsądowe Wezwanie do Wykonania Zobowiązania (art. 476 i 491 k.c.)

**Nadawca**: *Pol-Logistyka S.A.* z siedzibą w Poznaniu (Zamawiający)  
**Adresat**: *CloudCore Solutions Sp. z o.o.* z siedzibą w Warszawie (Wykonawca)  
**Przedmiot umowy**: Wdrożenie zintegrowanego chmurowego systemu ERP/WMS (Wartość kontraktu: 4.500.000 PLN netto)

---

## 1. Stan Faktyczny i Protokół Rozbieżności
Zgodnie z Załącznikiem nr 3 do Umowy (Harmonogram Wdrożenia), Etap II (Moduł Magazynowy WMS i Integracja z Automatyką Regałową) miał zostać oddany do odbioru końcowego do dnia 15 listopada 2023 r.
Podczas testów UAT (*User Acceptance Testing*) przeprowadzonych w centrum dystrybucyjnym w Gądkach k. Poznania stwierdzono:
- **18 wad krytycznych** (uniemożliwiających prowadzenie operacji logistycznych), w tym gubienie komunikatów skanowania kodów SSCC oraz opóźnienia synchronizacji bazy danych przekraczające 120 sekund.
- Wykonawca uchybił terminowi oddania Etapu II o 94 dni kalendarzowe.

## 2. Treść Wezwania
Zamawiający, działając na podstawie art. 491 § 1 k.c., niniejszym:
1. Wzywa Wykonawcę do **usunięcia wszystkich wyspecyfikowanych w Załączniku nr 1 wad krytycznych w nieprzekraczalnym terminie 14 dni kalendarzowych** od dnia doręczenia niniejszego pisma;
2. Zastrzega, że po bezskutecznym upływie wyznaczonego terminu Zamawiający będzie uprawniony do **odstąpienia od Umowy w części niewykonanej** oraz naliczenia kar umownych za zwłokę na podstawie § 14 ust. 2 Umowy.`,
    reviewPrompts: `# Kwestie Prawne — Nienależyte Wykonanie Zobowiązania
1. Jakie skutki prawne rodzi wyznaczenie terminu dodatkowego w trybie art. 491 § 1 k.c. i czy wyznaczony termin musi być obiektywnie „odpowiedni”?
2. Czym różni się opóźnienie zwykłe od zwłoki dłużnika (art. 476 k.c.) w kontekście rozkładu ciężaru dowodu?`,
  },
  {
    id: 'comm-odstapienie',
    title: 'Oświadczenie o Odstąpieniu i Nota Obciążeniowa',
    category: 'Etap 0: Przedsądowy',
    description:
      'Oświadczenie o częściowym odstąpieniu od umowy wdrożeniowej (art. 491 § 2 k.c.) oraz nota obciążeniowa na kwotę 2.850.000 PLN z tytułu kar umownych.',
    rank: 0,
    order: 1,
    coreNotes: `# Oświadczenie o Odstąpieniu od Umowy i Nota Księgowa

**Data**: 12 stycznia 2024 r.  
**Zamawiający**: *Pol-Logistyka S.A.*

---

## 1. Oświadczenie o Odstąpieniu od Umowy (art. 491 § 2 i art. 494 k.c.)
Wobec bezskutecznego upływu terminu wyznaczonego w wezwaniu z dnia 15 grudnia 2023 r. oraz dalszego występowania wad uniemożliwiających eksploatację systemu, Zamawiający niniejszym:
> **Odstępuje od Umowy Wdrożeniowej nr 04/IT/2022 w zakresie Etapów II, III i IV (częściowo)** z wyłącznej winy Wykonawcy.

## 2. Nota Obciążeniowa nr 01/NOT/2024
Na podstawie § 14 ust. 2 lit. b oraz ust. 4 Umowy obciąża się Wykonawcę karami umownymi:
1. **Kara za zwłokę w oddaniu Etapu II**: 94 dni zwłoki $\\times$ 0,2% wartości kontraktu netto dziennie = **846.000 PLN**.
2. **Kara umowna z tytułu odstąpienia od umowy z przyczyn leżących po stronie Wykonawcy**: 20% wartości całego kontraktu netto = **900.000 PLN**.
3. **Odszkodowanie uzupełniające na zasadach ogólnych (art. 471 k.c.)**: Koszty przestoju magazynu i wdrożenia zastępczego = **1.104.000 PLN**.
4. **Łączna kwota do zapłaty**: **2.850.000 PLN** w terminie 7 dni.
## 3. Skutki Prawne Odstąpienia od Umowy Wdrożeniowej (art. 494 k.c.)
- Odstąpienie od umowy wywołuje skutek *ex tunc* (z mocą wsteczną) co do zasady, jednak w przypadku umów o dzieło i wdrożeniowych o charakterze ciągłym/podzielnym orzecznictwo SN dopuszcza odstąpienie ze skutkiem *ex nunc* (na przyszłość) co do etapów niewykonanych (art. 491 § 2 k.c.).
- **Obowiązek Zwrotu Świadczeń Wzajemnych**: Strona, która odstępuje od umowy, obowiązana jest zwrócić drugiej stronie wszystko, co otrzymała od niej na mocy umowy.
- **Kumulacja Kar Umownych**: Zgodnie z uchwałą 7 sędziów SN z dnia 18 listopada 2019 r. (III CZP 34/19), wierzyciel nie może dochodzić jednocześnie kary umownej za zwłokę oraz kary umownej za odstąpienie od umowy, jeżeli odstąpienie nastąpiło z powodu tej samej zwłoki, chyba że umowa wprost stanowi inaczej.
`,
    reviewPrompts: `# Kary Umowne i Odstąpienie od Umowy
1. Czy dopuszczalne jest kumulatywne dochodzenie kary umownej za zwłokę oraz kary umownej za odstąpienie od umowy w świetle orzecznictwa Sądu Najwyższego?
2. Wyjaśnij konstrukcję częściowego odstąpienia od umowy o świadczenie podzielne (art. 491 § 2 k.c.).
3. Wyjaśnij zagadnienie podzielności świadczenia w umowach o wdrożenie oprogramowania (świadczenie rezultatu vs świadczenie ciągłe).
4. Jakie są konsekwencje prawne wystawienia noty obciążeniowej i czy nota stanowi wezwanie do zapłaty w rozumieniu art. 455 k.c.?`,
  },

  // Etap 1 (rank: 1)
  {
    id: 'comm-pozew',
    title: 'Pozew w Postępowaniu Gospodarczym z Wnioskiem o Zabezpieczenie',
    category: 'Etap 1: Pozew i Zabezpieczenie',
    description:
      'Pozew do Sądu Okręgowego w Poznaniu — Wydział IX Gospodarczy (art. 187 i art. 458[1] k.p.c.): rygor prekluzji dowodowej i wniosek o zajęcie konta.',
    rank: 1,
    order: 0,
    coreNotes: `# Pozew o Zapłatę w Postępowaniu Odrębnym w Sprawach Gospodarczych
**Wartość przedmiotu sporu (WPS)**: 2.850.000 PLN  
**Opłata sądowa od pozwu**: 100.000 PLN (maksymalna opłata stosunkowa wg art. 13 ust. 2 UKSC)  
**Sąd**: Sąd Okręgowy w Poznaniu — IX Wydział Gospodarczy

---

## 1. Żądania Pozwu
Powód *Pol-Logistyka S.A.* wnosi o:
1. Zasądzenie od Pozwanego *CloudCore Solutions Sp. z o.o.* kwoty **2.850.000 PLN** wraz z ustawowymi odsetkami za opóźnienie w transakcjach handlowych liczonymi od dnia 20 stycznia 2024 r. do dnia zapłaty.
2. Zasądzenie od Pozwanego na rzecz Powoda kosztów procesu, w tym kosztów zastępstwa procesowego w wysokości dwukrotności stawki minimalnej.
3. **Udzielenie zabezpieczenia roszczenia** przed wydaniem wyroku poprzez zajęcie wierzytelności z rachunków bankowych Pozwanego w Santander Bank Polska S.A. do łącznej kwoty 2.850.000 PLN.

## 2. Spełnienie Rygorów Postępowania Gospodarczego (Dział IVb KPC)
- **Umowa dowodowa**: Strony nie zawarły umowy dowodowej w rozumieniu art. 458[9] k.p.c.
- **Prekluzja dowodowa (art. 458[5] k.p.c.)**: Wszystkie twierdzenia i dowody (dokumenty, protokoły testów, korespondencja e-mail, logi serwera) zostały powołane w treści pozwu pod rygorem ich pominięcia.
- **Próba polubownego rozwiązania sporu (art. 187 § 1 pkt 3 k.p.c.)**: Przedprocesowe mediacje zakończyły się fiaskiem z uwagi na odmowę zapłaty przez pozwanego.
## 3. Rygory Odrębnego Postępowania w Sprawach Gospodarczych (Dział IVb KPC)
- **Prekluzja Dowodowa (art. 458[5] k.p.c.)**: Powód jest obowiązany powołać wszystkie twierdzenia i dowody w pozwie, a pozwany w odpowiedzi na pozew. Twierdzenia i dowody powołane z naruszeniem tego wymogu podlegają pominięciu, chyba że strona uprawdopodobni, że ich powołanie nie było możliwe albo że potrzeba ich powołania wynikła później.
- **Ograniczenie Dowodu ze Świadków (art. 458[10] k.p.c.)**: Dowód z zeznań świadków sąd może dopuścić jedynie wtedy, gdy po wyczerpaniu innych środków dowodowych lub w ich braku pozostały niewyjaśnione fakty istotne dla rozstrzygnięcia sprawy. Prymat dowodu z dokumentu!
- **Koszty Procesu w Sprawach Gospodarczych**: Ryzyko podwyższonych kosztów w razie niespełnienia wezwania polubownego.
`,
    reviewPrompts: `# Postępowanie Gospodarcze KPC
1. Jakie rygory formalne nakłada art. 458[5] k.p.c. na powoda i pozwanego w zakresie powoływania twierdzeń i dowodów?
2. Wyjaśnij wymogi dotyczące uprawdopodobnienia interesu prawnego w zabezpieczeniu roszczenia pieniężnego (art. 730[1] § 2 k.p.c.).
3. Przedstaw zasady zawierania i skutki procesowe tzw. umowy dowodowej w postępowaniu gospodarczym (art. 458[9] k.p.c.).
4. Wyjaśnij wymogi formalne pozwu gospodarczego ze szczególnym uwzględnieniem wskazania adresu e-mail i numeru NIP/KRS stron.`,
  },
  {
    id: 'comm-zabezpieczenie',
    title: 'Postanowienie Sądu o Zabezpieczeniu Roszczenia',
    category: 'Etap 1: Pozew i Zabezpieczenie',
    description:
      'Sąd Okręgowy w Poznaniu uwzględnia wniosek: zajęcie rachunku bankowego pozwanego do kwoty 1.800.000 PLN (art. 730 i 747 pkt 1 k.p.c.).',
    rank: 1,
    order: 1,
    coreNotes: `# Postanowienie Sądu Okręgowego w Poznaniu — IX Wydział Gospodarczy
**Sygnatura akt**: IX GCo 45/24  
**Data**: 14 lutego 2024 r.

---

## 1. Sentencja Postanowienia
Sąd Okręgowy w Poznaniu po rozpoznaniu na posiedzeniu niejawnym wniosku o zabezpieczenie:
1. **Udziela zabezpieczenia roszczenia** pieniężnego powoda do kwoty **1.800.000 PLN** (obejmującej roszczenie o kary umowne) poprzez zajęcie wierzytelności z rachunków bankowych pozwanego *CloudCore Solutions Sp. z o.o.* prowadzonych w Santander Bank Polska S.A.
2. W pozostałym zakresie (dotyczącym odszkodowania uzupełniającego 1.050.000 PLN) wniosek o zabezpieczenie **oddala**.

## 2. Motywy Sądu
- Powód uprawdopodobnił roszczenie o kary umowne przedstawiając umowę, protokoły testów UAT oraz wezwanie do usunięcia wad.
- Powód uprawdopodobnił interes prawny w zabezpieczeniu wykazując ze sprawozdania finansowego pozwanego z KRS spadek kapitału własnego o 60% oraz wysokie zadłużenie krótkoterminowe, co stwarza realną groźbę niewypłacalności pozwanego przed zakończeniem procesu.
## 3. Instytucja Zabezpieczenia Roszczenia Pieniężnego (art. 730 i nast. KPC)
- **Dwie Koniunkcyjne Przesłanki**:
  1. *Uprawdopodobnienie roszczenia*: Wykazanie wysokiego stopnia prawdopodobieństwa istnienia wierzytelności na płaszczyźnie faktycznej i prawnej.
  2. *Uprawdopodobnienie interesu prawnego*: Wykazanie, że brak zabezpieczenia uniemożliwi lub poważnie utrudni wykonanie zapadłego w sprawie orzeczenia lub w inny sposób uniemożliwi osiągnięcie celu postępowania.
- **Katalog Sposobów Zabezpieczenia (art. 747 k.p.c.)**: Zajęcie wierzytelności z rachunku bankowego, zajęcie ruchomości, obciążenie nieruchomości hipoteką przymusową.
- Zasada zakazu nadmierności zabezpieczenia (art. 730[1] § 3 k.p.c.) — zabezpieczenie nie może zmierzać do zaspokojenia roszczenia ani obciążać dłużnika ponad potrzebę.
`,
    reviewPrompts: `# Zabezpieczenie Roszczeń Pieniężnych
1. Jakie sposoby zabezpieczenia roszczeń pieniężnych przewiduje art. 747 k.p.c.?
2. W jakim terminie i w jakim trybie dłużnik może wnieść zażalenie na postanowienie o udzieleniu zabezpieczenia?
3. W jakim trybie i terminie dłużnik może złożyć zażalenie na postanowienie sądu o udzieleniu zabezpieczenia?
4. Kiedy postanowienie o zabezpieczeniu upada z mocy prawa (art. 744 k.p.c.)?`,
  },

  // Etap 2 (rank: 2)
  {
    id: 'comm-odpowiedz',
    title: 'Odpowiedź na Pozew z Zarzutem Potrącenia i Miarkowania Kary',
    category: 'Etap 2: Stanowisko Pozwanego',
    description:
      'Zarzut potrącenia wynagrodzenia za Etap I (art. 498 k.c.), zarzut braku współdziałania wierzyciela (art. 354 § 2 k.c.) oraz wniosek o miarkowanie kary (art. 484 § 2 k.c.).',
    rank: 2,
    order: 0,
    coreNotes: `# Odpowiedź na Pozew w Sprawie Gospodarczej
**Sygnatura akt**: IX GC 210/24  
**Pozwany**: *CloudCore Solutions Sp. z o.o.* reprezentowany przez radcę prawnego

---

## 1. Stanowisko Procesowe Pozwanego
Pozwany wnosi o:
1. **Oddalenie powództwa w całości**.
2. Zasądzenie od Powoda na rzecz Pozwanego kosztów procesu.

## 2. Główne Zarzuty Merytoryczne i Prawne
- **Zarzut braku współdziałania wierzyciela przy wykonywaniu zobowiązania (art. 354 § 2 k.c. w zw. z art. 476 k.c.)**:
  - Opóźnienie w testach integracyjnych nie wynikało z winy wykonawcy, lecz z faktu, że powód nie udostępnił w terminie środowiska testowego i specyfikacji API automatycznych wózków widłowych AGV. Dłużnik nie popadł w zwłokę, lecz w opóźnienie usprawiedliwione okolicznościami, za które odpowiedzialność ponosi wierzyciel.
- **Materialnoprawny Zarzut Potrącenia (art. 498 i 499 k.c. w zw. z art. 458[8] k.p.c.)**:
  - Pozwany przedstawia do potrącenia bezsporną wierzytelność z tytułu zaakceptowanego i odebranego bez zastrzeżeń Etapu I (Architektura bazodanowa) w kwocie **900.000 PLN netto**.
- **Wniosek o Miarkowanie Kary Umownej (art. 484 § 2 k.c.)**:
  - Z ostrożności procesowej wniesiono o radykalne miarkowanie kar umownych z uwagi na ich **rażące wygórowanie** (kara przewyższa 60% łącznej wartości zlecenia) oraz wykonanie zobowiązania w znacznej części (Etap I i moduły bazowe).
## 3. Materialnoprawny i Procesowy Zarzut Potrącenia (art. 498 k.c. i art. 458[8] k.p.c.)
- **Rygoryzacja Potrącenia w KPC (art. 458[8] k.p.c.)**: Podstawą zarzutu potrącenia może być tylko wierzytelność pozwanego z tego samego stosunku prawnego co wierzytelność dochodzona przez powoda, chyba że wierzytelność ta jest niesporna, stwierdzona prawomocnym orzeczeniem sądu lub dokumentem pochodzącym od powoda.
- **Miarkowanie Kary Umownej (art. 484 § 2 k.c.)**:
  - Dwie niezależne podstawy miarkowania:
    1. Wykonanie zobowiązania w znacznej części (etap I odebrany bez zastrzeżeń, moduł bazowy funkcjonuje).
    2. Rażące wygórowanie kary umownej (dysproporcja pomiędzy wysokością kary a szkodą poniesioną przez wierzyciela oraz wartością całego kontraktu).
`,
    reviewPrompts: `# KPC — Zarzut Potrącenia w Postępowaniu Gospodarczym
1. Jakie rygory dowodowe dotyczące dopuszczalności zarzutu potrącenia wprowadza art. 458[8] k.p.c.?
2. Jakie kryteria bierze pod uwagę sąd przy ocenie przesłanki „rażącego wygórowania kary umownej” w rozumieniu art. 484 § 2 k.c.?
3. Przedstaw różnicę pomiędzy materialnoprawnym oświadczeniem o potrąceniu (art. 499 k.c.) a procesowym zarzutem potrącenia podnoszonym przed sądem.
4. Jakie kryteria oceny stosuje Sąd Najwyższy przy ocenie rażącego wygórowania kary umownej?`,
  },
  {
    id: 'comm-posiedzenie-przygot',
    title: 'Posiedzenie Przygotowawcze i Plan Rozprawy',
    category: 'Etap 2: Plan Rozprawy',
    description:
      'Wdrożenie reformy KPC (art. 205[4] i 205[9] k.p.c.): wyznaczenie spornych kwestii, harmonogramu przesłuchania świadków i tezy dla biegłego IT.',
    rank: 2,
    order: 1,
    coreNotes: `# Posiedzenie Przygotowawcze i Plan Rozprawy (art. 205[4] – 205[11] k.p.c.)
**Sygnatura akt**: IX GC 210/24  
**Data posiedzenia**: 18 kwietnia 2024 r.  
**Sąd Okręgowy w Poznaniu — IX Wydział Gospodarczy**

---

## 1. Próba Pojednawcza
Sędzia przewodniczący nakłaniał strony do zawarcia ugody lub skierowania sprawy do mediacji. Pełnomocnicy oświadczyli, że wobec rozbieżności stanowisk co do winy za niedziałający moduł WMS ugoda na obecnym etapie nie jest możliwa.

## 2. Treść Zatwierdzonego Planu Rozprawy
1. **Kwestie sporne podlegające rozstrzygnięciu**:
   - Czy wady zgłoszone w protokole z dnia 15 listopada 2023 r. miały charakter krytyczny w rozumieniu umowy?
   - Czy przyczyny opóźnienia leżały po stronie powoda (brak API wózków AGV), czy pozwanego (błędy architektury mikroserwisów)?
   - Czy zastrzeżona kara umowna jest rażąco wygórowana?
2. **Harmonogram posiedzeń sądu**:
   - I termin: 12 czerwca 2024 r. — przesłuchanie 4 świadków (kierowników projektu z obu stron).
   - II termin: 18 września 2024 r. — ustne wyjaśnienia biegłego sądowego z dziedziny systemów ERP.
3. **Powołanie biegłego**: Dopuszczenie dowodu z opinii instytutu naukowego / biegłego z dziedziny inżynierii oprogramowania.
## 3. Instytucja Posiedzenia Przygotowawczego i Plan Rozprawy (art. 205[4]–205[11] KPC)
- **Cel**: Rozwiązanie sporu bez potrzeby prowadzenia dalszych posiedzeń, a jeśli to niemożliwe — sporządzenie wiążącego planu rozprawy.
- **Treść Planu Rozprawy (art. 205[9] k.p.c.)**:
  - Dokładne określenie przedmiotów sporu oraz stanowisk stron.
  - Wyznaczenie kolejności i terminów posiedzeń jawnych na przeprowadzenie dowodów.
  - Określenie tezy dowodowej i terminu sporządzenia opinii przez biegłego.
- **Skutek Prekluzyjny**: Po zatwierdzeniu planu rozprawy powoływanie nowych twierdzeń i dowodów jest niedopuszczalne, chyba że strona uprawdopodobni, że ich potrzeba wynikła później.
`,
    reviewPrompts: `# Instytucja Planu Rozprawy KPC
1. Jakie skutki procesowe wywołuje podpisanie i zatwierdzenie planu rozprawy dla późniejszego zgłaszania wniosków dowodowych (art. 205[12] k.p.c.)?
3. Wyjaśnij skutki niestawiennictwa powoda i pozwanego na posiedzeniu przygotowawczym w myśl art. 205[5] k.p.c.
4. W jaki sposób sąd i strony mogą dokonać zmiany zatwierdzonego planu rozprawy?`,
  },

  // Etap 3 (rank: 3)
  {
    id: 'comm-zeznania-swiadkow',
    title: 'Zeznania Świadków: Zespoły Projektowe i Jira Logs',
    category: 'Etap 3: Postępowanie Dowodowe',
    description:
      'Przesłuchanie Project Managerów w trybie art. 271[1] k.p.c. — analiza ticketów Jira, procedury Change Request i tzw. scope creep.',
    rank: 3,
    order: 0,
    coreNotes: `# Protokół z Przesłuchania Świadków na Rozprawie (art. 271 i 271[1] k.p.c.)
**Data**: 12 czerwca 2024 r.  
**Przesłuchani świadkowie**:
1. Świadek Paweł K. — Główny Architekt Systemu ERP ze strony pozwanego.
2. Świadek Anna R. — Dyrektor Operacyjny Logistyki ze strony powoda.

---

## 1. Zeznania Świadka Pawła K. (Wykonawca)
- Świadek zeznał:  
  *„Zgłoszone rzekome 'wady krytyczne' nie były błędami naszego kodu, ale wynikiem ciągłych zmian wymagań ze strony powoda (*scope creep*). Powód zgłosił ponad 80 zmian funkcjonalnych w systemie Jira bez formalnego podpisania protokołu Change Request i bez przedłużenia harmonogramu. Ponadto powód dostarczył dokumentację interfejsu automatyki regałowej dopiero 10 dni przed planowanym terminem odbioru, co fizycznie uniemożliwiało wykonanie testów obciążeniowych.”*

## 2. Zeznania Świadka Anny R. (Zamawiający)
- Świadek zeznała:  
  *„Zmiany zgłaszane w Jirze były drobnymi korektami interfejsu użytkownika dopuszczalnymi w ramach metodyki Agile. Kluczowy problem polegał na tym, że baza danych pozwanego blokowała się przy 50 równoczesnych sesjach magazynierów. Wózek widłowy musiał czekać 2 minuty na potwierdzenie odłożenia palety, co całkowicie paraliżowało wysyłkę towarów.”*
## 3. Protokół Przesłuchania Świadków z Branży IT
- Świadek P.W. (Dyrektor IT Powoda): Zeznał, że moduł magazynowy generował krytyczne błędy blokujące wydawanie towarów klientom e-commerce, a wykonawca nie reagował na zgłoszenia w systemie Jira o priorytecie Blocker.
- Świadek M.R. (Project Manager Pozwanego): Zeznał, że specyfikacja API urządzeń zewnętrznych została dostarczona z 4-miesięcznym opóźnieniem przez powoda, co wymusiło całkowite przepisanie warstwy integracyjnej, a wdrożone bazy danych cierpiały na niedobory zasobów serwerowych po stronie zamawiającego.
- Dowód z wydruków z systemu Jira: Wykazano wzajemną korespondencję i 48 zgłoszeń zmian zakresu projektu (*Scope Creep*).
`,
    reviewPrompts: `# Postępowanie Dowodowe z Zeznań Świadków
1. W jakich przypadkach dopuszczalne jest odebranie zeznań świadka na piśmie zgodnie z art. 271[1] k.p.c. i jakie są mankamenty tej formy dowodu?
3. Wyjaśnij zasady bezpośredniości przeprowadzania dowodów w procesie cywilnym (art. 235 k.p.c.) oraz dopuszczalność składania zeznań na piśmie (art. 271[1] k.p.c.).
4. Jak oceniać wiarygodność dowodów ze świadków będących pracownikami stron sporu gospodarczego w świetle art. 233 § 1 k.p.c.?`,
  },
  {
    id: 'comm-opinia-bieglego',
    title: 'Dowód z Opinii Biegłego ds. Inżynierii Oprogramowania',
    category: 'Etap 3: Postępowanie Dowodowe',
    description:
      'Kluczowy audyt kodu źródłowego w repozytorium GitLab: biegły stwierdza wady architektoniczne, ale także 30% przyczynienia zamawiającego.',
    rank: 3,
    order: 1,
    coreNotes: `# Opinia Biegłego Sądowego ds. Systemów Teleinformatycznych i Inżynierii Oprogramowania
**Biegły**: dr hab. inż. Maciej T., profesor uczelni technicznej  
**Sygnatura akt**: IX GC 210/24

---

## 1. Zakres Audytu
- Inspekcja kodu źródłowego mikroserwisów w repozytorium GitLab udostępnionym przez wykonawcę.
- Odtworzenie środowiska testowego na maszynach wirtualnych i przeprowadzenie testów wydajnościowych narzędziem Apache JMeter.
- Weryfikacja historii zgłoszeń w systemie Jira i korespondencji projektowej.

## 2. Wnioski Końcowe Biegłego
1. **Wady w kodzie wykonawcy**: Silnik WMS zawierał błędy synchronizacji współbieżnej w module rezerwacji stoków magazynowych (zjawisko *deadlock* na poziomie bazy danych PostgreSQL przy transakcjach o poziomie izolacji Serializable). Wada ta miała charakter krytyczny i leżała po stronie wykonawcy.
2. **Przyczynienie się zamawiającego**: Zamawiający uchybił obowiązkowi współdziałania (art. 354 § 2 k.c.) poprzez opóźnienie w przekazaniu dokumentacji bramek RFID i specyfikacji protokołu wózków AGV o 42 dni kalendarzowe.
3. **Ocena stopnia przyczynienia**: Biegły ocenia, że opóźnienie w 70% wynikało z wad kodu i braku należytej staranności wykonawcy w testach wydajnościowych, a w **30% było spowodowane opóźnieniami i zmianami wymagań po stronie zamawiającego**.
## 3. Metodologia Badań Biegłego Sądowego ds. IT
- Biegły przeanalizował repozytorium kodu Git, logi bazodanowe PostgreSQL i środowisko Kubernetes zamawiającego.
- Ustalenia techniczne:
  1. Architektura systemu ERP zawierała błąd synchronizacji transakcji rozproszonych w module WMS, powodujący blokady tabel (*Table Locks*) przy natężeniu ruchu powyżej 50 operacji na sekundę. Błąd leżał po stronie kodu źródłowego wykonawcy.
  2. Zamawiający opóźnił odbiór środowiska stagingowego o 38 dni kalendarzowych z przyczyn leżących po stronie działu infrastruktury powoda.
- Wniosek końcowy: Odpowiedzialność za opóźnienie wdrożenia rozkłada się w proporcji: 70% wykonawca (błędy architektury oprogramowania), 30% zamawiający (opóźnienia organizacyjne i techniczne).
`,
    reviewPrompts: `# Opinia Biegłego w Sporach IT
1. W jaki sposób sąd ocenia dowód z opinii biegłego z uwzględnieniem kryteriów poziomu wiedzy, podstaw teoretycznych i logiczności wniosków?
2. Jakie znaczenie ma pojęcie przyczynienia się poszkodowanego (art. 362 k.c.) przy ocenie roszczenia odszkodowawczego i kar umownych?
3. W jaki sposób strona procesu cywilnego może zakwestionować opinię biegłego sądowego i kiedy sąd ma obowiązek dopuścić opinię innego biegłego?
4. Jakie znaczenie ma pojęcie wiadomości specjalnych w rozumieniu art. 278 k.p.c.?`,
  },

  // Etap 4 (rank: 4)
  {
    id: 'comm-wyrok-so',
    title: 'Wyrok Sądu Okręgowego — Sądu Gospodarczego w Poznaniu',
    category: 'Etap 4: Wyrok I Instancji',
    description:
      'Częściowe uwzględnienie powództwa: miarkowanie kary o 50% na podst. art. 484 § 2 k.c. oraz potrącenie wzajemnego wynagrodzenia.',
    rank: 4,
    order: 0,
    coreNotes: `# Wyrok w Imieniu Rzeczypospolitej Polskiej
**Sygnatura akt**: IX GC 210/24  
**Sąd Okręgowy w Poznaniu — IX Wydział Gospodarczy**  
**Dnia**: 15 listopada 2024 r.

---

## 1. Sentencja Wyroku
Sąd Okręgowy w Poznaniu po rozpoznaniu sprawy z powództwa *Pol-Logistyka S.A.* przeciwko *CloudCore Solutions Sp. z o.o.* o zapłatę 2.850.000 PLN:
1. **Zasądza od pozwanego na rzecz powoda kwotę 473.000 PLN** (czterysta siedemdziesiąt trzy tysiące złotych) wraz z odsetkami ustawowymi za opóźnienie w transakcjach handlowych od dnia 20 stycznia 2024 r. do dnia zapłaty.
2. W pozostałym zakresie powództwo **oddala**.
3. Koszty procesu stosunkowo rozdziela (art. 100 k.p.c.), obciążając powoda w 80%, a pozwanego w 20%.

## 2. Matematyczna Rekonstrukcja Wyroku przez Sąd
- **Naliczone kary umowne**: 846.000 PLN (za zwłokę) + 900.000 PLN (za odstąpienie) = 1.746.000 PLN.
- **Miarkowanie na podst. art. 484 § 2 k.c.**: Sąd zmiarkował kary umowne o **50%** ze względu na rażące wygórowanie oraz 30% przyczynienie powoda $\\to$ należna kara wynosi **873.000 PLN**.
- **Roszczenie odszkodowawcze na zasadach ogólnych (1.104.000 PLN)**: Sąd oddalił w całości jako nieudowodnione co do wysokości rzeczywistej szkody (*damnum emergens*) i związku przyczynowego.
- **Uwzględnienie zarzutu potrącenia (art. 498 k.c.)**: Pozwanemu przysługiwało niesporne wynagrodzenie za Etap I w kwocie 400.000 PLN netto (częściowo zafakturowane).
- **Kwota zasądzona**: 873.000 PLN - 400.000 PLN = **473.000 PLN**.
## 3. Rozstrzygnięcie Sądu Gospodarczego w Poznaniu
- Sąd Okręgowy w Poznaniu uznał powództwo za częściowo uzasadnione:
  - Uwzględnił zarzut miarkowania kary umownej na podstawie art. 484 § 2 k.c. z kwoty 1.746.000 PLN do kwoty **873.000 PLN** (obniżenie o 50% ze względu na częściowe wykonanie kontraktu i przyczynienie się zamawiającego).
  - Uwzględnił zarzut potrącenia zgłoszony przez pozwanego do kwoty **450.000 PLN** (50% wynagrodzenia za etap I proporcjonalnie do jego przydatności).
  - Zasądził od pozwanego na rzecz powoda kwotę **423.000 PLN** z odsetkami ustawowymi za opóźnienie w transakcjach handlowych, oddalając powództwo w pozostałym zakresie.
`,
    reviewPrompts: `# Konstrukcja Orzeczenia Sądowego
1. Jakie reguły rządzą stosunkowym rozdzieleniem kosztów procesu na podstawie art. 100 k.p.c.?
2. Czy sąd może dokonać miarkowania kary umownej z urzędu, czy wyłącznie na wniosek dłużnika?
3. Przedstaw zasady rozstrzygania o kosztach procesu według zasady stosunkowego rozdzielenia kosztów (art. 100 k.p.c.).
4. Jakie rygory wiążą się z wnioskiem o doręczenie wyroku z uzasadnieniem w procesie cywilnym (art. 328 i 329 k.p.c.)?`,
  },
  {
    id: 'comm-uzasadnienie',
    title: 'Pisemne Uzasadnienie Wyroku Sądu Gospodarczego',
    category: 'Etap 4: Wyrok I Instancji',
    description:
      'Szczegółowa analiza prawna art. 471, 483, 484 § 2 i 354 k.c., rozkład ciężaru dowodu art. 6 k.c. oraz orzecznictwo SN.',
    rank: 4,
    order: 1,
    coreNotes: `# Uzasadnienie Wyroku Sądu Okręgowego w Poznaniu (art. 328 k.p.c.)
**Sygnatura akt**: IX GC 210/24

---

## 1. Wykładnia Prawa Materialnego Przeprowadzona przez Sąd
- **Dopuszczalność kary umownej za odstąpienie od umowy**: Sąd podzielił utrwaloną linię orzeczniczą Sądu Najwyższego (m.in. uchwała 7 sędziów SN z dnia 16 stycznia 2014 r., III CZP 80/13), iż w razie odstąpienia od umowy z powodu zwłoki dłużnika, wierzyciel zachowuje roszczenie o zapłatę kary umownej zastrzeżonej na wypadek odstąpienia.
- **Przesłanki Miarkowania Kary (art. 484 § 2 k.c.)**:
  - Przepis art. 484 § 2 k.c. statuuje dwie niezależne przesłanki miarkowania: wykonanie zobowiązania w znacznej części oraz rażące wygórowanie kary. Obie przesłanki zaistniały w niniejszym stanie faktycznym.
  - Wykonawca oddał funkcjonujący Moduł Podstawowy oraz migrację danych (Etap I), z którego powód korzysta w bieżącej działalności.
  - Wysokość kary umownej w zestawieniu ze szkodą doznaną przez powoda oraz stopniem winy wykonawcy (uwzględniając przyczynienie się zamawiającego poprzez spóźnione udostępnienie API) uzasadnia obniżenie kary o połowę.
## 3. Główne Motywy Pisemnego Uzasadnienia Wyroku
- Sąd podkreślił, że kara umowna nie może prowadzić do nieuzasadnionego wzbogacenia wierzyciela kosztem dłużnika.
- W relacjach B2B profesjonalizm obu stron podlega ocenie na gruncie art. 355 § 2 k.c. Zarówno wykonawca nie sprostał podwyższonemu wzorcowi staranności w projektowaniu bazy danych, jak i zamawiający naruszył obowiązek lojalnego współdziałania przy wykonywaniu zobowiązania wynikający z art. 354 § 2 k.c.
- Oddalenie roszczenia odszkodowawczego na zasadach ogólnych (art. 471 k.c.): Powód nie udowodnił adekwatnego związku przyczynowego (art. 361 § 1 k.c.) pomiędzy opóźnieniem wdrożenia ERP a utraconymi korzyściami (*lucrum cessans*) z umów logistycznych.
`,
    reviewPrompts: `# Uzasadnienie w Sprawach Gospodarczych
1. W jakim terminie strona postępowania gospodarczego musi złożyć wniosek o doręczenie wyroku z uzasadnieniem (art. 328 § 1 k.p.c.)?
3. Przedstaw konstrukcję adekwatnego związku przyczynowego w prawie cywilnym (teoria przyczynowości adekwatnej).
4. Czym różni się szkoda rzeczywista (damnum emergens) od utraconych korzyści (lucrum cessans) i jakie są wymogi dowodowe dla wykazania utraconych korzyści?`,
  },

  // Etap 5 (rank: 5)
  {
    id: 'comm-ugoda-apelacja',
    title: 'Pozasądowa Ugoda, Cofnięcie Apelacji i Zakończenie Sporu',
    category: 'Etap 5: Ugoda i Prawomocność',
    description:
      'Zawarcie ugody (art. 917 k.c.): rozliczenie na kwotę 400.000 PLN, cofnięcie apelacji (art. 391 § 2 k.p.c.) i zwrot 50% opłaty sądowej.',
    rank: 5,
    order: 0,
    coreNotes: `# Porozumienie Ugodowe i Cofnięcie Apelacji (art. 917 k.c., art. 391 § 2 k.p.c.)

**Strony porozumienia**: *Pol-Logistyka S.A.* oraz *CloudCore Solutions Sp. z o.o.*  
**Data zawarcia ugody**: 20 stycznia 2025 r.

---

## 1. Postanowienia Ugody Pozasądowej
Wobec wniesienia apelacji przez obie strony od wyroku Sądu Okręgowego w Poznaniu z dnia 15 listopada 2024 r., strony w drodze wzajemnych ustępstw postanawiają:
1. Pozwany zapłaci na rzecz Powoda kwotę **400.000 PLN** w 2 równych ratach po 200.000 PLN do dnia 28 lutego 2025 r.
2. Pozwany przekaże Powodowi pełne kody źródłowe i dokumentację techniczną modułu WMS z prawem do ich samodzielnej modyfikacji (*licencja bezterminowa*).
3. Obie strony zrzekają się wszelkich dalszych roszczeń finansowych i odszkodowawczych wynikających z Umowy Wdrożeniowej.
4. Obie strony zobowiązują się do niezwłocznego złożenia w Sądzie Apelacyjnym w Poznaniu pism procesowych cofających wniesione apelacje i wnoszących o umorzenie postępowania odwoławczego.

## 2. Skutki Procesowe Cofnięcia Apelacji
- Zgodnie z art. 391 § 2 k.p.c. Sąd Apelacyjny w Poznaniu wydał postanowienie o umorzeniu postępowania apelacyjnego.
- Zgodnie z art. 79 ust. 1 pkt 3 lit. a ustawy o kosztach sądowych w sprawach cywilnych (UKSC), sąd zwrócił każdej ze stron połowę (50%) uiszczonej opłaty od apelacji.
- Wyrok Sądu I instancji stał się prawomocny, a spór został ostatecznie zażegnany.
## 3. Ekonomika Procesowa i Prawomocne Zakończenie Sporu
- Obie strony złożyły apelacje: powód żądając zasądzenia pełnej kwoty pozwu, pozwany żądając całkowitego oddalenia powództwa.
- Przed wyznaczeniem terminu rozprawy apelacyjnej strony podjęły negocjacje ugodowe z udziałem mediatora gospodarczego.
- Podpisanie ugody pozwoliło na uniknięcie wieloletniego dalszego sporu, odzyskanie przez powoda kodu źródłowego gwarantującego ciągłość operacyjną magazynu oraz odzyskanie 50% opłaty apelacyjnej z kasy sądu (art. 79 UKSC).
`,
    reviewPrompts: `# Ugoda i Cofnięcie Środka Odwoławczego
1. Czym różni się ugoda sądowa zawarta przed sądem od pozasądowej umowy ugody pod względem wykonalności komorniczej (tytuł egzekucyjny vs klauzula wykonalności)?
3. W jakich przypadkach ugoda zawarta przed mediatorem uzyskuje moc prawną ugody sądowej (art. 183[14] k.p.c.)?
4. Jakie są skutki procesowe cofnięcia pozwu lub apelacji bez zrzeczenia się roszczenia w porównaniu ze zrzeczeniem się roszczenia?`,
  },
];

// ============================================================================
// CASE 3: SPRAWA SĄDOWOADMINISTRACYJNA (KPA / PPSA)
// ============================================================================
export const administrativeCaseEdges: SeedEdge[] = [
  // Etap 0 (Organ I Instancji) -> Etap 1 (SKO)
  { id: 'adm-wniosek-raport', source: 'adm-wniosek-dsu', target: 'adm-raport-oos' },
  { id: 'adm-raport-uzgodnienia', source: 'adm-raport-oos', target: 'adm-uzgodnienia' },
  { id: 'adm-uzgodnienia-decyzjawojta', source: 'adm-uzgodnienia', target: 'adm-decyzja-wojta' },
  { id: 'adm-decyzjawojta-odwolanie', source: 'adm-decyzja-wojta', target: 'adm-odwolanie' },

  // Etap 1 -> Etap 2 (WSA w Poznaniu)
  { id: 'adm-odwolanie-decyzjasko', source: 'adm-odwolanie', target: 'adm-decyzja-sko' },
  { id: 'adm-decyzjasko-skargawsa', source: 'adm-decyzja-sko', target: 'adm-skarga-wsa' },
  { id: 'adm-skargawsa-odpowiedz', source: 'adm-skarga-wsa', target: 'adm-odpowiedz-skarga' },
  { id: 'adm-odpowiedz-wyrokwsa', source: 'adm-odpowiedz-skarga', target: 'adm-wyrok-wsa' },

  // Etap 2 -> Etap 3 (NSA w Warszawie)
  { id: 'adm-wyrokwsa-kasacja', source: 'adm-wyrok-wsa', target: 'adm-skarga-kasacyjna' },
  { id: 'adm-kasacja-wyroknsa', source: 'adm-skarga-kasacyjna', target: 'adm-wyrok-nsa' },
];

export const administrativeCaseCourses: Course[] = [
  // Etap 0 (rank: 0)
  {
    id: 'adm-wniosek-dsu',
    title: 'Wniosek Inwestora o Wydanie Decyzji Środowiskowej (DŚU)',
    category: 'Etap 0: Organ I Instancji',
    description:
      'Wszczęcie procedury ocenowej dla farmy wiatrowej 36 MW z magazynem energii w trybie ustawy o udostępnianiu informacji o środowisku.',
    rank: 0,
    order: 0,
    coreNotes: `# Wniosek o Wydanie Decyzji o Środowiskowych Uwarunkowaniach (DŚU)
**Organ właściwy**: Wójt Gminy Tarnowo Podgórne (powiat poznański)  
**Wnioskodawca**: *Wiatr-Pol Energia Odnawialna Sp. z o.o.*  
**Przedsięwzięcie**: Budowa farmy wiatrowej o łącznej mocy zainstalowanej 36 MW (6 turbin o mocy 6 MW każda, wysokość wieży do 180 m) wraz z infrastrukturą towarzyszącą i magazynem energii.

---

## 1. Kwalifikacja Prawna Przedsięwzięcia
- Na podstawie § 2 ust. 1 pkt 5 Rozporządzenia Rady Ministrów w sprawie przedsięwzięć mogących znacząco oddziaływać na środowisko, inwestycja kwalifikuje się jako **przedsięwzięcie mogące zawsze znacząco oddziaływać na środowisko** (grupa I).
- Zgodnie z art. 71 ust. 2 pkt 1 ustawy z dnia 3 października 2008 r. o udostępnianiu informacji o środowisku i jego ochronie, udziale społeczeństwa w ochronie środowiska oraz o ocenach oddziaływania na środowisko (ustawa ooś), uzyskanie decyzji o środowiskowych uwarunkowaniach jest obligatoryjne przed wystąpieniem o pozwolenie na budowę.

## 2. Załączniki Formalne do Wniosku
1. Karta Informacyjna Przedsięwzięcia (KIP).
2. Poświadczona przez właściwy organ kopia mapy ewidencyjnej obejmującej przewidywany teren realizacji oraz obszar oddziaływania.
3. Wypisy z rejestru gruntów dla działek objętych inwestycją.`,
    reviewPrompts: `# Kwestie Prawne — Procedura Środowiskowa
1. Na czym polega różnica pomiędzy przedsięwzięciami z Grupy I (zawsze znacząco oddziałującymi) a Grupy II (potencjalnie znacząco oddziałującymi) w ustawie ooś?`,
  },
  {
    id: 'adm-raport-oos',
    title: 'Raport o Oddziaływaniu na Środowisko i Konsultacje Społeczne',
    category: 'Etap 0: Organ I Instancji',
    description:
      'Sporządzenie kompleksowego raportu OOŚ (art. 66 ustawy ooś): monitoring ptaków i nietoperzy, hałas akustyczny, migotanie cieni i uwagi mieszkańców.',
    rank: 0,
    order: 1,
    coreNotes: `# Raport o Oddziaływaniu Przedsięwzięcia na Środowisko (art. 66 ustawy ooś)
**Autorzy raportu**: Zespół ekspertów środowiskowych, ornitologów i akustyków  
**Objętość**: 420 stron + załączniki graficzne i symulacje numeryczne

---

## 1. Zakres Przeprowadzonych Badań Terenowych
- **Monitoring ornitologiczny i chiropterologiczny**: Całoroczny (12 miesięcy) monitoring terenowy migracji ptaków oraz aktywności nietoperzy (detektory ultradźwiękowe AnaBat). Stwierdzono brak kolizji z korytarzami migracyjnymi ptaków szponiastych rangi europejskiej.
- **Modelowanie emisji hałasu**: Symulacja propagacji hałasu wg normy PN-ISO 9613-2. Poziom hałasu na granicy najbliższej zabudowy mieszkaniowej wynosi $38{,}4\\text{ dB(A)}$ w porze nocy przy dopuszczalnej normie $45\\text{ dB(A)}$.
- **Efekt migotania cieni (*shadow flicker*)**: Wykazano, że łączny czas migotania cieni dla najbliższego domostwa nie przekroczy 24 godzin w skali roku (norma niemiecka WEA-Schattenwurf).

## 2. Konsultacje Społeczne (art. 33–38 ustawy ooś)
- Obwieszczenie wójta o wyłożeniu raportu do publicznego wglądu na okres 30 dni.
- Wpłynięcie 142 protestów mieszkańców oraz stanowiska Stowarzyszenia Ekologicznego „Czysta Wieś” żądającego zaniechania inwestycji z uwagi na rzekomy spadek wartości gruntów i syndrom turbin wiatrowych.
## 3. Wymagania Merytoryczne Raportu OOŚ (art. 66 Ustawy ooś)
- **Wariantowanie Inwestycji**:
  - Wariant proponowany przez wnioskodawcę (6 turbin Vestas V162 6.0 MW).
  - Racjonalny wariant alternatywny (8 turbin o mniejszej mocy 4.5 MW ze zmienioną lokalizacją wież).
  - Wariant najkorzystniejszy dla środowiska wraz z uzasadnieniem wyboru.
- **Ochrona Awifauny i Chiropterofauny**:
  - Zastosowanie automatycznych radarowych systemów detekcji ptaków szponiastych (bielik, kania ruda), zatrzymujących obrót wirnika w ciągu 20 sekund od wykrycia zbliżającego się osobnika (*bat/bird curtailment system*).
- **Zasada Przezorności i Zapobiegania w Prawie Ochrony Środowiska**: Obowiązek minimalizacji oddziaływań u źródła.
`,
    reviewPrompts: `# Udział Społeczeństwa w Ochronie Środowiska
1. Jakie uprawnienia przysługują organizacjom ekologicznym w procedurze wydawania decyzji środowiskowej na gruncie art. 44 ustawy ooś?
3. Przedstaw wymogi dotyczące wariantowania przedsięwzięcia w raporcie OOŚ i wyjaśnij, jakie konsekwencje rodzi brak przedstawienia wariantu alternatywnego.
4. W jakich przypadkach organ administracji ma obowiązek przeprowadzenia rozprawy administracyjnej otwartej dla społeczeństwa (art. 36 ustawy ooś)?`,
  },
  {
    id: 'adm-uzgodnienia',
    title: 'Uzgodnienia RDOŚ, Wód Polskich i Sanepidu',
    category: 'Etap 0: Organ I Instancji',
    description:
      'Współdziałanie organów administracji (art. 77 ustawy ooś): pozytywne uzgodnienia Regionalnego Dyrektora Ochrony Środowiska w Poznaniu.',
    rank: 0,
    order: 2,
    coreNotes: `# Stanowiska Organów Współdziałających (art. 77 ust. 1 ustawy ooś)

---

## 1. Postanowienie Regionalnego Dyrektora Ochrony Środowiska (RDOŚ) w Poznaniu
- RDOŚ w Poznaniu po analizie raportu OOŚ wydał **postanowienie uzgadniające realizację przedsięwzięcia** i określające szczegółowe warunki ochrony przyrody:
  - Obowiązek instalacji automatycznego systemu detekcji ptaków z funkcją zatrzymywania turbin (*curtailment*).
  - Wyłączenie pracy turbin w porze zmierzchu w okresie od sierpnia do września w celu ochrony nietoperzy.
  - Wykonanie analizy porealizacyjnej hałasu po 12 miesiącach od uruchomienia farmy.

## 2. Opinie Państwowego Powiatowego Inspektora Sanitarnego (PPIS) oraz Wód Polskich
- PPIS w Poznaniu: Pozytywna opinia sanitarna dotycząca braku przekroczeń norm hałasu i pól elektromagnetycznych.
- Państwowe Gospodarstwo Wodne Wody Polskie: Pozytywna opinia w zakresie gospodarki wodno-ściekowej i braku wpływu na jednolite części wód podziemnych (JCWPd).
## 3. Współdziałanie Organów w Trybie Art. 77 Ustawy ooś
- **Regionalny Dyrektor Ochrony Środowiska (RDOŚ)**: Wydaje postanowienie uzgadniające warunki realizacji przedsięwzięcia (wiążące dla organu wydającego decyzję środowiskową). Określa warunki dotyczące okresowych wyłączeń turbin w okresie migracji nietoperzy oraz nadzoru przyrodniczego.
- **Państwowe Gospodarstwo Wodne Wody Polskie**: Uzgodnienie w zakresie ochrony wód podziemnych i powierzchniowych (zagrożenie dla Głównego Zbiornika Wód Podziemnych GZWP).
- **Państwowy Powiatowy Inspektor Sanitarny (Sanepid)**: Opinia sanitarno-higieniczna dotycząca emisji pól elektromagnetycznych oraz norm hałasu akustycznego i infradźwiękowego.
`,
    reviewPrompts: `# Współdziałanie Organów Administracji Publicznej
1. Jaki charakter prawny ma uzgodnienie w trybie art. 106 k.p.a. w przeciwieństwie do opinii i w jakim zakresie wiąże ono organ prowadzący postępowanie główne?
3. Czym różni się instytucja „uzgodnienia” od „zaopiniowania” w kodeksowym postępowaniu administracyjnym (art. 106 KPA)?
4. Czy na postanowienie RDOŚ uzgadniające warunki realizacji przedsięwzięcia przysługuje zażalenie inwestorowi lub innym stronom?`,
  },
  {
    id: 'adm-decyzja-wojta',
    title: 'Decyzja Wójta Gminy Odmawiająca Ustalenia DŚU',
    category: 'Etap 0: Organ I Instancji',
    description:
      'Wójt ulega presji protestów społecznych i wydaje decyzję odmowną, powołując się na zasadę przezorności i rzekome zagrożenie zdrowia.',
    rank: 0,
    order: 3,
    coreNotes: `# Decyzja Wójta Gminy o Odmowie Określenia Środowiskowych Uwarunkowań
**Znak sprawy**: OŚ.6220.12.2023  
**Data**: 24 kwietnia 2024 r.

---

## 1. Rozstrzygnięcie
Wójt Gminy, działając na podstawie art. 104 k.p.a. oraz art. 71 i art. 80 ustawy ooś, orzeka:
> **Odmówić ustalenia środowiskowych uwarunkowań** dla przedsięwzięcia polegającego na budowie farmy wiatrowej o mocy 36 MW w miejscowości X.

## 2. Uzasadnienie Organu I Instancji
- Organ podniósł, iż w toku konsultacji społecznych wpłynęły liczne sprzeciwy lokalnej społeczności.
- Wójt uznał, że choć inwestor posiada pozytywne uzgodnienia RDOŚ i Sanepidu, to na gruncie konstytucyjnej zasady zrównoważonego rozwoju (art. 5 Konstytucji RP) oraz zasady przezorności organ jednostki samorządu terytorialnego ma prawo przedłożyć dobrostan mieszkańców i walory krajobrazowe gminy ponad interes ekonomiczny prywatnego przedsiębiorcy.
## 3. Prawne Wady Decyzji Odmownej Wójta Gminy
- Wójt Gminy wydał decyzję odmawiającą określenia środowiskowych uwarunkowań, powołując się na protesty mieszkańców oraz art. 7 KPA (słuszny interes obywateli).
- **Rażące Naruszenie Prawa przez Organ I Instancji**:
  - Zgodnie z utrwalonym orzecznictwem NSA, decyzja środowiskowa nie ma charakteru uznaniowego (*uznanie administracyjne*). Jeżeli raport OOŚ jest rzetelny, a organy wyspecjalizowane (RDOŚ, Sanepid) uzgodniły inwestycję, organ ma prawny obowiązek wydać decyzję pozytywną określającą środowiskowe uwarunkowania.
  - Sam sprzeciw społeczny, niepoparty zarzutami naruszenia konkretnych norm prawa materialnego i poziomów dopuszczalnych emisji, nie może stanowić samodzielnej podstawy odmowy wydania DŚU!
`,
    reviewPrompts: `# Kwestia Związania Organu Decydującego o DŚU
1. Czy wójt gminy przy wydawaniu decyzji o środowiskowych uwarunkowaniach może wydać decyzję odmowną w sytuacji, gdy inwestor przedłożył poprawny raport OOŚ i uzyskał pozytywne uzgodnienia wyspecjalizowanych organów?
3. Wyjaśnij pojęcie związania organu administracji ustaleniami organów współdziałających i granice swobody decyzyjnej wójta/burmistrza.
4. Jakie elementy składowe musi zawierać prawidłowo sporządzone uzasadnienie faktyczne i prawne decyzji administracyjnej (art. 107 § 3 KPA)?`,
  },

  // Etap 1 (rank: 1)
  {
    id: 'adm-odwolanie',
    title: 'Odwołanie Inwestora do Samorządowego Kolegium Odwoławczego',
    category: 'Etap 1: Postępowanie Odwoławcze SKO',
    description:
      'Zaskarżenie decyzji wójta (art. 127 i 129 k.p.a.): zarzut rażącego naruszenia art. 7, 77 § 1, 80 i 107 § 3 k.p.a. oraz związania uzgodnieniem RDOŚ.',
    rank: 1,
    order: 0,
    coreNotes: `# Odwołanie od Decyzji Organu I Instancji (art. 127, 128 k.p.a.)
**Do**: Samorządowe Kolegium Odwoławcze w Poznaniu  
**Za pośrednictwem**: Wójta Gminy  
**Wnoszący odwołanie**: *Wiatr-Pol Energia Odnawialna Sp. z o.o.* reprezentowana przez adwokata

---

## 1. Zarzuty Odwołania
Zaskarżonej decyzji zarzucam:
1. **Naruszenie przepisów prawa procesowego**, tj.:
   - **art. 7, art. 77 § 1 i art. 80 k.p.a.** poprzez przekroczenie granic swobodnej oceny dowodów i bezpodstawne odrzucenie ustaleń raportu OOŚ oraz pozytywnego stanowiska RDOŚ;
   - **art. 107 § 3 k.p.a.** poprzez brak wskazania faktów, na których organ oparł odmowę, i zastąpienie argumentacji naukowej ogólnikowym powołaniem się na „sprzeciw społeczny”;
2. **Naruszenie prawa materialnego**, tj.:
   - **art. 80 ust. 1 i art. 81 ust. 1 ustawy ooś** poprzez przyjęcie, że protesty społeczne mogą stanowić samodzielną podstawę prawną do odmowy wydania DŚU.

## 2. Wnioski Odwołania
Wnoszę o:
1. Uchylenie zaskarżonej decyzji w całości i orzeczenie co do istoty sprawy poprzez wydanie decyzji o środowiskowych uwarunkowaniach (art. 138 § 1 pkt 2 k.p.a.).
## 3. Zarzuty Odwołania Inwestora do SKO
- Inwestor zarzucił decyzji wójta:
  1. **Naruszenie art. 80 KPA w zw. z art. 7 i 77 § 1 KPA**: Dokonanie dowolnej, a nie swobodnej oceny dowodów poprzez całkowite pominięcie wiążącego postanowienia RDOŚ w Poznaniu i oparcie rozstrzygnięcia wyłącznie na subiektywnych obawach lokalnej społeczności.
  2. **Naruszenie art. 107 § 3 KPA**: Brak wskazania faktów, które organ uznał za udowodnione, oraz przyczyn, dla których odmówił wiarygodności badaniom akustycznym i ornitologicznym.
  3. **Naruszenie art. 81 ust. 1 Ustawy ooś**: Odmowa ustalenia środowiskowych uwarunkowań pomimo braku stwierdzenia niezgodności lokalizacji z przepisami odrębnymi i braku negatywnego oddziaływania na obszary Natura 2000.
`,
    reviewPrompts: `# Postępowanie Przed SKO
1. Kiedy organ odwoławczy może wydać decyzję reformatoryjną (orzec co do istoty) na podstawie art. 138 § 1 pkt 2 k.p.a., a kiedy musi wydać decyzję kasacyjną (art. 138 § 2 k.p.a.)?
3. Przedstaw zasadę dwuinstancyjności postępowania administracyjnego (art. 15 KPA) i jej gwarancyjny charakter dla inwestora.
4. W jakim terminie i za czyim pośrednictwem wnosi się odwołanie od decyzji organu I instancji oraz kiedy przysługuje wniosek o wstrzymanie natychmiastowej wykonalności?`,
  },
  {
    id: 'adm-decyzja-sko',
    title: 'Decyzja Reformatoryjna SKO w Poznaniu — Wydanie DŚU',
    category: 'Etap 1: Postępowanie Odwoławcze SKO',
    description:
      'SKO w Poznaniu uchyla decyzję wójta i orzeka co do istoty sprawy (art. 138 § 1 pkt 2 k.p.a.): wydanie decyzji środowiskowej z rygorami ochrony przyrody.',
    rank: 1,
    order: 1,
    coreNotes: `# Decyzja Samorządowego Kolegium Odwoławczego w Poznaniu
**Znak sprawy**: SKO.ŚR.401/182/2024  
**Data**: 28 czerwca 2024 r.

---

## 1. Rozstrzygnięcie Organu Odwoławczego
Samorządowe Kolegium Odwoławcze w Poznaniu w składzie 3-osobowym po rozpoznaniu odwołania inwestora:
1. Na podstawie art. 138 § 1 pkt 2 k.p.a. oraz art. 71, 80 i 82 ustawy ooś **uchyla zaskarżoną decyzję Wójta Gminy w całości** i
2. **Ustala środowiskowe uwarunkowania dla realizacji przedsięwzięcia** budowy farmy wiatrowej 36 MW z określeniem warunków środowiskowych wynikających z uzgodnienia RDOŚ w Poznaniu.

## 2. Kluczowe Motywy Decyzji SKO
- Decyzja o środowiskowych uwarunkowaniach **nie ma charakteru uznaniowego**. Jest to decyzja związana (*decyzja o charakterze związania administracyjnego*).
- Jeżeli planowane przedsięwzięcie spełnia wymagania przepisów prawa ochrony środowiska, a z raportu OOŚ zweryfikowanego przez RDOŚ i Sanepid wynika brak ponadnormatywnego oddziaływania poza granicami terenu inwestycji, organ administracji ma bezwzględny prawny obowiązek wydania DŚU.
- Sam sprzeciw społeczny mieszkańców, niepoparty dowodami naukowymi lub ekspertyzami wykazującymi naruszenie konkretnych norm emisyjnych, nie może być przesłanką odmowy wydania decyzji.
## 3. Rozstrzygnięcie Samorządowego Kolegium Odwoławczego (art. 138 KPA)
- SKO w Poznaniu uznało odwołanie inwestora za w pełni uzasadnione.
- Wybór rozstrzygnięcia: Zamiast decyzji kasacyjnej (art. 138 § 2 KPA) odsyłającej sprawę do ponownego rozpatrzenia przez wójta, SKO — dysponując kompletnym materiałem dowodowym i wiążącymi uzgodnieniami RDOŚ — wydało decyzję merytoryczno-reformatoryjną na podstawie art. 138 § 1 pkt 2 KPA:
  - Uchyliło zaskarżoną decyzję wójta w całości.
  - Orzekło o **ustaleniu środowiskowych uwarunkowań dla realizacji przedsięwzięcia**, nakładając na inwestora rygorystyczne obowiązki monitoringu porealizacyjnego.
`,
    reviewPrompts: `# Charakter Prawny Decyzji Środowiskowej
1. Wyjaśnij pojęcie decyzji związanej w prawie administracyjnym na przykładzie orzecznictwa Naczelnego Sądu Administracyjnego dotyczącego DŚU.
3. Czym różni się decyzja reformatoryjna organu odwoławczego (art. 138 § 1 pkt 2 KPA) od decyzji kasacyjnej (art. 138 § 2 KPA)?
4. Jakie są granice zakazu reformationis in peius w postępowaniu odwoławczym (art. 139 KPA)?`,
  },

  // Etap 2 (rank: 2)
  {
    id: 'adm-skarga-wsa',
    title: 'Skarga Stowarzyszenia Ekologicznego do WSA w Poznaniu',
    category: 'Etap 2: Kontrola Sądowoadministracyjna WSA',
    description:
      'Skarga do WSA (art. 50 i 54 p.p.s.a.) wraz z wnioskiem o wstrzymanie wykonania decyzji (art. 61 § 3 p.p.s.a.) z zarzutem wadliwości oceny raportu OOŚ.',
    rank: 2,
    order: 0,
    coreNotes: `# Skarga do Wojewódzkiego Sądu Administracyjnego w Poznaniu
**Skarżący**: Stowarzyszenie Ekologiczne „Czysta Wieś”  
**Organ zaskarżony**: Samorządowe Kolegium Odwoławcze w Poznaniu  
**Uczestnik postępowania na prawach strony**: *Wiatr-Pol Energia Odnawialna Sp. z o.o.*

---

## 1. Żądania Skargi (art. 50 § 1 p.p.s.a.)
Skarżące stowarzyszenie wnosi o:
1. **Uchylenie zaskarżonej decyzji SKO w Poznaniu w całości** na podstawie art. 145 § 1 pkt 1 lit. c p.p.s.a.
2. Na podstawie art. 61 § 3 p.p.s.a. **wstrzymanie wykonania zaskarżonej decyzji** z uwagi na niebezpieczeństwo spowodowania trudnych do odwrócenia skutków w środowisku naturalnym (zniszczenie siedlisk ptaków lęgowych).

## 2. Zarzuty Skargi
- Naruszenie art. 7 i 77 § 1 k.p.a. w zw. z art. 66 ust. 1 pkt 5 ustawy ooś poprzez oparcie się na rzekomo zmanipulowanym raporcie OOŚ opłaconym przez inwestora, który zaniżył liczebność populacji kani rudej (*Milvus milvus*) na badanym obszarze.
- Naruszenie art. 138 § 1 pkt 2 k.p.a. poprzez wydanie decyzji reformatoryjnej zamiast przekazania sprawy organowi I instancji do ponownego rozpatrzenia (naruszenie zasady dwuinstancyjności art. 15 k.p.a.).
## 3. Legitymacja Skargowa Organizacji Ekologicznych (art. 44 Ustawy ooś)
- Stowarzyszenie Ekologiczne „Czysta Wieś” wniosło skargę do Wojewódzkiego Sądu Administracyjnego w Poznaniu.
- Na podstawie art. 44 ust. 1 Ustawy ooś organizacja ekologiczna, powołując się na swoje cele statutowe, ma prawo wnieść skargę do sądu administracyjnego na decyzję środowiskową, nawet jeśli nie brała udziału w postępowaniu przed organem I lub II instancji.
- Zarzuty skargi: Niedoszacowanie skumulowanego oddziaływania akustycznego z sąsiednią drogą ekspresową S11 oraz naruszenie Dyrektywy Ptasiej (2009/147/WE) i Siedliskowej (92/43/EWG).
`,
    reviewPrompts: `# Wstrzymanie Wykonania Decyzji Administracyjnej
1. Jakie przesłanki muszą zostać wykazane we wniosku o wstrzymanie wykonania decyzji na podstawie art. 61 § 3 p.p.s.a. (trudne do odwrócenia skutki, znaczna szkoda)?
3. Wyjaśnij wymogi formalne skargi do Wojewódzkiego Sądu Administracyjnego określone w art. 57 PPSA.
4. Na czym polega instytucja wstrzymania wykonania zaskarżonego aktu przez sąd administracyjny (art. 61 § 3 PPSA) i jakie przesłanki muszą zostać uprawdopodobnione?`,
  },
  {
    id: 'adm-odpowiedz-skarga',
    title: 'Odpowiedź Organu i Inwestora na Skargę do WSA',
    category: 'Etap 2: Kontrola Sądowoadministracyjna WSA',
    description:
      'Odpowiedź na skargę sporządzona przez radcę prawnego inwestora: wykazanie legalności DŚU, odparcie zarzutów ornitologicznych i wniosek o oddalenie.',
    rank: 2,
    order: 1,
    coreNotes: `# Pismo Procesowe Uczestnika Postępowania — Odpowiedź na Skargę
**Sygnatura akt**: IV SA/Po 524/24  
**Wojewódzki Sąd Administracyjny w Poznaniu — Wydział IV**

---

## 1. Wnioski Uczestnika Postępowania
Inwestor wnosi o:
1. **Oddalenie skargi w całości** na podstawie art. 151 p.p.s.a. jako całkowicie bezzasadnej.
2. Oddalenie wniosku o wstrzymanie wykonania zaskarżonej decyzji.

## 2. Uzasadnienie Stanowiska Inwestora
- Stowarzyszenie nie przedstawiło żadnego przeciwdowodu (np. kontrekspertyzy ornitologicznej), a jedynie polemiczne zarzuty niepoparte wiedzą biologiczną.
- Raport OOŚ był weryfikowany przez RDOŚ w Poznaniu, który jako wyspecjalizowany organ ochrony przyrody nie wniósł zastrzeżeń co do metodyki monitoringu kani rudej.
- SKO było w pełni uprawnione do reformatoryjnego orzeczenia na podst. art. 138 § 1 pkt 2 k.p.a., gdyż materiał dowodowy zgromadzony w aktach sprawy był kompletny i nie wymagał uzupełnienia w znacznym zakresie.
## 3. Argumentacja Organu i Uczestnika na Prawach Strony
- SKO w Poznaniu w odpowiedzi na skargę wniosło o jej oddalenie w całości na podstawie art. 151 PPSA.
- Wskazano, że skumulowane oddziaływanie akustyczne zostało szczegółowo zamodelowane w rozdziale 7 raportu OOŚ, a prognozowany hałas sumaryczny nie przekracza norm dopuszczalnych w środowisku.
- Inwestor (uczestnik postępowania) podniósł, że zarzuty skarżącego stowarzyszenia mają charakter polemiki światopoglądowej i nie zawierają żadnych merytorycznych dowodów ani kontrekspertyz przyrodniczych podważających ustalenia RDOŚ.
`,
    reviewPrompts: `# Uprawnienia Uczestnika Postępowania Sądowoadministracyjnego
1. Jaki jest status inwestora w postępowaniu przed WSA ze skargi sąsiadów na decyzję środowiskową (art. 33 § 1 i 2 p.p.s.a.)?
3. W jakim terminie organ administracji ma obowiązek przekazać skargę wraz z aktami sprawy i odpowiedzią na skargę do sądu administracyjnego (art. 54 § 2 PPSA)?
4. Jakie uprawnienia przysługują uczestnikowi postępowania na prawach strony w postępowaniu przed sądem administracyjnym (art. 33 PPSA)?`,
  },
  {
    id: 'adm-wyrok-wsa',
    title: 'Wyrok WSA w Poznaniu Oddalający Skargę Stowarzyszenia',
    category: 'Etap 2: Kontrola Sądowoadministracyjna WSA',
    description:
      'WSA w Poznaniu orzeka o oddaleniu skargi (art. 151 p.p.s.a.): uznanie legalności procedury, związania DŚU i braku uchybień w raporcie OOŚ.',
    rank: 2,
    order: 2,
    coreNotes: `# Wyrok w Imieniu Rzeczypospolitej Polskiej
**Sygnatura akt**: IV SA/Po 524/24  
**Wojewódzki Sąd Administracyjny w Poznaniu — Wydział IV**  
**Dnia**: 19 listopada 2024 r.

---

## 1. Sentencja Wyroku
Wojewódzki Sąd Administracyjny w Poznaniu po rozpoznaniu sprawy ze skargi Stowarzyszenia Ekologicznego „Czysta Wieś”:
> **Oddala skargę na podstawie art. 151 ustawy — Prawo o postępowaniu przed sądami administracyjnymi.**

## 2. Główne Tezy Uzasadnienia Sądu
- Sąd administracyjny sprawuje kontrolę działalności administracji publicznej pod względem **zgodności z prawem (legalności)**, a nie celowości czy słuszności rozstrzygnięć.
- Zaskarżona decyzja SKO w Poznaniu nie narusza przepisów prawa materialnego ani procesowego w stopniu mogącym mieć istotny wpływ na wynik sprawy.
- Procedura oceny oddziaływania na środowisko została przeprowadzona z poszanowaniem standardów prawa unijnego (Dyrektywa EIA) i krajowego. Zapewniono pełny 30-dniowy udział społeczeństwa, a do zgłoszonych uwag organ i inwestor odnieśli się w sposób rzetelny.
- Podnoszone przez skarżących obawy co do spadku wartości nieruchomości w sąsiedztwie farmy wiatrowej nie mieszczą się w zakresie oceny środowiskowej definiowanej w art. 3 ust. 1 pkt 13 ustawy ooś.
## 3. Wyrok WSA w Poznaniu i Ocena Legalności Decyzji
- Sąd Administracyjny orzekał pod przewodnictwem sędziego sprawozdawcy z Wydziału IV.
- **Sentencja**: Wojewódzki Sąd Administracyjny w Poznaniu na podstawie art. 151 PPSA **oddala skargę**.
- **Motywy Wyroku**:
  - Sąd administracyjny sprawuje kontrolę działalności administracji publicznej pod względem zgodności z prawem (legalności), a nie celowości czy słuszności.
  - Postępowanie dowodowe przeprowadzone przez organy administracji było wyczerpujące i nie naruszało art. 7 i 77 KPA.
  - Zgoda środowiskowa wydana przez SKO zawiera wszelkie niezbędne środki minimalizujące oddziaływanie na przyrodę, a zarzuty skarżącego stowarzyszenia okazały się bezpodstawne.
`,
    reviewPrompts: `# Wyroki Sądu Administracyjnego
1. Kiedy sąd administracyjny wydaje wyrok oddalający skargę (art. 151 p.p.s.a.), a w jakich sytuacjach orzeka o stwierdzeniu nieważności decyzji (art. 145 § 1 pkt 2 p.p.s.a.)?
3. Przedstaw rodzaje rozstrzygnięć sądu administracyjnego I instancji (uwzględnienie skargi: uchylenie, stwierdzenie nieważności, stwierdzenie wydania z naruszeniem prawa vs oddalenie skargi).
4. Kiedy wyrok sądu administracyjnego staje się prawomocny i jaki przysługuje od niego środek zaskarżenia?`,
  },

  // Etap 3 (rank: 3)
  {
    id: 'adm-skarga-kasacyjna',
    title: 'Skarga Kasacyjna do Naczelnego Sądu Administracyjnego',
    category: 'Etap 3: Postępowanie Kasacyjne NSA',
    description:
      'Sporządzenie skargi kasacyjnej przez radcę prawnego stowarzyszenia (art. 173 i 175 p.p.s.a. - przymus radcowski) i zarzuty kasacyjne.',
    rank: 3,
    order: 0,
    coreNotes: `# Skarga Kasacyjna do Naczelnego Sądu Administracyjnego w Warszawie
**Do**: Naczelny Sąd Administracyjny — Izba Ogólnoadministracyjna  
**Za pośrednictwem**: Wojewódzkiego Sądu Administracyjnego w Poznaniu  
**Sporządzona przez**: Radcę prawnego — pełnomocnika Stowarzyszenia „Czysta Wieś” (przymus radcowsko-adwokacki z art. 175 § 1 p.p.s.a.)

---

## 1. Podstawy Kasacyjne (art. 174 p.p.s.a.)
Zaskarżonemu wyrokowi WSA w Poznaniu z dnia 19 listopada 2024 r. zarzucam:
1. **Naruszenie przepisów postępowania, które miało istotny wpływ na wynik sprawy (art. 174 pkt 2 p.p.s.a.)**, tj. **art. 145 § 1 pkt 1 lit. c w zw. z art. 151 p.p.s.a.** w zw. z art. 7 i 77 § 1 k.p.a. poprzez nienależyte skontrolowanie ustaleń organu w przedmiocie kompletności inwentaryzacji fauny;
2. **Naruszenie prawa materialnego przez błędną wykładnię (art. 174 pkt 1 p.p.s.a.)**, tj. **art. 80 ust. 1 ustawy ooś** poprzez przyjęcie, że organ jest bezwzględnie związany wnioskiem inwestora i uzgodnieniem RDOŚ z wyłączeniem możliwości oceny interesu społecznego.

## 2. Wnioski Skargi Kasacyjnej
Wnoszę o uchylenie zaskarżonego wyroku w całości i przekazanie sprawy do ponownego rozpoznania WSA w Poznaniu oraz zasądzenie kosztów postępowania kasacyjnego.
## 3. Podstawy Skargi Kasacyjnej do NSA (art. 174 PPSA)
- Skarga kasacyjna sporządzona przez radcę prawnego reprezentującego stowarzyszenie (przymus adwokacko-radcowski z art. 175 PPSA).
- **Zarzuty Kasacyjne**:
  1. *Naruszenie prawa materialnego przez błędną wykładnię (art. 174 pkt 1 PPSA)*: Błędna wykładnia art. 66 ust. 1 pkt 5 Ustawy ooś polegająca na uznaniu, że przedstawiony przez inwestora wariant alternatywny spełnia wymogi racjonalnego wariantu środowiskowego.
  2. *Naruszenie przepisów postępowania, które mogło mieć istotny wpływ na wynik sprawy (art. 174 pkt 2 PPSA)*: Naruszenie art. 145 § 1 pkt 1 lit. c PPSA w zw. z art. 7 KPA poprzez zaniechanie uchylenia decyzji SKO pomimo niedokładnego wyjaśnienia stanu faktycznego w zakresie szlaków migracyjnych ptaków.
`,
    reviewPrompts: `# Skarga Kasacyjna w Postępowaniu Sądowoadministracyjnym
1. Jakie rygory konstrukcyjne nakłada art. 176 p.p.s.a. na skargę kasacyjną i dlaczego NSA jest ściśle związany granicami skargi kasacyjnej (art. 183 § 1 p.p.s.a.)?
3. Wyjaśnij zasady sporządzania skargi kasacyjnej do Naczelnego Sądu Administracyjnego z uwzględnieniem rygorów przymusu adwokacko-radcowskiego (art. 175 PPSA).
4. Jakie są granice rozpoznania sprawy przez Naczelny Sąd Administracyjny określone w art. 183 § 1 PPSA (związanie granicami skargi kasacyjnej a nieważność postępowania)?`,
  },
  {
    id: 'adm-wyrok-nsa',
    title: 'Prawomocny Wyrok Naczelnego Sądu Administracyjnego w Warszawie',
    category: 'Etap 3: Postępowanie Kasacyjne NSA',
    description:
      'Oddalenie skargi kasacyjnej przez NSA (art. 184 p.p.s.a.). Prawomocność ostateczna, otwarcie drogi do pozwolenia na budowę farmy OZE.',
    rank: 3,
    order: 1,
    coreNotes: `# Wyrok Naczelnego Sądu Administracyjnego w Imieniu Rzeczypospolitej Polskiej
**Sygnatura akt**: III OSK 112/25  
**Naczelny Sąd Administracyjny w Warszawie — Wydział III Izby Ogólnoadministracyjnej**  
**Dnia**: 22 maja 2025 r.

---

## 1. Sentencja Wyroku NSA
Naczelny Sąd Administracyjny po rozpoznaniu na rozprawie w Warszawie skargi kasacyjnej Stowarzyszenia Ekologicznego „Czysta Wieś”:
> **Oddala skargę kasacyjną na podstawie art. 184 ustawy — Prawo o postępowaniu przed sądami administracyjnymi.**

## 2. Motywy Wyroku Naczelnego Sądu Administracyjnego
- Zarzuty skargi kasacyjnej okazały się całkowicie nieuzasadnione.
- WSA w Poznaniu trafnie ocenił charakter prawny decyzji o środowiskowych uwarunkowaniach. Prawidłowo sporządzony raport OOŚ, poddany weryfikacji i zaakceptowany przez RDOŚ, stanowi pełnoprawny dowód w sprawie, którego organ samorządowy nie może zignorować pod wpływem subiektywnego sprzeciwu mieszkańców.
- **Konsekwencje orzeczenia**: Wyrok NSA jest ostateczny i prawomocny. Decyzja środowiskowa SKO w Poznaniu korzysta z przymiotu ostateczności i prawomocności materialnej, stanowiąc nienaruszalną podstawę do wystąpienia przez inwestora z wnioskiem o pozwolenie na budowę farmy wiatrowej.
## 3. Ostateczne Rozstrzygnięcie Naczelnego Sądu Administracyjnego
- Naczelny Sąd Administracyjny w Warszawie — Izba Ogólnoadministracyjna (sygn. akt **III OSK 1892/24**).
- **Sentencja**: Na podstawie art. 184 PPSA Naczelny Sąd Administracyjny **oddala skargę kasacyjną**.
- **Uzasadnienie NSA**:
  - NSA stwierdził, że zarzuty kasacyjne stanowią próbę niedopuszczalnej polemiki z prawidłowymi ustaleniami faktycznymi sądu I instancji. Sąd administracyjny nie zastępuje organów w merytorycznej ocenie raportów przyrodniczych, o ile ocena ta nie nosi cech dowolności.
  - Wariantowanie przedsięwzięcia odpowiadało w pełni rygorom art. 66 Ustawy ooś.
  - Wyrok jest **prawomocny i ostateczny**. Decyzja o środowiskowych uwarunkowaniach stała się w pełni ostateczna i prawomocna, otwierając inwestorowi drogę do uzyskania pozwolenia na budowę farmy wiatrowej.
`,
    reviewPrompts: `# Skutki Orzeczeń NSA
1. Czym skutkuje oddalenie skargi kasacyjnej na podstawie art. 184 p.p.s.a. dla bytu prawnego decyzji administracyjnej i możliwości wznowienia postępowania?
3. Wyjaśnij skutki prawomocności wyroku Naczelnego Sądu Administracyjnego (art. 170 i 171 PPSA) dla organów administracji i innych sądów.
4. W jakich wyjątkowych sytuacjach dopuszczalne jest wznowienie postępowania sądowoadministracyjnego zakończonego prawomocnym wyrokiem NSA (art. 270 i nast. PPSA)?`,
  },
];
