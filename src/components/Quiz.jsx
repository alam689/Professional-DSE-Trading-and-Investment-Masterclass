import { useState } from 'react';
import { useI18n } from '../i18n';
import { useProgress } from '../hooks/useProgress';

export default function Quiz({ chapterNumber, questions }) {
  const { t, lang, num } = useI18n();
  const { setQuizScore } = useProgress();
  const [picked, setPicked] = useState({});
  const [checked, setChecked] = useState(false);

  const total = questions.length;
  const answeredAll = Object.keys(picked).length === total;
  const score = questions.reduce(
    (acc, q, i) => acc + (picked[i] === q.answer ? 1 : 0),
    0,
  );

  const check = () => {
    setChecked(true);
    setQuizScore(chapterNumber, score, total);
  };

  const retry = () => {
    setPicked({});
    setChecked(false);
  };

  const pct = Math.round((score / total) * 100);
  const band = pct >= 80 ? 'good' : pct >= 50 ? 'mid' : 'bad';

  return (
    <div className="quiz">
      <p className="quiz-intro">{t.quizIntro}</p>

      {questions.map((q, i) => {
        const sel = picked[i];
        return (
          <fieldset key={i} className="quiz-q" disabled={checked}>
            <legend>
              <span className="quiz-num">{num(i + 1)}</span>
              {q.q[lang] || q.q.en}
            </legend>
            {(q.options[lang] || q.options.en).map((opt, oi) => {
              const isPicked = sel === oi;
              const isAnswer = q.answer === oi;
              let cls = 'quiz-opt';
              if (checked) {
                if (isAnswer) cls += ' is-answer';
                else if (isPicked) cls += ' is-wrong';
              } else if (isPicked) {
                cls += ' is-picked';
              }
              return (
                <label key={oi} className={cls}>
                  <input
                    type="radio"
                    name={`q-${chapterNumber}-${i}`}
                    checked={isPicked || false}
                    onChange={() => setPicked((p) => ({ ...p, [i]: oi }))}
                  />
                  <span className="quiz-letter">{'abcd'[oi]}</span>
                  <span>{opt}</span>
                  {checked && isAnswer && <span className="quiz-tick">✓</span>}
                  {checked && isPicked && !isAnswer && <span className="quiz-cross">✕</span>}
                </label>
              );
            })}
          </fieldset>
        );
      })}

      <div className="quiz-actions">
        {!checked ? (
          <button className="btn btn-primary" onClick={check} disabled={!answeredAll}>
            {t.checkAnswers}
            {!answeredAll && ` (${Object.keys(picked).length}/${total})`}
          </button>
        ) : (
          <>
            <div className={`quiz-score quiz-score--${band}`}>
              {t.yourScore}: <strong>{num(score)}</strong> / {num(total)} &nbsp;·&nbsp; {num(pct)}%
            </div>
            <button className="btn" onClick={retry}>
              {t.tryAgain}
            </button>
          </>
        )}
      </div>
    </div>
  );
}
