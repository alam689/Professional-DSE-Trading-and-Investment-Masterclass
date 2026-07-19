import { Link } from 'react-router-dom';
import { PARTS, CHAPTERS, chaptersOfPart, completeCount } from '../data/curriculum';
import { useI18n } from '../i18n';
import { useProgress } from '../hooks/useProgress';

export default function Home() {
  const { t, pick } = useI18n();
  const { read, isRead } = useProgress();

  return (
    <div className="page home">
      <header className="hero">
        <h1>{t.appTitle}</h1>
        <p className="hero-sub">{t.appSub}</p>
        <div className="hero-stats">
          <span>
            <strong>{CHAPTERS.length}</strong> {t.chapters}
          </span>
          <span>
            <strong>{PARTS.length}</strong> {t.parts}
          </span>
          <span>
            <strong>{completeCount()}</strong> {t.complete}
          </span>
          <span>
            <strong>{read.length}</strong> read
          </span>
        </div>
        <div className="hero-cta">
          <Link className="btn btn-primary" to="/chapter/1">
            {t.startReading}
          </Link>
          <Link className="btn" to="/tools">
            {t.openTools}
          </Link>
        </div>
      </header>

      <section className="howto">
        <h2>{t.howToUse}</h2>
        <p>{t.howToUseBody}</p>
        <ol className="block-legend">
          {Object.values(t.blocks).map((b, i) => (
            <li key={i}>
              <span className="block-n">{i + 1}</span>
              {b}
            </li>
          ))}
        </ol>
      </section>

      <section className="parts-grid">
        {PARTS.map((p) => {
          const chs = chaptersOfPart(p.id);
          const done = chs.filter((c) => isRead(c.n)).length;
          const authored = chs.filter((c) => c.status === 'complete').length;
          return (
            <Link key={p.id} to={`/part/${p.slug}`} className="part-card">
              <div className="part-card-id">{t.part} {p.id}</div>
              <h3>{pick(p.title)}</h3>
              <p>{pick(p.blurb)}</p>
              <div className="part-card-foot">
                <span>
                  {t.chapter} {p.range[0]}–{p.range[1]}
                </span>
                <span className="part-card-meta">
                  {authored}/{chs.length} {t.complete} · {done} read
                </span>
              </div>
              <div className="sb-bar">
                <div
                  className="sb-bar-fill"
                  style={{ width: `${(done / chs.length) * 100}%` }}
                />
              </div>
            </Link>
          );
        })}
      </section>

      <footer className="disclaimer">
        <h3>{t.disclaimerTitle}</h3>
        <p>{t.disclaimer}</p>
      </footer>
    </div>
  );
}
