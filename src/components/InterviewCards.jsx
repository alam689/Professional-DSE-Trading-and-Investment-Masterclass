import { useState } from 'react';
import { useI18n } from '../i18n';
import Markdown from './Markdown';

export default function InterviewCards({ items }) {
  const { t, pick } = useI18n();
  const [open, setOpen] = useState({});

  return (
    <div className="iv-list">
      {items.map((item, i) => {
        const isOpen = !!open[i];
        return (
          <div key={i} className={`iv-card ${isOpen ? 'is-open' : ''}`}>
            <button
              className="iv-q"
              onClick={() => setOpen((o) => ({ ...o, [i]: !o[i] }))}
              aria-expanded={isOpen}
            >
              <span className="iv-badge">Q{i + 1}</span>
              <span className="iv-qtext">{pick(item.q)}</span>
              <span className="iv-chevron" aria-hidden="true">
                {isOpen ? '−' : '+'}
              </span>
            </button>
            {isOpen && (
              <div className="iv-a">
                <span className="iv-alabel">{t.answer}</span>
                <Markdown>{pick(item.a)}</Markdown>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
