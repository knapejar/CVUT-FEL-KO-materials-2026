# INDEX ZDROJOVÝCH MATERIÁLŮ — Kombinatorická optimalizace (KO)

Účel: rychlá navigace pro tvůrce učebních lekcí. U každého souboru je tabulka „téma/úloha → cca řádky → co tam je“, aby šlo přesně citovat zadání 1:1.

Kořen zdrojů: `C:/Users/Jarda/REPO/FEL/KO/___MATERIALS/`

---

## 1. Přednáškové slidy (`prezentace/`)

### 1.1 `prezentace/01_Basic_KO.md` (1110 ř.) — Úvod do KO

| Téma/úloha | cca řádky | Co tam je |
|---|---|---|
| Organizace kurzu, přednášky, cvičení | 11–92 | Úvodní slidy, harmonogram, co je KO |
| Aplikační oblasti (motivační příklady) | 93–445 | Bin packing, container loading, směny, VRP, SMT, coloring book/multiway cut, satelitní snímky, EV charging, trajektorie |
| Další aplikace (personál, robotika, energie, TSN, AutoStore) | 446–777 | Průmyslové případové studie, e-commerce úlohy A/B |
| Skills + algoritmy + složitost | 778–881 | Jak kurz pokrývá dovednosti; časová složitost algoritmů (slide 47, ř. 853–881) |
| Přehled teorie grafů | 882–1055 | Orientovaný/neorientovaný graf, hrany, izomorfismus, klika, sled/tah/cesta |
| Stromy — ekvivalentní tvrzení + důkaz | 1055–1097 | Slide 61–62: definice stromu, ekvivalence, důkaz |
| Souvislost a stromy v digrafech, shrnutí | 1085–1110 | Slide 63–65 |

### 1.2 `prezentace/02_ILP.md` (1166 ř.) — Celočíselné LP

| Téma/úloha | cca řádky | Co tam je |
|---|---|---|
| Formulace ILP, srovnání ILP vs. LP | 40–61 | Definice problému, rozdíly |
| Příklad ILP1a–c: 2-Partition | 62–123 | Rozhodovací, frakční a optimalizační verze |
| Příklad ILP2a: nejkratší cesty jako ILP | 124–151 | LP/ILP model SP |
| Příklad ILP3: TSP jako ILP | 152–176 | Formulace TSP (subtour eliminace) |
| Enumerativní metody, **Branch & Bound** | 177–305 | Slide 13–16: princip B&B, pseudokód pro ILP maximalizaci, příklad (ř. 282–305) |
| Prostor řešení ILP, zaokrouhlování | 306–357 | Proč relaxace+zaokrouhlení nestačí |
| **Totálně unimodulární matice** | 358–555 | Slide 20–27: 3 postačující podmínky TU, integrální polyedr, consecutive ones (workforce) |
| **Real Estate Investment (ILP formulace)** | 556–609 | Slide 28–29: investice do nemovitostí — proměnné, model |
| Logické formule v ILP (⇒, NOT, XOR) | 610–795 | Slide 30–32: x1⇒x2, x3⇒¬x4, XOR, domácí úkol |
| Cloth Production + binární×celočíselná vazba | 796–935 | Slide 33–36: vazby y≤Mx, výčet hodnot |
| Disjunktivní podmínky (OR, big-M), K z N | 936–1126 | Slide 37–43: aspoň jedna z podmínek, nepreemptivní rozvrhování, K z N |
| ILP solvery, závěr | 1127–1166 | Slide 44–46 |

### 1.3 `prezentace/03_SPT_KO.md` (838 ř.) — Nejkratší cesty

| Téma/úloha | cca řádky | Co tam je |
|---|---|---|
| Formulace, podobné/odlišné problémy | 53–115 | Definice SP, varianty, záporné váhy vs. záporné cykly |
| Sled vs. cesta, trojúhelníková nerovnost | 116–171 | Slide 8–10 |
| Záporný cyklus → NP-těžkost | 172–213 | Slide 11–12: SP se záporným cyklem je NP-hard |
| Bellmanův princip optimality + důkaz | 214–269 | Slide 13–15: princip, Bellmanova rovnice |
| **Dijkstra** — algoritmus, iterace | 270–302 | Slide 16–17: pseudokód, příklad |
| **Korektnost Dijkstry (důkaz)** | 303–345 | Slide 18–20: indukční důkaz korektnosti |
| Bidirectional Dijkstra, A*-idea | 346–417 | Slide 21–25 |
| Příklady SPT.automaton: voda, most, spolehlivost | 418–453 | Slide 26–28: přelévání vody, bridge&torch, max-reliability path |
| **Bellman-Ford** + korektnost + detekce zál. cyklů | 454–578 | Slide 29–34: algoritmus, příklad, důkazy, **detekce záporných cyklů** (ř. 548–568) |
| DP pohled, Truck Journey | 579–640 | Slide 36–39 |
| SP v DAG | 641–693 | Slide 40–42: topologické pořadí, investment |
| **Floyd(-Warshall)** | 694–803 | Slide 43–48: algoritmus, složitost, příklad, fire station/warehouse location |
| Závěr | 804–838 | Shrnutí, literatura |

### 1.4 `prezentace/04_Flows_KO.md` (820 ř.) — Toky v sítích

