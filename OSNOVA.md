# KO — Kompletní osnova přípravy na zkoušku

**Datum vytvoření:** 9. 6. 2026
**Cíl:** Zkouška z předmětu **Kombinatorická optimalizace (KO)** dne **15. 6. 2026**.
**Cílová skupina:** úplný začátečník („nic neumím"), 5 dní na přípravu, chce vše do detailu.

---

## 0. Jak s touto osnovou pracovat

Tato osnova tě provede od nuly až ke kompletnímu zvládnutí písemky KO (**6 úloh, 40 bodů**: první 4 úlohy po 7 b, poslední 2 po 6 b; odpovědi smí být **česky**). Je rozdělená na **KAPITOLY** (řazené podle očekávaných bodů ve zkoušce — nejdřív děláš to, co nejvíc vynáší) a každá kapitola na malé **LEKCE**.

**Princip lekcí:** Každá lekce zavádí **PŘESNĚ JEDNU novou věc**. Lekce jsou malé schválně — máš 5 dní a jsi začátečník. Když je něco těžké, je to rozbité na víc lekcí. Lehká lekce může být jen úloha s kompletním řešením. Žádný koncept se nepoužije dřív, než byl v nějaké předchozí lekci zaveden.

**Postup práce:**
1. Jdi shora dolů (kapitoly jsou seřazené podle bodové návratnosti).
2. U každé lekce si přečti „Jedna nová věc" a „Key takeaways", pak propočítej její úlohy.
3. Když narazíš na odkaz `[L2.1]` nebo `[K3]` a ten koncept neumíš, **vrať se** na danou lekci/kapitolu.
4. U **[FOTO]** úloh propočítej na papír a pošli foto ke kontrole a opravě.

### Schéma ID

`L<kapitola>.<pořadí>`, např. `L1.3` = 1. kapitola, 3. lekce. Na lekce a kapitoly se odkazuje v hranatých závorkách: `[L1.3]`, `[K2]`. Úlohy z banky mají ID `T01`–`T60` plus pojmenované varianty (`souhrn-…`, `cv…`, `a4*`, `zap…`, `teor…`, `ilpbin…`).

### LEGENDA značek

| Značka | Význam |
|---|---|
| **[MUST]** | Lekce klíčová pro nějaký bodový slot. Nevynechávej. |
| **[NICE]** | Lekce odložitelná při časové tísni **bez ztráty bodového slotu**. |
| **[FOTO]** | Vyvrcholující kontrolní úloha — propočítej na papír a pošli foto ke kontrole. |
| `[Lx.y]`, `[Kn]` | Odkaz na prerekvizitní lekci / kapitolu. |

### Vysvětlení 4-dílného formátu úloh

Každá samostatná úloha „na papír" (banka ~41–42 úloh) má předepsanou **4-dílnou strukturu**. V této osnově je úloha jen **ohlášena** (odkaz + zdroj); plný obsah se generuje později, lekci po lekci:

- **(a) Nápověda 1 — Co je v zadání?** — lidská parafráze zadání.
- **(b) Co k tomu budeme potřebovat?** — odkazy `[L…]`/`[K…]` na prerekvizity; když je neumíš, dostuduj.
- **(c) Jak nad úlohou uvažovat?** — myšlenkový postup, návodné otázky.
- **(d) Úplné řešení** — v rozbalovacím `<details>`.

### Vysvětlení [FOTO] checkpointů

Úlohy označené **[FOTO]** jsou **vyvrcholující kontrolní úlohy** slotových kapitol K1–K6. NEjsou to nutně poslední lekce kapitoly — jedna kapitola jich může mít víc (např. K3 má tři: L3.2, L3.6, L3.10, rozeseté tam, kde vyvrcholí jednotlivá témata). Propočítáš je **na papír** a pošleš **foto** ke kontrole a opravě. To je tvůj test, že danou techniku umíš. Prerekvizitní kapitola K0 ani doplňková K7 nemají [FOTO]. Celkem je **16 FOTO checkpointů**, všechny na K1–K6 (viz souhrnná tabulka). *(Pokud chceš striktně 15, lze L5.5 B&B degradovat na běžný checkpoint — B&B padá řidčeji než ostatní sloty.)*

### Ověřená fakta o zkoušce KO

- **Pisemka:** 6 úloh, 40 bodů (4× 7 b + 2× 6 b). Odpovědi smí být česky.
- Zadavatel **doc. Hanzálek RECYKLUJE** zadání. Banka známých úloh ~41–42.
- **Pevná šablona 6 slotů** (oba doložené termíny 2026 ji drží).
- **Doložené termíny 2026:** 25. 5. 2026 a 1. 6. 2026 (obsah níže); **3. termín 8. 6. 2026: obsah NENÍ znám** (data chybí — viz „Mezery a rizika").
- **Ústní** (dobrovolná, na zlepšení známky): Bellman-Ford + záporný cyklus, P\|pmtn,rj,dj\| přes toky, navázání binární na celočíselnou v ILP, big-M, AC-3, Bratley, DAG v O(n), TUM→celočíselnost z LP, proč vadí záporné cykly.

### Pevná šablona zkoušky

Oba doložené termíny 2026 ji drží; vzorek je malý (3 termíny 2026, z toho 8. 6. neznámý):

| Slot | Téma | Výskyt | Body |
|---|---|---|---|
| 1 | ILP modelování | 100 % (pozorováno 2/2 + historie) | 7 |
| 2 | Nejkratší cesty | 90 % (odhad z historie) | 7 |
| 3 | Důkaz / teorie | 95 % (odhad z historie) | 7 |
| 4 | Toky a řezy | ~100 % (pozorováno 2/2, malý vzorek) | 7 |
| 5 | Rozvrhování | 100 % (pozorováno 2/2 + historie) | 6 |
| 6 | CSP (AC-3) / 2. SP úloha | ~55 % (odhad z historie) | 6 |

> **Pozn. k výskytům:** „pozorováno X/Y" = empiricky z doložených termínů 2026 (malý vzorek 2). „odhad" = z širší historie zadání. Slot 4 je pozorován v obou doložených termínech 2026, ale 2 vzorky nestačí na rozlišení 100 % vs „téměř 100 %" — alokuj čas, jako by padl jistě.

---

## 1. Přehledová tabulka kapitol (řazeno podle očekávaných bodů)

| Pořadí | Kapitola | Téma | Slot | Pravděp. × body | Počet lekcí | [FOTO] checkpointy |
|---|---|---|---|---|---|---|
| #1 | **K1** | ILP modelování | 1 | 100 % × 7 | 15 | L1.9, L1.12, L1.14 |
| #2 | **K2** | Nejkratší cesty | 2 | 90 % × 7 | 18 | L2.5, L2.8, L2.18 |
| #3 | **K3** | Důkaz / teorie | 3 | 95 % × 7 | 16 | L3.2, L3.6, L3.10 |
| #4 | **K4** | Toky a řezy | 4 | ~100 % × 7 (2/2, malý vzorek) | 15 | L4.4, L4.5 |
| #5 | **K5** | Rozvrhování | 5 | 100 % × 6 | 16 | L5.0, L5.3, L5.5, L5.10 |
| #6 | **K6** | CSP / AC-3 | 6 | 55 % × 6 | 3 | L6.3 |
| (prereq) | **K0** | Základy grafů + MST + matching + ILP | — | — | 8 | — |
| #7 | **K7** | Knapsack (doplňková) | 3/doplněk | nízká × 6 | 2 | — (foto volitelně) |
| | **Celkem** | | | | **93 lekcí** | **16 FOTO (vše na K1–K6)** |

> **Pořadí kapitol** je dáno očekávanými body (pravděpodobnost × body), nejvyšší napřed. K0 je prerekvizitní (řadí se mimo bodové pořadí, ale dělá se jako první). K7 je doplňková (nízká návratnost).

---

# K0 — Základní jazyk grafů a ILP (prerekvizitní minikapitola)

> **Proč hned na začátku:** Sama o sobě nedává body, ALE bez ní nerozumíš ničemu dál. Je to nejmenší možný společný základ. Projeď rychle, vracej se sem podle odkazů.

### L0.1 — Co je graf [MUST]
- **Jedna nová věc:** Graf = vrcholy + hrany; orientovaný vs. neorientovaný.
- **Key takeaways:**
  - Graf G = (V, E); hrana spojuje dva vrcholy; orientovaná hrana má směr (z → do).
  - Hrana může mít **váhu/cenu** c(e) a **kapacitu** u(e).
  - Neorientovanou hranu lze nahradit dvěma orientovanými.
- **Prerekvizity:** —

### L0.2 — Stupeň vrcholu [MUST]
- **Jedna nová věc:** In-degree δ⁻(v) a out-degree δ⁺(v).
- **Key takeaways:**
  - δ⁺(v) = počet hran z v ven; δ⁻(v) = počet hran do v.
  - Součet všech stupňů = 2|E|; počet vrcholů lichého stupně je sudý.
  - Pro toky a Eulerovský tah budeme porovnávat δ⁺ a δ⁻ („balance" vrcholu).
- **Prerekvizity:** [L0.1]

### L0.3 — Cesta, sled, tah, cyklus [MUST]
- **Jedna nová věc:** Rozdíl mezi cestou (path) a sledem (walk).
- **Key takeaways:**
  - **Sled (walk):** posloupnost hran, vrcholy se smí opakovat.
  - **Cesta (path):** sled bez opakování vrcholů.
  - **Tah (trail):** sled bez opakování hran.
  - **Cyklus/kružnice:** uzavřená cesta (začátek = konec).
- **Prerekvizity:** [L0.1]

### L0.4 — Strom, kostra, les, DAG [MUST]
- **Jedna nová věc:** Strom = souvislý graf bez cyklů; DAG = orientovaný acyklický graf.
- **Key takeaways:**
  - Strom na n vrcholech má přesně n−1 hran; mezi dvěma vrcholy je právě jedna cesta.
  - **Kostra (spanning tree)** = strom obsahující všechny vrcholy grafu (libovolná, nemusí být nejlevnější).
  - **DAG** = orientovaný graf bez orientovaného cyklu; má **topologické uspořádání** (vrcholy seřadíš na přímku, hrany jdou zleva doprava).
- **Prerekvizity:** [L0.3], [L0.2]

### L0.5 — Minimální kostra (MST) jako spočítaný objekt [MUST]
- **Jedna nová věc:** MST = kostra s nejmenším součtem vah hran.
- **Key takeaways:**
  - **MST (minimum spanning tree)** = kostra [L0.4] minimalizující Σ c(e); počítá se hladově (Kruskal/Prim).
  - MST je jednoznačně určená délka, i když konkrétní strom může být víc (při remízách vah).
  - MST je **dolní mez** pro mnoho úloh nad grafem — tento fakt rozvineme u TSP v [L3.8b].
- **Prerekvizity:** [L0.4]

### L0.6 — Párování a perfektní párování (pojem) [MUST]
- **Jedna nová věc:** Matching = množina hran bez společného vrcholu.
- **Key takeaways:**
  - **Párování (matching) M** = podmnožina hran, žádné dvě nesdílí vrchol.
  - **Perfektní párování** = každý vrchol je pokrytý právě jednou hranou (existuje jen pro sudý počet vrcholů).
  - **Min-weight perfect matching** = perfektní párování s nejmenším součtem vah hran; tady je to jen POJEM — výpočet (přes toky) přijde až v [L4.9] (cardinality) / [L4.12] (min-weight perfect).
- **Prerekvizity:** [L0.1]

### L0.7 — Co je ILP a LP relaxace [MUST]
- **Jedna nová věc:** ILP = lineární program s celočíselnými proměnnými.
- **Key takeaways:**
  - ILP: max/min cᵀx za podmínek Ax ≤ b, x **celé**. NP-těžké.
  - **LP relaxace** = zahodím celočíselnost → řeší se polynomiálně, ale řešení může vyjít necelé.
  - Zaokrouhlení LP řešení může být **infeasible** (mimo přípustnou oblast).
- **Prerekvizity:** —

### L0.8 — Binární proměnná [MUST]
- **Jedna nová věc:** Proměnná x ∈ {0,1} reprezentuje rozhodnutí ano/ne.
- **Key takeaways:**
  - xᵢ = 1 ⟺ „věc i je vybrána / aktivní"; xᵢ = 0 ⟺ „není".
  - Součet binárních = počet vybraných věcí; `Σ xᵢ = 1` znamená „přesně jedna".
  - `Σ xᵢ ≤ k` = „nejvýše k", `Σ xᵢ ≥ k` = „aspoň k".
- **Prerekvizity:** [L0.7]

---

# K1 — ILP modelování (Slot 1)

> **Pořadí #1:** Slot 1 padá ve **100 %** termínů, 7 bodů. Nejvyšší jistota bodů. Wedding plan (25.5.2026) i Toys (1.6.2026) sem patří. ILP je navíc prerekvizita pro ILP úlohy v jiných slotech (TSP, rozvrhování, toky).

### L1.1 — Cílová funkce a základní omezení [MUST]
- **Jedna nová věc:** Jak zapsat „maximalizuj/minimalizuj" + lineární omezení.
- **Key takeaways:**
  - Cíl: `max Σ cᵢ xᵢ` nebo `min …`; omezení jsou lineární nerovnosti/rovnosti.
  - **Rozpočtové (kapacitní) omezení:** `Σ wᵢ xᵢ ≤ B`.
  - Vždy uveď: proměnné (a jejich typ/obor), cílovou funkci, omezení.
- **Prerekvizity:** [L0.7], [L0.8]
- **Úlohy (cvičná):** 2-Partition jako ILP (T09, banka #3 / test1_2014).

### L1.2 — Přiřazovací (assignment) struktura [MUST]
- **Jedna nová věc:** Proměnné x_{ij} a dvojí součtové omezení.
- **Key takeaways:**
  - x_{ij} = 1 ⟺ „objekt i přiřazen na pozici/do skupiny j".
  - `Σ_j x_{ij} = 1` (každé i právě jednou), `Σ_i x_{ij} = 1` (každé j obsazeno právě jednou).
  - Tohle je kostra většiny rozdělovacích úloh.
- **Prerekvizity:** [L1.1]

### L1.3 — Modelování logiky: implikace, XOR, AND [MUST]
- **Jedna nová věc:** Logické vztahy mezi rozhodnutími jako lineární omezení.
- **Key takeaways:**
  - Implikace x ⟹ y: `y ≥ x`.
  - XOR (právě jedno z A, B): `x_A + x_B = 1`.
  - „A a B ⟹ C": `x_C ≥ x_A + x_B − 1`.
  - Negace proměnné: `(1 − x)`.
  - „2 ze 3" (aspoň dvě z A,B,C): `x_A + x_B + x_C ≥ 2`.
- **Prerekvizity:** [L0.8]
- **Úlohy:**
  - ILP vyjádření logických formulí — implikace/XOR přes maxtermy (ilpbin-logic, ilpbin.md / test1).
  - Real estate — XOR a 2-ze-3 (T08 / a4b-realestate-ilp, test1 / test1_2019).

### L1.4 — big-M: disjunkce omezení [MUST]
- **Jedna nová věc:** „Aspoň jedno z omezení platí" pomocí big-M a binárního přepínače.
- **Key takeaways:**
  - Pro „aspoň 1 ze 2 omezení": ke každému přidej `± M·y`, kde y ∈ {0,1}, a `Σy ≤ 1` (nebo dle počtu).
  - M = dostatečně velká konstanta (větší než maximální možná hodnota výrazu).
  - „Aspoň K z N podmínek": `Σ yᵢ ≤ N − K` (porušené podmínky uvolněné přes M).
  - big-M dělá přípustný prostor **nekonvexní** (to je smysl — modeluje „nebo").
- **Prerekvizity:** [L0.8], [L1.1]

### L1.5 — Navázání binární na spojitou/celočíselnou (aktivace) [MUST]
- **Jedna nová věc:** yᵢ = 0 ⟺ xᵢ = 0 přes `xᵢ ≤ M·yᵢ`.
- **Key takeaways:**
  - „Pokud používám x (x>0), zapni přepínač y": `x ≤ M·y`.
  - „Pokud y=1, vynuť x>0": `x ≥ y` (nebo `x ≥ ε·y`).
  - Tohle je základ fixed-charge (fixních nákladů). *(Téma ústní.)*
- **Prerekvizity:** [L1.4]

### L1.6 — Fixed-charge (nespojitá / fixní náklady) [MUST]
- **Jedna nová věc:** Funkce f(x)=0 pro x=0, jinak f(x)=A+Bx.
- **Key takeaways:**
  - Zaveď binární y „aktivace": náklad = `A·y + B·x`, s vazbou `x ≤ M·y` [L1.5].
  - Fixní náklady (pronájem stroje, pořízení) = klasický chyták.
- **Prerekvizity:** [L1.5]
- **Úlohy:**
  - Minimalizace nespojité funkce, |x1−x2| ∈ {0,6} (T06, KO_21_06_2021).
  - Production Planning 5 produktů — fixní náklady, sudost, disjunkce (teor-s2-production5, teoreticky_test_final).

### L1.7 — Po částech konstantní funkce přes intervaly [MUST]
- **Jedna nová věc:** Cena závisí na intervalu, do kterého spadá počet (3 intervaly přes y₁,y₂,y₃).
- **Key takeaways:**
  - Pro každý interval binární yₖ, `Σ yₖ = 1` (vybírám právě jeden interval).
  - Hodnota proměnné svázána s vybraným intervalem přes big-M [L1.4].
  - Cena = `Σ (cena_k · yₖ)`.
- **Prerekvizity:** [L1.4], [L0.8]

### L1.8 — Rozdíl / omezení rozptylu (max−min jedné množiny, |rozdíl| ≤ D) [MUST]
- **Jedna nová věc:** Modelování |a − b| ≤ D a rozdílu max−min **přes JEDNU pevnou množinu hodnot** pomocí pomocných proměnných.
- **Key takeaways:**
  - `|a − b| ≤ D` ⟺ dvě omezení `a − b ≤ D` a `b − a ≤ D`.
  - max přes pomocnou proměnnou M_max: `M_max ≥ hodnota_j` pro všechna j z dané množiny.
  - min přes m_min: `m_min ≤ hodnota_j`; pak `M_max − m_min ≤ P_max`.
  - **Rozsah platnosti:** tato konstrukce zachycuje max/min přes **jednu konkrétní množinu hodnot** (např. součty skupin). Min/max **přes všechny kombinace voleb** je JINÁ konstrukce — viz [L1.13], nezaměňuj!
- **Prerekvizity:** [L1.1]
- **Úlohy:** 4-Partition / banknotes — rozdělit na skupiny tak, aby rozdíl max−min součtů ≤ daný limit (zap2021v2-s3-4partition, zapoctovy_test_2021_v2).

### L1.9 — VYVRCHOLENÍ: Wedding plan [FOTO] [MUST]
- **Jedna nová věc:** Složení všech ILP technik do jedné úlohy.
- **Key takeaways:** Skládáš [L1.1] rozpočet, [L1.7] krokový pronájem dle intervalu, [L1.8] omezení rozdílu stran.
- **Prerekvizity:** [L1.1], [L1.7], [L1.8]
- **Úlohy:** **Wedding plan** [FOTO] (T01, KO-25-5-2026 / zkoušky 2023 / KO_21_06_2021).

### L1.10 — Linearizace absolutní hodnoty (min vs. max) [MUST]
- **Jedna nová věc:** |x| v cíli přes z ≥ x, z ≥ −x — a kdy to opravdu stačí i pro maximalizaci.
- **Key takeaways:**
  - **Minimalizace** `min |x|`: zaveď z, `z ≥ x`, `z ≥ −x`, minimalizuj z. (Vždy validní — solver z stlačuje dolů.)
  - **Maximalizace** `max |x|` přes pouhé `z ≥ x`, `z ≥ −x` **OBECNĚ NEFUNGUJE**, a to ANI s prostými mezemi (bounds) na proměnných. U maximalizace solver zvolí z = max(x, −x) na jeho horní mezi → pokud x může být kladné i záporné, z se „nepřilepí" na |x| a hodnota se nadhodnotí. **Pouhé bounds (např. −5000 ≤ x ≤ 1000) NESTAČÍ.**
  - **Kdy zápis bez přepínače STAČÍ i pro max:** jen když je **znaménko x jednoznačně určené ostatními omezeními**. Příklad ze vzorového řešení 2023 (str. 6): tam bylo `x1 = 4·x4` a `x4 ≥ 1`, takže `x1 ≥ 4 > 0` je VŽDY kladné → |x1| = x1 je vynucené znaménkem, ne obecnou platností triku. Prošlo to kvůli vynuceným znaménkům, NE kvůli bounds.
  - **Obecná max |x| s proměnnou neurčitého znaménka** vyžaduje binární přepínač znaménka (big-M [L1.4]) — viz [L1.11]. Toto je nebezpečná polopravda: nikdy nemodeluj `max |x|` bez přepínače, dokud si neověříš, že znaménko x je vynucené.
- **Prerekvizity:** [L1.1], [L1.4]
- **Úlohy:**
  - Call center scheduling — min Σ|d_i − pokrytí| (cv03-callcenter-absval, cv03_ilp_callcenter.md).
  - Maximalizace |x1|+|x2| (T07 / zk2023-s6-absval-ilp, zkouska_2023).

### L1.11 — Poměrová a max-z-více podmínka (kombinační) [MUST]
- **Jedna nová věc:** `x1 = 4·x4` (poměr) a `x1 ≥ max(2x2, x3)` — navazuje na [L1.10].
- **Key takeaways:**
  - Poměr x1/x4 = 4 ⟺ `x1 = 4·x4` (lineární).
  - `x ≥ max(a,b)` ⟺ `x ≥ a` AND `x ≥ b`.
  - „x4 ≠ 0" se znaménkovým přepínačem z přes big-M [L1.4] — toto je ten případ, kde přepínač opravdu potřebuješ (a stejně tak u obecné `max |x|` z [L1.10]).
- **Prerekvizity:** [L1.4], [L1.10]

### L1.12 — Implikace mezi skupinami + výběr aspoň jednoho [MUST]
- **Jedna nová věc:** „skupina4 ⟹ skupina3" a „aspoň jeden ze skupiny 1 a 2" přes big-M.
- **Key takeaways:**
  - Příslušnost do skupiny = binární vektor; „aspoň jeden": `Σ ≥ 1`.
  - Implikace přes součtové/big-M omezení [L1.3], [L1.4].
- **Prerekvizity:** [L1.3], [L1.4], [L1.8]
- **Úlohy:** **Loot distribution / Alibaba** [FOTO] (T04 / zk2023-u4-loot, 2023_rotated / zkouska_2023).

### L1.13 — „Worst-case" omezení přes všechny kombinace [MUST]
- **Jedna nová věc:** „Pro libovolnou kombinaci (1 položka/den) platí omezení" = omezit nejhorší (minimální) dosažitelnou hodnotu přes VŠECHNY kombinace voleb.
- **Key takeaways:**
  - **POZOR — toto NENÍ totéž co max/min jedné množiny z [L1.8].** V [L1.8] počítáš max/min přes jednu pevnou množinu čísel. Tady musí nerovnost platit **pro každou možnou volbu** (každou kombinaci „1 jídlo na den"), což je kombinatoricky úplně jiná konstrukce.
  - **Klíčová myšlenka:** když má omezení platit pro *libovolnou* volbu, stačí ho zaručit pro **nejhorší (nejmenší dosažitelnou) hodnotu**. Pokud uhlídáš nejhorší případ, jsou ostatní automaticky v pořádku.
  - **Mini-příklad:** každý den vybíráš 1 jídlo z nabídky; chceš `protein každé volby ≥ p_min`. Nemusíš vypisovat exponenciálně mnoho kombinací — pro každý den vynuť `(protein každého nabízeného jídla daného dne) ≥ p_min` přes binární výběr, čímž omezíš to nejhorší jídlo. Tím je každá kombinace ≥ p_min „zdarma".
  - Linearizace výběru přes binární proměnné [L1.2] + big-M [L1.4]; rozdíl/rozptyl mezi dny případně přes [L1.8].
- **Prerekvizity:** [L1.2], [L1.4], [L1.8]
- **Úlohy:** School lunch menu design — worst-case nutriční minimum (zap2021v1-s2-lunch-ilp, zapoctovy_test_2021_v1).

### L1.14 — Sousednost a prostorová omezení; matching uvnitř ILP [MUST]
- **Jedna nová věc:** Modelování „vedle sebe" (immediate left/next) a zákazu krajních pozic.
- **Key takeaways:**
  - Sousednost boxů přes vztahy indexů a disjunkci (t4 vedle t5 NEBO t6) přes big-M [L1.4].
  - Zákaz krajních pozic = vynulování příslušných x_{ij}.
  - Assignment problém [L1.2] lze přečíst jako perfect matching [L0.6] (most do K4).
- **Prerekvizity:** [L1.2], [L1.4], [L0.6]
- **Úlohy:** **Toys assignment** [FOTO] — část a) ILP (T02, KO-1-6-2026 / KO_09_07_2021). *(Část b) matching → [K4].)*

### L1.15 — Časově/pozičně indexované proměnné v ILP (přehled) [MUST]
- **Jedna nová věc:** Proměnná indexovaná časem/pozicí: x_{i,t} = 1 ⟺ akce i nastane v čase t.
- **Key takeaways:**
  - Start s_i = `Σ_t t·x_{i,t}`; „začíná právě jednou": `Σ_t x_{i,t} = 1`.
  - Kolize/zdroj: v čase t běží max jedna úloha.
  - Tato technika se naplno použije v rozvrhování [K5] a u TSP/penguins.
- **Prerekvizity:** [L1.2]
- **Úlohy (náročnější, doplňkové):**
  - Penguins on ice (T03, KO_02_06_2021).
  - N koní / N dam na šachovnici — ILP (a4b-knights-csp, prakticky_test_2021). *(NICE — doplňková.)*
  - Warehousing / data storing / 2D cutting (T60, ukol-2015-5 / ukol-2014-1 / cutting_2d). *(NICE — doplňková.)*

---

# K2 — Nejkratší cesty (Slot 2)

> **Pořadí #2:** Slot 2 padá v **~90 %**, 7 bodů. Doložené 2026: Dangerous adventure, Edge costs, Constrained SP. Obsahuje i běh Dijkstry a Bellman-Forda (jejich důkazy jsou ve Slotu 3, ale běh je tady). Dijkstra je prerekvizita toků a matchingu.

### L2.1 — Záporné váhy ano, záporné cykly ne [MUST]
- **Jedna nová věc:** Kdy nejkratší cesta vůbec existuje.
- **Key takeaways:**
  - Záporné váhy hran jsou OK, **záporný cyklus** ale dělá SP nedefinovaným (−∞).
  - Neorientovaná záporná hrana = záporný cyklus → jen nezáporné u neorientovaných.
  - Hledáme cestu (bez opakování), ne sled [L0.3].
- **Prerekvizity:** [L0.3]

### L2.2 — Bellmanův princip optimality + Bellmanova rovnice [MUST]
- **Jedna nová věc:** Podcesta nejkratší cesty je sama nejkratší (optimal substructure) a Bellmanova rovnice.
- **Key takeaways:**
  - **Optimal substructure:** nejkratší cesta se skládá z nejkratších segmentů.
  - **Bellmanova rovnice:** l(s,w) = min_v { l(s,v) + c(v,w) }.
  - Tato vlastnost je důvod, proč funguje hladová/DP konstrukce vzdáleností (Dijkstra, BF, DAG, Floyd).
- **Prerekvizity:** [L2.1]

### L2.3 — Relaxace hrany [MUST]
- **Jedna nová věc:** Algoritmický krok relaxace hrany.
- **Key takeaways:**
  - **Relaxace hrany:** `if l(w) > l(v) + c(v,w) then l(w) ← l(v)+c(v,w); p(w) ← v`.
  - Relaxace je společné jádro Dijkstry [L2.4], Bellman-Forda [L2.12], DAG-SP [L2.13] i Floyda [L2.14].
  - Udržujeme dva vektory: vzdálenost l(·) a předchůdce p(·) pro rekonstrukci cesty.
  - Vyplývá přímo z Bellmanovy rovnice [L2.2] — relaxace je „lokální krok" k jejímu splnění.
- **Prerekvizity:** [L2.2]

### L2.4 — Dijkstrův algoritmus (běh) [MUST]
- **Jedna nová věc:** Label-setting algoritmus pro nezáporné váhy.
- **Key takeaways:**
  - Udržuj vektor vzdáleností l a předchůdců p [L2.3]; opakovaně vyber neuzavřený vrchol s nejmenším l a relaxuj jeho hrany.
  - Funguje JEN pro nezáporné váhy.
  - Složitost O(n²) nebo O(|E| log|V|) s prioritní frontou.
- **Prerekvizity:** [L2.3]
- **Úlohy:** Dijkstra — oditerovat na grafu o 8 uzlech, vektory l a p (a4b-dijkstra-iter, test2 / test2_2015).

### L2.5 — Pořadí expanze a tie-breaking (citlivost hran) [MUST]
- **Jedna nová věc:** Jaké pořadí Dijkstra expanduje a které hrany jsou „necitlivé".
- **Key takeaways:**
  - Vrcholy se uzavírají v pořadí rostoucího l; remízy se řeší tie-breakem.
  - Hrana, která neleží na žádné napjaté cestě, se dá měnit „volně" v rozmezí.
  - Reverzní úloha: navrhni váhy tak, aby pořadí/cesta odpovídaly zadání.
- **Prerekvizity:** [L2.4]
- **Úlohy:** **Edge costs assignment** [FOTO] (T14, KO-25-5-2026 / KO_02_06_2021).

### L2.6 — Split vrcholu (cena na vrcholu → na hraně) [MUST]
- **Jedna nová věc:** Vrchol s cenou rozdělím na vstupní a výstupní s hranou nesoucí cenu.
- **Key takeaways:**
  - v → v_in, v_out; hrana v_in→v_out s cenou vrcholu; všechny vstupy do v_in, výstupy z v_out.
  - Umožní Dijkstrovi pracovat s cenou na vrcholech.
- **Prerekvizity:** [L2.4]
- **Úlohy:** Node-weighted shortest path (T19, banka #18).

### L2.7 — Transformace součinu na součet: −log [MUST]
- **Jedna nová věc:** Maximalizace součinu pravděpodobností = minimalizace součtu −log.
- **Key takeaways:**
  - Spolehlivost cesty = součin p(e); `max Πp = min Σ(−log p)`.
  - −log p ≥ 0 pro p ∈ (0,1] → lze Dijkstra [L2.4].
  - Funguje, dokud váhy po transformaci zůstanou nezáporné.
- **Prerekvizity:** [L2.4]
- **Úlohy:**
  - Maximum Reliability Path (T18, banka #17).
  - Nejspolehlivější spojení — převod + modifikace Dijkstry (souhrn-reliability-dijkstra).

### L2.8 — VYVRCHOLENÍ: Dangerous adventure [FOTO] [MUST]
- **Jedna nová věc:** Kombinace −log [L2.7] a split vrcholu [L2.6] v jedné úloze.
- **Key takeaways:** Pravděpodobnost přežití na hranách i na vrcholech → −log + split → Dijkstra → zpětný převod.
- **Prerekvizity:** [L2.6], [L2.7]
- **Úlohy:** **Dangerous adventure** [FOTO] (T12, KO-25-5-2026 / zkoušky 2023).

### L2.9 — Modelování reálné úlohy jako SP (DAG / stavový prostor) [MUST]
- **Jedna nová věc:** „Co je vrchol, co je hrana" u slovní úlohy.
- **Key takeaways:**
  - DAG úlohy: vrcholy = časové body/stavy, hrany = příležitosti s cenou (investice, směny).
  - Maximalizace zhodnocení = nejdelší cesta v DAG.
  - Definuj přesně: stav (vrchol), přechod (hrana), cena.
- **Prerekvizity:** [L2.2], [L0.4]
- **Úlohy:**
  - Mr. Dow Jones — investice jako SP (souhrn-dowjones-spt).
  - Bus driver směny — formulace pro Dijkstru (souhrn-busdriver-dijkstra).

### L2.10 — Stavový automat jako graf [MUST]
- **Jedna nová věc:** Stav = konfigurace problému; přechod = povolený tah s cenou.
- **Key takeaways:**
  - Vrcholy = všechny dosažitelné stavy (kdo kde je, kolik vody v nádobě…).
  - Hrany = přechody; cena = čas/krok; pak BFS/Dijkstra k cílovému stavu.
- **Prerekvizity:** [L2.4], [L2.9]
- **Úlohy:**
  - Bridge and Torch (T16, banka #15).
  - Measurement of Water Level / nádoby (T17 / a4m-watermeasure, banka #14 / zkouska24052011).

### L2.11 — Časově expandovaná síť (constrained SP) [MUST]
- **Jedna nová věc:** Kopie vrcholů pro každý časový okamžik t = 0…τ.
- **Key takeaways:**
  - Hrana (i,j) s dobou τ_ij vede z (i,t) do (j, t+τ_ij).
  - Omezení doby průchodu ≤ τ = hledání cesty v expandované síti.
  - I v silně souvislém grafu cesta v limitu τ nemusí existovat.
- **Prerekvizity:** [L2.4], [L2.9]
- **Úlohy:** **Constrained shortest path** (T13, KO-1-6-2026 / KO_09_07_2021).

### L2.12 — Bellman-Fordův algoritmus + detekce záporného cyklu (běh) [MUST]
- **Jedna nová věc:** Relaxace všech hran |V|−1× a extra průchod na detekci cyklu.
- **Key takeaways:**
  - Bellman-Ford zvládá záporné hrany; relaxuj [L2.3] všechny hrany |V|−1 krát.
  - Pokud i v |V|-tém průchodu jde relaxovat → existuje **záporný cyklus**.
  - Label-correcting, složitost O(nm). *(Téma ústní; žebříček důkazů #4 — DŮKAZ korektnosti viz [L3.7].)*
- **Prerekvizity:** [L2.3], [L2.1]
- **Úlohy:** Bellman-Ford — pseudokód, korektnost, detekce cyklu (T22, banka #19).

### L2.13 — SP v DAG v O(V+E) [MUST]
- **Jedna nová věc:** V acyklickém grafu stačí relaxovat v topologickém pořadí.
- **Key takeaways:**
  - Topologicky seřaď [L0.4], pak relaxuj [L2.3] hrany v tomto pořadí — jeden průchod.
  - Lineární čas O(n+m); funguje i pro nejdelší cesty (žádné cykly).
- **Prerekvizity:** [L2.3], [L0.4]
- **Úlohy:** Shortest Paths in DAGs (T23, banka #20). *(Téma ústní.)*

### L2.14 — Floyd-Warshall (all-pairs) + nejdelší cesty [NICE]
- **Jedna nová věc:** Matice vzdáleností přes všechny dvojice, iterace přes mezilehlý vrchol k.
- **Key takeaways:**
  - l^k_{ij} = min(l^{k−1}_{ij}, l^{k−1}_{ik} + l^{k−1}_{kj}); iteruj k = 1…n.
  - **Nejdelší cesta:** vynásob všechny váhy −1, spusť Floyd, výsledek znovu −1.
  - Inicializace: mimo diagonálu ∞ (pozor — i na diagonále ∞, pokud hledáš cyklus); l_ii < 0 signalizuje záporný cyklus.
  - *(Floyd NENÍ plně dokázán na slidech — méně pravděpodobný jako „dokažte". Detaily Floyda jsou odložitelné při časové tísni.)*
- **Prerekvizity:** [L2.3]
- **Úlohy:**
  - All-to-all longest paths Floyd, 4 uzly (T15, banka #13 / test2).
  - Floyd — nejdelší cesty, 4 iterace (teor-s3-floyd-longest, teoreticky_test_final).
  - Floyd — matice l a p po iteracích, čtení min cyklu (souhrn-floyd-longest-paths).

### L2.15 — Skalování vah a zachování nejkratší cesty [MUST]
- **Jedna nová věc:** Co posun (+h) a co násobení (×k) vah dělá s nejkratší cestou.
- **Key takeaways:**
  - **Posun všech vah o +h NEzachová** nejkratší cestu — protože cena cesty roste úměrně **počtu hran** [L0.2] na cestě (delší cesta dostane víc +h). Protipříklad: dvě s→t cesty různého počtu hran.
  - **Násobení vah k× (k>0) zachová** nejkratší cestu (každá cena se škáluje stejně, délka se násobí k).
  - Toto je typická „dokaž/vyvrať" podotázka.
- **Prerekvizity:** [L2.2], [L0.2]

### L2.16 — Dijkstra a počet hran cesty [MUST]
- **Jedna nová věc:** Dijkstra minimalizuje cenu, NE počet hran.
- **Key takeaways:**
  - Nejkratší (nejlevnější) cesta nemusí mít nejmenší počet hran — protipříklad: levná cesta o 3 hranách vs. dražší o 1 hraně.
  - Pokud chceš min počet hran, dej všem hranám váhu 1.
- **Prerekvizity:** [L2.4]

### L2.17 — Nejdelší cesta: kdy je těžká a kdy snadná [MUST]
- **Jedna nová věc:** Složitost nejdelší cesty závisí na znaménku vah a (a)cykličnosti.
- **Key takeaways:**
  - Nejdelší cesta při **kladných** vahách v obecném grafu je **NP-těžká** (souvisí s hamiltonovskou cestou).
  - Při **všech záporných** vahách: invertuj váhy (×−1) → nejkratší cesta nezáporným algoritmem.
  - V **DAG** [L0.4] je nejdelší cesta vždy snadná (jeden průchod [L2.13]).
- **Prerekvizity:** [L2.1], [L2.13]

### L2.18 — VYVRCHOLENÍ: Teorie záporných cyklů / 5 výroků [FOTO] [MUST]
- **Jedna nová věc:** Složení mikro-výsledků [L2.15]–[L2.17] do souhrnné argumentační úlohy.
- **Key takeaways:** Každý výrok rozhodni důkazem nebo protipříkladem; opírej se o skalování [L2.15], počet hran [L2.16] a složitost nejdelší cesty [L2.17].
- **Prerekvizity:** [L2.15], [L2.16], [L2.17], [L2.12]
- **Úlohy:**
  - **Handling negative cycles** [FOTO] (T20, KO_21_06_2021).
  - 5 výroků o nejkratších cestách (souhrn-sp-5vyroku).

---

# K3 — Důkaz / teorie (Slot 3)

> **Pořadí #3:** Slot 3 padá v **~95 %**, 7 bodů. Žebříček důkazů (dle pravděpodobnosti pro 15.6.): **#1 Christofides 3/2, #2 Dijkstra, #3 TSP r-aproximace, #4 Bellman-Ford** — pořadí lekcí v K3 tomuto žebříčku odpovídá (Dijkstra → TSP r-aprox → Christofides jako vyvrcholení → Bellman-Ford na konci). Dijkstru i Bellman-Ford už umíš běhově z [K2]; tady jde o DŮKAZY. Nejvíc „learnable" bodů, protože slidy dokazují plně.

### L3.1 — Co je aproximační algoritmus a faktor r [MUST]
- **Jedna nová věc:** Definice r-aproximace.
- **Key takeaways:**
  - Pro minimalizaci: J^A(I) ≤ r·J*(I); pro maximalizaci: J^A(I) ≥ (1/r)·J*(I), r ≥ 1.
  - r = 1 znamená optimum; r = 2 nejvýše dvakrát horší.
  - „Dokázat faktor" = ohraničit J^A vůči J* nějakou dolní/horní mezí.
- **Prerekvizity:** —

### L3.2 — Důkaz korektnosti Dijkstry (ŽEBŘÍČEK #2) [FOTO] [MUST]
- **Jedna nová věc:** Indukce přes uzavíranou množinu R.
- **Key takeaways:**
  - Invariant: když se v zařadí do R, je l(v) správná nejkratší vzdálenost.
  - Klíč: jakákoli jiná cesta do v vede přes vrchol mimo R s ≥ l(v) (nezápornost hran!).
  - Bez nezáporných hran argument padá.
  - Toto indukční schéma (invariant přes rostoucí množinu / počet iterací) znovu použijeme u Bellman-Forda [L3.7].
- **Prerekvizity:** [L2.4], [L2.2]
- **Úlohy:** **Correctness of Dijkstra** [FOTO] (T21 / zk2023-u6-dijkstra-proof, KO-1-6-2026 / KO_02_06_2021 / zkouska_2023).

### L3.3 — Hamiltonovská kružnice a NP-úplnost (základ pro TSP) [MUST]
- **Jedna nová věc:** Rozhodovací problém HC: existuje kružnice procházející všechny vrcholy?
- **Key takeaways:**
  - HC je NP-úplný; certifikát (pořadí vrcholů) se ověří polynomiálně.
  - Z HC budeme **redukovat** na TSP (důkaz NP-těžkosti a neexistence aproximace).
- **Prerekvizity:** [L0.3]

### L3.4 — TSP jako ILP s eliminací podtras (MTZ) [MUST]
- **Jedna nová věc:** ILP model okruhu + jak zabránit podcyklům.
- **Key takeaways:**
  - x_{ij}=1 ⟺ hrana v okruhu; `Σ_j x_{ij}=1` (leave once), `Σ_i x_{ij}=1` (enter once).
  - **MTZ subtour elimination:** s_i + c_{ij} − (1−x_{ij})·M ≤ s_j (pomocné s_i).
  - Alternativa: množinová `Σ_{i,j∈S} x_{ij} ≤ |S|−1` (exponenciálně mnoho → lazy constraints).
- **Prerekvizity:** [L3.3], [L1.4], [L1.15]
- **Úlohy:**
  - TSP jako ILP s MTZ (T11, banka #5 / test1).
  - TSP s time windows — ILP (souhrn-tsp-timewindows-ilp).
  - TSP přes lazy constraints (cv10-tsp-lazy, cv10_tsp.md).

### L3.5 — TSP je silně NP-těžký (redukce z HC, váhy 1/2) [MUST]
- **Jedna nová věc:** Konstrukce TSP instance z grafu pro HC.
- **Key takeaways:**
  - Úplný graf; c=1 pokud hrana v G, c=2 jinak.
  - HC v G existuje ⟺ optimum TSP = n.
  - „Silně" = váhy malé (1,2), takže žádný pseudopolynom. algoritmus (pokud P≠NP).
- **Prerekvizity:** [L3.3], [L3.4]
- **Úlohy:** Důkaz NP-těžkosti TSP (T56 / a4m-tsp-npobtiznost, zkouska31052011).

### L3.6 — Neexistence r-aproximace pro obecný TSP (ŽEBŘÍČEK #3) [FOTO] [MUST]
- **Jedna nová věc:** Sporem: r-aproximace by rozhodla HC.
- **Key takeaways:**
  - Váhy hran: 1 (hrana v G), jinak 2+(r−1)·n.
  - Pokud HC existuje, OPT = n; jinak OPT > r·n.
  - r-aproximace by je rozlišila → rozhodla HC v poly čase → P=NP. Spor.
- **Prerekvizity:** [L3.5], [L3.1]
- **Úlohy:** **Neexistence r-aproximace TSP** [FOTO] (T39 / souhrn-tsp-raprox-proof, KO-25-5-2026 / zkoušky 2023).

### L3.7 — Korektnost Bellman-Forda (ŽEBŘÍČEK #4) [MUST]
- **Jedna nová věc:** Indukce „po k iteracích l^k(w) ≤ délka nejkratšího sledu o ≤ k hranách".
- **Key takeaways:**
  - Po |V|−1 iteracích je l správné (nejkratší cesta má ≤ |V|−1 hran).
  - Detekce záporného cyklu: další možná relaxace = cyklus [L2.12].
  - Stejná indukční kostra jako u Dijkstry [L3.2] (invariant přes počet iterací); běh viz [L2.12].
- **Prerekvizity:** [L2.12], [L2.2], [L3.2]
- **Úlohy:** Bellman-Ford — část „korektnost + detekce záporného cyklu" (T22 část důkaz, banka #19); kontext cycle canceling (cv09-cyclecanceling-bellman). Propočítej malou instanci a sleduj invariant l^k po jednotlivých iteracích. *(Téma ústní.)*

### L3.8a — Metrický TSP + trojúhelníková nerovnost + shortcutting [MUST]
- **Jedna nová věc:** Trojúhelníková nerovnost a co umožňuje (zkracování přes opakované vrcholy).
- **Key takeaways:**
  - **Metrický TSP:** c(i,j) ≤ c(i,k)+c(k,j) pro všechny trojice (trojúhelníková nerovnost).
  - **Shortcutting:** projdu-li vrchol, který už byl navštíven, mohu ho přeskočit — díky troj. nerovnosti to délku NEzvýší.
  - Tato vlastnost je důvod, proč jdou Euler tahy převést na Hamiltonovský okruh bez zhoršení.
- **Prerekvizity:** [L3.3]

### L3.8b — MST jako dolní mez (OPT ≥ c(MST)) [MUST]
- **Jedna nová věc:** Optimální TSP okruh je vždy aspoň tak drahý jako MST.
- **Key takeaways:**
  - **OPT ≥ c(MST):** odeber jednu hranu z optimálního okruhu → vznikne kostra (cesta přes všechny vrcholy), jejíž cena ≥ c(MST [L0.5]). Tedy c(MST) ≤ c(okruh bez hrany) ≤ OPT.
  - Toto je centrální dolní mez pro VŠECHNY aproximace TSP (double-tree [L3.9] i Christofides [L3.10]).
- **Prerekvizity:** [L3.3], [L0.5]

### L3.8c — Eulerovský tah a zdvojení hran (sudý stupeň) [MUST]
- **Jedna nová věc:** Eulerovský tah existuje ⟺ všechny vrcholy mají sudý stupeň; zdvojení hran to zajistí.
- **Key takeaways:**
  - **Eulerovský tah** (projde každou hranu právě jednou) existuje v souvislém grafu ⟺ každý vrchol má sudý stupeň [L0.2].
  - **Zdvojení všech hran** udělá každý stupeň sudým → vznikne Eulerovský multigraf; jeho cena = 2× cena původních hran.
  - Eulerovský tah pak lze shortcuttingem [L3.8a] převést na Hamiltonovský okruh.
- **Prerekvizity:** [L3.8a], [L0.2]

### L3.9 — Double-tree algoritmus (2-aproximace metrického TSP) [MUST]
- **Jedna nová věc:** MST → zdvojení → Euler → shortcutting; faktor 2.
- **Key takeaways:**
  - c(okruh) ≤ c(Euler) = 2·c(MST) ≤ 2·OPT (využívá OPT ≥ c(MST) z [L3.8b], zdvojení z [L3.8c], shortcutting z [L3.8a]).
  - Plně dokázáno na slidech.
- **Prerekvizity:** [L3.8a], [L3.8b], [L3.8c], [L3.1]
- **Úlohy:** Double-tree 2-aproximace (T40, banka #32).

### L3.10 — VYVRCHOLENÍ: Christofides 3/2 (ŽEBŘÍČEK #1) [FOTO] [MUST]
- **Jedna nová věc:** MST + perfektní párování lichých vrcholů místo zdvojení.
- **Key takeaways:**
  - W = vrcholy lichého stupně v MST [L0.5] (je jich sudě); M = min-weight perfect matching [L0.6] na W.
  - **Min-weight perfect matching zde bereme jako POJEM [L0.6]** — pro důkaz faktoru stačí jeho existence a vlastnost c(M) ≤ OPT/2; konkrétní výpočet přes toky je až v [L4.12], pro TENTO důkaz ho nepotřebuješ. Nepanikař, že „neumím spočítat matching".
  - Klíč: c(M) ≤ OPT/2 (optimální okruh se na W rozpadne na 2 párování).
  - 3/2·OPT ≥ c(MST) + c(M) = c(Euler) ≥ c(okruh) → faktor 3/2 (využívá OPT ≥ c(MST) z [L3.8b], Euler/shortcutting z [L3.8c]/[L3.8a]).
  - 5 kroků důkazu — nestačí napsat faktor, je třeba odvodit PROČ 3/2.
- **Prerekvizity:** [L3.8a], [L3.8b], [L3.8c], [L3.9], [L0.5], [L0.6]
- **Úlohy:** **Christofides 3/2 — důkaz faktoru** [FOTO] (T41 / souhrn-christofides-proof, KO_21_06_2021 / zkoušky 2023).

### L3.11 — Knapsack: fractional greedy + 2-aproximace (důkaz faktoru) [MUST]
- **Jedna nová věc:** Greedy podle c/w a důkaz faktoru 2.
- **Key takeaways:**
  - **Fractional knapsack:** seřaď klesající c_i/w_i, plň greedy — optimální pro zlomkovou variantu.
  - Σ_{1..h} c_j (až po první nevejdoucí položku) je horní mez celočíselného optima.
  - 2-aproximace: lepší z {položky 1..h−1} a {samotná nejcennější} ≥ OPT/2.
- **Prerekvizity:** [L3.1], [L0.8]
- **Úlohy:**
  - Fractional Knapsack greedy (T37, banka #29).
  - 2-Approximation Knapsack — důkaz (T38 / a4m-knapsack-2aprox, banka #30 / zkouska24052011).

### L3.12 — Modelování logických výroků a teorie ILP/TUM (ústní opora) [MUST]
- **Jedna nová věc:** Totální unimodularita ⟹ celočíselné LP optimum.
- **Key takeaways:**
  - TUM matice: každá podmatice má determinant 0/±1.
  - TUM ⟹ vrcholy LP polytopu jsou celočíselné ⟹ ILP = LP.
  - Incidenční matice SP/toků je TUM → proto LP dá celočíselné řešení.
  - *(Témata ústní: TUM→celočíselnost, big-M, navázání binární.)*
- **Prerekvizity:** [L0.7], [L1.4]
- **Úlohy:** Shortest Paths jako ILP — formulace + důkaz celočíselnosti přes TUM incidenční matice (T10, banka #4 / test1). *(Cross-ref: tok-jako-ILP koncept v [L4.14].)*

### L3.13 — Ekvivalence definic stromu (teorie, ústní opora) [NICE]
- **Jedna nová věc:** 7 ekvivalentních charakterizací stromu.
- **Key takeaways:**
  - Souvislý + acyklický ⟺ souvislý s n−1 hranami ⟺ mezi každými dvěma vrcholy jedna cesta atd.
  - Plně dokázáno na slidech (méně časté, ale férové).
- **Prerekvizity:** [L0.4]

### L3.14 — k-OPT local search (mikro-lekce, nízká priorita) [NICE]
- **Jedna nová věc:** Lokální vylepšování okruhu výměnou k hran.
- **Key takeaways:**
  - 2-OPT: odstraň 2 hrany okruhu, přepoj druhou možností, přijmi pokud kratší.
  - Heuristika bez záruky faktoru; doplněk k aproximacím [L3.9], [L3.10].
- **Prerekvizity:** [L3.8a]
- **Úlohy:** k-OPT local search (T42, nízká pravděpodobnost na písemce). *(Odložitelné.)*

---

# K4 — Toky a řezy (Slot 4)

> **Pořadí #4:** Slot 4 padá v **obou** doložených termínech 2026 (pozorováno 2/2, malý vzorek), 7 bodů. Ford-Fulkerson (25.5.), Residents & council (1.6.). Matching a min-cost flow patří sem. Prerekvizita: Bellman-Ford [L2.12] pro cycle canceling. Tady se taky algoritmicky doplní párování, jehož POJEM byl zaveden v [L0.6]. **Pozn.:** rozvrhování přes toky (P|pmtn,rj,dj|) bylo přesunuto do [K5] (jako L5.0), protože používá rozvrhovací notaci r_j,d_j,pmtn zavedenou až v [L5.1].

### L4.1 — Síť, tok, Kirchhoffův zákon [MUST]
- **Jedna nová věc:** Síť (G, l, u, s, t) a přípustný tok.
- **Key takeaways:**
  - Tok f na hranách; **zachování toku** ve vnitřním vrcholu: vstup = výstup.
  - Přípustnost: l(e) ≤ f(e) ≤ u(e) (dolní mez l, kapacita u).
  - Hodnota toku = čistý odtok ze zdroje s.
- **Prerekvizity:** [L0.1], [L0.2]

### L4.2 — Reziduální graf a augmentující cesta [MUST]
- **Jedna nová věc:** Kde je volná kapacita — vpřed i vzad.
- **Key takeaways:**
  - **Forward hrana:** lze přidat tok, pokud f < u.
  - **Backward hrana:** lze ubrat tok (poslat zpět), pokud f > l.
  - **Augmentující cesta** = cesta s→t v reziduálním grafu; γ = min reziduální kapacita.
- **Prerekvizity:** [L4.1]

### L4.3 — Ford-Fulkerson: iterativní augmentace (běh) [MUST]
- **Jedna nová věc:** Opakovaná augmentace toku podél augmentujících cest.
- **Key takeaways:**
  - Opakuj: najdi augmentující cestu [L4.2], pošli γ, aktualizuj (i přes zpětné hrany).
  - Počet iterací O(|E|·F) (Edmonds-Karp BFS → O(VE²)).
  - Konči, když v reziduálním grafu už není cesta s→t.
- **Prerekvizity:** [L4.2]

### L4.4 — Řez a věta max-flow/min-cut [MUST]
- **Jedna nová věc:** Minimální řez a jeho rovnost s maximálním tokem.
- **Key takeaways:**
  - **Řez (A, V\A):** s∈A, t∉A; kapacita = Σ u(δ⁺) − Σ l(δ⁻).
  - **Max-flow = min-cut**; min řez = hrany z dosažitelných do nedosažitelných vrcholů po skončení F-F [L4.3].
  - *(max-flow/min-cut na slidech jen přes LP dualitu — méně jako „dokažte".)*
- **Prerekvizity:** [L4.3]
- **Úlohy:** **Ford-Fulkerson iterace + min řez** [FOTO] (T24 / souhrn-ff-iterace-mincut, KO-25-5-2026 / zkoušky 2023).

### L4.5 — Modelování přiřazení jako tok (vrstvená síť) [MUST]
- **Jedna nová věc:** source → vrstva → vrstva → sink s kapacitami vyjadřujícími omezení.
- **Key takeaways:**
  - Kapacity hran kódují reálná omezení (max členů, velikost skupiny…).
  - Feasibilita = nasycení hran ze source (či do sink).
  - Třívrstvý bipartitní vzor: s → kategorie A → lidé → kategorie B → t.
- **Prerekvizity:** [L4.1], [L4.4]
- **Úlohy:**
  - **Residents & council** [FOTO] (T30 / souhrn-residents-council-flow, KO-1-6-2026 / test2_2015).
  - Dining problem — max flow + feasibilita (souhrn-dining-maxflow).

### L4.6 — Feasible flow with balances [MUST]
- **Jedna nová věc:** Vrcholy se zdroji/spotřebiči b(v); existence přípustného toku.
- **Key takeaways:**
  - Σ b(v) = 0; přidej super-source S' a super-sink T' s hranami dle b(v).
  - Přípustný tok existuje ⟺ max tok nasytí všechny b-hrany.
- **Prerekvizity:** [L4.4]
- **Úlohy:** Feasible Flow with Balances — rozhodovací úloha (T26, banka #23).

### L4.7 — Počáteční přípustný tok při nenulových dolních mezích [MUST]
- **Jedna nová věc:** Transformace (G, l, u) na úlohu s nulovými LB a balancemi.
- **Key takeaways:**
  - Substituce f(e) = f'(e) + l(e); nová kapacita u'(e) = u(e) − l(e).
  - Indukované balance b(v) = Σ l(do v) − Σ l(z v); přidej cirkulaci t→s s ∞.
  - Pak řeš jako feasible flow with balances [L4.6].
- **Prerekvizity:** [L4.6], [L4.2]
- **Úlohy:**
  - Initial Feasible Flow (T25, KO_09_07_2021 / KO_02_06_2021).
  - Počáteční přípustný tok pro F-F (souhrn-ff-feasibleflow). *(Téma ústní.)*

### L4.8 — Matrix rounding přes toky [MUST]
- **Jedna nová věc:** Zaokrouhlení matice se zachováním řádkových a sloupcových součtů.
- **Key takeaways:**
  - source → řádky → sloupce → sink; kapacity [floor, ceil] každé hodnoty.
  - Celočíselnost toku (TUM [L3.12]) zaručí celočíselné zaokrouhlení.
  - Feasibilní pro libovolný vstup.
- **Prerekvizity:** [L4.6], [L3.12]
- **Úlohy:**
  - Rounding matice 3×3 (T59, test2 2013/14).
  - Matrix Rounding 3×3 — formulace + TUM + feasibilita (teor-s1-matrix-rounding, teoreticky_test_final).

### L4.9 — Bipartitní matching přes max flow [MUST]
- **Jedna nová věc:** Maximální párování [L0.6] = max tok s jednotkovými kapacitami.
- **Key takeaways:**
  - Přidej s → levá strana, pravá strana → t; všechny kapacity 1.
  - Velikost max toku = velikost maximálního párování.
  - **M-augmentující cesta:** M je maximální ⟺ neexistuje.
- **Prerekvizity:** [L4.4], [L0.6]
- **Úlohy:**
  - Maximum Cardinality Matching přes max flow (T31, banka #8).
  - Pruned Chessboard / domino jako matching (T34, KO_21_06_2021).

### L4.10 — Minimum Cost Flow + reziduální graf s cenami [MUST]
- **Jedna nová věc:** Tok s minimální cenou; ceny v reziduálním grafu.
- **Key takeaways:**
  - (G, l, u, c, b): minimalizuj Σ f(e)·c(e) při zachování balance.
  - Reziduální graf: zpětná hrana má cenu −c(e).
  - Max flow, SP i Chinese postman jsou speciální případy MCF.
- **Prerekvizity:** [L4.7], [L4.2]
- **Úlohy:** Minimum Cost Flow — formulace a řešení (T27, banka #24).

### L4.11 — Cycle canceling (řešení MCF) [MUST]
- **Jedna nová věc:** Hledej záporný cyklus v reziduálním grafu a augmentuj podél něj.
- **Key takeaways:**
  - Začni přípustným tokem [L4.7]; najdi záporný cyklus Bellman-Fordem [L2.12].
  - Augmentuj o δ = min reziduální kapacita na cyklu; opakuj, dokud existuje.
- **Prerekvizity:** [L4.10], [L2.12]
- **Úlohy:** Cycle canceling — reziduální graf + Bellman-Ford (cv09-cyclecanceling-bellman, cv09_mcf_objecttracking.md). *(Souvisí s ústním.)*

### L4.12 — Assignment problem přes MCF + min-weight perfect matching [MUST]
- **Jedna nová věc:** Min weight perfect matching [L0.6] = min-cost flow.
- **Key takeaways:**
  - Úplný bipartitní graf, jednotkové kapacity, ceny d_ij; řeš jako MCF [L4.10].
  - *(Hungarian algoritmus je ze zkoušky VYLOUČEN.)*
  - Párování i-tý nejkratší ranní s i-tým nejdelším odpoledním — diskutuj optimalitu (důkaz/protipříklad).
- **Prerekvizity:** [L4.10], [L4.9]
- **Úlohy:**
  - Assignment Problem přes MCF (T32, banka #9).
  - School Bus Driver Assignment — matching + párování (T33, KO_02_06_2021 / KO_09_07_2021).
  - **Toys assignment část b)** — min weight perfect matching (T02b, KO-1-6-2026).

### L4.13 — Directed Chinese Postman jako MCF [NICE]
- **Jedna nová věc:** Vyvážení in/out stupňů → MCF → Eulerovský tah.
- **Key takeaways:**
  - Projít každou hranu ≥1×; nevyvážené vrcholy (δ⁺≠δ⁻) jsou zdroje/spotřebiče.
  - MCF určí, kolikrát se hrany duplikují; z výsledku sestav Eulerovský tah [L3.8c].
- **Prerekvizity:** [L4.10], [L3.8c]
- **Úlohy:** Directed Chinese Postman (T28, KO_09_07_2021 / KO_02_06_2021). *(Odložitelné.)*

### L4.14 — Max flow s logickými omezeními (ILP) [MUST]
- **Jedna nová věc:** Tok zapsaný jako ILP s extra logikou.
- **Key takeaways:**
  - Tok lze zapsat jako ILP (zachování + kapacity) a přidat logiku (OR/implikace) přes big-M [L1.4].
  - Tok-jako-ILP umožní omezení, která čistá síť neumí (logické podmínky mezi hranami).
- **Prerekvizity:** [L4.1], [L1.4]
- **Úlohy:** Maximum flow s logickými omezeními (T05, banka #2 / zkoušky 2023).

### L4.15 — Multikomoditní tok (ILP) [NICE]
- **Jedna nová věc:** Více komodit sdílí kapacity hran.
- **Key takeaways:**
  - **Multikomoditní:** zachování toku per komodita, sdílené kapacity hran.
  - Matice NENÍ TUM [L3.12] → necelá řešení (na rozdíl od jednokomoditního toku).
- **Prerekvizity:** [L4.14], [L3.12]
- **Úlohy:** Multikomoditní tok — ILP (T29 / souhrn-multicommodity-ilp, banka #26 / zkouska24052011). *(Odložitelné.)*

---

# K5 — Rozvrhování (Slot 5)

> **Pořadí #5:** Slot 5 padá ve **100 %**, 6 bodů. Doložené 2026: Time-indexed ILP (25.5.), Muntz&Coffman (1.6.). Klíč v zadání bývá napsán, JAKÝ algoritmus použít — referenční tabulka problém→algoritmus je na konci kapitoly [L5.14]. Staví na ILP [K1], SP/Bellman-Ford [K2] a tocích [K4].
>
> **Pozn. k pořadí:** (1) Grahamova notace [L5.1] nemá žádné prereq a zavádí se PRVNÍ, protože ji potřebuje i tok-rozvrh L5.0 (přesunutý z K4). (2) Obecná technika Branch & Bound se zavádí v [L5.5] (grafický B&B nad LP relaxací), TEPRVE PAK se používá jako bounding v rozvrhovacích ILP [L5.6a/b].

### L5.1 — Grahamova notace α|β|γ [MUST]
- **Jedna nová věc:** Jak číst tři pole klasifikace rozvrhovacího problému.
- **Key takeaways:**
  - α = prostředky (1, P, R, PS…); β = vlastnosti (pmtn, prec, r_j, d_j…); γ = kritérium (Cmax, ΣC_j, Σw_jC_j, Lmax).
  - Parametry úloh: r = release, p = processing, d̃ = deadline, d = due date; C = completion, L = lateness = C_j − d_j.
  - Notaci čteš zleva: „co mám / jaká pravidla / co minimalizuji".
- **Prerekvizity:** —

### L5.0 — Rozvrhování přes toky (P|pmtn,rj,dj|) [FOTO] [MUST]
> *(Číslováno L5.0, protože tematicky patří do K5, ale obsahově navazuje na K4 — řeší rozvrh tokem. Zařazeno hned za L5.1, aby byla notace r_j,d_j,pmtn,Cmax k dispozici.)*
- **Jedna nová věc:** Preemptivní rozvrh na R strojích jako max flow přes intervaly.
- **Key takeaways:**
  - Body z množiny {r_j, d_j} [L5.1] rozdělí časovou osu na intervaly.
  - source → úloha (kapacita p_j) → interval (kde úloha smí běžet) → sink (kapacita délka·R).
  - Feasibilita = nasycení všech hran ze source [L4.4], [L4.5].
- **Prerekvizity:** [L5.1], [L4.4], [L4.5]
- **Úlohy:** **P|pmtn,rj,dj| přes toky** [FOTO] (T51 / zk2023-u6-msp-maxflow / a4b-procsched-toky, zkoušky 2023 / test2 / test3). *(Časté u ústní.)*

### L5.2 — Precedence a temporální omezení; graf TC [MUST]
- **Jedna nová věc:** Omezení s_i + l_ij ≤ s_j a jeho graf.
- **Key takeaways:**
  - Precedence T_i ≺ T_j; temporální s_i + l_ij ≤ s_j (l_ij může být +/−/0).
  - Sestav orientovaný graf temporálních omezení s dummy uzly start/end.
  - **Rozvrhnutelnost:** instance NENÍ rozvrhnutelná ⟺ existuje **kladný cyklus** (detekce přes nejdelší cesty / Bellman-Ford [L2.12]).
- **Prerekvizity:** [L5.1], [L0.4], [L2.12]
- **Úlohy:** Project Scheduling with TC — graf + Gantt + feasibilita (T52 / zk2023-s5-psc-gantt, zkoušky 2023 / zkouska24052011).

### L5.3 — Time-indexed ILP pro PS1|temp|Cmax [FOTO] [MUST]
- **Jedna nová věc:** x_{i,t}=1 ⟺ úloha i začíná v čase t; minimalizace Cmax.
- **Key takeaways:**
  - s_i = `Σ_t t·x_{i,t}`; každá úloha začíná právě jednou `Σ_t x_{i,t}=1` [L1.15].
  - Resource: v každém čase t běží max 1 úloha (suma oken ≤ 1).
  - Temporální omezení [L5.2]; Cmax ≥ s_i + p_i, minimalizuj Cmax.
- **Prerekvizity:** [L1.15], [L5.2]
- **Úlohy:**
  - **Time-indexed ILP PS1|temp|Cmax** [FOTO] (T43 / souhrn-ps1temp-timeindexed, KO-25-5-2026 / KO_02_06_2021 / KO_09_07_2021).
  - ILP Project Scheduling (a4m-ilp-project-sched, zkouska24052011).

### L5.4 — McNaughton (P|pmtn|Cmax) [MUST]
> *(Přesunuto sem před B&B, aby byl McNaughtonovský princip k dispozici pro Muntz&Coffman [L5.10]; je to samostatná nezávislá technika, prereq jen notace.)*
- **Jedna nová věc:** Wrap-around plnění na R strojů s preempcí.
- **Key takeaways:**
  - **McNaughton:** C* = max(max p_i, (1/R)·Σp_i); plň úlohy sekvenčně po C*, při přetečení přepni na další stroj.
  - Optimální pro nezávislé preemptivní úlohy bez precedence.
  - Nakresli Gantt; počet preempcí ≤ R−1.
- **Prerekvizity:** [L5.1]
- **Úlohy:** McNaughton P|pmtn|Cmax (cvičná, součást Muntz & Coffman přípravy).

### L5.5 — Branch & Bound pro ILP (grafické řezání) [FOTO] [MUST]
- **Jedna nová věc:** Větvení LP relaxace na celočíselné proměnné v rovině R².
- **Key takeaways:**
  - V každém uzlu vyřeš LP (graficky); je-li řešení necelé, větvi: x_i ≤ ⌊k⌋ a x_i ≥ ⌈k⌉.
  - Ořezávej (bounding) uzly horší než dosud nejlepší celočíselné řešení.
  - LP relaxace [L0.7] dává **dolní mez** (u minimalizace) / horní mez (u maximalizace) → to je „bound".
  - Zakresli nerovnice do mřížky/roviny.
- **Prerekvizity:** [L0.7], [L0.8]
- **Úlohy:**
  - **B&B pro ILP (min)** [FOTO] (zap2021v1-s3-bb, zapoctovy_test_2021_v1).
  - B&B pro ILP (max) (zap2021v2-s2-bb, zapoctovy_test_2021_v2).
  - B&B grafické (T58 / a4m-bb-ilp, test1 / zkouska24052011).

### L5.6a — Relative-order ILP (x_ij, antisymetrie, no-cycle) pro 1|prec|Σw_jC_j [MUST]
- **Jedna nová věc:** Pořadové proměnné x_ij („i před j") a jak správně spočítat C_j.
- **Key takeaways:**
  - x_ij = 1 ⟺ T_i předchází T_j; **antisymetrie** x_ij + x_ji = 1; **no-cycle/tranzitivita** (zákaz cyklického pořadí).
  - Precedence vynucená x_ij ≥ e_ij (zadané hrany).
  - **Proč jednoduchý vzorec na C_j NESTAČÍ:** C_j není jen p_j — je to součet processing časů VŠECH úloh, které jsou v rozvrhu před j (tj. všech i s x_ij=1) plus p_j. Musíš tedy `C_j = p_j + Σ_i p_i·x_ij`, ne nějaká pevná posloupnost. Toto je ta skrytá past.
- **Prerekvizity:** [L5.2], [L1.4]
- **Úlohy:** 1|prec|Σw_jC_j — ILP formulace (T45 část a / souhrn-1prec-wjcj, KO_09_07_2021 / zkoušky 2023).

### L5.6b — Využití LP relaxace jako dolní meze v B&B (1|prec|Σw_jC_j) [MUST]
- **Jedna nová věc:** Jak relative-order ILP [L5.6a] vyřešit B&B s LP boundem.
- **Key takeaways:**
  - LP relaxace [L0.7] relative-order modelu dává dolní mez J^LP pro bounding (B&B technika z [L5.5]).
  - Větvíš na zlomkové x_ij; ořezáváš uzly s J^LP ≥ dosud nejlepší celočíselné řešení.
  - Position-based varianta: alternativní indexace (úloha na pozici k).
- **Prerekvizity:** [L5.6a], [L5.5]
- **Úlohy:**
  - 1|prec|Σw_jC_j — B&B řešení (T45 část b, KO_09_07_2021 / zkoušky 2023).
  - Position-based ILP pro 1|r_j,d̃_j|Cmax (T46, banka #36).

### L5.7 — EDD a Hornův algoritmus (1|pmtn,r_j|Lmax) [MUST]
- **Jedna nová věc:** Earliest Due Date / Earliest Deadline First s preempcí.
- **Key takeaways:**
  - 1||Lmax: seřaď podle due date (EDD) — optimální (swap argument).
  - 1|pmtn,r_j|Lmax: v každém okamžiku spusť ready úlohu s nejbližším due date; preempce při příchodu naléhavější.
  - Nakresli Gantt, spočítej Lmax = max(C_j − d_j).
- **Prerekvizity:** [L5.1]
- **Úlohy:** Hornův algoritmus 1|pmtn,r_j|Lmax (T48 / souhrn-horn, zkoušky 2023 / banka #38).

### L5.8 — Chetto-Silly-Bouchentouf (prec → nezávislé, pak EDF) [MUST]
- **Jedna nová věc:** Úprava deadline podle následníků, pak Horn/EDF.
- **Key takeaways:**
  - d'_j = min(d_j, min_{j≺k}(d'_k − p_k)); r'_j upravit dle předchůdců (zpětný/dopředný průchod).
  - Po úpravě jsou precedence „zabudované" → spusť EDF [L5.7].
- **Prerekvizity:** [L5.7], [L5.2]
- **Úlohy:** CSB pro 1|pmtn,prec,r_j,d_j|Lmax (T49, KO_21_06_2021 / zkoušky 2023).

### L5.9 — Bratleyho algoritmus (1|r_j,d̃_j|Cmax, B&B) [MUST]
- **Jedna nová věc:** B&B nad permutacemi úloh s ořezáváním.
- **Key takeaways:**
  - Strom permutací; ořež větev při překročení deadline.
  - **BRTP** (block with release time property) = postačující podmínka optimality.
  - Nakresli strom + Gantt; diskutuj optimalitu. *(Téma ústní.)*
- **Prerekvizity:** [L5.5], [L5.1]
- **Úlohy:** Bratley — strom + Gantt + optimalita (T47 / a4b-bratley, banka #37 / test3 / ukol-2015-6).

### L5.10 — Muntz & Coffman (P|pmtn,prec|Cmax) [FOTO] [MUST]
- **Jedna nová věc:** Úrovňový algoritmus s přidělováním rychlosti procesorů (staví na McNaughtonu).
- **Key takeaways:**
  - **Level** = nejdelší cesta v precedenčním grafu do koncové úlohy.
  - V každé iteraci: množina volných úloh Z, přiděl kapacitu β = h/|S|, spočti δ (3 případy), proveď preempci/migraci (McNaughtonovský princip [L5.4]).
  - Faktor aproximace 2−2/R; nakresli Gantt + graf úrovní.
- **Prerekvizity:** [L5.4], [L5.2]
- **Úlohy:** **Muntz & Coffman P|pmtn,prec|Cmax** [FOTO] (T44 / souhrn-muntz-coffman, KO-1-6-2026 / KO_02_06_2021 / KO_09_07_2021).

### L5.11 — Rothkopf DP pro P||Cmax [MUST]
- **Jedna nová věc:** DP přes dosažitelné zátěže procesorů.
- **Key takeaways:**
  - Stav x_i(t_1,…,t_R) = dosažitelnost zátěží po umístění prvních i úloh; pseudopolynomiální O(n·UB^R).
  - Pro R=2 a jen processing časy = klasický Rothkopf.
  - Rekonstrukce rozvrhu zpětně; nakresli Gantt.
- **Prerekvizity:** [L5.1]
- **Úlohy:** Rothkopf P||Cmax DP, R=2 (T50 / souhrn-rothkopf-dp, KO_21_06_2021).

### L5.12 — List scheduling pro P|prec|Cmax (faktor) [MUST]
- **Jedna nová věc:** List scheduling heuristika a její aproximační faktor.
- **Key takeaways:**
  - Přiřaď připravenou úlohu volnému procesoru dle pořadí v listu.
  - Faktor (2 − 1/R) [Graham]; LPT varianta (4/3 − 1/3R).
- **Prerekvizity:** [L5.1], [L3.1]
- **Úlohy:** List scheduling — pseudokód + faktor (T53 / a4m-listsched, zkouska31052011).

### L5.13 — NP-těžkost rozvrhování (redukce) (teorie, ústní) [NICE]
- **Jedna nová věc:** Redukce 1|r_j,d̃_j|Cmax → PS1|temp|Cmax a NP-těžkost přes 3-Partition.
- **Key takeaways:**
  - **Redukce 1|r_j,d̃_j|Cmax → PS1|temp|Cmax:** přidej T_0 (p=0); hrany s vahami r_i a −(d̃_i − p_i) modelují release/deadline jako temporální omezení [L5.2].
  - 1|r_j,d̃_j|Cmax je **silně NP-těžký** (redukce z **3-Partition**, plně na slidech).
  - *(Ústní téma „proč je 1|r_j,d_j|Cmax NP-těžký".)*
  - *(Redukce PS_m,1|temp| → PS1|temp| je pro zkoušku 2026 VYLOUČENA — T57 vynechat.)*
- **Prerekvizity:** [L5.2], [L5.3], [L5.9]
- **Úlohy:**
  - Převod 1|r_j,d_j|Cmax → PS1|temp|Cmax (souhrn-1rjdj-to-ps1temp).
  - *(souhrn-psm1-to-ps1 / T57 — jen pro úplnost, VYLOUČENO ze zkoušky 2026.)*

### L5.14 — Referenční tabulka: problém → algoritmus (tahák, ústní) [MUST]
- **Jedna nová věc:** Mapování klasifikace na správný algoritmus (klíč k volbě metody) — žádný nový koncept, jen index.
- **Key takeaways:**
  - **KLÍČ (problém → algoritmus):** P||Cmax R=2 jen processing time = **Rothkopf DP** [L5.11]; P|prec|Cmax = **list scheduling** [L5.12]; P|prec,pmtn|Cmax = **Coffman & Muntz** [L5.10]; P|pmtn|Cmax = **McNaughton** [L5.4]; 1|pmtn,r_j|Lmax = **Horn** [L5.7]; 1|pmtn,prec,r_j,d_j|Lmax = **CSB** [L5.8]; 1|r_j,d̃_j|Cmax = **Bratley** [L5.9]; PS1|temp|Cmax = **time-indexed ILP** [L5.3]; P|pmtn,r_j,d_j| feasibilita = **toky** [L5.0]. V zadání obvykle stojí, jaký algoritmus chtějí.
- **Prerekvizity:** [L5.1], [L5.0], [L5.3], [L5.4], [L5.7]–[L5.12]
- **Úlohy:** — (čistý tahák, bez samostatné úlohy)

---

# K6 — CSP / Arc Consistency (Slot 6)

> **Pořadí #6:** Slot 6 padá v **~55 %**, 6 bodů — buď AC-3, nebo 2. SP úloha (tu už pokrývá [K2]). AC-3 doloženo 1.6.2026. Malá kapitola, vysoká návratnost času (mechanické oditerování).

### L6.1 — CSP a arc consistency [MUST]
- **Jedna nová věc:** CSP (X, D, C) a pojem hranové konzistence.
- **Key takeaways:**
  - CSP = proměnné X, domény D, omezení C; hledáme přiřazení splňující všechna omezení.
  - Hrana (x_i, x_j) je **arc consistent** ⟺ pro každou hodnotu a∈D_i existuje b∈D_j splňující omezení.
  - Konzistence je orientovaná → každé omezení dává hrany v OBOU směrech.
- **Prerekvizity:** —

### L6.2 — REVISE a redukce domén [MUST]
- **Jedna nová věc:** Procedura REVISE odstraní nekonzistentní hodnoty.
- **Key takeaways:**
  - REVISE(x_i, x_j): smaž z D_i hodnoty bez podpory v D_j.
  - Když REVISE něco smaže, sousední hrany se musí přezkoumat znovu.
- **Prerekvizity:** [L6.1]

### L6.3 — AC-3 algoritmus + oditerování [FOTO] [MUST]
- **Jedna nová věc:** Fronta hran Q, opakované REVISE, znovuzařazení hran.
- **Key takeaways:**
  - Inicializuj frontu všemi hranami; ber hranu, REVISE; pokud se D_i zmenší, přidej zpět hrany (x_k, x_i) pro k≠j.
  - Zapiš obsah fronty PŘED revizí každé hrany + redukci domén po krocích.
  - AC NENÍ úplná technika (může zůstat řešení bez globální konzistence).
- **Prerekvizity:** [L6.2]
- **Úlohy:**
  - **AC-3 oditerování** [FOTO] (T54 / souhrn-ac3-iterace, KO-1-6-2026 / KO_02_06_2021 / zkouska24052011).
  - AC-3 — pseudokód a princip (T55, banka #42). *(Téma ústní.)*

---

# K7 — Knapsack (doplňková, výpočetní — bez [FOTO])

> **Pořadí #7:** Knapsack může spadnout do Slotu 3 (důkaz 2-aprox — už v [L3.11]) nebo jako výpočetní úloha (Slot 6 alternativa, doloženo zkouska_2023 str. 4). Krátká, snadné body. DP techniku používá i Rothkopf [L5.11] a Floyd [L2.14]. Jako doplňková kapitola NEMÁ [FOTO] checkpoint (ten je vyhrazen pro slotové kapitoly K1–K6) — Knapsack DP propočítej na papír v rámci opakování, foto pošli volitelně.

### L7.1 — Knapsack DP (tabulka + backtracking) [MUST]
- **Jedna nová věc:** DP tabulka (položky × kapacita) a rekonstrukce řešení.
- **Key takeaways:**
  - Standardní DP: tabulka indexovaná kapacitou, O(nW); pseudopolynomiální.
  - Při W ≤ 10n je O(n²); řešení rekonstruuj zpětným průchodem.
  - Diskutuj jedinečnost (počet optimálních cest v tabulce).
- **Prerekvizity:** [L0.8]
- **Úlohy:** Knapsack DP (T35 / zk2023-u6b-knapsack-dp / souhrn-knapsack-dp-multi, KO_02_06_2021 / zkoušky 2023).

### L7.2 — Knapsack DP indexovaný cenou (cost-indexed) [NICE]
- **Jedna nová věc:** DP indexovaná cenou: min váha pro dosažení dané ceny.
- **Key takeaways:**
  - Stav = cena; hodnota = minimální váha; složitost O(n·Σc).
  - Tato varianta je základ FPTAS / 2-aproximace [L3.11].
- **Prerekvizity:** [L7.1], [L3.11]
- **Úlohy:** Knapsack DP cost-indexed (T36, banka #28). *(Odložitelné.)*

---

# Mapování VŠECH úloh inventáře → lekce

| ID úlohy | Název (zkráceně) | Lekce |
|---|---|---|
| T01 | Wedding plan | L1.9 [FOTO] |
| T02a | Toys assignment — ILP | L1.14 [FOTO] |
| T02b | Toys assignment — matching | L4.12 |
| T03 | Penguins on ice | L1.15 |
| T04 / zk2023-u4-loot | Loot distribution (Alibaba) | L1.12 [FOTO] |
| T05 | Max flow + logické podmínky | L4.14 |
| T06 | Min nespojité fce (fixed-charge) | L1.6 |
| T07 / zk2023-s6-absval | max \|x1\|+\|x2\| | L1.10 |
| T08 / a4b-realestate | Real estate ILP (XOR / 2-ze-3) | L1.3 |
| T09 | 2-Partition jako ILP | L1.1 |
| T10 | Shortest Paths jako ILP (TUM) | L3.12 |
| T11 | TSP jako ILP (MTZ) | L3.4 |
| T12 | Dangerous adventure | L2.8 [FOTO] |
| T13 | Constrained shortest path | L2.11 |
| T14 | Edge costs assignment | L2.5 [FOTO] |
| T15 | Floyd longest paths | L2.14 |
| T16 | Bridge and Torch | L2.10 |
| T17 / a4m-watermeasure | Water level / nádoby | L2.10 |
| T18 | Maximum Reliability Path | L2.7 |
| T19 | Node-weighted SP (split) | L2.6 |
| T20 | Handling negative cycles | L2.18 [FOTO] |
| T21 / zk2023-u6-dijkstra | Correctness of Dijkstra | L3.2 [FOTO] |
| T22 | Bellman-Ford + detekce cyklu | běh L2.12 / důkaz L3.7 |
| T23 | SP in DAGs O(n+m) | L2.13 |
| T24 / souhrn-ff-iterace | Ford-Fulkerson iterace + min řez | L4.4 [FOTO] |
| T25 / souhrn-ff-feasibleflow | Initial Feasible Flow (LB) | L4.7 |
| T26 | Feasible Flow with Balances | L4.6 |
| T27 | Minimum Cost Flow | L4.10 |
| T28 | Directed Chinese Postman | L4.13 |
| T29 / souhrn-multicommodity | Multicommodity Flow | L4.15 |
| T30 / souhrn-residents | Residents & council | L4.5 [FOTO] |
| T31 | Bipartitní matching přes flow | L4.9 |
| T32 | Assignment přes MCF | L4.12 |
| T33 | School Bus Driver Assignment | L4.12 |
| T34 | Pruned Chessboard (domino) | L4.9 |
| T35 / zk2023-u6b / souhrn-knapsack-dp | Knapsack DP | L7.1 |
| T36 | Knapsack DP cost-indexed | L7.2 |
| T37 | Fractional Knapsack greedy | L3.11 |
| T38 / a4m-knapsack-2aprox | 2-aproximace Knapsack (důkaz) | L3.11 |
| T39 / souhrn-tsp-raprox | Neexistence r-aprox TSP | L3.6 [FOTO] |
| T40 | Double-tree 2-aprox | L3.9 |
| T41 / souhrn-christofides | Christofides 3/2 (důkaz) | L3.10 [FOTO] |
| T42 | k-OPT local search | L3.14 (mikro-lekce, NICE) |
| T43 / souhrn-ps1temp | Time-indexed ILP PS1\|temp\|Cmax | L5.3 [FOTO] |
| T44 / souhrn-muntz | Muntz & Coffman | L5.10 [FOTO] |
| T45 / souhrn-1prec-wjcj | 1\|prec\|Σw_jC_j (ILP + B&B) | L5.6a (ILP) + L5.6b (B&B) |
| T46 | Position-based ILP 1\|r_j,d̃_j\|Cmax | L5.6b |
| T47 / a4b-bratley | Bratley | L5.9 |
| T48 / souhrn-horn | Horn 1\|pmtn,r_j\|Lmax | L5.7 |
| T49 | Chetto-Silly-Bouchentouf | L5.8 |
| T50 / souhrn-rothkopf | Rothkopf P\|\|Cmax DP | L5.11 |
| T51 / zk2023-u6-msp / a4b-procsched | P\|pmtn,rj,dj\| přes toky | L5.0 [FOTO] |
| T52 / zk2023-s5-psc | Project Scheduling TC + Gantt | L5.2 |
| T53 / a4m-listsched | List scheduling + faktor | L5.12 |
| T54 / souhrn-ac3 | AC-3 oditerování | L6.3 [FOTO] |
| T55 | AC-3 pseudokód | L6.3 |
| T56 / a4m-tsp-npobtiznost | NP-těžkost TSP (důkaz) | L3.5 |
| T57 / souhrn-psm1-to-ps1 | PS_m,1→PS1 redukce | L5.13 (VYLOUČENO 2026) |
| T58 / a4m-bb-ilp | B&B pro ILP (grafický) | L5.5 [FOTO] |
| T59 / teor-s1-matrix-rounding | Matrix rounding přes toky | L4.8 |
| T60 | Warehousing / data storing / 2D cutting | L1.15 |
| teor-s2-production5 | Production Planning 5 produktů | L1.6 |
| zap2021v1-s2-lunch | School lunch menu | L1.13 |
| zap2021v1-s3-bb | B&B ILP (min) | L5.5 [FOTO] |
| zap2021v2-s2-bb | B&B ILP (max) | L5.5 |
| zap2021v2-s3-4partition | 4-Partition (banknotes) | L1.8 |
| teor-s3-floyd / souhrn-floyd-longest | Floyd longest/shortest | L2.14 |
| souhrn-dowjones | Mr. Dow Jones investice | L2.9 |
| souhrn-busdriver | Bus driver směny | L2.9 |
| souhrn-sp-5vyroku | 5 výroků o SP | L2.18 |
| souhrn-reliability | Nejspolehlivější spojení | L2.7 |
| souhrn-dining | Dining problem (toky) | L4.5 |
| ilpbin-logic | ILP logické formule | L1.3 |
| cv03-callcenter | Call center scheduling | L1.10 |
| cv09-cyclecanceling | Cycle canceling + Bellman | L4.11 / L3.7 (kontext důkazu) |
| cv10-tsp-lazy | TSP lazy constraints | L3.4 |
| a4b-knights-csp | N koní / N dam ILP | L1.15 |
| a4b-dijkstra-iter | Dijkstra oditerování | L2.4 |
| a4m-ilp-project-sched | ILP Project Scheduling | L5.3 |
| souhrn-1rjdj-to-ps1temp | Redukce 1\|rj,dj\|→PS1 | L5.13 |
| souhrn-tsp-timewindows-ilp | TSP s time windows ILP | L3.4 |
| souhrn-reliability-dijkstra | Nejspolehlivější spojení | L2.7 |

> **Pozn. k mapování:** Všech 60 očíslovaných úloh (T01–T60) + všechny `souhrn-`/`cv`/`a4*`/`zap`/`teor`/`ilpbin` varianty jsou namapovány na konkrétní lekci. T57 (PS_m,1→PS1) je explicitně VYLOUČENO ze zkoušky 2026 (drženo jen pro úplnost v L5.13). T42 (k-OPT) má vlastní mikro-lekci L3.14 ([NICE]). T10 má jednoznačný domov v L3.12 (TUM). T22 má běh v L2.12 a důkaz v L3.7. T45 je rozdělena: ILP formulace v L5.6a, B&B řešení v L5.6b. Hungarian algoritmus a „feasibility test do konce" (slidy 72–78) jsou mimo rozsah.

---

# Souhrn počtu lekcí po kapitolách

| Kapitola | Téma | Slot | Pravděp. × body | Počet lekcí | [FOTO] checkpointy |
|---|---|---|---|---|---|
| K0 | Základy grafů + MST + matching + ILP | (prereq) | — | 8 | — |
| K1 | ILP modelování | 1 | 100 % × 7 | 15 | L1.9, L1.12, L1.14 |
| K2 | Nejkratší cesty | 2 | 90 % × 7 | 18 | L2.5, L2.8, L2.18 |
| K3 | Důkaz / teorie | 3 | 95 % × 7 | 16 | L3.2, L3.6, L3.10 |
| K4 | Toky a řezy | 4 | ~100 % × 7 (2/2, malý vzorek) | 15 | L4.4, L4.5 |
| K5 | Rozvrhování | 5 | 100 % × 6 | 16 | L5.0, L5.3, L5.5, L5.10 |
| K6 | CSP / AC-3 | 6 | 55 % × 6 | 3 | L6.3 |
| K7 | Knapsack | 3/doplněk | nízká × 6 | 2 | — (doplňková, foto volitelně) |
| **Celkem** | | | | **93 lekcí** | **16 FOTO checkpointů (vše na K1–K6)** |

> **Pozn. k počtu:** K2 má 18 lekcí (L2.2 rozdělena na L2.2 princip optimality + L2.3 relaxace). K3 má 16 lekcí (L3.8 rozdělena na L3.8a/b/c). K4 má 15 lekcí (tok-rozvrh přesunut do K5 jako L5.0). K5 má 16 lekcí (přibyl L5.0, L5.6 rozdělena na L5.6a/b, McNaughton L5.4 přesunut před B&B).

**[FOTO] checkpointy — kompletní seznam (16):** L1.9 Wedding plan · L1.12 Loot · L1.14 Toys · L2.5 Edge costs · L2.8 Dangerous adventure · L2.18 Handling neg. cycles · L3.2 Dijkstra proof · L3.6 TSP r-aprox · L3.10 Christofides · L4.4 Ford-Fulkerson · L4.5 Residents · L5.0 P\|pmtn,rj,dj\| toky · L5.3 Time-indexed ILP · L5.5 B&B · L5.10 Muntz&Coffman · L6.3 AC-3. *(Rozpis: K1 má 3, K2 má 3, K3 má 3, K4 má 2, K5 má 4, K6 má 1 = 16. Pokud chceš držet 15, lze L5.5 B&B degradovat na běžný checkpoint bez FOTO — B&B padá řidčeji než ostatní sloty.)*

---

# Doporučený rozvrh na 5 dní (den po dni)

> Přebalancováno: den 5 odlehčen, doložené úlohy z 1.6. dostaly chráněný slot, Christofides chráněn, [NICE] lekce odložitelné.

### Den 1 — ILP základ
K0 (L0.1–L0.8) + K1.1–K1.9 → základ grafů/ILP + **Wedding plan [FOTO]**.
*(FOTO: 1 — L1.9)*

### Den 2 — ILP dokončení + SP start
K1.10–K1.15 (**Loot [FOTO]**, **Toys [FOTO]**) + K2.1–K2.8 (**Edge costs [FOTO]**, **Dangerous adventure [FOTO]**).
*(FOTO: 4 — L1.12, L1.14, L2.5, L2.8)*

### Den 3 — SP dokončení + důkazy #2/#3 + Knapsack
K2.9–K2.18 (**Handling neg. cycles [FOTO]**; L2.14 Floyd je [NICE] — projeď nebo odlož) + K3.1–K3.7 (**Dijkstra proof [FOTO]**, **TSP r-aprox [FOTO]**) + K7 Knapsack (L7.1 [MUST], L7.2 [NICE]).
*(FOTO: 3 — L2.18, L3.2, L3.6)*

### Den 4 — CHRÁNĚNÝ Christofides + půlka toků
**[PRIORITA #1: Christofides NEodfláknout]** K3.8a–K3.10 jako PRVNÍ chráněný blok (**Christofides [FOTO]**) (+ L3.11–L3.12 [MUST]; L3.13–L3.14 [NICE] odložitelné) + K4.1–K4.9 (**Ford-Fulkerson [FOTO]**, **Residents [FOTO]**) + **začátek MCF** K4.10–K4.12.
*(FOTO: 3 — L3.10, L4.4, L4.5)*

### Den 5 — odlehčený, doložené 1.6. chráněné
Dokončení K4.13–K4.14 (L4.13, L4.15 jsou [NICE] — odlož při tísni) + **CHRÁNĚNÝ BLOK doložených 1.6.2026:** K5.1, **L5.0 P\|pmtn,rj,dj\| toky [FOTO]**, K5.2–K5.5 (**Time-indexed ILP [FOTO]**, **B&B [FOTO]**), L5.10 **Muntz&Coffman [FOTO]** (doložen 1.6.!), zbytek K5 dle času (L5.13 [NICE] odložitelný) + **K6 AC-3 [FOTO]** (doložen 1.6.!) + cílené opakování doložených úloh z 25.5. a 1.6.2026.
*(FOTO: 5–6 — L5.0, L5.3, L5.5, L5.10, L6.3)*

> **Pozn. k tempu (jak řeší riziko přetížení dne 5):**
> - **Den 5 odlehčen:** výpočetní MCF (K4.10–K4.12) přesunuto na konec **dne 4**, takže den 5 začíná lehčeji. Pouze doplňkové toky (L4.13 Chinese postman, L4.15 multikomoditní — obojí [NICE]) zůstávají na začátku dne 5 a lze je odložit.
> - **Doložené úlohy z 1.6.2026 (Muntz&Coffman L5.10, AC-3 L6.3, Residents L4.5) mají chráněný slot:** Muntz&Coffman a AC-3 jsou explicitně v chráněném bloku dne 5 (ne na ocasu), Residents je už na dni 4.
> - **Christofides (#1 žebříčku) je první chráněná věc dne 4** s vlastním slotem, ne nacpaný do vyčerpaného konce dne.
> - **[NICE] lekce explicitně odložitelné** bez ztráty bodového slotu: L2.14 (detaily Floyda), L3.13 (ekvivalence stromu), L3.14 (k-OPT), L4.13 (Chinese postman), L4.15 (multikomoditní tok), L5.13 (NP-těžkost rozvrhování — ústní), L7.2 (cost-indexed knapsack), a doplňkové ILP úlohy v L1.15 (penguins/knights/cutting). Tím lze každý den zkrátit, aniž bys přišel o bodový slot.
> - **Realističnost:** 93 lekcí na 5 dní je hodně, ale ~12 z nich je [NICE] (odložitelných) a mnoho [MUST] lekcí je velmi krátkých (1 koncept). Reálné jádro pro pokrytí všech 6 slotů je ~75 [MUST] lekcí ≈ 15/den, z toho většina krátká. Při extrémní tísni vynech celé K7 (knapsack je jen alternativa slotu 6) a [NICE] lekce, a soustřeď se na 16 FOTO checkpointů — ty jsou tvůj minimální průchozí test.

---

# Mezery a rizika

Tato sekce shrnuje, kde má příprava slabá místa a kde je nutná opatrnost.

### 1. Neznámý 3. termín 8. 6. 2026
- **Obsah termínu 8. 6. 2026 NENÍ znám** (data chybí). Osnova je kalibrovaná na 2 doložené termíny 2026 (25. 5. a 1. 6.) plus širší historii.
- **Riziko:** pokud zkoušející na 8. 6. zařadil nějakou variantu, kterou banka nepokrývá, mohla se posunout pravděpodobnost slotů. Vzhledem k pevné šabloně 6 slotů je to ale nepravděpodobné — šablona drží v obou doložených termínech.
- **Mitigace:** drž se šablony 6 slotů; pokrytí všech 16 FOTO checkpointů je minimální průchozí test.

### 2. Malý statistický vzorek
- Výskyty slotů jsou opřené o **jen 2 doložené termíny 2026** + historii. „pozorováno 2/2" (Slot 4) NEznamená dokazatelných 100 % — 2 vzorky nestačí na rozlišení 100 % vs „téměř jistě". Alokuj čas, jako by Slot 4 padl jistě.

### 3. Důkazový slot (Slot 3) — co NENÍ plně dokázáno na slidech
- **Plně dokázané (férově „dokažte"):** Dijkstra correctness, Bellman-Ford correctness, TSP r-aproximace (HC redukce), TSP NP-těžké, Double-tree 2-aprox, Christofides 3/2, EDD optimalita, Horn/EDF, Bratley BRTP, 3-Partition redukce, Knapsack 2-aprox, ekvivalence stromů.
- **NEjsou plně dokázané** (méně pravděpodobné jako „dokažte"): **max-flow/min-cut** (na slidech jen přes LP dualitu), **Floyd-Warshall**. Tyto se uč spíš pro běh než pro důkaz.
- **Žebříček důkazů pro 15. 6.:** #1 Christofides 3/2 (zatím v 2026 nepadl, slidy plně dokazují — vysoké riziko, že přijde na řadu), #2 Dijkstra, #3 TSP r-aproximace, #4 Bellman-Ford. **Christofides je nejpravděpodobnější a nejnáročnější — neodfláknout.**

### 4. Explicitně vyloučené z rozsahu 2026
- **T57 / souhrn-psm1-to-ps1** (redukce PS_m,1|temp| → PS1|temp|) — VYLOUČENO, drženo jen pro úplnost v L5.13.
- **Hungarian algoritmus** — vyloučen (assignment se řeší přes MCF, L4.12).
- **„Feasibility test do konce"** (slidy 72–78) — mimo rozsah.

### 5. Kapacitní riziko: 93 lekcí na 5 dní
- Je to hodně. Mitigace: ~12 lekcí je [NICE] (odložitelných), mnoho [MUST] lekcí je velmi krátkých. Jádro ~75 [MUST] lekcí ≈ 15/den.
- **Den 5 byl historicky přetížený** — přebalancováno přesunem MCF na den 4 a chráněnými sloty pro doložené úlohy z 1.6.
- **Nouzový plán při extrémní tísni:** vynech celé K7 (jen alternativa slotu 6) a všechny [NICE] lekce; soustřeď se na 16 FOTO checkpointů.

### 6. Nebezpečné polopravdy (časté chyby v modelování)
- **max |x| bez znaménkového přepínače** ([L1.10]) — pouhé bounds NESTAČÍ; funguje jen když je znaménko x vynucené ostatními omezeními.
- **Worst-case přes všechny kombinace ([L1.13]) ≠ max/min jedné množiny ([L1.8])** — jiná konstrukce, nezaměňovat.
- **C_j v relative-order ILP ([L5.6a])** — není jen p_j, ale součet processing časů všech předchozích úloh; jednoduchý vzorec NESTAČÍ.
- **Posun vah o +h ([L2.15])** NEzachová nejkratší cestu (na rozdíl od násobení k×).
