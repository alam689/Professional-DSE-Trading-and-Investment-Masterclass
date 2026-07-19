/**
 * Chapter 16 — Efficiency & Activity Ratios
 * Part II, Fundamental Analysis.
 */

export default {
  n: 16,
  tools: [],

  excelSheet: {
    filename: 'ch16-activity-trend.xlsx',
    sheetName: 'Activity Trend',
    cells: [
      { cell: 'A1', v: 'SONALI TEXTILE MILLS LTD — activity trend (BDT crore)' },

      { cell: 'B2', v: 'FY2022' }, { cell: 'C2', v: 'FY2023' }, { cell: 'D2', v: 'FY2024' },

      { cell: 'A3', v: 'Revenue' }, { cell: 'B3', v: 900 }, { cell: 'C3', v: 920 }, { cell: 'D3', v: 940 },
      { cell: 'A4', v: 'Cost of Goods Sold' }, { cell: 'B4', v: 720 }, { cell: 'C4', v: 748 }, { cell: 'D4', v: 768 },
      { cell: 'A5', v: 'Net Profit' }, { cell: 'B5', v: 45 }, { cell: 'C5', v: 27.6 }, { cell: 'D5', v: 9.4 },

      { cell: 'A6', v: 'Avg Total Assets' }, { cell: 'B6', v: 1000 }, { cell: 'C6', v: 1150 }, { cell: 'D6', v: 1300 },
      { cell: 'A7', v: 'Avg Net Fixed Assets' }, { cell: 'B7', v: 600 }, { cell: 'C7', v: 620 }, { cell: 'D7', v: 640 },
      { cell: 'A8', v: 'Avg Inventory' }, { cell: 'B8', v: 120 }, { cell: 'C8', v: 187 }, { cell: 'D8', v: 320 },
      { cell: 'A9', v: 'Avg Receivables' }, { cell: 'B9', v: 150 }, { cell: 'C9', v: 205 }, { cell: 'D9', v: 290 },
      { cell: 'A10', v: 'Avg Payables' }, { cell: 'B10', v: 96 }, { cell: 'C10', v: 110 }, { cell: 'D10', v: 160 },
      { cell: 'A11', v: 'Avg Current Assets' }, { cell: 'B11', v: 380 }, { cell: 'C11', v: 480 }, { cell: 'D11', v: 650 },
      { cell: 'A12', v: 'Avg Current Liabilities' }, { cell: 'B12', v: 180 }, { cell: 'C12', v: 210 }, { cell: 'D12', v: 300 },

      { cell: 'A14', v: 'Asset Turnover (x)' },
      { cell: 'B14', f: 'B3/B6' }, { cell: 'C14', f: 'C3/C6' }, { cell: 'D14', f: 'D3/D6' },
      { cell: 'A15', v: 'Fixed Asset Turnover (x)' },
      { cell: 'B15', f: 'B3/B7' }, { cell: 'C15', f: 'C3/C7' }, { cell: 'D15', f: 'D3/D7' },
      { cell: 'A16', v: 'Inventory Turnover (x)' },
      { cell: 'B16', f: 'B4/B8' }, { cell: 'C16', f: 'C4/C8' }, { cell: 'D16', f: 'D4/D8' },
      { cell: 'A17', v: 'Receivable Turnover (x)' },
      { cell: 'B17', f: 'B3/B9' }, { cell: 'C17', f: 'C3/C9' }, { cell: 'D17', f: 'D3/D9' },
      { cell: 'A18', v: 'Payable Turnover (x)' },
      { cell: 'B18', f: 'B4/B10' }, { cell: 'C18', f: 'C4/C10' }, { cell: 'D18', f: 'D4/D10' },
      { cell: 'A19', v: 'Working Capital Turnover (x)' },
      { cell: 'B19', f: 'B3/(B11-B12)' }, { cell: 'C19', f: 'C3/(C11-C12)' }, { cell: 'D19', f: 'D3/(D11-D12)' },

      { cell: 'A21', v: 'DIO (days)' },
      { cell: 'B21', f: '365/B16' }, { cell: 'C21', f: '365/C16' }, { cell: 'D21', f: '365/D16' },
      { cell: 'A22', v: 'DSO (days)' },
      { cell: 'B22', f: '365/B17' }, { cell: 'C22', f: '365/C17' }, { cell: 'D22', f: '365/D17' },
      { cell: 'A23', v: 'DPO (days)' },
      { cell: 'B23', f: '365/B18' }, { cell: 'C23', f: '365/C18' }, { cell: 'D23', f: '365/D18' },
      { cell: 'A24', v: 'CASH CONVERSION CYCLE (days)' },
      { cell: 'B24', f: 'B21+B22-B23' }, { cell: 'C24', f: 'C21+C22-C23' }, { cell: 'D24', f: 'D21+D22-D23' },

      { cell: 'A26', v: 'Net Margin (%)' },
      { cell: 'B26', f: 'B5/B3*100' }, { cell: 'C26', f: 'C5/C3*100' }, { cell: 'D26', f: 'D5/D3*100' },
      { cell: 'A27', v: 'ROA (%) = NM x AT' },
      { cell: 'B27', f: 'B26*B14' }, { cell: 'C27', f: 'C26*C14' }, { cell: 'D27', f: 'D26*D14' },

      { cell: 'A29', v: 'DIVERGENCE TEST (FY2022 -> FY2024)' },
      { cell: 'A30', v: 'Revenue growth (%)' }, { cell: 'B30', f: '(D3/B3-1)*100' },
      { cell: 'A31', v: 'Receivable growth (%)' }, { cell: 'B31', f: '(D9/B9-1)*100' },
      { cell: 'A32', v: 'AR minus Revenue gap (pp)' }, { cell: 'B32', f: 'B31-B30' },
      { cell: 'A33', v: 'RECEIVABLE FLAG' },
      { cell: 'B33', f: 'IF(B32>50,"SEVERE",IF(B32>15,"WARNING","ok"))' },

      { cell: 'A34', v: 'COGS growth (%)' }, { cell: 'B34', f: '(D4/B4-1)*100' },
      { cell: 'A35', v: 'Inventory growth (%)' }, { cell: 'B35', f: '(D8/B8-1)*100' },
      { cell: 'A36', v: 'Inventory minus COGS gap (pp)' }, { cell: 'B36', f: 'B35-B34' },
      { cell: 'A37', v: 'INVENTORY FLAG' },
      { cell: 'B37', f: 'IF(B36>50,"SEVERE",IF(B36>15,"WARNING","ok"))' },

      { cell: 'A39', v: 'CCC deterioration (days)' }, { cell: 'B39', f: 'D24-B24' },
      { cell: 'A40', v: 'Extra working capital tied up (BDT cr)' },
      { cell: 'B40', f: 'B39/365*D3' },

      { cell: 'A42', v: 'NOTE' },
      { cell: 'B42', v: 'Flat revenue with rising inventory and receivables is not a slow year. It is unsold stock and uncollected cash being carried as assets.' },
    ],
  },

  objectives: {
    en: [
      'Compute asset, fixed asset, inventory, receivable, payable and working capital turnover from published statements.',
      'Convert every turnover ratio into its days form (DIO, DSO, DPO) and assemble the cash conversion cycle.',
      'Use a divergence flag — balance-sheet growth against the flow it should track — to detect the manipulations of Chapter 13.',
      'Explain the identity ROA = net margin × asset turnover and place a business on the margin/turnover map.',
      'Diagnose a three-year deterioration in a DSE textile exporter from ratio trend alone.',
    ],
    bn: [
      'প্রকাশিত বিবরণী থেকে সম্পদ, স্থায়ী সম্পদ, মজুদ, প্রাপ্য, প্রদেয় ও কার্যকরী মূলধন টার্নওভার গণনা করা।',
      'প্রতিটি টার্নওভার অনুপাতকে দিন-রূপে (DIO, DSO, DPO) রূপান্তর করা এবং নগদ রূপান্তর চক্র গঠন করা।',
      'একটি ডাইভারজেন্স ফ্ল্যাগ — স্থিতিপত্রের প্রবৃদ্ধি বনাম যে প্রবাহ তাকে অনুসরণ করার কথা — ব্যবহার করে অধ্যায় ১৩-এর কারসাজি শনাক্ত করা।',
      'ROA = নিট মার্জিন × সম্পদ টার্নওভার এই অভেদ ব্যাখ্যা করা এবং একটি ব্যবসাকে মার্জিন/টার্নওভার মানচিত্রে বসানো।',
      'কেবল অনুপাতের ধারা থেকে একটি ডিএসই বস্ত্র রপ্তানিকারকের তিন বছরের অবনতি নির্ণয় করা।',
    ],
  },

  blocks: {
    theory: {
      en: `Chapter 15 measured how much profit a company makes per taka of sales and per taka of capital. This chapter measures something more basic: **how hard the assets are working.**

An efficiency ratio — also called an activity or turnover ratio — always has the same shape. A **flow** from the income statement on top. A **stock** from the balance sheet on the bottom. The result is a number of times per year.

$$\\text{Turnover} = \\frac{\\text{Flow (a year of activity)}}{\\text{Stock (an average balance)}}$$

The flow must be matched to the stock. Revenue against receivables, because receivables arise from sales. **Cost of goods sold** against inventory, because inventory is carried at cost, not at selling price. Cost of goods sold against payables, because payables arise from purchases. Mismatching the numerator is the single most common technical error in this chapter, and it inflates inventory turnover by whatever the gross margin happens to be.

### The six ratios

**Asset turnover** = revenue ÷ average total assets. Taka of sales generated per taka of assets. The broadest efficiency measure and the one that links directly to ROA.

**Fixed asset turnover** = revenue ÷ average net fixed assets. How productive the plant is. Critical for capital-intensive DSE sectors — textile spinning, cement, power. A falling fixed asset turnover after a capacity expansion means the new plant is not filling.

**Inventory turnover** = COGS ÷ average inventory. How many times the warehouse empties in a year. For a Bangladeshi textile mill this is the single most diagnostic ratio in the accounts.

**Receivable turnover** = revenue ÷ average trade receivables. How many times the debtor book is collected in a year.

**Payable turnover** = COGS ÷ average trade payables. How many times the company pays its suppliers. **Read this one in the opposite direction from the others** — a *falling* payable turnover means the company is taking longer to pay, which conserves cash but signals stress and eventually costs supplier goodwill and credit terms.

**Working capital turnover** = revenue ÷ average working capital, where working capital = current assets − current liabilities. Revenue supported per taka of net short-term capital. Chapter 14 established what working capital is; this ratio asks whether it is earning its keep.

### The days versions

A turnover of 6× is hard to feel. Sixty-one days is not. Divide 365 by the turnover:

$$\\text{DIO} = \\frac{365}{\\text{Inventory Turnover}} \\qquad \\text{DSO} = \\frac{365}{\\text{Receivable Turnover}} \\qquad \\text{DPO} = \\frac{365}{\\text{Payable Turnover}}$$

DIO — days inventory outstanding — is how long goods sit before sale. DSO — days sales outstanding — is how long money sits with the customer after sale. DPO — days payable outstanding — is how long the company sits on the supplier's money.

Combine them:

$$\\text{Cash Conversion Cycle} = \\text{DIO} + \\text{DSO} - \\text{DPO}$$

**This is the number of days the company must finance itself between paying for raw material and being paid for the finished product.** Every day of CCC has to be funded — from equity, from a working capital loan, or by stretching suppliers. A CCC of 73 days means the company is out of pocket for roughly a quarter of the year on every cycle. A CCC of 189 days means it is out of pocket for more than half a year, and on a Bangladeshi working capital facility at 12–14% that is expensive.

### How efficiency ratios catch what Chapter 13 described

Chapter 13 established that revenue can be recognised before cash is collected, and that inventory can be carried at a value the market will not pay. Both manipulations have the same structural signature, and it is visible in the activity ratios before it is visible anywhere else.

**Channel stuffing** — pushing product to distributors at quarter-end to book revenue — raises revenue *and* raises receivables, but it raises receivables more, because none of the stuffed shipments have been paid for. Receivable turnover falls. DSO rises.

**Inventory that has stopped selling** — obsolete stock, unsold finished goods, raw material bought on a price bet that went wrong — sits in the balance sheet at cost until somebody writes it down. Writing it down hits profit, so it does not get written down. Inventory turnover falls. DIO rises.

The test is a **divergence flag**. Compare the growth of a balance sheet item to the growth of the flow it is supposed to track:

$$D_{AR} = g_{\\text{Receivables}} - g_{\\text{Revenue}} \\qquad D_{INV} = g_{\\text{Inventory}} - g_{\\text{COGS}}$$

If a company genuinely sells 20% more, receivables should grow roughly 20% too. If revenue grows 4% and receivables grow 93%, the revenue is not being collected. That is not a slow quarter. **It is either a collection failure or a revenue that was never real.**

| Gap | Reading |
|---|---|
| ≤ 15 pp | Normal drift |
| 15–50 pp | Warning. Read the receivables ageing note. |
| > 50 pp | Severe. Assume the earnings are not cash until proven otherwise. |

Chapter 12 gives you the cross-check: if operating cash flow is falling while profit rises, the divergence flag has already told you where the missing cash went.

### The turnover–margin trade-off

Chapter 15 gave ROA as net profit over average total assets. It decomposes exactly:

$$\\text{ROA} = \\frac{\\text{Net Profit}}{\\text{Revenue}} \\times \\frac{\\text{Revenue}}{\\overline{\\text{Total Assets}}} = \\text{Net Margin} \\times \\text{Asset Turnover}$$

The revenue term cancels. This is an identity, not a theory.

It means **there are two entirely legitimate ways to earn a good return on assets**, and they look nothing alike:

| Model | Net margin | Asset turnover | ROA | DSE archetype |
|---|---|---|---|---|
| High margin, low turnover | 13.6% | 0.83× | 11.4% | Pharmaceuticals |
| Low margin, high turnover | 2.5% | 4.00× | 10.0% | Distribution / trading |
| Low margin, low turnover | 1.0% | 0.72× | 0.7% | A failing textile mill |
| High margin, high turnover | — | — | — | Rare; usually a temporary monopoly |

Amanat Pharmaceuticals from Chapter 15 sits in the first row: net margin 13.64%, asset turnover 1,250 ÷ 1,500 = 0.83×, product 11.37% — **exactly the ROA computed in Chapter 15.** The identity holds because it must.

**The error to avoid is judging a business model by one factor.** A pharma company with 0.83× asset turnover is not inefficient; it is running a high-margin model. A distributor with a 2.5% net margin is not failing; it turns its assets four times. The third row is the one that kills you — low margin *and* low turnover means neither lever is working, and no amount of leverage fixes it. It only makes the failure louder.`,
      bn: `অধ্যায় ১৫ মেপেছে বিক্রয়ের প্রতি টাকায় ও মূলধনের প্রতি টাকায় কোম্পানি কত মুনাফা করে। এই অধ্যায় আরও মৌলিক কিছু মাপে: **সম্পদগুলো কতটা পরিশ্রম করছে।**

দক্ষতা অনুপাত — যাকে কার্যক্রম বা টার্নওভার অনুপাতও বলা হয় — সবসময় একই আকৃতির। উপরে আয় বিবরণী থেকে একটি **প্রবাহ**। নিচে স্থিতিপত্র থেকে একটি **মজুত**। ফলাফল হলো বছরে কতবার।

$$\\text{Turnover} = \\frac{\\text{Flow (a year of activity)}}{\\text{Stock (an average balance)}}$$

প্রবাহকে মজুতের সঙ্গে মেলাতে হবে। প্রাপ্যের বিপরীতে রাজস্ব, কারণ প্রাপ্য বিক্রয় থেকে জন্মায়। মজুদের বিপরীতে **বিক্রীত পণ্যের ব্যয়**, কারণ মজুদ ব্যয়মূল্যে বহন করা হয়, বিক্রয়মূল্যে নয়। প্রদেয়ের বিপরীতে বিক্রীত পণ্যের ব্যয়, কারণ প্রদেয় ক্রয় থেকে জন্মায়। লব ভুলভাবে মেলানো এই অধ্যায়ের সবচেয়ে সাধারণ কারিগরি ভুল, এবং এটি গ্রস মার্জিন যতটুকু ঠিক ততটুকু মজুদ টার্নওভার স্ফীত করে।

### ছয়টি অনুপাত

**সম্পদ টার্নওভার** = রাজস্ব ÷ গড় মোট সম্পদ। সম্পদের প্রতি টাকায় কত টাকার বিক্রয়। বিস্তৃততম দক্ষতা পরিমাপ, এবং যেটি সরাসরি ROA-র সঙ্গে যুক্ত।

**স্থায়ী সম্পদ টার্নওভার** = রাজস্ব ÷ গড় নিট স্থায়ী সম্পদ। কারখানা কতটা উৎপাদনশীল। মূলধন-নিবিড় ডিএসই খাতগুলোর জন্য অপরিহার্য — বস্ত্র স্পিনিং, সিমেন্ট, বিদ্যুৎ। সক্ষমতা সম্প্রসারণের পর স্থায়ী সম্পদ টার্নওভার কমা মানে নতুন কারখানা ভরছে না।

**মজুদ টার্নওভার** = বিক্রীত পণ্যের ব্যয় ÷ গড় মজুদ। বছরে কতবার গুদাম খালি হয়। একটি বাংলাদেশি বস্ত্র কারখানার হিসাবে এটিই একক সবচেয়ে রোগনির্ণায়ক অনুপাত।

**প্রাপ্য টার্নওভার** = রাজস্ব ÷ গড় বাণিজ্যিক প্রাপ্য। বছরে কতবার দেনাদার খাতা আদায় হয়।

**প্রদেয় টার্নওভার** = বিক্রীত পণ্যের ব্যয় ÷ গড় বাণিজ্যিক প্রদেয়। কোম্পানি কতবার সরবরাহকারীদের পরিশোধ করে। **এটি অন্যগুলোর উল্টো দিক থেকে পড়ুন** — প্রদেয় টার্নওভার *কমা* মানে কোম্পানি পরিশোধে বেশি সময় নিচ্ছে, যা নগদ সংরক্ষণ করে কিন্তু চাপের সংকেত দেয় এবং শেষ পর্যন্ত সরবরাহকারীর সদিচ্ছা ও ঋণ-শর্তের মূল্যে পড়ে।

**কার্যকরী মূলধন টার্নওভার** = রাজস্ব ÷ গড় কার্যকরী মূলধন, যেখানে কার্যকরী মূলধন = চলতি সম্পদ − চলতি দায়। নিট স্বল্পমেয়াদি মূলধনের প্রতি টাকায় কত রাজস্ব ধারণ করা হচ্ছে। অধ্যায় ১৪ প্রতিষ্ঠা করেছে কার্যকরী মূলধন কী; এই অনুপাত জিজ্ঞেস করে সেটি নিজের খরচ তুলছে কি না।

### দিন-রূপ

৬× টার্নওভার অনুভব করা কঠিন। একষট্টি দিন নয়। টার্নওভার দিয়ে ৩৬৫ ভাগ করুন:

$$\\text{DIO} = \\frac{365}{\\text{Inventory Turnover}} \\qquad \\text{DSO} = \\frac{365}{\\text{Receivable Turnover}} \\qquad \\text{DPO} = \\frac{365}{\\text{Payable Turnover}}$$

DIO — days inventory outstanding — বিক্রির আগে পণ্য কত দিন পড়ে থাকে। DSO — days sales outstanding — বিক্রির পর টাকা কত দিন ক্রেতার কাছে থাকে। DPO — days payable outstanding — কোম্পানি সরবরাহকারীর টাকার ওপর কত দিন বসে থাকে।

এদের একত্র করুন:

$$\\text{Cash Conversion Cycle} = \\text{DIO} + \\text{DSO} - \\text{DPO}$$

**এটি হলো কাঁচামালের দাম দেওয়া এবং তৈরি পণ্যের দাম পাওয়ার মাঝখানে কোম্পানিকে যত দিন নিজেকে অর্থায়ন করতে হয়।** CCC-র প্রতিটি দিন অর্থায়ন করতে হয় — ইকুইটি থেকে, কার্যকরী মূলধন ঋণ থেকে, অথবা সরবরাহকারীদের টানিয়ে। ৭৩ দিনের CCC মানে প্রতিটি চক্রে কোম্পানির টাকা প্রায় বছরের এক-চতুর্থাংশ আটকে থাকে। ১৮৯ দিনের CCC মানে অর্ধেক বছরেরও বেশি আটকে থাকে, এবং ১২–১৪% হারের বাংলাদেশি কার্যকরী মূলধন সুবিধায় তা ব্যয়বহুল।

### অধ্যায় ১৩ যা বর্ণনা করেছে দক্ষতা অনুপাত তা কীভাবে ধরে

অধ্যায় ১৩ প্রতিষ্ঠা করেছে যে নগদ আদায়ের আগেই রাজস্ব স্বীকৃত হতে পারে, এবং মজুদ এমন মূল্যে বহন করা যায় যা বাজার দেবে না। দুটি কারসাজিরই একই কাঠামোগত স্বাক্ষর, এবং তা অন্য কোথাও দৃশ্যমান হওয়ার আগেই কার্যক্রম অনুপাতে দেখা যায়।

**চ্যানেল স্টাফিং** — প্রান্তিকের শেষে রাজস্ব দেখাতে পরিবেশকদের কাছে পণ্য ঠেলে দেওয়া — রাজস্ব বাড়ায় *এবং* প্রাপ্য বাড়ায়, কিন্তু প্রাপ্য বেশি বাড়ায়, কারণ ঠেলে দেওয়া কোনো চালানের দামই পাওয়া যায়নি। প্রাপ্য টার্নওভার কমে। DSO বাড়ে।

**যে মজুদ বিক্রি হওয়া বন্ধ করেছে** — অচল মাল, অবিক্রীত তৈরি পণ্য, ভুল দাম-বাজিতে কেনা কাঁচামাল — কেউ অবচয় না লিখলে ব্যয়মূল্যে স্থিতিপত্রে বসে থাকে। অবচয় লিখলে মুনাফায় আঘাত লাগে, তাই লেখা হয় না। মজুদ টার্নওভার কমে। DIO বাড়ে।

পরীক্ষাটি হলো একটি **ডাইভারজেন্স ফ্ল্যাগ**। একটি স্থিতিপত্র খাতের প্রবৃদ্ধিকে যে প্রবাহ তাকে অনুসরণ করার কথা তার প্রবৃদ্ধির সঙ্গে তুলনা করুন:

$$D_{AR} = g_{\\text{Receivables}} - g_{\\text{Revenue}} \\qquad D_{INV} = g_{\\text{Inventory}} - g_{\\text{COGS}}$$

কোম্পানি যদি সত্যিই ২০% বেশি বিক্রি করে, প্রাপ্যও প্রায় ২০% বাড়া উচিত। রাজস্ব ৪% বাড়ে আর প্রাপ্য ৯৩% বাড়ে, তবে রাজস্বটি আদায় হচ্ছে না। এটি মন্থর প্রান্তিক নয়। **এটি হয় আদায়ের ব্যর্থতা, নয়তো এমন একটি রাজস্ব যা কখনো বাস্তব ছিল না।**

| ব্যবধান | পাঠ |
|---|---|
| ≤ ১৫ পয়েন্ট | স্বাভাবিক বিচ্যুতি |
| ১৫–৫০ পয়েন্ট | সতর্কতা। প্রাপ্যের বয়স-বিভাজন নোট পড়ুন। |
| > ৫০ পয়েন্ট | গুরুতর। প্রমাণিত না হওয়া পর্যন্ত ধরে নিন আয়টি নগদ নয়। |

অধ্যায় ১২ আপনাকে পাল্টা-যাচাই দেয়: মুনাফা বাড়তে থাকলেও পরিচালন নগদ প্রবাহ কমতে থাকলে ডাইভারজেন্স ফ্ল্যাগ আগেই বলে দিয়েছে হারানো নগদ কোথায় গেছে।

### টার্নওভার–মার্জিন বিনিময়

অধ্যায় ১৫ ROA দিয়েছে গড় মোট সম্পদের ওপর নিট মুনাফা হিসেবে। এটি ঠিকঠাক বিশ্লিষ্ট হয়:

$$\\text{ROA} = \\frac{\\text{Net Profit}}{\\text{Revenue}} \\times \\frac{\\text{Revenue}}{\\overline{\\text{Total Assets}}} = \\text{Net Margin} \\times \\text{Asset Turnover}$$

রাজস্ব পদটি কেটে যায়। এটি একটি অভেদ, তত্ত্ব নয়।

এর অর্থ **সম্পদে ভালো রিটার্ন অর্জনের সম্পূর্ণ বৈধ দুটি পথ আছে**, এবং দুটি দেখতে একেবারেই আলাদা:

| মডেল | নিট মার্জিন | সম্পদ টার্নওভার | ROA | ডিএসই আদর্শরূপ |
|---|---|---|---|---|
| উঁচু মার্জিন, কম টার্নওভার | ১৩.৬% | ০.৮৩× | ১১.৪% | ওষুধ |
| কম মার্জিন, উঁচু টার্নওভার | ২.৫% | ৪.০০× | ১০.০% | পরিবেশন / বাণিজ্য |
| কম মার্জিন, কম টার্নওভার | ১.০% | ০.৭২× | ০.৭% | একটি ব্যর্থ বস্ত্র কারখানা |
| উঁচু মার্জিন, উঁচু টার্নওভার | — | — | — | বিরল; সাধারণত সাময়িক একচেটিয়া |

অধ্যায় ১৫-এর আমানত ফার্মাসিউটিক্যালস প্রথম সারিতে: নিট মার্জিন ১৩.৬৪%, সম্পদ টার্নওভার ১,২৫০ ÷ ১,৫০০ = ০.৮৩×, গুণফল ১১.৩৭% — **হুবহু অধ্যায় ১৫-এ গণনাকৃত ROA।** অভেদটি টেকে কারণ টিকতে বাধ্য।

**যে ভুলটি এড়াতে হবে তা হলো একটি উপাদান দিয়ে ব্যবসায়িক মডেল বিচার করা।** ০.৮৩× সম্পদ টার্নওভারের ওষুধ কোম্পানি অদক্ষ নয়; সে উঁচু-মার্জিন মডেল চালাচ্ছে। ২.৫% নিট মার্জিনের পরিবেশক ব্যর্থ নয়; সে তার সম্পদ চারবার ঘোরায়। তৃতীয় সারিটিই আপনাকে মারে — কম মার্জিন *এবং* কম টার্নওভার মানে কোনো লিভারই কাজ করছে না, এবং কোনো পরিমাণ ঋণভার তা ঠিক করে না। কেবল ব্যর্থতাটিকে আরও জোরে শোনায়।`,
    },

    simple: {
      en: `A shop on New Market road buys 100 shirts, sells them, buys 100 more.

If he empties his shelves six times a year, he needs enough cash for **two months** of stock at a time. If he empties them 2.4 times a year, he needs cash for **five months** of stock. Same shop, same shirts, same revenue — but the second version has two and a half times as much money frozen in the back room.

That money is not earning anything. It is sitting in a pile of unsold shirts. He is paying interest on it if he borrowed to buy them.

---

### Three questions to ask a company

1. **How long does the stock sit before it sells?** (DIO)
2. **How long after selling does the customer actually pay?** (DSO)
3. **How long can the company wait before paying its own suppliers?** (DPO)

Add the first two, subtract the third. That is the number of days the company is funding out of its own pocket.

---

### The trick this catches

Suppose a company's sales are flat but its profit line looks fine. Now look at what happened on the balance sheet.

- Warehouse: was 120 crore of stock. Now 320 crore.
- Money owed by customers: was 150 crore. Now 290 crore.

Sales barely moved. So where did 340 crore of extra assets come from?

It came from goods nobody bought and invoices nobody paid. **Both of those are sitting on the balance sheet as if they were worth full price.** They are counted as assets. They are counted in the profit. And no cash has arrived.

The company will tell you this is "temporary" and "will normalise next year." Sometimes it does. Usually the following year's annual report contains a large inventory write-down and a large provision for doubtful debts, and the profit of the earlier two years turns out to have been an advance on money that never came.

**This is not a subtle fraud. It is arithmetic, and it is printed in the annual report, and almost nobody reads it.** The ratios in this chapter take ten minutes to compute and they are the closest thing to an early warning system a retail investor in Bangladesh has.`,
      bn: `নিউমার্কেট রোডের একটি দোকান ১০০টি শার্ট কেনে, বিক্রি করে, আরও ১০০টি কেনে।

তিনি যদি বছরে ছয়বার তাক খালি করেন, তাঁর একবারে **দুই মাসের** মালের জন্য নগদ দরকার। যদি বছরে ২.৪ বার খালি করেন, তাঁর **পাঁচ মাসের** মালের জন্য নগদ দরকার। একই দোকান, একই শার্ট, একই বিক্রয় — কিন্তু দ্বিতীয় সংস্করণে আড়াই গুণ বেশি টাকা পেছনের ঘরে জমে আছে।

ঐ টাকা কিছুই আয় করছে না। এটি অবিক্রীত শার্টের স্তূপে বসে আছে। কিনতে ধার করে থাকলে তিনি এর ওপর সুদও দিচ্ছেন।

---

### কোম্পানিকে করার তিনটি প্রশ্ন

১. **বিক্রি হওয়ার আগে মাল কত দিন পড়ে থাকে?** (DIO)
২. **বিক্রির কত দিন পর ক্রেতা আসলে টাকা দেন?** (DSO)
৩. **নিজের সরবরাহকারীদের পরিশোধের আগে কোম্পানি কত দিন অপেক্ষা করতে পারে?** (DPO)

প্রথম দুটি যোগ করুন, তৃতীয়টি বিয়োগ করুন। ওটাই সেই দিনসংখ্যা যতদিন কোম্পানি নিজের পকেট থেকে অর্থায়ন করছে।

---

### এটি যে কৌশলটি ধরে

ধরুন একটি কোম্পানির বিক্রয় স্থির, কিন্তু মুনাফার লাইনটি ঠিকঠাক দেখাচ্ছে। এবার স্থিতিপত্রে কী হয়েছে দেখুন।

- গুদাম: ছিল ১২০ কোটি টাকার মাল। এখন ৩২০ কোটি।
- ক্রেতাদের কাছে পাওনা: ছিল ১৫০ কোটি। এখন ২৯০ কোটি।

বিক্রয় প্রায় নড়েইনি। তাহলে অতিরিক্ত ৩৪০ কোটি টাকার সম্পদ কোথা থেকে এল?

এল এমন পণ্য থেকে যা কেউ কেনেনি এবং এমন চালান থেকে যার দাম কেউ দেয়নি। **দুটোই স্থিতিপত্রে এমনভাবে বসে আছে যেন পুরো দামের যোগ্য।** এগুলো সম্পদ হিসেবে গোনা হচ্ছে। মুনাফায় গোনা হচ্ছে। আর কোনো নগদ আসেনি।

কোম্পানি আপনাকে বলবে এটি "সাময়িক" এবং "আগামী বছর স্বাভাবিক হয়ে যাবে"। কখনো হয়। সাধারণত পরের বছরের বার্ষিক প্রতিবেদনে একটি বড় মজুদ অবচয় এবং সন্দেহজনক ঋণের একটি বড় সঞ্চিতি থাকে, এবং আগের দুই বছরের মুনাফা আসলে ছিল এমন টাকার অগ্রিম যা কখনো আসেনি।

**এটি সূক্ষ্ম কোনো জালিয়াতি নয়। এটি পাটিগণিত, এটি বার্ষিক প্রতিবেদনে ছাপা আছে, এবং প্রায় কেউ পড়ে না।** এই অধ্যায়ের অনুপাতগুলো গণনা করতে দশ মিনিট লাগে এবং বাংলাদেশের একজন খুচরা বিনিয়োগকারীর হাতে থাকা আগাম সতর্কতা ব্যবস্থার সবচেয়ে কাছাকাছি জিনিস এগুলোই।`,
    },

    example: {
      en: `### Sonali Textile Mills Ltd — three years of a slow collapse

A DSE-listed woven fabric exporter. Revenue is flat across FY2022–FY2024 and the market treats it as a boring, cheap, stable name trading at 7× earnings. Figures in BDT crore. All balance-sheet inputs are **averages** of opening and closing.

| Input | FY2022 | FY2023 | FY2024 |
|---|---|---|---|
| Revenue | 900.0 | 920.0 | 940.0 |
| Cost of goods sold | 720.0 | 748.0 | 768.0 |
| Net profit | 45.0 | 27.6 | 9.4 |
| Avg total assets | 1,000.0 | 1,150.0 | 1,300.0 |
| Avg net fixed assets | 600.0 | 620.0 | 640.0 |
| Avg inventory | 120.0 | 187.0 | 320.0 |
| Avg receivables | 150.0 | 205.0 | 290.0 |
| Avg payables | 96.0 | 110.0 | 160.0 |
| Avg current assets | 380.0 | 480.0 | 650.0 |
| Avg current liabilities | 180.0 | 210.0 | 300.0 |

**The income statement looks dull. The balance sheet is screaming.**

### The activity ratios

| Ratio | FY2022 | FY2023 | FY2024 |
|---|---|---|---|
| Asset turnover | 0.90× | 0.80× | 0.72× |
| Fixed asset turnover | 1.50× | 1.48× | 1.47× |
| **Inventory turnover** | **6.00×** | **4.00×** | **2.40×** |
| **Receivable turnover** | **6.00×** | **4.49×** | **3.24×** |
| Payable turnover | 7.50× | 6.80× | 4.80× |
| Working capital turnover | 4.50× | 3.41× | 2.69× |
| DIO (days) | 60.83 | 91.25 | 152.08 |
| DSO (days) | 60.83 | 81.33 | 112.61 |
| DPO (days) | 48.67 | 53.68 | 76.04 |
| **Cash conversion cycle (days)** | **73.00** | **118.91** | **188.65** |
| Net margin | 5.00% | 3.00% | 1.00% |
| ROA | 4.50% | 2.40% | 0.72% |

### Reading it

**Fixed asset turnover barely moved: 1.50 → 1.47.** The factory is unchanged. This is not a plant problem. Whatever is happening is happening in working capital.

**Inventory turnover collapsed 6.00× → 2.40×, a 60% fall.** DIO went from two months to five months. The mill is producing fabric that is not leaving the warehouse. Either orders have been cancelled and production continued, or finished goods are being rejected by buyers, or raw cotton was bought on a price bet and the price fell.

**Receivable turnover collapsed 6.00× → 3.24×.** DSO went from 61 days to 113 days. Buyers who paid in two months now pay in nearly four. On an export book that is a counterparty problem — and Chapter 13's channel-stuffing signature looks identical from the outside.

**Payable turnover fell 7.50× → 4.80×.** DPO rose from 49 days to 76 days. The company is now taking two and a half months to pay suppliers who used to be paid in seven weeks. **This is not efficiency. It is a company using its suppliers as an unsecured lender because its bank will not extend more.**

**The cash conversion cycle went from 73 days to 189 days.** That is the whole story in one number.

### What the extra 116 days cost

$$\\text{Extra funding} = \\frac{188.65 - 73.00}{365} \\times 940.0 = \\frac{115.65}{365} \\times 940.0 = \\text{BDT } 297.8 \\text{ crore}$$

**Nearly BDT 300 crore of additional working capital had to be found**, on flat revenue, to fund the same business. At a Bangladeshi working capital rate of 13%, that alone is roughly BDT 38.7 crore of extra annual finance cost — against a company whose entire net profit in FY2024 was BDT 9.4 crore.

**That is why the net margin went from 5.00% to 1.00% while revenue was flat.** The profit did not disappear into competition. It disappeared into interest on money borrowed to carry stock nobody bought and invoices nobody paid.

### The divergence flags

| Test | Growth FY2022 → FY2024 | Gap | Flag |
|---|---|---|---|
| Revenue | +4.44% | | |
| Receivables | +93.33% | **+88.89 pp** | **SEVERE** |
| COGS | +6.67% | | |
| Inventory | +166.67% | **+160.00 pp** | **SEVERE** |

Receivables grew twenty-one times faster than revenue. Inventory grew twenty-five times faster than the cost of goods it represents.

**There is no benign explanation for this pattern that also explains a flat top line.** If demand were genuinely strong and inventory were being built ahead of orders, revenue would be rising. It is not. If collections were slow because the company had won large new customers on generous terms, revenue would be rising. It is not.

### The diagnosis

Sonali Textile is carrying two categories of asset that are not worth their carrying value:

1. **Finished and raw inventory that will not sell at cost.** IAS 2 as adopted in Bangladesh requires inventory at the lower of cost and net realisable value. A 152-day DIO on a fashion-adjacent woven product is prima facie evidence that NRV is below cost on part of that pile. No write-down has been taken.
2. **Receivables that will not be collected in full.** IFRS 9 expected credit loss provisioning applies. A DSO of 113 days on an export book, up from 61, means a meaningful portion of the book is well past terms. The provision has not been raised.

**Both write-downs are still to come.** When they arrive — usually all at once, in a single "exceptional item" year — the reported profit of FY2022 and FY2023 will retrospectively look like what it was: revenue recognised against goods that did not sell and cash that did not arrive.

### What the retail investor did

He bought it at 7× earnings because it looked cheap against a pharma name at 18×.

The P/E was computed on FY2023 earnings of BDT 27.6 crore. Those earnings included the gross profit on goods now sitting in the warehouse and invoices now 113 days overdue. **The E in that P/E was already impaired when he paid for it.** The stock did not fall because sentiment turned. It fell because the earnings were withdrawn.

**Chapter 15 warned that a low P/E is often the market's estimate of the probability that earnings do not repeat. This chapter shows you where to look for the evidence.** It is on one page of the balance sheet, and it takes ten minutes.`,
      bn: `### সোনালী টেক্সটাইল মিলস লিমিটেড — তিন বছরের ধীর ধস

একটি ডিএসই-তালিকাভুক্ত বোনা কাপড়ের রপ্তানিকারক। FY2022–FY2024 জুড়ে রাজস্ব স্থির এবং বাজার একে ৭× আয়ে লেনদেনরত নীরস, সস্তা, স্থিতিশীল নাম হিসেবে দেখে। অঙ্ক কোটি টাকায়। সব স্থিতিপত্র ইনপুট প্রারম্ভিক ও সমাপনীর **গড়**।

| ইনপুট | FY2022 | FY2023 | FY2024 |
|---|---|---|---|
| রাজস্ব | ৯০০.০ | ৯২০.০ | ৯৪০.০ |
| বিক্রীত পণ্যের ব্যয় | ৭২০.০ | ৭৪৮.০ | ৭৬৮.০ |
| নিট মুনাফা | ৪৫.০ | ২৭.৬ | ৯.৪ |
| গড় মোট সম্পদ | ১,০০০.০ | ১,১৫০.০ | ১,৩০০.০ |
| গড় নিট স্থায়ী সম্পদ | ৬০০.০ | ৬২০.০ | ৬৪০.০ |
| গড় মজুদ | ১২০.০ | ১৮৭.০ | ৩২০.০ |
| গড় প্রাপ্য | ১৫০.০ | ২০৫.০ | ২৯০.০ |
| গড় প্রদেয় | ৯৬.০ | ১১০.০ | ১৬০.০ |
| গড় চলতি সম্পদ | ৩৮০.০ | ৪৮০.০ | ৬৫০.০ |
| গড় চলতি দায় | ১৮০.০ | ২১০.০ | ৩০০.০ |

**আয় বিবরণী নীরস দেখায়। স্থিতিপত্র চিৎকার করছে।**

### কার্যক্রম অনুপাতসমূহ

| অনুপাত | FY2022 | FY2023 | FY2024 |
|---|---|---|---|
| সম্পদ টার্নওভার | ০.৯০× | ০.৮০× | ০.৭২× |
| স্থায়ী সম্পদ টার্নওভার | ১.৫০× | ১.৪৮× | ১.৪৭× |
| **মজুদ টার্নওভার** | **৬.০০×** | **৪.০০×** | **২.৪০×** |
| **প্রাপ্য টার্নওভার** | **৬.০০×** | **৪.৪৯×** | **৩.২৪×** |
| প্রদেয় টার্নওভার | ৭.৫০× | ৬.৮০× | ৪.৮০× |
| কার্যকরী মূলধন টার্নওভার | ৪.৫০× | ৩.৪১× | ২.৬৯× |
| DIO (দিন) | ৬০.৮৩ | ৯১.২৫ | ১৫২.০৮ |
| DSO (দিন) | ৬০.৮৩ | ৮১.৩৩ | ১১২.৬১ |
| DPO (দিন) | ৪৮.৬৭ | ৫৩.৬৮ | ৭৬.০৪ |
| **নগদ রূপান্তর চক্র (দিন)** | **৭৩.০০** | **১১৮.৯১** | **১৮৮.৬৫** |
| নিট মার্জিন | ৫.০০% | ৩.০০% | ১.০০% |
| ROA | ৪.৫০% | ২.৪০% | ০.৭২% |

### পাঠ

**স্থায়ী সম্পদ টার্নওভার প্রায় নড়েইনি: ১.৫০ → ১.৪৭।** কারখানা অপরিবর্তিত। এটি প্ল্যান্টের সমস্যা নয়। যা ঘটছে তা কার্যকরী মূলধনে ঘটছে।

**মজুদ টার্নওভার ধসেছে ৬.০০× → ২.৪০×, ৬০% পতন।** DIO দুই মাস থেকে পাঁচ মাসে গেছে। কারখানা এমন কাপড় বানাচ্ছে যা গুদাম ছাড়ছে না। হয় অর্ডার বাতিল হয়েছে অথচ উৎপাদন চলেছে, নয়তো তৈরি পণ্য ক্রেতারা প্রত্যাখ্যান করছেন, নয়তো দাম-বাজিতে কাঁচা তুলা কেনা হয়েছিল এবং দাম পড়ে গেছে।

**প্রাপ্য টার্নওভার ধসেছে ৬.০০× → ৩.২৪×।** DSO ৬১ দিন থেকে ১১৩ দিনে গেছে। যে ক্রেতারা দুই মাসে দিতেন, তাঁরা এখন প্রায় চার মাসে দেন। রপ্তানি খাতায় এটি প্রতিপক্ষ ঝুঁকির সমস্যা — এবং বাইরে থেকে অধ্যায় ১৩-এর চ্যানেল-স্টাফিং স্বাক্ষরটি হুবহু একই দেখায়।

**প্রদেয় টার্নওভার নেমেছে ৭.৫০× → ৪.৮০×।** DPO ৪৯ দিন থেকে ৭৬ দিনে উঠেছে। যাঁদের সাত সপ্তাহে পরিশোধ করা হতো, সেই সরবরাহকারীদের এখন আড়াই মাস লাগছে। **এটি দক্ষতা নয়। এটি এমন একটি কোম্পানি যে সরবরাহকারীদের জামানতবিহীন ঋণদাতা হিসেবে ব্যবহার করছে, কারণ তার ব্যাংক আর বাড়াবে না।**

**নগদ রূপান্তর চক্র ৭৩ দিন থেকে ১৮৯ দিনে গেছে।** এক সংখ্যায় পুরো গল্পটি।

### অতিরিক্ত ১১৬ দিনের দাম

$$\\text{Extra funding} = \\frac{188.65 - 73.00}{365} \\times 940.0 = \\frac{115.65}{365} \\times 940.0 = 297.8 \\text{ কোটি টাকা}$$

**প্রায় ৩০০ কোটি টাকার অতিরিক্ত কার্যকরী মূলধন জোগাড় করতে হয়েছে**, স্থির রাজস্বে, একই ব্যবসা চালানোর জন্য। ১৩% বাংলাদেশি কার্যকরী মূলধন হারে কেবল এতেই বছরে প্রায় ৩৮.৭ কোটি টাকার অতিরিক্ত অর্থায়ন ব্যয় — এমন একটি কোম্পানির বিপরীতে যার FY2024-এর সম্পূর্ণ নিট মুনাফাই ছিল ৯.৪ কোটি টাকা।

**এ কারণেই রাজস্ব স্থির থাকা সত্ত্বেও নিট মার্জিন ৫.০০% থেকে ১.০০%-এ নেমেছে।** মুনাফা প্রতিযোগিতায় হারায়নি। এটি হারিয়েছে ঐ সুদে — যে টাকা ধার করে কেউ না কেনা মাল ও কেউ দাম না দেওয়া চালান বহন করা হয়েছে।

### ডাইভারজেন্স ফ্ল্যাগ

| পরীক্ষা | প্রবৃদ্ধি FY2022 → FY2024 | ব্যবধান | ফ্ল্যাগ |
|---|---|---|---|
| রাজস্ব | +৪.৪৪% | | |
| প্রাপ্য | +৯৩.৩৩% | **+৮৮.৮৯ পয়েন্ট** | **গুরুতর** |
| বিক্রীত পণ্যের ব্যয় | +৬.৬৭% | | |
| মজুদ | +১৬৬.৬৭% | **+১৬০.০০ পয়েন্ট** | **গুরুতর** |

প্রাপ্য রাজস্বের চেয়ে একুশ গুণ দ্রুত বেড়েছে। মজুদ যে পণ্যের ব্যয় সে প্রতিনিধিত্ব করে তার চেয়ে পঁচিশ গুণ দ্রুত বেড়েছে।

**এই ধরনের কোনো নির্দোষ ব্যাখ্যা নেই যা একই সঙ্গে স্থির শীর্ষ লাইনও ব্যাখ্যা করে।** চাহিদা সত্যিই শক্তিশালী হলে এবং অর্ডারের আগেই মজুদ গড়া হলে রাজস্ব বাড়ত। বাড়েনি। উদার শর্তে বড় নতুন ক্রেতা জেতার কারণে আদায় ধীর হলে রাজস্ব বাড়ত। বাড়েনি।

### রোগনির্ণয়

সোনালী টেক্সটাইল দুই শ্রেণির সম্পদ বহন করছে যা তাদের বহনমূল্যের যোগ্য নয়:

১. **তৈরি ও কাঁচা মজুদ যা ব্যয়মূল্যে বিক্রি হবে না।** বাংলাদেশে গৃহীত IAS 2 অনুযায়ী মজুদ ব্যয় ও নিট আদায়যোগ্য মূল্যের মধ্যে যেটি কম সেই মূল্যে রাখতে হয়। ফ্যাশন-সংলগ্ন বোনা পণ্যে ১৫২ দিনের DIO প্রাথমিকভাবেই প্রমাণ যে ঐ স্তূপের একটি অংশে NRV ব্যয়ের নিচে। কোনো অবচয় নেওয়া হয়নি।
২. **প্রাপ্য যা পুরোপুরি আদায় হবে না।** IFRS 9 প্রত্যাশিত ঋণ ক্ষতির সঞ্চিতি প্রযোজ্য। রপ্তানি খাতায় ৬১ থেকে বেড়ে ১১৩ দিনের DSO মানে খাতার উল্লেখযোগ্য অংশ শর্তের অনেক বাইরে। সঞ্চিতি বাড়ানো হয়নি।

**দুটি অবচয়ই এখনো আসেনি।** যখন আসবে — সাধারণত একসঙ্গে, একটিমাত্র "ব্যতিক্রমী খাত"-এর বছরে — তখন FY2022 ও FY2023-এর প্রতিবেদিত মুনাফা পূর্বদৃষ্টিতে যা ছিল তা-ই দেখাবে: এমন পণ্যের বিপরীতে স্বীকৃত রাজস্ব যা বিক্রি হয়নি এবং এমন নগদের বিপরীতে যা আসেনি।

### খুচরা বিনিয়োগকারী কী করলেন

তিনি ৭× আয়ে কিনলেন, কারণ ১৮×-এর একটি ওষুধ নামের তুলনায় সস্তা দেখাচ্ছিল।

P/E গণনা হয়েছিল FY2023-এর ২৭.৬ কোটি টাকার আয়ের ওপর। ঐ আয়ে ছিল এখন গুদামে বসে থাকা পণ্যের গ্রস মুনাফা এবং এখন ১১৩ দিন বকেয়া চালানের মুনাফা। **তিনি যখন দাম দিলেন তখনই ঐ P/E-র E ক্ষতিগ্রস্ত ছিল।** শেয়ারটি মনোভাব বদলের কারণে পড়েনি। পড়েছে কারণ আয়টি প্রত্যাহার করা হয়েছিল।

**অধ্যায় ১৫ সতর্ক করেছিল যে কম P/E প্রায়ই আয় পুনরাবৃত্ত না হওয়ার সম্ভাবনা সম্পর্কে বাজারের অনুমান। এই অধ্যায় দেখায় প্রমাণটি কোথায় খুঁজবেন।** এটি স্থিতিপত্রের একটি পাতায় আছে, এবং লাগে দশ মিনিট।`,
    },

    formula: {
      en: `### Turnover ratios

All balance-sheet denominators are averages of opening and closing balances.

$$\\text{Asset Turnover} = \\frac{\\text{Revenue}}{\\overline{\\text{Total Assets}}}$$

$$\\text{Fixed Asset Turnover} = \\frac{\\text{Revenue}}{\\overline{\\text{Net Fixed Assets}}}$$

$$\\text{Inventory Turnover} = \\frac{\\text{Cost of Goods Sold}}{\\overline{\\text{Inventory}}}$$

$$\\text{Receivable Turnover} = \\frac{\\text{Revenue}}{\\overline{\\text{Trade Receivables}}}$$

$$\\text{Payable Turnover} = \\frac{\\text{Cost of Goods Sold}}{\\overline{\\text{Trade Payables}}}$$

$$\\text{Working Capital Turnover} = \\frac{\\text{Revenue}}{\\overline{\\text{Current Assets}} - \\overline{\\text{Current Liabilities}}}$$

**Numerator discipline.** Inventory and payables take **COGS**; receivables and the asset ratios take **revenue**. Inventory is carried at cost, so measuring it against revenue overstates turnover by a factor of $1/(1-\\text{gross margin})$. For a pharma company at 46% gross margin that error inflates inventory turnover by 85%.

### Days versions

$$\\text{DIO} = \\frac{365}{\\text{Inventory Turnover}} \\qquad \\text{DSO} = \\frac{365}{\\text{Receivable Turnover}} \\qquad \\text{DPO} = \\frac{365}{\\text{Payable Turnover}}$$

$$\\text{Cash Conversion Cycle} = \\text{DIO} + \\text{DSO} - \\text{DPO}$$

**The funding consequence of a change in CCC:**

$$\\Delta \\text{Working Capital Required} = \\frac{\\Delta \\text{CCC}}{365} \\times \\text{Revenue}$$

Multiply that by the company's marginal borrowing rate to get the annual finance-cost consequence.

### The divergence flag

Let $g_X$ denote the growth of item $X$ over the comparison window:

$$g_X = \\left( \\frac{X_{\\text{end}}}{X_{\\text{start}}} - 1 \\right) \\times 100$$

$$D_{AR} = g_{\\text{Receivables}} - g_{\\text{Revenue}} \\qquad D_{INV} = g_{\\text{Inventory}} - g_{\\text{COGS}}$$

Both $D$ values are in **percentage points**, not percent. Thresholds:

| $D$ | Reading |
|---|---|
| ≤ 15 pp | Normal |
| 15–50 pp | Warning |
| > 50 pp | Severe |

### The turnover–margin identity

$$\\text{ROA} = \\frac{\\text{Net Profit}}{\\overline{\\text{Total Assets}}} = \\underbrace{\\frac{\\text{Net Profit}}{\\text{Revenue}}}_{\\text{Net Margin}} \\times \\underbrace{\\frac{\\text{Revenue}}{\\overline{\\text{Total Assets}}}}_{\\text{Asset Turnover}}$$

This is an algebraic identity — revenue cancels. It holds for every company in every year with no assumptions. Chapter 19 extends it by one further factor.

### A note on 365 versus 360

Some texts use 360 days. Use **365**, consistently, and never mix the two within a comparison. The difference is 1.4% — small enough to be invisible and large enough to make a peer table wrong if half the rows use one convention and half the other.`,
      bn: `### টার্নওভার অনুপাত

সব স্থিতিপত্র হর প্রারম্ভিক ও সমাপনী স্থিতির গড়।

$$\\text{Asset Turnover} = \\frac{\\text{Revenue}}{\\overline{\\text{Total Assets}}}$$

$$\\text{Fixed Asset Turnover} = \\frac{\\text{Revenue}}{\\overline{\\text{Net Fixed Assets}}}$$

$$\\text{Inventory Turnover} = \\frac{\\text{Cost of Goods Sold}}{\\overline{\\text{Inventory}}}$$

$$\\text{Receivable Turnover} = \\frac{\\text{Revenue}}{\\overline{\\text{Trade Receivables}}}$$

$$\\text{Payable Turnover} = \\frac{\\text{Cost of Goods Sold}}{\\overline{\\text{Trade Payables}}}$$

$$\\text{Working Capital Turnover} = \\frac{\\text{Revenue}}{\\overline{\\text{Current Assets}} - \\overline{\\text{Current Liabilities}}}$$

**লব-শৃঙ্খলা।** মজুদ ও প্রদেয় নেয় **COGS**; প্রাপ্য ও সম্পদ অনুপাতগুলো নেয় **রাজস্ব**। মজুদ ব্যয়মূল্যে বহন করা হয়, তাই রাজস্বের বিপরীতে মাপলে টার্নওভার $1/(1-\\text{gross margin})$ গুণ বেশি দেখায়। ৪৬% গ্রস মার্জিনের একটি ওষুধ কোম্পানির ক্ষেত্রে ঐ ভুল মজুদ টার্নওভার ৮৫% স্ফীত করে।

### দিন-রূপ

$$\\text{DIO} = \\frac{365}{\\text{Inventory Turnover}} \\qquad \\text{DSO} = \\frac{365}{\\text{Receivable Turnover}} \\qquad \\text{DPO} = \\frac{365}{\\text{Payable Turnover}}$$

$$\\text{Cash Conversion Cycle} = \\text{DIO} + \\text{DSO} - \\text{DPO}$$

**CCC পরিবর্তনের অর্থায়ন পরিণতি:**

$$\\Delta \\text{Working Capital Required} = \\frac{\\Delta \\text{CCC}}{365} \\times \\text{Revenue}$$

বার্ষিক অর্থায়ন-ব্যয়ের পরিণতি পেতে একে কোম্পানির প্রান্তিক ঋণ হার দিয়ে গুণ করুন।

### ডাইভারজেন্স ফ্ল্যাগ

ধরা যাক $g_X$ হলো তুলনা-সময়কালে $X$ খাতের প্রবৃদ্ধি:

$$g_X = \\left( \\frac{X_{\\text{end}}}{X_{\\text{start}}} - 1 \\right) \\times 100$$

$$D_{AR} = g_{\\text{Receivables}} - g_{\\text{Revenue}} \\qquad D_{INV} = g_{\\text{Inventory}} - g_{\\text{COGS}}$$

দুটি $D$ মানই **শতাংশ বিন্দুতে**, শতাংশে নয়। সীমা:

| $D$ | পাঠ |
|---|---|
| ≤ ১৫ পয়েন্ট | স্বাভাবিক |
| ১৫–৫০ পয়েন্ট | সতর্কতা |
| > ৫০ পয়েন্ট | গুরুতর |

### টার্নওভার–মার্জিন অভেদ

$$\\text{ROA} = \\frac{\\text{Net Profit}}{\\overline{\\text{Total Assets}}} = \\underbrace{\\frac{\\text{Net Profit}}{\\text{Revenue}}}_{\\text{Net Margin}} \\times \\underbrace{\\frac{\\text{Revenue}}{\\overline{\\text{Total Assets}}}}_{\\text{Asset Turnover}}$$

এটি একটি বীজগাণিতিক অভেদ — রাজস্ব কেটে যায়। কোনো অনুমান ছাড়াই এটি প্রতিটি কোম্পানির প্রতিটি বছরে টেকে। অধ্যায় ১৯ এতে আরও একটি উপাদান যোগ করে।

### ৩৬৫ বনাম ৩৬০ প্রসঙ্গে

কিছু বই ৩৬০ দিন ব্যবহার করে। **৩৬৫** ব্যবহার করুন, ধারাবাহিকভাবে, এবং একটি তুলনার ভেতরে কখনো দুটি মেশাবেন না। পার্থক্য ১.৪% — অদৃশ্য হওয়ার মতো ছোট, আর সমকক্ষ সারণির অর্ধেক সারি এক রীতি ও অর্ধেক অন্য রীতি ব্যবহার করলে তা ভুল করে দেওয়ার মতো বড়।`,
    },

    manual: {
      en: `**Company.** Sonali Textile Mills Ltd, a DSE-listed woven fabric exporter. Three fiscal years. All figures BDT crore; all balance-sheet inputs are averages of opening and closing. Prepared under IFRS as adopted in Bangladesh.

| Input | FY2022 | FY2023 | FY2024 |
|---|---|---|---|
| Revenue | 900.0 | 920.0 | 940.0 |
| Cost of goods sold | 720.0 | 748.0 | 768.0 |
| Net profit | 45.0 | 27.6 | 9.4 |
| Avg total assets | 1,000.0 | 1,150.0 | 1,300.0 |
| Avg net fixed assets | 600.0 | 620.0 | 640.0 |
| Avg inventory | 120.0 | 187.0 | 320.0 |
| Avg receivables | 150.0 | 205.0 | 290.0 |
| Avg payables | 96.0 | 110.0 | 160.0 |
| Avg current assets | 380.0 | 480.0 | 650.0 |
| Avg current liabilities | 180.0 | 210.0 | 300.0 |

---

**Step 1 — Asset turnover, all three years.**

$$\\text{FY2022: } \\frac{900.0}{1{,}000.0} = 0.90\\times \\qquad \\text{FY2023: } \\frac{920.0}{1{,}150.0} = 0.80\\times \\qquad \\text{FY2024: } \\frac{940.0}{1{,}300.0} = 0.72\\times$$

Assets grew 30% while revenue grew 4.4%. **Something is being added to the balance sheet that is not producing sales.**

**Step 2 — Fixed asset turnover.**

$$\\frac{900.0}{600.0} = 1.50\\times \\qquad \\frac{920.0}{620.0} = 1.48\\times \\qquad \\frac{940.0}{640.0} = 1.47\\times$$

Almost unchanged. **This eliminates the plant as the cause.** The problem is in current assets.

**Step 3 — Inventory turnover. Numerator is COGS, not revenue.**

$$\\frac{720.0}{120.0} = 6.00\\times \\qquad \\frac{748.0}{187.0} = 4.00\\times \\qquad \\frac{768.0}{320.0} = 2.40\\times$$

**Step 4 — Receivable turnover. Numerator is revenue.**

$$\\frac{900.0}{150.0} = 6.00\\times \\qquad \\frac{920.0}{205.0} = 4.4878\\times \\qquad \\frac{940.0}{290.0} = 3.2414\\times$$

**Step 5 — Payable turnover. Numerator is COGS.**

$$\\frac{720.0}{96.0} = 7.50\\times \\qquad \\frac{748.0}{110.0} = 6.80\\times \\qquad \\frac{768.0}{160.0} = 4.80\\times$$

**Step 6 — Working capital turnover.**

$$\\text{WC}_{2022} = 380.0 - 180.0 = 200.0 \\quad\\Rightarrow\\quad \\frac{900.0}{200.0} = 4.50\\times$$
$$\\text{WC}_{2023} = 480.0 - 210.0 = 270.0 \\quad\\Rightarrow\\quad \\frac{920.0}{270.0} = 3.4074\\times$$
$$\\text{WC}_{2024} = 650.0 - 300.0 = 350.0 \\quad\\Rightarrow\\quad \\frac{940.0}{350.0} = 2.6857\\times$$

**Step 7 — Convert to days.**

FY2022:
$$\\text{DIO} = \\frac{365}{6.00} = 60.83 \\qquad \\text{DSO} = \\frac{365}{6.00} = 60.83 \\qquad \\text{DPO} = \\frac{365}{7.50} = 48.67$$

FY2023:
$$\\text{DIO} = \\frac{365}{4.00} = 91.25 \\qquad \\text{DSO} = \\frac{365}{4.4878} = 81.33 \\qquad \\text{DPO} = \\frac{365}{6.80} = 53.68$$

FY2024:
$$\\text{DIO} = \\frac{365}{2.40} = 152.08 \\qquad \\text{DSO} = \\frac{365}{3.2414} = 112.61 \\qquad \\text{DPO} = \\frac{365}{4.80} = 76.04$$

**Step 8 — Cash conversion cycle.**

$$\\text{CCC}_{2022} = 60.83 + 60.83 - 48.67 = 73.00 \\text{ days}$$
$$\\text{CCC}_{2023} = 91.25 + 81.33 - 53.68 = 118.91 \\text{ days}$$
$$\\text{CCC}_{2024} = 152.08 + 112.61 - 76.04 = 188.65 \\text{ days}$$

**Step 9 — Cost the deterioration.**

$$\\Delta\\text{CCC} = 188.65 - 73.00 = 115.65 \\text{ days}$$
$$\\Delta\\text{Working Capital} = \\frac{115.65}{365} \\times 940.0 = 0.31685 \\times 940.0 = \\text{BDT } 297.8 \\text{ cr}$$

At a 13% working capital rate:

$$297.8 \\times 0.13 = \\text{BDT } 38.7 \\text{ cr of additional annual finance cost}$$

FY2024 net profit was BDT 9.4 crore. **The extra funding cost alone is four times the surviving profit.**

**Step 10 — The turnover–margin identity, checked each year.**

$$\\text{FY2022: } \\frac{45.0}{900.0} = 5.00\\% \\quad\\Rightarrow\\quad 5.00 \\times 0.90 = 4.50\\% = \\frac{45.0}{1{,}000.0} \\;\\checkmark$$
$$\\text{FY2023: } \\frac{27.6}{920.0} = 3.00\\% \\quad\\Rightarrow\\quad 3.00 \\times 0.80 = 2.40\\% = \\frac{27.6}{1{,}150.0} \\;\\checkmark$$
$$\\text{FY2024: } \\frac{9.4}{940.0} = 1.00\\% \\quad\\Rightarrow\\quad 1.00 \\times 0.7231 = 0.72\\% = \\frac{9.4}{1{,}300.0} \\;\\checkmark$$

**Both factors fell together.** Margin fell from 5.00% to 1.00%; turnover fell from 0.90× to 0.72×. ROA collapsed from 4.50% to 0.72% — a fall of 84%.

**Step 11 — The divergence flags, FY2022 to FY2024.**

$$g_{\\text{Revenue}} = \\left(\\frac{940.0}{900.0} - 1\\right) \\times 100 = 4.44\\%$$
$$g_{\\text{Receivables}} = \\left(\\frac{290.0}{150.0} - 1\\right) \\times 100 = 93.33\\%$$
$$D_{AR} = 93.33 - 4.44 = 88.89 \\text{ pp} \\quad\\Rightarrow\\quad \\textbf{SEVERE}$$

$$g_{\\text{COGS}} = \\left(\\frac{768.0}{720.0} - 1\\right) \\times 100 = 6.67\\%$$
$$g_{\\text{Inventory}} = \\left(\\frac{320.0}{120.0} - 1\\right) \\times 100 = 166.67\\%$$
$$D_{INV} = 166.67 - 6.67 = 160.00 \\text{ pp} \\quad\\Rightarrow\\quad \\textbf{SEVERE}$$

---

**Interpretation.** Read the sequence in the order it must be read.

**Fixed asset turnover flat rules out the factory.** If the plant were idle or a new line had failed to fill, this ratio would have fallen. It did not. Whatever went wrong went wrong between purchase and collection.

**Inventory turnover 6.00× → 2.40× is the primary lesion.** Five months of production sitting in a warehouse for a woven exporter is not a stocking decision. IAS 2 requires the lower of cost and net realisable value. A DIO of 152 days on fabric with seasonal buyer specifications is prima facie evidence that part of that pile will not clear at cost. **No write-down has been taken, which means the FY2023 and FY2024 profit figures include gross profit on goods that will not sell.**

**Receivable turnover 6.00× → 3.24× is the secondary lesion, and it is the more dangerous one.** DSO of 113 days on an export book means a substantial portion is well past terms. IFRS 9 expected credit loss provisioning has not moved to reflect it. This is exactly the signature Chapter 13 described for revenue recognised ahead of collection — from the outside, a genuine collections crisis and channel stuffing are indistinguishable, and **the correct analytical response to both is the same: stop treating the reported profit as cash.**

**Payable turnover falling is the tell that the company knows.** DPO rising from 49 to 76 days is not a negotiated improvement in terms. It is a company that cannot fund itself and is silently borrowing from its suppliers because its bank has stopped extending. Suppliers notice this before analysts do. When they tighten terms, the CCC gets worse again, and the loop closes.

**The lesson is not that revenue was flat. The lesson is that flat revenue with a 116-day CCC deterioration is a company converting its own profit into inventory and invoices, and then borrowing at 13% to carry them.**`,
      bn: `**কোম্পানি।** সোনালী টেক্সটাইল মিলস লিমিটেড, একটি ডিএসই-তালিকাভুক্ত বোনা কাপড় রপ্তানিকারক। তিনটি অর্থবছর। সব অঙ্ক কোটি টাকায়; সব স্থিতিপত্র ইনপুট প্রারম্ভিক ও সমাপনীর গড়। বাংলাদেশে গৃহীত IFRS অনুযায়ী প্রস্তুত।

| ইনপুট | FY2022 | FY2023 | FY2024 |
|---|---|---|---|
| রাজস্ব | ৯০০.০ | ৯২০.০ | ৯৪০.০ |
| বিক্রীত পণ্যের ব্যয় | ৭২০.০ | ৭৪৮.০ | ৭৬৮.০ |
| নিট মুনাফা | ৪৫.০ | ২৭.৬ | ৯.৪ |
| গড় মোট সম্পদ | ১,০০০.০ | ১,১৫০.০ | ১,৩০০.০ |
| গড় নিট স্থায়ী সম্পদ | ৬০০.০ | ৬২০.০ | ৬৪০.০ |
| গড় মজুদ | ১২০.০ | ১৮৭.০ | ৩২০.০ |
| গড় প্রাপ্য | ১৫০.০ | ২০৫.০ | ২৯০.০ |
| গড় প্রদেয় | ৯৬.০ | ১১০.০ | ১৬০.০ |
| গড় চলতি সম্পদ | ৩৮০.০ | ৪৮০.০ | ৬৫০.০ |
| গড় চলতি দায় | ১৮০.০ | ২১০.০ | ৩০০.০ |

---

**ধাপ ১ — তিন বছরের সম্পদ টার্নওভার।**

$$\\text{FY2022: } \\frac{900.0}{1{,}000.0} = 0.90\\times \\qquad \\text{FY2023: } \\frac{920.0}{1{,}150.0} = 0.80\\times \\qquad \\text{FY2024: } \\frac{940.0}{1{,}300.0} = 0.72\\times$$

সম্পদ ৩০% বেড়েছে, রাজস্ব বেড়েছে ৪.৪%। **স্থিতিপত্রে এমন কিছু যুক্ত হচ্ছে যা বিক্রয় তৈরি করছে না।**

**ধাপ ২ — স্থায়ী সম্পদ টার্নওভার।**

$$\\frac{900.0}{600.0} = 1.50\\times \\qquad \\frac{920.0}{620.0} = 1.48\\times \\qquad \\frac{940.0}{640.0} = 1.47\\times$$

প্রায় অপরিবর্তিত। **এটি কারণ হিসেবে কারখানাকে বাদ দেয়।** সমস্যা চলতি সম্পদে।

**ধাপ ৩ — মজুদ টার্নওভার। লব হলো COGS, রাজস্ব নয়।**

$$\\frac{720.0}{120.0} = 6.00\\times \\qquad \\frac{748.0}{187.0} = 4.00\\times \\qquad \\frac{768.0}{320.0} = 2.40\\times$$

**ধাপ ৪ — প্রাপ্য টার্নওভার। লব হলো রাজস্ব।**

$$\\frac{900.0}{150.0} = 6.00\\times \\qquad \\frac{920.0}{205.0} = 4.4878\\times \\qquad \\frac{940.0}{290.0} = 3.2414\\times$$

**ধাপ ৫ — প্রদেয় টার্নওভার। লব হলো COGS।**

$$\\frac{720.0}{96.0} = 7.50\\times \\qquad \\frac{748.0}{110.0} = 6.80\\times \\qquad \\frac{768.0}{160.0} = 4.80\\times$$

**ধাপ ৬ — কার্যকরী মূলধন টার্নওভার।**

$$\\text{WC}_{2022} = 380.0 - 180.0 = 200.0 \\quad\\Rightarrow\\quad \\frac{900.0}{200.0} = 4.50\\times$$
$$\\text{WC}_{2023} = 480.0 - 210.0 = 270.0 \\quad\\Rightarrow\\quad \\frac{920.0}{270.0} = 3.4074\\times$$
$$\\text{WC}_{2024} = 650.0 - 300.0 = 350.0 \\quad\\Rightarrow\\quad \\frac{940.0}{350.0} = 2.6857\\times$$

**ধাপ ৭ — দিনে রূপান্তর।**

FY2022:
$$\\text{DIO} = \\frac{365}{6.00} = 60.83 \\qquad \\text{DSO} = \\frac{365}{6.00} = 60.83 \\qquad \\text{DPO} = \\frac{365}{7.50} = 48.67$$

FY2023:
$$\\text{DIO} = \\frac{365}{4.00} = 91.25 \\qquad \\text{DSO} = \\frac{365}{4.4878} = 81.33 \\qquad \\text{DPO} = \\frac{365}{6.80} = 53.68$$

FY2024:
$$\\text{DIO} = \\frac{365}{2.40} = 152.08 \\qquad \\text{DSO} = \\frac{365}{3.2414} = 112.61 \\qquad \\text{DPO} = \\frac{365}{4.80} = 76.04$$

**ধাপ ৮ — নগদ রূপান্তর চক্র।**

$$\\text{CCC}_{2022} = 60.83 + 60.83 - 48.67 = 73.00 \\text{ দিন}$$
$$\\text{CCC}_{2023} = 91.25 + 81.33 - 53.68 = 118.91 \\text{ দিন}$$
$$\\text{CCC}_{2024} = 152.08 + 112.61 - 76.04 = 188.65 \\text{ দিন}$$

**ধাপ ৯ — অবনতির দাম হিসাব করুন।**

$$\\Delta\\text{CCC} = 188.65 - 73.00 = 115.65 \\text{ দিন}$$
$$\\Delta\\text{Working Capital} = \\frac{115.65}{365} \\times 940.0 = 297.8 \\text{ কোটি টাকা}$$

১৩% কার্যকরী মূলধন হারে:

$$297.8 \\times 0.13 = 38.7 \\text{ কোটি টাকার অতিরিক্ত বার্ষিক অর্থায়ন ব্যয়}$$

FY2024-এর নিট মুনাফা ছিল ৯.৪ কোটি টাকা। **কেবল অতিরিক্ত অর্থায়ন ব্যয়ই টিকে থাকা মুনাফার চার গুণ।**

**ধাপ ১০ — টার্নওভার–মার্জিন অভেদ, প্রতি বছর যাচাই।**

$$\\text{FY2022: } \\frac{45.0}{900.0} = 5.00\\% \\quad\\Rightarrow\\quad 5.00 \\times 0.90 = 4.50\\% = \\frac{45.0}{1{,}000.0} \\;\\checkmark$$
$$\\text{FY2023: } \\frac{27.6}{920.0} = 3.00\\% \\quad\\Rightarrow\\quad 3.00 \\times 0.80 = 2.40\\% = \\frac{27.6}{1{,}150.0} \\;\\checkmark$$
$$\\text{FY2024: } \\frac{9.4}{940.0} = 1.00\\% \\quad\\Rightarrow\\quad 1.00 \\times 0.7231 = 0.72\\% = \\frac{9.4}{1{,}300.0} \\;\\checkmark$$

**দুটি উপাদানই একসঙ্গে পড়েছে।** মার্জিন ৫.০০% থেকে ১.০০%; টার্নওভার ০.৯০× থেকে ০.৭২×। ROA ৪.৫০% থেকে ০.৭২%-এ ধসেছে — ৮৪% পতন।

**ধাপ ১১ — ডাইভারজেন্স ফ্ল্যাগ, FY2022 থেকে FY2024।**

$$g_{\\text{Revenue}} = \\left(\\frac{940.0}{900.0} - 1\\right) \\times 100 = 4.44\\%$$
$$g_{\\text{Receivables}} = \\left(\\frac{290.0}{150.0} - 1\\right) \\times 100 = 93.33\\%$$
$$D_{AR} = 93.33 - 4.44 = 88.89 \\text{ পয়েন্ট} \\quad\\Rightarrow\\quad \\textbf{গুরুতর}$$

$$g_{\\text{COGS}} = \\left(\\frac{768.0}{720.0} - 1\\right) \\times 100 = 6.67\\%$$
$$g_{\\text{Inventory}} = \\left(\\frac{320.0}{120.0} - 1\\right) \\times 100 = 166.67\\%$$
$$D_{INV} = 166.67 - 6.67 = 160.00 \\text{ পয়েন্ট} \\quad\\Rightarrow\\quad \\textbf{গুরুতর}$$

---

**ব্যাখ্যা।** ক্রমটি যে ক্রমে পড়া উচিত সেভাবেই পড়ুন।

**স্থায়ী সম্পদ টার্নওভার স্থির থাকা কারখানাকে বাদ দেয়।** প্ল্যান্ট অলস থাকলে বা নতুন লাইন ভরতে ব্যর্থ হলে এই অনুপাত কমত। কমেনি। যা ভুল হয়েছে তা ক্রয় ও আদায়ের মাঝখানে হয়েছে।

**মজুদ টার্নওভার ৬.০০× → ২.৪০× মূল ক্ষত।** একটি বোনা রপ্তানিকারকের জন্য পাঁচ মাসের উৎপাদন গুদামে পড়ে থাকা মজুদ-সিদ্ধান্ত নয়। IAS 2 ব্যয় ও নিট আদায়যোগ্য মূল্যের মধ্যে যেটি কম তা দাবি করে। মৌসুমি ক্রেতা-নির্দেশনার কাপড়ে ১৫২ দিনের DIO প্রাথমিকভাবেই প্রমাণ যে ঐ স্তূপের একটি অংশ ব্যয়মূল্যে ছাড়বে না। **কোনো অবচয় নেওয়া হয়নি, অর্থাৎ FY2023 ও FY2024-এর মুনাফার অঙ্কে এমন পণ্যের গ্রস মুনাফা আছে যা বিক্রি হবে না।**

**প্রাপ্য টার্নওভার ৬.০০× → ৩.২৪× দ্বিতীয় ক্ষত, এবং এটিই বেশি বিপজ্জনক।** রপ্তানি খাতায় ১১৩ দিনের DSO মানে উল্লেখযোগ্য অংশ শর্তের অনেক বাইরে। IFRS 9 প্রত্যাশিত ঋণ ক্ষতির সঞ্চিতি তা প্রতিফলিত করতে নড়েনি। এটিই ঠিক সেই স্বাক্ষর যা অধ্যায় ১৩ আদায়ের আগে স্বীকৃত রাজস্বের জন্য বর্ণনা করেছে — বাইরে থেকে প্রকৃত আদায় সংকট ও চ্যানেল স্টাফিং অভিন্ন দেখায়, এবং **দুটির সঠিক বিশ্লেষণী প্রতিক্রিয়া একই: প্রতিবেদিত মুনাফাকে আর নগদ হিসেবে গণ্য করা বন্ধ করুন।**

**প্রদেয় টার্নওভার কমা সেই লক্ষণ যা বলে কোম্পানি জানে।** DPO ৪৯ থেকে ৭৬ দিনে ওঠা শর্তে দরকষাকষির উন্নতি নয়। এটি এমন এক কোম্পানি যে নিজেকে অর্থায়ন করতে পারছে না এবং নীরবে সরবরাহকারীদের কাছ থেকে ধার করছে, কারণ তার ব্যাংক বাড়ানো বন্ধ করেছে। বিশ্লেষকদের আগেই সরবরাহকারীরা এটি লক্ষ করেন। তাঁরা শর্ত কড়া করলে CCC আবার খারাপ হয়, এবং চক্রটি বন্ধ হয়।

**শিক্ষাটি এই নয় যে রাজস্ব স্থির ছিল। শিক্ষাটি হলো ১১৬ দিনের CCC অবনতিসহ স্থির রাজস্ব মানে একটি কোম্পানি নিজের মুনাফাকে মজুদ ও চালানে রূপান্তরিত করছে, তারপর সেগুলো বহন করতে ১৩%-এ ধার করছে।**`,
    },

    excel: {
      en: `\`\`\`
A1:  SONALI TEXTILE MILLS LTD — activity trend (BDT crore)

              B2: FY2022    C2: FY2023    D2: FY2024
A3:  Revenue                  B3: 900     C3: 920     D3: 940
A4:  Cost of Goods Sold       B4: 720     C4: 748     D4: 768
A5:  Net Profit               B5: 45      C5: 27.6    D5: 9.4
A6:  Avg Total Assets         B6: 1000    C6: 1150    D6: 1300
A7:  Avg Net Fixed Assets     B7: 600     C7: 620     D7: 640
A8:  Avg Inventory            B8: 120     C8: 187     D8: 320
A9:  Avg Receivables          B9: 150     C9: 205     D9: 290
A10: Avg Payables             B10: 96     C10: 110    D10: 160
A11: Avg Current Assets       B11: 380    C11: 480    D11: 650
A12: Avg Current Liabilities  B12: 180    C12: 210    D12: 300

A14: Asset Turnover (x)            B14: =B3/B6         (fill C14:D14)
A15: Fixed Asset Turnover (x)      B15: =B3/B7
A16: Inventory Turnover (x)        B16: =B4/B8         <- COGS, not revenue
A17: Receivable Turnover (x)       B17: =B3/B9
A18: Payable Turnover (x)          B18: =B4/B10        <- COGS, not revenue
A19: Working Capital Turnover (x)  B19: =B3/(B11-B12)

A21: DIO (days)                    B21: =365/B16
A22: DSO (days)                    B22: =365/B17
A23: DPO (days)                    B23: =365/B18
A24: CASH CONVERSION CYCLE (days)  B24: =B21+B22-B23

A26: Net Margin (%)                B26: =B5/B3*100
A27: ROA (%) = NM x AT             B27: =B26*B14

A29: DIVERGENCE TEST (FY2022 -> FY2024)
A30: Revenue growth (%)            B30: =(D3/B3-1)*100
A31: Receivable growth (%)         B31: =(D9/B9-1)*100
A32: AR minus Revenue gap (pp)     B32: =B31-B30
A33: RECEIVABLE FLAG               B33: =IF(B32>50,"SEVERE",IF(B32>15,"WARNING","ok"))
A34: COGS growth (%)               B34: =(D4/B4-1)*100
A35: Inventory growth (%)          B35: =(D8/B8-1)*100
A36: Inventory minus COGS gap (pp) B36: =B35-B34
A37: INVENTORY FLAG                B37: =IF(B36>50,"SEVERE",IF(B36>15,"WARNING","ok"))

A39: CCC deterioration (days)              B39: =D24-B24
A40: Extra working capital tied up (BDT cr) B40: =B39/365*D3
\`\`\`

**B40 is the cell that converts an accounting observation into money.** A CCC that worsens by 116 days on BDT 940 crore of revenue is BDT 298 crore of funding the company did not previously need. Multiply by your estimate of its borrowing rate and compare the result to net profit. On Sonali the extra finance cost exceeds the entire remaining profit by four times.

**Note the two \`<-\` comments on B16 and B18.** They are there because this is the error that ruins the sheet. Using revenue as the numerator for inventory turnover gives Sonali an FY2024 inventory turnover of 940 ÷ 320 = 2.94× instead of 2.40×, a DIO of 124 days instead of 152, and a CCC understated by 28 days. The trend still shows, but the magnitude is wrong and the peer comparison is wrong.

**Extend the sheet to five columns as soon as you have five years.** Three years shows a deterioration; five years distinguishes a deterioration from a cycle. Textile is cyclical. One bad pair of years is not a diagnosis.`,
      bn: `\`\`\`
A1:  সোনালী টেক্সটাইল মিলস লিমিটেড — কার্যক্রম ধারা (কোটি টাকা)

              B2: FY2022    C2: FY2023    D2: FY2024
A3:  রাজস্ব                    B3: 900     C3: 920     D3: 940
A4:  বিক্রীত পণ্যের ব্যয়        B4: 720     C4: 748     D4: 768
A5:  নিট মুনাফা                B5: 45      C5: 27.6    D5: 9.4
A6:  গড় মোট সম্পদ              B6: 1000    C6: 1150    D6: 1300
A7:  গড় নিট স্থায়ী সম্পদ        B7: 600     C7: 620     D7: 640
A8:  গড় মজুদ                  B8: 120     C8: 187     D8: 320
A9:  গড় প্রাপ্য                B9: 150     C9: 205     D9: 290
A10: গড় প্রদেয়                B10: 96     C10: 110    D10: 160
A11: গড় চলতি সম্পদ            B11: 380    C11: 480    D11: 650
A12: গড় চলতি দায়             B12: 180    C12: 210    D12: 300

A14: সম্পদ টার্নওভার (x)             B14: =B3/B6         (C14:D14 পূরণ করুন)
A15: স্থায়ী সম্পদ টার্নওভার (x)       B15: =B3/B7
A16: মজুদ টার্নওভার (x)              B16: =B4/B8         <- COGS, রাজস্ব নয়
A17: প্রাপ্য টার্নওভার (x)            B17: =B3/B9
A18: প্রদেয় টার্নওভার (x)            B18: =B4/B10        <- COGS, রাজস্ব নয়
A19: কার্যকরী মূলধন টার্নওভার (x)     B19: =B3/(B11-B12)

A21: DIO (দিন)                      B21: =365/B16
A22: DSO (দিন)                      B22: =365/B17
A23: DPO (দিন)                      B23: =365/B18
A24: নগদ রূপান্তর চক্র (দিন)          B24: =B21+B22-B23

A26: নিট মার্জিন (%)                 B26: =B5/B3*100
A27: ROA (%) = NM x AT              B27: =B26*B14

A29: ডাইভারজেন্স পরীক্ষা (FY2022 -> FY2024)
A30: রাজস্ব প্রবৃদ্ধি (%)             B30: =(D3/B3-1)*100
A31: প্রাপ্য প্রবৃদ্ধি (%)            B31: =(D9/B9-1)*100
A32: প্রাপ্য বিয়োগ রাজস্ব ব্যবধান     B32: =B31-B30
A33: প্রাপ্য ফ্ল্যাগ                  B33: =IF(B32>50,"SEVERE",IF(B32>15,"WARNING","ok"))
A34: COGS প্রবৃদ্ধি (%)              B34: =(D4/B4-1)*100
A35: মজুদ প্রবৃদ্ধি (%)              B35: =(D8/B8-1)*100
A36: মজুদ বিয়োগ COGS ব্যবধান        B36: =B35-B34
A37: মজুদ ফ্ল্যাগ                    B37: =IF(B36>50,"SEVERE",IF(B36>15,"WARNING","ok"))

A39: CCC অবনতি (দিন)                       B39: =D24-B24
A40: অতিরিক্ত আটকে থাকা কার্যকরী মূলধন (কোটি) B40: =B39/365*D3
\`\`\`

**B40-ই সেই ঘর যা একটি হিসাবি পর্যবেক্ষণকে টাকায় রূপান্তরিত করে।** ৯৪০ কোটি টাকার রাজস্বে ১১৬ দিন খারাপ হওয়া CCC মানে ২৯৮ কোটি টাকার অর্থায়ন যা কোম্পানির আগে দরকার ছিল না। এর ঋণ হারের আপনার অনুমান দিয়ে গুণ করে ফলাফলটি নিট মুনাফার সঙ্গে তুলনা করুন। সোনালীতে অতিরিক্ত অর্থায়ন ব্যয় অবশিষ্ট সম্পূর্ণ মুনাফার চার গুণ ছাড়িয়ে যায়।

**B16 ও B18-এ দুটি \`<-\` মন্তব্য লক্ষ করুন।** এগুলো আছে কারণ এই ভুলটিই শিটটি নষ্ট করে। মজুদ টার্নওভারের লব হিসেবে রাজস্ব ব্যবহার করলে সোনালীর FY2024 মজুদ টার্নওভার হয় ৯৪০ ÷ ৩২০ = ২.৯৪×, ২.৪০× নয়; DIO হয় ১২৪ দিন, ১৫২ নয়; এবং CCC ২৮ দিন কম দেখায়। ধারাটি তবু দেখা যায়, কিন্তু মাত্রা ভুল এবং সমকক্ষ তুলনাও ভুল।

**পাঁচ বছরের তথ্য পাওয়ামাত্র শিটটিকে পাঁচ কলামে বাড়ান।** তিন বছর একটি অবনতি দেখায়; পাঁচ বছর অবনতিকে চক্র থেকে আলাদা করে। বস্ত্র চক্রীয়। দুটি খারাপ বছর কোনো রোগনির্ণয় নয়।`,
    },

    python: {
      en: `\`\`\`python
"""
Chapter 16 - Efficiency and activity ratios across a three-year window.
Educational. All figures in BDT crore. Pure standard library.
"""
from dataclasses import dataclass
from typing import List

DAYS = 365


@dataclass
class Efficiency:
    """One fiscal year of activity ratios. All balance-sheet inputs are AVERAGES."""
    year: str
    revenue: float
    cogs: float
    net_profit: float
    avg_total_assets: float
    avg_fixed_assets: float
    avg_inventory: float
    avg_receivables: float
    avg_payables: float
    avg_current_assets: float
    avg_current_liabilities: float

    # ---- turnover ratios -------------------------------------------------
    @property
    def asset_turnover(self) -> float:
        return self.revenue / self.avg_total_assets

    @property
    def fixed_asset_turnover(self) -> float:
        return self.revenue / self.avg_fixed_assets

    @property
    def inventory_turnover(self) -> float:
        return self.cogs / self.avg_inventory

    @property
    def receivable_turnover(self) -> float:
        return self.revenue / self.avg_receivables

    @property
    def payable_turnover(self) -> float:
        return self.cogs / self.avg_payables

    @property
    def working_capital(self) -> float:
        return self.avg_current_assets - self.avg_current_liabilities

    @property
    def working_capital_turnover(self) -> float:
        return self.revenue / self.working_capital

    # ---- days versions ----------------------------------------------------
    @property
    def dio(self) -> float:
        return DAYS / self.inventory_turnover

    @property
    def dso(self) -> float:
        return DAYS / self.receivable_turnover

    @property
    def dpo(self) -> float:
        return DAYS / self.payable_turnover

    @property
    def ccc(self) -> float:
        """Cash conversion cycle in days."""
        return self.dio + self.dso - self.dpo

    # ---- the turnover-margin link ----------------------------------------
    @property
    def net_margin(self) -> float:
        return self.net_profit / self.revenue * 100

    @property
    def roa(self) -> float:
        """Identically net margin x asset turnover."""
        return self.net_margin * self.asset_turnover


def growth_pct(first: float, last: float) -> float:
    return (last / first - 1) * 100


def divergence(first: Efficiency, last: Efficiency) -> dict:
    """Compare balance-sheet growth against the flow it is supposed to track."""
    return {
        "revenue_growth": growth_pct(first.revenue, last.revenue),
        "receivable_growth": growth_pct(first.avg_receivables, last.avg_receivables),
        "cogs_growth": growth_pct(first.cogs, last.cogs),
        "inventory_growth": growth_pct(first.avg_inventory, last.avg_inventory),
    }


def flag(gap_pp: float) -> str:
    if gap_pp > 50:
        return "SEVERE"
    if gap_pp > 15:
        return "WARNING"
    return "ok"


def trend_direction(series: List[float], higher_is_better: bool = True) -> str:
    """
    A monotonic move across the whole window is the signal that matters.
    For turnover ratios higher is better; for day-counts and the cash
    conversion cycle it is the reverse.
    """
    falling = all(series[i] > series[i + 1] for i in range(len(series) - 1))
    rising = all(series[i] < series[i + 1] for i in range(len(series) - 1))
    if not (falling or rising):
        return "mixed"
    good = rising if higher_is_better else falling
    return "IMPROVING (monotonic)" if good else "DETERIORATING (monotonic)"


if __name__ == "__main__":
    years = [
        Efficiency(
            year="FY2022", revenue=900.0, cogs=720.0, net_profit=45.0,
            avg_total_assets=1000.0, avg_fixed_assets=600.0,
            avg_inventory=120.0, avg_receivables=150.0, avg_payables=96.0,
            avg_current_assets=380.0, avg_current_liabilities=180.0,
        ),
        Efficiency(
            year="FY2023", revenue=920.0, cogs=748.0, net_profit=27.6,
            avg_total_assets=1150.0, avg_fixed_assets=620.0,
            avg_inventory=187.0, avg_receivables=205.0, avg_payables=110.0,
            avg_current_assets=480.0, avg_current_liabilities=210.0,
        ),
        Efficiency(
            year="FY2024", revenue=940.0, cogs=768.0, net_profit=9.4,
            avg_total_assets=1300.0, avg_fixed_assets=640.0,
            avg_inventory=320.0, avg_receivables=290.0, avg_payables=160.0,
            avg_current_assets=650.0, avg_current_liabilities=300.0,
        ),
    ]

    print("SONALI TEXTILE MILLS LTD - activity ratio trend")
    print("=" * 62)
    header = f"{'Ratio':<26}" + "".join(f"{y.year:>12}" for y in years)
    print(header)
    print("-" * 62)

    def row(label, fn, fmt="{:>12.2f}"):
        print(f"{label:<26}" + "".join(fmt.format(fn(y)) for y in years))

    row("Revenue (BDT cr)", lambda y: y.revenue)
    row("Asset turnover (x)", lambda y: y.asset_turnover)
    row("Fixed asset turnover (x)", lambda y: y.fixed_asset_turnover)
    row("Inventory turnover (x)", lambda y: y.inventory_turnover)
    row("Receivable turnover (x)", lambda y: y.receivable_turnover)
    row("Payable turnover (x)", lambda y: y.payable_turnover)
    row("WC turnover (x)", lambda y: y.working_capital_turnover)
    print("-" * 62)
    row("DIO (days)", lambda y: y.dio)
    row("DSO (days)", lambda y: y.dso)
    row("DPO (days)", lambda y: y.dpo)
    row("Cash conv. cycle (days)", lambda y: y.ccc)
    print("-" * 62)
    row("Net margin (%)", lambda y: y.net_margin)
    row("ROA (%)", lambda y: y.roa)
    print("=" * 62)

    d = divergence(years[0], years[-1])
    ar_gap = d["receivable_growth"] - d["revenue_growth"]
    inv_gap = d["inventory_growth"] - d["cogs_growth"]

    print("DIVERGENCE TEST (FY2022 -> FY2024)")
    print(f"  Revenue growth        : {d['revenue_growth']:8.2f}%")
    print(f"  Receivable growth     : {d['receivable_growth']:8.2f}%")
    print(f"  AR-Revenue gap        : {ar_gap:8.2f} pp   -> {flag(ar_gap)}")
    print(f"  COGS growth           : {d['cogs_growth']:8.2f}%")
    print(f"  Inventory growth      : {d['inventory_growth']:8.2f}%")
    print(f"  Inv-COGS gap          : {inv_gap:8.2f} pp   -> {flag(inv_gap)}")
    print("-" * 62)
    print("TREND DIRECTION")
    print(f"  Inventory turnover    : {trend_direction([y.inventory_turnover for y in years])}")
    print(f"  Receivable turnover   : {trend_direction([y.receivable_turnover for y in years])}")
    print(f"  Asset turnover        : {trend_direction([y.asset_turnover for y in years])}")
    print(f"  Cash conversion cycle : {trend_direction([y.ccc for y in years], higher_is_better=False)}")
\`\`\`

**Expected output:**

\`\`\`
SONALI TEXTILE MILLS LTD - activity ratio trend
==============================================================
Ratio                           FY2022      FY2023      FY2024
--------------------------------------------------------------
Revenue (BDT cr)                900.00      920.00      940.00
Asset turnover (x)                0.90        0.80        0.72
Fixed asset turnover (x)          1.50        1.48        1.47
Inventory turnover (x)            6.00        4.00        2.40
Receivable turnover (x)           6.00        4.49        3.24
Payable turnover (x)              7.50        6.80        4.80
WC turnover (x)                   4.50        3.41        2.69
--------------------------------------------------------------
DIO (days)                       60.83       91.25      152.08
DSO (days)                       60.83       81.33      112.61
DPO (days)                       48.67       53.68       76.04
Cash conv. cycle (days)          73.00      118.91      188.65
--------------------------------------------------------------
Net margin (%)                    5.00        3.00        1.00
ROA (%)                           4.50        2.40        0.72
==============================================================
DIVERGENCE TEST (FY2022 -> FY2024)
  Revenue growth        :     4.44%
  Receivable growth     :    93.33%
  AR-Revenue gap        :    88.89 pp   -> SEVERE
  COGS growth           :     6.67%
  Inventory growth      :   166.67%
  Inv-COGS gap          :   160.00 pp   -> SEVERE
--------------------------------------------------------------
TREND DIRECTION
  Inventory turnover    : DETERIORATING (monotonic)
  Receivable turnover   : DETERIORATING (monotonic)
  Asset turnover        : DETERIORATING (monotonic)
  Cash conversion cycle : DETERIORATING (monotonic)
\`\`\`

**Note the \`higher_is_better\` flag on \`trend_direction\`.** Without it, a monotonically rising cash conversion cycle would be reported as "improving" because the numbers are going up. Direction of change and direction of health are not the same thing, and encoding that distinction in the function signature is cheaper than remembering it every time you read the output.

**Why \`roa\` is defined as \`net_margin * asset_turnover\` rather than \`net_profit / avg_total_assets\`.** The two are algebraically identical. Writing it the long way makes the decomposition visible in the code, so that when ROA falls you can see immediately which of the two factors moved. On Sonali both moved, which is the worst case.

**The class takes averages as inputs rather than computing them.** This differs from Chapter 15's \`Profitability\` class deliberately: here you are building a multi-year series, and forcing opening and closing balances for every line across every year would double the input surface without adding discipline you have not already learned. Compute the averages once, feed them in, and keep the year objects readable.`,
      bn: `\`\`\`python
"""
অধ্যায় ১৬ — তিন বছরের সময়কালে দক্ষতা ও কার্যক্রম অনুপাত।
শিক্ষামূলক। সব অঙ্ক কোটি টাকায়। কেবল প্রমিত লাইব্রেরি।
"""
from dataclasses import dataclass
from typing import List

DAYS = 365


@dataclass
class Efficiency:
    """এক অর্থবছরের কার্যক্রম অনুপাত। সব স্থিতিপত্র ইনপুট গড়।"""
    year: str
    revenue: float
    cogs: float
    net_profit: float
    avg_total_assets: float
    avg_fixed_assets: float
    avg_inventory: float
    avg_receivables: float
    avg_payables: float
    avg_current_assets: float
    avg_current_liabilities: float

    # ---- টার্নওভার অনুপাত --------------------------------------------------
    @property
    def asset_turnover(self) -> float:
        return self.revenue / self.avg_total_assets

    @property
    def fixed_asset_turnover(self) -> float:
        return self.revenue / self.avg_fixed_assets

    @property
    def inventory_turnover(self) -> float:
        return self.cogs / self.avg_inventory

    @property
    def receivable_turnover(self) -> float:
        return self.revenue / self.avg_receivables

    @property
    def payable_turnover(self) -> float:
        return self.cogs / self.avg_payables

    @property
    def working_capital(self) -> float:
        return self.avg_current_assets - self.avg_current_liabilities

    @property
    def working_capital_turnover(self) -> float:
        return self.revenue / self.working_capital

    # ---- দিন-রূপ ----------------------------------------------------------
    @property
    def dio(self) -> float:
        return DAYS / self.inventory_turnover

    @property
    def dso(self) -> float:
        return DAYS / self.receivable_turnover

    @property
    def dpo(self) -> float:
        return DAYS / self.payable_turnover

    @property
    def ccc(self) -> float:
        """দিনে নগদ রূপান্তর চক্র।"""
        return self.dio + self.dso - self.dpo

    # ---- টার্নওভার-মার্জিন সংযোগ --------------------------------------------
    @property
    def net_margin(self) -> float:
        return self.net_profit / self.revenue * 100

    @property
    def roa(self) -> float:
        """অভিন্নভাবে নিট মার্জিন × সম্পদ টার্নওভার।"""
        return self.net_margin * self.asset_turnover


def growth_pct(first: float, last: float) -> float:
    return (last / first - 1) * 100


def divergence(first: Efficiency, last: Efficiency) -> dict:
    """স্থিতিপত্রের প্রবৃদ্ধিকে যে প্রবাহ তাকে অনুসরণ করার কথা তার সঙ্গে তুলনা করুন।"""
    return {
        "revenue_growth": growth_pct(first.revenue, last.revenue),
        "receivable_growth": growth_pct(first.avg_receivables, last.avg_receivables),
        "cogs_growth": growth_pct(first.cogs, last.cogs),
        "inventory_growth": growth_pct(first.avg_inventory, last.avg_inventory),
    }


def flag(gap_pp: float) -> str:
    if gap_pp > 50:
        return "SEVERE"
    if gap_pp > 15:
        return "WARNING"
    return "ok"


def trend_direction(series: List[float], higher_is_better: bool = True) -> str:
    """
    সম্পূর্ণ সময়কাল জুড়ে একমুখী নড়াচড়াই সেই সংকেত যা গুরুত্বপূর্ণ।
    টার্নওভার অনুপাতে বেশি হওয়া ভালো; দিন-গণনা ও নগদ রূপান্তর চক্রে উল্টো।
    """
    falling = all(series[i] > series[i + 1] for i in range(len(series) - 1))
    rising = all(series[i] < series[i + 1] for i in range(len(series) - 1))
    if not (falling or rising):
        return "mixed"
    good = rising if higher_is_better else falling
    return "IMPROVING (monotonic)" if good else "DETERIORATING (monotonic)"


if __name__ == "__main__":
    years = [
        Efficiency(
            year="FY2022", revenue=900.0, cogs=720.0, net_profit=45.0,
            avg_total_assets=1000.0, avg_fixed_assets=600.0,
            avg_inventory=120.0, avg_receivables=150.0, avg_payables=96.0,
            avg_current_assets=380.0, avg_current_liabilities=180.0,
        ),
        Efficiency(
            year="FY2023", revenue=920.0, cogs=748.0, net_profit=27.6,
            avg_total_assets=1150.0, avg_fixed_assets=620.0,
            avg_inventory=187.0, avg_receivables=205.0, avg_payables=110.0,
            avg_current_assets=480.0, avg_current_liabilities=210.0,
        ),
        Efficiency(
            year="FY2024", revenue=940.0, cogs=768.0, net_profit=9.4,
            avg_total_assets=1300.0, avg_fixed_assets=640.0,
            avg_inventory=320.0, avg_receivables=290.0, avg_payables=160.0,
            avg_current_assets=650.0, avg_current_liabilities=300.0,
        ),
    ]

    print("SONALI TEXTILE MILLS LTD - activity ratio trend")
    print("=" * 62)
    header = f"{'Ratio':<26}" + "".join(f"{y.year:>12}" for y in years)
    print(header)
    print("-" * 62)

    def row(label, fn, fmt="{:>12.2f}"):
        print(f"{label:<26}" + "".join(fmt.format(fn(y)) for y in years))

    row("Revenue (BDT cr)", lambda y: y.revenue)
    row("Asset turnover (x)", lambda y: y.asset_turnover)
    row("Fixed asset turnover (x)", lambda y: y.fixed_asset_turnover)
    row("Inventory turnover (x)", lambda y: y.inventory_turnover)
    row("Receivable turnover (x)", lambda y: y.receivable_turnover)
    row("Payable turnover (x)", lambda y: y.payable_turnover)
    row("WC turnover (x)", lambda y: y.working_capital_turnover)
    print("-" * 62)
    row("DIO (days)", lambda y: y.dio)
    row("DSO (days)", lambda y: y.dso)
    row("DPO (days)", lambda y: y.dpo)
    row("Cash conv. cycle (days)", lambda y: y.ccc)
    print("-" * 62)
    row("Net margin (%)", lambda y: y.net_margin)
    row("ROA (%)", lambda y: y.roa)
    print("=" * 62)

    d = divergence(years[0], years[-1])
    ar_gap = d["receivable_growth"] - d["revenue_growth"]
    inv_gap = d["inventory_growth"] - d["cogs_growth"]

    print("DIVERGENCE TEST (FY2022 -> FY2024)")
    print(f"  Revenue growth        : {d['revenue_growth']:8.2f}%")
    print(f"  Receivable growth     : {d['receivable_growth']:8.2f}%")
    print(f"  AR-Revenue gap        : {ar_gap:8.2f} pp   -> {flag(ar_gap)}")
    print(f"  COGS growth           : {d['cogs_growth']:8.2f}%")
    print(f"  Inventory growth      : {d['inventory_growth']:8.2f}%")
    print(f"  Inv-COGS gap          : {inv_gap:8.2f} pp   -> {flag(inv_gap)}")
    print("-" * 62)
    print("TREND DIRECTION")
    print(f"  Inventory turnover    : {trend_direction([y.inventory_turnover for y in years])}")
    print(f"  Receivable turnover   : {trend_direction([y.receivable_turnover for y in years])}")
    print(f"  Asset turnover        : {trend_direction([y.asset_turnover for y in years])}")
    print(f"  Cash conversion cycle : {trend_direction([y.ccc for y in years], higher_is_better=False)}")
\`\`\`

**প্রত্যাশিত ফলাফল:**

\`\`\`
SONALI TEXTILE MILLS LTD - activity ratio trend
==============================================================
Ratio                           FY2022      FY2023      FY2024
--------------------------------------------------------------
Revenue (BDT cr)                900.00      920.00      940.00
Asset turnover (x)                0.90        0.80        0.72
Fixed asset turnover (x)          1.50        1.48        1.47
Inventory turnover (x)            6.00        4.00        2.40
Receivable turnover (x)           6.00        4.49        3.24
Payable turnover (x)              7.50        6.80        4.80
WC turnover (x)                   4.50        3.41        2.69
--------------------------------------------------------------
DIO (days)                       60.83       91.25      152.08
DSO (days)                       60.83       81.33      112.61
DPO (days)                       48.67       53.68       76.04
Cash conv. cycle (days)          73.00      118.91      188.65
--------------------------------------------------------------
Net margin (%)                    5.00        3.00        1.00
ROA (%)                           4.50        2.40        0.72
==============================================================
DIVERGENCE TEST (FY2022 -> FY2024)
  Revenue growth        :     4.44%
  Receivable growth     :    93.33%
  AR-Revenue gap        :    88.89 pp   -> SEVERE
  COGS growth           :     6.67%
  Inventory growth      :   166.67%
  Inv-COGS gap          :   160.00 pp   -> SEVERE
--------------------------------------------------------------
TREND DIRECTION
  Inventory turnover    : DETERIORATING (monotonic)
  Receivable turnover   : DETERIORATING (monotonic)
  Asset turnover        : DETERIORATING (monotonic)
  Cash conversion cycle : DETERIORATING (monotonic)
\`\`\`

**\`trend_direction\`-এ \`higher_is_better\` ফ্ল্যাগটি লক্ষ করুন।** এটি ছাড়া একমুখীভাবে বাড়তে থাকা নগদ রূপান্তর চক্রকে "উন্নতিশীল" হিসেবে জানানো হতো, কারণ সংখ্যাগুলো বাড়ছে। পরিবর্তনের দিক ও সুস্থতার দিক এক জিনিস নয়, এবং ফাংশনের স্বাক্ষরে ঐ পার্থক্য এনকোড করা প্রতিবার ফলাফল পড়ার সময় মনে রাখার চেয়ে সস্তা।

**\`roa\` কেন \`net_profit / avg_total_assets\` নয়, \`net_margin * asset_turnover\` হিসেবে সংজ্ঞায়িত।** দুটি বীজগাণিতিকভাবে অভিন্ন। লম্বা পথে লিখলে কোডেই বিশ্লেষণটি দৃশ্যমান থাকে, যাতে ROA পড়লে আপনি তৎক্ষণাৎ দেখতে পান দুটি উপাদানের কোনটি নড়েছে। সোনালীতে দুটিই নড়েছে, যা সবচেয়ে খারাপ ঘটনা।

**ক্লাসটি গড় গণনা না করে ইনপুট হিসেবে নেয়।** এটি অধ্যায় ১৫-এর \`Profitability\` ক্লাস থেকে ইচ্ছাকৃতভাবে ভিন্ন: এখানে আপনি বহু-বছরের ধারা গড়ছেন, এবং প্রতিটি বছরের প্রতিটি লাইনে প্রারম্ভিক ও সমাপনী স্থিতি বাধ্যতামূলক করলে ইনপুটের পরিমাণ দ্বিগুণ হতো, অথচ আপনি আগেই শিখে ফেলেছেন এমন শৃঙ্খলার বাইরে নতুন কিছু যোগ করত না। গড়গুলো একবার গণনা করুন, ঢোকান, এবং বছর-অবজেক্টগুলো পাঠযোগ্য রাখুন।`,
    },

    mistakes: {
      en: `1. **Using revenue as the numerator for inventory turnover.** Inventory is carried at cost. Revenue includes gross margin. The error inflates turnover by $1/(1-\\text{gross margin})$ — 85% for a 46%-margin pharma company. Use COGS. The same applies to payable turnover.
2. **Using closing balances instead of averages.** A company that dumped inventory in the last week of the year shows a flattering turnover on closing stock. Average opening and closing, exactly as in Chapter 15.
3. **Reading a rising DPO as good working capital management.** Sometimes it is a genuinely renegotiated term. Far more often on the DSE it is a company that cannot pay, borrowing silently from suppliers because its bank has stopped extending. Cross-check against the finance cost trend and any note about overdue trade payables.
4. **Judging efficiency ratios without a sector reference.** A jeweller turning inventory 1.5× a year is normal. A pharmaceutical distributor at 1.5× is in serious trouble. Compare the company to its own history first, then to its sector, and never to a textbook number.
5. **Missing the divergence because you only looked at the ratio level.** An inventory turnover of 2.40× on its own is a fact. 6.00× → 4.00× → 2.40× on flat revenue is a diagnosis. Level tells you where the company is; trend tells you where it is going.
6. **Assuming a falling asset turnover means a bad capex decision.** Check fixed asset turnover separately. If fixed asset turnover is flat and total asset turnover is falling, the problem is in current assets — inventory and receivables — not in the plant. Sonali's fixed asset turnover moved 1.50 → 1.47 while total asset turnover moved 0.90 → 0.72. That gap is the entire diagnosis.
7. **Treating a long CCC as merely an accounting fact.** It is a funding requirement. Every day of CCC must be financed at the company's borrowing rate. Convert the change in CCC into taka and into annual interest, and compare it to net profit before deciding whether it matters.
8. **Confusing a cyclical trough with structural deterioration.** Textile, cement and steel are cyclical on the DSE. Two bad years can be the cycle. Five years of monotonic decline in inventory turnover, with rising receivables and no write-downs, is not the cycle. Insist on the longer series before concluding.`,
      bn: `১. **মজুদ টার্নওভারের লব হিসেবে রাজস্ব ব্যবহার করা।** মজুদ ব্যয়মূল্যে বহন করা হয়। রাজস্বে গ্রস মার্জিন অন্তর্ভুক্ত। ভুলটি টার্নওভারকে $1/(1-\\text{gross margin})$ গুণ স্ফীত করে — ৪৬%-মার্জিনের ওষুধ কোম্পানির ক্ষেত্রে ৮৫%। COGS ব্যবহার করুন। প্রদেয় টার্নওভারেও একই কথা।
২. **গড়ের বদলে সমাপনী স্থিতি ব্যবহার করা।** বছরের শেষ সপ্তাহে মজুদ ছেড়ে দেওয়া কোম্পানি সমাপনী মজুদে চমৎকার টার্নওভার দেখায়। অধ্যায় ১৫-এর মতোই প্রারম্ভিক ও সমাপনীর গড় নিন।
৩. **বাড়তে থাকা DPO-কে ভালো কার্যকরী মূলধন ব্যবস্থাপনা হিসেবে পড়া।** কখনো এটি সত্যিই পুনঃআলোচিত শর্ত। ডিএসই-তে অনেক বেশিবার এটি এমন কোম্পানি যে পরিশোধ করতে পারছে না, এবং ব্যাংক বাড়ানো বন্ধ করায় নীরবে সরবরাহকারীদের কাছ থেকে ধার করছে। অর্থায়ন ব্যয়ের ধারা ও বকেয়া বাণিজ্যিক প্রদেয় সম্পর্কিত যেকোনো নোটের সঙ্গে পাল্টা-যাচাই করুন।
৪. **খাত-সূত্র ছাড়া দক্ষতা অনুপাত বিচার করা।** বছরে ১.৫× মজুদ ঘোরানো একজন জুয়েলারের জন্য স্বাভাবিক। ১.৫×-এ একজন ওষুধ পরিবেশক গুরুতর বিপদে। কোম্পানিকে আগে তার নিজের ইতিহাসের সঙ্গে, তারপর তার খাতের সঙ্গে তুলনা করুন, এবং কখনো পাঠ্যবইয়ের সংখ্যার সঙ্গে নয়।
৫. **কেবল অনুপাতের স্তর দেখে ডাইভারজেন্স মিস করা।** এককভাবে ২.৪০× মজুদ টার্নওভার একটি তথ্য। স্থির রাজস্বে ৬.০০× → ৪.০০× → ২.৪০× একটি রোগনির্ণয়। স্তর বলে কোম্পানি কোথায়; ধারা বলে কোথায় যাচ্ছে।
৬. **কমতে থাকা সম্পদ টার্নওভার মানেই খারাপ মূলধনি সিদ্ধান্ত ধরে নেওয়া।** স্থায়ী সম্পদ টার্নওভার আলাদা করে দেখুন। স্থায়ী সম্পদ টার্নওভার স্থির থাকলে ও মোট সম্পদ টার্নওভার কমলে সমস্যা চলতি সম্পদে — মজুদ ও প্রাপ্যে — কারখানায় নয়। সোনালীর স্থায়ী সম্পদ টার্নওভার ১.৫০ → ১.৪৭ নড়েছে অথচ মোট সম্পদ টার্নওভার ০.৯০ → ০.৭২। ঐ ব্যবধানটিই সম্পূর্ণ রোগনির্ণয়।
৭. **দীর্ঘ CCC-কে কেবল একটি হিসাবি তথ্য হিসেবে গণ্য করা।** এটি একটি অর্থায়ন প্রয়োজন। CCC-র প্রতিটি দিন কোম্পানির ঋণ হারে অর্থায়ন করতে হয়। CCC-র পরিবর্তনকে টাকায় ও বার্ষিক সুদে রূপান্তর করুন, এবং গুরুত্বপূর্ণ কি না সিদ্ধান্তের আগে নিট মুনাফার সঙ্গে তুলনা করুন।
৮. **চক্রীয় নিম্নবিন্দুকে কাঠামোগত অবনতির সঙ্গে গুলিয়ে ফেলা।** ডিএসই-তে বস্ত্র, সিমেন্ট ও ইস্পাত চক্রীয়। দুটি খারাপ বছর চক্র হতে পারে। বাড়তে থাকা প্রাপ্য ও কোনো অবচয় ছাড়া মজুদ টার্নওভারে পাঁচ বছরের একমুখী পতন চক্র নয়। সিদ্ধান্তের আগে দীর্ঘতর ধারা দাবি করুন।`,
    },

    tips: {
      en: `- **Compute the cash conversion cycle for every company you own, once a year.** It takes five minutes per company and it is the single most compressed statement of working capital health available. Track it as a series. A CCC that is drifting upward year after year is a company slowly losing control of its balance sheet.
- **Always read the receivables ageing note next to the DSO.** IFRS 7 disclosure, as adopted in Bangladesh, requires a maturity breakdown. A DSO of 90 days composed of everything sitting at 85–95 days is a terms problem. A DSO of 90 days composed of half the book at 30 days and half at 150 days is a bad-debt problem. **The average conceals the shape.**
- **Compare DIO against the physical reality of the product.** Fashion-adjacent woven fabric at 152 days is a very different claim from steel rebar at 152 days. Ask whether the product can survive five months in a Bangladeshi warehouse without loss of value or specification. Often it cannot, and the write-down is already earned but not yet taken.
- **Look for the year the company changed its inventory valuation policy or its revenue recognition timing.** It will be in the accounting policy note. A policy change that coincides with a deteriorating turnover ratio is not a coincidence.
- **Use the divergence flag as a screen, not a verdict.** A single severe flag means read the notes. It does not by itself mean fraud. Companies that win a large new institutional customer on 120-day terms will flag severe and be entirely healthy. The flag tells you where to spend your reading time.
- **On banks and NBFIs, none of this applies.** There is no inventory and no COGS. Chapter 23 gives the correct efficiency measures for financial institutions — cost-to-income, NIM, and the NPL series. Applying inventory turnover to a bank is a category error, and it appears in retail screeners that do not sector-segment.
- **When you find a company with an improving CCC on rising revenue, stop and look harder.** That is genuinely rare and genuinely valuable. It usually means either real pricing power over customers and suppliers simultaneously, or a business model change worth understanding. Chapter 25's scorecard weights it heavily.`,
      bn: `- **আপনার মালিকানাধীন প্রতিটি কোম্পানির নগদ রূপান্তর চক্র বছরে একবার গণনা করুন।** কোম্পানিপ্রতি পাঁচ মিনিট লাগে এবং কার্যকরী মূলধনের স্বাস্থ্যের সবচেয়ে সংক্ষিপ্ত বিবৃতি এটিই। একে একটি ধারা হিসেবে অনুসরণ করুন। বছরের পর বছর ওপরের দিকে সরতে থাকা CCC মানে এমন কোম্পানি যে ধীরে ধীরে নিজের স্থিতিপত্রের নিয়ন্ত্রণ হারাচ্ছে।
- **DSO-র পাশে সবসময় প্রাপ্যের বয়স-বিভাজন নোট পড়ুন।** বাংলাদেশে গৃহীত IFRS 7 প্রকাশনা একটি মেয়াদ-বিভাজন দাবি করে। ৯০ দিনের DSO যদি পুরোটাই ৮৫–৯৫ দিনে বসে থাকে, তবে এটি শর্তের সমস্যা। ৯০ দিনের DSO যদি অর্ধেক খাতা ৩০ দিনে ও অর্ধেক ১৫০ দিনে গঠিত হয়, তবে এটি কুঋণের সমস্যা। **গড় আকৃতিটি আড়াল করে।**
- **পণ্যের ভৌত বাস্তবতার বিপরীতে DIO তুলনা করুন।** ১৫২ দিনে ফ্যাশন-সংলগ্ন বোনা কাপড় আর ১৫২ দিনে ইস্পাত রড সম্পূর্ণ ভিন্ন দাবি। জিজ্ঞেস করুন পণ্যটি মূল্য বা নির্দেশনা না হারিয়ে বাংলাদেশি গুদামে পাঁচ মাস টিকতে পারে কি না। প্রায়ই পারে না, এবং অবচয়টি ইতিমধ্যে অর্জিত কিন্তু এখনো নেওয়া হয়নি।
- **কোন বছর কোম্পানি তার মজুদ মূল্যায়ন নীতি বা রাজস্ব স্বীকৃতির সময় বদলেছে তা খুঁজুন।** এটি হিসাবনীতি নোটে থাকবে। অবনতিশীল টার্নওভার অনুপাতের সঙ্গে মিলে যাওয়া নীতি পরিবর্তন কাকতালীয় নয়।
- **ডাইভারজেন্স ফ্ল্যাগকে স্ক্রিন হিসেবে ব্যবহার করুন, রায় হিসেবে নয়।** একটি গুরুতর ফ্ল্যাগ মানে নোটগুলো পড়ুন। এটি নিজে জালিয়াতি প্রমাণ করে না। ১২০ দিনের শর্তে বড় নতুন প্রাতিষ্ঠানিক ক্রেতা জেতা কোম্পানি গুরুতর ফ্ল্যাগ দেখাবে এবং সম্পূর্ণ সুস্থ থাকবে। ফ্ল্যাগ বলে দেয় আপনার পড়ার সময় কোথায় ব্যয় করবেন।
- **ব্যাংক ও এনবিএফআই-তে এর কিছুই প্রযোজ্য নয়।** সেখানে মজুদ নেই, COGS নেই। অধ্যায় ২৩ আর্থিক প্রতিষ্ঠানের জন্য সঠিক দক্ষতা পরিমাপ দেয় — cost-to-income, NIM, এবং NPL ধারা। ব্যাংকে মজুদ টার্নওভার প্রয়োগ করা একটি শ্রেণিগত ভুল, এবং যেসব খুচরা স্ক্রিনার খাত-বিভাজন করে না সেখানে এটি দেখা যায়।
- **বাড়তে থাকা রাজস্বে উন্নতিশীল CCC-র কোম্পানি পেলে থামুন এবং আরও মনোযোগ দিন।** এটি সত্যিই বিরল ও সত্যিই মূল্যবান। সাধারণত এর অর্থ হয় ক্রেতা ও সরবরাহকারী উভয়ের ওপর একসঙ্গে প্রকৃত মূল্য-ক্ষমতা, নয়তো বোঝার মতো একটি ব্যবসায়িক মডেল পরিবর্তন। অধ্যায় ২৫-এর স্কোরকার্ড একে ভারী ওজন দেয়।`,
    },

    exercises: {
      en: `1. Take any DSE-listed textile company. Extract revenue, COGS, inventory, trade receivables and trade payables for the last five years. Compute all five turnover ratios and the three days measures for each year, using averaged balances. Plot the cash conversion cycle. Is the trend monotonic, cyclical, or flat?
2. For the same company, compute the divergence flags $D_{AR}$ and $D_{INV}$ over the full five-year window and over each consecutive pair of years. Does the year-on-year test catch anything the full-window test misses, or vice versa? Which would you use in a screen and why?
3. Take one DSE pharmaceutical company and one DSE cement company for the same year. Compute net margin, asset turnover and ROA for each. Place both on the margin/turnover map. Which earns the higher ROA, and through which lever?
4. Find a DSE-listed company whose DPO rose by more than 20 days in a single year. Read the finance cost note and the trade payables note for that year. Determine whether the extension was negotiated or forced. State the evidence you used.
5. Take Sonali Textile's FY2024 figures from this chapter. Recompute inventory turnover, DIO and CCC using **revenue** instead of COGS as the numerator for inventory. Report all three wrong values and the resulting error in the working-capital funding calculation in BDT crore.
6. For any company you hold, compute the change in CCC over three years, convert it to a taka working capital requirement, and multiply by the company's actual weighted average borrowing rate from the finance cost note. Express the answer as a percentage of the most recent year's net profit. Would knowing this number have changed your decision to buy?`,
      bn: `১. যেকোনো ডিএসই-তালিকাভুক্ত বস্ত্র কোম্পানি নিন। শেষ পাঁচ বছরের রাজস্ব, COGS, মজুদ, বাণিজ্যিক প্রাপ্য ও বাণিজ্যিক প্রদেয় বের করুন। গড়কৃত স্থিতি ব্যবহার করে প্রতি বছরের পাঁচটি টার্নওভার অনুপাত ও তিনটি দিন-পরিমাপ গণনা করুন। নগদ রূপান্তর চক্র প্লট করুন। ধারাটি একমুখী, চক্রীয়, না স্থির?
২. একই কোম্পানির জন্য সম্পূর্ণ পাঁচ-বছরের সময়কালে এবং প্রতিটি পরপর বছর-জোড়ায় $D_{AR}$ ও $D_{INV}$ ডাইভারজেন্স ফ্ল্যাগ গণনা করুন। বছর-থেকে-বছর পরীক্ষা কি এমন কিছু ধরে যা পূর্ণ-সময়কালের পরীক্ষা মিস করে, নাকি উল্টো? স্ক্রিনে আপনি কোনটি ব্যবহার করবেন এবং কেন?
৩. একই বছরের একটি ডিএসই ওষুধ কোম্পানি ও একটি ডিএসই সিমেন্ট কোম্পানি নিন। প্রতিটির নিট মার্জিন, সম্পদ টার্নওভার ও ROA গণনা করুন। দুটিকেই মার্জিন/টার্নওভার মানচিত্রে বসান। কে উঁচু ROA অর্জন করে, এবং কোন লিভারের মাধ্যমে?
৪. এমন একটি ডিএসই-তালিকাভুক্ত কোম্পানি খুঁজুন যার DPO এক বছরে ২০ দিনের বেশি বেড়েছে। ঐ বছরের অর্থায়ন ব্যয় নোট ও বাণিজ্যিক প্রদেয় নোট পড়ুন। সম্প্রসারণটি আলোচিত ছিল না বাধ্যতামূলক তা নির্ধারণ করুন। যে প্রমাণ ব্যবহার করেছেন তা বলুন।
৫. এই অধ্যায় থেকে সোনালী টেক্সটাইলের FY2024 সংখ্যা নিন। মজুদের লব হিসেবে COGS-এর বদলে **রাজস্ব** ব্যবহার করে মজুদ টার্নওভার, DIO ও CCC পুনর্গণনা করুন। তিনটি ভুল মান এবং কার্যকরী-মূলধন অর্থায়ন গণনায় সৃষ্ট ত্রুটি কোটি টাকায় জানান।
৬. আপনার ধারণকৃত যেকোনো কোম্পানির তিন বছরে CCC-র পরিবর্তন গণনা করুন, তাকে টাকায় কার্যকরী মূলধনের প্রয়োজনে রূপান্তর করুন, এবং অর্থায়ন ব্যয় নোট থেকে কোম্পানির প্রকৃত ভারিত গড় ঋণ হার দিয়ে গুণ করুন। উত্তরটি সাম্প্রতিকতম বছরের নিট মুনাফার শতাংশ হিসেবে প্রকাশ করুন। এই সংখ্যাটি জানা থাকলে আপনার কেনার সিদ্ধান্ত বদলাত কি?`,
    },

    summary: {
      en: `- An efficiency ratio is a **flow over a stock**: an income statement figure divided by an averaged balance sheet figure. Inventory and payables take **COGS**; receivables and asset ratios take **revenue**. Mismatching the numerator inflates inventory turnover by a factor of $1/(1-\\text{gross margin})$.
- The six core ratios are asset turnover, fixed asset turnover, inventory turnover, receivable turnover, payable turnover and working capital turnover. Payable turnover reads in the opposite direction from the rest — falling payable turnover means the company is taking longer to pay, which is stress, not skill.
- Convert every turnover to days and assemble the **cash conversion cycle**: DIO + DSO − DPO. This is the number of days the company funds itself between paying for material and being paid for product. **Every day of it costs the company its borrowing rate.**
- Sonali Textile's CCC went from 73 days to 189 days on flat revenue — a **116-day deterioration requiring BDT 298 crore of additional working capital**, costing roughly BDT 38.7 crore a year against a surviving net profit of BDT 9.4 crore. That is why the net margin fell from 5.00% to 1.00%.
- The **divergence flag** compares balance-sheet growth to the flow it should track. Receivables +93.33% against revenue +4.44% is an 88.89 pp gap. Inventory +166.67% against COGS +6.67% is a 160.00 pp gap. Both are severe, and both are exactly the signature Chapter 13 described for revenue recognised ahead of collection and inventory carried above net realisable value.
- Fixed asset turnover held at ~1.5× throughout, which **eliminates the factory as the cause** and localises the failure to working capital. Read the two asset turnover ratios together or you will misdiagnose.
- **ROA = net margin × asset turnover** is an algebraic identity. High-margin/low-turnover (pharma) and low-margin/high-turnover (distribution) are both legitimate models. Low margin *and* low turnover is not a model. It is a failure, and leverage only amplifies it.
- **Discipline established:** compute the cash conversion cycle as a multi-year series, price the change in it in taka and in interest, and never accept a flat revenue line as a quiet year until you have checked what happened to inventory and receivables underneath it.`,
      bn: `- দক্ষতা অনুপাত হলো **মজুতের ওপর প্রবাহ**: আয় বিবরণীর একটি সংখ্যা ভাগ গড়কৃত স্থিতিপত্রের একটি সংখ্যা। মজুদ ও প্রদেয় নেয় **COGS**; প্রাপ্য ও সম্পদ অনুপাত নেয় **রাজস্ব**। লব ভুল মেলালে মজুদ টার্নওভার $1/(1-\\text{gross margin})$ গুণ স্ফীত হয়।
- ছয়টি মূল অনুপাত: সম্পদ টার্নওভার, স্থায়ী সম্পদ টার্নওভার, মজুদ টার্নওভার, প্রাপ্য টার্নওভার, প্রদেয় টার্নওভার ও কার্যকরী মূলধন টার্নওভার। প্রদেয় টার্নওভার বাকিগুলোর উল্টো দিক থেকে পড়তে হয় — কমতে থাকা প্রদেয় টার্নওভার মানে কোম্পানি পরিশোধে বেশি সময় নিচ্ছে, যা চাপ, দক্ষতা নয়।
- প্রতিটি টার্নওভারকে দিনে রূপান্তর করুন এবং **নগদ রূপান্তর চক্র** গঠন করুন: DIO + DSO − DPO। এটি সেই দিনসংখ্যা যতদিন কোম্পানি কাঁচামালের দাম দেওয়া ও পণ্যের দাম পাওয়ার মাঝে নিজেকে অর্থায়ন করে। **এর প্রতিটি দিন কোম্পানির ঋণ হারে খরচ করায়।**
- সোনালী টেক্সটাইলের CCC স্থির রাজস্বে ৭৩ দিন থেকে ১৮৯ দিনে গেছে — **১১৬ দিনের অবনতি, যার জন্য ২৯৮ কোটি টাকার অতিরিক্ত কার্যকরী মূলধন দরকার**, বছরে প্রায় ৩৮.৭ কোটি টাকা খরচ, আর টিকে থাকা নিট মুনাফা ৯.৪ কোটি টাকা। এ কারণেই নিট মার্জিন ৫.০০% থেকে ১.০০%-এ নেমেছে।
- **ডাইভারজেন্স ফ্ল্যাগ** স্থিতিপত্রের প্রবৃদ্ধিকে যে প্রবাহ তাকে অনুসরণ করার কথা তার সঙ্গে তুলনা করে। রাজস্ব +৪.৪৪%-এর বিপরীতে প্রাপ্য +৯৩.৩৩% মানে ৮৮.৮৯ পয়েন্টের ব্যবধান। COGS +৬.৬৭%-এর বিপরীতে মজুদ +১৬৬.৬৭% মানে ১৬০.০০ পয়েন্টের ব্যবধান। দুটিই গুরুতর, এবং দুটিই হুবহু সেই স্বাক্ষর যা অধ্যায় ১৩ আদায়ের আগে স্বীকৃত রাজস্ব ও নিট আদায়যোগ্য মূল্যের ওপরে বহনকৃত মজুদের জন্য বর্ণনা করেছে।
- স্থায়ী সম্পদ টার্নওভার পুরো সময় ~১.৫×-এ ছিল, যা **কারণ হিসেবে কারখানাকে বাদ দেয়** এবং ব্যর্থতাকে কার্যকরী মূলধনে স্থানীয় করে। দুটি সম্পদ টার্নওভার অনুপাত একসঙ্গে পড়ুন, নয়তো ভুল রোগনির্ণয় করবেন।
- **ROA = নিট মার্জিন × সম্পদ টার্নওভার** একটি বীজগাণিতিক অভেদ। উঁচু-মার্জিন/কম-টার্নওভার (ওষুধ) এবং কম-মার্জিন/উঁচু-টার্নওভার (পরিবেশন) — দুটিই বৈধ মডেল। কম মার্জিন *এবং* কম টার্নওভার কোনো মডেল নয়। ওটি একটি ব্যর্থতা, এবং লিভারেজ কেবল তা বাড়িয়ে তোলে।
- **প্রতিষ্ঠিত শৃঙ্খলা:** নগদ রূপান্তর চক্রকে বহু-বছরের ধারা হিসেবে গণনা করুন, তার পরিবর্তনের দাম টাকায় ও সুদে নির্ধারণ করুন, এবং স্থির রাজস্বের লাইনকে কখনো একটি শান্ত বছর হিসেবে মেনে নেবেন না — যতক্ষণ না তার নিচে মজুদ ও প্রাপ্যের কী হয়েছে তা যাচাই করেছেন।`,
    },
  },

  interview: [
    {
      q: {
        en: 'Why is cost of goods sold, rather than revenue, the correct numerator for inventory turnover?',
        bn: 'মজুদ টার্নওভারের সঠিক লব কেন রাজস্ব নয়, বিক্রীত পণ্যের ব্যয়?',
      },
      a: {
        en: 'Because inventory is carried on the balance sheet at cost, and a ratio must compare like with like. Revenue includes the gross margin, so using it inflates the ratio by one divided by one minus the gross margin — 85% for a company at 46% gross margin. The distortion also varies with margin, so a peer table built on revenue-based inventory turnover ranks companies partly by their pricing power rather than by their stock efficiency, which defeats the purpose of the ratio.',
        bn: 'কারণ মজুদ স্থিতিপত্রে ব্যয়মূল্যে বহন করা হয়, এবং অনুপাতে সমানের সঙ্গে সমান তুলনা করতে হয়। রাজস্বে গ্রস মার্জিন অন্তর্ভুক্ত, তাই তা ব্যবহার করলে অনুপাতটি এক ভাগ (এক বিয়োগ গ্রস মার্জিন) গুণ স্ফীত হয় — ৪৬% গ্রস মার্জিনের কোম্পানির ক্ষেত্রে ৮৫%। বিকৃতিটি মার্জিনভেদে বদলায়ও, তাই রাজস্ব-ভিত্তিক মজুদ টার্নওভারে গড়া সমকক্ষ সারণি কোম্পানিগুলোকে আংশিকভাবে মজুদ দক্ষতার বদলে মূল্য-ক্ষমতা অনুযায়ী ক্রম করে, যা অনুপাতের উদ্দেশ্যই নষ্ট করে।',
      },
    },
    {
      q: {
        en: 'A company reports flat revenue, a stable fixed asset turnover, but a collapsing total asset turnover. What is your first hypothesis?',
        bn: 'একটি কোম্পানির রাজস্ব স্থির, স্থায়ী সম্পদ টার্নওভার স্থিতিশীল, কিন্তু মোট সম্পদ টার্নওভার ধসছে। আপনার প্রথম অনুমান কী?',
      },
      a: {
        en: 'The deterioration is in current assets, not in the plant. If fixed asset turnover is flat, capacity is being used as before, so the assets that grew without producing sales must be inventory, receivables, or both. I would compute inventory turnover and receivable turnover next, convert to DIO and DSO, and run the divergence flags against COGS growth and revenue growth respectively. That localises the problem to unsold stock, uncollected invoices, or both, and both imply a write-down or provision that has not yet been taken.',
        bn: 'অবনতিটি চলতি সম্পদে, কারখানায় নয়। স্থায়ী সম্পদ টার্নওভার স্থির থাকলে সক্ষমতা আগের মতোই ব্যবহৃত হচ্ছে, তাই বিক্রয় তৈরি না করে যে সম্পদ বেড়েছে তা অবশ্যই মজুদ, প্রাপ্য, বা দুটিই। এরপর আমি মজুদ টার্নওভার ও প্রাপ্য টার্নওভার গণনা করব, DIO ও DSO-তে রূপান্তর করব, এবং যথাক্রমে COGS প্রবৃদ্ধি ও রাজস্ব প্রবৃদ্ধির বিপরীতে ডাইভারজেন্স ফ্ল্যাগ চালাব। এতে সমস্যাটি অবিক্রীত মজুদ, অনাদায়ী চালান, বা দুটিতেই স্থানীয় হয়, এবং দুটিই এমন অবচয় বা সঞ্চিতি বোঝায় যা এখনো নেওয়া হয়নি।',
      },
    },
    {
      q: {
        en: 'Define the cash conversion cycle and explain why it is a funding number rather than an accounting number.',
        bn: 'নগদ রূপান্তর চক্রের সংজ্ঞা দিন এবং ব্যাখ্যা করুন কেন এটি হিসাবি সংখ্যা নয়, অর্থায়ন সংখ্যা।',
      },
      a: {
        en: 'It is days inventory outstanding plus days sales outstanding minus days payable outstanding — the number of days between paying a supplier for raw material and receiving cash from a customer for the finished product. During those days the company has money out and nothing in, so the gap must be financed from equity or borrowing. Multiply the change in the cycle by daily revenue to get the taka requirement, then by the borrowing rate to get the annual interest consequence. On Sonali Textile a 116-day deterioration meant BDT 298 crore of extra working capital and roughly BDT 38.7 crore of extra annual finance cost against a net profit of BDT 9.4 crore.',
        bn: 'এটি days inventory outstanding যোগ days sales outstanding বিয়োগ days payable outstanding — কাঁচামালের জন্য সরবরাহকারীকে দেওয়া এবং তৈরি পণ্যের জন্য ক্রেতার কাছ থেকে নগদ পাওয়ার মাঝের দিনসংখ্যা। ঐ দিনগুলোতে কোম্পানির টাকা বেরিয়ে গেছে অথচ কিছু ঢোকেনি, তাই ব্যবধানটি ইকুইটি বা ঋণ থেকে অর্থায়ন করতে হয়। চক্রের পরিবর্তনকে দৈনিক রাজস্ব দিয়ে গুণ করে টাকার প্রয়োজন বের করুন, তারপর ঋণ হার দিয়ে গুণ করে বার্ষিক সুদের পরিণতি। সোনালী টেক্সটাইলে ১১৬ দিনের অবনতি মানে ২৯৮ কোটি টাকার অতিরিক্ত কার্যকরী মূলধন এবং প্রায় ৩৮.৭ কোটি টাকার অতিরিক্ত বার্ষিক অর্থায়ন ব্যয় — যেখানে নিট মুনাফা ৯.৪ কোটি টাকা।',
      },
    },
    {
      q: {
        en: 'How do efficiency ratios detect channel stuffing?',
        bn: 'দক্ষতা অনুপাত কীভাবে চ্যানেল স্টাফিং শনাক্ত করে?',
      },
      a: {
        en: 'Channel stuffing books revenue on shipments pushed to distributors that have not been paid for and may be returned. Revenue rises, but receivables rise faster because none of the stuffed volume converts to cash. Receivable turnover falls and DSO rises. The divergence flag makes it explicit: compare receivable growth to revenue growth over the same window, and a gap above roughly 50 percentage points is severe. The cross-check is the cash flow statement — operating cash flow falling while profit rises confirms that the reported earnings are not cash. From the outside, channel stuffing and a genuine collections crisis look identical, and the correct response to both is the same: stop treating reported profit as cash until the receivables ageing note explains the shape of the book.',
        bn: 'চ্যানেল স্টাফিং এমন চালানের ওপর রাজস্ব বসায় যা পরিবেশকদের কাছে ঠেলে দেওয়া হয়েছে, যার দাম পাওয়া যায়নি এবং যা ফেরতও আসতে পারে। রাজস্ব বাড়ে, কিন্তু প্রাপ্য দ্রুত বাড়ে কারণ ঠেলে দেওয়া পরিমাণের কিছুই নগদে রূপান্তরিত হয় না। প্রাপ্য টার্নওভার কমে এবং DSO বাড়ে। ডাইভারজেন্স ফ্ল্যাগ এটি স্পষ্ট করে: একই সময়কালে প্রাপ্য প্রবৃদ্ধিকে রাজস্ব প্রবৃদ্ধির সঙ্গে তুলনা করুন, প্রায় ৫০ শতাংশ বিন্দুর ওপরে ব্যবধান গুরুতর। পাল্টা-যাচাই হলো নগদ প্রবাহ বিবরণী — মুনাফা বাড়তে থাকলেও পরিচালন নগদ প্রবাহ কমা নিশ্চিত করে যে প্রতিবেদিত আয় নগদ নয়। বাইরে থেকে চ্যানেল স্টাফিং ও প্রকৃত আদায় সংকট অভিন্ন দেখায়, এবং দুটির সঠিক প্রতিক্রিয়া একই: প্রাপ্যের বয়স-বিভাজন নোট খাতার আকৃতি ব্যাখ্যা না করা পর্যন্ত প্রতিবেদিত মুনাফাকে নগদ হিসেবে গণ্য করা বন্ধ করুন।',
      },
    },
    {
      q: {
        en: 'A distributor has a 2.5% net margin and a pharma company has 13.6%. Which is the better business?',
        bn: 'একজন পরিবেশকের নিট মার্জিন ২.৫% এবং একটি ওষুধ কোম্পানির ১৩.৬%। কোনটি ভালো ব্যবসা?',
      },
      a: {
        en: 'The margin alone does not answer it. ROA equals net margin times asset turnover, and the two models sit at opposite ends of that identity. A distributor at 2.5% margin turning assets four times earns a 10.0% ROA; a pharma company at 13.6% margin turning assets 0.83 times earns 11.4%. Comparable returns through opposite levers. The right follow-up questions are which lever is more defensible — margin from a brand or licence tends to be more durable than turnover from logistics, which competitors can replicate — and whether each factor is stable over five years. A company that is low on both margin and turnover has no model at all.',
        bn: 'কেবল মার্জিন এর উত্তর দেয় না। ROA সমান নিট মার্জিন গুণ সম্পদ টার্নওভার, এবং দুটি মডেল ঐ অভেদের বিপরীত প্রান্তে বসে। ২.৫% মার্জিনে সম্পদ চারবার ঘোরানো পরিবেশক ১০.০% ROA অর্জন করে; ১৩.৬% মার্জিনে ০.৮৩ বার ঘোরানো ওষুধ কোম্পানি অর্জন করে ১১.৪%। বিপরীত লিভারে তুলনীয় রিটার্ন। সঠিক পরবর্তী প্রশ্ন হলো কোন লিভারটি বেশি রক্ষণীয় — ব্র্যান্ড বা লাইসেন্স থেকে আসা মার্জিন সাধারণত লজিস্টিকস থেকে আসা টার্নওভারের চেয়ে বেশি টেকসই, কারণ প্রতিযোগীরা লজিস্টিকস অনুকরণ করতে পারে — এবং প্রতিটি উপাদান পাঁচ বছরে স্থিতিশীল কি না। যে কোম্পানি মার্জিন ও টার্নওভার দুটিতেই কম, তার কোনো মডেলই নেই।',
      },
    },
    {
      q: {
        en: 'A company\'s DPO rose from 45 days to 80 days in one year. Is that good or bad?',
        bn: 'একটি কোম্পানির DPO এক বছরে ৪৫ দিন থেকে ৮০ দিনে উঠেছে। এটি ভালো না খারাপ?',
      },
      a: {
        en: 'It depends entirely on whether it was negotiated or forced, and the ratio itself cannot tell you. Stretching payables conserves cash and shortens the cash conversion cycle, which looks like good working capital management. But on the DSE the far more common cause is a company that cannot pay, using suppliers as an unsecured lender because its bank has stopped extending. The evidence is in the surrounding data: check whether short-term borrowings are also at their limit, whether finance cost is rising, whether the trade payables note discloses overdue amounts, and whether inventory and receivables are simultaneously deteriorating. A rising DPO alongside a rising DIO and DSO is not a negotiation. It is a liquidity problem being pushed onto suppliers.',
        bn: 'এটি সম্পূর্ণভাবে নির্ভর করে সেটি আলোচিত ছিল না বাধ্যতামূলক, এবং অনুপাতটি নিজে তা বলতে পারে না। প্রদেয় টানলে নগদ সংরক্ষিত হয় এবং নগদ রূপান্তর চক্র ছোট হয়, যা ভালো কার্যকরী মূলধন ব্যবস্থাপনার মতো দেখায়। কিন্তু ডিএসই-তে অনেক বেশি প্রচলিত কারণ হলো এমন কোম্পানি যে পরিশোধ করতে পারছে না, এবং ব্যাংক বাড়ানো বন্ধ করায় সরবরাহকারীদের জামানতবিহীন ঋণদাতা হিসেবে ব্যবহার করছে। প্রমাণ আশপাশের তথ্যে: স্বল্পমেয়াদি ঋণও সীমায় পৌঁছেছে কি না, অর্থায়ন ব্যয় বাড়ছে কি না, বাণিজ্যিক প্রদেয় নোটে বকেয়া অঙ্ক প্রকাশ করা হয়েছে কি না, এবং মজুদ ও প্রাপ্য একই সঙ্গে অবনতিশীল কি না — দেখুন। বাড়তে থাকা DIO ও DSO-র পাশে বাড়তে থাকা DPO কোনো দরকষাকষি নয়। এটি সরবরাহকারীদের ওপর ঠেলে দেওয়া একটি তারল্য সমস্যা।',
      },
    },
  ],

  quiz: [
    {
      q: {
        en: 'The correct numerator for inventory turnover is:',
        bn: 'মজুদ টার্নওভারের সঠিক লব হলো:',
      },
      options: {
        en: ['Revenue', 'Cost of goods sold', 'Gross profit', 'EBIT'],
        bn: ['রাজস্ব', 'বিক্রীত পণ্যের ব্যয়', 'গ্রস মুনাফা', 'EBIT'],
      },
      answer: 1,
    },
    {
      q: {
        en: 'Cash conversion cycle equals:',
        bn: 'নগদ রূপান্তর চক্র সমান:',
      },
      options: {
        en: ['DIO + DSO + DPO', 'DIO + DSO − DPO', 'DIO − DSO + DPO', 'DSO + DPO − DIO'],
        bn: ['DIO + DSO + DPO', 'DIO + DSO − DPO', 'DIO − DSO + DPO', 'DSO + DPO − DIO'],
      },
      answer: 1,
    },
    {
      q: {
        en: 'Sonali Textile FY2024: COGS 768, average inventory 320. Inventory turnover is:',
        bn: 'সোনালী টেক্সটাইল FY2024: COGS ৭৬৮, গড় মজুদ ৩২০। মজুদ টার্নওভার:',
      },
      options: {
        en: ['2.40×', '2.94×', '4.00×', '6.00×'],
        bn: ['২.৪০×', '২.৯৪×', '৪.০০×', '৬.০০×'],
      },
      answer: 0,
    },
    {
      q: {
        en: 'An inventory turnover of 2.40× corresponds to a DIO of approximately:',
        bn: '২.৪০× মজুদ টার্নওভার আনুমানিক কত DIO নির্দেশ করে:',
      },
      options: {
        en: ['61 days', '91 days', '124 days', '152 days'],
        bn: ['৬১ দিন', '৯১ দিন', '১২৪ দিন', '১৫২ দিন'],
      },
      answer: 3,
    },
    {
      q: {
        en: 'ROA can be decomposed exactly as:',
        bn: 'ROA-কে হুবহু বিশ্লিষ্ট করা যায়:',
      },
      options: {
        en: ['Net margin × equity multiplier', 'Net margin × asset turnover', 'Gross margin × asset turnover', 'Operating margin × equity multiplier'],
        bn: ['নিট মার্জিন × ইকুইটি গুণক', 'নিট মার্জিন × সম্পদ টার্নওভার', 'গ্রস মার্জিন × সম্পদ টার্নওভার', 'পরিচালন মার্জিন × ইকুইটি গুণক'],
      },
      answer: 1,
    },
    {
      q: {
        en: 'Receivables grew 93.33% while revenue grew 4.44%. The divergence gap is:',
        bn: 'প্রাপ্য বেড়েছে ৯৩.৩৩%, রাজস্ব বেড়েছে ৪.৪৪%। ডাইভারজেন্স ব্যবধান:',
      },
      options: {
        en: ['4.44 pp', '21.00 pp', '88.89 pp', '97.77 pp'],
        bn: ['৪.৪৪ পয়েন্ট', '২১.০০ পয়েন্ট', '৮৮.৮৯ পয়েন্ট', '৯৭.৭৭ পয়েন্ট'],
      },
      answer: 2,
    },
    {
      q: {
        en: 'A falling payable turnover ratio most commonly indicates:',
        bn: 'কমতে থাকা প্রদেয় টার্নওভার অনুপাত সবচেয়ে সাধারণভাবে নির্দেশ করে:',
      },
      options: {
        en: ['Faster supplier payment', 'The company is taking longer to pay suppliers', 'Rising inventory quality', 'Improved collections'],
        bn: ['দ্রুততর সরবরাহকারী পরিশোধ', 'কোম্পানি সরবরাহকারীদের পরিশোধে বেশি সময় নিচ্ছে', 'মজুদের গুণমান বৃদ্ধি', 'উন্নত আদায়'],
      },
      answer: 1,
    },
    {
      q: {
        en: 'Total asset turnover falls sharply while fixed asset turnover is flat. The problem lies in:',
        bn: 'মোট সম্পদ টার্নওভার তীব্রভাবে পড়ছে অথচ স্থায়ী সম্পদ টার্নওভার স্থির। সমস্যা কোথায়:',
      },
      options: {
        en: ['Plant utilisation', 'Current assets — inventory and receivables', 'Depreciation policy', 'Capital structure'],
        bn: ['কারখানার ব্যবহার', 'চলতি সম্পদ — মজুদ ও প্রাপ্য', 'অবচয় নীতি', 'মূলধন কাঠামো'],
      },
      answer: 1,
    },
    {
      q: {
        en: 'A CCC deterioration of 115.65 days on revenue of BDT 940 crore requires additional working capital of approximately:',
        bn: '৯৪০ কোটি টাকার রাজস্বে ১১৫.৬৫ দিনের CCC অবনতিতে আনুমানিক কত অতিরিক্ত কার্যকরী মূলধন লাগে:',
      },
      options: {
        en: ['BDT 116 crore', 'BDT 189 crore', 'BDT 298 crore', 'BDT 940 crore'],
        bn: ['১১৬ কোটি টাকা', '১৮৯ কোটি টাকা', '২৯৮ কোটি টাকা', '৯৪০ কোটি টাকা'],
      },
      answer: 2,
    },
    {
      q: {
        en: 'Which ratio is meaningless when applied to a listed Bangladeshi bank?',
        bn: 'তালিকাভুক্ত বাংলাদেশি ব্যাংকে প্রয়োগ করলে কোন অনুপাতটি অর্থহীন?',
      },
      options: {
        en: ['Cost-to-income', 'Net interest margin', 'Inventory turnover', 'Return on equity'],
        bn: ['Cost-to-income', 'নিট সুদ মার্জিন', 'মজুদ টার্নওভার', 'ইকুইটির ওপর রিটার্ন'],
      },
      answer: 2,
    },
  ],
};