| Téma/úloha | cca řádky | Co tam je |
|---|---|---|
| Síť, tok, max-flow problém, LP formulace | 43–148 | Slide 3–8; **Flow.scheduling: multiprocesorové rozvrhování s pmtn, rj, dj jako max-flow** (ř. 78–119) |
| **Ford-Fulkerson** — algoritmus + labeling | 149–211 | Slide 9–12: pseudokód, augmenting path, značkování |
| FF — krokovaný příklad + zpětná hrana | 212–280 | Slide 13–14: iterace na příkladu |
| **Min-cut**, integralita, složitost FF | 281–344 | Slide 15–18: max-flow=min-cut, blocking gasoline, celočíselnost |
| Dolní meze: representatives, matrix rounding | 345–363 | Slide 19–20 |
| Feasible flow with balances | 364–401 | Slide 21–23: rozhodovací problém, transportní problém, redukce na max-flow |
| **Initial feasible flow pro FF (nenulové lb)** | 402–454 | Slide 24–27: konstrukce s', t', transformace |
| **Minimum Cost Flow** + cycle canceling | 455–585 | Slide 28–34: LP formulace, reziduální graf, cycle-canceling algoritmus s příkladem |
| Multikomoditní toky | 586–636 | Slide 35–37: LP formulace |
| Párování, přiřazovací problém, **Maďarský alg.** | 637–813 | Slide 38–48: matching M-alternating path, bipartitní matching přes max-flow, assignment přes MCF, maďarský algoritmus s příkladem |

### 1.5 `prezentace/05_Knapsack.md` (234 ř.) — Batoh

| Téma/úloha | cca řádky | Co tam je |
|---|---|---|
| Formulace, frakční batoh (Dantzig) | 35–76 | Slide 3–5: greedy podle ci/wi, důkaz |
| **2-aproximační algoritmus** | 77–113 | Slide 6–7: algoritmus + důkaz faktoru 2 |
| **Dynamické programování (integer costs)** | 114–175 | Slide 8–10: DP přes ceny, tabulka, složitost O(n²·Cmax) |
| FPTAS — zaokrouhlení dat | 176–222 | Slide 11–13: aproximační schéma |
| Shrnutí | 223–234 | Slide 14–15 |

### 1.6 `prezentace/06_TSP.md` (516 ř.) — Obchodní cestující

| Téma/úloha | cca řádky | Co tam je |
|---|---|---|
| Vyřešené instance, formulace, Hamilton | 37–224 | Slide 3–16: motivace, rozhodovací problém |
| Silná NP-těžkost, neexistence pseudopolyn. alg. | 225–264 | Slide 17–18 |
| **Neexistence r-aproximace pro obecný TSP (důkaz)** | 265–310 | Slide 19–21: redukce z HC, důkaz + ilustrace |
| Metrický TSP, nearest neighbor | 311–345 | Slide 22–23 |
| **Double-tree (2-aproximace)** | 346–382 | Slide 24–25: algoritmus + důkaz faktoru 2 |
| **Christofidesův algoritmus (3/2)** | 383–419 | Slide 26–27: algoritmus + důkaz faktoru 3/2 |
| k-OPT lokální prohledávání | 420–496 | Slide 28–31: 2-opt, 3-opt, 4-opt příklady |
| Shrnutí | 497–516 | Slide 32–33 |

### 1.7 `prezentace/07_Sched_KO.md` (1388 ř.) — Rozvrhování

| Téma/úloha | cca řádky | Co tam je |
|---|---|---|
| Motivace (lakovna), terminologie | 45–144 | Slide 3–8: parametry úloh |
| **Grahamova notace α|β|γ** | 145–220 | Slide 9–12: klasifikace |
| 1\|rj,d̃j\|Cmax — NP-těžkost (3-Partition) | 221–272 | Slide 13–15 |
| **Position-based ILP pro 1\|rj,d̃j\|Cmax** | 273–296 | Slide 16 |
| **Bratleyho algoritmus (B&B)** | 297–389 | Slide 17–22: bounding, dekompozice, BRTP test optimality, příklad (ř. 380–389) |
| 1\|prec\|ΣwjCj — B&B s LP | 390–461 | Slide 23–26: ILP formulace, LP bounding |
| 1\|\|Lmax — EDD + optimalita | 462–509 | Slide 27–29 |
| **Hornův algoritmus 1\|pmtn,rj\|Lmax** + optimalita | 510–588 | Slide 30–34: EDF, důkaz |
| Chetto/Silly/Bouchentouf: 1\|pmtn,prec,rj,dj=d̃j\|Lmax | 589–643 | Slide 35–37: modifikace rj', dj', příklad |
| P\|\|Cmax, **McNaughton** P\|pmtn\|Cmax | 644–706 | Slide 38–40 |
| **List Scheduling + LPT (aproximační faktory)** | 707–827 | Slide 41–46: faktor 2−1/m, anomálie, LPT 4/3−1/3m |
| **DP [Rothkopf] pro P\|\|Cmax** | 828–890 | Slide 47–50: stavová DP, příklad |
| **Muntz&Coffman P\|pmtn,prec\|Cmax** | 891–958 | Slide 51–53: úrovňový algoritmus, sdílení kapacity, příklad |
| Project scheduling, Profinet, **temporální omezení** | 959–1141 | Slide 54–64: kladná/záporná lij, relativní časová okna, cykly |
| **Time-indexed ILP pro PS1\|temp\|Cmax** | 1142–1187 | Slide 65–67: proměnné xjt, omezení |
| Relative-order model + srovnání | 1188–1264 | Slide 68–72 |
| PSm,1\|temp\|Cmax, redukce na PS1\|temp\|Cmax | 1265–1364 | Slide 73–78: redukce 1\|rj,d̃j\|Cmax → PS1\|temp\|Cmax (ř. 1297–1316) |
| Multiprocessor task, literatura | 1365–1388 | Slide 79–80 |

