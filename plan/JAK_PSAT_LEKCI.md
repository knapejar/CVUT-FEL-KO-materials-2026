# Checklist: jak napsat lekci

1. **Načti zdroje**: OSNOVA.md (najdi svou lekci — Jedna nová věc, takeaways, prereq, úlohy) + plan/INDEX_ZDROJU.md → otevři PŘESNÉ řádky zdrojových souborů v ___MATERIALS. Bez tohoto kroku NEPIŠ.
2. **Zkopíruj šablonu** plan/SABLONA_LEKCE.html → k<X>/l<X>-<Y>.html. Vyplň ID, název, breadcrumb, pager (prev/next dle OSNOVA pořadí: v K1 jde L1.9 po L1.8, POZOR v K5 je L5.0 po L5.1).
3. **Výklad**: česky, EN termíny tučně s překladem. Veď studenta `<details class="try">` otázkami k samostatnému objevení pointy (pedagogika „přijdu si na to sám"). Jedna nová věc — nic navíc.
4. **Vizualizace**: každý graf NAKRESLI (KOViz.graph), LP oblasti KOViz.lpRegion, algoritmy KOViz.stepper. Pozice uzlů ručně, bez překryvů.
5. **Key takeaways**: box s id="takeaways", 2–5 odrážek dle OSNOVA (můžeš zpřesnit).
6. **Úlohy**: 4-dílný formát (a EN zadání 1:1 / b odkazy na lekce / c jak uvažovat / d úplné řešení v details). FOTO úlohy: hlavička .task-head.foto + foto-badge + box.foto s instrukcí.
7. **Nebezpečné polopravdy** (OSNOVA „Mezery a rizika" bod 6) → .box.danger.
8. **Index**: odkaz v index.html už existuje — zkontroluj, že soubor sedí s odkazem.
9. **Screenshot kontrola**: headless Chrome (příkaz v CLAUDE.md) → Read PNG → oprav glitche (překryvy, useknutí, nerenderovaná $matematika$).
10. **Commit**: `git add <soubory> && git commit -m "K1/L1.4: nova lekce big-M"`.

## Časté chyby (z kritik)
- Použití konceptu, který ještě nebyl zaveden (zkontroluj prereq řetěz v OSNOVA).
- České zadání úlohy (musí být EN 1:1).
- Vymyšlená čísla v úloze (musí sedět se zdrojem!).
- Stepper s diff-frames místo absolutních stavů.
- Zapomenutý data-lesson-id nebo špatný pager.
