/**
 * Chapter 18 — Valuation Ratios: P/E, P/B, PEG
 * Part II, Fundamental Analysis.
 * Chapters 13–17 measured the business. This chapter measures the price
 * paid for it — and establishes that every multiple is only as reliable
 * as the accounting number sitting in its denominator.
 */

export default {
  n: 18,
  tools: [],

  excelSheet: {
    filename: 'ch18-valuation-dashboard.xlsx',
    sheetName: 'Valuation',
    cells: [
      { cell: 'A1', v: 'COMPANY' }, { cell: 'B1', v: 'DSE Textile Co (illustrative)' },

      { cell: 'A3', v: 'Price (BDT)' }, { cell: 'B3', v: 45 },
      { cell: 'A4', v: 'Shares Outstanding (crore)' }, { cell: 'B4', v: 30 },
      { cell: 'A5', v: 'Market Cap (BDT cr)' }, { cell: 'B5', f: 'B3*B4' },

      { cell: 'A7', v: 'Net Profit (BDT cr)' }, { cell: 'B7', v: 150 },
      { cell: 'A8', v: 'Cash from Operations (BDT cr)' }, { cell: 'B8', v: 45 },
      { cell: 'A9', v: 'Total Assets (BDT cr)' }, { cell: 'B9', v: 2100 },
      { cell: 'A10', v: 'Equity as Reported (BDT cr)' }, { cell: 'B10', v: 1000 },
      { cell: 'A11', v: 'Revaluation Reserve / Provision Shortfall' }, { cell: 'B11', v: 400 },
      { cell: 'A12', v: 'EBITDA (BDT cr)' }, { cell: 'B12', v: 200 },
      { cell: 'A13', v: 'Total Debt (BDT cr)' }, { cell: 'B13', v: 700 },
      { cell: 'A14', v: 'Cash & Equivalents (BDT cr)' }, { cell: 'B14', v: 50 },
      { cell: 'A15', v: 'DPS (BDT)' }, { cell: 'B15', v: 1.5 },
      { cell: 'A16', v: 'Forward Earnings Growth (%)' }, { cell: 'B16', v: 6 },

      { cell: 'A18', v: 'HEADLINE MULTIPLES' },
      { cell: 'A19', v: 'EPS (BDT)' }, { cell: 'B19', f: 'B7/B4' },
      { cell: 'A20', v: 'P/E Trailing (x)' }, { cell: 'B20', f: 'B3/B19' },
      { cell: 'A21', v: 'Forward EPS (BDT)' }, { cell: 'B21', f: 'B19*(1+B16/100)' },
      { cell: 'A22', v: 'P/E Forward (x)' }, { cell: 'B22', f: 'B3/B21' },
      { cell: 'A23', v: 'Earnings Yield (%)' }, { cell: 'B23', f: 'B19/B3*100' },
      { cell: 'A24', v: 'BVPS Reported (BDT)' }, { cell: 'B24', f: 'B10/B4' },
      { cell: 'A25', v: 'P/B Reported (x)' }, { cell: 'B25', f: 'B3/B24' },
      { cell: 'A26', v: 'PEG' }, { cell: 'B26', f: 'B20/B16' },
      { cell: 'A27', v: 'Enterprise Value (BDT cr)' }, { cell: 'B27', f: 'B5+B13-B14' },
      { cell: 'A28', v: 'EV / EBITDA (x)' }, { cell: 'B28', f: 'B27/B12' },
      { cell: 'A29', v: 'Dividend Yield (%)' }, { cell: 'B29', f: 'B15/B3*100' },

      { cell: 'A31', v: 'QUALITY ADJUSTMENT' },
      { cell: 'A32', v: 'CFO per Share (BDT)' }, { cell: 'B32', f: 'B8/B4' },
      { cell: 'A33', v: 'Cash Conversion CFO/NP (%)' }, { cell: 'B33', f: 'B8/B7*100' },
      { cell: 'A34', v: 'QUALITY-ADJUSTED P/E (x)' }, { cell: 'B34', f: 'B20/(B33/100)' },
      { cell: 'A35', v: 'Accrual Ratio (%)' }, { cell: 'B35', f: '(B7-B8)/B9*100' },
      { cell: 'A36', v: 'Adjusted Equity (BDT cr)' }, { cell: 'B36', f: 'B10-B11' },
      { cell: 'A37', v: 'Adjusted BVPS (BDT)' }, { cell: 'B37', f: 'B36/B4' },
      { cell: 'A38', v: 'ADJUSTED P/B (x)' }, { cell: 'B38', f: 'IF(B37<=0,"NEGATIVE EQUITY",B3/B37)' },
      { cell: 'A39', v: 'Cash Payout Ratio (%)' }, { cell: 'B39', f: 'B15/B32*100' },

      { cell: 'A41', v: 'THE GAP' },
      { cell: 'A42', v: 'P/E Understatement (x)' }, { cell: 'B42', f: 'B34/B20' },
      { cell: 'A43', v: 'P/B Understatement (x)' }, { cell: 'B43', f: 'IF(B37<=0,"n/a",B3/B37/B25)' },
      { cell: 'A44', v: 'VERDICT' },
      {
        cell: 'B44',
        f: 'IF(OR(B42>2,B33<60),"VALUE TRAP - the low multiple prices a defect",IF(OR(B43>1.5,B39>90),"CAUTION - verify the flagged item","Multiple supported by cash"))',
      },

      { cell: 'A46', v: 'NOTE' },
      { cell: 'B46', v: 'B42 and B43 are the sheet. They measure how much of the apparent cheapness survives contact with cash flow and with an honest book. A headline multiple is an input to this sheet, never an output of it.' },
    ],
  },

  objectives: {
    en: [
      'Compute trailing P/E, forward P/E, P/B, tangible P/B, PEG, EV/EBITDA, earnings yield and dividend yield from a DSE annual report.',
      'Restate any P/E on cash earnings and demonstrate that a P/E of 9 on accrual-driven profit is not cheap.',
      'Adjust book value for revaluation surplus and for provision shortfall, and recompute P/B on the adjusted figure.',
      'State the indicative multiple range appropriate to each major DSE sector and explain why a single benchmark across sectors is meaningless.',
      'Explain why comparing a DSE multiple against a US multiple repeats the category error Chapter 1 identified in the Buffett Indicator.',
    ],
    bn: [
      'একটি ডিএসই বার্ষিক প্রতিবেদন থেকে ট্রেইলিং P/E, ফরওয়ার্ড P/E, P/B, ট্যানজিবল P/B, PEG, EV/EBITDA, আয় ইল্ড ও লভ্যাংশ ইল্ড গণনা করা।',
      'যেকোনো P/E-কে নগদ আয়ের ভিত্তিতে পুনর্গঠন করা এবং দেখানো যে অ্যাক্রুয়াল-চালিত মুনাফার ওপর ৯ P/E সস্তা নয়।',
      'পুনর্মূল্যায়ন উদ্বৃত্ত ও প্রভিশন ঘাটতির জন্য বুক ভ্যালু সমন্বয় করা এবং সমন্বিত সংখ্যার ওপর P/B পুনরায় গণনা করা।',
      'ডিএসই-র প্রতিটি প্রধান খাতের জন্য উপযুক্ত নির্দেশক গুণক পরিসর বলা এবং কেন সব খাতে একটিমাত্র মানদণ্ড অর্থহীন তা ব্যাখ্যা করা।',
      'কেন একটি ডিএসই গুণককে একটি মার্কিন গুণকের সঙ্গে তুলনা করা অধ্যায় ১-এ বাফেট নির্দেশকে চিহ্নিত সেই একই শ্রেণিগত ভুলের পুনরাবৃত্তি তা ব্যাখ্যা করা।',
    ],
  },

  blocks: {
    theory: {
      en: `Chapters 13 through 17 measured the business: whether the profit was real, whether the company can pay its bills, whether it earns a decent return, whether it uses its assets, and who controls its future. **This chapter measures something entirely different — the price you are being asked to pay for all of that.**

A valuation multiple is a fraction. The numerator is a market price, which is observable, continuous, and beyond argument. The denominator is an accounting number, which is none of those things.

**Every error in this chapter comes from forgetting that asymmetry.**

### The multiples, stated precisely

**Trailing P/E.** Price divided by the last twelve months of reported earnings per share. It is the most quoted number in Bangladeshi market commentary and the most abused. It is backward-looking by construction: it tells you what you are paying for earnings the company has already delivered and may never deliver again.

**Forward P/E.** Price divided by *estimated* next-year EPS. In a market with deep sell-side coverage this is the more useful figure. **On the DSE it is frequently worse than useless**, because analyst coverage is thin, forecasts are often supplied by the company itself, and there is no meaningful consensus to average away individual bias. If you use a forward P/E on a DSE scrip, the growth estimate is yours and you own the error.

**P/B.** Price divided by net asset value per share. **Tangible P/B** strips goodwill and intangibles from equity first.

**PEG.** P/E divided by the annual earnings growth rate in percentage points. Below 1.0 is conventionally "growth available at a reasonable price."

**EV/EBITDA.** Enterprise value — market capitalisation plus debt minus cash — divided by EBITDA. It values the *whole firm* rather than the equity slice, which makes it the only multiple in this chapter that is not distorted by capital structure.

**Earnings yield.** The reciprocal of P/E, expressed as a percentage. Its virtue is that it is directly comparable to a bond yield.

**Dividend yield.** Dividend per share over price. Chapter 20 handles this properly; here it appears only as a valuation cross-check.

---

### First argument: P/E is meaningless without earnings quality

Chapter 13 established the accruals framework: reported profit is cash flow plus accruals, and accruals are the portion of profit that management has estimated rather than collected. The accrual ratio — net profit less operating cash flow, over total assets — measures how much of the year's earnings is a judgement rather than a receipt.

Now put those two chapters together.

$$\\text{P/E} = \\frac{\\text{Price}}{\\text{EPS}}$$

**If EPS is 70% accruals, then 70% of that denominator is an opinion.** The multiple inherits every weakness of the number underneath it, and it inherits them silently, because the ratio prints to two decimal places either way.

The correction is arithmetically trivial and almost never performed:

$$\\text{P/E}_{quality} = \\frac{\\text{P/E}}{\\text{Cash Conversion}} = \\frac{\\text{Price}}{\\text{CFO per share}}$$

where cash conversion is operating cash flow divided by net profit. A company converting 116% of profit into cash sees its P/E of 9.0 fall to 7.7. A company converting 30% sees its P/E of 9.0 rise to **30.0**.

**Those two companies are quoted at the identical multiple and are not remotely the same investment.** One is cheap. The other is a business whose reported profits have not arrived in the bank and whose share price is being justified by a ratio computed on money that does not exist yet.

This is the single most common analytical failure on the DSE. **A P/E of 9 on accrual-driven earnings is not cheap. It is a P/E of 30 wearing a disguise, and the disguise is supplied by the income statement.**

Screen on the quality-adjusted figure or do not screen on P/E at all.

---

### Second argument: P/B is meaningless when book value is unreliable

P/B has the same structural defect in a different place. Its denominator is shareholders' equity — an accounting residual, not a market value, and in Bangladesh a residual with two well-documented distortions.

**Distortion one: revaluation surplus.** Chapter 11 established that Bangladeshi balance sheets routinely carry land and buildings at revalued amounts, with the uplift sitting inside equity as a revaluation reserve. That reserve is not retained profit, was not contributed by shareholders, and represents no cash. **A company that revalues its land upward reduces its P/B without doing anything.** For DSE textile, jute and older manufacturing companies the revaluation reserve is frequently 30–50% of stated equity.

Compute P/B twice. Once as reported. Once with revaluation surplus removed:

$$\\text{P/B}_{adj} = \\frac{\\text{Price}}{(\\text{Equity} - \\text{Revaluation Reserve})/\\text{Shares}}$$

**Distortion two: unrecognised losses.** Chapter 23 works this out in full for banks. The short version: reported NPL excludes rescheduled loans, written-off loans, and loans under court injunction. Reconstructing the true stressed book and provisioning it honestly can consume most of stated equity.

This produces the most important sentence in the chapter for anyone looking at DSE banks:

**A bank at P/B 0.6 is not a mispricing. It is the market pricing the adjusted book value.**

The market does not believe the stated equity. It has applied its own haircut, and the 0.6 you observe is *the answer to a calculation that has already been performed*. An investor who buys at 0.6× "because it is below book" has not found a discount; they have found the residue of other people's arithmetic and mistaken it for an opportunity. Chapter 23 shows the worked reconstruction in which a bank at 0.60× reported book trades at 2.91× adjusted book.

That does not mean every discount is correct. It means **the discount is a hypothesis about asset quality, and your job is to test the hypothesis, not to celebrate the number.**

---

### Sector-appropriate ranges on the DSE

There is no such thing as a cheap P/E in the abstract. Multiples are sector-specific because the underlying economics are. Indicative ranges observed on the DSE — **these move with the cycle and with liquidity; treat them as orientation, not thresholds:**

| Sector | Indicative P/E | Indicative P/B | What drives the range |
|---|---|---|---|
| Pharmaceuticals | 12–20× | 2.0–4.0× | Cash-converting, low leverage, domestic demand growth |
| Banks | 5–10× | 0.5–1.2× | Book value is the question, not the answer (Ch 23) |
| NBFIs | often negative or n/m | 0.3–1.0× | Severe asset-quality stress; several have negative equity |
| Cement | 10–25×, inverts at the cycle top | 1.0–2.5× | High operating and financial leverage (Ch 17) |
| Textile / RMG | 6–12× | 0.6–1.5× | Revaluation-heavy book; thin, volatile margins |
| Power (IPP) | 5–9× | 1.0–2.0× | Contract expiry risk and government receivable risk |
| Telecom | 10–15× | high or n/m | Asset-light equity base; multiple driven by dividend |
| Engineering | 10–18× | 1.0–2.5× | Order-book dependent, working-capital heavy |
| Food & allied (MNC) | 25–50× | 5–20× | **Free-float scarcity, not superior quality** |
| Mutual funds | n/m | 0.4–0.9× of NAV | Persistent structural discount to net asset value |

Two observations carry more weight than the numbers.

**The MNC row is not a quality premium.** Several multinational subsidiaries listed on the DSE have very small free floats. A multiple set by trading in 5% of the shares tells you about the scarcity of the float, not the value of the business. Chapter 8's work on how DSE sectors actually trade applies directly.

**A cyclical's P/E inverts.** Cement and other cyclicals show their *lowest* P/E at the peak of the cycle, when trailing earnings are at their maximum and about to fall. The moment a cyclical looks cheapest on trailing earnings is frequently the moment to sell it. Use EV/EBITDA across a full cycle, or mid-cycle earnings, instead.

---

### Why comparing a DSE multiple to a US multiple is a category error

You will read, repeatedly, that "the DSE trades at 11× against 22× for the S&P 500, so Bangladesh is cheap."

**This is exactly the error Chapter 1 identified in the Buffett Indicator.** There, market capitalisation to GDP was shown to be uninterpretable across countries, because the ratio compares a listed universe to an economy and the relationship between the two is a structural fact about each country — how much of the economy is listed at all — rather than a valuation signal.

A cross-border P/E comparison fails in the same way, for reasons that are specific and enumerable:

- **Different risk-free rates.** When the Bangladesh government pays 11–12% on a treasury instrument, an equity earnings yield must clear that hurdle. An 11× P/E is a 9.1% earnings yield — *below* the risk-free rate. A 22× P/E in a market with a 4% risk-free rate is a 4.5% earnings yield, comfortably above it. **On a spread-to-sovereign basis the expensive-looking market is the cheaper one.**
- **Different currency risk.** Taka earnings must be discounted for depreciation risk that dollar earnings do not carry.
- **Different earnings quality regimes.** Chapter 13's accruals work exists because DSE earnings quality is more variable. Two P/Es computed on denominators of different reliability are not comparable numbers.
- **Different index composition.** A Bangladeshi index dominated by banks and levered manufacturers *should* trade at a lower multiple than one dominated by software companies with high returns on capital. Comparing them measures sector mix, not value.
- **Different governance and float.** Concentrated sponsor ownership, thin floats, and the disclosure environment of Chapter 9 all justify a structural discount.

**The correct comparison is always within a market and within a sector, and preferably against that same company's own history.** A DSE pharma company at 22× when its own ten-year median is 15× is expensive. That statement is defensible. "Bangladesh is cheap versus America" is not a statement about value; it is a statement about two different countries.`,
      bn: `অধ্যায় ১৩ থেকে ১৭ ব্যবসাটি মেপেছে: মুনাফা প্রকৃত কি না, কোম্পানি বিল দিতে পারে কি না, ভদ্রস্থ রিটার্ন আয় করে কি না, সম্পদ কাজে লাগায় কি না, এবং তার ভবিষ্যৎ কে নিয়ন্ত্রণ করে। **এই অধ্যায় সম্পূর্ণ ভিন্ন কিছু মাপে — ঐ সবকিছুর জন্য আপনাকে যে দাম দিতে বলা হচ্ছে তা।**

একটি মূল্যায়ন গুণক একটি ভগ্নাংশ। লব একটি বাজারমূল্য, যা পর্যবেক্ষণযোগ্য, ধারাবাহিক এবং তর্কাতীত। হর একটি হিসাবরক্ষণ সংখ্যা, যা এর কোনোটিই নয়।

**এই অধ্যায়ের প্রতিটি ভুল ঐ অসমতা ভুলে যাওয়া থেকে আসে।**

### গুণকগুলো, সুনির্দিষ্টভাবে

**ট্রেইলিং P/E।** দাম ভাগ গত বারো মাসের প্রতিবেদিত শেয়ারপ্রতি আয়। বাংলাদেশি বাজার আলোচনায় এটি সবচেয়ে বেশি উদ্ধৃত সংখ্যা এবং সবচেয়ে বেশি অপব্যবহৃত। এটি গঠনগতভাবেই পশ্চাৎমুখী: এটি বলে কোম্পানি যে আয় ইতিমধ্যে দিয়েছে এবং হয়তো আর কখনো দেবে না, তার জন্য আপনি কত দিচ্ছেন।

**ফরওয়ার্ড P/E।** দাম ভাগ *প্রাক্কলিত* পরবর্তী বছরের EPS। গভীর সেল-সাইড কভারেজের বাজারে এটি বেশি কার্যকর সংখ্যা। **ডিএসই-তে এটি প্রায়ই অকেজোর চেয়েও খারাপ**, কারণ বিশ্লেষক কভারেজ পাতলা, পূর্বাভাস প্রায়ই কোম্পানি নিজেই সরবরাহ করে, এবং ব্যক্তিগত পক্ষপাত গড় করে সরানোর মতো অর্থবহ কোনো ঐকমত্য নেই। ডিএসই স্ক্রিপে ফরওয়ার্ড P/E ব্যবহার করলে প্রবৃদ্ধির অনুমানটি আপনার এবং ভুলটিও আপনার।

**P/B।** দাম ভাগ শেয়ারপ্রতি নিট সম্পদ মূল্য। **ট্যানজিবল P/B** আগে ইকুইটি থেকে সুনাম ও অস্পৃশ্য সম্পদ বাদ দেয়।

**PEG।** P/E ভাগ শতকরা পয়েন্টে বার্ষিক আয় প্রবৃদ্ধির হার। ১.০-এর নিচে প্রচলিতভাবে "যুক্তিসঙ্গত দামে প্রবৃদ্ধি"।

**EV/EBITDA।** এন্টারপ্রাইজ ভ্যালু — বাজার মূলধন যোগ ঋণ বিয়োগ নগদ — ভাগ EBITDA। এটি ইকুইটি অংশ নয়, *সম্পূর্ণ কোম্পানির* মূল্যায়ন করে, যা একে এই অধ্যায়ের একমাত্র গুণক করে তোলে যা মূলধন কাঠামো দ্বারা বিকৃত হয় না।

**আয় ইল্ড।** P/E-র বিপরীত, শতাংশে প্রকাশিত। এর গুণ হলো এটি সরাসরি বন্ড ইল্ডের সঙ্গে তুলনীয়।

**লভ্যাংশ ইল্ড।** শেয়ারপ্রতি লভ্যাংশ ভাগ দাম। অধ্যায় ২০ এটি যথাযথভাবে দেখে; এখানে এটি কেবল মূল্যায়নের ক্রস-চেক হিসেবে আসে।

---

### প্রথম যুক্তি: আয়ের গুণমান ছাড়া P/E অর্থহীন

অধ্যায় ১৩ অ্যাক্রুয়াল কাঠামো প্রতিষ্ঠা করেছে: প্রতিবেদিত মুনাফা হলো নগদ প্রবাহ যোগ অ্যাক্রুয়াল, আর অ্যাক্রুয়াল হলো মুনাফার সেই অংশ যা ব্যবস্থাপনা আদায় করেনি, অনুমান করেছে। অ্যাক্রুয়াল অনুপাত — নিট মুনাফা বিয়োগ পরিচালন নগদ প্রবাহ, ভাগ মোট সম্পদ — মাপে বছরের আয়ের কতটা প্রাপ্তি নয় বরং বিচার।

এবার এই দুই অধ্যায় একসঙ্গে রাখুন।

$$\\text{P/E} = \\frac{\\text{Price}}{\\text{EPS}}$$

**EPS যদি ৭০% অ্যাক্রুয়াল হয়, তবে ঐ হরের ৭০% একটি মতামত।** গুণকটি তার নিচের সংখ্যার প্রতিটি দুর্বলতা উত্তরাধিকারসূত্রে পায়, এবং নীরবে পায়, কারণ অনুপাতটি দুই দশমিক ঘর পর্যন্ত একইভাবে ছাপা হয়।

সংশোধনটি পাটিগাণিতিকভাবে তুচ্ছ এবং প্রায় কখনো করা হয় না:

$$\\text{P/E}_{quality} = \\frac{\\text{P/E}}{\\text{Cash Conversion}} = \\frac{\\text{Price}}{\\text{CFO per share}}$$

যেখানে নগদ রূপান্তর হলো পরিচালন নগদ প্রবাহ ভাগ নিট মুনাফা। যে কোম্পানি মুনাফার ১১৬% নগদে রূপান্তর করে তার ৯.০ P/E নেমে আসে ৭.৭-এ। যে কোম্পানি ৩০% রূপান্তর করে তার ৯.০ P/E ওঠে **৩০.০**-এ।

**ঐ দুই কোম্পানি অভিন্ন গুণকে উদ্ধৃত এবং মোটেও এক বিনিয়োগ নয়।** একটি সস্তা। অন্যটি এমন ব্যবসা যার প্রতিবেদিত মুনাফা ব্যাংকে পৌঁছায়নি এবং যার শেয়ারের দাম এমন এক অনুপাত দিয়ে সমর্থিত হচ্ছে যা এখনো অস্তিত্বহীন টাকার ওপর গণিত।

ডিএসই-তে এটিই একক সবচেয়ে সাধারণ বিশ্লেষণী ব্যর্থতা। **অ্যাক্রুয়াল-চালিত আয়ের ওপর ৯ P/E সস্তা নয়। এটি ছদ্মবেশে থাকা ৩০ P/E, আর ছদ্মবেশটি আয় বিবরণী সরবরাহ করে।**

গুণমান-সমন্বিত সংখ্যার ওপর স্ক্রিন করুন, নয়তো P/E-তে আদৌ স্ক্রিন করবেন না।

---

### দ্বিতীয় যুক্তি: বুক ভ্যালু অনির্ভরযোগ্য হলে P/B অর্থহীন

P/B-র একই কাঠামোগত ত্রুটি ভিন্ন জায়গায়। এর হর হলো শেয়ারহোল্ডারদের ইকুইটি — একটি হিসাবরক্ষণ অবশিষ্টাংশ, বাজারমূল্য নয়, এবং বাংলাদেশে এমন এক অবশিষ্টাংশ যাতে দুটি সুপ্রলিখিত বিকৃতি আছে।

**বিকৃতি এক: পুনর্মূল্যায়ন উদ্বৃত্ত।** অধ্যায় ১১ প্রতিষ্ঠা করেছে যে বাংলাদেশি স্থিতিপত্রে জমি ও ভবন নিয়মিতভাবে পুনর্মূল্যায়িত অঙ্কে থাকে, এবং বৃদ্ধিটি পুনর্মূল্যায়ন সঞ্চিতি হিসেবে ইকুইটির ভেতরে বসে। ঐ সঞ্চিতি সংরক্ষিত মুনাফা নয়, শেয়ারহোল্ডাররা দেননি, এবং কোনো নগদের প্রতিনিধিত্ব করে না। **যে কোম্পানি জমির মূল্য বাড়িয়ে দেখায় সে কিছু না করেই P/B কমিয়ে ফেলে।** ডিএসই-র বস্ত্র, পাট ও পুরোনো উৎপাদন কোম্পানিতে পুনর্মূল্যায়ন সঞ্চিতি প্রায়ই ঘোষিত ইকুইটির ৩০–৫০%।

P/B দুইবার গণনা করুন। একবার প্রকাশিত অনুযায়ী। একবার পুনর্মূল্যায়ন উদ্বৃত্ত সরিয়ে:

$$\\text{P/B}_{adj} = \\frac{\\text{Price}}{(\\text{Equity} - \\text{Revaluation Reserve})/\\text{Shares}}$$

**বিকৃতি দুই: অস্বীকৃত ক্ষতি।** অধ্যায় ২৩ ব্যাংকের জন্য এটি পূর্ণাঙ্গভাবে করে দেখায়। সংক্ষেপে: প্রতিবেদিত NPL পুনঃতফসিলকৃত ঋণ, অবলোপনকৃত ঋণ ও আদালতের নিষেধাজ্ঞাধীন ঋণ বাদ দেয়। প্রকৃত চাপগ্রস্ত খাতা পুনর্গঠন করে সৎভাবে প্রভিশন রাখলে ঘোষিত ইকুইটির অধিকাংশই নিঃশেষ হতে পারে।

ডিএসই-র ব্যাংক দেখছেন এমন যে কারো জন্য এটিই অধ্যায়ের সবচেয়ে গুরুত্বপূর্ণ বাক্য তৈরি করে:

**০.৬ P/B-তে একটি ব্যাংক কোনো ভুল মূল্যায়ন নয়। এটি বাজারের সমন্বিত বুক ভ্যালুর দাম দেওয়া।**

বাজার ঘোষিত ইকুইটি বিশ্বাস করে না। সে নিজের ছাঁটাই প্রয়োগ করেছে, আর আপনি যে ০.৬ দেখছেন তা *ইতিমধ্যে সম্পন্ন হওয়া একটি গণনার উত্তর*। যে বিনিয়োগকারী "বুকের নিচে বলে" ০.৬ গুণে কেনেন, তিনি কোনো ছাড় খুঁজে পাননি; তিনি অন্যদের পাটিগণিতের অবশিষ্টাংশ খুঁজে পেয়ে সেটিকে সুযোগ ভেবেছেন। অধ্যায় ২৩ সেই কার্যকৃত পুনর্গঠন দেখায় যেখানে প্রতিবেদিত বুকে ০.৬০ গুণের একটি ব্যাংক সমন্বিত বুকে ২.৯১ গুণে লেনদেন হয়।

এর অর্থ এই নয় যে প্রতিটি ছাড় সঠিক। এর অর্থ **ছাড়টি সম্পদের গুণমান নিয়ে একটি অনুমান, এবং আপনার কাজ ঐ অনুমান পরীক্ষা করা, সংখ্যাটি উদযাপন করা নয়।**

---

### ডিএসই-তে খাত-উপযোগী পরিসর

বিমূর্তভাবে সস্তা P/E বলে কিছু নেই। গুণক খাতনির্দিষ্ট কারণ অন্তর্নিহিত অর্থনীতিও তাই। ডিএসই-তে পর্যবেক্ষিত নির্দেশক পরিসর — **এগুলো চক্র ও তারল্যের সঙ্গে সরে; এগুলোকে দিকনির্দেশ ভাবুন, সীমা নয়:**

| খাত | নির্দেশক P/E | নির্দেশক P/B | পরিসর কী চালায় |
|---|---|---|---|
| ওষুধ | ১২–২০× | ২.০–৪.০× | নগদে রূপান্তরকারী, কম লিভারেজ, অভ্যন্তরীণ চাহিদা প্রবৃদ্ধি |
| ব্যাংক | ৫–১০× | ০.৫–১.২× | বুক ভ্যালুই প্রশ্ন, উত্তর নয় (অধ্যায় ২৩) |
| এনবিএফআই | প্রায়ই ঋণাত্মক বা অপ্রযোজ্য | ০.৩–১.০× | তীব্র সম্পদ-গুণমান চাপ; কয়েকটির ইকুইটি ঋণাত্মক |
| সিমেন্ট | ১০–২৫×, চক্রের চূড়ায় উল্টে যায় | ১.০–২.৫× | উচ্চ পরিচালন ও আর্থিক লিভারেজ (অধ্যায় ১৭) |
| বস্ত্র / আরএমজি | ৬–১২× | ০.৬–১.৫× | পুনর্মূল্যায়ন-ভারী বুক; পাতলা, অস্থির মার্জিন |
| বিদ্যুৎ (আইপিপি) | ৫–৯× | ১.০–২.০× | চুক্তির মেয়াদ শেষের ঝুঁকি ও সরকারি প্রাপ্য ঝুঁকি |
| টেলিকম | ১০–১৫× | উচ্চ বা অপ্রযোজ্য | হালকা সম্পদভিত্তিক ইকুইটি; গুণক লভ্যাংশচালিত |
| প্রকৌশল | ১০–১৮× | ১.০–২.৫× | অর্ডার-বুক নির্ভর, চলতি মূলধন-ভারী |
| খাদ্য ও সহযোগী (এমএনসি) | ২৫–৫০× | ৫–২০× | **ফ্রি-ফ্লোটের স্বল্পতা, উন্নততর গুণমান নয়** |
| মিউচুয়াল ফান্ড | অপ্রযোজ্য | NAV-র ০.৪–০.৯× | নিট সম্পদ মূল্যের বিপরীতে স্থায়ী কাঠামোগত ছাড় |

সংখ্যাগুলোর চেয়ে দুটি পর্যবেক্ষণ বেশি গুরুত্বপূর্ণ।

**এমএনসি সারিটি কোনো গুণমান প্রিমিয়াম নয়।** ডিএসই-তে তালিকাভুক্ত কয়েকটি বহুজাতিক সহযোগীর ফ্রি ফ্লোট খুবই ছোট। শেয়ারের ৫% নিয়ে লেনদেনে নির্ধারিত গুণক আপনাকে ফ্লোটের স্বল্পতার কথা বলে, ব্যবসার মূল্যের কথা নয়। ডিএসই-র খাতগুলো আসলে কীভাবে লেনদেন হয় সে বিষয়ে অধ্যায় ৮-এর কাজ সরাসরি প্রযোজ্য।

**একটি চক্রীয় কোম্পানির P/E উল্টে যায়।** সিমেন্ট ও অন্যান্য চক্রীয় কোম্পানি চক্রের চূড়ায় তাদের *সর্বনিম্ন* P/E দেখায়, যখন ট্রেইলিং আয় সর্বোচ্চে এবং পড়তে চলেছে। ট্রেইলিং আয়ে একটি চক্রীয় কোম্পানিকে যে মুহূর্তে সবচেয়ে সস্তা দেখায় সেটিই প্রায়ই বিক্রির মুহূর্ত। বরং পুরো চক্রজুড়ে EV/EBITDA বা মধ্য-চক্রের আয় ব্যবহার করুন।

---

### কেন একটি ডিএসই গুণককে মার্কিন গুণকের সঙ্গে তুলনা করা শ্রেণিগত ভুল

আপনি বারবার পড়বেন যে "এসঅ্যান্ডপি ৫০০-র ২২×-এর বিপরীতে ডিএসই ১১×-এ লেনদেন হয়, তাই বাংলাদেশ সস্তা।"

**এটি ঠিক সেই ভুল যা অধ্যায় ১ বাফেট নির্দেশকে চিহ্নিত করেছে।** সেখানে দেখানো হয়েছে বাজার মূলধন-থেকে-জিডিপি দেশভেদে ব্যাখ্যাযোগ্য নয়, কারণ অনুপাতটি একটি তালিকাভুক্ত জগতের সঙ্গে একটি অর্থনীতির তুলনা করে এবং দুটির সম্পর্ক প্রতিটি দেশের একটি কাঠামোগত বাস্তবতা — অর্থনীতির কতটুকু আদৌ তালিকাভুক্ত — কোনো মূল্যায়ন সংকেত নয়।

আন্তঃসীমান্ত P/E তুলনা একইভাবে ব্যর্থ হয়, সুনির্দিষ্ট ও গণনাযোগ্য কারণে:

- **ভিন্ন ঝুঁকিমুক্ত হার।** বাংলাদেশ সরকার যখন একটি ট্রেজারি উপকরণে ১১–১২% দেয়, তখন ইকুইটির আয় ইল্ডকে ঐ বাধা অতিক্রম করতে হবে। ১১× P/E মানে ৯.১% আয় ইল্ড — ঝুঁকিমুক্ত হারের *নিচে*। ৪% ঝুঁকিমুক্ত হারের বাজারে ২২× P/E মানে ৪.৫% আয় ইল্ড, যা স্বচ্ছন্দে তার ওপরে। **সার্বভৌম হারের সঙ্গে ব্যবধানের ভিত্তিতে ব্যয়বহুল দেখানো বাজারটিই সস্তা।**
- **ভিন্ন মুদ্রা ঝুঁকি।** টাকার আয়কে এমন অবমূল্যায়ন ঝুঁকির জন্য ছাড় দিতে হয় যা ডলারের আয় বহন করে না।
- **ভিন্ন আয়-গুণমান ব্যবস্থা।** অধ্যায় ১৩-এর অ্যাক্রুয়াল কাজ আছে কারণ ডিএসই-র আয়ের গুণমান বেশি পরিবর্তনশীল। ভিন্ন নির্ভরযোগ্যতার হরে গণিত দুটি P/E তুলনীয় সংখ্যা নয়।
- **ভিন্ন সূচক গঠন।** ব্যাংক ও লিভারেজড উৎপাদকে ভরা একটি বাংলাদেশি সূচকের *উচিত* উচ্চ মূলধনি রিটার্নের সফটওয়্যার কোম্পানিতে ভরা সূচকের চেয়ে কম গুণকে লেনদেন হওয়া। তাদের তুলনা করলে মূল্য নয়, খাত-মিশ্রণ মাপা হয়।
- **ভিন্ন সুশাসন ও ফ্লোট।** কেন্দ্রীভূত উদ্যোক্তা মালিকানা, পাতলা ফ্লোট এবং অধ্যায় ৯-এর প্রকাশ পরিবেশ — সবই একটি কাঠামোগত ছাড়কে ন্যায্যতা দেয়।

**সঠিক তুলনা সর্বদা একই বাজারের ভেতরে ও একই খাতের ভেতরে, এবং বিশেষত ঐ কোম্পানির নিজের ইতিহাসের বিপরীতে।** যে ডিএসই ওষুধ কোম্পানির নিজস্ব দশ বছরের মধ্যক ১৫× সেটি ২২×-এ থাকলে ব্যয়বহুল। ঐ বক্তব্য সমর্থনযোগ্য। "আমেরিকার তুলনায় বাংলাদেশ সস্তা" মূল্য সম্পর্কে কোনো বক্তব্য নয়; এটি দুটি ভিন্ন দেশ সম্পর্কে বক্তব্য।`,
    },

    simple: {
      en: `Two shops are for sale on the same street. Both are priced at BDT 90 lakh. Both made BDT 10 lakh of "profit" last year.

Nine times profit. Identical. You would toss a coin.

Then you ask one more question: **how much money actually went into the till?**

**Shop A** made 10 lakh of profit and 11.7 lakh of cash came in. Customers paid. Some paid early.

**Shop B** made 10 lakh of profit and 3 lakh of cash came in. The other 7 lakh is sitting in a ledger marked "customers who will pay us later."

You are not paying nine times profit for Shop B. **You are paying thirty times the money it actually collected.** The two shops were never the same price. The price tag lied because the profit number lied first.

---

### Now the other half

A different shop is for sale. The owner says: "My shop, my stock, my furniture — all together it is worth BDT 100 lakh. I will sell it to you for 60 lakh."

Forty percent off. Obviously a bargain.

Before you agree, walk into the shop and count.

- The building was valued at 40 lakh — by a valuer the owner hired, five years ago, at the owner's request. Nobody has offered 40 lakh for it.
- Half the stock on the shelves has not moved in two years.
- Twenty lakh of the "money owed to us" is owed by customers who stopped answering the phone.

Recount honestly and the shop is worth 35 lakh. **You are not paying 60 for something worth 100. You are paying 60 for something worth 35.**

The 40% discount was never a discount. **It was other people looking at the same shelves and reaching the same conclusion before you did.**

---

### The rule

When something looks cheap, there are only two possibilities:

1. The market has not noticed.
2. The market has noticed something you have not.

On a market as small and as closely watched by insiders as the DSE, **the second is far more common than the first.**

Cheapness is not a reason to buy. It is a reason to ask what the price is telling you — and then to check the two numbers underneath it: how much profit turned into cash, and how much of the book value is real.`,
      bn: `একই রাস্তায় দুটি দোকান বিক্রি হচ্ছে। দুটোরই দাম ৯০ লক্ষ টাকা। দুটোই গত বছর ১০ লক্ষ টাকা "মুনাফা" করেছে।

মুনাফার নয় গুণ। অভিন্ন। আপনি টস করে সিদ্ধান্ত নিতেন।

তারপর আপনি আরেকটি প্রশ্ন করেন: **ক্যাশবাক্সে আসলে কত টাকা ঢুকেছে?**

**দোকান ক** ১০ লক্ষ মুনাফা করেছে এবং ১১.৭ লক্ষ নগদ এসেছে। ক্রেতারা টাকা দিয়েছেন। কেউ কেউ আগেই দিয়েছেন।

**দোকান খ** ১০ লক্ষ মুনাফা করেছে এবং ৩ লক্ষ নগদ এসেছে। বাকি ৭ লক্ষ "যেসব ক্রেতা পরে দেবেন" লেখা একটি খাতায় বসে আছে।

দোকান খ-এর জন্য আপনি মুনাফার নয় গুণ দিচ্ছেন না। **আপনি সে আসলে যত টাকা আদায় করেছে তার ত্রিশ গুণ দিচ্ছেন।** দোকান দুটির দাম কখনোই এক ছিল না। মূল্যতালিকা মিথ্যা বলেছে কারণ মুনাফার সংখ্যাটি আগে মিথ্যা বলেছে।

---

### এবার বাকি অর্ধেক

আরেকটি দোকান বিক্রি হচ্ছে। মালিক বলছেন: "আমার দোকান, আমার মাল, আমার আসবাব — সব মিলিয়ে ১০০ লক্ষ টাকার। আপনাকে ৬০ লক্ষে দেব।"

চল্লিশ শতাংশ ছাড়। স্পষ্টতই সুযোগ।

রাজি হওয়ার আগে দোকানে ঢুকে গুনুন।

- ভবনটির মূল্য ধরা হয়েছে ৪০ লক্ষ — মালিকের নিয়োগ করা একজন মূল্যায়নকারীর দ্বারা, পাঁচ বছর আগে, মালিকের অনুরোধে। কেউ এর জন্য ৪০ লক্ষ প্রস্তাব করেনি।
- তাকের অর্ধেক মাল দুই বছরে নড়েনি।
- "আমাদের পাওনা টাকার" ২০ লক্ষ এমন ক্রেতাদের কাছে যাঁরা ফোন ধরা বন্ধ করেছেন।

সৎভাবে আবার গুনলে দোকানটির মূল্য ৩৫ লক্ষ। **আপনি ১০০ টাকার জিনিসের জন্য ৬০ দিচ্ছেন না। আপনি ৩৫ টাকার জিনিসের জন্য ৬০ দিচ্ছেন।**

৪০% ছাড়টি কখনোই ছাড় ছিল না। **এটি ছিল অন্যরা একই তাক দেখে আপনার আগেই একই সিদ্ধান্তে পৌঁছানো।**

---

### নিয়মটি

কোনো কিছু সস্তা দেখালে কেবল দুটি সম্ভাবনা থাকে:

১. বাজার লক্ষ করেনি।
২. বাজার এমন কিছু লক্ষ করেছে যা আপনি করেননি।

ডিএসই-র মতো ছোট এবং অভ্যন্তরীণদের দ্বারা নিবিড়ভাবে পর্যবেক্ষিত বাজারে **দ্বিতীয়টি প্রথমটির চেয়ে অনেক বেশি সাধারণ।**

সস্তা হওয়া কেনার কারণ নয়। এটি জিজ্ঞেস করার কারণ যে দামটি আপনাকে কী বলছে — এবং তারপর তার নিচের দুটি সংখ্যা যাচাই করার: মুনাফার কতটা নগদে পরিণত হয়েছে, আর বুক ভ্যালুর কতটা প্রকৃত।`,
    },

    example: {
      en: `### Two companies, one P/E of 9

Both trade at exactly 9.00× trailing earnings. A screen sorted on P/E cannot separate them. Everything else can.

| | DSE Pharma Co | DSE Textile Co |
|---|---|---|
| Price (BDT) | 90.00 | 45.00 |
| Shares outstanding (crore) | 18 | 30 |
| Net profit (BDT cr) | 180 | 150 |
| **EPS (BDT)** | **10.00** | **5.00** |
| **P/E trailing** | **9.00×** | **9.00×** |
| Cash from operations (BDT cr) | 210 | 45 |
| Total assets (BDT cr) | 1,500 | 2,100 |
| Equity as reported (BDT cr) | 900 | 1,000 |
| — of which revaluation reserve | 0 | 400 |
| EBITDA (BDT cr) | 245 | 200 |
| Total debt (BDT cr) | 100 | 700 |
| Cash (BDT cr) | 250 | 50 |
| DPS (BDT) | 4.00 | 1.50 |
| Forward growth | 18% | 6% |

### Step one: restate the P/E on cash

$$\\text{CFO per share}_{pharma} = \\frac{210}{18} = 11.67 \\qquad \\text{CFO per share}_{textile} = \\frac{45}{30} = 1.50$$

$$\\text{Cash conversion}_{pharma} = \\frac{210}{180} = 116.67\\% \\qquad \\text{Cash conversion}_{textile} = \\frac{45}{150} = 30.00\\%$$

$$\\text{P/E}_{quality} = \\frac{9.00}{1.1667} = 7.71\\times \\qquad \\text{versus} \\qquad \\frac{9.00}{0.3000} = 30.00\\times$$

**The identical multiple was concealing a fourfold difference.** The pharma company is being offered at 7.71× the cash it actually collected. The textile company is being offered at 30.00× the cash it actually collected — a multiple nobody on the DSE would knowingly pay for a low-growth, high-leverage textile manufacturer.

The accrual ratios confirm it, exactly as Chapter 13 predicted:

$$\\text{Accrual ratio}_{pharma} = \\frac{180 - 210}{1{,}500} = -2.00\\% \\qquad \\text{Accrual ratio}_{textile} = \\frac{150 - 45}{2{,}100} = +5.00\\%$$

A negative accrual ratio means the company collected more than it booked. A +5.00% accrual ratio means 105 crore of last year's reported profit is sitting in receivables and inventory rather than in the bank.

### Step two: restate the P/B on an honest book

$$\\text{BVPS}_{pharma} = \\frac{900}{18} = 50.00 \\;\\Rightarrow\\; \\text{P/B} = \\frac{90}{50} = 1.80\\times$$

$$\\text{BVPS}_{textile} = \\frac{1{,}000}{30} = 33.33 \\;\\Rightarrow\\; \\text{P/B} = \\frac{45}{33.33} = 1.35\\times$$

On reported book the textile company is the cheaper of the two. Now remove the revaluation reserve, per Chapter 11:

$$\\text{Adjusted equity}_{textile} = 1{,}000 - 400 = 600 \\;\\Rightarrow\\; \\text{BVPS}_{adj} = 20.00 \\;\\Rightarrow\\; \\text{P/B}_{adj} = \\frac{45}{20} = 2.25\\times$$

**The company that looked cheaper on book is 25% more expensive than the one that looked dearer.** Forty percent of its stated equity is an appraiser's opinion about the value of land the company has no intention of selling.

### Step three: value the whole firm, not the equity slice

$$EV_{pharma} = (90 \\times 18) + 100 - 250 = 1{,}470 \\;\\Rightarrow\\; \\frac{1{,}470}{245} = 6.00\\times$$

$$EV_{textile} = (45 \\times 30) + 700 - 50 = 2{,}000 \\;\\Rightarrow\\; \\frac{2{,}000}{200} = 10.00\\times$$

**This is the clearest single demonstration in the chapter of why P/E flatters levered companies.** The textile company's equity is a thin slice sitting on top of BDT 700 crore of debt. Buying the equity cheaply does not make the *business* cheap — you are acquiring a small residual claim on an enterprise the market values at 10× EBITDA. The pharma company, sitting on net cash of BDT 150 crore, is a whole business available at 6× EBITDA.

**P/E is an equity multiple and it is blind to the balance sheet. EV/EBITDA is not.** Chapter 17's leverage work and this chapter's valuation work are the same analysis viewed from two ends.

### Step four: the rest of the panel

| Metric | Pharma | Textile |
|---|---|---|
| Forward EPS (BDT) | 11.80 | 5.30 |
| Forward P/E | 7.63× | 8.49× |
| Earnings yield | 11.11% | 11.11% |
| **Quality-adjusted P/E** | **7.71×** | **30.00×** |
| P/B reported | 1.80× | 1.35× |
| **P/B adjusted** | **1.80×** | **2.25×** |
| PEG | 0.50 | 1.50 |
| EV/EBITDA | 6.00× | 10.00× |
| Dividend yield | 4.44% | 3.33% |
| **Cash payout ratio** | **34.29%** | **100.00%** |

Note the last row. The textile company's dividend of BDT 1.50 per share exactly equals its operating cash flow per share of BDT 1.50. **Every taka distributed to shareholders was funded by the lenders**, since the company also carries BDT 700 crore of debt and made capital expenditure during the year. A 3.33% dividend yield that consumes 100% of operating cash is not income. It is a return of borrowed capital, and Chapter 20 shows how quickly such dividends are cut.

Note also the earnings yield row: **identical, at 11.11%, and therefore useless here.** Earnings yield is the reciprocal of P/E and inherits every defect of P/E. It adds information only when compared to the sovereign yield — and at 11.11% against a Bangladeshi treasury yield of 11–12%, *both* companies are offering an equity earnings yield at or below the risk-free rate on reported earnings. On cash earnings the pharma company yields 12.96% and the textile company yields 3.33%.

### Step five: PEG, and its one honest use

$$\\text{PEG}_{pharma} = \\frac{9.00}{18} = 0.50 \\qquad \\text{PEG}_{textile} = \\frac{9.00}{6} = 1.50$$

PEG says what P/E cannot: the same multiple is a bargain attached to 18% growth and a full price attached to 6% growth.

**But be precise about PEG's weakness, because it is severe.** The growth rate in the denominator is a forecast, and on the DSE it is usually the company's own forecast or your extrapolation of a short and volatile history. PEG converts one uncertain number into a ratio that looks like two certain ones. **A low PEG built on an optimistic growth estimate is not a valuation conclusion; it is your own assumption handed back to you with a decimal point.** Use PEG to compare companies whose growth you have independently modelled, never as a screening input.

---

### The bank at 0.6× book

Now take the DSE-listed bank reconstructed in Chapter 23 and read it purely as a valuation problem.

| Reported | Value |
|---|---|
| Price | BDT 16.00 |
| Shares outstanding | 120 crore |
| Net profit (BDT cr) | 320 |
| **EPS** | **BDT 2.67** |
| **P/E** | **6.00×** |
| Equity (BDT cr) | 3,200 |
| **NAV per share** | **BDT 26.67** |
| **P/B** | **0.60×** |
| DPS | BDT 0.80 |
| Dividend yield | 5.00% |

A P/E of 6 and a P/B of 0.6 on a dividend yield of 5%. On a screen this is the cheapest thing on the exchange.

**It is not cheap. It is priced.**

Chapter 23 reconstructs the stressed book: reported NPL of 3,600 plus rescheduled 4,200, written-off 2,600, and enjoined 900 gives stressed assets of BDT 11,300 crore against reported loans of 45,000. At a 40% ultimate loss rate the required provision is 4,520 against 1,980 held — a shortfall of BDT 2,540 crore.

$$\\text{Adjusted equity} = 3{,}200 - 2{,}540 = 660 \\;\\Rightarrow\\; \\text{NAV}_{adj} = \\frac{660}{120} = \\text{BDT } 5.50$$

$$\\text{P/B}_{adj} = \\frac{16.00}{5.50} = 2.91\\times$$

**The 0.6× is the market's estimate of the adjusted book, not a discount to it.** The market has performed roughly this calculation, arrived at an adjusted NAV somewhere below the reported figure, and priced the shares accordingly. What looks like a 40% discount to book is a 191% premium to honest book.

The P/E of 6.00× fails for the same reason. **The 320 crore of profit is struck after inadequate provisions.** Provision the stressed book honestly and the earnings are not 320; in the year of recognition they are deeply negative. A P/E computed on under-provisioned bank earnings is a P/E computed on a number the analyst has already established is wrong.

And note what does *not* work here: EV/EBITDA. For a bank, debt is raw material and EBITDA is not a defined concept. **Applying the EV framework to a bank produces a number that is arithmetically computable and analytically void** — precisely the error Chapter 23 opens by warning against.

**The valuation discipline for a DSE bank is therefore: never quote P/B without stating the loss rate assumption that produced your adjusted book.** Chapter 23's sensitivity table is the correct output. At a 20% assumed loss rate the adjusted P/B is 0.66× and the shares are genuinely cheap; at 40% it is 2.91× and they are expensive; at 50% the equity is gone. **The multiple is not a fact. It is a function of an assumption you must defend in writing.**`,
      bn: `### দুটি কোম্পানি, একটি ৯ P/E

দুটিই ঠিক ৯.০০× ট্রেইলিং আয়ে লেনদেন হয়। P/E-তে সাজানো কোনো স্ক্রিন এদের আলাদা করতে পারে না। বাকি সবকিছু পারে।

| | ডিএসই ফার্মা কোং | ডিএসই টেক্সটাইল কোং |
|---|---|---|
| দাম (টাকা) | ৯০.০০ | ৪৫.০০ |
| বকেয়া শেয়ার (কোটি) | ১৮ | ৩০ |
| নিট মুনাফা (কোটি টাকা) | ১৮০ | ১৫০ |
| **EPS (টাকা)** | **১০.০০** | **৫.০০** |
| **P/E ট্রেইলিং** | **৯.০০×** | **৯.০০×** |
| পরিচালন নগদ প্রবাহ (কোটি টাকা) | ২১০ | ৪৫ |
| মোট সম্পদ (কোটি টাকা) | ১,৫০০ | ২,১০০ |
| প্রকাশিত ইকুইটি (কোটি টাকা) | ৯০০ | ১,০০০ |
| — যার পুনর্মূল্যায়ন সঞ্চিতি | ০ | ৪০০ |
| EBITDA (কোটি টাকা) | ২৪৫ | ২০০ |
| মোট ঋণ (কোটি টাকা) | ১০০ | ৭০০ |
| নগদ (কোটি টাকা) | ২৫০ | ৫০ |
| DPS (টাকা) | ৪.০০ | ১.৫০ |
| ভবিষ্যৎ প্রবৃদ্ধি | ১৮% | ৬% |

### ধাপ এক: নগদের ভিত্তিতে P/E পুনর্গঠন

$$\\text{CFO per share}_{pharma} = \\frac{210}{18} = 11.67 \\qquad \\text{CFO per share}_{textile} = \\frac{45}{30} = 1.50$$

$$\\text{Cash conversion}_{pharma} = \\frac{210}{180} = 116.67\\% \\qquad \\text{Cash conversion}_{textile} = \\frac{45}{150} = 30.00\\%$$

$$\\text{P/E}_{quality} = \\frac{9.00}{1.1667} = 7.71\\times \\qquad \\text{বনাম} \\qquad \\frac{9.00}{0.3000} = 30.00\\times$$

**অভিন্ন গুণকটি চার গুণ পার্থক্য আড়াল করছিল।** ওষুধ কোম্পানিটি সে আসলে যত নগদ আদায় করেছে তার ৭.৭১ গুণে দেওয়া হচ্ছে। বস্ত্র কোম্পানিটি তার আদায়কৃত নগদের ৩০.০০ গুণে দেওয়া হচ্ছে — এমন গুণক যা কম-প্রবৃদ্ধি, উচ্চ-লিভারেজের একটি বস্ত্র উৎপাদকের জন্য ডিএসই-তে কেউ জেনেশুনে দিত না।

অ্যাক্রুয়াল অনুপাত তা নিশ্চিত করে, ঠিক যেমন অধ্যায় ১৩ পূর্বাভাস দিয়েছিল:

$$\\text{Accrual ratio}_{pharma} = \\frac{180 - 210}{1{,}500} = -2.00\\% \\qquad \\text{Accrual ratio}_{textile} = \\frac{150 - 45}{2{,}100} = +5.00\\%$$

ঋণাত্মক অ্যাক্রুয়াল অনুপাত মানে কোম্পানি যত লিখেছে তার চেয়ে বেশি আদায় করেছে। +৫.০০% অ্যাক্রুয়াল অনুপাত মানে গত বছরের প্রতিবেদিত মুনাফার ১০৫ কোটি টাকা ব্যাংকে নয়, প্রাপ্য বিল ও মজুদে বসে আছে।

### ধাপ দুই: সৎ বুকের ভিত্তিতে P/B পুনর্গঠন

$$\\text{BVPS}_{pharma} = \\frac{900}{18} = 50.00 \\;\\Rightarrow\\; \\text{P/B} = \\frac{90}{50} = 1.80\\times$$

$$\\text{BVPS}_{textile} = \\frac{1{,}000}{30} = 33.33 \\;\\Rightarrow\\; \\text{P/B} = \\frac{45}{33.33} = 1.35\\times$$

প্রকাশিত বুকে বস্ত্র কোম্পানিটিই দুটির মধ্যে সস্তা। এবার অধ্যায় ১১ অনুসারে পুনর্মূল্যায়ন সঞ্চিতি সরান:

$$\\text{Adjusted equity}_{textile} = 1{,}000 - 400 = 600 \\;\\Rightarrow\\; \\text{BVPS}_{adj} = 20.00 \\;\\Rightarrow\\; \\text{P/B}_{adj} = \\frac{45}{20} = 2.25\\times$$

**যে কোম্পানিকে বুকে সস্তা দেখাচ্ছিল সে যাকে দামি দেখাচ্ছিল তার চেয়ে ২৫% বেশি ব্যয়বহুল।** তার ঘোষিত ইকুইটির চল্লিশ শতাংশ হলো এমন জমির মূল্য নিয়ে একজন মূল্যায়নকারীর মতামত যা কোম্পানির বিক্রির কোনো ইচ্ছা নেই।

### ধাপ তিন: ইকুইটির টুকরো নয়, সম্পূর্ণ কোম্পানির মূল্যায়ন

$$EV_{pharma} = (90 \\times 18) + 100 - 250 = 1{,}470 \\;\\Rightarrow\\; \\frac{1{,}470}{245} = 6.00\\times$$

$$EV_{textile} = (45 \\times 30) + 700 - 50 = 2{,}000 \\;\\Rightarrow\\; \\frac{2{,}000}{200} = 10.00\\times$$

**কেন P/E লিভারেজড কোম্পানিকে তোষামোদ করে, অধ্যায়ে তার সবচেয়ে স্পষ্ট একক প্রমাণ এটি।** বস্ত্র কোম্পানির ইকুইটি ৭০০ কোটি টাকা ঋণের ওপর বসা একটি পাতলা টুকরো। ইকুইটি সস্তায় কেনা *ব্যবসাটিকে* সস্তা করে না — আপনি এমন এক প্রতিষ্ঠানের ওপর ছোট অবশিষ্ট দাবি কিনছেন যাকে বাজার ১০× EBITDA-তে মূল্যায়ন করছে। ১৫০ কোটি টাকা নিট নগদের ওপর বসা ওষুধ কোম্পানিটি ৬× EBITDA-তে প্রাপ্য একটি সম্পূর্ণ ব্যবসা।

**P/E একটি ইকুইটি গুণক এবং এটি স্থিতিপত্রের প্রতি অন্ধ। EV/EBITDA নয়।** অধ্যায় ১৭-এর লিভারেজ কাজ ও এই অধ্যায়ের মূল্যায়ন কাজ দুই প্রান্ত থেকে দেখা একই বিশ্লেষণ।

### ধাপ চার: বাকি প্যানেল

| পরিমাপ | ফার্মা | টেক্সটাইল |
|---|---|---|
| ফরওয়ার্ড EPS (টাকা) | ১১.৮০ | ৫.৩০ |
| ফরওয়ার্ড P/E | ৭.৬৩× | ৮.৪৯× |
| আয় ইল্ড | ১১.১১% | ১১.১১% |
| **গুণমান-সমন্বিত P/E** | **৭.৭১×** | **৩০.০০×** |
| P/B প্রকাশিত | ১.৮০× | ১.৩৫× |
| **P/B সমন্বিত** | **১.৮০×** | **২.২৫×** |
| PEG | ০.৫০ | ১.৫০ |
| EV/EBITDA | ৬.০০× | ১০.০০× |
| লভ্যাংশ ইল্ড | ৪.৪৪% | ৩.৩৩% |
| **নগদ পরিশোধ অনুপাত** | **৩৪.২৯%** | **১০০.০০%** |

শেষ সারিটি লক্ষ করুন। বস্ত্র কোম্পানির শেয়ারপ্রতি ১.৫০ টাকা লভ্যাংশ তার শেয়ারপ্রতি ১.৫০ টাকা পরিচালন নগদ প্রবাহের ঠিক সমান। **শেয়ারহোল্ডারদের বিতরণ করা প্রতিটি টাকা ঋণদাতারা অর্থায়ন করেছেন**, কারণ কোম্পানিটি ৭০০ কোটি টাকা ঋণও বহন করে এবং বছরে মূলধনি ব্যয়ও করেছে। যে ৩.৩৩% লভ্যাংশ ইল্ড পরিচালন নগদের ১০০% খেয়ে ফেলে তা আয় নয়। এটি ধার করা মূলধনের ফেরত, আর অধ্যায় ২০ দেখায় এ ধরনের লভ্যাংশ কত দ্রুত কাটা হয়।

আয় ইল্ডের সারিটিও লক্ষ করুন: **অভিন্ন, ১১.১১%, এবং তাই এখানে অকেজো।** আয় ইল্ড হলো P/E-র বিপরীত এবং P/E-র প্রতিটি ত্রুটি উত্তরাধিকারসূত্রে পায়। এটি কেবল সার্বভৌম ইল্ডের সঙ্গে তুলনায় তথ্য যোগ করে — আর ১১–১২% বাংলাদেশি ট্রেজারি ইল্ডের বিপরীতে ১১.১১%-এ *দুটি* কোম্পানিই প্রতিবেদিত আয়ে ঝুঁকিমুক্ত হারের সমান বা নিচে ইকুইটি আয় ইল্ড দিচ্ছে। নগদ আয়ে ওষুধ কোম্পানি দেয় ১২.৯৬% এবং বস্ত্র কোম্পানি দেয় ৩.৩৩%।

### ধাপ পাঁচ: PEG, এবং তার একটিমাত্র সৎ ব্যবহার

$$\\text{PEG}_{pharma} = \\frac{9.00}{18} = 0.50 \\qquad \\text{PEG}_{textile} = \\frac{9.00}{6} = 1.50$$

PEG তা বলে যা P/E পারে না: একই গুণক ১৮% প্রবৃদ্ধির সঙ্গে যুক্ত হলে সুযোগ এবং ৬% প্রবৃদ্ধির সঙ্গে যুক্ত হলে পূর্ণ দাম।

**তবে PEG-র দুর্বলতা নিয়ে সুনির্দিষ্ট হোন, কারণ তা তীব্র।** হরের প্রবৃদ্ধির হার একটি পূর্বাভাস, এবং ডিএসই-তে তা সাধারণত কোম্পানির নিজের পূর্বাভাস বা একটি সংক্ষিপ্ত ও অস্থির ইতিহাসের ওপর আপনার সম্প্রসারণ। PEG একটি অনিশ্চিত সংখ্যাকে এমন অনুপাতে রূপান্তরিত করে যা দুটি নিশ্চিত সংখ্যার মতো দেখায়। **আশাবাদী প্রবৃদ্ধি অনুমানের ওপর গড়া নিম্ন PEG কোনো মূল্যায়ন সিদ্ধান্ত নয়; এটি দশমিক বিন্দুসহ আপনাকে ফেরত দেওয়া আপনারই অনুমান।** যেসব কোম্পানির প্রবৃদ্ধি আপনি স্বাধীনভাবে মডেল করেছেন কেবল তাদের তুলনায় PEG ব্যবহার করুন, কখনো স্ক্রিনিং ইনপুট হিসেবে নয়।

---

### ০.৬ গুণ বুকে সেই ব্যাংক

এবার অধ্যায় ২৩-এ পুনর্গঠিত ডিএসই-তালিকাভুক্ত ব্যাংকটি নিন এবং একে নিছক একটি মূল্যায়ন সমস্যা হিসেবে পড়ুন।

| প্রতিবেদিত | মান |
|---|---|
| দাম | ১৬.০০ টাকা |
| বকেয়া শেয়ার | ১২০ কোটি |
| নিট মুনাফা (কোটি টাকা) | ৩২০ |
| **EPS** | **২.৬৭ টাকা** |
| **P/E** | **৬.০০×** |
| ইকুইটি (কোটি টাকা) | ৩,২০০ |
| **শেয়ারপ্রতি NAV** | **২৬.৬৭ টাকা** |
| **P/B** | **০.৬০×** |
| DPS | ০.৮০ টাকা |
| লভ্যাংশ ইল্ড | ৫.০০% |

৫% লভ্যাংশ ইল্ডে ৬ P/E ও ০.৬ P/B। স্ক্রিনে এটি এক্সচেঞ্জের সবচেয়ে সস্তা জিনিস।

**এটি সস্তা নয়। এটি মূল্যায়িত।**

অধ্যায় ২৩ চাপগ্রস্ত খাতা পুনর্গঠন করে: প্রতিবেদিত NPL ৩,৬০০ যোগ পুনঃতফসিলকৃত ৪,২০০, অবলোপনকৃত ২,৬০০ ও নিষেধাজ্ঞাধীন ৯০০ মিলে ৪৫,০০০ প্রতিবেদিত ঋণের বিপরীতে চাপগ্রস্ত সম্পদ ১১,৩০০ কোটি টাকা। ৪০% চূড়ান্ত ক্ষতির হারে প্রয়োজনীয় প্রভিশন ৪,৫২০, রক্ষিত ১,৯৮০ — ঘাটতি ২,৫৪০ কোটি টাকা।

$$\\text{Adjusted equity} = 3{,}200 - 2{,}540 = 660 \\;\\Rightarrow\\; \\text{NAV}_{adj} = \\frac{660}{120} = \\text{BDT } 5.50$$

$$\\text{P/B}_{adj} = \\frac{16.00}{5.50} = 2.91\\times$$

**০.৬× হলো সমন্বিত বুক সম্পর্কে বাজারের অনুমান, তার ওপর ছাড় নয়।** বাজার মোটামুটি এই গণনাটি করেছে, প্রতিবেদিত সংখ্যার কোথাও নিচে একটি সমন্বিত NAV-তে পৌঁছেছে, এবং সে অনুযায়ী শেয়ারের দাম দিয়েছে। যাকে বুকের ওপর ৪০% ছাড় মনে হচ্ছে তা সৎ বুকের ওপর ১৯১% প্রিমিয়াম।

৬.০০× P/E একই কারণে ব্যর্থ হয়। **৩২০ কোটি মুনাফা অপর্যাপ্ত প্রভিশনের পর হিসাব করা।** চাপগ্রস্ত খাতায় সৎভাবে প্রভিশন রাখলে আয় ৩২০ নয়; স্বীকৃতির বছরে তা গভীরভাবে ঋণাত্মক। কম-প্রভিশনকৃত ব্যাংক আয়ের ওপর গণিত P/E এমন এক সংখ্যার ওপর গণিত যাকে বিশ্লেষক ইতিমধ্যেই ভুল প্রতিষ্ঠা করেছেন।

আর লক্ষ করুন এখানে কী *কাজ করে না*: EV/EBITDA। ব্যাংকের জন্য ঋণ কাঁচামাল এবং EBITDA কোনো সংজ্ঞায়িত ধারণা নয়। **একটি ব্যাংকে EV কাঠামো প্রয়োগ করলে এমন সংখ্যা আসে যা পাটিগাণিতিকভাবে গণনীয় ও বিশ্লেষণগতভাবে শূন্য** — ঠিক সেই ভুল যার বিরুদ্ধে সতর্ক করে অধ্যায় ২৩ শুরু হয়।

**অতএব একটি ডিএসই ব্যাংকের মূল্যায়ন শৃঙ্খলা হলো: যে ক্ষতির হার অনুমান আপনার সমন্বিত বুক তৈরি করেছে তা না বলে কখনো P/B উদ্ধৃত করবেন না।** অধ্যায় ২৩-এর সংবেদনশীলতা টেবিলই সঠিক আউটপুট। ২০% অনুমিত ক্ষতির হারে সমন্বিত P/B ০.৬৬× এবং শেয়ারটি সত্যিই সস্তা; ৪০%-এ তা ২.৯১× এবং ব্যয়বহুল; ৫০%-এ ইকুইটি শেষ। **গুণকটি কোনো তথ্য নয়। এটি এমন এক অনুমানের ফাংশন যা আপনাকে লিখিতভাবে সমর্থন করতে হবে।**`,
    },

    formula: {
      en: `**Trailing P/E:**
$$\\text{P/E}_{trailing} = \\frac{\\text{Price per Share}}{\\text{EPS}_{last\\;12m}}, \\qquad \\text{EPS} = \\frac{\\text{Net Profit}}{\\text{Shares Outstanding}}$$

**Forward P/E** — the denominator is an estimate, and on the DSE it is *your* estimate:
$$\\text{P/E}_{forward} = \\frac{\\text{Price}}{\\text{EPS}_{0} \\times (1 + g)}$$

**Earnings yield** — the reciprocal, comparable to a bond:
$$\\text{Earnings Yield} = \\frac{\\text{EPS}}{\\text{Price}} \\times 100 = \\frac{100}{\\text{P/E}}$$

---

**Price-to-Book:**
$$\\text{P/B} = \\frac{\\text{Price}}{\\text{BVPS}}, \\qquad \\text{BVPS} = \\frac{\\text{Shareholders' Equity}}{\\text{Shares Outstanding}}$$

**Tangible P/B** — goodwill and intangibles removed:
$$\\text{P/B}_{tangible} = \\frac{\\text{Price}}{(\\text{Equity} - \\text{Goodwill} - \\text{Intangibles})/\\text{Shares}}$$

**Adjusted P/B** — the version that matters in Bangladesh. Remove revaluation surplus (Chapter 11) and any provision shortfall (Chapter 23):
$$\\text{P/B}_{adj} = \\frac{\\text{Price}}{(E - R - S)/\\text{Shares}}$$

where $E$ is reported equity, $R$ is revaluation reserve, and $S$ is the provision shortfall. If $E - R - S \\leq 0$ the equity is gone and no multiple exists.

---

**PEG:**
$$\\text{PEG} = \\frac{\\text{P/E}}{g}$$

with $g$ expressed in percentage points, not as a decimal. A P/E of 9 with 18% growth gives 0.50.

**Enterprise value:**
$$EV = \\text{Market Cap} + \\text{Total Debt} - \\text{Cash} = (P \\times N) + D - C$$

**EV/EBITDA** — the only multiple here that is neutral to capital structure:
$$\\frac{EV}{\\text{EBITDA}}$$

Undefined and meaningless for banks and NBFIs, where debt is raw material.

**Dividend yield:**
$$\\text{Dividend Yield} = \\frac{\\text{DPS}}{\\text{Price}} \\times 100$$

---

**The two quality corrections. These are the chapter.**

**Cash conversion:**
$$\\kappa = \\frac{\\text{CFO}}{\\text{Net Profit}}$$

**Quality-adjusted P/E** — restate the multiple on cash the company actually collected:
$$\\boxed{\\text{P/E}_{quality} = \\frac{\\text{P/E}}{\\kappa} = \\frac{\\text{Price}}{\\text{CFO per Share}}}$$

The identity is exact: dividing P/E by cash conversion is the same as dividing price by cash flow per share. **When $\\kappa < 1$ the true multiple is higher than the quoted one, and the gap is the size of the accrual problem.**

**Accrual ratio** (Chapter 13), the diagnostic behind $\\kappa$:
$$\\text{Accrual Ratio} = \\frac{\\text{Net Profit} - \\text{CFO}}{\\text{Total Assets}} \\times 100$$

**Multiple understatement factors** — the two numbers to publish alongside any "cheap" claim:
$$U_{P/E} = \\frac{\\text{P/E}_{quality}}{\\text{P/E}}, \\qquad U_{P/B} = \\frac{\\text{P/B}_{adj}}{\\text{P/B}}$$

**Cash payout ratio** — whether the dividend is funded by the business or by the lender:
$$\\text{Cash Payout} = \\frac{\\text{DPS}}{\\text{CFO per Share}} \\times 100$$

Above 100% the dividend is being financed, not earned.`,
      bn: `**ট্রেইলিং P/E:**
$$\\text{P/E}_{trailing} = \\frac{\\text{Price per Share}}{\\text{EPS}_{last\\;12m}}, \\qquad \\text{EPS} = \\frac{\\text{Net Profit}}{\\text{Shares Outstanding}}$$

**ফরওয়ার্ড P/E** — হর একটি প্রাক্কলন, আর ডিএসই-তে তা *আপনার* প্রাক্কলন:
$$\\text{P/E}_{forward} = \\frac{\\text{Price}}{\\text{EPS}_{0} \\times (1 + g)}$$

**আয় ইল্ড** — বিপরীত, বন্ডের সঙ্গে তুলনীয়:
$$\\text{Earnings Yield} = \\frac{\\text{EPS}}{\\text{Price}} \\times 100 = \\frac{100}{\\text{P/E}}$$

---

**মূল্য-থেকে-বুক:**
$$\\text{P/B} = \\frac{\\text{Price}}{\\text{BVPS}}, \\qquad \\text{BVPS} = \\frac{\\text{Shareholders' Equity}}{\\text{Shares Outstanding}}$$

**ট্যানজিবল P/B** — সুনাম ও অস্পৃশ্য সম্পদ সরানো:
$$\\text{P/B}_{tangible} = \\frac{\\text{Price}}{(\\text{Equity} - \\text{Goodwill} - \\text{Intangibles})/\\text{Shares}}$$

**সমন্বিত P/B** — বাংলাদেশে যে সংস্করণটি গুরুত্বপূর্ণ। পুনর্মূল্যায়ন উদ্বৃত্ত (অধ্যায় ১১) ও যেকোনো প্রভিশন ঘাটতি (অধ্যায় ২৩) সরান:
$$\\text{P/B}_{adj} = \\frac{\\text{Price}}{(E - R - S)/\\text{Shares}}$$

যেখানে $E$ প্রতিবেদিত ইকুইটি, $R$ পুনর্মূল্যায়ন সঞ্চিতি, এবং $S$ প্রভিশন ঘাটতি। $E - R - S \\leq 0$ হলে ইকুইটি শেষ এবং কোনো গুণকের অস্তিত্ব নেই।

---

**PEG:**
$$\\text{PEG} = \\frac{\\text{P/E}}{g}$$

যেখানে $g$ শতকরা পয়েন্টে প্রকাশিত, দশমিকে নয়। ১৮% প্রবৃদ্ধিসহ ৯ P/E দেয় ০.৫০।

**এন্টারপ্রাইজ ভ্যালু:**
$$EV = \\text{Market Cap} + \\text{Total Debt} - \\text{Cash} = (P \\times N) + D - C$$

**EV/EBITDA** — এখানকার একমাত্র গুণক যা মূলধন কাঠামোর প্রতি নিরপেক্ষ:
$$\\frac{EV}{\\text{EBITDA}}$$

ব্যাংক ও এনবিএফআই-এর জন্য অসংজ্ঞায়িত ও অর্থহীন, যেখানে ঋণ কাঁচামাল।

**লভ্যাংশ ইল্ড:**
$$\\text{Dividend Yield} = \\frac{\\text{DPS}}{\\text{Price}} \\times 100$$

---

**দুটি গুণমান সংশোধন। এগুলোই অধ্যায়টি।**

**নগদ রূপান্তর:**
$$\\kappa = \\frac{\\text{CFO}}{\\text{Net Profit}}$$

**গুণমান-সমন্বিত P/E** — কোম্পানি আসলে যে নগদ আদায় করেছে তার ভিত্তিতে গুণক পুনর্গঠন:
$$\\boxed{\\text{P/E}_{quality} = \\frac{\\text{P/E}}{\\kappa} = \\frac{\\text{Price}}{\\text{CFO per Share}}}$$

সমতাটি হুবহু: P/E-কে নগদ রূপান্তর দিয়ে ভাগ করা আর দামকে শেয়ারপ্রতি নগদ প্রবাহ দিয়ে ভাগ করা একই। **$\\kappa < 1$ হলে প্রকৃত গুণক উদ্ধৃত গুণকের চেয়ে বেশি, আর ফাঁকটিই অ্যাক্রুয়াল সমস্যার আকার।**

**অ্যাক্রুয়াল অনুপাত** (অধ্যায় ১৩), $\\kappa$-এর পেছনের নির্ণায়ক:
$$\\text{Accrual Ratio} = \\frac{\\text{Net Profit} - \\text{CFO}}{\\text{Total Assets}} \\times 100$$

**গুণক কম দেখানোর গুণাঙ্ক** — যেকোনো "সস্তা" দাবির পাশে প্রকাশ করার মতো দুটি সংখ্যা:
$$U_{P/E} = \\frac{\\text{P/E}_{quality}}{\\text{P/E}}, \\qquad U_{P/B} = \\frac{\\text{P/B}_{adj}}{\\text{P/B}}$$

**নগদ পরিশোধ অনুপাত** — লভ্যাংশ ব্যবসা অর্থায়ন করেছে না ঋণদাতা:
$$\\text{Cash Payout} = \\frac{\\text{DPS}}{\\text{CFO per Share}} \\times 100$$

১০০%-এর ওপরে লভ্যাংশ অর্জিত নয়, অর্থায়িত।`,
    },

    manual: {
      en: `**Inputs.** Prices in BDT per share, aggregates in BDT crore.

*DSE Pharma Co* — price 90.00, shares 18, net profit 180, CFO 210, total assets 1,500, equity 900 (revaluation reserve 0), EBITDA 245, debt 100, cash 250, DPS 4.00, growth 18%.

*DSE Textile Co* — price 45.00, shares 30, net profit 150, CFO 45, total assets 2,100, equity 1,000 (revaluation reserve 400), EBITDA 200, debt 700, cash 50, DPS 1.50, growth 6%.

**Step 1 — EPS.**
$$\\text{EPS}_{ph} = \\frac{180}{18} = 10.00 \\qquad \\text{EPS}_{tx} = \\frac{150}{30} = 5.00$$

**Step 2 — Trailing P/E.**
$$\\frac{90.00}{10.00} = 9.00\\times \\qquad \\frac{45.00}{5.00} = 9.00\\times$$

The screen stops here. The analyst does not.

**Step 3 — Forward EPS and forward P/E.**
$$\\text{EPS}^{f}_{ph} = 10.00 \\times 1.18 = 11.80 \\;\\Rightarrow\\; \\frac{90.00}{11.80} = 7.63\\times$$
$$\\text{EPS}^{f}_{tx} = 5.00 \\times 1.06 = 5.30 \\;\\Rightarrow\\; \\frac{45.00}{5.30} = 8.49\\times$$

**Step 4 — Earnings yield.**
$$\\frac{10.00}{90.00} \\times 100 = 11.11\\% \\qquad \\frac{5.00}{45.00} \\times 100 = 11.11\\%$$

Identical, necessarily — earnings yield is $100/(\\text{P/E})$ and adds nothing that P/E did not already say.

**Step 5 — CFO per share.**
$$\\frac{210}{18} = 11.67 \\qquad \\frac{45}{30} = 1.50$$

**Step 6 — Cash conversion.**
$$\\kappa_{ph} = \\frac{210}{180} = 116.67\\% \\qquad \\kappa_{tx} = \\frac{45}{150} = 30.00\\%$$

**Step 7 — Quality-adjusted P/E. The centrepiece.**
$$\\text{P/E}^{q}_{ph} = \\frac{9.00}{1.1667} = 7.71\\times \\qquad \\text{P/E}^{q}_{tx} = \\frac{9.00}{0.3000} = 30.00\\times$$

**Stop and read that properly.** Two companies quoted at exactly 9.00×. On the cash they actually collected, one is at 7.71× and the other at 30.00×. **The understatement factor is $30.00/9.00 = 3.33\\times$.** Nothing in the price, the EPS, or the P/E disclosed this. Only the cash flow statement did.

**Step 8 — Accrual ratio (Chapter 13 confirmation).**
$$\\frac{180 - 210}{1{,}500} \\times 100 = -2.00\\% \\qquad \\frac{150 - 45}{2{,}100} \\times 100 = +5.00\\%$$

**Step 9 — BVPS and reported P/B.**
$$\\text{BVPS}_{ph} = \\frac{900}{18} = 50.00 \\;\\Rightarrow\\; \\frac{90.00}{50.00} = 1.80\\times$$
$$\\text{BVPS}_{tx} = \\frac{1{,}000}{30} = 33.33 \\;\\Rightarrow\\; \\frac{45.00}{33.33} = 1.35\\times$$

On reported book the textile company is 25% cheaper.

**Step 10 — Adjusted book (Chapter 11).**
$$E_{tx} - R = 1{,}000 - 400 = 600 \\;\\Rightarrow\\; \\text{BVPS}_{adj} = \\frac{600}{30} = 20.00$$
$$\\text{P/B}^{adj}_{tx} = \\frac{45.00}{20.00} = 2.25\\times$$

**The ranking reverses.** 1.80× versus 2.25×. The pharma company has no revaluation reserve, so its adjusted P/B is unchanged at 1.80×. **P/B understatement factor for the textile company: $2.25/1.35 = 1.67\\times$.**

**Step 11 — PEG.**
$$\\frac{9.00}{18} = 0.50 \\qquad \\frac{9.00}{6} = 1.50$$

**Step 12 — Enterprise value.**
$$EV_{ph} = (90 \\times 18) + 100 - 250 = 1{,}620 + 100 - 250 = 1{,}470$$
$$EV_{tx} = (45 \\times 30) + 700 - 50 = 1{,}350 + 700 - 50 = 2{,}000$$

**Step 13 — EV/EBITDA.**
$$\\frac{1{,}470}{245} = 6.00\\times \\qquad \\frac{2{,}000}{200} = 10.00\\times$$

The textile company's equity is smaller than the pharma company's (1,350 against 1,620) but its *enterprise* is larger (2,000 against 1,470). **Debt is why the equity multiple looks cheap.**

**Step 14 — Dividend yield and cash payout.**
$$\\frac{4.00}{90.00} \\times 100 = 4.44\\% \\qquad \\frac{1.50}{45.00} \\times 100 = 3.33\\%$$
$$\\text{Cash payout}_{ph} = \\frac{4.00}{11.67} \\times 100 = 34.29\\% \\qquad \\text{Cash payout}_{tx} = \\frac{1.50}{1.50} \\times 100 = 100.00\\%$$

**Step 15 — The comparison table.**

| Metric | Pharma | Textile |
|---|---|---|
| P/E trailing | 9.00× | 9.00× |
| P/E forward | 7.63× | 8.49× |
| Cash conversion | 116.67% | 30.00% |
| **Quality-adjusted P/E** | **7.71×** | **30.00×** |
| Accrual ratio | −2.00% | +5.00% |
| P/B reported | 1.80× | 1.35× |
| **P/B adjusted** | **1.80×** | **2.25×** |
| PEG | 0.50 | 1.50 |
| EV/EBITDA | 6.00× | 10.00× |
| Dividend yield | 4.44% | 3.33% |
| **Cash payout ratio** | **34.29%** | **100.00%** |

**Step 16 — The bank, from Chapter 23.**

Price 16.00, shares 120 crore, net profit 320, equity 3,200, provision shortfall 2,540.

$$\\text{EPS} = \\frac{320}{120} = 2.67 \\;\\Rightarrow\\; \\text{P/E} = \\frac{16.00}{2.67} = 6.00\\times$$
$$\\text{NAV} = \\frac{3{,}200}{120} = 26.67 \\;\\Rightarrow\\; \\text{P/B} = \\frac{16.00}{26.67} = 0.60\\times$$
$$\\text{NAV}_{adj} = \\frac{3{,}200 - 2{,}540}{120} = \\frac{660}{120} = 5.50 \\;\\Rightarrow\\; \\text{P/B}_{adj} = \\frac{16.00}{5.50} = 2.91\\times$$

**P/B understatement factor: $2.91/0.60 = 4.85\\times$.**

---

**Interpretation. Three numbers carry this chapter.**

**3.33×** — the P/E understatement factor on the textile company. A quoted multiple of 9.00 is a real multiple of 30.00. This is not an adjustment at the margin; it is a different investment. **The correction requires one line of the cash flow statement and takes fifteen seconds, and almost nobody on this exchange performs it.**

**1.67×** — the P/B understatement factor from revaluation surplus alone. The company that screened as the cheaper of the two on book value is the more expensive one. Chapter 11 told you the reserve was there; this chapter tells you what it does to the price you are paying.

**4.85×** — the P/B understatement factor on the bank. This is the number that should end the "banks are trading below book, therefore banks are cheap" argument permanently. **A 0.60× that becomes 2.91× on honest provisioning was never a discount. It was the market's answer, and the retail investor is reading the question.**

**The discipline:** a multiple is an output of two numbers, and you are only ever given one of them for free. The price is a fact. The denominator is an accounting estimate produced by people with an interest in its size. **Never quote a multiple without also quoting what you did to its denominator.**`,
      bn: `**ইনপুট।** দাম শেয়ারপ্রতি টাকায়, সমষ্টি কোটি টাকায়।

*ডিএসই ফার্মা কোং* — দাম ৯০.০০, শেয়ার ১৮, নিট মুনাফা ১৮০, CFO ২১০, মোট সম্পদ ১,৫০০, ইকুইটি ৯০০ (পুনর্মূল্যায়ন সঞ্চিতি ০), EBITDA ২৪৫, ঋণ ১০০, নগদ ২৫০, DPS ৪.০০, প্রবৃদ্ধি ১৮%।

*ডিএসই টেক্সটাইল কোং* — দাম ৪৫.০০, শেয়ার ৩০, নিট মুনাফা ১৫০, CFO ৪৫, মোট সম্পদ ২,১০০, ইকুইটি ১,০০০ (পুনর্মূল্যায়ন সঞ্চিতি ৪০০), EBITDA ২০০, ঋণ ৭০০, নগদ ৫০, DPS ১.৫০, প্রবৃদ্ধি ৬%।

**ধাপ ১ — EPS।**
$$\\text{EPS}_{ph} = \\frac{180}{18} = 10.00 \\qquad \\text{EPS}_{tx} = \\frac{150}{30} = 5.00$$

**ধাপ ২ — ট্রেইলিং P/E।**
$$\\frac{90.00}{10.00} = 9.00\\times \\qquad \\frac{45.00}{5.00} = 9.00\\times$$

স্ক্রিন এখানেই থামে। বিশ্লেষক থামেন না।

**ধাপ ৩ — ফরওয়ার্ড EPS ও ফরওয়ার্ড P/E।**
$$\\text{EPS}^{f}_{ph} = 10.00 \\times 1.18 = 11.80 \\;\\Rightarrow\\; \\frac{90.00}{11.80} = 7.63\\times$$
$$\\text{EPS}^{f}_{tx} = 5.00 \\times 1.06 = 5.30 \\;\\Rightarrow\\; \\frac{45.00}{5.30} = 8.49\\times$$

**ধাপ ৪ — আয় ইল্ড।**
$$\\frac{10.00}{90.00} \\times 100 = 11.11\\% \\qquad \\frac{5.00}{45.00} \\times 100 = 11.11\\%$$

অনিবার্যভাবে অভিন্ন — আয় ইল্ড হলো $100/(\\text{P/E})$ এবং P/E যা বলেনি তার বাইরে কিছু যোগ করে না।

**ধাপ ৫ — শেয়ারপ্রতি CFO।**
$$\\frac{210}{18} = 11.67 \\qquad \\frac{45}{30} = 1.50$$

**ধাপ ৬ — নগদ রূপান্তর।**
$$\\kappa_{ph} = \\frac{210}{180} = 116.67\\% \\qquad \\kappa_{tx} = \\frac{45}{150} = 30.00\\%$$

**ধাপ ৭ — গুণমান-সমন্বিত P/E। কেন্দ্রবিন্দু।**
$$\\text{P/E}^{q}_{ph} = \\frac{9.00}{1.1667} = 7.71\\times \\qquad \\text{P/E}^{q}_{tx} = \\frac{9.00}{0.3000} = 30.00\\times$$

**থামুন এবং এটি ঠিকভাবে পড়ুন।** দুটি কোম্পানি ঠিক ৯.০০× গুণকে উদ্ধৃত। তারা আসলে যে নগদ আদায় করেছে তার ভিত্তিতে একটি ৭.৭১×-এ, অন্যটি ৩০.০০×-এ। **কম দেখানোর গুণাঙ্ক $30.00/9.00 = 3.33\\times$।** দাম, EPS বা P/E-র কিছুই এটি প্রকাশ করেনি। কেবল নগদ প্রবাহ বিবরণী করেছে।

**ধাপ ৮ — অ্যাক্রুয়াল অনুপাত (অধ্যায় ১৩-এর নিশ্চিতকরণ)।**
$$\\frac{180 - 210}{1{,}500} \\times 100 = -2.00\\% \\qquad \\frac{150 - 45}{2{,}100} \\times 100 = +5.00\\%$$

**ধাপ ৯ — BVPS ও প্রতিবেদিত P/B।**
$$\\text{BVPS}_{ph} = \\frac{900}{18} = 50.00 \\;\\Rightarrow\\; \\frac{90.00}{50.00} = 1.80\\times$$
$$\\text{BVPS}_{tx} = \\frac{1{,}000}{30} = 33.33 \\;\\Rightarrow\\; \\frac{45.00}{33.33} = 1.35\\times$$

প্রতিবেদিত বুকে বস্ত্র কোম্পানিটি ২৫% সস্তা।

**ধাপ ১০ — সমন্বিত বুক (অধ্যায় ১১)।**
$$E_{tx} - R = 1{,}000 - 400 = 600 \\;\\Rightarrow\\; \\text{BVPS}_{adj} = \\frac{600}{30} = 20.00$$
$$\\text{P/B}^{adj}_{tx} = \\frac{45.00}{20.00} = 2.25\\times$$

**ক্রম উল্টে যায়।** ১.৮০× বনাম ২.২৫×। ওষুধ কোম্পানির কোনো পুনর্মূল্যায়ন সঞ্চিতি নেই, তাই তার সমন্বিত P/B অপরিবর্তিত ১.৮০×। **বস্ত্র কোম্পানির P/B কম দেখানোর গুণাঙ্ক: $2.25/1.35 = 1.67\\times$।**

**ধাপ ১১ — PEG।**
$$\\frac{9.00}{18} = 0.50 \\qquad \\frac{9.00}{6} = 1.50$$

**ধাপ ১২ — এন্টারপ্রাইজ ভ্যালু।**
$$EV_{ph} = (90 \\times 18) + 100 - 250 = 1{,}620 + 100 - 250 = 1{,}470$$
$$EV_{tx} = (45 \\times 30) + 700 - 50 = 1{,}350 + 700 - 50 = 2{,}000$$

**ধাপ ১৩ — EV/EBITDA।**
$$\\frac{1{,}470}{245} = 6.00\\times \\qquad \\frac{2{,}000}{200} = 10.00\\times$$

বস্ত্র কোম্পানির ইকুইটি ওষুধ কোম্পানির চেয়ে ছোট (১,৩৫০ বনাম ১,৬২০) কিন্তু তার *প্রতিষ্ঠান* বড় (২,০০০ বনাম ১,৪৭০)। **ঋণই ইকুইটি গুণককে সস্তা দেখানোর কারণ।**

**ধাপ ১৪ — লভ্যাংশ ইল্ড ও নগদ পরিশোধ।**
$$\\frac{4.00}{90.00} \\times 100 = 4.44\\% \\qquad \\frac{1.50}{45.00} \\times 100 = 3.33\\%$$
$$\\text{Cash payout}_{ph} = \\frac{4.00}{11.67} \\times 100 = 34.29\\% \\qquad \\text{Cash payout}_{tx} = \\frac{1.50}{1.50} \\times 100 = 100.00\\%$$

**ধাপ ১৫ — তুলনা টেবিল।**

| পরিমাপ | ফার্মা | টেক্সটাইল |
|---|---|---|
| P/E ট্রেইলিং | ৯.০০× | ৯.০০× |
| P/E ফরওয়ার্ড | ৭.৬৩× | ৮.৪৯× |
| নগদ রূপান্তর | ১১৬.৬৭% | ৩০.০০% |
| **গুণমান-সমন্বিত P/E** | **৭.৭১×** | **৩০.০০×** |
| অ্যাক্রুয়াল অনুপাত | −২.০০% | +৫.০০% |
| P/B প্রতিবেদিত | ১.৮০× | ১.৩৫× |
| **P/B সমন্বিত** | **১.৮০×** | **২.২৫×** |
| PEG | ০.৫০ | ১.৫০ |
| EV/EBITDA | ৬.০০× | ১০.০০× |
| লভ্যাংশ ইল্ড | ৪.৪৪% | ৩.৩৩% |
| **নগদ পরিশোধ অনুপাত** | **৩৪.২৯%** | **১০০.০০%** |

**ধাপ ১৬ — অধ্যায় ২৩-এর ব্যাংক।**

দাম ১৬.০০, শেয়ার ১২০ কোটি, নিট মুনাফা ৩২০, ইকুইটি ৩,২০০, প্রভিশন ঘাটতি ২,৫৪০।

$$\\text{EPS} = \\frac{320}{120} = 2.67 \\;\\Rightarrow\\; \\text{P/E} = \\frac{16.00}{2.67} = 6.00\\times$$
$$\\text{NAV} = \\frac{3{,}200}{120} = 26.67 \\;\\Rightarrow\\; \\text{P/B} = \\frac{16.00}{26.67} = 0.60\\times$$
$$\\text{NAV}_{adj} = \\frac{3{,}200 - 2{,}540}{120} = \\frac{660}{120} = 5.50 \\;\\Rightarrow\\; \\text{P/B}_{adj} = \\frac{16.00}{5.50} = 2.91\\times$$

**P/B কম দেখানোর গুণাঙ্ক: $2.91/0.60 = 4.85\\times$।**

---

**ব্যাখ্যা। তিনটি সংখ্যা এই অধ্যায়টি বহন করে।**

**৩.৩৩×** — বস্ত্র কোম্পানির P/E কম দেখানোর গুণাঙ্ক। উদ্ধৃত ৯.০০ গুণক আসলে ৩০.০০ গুণক। এটি প্রান্তিক কোনো সমন্বয় নয়; এটি ভিন্ন এক বিনিয়োগ। **সংশোধনটিতে নগদ প্রবাহ বিবরণীর একটি লাইন লাগে ও পনেরো সেকেন্ড সময় লাগে, আর এই এক্সচেঞ্জে প্রায় কেউ তা করে না।**

**১.৬৭×** — কেবল পুনর্মূল্যায়ন উদ্বৃত্ত থেকে আসা P/B কম দেখানোর গুণাঙ্ক। বুক ভ্যালুতে যে কোম্পানিকে দুটির মধ্যে সস্তা দেখাচ্ছিল সে-ই বেশি ব্যয়বহুল। অধ্যায় ১১ বলেছিল সঞ্চিতিটি সেখানে আছে; এই অধ্যায় বলে আপনি যে দাম দিচ্ছেন তাতে এটি কী করে।

**৪.৮৫×** — ব্যাংকের P/B কম দেখানোর গুণাঙ্ক। এই সংখ্যাটিরই "ব্যাংক বুকের নিচে লেনদেন হচ্ছে, তাই ব্যাংক সস্তা" যুক্তিটি চিরতরে শেষ করে দেওয়া উচিত। **যে ০.৬০× সৎ প্রভিশনিংয়ে ২.৯১× হয়ে যায় তা কখনোই ছাড় ছিল না। এটি ছিল বাজারের উত্তর, আর খুচরা বিনিয়োগকারী পড়ছেন প্রশ্নটি।**

**শৃঙ্খলা:** একটি গুণক দুটি সংখ্যার ফল, আর আপনাকে সর্বদা তার একটিই বিনামূল্যে দেওয়া হয়। দাম একটি তথ্য। হর একটি হিসাবরক্ষণ প্রাক্কলন, যা এমন লোকেরা তৈরি করেছেন যাঁদের এর আকারে স্বার্থ আছে। **হরের সঙ্গে আপনি কী করেছেন তা না বলে কখনো কোনো গুণক উদ্ধৃত করবেন না।**`,
    },

    excel: {
      en: `\`\`\`
A1:  COMPANY                          B1:  DSE Textile Co (illustrative)

A3:  Price (BDT)                      B3:  45
A4:  Shares Outstanding (crore)       B4:  30
A5:  Market Cap (BDT cr)              B5:  =B3*B4

A7:  Net Profit (BDT cr)              B7:  150
A8:  Cash from Operations (BDT cr)    B8:  45
A9:  Total Assets (BDT cr)            B9:  2100
A10: Equity as Reported (BDT cr)      B10: 1000
A11: Revaluation Res / Prov Shortfall B11: 400
A12: EBITDA (BDT cr)                  B12: 200
A13: Total Debt (BDT cr)              B13: 700
A14: Cash & Equivalents (BDT cr)      B14: 50
A15: DPS (BDT)                        B15: 1.5
A16: Forward Earnings Growth (%)      B16: 6

A18: HEADLINE MULTIPLES
A19: EPS (BDT)                        B19: =B7/B4
A20: P/E Trailing (x)                 B20: =B3/B19
A21: Forward EPS (BDT)                B21: =B19*(1+B16/100)
A22: P/E Forward (x)                  B22: =B3/B21
A23: Earnings Yield (%)               B23: =B19/B3*100
A24: BVPS Reported (BDT)              B24: =B10/B4
A25: P/B Reported (x)                 B25: =B3/B24
A26: PEG                              B26: =B20/B16
A27: Enterprise Value (BDT cr)        B27: =B5+B13-B14
A28: EV / EBITDA (x)                  B28: =B27/B12
A29: Dividend Yield (%)               B29: =B15/B3*100

A31: QUALITY ADJUSTMENT
A32: CFO per Share (BDT)              B32: =B8/B4
A33: Cash Conversion CFO/NP (%)       B33: =B8/B7*100
A34: QUALITY-ADJUSTED P/E (x)         B34: =B20/(B33/100)
A35: Accrual Ratio (%)                B35: =(B7-B8)/B9*100
A36: Adjusted Equity (BDT cr)         B36: =B10-B11
A37: Adjusted BVPS (BDT)              B37: =B36/B4
A38: ADJUSTED P/B (x)                 B38: =IF(B37<=0,"NEGATIVE EQUITY",B3/B37)
A39: Cash Payout Ratio (%)            B39: =B15/B32*100

A41: THE GAP
A42: P/E Understatement (x)           B42: =B34/B20
A43: P/B Understatement (x)           B43: =IF(B37<=0,"n/a",B3/B37/B25)
A44: VERDICT                          B44: =IF(OR(B42>2,B33<60),
                                             "VALUE TRAP - the low multiple prices a defect",
                                             IF(OR(B43>1.5,B39>90),
                                             "CAUTION - verify the flagged item",
                                             "Multiple supported by cash"))
\`\`\`

**B42 and B43 are the sheet.** Everything above them is arithmetic anyone can do; those two cells are the only ones that tell you whether the cheapness is real. B42 asks how much of the P/E survives contact with the cash flow statement. B43 asks how much of the P/B survives contact with an honest balance sheet.

For the textile company as entered, B20 reads 9.00 and B34 reads 30.00, so **B42 = 3.33 and the verdict fires immediately.**

**Use it as a screen, not a report.** Paste the block once per holding and sort by B42 descending. The names at the top are the ones whose apparent cheapness is manufactured by accruals — and in a market where retail screening is done almost entirely on trailing P/E, those are precisely the names that attract the most retail buying.

**Set B11 to 0 and watch B38 fall from 2.25 to 1.35.** That single toggle is the revaluation reserve of Chapter 11, and it is the difference between a company that looks cheaper than the pharma comparator and one that is 25% more expensive. Then set B11 to 2540, B10 to 3200, B3 to 16 and B4 to 120: the sheet becomes the Chapter 23 bank, B25 reads 0.60, B38 reads 2.91, and B43 reads 4.85.

**The same eight input cells describe a textile manufacturer and a commercial bank, and in both cases the reported multiple is the least informative number on the sheet.**`,
      bn: `\`\`\`
A1:  কোম্পানি                          B1:  DSE Textile Co (illustrative)

A3:  দাম (টাকা)                        B3:  45
A4:  বকেয়া শেয়ার (কোটি)                B4:  30
A5:  বাজার মূলধন (কোটি টাকা)            B5:  =B3*B4

A7:  নিট মুনাফা (কোটি টাকা)             B7:  150
A8:  পরিচালন নগদ প্রবাহ (কোটি টাকা)      B8:  45
A9:  মোট সম্পদ (কোটি টাকা)              B9:  2100
A10: প্রকাশিত ইকুইটি (কোটি টাকা)         B10: 1000
A11: পুনর্মূল্যায়ন সঞ্চিতি / প্রভিশন ঘাটতি B11: 400
A12: EBITDA (কোটি টাকা)                B12: 200
A13: মোট ঋণ (কোটি টাকা)                 B13: 700
A14: নগদ ও সমতুল্য (কোটি টাকা)          B14: 50
A15: DPS (টাকা)                        B15: 1.5
A16: ভবিষ্যৎ আয় প্রবৃদ্ধি (%)            B16: 6

A18: শিরোনাম গুণকসমূহ
A19: EPS (টাকা)                        B19: =B7/B4
A20: P/E ট্রেইলিং (x)                   B20: =B3/B19
A21: ফরওয়ার্ড EPS (টাকা)               B21: =B19*(1+B16/100)
A22: P/E ফরওয়ার্ড (x)                  B22: =B3/B21
A23: আয় ইল্ড (%)                       B23: =B19/B3*100
A24: BVPS প্রতিবেদিত (টাকা)             B24: =B10/B4
A25: P/B প্রতিবেদিত (x)                 B25: =B3/B24
A26: PEG                              B26: =B20/B16
A27: এন্টারপ্রাইজ ভ্যালু (কোটি টাকা)      B27: =B5+B13-B14
A28: EV / EBITDA (x)                  B28: =B27/B12
A29: লভ্যাংশ ইল্ড (%)                   B29: =B15/B3*100

A31: গুণমান সমন্বয়
A32: শেয়ারপ্রতি CFO (টাকা)              B32: =B8/B4
A33: নগদ রূপান্তর CFO/NP (%)            B33: =B8/B7*100
A34: গুণমান-সমন্বিত P/E (x)             B34: =B20/(B33/100)
A35: অ্যাক্রুয়াল অনুপাত (%)              B35: =(B7-B8)/B9*100
A36: সমন্বিত ইকুইটি (কোটি টাকা)          B36: =B10-B11
A37: সমন্বিত BVPS (টাকা)                B37: =B36/B4
A38: সমন্বিত P/B (x)                    B38: =IF(B37<=0,"NEGATIVE EQUITY",B3/B37)
A39: নগদ পরিশোধ অনুপাত (%)              B39: =B15/B32*100

A41: ফাঁক
A42: P/E কম দেখানোর গুণাঙ্ক (x)          B42: =B34/B20
A43: P/B কম দেখানোর গুণাঙ্ক (x)          B43: =IF(B37<=0,"n/a",B3/B37/B25)
A44: রায়                               B44: =IF(OR(B42>2,B33<60),
                                             "VALUE TRAP - the low multiple prices a defect",
                                             IF(OR(B43>1.5,B39>90),
                                             "CAUTION - verify the flagged item",
                                             "Multiple supported by cash"))
\`\`\`

**B42 ও B43-ই এই শিটটি।** এদের ওপরের সবকিছু এমন পাটিগণিত যা যে কেউ করতে পারে; ঐ দুটি ঘরই কেবল বলে সস্তা হওয়াটি প্রকৃত কি না। B42 জিজ্ঞেস করে নগদ প্রবাহ বিবরণীর সংস্পর্শে P/E-র কতটা টিকে থাকে। B43 জিজ্ঞেস করে একটি সৎ স্থিতিপত্রের সংস্পর্শে P/B-র কতটা টিকে থাকে।

প্রবিষ্ট বস্ত্র কোম্পানির জন্য B20 পড়ে ৯.০০ এবং B34 পড়ে ৩০.০০, তাই **B42 = ৩.৩৩ এবং রায়টি সঙ্গে সঙ্গে জ্বলে ওঠে।**

**একে প্রতিবেদন নয়, স্ক্রিন হিসেবে ব্যবহার করুন।** প্রতিটি হোল্ডিংয়ের জন্য একবার করে ব্লকটি বসান এবং B42 অনুযায়ী অবরোহী ক্রমে সাজান। শীর্ষের নামগুলোই সেগুলো যাদের আপাত সস্তা হওয়া অ্যাক্রুয়াল দিয়ে তৈরি — আর যে বাজারে খুচরা স্ক্রিনিং প্রায় সম্পূর্ণভাবে ট্রেইলিং P/E-তে হয়, সেখানে ঠিক ঐ নামগুলোই সবচেয়ে বেশি খুচরা ক্রয় টানে।

**B11-এ ০ বসান এবং দেখুন B38 ২.২৫ থেকে ১.৩৫-এ নামে।** ঐ একটিমাত্র টগলই অধ্যায় ১১-এর পুনর্মূল্যায়ন সঞ্চিতি, এবং এটিই সেই পার্থক্য যা একটি কোম্পানিকে ওষুধ তুলনীয়টির চেয়ে সস্তা দেখায় বনাম ২৫% বেশি ব্যয়বহুল করে। এরপর B11-এ ২৫৪০, B10-এ ৩২০০, B3-এ ১৬ ও B4-এ ১২০ বসান: শিটটি অধ্যায় ২৩-এর ব্যাংক হয়ে যায়, B25 পড়ে ০.৬০, B38 পড়ে ২.৯১, এবং B43 পড়ে ৪.৮৫।

**একই আটটি ইনপুট ঘর একটি বস্ত্র উৎপাদক ও একটি বাণিজ্যিক ব্যাংককে বর্ণনা করে, এবং দুই ক্ষেত্রেই প্রতিবেদিত গুণকটি শিটের সবচেয়ে কম তথ্যবহ সংখ্যা।**`,
    },

    python: {
      en: `\`\`\`python
"""
Chapter 18 - Valuation multiples for DSE-listed companies.
Prices in BDT per share; company aggregates in BDT crore. Educational.
"""
from dataclasses import dataclass
from typing import List, Optional


@dataclass
class Valuation:
    """One company's multiples, and whether a low multiple is a bargain or a trap."""
    name: str
    price: float
    shares: float            # crore
    net_profit: float        # BDT crore
    cfo: float               # BDT crore, cash from operations
    total_assets: float      # BDT crore
    equity: float            # BDT crore, as reported
    equity_deduction: float  # revaluation reserve or provision shortfall (Ch 11 / Ch 23)
    deduction_note: str
    ebitda: float            # BDT crore; 0 means not meaningful (banks)
    debt: float
    cash: float
    dps: float               # BDT per share
    growth_pct: float        # forward earnings growth, %

    # ---- earnings side ---------------------------------------------
    @property
    def market_cap(self) -> float:
        return self.price * self.shares

    @property
    def eps(self) -> float:
        return self.net_profit / self.shares

    @property
    def pe(self) -> float:
        return self.price / self.eps

    @property
    def forward_eps(self) -> float:
        return self.eps * (1 + self.growth_pct / 100)

    @property
    def forward_pe(self) -> float:
        return self.price / self.forward_eps

    @property
    def earnings_yield_pct(self) -> float:
        return self.eps / self.price * 100

    # ---- earnings quality, Chapter 13 -------------------------------
    @property
    def cfo_per_share(self) -> float:
        return self.cfo / self.shares

    @property
    def cash_conversion_pct(self) -> float:
        return self.cfo / self.net_profit * 100

    @property
    def quality_adjusted_pe(self) -> float:
        """P/E restated on cash earnings. Identical to price / CFO per share."""
        return self.pe / (self.cash_conversion_pct / 100)

    @property
    def accrual_ratio_pct(self) -> float:
        return (self.net_profit - self.cfo) / self.total_assets * 100

    # ---- book side, Chapters 11 and 23 ------------------------------
    @property
    def bvps(self) -> float:
        return self.equity / self.shares

    @property
    def pb(self) -> float:
        return self.price / self.bvps

    @property
    def adjusted_equity(self) -> float:
        return self.equity - self.equity_deduction

    @property
    def adjusted_bvps(self) -> float:
        return self.adjusted_equity / self.shares

    @property
    def adjusted_pb(self) -> Optional[float]:
        if self.adjusted_bvps <= 0:
            return None
        return self.price / self.adjusted_bvps

    @property
    def deduction_share_pct(self) -> float:
        return self.equity_deduction / self.equity * 100

    # ---- growth and enterprise --------------------------------------
    @property
    def peg(self) -> float:
        return self.pe / self.growth_pct

    @property
    def enterprise_value(self) -> float:
        return self.market_cap + self.debt - self.cash

    @property
    def ev_ebitda(self) -> Optional[float]:
        if self.ebitda <= 0:
            return None
        return self.enterprise_value / self.ebitda

    # ---- distribution -----------------------------------------------
    @property
    def dividend_yield_pct(self) -> float:
        return self.dps / self.price * 100

    @property
    def cash_payout_pct(self) -> float:
        return self.dps / self.cfo_per_share * 100

    # ---- the trap detector ------------------------------------------
    def flags(self) -> List[str]:
        out = []
        if self.cash_conversion_pct < 60.0:
            out.append("Cash conversion below 60% - earnings are accrual-driven (Ch 13)")
        if self.quality_adjusted_pe > 2 * self.pe:
            out.append("Quality-adjusted P/E is over twice the headline P/E")
        if self.deduction_share_pct > 20.0:
            out.append(
                self.deduction_note
                + f" is {self.deduction_share_pct:.1f}% of equity - book unreliable"
            )
        if self.cash_payout_pct > 90.0:
            out.append("Dividend consumes essentially all operating cash flow")
        ev = self.ev_ebitda
        if ev is not None and ev > 8.0 and self.pe < 12.0:
            out.append("EV/EBITDA above 8x on a sub-12x P/E - equity multiple flattered by debt (Ch 17)")
        if self.peg > 1.5:
            out.append("PEG above 1.5 - the multiple is not supported by growth")
        apb = self.adjusted_pb
        if apb is not None and apb > 2 * self.pb:
            out.append("Adjusted P/B is over twice reported P/B - the book is the problem")
        return out

    def verdict(self) -> str:
        apb = self.adjusted_pb
        if apb is None or (apb > 2.0 and self.pb < 1.0):
            return "VALUE TRAP - a sub-book price that is a premium on honest book"
        n = len(self.flags())
        if n >= 3:
            return "VALUE TRAP - the low multiple is the market pricing a defect"
        if n >= 1:
            return "CAUTION - verify the flagged item before calling this cheap"
        return "MULTIPLE SUPPORTED BY CASH"


def report(v: Valuation) -> None:
    apb = v.adjusted_pb
    ev = v.ev_ebitda
    print(f"Company                      : {v.name}")
    print(f"Price (BDT)                  : {v.price:,.2f}")
    print(f"EPS trailing (BDT)           : {v.eps:,.2f}")
    print(f"P/E trailing                 : {v.pe:.2f}x")
    print(f"Forward EPS (BDT)            : {v.forward_eps:,.2f}")
    print(f"Forward P/E                  : {v.forward_pe:.2f}x")
    print(f"Earnings yield               : {v.earnings_yield_pct:.2f}%")
    print(f"CFO per share (BDT)          : {v.cfo_per_share:,.2f}")
    print(f"Cash conversion (CFO/NP)     : {v.cash_conversion_pct:.2f}%")
    print(f"QUALITY-ADJUSTED P/E         : {v.quality_adjusted_pe:.2f}x")
    print(f"Accrual ratio (NP-CFO)/TA    : {v.accrual_ratio_pct:.2f}%")
    print(f"BVPS reported (BDT)          : {v.bvps:,.2f}")
    print(f"P/B reported                 : {v.pb:.2f}x")
    print(f"BVPS adjusted (BDT)          : {v.adjusted_bvps:,.2f}")
    print(f"P/B ADJUSTED                 : {'NEGATIVE EQUITY' if apb is None else format(apb, '.2f') + 'x'}")
    print(f"Growth assumed               : {v.growth_pct:.2f}%")
    print(f"PEG                          : {v.peg:.2f}")
    print(f"Enterprise value (BDT cr)    : {v.enterprise_value:,.2f}")
    print(f"EV / EBITDA                  : {'n/a - not meaningful' if ev is None else format(ev, '.2f') + 'x'}")
    print(f"Dividend yield               : {v.dividend_yield_pct:.2f}%")
    print(f"Cash payout ratio            : {v.cash_payout_pct:.2f}%")
    fl = v.flags()
    if fl:
        print("Flags:")
        for f in fl:
            print(f"  - {f}")
    else:
        print("Flags: none")
    print(f"VERDICT: {v.verdict()}")


if __name__ == "__main__":
    pharma = Valuation(
        name="DSE Pharma Co (illustrative)",
        price=90.0, shares=18.0,
        net_profit=180.0, cfo=210.0,
        total_assets=1500.0, equity=900.0,
        equity_deduction=0.0, deduction_note="Revaluation reserve",
        ebitda=245.0, debt=100.0, cash=250.0,
        dps=4.0, growth_pct=18.0,
    )

    textile = Valuation(
        name="DSE Textile Co (illustrative)",
        price=45.0, shares=30.0,
        net_profit=150.0, cfo=45.0,
        total_assets=2100.0, equity=1000.0,
        equity_deduction=400.0, deduction_note="Revaluation reserve",
        ebitda=200.0, debt=700.0, cash=50.0,
        dps=1.5, growth_pct=6.0,
    )

    bank = Valuation(
        name="DSE Bank Co (Chapter 23 figures)",
        price=16.0, shares=120.0,
        net_profit=320.0, cfo=320.0,
        total_assets=52000.0, equity=3200.0,
        equity_deduction=2540.0, deduction_note="Provision shortfall",
        ebitda=0.0, debt=0.0, cash=0.0,
        dps=0.8, growth_pct=5.0,
    )

    for v in (pharma, textile, bank):
        report(v)
        print()

    print("Two companies, one headline P/E of 9.00x")
    print(f"{'Metric':<24}{'Pharma':>12}{'Textile':>12}")
    print("-" * 48)
    rows = [
        ("P/E trailing", f"{pharma.pe:.2f}x", f"{textile.pe:.2f}x"),
        ("Cash conversion", f"{pharma.cash_conversion_pct:.2f}%", f"{textile.cash_conversion_pct:.2f}%"),
        ("Quality-adj P/E", f"{pharma.quality_adjusted_pe:.2f}x", f"{textile.quality_adjusted_pe:.2f}x"),
        ("P/B reported", f"{pharma.pb:.2f}x", f"{textile.pb:.2f}x"),
        ("P/B adjusted", f"{pharma.adjusted_pb:.2f}x", f"{textile.adjusted_pb:.2f}x"),
        ("PEG", f"{pharma.peg:.2f}", f"{textile.peg:.2f}"),
        ("EV / EBITDA", f"{pharma.ev_ebitda:.2f}x", f"{textile.ev_ebitda:.2f}x"),
        ("Dividend yield", f"{pharma.dividend_yield_pct:.2f}%", f"{textile.dividend_yield_pct:.2f}%"),
        ("Cash payout ratio", f"{pharma.cash_payout_pct:.2f}%", f"{textile.cash_payout_pct:.2f}%"),
    ]
    for label, a, b in rows:
        print(f"{label:<24}{a:>12}{b:>12}")
\`\`\`

**Expected output:**

\`\`\`text
Company                      : DSE Pharma Co (illustrative)
Price (BDT)                  : 90.00
EPS trailing (BDT)           : 10.00
P/E trailing                 : 9.00x
Forward EPS (BDT)            : 11.80
Forward P/E                  : 7.63x
Earnings yield               : 11.11%
CFO per share (BDT)          : 11.67
Cash conversion (CFO/NP)     : 116.67%
QUALITY-ADJUSTED P/E         : 7.71x
Accrual ratio (NP-CFO)/TA    : -2.00%
BVPS reported (BDT)          : 50.00
P/B reported                 : 1.80x
BVPS adjusted (BDT)          : 50.00
P/B ADJUSTED                 : 1.80x
Growth assumed               : 18.00%
PEG                          : 0.50
Enterprise value (BDT cr)    : 1,470.00
EV / EBITDA                  : 6.00x
Dividend yield               : 4.44%
Cash payout ratio            : 34.29%
Flags: none
VERDICT: MULTIPLE SUPPORTED BY CASH

Company                      : DSE Textile Co (illustrative)
Price (BDT)                  : 45.00
EPS trailing (BDT)           : 5.00
P/E trailing                 : 9.00x
Forward EPS (BDT)            : 5.30
Forward P/E                  : 8.49x
Earnings yield               : 11.11%
CFO per share (BDT)          : 1.50
Cash conversion (CFO/NP)     : 30.00%
QUALITY-ADJUSTED P/E         : 30.00x
Accrual ratio (NP-CFO)/TA    : 5.00%
BVPS reported (BDT)          : 33.33
P/B reported                 : 1.35x
BVPS adjusted (BDT)          : 20.00
P/B ADJUSTED                 : 2.25x
Growth assumed               : 6.00%
PEG                          : 1.50
Enterprise value (BDT cr)    : 2,000.00
EV / EBITDA                  : 10.00x
Dividend yield               : 3.33%
Cash payout ratio            : 100.00%
Flags:
  - Cash conversion below 60% - earnings are accrual-driven (Ch 13)
  - Quality-adjusted P/E is over twice the headline P/E
  - Revaluation reserve is 40.0% of equity - book unreliable
  - Dividend consumes essentially all operating cash flow
  - EV/EBITDA above 8x on a sub-12x P/E - equity multiple flattered by debt (Ch 17)
VERDICT: VALUE TRAP - the low multiple is the market pricing a defect

Company                      : DSE Bank Co (Chapter 23 figures)
Price (BDT)                  : 16.00
EPS trailing (BDT)           : 2.67
P/E trailing                 : 6.00x
Forward EPS (BDT)            : 2.80
Forward P/E                  : 5.71x
Earnings yield               : 16.67%
CFO per share (BDT)          : 2.67
Cash conversion (CFO/NP)     : 100.00%
QUALITY-ADJUSTED P/E         : 6.00x
Accrual ratio (NP-CFO)/TA    : 0.00%
BVPS reported (BDT)          : 26.67
P/B reported                 : 0.60x
BVPS adjusted (BDT)          : 5.50
P/B ADJUSTED                 : 2.91x
Growth assumed               : 5.00%
PEG                          : 1.20
Enterprise value (BDT cr)    : 1,920.00
EV / EBITDA                  : n/a - not meaningful
Dividend yield               : 5.00%
Cash payout ratio            : 30.00%
Flags:
  - Provision shortfall is 79.4% of equity - book unreliable
  - Adjusted P/B is over twice reported P/B - the book is the problem
VERDICT: VALUE TRAP - a sub-book price that is a premium on honest book

Two companies, one headline P/E of 9.00x
Metric                        Pharma     Textile
------------------------------------------------
P/E trailing                   9.00x       9.00x
Cash conversion              116.67%      30.00%
Quality-adj P/E                7.71x      30.00x
P/B reported                   1.80x       1.35x
P/B adjusted                   1.80x       2.25x
PEG                             0.50        1.50
EV / EBITDA                    6.00x      10.00x
Dividend yield                 4.44%       3.33%
Cash payout ratio             34.29%     100.00%
\`\`\`

**Read the three verdicts together.** The pharma company raises zero flags at a P/E of 9.00. The textile company raises five at the same P/E. The bank raises two, and is condemned by a rule the others never trigger: **a price below reported book that becomes a premium on adjusted book is definitionally a trap, regardless of how many other boxes it ticks.**

**Notice what the code does with the bank's EV/EBITDA: it refuses to compute it.** That refusal is the point. A programme that returned a number there would be more dangerous than one that returns nothing, because the number would be arithmetically valid and analytically void. Chapter 23 opens with this warning; the dataclass encodes it.

**Change one input at a time.** Set the textile company's \`cfo\` to 175 and cash conversion rises to 116.67%, the quality-adjusted P/E collapses to 7.71×, and three of five flags clear — but the revaluation flag and the EV/EBITDA flag survive, because the book and the debt are unaffected by how well the company collects. **Now set \`equity_deduction\` to 0 as well:** adjusted P/B falls to 1.35× and only the leverage flag remains. Each flag isolates a different defect, and clearing one never clears another. **That is the whole argument against screening on a single multiple.**`,
      bn: `\`\`\`python
"""
অধ্যায় ১৮ — ডিএসই-তালিকাভুক্ত কোম্পানির মূল্যায়ন গুণক।
দাম শেয়ারপ্রতি টাকায়; কোম্পানির সমষ্টি কোটি টাকায়। শিক্ষামূলক।
"""
from dataclasses import dataclass
from typing import List, Optional


@dataclass
class Valuation:
    """একটি কোম্পানির গুণক, এবং নিম্ন গুণক সুযোগ না ফাঁদ।"""
    name: str
    price: float
    shares: float            # কোটি
    net_profit: float        # কোটি টাকা
    cfo: float               # কোটি টাকা, পরিচালন নগদ প্রবাহ
    total_assets: float      # কোটি টাকা
    equity: float            # কোটি টাকা, প্রকাশিত অনুযায়ী
    equity_deduction: float  # পুনর্মূল্যায়ন সঞ্চিতি বা প্রভিশন ঘাটতি (অধ্যায় ১১ / ২৩)
    deduction_note: str
    ebitda: float            # কোটি টাকা; ০ মানে অর্থবহ নয় (ব্যাংক)
    debt: float
    cash: float
    dps: float               # শেয়ারপ্রতি টাকা
    growth_pct: float        # ভবিষ্যৎ আয় প্রবৃদ্ধি, %

    # ---- আয়ের দিক --------------------------------------------------
    @property
    def market_cap(self) -> float:
        return self.price * self.shares

    @property
    def eps(self) -> float:
        return self.net_profit / self.shares

    @property
    def pe(self) -> float:
        return self.price / self.eps

    @property
    def forward_eps(self) -> float:
        return self.eps * (1 + self.growth_pct / 100)

    @property
    def forward_pe(self) -> float:
        return self.price / self.forward_eps

    @property
    def earnings_yield_pct(self) -> float:
        return self.eps / self.price * 100

    # ---- আয়ের গুণমান, অধ্যায় ১৩ -------------------------------------
    @property
    def cfo_per_share(self) -> float:
        return self.cfo / self.shares

    @property
    def cash_conversion_pct(self) -> float:
        return self.cfo / self.net_profit * 100

    @property
    def quality_adjusted_pe(self) -> float:
        """নগদ আয়ের ভিত্তিতে পুনর্গঠিত P/E। দাম / শেয়ারপ্রতি CFO-র অভিন্ন।"""
        return self.pe / (self.cash_conversion_pct / 100)

    @property
    def accrual_ratio_pct(self) -> float:
        return (self.net_profit - self.cfo) / self.total_assets * 100

    # ---- বুকের দিক, অধ্যায় ১১ ও ২৩ -----------------------------------
    @property
    def bvps(self) -> float:
        return self.equity / self.shares

    @property
    def pb(self) -> float:
        return self.price / self.bvps

    @property
    def adjusted_equity(self) -> float:
        return self.equity - self.equity_deduction

    @property
    def adjusted_bvps(self) -> float:
        return self.adjusted_equity / self.shares

    @property
    def adjusted_pb(self) -> Optional[float]:
        if self.adjusted_bvps <= 0:
            return None
        return self.price / self.adjusted_bvps

    @property
    def deduction_share_pct(self) -> float:
        return self.equity_deduction / self.equity * 100

    # ---- প্রবৃদ্ধি ও প্রতিষ্ঠান ----------------------------------------
    @property
    def peg(self) -> float:
        return self.pe / self.growth_pct

    @property
    def enterprise_value(self) -> float:
        return self.market_cap + self.debt - self.cash

    @property
    def ev_ebitda(self) -> Optional[float]:
        if self.ebitda <= 0:
            return None
        return self.enterprise_value / self.ebitda

    # ---- বিতরণ ------------------------------------------------------
    @property
    def dividend_yield_pct(self) -> float:
        return self.dps / self.price * 100

    @property
    def cash_payout_pct(self) -> float:
        return self.dps / self.cfo_per_share * 100

    # ---- ফাঁদ শনাক্তকারী ---------------------------------------------
    def flags(self) -> List[str]:
        out = []
        if self.cash_conversion_pct < 60.0:
            out.append("Cash conversion below 60% - earnings are accrual-driven (Ch 13)")
        if self.quality_adjusted_pe > 2 * self.pe:
            out.append("Quality-adjusted P/E is over twice the headline P/E")
        if self.deduction_share_pct > 20.0:
            out.append(
                self.deduction_note
                + f" is {self.deduction_share_pct:.1f}% of equity - book unreliable"
            )
        if self.cash_payout_pct > 90.0:
            out.append("Dividend consumes essentially all operating cash flow")
        ev = self.ev_ebitda
        if ev is not None and ev > 8.0 and self.pe < 12.0:
            out.append("EV/EBITDA above 8x on a sub-12x P/E - equity multiple flattered by debt (Ch 17)")
        if self.peg > 1.5:
            out.append("PEG above 1.5 - the multiple is not supported by growth")
        apb = self.adjusted_pb
        if apb is not None and apb > 2 * self.pb:
            out.append("Adjusted P/B is over twice reported P/B - the book is the problem")
        return out

    def verdict(self) -> str:
        apb = self.adjusted_pb
        if apb is None or (apb > 2.0 and self.pb < 1.0):
            return "VALUE TRAP - a sub-book price that is a premium on honest book"
        n = len(self.flags())
        if n >= 3:
            return "VALUE TRAP - the low multiple is the market pricing a defect"
        if n >= 1:
            return "CAUTION - verify the flagged item before calling this cheap"
        return "MULTIPLE SUPPORTED BY CASH"


def report(v: Valuation) -> None:
    apb = v.adjusted_pb
    ev = v.ev_ebitda
    print(f"Company                      : {v.name}")
    print(f"Price (BDT)                  : {v.price:,.2f}")
    print(f"EPS trailing (BDT)           : {v.eps:,.2f}")
    print(f"P/E trailing                 : {v.pe:.2f}x")
    print(f"Forward EPS (BDT)            : {v.forward_eps:,.2f}")
    print(f"Forward P/E                  : {v.forward_pe:.2f}x")
    print(f"Earnings yield               : {v.earnings_yield_pct:.2f}%")
    print(f"CFO per share (BDT)          : {v.cfo_per_share:,.2f}")
    print(f"Cash conversion (CFO/NP)     : {v.cash_conversion_pct:.2f}%")
    print(f"QUALITY-ADJUSTED P/E         : {v.quality_adjusted_pe:.2f}x")
    print(f"Accrual ratio (NP-CFO)/TA    : {v.accrual_ratio_pct:.2f}%")
    print(f"BVPS reported (BDT)          : {v.bvps:,.2f}")
    print(f"P/B reported                 : {v.pb:.2f}x")
    print(f"BVPS adjusted (BDT)          : {v.adjusted_bvps:,.2f}")
    print(f"P/B ADJUSTED                 : {'NEGATIVE EQUITY' if apb is None else format(apb, '.2f') + 'x'}")
    print(f"Growth assumed               : {v.growth_pct:.2f}%")
    print(f"PEG                          : {v.peg:.2f}")
    print(f"Enterprise value (BDT cr)    : {v.enterprise_value:,.2f}")
    print(f"EV / EBITDA                  : {'n/a - not meaningful' if ev is None else format(ev, '.2f') + 'x'}")
    print(f"Dividend yield               : {v.dividend_yield_pct:.2f}%")
    print(f"Cash payout ratio            : {v.cash_payout_pct:.2f}%")
    fl = v.flags()
    if fl:
        print("Flags:")
        for f in fl:
            print(f"  - {f}")
    else:
        print("Flags: none")
    print(f"VERDICT: {v.verdict()}")


if __name__ == "__main__":
    pharma = Valuation(
        name="DSE Pharma Co (illustrative)",
        price=90.0, shares=18.0,
        net_profit=180.0, cfo=210.0,
        total_assets=1500.0, equity=900.0,
        equity_deduction=0.0, deduction_note="Revaluation reserve",
        ebitda=245.0, debt=100.0, cash=250.0,
        dps=4.0, growth_pct=18.0,
    )

    textile = Valuation(
        name="DSE Textile Co (illustrative)",
        price=45.0, shares=30.0,
        net_profit=150.0, cfo=45.0,
        total_assets=2100.0, equity=1000.0,
        equity_deduction=400.0, deduction_note="Revaluation reserve",
        ebitda=200.0, debt=700.0, cash=50.0,
        dps=1.5, growth_pct=6.0,
    )

    bank = Valuation(
        name="DSE Bank Co (Chapter 23 figures)",
        price=16.0, shares=120.0,
        net_profit=320.0, cfo=320.0,
        total_assets=52000.0, equity=3200.0,
        equity_deduction=2540.0, deduction_note="Provision shortfall",
        ebitda=0.0, debt=0.0, cash=0.0,
        dps=0.8, growth_pct=5.0,
    )

    for v in (pharma, textile, bank):
        report(v)
        print()

    print("Two companies, one headline P/E of 9.00x")
    print(f"{'Metric':<24}{'Pharma':>12}{'Textile':>12}")
    print("-" * 48)
    rows = [
        ("P/E trailing", f"{pharma.pe:.2f}x", f"{textile.pe:.2f}x"),
        ("Cash conversion", f"{pharma.cash_conversion_pct:.2f}%", f"{textile.cash_conversion_pct:.2f}%"),
        ("Quality-adj P/E", f"{pharma.quality_adjusted_pe:.2f}x", f"{textile.quality_adjusted_pe:.2f}x"),
        ("P/B reported", f"{pharma.pb:.2f}x", f"{textile.pb:.2f}x"),
        ("P/B adjusted", f"{pharma.adjusted_pb:.2f}x", f"{textile.adjusted_pb:.2f}x"),
        ("PEG", f"{pharma.peg:.2f}", f"{textile.peg:.2f}"),
        ("EV / EBITDA", f"{pharma.ev_ebitda:.2f}x", f"{textile.ev_ebitda:.2f}x"),
        ("Dividend yield", f"{pharma.dividend_yield_pct:.2f}%", f"{textile.dividend_yield_pct:.2f}%"),
        ("Cash payout ratio", f"{pharma.cash_payout_pct:.2f}%", f"{textile.cash_payout_pct:.2f}%"),
    ]
    for label, a, b in rows:
        print(f"{label:<24}{a:>12}{b:>12}")
\`\`\`

**প্রত্যাশিত ফলাফল:**

\`\`\`text
Company                      : DSE Pharma Co (illustrative)
Price (BDT)                  : 90.00
EPS trailing (BDT)           : 10.00
P/E trailing                 : 9.00x
Forward EPS (BDT)            : 11.80
Forward P/E                  : 7.63x
Earnings yield               : 11.11%
CFO per share (BDT)          : 11.67
Cash conversion (CFO/NP)     : 116.67%
QUALITY-ADJUSTED P/E         : 7.71x
Accrual ratio (NP-CFO)/TA    : -2.00%
BVPS reported (BDT)          : 50.00
P/B reported                 : 1.80x
BVPS adjusted (BDT)          : 50.00
P/B ADJUSTED                 : 1.80x
Growth assumed               : 18.00%
PEG                          : 0.50
Enterprise value (BDT cr)    : 1,470.00
EV / EBITDA                  : 6.00x
Dividend yield               : 4.44%
Cash payout ratio            : 34.29%
Flags: none
VERDICT: MULTIPLE SUPPORTED BY CASH

Company                      : DSE Textile Co (illustrative)
Price (BDT)                  : 45.00
EPS trailing (BDT)           : 5.00
P/E trailing                 : 9.00x
Forward EPS (BDT)            : 5.30
Forward P/E                  : 8.49x
Earnings yield               : 11.11%
CFO per share (BDT)          : 1.50
Cash conversion (CFO/NP)     : 30.00%
QUALITY-ADJUSTED P/E         : 30.00x
Accrual ratio (NP-CFO)/TA    : 5.00%
BVPS reported (BDT)          : 33.33
P/B reported                 : 1.35x
BVPS adjusted (BDT)          : 20.00
P/B ADJUSTED                 : 2.25x
Growth assumed               : 6.00%
PEG                          : 1.50
Enterprise value (BDT cr)    : 2,000.00
EV / EBITDA                  : 10.00x
Dividend yield               : 3.33%
Cash payout ratio            : 100.00%
Flags:
  - Cash conversion below 60% - earnings are accrual-driven (Ch 13)
  - Quality-adjusted P/E is over twice the headline P/E
  - Revaluation reserve is 40.0% of equity - book unreliable
  - Dividend consumes essentially all operating cash flow
  - EV/EBITDA above 8x on a sub-12x P/E - equity multiple flattered by debt (Ch 17)
VERDICT: VALUE TRAP - the low multiple is the market pricing a defect

Company                      : DSE Bank Co (Chapter 23 figures)
Price (BDT)                  : 16.00
EPS trailing (BDT)           : 2.67
P/E trailing                 : 6.00x
Forward EPS (BDT)            : 2.80
Forward P/E                  : 5.71x
Earnings yield               : 16.67%
CFO per share (BDT)          : 2.67
Cash conversion (CFO/NP)     : 100.00%
QUALITY-ADJUSTED P/E         : 6.00x
Accrual ratio (NP-CFO)/TA    : 0.00%
BVPS reported (BDT)          : 26.67
P/B reported                 : 0.60x
BVPS adjusted (BDT)          : 5.50
P/B ADJUSTED                 : 2.91x
Growth assumed               : 5.00%
PEG                          : 1.20
Enterprise value (BDT cr)    : 1,920.00
EV / EBITDA                  : n/a - not meaningful
Dividend yield               : 5.00%
Cash payout ratio            : 30.00%
Flags:
  - Provision shortfall is 79.4% of equity - book unreliable
  - Adjusted P/B is over twice reported P/B - the book is the problem
VERDICT: VALUE TRAP - a sub-book price that is a premium on honest book

Two companies, one headline P/E of 9.00x
Metric                        Pharma     Textile
------------------------------------------------
P/E trailing                   9.00x       9.00x
Cash conversion              116.67%      30.00%
Quality-adj P/E                7.71x      30.00x
P/B reported                   1.80x       1.35x
P/B adjusted                   1.80x       2.25x
PEG                             0.50        1.50
EV / EBITDA                    6.00x      10.00x
Dividend yield                 4.44%       3.33%
Cash payout ratio             34.29%     100.00%
\`\`\`

**তিনটি রায় একসঙ্গে পড়ুন।** ৯.০০ P/E-তে ওষুধ কোম্পানি শূন্যটি ফ্ল্যাগ তোলে। একই P/E-তে বস্ত্র কোম্পানি পাঁচটি তোলে। ব্যাংক দুটি তোলে, এবং এমন এক নিয়মে দণ্ডিত হয় যা অন্যরা কখনো স্পর্শ করে না: **প্রতিবেদিত বুকের নিচের যে দাম সমন্বিত বুকে প্রিমিয়াম হয়ে যায় তা সংজ্ঞা অনুসারেই একটি ফাঁদ, সে অন্য কতগুলো ঘর টিক দিল তা নির্বিশেষে।**

**লক্ষ করুন কোড ব্যাংকের EV/EBITDA নিয়ে কী করে: গণনা করতে অস্বীকার করে।** ঐ অস্বীকৃতিই মূল কথা। সেখানে যে প্রোগ্রাম একটি সংখ্যা ফেরত দিত তা কিছুই না দেওয়ার চেয়ে বেশি বিপজ্জনক হতো, কারণ সংখ্যাটি পাটিগাণিতিকভাবে বৈধ ও বিশ্লেষণগতভাবে শূন্য হতো। অধ্যায় ২৩ এই সতর্কতা দিয়েই শুরু হয়; ডেটাক্লাসটি তা সংকেতবদ্ধ করে।

**একবারে একটি ইনপুট বদলান।** বস্ত্র কোম্পানির \`cfo\` ১৭৫ করুন — নগদ রূপান্তর ওঠে ১১৬.৬৭%-এ, গুণমান-সমন্বিত P/E ভেঙে ৭.৭১×-এ নামে, এবং পাঁচটির তিনটি ফ্ল্যাগ নিভে যায় — কিন্তু পুনর্মূল্যায়ন ফ্ল্যাগ ও EV/EBITDA ফ্ল্যাগ টিকে থাকে, কারণ কোম্পানি কত ভালো আদায় করে তাতে বুক ও ঋণ অপ্রভাবিত। **এবার \`equity_deduction\`-ও ০ করুন:** সমন্বিত P/B নামে ১.৩৫×-এ এবং কেবল লিভারেজ ফ্ল্যাগটি থাকে। প্রতিটি ফ্ল্যাগ একটি ভিন্ন ত্রুটি পৃথক করে, আর একটি নিভলে অন্যটি কখনো নেভে না। **একটিমাত্র গুণকে স্ক্রিন করার বিরুদ্ধে এটিই সম্পূর্ণ যুক্তি।**`,
    },

    mistakes: {
      en: `1. **Screening on trailing P/E and stopping there.** A P/E of 9 on earnings that converted 30% into cash is a P/E of 30. The correction requires one line of the cash flow statement (Chapter 13) and takes fifteen seconds. It is the single highest-value habit in this chapter and almost nobody on the DSE has it.
2. **Treating a sub-book price as a discount.** P/B below 1.0 means the market disbelieves the stated equity. **The number is the market's conclusion, not your opportunity.** Reconstruct the book — revaluation surplus per Chapter 11, provision shortfall per Chapter 23 — before deciding whether the disbelief is excessive.
3. **Comparing a DSE multiple to a US or Indian multiple.** Different risk-free rates, different currency risk, different earnings quality, different index composition, different float. This is the Buffett Indicator error of Chapter 1 wearing a new label. **On a spread-to-sovereign basis an 11× DSE market is more expensive than a 22× US market.**
4. **Using forward P/E on a DSE scrip as if the estimate were independent.** Coverage is thin and forecasts frequently originate with the company. There is no consensus to average away bias. If you use a forward multiple, the growth number is yours and so is the error.
5. **Buying a cyclical at its lowest trailing P/E.** Cement, steel and shipping show their cheapest P/E at the cycle peak, because trailing earnings are at maximum and about to fall. **The moment a cyclical looks cheapest is frequently the moment to sell.** Use mid-cycle earnings or EV/EBITDA across a full cycle.
6. **Using P/E to compare companies with different leverage.** P/E is an equity multiple and is blind to the balance sheet. Our textile company has a smaller equity value than the pharma company but a larger enterprise value. **EV/EBITDA is the comparison; P/E is the distraction.** Chapter 17 explains why the equity slice gets thin.
7. **Applying EV/EBITDA to a bank or NBFI.** Debt is a bank's raw material and EBITDA is not a defined concept for one. The formula will produce a number. The number means nothing. Chapter 23 gives the correct framework.
8. **Trusting PEG because it looks rigorous.** PEG divides a ratio you can observe by a growth rate you invented. **A low PEG is your own optimism returned to you with a decimal point.** Use it only where you have modelled growth independently.
9. **Reading dividend yield without the cash payout ratio.** Our textile company yields 3.33% and pays out 100% of operating cash flow while carrying BDT 700 crore of debt. That is not income, it is a return of borrowed capital, and Chapter 20 shows how quickly such dividends are cut.
10. **Comparing a company's multiple only to its sector, never to its own history.** Sector medians move with sentiment. A company at 22× against its own ten-year median of 15× is expensive even if the sector median is 24×. **Your best comparator is the same company in a calmer year.**
11. **Forgetting that a low multiple can be correct.** Not every discount is an error and not every discount is a trap. Sometimes the market is right and the business really is worth less than book. **The chapter's discipline is to compute the adjusted multiple, not to assume the market is wrong in either direction.**`,
      bn: `১. **ট্রেইলিং P/E-তে স্ক্রিন করে সেখানেই থেমে যাওয়া।** যে আয়ের ৩০% নগদে রূপান্তরিত হয়েছে তার ওপর ৯ P/E আসলে ৩০ P/E। সংশোধনে নগদ প্রবাহ বিবরণীর একটি লাইন লাগে (অধ্যায় ১৩) ও পনেরো সেকেন্ড সময় লাগে। এই অধ্যায়ের একক সর্বোচ্চ-মূল্যের অভ্যাস এটি, আর ডিএসই-তে প্রায় কারো তা নেই।
২. **বুকের নিচের দামকে ছাড় ভাবা।** ১.০-এর নিচে P/B মানে বাজার ঘোষিত ইকুইটি অবিশ্বাস করে। **সংখ্যাটি বাজারের উপসংহার, আপনার সুযোগ নয়।** অবিশ্বাসটি অতিরিক্ত কি না ঠিক করার আগে বুক পুনর্গঠন করুন — অধ্যায় ১১ অনুসারে পুনর্মূল্যায়ন উদ্বৃত্ত, অধ্যায় ২৩ অনুসারে প্রভিশন ঘাটতি।
৩. **একটি ডিএসই গুণককে মার্কিন বা ভারতীয় গুণকের সঙ্গে তুলনা করা।** ভিন্ন ঝুঁকিমুক্ত হার, ভিন্ন মুদ্রা ঝুঁকি, ভিন্ন আয়ের গুণমান, ভিন্ন সূচক গঠন, ভিন্ন ফ্লোট। এটি নতুন লেবেল পরা অধ্যায় ১-এর বাফেট নির্দেশক ভুল। **সার্বভৌম হারের সঙ্গে ব্যবধানের ভিত্তিতে ১১× ডিএসই বাজার ২২× মার্কিন বাজারের চেয়ে ব্যয়বহুল।**
৪. **ডিএসই স্ক্রিপে ফরওয়ার্ড P/E এমনভাবে ব্যবহার করা যেন প্রাক্কলনটি স্বাধীন।** কভারেজ পাতলা এবং পূর্বাভাস প্রায়ই কোম্পানি থেকেই আসে। পক্ষপাত গড় করে সরানোর মতো কোনো ঐকমত্য নেই। ফরওয়ার্ড গুণক ব্যবহার করলে প্রবৃদ্ধির সংখ্যাটি আপনার এবং ভুলটিও আপনার।
৫. **সবচেয়ে কম ট্রেইলিং P/E-তে একটি চক্রীয় কোম্পানি কেনা।** সিমেন্ট, ইস্পাত ও জাহাজ চক্রের চূড়ায় সবচেয়ে সস্তা P/E দেখায়, কারণ ট্রেইলিং আয় সর্বোচ্চে ও পড়তে চলেছে। **একটি চক্রীয় কোম্পানিকে যে মুহূর্তে সবচেয়ে সস্তা দেখায় সেটিই প্রায়ই বিক্রির মুহূর্ত।** মধ্য-চক্রের আয় বা পুরো চক্রজুড়ে EV/EBITDA ব্যবহার করুন।
৬. **ভিন্ন লিভারেজের কোম্পানি তুলনা করতে P/E ব্যবহার করা।** P/E একটি ইকুইটি গুণক এবং স্থিতিপত্রের প্রতি অন্ধ। আমাদের বস্ত্র কোম্পানির ইকুইটি মূল্য ওষুধ কোম্পানির চেয়ে ছোট কিন্তু এন্টারপ্রাইজ ভ্যালু বড়। **EV/EBITDA-ই তুলনা; P/E মনোযোগ সরানো।** ইকুইটির টুকরো কেন পাতলা হয় অধ্যায় ১৭ তা ব্যাখ্যা করে।
৭. **ব্যাংক বা এনবিএফআই-তে EV/EBITDA প্রয়োগ করা।** ঋণ ব্যাংকের কাঁচামাল এবং EBITDA তার জন্য সংজ্ঞায়িত ধারণা নয়। সূত্রটি একটি সংখ্যা দেবে। সংখ্যাটির কোনো অর্থ নেই। অধ্যায় ২৩ সঠিক কাঠামো দেয়।
৮. **PEG-কে বিশ্বাস করা কারণ তা কঠোর দেখায়।** PEG আপনার পর্যবেক্ষণযোগ্য একটি অনুপাতকে আপনার উদ্ভাবিত একটি প্রবৃদ্ধির হার দিয়ে ভাগ করে। **নিম্ন PEG হলো দশমিক বিন্দুসহ আপনাকে ফেরত দেওয়া আপনারই আশাবাদ।** কেবল সেখানেই ব্যবহার করুন যেখানে আপনি প্রবৃদ্ধি স্বাধীনভাবে মডেল করেছেন।
৯. **নগদ পরিশোধ অনুপাত ছাড়া লভ্যাংশ ইল্ড পড়া।** আমাদের বস্ত্র কোম্পানি ৩.৩৩% দেয় এবং ৭০০ কোটি টাকা ঋণ বহন করেও পরিচালন নগদ প্রবাহের ১০০% বিতরণ করে। এটি আয় নয়, ধার করা মূলধনের ফেরত, আর অধ্যায় ২০ দেখায় এ ধরনের লভ্যাংশ কত দ্রুত কাটা হয়।
১০. **কোম্পানির গুণক কেবল তার খাতের সঙ্গে তুলনা করা, কখনো নিজের ইতিহাসের সঙ্গে নয়।** খাতের মধ্যক আবেগের সঙ্গে সরে। নিজের দশ বছরের মধ্যক ১৫×-এর বিপরীতে ২২×-এ থাকা কোম্পানি ব্যয়বহুল, খাতের মধ্যক ২৪× হলেও। **আপনার সেরা তুলনীয় হলো শান্ত একটি বছরের একই কোম্পানি।**
১১. **ভুলে যাওয়া যে একটি নিম্ন গুণক সঠিকও হতে পারে।** প্রতিটি ছাড় ভুল নয় এবং প্রতিটি ছাড় ফাঁদও নয়। কখনো বাজারই ঠিক এবং ব্যবসাটি সত্যিই বুকের চেয়ে কম মূল্যের। **অধ্যায়ের শৃঙ্খলা হলো সমন্বিত গুণক গণনা করা, কোনো দিকেই বাজার ভুল ধরে নেওয়া নয়।**`,
    },

    tips: {
      en: `- **Never quote a P/E without quoting cash conversion beside it.** Two numbers, always together: "9.0× headline, 30.0× on cash." Once you write multiples this way you cannot un-see the gap, and you will never again buy a low-P/E accrual machine.
- **Compute the two understatement factors for every holding.** $U_{P/E}$ and $U_{P/B}$. Sort your portfolio by them descending. The names at the top are the ones whose cheapness is manufactured — and in a market that screens on trailing P/E, those are exactly the names attracting the most retail buying.
- **Read the equity note before the P/B.** Find the revaluation reserve line. If it exceeds 20% of equity, the reported P/B is describing a valuer's opinion about land, not the price of a business. Chapter 11 tells you where the note sits.
- **For any bank, publish your assumed loss rate next to your P/B.** "0.6× book" is not an analytical statement. "0.6× reported book, 2.91× adjusted book at a 40% loss rate on a reconstructed stressed pool of BDT 11,300 crore" is. Chapter 23 supplies the reconstruction.
- **Build a ten-year multiple history for anything you hold.** A company's own median P/E and P/B are the only benchmarks that control for sector, country, governance and float simultaneously. Everything else compares apples to a different orchard.
- **Use EV/EBITDA whenever leverage differs, and never when the company is a bank.** Those two rules together cover most of the DSE.
- **Check the free float before believing a high multiple.** Several MNC subsidiaries trade at 30–50× on tiny floats. That multiple is a fact about supply, not about the business, and it will not protect you when the float changes.
- **Treat a multiple that fell without a price fall as an accounting event.** If P/B improved and the share price did not move, equity grew — and equity grows by retained profit, by issuance, or by revaluation. Establish which. Only one of the three is good news.
- **When a company looks cheap, write one sentence naming what the market is worried about.** If you cannot write the sentence, you have not found a bargain — you have found something you do not understand yet. **On the DSE the market is usually worried about something specific, and it is usually in the notes.**`,
      bn: `- **নগদ রূপান্তর পাশে না লিখে কখনো P/E উদ্ধৃত করবেন না।** দুটি সংখ্যা, সর্বদা একসঙ্গে: "শিরোনামে ৯.০×, নগদে ৩০.০×।" একবার এভাবে গুণক লিখলে আপনি আর ফাঁকটি না-দেখা করতে পারবেন না, এবং আর কখনো নিম্ন-P/E-র অ্যাক্রুয়াল যন্ত্র কিনবেন না।
- **প্রতিটি হোল্ডিংয়ের জন্য দুটি কম-দেখানোর গুণাঙ্ক গণনা করুন।** $U_{P/E}$ ও $U_{P/B}$। এ অনুযায়ী পোর্টফোলিও অবরোহী ক্রমে সাজান। শীর্ষের নামগুলোর সস্তা হওয়া তৈরি করা — আর যে বাজার ট্রেইলিং P/E-তে স্ক্রিন করে, সেখানে ঠিক ঐ নামগুলোই সবচেয়ে বেশি খুচরা ক্রয় টানে।
- **P/B-র আগে ইকুইটি নোট পড়ুন।** পুনর্মূল্যায়ন সঞ্চিতির লাইনটি খুঁজুন। এটি ইকুইটির ২০% ছাড়ালে প্রতিবেদিত P/B একটি ব্যবসার দাম নয়, জমি নিয়ে একজন মূল্যায়নকারীর মতামত বর্ণনা করছে। নোটটি কোথায় বসে অধ্যায় ১১ বলে দেয়।
- **যেকোনো ব্যাংকের জন্য P/B-র পাশে আপনার অনুমিত ক্ষতির হার প্রকাশ করুন।** "০.৬× বুক" কোনো বিশ্লেষণী বক্তব্য নয়। "প্রতিবেদিত বুকে ০.৬×, ১১,৩০০ কোটি টাকার পুনর্গঠিত চাপগ্রস্ত পুলে ৪০% ক্ষতির হারে সমন্বিত বুকে ২.৯১×" — এটি বক্তব্য। পুনর্গঠনটি অধ্যায় ২৩ সরবরাহ করে।
- **আপনার ধারণ করা যেকোনো কিছুর জন্য দশ বছরের গুণক ইতিহাস তৈরি করুন।** একটি কোম্পানির নিজস্ব মধ্যক P/E ও P/B-ই একমাত্র মানদণ্ড যা একই সঙ্গে খাত, দেশ, সুশাসন ও ফ্লোট নিয়ন্ত্রণ করে। বাকি সব আপেলকে ভিন্ন এক বাগানের সঙ্গে তুলনা করে।
- **লিভারেজ ভিন্ন হলেই EV/EBITDA ব্যবহার করুন, আর কোম্পানিটি ব্যাংক হলে কখনো নয়।** এই দুই নিয়ম একসঙ্গে ডিএসই-র অধিকাংশ ঢেকে ফেলে।
- **উচ্চ গুণক বিশ্বাস করার আগে ফ্রি ফ্লোট যাচাই করুন।** কয়েকটি এমএনসি সহযোগী ক্ষুদ্র ফ্লোটে ৩০–৫০×-এ লেনদেন হয়। ঐ গুণক সরবরাহ সম্পর্কে একটি তথ্য, ব্যবসা সম্পর্কে নয়, এবং ফ্লোট বদলালে তা আপনাকে রক্ষা করবে না।
- **দাম না পড়েও যে গুণক কমেছে তাকে একটি হিসাবরক্ষণ ঘটনা ধরুন।** P/B উন্নত হয়েছে অথচ শেয়ারের দাম নড়েনি মানে ইকুইটি বেড়েছে — আর ইকুইটি বাড়ে সংরক্ষিত মুনাফায়, ইস্যুতে, বা পুনর্মূল্যায়নে। কোনটি তা নির্ধারণ করুন। তিনটির কেবল একটিই সুসংবাদ।
- **কোনো কোম্পানিকে সস্তা দেখালে এক বাক্যে লিখুন বাজার কী নিয়ে উদ্বিগ্ন।** বাক্যটি লিখতে না পারলে আপনি সুযোগ পাননি — আপনি এমন কিছু পেয়েছেন যা এখনো বোঝেননি। **ডিএসই-তে বাজার সাধারণত সুনির্দিষ্ট কিছু নিয়ে উদ্বিগ্ন থাকে, আর তা সাধারণত নোটেই থাকে।**`,
    },

    exercises: {
      en: `1. Screen the DSE for the twenty lowest trailing P/E companies. For each, pull net profit and cash from operations from the latest annual report and compute the quality-adjusted P/E. Rank the list again. Report how many names remain in the bottom quartile after the correction, and name the largest single mover.
2. Take any DSE-listed textile, jute, or older manufacturing company. Find the revaluation reserve in the statement of changes in equity. Compute P/B as reported and P/B excluding revaluation surplus. State the understatement factor. If it exceeds 1.5×, write one paragraph on what the reported ratio was concealing.
3. Choose a DSE-listed bank trading below book. Using Chapter 23's method, reconstruct stressed assets from reported NPL plus rescheduled, written-off and enjoined loans disclosed in the notes. Build the adjusted P/B at loss rates of 20%, 30%, 40% and 50%. State the loss rate at which the shares stop being cheap.
4. For the same bank, compute the reported P/E. Then state, in three sentences, why that P/E is computed on a number your own work in exercise 3 has already established is overstated.
5. Take one DSE cement or steel company and pull ten years of EPS. Compute the trailing P/E at each year-end. Identify the year with the lowest P/E and check what the share price did over the following twenty-four months. Explain the result using the concept of cyclical earnings inversion.
6. Pick two companies in the same DSE sector with materially different debt levels. Compute P/E and EV/EBITDA for both. Explain in five sentences why the rankings differ and which ranking you would act on.
7. Compute the current DSE broad-market P/E and the prevailing Bangladesh government 10-year treasury yield. Express the market P/E as an earnings yield and compute the spread over the sovereign. Now do the same for the S&P 500 and the US 10-year. State which market offers the better spread and why the raw P/E comparison points the other way.
8. For any three companies you hold, compute dividend yield and cash payout ratio. Flag any where the cash payout exceeds 90%. For each flagged name, check whether debt increased during the same year, and state whether the dividend was earned or financed.
9. Build a ten-year history of P/E and P/B for one DSE pharma company. Compute the median of each. State whether the company is currently above or below its own median, by how much, and what changed in the business to justify the move — or whether nothing did.`,
      bn: `১. ডিএসই-তে সর্বনিম্ন ট্রেইলিং P/E-র বিশটি কোম্পানি স্ক্রিন করুন। প্রত্যেকের জন্য সাম্প্রতিকতম বার্ষিক প্রতিবেদন থেকে নিট মুনাফা ও পরিচালন নগদ প্রবাহ নিয়ে গুণমান-সমন্বিত P/E গণনা করুন। তালিকাটি আবার সাজান। সংশোধনের পর কতগুলো নাম নিম্নতম চতুর্থাংশে টিকে থাকে তা জানান, এবং সবচেয়ে বড় একক স্থানান্তরকারীর নাম বলুন।
২. যেকোনো ডিএসই-তালিকাভুক্ত বস্ত্র, পাট বা পুরোনো উৎপাদন কোম্পানি নিন। ইকুইটি পরিবর্তনের বিবরণীতে পুনর্মূল্যায়ন সঞ্চিতি খুঁজুন। প্রকাশিত অনুযায়ী P/B এবং পুনর্মূল্যায়ন উদ্বৃত্ত বাদ দিয়ে P/B গণনা করুন। কম দেখানোর গুণাঙ্ক বলুন। ১.৫× ছাড়ালে প্রতিবেদিত অনুপাতটি কী আড়াল করছিল তা নিয়ে এক অনুচ্ছেদ লিখুন।
৩. বুকের নিচে লেনদেন হওয়া একটি ডিএসই-তালিকাভুক্ত ব্যাংক বাছুন। অধ্যায় ২৩-এর পদ্ধতিতে প্রতিবেদিত NPL-এর সঙ্গে নোটে প্রকাশিত পুনঃতফসিলকৃত, অবলোপনকৃত ও নিষেধাজ্ঞাধীন ঋণ যোগ করে চাপগ্রস্ত সম্পদ পুনর্গঠন করুন। ২০%, ৩০%, ৪০% ও ৫০% ক্ষতির হারে সমন্বিত P/B তৈরি করুন। কোন ক্ষতির হারে শেয়ারটি আর সস্তা থাকে না তা বলুন।
৪. একই ব্যাংকের জন্য প্রতিবেদিত P/E গণনা করুন। তারপর তিন বাক্যে বলুন কেন ঐ P/E এমন এক সংখ্যার ওপর গণিত যাকে ৩ নং অনুশীলনে আপনার নিজের কাজ ইতিমধ্যেই বাড়িয়ে দেখানো প্রতিষ্ঠা করেছে।
৫. একটি ডিএসই সিমেন্ট বা ইস্পাত কোম্পানি নিয়ে দশ বছরের EPS বের করুন। প্রতিটি বছরের শেষে ট্রেইলিং P/E গণনা করুন। সর্বনিম্ন P/E-র বছরটি চিহ্নিত করুন এবং পরবর্তী চব্বিশ মাসে শেয়ারের দামে কী হয়েছিল দেখুন। চক্রীয় আয় উল্টে যাওয়ার ধারণা দিয়ে ফলাফলটি ব্যাখ্যা করুন।
৬. একই ডিএসই খাতের এমন দুটি কোম্পানি বাছুন যাদের ঋণের মাত্রা উল্লেখযোগ্যভাবে ভিন্ন। দুটিরই P/E ও EV/EBITDA গণনা করুন। পাঁচ বাক্যে ব্যাখ্যা করুন কেন ক্রম ভিন্ন হয় এবং কোন ক্রম অনুযায়ী আপনি কাজ করতেন।
৭. ডিএসই-র বর্তমান বিস্তৃত-বাজার P/E এবং প্রচলিত বাংলাদেশ সরকারের ১০ বছরের ট্রেজারি ইল্ড গণনা করুন। বাজার P/E-কে আয় ইল্ড হিসেবে প্রকাশ করে সার্বভৌমের ওপর ব্যবধান বের করুন। এবার এসঅ্যান্ডপি ৫০০ ও মার্কিন ১০ বছরের জন্য একই কাজ করুন। কোন বাজার ভালো ব্যবধান দেয় এবং কাঁচা P/E তুলনা কেন উল্টো দিক নির্দেশ করে তা বলুন।
৮. আপনার ধারণ করা যেকোনো তিনটি কোম্পানির লভ্যাংশ ইল্ড ও নগদ পরিশোধ অনুপাত গণনা করুন। নগদ পরিশোধ ৯০% ছাড়ালে চিহ্নিত করুন। প্রতিটি চিহ্নিত নামের জন্য ঐ একই বছরে ঋণ বেড়েছে কি না দেখুন, এবং লভ্যাংশটি অর্জিত না অর্থায়িত তা বলুন।
৯. একটি ডিএসই ওষুধ কোম্পানির P/E ও P/B-র দশ বছরের ইতিহাস তৈরি করুন। প্রত্যেকটির মধ্যক গণনা করুন। কোম্পানিটি বর্তমানে নিজের মধ্যকের ওপরে না নিচে, কতটা, এবং ঐ পরিবর্তনকে ন্যায্যতা দিতে ব্যবসায় কী বদলেছে — নাকি কিছুই বদলায়নি — তা বলুন।`,
    },

    summary: {
      en: `- A valuation multiple is a fraction with an observable numerator and an accounting denominator. **Every error in this chapter comes from forgetting that asymmetry.**
- **P/E is meaningless without earnings quality.** Restate it on cash: $\\text{P/E}_{quality} = \\text{P/E} / \\kappa = \\text{Price} / \\text{CFO per share}$. Our two worked companies both print 9.00×; on cash they are 7.71× and **30.00×**. A P/E of 9 on accrual-driven earnings is not cheap — it is a P/E of 30 wearing a disguise supplied by the income statement (Chapter 13).
- **P/B is meaningless when book value is unreliable.** Remove revaluation surplus (Chapter 11) and any provision shortfall (Chapter 23). The textile company moves from 1.35× to 2.25× — from cheaper than the pharma comparator to 25% more expensive.
- **A DSE bank at P/B 0.6 is not a mispricing; it is the market pricing the adjusted book.** On Chapter 23's reconstruction, 0.60× reported book is **2.91× adjusted book** — an understatement factor of 4.85×. The discount is the answer to a calculation, not an invitation to one.
- P/E is an equity multiple and is blind to leverage. Our textile company has the smaller equity value and the larger enterprise value: 6.00× versus 10.00× on EV/EBITDA. **Use EV/EBITDA whenever leverage differs — and never for a bank, where debt is raw material and EBITDA is undefined.**
- PEG divides an observable ratio by an invented growth rate. On the DSE that rate is usually the company's own. **A low PEG is your optimism handed back with a decimal point.**
- Earnings yield adds nothing that P/E did not say — both our companies yield 11.11% — until it is set against the sovereign. At 11.11% versus an 11–12% treasury, neither clears the hurdle on reported earnings.
- Multiple ranges are sector-specific. Pharma at 12–20×, banks at 5–10×, MNC food at 25–50× on **float scarcity rather than quality**. A cyclical shows its lowest P/E at the cycle peak, which is when it should be sold.
- Comparing a DSE multiple to a US multiple repeats the Buffett Indicator error of Chapter 1: different risk-free rates, currencies, earnings quality, index composition and float. **On a spread-to-sovereign basis the 11× market is the expensive one.**
- **Discipline established:** never quote a multiple without stating what you did to its denominator. Publish the two understatement factors — $U_{P/E}$ and $U_{P/B}$ — beside every claim that something is cheap. If you cannot write one sentence naming what the market is worried about, you have not found a bargain. You have found an unexamined number, and on this exchange those are plentiful and expensive.`,
      bn: `- একটি মূল্যায়ন গুণক এমন এক ভগ্নাংশ যার লব পর্যবেক্ষণযোগ্য ও হর হিসাবরক্ষণভিত্তিক। **এই অধ্যায়ের প্রতিটি ভুল ঐ অসমতা ভুলে যাওয়া থেকে আসে।**
- **আয়ের গুণমান ছাড়া P/E অর্থহীন।** নগদের ভিত্তিতে পুনর্গঠন করুন: $\\text{P/E}_{quality} = \\text{P/E} / \\kappa = \\text{Price} / \\text{CFO per share}$। আমাদের দুটি কার্যকৃত কোম্পানিই ৯.০০× ছাপে; নগদে তারা ৭.৭১× ও **৩০.০০×**। অ্যাক্রুয়াল-চালিত আয়ের ওপর ৯ P/E সস্তা নয় — এটি আয় বিবরণীর দেওয়া ছদ্মবেশ পরা ৩০ P/E (অধ্যায় ১৩)।
- **বুক ভ্যালু অনির্ভরযোগ্য হলে P/B অর্থহীন।** পুনর্মূল্যায়ন উদ্বৃত্ত (অধ্যায় ১১) ও যেকোনো প্রভিশন ঘাটতি (অধ্যায় ২৩) সরান। বস্ত্র কোম্পানি ১.৩৫× থেকে ২.২৫×-এ যায় — ওষুধ তুলনীয়টির চেয়ে সস্তা থেকে ২৫% বেশি ব্যয়বহুলে।
- **০.৬ P/B-তে একটি ডিএসই ব্যাংক ভুল মূল্যায়ন নয়; এটি বাজারের সমন্বিত বুকের দাম দেওয়া।** অধ্যায় ২৩-এর পুনর্গঠনে প্রতিবেদিত বুকে ০.৬০× আসলে **সমন্বিত বুকে ২.৯১×** — কম দেখানোর গুণাঙ্ক ৪.৮৫×। ছাড়টি একটি গণনার উত্তর, গণনার আমন্ত্রণ নয়।
- P/E একটি ইকুইটি গুণক এবং লিভারেজের প্রতি অন্ধ। আমাদের বস্ত্র কোম্পানির ইকুইটি মূল্য ছোট এবং এন্টারপ্রাইজ ভ্যালু বড়: EV/EBITDA-তে ৬.০০× বনাম ১০.০০×। **লিভারেজ ভিন্ন হলেই EV/EBITDA ব্যবহার করুন — আর ব্যাংকের জন্য কখনো নয়, যেখানে ঋণ কাঁচামাল ও EBITDA অসংজ্ঞায়িত।**
- PEG একটি পর্যবেক্ষণযোগ্য অনুপাতকে একটি উদ্ভাবিত প্রবৃদ্ধির হার দিয়ে ভাগ করে। ডিএসই-তে ঐ হার সাধারণত কোম্পানিরই নিজের। **নিম্ন PEG হলো দশমিক বিন্দুসহ ফেরত দেওয়া আপনার আশাবাদ।**
- আয় ইল্ড P/E যা বলেনি তার বাইরে কিছু যোগ করে না — আমাদের দুটি কোম্পানিই ১১.১১% দেয় — যতক্ষণ না তা সার্বভৌমের বিপরীতে বসানো হয়। ১১–১২% ট্রেজারির বিপরীতে ১১.১১%-এ প্রতিবেদিত আয়ে কোনোটিই বাধা অতিক্রম করে না।
- গুণকের পরিসর খাতনির্দিষ্ট। ওষুধ ১২–২০×, ব্যাংক ৫–১০×, এমএনসি খাদ্য ২৫–৫০× — **গুণমানে নয়, ফ্লোটের স্বল্পতায়**। একটি চক্রীয় কোম্পানি চক্রের চূড়ায় সর্বনিম্ন P/E দেখায়, যখন তা বিক্রি করা উচিত।
- একটি ডিএসই গুণককে মার্কিন গুণকের সঙ্গে তুলনা করা অধ্যায় ১-এর বাফেট নির্দেশক ভুলের পুনরাবৃত্তি: ভিন্ন ঝুঁকিমুক্ত হার, মুদ্রা, আয়ের গুণমান, সূচক গঠন ও ফ্লোট। **সার্বভৌমের সঙ্গে ব্যবধানের ভিত্তিতে ১১× বাজারটিই ব্যয়বহুল।**
- **প্রতিষ্ঠিত শৃঙ্খলা:** হরের সঙ্গে আপনি কী করেছেন তা না বলে কখনো কোনো গুণক উদ্ধৃত করবেন না। কোনো কিছু সস্তা — এই দাবির পাশে দুটি কম-দেখানোর গুণাঙ্ক প্রকাশ করুন: $U_{P/E}$ ও $U_{P/B}$। বাজার কী নিয়ে উদ্বিগ্ন তা নাম ধরে এক বাক্যে লিখতে না পারলে আপনি সুযোগ পাননি। আপনি একটি অপরীক্ষিত সংখ্যা পেয়েছেন, আর এই এক্সচেঞ্জে সেগুলো প্রচুর এবং ব্যয়বহুল।`,
    },
  },

  interview: [
    {
      q: {
        en: 'Two DSE companies both trade at a P/E of 9. One converts 116% of profit into operating cash, the other 30%. How do you compare them?',
        bn: 'দুটি ডিএসই কোম্পানিই ৯ P/E-তে লেনদেন হয়। একটি মুনাফার ১১৬% পরিচালন নগদে রূপান্তর করে, অন্যটি ৩০%। আপনি কীভাবে তুলনা করবেন?',
      },
      a: {
        en: 'Restate both multiples on cash. Quality-adjusted P/E is the headline P/E divided by cash conversion, which is identical to price divided by operating cash flow per share. The first company is at 9.00/1.1667 = 7.71×; the second is at 9.00/0.30 = 30.00×. They are not the same investment at all — the understatement factor on the second is 3.33×. The second company has booked profit it has not collected, so 70% of the denominator of its P/E is an estimate rather than a receipt. This is Chapter 13 applied to valuation: a P/E of 9 on accrual-driven earnings is not cheap, and the only place the difference is visible is the cash flow statement.',
        bn: 'দুটি গুণকই নগদের ভিত্তিতে পুনর্গঠন করুন। গুণমান-সমন্বিত P/E হলো শিরোনাম P/E ভাগ নগদ রূপান্তর, যা দাম ভাগ শেয়ারপ্রতি পরিচালন নগদ প্রবাহের অভিন্ন। প্রথম কোম্পানি ৯.০০/১.১৬৬৭ = ৭.৭১×; দ্বিতীয়টি ৯.০০/০.৩০ = ৩০.০০×। এরা মোটেও এক বিনিয়োগ নয় — দ্বিতীয়টির কম দেখানোর গুণাঙ্ক ৩.৩৩×। দ্বিতীয় কোম্পানি এমন মুনাফা লিখেছে যা আদায় করেনি, তাই তার P/E-র হরের ৭০% প্রাপ্তি নয়, প্রাক্কলন। এটি মূল্যায়নে প্রয়োগ করা অধ্যায় ১৩: অ্যাক্রুয়াল-চালিত আয়ের ওপর ৯ P/E সস্তা নয়, আর পার্থক্যটি কেবল নগদ প্রবাহ বিবরণীতেই দৃশ্যমান।',
      },
    },
    {
      q: {
        en: 'A DSE bank trades at 0.6 times book. Is that a buying opportunity?',
        bn: 'একটি ডিএসই ব্যাংক বুকের ০.৬ গুণে লেনদেন হয়। এটি কি কেনার সুযোগ?',
      },
      a: {
        en: 'Not on that fact alone, and usually not at all. A P/B below 1.0 means the market disbelieves the stated equity, and for Bangladeshi banks it has a specific reason to. Reported NPL excludes rescheduled loans, written-off loans and loans under court injunction. Reconstructing the stressed book on the Chapter 23 example gives BDT 11,300 crore of stressed assets against reported loans of 45,000, and honest provisioning at a 40% loss rate consumes 2,540 crore of a 3,200 crore equity base. Adjusted NAV falls from BDT 26.67 to BDT 5.50 and the 0.60× becomes 2.91×. So the discount is the market pricing the adjusted book, not offering a discount to it. The genuine analytical question is whether the implied loss rate is too harsh — at 20% the shares really are cheap, at 50% the equity is gone — and you must publish that assumption alongside any conclusion.',
        bn: 'কেবল ঐ তথ্যের ভিত্তিতে নয়, এবং সাধারণত আদৌ নয়। ১.০-এর নিচে P/B মানে বাজার ঘোষিত ইকুইটি অবিশ্বাস করে, আর বাংলাদেশি ব্যাংকের ক্ষেত্রে তার সুনির্দিষ্ট কারণ আছে। প্রতিবেদিত NPL পুনঃতফসিলকৃত, অবলোপনকৃত ও আদালতের নিষেধাজ্ঞাধীন ঋণ বাদ দেয়। অধ্যায় ২৩-এর উদাহরণে চাপগ্রস্ত খাতা পুনর্গঠন করলে ৪৫,০০০ প্রতিবেদিত ঋণের বিপরীতে ১১,৩০০ কোটি টাকা চাপগ্রস্ত সম্পদ পাওয়া যায়, আর ৪০% ক্ষতির হারে সৎ প্রভিশনিং ৩,২০০ কোটি ইকুইটির ২,৫৪০ কোটি খেয়ে ফেলে। সমন্বিত NAV ২৬.৬৭ টাকা থেকে ৫.৫০ টাকায় নামে এবং ০.৬০× হয়ে যায় ২.৯১×। অর্থাৎ ছাড়টি বাজারের সমন্বিত বুকের দাম দেওয়া, তার ওপর ছাড় দেওয়া নয়। প্রকৃত বিশ্লেষণী প্রশ্ন হলো অন্তর্নিহিত ক্ষতির হার অতি কঠোর কি না — ২০%-এ শেয়ারটি সত্যিই সস্তা, ৫০%-এ ইকুইটি শেষ — এবং যেকোনো উপসংহারের পাশে ঐ অনুমানটি প্রকাশ করতে হবে।',
      },
    },
    {
      q: {
        en: 'Why should a Bangladeshi analyst compute price-to-book twice?',
        bn: 'একজন বাংলাদেশি বিশ্লেষকের কেন মূল্য-থেকে-বুক দুইবার গণনা করা উচিত?',
      },
      a: {
        en: 'Because equity on a Bangladeshi balance sheet routinely contains a revaluation reserve on land and buildings, as Chapter 11 established. That reserve is not retained profit, was never contributed by shareholders, and represents no cash — it is a valuer opinion, often commissioned by the company. Revaluing land upward inflates equity and mechanically lowers P/B with nothing changing in the business. The second computation removes revaluation surplus from the denominator. In the chapter example, a textile company at 1.35× reported book is at 2.25× once a reserve worth 40% of equity is stripped out — reversing its ranking against a pharma comparator at 1.80×. For banks the same second computation removes the provision shortfall instead.',
        bn: 'কারণ অধ্যায় ১১ যেমন প্রতিষ্ঠা করেছে, বাংলাদেশি স্থিতিপত্রে ইকুইটিতে নিয়মিতভাবে জমি ও ভবনের পুনর্মূল্যায়ন সঞ্চিতি থাকে। ঐ সঞ্চিতি সংরক্ষিত মুনাফা নয়, শেয়ারহোল্ডাররা কখনো দেননি, এবং কোনো নগদের প্রতিনিধিত্ব করে না — এটি একজন মূল্যায়নকারীর মতামত, প্রায়ই কোম্পানিরই ফরমায়েশে। জমির ঊর্ধ্বমুখী পুনর্মূল্যায়ন ইকুইটি স্ফীত করে এবং ব্যবসায় কিছু না বদলেই যান্ত্রিকভাবে P/B কমায়। দ্বিতীয় গণনাটি হর থেকে পুনর্মূল্যায়ন উদ্বৃত্ত সরায়। অধ্যায়ের উদাহরণে প্রতিবেদিত বুকে ১.৩৫×-এর একটি বস্ত্র কোম্পানি ইকুইটির ৪০% মূল্যের সঞ্চিতি সরানোর পর ২.২৫×-এ দাঁড়ায় — ১.৮০×-এর ওষুধ তুলনীয়টির বিপরীতে তার ক্রম উল্টে দেয়। ব্যাংকের ক্ষেত্রে একই দ্বিতীয় গণনা বরং প্রভিশন ঘাটতি সরায়।',
      },
    },
    {
      q: {
        en: 'The DSE trades at 11 times earnings and the S&P 500 at 22 times. Is Bangladesh cheap?',
        bn: 'ডিএসই ১১ গুণ আয়ে এবং এসঅ্যান্ডপি ৫০০ ২২ গুণে লেনদেন হয়। বাংলাদেশ কি সস্তা?',
      },
      a: {
        en: 'No, and the comparison is the same category error Chapter 1 identified in the Buffett Indicator. Start with the risk-free rate: an 11× P/E is a 9.1% earnings yield against a Bangladeshi treasury yield of 11 to 12%, so the equity yields less than the sovereign. A 22× P/E is a 4.5% earnings yield against a 4% US ten-year, so it clears the hurdle. On a spread-to-sovereign basis the expensive-looking market is the cheaper one. Beyond that, taka earnings carry depreciation risk that dollar earnings do not; DSE earnings quality is more variable, so the two denominators are not equally reliable; index composition differs, with a bank and levered manufacturer heavy index deserving a lower multiple; and concentrated sponsor ownership and thin floats justify a structural discount. The correct comparison is within a market, within a sector, and preferably against the company own history.',
        bn: 'না, এবং তুলনাটি সেই একই শ্রেণিগত ভুল যা অধ্যায় ১ বাফেট নির্দেশকে চিহ্নিত করেছে। ঝুঁকিমুক্ত হার দিয়ে শুরু করুন: ১১× P/E মানে ৯.১% আয় ইল্ড, আর বাংলাদেশি ট্রেজারি ইল্ড ১১ থেকে ১২%, অর্থাৎ ইকুইটি সার্বভৌমের চেয়ে কম দেয়। ২২× P/E মানে ৪.৫% আয় ইল্ড, আর মার্কিন দশ বছর ৪%, অর্থাৎ তা বাধা অতিক্রম করে। সার্বভৌমের সঙ্গে ব্যবধানের ভিত্তিতে ব্যয়বহুল দেখানো বাজারটিই সস্তা। এর বাইরে, টাকার আয় এমন অবমূল্যায়ন ঝুঁকি বহন করে যা ডলারের আয় করে না; ডিএসই-র আয়ের গুণমান বেশি পরিবর্তনশীল, তাই দুটি হর সমানভাবে নির্ভরযোগ্য নয়; সূচক গঠন ভিন্ন, আর ব্যাংক ও লিভারেজড উৎপাদকে ভারী সূচকের কম গুণকই প্রাপ্য; এবং কেন্দ্রীভূত উদ্যোক্তা মালিকানা ও পাতলা ফ্লোট একটি কাঠামোগত ছাড়কে ন্যায্যতা দেয়। সঠিক তুলনা একই বাজারের ভেতরে, একই খাতের ভেতরে, এবং বিশেষত কোম্পানির নিজের ইতিহাসের বিপরীতে।',
      },
    },
    {
      q: {
        en: 'When would you use EV/EBITDA instead of P/E, and when must you not use it at all?',
        bn: 'কখন আপনি P/E-র বদলে EV/EBITDA ব্যবহার করবেন, আর কখন আদৌ ব্যবহার করা যাবে না?',
      },
      a: {
        en: 'Use it whenever the companies being compared have materially different leverage, because P/E is an equity multiple and is blind to the balance sheet. In the chapter example the textile company has a smaller equity value than the pharma company, 1,350 against 1,620 crore, but a larger enterprise value, 2,000 against 1,470, because it carries 700 crore of debt against the pharma company net cash. On P/E they look identical at 9.00×; on EV/EBITDA they are 10.00× and 6.00×. The cheap-looking equity is a thin residual claim on an expensively valued enterprise. Never use it for a bank or an NBFI: debt is a bank raw material rather than a financing choice, and EBITDA is not a defined concept for one. The formula will still return a number, and that is precisely the danger — it is arithmetically computable and analytically void.',
        bn: 'যখনই তুলনীয় কোম্পানিগুলোর লিভারেজ উল্লেখযোগ্যভাবে ভিন্ন, কারণ P/E একটি ইকুইটি গুণক এবং স্থিতিপত্রের প্রতি অন্ধ। অধ্যায়ের উদাহরণে বস্ত্র কোম্পানির ইকুইটি মূল্য ওষুধ কোম্পানির চেয়ে ছোট, ১,৩৫০ বনাম ১,৬২০ কোটি, কিন্তু এন্টারপ্রাইজ ভ্যালু বড়, ২,০০০ বনাম ১,৪৭০, কারণ ওষুধ কোম্পানির নিট নগদের বিপরীতে সে ৭০০ কোটি ঋণ বহন করে। P/E-তে দুটিকে অভিন্ন ৯.০০× দেখায়; EV/EBITDA-তে তারা ১০.০০× ও ৬.০০×। সস্তা দেখানো ইকুইটিটি ব্যয়বহুলভাবে মূল্যায়িত এক প্রতিষ্ঠানের ওপর পাতলা অবশিষ্ট দাবি। ব্যাংক বা এনবিএফআই-এর জন্য কখনো ব্যবহার করবেন না: ঋণ ব্যাংকের অর্থায়ন পছন্দ নয়, কাঁচামাল, এবং EBITDA তার জন্য সংজ্ঞায়িত ধারণা নয়। সূত্রটি তবুও একটি সংখ্যা ফেরত দেবে, আর সেটাই বিপদ — তা পাটিগাণিতিকভাবে গণনীয় ও বিশ্লেষণগতভাবে শূন্য।',
      },
    },
    {
      q: {
        en: 'A DSE cement company is at its lowest P/E in ten years. Explain your hesitation.',
        bn: 'একটি ডিএসই সিমেন্ট কোম্পানি দশ বছরের সর্বনিম্ন P/E-তে আছে। আপনার দ্বিধা ব্যাখ্যা করুন।',
      },
      a: {
        en: 'A cyclical shows its lowest trailing P/E at the top of the cycle, not the bottom, because trailing earnings are at their maximum and are about to fall. The denominator is peak earnings, so the ratio is temporarily flattering and inverts as the cycle turns. For a Bangladeshi cement producer the turn is driven by construction demand tied to government development spending, imported clinker priced in dollars, and gas tariff revisions. Chapter 17 adds the second concern: cement carries high operating and financial leverage that multiply, so a 28% EBITDA decline can breach interest coverage. So the low P/E and the fragile balance sheet are the same fact viewed twice. I would value it on mid-cycle earnings, or on EV/EBITDA averaged across a full cycle, and I would treat the ten-year low P/E as a sell signal rather than a screen result.',
        bn: 'একটি চক্রীয় কোম্পানি সর্বনিম্ন ট্রেইলিং P/E দেখায় চক্রের তলায় নয়, চূড়ায়, কারণ ট্রেইলিং আয় তখন সর্বোচ্চে এবং পড়তে চলেছে। হর হলো শীর্ষ আয়, তাই অনুপাতটি সাময়িকভাবে তোষামোদী এবং চক্র ঘুরলে উল্টে যায়। বাংলাদেশি সিমেন্ট উৎপাদকের জন্য এই মোড় চালায় সরকারি উন্নয়ন ব্যয়ের সঙ্গে বাঁধা নির্মাণ চাহিদা, ডলারে মূল্যায়িত আমদানি ক্লিংকার, এবং গ্যাস ট্যারিফ সংশোধন। অধ্যায় ১৭ দ্বিতীয় উদ্বেগ যোগ করে: সিমেন্ট উচ্চ পরিচালন ও আর্থিক লিভারেজ বহন করে যা গুণ হয়, তাই ২৮% EBITDA পতনেই সুদ কভারেজ ভাঙতে পারে। অর্থাৎ নিম্ন P/E ও ভঙ্গুর স্থিতিপত্র একই বাস্তবতার দুইবার দর্শন। আমি একে মধ্য-চক্রের আয়ে, বা পুরো চক্রজুড়ে গড় করা EV/EBITDA-তে মূল্যায়ন করতাম, এবং দশ বছরের সর্বনিম্ন P/E-কে স্ক্রিনের ফল নয়, বিক্রির সংকেত ধরতাম।',
      },
    },
  ],

  quiz: [
    {
      q: {
        en: 'Quality-adjusted P/E equals the headline P/E divided by:',
        bn: 'গুণমান-সমন্বিত P/E সমান শিরোনাম P/E ভাগ:',
      },
      options: {
        en: ['The growth rate', 'Cash conversion (CFO / net profit)', 'The dividend payout ratio', 'Book value per share'],
        bn: ['প্রবৃদ্ধির হার', 'নগদ রূপান্তর (CFO / নিট মুনাফা)', 'লভ্যাংশ পরিশোধ অনুপাত', 'শেয়ারপ্রতি বুক ভ্যালু'],
      },
      answer: 1,
    },
    {
      q: {
        en: 'A company at a P/E of 9.00 converts 30% of profit into operating cash. Its P/E on cash earnings is:',
        bn: '৯.০০ P/E-র একটি কোম্পানি মুনাফার ৩০% পরিচালন নগদে রূপান্তর করে। নগদ আয়ে তার P/E:',
      },
      options: {
        en: ['2.70×', '9.00×', '12.00×', '30.00×'],
        bn: ['২.৭০×', '৯.০০×', '১২.০০×', '৩০.০০×'],
      },
      answer: 3,
    },
    {
      q: {
        en: 'A DSE bank trading at 0.6× reported book is best interpreted as:',
        bn: 'প্রতিবেদিত বুকে ০.৬× লেনদেন হওয়া একটি ডিএসই ব্যাংকের সেরা ব্যাখ্যা:',
      },
      options: {
        en: [
          'A clear mispricing offering a 40% discount',
          'The market pricing an adjusted book value it has already estimated',
          'Evidence that the bank is undercapitalised by exactly 40%',
          'A signal that the dividend is about to rise',
        ],
        bn: [
          'একটি স্পষ্ট ভুল মূল্যায়ন যা ৪০% ছাড় দিচ্ছে',
          'বাজার ইতিমধ্যে অনুমান করা একটি সমন্বিত বুক ভ্যালুর দাম দিচ্ছে',
          'প্রমাণ যে ব্যাংকটি ঠিক ৪০% মূলধন-ঘাটতিতে আছে',
          'সংকেত যে লভ্যাংশ বাড়তে চলেছে',
        ],
      },
      answer: 1,
    },
    {
      q: {
        en: 'Removing revaluation surplus from equity takes the chapter textile company from a reported P/B of 1.35× to:',
        bn: 'ইকুইটি থেকে পুনর্মূল্যায়ন উদ্বৃত্ত সরালে অধ্যায়ের বস্ত্র কোম্পানির প্রতিবেদিত ১.৩৫× P/B হয়:',
      },
      options: {
        en: ['0.81×', '1.35×', '2.25×', '4.85×'],
        bn: ['০.৮১×', '১.৩৫×', '২.২৫×', '৪.৮৫×'],
      },
      answer: 2,
    },
    {
      q: {
        en: 'The chapter argues that comparing a DSE P/E to an S&P 500 P/E repeats which earlier error?',
        bn: 'অধ্যায়টি যুক্তি দেয় যে ডিএসই P/E-কে এসঅ্যান্ডপি ৫০০ P/E-র সঙ্গে তুলনা করা কোন পূর্ববর্তী ভুলের পুনরাবৃত্তি?',
      },
      options: {
        en: [
          'The circuit breaker of Chapter 2',
          'The Buffett Indicator category error of Chapter 1',
          'The floor price of Chapter 6',
          'The DuPont decomposition of Chapter 19',
        ],
        bn: [
          'অধ্যায় ২-এর সার্কিট ব্রেকার',
          'অধ্যায় ১-এর বাফেট নির্দেশকের শ্রেণিগত ভুল',
          'অধ্যায় ৬-এর ফ্লোর প্রাইস',
          'অধ্যায় ১৯-এর ডুপন্ট বিভাজন',
        ],
      },
      answer: 1,
    },
    {
      q: {
        en: 'EV/EBITDA is preferred to P/E when:',
        bn: 'কখন P/E-র চেয়ে EV/EBITDA পছন্দনীয়:',
      },
      options: {
        en: [
          'The companies compared have materially different leverage',
          'The company is a commercial bank',
          'Earnings are negative',
          'The free float is very small',
        ],
        bn: [
          'তুলনীয় কোম্পানিগুলোর লিভারেজ উল্লেখযোগ্যভাবে ভিন্ন',
          'কোম্পানিটি একটি বাণিজ্যিক ব্যাংক',
          'আয় ঋণাত্মক',
          'ফ্রি ফ্লোট খুব ছোট',
        ],
      },
      answer: 0,
    },
    {
      q: {
        en: 'Applying EV/EBITDA to a bank produces a number that is:',
        bn: 'একটি ব্যাংকে EV/EBITDA প্রয়োগ করলে যে সংখ্যা আসে তা:',
      },
      options: {
        en: [
          'Reliable, provided deposits are excluded from debt',
          'Arithmetically computable but analytically void',
          'Always negative',
          'The correct way to value any leveraged institution',
        ],
        bn: [
          'নির্ভরযোগ্য, যদি আমানত ঋণ থেকে বাদ দেওয়া হয়',
          'পাটিগাণিতিকভাবে গণনীয় কিন্তু বিশ্লেষণগতভাবে শূন্য',
          'সর্বদা ঋণাত্মক',
          'যেকোনো লিভারেজড প্রতিষ্ঠান মূল্যায়নের সঠিক উপায়',
        ],
      },
      answer: 1,
    },
    {
      q: {
        en: 'A cyclical DSE company such as cement typically shows its LOWEST trailing P/E:',
        bn: 'সিমেন্টের মতো একটি চক্রীয় ডিএসই কোম্পানি সাধারণত তার সর্বনিম্ন ট্রেইলিং P/E দেখায়:',
      },
      options: {
        en: [
          'At the bottom of the cycle, when it is cheapest',
          'At the peak of the cycle, when trailing earnings are about to fall',
          'Randomly, with no relation to the cycle',
          'Only after a rights issue',
        ],
        bn: [
          'চক্রের তলায়, যখন এটি সবচেয়ে সস্তা',
          'চক্রের চূড়ায়, যখন ট্রেইলিং আয় পড়তে চলেছে',
          'এলোমেলোভাবে, চক্রের সঙ্গে কোনো সম্পর্ক ছাড়াই',
          'কেবল একটি রাইট ইস্যুর পরে',
        ],
      },
      answer: 1,
    },
    {
      q: {
        en: 'The very high P/E multiples on some DSE multinational subsidiaries are best explained by:',
        bn: 'কয়েকটি ডিএসই বহুজাতিক সহযোগীর অত্যন্ত উচ্চ P/E গুণকের সেরা ব্যাখ্যা:',
      },
      options: {
        en: ['Superior earnings quality alone', 'Free-float scarcity', 'BSEC pricing rules', 'Higher dividend yields'],
        bn: ['কেবল উন্নততর আয়ের গুণমান', 'ফ্রি-ফ্লোটের স্বল্পতা', 'বিএসইসি-র মূল্য নির্ধারণ বিধি', 'উচ্চতর লভ্যাংশ ইল্ড'],
      },
      answer: 1,
    },
    {
      q: {
        en: 'The chapter concludes that a valuation multiple should never be quoted without:',
        bn: 'অধ্যায়টি উপসংহার টানে যে একটি মূল্যায়ন গুণক কখনো উদ্ধৃত করা উচিত নয় যা ছাড়া:',
      },
      options: {
        en: [
          'A price target attached to it',
          'A statement of what was done to its denominator',
          'A comparison to the S&P 500',
          'The broker research note that produced it',
        ],
        bn: [
          'এর সঙ্গে যুক্ত একটি মূল্য লক্ষ্য',
          'এর হরের সঙ্গে কী করা হয়েছে তার বিবৃতি',
          'এসঅ্যান্ডপি ৫০০-র সঙ্গে একটি তুলনা',
          'যে ব্রোকার গবেষণা নোট এটি তৈরি করেছে',
        ],
      },
      answer: 1,
    },
  ],
};
