import { useMemo, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { PARTS, CHAPTERS, chaptersOfPart } from '../data/curriculum';
import { useI18n } from '../i18n';
import { useProgress } from '../hooks/useProgress';

export default function Sidebar({ onNavigate }) {
  const { t, pick } = useI18n();
  const { read, isRead } = useProgress();
  const [q, setQ] = useState('');

  const query = q.trim().toLowerCase();
  const matches = useMemo(() => {
    if (!query) return null;
    return CHAPTERS.filter(
      (c) =>
        c.title.en.toLowerCase().includes(query) ||
        c.title.bn.includes(q.trim()) ||
        String(c.n) === query,
    );
  }, [query, q]);

  const pctRead = Math.round((read.length / CHAPTERS.length) * 100);

  return (
    <nav className="sidebar">
      <div className="sb-progress">
        <div className="sb-progress-head">
          <span>{t.progress}</span>
          <span>
            {read.length} / {CHAPTERS.length}
          </span>
        </div>
        <div className="sb-bar">
          <div className="sb-bar-fill" style={{ width: `${pctRead}%` }} />
        </div>
      </div>

      <input
        className="sb-search"
        type="search"
        placeholder={t.search}
        value={q}
        onChange={(e) => setQ(e.target.value)}
      />

      {matches ? (
        matches.length === 0 ? (
          <p className="sb-empty">{t.noResults}</p>
        ) : (
          <ul className="sb-list">
            {matches.map((c) => (
              <ChapterLink key={c.n} c={c} onNavigate={onNavigate} isRead={isRead(c.n)} />
            ))}
          </ul>
        )
      ) : (
        PARTS.map((p) => {
          const chs = chaptersOfPart(p.id);
          const doneInPart = chs.filter((c) => isRead(c.n)).length;
          return (
            <section key={p.id} className="sb-part">
              <NavLink to={`/part/${p.slug}`} className="sb-part-head" onClick={onNavigate}>
                <span className="sb-part-id">{p.id}</span>
                <span className="sb-part-title">{pick(p.title)}</span>
                <span className="sb-part-count">
                  {doneInPart}/{chs.length}
                </span>
              </NavLink>
              <ul className="sb-list">
                {chs.map((c) => (
                  <ChapterLink key={c.n} c={c} onNavigate={onNavigate} isRead={isRead(c.n)} />
                ))}
              </ul>
            </section>
          );
        })
      )}
    </nav>
  );
}

function ChapterLink({ c, onNavigate, isRead }) {
  const { pick, num } = useI18n();
  return (
    <li>
      <NavLink
        to={`/chapter/${c.n}`}
        onClick={onNavigate}
        className={({ isActive }) =>
          ['sb-ch', isActive ? 'is-active' : '', isRead ? 'is-read' : '', `is-${c.status}`]
            .filter(Boolean)
            .join(' ')
        }
      >
        <span className="sb-ch-n">{num(c.n)}</span>
        <span className="sb-ch-t">{pick(c.title)}</span>
        {isRead && <span className="sb-ch-tick">✓</span>}
      </NavLink>
    </li>
  );
}
