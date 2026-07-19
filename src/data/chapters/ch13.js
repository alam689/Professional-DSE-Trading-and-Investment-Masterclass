/**
 * Chapter 13 — Quality of Earnings
 * Part II, Fundamental Analysis.
 * Chapters 10–12 taught the three statements. This chapter tests whether
 * the first one is telling the truth.
 */

export default {
  n: 13,
  tools: [],

  excelSheet: {
    filename: 'ch13-earnings-quality-scorecard.xlsx',
    sheetName: 'Earnings Quality',
    cells: [
      { cell: 'A1', v: 'EARNINGS QUALITY SCORECARD (BDT crore)' },

      { cell: 'A3', v: 'INPUTS' }, { cell: 'B3', v: 'Company A' }, { cell: 'C3', v: 'Company B' },
      { cell: 'A4', v: 'Net Profit' }, { cell: 'B4', v: 60 }, { cell: 'C4', v: 60 },
      { cell: 'A5', v: 'Cash Flow from Operations' }, { cell: 'B5', v: 78 }, { cell: 'C5', v: 8 },
      { cell: 'A6', v: 'Avg Total Assets' }, { cell: 'B6', v: 500 }, { cell: 'C6', v: 500 },
      { cell: 'A7', v: 'Revenue (current)' }, { cell: 'B7', v: 460 }, { cell: 'C7', v: 460 },
      { cell: 'A8', v: 'Revenue (prior)' }, { cell: 'B8', v: 400 }, { cell: 'C8', v: 400 },
      { cell: 'A9', v: 'Receivables (current)' }, { cell: 'B9', v: 66 }, { cell: 'C9', v: 119 },
      { cell: 'A10', v: 'Receivables (prior)' }, { cell: 'B10', v: 60 }, { cell: 'C10', v: 70 },
      { cell: 'A11', v: 'Inventory (current)' }, { cell: 'B11', v: 134 }, { cell: 'C11', v: 97 },
      { cell: 'A12', v: 'Inventory (prior)' }, { cell: 'B12', v: 110 }, { cell: 'C12', v: 90 },
      { cell: 'A13', v: 'Payables (current)' }, { cell: 'B13', v: 86 }, { cell: 'C13', v: 82 },
      { cell: 'A14', v: 'Payables (prior)' }, { cell: 'B14', v: 72 }, { cell: 'C14', v: 80 },
      { cell: 'A15', v: 'Depreciation & Amortisation' }, { cell: 'B15', v: 34 }, { cell: 'C15', v: 20 },
      { cell: 'A16', v: 'Profit Before Tax' }, { cell: 'B16', v: 78 }, { cell: 'C16', v: 69 },
      { cell: 'A17', v: 'Tax Expense' }, { cell: 'B17', v: 18 }, { cell: 'C17', v: 9 },
      { cell: 'A18', v: 'One-off / Non-operating Income' }, { cell: 'B18', v: 2 }, { cell: 'C18', v: 18 },
      { cell: 'A19', v: 'Related-Party Revenue' }, { cell: 'B19', v: 20 }, { cell: 'C19', v: 55 },
      { cell: 'A20', v: 'Revaluation Routed to P&L (1/0)' }, { cell: 'B20', v: 0 }, { cell: 'C20', v: 1 },
      { cell: 'A21', v: 'Shares Outstanding (crore)' }, { cell: 'B21', v: 10 }, { cell: 'C21', v: 10 },
      { cell: 'A22', v: 'Statutory Tax Rate (%)' }, { cell: 'B22', v: 22.5 }, { cell: 'C22', v: 22.5 },

      { cell: 'A24', v: 'DERIVED MEASURES' },
      { cell: 'A25', v: 'EPS (BDT)' }, { cell: 'B25', f: 'B4/B21' }, { cell: 'C25', f: 'C4/C21' },
      { cell: 'A26', v: 'Accruals (NP - CFO)' }, { cell: 'B26', f: 'B4-B5' }, { cell: 'C26', f: 'C4-C5' },
      { cell: 'A27', v: 'Accrual Ratio (%)' }, { cell: 'B27', f: 'B26/B6*100' }, { cell: 'C27', f: 'C26/C6*100' },
      { cell: 'A28', v: 'Sloan Accrual Ratio (%)' },
      { cell: 'B28', f: '((B9-B10)+(B11-B12)-(B13-B14)-B15)/B6*100' },
      { cell: 'C28', f: '((C9-C10)+(C11-C12)-(C13-C14)-C15)/C6*100' },
      { cell: 'A29', v: 'Cash Conversion (CFO/NP)' }, { cell: 'B29', f: 'B5/B4' }, { cell: 'C29', f: 'C5/C4' },
      { cell: 'A30', v: 'Revenue Growth (%)' }, { cell: 'B30', f: '(B7/B8-1)*100' }, { cell: 'C30', f: '(C7/C8-1)*100' },
      { cell: 'A31', v: 'Receivable Growth (%)' }, { cell: 'B31', f: '(B9/B10-1)*100' }, { cell: 'C31', f: '(C9/C10-1)*100' },
      { cell: 'A32', v: 'Inventory Growth (%)' }, { cell: 'B32', f: '(B11/B12-1)*100' }, { cell: 'C32', f: '(C11/C12-1)*100' },
      { cell: 'A33', v: 'DSO (days)' }, { cell: 'B33', f: 'B9/B7*365' }, { cell: 'C33', f: 'C9/C7*365' },
      { cell: 'A34', v: 'Effective Tax Rate (%)' }, { cell: 'B34', f: 'B17/B16*100' }, { cell: 'C34', f: 'C17/C16*100' },
      { cell: 'A35', v: 'One-off Share of PBT (%)' }, { cell: 'B35', f: 'B18/B16*100' }, { cell: 'C35', f: 'C18/C16*100' },
      { cell: 'A36', v: 'Related-Party Share (%)' }, { cell: 'B36', f: 'B19/B7*100' }, { cell: 'C36', f: 'C19/C7*100' },

      { cell: 'A38', v: 'WEIGHTED FLAGS (penalty if tripped)' }, { cell: 'D38', v: 'Weight' },
      { cell: 'A39', v: 'F1 Cash conversion < 0.80' },
      { cell: 'B39', f: 'IF(B29<0.8,$D$39,0)' }, { cell: 'C39', f: 'IF(C29<0.8,$D$39,0)' }, { cell: 'D39', v: 20 },
      { cell: 'A40', v: 'F2 Accrual ratio > 5%' },
      { cell: 'B40', f: 'IF(B27>5,$D$40,0)' }, { cell: 'C40', f: 'IF(C27>5,$D$40,0)' }, { cell: 'D40', v: 18 },
      { cell: 'A41', v: 'F3 Recv growth - Rev growth > 15pp' },
      { cell: 'B41', f: 'IF(B31-B30>15,$D$41,0)' }, { cell: 'C41', f: 'IF(C31-C30>15,$D$41,0)' }, { cell: 'D41', v: 15 },
      { cell: 'A42', v: 'F4 Inv growth - Rev growth > 15pp' },
      { cell: 'B42', f: 'IF(B32-B30>15,$D$42,0)' }, { cell: 'C42', f: 'IF(C32-C30>15,$D$42,0)' }, { cell: 'D42', v: 12 },
      { cell: 'A43', v: 'F5 One-off > 20% of PBT' },
      { cell: 'B43', f: 'IF(B35>20,$D$43,0)' }, { cell: 'C43', f: 'IF(C35>20,$D$43,0)' }, { cell: 'D43', v: 12 },
      { cell: 'A44', v: 'F6 Related-party > 15% of revenue' },
      { cell: 'B44', f: 'IF(B36>15,$D$44,0)' }, { cell: 'C44', f: 'IF(C36>15,$D$44,0)' }, { cell: 'D44', v: 10 },
      { cell: 'A45', v: 'F7 ETR below statutory by > 8pp' },
      { cell: 'B45', f: 'IF(B22-B34>8,$D$45,0)' }, { cell: 'C45', f: 'IF(C22-C34>8,$D$45,0)' }, { cell: 'D45', v: 8 },
      { cell: 'A46', v: 'F8 Revaluation routed to P&L' },
      { cell: 'B46', f: 'IF(B20=1,$D$46,0)' }, { cell: 'C46', f: 'IF(C20=1,$D$46,0)' }, { cell: 'D46', v: 5 },

      { cell: 'A48', v: 'TOTAL PENALTY' }, { cell: 'B48', f: 'SUM(B39:B46)' }, { cell: 'C48', f: 'SUM(C39:C46)' },
      { cell: 'A49', v: 'EARNINGS QUALITY SCORE' }, { cell: 'B49', f: '100-B48' }, { cell: 'C49', f: '100-C48' },
      { cell: 'A50', v: 'VERDICT' },
      { cell: 'B50', f: 'IF(B49>=75,"HIGH",IF(B49>=50,"MEDIUM","LOW"))' },
      { cell: 'C50', f: 'IF(C49>=75,"HIGH",IF(C49>=50,"MEDIUM","LOW"))' },

      { cell: 'A52', v: 'NOTE' },
      { cell: 'B52', v: 'Identical EPS in B25 and C25. Everything below row 26 is the difference.' },
    ],
  },

  objectives: {
    en: [
      'Separate reported profit from economic profit, and name accruals as the wedge between them.',
      'List the eight accounting levers a Bangladeshi issuer can pull to move reported profit without moving cash.',
      'Compute the accrual ratio, the Sloan balance-sheet accrual measure, and cash conversion — and explain why the two accrual measures can disagree.',
      'Construct a weighted Earnings Quality Score and defend each weight.',
      'Distinguish persistent operating earnings from one-off gains, and refuse to capitalise the latter into a valuation multiple.',
    ],
    bn: [
      'রিপোর্টকৃত মুনাফা ও অর্থনৈতিক মুনাফার পার্থক্য করা, এবং অ্যাক্রুয়ালকে এদের মধ্যবর্তী ফাঁক হিসেবে চিহ্নিত করা।',
      'নগদ না নাড়িয়ে রিপোর্টকৃত মুনাফা নাড়াতে একজন বাংলাদেশি ইস্যুয়ার যে আটটি হিসাবরক্ষণ কৌশল ব্যবহার করতে পারেন তা তালিকাভুক্ত করা।',
      'অ্যাক্রুয়াল অনুপাত, Sloan-এর স্থিতিপত্রভিত্তিক অ্যাক্রুয়াল পরিমাপ ও নগদ রূপান্তর গণনা করা — এবং কেন দুটি অ্যাক্রুয়াল পরিমাপ ভিন্ন হতে পারে তা ব্যাখ্যা করা।',
      'একটি ভারিত Earnings Quality Score গঠন করা এবং প্রতিটি ওজনের পক্ষে যুক্তি দেওয়া।',
      'স্থায়ী পরিচালন আয় ও এককালীন লাভের পার্থক্য করা, এবং দ্বিতীয়টিকে মূল্যায়ন গুণকে রূপান্তর করতে অস্বীকার করা।',
    ],
  },

  blocks: {
    theory: {
      en: `Chapter 10 established how the income statement is built. Chapter 12 established that the cash flow statement is built from a different starting point and cannot be constructed by the same discretion. This chapter is the collision between them.

**Reported profit is an opinion. Cash is a fact.**

That is not a slogan. It is a description of how accrual accounting works. Under IAS/IFRS as adopted in Bangladesh, revenue is recognised when control of goods or services transfers — not when money arrives. Expenses are matched to the period they relate to — not the period they are paid. Every one of those judgements is made by management, reviewed by an auditor management pays, and filed with a regulator that reads thousands of such filings a year.

### Accruals: the wedge

Define accruals as the difference between what a company said it earned and what it actually collected:

**Accruals = Net Profit − Cash Flow from Operations**

If the two are close, reported profit is describing cash events. If net profit is large and CFO is small, the profit exists somewhere other than the bank account — in a receivable, in a stock of unsold goods, in a capitalised cost, in a fair-value gain on a piece of land. Those are all legitimate accounting entries. They are also all reversible, and they all reverse in the direction that hurts.

The empirical finding — Richard Sloan, 1996, and replicated across dozens of markets since — is that **the accrual component of earnings is far less persistent than the cash component.** A taka of profit that arrived as cash tends to repeat next year. A taka of profit that arrived as an accrual tends not to. The market, on average, prices both the same. That mispricing is the opportunity, and it is larger in Bangladesh than in the markets where the research was done, because disclosure quality is lower and analyst coverage is thinner.

### The eight levers

An issuer that wants a higher reported EPS without a better business has eight standard tools. All of them are visible in the accounts if you look.

**1. Revenue recognition timing.** Push a March delivery into the February quarter. Recognise a full year of a multi-year service contract at signature. Under IFRS 15 the performance-obligation test constrains this, but the test relies on management's own description of the obligation.

**2. Receivable inflation.** The cheapest lever. Sell on credit to anyone who will sign — including buyers you know are weak — and book the revenue. Cash never arrives, but EPS does. This shows up as receivable growth outrunning revenue growth. It is the single most reliable red flag on the DSE.

**3. Inventory valuation.** Inventory is carried at the lower of cost and net realisable value. "Net realisable value" is an estimate. A textile mill sitting on grey fabric bought at pre-crash cotton prices can simply decline to write it down. Not writing down an impaired asset is an increase in reported profit, achieved by doing nothing.

**4. Capitalising costs that should be expensed.** Move repair and maintenance into "capital work in progress." Capitalise borrowing costs onto a project long after it is substantially complete, contrary to IAS 23. Capitalise development spend that does not meet the IAS 38 recognition criteria. Each taka moved from the income statement to the balance sheet is a taka of extra reported profit today and a taka of extra depreciation later.

**5. Understated depreciation.** Extend the useful life of plant from ten years to fifteen. Depreciation falls, profit rises, and the change is disclosed in a note that almost nobody reads. Compare depreciation to gross fixed assets across peers — a mill depreciating at 4% of gross block when its peers run 7% is telling you something.

**6. Related-party sales.** Sell to an entity the sponsor controls, at a price the sponsor sets. Revenue is real in form and hollow in substance. Bangladeshi group structures — where a listed company sits inside an unlisted family group — make this structurally easy. The related-party note is mandatory under IAS 24. Read it.

**7. Deferred tax games.** Recognise a deferred tax asset on carried-forward losses that require future profits nobody has demonstrated. Release a deferred tax liability into income. A company whose effective tax rate is far below the statutory rate for listed companies, with no export or tax-holiday explanation, is manufacturing profit below the operating line.

**8. Revaluation gains routed to income.** Revalue land or buildings upward and put the gain through profit or loss rather than through other comprehensive income and a revaluation surplus. This is a non-cash, non-recurring, non-operating gain sitting inside a number the market multiplies by a P/E. It is the most brazen of the eight and the easiest to detect.

### Persistence

The question underneath all of this is a single one: **will this profit happen again next year?**

Operating profit from selling more product at a stable margin is persistent. Profit from a one-time land revaluation, an insurance settlement, a foreign exchange translation gain, or the sale of a subsidiary is not. Applying a P/E multiple to a number containing one-off gains capitalises a single event into perpetuity. That is the most common valuation error made on this exchange, and it is made by professionals as often as by retail investors.

**The operating-to-net ratio is the fastest test.** If operating profit is BDT 40 crore and net profit is BDT 60 crore, the extra BDT 20 crore came from somewhere below the operating line, and you must find out where before you apply any multiple to it.`,
      bn: `অধ্যায় ১০ প্রতিষ্ঠা করেছে আয় বিবরণী কীভাবে তৈরি হয়। অধ্যায় ১২ প্রতিষ্ঠা করেছে নগদ প্রবাহ বিবরণী ভিন্ন সূচনাবিন্দু থেকে তৈরি হয় এবং একই বিবেচনাধীন সিদ্ধান্ত দিয়ে গঠন করা যায় না। এই অধ্যায় হলো তাদের সংঘর্ষ।

**রিপোর্টকৃত মুনাফা একটি মতামত। নগদ একটি তথ্য।**

এটি স্লোগান নয়। এটি অ্যাক্রুয়াল হিসাবরক্ষণ কীভাবে কাজ করে তার বর্ণনা। বাংলাদেশে গৃহীত IAS/IFRS অনুযায়ী, পণ্য বা সেবার নিয়ন্ত্রণ হস্তান্তরিত হলে রাজস্ব স্বীকৃত হয় — টাকা এলে নয়। ব্যয় সেই সময়কালের সঙ্গে মেলানো হয় যার সঙ্গে তা সম্পর্কিত — যে সময়ে পরিশোধ করা হয় তার সঙ্গে নয়। এই বিচারগুলোর প্রতিটি ব্যবস্থাপনা করে, পর্যালোচনা করেন এমন একজন নিরীক্ষক যাঁকে ব্যবস্থাপনাই টাকা দেয়, এবং তা দাখিল হয় এমন এক নিয়ন্ত্রকের কাছে যিনি বছরে হাজারো এমন দাখিল পড়েন।

### অ্যাক্রুয়াল: মধ্যবর্তী ফাঁক

অ্যাক্রুয়ালকে সংজ্ঞায়িত করুন কোম্পানি যা আয় করেছে বলেছে আর যা আসলে আদায় করেছে তার পার্থক্য হিসেবে:

**অ্যাক্রুয়াল = নিট মুনাফা − পরিচালন কার্যক্রম থেকে নগদ প্রবাহ**

দুটি কাছাকাছি হলে রিপোর্টকৃত মুনাফা নগদ ঘটনাই বর্ণনা করছে। নিট মুনাফা বড় আর CFO ছোট হলে মুনাফাটি ব্যাংক হিসাব ছাড়া অন্য কোথাও আছে — একটি প্রাপ্যে, অবিক্রীত পণ্যের মজুদে, একটি মূলধনীকৃত ব্যয়ে, এক টুকরো জমির ন্যায্যমূল্য লাভে। এগুলোর সবই বৈধ হিসাব-এন্ট্রি। এগুলোর সবই বিপরীতমুখী হতে পারে, এবং সবই এমন দিকে ফেরে যা ক্ষতি করে।

গবেষণালব্ধ ফল — Richard Sloan, ১৯৯৬, এবং তারপর কয়েক ডজন বাজারে পুনরাবৃত্ত — হলো: **আয়ের অ্যাক্রুয়াল অংশ নগদ অংশের চেয়ে অনেক কম স্থায়ী।** যে এক টাকা মুনাফা নগদ হিসেবে এসেছে তা পরের বছর পুনরাবৃত্ত হওয়ার প্রবণতা রাখে। যে এক টাকা অ্যাক্রুয়াল হিসেবে এসেছে তা রাখে না। বাজার গড়ে দুটোকেই একই দাম দেয়। এই ভুল মূল্যায়নই সুযোগ, এবং যেসব বাজারে গবেষণাটি হয়েছিল তার তুলনায় বাংলাদেশে এটি বড়, কারণ এখানে প্রকাশের মান নিম্ন এবং বিশ্লেষক কভারেজ পাতলা।

### আটটি কৌশল

যে ইস্যুয়ার ভালো ব্যবসা ছাড়াই উচ্চতর রিপোর্টকৃত EPS চান তাঁর হাতে আটটি প্রমিত হাতিয়ার আছে। খুঁজলে সবই হিসাবে দৃশ্যমান।

**১. রাজস্ব স্বীকৃতির সময়কাল।** মার্চের সরবরাহকে ফেব্রুয়ারির প্রান্তিকে ঠেলে দিন। বহুবর্ষী সেবা চুক্তির পুরো এক বছর স্বাক্ষরের সময়েই স্বীকৃত করুন। IFRS ১৫-এর অধীনে কর্মসম্পাদন-বাধ্যবাধকতার পরীক্ষা এটি সীমিত করে, কিন্তু পরীক্ষাটি নির্ভর করে ব্যবস্থাপনার নিজের দেওয়া বাধ্যবাধকতার বর্ণনার ওপর।

**২. প্রাপ্য স্ফীতকরণ।** সবচেয়ে সস্তা কৌশল। যে-ই স্বাক্ষর করবে তার কাছেই বাকিতে বিক্রি করুন — যাদের দুর্বল বলে আপনি জানেন তাদের কাছেও — এবং রাজস্ব লিখে ফেলুন। নগদ কখনো আসে না, কিন্তু EPS আসে। এটি প্রকাশ পায় রাজস্ব প্রবৃদ্ধিকে ছাড়িয়ে যাওয়া প্রাপ্য প্রবৃদ্ধি হিসেবে। ডিএসই-তে এটিই একক সবচেয়ে নির্ভরযোগ্য লাল পতাকা।

**৩. মজুদ মূল্যায়ন।** মজুদ ক্রয়মূল্য ও নিট আদায়যোগ্য মূল্যের মধ্যে যেটি কম সেই মূল্যে ধরা হয়। "নিট আদায়যোগ্য মূল্য" একটি প্রাক্কলন। ধস-পূর্ব তুলার দামে কেনা গ্রে ফ্যাব্রিকের ওপর বসে থাকা একটি বস্ত্রকল কেবল অবচয় লেখা প্রত্যাখ্যান করতে পারে। ক্ষয়প্রাপ্ত সম্পদের অবলোপন না করা মানে রিপোর্টকৃত মুনাফা বাড়ানো — কিছুই না করে অর্জিত।

**৪. যে ব্যয় খরচ লেখা উচিত তা মূলধনীকরণ।** মেরামত ও রক্ষণাবেক্ষণকে "নির্মাণাধীন মূলধন কাজ"-এ সরিয়ে দিন। IAS ২৩-এর বিপরীতে, প্রকল্প মূলত সম্পন্ন হওয়ার অনেক পরেও ঋণ ব্যয় প্রকল্পে মূলধনীকরণ করুন। IAS ৩৮-এর স্বীকৃতির শর্ত পূরণ করে না এমন উন্নয়ন ব্যয় মূলধনীকরণ করুন। আয় বিবরণী থেকে স্থিতিপত্রে সরানো প্রতিটি টাকা আজ অতিরিক্ত রিপোর্টকৃত মুনাফা এবং পরে অতিরিক্ত অবচয়।

**৫. অবমূল্যায়িত অবচয়।** যন্ত্রপাতির উপযোগী জীবন দশ বছর থেকে পনেরো বছরে বাড়িয়ে দিন। অবচয় কমে, মুনাফা বাড়ে, এবং পরিবর্তনটি এমন একটি নোটে প্রকাশ পায় যা প্রায় কেউ পড়ে না। সমগোত্রীয়দের মধ্যে মোট স্থায়ী সম্পদের বিপরীতে অবচয় তুলনা করুন — যে কল মোট ব্লকের ৪% হারে অবচয় লিখছে যখন সমগোত্রীয়রা ৭%-এ চলছে, সেটি আপনাকে কিছু বলছে।

**৬. সম্পর্কিত-পক্ষের বিক্রয়।** উদ্যোক্তার নিয়ন্ত্রণাধীন একটি প্রতিষ্ঠানের কাছে বিক্রি করুন, উদ্যোক্তার নির্ধারিত দামে। রাজস্ব রূপে বাস্তব, সারবস্তুতে ফাঁপা। বাংলাদেশি গ্রুপ কাঠামো — যেখানে একটি তালিকাভুক্ত কোম্পানি একটি অতালিকাভুক্ত পারিবারিক গ্রুপের ভেতরে বসে — এটিকে কাঠামোগতভাবে সহজ করে দেয়। IAS ২৪ অনুযায়ী সম্পর্কিত-পক্ষ নোট বাধ্যতামূলক। পড়ুন।

**৭. বিলম্বিত করের খেলা।** এমন বাহিত ক্ষতির ওপর বিলম্বিত কর সম্পদ স্বীকৃত করুন যার জন্য ভবিষ্যৎ মুনাফা দরকার, যা কেউ দেখাতে পারেনি। একটি বিলম্বিত কর দায় আয়ে ছেড়ে দিন। যে কোম্পানির কার্যকর করহার তালিকাভুক্ত কোম্পানির বিধিবদ্ধ হারের অনেক নিচে, অথচ রপ্তানি বা কর-অবকাশের কোনো ব্যাখ্যা নেই — সে পরিচালন রেখার নিচে মুনাফা উৎপাদন করছে।

**৮. আয়ে পাঠানো পুনর্মূল্যায়ন লাভ।** জমি বা ভবনের ঊর্ধ্বমুখী পুনর্মূল্যায়ন করুন এবং লাভটি অন্যান্য সমগ্র আয় ও পুনর্মূল্যায়ন উদ্বৃত্তের বদলে লাভ-ক্ষতির মধ্য দিয়ে পাঠান। এটি একটি অ-নগদ, অ-পুনরাবৃত্ত, অ-পরিচালন লাভ যা এমন একটি সংখ্যার ভেতরে বসে আছে যাকে বাজার একটি P/E দিয়ে গুণ করে। আটটির মধ্যে এটিই সবচেয়ে নির্লজ্জ এবং সবচেয়ে সহজে শনাক্তযোগ্য।

### স্থায়িত্ব

এই সবকিছুর নিচে একটিই প্রশ্ন: **এই মুনাফা কি আগামী বছর আবার ঘটবে?**

স্থিতিশীল মার্জিনে বেশি পণ্য বিক্রি করে পাওয়া পরিচালন মুনাফা স্থায়ী। একবারের জমি পুনর্মূল্যায়ন, বীমা নিষ্পত্তি, বৈদেশিক মুদ্রা রূপান্তর লাভ, বা একটি সাবসিডিয়ারি বিক্রি থেকে পাওয়া মুনাফা স্থায়ী নয়। এককালীন লাভযুক্ত সংখ্যায় P/E গুণক প্রয়োগ করা মানে একটি একক ঘটনাকে চিরস্থায়ীতে রূপান্তর করা। এই এক্সচেঞ্জে এটিই সবচেয়ে সাধারণ মূল্যায়ন ভুল, এবং পেশাদাররা খুচরা বিনিয়োগকারীদের মতোই ঘন ঘন এটি করেন।

**পরিচালন-থেকে-নিট অনুপাতই দ্রুততম পরীক্ষা।** পরিচালন মুনাফা ৪০ কোটি টাকা এবং নিট মুনাফা ৬০ কোটি টাকা হলে, অতিরিক্ত ২০ কোটি টাকা পরিচালন রেখার নিচের কোথাও থেকে এসেছে, এবং তাতে কোনো গুণক প্রয়োগের আগে আপনাকে খুঁজে বের করতে হবে কোথা থেকে।`,
    },

    simple: {
      en: `Two shopkeepers on the same street. Both tell you they made BDT 6 lakh this year.

**Shopkeeper A** opens a cash box. There is BDT 7.8 lakh in it, more than the profit he claimed, because he also collected some old dues.

**Shopkeeper B** opens a cash box. There is BDT 80,000 in it. He points to a ledger and says: "The rest is with customers. They will pay."

Both statements are true. Both are "profit." Only one of them can pay a salary, buy raw material, or send you a dividend.

---

### Why the ledger fills up

Ask why B's customers owe so much. There are three possible answers and only one of them is good.

- **"We grew fast this year and the money is in transit."** Possible. Check whether receivables grew roughly in line with sales. If sales grew 15% and receivables grew 70%, this answer is false.
- **"Our sector has long credit terms."** Possible, and true of textiles and some engineering. But then it was also true last year, and the year before. Compare against the company's own history, not against a story.
- **"We sold to people who cannot pay, because we needed the revenue number."** Nobody says this. It is what the numbers say when the first two answers fail.

### The part that costs retail investors money

You look at a screen. It says **EPS 6.00, P/E 12**. You compare it to another company at EPS 6.00 and P/E 12 and conclude they are equally priced.

They are not. One of them will pay you a dividend next year. The other will announce a "provision for doubtful debts" in the fourth quarter, restate its profit downward, and fall 30% in a week — and you will read a newspaper article calling it a surprise.

**It was not a surprise. It was in the cash flow statement twelve months earlier, on a page nobody opened.**

The discipline is one line long: **never look at EPS without looking at cash flow from operations beside it.** If profit and cash disagree for two consecutive years, the profit is the thing that is wrong.`,
      bn: `একই রাস্তায় দুই দোকানদার। দুজনেই বলছেন এ বছর তাঁরা ৬ লক্ষ টাকা লাভ করেছেন।

**দোকানদার ক** ক্যাশ বাক্স খোলেন। এতে ৭.৮ লক্ষ টাকা আছে, তাঁর দাবি করা মুনাফার চেয়েও বেশি, কারণ তিনি কিছু পুরোনো বকেয়াও আদায় করেছেন।

**দোকানদার খ** ক্যাশ বাক্স খোলেন। এতে ৮০,০০০ টাকা আছে। তিনি একটি খাতা দেখিয়ে বলেন: "বাকিটা খদ্দেরদের কাছে। তাঁরা দেবেন।"

দুটি বক্তব্যই সত্য। দুটিই "মুনাফা"। কিন্তু কেবল একটি দিয়েই বেতন দেওয়া, কাঁচামাল কেনা, বা আপনাকে লভ্যাংশ পাঠানো যায়।

---

### খাতা কেন ভরে ওঠে

জিজ্ঞেস করুন খ-এর খদ্দেররা কেন এত টাকা পাওনা রাখেন। সম্ভাব্য তিনটি উত্তর আছে এবং কেবল একটি ভালো।

- **"এ বছর আমরা দ্রুত বেড়েছি এবং টাকা পথে আছে।"** সম্ভব। দেখুন প্রাপ্য বিক্রয়ের সঙ্গে মোটামুটি সমানুপাতে বেড়েছে কি না। বিক্রয় ১৫% বাড়লে আর প্রাপ্য ৭০% বাড়লে এই উত্তর মিথ্যা।
- **"আমাদের খাতে বাকির মেয়াদ দীর্ঘ।"** সম্ভব, এবং বস্ত্র ও কিছু প্রকৌশল খাতে সত্য। কিন্তু তবে তা গত বছরও সত্য ছিল, তার আগের বছরও। কোম্পানির নিজস্ব ইতিহাসের সঙ্গে তুলনা করুন, গল্পের সঙ্গে নয়।
- **"আমরা এমন মানুষের কাছে বিক্রি করেছি যাঁরা দিতে পারবেন না, কারণ আমাদের রাজস্বের সংখ্যাটি দরকার ছিল।"** এটি কেউ বলেন না। প্রথম দুটি উত্তর ব্যর্থ হলে সংখ্যাগুলো এটিই বলে।

### যে অংশটি খুচরা বিনিয়োগকারীর টাকা কেড়ে নেয়

আপনি পর্দায় তাকান। লেখা আছে **EPS ৬.০০, P/E ১২**। আপনি এটিকে EPS ৬.০০ ও P/E ১২-এর আরেকটি কোম্পানির সঙ্গে তুলনা করে সিদ্ধান্তে আসেন দুটোর দাম সমান।

সমান নয়। একটি আপনাকে আগামী বছর লভ্যাংশ দেবে। অন্যটি চতুর্থ প্রান্তিকে "সন্দেহজনক ঋণের সঞ্চিতি" ঘোষণা করবে, মুনাফা নিম্নমুখী পুনর্বিবৃত করবে, এবং এক সপ্তাহে ৩০% পড়বে — আর আপনি সংবাদপত্রে একটি নিবন্ধ পড়বেন যা একে বিস্ময় বলছে।

**এটি বিস্ময় ছিল না। এটি বারো মাস আগেই নগদ প্রবাহ বিবরণীতে ছিল, এমন এক পৃষ্ঠায় যা কেউ খোলেনি।**

শৃঙ্খলাটি এক লাইনের: **পাশে পরিচালন কার্যক্রম থেকে নগদ প্রবাহ না দেখে কখনো EPS দেখবেন না।** পরপর দুই বছর মুনাফা ও নগদ অমিল হলে, ভুলটি মুনাফার দিকেই।`,
    },

    example: {
      en: `### Two companies, one EPS

Both are DSE-listed. Both closed FY2024 with net profit of **BDT 60 crore** on **10 crore shares** — **EPS BDT 6.00** each. Both trade near BDT 72, so both show a P/E of 12.0. A screener cannot tell them apart.

**Company A** is a pharmaceutical manufacturer. **Company B** is a textile spinner. All figures BDT crore.

| Line | Company A | Company B |
|---|---|---|
| Revenue FY2023 | 400 | 400 |
| Revenue FY2024 | 460 | 460 |
| Revenue growth | +15.0% | +15.0% |
| Profit before tax | 78 | 69 |
| Tax expense | 18 | 9 |
| **Net profit** | **60** | **60** |
| **EPS (BDT)** | **6.00** | **6.00** |
| Depreciation & amortisation | 34 | 20 |
| **Cash flow from operations** | **78** | **8** |

Everything above the net profit line is unremarkable. Everything below it is the entire chapter.

### Reconciling profit to cash

**Company A:**

| Step | BDT cr |
|---|---|
| Net profit | 60 |
| Add: depreciation & amortisation | +34 |
| Less: increase in receivables (60 → 66) | −6 |
| Less: increase in inventory (110 → 134) | −24 |
| Add: increase in payables (72 → 86) | +14 |
| **Cash flow from operations** | **78** |

**Company B:**

| Step | BDT cr |
|---|---|
| Net profit | 60 |
| Add: depreciation & amortisation | +20 |
| Less: revaluation gain routed through P&L (non-cash) | −18 |
| Less: increase in receivables (70 → 119) | −49 |
| Less: increase in inventory (90 → 97) | −7 |
| Add: increase in payables (80 → 82) | +2 |
| **Cash flow from operations** | **8** |

B's profit is not in the bank. **BDT 49 crore of it is sitting with customers and BDT 18 crore of it is a piece of land that was re-priced by a valuer.**

### The diagnostic ratios

| Measure | Company A | Company B | What it says |
|---|---|---|---|
| Accruals (NP − CFO) | −18 cr | +52 cr | B's earnings are 87% non-cash |
| Accrual ratio (÷ avg assets 500) | −3.6% | +10.4% | Above +5% is the standard warning line |
| Sloan accrual ratio | −3.6% | +6.8% | See the reconciliation below |
| Cash conversion (CFO ÷ NP) | 1.30× | 0.13× | A collects more than it books |
| Receivable growth | +10.0% | +70.0% | Against 15% revenue growth in both |
| DSO | 52.4 days | 94.4 days | B waits three months to get paid |
| Effective tax rate | 23.1% | 13.0% | Against a 22.5% statutory rate |
| One-off income ÷ PBT | 2.6% | 26.1% | A quarter of B's PBT will not repeat |
| Operating profit ÷ net profit | High | Low | B needs the below-the-line items |

**Why the two accrual measures disagree for B.** The cash-flow measure says 10.4%; the Sloan balance-sheet measure says 6.8%. The gap is 3.6% of BDT 500 crore = **BDT 18 crore — exactly the revaluation gain.** The Sloan measure only captures working-capital accruals. Anything sitting outside working capital — a fair-value gain, a deferred tax release, a capitalised cost — escapes it. **This is why you compute both. The difference between them is a map of where the non-working-capital accruals are hiding.**

For Company A the two measures agree to the decimal (−3.6% and −3.6%), which is itself informative: A has no material accruals outside working capital.

### What happens next

Nothing, for about three quarters. B's share price tracks A's. Analysts publish target prices on both. Retail investors on Facebook groups argue about which has the better chart.

Then one of these things happens to B:

- The auditor insists on a provision against the 180-day receivables, and BDT 30 crore of prior-year "profit" is reversed.
- The valuer's assumption on the land is questioned by the FRC, and the revaluation route is closed.
- The deferred tax asset is written down because the future profits it assumed never appeared.
- A working capital line comes up for renewal and the bank looks at the same cash flow statement you should have looked at.

**Any one of these is a 30–40% single-week move on the DSE, because the market repriced EPS 6.00 as if it were real and now has to reprice it as EPS 2.50.** Chapter 2 established that a lower circuit locks you out of selling. This is the kind of news that opens a scrip three consecutive days at the floor.

The lesson is not that Company B is a fraud. It may be an ordinary textile business with weak customers and an aggressive board. **The lesson is that the market paid the same price for two very different assets, because the only number on the screen was the same.**`,
      bn: `### দুটি কোম্পানি, একটিই EPS

দুটিই ডিএসই-তে তালিকাভুক্ত। দুটিই FY২০২৪ শেষ করেছে **৬০ কোটি টাকা** নিট মুনাফায়, **১০ কোটি শেয়ারে** — প্রতিটির **EPS ৬.০০ টাকা**। দুটিই প্রায় ৭২ টাকায় লেনদেন হয়, তাই দুটিরই P/E দেখায় ১২.০। একটি স্ক্রিনার এদের আলাদা করতে পারে না।

**কোম্পানি A** একটি ওষুধ প্রস্তুতকারক। **কোম্পানি B** একটি বস্ত্র স্পিনার। সব সংখ্যা কোটি টাকায়।

| খাত | কোম্পানি A | কোম্পানি B |
|---|---|---|
| রাজস্ব FY২০২৩ | ৪০০ | ৪০০ |
| রাজস্ব FY২০২৪ | ৪৬০ | ৪৬০ |
| রাজস্ব প্রবৃদ্ধি | +১৫.০% | +১৫.০% |
| করপূর্ব মুনাফা | ৭৮ | ৬৯ |
| কর ব্যয় | ১৮ | ৯ |
| **নিট মুনাফা** | **৬০** | **৬০** |
| **EPS (টাকা)** | **৬.০০** | **৬.০০** |
| অবচয় ও অ্যামর্টাইজেশন | ৩৪ | ২০ |
| **পরিচালন কার্যক্রম থেকে নগদ প্রবাহ** | **৭৮** | **৮** |

নিট মুনাফা রেখার ওপরের সবকিছু সাধারণ। এর নিচের সবকিছুই এই অধ্যায়।

### মুনাফাকে নগদের সঙ্গে মেলানো

**কোম্পানি A:**

| ধাপ | কোটি টাকা |
|---|---|
| নিট মুনাফা | ৬০ |
| যোগ: অবচয় ও অ্যামর্টাইজেশন | +৩৪ |
| বাদ: প্রাপ্য বৃদ্ধি (৬০ → ৬৬) | −৬ |
| বাদ: মজুদ বৃদ্ধি (১১০ → ১৩৪) | −২৪ |
| যোগ: প্রদেয় বৃদ্ধি (৭২ → ৮৬) | +১৪ |
| **পরিচালন নগদ প্রবাহ** | **৭৮** |

**কোম্পানি B:**

| ধাপ | কোটি টাকা |
|---|---|
| নিট মুনাফা | ৬০ |
| যোগ: অবচয় ও অ্যামর্টাইজেশন | +২০ |
| বাদ: লাভ-ক্ষতির মধ্য দিয়ে পাঠানো পুনর্মূল্যায়ন লাভ (অ-নগদ) | −১৮ |
| বাদ: প্রাপ্য বৃদ্ধি (৭০ → ১১৯) | −৪৯ |
| বাদ: মজুদ বৃদ্ধি (৯০ → ৯৭) | −৭ |
| যোগ: প্রদেয় বৃদ্ধি (৮০ → ৮২) | +২ |
| **পরিচালন নগদ প্রবাহ** | **৮** |

B-এর মুনাফা ব্যাংকে নেই। **এর ৪৯ কোটি টাকা খদ্দেরদের কাছে বসে আছে এবং ১৮ কোটি টাকা হলো এক টুকরো জমি যার দাম একজন মূল্যায়নকারী নতুন করে নির্ধারণ করেছেন।**

### নির্ণায়ক অনুপাতসমূহ

| পরিমাপ | কোম্পানি A | কোম্পানি B | এটি যা বলে |
|---|---|---|---|
| অ্যাক্রুয়াল (নিট মুনাফা − CFO) | −১৮ কোটি | +৫২ কোটি | B-এর আয়ের ৮৭% অ-নগদ |
| অ্যাক্রুয়াল অনুপাত (÷ গড় সম্পদ ৫০০) | −৩.৬% | +১০.৪% | +৫%-এর ওপরে প্রমিত সতর্ক রেখা |
| Sloan অ্যাক্রুয়াল অনুপাত | −৩.৬% | +৬.৮% | নিচের সমন্বয় দেখুন |
| নগদ রূপান্তর (CFO ÷ নিট মুনাফা) | ১.৩০× | ০.১৩× | A যা লেখে তার চেয়ে বেশি আদায় করে |
| প্রাপ্য প্রবৃদ্ধি | +১০.০% | +৭০.০% | দুটিতেই রাজস্ব প্রবৃদ্ধি ১৫%-এর বিপরীতে |
| DSO | ৫২.৪ দিন | ৯৪.৪ দিন | B টাকা পেতে তিন মাস অপেক্ষা করে |
| কার্যকর করহার | ২৩.১% | ১৩.০% | ২২.৫% বিধিবদ্ধ হারের বিপরীতে |
| এককালীন আয় ÷ PBT | ২.৬% | ২৬.১% | B-এর PBT-র এক-চতুর্থাংশ পুনরাবৃত্ত হবে না |
| পরিচালন মুনাফা ÷ নিট মুনাফা | উচ্চ | নিম্ন | B-এর রেখার নিচের আইটেমগুলো দরকার |

**B-এর ক্ষেত্রে দুটি অ্যাক্রুয়াল পরিমাপ কেন ভিন্ন।** নগদ-প্রবাহভিত্তিক পরিমাপ বলে ১০.৪%; Sloan-এর স্থিতিপত্রভিত্তিক পরিমাপ বলে ৬.৮%। ফাঁকটি ৫০০ কোটি টাকার ৩.৬% = **১৮ কোটি টাকা — ঠিক পুনর্মূল্যায়ন লাভটি।** Sloan পরিমাপ কেবল কার্যকরী মূলধনের অ্যাক্রুয়াল ধরে। কার্যকরী মূলধনের বাইরে বসে থাকা যেকোনো কিছু — একটি ন্যায্যমূল্য লাভ, একটি বিলম্বিত কর অবমুক্তি, একটি মূলধনীকৃত ব্যয় — এর ফাঁক দিয়ে বেরিয়ে যায়। **এ কারণেই আপনি দুটিই গণনা করবেন। এদের পার্থক্যই কার্যকরী মূলধনের বাইরের অ্যাক্রুয়ালগুলো কোথায় লুকিয়ে আছে তার মানচিত্র।**

কোম্পানি A-এর ক্ষেত্রে দুটি পরিমাপ দশমিক পর্যন্ত মেলে (−৩.৬% ও −৩.৬%), যা নিজেই তথ্যবহুল: A-এর কার্যকরী মূলধনের বাইরে উল্লেখযোগ্য কোনো অ্যাক্রুয়াল নেই।

### এরপর যা ঘটে

প্রায় তিন প্রান্তিক ধরে কিছুই না। B-এর শেয়ারদর A-কে অনুসরণ করে। বিশ্লেষকরা দুটোরই লক্ষ্যমূল্য প্রকাশ করেন। ফেসবুক গ্রুপে খুচরা বিনিয়োগকারীরা তর্ক করেন কার চার্ট ভালো।

তারপর B-এর সঙ্গে এর একটি ঘটে:

- নিরীক্ষক ১৮০ দিনের প্রাপ্যের বিপরীতে সঞ্চিতি রাখতে জোর দেন, এবং পূর্ববর্তী বছরের ৩০ কোটি টাকার "মুনাফা" বিপরীতমুখী হয়।
- জমির ওপর মূল্যায়নকারীর অনুমান FRC প্রশ্ন করে, এবং পুনর্মূল্যায়নের পথ বন্ধ হয়।
- বিলম্বিত কর সম্পদ অবলোপন করা হয় কারণ যে ভবিষ্যৎ মুনাফা ধরে নেওয়া হয়েছিল তা কখনো আসেনি।
- একটি কার্যকরী মূলধন সীমা নবায়নের সময় আসে এবং ব্যাংক সেই একই নগদ প্রবাহ বিবরণী দেখে যা আপনার দেখা উচিত ছিল।

**এদের যেকোনো একটিই ডিএসই-তে এক সপ্তাহে ৩০–৪০% নড়াচড়া, কারণ বাজার EPS ৬.০০-কে বাস্তব ধরে দাম দিয়েছিল এবং এখন তাকে EPS ২.৫০ হিসেবে নতুন দাম দিতে হবে।** অধ্যায় ২ প্রতিষ্ঠা করেছে নিম্ন সার্কিট আপনাকে বিক্রি থেকে আটকে দেয়। এটি সেই ধরনের খবর যা টানা তিন দিন স্ক্রিপকে ফ্লোরে খোলায়।

শিক্ষাটি এই নয় যে কোম্পানি B একটি প্রতারণা। এটি দুর্বল খদ্দের ও আক্রমণাত্মক পরিচালনা পর্ষদসহ একটি সাধারণ বস্ত্র ব্যবসাও হতে পারে। **শিক্ষাটি হলো, বাজার দুটি সম্পূর্ণ ভিন্ন সম্পদের জন্য একই দাম দিয়েছে, কারণ পর্দার একমাত্র সংখ্যাটি একই ছিল।**`,
    },

    formula: {
      en: `**1. Accruals — the cash-flow definition**

$$\\text{Accruals} = \\text{Net Profit} - \\text{Cash Flow from Operations}$$

**2. Accrual ratio** — scaled so companies of different size are comparable:

$$\\text{Accrual Ratio} = \\frac{\\text{Net Profit} - \\text{CFO}}{\\text{Average Total Assets}} \\times 100$$

Above $+5\\%$ is a warning. Above $+10\\%$ demands an explanation before you buy.

**3. Sloan accrual measure — the balance-sheet definition**

$$\\text{Sloan Accruals} = \\frac{\\Delta\\text{NWC} - \\text{Depreciation}}{\\text{Average Total Assets}} \\times 100$$

where non-cash working capital changes as

$$\\Delta\\text{NWC} = \\Delta\\text{Receivables} + \\Delta\\text{Inventory} - \\Delta\\text{Payables}$$

**The two measures should be close. Where they diverge, the difference is the non-working-capital accrual:**

$$\\text{Hidden Accrual} = (\\text{Accrual Ratio} - \\text{Sloan Ratio}) \\times \\text{Average Total Assets}$$

**4. Cash conversion**

$$\\text{Cash Conversion} = \\frac{\\text{CFO}}{\\text{Net Profit}}$$

Above $1.0$ is healthy. Below $0.80$ for two consecutive years is a structural problem, not a timing problem.

**5. Operating quality**

$$\\text{Operating-to-Net} = \\frac{\\text{Operating Profit}}{\\text{Net Profit}}$$

Materially below $1.0$ means below-the-line items are carrying the earnings.

**6. Receivable growth vs revenue growth**

$$\\text{Gap} = \\left(\\frac{AR_1}{AR_0} - 1\\right) \\times 100 - \\left(\\frac{Rev_1}{Rev_0} - 1\\right) \\times 100$$

Expressed in percentage points. A gap above $+15$ pp means the revenue growth was bought with credit.

**7. Days sales outstanding**

$$DSO = \\frac{\\text{Receivables}}{\\text{Revenue}} \\times 365$$

**8. Effective tax rate gap**

$$\\text{ETR Gap} = \\tau_{statutory} - \\frac{\\text{Tax Expense}}{\\text{Profit Before Tax}} \\times 100$$

**9. The composite Earnings Quality Score**

$$\\text{EQ Score} = 100 - \\sum_{i=1}^{8} w_i \\cdot \\mathbb{1}[f_i]$$

where $\\mathbb{1}[f_i]$ is $1$ if flag $i$ trips and $0$ otherwise, and the weights $w_i$ sum to $100$:

| Flag | Condition | $w_i$ |
|---|---|---|
| F1 | Cash conversion $< 0.80$ | 20 |
| F2 | Accrual ratio $> +5\\%$ | 18 |
| F3 | Receivable growth exceeds revenue growth by $> 15$ pp | 15 |
| F4 | Inventory growth exceeds revenue growth by $> 15$ pp | 12 |
| F5 | One-off income $> 20\\%$ of PBT | 12 |
| F6 | Related-party revenue $> 15\\%$ of revenue | 10 |
| F7 | ETR gap $> 8$ pp | 8 |
| F8 | Revaluation gain routed through P&L | 5 |

$$\\text{Verdict} = \\begin{cases} \\text{HIGH} & \\text{EQ} \\geq 75 \\\\ \\text{MEDIUM} & 50 \\leq \\text{EQ} < 75 \\\\ \\text{LOW} & \\text{EQ} < 50 \\end{cases}$$

**The weights are not neutral and are not meant to be.** F1 and F2 carry 38 points between them because they are the two tests that cannot be argued away with a sector story. F8 carries only 5 because it is trivially easy to detect and therefore rarely the whole problem — but it never appears alone.`,
      bn: `**১. অ্যাক্রুয়াল — নগদ-প্রবাহভিত্তিক সংজ্ঞা**

$$\\text{অ্যাক্রুয়াল} = \\text{নিট মুনাফা} - \\text{পরিচালন নগদ প্রবাহ}$$

**২. অ্যাক্রুয়াল অনুপাত** — ভিন্ন আকারের কোম্পানি তুলনীয় করতে মাপানো:

$$\\text{অ্যাক্রুয়াল অনুপাত} = \\frac{\\text{নিট মুনাফা} - \\text{CFO}}{\\text{গড় মোট সম্পদ}} \\times 100$$

$+5\\%$-এর ওপরে একটি সতর্কতা। $+10\\%$-এর ওপরে কেনার আগে ব্যাখ্যা দাবি করে।

**৩. Sloan অ্যাক্রুয়াল পরিমাপ — স্থিতিপত্রভিত্তিক সংজ্ঞা**

$$\\text{Sloan অ্যাক্রুয়াল} = \\frac{\\Delta\\text{NWC} - \\text{অবচয়}}{\\text{গড় মোট সম্পদ}} \\times 100$$

যেখানে অ-নগদ কার্যকরী মূলধনের পরিবর্তন

$$\\Delta\\text{NWC} = \\Delta\\text{প্রাপ্য} + \\Delta\\text{মজুদ} - \\Delta\\text{প্রদেয}$$

**দুটি পরিমাপ কাছাকাছি হওয়া উচিত। যেখানে এরা আলাদা হয়, পার্থক্যটিই কার্যকরী মূলধনের বাইরের অ্যাক্রুয়াল:**

$$\\text{লুকানো অ্যাক্রুয়াল} = (\\text{অ্যাক্রুয়াল অনুপাত} - \\text{Sloan অনুপাত}) \\times \\text{গড় মোট সম্পদ}$$

**৪. নগদ রূপান্তর**

$$\\text{নগদ রূপান্তর} = \\frac{\\text{CFO}}{\\text{নিট মুনাফা}}$$

$1.0$-এর ওপরে স্বাস্থ্যকর। পরপর দুই বছর $0.80$-এর নিচে হলে তা সময়ের সমস্যা নয়, কাঠামোগত সমস্যা।

**৫. পরিচালন গুণমান**

$$\\text{পরিচালন-থেকে-নিট} = \\frac{\\text{পরিচালন মুনাফা}}{\\text{নিট মুনাফা}}$$

$1.0$-এর উল্লেখযোগ্যভাবে নিচে মানে রেখার নিচের আইটেমগুলোই আয় বহন করছে।

**৬. প্রাপ্য প্রবৃদ্ধি বনাম রাজস্ব প্রবৃদ্ধি**

$$\\text{ফাঁক} = \\left(\\frac{AR_1}{AR_0} - 1\\right) \\times 100 - \\left(\\frac{Rev_1}{Rev_0} - 1\\right) \\times 100$$

শতাংশ বিন্দুতে প্রকাশিত। $+15$ pp-এর ওপরে ফাঁক মানে রাজস্ব প্রবৃদ্ধি বাকিতে কেনা হয়েছে।

**৭. দিনভিত্তিক বকেয়া বিক্রয়**

$$DSO = \\frac{\\text{প্রাপ্য}}{\\text{রাজস্ব}} \\times 365$$

**৮. কার্যকর করহারের ফাঁক**

$$\\text{ETR ফাঁক} = \\tau_{বিধিবদ্ধ} - \\frac{\\text{কর ব্যয়}}{\\text{করপূর্ব মুনাফা}} \\times 100$$

**৯. যৌগিক Earnings Quality Score**

$$\\text{EQ Score} = 100 - \\sum_{i=1}^{8} w_i \\cdot \\mathbb{1}[f_i]$$

যেখানে $i$-তম পতাকা উঠলে $\\mathbb{1}[f_i]$ হয় $1$, নইলে $0$, এবং ওজন $w_i$-এর যোগফল $100$:

| পতাকা | শর্ত | $w_i$ |
|---|---|---|
| F1 | নগদ রূপান্তর $< 0.80$ | ২০ |
| F2 | অ্যাক্রুয়াল অনুপাত $> +5\\%$ | ১৮ |
| F3 | প্রাপ্য প্রবৃদ্ধি রাজস্ব প্রবৃদ্ধিকে $> 15$ pp ছাড়ায় | ১৫ |
| F4 | মজুদ প্রবৃদ্ধি রাজস্ব প্রবৃদ্ধিকে $> 15$ pp ছাড়ায় | ১২ |
| F5 | এককালীন আয় PBT-র $> 20\\%$ | ১২ |
| F6 | সম্পর্কিত-পক্ষের রাজস্ব মোট রাজস্বের $> 15\\%$ | ১০ |
| F7 | ETR ফাঁক $> 8$ pp | ৮ |
| F8 | পুনর্মূল্যায়ন লাভ লাভ-ক্ষতির মধ্য দিয়ে পাঠানো | ৫ |

$$\\text{রায়} = \\begin{cases} \\text{HIGH} & \\text{EQ} \\geq 75 \\\\ \\text{MEDIUM} & 50 \\leq \\text{EQ} < 75 \\\\ \\text{LOW} & \\text{EQ} < 50 \\end{cases}$$

**ওজনগুলো নিরপেক্ষ নয় এবং নিরপেক্ষ হওয়ার কথাও নয়।** F1 ও F2 মিলে ৩৮ পয়েন্ট বহন করে কারণ এই দুটি পরীক্ষাকেই খাতভিত্তিক গল্প দিয়ে খণ্ডানো যায় না। F8 মাত্র ৫ বহন করে কারণ এটি শনাক্ত করা অতি সহজ এবং তাই খুব কমই পুরো সমস্যা — কিন্তু এটি কখনো একা আসে না।`,
    },

    manual: {
      en: `We score **Company B** in full. Every input comes from the table in the example block. All monetary figures BDT crore.

**Given:** Net profit 60, CFO 8, average total assets 500, revenue 400 → 460, receivables 70 → 119, inventory 90 → 97, payables 80 → 82, depreciation 20, PBT 69, tax 9, one-off income 18, related-party revenue 55, revaluation routed through P&L = yes, statutory rate 22.5%.

---

**Step 1 — Accruals.**

$$\\text{Accruals} = 60 - 8 = \\text{BDT } 52 \\text{ crore}$$

**Step 2 — Accrual ratio.**

$$\\frac{52}{500} \\times 100 = 10.4\\%$$

Threshold is $+5\\%$. **F2 trips. Penalty 18.**

**Step 3 — Cash conversion.**

$$\\frac{8}{60} = 0.13\\times$$

Threshold is $0.80$. **F1 trips. Penalty 20.**

**Step 4 — Sloan accruals.** First the change in non-cash working capital:

$$\\Delta\\text{NWC} = (119 - 70) + (97 - 90) - (82 - 80) = 49 + 7 - 2 = 54$$

$$\\text{Sloan Accruals} = \\frac{54 - 20}{500} \\times 100 = \\frac{34}{500} \\times 100 = 6.8\\%$$

**Step 5 — Reconcile the two accrual measures.**

$$10.4\\% - 6.8\\% = 3.6\\% \\quad\\Rightarrow\\quad 0.036 \\times 500 = \\text{BDT } 18 \\text{ crore}$$

That is exactly the revaluation gain. **The gap between the two measures located the hidden accrual without us having read the note.** This is the single most useful arithmetic in the chapter.

**Step 6 — Growth gaps.**

$$\\text{Revenue growth} = \\left(\\frac{460}{400} - 1\\right) \\times 100 = 15.0\\%$$
$$\\text{Receivable growth} = \\left(\\frac{119}{70} - 1\\right) \\times 100 = 70.0\\%$$
$$\\text{Gap} = 70.0 - 15.0 = +55.0 \\text{ pp}$$

Threshold is $+15$ pp. **F3 trips. Penalty 15.**

$$\\text{Inventory growth} = \\left(\\frac{97}{90} - 1\\right) \\times 100 = 7.78\\%$$
$$\\text{Gap} = 7.78 - 15.0 = -7.2 \\text{ pp}$$

**F4 does not trip. Penalty 0.** Note this. The manipulation here is in receivables, not inventory, and a scorecard that only looked at inventory would have passed the company.

**Step 7 — One-off income.**

$$\\frac{18}{69} \\times 100 = 26.1\\%$$

Threshold is $20\\%$. **F5 trips. Penalty 12.**

**Step 8 — Related-party share.**

$$\\frac{55}{460} \\times 100 = 11.96\\%$$

Threshold is $15\\%$. **F6 does not trip. Penalty 0.** Again, note it: BDT 55 crore of sales to entities the sponsor controls is not comfortable, but the rule as written does not fire. A rule you have written down and do not override is worth more than a rule you bend, even when bending it would be correct here.

**Step 9 — Effective tax rate.**

$$ETR = \\frac{9}{69} \\times 100 = 13.04\\%$$
$$\\text{Gap} = 22.5 - 13.04 = 9.46 \\text{ pp}$$

Threshold is $8$ pp. **F7 trips. Penalty 8.**

**Step 10 — Revaluation route.** Routed through profit or loss. **F8 trips. Penalty 5.**

---

**Step 11 — Total.**

| Flag | Observed | Tripped | Penalty |
|---|---|---|---|
| F1 Cash conversion | 0.13× | Yes | 20 |
| F2 Accrual ratio | +10.4% | Yes | 18 |
| F3 Receivable gap | +55.0 pp | Yes | 15 |
| F4 Inventory gap | −7.2 pp | No | 0 |
| F5 One-off share | 26.1% | Yes | 12 |
| F6 Related-party | 12.0% | No | 0 |
| F7 ETR gap | 9.46 pp | Yes | 8 |
| F8 Revaluation in P&L | Yes | Yes | 5 |
| | | **Total** | **78** |

$$\\text{EQ Score} = 100 - 78 = \\mathbf{22}$$

$$22 < 50 \\quad\\Rightarrow\\quad \\textbf{LOW QUALITY}$$

**And for Company A, run identically:** cash conversion 1.30×, accrual ratio −3.6%, Sloan −3.6%, receivable gap −5.0 pp, inventory gap +6.8 pp, one-off 2.6%, related-party 4.3%, ETR 23.1% against a 22.5% statutory rate (a gap of −0.6 pp, i.e. A pays *more* than statutory), no revaluation in P&L. **Zero flags. EQ Score 100. HIGH.**

---

**Interpretation.** Both companies reported EPS 6.00. One scored 100 and the other 22.

**Do not read the score as a probability of fraud.** It is not. It is a measure of how much of the reported profit you are being asked to take on trust. Company A is asking you to trust almost nothing — the cash arrived. Company B is asking you to trust a customer list, a valuer's opinion on a piece of land, and a tax position. Those may all hold. But you are being paid the same P/E of 12.0 to hold either one, and **you are not being compensated for the difference.**

**The action that follows is not "sell B."** It is: apply a discount rate to B's earnings that reflects what you actually know, which usually means valuing B on cash flow rather than on EPS. On CFO of BDT 8 crore against a market capitalisation of BDT 720 crore, B trades at 90× cash. That is the number the P/E of 12 was hiding.`,
      bn: `আমরা **কোম্পানি B**-কে পূর্ণাঙ্গভাবে স্কোর করব। প্রতিটি ইনপুট উদাহরণ ব্লকের সারণি থেকে নেওয়া। সব আর্থিক সংখ্যা কোটি টাকায়।

**প্রদত্ত:** নিট মুনাফা ৬০, CFO ৮, গড় মোট সম্পদ ৫০০, রাজস্ব ৪০০ → ৪৬০, প্রাপ্য ৭০ → ১১৯, মজুদ ৯০ → ৯৭, প্রদেয় ৮০ → ৮২, অবচয় ২০, PBT ৬৯, কর ৯, এককালীন আয় ১৮, সম্পর্কিত-পক্ষের রাজস্ব ৫৫, পুনর্মূল্যায়ন লাভ-ক্ষতির মধ্য দিয়ে পাঠানো = হ্যাঁ, বিধিবদ্ধ হার ২২.৫%।

---

**ধাপ ১ — অ্যাক্রুয়াল।**

$$\\text{অ্যাক্রুয়াল} = 60 - 8 = ৫২ \\text{ কোটি টাকা}$$

**ধাপ ২ — অ্যাক্রুয়াল অনুপাত।**

$$\\frac{52}{500} \\times 100 = 10.4\\%$$

সীমা $+5\\%$। **F2 ওঠে। জরিমানা ১৮।**

**ধাপ ৩ — নগদ রূপান্তর।**

$$\\frac{8}{60} = 0.13\\times$$

সীমা $0.80$। **F1 ওঠে। জরিমানা ২০।**

**ধাপ ৪ — Sloan অ্যাক্রুয়াল।** প্রথমে অ-নগদ কার্যকরী মূলধনের পরিবর্তন:

$$\\Delta\\text{NWC} = (119 - 70) + (97 - 90) - (82 - 80) = 49 + 7 - 2 = 54$$

$$\\text{Sloan অ্যাক্রুয়াল} = \\frac{54 - 20}{500} \\times 100 = \\frac{34}{500} \\times 100 = 6.8\\%$$

**ধাপ ৫ — দুটি অ্যাক্রুয়াল পরিমাপের সমন্বয়।**

$$10.4\\% - 6.8\\% = 3.6\\% \\quad\\Rightarrow\\quad 0.036 \\times 500 = ১৮ \\text{ কোটি টাকা}$$

এটি ঠিক পুনর্মূল্যায়ন লাভটি। **দুটি পরিমাপের মধ্যকার ফাঁক নোট না পড়েই লুকানো অ্যাক্রুয়ালটি খুঁজে দিল।** এই অধ্যায়ের একক সবচেয়ে কার্যকর পাটিগণিত এটি।

**ধাপ ৬ — প্রবৃদ্ধির ফাঁক।**

$$\\text{রাজস্ব প্রবৃদ্ধি} = \\left(\\frac{460}{400} - 1\\right) \\times 100 = 15.0\\%$$
$$\\text{প্রাপ্য প্রবৃদ্ধি} = \\left(\\frac{119}{70} - 1\\right) \\times 100 = 70.0\\%$$
$$\\text{ফাঁক} = 70.0 - 15.0 = +55.0 \\text{ pp}$$

সীমা $+15$ pp। **F3 ওঠে। জরিমানা ১৫।**

$$\\text{মজুদ প্রবৃদ্ধি} = \\left(\\frac{97}{90} - 1\\right) \\times 100 = 7.78\\%$$
$$\\text{ফাঁক} = 7.78 - 15.0 = -7.2 \\text{ pp}$$

**F4 ওঠে না। জরিমানা ০।** এটি লক্ষ করুন। এখানে কারসাজি প্রাপ্যে, মজুদে নয়, এবং যে স্কোরকার্ড কেবল মজুদ দেখত সেটি কোম্পানিটিকে পাস করিয়ে দিত।

**ধাপ ৭ — এককালীন আয়।**

$$\\frac{18}{69} \\times 100 = 26.1\\%$$

সীমা $20\\%$। **F5 ওঠে। জরিমানা ১২।**

**ধাপ ৮ — সম্পর্কিত-পক্ষের অংশ।**

$$\\frac{55}{460} \\times 100 = 11.96\\%$$

সীমা $15\\%$। **F6 ওঠে না। জরিমানা ০।** আবারও লক্ষ করুন: উদ্যোক্তার নিয়ন্ত্রণাধীন প্রতিষ্ঠানের কাছে ৫৫ কোটি টাকার বিক্রয় স্বস্তিদায়ক নয়, কিন্তু লিখিত নিয়মটি জ্বলছে না। যে নিয়ম আপনি লিখে রেখেছেন এবং অগ্রাহ্য করেন না, তা এমন নিয়মের চেয়ে বেশি মূল্যবান যা আপনি বাঁকিয়ে ফেলেন — এমনকি এখানে বাঁকানোটা সঠিক হলেও।

**ধাপ ৯ — কার্যকর করহার।**

$$ETR = \\frac{9}{69} \\times 100 = 13.04\\%$$
$$\\text{ফাঁক} = 22.5 - 13.04 = 9.46 \\text{ pp}$$

সীমা $8$ pp। **F7 ওঠে। জরিমানা ৮।**

**ধাপ ১০ — পুনর্মূল্যায়নের পথ।** লাভ-ক্ষতির মধ্য দিয়ে পাঠানো। **F8 ওঠে। জরিমানা ৫।**

---

**ধাপ ১১ — মোট।**

| পতাকা | পর্যবেক্ষিত | উঠেছে | জরিমানা |
|---|---|---|---|
| F1 নগদ রূপান্তর | ০.১৩× | হ্যাঁ | ২০ |
| F2 অ্যাক্রুয়াল অনুপাত | +১০.৪% | হ্যাঁ | ১৮ |
| F3 প্রাপ্যের ফাঁক | +৫৫.০ pp | হ্যাঁ | ১৫ |
| F4 মজুদের ফাঁক | −৭.২ pp | না | ০ |
| F5 এককালীন অংশ | ২৬.১% | হ্যাঁ | ১২ |
| F6 সম্পর্কিত-পক্ষ | ১২.০% | না | ০ |
| F7 ETR ফাঁক | ৯.৪৬ pp | হ্যাঁ | ৮ |
| F8 লাভ-ক্ষতিতে পুনর্মূল্যায়ন | হ্যাঁ | হ্যাঁ | ৫ |
| | | **মোট** | **৭৮** |

$$\\text{EQ Score} = 100 - 78 = \\mathbf{22}$$

$$22 < 50 \\quad\\Rightarrow\\quad \\textbf{নিম্ন গুণমান}$$

**আর কোম্পানি A-এর জন্য একইভাবে চালান:** নগদ রূপান্তর ১.৩০×, অ্যাক্রুয়াল অনুপাত −৩.৬%, Sloan −৩.৬%, প্রাপ্যের ফাঁক −৫.০ pp, মজুদের ফাঁক +৬.৮ pp, এককালীন ২.৬%, সম্পর্কিত-পক্ষ ৪.৩%, ২২.৫% বিধিবদ্ধ হারের বিপরীতে ETR ২৩.১% (ফাঁক −০.৬ pp, অর্থাৎ A বিধিবদ্ধ হারের *চেয়ে বেশি* কর দেয়), লাভ-ক্ষতিতে কোনো পুনর্মূল্যায়ন নেই। **শূন্য পতাকা। EQ Score ১০০। HIGH।**

---

**ব্যাখ্যা।** দুটি কোম্পানিই EPS ৬.০০ রিপোর্ট করেছে। একটি পেল ১০০ আর অন্যটি ২২।

**স্কোরকে প্রতারণার সম্ভাবনা হিসেবে পড়বেন না।** এটি তা নয়। এটি পরিমাপ করে রিপোর্টকৃত মুনাফার কতটা আপনাকে বিশ্বাসের ওপর নিতে বলা হচ্ছে। কোম্পানি A আপনাকে প্রায় কিছুই বিশ্বাস করতে বলছে না — নগদ এসে গেছে। কোম্পানি B আপনাকে বিশ্বাস করতে বলছে একটি খদ্দের-তালিকা, এক টুকরো জমি নিয়ে একজন মূল্যায়নকারীর মতামত, এবং একটি কর অবস্থান। এগুলো সবই টিকে যেতে পারে। কিন্তু দুটির যেকোনোটি ধরে রাখতে আপনাকে একই ১২.০ P/E দেওয়া হচ্ছে, এবং **পার্থক্যের জন্য আপনাকে কোনো ক্ষতিপূরণ দেওয়া হচ্ছে না।**

**এরপরের পদক্ষেপ "B বিক্রি করুন" নয়।** পদক্ষেপ হলো: B-এর আয়ের ওপর এমন একটি বাট্টার হার প্রয়োগ করুন যা আপনি প্রকৃতপক্ষে যা জানেন তা প্রতিফলিত করে — যার সাধারণ অর্থ হলো B-কে EPS নয়, নগদ প্রবাহের ভিত্তিতে মূল্যায়ন করা। ৭২০ কোটি টাকার বাজার মূলধনের বিপরীতে ৮ কোটি টাকার CFO-তে B লেনদেন হচ্ছে নগদের ৯০ গুণে। ১২-এর P/E যে সংখ্যাটি আড়াল করছিল, এটিই সেটি।`,
    },

    excel: {
      en: `\`\`\`
                                      Company A    Company B
A4:  Net Profit                  B4: 60      C4: 60
A5:  Cash Flow from Operations   B5: 78      C5: 8
A6:  Avg Total Assets            B6: 500     C6: 500
A7:  Revenue (current)           B7: 460     C7: 460
A8:  Revenue (prior)             B8: 400     C8: 400
A9:  Receivables (current)       B9: 66      C9: 119
A10: Receivables (prior)         B10: 60     C10: 70
A11: Inventory (current)         B11: 134    C11: 97
A12: Inventory (prior)           B12: 110    C12: 90
A13: Payables (current)          B13: 86     C13: 82
A14: Payables (prior)            B14: 72     C14: 80
A15: Depreciation & Amortisation B15: 34     C15: 20
A16: Profit Before Tax           B16: 78     C16: 69
A17: Tax Expense                 B17: 18     C17: 9
A18: One-off Income              B18: 2      C18: 18
A19: Related-Party Revenue       B19: 20     C19: 55
A20: Revaluation in P&L (1/0)    B20: 0      C20: 1
A21: Shares (crore)              B21: 10     C21: 10
A22: Statutory Tax Rate (%)      B22: 22.5   C22: 22.5

A25: EPS (BDT)                   B25: =B4/B21
A26: Accruals                    B26: =B4-B5
A27: Accrual Ratio (%)           B27: =B26/B6*100
A28: Sloan Accrual Ratio (%)     B28: =((B9-B10)+(B11-B12)-(B13-B14)-B15)/B6*100
A29: Cash Conversion             B29: =B5/B4
A30: Revenue Growth (%)          B30: =(B7/B8-1)*100
A31: Receivable Growth (%)       B31: =(B9/B10-1)*100
A32: Inventory Growth (%)        B32: =(B11/B12-1)*100
A33: DSO (days)                  B33: =B9/B7*365
A34: Effective Tax Rate (%)      B34: =B17/B16*100
A35: One-off Share of PBT (%)    B35: =B18/B16*100
A36: Related-Party Share (%)     B36: =B19/B7*100

                                              Weight
A39: F1 Cash conversion < 0.80   B39: =IF(B29<0.8,$D$39,0)      D39: 20
A40: F2 Accrual ratio > 5%       B40: =IF(B27>5,$D$40,0)        D40: 18
A41: F3 Recv gap > 15pp          B41: =IF(B31-B30>15,$D$41,0)   D41: 15
A42: F4 Inv gap > 15pp           B42: =IF(B32-B30>15,$D$42,0)   D42: 12
A43: F5 One-off > 20% PBT        B43: =IF(B35>20,$D$43,0)       D43: 12
A44: F6 Related-party > 15%      B44: =IF(B36>15,$D$44,0)       D44: 10
A45: F7 ETR gap > 8pp            B45: =IF(B22-B34>8,$D$45,0)    D45: 8
A46: F8 Revaluation in P&L       B46: =IF(B20=1,$D$46,0)        D46: 5

A48: TOTAL PENALTY               B48: =SUM(B39:B46)
A49: EARNINGS QUALITY SCORE      B49: =100-B48
A50: VERDICT                     B50: =IF(B49>=75,"HIGH",IF(B49>=50,"MEDIUM","LOW"))
\`\`\`

Column C repeats every formula with C-references. Row 25 will read **6.00 in both columns.** Row 49 will read **100 and 22.** Print the sheet and put those two rows next to each other. That single visual is the chapter.

**Three things to do with this sheet before you trust it.**

First, **change the thresholds and watch the score move.** If moving F2 from 5% to 7% changes a verdict from LOW to MEDIUM, your verdict was never about the company. It was about your threshold. Record which companies are threshold-sensitive and treat them as unresolved rather than as passes.

Second, **run it on the same company for five consecutive years.** A single year's score is nearly worthless. A score that falls from 88 to 70 to 45 over three years is the most valuable output this sheet produces, and it is visible a year or more before the market reacts.

Third, **fill the inputs from the audited annual report PDF, never from a broker's summary sheet.** Rows 18, 19 and 20 in particular exist only in the notes. A summary sheet will not have them, which is precisely why the score is worth computing.`,
      bn: `\`\`\`
                                      কোম্পানি A   কোম্পানি B
A4:  নিট মুনাফা                  B4: 60      C4: 60
A5:  পরিচালন নগদ প্রবাহ           B5: 78      C5: 8
A6:  গড় মোট সম্পদ                B6: 500     C6: 500
A7:  রাজস্ব (চলতি)               B7: 460     C7: 460
A8:  রাজস্ব (পূর্ববর্তী)          B8: 400     C8: 400
A9:  প্রাপ্য (চলতি)               B9: 66      C9: 119
A10: প্রাপ্য (পূর্ববর্তী)         B10: 60     C10: 70
A11: মজুদ (চলতি)                 B11: 134    C11: 97
A12: মজুদ (পূর্ববর্তী)            B12: 110    C12: 90
A13: প্রদেয় (চলতি)               B13: 86     C13: 82
A14: প্রদেয় (পূর্ববর্তী)          B14: 72     C14: 80
A15: অবচয় ও অ্যামর্টাইজেশন       B15: 34     C15: 20
A16: করপূর্ব মুনাফা               B16: 78     C16: 69
A17: কর ব্যয়                     B17: 18     C17: 9
A18: এককালীন আয়                 B18: 2      C18: 18
A19: সম্পর্কিত-পক্ষের রাজস্ব       B19: 20     C19: 55
A20: লাভ-ক্ষতিতে পুনর্মূল্যায়ন (১/০) B20: 0    C20: 1
A21: শেয়ার (কোটি)                B21: 10     C21: 10
A22: বিধিবদ্ধ করহার (%)           B22: 22.5   C22: 22.5

A25: EPS (টাকা)                  B25: =B4/B21
A26: অ্যাক্রুয়াল                  B26: =B4-B5
A27: অ্যাক্রুয়াল অনুপাত (%)        B27: =B26/B6*100
A28: Sloan অ্যাক্রুয়াল অনুপাত (%)  B28: =((B9-B10)+(B11-B12)-(B13-B14)-B15)/B6*100
A29: নগদ রূপান্তর                 B29: =B5/B4
A30: রাজস্ব প্রবৃদ্ধি (%)          B30: =(B7/B8-1)*100
A31: প্রাপ্য প্রবৃদ্ধি (%)          B31: =(B9/B10-1)*100
A32: মজুদ প্রবৃদ্ধি (%)            B32: =(B11/B12-1)*100
A33: DSO (দিন)                   B33: =B9/B7*365
A34: কার্যকর করহার (%)            B34: =B17/B16*100
A35: PBT-তে এককালীনের অংশ (%)     B35: =B18/B16*100
A36: সম্পর্কিত-পক্ষের অংশ (%)      B36: =B19/B7*100

                                               ওজন
A39: F1 নগদ রূপান্তর < ০.৮০      B39: =IF(B29<0.8,$D$39,0)      D39: 20
A40: F2 অ্যাক্রুয়াল অনুপাত > ৫%   B40: =IF(B27>5,$D$40,0)        D40: 18
A41: F3 প্রাপ্যের ফাঁক > ১৫pp     B41: =IF(B31-B30>15,$D$41,0)   D41: 15
A42: F4 মজুদের ফাঁক > ১৫pp       B42: =IF(B32-B30>15,$D$42,0)   D42: 12
A43: F5 এককালীন > PBT-র ২০%      B43: =IF(B35>20,$D$43,0)       D43: 12
A44: F6 সম্পর্কিত-পক্ষ > ১৫%      B44: =IF(B36>15,$D$44,0)       D44: 10
A45: F7 ETR ফাঁক > ৮pp           B45: =IF(B22-B34>8,$D$45,0)    D45: 8
A46: F8 লাভ-ক্ষতিতে পুনর্মূল্যায়ন  B46: =IF(B20=1,$D$46,0)        D46: 5

A48: মোট জরিমানা                 B48: =SUM(B39:B46)
A49: EARNINGS QUALITY SCORE      B49: =100-B48
A50: রায়                         B50: =IF(B49>=75,"HIGH",IF(B49>=50,"MEDIUM","LOW"))
\`\`\`

C কলাম প্রতিটি সূত্র C-রেফারেন্স দিয়ে পুনরাবৃত্তি করে। ২৫ নং সারি **দুই কলামেই ৬.০০** দেখাবে। ৪৯ নং সারি দেখাবে **১০০ ও ২২**। শিটটি ছাপিয়ে ঐ দুটি সারি পাশাপাশি রাখুন। ঐ একটি দৃশ্যই এই অধ্যায়।

**এই শিটে ভরসা করার আগে তিনটি কাজ করুন।**

প্রথমত, **সীমাগুলো পাল্টান এবং স্কোরের নড়াচড়া দেখুন।** F2-কে ৫% থেকে ৭%-এ সরালে যদি রায় LOW থেকে MEDIUM হয়ে যায়, তবে আপনার রায় কখনোই কোম্পানি নিয়ে ছিল না। ছিল আপনার সীমা নিয়ে। কোন কোম্পানিগুলো সীমা-সংবেদনশীল তা লিখে রাখুন এবং সেগুলোকে পাস নয়, অমীমাংসিত হিসেবে গণ্য করুন।

দ্বিতীয়ত, **একই কোম্পানির ওপর টানা পাঁচ বছর চালান।** এক বছরের স্কোর প্রায় মূল্যহীন। তিন বছরে ৮৮ থেকে ৭০, তারপর ৪৫-এ নেমে যাওয়া স্কোরই এই শিটের সবচেয়ে মূল্যবান ফলাফল, এবং বাজার প্রতিক্রিয়া দেখানোর এক বছর বা তারও আগে তা দৃশ্যমান।

তৃতীয়ত, **ইনপুট ভরুন নিরীক্ষিত বার্ষিক প্রতিবেদনের PDF থেকে, কখনোই ব্রোকারের সারসংক্ষেপ শিট থেকে নয়।** বিশেষত ১৮, ১৯ ও ২০ নং সারি কেবল নোটেই থাকে। সারসংক্ষেপ শিটে এগুলো থাকবে না, আর ঠিক এ কারণেই স্কোরটি গণনা করার মতো।`,
    },

    python: {
      en: `\`\`\`python
"""
Chapter 13 - Earnings Quality scoring engine.
Educational. All figures in BDT crore.
"""
from dataclasses import dataclass
from typing import List


@dataclass
class Flag:
    """One binary red flag with a penalty weight."""
    code: str
    label: str
    weight: float
    tripped: bool
    observed: str


@dataclass
class EarningsQuality:
    """One company-year. All monetary inputs in BDT crore."""
    name: str
    net_profit: float
    cfo: float
    avg_total_assets: float
    revenue: float
    revenue_prior: float
    receivables: float
    receivables_prior: float
    inventory: float
    inventory_prior: float
    payables: float
    payables_prior: float
    depreciation: float
    pbt: float
    tax: float
    one_off_income: float
    related_party_revenue: float
    revaluation_routed_to_pl: bool
    statutory_tax_rate: float = 22.5

    # --- primitive measures ---------------------------------------------
    @property
    def accruals(self) -> float:
        """Cash-flow-statement accruals: the wedge between profit and cash."""
        return self.net_profit - self.cfo

    @property
    def accrual_ratio(self) -> float:
        return self.accruals / self.avg_total_assets * 100

    @property
    def cash_conversion(self) -> float:
        return self.cfo / self.net_profit

    @property
    def sloan_accrual(self) -> float:
        """Balance-sheet accruals: (change in non-cash WC - depreciation)/assets."""
        d_nwc = ((self.receivables - self.receivables_prior)
                 + (self.inventory - self.inventory_prior)
                 - (self.payables - self.payables_prior))
        return (d_nwc - self.depreciation) / self.avg_total_assets * 100

    @property
    def revenue_growth(self) -> float:
        return (self.revenue / self.revenue_prior - 1) * 100

    @property
    def receivable_growth(self) -> float:
        return (self.receivables / self.receivables_prior - 1) * 100

    @property
    def inventory_growth(self) -> float:
        return (self.inventory / self.inventory_prior - 1) * 100

    @property
    def dso(self) -> float:
        return self.receivables / self.revenue * 365

    @property
    def effective_tax_rate(self) -> float:
        return self.tax / self.pbt * 100

    @property
    def one_off_share(self) -> float:
        return self.one_off_income / self.pbt * 100

    @property
    def related_party_share(self) -> float:
        return self.related_party_revenue / self.revenue * 100

    # --- weighted flag set ----------------------------------------------
    def flags(self) -> List[Flag]:
        return [
            Flag("F1", "Cash conversion CFO/NP below 0.80", 20,
                 self.cash_conversion < 0.80,
                 f"{self.cash_conversion:.2f}x"),
            Flag("F2", "Accrual ratio above 5% of avg total assets", 18,
                 self.accrual_ratio > 5.0,
                 f"{self.accrual_ratio:+.1f}%"),
            Flag("F3", "Receivable growth exceeds revenue growth by >15pp", 15,
                 (self.receivable_growth - self.revenue_growth) > 15.0,
                 f"{self.receivable_growth - self.revenue_growth:+.1f}pp"),
            Flag("F4", "Inventory growth exceeds revenue growth by >15pp", 12,
                 (self.inventory_growth - self.revenue_growth) > 15.0,
                 f"{self.inventory_growth - self.revenue_growth:+.1f}pp"),
            Flag("F5", "One-off / non-operating income above 20% of PBT", 12,
                 self.one_off_share > 20.0,
                 f"{self.one_off_share:.1f}%"),
            Flag("F6", "Related-party revenue above 15% of revenue", 10,
                 self.related_party_share > 15.0,
                 f"{self.related_party_share:.1f}%"),
            Flag("F7", "Effective tax rate below statutory by >8pp", 8,
                 (self.statutory_tax_rate - self.effective_tax_rate) > 8.0,
                 f"{self.effective_tax_rate:.1f}% vs {self.statutory_tax_rate:.1f}%"),
            Flag("F8", "Revaluation gain routed through profit or loss", 5,
                 self.revaluation_routed_to_pl,
                 "Yes" if self.revaluation_routed_to_pl else "No"),
        ]

    def penalty(self) -> float:
        return sum(f.weight for f in self.flags() if f.tripped)

    def score(self) -> float:
        return 100.0 - self.penalty()

    def verdict(self) -> str:
        s = self.score()
        if s >= 75:
            return "HIGH"
        if s >= 50:
            return "MEDIUM"
        return "LOW"

    def report(self) -> None:
        print(f"=== {self.name} ===")
        print(f"  Net profit           : {self.net_profit:,.0f} cr")
        print(f"  CFO                  : {self.cfo:,.0f} cr")
        print(f"  Accruals (NP - CFO)  : {self.accruals:+,.0f} cr")
        print(f"  Accrual ratio        : {self.accrual_ratio:+.1f}%")
        print(f"  Sloan accrual ratio  : {self.sloan_accrual:+.1f}%")
        print(f"  Cash conversion      : {self.cash_conversion:.2f}x")
        print(f"  DSO                  : {self.dso:.1f} days")
        print("  Flags:")
        for f in self.flags():
            mark = "TRIPPED" if f.tripped else "clear  "
            pen = f"-{f.weight:.0f}" if f.tripped else "  0"
            print(f"    {f.code} {mark} {pen:>4}  {f.label} [{f.observed}]")
        print(f"  Penalty              : {self.penalty():.0f}")
        print(f"  EARNINGS QUALITY     : {self.score():.0f}/100  -> {self.verdict()}")
        print()


if __name__ == "__main__":
    alpha = EarningsQuality(
        name="Company A - pharma archetype",
        net_profit=60, cfo=78, avg_total_assets=500,
        revenue=460, revenue_prior=400,
        receivables=66, receivables_prior=60,
        inventory=134, inventory_prior=110,
        payables=86, payables_prior=72,
        depreciation=34,
        pbt=78, tax=18,
        one_off_income=2, related_party_revenue=20,
        revaluation_routed_to_pl=False,
    )

    beta = EarningsQuality(
        name="Company B - textile archetype",
        net_profit=60, cfo=8, avg_total_assets=500,
        revenue=460, revenue_prior=400,
        receivables=119, receivables_prior=70,
        inventory=97, inventory_prior=90,
        payables=82, payables_prior=80,
        depreciation=20,
        pbt=69, tax=9,
        one_off_income=18, related_party_revenue=55,
        revaluation_routed_to_pl=True,
    )

    shares = 10.0  # crore shares, both companies
    for co in (alpha, beta):
        print(f"{co.name}: EPS = BDT {co.net_profit / shares:.2f}")
    print()

    alpha.report()
    beta.report()

    gap = beta.accrual_ratio - beta.sloan_accrual
    print(f"Company B: cash-flow accrual ratio less Sloan ratio = {gap:.1f}%")
    print(f"That gap x avg assets = BDT {gap / 100 * beta.avg_total_assets:.0f} cr")
    print("It equals the revaluation gain. Non-working-capital accruals hide there.")
\`\`\`

**Expected output:**

\`\`\`
Company A - pharma archetype: EPS = BDT 6.00
Company B - textile archetype: EPS = BDT 6.00

=== Company A - pharma archetype ===
  Net profit           : 60 cr
  CFO                  : 78 cr
  Accruals (NP - CFO)  : -18 cr
  Accrual ratio        : -3.6%
  Sloan accrual ratio  : -3.6%
  Cash conversion      : 1.30x
  DSO                  : 52.4 days
  Flags:
    F1 clear      0  Cash conversion CFO/NP below 0.80 [1.30x]
    F2 clear      0  Accrual ratio above 5% of avg total assets [-3.6%]
    F3 clear      0  Receivable growth exceeds revenue growth by >15pp [-5.0pp]
    F4 clear      0  Inventory growth exceeds revenue growth by >15pp [+6.8pp]
    F5 clear      0  One-off / non-operating income above 20% of PBT [2.6%]
    F6 clear      0  Related-party revenue above 15% of revenue [4.3%]
    F7 clear      0  Effective tax rate below statutory by >8pp [23.1% vs 22.5%]
    F8 clear      0  Revaluation gain routed through profit or loss [No]
  Penalty              : 0
  EARNINGS QUALITY     : 100/100  -> HIGH

=== Company B - textile archetype ===
  Net profit           : 60 cr
  CFO                  : 8 cr
  Accruals (NP - CFO)  : +52 cr
  Accrual ratio        : +10.4%
  Sloan accrual ratio  : +6.8%
  Cash conversion      : 0.13x
  DSO                  : 94.4 days
  Flags:
    F1 TRIPPED  -20  Cash conversion CFO/NP below 0.80 [0.13x]
    F2 TRIPPED  -18  Accrual ratio above 5% of avg total assets [+10.4%]
    F3 TRIPPED  -15  Receivable growth exceeds revenue growth by >15pp [+55.0pp]
    F4 clear      0  Inventory growth exceeds revenue growth by >15pp [-7.2pp]
    F5 TRIPPED  -12  One-off / non-operating income above 20% of PBT [26.1%]
    F6 clear      0  Related-party revenue above 15% of revenue [12.0%]
    F7 TRIPPED   -8  Effective tax rate below statutory by >8pp [13.0% vs 22.5%]
    F8 TRIPPED   -5  Revaluation gain routed through profit or loss [Yes]
  Penalty              : 78
  EARNINGS QUALITY     : 22/100  -> LOW

Company B: cash-flow accrual ratio less Sloan ratio = 3.6%
That gap x avg assets = BDT 18 cr
It equals the revaluation gain. Non-working-capital accruals hide there.
\`\`\`

**Note what the last three lines do.** The class never reads the revaluation note. It computes two accrual measures from ordinary financial-statement lines, subtracts one from the other, and recovers BDT 18 crore. **Arithmetic found the disclosure.** Extend the class with a five-year history and the same subtraction will locate capitalised costs, deferred tax releases, and fair-value gains in any company you point it at.`,
      bn: `\`\`\`python
"""
অধ্যায় ১৩ — Earnings Quality স্কোরিং ইঞ্জিন।
শিক্ষামূলক। সব সংখ্যা কোটি টাকায়।
"""
from dataclasses import dataclass
from typing import List


@dataclass
class Flag:
    """জরিমানার ওজনসহ একটি দ্বিমিক লাল পতাকা।"""
    code: str
    label: str
    weight: float
    tripped: bool
    observed: str


@dataclass
class EarningsQuality:
    """একটি কোম্পানি-বছর। সব আর্থিক ইনপুট কোটি টাকায়।"""
    name: str
    net_profit: float
    cfo: float
    avg_total_assets: float
    revenue: float
    revenue_prior: float
    receivables: float
    receivables_prior: float
    inventory: float
    inventory_prior: float
    payables: float
    payables_prior: float
    depreciation: float
    pbt: float
    tax: float
    one_off_income: float
    related_party_revenue: float
    revaluation_routed_to_pl: bool
    statutory_tax_rate: float = 22.5

    # --- মৌলিক পরিমাপ ---------------------------------------------------
    @property
    def accruals(self) -> float:
        """নগদ প্রবাহ বিবরণীভিত্তিক অ্যাক্রুয়াল: মুনাফা ও নগদের মধ্যবর্তী ফাঁক।"""
        return self.net_profit - self.cfo

    @property
    def accrual_ratio(self) -> float:
        return self.accruals / self.avg_total_assets * 100

    @property
    def cash_conversion(self) -> float:
        return self.cfo / self.net_profit

    @property
    def sloan_accrual(self) -> float:
        """স্থিতিপত্রভিত্তিক অ্যাক্রুয়াল: (অ-নগদ কার্যকরী মূলধনের পরিবর্তন − অবচয়)/সম্পদ।"""
        d_nwc = ((self.receivables - self.receivables_prior)
                 + (self.inventory - self.inventory_prior)
                 - (self.payables - self.payables_prior))
        return (d_nwc - self.depreciation) / self.avg_total_assets * 100

    @property
    def revenue_growth(self) -> float:
        return (self.revenue / self.revenue_prior - 1) * 100

    @property
    def receivable_growth(self) -> float:
        return (self.receivables / self.receivables_prior - 1) * 100

    @property
    def inventory_growth(self) -> float:
        return (self.inventory / self.inventory_prior - 1) * 100

    @property
    def dso(self) -> float:
        return self.receivables / self.revenue * 365

    @property
    def effective_tax_rate(self) -> float:
        return self.tax / self.pbt * 100

    @property
    def one_off_share(self) -> float:
        return self.one_off_income / self.pbt * 100

    @property
    def related_party_share(self) -> float:
        return self.related_party_revenue / self.revenue * 100

    # --- ভারিত পতাকার সেট -----------------------------------------------
    def flags(self) -> List[Flag]:
        return [
            Flag("F1", "Cash conversion CFO/NP below 0.80", 20,
                 self.cash_conversion < 0.80,
                 f"{self.cash_conversion:.2f}x"),
            Flag("F2", "Accrual ratio above 5% of avg total assets", 18,
                 self.accrual_ratio > 5.0,
                 f"{self.accrual_ratio:+.1f}%"),
            Flag("F3", "Receivable growth exceeds revenue growth by >15pp", 15,
                 (self.receivable_growth - self.revenue_growth) > 15.0,
                 f"{self.receivable_growth - self.revenue_growth:+.1f}pp"),
            Flag("F4", "Inventory growth exceeds revenue growth by >15pp", 12,
                 (self.inventory_growth - self.revenue_growth) > 15.0,
                 f"{self.inventory_growth - self.revenue_growth:+.1f}pp"),
            Flag("F5", "One-off / non-operating income above 20% of PBT", 12,
                 self.one_off_share > 20.0,
                 f"{self.one_off_share:.1f}%"),
            Flag("F6", "Related-party revenue above 15% of revenue", 10,
                 self.related_party_share > 15.0,
                 f"{self.related_party_share:.1f}%"),
            Flag("F7", "Effective tax rate below statutory by >8pp", 8,
                 (self.statutory_tax_rate - self.effective_tax_rate) > 8.0,
                 f"{self.effective_tax_rate:.1f}% vs {self.statutory_tax_rate:.1f}%"),
            Flag("F8", "Revaluation gain routed through profit or loss", 5,
                 self.revaluation_routed_to_pl,
                 "Yes" if self.revaluation_routed_to_pl else "No"),
        ]

    def penalty(self) -> float:
        return sum(f.weight for f in self.flags() if f.tripped)

    def score(self) -> float:
        return 100.0 - self.penalty()

    def verdict(self) -> str:
        s = self.score()
        if s >= 75:
            return "HIGH"
        if s >= 50:
            return "MEDIUM"
        return "LOW"

    def report(self) -> None:
        print(f"=== {self.name} ===")
        print(f"  Net profit           : {self.net_profit:,.0f} cr")
        print(f"  CFO                  : {self.cfo:,.0f} cr")
        print(f"  Accruals (NP - CFO)  : {self.accruals:+,.0f} cr")
        print(f"  Accrual ratio        : {self.accrual_ratio:+.1f}%")
        print(f"  Sloan accrual ratio  : {self.sloan_accrual:+.1f}%")
        print(f"  Cash conversion      : {self.cash_conversion:.2f}x")
        print(f"  DSO                  : {self.dso:.1f} days")
        print("  Flags:")
        for f in self.flags():
            mark = "TRIPPED" if f.tripped else "clear  "
            pen = f"-{f.weight:.0f}" if f.tripped else "  0"
            print(f"    {f.code} {mark} {pen:>4}  {f.label} [{f.observed}]")
        print(f"  Penalty              : {self.penalty():.0f}")
        print(f"  EARNINGS QUALITY     : {self.score():.0f}/100  -> {self.verdict()}")
        print()


if __name__ == "__main__":
    alpha = EarningsQuality(
        name="Company A - pharma archetype",
        net_profit=60, cfo=78, avg_total_assets=500,
        revenue=460, revenue_prior=400,
        receivables=66, receivables_prior=60,
        inventory=134, inventory_prior=110,
        payables=86, payables_prior=72,
        depreciation=34,
        pbt=78, tax=18,
        one_off_income=2, related_party_revenue=20,
        revaluation_routed_to_pl=False,
    )

    beta = EarningsQuality(
        name="Company B - textile archetype",
        net_profit=60, cfo=8, avg_total_assets=500,
        revenue=460, revenue_prior=400,
        receivables=119, receivables_prior=70,
        inventory=97, inventory_prior=90,
        payables=82, payables_prior=80,
        depreciation=20,
        pbt=69, tax=9,
        one_off_income=18, related_party_revenue=55,
        revaluation_routed_to_pl=True,
    )

    shares = 10.0  # crore shares, both companies
    for co in (alpha, beta):
        print(f"{co.name}: EPS = BDT {co.net_profit / shares:.2f}")
    print()

    alpha.report()
    beta.report()

    gap = beta.accrual_ratio - beta.sloan_accrual
    print(f"Company B: cash-flow accrual ratio less Sloan ratio = {gap:.1f}%")
    print(f"That gap x avg assets = BDT {gap / 100 * beta.avg_total_assets:.0f} cr")
    print("It equals the revaluation gain. Non-working-capital accruals hide there.")
\`\`\`

**প্রত্যাশিত ফলাফল:**

\`\`\`
Company A - pharma archetype: EPS = BDT 6.00
Company B - textile archetype: EPS = BDT 6.00

=== Company A - pharma archetype ===
  Net profit           : 60 cr
  CFO                  : 78 cr
  Accruals (NP - CFO)  : -18 cr
  Accrual ratio        : -3.6%
  Sloan accrual ratio  : -3.6%
  Cash conversion      : 1.30x
  DSO                  : 52.4 days
  Flags:
    F1 clear      0  Cash conversion CFO/NP below 0.80 [1.30x]
    F2 clear      0  Accrual ratio above 5% of avg total assets [-3.6%]
    F3 clear      0  Receivable growth exceeds revenue growth by >15pp [-5.0pp]
    F4 clear      0  Inventory growth exceeds revenue growth by >15pp [+6.8pp]
    F5 clear      0  One-off / non-operating income above 20% of PBT [2.6%]
    F6 clear      0  Related-party revenue above 15% of revenue [4.3%]
    F7 clear      0  Effective tax rate below statutory by >8pp [23.1% vs 22.5%]
    F8 clear      0  Revaluation gain routed through profit or loss [No]
  Penalty              : 0
  EARNINGS QUALITY     : 100/100  -> HIGH

=== Company B - textile archetype ===
  Net profit           : 60 cr
  CFO                  : 8 cr
  Accruals (NP - CFO)  : +52 cr
  Accrual ratio        : +10.4%
  Sloan accrual ratio  : +6.8%
  Cash conversion      : 0.13x
  DSO                  : 94.4 days
  Flags:
    F1 TRIPPED  -20  Cash conversion CFO/NP below 0.80 [0.13x]
    F2 TRIPPED  -18  Accrual ratio above 5% of avg total assets [+10.4%]
    F3 TRIPPED  -15  Receivable growth exceeds revenue growth by >15pp [+55.0pp]
    F4 clear      0  Inventory growth exceeds revenue growth by >15pp [-7.2pp]
    F5 TRIPPED  -12  One-off / non-operating income above 20% of PBT [26.1%]
    F6 clear      0  Related-party revenue above 15% of revenue [12.0%]
    F7 TRIPPED   -8  Effective tax rate below statutory by >8pp [13.0% vs 22.5%]
    F8 TRIPPED   -5  Revaluation gain routed through profit or loss [Yes]
  Penalty              : 78
  EARNINGS QUALITY     : 22/100  -> LOW

Company B: cash-flow accrual ratio less Sloan ratio = 3.6%
That gap x avg assets = BDT 18 cr
It equals the revaluation gain. Non-working-capital accruals hide there.
\`\`\`

**শেষ তিনটি লাইন কী করছে লক্ষ করুন।** ক্লাসটি কখনো পুনর্মূল্যায়ন নোট পড়ে না। এটি সাধারণ আর্থিক-বিবরণী রেখা থেকে দুটি অ্যাক্রুয়াল পরিমাপ গণনা করে, একটি থেকে অন্যটি বিয়োগ করে, এবং ১৮ কোটি টাকা উদ্ধার করে। **পাটিগণিত প্রকাশটি খুঁজে বের করল।** ক্লাসটিকে পাঁচ বছরের ইতিহাস দিয়ে বাড়ান, আর এই একই বিয়োগ আপনি যে কোম্পানির দিকেই তাক করুন, তার মূলধনীকৃত ব্যয়, বিলম্বিত কর অবমুক্তি ও ন্যায্যমূল্য লাভ খুঁজে দেবে।`,
    },

    mistakes: {
      en: `1. **Comparing two companies on EPS alone.** This chapter exists because two companies with EPS 6.00 can be worth completely different amounts. A screener that ranks by P/E ranks accrual quality randomly.

2. **Treating a high Earnings Quality Score as a certificate.** Company A scored 100. That means no flag in *this* framework tripped. It does not mean the accounts are honest, that the auditor is competent, or that the sponsor is not moving cash out through a channel this scorecard does not measure. **A score of 100 means "I found nothing," not "there is nothing."**

3. **Accepting "our sector has long credit cycles" without checking history.** Textile and engineering genuinely do carry long receivables. The test is not the level; it is the *change*. A textile company at 90-day DSO for five straight years is a sector fact. A textile company that went from 55 to 94 days in one year is a company fact.

4. **Applying a P/E to earnings containing one-off gains.** A P/E of 12 on EPS 6.00 where BDT 1.80 of that EPS came from a land revaluation is really a P/E of 17.1 on the recurring earnings. Strip the one-offs *before* you compute any multiple, every time, without exception.

5. **Reading only the cash-flow accrual measure.** It captures everything, but tells you nothing about where. Reading only the Sloan measure is worse — it misses fair-value gains, capitalised costs and deferred tax entirely. Compute both and subtract.

6. **Assuming the auditor caught it.** Auditor independence in Bangladesh is structurally weak: the audit firm is appointed and paid by the company it examines, fee competition is intense, and the FRC's enforcement capacity is still building. An unqualified opinion is the beginning of your work, not the end of it.

7. **Ignoring negative accruals.** Company A's accrual ratio is −3.6% — it collected more than it reported. That is usually good. But persistently large negative accruals can also mean a company is *understating* current profit to build a reserve it can release in a bad year. Extreme readings in either direction are questions, not answers.

8. **Running the score once.** A single-year snapshot has a high false-positive rate — one bad year in a cyclical business is not a manipulation. The signal is the trend across four or five years. Chapter 12 established that a single cash flow statement is a photograph; the same is true here.`,
      bn: `১. **কেবল EPS দিয়ে দুটি কোম্পানি তুলনা করা।** এই অধ্যায়ের অস্তিত্বের কারণ হলো EPS ৬.০০-এর দুটি কোম্পানি সম্পূর্ণ ভিন্ন মূল্যের হতে পারে। যে স্ক্রিনার P/E দিয়ে ক্রম সাজায়, সে অ্যাক্রুয়াল গুণমানকে এলোমেলোভাবে সাজায়।

২. **উচ্চ Earnings Quality Score-কে সনদ হিসেবে গণ্য করা।** কোম্পানি A পেল ১০০। এর মানে *এই* কাঠামোর কোনো পতাকা ওঠেনি। এর মানে এই নয় যে হিসাব সৎ, নিরীক্ষক দক্ষ, বা উদ্যোক্তা এমন কোনো পথে নগদ সরাচ্ছেন না যা এই স্কোরকার্ড মাপে না। **১০০ স্কোরের অর্থ "আমি কিছু পাইনি", "কিছু নেই" নয়।**

৩. **ইতিহাস না দেখে "আমাদের খাতে বাকির চক্র দীর্ঘ" মেনে নেওয়া।** বস্ত্র ও প্রকৌশল সত্যিই দীর্ঘ প্রাপ্য বহন করে। পরীক্ষাটি মাত্রার নয়; *পরিবর্তনের*। টানা পাঁচ বছর ৯০ দিন DSO-তে থাকা একটি বস্ত্র কোম্পানি একটি খাতগত সত্য। এক বছরে ৫৫ থেকে ৯৪ দিনে যাওয়া বস্ত্র কোম্পানি একটি কোম্পানিগত সত্য।

৪. **এককালীন লাভযুক্ত আয়ে P/E প্রয়োগ করা।** EPS ৬.০০-তে ১২-এর P/E, যেখানে ঐ EPS-এর ১.৮০ টাকা এসেছে জমি পুনর্মূল্যায়ন থেকে, আসলে পুনরাবৃত্ত আয়ের ওপর ১৭.১-এর P/E। যেকোনো গুণক গণনার *আগে* এককালীনগুলো ছেঁটে ফেলুন — প্রতিবার, ব্যতিক্রমহীনভাবে।

৫. **কেবল নগদ-প্রবাহভিত্তিক অ্যাক্রুয়াল পরিমাপ পড়া।** এটি সবকিছু ধরে, কিন্তু কোথায় তা বলে না। কেবল Sloan পরিমাপ পড়া আরও খারাপ — এটি ন্যায্যমূল্য লাভ, মূলধনীকৃত ব্যয় ও বিলম্বিত কর সম্পূর্ণ এড়িয়ে যায়। দুটিই গণনা করুন এবং বিয়োগ করুন।

৬. **নিরীক্ষক ধরে ফেলেছেন ধরে নেওয়া।** বাংলাদেশে নিরীক্ষকের স্বাধীনতা কাঠামোগতভাবে দুর্বল: নিরীক্ষা প্রতিষ্ঠানকে নিয়োগ ও অর্থ দেয় সেই কোম্পানিই যাকে সে পরীক্ষা করে, ফি প্রতিযোগিতা তীব্র, এবং FRC-র প্রয়োগ সক্ষমতা এখনো গড়ে উঠছে। অসংশোধিত মতামত আপনার কাজের শুরু, শেষ নয়।

৭. **ঋণাত্মক অ্যাক্রুয়াল উপেক্ষা করা।** কোম্পানি A-এর অ্যাক্রুয়াল অনুপাত −৩.৬% — সে যা রিপোর্ট করেছে তার চেয়ে বেশি আদায় করেছে। সাধারণত এটি ভালো। কিন্তু ধারাবাহিকভাবে বড় ঋণাত্মক অ্যাক্রুয়ালের অর্থ এও হতে পারে যে কোম্পানি চলতি মুনাফা *কম দেখিয়ে* একটি সঞ্চিতি গড়ছে, যা খারাপ বছরে ছেড়ে দেবে। যেকোনো দিকেই চরম পাঠ প্রশ্ন, উত্তর নয়।

৮. **স্কোর একবার চালানো।** এক বছরের স্ন্যাপশটে মিথ্যা-ইতিবাচকের হার বেশি — একটি চক্রীয় ব্যবসায় একটি খারাপ বছর কারসাজি নয়। সংকেত হলো চার-পাঁচ বছরের প্রবণতা। অধ্যায় ১২ প্রতিষ্ঠা করেছে একটি একক নগদ প্রবাহ বিবরণী একটি আলোকচিত্র; এখানেও একই কথা সত্য।`,
    },

    tips: {
      en: `- **Build the five-year table before you build an opinion.** Net profit, CFO, and the accrual ratio for five consecutive years, in three columns. Nothing else in fundamental analysis produces as much information per minute spent.

- **Read three notes in every annual report, in this order:** related-party transactions (IAS 24), the property/plant/equipment note including any revaluation and the depreciation policy, and the deferred tax reconciliation. These three notes contain levers 5, 6, 7 and 8. They are at the back of the PDF and they are where the disclosure actually lives.

- **Watch the auditor.** A change of audit firm without a stated reason, a change in the audit partner's tone in the emphasis-of-matter paragraph, or a delayed signing date are all free signals. Cross-check the firm against the FRC's list of enrolled auditors.

- **Compare depreciation to gross fixed assets across a sector, not across the market.** A cement plant and a software company have no comparable useful lives. Within cement, a company depreciating at 4% where peers run 7% has either better machinery or a softer policy, and only one of those is likely.

- **Q4 is where the truth surfaces.** Bangladeshi issuers publish three unaudited quarters and then an audited full year. Q4 is a residual: full year minus the first three quarters. Compute it yourself. A company whose Q4 profit is wildly out of line with Q1–Q3, in either direction, is telling you the interim numbers were managed.

- **When cash conversion is weak, value on cash.** Do not argue with the P/E. Compute market capitalisation divided by CFO and look at that number instead. It ends most arguments quickly.

- **Never take the accrual test as a short signal on this exchange.** You are structurally right and can still be destroyed. Chapter 6 established that DSE downturns come with floor prices and locked circuits; Chapter 5 established that being correct about a company does not help when the market stops functioning. The accrual test tells you what *not* to own. That is enough.`,
      bn: `- **মতামত গড়ার আগে পাঁচ বছরের সারণিটি বানান।** টানা পাঁচ বছরের নিট মুনাফা, CFO এবং অ্যাক্রুয়াল অনুপাত, তিন কলামে। মৌল বিশ্লেষণে ব্যয় করা প্রতি মিনিটে আর কিছুই এত তথ্য দেয় না।

- **প্রতিটি বার্ষিক প্রতিবেদনে তিনটি নোট পড়ুন, এই ক্রমে:** সম্পর্কিত-পক্ষের লেনদেন (IAS ২৪), সম্পত্তি/প্ল্যান্ট/সরঞ্জাম নোট — পুনর্মূল্যায়ন ও অবচয় নীতিসহ, এবং বিলম্বিত করের সমন্বয়। এই তিন নোটে ৫, ৬, ৭ ও ৮ নং কৌশল থাকে। এগুলো PDF-এর পেছনে থাকে এবং প্রকাশটি আসলে সেখানেই বাস করে।

- **নিরীক্ষকের দিকে নজর রাখুন।** কারণ না জানিয়ে নিরীক্ষা প্রতিষ্ঠান পরিবর্তন, emphasis-of-matter অনুচ্ছেদে নিরীক্ষা পার্টনারের সুরের পরিবর্তন, বা স্বাক্ষরের বিলম্বিত তারিখ — সবই বিনামূল্যের সংকেত। প্রতিষ্ঠানটিকে FRC-র তালিকাভুক্ত নিরীক্ষকদের তালিকার সঙ্গে মিলিয়ে নিন।

- **মোট স্থায়ী সম্পদের বিপরীতে অবচয় তুলনা করুন একটি খাতের ভেতরে, বাজারজুড়ে নয়।** একটি সিমেন্ট কারখানা ও একটি সফটওয়্যার কোম্পানির উপযোগী জীবন তুলনীয় নয়। সিমেন্টের ভেতরে, যে কোম্পানি ৪% হারে অবচয় লেখে যখন সমগোত্রীয়রা ৭%-এ চলে, তার হয় ভালো যন্ত্রপাতি আছে নয়তো নরম নীতি — এবং এদের একটিই বেশি সম্ভাব্য।

- **সত্য প্রকাশ পায় Q4-এ।** বাংলাদেশি ইস্যুয়াররা তিনটি অনিরীক্ষিত প্রান্তিক প্রকাশ করেন, তারপর একটি নিরীক্ষিত পূর্ণ বছর। Q4 একটি অবশিষ্ট: পূর্ণ বছর বিয়োগ প্রথম তিন প্রান্তিক। নিজে গণনা করুন। যে কোম্পানির Q4 মুনাফা Q1–Q3-এর সঙ্গে যেকোনো দিকেই তীব্রভাবে বেমানান, সে আপনাকে বলছে অন্তর্বর্তী সংখ্যাগুলো নিয়ন্ত্রিত ছিল।

- **নগদ রূপান্তর দুর্বল হলে নগদের ভিত্তিতে মূল্যায়ন করুন।** P/E নিয়ে তর্ক করবেন না। বাজার মূলধন ভাগ CFO গণনা করে বরং সেই সংখ্যাটি দেখুন। এটি বেশিরভাগ তর্ক দ্রুত শেষ করে।

- **এই এক্সচেঞ্জে অ্যাক্রুয়াল পরীক্ষাকে কখনো শর্ট সংকেত হিসেবে নেবেন না।** আপনি কাঠামোগতভাবে সঠিক থেকেও ধ্বংস হতে পারেন। অধ্যায় ৬ প্রতিষ্ঠা করেছে ডিএসই-র পতন আসে ফ্লোর প্রাইস ও আটকানো সার্কিটসহ; অধ্যায় ৫ প্রতিষ্ঠা করেছে বাজার কাজ করা বন্ধ করলে কোম্পানি সম্পর্কে সঠিক হওয়া সাহায্য করে না। অ্যাক্রুয়াল পরীক্ষা বলে কী *না* কিনতে হবে। এটুকুই যথেষ্ট।`,
    },

    exercises: {
      en: `1. Pick any DSE-listed textile company. From its last five annual reports, build a table of net profit, cash flow from operations, and the accrual ratio (using average total assets). Plot the accrual ratio. State in two sentences what the trend implies about earnings persistence.

2. For the same company, compute both the cash-flow accrual ratio and the Sloan balance-sheet accrual ratio for the most recent year. Subtract them and multiply by average total assets. Now open the notes and identify what that BDT figure actually is. Write down whether your arithmetic found it before you read the note.

3. Take any DSE company that reported a revaluation gain in the last three years. Determine from the accounts whether the gain was routed through profit or loss or through other comprehensive income. Recompute EPS excluding the gain. Recompute the P/E at the current market price. Report both P/E figures.

4. Build the full eight-flag scorecard for three companies in the same sector, using the weights in the formula block. Rank them. Then rank them by P/E. Compare the two orderings and explain every disagreement.

5. For one company, compute Q4 profit as (full year − Q1 − Q2 − Q3) for three consecutive years. Express Q4 as a percentage of full-year profit each year. If any year exceeds 45% or falls below 10%, investigate the reason and write one paragraph on what it tells you about the interim reporting.

6. Find a DSE company whose effective tax rate is more than 8 percentage points below the statutory rate for listed companies. Read the deferred tax note. Determine whether the gap is explained by a legitimate tax holiday or export incentive, or by a deferred tax asset recognised on losses. State which, and what you would need to see to be comfortable.`,
      bn: `১. যেকোনো ডিএসই-তালিকাভুক্ত বস্ত্র কোম্পানি বাছুন। তার সর্বশেষ পাঁচটি বার্ষিক প্রতিবেদন থেকে নিট মুনাফা, পরিচালন নগদ প্রবাহ এবং অ্যাক্রুয়াল অনুপাতের (গড় মোট সম্পদ ব্যবহার করে) একটি সারণি বানান। অ্যাক্রুয়াল অনুপাতটি প্লট করুন। দুই বাক্যে বলুন প্রবণতাটি আয়ের স্থায়িত্ব সম্পর্কে কী বোঝায়।

২. একই কোম্পানির জন্য সর্বশেষ বছরের নগদ-প্রবাহভিত্তিক ও Sloan স্থিতিপত্রভিত্তিক — দুই অ্যাক্রুয়াল অনুপাতই গণনা করুন। বিয়োগ করে গড় মোট সম্পদ দিয়ে গুণ করুন। এবার নোট খুলে বের করুন ঐ টাকার অঙ্কটি আসলে কী। নোট পড়ার আগেই আপনার পাটিগণিত তা খুঁজে পেয়েছিল কি না লিখে রাখুন।

৩. গত তিন বছরে পুনর্মূল্যায়ন লাভ রিপোর্ট করেছে এমন যেকোনো ডিএসই কোম্পানি নিন। হিসাব থেকে নির্ধারণ করুন লাভটি লাভ-ক্ষতির মধ্য দিয়ে না অন্যান্য সমগ্র আয়ের মধ্য দিয়ে গেছে। লাভটি বাদ দিয়ে EPS পুনরায় গণনা করুন। বর্তমান বাজারদরে P/E পুনরায় গণনা করুন। দুটি P/E-ই জানান।

৪. একই খাতের তিনটি কোম্পানির জন্য সূত্র ব্লকের ওজন ব্যবহার করে পূর্ণ আট-পতাকার স্কোরকার্ড বানান। তাদের ক্রম সাজান। তারপর P/E দিয়ে ক্রম সাজান। দুটি ক্রম তুলনা করুন এবং প্রতিটি অমিল ব্যাখ্যা করুন।

৫. একটি কোম্পানির জন্য টানা তিন বছর Q4 মুনাফা গণনা করুন (পূর্ণ বছর − Q1 − Q2 − Q3) হিসেবে। প্রতি বছর Q4-কে পূর্ণ-বছরের মুনাফার শতাংশ হিসেবে প্রকাশ করুন। কোনো বছর ৪৫% ছাড়িয়ে গেলে বা ১০%-এর নিচে নামলে কারণ অনুসন্ধান করুন এবং অন্তর্বর্তী প্রতিবেদন সম্পর্কে তা কী বলে তা নিয়ে এক অনুচ্ছেদ লিখুন।

৬. এমন একটি ডিএসই কোম্পানি খুঁজুন যার কার্যকর করহার তালিকাভুক্ত কোম্পানির বিধিবদ্ধ হারের চেয়ে ৮ শতাংশ বিন্দুর বেশি নিচে। বিলম্বিত কর নোট পড়ুন। নির্ধারণ করুন ফাঁকটি বৈধ কর-অবকাশ বা রপ্তানি প্রণোদনা দিয়ে ব্যাখ্যাত, নাকি ক্ষতির ওপর স্বীকৃত বিলম্বিত কর সম্পদ দিয়ে। কোনটি তা বলুন, এবং স্বস্তি বোধ করতে আপনার আর কী দেখা দরকার তা লিখুন।`,
    },

    summary: {
      en: `- Reported profit is a set of management judgements permitted by IAS/IFRS as adopted in Bangladesh. Cash flow from operations is far harder to construct. Where they disagree, the profit figure is the one under suspicion.
- **Accruals = Net Profit − CFO.** The accrual component of earnings is systematically less persistent than the cash component. The market prices both alike; that is the mispricing.
- Eight levers move reported profit without moving cash: revenue timing, receivable inflation, inventory non-write-down, improper capitalisation, understated depreciation, related-party sales, deferred tax recognition, and revaluation gains routed through P&L.
- The cash-flow accrual ratio captures all accruals. The Sloan balance-sheet measure captures only working-capital accruals. **The difference between them locates the non-working-capital accrual — the fair-value gain, the capitalised cost, the deferred tax release — arithmetically, before you read a single note.**
- Two DSE companies with identical EPS of BDT 6.00 scored 100 and 22 on the eight-flag Earnings Quality Score. One had CFO of BDT 78 crore; the other had BDT 8 crore and traded at 90× cash while showing a P/E of 12.
- One-off gains must be stripped before any multiple is applied. Capitalising a single event into perpetuity is the most common valuation error on this exchange.
- A high quality score means no flag tripped in one framework. It is not a certificate. An unqualified audit opinion in a market with structurally weak auditor independence is where your work begins.
- **Discipline established:** never value an earnings number you have not reconciled to cash. EPS tells you what management decided to report; cash flow from operations tells you what happened. When they conflict for two consecutive years, believe the cash and act on it.`,
      bn: `- রিপোর্টকৃত মুনাফা বাংলাদেশে গৃহীত IAS/IFRS দ্বারা অনুমোদিত ব্যবস্থাপনার একগুচ্ছ বিচার। পরিচালন কার্যক্রম থেকে নগদ প্রবাহ গঠন করা অনেক কঠিন। এরা অমিল হলে সন্দেহটি মুনাফার সংখ্যার ওপরই বর্তায়।
- **অ্যাক্রুয়াল = নিট মুনাফা − CFO।** আয়ের অ্যাক্রুয়াল অংশ নগদ অংশের চেয়ে ব্যবস্থাগতভাবে কম স্থায়ী। বাজার দুটোকেই একই দাম দেয়; সেটিই ভুল মূল্যায়ন।
- নগদ না নাড়িয়ে রিপোর্টকৃত মুনাফা নাড়ায় আটটি কৌশল: রাজস্বের সময়কাল, প্রাপ্য স্ফীতকরণ, মজুদের অবলোপন না করা, অনুচিত মূলধনীকরণ, অবমূল্যায়িত অবচয়, সম্পর্কিত-পক্ষের বিক্রয়, বিলম্বিত কর স্বীকৃতি, এবং লাভ-ক্ষতির মধ্য দিয়ে পাঠানো পুনর্মূল্যায়ন লাভ।
- নগদ-প্রবাহভিত্তিক অ্যাক্রুয়াল অনুপাত সব অ্যাক্রুয়াল ধরে। Sloan-এর স্থিতিপত্রভিত্তিক পরিমাপ কেবল কার্যকরী মূলধনের অ্যাক্রুয়াল ধরে। **এদের পার্থক্য কার্যকরী মূলধনের বাইরের অ্যাক্রুয়াল — ন্যায্যমূল্য লাভ, মূলধনীকৃত ব্যয়, বিলম্বিত কর অবমুক্তি — পাটিগাণিতিকভাবে খুঁজে দেয়, একটি নোটও পড়ার আগে।**
- EPS ৬.০০ টাকার অভিন্ন দুটি ডিএসই কোম্পানি আট-পতাকার Earnings Quality Score-এ পেল ১০০ ও ২২। একটির CFO ছিল ৭৮ কোটি টাকা; অন্যটির ৮ কোটি, এবং সেটি ১২-এর P/E দেখিয়ে নগদের ৯০ গুণে লেনদেন হচ্ছিল।
- যেকোনো গুণক প্রয়োগের আগে এককালীন লাভ ছেঁটে ফেলতে হবে। একটি একক ঘটনাকে চিরস্থায়ীতে রূপান্তর করাই এই এক্সচেঞ্জের সবচেয়ে সাধারণ মূল্যায়ন ভুল।
- উচ্চ গুণমান স্কোরের অর্থ একটি কাঠামোয় কোনো পতাকা ওঠেনি। এটি সনদ নয়। কাঠামোগতভাবে দুর্বল নিরীক্ষক-স্বাধীনতার বাজারে একটি অসংশোধিত নিরীক্ষা মতামত হলো আপনার কাজ শুরুর জায়গা।
- **প্রতিষ্ঠিত শৃঙ্খলা:** যে আয়ের সংখ্যা আপনি নগদের সঙ্গে মেলাননি, তার কখনো মূল্যায়ন করবেন না। EPS বলে ব্যবস্থাপনা কী রিপোর্ট করার সিদ্ধান্ত নিয়েছে; পরিচালন নগদ প্রবাহ বলে কী ঘটেছে। পরপর দুই বছর এরা সংঘর্ষে গেলে নগদকে বিশ্বাস করুন এবং সেই অনুযায়ী কাজ করুন।`,
    },
  },

  interview: [
    {
      q: {
        en: 'Define accruals and explain why they matter to an equity investor.',
        bn: 'অ্যাক্রুয়ালের সংজ্ঞা দিন এবং একজন ইকুইটি বিনিয়োগকারীর কাছে এটি কেন গুরুত্বপূর্ণ তা ব্যাখ্যা করুন।',
      },
      a: {
        en: 'Accruals are net profit minus cash flow from operations — the portion of reported earnings that did not arrive as cash. They matter because the accrual component of earnings is empirically far less persistent than the cash component: it tends not to repeat, and it frequently reverses through provisions, write-downs or restatements. Since the market typically prices both components identically, a high-accrual company is systematically overpriced relative to its durable earning power.',
        bn: 'অ্যাক্রুয়াল হলো নিট মুনাফা বিয়োগ পরিচালন কার্যক্রম থেকে নগদ প্রবাহ — রিপোর্টকৃত আয়ের সেই অংশ যা নগদ হিসেবে আসেনি। এটি গুরুত্বপূর্ণ কারণ আয়ের অ্যাক্রুয়াল অংশ গবেষণালব্ধভাবে নগদ অংশের চেয়ে অনেক কম স্থায়ী: এটি পুনরাবৃত্ত না হওয়ার প্রবণতা রাখে এবং প্রায়ই সঞ্চিতি, অবলোপন বা পুনর্বিবৃতির মাধ্যমে বিপরীতমুখী হয়। যেহেতু বাজার সাধারণত দুই অংশকেই একই দাম দেয়, উচ্চ-অ্যাক্রুয়ালের কোম্পানি তার টেকসই উপার্জন ক্ষমতার তুলনায় ব্যবস্থাগতভাবে অতিমূল্যায়িত।',
      },
    },
    {
      q: {
        en: 'A company reports 15% revenue growth and 70% receivable growth. What are your next three questions?',
        bn: 'একটি কোম্পানি ১৫% রাজস্ব প্রবৃদ্ধি ও ৭০% প্রাপ্য প্রবৃদ্ধি রিপোর্ট করেছে। আপনার পরবর্তী তিনটি প্রশ্ন কী?',
      },
      a: {
        en: 'First: what is the receivables ageing schedule — how much is beyond 180 days, and what provision has been made against it? Second: did a small number of new customers account for the increase, and are any of them related parties under IAS 24? Third: what did fourth-quarter revenue look like relative to Q1–Q3, since channel-stuffing concentrates in the final quarter before the audited year-end. If the answers are unsatisfactory, treat the revenue growth as credit extension rather than demand.',
        bn: 'প্রথম: প্রাপ্যের বয়সভিত্তিক তালিকা কী — কতটা ১৮০ দিনের বেশি পুরোনো, এবং তার বিপরীতে কী সঞ্চিতি রাখা হয়েছে? দ্বিতীয়: বৃদ্ধিটি কি অল্প কয়েকজন নতুন খদ্দেরের কারণে, এবং তাঁদের কেউ কি IAS ২৪ অনুযায়ী সম্পর্কিত পক্ষ? তৃতীয়: Q1–Q3-এর তুলনায় চতুর্থ প্রান্তিকের রাজস্ব কেমন ছিল, যেহেতু চ্যানেল-স্টাফিং নিরীক্ষিত বছর শেষের ঠিক আগের প্রান্তিকে কেন্দ্রীভূত হয়। উত্তরগুলো সন্তোষজনক না হলে রাজস্ব প্রবৃদ্ধিকে চাহিদা নয়, ঋণ সম্প্রসারণ হিসেবে গণ্য করুন।',
      },
    },
    {
      q: {
        en: 'Why compute both the cash-flow accrual ratio and the Sloan balance-sheet measure?',
        bn: 'নগদ-প্রবাহভিত্তিক অ্যাক্রুয়াল অনুপাত ও Sloan-এর স্থিতিপত্রভিত্তিক পরিমাপ — দুটিই কেন গণনা করবেন?',
      },
      a: {
        en: 'They capture different things. The cash-flow measure captures every accrual, but is silent on composition. The Sloan measure captures only working-capital accruals — receivables, inventory, payables, less depreciation. Anything outside working capital escapes it: fair-value gains, deferred tax movements, improperly capitalised costs. Subtracting the Sloan measure from the cash-flow measure and multiplying by average total assets gives the taka value of the non-working-capital accrual, which tells you where to look in the notes before you have opened them.',
        bn: 'এরা ভিন্ন জিনিস ধরে। নগদ-প্রবাহভিত্তিক পরিমাপ প্রতিটি অ্যাক্রুয়াল ধরে, কিন্তু গঠন নিয়ে নীরব। Sloan পরিমাপ কেবল কার্যকরী মূলধনের অ্যাক্রুয়াল ধরে — প্রাপ্য, মজুদ, প্রদেয়, বিয়োগ অবচয়। কার্যকরী মূলধনের বাইরের সবকিছু এর ফাঁক দিয়ে বেরিয়ে যায়: ন্যায্যমূল্য লাভ, বিলম্বিত করের নড়াচড়া, অনুচিতভাবে মূলধনীকৃত ব্যয়। নগদ-প্রবাহভিত্তিক পরিমাপ থেকে Sloan পরিমাপ বিয়োগ করে গড় মোট সম্পদ দিয়ে গুণ করলে কার্যকরী মূলধনের বাইরের অ্যাক্রুয়ালের টাকার অঙ্ক পাওয়া যায়, যা নোট খোলার আগেই বলে দেয় কোথায় খুঁজতে হবে।',
      },
    },
    {
      q: {
        en: 'A DSE company routes a land revaluation gain through profit or loss. What is wrong with that, and what do you do?',
        bn: 'একটি ডিএসই কোম্পানি জমির পুনর্মূল্যায়ন লাভ লাভ-ক্ষতির মধ্য দিয়ে পাঠাচ্ছে। এতে সমস্যা কী, এবং আপনি কী করবেন?',
      },
      a: {
        en: 'The gain is non-cash, non-recurring and non-operating, yet it lands inside the net profit figure the market multiplies by a P/E. Under the revaluation model in IAS 16, an increase should ordinarily go to other comprehensive income and a revaluation surplus in equity, not to profit or loss. The action is mechanical: strip the gain and its tax effect out, recompute EPS, recompute the P/E at the current price, and use only the restated figure. Also treat the routing choice itself as a governance signal — a board willing to do this once is likely doing other things you have not found.',
        bn: 'লাভটি অ-নগদ, অ-পুনরাবৃত্ত ও অ-পরিচালন, অথচ তা এমন নিট মুনাফার সংখ্যার ভেতরে গিয়ে বসে যাকে বাজার P/E দিয়ে গুণ করে। IAS ১৬-এর পুনর্মূল্যায়ন মডেল অনুযায়ী বৃদ্ধি সাধারণত অন্যান্য সমগ্র আয় ও ইকুইটিতে পুনর্মূল্যায়ন উদ্বৃত্তে যাওয়ার কথা, লাভ-ক্ষতিতে নয়। পদক্ষেপটি যান্ত্রিক: লাভ ও তার কর-প্রভাব ছেঁটে ফেলুন, EPS পুনরায় গণনা করুন, বর্তমান দামে P/E পুনরায় গণনা করুন, এবং কেবল পুনর্গণিত সংখ্যাটিই ব্যবহার করুন। পাশাপাশি পথ বাছাইয়ের সিদ্ধান্তটিকেই একটি পরিচালনগত সংকেত হিসেবে গণ্য করুন — যে পর্ষদ একবার এটি করতে রাজি, সে সম্ভবত এমন আরও কিছু করছে যা আপনি খুঁজে পাননি।',
      },
    },
    {
      q: {
        en: 'How would you weight the flags in an earnings quality scorecard, and why is any weighting defensible?',
        bn: 'একটি earnings quality স্কোরকার্ডে আপনি পতাকাগুলোকে কীভাবে ওজন দেবেন, এবং যেকোনো ওজন কেন সমর্থনযোগ্য?',
      },
      a: {
        en: 'Weight by how hard the flag is to explain away with a legitimate business story. Cash conversion and the accrual ratio carry the most weight — 38 points of 100 in the framework used here — because no sector narrative survives a company that reports profit and collects nothing for two years. Growth-gap flags carry medium weight because sector credit norms give them some genuine defence. Revaluation routing carries the least because it is trivially detectable and rarely the whole problem. The weighting is defensible only if it is fixed in advance and applied without override; a scorecard you adjust per company is not a scorecard, it is a rationalisation.',
        bn: 'ওজন দিন এই ভিত্তিতে যে বৈধ ব্যবসায়িক গল্প দিয়ে পতাকাটি খণ্ডানো কতটা কঠিন। নগদ রূপান্তর ও অ্যাক্রুয়াল অনুপাত সর্বোচ্চ ওজন বহন করে — এখানে ব্যবহৃত কাঠামোয় ১০০-র মধ্যে ৩৮ — কারণ যে কোম্পানি দুই বছর ধরে মুনাফা রিপোর্ট করে অথচ কিছুই আদায় করে না, তার পক্ষে কোনো খাতগত আখ্যান টেকে না। প্রবৃদ্ধি-ফাঁকের পতাকাগুলো মাঝারি ওজন বহন করে কারণ খাতভিত্তিক ঋণ-রীতি তাদের কিছুটা প্রকৃত প্রতিরক্ষা দেয়। পুনর্মূল্যায়নের পথ সর্বনিম্ন বহন করে কারণ এটি অতি সহজে শনাক্তযোগ্য এবং খুব কমই পুরো সমস্যা। ওজন তখনই সমর্থনযোগ্য যখন তা আগেই স্থির করা হয় এবং অগ্রাহ্য না করে প্রয়োগ করা হয়; যে স্কোরকার্ড আপনি কোম্পানিভেদে সমন্বয় করেন, তা স্কোরকার্ড নয়, যুক্তিসাজানো।',
      },
    },
    {
      q: {
        en: 'Two companies both report EPS of BDT 6.00 at a P/E of 12. What single additional number would you ask for first?',
        bn: 'দুটি কোম্পানিই ১২ P/E-তে EPS ৬.০০ টাকা রিপোর্ট করেছে। আপনি প্রথমে কোন একটিমাত্র অতিরিক্ত সংখ্যা চাইবেন?',
      },
      a: {
        en: 'Cash flow from operations. It immediately produces cash conversion and the accrual ratio, and it is the only single number that can invalidate the EPS comparison outright. In the worked case in this chapter, one company had CFO of BDT 78 crore against net profit of BDT 60 crore and the other had BDT 8 crore — meaning the second traded at roughly 90 times operating cash while displaying a P/E of 12. One number closed the question.',
        bn: 'পরিচালন কার্যক্রম থেকে নগদ প্রবাহ। এটি তৎক্ষণাৎ নগদ রূপান্তর ও অ্যাক্রুয়াল অনুপাত দেয়, এবং এটিই একমাত্র সংখ্যা যা EPS তুলনাকে সরাসরি বাতিল করে দিতে পারে। এই অধ্যায়ের নিরূপিত ঘটনায় এক কোম্পানির CFO ছিল ৬০ কোটি টাকার নিট মুনাফার বিপরীতে ৭৮ কোটি টাকা আর অন্যটির ৮ কোটি — অর্থাৎ দ্বিতীয়টি ১২-এর P/E দেখিয়ে পরিচালন নগদের প্রায় ৯০ গুণে লেনদেন হচ্ছিল। একটি সংখ্যাই প্রশ্নটি শেষ করে দিল।',
      },
    },
  ],

  quiz: [
    {
      q: { en: 'Accruals are defined as:', bn: 'অ্যাক্রুয়ালের সংজ্ঞা হলো:' },
      options: {
        en: ['Revenue minus expenses', 'Net profit minus cash flow from operations', 'CFO minus capex', 'Operating profit minus tax'],
        bn: ['রাজস্ব বিয়োগ ব্যয়', 'নিট মুনাফা বিয়োগ পরিচালন নগদ প্রবাহ', 'CFO বিয়োগ মূলধনী ব্যয়', 'পরিচালন মুনাফা বিয়োগ কর'],
      },
      answer: 1,
    },
    {
      q: { en: 'Sloan’s finding was that the accrual component of earnings is:', bn: 'Sloan-এর আবিষ্কার ছিল আয়ের অ্যাক্রুয়াল অংশ:' },
      options: {
        en: ['More persistent than cash earnings', 'Less persistent than cash earnings', 'Equally persistent', 'Irrelevant to future returns'],
        bn: ['নগদ আয়ের চেয়ে বেশি স্থায়ী', 'নগদ আয়ের চেয়ে কম স্থায়ী', 'সমানভাবে স্থায়ী', 'ভবিষ্যৎ রিটার্নে অপ্রাসঙ্গিক'],
      },
      answer: 1,
    },
    {
      q: { en: 'Company B has net profit 60 and CFO 8 on average assets of 500. Its accrual ratio is:', bn: 'কোম্পানি B-এর নিট মুনাফা ৬০, CFO ৮, গড় সম্পদ ৫০০। এর অ্যাক্রুয়াল অনুপাত:' },
      options: { en: ['+5.2%', '+10.4%', '+13.3%', '+52.0%'], bn: ['+৫.২%', '+১০.৪%', '+১৩.৩%', '+৫২.০%'] },
      answer: 1,
    },
    {
      q: { en: 'The Sloan balance-sheet accrual measure does NOT capture:', bn: 'Sloan-এর স্থিতিপত্রভিত্তিক অ্যাক্রুয়াল পরিমাপ যা ধরে না:' },
      options: {
        en: ['Receivable increases', 'Inventory increases', 'A revaluation gain routed to P&L', 'Payable increases'],
        bn: ['প্রাপ্য বৃদ্ধি', 'মজুদ বৃদ্ধি', 'লাভ-ক্ষতিতে পাঠানো পুনর্মূল্যায়ন লাভ', 'প্রদেয় বৃদ্ধি'],
      },
      answer: 2,
    },
    {
      q: { en: 'Cash conversion is computed as:', bn: 'নগদ রূপান্তর গণনা করা হয়:' },
      options: {
        en: ['Net profit ÷ CFO', 'CFO ÷ net profit', 'CFO ÷ revenue', 'Net profit ÷ revenue'],
        bn: ['নিট মুনাফা ÷ CFO', 'CFO ÷ নিট মুনাফা', 'CFO ÷ রাজস্ব', 'নিট মুনাফা ÷ রাজস্ব'],
      },
      answer: 1,
    },
    {
      q: { en: 'Under IAS 16, an upward revaluation of land should ordinarily be recognised in:', bn: 'IAS ১৬ অনুযায়ী জমির ঊর্ধ্বমুখী পুনর্মূল্যায়ন সাধারণত স্বীকৃত হওয়া উচিত:' },
      options: {
        en: ['Profit or loss', 'Other comprehensive income and a revaluation surplus', 'Retained earnings directly', 'Cash flow from investing'],
        bn: ['লাভ-ক্ষতিতে', 'অন্যান্য সমগ্র আয় ও পুনর্মূল্যায়ন উদ্বৃত্তে', 'সরাসরি সংরক্ষিত আয়ে', 'বিনিয়োগ কার্যক্রমের নগদ প্রবাহে'],
      },
      answer: 1,
    },
    {
      q: { en: 'Receivables grew 70% while revenue grew 15%. The gap in percentage points is:', bn: 'প্রাপ্য বেড়েছে ৭০% আর রাজস্ব বেড়েছে ১৫%। শতাংশ বিন্দুতে ফাঁকটি:' },
      options: { en: ['+4.7 pp', '+15.0 pp', '+55.0 pp', '+85.0 pp'], bn: ['+৪.৭ pp', '+১৫.০ pp', '+৫৫.০ pp', '+৮৫.০ pp'] },
      answer: 2,
    },
    {
      q: { en: 'Which disclosure note reveals related-party sales?', bn: 'কোন প্রকাশ-নোটে সম্পর্কিত-পক্ষের বিক্রয় প্রকাশ পায়?' },
      options: { en: ['IAS 16', 'IAS 23', 'IAS 24', 'IFRS 15'], bn: ['IAS ১৬', 'IAS ২৩', 'IAS ২৪', 'IFRS ১৫'] },
      answer: 2,
    },
    {
      q: { en: 'Capitalising a repair cost that should have been expensed has what immediate effect?', bn: 'যে মেরামত ব্যয় খরচ লেখা উচিত ছিল তা মূলধনীকরণ করলে তাৎক্ষণিক প্রভাব কী?' },
      options: {
        en: ['Reduces reported profit today', 'Increases reported profit today and depreciation later', 'No effect on profit', 'Increases CFO and profit equally'],
        bn: ['আজকের রিপোর্টকৃত মুনাফা কমায়', 'আজকের রিপোর্টকৃত মুনাফা বাড়ায় এবং পরে অবচয় বাড়ায়', 'মুনাফায় কোনো প্রভাব নেই', 'CFO ও মুনাফা সমানভাবে বাড়ায়'],
      },
      answer: 1,
    },
    {
      q: { en: 'An Earnings Quality Score of 100 in the framework of this chapter means:', bn: 'এই অধ্যায়ের কাঠামোয় ১০০ Earnings Quality Score-এর অর্থ:' },
      options: {
        en: ['The accounts are certified honest', 'No flag in this framework tripped', 'The auditor issued a qualified opinion', 'The company will outperform the index'],
        bn: ['হিসাব সৎ বলে প্রত্যয়িত', 'এই কাঠামোর কোনো পতাকা ওঠেনি', 'নিরীক্ষক সংশোধিত মতামত দিয়েছেন', 'কোম্পানিটি সূচককে ছাড়িয়ে যাবে'],
      },
      answer: 1,
    },
  ],
};