### 1.8 `prezentace/08_CP_KO.md` (1148 ř.) — Constraint Programming

| Téma/úloha | cca řádky | Co tam je |
|---|---|---|
| Motivace Sudoku + propagace | 45–198 | Slide 3–15: krokovaná propagace |
| **CSP — formální definice** | 199–300 | Slide 16–23: CSP/CSOP, propagace+search |
| **Hranová konzistence (AC), REVISE** | 301–400 | Slide 25–27: definice AC, procedura REVISE + příklad |
| **AC-3 algoritmus + příklad iterace** | 401–453 | Slide 28–29: pseudokód, fronta hran, krokovaný příklad |
| AC není úplná; Path/GAC/Bounds consistency | 454–560 | Slide 30–35 |
| Backtracking search, branching strategie | 561–647 | Slide 36–40 |
| CSP metodologie, 4-queens, MAC | 648–860 | Slide 41–54: příklad search tree, maintaining AC krok za krokem |
| Restarts, nogoods, globální omezení (alldifferent) | 861–968 | Slide 55–60 |
| Sudoku jako CSP model, srovnání s ILP, nástroje | 969–1148 | Slide 61–67 |

---

## 2. Historická zadání testů (přepisy)

### 2.1 `historicke_zadani_testu.md` (5245 ř.)

Struktura: zdrojové PDF bloky → zkouškové termíny 2021/2023 → **task bank v42** (ř. 2391–5245, vzorová znění + řešení).

