# DSE Masterclass — Tutorial Application

Bilingual (English / বাংলা) React reader for *Professional DSE Trading & Investment Masterclass*.

```bash
cd app
npm install
npm run dev      # http://localhost:5173
npm run build
```

## What's here

- **80 chapters across 7 Parts**, every one navigable, each rendering the book's
  fixed 13-block structure.
- **Chapters 1–2 fully authored** in both languages from `00_Front_Matter_and_Part_I.md`.
  The remaining 78 are scaffolded: real titles, correct Part, 13-block spine, marked
  *Outline*.
- **Three interactive calculators** built from the book's formulas — they reproduce the
  worked examples exactly (Ch 1: 14.40% / 39th percentile / Neutral; Ch 2: 2.86% spread,
  4.4 and 26.7 days, 5.56% round-trip, REJECT).
- **Blocks 6 and 7 are runnable, not printed.** The Excel block downloads a real `.xlsx`
  with live formulas; the Python block executes in-browser via Pyodide. A reader who
  does not code can verify both without installing anything.
- Scored quizzes, reveal-answer interview cards, reading progress — all persisted to
  `localStorage`.

## Two errors this surfaced in the source markdown

Making Block 7 runnable immediately caught two discrepancies in Chapter 2's printed
"Expected output" (§2.7). Both are in the *printed output*, not the code:

1. **GP days-to-liquidate is off by 10×.** Printed `0.9` / `3.3`; the code yields
   `0.1` / `0.3`. Check: 20,00,000 ÷ (15,00,00,000 × 0.15) = 0.089.
2. **`round()` vs `ROUND()` disagree at 806.25.** Python uses banker's rounding →
   `806.2`; Excel rounds half away from zero → `806.3`. The book prints the Excel
   answer beside the Python listing.

## Adding a chapter

1. Write `src/data/chapters/chNN.js` — copy `ch01.js` as the template. Every prose block
   is a `{ en, bn }` pair of markdown strings; GFM tables and `$$…$$` math both render.
2. Import and register it in `src/data/chapters/index.js`.
3. Flip that chapter's `status` to `'complete'` in `src/data/curriculum.js`.

Nothing else needs touching — sidebar, Part pages, progress counters, and prev/next all
read from `curriculum.js`.

To attach a calculator to a chapter, add its key to that chapter's `tools` array
(`'buffett'`, `'liquidity'`, `'circuit'`). Widgets render directly beneath the Formula
block, where the reader has just met the mathematics.

## Layout

```
src/
  data/curriculum.js      80 chapters, 7 parts, bilingual titles, status
  data/chapters/          authored content, one file per chapter
  lib/finance.js          the book's formulas, ported from the Python listings
  i18n/                   UI strings + en/bn switching + Bengali numerals
  components/tools/       the three calculators
  pages/                  Home, PartPage, ChapterPage, ToolsPage
```

`lib/finance.js` is the single source of truth for the mathematics — the calculators and
the printed Python agree by construction, so a change to a formula can't silently
desync the two.
