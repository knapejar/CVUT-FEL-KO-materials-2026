/* ============================================================
   app.js — společné chování stránek KO učebnice
   - přepínání tématu (light/dark, localStorage)
   - tlačítko „zpět odkud jsem přišel" (history.back s fallbackem)
   - sledování dokončených lekcí (localStorage, klíč ko-done)
   - KaTeX auto-render (delimitery $…$ a $$…$$)
   ============================================================ */
(function () {
  "use strict";

  /* ---------- téma ---------- */
  const saved = localStorage.getItem("ko-theme");
  if (saved) document.documentElement.setAttribute("data-theme", saved);
  else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches)
    document.documentElement.setAttribute("data-theme", "dark");

  function setupThemeToggle() {
    const btn = document.querySelector("[data-theme-toggle]");
    if (!btn) return;
    const render = () => {
      const dark = document.documentElement.getAttribute("data-theme") === "dark";
      btn.innerHTML = "";
      btn.appendChild(KOViz.icon(dark ? "sun" : "moon"));
      btn.title = dark ? "Přepnout na světlé téma" : "Přepnout na tmavé téma";
    };
    btn.addEventListener("click", () => {
      const dark = document.documentElement.getAttribute("data-theme") === "dark";
      const next = dark ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem("ko-theme", next);
      render();
    });
    render();
  }

  /* ---------- tlačítko zpět ---------- */
  function setupBackButton() {
    document.querySelectorAll("[data-back]").forEach(btn => {
      btn.addEventListener("click", () => {
        if (history.length > 1 && document.referrer && new URL(document.referrer).origin === location.origin) {
          history.back();
        } else {
          // fallback: domů (relativní cesta dle hloubky stránky)
          location.href = btn.getAttribute("data-back") || "../index.html";
        }
      });
    });
  }

  /* ---------- hotovo / progress ---------- */
  function doneSet() {
    try { return new Set(JSON.parse(localStorage.getItem("ko-done") || "[]")); }
    catch (_) { return new Set(); }
  }
  function saveDone(s) { localStorage.setItem("ko-done", JSON.stringify([...s])); }

  function setupDoneToggle() {
    const t = document.querySelector("[data-lesson-id]");
    if (!t) return;
    const id = t.getAttribute("data-lesson-id");
    const cb = t.querySelector("input[type=checkbox]");
    const refresh = () => {
      const isDone = doneSet().has(id);
      cb.checked = isDone;
      t.classList.toggle("is-done", isDone);
    };
    cb.addEventListener("change", () => {
      const s = doneSet();
      if (cb.checked) s.add(id); else s.delete(id);
      saveDone(s); refresh();
    });
    refresh();
  }

  function markIndexDone() {
    const s = doneSet();
    document.querySelectorAll("[data-done-mark]").forEach(el => {
      if (s.has(el.getAttribute("data-done-mark"))) {
        const m = document.createElement("span");
        m.className = "done"; m.textContent = "✓";
        el.prepend(m);
      }
    });
  }

  /* ---------- KaTeX ---------- */
  function renderMath() {
    if (window.renderMathInElement) {
      renderMathInElement(document.body, {
        delimiters: [
          { left: "$$", right: "$$", display: true },
          { left: "$", right: "$", display: false },
          { left: "\\(", right: "\\)", display: false },
          { left: "\\[", right: "\\]", display: true },
        ],
        throwOnError: false,
      });
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    setupThemeToggle();
    setupBackButton();
    setupDoneToggle();
    markIndexDone();
    renderMath();
  });
})();
