import { useState } from 'react';
import { useI18n } from '../../i18n';
import { Field, Readout } from './Field';
import { circuitBands, CIRCUIT_SLABS, circuitLimit, fmt } from '../../lib/finance';

const SLAB_LABELS = ['≤ 200', '200 – 500', '500 – 1,000', '1,000 – 2,000', '2,000 – 5,000', '> 5,000'];

export default function CircuitBreaker() {
  const { t } = useI18n();
  const [prev, setPrev] = useState(14);

  const { lower, upper, limit } = circuitBands(prev);
  const activeSlab = CIRCUIT_SLABS.findIndex(([bound]) => prev <= bound);

  return (
    <div className="tool">
      <div className="tool-head">
        <h3>{t.circuitTitle}</h3>
        <p>{t.circuitSub}</p>
      </div>

      <div className="tool-grid">
        <div className="tool-inputs">
          <Field label={t.prevClose} value={prev} onChange={setPrev} step={0.1} min={0.1} />

          <div className="slab-table">
            {SLAB_LABELS.map((label, i) => (
              <div key={i} className={`slab-row ${i === activeSlab ? 'is-active' : ''}`}>
                <span>{label}</span>
                <span>{fmt(CIRCUIT_SLABS[i][1] * 100, 2)}%</span>
              </div>
            ))}
          </div>
        </div>

        <div className="tool-outputs">
          <Readout label={t.slabLimit} value={`±${fmt(limit * 100, 2)}%`} big />

          <div className="circuit-viz">
            <div className="circuit-row circuit-row--upper">
              <span className="circuit-label">{t.upperCircuit}</span>
              <span className="circuit-price">{fmt(upper, 1)}</span>
            </div>
            <div className="circuit-row circuit-row--prev">
              <span className="circuit-label">{t.prevClose}</span>
              <span className="circuit-price">{fmt(prev, 2)}</span>
            </div>
            <div className="circuit-row circuit-row--lower">
              <span className="circuit-label">{t.lowerCircuit}</span>
              <span className="circuit-price">{fmt(lower, 1)}</span>
            </div>
          </div>
        </div>
      </div>

      <p className="tool-note">
        A circuit breaker does not stop a fall — it spreads it. A stock that “should” fall 40%
        falls {fmt(limit * 100, 2)}% a day, and while it is locked at the lower circuit with no
        bids, you cannot sell at all. The limit converts price risk into liquidity risk.
      </p>
    </div>
  );
}
