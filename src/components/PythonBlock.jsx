import { useState } from 'react';
import { useI18n } from '../i18n';
import Markdown from './Markdown';
import PythonRunner from './PythonRunner';

const FENCE = /```python\n([\s\S]*?)```\n?/;

/**
 * Block 7 for a reader who does not code.
 *
 * The source listing is the least useful thing here for most of this book's
 * audience — they want the number the model produces, not its implementation.
 * So the runner and the commentary lead, and the code itself sits behind a
 * disclosure for the reader who does want it (and for Part VII, which builds
 * on these listings directly).
 */
export default function PythonBlock({ body }) {
  const { t, num } = useI18n();
  const [showCode, setShowCode] = useState(false);

  const match = body.match(FENCE);
  if (!match) return <Markdown>{body}</Markdown>;

  const code = match[1];
  const rest = body.replace(FENCE, '').trim();

  return (
    <>
      <PythonRunner source={code} />

      {rest && <Markdown>{rest}</Markdown>}

      <div className="code-disclosure">
        <button
          className="code-toggle"
          onClick={() => setShowCode((s) => !s)}
          aria-expanded={showCode}
        >
          <span className="code-chevron">{showCode ? '▾' : '▸'}</span>
          {showCode ? t.hideCode : t.showCode}
          <span className="code-lines">
            {num(code.trim().split('\n').length)} {t.lines}
          </span>
        </button>
        {showCode && <Markdown>{'```python\n' + code + '```'}</Markdown>}
      </div>
    </>
  );
}