| Téma/úloha | cca řádky | Co tam je |
|---|---|---|
| **Wedding plan** (zadání 25-5-2026) | 12–48 | ILP formulace svatebního plánu, ručně bodováno |
| **Dangerous adventure** | 49–78 | SP úloha (zadání) |
| **Edge costs assignment** | 79–111 | Přiřazení cen hran (zadání) |
| **Ford-Fulkerson** + 4 diagramy iterací | 112–229 | Zadání + popisy iterací 0–3 |
| Neexistence r-aproximace TSP | 230–237 | Teoretická otázka |
| **Time-indexed ILP PS1\|temp\|Cmax** | 238–247 | Zadání modelu |
| FF — varianty 0–3 (zadání ZK 25-05-2026) | 248–335 | 4 varianty grafů s l,f,u na hranách |
| r-aprox TSP / Dangerous adventure / PS1\|temp\|Cmax / Wedding plan (2. termín) | 336–365 | Opakování úloh v jiném termínu |
| Info k finální zkoušce (co se zkouší/nezkouší) | 370–390 | Oficiální informace + reálná zadání dle termínů |
| **Penguins on ice** (termín 02.06.2021) | 401–452 | ILP úloha — tučňáci na krách (zadání 1:1) |
| **Edge costs assignment** (02.06.2021) | 453–489 | Zadání 1:1 |
| **Correctness of Dijkstra** (02.06.2021) | 490–530 | Důkazová úloha (zadání 1:1) |
| School Bus Driver Assignment | 531–582 | Párování/matching úloha, části a) b) |
| **CSP — AC-3** (02.06.2021) | 583–651 | Zadání + ruční řešení |
| Time-indexed ILP PS1\|temp\|Cmax | 652–664 | Zadání |
| **Muntz&Coffman** + precedenční graf + řešení | 665–723 | Zadání, graf, ruční studentské řešení |
| **Toys Assignment** (termín 09.07.2021) | 734–849 | ILP/matching úloha hraček (zadání 1:1) |
| **Constrained Shortest Path** + časová expanze | 850–922 | Zadání + diagramy expandované sítě |
| **Initial Feasible Flow pro FF** (2b) | 923–971 | Zadání 1:1 |
| Directed Chinese Postman | 972–979 | Zadání |
| **Knapsack** (09.07.2021) | 980–1018 | Zadání DP úlohy |
| 1\|\|ΣwjCj | 1019–1062 | Rozvrhování na 1 stroji |
| Muntz&Coffman (2. instance) + Gantt | 1063–1153 | Zadání, graf, ruční řešení, Ganttův diagram |
| Minimization of discontinuous functions (21.06.2021) | 1166–1237 | ILP s nespojitou funkcí |
| **Wedding plan** (21.06.2021) + řešení | 1238–1304 | Zadání 1:1 + porovnané řešení |
| **Handling negative cycles in the graph** | 1305–1347 | Zadání — detekce/ošetření záporných cyklů |
| Pruned Chessboard Problem | 1348–1355 | Zadání (domino/šachovnice) |
| **Approximation Factor of Christofides** | 1356–1371 | Důkazová úloha |
| Chetto/Silly/Bouchentouf 1\|pmtn,prec,rj,dj=d̃j\|Lmax | 1372–1396 | Zadání |
| Rothkopf P\|\|Cmax | 1397–1406 | Zadání DP |
| **Loot distribution** (zkoušky 2023) | 1419–1478 | ILP dělení kořisti (zadání 1:1) |
| **Correctness of Dijkstra** (2023) | 1479–1542 | Zadání 1:1 |
| Multiprocessor sched. pmtn, rj, d̃j (max-flow) | 1543–1623 | Zadání + ruční řešení (síť toku) |
| **Knapsack** (2023) + DP tabulka | 1624–1674 | Zadání + ručně vyplněná DP tabulka |
| **Project Scheduling with Temporal Constraints** | 1675–1756 | Zadání + ruční graf a časové diagramy b)–h) |
| **Maximization of absolute value** (\|x1\|+\|x2\|) | 1757–1811 | Zadání + ruční řešení |
| KO Zkoušky 2023 (přehled) | 1822–1854 | Seznam úloh termínů |
| Zkouškové fotky — řešení FF, Christofides, PS1\|temp\|Cmax | 1855–2085 | **Vzorová řešení**: FF (1976–1987), Christofides důkaz (1988–2061), time-indexed ILP (2062–2085) |
| **4-Partition Problem — Solution** | 2086–2105 | Vzorové řešení (silná NP-těžkost / ILP) |
| Bratley — Solution + úrovňový alg. + Gantt | 2106–2313 | Vzorová řešení rozvrhovacích úloh |
| Knapsack / Constrained SP (fotky řešení) | 2314–2372 | Vzorová řešení |
| Ústní zkouška — otázky | 2373–2390 | Zápisky studentů |
| **TASK BANK v42 — obsah** | 2391–2509 | Seznam všech úloh banky |
| Bank 1: **Penguins on ice** + řešení (ILP model) | 2516–2651 | Zadání + úplné vzorové ILP řešení |
| Bank 2–5: max-flow s logickými omezeními, 2-Partition, SP jako ILP, TSP ILP | 2625–2743 | Zadání/studijní úlohy |
| Bank 6: **Toys Assignment** + ILP řešení | 2748–2848 | Zadání + vzorový ILP model |
| Bank 7: School Bus Driver Assignment + řešení | 2849–2970 | Matching formulace |
| Bank 8–9: bipartitní matching přes max-flow, assignment přes MCF | 2971–3034 | Studijní úlohy |
| Bank 10: **Correctness of Dijkstra** + důkaz | 3039–3136 | Zadání + úplný důkaz |
| Bank 11: **Constrained SP by time expansion** + řešení | 3137–3212 | Zadání + konstrukce expandovaného grafu |
| Bank 12: **Edge costs assignment** + řešení | 3213–3317 | Zadání + řešení |
| Bank 13–15: Floyd longest paths, water level, bridge&torch | 3318–3388 | Studijní úlohy |
| Bank 16: **Dangerous adventure** + řešení | 3389–3484 | Zadání + řešení (SP transformace) |
| Bank 17–20: max-reliability, node-weighted SP, Bellman-Ford, DAG | 3485–3607 | Zadání |
| Bank 21: **Ford-Fulkerson** + řešení + min-cut | 3612–3740 | Zadání, řešení, proč nemá augmenting path, min-cut |
| Bank 22: **Initial Feasible Flow pro FF** + řešení | 3741–3823 | Zadání + úplná konstrukce |
| Bank 23–26: feasible flow balances, MCF, Chinese postman, multicommodity | 3824–4052 | Zadání + LP formulace |
| Bank 27: **Knapsack** + řešení | 4057–4157 | Zadání + úplné DP řešení |
| Bank 28–30: DP pro knapsack, frakční (Dantzig), 2-aproximace | 4158–4290 | Studijní úlohy |
| Bank 31: **Neexistence r-aproximace TSP** + důkaz | 4295–4346 | Zadání + důkaz |
| Bank 32: Double-tree | 4347–4387 | Zadání |
| Bank 33: **Christofides** | 4388–4428 | Zadání algoritmu |
| Bank 34: k-OPT | 4429–4474 | Zadání |
| Bank 35: **Time-indexed ILP PS1\|temp\|Cmax** + formulace | 4481–4579 | Zadání + úplná ILP formulace |
| Bank 36: Position-based ILP 1\|rj,d̃j\|Cmax | 4580–4621 | Studijní úloha |
| Bank 37–39: Bratley, Horn, Chetto příklad | 4622–4714 | Zadání |
| Bank 40: **Muntz&Coffman** + data | 4715–4853 | Zadání, notace, precedence |
| Bank 41: **CSP AC-3** + vzorový průběh | 4860–4967 | Zadání + jedna možná iterace AC-3 |
| Bank 42: AC-3 / REVISE (teorie) | 4968–5048 | Studijní úloha |
| Theory appendix: Grahamova notace, volba metody, M&C, time-indexed, position-based, Bratley/Horn | 5049–5245 | Teoretický tahák + „tiny exam memory list“ (5234+) |

### 2.2 `historicke_zadani_testu_2.md` (3416 ř.)

