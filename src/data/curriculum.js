/**
 * Master curriculum — 7 Parts, 80 chapters.
 * Titles are bilingual. `status` drives what the UI shows:
 *   'complete'  — full 13-block content authored
 *   'outline'   — syllabus + learning objectives present, blocks pending
 */

export const PARTS = [
  {
    id: 'I',
    slug: 'foundation',
    title: { en: 'Stock Market Foundation', bn: 'শেয়ারবাজারের ভিত্তি' },
    blurb: {
      en: 'Structure, mechanics, and cycle. What determines whether to be in the market at all.',
      bn: 'কাঠামো, কার্যপ্রণালী ও চক্র। আদৌ বাজারে থাকা উচিত কি না তা কী নির্ধারণ করে।',
    },
    range: [1, 8],
  },
  {
    id: 'II',
    slug: 'fundamental',
    title: { en: 'Fundamental Analysis', bn: 'ফান্ডামেন্টাল বিশ্লেষণ' },
    blurb: {
      en: 'Reading financial statements and valuing a business. What to buy.',
      bn: 'আর্থিক বিবরণী পাঠ ও ব্যবসার মূল্যায়ন। কী কিনবেন।',
    },
    range: [9, 25],
  },
  {
    id: 'III',
    slug: 'technical',
    title: { en: 'Technical Analysis', bn: 'টেকনিক্যাল বিশ্লেষণ' },
    blurb: {
      en: 'Price, volume, and pattern. When to buy.',
      bn: 'মূল্য, ভলিউম ও প্যাটার্ন। কখন কিনবেন।',
    },
    range: [26, 45],
  },
  {
    id: 'IV',
    slug: 'trading',
    title: { en: 'Professional Trading', bn: 'পেশাদার ট্রেডিং' },
    blurb: {
      en: 'Plan, size, execute, journal. Turning analysis into repeatable process.',
      bn: 'পরিকল্পনা, সাইজিং, এক্সিকিউশন, জার্নাল। বিশ্লেষণকে পুনরাবৃত্তিযোগ্য প্রক্রিয়ায় রূপান্তর।',
    },
    range: [46, 55],
  },
  {
    id: 'V',
    slug: 'portfolio',
    title: { en: 'Professional Portfolio', bn: 'পেশাদার পোর্টফোলিও' },
    blurb: {
      en: 'Allocation, correlation, risk metrics, rebalancing.',
      bn: 'বণ্টন, সহসম্পর্ক, ঝুঁকি পরিমাপ, পুনঃভারসাম্য।',
    },
    range: [56, 62],
  },
  {
    id: 'VI',
    slug: 'cases',
    title: { en: 'Complete DSE Case Studies', bn: 'সম্পূর্ণ ডিএসই কেস স্টাডি' },
    blurb: {
      en: 'What actually happened, and what it cost. Forensic post-mortems.',
      bn: 'বাস্তবে যা ঘটেছিল এবং তার মূল্য। ফরেনসিক পোস্ট-মর্টেম।',
    },
    range: [63, 75],
  },
  {
    id: 'VII',
    slug: 'tools',
    title: { en: 'Practical Tools', bn: 'ব্যবহারিক টুলস' },
    blurb: {
      en: 'Excel, Python, and React implementations you can run today.',
      bn: 'এক্সেল, পাইথন ও রিঅ্যাক্ট বাস্তবায়ন — আজই চালানো যায়।',
    },
    range: [76, 80],
  },
];

