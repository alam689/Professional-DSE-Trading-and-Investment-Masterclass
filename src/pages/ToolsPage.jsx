import { useI18n } from '../i18n';
import BuffettIndicator from '../components/tools/BuffettIndicator';
import LiquidityLab from '../components/tools/LiquidityLab';
import CircuitBreaker from '../components/tools/CircuitBreaker';

export default function ToolsPage() {
  const { t } = useI18n();
  return (
    <div className="page">
      <header className="part-head">
        <h1>{t.toolsTitle}</h1>
        <p className="part-blurb">{t.toolsSub}</p>
      </header>
      <div className="tools-stack">
        <BuffettIndicator />
        <LiquidityLab />
        <CircuitBreaker />
      </div>
    </div>
  );
}