Struktura: Část A — nafocené zkoušky (PDF), Část B — HTML exporty wiki, Část C — poznámky.

| Téma/úloha | cca řádky | Co tam je |
|---|---|---|
| **Penguins on ice** (02.06.2021) | 15–71 | Zadání 1:1 |
| **Edge costs assignment** | 72–104 | Zadání 1:1 |
| **Correctness of Dijkstra** | 105–148 | Zadání 1:1 |
| School Bus Driver Assignment | 149–194 | Zadání |
| **CSP — AC-3** | 195–259 | Zadání 1:1 |
| **Time-indexed ILP PS1\|temp\|Cmax** | 260–272 | Zadání |
| **Muntz&Coffman** + graf + ruční řešení | 273–341 | Zadání + řešení perem |
| **Toys Assignment** (09.07.2021) | 346–474 | Zadání 1:1 (nejúplnější verze) |
| **Constrained SP** + časově expandovaná síť | 475–542 | Zadání + ruční diagramy |
| **Initial Feasible Flow pro FF** (2b) | 543–581 | Zadání 1:1 |
| Directed Chinese Postman | 582–589 | Zadání |
| **Knapsack** | 590–624 | Zadání |
| 1\|\|ΣwjCj | 625–672 | Zadání |
| Muntz&Coffman (2. instance) + Gantt | 673–756 | Zadání + ruční řešení |
| Minimization of discontinuous functions (21.06.2021) | 763–846 | Zadání |
| **Wedding plan** + ruční řešení | 847–913 | Zadání 1:1 + řešení |
| **Handling negative cycles in the graph** | 914–967 | Zadání 1:1 |
| Pruned Chessboard Problem | 968–979 | Zadání |
| **Approximation Factor of Christofides** | 980–995 | Zadání |
| Chetto/Silly/Bouchentouf | 996–1018 | Zadání |
| Rothkopf P\|\|Cmax | 1019–1027 | Zadání |
| **Loot distribution** (2023 rotated) | 1034–1096 | Zadání 1:1 |
| **Correctness of Dijkstra** (2023) | 1097–1154 | Zadání |
| Multiprocessor sched. pmtn (max-flow) + síť | 1155–1238 | Zadání + ruční řešení |
| **Knapsack** + DP tabulka | 1239–1290 | Zadání + ruční tabulka |
| **Project Scheduling with Temporal Constraints** + řešení | 1291–1366 | Zadání + ruční graf a náčrty rozvrhů |
| **Maximization of absolute value** | 1367–1429 | Zadání 1:1 |
| KO Zkoušky 2023 (přehled termínů) | 1430–1465 | Seznam |
| **Loot distribution** (zkouska_2023.pdf) | 1470–1515 | Druhá kopie zadání |
| Correctness of Dijkstra / Multiprocessor / Knapsack | 1516–1705 | Druhé kopie zadání + ruční řešení (DP tabulka 1669–1705) |
| Project Scheduling temp. + řešení / Max. abs. value | 1706–1836 | Druhé kopie + ruční řešení |
| **Část B — HTML wiki testy** (úvod) | 1837–1841 | — |
| 2D cutting, test1 2011 (B&B + nemovitosti) | 1842–1910 | Krátké přepisy |
| test1 2019, **test2 přehled témat 2010–2015** | 1920–1999 | Co bývá v testu 2 (toky, SP) po letech |
| test2 2014/2015/2019 | 2000–2050 | Zadání A/B (min-cost flow, FF) |
| test3-2012 (šachovnice/kuličky + Matlab) | 2051–2174 | Zadání + kód |
| test3-přednáška 2014 (Bratley, Christofides, 2-aprox knapsack) | 2175–2226 | Přepis |
| **test3 souhrn 2010–2015** (rozvrhování) | 2227–2474 | Varianty: Bratley, M&C, Horn, McNaughton, list scheduling |
| test3 2019 (max-reliability, FF) | 2475–2500 | Zadání |
| Úkoly 2014/2015 (data storing, warehousing, Bratley) | 2501–2751 | Domácí úlohy + kódy |
| Úkol 1–7 (Sudoku ILP, call centrum, Dijkstra, toky, Bratley, Gantt) | 2752–3233 | Řešení a kódy z wiki |
| a4m35ko bonus + ILP logické formule | 3234–3290 | Bonus (loupežníci=loot), ILP binárních formulí |
| **Zkouška 24.5.2011** (multikomoditní toky, AC-3, voda, ILP PS, úrovňový alg., 2-aprox knapsack, B&B) | 3291–3343 | Přepis ústní/písemné |
| **Zkouška 31.5.2011** (CSP, NP-těžkost TSP, list scheduling, PSm1→PS1, initial feasible flow, Floyd, plánování výroby) | 3344–3387 | Přepis |
| Část C — poznámky (dnešní termín) | 3388–3416 | Studentské poznámky |

---

## 3. Testy a úlohy (`testy/`)

### 3.1 Oficiální testy a zkoušky

