# STAV projektu KO učebnice

Aktualizováno: 9. 6. 2026 večer

## Hotovo
- [x] OSNOVA.md (93 lekcí, 3× kriticky iterováno workflow)
- [x] Infrastruktura: style.css (light+dark), viz.js (graph/lpRegion/stepper/icon), app.js (téma, progress, KaTeX, back), šablona lekce, index.html, viz-gallery.html
- [x] Ikony (28×, better-icons CLI → assets/icons/)
- [x] plan/INDEX_ZDROJU.md — mapa zdrojů s čísly řádků
- [x] CLAUDE.md s trvalými pokyny

## Píše se
- [ ] K0: L0.1–L0.8 (pipeline tvůrce→kritik→korektor) — L0.1–L0.4 po korektuře (79000cc), L0.5–L0.8 napsány tvůrcem (čeká kritik)
- [ ] K1: L1.1–L1.15 — L1.1, L1.2 po korektuře; L1.3 po korektuře; L1.4 po korektuře; L1.5 po korektuře; L1.6 napsána tvůrcem (čeká kritik); viz.js: přidán `labelAt` u lpRegion constraints + posun popisku objective šipky; oprava lpRegion: dedupe průsečíků hraniční čáry procházející rohy okna (jinak se čára+popisek nevykreslí — ukázka 4b ve viz-gallery); přidán `KOViz.fnPlot` (graf funkce po úsecích — nespojité fce, ukázka 4c ve viz-gallery, použit v L1.6)

## Fronta
- K2 (18 lekcí) → K3 (16) → K4 (15) → K5 (16) → K6 (3) → K7 (2)

## Poznámky k psaní lekcí (ověřené postupy)
- Zadání úloh hledej v INDEX_ZDROJU.md → čti PŘESNÉ řádky zdrojů, zadání citovat 1:1 EN.
- Stepper frames jsou ABSOLUTNÍ stavy (ne diffy) — viz viz-gallery.html ukázka 5.
- Po vytvoření lekce: headless Chrome screenshot → Read PNG → kontrola glitchů.
- Commit po každém kroku pipeline.
- L1.2 obsahuje dopředné odkazy na l1-3.html, l1-4.html a l1-14.html (sériový workflow). l1-3.html už existuje a titulek sedí ✓; po dopsání L1.14 ověřit zbylé. l1-4.html už existuje (titulek sedí ✓). L1.4 má dopředné odkazy na l1-5.html (pager — existuje ✓) a l1-8.html (řešení T02 — modelování maxima). L1.5 má dopředné odkazy na l1-6.html (pager + výklad/takeaways — fixed-charge; existuje ✓). L1.6 má dopředný odkaz na l1-7.html (pager — po dopsání L1.7 ověřit titulek).
