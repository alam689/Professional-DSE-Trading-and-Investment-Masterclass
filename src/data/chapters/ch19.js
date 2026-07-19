/**
 * Chapter 19 — DuPont Analysis
 * Part II, Fundamental Analysis. Follows Ch 15 (Profitability), Ch 16 (Efficiency), Ch 17 (Leverage).
 */

export default {
  n: 19,
  tools: [],

  excelSheet: {
    filename: 'ch19-dupont-decomposition.xlsx',
    sheetName: 'DuPont',
    cells: [
      { cell: 'A1', v: 'THREE COMPANIES, ONE ROE (BDT crore)' },

      { cell: 'A3', v: 'INPUT' }, { cell: 'B3', v: 'Pharma' }, { cell: 'C3', v: 'Textile' }, { cell: 'D3', v: 'NBFI' },
      { cell: 'A4', v: 'Revenue' }, { cell: 'B4', v: 1200 }, { cell: 'C4', v: 2400 }, { cell: 'D4', v: 500 },
      { cell: 'A5', v: 'EBIT' }, { cell: 'B5', v: 288 }, { cell: 'C5', v: 240 }, { cell: 'D5', v: 150 },
      { cell: 'A6', v: 'Interest Expense' }, { cell: 'B6', v: 18 }, { cell: 'C6', v: 60 }, { cell: 'D6', v: 30 },
      { cell: 'A7', v: 'Net Income' }, { cell: 'B7', v: 216 }, { cell: 'C7', v: 144 }, { cell: 'D7', v: 90 },
      { cell: 'A8', v: 'Total Assets' }, { cell: 'B8', v: 2000 }, { cell: 'C8', v: 1600 }, { cell: 'D8', v: 5000 },
      { cell: 'A9', v: 'Shareholders Equity' }, { cell: 'B9', v: 1200 }, { cell: 'C9', v: 800 }, { cell: 'D9', v: 500 },

      { cell: 'A11', v: '— 3-STEP —' },
      { cell: 'A12', v: 'Net Margin' }, { cell: 'B12', f: 'B7/B4' }, { cell: 'C12', f: 'C7/C4' }, { cell: 'D12', f: 'D7/D4' },
      { cell: 'A13', v: 'Asset Turnover' }, { cell: 'B13', f: 'B4/B8' }, { cell: 'C13', f: 'C4/C8' }, { cell: 'D13', f: 'D4/D8' },
      { cell: 'A14', v: 'Equity Multiplier' }, { cell: 'B14', f: 'B8/B9' }, { cell: 'C14', f: 'C8/C9' }, { cell: 'D14', f: 'D8/D9' },
      { cell: 'A15', v: 'ROE (3-step product)' }, { cell: 'B15', f: 'B12*B13*B14' }, { cell: 'C15', f: 'C12*C13*C14' }, { cell: 'D15', f: 'D12*D13*D14' },
      { cell: 'A16', v: 'ROE (reported)' }, { cell: 'B16', f: 'B7/B9' }, { cell: 'C16', f: 'C7/C9' }, { cell: 'D16', f: 'D7/D9' },
      { cell: 'A17', v: 'Identity check' },
      { cell: 'B17', f: 'IF(ABS(B15-B16)<0.0001,"OK","ERROR")' },
      { cell: 'C17', f: 'IF(ABS(C15-C16)<0.0001,"OK","ERROR")' },
      { cell: 'D17', f: 'IF(ABS(D15-D16)<0.0001,"OK","ERROR")' },

      { cell: 'A19', v: '— 5-STEP —' },
      { cell: 'A20', v: 'EBT (= EBIT - Interest)' }, { cell: 'B20', f: 'B5-B6' }, { cell: 'C20', f: 'C5-C6' }, { cell: 'D20', f: 'D5-D6' },
      { cell: 'A21', v: 'Tax Burden (NI/EBT)' }, { cell: 'B21', f: 'B7/B20' }, { cell: 'C21', f: 'C7/C20' }, { cell: 'D21', f: 'D7/D20' },
      { cell: 'A22', v: 'Interest Burden (EBT/EBIT)' }, { cell: 'B22', f: 'B20/B5' }, { cell: 'C22', f: 'C20/C5' }, { cell: 'D22', f: 'D20/D5' },
      { cell: 'A23', v: 'Operating Margin (EBIT/Rev)' }, { cell: 'B23', f: 'B5/B4' }, { cell: 'C23', f: 'C5/C4' }, { cell: 'D23', f: 'D5/D4' },
      { cell: 'A24', v: 'ROE (5-step product)' },
      { cell: 'B24', f: 'B21*B22*B23*B13*B14' },
      { cell: 'C24', f: 'C21*C22*C23*C13*C14' },
      { cell: 'D24', f: 'D21*D22*D23*D13*D14' },

      { cell: 'A26', v: 'DRIVER' },
      { cell: 'B26', f: 'IF(B14>=3,"LEVERAGE",IF(B13>=1.2,"TURNOVER",IF(B12>=0.12,"MARGIN","MIXED")))' },
      { cell: 'C26', f: 'IF(C14>=3,"LEVERAGE",IF(C13>=1.2,"TURNOVER",IF(C12>=0.12,"MARGIN","MIXED")))' },
      { cell: 'D26', f: 'IF(D14>=3,"LEVERAGE",IF(D13>=1.2,"TURNOVER",IF(D12>=0.12,"MARGIN","MIXED")))' },

      { cell: 'A29', v: 'FIVE-YEAR TREND — ONE COMPANY' },
      { cell: 'A30', v: 'Year' }, { cell: 'B30', v: 'Net Margin' }, { cell: 'C30', v: 'Asset TO' },
      { cell: 'D30', v: 'Eq Mult' }, { cell: 'E30', v: 'Operating ROA' }, { cell: 'F30', v: 'ROE' },

      { cell: 'A31', v: 2020 }, { cell: 'B31', v: 0.084 }, { cell: 'C31', v: 1.19 }, { cell: 'D31', v: 1.8 },
      { cell: 'E31', f: 'B31*C31' }, { cell: 'F31', f: 'E31*D31' },
      { cell: 'A32', v: 2021 }, { cell: 'B32', v: 0.076 }, { cell: 'C32', v: 1.13 }, { cell: 'D32', v: 2.1 },
      { cell: 'E32', f: 'B32*C32' }, { cell: 'F32', f: 'E32*D32' },
      { cell: 'A33', v: 2022 }, { cell: 'B33', v: 0.066 }, { cell: 'C33', v: 1.09 }, { cell: 'D33', v: 2.5 },
      { cell: 'E33', f: 'B33*C33' }, { cell: 'F33', f: 'E33*D33' },
      { cell: 'A34', v: 2023 }, { cell: 'B34', v: 0.058 }, { cell: 'C34', v: 1.07 }, { cell: 'D34', v: 2.9 },
      { cell: 'E34', f: 'B34*C34' }, { cell: 'F34', f: 'E34*D34' },
      { cell: 'A35', v: 2024 }, { cell: 'B35', v: 0.051 }, { cell: 'C35', v: 1.04 }, { cell: 'D35', v: 3.4 },
      { cell: 'E35', f: 'B35*C35' }, { cell: 'F35', f: 'E35*D35' },

      { cell: 'A37', v: 'Operating ROA change (pp)' }, { cell: 'B37', f: '(E35-E31)*100' },
      { cell: 'A38', v: 'Equity Multiplier change' }, { cell: 'B38', f: 'D35-D31' },
      { cell: 'A39', v: 'ROE change (pp)' }, { cell: 'B39', f: '(F35-F31)*100' },
      { cell: 'A40', v: 'TREND VERDICT' },
      {
        cell: 'B40',
        f: 'IF(AND(ABS(F35-F31)<=0.01,E35<E31*0.9,D35>D31*1.2),"MANUFACTURED ROE",IF(AND(E35<E31*0.9,D35>D31*1.2),"DETERIORATING","CLEAN"))',
      },
    ],
  },

  objectives: {
    en: [
      'Decompose ROE into the three-step DuPont identity and prove the product reconstructs ROE exactly.',
      'Extend to the five-step identity and state what each of tax burden, interest burden, and operating margin diagnoses.',
      'Show why two DSE companies with identical ROE can be entirely different businesses with entirely different risk.',
      'Detect ROE that is being manufactured by rising leverage rather than improving operations, using a multi-year series.',
      'State the single figure inside DuPont that leverage cannot fake, and use it as the primary quality screen.',
    ],
    bn: [
      'ROE-কে তিন-ধাপের ডুপন্ট অভেদে বিশ্লিষ্ট করা এবং প্রমাণ করা যে গুণফল হুবহু ROE পুনর্গঠন করে।',
      'পাঁচ-ধাপের অভেদে সম্প্রসারণ করা এবং কর ভার, সুদ ভার ও পরিচালন মার্জিন প্রত্যেকে কী নির্ণয় করে তা বলা।',
      'কেন অভিন্ন ROE-সম্পন্ন দুটি ডিএসই কোম্পানি সম্পূর্ণ ভিন্ন ব্যবসা ও সম্পূর্ণ ভিন্ন ঝুঁকির হতে পারে তা দেখানো।',
      'বহু-বছরের ধারা ব্যবহার করে শনাক্ত করা যে ROE পরিচালন উন্নতির নয়, বরং বর্ধমান ঋণভারের দ্বারা কৃত্রিমভাবে তৈরি হচ্ছে।',
      'ডুপন্টের ভেতরে যে একক সংখ্যাটিকে ঋণভার নকল করতে পারে না তা চিহ্নিত করা এবং সেটিকেই প্রাথমিক গুণমান ছাঁকনি হিসেবে ব্যবহার করা।',
    ],
  },

  blocks: {
    theory: {
      en: `Chapter 15 established Return on Equity as the headline profitability measure: net income divided by shareholders' equity. It also established the problem. **ROE is a single number that compresses three unrelated business decisions into one, and in doing so hides all three.**

**DuPont analysis** — developed inside the DuPont Corporation in the 1920s by F. Donaldson Brown — is the algebraic decomposition that reverses that compression. It is not a new ratio. It is an identity. Nothing is estimated, nothing is assumed, and the product of the components equals ROE exactly, always, or you have made an arithmetic error.

### The three-step decomposition

Start with ROE and multiply by two ratios that each equal one:

$$ROE = \\frac{\\text{Net Income}}{\\text{Equity}} = \\frac{\\text{Net Income}}{\\text{Revenue}} \\times \\frac{\\text{Revenue}}{\\text{Total Assets}} \\times \\frac{\\text{Total Assets}}{\\text{Equity}}$$

Revenue cancels against revenue. Total assets cancels against total assets. What is left is net income over equity. **The identity is trivially true — and that is precisely its power. You are not modelling anything. You are reading what is already there.**

The three terms:

| Term | Formula | Diagnoses |
|---|---|---|
| **Net profit margin** | Net Income ÷ Revenue | Pricing power, cost control, product mix |
| **Asset turnover** | Revenue ÷ Total Assets | Capital intensity, operating efficiency |
| **Equity multiplier** | Total Assets ÷ Equity | Financial leverage — how much of the asset base is other people's money |

Read them as three separate questions. *Does this business earn a lot per taka of sales?* *Does it generate a lot of sales per taka of assets?* *Is the equity base doing the work, or is debt?*

### The five-step decomposition

The three-step version has a defect. Net margin is a composite: it contains operating performance, financing cost, and tax policy all at once. A pharma company whose margin falls because gas tariffs rose is a different case from one whose margin falls because it took on BDT 400 crore of term debt. The three-step model cannot separate them.

The five-step version splits net margin into three:

$$ROE = \\underbrace{\\frac{\\text{Net Income}}{\\text{EBT}}}_{\\text{tax burden}} \\times \\underbrace{\\frac{\\text{EBT}}{\\text{EBIT}}}_{\\text{interest burden}} \\times \\underbrace{\\frac{\\text{EBIT}}{\\text{Revenue}}}_{\\text{operating margin}} \\times \\underbrace{\\frac{\\text{Revenue}}{\\text{Assets}}}_{\\text{asset turnover}} \\times \\underbrace{\\frac{\\text{Assets}}{\\text{Equity}}}_{\\text{equity multiplier}}$$

Note that the first three terms multiply back to net margin — $\\frac{NI}{EBT} \\times \\frac{EBT}{EBIT} \\times \\frac{EBIT}{Rev} = \\frac{NI}{Rev}$ — so the five-step identity is the three-step identity with the first term expanded. Both must give the same answer.

| Term | Range | What a change means |
|---|---|---|
| **Tax burden** (NI/EBT) | 0 to 1 | Effective tax rate. In Bangladesh: listed-company rate concessions, sector rates, and — the one to watch — deferred tax movements and one-off rebates |
| **Interest burden** (EBT/EBIT) | 0 to 1 | 1.00 means no debt cost. 0.60 means finance costs are eating 40% of operating profit. **This is where leverage shows up as pain** |
| **Operating margin** (EBIT/Rev) | — | The actual business, before financing and tax. This is the number a competitor could beat you on |
| **Asset turnover** | — | Unchanged from three-step |
| **Equity multiplier** | ≥ 1 | Unchanged from three-step. **This is where leverage shows up as benefit** |

**Leverage therefore appears twice, with opposite signs.** It lifts ROE through the equity multiplier and it depresses ROE through the interest burden. A company that borrows profitably has an equity multiplier rising faster than its interest burden is falling. A company that has borrowed badly has the reverse — and the three-step model, which nets both effects inside "net margin" and "equity multiplier," will not show you which is which.

### Why identical ROE is not identical quality

Two businesses at 18% ROE are not comparable until decomposed. Chapter 8 established that DSE sectors are driven by heterogeneous forces — global demand, a subsidy decision in Dhaka, domestic consumption. DuPont is the tool that makes that heterogeneity visible inside a single ratio.

A pharma company reaching 18% on high margin and low leverage and an NBFI reaching 18% on thin spreads and 10× leverage are not two instances of "an 18% ROE business." They are two entirely different risk objects that happen to share an arithmetic coincidence. **The NBFI's 18% survives exactly as long as its funding does.**

### The regulatory and accounting caveats

- **Equity in the denominator.** Use average equity where the equity base moved materially during the year (rights issue, large stock dividend, revaluation reserve). Chapter 11 established that revaluation surplus under IAS 16 as adopted in Bangladesh inflates equity without creating earning capacity — which *depresses* both ROE and the equity multiplier, and can make a leveraged company look conservative.
- **Banks and NBFIs.** For a bank, "revenue" is not comparable to a manufacturer's revenue, and interest expense is a cost of goods, not a financing cost. The five-step interest burden term is close to meaningless for a bank. Chapter 23 handles banks separately for exactly this reason.
- **FRC and IFRS.** Where a company restates under FRC direction, the prior-year DuPont series must be restated with it. Comparing a restated 2024 against an unrestated 2020 produces a fake trend.`,
      bn: `অধ্যায় ১৫ ইক্যুইটির ওপর রিটার্নকে (ROE) প্রধান মুনাফা পরিমাপ হিসেবে প্রতিষ্ঠা করেছে: নিট মুনাফা ভাগ শেয়ারহোল্ডারদের ইক্যুইটি। এটি সমস্যাটিও প্রতিষ্ঠা করেছে। **ROE এমন একটি একক সংখ্যা যা তিনটি অসম্পর্কিত ব্যবসায়িক সিদ্ধান্তকে একটিতে সংকুচিত করে, এবং তা করতে গিয়ে তিনটিকেই আড়াল করে।**

**ডুপন্ট বিশ্লেষণ** — ১৯২০-এর দশকে ডুপন্ট কর্পোরেশনের ভেতরে F. Donaldson Brown উদ্ভাবিত — সেই সংকোচনকে উল্টে দেওয়ার বীজগাণিতিক বিশ্লেষণ। এটি নতুন কোনো অনুপাত নয়। এটি একটি অভেদ। কিছুই অনুমান করা হয় না, কিছুই ধরে নেওয়া হয় না, এবং উপাদানগুলোর গুণফল সর্বদা হুবহু ROE-র সমান — নাহলে আপনি পাটিগণিতে ভুল করেছেন।

### তিন-ধাপের বিশ্লেষণ

ROE দিয়ে শুরু করুন এবং এমন দুটি অনুপাত দিয়ে গুণ করুন যার প্রতিটির মান এক:

$$ROE = \\frac{\\text{নিট মুনাফা}}{\\text{ইক্যুইটি}} = \\frac{\\text{নিট মুনাফা}}{\\text{রাজস্ব}} \\times \\frac{\\text{রাজস্ব}}{\\text{মোট সম্পদ}} \\times \\frac{\\text{মোট সম্পদ}}{\\text{ইক্যুইটি}}$$

রাজস্ব রাজস্বের সঙ্গে কাটে। মোট সম্পদ মোট সম্পদের সঙ্গে কাটে। অবশিষ্ট থাকে নিট মুনাফা ভাগ ইক্যুইটি। **অভেদটি তুচ্ছভাবে সত্য — এবং সেটিই ঠিক এর শক্তি। আপনি কোনো মডেল বানাচ্ছেন না। আপনি যা আগে থেকেই আছে তা পড়ছেন।**

তিনটি পদ:

| পদ | সূত্র | কী নির্ণয় করে |
|---|---|---|
| **নিট মুনাফা মার্জিন** | নিট মুনাফা ÷ রাজস্ব | মূল্য নির্ধারণের ক্ষমতা, ব্যয় নিয়ন্ত্রণ, পণ্য মিশ্রণ |
| **সম্পদ আবর্তন** | রাজস্ব ÷ মোট সম্পদ | মূলধন নিবিড়তা, পরিচালন দক্ষতা |
| **ইক্যুইটি গুণক** | মোট সম্পদ ÷ ইক্যুইটি | আর্থিক ঋণভার — সম্পদভিত্তির কতটা অন্যের টাকা |

এদের তিনটি পৃথক প্রশ্ন হিসেবে পড়ুন। *এই ব্যবসা কি বিক্রির প্রতি টাকায় বেশি আয় করে?* *এটি কি সম্পদের প্রতি টাকায় বেশি বিক্রি তৈরি করে?* *কাজটি কি ইক্যুইটি করছে, না ঋণ?*

### পাঁচ-ধাপের বিশ্লেষণ

তিন-ধাপের সংস্করণে একটি ত্রুটি আছে। নিট মার্জিন একটি যৌগ: এতে একসঙ্গে পরিচালন কর্মক্ষমতা, অর্থায়ন ব্যয় ও কর নীতি ঢুকে আছে। যে ওষুধ কোম্পানির মার্জিন গ্যাসের শুল্ক বাড়ায় কমেছে, সেটি ঐ কোম্পানি থেকে ভিন্ন যার মার্জিন কমেছে ৪০০ কোটি টাকার মেয়াদি ঋণ নেওয়ায়। তিন-ধাপের মডেল এদের আলাদা করতে পারে না।

পাঁচ-ধাপের সংস্করণ নিট মার্জিনকে তিনভাগে ভাঙে:

$$ROE = \\underbrace{\\frac{\\text{নিট মুনাফা}}{EBT}}_{\\text{কর ভার}} \\times \\underbrace{\\frac{EBT}{EBIT}}_{\\text{সুদ ভার}} \\times \\underbrace{\\frac{EBIT}{\\text{রাজস্ব}}}_{\\text{পরিচালন মার্জিন}} \\times \\underbrace{\\frac{\\text{রাজস্ব}}{\\text{সম্পদ}}}_{\\text{সম্পদ আবর্তন}} \\times \\underbrace{\\frac{\\text{সম্পদ}}{\\text{ইক্যুইটি}}}_{\\text{ইক্যুইটি গুণক}}$$

লক্ষ করুন প্রথম তিনটি পদ গুণ করলে নিট মার্জিন ফিরে আসে — $\\frac{NI}{EBT} \\times \\frac{EBT}{EBIT} \\times \\frac{EBIT}{Rev} = \\frac{NI}{Rev}$ — অর্থাৎ পাঁচ-ধাপের অভেদ হলো তিন-ধাপের অভেদ যার প্রথম পদটি সম্প্রসারিত। দুটিই একই উত্তর দিতে বাধ্য।

| পদ | পরিসর | পরিবর্তনের অর্থ |
|---|---|---|
| **কর ভার** (NI/EBT) | ০ থেকে ১ | কার্যকর করহার। বাংলাদেশে: তালিকাভুক্ত কোম্পানির হার ছাড়, খাতভিত্তিক হার, এবং — যেটি নজরে রাখতে হবে — বিলম্বিত কর (deferred tax) পরিবর্তন ও এককালীন রেয়াত |
| **সুদ ভার** (EBT/EBIT) | ০ থেকে ১ | ১.০০ মানে কোনো ঋণ ব্যয় নেই। ০.৬০ মানে অর্থায়ন ব্যয় পরিচালন মুনাফার ৪০% খেয়ে ফেলছে। **এখানেই ঋণভার যন্ত্রণা হিসেবে দেখা দেয়** |
| **পরিচালন মার্জিন** (EBIT/রাজস্ব) | — | অর্থায়ন ও করের আগে প্রকৃত ব্যবসা। এই সংখ্যাতেই একজন প্রতিযোগী আপনাকে হারাতে পারে |
| **সম্পদ আবর্তন** | — | তিন-ধাপের মতোই অপরিবর্তিত |
| **ইক্যুইটি গুণক** | ≥ ১ | তিন-ধাপের মতোই অপরিবর্তিত। **এখানেই ঋণভার সুবিধা হিসেবে দেখা দেয়** |

**অতএব ঋণভার দুইবার আসে, বিপরীত চিহ্নে।** এটি ইক্যুইটি গুণকের মাধ্যমে ROE তোলে এবং সুদ ভারের মাধ্যমে ROE নামায়। যে কোম্পানি লাভজনকভাবে ঋণ নেয়, তার ইক্যুইটি গুণক সুদ ভার নামার চেয়ে দ্রুত বাড়ে। যে খারাপভাবে ঋণ নিয়েছে, তার উল্টো — এবং তিন-ধাপের মডেল, যা উভয় প্রভাবকে "নিট মার্জিন" ও "ইক্যুইটি গুণক"-এর ভেতরে মিলিয়ে ফেলে, কোনটি কোনটি তা দেখাবে না।

### কেন অভিন্ন ROE অভিন্ন গুণমান নয়

১৮% ROE-র দুটি ব্যবসা বিশ্লিষ্ট না করা পর্যন্ত তুলনীয় নয়। অধ্যায় ৮ প্রতিষ্ঠা করেছে যে ডিএসই-র খাতগুলো ভিন্নধর্মী শক্তি দ্বারা চালিত — বৈশ্বিক চাহিদা, ঢাকায় নেওয়া একটি ভর্তুকি সিদ্ধান্ত, অভ্যন্তরীণ ভোগ। ডুপন্ট সেই ভিন্নধর্মিতাকে একটি একক অনুপাতের ভেতরে দৃশ্যমান করে।

উচ্চ মার্জিন ও নিম্ন ঋণভারে ১৮%-এ পৌঁছানো একটি ওষুধ কোম্পানি এবং পাতলা স্প্রেড ও ১০× ঋণভারে ১৮%-এ পৌঁছানো একটি NBFI — এরা "১৮% ROE-র ব্যবসা"-র দুটি উদাহরণ নয়। এরা সম্পূর্ণ ভিন্ন দুটি ঝুঁকি-বস্তু, যাদের মধ্যে কেবল একটি পাটিগাণিতিক কাকতাল মিলে গেছে। **NBFI-র ১৮% ঠিক ততক্ষণ টেকে যতক্ষণ তার তহবিল টেকে।**

### নিয়ন্ত্রক ও হিসাবরক্ষণ সংক্রান্ত সতর্কতা

- **হরে ইক্যুইটি।** বছরের মধ্যে ইক্যুইটিভিত্তি উল্লেখযোগ্যভাবে নড়লে (রাইট ইস্যু, বড় স্টক ডিভিডেন্ড, পুনর্মূল্যায়ন সঞ্চিতি) গড় ইক্যুইটি ব্যবহার করুন। অধ্যায় ১১ প্রতিষ্ঠা করেছে যে বাংলাদেশে গৃহীত IAS 16 অনুযায়ী পুনর্মূল্যায়ন উদ্বৃত্ত আয়ক্ষমতা তৈরি না করেই ইক্যুইটি স্ফীত করে — যা ROE ও ইক্যুইটি গুণক উভয়কেই *নামায়*, এবং একটি ঋণভারগ্রস্ত কোম্পানিকে রক্ষণশীল দেখাতে পারে।
- **ব্যাংক ও NBFI।** ব্যাংকের ক্ষেত্রে "রাজস্ব" একটি উৎপাদকের রাজস্বের সঙ্গে তুলনীয় নয়, এবং সুদ ব্যয় সেখানে অর্থায়ন ব্যয় নয়, বিক্রীত পণ্যের ব্যয়। ব্যাংকের জন্য পাঁচ-ধাপের সুদ ভার পদটি প্রায় অর্থহীন। ঠিক এ কারণেই অধ্যায় ২৩ ব্যাংককে আলাদাভাবে ধরে।
- **FRC ও IFRS।** কোনো কোম্পানি FRC-র নির্দেশে হিসাব পুনর্বিবৃত করলে পূর্ববর্তী বছরের ডুপন্ট ধারাও তার সঙ্গে পুনর্বিবৃত করতে হবে। পুনর্বিবৃত ২০২৪-কে অপুনর্বিবৃত ২০২০-র সঙ্গে তুলনা করলে একটি নকল প্রবণতা তৈরি হয়।`,
    },

    simple: {
      en: `A shop makes 18 taka of profit for every 100 taka the owner put in. That is 18% ROE. Now ask *how*.

**Shop 1 — the pharmacy.** Sells medicine at a good markup. Every 100 taka of sales leaves 18 taka of profit. It does not need much stock, and the owner paid for almost everything himself.

**Shop 2 — the rice wholesaler.** Makes only 6 taka on every 100 taka of sales. Almost nothing. But he turns his entire warehouse over one and a half times a year, and he borrowed half his capital. Volume plus a bit of debt gets him to the same 18.

**Shop 3 — the money lender.** He has 5 lakh of his own. He borrowed 45 lakh. He lends out 50 lakh at a small spread. The spread is thin, the turnover is glacial — but ten taka is working for every one taka of his. He also gets to 18.

**Same 18%. Three completely different lives.**

If prices fall, the pharmacy loses some profit. If prices fall, the wholesaler loses some profit. If prices fall, **the money lender loses everything**, because his lenders want their 45 lakh back and his own 5 lakh is the only cushion between them and a loss.

---

### The trick you must learn to see

Now watch one shop over five years.

Year 1: it earns 18%. Year 5: it earns 18%. The owner tells you nothing has changed.

But in Year 1 he had borrowed 80 paisa for every taka of his own. In Year 5 he has borrowed 2 taka 40 paisa for every taka of his own. His actual business — profit per taka of sales — has almost halved.

**He has not maintained his returns. He has replaced his business with a loan.** The ROE number is the same. The company is not.

This is the most common way a mediocre Bangladeshi company looks stable for half a decade before it does not. Retail investors screen on ROE, see 18% five years running, and call it consistency. It was never consistency. It was a balance sheet being levered up one notch a year until it ran out of room.`,
      bn: `একটি দোকান মালিকের রাখা প্রতি ১০০ টাকায় ১৮ টাকা মুনাফা করে। সেটিই ১৮% ROE। এবার জিজ্ঞেস করুন *কীভাবে*।

**দোকান ১ — ফার্মেসি।** ভালো মার্কআপে ওষুধ বেচে। প্রতি ১০০ টাকার বিক্রিতে ১৮ টাকা মুনাফা থাকে। বেশি মজুত লাগে না, আর মালিক প্রায় সবটাই নিজের টাকায় করেছেন।

**দোকান ২ — চালের আড়ত।** প্রতি ১০০ টাকার বিক্রিতে মাত্র ৬ টাকা আয়। প্রায় কিছুই না। কিন্তু তিনি বছরে পুরো গুদাম দেড়বার ঘোরান, আর অর্ধেক মূলধন ধার করেছেন। পরিমাণ আর সামান্য ঋণ মিলে তাঁকেও ঐ ১৮-তেই নিয়ে যায়।

**দোকান ৩ — মহাজন।** তাঁর নিজের ৫ লক্ষ। ধার করেছেন ৪৫ লক্ষ। ৫০ লক্ষ ছোট স্প্রেডে ধার দেন। স্প্রেড পাতলা, আবর্তন হিমশীতল — কিন্তু তাঁর প্রতি এক টাকার বিপরীতে দশ টাকা কাজ করছে। তিনিও ১৮-তে পৌঁছান।

**একই ১৮%। তিনটি সম্পূর্ণ ভিন্ন জীবন।**

দাম পড়লে ফার্মেসি কিছু মুনাফা হারায়। দাম পড়লে আড়তদার কিছু মুনাফা হারান। দাম পড়লে **মহাজন সব হারান**, কারণ তাঁর পাওনাদাররা ৪৫ লক্ষ ফেরত চান আর তাঁদের ও ক্ষতির মাঝখানে একমাত্র গদি হলো তাঁর নিজের ৫ লক্ষ।

---

### যে কৌশলটি চিনতে শিখতে হবে

এবার একটি দোকানকে পাঁচ বছর ধরে দেখুন।

বছর ১: আয় ১৮%। বছর ৫: আয় ১৮%। মালিক বলছেন কিছুই বদলায়নি।

কিন্তু বছর ১-এ তিনি নিজের প্রতি টাকার বিপরীতে ৮০ পয়সা ধার করেছিলেন। বছর ৫-এ নিজের প্রতি টাকার বিপরীতে ২ টাকা ৪০ পয়সা ধার করেছেন। তাঁর প্রকৃত ব্যবসা — বিক্রির প্রতি টাকায় মুনাফা — প্রায় অর্ধেক হয়ে গেছে।

**তিনি রিটার্ন ধরে রাখেননি। তিনি ব্যবসার জায়গায় ঋণ বসিয়েছেন।** ROE সংখ্যাটি একই। কোম্পানিটি একই নয়।

একটি মাঝারি মানের বাংলাদেশি কোম্পানি অর্ধ-দশক ধরে স্থিতিশীল দেখানোর এটিই সবচেয়ে সাধারণ উপায় — যতক্ষণ না আর দেখায় না। খুচরা বিনিয়োগকারীরা ROE দিয়ে ছাঁকেন, পাঁচ বছর টানা ১৮% দেখেন, আর তাকে ধারাবাহিকতা বলেন। এটি কখনোই ধারাবাহিকতা ছিল না। এটি ছিল একটি স্থিতিপত্র, যাকে বছরে এক ধাপ করে ঋণভারে তোলা হচ্ছিল, যতক্ষণ না জায়গা ফুরিয়ে গেল।`,
    },

    example: {
      en: `### Three DSE archetypes, all at 18% ROE

All figures BDT crore, latest full year.

| | **Pharma** (APEX-style) | **Textile** (SPIN-style) | **NBFI** (LEASE-style) |
|---|---|---|---|
| Revenue | 1,200 | 2,400 | 500 |
| EBIT | 288 | 240 | 150 |
| Interest expense | 18 | 60 | 30 |
| EBT | 270 | 180 | 120 |
| Net income | 216 | 144 | 90 |
| Total assets | 2,000 | 1,600 | 5,000 |
| Shareholders' equity | 1,200 | 800 | 500 |
| **ROE** | **18.00%** | **18.00%** | **18.00%** |

A screener sorting on ROE returns all three, adjacent, indistinguishable.

### Three-step decomposition

| | Pharma | Textile | NBFI |
|---|---|---|---|
| Net margin | 18.00% | 6.00% | 18.00% |
| Asset turnover | 0.60 | 1.50 | 0.10 |
| Equity multiplier | 1.67 | 2.00 | 10.00 |
| **Product** | **18.00%** | **18.00%** | **18.00%** |
| Driver | Margin | Turnover | **Leverage** |

**Read the pharma and the NBFI columns side by side.** Both have an 18% net margin. Identical. And they could not be more different, because the pharma turns its assets 0.60 times a year and the NBFI turns them 0.10 times. The NBFI's margin is 18% of a revenue base that is one-tenth of its balance sheet. The pharma's is 18% of a revenue base that is 60% of its balance sheet.

**Net margin alone is not a quality signal.** The discriminating figure is the *product of margin and turnover*:

| | Pharma | Textile | NBFI |
|---|---|---|---|
| Net margin × asset turnover | **10.80%** | **9.00%** | **1.80%** |

This is the operating return on assets — what the business earns on everything it controls, before you ask who paid for it. **Leverage cannot fake this number.** The pharma earns 10.80 taka per 100 taka of assets. The NBFI earns 1.80. It reaches the same ROE only by controlling assets ten times its equity.

### Five-step decomposition

| | Pharma | Textile | NBFI |
|---|---|---|---|
| Tax burden (NI/EBT) | 0.8000 | 0.8000 | 0.7500 |
| Interest burden (EBT/EBIT) | 0.9375 | 0.7500 | 0.8000 |
| Operating margin (EBIT/Rev) | 24.00% | 10.00% | 30.00% |
| Asset turnover | 0.60 | 1.50 | 0.10 |
| Equity multiplier | 1.6667 | 2.0000 | 10.0000 |
| **Product** | **18.00%** | **18.00%** | **18.00%** |

Now the textile company becomes legible. Its interest burden is **0.75** — finance costs consume a quarter of operating profit before tax touches it. Its operating margin is 10%, less than half the pharma's. The 18% ROE is being carried by asset turnover of 1.50, which is a genuine operational strength, and by an equity multiplier of 2.0, which is a genuine risk.

**Now stress it.** Suppose gas supply disruption cuts textile EBIT by 25%, to 180. Interest expense does not fall — it is contractual.

| | Before | After |
|---|---|---|
| EBIT | 240 | 180 |
| Interest | 60 | 60 |
| EBT | 180 | 120 |
| Interest burden | 0.7500 | 0.6667 |
| Net income (at 0.80 tax burden) | 144 | 96 |
| **ROE** | **18.00%** | **12.00%** |

**A 25% fall in operating profit produced a 33% fall in ROE.** That amplification is the interest burden term doing its work. Run the same 25% EBIT shock on the pharma — EBIT 288 → 216, interest still 18, EBT 198, net income 158.4 — and ROE falls from 18.00% to 13.20%, a 26.7% fall, barely more than proportionate, because its interest burden was 0.9375 to begin with.

**Same ROE. Different fragility. DuPont is what makes the difference visible before the shock, not after.**

### The five-year series: ROE that is being manufactured

One DSE-listed engineering company. Reported ROE, five consecutive years:

| Year | Net margin | Asset turnover | Equity multiplier | Operating ROA (NM × ATO) | ROE |
|---|---|---|---|---|---|
| 2020 | 8.40% | 1.19 | 1.80 | 10.00% | 17.99% |
| 2021 | 7.60% | 1.13 | 2.10 | 8.59% | 18.03% |
| 2022 | 6.60% | 1.09 | 2.50 | 7.19% | 17.98% |
| 2023 | 5.80% | 1.07 | 2.90 | 6.21% | 18.00% |
| 2024 | 5.10% | 1.04 | 3.40 | 5.30% | 18.03% |

The chairman's statement in each annual report notes "consistent returns to shareholders." That is factually accurate and completely misleading.

**What actually happened over five years:**

- Net margin fell from 8.40% to 5.10% — a **39% deterioration** in profitability per taka of sales.
- Asset turnover fell from 1.19 to 1.04 — assets growing faster than the revenue they generate.
- Operating ROA fell from 10.00% to 5.30% — **the business is producing roughly half the return it did.**
- The equity multiplier rose from 1.80 to 3.40 — **debt was added at almost exactly the rate needed to hold ROE at 18%.**

That is not a coincidence and it is not usually a conspiracy. Management is judged on ROE. When operations decay, the cheapest way to defend the headline number is to lever the balance sheet. It works until the interest burden term collapses or a lender declines to roll.

**What the investor should have been tracking is column five, not column six.** Operating ROA halved in plain sight over five annual reports.

**And note where this ends.** At an equity multiplier of 3.40, total assets are 3.4× equity, so debt is roughly 2.4× equity. Chapter 17 established the covenant thresholds Bangladeshi lenders typically write. This company is close to them. The next 8% fall in EBIT does not produce an 8% fall in ROE — it produces a covenant conversation.`,
      bn: `### তিনটি ডিএসই আদিরূপ, সবাই ১৮% ROE-তে

সব সংখ্যা কোটি টাকায়, সর্বশেষ পূর্ণ বছর।

| | **ওষুধ** (APEX-ধাঁচ) | **বস্ত্র** (SPIN-ধাঁচ) | **NBFI** (LEASE-ধাঁচ) |
|---|---|---|---|
| রাজস্ব | ১,২০০ | ২,৪০০ | ৫০০ |
| EBIT | ২৮৮ | ২৪০ | ১৫০ |
| সুদ ব্যয় | ১৮ | ৬০ | ৩০ |
| EBT | ২৭০ | ১৮০ | ১২০ |
| নিট মুনাফা | ২১৬ | ১৪৪ | ৯০ |
| মোট সম্পদ | ২,০০০ | ১,৬০০ | ৫,০০০ |
| শেয়ারহোল্ডারদের ইক্যুইটি | ১,২০০ | ৮০০ | ৫০০ |
| **ROE** | **১৮.০০%** | **১৮.০০%** | **১৮.০০%** |

ROE-তে সাজানো একটি স্ক্রিনার তিনটিকেই ফেরত দেয়, পাশাপাশি, অভিন্ন দেখতে।

### তিন-ধাপের বিশ্লেষণ

| | ওষুধ | বস্ত্র | NBFI |
|---|---|---|---|
| নিট মার্জিন | ১৮.০০% | ৬.০০% | ১৮.০০% |
| সম্পদ আবর্তন | ০.৬০ | ১.৫০ | ০.১০ |
| ইক্যুইটি গুণক | ১.৬৭ | ২.০০ | ১০.০০ |
| **গুণফল** | **১৮.০০%** | **১৮.০০%** | **১৮.০০%** |
| চালক | মার্জিন | আবর্তন | **ঋণভার** |

**ওষুধ ও NBFI কলাম দুটি পাশাপাশি পড়ুন।** দুটিরই নিট মার্জিন ১৮%। অভিন্ন। আর এদের চেয়ে বেশি ভিন্ন আর কিছু হতে পারে না, কারণ ওষুধ কোম্পানি বছরে তার সম্পদ ০.৬০ বার ঘোরায় আর NBFI ঘোরায় ০.১০ বার। NBFI-র মার্জিন এমন এক রাজস্বভিত্তির ১৮% যা তার স্থিতিপত্রের এক-দশমাংশ। ওষুধ কোম্পানির মার্জিন এমন রাজস্বভিত্তির ১৮% যা তার স্থিতিপত্রের ৬০%।

**নিট মার্জিন একা গুণমানের সংকেত নয়।** পার্থক্যকারী সংখ্যাটি হলো *মার্জিন ও আবর্তনের গুণফল*:

| | ওষুধ | বস্ত্র | NBFI |
|---|---|---|---|
| নিট মার্জিন × সম্পদ আবর্তন | **১০.৮০%** | **৯.০০%** | **১.৮০%** |

এটিই সম্পদের ওপর পরিচালন রিটার্ন — ব্যবসাটি তার নিয়ন্ত্রণাধীন সবকিছুর ওপর যা আয় করে, কে টাকা দিয়েছে তা জিজ্ঞেস করার আগেই। **এই সংখ্যাটি ঋণভার নকল করতে পারে না।** ওষুধ কোম্পানি প্রতি ১০০ টাকা সম্পদে ১০.৮০ টাকা আয় করে। NBFI করে ১.৮০ টাকা। সে একই ROE-তে পৌঁছায় কেবল নিজের ইক্যুইটির দশগুণ সম্পদ নিয়ন্ত্রণ করে।

### পাঁচ-ধাপের বিশ্লেষণ

| | ওষুধ | বস্ত্র | NBFI |
|---|---|---|---|
| কর ভার (NI/EBT) | ০.৮০০০ | ০.৮০০০ | ০.৭৫০০ |
| সুদ ভার (EBT/EBIT) | ০.৯৩৭৫ | ০.৭৫০০ | ০.৮০০০ |
| পরিচালন মার্জিন (EBIT/রাজস্ব) | ২৪.০০% | ১০.০০% | ৩০.০০% |
| সম্পদ আবর্তন | ০.৬০ | ১.৫০ | ০.১০ |
| ইক্যুইটি গুণক | ১.৬৬৬৭ | ২.০০০০ | ১০.০০০০ |
| **গুণফল** | **১৮.০০%** | **১৮.০০%** | **১৮.০০%** |

এবার বস্ত্র কোম্পানিটি পাঠযোগ্য হয়ে ওঠে। তার সুদ ভার **০.৭৫** — কর স্পর্শ করার আগেই অর্থায়ন ব্যয় পরিচালন মুনাফার এক-চতুর্থাংশ খেয়ে ফেলছে। তার পরিচালন মার্জিন ১০%, ওষুধ কোম্পানির অর্ধেকেরও কম। ১৮% ROE বহন করছে ১.৫০ সম্পদ আবর্তন, যা প্রকৃত পরিচালন শক্তি, এবং ২.০ ইক্যুইটি গুণক, যা প্রকৃত ঝুঁকি।

**এবার চাপ দিন।** ধরুন গ্যাস সরবরাহ বিঘ্নে বস্ত্র কোম্পানির EBIT ২৫% কমে ১৮০ হলো। সুদ ব্যয় কমে না — এটি চুক্তিবদ্ধ।

| | আগে | পরে |
|---|---|---|
| EBIT | ২৪০ | ১৮০ |
| সুদ | ৬০ | ৬০ |
| EBT | ১৮০ | ১২০ |
| সুদ ভার | ০.৭৫০০ | ০.৬৬৬৭ |
| নিট মুনাফা (০.৮০ কর ভারে) | ১৪৪ | ৯৬ |
| **ROE** | **১৮.০০%** | **১২.০০%** |

**পরিচালন মুনাফায় ২৫% পতন ROE-তে ৩৩% পতন তৈরি করল।** ঐ বিবর্ধনই সুদ ভার পদটির কাজ। একই ২৫% EBIT ধাক্কা ওষুধ কোম্পানিতে দিলে — EBIT ২৮৮ → ২১৬, সুদ এখনো ১৮, EBT ১৯৮, নিট মুনাফা ১৫৮.৪ — ROE ১৮.০০% থেকে ১৩.২০%-এ নামে, অর্থাৎ ২৬.৭% পতন, সমানুপাতিকের চেয়ে সামান্য বেশি, কারণ তার সুদ ভার শুরুতেই ০.৯৩৭৫ ছিল।

**একই ROE। ভিন্ন ভঙ্গুরতা। ডুপন্টই সেই পার্থক্য ধাক্কার পরে নয়, আগে দৃশ্যমান করে।**

### পাঁচ বছরের ধারা: যে ROE কৃত্রিমভাবে তৈরি হচ্ছে

একটি ডিএসই-তালিকাভুক্ত প্রকৌশল কোম্পানি। ঘোষিত ROE, পরপর পাঁচ বছর:

| বছর | নিট মার্জিন | সম্পদ আবর্তন | ইক্যুইটি গুণক | পরিচালন ROA (NM × ATO) | ROE |
|---|---|---|---|---|---|
| ২০২০ | ৮.৪০% | ১.১৯ | ১.৮০ | ১০.০০% | ১৭.৯৯% |
| ২০২১ | ৭.৬০% | ১.১৩ | ২.১০ | ৮.৫৯% | ১৮.০৩% |
| ২০২২ | ৬.৬০% | ১.০৯ | ২.৫০ | ৭.১৯% | ১৭.৯৮% |
| ২০২৩ | ৫.৮০% | ১.০৭ | ২.৯০ | ৬.২১% | ১৮.০০% |
| ২০২৪ | ৫.১০% | ১.০৪ | ৩.৪০ | ৫.৩০% | ১৮.০৩% |

প্রতিটি বার্ষিক প্রতিবেদনে চেয়ারম্যানের বিবৃতিতে লেখা "শেয়ারহোল্ডারদের প্রতি ধারাবাহিক রিটার্ন"। এটি তথ্যগতভাবে সঠিক এবং সম্পূর্ণ বিভ্রান্তিকর।

**পাঁচ বছরে আসলে যা ঘটেছে:**

- নিট মার্জিন ৮.৪০% থেকে ৫.১০%-এ নেমেছে — বিক্রির প্রতি টাকায় মুনাফায় **৩৯% অবনতি**।
- সম্পদ আবর্তন ১.১৯ থেকে ১.০৪-এ নেমেছে — সম্পদ যে রাজস্ব তৈরি করে তার চেয়ে দ্রুত বাড়ছে।
- পরিচালন ROA ১০.০০% থেকে ৫.৩০%-এ নেমেছে — **ব্যবসাটি আগের প্রায় অর্ধেক রিটার্ন উৎপাদন করছে।**
- ইক্যুইটি গুণক ১.৮০ থেকে ৩.৪০-এ উঠেছে — **ROE ১৮%-এ ধরে রাখতে ঠিক যতটা দরকার প্রায় ততটাই ঋণ যোগ করা হয়েছে।**

এটি কাকতাল নয় এবং সাধারণত ষড়যন্ত্রও নয়। ব্যবস্থাপনাকে ROE দিয়ে বিচার করা হয়। পরিচালনা ক্ষয়ে গেলে শিরোনাম সংখ্যাটি রক্ষার সবচেয়ে সস্তা উপায় হলো স্থিতিপত্রকে ঋণভারে তোলা। সুদ ভার পদটি ভেঙে না পড়া বা কোনো ঋণদাতা নবায়নে অস্বীকৃতি না জানানো পর্যন্ত এটি কাজ করে।

**বিনিয়োগকারীর অনুসরণ করা উচিত ছিল পঞ্চম কলাম, ষষ্ঠ নয়।** পাঁচটি বার্ষিক প্রতিবেদনে প্রকাশ্যে পরিচালন ROA অর্ধেক হয়ে গেছে।

**আর লক্ষ করুন এর শেষ কোথায়।** ৩.৪০ ইক্যুইটি গুণকে মোট সম্পদ ইক্যুইটির ৩.৪ গুণ, অর্থাৎ ঋণ প্রায় ইক্যুইটির ২.৪ গুণ। অধ্যায় ১৭ প্রতিষ্ঠা করেছে বাংলাদেশি ঋণদাতারা সাধারণত কোন কোভেন্যান্ট সীমা লেখেন। এই কোম্পানি সেগুলোর কাছাকাছি। EBIT-তে পরবর্তী ৮% পতন ROE-তে ৮% পতন তৈরি করে না — এটি একটি কোভেন্যান্ট আলোচনা তৈরি করে।`,
    },

    formula: {
      en: `**The three-step DuPont identity:**

$$ROE = \\frac{NI}{E} = \\underbrace{\\frac{NI}{S}}_{\\text{net margin}} \\times \\underbrace{\\frac{S}{A}}_{\\text{asset turnover}} \\times \\underbrace{\\frac{A}{E}}_{\\text{equity multiplier}}$$

where $NI$ = net income, $S$ = revenue (sales), $A$ = total assets, $E$ = shareholders' equity.

**The five-step DuPont identity:**

$$ROE = \\underbrace{\\frac{NI}{EBT}}_{\\text{tax burden}} \\times \\underbrace{\\frac{EBT}{EBIT}}_{\\text{interest burden}} \\times \\underbrace{\\frac{EBIT}{S}}_{\\text{operating margin}} \\times \\underbrace{\\frac{S}{A}}_{\\text{asset turnover}} \\times \\underbrace{\\frac{A}{E}}_{\\text{equity multiplier}}$$

with

$$EBT = EBIT - \\text{Interest Expense}$$

**Reconciliation between the two.** The first three terms of the five-step collapse to net margin:

$$\\frac{NI}{EBT} \\times \\frac{EBT}{EBIT} \\times \\frac{EBIT}{S} = \\frac{NI}{S}$$

so both identities must return the same ROE. Any discrepancy is an input error, not a modelling difference.

**Operating return on assets** — the leverage-free core of ROE:

$$ROA_{op} = \\frac{NI}{S} \\times \\frac{S}{A} = \\frac{NI}{A}$$

$$ROE = ROA_{op} \\times \\frac{A}{E}$$

**Effective tax rate** implied by the tax burden term:

$$t = 1 - \\frac{NI}{EBT}$$

**Leverage decomposition of the equity multiplier:**

$$\\frac{A}{E} = 1 + \\frac{\\text{Total Liabilities}}{E}$$

so an equity multiplier of 3.40 implies liabilities of 2.40 times equity.

**Manufactured-ROE test.** Over a series of years $t = 1 \\ldots n$, ROE is being manufactured by leverage when all three hold:

$$|ROE_n - ROE_1| \\le 0.01 \\quad\\text{and}\\quad ROA_{op,n} < 0.90 \\cdot ROA_{op,1} \\quad\\text{and}\\quad \\left(\\frac{A}{E}\\right)_n > 1.20 \\cdot \\left(\\frac{A}{E}\\right)_1$$

Stable headline, decaying operations, expanding balance sheet. All three together, or it is not the pattern.

**Average equity** — use where the equity base moved materially during the year:

$$\\bar{E} = \\frac{E_{\\text{open}} + E_{\\text{close}}}{2}$$`,
      bn: `**তিন-ধাপের ডুপন্ট অভেদ:**

$$ROE = \\frac{NI}{E} = \\underbrace{\\frac{NI}{S}}_{\\text{নিট মার্জিন}} \\times \\underbrace{\\frac{S}{A}}_{\\text{সম্পদ আবর্তন}} \\times \\underbrace{\\frac{A}{E}}_{\\text{ইক্যুইটি গুণক}}$$

যেখানে $NI$ = নিট মুনাফা, $S$ = রাজস্ব, $A$ = মোট সম্পদ, $E$ = শেয়ারহোল্ডারদের ইক্যুইটি।

**পাঁচ-ধাপের ডুপন্ট অভেদ:**

$$ROE = \\underbrace{\\frac{NI}{EBT}}_{\\text{কর ভার}} \\times \\underbrace{\\frac{EBT}{EBIT}}_{\\text{সুদ ভার}} \\times \\underbrace{\\frac{EBIT}{S}}_{\\text{পরিচালন মার্জিন}} \\times \\underbrace{\\frac{S}{A}}_{\\text{সম্পদ আবর্তন}} \\times \\underbrace{\\frac{A}{E}}_{\\text{ইক্যুইটি গুণক}}$$

যেখানে

$$EBT = EBIT - \\text{সুদ ব্যয়}$$

**দুটির মধ্যে সমন্বয়।** পাঁচ-ধাপের প্রথম তিনটি পদ নিট মার্জিনে গুটিয়ে যায়:

$$\\frac{NI}{EBT} \\times \\frac{EBT}{EBIT} \\times \\frac{EBIT}{S} = \\frac{NI}{S}$$

অতএব দুটি অভেদ একই ROE ফেরত দিতে বাধ্য। কোনো অমিল থাকলে সেটি ইনপুট ভুল, মডেলের পার্থক্য নয়।

**সম্পদের ওপর পরিচালন রিটার্ন** — ROE-র ঋণভার-মুক্ত কেন্দ্র:

$$ROA_{op} = \\frac{NI}{S} \\times \\frac{S}{A} = \\frac{NI}{A}$$

$$ROE = ROA_{op} \\times \\frac{A}{E}$$

**কর ভার পদ থেকে নিহিত কার্যকর করহার:**

$$t = 1 - \\frac{NI}{EBT}$$

**ইক্যুইটি গুণকের ঋণভার বিশ্লেষণ:**

$$\\frac{A}{E} = 1 + \\frac{\\text{মোট দায়}}{E}$$

অর্থাৎ ৩.৪০ ইক্যুইটি গুণক মানে দায় ইক্যুইটির ২.৪০ গুণ।

**কৃত্রিম-ROE পরীক্ষা।** $t = 1 \\ldots n$ বছরের ধারায় ROE ঋণভার দিয়ে কৃত্রিমভাবে তৈরি হচ্ছে যখন তিনটিই সত্য:

$$|ROE_n - ROE_1| \\le 0.01 \\quad\\text{এবং}\\quad ROA_{op,n} < 0.90 \\cdot ROA_{op,1} \\quad\\text{এবং}\\quad \\left(\\frac{A}{E}\\right)_n > 1.20 \\cdot \\left(\\frac{A}{E}\\right)_1$$

স্থিতিশীল শিরোনাম, ক্ষয়িষ্ণু পরিচালনা, স্ফীত স্থিতিপত্র। তিনটি একসঙ্গে, নাহলে এটি ঐ প্যাটার্ন নয়।

**গড় ইক্যুইটি** — বছরের মধ্যে ইক্যুইটিভিত্তি উল্লেখযোগ্যভাবে নড়লে ব্যবহার করুন:

$$\\bar{E} = \\frac{E_{\\text{শুরু}} + E_{\\text{শেষ}}}{2}$$`,
    },

    manual: {
      en: `### Part A — Full three-step decomposition, three companies

**Company 1 — Pharma.** Revenue 1,200; net income 216; total assets 2,000; equity 1,200 (BDT crore).

**Step 1 — Net margin:**
$$\\frac{216}{1{,}200} = 0.1800 = 18.00\\%$$

**Step 2 — Asset turnover:**
$$\\frac{1{,}200}{2{,}000} = 0.6000$$

**Step 3 — Equity multiplier:**
$$\\frac{2{,}000}{1{,}200} = 1.6667$$

**Step 4 — Multiply:**
$$0.1800 \\times 0.6000 = 0.1080$$
$$0.1080 \\times 1.6667 = 0.1800 = 18.00\\%$$

**Step 5 — Verify against reported ROE:**
$$\\frac{216}{1{,}200} = 0.1800 = 18.00\\% \\;\\checkmark$$

---

**Company 2 — Textile.** Revenue 2,400; net income 144; total assets 1,600; equity 800.

$$\\text{Net margin} = \\frac{144}{2{,}400} = 0.0600 = 6.00\\%$$
$$\\text{Asset turnover} = \\frac{2{,}400}{1{,}600} = 1.5000$$
$$\\text{Equity multiplier} = \\frac{1{,}600}{800} = 2.0000$$
$$0.0600 \\times 1.5000 = 0.0900$$
$$0.0900 \\times 2.0000 = 0.1800 = 18.00\\%$$
$$\\text{Reported} = \\frac{144}{800} = 0.1800 \\;\\checkmark$$

---

**Company 3 — NBFI.** Revenue 500; net income 90; total assets 5,000; equity 500.

$$\\text{Net margin} = \\frac{90}{500} = 0.1800 = 18.00\\%$$
$$\\text{Asset turnover} = \\frac{500}{5{,}000} = 0.1000$$
$$\\text{Equity multiplier} = \\frac{5{,}000}{500} = 10.0000$$
$$0.1800 \\times 0.1000 = 0.0180$$
$$0.0180 \\times 10.0000 = 0.1800 = 18.00\\%$$
$$\\text{Reported} = \\frac{90}{500} = 0.1800 \\;\\checkmark$$

**Compare the intermediate products** — the operating ROA, before the equity multiplier is applied:

| | Pharma | Textile | NBFI |
|---|---|---|---|
| NM × ATO | 0.1080 | 0.0900 | **0.0180** |
| × Equity multiplier | 1.6667 | 2.0000 | **10.0000** |
| = ROE | 0.1800 | 0.1800 | 0.1800 |

The NBFI's operating engine produces **1.80 taka per 100 taka of assets**. Everything else is borrowed money. That is not a judgement about NBFIs — it is what the business model is. The error is comparing it to the pharma on ROE.

---

### Part B — Full five-step decomposition, Pharma

Revenue 1,200; EBIT 288; interest 18; net income 216; assets 2,000; equity 1,200.

**Step 1 — EBT:**
$$EBT = 288 - 18 = 270$$

**Step 2 — Tax burden:**
$$\\frac{NI}{EBT} = \\frac{216}{270} = 0.8000$$

Implied effective tax rate: $1 - 0.8000 = 20.00\\%$.

**Step 3 — Interest burden:**
$$\\frac{EBT}{EBIT} = \\frac{270}{288} = 0.9375$$

Finance costs consume 6.25% of operating profit.

**Step 4 — Operating margin:**
$$\\frac{EBIT}{S} = \\frac{288}{1{,}200} = 0.2400 = 24.00\\%$$

**Step 5 — Asset turnover:** $\\frac{1{,}200}{2{,}000} = 0.6000$

**Step 6 — Equity multiplier:** $\\frac{2{,}000}{1{,}200} = 1.6667$

**Step 7 — Multiply, one term at a time:**
$$0.8000 \\times 0.9375 = 0.7500$$
$$0.7500 \\times 0.2400 = 0.1800$$
$$0.1800 \\times 0.6000 = 0.1080$$
$$0.1080 \\times 1.6667 = 0.1800 = 18.00\\%\\;\\checkmark$$

**Step 8 — Cross-check against the three-step.** Note that after Step 7's second line the running product is 0.1800, which is exactly the net margin computed in Part A. The five-step identity has reproduced the three-step identity's first term. This is the reconciliation, and it must hold for every company.

---

### Part C — Full five-step decomposition, Textile and NBFI

**Textile.** EBIT 240; interest 60; NI 144; revenue 2,400.
$$EBT = 240 - 60 = 180$$
$$\\text{Tax burden} = \\frac{144}{180} = 0.8000$$
$$\\text{Interest burden} = \\frac{180}{240} = 0.7500$$
$$\\text{Operating margin} = \\frac{240}{2{,}400} = 0.1000$$
$$0.8000 \\times 0.7500 = 0.6000$$
$$0.6000 \\times 0.1000 = 0.0600 \\;\\text{(= net margin)}$$
$$0.0600 \\times 1.5000 = 0.0900$$
$$0.0900 \\times 2.0000 = 0.1800 = 18.00\\%\\;\\checkmark$$

**NBFI.** EBIT 150; interest 30; NI 90; revenue 500.
$$EBT = 150 - 30 = 120$$
$$\\text{Tax burden} = \\frac{90}{120} = 0.7500$$
$$\\text{Interest burden} = \\frac{120}{150} = 0.8000$$
$$\\text{Operating margin} = \\frac{150}{500} = 0.3000$$
$$0.7500 \\times 0.8000 = 0.6000$$
$$0.6000 \\times 0.3000 = 0.1800 \\;\\text{(= net margin)}$$
$$0.1800 \\times 0.1000 = 0.0180$$
$$0.0180 \\times 10.0000 = 0.1800 = 18.00\\%\\;\\checkmark$$

---

### Part D — The five-year series

For each year, operating ROA = net margin × asset turnover, and ROE = operating ROA × equity multiplier.

**2020:** $0.0840 \\times 1.19 = 0.09996$; $\\;0.09996 \\times 1.80 = 0.179928 = 17.99\\%$

**2021:** $0.0760 \\times 1.13 = 0.08588$; $\\;0.08588 \\times 2.10 = 0.180348 = 18.03\\%$

**2022:** $0.0660 \\times 1.09 = 0.07194$; $\\;0.07194 \\times 2.50 = 0.179850 = 17.98\\%$

**2023:** $0.0580 \\times 1.07 = 0.06206$; $\\;0.06206 \\times 2.90 = 0.179974 = 18.00\\%$

**2024:** $0.0510 \\times 1.04 = 0.05304$; $\\;0.05304 \\times 3.40 = 0.180336 = 18.03\\%$

**Apply the manufactured-ROE test:**

1. **ROE stable?** $|0.180336 - 0.179928| = 0.000408$, which is well under the 0.01 threshold. **Yes.**
2. **Operating ROA falling by more than 10%?** $0.05304$ versus $0.90 \\times 0.09996 = 0.089964$. Since $0.05304 < 0.089964$: **Yes** — and by far more than 10%. The actual decline is $\\frac{0.05304 - 0.09996}{0.09996} = -46.94\\%$.
3. **Equity multiplier rising by more than 20%?** $3.40$ versus $1.20 \\times 1.80 = 2.16$. Since $3.40 > 2.16$: **Yes.** The actual rise is $\\frac{3.40 - 1.80}{1.80} = +88.89\\%$.

All three conditions hold. **Verdict: MANUFACTURED ROE — operations deteriorating, leverage compensating.**

**Interpretation.** The operating engine lost 47% of its return in five years. The balance sheet was levered up 89% to hide it. The headline moved 0.04 percentage points.

**And the arithmetic of the endgame.** To hold 18% ROE in 2025 with operating ROA continuing to decay at its recent pace — say to 4.8% — the equity multiplier would have to reach $\\frac{0.18}{0.048} = 3.75$. That is liabilities of 2.75× equity. **At some point a lender says no, and the ROE that took five years to defend disappears in one.**

**The discipline:** never screen on ROE. Screen on net margin × asset turnover, and read the equity multiplier as a separate risk number, not as a contributor to quality.`,
      bn: `### অংশ ক — তিনটি কোম্পানির সম্পূর্ণ তিন-ধাপ বিশ্লেষণ

**কোম্পানি ১ — ওষুধ।** রাজস্ব ১,২০০; নিট মুনাফা ২১৬; মোট সম্পদ ২,০০০; ইক্যুইটি ১,২০০ (কোটি টাকা)।

**ধাপ ১ — নিট মার্জিন:**
$$\\frac{216}{1{,}200} = 0.1800 = 18.00\\%$$

**ধাপ ২ — সম্পদ আবর্তন:**
$$\\frac{1{,}200}{2{,}000} = 0.6000$$

**ধাপ ৩ — ইক্যুইটি গুণক:**
$$\\frac{2{,}000}{1{,}200} = 1.6667$$

**ধাপ ৪ — গুণ করুন:**
$$0.1800 \\times 0.6000 = 0.1080$$
$$0.1080 \\times 1.6667 = 0.1800 = 18.00\\%$$

**ধাপ ৫ — ঘোষিত ROE-র সঙ্গে যাচাই:**
$$\\frac{216}{1{,}200} = 0.1800 = 18.00\\% \\;\\checkmark$$

---

**কোম্পানি ২ — বস্ত্র।** রাজস্ব ২,৪০০; নিট মুনাফা ১৪৪; মোট সম্পদ ১,৬০০; ইক্যুইটি ৮০০।

$$\\text{নিট মার্জিন} = \\frac{144}{2{,}400} = 0.0600 = 6.00\\%$$
$$\\text{সম্পদ আবর্তন} = \\frac{2{,}400}{1{,}600} = 1.5000$$
$$\\text{ইক্যুইটি গুণক} = \\frac{1{,}600}{800} = 2.0000$$
$$0.0600 \\times 1.5000 = 0.0900$$
$$0.0900 \\times 2.0000 = 0.1800 = 18.00\\%$$
$$\\text{ঘোষিত} = \\frac{144}{800} = 0.1800 \\;\\checkmark$$

---

**কোম্পানি ৩ — NBFI।** রাজস্ব ৫০০; নিট মুনাফা ৯০; মোট সম্পদ ৫,০০০; ইক্যুইটি ৫০০।

$$\\text{নিট মার্জিন} = \\frac{90}{500} = 0.1800 = 18.00\\%$$
$$\\text{সম্পদ আবর্তন} = \\frac{500}{5{,}000} = 0.1000$$
$$\\text{ইক্যুইটি গুণক} = \\frac{5{,}000}{500} = 10.0000$$
$$0.1800 \\times 0.1000 = 0.0180$$
$$0.0180 \\times 10.0000 = 0.1800 = 18.00\\%$$
$$\\text{ঘোষিত} = \\frac{90}{500} = 0.1800 \\;\\checkmark$$

**মধ্যবর্তী গুণফলগুলো তুলনা করুন** — ইক্যুইটি গুণক প্রয়োগের আগের পরিচালন ROA:

| | ওষুধ | বস্ত্র | NBFI |
|---|---|---|---|
| NM × ATO | ০.১০৮০ | ০.০৯০০ | **০.০১৮০** |
| × ইক্যুইটি গুণক | ১.৬৬৬৭ | ২.০০০০ | **১০.০০০০** |
| = ROE | ০.১৮০০ | ০.১৮০০ | ০.১৮০০ |

NBFI-র পরিচালন ইঞ্জিন **প্রতি ১০০ টাকা সম্পদে ১.৮০ টাকা** উৎপাদন করে। বাকি সবটাই ধার করা টাকা। এটি NBFI সম্পর্কে কোনো রায় নয় — ব্যবসার মডেলটাই এই। ভুলটি হলো একে ওষুধ কোম্পানির সঙ্গে ROE দিয়ে তুলনা করা।

---

### অংশ খ — ওষুধ কোম্পানির সম্পূর্ণ পাঁচ-ধাপ বিশ্লেষণ

রাজস্ব ১,২০০; EBIT ২৮৮; সুদ ১৮; নিট মুনাফা ২১৬; সম্পদ ২,০০০; ইক্যুইটি ১,২০০।

**ধাপ ১ — EBT:**
$$EBT = 288 - 18 = 270$$

**ধাপ ২ — কর ভার:**
$$\\frac{NI}{EBT} = \\frac{216}{270} = 0.8000$$

নিহিত কার্যকর করহার: $1 - 0.8000 = 20.00\\%$।

**ধাপ ৩ — সুদ ভার:**
$$\\frac{EBT}{EBIT} = \\frac{270}{288} = 0.9375$$

অর্থায়ন ব্যয় পরিচালন মুনাফার ৬.২৫% খায়।

**ধাপ ৪ — পরিচালন মার্জিন:**
$$\\frac{EBIT}{S} = \\frac{288}{1{,}200} = 0.2400 = 24.00\\%$$

**ধাপ ৫ — সম্পদ আবর্তন:** $\\frac{1{,}200}{2{,}000} = 0.6000$

**ধাপ ৬ — ইক্যুইটি গুণক:** $\\frac{2{,}000}{1{,}200} = 1.6667$

**ধাপ ৭ — একটি একটি করে গুণ করুন:**
$$0.8000 \\times 0.9375 = 0.7500$$
$$0.7500 \\times 0.2400 = 0.1800$$
$$0.1800 \\times 0.6000 = 0.1080$$
$$0.1080 \\times 1.6667 = 0.1800 = 18.00\\%\\;\\checkmark$$

**ধাপ ৮ — তিন-ধাপের সঙ্গে ক্রস-চেক।** লক্ষ করুন ধাপ ৭-এর দ্বিতীয় লাইনের পর চলমান গুণফল ০.১৮০০, যা অংশ ক-তে গণিত নিট মার্জিনের হুবহু সমান। পাঁচ-ধাপের অভেদ তিন-ধাপের অভেদের প্রথম পদটি পুনরুৎপাদন করেছে। এটিই সমন্বয়, এবং প্রতিটি কোম্পানির জন্য এটি মিলতে বাধ্য।

---

### অংশ গ — বস্ত্র ও NBFI-র সম্পূর্ণ পাঁচ-ধাপ বিশ্লেষণ

**বস্ত্র।** EBIT ২৪০; সুদ ৬০; NI ১৪৪; রাজস্ব ২,৪০০।
$$EBT = 240 - 60 = 180$$
$$\\text{কর ভার} = \\frac{144}{180} = 0.8000$$
$$\\text{সুদ ভার} = \\frac{180}{240} = 0.7500$$
$$\\text{পরিচালন মার্জিন} = \\frac{240}{2{,}400} = 0.1000$$
$$0.8000 \\times 0.7500 = 0.6000$$
$$0.6000 \\times 0.1000 = 0.0600 \\;\\text{(= নিট মার্জিন)}$$
$$0.0600 \\times 1.5000 = 0.0900$$
$$0.0900 \\times 2.0000 = 0.1800 = 18.00\\%\\;\\checkmark$$

**NBFI।** EBIT ১৫০; সুদ ৩০; NI ৯০; রাজস্ব ৫০০।
$$EBT = 150 - 30 = 120$$
$$\\text{কর ভার} = \\frac{90}{120} = 0.7500$$
$$\\text{সুদ ভার} = \\frac{120}{150} = 0.8000$$
$$\\text{পরিচালন মার্জিন} = \\frac{150}{500} = 0.3000$$
$$0.7500 \\times 0.8000 = 0.6000$$
$$0.6000 \\times 0.3000 = 0.1800 \\;\\text{(= নিট মার্জিন)}$$
$$0.1800 \\times 0.1000 = 0.0180$$
$$0.0180 \\times 10.0000 = 0.1800 = 18.00\\%\\;\\checkmark$$

---

### অংশ ঘ — পাঁচ বছরের ধারা

প্রতি বছরের জন্য, পরিচালন ROA = নিট মার্জিন × সম্পদ আবর্তন, এবং ROE = পরিচালন ROA × ইক্যুইটি গুণক।

**২০২০:** $0.0840 \\times 1.19 = 0.09996$; $\\;0.09996 \\times 1.80 = 0.179928 = 17.99\\%$

**২০২১:** $0.0760 \\times 1.13 = 0.08588$; $\\;0.08588 \\times 2.10 = 0.180348 = 18.03\\%$

**২০২২:** $0.0660 \\times 1.09 = 0.07194$; $\\;0.07194 \\times 2.50 = 0.179850 = 17.98\\%$

**২০২৩:** $0.0580 \\times 1.07 = 0.06206$; $\\;0.06206 \\times 2.90 = 0.179974 = 18.00\\%$

**২০২৪:** $0.0510 \\times 1.04 = 0.05304$; $\\;0.05304 \\times 3.40 = 0.180336 = 18.03\\%$

**কৃত্রিম-ROE পরীক্ষা প্রয়োগ করুন:**

১. **ROE স্থিতিশীল?** $|0.180336 - 0.179928| = 0.000408$, যা ০.০১ সীমার অনেক নিচে। **হ্যাঁ।**
২. **পরিচালন ROA ১০%-এর বেশি কমেছে?** $0.05304$ বনাম $0.90 \\times 0.09996 = 0.089964$। যেহেতু $0.05304 < 0.089964$: **হ্যাঁ** — এবং ১০%-এর অনেক বেশি। প্রকৃত পতন $\\frac{0.05304 - 0.09996}{0.09996} = -46.94\\%$।
৩. **ইক্যুইটি গুণক ২০%-এর বেশি বেড়েছে?** $3.40$ বনাম $1.20 \\times 1.80 = 2.16$। যেহেতু $3.40 > 2.16$: **হ্যাঁ।** প্রকৃত বৃদ্ধি $\\frac{3.40 - 1.80}{1.80} = +88.89\\%$।

তিনটি শর্তই মেলে। **রায়: কৃত্রিম ROE — পরিচালনা ক্ষয়িষ্ণু, ঋণভার ক্ষতিপূরণ দিচ্ছে।**

**ব্যাখ্যা।** পরিচালন ইঞ্জিন পাঁচ বছরে তার রিটার্নের ৪৭% হারিয়েছে। তা আড়াল করতে স্থিতিপত্রকে ৮৯% ঋণভারে তোলা হয়েছে। শিরোনাম সংখ্যাটি নড়েছে ০.০৪ শতাংশ বিন্দু।

**আর শেষ খেলার পাটিগণিত।** পরিচালন ROA সাম্প্রতিক গতিতে ক্ষয়ে — ধরুন ৪.৮%-এ — নেমে গেলে ২০২৫ সালে ১৮% ROE ধরে রাখতে ইক্যুইটি গুণককে পৌঁছাতে হবে $\\frac{0.18}{0.048} = 3.75$-এ। তার মানে দায় ইক্যুইটির ২.৭৫ গুণ। **কোনো এক পর্যায়ে একজন ঋণদাতা না বলেন, আর যে ROE রক্ষা করতে পাঁচ বছর লেগেছিল তা এক বছরে উবে যায়।**

**শৃঙ্খলা:** কখনো ROE দিয়ে ছাঁকবেন না। ছাঁকুন নিট মার্জিন × সম্পদ আবর্তন দিয়ে, এবং ইক্যুইটি গুণককে গুণমানের অবদানকারী নয়, একটি পৃথক ঝুঁকি-সংখ্যা হিসেবে পড়ুন।`,
    },

    excel: {
      en: `\`\`\`
THREE COMPANIES, ONE ROE (BDT crore)

              A                        B         C          D
 3   INPUT                          Pharma    Textile     NBFI
 4   Revenue                          1200       2400      500
 5   EBIT                              288        240      150
 6   Interest Expense                   18         60       30
 7   Net Income                        216        144       90
 8   Total Assets                     2000       1600     5000
 9   Shareholders Equity              1200        800      500

11   — 3-STEP —
12   Net Margin                    =B7/B4     =C7/C4   =D7/D4
13   Asset Turnover                =B4/B8     =C4/C8   =D4/D8
14   Equity Multiplier             =B8/B9     =C8/C9   =D8/D9
15   ROE (3-step product)   =B12*B13*B14  ...      ...
16   ROE (reported)                =B7/B9     =C7/C9   =D7/D9
17   Identity check   =IF(ABS(B15-B16)<0.0001,"OK","ERROR")

19   — 5-STEP —
20   EBT                           =B5-B6     =C5-C6   =D5-D6
21   Tax Burden                   =B7/B20    =C7/C20  =D7/D20
22   Interest Burden              =B20/B5    =C20/C5  =D20/D5
23   Operating Margin              =B5/B4     =C5/C4   =D5/D4
24   ROE (5-step)      =B21*B22*B23*B13*B14

26   DRIVER  =IF(B14>=3,"LEVERAGE",IF(B13>=1.2,"TURNOVER",
                 IF(B12>=0.12,"MARGIN","MIXED")))

FIVE-YEAR TREND — ONE COMPANY
       A       B          C        D         E              F
30   Year   NetMargin  AssetTO  EqMult  OperatingROA      ROE
31   2020     0.084      1.19     1.8     =B31*C31     =E31*D31
32   2021     0.076      1.13     2.1     =B32*C32     =E32*D32
33   2022     0.066      1.09     2.5     =B33*C33     =E33*D33
34   2023     0.058      1.07     2.9     =B34*C34     =E34*D34
35   2024     0.051      1.04     3.4     =B35*C35     =E35*D35

37   Operating ROA change (pp)     =(E35-E31)*100
38   Equity Multiplier change      =D35-D31
39   ROE change (pp)               =(F35-F31)*100
40   TREND VERDICT
     =IF(AND(ABS(F35-F31)<=0.01,E35<E31*0.9,D35>D31*1.2),
        "MANUFACTURED ROE",
        IF(AND(E35<E31*0.9,D35>D31*1.2),"DETERIORATING","CLEAN"))
\`\`\`

**Row 17 is not decoration.** If the identity check ever prints ERROR, you have transcribed a figure wrong — most commonly by mixing consolidated assets with standalone equity, or by using year-end equity where the company did a rights issue mid-year. The identity is exact. It fails only when you fail.

**Column E is the column to chart.** Plot E31:E35 and F31:F35 on the same axis. If the ROE line is flat while the operating ROA line falls away beneath it, the gap between them is entirely leverage, and you have found the pattern this chapter exists to teach.

**To build a real screen:** replicate rows 3–26 across as many columns as you have companies, sort on row 12 × row 13 (operating ROA) descending, and use row 14 as a *rejection* filter, not a ranking input. A company that ranks top on operating ROA and carries an equity multiplier of 1.6 is a different proposition from one that ranks fifteenth and carries 3.4.`,
      bn: `\`\`\`
তিনটি কোম্পানি, একটি ROE (কোটি টাকা)

              A                        B         C          D
 3   ইনপুট                           ওষুধ      বস্ত্র      NBFI
 4   রাজস্ব                           1200       2400      500
 5   EBIT                              288        240      150
 6   সুদ ব্যয়                           18         60       30
 7   নিট মুনাফা                        216        144       90
 8   মোট সম্পদ                        2000       1600     5000
 9   শেয়ারহোল্ডার ইক্যুইটি            1200        800      500

11   — ৩-ধাপ —
12   নিট মার্জিন                   =B7/B4     =C7/C4   =D7/D4
13   সম্পদ আবর্তন                  =B4/B8     =C4/C8   =D4/D8
14   ইক্যুইটি গুণক                 =B8/B9     =C8/C9   =D8/D9
15   ROE (৩-ধাপ গুণফল)      =B12*B13*B14  ...      ...
16   ROE (ঘোষিত)                   =B7/B9     =C7/C9   =D7/D9
17   অভেদ যাচাই       =IF(ABS(B15-B16)<0.0001,"OK","ERROR")

19   — ৫-ধাপ —
20   EBT                           =B5-B6     =C5-C6   =D5-D6
21   কর ভার                       =B7/B20    =C7/C20  =D7/D20
22   সুদ ভার                      =B20/B5    =C20/C5  =D20/D5
23   পরিচালন মার্জিন               =B5/B4     =C5/C4   =D5/D4
24   ROE (৫-ধাপ)       =B21*B22*B23*B13*B14

26   চালক    =IF(B14>=3,"LEVERAGE",IF(B13>=1.2,"TURNOVER",
                 IF(B12>=0.12,"MARGIN","MIXED")))

পাঁচ বছরের প্রবণতা — একটি কোম্পানি
       A       B          C        D         E              F
30   বছর   নিটমার্জিন  সম্পদTO  ইকগুণক  পরিচালনROA      ROE
31   2020     0.084      1.19     1.8     =B31*C31     =E31*D31
32   2021     0.076      1.13     2.1     =B32*C32     =E32*D32
33   2022     0.066      1.09     2.5     =B33*C33     =E33*D33
34   2023     0.058      1.07     2.9     =B34*C34     =E34*D34
35   2024     0.051      1.04     3.4     =B35*C35     =E35*D35

37   পরিচালন ROA পরিবর্তন (pp)     =(E35-E31)*100
38   ইক্যুইটি গুণক পরিবর্তন         =D35-D31
39   ROE পরিবর্তন (pp)             =(F35-F31)*100
40   প্রবণতার রায়
     =IF(AND(ABS(F35-F31)<=0.01,E35<E31*0.9,D35>D31*1.2),
        "MANUFACTURED ROE",
        IF(AND(E35<E31*0.9,D35>D31*1.2),"DETERIORATING","CLEAN"))
\`\`\`

**সারি ১৭ অলংকার নয়।** অভেদ যাচাই যদি কখনো ERROR দেখায়, আপনি কোনো সংখ্যা ভুল তুলেছেন — সবচেয়ে সাধারণভাবে সমন্বিত সম্পদের সঙ্গে একক ইক্যুইটি মিশিয়ে, বা বছরের মাঝে রাইট ইস্যু করা কোম্পানিতে বছরশেষের ইক্যুইটি ব্যবহার করে। অভেদটি নিখুঁত। এটি কেবল তখনই ব্যর্থ হয় যখন আপনি ব্যর্থ হন।

**কলাম E-ই চার্ট করার কলাম।** E31:E35 ও F31:F35 একই অক্ষে প্লট করুন। ROE রেখা সমান্তরাল থাকে অথচ পরিচালন ROA রেখা তার নিচে সরে যায় — তবে দুইয়ের মাঝের ফাঁকটি সম্পূর্ণ ঋণভার, এবং আপনি সেই প্যাটার্নটি পেয়েছেন যা শেখাতে এই অধ্যায়ের অস্তিত্ব।

**প্রকৃত স্ক্রিন বানাতে:** যত কোম্পানি আছে তত কলামে সারি ৩–২৬ প্রতিলিপি করুন, সারি ১২ × সারি ১৩ (পরিচালন ROA) অনুযায়ী অবরোহী ক্রমে সাজান, এবং সারি ১৪-কে র‌্যাঙ্কিং ইনপুট নয়, একটি *প্রত্যাখ্যান* ছাঁকনি হিসেবে ব্যবহার করুন। পরিচালন ROA-তে শীর্ষে থাকা ও ১.৬ ইক্যুইটি গুণক বহনকারী কোম্পানি এবং পঞ্চদশ স্থানে থাকা ও ৩.৪ বহনকারী কোম্পানি — দুটি সম্পূর্ণ ভিন্ন প্রস্তাব।`,
    },

    python: {
      en: `\`\`\`python
"""
Chapter 19 - DuPont decomposition, 3-step and 5-step.
Educational. Pure standard library.
"""
from dataclasses import dataclass
from typing import List, Tuple


@dataclass
class DuPont:
    """One company-year, decomposed. All money figures in BDT crore."""
    name: str
    revenue: float
    ebit: float
    interest: float
    net_income: float
    total_assets: float
    equity: float

    # --- 3-step components ---
    @property
    def net_margin(self) -> float:
        return self.net_income / self.revenue

    @property
    def asset_turnover(self) -> float:
        return self.revenue / self.total_assets

    @property
    def equity_multiplier(self) -> float:
        return self.total_assets / self.equity

    # --- 5-step components ---
    @property
    def ebt(self) -> float:
        return self.ebit - self.interest

    @property
    def tax_burden(self) -> float:
        return self.net_income / self.ebt

    @property
    def interest_burden(self) -> float:
        return self.ebt / self.ebit

    @property
    def operating_margin(self) -> float:
        return self.ebit / self.revenue

    # --- results ---
    @property
    def roe_reported(self) -> float:
        return self.net_income / self.equity

    @property
    def roe_3step(self) -> float:
        return self.net_margin * self.asset_turnover * self.equity_multiplier

    @property
    def roe_5step(self) -> float:
        return (self.tax_burden * self.interest_burden * self.operating_margin
                * self.asset_turnover * self.equity_multiplier)

    @property
    def operating_roa(self) -> float:
        """Net margin x asset turnover. The part of ROE leverage cannot fake."""
        return self.net_margin * self.asset_turnover

    @property
    def driver(self) -> str:
        """Which single term is carrying the ROE."""
        if self.equity_multiplier >= 3.0:
            return "LEVERAGE-DRIVEN"
        if self.asset_turnover >= 1.2:
            return "TURNOVER-DRIVEN"
        if self.net_margin >= 0.12:
            return "MARGIN-DRIVEN"
        return "MIXED"


def diagnose_series(rows: List[Tuple[int, float, float, float]]) -> str:
    """
    rows: (year, net_margin, asset_turnover, equity_multiplier).
    Flags ROE that is flat only because leverage is rising.
    """
    first, last = rows[0], rows[-1]
    roa_first = first[1] * first[2]
    roa_last = last[1] * last[2]
    em_first, em_last = first[3], last[3]
    roe_first = roa_first * em_first
    roe_last = roa_last * em_last

    roe_stable = abs(roe_last - roe_first) <= 0.01
    roa_falling = roa_last < roa_first * 0.90
    em_rising = em_last > em_first * 1.20

    if roe_stable and roa_falling and em_rising:
        return "MANUFACTURED ROE - operations deteriorating, leverage compensating"
    if roa_falling and em_rising:
        return "DETERIORATING - leverage is masking part of the decline"
    if not roa_falling and em_rising:
        return "LEVERAGED GROWTH - operations intact, balance-sheet risk rising"
    return "CLEAN"


if __name__ == "__main__":
    companies = [
        DuPont("Pharma  (APEX-style)", revenue=1200, ebit=288, interest=18,
               net_income=216, total_assets=2000, equity=1200),
        DuPont("Textile (SPIN-style)", revenue=2400, ebit=240, interest=60,
               net_income=144, total_assets=1600, equity=800),
        DuPont("NBFI    (LEASE-style)", revenue=500, ebit=150, interest=30,
               net_income=90, total_assets=5000, equity=500),
    ]

    print("=== THREE-STEP DuPont: three DSE archetypes, all at 18% ROE ===")
    print(f"{'COMPANY':<22}{'ROE':>8}{'NetMgn':>9}{'AssetTO':>9}{'EqMult':>9}  DRIVER")
    for c in companies:
        print(f"{c.name:<22}{c.roe_3step:>7.2%}{c.net_margin:>9.2%}"
              f"{c.asset_turnover:>9.2f}{c.equity_multiplier:>9.2f}  {c.driver}")

    print()
    print("=== FIVE-STEP DuPont ===")
    print(f"{'COMPANY':<22}{'TaxB':>7}{'IntB':>7}{'OpMgn':>9}{'AssetTO':>9}{'EqMult':>9}{'ROE':>9}")
    for c in companies:
        print(f"{c.name:<22}{c.tax_burden:>7.4f}{c.interest_burden:>7.4f}"
              f"{c.operating_margin:>9.2%}{c.asset_turnover:>9.2f}"
              f"{c.equity_multiplier:>9.4f}{c.roe_5step:>9.2%}")

    print()
    print("=== IDENTITY CHECK (reported ROE vs both decompositions) ===")
    for c in companies:
        ok3 = abs(c.roe_reported - c.roe_3step) < 1e-9
        ok5 = abs(c.roe_reported - c.roe_5step) < 1e-9
        print(f"{c.name:<22} reported {c.roe_reported:.4%} | 3-step {ok3} | 5-step {ok5}")

    print()
    print("=== FIVE-YEAR SERIES: ROE flat, leverage climbing ===")
    series = [
        (2020, 0.0840, 1.19, 1.80),
        (2021, 0.0760, 1.13, 2.10),
        (2022, 0.0660, 1.09, 2.50),
        (2023, 0.0580, 1.07, 2.90),
        (2024, 0.0510, 1.04, 3.40),
    ]
    print(f"{'Year':<7}{'NetMgn':>9}{'AssetTO':>9}{'EqMult':>9}{'OpROA':>9}{'ROE':>9}")
    for yr, nm, ato, em in series:
        print(f"{yr:<7}{nm:>9.2%}{ato:>9.2f}{em:>9.2f}{nm*ato:>9.2%}{nm*ato*em:>9.2%}")

    print()
    print(f"Verdict: {diagnose_series(series)}")
\`\`\`

**Expected output:**

\`\`\`
=== THREE-STEP DuPont: three DSE archetypes, all at 18% ROE ===
COMPANY                    ROE   NetMgn  AssetTO   EqMult  DRIVER
Pharma  (APEX-style)   18.00%   18.00%     0.60     1.67  MARGIN-DRIVEN
Textile (SPIN-style)   18.00%    6.00%     1.50     2.00  TURNOVER-DRIVEN
NBFI    (LEASE-style)  18.00%   18.00%     0.10    10.00  LEVERAGE-DRIVEN

=== FIVE-STEP DuPont ===
COMPANY                  TaxB   IntB    OpMgn  AssetTO   EqMult      ROE
Pharma  (APEX-style)   0.8000 0.9375   24.00%     0.60   1.6667   18.00%
Textile (SPIN-style)   0.8000 0.7500   10.00%     1.50   2.0000   18.00%
NBFI    (LEASE-style)  0.7500 0.8000   30.00%     0.10  10.0000   18.00%

=== IDENTITY CHECK (reported ROE vs both decompositions) ===
Pharma  (APEX-style)   reported 18.0000% | 3-step True | 5-step True
Textile (SPIN-style)   reported 18.0000% | 3-step True | 5-step True
NBFI    (LEASE-style)  reported 18.0000% | 3-step True | 5-step True

=== FIVE-YEAR SERIES: ROE flat, leverage climbing ===
Year      NetMgn  AssetTO   EqMult    OpROA      ROE
2020       8.40%     1.19     1.80   10.00%   17.99%
2021       7.60%     1.13     2.10    8.59%   18.03%
2022       6.60%     1.09     2.50    7.19%   17.98%
2023       5.80%     1.07     2.90    6.21%   18.00%
2024       5.10%     1.04     3.40    5.30%   18.03%

Verdict: MANUFACTURED ROE - operations deteriorating, leverage compensating
\`\`\`

**Read the OpROA column, not the ROE column.** It falls 10.00% → 5.30% while ROE moves four basis points. Every taka of that gap is borrowed.

**The \`driver\` property is a rejection filter, not a ranking.** It does not say the NBFI is a bad company — an NBFI *is* a levered spread business, and 10× is normal for the model. It says the NBFI must never be compared to the pharma on ROE. Different question, different peer group, different downside.

**To extend this to a real screen:** feed it the last five annual reports of every company in one DSE sector, run \`diagnose_series\` on each, and read only the ones returning MANUFACTURED ROE or DETERIORATING. Those are the names where the headline is doing work the business is not.`,
      bn: `\`\`\`python
"""
অধ্যায় ১৯ — ডুপন্ট বিশ্লেষণ, ৩-ধাপ ও ৫-ধাপ।
শিক্ষামূলক। কেবল স্ট্যান্ডার্ড লাইব্রেরি।
"""
from dataclasses import dataclass
from typing import List, Tuple


@dataclass
class DuPont:
    """একটি কোম্পানি-বছর, বিশ্লিষ্ট। সব আর্থিক সংখ্যা কোটি টাকায়।"""
    name: str
    revenue: float
    ebit: float
    interest: float
    net_income: float
    total_assets: float
    equity: float

    # --- ৩-ধাপের উপাদান ---
    @property
    def net_margin(self) -> float:
        return self.net_income / self.revenue

    @property
    def asset_turnover(self) -> float:
        return self.revenue / self.total_assets

    @property
    def equity_multiplier(self) -> float:
        return self.total_assets / self.equity

    # --- ৫-ধাপের উপাদান ---
    @property
    def ebt(self) -> float:
        return self.ebit - self.interest

    @property
    def tax_burden(self) -> float:
        return self.net_income / self.ebt

    @property
    def interest_burden(self) -> float:
        return self.ebt / self.ebit

    @property
    def operating_margin(self) -> float:
        return self.ebit / self.revenue

    # --- ফলাফল ---
    @property
    def roe_reported(self) -> float:
        return self.net_income / self.equity

    @property
    def roe_3step(self) -> float:
        return self.net_margin * self.asset_turnover * self.equity_multiplier

    @property
    def roe_5step(self) -> float:
        return (self.tax_burden * self.interest_burden * self.operating_margin
                * self.asset_turnover * self.equity_multiplier)

    @property
    def operating_roa(self) -> float:
        """নিট মার্জিন × সম্পদ আবর্তন। ROE-র যে অংশ ঋণভার নকল করতে পারে না।"""
        return self.net_margin * self.asset_turnover

    @property
    def driver(self) -> str:
        """কোন একক পদটি ROE বহন করছে।"""
        if self.equity_multiplier >= 3.0:
            return "LEVERAGE-DRIVEN"
        if self.asset_turnover >= 1.2:
            return "TURNOVER-DRIVEN"
        if self.net_margin >= 0.12:
            return "MARGIN-DRIVEN"
        return "MIXED"


def diagnose_series(rows: List[Tuple[int, float, float, float]]) -> str:
    """
    rows: (বছর, নিট মার্জিন, সম্পদ আবর্তন, ইক্যুইটি গুণক)।
    কেবল ঋণভার বাড়ার কারণে সমান্তরাল থাকা ROE চিহ্নিত করে।
    """
    first, last = rows[0], rows[-1]
    roa_first = first[1] * first[2]
    roa_last = last[1] * last[2]
    em_first, em_last = first[3], last[3]
    roe_first = roa_first * em_first
    roe_last = roa_last * em_last

    roe_stable = abs(roe_last - roe_first) <= 0.01
    roa_falling = roa_last < roa_first * 0.90
    em_rising = em_last > em_first * 1.20

    if roe_stable and roa_falling and em_rising:
        return "MANUFACTURED ROE - operations deteriorating, leverage compensating"
    if roa_falling and em_rising:
        return "DETERIORATING - leverage is masking part of the decline"
    if not roa_falling and em_rising:
        return "LEVERAGED GROWTH - operations intact, balance-sheet risk rising"
    return "CLEAN"


if __name__ == "__main__":
    companies = [
        DuPont("Pharma  (APEX-style)", revenue=1200, ebit=288, interest=18,
               net_income=216, total_assets=2000, equity=1200),
        DuPont("Textile (SPIN-style)", revenue=2400, ebit=240, interest=60,
               net_income=144, total_assets=1600, equity=800),
        DuPont("NBFI    (LEASE-style)", revenue=500, ebit=150, interest=30,
               net_income=90, total_assets=5000, equity=500),
    ]

    print("=== THREE-STEP DuPont: three DSE archetypes, all at 18% ROE ===")
    print(f"{'COMPANY':<22}{'ROE':>8}{'NetMgn':>9}{'AssetTO':>9}{'EqMult':>9}  DRIVER")
    for c in companies:
        print(f"{c.name:<22}{c.roe_3step:>7.2%}{c.net_margin:>9.2%}"
              f"{c.asset_turnover:>9.2f}{c.equity_multiplier:>9.2f}  {c.driver}")

    print()
    print("=== FIVE-STEP DuPont ===")
    print(f"{'COMPANY':<22}{'TaxB':>7}{'IntB':>7}{'OpMgn':>9}{'AssetTO':>9}{'EqMult':>9}{'ROE':>9}")
    for c in companies:
        print(f"{c.name:<22}{c.tax_burden:>7.4f}{c.interest_burden:>7.4f}"
              f"{c.operating_margin:>9.2%}{c.asset_turnover:>9.2f}"
              f"{c.equity_multiplier:>9.4f}{c.roe_5step:>9.2%}")

    print()
    print("=== IDENTITY CHECK (reported ROE vs both decompositions) ===")
    for c in companies:
        ok3 = abs(c.roe_reported - c.roe_3step) < 1e-9
        ok5 = abs(c.roe_reported - c.roe_5step) < 1e-9
        print(f"{c.name:<22} reported {c.roe_reported:.4%} | 3-step {ok3} | 5-step {ok5}")

    print()
    print("=== FIVE-YEAR SERIES: ROE flat, leverage climbing ===")
    series = [
        (2020, 0.0840, 1.19, 1.80),
        (2021, 0.0760, 1.13, 2.10),
        (2022, 0.0660, 1.09, 2.50),
        (2023, 0.0580, 1.07, 2.90),
        (2024, 0.0510, 1.04, 3.40),
    ]
    print(f"{'Year':<7}{'NetMgn':>9}{'AssetTO':>9}{'EqMult':>9}{'OpROA':>9}{'ROE':>9}")
    for yr, nm, ato, em in series:
        print(f"{yr:<7}{nm:>9.2%}{ato:>9.2f}{em:>9.2f}{nm*ato:>9.2%}{nm*ato*em:>9.2%}")

    print()
    print(f"Verdict: {diagnose_series(series)}")
\`\`\`

**প্রত্যাশিত ফলাফল:**

\`\`\`
=== THREE-STEP DuPont: three DSE archetypes, all at 18% ROE ===
COMPANY                    ROE   NetMgn  AssetTO   EqMult  DRIVER
Pharma  (APEX-style)   18.00%   18.00%     0.60     1.67  MARGIN-DRIVEN
Textile (SPIN-style)   18.00%    6.00%     1.50     2.00  TURNOVER-DRIVEN
NBFI    (LEASE-style)  18.00%   18.00%     0.10    10.00  LEVERAGE-DRIVEN

=== FIVE-STEP DuPont ===
COMPANY                  TaxB   IntB    OpMgn  AssetTO   EqMult      ROE
Pharma  (APEX-style)   0.8000 0.9375   24.00%     0.60   1.6667   18.00%
Textile (SPIN-style)   0.8000 0.7500   10.00%     1.50   2.0000   18.00%
NBFI    (LEASE-style)  0.7500 0.8000   30.00%     0.10  10.0000   18.00%

=== IDENTITY CHECK (reported ROE vs both decompositions) ===
Pharma  (APEX-style)   reported 18.0000% | 3-step True | 5-step True
Textile (SPIN-style)   reported 18.0000% | 3-step True | 5-step True
NBFI    (LEASE-style)  reported 18.0000% | 3-step True | 5-step True

=== FIVE-YEAR SERIES: ROE flat, leverage climbing ===
Year      NetMgn  AssetTO   EqMult    OpROA      ROE
2020       8.40%     1.19     1.80   10.00%   17.99%
2021       7.60%     1.13     2.10    8.59%   18.03%
2022       6.60%     1.09     2.50    7.19%   17.98%
2023       5.80%     1.07     2.90    6.21%   18.00%
2024       5.10%     1.04     3.40    5.30%   18.03%

Verdict: MANUFACTURED ROE - operations deteriorating, leverage compensating
\`\`\`

**ROE কলাম নয়, OpROA কলামটি পড়ুন।** এটি ১০.০০% → ৫.৩০%-এ নামে যখন ROE নড়ে চার বেসিস পয়েন্ট। ঐ ফাঁকের প্রতিটি টাকা ধার করা।

**\`driver\` প্রপার্টিটি একটি প্রত্যাখ্যান ছাঁকনি, র‌্যাঙ্কিং নয়।** এটি বলে না যে NBFI খারাপ কোম্পানি — একটি NBFI *হলোই* ঋণভারযুক্ত স্প্রেড ব্যবসা, এবং ঐ মডেলে ১০× স্বাভাবিক। এটি বলে যে NBFI-কে কখনোই ওষুধ কোম্পানির সঙ্গে ROE দিয়ে তুলনা করা যাবে না। ভিন্ন প্রশ্ন, ভিন্ন সমকক্ষ গোষ্ঠী, ভিন্ন নিম্নমুখী ঝুঁকি।

**প্রকৃত স্ক্রিনে সম্প্রসারণ করতে:** একটি ডিএসই খাতের প্রতিটি কোম্পানির শেষ পাঁচটি বার্ষিক প্রতিবেদন এতে দিন, প্রত্যেকের ওপর \`diagnose_series\` চালান, এবং কেবল সেগুলোই পড়ুন যেগুলো MANUFACTURED ROE বা DETERIORATING ফেরত দেয়। ঐ নামগুলোতেই শিরোনাম সেই কাজ করছে যা ব্যবসাটি করছে না।`,
    },

    mistakes: {
      en: `1. **Ranking companies on ROE.** This is the error the entire chapter exists to prevent. Three companies at 18% can be a high-margin pharma, a high-turnover textile, and a 10×-levered NBFI. Rank on net margin × asset turnover instead, and treat the equity multiplier as risk.
2. **Reading a rising equity multiplier as strength.** It is arithmetic, not performance. Any company can raise its ROE tomorrow by borrowing to buy back shares. Nothing about the business improves.
3. **Mixing consolidated and standalone figures.** Consolidated total assets against standalone equity produces a fictitious equity multiplier. The identity check in the spreadsheet catches this — if you build the check.
4. **Using year-end equity after a rights issue or large stock dividend.** The equity base was smaller for most of the year in which the income was earned. Use average equity, or the ROE is overstated. Chapter 4 established how a stock dividend changes the share count; the same event changes the DuPont denominator.
5. **Applying the five-step interest burden to a bank or NBFI.** For a lender, interest expense is cost of goods sold, not financing cost. The term is not comparable to a manufacturer's and reads as false strength or false weakness.
6. **Comparing a restated year to an unrestated one.** Where FRC or the auditor forces a restatement — most often on provisioning or revenue recognition — every prior year in your DuPont series must be restated too, or you have manufactured a trend that did not happen.
7. **Ignoring revaluation surplus in equity.** IAS 16 revaluation as adopted in Bangladesh raises equity without raising earning capacity. It *lowers* both ROE and the equity multiplier, which can make a genuinely leveraged company screen as conservative. Strip revaluation reserve out and recompute before you conclude.
8. **Treating a single year's DuPont as a diagnosis.** One year is a photograph. The manufactured-ROE pattern is only visible across at least four. Chapter 8 established the same discipline for relative strength: one reading is noise.`,
      bn: `১. **ROE দিয়ে কোম্পানি র‌্যাঙ্ক করা।** এই ভুল ঠেকাতেই পুরো অধ্যায়টির অস্তিত্ব। ১৮%-এর তিনটি কোম্পানি হতে পারে উচ্চ-মার্জিন ওষুধ, উচ্চ-আবর্তন বস্ত্র, এবং ১০×-ঋণভারযুক্ত NBFI। বরং নিট মার্জিন × সম্পদ আবর্তন দিয়ে র‌্যাঙ্ক করুন, এবং ইক্যুইটি গুণককে ঝুঁকি হিসেবে ধরুন।
২. **বর্ধমান ইক্যুইটি গুণককে শক্তি হিসেবে পড়া।** এটি পাটিগণিত, কর্মক্ষমতা নয়। যেকোনো কোম্পানি কাল ঋণ নিয়ে শেয়ার বাইব্যাক করে ROE বাড়াতে পারে। ব্যবসার কিছুই উন্নত হয় না।
৩. **সমন্বিত ও একক সংখ্যা মেশানো।** একক ইক্যুইটির বিপরীতে সমন্বিত মোট সম্পদ একটি কাল্পনিক ইক্যুইটি গুণক তৈরি করে। স্প্রেডশিটের অভেদ যাচাই এটি ধরে ফেলে — যদি আপনি যাচাইটি বানান।
৪. **রাইট ইস্যু বা বড় স্টক ডিভিডেন্ডের পর বছরশেষের ইক্যুইটি ব্যবহার করা।** যে বছরে আয়টি হয়েছে তার বেশিরভাগ সময় ইক্যুইটিভিত্তি ছোট ছিল। গড় ইক্যুইটি ব্যবহার করুন, নাহলে ROE অতিরঞ্জিত। অধ্যায় ৪ প্রতিষ্ঠা করেছে স্টক ডিভিডেন্ড শেয়ার সংখ্যা কীভাবে বদলায়; ঐ একই ঘটনা ডুপন্টের হরকেও বদলায়।
৫. **ব্যাংক বা NBFI-তে পাঁচ-ধাপের সুদ ভার প্রয়োগ করা।** ঋণদাতার ক্ষেত্রে সুদ ব্যয় অর্থায়ন ব্যয় নয়, বিক্রীত পণ্যের ব্যয়। পদটি উৎপাদকের সঙ্গে তুলনীয় নয় এবং মিথ্যা শক্তি বা মিথ্যা দুর্বলতা দেখায়।
৬. **পুনর্বিবৃত বছরকে অপুনর্বিবৃত বছরের সঙ্গে তুলনা করা।** FRC বা নিরীক্ষক যেখানে পুনর্বিবৃতি বাধ্য করেন — সাধারণত সঞ্চিতি বা রাজস্ব স্বীকৃতিতে — সেখানে আপনার ডুপন্ট ধারার প্রতিটি পূর্ববর্তী বছরও পুনর্বিবৃত করতে হবে, নাহলে আপনি এমন একটি প্রবণতা বানিয়েছেন যা ঘটেনি।
৭. **ইক্যুইটিতে পুনর্মূল্যায়ন উদ্বৃত্ত উপেক্ষা করা।** বাংলাদেশে গৃহীত IAS 16 পুনর্মূল্যায়ন আয়ক্ষমতা না বাড়িয়ে ইক্যুইটি বাড়ায়। এটি ROE ও ইক্যুইটি গুণক উভয়কেই *নামায়*, যা প্রকৃতপক্ষে ঋণভারগ্রস্ত কোম্পানিকে রক্ষণশীল দেখাতে পারে। সিদ্ধান্তে আসার আগে পুনর্মূল্যায়ন সঞ্চিতি বাদ দিয়ে পুনরায় গণনা করুন।
৮. **এক বছরের ডুপন্টকে নির্ণয় ভাবা।** এক বছর একটি আলোকচিত্র। কৃত্রিম-ROE প্যাটার্ন কমপক্ষে চার বছর জুড়েই কেবল দৃশ্যমান। অধ্যায় ৮ আপেক্ষিক শক্তির ক্ষেত্রে একই শৃঙ্খলা প্রতিষ্ঠা করেছে: একটি পাঠ হলো গোলমাল।`,
    },

    tips: {
      en: `- **Build the series before you build an opinion.** Five years of net margin, asset turnover, and equity multiplier from five annual report PDFs. It takes forty minutes per company and it is the single highest-value forty minutes in fundamental analysis on this exchange.
- **Chart operating ROA and ROE on one axis.** The gap between the two lines *is* leverage. If the gap widens year after year while ROE is flat, you have your answer without any further work.
- **Set a personal equity-multiplier ceiling by sector and enforce it.** Manufacturers above 2.5 and pharma above 2.0 deserve an explicit justification from the annual report, in writing, before you buy. If you cannot write the justification in two sentences, you do not have one.
- **Reconcile the interest burden against the finance cost note.** A tax burden that jumps from 0.75 to 0.92 in one year is usually a deferred tax reversal, not improved efficiency. Read Note "Income tax expense" before you credit management with anything.
- **Use the identity as an audit tool.** If your three-step product does not equal reported ROE to four decimals, stop. You have the wrong figure somewhere, and finding it will teach you something about the accounts.
- **For banks and NBFIs, decompose differently.** Chapter 23 covers this: ROE = ROA × equity multiplier, with ROA built from net interest margin, fee income, cost-to-income and credit cost. Do not force the manufacturing five-step onto a lender.
- **When a company's ROE is flat and its dividend is rising, check the equity multiplier immediately.** Chapter 20 shows what happens when a payout is defended by borrowing rather than earned.`,
      bn: `- **মতামত তৈরির আগে ধারাটি তৈরি করুন।** পাঁচটি বার্ষিক প্রতিবেদন PDF থেকে পাঁচ বছরের নিট মার্জিন, সম্পদ আবর্তন ও ইক্যুইটি গুণক। কোম্পানিপ্রতি চল্লিশ মিনিট লাগে, এবং এই এক্সচেঞ্জে মৌল বিশ্লেষণে এটিই সর্বোচ্চ মূল্যের চল্লিশ মিনিট।
- **পরিচালন ROA ও ROE একই অক্ষে চার্ট করুন।** দুই রেখার মাঝের ফাঁকটিই ঋণভার। ROE সমান্তরাল থাকা অবস্থায় ফাঁক বছর বছর চওড়া হলে আর কোনো কাজ ছাড়াই আপনি উত্তর পেয়ে গেছেন।
- **খাতভিত্তিক একটি ব্যক্তিগত ইক্যুইটি-গুণক সীমা ঠিক করে তা মানুন।** ২.৫-এর ওপরে উৎপাদক ও ২.০-এর ওপরে ওষুধ কোম্পানির জন্য কেনার আগে বার্ষিক প্রতিবেদন থেকে লিখিতভাবে স্পষ্ট যুক্তি দরকার। দুই বাক্যে যুক্তিটি লিখতে না পারলে আপনার কাছে যুক্তি নেই।
- **সুদ ভারকে অর্থায়ন ব্যয়ের নোটের সঙ্গে মেলান।** এক বছরে কর ভার ০.৭৫ থেকে ০.৯২-তে লাফালে সেটি সাধারণত বিলম্বিত করের বিপরীতকরণ, দক্ষতার উন্নতি নয়। ব্যবস্থাপনাকে কৃতিত্ব দেওয়ার আগে "আয়কর ব্যয়" নোটটি পড়ুন।
- **অভেদটিকে নিরীক্ষা সরঞ্জাম হিসেবে ব্যবহার করুন।** আপনার তিন-ধাপের গুণফল চার দশমিক পর্যন্ত ঘোষিত ROE-র সমান না হলে থামুন। কোথাও একটি ভুল সংখ্যা আছে, এবং সেটি খুঁজে পাওয়া আপনাকে হিসাব সম্পর্কে কিছু শেখাবে।
- **ব্যাংক ও NBFI-র জন্য ভিন্নভাবে বিশ্লিষ্ট করুন।** অধ্যায় ২৩ এটি ধরে: ROE = ROA × ইক্যুইটি গুণক, যেখানে ROA গঠিত হয় নিট সুদ মার্জিন, ফি আয়, ব্যয়-থেকে-আয় ও ঋণ ব্যয় থেকে। ঋণদাতার ওপর উৎপাদকের পাঁচ-ধাপ চাপিয়ে দেবেন না।
- **কোম্পানির ROE সমান্তরাল অথচ লভ্যাংশ বাড়ছে — তখনই ইক্যুইটি গুণক দেখুন।** অধ্যায় ২০ দেখায় লভ্যাংশ অর্জিত না হয়ে ঋণ দিয়ে রক্ষা করা হলে কী ঘটে।`,
    },

    exercises: {
      en: `1. Take any three DSE-listed pharmaceutical companies. Pull revenue, net income, total assets, and shareholders' equity from the latest annual reports. Compute the three-step DuPont for each and verify the product equals reported ROE to four decimal places. If any fails, find the input error before proceeding.
2. Take the same three companies and add EBIT and finance cost. Compute the five-step decomposition. Rank them by operating margin and separately by interest burden. Do the two rankings agree? Explain what a disagreement means.
3. Build a five-year DuPont series for one DSE textile company. Chart operating ROA and ROE on the same axis. State in one sentence whether the ROE trend is operational or financial.
4. Find a DSE-listed company whose ROE rose in the most recent year. Decompose the change: how much came from margin, how much from turnover, how much from the equity multiplier? Which of the three is repeatable next year?
5. Take one NBFI and one engineering company with similar ROE. Compute net margin × asset turnover for both. Write two sentences explaining why the ROE comparison was meaningless and what the correct comparison would be.
6. For any company where equity includes a revaluation surplus, recompute ROE and the equity multiplier with the revaluation reserve stripped out of equity. How much did the equity multiplier move? Was the company more levered than it appeared?
7. Apply the manufactured-ROE test — stable ROE, operating ROA down more than 10%, equity multiplier up more than 20% — to every company in one DSE sector over five years. How many trigger? Check the finance cost note for each one that does.
8. Take a company whose tax burden changed by more than 0.10 between two consecutive years. Read the income tax note. Was it a rate change, a deferred tax movement, or a one-off? What would ROE have been without it?`,
      bn: `১. ডিএসই-তালিকাভুক্ত যেকোনো তিনটি ওষুধ কোম্পানি নিন। সর্বশেষ বার্ষিক প্রতিবেদন থেকে রাজস্ব, নিট মুনাফা, মোট সম্পদ ও শেয়ারহোল্ডারদের ইক্যুইটি বের করুন। প্রত্যেকের তিন-ধাপ ডুপন্ট গণনা করুন এবং যাচাই করুন গুণফল চার দশমিক পর্যন্ত ঘোষিত ROE-র সমান। কোনোটি না মিললে এগোনোর আগে ইনপুট ভুলটি খুঁজুন।
২. একই তিনটি কোম্পানিতে EBIT ও অর্থায়ন ব্যয় যোগ করুন। পাঁচ-ধাপ বিশ্লেষণ করুন। পরিচালন মার্জিন অনুযায়ী এবং পৃথকভাবে সুদ ভার অনুযায়ী র‌্যাঙ্ক করুন। দুটি র‌্যাঙ্কিং কি মেলে? না মিললে তার অর্থ ব্যাখ্যা করুন।
৩. একটি ডিএসই বস্ত্র কোম্পানির পাঁচ বছরের ডুপন্ট ধারা তৈরি করুন। পরিচালন ROA ও ROE একই অক্ষে চার্ট করুন। এক বাক্যে বলুন ROE প্রবণতাটি পরিচালনগত না আর্থিক।
৪. এমন একটি ডিএসই কোম্পানি খুঁজুন যার ROE সাম্প্রতিকতম বছরে বেড়েছে। পরিবর্তনটি বিশ্লিষ্ট করুন: কতটা মার্জিন থেকে, কতটা আবর্তন থেকে, কতটা ইক্যুইটি গুণক থেকে? তিনটির মধ্যে কোনটি পরের বছর পুনরাবৃত্তিযোগ্য?
৫. কাছাকাছি ROE-র একটি NBFI ও একটি প্রকৌশল কোম্পানি নিন। দুটির নিট মার্জিন × সম্পদ আবর্তন গণনা করুন। দুই বাক্যে লিখুন কেন ROE তুলনাটি অর্থহীন ছিল এবং সঠিক তুলনাটি কী হতো।
৬. যেকোনো কোম্পানি যার ইক্যুইটিতে পুনর্মূল্যায়ন উদ্বৃত্ত আছে — ইক্যুইটি থেকে পুনর্মূল্যায়ন সঞ্চিতি বাদ দিয়ে ROE ও ইক্যুইটি গুণক পুনরায় গণনা করুন। ইক্যুইটি গুণক কতটা নড়ল? কোম্পানিটি কি দেখানোর চেয়ে বেশি ঋণভারগ্রস্ত ছিল?
৭. একটি ডিএসই খাতের প্রতিটি কোম্পানির ওপর পাঁচ বছর ধরে কৃত্রিম-ROE পরীক্ষা প্রয়োগ করুন — স্থিতিশীল ROE, পরিচালন ROA ১০%-এর বেশি নিচে, ইক্যুইটি গুণক ২০%-এর বেশি ওপরে। কতগুলো ট্রিগার করে? যেগুলো করে প্রত্যেকটির অর্থায়ন ব্যয়ের নোট দেখুন।
৮. এমন একটি কোম্পানি নিন যার কর ভার পরপর দুই বছরে ০.১০-এর বেশি বদলেছে। আয়কর নোট পড়ুন। এটি কি হার পরিবর্তন, বিলম্বিত কর পরিবর্তন, না এককালীন? এটি ছাড়া ROE কত হতো?`,
    },

    summary: {
      en: `- DuPont is an identity, not a model. The product of the components equals ROE exactly; any discrepancy is an input error.
- **Three-step:** ROE = net margin × asset turnover × equity multiplier. Pricing power × capital efficiency × leverage.
- **Five-step:** ROE = tax burden × interest burden × operating margin × asset turnover × equity multiplier. The first three multiply back to net margin, so both identities must agree.
- **Leverage appears twice with opposite signs** — as benefit in the equity multiplier, as cost in the interest burden. Only the five-step separates them.
- Three DSE companies at 18% ROE decomposed to operating ROAs of 10.80% (pharma), 9.00% (textile), and 1.80% (NBFI). Identical headline, three different businesses, three different downsides.
- **Operating ROA — net margin × asset turnover — is the figure leverage cannot fake.** It is the correct screening variable. The equity multiplier is a risk input, never a quality input.
- Across the five-year series, operating ROA fell 47% while the equity multiplier rose 89% and ROE moved four basis points. The company did not maintain its returns; it replaced its business with debt.
- Bangladesh-specific cautions: revaluation surplus under IAS 16 distorts equity; FRC restatements must be applied to the whole series; banks and NBFIs require the Chapter 23 decomposition, not this one.
- **Discipline established:** never rank on ROE. Rank on net margin × asset turnover, read the equity multiplier as risk, and require four years of series before calling any ROE trend real.`,
      bn: `- ডুপন্ট একটি অভেদ, মডেল নয়। উপাদানগুলোর গুণফল হুবহু ROE-র সমান; কোনো অমিল মানেই ইনপুট ভুল।
- **তিন-ধাপ:** ROE = নিট মার্জিন × সম্পদ আবর্তন × ইক্যুইটি গুণক। মূল্য নির্ধারণের ক্ষমতা × মূলধন দক্ষতা × ঋণভার।
- **পাঁচ-ধাপ:** ROE = কর ভার × সুদ ভার × পরিচালন মার্জিন × সম্পদ আবর্তন × ইক্যুইটি গুণক। প্রথম তিনটি গুণ করলে নিট মার্জিন ফেরে, তাই দুটি অভেদ মিলতে বাধ্য।
- **ঋণভার দুইবার আসে, বিপরীত চিহ্নে** — ইক্যুইটি গুণকে সুবিধা হিসেবে, সুদ ভারে ব্যয় হিসেবে। কেবল পাঁচ-ধাপই এদের আলাদা করে।
- ১৮% ROE-র তিনটি ডিএসই কোম্পানি বিশ্লিষ্ট হয়ে পরিচালন ROA দিল ১০.৮০% (ওষুধ), ৯.০০% (বস্ত্র) ও ১.৮০% (NBFI)। অভিন্ন শিরোনাম, তিনটি ভিন্ন ব্যবসা, তিনটি ভিন্ন নিম্নমুখী ঝুঁকি।
- **পরিচালন ROA — নিট মার্জিন × সম্পদ আবর্তন — সেই সংখ্যা যা ঋণভার নকল করতে পারে না।** এটিই সঠিক ছাঁকনি চলক। ইক্যুইটি গুণক একটি ঝুঁকি ইনপুট, কখনোই গুণমান ইনপুট নয়।
- পাঁচ বছরের ধারায় পরিচালন ROA ৪৭% কমেছে যখন ইক্যুইটি গুণক ৮৯% বেড়েছে এবং ROE নড়েছে চার বেসিস পয়েন্ট। কোম্পানিটি রিটার্ন ধরে রাখেনি; সে ব্যবসার জায়গায় ঋণ বসিয়েছে।
- বাংলাদেশ-নির্দিষ্ট সতর্কতা: IAS 16 অনুযায়ী পুনর্মূল্যায়ন উদ্বৃত্ত ইক্যুইটি বিকৃত করে; FRC পুনর্বিবৃতি পুরো ধারায় প্রয়োগ করতে হবে; ব্যাংক ও NBFI-র জন্য এটি নয়, অধ্যায় ২৩-এর বিশ্লেষণ দরকার।
- **প্রতিষ্ঠিত শৃঙ্খলা:** কখনো ROE দিয়ে র‌্যাঙ্ক করবেন না। র‌্যাঙ্ক করুন নিট মার্জিন × সম্পদ আবর্তন দিয়ে, ইক্যুইটি গুণককে ঝুঁকি হিসেবে পড়ুন, এবং কোনো ROE প্রবণতাকে প্রকৃত বলার আগে চার বছরের ধারা দাবি করুন।`,
    },
  },

  interview: [
    {
      q: {
        en: 'Write the three-step DuPont identity and explain why it is an identity rather than a model.',
        bn: 'তিন-ধাপের ডুপন্ট অভেদ লিখুন এবং ব্যাখ্যা করুন কেন এটি মডেল নয়, অভেদ।',
      },
      a: {
        en: 'ROE = (Net Income/Revenue) × (Revenue/Assets) × (Assets/Equity). Revenue and total assets cancel algebraically, leaving Net Income/Equity, which is ROE by definition. Nothing is estimated or assumed — the product must equal reported ROE exactly. Any discrepancy indicates a transcription error, most commonly mixing consolidated assets with standalone equity.',
        bn: 'ROE = (নিট মুনাফা/রাজস্ব) × (রাজস্ব/সম্পদ) × (সম্পদ/ইক্যুইটি)। রাজস্ব ও মোট সম্পদ বীজগাণিতিকভাবে কেটে যায়, অবশিষ্ট থাকে নিট মুনাফা/ইক্যুইটি, যা সংজ্ঞা অনুযায়ীই ROE। কিছুই অনুমান করা হয় না — গুণফল হুবহু ঘোষিত ROE-র সমান হতে বাধ্য। কোনো অমিল মানে প্রতিলিপি ভুল, সবচেয়ে সাধারণভাবে সমন্বিত সম্পদের সঙ্গে একক ইক্যুইটি মেশানো।',
      },
    },
    {
      q: {
        en: 'Two DSE companies both report 18% ROE. What is the first thing you compute, and why?',
        bn: 'দুটি ডিএসই কোম্পানিই ১৮% ROE ঘোষণা করেছে। আপনি প্রথমে কী গণনা করবেন, এবং কেন?',
      },
      a: {
        en: 'Net margin × asset turnover — the operating return on assets. It is the part of ROE that leverage cannot manufacture. A pharma at 10.80% and an NBFI at 1.80% both reach 18% ROE, but the NBFI needs an equity multiplier of 10 to do it. The operating ROA tells you what the business earns on everything it controls; the equity multiplier tells you how much of that is other people\'s money.',
        bn: 'নিট মার্জিন × সম্পদ আবর্তন — সম্পদের ওপর পরিচালন রিটার্ন। এটিই ROE-র সেই অংশ যা ঋণভার কৃত্রিমভাবে তৈরি করতে পারে না। ১০.৮০%-এর ওষুধ কোম্পানি ও ১.৮০%-এর NBFI দুটিই ১৮% ROE-তে পৌঁছায়, কিন্তু NBFI-র তার জন্য ১০ ইক্যুইটি গুণক লাগে। পরিচালন ROA বলে ব্যবসাটি তার নিয়ন্ত্রণাধীন সবকিছুর ওপর কত আয় করে; ইক্যুইটি গুণক বলে তার কতটা অন্যের টাকা।',
      },
    },
    {
      q: {
        en: 'Why does the five-step version exist if the three-step already reconciles exactly?',
        bn: 'তিন-ধাপ যদি ইতিমধ্যেই হুবহু মেলে, তবে পাঁচ-ধাপের সংস্করণ কেন আছে?',
      },
      a: {
        en: 'Because net margin is a composite of operating performance, financing cost, and tax. A margin decline could be an operational problem, a debt problem, or a tax change, and the three-step cannot tell you which. The five-step splits it into tax burden (NI/EBT), interest burden (EBT/EBIT), and operating margin (EBIT/Revenue). Crucially it exposes leverage twice — as benefit in the equity multiplier and as cost in the interest burden — which the three-step nets out invisibly.',
        bn: 'কারণ নিট মার্জিন হলো পরিচালন কর্মক্ষমতা, অর্থায়ন ব্যয় ও করের একটি যৌগ। মার্জিন পতন হতে পারে পরিচালন সমস্যা, ঋণ সমস্যা, বা কর পরিবর্তন — তিন-ধাপ কোনটি তা বলতে পারে না। পাঁচ-ধাপ একে ভাঙে কর ভার (NI/EBT), সুদ ভার (EBT/EBIT) ও পরিচালন মার্জিনে (EBIT/রাজস্ব)। গুরুত্বপূর্ণভাবে এটি ঋণভারকে দুইবার উন্মোচন করে — ইক্যুইটি গুণকে সুবিধা ও সুদ ভারে ব্যয় হিসেবে — যা তিন-ধাপ অদৃশ্যভাবে মিলিয়ে ফেলে।',
      },
    },
    {
      q: {
        en: 'A company holds ROE at 18% for five years while its equity multiplier rises from 1.8 to 3.4. What has happened?',
        bn: 'একটি কোম্পানি পাঁচ বছর ROE ১৮%-এ ধরে রাখে যখন তার ইক্যুইটি গুণক ১.৮ থেকে ৩.৪-এ ওঠে। কী ঘটেছে?',
      },
      a: {
        en: 'The operating business has deteriorated and debt has been added at almost exactly the rate needed to hold the headline. If ROE is constant and the equity multiplier has risen 89%, operating ROA must have fallen by roughly the reciprocal — in the worked example, from 10.00% to 5.30%, a 47% decline. The ROE is being manufactured. The company did not maintain returns; it substituted leverage for performance, and that substitution ends when a lender declines to roll.',
        bn: 'পরিচালন ব্যবসাটি ক্ষয়ে গেছে এবং শিরোনামটি ধরে রাখতে ঠিক যতটা দরকার প্রায় ততটাই ঋণ যোগ করা হয়েছে। ROE স্থির থেকে ইক্যুইটি গুণক ৮৯% বাড়লে পরিচালন ROA প্রায় বিপরীত অনুপাতে কমতে বাধ্য — কৃত উদাহরণে ১০.০০% থেকে ৫.৩০%, অর্থাৎ ৪৭% পতন। ROE কৃত্রিমভাবে তৈরি হচ্ছে। কোম্পানিটি রিটার্ন ধরে রাখেনি; সে কর্মক্ষমতার বদলে ঋণভার বসিয়েছে, এবং কোনো ঋণদাতা নবায়নে অস্বীকৃতি জানালেই ঐ প্রতিস্থাপন শেষ।',
      },
    },
    {
      q: {
        en: 'Why should you not apply the five-step interest burden term to a listed Bangladeshi bank?',
        bn: 'একটি তালিকাভুক্ত বাংলাদেশি ব্যাংকে পাঁচ-ধাপের সুদ ভার পদ কেন প্রয়োগ করা উচিত নয়?',
      },
      a: {
        en: 'For a lender, interest expense is the cost of the raw material — deposits — not a financing decision layered on top of an operating business. Treating it as a financing cost makes a well-funded bank look like it has a crushing interest burden and makes revenue non-comparable to a manufacturer\'s. Banks and NBFIs require a separate decomposition built from net interest margin, fee income, cost-to-income, and credit cost, which Chapter 23 sets out.',
        bn: 'একজন ঋণদাতার ক্ষেত্রে সুদ ব্যয় হলো কাঁচামালের — আমানতের — ব্যয়, কোনো পরিচালন ব্যবসার ওপর চাপানো অর্থায়ন সিদ্ধান্ত নয়। একে অর্থায়ন ব্যয় ধরলে একটি সুতহবিলযুক্ত ব্যাংককে মনে হয় ভয়াবহ সুদ ভারে চাপা, এবং রাজস্ব উৎপাদকের সঙ্গে অতুলনীয় হয়ে যায়। ব্যাংক ও NBFI-র জন্য নিট সুদ মার্জিন, ফি আয়, ব্যয়-থেকে-আয় ও ঋণ ব্যয় থেকে গঠিত পৃথক বিশ্লেষণ দরকার, যা অধ্যায় ২৩ উপস্থাপন করে।',
      },
    },
    {
      q: {
        en: 'How does an IAS 16 revaluation surplus distort a DuPont decomposition?',
        bn: 'IAS 16 পুনর্মূল্যায়ন উদ্বৃত্ত কীভাবে একটি ডুপন্ট বিশ্লেষণ বিকৃত করে?',
      },
      a: {
        en: 'It raises both total assets and equity without raising earning capacity. Asset turnover falls because revenue is unchanged against a larger asset base, ROE falls because equity is larger against unchanged income, and the equity multiplier falls because equity grew. The net effect is that a genuinely levered company screens as conservative. Strip the revaluation reserve out of equity and the corresponding uplift out of assets, then recompute before drawing any conclusion.',
        bn: 'এটি আয়ক্ষমতা না বাড়িয়ে মোট সম্পদ ও ইক্যুইটি উভয়ই বাড়ায়। রাজস্ব অপরিবর্তিত থেকে সম্পদভিত্তি বড় হওয়ায় সম্পদ আবর্তন কমে, আয় অপরিবর্তিত থেকে ইক্যুইটি বড় হওয়ায় ROE কমে, এবং ইক্যুইটি বাড়ায় ইক্যুইটি গুণক কমে। নিট ফল হলো প্রকৃতপক্ষে ঋণভারগ্রস্ত কোম্পানি রক্ষণশীল হিসেবে ধরা দেয়। সিদ্ধান্তে আসার আগে ইক্যুইটি থেকে পুনর্মূল্যায়ন সঞ্চিতি ও সম্পদ থেকে সংশ্লিষ্ট বৃদ্ধি বাদ দিয়ে পুনরায় গণনা করুন।',
      },
    },
  ],

  quiz: [
    {
      q: {
        en: 'The three-step DuPont identity decomposes ROE into:',
        bn: 'তিন-ধাপের ডুপন্ট অভেদ ROE-কে ভাঙে:',
      },
      options: {
        en: [
          'Net margin, asset turnover, equity multiplier',
          'Gross margin, operating margin, net margin',
          'ROA, ROCE, ROE',
          'Tax burden, interest burden, operating margin',
        ],
        bn: [
          'নিট মার্জিন, সম্পদ আবর্তন, ইক্যুইটি গুণক',
          'গ্রস মার্জিন, পরিচালন মার্জিন, নিট মার্জিন',
          'ROA, ROCE, ROE',
          'কর ভার, সুদ ভার, পরিচালন মার্জিন',
        ],
      },
      answer: 0,
    },
    {
      q: {
        en: 'A company has net margin 6%, asset turnover 1.50, equity multiplier 2.00. Its ROE is:',
        bn: 'একটি কোম্পানির নিট মার্জিন ৬%, সম্পদ আবর্তন ১.৫০, ইক্যুইটি গুণক ২.০০। এর ROE:',
      },
      options: { en: ['9.0%', '12.0%', '18.0%', '24.0%'], bn: ['৯.০%', '১২.০%', '১৮.০%', '২৪.০%'] },
      answer: 2,
    },
    {
      q: {
        en: 'In the five-step identity, the interest burden is defined as:',
        bn: 'পাঁচ-ধাপের অভেদে সুদ ভারের সংজ্ঞা:',
      },
      options: {
        en: ['Interest ÷ EBIT', 'EBT ÷ EBIT', 'EBIT ÷ Interest', 'Net Income ÷ EBT'],
        bn: ['সুদ ÷ EBIT', 'EBT ÷ EBIT', 'EBIT ÷ সুদ', 'নিট মুনাফা ÷ EBT'],
      },
      answer: 1,
    },
    {
      q: {
        en: 'Which figure inside DuPont can leverage NOT manufacture?',
        bn: 'ডুপন্টের ভেতরে কোন সংখ্যাটি ঋণভার কৃত্রিমভাবে তৈরি করতে পারে না?',
      },
      options: {
        en: [
          'Return on equity',
          'Equity multiplier',
          'Net margin × asset turnover',
          'Tax burden',
        ],
        bn: [
          'ইক্যুইটির ওপর রিটার্ন',
          'ইক্যুইটি গুণক',
          'নিট মার্জিন × সম্পদ আবর্তন',
          'কর ভার',
        ],
      },
      answer: 2,
    },
    {
      q: {
        en: 'An equity multiplier of 3.40 implies total liabilities equal to:',
        bn: '৩.৪০ ইক্যুইটি গুণক বোঝায় মোট দায় সমান:',
      },
      options: {
        en: ['3.40 × equity', '2.40 × equity', '0.40 × equity', '1.70 × equity'],
        bn: ['৩.৪০ × ইক্যুইটি', '২.৪০ × ইক্যুইটি', '০.৪০ × ইক্যুইটি', '১.৭০ × ইক্যুইটি'],
      },
      answer: 1,
    },
    {
      q: {
        en: 'A tax burden of 0.75 implies an effective tax rate of:',
        bn: '০.৭৫ কর ভার বোঝায় কার্যকর করহার:',
      },
      options: { en: ['7.5%', '20%', '25%', '75%'], bn: ['৭.৫%', '২০%', '২৫%', '৭৫%'] },
      answer: 2,
    },
    {
      q: {
        en: 'ROE flat at 18% for five years while operating ROA halves and the equity multiplier nearly doubles indicates:',
        bn: 'পাঁচ বছর ROE ১৮%-এ স্থির, পরিচালন ROA অর্ধেক, ইক্যুইটি গুণক প্রায় দ্বিগুণ — এটি নির্দেশ করে:',
      },
      options: {
        en: [
          'Consistent operational excellence',
          'ROE manufactured by rising leverage',
          'Improving capital efficiency',
          'A tax rate reduction',
        ],
        bn: [
          'ধারাবাহিক পরিচালন উৎকর্ষ',
          'বর্ধমান ঋণভারে কৃত্রিমভাবে তৈরি ROE',
          'উন্নত মূলধন দক্ষতা',
          'করহার হ্রাস',
        ],
      },
      answer: 1,
    },
    {
      q: {
        en: 'Leverage appears in the five-step identity:',
        bn: 'পাঁচ-ধাপের অভেদে ঋণভার আসে:',
      },
      options: {
        en: [
          'Once, in the equity multiplier only',
          'Twice, with opposite signs — equity multiplier and interest burden',
          'Once, in the interest burden only',
          'Not at all',
        ],
        bn: [
          'একবার, কেবল ইক্যুইটি গুণকে',
          'দুইবার, বিপরীত চিহ্নে — ইক্যুইটি গুণক ও সুদ ভার',
          'একবার, কেবল সুদ ভারে',
          'একেবারেই নয়',
        ],
      },
      answer: 1,
    },
    {
      q: {
        en: 'Applying the manufacturing five-step decomposition to a listed bank is wrong because:',
        bn: 'তালিকাভুক্ত ব্যাংকে উৎপাদকের পাঁচ-ধাপ বিশ্লেষণ প্রয়োগ ভুল, কারণ:',
      },
      options: {
        en: [
          'Banks do not report EBIT',
          'For a lender, interest expense is a cost of goods, not a financing cost',
          'Banks have no equity',
          'BSEC prohibits it',
        ],
        bn: [
          'ব্যাংক EBIT প্রকাশ করে না',
          'ঋণদাতার ক্ষেত্রে সুদ ব্যয় অর্থায়ন ব্যয় নয়, বিক্রীত পণ্যের ব্যয়',
          'ব্যাংকের কোনো ইক্যুইটি নেই',
          'বিএসইসি এটি নিষিদ্ধ করেছে',
        ],
      },
      answer: 1,
    },
    {
      q: {
        en: 'An IAS 16 revaluation surplus added to equity will:',
        bn: 'ইক্যুইটিতে যুক্ত IAS 16 পুনর্মূল্যায়ন উদ্বৃত্ত করবে:',
      },
      options: {
        en: [
          'Raise ROE and raise the equity multiplier',
          'Lower ROE and lower the equity multiplier',
          'Leave both unchanged',
          'Raise asset turnover',
        ],
        bn: [
          'ROE বাড়াবে ও ইক্যুইটি গুণক বাড়াবে',
          'ROE কমাবে ও ইক্যুইটি গুণক কমাবে',
          'দুটিই অপরিবর্তিত রাখবে',
          'সম্পদ আবর্তন বাড়াবে',
        ],
      },
      answer: 1,
    },
  ],
};
