import { createContext, useContext, useEffect, useState } from 'react';

const STRINGS = {
  en: {
    appTitle: 'Professional DSE Trading & Investment Masterclass',
    appSub: 'বাংলাদেশ শেয়ারবাজারে পেশাদার বিনিয়োগ ও ট্রেডিং',
    home: 'Home',
    parts: 'Parts',
    tools: 'Tools',
    part: 'Part',
    chapter: 'Chapter',
    chapters: 'chapters',
    search: 'Search chapters…',
    noResults: 'No chapters match that search.',
    progress: 'Progress',
    complete: 'complete',
    markRead: 'Mark as read',
    markedRead: 'Read ✓',
    resetProgress: 'Reset progress',
    resetConfirm: 'Reset all reading progress and quiz scores?',
    prev: 'Previous',
    next: 'Next',
    onThisPage: 'On this page',
    language: 'Language',
    theme: 'Theme',
    // Block names — the fixed 13-block structure
    blocks: {
      theory: 'Theory',
      simple: 'Simple Explanation',
      example: 'Real DSE Example',
      formula: 'Formula',
      manual: 'Manual Calculation',
      excel: 'Excel Implementation',
      python: 'Python Implementation',
      mistakes: 'Common Mistakes',
      tips: 'Professional Tips',
      exercises: 'Practice Exercises',
      interview: 'Interview Questions',
      quiz: 'Quiz',
      summary: 'Summary',
    },
    na: 'Not applicable to this chapter.',
    pending: 'Content pending.',
    // Runnable blocks — for readers who do not code
    xlDownload: 'Download this sheet (.xlsx)',
    xlDone: 'Downloaded ✓',
    xlHint: 'Opens in Excel or Google Sheets with the formulas live — change an input and the verdict recalculates.',
    pyRun: 'Run this code',
    pyLoading: 'Loading Python…',
    pyRunning: 'Running…',
    pyHint: 'Runs in your browser. Nothing to install, no coding needed — compare the output to the book’s.',
    pyOffline: 'Could not load the Python runtime — this needs an internet connection the first time.',
    pyOutput: 'Output',
    showCode: 'Show the Python code',
    hideCode: 'Hide the Python code',
    lines: 'lines',
    // Quiz
    quizIntro: 'Ten questions. Answer all, then check.',
    checkAnswers: 'Check answers',
    tryAgain: 'Try again',
    yourScore: 'Your score',
    correct: 'Correct',
    incorrect: 'Incorrect',
    answer: 'Answer',
    // Interview cards
    revealAnswer: 'Reveal answer',
    hideAnswer: 'Hide answer',
    // Tools
    toolsTitle: 'Interactive Tools',
    toolsSub: 'Every calculator here is built from a formula in the book. Change an input, watch the verdict move.',
    buffettTitle: 'Buffett Indicator',
    buffettSub: 'Market cap to GDP, framed as a percentile of its own history — Chapter 1',
    liquidityTitle: 'Liquidity & Round-Trip Cost Lab',
    liquiditySub: 'Spread, days-to-liquidate, and the hard reject filter — Chapter 2',
    circuitTitle: 'Circuit Breaker Bands',
    circuitSub: 'DSE daily price limit slabs — Chapter 2',
    // Tool labels
    totalMktCap: 'Total market cap (BDT trn)',
    nominalGdp: 'Nominal GDP (BDT trn)',
    histLow: 'Historical low (%)',
    histHigh: 'Historical high (%)',
    indicator: 'Buffett Indicator',
    percentile: 'Historical percentile',
    signal: 'Structural signal',
    bestBid: 'Best bid (BDT)',
    bestAsk: 'Best ask (BDT)',
    adtv: 'ADTV (BDT)',
    stressedAdtv: 'Stressed ADTV (BDT)',
    positionSize: 'Position size (BDT)',
    participation: 'Participation rate',
    brokerage: 'Brokerage per side (%)',
    impact: 'Impact per side (%)',
    midPrice: 'Mid price',
    spreadAbs: 'Spread (absolute)',
    spreadPct: 'Spread (%)',
    daysNormal: 'Days to liquidate (normal)',
    daysStressed: 'Days to liquidate (stressed)',
    roundTrip: 'Round-trip cost',
    breakeven: 'Break-even move required',
    verdict: 'Verdict',
    prevClose: 'Previous close (BDT)',
    slabLimit: 'Slab limit',
    upperCircuit: 'Upper circuit',
    lowerCircuit: 'Lower circuit',
    days: 'days',
    // Verdicts
    vReject: 'REJECT — Illiquid',
    vCaution: 'CAUTION — High friction',
    vOk: 'Acceptable',
    vRich: 'Historically Rich',
    vCheap: 'Historically Cheap',
    vNeutral: 'Neutral',
    // Status
    statusComplete: 'Complete',
    statusOutline: 'Outline',
    outlineNotice:
      'This chapter is scaffolded but not yet authored. The 13-block structure and objectives are in place; full content is pending.',
    objectives: 'Learning objectives',
    disclaimerTitle: 'Disclaimer',
    disclaimer:
      'This book is educational. Nothing in it is investment advice. All company references are illustrative teaching examples. Prices, ratios, and figures are indicative and must be re-verified against the DSE website, the company’s latest audited annual report, and your broker’s terminal before any real decision.',
    howToUse: 'How to Use This Book',
    howToUseBody:
      'Every chapter follows a fixed 13-block structure. Not every block applies to every chapter — where a block is not applicable it is marked N/A.',
    startReading: 'Start with Chapter 1',
    openTools: 'Open the tools',
  },
  bn: {
    appTitle: 'পেশাদার ডিএসই ট্রেডিং ও বিনিয়োগ মাস্টারক্লাস',
    appSub: 'Professional DSE Trading & Investment Masterclass',
    home: 'হোম',
    parts: 'পর্ব',
    tools: 'টুলস',
    part: 'পর্ব',
    chapter: 'অধ্যায়',
    chapters: 'অধ্যায়',
    search: 'অধ্যায় খুঁজুন…',
    noResults: 'এই অনুসন্ধানে কোনো অধ্যায় মেলেনি।',
    progress: 'অগ্রগতি',
    complete: 'সম্পন্ন',
    markRead: 'পঠিত হিসেবে চিহ্নিত করুন',
    markedRead: 'পঠিত ✓',
    resetProgress: 'অগ্রগতি রিসেট করুন',
    resetConfirm: 'সব পাঠ অগ্রগতি ও কুইজ স্কোর মুছে ফেলবেন?',
    prev: 'পূর্ববর্তী',
    next: 'পরবর্তী',
    onThisPage: 'এই পাতায়',
    language: 'ভাষা',
    theme: 'থিম',
    blocks: {
      theory: 'তত্ত্ব',
      simple: 'সহজ ব্যাখ্যা',
      example: 'বাস্তব ডিএসই উদাহরণ',
      formula: 'সূত্র',
      manual: 'হাতে-কলমে হিসাব',
      excel: 'এক্সেল বাস্তবায়ন',
      python: 'পাইথন বাস্তবায়ন',
      mistakes: 'সাধারণ ভুল',
      tips: 'পেশাদার পরামর্শ',
      exercises: 'অনুশীলনী',
      interview: 'ইন্টারভিউ প্রশ্ন',
      quiz: 'কুইজ',
      summary: 'সারসংক্ষেপ',
    },
    na: 'এই অধ্যায়ে প্রযোজ্য নয়।',
    pending: 'বিষয়বস্তু অপেক্ষমাণ।',
    xlDownload: 'এই শিটটি ডাউনলোড করুন (.xlsx)',
    xlDone: 'ডাউনলোড হয়েছে ✓',
    xlHint: 'এক্সেল বা গুগল শিটসে খুলবে, সূত্রসহ — একটি ইনপুট বদলান, রায় নিজে থেকেই বদলে যাবে।',
    pyRun: 'এই কোডটি চালান',
    pyLoading: 'পাইথন লোড হচ্ছে…',
    pyRunning: 'চলছে…',
    pyHint: 'আপনার ব্রাউজারেই চলে। কিছু ইনস্টল করতে হবে না, কোডিং জানার দরকার নেই — ফলাফল বইয়ের সাথে মিলিয়ে দেখুন।',
    pyOffline: 'পাইথন রানটাইম লোড করা যায়নি — প্রথমবার ইন্টারনেট সংযোগ প্রয়োজন।',
    pyOutput: 'ফলাফল',
    showCode: 'পাইথন কোড দেখুন',
    hideCode: 'পাইথন কোড লুকান',
    lines: 'লাইন',
    quizIntro: 'দশটি প্রশ্ন। সবগুলোর উত্তর দিন, তারপর যাচাই করুন।',
    checkAnswers: 'উত্তর যাচাই করুন',
    tryAgain: 'আবার চেষ্টা করুন',
    yourScore: 'আপনার স্কোর',
    correct: 'সঠিক',
    incorrect: 'ভুল',
    answer: 'উত্তর',
    revealAnswer: 'উত্তর দেখুন',
    hideAnswer: 'উত্তর লুকান',
    toolsTitle: 'ইন্টারঅ্যাক্টিভ টুলস',
    toolsSub: 'এখানকার প্রতিটি ক্যালকুলেটর বইয়ের একটি সূত্র থেকে তৈরি। ইনপুট বদলান, রায় বদলাতে দেখুন।',
    buffettTitle: 'বাফেট নির্দেশক',
    buffettSub: 'বাজার মূলধন ও জিডিপির অনুপাত, নিজস্ব ইতিহাসের পার্সেন্টাইল হিসেবে — অধ্যায় ১',
    liquidityTitle: 'তারল্য ও রাউন্ড-ট্রিপ খরচ ল্যাব',
    liquiditySub: 'স্প্রেড, তারল্যকরণের দিন, ও কঠোর প্রত্যাখ্যান ফিল্টার — অধ্যায় ২',
    circuitTitle: 'সার্কিট ব্রেকার ব্যান্ড',
    circuitSub: 'ডিএসই দৈনিক মূল্যসীমার স্ল্যাব — অধ্যায় ২',
    totalMktCap: 'মোট বাজার মূলধন (বিলিয়ন ট্রিলিয়ন টাকা)',
    nominalGdp: 'নামমাত্র জিডিপি (ট্রিলিয়ন টাকা)',
    histLow: 'ঐতিহাসিক সর্বনিম্ন (%)',
    histHigh: 'ঐতিহাসিক সর্বোচ্চ (%)',
    indicator: 'বাফেট নির্দেশক',
    percentile: 'ঐতিহাসিক পার্সেন্টাইল',
    signal: 'কাঠামোগত সংকেত',
    bestBid: 'সেরা ক্রয়দর (টাকা)',
    bestAsk: 'সেরা বিক্রয়দর (টাকা)',
    adtv: 'গড় দৈনিক লেনদেন (টাকা)',
    stressedAdtv: 'চাপযুক্ত বাজারে দৈনিক লেনদেন (টাকা)',
    positionSize: 'পজিশনের আকার (টাকা)',
    participation: 'অংশগ্রহণ হার',
    brokerage: 'প্রতি পাশে ব্রোকারেজ (%)',
    impact: 'প্রতি পাশে প্রভাব (%)',
    midPrice: 'মধ্যম মূল্য',
    spreadAbs: 'স্প্রেড (পরম)',
    spreadPct: 'স্প্রেড (%)',
    daysNormal: 'তারল্যকরণের দিন (স্বাভাবিক)',
    daysStressed: 'তারল্যকরণের দিন (চাপযুক্ত)',
    roundTrip: 'রাউন্ড-ট্রিপ খরচ',
    breakeven: 'ব্রেক-ইভেনের জন্য প্রয়োজনীয় উত্থান',
    verdict: 'রায়',
    prevClose: 'পূর্ববর্তী সমাপনী মূল্য (টাকা)',
    slabLimit: 'স্ল্যাব সীমা',
    upperCircuit: 'ঊর্ধ্ব সার্কিট',
    lowerCircuit: 'নিম্ন সার্কিট',
    days: 'দিন',
    vReject: 'প্রত্যাখ্যান — তারল্যহীন',
    vCaution: 'সতর্কতা — উচ্চ ঘর্ষণ',
    vOk: 'গ্রহণযোগ্য',
    vRich: 'ঐতিহাসিকভাবে ব্যয়বহুল',
    vCheap: 'ঐতিহাসিকভাবে সস্তা',
    vNeutral: 'নিরপেক্ষ',
    statusComplete: 'সম্পূর্ণ',
    statusOutline: 'রূপরেখা',
    outlineNotice:
      'এই অধ্যায়ের কাঠামো প্রস্তুত, তবে বিষয়বস্তু এখনো লেখা হয়নি। ১৩-ব্লক কাঠামো ও শিখন উদ্দেশ্য রয়েছে; পূর্ণ বিষয়বস্তু অপেক্ষমাণ।',
    objectives: 'শিখন উদ্দেশ্য',
    disclaimerTitle: 'দাবিত্যাগ',
    disclaimer:
      'এই বইটি শিক্ষামূলক। এখানে কোনো কিছুই বিনিয়োগ পরামর্শ নয়। সব কোম্পানির উল্লেখ কেবল শিক্ষণীয় উদাহরণ। মূল্য, অনুপাত ও পরিসংখ্যান নির্দেশক মাত্র — যেকোনো প্রকৃত সিদ্ধান্তের আগে ডিএসই ওয়েবসাইট, কোম্পানির সর্বশেষ নিরীক্ষিত বার্ষিক প্রতিবেদন ও আপনার ব্রোকারের টার্মিনালে পুনরায় যাচাই করতে হবে।',
    howToUse: 'এই বই কীভাবে ব্যবহার করবেন',
    howToUseBody:
      'প্রতিটি অধ্যায় একটি নির্দিষ্ট ১৩-ব্লক কাঠামো অনুসরণ করে। প্রতিটি ব্লক প্রতিটি অধ্যায়ে প্রযোজ্য নয় — যেখানে প্রযোজ্য নয় সেখানে N/A চিহ্নিত।',
    startReading: 'অধ্যায় ১ দিয়ে শুরু করুন',
    openTools: 'টুলস খুলুন',
  },
};

const I18nContext = createContext(null);

export function I18nProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem('dse.lang') || 'en');

  useEffect(() => {
    localStorage.setItem('dse.lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const t = STRINGS[lang];
  const toggle = () => setLang((l) => (l === 'en' ? 'bn' : 'en'));

  /** Pick the right side of a {en, bn} pair, falling back to English. */
  const pick = (pair) => {
    if (pair == null) return '';
    if (typeof pair === 'string') return pair;
    return pair[lang] || pair.en || '';
  };

  /**
   * Render a number in the reader's own numerals. Chapter and block numbers
   * sit inline with Bangla text, so Western digits look wrong beside content
   * that already uses ০–৯.
   */
  const num = (value) => {
    const s = String(value);
    if (lang !== 'bn') return s;
    return s.replace(/[0-9]/g, (d) => '০১২৩৪৫৬৭৮৯'[d]);
  };

  return (
    <I18nContext.Provider value={{ lang, setLang, toggle, t, pick, num }}>
      {children}
    </I18nContext.Provider>
  );
}

export const useI18n = () => {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used inside I18nProvider');
  return ctx;
};
