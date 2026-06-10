# CLAUDE.md — KO učebnice (materials_na_test)

Učební web pro zkoušku z Kombinatorické optimalizace (KO, FEL ČVUT) **15. 6. 2026**.
Statický web vystavitelný na **GitHub Pages** (žádný build step, vše funguje otevřením HTML).

## Trvalé pokyny od uživatele (NIKDY neporušit)

1. **Čeština se správnou diakritikou** ve výkladu. **Zadání úloh VŽDY anglicky, co nejblíže 1:1 originálu** (písemka je anglicky). Klíčové pojmy uvádět dvojjazyčně při prvním výskytu: *shortest path (nejkratší cesta)*. Ústní je česky → student musí znát oba jazyky.
2. **Matematická notace** dle konvencí předmětu (KaTeX, viz níže). Např. $C_{max}$, $1|prec|\sum w_j C_j$, $\delta^+(v)$, big-M.
3. **PŘED psaním každé kapitoly/lekce ZNOVU POZORNĚ PROČÍST zdrojové materiály** k tématu (viz `plan/INDEX_ZDROJU.md` — mapa soubor→řádky). Psát lekci bez načtení zdrojů = KRITICKÁ CHYBA (riziko nepravdivých informací).
4. **Pedagogika „přijdu si na to sám"**: výklad vede studenta návodnými otázkami (`<details class="try">` — zkus odpovědět, pak rozklikni). Důležité poznatky NEservírovat rovnou; navést. Klidně za cenu delší lekce.
5. **Každá lekce = přesně JEDNA nová věc** (viz OSNOVA.md). Lekce končí Key takeaways (linkovatelné, mají `id`).
6. **Úlohy „na papír" mají 4-dílný formát**: (a) Co je v zadání? (b) Co budeme potřebovat? = odkazy na lekce (c) Jak nad úlohou uvažovat? (d) Úplné řešení v `<details class="solution">`. Zadání (a) anglicky 1:1 dle originálu.
7. **[FOTO] úlohy**: závěrečné úlohy kapitol — student počítá na papír a posílá foto ke kontrole. V úloze výrazný box `box foto` s instrukcí.
8. **Backlinky**: běžné `<a href>` odkazy mezi lekcemi (tlačítko zpět prohlížeče pak funguje). Navíc tlačítko `data-back` v topbaru. Na key takeaways odkazovat anchorem: `../k1/l1-4.html#takeaways`.
9. **Vizualizace**: vlastní, přes `assets/js/viz.js` (SVG). Grafy NIKDY jen výčtem hran — vždy nakreslit. Pozice uzlů rozmísťovat pečlivě bez překryvů.
10. **Ikony**: `assets/icons/*.svg` (stažené přes `npx better-icons get <set>:<name>`). Nové: `npx better-icons search <term>`, pak `get`.
11. **Git**: každý dokončený krok subagenta (autor/korektor) končí commitem se stručnou zprávou. Formát: `K1/L1.4: nova lekce big-M` / `K1/L1.4: oprava po kritice`.
12. **Workflow psaní lekcí**: lekce píší tvůrci **sériově** jeden po druhém (navazují na sebe), každá lekce končí commitem. Kritika/korektura se NEspouští průběžně — proběhne později v samostatném opravném běhu.
13. Interní poznámky/plány v `plan/` (STAV.md = aktuální stav, INDEX_ZDROJU.md = mapa zdrojů, JAK_PSAT_LEKCI.md = checklist).

## Zdroje

- Zdrojové materiály (read-only): `c:/Users/Jarda/REPO/FEL/KO/___MATERIALS/`
  - `prezentace/01–08_*.md` — přednáškové slidy (definice, věty, důkazy)
  - `historicke_zadani_testu.md`, `historicke_zadani_testu_2.md` — přepisy zkoušek (zadání 1:1!)
  - `testy/*.md` — další testy, úkoly, souhrny
  - `analyza_predikce_KO_15-6-2026.html` — analýza termínů a predikce
