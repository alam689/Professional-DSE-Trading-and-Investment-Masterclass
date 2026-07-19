/**
 * Chapter 15 — Profitability Ratios
 * Part II, Fundamental Analysis.
 */

export default {
  n: 15,
  tools: [],

  excelSheet: {
    filename: 'ch15-profitability-dashboard.xlsx',
    sheetName: 'Profitability',
    cells: [
      { cell: 'A1', v: 'AMANAT PHARMACEUTICALS LTD — FY2024 (BDT crore)' },

      { cell: 'A3', v: 'Revenue' }, { cell: 'B3', v: 1250 },
      { cell: 'A4', v: 'Cost of Goods Sold' }, { cell: 'B4', v: 675 },
      { cell: 'A5', v: 'Gross Profit' }, { cell: 'B5', f: 'B3-B4' },
      { cell: 'A6', v: 'Operating Expenses' }, { cell: 'B6', v: 325 },
      { cell: 'A7', v: 'EBIT (Operating Profit)' }, { cell: 'B7', f: 'B5-B6' },
      { cell: 'A8', v: 'Finance Cost' }, { cell: 'B8', v: 30 },
      { cell: 'A9', v: 'Profit Before Tax' }, { cell: 'B9', f: 'B7-B8' },
      { cell: 'A10', v: 'Tax Expense' }, { cell: 'B10', v: 49.5 },
      { cell: 'A11', v: 'Net Profit After Tax' }, { cell: 'B11', f: 'B9-B10' },

      { cell: 'A13', v: 'Average Total Assets' }, { cell: 'B13', v: 1500 },
      { cell: 'A14', v: 'Average Equity' }, { cell: 'B14', v: 950 },
      { cell: 'A15', v: 'Average Capital Employed' }, { cell: 'B15', v: 1160 },
      { cell: 'A16', v: 'Average Invested Capital' }, { cell: 'B16', v: 1175 },
      { cell: 'A17', v: 'Effective Tax Rate' }, { cell: 'B17', f: 'B10/B9' },
      { cell: 'A18', v: 'NOPAT' }, { cell: 'B18', f: 'B7*(1-B17)' },

      { cell: 'A20', v: 'RATIO' }, { cell: 'B20', v: 'COMPANY %' },
      { cell: 'C20', v: 'SECTOR BENCH %' }, { cell: 'D20', v: 'VERDICT' },

      { cell: 'A21', v: 'Gross Margin' }, { cell: 'B21', f: 'B5/B3*100' },
      { cell: 'C21', v: 42 }, { cell: 'D21', f: 'IF(B21>=C21,"AT OR ABOVE","BELOW")' },
      { cell: 'A22', v: 'Operating Margin' }, { cell: 'B22', f: 'B7/B3*100' },
      { cell: 'C22', v: 18 }, { cell: 'D22', f: 'IF(B22>=C22,"AT OR ABOVE","BELOW")' },
      { cell: 'A23', v: 'Net Margin' }, { cell: 'B23', f: 'B11/B3*100' },
      { cell: 'C23', v: 12 }, { cell: 'D23', f: 'IF(B23>=C23,"AT OR ABOVE","BELOW")' },
      { cell: 'A24', v: 'ROA' }, { cell: 'B24', f: 'B11/B13*100' },
      { cell: 'C24', v: 9 }, { cell: 'D24', f: 'IF(B24>=C24,"AT OR ABOVE","BELOW")' },
      { cell: 'A25', v: 'ROE' }, { cell: 'B25', f: 'B11/B14*100' },
      { cell: 'C25', v: 16 }, { cell: 'D25', f: 'IF(B25>=C25,"AT OR ABOVE","BELOW")' },
      { cell: 'A26', v: 'ROCE' }, { cell: 'B26', f: 'B7/B15*100' },
      { cell: 'C26', v: 18 }, { cell: 'D26', f: 'IF(B26>=C26,"AT OR ABOVE","BELOW")' },
      { cell: 'A27', v: 'ROIC' }, { cell: 'B27', f: 'B18/B16*100' },
      { cell: 'C27', v: 14 }, { cell: 'D27', f: 'IF(B27>=C27,"AT OR ABOVE","BELOW")' },

      { cell: 'A29', v: 'Equity Multiplier (x)' }, { cell: 'B29', f: 'B13/B14' },
      { cell: 'A30', v: 'ROE minus ROA (pp)' }, { cell: 'B30', f: 'B25-B24' },
      { cell: 'A31', v: 'LEVERAGE FLAG' },
      { cell: 'B31', f: 'IF(B29>2.5,"ROE IS LEVERAGE, NOT QUALITY",IF(B29>1.8,"CHECK DEBT","ROE BROADLY EARNED"))' },

      { cell: 'A33', v: 'MARGIN STABILITY — Operating Margin %' },
      { cell: 'A34', v: 'FY2020' }, { cell: 'B34', v: 19.4 },
      { cell: 'A35', v: 'FY2021' }, { cell: 'B35', v: 20.6 },
      { cell: 'A36', v: 'FY2022' }, { cell: 'B36', v: 18.8 },
      { cell: 'A37', v: 'FY2023' }, { cell: 'B37', v: 21.2 },
      { cell: 'A38', v: 'FY2024' }, { cell: 'B38', v: 20.0 },
      { cell: 'A39', v: 'Mean (%)' }, { cell: 'B39', f: 'AVERAGE(B34:B38)' },
      { cell: 'A40', v: 'Std Dev, sample (pp)' }, { cell: 'B40', f: 'STDEV(B34:B38)' },
      { cell: 'A41', v: 'Coefficient of Variation (%)' }, { cell: 'B41', f: 'B40/B39*100' },
      { cell: 'A42', v: 'MOAT VERDICT' },
      { cell: 'B42', f: 'IF(B41<10,"STABLE - pricing power plausible",IF(B41<25,"VARIABLE - cyclical","UNSTABLE - no pricing power"))' },

      { cell: 'A44', v: 'DSE SECTOR GROSS-MARGIN REFERENCE (%)' },
      { cell: 'A45', v: 'Pharmaceuticals' }, { cell: 'B45', v: 42 },
      { cell: 'A46', v: 'Telecommunication' }, { cell: 'B46', v: 55 },
      { cell: 'A47', v: 'Cement' }, { cell: 'B47', v: 22 },
      { cell: 'A48', v: 'Textile (export)' }, { cell: 'B48', v: 16 },
      { cell: 'A49', v: 'Power (IPP)' }, { cell: 'B49', v: 35 },

      { cell: 'A51', v: 'NOTE' },
      { cell: 'B51', v: 'Compare B21:B27 across sectors only after checking C21:C27. A 16% gross margin is excellent for textile and catastrophic for pharma.' },
    ],
  },

  objectives: {
    en: [
      'Compute gross, operating and net margin from a DSE income statement and state what each layer isolates.',
      'Compute ROA, ROE, ROCE and ROIC on averaged capital bases, and explain why averaging is not optional.',
      'Demonstrate arithmetically why two companies with identical 18% ROE can be opposite in quality.',
      'Measure margin stability over five years and use it as evidence for or against pricing power.',
      'Apply sector-appropriate DSE benchmarks instead of a single cross-market cut-off.',
    ],
    bn: [
      'ডিএসই-তালিকাভুক্ত কোম্পানির আয় বিবরণী থেকে গ্রস, পরিচালন ও নিট মার্জিন গণনা করা এবং প্রতিটি স্তর কী পৃথক করে তা বলা।',
      'গড় মূলধন ভিত্তিতে ROA, ROE, ROCE ও ROIC গণনা করা এবং কেন গড় নেওয়া ঐচ্ছিক নয় তা ব্যাখ্যা করা।',
      'পাটিগাণিতিকভাবে দেখানো কেন অভিন্ন ১৮% ROE-র দুটি কোম্পানি গুণমানে সম্পূর্ণ বিপরীত হতে পারে।',
      'পাঁচ বছরে মার্জিনের স্থিতিশীলতা পরিমাপ করা এবং তাকে মূল্য-নির্ধারণ ক্ষমতার পক্ষে বা বিপক্ষে প্রমাণ হিসেবে ব্যবহার করা।',
      'একটি একক বাজারব্যাপী সীমার বদলে খাত-উপযোগী ডিএসই মানদণ্ড প্রয়োগ করা।',
    ],
  },

  blocks: {
    theory: {
      en: `Chapter 10 established what the income statement contains. Chapter 13 established that reported profit is an opinion supported by cash. Chapter 14 established whether the company can pay its bills this quarter. This chapter answers a different question: **given the resources the company controls, how much profit does it actually manufacture?**

A profitability ratio is always a fraction with profit on top and *something* on the bottom. The entire discipline is in choosing the denominator honestly.

### Layer 1 — The margins

Margins divide profit by **revenue**. They tell you how much of each taka of sales survives to a given line.

**Gross margin** = gross profit ÷ revenue. Gross profit is revenue minus cost of goods sold. This is the purest measure of **pricing power against input cost**. A company that can raise prices when raw material rises holds its gross margin. A company that cannot, does not.

**Operating margin** = EBIT ÷ revenue. EBIT is gross profit minus selling, administrative, and distribution expenses. This measures the profitability of the *business*, before the effects of how it is financed and how it is taxed. **This is the margin to use when comparing two companies**, because it is not contaminated by capital structure.

**Net margin** = net profit after tax ÷ revenue. This is what the shareholder gets. It is the noisiest of the three because it absorbs finance cost, non-operating income, fair-value gains on investments, foreign exchange gains and losses, and tax anomalies. A Bangladeshi company with large short-term investments in listed shares can post a rising net margin in a bull market with no operational improvement whatsoever. **Never assess a business on net margin alone.**

### Layer 2 — The returns

Returns divide profit by a **capital base**. They answer: for every taka tied up in this business, how much comes back per year?

**ROA (Return on Assets)** = net profit ÷ average total assets. Every asset on the balance sheet, however financed. This is the closest thing to a measure of *business* efficiency, and it is the ratio leverage cannot flatter.

**ROE (Return on Equity)** = net profit ÷ average shareholders' equity. What the owners earn on the money that is theirs. **The single most quoted and single most misread ratio in Bangladeshi investment commentary.**

**ROCE (Return on Capital Employed)** = EBIT ÷ average capital employed, where capital employed = total assets − current liabilities. Uses EBIT rather than net profit, so it is pre-financing and pre-tax. Useful for comparing companies with different debt loads and different tax positions — relevant on the DSE where listed rates, export rebates, and sector exemptions produce wildly different effective tax rates.

**ROIC (Return on Invested Capital)** = NOPAT ÷ average invested capital, where NOPAT = EBIT × (1 − effective tax rate) and invested capital = equity + interest-bearing debt − cash. This is the strictest of the four. It removes idle cash from the denominator and taxes the operating profit properly. **When ROIC exceeds the company's cost of capital, growth creates value. When it does not, growth destroys value, and the company should be shrinking rather than expanding.** Many Bangladeshi textile and steel companies have spent a decade adding capacity at a ROIC below their borrowing rate. That is not growth. It is subsidised destruction.

### Why ROE alone is misleading

ROE has a structural defect: **its denominator shrinks when the company borrows.** Debt does not appear in the denominator of ROE at all. It appears only as finance cost in the numerator, reduced by the tax shield.

So a company can raise ROE in two entirely different ways:

1. By earning more on each taka of assets — **ROA rises**. This is quality.
2. By financing the same assets with less equity and more debt — **ROA is unchanged, the equity multiplier rises**. This is risk.

From the outside, both look like "18% ROE."

The formal decomposition of that gap into margin, turnover and leverage is **Chapter 19 — DuPont Analysis**. Do not attempt it yet. For now, hold one rule: **always read ROE next to ROA.** If ROE is high and ROA is ordinary, the difference is borrowed money, and borrowed money reverses. Chapter 5 showed what leverage does to an investor's capital in a falling market. It does the same thing to a company's earnings in a rising rate environment — the mechanism is identical, only the balance sheet is larger.

### Margin stability as a moat indicator

A single year's margin tells you almost nothing. A five-year margin *series* tells you a great deal.

A company whose operating margin reads 19.4, 20.6, 18.8, 21.2, 20.0 across five years is doing something structurally durable — a brand, a distribution network, a regulatory licence, a switching cost. It is passing input cost through to customers.

A company whose operating margin reads 7.8, 4.2, 9.6, 3.1, 5.3 is a **price taker**. Its earnings are a function of cotton prices, gas tariffs, and the taka-dollar rate. Nothing it does internally determines its result. Both companies might average a positive margin. Only one of them can be forecast.

Measure this with the **standard deviation of the margin series**, and normalise it by the mean to get a **coefficient of variation**. Low CV is evidence of pricing power. It is not proof — a company can be stably mediocre — but high CV is close to proof of its absence.

### Sector-appropriate benchmarks on the DSE

There is no such thing as a good margin in the abstract. There is only a good margin *for that sector*.

| Sector | Typical gross margin | Why |
|---|---|---|
| Pharmaceuticals | 40–50% | Branded generics, domestic pricing power, DGDA-regulated entry |
| Telecommunication | 50–60% | Near-zero marginal cost per subscriber; heavy regulatory levy below the line |
| Power (IPP) | 30–40% | Capacity payments under PPA — a policy-linked return, not a market return |
| Cement | 18–25% | Commodity output, energy-intensive, price competition among ~7 listed names |
| Textile (export) | 12–20% | Price taker to global buyers; margin is the residual after buyer negotiation |
| Banking | n/a | Use NIM instead — Chapter 23 |

**Applying a "20% gross margin is good" rule across this table produces two errors simultaneously.** It passes a failing pharma company and rejects a strong textile exporter. Sector first. Ratio second.`,
      bn: `অধ্যায় ১০ প্রতিষ্ঠা করেছে আয় বিবরণীতে কী থাকে। অধ্যায় ১৩ প্রতিষ্ঠা করেছে যে প্রতিবেদিত মুনাফা একটি মতামত, যাকে নগদ সমর্থন করে। অধ্যায় ১৪ প্রতিষ্ঠা করেছে কোম্পানি এই প্রান্তিকে বিল পরিশোধ করতে পারবে কি না। এই অধ্যায় ভিন্ন একটি প্রশ্নের উত্তর দেয়: **কোম্পানি যে সম্পদ নিয়ন্ত্রণ করে, তা দিয়ে সে প্রকৃতপক্ষে কতটা মুনাফা উৎপাদন করে?**

মুনাফা অনুপাত সবসময়ই একটি ভগ্নাংশ — উপরে মুনাফা, নিচে *কিছু একটা*। সমগ্র শৃঙ্খলাটি সৎভাবে হর বেছে নেওয়ার মধ্যে।

### স্তর ১ — মার্জিনসমূহ

মার্জিন মুনাফাকে **রাজস্ব** দিয়ে ভাগ করে। এটি বলে বিক্রয়ের প্রতি টাকার কতটুকু একটি নির্দিষ্ট লাইন পর্যন্ত টিকে থাকে।

**গ্রস মার্জিন** = গ্রস মুনাফা ÷ রাজস্ব। গ্রস মুনাফা হলো রাজস্ব বিয়োগ বিক্রীত পণ্যের ব্যয়। এটি **উপকরণ ব্যয়ের বিপরীতে মূল্য-নির্ধারণ ক্ষমতার** সবচেয়ে বিশুদ্ধ পরিমাপ। কাঁচামালের দাম বাড়লে যে কোম্পানি দাম বাড়াতে পারে, তার গ্রস মার্জিন ধরে থাকে। যে পারে না, তার থাকে না।

**পরিচালন মার্জিন** = EBIT ÷ রাজস্ব। EBIT হলো গ্রস মুনাফা বিয়োগ বিক্রয়, প্রশাসনিক ও বিতরণ ব্যয়। এটি *ব্যবসার* মুনাফাশীলতা পরিমাপ করে — কীভাবে অর্থায়ন হলো ও কীভাবে কর বসল তার প্রভাবের আগে। **দুটি কোম্পানি তুলনা করার সময় এই মার্জিনটিই ব্যবহার করুন**, কারণ এটি মূলধন কাঠামো দ্বারা দূষিত নয়।

**নিট মার্জিন** = কর-পরবর্তী নিট মুনাফা ÷ রাজস্ব। শেয়ারহোল্ডার এটাই পান। তিনটির মধ্যে এটিই সবচেয়ে গোলমেলে, কারণ এটি অর্থায়ন ব্যয়, পরিচালন-বহির্ভূত আয়, বিনিয়োগে ন্যায্য-মূল্য মুনাফা, বৈদেশিক মুদ্রার লাভ-ক্ষতি এবং করের অসঙ্গতি — সব শুষে নেয়। তালিকাভুক্ত শেয়ারে বড় স্বল্পমেয়াদি বিনিয়োগ থাকা একটি বাংলাদেশি কোম্পানি বুল মার্কেটে ক্রমবর্ধমান নিট মার্জিন দেখাতে পারে, অথচ পরিচালনগত কোনো উন্নতিই ঘটেনি। **কেবল নিট মার্জিন দিয়ে কখনো ব্যবসা মূল্যায়ন করবেন না।**

### স্তর ২ — রিটার্নসমূহ

রিটার্ন মুনাফাকে একটি **মূলধন ভিত্তি** দিয়ে ভাগ করে। এটি উত্তর দেয়: এই ব্যবসায় আটকে থাকা প্রতি টাকায় বছরে কত ফিরে আসে?

**ROA (সম্পদের ওপর রিটার্ন)** = নিট মুনাফা ÷ গড় মোট সম্পদ। স্থিতিপত্রের প্রতিটি সম্পদ, যেভাবেই অর্থায়িত হোক। এটি *ব্যবসায়িক* দক্ষতার পরিমাপের সবচেয়ে কাছাকাছি, এবং লিভারেজ এই অনুপাতটিকে চাটুকারিতা করতে পারে না।

**ROE (ইকুইটির ওপর রিটার্ন)** = নিট মুনাফা ÷ গড় শেয়ারহোল্ডার ইকুইটি। মালিকরা তাঁদের নিজেদের টাকায় যা আয় করেন। **বাংলাদেশি বিনিয়োগ ভাষ্যে সবচেয়ে বেশি উদ্ধৃত এবং সবচেয়ে বেশি ভুলভাবে পঠিত একক অনুপাত।**

**ROCE (নিযুক্ত মূলধনের ওপর রিটার্ন)** = EBIT ÷ গড় নিযুক্ত মূলধন, যেখানে নিযুক্ত মূলধন = মোট সম্পদ − চলতি দায়। নিট মুনাফার বদলে EBIT ব্যবহার করে, তাই এটি অর্থায়ন-পূর্ব ও কর-পূর্ব। ভিন্ন ঋণভার ও ভিন্ন কর অবস্থানের কোম্পানি তুলনায় উপযোগী — ডিএসই-তে যা প্রাসঙ্গিক, কারণ তালিকাভুক্ত হার, রপ্তানি রেয়াত ও খাতভিত্তিক অব্যাহতি মিলে কার্যকর কর হারে ব্যাপক তারতম্য তৈরি করে।

**ROIC (বিনিয়োজিত মূলধনের ওপর রিটার্ন)** = NOPAT ÷ গড় বিনিয়োজিত মূলধন, যেখানে NOPAT = EBIT × (১ − কার্যকর কর হার) এবং বিনিয়োজিত মূলধন = ইকুইটি + সুদবাহী ঋণ − নগদ। চারটির মধ্যে এটিই কঠোরতম। এটি হর থেকে অলস নগদ বাদ দেয় এবং পরিচালন মুনাফার ওপর যথাযথভাবে কর বসায়। **ROIC যখন কোম্পানির মূলধন ব্যয় ছাড়িয়ে যায়, প্রবৃদ্ধি মূল্য সৃষ্টি করে। যখন ছাড়ায় না, প্রবৃদ্ধি মূল্য ধ্বংস করে, এবং কোম্পানির সম্প্রসারণ নয় সংকোচন করা উচিত।** বহু বাংলাদেশি বস্ত্র ও ইস্পাত কোম্পানি এক দশক ধরে তাদের ঋণের হারের নিচে ROIC-এ সক্ষমতা যোগ করেছে। ওটা প্রবৃদ্ধি নয়। ওটা ভর্তুকিপুষ্ট ধ্বংস।

### কেন কেবল ROE বিভ্রান্তিকর

ROE-র একটি কাঠামোগত ত্রুটি আছে: **কোম্পানি ধার করলে এর হর ছোট হয়ে যায়।** ঋণ ROE-র হরে একেবারেই আসে না। এটি কেবল লবে অর্থায়ন ব্যয় হিসেবে আসে, কর ঢালে হ্রাসপ্রাপ্ত হয়ে।

তাই একটি কোম্পানি সম্পূর্ণ ভিন্ন দুটি উপায়ে ROE বাড়াতে পারে:

১. সম্পদের প্রতি টাকায় বেশি আয় করে — **ROA বাড়ে**। এটি গুণমান।
২. একই সম্পদ কম ইকুইটি ও বেশি ঋণ দিয়ে অর্থায়ন করে — **ROA অপরিবর্তিত, ইকুইটি গুণক বাড়ে**। এটি ঝুঁকি।

বাইরে থেকে দুটোই দেখায় "১৮% ROE"।

ঐ ব্যবধানকে মার্জিন, টার্নওভার ও লিভারেজে আনুষ্ঠানিকভাবে বিশ্লেষণ করা হলো **অধ্যায় ১৯ — ডুপন্ট বিশ্লেষণ**। এখনই চেষ্টা করবেন না। আপাতত একটি নিয়ম ধরে রাখুন: **ROE সবসময় ROA-র পাশে রেখে পড়ুন।** ROE উঁচু আর ROA সাধারণ হলে পার্থক্যটি ধার করা টাকা, আর ধার করা টাকা উল্টো ঘোরে। অধ্যায় ৫ দেখিয়েছে পতনশীল বাজারে লিভারেজ বিনিয়োগকারীর মূলধনের সঙ্গে কী করে। সুদের হার বাড়ার পরিবেশে কোম্পানির আয়ের সঙ্গে এটি ঠিক একই কাজ করে — কৌশলটি অভিন্ন, কেবল স্থিতিপত্রটি বড়।

### মার্জিনের স্থিতিশীলতা একটি পরিখা-নির্দেশক হিসেবে

এক বছরের মার্জিন প্রায় কিছুই বলে না। পাঁচ বছরের মার্জিন *ধারা* অনেক কিছু বলে।

যে কোম্পানির পরিচালন মার্জিন পাঁচ বছরে ১৯.৪, ২০.৬, ১৮.৮, ২১.২, ২০.০ — সে কাঠামোগতভাবে টেকসই কিছু করছে: একটি ব্র্যান্ড, একটি বিতরণ নেটওয়ার্ক, একটি নিয়ন্ত্রক লাইসেন্স, একটি বদল-ব্যয়। সে উপকরণ ব্যয় গ্রাহকের কাছে চালান করে দিতে পারছে।

যে কোম্পানির পরিচালন মার্জিন ৭.৮, ৪.২, ৯.৬, ৩.১, ৫.৩ — সে একজন **মূল্য-গ্রহীতা**। তার আয় তুলার দাম, গ্যাসের শুল্ক এবং টাকা-ডলার হারের অপেক্ষক। ভেতরে সে যা-ই করুক, ফলাফল নির্ধারণ করে না। দুটি কোম্পানিরই গড় মার্জিন ধনাত্মক হতে পারে। কিন্তু কেবল একটির পূর্বাভাস দেওয়া সম্ভব।

এটি পরিমাপ করুন **মার্জিন ধারার আদর্শ বিচ্যুতি** দিয়ে, এবং গড় দিয়ে ভাগ করে **ভেদাঙ্ক (coefficient of variation)** বের করুন। কম ভেদাঙ্ক মূল্য-নির্ধারণ ক্ষমতার প্রমাণ। এটি চূড়ান্ত প্রমাণ নয় — একটি কোম্পানি স্থিতিশীলভাবে মাঝারিও হতে পারে — কিন্তু উঁচু ভেদাঙ্ক তার অনুপস্থিতির প্রায়-চূড়ান্ত প্রমাণ।

### ডিএসই-তে খাত-উপযোগী মানদণ্ড

বিমূর্তভাবে "ভালো মার্জিন" বলে কিছু নেই। কেবল *ঐ খাতের জন্য* ভালো মার্জিন আছে।

| খাত | সাধারণ গ্রস মার্জিন | কারণ |
|---|---|---|
| ওষুধ | ৪০–৫০% | ব্র্যান্ডেড জেনেরিক, অভ্যন্তরীণ মূল্য-ক্ষমতা, DGDA-নিয়ন্ত্রিত প্রবেশ |
| টেলিযোগাযোগ | ৫০–৬০% | গ্রাহকপ্রতি প্রায়-শূন্য প্রান্তিক ব্যয়; লাইনের নিচে ভারী নিয়ন্ত্রক লেভি |
| বিদ্যুৎ (IPP) | ৩০–৪০% | PPA-র অধীনে ক্যাপাসিটি পেমেন্ট — বাজার রিটার্ন নয়, নীতি-সংশ্লিষ্ট রিটার্ন |
| সিমেন্ট | ১৮–২৫% | পণ্যদ্রব্য উৎপাদন, জ্বালানি-নিবিড়, ~৭টি তালিকাভুক্ত নামের মধ্যে দাম প্রতিযোগিতা |
| বস্ত্র (রপ্তানি) | ১২–২০% | বৈশ্বিক ক্রেতার কাছে মূল্য-গ্রহীতা; ক্রেতার দরকষাকষির পর যা থাকে সেটাই মার্জিন |
| ব্যাংকিং | প্রযোজ্য নয় | পরিবর্তে NIM ব্যবহার করুন — অধ্যায় ২৩ |

**এই সারণির ওপর "২০% গ্রস মার্জিন ভালো" নিয়ম প্রয়োগ করলে একসঙ্গে দুটি ভুল হয়।** এটি একটি ব্যর্থ ওষুধ কোম্পানিকে পাস করায় এবং একটি শক্তিশালী বস্ত্র রপ্তানিকারককে বাতিল করে। আগে খাত। পরে অনুপাত।`,
    },

    simple: {
      en: `Two shopkeepers in Gulshan. Both tell you they made 18% on their money last year.

**Shopkeeper A** put in BDT 6 lakh of his own. He runs a pharmacy. He sells medicine at a good markup because the brands he stocks have no close substitute on the shelf. He made BDT 1.08 lakh.

**Shopkeeper B** put in BDT 2.5 lakh of his own and borrowed BDT 9 lakh from a bank. He runs a cloth wholesale business. He sells at a razor-thin markup because there are four other wholesalers on the same street selling the same bale. He made BDT 45,000.

Both made 18% on their own capital. Same number. Same headline.

Now the bank raises its lending rate by three percentage points.

- A's interest bill goes from 12,000 to 16,500. His return falls from **18% to 17.4%**. He barely notices.
- B's interest bill goes from 72,000 to 99,000. His return falls from **18% to 9.9%**. Half his income, gone, from a change he did not cause and cannot control.

Nothing happened to either business. Only the price of money changed.

---

### The three questions the ratios answer

Think of a company as a machine you feed money into.

1. **Margin** — of every 100 taka of sales, how many stay as profit? This is about *pricing*.
2. **Return** — of every 100 taka parked inside the business, how many come back each year? This is about *efficiency*.
3. **Stability** — do those numbers hold when cotton, gas, or the dollar moves? This is about *durability*.

Most retail investors in Bangladesh look only at the first number in the second question — ROE — because it is the one printed in the newspaper.

**That is precisely the number that leverage forges.**

The fix costs nothing. Look up ROA at the same time. If ROE is 25% and ROA is 3%, you are not looking at a good business. You are looking at a heavily borrowed one, and you are being paid 25% to stand in front of the bank in the queue.`,
      bn: `গুলশানের দুই দোকানদার। দুজনই বলছেন গত বছর তাঁরা নিজের টাকায় ১৮% করেছেন।

**দোকানদার ক** নিজের ৬ লক্ষ টাকা লাগিয়েছেন। তিনি একটি ফার্মেসি চালান। তিনি ভালো মার্কআপে ওষুধ বেচেন, কারণ তিনি যে ব্র্যান্ডগুলো রাখেন তাকের ওপর তার কোনো কাছাকাছি বিকল্প নেই। তিনি আয় করেছেন ১.০৮ লক্ষ টাকা।

**দোকানদার খ** নিজের ২.৫ লক্ষ টাকা লাগিয়েছেন এবং ব্যাংক থেকে ৯ লক্ষ টাকা ধার করেছেন। তিনি কাপড়ের পাইকারি ব্যবসা চালান। তিনি অত্যন্ত সরু মার্কআপে বেচেন, কারণ একই রাস্তায় আরও চারজন পাইকার একই গাঁট বেচছেন। তিনি আয় করেছেন ৪৫,০০০ টাকা।

দুজনই নিজের মূলধনে ১৮% করেছেন। একই সংখ্যা। একই শিরোনাম।

এবার ব্যাংক তার ঋণের হার তিন শতাংশ বিন্দু বাড়াল।

- ক-এর সুদের বিল ১২,০০০ থেকে ১৬,৫০০ হলো। তাঁর রিটার্ন **১৮% থেকে ১৭.৪%** নামল। তিনি প্রায় টেরই পান না।
- খ-এর সুদের বিল ৭২,০০০ থেকে ৯৯,০০০ হলো। তাঁর রিটার্ন **১৮% থেকে ৯.৯%** নামল। তাঁর অর্ধেক আয় উধাও — এমন একটি পরিবর্তনে যা তিনি ঘটাননি এবং নিয়ন্ত্রণ করতে পারেন না।

কোনো ব্যবসারই কিছু হয়নি। কেবল টাকার দাম বদলেছে।

---

### অনুপাতগুলো যে তিনটি প্রশ্নের উত্তর দেয়

কোম্পানিকে এমন একটি যন্ত্র ভাবুন যাতে আপনি টাকা ঢালেন।

১. **মার্জিন** — বিক্রির প্রতি ১০০ টাকার কতটা মুনাফা হিসেবে থাকে? এটি *মূল্য নির্ধারণ* সম্পর্কে।
২. **রিটার্ন** — ব্যবসার ভেতরে রাখা প্রতি ১০০ টাকার কতটা প্রতি বছর ফিরে আসে? এটি *দক্ষতা* সম্পর্কে।
৩. **স্থিতিশীলতা** — তুলা, গ্যাস বা ডলার নড়লে ঐ সংখ্যাগুলো টেকে কি? এটি *স্থায়িত্ব* সম্পর্কে।

বাংলাদেশের বেশিরভাগ খুচরা বিনিয়োগকারী দ্বিতীয় প্রশ্নের প্রথম সংখ্যাটিই — ROE — কেবল দেখেন, কারণ ওটাই সংবাদপত্রে ছাপা হয়।

**ঠিক ঐ সংখ্যাটিই লিভারেজ জাল করে।**

সমাধানের খরচ শূন্য। একই সঙ্গে ROA দেখুন। ROE যদি ২৫% আর ROA ৩% হয়, তবে আপনি ভালো ব্যবসা দেখছেন না। আপনি একটি ভারী ঋণগ্রস্ত ব্যবসা দেখছেন, এবং ব্যাংকের সারিতে তার সামনে দাঁড়ানোর জন্য আপনাকে ২৫% দেওয়া হচ্ছে।`,
    },

    example: {
      en: `### Two companies, one ROE

Both are DSE-listed. Both report **18.0% ROE** for FY2024. Figures in BDT crore.

| Line | Anwara Pharma Ltd | Nishat Textile Mills Ltd |
|---|---|---|
| Revenue | 800.0 | 1,200.0 |
| Gross profit | 416.0 | 216.0 |
| Operating expenses | 260.0 | 84.0 |
| **EBIT** | **156.0** | **132.0** |
| Finance cost | 12.0 | 72.0 |
| PBT | 144.0 | 60.0 |
| Tax @ 25% | 36.0 | 15.0 |
| **Net profit** | **108.0** | **45.0** |
| Total assets | 900.0 | 1,500.0 |
| Total equity | 600.0 | 250.0 |
| Interest-bearing debt | 150.0 | 900.0 |

*The effective tax rate is set equal at 25% for both, deliberately. The point of this example is leverage, and equalising tax removes the one confounding variable that would otherwise muddy it.*

### The derived ratios

| Ratio | Anwara Pharma | Nishat Textile |
|---|---|---|
| Gross margin | 52.00% | 18.00% |
| Operating margin | 19.50% | 11.00% |
| Net margin | 13.50% | 3.75% |
| Asset turnover | 0.89× | 0.80× |
| **ROA** | **12.00%** | **3.00%** |
| Equity multiplier | 1.50× | 6.00× |
| **ROE** | **18.00%** | **18.00%** |
| Interest coverage (EBIT ÷ finance cost) | 13.00× | 1.83× |

Check the arithmetic yourself:

$$\\text{Anwara: } 12.00\\% \\times 1.50 = 18.00\\% \\qquad \\text{Nishat: } 3.00\\% \\times 6.00 = 18.00\\%$$

**The same ROE is reached by two entirely different routes.** Anwara earns it. Nishat borrows it.

### Now move the interest rate

Bangladesh Bank removes the lending rate cap. Both companies refinance at 300 basis points higher — from roughly 8% to 11% on their interest-bearing debt. Nothing else changes: same revenue, same EBIT, same assets.

| | Anwara Pharma | Nishat Textile |
|---|---|---|
| EBIT | 156.0 | 132.0 |
| New finance cost | 16.5 | 99.0 |
| PBT | 139.5 | 33.0 |
| Tax @ 25% | 34.875 | 8.25 |
| Net profit | 104.625 | 24.75 |
| **New ROE** | **17.44%** | **9.90%** |
| Change | −0.56 pp | **−8.10 pp** |
| New interest coverage | 9.45× | **1.33×** |

Nishat's ROE has halved. Its interest coverage is 1.33× — meaning **one-third of a bad year** stands between it and an inability to service its debt from operations. Anwara barely registered the event.

**This is not a hypothetical.** Between 2022 and 2024 Bangladesh moved from a 9% lending rate cap to a market-linked SMART/policy-linked regime. Every leveraged listed company on the DSE ran precisely this arithmetic in reverse, and a great many textile, steel, and NBFI-adjacent names discovered that their reported ROE had been a rate subsidy the whole time.

### What the margin series adds

Now look at five years of operating margin for each.

| Year | Anwara Pharma | Nishat Textile |
|---|---|---|
| FY2020 | 19.4% | 7.8% |
| FY2021 | 20.6% | 4.2% |
| FY2022 | 18.8% | 9.6% |
| FY2023 | 21.2% | 3.1% |
| FY2024 | 20.0% | 5.3% |
| **Mean** | **20.00%** | **6.00%** |
| **Std dev** | **0.95 pp** | **2.66 pp** |
| **Coeff. of variation** | **4.74%** | **44.36%** |

Anwara's margin moves within a band of roughly one percentage point around 20%. That is a company that sets its own prices.

Nishat's margin has ranged from 3.1% to 9.6% — a three-fold spread — without any change in what it manufactures. That is a company whose earnings are decided in Dhaka only after they have been decided in Liverpool, Karachi, and the office of the buyer in Amsterdam.

**Forecast Anwara's FY2025 operating margin and you will likely be within a point. Forecast Nishat's and you are guessing.** A discounted cash flow model (Chapter 21) built on Nishat's numbers has a false precision that its inputs cannot support.

### Where the retail investor actually loses money here

The DSE screener sorts by ROE. Nishat and Anwara appear on the same line. The retail investor buys Nishat because its P/E is 6 and Anwara's is 18, and concludes he has found the same quality at a third of the price.

He has not. He has bought 6× equity leverage into a rate-tightening cycle, at a company with no pricing power and a 44% margin coefficient of variation. **The low P/E was not a discount. It was the market's estimate of the probability that the earnings do not repeat.** Chapter 18 develops this properly. For now, note only that ROE unaccompanied by ROA is how the trap is baited.`,
      bn: `### দুটি কোম্পানি, একটি ROE

দুটিই ডিএসই-তালিকাভুক্ত। দুটিই FY2024-এ **১৮.০% ROE** প্রতিবেদন করেছে। অঙ্ক কোটি টাকায়।

| লাইন | আনোয়ারা ফার্মা লিমিটেড | নিশাত টেক্সটাইল মিলস লিমিটেড |
|---|---|---|
| রাজস্ব | ৮০০.০ | ১,২০০.০ |
| গ্রস মুনাফা | ৪১৬.০ | ২১৬.০ |
| পরিচালন ব্যয় | ২৬০.০ | ৮৪.০ |
| **EBIT** | **১৫৬.০** | **১৩২.০** |
| অর্থায়ন ব্যয় | ১২.০ | ৭২.০ |
| কর-পূর্ব মুনাফা | ১৪৪.০ | ৬০.০ |
| কর @ ২৫% | ৩৬.০ | ১৫.০ |
| **নিট মুনাফা** | **১০৮.০** | **৪৫.০** |
| মোট সম্পদ | ৯০০.০ | ১,৫০০.০ |
| মোট ইকুইটি | ৬০০.০ | ২৫০.০ |
| সুদবাহী ঋণ | ১৫০.০ | ৯০০.০ |

*দুটিরই কার্যকর কর হার ইচ্ছাকৃতভাবে ২৫%-এ সমান রাখা হয়েছে। এই উদাহরণের বিষয় লিভারেজ, এবং কর সমান করলে একমাত্র বিভ্রান্তিকর চলকটি সরে যায়।*

### উদ্ভূত অনুপাতসমূহ

| অনুপাত | আনোয়ারা ফার্মা | নিশাত টেক্সটাইল |
|---|---|---|
| গ্রস মার্জিন | ৫২.০০% | ১৮.০০% |
| পরিচালন মার্জিন | ১৯.৫০% | ১১.০০% |
| নিট মার্জিন | ১৩.৫০% | ৩.৭৫% |
| সম্পদ টার্নওভার | ০.৮৯× | ০.৮০× |
| **ROA** | **১২.০০%** | **৩.০০%** |
| ইকুইটি গুণক | ১.৫০× | ৬.০০× |
| **ROE** | **১৮.০০%** | **১৮.০০%** |
| সুদ আচ্ছাদন (EBIT ÷ অর্থায়ন ব্যয়) | ১৩.০০× | ১.৮৩× |

পাটিগণিতটি নিজে মিলিয়ে নিন:

$$\\text{Anwara: } 12.00\\% \\times 1.50 = 18.00\\% \\qquad \\text{Nishat: } 3.00\\% \\times 6.00 = 18.00\\%$$

**একই ROE-তে পৌঁছানো হয়েছে সম্পূর্ণ ভিন্ন দুটি পথে।** আনোয়ারা এটি অর্জন করে। নিশাত এটি ধার করে।

### এবার সুদের হার নাড়ান

বাংলাদেশ ব্যাংক ঋণের হারের সীমা তুলে দিল। দুটি কোম্পানিই ৩০০ বেসিস পয়েন্ট বেশিতে পুনঃঅর্থায়ন করল — সুদবাহী ঋণে প্রায় ৮% থেকে ১১%। আর কিছুই বদলায়নি: একই রাজস্ব, একই EBIT, একই সম্পদ।

| | আনোয়ারা ফার্মা | নিশাত টেক্সটাইল |
|---|---|---|
| EBIT | ১৫৬.০ | ১৩২.০ |
| নতুন অর্থায়ন ব্যয় | ১৬.৫ | ৯৯.০ |
| কর-পূর্ব মুনাফা | ১৩৯.৫ | ৩৩.০ |
| কর @ ২৫% | ৩৪.৮৭৫ | ৮.২৫ |
| নিট মুনাফা | ১০৪.৬২৫ | ২৪.৭৫ |
| **নতুন ROE** | **১৭.৪৪%** | **৯.৯০%** |
| পরিবর্তন | −০.৫৬ পয়েন্ট | **−৮.১০ পয়েন্ট** |
| নতুন সুদ আচ্ছাদন | ৯.৪৫× | **১.৩৩×** |

নিশাতের ROE অর্ধেক হয়ে গেছে। তার সুদ আচ্ছাদন ১.৩৩× — অর্থাৎ **এক-তৃতীয়াংশ একটি খারাপ বছর** তাকে পরিচালনা থেকে ঋণ পরিশোধে অক্ষমতা থেকে আলাদা করে রেখেছে। আনোয়ারা ঘটনাটি প্রায় টেরই পায়নি।

**এটি কাল্পনিক নয়।** ২০২২ থেকে ২০২৪-এর মধ্যে বাংলাদেশ ৯% ঋণ-হার সীমা থেকে বাজার-সংশ্লিষ্ট SMART/নীতি-সংশ্লিষ্ট ব্যবস্থায় গেছে। ডিএসই-র প্রতিটি লিভারেজড তালিকাভুক্ত কোম্পানি ঠিক এই পাটিগণিতটি উল্টো দিকে চালিয়েছে, এবং বহু বস্ত্র, ইস্পাত ও এনবিএফআই-সংলগ্ন নাম আবিষ্কার করেছে যে তাদের প্রতিবেদিত ROE আসলে সারাক্ষণ একটি সুদ-ভর্তুকি ছিল।

### মার্জিন ধারা যা যোগ করে

এবার দুটির পাঁচ বছরের পরিচালন মার্জিন দেখুন।

| বছর | আনোয়ারা ফার্মা | নিশাত টেক্সটাইল |
|---|---|---|
| FY2020 | ১৯.৪% | ৭.৮% |
| FY2021 | ২০.৬% | ৪.২% |
| FY2022 | ১৮.৮% | ৯.৬% |
| FY2023 | ২১.২% | ৩.১% |
| FY2024 | ২০.০% | ৫.৩% |
| **গড়** | **২০.০০%** | **৬.০০%** |
| **আদর্শ বিচ্যুতি** | **০.৯৫ পয়েন্ট** | **২.৬৬ পয়েন্ট** |
| **ভেদাঙ্ক** | **৪.৭৪%** | **৪৪.৩৬%** |

আনোয়ারার মার্জিন ২০%-এর চারপাশে প্রায় এক শতাংশ বিন্দুর ব্যান্ডে নড়ে। ওটি এমন একটি কোম্পানি যে নিজের দাম নিজে ঠিক করে।

নিশাতের মার্জিন ৩.১% থেকে ৯.৬% পর্যন্ত গেছে — তিন গুণ বিস্তার — অথচ সে যা তৈরি করে তাতে কোনো পরিবর্তন হয়নি। ওটি এমন কোম্পানি যার আয় ঢাকায় নির্ধারিত হয় কেবল লিভারপুল, করাচি এবং আমস্টারডামের ক্রেতার অফিসে নির্ধারিত হয়ে যাওয়ার পর।

**আনোয়ারার FY2025 পরিচালন মার্জিনের পূর্বাভাস দিন, আপনি সম্ভবত এক পয়েন্টের মধ্যে থাকবেন। নিশাতেরটি দিন, আপনি অনুমান করছেন।** নিশাতের সংখ্যার ওপর গড়া একটি ডিসকাউন্টেড ক্যাশ ফ্লো মডেলের (অধ্যায় ২১) এমন একটি মিথ্যা সূক্ষ্মতা থাকে যা তার ইনপুট বহন করতে পারে না।

### এখানে খুচরা বিনিয়োগকারী আসলে কোথায় টাকা হারান

ডিএসই স্ক্রিনার ROE অনুযায়ী সাজায়। নিশাত ও আনোয়ারা একই লাইনে আসে। খুচরা বিনিয়োগকারী নিশাত কেনেন কারণ তার P/E ৬ আর আনোয়ারার ১৮, এবং সিদ্ধান্তে আসেন যে তিনি এক-তৃতীয়াংশ দামে একই গুণমান পেয়েছেন।

তিনি পাননি। তিনি সুদ-কড়াকড়ির চক্রে ৬× ইকুইটি লিভারেজ কিনেছেন — এমন এক কোম্পানিতে যার মূল্য-নির্ধারণ ক্ষমতা নেই এবং মার্জিনের ভেদাঙ্ক ৪৪%। **কম P/E কোনো ছাড় ছিল না। এটি ছিল আয় পুনরাবৃত্ত না হওয়ার সম্ভাবনা সম্পর্কে বাজারের অনুমান।** অধ্যায় ১৮ এটি যথাযথভাবে বিকশিত করে। আপাতত কেবল লক্ষ করুন: ROA ছাড়া ROE-ই সেই টোপ যা দিয়ে ফাঁদটি পাতা হয়।`,
    },

    formula: {
      en: `### Margins

$$\\text{Gross Margin} = \\frac{\\text{Revenue} - \\text{COGS}}{\\text{Revenue}} \\times 100$$

$$\\text{Operating Margin} = \\frac{\\text{EBIT}}{\\text{Revenue}} \\times 100$$

$$\\text{Net Margin} = \\frac{\\text{Net Profit After Tax}}{\\text{Revenue}} \\times 100$$

### Returns

**Return on Assets.** Note the denominator is the *average* of opening and closing balances, because the numerator is a flow over the year and the denominator must be a stock over the same period:

$$\\text{ROA} = \\frac{\\text{Net Profit}}{\\tfrac{1}{2}(\\text{Total Assets}_{open} + \\text{Total Assets}_{close})} \\times 100$$

**Return on Equity:**

$$\\text{ROE} = \\frac{\\text{Net Profit}}{\\tfrac{1}{2}(\\text{Equity}_{open} + \\text{Equity}_{close})} \\times 100$$

**Return on Capital Employed.** Capital employed strips out short-term funding, leaving long-term capital only:

$$\\text{Capital Employed} = \\text{Total Assets} - \\text{Current Liabilities}$$

$$\\text{ROCE} = \\frac{\\text{EBIT}}{\\overline{\\text{Capital Employed}}} \\times 100$$

**Return on Invested Capital.** The strictest measure. Cash is removed because idle cash earns a deposit rate, not a business return:

$$\\text{Effective Tax Rate} \\; t = \\frac{\\text{Tax Expense}}{\\text{PBT}}$$

$$\\text{NOPAT} = \\text{EBIT} \\times (1 - t)$$

$$\\text{Invested Capital} = \\text{Equity} + \\text{Interest-Bearing Debt} - \\text{Cash}$$

$$\\text{ROIC} = \\frac{\\text{NOPAT}}{\\overline{\\text{Invested Capital}}} \\times 100$$

### The leverage bridge

$$\\text{Equity Multiplier} = \\frac{\\overline{\\text{Total Assets}}}{\\overline{\\text{Equity}}}$$

$$\\text{ROE} = \\text{ROA} \\times \\text{Equity Multiplier}$$

This identity is the entire warning. **ROE can only exceed ROA through leverage. There is no other channel.** The full three-factor expansion is Chapter 19.

### Margin stability

Let $m_1, m_2, \\ldots, m_n$ be the operating margin (%) in each of $n$ years.

$$\\bar{m} = \\frac{1}{n}\\sum_{i=1}^{n} m_i$$

$$\\sigma_m = \\sqrt{\\frac{1}{n-1}\\sum_{i=1}^{n} (m_i - \\bar{m})^2}$$

Use the **sample** standard deviation, $n-1$ in the denominator. Five annual observations are a sample drawn from the company's ongoing behaviour, not the whole population of its history.

$$\\text{CV} = \\frac{\\sigma_m}{\\bar{m}} \\times 100$$

Interpretation thresholds, for DSE non-financial companies:

| CV | Reading |
|---|---|
| < 10% | Stable. Pricing power plausible. |
| 10–25% | Variable. Cyclical or input-cost exposed. |
| > 25% | Unstable. No evidence of pricing power. |

**A note on $\\bar{m}$ near zero.** If the mean margin is close to zero, CV explodes and becomes meaningless. In that case report $\\sigma_m$ alone, in percentage points, and state that the company is not consistently profitable.`,
      bn: `### মার্জিনসমূহ

$$\\text{Gross Margin} = \\frac{\\text{Revenue} - \\text{COGS}}{\\text{Revenue}} \\times 100$$

$$\\text{Operating Margin} = \\frac{\\text{EBIT}}{\\text{Revenue}} \\times 100$$

$$\\text{Net Margin} = \\frac{\\text{Net Profit After Tax}}{\\text{Revenue}} \\times 100$$

### রিটার্নসমূহ

**সম্পদের ওপর রিটার্ন।** লক্ষ করুন হর হলো প্রারম্ভিক ও সমাপনী স্থিতির *গড়*, কারণ লব সারা বছরের একটি প্রবাহ এবং হরকে একই সময়ের একটি মজুত হতে হবে:

$$\\text{ROA} = \\frac{\\text{Net Profit}}{\\tfrac{1}{2}(\\text{Total Assets}_{open} + \\text{Total Assets}_{close})} \\times 100$$

**ইকুইটির ওপর রিটার্ন:**

$$\\text{ROE} = \\frac{\\text{Net Profit}}{\\tfrac{1}{2}(\\text{Equity}_{open} + \\text{Equity}_{close})} \\times 100$$

**নিযুক্ত মূলধনের ওপর রিটার্ন।** নিযুক্ত মূলধন স্বল্পমেয়াদি অর্থায়ন বাদ দিয়ে কেবল দীর্ঘমেয়াদি মূলধন রাখে:

$$\\text{Capital Employed} = \\text{Total Assets} - \\text{Current Liabilities}$$

$$\\text{ROCE} = \\frac{\\text{EBIT}}{\\overline{\\text{Capital Employed}}} \\times 100$$

**বিনিয়োজিত মূলধনের ওপর রিটার্ন।** কঠোরতম পরিমাপ। নগদ বাদ দেওয়া হয় কারণ অলস নগদ আমানতের হার আয় করে, ব্যবসায়িক রিটার্ন নয়:

$$\\text{Effective Tax Rate} \\; t = \\frac{\\text{Tax Expense}}{\\text{PBT}}$$

$$\\text{NOPAT} = \\text{EBIT} \\times (1 - t)$$

$$\\text{Invested Capital} = \\text{Equity} + \\text{Interest-Bearing Debt} - \\text{Cash}$$

$$\\text{ROIC} = \\frac{\\text{NOPAT}}{\\overline{\\text{Invested Capital}}} \\times 100$$

### লিভারেজ সেতু

$$\\text{Equity Multiplier} = \\frac{\\overline{\\text{Total Assets}}}{\\overline{\\text{Equity}}}$$

$$\\text{ROE} = \\text{ROA} \\times \\text{Equity Multiplier}$$

এই অভেদটিই সম্পূর্ণ সতর্কবার্তা। **ROE কেবল লিভারেজের মাধ্যমেই ROA ছাড়াতে পারে। অন্য কোনো পথ নেই।** পূর্ণ তিন-উপাদান বিস্তার অধ্যায় ১৯-এ।

### মার্জিনের স্থিতিশীলতা

ধরা যাক $m_1, m_2, \\ldots, m_n$ হলো $n$ বছরের প্রতিটিতে পরিচালন মার্জিন (%)।

$$\\bar{m} = \\frac{1}{n}\\sum_{i=1}^{n} m_i$$

$$\\sigma_m = \\sqrt{\\frac{1}{n-1}\\sum_{i=1}^{n} (m_i - \\bar{m})^2}$$

**স্যাম্পল** আদর্শ বিচ্যুতি ব্যবহার করুন, হরে $n-1$। পাঁচটি বার্ষিক পর্যবেক্ষণ কোম্পানির চলমান আচরণ থেকে নেওয়া একটি নমুনা, তার ইতিহাসের সম্পূর্ণ সমগ্রক নয়।

$$\\text{CV} = \\frac{\\sigma_m}{\\bar{m}} \\times 100$$

ডিএসই-র অ-আর্থিক কোম্পানির জন্য ব্যাখ্যার সীমা:

| ভেদাঙ্ক | পাঠ |
|---|---|
| < ১০% | স্থিতিশীল। মূল্য-নির্ধারণ ক্ষমতা সম্ভাব্য। |
| ১০–২৫% | পরিবর্তনশীল। চক্রীয় বা উপকরণ-ব্যয়ে উন্মুক্ত। |
| > ২৫% | অস্থিতিশীল। মূল্য-নির্ধারণ ক্ষমতার প্রমাণ নেই। |

**$\\bar{m}$ শূন্যের কাছাকাছি হলে একটি সতর্কতা।** গড় মার্জিন শূন্যের কাছাকাছি হলে ভেদাঙ্ক বিস্ফোরিত হয় এবং অর্থহীন হয়ে পড়ে। সেক্ষেত্রে কেবল $\\sigma_m$ শতাংশ বিন্দুতে প্রতিবেদন করুন এবং বলুন কোম্পানিটি ধারাবাহিকভাবে মুনাফাশীল নয়।`,
    },

    manual: {
      en: `**Company.** Amanat Pharmaceuticals Ltd, a DSE-listed pharma manufacturer, FY2024. All figures BDT crore, prepared under IFRS as adopted in Bangladesh and reviewed under the FRC framework.

**Given — income statement:**

| Line | BDT crore |
|---|---|
| Revenue | 1,250.00 |
| Cost of goods sold | 675.00 |
| Operating expenses (selling, admin, distribution) | 325.00 |
| Finance cost | 30.00 |
| Tax expense | 49.50 |

**Given — balance sheet:**

| Item | Opening | Closing |
|---|---|---|
| Total assets | 1,450.00 | 1,550.00 |
| Shareholders' equity | 900.00 | 1,000.00 |
| Current liabilities | 330.00 | 350.00 |
| Interest-bearing debt | 320.00 | 300.00 |
| Cash and equivalents | 80.00 | 90.00 |

---

**Step 1 — Build the income statement down to net profit.**

$$\\text{Gross Profit} = 1{,}250.00 - 675.00 = \\text{BDT } 575.00 \\text{ cr}$$
$$\\text{EBIT} = 575.00 - 325.00 = \\text{BDT } 250.00 \\text{ cr}$$
$$\\text{PBT} = 250.00 - 30.00 = \\text{BDT } 220.00 \\text{ cr}$$
$$\\text{Net Profit} = 220.00 - 49.50 = \\text{BDT } 170.50 \\text{ cr}$$

**Step 2 — The three margins.**

$$\\text{Gross Margin} = \\frac{575.00}{1{,}250.00} \\times 100 = 46.00\\%$$
$$\\text{Operating Margin} = \\frac{250.00}{1{,}250.00} \\times 100 = 20.00\\%$$
$$\\text{Net Margin} = \\frac{170.50}{1{,}250.00} \\times 100 = 13.64\\%$$

Against the pharma benchmark of 40–50% gross margin, 46.00% sits comfortably inside. Note the drop from 46.00% to 20.00%: **26 percentage points of revenue are consumed by selling and administration.** That is normal for Bangladeshi pharma, where the medical representative field force is the distribution moat and also the largest single cost line.

**Step 3 — Average the capital bases.** This step is where most retail analysis goes wrong, by using closing balances against a full-year profit.

$$\\overline{\\text{Total Assets}} = \\frac{1{,}450.00 + 1{,}550.00}{2} = \\text{BDT } 1{,}500.00 \\text{ cr}$$
$$\\overline{\\text{Equity}} = \\frac{900.00 + 1{,}000.00}{2} = \\text{BDT } 950.00 \\text{ cr}$$

Capital employed, each year-end:

$$\\text{CE}_{open} = 1{,}450.00 - 330.00 = 1{,}120.00 \\qquad \\text{CE}_{close} = 1{,}550.00 - 350.00 = 1{,}200.00$$
$$\\overline{\\text{CE}} = \\frac{1{,}120.00 + 1{,}200.00}{2} = \\text{BDT } 1{,}160.00 \\text{ cr}$$

Invested capital, each year-end:

$$\\text{IC}_{open} = 900.00 + 320.00 - 80.00 = 1{,}140.00$$
$$\\text{IC}_{close} = 1{,}000.00 + 300.00 - 90.00 = 1{,}210.00$$
$$\\overline{\\text{IC}} = \\frac{1{,}140.00 + 1{,}210.00}{2} = \\text{BDT } 1{,}175.00 \\text{ cr}$$

**Step 4 — Effective tax rate and NOPAT.**

$$t = \\frac{49.50}{220.00} = 0.2250 = 22.50\\%$$
$$\\text{NOPAT} = 250.00 \\times (1 - 0.2250) = 250.00 \\times 0.7750 = \\text{BDT } 193.75 \\text{ cr}$$

22.50% is the standard listed-company corporate rate in Bangladesh. An effective rate materially below it demands an explanation from the tax note — export rebate, tax holiday, or a deferred tax reversal that will not repeat.

**Step 5 — The four returns.**

$$\\text{ROA} = \\frac{170.50}{1{,}500.00} \\times 100 = 11.37\\%$$
$$\\text{ROE} = \\frac{170.50}{950.00} \\times 100 = 17.95\\%$$
$$\\text{ROCE} = \\frac{250.00}{1{,}160.00} \\times 100 = 21.55\\%$$
$$\\text{ROIC} = \\frac{193.75}{1{,}175.00} \\times 100 = 16.49\\%$$

**Step 6 — Check the leverage bridge.**

$$\\text{Equity Multiplier} = \\frac{1{,}500.00}{950.00} = 1.58\\times$$
$$\\text{ROA} \\times \\text{EM} = 11.37\\% \\times 1.58 = 17.95\\% \\;\\checkmark$$

An equity multiplier of 1.58× means **58 paisa of other people's money for every taka of shareholder money.** The 6.58 percentage-point gap between ROE and ROA is what that borrowing contributes. It is modest, it is serviceable at 8.3× interest coverage, and it is not the source of the return.

**Step 7 — Margin stability over five years.**

Operating margin (%): 19.4, 20.6, 18.8, 21.2, 20.0

$$\\bar{m} = \\frac{19.4 + 20.6 + 18.8 + 21.2 + 20.0}{5} = \\frac{100.0}{5} = 20.00\\%$$

Deviations and their squares:

| Year | $m_i$ | $m_i - \\bar{m}$ | $(m_i - \\bar{m})^2$ |
|---|---|---|---|
| FY2020 | 19.4 | −0.6 | 0.36 |
| FY2021 | 20.6 | +0.6 | 0.36 |
| FY2022 | 18.8 | −1.2 | 1.44 |
| FY2023 | 21.2 | +1.2 | 1.44 |
| FY2024 | 20.0 | 0.0 | 0.00 |
| **Sum** | | **0.0** | **3.60** |

$$\\sigma_m = \\sqrt{\\frac{3.60}{5-1}} = \\sqrt{0.90} = 0.9487 \\approx 0.95 \\text{ pp}$$

$$\\text{CV} = \\frac{0.9487}{20.00} \\times 100 = 4.74\\%$$

Below 10%. **Stable — pricing power is plausible.**

**Step 8 — The contrast.** Run the same eight steps on Nishat Textile's margin series (7.8, 4.2, 9.6, 3.1, 5.3):

$$\\bar{m} = \\frac{30.0}{5} = 6.00\\% \\qquad \\sum (m_i - \\bar{m})^2 = 28.34$$
$$\\sigma_m = \\sqrt{\\frac{28.34}{4}} = \\sqrt{7.085} = 2.6618 \\approx 2.66 \\text{ pp} \\qquad \\text{CV} = \\frac{2.6618}{6.00} \\times 100 = 44.36\\%$$

---

**Interpretation.** Four numbers matter, in this order.

**ROIC 16.49%.** This is the honest one. It taxes operating profit properly and refuses to count the BDT 85 crore average cash pile as productive capital. Compare it to Amanat's own weighted average cost of capital — with debt at roughly 8% and an equity cost of perhaps 15% in a Bangladeshi context, the WACC is somewhere near 12–13%. **ROIC exceeds it. Amanat's growth creates value.** That is the only condition under which reinvested earnings should be preferred to a dividend.

**ROCE 21.55% versus ROA 11.37%.** The gap is not a contradiction. ROCE uses pre-tax, pre-interest profit against long-term capital only; ROA uses post-tax profit against everything including trade payables. **Never compare a ROCE from one source with a ROA from another and conclude anything.**

**Equity multiplier 1.58×.** Low. Compare with Nishat's 6.00×. Amanat is not renting its return from a bank.

**CV 4.74% versus 44.36%.** This is the number that survives a change of government, a change of Bangladesh Bank governor, and a change of buyer. **The lesson is not that Amanat has a better margin. The lesson is that Amanat has a margin you can put in a model.**`,
      bn: `**কোম্পানি।** আমানত ফার্মাসিউটিক্যালস লিমিটেড, একটি ডিএসই-তালিকাভুক্ত ওষুধ প্রস্তুতকারক, FY2024। সব অঙ্ক কোটি টাকায়, বাংলাদেশে গৃহীত IFRS অনুযায়ী প্রস্তুত এবং FRC কাঠামোর অধীনে পর্যালোচিত।

**প্রদত্ত — আয় বিবরণী:**

| লাইন | কোটি টাকা |
|---|---|
| রাজস্ব | ১,২৫০.০০ |
| বিক্রীত পণ্যের ব্যয় | ৬৭৫.০০ |
| পরিচালন ব্যয় (বিক্রয়, প্রশাসনিক, বিতরণ) | ৩২৫.০০ |
| অর্থায়ন ব্যয় | ৩০.০০ |
| কর ব্যয় | ৪৯.৫০ |

**প্রদত্ত — স্থিতিপত্র:**

| খাত | প্রারম্ভিক | সমাপনী |
|---|---|---|
| মোট সম্পদ | ১,৪৫০.০০ | ১,৫৫০.০০ |
| শেয়ারহোল্ডার ইকুইটি | ৯০০.০০ | ১,০০০.০০ |
| চলতি দায় | ৩৩০.০০ | ৩৫০.০০ |
| সুদবাহী ঋণ | ৩২০.০০ | ৩০০.০০ |
| নগদ ও সমতুল্য | ৮০.০০ | ৯০.০০ |

---

**ধাপ ১ — নিট মুনাফা পর্যন্ত আয় বিবরণী গড়ুন।**

$$\\text{Gross Profit} = 1{,}250.00 - 675.00 = 575.00 \\text{ কোটি}$$
$$\\text{EBIT} = 575.00 - 325.00 = 250.00 \\text{ কোটি}$$
$$\\text{PBT} = 250.00 - 30.00 = 220.00 \\text{ কোটি}$$
$$\\text{Net Profit} = 220.00 - 49.50 = 170.50 \\text{ কোটি}$$

**ধাপ ২ — তিনটি মার্জিন।**

$$\\text{Gross Margin} = \\frac{575.00}{1{,}250.00} \\times 100 = 46.00\\%$$
$$\\text{Operating Margin} = \\frac{250.00}{1{,}250.00} \\times 100 = 20.00\\%$$
$$\\text{Net Margin} = \\frac{170.50}{1{,}250.00} \\times 100 = 13.64\\%$$

৪০–৫০% গ্রস মার্জিনের ওষুধ-খাত মানদণ্ডের বিপরীতে ৪৬.০০% স্বচ্ছন্দে ভেতরে পড়ে। ৪৬.০০% থেকে ২০.০০%-এ নামাটি লক্ষ করুন: **রাজস্বের ২৬ শতাংশ বিন্দু বিক্রয় ও প্রশাসন গিলে ফেলে।** বাংলাদেশি ওষুধ খাতে এটি স্বাভাবিক, যেখানে মেডিক্যাল রিপ্রেজেন্টেটিভ বাহিনীই বিতরণ-পরিখা এবং একই সঙ্গে বৃহত্তম একক ব্যয় লাইন।

**ধাপ ৩ — মূলধন ভিত্তির গড় নিন।** এই ধাপেই বেশিরভাগ খুচরা বিশ্লেষণ ভুল করে — সমাপনী স্থিতির বিপরীতে পূর্ণ বছরের মুনাফা বসিয়ে।

$$\\overline{\\text{Total Assets}} = \\frac{1{,}450.00 + 1{,}550.00}{2} = 1{,}500.00 \\text{ কোটি}$$
$$\\overline{\\text{Equity}} = \\frac{900.00 + 1{,}000.00}{2} = 950.00 \\text{ কোটি}$$

প্রতিটি বছরান্তে নিযুক্ত মূলধন:

$$\\text{CE}_{open} = 1{,}450.00 - 330.00 = 1{,}120.00 \\qquad \\text{CE}_{close} = 1{,}550.00 - 350.00 = 1{,}200.00$$
$$\\overline{\\text{CE}} = \\frac{1{,}120.00 + 1{,}200.00}{2} = 1{,}160.00 \\text{ কোটি}$$

প্রতিটি বছরান্তে বিনিয়োজিত মূলধন:

$$\\text{IC}_{open} = 900.00 + 320.00 - 80.00 = 1{,}140.00$$
$$\\text{IC}_{close} = 1{,}000.00 + 300.00 - 90.00 = 1{,}210.00$$
$$\\overline{\\text{IC}} = \\frac{1{,}140.00 + 1{,}210.00}{2} = 1{,}175.00 \\text{ কোটি}$$

**ধাপ ৪ — কার্যকর কর হার ও NOPAT।**

$$t = \\frac{49.50}{220.00} = 0.2250 = 22.50\\%$$
$$\\text{NOPAT} = 250.00 \\times (1 - 0.2250) = 193.75 \\text{ কোটি}$$

২২.৫০% বাংলাদেশে তালিকাভুক্ত কোম্পানির প্রমিত কর্পোরেট হার। এর উল্লেখযোগ্যভাবে নিচে কার্যকর হার হলে কর নোট থেকে ব্যাখ্যা দাবি করুন — রপ্তানি রেয়াত, কর অবকাশ, অথবা এমন একটি বিলম্বিত কর প্রত্যাবর্তন যা পুনরাবৃত্ত হবে না।

**ধাপ ৫ — চারটি রিটার্ন।**

$$\\text{ROA} = \\frac{170.50}{1{,}500.00} \\times 100 = 11.37\\%$$
$$\\text{ROE} = \\frac{170.50}{950.00} \\times 100 = 17.95\\%$$
$$\\text{ROCE} = \\frac{250.00}{1{,}160.00} \\times 100 = 21.55\\%$$
$$\\text{ROIC} = \\frac{193.75}{1{,}175.00} \\times 100 = 16.49\\%$$

**ধাপ ৬ — লিভারেজ সেতু যাচাই করুন।**

$$\\text{Equity Multiplier} = \\frac{1{,}500.00}{950.00} = 1.58\\times$$
$$\\text{ROA} \\times \\text{EM} = 11.37\\% \\times 1.58 = 17.95\\% \\;\\checkmark$$

১.৫৮× ইকুইটি গুণকের অর্থ **শেয়ারহোল্ডারের প্রতি টাকার বিপরীতে অন্যের ৫৮ পয়সা।** ROE ও ROA-র মধ্যে ৬.৫৮ শতাংশ বিন্দুর ব্যবধান ঐ ধারের অবদান। এটি পরিমিত, ৮.৩× সুদ আচ্ছাদনে পরিশোধযোগ্য, এবং এটি রিটার্নের উৎস নয়।

**ধাপ ৭ — পাঁচ বছরে মার্জিনের স্থিতিশীলতা।**

পরিচালন মার্জিন (%): ১৯.৪, ২০.৬, ১৮.৮, ২১.২, ২০.০

$$\\bar{m} = \\frac{19.4 + 20.6 + 18.8 + 21.2 + 20.0}{5} = 20.00\\%$$

বিচ্যুতি ও তাদের বর্গ:

| বছর | $m_i$ | $m_i - \\bar{m}$ | $(m_i - \\bar{m})^2$ |
|---|---|---|---|
| FY2020 | ১৯.৪ | −০.৬ | ০.৩৬ |
| FY2021 | ২০.৬ | +০.৬ | ০.৩৬ |
| FY2022 | ১৮.৮ | −১.২ | ১.৪৪ |
| FY2023 | ২১.২ | +১.২ | ১.৪৪ |
| FY2024 | ২০.০ | ০.০ | ০.০০ |
| **যোগফল** | | **০.০** | **৩.৬০** |

$$\\sigma_m = \\sqrt{\\frac{3.60}{5-1}} = \\sqrt{0.90} = 0.9487 \\approx 0.95 \\text{ পয়েন্ট}$$

$$\\text{CV} = \\frac{0.9487}{20.00} \\times 100 = 4.74\\%$$

১০%-এর নিচে। **স্থিতিশীল — মূল্য-নির্ধারণ ক্ষমতা সম্ভাব্য।**

**ধাপ ৮ — বৈপরীত্য।** নিশাত টেক্সটাইলের মার্জিন ধারায় (৭.৮, ৪.২, ৯.৬, ৩.১, ৫.৩) একই আটটি ধাপ চালান:

$$\\bar{m} = \\frac{30.0}{5} = 6.00\\% \\qquad \\sum (m_i - \\bar{m})^2 = 28.34$$
$$\\sigma_m = \\sqrt{\\frac{28.34}{4}} = 2.6618 \\approx 2.66 \\text{ পয়েন্ট} \\qquad \\text{CV} = \\frac{2.6618}{6.00} \\times 100 = 44.36\\%$$

---

**ব্যাখ্যা।** চারটি সংখ্যা গুরুত্বপূর্ণ, এই ক্রমে।

**ROIC ১৬.৪৯%।** এটিই সৎ সংখ্যা। এটি পরিচালন মুনাফায় যথাযথ কর বসায় এবং গড়ে ৮৫ কোটি টাকার নগদ স্তূপকে উৎপাদনশীল মূলধন হিসেবে গণনা করতে অস্বীকার করে। আমানতের নিজস্ব ভারিত গড় মূলধন ব্যয়ের সঙ্গে তুলনা করুন — ঋণ প্রায় ৮% এবং বাংলাদেশি প্রেক্ষাপটে ইকুইটি ব্যয় সম্ভবত ১৫% ধরলে WACC প্রায় ১২–১৩%-এর কাছাকাছি। **ROIC তা ছাড়িয়ে গেছে। আমানতের প্রবৃদ্ধি মূল্য সৃষ্টি করে।** এটিই একমাত্র শর্ত যাতে পুনর্বিনিয়োজিত আয়কে লভ্যাংশের চেয়ে অগ্রাধিকার দেওয়া উচিত।

**ROCE ২১.৫৫% বনাম ROA ১১.৩৭%।** ব্যবধানটি স্ববিরোধিতা নয়। ROCE কেবল দীর্ঘমেয়াদি মূলধনের বিপরীতে কর-পূর্ব, সুদ-পূর্ব মুনাফা ব্যবহার করে; ROA বাণিজ্যিক পাওনাসহ সবকিছুর বিপরীতে কর-পরবর্তী মুনাফা ব্যবহার করে। **এক উৎসের ROCE-কে অন্য উৎসের ROA-র সঙ্গে তুলনা করে কখনো কোনো সিদ্ধান্তে আসবেন না।**

**ইকুইটি গুণক ১.৫৮×।** কম। নিশাতের ৬.০০×-এর সঙ্গে তুলনা করুন। আমানত ব্যাংকের কাছ থেকে তার রিটার্ন ভাড়া নিচ্ছে না।

**ভেদাঙ্ক ৪.৭৪% বনাম ৪৪.৩৬%।** এই সংখ্যাটিই সরকার বদল, বাংলাদেশ ব্যাংকের গভর্নর বদল এবং ক্রেতা বদল সহ্য করে টিকে থাকে। **শিক্ষাটি এই নয় যে আমানতের মার্জিন ভালো। শিক্ষাটি হলো আমানতের এমন একটি মার্জিন আছে যা আপনি মডেলে বসাতে পারেন।**`,
    },

    excel: {
      en: `\`\`\`
A1:  AMANAT PHARMACEUTICALS LTD — FY2024 (BDT crore)

A3:  Revenue                        B3:  1250
A4:  Cost of Goods Sold             B4:  675
A5:  Gross Profit                   B5:  =B3-B4
A6:  Operating Expenses             B6:  325
A7:  EBIT (Operating Profit)        B7:  =B5-B6
A8:  Finance Cost                   B8:  30
A9:  Profit Before Tax              B9:  =B7-B8
A10: Tax Expense                    B10: 49.5
A11: Net Profit After Tax           B11: =B9-B10

A13: Average Total Assets           B13: 1500
A14: Average Equity                 B14: 950
A15: Average Capital Employed       B15: 1160
A16: Average Invested Capital       B16: 1175
A17: Effective Tax Rate             B17: =B10/B9
A18: NOPAT                          B18: =B7*(1-B17)

A20: RATIO         B20: COMPANY %   C20: SECTOR BENCH %   D20: VERDICT
A21: Gross Margin      B21: =B5/B3*100     C21: 42   D21: =IF(B21>=C21,"AT OR ABOVE","BELOW")
A22: Operating Margin  B22: =B7/B3*100     C22: 18   D22: =IF(B22>=C22,"AT OR ABOVE","BELOW")
A23: Net Margin        B23: =B11/B3*100    C23: 12   D23: =IF(B23>=C23,"AT OR ABOVE","BELOW")
A24: ROA               B24: =B11/B13*100   C24: 9    D24: =IF(B24>=C24,"AT OR ABOVE","BELOW")
A25: ROE               B25: =B11/B14*100   C25: 16   D25: =IF(B25>=C25,"AT OR ABOVE","BELOW")
A26: ROCE              B26: =B7/B15*100    C26: 18   D26: =IF(B26>=C26,"AT OR ABOVE","BELOW")
A27: ROIC              B27: =B18/B16*100   C27: 14   D27: =IF(B27>=C27,"AT OR ABOVE","BELOW")

A29: Equity Multiplier (x)     B29: =B13/B14
A30: ROE minus ROA (pp)        B30: =B25-B24
A31: LEVERAGE FLAG             B31: =IF(B29>2.5,"ROE IS LEVERAGE, NOT QUALITY",
                                      IF(B29>1.8,"CHECK DEBT","ROE BROADLY EARNED"))

A33: MARGIN STABILITY — Operating Margin %
A34: FY2020   B34: 19.4
A35: FY2021   B35: 20.6
A36: FY2022   B36: 18.8
A37: FY2023   B37: 21.2
A38: FY2024   B38: 20.0
A39: Mean (%)                       B39: =AVERAGE(B34:B38)
A40: Std Dev, sample (pp)           B40: =STDEV(B34:B38)
A41: Coefficient of Variation (%)   B41: =B40/B39*100
A42: MOAT VERDICT                   B42: =IF(B41<10,"STABLE - pricing power plausible",
                                          IF(B41<25,"VARIABLE - cyclical","UNSTABLE - no pricing power"))

A44: DSE SECTOR GROSS-MARGIN REFERENCE (%)
A45: Pharmaceuticals     B45: 42
A46: Telecommunication   B46: 55
A47: Cement              B47: 22
A48: Textile (export)    B48: 16
A49: Power (IPP)         B49: 35
\`\`\`

**Use \`STDEV\` (or \`STDEV.S\`), not \`STDEVP\`.** Five annual observations are a sample. \`STDEVP\` divides by $n$ and will understate volatility by about 12% on a five-point series — small, but it is the wrong estimator and you will carry the habit into larger work.

**B31 is the cell that does the real work.** It is deliberately blunt. Paste Nishat Textile's numbers in — average assets 1,500, average equity 250 — and B29 reads 6.00× and B31 reads "ROE IS LEVERAGE, NOT QUALITY" regardless of how good B25 looks.

**C21:C27 is not decoration.** Change the benchmark column when you change sector. Running a textile exporter against C21 = 42 will mark a perfectly healthy company as failing. The sheet does not know what sector you pasted into it. You do.`,
      bn: `\`\`\`
A1:  আমানত ফার্মাসিউটিক্যালস লিমিটেড — FY2024 (কোটি টাকা)

A3:  রাজস্ব                        B3:  1250
A4:  বিক্রীত পণ্যের ব্যয়            B4:  675
A5:  গ্রস মুনাফা                    B5:  =B3-B4
A6:  পরিচালন ব্যয়                  B6:  325
A7:  EBIT (পরিচালন মুনাফা)          B7:  =B5-B6
A8:  অর্থায়ন ব্যয়                  B8:  30
A9:  কর-পূর্ব মুনাফা                B9:  =B7-B8
A10: কর ব্যয়                       B10: 49.5
A11: কর-পরবর্তী নিট মুনাফা          B11: =B9-B10

A13: গড় মোট সম্পদ                  B13: 1500
A14: গড় ইকুইটি                     B14: 950
A15: গড় নিযুক্ত মূলধন               B15: 1160
A16: গড় বিনিয়োজিত মূলধন            B16: 1175
A17: কার্যকর কর হার                 B17: =B10/B9
A18: NOPAT                         B18: =B7*(1-B17)

A20: অনুপাত        B20: কোম্পানি %   C20: খাত মানদণ্ড %   D20: রায়
A21: গ্রস মার্জিন       B21: =B5/B3*100     C21: 42   D21: =IF(B21>=C21,"AT OR ABOVE","BELOW")
A22: পরিচালন মার্জিন     B22: =B7/B3*100     C22: 18   D22: =IF(B22>=C22,"AT OR ABOVE","BELOW")
A23: নিট মার্জিন        B23: =B11/B3*100    C23: 12   D23: =IF(B23>=C23,"AT OR ABOVE","BELOW")
A24: ROA               B24: =B11/B13*100   C24: 9    D24: =IF(B24>=C24,"AT OR ABOVE","BELOW")
A25: ROE               B25: =B11/B14*100   C25: 16   D25: =IF(B25>=C25,"AT OR ABOVE","BELOW")
A26: ROCE              B26: =B7/B15*100    C26: 18   D26: =IF(B26>=C26,"AT OR ABOVE","BELOW")
A27: ROIC              B27: =B18/B16*100   C27: 14   D27: =IF(B27>=C27,"AT OR ABOVE","BELOW")

A29: ইকুইটি গুণক (x)            B29: =B13/B14
A30: ROE বিয়োগ ROA (পয়েন্ট)     B30: =B25-B24
A31: লিভারেজ ফ্ল্যাগ             B31: =IF(B29>2.5,"ROE IS LEVERAGE, NOT QUALITY",
                                      IF(B29>1.8,"CHECK DEBT","ROE BROADLY EARNED"))

A33: মার্জিন স্থিতিশীলতা — পরিচালন মার্জিন %
A34: FY2020   B34: 19.4
A35: FY2021   B35: 20.6
A36: FY2022   B36: 18.8
A37: FY2023   B37: 21.2
A38: FY2024   B38: 20.0
A39: গড় (%)                       B39: =AVERAGE(B34:B38)
A40: আদর্শ বিচ্যুতি, নমুনা (পয়েন্ট)  B40: =STDEV(B34:B38)
A41: ভেদাঙ্ক (%)                   B41: =B40/B39*100
A42: পরিখা রায়                     B42: =IF(B41<10,"STABLE - pricing power plausible",
                                          IF(B41<25,"VARIABLE - cyclical","UNSTABLE - no pricing power"))

A44: ডিএসই খাতভিত্তিক গ্রস-মার্জিন সূত্র (%)
A45: ওষুধ                B45: 42
A46: টেলিযোগাযোগ          B46: 55
A47: সিমেন্ট              B47: 22
A48: বস্ত্র (রপ্তানি)      B48: 16
A49: বিদ্যুৎ (IPP)        B49: 35
\`\`\`

**\`STDEVP\` নয়, \`STDEV\` (বা \`STDEV.S\`) ব্যবহার করুন।** পাঁচটি বার্ষিক পর্যবেক্ষণ একটি নমুনা। \`STDEVP\` $n$ দিয়ে ভাগ করে এবং পাঁচ-বিন্দুর ধারায় অস্থিরতাকে প্রায় ১২% কম দেখাবে — সামান্য, কিন্তু এটি ভুল নিরূপক এবং অভ্যাসটি আপনি বড় কাজেও বয়ে নিয়ে যাবেন।

**B31-ই আসল কাজটি করে।** এটি ইচ্ছাকৃতভাবে রূঢ়। নিশাত টেক্সটাইলের সংখ্যা বসান — গড় সম্পদ ১,৫০০, গড় ইকুইটি ২৫০ — B29 দেখাবে ৬.০০× এবং B25 যত ভালোই দেখাক, B31 দেখাবে "ROE IS LEVERAGE, NOT QUALITY"।

**C21:C27 সাজসজ্জা নয়।** খাত বদলালে মানদণ্ড কলামটিও বদলান। C21 = 42-এর বিপরীতে একটি বস্ত্র রপ্তানিকারক চালালে সম্পূর্ণ সুস্থ একটি কোম্পানিকে ব্যর্থ চিহ্নিত করবে। আপনি কোন খাত পেস্ট করেছেন শিটটি জানে না। আপনি জানেন।`,
    },

    python: {
      en: `\`\`\`python
"""
Chapter 15 - Profitability ratios for a DSE-listed company.
Educational. All figures in BDT crore. Pure standard library.
"""
from dataclasses import dataclass, field
from math import sqrt
from typing import List


@dataclass
class Profitability:
    """One fiscal year of profitability, computed from raw statement lines."""
    name: str
    revenue: float
    cogs: float
    operating_expenses: float
    finance_cost: float
    tax: float

    total_assets_open: float
    total_assets_close: float
    equity_open: float
    equity_close: float
    current_liab_open: float
    current_liab_close: float
    debt_open: float
    debt_close: float
    cash_open: float
    cash_close: float

    # Operating margin (%) for the last five years, oldest first.
    margin_history: List[float] = field(default_factory=list)

    # ---- income statement build-up -------------------------------------
    @property
    def gross_profit(self) -> float:
        return self.revenue - self.cogs

    @property
    def ebit(self) -> float:
        return self.gross_profit - self.operating_expenses

    @property
    def pbt(self) -> float:
        return self.ebit - self.finance_cost

    @property
    def net_profit(self) -> float:
        return self.pbt - self.tax

    # ---- margins --------------------------------------------------------
    @property
    def gross_margin(self) -> float:
        return self.gross_profit / self.revenue * 100

    @property
    def operating_margin(self) -> float:
        return self.ebit / self.revenue * 100

    @property
    def net_margin(self) -> float:
        return self.net_profit / self.revenue * 100

    # ---- averaged capital bases ----------------------------------------
    @property
    def avg_assets(self) -> float:
        return (self.total_assets_open + self.total_assets_close) / 2

    @property
    def avg_equity(self) -> float:
        return (self.equity_open + self.equity_close) / 2

    @property
    def avg_capital_employed(self) -> float:
        open_ce = self.total_assets_open - self.current_liab_open
        close_ce = self.total_assets_close - self.current_liab_close
        return (open_ce + close_ce) / 2

    @property
    def avg_invested_capital(self) -> float:
        open_ic = self.equity_open + self.debt_open - self.cash_open
        close_ic = self.equity_close + self.debt_close - self.cash_close
        return (open_ic + close_ic) / 2

    # ---- returns ---------------------------------------------------------
    @property
    def effective_tax_rate(self) -> float:
        return self.tax / self.pbt

    @property
    def nopat(self) -> float:
        return self.ebit * (1 - self.effective_tax_rate)

    @property
    def roa(self) -> float:
        return self.net_profit / self.avg_assets * 100

    @property
    def roe(self) -> float:
        return self.net_profit / self.avg_equity * 100

    @property
    def roce(self) -> float:
        return self.ebit / self.avg_capital_employed * 100

    @property
    def roic(self) -> float:
        return self.nopat / self.avg_invested_capital * 100

    @property
    def equity_multiplier(self) -> float:
        return self.avg_assets / self.avg_equity

    # ---- margin stability -------------------------------------------------
    @property
    def margin_mean(self) -> float:
        return sum(self.margin_history) / len(self.margin_history)

    @property
    def margin_stdev(self) -> float:
        """Sample standard deviation (n-1) of the operating margin series."""
        n = len(self.margin_history)
        if n < 2:
            return 0.0
        mu = self.margin_mean
        return sqrt(sum((m - mu) ** 2 for m in self.margin_history) / (n - 1))

    @property
    def margin_cv(self) -> float:
        """Coefficient of variation, in percent. Lower = more moat-like."""
        return self.margin_stdev / self.margin_mean * 100


def stability_verdict(cv: float) -> str:
    if cv < 10:
        return "STABLE - pricing power is plausible"
    if cv < 25:
        return "VARIABLE - cyclical or input-cost exposed"
    return "UNSTABLE - no evidence of pricing power"


if __name__ == "__main__":
    amanat = Profitability(
        name="Amanat Pharmaceuticals Ltd",
        revenue=1250.0, cogs=675.0, operating_expenses=325.0,
        finance_cost=30.0, tax=49.5,
        total_assets_open=1450.0, total_assets_close=1550.0,
        equity_open=900.0, equity_close=1000.0,
        current_liab_open=330.0, current_liab_close=350.0,
        debt_open=320.0, debt_close=300.0,
        cash_open=80.0, cash_close=90.0,
        margin_history=[19.4, 20.6, 18.8, 21.2, 20.0],
    )

    nishat_margins = [7.8, 4.2, 9.6, 3.1, 5.3]

    print(f"COMPANY              : {amanat.name}")
    print(f"Revenue (BDT cr)     : {amanat.revenue:,.2f}")
    print(f"Gross profit         : {amanat.gross_profit:,.2f}")
    print(f"EBIT                 : {amanat.ebit:,.2f}")
    print(f"Net profit           : {amanat.net_profit:,.2f}")
    print("-" * 52)
    print(f"Gross margin         : {amanat.gross_margin:6.2f}%")
    print(f"Operating margin     : {amanat.operating_margin:6.2f}%")
    print(f"Net margin           : {amanat.net_margin:6.2f}%")
    print("-" * 52)
    print(f"Average assets       : {amanat.avg_assets:,.2f}")
    print(f"Average equity       : {amanat.avg_equity:,.2f}")
    print(f"Avg capital employed : {amanat.avg_capital_employed:,.2f}")
    print(f"Avg invested capital : {amanat.avg_invested_capital:,.2f}")
    print(f"NOPAT                : {amanat.nopat:,.2f}")
    print("-" * 52)
    print(f"ROA                  : {amanat.roa:6.2f}%")
    print(f"ROE                  : {amanat.roe:6.2f}%")
    print(f"ROCE                 : {amanat.roce:6.2f}%")
    print(f"ROIC                 : {amanat.roic:6.2f}%")
    print(f"Equity multiplier    : {amanat.equity_multiplier:6.2f}x")
    print("-" * 52)
    print(f"5y mean op margin    : {amanat.margin_mean:6.2f}%")
    print(f"5y margin st.dev     : {amanat.margin_stdev:6.2f} pp")
    print(f"5y margin CV         : {amanat.margin_cv:6.2f}%")
    print(f"Verdict              : {stability_verdict(amanat.margin_cv)}")

    n = len(nishat_margins)
    mu = sum(nishat_margins) / n
    sd = sqrt(sum((m - mu) ** 2 for m in nishat_margins) / (n - 1))
    cv = sd / mu * 100
    print("-" * 52)
    print("CONTRAST: Nishat Textile Mills Ltd")
    print(f"5y mean op margin    : {mu:6.2f}%")
    print(f"5y margin st.dev     : {sd:6.2f} pp")
    print(f"5y margin CV         : {cv:6.2f}%")
    print(f"Verdict              : {stability_verdict(cv)}")
\`\`\`

**Expected output:**

\`\`\`
COMPANY              : Amanat Pharmaceuticals Ltd
Revenue (BDT cr)     : 1,250.00
Gross profit         : 575.00
EBIT                 : 250.00
Net profit           : 170.50
----------------------------------------------------
Gross margin         :  46.00%
Operating margin     :  20.00%
Net margin           :  13.64%
----------------------------------------------------
Average assets       : 1,500.00
Average equity       : 950.00
Avg capital employed : 1,160.00
Avg invested capital : 1,175.00
NOPAT                : 193.75
----------------------------------------------------
ROA                  :  11.37%
ROE                  :  17.95%
ROCE                 :  21.55%
ROIC                 :  16.49%
Equity multiplier    :   1.58x
----------------------------------------------------
5y mean op margin    :  20.00%
5y margin st.dev     :   0.95 pp
5y margin CV         :   4.74%
Verdict              : STABLE - pricing power is plausible
----------------------------------------------------
CONTRAST: Nishat Textile Mills Ltd
5y mean op margin    :   6.00%
5y margin st.dev     :   2.66 pp
5y margin CV         :  44.36%
Verdict              : UNSTABLE - no evidence of pricing power
\`\`\`

**Why the class takes opening and closing balances rather than averages directly.** Because the averaging is the part analysts skip, and a class that accepts a pre-averaged number invites you to skip it too. Force the two balance sheet dates in and the code cannot be fed a closing-balance shortcut without you noticing.

**\`effective_tax_rate\` is derived, never assumed.** Bangladeshi listed companies show effective rates from single digits to well above 30% depending on export rebates, tax holidays, deferred tax movements, and disallowed expenses. Hardcoding 22.5% will misstate NOPAT and therefore ROIC. Read it off the statement.`,
      bn: `\`\`\`python
"""
অধ্যায় ১৫ — ডিএসই-তালিকাভুক্ত কোম্পানির মুনাফা অনুপাত।
শিক্ষামূলক। সব অঙ্ক কোটি টাকায়। কেবল প্রমিত লাইব্রেরি।
"""
from dataclasses import dataclass, field
from math import sqrt
from typing import List


@dataclass
class Profitability:
    """এক অর্থবছরের মুনাফাশীলতা, কাঁচা বিবরণী লাইন থেকে গণনাকৃত।"""
    name: str
    revenue: float
    cogs: float
    operating_expenses: float
    finance_cost: float
    tax: float

    total_assets_open: float
    total_assets_close: float
    equity_open: float
    equity_close: float
    current_liab_open: float
    current_liab_close: float
    debt_open: float
    debt_close: float
    cash_open: float
    cash_close: float

    # শেষ পাঁচ বছরের পরিচালন মার্জিন (%), পুরোনো থেকে নতুন।
    margin_history: List[float] = field(default_factory=list)

    # ---- আয় বিবরণী গঠন -------------------------------------------------
    @property
    def gross_profit(self) -> float:
        return self.revenue - self.cogs

    @property
    def ebit(self) -> float:
        return self.gross_profit - self.operating_expenses

    @property
    def pbt(self) -> float:
        return self.ebit - self.finance_cost

    @property
    def net_profit(self) -> float:
        return self.pbt - self.tax

    # ---- মার্জিন ---------------------------------------------------------
    @property
    def gross_margin(self) -> float:
        return self.gross_profit / self.revenue * 100

    @property
    def operating_margin(self) -> float:
        return self.ebit / self.revenue * 100

    @property
    def net_margin(self) -> float:
        return self.net_profit / self.revenue * 100

    # ---- গড় মূলধন ভিত্তি -------------------------------------------------
    @property
    def avg_assets(self) -> float:
        return (self.total_assets_open + self.total_assets_close) / 2

    @property
    def avg_equity(self) -> float:
        return (self.equity_open + self.equity_close) / 2

    @property
    def avg_capital_employed(self) -> float:
        open_ce = self.total_assets_open - self.current_liab_open
        close_ce = self.total_assets_close - self.current_liab_close
        return (open_ce + close_ce) / 2

    @property
    def avg_invested_capital(self) -> float:
        open_ic = self.equity_open + self.debt_open - self.cash_open
        close_ic = self.equity_close + self.debt_close - self.cash_close
        return (open_ic + close_ic) / 2

    # ---- রিটার্ন ---------------------------------------------------------
    @property
    def effective_tax_rate(self) -> float:
        return self.tax / self.pbt

    @property
    def nopat(self) -> float:
        return self.ebit * (1 - self.effective_tax_rate)

    @property
    def roa(self) -> float:
        return self.net_profit / self.avg_assets * 100

    @property
    def roe(self) -> float:
        return self.net_profit / self.avg_equity * 100

    @property
    def roce(self) -> float:
        return self.ebit / self.avg_capital_employed * 100

    @property
    def roic(self) -> float:
        return self.nopat / self.avg_invested_capital * 100

    @property
    def equity_multiplier(self) -> float:
        return self.avg_assets / self.avg_equity

    # ---- মার্জিন স্থিতিশীলতা ------------------------------------------------
    @property
    def margin_mean(self) -> float:
        return sum(self.margin_history) / len(self.margin_history)

    @property
    def margin_stdev(self) -> float:
        """পরিচালন মার্জিন ধারার নমুনা আদর্শ বিচ্যুতি (n-1)।"""
        n = len(self.margin_history)
        if n < 2:
            return 0.0
        mu = self.margin_mean
        return sqrt(sum((m - mu) ** 2 for m in self.margin_history) / (n - 1))

    @property
    def margin_cv(self) -> float:
        """ভেদাঙ্ক, শতাংশে। যত কম, তত পরিখা-সদৃশ।"""
        return self.margin_stdev / self.margin_mean * 100


def stability_verdict(cv: float) -> str:
    if cv < 10:
        return "STABLE - pricing power is plausible"
    if cv < 25:
        return "VARIABLE - cyclical or input-cost exposed"
    return "UNSTABLE - no evidence of pricing power"


if __name__ == "__main__":
    amanat = Profitability(
        name="Amanat Pharmaceuticals Ltd",
        revenue=1250.0, cogs=675.0, operating_expenses=325.0,
        finance_cost=30.0, tax=49.5,
        total_assets_open=1450.0, total_assets_close=1550.0,
        equity_open=900.0, equity_close=1000.0,
        current_liab_open=330.0, current_liab_close=350.0,
        debt_open=320.0, debt_close=300.0,
        cash_open=80.0, cash_close=90.0,
        margin_history=[19.4, 20.6, 18.8, 21.2, 20.0],
    )

    nishat_margins = [7.8, 4.2, 9.6, 3.1, 5.3]

    print(f"COMPANY              : {amanat.name}")
    print(f"Revenue (BDT cr)     : {amanat.revenue:,.2f}")
    print(f"Gross profit         : {amanat.gross_profit:,.2f}")
    print(f"EBIT                 : {amanat.ebit:,.2f}")
    print(f"Net profit           : {amanat.net_profit:,.2f}")
    print("-" * 52)
    print(f"Gross margin         : {amanat.gross_margin:6.2f}%")
    print(f"Operating margin     : {amanat.operating_margin:6.2f}%")
    print(f"Net margin           : {amanat.net_margin:6.2f}%")
    print("-" * 52)
    print(f"Average assets       : {amanat.avg_assets:,.2f}")
    print(f"Average equity       : {amanat.avg_equity:,.2f}")
    print(f"Avg capital employed : {amanat.avg_capital_employed:,.2f}")
    print(f"Avg invested capital : {amanat.avg_invested_capital:,.2f}")
    print(f"NOPAT                : {amanat.nopat:,.2f}")
    print("-" * 52)
    print(f"ROA                  : {amanat.roa:6.2f}%")
    print(f"ROE                  : {amanat.roe:6.2f}%")
    print(f"ROCE                 : {amanat.roce:6.2f}%")
    print(f"ROIC                 : {amanat.roic:6.2f}%")
    print(f"Equity multiplier    : {amanat.equity_multiplier:6.2f}x")
    print("-" * 52)
    print(f"5y mean op margin    : {amanat.margin_mean:6.2f}%")
    print(f"5y margin st.dev     : {amanat.margin_stdev:6.2f} pp")
    print(f"5y margin CV         : {amanat.margin_cv:6.2f}%")
    print(f"Verdict              : {stability_verdict(amanat.margin_cv)}")

    n = len(nishat_margins)
    mu = sum(nishat_margins) / n
    sd = sqrt(sum((m - mu) ** 2 for m in nishat_margins) / (n - 1))
    cv = sd / mu * 100
    print("-" * 52)
    print("CONTRAST: Nishat Textile Mills Ltd")
    print(f"5y mean op margin    : {mu:6.2f}%")
    print(f"5y margin st.dev     : {sd:6.2f} pp")
    print(f"5y margin CV         : {cv:6.2f}%")
    print(f"Verdict              : {stability_verdict(cv)}")
\`\`\`

**প্রত্যাশিত ফলাফল:**

\`\`\`
COMPANY              : Amanat Pharmaceuticals Ltd
Revenue (BDT cr)     : 1,250.00
Gross profit         : 575.00
EBIT                 : 250.00
Net profit           : 170.50
----------------------------------------------------
Gross margin         :  46.00%
Operating margin     :  20.00%
Net margin           :  13.64%
----------------------------------------------------
Average assets       : 1,500.00
Average equity       : 950.00
Avg capital employed : 1,160.00
Avg invested capital : 1,175.00
NOPAT                : 193.75
----------------------------------------------------
ROA                  :  11.37%
ROE                  :  17.95%
ROCE                 :  21.55%
ROIC                 :  16.49%
Equity multiplier    :   1.58x
----------------------------------------------------
5y mean op margin    :  20.00%
5y margin st.dev     :   0.95 pp
5y margin CV         :   4.74%
Verdict              : STABLE - pricing power is plausible
----------------------------------------------------
CONTRAST: Nishat Textile Mills Ltd
5y mean op margin    :   6.00%
5y margin st.dev     :   2.66 pp
5y margin CV         :  44.36%
Verdict              : UNSTABLE - no evidence of pricing power
\`\`\`

**ক্লাসটি সরাসরি গড় না নিয়ে প্রারম্ভিক ও সমাপনী স্থিতি কেন নেয়।** কারণ গড় করাটাই সেই অংশ যা বিশ্লেষকরা এড়িয়ে যান, এবং যে ক্লাস পূর্ব-গড়কৃত সংখ্যা নেয় সেটি আপনাকেও এড়িয়ে যাওয়ার আমন্ত্রণ জানায়। স্থিতিপত্রের দুটি তারিখ বাধ্যতামূলক করলে আপনার অজান্তে কোডে সমাপনী-স্থিতির শর্টকাট ঢুকতে পারে না।

**\`effective_tax_rate\` উদ্ভূত, কখনো অনুমিত নয়।** বাংলাদেশি তালিকাভুক্ত কোম্পানিগুলোর কার্যকর হার রপ্তানি রেয়াত, কর অবকাশ, বিলম্বিত করের নড়াচড়া ও অননুমোদিত ব্যয়ের ওপর নির্ভর করে এক অঙ্ক থেকে ৩০%-এর অনেক ওপরে পর্যন্ত দেখা যায়। ২২.৫% হার্ডকোড করলে NOPAT এবং সেই সূত্রে ROIC ভুল হবে। বিবরণী থেকে পড়ে নিন।`,
    },

    mistakes: {
      en: `1. **Quoting ROE without ROA.** The single most common error in Bangladeshi equity commentary. ROE = ROA × equity multiplier, and the multiplier is invisible in the headline. A 25% ROE on a 3% ROA is a bank's return being routed through a shareholder, not a business's return.
2. **Using closing balances instead of averages.** Net profit is a flow over twelve months; total assets is a stock at one instant. A company that raised equity in the last month of the year will show a depressed ROE on closing equity and a flattered one on opening equity. Average them. Always.
3. **Comparing gross margins across sectors.** A 16% gross margin is strong for a textile exporter and a solvency emergency for a pharma company. The ratio carries no meaning detached from its sector.
4. **Assuming a 22.5% tax rate.** Derive the effective rate from the tax expense and PBT lines. Export rebates, tax holidays, and deferred-tax reversals routinely push Bangladeshi effective rates far from statutory. A one-off deferred tax credit inflates net profit, net margin, ROA and ROE simultaneously, and none of it repeats.
5. **Reading a rising net margin as operational improvement.** Check whether the gross and operating margins moved. If only net margin rose, the cause is below EBIT — fair-value gains on a listed-share portfolio, a foreign exchange gain, an asset revaluation flowing through, or a tax credit. Chapter 13's tests apply.
6. **Treating ROCE and ROA as interchangeable.** ROCE is pre-tax EBIT over long-term capital. ROA is post-tax profit over all assets. ROCE is almost always the larger number. Comparing a company's ROCE to a peer's ROA and declaring outperformance is a pure definitional error, and it appears in published Bangladeshi broker research.
7. **Ignoring cash in the ROIC denominator.** A company sitting on BDT 300 crore of idle cash and BDT 700 crore of operating assets is earning its business return on 700, not 1,000. Leaving cash in overstates the invested-capital base and understates ROIC — which is the direction that makes a good business look mediocre and can talk you out of it.
8. **Judging a moat from one year.** One good margin year is a data point. Five is evidence. Companies whose margin was fine in FY2021, when global freight and commodity dislocation temporarily favoured them, and collapsed in FY2023, were never moated. They were lucky, once.`,
      bn: `১. **ROA ছাড়া ROE উদ্ধৃত করা।** বাংলাদেশি ইকুইটি ভাষ্যে সবচেয়ে সাধারণ একক ভুল। ROE = ROA × ইকুইটি গুণক, এবং গুণকটি শিরোনামে অদৃশ্য। ৩% ROA-র ওপর ২৫% ROE হলো ব্যাংকের রিটার্ন শেয়ারহোল্ডারের মধ্য দিয়ে চলে যাওয়া, ব্যবসার রিটার্ন নয়।
২. **গড়ের বদলে সমাপনী স্থিতি ব্যবহার করা।** নিট মুনাফা বারো মাসের প্রবাহ; মোট সম্পদ এক মুহূর্তের মজুত। বছরের শেষ মাসে ইকুইটি সংগ্রহ করা কোম্পানি সমাপনী ইকুইটিতে দমিত ROE এবং প্রারম্ভিক ইকুইটিতে স্ফীত ROE দেখাবে। গড় নিন। সবসময়।
৩. **খাতভেদে গ্রস মার্জিন তুলনা করা।** ১৬% গ্রস মার্জিন একটি বস্ত্র রপ্তানিকারকের জন্য শক্তিশালী এবং একটি ওষুধ কোম্পানির জন্য স্বচ্ছলতার জরুরি অবস্থা। খাত থেকে বিচ্ছিন্ন করলে অনুপাতটি কোনো অর্থ বহন করে না।
৪. **২২.৫% কর হার ধরে নেওয়া।** কর ব্যয় ও কর-পূর্ব মুনাফা লাইন থেকে কার্যকর হার উদ্ভূত করুন। রপ্তানি রেয়াত, কর অবকাশ ও বিলম্বিত-কর প্রত্যাবর্তন নিয়মিতভাবে বাংলাদেশি কার্যকর হারকে বিধিবদ্ধ হার থেকে বহু দূরে ঠেলে দেয়। একবারের বিলম্বিত কর ক্রেডিট একসঙ্গে নিট মুনাফা, নিট মার্জিন, ROA ও ROE স্ফীত করে, এবং তার কোনোটিই পুনরাবৃত্ত হয় না।
৫. **ক্রমবর্ধমান নিট মার্জিনকে পরিচালনগত উন্নতি হিসেবে পড়া।** গ্রস ও পরিচালন মার্জিন নড়েছে কি না দেখুন। কেবল নিট মার্জিন বাড়লে কারণটি EBIT-এর নিচে — তালিকাভুক্ত শেয়ার পোর্টফোলিওতে ন্যায্য-মূল্য মুনাফা, বৈদেশিক মুদ্রার লাভ, সম্পদ পুনর্মূল্যায়নের প্রভাব, অথবা একটি কর ক্রেডিট। অধ্যায় ১৩-এর পরীক্ষাগুলো এখানে প্রযোজ্য।
৬. **ROCE ও ROA-কে বিনিময়যোগ্য ভাবা।** ROCE হলো দীর্ঘমেয়াদি মূলধনের ওপর কর-পূর্ব EBIT। ROA হলো সব সম্পদের ওপর কর-পরবর্তী মুনাফা। ROCE প্রায় সবসময়ই বড় সংখ্যা। একটি কোম্পানির ROCE-কে সমকক্ষের ROA-র সঙ্গে তুলনা করে শ্রেষ্ঠত্ব ঘোষণা করা বিশুদ্ধ সংজ্ঞাগত ভুল, এবং তা প্রকাশিত বাংলাদেশি ব্রোকার গবেষণায় দেখা যায়।
৭. **ROIC-এর হরে নগদ উপেক্ষা করা।** ৩০০ কোটি টাকা অলস নগদ ও ৭০০ কোটি টাকার পরিচালন সম্পদ নিয়ে বসে থাকা কোম্পানি তার ব্যবসায়িক রিটার্ন ৭০০-র ওপর অর্জন করছে, ১,০০০-এর ওপর নয়। নগদ রেখে দিলে বিনিয়োজিত-মূলধন ভিত্তি বেশি দেখায় এবং ROIC কম দেখায় — যে দিকটি একটি ভালো ব্যবসাকে মাঝারি দেখায় এবং আপনাকে তা থেকে নিরুৎসাহিত করতে পারে।
৮. **এক বছর দেখে পরিখা বিচার করা।** এক বছরের ভালো মার্জিন একটি উপাত্ত-বিন্দু। পাঁচ বছর প্রমাণ। যেসব কোম্পানির মার্জিন FY2021-এ ভালো ছিল — যখন বৈশ্বিক মালবাহী ও পণ্যদ্রব্যের বিশৃঙ্খলা সাময়িকভাবে তাদের অনুকূলে ছিল — এবং FY2023-এ ধসে পড়ে, তাদের কখনোই পরিখা ছিল না। তারা একবার ভাগ্যবান হয়েছিল।`,
    },

    tips: {
      en: `- **Build the five-year margin series before you build anything else.** Open five annual reports, extract revenue, gross profit and EBIT, and compute three margin series. This takes forty minutes and eliminates more bad investments than any other single exercise in Part II.
- **Write ROE and ROA on the same line, every time.** Make it a formatting rule in your own notes. "ROE 22.4% / ROA 4.1%" is a complete statement. "ROE 22.4%" is a misleading one.
- **Read the segment note.** A Bangladeshi conglomerate reporting a 14% consolidated operating margin may contain a 30%-margin pharma division subsidising a −4% textile division. The consolidated figure is the average of two businesses you would value at completely different multiples. IFRS 8 segment disclosure, as adopted here, gives you the split — most retail investors never open that page.
- **Compare ROIC to the borrowing rate on the face of the finance-cost note.** If the company earns 9% on invested capital and borrows at 12%, every taka of expansion it announces is destroying shareholder value. Applaud the capex announcement at your own cost.
- **Watch what happens to margin in the year after a big capacity addition.** New capacity depresses margin while it fills. If the margin is still depressed three years later, the capacity was a mistake and the ROIC will confirm it.
- **For power sector names, remember what you are buying.** An IPP's return is a contractual capacity payment under a PPA with BPDB, denominated partly in dollars, dependent on the government paying on time. That is stable-looking margin with sovereign counterparty risk sitting inside it. Chapter 24 covers this. High margin does not mean low risk here — it means the risk sits somewhere other than the margin line.
- **Distrust any ROE above 30% on the DSE without a specific explanation.** The plausible explanations are: very high leverage, a company with almost no fixed assets, a one-off gain, or an equity base depleted by years of high dividend payout. Only one of those is good, and it is the second.`,
      bn: `- **অন্য কিছু গড়ার আগে পাঁচ বছরের মার্জিন ধারা গড়ুন।** পাঁচটি বার্ষিক প্রতিবেদন খুলুন, রাজস্ব, গ্রস মুনাফা ও EBIT বের করুন, এবং তিনটি মার্জিন ধারা গণনা করুন। এতে চল্লিশ মিনিট লাগে এবং পর্ব ২-এর অন্য যেকোনো একক অনুশীলনের চেয়ে বেশি খারাপ বিনিয়োগ বাতিল করে।
- **প্রতিবার ROE ও ROA একই লাইনে লিখুন।** এটি নিজের নোটের একটি বিন্যাস-নিয়ম বানান। "ROE ২২.৪% / ROA ৪.১%" একটি পূর্ণাঙ্গ বক্তব্য। "ROE ২২.৪%" একটি বিভ্রান্তিকর বক্তব্য।
- **সেগমেন্ট নোট পড়ুন।** ১৪% সমন্বিত পরিচালন মার্জিন প্রতিবেদনকারী একটি বাংলাদেশি সমষ্টিতে ৩০%-মার্জিনের ওষুধ বিভাগ থাকতে পারে যা −৪% বস্ত্র বিভাগকে ভর্তুকি দিচ্ছে। সমন্বিত সংখ্যাটি এমন দুটি ব্যবসার গড় যাদের আপনি সম্পূর্ণ ভিন্ন গুণকে মূল্যায়ন করতেন। এখানে গৃহীত IFRS 8 সেগমেন্ট প্রকাশনা আপনাকে বিভাজনটি দেয় — বেশিরভাগ খুচরা বিনিয়োগকারী ঐ পাতাটি কখনো খোলেন না।
- **অর্থায়ন-ব্যয় নোটের গায়ে থাকা ঋণের হারের সঙ্গে ROIC তুলনা করুন।** কোম্পানি যদি বিনিয়োজিত মূলধনে ৯% আয় করে আর ১২%-এ ধার করে, তবে সে যত সম্প্রসারণ ঘোষণা করে তার প্রতিটি টাকা শেয়ারহোল্ডারের মূল্য ধ্বংস করছে। মূলধনি ব্যয়ের ঘোষণায় করতালি দিন নিজের খরচে।
- **বড় সক্ষমতা সংযোজনের পরের বছর মার্জিনের কী হয় দেখুন।** নতুন সক্ষমতা ভরাট হওয়া পর্যন্ত মার্জিন চাপা রাখে। তিন বছর পরেও মার্জিন চাপা থাকলে সক্ষমতাটি ভুল ছিল, এবং ROIC তা নিশ্চিত করবে।
- **বিদ্যুৎ খাতের নামগুলোর ক্ষেত্রে মনে রাখুন আপনি কী কিনছেন।** একটি IPP-র রিটার্ন হলো BPDB-র সঙ্গে PPA-র অধীনে চুক্তিবদ্ধ ক্যাপাসিটি পেমেন্ট, আংশিকভাবে ডলারে নির্ধারিত, সরকারের সময়মতো পরিশোধের ওপর নির্ভরশীল। ওটি স্থিতিশীল-দেখতে মার্জিন যার ভেতরে সার্বভৌম প্রতিপক্ষ ঝুঁকি বসে আছে। অধ্যায় ২৪ এটি আলোচনা করে। এখানে উঁচু মার্জিন মানে কম ঝুঁকি নয় — মানে ঝুঁকিটি মার্জিন লাইনের বাইরে অন্য কোথাও বসে আছে।
- **নির্দিষ্ট ব্যাখ্যা ছাড়া ডিএসই-তে ৩০%-এর ওপরে যেকোনো ROE-কে অবিশ্বাস করুন।** সম্ভাব্য ব্যাখ্যা: অত্যন্ত উঁচু লিভারেজ, প্রায় স্থায়ী সম্পদহীন একটি কোম্পানি, একবারের মুনাফা, অথবা বছরের পর বছর উঁচু লভ্যাংশ প্রদানে ক্ষয়প্রাপ্ত ইকুইটি ভিত্তি। এর কেবল একটি ভালো, এবং সেটি দ্বিতীয়টি।`,
    },

    exercises: {
      en: `1. Download the last five annual reports of any DSE-listed pharmaceutical company and any DSE-listed textile company. Compute the operating margin for each year, then the mean, sample standard deviation, and coefficient of variation for each company. Which has the lower CV? Does the answer change if you use gross margin instead of operating margin, and if so, what does that tell you about where the volatility enters?
2. For the same two companies, compute ROA and ROE for the most recent year using **averaged** balance sheet figures. Then recompute both using closing balances only. Report the difference in percentage points. Which company's ratios moved more, and why?
3. Take one company and compute ROCE and ROIC for FY2024. Find the weighted average interest rate the company actually pays, from the finance cost note and the borrowings note. Is ROIC above or below that rate? Write two sentences on what that implies about any capacity expansion the company has announced.
4. Find a DSE-listed company whose net margin rose year-on-year while its operating margin fell. Identify from the notes exactly which line below EBIT caused it. State whether that line will recur next year.
5. Build the equity multiplier for every company in one DSE sector — take Fuel & Power or Textile, whichever has more listed names you can access. Rank them. Now rank the same companies by ROE. Compare the two rankings. What fraction of the ROE ranking is explained by the leverage ranking alone?
6. Take a company with an effective tax rate below 15%. Read the tax note and identify the source of the relief. Recompute NOPAT and ROIC assuming the statutory 22.5% rate applies from next year. How much of the company's apparent return survives?`,
      bn: `১. যেকোনো ডিএসই-তালিকাভুক্ত ওষুধ কোম্পানি ও যেকোনো ডিএসই-তালিকাভুক্ত বস্ত্র কোম্পানির শেষ পাঁচটি বার্ষিক প্রতিবেদন নামান। প্রতি বছরের পরিচালন মার্জিন গণনা করুন, তারপর প্রতিটি কোম্পানির গড়, নমুনা আদর্শ বিচ্যুতি ও ভেদাঙ্ক। কার ভেদাঙ্ক কম? পরিচালন মার্জিনের বদলে গ্রস মার্জিন ব্যবহার করলে উত্তর বদলায় কি, এবং বদলালে তা অস্থিরতা কোথায় ঢুকছে সে সম্পর্কে কী বলে?
২. একই দুটি কোম্পানির সাম্প্রতিকতম বছরের ROA ও ROE **গড়কৃত** স্থিতিপত্র সংখ্যা দিয়ে গণনা করুন। তারপর কেবল সমাপনী স্থিতি দিয়ে দুটিই পুনর্গণনা করুন। শতাংশ বিন্দুতে পার্থক্য জানান। কোন কোম্পানির অনুপাত বেশি নড়ল, এবং কেন?
৩. একটি কোম্পানি নিয়ে FY2024-এর ROCE ও ROIC গণনা করুন। অর্থায়ন ব্যয় নোট ও ঋণ নোট থেকে কোম্পানি প্রকৃতপক্ষে যে ভারিত গড় সুদহার দেয় তা বের করুন। ROIC ঐ হারের ওপরে না নিচে? কোম্পানির ঘোষিত যেকোনো সক্ষমতা সম্প্রসারণ সম্পর্কে এটি কী বোঝায় — দুই বাক্যে লিখুন।
৪. এমন একটি ডিএসই-তালিকাভুক্ত কোম্পানি খুঁজুন যার নিট মার্জিন বছরে-বছরে বেড়েছে অথচ পরিচালন মার্জিন কমেছে। নোট থেকে ঠিক কোন লাইনটি — EBIT-এর নিচে — এর কারণ তা চিহ্নিত করুন। ঐ লাইনটি আগামী বছর পুনরাবৃত্ত হবে কি না বলুন।
৫. একটি ডিএসই খাতের প্রতিটি কোম্পানির ইকুইটি গুণক বের করুন — জ্বালানি ও বিদ্যুৎ অথবা বস্ত্র নিন, যেটিতে আপনার নাগালে বেশি তালিকাভুক্ত নাম আছে। তাদের ক্রম করুন। এবার একই কোম্পানিগুলোকে ROE অনুযায়ী ক্রম করুন। দুটি ক্রম তুলনা করুন। ROE ক্রমের কত ভগ্নাংশ কেবল লিভারেজ ক্রম দিয়েই ব্যাখ্যাত হয়?
৬. ১৫%-এর নিচে কার্যকর কর হারের একটি কোম্পানি নিন। কর নোট পড়ে ছাড়ের উৎস চিহ্নিত করুন। আগামী বছর থেকে বিধিবদ্ধ ২২.৫% হার প্রযোজ্য ধরে NOPAT ও ROIC পুনর্গণনা করুন। কোম্পানির আপাত রিটার্নের কতটুকু টিকে থাকে?`,
    },

    summary: {
      en: `- Profitability ratios split into two families: **margins** (profit ÷ revenue) and **returns** (profit ÷ capital base). Margins measure pricing. Returns measure efficiency of capital.
- Gross margin isolates pricing power against input cost. Operating margin isolates the business before financing and tax — **it is the correct margin for comparing two companies**. Net margin absorbs everything below EBIT and is the least reliable of the three.
- ROA, ROE, ROCE and ROIC must all be computed on **averaged** capital bases. Closing balances against a full-year profit is an error, not a shortcut.
- ROIC is the strictest measure: NOPAT over equity plus interest-bearing debt minus cash. **When ROIC is below the cost of capital, growth destroys value.** Many DSE textile and steel names have expanded for a decade under exactly that condition.
- **ROE = ROA × equity multiplier.** ROE can exceed ROA only through leverage. Two companies at 18.0% ROE — one at 12% ROA with a 1.5× multiplier, one at 3% ROA with a 6.0× multiplier — are opposite in quality, and a 300 bp rate move cuts the second one's ROE from 18.0% to 9.9% while barely touching the first. The formal decomposition is Chapter 19.
- Margin **stability**, measured as the coefficient of variation of a five-year margin series, is evidence of a moat. Below 10% CV suggests pricing power; above 25% suggests a price taker whose earnings cannot be forecast.
- Benchmarks are sector-specific on the DSE: pharma 40–50% gross margin, telecom 50–60%, power 30–40% but policy-linked, cement 18–25%, textile 12–20%. A single cross-market cut-off passes bad pharma companies and rejects good textile companies simultaneously.
- **Discipline established:** never quote ROE without ROA beside it, never assess a margin without its five-year series, and never accept a return without asking whether the denominator was averaged and whether the tax rate that produced it will repeat.`,
      bn: `- মুনাফা অনুপাত দুটি পরিবারে ভাগ হয়: **মার্জিন** (মুনাফা ÷ রাজস্ব) এবং **রিটার্ন** (মুনাফা ÷ মূলধন ভিত্তি)। মার্জিন মূল্য নির্ধারণ মাপে। রিটার্ন মূলধনের দক্ষতা মাপে।
- গ্রস মার্জিন উপকরণ ব্যয়ের বিপরীতে মূল্য-নির্ধারণ ক্ষমতা পৃথক করে। পরিচালন মার্জিন অর্থায়ন ও করের আগে ব্যবসাটিকে পৃথক করে — **দুটি কোম্পানি তুলনার জন্য এটিই সঠিক মার্জিন**। নিট মার্জিন EBIT-এর নিচের সবকিছু শুষে নেয় এবং তিনটির মধ্যে সবচেয়ে কম নির্ভরযোগ্য।
- ROA, ROE, ROCE ও ROIC — সবই **গড়কৃত** মূলধন ভিত্তিতে গণনা করতে হবে। পূর্ণ বছরের মুনাফার বিপরীতে সমাপনী স্থিতি একটি ভুল, শর্টকাট নয়।
- ROIC কঠোরতম পরিমাপ: ইকুইটি যোগ সুদবাহী ঋণ বিয়োগ নগদের ওপর NOPAT। **ROIC মূলধন ব্যয়ের নিচে থাকলে প্রবৃদ্ধি মূল্য ধ্বংস করে।** ডিএসই-র বহু বস্ত্র ও ইস্পাত নাম ঠিক এই শর্তের অধীনেই এক দশক সম্প্রসারিত হয়েছে।
- **ROE = ROA × ইকুইটি গুণক।** ROE কেবল লিভারেজের মাধ্যমেই ROA ছাড়াতে পারে। ১৮.০% ROE-র দুটি কোম্পানি — একটি ১২% ROA ও ১.৫× গুণকে, অন্যটি ৩% ROA ও ৬.০× গুণকে — গুণমানে বিপরীত, এবং ৩০০ বেসিস পয়েন্টের সুদ পরিবর্তন দ্বিতীয়টির ROE ১৮.০% থেকে ৯.৯%-এ নামিয়ে আনে অথচ প্রথমটিকে প্রায় স্পর্শই করে না। আনুষ্ঠানিক বিশ্লেষণ অধ্যায় ১৯-এ।
- মার্জিনের **স্থিতিশীলতা**, পাঁচ বছরের মার্জিন ধারার ভেদাঙ্ক হিসেবে পরিমাপকৃত, একটি পরিখার প্রমাণ। ১০%-এর নিচে ভেদাঙ্ক মূল্য-নির্ধারণ ক্ষমতা নির্দেশ করে; ২৫%-এর ওপরে নির্দেশ করে একজন মূল্য-গ্রহীতা যার আয়ের পূর্বাভাস দেওয়া যায় না।
- ডিএসই-তে মানদণ্ড খাতভিত্তিক: ওষুধ ৪০–৫০% গ্রস মার্জিন, টেলিকম ৫০–৬০%, বিদ্যুৎ ৩০–৪০% তবে নীতি-সংশ্লিষ্ট, সিমেন্ট ১৮–২৫%, বস্ত্র ১২–২০%। একটি একক বাজারব্যাপী সীমা একসঙ্গে খারাপ ওষুধ কোম্পানি পাস করায় এবং ভালো বস্ত্র কোম্পানি বাতিল করে।
- **প্রতিষ্ঠিত শৃঙ্খলা:** পাশে ROA না রেখে কখনো ROE উদ্ধৃত করবেন না, পাঁচ বছরের ধারা ছাড়া কখনো মার্জিন মূল্যায়ন করবেন না, এবং হর গড়কৃত ছিল কি না এবং যে কর হার রিটার্নটি তৈরি করেছে তা পুনরাবৃত্ত হবে কি না — এই দুটি প্রশ্ন না করে কখনো কোনো রিটার্ন মেনে নেবেন না।`,
    },
  },

  interview: [
    {
      q: {
        en: 'Two companies both report 18% ROE. How do you decide which is the better business?',
        bn: 'দুটি কোম্পানিই ১৮% ROE প্রতিবেদন করেছে। কোনটি ভালো ব্যবসা তা আপনি কীভাবে ঠিক করবেন?',
      },
      a: {
        en: 'Compute ROA for both. ROE equals ROA times the equity multiplier, so an identical ROE with a much lower ROA means the return is coming from leverage rather than from the business. Then check interest coverage and stress the finance cost for a 300 basis point rate rise — the leveraged company loses most of its ROE, the unleveraged one barely moves. Finally compare five-year margin coefficients of variation to see which return is repeatable.',
        bn: 'দুটির ROA গণনা করুন। ROE সমান ROA গুণ ইকুইটি গুণক, তাই অভিন্ন ROE-র সঙ্গে অনেক কম ROA মানে রিটার্নটি ব্যবসা থেকে নয়, লিভারেজ থেকে আসছে। তারপর সুদ আচ্ছাদন দেখুন এবং ৩০০ বেসিস পয়েন্ট সুদ বৃদ্ধির জন্য অর্থায়ন ব্যয়ে চাপ পরীক্ষা করুন — লিভারেজড কোম্পানি তার ROE-র বেশিরভাগ হারায়, লিভারেজবিহীনটি প্রায় নড়েই না। শেষে পাঁচ বছরের মার্জিনের ভেদাঙ্ক তুলনা করে দেখুন কোন রিটার্নটি পুনরাবৃত্তিযোগ্য।',
      },
    },
    {
      q: {
        en: 'What is the difference between ROCE and ROIC, and when would you prefer each?',
        bn: 'ROCE ও ROIC-এর পার্থক্য কী, এবং কখন কোনটি পছন্দ করবেন?',
      },
      a: {
        en: 'ROCE is EBIT over capital employed, which is total assets minus current liabilities — pre-tax and pre-interest. ROIC is NOPAT over invested capital, which is equity plus interest-bearing debt minus cash — post-tax on operating profit, and it excludes idle cash. Use ROCE to compare operating performance across companies with very different tax positions, which matters on the DSE where export rebates and tax holidays distort effective rates. Use ROIC when you are assessing whether growth creates value, because it is the number you compare to the weighted average cost of capital.',
        bn: 'ROCE হলো নিযুক্ত মূলধনের ওপর EBIT, যেখানে নিযুক্ত মূলধন = মোট সম্পদ বিয়োগ চলতি দায় — কর-পূর্ব ও সুদ-পূর্ব। ROIC হলো বিনিয়োজিত মূলধনের ওপর NOPAT, যেখানে বিনিয়োজিত মূলধন = ইকুইটি যোগ সুদবাহী ঋণ বিয়োগ নগদ — পরিচালন মুনাফায় কর-পরবর্তী, এবং অলস নগদ বাদ। অত্যন্ত ভিন্ন কর অবস্থানের কোম্পানির পরিচালনগত কর্মক্ষমতা তুলনায় ROCE ব্যবহার করুন, যা ডিএসই-তে গুরুত্বপূর্ণ কারণ রপ্তানি রেয়াত ও কর অবকাশ কার্যকর হার বিকৃত করে। প্রবৃদ্ধি মূল্য সৃষ্টি করছে কি না মূল্যায়নে ROIC ব্যবহার করুন, কারণ এই সংখ্যাটিই আপনি ভারিত গড় মূলধন ব্যয়ের সঙ্গে তুলনা করেন।',
      },
    },
    {
      q: {
        en: 'A company reports a rising net margin but a falling gross margin. What is happening?',
        bn: 'একটি কোম্পানির নিট মার্জিন বাড়ছে অথচ গ্রস মার্জিন কমছে। কী ঘটছে?',
      },
      a: {
        en: 'The operating business is deteriorating — input cost is rising faster than it can pass through — while something below EBIT is more than offsetting it. Candidates on the DSE are fair-value gains on a listed-share portfolio, foreign exchange gains on receivables, a one-off asset disposal, a deferred tax credit, or a fall in finance cost after a debt repayment. Only the last is operationally meaningful and even that is a financing improvement, not a business improvement. Go to the notes, identify the exact line, and ask whether it recurs.',
        bn: 'পরিচালন ব্যবসাটি অবনতিশীল — উপকরণ ব্যয় যত দ্রুত বাড়ছে কোম্পানি তা চালান করতে পারছে না — অথচ EBIT-এর নিচের কিছু একটা তার চেয়েও বেশি পুষিয়ে দিচ্ছে। ডিএসই-তে সম্ভাব্য কারণ: তালিকাভুক্ত শেয়ার পোর্টফোলিওতে ন্যায্য-মূল্য মুনাফা, পাওনার ওপর বৈদেশিক মুদ্রার লাভ, একবারের সম্পদ বিক্রয়, একটি বিলম্বিত কর ক্রেডিট, অথবা ঋণ পরিশোধের পর অর্থায়ন ব্যয় হ্রাস। কেবল শেষটি পরিচালনগতভাবে অর্থবহ, এবং তা-ও অর্থায়নের উন্নতি, ব্যবসার নয়। নোটে যান, সঠিক লাইনটি চিহ্নিত করুন, এবং জিজ্ঞেস করুন এটি পুনরাবৃত্ত হয় কি না।',
      },
    },
    {
      q: {
        en: 'Why must the denominator of ROA and ROE be an average rather than the closing balance?',
        bn: 'ROA ও ROE-র হর কেন সমাপনী স্থিতি নয়, গড় হতে হবে?',
      },
      a: {
        en: 'Because the numerator is a flow earned across twelve months while the denominator is a stock measured at one instant. If a company raised BDT 200 crore of equity in the eleventh month, closing equity includes capital that generated almost none of the year\'s profit, so ROE is understated. If it paid a large dividend near year-end, closing equity is depleted and ROE is overstated. Averaging opening and closing approximates the capital actually at work through the period.',
        bn: 'কারণ লব হলো বারো মাস জুড়ে অর্জিত একটি প্রবাহ, আর হর হলো এক মুহূর্তে পরিমাপিত একটি মজুত। কোম্পানি যদি এগারোতম মাসে ২০০ কোটি টাকার ইকুইটি সংগ্রহ করে, সমাপনী ইকুইটিতে এমন মূলধন থাকে যা বছরের মুনাফার প্রায় কিছুই তৈরি করেনি, তাই ROE কম দেখায়। বছরান্তের কাছাকাছি বড় লভ্যাংশ দিলে সমাপনী ইকুইটি ক্ষয়প্রাপ্ত হয় এবং ROE বেশি দেখায়। প্রারম্ভিক ও সমাপনীর গড় নিলে সময়কাল জুড়ে প্রকৃতপক্ষে কর্মরত মূলধনের কাছাকাছি পৌঁছায়।',
      },
    },
    {
      q: {
        en: 'How would you use margin volatility to judge whether a company has a competitive moat?',
        bn: 'একটি কোম্পানির প্রতিযোগিতামূলক পরিখা আছে কি না বিচারে আপনি মার্জিনের অস্থিরতা কীভাবে ব্যবহার করবেন?',
      },
      a: {
        en: 'Take at least five years of operating margin, compute the mean and the sample standard deviation, and divide the standard deviation by the mean to get a coefficient of variation. Below roughly 10% the company is holding its margin through input-cost cycles, which is consistent with pricing power from a brand, a licence, a distribution network, or a switching cost. Above 25% the company is a price taker and its earnings are determined by commodity and currency movements it does not control. A low CV is evidence, not proof — a company can be stably mediocre — but a high CV is close to proof that no moat exists.',
        bn: 'অন্তত পাঁচ বছরের পরিচালন মার্জিন নিন, গড় ও নমুনা আদর্শ বিচ্যুতি গণনা করুন, এবং আদর্শ বিচ্যুতিকে গড় দিয়ে ভাগ করে ভেদাঙ্ক বের করুন। প্রায় ১০%-এর নিচে হলে কোম্পানি উপকরণ-ব্যয় চক্রের মধ্যেও মার্জিন ধরে রাখছে, যা ব্র্যান্ড, লাইসেন্স, বিতরণ নেটওয়ার্ক বা বদল-ব্যয় থেকে আসা মূল্য-নির্ধারণ ক্ষমতার সঙ্গে সঙ্গতিপূর্ণ। ২৫%-এর ওপরে হলে কোম্পানি একজন মূল্য-গ্রহীতা এবং তার আয় নির্ধারণ করে এমন পণ্যদ্রব্য ও মুদ্রার নড়াচড়া যা সে নিয়ন্ত্রণ করে না। কম ভেদাঙ্ক প্রমাণ নয়, ইঙ্গিত — একটি কোম্পানি স্থিতিশীলভাবে মাঝারিও হতে পারে — কিন্তু উঁচু ভেদাঙ্ক পরিখার অনুপস্থিতির প্রায়-চূড়ান্ত প্রমাণ।',
      },
    },
    {
      q: {
        en: 'A DSE textile company has announced a large capacity expansion. What single ratio determines whether you should welcome it?',
        bn: 'একটি ডিএসই বস্ত্র কোম্পানি বড় সক্ষমতা সম্প্রসারণ ঘোষণা করেছে। কোন একক অনুপাত ঠিক করে দেয় আপনি একে স্বাগত জানাবেন কি না?',
      },
      a: {
        en: 'ROIC compared to the weighted average cost of capital. If ROIC is comfortably above WACC, additional invested capital earns more than it costs and the expansion creates shareholder value. If ROIC is below the company\'s own borrowing rate — which is common among Bangladeshi textile and steel names — then every taka of new capacity destroys value, and the expansion is a transfer from shareholders to lenders and contractors. Growth is only good conditional on the return on the capital that funds it.',
        bn: 'ভারিত গড় মূলধন ব্যয়ের সঙ্গে তুলনায় ROIC। ROIC যদি স্বচ্ছন্দে WACC-এর ওপরে থাকে, অতিরিক্ত বিনিয়োজিত মূলধন তার খরচের চেয়ে বেশি আয় করে এবং সম্প্রসারণ শেয়ারহোল্ডারের মূল্য সৃষ্টি করে। ROIC যদি কোম্পানির নিজের ঋণ হারের নিচে থাকে — যা বাংলাদেশি বস্ত্র ও ইস্পাত নামগুলোর মধ্যে সাধারণ — তবে নতুন সক্ষমতার প্রতিটি টাকা মূল্য ধ্বংস করে, এবং সম্প্রসারণটি শেয়ারহোল্ডার থেকে ঋণদাতা ও ঠিকাদারের কাছে একটি হস্তান্তর। প্রবৃদ্ধি কেবল তখনই ভালো যখন তাকে অর্থায়নকারী মূলধনের রিটার্ন শর্ত পূরণ করে।',
      },
    },
  ],

  quiz: [
    {
      q: {
        en: 'Operating margin is calculated as:',
        bn: 'পরিচালন মার্জিন গণনা করা হয়:',
      },
      options: {
        en: ['Gross profit ÷ revenue', 'EBIT ÷ revenue', 'Net profit ÷ revenue', 'EBIT ÷ total assets'],
        bn: ['গ্রস মুনাফা ÷ রাজস্ব', 'EBIT ÷ রাজস্ব', 'নিট মুনাফা ÷ রাজস্ব', 'EBIT ÷ মোট সম্পদ'],
      },
      answer: 1,
    },
    {
      q: {
        en: 'ROE exceeds ROA only because of:',
        bn: 'ROE কেবল কোন কারণে ROA ছাড়িয়ে যায়:',
      },
      options: {
        en: ['Higher margins', 'Faster asset turnover', 'Financial leverage', 'A lower tax rate'],
        bn: ['উঁচু মার্জিন', 'দ্রুততর সম্পদ টার্নওভার', 'আর্থিক লিভারেজ', 'কম কর হার'],
      },
      answer: 2,
    },
    {
      q: {
        en: 'Capital employed is defined as:',
        bn: 'নিযুক্ত মূলধনের সংজ্ঞা:',
      },
      options: {
        en: ['Equity only', 'Total assets − current liabilities', 'Equity + cash', 'Total assets − total liabilities'],
        bn: ['কেবল ইকুইটি', 'মোট সম্পদ − চলতি দায়', 'ইকুইটি + নগদ', 'মোট সম্পদ − মোট দায়'],
      },
      answer: 1,
    },
    {
      q: {
        en: 'Invested capital in the ROIC formula subtracts:',
        bn: 'ROIC সূত্রে বিনিয়োজিত মূলধন থেকে বিয়োগ করা হয়:',
      },
      options: {
        en: ['Inventory', 'Cash and equivalents', 'Trade payables', 'Deferred tax'],
        bn: ['মজুদ', 'নগদ ও সমতুল্য', 'বাণিজ্যিক পাওনা', 'বিলম্বিত কর'],
      },
      answer: 1,
    },
    {
      q: {
        en: 'Amanat Pharmaceuticals: net profit 170.50, average total assets 1,500. ROA is:',
        bn: 'আমানত ফার্মাসিউটিক্যালস: নিট মুনাফা ১৭০.৫০, গড় মোট সম্পদ ১,৫০০। ROA হলো:',
      },
      options: {
        en: ['11.37%', '13.64%', '17.95%', '21.55%'],
        bn: ['১১.৩৭%', '১৩.৬৪%', '১৭.৯৫%', '২১.৫৫%'],
      },
      answer: 0,
    },
    {
      q: {
        en: 'A company with ROA 3.0% and an equity multiplier of 6.0× has an ROE of:',
        bn: '৩.০% ROA ও ৬.০× ইকুইটি গুণকের কোম্পানির ROE হলো:',
      },
      options: {
        en: ['9.0%', '12.0%', '18.0%', '24.0%'],
        bn: ['৯.০%', '১২.০%', '১৮.০%', '২৪.০%'],
      },
      answer: 2,
    },
    {
      q: {
        en: 'A five-year operating margin series with mean 20.0% and sample standard deviation 0.95 pp has a coefficient of variation of:',
        bn: '২০.০% গড় ও ০.৯৫ পয়েন্ট নমুনা আদর্শ বিচ্যুতির পাঁচ-বছরের পরিচালন মার্জিন ধারার ভেদাঙ্ক:',
      },
      options: {
        en: ['0.95%', '4.74%', '19.05%', '21.05%'],
        bn: ['০.৯৫%', '৪.৭৪%', '১৯.০৫%', '২১.০৫%'],
      },
      answer: 1,
    },
    {
      q: {
        en: 'Which DSE sector would you expect to show the highest gross margin?',
        bn: 'ডিএসই-র কোন খাতে সর্বোচ্চ গ্রস মার্জিন প্রত্যাশা করবেন?',
      },
      options: {
        en: ['Textile (export)', 'Cement', 'Telecommunication', 'Engineering'],
        bn: ['বস্ত্র (রপ্তানি)', 'সিমেন্ট', 'টেলিযোগাযোগ', 'প্রকৌশল'],
      },
      answer: 2,
    },
    {
      q: {
        en: 'NOPAT is calculated as:',
        bn: 'NOPAT গণনা করা হয়:',
      },
      options: {
        en: ['Net profit + finance cost', 'EBIT × (1 − effective tax rate)', 'PBT × (1 − tax rate)', 'Gross profit − tax'],
        bn: ['নিট মুনাফা + অর্থায়ন ব্যয়', 'EBIT × (১ − কার্যকর কর হার)', 'কর-পূর্ব মুনাফা × (১ − কর হার)', 'গ্রস মুনাফা − কর'],
      },
      answer: 1,
    },
    {
      q: {
        en: 'When ROIC sits below the weighted average cost of capital, additional growth:',
        bn: 'ROIC যখন ভারিত গড় মূলধন ব্যয়ের নিচে থাকে, তখন অতিরিক্ত প্রবৃদ্ধি:',
      },
      options: {
        en: ['Creates shareholder value', 'Is value-neutral', 'Destroys shareholder value', 'Raises the ROE automatically'],
        bn: ['শেয়ারহোল্ডারের মূল্য সৃষ্টি করে', 'মূল্য-নিরপেক্ষ', 'শেয়ারহোল্ডারের মূল্য ধ্বংস করে', 'স্বয়ংক্রিয়ভাবে ROE বাড়ায়'],
      },
      answer: 2,
    },
  ],
};
