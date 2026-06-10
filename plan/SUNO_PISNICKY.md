# SUNO písničky — memorovací hitovky pro KO (zkouška 15. 6. 2026)

13 písní = nejhůř zapamatovatelné věci z předmětu (vybráno podle frekvence
v historických testech; fakta ověřena 1:1 proti slidům). Každá píseň má jiný žánr,
aby se ti nepletly dohromady.

## Jak to nalít do Suno (NUTNÉ přečíst, 1 minuta)

1. **Custom Mode** (ne simple prompt — jen tak Suno zazpívá text 1:1). Model **v5** nebo novější.
2. Zkopíruj **Lyrics** (vejdou se, limit 5 000 znaků) a **Styles** (anglicky, limit 1 000).
3. **Advanced Options**:
   - **Exclude Styles**: `english vocals, spoken english`
   - **Weirdness**: nízko (10–20 %) — konvenční = chytlavé.
   - **Style Influence**: vysoko (~70 %).
4. Generuj **2–3 varianty** a nech jen tu nejchytlavější (refrén musí jet hned napoprvé).
5. **Výslovnost**: čísla a symboly jsou v textech už rozepsané slovy („cé max", „ó en na třetí",
   „dvě minus dvě lomeno er") — NEPŘEPISUJ je zpět na symboly. Pokud Suno zkomolí jméno,
   nahraď foneticky: Dijkstra → „Dajkstra", McNaughton → „Meknótn",
   Chetto–Silly–Bouchentouf → „Četo–Sili–Bušentúf".
6. Když chceš stejný hlas pro všechny písně: první povedenou ulož jako **Persona/Voice**
   a generuj další s ní.

---

## 1. CHRISTOFIDES — „Jedna a půl" (pop-punk)

**Téma:** 5 kroků algoritmu + 4 nerovnosti důkazu faktoru 3/2 (nejčastější důkaz u zkoušky).

**Title:** `Jedna a půl (Christofides)`

**Styles:**
```
energetic pop punk, fast tempo, driving electric guitars, punchy drums, anthemic gang-vocal chorus, male vocals, czech language vocals, all lyrics in Czech, catchy, clean modern production
```

**Lyrics:**
```
[Intro]
[Spoken Word]
Metrický té es pé. Christofides. Jedna a půl.

[Verse 1]
Najdi nejlevnější kostru, budem jí říkat T,
vrcholy lichého stupně hoď do množiny dvojité vé.
Vždycky je jich sudý počet — to je jistá věc,
nejlevnější párování M na nich najdi přec!

[Chorus]
Kostra! Liché! Párování!
Euler! Zkratka! Hotovo!
Jedna a půl krát optimum,
ó en na třetí — Christofidovo!

[Verse 2]
Kostra T plus matching M — všechny stupně sudé jsou,
Eulerův tah L tam projde každou hranou jedinou.
Zkratkou přeskoč vrcholy, cos viděl už dřív —
trojúhelník zaručí, že okruh H je kratší, div!

[Chorus]
Kostra! Liché! Párování!
Euler! Zkratka! Hotovo!
Jedna a půl krát optimum,
ó en na třetí — Christofidovo!

[Bridge]
Čtyři nerovnosti, řetěz, co tě spasí:
optimum je víc než kostra — okruh bez hrany je kostra taky,
půl optima je víc než matching — okruh dá dvě párování,
T plus M se rovná L — a L je víc než H, bez ptaní!

[Verse 3]
Double-tree je chudší bratr: hrany kostry zdvojí,
faktor dva, ó en na druhou — s tím se nespokojíš.
Christofides místo zdvojení vezme matching em —
proto jedna a půl optima, a důkaz máme všem!

[Chorus]
Kostra! Liché! Párování!
Euler! Zkratka! Hotovo!
Jedna a půl krát optimum,
ó en na třetí — Christofidovo!

[Outro]
Kostra, liché, párování, Euler, zkratka…
[End]
```

---

## 2. DIJKSTRA — „Jednou zavřený, navždy zavřený" (folková balada)

**Téma:** korektnost Dijkstry — indukční invariant, dva typy předchůdců, KDE se použije nezápornost.

**Title:** `Jednou zavřený, navždy zavřený (Dijkstra)`

**Styles:**
```
acoustic folk ballad, mid-tempo, warm male vocals, acoustic guitar, gentle strings, storytelling feel, czech language vocals, all lyrics in Czech, nostalgic, intimate
```

**Lyrics:**
```
[Verse 1]
V esku začni s nulou, všude jinde nekonečno,
množina R je prázdná — kdo v ní skončí, skončil věčně.
Vyber vrchol s nejmenším el a zavři ho do R,
relaxuj hrany, co vedou ven — a znova, dokola.

[Chorus]
Jednou zavřený, navždy zavřený — el už se nezmění,
el vé je menší nebo rovno el ká,
a hrana nikdy záporná není —
proto přes otevřené to kratší nebude — bez vrácení!

[Verse 2]
Bellmanova rovnice chce minimum přes předchůdce ká:
když ká leží v R, tu hranu už jsem relaxoval já —
vnitřní smyčka prošla všechny hrany z R ven.
Když ká leží venku? Tam se láme celý sen:

[Chorus]
Jednou zavřený, navždy zavřený — el už se nezmění,
el vé je menší nebo rovno el ká,
a hrana nikdy záporná není —
proto přes otevřené to kratší nebude — bez vrácení!

[Bridge]
Kde by se důkaz zlomil? Kdyby váhy záporné byly —
levná hrana za otevřeným vrcholem by tvrzení zabily.
Proto Dijkstra jen s nezápornými, label setting, ó en na druhou,
indukce přes velikost množiny R je mu zárukou.

[Chorus]
Jednou zavřený, navždy zavřený — el už se nezmění,
el vé je menší nebo rovno el ká,
a hrana nikdy záporná není —
proto přes otevřené to kratší nebude — bez vrácení!

[Outro]
Nezáporné váhy… jinak Bellman-Ford, příteli.
[End]
```

---

## 3. FORD–FULKERSON — „Augmentační" (námořnická odrhovačka)

**Téma:** augmentující cesta (forward f<u, backward f>l), výpočet γ, labeling, zastavení.

**Title:** `Augmentační (Ford–Fulkerson)`

**Styles:**
```
sea shanty folk rock, stomping rhythm, accordion and fiddle, group chant vocals, male choir, czech language vocals, all lyrics in Czech, rousing pub singalong, energetic
```

**Lyrics:**
```
[Verse 1]
Hledej cestu z es do té, směr hran tě netrápí,
po směru ber hranu, když je tok pod kapacitou,
proti směru tehdy, když je tok nad dolní mezí —
augmentující cesta! Jiná pravda není!

[Chorus]
Po směru: míň než kapacita!
Proti směru: víc než dolní mez!
Gama je nejmenší rezerva z celé cesty —
po směru přičti, proti odečti — a běž!

[Verse 2]
Označkuj zdroj es a šiř tu zprávu dál:
po směru značkuj souseda, když éf je menší než ú,
proti směru značkuj, když éf je větší než el,
a když označkuješ té — cestu jsi našel, námořníku!

[Chorus]
Po směru: míň než kapacita!
Proti směru: víc než dolní mez!
Gama je nejmenší rezerva z celé cesty —
po směru přičti, proti odečti — a běž!

[Bridge]
Když už cesta není — stůj! Tok je maximální!
Složitost: hrany krát hodnota toku — éf to škálu dální.
Iracionální kapacity? Nemusí to skončit, brachu —
Edmonds a Karp s bé ef es tě zbaví strachu!

[Chorus]
Po směru: míň než kapacita!
Proti směru: víc než dolní mez!
Gama je nejmenší rezerva z celé cesty —
po směru přičti, proti odečti — a běž!

[Outro]
Najdi tok, najdi cestu, spočti gamu — a znova!
[End]
```

---

## 4. MAX-FLOW MIN-CUT — „Řez" (temný synthwave)

**Téma:** definice řezu, vzorec C(A) = Σu(ven) − Σl(dovnitř), věta 1956, čtení min řezu z labelingu.

**Title:** `Řez (max flow = min cut)`

**Styles:**
```
dark synthwave, pulsing bassline, 80s retro synths, dramatic female vocals, czech language vocals, all lyrics in Czech, mysterious, cinematic, mid-tempo
```

**Lyrics:**
```
[Verse 1]
Rozděl vrcholy na dva tábory: es patří do á,
té zůstává venku — a mezi nimi řez, delta á.
Hrany ven, hrany dovnitř — delta plus a delta minus,
kapacita řezu? Teď pozor na ten minus:

[Chorus]
Kapacity VEN se sčítají,
dolní meze DOVNITŘ se ODEČTOU!
Maximální tok se rovná minimálnímu řezu —
Ford a Fulkerson, devatenáct set padesát šest!

[Verse 2]
Když labeling skončí a té zůstane bez značky,
označkované vrcholy tvoří á — bez hádky.
Hrany ven jsou plné: éf se rovná ú,
hrany dovnitř na dolní mezi — minimální řez tu máš, юu!

[Chorus]
Kapacity VEN se sčítají,
dolní meze DOVNITŘ se ODEČTOU!
Maximální tok se rovná minimálnímu řezu —
Ford a Fulkerson, devatenáct set padesát šest!

[Bridge]
[Whisper]
Celočíselné kapacity… celočíselný maximální tok existuje…
Dantzig a Fulkerson… integral flow theorem…

[Chorus]
Kapacity VEN se sčítají,
dolní meze DOVNITŘ se ODEČTOU!
Maximální tok se rovná minimálnímu řezu —
Ford a Fulkerson, devatenáct set padesát šest!
[End]
```

---

## 5. TIME-INDEXED ILP — „Pět omezení" (boom bap rap)

**Téma:** PS1|temp|Cmax — proměnné a_it a všech 5 omezení modelu (nejrecyklovanější ILP úloha).

**Title:** `Pět omezení (PS1 temp Cmax)`

**Styles:**
```
boom bap hip hop, hard punchy drums, deep bass, confident male rap with clear articulation, chanted hook, czech language vocals, all lyrics in Czech, old school, head-nodding groove
```

**Lyrics:**
```
[Intro]
[Spoken Word]
Pé es jedna. Temp. Cé max. Time-indexed. Pět omezení. Jedem!

[Verse 1]
Á í té je jedna, když úloha í startuje v té,
binárka přes celý horizont, horní mez je strop, oukej.
Pět bloků staví model, žádný nesmíš vynechat —
kdo zapomene na zdroje, ten jde od zkoušky spát!

[Chorus]
JEDNA: suma á í té přes té je jedna — start právě jednou!
DVA: es í je suma té krát á í té — startovní čas!
TŘI: es í plus el í jé menší rovno es jé — temporální vazba!
ČTYŘI: v každém čase tau běží nejvýš jedna — zdroj nás hlídá zas!
PĚT: es í plus pé í menší rovno cé max — a cé max minimalizuj!

[Verse 2]
To okno v bloku čtyři, to je finta celá:
té menší rovno tau, tau OSTŘE pod té plus pé í — tak se to dělá.
Úloha, co startuje v té, zrovna běží v čase tau —
neostrá zleva, ostrá zprava — zapiš si to, čau!

[Chorus]
JEDNA: suma á í té přes té je jedna — start právě jednou!
DVA: es í je suma té krát á í té — startovní čas!
TŘI: es í plus el í jé menší rovno es jé — temporální vazba!
ČTYŘI: v každém čase tau běží nejvýš jedna — zdroj nás hlídá zas!
PĚT: es í plus pé í menší rovno cé max — a cé max minimalizuj!

[Bridge]
Jednou startuješ, startem počítáš,
vazby ctíš, zdroj nepřetížíš,
konec pod cé max — a cé max tlačíš níž!

[Chorus]
JEDNA: suma á í té přes té je jedna — start právě jednou!
DVA: es í je suma té krát á í té — startovní čas!
TŘI: es í plus el í jé menší rovno es jé — temporální vazba!
ČTYŘI: v každém čase tau běží nejvýš jedna — zdroj nás hlídá zas!
PĚT: es í plus pé í menší rovno cé max — a cé max minimalizuj!
[End]
```

---

## 6. MUNTZ & COFFMAN + McNAUGHTON — „Level" (drum and bass)

**Téma:** level, β = h/|S|, TŘI případy δ, dokončení McNaughtonem + jeho vzorec C*max.

**Title:** `Level (Muntz & Coffman)`

**Styles:**
```
drum and bass, fast energetic breakbeats, deep sub bass, catchy female vocal hook, czech language vocals, all lyrics in Czech, futuristic, driving, euphoric chorus
```

**Lyrics:**
```
[Verse 1]
Level koncové úlohy? Prostě její pé.
Jinak pé plus maximum levelů následníků, jé!
Počítej to odzadu, od konce ke startu —
nejdelší cesta do cíle, tu měj v kartu.

[Chorus]
Nejvyšší level bere procesory — to je zákon náš!
Když je úloh víc než strojů: beta je há lomeno es!
Delta: někdo SKONČÍ, někdo KLESNE, někdo DOHÁNÍ —
a McNaughton to nakonec všechno srovná, yes!

[Verse 2]
Případ jedna: úloha doběhla — hotovo, šmik.
Případ dva: přiřazená klesla pod ready čekající — přepočti vmžik.
Případ tři: rychlejší s větší betou dohnal pomalou —
sniž pé i levely o delta krát beta, posuň čas, jedem dál!

[Chorus]
Nejvyšší level bere procesory — to je zákon náš!
Když je úloh víc než strojů: beta je há lomeno es!
Delta: někdo SKONČÍ, někdo KLESNE, někdo DOHÁNÍ —
a McNaughton to nakonec všechno srovná, yes!

[Bridge]
Cé max s hvězdičkou: vezmi MAXIMUM ze dvou —
nejdelší úloha, nebo suma pé lomeno er!
Namotávej úlohy přes okraj jako koberec,
každá se zlomí nejvýš jednou — McNaughton, ó en, věř!

[Verse 3]
Dva stroje, preempce, precedence — výsledek přesný!
Preempce a les — taky přesný, to je hezký.
Jinak aproximace: dvě minus dvě lomeno er —
Muntz a Coffman, ó en na druhou, tref se a ber!

[Chorus]
Nejvyšší level bere procesory — to je zákon náš!
Když je úloh víc než strojů: beta je há lomeno es!
Delta: někdo SKONČÍ, někdo KLESNE, někdo DOHÁNÍ —
a McNaughton to nakonec všechno srovná, yes!
[End]
```

---

## 7. ARC CONSISTENCY / AC-3 — „Pro každé á existuje bé" (synth-pop)

**Téma:** definice AC (kvantifikátory!), orientovanost, REVISE, AC-3 pravidlo znovuzařazení (i ≠ m), neúplnost.

**Title:** `Pro každé á existuje bé (AC-3)`

**Styles:**
```
upbeat synth pop, bright synths, bouncy four-on-the-floor beat, playful female vocals, czech language vocals, all lyrics in Czech, catchy earworm chorus, 120 bpm, polished
```

**Lyrics:**
```
[Verse 1]
Hrana z iks í do iks jé je konzistentní jenom tehdy,
když pro KAŽDOU hodnotu á z domény dé í
EXISTUJE bé v doméně dé jé,
že spolu splní všechna omezení — tak zní ty věty!

[Chorus]
Pro každé á existuje bé —
kdo podporu nemá, z domény jde ven!
Mazal jsi v doméně ká? Vrať do fronty hrany DO ká —
jen tu od em ne! Á cé tři, krásný den!

[Verse 2]
A pozor: hrana má SMĚR, to si pamatuj —
í jé konzistentní neznamená jé í, aleluj!
Fronta startuje se všemi orientovanými hranami,
vyber ká em, zavolej REVISE — a co s mazáními?

[Chorus]
Pro každé á existuje bé —
kdo podporu nemá, z domény jde ven!
Mazal jsi v doméně ká? Vrať do fronty hrany DO ká —
jen tu od em ne! Á cé tři, krásný den!

[Bridge]
Prázdná doména? Fail — jdi domů, konec hry.
Revize ká em nerozbije hranu em ká — ta klidně spí.
A závěr zrádný, ten si vryj do hlavy:
konzistence hran ti ŘEŠENÍ NEZARUČÍ — á cé je neúplná, tak to ber!

[Chorus]
Pro každé á existuje bé —
kdo podporu nemá, z domény jde ven!
Mazal jsi v doméně ká? Vrať do fronty hrany DO ká —
jen tu od em ne! Á cé tři, krásný den!
[End]
```

---

## 8. TSP NEAPROXIMOVATELNOST — „Dva plus er minus jedna krát en" (heavy metal)

**Téma:** věta o neexistenci r-aproximace pro obecný TSP — konstrukce vah, mezní hodnoty, spor s HC.

**Title:** `Dva plus er minus jedna krát en (TSP)`

**Styles:**
```
heavy metal, aggressive distorted guitars, double kick drums, powerful male vocals, epic choir on chorus, czech language vocals, all lyrics in Czech, dark, dramatic, intense
```

**Lyrics:**
```
[Verse 1]
Kdyby byla er-aproximace na obecný té es pé,
rozhodl bych Hamiltonův okruh polynomiálně, jé!
Vezmi graf gé, postav úplný graf na en vrcholech,
a teď ty váhy — ať nezůstaneš v koncích:

[Chorus]
JEDNA — když hrana v grafu JE!
DVA PLUS ER MINUS JEDNA KRÁT EN — když NENÍ!
Nejvýš er krát en? Hamilton EXISTUJE!
Víc? Hamilton NENÍ! — Spor, pokud pé není en pé!

[Verse 2]
Když okruh existuje, optimum je přesně en,
aproximace vrátí nejvýš er krát en.
Když okruh neexistuje, jedna drahá hrana stačí:
en minus jedna, plus dva, plus er minus jedna krát en —
er krát en PLUS JEDNA — to už nic nezamlží!

[Chorus]
JEDNA — když hrana v grafu JE!
DVA PLUS ER MINUS JEDNA KRÁT EN — když NENÍ!
Nejvýš er krát en? Hamilton EXISTUJE!
Víc? Hamilton NENÍ! — Spor, pokud pé není en pé!

[Bridge]
[Slow, heavy]
Dej váhy jedna a dva — trojúhelník platí dál…
proto i METRICKÝ té es pé je en pé těžký král!
Optimum rovno en — právě když Hamilton žije…

[Chorus]
JEDNA — když hrana v grafu JE!
DVA PLUS ER MINUS JEDNA KRÁT EN — když NENÍ!
Nejvýš er krát en? Hamilton EXISTUJE!
Víc? Hamilton NENÍ! — Spor, pokud pé není en pé!
[End]
```

---

## 9. BELLMAN–FORD — „En minus jedna kol" (reggae)

**Téma:** běh algoritmu, věta o k-té iteraci (řetěz ALG → indukce → Bellmanův princip), detekce záporného cyklu.

**Title:** `En minus jedna kol (Bellman–Ford)`

**Styles:**
```
reggae, laid-back groove, offbeat guitar skank, warm bass, smooth male vocals, czech language vocals, all lyrics in Czech, sunny, hypnotic repetitive chorus
```

**Lyrics:**
```
[Verse 1]
Nula v esku, nekonečno všude jinde, jak to znáš,
en minus jedna kol — a v každém VŠECHNY hrany releksuješ.
Label correcting, nic se nezavírá,
ó en krát em — a záporná hrana? Žádná díra!

[Chorus]
En minus jedna kol, všechny hrany relaxuj!
Po ká kolech máš cesty na nejvýš ká hran!
Žádná cesta nemá víc než en minus jedna hran —
Bellman a Ford, ó en em — žádný klam!

[Verse 2]
Důkaz jede ve třech krocích, poslouchej ten ráj:
ALGORITMUS: el ká je nejvýš el ká minus jedna plus cena hrany,
INDUKCE: to je nejvýš cena cesty s ká minus jedna hranami,
PRINCIP OPTIMALITY: dohromady cesta s ká hranami — jaj!

[Chorus]
En minus jedna kol, všechny hrany relaxuj!
Po ká kolech máš cesty na nejvýš ká hran!
Žádná cesta nemá víc než en minus jedna hran —
Bellman a Ford, ó en em — žádný klam!

[Bridge]
Po konci projdi hrany ještě jednou, jen tak zkusmo:
když el té je větší než el vé plus cé vé té —
ZÁPORNÝ CYKLUS v grafu, pozor, kuš ho!
Nedosažitelné vrcholy? Nové es s nulovými hranami, jé!

[Chorus]
En minus jedna kol, všechny hrany relaxuj!
Po ká kolech máš cesty na nejvýš ká hran!
Žádná cesta nemá víc než en minus jedna hran —
Bellman a Ford, ó en em — žádný klam!
[End]
```

---

## 10. GRAHAMOVA NOTACE — „Alfa beta gama" (europop / ABBA styl)

**Téma:** slovníček α|β|γ — stroje, vlastnosti úloh, kritéria; rozdíl deadline (d̃) vs. due date (d).

**Title:** `Alfa beta gama (Grahamova notace)`

**Styles:**
```
euphoric europop, ABBA style, piano and disco strings, four-on-the-floor, male and female duet vocals, czech language vocals, all lyrics in Czech, joyful, extremely catchy chorus
```

**Lyrics:**
```
[Verse 1]
Alfa, to jsou STROJE: jednička je jeden stroj,
pé jsou paralelní stejné, kvé uniformní — rychlost hraje roli svou,
er jsou unrelated — tabulka časů, každý stroj svůj svět,
ó ef jé: open shop, flow shop, job shop — a pé es projekty hned!

[Chorus]
Alfa — beta — gama!
Stroje — úlohy — kritérium!
Vlnka nad dé je DEADLINE — tvrdá zeď,
bez vlnky DUE DATE — lateness, no problém!
Cé max, el max, suma cé jé —
alfa beta gama — celé schéma, jé!

[Verse 2]
Beta, to jsou VLASTNOSTI: pé em té en — smíš přerušit,
prec jsou předchůdci, temp: es í plus el í jé pod es jé musíš ctít,
er jé je release time — dřív se prostě nezačne,
pé jé rovno konstanta — všechno stejně dlouhé, vidíš, jak to jde snadně!

[Chorus]
Alfa — beta — gama!
Stroje — úlohy — kritérium!
Vlnka nad dé je DEADLINE — tvrdá zeď,
bez vlnky DUE DATE — lateness, no problém!
Cé max, el max, suma cé jé —
alfa beta gama — celé schéma, jé!

[Bridge]
Gama: cé max je makespan — konec posledního z nás,
el max: maximum z cé jé minus dé jé — zpoždění hlas,
suma cé jé, nebo s vahami suma vé jé cé jé,
a prázdné gama? Jen rozhodni: jde to, nejde — oukej!

[Chorus]
Alfa — beta — gama!
Stroje — úlohy — kritérium!
Vlnka nad dé je DEADLINE — tvrdá zeď,
bez vlnky DUE DATE — lateness, no problém!
Cé max, el max, suma cé jé —
alfa beta gama — celé schéma, jé!
[End]
```

---

## 11. KDO NA CO — „Tři zlomky" (country-polka)

**Téma:** mapa problém → algoritmus → faktor: LS 2−1/R, LPT 4/3−1/3R, M&C 2−2/R; EDD, Horn, CSB, Bratley, McNaughton, Rothkopf.

**Title:** `Tři zlomky (kdo na co v rozvrhování)`

**Styles:**
```
upbeat country polka crossover, accordion, banjo, cheerful male vocals, czech language vocals, all lyrics in Czech, humorous, fast singalong, festive
```

**Lyrics:**
```
[Verse 1]
Pé dva a cé max? En pé těžké — two partition to ví,
práh je půlka sumy pé — tak zní redukce slovy.
Pé s preempcí a cé max? McNaughton, ó en, easy!
Preempce, release, deadliny, jen rozhodnout? Maximální tok to jistí!

[Chorus]
List scheduling: DVĚ minus JEDNA lomeno er!
El pé té: ČTYŘI TŘETINY minus TŘETINA lomeno er!
Muntz a Coffman: DVĚ minus DVĚ lomeno er!
Tři zlomky pro zkoušku — tak si je pamatuj, věř!

[Verse 2]
Jeden stroj a el max? É dé dé — řaď podle due date!
Release a preempce k tomu? Horn — earliest deadline first, kamaráde!
Precedence navíc? Chetto, Silly, Bouchentouf — okna upraví,
release s tvrdým deadlinem bez preempce? Bratley — větve a meze — to tě zabaví!

[Chorus]
List scheduling: DVĚ minus JEDNA lomeno er!
El pé té: ČTYŘI TŘETINY minus TŘETINA lomeno er!
Muntz a Coffman: DVĚ minus DVĚ lomeno er!
Tři zlomky pro zkoušku — tak si je pamatuj, věř!

[Bridge]
Pé a cé max bez preempce: el pé té — nebo přesně Rothkopf, pseudopolynom!
Pé es jedna s temp: time-indexed í el pé — postav si dóm!
Jeden stroj, release, deadline: en pé těžké — three partition zvoní —
tahle mapa problém–algoritmus tě u zkoušky zachrání!

[Chorus]
List scheduling: DVĚ minus JEDNA lomeno er!
El pé té: ČTYŘI TŘETINY minus TŘETINA lomeno er!
Muntz a Coffman: DVĚ minus DVĚ lomeno er!
Tři zlomky pro zkoušku — tak si je pamatuj, věř!
[End]
```

---

## 12. KNAPSACK DP — „Stav je cena" (funk)

**Téma:** kurz učí NEOBVYKLOU DP: stav = cena, hodnota = min váha; rekurence, inicializace, rekonstrukce, O(nC); bonus Dantzig h + 2-aproximace.

**Title:** `Stav je cena (Knapsack DP)`

**Styles:**
```
funk, groovy slap bassline, tight brass section, wah guitar, charismatic male vocals, czech language vocals, all lyrics in Czech, playful, danceable, punchy horns
```

**Lyrics:**
```
[Verse 1]
Tenhle batoh je jiný, než ho znáš ze školy:
stav NENÍ kapacita — stav je CENA, holky!
Iks ká jé: nejmenší váha, jak cenu ká poskládat
z prvních jé položek — tak se to má počítat!

[Chorus]
Minimum ze dvou: NECH TO BÝT — iks ká, jé minus jedna,
nebo PŘIDEJ jé: iks, ká minus cé jé, plus váha vé jé!
Na konci vem největší ká s váhou nejvýš dvojité vé —
ó en krát cé — pseudopolynom — dé pé přes ceny, jé!

[Verse 2]
Nula nula je nula, jinak nekonečno na startu,
rozhodnutí si piš do es ká jé — neztratíš mapu.
Zpátky pak: když es je jedna, položka jé je v batohu,
sniž ká o cé jé — a couvej až k prologu!

[Chorus]
Minimum ze dvou: NECH TO BÝT — iks ká, jé minus jedna,
nebo PŘIDEJ jé: iks, ká minus cé jé, plus váha vé jé!
Na konci vem největší ká s váhou nejvýš dvojité vé —
ó en krát cé — pseudopolynom — dé pé přes ceny, jé!

[Bridge]
Bonus pro fajnšmekry: seřaď podle cé lomeno vé,
há je PRVNÍ položka, co se nevejde —
vezmi LEPŠÍ z prefixu a há samotné:
dvojková aproximace — polovina optima jistá je!

[Chorus]
Minimum ze dvou: NECH TO BÝT — iks ká, jé minus jedna,
nebo PŘIDEJ jé: iks, ká minus cé jé, plus váha vé jé!
Na konci vem největší ká s váhou nejvýš dvojité vé —
ó en krát cé — pseudopolynom — dé pé přes ceny, jé!
[End]
```

---

## 13. AC-3 PODRUHÉ — „Á cé tři" (reggaeton à la Despacito)

**Téma:** AC-3 ještě jednou, tentokrát jako letní latino hit (duet k písni 7 — kdo si nepamatuje
synth-pop, zapamatuje si reggaeton). Fakta 1:1 ze slidů 08_CP (slide 25–30): definice AC,
orientovanost, REVISE, fronta `Q := E(G)`, pravidlo znovuzařazení (i ≠ m), revize (k,m)
nemění AC hrany (m,k), prázdná doména → fail, AC není úplná (trojúhelník ≠).

**Nápad/Cíl písně:** AC-3 jako pomalý letní tanec na parketu. **Každé á si hledá svoje bé**
(= podporu přes hranu); kdo partnera nenajde, opouští parket (= REVISE ho smaže z domény).
Mazání jde „pomaličku", hodnotu po hodnotě, a fronta se pořád vrací. Pointa v bridgi:
**i když všichni mají pár (vše je konzistentní), svatba — řešení — zaručená není.**
AC je neúplná: pomaličku ti zúží svět, ale dořešit to musíš sám (search). Posluchač si odnese
dvě věci: mantru „pro každé á existuje bé" a varování „konzistence ≠ řešení".

**Frázování (proč to sedne do rytmu Despacita):**
- Hlavní hook je „á cé tři" = 3 slabiky na 4 noty originálu — poslední slabiku Suno
  přirozeně podrží přes dvě noty („á-cé-tří-í"). Kdyby ji ve vygenerované verzi
  odsekávalo krátce, přepiš hook v textu na „á cé tří-í".
- Refrén = 4 + 12 + 12 + 12 slabik, dvakrát za sebou; všechny řádky rýmované na „-ičku"
  (stejná role jako průběžný rým „-ito" v originále).
- Pre-chorus = 13 + 9 + 13 + 9 slabik (dlouhý řádek → krátká odpověď, stoupavá melodie).
- Rapová sloka zrcadlí slavné dvojité zdrobněliny: „krůček po krůčku… kousek po kousíčku".
- Tempo ~89 bpm, dembow beat, akustická kytara v intru.

**Title:** `Á cé tři (AC-3)`

**Styles:**
```
latin pop, reggaeton, 89 bpm, dembow rhythm, acoustic spanish guitar intro, smooth seductive male vocals, melodic rap verse by second male vocalist, czech language vocals, all lyrics in Czech, summer hit, sensual groove, extremely catchy chorus, polished modern production
```

**Lyrics:**
```
[Intro]
[Acoustic guitar, slow latin riff]
[Spoken Word]
Á cé tři… á cé tři…
(iks í… iks jé… ej)

[Verse 1]
Tý…
hrana iks í iks jé — kdy je konzistentní?
Pro každé á z dé í najdi bé v dé jé,
ať spolu splní všechna omezení.
Pozor — hrana má směr, zpátky neplatí!

Jé…
binární cé es pé, to je digraf gé,
mezi iks í, iks jé šipky obě dvě,
celé cé es pé je konzistentní jenom,
když každá z hran orientovaných sedí, jé.

[Pre-Chorus]
Jó, rivajz projde každé á v doméně dé í,
hledá mu podporu — bé v dé jé,
kdo svoje bé nenajde, ten z domény letí,
vyber si ká em, rivajz to teď!

[Chorus]
Á cé tři,
mažu ti hodnoty z domén, á cé tři,
kdo nemá svoje bé, zmizí za chviličku,
doména se tenčí, kousek po kousíčku.

Á cé tři,
vracím hrany do ká zpátky, á cé tři,
jen tu od em ne — tu nechám na poličku,
fronta zas naskočí — jedem, á cé tři.

[Post-Chorus]
(Škrtej! Škrtej!)
Každé á si hledá svoje bé, to jediné (e-oh),
kdo je sám a bez podpory, opouští parket (e-oh).
(Škrtej! Škrtej!)
Revize ká em hraně em ká neublíží (e-oh),
ta zůstává konzistentní, klidně si spí (e-oh).

[Rap Verse]
Krůček po krůčku, škrtá si á cé tři,
hodnotu za hodnotou, kousek po kousíčku,
fronta na startu: všechny hrany z grafu gé,
vyberu ká em, reviduju dé ká, jé!
Když jsem něco smazal, hrany do ká zpátky jdou,
jen hranu od em ne — tu mazání nezviklá,
a prázdná doména? Fail! Stopni muziku —
v týhle části prostoru řešení nenajdu!

[Pre-Chorus]
Jó, fronta se mi tenčí, už je skoro prázdná,
poslední rivajz — nic nemažu,
když nic nemažu, nic nevracím do fronty,
domény jsou konzistentní, jé!

[Chorus]
Á cé tři,
mažu ti hodnoty z domén, á cé tři,
kdo nemá svoje bé, zmizí za chviličku,
doména se tenčí, kousek po kousíčku.

Á cé tři,
vracím hrany do ká zpátky, á cé tři,
jen tu od em ne — tu nechám na poličku,
fronta zas naskočí — jedem, á cé tři.

[Bridge]
[Slow, intimate]
Tři v trojúhelníku, jedna dvě v doméně,
každý s každým nerovná se — zní to nadějně…
všechno konzistentní — a řešení žádné!
Konzistence hran ti štěstí nezaručí,
á cé tři zúží svět — dohledat musíš sám.

[Chorus]
Á cé tři,
mažu ti hodnoty z domén, á cé tři,
kdo nemá svoje bé, zmizí za chviličku,
doména se tenčí, kousek po kousíčku.

[Outro]
Á cé tři…
(každé á si hledá svoje bé)
Á cé tři…
(kdo nemá svoje bé, ten z domény jde)
[End]
```

---

## Další kandidáti (kdyby ses rozjel — stačí říct, dopíšu)

14. **Initial feasible flow** (4 kroky transformace, balance = Σl dovnitř − Σl ven, hrana t→s s ∞) — padá jako 2bodová kuchařka.
15. **Big-M + B&B pro ILP** (pořadí testů: infeasible → bound → integer → branch; ⌊k⌋ / ⌊k⌋+1) — slot 1 padá 100 %.
16. **Horn/EDF** (čtyřkrok t1, t2, T', δ + swap důkaz optimality).
17. **Bratley + BRTP** (3 podmínky bloku, postačující ≠ nutná).
18. **Totální unimodularita** (definice „každá čtvercová podmatice" + 2 postačující podmínky).