- Mapa zdrojů s čísly řádků: `plan/INDEX_ZDROJU.md`
- Osnova všech lekcí: `OSNOVA.md` (93 lekcí, K0–K7, ID typu L1.4)

## Architektura webu

```
index.html              — domovská stránka (kapitoly, lekce, progress)
k0/ … k7/               — kapitoly, lekce = k1/l1-4.html (ID L1.4 → soubor l1-4.html)
assets/css/style.css    — jediný stylesheet, světlé+tmavé téma (data-theme na <html>)
assets/js/viz.js        — KOViz: graph / lpRegion / stepper / icon (čisté SVG, bez závislostí)
assets/js/app.js        — téma, zpět-tlačítko, progress (localStorage), KaTeX auto-render
assets/icons/*.svg      — ikony (better-icons / lucide)
viz-gallery.html        — galerie komponent (pro vizuální kontrolu po změnách viz.js)
plan/                   — interní poznámky (neodkazovat z webu)
```

- **KaTeX z CDN** (jsdelivr) — funguje na GH Pages; delimitery `$…$`, `$$…$$`.
- `.nojekyll` v rootu (GH Pages bez Jekyllu).
- Vše UTF-8: `<meta charset="UTF-8">` povinné v každém HTML.

## Šablona lekce

Kanonická šablona: `plan/SABLONA_LEKCE.html` — **kopírovat a plnit**. Závazné prvky:
- `<html lang="cs">`, UTF-8, title `L1.4 · Název — KO`
- topbar: domů → kapitola → ID lekce; tlačítko `data-back`; přepínač tématu `data-theme-toggle`
- hlavička: `.lesson-meta` (chip s ID, kapitola, [MUST]/[NICE]), `<h1>`, `.one-new-thing` (Jedna nová věc)
- tělo: výklad s `<details class="try">` otázkami, vizualizace `<div class="viz">` + skript
- `.box.takeaways` s `id="takeaways"` — Key takeaways (odrážky)
- úlohy `.task` (4-dílný formát, hlavička `.task-head`, u FOTO `.task-head.foto` + `.foto-badge`)
- `.done-toggle` s `data-lesson-id="L1.4"` (checkbox hotovo)
- `.pager` (předchozí/další lekce)
- skripty na konci: KaTeX CDN (core + auto-render), `viz.js`, `app.js` — relativní cesty `../assets/...`

## Jak vytvořit vizualizaci

1. Použij `KOViz.graph` (grafy), `KOViz.lpRegion` (LP/ILP 2D oblasti), `KOViz.fnPlot` (funkce po úsecích), `KOViz.stepper` (krokování algoritmu — frames jsou ABSOLUTNÍ stavy, ne diffy).
2. Pozice uzlů zadávej ručně (x,y ve viewBoxu 640×360) — rozmístit bez překryvů, popisky hran nesmí kolidovat.
3. Nové sdílené komponenty přidávej do `viz.js` (ne inline do lekcí), ať je používají další lekce. Po změně `viz.js` přidej ukázku do `viz-gallery.html`.

## Konvence obsahu

- Nadpisy sekcí lekce: `<h2>`; krok výkladu = krátký odstavec + otázka/odpověď; max ~1 obrazovka na sekci.
- Anglické termíny tučně s českým překladem v závorce při prvním výskytu.
- Mat. proměnné dle materiálů: $x_{ij}$, $C_{max}$, $L_{max}$, $r_j$, $p_j$, $\tilde{d}_j$ (deadline), $d_j$ (due date), big-M jako $M$.
- Odkaz na lekci: `<a href="../k0/l0-8.html">[L0.8] Binární proměnná</a>`; na takeaways `#takeaways`.
- Nebezpečné polopravdy (viz OSNOVA.md sekce „Mezery a rizika" bod 6) vždy v `.box.danger`.

## Stav projektu

Aktuální stav drž v `plan/STAV.md` (co je hotovo, co se píše, co dál). Po dopsání lekce aktualizuj `index.html` (odkaz + štítky) a `plan/STAV.md`.
