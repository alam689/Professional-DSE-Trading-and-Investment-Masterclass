import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { I18nProvider, useI18n } from './i18n';
import { useProgress } from './hooks/useProgress';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import PartPage from './pages/PartPage';
import ChapterPage from './pages/ChapterPage';
import ToolsPage from './pages/ToolsPage';
import './styles.css';
import 'katex/dist/katex.min.css';

function Shell() {
  const { t, lang, toggle } = useI18n();
  const { reset } = useProgress();
  const [navOpen, setNavOpen] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem('dse.theme') || 'dark');
  const location = useLocation();

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('dse.theme', theme);
  }, [theme]);

  useEffect(() => setNavOpen(false), [location.pathname]);

  return (
    <div className={`shell ${navOpen ? 'nav-open' : ''}`}>
      <header className="topbar">
        <button
          className="nav-toggle"
          onClick={() => setNavOpen((o) => !o)}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
          <span />
        </button>

        <Link to="/" className="brand">
          <span className="brand-mark">DSE</span>
          <span className="brand-text">{t.appTitle}</span>
        </Link>

        <nav className="topnav">
          <Link to="/tools">{t.tools}</Link>
          <button
            className="lang-toggle"
            onClick={toggle}
            title={t.language}
            aria-label={t.language}
          >
            {lang === 'en' ? 'বাংলা' : 'EN'}
          </button>
          <button
            className="icon-btn"
            onClick={() => setTheme((x) => (x === 'dark' ? 'light' : 'dark'))}
            title={t.theme}
            aria-label={t.theme}
          >
            {theme === 'dark' ? '☀' : '☾'}
          </button>
          <button
            className="icon-btn"
            onClick={() => {
              if (confirm(t.resetConfirm)) reset();
            }}
            title={t.resetProgress}
            aria-label={t.resetProgress}
          >
            ⟳
          </button>
        </nav>
      </header>

      <div className="body">
        <aside className="aside">
          <Sidebar onNavigate={() => setNavOpen(false)} />
        </aside>
        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/part/:slug" element={<PartPage />} />
            <Route path="/chapter/:n" element={<ChapterPage />} />
            <Route path="/tools" element={<ToolsPage />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
      </div>

      <div className="scrim" onClick={() => setNavOpen(false)} />
    </div>
  );
}

export default function App() {
  return (
    <I18nProvider>
      <BrowserRouter>
        <Shell />
      </BrowserRouter>
    </I18nProvider>
  );
}
