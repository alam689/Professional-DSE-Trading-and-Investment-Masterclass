/**
 * The book's formulas, in one place.
 * Ported directly from the Python implementations in Chapters 1 and 2 so the
 * interactive tools and the printed code agree by construction.
 */

// ── Chapter 1 — structural metrics ──────────────────────────────────

export function buffettIndicator(marketCapTrn, nominalGdpTrn) {
  if (!nominalGdpTrn) return 0;
  return (marketCapTrn / nominalGdpTrn) * 100;
}

/** Where does `current` sit within its own historical band? 0.0 to 1.0. */
export function historicalPercentile(current, low, high) {
  if (high === low) return 0.5;
  return Math.max(0, Math.min(1, (current - low) / (high - low)));
}

export function classifyPercentile(pct) {
  if (pct > 0.8) return 'rich';
  if (pct < 0.2) return 'cheap';
  return 'neutral';
}

/**
 * Annualized turnover / market cap. ~250 trading days.
 * Converts crore -> trillion (1 trn = 100,000 cr).
 */
export function turnoverVelocity(dailyTurnoverCr, marketCapTrn) {
  if (!marketCapTrn) return 0;
  const annualTurnoverTrn = (dailyTurnoverCr * 250) / 100_000;
  return (annualTurnoverTrn / marketCapTrn) * 100;
}

// ── Chapter 2 — microstructure ──────────────────────────────────────

/** DSE circuit breaker slabs: [upper price bound, limit fraction] */
export const CIRCUIT_SLABS = [
  [200, 0.1],
  [500, 0.0875],
  [1000, 0.075],
  [2000, 0.0625],
  [5000, 0.05],
  [Infinity, 0.0375],
];

export function circuitLimit(prevClose) {
  for (const [bound, limit] of CIRCUIT_SLABS) {
    if (prevClose <= bound) return limit;
  }
  return 0.0375;
}

export function circuitBands(prevClose) {
  const lim = circuitLimit(prevClose);
  const r = (x) => Math.round(x * 10) / 10;
  return { lower: r(prevClose * (1 - lim)), upper: r(prevClose * (1 + lim)), limit: lim };
}

export function midPrice(bid, ask) {
  return (bid + ask) / 2;
}

export function spreadAbs(bid, ask) {
  return ask - bid;
}

export function spreadPct(bid, ask) {
  const mid = midPrice(bid, ask);
  if (!mid) return 0;
  return (spreadAbs(bid, ask) / mid) * 100;
}

export function daysToLiquidate(positionBdt, adtvBdt, participation = 0.15) {
  if (adtvBdt <= 0 || participation <= 0) return Infinity;
  return positionBdt / (adtvBdt * participation);
}

export function roundTripCost(spreadPctValue, brokeragePct = 0.35, impactPct = 1.0) {
  return spreadPctValue + 2 * brokeragePct + 2 * impactPct;
}

/**
 * Full pre-trade liquidity assessment.
 * Mirrors `assess()` in the Chapter 2 Python listing, including the
 * ordering of the verdict tests — spread/stress gate first, cost second.
 */
export function assessLiquidity({
  bestBid,
  bestAsk,
  adtv,
  stressedAdtv,
  position,
  participation = 0.15,
  brokerage = 0.35,
  impact = 1.0,
}) {
  const sp = spreadPct(bestBid, bestAsk);
  const dNormal = daysToLiquidate(position, adtv, participation);
  const dStress = daysToLiquidate(position, stressedAdtv, participation);
  const cost = roundTripCost(sp, brokerage, impact);

  let verdict;
  if (sp > 2.0 || dStress > 10) verdict = 'reject';
  else if (cost > 3.0) verdict = 'caution';
  else verdict = 'ok';

  return {
    mid: midPrice(bestBid, bestAsk),
    spreadAbs: spreadAbs(bestBid, bestAsk),
    spreadPct: sp,
    daysNormal: dNormal,
    daysStressed: dStress,
    roundTripCost: cost,
    breakeven: cost,
    verdict,
  };
}

// ── formatting helpers ──────────────────────────────────────────────

export const fmt = (n, dp = 2) =>
  Number.isFinite(n) ? n.toFixed(dp) : '∞';

/** BDT with Indian-subcontinent digit grouping (lakh / crore). */
export const fmtBDT = (n) =>
  Number.isFinite(n) ? new Intl.NumberFormat('en-IN').format(Math.round(n)) : '∞';
