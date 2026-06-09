/* ============================================================
   KOViz — vizualizační knihovna pro KO učebnici (čisté SVG, bez závislostí)
   API:
     KOViz.graph(el, spec)     — orientovaný/neorientovaný graf s váhami
     KOViz.lpRegion(el, spec)  — 2D přípustná oblast LP/ILP s mřížkou celočíselných bodů
     KOViz.stepper(el, spec)   — krokovaná vizualizace (frames přepínají stavy grafu)
     KOViz.icon(name)          — vrátí <img> ikonu z assets/icons
   Všechny barvy jdou přes CSS třídy (viz style.css), takže fungují v obou tématech.
   ============================================================ */
(function () {
  "use strict";
  const NS = "http://www.w3.org/2000/svg";

  function svgEl(tag, attrs) {
    const e = document.createElementNS(NS, tag);
    for (const k in attrs || {}) e.setAttribute(k, attrs[k]);
    return e;
  }

  // kořen assets — odvodí se z umístění tohoto skriptu (funguje v podsložkách)
  const SCRIPT_BASE = (function () {
    const s = document.currentScript;
    if (!s) return "assets/";
    return s.src.replace(/js\/viz\.js.*$/, "");
  })();

  function icon(name, cls) {
    const img = document.createElement("img");
    img.src = SCRIPT_BASE + "icons/" + name + ".svg";
    img.alt = "";
    img.className = cls || "ico";
    return img;
  }

  /* ---------- GRAF ----------
     spec = {
       w, h            : rozměry viewBoxu (default 640×360)
       directed        : true/false (default true)
       nodes: [{id, x, y, label?, cls?, sub?}]        — sub = malý text pod uzlem (např. l(v))
       edges: [{from, to, label?, cls?, curve?, dashed?}]  — curve: -1..1 prohnutí
       caption         : popisek pod obrázkem
       nodeR           : poloměr uzlu (default 19)
     }
     Vrací handle {svg, setNodeClass(id, cls), setEdgeClass(from,to,cls),
                   setNodeSub(id, text), setEdgeLabel(from,to,text)}        */
  function graph(el, spec) {
    const W = spec.w || 640, H = spec.h || 360, R = spec.nodeR || 19;
    el.classList.add("viz");
    const svg = svgEl("svg", { viewBox: `0 0 ${W} ${H}`, class: "viz-canvas", role: "img" });
    if (spec.directed !== false) {
      const defs = svgEl("defs", {});
      const mk = (id, cls) => {
        const m = svgEl("marker", { id, viewBox: "0 0 10 10", refX: 9, refY: 5, markerWidth: 7, markerHeight: 7, orient: "auto-start-reverse" });
        const p = svgEl("path", { d: "M0,0 L10,5 L0,10 z" });
        p.style.fill = "currentColor";
        m.appendChild(p); defs.appendChild(m);
      };
      mk("arr"); // šipka dědí currentColor z hrany přes CSS stroke→fill nelze; nastavíme fill v JS níže
      svg.appendChild(defs);
    }

    const nodeMap = {}, edgeMap = {};
    (spec.nodes || []).forEach(n => (nodeMap[n.id] = n));

    const gEdges = svgEl("g", {}), gNodes = svgEl("g", {});
    svg.appendChild(gEdges); svg.appendChild(gNodes);

    // hrany
    (spec.edges || []).forEach(e => {
      const a = nodeMap[e.from], b = nodeMap[e.to];
      if (!a || !b) { console.warn("KOViz: neznámý uzel hrany", e); return; }
      const g = svgEl("g", { class: "edge" + (e.cls ? " " + e.cls : "") });
      const dx = b.x - a.x, dy = b.y - a.y;
      const len = Math.hypot(dx, dy) || 1;
      const ux = dx / len, uy = dy / len;
      // zkrácení o poloměr uzlu (+3 ať šipka nelepí na kruh)
      const pad = R + 3;
      const x1 = a.x + ux * pad, y1 = a.y + uy * pad;
      const x2 = b.x - ux * pad, y2 = b.y - uy * pad;
      let path, midX, midY;
      const curve = e.curve || 0;
      if (curve === 0) {
        path = svgEl("path", { d: `M${x1},${y1} L${x2},${y2}` });
        midX = (x1 + x2) / 2; midY = (y1 + y2) / 2;
      } else {
        // kvadratická křivka, kontrolní bod kolmo od středu
        const nx = -uy, ny = ux;
        const cx = (x1 + x2) / 2 + nx * 60 * curve;
        const cy = (y1 + y2) / 2 + ny * 60 * curve;
        path = svgEl("path", { d: `M${x1},${y1} Q${cx},${cy} ${x2},${y2}` });
        midX = (x1 + 2 * cx + x2) / 4; midY = (y1 + 2 * cy + y2) / 4;
      }
      if (spec.directed !== false && !e.undirected) path.setAttribute("marker-end", "url(#arr)");
      if (e.dashed) path.setAttribute("stroke-dasharray", "6 5");
      g.appendChild(path);
      if (e.label !== undefined && e.label !== null && e.label !== "") {
        const t = svgEl("text", { x: midX, y: midY, "text-anchor": "middle", dy: "-6" });
        t.textContent = e.label;
        const bg = svgEl("rect", { class: "wbg", rx: 4 });
        g.appendChild(bg); g.appendChild(t);
        // pozadí pod textem až po vložení do DOM (potřebuje getBBox)
        requestAnimationFrame(() => {
          try {
            const bb = t.getBBox();
            bg.setAttribute("x", bb.x - 3); bg.setAttribute("y", bb.y - 1);
            bg.setAttribute("width", bb.width + 6); bg.setAttribute("height", bb.height + 2);
          } catch (_) {}
        });
      }
      edgeMap[e.from + "->" + e.to] = g;
      gEdges.appendChild(g);
    });

    // šipky: marker dědí barvu jen přes context-fill, fallback: obarvit dle stavu CSS nelze → necháme neutrální barvu inkoustu
    // (záměrně: šipka má vždy barvu hrany, řešíme přes CSS pravidlo .edge path {stroke} + marker fill se nastaví na currentColor)

    // uzly
    (spec.nodes || []).forEach(n => {
      const g = svgEl("g", { class: "node" + (n.cls ? " " + n.cls : "") });
      g.appendChild(svgEl("circle", { cx: n.x, cy: n.y, r: R }));
      const t = svgEl("text", { x: n.x, y: n.y, "text-anchor": "middle", dy: "5", "font-size": "14" });
      t.textContent = n.label !== undefined ? n.label : n.id;
      g.appendChild(t);
      if (n.sub) {
        const s = svgEl("text", { x: n.x, y: n.y + R + 15, "text-anchor": "middle", "font-size": "12.5", class: "subtext" });
        s.textContent = n.sub;
        s.style.fill = "var(--accent)";
        s.style.fontWeight = "700";
        g.appendChild(s);
      }
      nodeMap[n.id]._g = g;
      gNodes.appendChild(g);
    });

    el.appendChild(svg);
    if (spec.caption) {
      const c = document.createElement("div");
      c.className = "viz-caption";
      c.innerHTML = spec.caption;
      el.appendChild(c);
    }

    return {
      svg,
      setNodeClass(id, cls) { const n = nodeMap[id]; if (n && n._g) n._g.setAttribute("class", "node" + (cls ? " " + cls : "")); },
      setEdgeClass(from, to, cls) { const g = edgeMap[from + "->" + to]; if (g) g.setAttribute("class", "edge" + (cls ? " " + cls : "")); },
      setNodeSub(id, text) {
        const n = nodeMap[id]; if (!n || !n._g) return;
        let s = n._g.querySelector(".subtext");
        if (!s) {
          s = svgEl("text", { x: n.x, y: n.y + R + 15, "text-anchor": "middle", "font-size": "12.5", class: "subtext" });
          s.style.fill = "var(--accent)"; s.style.fontWeight = "700";
          n._g.appendChild(s);
        }
        s.textContent = text;
      },
      setEdgeLabel(from, to, text) {
        const g = edgeMap[from + "->" + to]; if (!g) return;
        const t = g.querySelector("text"); if (t) t.textContent = text;
      },
    };
  }

  /* ---------- LP REGION ----------
     spec = {
       xmax, ymax       : rozsah os (celá čísla, default 8)
       constraints: [{a, b, c, label?}]  — polorovina a·x + b·y <= c
       integer          : true → vykresli mřížku celočíselných bodů, zvýrazni přípustné
       opt              : [x, y] — bod optima (zvýrazní červeně)
       objective        : {a, b} — směr účelové fce (nakreslí šipku gradientu)
       caption
     } */
  function lpRegion(el, spec) {
    const xmax = spec.xmax || 8, ymax = spec.ymax || 8;
    const W = 460, H = 400, padL = 46, padB = 40, padT = 18, padR = 18;
    const sx = (W - padL - padR) / xmax, sy = (H - padT - padB) / ymax;
    const X = v => padL + v * sx, Y = v => H - padB - v * sy;

    el.classList.add("viz");
    const svg = svgEl("svg", { viewBox: `0 0 ${W} ${H}`, class: "viz-canvas", role: "img" });

    // mřížka
    const grid = svgEl("g", { class: "grid" });
    for (let i = 0; i <= xmax; i++) grid.appendChild(svgEl("line", { x1: X(i), y1: Y(0), x2: X(i), y2: Y(ymax) }));
    for (let j = 0; j <= ymax; j++) grid.appendChild(svgEl("line", { x1: X(0), y1: Y(j), x2: X(xmax), y2: Y(j) }));
    svg.appendChild(grid);

    // přípustná oblast: ořezávání polygonu polorovinami (Sutherland–Hodgman)
    let poly = [[0, 0], [xmax, 0], [xmax, ymax], [0, ymax]];
    const cons = (spec.constraints || []).concat([{ a: -1, b: 0, c: 0 }, { a: 0, b: -1, c: 0 }]); // x>=0, y>=0
    cons.forEach(({ a, b, c }) => {
      const out = [];
      for (let i = 0; i < poly.length; i++) {
        const P = poly[i], Q = poly[(i + 1) % poly.length];
        const inP = a * P[0] + b * P[1] <= c + 1e-9;
        const inQ = a * Q[0] + b * Q[1] <= c + 1e-9;
        if (inP) out.push(P);
        if (inP !== inQ) {
          const t = (c - a * P[0] - b * P[1]) / (a * (Q[0] - P[0]) + b * (Q[1] - P[1]));
          out.push([P[0] + t * (Q[0] - P[0]), P[1] + t * (Q[1] - P[1])]);
        }
      }
      poly = out;
    });
    if (poly.length) {
      const pts = poly.map(p => `${X(p[0])},${Y(p[1])}`).join(" ");
      svg.appendChild(svgEl("polygon", { points: pts, class: "region" }));
    }

    // hranice omezení (čáry) + popisky
    (spec.constraints || []).forEach(({ a, b, c, label }, idx) => {
      // úsečka a·x + b·y = c oříznutá do okna
      const pts = [];
      if (Math.abs(b) > 1e-12) {
        const y0 = (c - a * 0) / b, yx = (c - a * xmax) / b;
        if (y0 >= -0.001 && y0 <= ymax + 0.001) pts.push([0, y0]);
        if (yx >= -0.001 && yx <= ymax + 0.001) pts.push([xmax, yx]);
      }
      if (Math.abs(a) > 1e-12) {
        const x0 = (c - b * 0) / a, xy = (c - b * ymax) / a;
        if (x0 >= -0.001 && x0 <= xmax + 0.001) pts.push([x0, 0]);
        if (xy >= -0.001 && xy <= xmax + 0.001) pts.push([xy, ymax]);
      }
      if (pts.length >= 2) {
        const [p, q] = [pts[0], pts[pts.length - 1]];
        const ln = svgEl("line", { x1: X(p[0]), y1: Y(p[1]), x2: X(q[0]), y2: Y(q[1]) });
        ln.style.stroke = "var(--accent)"; ln.style.strokeWidth = "1.8";
        svg.appendChild(ln);
        if (label) {
          const t = svgEl("text", { x: X((p[0] + q[0]) / 2) + 6, y: Y((p[1] + q[1]) / 2) - 6, "font-size": "12" });
          t.textContent = label; t.style.fill = "var(--accent)";
          svg.appendChild(t);
        }
      }
    });

    // celočíselné body
    if (spec.integer) {
      for (let i = 0; i <= xmax; i++) for (let j = 0; j <= ymax; j++) {
        const feas = cons.every(({ a, b, c }) => a * i + b * j <= c + 1e-9);
        const isOpt = spec.opt && spec.opt[0] === i && spec.opt[1] === j;
        svg.appendChild(svgEl("circle", {
          cx: X(i), cy: Y(j), r: isOpt ? 6 : 3.4,
          class: "latpt" + (isOpt ? " opt" : feas ? " feas" : ""),
        }));
      }
    } else if (spec.opt) {
      svg.appendChild(svgEl("circle", { cx: X(spec.opt[0]), cy: Y(spec.opt[1]), r: 6, class: "latpt opt" }));
    }

    // osy
    const ax = svgEl("g", { class: "axis" });
    ax.appendChild(svgEl("line", { x1: X(0), y1: Y(0), x2: X(xmax) + 8, y2: Y(0) }));
    ax.appendChild(svgEl("line", { x1: X(0), y1: Y(0), x2: X(0), y2: Y(ymax) - 8 }));
    for (let i = 0; i <= xmax; i++) {
      const t = svgEl("text", { x: X(i), y: Y(0) + 17, "text-anchor": "middle" }); t.textContent = i; ax.appendChild(t);
    }
    for (let j = 1; j <= ymax; j++) {
      const t = svgEl("text", { x: X(0) - 9, y: Y(j) + 4, "text-anchor": "end" }); t.textContent = j; ax.appendChild(t);
    }
    const lx = svgEl("text", { x: X(xmax) + 4, y: Y(0) - 8 }); lx.textContent = spec.xlabel || "x₁"; ax.appendChild(lx);
    const ly = svgEl("text", { x: X(0) + 7, y: Y(ymax) + 2 }); ly.textContent = spec.ylabel || "x₂"; ax.appendChild(ly);
    svg.appendChild(ax);

    // gradient účelové funkce
    if (spec.objective) {
      const { a, b } = spec.objective;
      const n = Math.hypot(a, b) || 1;
      const cx = X(xmax * 0.78), cy = Y(ymax * 0.85);
      const g = svgEl("g", {});
      const ln = svgEl("line", { x1: cx, y1: cy, x2: cx + (a / n) * 42, y2: cy - (b / n) * 42, "marker-end": "url(#arrObj)" });
      ln.style.stroke = "var(--bad)"; ln.style.strokeWidth = "2.4";
      const defs = svgEl("defs", {});
      const m = svgEl("marker", { id: "arrObj", viewBox: "0 0 10 10", refX: 9, refY: 5, markerWidth: 6, markerHeight: 6, orient: "auto" });
      const mp = svgEl("path", { d: "M0,0 L10,5 L0,10 z" }); mp.style.fill = "var(--bad)";
      m.appendChild(mp); defs.appendChild(m); svg.appendChild(defs);
      const t = svgEl("text", { x: cx + (a / n) * 50, y: cy - (b / n) * 50, "font-size": "12.5", "text-anchor": "middle" });
      t.textContent = spec.objective.label || "směr růstu c"; t.style.fill = "var(--bad)"; t.style.fontWeight = "600";
      g.appendChild(ln); g.appendChild(t); svg.appendChild(g);
    }

    el.appendChild(svg);
    if (spec.caption) {
      const c = document.createElement("div");
      c.className = "viz-caption"; c.innerHTML = spec.caption;
      el.appendChild(c);
    }
    return { svg };
  }

  /* ---------- STEPPER ----------
     Krokování stavů nad grafem (pro algoritmy: Dijkstra, FF, AC-3…).
     spec = {
       graph: <spec pro KOViz.graph>,
       frames: [{desc, nodes: {id: cls|null}, subs: {id: text}, edges: {"a->b": cls|null}, labels: {"a->b": text}}]
       caption
     }
     Každý frame je ABSOLUTNÍ stav (ne diff) — jednodušší na autorování i debug.  */
  function stepper(el, spec) {
    const h = graph(el, Object.assign({}, spec.graph, { caption: null }));
    const ctrls = document.createElement("div");
    ctrls.className = "viz-controls";
    const btnReset = vbtn("rotate-ccw", "Začátek");
    const btnPrev = vbtn("skip-back", "Krok zpět");
    const btnNext = vbtn("skip-forward", "Další krok");
    const state = document.createElement("span");
    state.className = "vstate";
    ctrls.appendChild(btnReset); ctrls.appendChild(btnPrev); ctrls.appendChild(btnNext); ctrls.appendChild(state);
    el.appendChild(ctrls);
    const desc = document.createElement("div");
    desc.className = "viz-caption";
    el.appendChild(desc);

    let i = 0;
    const frames = spec.frames || [];

    function apply() {
      const f = frames[i] || { desc: "" };
      // reset všech do defaultu, pak aplikuj frame (absolutní stav)
      (spec.graph.nodes || []).forEach(n => h.setNodeClass(n.id, (f.nodes && f.nodes[n.id]) || n.cls || ""));
      (spec.graph.edges || []).forEach(e => {
        const k = e.from + "->" + e.to;
        h.setEdgeClass(e.from, e.to, (f.edges && f.edges[k]) || e.cls || "");
        if (f.labels && f.labels[k] !== undefined) h.setEdgeLabel(e.from, e.to, f.labels[k]);
        else if (e.label !== undefined) h.setEdgeLabel(e.from, e.to, e.label);
      });
      if (f.subs) for (const id in f.subs) h.setNodeSub(id, f.subs[id]);
      else (spec.graph.nodes || []).forEach(n => { if (n.sub !== undefined) h.setNodeSub(n.id, n.sub); });
      // u frames bez subs vyčisti dynamické sub texty
      if (!f.subs) (spec.graph.nodes || []).forEach(n => { if (n.sub === undefined) h.setNodeSub(n.id, ""); });
      desc.innerHTML = "<strong>Krok " + (i + 1) + "/" + frames.length + ":</strong> " + (f.desc || "");
      state.textContent = (i + 1) + " / " + frames.length;
      btnPrev.disabled = i === 0; btnNext.disabled = i === frames.length - 1;
    }
    btnNext.onclick = () => { if (i < frames.length - 1) { i++; apply(); } };
    btnPrev.onclick = () => { if (i > 0) { i--; apply(); } };
    btnReset.onclick = () => { i = 0; apply(); };
    apply();
    return { graphHandle: h, goto(n) { i = Math.max(0, Math.min(frames.length - 1, n)); apply(); } };
  }

  function vbtn(iconName, label) {
    const b = document.createElement("button");
    b.className = "vbtn";
    b.appendChild(icon(iconName));
    b.appendChild(document.createTextNode(label));
    return b;
  }

  window.KOViz = { graph, lpRegion, stepper, icon };
})();
