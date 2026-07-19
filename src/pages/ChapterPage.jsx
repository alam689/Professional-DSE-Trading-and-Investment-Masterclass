import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getChapter, getPart, CHAPTERS } from '../data/curriculum';
import { getContent, BLOCK_ORDER } from '../data/chapters';
import { useI18n } from '../i18n';
import { useProgress } from '../hooks/useProgress';
import Markdown from '../components/Markdown';
import Quiz from '../components/Quiz';
import InterviewCards from '../components/InterviewCards';
import ExcelDownload from '../components/ExcelDownload';
import PythonBlock from '../components/PythonBlock';
import BuffettIndicator from '../components/tools/BuffettIndicator';
import LiquidityLab from '../components/tools/LiquidityLab';
import CircuitBreaker from '../components/tools/CircuitBreaker';

const TOOL_MAP = {
  buffett: BuffettIndicator,
  liquidity: LiquidityLab,
  circuit: CircuitBreaker,
};

export default function ChapterPage() {
  const { n } = useParams();
  const { t, pick, lang, num } = useI18n();
  const { isRead, toggleRead, getQuizScore } = useProgress();

  const meta = getChapter(n);
  const content = getContent(n);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [n]);

  if (!meta) {
    return (
      <div className="page">
        <h1>Chapter {n} not found</h1>
        <Link to="/">← {t.home}</Link>
      </div>
    );
  }

  const part = getPart(meta.part);
  const idx = CHAPTERS.findIndex((c) => c.n === meta.n);
  const prev = CHAPTERS[idx - 1];
  const next = CHAPTERS[idx + 1];
  const quizScore = getQuizScore(meta.n);
  const read = isRead(meta.n);

  const blocks = content?.blocks || {};
  const tools = content?.tools || [];

  /**
   * A block heading with no body yet. Keeping the full 13-block skeleton
   * visible on un-authored chapters means the structure of the book is
   * legible everywhere, not just where the prose has landed.
   */
  const renderEmpty = (key, i) => (
    <section key={key} className="block block--empty" id={key}>
      <h2>
        <span className="block-n">{num(i + 1)}</span>
        {t.blocks[key]}
      </h2>
      <p className="na">{t.pending}</p>
    </section>
  );

  return (
    <article className="page chapter">
      <header className="ch-head">
        <div className="ch-crumb">
          <Link to={`/part/${part.slug}`}>
            {t.part} {part.id} · {pick(part.title)}
          </Link>
        </div>
        <h1>
          <span className="ch-num">
            {t.chapter} {num(meta.n)}
          </span>
          {pick(meta.title)}
        </h1>
        <div className="ch-actions">
          <button
            className={`btn ${read ? 'btn-done' : 'btn-primary'}`}
            onClick={() => toggleRead(meta.n)}
          >
            {read ? t.markedRead : t.markRead}
          </button>
          {quizScore && (
            <span className="ch-quizscore">
              {t.blocks.quiz}: {num(quizScore.score)}/{num(quizScore.total)}
            </span>
          )}
          <span className={`badge badge--${meta.status}`}>
            {meta.status === 'complete' ? t.statusComplete : t.statusOutline}
          </span>
        </div>
      </header>

      {content?.objectives && (
        <section className="objectives">
          <h2>{t.objectives}</h2>
          <ul>
            {(content.objectives[lang] || content.objectives.en).map((o, i) => (
              <li key={i}>{o}</li>
            ))}
          </ul>
        </section>
      )}

      {meta.status !== 'complete' && (
        <div className="notice">
          <strong>{t.statusOutline}.</strong> {t.outlineNotice}
        </div>
      )}

      {
        <>
          {BLOCK_ORDER.map((key, i) => {
            // Interview and quiz are rendered by dedicated components.
            if (key === 'interview') {
              if (!content?.interview?.length) return renderEmpty(key, i);
              return (
                <section key={key} className="block" id={key}>
                  <h2>
                    <span className="block-n">{num(i + 1)}</span>
                    {t.blocks.interview}
                  </h2>
                  <InterviewCards items={content.interview} />
                </section>
              );
            }
            if (key === 'quiz') {
              if (!content?.quiz?.length) return renderEmpty(key, i);
              return (
                <section key={key} className="block" id={key}>
                  <h2>
                    <span className="block-n">{num(i + 1)}</span>
                    {t.blocks.quiz}
                  </h2>
                  <Quiz chapterNumber={meta.n} questions={content.quiz} />
                </section>
              );
            }

            const body = blocks[key] ? pick(blocks[key]) : null;
            if (!body) return renderEmpty(key, i);
            return (
              <section key={key} className="block" id={key}>
                <h2>
                  <span className="block-n">{num(i + 1)}</span>
                  {t.blocks[key]}
                </h2>
                {/* Blocks 6 and 7 are printed as code, which is useless to a
                    reader who does not code. Excel gets a live .xlsx to
                    download; Python leads with its output and tucks the
                    source behind a disclosure. */}
                {key === 'python' ? (
                  // Keyed by chapter so the code disclosure and any runner
                  // output reset on navigation instead of leaking across chapters.
                  <PythonBlock key={`py-${meta.n}`} body={body} />
                ) : (
                  <Markdown>{body}</Markdown>
                )}

                {key === 'excel' && content?.excelSheet && (
                  <ExcelDownload spec={content.excelSheet} />
                )}

                {/* Interactive widgets sit directly under the formula block,
                    where the reader has just met the mathematics. */}
                {key === 'formula' &&
                  tools.map((id) => {
                    const Tool = TOOL_MAP[id];
                    return Tool ? <Tool key={id} /> : null;
                  })}
              </section>
            );
          })}
        </>
      }

      <nav className="ch-nav">
        {prev ? (
          <Link className="ch-nav-link" to={`/chapter/${prev.n}`}>
            <span>← {t.prev}</span>
            <strong>
              {num(prev.n)}. {pick(prev.title)}
            </strong>
          </Link>
        ) : (
          <span />
        )}
        {next && (
          <Link className="ch-nav-link ch-nav-link--next" to={`/chapter/${next.n}`}>
            <span>{t.next} →</span>
            <strong>
              {num(next.n)}. {pick(next.title)}
            </strong>
          </Link>
        )}
      </nav>
    </article>
  );
}
