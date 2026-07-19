import { useState } from 'react';
import { useI18n } from '../i18n';

const PYODIDE_URL = 'https://cdn.jsdelivr.net/pyodide/v0.26.2/full/pyodide.js';

let pyodidePromise = null;

/** Load Pyodide once, lazily — nothing downloads until the reader clicks Run. */
function loadPyodide() {
  if (pyodidePromise) return pyodidePromise;
  pyodidePromise = new Promise((resolve, reject) => {
    const s = document.createElement('script');
    s.src = PYODIDE_URL;
    s.onload = () =>
      window
        .loadPyodide({ indexURL: PYODIDE_URL.replace(/pyodide\.js$/, '') })
        .then(resolve, reject);
    s.onerror = () => reject(new Error('network'));
    document.head.appendChild(s);
  });
  return pyodidePromise;
}

/** Pull the first ```python fence out of a chapter block's markdown. */
export function extractPython(markdown) {
  const m = markdown?.match(/```python\n([\s\S]*?)```/);
  return m ? m[1] : null;
}

export default function PythonRunner({ source }) {
  const { t } = useI18n();
  const [state, setState] = useState('idle'); // idle | loading | running | done | error
  const [output, setOutput] = useState('');

  const run = async () => {
    setState('loading');
    setOutput('');
    try {
      const py = await loadPyodide();
      setState('running');
      const lines = [];
      py.setStdout({ batched: (s) => lines.push(s) });
      py.setStderr({ batched: (s) => lines.push(s) });
      py.runPython(source);
      setOutput(lines.join('\n'));
      setState('done');
    } catch (err) {
      setOutput(
        err.message === 'network'
          ? t.pyOffline
          : String(err.message || err).split('\n').slice(-12).join('\n'),
      );
      setState('error');
    }
  };

  const label =
    state === 'loading' ? t.pyLoading : state === 'running' ? t.pyRunning : t.pyRun;

  return (
    <div className="runner">
      <div className="runner-bar">
        <button
          className="btn btn-primary btn-sm"
          onClick={run}
          disabled={state === 'loading' || state === 'running'}
        >
          {state === 'loading' || state === 'running' ? '⟳ ' : '▶ '}
          {label}
        </button>
        <span className="runner-hint">{t.pyHint}</span>
      </div>

      {output && (
        <pre className={`runner-out ${state === 'error' ? 'is-error' : ''}`}>{output}</pre>
      )}
    </div>
  );
}
