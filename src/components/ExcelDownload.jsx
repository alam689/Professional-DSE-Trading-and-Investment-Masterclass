import { useState } from 'react';
import { useI18n } from '../i18n';
import { downloadSheet } from '../lib/workbook';

export default function ExcelDownload({ spec }) {
  const { t } = useI18n();
  const [done, setDone] = useState(false);

  const go = () => {
    downloadSheet(spec);
    setDone(true);
    setTimeout(() => setDone(false), 2500);
  };

  return (
    <div className="runner">
      <div className="runner-bar">
        <button className="btn btn-primary btn-sm" onClick={go}>
          ⭳ {done ? t.xlDone : t.xlDownload}
        </button>
        <span className="runner-hint">{t.xlHint}</span>
      </div>
    </div>
  );
}
