import { useState } from 'react';
import { useI18n } from '../../i18n';
import { Field, Readout } from './Field';
import {
  buffettIndicator,
  historicalPercentile,
  classifyPercentile,
  fmt,
} from '../../lib/finance';

export default function BuffettIndicator() {
  const { t } = useI18n();
  const [cap, setCap] = useState(7.2);
  const [gdp, setGdp] = useState(50);
  const [low, setLow] = useState(9.5);
  const [high, setHigh] = useState(22);

  const bi = buffettIndicator(cap, gdp);
  const pct = historicalPercentile(bi, low, high);
  const cls = classifyPercentile(pct);

  const toneMap = { rich: 'warn', cheap: 'good', neutral: 'neutral' };
  const labelMap = { rich: t.vRich, cheap: t.vCheap, neutral: t.vNeutral };

  return (
    <div className="tool">
      <div className="tool-head">
        <h3>{t.buffettTitle}</h3>
        <p>{t.buffettSub}</p>
      </div>

      <div className="tool-grid">
        <div className="tool-inputs">
          <Field label={t.totalMktCap} value={cap} onChange={setCap} step={0.1} min={0} />
          <Field label={t.nominalGdp} value={gdp} onChange={setGdp} step={1} min={0.1} />
          <Field label={t.histLow} value={low} onChange={setLow} step={0.5} min={0} />
          <Field label={t.histHigh} value={high} onChange={setHigh} step={0.5} min={0.1} />
        </div>

        <div className="tool-outputs">
          <Readout label={t.indicator} value={`${fmt(bi)}%`} big />
          <Readout label={t.percentile} value={`${Math.round(pct * 100)}%`} />
          <Readout label={t.signal} value={labelMap[cls]} tone={toneMap[cls]} />

          <div className="band">
            <div className="band-track">
              <div className="band-zone band-zone--cheap" />
              <div className="band-zone band-zone--neutral" />
              <div className="band-zone band-zone--rich" />
              <div
                className="band-marker"
                style={{ left: `${Math.min(100, Math.max(0, pct * 100))}%` }}
              />
            </div>
            <div className="band-scale">
              <span>{fmt(low, 1)}%</span>
              <span>{fmt(high, 1)}%</span>
            </div>
          </div>
        </div>
      </div>

      <p className="tool-note">
        The raw number is noise; the position within the market’s own history is signal.
        A 15% ratio in a market with 15% listing penetration is not cheapness — it is absence.
      </p>
    </div>
  );
}