| Soubor | Téma/úloha | cca řádky | Co tam je |
|---|---|---|---|
| `zkouska_2023.md` (203 ř.) | **Loot distribution** | 10–31 | ILP zadání 1:1 |
| | **Correctness of Dijkstra** | 32–58 | Důkazová úloha |
| | Multiprocessor sched. pmtn,rj,d̃j | 59–82 | Max-flow formulace |
| | **Knapsack** (DP) | 83–109 | Zadání + úkoly a) b) |
| | **Project Scheduling temp. constraints** | 110–149 | Zadání b)–h) |
| | **Maximization of absolute value** | 150–203 | \|x1\|+\|x2\| jako ILP |
| `zapoctovy_test_2021_v1.md` (49 ř.) | Pravidla | 9–20 | Organizace testu |
| | **School lunch menu design** | 21–35 | ILP zadání 1:1 (jídelníček) |
| | **Branch and Bound pro ILP** | 36–49 | B&B úloha 1:1 |
| `zapoctovy_test_2021_v2.md` (43 ř.) | **Branch and Bound pro ILP** | 21–37 | B&B úloha (varianta 2) |
| | **4-Partition Problem** | 38–43 | ILP formulace 1:1 |
| `teoreticky_test_final.md` (56 ř.) | Matrix Rounding Problem | 8–24 | Toková úloha |
| | **Production Planning** | 25–44 | ILP/toková úloha 1:1 |
| | Longest paths | 45–56 | SP varianta |
| `master_prakticky_test_2020.md` (73 ř.) | **Production Planning (praktický)** | 8–73 | Kompletní zadání + I/O formát + bodování |
| `prakticky_test_2015.md` (71 ř.) | Pilots training | 8–71 | Praktická ILP/matching úloha + požadavky |
| `prakticky_test_2021.md` (212 ř.) | Knights Placement | 8–212 | Praktická úloha (šachoví jezdci), 3 příklady I/O |
| `a4m35ko__zkouska24052011.md` (46 ř.) | 7 úloh zkoušky 24.5.2011 | 8–46 | Multikomoditní toky, AC-3, odměřování vody, ILP project scheduling, úrovňový alg., 2-aprox knapsack, B&B |
| `a4m35ko__zkouska31052011.md` (43 ř.) | 8 úloh zkoušky 31.5.2011 | 8–43 | CSP, NP-těžkost TSP, list scheduling/LPT, PSm1→PS1, initial feasible flow, Floyd min. cyklus, plánování výroby |

### 3.2 Wiki testy (a4b35ko, stručné přepisy)

| Soubor | Téma/úloha | cca řádky | Co tam je |
|---|---|---|---|
| `a4b35ko__test1.md` (18 ř.) | B&B graficky; **Real estate (nemovitosti) ILP** | 10–18 | Přepis testu 8.3.2011: B&B s mřížkou; nemovitosti + XOR/implikace/2 ze 3 podmínek |
| `a4b35ko__test1_2014.md` (43 ř.) | ILP formulace + B&B | 12–43 | Zadání A/B s řešeními |
| `a4b35ko__test1_2015.md` (10 ř.) | — | — | Prázdná stránka (neexistuje) |
| `a4b35ko__test1_2019.md` (22 ř.) | 2× ILP | 8–22 | Jen TODO, bez obsahu |
| `a4b35ko__test2.md` (90 ř.) | Přehled témat testu 2 (2010–2015) | 8–90 | Toky, SP, min-cost flow po letech + odkazy |
| `a4b35ko__test2_2014.md` (20 ř.) | Min-cost flow / FF | 12–20 | Zadání A + řešení |
| `a4b35ko__test2_2015.md` (20 ř.) | Toky | 10–20 | Zadání A/B |
| `a4b35ko__test2_2019.md` (14 ř.) | — | 8–14 | Jen TODO |
| `a4b35ko__test3-2012.md` (79 ř.) | Kuličky na mřížce (ILP) + Matlab | 8–79 | Zadání + kód řešení |
| `a4b35ko__test3-prednaska.md` (55 ř.) | Bratley, Christofides, 2-aprox knapsack | 12–55 | Test 6.5.2014, varianty A/B |
| `a4b35ko__test3.md` (246 ř.) | **Souhrn testů 3 (rozvrhování) 2010–2015** | 10–246 | Bratley, Muntz&Coffman, Horn, McNaughton, list scheduling — varianty po letech |
| `a4b35ko__test3_15-prednaska.md` (8 ř.) | Info o testu 2015 | 8 | Bratley 4–5 úloh + Christofides/2-aprox knapsack |
| `a4b35ko__test3_2019.md` (28 ř.) | Max-reliability, Ford-Fulkerson | 8–28 | Stručná zadání |
| `a4b35ko__cutting_2d.md` (8 ř.) | 2D řezný problém | 8 | Jen název |

### 3.3 Wiki domácí úkoly (a4b35ko/a4m35ko)

