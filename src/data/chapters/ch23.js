/**
 * Chapter 23 — Banking Sector Analysis: NPL, CAR, NIM
 * Part II, Fundamental Analysis.
 */

export default {
  n: 23,
  tools: [],

  excelSheet: {
    filename: 'ch23-bank-stressed-asset-model.xlsx',
    sheetName: 'Stressed Assets',
    cells: [
      { cell: 'A1', v: '— Reported Position (BDT crore) —' },
      { cell: 'A2', v: 'Total Loans & Advances' }, { cell: 'B2', v: 45000 },
      { cell: 'A3', v: 'Reported NPL' }, { cell: 'B3', v: 3600 },
      { cell: 'A4', v: 'Reported NPL Ratio (%)' }, { cell: 'B4', f: 'B3/B2*100' },
      { cell: 'A5', v: 'Provisions Held' }, { cell: 'B5', v: 1980 },
      { cell: 'A6', v: 'Provision Coverage (%)' }, { cell: 'B6', f: 'B5/B3*100' },

      { cell: 'A8', v: '— What Reported NPL Excludes —' },
      { cell: 'A9', v: 'Rescheduled Loans Outstanding' }, { cell: 'B9', v: 4200 },
      { cell: 'A10', v: 'Written-off Loans (off B/S)' }, { cell: 'B10', v: 2600 },
      { cell: 'A11', v: 'Loans Under Court Injunction' }, { cell: 'B11', v: 900 },
      { cell: 'A12', v: 'TRUE STRESSED ASSETS' }, { cell: 'B12', f: 'B3+B9+B10+B11' },
      { cell: 'A13', v: 'Stressed Asset Ratio (%)' }, { cell: 'B13', f: 'B12/(B2+B10)*100' },
      { cell: 'A14', v: 'Understatement (x)' }, { cell: 'B14', f: 'B13/B4' },

      { cell: 'A16', v: '— Equity Impact —' },
      { cell: 'A17', v: 'Shareholders Equity' }, { cell: 'B17', v: 3200 },
      { cell: 'A18', v: 'Assumed Loss Rate on Stress (%)' }, { cell: 'B18', v: 40 },
      { cell: 'A19', v: 'Required Provision' }, { cell: 'B19', f: 'B12*B18/100' },
      { cell: 'A20', v: 'Provision Shortfall' }, { cell: 'B20', f: 'MAX(0,B19-B5)' },
      { cell: 'A21', v: 'Adjusted Equity' }, { cell: 'B21', f: 'B17-B20' },
      { cell: 'A22', v: 'Equity Wiped (%)' }, { cell: 'B22', f: 'B20/B17*100' },

      { cell: 'A24', v: '— Valuation Reconciliation —' },
      { cell: 'A25', v: 'Shares Outstanding (crore)' }, { cell: 'B25', v: 120 },
      { cell: 'A26', v: 'Reported NAV per Share' }, { cell: 'B26', f: 'B17/B25' },
      { cell: 'A27', v: 'Adjusted NAV per Share' }, { cell: 'B27', f: 'B21/B25' },
      { cell: 'A28', v: 'Market Price' }, { cell: 'B28', v: 16 },
      { cell: 'A29', v: 'Reported P/B' }, { cell: 'B29', f: 'B28/B26' },
      { cell: 'A30', v: 'Adjusted P/B' }, { cell: 'B30', f: 'IF(B27<=0,"NEGATIVE EQUITY",B28/B27)' },

      { cell: 'A32', v: 'VERDICT' },
      {
        cell: 'B32',
        f: 'IF(B27<=0,"Market discount is justified - adjusted equity is negative",IF(B29<0.7,"Discount is pricing the stressed book, not mispricing it","Check CAR and provision coverage before concluding"))',
      },
    ],
  },

  objectives: {
    en: [
      'Explain why a bank cannot be analysed with the tools of Chapters 10–19 and requires its own framework.',
      'Read Bangladesh Bank loan classification and provisioning, and state what each class costs the bank.',
      'Reconstruct true stressed assets from reported NPL plus rescheduled, written-off, and enjoined loans.',
      'Compute the equity impact of honest provisioning and reconcile it to the observed P/B discount.',
      'Interpret CAR, NIM, CASA, and cost-to-income, and explain what an interest-rate cap does to each.',
    ],
    bn: [
      'কেন একটি ব্যাংককে অধ্যায় ১০–১৯-এর হাতিয়ার দিয়ে বিশ্লেষণ করা যায় না এবং নিজস্ব কাঠামো লাগে তা ব্যাখ্যা করা।',
      'বাংলাদেশ ব্যাংকের ঋণ শ্রেণিবিন্যাস ও প্রভিশনিং পড়া, এবং প্রতিটি শ্রেণিতে ব্যাংকের কত খরচ তা বলা।',
      'প্রতিবেদিত খেলাপি ঋণের সঙ্গে পুনঃতফসিলকৃত, অবলোপনকৃত ও আদালতের নিষেধাজ্ঞাধীন ঋণ যোগ করে প্রকৃত চাপগ্রস্ত সম্পদ পুনর্গঠন করা।',
      'সৎ প্রভিশনিংয়ের ইকুইটি প্রভাব গণনা করা এবং তা পর্যবেক্ষিত P/B ছাড়ের সঙ্গে মেলানো।',
      'CAR, NIM, CASA ও খরচ-আয় অনুপাত ব্যাখ্যা করা, এবং সুদহারের সীমা এদের প্রতিটির ওপর কী করে তা বলা।',
    ],
  },

  blocks: {
    theory: {
      en: `Everything in Chapters 10 through 19 assumed a company that makes something and sells it. **A bank does not.** Applying those tools to a bank produces numbers that are arithmetically correct and analytically meaningless.

### Why a bank is a different instrument

For a manufacturer, the balance sheet supports the business. **For a bank, the balance sheet *is* the business.**

- **Deposits are liabilities**, and they fund the loan book.
- **Loans are assets**, and their value depends entirely on whether borrowers repay.
- **Leverage is structural, not a choice.** A bank running assets at 11–13× equity is normal. Chapter 17 would call that distress; for a bank it is the operating model.
- **ROA of ~1% is respectable.** It becomes a 12–15% ROE only through that leverage — which is exactly the DuPont decomposition of Chapter 19, with the equity multiplier doing nearly all the work.

The consequence follows directly: **because equity is roughly 8% of assets, an 8% loss on the loan book destroys all of it.** The entire analysis of a bank reduces to one question — *are the loans worth what the balance sheet says?*

### Loan classification in Bangladesh

Bangladesh Bank prescribes classification and minimum provisioning. Indicative structure (BRPD circulars are revised frequently — **verify current requirements on bb.org.bd before relying on any figure here**):

| Class | Broad meaning | Indicative provision |
|---|---|---|
| Standard | Performing | 0.25% – 2% |
| SMA (Special Mention) | Overdue but not yet classified | 5% |
| Sub-standard (SS) | Classified | 20% |
| Doubtful (DF) | Classified | 50% |
| Bad / Loss (BL) | Classified | 100% |

**Non-performing loans (NPL)** = SS + DF + BL. This is the headline number quoted in every newspaper.

### The three things reported NPL leaves out

This is the core of the chapter, and it is why DSE bank analysis is not a matter of reading the ratio off the annual report.

**1. Rescheduled loans.** A defaulted loan that is rescheduled becomes *unclassified* again. Bangladesh Bank has repeatedly issued relaxed rescheduling facilities — most notably the 2019 special scheme permitting rescheduling on a small down payment over a long tenor, and the COVID-era moratoria of 2020–21. A loan that stopped performing, was rescheduled on generous terms, and now sits as Standard is **not in the NPL number and is not a healthy loan.**

**2. Written-off loans.** Once written off, a loan leaves the balance sheet entirely and drops out of both the numerator and the denominator of the NPL ratio. The recovery rate on written-off loans in Bangladesh has historically been low. **Writing off bad loans mechanically improves the reported NPL ratio without any borrower repaying anything.**

**3. Loans under court injunction.** Borrowers obtain stay orders that prevent classification. These sit outside the NPL figure for years while the case proceeds.

**Therefore:**

$$\\text{Stressed Assets} = \\text{Reported NPL} + \\text{Rescheduled} + \\text{Written-off} + \\text{Enjoined}$$

On several DSE-listed banks this figure has been **two to three times the reported NPL ratio.** The reported number is not a lie — it complies with the classification rules. It is simply not a measure of how many loans are bad.

### Capital adequacy

**CAR (Capital to Risk-weighted Assets Ratio)**, under Basel III as adopted by Bangladesh Bank:

$$CAR = \\frac{\\text{Tier 1} + \\text{Tier 2 Capital}}{\\text{Risk-Weighted Assets}}$$

The minimum has been 10% plus a capital conservation buffer of 2.5%, giving an effective 12.5% requirement. **Read CAR with suspicion, for a specific reason:** if provisioning is understated, capital is overstated, and CAR is computed on the overstated capital. A bank with inadequate provisions reports a CAR that looks compliant precisely because it has not recognised the losses that would breach it.

**CAR is an output of provisioning honesty, not an independent check on it.**

### Earnings quality for a bank

**NIM (Net Interest Margin)** — the spread the bank earns on its earning assets:

$$NIM = \\frac{\\text{Interest Income} - \\text{Interest Expense}}{\\text{Average Earning Assets}}$$

**CASA ratio** — current and savings deposits as a share of total deposits. CASA is cheap funding; term deposits are expensive. **A high CASA ratio is one of the few genuinely difficult-to-fake indicators of franchise quality**, because it reflects whether customers keep transactional balances with the bank.

**Cost-to-income ratio** — operating expense over operating income. Below ~45% is efficient; above ~60% indicates a bloated cost base or weak revenue.

### The interest rate cap episode

Bangladesh imposed a 9% lending cap and a 6% deposit floor for a period. The mechanical effect is worth stating precisely, because it shows how policy reshapes a whole sector's economics:

- The maximum spread is compressed to **3% before costs**.
- With a cost-to-income ratio around 50% and credit costs on a stressed book, that spread does not cover much.
- Banks respond by chasing volume, which means **lending more to a borrower pool that has already demonstrated stress**.
- It also removes risk-based pricing entirely: a bank cannot charge a riskier borrower more, so the rational move is to avoid risky borrowers — or, if growth is required, to take the risk without being paid for it.

**A rate cap does not make credit cheaper. It changes who gets credit and how the resulting losses are distributed.** This is the same lesson as the circuit breaker in Chapter 2 and the floor price in Chapter 6: an intervention that sets a price does not remove the underlying pressure, it relocates it.

### Why DSE banks trade below book

Chapter 18 noted the persistent price-to-book discount across DSE banks. This chapter supplies the explanation.

If the market believes stressed assets are two to three times reported NPL, and that honest provisioning would consume a large share of equity, then **a P/B of 0.6 is not a mispricing. It is the market's estimate of adjusted book value.** The arithmetic in §23.5 makes that explicit.

Whether the discount is *too large* is a genuine analytical question. But an investor who buys a bank at 0.6× book "because it is cheap" without reconstructing the stressed book has not identified a bargain — they have simply not done the work that produced the discount.`,
      bn: `অধ্যায় ১০ থেকে ১৯-এর সবকিছু এমন একটি কোম্পানি ধরে নিয়েছে যা কিছু বানায় ও বিক্রি করে। **একটি ব্যাংক তা করে না।** ঐ হাতিয়ারগুলো ব্যাংকে প্রয়োগ করলে এমন সংখ্যা আসে যা পাটিগাণিতিকভাবে সঠিক এবং বিশ্লেষণগতভাবে অর্থহীন।

### কেন ব্যাংক একটি ভিন্ন উপকরণ

একটি উৎপাদকের জন্য স্থিতিপত্র ব্যবসাকে সমর্থন করে। **ব্যাংকের জন্য স্থিতিপত্রই *হলো* ব্যবসা।**

- **আমানত হলো দায়**, এবং তা ঋণের খাতায় অর্থায়ন করে।
- **ঋণ হলো সম্পদ**, এবং এদের মূল্য সম্পূর্ণভাবে নির্ভর করে ঋণগ্রহীতারা শোধ করেন কি না তার ওপর।
- **লিভারেজ কাঠামোগত, পছন্দ নয়।** ইকুইটির ১১–১৩ গুণ সম্পদ চালানো ব্যাংকের জন্য স্বাভাবিক। অধ্যায় ১৭ একে সংকট বলত; ব্যাংকের জন্য এটি পরিচালন মডেল।
- **~১% ROA সম্মানজনক।** কেবল ঐ লিভারেজের মাধ্যমেই তা ১২–১৫% ROE হয় — যা অধ্যায় ১৯-এর ডুপন্ট বিভাজনই, যেখানে ইকুইটি গুণক প্রায় পুরো কাজটি করছে।

পরিণতিটি সরাসরি আসে: **যেহেতু ইকুইটি সম্পদের প্রায় ৮%, ঋণের খাতায় ৮% ক্ষতি তার পুরোটাই ধ্বংস করে।** একটি ব্যাংকের সম্পূর্ণ বিশ্লেষণ একটি প্রশ্নে নেমে আসে — *স্থিতিপত্র যা বলছে ঋণগুলোর মূল্য কি তাই?*

### বাংলাদেশে ঋণ শ্রেণিবিন্যাস

বাংলাদেশ ব্যাংক শ্রেণিবিন্যাস ও ন্যূনতম প্রভিশনিং নির্ধারণ করে। নির্দেশক কাঠামো (BRPD সার্কুলার ঘন ঘন সংশোধিত হয় — **এখানকার কোনো সংখ্যার ওপর নির্ভর করার আগে bb.org.bd-তে বর্তমান শর্ত যাচাই করুন**):

| শ্রেণি | বিস্তৃত অর্থ | নির্দেশক প্রভিশন |
|---|---|---|
| Standard | কার্যকর | ০.২৫% – ২% |
| SMA (বিশেষ উল্লেখ) | মেয়াদোত্তীর্ণ কিন্তু এখনো শ্রেণিবদ্ধ নয় | ৫% |
| Sub-standard (SS) | শ্রেণিবদ্ধ | ২০% |
| Doubtful (DF) | শ্রেণিবদ্ধ | ৫০% |
| Bad / Loss (BL) | শ্রেণিবদ্ধ | ১০০% |

**খেলাপি ঋণ (NPL)** = SS + DF + BL। এটিই প্রতিটি সংবাদপত্রে উদ্ধৃত শিরোনামের সংখ্যা।

### প্রতিবেদিত খেলাপি ঋণ যে তিনটি জিনিস বাদ দেয়

এটিই অধ্যায়ের মূল, আর এ কারণেই ডিএসই ব্যাংক বিশ্লেষণ বার্ষিক প্রতিবেদন থেকে অনুপাত পড়ে নেওয়ার বিষয় নয়।

**১. পুনঃতফসিলকৃত ঋণ।** খেলাপি হওয়া একটি ঋণ পুনঃতফসিল হলে আবার *অশ্রেণিবদ্ধ* হয়ে যায়। বাংলাদেশ ব্যাংক বারবার শিথিল পুনঃতফসিল সুবিধা দিয়েছে — বিশেষত ২০১৯ সালের বিশেষ স্কিম যা দীর্ঘ মেয়াদে সামান্য ডাউন পেমেন্টে পুনঃতফসিলের অনুমতি দেয়, এবং ২০২০–২১ সালের কোভিডকালীন স্থগিতাদেশ। যে ঋণ কার্যকর থাকা বন্ধ করেছিল, উদার শর্তে পুনঃতফসিল হলো, আর এখন Standard হিসেবে বসে আছে, তা **খেলাপি সংখ্যায় নেই এবং সুস্থ ঋণও নয়।**

**২. অবলোপনকৃত ঋণ।** অবলোপন হয়ে গেলে ঋণ সম্পূর্ণভাবে স্থিতিপত্র ছেড়ে যায় এবং NPL অনুপাতের লব ও হর — দুটো থেকেই বাদ পড়ে। বাংলাদেশে অবলোপনকৃত ঋণে আদায়ের হার ঐতিহাসিকভাবে কম। **খারাপ ঋণ অবলোপন করলে কোনো ঋণগ্রহীতা কিছু শোধ না করেই প্রতিবেদিত NPL অনুপাত যান্ত্রিকভাবে উন্নত হয়।**

**৩. আদালতের নিষেধাজ্ঞাধীন ঋণ।** ঋণগ্রহীতারা স্থগিতাদেশ নেন যা শ্রেণিবিন্যাস ঠেকায়। মামলা চলাকালে এগুলো বছরের পর বছর NPL সংখ্যার বাইরে থাকে।

**অতএব:**

$$\\text{চাপগ্রস্ত সম্পদ} = \\text{প্রতিবেদিত NPL} + \\text{পুনঃতফসিলকৃত} + \\text{অবলোপনকৃত} + \\text{নিষেধাজ্ঞাধীন}$$

ডিএসই-তে তালিকাভুক্ত কয়েকটি ব্যাংকে এই সংখ্যা প্রতিবেদিত NPL অনুপাতের **দুই থেকে তিন গুণ** হয়েছে। প্রতিবেদিত সংখ্যাটি মিথ্যা নয় — এটি শ্রেণিবিন্যাসের বিধি মেনে চলে। এটি কেবল কতগুলো ঋণ খারাপ তার পরিমাপ নয়।

### মূলধন পর্যাপ্ততা

**CAR (ঝুঁকি-ভারিত সম্পদের বিপরীতে মূলধন অনুপাত)**, বাংলাদেশ ব্যাংক গৃহীত ব্যাসেল III অনুযায়ী:

$$CAR = \\frac{\\text{Tier 1} + \\text{Tier 2 মূলধন}}{\\text{ঝুঁকি-ভারিত সম্পদ}}$$

ন্যূনতম হয়েছে ১০% এবং সঙ্গে ২.৫% মূলধন সংরক্ষণ বাফার, অর্থাৎ কার্যকর ১২.৫% শর্ত। **একটি নির্দিষ্ট কারণে CAR সন্দেহ নিয়ে পড়ুন:** প্রভিশনিং কম দেখানো হলে মূলধন বেশি দেখায়, আর CAR ঐ বাড়িয়ে দেখানো মূলধনের ওপর গণিত হয়। অপর্যাপ্ত প্রভিশনের একটি ব্যাংক ঠিক এ কারণেই সম্মতিপূর্ণ দেখানো CAR প্রতিবেদন করে যে সে ঐ ক্ষতিগুলো স্বীকার করেনি যা এটি লঙ্ঘন করাত।

**CAR প্রভিশনিং সততার একটি ফলাফল, তার ওপর কোনো স্বাধীন যাচাই নয়।**

### ব্যাংকের জন্য আয়ের গুণমান

**NIM (নিট সুদ মার্জিন)** — ব্যাংক তার আয়কারী সম্পদে যে ব্যবধান অর্জন করে:

$$NIM = \\frac{\\text{সুদ আয়} - \\text{সুদ ব্যয়}}{\\text{গড় আয়কারী সম্পদ}}$$

**CASA অনুপাত** — মোট আমানতের অংশ হিসেবে চলতি ও সঞ্চয়ী আমানত। CASA সস্তা তহবিল; মেয়াদি আমানত ব্যয়বহুল। **উচ্চ CASA অনুপাত ফ্র্যাঞ্চাইজি মানের এমন কয়েকটি নির্দেশকের একটি যা সত্যিই নকল করা কঠিন**, কারণ এটি প্রতিফলিত করে গ্রাহকরা ব্যাংকে লেনদেনের ব্যালান্স রাখেন কি না।

**খরচ-আয় অনুপাত** — পরিচালন আয়ের বিপরীতে পরিচালন ব্যয়। ~৪৫%-এর নিচে দক্ষ; ~৬০%-এর ওপরে স্ফীত ব্যয়ভিত্তি বা দুর্বল রাজস্ব নির্দেশ করে।

### সুদহার সীমার পর্ব

বাংলাদেশ এক সময়ের জন্য ৯% ঋণ সীমা ও ৬% আমানত মেঝে আরোপ করেছিল। যান্ত্রিক প্রভাবটি সুনির্দিষ্টভাবে বলা দরকার, কারণ এটি দেখায় নীতি কীভাবে একটি সম্পূর্ণ খাতের অর্থনীতি পুনর্গঠন করে:

- সর্বোচ্চ ব্যবধান **খরচের আগে ৩%**-এ সংকুচিত হয়।
- প্রায় ৫০% খরচ-আয় অনুপাত ও চাপগ্রস্ত খাতায় ঋণ ব্যয় থাকলে ঐ ব্যবধান খুব বেশি কিছু ঢাকে না।
- ব্যাংকগুলো পরিমাণের পেছনে ছোটে, অর্থাৎ **এমন ঋণগ্রহীতাদের আরও বেশি ধার দেয় যারা ইতিমধ্যেই চাপ দেখিয়েছে**।
- এটি ঝুঁকিভিত্তিক মূল্য নির্ধারণও সম্পূর্ণ সরিয়ে দেয়: ব্যাংক ঝুঁকিপূর্ণ ঋণগ্রহীতার কাছে বেশি নিতে পারে না, তাই যুক্তিসঙ্গত পদক্ষেপ হলো ঝুঁকিপূর্ণ ঋণগ্রহীতা এড়ানো — অথবা প্রবৃদ্ধি দরকার হলে অর্থ না পেয়েই ঝুঁকি নেওয়া।

**সুদহারের সীমা ঋণকে সস্তা করে না। এটি বদলে দেয় কে ঋণ পাবে এবং ফলস্বরূপ ক্ষতি কীভাবে বণ্টিত হবে।** এটি অধ্যায় ২-এর সার্কিট ব্রেকার ও অধ্যায় ৬-এর ফ্লোর প্রাইসেরই শিক্ষা: যে হস্তক্ষেপ একটি দাম নির্ধারণ করে তা অন্তর্নিহিত চাপ দূর করে না, তাকে স্থানান্তরিত করে।

### ডিএসই-র ব্যাংক কেন বুক ভ্যালুর নিচে লেনদেন হয়

অধ্যায় ১৮ ডিএসই ব্যাংকগুলোজুড়ে স্থায়ী মূল্য-থেকে-বুক ছাড়ের কথা বলেছে। এই অধ্যায় তার ব্যাখ্যা দেয়।

বাজার যদি বিশ্বাস করে চাপগ্রস্ত সম্পদ প্রতিবেদিত NPL-এর দুই থেকে তিন গুণ, এবং সৎ প্রভিশনিং ইকুইটির বড় অংশ খেয়ে ফেলবে, তবে **০.৬ P/B কোনো ভুল মূল্যায়ন নয়। এটি সমন্বিত বুক ভ্যালু সম্পর্কে বাজারের অনুমান।** §২৩.৫-এর পাটিগণিত তা স্পষ্ট করে।

ছাড়টি *অত্যধিক* কি না তা একটি প্রকৃত বিশ্লেষণী প্রশ্ন। কিন্তু যে বিনিয়োগকারী চাপগ্রস্ত খাতা পুনর্গঠন না করেই "সস্তা বলে" ০.৬ গুণ বুকে একটি ব্যাংক কেনেন, তিনি কোনো সুযোগ চিহ্নিত করেননি — তিনি কেবল সেই কাজটি করেননি যা ছাড়টি তৈরি করেছে।`,
    },

    simple: {
      en: `A bank is not a factory. It does not make anything.

It borrows money from you — that is your deposit — and lends it to someone else at a higher rate. The difference is its income.

Two things follow, and both matter enormously.

**First, a bank runs on very little of its own money.** For every 100 taka on its balance sheet, roughly 8 taka belongs to the shareholders and 92 taka belongs to depositors and lenders.

So if 8 taka out of every 100 lent is never repaid, **the shareholders' money is gone.** Not reduced. Gone. That is the whole risk of a bank in one sentence.

**Second, the only question that matters is: will the loans be repaid?** Everything else — branches, profits, growth, the chairman's speech — is downstream of that one question.

### And here is where it gets uncomfortable

The bank publishes a "bad loan" number. Suppose it says 8%.

That number leaves out three things:

- **Loans that went bad and were then rescheduled.** The borrower stopped paying, the bank gave them a new, easier schedule, and the loan is now officially "good" again. Nothing was repaid.
- **Loans that were written off.** The bank gave up on them and removed them from the books entirely. Because they are off the books, they are not in the bad-loan percentage either. **Giving up on a loan improves the bank's reported number.**
- **Loans where the borrower got a court order** preventing the bank from calling them bad.

Add those back and 8% can become 20% or more.

**The published number is not a lie.** It follows the rules exactly. It just is not a measure of how many loans are bad.

### So why do bank shares trade so cheap?

You will notice most Bangladeshi bank shares trade below their stated book value — sometimes at 0.6 times.

Beginners see this and think: *the market is being irrational, this is a bargain.*

Usually it is not. The market has worked out roughly what this chapter shows you how to compute — that if the bank honestly provisioned for its real bad loans, a large chunk of the shareholders' money would disappear. **The discount is not a mistake. It is an estimate.**

Your job is not to be excited by the discount. It is to do the arithmetic yourself and decide whether the market's estimate is too harsh, about right, or not harsh enough.`,
      bn: `ব্যাংক কারখানা নয়। এটি কিছুই বানায় না।

এটি আপনার কাছ থেকে টাকা ধার নেয় — সেটিই আপনার আমানত — এবং উঁচু হারে অন্য কাউকে ধার দেয়। পার্থক্যটিই এর আয়।

এ থেকে দুটি জিনিস আসে, আর দুটোই অত্যন্ত গুরুত্বপূর্ণ।

**প্রথমত, ব্যাংক নিজের খুব সামান্য টাকায় চলে।** এর স্থিতিপত্রের প্রতি ১০০ টাকার মধ্যে প্রায় ৮ টাকা শেয়ারহোল্ডারদের আর ৯২ টাকা আমানতকারী ও ঋণদাতাদের।

তাই ধার দেওয়া প্রতি ১০০ টাকার ৮ টাকা যদি কখনো ফেরত না আসে, **শেয়ারহোল্ডারদের টাকা শেষ।** কমে যায়নি। শেষ। এক বাক্যে এটিই ব্যাংকের পুরো ঝুঁকি।

**দ্বিতীয়ত, একমাত্র যে প্রশ্ন গুরুত্বপূর্ণ তা হলো: ঋণগুলো কি শোধ হবে?** বাকি সবকিছু — শাখা, মুনাফা, প্রবৃদ্ধি, চেয়ারম্যানের বক্তৃতা — ঐ একটি প্রশ্নের অধীন।

### আর এখানেই অস্বস্তিকর হয়ে ওঠে

ব্যাংক একটি "খারাপ ঋণ" সংখ্যা প্রকাশ করে। ধরুন এটি বলে ৮%।

ঐ সংখ্যা তিনটি জিনিস বাদ দেয়:

- **যে ঋণ খারাপ হয়েছিল এবং তারপর পুনঃতফসিল হয়েছে।** ঋণগ্রহীতা টাকা দেওয়া বন্ধ করেছিলেন, ব্যাংক তাঁকে নতুন সহজ সময়সূচি দিয়েছে, আর ঋণটি এখন সরকারিভাবে আবার "ভালো"। কিছুই শোধ হয়নি।
- **যে ঋণ অবলোপন হয়েছে।** ব্যাংক আশা ছেড়ে দিয়ে সেগুলো খাতা থেকে সম্পূর্ণ সরিয়ে দিয়েছে। খাতার বাইরে থাকায় সেগুলো খারাপ-ঋণের শতাংশেও নেই। **একটি ঋণের আশা ছেড়ে দিলে ব্যাংকের প্রতিবেদিত সংখ্যা উন্নত হয়।**
- **যে ঋণে ঋণগ্রহীতা আদালতের আদেশ এনেছেন** যা ব্যাংককে সেগুলো খারাপ বলতে বাধা দেয়।

এগুলো যোগ করলে ৮% হয়ে যেতে পারে ২০% বা তার বেশি।

**প্রকাশিত সংখ্যাটি মিথ্যা নয়।** এটি নিয়ম হুবহু মেনে চলে। এটি কেবল কতগুলো ঋণ খারাপ তার পরিমাপ নয়।

### তাহলে ব্যাংকের শেয়ার এত সস্তা কেন?

আপনি লক্ষ করবেন বাংলাদেশের বেশিরভাগ ব্যাংকের শেয়ার তাদের ঘোষিত বুক ভ্যালুর নিচে লেনদেন হয় — কখনো ০.৬ গুণে।

নতুনরা এটি দেখে ভাবেন: *বাজার অযৌক্তিক আচরণ করছে, এটি একটি সুযোগ।*

সাধারণত তা নয়। এই অধ্যায় আপনাকে যা গণনা করতে শেখায় বাজার মোটামুটি তা বের করে ফেলেছে — যে ব্যাংকটি যদি তার প্রকৃত খারাপ ঋণের জন্য সৎভাবে প্রভিশন রাখত, শেয়ারহোল্ডারদের টাকার বড় একটি অংশ উবে যেত। **ছাড়টি ভুল নয়। এটি একটি অনুমান।**

আপনার কাজ ছাড় দেখে উত্তেজিত হওয়া নয়। আপনার কাজ নিজে পাটিগণিতটি করা এবং সিদ্ধান্ত নেওয়া যে বাজারের অনুমান অতি কঠোর, মোটামুটি ঠিক, না যথেষ্ট কঠোর নয়।`,
    },

    example: {
      en: `### Reconstructing a bank's real book

A DSE-listed bank, figures in BDT crore:

| Reported | Value |
|---|---|
| Total loans and advances | 45,000 |
| Reported NPL | 3,600 |
| **Reported NPL ratio** | **8.00%** |
| Provisions held | 1,980 |
| Provision coverage | 55.0% |
| Shareholders' equity | 3,200 |
| Shares outstanding | 120 crore |
| Market price | BDT 16.00 |

At first glance this is a mid-quality bank: 8% NPL is high but not exceptional by DSE standards, and coverage of 55% is unremarkable rather than alarming.

**Now read the notes to the accounts.**

| Disclosed elsewhere | Value |
|---|---|
| Rescheduled loans outstanding | 4,200 |
| Written-off loans (off balance sheet) | 2,600 |
| Loans under court injunction | 900 |

$$\\text{Stressed Assets} = 3{,}600 + 4{,}200 + 2{,}600 + 900 = 11{,}300$$

$$\\text{Stressed Ratio} = \\frac{11{,}300}{45{,}000 + 2{,}600} \\times 100 = 23.74\\%$$

*(Written-off loans are added back to the denominator as well, since they were removed from it when written off.)*

**The reported 8.00% is a 23.74% problem. The understatement factor is 2.97×.**

### What honest provisioning does to equity

Assume a 40% ultimate loss rate across the stressed pool — conservative for rescheduled loans, arguably generous for written-off ones.

$$\\text{Required Provision} = 11{,}300 \\times 0.40 = 4{,}520$$
$$\\text{Shortfall} = 4{,}520 - 1{,}980 = 2{,}540$$
$$\\text{Adjusted Equity} = 3{,}200 - 2{,}540 = 660$$

**79.4% of shareholders' equity is consumed.**

### And now the valuation reconciles

| | Reported | Adjusted |
|---|---|---|
| Equity (crore) | 3,200 | 660 |
| NAV per share | BDT 26.67 | **BDT 5.50** |
| Market price | BDT 16.00 | BDT 16.00 |
| **P/B** | **0.60×** | **2.91×** |

**This is the entire point of the chapter.**

On reported book the share trades at 0.60× — apparently a deep-value opportunity, the kind that fills stock-tip groups.

On reconstructed book it trades at **2.91×** — expensive for a leveraged institution with a quarter of its loan book impaired.

**The market is not mispricing this bank. The market is pricing the adjusted book and the investor reading the headline P/B is the one who is confused.**

### Where judgement genuinely enters

Do not read the above as "all DSE banks are worth less than book." The 40% loss assumption drives everything, and it is an assumption:

| Loss rate assumed | Adjusted equity | Adjusted NAV | Adjusted P/B |
|---|---|---|---|
| 20% | 3,200 − 280 = 2,920 | 24.33 | 0.66× |
| 30% | 3,200 − 1,410 = 1,790 | 14.92 | 1.07× |
| **40%** | **660** | **5.50** | **2.91×** |
| 50% | negative | — | equity gone |

At a 20% loss rate the shares are genuinely cheap. At 50% the equity is gone entirely. **The valuation is not a number; it is a function of a recovery assumption you must defend.**

This is why the chapter's discipline is to *build the table*, not to reach a verdict. Publish your assumed loss rate alongside your conclusion, and be honest that it is the whole answer.

### What separates a good bank from a bad one

Run two banks through the same lens:

| | Bank A | Bank B |
|---|---|---|
| Reported NPL | 8.0% | 3.1% |
| Stressed ratio | 23.7% | 6.4% |
| Understatement factor | 2.97× | 2.06× |
| Provision coverage | 55% | 112% |
| CAR | 12.7% | 15.9% |
| CASA ratio | 24% | 51% |
| Cost-to-income | 62% | 41% |
| P/B | 0.60× | 1.35× |

Bank B's premium is earned, not sentimental. Its CASA of 51% means half its funding is cheap and sticky — the hardest thing on this table to fabricate. Coverage above 100% means it has already provisioned beyond its classified book. Its stressed ratio is a third of Bank A's.

**Bank B at 1.35× book may well be cheaper than Bank A at 0.60×.** Price-to-book is a ratio of price to a number, and this chapter is about how unreliable that number is.`,
      bn: `### একটি ব্যাংকের প্রকৃত খাতা পুনর্গঠন

ডিএসই-তে তালিকাভুক্ত একটি ব্যাংক, কোটি টাকায়:

| প্রতিবেদিত | মান |
|---|---|
| মোট ঋণ ও অগ্রিম | ৪৫,০০০ |
| প্রতিবেদিত NPL | ৩,৬০০ |
| **প্রতিবেদিত NPL অনুপাত** | **৮.০০%** |
| রক্ষিত প্রভিশন | ১,৯৮০ |
| প্রভিশন কভারেজ | ৫৫.০% |
| শেয়ারহোল্ডারদের ইকুইটি | ৩,২০০ |
| বকেয়া শেয়ার | ১২০ কোটি |
| বাজারমূল্য | ১৬.০০ টাকা |

প্রথম দেখায় এটি মাঝারি মানের ব্যাংক: ৮% NPL উঁচু কিন্তু ডিএসই-র মানদণ্ডে অস্বাভাবিক নয়, আর ৫৫% কভারেজ উদ্বেগজনক নয় বরং সাধারণ।

**এবার হিসাবের নোটগুলো পড়ুন।**

| অন্যত্র প্রকাশিত | মান |
|---|---|
| পুনঃতফসিলকৃত বকেয়া ঋণ | ৪,২০০ |
| অবলোপনকৃত ঋণ (স্থিতিপত্রের বাইরে) | ২,৬০০ |
| আদালতের নিষেধাজ্ঞাধীন ঋণ | ৯০০ |

$$\\text{চাপগ্রস্ত সম্পদ} = 3{,}600 + 4{,}200 + 2{,}600 + 900 = 11{,}300$$

$$\\text{চাপগ্রস্ত অনুপাত} = \\frac{11{,}300}{45{,}000 + 2{,}600} \\times 100 = 23.74\\%$$

*(অবলোপনকৃত ঋণ হরেও ফিরিয়ে যোগ করা হয়েছে, কারণ অবলোপনের সময় সেগুলো হর থেকে সরানো হয়েছিল।)*

**প্রতিবেদিত ৮.০০% আসলে ২৩.৭৪%-এর সমস্যা। কম দেখানোর গুণক ২.৯৭×।**

### সৎ প্রভিশনিং ইকুইটিতে কী করে

চাপগ্রস্ত পুলজুড়ে ৪০% চূড়ান্ত ক্ষতির হার ধরুন — পুনঃতফসিলকৃত ঋণের জন্য রক্ষণশীল, অবলোপনকৃতের জন্য বরং উদার।

$$\\text{প্রয়োজনীয় প্রভিশন} = 11{,}300 \\times 0.40 = 4{,}520$$
$$\\text{ঘাটতি} = 4{,}520 - 1{,}980 = 2{,}540$$
$$\\text{সমন্বিত ইকুইটি} = 3{,}200 - 2{,}540 = 660$$

**শেয়ারহোল্ডারদের ইকুইটির ৭৯.৪% নিঃশেষিত।**

### আর এবার মূল্যায়ন মিলে যায়

| | প্রতিবেদিত | সমন্বিত |
|---|---|---|
| ইকুইটি (কোটি) | ৩,২০০ | ৬৬০ |
| শেয়ারপ্রতি NAV | ২৬.৬৭ টাকা | **৫.৫০ টাকা** |
| বাজারমূল্য | ১৬.০০ টাকা | ১৬.০০ টাকা |
| **P/B** | **০.৬০×** | **২.৯১×** |

**এটিই অধ্যায়ের সম্পূর্ণ উদ্দেশ্য।**

প্রতিবেদিত বুকে শেয়ারটি ০.৬০ গুণে লেনদেন হয় — আপাতদৃষ্টিতে গভীর মূল্যের সুযোগ, যে ধরনের খবরে স্টক-টিপ গ্রুপ ভরে যায়।

পুনর্গঠিত বুকে এটি লেনদেন হয় **২.৯১ গুণে** — ঋণের খাতার এক-চতুর্থাংশ ক্ষতিগ্রস্ত একটি লিভারেজড প্রতিষ্ঠানের জন্য ব্যয়বহুল।

**বাজার এই ব্যাংকের ভুল মূল্যায়ন করছে না। বাজার সমন্বিত বুকের দাম দিচ্ছে, আর যিনি শিরোনামের P/B পড়ছেন তিনিই বিভ্রান্ত।**

### বিচারবুদ্ধি আসলে কোথায় ঢোকে

উপরেরটিকে "ডিএসই-র সব ব্যাংকের দাম বুকের নিচে" হিসেবে পড়বেন না। ৪০% ক্ষতির অনুমানই সবকিছু চালাচ্ছে, আর এটি একটি অনুমান:

| অনুমিত ক্ষতির হার | সমন্বিত ইকুইটি | সমন্বিত NAV | সমন্বিত P/B |
|---|---|---|---|
| ২০% | ৩,২০০ − ২৮০ = ২,৯২০ | ২৪.৩৩ | ০.৬৬× |
| ৩০% | ৩,২০০ − ১,৪১০ = ১,৭৯০ | ১৪.৯২ | ১.০৭× |
| **৪০%** | **৬৬০** | **৫.৫০** | **২.৯১×** |
| ৫০% | ঋণাত্মক | — | ইকুইটি শেষ |

২০% ক্ষতির হারে শেয়ারটি সত্যিই সস্তা। ৫০%-এ ইকুইটি সম্পূর্ণ শেষ। **মূল্যায়নটি কোনো সংখ্যা নয়; এটি একটি আদায়ের অনুমানের ফাংশন যা আপনাকে সমর্থন করতে হবে।**

এ কারণেই অধ্যায়ের শৃঙ্খলা হলো *টেবিলটি তৈরি করা*, কোনো রায়ে পৌঁছানো নয়। আপনার উপসংহারের পাশে অনুমিত ক্ষতির হার প্রকাশ করুন, এবং সৎভাবে স্বীকার করুন যে ওটিই পুরো উত্তর।

### ভালো ব্যাংককে খারাপ ব্যাংক থেকে কী আলাদা করে

একই দৃষ্টিতে দুটি ব্যাংক চালান:

| | ব্যাংক ক | ব্যাংক খ |
|---|---|---|
| প্রতিবেদিত NPL | ৮.০% | ৩.১% |
| চাপগ্রস্ত অনুপাত | ২৩.৭% | ৬.৪% |
| কম দেখানোর গুণক | ২.৯৭× | ২.০৬× |
| প্রভিশন কভারেজ | ৫৫% | ১১২% |
| CAR | ১২.৭% | ১৫.৯% |
| CASA অনুপাত | ২৪% | ৫১% |
| খরচ-আয় | ৬২% | ৪১% |
| P/B | ০.৬০× | ১.৩৫× |

ব্যাংক খ-এর প্রিমিয়াম অর্জিত, আবেগপ্রসূত নয়। এর ৫১% CASA মানে তার অর্ধেক তহবিল সস্তা ও স্থিতিশীল — এই টেবিলের সবচেয়ে কঠিন-নকলযোগ্য জিনিস। ১০০%-এর ওপরে কভারেজ মানে এটি ইতিমধ্যেই শ্রেণিবদ্ধ খাতার বাইরেও প্রভিশন রেখেছে। এর চাপগ্রস্ত অনুপাত ব্যাংক ক-এর এক-তৃতীয়াংশ।

**১.৩৫ গুণ বুকে ব্যাংক খ ০.৬০ গুণে ব্যাংক ক-এর চেয়ে সস্তা হতে পারে।** মূল্য-থেকে-বুক হলো একটি সংখ্যার সঙ্গে দামের অনুপাত, আর এই অধ্যায় ঐ সংখ্যাটি কতটা অনির্ভরযোগ্য তা নিয়ে।`,
    },

    formula: {
      en: `**Reported NPL ratio:**
$$NPL\\% = \\frac{\\text{SS} + \\text{DF} + \\text{BL}}{\\text{Total Loans}} \\times 100$$

**Provision coverage:**
$$\\text{Coverage} = \\frac{\\text{Provisions Held}}{\\text{NPL}} \\times 100$$

**Net NPL** — what remains unprovided:
$$NPL_{net} = \\frac{\\text{NPL} - \\text{Provisions}}{\\text{Total Loans} - \\text{Provisions}} \\times 100$$

**Stressed assets** — the number the annual report does not print:
$$S = \\text{NPL} + \\text{Rescheduled} + \\text{Written-off} + \\text{Enjoined}$$

$$\\text{Stressed Ratio} = \\frac{S}{\\text{Total Loans} + \\text{Written-off}} \\times 100$$

Written-off loans are restored to the denominator because they were removed from it on write-off.

**Understatement factor:**
$$U = \\frac{\\text{Stressed Ratio}}{\\text{Reported NPL Ratio}}$$

**Adjusted equity** at an assumed ultimate loss rate $L$:
$$E_{adj} = E - \\max(0, \\; S \\cdot L - \\text{Provisions Held})$$

**Adjusted NAV and P/B:**
$$NAV_{adj} = \\frac{E_{adj}}{\\text{Shares}}, \\qquad P/B_{adj} = \\frac{\\text{Price}}{NAV_{adj}}$$

**Break-even loss rate** — the rate at which adjusted equity reaches zero:
$$L^* = \\frac{E + \\text{Provisions Held}}{S}$$

This is the most useful single number in the chapter: **it states how bad the stressed book must be before the equity is gone.**

**Capital adequacy:**
$$CAR = \\frac{\\text{Tier 1} + \\text{Tier 2}}{\\text{Risk-Weighted Assets}} \\times 100$$

**Net interest margin:**
$$NIM = \\frac{\\text{Interest Income} - \\text{Interest Expense}}{\\text{Average Earning Assets}} \\times 100$$

**CASA ratio:**
$$CASA = \\frac{\\text{Current} + \\text{Savings Deposits}}{\\text{Total Deposits}} \\times 100$$

**Cost-to-income:**
$$CI = \\frac{\\text{Operating Expense}}{\\text{Operating Income}} \\times 100$$`,
      bn: `**প্রতিবেদিত NPL অনুপাত:**
$$NPL\\% = \\frac{\\text{SS} + \\text{DF} + \\text{BL}}{\\text{মোট ঋণ}} \\times 100$$

**প্রভিশন কভারেজ:**
$$\\text{কভারেজ} = \\frac{\\text{রক্ষিত প্রভিশন}}{\\text{NPL}} \\times 100$$

**নিট NPL** — যা প্রভিশনবিহীন থাকে:
$$NPL_{net} = \\frac{\\text{NPL} - \\text{প্রভিশন}}{\\text{মোট ঋণ} - \\text{প্রভিশন}} \\times 100$$

**চাপগ্রস্ত সম্পদ** — যে সংখ্যা বার্ষিক প্রতিবেদন ছাপে না:
$$S = \\text{NPL} + \\text{পুনঃতফসিলকৃত} + \\text{অবলোপনকৃত} + \\text{নিষেধাজ্ঞাধীন}$$

$$\\text{চাপগ্রস্ত অনুপাত} = \\frac{S}{\\text{মোট ঋণ} + \\text{অবলোপনকৃত}} \\times 100$$

অবলোপনকৃত ঋণ হরে ফিরিয়ে আনা হয় কারণ অবলোপনের সময় সেগুলো হর থেকে সরানো হয়েছিল।

**কম দেখানোর গুণক:**
$$U = \\frac{\\text{চাপগ্রস্ত অনুপাত}}{\\text{প্রতিবেদিত NPL অনুপাত}}$$

অনুমিত চূড়ান্ত ক্ষতির হার $L$-এ **সমন্বিত ইকুইটি**:
$$E_{adj} = E - \\max(0, \\; S \\cdot L - \\text{রক্ষিত প্রভিশন})$$

**সমন্বিত NAV ও P/B:**
$$NAV_{adj} = \\frac{E_{adj}}{\\text{শেয়ার}}, \\qquad P/B_{adj} = \\frac{\\text{দাম}}{NAV_{adj}}$$

**ব্রেক-ইভেন ক্ষতির হার** — যে হারে সমন্বিত ইকুইটি শূন্যে পৌঁছায়:
$$L^* = \\frac{E + \\text{রক্ষিত প্রভিশন}}{S}$$

এটিই অধ্যায়ের সবচেয়ে কার্যকর একক সংখ্যা: **এটি বলে ইকুইটি শেষ হওয়ার আগে চাপগ্রস্ত খাতা কতটা খারাপ হতে হবে।**

**মূলধন পর্যাপ্ততা:**
$$CAR = \\frac{\\text{Tier 1} + \\text{Tier 2}}{\\text{ঝুঁকি-ভারিত সম্পদ}} \\times 100$$

**নিট সুদ মার্জিন:**
$$NIM = \\frac{\\text{সুদ আয়} - \\text{সুদ ব্যয}}{\\text{গড় আয়কারী সম্পদ}} \\times 100$$

**CASA অনুপাত:**
$$CASA = \\frac{\\text{চলতি} + \\text{সঞ্চয়ী আমানত}}{\\text{মোট আমানত}} \\times 100$$

**খরচ-আয়:**
$$CI = \\frac{\\text{পরিচালন ব্যয়}}{\\text{পরিচালন আয়}} \\times 100$$`,
    },

    manual: {
      en: `**Scenario.** The bank from §23.3. All figures in BDT crore.

Total loans 45,000 · Reported NPL 3,600 · Provisions 1,980 · Equity 3,200 · Shares 120 crore · Price BDT 16.00
Rescheduled 4,200 · Written-off 2,600 · Enjoined 900

**Step 1 — Reported NPL ratio:**
$$\\frac{3{,}600}{45{,}000} \\times 100 = 8.00\\%$$

**Step 2 — Provision coverage:**
$$\\frac{1{,}980}{3{,}600} \\times 100 = 55.00\\%$$

**Step 3 — Net NPL:**
$$\\frac{3{,}600 - 1{,}980}{45{,}000 - 1{,}980} \\times 100 = \\frac{1{,}620}{43{,}020} \\times 100 = 3.77\\%$$

**Step 4 — Stressed assets:**
$$S = 3{,}600 + 4{,}200 + 2{,}600 + 900 = 11{,}300$$

**Step 5 — Stressed ratio,** restoring written-offs to the denominator:
$$\\frac{11{,}300}{45{,}000 + 2{,}600} \\times 100 = \\frac{11{,}300}{47{,}600} \\times 100 = 23.74\\%$$

**Step 6 — Understatement factor:**
$$U = \\frac{23.74}{8.00} = 2.97\\times$$

**Step 7 — Break-even loss rate.** Before assuming anything, ask what the book must lose to erase equity:
$$L^* = \\frac{3{,}200 + 1{,}980}{11{,}300} = \\frac{5{,}180}{11{,}300} = 45.84\\%$$

**A 45.84% loss on the stressed pool wipes out shareholders entirely.** State this before you state a valuation, because it frames every other number.

**Step 8 — Required provision at an assumed 40% loss:**
$$11{,}300 \\times 0.40 = 4{,}520$$

**Step 9 — Shortfall:**
$$4{,}520 - 1{,}980 = 2{,}540$$

**Step 10 — Adjusted equity:**
$$3{,}200 - 2{,}540 = 660$$

**Step 11 — Equity consumed:**
$$\\frac{2{,}540}{3{,}200} \\times 100 = 79.38\\%$$

**Step 12 — NAV per share, both ways:**
$$NAV_{reported} = \\frac{3{,}200}{120} = \\text{BDT } 26.67$$
$$NAV_{adjusted} = \\frac{660}{120} = \\text{BDT } 5.50$$

**Step 13 — P/B, both ways:**
$$P/B_{reported} = \\frac{16.00}{26.67} = 0.60\\times$$
$$P/B_{adjusted} = \\frac{16.00}{5.50} = 2.91\\times$$

**Interpretation.**

The headline says 0.60× book — the number that appears in screeners, WhatsApp groups, and broker "value pick" lists. The reconstructed number says 2.91×.

**Note carefully what has and has not been demonstrated.** I have not shown the bank is worthless, and I have not shown the market is right. I have shown that **the reported P/B is uninformative**, and that the honest range depends entirely on a loss assumption spanning 0.66× to insolvency.

The break-even of **45.84%** in Step 7 is the number to carry away. It converts an unbounded worry into a testable proposition: *do I believe this bank will lose more or less than 46% of its stressed pool?* That question can be argued with evidence — recovery rates on rescheduled loans, collateral quality, the identity of the large borrowers. The question "is 0.60× cheap?" cannot.`,
      bn: `**পরিস্থিতি।** §২৩.৩-এর ব্যাংক। সব সংখ্যা কোটি টাকায়।

মোট ঋণ ৪৫,০০০ · প্রতিবেদিত NPL ৩,৬০০ · প্রভিশন ১,৯৮০ · ইকুইটি ৩,২০০ · শেয়ার ১২০ কোটি · দাম ১৬.০০ টাকা
পুনঃতফসিলকৃত ৪,২০০ · অবলোপনকৃত ২,৬০০ · নিষেধাজ্ঞাধীন ৯০০

**ধাপ ১ — প্রতিবেদিত NPL অনুপাত:**
$$\\frac{3{,}600}{45{,}000} \\times 100 = 8.00\\%$$

**ধাপ ২ — প্রভিশন কভারেজ:**
$$\\frac{1{,}980}{3{,}600} \\times 100 = 55.00\\%$$

**ধাপ ৩ — নিট NPL:**
$$\\frac{3{,}600 - 1{,}980}{45{,}000 - 1{,}980} \\times 100 = 3.77\\%$$

**ধাপ ৪ — চাপগ্রস্ত সম্পদ:**
$$S = 3{,}600 + 4{,}200 + 2{,}600 + 900 = 11{,}300$$

**ধাপ ৫ — চাপগ্রস্ত অনুপাত,** হরে অবলোপনকৃত ফিরিয়ে এনে:
$$\\frac{11{,}300}{47{,}600} \\times 100 = 23.74\\%$$

**ধাপ ৬ — কম দেখানোর গুণক:**
$$U = \\frac{23.74}{8.00} = 2.97\\times$$

**ধাপ ৭ — ব্রেক-ইভেন ক্ষতির হার।** কিছু অনুমান করার আগে জিজ্ঞেস করুন ইকুইটি মুছতে খাতাটিকে কত হারাতে হবে:
$$L^* = \\frac{3{,}200 + 1{,}980}{11{,}300} = 45.84\\%$$

**চাপগ্রস্ত পুলে ৪৫.৮৪% ক্ষতি শেয়ারহোল্ডারদের সম্পূর্ণ মুছে দেয়।** কোনো মূল্যায়ন বলার আগে এটি বলুন, কারণ এটি বাকি প্রতিটি সংখ্যার কাঠামো ঠিক করে।

**ধাপ ৮ — অনুমিত ৪০% ক্ষতিতে প্রয়োজনীয় প্রভিশন:**
$$11{,}300 \\times 0.40 = 4{,}520$$

**ধাপ ৯ — ঘাটতি:**
$$4{,}520 - 1{,}980 = 2{,}540$$

**ধাপ ১০ — সমন্বিত ইকুইটি:**
$$3{,}200 - 2{,}540 = 660$$

**ধাপ ১১ — নিঃশেষিত ইকুইটি:**
$$\\frac{2{,}540}{3{,}200} \\times 100 = 79.38\\%$$

**ধাপ ১২ — শেয়ারপ্রতি NAV, দুই পদ্ধতিতে:**
$$NAV_{প্রতিবেদিত} = \\frac{3{,}200}{120} = ২৬.৬৭ \\text{ টাকা}$$
$$NAV_{সমন্বিত} = \\frac{660}{120} = ৫.৫০ \\text{ টাকা}$$

**ধাপ ১৩ — P/B, দুই পদ্ধতিতে:**
$$P/B_{প্রতিবেদিত} = \\frac{16.00}{26.67} = 0.60\\times$$
$$P/B_{সমন্বিত} = \\frac{16.00}{5.50} = 2.91\\times$$

**ব্যাখ্যা।**

শিরোনাম বলে ০.৬০ গুণ বুক — যে সংখ্যা স্ক্রিনার, হোয়াটসঅ্যাপ গ্রুপ ও ব্রোকারের "ভ্যালু পিক" তালিকায় দেখা যায়। পুনর্গঠিত সংখ্যা বলে ২.৯১ গুণ।

**কী দেখানো হয়েছে আর কী হয়নি তা মনোযোগ দিয়ে লক্ষ করুন।** আমি দেখাইনি ব্যাংকটি মূল্যহীন, আর দেখাইনি বাজার সঠিক। আমি দেখিয়েছি যে **প্রতিবেদিত P/B তথ্যহীন**, এবং সৎ পরিসরটি সম্পূর্ণভাবে একটি ক্ষতির অনুমানের ওপর নির্ভরশীল যা ০.৬৬ গুণ থেকে দেউলিয়াত্ব পর্যন্ত বিস্তৃত।

ধাপ ৭-এর **৪৫.৮৪%** ব্রেক-ইভেনই বয়ে নিয়ে যাওয়ার সংখ্যা। এটি একটি সীমাহীন উদ্বেগকে একটি পরীক্ষণযোগ্য প্রস্তাবে রূপান্তরিত করে: *আমি কি বিশ্বাস করি এই ব্যাংক তার চাপগ্রস্ত পুলের ৪৬%-এর বেশি না কম হারাবে?* ঐ প্রশ্ন প্রমাণ দিয়ে তর্ক করা যায় — পুনঃতফসিলকৃত ঋণে আদায়ের হার, জামানতের মান, বড় ঋণগ্রহীতাদের পরিচয়। "০.৬০ গুণ কি সস্তা?" প্রশ্নটি যায় না।`,
    },

    excel: {
      en: `\`\`\`
A1:  — Reported Position (BDT crore) —
A2:  Total Loans & Advances          B2:  45000
A3:  Reported NPL                    B3:  3600
A4:  Reported NPL Ratio (%)          B4:  =B3/B2*100
A5:  Provisions Held                 B5:  1980
A6:  Provision Coverage (%)          B6:  =B5/B3*100

A8:  — What Reported NPL Excludes —
A9:  Rescheduled Loans Outstanding   B9:  4200
A10: Written-off Loans (off B/S)     B10: 2600
A11: Loans Under Court Injunction    B11: 900
A12: TRUE STRESSED ASSETS            B12: =B3+B9+B10+B11
A13: Stressed Asset Ratio (%)        B13: =B12/(B2+B10)*100
A14: Understatement (x)              B14: =B13/B4

A16: — Equity Impact —
A17: Shareholders Equity             B17: 3200
A18: Assumed Loss Rate on Stress (%) B18: 40
A19: Required Provision              B19: =B12*B18/100
A20: Provision Shortfall             B20: =MAX(0,B19-B5)
A21: Adjusted Equity                 B21: =B17-B20
A22: Equity Wiped (%)                B22: =B20/B17*100

A24: — Valuation Reconciliation —
A25: Shares Outstanding (crore)      B25: 120
A26: Reported NAV per Share          B26: =B17/B25
A27: Adjusted NAV per Share          B27: =B21/B25
A28: Market Price                    B28: 16
A29: Reported P/B                    B29: =B28/B26
A30: Adjusted P/B                    B30: =IF(B27<=0,"NEGATIVE EQUITY",B28/B27)

A32: VERDICT  =IF(B27<=0,"Market discount is justified - adjusted equity is negative",
              IF(B29<0.7,"Discount is pricing the stressed book, not mispricing it",
              "Check CAR and provision coverage before concluding"))
\`\`\`

**Use B18 as a slider, not a setting.** Run it at 20, 30, 40 and 50 and watch B30 move from 0.66× to negative equity. Any conclusion you draw is a conclusion about B18, and you should say so out loud when you state it.

**Add one cell of your own:** the break-even loss rate, \`=(B17+B5)/B12\`. On these inputs it returns 45.84%. That single number reframes the whole analysis from "is it cheap" to "will the stressed book lose more than 46%", which is a question you can actually research.

**B9, B10 and B11 are the work.** They are not on the face of the financial statements — they come from the notes, the Bangladesh Bank disclosures, and sometimes only from the auditor's emphasis-of-matter paragraph. A bank that makes these hard to find has told you something.`,
      bn: `\`\`\`
A1:  — প্রতিবেদিত অবস্থান (কোটি টাকা) —
A2:  মোট ঋণ ও অগ্রিম                  B2:  45000
A3:  প্রতিবেদিত NPL                   B3:  3600
A4:  প্রতিবেদিত NPL অনুপাত (%)         B4:  =B3/B2*100
A5:  রক্ষিত প্রভিশন                    B5:  1980
A6:  প্রভিশন কভারেজ (%)                B6:  =B5/B3*100

A8:  — প্রতিবেদিত NPL যা বাদ দেয় —
A9:  পুনঃতফসিলকৃত বকেয়া ঋণ            B9:  4200
A10: অবলোপনকৃত ঋণ (স্থিতিপত্রের বাইরে)  B10: 2600
A11: আদালতের নিষেধাজ্ঞাধীন ঋণ          B11: 900
A12: প্রকৃত চাপগ্রস্ত সম্পদ            B12: =B3+B9+B10+B11
A13: চাপগ্রস্ত সম্পদ অনুপাত (%)         B13: =B12/(B2+B10)*100
A14: কম দেখানো (গুণ)                   B14: =B13/B4

A16: — ইকুইটি প্রভাব —
A17: শেয়ারহোল্ডারদের ইকুইটি            B17: 3200
A18: চাপে অনুমিত ক্ষতির হার (%)         B18: 40
A19: প্রয়োজনীয় প্রভিশন                B19: =B12*B18/100
A20: প্রভিশন ঘাটতি                     B20: =MAX(0,B19-B5)
A21: সমন্বিত ইকুইটি                    B21: =B17-B20
A22: নিঃশেষিত ইকুইটি (%)               B22: =B20/B17*100

A24: — মূল্যায়ন সমন্বয় —
A25: বকেয়া শেয়ার (কোটি)               B25: 120
A26: প্রতিবেদিত শেয়ারপ্রতি NAV          B26: =B17/B25
A27: সমন্বিত শেয়ারপ্রতি NAV            B27: =B21/B25
A28: বাজারমূল্য                        B28: 16
A29: প্রতিবেদিত P/B                    B29: =B28/B26
A30: সমন্বিত P/B                       B30: =IF(B27<=0,"NEGATIVE EQUITY",B28/B27)

A32: রায়  =IF(B27<=0,"Market discount is justified - adjusted equity is negative",
          IF(B29<0.7,"Discount is pricing the stressed book, not mispricing it",
          "Check CAR and provision coverage before concluding"))
\`\`\`

**B18-কে সেটিং নয়, স্লাইডার হিসেবে ব্যবহার করুন।** ২০, ৩০, ৪০ ও ৫০-এ চালান এবং B30-কে ০.৬৬ গুণ থেকে ঋণাত্মক ইকুইটিতে যেতে দেখুন। আপনি যে উপসংহারই টানুন তা B18 সম্পর্কে একটি উপসংহার, আর তা বলার সময় জোরে বলা উচিত।

**নিজের একটি ঘর যোগ করুন:** ব্রেক-ইভেন ক্ষতির হার, \`=(B17+B5)/B12\`। এই উপাদানে এটি ৪৫.৮৪% দেয়। ঐ একটি সংখ্যা পুরো বিশ্লেষণকে "এটি কি সস্তা" থেকে "চাপগ্রস্ত খাতা কি ৪৬%-এর বেশি হারাবে"-তে পুনর্গঠিত করে, যা আপনি সত্যিই গবেষণা করতে পারেন।

**B9, B10 ও B11-ই আসল কাজ।** এগুলো আর্থিক বিবরণীর সামনে থাকে না — আসে নোট থেকে, বাংলাদেশ ব্যাংকের প্রকাশনা থেকে, আর কখনো কেবল নিরীক্ষকের এমফ্যাসিস-অব-ম্যাটার অনুচ্ছেদ থেকে। যে ব্যাংক এগুলো খুঁজে পাওয়া কঠিন করে রাখে, সে আপনাকে কিছু একটা বলে দিয়েছে।`,
    },

    python: {
      en: `\`\`\`python
"""
Chapter 23 — Reconstructing a bank's stressed book and its effect on equity.
Educational. Classification and provisioning rules change frequently;
verify against current Bangladesh Bank BRPD circulars before real use.
"""
from dataclasses import dataclass


@dataclass
class Bank:
    """A DSE-listed bank, reported figures plus the disclosures that matter."""
    name: str
    total_loans: float          # BDT crore
    reported_npl: float
    provisions_held: float
    rescheduled: float
    written_off: float
    enjoined: float
    equity: float
    shares_crore: float
    price: float
    car_pct: float = 0.0
    casa_pct: float = 0.0
    cost_income_pct: float = 0.0

    # ---- reported view -------------------------------------------------
    @property
    def npl_ratio(self) -> float:
        return self.reported_npl / self.total_loans * 100

    @property
    def provision_coverage(self) -> float:
        return self.provisions_held / self.reported_npl * 100

    @property
    def net_npl_ratio(self) -> float:
        return ((self.reported_npl - self.provisions_held)
                / (self.total_loans - self.provisions_held) * 100)

    # ---- reconstructed view --------------------------------------------
    @property
    def stressed_assets(self) -> float:
        return (self.reported_npl + self.rescheduled
                + self.written_off + self.enjoined)

    @property
    def stressed_ratio(self) -> float:
        """Written-offs restored to the denominator; they were removed on write-off."""
        return self.stressed_assets / (self.total_loans + self.written_off) * 100

    @property
    def understatement(self) -> float:
        return self.stressed_ratio / self.npl_ratio

    @property
    def breakeven_loss_rate(self) -> float:
        """Loss rate on the stressed pool at which equity reaches zero."""
        return (self.equity + self.provisions_held) / self.stressed_assets

    # ---- valuation ------------------------------------------------------
    @property
    def reported_nav(self) -> float:
        return self.equity / self.shares_crore

    @property
    def reported_pb(self) -> float:
        return self.price / self.reported_nav

    def adjusted(self, loss_rate: float) -> dict:
        required = self.stressed_assets * loss_rate
        shortfall = max(0.0, required - self.provisions_held)
        adj_equity = self.equity - shortfall
        adj_nav = adj_equity / self.shares_crore
        return {
            "loss_rate": loss_rate,
            "required_provision": required,
            "shortfall": shortfall,
            "adjusted_equity": adj_equity,
            "equity_wiped_pct": shortfall / self.equity * 100,
            "adjusted_nav": adj_nav,
            "adjusted_pb": self.price / adj_nav if adj_nav > 0 else None,
        }


def report(b: Bank) -> None:
    print(f"=== {b.name} ===")
    print(f"Reported NPL ratio    : {b.npl_ratio:.2f}%")
    print(f"Provision coverage    : {b.provision_coverage:.2f}%")
    print(f"Net NPL ratio         : {b.net_npl_ratio:.2f}%")
    print(f"Stressed assets       : BDT {b.stressed_assets:,.0f} crore")
    print(f"Stressed ratio        : {b.stressed_ratio:.2f}%")
    print(f"Understatement        : {b.understatement:.2f}x")
    print(f"BREAK-EVEN LOSS RATE  : {b.breakeven_loss_rate*100:.2f}%")
    print(f"Reported NAV / P/B    : BDT {b.reported_nav:.2f} / {b.reported_pb:.2f}x")
    print()
    print(f"{'Loss%':>7}{'AdjEquity':>12}{'Wiped%':>9}{'AdjNAV':>9}{'AdjP/B':>9}")
    print("-" * 46)
    for lr in (0.20, 0.30, 0.40, 0.50):
        a = b.adjusted(lr)
        pb = f"{a['adjusted_pb']:.2f}x" if a["adjusted_pb"] else "NEG EQ"
        print(f"{lr*100:>6.0f}%{a['adjusted_equity']:>12,.0f}"
              f"{a['equity_wiped_pct']:>8.1f}%{a['adjusted_nav']:>9.2f}{pb:>9}")
    print()


if __name__ == "__main__":
    bank_a = Bank(
        name="Bank A (stressed)",
        total_loans=45_000, reported_npl=3_600, provisions_held=1_980,
        rescheduled=4_200, written_off=2_600, enjoined=900,
        equity=3_200, shares_crore=120, price=16.00,
        car_pct=12.7, casa_pct=24.0, cost_income_pct=62.0,
    )
    bank_b = Bank(
        name="Bank B (franchise)",
        total_loans=38_000, reported_npl=1_178, provisions_held=1_319,
        rescheduled=900, written_off=380, enjoined=120,
        equity=4_100, shares_crore=95, price=58.30,
        car_pct=15.9, casa_pct=51.0, cost_income_pct=41.0,
    )

    for b in (bank_a, bank_b):
        report(b)

    print("=== Side by side ===")
    print(f"{'Metric':<24}{'Bank A':>12}{'Bank B':>12}")
    print("-" * 48)
    rows = [
        ("Reported NPL %",  bank_a.npl_ratio,        bank_b.npl_ratio),
        ("Stressed ratio %", bank_a.stressed_ratio,  bank_b.stressed_ratio),
        ("Understatement x", bank_a.understatement,  bank_b.understatement),
        ("Coverage %",      bank_a.provision_coverage, bank_b.provision_coverage),
        ("Break-even loss %", bank_a.breakeven_loss_rate*100, bank_b.breakeven_loss_rate*100),
        ("CAR %",           bank_a.car_pct,          bank_b.car_pct),
        ("CASA %",          bank_a.casa_pct,         bank_b.casa_pct),
        ("Cost-to-income %", bank_a.cost_income_pct, bank_b.cost_income_pct),
        ("Reported P/B x",  bank_a.reported_pb,      bank_b.reported_pb),
    ]
    for label, a, c in rows:
        print(f"{label:<24}{a:>12.2f}{c:>12.2f}")
\`\`\`

**Read the break-even loss rate first, before the sensitivity table.** For Bank A it is 45.84%. That single figure converts a vague anxiety into a researchable question: *will this pool lose more than that?* You can argue about recovery rates and collateral. You cannot argue usefully about whether 0.60× is "cheap."

**Bank B returns 210.20%, and that is not a typo — it is the answer.** A break-even above 100% means the stressed pool cannot erase equity *even if every taka of it is lost*, because provisions plus equity already exceed the entire pool. That is why its sensitivity rows are identical at 20/30/40/50%: required provision never exceeds provisions already held, so the shortfall is zero at every rate.

**Read any break-even above 100% as "this pool cannot break this bank."** It is the strongest single result the model can return, and it is why Bank B commands a premium while Bank A trades at a discount.

**Then read the side-by-side.** Bank A trades at 0.60× reported book and Bank B at well above it. Every line above the P/B row explains why, and the CASA gap — 24% against 51% — is the one that is hardest to manufacture. **Bank B is the more expensive share and quite possibly the cheaper asset.**`,
      bn: `\`\`\`python
"""
অধ্যায় ২৩ — একটি ব্যাংকের চাপগ্রস্ত খাতা পুনর্গঠন ও ইকুইটিতে তার প্রভাব।
শিক্ষামূলক। শ্রেণিবিন্যাস ও প্রভিশনিং বিধি ঘন ঘন বদলায়;
প্রকৃত ব্যবহারের আগে বাংলাদেশ ব্যাংকের বর্তমান BRPD সার্কুলারে যাচাই করুন।
"""
from dataclasses import dataclass


@dataclass
class Bank:
    """ডিএসই-তে তালিকাভুক্ত একটি ব্যাংক, প্রতিবেদিত সংখ্যা ও গুরুত্বপূর্ণ প্রকাশনাসহ।"""
    name: str
    total_loans: float          # কোটি টাকা
    reported_npl: float
    provisions_held: float
    rescheduled: float
    written_off: float
    enjoined: float
    equity: float
    shares_crore: float
    price: float
    car_pct: float = 0.0
    casa_pct: float = 0.0
    cost_income_pct: float = 0.0

    # ---- প্রতিবেদিত দৃষ্টি ----------------------------------------------
    @property
    def npl_ratio(self) -> float:
        return self.reported_npl / self.total_loans * 100

    @property
    def provision_coverage(self) -> float:
        return self.provisions_held / self.reported_npl * 100

    @property
    def net_npl_ratio(self) -> float:
        return ((self.reported_npl - self.provisions_held)
                / (self.total_loans - self.provisions_held) * 100)

    # ---- পুনর্গঠিত দৃষ্টি ------------------------------------------------
    @property
    def stressed_assets(self) -> float:
        return (self.reported_npl + self.rescheduled
                + self.written_off + self.enjoined)

    @property
    def stressed_ratio(self) -> float:
        """অবলোপনকৃত হরে ফেরানো হয়েছে; অবলোপনের সময় সরানো হয়েছিল।"""
        return self.stressed_assets / (self.total_loans + self.written_off) * 100

    @property
    def understatement(self) -> float:
        return self.stressed_ratio / self.npl_ratio

    @property
    def breakeven_loss_rate(self) -> float:
        """চাপগ্রস্ত পুলে যে ক্ষতির হারে ইকুইটি শূন্যে পৌঁছায়।"""
        return (self.equity + self.provisions_held) / self.stressed_assets

    # ---- মূল্যায়ন --------------------------------------------------------
    @property
    def reported_nav(self) -> float:
        return self.equity / self.shares_crore

    @property
    def reported_pb(self) -> float:
        return self.price / self.reported_nav

    def adjusted(self, loss_rate: float) -> dict:
        required = self.stressed_assets * loss_rate
        shortfall = max(0.0, required - self.provisions_held)
        adj_equity = self.equity - shortfall
        adj_nav = adj_equity / self.shares_crore
        return {
            "loss_rate": loss_rate,
            "required_provision": required,
            "shortfall": shortfall,
            "adjusted_equity": adj_equity,
            "equity_wiped_pct": shortfall / self.equity * 100,
            "adjusted_nav": adj_nav,
            "adjusted_pb": self.price / adj_nav if adj_nav > 0 else None,
        }


def report(b: Bank) -> None:
    print(f"=== {b.name} ===")
    print(f"Reported NPL ratio    : {b.npl_ratio:.2f}%")
    print(f"Provision coverage    : {b.provision_coverage:.2f}%")
    print(f"Net NPL ratio         : {b.net_npl_ratio:.2f}%")
    print(f"Stressed assets       : BDT {b.stressed_assets:,.0f} crore")
    print(f"Stressed ratio        : {b.stressed_ratio:.2f}%")
    print(f"Understatement        : {b.understatement:.2f}x")
    print(f"BREAK-EVEN LOSS RATE  : {b.breakeven_loss_rate*100:.2f}%")
    print(f"Reported NAV / P/B    : BDT {b.reported_nav:.2f} / {b.reported_pb:.2f}x")
    print()
    print(f"{'Loss%':>7}{'AdjEquity':>12}{'Wiped%':>9}{'AdjNAV':>9}{'AdjP/B':>9}")
    print("-" * 46)
    for lr in (0.20, 0.30, 0.40, 0.50):
        a = b.adjusted(lr)
        pb = f"{a['adjusted_pb']:.2f}x" if a["adjusted_pb"] else "NEG EQ"
        print(f"{lr*100:>6.0f}%{a['adjusted_equity']:>12,.0f}"
              f"{a['equity_wiped_pct']:>8.1f}%{a['adjusted_nav']:>9.2f}{pb:>9}")
    print()


if __name__ == "__main__":
    bank_a = Bank(
        name="Bank A (stressed)",
        total_loans=45_000, reported_npl=3_600, provisions_held=1_980,
        rescheduled=4_200, written_off=2_600, enjoined=900,
        equity=3_200, shares_crore=120, price=16.00,
        car_pct=12.7, casa_pct=24.0, cost_income_pct=62.0,
    )
    bank_b = Bank(
        name="Bank B (franchise)",
        total_loans=38_000, reported_npl=1_178, provisions_held=1_319,
        rescheduled=900, written_off=380, enjoined=120,
        equity=4_100, shares_crore=95, price=58.30,
        car_pct=15.9, casa_pct=51.0, cost_income_pct=41.0,
    )

    for b in (bank_a, bank_b):
        report(b)

    print("=== Side by side ===")
    print(f"{'Metric':<24}{'Bank A':>12}{'Bank B':>12}")
    print("-" * 48)
    rows = [
        ("Reported NPL %",  bank_a.npl_ratio,        bank_b.npl_ratio),
        ("Stressed ratio %", bank_a.stressed_ratio,  bank_b.stressed_ratio),
        ("Understatement x", bank_a.understatement,  bank_b.understatement),
        ("Coverage %",      bank_a.provision_coverage, bank_b.provision_coverage),
        ("Break-even loss %", bank_a.breakeven_loss_rate*100, bank_b.breakeven_loss_rate*100),
        ("CAR %",           bank_a.car_pct,          bank_b.car_pct),
        ("CASA %",          bank_a.casa_pct,         bank_b.casa_pct),
        ("Cost-to-income %", bank_a.cost_income_pct, bank_b.cost_income_pct),
        ("Reported P/B x",  bank_a.reported_pb,      bank_b.reported_pb),
    ]
    for label, a, c in rows:
        print(f"{label:<24}{a:>12.2f}{c:>12.2f}")
\`\`\`

**সংবেদনশীলতা টেবিলের আগে ব্রেক-ইভেন ক্ষতির হার পড়ুন।** ব্যাংক ক-এর জন্য এটি ৪৫.৮৪%। ঐ একটি সংখ্যা একটি অস্পষ্ট উদ্বেগকে গবেষণাযোগ্য প্রশ্নে রূপান্তরিত করে: *এই পুল কি তার চেয়ে বেশি হারাবে?* আদায়ের হার ও জামানত নিয়ে তর্ক করা যায়। ০.৬০ গুণ "সস্তা" কি না তা নিয়ে কার্যকরভাবে তর্ক করা যায় না।

**ব্যাংক খ দেয় ২১০.২০%, আর এটি ছাপার ভুল নয় — এটিই উত্তর।** ১০০%-এর ওপরে ব্রেক-ইভেন মানে চাপগ্রস্ত পুলটি ইকুইটি মুছতে পারে না *এমনকি তার প্রতিটি টাকা হারালেও*, কারণ প্রভিশন ও ইকুইটি মিলে ইতিমধ্যেই পুরো পুলকে ছাড়িয়ে গেছে। এ কারণেই ২০/৩০/৪০/৫০%-এ এর সংবেদনশীলতা সারিগুলো অভিন্ন: প্রয়োজনীয় প্রভিশন কখনো রক্ষিত প্রভিশন ছাড়ায় না, তাই প্রতিটি হারেই ঘাটতি শূন্য।

**১০০%-এর ওপরে যেকোনো ব্রেক-ইভেনকে পড়ুন "এই পুল এই ব্যাংককে ভাঙতে পারবে না" হিসেবে।** মডেলটি যে সবচেয়ে শক্তিশালী একক ফলাফল দিতে পারে এটিই, আর এ কারণেই ব্যাংক খ প্রিমিয়াম পায় যখন ব্যাংক ক ছাড়ে লেনদেন হয়।

**তারপর পাশাপাশি তুলনাটি পড়ুন।** ব্যাংক ক প্রতিবেদিত বুকের ০.৬০ গুণে লেনদেন হয় আর ব্যাংক খ তার অনেক ওপরে। P/B সারির ওপরের প্রতিটি লাইন ব্যাখ্যা করে কেন, আর CASA-র ব্যবধান — ২৪%-এর বিপরীতে ৫১% — সবচেয়ে কঠিন-নির্মাণযোগ্যটি। **ব্যাংক খ বেশি দামি শেয়ার এবং সম্ভবত সস্তা সম্পদ।**`,
    },

    mistakes: {
      en: `1. **Buying a bank at 0.6× book "because it is cheap."** The discount is usually the market's estimate of adjusted book value, not a mispricing. Reconstruct the stressed book before concluding anything about value.
2. **Taking the reported NPL ratio as the bad-loan rate.** It excludes rescheduled loans, written-off loans, and loans under injunction. On stressed DSE banks the true figure has been two to three times higher.
3. **Not realising that writing off loans improves the ratio.** A write-off removes the loan from both numerator and denominator. **The reported NPL ratio can fall while not one taka has been recovered.**
4. **Treating CAR as an independent safety check.** CAR is computed on capital that is itself a function of provisioning. Understate provisions and you overstate capital and report a compliant CAR. It validates nothing on its own.
5. **Applying Chapter 17's leverage ratios to a bank.** Assets at 12× equity is normal banking, not distress. Using a manufacturer's solvency framework here produces alarm where there is none, and misses the risk that actually matters — asset quality.
6. **Ignoring CASA.** Funding mix determines cost of funds and stickiness in a crisis. A bank funded by expensive term deposits has a structurally weaker franchise than one funded by transactional balances, and CASA is the hardest line on the sheet to fake.
7. **Reading a high NIM as skill.** A high margin earned by lending to weak borrowers is compensation for credit risk that has not yet been recognised. Always read NIM alongside the stressed ratio.
8. **Stating a valuation without stating the assumed loss rate.** The entire answer moves from 0.66× to insolvency across a plausible 20–50% range. A conclusion published without its assumption is not analysis.`,
      bn: `১. **"সস্তা বলে" ০.৬ গুণ বুকে ব্যাংক কেনা।** ছাড়টি সাধারণত সমন্বিত বুক ভ্যালু সম্পর্কে বাজারের অনুমান, ভুল মূল্যায়ন নয়। মূল্য সম্পর্কে কিছু সিদ্ধান্ত নেওয়ার আগে চাপগ্রস্ত খাতা পুনর্গঠন করুন।
২. **প্রতিবেদিত NPL অনুপাতকেই খারাপ ঋণের হার ধরা।** এটি পুনঃতফসিলকৃত, অবলোপনকৃত ও নিষেধাজ্ঞাধীন ঋণ বাদ দেয়। চাপগ্রস্ত ডিএসই ব্যাংকে প্রকৃত সংখ্যা দুই থেকে তিন গুণ বেশি হয়েছে।
৩. **ঋণ অবলোপন অনুপাত উন্নত করে তা না বোঝা।** অবলোপন ঋণটিকে লব ও হর দুটো থেকেই সরায়। **এক টাকাও আদায় না হয়েই প্রতিবেদিত NPL অনুপাত কমতে পারে।**
৪. **CAR-কে স্বাধীন নিরাপত্তা যাচাই ভাবা।** CAR এমন মূলধনের ওপর গণিত যা নিজেই প্রভিশনিংয়ের ফাংশন। প্রভিশন কম দেখান, মূলধন বেশি দেখাবে আর সম্মতিপূর্ণ CAR প্রতিবেদন করবেন। এটি একা কিছুই যাচাই করে না।
৫. **ব্যাংকে অধ্যায় ১৭-এর লিভারেজ অনুপাত প্রয়োগ করা।** ইকুইটির ১২ গুণ সম্পদ স্বাভাবিক ব্যাংকিং, সংকট নয়। এখানে উৎপাদকের স্বচ্ছলতা কাঠামো ব্যবহার করলে যেখানে বিপদ নেই সেখানে আতঙ্ক তৈরি হয়, আর যে ঝুঁকি আসলে গুরুত্বপূর্ণ — সম্পদের মান — তা বাদ পড়ে।
৬. **CASA উপেক্ষা করা।** তহবিলের মিশ্রণ তহবিল ব্যয় ও সংকটে স্থিতিশীলতা নির্ধারণ করে। ব্যয়বহুল মেয়াদি আমানতে অর্থায়িত ব্যাংকের ফ্র্যাঞ্চাইজি লেনদেনের ব্যালান্সে অর্থায়িত ব্যাংকের চেয়ে কাঠামোগতভাবে দুর্বল, আর CASA শিটের সবচেয়ে কঠিন-নকলযোগ্য লাইন।
৭. **উঁচু NIM-কে দক্ষতা হিসেবে পড়া।** দুর্বল ঋণগ্রহীতাকে ধার দিয়ে অর্জিত উঁচু মার্জিন এমন ঋণ ঝুঁকির ক্ষতিপূরণ যা এখনো স্বীকার করা হয়নি। NIM সবসময় চাপগ্রস্ত অনুপাতের পাশে পড়ুন।
৮. **অনুমিত ক্ষতির হার না বলে মূল্যায়ন বলা।** সম্ভাব্য ২০–৫০% পরিসরজুড়ে পুরো উত্তর ০.৬৬ গুণ থেকে দেউলিয়াত্বে সরে যায়। অনুমান ছাড়া প্রকাশিত উপসংহার বিশ্লেষণ নয়।`,
    },

    tips: {
      en: `- **Compute the break-even loss rate before anything else.** $L^* = (E + \\text{Provisions})/S$. It reframes an unanswerable question ("is this cheap?") into a researchable one ("will the stressed pool lose more than 46%?").
- **Hunt the three excluded categories deliberately.** Rescheduled, written-off, and enjoined loans are disclosed — in the notes, in Bangladesh Bank's published aggregates, occasionally only in an emphasis-of-matter paragraph. **A bank that makes them hard to locate has already told you something.**
- **Track CASA over five years, not one.** A franchise builds or erodes slowly. A falling CASA ratio means the bank is buying deposits rather than earning them, and that shows up in NIM two years later.
- **Read provision coverage above 100% as a positive signal, not conservatism to be adjusted away.** A bank provisioning beyond its classified book is either being honest or preparing for something. Both are more useful than a bank at 40% coverage.
- **Compare NIM against the stressed ratio, always as a pair.** High NIM with a high stressed ratio is not profitability; it is unrecognised credit cost arriving later.
- **Publish your loss-rate assumption alongside every bank valuation you produce.** If you cannot defend the number, you do not have a valuation — you have a preference.
- **Watch for rescheduling circulars as sector-wide events.** When Bangladesh Bank relaxes rescheduling terms, reported NPL across the sector falls without a single borrower improving. Chapter 5's discipline applies: ask what compelled the number to move.
- **Remember Chapter 8.** Banking passes the effective-names test with 30+ listed institutions, so genuine selection within the sector is possible — unlike telecom. That makes bank analysis worth doing rather than reducing to an index bet.`,
      bn: `- **আর সবকিছুর আগে ব্রেক-ইভেন ক্ষতির হার গণনা করুন।** $L^* = (E + \\text{প্রভিশন})/S$। এটি একটি অনুত্তরযোগ্য প্রশ্নকে ("এটি কি সস্তা?") গবেষণাযোগ্য প্রশ্নে ("চাপগ্রস্ত পুল কি ৪৬%-এর বেশি হারাবে?") রূপান্তরিত করে।
- **বাদ দেওয়া তিনটি শ্রেণি ইচ্ছাকৃতভাবে খুঁজুন।** পুনঃতফসিলকৃত, অবলোপনকৃত ও নিষেধাজ্ঞাধীন ঋণ প্রকাশিত হয় — নোটে, বাংলাদেশ ব্যাংকের প্রকাশিত সমষ্টিতে, কখনো কেবল এমফ্যাসিস-অব-ম্যাটার অনুচ্ছেদে। **যে ব্যাংক এগুলো খুঁজে পাওয়া কঠিন করে রাখে সে ইতিমধ্যেই আপনাকে কিছু বলে দিয়েছে।**
- **এক বছর নয়, পাঁচ বছরে CASA অনুসরণ করুন।** ফ্র্যাঞ্চাইজি ধীরে গড়ে ওঠে বা ক্ষয়ে যায়। কমতে থাকা CASA মানে ব্যাংক আমানত অর্জন না করে কিনছে, আর তা দুই বছর পর NIM-এ দেখা দেয়।
- **১০০%-এর ওপরে প্রভিশন কভারেজকে ইতিবাচক সংকেত হিসেবে পড়ুন, সরিয়ে ফেলার মতো রক্ষণশীলতা নয়।** যে ব্যাংক তার শ্রেণিবদ্ধ খাতার বাইরেও প্রভিশন রাখছে সে হয় সৎ, নয়তো কিছুর জন্য প্রস্তুত হচ্ছে। ৪০% কভারেজের ব্যাংকের চেয়ে দুটোই বেশি কার্যকর।
- **NIM সবসময় চাপগ্রস্ত অনুপাতের সঙ্গে জোড়ায় তুলনা করুন।** উঁচু চাপগ্রস্ত অনুপাতসহ উঁচু NIM মুনাফা নয়; এটি অস্বীকৃত ঋণ ব্যয় যা পরে আসবে।
- **আপনার তৈরি প্রতিটি ব্যাংক মূল্যায়নের পাশে ক্ষতির-হারের অনুমান প্রকাশ করুন।** সংখ্যাটি সমর্থন করতে না পারলে আপনার কাছে মূল্যায়ন নেই — একটি পছন্দ আছে।
- **পুনঃতফসিল সার্কুলারকে খাতজুড়ে ঘটনা হিসেবে লক্ষ করুন।** বাংলাদেশ ব্যাংক পুনঃতফসিলের শর্ত শিথিল করলে একজন ঋণগ্রহীতাও উন্নত না হয়েই খাতজুড়ে প্রতিবেদিত NPL কমে। অধ্যায় ৫-এর শৃঙ্খলা প্রযোজ্য: জিজ্ঞেস করুন কী সংখ্যাটিকে নড়তে বাধ্য করল।
- **অধ্যায় ৮ মনে রাখুন।** ৩০+ তালিকাভুক্ত প্রতিষ্ঠানসহ ব্যাংকিং কার্যকর-নামের পরীক্ষায় উত্তীর্ণ, তাই টেলিকমের বিপরীতে এই খাতের ভেতরে প্রকৃত বাছাই সম্ভব। এ কারণেই ব্যাংক বিশ্লেষণ করার মতো, সূচকের বাজিতে নামিয়ে আনার মতো নয়।`,
    },

    exercises: {
      en: `1. Take any DSE-listed bank's latest annual report. Record total loans, reported NPL, provisions held, and equity. Compute the reported NPL ratio, coverage, and net NPL.
2. From the notes and Bangladesh Bank disclosures, find rescheduled loans, written-off loans, and any loans under injunction for that bank. Compute stressed assets, the stressed ratio, and the understatement factor.
3. Compute the break-even loss rate $L^*$ for that bank. State in one sentence what would have to be true for shareholders to be wiped out.
4. Build the sensitivity table across 20/30/40/50% loss rates. At what loss rate does the adjusted P/B exceed the current reported P/B?
5. Repeat exercises 1–4 for a second, higher-quality bank. Compare the two break-even rates. Which bank is genuinely cheaper on your own assumptions?
6. Chart CASA ratio for one bank over five years alongside its NIM. Does a falling CASA precede a falling NIM, and by how long?
7. Find the Bangladesh Bank circular that introduced a relaxed rescheduling facility. Compare sector-wide reported NPL in the quarter before and the quarter after. How much of the improvement was repayment and how much was reclassification?
8. For one bank, list its top ten borrower exposures if disclosed, or its largest sector concentrations. What single sector shock would breach its break-even loss rate?
9. Compute CAR for a bank, then recompute it after deducting the provision shortfall from Tier 1 capital. Does it still meet the 12.5% requirement?
10. Write a one-page valuation of any DSE bank. State your assumed loss rate in the first sentence. If you cannot defend it with evidence, write instead why the bank cannot be valued with available disclosure.`,
      bn: `১. ডিএসই-তে তালিকাভুক্ত যেকোনো ব্যাংকের সর্বশেষ বার্ষিক প্রতিবেদন নিন। মোট ঋণ, প্রতিবেদিত NPL, রক্ষিত প্রভিশন ও ইকুইটি লিপিবদ্ধ করুন। প্রতিবেদিত NPL অনুপাত, কভারেজ ও নিট NPL গণনা করুন।
২. নোট ও বাংলাদেশ ব্যাংকের প্রকাশনা থেকে ঐ ব্যাংকের পুনঃতফসিলকৃত ঋণ, অবলোপনকৃত ঋণ ও নিষেধাজ্ঞাধীন ঋণ বের করুন। চাপগ্রস্ত সম্পদ, চাপগ্রস্ত অনুপাত ও কম দেখানোর গুণক গণনা করুন।
৩. ঐ ব্যাংকের ব্রেক-ইভেন ক্ষতির হার $L^*$ গণনা করুন। এক বাক্যে বলুন শেয়ারহোল্ডাররা নিঃশেষ হতে কী সত্য হতে হবে।
৪. ২০/৩০/৪০/৫০% ক্ষতির হারে সংবেদনশীলতা টেবিল তৈরি করুন। কোন ক্ষতির হারে সমন্বিত P/B বর্তমান প্রতিবেদিত P/B ছাড়িয়ে যায়?
৫. দ্বিতীয় একটি উন্নততর মানের ব্যাংকের জন্য অনুশীলনী ১–৪ পুনরাবৃত্তি করুন। দুটি ব্রেক-ইভেন হার তুলনা করুন। আপনার নিজের অনুমানে কোন ব্যাংক সত্যিই সস্তা?
৬. একটি ব্যাংকের পাঁচ বছরের CASA অনুপাত তার NIM-এর পাশে চার্ট করুন। কমতে থাকা CASA কি কমতে থাকা NIM-এর আগে আসে, এবং কত আগে?
৭. যে বাংলাদেশ ব্যাংক সার্কুলার শিথিল পুনঃতফসিল সুবিধা এনেছিল তা বের করুন। আগের ও পরের প্রান্তিকে খাতজুড়ে প্রতিবেদিত NPL তুলনা করুন। উন্নতির কতটা পরিশোধ আর কতটা পুনঃশ্রেণিবিন্যাস?
৮. একটি ব্যাংকের শীর্ষ দশ ঋণগ্রহীতা এক্সপোজার (প্রকাশিত থাকলে) বা বৃহত্তম খাত কেন্দ্রীভবন তালিকাভুক্ত করুন। কোন একক খাত ধাক্কা এর ব্রেক-ইভেন ক্ষতির হার লঙ্ঘন করবে?
৯. একটি ব্যাংকের CAR গণনা করুন, তারপর Tier 1 মূলধন থেকে প্রভিশন ঘাটতি বাদ দিয়ে পুনরায় গণনা করুন। এটি কি এখনো ১২.৫% শর্ত পূরণ করে?
১০. যেকোনো ডিএসই ব্যাংকের এক পৃষ্ঠার মূল্যায়ন লিখুন। প্রথম বাক্যেই আপনার অনুমিত ক্ষতির হার বলুন। প্রমাণ দিয়ে সমর্থন করতে না পারলে বরং লিখুন কেন প্রাপ্য প্রকাশনা দিয়ে ব্যাংকটির মূল্যায়ন করা যায় না।`,
    },

    summary: {
      en: `- A bank's balance sheet **is** the business. Deposits fund loans, leverage of 11–13× is structural rather than distress, and ROA of ~1% becomes 12–15% ROE purely through the equity multiplier of Chapter 19.
- Because equity is roughly 8% of assets, **an 8% loss on the loan book destroys all of it.** Every other question about a bank is downstream of asset quality.
- Bangladesh Bank classifies loans as Standard, SMA, Sub-standard, Doubtful and Bad/Loss, with rising provision requirements. **NPL = SS + DF + BL.**
- **Reported NPL excludes three material categories**: rescheduled loans (reclassified as performing without repayment), written-off loans (removed from both numerator and denominator — so writing off *improves* the ratio), and loans under court injunction.
- $S = \\text{NPL} + \\text{Rescheduled} + \\text{Written-off} + \\text{Enjoined}$. On the worked bank this turns a reported 8.00% into a **23.74% stressed ratio — an understatement factor of 2.97×**.
- Honest provisioning at a 40% loss rate consumes **79.4% of equity**, moving NAV from BDT 26.67 to BDT 5.50 and P/B from **0.60× to 2.91×**. The market discount is an estimate of adjusted book, not a mispricing.
- **The break-even loss rate $L^* = (E + \\text{Provisions})/S$ is the chapter's most useful number** — here 45.84%. It converts "is it cheap?" into a researchable question about recovery rates.
- **CAR validates nothing on its own**, since it is computed on capital that understated provisioning has already overstated. CASA is the hardest line to fake and the best single franchise indicator. High NIM alongside a high stressed ratio is unrecognised credit cost, not skill.
- **Discipline established:** never state a bank valuation without stating the assumed loss rate on the stressed pool, and compute the break-even rate before forming any view on price.`,
      bn: `- একটি ব্যাংকের স্থিতিপত্রই **হলো** ব্যবসা। আমানত ঋণে অর্থায়ন করে, ১১–১৩ গুণ লিভারেজ সংকট নয় কাঠামোগত, আর ~১% ROA কেবল অধ্যায় ১৯-এর ইকুইটি গুণকের মাধ্যমেই ১২–১৫% ROE হয়।
- যেহেতু ইকুইটি সম্পদের প্রায় ৮%, **ঋণের খাতায় ৮% ক্ষতি তার পুরোটাই ধ্বংস করে।** ব্যাংক সম্পর্কে বাকি প্রতিটি প্রশ্ন সম্পদের মানের অধীন।
- বাংলাদেশ ব্যাংক ঋণকে Standard, SMA, Sub-standard, Doubtful ও Bad/Loss শ্রেণিতে ভাগ করে, ক্রমবর্ধমান প্রভিশন শর্তসহ। **NPL = SS + DF + BL।**
- **প্রতিবেদিত NPL তিনটি গুরুত্বপূর্ণ শ্রেণি বাদ দেয়**: পুনঃতফসিলকৃত ঋণ (পরিশোধ ছাড়াই কার্যকর হিসেবে পুনঃশ্রেণিবদ্ধ), অবলোপনকৃত ঋণ (লব ও হর দুটো থেকেই সরানো — তাই অবলোপন অনুপাত *উন্নত* করে), এবং আদালতের নিষেধাজ্ঞাধীন ঋণ।
- $S = \\text{NPL} + \\text{পুনঃতফসিলকৃত} + \\text{অবলোপনকৃত} + \\text{নিষেধাজ্ঞাধীন}$। উদাহরণের ব্যাংকে এটি প্রতিবেদিত ৮.০০%-কে **২৩.৭৪% চাপগ্রস্ত অনুপাতে — ২.৯৭× কম দেখানোর গুণকে** পরিণত করে।
- ৪০% ক্ষতির হারে সৎ প্রভিশনিং **ইকুইটির ৭৯.৪%** নিঃশেষ করে, NAV ২৬.৬৭ টাকা থেকে ৫.৫০ টাকায় এবং P/B **০.৬০ গুণ থেকে ২.৯১ গুণে** নিয়ে যায়। বাজারের ছাড় সমন্বিত বুকের একটি অনুমান, ভুল মূল্যায়ন নয়।
- **ব্রেক-ইভেন ক্ষতির হার $L^* = (E + \\text{প্রভিশন})/S$ অধ্যায়ের সবচেয়ে কার্যকর সংখ্যা** — এখানে ৪৫.৮৪%। এটি "এটি কি সস্তা?"-কে আদায়ের হার নিয়ে একটি গবেষণাযোগ্য প্রশ্নে রূপান্তরিত করে।
- **CAR একা কিছুই যাচাই করে না**, কারণ এটি এমন মূলধনের ওপর গণিত যা কম প্রভিশনিং ইতিমধ্যেই বাড়িয়ে দেখিয়েছে। CASA সবচেয়ে কঠিন-নকলযোগ্য লাইন ও সেরা একক ফ্র্যাঞ্চাইজি নির্দেশক। উঁচু চাপগ্রস্ত অনুপাতের পাশে উঁচু NIM দক্ষতা নয়, অস্বীকৃত ঋণ ব্যয়।
- **প্রতিষ্ঠিত শৃঙ্খলা:** চাপগ্রস্ত পুলে অনুমিত ক্ষতির হার না বলে কখনো ব্যাংকের মূল্যায়ন বলবেন না, এবং দাম নিয়ে কোনো মত তৈরির আগে ব্রেক-ইভেন হার গণনা করুন।`,
    },
  },

  interview: [
    {
      q: {
        en: 'Why can a bank not be analysed with the ratios from Chapters 15 to 17?',
        bn: 'অধ্যায় ১৫ থেকে ১৭-এর অনুপাত দিয়ে কেন একটি ব্যাংক বিশ্লেষণ করা যায় না?',
      },
      a: {
        en: 'Because those chapters assume a company that produces and sells something, where the balance sheet supports operations. For a bank the balance sheet is the business — deposits are liabilities funding loan assets, and leverage of eleven to thirteen times equity is the operating model rather than distress. Applying a manufacturer\'s solvency framework flags a healthy bank as dangerously levered while missing the risk that actually matters. Since equity is roughly eight percent of assets, an eight percent loss on the loan book erases shareholders entirely, so the whole analysis reduces to asset quality: are the loans worth what the balance sheet claims?',
        bn: 'কারণ ঐ অধ্যায়গুলো এমন একটি কোম্পানি ধরে নেয় যা কিছু উৎপাদন ও বিক্রি করে, যেখানে স্থিতিপত্র পরিচালনাকে সমর্থন করে। ব্যাংকের জন্য স্থিতিপত্রই ব্যবসা — আমানত হলো ঋণ সম্পদে অর্থায়নকারী দায়, আর ইকুইটির এগারো থেকে তেরো গুণ লিভারেজ সংকট নয় পরিচালন মডেল। উৎপাদকের স্বচ্ছলতা কাঠামো প্রয়োগ করলে একটি সুস্থ ব্যাংককে বিপজ্জনকভাবে লিভারেজড দেখায়, আর যে ঝুঁকি আসলে গুরুত্বপূর্ণ তা বাদ পড়ে। যেহেতু ইকুইটি সম্পদের প্রায় আট শতাংশ, ঋণের খাতায় আট শতাংশ ক্ষতি শেয়ারহোল্ডারদের সম্পূর্ণ মুছে দেয়, তাই পুরো বিশ্লেষণ সম্পদের মানে নেমে আসে: স্থিতিপত্র যা দাবি করছে ঋণগুলোর মূল্য কি তাই?',
      },
    },
    {
      q: {
        en: 'A bank reports an NPL ratio of 8%. Why might that understate the problem, and by how much?',
        bn: 'একটি ব্যাংক ৮% NPL অনুপাত প্রতিবেদন করে। এটি কেন সমস্যা কম দেখাতে পারে, এবং কতটা?',
      },
      a: {
        en: 'Because reported NPL captures only classified loans — sub-standard, doubtful and bad — and excludes three material categories. Rescheduled loans are reclassified as performing even though nothing was repaid, and Bangladesh Bank has repeatedly issued relaxed rescheduling facilities. Written-off loans leave the balance sheet entirely, dropping out of both numerator and denominator, so writing off bad loans mechanically improves the ratio without any recovery. Loans under court injunction sit outside classification for years. Adding those back on a typical stressed DSE bank turns a reported eight percent into roughly twenty-four percent — an understatement factor near three times. The reported figure is not false; it follows the classification rules. It simply is not a measure of how many loans are bad.',
        bn: 'কারণ প্রতিবেদিত NPL কেবল শ্রেণিবদ্ধ ঋণ ধরে — সাব-স্ট্যান্ডার্ড, ডাউটফুল ও ব্যাড — এবং তিনটি গুরুত্বপূর্ণ শ্রেণি বাদ দেয়। পুনঃতফসিলকৃত ঋণ কিছু পরিশোধ না হলেও কার্যকর হিসেবে পুনঃশ্রেণিবদ্ধ হয়, আর বাংলাদেশ ব্যাংক বারবার শিথিল পুনঃতফসিল সুবিধা দিয়েছে। অবলোপনকৃত ঋণ সম্পূর্ণভাবে স্থিতিপত্র ছাড়ে, লব ও হর দুটো থেকেই বাদ পড়ে, তাই খারাপ ঋণ অবলোপন কোনো আদায় ছাড়াই যান্ত্রিকভাবে অনুপাত উন্নত করে। আদালতের নিষেধাজ্ঞাধীন ঋণ বছরের পর বছর শ্রেণিবিন্যাসের বাইরে থাকে। একটি সাধারণ চাপগ্রস্ত ডিএসই ব্যাংকে এগুলো ফিরিয়ে যোগ করলে প্রতিবেদিত আট শতাংশ প্রায় চব্বিশ শতাংশে দাঁড়ায় — প্রায় তিন গুণ কম দেখানোর গুণক। প্রতিবেদিত সংখ্যাটি মিথ্যা নয়; এটি শ্রেণিবিন্যাসের বিধি মেনে চলে। এটি কেবল কতগুলো ঋণ খারাপ তার পরিমাপ নয়।',
      },
    },
    {
      q: {
        en: 'A DSE bank trades at 0.6× book. Is that a bargain?',
        bn: 'একটি ডিএসই ব্যাংক ০.৬ গুণ বুকে লেনদেন হচ্ছে। এটি কি সুযোগ?',
      },
      a: {
        en: 'Usually not, and the arithmetic shows why. Reconstruct the stressed book by adding rescheduled, written-off and enjoined loans to reported NPL, then ask what honest provisioning would do to equity. On a representative case, a forty percent loss rate on that pool consumes about seventy-nine percent of equity, moving NAV from around twenty-seven taka to five and a half, and P/B from 0.6× to nearly 3×. So the discount is the market\'s estimate of adjusted book value rather than a mispricing. That does not settle it — the answer depends entirely on the assumed loss rate, which spans genuinely cheap at twenty percent to insolvent at fifty. The right first step is the break-even loss rate, equity plus provisions over stressed assets, which here is about forty-six percent. That converts an unanswerable question into a researchable one.',
        bn: 'সাধারণত নয়, আর পাটিগণিত দেখায় কেন। প্রতিবেদিত NPL-এর সঙ্গে পুনঃতফসিলকৃত, অবলোপনকৃত ও নিষেধাজ্ঞাধীন ঋণ যোগ করে চাপগ্রস্ত খাতা পুনর্গঠন করুন, তারপর জিজ্ঞেস করুন সৎ প্রভিশনিং ইকুইটিতে কী করত। একটি প্রতিনিধিত্বমূলক ক্ষেত্রে ঐ পুলে চল্লিশ শতাংশ ক্ষতির হার ইকুইটির প্রায় ঊনআশি শতাংশ নিঃশেষ করে, NAV প্রায় সাতাশ টাকা থেকে সাড়ে পাঁচে এবং P/B ০.৬ গুণ থেকে প্রায় ৩ গুণে নিয়ে যায়। তাই ছাড়টি ভুল মূল্যায়ন নয়, সমন্বিত বুক ভ্যালু সম্পর্কে বাজারের অনুমান। এতে বিষয়টি নিষ্পত্তি হয় না — উত্তর সম্পূর্ণভাবে অনুমিত ক্ষতির হারের ওপর নির্ভর করে, যা বিশ শতাংশে সত্যিই সস্তা থেকে পঞ্চাশে দেউলিয়া পর্যন্ত বিস্তৃত। সঠিক প্রথম পদক্ষেপ হলো ব্রেক-ইভেন ক্ষতির হার, চাপগ্রস্ত সম্পদের বিপরীতে ইকুইটি যোগ প্রভিশন, যা এখানে প্রায় ছেচল্লিশ শতাংশ। এটি একটি অনুত্তরযোগ্য প্রশ্নকে গবেষণাযোগ্য প্রশ্নে রূপান্তরিত করে।',
      },
    },
    {
      q: {
        en: 'Why should CAR not be treated as an independent check on a bank’s health?',
        bn: 'CAR-কে কেন ব্যাংকের স্বাস্থ্যের স্বাধীন যাচাই হিসেবে গণ্য করা উচিত নয়?',
      },
      a: {
        en: 'Because capital adequacy is computed on capital, and capital is itself a function of how much has been provisioned. If a bank under-provisions its stressed book, retained earnings and therefore Tier 1 capital are overstated, and the CAR calculated on that inflated base looks compliant. The ratio does not independently verify asset quality; it inherits whatever assumption the provisioning made. So a bank can report a CAR comfortably above the twelve and a half percent requirement precisely because it has not recognised the losses that would breach it. The useful test is to recompute CAR after deducting the provision shortfall from Tier 1 and see whether it still clears.',
        bn: 'কারণ মূলধন পর্যাপ্ততা মূলধনের ওপর গণিত, আর মূলধন নিজেই কতটা প্রভিশন রাখা হয়েছে তার ফাংশন। কোনো ব্যাংক তার চাপগ্রস্ত খাতায় কম প্রভিশন রাখলে সংরক্ষিত আয় এবং তাই Tier 1 মূলধন বাড়িয়ে দেখানো হয়, আর ঐ স্ফীত ভিত্তির ওপর গণিত CAR সম্মতিপূর্ণ দেখায়। অনুপাতটি স্বাধীনভাবে সম্পদের মান যাচাই করে না; প্রভিশনিং যে অনুমান করেছে তা-ই উত্তরাধিকারসূত্রে পায়। তাই একটি ব্যাংক ঠিক এ কারণেই সাড়ে বারো শতাংশ শর্তের স্বচ্ছন্দে ওপরে CAR প্রতিবেদন করতে পারে যে সে ঐ ক্ষতিগুলো স্বীকার করেনি যা তা লঙ্ঘন করাত। কার্যকর পরীক্ষা হলো Tier 1 থেকে প্রভিশন ঘাটতি বাদ দিয়ে CAR পুনরায় গণনা করা এবং দেখা এটি তখনো উত্তীর্ণ হয় কি না।',
      },
    },
    {
      q: {
        en: 'Bank A has 8% NPL and trades at 0.6× book; Bank B has 3.1% NPL and trades at 1.35×. Which would you rather own?',
        bn: 'ব্যাংক ক-এর NPL ৮% ও লেনদেন ০.৬ গুণ বুকে; ব্যাংক খ-এর NPL ৩.১% ও লেনদেন ১.৩৫ গুণে। আপনি কোনটির মালিক হতে চাইবেন?',
      },
      a: {
        en: 'On those figures, Bank B, and the price-to-book comparison is the least informative part of the question. Bank A\'s stressed ratio is near twenty-four percent against Bank B\'s six, its coverage is fifty-five percent against a hundred and twelve, and its break-even loss rate is far lower. The decisive line is CASA — twenty-four percent versus fifty-one. Funding mix determines cost of funds and how sticky deposits are under stress, and it is the hardest item on the sheet to manufacture, because it reflects whether customers actually keep transactional balances with the bank. Bank B is the more expensive share and quite possibly the cheaper asset. I would still want to state my assumed loss rate for each before committing to that view.',
        bn: 'ঐ সংখ্যায় ব্যাংক খ, আর মূল্য-থেকে-বুকের তুলনাই প্রশ্নের সবচেয়ে কম তথ্যবহুল অংশ। ব্যাংক ক-এর চাপগ্রস্ত অনুপাত প্রায় চব্বিশ শতাংশ, ব্যাংক খ-এর ছয়; কভারেজ পঞ্চান্ন শতাংশ, অন্যটির একশো বারো; আর ব্রেক-ইভেন ক্ষতির হার অনেক কম। নির্ণায়ক লাইনটি CASA — চব্বিশ শতাংশের বিপরীতে একান্ন। তহবিলের মিশ্রণ তহবিল ব্যয় ও চাপে আমানতের স্থিতিশীলতা নির্ধারণ করে, আর এটিই শিটের সবচেয়ে কঠিন-নির্মাণযোগ্য উপাদান, কারণ এটি প্রতিফলিত করে গ্রাহকরা সত্যিই ব্যাংকে লেনদেনের ব্যালান্স রাখেন কি না। ব্যাংক খ বেশি দামি শেয়ার এবং সম্ভবত সস্তা সম্পদ। তবু ঐ মত দেওয়ার আগে আমি প্রতিটির জন্য আমার অনুমিত ক্ষতির হার বলতে চাইব।',
      },
    },
    {
      q: {
        en: 'What did the 9% lending cap do to bank behaviour, and what does that teach?',
        bn: '৯% ঋণ সীমা ব্যাংকের আচরণে কী করেছিল, এবং তা কী শেখায়?',
      },
      a: {
        en: 'It compressed the maximum spread to about three percent before costs, which does not cover a fifty percent cost-to-income ratio plus credit costs on a stressed book. Two behavioural consequences followed. Banks chased volume to defend absolute income, which meant lending more into a borrower pool that had already shown stress. And risk-based pricing disappeared entirely — a bank could not charge a weaker borrower more, so it either avoided that borrower or took the risk without being compensated for it. The general lesson matches the circuit breaker in Chapter 2 and the floor price in Chapter 6: an intervention that fixes a price does not remove the underlying pressure, it relocates it, usually onto whoever is least able to see it coming.',
        bn: 'এটি সর্বোচ্চ ব্যবধানকে খরচের আগে প্রায় তিন শতাংশে সংকুচিত করে, যা পঞ্চাশ শতাংশ খরচ-আয় অনুপাত এবং চাপগ্রস্ত খাতায় ঋণ ব্যয় ঢাকে না। দুটি আচরণগত পরিণতি এসেছিল। ব্যাংকগুলো পরম আয় রক্ষায় পরিমাণের পেছনে ছুটল, অর্থাৎ ইতিমধ্যেই চাপ দেখানো ঋণগ্রহীতা গোষ্ঠীতে আরও বেশি ধার দিল। আর ঝুঁকিভিত্তিক মূল্য নির্ধারণ সম্পূর্ণ উবে গেল — ব্যাংক দুর্বল ঋণগ্রহীতার কাছে বেশি নিতে পারত না, তাই হয় ঐ ঋণগ্রহীতা এড়াল, নয়তো ক্ষতিপূরণ ছাড়াই ঝুঁকি নিল। সাধারণ শিক্ষাটি অধ্যায় ২-এর সার্কিট ব্রেকার ও অধ্যায় ৬-এর ফ্লোর প্রাইসের সঙ্গে মেলে: যে হস্তক্ষেপ একটি দাম বেঁধে দেয় তা অন্তর্নিহিত চাপ দূর করে না, স্থানান্তরিত করে — সাধারণত তার ওপর যিনি সবচেয়ে কম আগেভাগে দেখতে পান।',
      },
    },
  ],

  quiz: [
    {
      q: { en: 'For a bank, NPL is defined as:', bn: 'ব্যাংকের ক্ষেত্রে NPL সংজ্ঞায়িত হয়:' },
      options: {
        en: ['SMA only', 'Sub-standard + Doubtful + Bad/Loss', 'All classified plus Standard', 'Written-off loans only'],
        bn: ['কেবল SMA', 'সাব-স্ট্যান্ডার্ড + ডাউটফুল + ব্যাড/লস', 'সব শ্রেণিবদ্ধ ও Standard', 'কেবল অবলোপনকৃত ঋণ'],
      },
      answer: 1,
    },
    {
      q: {
        en: 'Writing off a bad loan has what effect on the reported NPL ratio?',
        bn: 'একটি খারাপ ঋণ অবলোপন করলে প্রতিবেদিত NPL অনুপাতে কী প্রভাব পড়ে?',
      },
      options: {
        en: ['It rises', 'It falls, with no recovery required', 'It is unchanged', 'It becomes undefined'],
        bn: ['এটি বাড়ে', 'এটি কমে, কোনো আদায় ছাড়াই', 'অপরিবর্তিত থাকে', 'অসংজ্ঞায়িত হয়ে যায়'],
      },
      answer: 1,
    },
    {
      q: {
        en: 'Stressed assets are computed as reported NPL plus:',
        bn: 'চাপগ্রস্ত সম্পদ গণনা করা হয় প্রতিবেদিত NPL যোগ:',
      },
      options: {
        en: [
          'Provisions held',
          'Rescheduled + written-off + enjoined loans',
          'Tier 2 capital',
          'Risk-weighted assets',
        ],
        bn: [
          'রক্ষিত প্রভিশন',
          'পুনঃতফসিলকৃত + অবলোপনকৃত + নিষেধাজ্ঞাধীন ঋণ',
          'Tier 2 মূলধন',
          'ঝুঁকি-ভারিত সম্পদ',
        ],
      },
      answer: 1,
    },
    {
      q: {
        en: 'Loans of 45,000, NPL 3,600, rescheduled 4,200, written-off 2,600, enjoined 900. The stressed ratio is about:',
        bn: 'ঋণ ৪৫,০০০, NPL ৩,৬০০, পুনঃতফসিলকৃত ৪,২০০, অবলোপনকৃত ২,৬০০, নিষেধাজ্ঞাধীন ৯০০। চাপগ্রস্ত অনুপাত প্রায়:',
      },
      options: { en: ['8.00%', '15.10%', '23.74%', '25.11%'], bn: ['৮.০০%', '১৫.১০%', '২৩.৭৪%', '২৫.১১%'] },
      answer: 2,
    },
    {
      q: {
        en: 'The break-even loss rate on the stressed pool is given by:',
        bn: 'চাপগ্রস্ত পুলে ব্রেক-ইভেন ক্ষতির হার পাওয়া যায়:',
      },
      options: {
        en: ['S / E', '(E + Provisions) / S', 'S × Provisions', 'E / Total Loans'],
        bn: ['S / E', '(E + প্রভিশন) / S', 'S × প্রভিশন', 'E / মোট ঋণ'],
      },
      answer: 1,
    },
    {
      q: {
        en: 'A P/B of 0.6 on a DSE bank most likely reflects:',
        bn: 'একটি ডিএসই ব্যাংকে ০.৬ P/B সম্ভবত প্রতিফলিত করে:',
      },
      options: {
        en: [
          'An irrational market',
          'The market’s estimate of adjusted book value',
          'A guaranteed bargain',
          'High dividend yield',
        ],
        bn: [
          'একটি অযৌক্তিক বাজার',
          'সমন্বিত বুক ভ্যালু সম্পর্কে বাজারের অনুমান',
          'একটি নিশ্চিত সুযোগ',
          'উচ্চ লভ্যাংশ ফলন',
        ],
      },
      answer: 1,
    },
    {
      q: { en: 'CAR is unreliable as a standalone check because:', bn: 'একক যাচাই হিসেবে CAR অনির্ভরযোগ্য কারণ:' },
      options: {
        en: [
          'It is not published',
          'It is computed on capital that understated provisioning overstates',
          'It excludes Tier 2',
          'It is set by the exchange',
        ],
        bn: [
          'এটি প্রকাশিত হয় না',
          'এটি এমন মূলধনের ওপর গণিত যা কম প্রভিশনিং বাড়িয়ে দেখায়',
          'এটি Tier 2 বাদ দেয়',
          'এটি এক্সচেঞ্জ নির্ধারণ করে',
        ],
      },
      answer: 1,
    },
    {
      q: {
        en: 'A high CASA ratio indicates:',
        bn: 'উচ্চ CASA অনুপাত নির্দেশ করে:',
      },
      options: {
        en: ['Expensive funding', 'Cheap, sticky funding and franchise quality', 'High NPL', 'Low capital'],
        bn: ['ব্যয়বহুল তহবিল', 'সস্তা, স্থিতিশীল তহবিল ও ফ্র্যাঞ্চাইজি মান', 'উচ্চ NPL', 'কম মূলধন'],
      },
      answer: 1,
    },
    {
      q: {
        en: 'A high NIM alongside a high stressed ratio most likely indicates:',
        bn: 'উঁচু চাপগ্রস্ত অনুপাতের পাশে উঁচু NIM সম্ভবত নির্দেশ করে:',
      },
      options: {
        en: [
          'Superior lending skill',
          'Unrecognised credit cost arriving later',
          'Low cost of funds',
          'Strong capital adequacy',
        ],
        bn: [
          'উন্নততর ঋণদান দক্ষতা',
          'অস্বীকৃত ঋণ ব্যয় যা পরে আসবে',
          'কম তহবিল ব্যয়',
          'শক্তিশালী মূলধন পর্যাপ্ততা',
        ],
      },
      answer: 1,
    },
    {
      q: {
        en: 'Because bank equity is roughly 8% of assets, a loss of 8% on the loan book:',
        bn: 'ব্যাংকের ইকুইটি সম্পদের প্রায় ৮% হওয়ায় ঋণের খাতায় ৮% ক্ষতি:',
      },
      options: {
        en: ['Reduces profit slightly', 'Wipes out shareholders entirely', 'Is covered by CAR', 'Only affects Tier 2'],
        bn: ['মুনাফা সামান্য কমায়', 'শেয়ারহোল্ডারদের সম্পূর্ণ মুছে দেয়', 'CAR দিয়ে আচ্ছাদিত', 'কেবল Tier 2-তে প্রভাব ফেলে'],
      },
      answer: 1,
    },
  ],
};
