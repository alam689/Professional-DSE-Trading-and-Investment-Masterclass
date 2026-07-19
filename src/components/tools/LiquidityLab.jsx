import { useState } from 'react';
import { useI18n } from '../../i18n';
import { Field, Readout } from './Field';
import { assessLiquidity, fmt, fmtBDT } from '../../lib/finance';

/** The two worked examples from Chapter 2, as one-click presets. */
const PRESETS = {
  textile: { bid: 13.8, ask: 14.2, adtv: 3_000_000, stressed: 500_000, position: 2_000_000 },
  gp: { bid: 289.7, ask: 289.9, adtv: 150_000_000, stressed: 40_000_000, position: 2_000_000 },
};

export default function LiquidityLab() {
  const { t } = useI18n();
  const [s, setS] = useState(PRESETS.textile);
  const [participation, setParticipation] = useState(0.15);
  const [brokerage, setBrokerage] = useState(0.35);
  const [impact, setImpact] = useState(1.0);

  const set = (k) => (v) => setS((prev) => ({ ...prev, [k]: v }));

  const r = assessLiquidity({
    bestBid: s.bid,
    bestAsk: s.ask,
    adtv: s.adtv,
    stressedAdtv: s.stressed,
    position: s.position,
    participation,
    brokerage,
    impact,
  });

  const toneMap = { reject: 'bad', caution: 'warn', ok: 'good' };
  const labelMap = { reject: t.vReject, caution: t.vCaution, ok: t.vOk };

  return (
    <div className="tool">
      <div className="tool-head">
        <h3>{t.liquidityTitle}</h3>
        <p>{t.liquiditySub}</p>
      </div>

      <div className="preset-row">
        <button className="chip" onClick={() => setS(PRESETS.textile)}>
          Textile scrip
        </button>
        <button className="chip" onClick={() => setS(PRESETS.gp)}>
          Grameenphone
        </button>
      </div>

      <div className="tool-grid">
        <div className="tool-inputs">
          <Field label={t.bestBid} value={s.bid} onChange={set('bid')} step={0.1} min={0} />
          <Field label={t.bestAsk} value={s.ask} onChange={set('ask')} step={0.1} min={0} />
          <Field label={t.adtv} value={s.adtv} onChange={set('adtv')} step={100000} min={0} />
          <Field
            label={t.stressedAdtv}
            value={s.stressed}
            onChange={set('stressed')}
            step={100000}
            min={0}
          />
          <Field
            label={t.positionSize}
            value={s.position}
            onChange={set('position')}
            step={100000}
            min={0}
          />
          <Field
            label={t.participation}
            value={participation}
            onChange={setParticipation}
            step={0.05}
            min={0.01}
            max={1}
          />
          <Field label={t.brokerage} value={brokerage} onChange={setBrokerage} step={0.05} min={0} />
          <Field label={t.impact} value={impact} onChange={setImpact} step={0.1} min={0} />
        </div>

        <div className="tool-outputs">
          <Readout label={t.verdict} value={labelMap[r.verdict]} tone={toneMap[r.verdict]} big />

          <div className="readout-pair">
            <Readout label={t.midPrice} value={fmt(r.mid)} />
            <Readout label={t.spreadAbs} value={fmt(r.spreadAbs)} />
          </div>
          <Readout
            label={t.spreadPct}
            value={`${fmt(r.spreadPct)}%`}
            tone={r.spreadPct > 2 ? 'bad' : r.spreadPct > 1 ? 'warn' : 'good'}
          />
          <div className="readout-pair">
            <Readout label={t.daysNormal} value={`${fmt(r.daysNormal, 1)} ${t.days}`} />
            <Readout
              label={t.daysStressed}
              value={`${fmt(r.daysStressed, 1)} ${t.days}`}
              tone={r.daysStressed > 10 ? 'bad' : r.daysStressed > 5 ? 'warn' : 'good'}
            />
          </div>
          <Readout
            label={t.roundTrip}
            value={`${fmt(r.roundTripCost)}%`}
            tone={r.roundTripCost > 3 ? 'warn' : 'good'}
          />
          <Readout label={t.breakeven} value={`+${fmt(r.breakeven)}%`} />

          <div className="cost-bar">
            <div
              className="cost-seg cost-seg--spread"
              style={{ flex: Math.max(0.001, r.spreadPct) }}
              title={`Spread ${fmt(r.spreadPct)}%`}
            />
            <div
              className="cost-seg cost-seg--brokerage"
              style={{ flex: Math.max(0.001, brokerage * 2) }}
              title={`Brokerage ${fmt(brokerage * 2)}%`}
            />
            <div
              className="cost-seg cost-seg--impact"
              style={{ flex: Math.max(0.001, impact * 2) }}
              title={`Impact ${fmt(impact * 2)}%`}
            />
          </div>
          <div className="cost-legend">
            <span><i className="dot dot--spread" />Spread</span>
            <span><i className="dot dot--brokerage" />Brokerage ×2</span>
            <span><i className="dot dot--impact" />Impact ×2</span>
          </div>
        </div>
      </div>

      <p className="tool-note">
        Position of {fmtBDT(s.position)} BDT against a stressed ADTV of {fmtBDT(s.stressed)} BDT.
        You will exit in a bad market — plan with the stressed figure, not the normal one.
      </p>
    </div>
  );
}
