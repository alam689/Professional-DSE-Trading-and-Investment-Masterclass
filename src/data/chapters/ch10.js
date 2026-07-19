/**
 * Chapter 10 — The Income Statement
 * Part II, Company Analysis. Follows Chapter 9 (Reading the Annual Report).
 */

export default {
  n: 10,
  tools: [],

  excelSheet: {
    filename: 'ch10-margin-waterfall.xlsx',
    sheetName: 'Margin Waterfall',
    cells: [
      { cell: 'A1', v: 'LINE (BDT crore)' }, { cell: 'B1', v: 'AROGYA PHARMA' },
      { cell: 'C1', v: 'RUPALI TEXTILE' },

      { cell: 'A2', v: 'Revenue' }, { cell: 'B2', v: 800 }, { cell: 'C2', v: 620 },
      { cell: 'A3', v: 'Cost of Goods Sold' }, { cell: 'B3', v: 456 }, { cell: 'C3', v: 552 },
      { cell: 'A4', v: 'Gross Profit' }, { cell: 'B4', f: 'B2-B3' }, { cell: 'C4', f: 'C2-C3' },
      { cell: 'A5', v: 'Operating Expenses' }, { cell: 'B5', v: 264 }, { cell: 'C5', v: 56 },
      { cell: 'A6', v: 'OPERATING PROFIT' }, { cell: 'B6', f: 'B4-B5' }, { cell: 'C6', f: 'C4-C5' },
      { cell: 'A7', v: 'Other Income' }, { cell: 'B7', v: 3 }, { cell: 'C7', v: 26 },
      { cell: 'A8', v: 'One-off Gain (land sale)' }, { cell: 'B8', v: 0 }, { cell: 'C8', v: 58 },
      { cell: 'A9', v: 'Finance Cost' }, { cell: 'B9', v: 18 }, { cell: 'C9', v: 42 },
      { cell: 'A10', v: 'PROFIT BEFORE TAX' }, { cell: 'B10', f: 'B6+B7+B8-B9' }, { cell: 'C10', f: 'C6+C7+C8-C9' },
      { cell: 'A11', v: 'Tax Expense' }, { cell: 'B11', v: 13 }, { cell: 'C11', v: 2 },
      { cell: 'A12', v: 'NET PROFIT' }, { cell: 'B12', f: 'B10-B11' }, { cell: 'C12', f: 'C10-C11' },
      { cell: 'A13', v: 'Shares Outstanding (crore)' }, { cell: 'B13', v: 8 }, { cell: 'C13', v: 8 },
      { cell: 'A14', v: 'Diluted Shares (crore)' }, { cell: 'B14', v: 8 }, { cell: 'C14', v: 9.2 },

      { cell: 'A16', v: 'Gross Margin (%)' }, { cell: 'B16', f: 'B4/B2*100' }, { cell: 'C16', f: 'C4/C2*100' },
      { cell: 'A17', v: 'Operating Margin (%)' }, { cell: 'B17', f: 'B6/B2*100' }, { cell: 'C17', f: 'C6/C2*100' },
      { cell: 'A18', v: 'Net Margin (%)' }, { cell: 'B18', f: 'B12/B2*100' }, { cell: 'C18', f: 'C12/C2*100' },
      { cell: 'A19', v: 'Effective Tax Rate (%)' }, { cell: 'B19', f: 'B11/B10*100' }, { cell: 'C19', f: 'C11/C10*100' },
      { cell: 'A20', v: 'Basic EPS (BDT)' }, { cell: 'B20', f: 'B12/B13' }, { cell: 'C20', f: 'C12/C13' },
      { cell: 'A21', v: 'Diluted EPS (BDT)' }, { cell: 'B21', f: 'B12/B14' }, { cell: 'C21', f: 'C12/C14' },

      { cell: 'A23', v: 'QUALITY RATIO (Op Profit / Net Profit)' }, { cell: 'B23', f: 'B6/B12' }, { cell: 'C23', f: 'C6/C12' },
      { cell: 'A24', v: 'Other Income as % of PBT' }, { cell: 'B24', f: 'B7/B10*100' }, { cell: 'C24', f: 'C7/C10*100' },
      { cell: 'A25', v: 'One-off as % of PBT' }, { cell: 'B25', f: 'B8/B10*100' }, { cell: 'C25', f: 'C8/C10*100' },
      { cell: 'A26', v: 'Recurring PBT' }, { cell: 'B26', f: 'B10-B8' }, { cell: 'C26', f: 'C10-C8' },
      { cell: 'A27', v: 'Recurring Net Profit' }, { cell: 'B27', f: 'B26-B11' }, { cell: 'C27', f: 'C26-C11' },
      { cell: 'A28', v: 'RECURRING EPS (BDT)' }, { cell: 'B28', f: 'B27/B13' }, { cell: 'C28', f: 'C27/C13' },

      { cell: 'A30', v: 'Revenue Prior Year' }, { cell: 'B30', v: 720 }, { cell: 'C30', v: 600 },
      { cell: 'A31', v: 'Trade Receivables' }, { cell: 'B31', v: 96 }, { cell: 'C31', v: 214 },
      { cell: 'A32', v: 'Trade Receivables Prior Year' }, { cell: 'B32', v: 88 }, { cell: 'C32', v: 140 },
      { cell: 'A33', v: 'Revenue Growth (%)' }, { cell: 'B33', f: '(B2/B30-1)*100' }, { cell: 'C33', f: '(C2/C30-1)*100' },
      { cell: 'A34', v: 'Receivable Growth (%)' }, { cell: 'B34', f: '(B31/B32-1)*100' }, { cell: 'C34', f: '(C31/C32-1)*100' },
      { cell: 'A35', v: 'DIVERGENCE D' }, { cell: 'B35', f: 'B34/B33' }, { cell: 'C35', f: 'C34/C33' },

      { cell: 'A37', v: 'FLAG: Quality Ratio < 1.0' },
      { cell: 'B37', f: 'IF(B23<1,"FAIL","PASS")' }, { cell: 'C37', f: 'IF(C23<1,"FAIL","PASS")' },
      { cell: 'A38', v: 'FLAG: One-off > 20% of PBT' },
      { cell: 'B38', f: 'IF(B25>20,"FAIL","PASS")' }, { cell: 'C38', f: 'IF(C25>20,"FAIL","PASS")' },
      { cell: 'A39', v: 'FLAG: Other Income > 20% of PBT' },
      { cell: 'B39', f: 'IF(B24>20,"FAIL","PASS")' }, { cell: 'C39', f: 'IF(C24>20,"FAIL","PASS")' },
      { cell: 'A40', v: 'FLAG: Recurring PBT negative' },
      { cell: 'B40', f: 'IF(B26<0,"FAIL","PASS")' }, { cell: 'C40', f: 'IF(C26<0,"FAIL","PASS")' },
      { cell: 'A41', v: 'FLAG: Effective Tax Rate < 10%' },
      { cell: 'B41', f: 'IF(B19<10,"FAIL","PASS")' }, { cell: 'C41', f: 'IF(C19<10,"FAIL","PASS")' },
      { cell: 'A42', v: 'FLAG: Divergence D > 2' },
      { cell: 'B42', f: 'IF(B35>2,"FAIL","PASS")' }, { cell: 'C42', f: 'IF(C35>2,"FAIL","PASS")' },

      { cell: 'A44', v: 'FAILS' },
      { cell: 'B44', f: 'COUNTIF(B37:B42,"FAIL")' }, { cell: 'C44', f: 'COUNTIF(C37:C42,"FAIL")' },
      { cell: 'A45', v: 'VERDICT' },
      { cell: 'B45', f: 'IF(B44>=4,"NOT OPERATING EARNINGS",IF(B44>=2,"LOW QUALITY",IF(B44>=1,"MONITOR QUALITY","OPERATING EARNINGS")))' },
      { cell: 'C45', f: 'IF(C44>=4,"NOT OPERATING EARNINGS",IF(C44>=2,"LOW QUALITY",IF(C44>=1,"MONITOR QUALITY","OPERATING EARNINGS")))' },

      { cell: 'A47', v: 'NOTE' },
      { cell: 'B47', v: 'Row 12 is identical for both companies. Rows 6, 23, 26 and 28 are where they stop being identical.' },
    ],
  },

  objectives: {
    en: [
      'Reconstruct the income statement waterfall from revenue to EPS and name what each subtotal is answerable for.',
      'Compute gross, operating and net margin and explain why the three answer different questions about the same company.',
      'Identify the revenue-recognition timing games available under IFRS 15 as adopted, and the receivable signature each leaves.',
      'Use other income and non-recurring items to compute recurring earnings, and treat the operating-profit-to-net-profit ratio as an earnings-quality flag.',
      'Distinguish basic from diluted EPS and compute an effective tax rate, stating what an unusually low rate implies about next year.',
    ],
    bn: [
      'রাজস্ব থেকে EPS পর্যন্ত আয় বিবরণীর ধারাক্রম পুনর্গঠন করা এবং প্রতিটি উপযোগফল কীসের জন্য দায়বদ্ধ তা বলা।',
      'মোট, পরিচালন ও নিট মার্জিন গণনা করা এবং একই কোম্পানি সম্পর্কে তিনটি কেন ভিন্ন প্রশ্নের উত্তর দেয় তা ব্যাখ্যা করা।',
      'গৃহীত IFRS 15-এর অধীনে রাজস্ব স্বীকৃতির সময়-কৌশলগুলো এবং প্রতিটি যে প্রাপ্য-স্বাক্ষর রেখে যায় তা শনাক্ত করা।',
      'অন্যান্য আয় ও অনিয়মিত খাত ব্যবহার করে পুনরাবৃত্ত আয় গণনা করা, এবং পরিচালন মুনাফা-থেকে-নিট মুনাফা অনুপাতকে আয়ের মান নির্দেশক হিসেবে ব্যবহার করা।',
      'মৌলিক ও প্রলঘুকৃত EPS পৃথক করা এবং কার্যকর করহার গণনা করা, এবং অস্বাভাবিক কম হার আগামী বছর সম্পর্কে কী বোঝায় তা বলা।',
    ],
  },

  blocks: {
    theory: {
      en: `Chapter 9 established the reading order and stopped at the door of the statements themselves. This chapter opens the first one — and it opens it with a warning.

**The income statement is the most read and least understood page in the annual report, because it is the only statement in which every number is a judgement.** The balance sheet counts things. The cash flow statement counts money that moved. The income statement counts *performance*, and performance is an accounting construct assembled from policy choices, estimates and allocations. It is not a lie. It is an opinion prepared under rules.

### The waterfall

Every statement of profit or loss, under IFRS as adopted in Bangladesh, is the same sequence of subtractions:

| Line | What it is | Who controls it |
|---|---|---|
| **Revenue** | Value of goods or services transferred to customers | Management policy within IFRS 15 |
| less **Cost of Goods Sold (COGS)** | Direct cost of what was sold | Inventory valuation policy, absorption choices |
| = **Gross Profit** | What the product itself earns | The business model |
| less **Operating Expenses** | Selling, distribution, administration | Management discretion |
| = **Operating Profit** | What the *business* earns | The business, mostly |
| plus **Other Income** | Interest, rent, dividends, sundry | The treasury department |
| plus/less **Non-recurring items** | Asset sales, impairments, settlements | Timing, chosen |
| less **Finance Cost** | Interest on borrowings | The balance sheet, set years ago |
| = **Profit Before Tax (PBT)** | | |
| less **Tax Expense** | Current plus deferred | NBR, exemptions, and deferred-tax judgement |
| = **Net Profit (PAT)** | The headline | Everything above |
| ÷ **Weighted average shares** | | Corporate actions |
| = **EPS** | The number the market quotes | |

Read the right-hand column downward. **The further down the statement you go, the less the number tells you about the business and the more it tells you about the financing, the tax position and the calendar.** EPS sits at the bottom of that decay. It is the most quoted and the least diagnostic figure on the page.

### Revenue, and when a company decides to have earned it

Under **IFRS 15**, as adopted in Bangladesh, revenue is recognised when control of a good or service transfers to the customer. That single word — *control* — is where the discretion lives.

The five-step model (identify the contract, identify performance obligations, determine the transaction price, allocate it, recognise revenue as obligations are satisfied) is rigorous on paper. In practice, on the DSE, four timing games recur:

**1. Channel stuffing.** Ship heavily to distributors near year-end on extended credit. Control has legally transferred. Revenue is recognised. The goods are sitting in a distributor's warehouse, not with a consumer, and next year's orders collapse. **Signature: a fourth-quarter revenue spike followed by a receivable balance that does not unwind.**

**2. Bill-and-hold.** Invoice the customer, retain the goods on site. IFRS 15 permits this only under restrictive conditions — the arrangement must be substantive, the goods identified and ready. Bangladeshi engineering and cement companies use it; the conditions are frequently not met and rarely challenged.

**3. Gross versus net presentation.** A trading or agency business that recognises the full contract value as revenue rather than its commission. Net profit is unaffected. **Revenue and every margin ratio computed from it are transformed.** A company that switches from net to gross presentation reports enormous "growth" while nothing about the business changed.

**4. Percentage-of-completion judgement.** Construction and long-cycle engineering recognise revenue against estimated completion. The estimate is management's. Moving a project from 40% complete to 55% complete requires no cash, no customer and no auditor's disagreement — only a revised estimate.

**The unifying point: none of these four is fraud, and all four are visible from outside.** They leave the same trace, which Chapter 9 already taught you to look for — receivables growing faster than revenue. Revenue that is real converts to cash. Revenue that is a timing decision converts to a receivable.

### COGS and gross margin: the number that describes the business

$$\\text{Gross Margin} = \\frac{\\text{Revenue} - \\text{COGS}}{\\text{Revenue}} \\times 100$$

**Gross margin is the most structural number in the entire statement.** It answers one question: does this company sell something the market will pay a premium for, or does it convert inputs into outputs at whatever spread competition allows?

On the DSE the sector spreads are wide, stable and diagnostic:

| Archetype | Typical gross margin | Why |
|---|---|---|
| Branded pharma | ৪০–৫০% | Brand, regulatory barrier, prescription channel |
| Consumer / FMCG | ৩০–৪৫% | Brand and distribution |
| Power (IPP) | ২০–৩০% | Contracted tariff, fuel pass-through |
| Cement, steel | ১২–২০% | Commodity, energy-cost exposure |
| Export textile | ৮–১৫% | Price-taking, buyer-dictated |

**A textile company reporting a 35% gross margin is not a good textile company. It is an accounting question.** The margin is set by the industry structure, not by management effort, and a firm that sits far outside its sector band is either doing something the note will explain or something the note will not.

Two mechanical warnings. First, **gross margin is only comparable where COGS is defined the same way.** Some Bangladeshi issuers push depreciation and factory overhead into administrative expenses rather than COGS, inflating gross margin and deflating operating margin. Check the note. Second, **a rising gross margin with falling inventory turnover is a valuation signal, not a pricing signal** — inventory carried at cost that should have been written down flatters COGS.

### Operating margin: what the business actually earns

$$\\text{Operating Margin} = \\frac{\\text{Operating Profit}}{\\text{Revenue}} \\times 100$$

Operating profit is gross profit less selling, distribution and administrative expenses. It is the last subtotal that belongs entirely to the *business*. Everything below it belongs to the balance sheet, the treasury, the tax authority and the calendar.

**This is the line to anchor on.** Two companies with identical net profit can have operating profits that differ by a factor of seven — which is precisely the worked example in this chapter.

### Finance cost: the balance sheet arriving in the income statement

Finance cost is interest on borrowings. It is not a business decision made this year; it is the consequence of leverage decisions made in prior years, repriced by Bangladesh Bank policy and the deposit market.

The working measure is **interest coverage**:

$$\\text{Interest Coverage} = \\frac{\\text{Operating Profit}}{\\text{Finance Cost}}$$

Below 2.0× the company is working principally for its lenders. **Below 1.0× the operations do not cover the interest, and any reported profit must have come from somewhere other than operations.** That is not an inference. It is arithmetic, and it is the single fastest way to detect the company this chapter is about.

Bangladeshi textiles, engineering and small NBFIs cluster below 2.0×. The sector is not incidental: these are the same sectors Chapter 9 identified as the home of modified audit opinions.

### Other income: the earnings-quality signal nobody reads

**Other income is the most under-examined line in a Bangladeshi income statement.** It aggregates: interest on fixed deposits, dividend income from shares held, rental income, foreign-exchange gains, scrap sales, insurance recoveries, and whatever else does not fit.

None of that is improper. All of it is disclosed. **The question is not whether other income is legitimate. The question is what fraction of profit before tax it represents.**

$$\\text{Other Income Dependence} = \\frac{\\text{Other Income}}{\\text{PBT}} \\times 100$$

Above roughly 20%, you are no longer valuing a manufacturer. You are valuing a manufacturer stapled to a small, undisclosed investment fund — and you are paying a manufacturer's multiple for it.

Three specific Bangladeshi patterns:

- **The textile that stopped weaving.** Operations barely break even; the profit is FDR interest on the proceeds of a prior asset sale plus rent from a shed leased to a sister concern. The mill is a landlord reporting as a manufacturer.
- **The IPP earning on unpaid government bills.** Independent power producers accrue interest on overdue capacity payments from BPDB. That interest is real, contractual, and lands in other income — but it is income earned by *not being paid*, and it grows precisely as collection deteriorates.
- **The company whose other income is a currency move.** Unrealised exchange gains on foreign-currency borrowings during a taka appreciation. It reverses.

**The test:** does other income recur, and does it arrive as cash? Interest on a deposit does both. A foreign-exchange gain does neither reliably.

### Non-recurring and one-off items

A gain on disposal of land, a revaluation surplus routed through profit or loss, a legal settlement received, an insurance claim, a reversal of a prior impairment — each is a real transaction and each is permitted to sit inside net profit.

**What is not permitted is for you to capitalise it into a multiple.** A one-off gain of BDT 58 crore is worth exactly BDT 58 crore, once. It is not worth ten times BDT 58 crore, which is what happens when a market applies an unadjusted P/E to a year containing it.

The correction is one subtraction:

$$\\text{Recurring PBT} = \\text{PBT} - \\text{Non-recurring items}$$

Do it before you compute anything else. **A company whose recurring PBT is negative while its reported PBT is positive did not have a profitable year. It had a disposal.**

Watch also for the reverse: management labelling a *recurring* cost as "exceptional" year after year. Restructuring charges in three consecutive years are not exceptional; they are the cost structure.

### Tax and the effective rate

$$\\text{Effective Tax Rate} = \\frac{\\text{Tax Expense}}{\\text{PBT}} \\times 100$$

Bangladesh's statutory corporate rates differ sharply by category — listed companies pay less than unlisted, banks and tobacco pay more, and a great many issuers hold sector exemptions or reduced rates. A listed manufacturer in the low-to-mid twenties is unremarkable.

**An effective rate near zero is always information, and it is almost always temporary.** The usual causes:

- A **tax holiday** with a stated expiry date. Textiles and power have carried these for decades. The expiry is disclosed. The market prices as though it never arrives.
- **Capital gains taxed at a concessional rate**, which is why a year dominated by a land sale can show a 4% effective rate.
- **Deferred tax movements**, including the recognition of a deferred tax asset on accumulated losses — a bookkeeping entry that raises net profit while no tax was ever saved.

Ask one question of every low effective rate: **what does next year's EPS look like at the statutory rate?** If the answer is materially lower, the current EPS is a policy artefact, not an earnings level.

### EPS: basic and diluted

$$\\text{Basic EPS} = \\frac{\\text{Net Profit attributable to ordinary shareholders}}{\\text{Weighted average ordinary shares}}$$

Two words carry the weight. **Weighted average** — shares issued mid-year count only for the portion of the year they existed. This is why a company that issues shares in month ten reports an EPS that is not comparable to the prior year even if profit is unchanged.

**Attributable to ordinary shareholders** — for a group, minority interests are stripped out first. A holding company consolidating a 55%-owned subsidiary reports 100% of that subsidiary's revenue and 55% of its profit. Revenue growth driven by consolidation is not growth in what you own.

**Diluted EPS**, under IAS 33, restates the denominator to include every instrument that could become an ordinary share: convertible preference shares, convertible bonds, options, warrants.

**Diluted EPS is the honest number, and the gap between basic and diluted is a disclosure about your future ownership.** A company reporting basic EPS of 6.50 and diluted EPS of 5.65 is telling you that 13% of your claim on earnings belongs to somebody who has not yet converted. Bangladeshi retail investors quote basic EPS almost universally. The screeners print basic. The newspapers print basic.

### Bringing it together

The chapter's central claim, and the reason Chapter 9 came first:

**Net profit is a subtotal, not a conclusion.** Two companies can report the same net profit, the same share count, the same EPS and the same P/E, and be different businesses in every respect that determines whether either will report that profit again. The income statement contains everything needed to tell them apart — above the net profit line, where nobody looks.`,
      bn: `অধ্যায় ৯ পড়ার ক্রম প্রতিষ্ঠা করে বিবরণীগুলোর দরজায় এসে থেমেছিল। এই অধ্যায় প্রথমটি খোলে — এবং একটি সতর্কবার্তা দিয়ে খোলে।

**আয় বিবরণী বার্ষিক প্রতিবেদনের সবচেয়ে বেশি পঠিত ও সবচেয়ে কম বোঝা পাতা, কারণ এটিই একমাত্র বিবরণী যার প্রতিটি সংখ্যা একটি বিচার।** স্থিতিপত্র বস্তু গোনে। নগদ প্রবাহ বিবরণী নড়াচড়া করা টাকা গোনে। আয় বিবরণী গোনে *কর্মক্ষমতা*, আর কর্মক্ষমতা হলো নীতিগত পছন্দ, প্রাক্কলন ও বণ্টন দিয়ে গড়া একটি হিসাবগত নির্মাণ। এটি মিথ্যা নয়। এটি নিয়মের অধীনে প্রস্তুত একটি মতামত।

### ধারাক্রম

বাংলাদেশে গৃহীত IFRS অনুযায়ী প্রতিটি লাভ-লোকসান বিবরণী একই বিয়োগ-অনুক্রম:

| লাইন | এটি কী | কে নিয়ন্ত্রণ করে |
|---|---|---|
| **রাজস্ব** | গ্রাহকের কাছে হস্তান্তরিত পণ্য বা সেবার মূল্য | IFRS 15-এর মধ্যে ব্যবস্থাপনার নীতি |
| বিয়োগ **বিক্রীত পণ্যের ব্যয় (COGS)** | যা বিক্রি হলো তার প্রত্যক্ষ ব্যয় | মজুদ মূল্যায়ন নীতি, শোষণ-পছন্দ |
| = **মোট মুনাফা** | পণ্যটি নিজে যা আয় করে | ব্যবসায়িক মডেল |
| বিয়োগ **পরিচালন ব্যয়** | বিক্রয়, বিতরণ, প্রশাসন | ব্যবস্থাপনার বিবেচনা |
| = **পরিচালন মুনাফা** | *ব্যবসাটি* যা আয় করে | মূলত ব্যবসা |
| যোগ **অন্যান্য আয়** | সুদ, ভাড়া, লভ্যাংশ, বিবিধ | ট্রেজারি বিভাগ |
| যোগ/বিয়োগ **অনিয়মিত খাত** | সম্পদ বিক্রয়, অবচয়, নিষ্পত্তি | সময়, বেছে নেওয়া |
| বিয়োগ **অর্থায়ন ব্যয়** | ঋণের সুদ | স্থিতিপত্র, বহু বছর আগে নির্ধারিত |
| = **করপূর্ব মুনাফা (PBT)** | | |
| বিয়োগ **কর ব্যয়** | চলতি ও বিলম্বিত | এনবিআর, অব্যাহতি, বিলম্বিত-কর বিচার |
| = **নিট মুনাফা (PAT)** | শিরোনাম | ওপরের সবকিছু |
| ÷ **ভারযুক্ত গড় শেয়ার** | | কর্পোরেট অ্যাকশন |
| = **EPS** | বাজার যে সংখ্যাটি উদ্ধৃত করে | |

ডান কলামটি নিচের দিকে পড়ুন। **বিবরণীতে যত নিচে নামবেন, সংখ্যাটি ব্যবসা সম্পর্কে তত কম বলবে এবং অর্থায়ন, কর অবস্থান ও পঞ্জিকা সম্পর্কে তত বেশি বলবে।** EPS ঐ ক্ষয়ের একেবারে তলায় বসে আছে। পাতার সবচেয়ে বেশি উদ্ধৃত এবং সবচেয়ে কম রোগনির্ণায়ক সংখ্যা এটিই।

### রাজস্ব, এবং কোম্পানি কখন সিদ্ধান্ত নেয় যে সে তা অর্জন করেছে

বাংলাদেশে গৃহীত **IFRS 15** অনুযায়ী, পণ্য বা সেবার নিয়ন্ত্রণ গ্রাহকের কাছে হস্তান্তরিত হলে রাজস্ব স্বীকৃত হয়। ঐ একটি শব্দেই — *নিয়ন্ত্রণ* — বিবেচনার অবকাশ বাস করে।

পাঁচ-ধাপের মডেলটি (চুক্তি চিহ্নিতকরণ, কর্মদায় চিহ্নিতকরণ, লেনদেন মূল্য নির্ধারণ, বণ্টন, দায় পূরণের সঙ্গে স্বীকৃতি) কাগজে কঠোর। বাস্তবে, ডিএসই-তে চারটি সময়-কৌশল বারবার ফিরে আসে:

**১. চ্যানেল স্টাফিং।** বছর শেষের কাছাকাছি পরিবেশকদের কাছে বর্ধিত বাকিতে ভারী চালান পাঠানো। নিয়ন্ত্রণ আইনত হস্তান্তরিত। রাজস্ব স্বীকৃত। পণ্য পড়ে আছে পরিবেশকের গুদামে, ভোক্তার কাছে নয়, এবং পরের বছরের ফরমায়েশ ভেঙে পড়ে। **স্বাক্ষর: চতুর্থ প্রান্তিকে রাজস্বের লাফ, তারপর এমন প্রাপ্য স্থিতি যা আর খোলে না।**

**২. বিল-অ্যান্ড-হোল্ড।** গ্রাহককে চালান দেওয়া, পণ্য নিজের প্রাঙ্গণেই রাখা। IFRS 15 এটি কেবল কঠোর শর্তে অনুমোদন করে — ব্যবস্থাটি বস্তুগত হতে হবে, পণ্য চিহ্নিত ও প্রস্তুত থাকতে হবে। বাংলাদেশি প্রকৌশল ও সিমেন্ট কোম্পানি এটি ব্যবহার করে; শর্তগুলো প্রায়ই পূরণ হয় না এবং কদাচিৎ প্রশ্নবিদ্ধ হয়।

**৩. গ্রস বনাম নেট উপস্থাপন।** যে বাণিজ্যিক বা এজেন্সি ব্যবসা নিজের কমিশনের বদলে সম্পূর্ণ চুক্তিমূল্যকে রাজস্ব হিসেবে দেখায়। নিট মুনাফা অপরিবর্তিত থাকে। **রাজস্ব এবং তা থেকে গণিত প্রতিটি মার্জিন অনুপাত রূপান্তরিত হয়ে যায়।** নেট থেকে গ্রস উপস্থাপনে যাওয়া কোম্পানি বিশাল "প্রবৃদ্ধি" ঘোষণা করে, অথচ ব্যবসার কিছুই বদলায়নি।

**৪. সম্পূর্ণতার শতাংশের বিচার।** নির্মাণ ও দীর্ঘচক্রের প্রকৌশল প্রাক্কলিত সম্পূর্ণতার বিপরীতে রাজস্ব স্বীকৃতি দেয়। প্রাক্কলনটি ব্যবস্থাপনার। একটি প্রকল্পকে ৪০% সম্পূর্ণ থেকে ৫৫% সম্পূর্ণে সরাতে কোনো নগদ, কোনো গ্রাহক বা নিরীক্ষকের দ্বিমত লাগে না — কেবল একটি সংশোধিত প্রাক্কলন লাগে।

**একীভূত কথাটি: এই চারটির কোনোটিই জালিয়াতি নয়, এবং চারটিই বাইরে থেকে দৃশ্যমান।** এরা একই চিহ্ন রেখে যায়, যা অধ্যায় ৯ আপনাকে খুঁজতে শিখিয়েছে — রাজস্বের চেয়ে দ্রুত বাড়া প্রাপ্য। যে রাজস্ব প্রকৃত, তা নগদে রূপান্তরিত হয়। যে রাজস্ব একটি সময়-সিদ্ধান্ত, তা প্রাপ্যে রূপান্তরিত হয়।

### COGS ও মোট মার্জিন: যে সংখ্যাটি ব্যবসাটির বর্ণনা দেয়

$$\\text{মোট মার্জিন} = \\frac{\\text{রাজস্ব} - \\text{COGS}}{\\text{রাজস্ব}} \\times 100$$

**সমগ্র বিবরণীর সবচেয়ে কাঠামোগত সংখ্যা মোট মার্জিন।** এটি একটিমাত্র প্রশ্নের উত্তর দেয়: এই কোম্পানি কি এমন কিছু বেচে যার জন্য বাজার বাড়তি দাম দেবে, নাকি সে প্রতিযোগিতা যতটা ব্যবধান দেয় ততটাতেই উপকরণকে পণ্যে রূপান্তর করে?

ডিএসই-তে খাতভিত্তিক ব্যবধানগুলো প্রশস্ত, স্থিতিশীল ও রোগনির্ণায়ক:

| আদর্শরূপ | সাধারণ মোট মার্জিন | কেন |
|---|---|---|
| ব্র্যান্ডেড ওষুধ | ৪০–৫০% | ব্র্যান্ড, নিয়ন্ত্রক প্রতিবন্ধক, প্রেসক্রিপশন চ্যানেল |
| ভোগ্যপণ্য / FMCG | ৩০–৪৫% | ব্র্যান্ড ও বিতরণ |
| বিদ্যুৎ (IPP) | ২০–৩০% | চুক্তিবদ্ধ ট্যারিফ, জ্বালানি পাস-থ্রু |
| সিমেন্ট, ইস্পাত | ১২–২০% | পণ্যদ্রব্য, জ্বালানি-ব্যয়ে উন্মুক্ততা |
| রপ্তানিমুখী বস্ত্র | ৮–১৫% | দাম-গ্রহীতা, ক্রেতা-নির্ধারিত |

**৩৫% মোট মার্জিন ঘোষণাকারী বস্ত্র কোম্পানি ভালো বস্ত্র কোম্পানি নয়। এটি একটি হিসাবগত প্রশ্ন।** মার্জিন নির্ধারণ করে শিল্পকাঠামো, ব্যবস্থাপনার পরিশ্রম নয়, এবং যে প্রতিষ্ঠান নিজের খাতের সীমার অনেক বাইরে বসে সে হয় এমন কিছু করছে যা টীকা ব্যাখ্যা করবে, নয়তো এমন কিছু যা টীকা করবে না।

দুটি যান্ত্রিক সতর্কতা। প্রথমত, **মোট মার্জিন কেবল তখনই তুলনীয় যখন COGS একইভাবে সংজ্ঞায়িত।** কিছু বাংলাদেশি ইস্যুয়ার অবচয় ও কারখানা ওভারহেড COGS-এর বদলে প্রশাসনিক ব্যয়ে ঠেলে দেয়, যা মোট মার্জিন ফোলায় ও পরিচালন মার্জিন চুপসায়। টীকা দেখুন। দ্বিতীয়ত, **মজুদ আবর্তন কমতে থাকা অবস্থায় বাড়তে থাকা মোট মার্জিন মূল্যনির্ধারণের সংকেত নয়, মূল্যায়নের সংকেত** — যে মজুদ অবলোপন হওয়া উচিত ছিল তা ব্যয়ে রাখা COGS-কে সাজিয়ে রাখে।

### পরিচালন মার্জিন: ব্যবসাটি আসলে যা আয় করে

$$\\text{পরিচালন মার্জিন} = \\frac{\\text{পরিচালন মুনাফা}}{\\text{রাজস্ব}} \\times 100$$

পরিচালন মুনাফা হলো মোট মুনাফা বিয়োগ বিক্রয়, বিতরণ ও প্রশাসনিক ব্যয়। এটিই শেষ উপযোগফল যা সম্পূর্ণভাবে *ব্যবসার*। এর নিচের সবকিছু স্থিতিপত্র, ট্রেজারি, কর কর্তৃপক্ষ ও পঞ্জিকার।

**নোঙর ফেলার লাইন এটিই।** অভিন্ন নিট মুনাফার দুটি কোম্পানির পরিচালন মুনাফা সাত গুণ পর্যন্ত আলাদা হতে পারে — এই অধ্যায়ের কার্যকরী উদাহরণ ঠিক তা-ই।

### অর্থায়ন ব্যয়: স্থিতিপত্রের আয় বিবরণীতে আগমন

অর্থায়ন ব্যয় হলো ঋণের সুদ। এটি এ বছরের কোনো ব্যবসায়িক সিদ্ধান্ত নয়; এটি আগের বছরগুলোর লিভারেজ সিদ্ধান্তের পরিণতি, যা বাংলাদেশ ব্যাংকের নীতি ও আমানত বাজার নতুন করে দাম দেয়।

কার্যকর পরিমাপ হলো **সুদ আচ্ছাদন**:

$$\\text{সুদ আচ্ছাদন} = \\frac{\\text{পরিচালন মুনাফা}}{\\text{অর্থায়ন ব্যয়}}$$

২.০×-এর নিচে কোম্পানি প্রধানত তার ঋণদাতাদের জন্য কাজ করছে। **১.০×-এর নিচে পরিচালন কার্যক্রম সুদটাই আচ্ছাদন করে না, তাই ঘোষিত যেকোনো মুনাফা পরিচালন ছাড়া অন্য কোথাও থেকে এসেছে।** এটি অনুমান নয়। এটি পাটিগণিত, এবং এই অধ্যায় যে কোম্পানিটি নিয়ে, তা শনাক্ত করার দ্রুততম উপায় এটিই।

বাংলাদেশি বস্ত্র, প্রকৌশল ও ছোট এনবিএফআই ২.০×-এর নিচে জমা হয়। খাতগুলো আকস্মিক নয়: অধ্যায় ৯ এই খাতগুলোকেই পরিবর্তিত নিরীক্ষা মতামতের আবাস হিসেবে চিহ্নিত করেছিল।

### অন্যান্য আয়: আয়ের মানের যে সংকেত কেউ পড়ে না

**বাংলাদেশি আয় বিবরণীর সবচেয়ে কম পরীক্ষিত লাইন অন্যান্য আয়।** এতে জড়ো হয়: স্থায়ী আমানতের সুদ, ধারণকৃত শেয়ারের লভ্যাংশ, ভাড়া আয়, বৈদেশিক মুদ্রা লাভ, স্ক্র্যাপ বিক্রি, বীমা আদায়, এবং আর যা কিছু কোথাও খাপ খায় না।

এর কোনোটিই অনুচিত নয়। সবই প্রকাশিত। **প্রশ্নটি অন্যান্য আয় বৈধ কি না তা নয়। প্রশ্নটি হলো এটি করপূর্ব মুনাফার কত অংশ।**

$$\\text{অন্যান্য আয়ের ওপর নির্ভরতা} = \\frac{\\text{অন্যান্য আয়}}{\\text{PBT}} \\times 100$$

মোটামুটি ২০%-এর ওপরে আপনি আর কোনো উৎপাদক মূল্যায়ন করছেন না। আপনি মূল্যায়ন করছেন একটি উৎপাদক, যার সঙ্গে একটি ছোট, অঘোষিত বিনিয়োগ তহবিল স্ট্যাপল করা — এবং তার জন্য আপনি উৎপাদকের গুণিতক দিচ্ছেন।

তিনটি নির্দিষ্ট বাংলাদেশি প্যাটার্ন:

- **যে বস্ত্রকল বোনা বন্ধ করেছে।** পরিচালন কার্যক্রম কোনোমতে সমান-সমান; মুনাফা আসে আগের সম্পদ বিক্রির অর্থে করা এফডিআর-এর সুদ এবং সহোদর প্রতিষ্ঠানকে ভাড়া দেওয়া শেড থেকে। মিলটি উৎপাদক হিসেবে প্রতিবেদন দেওয়া একজন বাড়িওয়ালা।
- **যে আইপিপি সরকারের অপরিশোধিত বিলে আয় করে।** স্বাধীন বিদ্যুৎ উৎপাদকরা বিপিডিবি-র বকেয়া ক্যাপাসিটি পেমেন্টে সুদ জমা করে। ঐ সুদ প্রকৃত, চুক্তিবদ্ধ, এবং অন্যান্য আয়ে গিয়ে বসে — কিন্তু এটি *টাকা না পাওয়ার* মাধ্যমে অর্জিত আয়, এবং আদায় যত খারাপ হয় এটি ঠিক ততই বাড়ে।
- **যে কোম্পানির অন্যান্য আয় একটি মুদ্রা-আন্দোলন।** টাকার মূল্যবৃদ্ধিকালে বৈদেশিক মুদ্রার ঋণে অবাস্তবায়িত বিনিময় লাভ। এটি উল্টে যায়।

**পরীক্ষা:** অন্যান্য আয় কি পুনরাবৃত্ত হয়, এবং তা কি নগদ হয়ে আসে? আমানতের সুদ দুটিই করে। বৈদেশিক মুদ্রা লাভ নির্ভরযোগ্যভাবে কোনোটিই করে না।

### অনিয়মিত ও এককালীন খাত

জমি বিক্রয়ের লাভ, লাভ-লোকসানের মধ্য দিয়ে চালানো পুনর্মূল্যায়ন উদ্বৃত্ত, প্রাপ্ত আইনি নিষ্পত্তি, বীমা দাবি, আগের অবচয়ের প্রত্যাবর্তন — প্রতিটিই প্রকৃত লেনদেন এবং প্রতিটিরই নিট মুনাফার ভেতরে বসার অনুমতি আছে।

**যার অনুমতি নেই তা হলো আপনার এটিকে একটি গুণিতকে রূপান্তর করা।** ৫৮ কোটি টাকার এককালীন লাভ ঠিক ৫৮ কোটি টাকাই, একবারের জন্য। এটি ৫৮ কোটির দশ গুণ মূল্যের নয়, অথচ বাজার যখন এমন একটি বছরে অসমন্বিত P/E প্রয়োগ করে তখন তা-ই ঘটে।

সংশোধনটি একটিমাত্র বিয়োগ:

$$\\text{পুনরাবৃত্ত PBT} = \\text{PBT} - \\text{অনিয়মিত খাত}$$

অন্য কিছু গণনার আগে এটি করুন। **যে কোম্পানির ঘোষিত PBT ধনাত্মক অথচ পুনরাবৃত্ত PBT ঋণাত্মক, তার লাভজনক বছর যায়নি। তার একটি সম্পদ-বিক্রয় হয়েছে।**

উল্টোটাও লক্ষ রাখুন: বছরের পর বছর একটি *পুনরাবৃত্ত* ব্যয়কে ব্যবস্থাপনা "ব্যতিক্রমী" নামে চিহ্নিত করছে। পরপর তিন বছরের পুনর্গঠন ব্যয় ব্যতিক্রমী নয়; সেটাই ব্যয়কাঠামো।

### কর ও কার্যকর হার

$$\\text{কার্যকর করহার} = \\frac{\\text{কর ব্যয়}}{\\text{PBT}} \\times 100$$

বাংলাদেশের বিধিবদ্ধ কর্পোরেট হার শ্রেণিভেদে তীব্রভাবে ভিন্ন — তালিকাভুক্ত কোম্পানি অতালিকাভুক্তের চেয়ে কম দেয়, ব্যাংক ও তামাক বেশি দেয়, এবং বহু ইস্যুয়ার খাতভিত্তিক অব্যাহতি বা হ্রাসকৃত হার ভোগ করে। বিশ-এর ঘরের একটি তালিকাভুক্ত উৎপাদক অস্বাভাবিক নয়।

**শূন্যের কাছাকাছি কার্যকর হার সবসময়ই তথ্য, এবং প্রায় সবসময়ই সাময়িক।** সাধারণ কারণগুলো:

- ঘোষিত মেয়াদোত্তীর্ণের তারিখসহ একটি **কর অবকাশ**। বস্ত্র ও বিদ্যুৎ দশকের পর দশক এটি বহন করেছে। মেয়াদোত্তীর্ণের তারিখ প্রকাশিত। বাজার এমনভাবে দাম দেয় যেন তা কখনো আসবেই না।
- **রেয়াতি হারে করারোপিত মূলধনী লাভ**, যে কারণে জমি বিক্রয়-প্রধান একটি বছরে ৪% কার্যকর হার দেখাতে পারে।
- **বিলম্বিত করের নড়াচড়া**, যার মধ্যে সঞ্চিত লোকসানের ওপর বিলম্বিত কর সম্পদের স্বীকৃতিও আছে — এমন একটি খতিয়ান-এন্ট্রি যা নিট মুনাফা বাড়ায় অথচ কোনো কর কখনো সাশ্রয় হয়নি।

প্রতিটি কম কার্যকর হারকে একটি প্রশ্ন করুন: **বিধিবদ্ধ হারে আগামী বছরের EPS কেমন দেখাবে?** উত্তর যদি উল্লেখযোগ্যভাবে কম হয়, তবে বর্তমান EPS একটি নীতিগত কৃত্রিমতা, কোনো আয়ের স্তর নয়।

### EPS: মৌলিক ও প্রলঘুকৃত

$$\\text{মৌলিক EPS} = \\frac{\\text{সাধারণ শেয়ারহোল্ডারদের প্রাপ্য নিট মুনাফা}}{\\text{ভারযুক্ত গড় সাধারণ শেয়ার}}$$

দুটি শব্দ ভার বহন করে। **ভারযুক্ত গড়** — বছরের মাঝামাঝি ইস্যু করা শেয়ার কেবল যে অংশটুকু সে বিদ্যমান ছিল ততটুকুর জন্যই গোনা হয়। এ কারণেই দশম মাসে শেয়ার ইস্যু করা কোম্পানির EPS মুনাফা অপরিবর্তিত থাকলেও আগের বছরের সঙ্গে তুলনীয় নয়।

**সাধারণ শেয়ারহোল্ডারদের প্রাপ্য** — গ্রুপের ক্ষেত্রে সংখ্যালঘু স্বার্থ আগে বাদ যায়। ৫৫% মালিকানার সাবসিডিয়ারি একীভূতকারী হোল্ডিং কোম্পানি ঐ সাবসিডিয়ারির ১০০% রাজস্ব ও ৫৫% মুনাফা দেখায়। একীভূতকরণচালিত রাজস্ব প্রবৃদ্ধি আপনার মালিকানার প্রবৃদ্ধি নয়।

IAS 33 অনুযায়ী **প্রলঘুকৃত EPS** হরটিকে এমনভাবে পুনর্বিবৃত করে যাতে সাধারণ শেয়ারে রূপান্তরযোগ্য প্রতিটি উপকরণ ঢোকে: রূপান্তরযোগ্য অগ্রাধিকার শেয়ার, রূপান্তরযোগ্য বন্ড, অপশন, ওয়ারেন্ট।

**প্রলঘুকৃত EPS-ই সৎ সংখ্যা, এবং মৌলিক ও প্রলঘুকৃতের ব্যবধান আপনার ভবিষ্যৎ মালিকানা সম্পর্কে একটি প্রকাশ।** যে কোম্পানি ৬.৫০ মৌলিক EPS ও ৫.৬৫ প্রলঘুকৃত EPS ঘোষণা করছে, সে আপনাকে বলছে আয়ের ওপর আপনার দাবির ১৩% এমন কারো, যিনি এখনো রূপান্তর করেননি। বাংলাদেশি খুচরা বিনিয়োগকারীরা প্রায় সর্বজনীনভাবে মৌলিক EPS উদ্ধৃত করেন। স্ক্রিনার ছাপে মৌলিক। সংবাদপত্র ছাপে মৌলিক।

### একত্রে আনা

অধ্যায়ের কেন্দ্রীয় দাবি, এবং অধ্যায় ৯ কেন আগে এল তার কারণ:

**নিট মুনাফা একটি উপযোগফল, কোনো সিদ্ধান্ত নয়।** দুটি কোম্পানি একই নিট মুনাফা, একই শেয়ারসংখ্যা, একই EPS ও একই P/E ঘোষণা করতে পারে, অথচ ঐ মুনাফা তারা আবার ঘোষণা করতে পারবে কি না তা নির্ধারণ করে এমন প্রতিটি দিক থেকে ভিন্ন ব্যবসা হতে পারে। এদের আলাদা করার সবকিছুই আয় বিবরণীতেই আছে — নিট মুনাফার লাইনের ওপরে, যেখানে কেউ তাকায় না।`,
    },

    simple: {
      en: `A shop and a landlord can report the same profit. They are not the same business.

Imagine two men who both tell you they made BDT 5 lakh last year.

The first runs a pharmacy. He bought medicine for 60 lakh, sold it for 100 lakh, paid rent, salaries and electricity, paid interest on his shop loan, paid his tax, and kept 5 lakh. **Next year he will do it again.**

The second also owns a pharmacy, but almost nobody comes in. The shop barely covers its own costs. What he actually did was sell a piece of land his father left him, and put the money in an FDR. The land gain and the bank interest gave him 5 lakh.

**Same 5 lakh. Next year the second man has no land to sell.**

Now put both on a stock exchange, give both the same number of shares, and both will print the same EPS in tomorrow's newspaper.

---

### Read the statement from the top, not the bottom

The income statement is a staircase going down. Each step subtracts something.

| Step | Question it answers |
|---|---|
| Revenue | How much did we sell? |
| minus cost of goods | What is left after making it? = **gross profit** |
| minus salaries, rent, marketing | What is left after running it? = **operating profit** |
| plus interest, rent, odd gains | What else came in? |
| minus bank interest | What did the lenders take? |
| minus tax | What did the government take? |
| = net profit | The newspaper number |

**Everybody reads the last row. The row that describes the business is "operating profit".**

If operating profit is small and net profit is large, ask immediately: where did the difference come from? A company cannot earn more after paying interest and tax than it earned from its own operations — unless something came in from outside.

---

### The two words that should stop you

**"Other income."** This is interest, rent, dividends — money the company earned by owning things, not by working. Fine in small amounts. If it is a quarter of the profit, you are buying a factory that mostly acts as a savings account.

**"Gain on disposal."** The company sold something — land, a building, a machine. Real money. **But it happens once.** You cannot pay ten times earnings for a one-time gain, because there is no year eleven.

---

### The one calculation

Take profit before tax. Subtract every one-off gain. Look at what is left.

If what is left is negative, the company lost money this year and covered it by selling an asset. That is not a bad company in every case — sometimes selling idle land is exactly right. **But it is not an earnings level, and it must never be multiplied.**

The newspaper will not do this subtraction for you. It takes ten seconds and it is the difference between a business and a liquidation in progress.`,
      bn: `একটি দোকান আর একজন বাড়িওয়ালা একই মুনাফা ঘোষণা করতে পারেন। তাঁরা একই ব্যবসা নন।

কল্পনা করুন দুজন মানুষ, দুজনেই বলছেন গত বছর তাঁরা ৫ লক্ষ টাকা আয় করেছেন।

প্রথমজন একটি ওষুধের দোকান চালান। তিনি ৬০ লক্ষ টাকায় ওষুধ কিনে ১০০ লক্ষ টাকায় বেচেছেন, ভাড়া, বেতন ও বিদ্যুৎ দিয়েছেন, দোকানের ঋণের সুদ দিয়েছেন, কর দিয়েছেন, এবং ৫ লক্ষ রেখেছেন। **আগামী বছরও তিনি এটাই করবেন।**

দ্বিতীয়জনেরও ওষুধের দোকান আছে, কিন্তু প্রায় কেউ আসে না। দোকানটি কোনোমতে নিজের খরচই তোলে। তিনি আসলে করেছেন বাবার রেখে যাওয়া এক টুকরো জমি বিক্রি, আর টাকাটা এফডিআর-এ রাখা। জমির লাভ ও ব্যাংকের সুদ মিলে তাঁকে ৫ লক্ষ দিয়েছে।

**একই ৫ লক্ষ। আগামী বছর দ্বিতীয়জনের বেচার মতো কোনো জমি নেই।**

এবার দুজনকেই স্টক এক্সচেঞ্জে বসান, দুজনকে একই সংখ্যক শেয়ার দিন — কালকের সংবাদপত্রে দুজনেরই একই EPS ছাপা হবে।

---

### বিবরণী নিচ থেকে নয়, ওপর থেকে পড়ুন

আয় বিবরণী নিচের দিকে নামা একটি সিঁড়ি। প্রতিটি ধাপ কিছু একটা বিয়োগ করে।

| ধাপ | যে প্রশ্নের উত্তর দেয় |
|---|---|
| রাজস্ব | আমরা কত বেচলাম? |
| বিয়োগ পণ্যের ব্যয় | বানানোর পর কী থাকল? = **মোট মুনাফা** |
| বিয়োগ বেতন, ভাড়া, বিপণন | চালানোর পর কী থাকল? = **পরিচালন মুনাফা** |
| যোগ সুদ, ভাড়া, বিবিধ লাভ | আর কী ঢুকল? |
| বিয়োগ ব্যাংকের সুদ | ঋণদাতারা কী নিলেন? |
| বিয়োগ কর | সরকার কী নিল? |
| = নিট মুনাফা | সংবাদপত্রের সংখ্যা |

**সবাই শেষ সারিটা পড়ে। ব্যবসাটির বর্ণনা দেয় "পরিচালন মুনাফা" সারিটি।**

পরিচালন মুনাফা ছোট আর নিট মুনাফা বড় হলে সঙ্গে সঙ্গে জিজ্ঞেস করুন: পার্থক্যটা কোথা থেকে এল? সুদ ও কর দেওয়ার পর কোনো কোম্পানি নিজের পরিচালন কার্যক্রম থেকে যা আয় করেছে তার চেয়ে বেশি রাখতে পারে না — যদি না বাইরে থেকে কিছু ঢোকে।

---

### যে দুটি শব্দ আপনাকে থামানো উচিত

**"অন্যান্য আয়।"** এটি সুদ, ভাড়া, লভ্যাংশ — কাজ করে নয়, জিনিস মালিকানায় রেখে কোম্পানি যা আয় করেছে। অল্প পরিমাণে ঠিক আছে। এটি মুনাফার এক-চতুর্থাংশ হলে আপনি এমন একটি কারখানা কিনছেন যা মূলত একটি সঞ্চয়ী হিসাবের মতো আচরণ করে।

**"বিক্রয়জনিত লাভ।"** কোম্পানি কিছু বেচেছে — জমি, ভবন, যন্ত্র। প্রকৃত টাকা। **কিন্তু এটি একবারই ঘটে।** এককালীন লাভের জন্য আপনি দশ গুণ আয় দিতে পারেন না, কারণ এগারোতম বছর বলে কিছু নেই।

---

### একটিমাত্র হিসাব

করপূর্ব মুনাফা নিন। প্রতিটি এককালীন লাভ বিয়োগ করুন। যা থাকল তা দেখুন।

যা থাকল তা ঋণাত্মক হলে কোম্পানি এ বছর টাকা হারিয়েছে এবং একটি সম্পদ বিক্রি করে তা ঢেকেছে। সব ক্ষেত্রেই এটি খারাপ কোম্পানি নয় — কখনো কখনো পড়ে থাকা জমি বেচাই সঠিক কাজ। **কিন্তু এটি কোনো আয়ের স্তর নয়, এবং একে কখনোই গুণ করা চলবে না।**

সংবাদপত্র আপনার হয়ে এই বিয়োগটি করবে না। এতে দশ সেকেন্ড লাগে, আর এটাই একটি ব্যবসা ও একটি চলমান অবসায়নের মধ্যে পার্থক্য।`,
    },

    example: {
      en: `### Two companies, one bottom line

Both report **BDT 52.00 crore net profit**. Both have **8 crore ordinary shares**. Both therefore print **basic EPS of BDT 6.50**. Both trade near BDT 65, so both screen at **P/E 10.0**.

Chapter 9 ran this trick with the auditor's report. This time both audit opinions are unqualified. Both auditors are on the FRC panel. There is no going-concern paragraph anywhere. **Everything Chapter 9 taught you to check comes back clean.**

They are still not the same business, and the income statement says so on its face.

| BDT crore | Arogya Pharmaceuticals Ltd | Rupali Textile Mills Ltd |
|---|---|---|
| Revenue | ৮০০.০০ | ৬২০.০০ |
| Cost of goods sold | ৪৫৬.০০ | ৫৫২.০০ |
| **Gross profit** | **৩৪৪.০০** | **৬৮.০০** |
| Operating expenses | ২৬৪.০০ | ৫৬.০০ |
| **Operating profit** | **৮০.০০** | **১২.০০** |
| Other income | ৩.০০ | ২৬.০০ |
| Gain on sale of land (one-off) | ০.০০ | ৫৮.০০ |
| Finance cost | ১৮.০০ | ৪২.০০ |
| **Profit before tax** | **৬৫.০০** | **৫৪.০০** |
| Tax expense | ১৩.০০ | ২.০০ |
| **Net profit** | **৫২.০০** | **৫২.০০** |
| Ordinary shares (crore) | ৮.০০ | ৮.০০ |
| Diluted shares (crore) | ৮.০০ | ৯.২০ |
| **Basic EPS (BDT)** | **৬.৫০** | **৬.৫০** |

### The margins

| | Arogya | Rupali |
|---|---|---|
| Gross margin | ৪৩.০০% | ১০.৯৭% |
| Operating margin | ১০.০০% | ১.৯৪% |
| **Net margin** | **৬.৫০%** | **৮.৩৯%** |

**Read that last row twice.** The textile mill reports a *higher* net margin than the branded pharmaceutical company. On net margin alone — a ratio printed in every screener — Rupali is the better business.

Its gross margin is one quarter of Arogya's. Its operating margin is one fifth. **The net margin was manufactured below the operating line, which is the only place a net margin can be manufactured.**

### Where each company's profit came from

**Arogya.** Operating profit BDT 80.00 crore. Other income BDT 3.00 crore — interest on a deposit balance. Finance cost BDT 18.00 crore. Tax BDT 13.00 crore. The BDT 52.00 crore of net profit is what survives after the lenders and the NBR take their share of BDT 80 crore of operating profit.

$$\\text{Interest coverage} = \\frac{80.00}{18.00} = 4.44\\times$$

**Rupali.** Operating profit BDT 12.00 crore against a finance cost of BDT 42.00 crore.

$$\\text{Interest coverage} = \\frac{12.00}{42.00} = 0.29\\times$$

**The mill's operations do not cover a third of its interest bill.** Before anything else in the statement is examined, that single ratio proves the reported profit did not come from weaving cloth.

It came from two places:

- **Other income, BDT 26.00 crore** — FDR interest, and rent on a warehouse leased to a sister concern. That is **48.15%** of profit before tax.
- **A one-off gain of BDT 58.00 crore** on the sale of a land parcel in Gazipur. That is **107.41%** of profit before tax.

### The subtraction that ends the comparison

$$\\text{Recurring PBT}_{Arogya} = 65.00 - 0.00 = \\text{BDT } 65.00 \\text{ crore}$$
$$\\text{Recurring PBT}_{Rupali} = 54.00 - 58.00 = -\\text{BDT } 4.00 \\text{ crore}$$

Applying each company's actual tax charge:

$$\\text{Recurring EPS}_{Arogya} = \\frac{65.00 - 13.00}{8.00} = \\text{BDT } 6.50$$
$$\\text{Recurring EPS}_{Rupali} = \\frac{-4.00 - 2.00}{8.00} = -\\text{BDT } 0.75$$

**Identical reported EPS of 6.50. Strip one line and it is 6.50 against −0.75.**

Rupali did not have a profitable year. It had a land sale that was large enough to cover an operating loss and leave BDT 52 crore over.

### The quality ratio

$$Q = \\frac{\\text{Operating Profit}}{\\text{Net Profit}}$$

Arogya: $80.00 / 52.00 = 1.54\\times$. Operations produced more than the bottom line; interest and tax consumed the difference. **This is what a normal industrial company looks like.**

Rupali: $12.00 / 52.00 = 0.23\\times$. Operations produced less than a quarter of the bottom line. **Three-quarters of the reported profit entered the statement below the operating line.**

### The tax rate

Arogya: $13.00 / 65.00 \\times 100 = 20.00\\%$. Ordinary for a listed manufacturer.

Rupali: $2.00 / 54.00 \\times 100 = 3.70\\%$. The land gain was assessed as a capital gain at a concessional rate, and the operating loss absorbed the rest.

**Next year Rupali has no land gain and no concessional rate.** The 3.70% is not a tax advantage the company possesses. It is a description of what happened once.

### Basic versus diluted

Arogya has no dilutive instruments. Basic = diluted = BDT 6.50.

Rupali issued convertible preference shares to a lender during a restructuring. On conversion, share count rises from 8.00 crore to 9.20 crore.

$$\\text{Diluted EPS}_{Rupali} = \\frac{52.00}{9.20} = \\text{BDT } 5.65$$

**Thirteen percent of Rupali's earnings already belong to somebody else.** The figure is disclosed on the face of the statement, directly beneath basic EPS, and the screeners do not carry it.

### Receivables, one more time

| | Arogya | Rupali |
|---|---|---|
| Revenue (prior) | ৮০০.০০ (৭২০.০০) | ৬২০.০০ (৬০০.০০) |
| Revenue growth | ১১.১১% | ৩.৩৩% |
| Trade receivables (prior) | ৯৬.০০ (৮৮.০০) | ২১৪.০০ (১৪০.০০) |
| Receivable growth | ৯.০৯% | ৫২.৮৬% |
| **Divergence $D$** | **০.৮২** | **১৫.৮৬** |

Even the shrunken revenue Rupali did report is not converting to cash. Receivables grew nearly sixteen times faster than sales — the exact signature Chapter 9 attached to related-party sales and this chapter attaches to revenue-recognition timing. **Both explanations are bad, and the note does not distinguish them.**

### The score

| Quality flag | Weight | Arogya | Rupali |
|---|---|---|---|
| Operating profit < net profit | ২০ | — | ✔ |
| One-off > 20% of PBT | ২০ | — | ✔ |
| Other income > 20% of PBT | ১৫ | — | ✔ |
| Recurring PBT negative | ২৫ | — | ✔ |
| Effective tax rate < 10% | ১০ | — | ✔ |
| Receivable growth > 2× revenue growth | ১০ | — | ✔ |
| **TOTAL / ১০০** | | **০** | **১০০** |
| **VERDICT** | | **OPERATING EARNINGS** | **NOT OPERATING EARNINGS** |

**Same net profit. Same EPS. Same P/E. Clean audit on both. Zero versus one hundred.**

The lesson is not that Rupali cheated. It cheated nobody: every figure above is on the face of an audited, unqualified statement, and the land sale is disclosed in a note with the buyer named.

**The lesson is that net profit is a subtotal, and the market treats it as a conclusion.** A screener reads one row. This chapter reads eleven, and the eleven rows describe two companies that have nothing in common except the row the screener reads.`,
      bn: `### দুটি কোম্পানি, একটি তলার সারি

দুটিই **৫২.০০ কোটি টাকা নিট মুনাফা** ঘোষণা করেছে। দুটিরই **৮ কোটি সাধারণ শেয়ার**। তাই দুটিই **৬.৫০ টাকা মৌলিক EPS** ছাপছে। দুটিই ৬৫ টাকার কাছাকাছি লেনদেন হচ্ছে, তাই দুটিই **P/E ১০.০**-তে দেখাচ্ছে।

অধ্যায় ৯ এই কৌশলটি চালিয়েছিল নিরীক্ষকের প্রতিবেদন দিয়ে। এবার দুটির নিরীক্ষা মতামতই অযোগ্যতাহীন। দুই নিরীক্ষকই FRC প্যানেলে। কোথাও কোনো চলমানতা অনুচ্ছেদ নেই। **অধ্যায় ৯ যা যা দেখতে শিখিয়েছিল সবই পরিচ্ছন্ন আসছে।**

তবু এরা একই ব্যবসা নয়, এবং আয় বিবরণী তা তার মুখেই বলে দিচ্ছে।

| কোটি টাকা | আরোগ্য ফার্মাসিউটিক্যালস লিমিটেড | রূপালী টেক্সটাইল মিলস লিমিটেড |
|---|---|---|
| রাজস্ব | ৮০০.০০ | ৬২০.০০ |
| বিক্রীত পণ্যের ব্যয় | ৪৫৬.০০ | ৫৫২.০০ |
| **মোট মুনাফা** | **৩৪৪.০০** | **৬৮.০০** |
| পরিচালন ব্যয় | ২৬৪.০০ | ৫৬.০০ |
| **পরিচালন মুনাফা** | **৮০.০০** | **১২.০০** |
| অন্যান্য আয় | ৩.০০ | ২৬.০০ |
| জমি বিক্রয়ের লাভ (এককালীন) | ০.০০ | ৫৮.০০ |
| অর্থায়ন ব্যয় | ১৮.০০ | ৪২.০০ |
| **করপূর্ব মুনাফা** | **৬৫.০০** | **৫৪.০০** |
| কর ব্যয় | ১৩.০০ | ২.০০ |
| **নিট মুনাফা** | **৫২.০০** | **৫২.০০** |
| সাধারণ শেয়ার (কোটি) | ৮.০০ | ৮.০০ |
| প্রলঘুকৃত শেয়ার (কোটি) | ৮.০০ | ৯.২০ |
| **মৌলিক EPS (টাকা)** | **৬.৫০** | **৬.৫০** |

### মার্জিনগুলো

| | আরোগ্য | রূপালী |
|---|---|---|
| মোট মার্জিন | ৪৩.০০% | ১০.৯৭% |
| পরিচালন মার্জিন | ১০.০০% | ১.৯৪% |
| **নিট মার্জিন** | **৬.৫০%** | **৮.৩৯%** |

**শেষ সারিটি দুবার পড়ুন।** বস্ত্রকলটি ব্র্যান্ডেড ওষুধ কোম্পানির চেয়ে *বেশি* নিট মার্জিন ঘোষণা করছে। কেবল নিট মার্জিনে — প্রতিটি স্ক্রিনারে ছাপা একটি অনুপাত — রূপালীই ভালো ব্যবসা।

এর মোট মার্জিন আরোগ্যের এক-চতুর্থাংশ। পরিচালন মার্জিন এক-পঞ্চমাংশ। **নিট মার্জিনটি পরিচালন লাইনের নিচে তৈরি করা হয়েছে, আর নিট মার্জিন কেবল ওখানেই তৈরি করা যায়।**

### প্রতিটি কোম্পানির মুনাফা কোথা থেকে এল

**আরোগ্য।** পরিচালন মুনাফা ৮০.০০ কোটি টাকা। অন্যান্য আয় ৩.০০ কোটি — আমানত স্থিতির সুদ। অর্থায়ন ব্যয় ১৮.০০ কোটি। কর ১৩.০০ কোটি। ৫২.০০ কোটি টাকা নিট মুনাফা হলো ৮০ কোটি পরিচালন মুনাফা থেকে ঋণদাতা ও এনবিআর নিজেদের অংশ নেওয়ার পর যা টেকে।

$$\\text{সুদ আচ্ছাদন} = \\frac{80.00}{18.00} = 4.44\\times$$

**রূপালী।** পরিচালন মুনাফা ১২.০০ কোটি, অথচ অর্থায়ন ব্যয় ৪২.০০ কোটি।

$$\\text{সুদ আচ্ছাদন} = \\frac{12.00}{42.00} = 0.29\\times$$

**কলটির পরিচালন কার্যক্রম তার সুদের বিলের এক-তৃতীয়াংশও আচ্ছাদন করে না।** বিবরণীর আর কিছু পরীক্ষা করার আগেই ঐ একটি অনুপাত প্রমাণ করে যে ঘোষিত মুনাফা কাপড় বোনা থেকে আসেনি।

এসেছে দুই জায়গা থেকে:

- **অন্যান্য আয়, ২৬.০০ কোটি টাকা** — এফডিআর সুদ, এবং সহোদর প্রতিষ্ঠানকে ভাড়া দেওয়া একটি গুদামের ভাড়া। এটি করপূর্ব মুনাফার **৪৮.১৫%**।
- গাজীপুরের একটি জমি বিক্রয়ে **৫৮.০০ কোটি টাকার এককালীন লাভ**। এটি করপূর্ব মুনাফার **১০৭.৪১%**।

### যে বিয়োগটি তুলনা শেষ করে দেয়

$$\\text{পুনরাবৃত্ত PBT}_{আরোগ্য} = 65.00 - 0.00 = ৬৫.০০ \\text{ কোটি টাকা}$$
$$\\text{পুনরাবৃত্ত PBT}_{রূপালী} = 54.00 - 58.00 = -৪.০০ \\text{ কোটি টাকা}$$

প্রতিটি কোম্পানির প্রকৃত কর ব্যয় প্রয়োগ করে:

$$\\text{পুনরাবৃত্ত EPS}_{আরোগ্য} = \\frac{65.00 - 13.00}{8.00} = ৬.৫০ \\text{ টাকা}$$
$$\\text{পুনরাবৃত্ত EPS}_{রূপালী} = \\frac{-4.00 - 2.00}{8.00} = -০.৭৫ \\text{ টাকা}$$

**অভিন্ন ঘোষিত EPS ৬.৫০। একটি লাইন সরিয়ে নিলে দাঁড়ায় ৬.৫০ বনাম −০.৭৫।**

রূপালীর লাভজনক বছর যায়নি। তার একটি জমি বিক্রয় হয়েছে, যা একটি পরিচালন লোকসান ঢেকে ৫২ কোটি টাকা উদ্বৃত্ত রাখার মতো বড় ছিল।

### মান অনুপাত

$$Q = \\frac{\\text{পরিচালন মুনাফা}}{\\text{নিট মুনাফা}}$$

আরোগ্য: $80.00 / 52.00 = 1.54\\times$। পরিচালন কার্যক্রম তলার সারির চেয়ে বেশি উৎপাদন করেছে; পার্থক্যটি সুদ ও কর খেয়েছে। **একটি স্বাভাবিক শিল্পপ্রতিষ্ঠান এমনই দেখায়।**

রূপালী: $12.00 / 52.00 = 0.23\\times$। পরিচালন কার্যক্রম তলার সারির এক-চতুর্থাংশও উৎপাদন করেনি। **ঘোষিত মুনাফার তিন-চতুর্থাংশ বিবরণীতে ঢুকেছে পরিচালন লাইনের নিচ দিয়ে।**

### করহার

আরোগ্য: $13.00 / 65.00 \\times 100 = 20.00\\%$। একটি তালিকাভুক্ত উৎপাদকের জন্য সাধারণ।

রূপালী: $2.00 / 54.00 \\times 100 = 3.70\\%$। জমির লাভ রেয়াতি হারে মূলধনী লাভ হিসেবে নির্ধারিত হয়েছে, আর পরিচালন লোকসান বাকিটা শুষে নিয়েছে।

**আগামী বছর রূপালীর কোনো জমির লাভ নেই এবং কোনো রেয়াতি হারও নেই।** ৩.৭০% কোম্পানির অধিকারে থাকা কোনো কর-সুবিধা নয়। এটি একবার যা ঘটেছিল তার বর্ণনা।

### মৌলিক বনাম প্রলঘুকৃত

আরোগ্যের কোনো প্রলঘুকারী উপকরণ নেই। মৌলিক = প্রলঘুকৃত = ৬.৫০ টাকা।

রূপালী একটি পুনর্গঠনের সময় এক ঋণদাতাকে রূপান্তরযোগ্য অগ্রাধিকার শেয়ার ইস্যু করেছিল। রূপান্তরে শেয়ারসংখ্যা ৮.০০ কোটি থেকে ৯.২০ কোটিতে ওঠে।

$$\\text{প্রলঘুকৃত EPS}_{রূপালী} = \\frac{52.00}{9.20} = ৫.৬৫ \\text{ টাকা}$$

**রূপালীর আয়ের তেরো শতাংশ এখনই অন্য কারো।** সংখ্যাটি বিবরণীর মুখে, মৌলিক EPS-এর ঠিক নিচেই প্রকাশিত, এবং স্ক্রিনারগুলো এটি বহন করে না।

### প্রাপ্য, আরও একবার

| | আরোগ্য | রূপালী |
|---|---|---|
| রাজস্ব (পূর্ববর্তী) | ৮০০.০০ (৭২০.০০) | ৬২০.০০ (৬০০.০০) |
| রাজস্ব প্রবৃদ্ধি | ১১.১১% | ৩.৩৩% |
| বাণিজ্যিক প্রাপ্য (পূর্ববর্তী) | ৯৬.০০ (৮৮.০০) | ২১৪.০০ (১৪০.০০) |
| প্রাপ্য প্রবৃদ্ধি | ৯.০৯% | ৫২.৮৬% |
| **বিচ্যুতি $D$** | **০.৮২** | **১৫.৮৬** |

রূপালী যে সংকুচিত রাজস্বটুকু ঘোষণা করেছে তাও নগদে রূপান্তরিত হচ্ছে না। প্রাপ্য বিক্রয়ের চেয়ে প্রায় ষোলো গুণ দ্রুত বেড়েছে — ঠিক সেই স্বাক্ষর যা অধ্যায় ৯ সম্পর্কিত-পক্ষ বিক্রয়ের সঙ্গে জুড়েছিল এবং এই অধ্যায় রাজস্ব-স্বীকৃতির সময়-কৌশলের সঙ্গে জোড়ে। **দুটি ব্যাখ্যাই খারাপ, এবং টীকা এদের পৃথক করে না।**

### স্কোর

| মান-পতাকা | ভার | আরোগ্য | রূপালী |
|---|---|---|---|
| পরিচালন মুনাফা < নিট মুনাফা | ২০ | — | ✔ |
| এককালীন > PBT-র ২০% | ২০ | — | ✔ |
| অন্যান্য আয় > PBT-র ২০% | ১৫ | — | ✔ |
| পুনরাবৃত্ত PBT ঋণাত্মক | ২৫ | — | ✔ |
| কার্যকর করহার < ১০% | ১০ | — | ✔ |
| প্রাপ্য প্রবৃদ্ধি > রাজস্ব প্রবৃদ্ধির ২ গুণ | ১০ | — | ✔ |
| **মোট / ১০০** | | **০** | **১০০** |
| **সিদ্ধান্ত** | | **OPERATING EARNINGS** | **NOT OPERATING EARNINGS** |

**একই নিট মুনাফা। একই EPS। একই P/E। দুটিরই পরিচ্ছন্ন নিরীক্ষা। শূন্য বনাম একশো।**

শিক্ষাটি এই নয় যে রূপালী প্রতারণা করেছে। সে কাউকেই প্রতারিত করেনি: ওপরের প্রতিটি সংখ্যা একটি নিরীক্ষিত, অযোগ্যতাহীন বিবরণীর মুখে আছে, এবং জমি বিক্রয়টি ক্রেতার নামসহ একটি টীকায় প্রকাশিত।

**শিক্ষাটি হলো নিট মুনাফা একটি উপযোগফল, আর বাজার একে সিদ্ধান্ত হিসেবে গণ্য করে।** স্ক্রিনার একটি সারি পড়ে। এই অধ্যায় এগারোটি সারি পড়ে, আর ঐ এগারোটি সারি এমন দুটি কোম্পানির বর্ণনা দেয় যাদের মধ্যে স্ক্রিনারের পড়া সারিটি ছাড়া আর কোনো মিল নেই।`,
    },

    formula: {
      en: `Let $R$ be revenue, $C$ cost of goods sold, $X$ operating expenses, $O$ other income, $G$ non-recurring gains, $F$ finance cost, $T$ tax expense, $N$ weighted average ordinary shares.

**The waterfall, algebraically:**

$$GP = R - C \\qquad OP = GP - X$$
$$PBT = OP + O + G - F \\qquad PAT = PBT - T$$

**1. The three margins.** Same numerator family, same denominator, three different questions.

$$\\text{Gross Margin} = \\frac{R - C}{R} \\times 100 \\qquad \\text{(what the product earns)}$$

$$\\text{Operating Margin} = \\frac{OP}{R} \\times 100 \\qquad \\text{(what the business earns)}$$

$$\\text{Net Margin} = \\frac{PAT}{R} \\times 100 \\qquad \\text{(what the shareholder keeps)}$$

**Gross margin is set by industry structure. Operating margin is set by management. Net margin is set by the balance sheet and the tax office.** A company can improve net margin without touching either of the first two, which is why net margin alone is not a statement about operations.

**2. Earnings per share.**

$$\\text{Basic EPS} = \\frac{PAT_{\\text{attributable to ordinary}}}{N_{\\text{weighted average}}}$$

$$\\text{Diluted EPS} = \\frac{PAT_{\\text{adjusted}}}{N + N_{\\text{potential}}}$$

Under IAS 33, $N_{potential}$ includes convertible preference shares, convertible bonds, options and warrants. Where a convertible bond is involved, the numerator is also adjusted upward by the after-tax interest that would no longer be paid.

**Dilution overhang:**

$$\\text{Overhang} = \\left(1 - \\frac{\\text{Diluted EPS}}{\\text{Basic EPS}}\\right) \\times 100$$

**3. Effective tax rate.**

$$ETR = \\frac{T}{PBT} \\times 100$$

Compare it to the statutory rate for the company's category. A gap of more than a few points requires an explanation from the tax note — exemption, concessional capital-gains rate, or deferred-tax movement. **Every one of those explanations has an expiry date.**

**4. The quality ratio — operating profit over net profit.** The central diagnostic of this chapter.

$$Q = \\frac{OP}{PAT}$$

Since $PAT = OP + O + G - F - T$, the ratio can only fall below 1.0 when $O + G$ exceeds $F + T$. In plain terms:

$$Q < 1 \\iff O + G > F + T$$

**Non-operating income exceeded the combined bill from lenders and the tax authority.** For a normal leveraged industrial company that is not possible unless something unusual entered below the operating line.

| $Q$ | Reading |
|---|---|
| $> 2.0$ | Heavy interest or tax burden on genuine operating profit |
| $1.2 - 2.0$ | Normal industrial company |
| $1.0 - 1.2$ | Operations barely exceed the bottom line — check other income |
| $< 1.0$ | **The bottom line was assembled below the operating line** |

**5. Non-operating dependence.**

$$\\text{Other Income Dependence} = \\frac{O}{PBT} \\times 100 \\qquad \\text{Non-recurring Dependence} = \\frac{G}{PBT} \\times 100$$

**6. Recurring earnings.** The subtraction that must precede any multiple.

$$PBT_{rec} = PBT - G \\qquad PAT_{rec} = PBT_{rec} - T \\qquad EPS_{rec} = \\frac{PAT_{rec}}{N}$$

$$PBT_{rec} < 0 \\text{ while } PBT > 0 \\;\\Rightarrow\\; \\text{the year was a disposal, not a trading year}$$

**7. Interest coverage.**

$$IC = \\frac{OP}{F}$$

$IC < 1$ is the fastest single proof that reported profit is non-operating.

**8. Revenue–receivable divergence.** Carried forward from Chapter 9, now used against revenue recognition rather than related parties.

$$g_R = \\left(\\frac{R_t}{R_{t-1}} - 1\\right) \\times 100 \\qquad g_{AR} = \\left(\\frac{AR_t}{AR_{t-1}} - 1\\right) \\times 100$$

$$D = \\frac{g_{AR}}{g_R}$$

$D > 2$ means revenue is being recognised faster than it is being collected. Channel stuffing, bill-and-hold, aggressive percentage-of-completion and related-party sales all produce the same $D$. **The ratio identifies that revenue is not converting; the notes identify which mechanism.**

**9. Earnings Quality Score.** Six binary flags $f_i \\in \\{0,1\\}$, weights $w_i$ summing to 100:

$$S = \\sum_{i=1}^{6} w_i f_i$$

| $i$ | Flag | $w_i$ |
|---|---|---|
| ১ | $Q < 1.0$ | ২০ |
| ২ | $G / PBT > 20\\%$ | ২০ |
| ৩ | $O / PBT > 20\\%$ | ১৫ |
| ৪ | $PBT_{rec} < 0$ | ২৫ |
| ৫ | $ETR < 10\\%$ | ১০ |
| ৬ | $D > 2$ | ১০ |

**Verdict bands:**

$$S < 15 \\Rightarrow \\text{OPERATING EARNINGS} \\quad 15 \\le S < 35 \\Rightarrow \\text{MONITOR QUALITY}$$
$$35 \\le S < 60 \\Rightarrow \\text{LOW QUALITY} \\quad S \\ge 60 \\Rightarrow \\text{NOT OPERATING EARNINGS}$$

**Flag 4 carries the heaviest weight for a structural reason.** A negative recurring PBT is not a quality concern — it is the statement that the operating business lost money, established from the company's own audited figures. No adjustment to the other five flags can rehabilitate it.`,
      bn: `ধরা যাক $R$ রাজস্ব, $C$ বিক্রীত পণ্যের ব্যয়, $X$ পরিচালন ব্যয়, $O$ অন্যান্য আয়, $G$ অনিয়মিত লাভ, $F$ অর্থায়ন ব্যয়, $T$ কর ব্যয়, $N$ ভারযুক্ত গড় সাধারণ শেয়ার।

**ধারাক্রম, বীজগাণিতিকভাবে:**

$$GP = R - C \\qquad OP = GP - X$$
$$PBT = OP + O + G - F \\qquad PAT = PBT - T$$

**১. তিনটি মার্জিন।** একই লব-পরিবার, একই হর, তিনটি ভিন্ন প্রশ্ন।

$$\\text{মোট মার্জিন} = \\frac{R - C}{R} \\times 100 \\qquad \\text{(পণ্যটি যা আয় করে)}$$

$$\\text{পরিচালন মার্জিন} = \\frac{OP}{R} \\times 100 \\qquad \\text{(ব্যবসাটি যা আয় করে)}$$

$$\\text{নিট মার্জিন} = \\frac{PAT}{R} \\times 100 \\qquad \\text{(শেয়ারহোল্ডার যা রাখেন)}$$

**মোট মার্জিন নির্ধারণ করে শিল্পকাঠামো। পরিচালন মার্জিন নির্ধারণ করে ব্যবস্থাপনা। নিট মার্জিন নির্ধারণ করে স্থিতিপত্র ও কর দপ্তর।** প্রথম দুটির কোনোটি না ছুঁয়েই কোম্পানি নিট মার্জিন বাড়াতে পারে, যে কারণে একা নিট মার্জিন পরিচালন কার্যক্রম সম্পর্কে কোনো বক্তব্য নয়।

**২. শেয়ারপ্রতি আয়।**

$$\\text{মৌলিক EPS} = \\frac{PAT_{\\text{সাধারণ শেয়ারহোল্ডারদের প্রাপ্য}}}{N_{\\text{ভারযুক্ত গড়}}}$$

$$\\text{প্রলঘুকৃত EPS} = \\frac{PAT_{\\text{সমন্বিত}}}{N + N_{\\text{সম্ভাব্য}}}$$

IAS 33 অনুযায়ী $N_{potential}$-এ থাকে রূপান্তরযোগ্য অগ্রাধিকার শেয়ার, রূপান্তরযোগ্য বন্ড, অপশন ও ওয়ারেন্ট। রূপান্তরযোগ্য বন্ড জড়িত থাকলে লবটিও ঐ কর-পরবর্তী সুদ দিয়ে বাড়ানো হয় যা আর দিতে হতো না।

**প্রলঘুকরণের বোঝা:**

$$\\text{বোঝা} = \\left(1 - \\frac{\\text{প্রলঘুকৃত EPS}}{\\text{মৌলিক EPS}}\\right) \\times 100$$

**৩. কার্যকর করহার।**

$$ETR = \\frac{T}{PBT} \\times 100$$

কোম্পানির শ্রেণির বিধিবদ্ধ হারের সঙ্গে তুলনা করুন। কয়েক পয়েন্টের বেশি ব্যবধান হলে কর টীকা থেকে ব্যাখ্যা লাগবে — অব্যাহতি, রেয়াতি মূলধনী-লাভ হার, বা বিলম্বিত করের নড়াচড়া। **এই ব্যাখ্যার প্রতিটিরই একটি মেয়াদোত্তীর্ণের তারিখ আছে।**

**৪. মান অনুপাত — পরিচালন মুনাফা ভাগ নিট মুনাফা।** এই অধ্যায়ের কেন্দ্রীয় রোগনির্ণায়ক।

$$Q = \\frac{OP}{PAT}$$

যেহেতু $PAT = OP + O + G - F - T$, অনুপাতটি কেবল তখনই ১.০-এর নিচে নামতে পারে যখন $O + G$ ছাড়িয়ে যায় $F + T$-কে। সরল ভাষায়:

$$Q < 1 \\iff O + G > F + T$$

**অ-পরিচালন আয় ঋণদাতা ও কর কর্তৃপক্ষের সম্মিলিত বিল ছাড়িয়ে গেছে।** একটি স্বাভাবিক ঋণভারগ্রস্ত শিল্পপ্রতিষ্ঠানের পক্ষে এটি সম্ভব নয়, যদি না পরিচালন লাইনের নিচ দিয়ে অস্বাভাবিক কিছু ঢুকে থাকে।

| $Q$ | পাঠ |
|---|---|
| $> 2.0$ | প্রকৃত পরিচালন মুনাফার ওপর ভারী সুদ বা কর বোঝা |
| $1.2 - 2.0$ | স্বাভাবিক শিল্পপ্রতিষ্ঠান |
| $1.0 - 1.2$ | পরিচালন কার্যক্রম তলার সারিকে কোনোমতে ছাড়ায় — অন্যান্য আয় দেখুন |
| $< 1.0$ | **তলার সারিটি পরিচালন লাইনের নিচে গড়া হয়েছে** |

**৫. অ-পরিচালন নির্ভরতা।**

$$\\text{অন্যান্য আয় নির্ভরতা} = \\frac{O}{PBT} \\times 100 \\qquad \\text{অনিয়মিত নির্ভরতা} = \\frac{G}{PBT} \\times 100$$

**৬. পুনরাবৃত্ত আয়।** যে বিয়োগটি যেকোনো গুণিতকের আগে করতেই হবে।

$$PBT_{rec} = PBT - G \\qquad PAT_{rec} = PBT_{rec} - T \\qquad EPS_{rec} = \\frac{PAT_{rec}}{N}$$

$$PBT > 0 \\text{ অথচ } PBT_{rec} < 0 \\;\\Rightarrow\\; \\text{বছরটি ছিল একটি সম্পদ-বিক্রয়, কোনো ব্যবসায়িক বছর নয়}$$

**৭. সুদ আচ্ছাদন।**

$$IC = \\frac{OP}{F}$$

ঘোষিত মুনাফা যে অ-পরিচালন, $IC < 1$ তার দ্রুততম একক প্রমাণ।

**৮. রাজস্ব–প্রাপ্য বিচ্যুতি।** অধ্যায় ৯ থেকে বহন করা, এখন সম্পর্কিত পক্ষের বদলে রাজস্ব স্বীকৃতির বিপরীতে প্রযুক্ত।

$$g_R = \\left(\\frac{R_t}{R_{t-1}} - 1\\right) \\times 100 \\qquad g_{AR} = \\left(\\frac{AR_t}{AR_{t-1}} - 1\\right) \\times 100$$

$$D = \\frac{g_{AR}}{g_R}$$

$D > 2$ মানে রাজস্ব আদায়ের চেয়ে দ্রুত স্বীকৃত হচ্ছে। চ্যানেল স্টাফিং, বিল-অ্যান্ড-হোল্ড, আগ্রাসী সম্পূর্ণতা-শতাংশ ও সম্পর্কিত-পক্ষ বিক্রয় — সবই একই $D$ তৈরি করে। **অনুপাতটি বলে রাজস্ব রূপান্তরিত হচ্ছে না; টীকা বলে কোন কৌশলে।**

**৯. আয়-মান স্কোর।** ছয়টি দ্বিমিক পতাকা $f_i \\in \\{0,1\\}$, ভার $w_i$-এর যোগফল ১০০:

$$S = \\sum_{i=1}^{6} w_i f_i$$

| $i$ | পতাকা | $w_i$ |
|---|---|---|
| ১ | $Q < 1.0$ | ২০ |
| ২ | $G / PBT > 20\\%$ | ২০ |
| ৩ | $O / PBT > 20\\%$ | ১৫ |
| ৪ | $PBT_{rec} < 0$ | ২৫ |
| ৫ | $ETR < 10\\%$ | ১০ |
| ৬ | $D > 2$ | ১০ |

**সিদ্ধান্তের স্তর:**

$$S < 15 \\Rightarrow \\text{OPERATING EARNINGS} \\quad 15 \\le S < 35 \\Rightarrow \\text{MONITOR QUALITY}$$
$$35 \\le S < 60 \\Rightarrow \\text{LOW QUALITY} \\quad S \\ge 60 \\Rightarrow \\text{NOT OPERATING EARNINGS}$$

**পতাকা ৪ সবচেয়ে বেশি ভার বহন করে একটি কাঠামোগত কারণে।** ঋণাত্মক পুনরাবৃত্ত PBT কোনো মানের উদ্বেগ নয় — এটি এই বক্তব্য যে পরিচালন ব্যবসাটি টাকা হারিয়েছে, এবং তা কোম্পানির নিজের নিরীক্ষিত সংখ্যা থেকেই প্রতিষ্ঠিত। বাকি পাঁচটি পতাকার কোনো সমন্বয় একে পুনর্বাসিত করতে পারে না।`,
    },

    manual: {
      en: `**Scenario.** Arogya Pharmaceuticals Ltd and Rupali Textile Mills Ltd. All figures in BDT crore, as tabulated in the worked example. Every step is shown.

---

**Step 1 — Gross profit.**

$$GP_{Arogya} = 800.00 - 456.00 = \\text{BDT } 344.00 \\text{ crore}$$
$$GP_{Rupali} = 620.00 - 552.00 = \\text{BDT } 68.00 \\text{ crore}$$

---

**Step 2 — Gross margin.**

$$GM_{Arogya} = \\frac{344.00}{800.00} \\times 100 = 43.00\\%$$
$$GM_{Rupali} = \\frac{68.00}{620.00} \\times 100 = 10.97\\%$$

Both sit inside their sector bands: branded pharma 40–50%, export textile 8–15%. **Neither company is doing anything unusual yet. The difference is structural, not managerial.**

---

**Step 3 — Operating profit.**

$$OP_{Arogya} = 344.00 - 264.00 = \\text{BDT } 80.00 \\text{ crore}$$
$$OP_{Rupali} = 68.00 - 56.00 = \\text{BDT } 12.00 \\text{ crore}$$

---

**Step 4 — Operating margin.**

$$OM_{Arogya} = \\frac{80.00}{800.00} \\times 100 = 10.00\\%$$
$$OM_{Rupali} = \\frac{12.00}{620.00} \\times 100 = 1.94\\%$$

**Arogya's business earns five times more per taka of sales.**

---

**Step 5 — Interest coverage.**

$$IC_{Arogya} = \\frac{80.00}{18.00} = 4.44\\times$$
$$IC_{Rupali} = \\frac{12.00}{42.00} = 0.29\\times$$

**Rupali's operations cover 29% of its interest bill.** At this point the reported profit is already known to be non-operating. Everything that follows only measures how much.

---

**Step 6 — Profit before tax.**

$$PBT_{Arogya} = 80.00 + 3.00 + 0.00 - 18.00 = \\text{BDT } 65.00 \\text{ crore}$$
$$PBT_{Rupali} = 12.00 + 26.00 + 58.00 - 42.00 = \\text{BDT } 54.00 \\text{ crore}$$

---

**Step 7 — Net profit.**

$$PAT_{Arogya} = 65.00 - 13.00 = \\text{BDT } 52.00 \\text{ crore}$$
$$PAT_{Rupali} = 54.00 - 2.00 = \\text{BDT } 52.00 \\text{ crore}$$

**Identical.** This is the number the newspapers print.

---

**Step 8 — Net margin.**

$$NM_{Arogya} = \\frac{52.00}{800.00} \\times 100 = 6.50\\%$$
$$NM_{Rupali} = \\frac{52.00}{620.00} \\times 100 = 8.39\\%$$

**The textile mill's net margin is higher than the pharmaceutical company's**, having been one quarter of it at the gross line and one fifth at the operating line.

---

**Step 9 — Effective tax rate.**

$$ETR_{Arogya} = \\frac{13.00}{65.00} \\times 100 = 20.00\\%$$
$$ETR_{Rupali} = \\frac{2.00}{54.00} \\times 100 = 3.70\\%$$

---

**Step 10 — Basic EPS.**

$$EPS_{Arogya} = \\frac{52.00}{8.00} = \\text{BDT } 6.50$$
$$EPS_{Rupali} = \\frac{52.00}{8.00} = \\text{BDT } 6.50$$

At BDT 65 per share both screen at $P/E = 65 / 6.50 = 10.0$.

---

**Step 11 — Diluted EPS.**

$$EPS^{dil}_{Arogya} = \\frac{52.00}{8.00} = \\text{BDT } 6.50$$
$$EPS^{dil}_{Rupali} = \\frac{52.00}{9.20} = \\text{BDT } 5.65$$

$$\\text{Overhang}_{Rupali} = \\left(1 - \\frac{5.65}{6.50}\\right) \\times 100 = 13.08\\%$$

---

**Step 12 — Quality ratio.**

$$Q_{Arogya} = \\frac{80.00}{52.00} = 1.54\\times$$
$$Q_{Rupali} = \\frac{12.00}{52.00} = 0.23\\times$$

Verify the algebraic condition $Q < 1 \\iff O + G > F + T$ for Rupali:

$$O + G = 26.00 + 58.00 = 84.00 \\qquad F + T = 42.00 + 2.00 = 44.00$$

$84.00 > 44.00$, so $Q < 1$. **Confirmed.**

---

**Step 13 — Non-operating dependence.**

$$\\frac{O_{Arogya}}{PBT} \\times 100 = \\frac{3.00}{65.00} \\times 100 = 4.62\\%$$
$$\\frac{O_{Rupali}}{PBT} \\times 100 = \\frac{26.00}{54.00} \\times 100 = 48.15\\%$$

$$\\frac{G_{Arogya}}{PBT} \\times 100 = \\frac{0.00}{65.00} \\times 100 = 0.00\\%$$
$$\\frac{G_{Rupali}}{PBT} \\times 100 = \\frac{58.00}{54.00} \\times 100 = 107.41\\%$$

**The one-off gain exceeds the whole of profit before tax.**

---

**Step 14 — Recurring earnings.**

$$PBT^{rec}_{Arogya} = 65.00 - 0.00 = \\text{BDT } 65.00 \\text{ crore}$$
$$PBT^{rec}_{Rupali} = 54.00 - 58.00 = -\\text{BDT } 4.00 \\text{ crore}$$

$$PAT^{rec}_{Arogya} = 65.00 - 13.00 = \\text{BDT } 52.00 \\text{ crore}$$
$$PAT^{rec}_{Rupali} = -4.00 - 2.00 = -\\text{BDT } 6.00 \\text{ crore}$$

$$EPS^{rec}_{Arogya} = \\frac{52.00}{8.00} = \\text{BDT } 6.50$$
$$EPS^{rec}_{Rupali} = \\frac{-6.00}{8.00} = -\\text{BDT } 0.75$$

---

**Step 15 — Revenue–receivable divergence.**

Arogya:
$$g_R = \\left(\\frac{800.00}{720.00} - 1\\right) \\times 100 = 11.11\\%$$
$$g_{AR} = \\left(\\frac{96.00}{88.00} - 1\\right) \\times 100 = 9.09\\%$$
$$D = \\frac{9.09}{11.11} = 0.82 \\;\\; (< 2, \\text{ pass})$$

Rupali:
$$g_R = \\left(\\frac{620.00}{600.00} - 1\\right) \\times 100 = 3.33\\%$$
$$g_{AR} = \\left(\\frac{214.00}{140.00} - 1\\right) \\times 100 = 52.86\\%$$
$$D = \\frac{52.86}{3.33} = 15.86 \\;\\; (> 2, \\text{ fail})$$

---

**Step 16 — Score the flags.**

Arogya triggers none:
$$S_{Arogya} = 0$$

Rupali triggers all six:
$$S_{Rupali} = 20 + 20 + 15 + 25 + 10 + 10 = 100$$

---

**Step 17 — Verdicts.**

$$S_{Arogya} = 0 < 15 \\Rightarrow \\textbf{OPERATING EARNINGS}$$
$$S_{Rupali} = 100 \\ge 60 \\Rightarrow \\textbf{NOT OPERATING EARNINGS}$$

---

**Interpretation.**

Four numbers should stay with you.

**BDT 6.50.** Both companies' basic EPS. Seventeen steps of arithmetic began and ended with two identical figures, and identical is exactly what they are not.

**0.29×.** Rupali's interest coverage. This is the fastest test in the chapter and it needs two numbers from the face of the statement. Below 1.0, reported profit *cannot* have come from operations, because operations did not cover the interest.

**0.23× versus 1.54×.** The quality ratio. Arogya's operations produced more than its bottom line and the difference went to lenders and the NBR — the normal direction. Rupali's operations produced less than a quarter of its bottom line, so three-quarters entered from outside the business.

**−BDT 0.75.** Rupali's recurring EPS. Same company, same audited accounts, one subtraction. The difference between +6.50 and −0.75 is a land parcel in Gazipur that will not be sold again.

**The discipline:** compute operating margin and $Q$ before you compute EPS. Once EPS is in your head the rest of the statement becomes a search for reasons to accept it. Chapter 9 made the same argument about the auditor's report; the ordering principle is identical, one statement further in.`,
      bn: `**পরিস্থিতি।** আরোগ্য ফার্মাসিউটিক্যালস লিমিটেড ও রূপালী টেক্সটাইল মিলস লিমিটেড। সব সংখ্যা কোটি টাকায়, কার্যকরী উদাহরণের ছক অনুযায়ী। প্রতিটি ধাপ দেখানো হলো।

---

**ধাপ ১ — মোট মুনাফা।**

$$GP_{আরোগ্য} = 800.00 - 456.00 = ৩৪৪.০০ \\text{ কোটি টাকা}$$
$$GP_{রূপালী} = 620.00 - 552.00 = ৬৮.০০ \\text{ কোটি টাকা}$$

---

**ধাপ ২ — মোট মার্জিন।**

$$GM_{আরোগ্য} = \\frac{344.00}{800.00} \\times 100 = 43.00\\%$$
$$GM_{রূপালী} = \\frac{68.00}{620.00} \\times 100 = 10.97\\%$$

দুটিই নিজ নিজ খাতের সীমার ভেতরে: ব্র্যান্ডেড ওষুধ ৪০–৫০%, রপ্তানিমুখী বস্ত্র ৮–১৫%। **এখনো কোনো কোম্পানিই অস্বাভাবিক কিছু করছে না। পার্থক্যটি কাঠামোগত, ব্যবস্থাপনাগত নয়।**

---

**ধাপ ৩ — পরিচালন মুনাফা।**

$$OP_{আরোগ্য} = 344.00 - 264.00 = ৮০.০০ \\text{ কোটি টাকা}$$
$$OP_{রূপালী} = 68.00 - 56.00 = ১২.০০ \\text{ কোটি টাকা}$$

---

**ধাপ ৪ — পরিচালন মার্জিন।**

$$OM_{আরোগ্য} = \\frac{80.00}{800.00} \\times 100 = 10.00\\%$$
$$OM_{রূপালী} = \\frac{12.00}{620.00} \\times 100 = 1.94\\%$$

**বিক্রয়ের প্রতি টাকায় আরোগ্যের ব্যবসা পাঁচ গুণ বেশি আয় করে।**

---

**ধাপ ৫ — সুদ আচ্ছাদন।**

$$IC_{আরোগ্য} = \\frac{80.00}{18.00} = 4.44\\times$$
$$IC_{রূপালী} = \\frac{12.00}{42.00} = 0.29\\times$$

**রূপালীর পরিচালন কার্যক্রম তার সুদের বিলের ২৯% আচ্ছাদন করে।** এই পর্যায়েই জানা হয়ে গেছে যে ঘোষিত মুনাফা অ-পরিচালন। এরপর যা আসে তা কেবল পরিমাণ মাপে।

---

**ধাপ ৬ — করপূর্ব মুনাফা।**

$$PBT_{আরোগ্য} = 80.00 + 3.00 + 0.00 - 18.00 = ৬৫.০০ \\text{ কোটি টাকা}$$
$$PBT_{রূপালী} = 12.00 + 26.00 + 58.00 - 42.00 = ৫৪.০০ \\text{ কোটি টাকা}$$

---

**ধাপ ৭ — নিট মুনাফা।**

$$PAT_{আরোগ্য} = 65.00 - 13.00 = ৫২.০০ \\text{ কোটি টাকা}$$
$$PAT_{রূপালী} = 54.00 - 2.00 = ৫২.০০ \\text{ কোটি টাকা}$$

**অভিন্ন।** সংবাদপত্র এই সংখ্যাটিই ছাপে।

---

**ধাপ ৮ — নিট মার্জিন।**

$$NM_{আরোগ্য} = \\frac{52.00}{800.00} \\times 100 = 6.50\\%$$
$$NM_{রূপালী} = \\frac{52.00}{620.00} \\times 100 = 8.39\\%$$

মোট মুনাফার লাইনে এক-চতুর্থাংশ এবং পরিচালন লাইনে এক-পঞ্চমাংশ থাকার পর **বস্ত্রকলের নিট মার্জিন ওষুধ কোম্পানির চেয়ে বেশি।**

---

**ধাপ ৯ — কার্যকর করহার।**

$$ETR_{আরোগ্য} = \\frac{13.00}{65.00} \\times 100 = 20.00\\%$$
$$ETR_{রূপালী} = \\frac{2.00}{54.00} \\times 100 = 3.70\\%$$

---

**ধাপ ১০ — মৌলিক EPS।**

$$EPS_{আরোগ্য} = \\frac{52.00}{8.00} = ৬.৫০ \\text{ টাকা}$$
$$EPS_{রূপালী} = \\frac{52.00}{8.00} = ৬.৫০ \\text{ টাকা}$$

শেয়ারপ্রতি ৬৫ টাকায় দুটিই দেখায় $P/E = 65 / 6.50 = 10.0$।

---

**ধাপ ১১ — প্রলঘুকৃত EPS।**

$$EPS^{dil}_{আরোগ্য} = \\frac{52.00}{8.00} = ৬.৫০ \\text{ টাকা}$$
$$EPS^{dil}_{রূপালী} = \\frac{52.00}{9.20} = ৫.৬৫ \\text{ টাকা}$$

$$\\text{বোঝা}_{রূপালী} = \\left(1 - \\frac{5.65}{6.50}\\right) \\times 100 = 13.08\\%$$

---

**ধাপ ১২ — মান অনুপাত।**

$$Q_{আরোগ্য} = \\frac{80.00}{52.00} = 1.54\\times$$
$$Q_{রূপালী} = \\frac{12.00}{52.00} = 0.23\\times$$

রূপালীর জন্য বীজগাণিতিক শর্ত $Q < 1 \\iff O + G > F + T$ যাচাই করুন:

$$O + G = 26.00 + 58.00 = 84.00 \\qquad F + T = 42.00 + 2.00 = 44.00$$

$84.00 > 44.00$, তাই $Q < 1$। **নিশ্চিত।**

---

**ধাপ ১৩ — অ-পরিচালন নির্ভরতা।**

$$\\frac{O_{আরোগ্য}}{PBT} \\times 100 = \\frac{3.00}{65.00} \\times 100 = 4.62\\%$$
$$\\frac{O_{রূপালী}}{PBT} \\times 100 = \\frac{26.00}{54.00} \\times 100 = 48.15\\%$$

$$\\frac{G_{আরোগ্য}}{PBT} \\times 100 = \\frac{0.00}{65.00} \\times 100 = 0.00\\%$$
$$\\frac{G_{রূপালী}}{PBT} \\times 100 = \\frac{58.00}{54.00} \\times 100 = 107.41\\%$$

**এককালীন লাভটি সমগ্র করপূর্ব মুনাফাকেই ছাড়িয়ে গেছে।**

---

**ধাপ ১৪ — পুনরাবৃত্ত আয়।**

$$PBT^{rec}_{আরোগ্য} = 65.00 - 0.00 = ৬৫.০০ \\text{ কোটি টাকা}$$
$$PBT^{rec}_{রূপালী} = 54.00 - 58.00 = -৪.০০ \\text{ কোটি টাকা}$$

$$PAT^{rec}_{আরোগ্য} = 65.00 - 13.00 = ৫২.০০ \\text{ কোটি টাকা}$$
$$PAT^{rec}_{রূপালী} = -4.00 - 2.00 = -৬.০০ \\text{ কোটি টাকা}$$

$$EPS^{rec}_{আরোগ্য} = \\frac{52.00}{8.00} = ৬.৫০ \\text{ টাকা}$$
$$EPS^{rec}_{রূপালী} = \\frac{-6.00}{8.00} = -০.৭৫ \\text{ টাকা}$$

---

**ধাপ ১৫ — রাজস্ব–প্রাপ্য বিচ্যুতি।**

আরোগ্য:
$$g_R = \\left(\\frac{800.00}{720.00} - 1\\right) \\times 100 = 11.11\\%$$
$$g_{AR} = \\left(\\frac{96.00}{88.00} - 1\\right) \\times 100 = 9.09\\%$$
$$D = \\frac{9.09}{11.11} = 0.82 \\;\\; (< 2, \\text{ উত্তীর্ণ})$$

রূপালী:
$$g_R = \\left(\\frac{620.00}{600.00} - 1\\right) \\times 100 = 3.33\\%$$
$$g_{AR} = \\left(\\frac{214.00}{140.00} - 1\\right) \\times 100 = 52.86\\%$$
$$D = \\frac{52.86}{3.33} = 15.86 \\;\\; (> 2, \\text{ ব্যর্থ})$$

---

**ধাপ ১৬ — পতাকাগুলোর স্কোর।**

আরোগ্য একটিও ট্রিগার করে না:
$$S_{আরোগ্য} = 0$$

রূপালী ছয়টিই ট্রিগার করে:
$$S_{রূপালী} = 20 + 20 + 15 + 25 + 10 + 10 = 100$$

---

**ধাপ ১৭ — সিদ্ধান্ত।**

$$S_{আরোগ্য} = 0 < 15 \\Rightarrow \\textbf{OPERATING EARNINGS}$$
$$S_{রূপালী} = 100 \\ge 60 \\Rightarrow \\textbf{NOT OPERATING EARNINGS}$$

---

**ব্যাখ্যা।**

চারটি সংখ্যা আপনার মনে থাকা উচিত।

**৬.৫০ টাকা।** দুই কোম্পানিরই মৌলিক EPS। সতেরো ধাপের পাটিগণিত শুরু ও শেষ হলো দুটি অভিন্ন সংখ্যা দিয়ে, অথচ অভিন্ন ঠিক যা এরা নয়।

**০.২৯×।** রূপালীর সুদ আচ্ছাদন। অধ্যায়ের দ্রুততম পরীক্ষা এটিই এবং এতে বিবরণীর মুখ থেকে দুটি সংখ্যা লাগে। ১.০-এর নিচে হলে ঘোষিত মুনাফা পরিচালন থেকে আসা *সম্ভবই নয়*, কারণ পরিচালন কার্যক্রম সুদটাই আচ্ছাদন করেনি।

**০.২৩× বনাম ১.৫৪×।** মান অনুপাত। আরোগ্যের পরিচালন কার্যক্রম তার তলার সারির চেয়ে বেশি উৎপাদন করেছে আর পার্থক্যটি গেছে ঋণদাতা ও এনবিআর-এর কাছে — স্বাভাবিক দিক। রূপালীর পরিচালন কার্যক্রম তলার সারির এক-চতুর্থাংশও উৎপাদন করেনি, তাই তিন-চতুর্থাংশ ঢুকেছে ব্যবসার বাইরে থেকে।

**−০.৭৫ টাকা।** রূপালীর পুনরাবৃত্ত EPS। একই কোম্পানি, একই নিরীক্ষিত হিসাব, একটিমাত্র বিয়োগ। +৬.৫০ ও −০.৭৫-এর পার্থক্যটি গাজীপুরের একটি জমি, যা আর কখনো বিক্রি হবে না।

**শৃঙ্খলা:** EPS গণনার আগে পরিচালন মার্জিন ও $Q$ গণনা করুন। EPS একবার মাথায় ঢুকে গেলে বাকি বিবরণী হয়ে যায় তা মেনে নেওয়ার কারণ খোঁজার কাজ। অধ্যায় ৯ নিরীক্ষকের প্রতিবেদন নিয়ে একই যুক্তি দিয়েছিল; ক্রমনীতিটি অভিন্ন, কেবল এক বিবরণী পরে।`,
    },

    excel: {
      en: `\`\`\`
A1: LINE (BDT crore)                    B1: AROGYA PHARMA   C1: RUPALI TEXTILE

A2:  Revenue                            B2:  800      C2:  620
A3:  Cost of Goods Sold                 B3:  456      C3:  552
A4:  Gross Profit                       B4:  =B2-B3   C4:  =C2-C3
A5:  Operating Expenses                 B5:  264      C5:   56
A6:  OPERATING PROFIT                   B6:  =B4-B5   C6:  =C4-C5
A7:  Other Income                       B7:    3      C7:   26
A8:  One-off Gain (land sale)           B8:    0      C8:   58
A9:  Finance Cost                       B9:   18      C9:   42
A10: PROFIT BEFORE TAX                  B10: =B6+B7+B8-B9   C10: =C6+C7+C8-C9
A11: Tax Expense                        B11:  13      C11:   2
A12: NET PROFIT                         B12: =B10-B11 C12: =C10-C11
A13: Shares Outstanding (crore)         B13:   8      C13:   8
A14: Diluted Shares (crore)             B14:   8      C14:  9.2

A16: Gross Margin (%)                   B16: =B4/B2*100     C16: =C4/C2*100
A17: Operating Margin (%)               B17: =B6/B2*100     C17: =C6/C2*100
A18: Net Margin (%)                     B18: =B12/B2*100    C18: =C12/C2*100
A19: Effective Tax Rate (%)             B19: =B11/B10*100   C19: =C11/C10*100
A20: Basic EPS (BDT)                    B20: =B12/B13       C20: =C12/C13
A21: Diluted EPS (BDT)                  B21: =B12/B14       C21: =C12/C14

A23: QUALITY RATIO (Op Profit / PAT)    B23: =B6/B12        C23: =C6/C12
A24: Other Income as % of PBT           B24: =B7/B10*100    C24: =C7/C10*100
A25: One-off as % of PBT                B25: =B8/B10*100    C25: =C8/C10*100
A26: Recurring PBT                      B26: =B10-B8        C26: =C10-C8
A27: Recurring Net Profit               B27: =B26-B11       C27: =C26-C11
A28: RECURRING EPS (BDT)                B28: =B27/B13       C28: =C27/C13

A30: Revenue Prior Year                 B30: 720      C30: 600
A31: Trade Receivables                  B31:  96      C31: 214
A32: Trade Receivables Prior Year       B32:  88      C32: 140
A33: Revenue Growth (%)                 B33: =(B2/B30-1)*100    C33: =(C2/C30-1)*100
A34: Receivable Growth (%)              B34: =(B31/B32-1)*100   C34: =(C31/C32-1)*100
A35: DIVERGENCE D                       B35: =B34/B33           C35: =C34/C33

A37: FLAG: Quality Ratio < 1.0          B37: =IF(B23<1,"FAIL","PASS")
A38: FLAG: One-off > 20% of PBT         B38: =IF(B25>20,"FAIL","PASS")
A39: FLAG: Other Income > 20% of PBT    B39: =IF(B24>20,"FAIL","PASS")
A40: FLAG: Recurring PBT negative       B40: =IF(B26<0,"FAIL","PASS")
A41: FLAG: Effective Tax Rate < 10%     B41: =IF(B19<10,"FAIL","PASS")
A42: FLAG: Divergence D > 2             B42: =IF(B35>2,"FAIL","PASS")

A44: FAILS                              B44: =COUNTIF(B37:B42,"FAIL")
A45: VERDICT                            B45: =IF(B44>=4,"NOT OPERATING EARNINGS",
                                             IF(B44>=2,"LOW QUALITY",
                                             IF(B44>=1,"MONITOR QUALITY","OPERATING EARNINGS")))
\`\`\`

Column C carries the same flag formulas with C references.

**Rows 2 to 14 are the only rows you type.** Everything from row 16 down is computed. That is the design intent, and it matters more here than in Chapter 9's scorer: the margin waterfall must be built from the statement as published, before you have formed a view, because every one of these ratios can be argued away individually after you have decided you like the stock.

Four practical notes.

**Look at row 6 before row 12.** The sheet is deliberately laid out so operating profit sits eight rows above net profit. If B6 and C6 differ by a factor of seven while B12 and C12 are identical, you already have the finding and the remaining thirty rows only quantify it.

**Row 23 is the single cell to memorise.** Quality ratio below 1.0 means net profit exceeds operating profit — arithmetically impossible unless non-operating income exceeded the combined interest and tax bill. Here Arogya reads **1.54** and Rupali **0.23**.

**Rows 26 to 28 are the correction the market does not make.** Recurring EPS strips the one-off gain and nothing else. B28 reads **6.50**; C28 reads **−0.75**. These two cells are the entire chapter.

**Add a column per year, not per company.** A single year's waterfall is a photograph. A quality ratio that reads 1.6, then 1.2, then 0.4 across three years is a company whose operations are failing while its disposals hold the EPS up — and that pattern is visible two years before the disposals run out.`,
      bn: `\`\`\`
A1: লাইন (কোটি টাকা)                     B1: আরোগ্য ফার্মা   C1: রূপালী টেক্সটাইল

A2:  রাজস্ব                              B2:  800      C2:  620
A3:  বিক্রীত পণ্যের ব্যয়                 B3:  456      C3:  552
A4:  মোট মুনাফা                          B4:  =B2-B3   C4:  =C2-C3
A5:  পরিচালন ব্যয়                        B5:  264      C5:   56
A6:  পরিচালন মুনাফা                      B6:  =B4-B5   C6:  =C4-C5
A7:  অন্যান্য আয়                         B7:    3      C7:   26
A8:  এককালীন লাভ (জমি বিক্রয়)            B8:    0      C8:   58
A9:  অর্থায়ন ব্যয়                        B9:   18      C9:   42
A10: করপূর্ব মুনাফা                       B10: =B6+B7+B8-B9   C10: =C6+C7+C8-C9
A11: কর ব্যয়                             B11:  13      C11:   2
A12: নিট মুনাফা                          B12: =B10-B11 C12: =C10-C11
A13: বকেয়া শেয়ার (কোটি)                  B13:   8      C13:   8
A14: প্রলঘুকৃত শেয়ার (কোটি)              B14:   8      C14:  9.2

A16: মোট মার্জিন (%)                     B16: =B4/B2*100     C16: =C4/C2*100
A17: পরিচালন মার্জিন (%)                 B17: =B6/B2*100     C17: =C6/C2*100
A18: নিট মার্জিন (%)                     B18: =B12/B2*100    C18: =C12/C2*100
A19: কার্যকর করহার (%)                   B19: =B11/B10*100   C19: =C11/C10*100
A20: মৌলিক EPS (টাকা)                    B20: =B12/B13       C20: =C12/C13
A21: প্রলঘুকৃত EPS (টাকা)                B21: =B12/B14       C21: =C12/C14

A23: মান অনুপাত (পরিচালন মুনাফা / PAT)    B23: =B6/B12        C23: =C6/C12
A24: অন্যান্য আয় PBT-র %                 B24: =B7/B10*100    C24: =C7/C10*100
A25: এককালীন PBT-র %                     B25: =B8/B10*100    C25: =C8/C10*100
A26: পুনরাবৃত্ত PBT                      B26: =B10-B8        C26: =C10-C8
A27: পুনরাবৃত্ত নিট মুনাফা                B27: =B26-B11       C27: =C26-C11
A28: পুনরাবৃত্ত EPS (টাকা)                B28: =B27/B13       C28: =C27/C13

A30: পূর্ববর্তী বছরের রাজস্ব              B30: 720      C30: 600
A31: বাণিজ্যিক প্রাপ্য                    B31:  96      C31: 214
A32: পূর্ববর্তী বছরের প্রাপ্য             B32:  88      C32: 140
A33: রাজস্ব প্রবৃদ্ধি (%)                 B33: =(B2/B30-1)*100    C33: =(C2/C30-1)*100
A34: প্রাপ্য প্রবৃদ্ধি (%)                B34: =(B31/B32-1)*100   C34: =(C31/C32-1)*100
A35: বিচ্যুতি D                          B35: =B34/B33           C35: =C34/C33

A37: পতাকা: মান অনুপাত < ১.০              B37: =IF(B23<1,"FAIL","PASS")
A38: পতাকা: এককালীন > PBT-র ২০%          B38: =IF(B25>20,"FAIL","PASS")
A39: পতাকা: অন্যান্য আয় > PBT-র ২০%      B39: =IF(B24>20,"FAIL","PASS")
A40: পতাকা: পুনরাবৃত্ত PBT ঋণাত্মক        B40: =IF(B26<0,"FAIL","PASS")
A41: পতাকা: কার্যকর করহার < ১০%          B41: =IF(B19<10,"FAIL","PASS")
A42: পতাকা: বিচ্যুতি D > ২                B42: =IF(B35>2,"FAIL","PASS")

A44: ব্যর্থতার সংখ্যা                     B44: =COUNTIF(B37:B42,"FAIL")
A45: সিদ্ধান্ত                            B45: =IF(B44>=4,"NOT OPERATING EARNINGS",
                                             IF(B44>=2,"LOW QUALITY",
                                             IF(B44>=1,"MONITOR QUALITY","OPERATING EARNINGS")))
\`\`\`

C কলামে একই পতাকা-সূত্রগুলো C রেফারেন্সসহ বসে।

**২ থেকে ১৪ সারিই একমাত্র সারি যা আপনি টাইপ করবেন।** ১৬ সারি থেকে নিচের সব গণিত। এটাই নকশার উদ্দেশ্য, এবং অধ্যায় ৯-এর স্কোরারের চেয়ে এখানে তা বেশি গুরুত্বপূর্ণ: মার্জিনের ধারাক্রম প্রকাশিত বিবরণী থেকেই গড়তে হবে, মতামত তৈরির আগেই — কারণ শেয়ারটি পছন্দ হয়ে যাওয়ার পর এই প্রতিটি অনুপাতকেই আলাদা করে যুক্তি দিয়ে সরিয়ে দেওয়া যায়।

চারটি ব্যবহারিক টীকা।

**১২ সারির আগে ৬ সারি দেখুন।** শিটটি ইচ্ছাকৃতভাবে এমনভাবে সাজানো যাতে পরিচালন মুনাফা নিট মুনাফার আট সারি ওপরে বসে। B12 ও C12 অভিন্ন থাকা অবস্থায় B6 ও C6 যদি সাত গুণ আলাদা হয়, তবে আবিষ্কারটি আপনার হয়ে গেছে এবং বাকি ত্রিশটি সারি কেবল তা পরিমাপ করে।

**২৩ সারিই মুখস্থ রাখার একক ঘর।** ১.০-এর নিচে মান অনুপাত মানে নিট মুনাফা পরিচালন মুনাফাকে ছাড়িয়ে গেছে — যা পাটিগাণিতিকভাবে অসম্ভব, যদি না অ-পরিচালন আয় সম্মিলিত সুদ ও করের বিল ছাড়িয়ে যায়। এখানে আরোগ্য দেখাচ্ছে **১.৫৪** এবং রূপালী **০.২৩**।

**২৬ থেকে ২৮ সারি হলো সেই সংশোধন যা বাজার করে না।** পুনরাবৃত্ত EPS কেবল এককালীন লাভটি সরায়, আর কিছু নয়। B28 দেখাচ্ছে **৬.৫০**; C28 দেখাচ্ছে **−০.৭৫**। এই দুটি ঘরই গোটা অধ্যায়।

**প্রতি কোম্পানির জন্য নয়, প্রতি বছরের জন্য একটি কলাম যোগ করুন।** এক বছরের ধারাক্রম একটি আলোকচিত্র। তিন বছরে ১.৬, তারপর ১.২, তারপর ০.৪ দেখানো মান অনুপাত এমন কোম্পানির, যার পরিচালন কার্যক্রম ভেঙে পড়ছে অথচ সম্পদ-বিক্রয় EPS ধরে রেখেছে — এবং বিক্রি করার মতো সম্পদ ফুরিয়ে যাওয়ার দুই বছর আগেই ঐ প্যাটার্ন দৃশ্যমান।`,
    },

    python: {
      en: `\`\`\`python
"""
Chapter 10 - Income statement quality scorer.
Educational. All figures in BDT crore.
"""
from dataclasses import dataclass
from typing import Dict, List

QUALITY_WEIGHTS: Dict[str, int] = {
    "operating_profit_below_net_profit": 20,
    "one_off_over_20pc_of_pbt": 20,
    "other_income_over_20pc_of_pbt": 15,
    "recurring_pbt_negative": 25,
    "effective_tax_rate_below_10pc": 10,
    "receivables_outgrowing_revenue": 10,
}


@dataclass
class IncomeStatement:
    """One audited statement of profit or loss, read from the top line down."""
    name: str
    revenue: float
    cogs: float
    operating_expenses: float
    other_income: float
    one_off_gain: float
    finance_cost: float
    tax_expense: float
    shares_crore: float
    diluted_shares_crore: float

    revenue_prior: float
    receivables: float
    receivables_prior: float

    @property
    def gross_profit(self) -> float:
        return self.revenue - self.cogs

    @property
    def operating_profit(self) -> float:
        return self.gross_profit - self.operating_expenses

    @property
    def pbt(self) -> float:
        return (self.operating_profit + self.other_income
                + self.one_off_gain - self.finance_cost)

    @property
    def net_profit(self) -> float:
        return self.pbt - self.tax_expense

    @property
    def gross_margin_pct(self) -> float:
        return self.gross_profit / self.revenue * 100

    @property
    def operating_margin_pct(self) -> float:
        return self.operating_profit / self.revenue * 100

    @property
    def net_margin_pct(self) -> float:
        return self.net_profit / self.revenue * 100

    @property
    def eps_basic(self) -> float:
        return self.net_profit / self.shares_crore

    @property
    def eps_diluted(self) -> float:
        return self.net_profit / self.diluted_shares_crore

    @property
    def effective_tax_rate_pct(self) -> float:
        return self.tax_expense / self.pbt * 100

    @property
    def quality_ratio(self) -> float:
        """Operating profit divided by net profit. Below 1.0 means the bottom
        line was assembled below the operating line."""
        return self.operating_profit / self.net_profit

    @property
    def other_income_pct_of_pbt(self) -> float:
        return self.other_income / self.pbt * 100

    @property
    def one_off_pct_of_pbt(self) -> float:
        return self.one_off_gain / self.pbt * 100

    @property
    def recurring_pbt(self) -> float:
        return self.pbt - self.one_off_gain

    @property
    def recurring_net_profit(self) -> float:
        return self.recurring_pbt - self.tax_expense

    @property
    def recurring_eps(self) -> float:
        return self.recurring_net_profit / self.shares_crore

    @property
    def revenue_growth_pct(self) -> float:
        return (self.revenue / self.revenue_prior - 1) * 100

    @property
    def receivable_growth_pct(self) -> float:
        return (self.receivables / self.receivables_prior - 1) * 100

    @property
    def divergence(self) -> float:
        return self.receivable_growth_pct / self.revenue_growth_pct

    def quality_flags(self) -> List[str]:
        f: List[str] = []
        if self.quality_ratio < 1.0:
            f.append("operating_profit_below_net_profit")
        if self.one_off_pct_of_pbt > 20.0:
            f.append("one_off_over_20pc_of_pbt")
        if self.other_income_pct_of_pbt > 20.0:
            f.append("other_income_over_20pc_of_pbt")
        if self.recurring_pbt < 0:
            f.append("recurring_pbt_negative")
        if self.effective_tax_rate_pct < 10.0:
            f.append("effective_tax_rate_below_10pc")
        if self.divergence > 2.0:
            f.append("receivables_outgrowing_revenue")
        return f

    @property
    def score(self) -> int:
        return sum(QUALITY_WEIGHTS[k] for k in self.quality_flags())

    @property
    def verdict(self) -> str:
        s = self.score
        if s >= 60:
            return "NOT OPERATING EARNINGS"
        if s >= 35:
            return "LOW QUALITY"
        if s >= 15:
            return "MONITOR QUALITY"
        return "OPERATING EARNINGS"


def card(s: IncomeStatement) -> None:
    print(f"--- {s.name} ---")
    print(f"  Revenue                  : {s.revenue:>8.2f} cr")
    print(f"  Gross profit             : {s.gross_profit:>8.2f} cr")
    print(f"  Operating profit         : {s.operating_profit:>8.2f} cr")
    print(f"  Profit before tax        : {s.pbt:>8.2f} cr")
    print(f"  Net profit               : {s.net_profit:>8.2f} cr")
    print(f"  Gross margin             : {s.gross_margin_pct:.2f}%")
    print(f"  Operating margin         : {s.operating_margin_pct:.2f}%")
    print(f"  Net margin               : {s.net_margin_pct:.2f}%")
    print(f"  Effective tax rate       : {s.effective_tax_rate_pct:.2f}%")
    print(f"  EPS basic (BDT)          : {s.eps_basic:.2f}")
    print(f"  EPS diluted (BDT)        : {s.eps_diluted:.2f}")
    print(f"  Operating profit / PAT   : {s.quality_ratio:.2f}x")
    print(f"  Other income % of PBT    : {s.other_income_pct_of_pbt:.2f}%")
    print(f"  One-off % of PBT         : {s.one_off_pct_of_pbt:.2f}%")
    print(f"  Recurring PBT            : {s.recurring_pbt:>8.2f} cr")
    print(f"  Recurring net profit     : {s.recurring_net_profit:>8.2f} cr")
    print(f"  Recurring EPS (BDT)      : {s.recurring_eps:.2f}")
    print(f"  Revenue growth           : {s.revenue_growth_pct:.2f}%")
    print(f"  Receivable growth        : {s.receivable_growth_pct:.2f}%")
    print(f"  Divergence D             : {s.divergence:.2f}")
    print(f"  Flags raised             : {len(s.quality_flags())}")
    for k in s.quality_flags():
        print(f"      [{QUALITY_WEIGHTS[k]:>2}] {k}")
    print(f"  QUALITY SCORE            : {s.score} / 100")
    print(f"  VERDICT                  : {s.verdict}")
    print()


if __name__ == "__main__":
    arogya = IncomeStatement(
        name="Arogya Pharmaceuticals Ltd",
        revenue=800.0, cogs=456.0, operating_expenses=264.0,
        other_income=3.0, one_off_gain=0.0, finance_cost=18.0,
        tax_expense=13.0, shares_crore=8.0, diluted_shares_crore=8.0,
        revenue_prior=720.0, receivables=96.0, receivables_prior=88.0,
    )

    rupali = IncomeStatement(
        name="Rupali Textile Mills Ltd",
        revenue=620.0, cogs=552.0, operating_expenses=56.0,
        other_income=26.0, one_off_gain=58.0, finance_cost=42.0,
        tax_expense=2.0, shares_crore=8.0, diluted_shares_crore=9.2,
        revenue_prior=600.0, receivables=214.0, receivables_prior=140.0,
    )

    meghna = IncomeStatement(
        name="Meghna Power Generation Ltd",
        revenue=1100.0, cogs=869.0, operating_expenses=121.0,
        other_income=34.0, one_off_gain=0.0, finance_cost=46.0,
        tax_expense=4.9, shares_crore=19.0, diluted_shares_crore=19.0,
        revenue_prior=1050.0, receivables=300.0, receivables_prior=210.0,
    )

    print(f"Total weight available   : {sum(QUALITY_WEIGHTS.values())}")
    print()
    for s in (arogya, rupali, meghna):
        card(s)

    print("Side-by-side (Arogya vs Rupali):")
    print(f"  Net profit    : {arogya.net_profit:.2f} cr  vs  {rupali.net_profit:.2f} cr")
    print(f"  Basic EPS     : {arogya.eps_basic:.2f}      vs  {rupali.eps_basic:.2f}")
    print(f"  Net margin    : {arogya.net_margin_pct:.2f}%     vs  {rupali.net_margin_pct:.2f}%")
    print(f"  Operating mgn : {arogya.operating_margin_pct:.2f}%    vs  {rupali.operating_margin_pct:.2f}%")
    print(f"  Recurring EPS : {arogya.recurring_eps:.2f}      vs  {rupali.recurring_eps:.2f}")
    print(f"  Score         : {arogya.score}         vs  {rupali.score}")
\`\`\`

**Expected output:**

\`\`\`
Total weight available   : 100

--- Arogya Pharmaceuticals Ltd ---
  Revenue                  :   800.00 cr
  Gross profit             :   344.00 cr
  Operating profit         :    80.00 cr
  Profit before tax        :    65.00 cr
  Net profit               :    52.00 cr
  Gross margin             : 43.00%
  Operating margin         : 10.00%
  Net margin               : 6.50%
  Effective tax rate       : 20.00%
  EPS basic (BDT)          : 6.50
  EPS diluted (BDT)        : 6.50
  Operating profit / PAT   : 1.54x
  Other income % of PBT    : 4.62%
  One-off % of PBT         : 0.00%
  Recurring PBT            :    65.00 cr
  Recurring net profit     :    52.00 cr
  Recurring EPS (BDT)      : 6.50
  Revenue growth           : 11.11%
  Receivable growth        : 9.09%
  Divergence D             : 0.82
  Flags raised             : 0
  QUALITY SCORE            : 0 / 100
  VERDICT                  : OPERATING EARNINGS

--- Rupali Textile Mills Ltd ---
  Revenue                  :   620.00 cr
  Gross profit             :    68.00 cr
  Operating profit         :    12.00 cr
  Profit before tax        :    54.00 cr
  Net profit               :    52.00 cr
  Gross margin             : 10.97%
  Operating margin         : 1.94%
  Net margin               : 8.39%
  Effective tax rate       : 3.70%
  EPS basic (BDT)          : 6.50
  EPS diluted (BDT)        : 5.65
  Operating profit / PAT   : 0.23x
  Other income % of PBT    : 48.15%
  One-off % of PBT         : 107.41%
  Recurring PBT            :    -4.00 cr
  Recurring net profit     :    -6.00 cr
  Recurring EPS (BDT)      : -0.75
  Revenue growth           : 3.33%
  Receivable growth        : 52.86%
  Divergence D             : 15.86
  Flags raised             : 6
      [20] operating_profit_below_net_profit
      [20] one_off_over_20pc_of_pbt
      [15] other_income_over_20pc_of_pbt
      [25] recurring_pbt_negative
      [10] effective_tax_rate_below_10pc
      [10] receivables_outgrowing_revenue
  QUALITY SCORE            : 100 / 100
  VERDICT                  : NOT OPERATING EARNINGS

--- Meghna Power Generation Ltd ---
  Revenue                  :  1100.00 cr
  Gross profit             :   231.00 cr
  Operating profit         :   110.00 cr
  Profit before tax        :    98.00 cr
  Net profit               :    93.10 cr
  Gross margin             : 21.00%
  Operating margin         : 10.00%
  Net margin               : 8.46%
  Effective tax rate       : 5.00%
  EPS basic (BDT)          : 4.90
  EPS diluted (BDT)        : 4.90
  Operating profit / PAT   : 1.18x
  Other income % of PBT    : 34.69%
  One-off % of PBT         : 0.00%
  Recurring PBT            :    98.00 cr
  Recurring net profit     :    93.10 cr
  Recurring EPS (BDT)      : 4.90
  Revenue growth           : 4.76%
  Receivable growth        : 42.86%
  Divergence D             : 9.00
  Flags raised             : 3
      [15] other_income_over_20pc_of_pbt
      [10] effective_tax_rate_below_10pc
      [10] receivables_outgrowing_revenue
  QUALITY SCORE            : 35 / 100
  VERDICT                  : LOW QUALITY

Side-by-side (Arogya vs Rupali):
  Net profit    : 52.00 cr  vs  52.00 cr
  Basic EPS     : 6.50      vs  6.50
  Net margin    : 6.50%     vs  8.39%
  Operating mgn : 10.00%    vs  1.94%
  Recurring EPS : 6.50      vs  -0.75
  Score         : 0         vs  100
\`\`\`

**Meghna Power is the case worth studying.** It is a real archetype: a listed independent power producer with a contracted tariff, a 21% gross margin exactly where the sector sits, a 10% operating margin identical to Arogya's, and no one-off gains at all. Its recurring PBT is a healthy BDT 98 crore. Nothing about it resembles Rupali.

It still scores 35 — LOW QUALITY — on three flags that share one cause.

**BDT 34 crore of its BDT 98 crore pre-tax profit is other income**, and that other income is contractual interest accruing on overdue capacity payments from a state offtaker. **Receivables grew 42.86% on revenue growth of 4.76%**, which is the same fact stated from the balance sheet. And the **5.00% effective tax rate** is a sector exemption with a stated expiry.

**None of these is misconduct and none is hidden. Together they say the same thing three times: this company's earnings depend on not being paid, and on a tax rate that ends.** Strip the interest-on-arrears and apply the statutory rate, and the EPS that supports the share price is materially lower.

That is what a quality score is for. Rupali announces itself in one line. Meghna requires the arithmetic.

Run the same object against three consecutive years. **A quality ratio falling from 1.6 to 1.2 to 0.4 is worth more than any single year's verdict** — it is the sequence in which a company stops being an operating business and starts being a disposal programme.`,
      bn: `\`\`\`python
"""
অধ্যায় ১০ — আয় বিবরণীর মান স্কোরার।
শিক্ষামূলক। সব সংখ্যা কোটি টাকায়।
"""
from dataclasses import dataclass
from typing import Dict, List

QUALITY_WEIGHTS: Dict[str, int] = {
    "operating_profit_below_net_profit": 20,
    "one_off_over_20pc_of_pbt": 20,
    "other_income_over_20pc_of_pbt": 15,
    "recurring_pbt_negative": 25,
    "effective_tax_rate_below_10pc": 10,
    "receivables_outgrowing_revenue": 10,
}


@dataclass
class IncomeStatement:
    """একটি নিরীক্ষিত লাভ-লোকসান বিবরণী, ওপরের লাইন থেকে নিচে পঠিত।"""
    name: str
    revenue: float
    cogs: float
    operating_expenses: float
    other_income: float
    one_off_gain: float
    finance_cost: float
    tax_expense: float
    shares_crore: float
    diluted_shares_crore: float

    revenue_prior: float
    receivables: float
    receivables_prior: float

    @property
    def gross_profit(self) -> float:
        return self.revenue - self.cogs

    @property
    def operating_profit(self) -> float:
        return self.gross_profit - self.operating_expenses

    @property
    def pbt(self) -> float:
        return (self.operating_profit + self.other_income
                + self.one_off_gain - self.finance_cost)

    @property
    def net_profit(self) -> float:
        return self.pbt - self.tax_expense

    @property
    def gross_margin_pct(self) -> float:
        return self.gross_profit / self.revenue * 100

    @property
    def operating_margin_pct(self) -> float:
        return self.operating_profit / self.revenue * 100

    @property
    def net_margin_pct(self) -> float:
        return self.net_profit / self.revenue * 100

    @property
    def eps_basic(self) -> float:
        return self.net_profit / self.shares_crore

    @property
    def eps_diluted(self) -> float:
        return self.net_profit / self.diluted_shares_crore

    @property
    def effective_tax_rate_pct(self) -> float:
        return self.tax_expense / self.pbt * 100

    @property
    def quality_ratio(self) -> float:
        """পরিচালন মুনাফা ভাগ নিট মুনাফা। ১.০-এর নিচে মানে তলার সারিটি
        পরিচালন লাইনের নিচে গড়া হয়েছে।"""
        return self.operating_profit / self.net_profit

    @property
    def other_income_pct_of_pbt(self) -> float:
        return self.other_income / self.pbt * 100

    @property
    def one_off_pct_of_pbt(self) -> float:
        return self.one_off_gain / self.pbt * 100

    @property
    def recurring_pbt(self) -> float:
        return self.pbt - self.one_off_gain

    @property
    def recurring_net_profit(self) -> float:
        return self.recurring_pbt - self.tax_expense

    @property
    def recurring_eps(self) -> float:
        return self.recurring_net_profit / self.shares_crore

    @property
    def revenue_growth_pct(self) -> float:
        return (self.revenue / self.revenue_prior - 1) * 100

    @property
    def receivable_growth_pct(self) -> float:
        return (self.receivables / self.receivables_prior - 1) * 100

    @property
    def divergence(self) -> float:
        return self.receivable_growth_pct / self.revenue_growth_pct

    def quality_flags(self) -> List[str]:
        f: List[str] = []
        if self.quality_ratio < 1.0:
            f.append("operating_profit_below_net_profit")
        if self.one_off_pct_of_pbt > 20.0:
            f.append("one_off_over_20pc_of_pbt")
        if self.other_income_pct_of_pbt > 20.0:
            f.append("other_income_over_20pc_of_pbt")
        if self.recurring_pbt < 0:
            f.append("recurring_pbt_negative")
        if self.effective_tax_rate_pct < 10.0:
            f.append("effective_tax_rate_below_10pc")
        if self.divergence > 2.0:
            f.append("receivables_outgrowing_revenue")
        return f

    @property
    def score(self) -> int:
        return sum(QUALITY_WEIGHTS[k] for k in self.quality_flags())

    @property
    def verdict(self) -> str:
        s = self.score
        if s >= 60:
            return "NOT OPERATING EARNINGS"
        if s >= 35:
            return "LOW QUALITY"
        if s >= 15:
            return "MONITOR QUALITY"
        return "OPERATING EARNINGS"


def card(s: IncomeStatement) -> None:
    print(f"--- {s.name} ---")
    print(f"  Revenue                  : {s.revenue:>8.2f} cr")
    print(f"  Gross profit             : {s.gross_profit:>8.2f} cr")
    print(f"  Operating profit         : {s.operating_profit:>8.2f} cr")
    print(f"  Profit before tax        : {s.pbt:>8.2f} cr")
    print(f"  Net profit               : {s.net_profit:>8.2f} cr")
    print(f"  Gross margin             : {s.gross_margin_pct:.2f}%")
    print(f"  Operating margin         : {s.operating_margin_pct:.2f}%")
    print(f"  Net margin               : {s.net_margin_pct:.2f}%")
    print(f"  Effective tax rate       : {s.effective_tax_rate_pct:.2f}%")
    print(f"  EPS basic (BDT)          : {s.eps_basic:.2f}")
    print(f"  EPS diluted (BDT)        : {s.eps_diluted:.2f}")
    print(f"  Operating profit / PAT   : {s.quality_ratio:.2f}x")
    print(f"  Other income % of PBT    : {s.other_income_pct_of_pbt:.2f}%")
    print(f"  One-off % of PBT         : {s.one_off_pct_of_pbt:.2f}%")
    print(f"  Recurring PBT            : {s.recurring_pbt:>8.2f} cr")
    print(f"  Recurring net profit     : {s.recurring_net_profit:>8.2f} cr")
    print(f"  Recurring EPS (BDT)      : {s.recurring_eps:.2f}")
    print(f"  Revenue growth           : {s.revenue_growth_pct:.2f}%")
    print(f"  Receivable growth        : {s.receivable_growth_pct:.2f}%")
    print(f"  Divergence D             : {s.divergence:.2f}")
    print(f"  Flags raised             : {len(s.quality_flags())}")
    for k in s.quality_flags():
        print(f"      [{QUALITY_WEIGHTS[k]:>2}] {k}")
    print(f"  QUALITY SCORE            : {s.score} / 100")
    print(f"  VERDICT                  : {s.verdict}")
    print()


if __name__ == "__main__":
    arogya = IncomeStatement(
        name="Arogya Pharmaceuticals Ltd",
        revenue=800.0, cogs=456.0, operating_expenses=264.0,
        other_income=3.0, one_off_gain=0.0, finance_cost=18.0,
        tax_expense=13.0, shares_crore=8.0, diluted_shares_crore=8.0,
        revenue_prior=720.0, receivables=96.0, receivables_prior=88.0,
    )

    rupali = IncomeStatement(
        name="Rupali Textile Mills Ltd",
        revenue=620.0, cogs=552.0, operating_expenses=56.0,
        other_income=26.0, one_off_gain=58.0, finance_cost=42.0,
        tax_expense=2.0, shares_crore=8.0, diluted_shares_crore=9.2,
        revenue_prior=600.0, receivables=214.0, receivables_prior=140.0,
    )

    meghna = IncomeStatement(
        name="Meghna Power Generation Ltd",
        revenue=1100.0, cogs=869.0, operating_expenses=121.0,
        other_income=34.0, one_off_gain=0.0, finance_cost=46.0,
        tax_expense=4.9, shares_crore=19.0, diluted_shares_crore=19.0,
        revenue_prior=1050.0, receivables=300.0, receivables_prior=210.0,
    )

    print(f"Total weight available   : {sum(QUALITY_WEIGHTS.values())}")
    print()
    for s in (arogya, rupali, meghna):
        card(s)

    print("Side-by-side (Arogya vs Rupali):")
    print(f"  Net profit    : {arogya.net_profit:.2f} cr  vs  {rupali.net_profit:.2f} cr")
    print(f"  Basic EPS     : {arogya.eps_basic:.2f}      vs  {rupali.eps_basic:.2f}")
    print(f"  Net margin    : {arogya.net_margin_pct:.2f}%     vs  {rupali.net_margin_pct:.2f}%")
    print(f"  Operating mgn : {arogya.operating_margin_pct:.2f}%    vs  {rupali.operating_margin_pct:.2f}%")
    print(f"  Recurring EPS : {arogya.recurring_eps:.2f}      vs  {rupali.recurring_eps:.2f}")
    print(f"  Score         : {arogya.score}         vs  {rupali.score}")
\`\`\`

**প্রত্যাশিত ফলাফল:**

\`\`\`
Total weight available   : 100

--- Arogya Pharmaceuticals Ltd ---
  Revenue                  :   800.00 cr
  Gross profit             :   344.00 cr
  Operating profit         :    80.00 cr
  Profit before tax        :    65.00 cr
  Net profit               :    52.00 cr
  Gross margin             : 43.00%
  Operating margin         : 10.00%
  Net margin               : 6.50%
  Effective tax rate       : 20.00%
  EPS basic (BDT)          : 6.50
  EPS diluted (BDT)        : 6.50
  Operating profit / PAT   : 1.54x
  Other income % of PBT    : 4.62%
  One-off % of PBT         : 0.00%
  Recurring PBT            :    65.00 cr
  Recurring net profit     :    52.00 cr
  Recurring EPS (BDT)      : 6.50
  Revenue growth           : 11.11%
  Receivable growth        : 9.09%
  Divergence D             : 0.82
  Flags raised             : 0
  QUALITY SCORE            : 0 / 100
  VERDICT                  : OPERATING EARNINGS

--- Rupali Textile Mills Ltd ---
  Revenue                  :   620.00 cr
  Gross profit             :    68.00 cr
  Operating profit         :    12.00 cr
  Profit before tax        :    54.00 cr
  Net profit               :    52.00 cr
  Gross margin             : 10.97%
  Operating margin         : 1.94%
  Net margin               : 8.39%
  Effective tax rate       : 3.70%
  EPS basic (BDT)          : 6.50
  EPS diluted (BDT)        : 5.65
  Operating profit / PAT   : 0.23x
  Other income % of PBT    : 48.15%
  One-off % of PBT         : 107.41%
  Recurring PBT            :    -4.00 cr
  Recurring net profit     :    -6.00 cr
  Recurring EPS (BDT)      : -0.75
  Revenue growth           : 3.33%
  Receivable growth        : 52.86%
  Divergence D             : 15.86
  Flags raised             : 6
      [20] operating_profit_below_net_profit
      [20] one_off_over_20pc_of_pbt
      [15] other_income_over_20pc_of_pbt
      [25] recurring_pbt_negative
      [10] effective_tax_rate_below_10pc
      [10] receivables_outgrowing_revenue
  QUALITY SCORE            : 100 / 100
  VERDICT                  : NOT OPERATING EARNINGS

--- Meghna Power Generation Ltd ---
  Revenue                  :  1100.00 cr
  Gross profit             :   231.00 cr
  Operating profit         :   110.00 cr
  Profit before tax        :    98.00 cr
  Net profit               :    93.10 cr
  Gross margin             : 21.00%
  Operating margin         : 10.00%
  Net margin               : 8.46%
  Effective tax rate       : 5.00%
  EPS basic (BDT)          : 4.90
  EPS diluted (BDT)        : 4.90
  Operating profit / PAT   : 1.18x
  Other income % of PBT    : 34.69%
  One-off % of PBT         : 0.00%
  Recurring PBT            :    98.00 cr
  Recurring net profit     :    93.10 cr
  Recurring EPS (BDT)      : 4.90
  Revenue growth           : 4.76%
  Receivable growth        : 42.86%
  Divergence D             : 9.00
  Flags raised             : 3
      [15] other_income_over_20pc_of_pbt
      [10] effective_tax_rate_below_10pc
      [10] receivables_outgrowing_revenue
  QUALITY SCORE            : 35 / 100
  VERDICT                  : LOW QUALITY

Side-by-side (Arogya vs Rupali):
  Net profit    : 52.00 cr  vs  52.00 cr
  Basic EPS     : 6.50      vs  6.50
  Net margin    : 6.50%     vs  8.39%
  Operating mgn : 10.00%    vs  1.94%
  Recurring EPS : 6.50      vs  -0.75
  Score         : 0         vs  100
\`\`\`

**মেঘনা পাওয়ারই অধ্যয়নের যোগ্য কেসটি।** এটি একটি বাস্তব আদর্শরূপ: চুক্তিবদ্ধ ট্যারিফসহ একটি তালিকাভুক্ত স্বাধীন বিদ্যুৎ উৎপাদক, খাত যেখানে বসে ঠিক সেখানেই ২১% মোট মার্জিন, আরোগ্যের সঙ্গে অভিন্ন ১০% পরিচালন মার্জিন, এবং কোনো এককালীন লাভই নেই। এর পুনরাবৃত্ত PBT স্বাস্থ্যকর ৯৮ কোটি টাকা। রূপালীর সঙ্গে এর কোনো কিছুরই মিল নেই।

তবু এটি তিনটি পতাকায় ৩৫ স্কোর করে — LOW QUALITY — এবং তিনটির কারণ একটিই।

**এর ৯৮ কোটি টাকা করপূর্ব মুনাফার ৩৪ কোটিই অন্যান্য আয়**, আর ঐ অন্যান্য আয় হলো এক রাষ্ট্রীয় ক্রেতার বকেয়া ক্যাপাসিটি পেমেন্টে জমতে থাকা চুক্তিবদ্ধ সুদ। **৪.৭৬% রাজস্ব প্রবৃদ্ধিতে প্রাপ্য বেড়েছে ৪২.৮৬%**, যা স্থিতিপত্র থেকে বলা একই ঘটনা। আর **৫.০০% কার্যকর করহার** হলো ঘোষিত মেয়াদোত্তীর্ণের তারিখসহ একটি খাতভিত্তিক অব্যাহতি।

**এর কোনোটিই অসদাচরণ নয় এবং কোনোটিই লুকানো নয়। একসঙ্গে এরা একই কথা তিনবার বলে: এই কোম্পানির আয় নির্ভর করে টাকা না পাওয়ার ওপর, এবং এমন এক করহারের ওপর যা শেষ হয়ে যাবে।** বকেয়ার সুদ সরিয়ে বিধিবদ্ধ হার প্রয়োগ করলে শেয়ারমূল্যকে যে EPS ধরে রেখেছে তা উল্লেখযোগ্যভাবে কম।

মান-স্কোরের কাজ এটাই। রূপালী এক লাইনেই নিজের ঘোষণা দেয়। মেঘনার জন্য পাটিগণিত লাগে।

একই অবজেক্ট পরপর তিন বছরে চালান। **১.৬ থেকে ১.২ হয়ে ০.৪-এ নেমে আসা মান অনুপাত যেকোনো এক বছরের সিদ্ধান্তের চেয়ে মূল্যবান** — এটিই সেই ধারা যাতে একটি কোম্পানি পরিচালন ব্যবসা হওয়া বন্ধ করে একটি সম্পদ-বিক্রয় কর্মসূচি হয়ে ওঠে।`,
    },

    mistakes: {
      en: `1. **Reading net profit first.** It is the last line for a reason: it has absorbed every financing decision, every tax exemption and every disposal above it. Start at revenue, or at minimum at operating profit. **EPS is where the analysis ends, not where it begins.**
2. **Treating net margin as a statement about operations.** Net margin can be raised by a tax holiday, a land sale or an unrealised currency gain without a single unit of extra output. Rupali's net margin exceeds Arogya's while its operating margin is one fifth. Use gross and operating margin for the business; use net margin only against the same company's own history.
3. **Comparing gross margins across companies without checking the COGS definition.** Some DSE issuers park factory depreciation and overhead in administrative expenses. Gross margin inflates, operating margin deflates, and the comparison is meaningless. Read the note before you rank two companies.
4. **Ignoring other income because it is "small".** It is only small relative to revenue. Express it against **profit before tax**, where a BDT 26 crore line against BDT 54 crore of PBT is 48% of the year. The denominator determines whether you see the problem.
5. **Applying a P/E to a year containing a one-off gain.** A disposal is worth its own value once. Capitalising it at ten times is the single most expensive arithmetic error a retail investor makes on the DSE, and it is committed every time a company sells land.
6. **Accepting management's "exceptional item" label.** A cost that appears in three consecutive years is not exceptional; it is the cost structure. Conversely, a gain management buries inside "other operating income" rather than disclosing separately is still non-recurring. **You classify the item, not the company.**
7. **Quoting basic EPS when diluted is disclosed.** IAS 33 requires both, printed side by side on the face of the statement. A 13% gap between them is 13% of your future claim on earnings. Screeners and newspapers carry basic; that is a reason to check, not a reason to follow.
8. **Reading a low effective tax rate as management skill.** It is almost always an exemption with an expiry, a concessional capital-gains assessment, or a deferred-tax entry. Ask what next year's EPS looks like at the statutory rate. The company knows; the note states the expiry.
9. **Assuming revenue growth is revenue.** Under IFRS 15 the timing of recognition is a judgement within limits, and gross-versus-net presentation can multiply reported revenue without changing a single contract. Check receivables and check whether the presentation basis changed. Chapter 11 will check the cash.
10. **Believing an unqualified audit opinion means the earnings are of good quality.** Chapter 9's warning applies here in reverse. Every figure in Rupali's statement is correct, audited and unqualified. **Accuracy and quality are different properties, and the auditor only signs for the first.**`,
      bn: `১. **আগে নিট মুনাফা পড়া।** এটি শেষ লাইন হওয়ার কারণ আছে: এটি ওপরের প্রতিটি অর্থায়ন সিদ্ধান্ত, প্রতিটি কর অব্যাহতি ও প্রতিটি সম্পদ-বিক্রয় শুষে নিয়েছে। রাজস্ব থেকে শুরু করুন, নিদেনপক্ষে পরিচালন মুনাফা থেকে। **EPS হলো যেখানে বিশ্লেষণ শেষ হয়, শুরু নয়।**
২. **নিট মার্জিনকে পরিচালন কার্যক্রম সম্পর্কে বক্তব্য ভাবা।** এক ইউনিট বাড়তি উৎপাদন ছাড়াই কর অবকাশ, জমি বিক্রয় বা অবাস্তবায়িত মুদ্রা-লাভ নিট মার্জিন বাড়াতে পারে। রূপালীর পরিচালন মার্জিন আরোগ্যের এক-পঞ্চমাংশ, অথচ নিট মার্জিন বেশি। ব্যবসার জন্য মোট ও পরিচালন মার্জিন ব্যবহার করুন; নিট মার্জিন কেবল একই কোম্পানির নিজের ইতিহাসের বিপরীতে।
৩. **COGS-এর সংজ্ঞা না দেখে কোম্পানিভেদে মোট মার্জিন তুলনা করা।** কিছু ডিএসই ইস্যুয়ার কারখানার অবচয় ও ওভারহেড প্রশাসনিক ব্যয়ে রাখে। মোট মার্জিন ফোলে, পরিচালন মার্জিন চুপসায়, আর তুলনাটি অর্থহীন হয়ে যায়। দুটি কোম্পানির ক্রম নির্ধারণের আগে টীকা পড়ুন।
৪. **অন্যান্য আয় "ছোট" বলে উপেক্ষা করা।** এটি কেবল রাজস্বের তুলনায় ছোট। একে **করপূর্ব মুনাফার** বিপরীতে প্রকাশ করুন, যেখানে ৫৪ কোটি PBT-র বিপরীতে ২৬ কোটির লাইন মানে বছরের ৪৮%। আপনি সমস্যাটি দেখতে পাবেন কি না তা হরই নির্ধারণ করে।
৫. **এককালীন লাভযুক্ত বছরে P/E প্রয়োগ করা।** একটি সম্পদ-বিক্রয় একবারের জন্য নিজের মূল্যেরই। একে দশ গুণে রূপান্তর করা ডিএসই-তে খুচরা বিনিয়োগকারীর একক সবচেয়ে ব্যয়বহুল পাটিগাণিতিক ভুল, এবং যতবার কোনো কোম্পানি জমি বেচে ততবারই এটি ঘটে।
৬. **ব্যবস্থাপনার "ব্যতিক্রমী খাত" তকমা মেনে নেওয়া।** পরপর তিন বছর আসা ব্যয় ব্যতিক্রমী নয়; সেটাই ব্যয়কাঠামো। উল্টোভাবে, ব্যবস্থাপনা যে লাভ পৃথকভাবে না দেখিয়ে "অন্যান্য পরিচালন আয়"-এর ভেতরে পুঁতে রাখে তা তবু অনিয়মিতই। **খাতটির শ্রেণিবিন্যাস আপনি করবেন, কোম্পানি নয়।**
৭. **প্রলঘুকৃত EPS প্রকাশিত থাকা সত্ত্বেও মৌলিক EPS উদ্ধৃত করা।** IAS 33 দুটিই বাধ্যতামূলক করে, বিবরণীর মুখে পাশাপাশি ছাপা। এদের মধ্যে ১৩% ব্যবধান মানে আয়ের ওপর আপনার ভবিষ্যৎ দাবির ১৩%। স্ক্রিনার ও সংবাদপত্র মৌলিকটি বহন করে; এটি যাচাই করার কারণ, অনুসরণ করার কারণ নয়।
৮. **কম কার্যকর করহারকে ব্যবস্থাপনার দক্ষতা হিসেবে পড়া।** এটি প্রায় সবসময়ই মেয়াদসহ একটি অব্যাহতি, একটি রেয়াতি মূলধনী-লাভ নির্ধারণ, বা একটি বিলম্বিত-কর এন্ট্রি। জিজ্ঞেস করুন বিধিবদ্ধ হারে আগামী বছরের EPS কেমন দেখাবে। কোম্পানি জানে; টীকা মেয়াদটি বলে দেয়।
৯. **রাজস্ব প্রবৃদ্ধিকেই রাজস্ব ভাবা।** IFRS 15-এর অধীনে স্বীকৃতির সময় সীমার মধ্যে একটি বিচার, আর গ্রস-বনাম-নেট উপস্থাপন একটিও চুক্তি না বদলে ঘোষিত রাজস্ব বহুগুণ করতে পারে। প্রাপ্য দেখুন, এবং উপস্থাপনের ভিত্তি বদলেছে কি না দেখুন। অধ্যায় ১১ নগদ দেখবে।
১০. **অযোগ্যতাহীন নিরীক্ষা মতামত মানেই আয়ের মান ভালো — এমন ধরে নেওয়া।** অধ্যায় ৯-এর সতর্কবার্তা এখানে উল্টোভাবে খাটে। রূপালীর বিবরণীর প্রতিটি সংখ্যা সঠিক, নিরীক্ষিত ও অযোগ্যতাহীন। **নির্ভুলতা ও মান ভিন্ন বৈশিষ্ট্য, এবং নিরীক্ষক কেবল প্রথমটির জন্যই স্বাক্ষর করেন।**`,
    },

    tips: {
      en: `- **Compute operating margin and $Q$ before you look at EPS, every time.** Two divisions, four numbers from the face of the statement. If $Q < 1$, you are finished — the rest of the analysis is documentation, not discovery.
- **Interest coverage is the ninety-second test of this chapter.** Operating profit divided by finance cost. Below 1.0, the reported profit cannot have come from operations. Chapter 9 gave you the auditor's opinion as a ninety-second filter; this is the income-statement equivalent.
- **Always express other income and one-off gains against PBT, never against revenue.** Against revenue everything looks small. Against PBT, Rupali's other income is 48% of the year and its land gain is 107%.
- **Do the recurring-earnings subtraction before you compute any multiple.** PBT minus one-offs. It takes one line and it is the difference between +6.50 and −0.75.
- **Read the tax note for the expiry date, not the rate.** A 5% effective rate tells you nothing on its own. "Exemption expires 30 June next year" tells you what EPS will be.
- **Check whether diluted EPS is printed, and check the gap.** It is directly beneath basic EPS on the face of the statement. If the gap is more than a few percent, find the instrument in the notes and read its conversion terms.
- **Compare gross margin to the sector band, not to last year.** A textile at 35% or a pharma at 18% is an accounting question before it is a performance question.
- **Build the waterfall for three consecutive years of one company you already own, tonight.** Watch operating margin and $Q$ across the three. Level tells you little. **Direction tells you almost everything**, and it is visible long before the disposals run out.`,
      bn: `- **প্রতিবারই EPS দেখার আগে পরিচালন মার্জিন ও $Q$ গণনা করুন।** দুটি ভাগ, বিবরণীর মুখ থেকে চারটি সংখ্যা। $Q < 1$ হলে আপনার কাজ শেষ — বাকি বিশ্লেষণ নথিভুক্তকরণ, আবিষ্কার নয়।
- **সুদ আচ্ছাদনই এই অধ্যায়ের নব্বই সেকেন্ডের পরীক্ষা।** পরিচালন মুনাফা ভাগ অর্থায়ন ব্যয়। ১.০-এর নিচে হলে ঘোষিত মুনাফা পরিচালন থেকে আসা সম্ভব নয়। অধ্যায় ৯ আপনাকে নব্বই সেকেন্ডের ছাঁকনি হিসেবে নিরীক্ষকের মতামত দিয়েছিল; এটি তার আয়-বিবরণী সংস্করণ।
- **অন্যান্য আয় ও এককালীন লাভ সবসময় PBT-র বিপরীতে প্রকাশ করুন, কখনো রাজস্বের বিপরীতে নয়।** রাজস্বের বিপরীতে সবকিছুই ছোট দেখায়। PBT-র বিপরীতে রূপালীর অন্যান্য আয় বছরের ৪৮% এবং জমির লাভ ১০৭%।
- **কোনো গুণিতক গণনার আগে পুনরাবৃত্ত-আয়ের বিয়োগটি করুন।** PBT বিয়োগ এককালীন খাত। এক লাইনেই হয়, আর এটাই +৬.৫০ ও −০.৭৫-এর পার্থক্য।
- **কর টীকা পড়ুন হারের জন্য নয়, মেয়াদোত্তীর্ণের তারিখের জন্য।** একা ৫% কার্যকর হার কিছুই বলে না। "অব্যাহতি আগামী ৩০ জুন শেষ হবে" বলে দেয় EPS কী হবে।
- **প্রলঘুকৃত EPS ছাপা আছে কি না দেখুন, এবং ব্যবধানটি দেখুন।** এটি বিবরণীর মুখে মৌলিক EPS-এর ঠিক নিচেই থাকে। ব্যবধান কয়েক শতাংশের বেশি হলে টীকায় উপকরণটি খুঁজে তার রূপান্তর শর্ত পড়ুন।
- **মোট মার্জিন তুলনা করুন খাতের সীমার সঙ্গে, গত বছরের সঙ্গে নয়।** ৩৫%-এ একটি বস্ত্রকল বা ১৮%-এ একটি ওষুধ কোম্পানি কর্মক্ষমতার প্রশ্ন হওয়ার আগে একটি হিসাবগত প্রশ্ন।
- **আজ রাতেই আপনার মালিকানাধীন একটি কোম্পানির পরপর তিন বছরের ধারাক্রম তৈরি করুন।** তিনটি বছর জুড়ে পরিচালন মার্জিন ও $Q$ দেখুন। স্তর সামান্যই বলে। **দিক প্রায় সবকিছুই বলে**, এবং বিক্রি করার মতো সম্পদ ফুরানোর অনেক আগেই তা দৃশ্যমান।`,
    },

    exercises: {
      en: `1. Take the latest annual report of any DSE-listed pharmaceutical company and any DSE-listed textile company. Build the full waterfall for both: revenue, COGS, gross profit, operating expenses, operating profit, other income, finance cost, PBT, tax, PAT. Compute all three margins for each. Write one sentence stating which margin differs most and why that is structural rather than managerial.
2. For the same two companies, compute interest coverage $IC = OP / F$. Which one works principally for its lenders? If either is below 1.0, state where the reported profit came from and cite the line.
3. Find a DSE-listed company whose most recent annual report contains a gain on disposal of property, plant or equipment. Compute $G / PBT$. Then compute recurring PBT, recurring PAT and recurring EPS. Compare recurring EPS to the EPS the company announced through DSE. What was the difference in taka?
4. For any three listed companies, compute the quality ratio $Q = OP / PAT$. Rank them. Then check your ranking against reported EPS growth. Where the two rankings disagree, read the other-income note and write down which line explains the disagreement.
5. Take one DSE company with an effective tax rate below 10%. Find the tax note. Identify the cause — exemption, concessional rate, or deferred tax — and the expiry date if one is stated. Recompute EPS at the statutory rate for its category. By what percentage does EPS fall?
6. Find a listed company that reports diluted EPS materially below basic EPS. Compute the overhang percentage. Locate the dilutive instrument in the notes. Who holds it, on what terms, and at what conversion price?
7. For any one company, compute revenue growth and trade-receivable growth for the last three years and tabulate $D$ for each year. If $D > 2$ in any year, read the revenue-recognition accounting policy note and state which of the four timing mechanisms in this chapter is most consistent with the disclosure.
8. Build the quality scorer in a spreadsheet. Score three companies you hold or are considering. Then score each of them again using the prior year's annual report. **Report the change in score, not the level** — and write one sentence on what a rising score would have told you a year early.`,
      bn: `১. যেকোনো ডিএসই-তালিকাভুক্ত ওষুধ কোম্পানি ও যেকোনো ডিএসই-তালিকাভুক্ত বস্ত্র কোম্পানির সর্বশেষ বার্ষিক প্রতিবেদন নিন। দুটির জন্যই সম্পূর্ণ ধারাক্রম তৈরি করুন: রাজস্ব, COGS, মোট মুনাফা, পরিচালন ব্যয়, পরিচালন মুনাফা, অন্যান্য আয়, অর্থায়ন ব্যয়, PBT, কর, PAT। প্রত্যেকের তিনটি মার্জিনই গণনা করুন। এক বাক্যে লিখুন কোন মার্জিনটি সবচেয়ে বেশি আলাদা এবং কেন তা ব্যবস্থাপনাগত নয়, কাঠামোগত।
২. একই দুটি কোম্পানির জন্য সুদ আচ্ছাদন $IC = OP / F$ গণনা করুন। কোনটি প্রধানত তার ঋণদাতাদের জন্য কাজ করছে? কোনোটি ১.০-এর নিচে হলে বলুন ঘোষিত মুনাফা কোথা থেকে এসেছে এবং লাইনটি উল্লেখ করুন।
৩. এমন একটি ডিএসই-তালিকাভুক্ত কোম্পানি খুঁজুন যার সাম্প্রতিকতম বার্ষিক প্রতিবেদনে সম্পত্তি, প্ল্যান্ট বা যন্ত্রপাতি বিক্রয়ের লাভ আছে। $G / PBT$ গণনা করুন। তারপর পুনরাবৃত্ত PBT, পুনরাবৃত্ত PAT ও পুনরাবৃত্ত EPS গণনা করুন। কোম্পানি ডিএসই-র মাধ্যমে যে EPS ঘোষণা করেছিল তার সঙ্গে পুনরাবৃত্ত EPS তুলনা করুন। টাকায় পার্থক্য কত?
৪. যেকোনো তিনটি তালিকাভুক্ত কোম্পানির মান অনুপাত $Q = OP / PAT$ গণনা করুন। ক্রম নির্ধারণ করুন। তারপর আপনার ক্রম ঘোষিত EPS প্রবৃদ্ধির সঙ্গে মিলিয়ে দেখুন। যেখানে দুটি ক্রম মেলে না, সেখানে অন্যান্য আয়ের টীকা পড়ুন এবং লিখুন কোন লাইনটি অমিলটি ব্যাখ্যা করে।
৫. ১০%-এর নিচে কার্যকর করহারের একটি ডিএসই কোম্পানি নিন। কর টীকা খুঁজুন। কারণ শনাক্ত করুন — অব্যাহতি, রেয়াতি হার, নাকি বিলম্বিত কর — এবং মেয়াদোত্তীর্ণের তারিখ উল্লেখ থাকলে তা-ও। তার শ্রেণির বিধিবদ্ধ হারে EPS পুনর্গণনা করুন। EPS কত শতাংশ কমে?
৬. এমন একটি তালিকাভুক্ত কোম্পানি খুঁজুন যার প্রলঘুকৃত EPS মৌলিক EPS-এর চেয়ে উল্লেখযোগ্যভাবে কম। বোঝার শতাংশ গণনা করুন। টীকায় প্রলঘুকারী উপকরণটি খুঁজুন। এটি কে ধারণ করেন, কোন শর্তে, এবং কোন রূপান্তর মূল্যে?
৭. যেকোনো একটি কোম্পানির শেষ তিন বছরের রাজস্ব প্রবৃদ্ধি ও বাণিজ্যিক প্রাপ্যের প্রবৃদ্ধি গণনা করে প্রতি বছরের $D$ ছক করুন। কোনো বছরে $D > 2$ হলে রাজস্ব স্বীকৃতির হিসাবনীতি টীকা পড়ুন এবং বলুন এই অধ্যায়ের চারটি সময়-কৌশলের কোনটি ঐ প্রকাশের সঙ্গে সবচেয়ে সঙ্গতিপূর্ণ।
৮. স্প্রেডশিটে মান-স্কোরারটি বানান। আপনি ধারণ করছেন বা বিবেচনা করছেন এমন তিনটি কোম্পানির স্কোর করুন। তারপর আগের বছরের বার্ষিক প্রতিবেদন দিয়ে প্রত্যেকটির আবার স্কোর করুন। **স্তর নয়, স্কোরের পরিবর্তনটি জানান** — এবং এক বাক্যে লিখুন বাড়তে থাকা স্কোর এক বছর আগে আপনাকে কী বলত।`,
    },

    summary: {
      en: `- The income statement is a **waterfall of subtractions**, and each subtotal answers a different question. Gross profit describes the product, operating profit describes the business, and everything below the operating line describes the balance sheet, the tax office and the calendar. **The further down you read, the less the number is about the company.**
- Under **IFRS 15 as adopted**, revenue is recognised when control transfers — and *control* is where discretion lives. Channel stuffing, bill-and-hold, gross-versus-net presentation and percentage-of-completion judgement all shift revenue in time. **All four leave the same trace: receivables growing faster than revenue.**
- **Gross margin is set by industry structure; operating margin by management; net margin by the balance sheet and the tax authority.** Sector bands on the DSE are stable and diagnostic — pharma ৪০–৫০%, textile ৮–১৫%. A company far outside its band is an accounting question first.
- **Other income is the most under-examined line in a Bangladeshi income statement.** Measure it against PBT, not revenue. Above ~20% you are valuing a manufacturer stapled to an investment fund. The DSE archetypes: the textile mill living on FDR interest and sister-company rent, and the IPP earning contractual interest on unpaid BPDB bills — **income earned by not being paid**.
- **A one-off gain is worth its own value once, and must never be multiplied.** Compute $PBT_{rec} = PBT - G$ before any P/E. A positive reported PBT with a negative recurring PBT is not a profitable year; it is a disposal.
- **Effective tax rate = tax ÷ PBT.** A rate near zero is an exemption with an expiry, a concessional capital-gains assessment, or a deferred-tax entry. Read the note for the expiry date, then ask what EPS looks like at the statutory rate.
- **Diluted EPS is the honest number.** IAS 33 requires it beside basic EPS on the face of the statement; the gap is the share of future earnings already committed to somebody else. Screeners print basic.
- **The quality ratio $Q = OP / PAT$ is the chapter's central diagnostic**, because $Q < 1 \\iff O + G > F + T$ — non-operating income exceeded the combined lender and tax bill, which cannot happen to a normal industrial company.
- The worked example: two companies, both **BDT 52 crore net profit, both EPS 6.50, both P/E 10.0, both unqualified audit opinions** — scoring **0 versus 100**. One has interest coverage of 4.44× and recurring EPS of 6.50; the other has coverage of 0.29× and recurring EPS of **−0.75**. Chapter 9's checks cleared both.
- **Discipline established:** compute operating margin, interest coverage and $Q$ before you ever look at EPS. Net profit is a subtotal that the market treats as a conclusion — it has absorbed the financing, the tax exemption and the land sale, and it reports them as though they were the business. The rows that tell the two companies apart are all printed above it, in the part of the page nobody reads.`,
      bn: `- আয় বিবরণী হলো **বিয়োগের একটি ধারাক্রম**, এবং প্রতিটি উপযোগফল ভিন্ন প্রশ্নের উত্তর দেয়। মোট মুনাফা পণ্যের বর্ণনা দেয়, পরিচালন মুনাফা ব্যবসার বর্ণনা দেয়, আর পরিচালন লাইনের নিচের সবকিছু স্থিতিপত্র, কর দপ্তর ও পঞ্জিকার বর্ণনা দেয়। **যত নিচে পড়বেন, সংখ্যাটি তত কম কোম্পানিকে নিয়ে।**
- **গৃহীত IFRS 15** অনুযায়ী নিয়ন্ত্রণ হস্তান্তরিত হলে রাজস্ব স্বীকৃত হয় — আর *নিয়ন্ত্রণ*-এই বিবেচনার অবকাশ বাস করে। চ্যানেল স্টাফিং, বিল-অ্যান্ড-হোল্ড, গ্রস-বনাম-নেট উপস্থাপন ও সম্পূর্ণতা-শতাংশের বিচার — সবই রাজস্বকে সময়ে সরায়। **চারটিই একই চিহ্ন রেখে যায়: রাজস্বের চেয়ে দ্রুত বাড়া প্রাপ্য।**
- **মোট মার্জিন নির্ধারণ করে শিল্পকাঠামো; পরিচালন মার্জিন ব্যবস্থাপনা; নিট মার্জিন স্থিতিপত্র ও কর কর্তৃপক্ষ।** ডিএসই-তে খাতভিত্তিক সীমাগুলো স্থিতিশীল ও রোগনির্ণায়ক — ওষুধ ৪০–৫০%, বস্ত্র ৮–১৫%। নিজের সীমার অনেক বাইরের কোম্পানি আগে একটি হিসাবগত প্রশ্ন।
- **বাংলাদেশি আয় বিবরণীর সবচেয়ে কম পরীক্ষিত লাইন অন্যান্য আয়।** একে রাজস্ব নয়, PBT-র বিপরীতে মাপুন। ~২০%-এর ওপরে আপনি একটি বিনিয়োগ তহবিল স্ট্যাপল করা উৎপাদক মূল্যায়ন করছেন। ডিএসই আদর্শরূপ: এফডিআর সুদ ও সহোদর প্রতিষ্ঠানের ভাড়ায় বেঁচে থাকা বস্ত্রকল, এবং বিপিডিবি-র অপরিশোধিত বিলে চুক্তিবদ্ধ সুদ আয় করা আইপিপি — **টাকা না পাওয়ার মাধ্যমে অর্জিত আয়**।
- **এককালীন লাভ একবারের জন্য নিজের মূল্যেরই, এবং একে কখনোই গুণ করা চলবে না।** যেকোনো P/E-র আগে $PBT_{rec} = PBT - G$ গণনা করুন। ধনাত্মক ঘোষিত PBT-র সঙ্গে ঋণাত্মক পুনরাবৃত্ত PBT কোনো লাভজনক বছর নয়; এটি একটি সম্পদ-বিক্রয়।
- **কার্যকর করহার = কর ÷ PBT।** শূন্যের কাছাকাছি হার মানে মেয়াদসহ একটি অব্যাহতি, একটি রেয়াতি মূলধনী-লাভ নির্ধারণ, বা একটি বিলম্বিত-কর এন্ট্রি। মেয়াদোত্তীর্ণের তারিখের জন্য টীকা পড়ুন, তারপর জিজ্ঞেস করুন বিধিবদ্ধ হারে EPS কেমন দেখায়।
- **প্রলঘুকৃত EPS-ই সৎ সংখ্যা।** IAS 33 এটি বিবরণীর মুখে মৌলিক EPS-এর পাশে বাধ্যতামূলক করে; ব্যবধানটি ভবিষ্যৎ আয়ের সেই অংশ যা ইতিমধ্যে অন্য কারো প্রতিশ্রুত। স্ক্রিনার ছাপে মৌলিক।
- **মান অনুপাত $Q = OP / PAT$ এই অধ্যায়ের কেন্দ্রীয় রোগনির্ণায়ক**, কারণ $Q < 1 \\iff O + G > F + T$ — অ-পরিচালন আয় ঋণদাতা ও করের সম্মিলিত বিল ছাড়িয়ে গেছে, যা একটি স্বাভাবিক শিল্পপ্রতিষ্ঠানের ক্ষেত্রে ঘটতে পারে না।
- কার্যকরী উদাহরণ: দুটি কোম্পানি, দুটিরই **৫২ কোটি টাকা নিট মুনাফা, দুটিরই EPS ৬.৫০, দুটিরই P/E ১০.০, দুটিরই অযোগ্যতাহীন নিরীক্ষা মতামত** — স্কোর **০ বনাম ১০০**। একটির সুদ আচ্ছাদন ৪.৪৪× ও পুনরাবৃত্ত EPS ৬.৫০; অন্যটির আচ্ছাদন ০.২৯× ও পুনরাবৃত্ত EPS **−০.৭৫**। অধ্যায় ৯-এর পরীক্ষাগুলো দুটিকেই ছাড় দিয়েছিল।
- **প্রতিষ্ঠিত শৃঙ্খলা:** EPS দেখার আগেই পরিচালন মার্জিন, সুদ আচ্ছাদন ও $Q$ গণনা করুন। নিট মুনাফা একটি উপযোগফল যাকে বাজার সিদ্ধান্ত হিসেবে গণ্য করে — এটি অর্থায়ন, কর অব্যাহতি ও জমি বিক্রয় শুষে নিয়েছে এবং সেগুলোকে এমনভাবে দেখাচ্ছে যেন ওগুলোই ব্যবসা। দুটি কোম্পানিকে আলাদা করে দেওয়া সারিগুলো সবই এর ওপরে ছাপা, পাতার সেই অংশে যেখানে কেউ পড়ে না।`,
    },
  },

  interview: [
    {
      q: {
        en: 'Two companies report the same net profit and the same EPS. What single ratio would you compute first?',
        bn: 'দুটি কোম্পানি একই নিট মুনাফা ও একই EPS ঘোষণা করেছে। আপনি প্রথমে কোন একটি অনুপাত গণনা করবেন?',
      },
      a: {
        en: 'Operating profit divided by net profit — the quality ratio. Because net profit equals operating profit plus other income plus one-offs less finance cost and tax, the ratio can only fall below 1.0 when non-operating income exceeds the combined lender and tax bill. For a normal leveraged industrial company that cannot happen, so a reading below 1.0 proves the bottom line was assembled below the operating line. In this chapter one company reads 1.54× and the other 0.23× on identical net profit of BDT 52 crore. **If I could have a second ratio it would be interest coverage** — operating profit over finance cost — because below 1.0 the operations did not even cover the interest.',
        bn: 'পরিচালন মুনাফা ভাগ নিট মুনাফা — মান অনুপাত। যেহেতু নিট মুনাফা = পরিচালন মুনাফা যোগ অন্যান্য আয় যোগ এককালীন খাত বিয়োগ অর্থায়ন ব্যয় ও কর, অনুপাতটি কেবল তখনই ১.০-এর নিচে নামতে পারে যখন অ-পরিচালন আয় ঋণদাতা ও করের সম্মিলিত বিল ছাড়িয়ে যায়। স্বাভাবিক ঋণভারগ্রস্ত শিল্পপ্রতিষ্ঠানের ক্ষেত্রে তা ঘটতে পারে না, তাই ১.০-এর নিচের পাঠ প্রমাণ করে তলার সারিটি পরিচালন লাইনের নিচে গড়া হয়েছে। এই অধ্যায়ে অভিন্ন ৫২ কোটি টাকা নিট মুনাফায় একটি দেখায় ১.৫৪× এবং অন্যটি ০.২৩×। **দ্বিতীয় একটি অনুপাত পেলে তা হতো সুদ আচ্ছাদন** — পরিচালন মুনাফা ভাগ অর্থায়ন ব্যয় — কারণ ১.০-এর নিচে পরিচালন কার্যক্রম সুদটাই আচ্ছাদন করেনি।',
      },
    },
    {
      q: {
        en: 'Why is gross margin more informative than net margin when comparing two companies?',
        bn: 'দুটি কোম্পানি তুলনা করার সময় নিট মার্জিনের চেয়ে মোট মার্জিন কেন বেশি তথ্যবহুল?',
      },
      a: {
        en: 'Because gross margin is set by industry structure and pricing power, while net margin has absorbed leverage, tax exemptions and any disposal that happened to occur that year. A pharma company sits at 40–50% and an export textile at 8–15% for reasons management cannot change in a year. Net margin can be raised without producing a single extra unit — Chapter 10\'s worked example has a textile mill reporting a higher net margin than a branded pharmaceutical company while its operating margin is one fifth. The caveat is that gross margin is only comparable where COGS is defined the same way; some DSE issuers park factory depreciation in administrative expenses, which inflates gross margin and deflates operating margin. **Read the note before ranking two companies on it.**',
        bn: 'কারণ মোট মার্জিন নির্ধারণ করে শিল্পকাঠামো ও মূল্যনির্ধারণ ক্ষমতা, অথচ নিট মার্জিন লিভারেজ, কর অব্যাহতি এবং ঐ বছর ঘটে যাওয়া যেকোনো সম্পদ-বিক্রয় শুষে নিয়েছে। একটি ওষুধ কোম্পানি ৪০–৫০%-এ আর রপ্তানিমুখী বস্ত্র ৮–১৫%-এ বসে এমন কারণে যা ব্যবস্থাপনা এক বছরে বদলাতে পারে না। এক ইউনিট বাড়তি উৎপাদন ছাড়াই নিট মার্জিন বাড়ানো যায় — অধ্যায় ১০-এর কার্যকরী উদাহরণে একটি বস্ত্রকল ব্র্যান্ডেড ওষুধ কোম্পানির চেয়ে বেশি নিট মার্জিন ঘোষণা করছে, অথচ তার পরিচালন মার্জিন এক-পঞ্চমাংশ। সতর্কতা হলো, মোট মার্জিন কেবল তখনই তুলনীয় যখন COGS একইভাবে সংজ্ঞায়িত; কিছু ডিএসই ইস্যুয়ার কারখানার অবচয় প্রশাসনিক ব্যয়ে রাখে, যা মোট মার্জিন ফোলায় ও পরিচালন মার্জিন চুপসায়। **এর ভিত্তিতে দুটি কোম্পানির ক্রম নির্ধারণের আগে টীকা পড়ুন।**',
      },
    },
    {
      q: {
        en: 'A company\'s other income is 45% of profit before tax. Is that a problem?',
        bn: 'একটি কোম্পানির অন্যান্য আয় করপূর্ব মুনাফার ৪৫%। এটি কি সমস্যা?',
      },
      a: {
        en: 'It is not impropriety — other income is disclosed and legitimate — but it changes what you are buying. Above roughly 20% of PBT you are no longer valuing a manufacturer; you are valuing a manufacturer stapled to a small investment portfolio, and paying a manufacturer\'s multiple for it. The two questions are whether it recurs and whether it arrives as cash. Interest on a fixed deposit does both. An unrealised foreign-exchange gain does neither reliably and reverses. **The specifically Bangladeshi cases are the textile mill whose profit is FDR interest plus rent from a shed leased to a sister concern, and the independent power producer accruing contractual interest on overdue BPDB capacity payments — income that grows precisely as collection deteriorates.**',
        bn: 'এটি অনুচিত কিছু নয় — অন্যান্য আয় প্রকাশিত ও বৈধ — কিন্তু এটি বদলে দেয় আপনি কী কিনছেন। PBT-র মোটামুটি ২০%-এর ওপরে আপনি আর কোনো উৎপাদক মূল্যায়ন করছেন না; আপনি একটি ছোট বিনিয়োগ পোর্টফোলিও স্ট্যাপল করা উৎপাদক মূল্যায়ন করছেন, এবং তার জন্য উৎপাদকের গুণিতক দিচ্ছেন। দুটি প্রশ্ন: এটি কি পুনরাবৃত্ত হয়, এবং তা কি নগদ হয়ে আসে? স্থায়ী আমানতের সুদ দুটিই করে। অবাস্তবায়িত বৈদেশিক মুদ্রা লাভ নির্ভরযোগ্যভাবে কোনোটিই করে না এবং উল্টে যায়। **বিশেষভাবে বাংলাদেশি কেসগুলো হলো সেই বস্ত্রকল যার মুনাফা এফডিআর সুদ ও সহোদর প্রতিষ্ঠানকে ভাড়া দেওয়া শেডের ভাড়া, এবং সেই স্বাধীন বিদ্যুৎ উৎপাদক যে বিপিডিবি-র বকেয়া ক্যাপাসিটি পেমেন্টে চুক্তিবদ্ধ সুদ জমা করে — এমন আয় যা আদায় যত খারাপ হয় ঠিক ততই বাড়ে।**',
      },
    },
    {
      q: {
        en: 'How do you treat a large gain on sale of land in a valuation?',
        bn: 'মূল্যায়নে জমি বিক্রয়ের বড় লাভকে আপনি কীভাবে গণ্য করেন?',
      },
      a: {
        en: 'You subtract it before computing anything. Recurring PBT equals reported PBT less non-recurring items, and only that figure may be multiplied. A disposal gain of BDT 58 crore is worth BDT 58 crore once — it is not worth ten times that, which is exactly what happens when the market applies an unadjusted P/E to the year it occurs. **The decisive case is a company whose reported PBT is positive while its recurring PBT is negative: it did not have a profitable year, it had a disposal that covered an operating loss.** In this chapter that company reports EPS of 6.50 and recurring EPS of −0.75 from the same audited accounts. Also watch the reverse error — a cost management labels "exceptional" in three consecutive years is not exceptional, it is the cost structure.',
        bn: 'কিছু গণনার আগেই আপনি এটি বিয়োগ করবেন। পুনরাবৃত্ত PBT = ঘোষিত PBT বিয়োগ অনিয়মিত খাত, এবং কেবল ঐ সংখ্যাটিকেই গুণ করা যায়। ৫৮ কোটি টাকার বিক্রয়-লাভ একবারের জন্য ৫৮ কোটি টাকারই — এটি তার দশ গুণ মূল্যের নয়, অথচ ঐ বছরে অসমন্বিত P/E প্রয়োগ করলে বাজার ঠিক তা-ই করে। **নির্ণায়ক কেসটি হলো যে কোম্পানির ঘোষিত PBT ধনাত্মক অথচ পুনরাবৃত্ত PBT ঋণাত্মক: তার লাভজনক বছর যায়নি, তার একটি সম্পদ-বিক্রয় হয়েছে যা একটি পরিচালন লোকসান ঢেকেছে।** এই অধ্যায়ে ঐ কোম্পানিটি একই নিরীক্ষিত হিসাব থেকে ৬.৫০ EPS ও −০.৭৫ পুনরাবৃত্ত EPS দেখায়। উল্টো ভুলটিও লক্ষ রাখুন — পরপর তিন বছর ব্যবস্থাপনা যাকে "ব্যতিক্রমী" বলে সেটি ব্যতিক্রমী নয়, সেটাই ব্যয়কাঠামো।',
      },
    },
    {
      q: {
        en: 'What is the difference between basic and diluted EPS, and which do you use?',
        bn: 'মৌলিক ও প্রলঘুকৃত EPS-এর পার্থক্য কী, এবং আপনি কোনটি ব্যবহার করেন?',
      },
      a: {
        en: 'Basic EPS divides profit attributable to ordinary shareholders by the weighted average number of ordinary shares. Diluted EPS, under IAS 33, restates the denominator to include every instrument that could become an ordinary share — convertible preference shares, convertible bonds, options, warrants — with the numerator adjusted upward for interest that would no longer be paid where a convertible bond is involved. **I use diluted, because it is the honest description of my future claim on earnings.** A company reporting basic EPS of 6.50 against diluted EPS of 5.65 is disclosing that 13% of that claim already belongs to somebody who has not yet converted. Both figures are required on the face of the statement; Bangladeshi screeners and newspapers carry only basic, which is a reason to check rather than a reason to follow.',
        bn: 'মৌলিক EPS সাধারণ শেয়ারহোল্ডারদের প্রাপ্য মুনাফাকে ভারযুক্ত গড় সাধারণ শেয়ারসংখ্যা দিয়ে ভাগ করে। IAS 33 অনুযায়ী প্রলঘুকৃত EPS হরটিকে এমনভাবে পুনর্বিবৃত করে যাতে সাধারণ শেয়ারে রূপান্তরযোগ্য প্রতিটি উপকরণ ঢোকে — রূপান্তরযোগ্য অগ্রাধিকার শেয়ার, রূপান্তরযোগ্য বন্ড, অপশন, ওয়ারেন্ট — আর রূপান্তরযোগ্য বন্ড জড়িত থাকলে লবটিও সেই সুদ দিয়ে বাড়ানো হয় যা আর দিতে হতো না। **আমি প্রলঘুকৃতটি ব্যবহার করি, কারণ আয়ের ওপর আমার ভবিষ্যৎ দাবির সৎ বর্ণনা সেটিই।** ৬.৫০ মৌলিক ও ৫.৬৫ প্রলঘুকৃত EPS ঘোষণাকারী কোম্পানি প্রকাশ করছে যে ঐ দাবির ১৩% ইতিমধ্যেই এমন কারো, যিনি এখনো রূপান্তর করেননি। দুটিই বিবরণীর মুখে বাধ্যতামূলক; বাংলাদেশি স্ক্রিনার ও সংবাদপত্র কেবল মৌলিকটি বহন করে, যা অনুসরণ করার নয়, যাচাই করার কারণ।',
      },
    },
    {
      q: {
        en: 'A listed company reports an effective tax rate of 4%. What do you conclude?',
        bn: 'একটি তালিকাভুক্ত কোম্পানি ৪% কার্যকর করহার ঘোষণা করেছে। আপনি কী সিদ্ধান্তে আসেন?',
      },
      a: {
        en: 'That the current EPS is a policy artefact rather than an earnings level, and that the tax note will say when it ends. In Bangladesh the usual causes are a sector tax holiday with a stated expiry, capital gains assessed at a concessional rate — which is why a year dominated by a land sale can show a rate near 4% — or a deferred-tax movement such as recognising a deferred tax asset on accumulated losses, which raises net profit though no tax was ever saved. **None of these is a competitive advantage the company possesses; each is a description of something temporary.** The working question is what next year\'s EPS looks like at the statutory rate for the company\'s category. If that figure is materially lower, the market is capitalising an exemption and calling it earnings.',
        bn: 'যে বর্তমান EPS কোনো আয়ের স্তর নয়, একটি নীতিগত কৃত্রিমতা, এবং কর টীকা বলে দেবে এটি কখন শেষ হবে। বাংলাদেশে সাধারণ কারণগুলো হলো ঘোষিত মেয়াদসহ একটি খাতভিত্তিক কর অবকাশ, রেয়াতি হারে নির্ধারিত মূলধনী লাভ — যে কারণে জমি বিক্রয়-প্রধান একটি বছরে ৪%-এর কাছাকাছি হার দেখাতে পারে — অথবা বিলম্বিত করের নড়াচড়া, যেমন সঞ্চিত লোকসানের ওপর বিলম্বিত কর সম্পদের স্বীকৃতি, যা নিট মুনাফা বাড়ায় যদিও কোনো কর কখনো সাশ্রয় হয়নি। **এর কোনোটিই কোম্পানির অধিকারে থাকা প্রতিযোগিতামূলক সুবিধা নয়; প্রতিটিই সাময়িক কিছুর বর্ণনা।** কার্যকর প্রশ্নটি হলো কোম্পানির শ্রেণির বিধিবদ্ধ হারে আগামী বছরের EPS কেমন দেখাবে। ঐ সংখ্যা উল্লেখযোগ্যভাবে কম হলে বাজার একটি অব্যাহতিকে গুণিতকে রূপান্তর করে তাকে আয় বলে ডাকছে।',
      },
    },
  ],

  quiz: [
    {
      q: {
        en: 'Which subtotal is the last one that belongs entirely to the business itself?',
        bn: 'কোন উপযোগফলটি শেষ, যা সম্পূর্ণভাবে ব্যবসাটিরই?',
      },
      options: {
        en: ['Gross profit', 'Operating profit', 'Profit before tax', 'Net profit'],
        bn: ['মোট মুনাফা', 'পরিচালন মুনাফা', 'করপূর্ব মুনাফা', 'নিট মুনাফা'],
      },
      answer: 1,
    },
    {
      q: {
        en: 'Under which standard, as adopted in Bangladesh, is revenue recognised when control transfers to the customer?',
        bn: 'বাংলাদেশে গৃহীত কোন মান অনুযায়ী গ্রাহকের কাছে নিয়ন্ত্রণ হস্তান্তরিত হলে রাজস্ব স্বীকৃত হয়?',
      },
      options: { en: ['IAS 24', 'IAS 33', 'IFRS 15', 'IAS 37'], bn: ['IAS 24', 'IAS 33', 'IFRS 15', 'IAS 37'] },
      answer: 2,
    },
    {
      q: {
        en: 'A company reports operating profit of BDT 12 crore and net profit of BDT 52 crore. The quality ratio is:',
        bn: 'একটি কোম্পানির পরিচালন মুনাফা ১২ কোটি টাকা ও নিট মুনাফা ৫২ কোটি টাকা। মান অনুপাত হলো:',
      },
      options: {
        en: ['4.33×, which is healthy', '0.23×, meaning profit was assembled below the operating line', '1.00×, which is neutral', 'Undefined without the tax rate'],
        bn: ['৪.৩৩×, যা স্বাস্থ্যকর', '০.২৩×, অর্থাৎ মুনাফা পরিচালন লাইনের নিচে গড়া হয়েছে', '১.০০×, যা নিরপেক্ষ', 'করহার ছাড়া অনির্ণেয়'],
      },
      answer: 1,
    },
    {
      q: {
        en: 'Operating profit BDT 12 crore, finance cost BDT 42 crore. Interest coverage is:',
        bn: 'পরিচালন মুনাফা ১২ কোটি টাকা, অর্থায়ন ব্যয় ৪২ কোটি টাকা। সুদ আচ্ছাদন হলো:',
      },
      options: {
        en: ['3.50×', '0.29×', '1.29×', '0.71×'],
        bn: ['৩.৫০×', '০.২৯×', '১.২৯×', '০.৭১×'],
      },
      answer: 1,
    },
    {
      q: {
        en: 'PBT is BDT 54 crore and includes a one-off land-sale gain of BDT 58 crore. Recurring PBT is:',
        bn: 'PBT ৫৪ কোটি টাকা এবং এতে ৫৮ কোটি টাকার এককালীন জমি-বিক্রয় লাভ অন্তর্ভুক্ত। পুনরাবৃত্ত PBT হলো:',
      },
      options: {
        en: ['BDT 112 crore', 'BDT 58 crore', '−BDT 4 crore', 'BDT 54 crore'],
        bn: ['১১২ কোটি টাকা', '৫৮ কোটি টাকা', '−৪ কোটি টাকা', '৫৪ কোটি টাকা'],
      },
      answer: 2,
    },
    {
      q: {
        en: 'Diluted EPS is required to be presented by:',
        bn: 'প্রলঘুকৃত EPS উপস্থাপন বাধ্যতামূলক করে:',
      },
      options: { en: ['IAS 33', 'IAS 24', 'IFRS 15', 'BSA 570'], bn: ['IAS 33', 'IAS 24', 'IFRS 15', 'BSA 570'] },
      answer: 0,
    },
    {
      q: {
        en: 'Net profit BDT 52 crore, 8 crore basic shares, 9.2 crore diluted shares. Diluted EPS is:',
        bn: 'নিট মুনাফা ৫২ কোটি টাকা, মৌলিক শেয়ার ৮ কোটি, প্রলঘুকৃত শেয়ার ৯.২ কোটি। প্রলঘুকৃত EPS হলো:',
      },
      options: {
        en: ['BDT 6.50', 'BDT 5.65', 'BDT 5.20', 'BDT 7.48'],
        bn: ['৬.৫০ টাকা', '৫.৬৫ টাকা', '৫.২০ টাকা', '৭.৪৮ টাকা'],
      },
      answer: 1,
    },
    {
      q: {
        en: 'Which of these is the correct reason a low effective tax rate matters?',
        bn: 'কম কার্যকর করহার কেন গুরুত্বপূর্ণ — এর সঠিক কারণ কোনটি?',
      },
      options: {
        en: [
          'It shows management negotiates well with the NBR',
          'It is usually an exemption, concessional rate or deferred-tax entry with a limited life, so current EPS is not a sustainable level',
          'It means the company is loss-making',
          'It has no analytical significance',
        ],
        bn: [
          'এটি দেখায় ব্যবস্থাপনা এনবিআর-এর সঙ্গে ভালো দরকষাকষি করে',
          'এটি সাধারণত সীমিত মেয়াদের অব্যাহতি, রেয়াতি হার বা বিলম্বিত-কর এন্ট্রি, তাই বর্তমান EPS টেকসই স্তর নয়',
          'এর মানে কোম্পানিটি লোকসানে আছে',
          'এর কোনো বিশ্লেষণী তাৎপর্য নেই',
        ],
      },
      answer: 1,
    },
    {
      q: {
        en: 'Revenue grew 3.33% while trade receivables grew 52.86%. The divergence $D$ is approximately:',
        bn: 'রাজস্ব বেড়েছে ৩.৩৩% আর বাণিজ্যিক প্রাপ্য বেড়েছে ৫২.৮৬%। বিচ্যুতি $D$ প্রায়:',
      },
      options: {
        en: ['0.06', '1.59', '15.86', '49.53'],
        bn: ['০.০৬', '১.৫৯', '১৫.৮৬', '৪৯.৫৩'],
      },
      answer: 2,
    },
    {
      q: {
        en: 'A textile mill reports a higher net margin than a branded pharmaceutical company while its gross margin is one quarter of the pharma\'s. The correct conclusion is:',
        bn: 'একটি বস্ত্রকল ব্র্যান্ডেড ওষুধ কোম্পানির চেয়ে বেশি নিট মার্জিন ঘোষণা করছে, অথচ তার মোট মার্জিন ওষুধ কোম্পানির এক-চতুর্থাংশ। সঠিক সিদ্ধান্ত হলো:',
      },
      options: {
        en: [
          'The textile mill is the better business on the evidence of net margin',
          'The net margin was created below the operating line and does not describe the operations',
          'The gross margins must have been misreported',
          'Net margin and gross margin always move together, so one figure is wrong',
        ],
        bn: [
          'নিট মার্জিনের প্রমাণে বস্ত্রকলটিই ভালো ব্যবসা',
          'নিট মার্জিনটি পরিচালন লাইনের নিচে তৈরি হয়েছে এবং পরিচালন কার্যক্রমের বর্ণনা দেয় না',
          'মোট মার্জিনগুলো নিশ্চয়ই ভুলভাবে প্রতিবেদিত',
          'নিট ও মোট মার্জিন সবসময় একসঙ্গে চলে, তাই একটি সংখ্যা ভুল',
        ],
      },
      answer: 1,
    },
  ],
};
