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
- [ ] K1: L1.1–L1.15 — L1.1 napsána tvůrcem (čeká kritik); viz.js: přidán `labelAt` u lpRegion constraints + posun popisku objective šipky

## Fronta
- K2 (18 lekcí) → K3 (16) → K4 (15) → K5 (16) → K6 (3) → K7 (2)

## Poznámky k psaní lekcí (ověřené postupy)
- Zadání úloh hledej v INDEX_ZDROJU.md → čti PŘESNÉ řádky zdrojů, zadání citovat 1:1 EN.
- Stepper frames jsou ABSOLUTNÍ stavy (ne diffy) — viz viz-gallery.html ukázka 5.
- Po vytvoření lekce: headless Chrome screenshot → Read PNG → kontrola glitchů.
- Commit po každém kroku pipeline.
- L1.2 obsahuje dopředné odkazy na l1-3.html, l1-4.html a l1-14.html (zatím neexistují — sériový workflow). Po dopsání L1.3/L1.4/L1.14 ověřit, že názvy souborů a titulky v odkazech (vč. pageru „Další“) sedí.
