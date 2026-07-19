import { Link, useParams } from 'react-router-dom';
import { PARTS, chaptersOfPart } from '../data/curriculum';
import { useI18n } from '../i18n';
import { useProgress } from '../hooks/useProgress';

export default function PartPage() {
  const { slug } = useParams();
  const { t, pick, num } = useI18n();
  const { isRead } = useProgress();

  const part = PARTS.find((p) => p.slug === slug);
  if (!part) {
    return (
      <div className="page">
        <h1>Part not found</h1>
        <Link to="/">← {t.home}</Link>
      </div>
    );
  }

  const chs = chaptersOfPart(part.id);

  return (
    <div className="page">
      <header className="part-head">
        <div className="ch-crumb">
          <Link to="/">{t.home}</Link>
        </div>
        <h1>
          <span className="ch-num">
            {t.part} {part.id}
          </span>
          {pick(part.title)}
        </h1>
        <p className="part-blurb">{pick(part.blurb)}</p>
      </header>

      <ul className="ch-index">
        {chs.map((c) => (
          <li key={c.n}>
            <Link to={`/chapter/${c.n}`} className={`ch-index-row is-${c.status}`}>
              <span className="ch-index-n">{num(c.n)}</span>
              <span className="ch-index-t">{pick(c.title)}</span>
              {isRead(c.n) && <span className="ch-index-tick">✓</span>}
              <span className={`badge badge--${c.status}`}>
                {c.status === 'complete' ? t.statusComplete : t.statusOutline}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