/** All 80 chapters. `part` maps to PARTS[].id */
export const CHAPTERS = [
  // ── Part I — Stock Market Foundation ──────────────────────────────
  { n: 1, part: 'I', status: 'complete', title: { en: 'The Bangladesh Capital Market', bn: 'বাংলাদেশের পুঁজিবাজার' } },
  { n: 2, part: 'I', status: 'complete', title: { en: 'DSE & CSE: Mechanics of the Exchange', bn: 'ডিএসই ও সিএসই: এক্সচেঞ্জের কার্যপ্রণালী' } },
  { n: 3, part: 'I', status: 'complete', title: { en: 'IPO & The Primary Market', bn: 'আইপিও ও প্রাথমিক বাজার' } },
  { n: 4, part: 'I', status: 'complete', title: { en: 'Primary vs Secondary Market', bn: 'প্রাথমিক বনাম মাধ্যমিক বাজার' } },
  { n: 5, part: 'I', status: 'complete', title: { en: 'Market Participants', bn: 'বাজারের অংশগ্রহণকারী' } },
  { n: 6, part: 'I', status: 'complete', title: { en: 'Bull & Bear Markets', bn: 'বুল ও বিয়ার মার্কেট' } },
  { n: 7, part: 'I', status: 'complete', title: { en: 'The Market Cycle', bn: 'বাজার চক্র' } },
  { n: 8, part: 'I', status: 'complete', title: { en: 'Sector Rotation', bn: 'সেক্টর রোটেশন' } },

  // ── Part II — Fundamental Analysis ────────────────────────────────
  { n: 9, part: 'II', status: 'complete', title: { en: 'Reading the Annual Report', bn: 'বার্ষিক প্রতিবেদন পাঠ' } },
  { n: 10, part: 'II', status: 'complete', title: { en: 'The Income Statement', bn: 'আয় বিবরণী' } },
  { n: 11, part: 'II', status: 'complete', title: { en: 'The Balance Sheet', bn: 'স্থিতিপত্র' } },
  { n: 12, part: 'II', status: 'complete', title: { en: 'The Cash Flow Statement', bn: 'নগদ প্রবাহ বিবরণী' } },
  { n: 13, part: 'II', status: 'complete', title: { en: 'Quality of Earnings', bn: 'আয়ের গুণমান' } },
  { n: 14, part: 'II', status: 'complete', title: { en: 'Liquidity Ratios', bn: 'তারল্য অনুপাত' } },
  { n: 15, part: 'II', status: 'complete', title: { en: 'Profitability Ratios', bn: 'মুনাফা অনুপাত' } },
  { n: 16, part: 'II', status: 'complete', title: { en: 'Efficiency & Activity Ratios', bn: 'দক্ষতা ও কার্যক্রম অনুপাত' } },
  { n: 17, part: 'II', status: 'complete', title: { en: 'Leverage & Solvency Ratios', bn: 'ঋণভার ও স্বচ্ছলতা অনুপাত' } },
  { n: 18, part: 'II', status: 'complete', title: { en: 'Valuation Ratios — P/E, P/B, PEG', bn: 'মূল্যায়ন অনুপাত — P/E, P/B, PEG' } },
  { n: 19, part: 'II', status: 'complete', title: { en: 'DuPont Analysis', bn: 'ডুপন্ট বিশ্লেষণ' } },
  { n: 20, part: 'II', status: 'complete', title: { en: 'Dividend Analysis & Policy', bn: 'লভ্যাংশ বিশ্লেষণ ও নীতি' } },
  { n: 21, part: 'II', status: 'complete', title: { en: 'Discounted Cash Flow (DCF)', bn: 'ডিসকাউন্টেড ক্যাশ ফ্লো (DCF)' } },
  { n: 22, part: 'II', status: 'complete', title: { en: 'Relative Valuation & Peer Comparison', bn: 'আপেক্ষিক মূল্যায়ন ও সমকক্ষ তুলনা' } },
  { n: 23, part: 'II', status: 'complete', title: { en: 'Banking Sector Analysis — NPL, CAR, NIM', bn: 'ব্যাংক খাত বিশ্লেষণ — NPL, CAR, NIM' } },
  { n: 24, part: 'II', status: 'complete', title: { en: 'Corporate Governance & Red Flags', bn: 'কর্পোরেট গভর্ন্যান্স ও বিপদ সংকেত' } },
  { n: 25, part: 'II', status: 'complete', title: { en: 'Building a Fundamental Scorecard', bn: 'ফান্ডামেন্টাল স্কোরকার্ড তৈরি' } },

  // ── Part III — Technical Analysis ─────────────────────────────────
  { n: 26, part: 'III', status: 'outline', title: { en: 'Charting Foundations', bn: 'চার্টিংয়ের ভিত্তি' } },
  { n: 27, part: 'III', status: 'outline', title: { en: 'Candlestick Anatomy', bn: 'ক্যান্ডেলস্টিকের গঠন' } },
  { n: 28, part: 'III', status: 'outline', title: { en: 'Candlestick Reversal Patterns', bn: 'ক্যান্ডেলস্টিক রিভার্সাল প্যাটার্ন' } },
  { n: 29, part: 'III', status: 'outline', title: { en: 'Candlestick Continuation Patterns', bn: 'ক্যান্ডেলস্টিক কন্টিনিউয়েশন প্যাটার্ন' } },
  { n: 30, part: 'III', status: 'outline', title: { en: 'Support & Resistance', bn: 'সাপোর্ট ও রেজিস্ট্যান্স' } },
  { n: 31, part: 'III', status: 'outline', title: { en: 'Trendlines & Channels', bn: 'ট্রেন্ডলাইন ও চ্যানেল' } },
  { n: 32, part: 'III', status: 'outline', title: { en: 'Chart Patterns — Reversal', bn: 'চার্ট প্যাটার্ন — রিভার্সাল' } },
  { n: 33, part: 'III', status: 'outline', title: { en: 'Chart Patterns — Continuation', bn: 'চার্ট প্যাটার্ন — কন্টিনিউয়েশন' } },
  { n: 34, part: 'III', status: 'outline', title: { en: 'Moving Averages', bn: 'মুভিং অ্যাভারেজ' } },
  { n: 35, part: 'III', status: 'outline', title: { en: 'MACD', bn: 'MACD' } },
  { n: 36, part: 'III', status: 'outline', title: { en: 'RSI', bn: 'RSI' } },
  { n: 37, part: 'III', status: 'outline', title: { en: 'Stochastic Oscillator', bn: 'স্টোক্যাস্টিক অসিলেটর' } },
  { n: 38, part: 'III', status: 'outline', title: { en: 'Bollinger Bands', bn: 'বলিঞ্জার ব্যান্ড' } },
  { n: 39, part: 'III', status: 'outline', title: { en: 'ATR & Volatility', bn: 'ATR ও অস্থিরতা' } },
  { n: 40, part: 'III', status: 'outline', title: { en: 'Volume Analysis', bn: 'ভলিউম বিশ্লেষণ' } },
  { n: 41, part: 'III', status: 'outline', title: { en: 'Fibonacci Retracement & Extension', bn: 'ফিবোনাচ্চি রিট্রেসমেন্ট ও এক্সটেনশন' } },
  { n: 42, part: 'III', status: 'outline', title: { en: 'Dow Theory', bn: 'ডাও তত্ত্ব' } },
  { n: 43, part: 'III', status: 'outline', title: { en: 'Elliott Wave', bn: 'এলিয়ট ওয়েভ' } },
  { n: 44, part: 'III', status: 'outline', title: { en: 'Divergence Analysis', bn: 'ডাইভারজেন্স বিশ্লেষণ' } },
  { n: 45, part: 'III', status: 'outline', title: { en: 'Multi-Indicator Confluence', bn: 'বহু-নির্দেশক সমন্বয়' } },

  // ── Part IV — Professional Trading ────────────────────────────────
  { n: 46, part: 'IV', status: 'outline', title: { en: 'Trading Plan Construction', bn: 'ট্রেডিং পরিকল্পনা প্রণয়ন' } },
  { n: 47, part: 'IV', status: 'outline', title: { en: 'Entry Techniques', bn: 'এন্ট্রি কৌশল' } },
  { n: 48, part: 'IV', status: 'outline', title: { en: 'Exit & Stop-Loss Discipline', bn: 'এক্সিট ও স্টপ-লস শৃঙ্খলা' } },
  { n: 49, part: 'IV', status: 'outline', title: { en: 'Position Sizing', bn: 'পজিশন সাইজিং' } },
  { n: 50, part: 'IV', status: 'outline', title: { en: 'Risk-Reward & Expectancy', bn: 'ঝুঁকি-পুরস্কার ও প্রত্যাশা' } },
  { n: 51, part: 'IV', status: 'outline', title: { en: 'Swing Trading on the DSE', bn: 'ডিএসইতে সুইং ট্রেডিং' } },
  { n: 52, part: 'IV', status: 'outline', title: { en: 'Momentum & Breakout Trading', bn: 'মোমেন্টাম ও ব্রেকআউট ট্রেডিং' } },
  { n: 53, part: 'IV', status: 'outline', title: { en: 'Trading Psychology', bn: 'ট্রেডিং মনস্তত্ত্ব' } },
  { n: 54, part: 'IV', status: 'outline', title: { en: 'Trade Journaling', bn: 'ট্রেড জার্নালিং' } },
  { n: 55, part: 'IV', status: 'outline', title: { en: 'Backtesting a Strategy', bn: 'কৌশলের ব্যাকটেস্টিং' } },

  // ── Part V — Professional Portfolio ───────────────────────────────
  { n: 56, part: 'V', status: 'outline', title: { en: 'Portfolio Construction', bn: 'পোর্টফোলিও গঠন' } },
  { n: 57, part: 'V', status: 'outline', title: { en: 'Diversification & Correlation', bn: 'বৈচিত্র্যায়ন ও সহসম্পর্ক' } },
  { n: 58, part: 'V', status: 'outline', title: { en: 'Asset Allocation', bn: 'সম্পদ বণ্টন' } },
  { n: 59, part: 'V', status: 'outline', title: { en: 'Risk Metrics — Beta, Sharpe, Drawdown', bn: 'ঝুঁকি পরিমাপ — বিটা, শার্প, ড্রডাউন' } },
  { n: 60, part: 'V', status: 'outline', title: { en: 'Rebalancing', bn: 'পুনঃভারসাম্য' } },
  { n: 61, part: 'V', status: 'outline', title: { en: 'Performance Attribution', bn: 'পারফরম্যান্স অ্যাট্রিবিউশন' } },
  { n: 62, part: 'V', status: 'outline', title: { en: 'Margin & Leverage Management', bn: 'মার্জিন ও লিভারেজ ব্যবস্থাপনা' } },

  // ── Part VI — Complete DSE Case Studies ───────────────────────────
  { n: 63, part: 'VI', status: 'outline', title: { en: 'The 1996 Crash', bn: '১৯৯৬ সালের ধস' } },
  { n: 64, part: 'VI', status: 'outline', title: { en: 'The 2010–11 Crash', bn: '২০১০–১১ সালের ধস' } },
  { n: 65, part: 'VI', status: 'outline', title: { en: 'The Floor Price Era', bn: 'ফ্লোর প্রাইস যুগ' } },
  { n: 66, part: 'VI', status: 'outline', title: { en: 'Grameenphone — The Index Whale', bn: 'গ্রামীণফোন — সূচকের তিমি' } },
  { n: 67, part: 'VI', status: 'outline', title: { en: 'Square Pharmaceuticals — Quality Compounding', bn: 'স্কয়ার ফার্মা — গুণগত চক্রবৃদ্ধি' } },
  { n: 68, part: 'VI', status: 'outline', title: { en: 'BATBC — The Dividend Machine', bn: 'বিএটিবিসি — লভ্যাংশ যন্ত্র' } },
  { n: 69, part: 'VI', status: 'outline', title: { en: 'The Banking Sector NPL Crisis', bn: 'ব্যাংক খাতের খেলাপি ঋণ সংকট' } },
  { n: 70, part: 'VI', status: 'outline', title: { en: 'The NBFI Collapse', bn: 'এনবিএফআই ধস' } },
  { n: 71, part: 'VI', status: 'outline', title: { en: 'The Beximco Group Complex', bn: 'বেক্সিমকো গ্রুপ জটিলতা' } },
  { n: 72, part: 'VI', status: 'outline', title: { en: 'Mutual Fund NAV Discount', bn: 'মিউচুয়াল ফান্ড NAV ছাড়' } },
  { n: 73, part: 'VI', status: 'outline', title: { en: 'Insurance Sector Speculation', bn: 'বীমা খাতের ফটকাবাজি' } },
  { n: 74, part: 'VI', status: 'outline', title: { en: 'IPO Post-Listing Performance', bn: 'আইপিও তালিকাভুক্তি-পরবর্তী কর্মক্ষমতা' } },
  { n: 75, part: 'VI', status: 'outline', title: { en: 'Anatomy of Junk Stock Manipulation', bn: 'জাঙ্ক স্টক কারসাজির শারীরস্থান' } },

  // ── Part VII — Practical Tools ────────────────────────────────────
  { n: 76, part: 'VII', status: 'outline', title: { en: 'The Excel Model Library', bn: 'এক্সেল মডেল লাইব্রেরি' } },
  { n: 77, part: 'VII', status: 'outline', title: { en: 'Python for DSE Data', bn: 'ডিএসই ডেটার জন্য পাইথন' } },
  { n: 78, part: 'VII', status: 'outline', title: { en: 'Building a Screener', bn: 'স্ক্রিনার তৈরি' } },
  { n: 79, part: 'VII', status: 'outline', title: { en: 'The React Dashboard', bn: 'রিঅ্যাক্ট ড্যাশবোর্ড' } },
  { n: 80, part: 'VII', status: 'outline', title: { en: 'The Complete Workflow', bn: 'সম্পূর্ণ কর্মপ্রবাহ' } },
];

export const getPart = (id) => PARTS.find((p) => p.id === id);
export const getChapter = (n) => CHAPTERS.find((c) => c.n === Number(n));
export const chaptersOfPart = (id) => CHAPTERS.filter((c) => c.part === id);
export const completeCount = () => CHAPTERS.filter((c) => c.status === 'complete').length;
