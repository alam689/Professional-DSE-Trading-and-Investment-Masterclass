/** Shared numeric input + range control used by every calculator. */
export function Field({ label, value, onChange, step = 1, min, max, suffix }) {
  return (
    <label className="field">
      <span className="field-label">{label}</span>
      <span className="field-input">
        <input
          type="number"
          value={value}
          step={step}
          min={min}
          max={max}
          onChange={(e) => onChange(Number(e.target.value))}
        />
        {suffix && <span className="field-suffix">{suffix}</span>}
      </span>
    </label>
  );
}

export function Readout({ label, value, tone, big }) {
  return (
    <div className={`readout ${tone ? `readout--${tone}` : ''} ${big ? 'readout--big' : ''}`}>
      <span className="readout-label">{label}</span>
      <span className="readout-value">{value}</span>
    </div>
  );
}