| Soubor | Téma/úloha | cca řádky | Co tam je |
|---|---|---|---|
| `a4b35ko__ukol1.md` (98 ř.) | Sudoku jako ILP | 8–98 | Řešení pro obecné p (Matlab kód) |
| `a4b35ko__ukol2.md` (27 ř.) | Úkol 2 (ILP) | 10–27 | Stručné poznámky 2010–2013 |
| `a4b35ko__ukol3.md` (73 ř.) | **Call centre** (nástin řešení) | 8–73 | Obrázek + nástin ILP řešení 2013/14 |
| `a4b35ko__ukol4.md` (42 ř.) | Dijkstra (kód) | 8–42 | Matlab dykstar.m |
| `a4b35ko__ukol5.md` (73 ř.) | Toky (výsledky) | 8–73 | Výsledky po ročnících + obrázky |
| `a4b35ko__ukol6.md` (8 ř.) | Úkol 6 | 8 | Jen nadpis |
| `a4b35ko__ukol7.md` (50 ř.) | Gantt (rozvrhování) | 8–50 | Funkce pro kreslení Ganttova diagramu |
| `a4b35ko__ukol-2014-1.md` (49 ř.) | Optimized data storing | 8–49 | Zadání + řešení (ILP) |
| `a4b35ko__ukol-2015-5.md` (53 ř.) | Warehousing (min-cost flow) | 8–53 | GMPL/AMPL model |
| `a4b35ko__ukol-2015-6.md` (70 ř.) | Bratleyho algoritmus (kód) | 8–70 | Matlab implementace |
| `a4m35ko__bonus.md` (12 ř.) | Bonus — rozdělení kořisti (loot) | 8–12 | Fotky + zmínka o úloze 4 loupežníků |
| `a4m35ko__ilpbin.md` (46 ř.) | **ILP vyjádření logických formulí** | 8–46 | Převod logických formulí na ILP + příklad ze slidů |

### 3.4 Cvičení a studijní materiály

| Soubor | Téma/úloha | cca řádky | Co tam je |
|---|---|---|---|
| `cv03_ilp_callcenter.md` (113 ř.) | **Call center scheduling (Lab 3, ILP)** | 19–46 | Zadání 1:1: směny operátorů, minimalizace |
| | Transformace absolutní hodnoty | 47–87 | Figure, **trik s \|x\| v ILP** |
| | I/O formát úkolu | 88–113 | Vstup/výstup |
| `hw2_survey_design.md` (136 ř.) | Ford-Fulkerson (Lab 7) | 26–62 | Popis algoritmu |
| | **Survey Design (max-flow s dolními mezemi)** | 63–136 | Zadání HW + příklady |
| `cv09_mcf_objecttracking.md` (254 ř.) | **Cycle canceling pro MCF (Lab 9)** | 19–124 | Algoritmus, reziduální graf, detekce záporného cyklu (Bellman-Ford) |
| | Initial feasible balanced flow | 125–138 | Konstrukce počátečního toku |
| | Object Tracking in Videos (HW3) | 139–254 | Zadání MCF úlohy + I/O |
| `cv10_tsp.md` (326 ř.) | **Lazy constraints pro TSP (Lab 10)** | 13–164 | Subtour eliminace, Gurobi callbacky (Java/Python/C++) |
| | Image unshredding (HW4) | 165–326 | TSP aplikace + I/O formát |
| `ko_souhrn.md` (587 ř.) | Studentský souhrn — ILP, scheduling | 8–63 | ILP triky, Graham |
| | Rothkopf, **time-indexed PS1\|temp\|Cmax**, Horn, převody | 64–177 | Tahák s formulacemi |
| | Úrovňový alg. (M&C) + Gantt + příklad | 178–277 | Ruční popis algoritmu |
| | TSP: Christofides, r-aproximace | 278–356 | Tahák důkazů |
| | Flows: feasible flow, FF, representatives | 357–465 | Náčrty sítí |
| | SP: Floyd, Dijkstra; Knapsack; **AC-3** | 466–587 | Tahák, příklad iterace AC-3 (537–587) |
| `ko_vypisky_studentska_skripta.md` (185 ř.) | Studentská skripta (Musil 2023) — obsah + ILP | 8–185 | Obsah skript, 2-Partition, SP, TSP, B&B (jen začátek) |

---

## 4. Klíčové úlohy banky → primární zdroj

Pravidlo: „primární“ = nejúplnější znění zadání (1:1 citovatelné); sekundární = řešení/teorie.

| Úloha | Primární zdroj (soubor : řádky) | Sekundární (řešení/teorie) |
|---|---|---|
| **Wedding plan** | `historicke_zadani_testu.md` : 1238–1304 (zadání + řešení); čistší kopie : 12–48 | `historicke_zadani_testu_2.md` : 847–913 (ruční řešení) |
| **Toys assignment** | `historicke_zadani_testu_2.md` : 346–474 (nejúplnější) | `historicke_zadani_testu.md` : 2748–2848 (bank — vzorový ILP model); : 734–849 |
| **Loot distribution** | `testy/zkouska_2023.md` : 10–31 | `historicke_zadani_testu.md` : 1419–1478; `historicke_zadani_testu_2.md` : 1034–1096 a 1470–1515 |
| **Penguins on ice** | `historicke_zadani_testu.md` : 2516–2651 (bank — zadání + úplné ILP řešení) | `historicke_zadani_testu.md` : 401–452; `historicke_zadani_testu_2.md` : 15–71 |
| **Edge costs assignment** | `historicke_zadani_testu.md` : 3213–3317 (bank — zadání + řešení) | : 79–111, 453–489; `historicke_zadani_testu_2.md` : 72–104 |
| **Dangerous adventure** | `historicke_zadani_testu.md` : 3389–3484 (bank — zadání + řešení) | : 49–78, 342–349 |
| **Constrained SP** (time expansion) | `historicke_zadani_testu.md` : 3137–3212 (bank — zadání + řešení) | : 850–922, 2333–2372; `historicke_zadani_testu_2.md` : 475–542 |
| **Handling negative cycles** | `historicke_zadani_testu.md` : 1305–1347 | `historicke_zadani_testu_2.md` : 914–967; teorie: `prezentace/03_SPT_KO.md` : 172–213, 548–568 |
| **Correctness of Dijkstra** | `historicke_zadani_testu.md` : 3039–3136 (bank — zadání + úplný důkaz) | : 490–530, 1479–1542; `testy/zkouska_2023.md` : 32–58; teorie: `prezentace/03_SPT_KO.md` : 303–345 |
| **TSP r-aprox** (neexistence) | `historicke_zadani_testu.md` : 4295–4346 (bank — zadání + důkaz) | teorie: `prezentace/06_TSP.md` : 265–310 |
| **Christofides** | `historicke_zadani_testu.md` : 4388–4428 (bank); důkaz faktoru: : 1988–2061 (řešení z fotek) | : 1356–1371; `historicke_zadani_testu_2.md` : 980–995; teorie: `prezentace/06_TSP.md` : 383–419 |
| **Ford-Fulkerson** | `historicke_zadani_testu.md` : 3612–3740 (bank — zadání, řešení, min-cut) | : 112–229, 248–335, 1976–1987; teorie: `prezentace/04_Flows_KO.md` : 149–280 |
| **Initial feasible flow** | `historicke_zadani_testu.md` : 3741–3823 (bank — zadání + konstrukce) | : 923–971; `historicke_zadani_testu_2.md` : 543–581; teorie: `prezentace/04_Flows_KO.md` : 402–454 |
| **Knapsack DP** | `historicke_zadani_testu.md` : 4057–4157 (bank — zadání + úplné DP řešení) | : 980–1018, 1624–1674; `testy/zkouska_2023.md` : 83–109; teorie: `prezentace/05_Knapsack.md` : 114–175 |
| **Time-indexed ILP PS1\|temp\|Cmax** | `historicke_zadani_testu.md` : 4481–4579 (bank — zadání + formulace) | : 238–247, 652–664, 2062–2085 (řešení); teorie: `prezentace/07_Sched_KO.md` : 1142–1187 |
| **Muntz&Coffman** | `historicke_zadani_testu.md` : 4715–4853 (bank) | : 665–723, 1063–1153 (ruční řešení + Gantt); `historicke_zadani_testu_2.md` : 273–341, 673–756; teorie: `prezentace/07_Sched_KO.md` : 891–958 |
| **AC-3** | `historicke_zadani_testu.md` : 4860–4967 (bank — zadání + vzorový průběh) | : 583–651; `historicke_zadani_testu_2.md` : 195–259; teorie: `prezentace/08_CP_KO.md` : 401–453; tahák: `testy/ko_souhrn.md` : 537–587 |
| **B&B ILP** | `testy/zapoctovy_test_2021_v1.md` : 36–49 a `testy/zapoctovy_test_2021_v2.md` : 21–37 | teorie: `prezentace/02_ILP.md` : 221–305; `testy/a4b35ko__test1.md` : 10–13 |
| **Maximalizace \|x1\|+\|x2\|** | `testy/zkouska_2023.md` : 150–203 | `historicke_zadani_testu.md` : 1757–1811 (s řešením); `historicke_zadani_testu_2.md` : 1367–1429, 1785–1836; trik s \|x\|: `testy/cv03_ilp_callcenter.md` : 47–87 |
| **School lunch menu** | `testy/zapoctovy_test_2021_v1.md` : 21–35 | — |
| **4-Partition** | `testy/zapoctovy_test_2021_v2.md` : 38–43 | řešení: `historicke_zadani_testu.md` : 2086–2105 |
| **Production planning** | `testy/teoreticky_test_final.md` : 25–44 | praktická verze: `testy/master_prakticky_test_2020.md` : 8–73; zmínka: `testy/a4m35ko__zkouska31052011.md` : 37–40 |
| **Real estate** | `prezentace/02_ILP.md` : 556–609 (slide 28–29, model) | zkouškový přepis: `testy/a4b35ko__test1.md` : 14–18 |
| **Call center** | `testy/cv03_ilp_callcenter.md` : 19–113 (zadání + I/O) | nástin řešení: `testy/a4b35ko__ukol3.md` : 8–73 |

---

## 5. Poznámky pro tvůrce lekcí

- **Task bank v42** (`historicke_zadani_testu.md` : 2391–5245) je nejcennější část — obsahuje zadání ve znění zdroje („source wording“) + vzorová řešení; pro citaci 1:1 preferovat tuto sekci.
- `historicke_zadani_testu_2.md` Část A (ř. 8–1836) obsahuje tytéž zkoušky 2021/2023 přepsané z fotek **včetně ručních studentských řešení** — vhodné pro ukázky postupu.
- Teoretický kontext (definice, věty, důkazy) vždy brát z `prezentace/0X_*.md`; rozsahy řádků v sekci 1.
- Theory appendix banky (`historicke_zadani_testu.md` : 5049–5245) shrnuje Grahamovu notaci a volbu rozvrhovací metody — vhodný základ pro lekci o rozvrhování.
