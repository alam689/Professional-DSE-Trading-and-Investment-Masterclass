/**
 * Chapter 12 — The Cash Flow Statement
 * Part II, Company Analysis. Follows Ch 11 (The Balance Sheet).
 */

export default {
  n: 12,
  tools: [],

  excelSheet: {
    filename: 'ch12-profit-to-cash.xlsx',
    sheetName: 'Profit to Cash',
    cells: [
      { cell: 'A1', v: 'Net Profit After Tax (BDT cr)' }, { cell: 'B1', v: 40 },
      { cell: 'A2', v: 'Income Tax Expense' }, { cell: 'B2', v: 14 },
      { cell: 'A3', v: 'Profit Before Tax' }, { cell: 'B3', f: 'B1+B2' },

      { cell: 'A5', v: 'Depreciation & Amortisation' }, { cell: 'B5', v: 26 },
      { cell: 'A6', v: 'Finance Cost (added back)' }, { cell: 'B6', v: 22 },
      { cell: 'A7', v: 'Loss on Disposal of PPE' }, { cell: 'B7', v: 2 },
      { cell: 'A8', v: 'Interest Income (deducted)' }, { cell: 'B8', v: -3 },
      { cell: 'A9', v: 'Operating Profit before WC Changes' }, { cell: 'B9', f: 'B3+B5+B6+B7+B8' },

      { cell: 'A11', v: '(Increase) in Trade Receivables' }, { cell: 'B11', v: -62 },
      { cell: 'A12', v: '(Increase) in Inventory' }, { cell: 'B12', v: -33 },
      { cell: 'A13', v: '(Increase) in Advances & Prepayments' }, { cell: 'B13', v: -4 },
      { cell: 'A14', v: 'Increase in Trade Payables' }, { cell: 'B14', v: 18 },
      { cell: 'A15', v: 'Net Working Capital Change' }, { cell: 'B15', f: 'SUM(B11:B14)' },
      { cell: 'A16', v: 'Cash Generated from Operations' }, { cell: 'B16', f: 'B9+B15' },

      { cell: 'A18', v: 'Interest Paid' }, { cell: 'B18', v: -22 },
      { cell: 'A19', v: 'Income Tax Paid' }, { cell: 'B19', v: -10 },
      { cell: 'A20', v: 'NET OPERATING CASH FLOW (NOCF)' }, { cell: 'B20', f: 'B16+B18+B19' },

      { cell: 'A22', v: 'Shares Outstanding (cr)' }, { cell: 'B22', v: 8 },
      { cell: 'A23', v: 'EPS (BDT)' }, { cell: 'B23', f: 'B1/B22' },
      { cell: 'A24', v: 'NOCF per Share (BDT)' }, { cell: 'B24', f: 'B20/B22' },
      { cell: 'A25', v: 'Accrual Gap per Share (BDT)' }, { cell: 'B25', f: 'B23-B24' },

      { cell: 'A27', v: 'Capital Expenditure' }, { cell: 'B27', v: 55 },
      { cell: 'A28', v: 'FREE CASH FLOW' }, { cell: 'B28', f: 'B20-B27' },

      { cell: 'A30', v: 'Total Assets' }, { cell: 'B30', v: 780 },
      { cell: 'A31', v: 'Accruals Ratio (%)' }, { cell: 'B31', f: '(B1-B20)/B30*100' },
      { cell: 'A32', v: 'Cash Conversion (NOCF/NP)' }, { cell: 'B32', f: 'B20/B1' },
      {
        cell: 'A33', v: 'EARNINGS QUALITY VERDICT',
      },
      {
        cell: 'B33',
        f: 'IF(B20<0,"PROFIT WITHOUT CASH - reject",IF(B32<0.5,"WEAK - accruals are doing the work",IF(B32<1,"ACCEPTABLE - monitor working capital","STRONG - profit is arriving in cash")))',
      },

      { cell: 'A35', v: 'Net Cash used in Investing' }, { cell: 'B35', v: -46 },
      { cell: 'A36', v: 'Net Cash from Financing' }, { cell: 'B36', v: 55 },
      { cell: 'A37', v: 'Net Change in Cash' }, { cell: 'B37', f: 'B20+B35+B36' },
      { cell: 'A38', v: 'Opening Cash' }, { cell: 'B38', v: 11 },
      { cell: 'A39', v: 'Closing Cash' }, { cell: 'B39', f: 'B38+B37' },
      {
        cell: 'A40', v: 'FUNDING FLAG',
      },
      {
        cell: 'B40',
        f: 'IF(AND(B20<0,B36>0),"Operations funded by lenders, not by customers","Operations self-funding")',
      },
    ],
  },

  objectives: {
    en: [
      'Explain why operating cash flow resists manipulation better than net profit, and state precisely where it can still be manipulated.',
      'Separate the operating, investing and financing sections and state what a company is telling you when the sign of each one changes.',
      'Reconcile net profit to net operating cash flow line by line under the indirect method, showing every adjustment.',
      'Compute NOCF per share, free cash flow, the accruals ratio and cash conversion, and use them to rank two companies reporting identical profit.',
      'Recognise the DSE pattern in which reported profit is funded by lenders rather than by customers, and reject it.',
    ],
    bn: [
      'কেন পরিচালন নগদ প্রবাহ নিট মুনাফার চেয়ে ভালোভাবে কারসাজি প্রতিরোধ করে তা ব্যাখ্যা করা, এবং কোথায় এটি এখনো কারসাজিযোগ্য তা নির্ভুলভাবে বলা।',
      'পরিচালন, বিনিয়োগ ও অর্থায়ন অংশ পৃথক করা এবং প্রতিটির চিহ্ন বদলালে কোম্পানি আপনাকে কী বলছে তা বলা।',
      'পরোক্ষ পদ্ধতিতে নিট মুনাফা থেকে নিট পরিচালন নগদ প্রবাহে লাইনে লাইনে সমন্বয় করা, প্রতিটি সমন্বয় দেখিয়ে।',
      'NOCF per share, free cash flow, accruals ratio ও cash conversion গণনা করা, এবং একই মুনাফা প্রতিবেদনকারী দুটি কোম্পানিকে সেগুলো দিয়ে ক্রমবদ্ধ করা।',
      'যে ডিএসই ধরনটিতে প্রতিবেদিত মুনাফা ক্রেতার নয় বরং ঋণদাতার টাকায় অর্থায়িত, তা চিনে নেওয়া এবং বাতিল করা।',
    ],
  },

  blocks: {
    theory: {
      en: `Chapter 10 established that the income statement is a statement of flow built on judgement. Chapter 11 established that the balance sheet is a statement of position that balances by construction and therefore proves nothing. This chapter is where those two statements are cross-examined.

The cash flow statement, required under **IAS 7 as adopted in Bangladesh**, records one thing: **money that actually entered or left the company's bank accounts during the period.** Not sales recognised. Not expenses matched. Money.

### Why cash resists manipulation better than profit

Profit is an opinion. Cash is a fact.

That formulation is a cliché precisely because it is structurally true. Consider what management must decide before it can report a profit figure: when revenue is earned, how much inventory is obsolete, what proportion of receivables will never be collected, how long an asset will last, whether a lawsuit needs a provision. **Every one of those is an estimate, every one of them moves profit, and none of them moves cash.**

Cash has no estimate in it. A taka either arrived in the account or it did not. The bank statement is prepared by a third party with no interest in the company's share price, and the auditor can confirm the closing balance by writing to the bank.

**This is why the cash flow statement is the single most useful of the three statements on the DSE, and the least read.**

Now state the limits honestly, because a textbook that oversells this will teach you a new complacency in place of the old one.

**1. The total is a fact; the classification is a choice.** Whether an outflow sits in operating, investing or financing changes NOCF without changing the bank balance. Capitalising an expense — treating a cost as an asset — moves it from the operating section into the investing section. NOCF rises. Cash is unchanged. This is the principal manipulation available.

**2. Timing at the reporting date is manageable.** Delaying supplier payments by two weeks over 31 December inflates closing operating cash. Chasing customers unusually hard in the last fortnight does the same. Both reverse in January. Neither is illegal.

**3. Cash can be raised rather than earned.** A company that borrows BDT 72 crore has cash. It does not have earnings. The three-section structure exists precisely so you can tell the difference, and most investors never look past the total.

**The lesson is not that cash flow cannot be manipulated. The lesson is that manipulating it requires either a reclassification you can see in the notes or a timing trick that unwinds within weeks — whereas profit can be manipulated indefinitely by an estimate nobody can audit to a single number.**

### The three sections

IAS 7 requires cash flows to be classified into three activities. Read them as three separate questions.

| Section | The question it answers | Healthy sign |
|---|---|---|
| **Operating** | Does the core business generate cash from customers? | Positive, large, and stable relative to profit |
| **Investing** | Is the company buying or selling productive capacity? | Negative — a growing company spends on assets |
| **Financing** | Is the company raising money or returning it? | Negative for a mature company paying dividends and repaying debt |

**Operating activities** cover cash received from customers, cash paid to suppliers and employees, interest paid, and income tax paid. Under IAS 7 there is a policy choice on where interest and dividends sit; Bangladeshi listed companies overwhelmingly place interest paid and tax paid inside operating. Check, because the choice changes NOCF materially for a leveraged company.

**Investing activities** cover purchases and disposals of property, plant and equipment, purchases and sales of investments, and interest and dividends received. The purchase line is **capital expenditure**, and it is the input to free cash flow.

**Financing activities** cover proceeds from and repayments of borrowings, proceeds from share issues and rights issues, and dividends paid.

**The signs matter more than the amounts.** A company with negative operating cash flow, negative investing cash flow and large positive financing cash flow is a company whose lenders and shareholders are paying for its operations and its expansion simultaneously. That configuration is not growth. It is a burn rate with a bank behind it, and it appears repeatedly on the DSE small- and mid-cap boards.

### Direct versus indirect method

IAS 7 permits two presentations of the operating section.

The **direct method** lists actual cash categories: cash received from customers, cash paid to suppliers, cash paid to employees. It is far more informative and almost nobody uses it, because preparing it requires a cash-basis ledger that most companies do not maintain.

The **indirect method** starts from profit before tax and adjusts backwards to cash. Essentially every Bangladeshi listed company uses it.

The indirect method is worth understanding precisely because it is a reconciliation. It does not merely report cash — **it shows you, line by line, exactly where reported profit and reported cash diverged.** That reconciliation is the analytical content. A direct-method statement tells you the answer; an indirect-method statement tells you the reason.

The structure is fixed:

1. Start with **profit before tax**.
2. Add back **non-cash charges**: depreciation, amortisation, impairment, provisions, loss on disposal.
3. Deduct **non-cash gains**: gain on disposal, fair value gains, interest income (which is reclassified to investing).
4. Add back **finance cost**, because interest paid is shown separately below.
5. Adjust for **movements in working capital**.
6. Deduct **interest actually paid** and **income tax actually paid**.
7. The result is **net operating cash flow (NOCF)**.

### Working capital: the step where the truth arrives

Steps 2 to 4 are mechanical. Step 5 is where a company's real condition becomes visible.

The rule is simple and worth memorising in its plain form:

- **An asset going up consumes cash.** Receivables rise: you sold, you booked profit, no money came. Inventory rises: you paid for goods still sitting in the warehouse.
- **A liability going up releases cash.** Payables rise: you took the goods and have not paid yet. You are financing yourself with your suppliers' money.

Chapter 11 said that inventory and receivables are the two balance sheet lines most commonly overstated on the DSE. **This is where that overstatement becomes arithmetically undeniable.** A company that inflates profit by refusing to write down inventory shows the inflated inventory as a working capital outflow here. A company that recognises revenue it will never collect shows the receivable build as an outflow here. The lie appears in the profit line and reappears, with the opposite sign, seven lines below.

**It cannot be hidden in both places at once.** That is the whole reason to read this statement.

### NOCF per share — the number Bangladesh quotes

$$\\text{NOCF per share} = \\frac{\\text{Net Operating Cash Flow}}{\\text{Ordinary Shares Outstanding}}$$

NOCF per share is disclosed in every Bangladeshi quarterly and annual report and quoted in every brokerage note, sitting directly beside EPS. It is one of the few genuinely useful disclosure conventions on this exchange, and the reason is presentational: **the two numbers are printed next to each other, so the gap between them is impossible to miss if you look.**

Most investors do not look. They read EPS and stop.

The comparison is the entire point:

- **EPS is what management says the year produced.**
- **NOCF per share is what the year deposited.**

A company reporting EPS of BDT 5.00 and NOCF per share of −BDT 1.50 has told you, in its own audited disclosure, that it earned nothing in cash. It has told you this on the same page as the number the market quoted.

One caution. NOCF per share is not directly comparable to EPS as a valuation multiple, because NOCF is struck before capital expenditure while EPS is struck after depreciation. A capital-intensive company will show NOCF per share well above EPS in a normal year, and this is not a quality signal — it is the depreciation add-back. **Use the two together to test direction and sign, not to compute a price multiple.** For a multiple, use free cash flow.

### The accruals gap

The difference between reported profit and operating cash flow is the **accruals gap**. Accruals are not fraud; they are the mechanism of accrual accounting, and in any given year they will be non-zero.

$$\\text{Accruals Ratio} = \\frac{\\text{Net Profit} - \\text{NOCF}}{\\text{Total Assets}} \\times 100$$

What matters is size, sign and persistence.

A **small** gap in either direction is normal. A **large positive** gap — profit far above cash — means the profit consists of assets: receivables, inventory, capitalised costs. A large positive gap **that persists for three years** is the single strongest published warning available about a Bangladeshi listed company, because working capital cannot expand forever. Either the receivables convert, or they are eventually written off, and the write-off arrives as one large "exceptional item" long after you bought the share.

Above roughly 10% of total assets, treat reported profit as unproven. Above 5%, demand an explanation and check whether the same gap appeared last year.

### Free cash flow

$$\\text{FCF} = \\text{NOCF} - \\text{Capital Expenditure}$$

NOCF is measured before the company spends on the assets it needs to keep operating. **Free cash flow is the money left after the business has been maintained** — the only cash genuinely available for dividends, debt repayment, or reinvestment in growth.

Negative free cash flow is not automatically bad. A genuinely expanding company with strong NOCF and heavy capex is investing, and Chapter 17 will value exactly that pattern. **Negative free cash flow driven by negative NOCF is a different animal entirely.** In that case the company is not investing out of earnings; it is investing out of borrowings, while its operations consume cash. Every taka of expansion increases the amount of external funding it must obtain next year.

And that returns you to Chapter 11's conclusion. A company that must borrow to operate is a company whose survival depends on a credit committee it does not sit on. **The cash flow statement is where you find that out a year before the balance sheet forces the issue.**`,
      bn: `অধ্যায় ১০ প্রতিষ্ঠা করেছে যে আয় বিবরণী বিচারের ওপর গড়া একটি প্রবাহের বিবরণ। অধ্যায় ১১ প্রতিষ্ঠা করেছে যে স্থিতিপত্র এমন একটি অবস্থানের বিবরণ যা গঠনগতভাবেই মেলে এবং তাই কিছুই প্রমাণ করে না। এই অধ্যায়েই ঐ দুটি বিবরণীকে জেরা করা হয়।

নগদ প্রবাহ বিবরণী, যা **বাংলাদেশে গৃহীত IAS 7** অনুযায়ী বাধ্যতামূলক, একটি জিনিসই নথিবদ্ধ করে: **সময়কালজুড়ে কোম্পানির ব্যাংক হিসাবে প্রকৃতপক্ষে যে টাকা ঢুকেছে বা বেরিয়েছে।** স্বীকৃত বিক্রয় নয়। মিলানো ব্যয় নয়। টাকা।

### নগদ কেন মুনাফার চেয়ে ভালো কারসাজি প্রতিরোধ করে

মুনাফা একটি মতামত। নগদ একটি ঘটনা।

কথাটি বহুল ব্যবহৃত ঠিক এ কারণেই যে এটি কাঠামোগতভাবে সত্য। একটি মুনাফার অঙ্ক প্রতিবেদন করার আগে ব্যবস্থাপনাকে কী কী সিদ্ধান্ত নিতে হয় ভাবুন: রাজস্ব কখন অর্জিত হলো, কতটা মজুদ অপ্রচলিত, প্রাপ্যের কত অংশ কখনো আদায় হবে না, একটি সম্পদ কত দিন টিকবে, কোনো মামলার জন্য সঞ্চিতি দরকার কি না। **এর প্রতিটিই একটি নিরূপণ, প্রতিটিই মুনাফা নাড়ায়, আর কোনোটিই নগদ নাড়ায় না।**

নগদে কোনো নিরূপণ নেই। একটি টাকা হয় হিসাবে ঢুকেছে, নয়তো ঢোকেনি। ব্যাংক বিবরণী তৈরি করে এমন একটি তৃতীয় পক্ষ যার কোম্পানির শেয়ারদরে কোনো স্বার্থ নেই, আর নিরীক্ষক ব্যাংকে চিঠি লিখে সমাপনী স্থিতি নিশ্চিত করতে পারেন।

**এ কারণেই ডিএসই-তে তিনটি বিবরণীর মধ্যে নগদ প্রবাহ বিবরণীই একক সবচেয়ে কার্যকর, এবং সবচেয়ে কম পঠিত।**

এবার সীমাগুলো সৎভাবে বলুন, কারণ যে পাঠ্যবই এটিকে অতিরিক্ত বিক্রি করে, তা পুরনো আত্মতুষ্টির জায়গায় আপনাকে নতুন একটি আত্মতুষ্টি শেখায়।

**১. সমষ্টিটি একটি ঘটনা; শ্রেণিবিভাজনটি একটি পছন্দ।** কোনো বহিঃপ্রবাহ পরিচালন, বিনিয়োগ না অর্থায়নে বসবে — তা ব্যাংক স্থিতি না বদলে NOCF বদলে দেয়। ব্যয়কে মূলধনীকরণ — অর্থাৎ একটি খরচকে সম্পদ গণ্য করা — একে পরিচালন অংশ থেকে বিনিয়োগ অংশে সরিয়ে দেয়। NOCF বাড়ে। নগদ অপরিবর্তিত। এটিই প্রধান কারসাজি।

**২. প্রতিবেদন তারিখে সময় ব্যবস্থাপনাযোগ্য।** ৩১ ডিসেম্বরের ওপর দিয়ে সরবরাহকারীর পাওনা দুই সপ্তাহ পিছিয়ে দিলে সমাপনী পরিচালন নগদ স্ফীত হয়। শেষ পনেরো দিনে ক্রেতাদের অস্বাভাবিক চাপ দিলেও একই ফল। দুটোই জানুয়ারিতে উল্টে যায়। কোনোটিই অবৈধ নয়।

**৩. নগদ অর্জনের বদলে সংগ্রহ করা যায়।** যে কোম্পানি ৭২ কোটি টাকা ধার করে তার নগদ থাকে। আয় থাকে না। তিন-অংশের কাঠামোটি ঠিক এ কারণেই আছে যাতে আপনি পার্থক্যটি বুঝতে পারেন, আর বেশিরভাগ বিনিয়োগকারী সমষ্টির পরে কখনো তাকান না।

**শিক্ষাটি এই নয় যে নগদ প্রবাহে কারসাজি করা যায় না। শিক্ষাটি হলো, এতে কারসাজি করতে হয় হয় এমন একটি পুনঃশ্রেণিবিভাজন লাগে যা আপনি নোটে দেখতে পাবেন, নয়তো এমন একটি সময়-কৌশল যা কয়েক সপ্তাহেই খুলে যায় — অথচ মুনাফায় অনির্দিষ্টকাল কারসাজি করা যায় এমন একটি নিরূপণ দিয়ে যাকে কেউ একটিমাত্র সংখ্যায় নিরীক্ষা করতে পারে না।**

### তিনটি অংশ

IAS 7 অনুযায়ী নগদ প্রবাহ তিনটি কার্যক্রমে শ্রেণিবদ্ধ করতে হয়। এগুলোকে তিনটি পৃথক প্রশ্ন হিসেবে পড়ুন।

| অংশ | যে প্রশ্নের উত্তর দেয় | সুস্থ চিহ্ন |
|---|---|---|
| **পরিচালন** | মূল ব্যবসা কি ক্রেতাদের কাছ থেকে নগদ তৈরি করে? | ধনাত্মক, বড়, এবং মুনাফার তুলনায় স্থিতিশীল |
| **বিনিয়োগ** | কোম্পানি কি উৎপাদন সক্ষমতা কিনছে না বেচছে? | ঋণাত্মক — বর্ধনশীল কোম্পানি সম্পদে খরচ করে |
| **অর্থায়ন** | কোম্পানি কি টাকা তুলছে না ফেরত দিচ্ছে? | পরিণত কোম্পানির জন্য ঋণাত্মক — লভ্যাংশ দিচ্ছে, ঋণ শোধ করছে |

**পরিচালন কার্যক্রম** অন্তর্ভুক্ত করে ক্রেতাদের কাছ থেকে প্রাপ্ত নগদ, সরবরাহকারী ও কর্মচারীদের প্রদত্ত নগদ, প্রদত্ত সুদ, এবং প্রদত্ত আয়কর। IAS 7-এ সুদ ও লভ্যাংশ কোথায় বসবে সে বিষয়ে নীতিগত পছন্দ আছে; বাংলাদেশি তালিকাভুক্ত কোম্পানিগুলো অপ্রতিরোধ্যভাবে প্রদত্ত সুদ ও প্রদত্ত কর পরিচালনের ভেতরে রাখে। যাচাই করুন, কারণ লিভারেজড কোম্পানির ক্ষেত্রে এই পছন্দ NOCF উল্লেখযোগ্যভাবে বদলে দেয়।

**বিনিয়োগ কার্যক্রম** অন্তর্ভুক্ত করে সম্পত্তি, প্ল্যান্ট ও যন্ত্রপাতির ক্রয় ও বিক্রয়, বিনিয়োগের ক্রয়-বিক্রয়, এবং প্রাপ্ত সুদ ও লভ্যাংশ। ক্রয়ের লাইনটিই **মূলধনী ব্যয় (capex)**, এবং এটিই free cash flow-এর উপাদান।

**অর্থায়ন কার্যক্রম** অন্তর্ভুক্ত করে ঋণের প্রাপ্তি ও পরিশোধ, শেয়ার ইস্যু ও রাইট ইস্যুর প্রাপ্তি, এবং প্রদত্ত লভ্যাংশ।

**অঙ্কের চেয়ে চিহ্নগুলো বেশি গুরুত্বপূর্ণ।** যে কোম্পানির পরিচালন নগদ প্রবাহ ঋণাত্মক, বিনিয়োগ নগদ প্রবাহ ঋণাত্মক এবং অর্থায়ন নগদ প্রবাহ বড় ধনাত্মক — সেই কোম্পানির পরিচালন ও সম্প্রসারণ দুটোরই দাম দিচ্ছে তার ঋণদাতা ও শেয়ারহোল্ডাররা। ঐ বিন্যাসটি প্রবৃদ্ধি নয়। এটি একটি ব্যাংক-সমর্থিত ক্ষয়হার, এবং ডিএসই-র ছোট ও মাঝারি বোর্ডে এটি বারবার দেখা যায়।

### প্রত্যক্ষ বনাম পরোক্ষ পদ্ধতি

IAS 7 পরিচালন অংশের দুটি উপস্থাপনা অনুমোদন করে।

**প্রত্যক্ষ পদ্ধতি** প্রকৃত নগদ শ্রেণিগুলো তালিকাবদ্ধ করে: ক্রেতাদের কাছ থেকে প্রাপ্ত নগদ, সরবরাহকারীদের প্রদত্ত নগদ, কর্মচারীদের প্রদত্ত নগদ। এটি অনেক বেশি তথ্যবহুল এবং প্রায় কেউই ব্যবহার করে না, কারণ এটি তৈরি করতে এমন একটি নগদভিত্তিক খতিয়ান লাগে যা বেশিরভাগ কোম্পানি রাখে না।

**পরোক্ষ পদ্ধতি** কর-পূর্ব মুনাফা থেকে শুরু করে পিছিয়ে নগদে পৌঁছায়। কার্যত প্রতিটি বাংলাদেশি তালিকাভুক্ত কোম্পানি এটিই ব্যবহার করে।

পরোক্ষ পদ্ধতি বোঝা মূল্যবান ঠিক এ কারণেই যে এটি একটি সমন্বয়-বিবরণ। এটি কেবল নগদ প্রতিবেদন করে না — **এটি আপনাকে লাইনে লাইনে দেখায় প্রতিবেদিত মুনাফা ও প্রতিবেদিত নগদ ঠিক কোথায় আলাদা হলো।** ঐ সমন্বয়টিই বিশ্লেষণী উপাদান। প্রত্যক্ষ পদ্ধতির বিবরণী আপনাকে উত্তর বলে; পরোক্ষ পদ্ধতির বিবরণী কারণ বলে।

কাঠামোটি নির্দিষ্ট:

১. **কর-পূর্ব মুনাফা** দিয়ে শুরু করুন।
২. **অ-নগদ খরচ** ফেরত যোগ করুন: অবচয়, অবলোপন, ক্ষয়, সঞ্চিতি, বিক্রয়ে ক্ষতি।
৩. **অ-নগদ আয়** বাদ দিন: বিক্রয়ে লাভ, ন্যায্য মূল্য লাভ, সুদ আয় (যা বিনিয়োগে পুনঃশ্রেণিবদ্ধ হয়)।
৪. **অর্থব্যয় (finance cost)** ফেরত যোগ করুন, কারণ প্রদত্ত সুদ নিচে আলাদাভাবে দেখানো হয়।
৫. **চলতি মূলধনের নড়াচড়া** সমন্বয় করুন।
৬. **প্রকৃতপক্ষে প্রদত্ত সুদ** ও **প্রকৃতপক্ষে প্রদত্ত আয়কর** বাদ দিন।
৭. ফলাফলই **নিট পরিচালন নগদ প্রবাহ (NOCF)**।

### চলতি মূলধন: যে ধাপে সত্য এসে পৌঁছায়

২ থেকে ৪ ধাপ যান্ত্রিক। ৫ নম্বর ধাপেই কোম্পানির প্রকৃত অবস্থা দৃশ্যমান হয়।

নিয়মটি সরল এবং সাদা ভাষায় মুখস্থ রাখার মতো:

- **সম্পদ বাড়লে নগদ খরচ হয়।** প্রাপ্য বাড়ল: আপনি বিক্রি করেছেন, মুনাফা লিখেছেন, টাকা আসেনি। মজুদ বাড়ল: গুদামে পড়ে থাকা পণ্যের দাম আপনি দিয়ে ফেলেছেন।
- **দায় বাড়লে নগদ ছাড়া পায়।** প্রদেয় বাড়ল: পণ্য নিয়েছেন, দাম দেননি। আপনি সরবরাহকারীর টাকায় নিজেকে অর্থায়ন করছেন।

অধ্যায় ১১ বলেছিল ডিএসই-তে মজুদ ও প্রাপ্যই সবচেয়ে বেশি বাড়িয়ে দেখানো দুটি স্থিতিপত্র লাইন। **এখানেই ঐ অতিরঞ্জন পাটিগাণিতিকভাবে অস্বীকার-অযোগ্য হয়ে ওঠে।** যে কোম্পানি মজুদ অবলোপন না করে মুনাফা স্ফীত করে, স্ফীত মজুদটি এখানে চলতি মূলধন বহিঃপ্রবাহ হিসেবে দেখায়। যে কোম্পানি কখনো আদায় না হওয়া রাজস্ব স্বীকৃতি দেয়, প্রাপ্যের বৃদ্ধিটি এখানে বহিঃপ্রবাহ হিসেবে দেখায়। মিথ্যাটি মুনাফার লাইনে দেখা দেয় এবং সাত লাইন নিচে বিপরীত চিহ্ন নিয়ে আবার দেখা দেয়।

**দুই জায়গায় একসঙ্গে এটি লুকানো যায় না।** এই বিবরণী পড়ার পুরো কারণ এটিই।

### NOCF per share — বাংলাদেশ যে সংখ্যাটি উদ্ধৃত করে

$$\\text{NOCF per share} = \\frac{\\text{নিট পরিচালন নগদ প্রবাহ}}{\\text{বকেয়া সাধারণ শেয়ার}}$$

NOCF per share প্রতিটি বাংলাদেশি ত্রৈমাসিক ও বার্ষিক প্রতিবেদনে প্রকাশিত হয় এবং প্রতিটি ব্রোকারেজ নোটে উদ্ধৃত হয়, ঠিক EPS-এর পাশে বসে। এটি এই এক্সচেঞ্জের হাতেগোনা সত্যিকারের কার্যকর প্রকাশনা-প্রথার একটি, আর কারণটি উপস্থাপনাগত: **সংখ্যা দুটি পাশাপাশি ছাপা হয়, তাই তাকালে এদের ব্যবধান এড়ানো অসম্ভব।**

বেশিরভাগ বিনিয়োগকারী তাকান না। তাঁরা EPS পড়ে থেমে যান।

তুলনাটিই পুরো বিষয়:

- **EPS হলো ব্যবস্থাপনা যা বলছে বছরটি তৈরি করেছে।**
- **NOCF per share হলো বছরটি যা জমা দিয়েছে।**

যে কোম্পানি ৫.০০ টাকা EPS এবং −১.৫০ টাকা NOCF per share প্রতিবেদন করে, সে তার নিজের নিরীক্ষিত প্রকাশনায় আপনাকে বলেছে যে সে নগদে কিছুই আয় করেনি। বাজার যে সংখ্যাটি উদ্ধৃত করেছে, তার একই পাতায় সে এ কথা বলেছে।

একটি সতর্কতা। NOCF per share মূল্যায়ন গুণিতক হিসেবে EPS-এর সঙ্গে সরাসরি তুলনীয় নয়, কারণ NOCF নির্ধারিত হয় মূলধনী ব্যয়ের আগে, আর EPS নির্ধারিত হয় অবচয়ের পরে। মূলধন-নিবিড় কোম্পানি স্বাভাবিক বছরেও EPS-এর অনেক ওপরে NOCF per share দেখাবে, আর এটি গুণমানের সংকেত নয় — এটি অবচয়ের ফেরত-যোগ। **দুটিকে একসঙ্গে ব্যবহার করুন দিক ও চিহ্ন যাচাই করতে, মূল্য গুণিতক গণনা করতে নয়।** গুণিতকের জন্য free cash flow ব্যবহার করুন।

### সঞ্চিতি-ব্যবধান (accruals gap)

প্রতিবেদিত মুনাফা ও পরিচালন নগদ প্রবাহের পার্থক্যই **accruals gap**। সঞ্চিতি জালিয়াতি নয়; এটি সঞ্চিতিভিত্তিক হিসাববিজ্ঞানের কৌশল, এবং যেকোনো বছরেই এটি শূন্য হবে না।

$$\\text{Accruals Ratio} = \\frac{\\text{নিট মুনাফা} - \\text{NOCF}}{\\text{মোট সম্পদ}} \\times 100$$

যা গুরুত্বপূর্ণ তা হলো আকার, চিহ্ন ও স্থায়িত্ব।

যেকোনো দিকে **ছোট** ব্যবধান স্বাভাবিক। **বড় ধনাত্মক** ব্যবধান — নগদের অনেক ওপরে মুনাফা — মানে মুনাফাটি সম্পদ দিয়ে গঠিত: প্রাপ্য, মজুদ, মূলধনীকৃত খরচ। **টানা তিন বছর টিকে থাকা** বড় ধনাত্মক ব্যবধান একটি বাংলাদেশি তালিকাভুক্ত কোম্পানি সম্পর্কে প্রকাশিত সবচেয়ে শক্তিশালী সতর্কবার্তা, কারণ চলতি মূলধন অনন্তকাল বাড়তে পারে না। হয় প্রাপ্য নগদে রূপান্তরিত হবে, নয়তো একদিন অবলোপন হবে — আর অবলোপনটি আসে আপনি শেয়ার কেনার অনেক পরে, একটিমাত্র বড় "ব্যতিক্রমী দফা" হিসেবে।

মোট সম্পদের মোটামুটি ১০%-এর ওপরে হলে প্রতিবেদিত মুনাফাকে অপ্রমাণিত গণ্য করুন। ৫%-এর ওপরে হলে ব্যাখ্যা দাবি করুন এবং গত বছরও একই ব্যবধান ছিল কি না দেখুন।

### Free cash flow

$$\\text{FCF} = \\text{NOCF} - \\text{মূলধনী ব্যয়}$$

NOCF পরিমাপ করা হয় কোম্পানি চালু রাখতে প্রয়োজনীয় সম্পদে খরচ করার আগে। **Free cash flow হলো ব্যবসাটি রক্ষণাবেক্ষণের পর অবশিষ্ট টাকা** — একমাত্র নগদ যা লভ্যাংশ, ঋণ পরিশোধ বা প্রবৃদ্ধিতে পুনর্বিনিয়োগের জন্য সত্যিই উপলব্ধ।

ঋণাত্মক free cash flow আপনাআপনি খারাপ নয়। শক্তিশালী NOCF ও ভারী capex-সহ সত্যিকারের বর্ধনশীল কোম্পানি বিনিয়োগ করছে, আর অধ্যায় ১৭ ঠিক ঐ ধরনটিরই মূল্যায়ন করবে। **ঋণাত্মক NOCF-চালিত ঋণাত্মক free cash flow সম্পূর্ণ ভিন্ন প্রাণী।** সেক্ষেত্রে কোম্পানি আয় থেকে বিনিয়োগ করছে না; সে ঋণ থেকে বিনিয়োগ করছে, অথচ তার পরিচালন নগদ খেয়ে ফেলছে। সম্প্রসারণের প্রতিটি টাকা পরের বছর তার প্রয়োজনীয় বাহ্যিক অর্থায়নের পরিমাণ বাড়ায়।

আর এটি আপনাকে অধ্যায় ১১-এর সিদ্ধান্তে ফিরিয়ে নেয়। যে কোম্পানিকে চলার জন্য ধার করতে হয়, তার বেঁচে থাকা নির্ভর করে এমন একটি ঋণ কমিটির ওপর যেখানে সে বসে না। **নগদ প্রবাহ বিবরণীতেই আপনি তা জানতে পারেন — স্থিতিপত্র বিষয়টি অনিবার্য করে তোলার এক বছর আগে।**`,
    },

    simple: {
      en: `Profit is what the company says it made. Cash is what actually turned up in the bank.

They are not the same number, and on the DSE they are sometimes not even the same sign.

### How a company earns BDT 40 crore and ends the year with less money

Suppose a company sells BDT 620 crore of goods this year. It records the sales. It subtracts costs. It reports a profit of BDT 40 crore. All of that is legitimate accounting.

Now ask a different question. **Did the customers pay?**

Some did. Many did not — they took the goods and promised to pay later. The company also bought a lot of raw material that is still sitting in the warehouse, unsold. Both of those are money out with nothing back yet.

Add them up and the company that "made BDT 40 crore" actually **had BDT 12 crore less in the bank at the end of the year than it had at the start, from operations alone.**

Nobody lied. The profit is real in accounting terms. **It is just not money.**

### The three questions the statement answers

Read the cash flow statement as three lines, and read their plus and minus signs before you read anything else.

| Section | Plain question | What you want to see |
|---|---|---|
| Operating | Did customers pay us? | A big plus |
| Investing | Did we buy machines and buildings? | A minus (that is normal) |
| Financing | Did we borrow, or did we repay? | A minus for a healthy mature company |

**The dangerous pattern is minus, minus, big plus.** Operations losing cash, buying assets anyway, and a large positive financing line covering both. Translated into a sentence: *our customers are not funding us, our bank is.*

### Two companies, same profit

| | Company A | Company B |
|---|---|---|
| Reported profit | BDT 40 cr | BDT 40 cr |
| EPS | BDT 5.00 | BDT 5.00 |
| Cash from operations | +BDT 52 cr | **−BDT 12 cr** |
| NOCF per share | BDT 6.50 | **−BDT 1.50** |
| Did it borrow this year? | No, it repaid | Yes, BDT 72 crore |

**Every screener in Bangladesh shows these two companies as identical.** Same EPS, and if they trade at the same price, the same P/E. A retail investor comparing them on the DSE website sees no difference whatsoever.

One of them collected its money. The other one did not, and borrowed BDT 72 crore to cover the hole.

### The one habit to build

The DSE-mandated disclosure prints **EPS** and **NOCF per share** next to each other. You do not need a spreadsheet. You need to look at the second number.

Ask one question:

**"Is NOCF per share positive, and is it in the same neighbourhood as EPS?"**

If NOCF per share is negative while EPS is positive, stop. Do not look for a reason to proceed. **The company has already told you, in an audited document, that its profit did not arrive as money.**

Do this for three consecutive years. One bad year can be a genuine expansion. Three is a business model.`,
      bn: `মুনাফা হলো কোম্পানি যা বলছে সে করেছে। নগদ হলো ব্যাংকে প্রকৃতপক্ষে যা এসেছে।

এরা একই সংখ্যা নয়, আর ডিএসই-তে মাঝেমধ্যে এদের চিহ্নও এক নয়।

### একটি কোম্পানি কীভাবে ৪০ কোটি টাকা আয় করে বছর শেষে কম টাকা নিয়ে দাঁড়ায়

ধরুন একটি কোম্পানি এ বছর ৬২০ কোটি টাকার পণ্য বেচল। সে বিক্রয়গুলো লিখল। ব্যয় বাদ দিল। ৪০ কোটি টাকা মুনাফা প্রতিবেদন করল। এর সবটাই বৈধ হিসাব।

এবার অন্য একটি প্রশ্ন করুন। **ক্রেতারা কি টাকা দিয়েছেন?**

কেউ কেউ দিয়েছেন। অনেকে দেননি — তাঁরা পণ্য নিয়েছেন এবং পরে দেবেন বলেছেন। কোম্পানি প্রচুর কাঁচামালও কিনেছে যা এখনো গুদামে অবিক্রীত পড়ে আছে। দুটোই টাকা বেরিয়ে যাওয়া, বিনিময়ে এখনো কিছু নয়।

সব যোগ করলে যে কোম্পানি "৪০ কোটি টাকা কামিয়েছে", তার ব্যাংকে বছর শেষে কেবল পরিচালন থেকেই **শুরুর চেয়ে ১২ কোটি টাকা কম** ছিল।

কেউ মিথ্যা বলেনি। হিসাবের ভাষায় মুনাফাটি বাস্তব। **এটি কেবল টাকা নয়।**

### বিবরণীটি যে তিনটি প্রশ্নের উত্তর দেয়

নগদ প্রবাহ বিবরণীকে তিনটি লাইন হিসেবে পড়ুন, আর অন্য কিছু পড়ার আগে এদের যোগ-বিয়োগ চিহ্ন পড়ুন।

| অংশ | সাদা প্রশ্ন | যা দেখতে চান |
|---|---|---|
| পরিচালন | ক্রেতারা কি আমাদের টাকা দিয়েছেন? | বড় একটি যোগ |
| বিনিয়োগ | আমরা কি যন্ত্র ও ভবন কিনেছি? | একটি বিয়োগ (এটিই স্বাভাবিক) |
| অর্থায়ন | আমরা কি ধার করেছি, না শোধ করেছি? | সুস্থ পরিণত কোম্পানির জন্য একটি বিয়োগ |

**বিপজ্জনক ধরনটি হলো বিয়োগ, বিয়োগ, বড় যোগ।** পরিচালন নগদ হারাচ্ছে, তবু সম্পদ কিনছে, আর একটি বড় ধনাত্মক অর্থায়ন লাইন দুটোই ঢাকছে। এক বাক্যে অনুবাদ করলে: *আমাদের ক্রেতারা আমাদের অর্থায়ন করছেন না, আমাদের ব্যাংক করছে।*

### দুটি কোম্পানি, একই মুনাফা

| | কোম্পানি ক | কোম্পানি খ |
|---|---|---|
| প্রতিবেদিত মুনাফা | ৪০ কোটি টাকা | ৪০ কোটি টাকা |
| EPS | ৫.০০ টাকা | ৫.০০ টাকা |
| পরিচালন থেকে নগদ | +৫২ কোটি টাকা | **−১২ কোটি টাকা** |
| NOCF per share | ৬.৫০ টাকা | **−১.৫০ টাকা** |
| এ বছর কি ধার করেছে? | না, শোধ করেছে | হ্যাঁ, ৭২ কোটি টাকা |

**বাংলাদেশের প্রতিটি স্ক্রিনার এই দুটি কোম্পানিকে অভিন্ন দেখায়।** একই EPS, আর একই দামে লেনদেন হলে একই P/E। ডিএসই ওয়েবসাইটে এদের তুলনা করা একজন খুচরা বিনিয়োগকারী কোনো পার্থক্যই দেখেন না।

এদের একটি তার টাকা আদায় করেছে। অন্যটি করেনি, এবং গর্তটি ঢাকতে ৭২ কোটি টাকা ধার করেছে।

### যে একটি অভ্যাস গড়তে হবে

ডিএসই-নির্দেশিত প্রকাশনা **EPS** ও **NOCF per share** পাশাপাশি ছাপে। আপনার কোনো স্প্রেডশিট লাগবে না। আপনাকে কেবল দ্বিতীয় সংখ্যাটির দিকে তাকাতে হবে।

একটি প্রশ্ন করুন:

**"NOCF per share কি ধনাত্মক, এবং এটি কি EPS-এর কাছাকাছি অঞ্চলে?"**

EPS ধনাত্মক অথচ NOCF per share ঋণাত্মক হলে থামুন। এগোনোর কারণ খুঁজবেন না। **কোম্পানি ইতিমধ্যেই একটি নিরীক্ষিত দলিলে আপনাকে বলে দিয়েছে যে তার মুনাফা টাকা হয়ে আসেনি।**

টানা তিন বছর এটি করুন। এক বছর খারাপ হওয়া সত্যিকারের সম্প্রসারণ হতে পারে। তিন বছর হলে সেটি ব্যবসায়িক মডেল।`,
    },

    example: {
      en: `### Jamuna Engineering Ltd — profit without money

All figures BDT crore, year ended 30 June. A composite, not a specific listed company, but the shape is common on the DSE engineering and mid-cap boards.

The company reports a good year. Revenue BDT 620 crore, up from BDT 505 crore. **Net profit after tax BDT 40 crore.** On 8 crore shares, **EPS BDT 5.00**. The press release calls it a record.

**Statement of Cash Flows — indirect method**

| A. Cash flows from operating activities | BDT cr |
|---|---|
| Profit before tax | 54 |
| Adjustments for: | |
| Depreciation and amortisation | 26 |
| Finance cost | 22 |
| Loss on disposal of PPE | 2 |
| Interest income | (3) |
| *Operating profit before working capital changes* | *101* |
| Changes in working capital: | |
| (Increase) in trade receivables | (62) |
| (Increase) in inventory | (33) |
| (Increase) in advances and prepayments | (4) |
| Increase in trade payables | 18 |
| *Net working capital change* | *(81)* |
| **Cash generated from operations** | **20** |
| Interest paid | (22) |
| Income tax paid | (10) |
| **NET CASH FROM OPERATING ACTIVITIES** | **(12)** |

| B. Cash flows from investing activities | BDT cr |
|---|---|
| Purchase of property, plant and equipment | (55) |
| Proceeds from disposal of PPE | 6 |
| Interest received | 3 |
| **NET CASH USED IN INVESTING** | **(46)** |

| C. Cash flows from financing activities | BDT cr |
|---|---|
| Net increase in short-term bank borrowings | 72 |
| Repayment of long-term loan | (9) |
| Dividend paid | (8) |
| **NET CASH FROM FINANCING** | **55** |

| Reconciliation | BDT cr |
|---|---|
| Net change in cash (A + B + C) | (3) |
| Cash at beginning of year | 11 |
| **Cash at end of year** | **8** |

### What the market sees

EPS **BDT 5.00**. Profit up. Revenue up 22.8%. Dividend paid. At a price of, say, BDT 60, the P/E is 12 — unremarkable, arguably cheap for a growing engineering company.

Every screener in the country passes it.

### What is actually there

Start at the top and follow the money.

Profit before tax was BDT 54 crore. Add back the non-cash charges and the finance cost and you get BDT 101 crore of operating profit before working capital. **So far the business looks strong.**

Then the working capital lines take BDT 81 crore out.

| Line | BDT cr | What it means |
|---|---|---|
| Trade receivables up | (62) | BDT 62 crore of this year's revenue is a promise, not money |
| Inventory up | (33) | BDT 33 crore paid for goods still in the warehouse |
| Advances up | (4) | Money already handed over |
| Trade payables up | 18 | BDT 18 crore of the bill pushed onto suppliers |

Cash generated from operations: **BDT 20 crore.** Then interest of BDT 22 crore and tax of BDT 10 crore are actually paid.

**Net operating cash flow: negative BDT 12 crore.**

The company that reported BDT 40 crore of profit **consumed BDT 12 crore of cash running its operations.**

### The two per-share numbers, side by side

| | BDT per share |
|---|---|
| EPS | 5.00 |
| NOCF per share | (1.50) |
| **Accrual gap per share** | **6.50** |

Both numbers are in the same audited annual report, on adjacent lines, published by the same company on the same day. **BDT 6.50 per share of reported earnings did not exist as money.**

### Where the cash actually came from

This is the part that settles the argument.

The company spent BDT 55 crore on new plant. Its operations produced nothing to spend. So it borrowed:

| | BDT cr |
|---|---|
| Cash consumed by operations | (12) |
| Cash spent on assets, net of disposals and interest received | (46) |
| **Total cash requirement** | **(58)** |
| Net new short-term bank borrowing | 72 |
| Long-term loan repaid | (9) |
| Dividend paid | (8) |
| **Financing provided** | **55** |
| **Shortfall met from cash balance** | **(3)** |

**Jamuna paid a BDT 8 crore dividend out of borrowed money.** It did not earn that dividend in cash. It raised BDT 72 crore of short-term bank borrowing and distributed part of it to shareholders while its operations were losing cash.

Chapter 11 established that short-term bank borrowing on a Bangladeshi balance sheet is a working capital line renewed every ninety or one hundred eighty days. **This company's dividend, its capital expenditure and its solvency all now depend on that line being renewed.**

### The quality metrics

| Metric | Value | Reading |
|---|---|---|
| Cash conversion (NOCF / Net profit) | **−0.30×** | Every taka of profit consumed 30 poisha of cash |
| Accruals ratio ((NP − NOCF) / Total assets) | **6.67%** | Above the 5% threshold — profit is unproven |
| Free cash flow (NOCF − capex) | **(BDT 67 cr)** | Must be raised externally to stand still |
| NOCF per share | **(BDT 1.50)** | Against EPS of BDT 5.00 |

### What it means, stated plainly

Jamuna Engineering is not necessarily a fraud. Every line here can be prepared in good faith, audited, and comply fully with IFRS as adopted in Bangladesh. There is a legitimate version of this story: a company winning large contracts, building inventory and extending credit to secure them, investing in capacity ahead of demand.

**But the legitimate version and the terminal version look identical for the first two years, and the difference between them is whether the receivables convert.**

What can be said without qualification is this. **The reported profit of BDT 40 crore is not, at this date, money.** It is BDT 62 crore of promises from customers and BDT 33 crore of goods in a warehouse, financed by BDT 72 crore of bank borrowing that must be renewed.

**The lesson is not that the profit is fake. The lesson is that the profit is a receivable, and receivables have a counterparty.** Chapter 5 taught you to name the party on the other side of your trade. Here you must name the party on the other side of the earnings — and you cannot, because the customers who owe Jamuna BDT 62 crore are not disclosed.

The retail investor who bought this at a P/E of 12 bought twelve years of a number that has not yet turned into money once.`,
      bn: `### যমুনা ইঞ্জিনিয়ারিং লিমিটেড — টাকা ছাড়া মুনাফা

সব অঙ্ক কোটি টাকায়, ৩০ জুন সমাপ্ত বছর। এটি একটি সমন্বিত উদাহরণ, নির্দিষ্ট কোনো তালিকাভুক্ত কোম্পানি নয়, তবে আকৃতিটি ডিএসই-র প্রকৌশল ও মাঝারি বোর্ডে সাধারণ।

কোম্পানি একটি ভালো বছর প্রতিবেদন করে। রাজস্ব ৬২০ কোটি টাকা, আগের ৫০৫ কোটি থেকে বেড়ে। **কর-পরবর্তী নিট মুনাফা ৪০ কোটি টাকা।** ৮ কোটি শেয়ারে **EPS ৫.০০ টাকা**। সংবাদ বিজ্ঞপ্তি একে রেকর্ড বলে।

**নগদ প্রবাহ বিবরণী — পরোক্ষ পদ্ধতি**

| ক. পরিচালন কার্যক্রম থেকে নগদ প্রবাহ | কোটি টাকা |
|---|---|
| কর-পূর্ব মুনাফা | ৫৪ |
| সমন্বয়: | |
| অবচয় ও অবলোপন | ২৬ |
| অর্থব্যয় (finance cost) | ২২ |
| PPE বিক্রয়ে ক্ষতি | ২ |
| সুদ আয় | (৩) |
| *চলতি মূলধন পরিবর্তনের পূর্বে পরিচালন মুনাফা* | *১০১* |
| চলতি মূলধনের পরিবর্তন: | |
| বাণিজ্যিক প্রাপ্যের (বৃদ্ধি) | (৬২) |
| মজুদের (বৃদ্ধি) | (৩৩) |
| অগ্রিম ও অগ্রপ্রদত্ত ব্যয়ের (বৃদ্ধি) | (৪) |
| বাণিজ্যিক প্রদেয়ের বৃদ্ধি | ১৮ |
| *নিট চলতি মূলধন পরিবর্তন* | *(৮১)* |
| **পরিচালন থেকে উদ্ভূত নগদ** | **২০** |
| প্রদত্ত সুদ | (২২) |
| প্রদত্ত আয়কর | (১০) |
| **পরিচালন কার্যক্রম থেকে নিট নগদ** | **(১২)** |

| খ. বিনিয়োগ কার্যক্রম থেকে নগদ প্রবাহ | কোটি টাকা |
|---|---|
| সম্পত্তি, প্ল্যান্ট ও যন্ত্রপাতি ক্রয় | (৫৫) |
| PPE বিক্রয় থেকে প্রাপ্তি | ৬ |
| প্রাপ্ত সুদ | ৩ |
| **বিনিয়োগে ব্যবহৃত নিট নগদ** | **(৪৬)** |

| গ. অর্থায়ন কার্যক্রম থেকে নগদ প্রবাহ | কোটি টাকা |
|---|---|
| স্বল্পমেয়াদি ব্যাংক ঋণের নিট বৃদ্ধি | ৭২ |
| দীর্ঘমেয়াদি ঋণ পরিশোধ | (৯) |
| প্রদত্ত লভ্যাংশ | (৮) |
| **অর্থায়ন থেকে নিট নগদ** | **৫৫** |

| সমন্বয় | কোটি টাকা |
|---|---|
| নগদের নিট পরিবর্তন (ক + খ + গ) | (৩) |
| বছরের শুরুতে নগদ | ১১ |
| **বছর শেষে নগদ** | **৮** |

### বাজার যা দেখে

EPS **৫.০০ টাকা**। মুনাফা বেড়েছে। রাজস্ব ২২.৮% বেড়েছে। লভ্যাংশ দেওয়া হয়েছে। ধরুন ৬০ টাকা দামে P/E ১২ — অসাধারণ কিছু নয়, বরং একটি বর্ধনশীল প্রকৌশল কোম্পানির জন্য সস্তা বলা যায়।

দেশের প্রতিটি স্ক্রিনার একে পাস করিয়ে দেয়।

### আসলে সেখানে কী আছে

ওপর থেকে শুরু করুন এবং টাকার পিছু নিন।

কর-পূর্ব মুনাফা ছিল ৫৪ কোটি টাকা। অ-নগদ খরচ ও অর্থব্যয় ফেরত যোগ করলে চলতি মূলধনের আগে পরিচালন মুনাফা দাঁড়ায় ১০১ কোটি টাকা। **এ পর্যন্ত ব্যবসাটি শক্তিশালী দেখায়।**

এরপর চলতি মূলধনের লাইনগুলো ৮১ কোটি টাকা বের করে নেয়।

| লাইন | কোটি টাকা | অর্থ |
|---|---|---|
| বাণিজ্যিক প্রাপ্য বেড়েছে | (৬২) | এ বছরের রাজস্বের ৬২ কোটি টাকা একটি প্রতিশ্রুতি, টাকা নয় |
| মজুদ বেড়েছে | (৩৩) | গুদামে পড়ে থাকা পণ্যের জন্য ৩৩ কোটি টাকা পরিশোধিত |
| অগ্রিম বেড়েছে | (৪) | টাকা ইতিমধ্যেই হস্তান্তরিত |
| বাণিজ্যিক প্রদেয় বেড়েছে | ১৮ | বিলের ১৮ কোটি টাকা সরবরাহকারীর ঘাড়ে ঠেলা |

পরিচালন থেকে উদ্ভূত নগদ: **২০ কোটি টাকা।** এরপর ২২ কোটি টাকা সুদ ও ১০ কোটি টাকা কর প্রকৃতপক্ষে পরিশোধ করা হয়।

**নিট পরিচালন নগদ প্রবাহ: ঋণাত্মক ১২ কোটি টাকা।**

যে কোম্পানি ৪০ কোটি টাকা মুনাফা প্রতিবেদন করেছে, সে **পরিচালন চালাতে ১২ কোটি টাকা নগদ খেয়ে ফেলেছে।**

### দুটি প্রতি-শেয়ার সংখ্যা, পাশাপাশি

| | টাকা প্রতি শেয়ার |
|---|---|
| EPS | ৫.০০ |
| NOCF per share | (১.৫০) |
| **প্রতি শেয়ারে সঞ্চিতি-ব্যবধান** | **৬.৫০** |

দুটি সংখ্যাই একই নিরীক্ষিত বার্ষিক প্রতিবেদনে, পাশাপাশি লাইনে, একই কোম্পানি একই দিনে প্রকাশ করেছে। **প্রতিবেদিত আয়ের প্রতি শেয়ারে ৬.৫০ টাকা টাকা হিসেবে অস্তিত্বহীন ছিল।**

### নগদ আসলে কোথা থেকে এলো

এই অংশটিই তর্ক মিটিয়ে দেয়।

কোম্পানি নতুন প্ল্যান্টে ৫৫ কোটি টাকা খরচ করেছে। তার পরিচালন খরচ করার মতো কিছুই তৈরি করেনি। তাই সে ধার করেছে:

| | কোটি টাকা |
|---|---|
| পরিচালনে ব্যয়িত নগদ | (১২) |
| সম্পদে ব্যয়িত নগদ, বিক্রয় ও প্রাপ্ত সুদ বাদে | (৪৬) |
| **মোট নগদ প্রয়োজন** | **(৫৮)** |
| নিট নতুন স্বল্পমেয়াদি ব্যাংক ঋণ | ৭২ |
| পরিশোধিত দীর্ঘমেয়াদি ঋণ | (৯) |
| প্রদত্ত লভ্যাংশ | (৮) |
| **প্রদত্ত অর্থায়ন** | **৫৫** |
| **নগদ স্থিতি থেকে মেটানো ঘাটতি** | **(৩)** |

**যমুনা ৮ কোটি টাকার লভ্যাংশ দিয়েছে ধার করা টাকা থেকে।** সে ঐ লভ্যাংশ নগদে অর্জন করেনি। সে ৭২ কোটি টাকার স্বল্পমেয়াদি ব্যাংক ঋণ তুলেছে এবং তার একটি অংশ শেয়ারহোল্ডারদের বিতরণ করেছে, অথচ তার পরিচালন নগদ হারাচ্ছিল।

অধ্যায় ১১ প্রতিষ্ঠা করেছে যে বাংলাদেশি স্থিতিপত্রে স্বল্পমেয়াদি ব্যাংক ঋণ হলো প্রতি নব্বই বা একশো আশি দিনে নবায়িত একটি চলতি মূলধন সীমা। **এই কোম্পানির লভ্যাংশ, তার মূলধনী ব্যয় এবং তার সচ্ছলতা — সবই এখন ঐ সীমাটি নবায়িত হওয়ার ওপর নির্ভরশীল।**

### গুণমানের পরিমাপ

| পরিমাপ | মান | পাঠ |
|---|---|---|
| Cash conversion (NOCF / নিট মুনাফা) | **−০.৩০×** | মুনাফার প্রতি টাকা ৩০ পয়সা নগদ খেয়েছে |
| Accruals ratio ((NP − NOCF) / মোট সম্পদ) | **৬.৬৭%** | ৫% সীমার ওপরে — মুনাফা অপ্রমাণিত |
| Free cash flow (NOCF − capex) | **(৬৭ কোটি টাকা)** | স্থির থাকতেও বাইরে থেকে তুলতে হবে |
| NOCF per share | **(১.৫০ টাকা)** | EPS ৫.০০ টাকার বিপরীতে |

### সাদা ভাষায় এর অর্থ

যমুনা ইঞ্জিনিয়ারিং অগত্যা জালিয়াতি নয়। এখানকার প্রতিটি লাইন সরল বিশ্বাসে প্রস্তুত হতে পারে, নিরীক্ষিত হতে পারে, এবং বাংলাদেশে গৃহীত IFRS পুরোপুরি মানতে পারে। এই গল্পের একটি বৈধ সংস্করণ আছে: একটি কোম্পানি বড় চুক্তি জিতছে, সেগুলো নিশ্চিত করতে মজুদ গড়ছে ও বাকিতে বেচছে, চাহিদার আগেই সক্ষমতায় বিনিয়োগ করছে।

**কিন্তু বৈধ সংস্করণ ও মারণ সংস্করণ প্রথম দুই বছর অভিন্ন দেখায়, আর এদের পার্থক্য কেবল একটিই — প্রাপ্যগুলো নগদে রূপান্তরিত হয় কি না।**

শর্তহীনভাবে যা বলা যায় তা এই। **৪০ কোটি টাকার প্রতিবেদিত মুনাফা এই তারিখে টাকা নয়।** এটি ক্রেতাদের কাছ থেকে ৬২ কোটি টাকার প্রতিশ্রুতি এবং গুদামে ৩৩ কোটি টাকার পণ্য, যা অর্থায়ন করেছে ৭২ কোটি টাকার ব্যাংক ঋণ — যা নবায়ন করতে হবে।

**শিক্ষাটি এই নয় যে মুনাফাটি নকল। শিক্ষাটি হলো মুনাফাটি একটি প্রাপ্য, আর প্রাপ্যের একটি প্রতিপক্ষ থাকে।** অধ্যায় ৫ আপনাকে শিখিয়েছিল আপনার লেনদেনের অন্য পাশের পক্ষটির নাম বলতে। এখানে আপনাকে আয়ের অন্য পাশের পক্ষটির নাম বলতে হবে — এবং আপনি পারবেন না, কারণ যমুনার কাছে যাঁরা ৬২ কোটি টাকা দেনা, তাঁদের নাম প্রকাশ করা হয়নি।

যে খুচরা বিনিয়োগকারী ১২ P/E-তে এটি কিনেছেন, তিনি এমন একটি সংখ্যার বারো বছর কিনেছেন যা একবারও টাকায় রূপান্তরিত হয়নি।`,
    },

    formula: {
      en: `**Net operating cash flow, indirect method.** The full chain, exactly as IAS 7 lays it out:

$$\\text{NOCF} = \\text{PBT} + \\text{NCC} + \\text{FC} - \\text{NCG} + \\Delta WC - \\text{IP} - \\text{TP}$$

where $\\text{PBT}$ is profit before tax, $\\text{NCC}$ non-cash charges (depreciation, amortisation, impairment, provisions, losses on disposal), $\\text{FC}$ finance cost added back, $\\text{NCG}$ non-cash gains and interest income, $\\Delta WC$ the net working capital movement, $\\text{IP}$ interest actually paid and $\\text{TP}$ tax actually paid.

**The working capital movement**, with the sign convention that matters:

$$\\Delta WC = -\\Delta\\text{Receivables} - \\Delta\\text{Inventory} - \\Delta\\text{Advances} + \\Delta\\text{Payables}$$

An operating asset rising consumes cash. An operating liability rising releases it. **Memorise the signs, because the single most common student error in this chapter is getting them backwards.**

**NOCF per share** — quoted beside EPS in every Bangladeshi disclosure:

$$\\text{NOCF per share} = \\frac{\\text{NOCF}}{N}$$

**The accrual gap per share** — the number nobody prints, and the one worth computing:

$$\\text{Accrual Gap per Share} = \\text{EPS} - \\text{NOCF per share}$$

**Free cash flow** — cash left after the business has been maintained:

$$\\text{FCF} = \\text{NOCF} - \\text{Capital Expenditure}$$

FCF is the correct numerator for a cash-based valuation multiple, and Chapter 17 builds discounted cash flow on it. NOCF is not, because it is struck before the company has paid for the assets it needs to exist next year.

**Accruals ratio** — the size of the gap, scaled so it is comparable across companies:

$$\\text{Accruals Ratio} = \\frac{\\text{Net Profit} - \\text{NOCF}}{\\text{Total Assets}} \\times 100$$

Total assets is the denominator rather than revenue because it scales with the balance sheet the accruals are accumulating on. Above 5%, demand an explanation. Above 10%, treat reported profit as unproven. **Three consecutive years above 5% is a finding, not a flag.**

**Cash conversion** — the same idea as a ratio rather than a difference:

$$\\text{Cash Conversion} = \\frac{\\text{NOCF}}{\\text{Net Profit}}$$

| Cash conversion | Reading |
|---|---|
| Above 1.0 | Profit is arriving in cash, plus depreciation add-back |
| 0.8 to 1.0 | Normal for a stable business |
| 0.5 to 0.8 | Working capital is absorbing cash — check whether it is growth or deterioration |
| 0 to 0.5 | Weak. The accruals are doing the work |
| Below 0 | Operations consumed cash. **Reject** |

Cash conversion is undefined and meaningless when net profit is near zero or negative — a company with BDT 1 crore of profit and BDT 20 crore of NOCF shows a conversion of 20×, which tells you nothing. **Use it only where profit is materially positive**, and fall back on the sign of NOCF otherwise.

**Capitalisation check** — the one manipulation that moves cash between sections without moving cash:

$$\\text{Capex Intensity} = \\frac{\\text{Capital Expenditure}}{\\text{Revenue}} \\times 100$$

A sharp rise in capex intensity alongside a sharp rise in NOCF, with no new plant commissioned, is the signature of an expense being reclassified as an asset. **NOCF improved and nothing happened.**

The discipline: **never quote EPS for a Bangladeshi company without quoting NOCF per share in the same breath,** exactly as Chapter 11 required $P/B$ never to be quoted without $P/TB$. The two disciplines are the same discipline applied to different statements.`,
      bn: `**নিট পরিচালন নগদ প্রবাহ, পরোক্ষ পদ্ধতি।** IAS 7 যেভাবে সাজায়, ঠিক সেই পূর্ণ শৃঙ্খল:

$$\\text{NOCF} = \\text{PBT} + \\text{NCC} + \\text{FC} - \\text{NCG} + \\Delta WC - \\text{IP} - \\text{TP}$$

যেখানে $\\text{PBT}$ কর-পূর্ব মুনাফা, $\\text{NCC}$ অ-নগদ খরচ (অবচয়, অবলোপন, ক্ষয়, সঞ্চিতি, বিক্রয়ে ক্ষতি), $\\text{FC}$ ফেরত-যোগ করা অর্থব্যয়, $\\text{NCG}$ অ-নগদ আয় ও সুদ আয়, $\\Delta WC$ নিট চলতি মূলধন নড়াচড়া, $\\text{IP}$ প্রকৃতপক্ষে প্রদত্ত সুদ এবং $\\text{TP}$ প্রকৃতপক্ষে প্রদত্ত কর।

**চলতি মূলধনের নড়াচড়া**, এবং যে চিহ্ন-প্রথাটি গুরুত্বপূর্ণ:

$$\\Delta WC = -\\Delta\\text{প্রাপ্য} - \\Delta\\text{মজুদ} - \\Delta\\text{অগ্রিম} + \\Delta\\text{প্রদেয}$$

পরিচালন সম্পদ বাড়লে নগদ খরচ হয়। পরিচালন দায় বাড়লে নগদ ছাড়া পায়। **চিহ্নগুলো মুখস্থ রাখুন, কারণ এই অধ্যায়ে শিক্ষার্থীদের একক সবচেয়ে সাধারণ ভুল হলো এগুলো উল্টে ফেলা।**

**NOCF per share** — প্রতিটি বাংলাদেশি প্রকাশনায় EPS-এর পাশে উদ্ধৃত:

$$\\text{NOCF per share} = \\frac{\\text{NOCF}}{N}$$

**প্রতি শেয়ারে সঞ্চিতি-ব্যবধান** — যে সংখ্যাটি কেউ ছাপে না, এবং যেটি গণনা করার মতো:

$$\\text{Accrual Gap per Share} = \\text{EPS} - \\text{NOCF per share}$$

**Free cash flow** — ব্যবসাটি রক্ষণাবেক্ষণের পর অবশিষ্ট নগদ:

$$\\text{FCF} = \\text{NOCF} - \\text{মূলধনী ব্যয়}$$

নগদভিত্তিক মূল্যায়ন গুণিতকের সঠিক লব হলো FCF, আর অধ্যায় ১৭ এর ওপরেই discounted cash flow গড়ে। NOCF নয়, কারণ পরের বছর টিকে থাকতে যে সম্পদ দরকার তার দাম দেওয়ার আগেই NOCF নির্ধারিত হয়।

**Accruals ratio** — ব্যবধানের আকার, কোম্পানির মধ্যে তুলনীয় করার মতো মাপে:

$$\\text{Accruals Ratio} = \\frac{\\text{নিট মুনাফা} - \\text{NOCF}}{\\text{মোট সম্পদ}} \\times 100$$

হরে রাজস্বের বদলে মোট সম্পদ, কারণ সঞ্চিতিগুলো যে স্থিতিপত্রের ওপর জমছে এটি তার সঙ্গেই মাপ বদলায়। ৫%-এর ওপরে হলে ব্যাখ্যা দাবি করুন। ১০%-এর ওপরে হলে প্রতিবেদিত মুনাফাকে অপ্রমাণিত গণ্য করুন। **টানা তিন বছর ৫%-এর ওপরে থাকা একটি সিদ্ধান্ত, নিছক সতর্কতা নয়।**

**Cash conversion** — একই ধারণা, পার্থক্যের বদলে অনুপাত আকারে:

$$\\text{Cash Conversion} = \\frac{\\text{NOCF}}{\\text{নিট মুনাফা}}$$

| Cash conversion | পাঠ |
|---|---|
| ১.০-এর ওপরে | মুনাফা নগদে আসছে, সঙ্গে অবচয়ের ফেরত-যোগ |
| ০.৮ – ১.০ | স্থিতিশীল ব্যবসার জন্য স্বাভাবিক |
| ০.৫ – ০.৮ | চলতি মূলধন নগদ শুষছে — এটি প্রবৃদ্ধি না অবনতি যাচাই করুন |
| ০ – ০.৫ | দুর্বল। কাজটি করছে সঞ্চিতি |
| ০-এর নিচে | পরিচালন নগদ খেয়েছে। **বাতিল** |

নিট মুনাফা শূন্যের কাছাকাছি বা ঋণাত্মক হলে cash conversion অসংজ্ঞায়িত ও অর্থহীন — ১ কোটি টাকা মুনাফা ও ২০ কোটি টাকা NOCF-ওয়ালা কোম্পানি ২০× রূপান্তর দেখায়, যা কিছুই বলে না। **কেবল সেখানেই ব্যবহার করুন যেখানে মুনাফা উল্লেখযোগ্যভাবে ধনাত্মক**, নইলে NOCF-এর চিহ্নেই ফিরে যান।

**মূলধনীকরণ যাচাই** — যে একটি কারসাজি নগদ না নাড়িয়ে অংশের মধ্যে নগদ সরায়:

$$\\text{Capex Intensity} = \\frac{\\text{মূলধনী ব্যয়}}{\\text{রাজস্ব}} \\times 100$$

কোনো নতুন প্ল্যান্ট চালু না হয়েও capex intensity-র তীব্র বৃদ্ধির পাশাপাশি NOCF-এর তীব্র বৃদ্ধি — এটিই একটি ব্যয়কে সম্পদ হিসেবে পুনঃশ্রেণিবদ্ধ করার স্বাক্ষর। **NOCF উন্নত হলো, অথচ কিছুই ঘটল না।**

শৃঙ্খলা: **কোনো বাংলাদেশি কোম্পানির EPS কখনো একই নিঃশ্বাসে NOCF per share না বলে উচ্চারণ করবেন না,** ঠিক যেমন অধ্যায় ১১ দাবি করেছিল $P/TB$ ছাড়া কখনো $P/B$ না বলতে। দুটি শৃঙ্খলা আসলে একই শৃঙ্খলা, ভিন্ন বিবরণীতে প্রয়োগ করা।`,
    },

    manual: {
      en: `**Scenario.** Jamuna Engineering Ltd, all figures BDT crore. Net profit after tax 40, income tax expense 14. Depreciation and amortisation 26, finance cost 22, loss on disposal of PPE 2, interest income 3. Trade receivables up 62, inventory up 33, advances and prepayments up 4, trade payables up 18. Interest actually paid 22, income tax actually paid 10. Capital expenditure 55, disposal proceeds 6, interest received 3. Net new short-term borrowing 72, long-term loan repaid 9, dividend paid 8. Opening cash 11. Total assets 780. Shares outstanding 8 crore. Revenue 620.

**Step 1 — Recover profit before tax.**

The statement starts above the tax line, so add the tax expense back to reported profit.

$$\\text{PBT} = 40 + 14 = 54$$

**Step 2 — Add back non-cash charges.**

Depreciation and amortisation reduced profit but no money left the company. The loss on disposal is an accounting entry comparing carrying amount to proceeds; the actual cash effect of the disposal belongs in the investing section.

$$54 + 26 + 2 = 82$$

**Step 3 — Add back finance cost.**

Interest expense is removed here and the cash interest actually paid is deducted separately in Step 7. The two are usually close but rarely identical.

$$82 + 22 = 104$$

**Step 4 — Deduct interest income.**

Interest income is real cash, but it is a return on investments, not on operations. It is reclassified to the investing section, so it must come out here to avoid counting it twice.

$$104 - 3 = 101$$

**Operating profit before working capital changes: BDT 101 crore.**

**Step 5 — Working capital movements.**

$$\\Delta WC = -62 - 33 - 4 + 18 = -81$$

| Movement | Effect on cash | BDT cr |
|---|---|---|
| Trade receivables up 62 | Asset up — cash consumed | (62) |
| Inventory up 33 | Asset up — cash consumed | (33) |
| Advances up 4 | Asset up — cash consumed | (4) |
| Trade payables up 18 | Liability up — cash released | 18 |
| **Net** | | **(81)** |

**Step 6 — Cash generated from operations.**

$$101 - 81 = 20$$

**Step 7 — Deduct interest and tax actually paid.**

$$20 - 22 - 10 = -12$$

**NET OPERATING CASH FLOW: negative BDT 12 crore.**

**Step 8 — Per-share comparison.**

$$\\text{EPS} = \\frac{40}{8} = \\text{BDT } 5.00$$
$$\\text{NOCF per share} = \\frac{-12}{8} = -\\text{BDT } 1.50$$
$$\\text{Accrual gap per share} = 5.00 - (-1.50) = \\text{BDT } 6.50$$

**Step 9 — Free cash flow.**

$$\\text{FCF} = -12 - 55 = -\\text{BDT } 67 \\text{ crore}$$

**Step 10 — Accruals ratio.**

$$\\frac{40 - (-12)}{780} \\times 100 = \\frac{52}{780} \\times 100 = 6.67\\%$$

**Step 11 — Cash conversion.**

$$\\frac{-12}{40} = -0.30\\times$$

**Step 12 — Close the loop through investing and financing.**

$$\\text{Investing} = -55 + 6 + 3 = -46$$
$$\\text{Financing} = 72 - 9 - 8 = 55$$
$$\\text{Net change in cash} = -12 - 46 + 55 = -3$$
$$\\text{Closing cash} = 11 - 3 = 8 \\;\\checkmark$$

**This final check is not optional.** The three sections must sum to the movement in the cash line on the balance sheet. If they do not, either you have mis-signed an adjustment or the statement itself does not tie — and a statement that does not tie is a finding of an entirely different order.

### Interpretation

Four numbers should stay with you.

**BDT 5.00 versus −BDT 1.50.** These describe the same company, the same twelve months, the same audited accounts. One of them is what the market quoted. It is not the one that arrived in the bank.

**BDT 81 crore.** The working capital movement is larger than profit before tax. **The entire operating performance of the year was decided in Step 5, not in the income statement.** A reader who stops at "operating profit before working capital changes: BDT 101 crore" gets exactly the wrong answer, and that line is printed in bold in most Bangladeshi annual reports.

**6.67%.** Two-thirds of the way to the 10% threshold at which reported profit should be treated as unproven, in a single year. Compute it for the two prior years before deciding whether this is expansion or drift.

**BDT 72 crore.** The net new short-term borrowing. Against operations that consumed BDT 12 crore and capex of BDT 55 crore, this is the number that made the year possible. **The dividend was paid out of it.** Strip the financing section out and the company ends the year BDT 58 crore short.

**The discipline:** compute NOCF *before* you compute any multiple. If you compute P/E first, you will anchor on 12× and spend the rest of the analysis defending a denominator that has not yet turned into money. Chapter 11 required tangible NAV before price-to-book, for the same reason and in the same order.`,
      bn: `**পরিস্থিতি।** যমুনা ইঞ্জিনিয়ারিং লিমিটেড, সব অঙ্ক কোটি টাকায়। কর-পরবর্তী নিট মুনাফা ৪০, আয়কর ব্যয় ১৪। অবচয় ও অবলোপন ২৬, অর্থব্যয় ২২, PPE বিক্রয়ে ক্ষতি ২, সুদ আয় ৩। বাণিজ্যিক প্রাপ্য বৃদ্ধি ৬২, মজুদ বৃদ্ধি ৩৩, অগ্রিম ও অগ্রপ্রদত্ত ব্যয় বৃদ্ধি ৪, বাণিজ্যিক প্রদেয় বৃদ্ধি ১৮। প্রকৃতপক্ষে প্রদত্ত সুদ ২২, প্রকৃতপক্ষে প্রদত্ত আয়কর ১০। মূলধনী ব্যয় ৫৫, বিক্রয় প্রাপ্তি ৬, প্রাপ্ত সুদ ৩। নিট নতুন স্বল্পমেয়াদি ঋণ ৭২, পরিশোধিত দীর্ঘমেয়াদি ঋণ ৯, প্রদত্ত লভ্যাংশ ৮। প্রারম্ভিক নগদ ১১। মোট সম্পদ ৭৮০। বকেয়া শেয়ার ৮ কোটি। রাজস্ব ৬২০।

**ধাপ ১ — কর-পূর্ব মুনাফা উদ্ধার করুন।**

বিবরণীটি কর লাইনের ওপর থেকে শুরু হয়, তাই প্রতিবেদিত মুনাফায় কর ব্যয় ফেরত যোগ করুন।

$$\\text{PBT} = 40 + 14 = 54$$

**ধাপ ২ — অ-নগদ খরচ ফেরত যোগ করুন।**

অবচয় ও অবলোপন মুনাফা কমিয়েছে কিন্তু কোম্পানি থেকে কোনো টাকা বেরোয়নি। বিক্রয়ে ক্ষতি একটি হিসাবগত দাখিলা যা বহন-মূল্যের সঙ্গে প্রাপ্তির তুলনা করে; বিক্রয়ের প্রকৃত নগদ প্রভাব বিনিয়োগ অংশে যায়।

$$54 + 26 + 2 = 82$$

**ধাপ ৩ — অর্থব্যয় ফেরত যোগ করুন।**

সুদ ব্যয় এখানে সরিয়ে দেওয়া হয় এবং প্রকৃতপক্ষে প্রদত্ত নগদ সুদ ধাপ ৭-এ আলাদাভাবে বাদ দেওয়া হয়। দুটি সাধারণত কাছাকাছি, কিন্তু কদাচিৎ অভিন্ন।

$$82 + 22 = 104$$

**ধাপ ৪ — সুদ আয় বাদ দিন।**

সুদ আয় প্রকৃত নগদ, কিন্তু এটি বিনিয়োগের রিটার্ন, পরিচালনের নয়। এটি বিনিয়োগ অংশে পুনঃশ্রেণিবদ্ধ হয়, তাই দুইবার গণনা এড়াতে এখানে বাদ দিতে হয়।

$$104 - 3 = 101$$

**চলতি মূলধন পরিবর্তনের পূর্বে পরিচালন মুনাফা: ১০১ কোটি টাকা।**

**ধাপ ৫ — চলতি মূলধনের নড়াচড়া।**

$$\\Delta WC = -62 - 33 - 4 + 18 = -81$$

| নড়াচড়া | নগদে প্রভাব | কোটি টাকা |
|---|---|---|
| প্রাপ্য বেড়েছে ৬২ | সম্পদ বাড়ল — নগদ খরচ হলো | (৬২) |
| মজুদ বেড়েছে ৩৩ | সম্পদ বাড়ল — নগদ খরচ হলো | (৩৩) |
| অগ্রিম বেড়েছে ৪ | সম্পদ বাড়ল — নগদ খরচ হলো | (৪) |
| প্রদেয় বেড়েছে ১৮ | দায় বাড়ল — নগদ ছাড়া পেল | ১৮ |
| **নিট** | | **(৮১)** |

**ধাপ ৬ — পরিচালন থেকে উদ্ভূত নগদ।**

$$101 - 81 = 20$$

**ধাপ ৭ — প্রকৃতপক্ষে প্রদত্ত সুদ ও কর বাদ দিন।**

$$20 - 22 - 10 = -12$$

**নিট পরিচালন নগদ প্রবাহ: ঋণাত্মক ১২ কোটি টাকা।**

**ধাপ ৮ — প্রতি শেয়ার তুলনা।**

$$\\text{EPS} = \\frac{40}{8} = ৫.০০ \\text{ টাকা}$$
$$\\text{NOCF per share} = \\frac{-12}{8} = -১.৫০ \\text{ টাকা}$$
$$\\text{Accrual Gap per Share} = 5.00 - (-1.50) = ৬.৫০ \\text{ টাকা}$$

**ধাপ ৯ — Free cash flow।**

$$\\text{FCF} = -12 - 55 = -৬৭ \\text{ কোটি টাকা}$$

**ধাপ ১০ — Accruals ratio।**

$$\\frac{40 - (-12)}{780} \\times 100 = \\frac{52}{780} \\times 100 = 6.67\\%$$

**ধাপ ১১ — Cash conversion।**

$$\\frac{-12}{40} = -0.30\\times$$

**ধাপ ১২ — বিনিয়োগ ও অর্থায়নের মধ্য দিয়ে বৃত্ত বন্ধ করুন।**

$$\\text{বিনিয়োগ} = -55 + 6 + 3 = -46$$
$$\\text{অর্থায়ন} = 72 - 9 - 8 = 55$$
$$\\text{নগদের নিট পরিবর্তন} = -12 - 46 + 55 = -3$$
$$\\text{সমাপনী নগদ} = 11 - 3 = 8 \\;\\checkmark$$

**এই শেষ যাচাইটি ঐচ্ছিক নয়।** তিনটি অংশের যোগফল স্থিতিপত্রের নগদ লাইনের নড়াচড়ার সমান হতেই হবে। না হলে হয় আপনি কোনো সমন্বয়ের চিহ্ন ভুল করেছেন, নয়তো বিবরণীটি নিজেই মেলে না — আর যে বিবরণী মেলে না, সেটি সম্পূর্ণ ভিন্ন মাত্রার একটি সিদ্ধান্ত।

### ব্যাখ্যা

চারটি সংখ্যা আপনার মনে থাকা উচিত।

**৫.০০ টাকা বনাম −১.৫০ টাকা।** এরা একই কোম্পানি, একই বারো মাস, একই নিরীক্ষিত হিসাব বর্ণনা করে। এদের একটি বাজার উদ্ধৃত করেছে। ব্যাংকে যেটি এসেছে, সেটি নয়।

**৮১ কোটি টাকা।** চলতি মূলধনের নড়াচড়া কর-পূর্ব মুনাফার চেয়ে বড়। **বছরের সমগ্র পরিচালন কর্মক্ষমতা নির্ধারিত হয়েছে ধাপ ৫-এ, আয় বিবরণীতে নয়।** যে পাঠক "চলতি মূলধন পরিবর্তনের পূর্বে পরিচালন মুনাফা: ১০১ কোটি টাকা"-তে থেমে যান, তিনি ঠিক ভুল উত্তরটিই পান — আর বেশিরভাগ বাংলাদেশি বার্ষিক প্রতিবেদনে ঐ লাইনটিই মোটা হরফে ছাপা।

**৬.৬৭%।** একটিমাত্র বছরে, যে ১০% সীমায় প্রতিবেদিত মুনাফাকে অপ্রমাণিত গণ্য করা উচিত তার দুই-তৃতীয়াংশ পথ। এটি সম্প্রসারণ না ক্রমাবনতি তা ঠিক করার আগে আগের দুই বছরের জন্যও গণনা করুন।

**৭২ কোটি টাকা।** নিট নতুন স্বল্পমেয়াদি ঋণ। ১২ কোটি টাকা খেয়ে ফেলা পরিচালন ও ৫৫ কোটি টাকার capex-এর বিপরীতে এই সংখ্যাটিই বছরটিকে সম্ভব করেছে। **লভ্যাংশ এখান থেকেই দেওয়া হয়েছে।** অর্থায়ন অংশটি সরিয়ে দিন, কোম্পানি বছর শেষ করে ৫৮ কোটি টাকার ঘাটতি নিয়ে।

**শৃঙ্খলা:** যেকোনো গুণিতক গণনার *আগে* NOCF গণনা করুন। P/E আগে গণনা করলে আপনি ১২×-এ নোঙর ফেলবেন এবং বাকি বিশ্লেষণটুকু এমন একটি হরের পক্ষে সাফাই গেয়ে কাটাবেন যা এখনো টাকায় রূপান্তরিত হয়নি। অধ্যায় ১১ price-to-book-এর আগে ট্যানজিবল NAV দাবি করেছিল — একই কারণে, একই ক্রমে।`,
    },

    excel: {
      en: `\`\`\`
A1: Net Profit After Tax (BDT cr)      B1: 40
A2: Income Tax Expense                 B2: 14
A3: Profit Before Tax                  B3: =B1+B2

A5: Depreciation & Amortisation        B5: 26
A6: Finance Cost (added back)          B6: 22
A7: Loss on Disposal of PPE            B7: 2
A8: Interest Income (deducted)         B8: -3
A9: Operating Profit before WC Chg     B9: =B3+B5+B6+B7+B8

A11: (Increase) in Trade Receivables   B11: -62
A12: (Increase) in Inventory           B12: -33
A13: (Increase) in Advances            B13: -4
A14: Increase in Trade Payables        B14: 18
A15: Net Working Capital Change        B15: =SUM(B11:B14)
A16: Cash Generated from Operations    B16: =B9+B15

A18: Interest Paid                     B18: -22
A19: Income Tax Paid                   B19: -10
A20: NET OPERATING CASH FLOW (NOCF)    B20: =B16+B18+B19

A22: Shares Outstanding (cr)           B22: 8
A23: EPS (BDT)                         B23: =B1/B22
A24: NOCF per Share (BDT)              B24: =B20/B22
A25: Accrual Gap per Share (BDT)       B25: =B23-B24

A27: Capital Expenditure               B27: 55
A28: FREE CASH FLOW                    B28: =B20-B27

A30: Total Assets                      B30: 780
A31: Accruals Ratio (%)                B31: =(B1-B20)/B30*100
A32: Cash Conversion (NOCF/NP)         B32: =B20/B1
A33: EARNINGS QUALITY VERDICT          B33: =IF(B20<0,"PROFIT WITHOUT CASH - reject",
       IF(B32<0.5,"WEAK - accruals are doing the work",
       IF(B32<1,"ACCEPTABLE - monitor working capital",
                "STRONG - profit is arriving in cash")))

A35: Net Cash used in Investing        B35: -46
A36: Net Cash from Financing           B36: 55
A37: Net Change in Cash                B37: =B20+B35+B36
A38: Opening Cash                      B38: 11
A39: Closing Cash                      B39: =B38+B37
A40: FUNDING FLAG                      B40: =IF(AND(B20<0,B36>0),
       "Operations funded by lenders, not by customers",
       "Operations self-funding")
\`\`\`

**B20, B24 and B33 are the three cells that matter.** B20 is the number the whole chapter is about. B24 is the number the DSE prints beside EPS and nobody reads. B33 refuses to give a verdict that depends on your mood.

**B39 is the audit.** It must equal the closing cash balance on the company's own balance sheet. If it does not, you have entered something with the wrong sign — almost always a working capital line in rows 11 to 14. Fix it before you interpret anything, because a reconciliation that does not tie is not a weaker conclusion, it is no conclusion at all.

Build this sheet three times for the same company — this year, last year, the year before — and put the three B31 values side by side. **One year of a high accruals ratio is a fact about a year. Three consecutive years is a fact about a business.**

**Set B11 to 0 and B12 to 0 to see the company without the working capital build.** NOCF rises from −12 to +83 and the verdict flips to "STRONG". That single comparison tells you precisely how much of Jamuna's problem is receivables and inventory, and therefore precisely which two notes in the annual report you need to read next.`,
      bn: `\`\`\`
A1: কর-পরবর্তী নিট মুনাফা (কোটি টাকা)   B1: 40
A2: আয়কর ব্যয়                          B2: 14
A3: কর-পূর্ব মুনাফা                     B3: =B1+B2

A5: অবচয় ও অবলোপন                      B5: 26
A6: অর্থব্যয় (ফেরত-যোগ)                B6: 22
A7: PPE বিক্রয়ে ক্ষতি                   B7: 2
A8: সুদ আয় (বাদ)                       B8: -3
A9: চলতি মূলধনের আগে পরিচালন মুনাফা      B9: =B3+B5+B6+B7+B8

A11: বাণিজ্যিক প্রাপ্যের (বৃদ্ধি)        B11: -62
A12: মজুদের (বৃদ্ধি)                    B12: -33
A13: অগ্রিমের (বৃদ্ধি)                  B13: -4
A14: বাণিজ্যিক প্রদেয়ের বৃদ্ধি          B14: 18
A15: নিট চলতি মূলধন পরিবর্তন            B15: =SUM(B11:B14)
A16: পরিচালন থেকে উদ্ভূত নগদ            B16: =B9+B15

A18: প্রদত্ত সুদ                        B18: -22
A19: প্রদত্ত আয়কর                      B19: -10
A20: নিট পরিচালন নগদ প্রবাহ (NOCF)      B20: =B16+B18+B19

A22: বকেয়া শেয়ার (কোটি)                B22: 8
A23: EPS (টাকা)                        B23: =B1/B22
A24: NOCF per Share (টাকা)             B24: =B20/B22
A25: প্রতি শেয়ারে সঞ্চিতি-ব্যবধান       B25: =B23-B24

A27: মূলধনী ব্যয়                       B27: 55
A28: FREE CASH FLOW                    B28: =B20-B27

A30: মোট সম্পদ                          B30: 780
A31: Accruals Ratio (%)                B31: =(B1-B20)/B30*100
A32: Cash Conversion (NOCF/NP)         B32: =B20/B1
A33: আয়ের গুণমান রায়                   B33: =IF(B20<0,"PROFIT WITHOUT CASH - reject",
       IF(B32<0.5,"WEAK - accruals are doing the work",
       IF(B32<1,"ACCEPTABLE - monitor working capital",
                "STRONG - profit is arriving in cash")))

A35: বিনিয়োগে ব্যবহৃত নিট নগদ           B35: -46
A36: অর্থায়ন থেকে নিট নগদ               B36: 55
A37: নগদের নিট পরিবর্তন                 B37: =B20+B35+B36
A38: প্রারম্ভিক নগদ                     B38: 11
A39: সমাপনী নগদ                         B39: =B38+B37
A40: অর্থায়ন সতর্কতা                    B40: =IF(AND(B20<0,B36>0),
       "Operations funded by lenders, not by customers",
       "Operations self-funding")
\`\`\`

**B20, B24 ও B33 — এই তিনটি ঘরই গুরুত্বপূর্ণ।** B20 হলো যে সংখ্যাটি নিয়ে পুরো অধ্যায়। B24 হলো যে সংখ্যাটি ডিএসই EPS-এর পাশে ছাপে অথচ কেউ পড়ে না। B33 এমন কোনো রায় দিতে অস্বীকার করে যা আপনার মেজাজের ওপর নির্ভর করে।

**B39 হলো নিরীক্ষা।** এটি কোম্পানির নিজের স্থিতিপত্রের সমাপনী নগদ স্থিতির সমান হতেই হবে। না হলে আপনি কিছু একটা ভুল চিহ্নে বসিয়েছেন — প্রায় সবসময়ই ১১ থেকে ১৪ সারির কোনো চলতি মূলধন লাইন। কিছু ব্যাখ্যা করার আগে ঠিক করুন, কারণ যে সমন্বয় মেলে না তা দুর্বল সিদ্ধান্ত নয়, তা আদৌ কোনো সিদ্ধান্তই নয়।

একই কোম্পানির জন্য এই শিটটি তিনবার বানান — এ বছর, গত বছর, তার আগের বছর — এবং তিনটি B31 মান পাশাপাশি রাখুন। **উঁচু accruals ratio-র এক বছর একটি বছর সম্পর্কে তথ্য। টানা তিন বছর একটি ব্যবসা সম্পর্কে তথ্য।**

**চলতি মূলধনের বৃদ্ধি ছাড়া কোম্পানিটি কেমন দেখাত তা দেখতে B11 ও B12-তে ০ বসান।** NOCF −১২ থেকে উঠে +৮৩ হয় এবং রায় বদলে "STRONG" হয়। ঐ একটিমাত্র তুলনা আপনাকে নির্ভুলভাবে বলে দেয় যমুনার সমস্যার কতটা প্রাপ্য ও মজুদ, এবং তাই বার্ষিক প্রতিবেদনের ঠিক কোন দুটি নোট আপনাকে পরে পড়তে হবে।`,
    },

    python: {
      en: `\`\`\`python
"""
Chapter 12 - Cash flow quality: reconciling reported profit to operating cash.
Educational. All figures in BDT crore unless stated.
"""
from dataclasses import dataclass


@dataclass
class CashFlow:
    """One listed company's cash flow statement, indirect method, BDT crore."""
    name: str
    # Income statement links
    net_profit: float          # profit after tax
    tax_expense: float
    total_assets: float
    shares_crore: float
    # Non-cash adjustments
    depreciation: float
    finance_cost: float
    loss_on_disposal: float
    interest_income: float
    # Working capital movements (outflow negative)
    receivables_change: float
    inventory_change: float
    advances_change: float
    payables_change: float
    # Cash items below cash generated from operations
    interest_paid: float
    tax_paid: float
    # Investing and financing
    capex: float
    disposal_proceeds: float
    interest_received: float
    net_borrowing: float
    loan_repayment: float
    dividend_paid: float
    opening_cash: float

    # ---------- operating ----------
    @property
    def profit_before_tax(self) -> float:
        return self.net_profit + self.tax_expense

    @property
    def operating_profit_before_wc(self) -> float:
        return (self.profit_before_tax + self.depreciation + self.finance_cost
                + self.loss_on_disposal - self.interest_income)

    @property
    def net_wc_change(self) -> float:
        return (self.receivables_change + self.inventory_change
                + self.advances_change + self.payables_change)

    @property
    def cash_from_operations(self) -> float:
        return self.operating_profit_before_wc + self.net_wc_change

    @property
    def nocf(self) -> float:
        """Net operating cash flow, after interest and tax actually paid."""
        return self.cash_from_operations - self.interest_paid - self.tax_paid

    # ---------- investing and financing ----------
    @property
    def net_investing(self) -> float:
        return -self.capex + self.disposal_proceeds + self.interest_received

    @property
    def net_financing(self) -> float:
        return self.net_borrowing - self.loan_repayment - self.dividend_paid

    @property
    def net_change_in_cash(self) -> float:
        return self.nocf + self.net_investing + self.net_financing

    @property
    def closing_cash(self) -> float:
        return self.opening_cash + self.net_change_in_cash

    # ---------- quality metrics ----------
    @property
    def eps(self) -> float:
        return self.net_profit / self.shares_crore

    @property
    def nocf_per_share(self) -> float:
        return self.nocf / self.shares_crore

    @property
    def free_cash_flow(self) -> float:
        return self.nocf - self.capex

    @property
    def accruals_ratio(self) -> float:
        return (self.net_profit - self.nocf) / self.total_assets * 100

    @property
    def cash_conversion(self) -> float:
        return self.nocf / self.net_profit

    def verdict(self) -> str:
        if self.nocf < 0:
            return "PROFIT WITHOUT CASH - reject"
        if self.cash_conversion < 0.5:
            return "WEAK - accruals are doing the work"
        if self.cash_conversion < 1.0:
            return "ACCEPTABLE - monitor working capital"
        return "STRONG - profit is arriving in cash"

    def flags(self) -> list:
        out = []
        if self.nocf < 0:
            out.append(f"NEGATIVE NOCF: operations consumed BDT {-self.nocf:,.0f} cr "
                       f"while reporting BDT {self.net_profit:,.0f} cr of profit.")
        if self.accruals_ratio > 5:
            out.append(f"HIGH ACCRUALS: {self.accruals_ratio:.2f}% of total assets is "
                       f"profit that never became cash.")
        if self.free_cash_flow < 0:
            out.append(f"NEGATIVE FCF: BDT {-self.free_cash_flow:,.0f} cr must be "
                       f"raised externally to stand still.")
        if self.nocf < 0 <= self.net_financing:
            out.append("FUNDED BY LENDERS: the financing section, not the customer, "
                       "is paying for this business.")
        if not out:
            out.append("No cash-quality flag raised.")
        return out


def report(co: CashFlow) -> None:
    print(f"Company                    : {co.name}")
    print(f"Profit before tax          : BDT {co.profit_before_tax:,.0f} cr")
    print(f"Net profit after tax       : BDT {co.net_profit:,.0f} cr")
    print(f"Op. profit before WC change: BDT {co.operating_profit_before_wc:,.0f} cr")
    print(f"Net working capital change : BDT {co.net_wc_change:,.0f} cr")
    print(f"Cash generated from ops    : BDT {co.cash_from_operations:,.0f} cr")
    print(f"NET OPERATING CASH FLOW    : BDT {co.nocf:,.0f} cr")
    print(f"EPS                        : BDT {co.eps:.2f}")
    print(f"NOCF per share             : BDT {co.nocf_per_share:.2f}")
    print(f"Capital expenditure        : BDT {co.capex:,.0f} cr")
    print(f"Free cash flow             : BDT {co.free_cash_flow:,.0f} cr")
    print(f"Accruals ratio             : {co.accruals_ratio:.2f}%")
    print(f"Cash conversion            : {co.cash_conversion:.2f}x")
    print(f"VERDICT                    : {co.verdict()}")
    print(f"Net investing              : BDT {co.net_investing:,.0f} cr")
    print(f"Net financing              : BDT {co.net_financing:,.0f} cr")
    print(f"Net change in cash         : BDT {co.net_change_in_cash:,.0f} cr")
    print(f"Closing cash               : BDT {co.closing_cash:,.0f} cr")
    print("FLAGS")
    for f in co.flags():
        print(f"  - {f}")


if __name__ == "__main__":
    jamuna = CashFlow(
        name="Jamuna Engineering Ltd (archetype)",
        net_profit=40.0, tax_expense=14.0, total_assets=780.0, shares_crore=8.0,
        depreciation=26.0, finance_cost=22.0, loss_on_disposal=2.0, interest_income=3.0,
        receivables_change=-62.0, inventory_change=-33.0,
        advances_change=-4.0, payables_change=18.0,
        interest_paid=22.0, tax_paid=10.0,
        capex=55.0, disposal_proceeds=6.0, interest_received=3.0,
        net_borrowing=72.0, loan_repayment=9.0, dividend_paid=8.0,
        opening_cash=11.0,
    )

    shitalakshya = CashFlow(
        name="Shitalakshya Foods Ltd (healthy comparator)",
        net_profit=40.0, tax_expense=12.0, total_assets=600.0, shares_crore=8.0,
        depreciation=30.0, finance_cost=6.0, loss_on_disposal=0.0, interest_income=4.0,
        receivables_change=-5.0, inventory_change=-3.0,
        advances_change=-1.0, payables_change=6.0,
        interest_paid=6.0, tax_paid=23.0,
        capex=20.0, disposal_proceeds=0.0, interest_received=4.0,
        net_borrowing=0.0, loan_repayment=12.0, dividend_paid=16.0,
        opening_cash=30.0,
    )

    for co in (shitalakshya, jamuna):
        report(co)
        print()

    print("SAME REPORTED PROFIT, OPPOSITE CASH REALITY")
    print(f"  {'Metric':<24}{'Shitalakshya':>14}{'Jamuna':>14}")
    print(f"  {'Net profit (BDT cr)':<24}{shitalakshya.net_profit:>14,.0f}"
          f"{jamuna.net_profit:>14,.0f}")
    print(f"  {'NOCF (BDT cr)':<24}{shitalakshya.nocf:>14,.0f}{jamuna.nocf:>14,.0f}")
    print(f"  {'NOCF per share (BDT)':<24}{shitalakshya.nocf_per_share:>14.2f}"
          f"{jamuna.nocf_per_share:>14.2f}")
    print(f"  {'Cash conversion':<24}{shitalakshya.cash_conversion:>14.2f}"
          f"{jamuna.cash_conversion:>14.2f}")
    print(f"  {'Accruals ratio (%)':<24}{shitalakshya.accruals_ratio:>14.2f}"
          f"{jamuna.accruals_ratio:>14.2f}")
    print(f"  {'Free cash flow (BDT cr)':<24}{shitalakshya.free_cash_flow:>14,.0f}"
          f"{jamuna.free_cash_flow:>14,.0f}")
\`\`\`

**Expected output:**

\`\`\`
Company                    : Shitalakshya Foods Ltd (healthy comparator)
Profit before tax          : BDT 52 cr
Net profit after tax       : BDT 40 cr
Op. profit before WC change: BDT 84 cr
Net working capital change : BDT -3 cr
Cash generated from ops    : BDT 81 cr
NET OPERATING CASH FLOW    : BDT 52 cr
EPS                        : BDT 5.00
NOCF per share             : BDT 6.50
Capital expenditure        : BDT 20 cr
Free cash flow             : BDT 32 cr
Accruals ratio             : -2.00%
Cash conversion            : 1.30x
VERDICT                    : STRONG - profit is arriving in cash
Net investing              : BDT -16 cr
Net financing              : BDT -28 cr
Net change in cash         : BDT 8 cr
Closing cash               : BDT 38 cr
FLAGS
  - No cash-quality flag raised.

Company                    : Jamuna Engineering Ltd (archetype)
Profit before tax          : BDT 54 cr
Net profit after tax       : BDT 40 cr
Op. profit before WC change: BDT 101 cr
Net working capital change : BDT -81 cr
Cash generated from ops    : BDT 20 cr
NET OPERATING CASH FLOW    : BDT -12 cr
EPS                        : BDT 5.00
NOCF per share             : BDT -1.50
Capital expenditure        : BDT 55 cr
Free cash flow             : BDT -67 cr
Accruals ratio             : 6.67%
Cash conversion            : -0.30x
VERDICT                    : PROFIT WITHOUT CASH - reject
Net investing              : BDT -46 cr
Net financing              : BDT 55 cr
Net change in cash         : BDT -3 cr
Closing cash               : BDT 8 cr
FLAGS
  - NEGATIVE NOCF: operations consumed BDT 12 cr while reporting BDT 40 cr of profit.
  - HIGH ACCRUALS: 6.67% of total assets is profit that never became cash.
  - NEGATIVE FCF: BDT 67 cr must be raised externally to stand still.
  - FUNDED BY LENDERS: the financing section, not the customer, is paying for this business.

SAME REPORTED PROFIT, OPPOSITE CASH REALITY
  Metric                    Shitalakshya        Jamuna
  Net profit (BDT cr)                 40            40
  NOCF (BDT cr)                       52           -12
  NOCF per share (BDT)              6.50         -1.50
  Cash conversion                   1.30         -0.30
  Accruals ratio (%)               -2.00          6.67
  Free cash flow (BDT cr)             32           -67
\`\`\`

**Read the last block only.** Two companies, identical reported profit of BDT 40 crore, identical EPS of BDT 5.00, identical share count. On the DSE company page they are indistinguishable. On this table they are opposites: Shitalakshya converted 1.30 taka of cash per taka of profit and repaid debt; Jamuna converted −0.30 and borrowed BDT 72 crore.

**Note what \`verdict()\` refuses to do.** It does not weigh the negative NOCF against the revenue growth, the dividend, or the story about winning large contracts. If NOCF is negative it returns "reject" and stops. That rigidity is deliberate: the entire failure mode this chapter guards against is an investor who finds the cash flow statement, understands it, and then reasons around it because the growth narrative was attractive.

The class deliberately takes every line of the reconciliation as a separate constructor argument rather than accepting NOCF directly. **You cannot instantiate it from a portal summary.** You have to open the cash flow statement and type in the working capital movements one at a time — which is the only way you will ever notice that they are larger than profit before tax.`,
      bn: `\`\`\`python
"""
অধ্যায় ১২ — নগদ প্রবাহের গুণমান: প্রতিবেদিত মুনাফা থেকে পরিচালন নগদে সমন্বয়।
শিক্ষামূলক। উল্লেখ না থাকলে সব অঙ্ক কোটি টাকায়।
"""
from dataclasses import dataclass


@dataclass
class CashFlow:
    """একটি তালিকাভুক্ত কোম্পানির নগদ প্রবাহ বিবরণী, পরোক্ষ পদ্ধতি, কোটি টাকায়।"""
    name: str
    # আয় বিবরণীর সংযোগ
    net_profit: float          # কর-পরবর্তী মুনাফা
    tax_expense: float
    total_assets: float
    shares_crore: float
    # অ-নগদ সমন্বয়
    depreciation: float
    finance_cost: float
    loss_on_disposal: float
    interest_income: float
    # চলতি মূলধনের নড়াচড়া (বহিঃপ্রবাহ ঋণাত্মক)
    receivables_change: float
    inventory_change: float
    advances_change: float
    payables_change: float
    # পরিচালন থেকে উদ্ভূত নগদের নিচের নগদ দফা
    interest_paid: float
    tax_paid: float
    # বিনিয়োগ ও অর্থায়ন
    capex: float
    disposal_proceeds: float
    interest_received: float
    net_borrowing: float
    loan_repayment: float
    dividend_paid: float
    opening_cash: float

    # ---------- পরিচালন ----------
    @property
    def profit_before_tax(self) -> float:
        return self.net_profit + self.tax_expense

    @property
    def operating_profit_before_wc(self) -> float:
        return (self.profit_before_tax + self.depreciation + self.finance_cost
                + self.loss_on_disposal - self.interest_income)

    @property
    def net_wc_change(self) -> float:
        return (self.receivables_change + self.inventory_change
                + self.advances_change + self.payables_change)

    @property
    def cash_from_operations(self) -> float:
        return self.operating_profit_before_wc + self.net_wc_change

    @property
    def nocf(self) -> float:
        """নিট পরিচালন নগদ প্রবাহ, প্রকৃতপক্ষে প্রদত্ত সুদ ও করের পর।"""
        return self.cash_from_operations - self.interest_paid - self.tax_paid

    # ---------- বিনিয়োগ ও অর্থায়ন ----------
    @property
    def net_investing(self) -> float:
        return -self.capex + self.disposal_proceeds + self.interest_received

    @property
    def net_financing(self) -> float:
        return self.net_borrowing - self.loan_repayment - self.dividend_paid

    @property
    def net_change_in_cash(self) -> float:
        return self.nocf + self.net_investing + self.net_financing

    @property
    def closing_cash(self) -> float:
        return self.opening_cash + self.net_change_in_cash

    # ---------- গুণমানের পরিমাপ ----------
    @property
    def eps(self) -> float:
        return self.net_profit / self.shares_crore

    @property
    def nocf_per_share(self) -> float:
        return self.nocf / self.shares_crore

    @property
    def free_cash_flow(self) -> float:
        return self.nocf - self.capex

    @property
    def accruals_ratio(self) -> float:
        return (self.net_profit - self.nocf) / self.total_assets * 100

    @property
    def cash_conversion(self) -> float:
        return self.nocf / self.net_profit

    def verdict(self) -> str:
        if self.nocf < 0:
            return "PROFIT WITHOUT CASH - reject"
        if self.cash_conversion < 0.5:
            return "WEAK - accruals are doing the work"
        if self.cash_conversion < 1.0:
            return "ACCEPTABLE - monitor working capital"
        return "STRONG - profit is arriving in cash"

    def flags(self) -> list:
        out = []
        if self.nocf < 0:
            out.append(f"NEGATIVE NOCF: operations consumed BDT {-self.nocf:,.0f} cr "
                       f"while reporting BDT {self.net_profit:,.0f} cr of profit.")
        if self.accruals_ratio > 5:
            out.append(f"HIGH ACCRUALS: {self.accruals_ratio:.2f}% of total assets is "
                       f"profit that never became cash.")
        if self.free_cash_flow < 0:
            out.append(f"NEGATIVE FCF: BDT {-self.free_cash_flow:,.0f} cr must be "
                       f"raised externally to stand still.")
        if self.nocf < 0 <= self.net_financing:
            out.append("FUNDED BY LENDERS: the financing section, not the customer, "
                       "is paying for this business.")
        if not out:
            out.append("No cash-quality flag raised.")
        return out


def report(co: CashFlow) -> None:
    print(f"Company                    : {co.name}")
    print(f"Profit before tax          : BDT {co.profit_before_tax:,.0f} cr")
    print(f"Net profit after tax       : BDT {co.net_profit:,.0f} cr")
    print(f"Op. profit before WC change: BDT {co.operating_profit_before_wc:,.0f} cr")
    print(f"Net working capital change : BDT {co.net_wc_change:,.0f} cr")
    print(f"Cash generated from ops    : BDT {co.cash_from_operations:,.0f} cr")
    print(f"NET OPERATING CASH FLOW    : BDT {co.nocf:,.0f} cr")
    print(f"EPS                        : BDT {co.eps:.2f}")
    print(f"NOCF per share             : BDT {co.nocf_per_share:.2f}")
    print(f"Capital expenditure        : BDT {co.capex:,.0f} cr")
    print(f"Free cash flow             : BDT {co.free_cash_flow:,.0f} cr")
    print(f"Accruals ratio             : {co.accruals_ratio:.2f}%")
    print(f"Cash conversion            : {co.cash_conversion:.2f}x")
    print(f"VERDICT                    : {co.verdict()}")
    print(f"Net investing              : BDT {co.net_investing:,.0f} cr")
    print(f"Net financing              : BDT {co.net_financing:,.0f} cr")
    print(f"Net change in cash         : BDT {co.net_change_in_cash:,.0f} cr")
    print(f"Closing cash               : BDT {co.closing_cash:,.0f} cr")
    print("FLAGS")
    for f in co.flags():
        print(f"  - {f}")


if __name__ == "__main__":
    jamuna = CashFlow(
        name="Jamuna Engineering Ltd (archetype)",
        net_profit=40.0, tax_expense=14.0, total_assets=780.0, shares_crore=8.0,
        depreciation=26.0, finance_cost=22.0, loss_on_disposal=2.0, interest_income=3.0,
        receivables_change=-62.0, inventory_change=-33.0,
        advances_change=-4.0, payables_change=18.0,
        interest_paid=22.0, tax_paid=10.0,
        capex=55.0, disposal_proceeds=6.0, interest_received=3.0,
        net_borrowing=72.0, loan_repayment=9.0, dividend_paid=8.0,
        opening_cash=11.0,
    )

    shitalakshya = CashFlow(
        name="Shitalakshya Foods Ltd (healthy comparator)",
        net_profit=40.0, tax_expense=12.0, total_assets=600.0, shares_crore=8.0,
        depreciation=30.0, finance_cost=6.0, loss_on_disposal=0.0, interest_income=4.0,
        receivables_change=-5.0, inventory_change=-3.0,
        advances_change=-1.0, payables_change=6.0,
        interest_paid=6.0, tax_paid=23.0,
        capex=20.0, disposal_proceeds=0.0, interest_received=4.0,
        net_borrowing=0.0, loan_repayment=12.0, dividend_paid=16.0,
        opening_cash=30.0,
    )

    for co in (shitalakshya, jamuna):
        report(co)
        print()

    print("SAME REPORTED PROFIT, OPPOSITE CASH REALITY")
    print(f"  {'Metric':<24}{'Shitalakshya':>14}{'Jamuna':>14}")
    print(f"  {'Net profit (BDT cr)':<24}{shitalakshya.net_profit:>14,.0f}"
          f"{jamuna.net_profit:>14,.0f}")
    print(f"  {'NOCF (BDT cr)':<24}{shitalakshya.nocf:>14,.0f}{jamuna.nocf:>14,.0f}")
    print(f"  {'NOCF per share (BDT)':<24}{shitalakshya.nocf_per_share:>14.2f}"
          f"{jamuna.nocf_per_share:>14.2f}")
    print(f"  {'Cash conversion':<24}{shitalakshya.cash_conversion:>14.2f}"
          f"{jamuna.cash_conversion:>14.2f}")
    print(f"  {'Accruals ratio (%)':<24}{shitalakshya.accruals_ratio:>14.2f}"
          f"{jamuna.accruals_ratio:>14.2f}")
    print(f"  {'Free cash flow (BDT cr)':<24}{shitalakshya.free_cash_flow:>14,.0f}"
          f"{jamuna.free_cash_flow:>14,.0f}")
\`\`\`

**প্রত্যাশিত ফলাফল:**

\`\`\`
Company                    : Shitalakshya Foods Ltd (healthy comparator)
Profit before tax          : BDT 52 cr
Net profit after tax       : BDT 40 cr
Op. profit before WC change: BDT 84 cr
Net working capital change : BDT -3 cr
Cash generated from ops    : BDT 81 cr
NET OPERATING CASH FLOW    : BDT 52 cr
EPS                        : BDT 5.00
NOCF per share             : BDT 6.50
Capital expenditure        : BDT 20 cr
Free cash flow             : BDT 32 cr
Accruals ratio             : -2.00%
Cash conversion            : 1.30x
VERDICT                    : STRONG - profit is arriving in cash
Net investing              : BDT -16 cr
Net financing              : BDT -28 cr
Net change in cash         : BDT 8 cr
Closing cash               : BDT 38 cr
FLAGS
  - No cash-quality flag raised.

Company                    : Jamuna Engineering Ltd (archetype)
Profit before tax          : BDT 54 cr
Net profit after tax       : BDT 40 cr
Op. profit before WC change: BDT 101 cr
Net working capital change : BDT -81 cr
Cash generated from ops    : BDT 20 cr
NET OPERATING CASH FLOW    : BDT -12 cr
EPS                        : BDT 5.00
NOCF per share             : BDT -1.50
Capital expenditure        : BDT 55 cr
Free cash flow             : BDT -67 cr
Accruals ratio             : 6.67%
Cash conversion            : -0.30x
VERDICT                    : PROFIT WITHOUT CASH - reject
Net investing              : BDT -46 cr
Net financing              : BDT 55 cr
Net change in cash         : BDT -3 cr
Closing cash               : BDT 8 cr
FLAGS
  - NEGATIVE NOCF: operations consumed BDT 12 cr while reporting BDT 40 cr of profit.
  - HIGH ACCRUALS: 6.67% of total assets is profit that never became cash.
  - NEGATIVE FCF: BDT 67 cr must be raised externally to stand still.
  - FUNDED BY LENDERS: the financing section, not the customer, is paying for this business.

SAME REPORTED PROFIT, OPPOSITE CASH REALITY
  Metric                    Shitalakshya        Jamuna
  Net profit (BDT cr)                 40            40
  NOCF (BDT cr)                       52           -12
  NOCF per share (BDT)              6.50         -1.50
  Cash conversion                   1.30         -0.30
  Accruals ratio (%)               -2.00          6.67
  Free cash flow (BDT cr)             32           -67
\`\`\`

**কেবল শেষ অংশটি পড়ুন।** দুটি কোম্পানি, অভিন্ন প্রতিবেদিত মুনাফা ৪০ কোটি টাকা, অভিন্ন EPS ৫.০০ টাকা, অভিন্ন শেয়ার সংখ্যা। ডিএসই-র কোম্পানি পাতায় এদের আলাদা করা যায় না। এই সারণিতে এরা বিপরীত: শীতলক্ষ্যা মুনাফার প্রতি টাকায় ১.৩০ টাকা নগদে রূপান্তর করেছে এবং ঋণ শোধ করেছে; যমুনা রূপান্তর করেছে −০.৩০ এবং ৭২ কোটি টাকা ধার করেছে।

**লক্ষ করুন \`verdict()\` কী করতে অস্বীকার করে।** এটি ঋণাত্মক NOCF-কে রাজস্ব প্রবৃদ্ধি, লভ্যাংশ বা বড় চুক্তি জেতার গল্পের বিপরীতে ওজন করে না। NOCF ঋণাত্মক হলে এটি "reject" ফেরত দেয় এবং থেমে যায়। এই অনমনীয়তা ইচ্ছাকৃত: এই অধ্যায় যে ব্যর্থতার পথ থেকে রক্ষা করে তা হলো এমন একজন বিনিয়োগকারী যিনি নগদ প্রবাহ বিবরণী খুঁজে পান, বোঝেন, এবং তারপর প্রবৃদ্ধির আখ্যানটি আকর্ষণীয় ছিল বলে যুক্তি দিয়ে সেটিকে পাশ কাটিয়ে যান।

ক্লাসটি ইচ্ছাকৃতভাবে NOCF সরাসরি না নিয়ে সমন্বয়ের প্রতিটি লাইনকে পৃথক কনস্ট্রাক্টর আর্গুমেন্ট হিসেবে নেয়। **কোনো পোর্টাল সারাংশ থেকে আপনি এটি চালু করতে পারবেন না।** আপনাকে নগদ প্রবাহ বিবরণী খুলে চলতি মূলধনের নড়াচড়াগুলো একটি একটি করে টাইপ করতে হবে — আর এটিই একমাত্র উপায় যাতে আপনি কখনো খেয়াল করবেন যে সেগুলো কর-পূর্ব মুনাফার চেয়েও বড়।`,
    },

    mistakes: {
      en: `1. **Reading EPS and stopping.** NOCF per share is printed on the same page, by regulatory requirement. Not reading it is not an information problem. It is a habit problem.
2. **Treating "operating profit before working capital changes" as the operating cash figure.** It is printed in bold, it is large, and it is not cash. For Jamuna it is BDT 101 crore against a true NOCF of −BDT 12 crore. **The bold line is the trap.**
3. **Getting the working capital signs backwards.** An asset rising consumes cash; a liability rising releases it. Reverse them and every conclusion in the chapter inverts.
4. **Celebrating a payables increase.** Rising trade payables release cash and improve NOCF. They also mean the company is not paying its suppliers. Cash improved because a bill was deferred, not because a customer paid.
5. **Judging one year in isolation.** A single year of negative NOCF during a genuine expansion is defensible. Three consecutive years is a business model that consumes cash, and the distinction is only visible in a multi-year table.
6. **Ignoring the financing section.** The operating section tells you whether the business works. The financing section tells you who paid for it when it did not. A dividend funded by new borrowing is visible only when you read both.
7. **Assuming cash flow cannot be manipulated.** Capitalising an operating expense moves it from operating to investing and raises NOCF without touching the bank balance. Watch capex intensity alongside any sudden NOCF improvement.
8. **Comparing NOCF per share to EPS as if they were valuation-equivalent.** NOCF is struck before capex; EPS is struck after depreciation. A capital-intensive company shows NOCF per share above EPS in a normal year and that is arithmetic, not quality. Use the pair for sign and direction; use FCF for multiples.
9. **Using cash conversion where profit is near zero.** BDT 1 crore of profit and BDT 20 crore of NOCF gives 20×, which means nothing. The ratio is only informative when the denominator is materially positive.
10. **Accepting a growth story as an explanation for negative NOCF without a maturity test.** "We are building inventory for a large order" is checkable. Ask when the order converts, then check next year's receivables note against the answer you were given.`,
      bn: `১. **EPS পড়ে থেমে যাওয়া।** নিয়ন্ত্রক বাধ্যবাধকতায় NOCF per share একই পাতায় ছাপা হয়। এটি না পড়া তথ্যের সমস্যা নয়। এটি অভ্যাসের সমস্যা।
২. **"চলতি মূলধন পরিবর্তনের পূর্বে পরিচালন মুনাফা"-কে পরিচালন নগদের অঙ্ক ভাবা।** এটি মোটা হরফে ছাপা, বড়, এবং নগদ নয়। যমুনার ক্ষেত্রে এটি ১০১ কোটি টাকা, অথচ প্রকৃত NOCF −১২ কোটি টাকা। **মোটা হরফের লাইনটিই ফাঁদ।**
৩. **চলতি মূলধনের চিহ্ন উল্টে ফেলা।** সম্পদ বাড়লে নগদ খরচ হয়; দায় বাড়লে নগদ ছাড়া পায়। উল্টে ফেললে এই অধ্যায়ের প্রতিটি সিদ্ধান্ত উল্টে যায়।
৪. **প্রদেয়ের বৃদ্ধি উদযাপন করা।** বাণিজ্যিক প্রদেয় বাড়লে নগদ ছাড়া পায় এবং NOCF উন্নত হয়। এর মানে এই যে কোম্পানি সরবরাহকারীদের টাকা দিচ্ছে না। নগদ উন্নত হয়েছে একটি বিল পিছিয়ে দেওয়ায়, কোনো ক্রেতা টাকা দেওয়ায় নয়।
৫. **একটি বছরকে বিচ্ছিন্নভাবে বিচার করা।** সত্যিকারের সম্প্রসারণের সময় এক বছরের ঋণাত্মক NOCF সমর্থনযোগ্য। টানা তিন বছর মানে এমন একটি ব্যবসায়িক মডেল যা নগদ খায়, আর পার্থক্যটি কেবল বহু-বছরের সারণিতেই দেখা যায়।
৬. **অর্থায়ন অংশ উপেক্ষা করা।** পরিচালন অংশ বলে ব্যবসাটি কাজ করে কি না। অর্থায়ন অংশ বলে কাজ না করলে কে দাম দিয়েছে। নতুন ঋণে অর্থায়িত লভ্যাংশ কেবল দুটোই পড়লেই দেখা যায়।
৭. **নগদ প্রবাহে কারসাজি করা যায় না ধরে নেওয়া।** পরিচালন ব্যয়কে মূলধনীকরণ করলে তা পরিচালন থেকে বিনিয়োগে সরে যায় এবং ব্যাংক স্থিতি না ছুঁয়েই NOCF বাড়ে। NOCF-এর যেকোনো আকস্মিক উন্নতির পাশে capex intensity লক্ষ করুন।
৮. **NOCF per share ও EPS-কে মূল্যায়নগতভাবে সমতুল্য ভেবে তুলনা করা।** NOCF নির্ধারিত হয় capex-এর আগে; EPS নির্ধারিত হয় অবচয়ের পরে। মূলধন-নিবিড় কোম্পানি স্বাভাবিক বছরেও EPS-এর ওপরে NOCF per share দেখায়, আর সেটি পাটিগণিত, গুণমান নয়। জোড়াটি ব্যবহার করুন চিহ্ন ও দিকের জন্য; গুণিতকের জন্য FCF ব্যবহার করুন।
৯. **মুনাফা শূন্যের কাছাকাছি হলে cash conversion ব্যবহার করা।** ১ কোটি টাকা মুনাফা ও ২০ কোটি টাকা NOCF দেয় ২০×, যার কোনো অর্থ নেই। হর উল্লেখযোগ্যভাবে ধনাত্মক হলেই অনুপাতটি তথ্যবহুল।
১০. **মেয়াদ যাচাই না করে ঋণাত্মক NOCF-এর ব্যাখ্যা হিসেবে প্রবৃদ্ধির গল্প মেনে নেওয়া।** "বড় অর্ডারের জন্য মজুদ গড়ছি" — এটি যাচাইযোগ্য। জিজ্ঞেস করুন অর্ডারটি কখন রূপান্তরিত হবে, তারপর পরের বছরের প্রাপ্য নোটটি পাওয়া উত্তরের সঙ্গে মিলিয়ে দেখুন।`,
    },

    tips: {
      en: `- **Read the cash flow statement first, before the income statement.** It is usually the third statement in the annual report and the last one anybody reaches. Reading it first prevents you from anchoring on EPS, exactly as Chapter 11 required tangible NAV before price-to-book.
- **Build a five-year row of net profit and NOCF side by side.** It takes fifteen minutes per company and it is the highest-yield fifteen minutes in Bangladeshi fundamental analysis. Sum both rows over five years. If cumulative NOCF is far below cumulative profit, the gap never closed — it accumulated.
- **Check whether the dividend was covered by NOCF.** Divide dividend paid by NOCF. Above 1.0 means the distribution came from somewhere other than operations, and the financing section will tell you where. A dividend funded by short-term bank borrowing is a solvency question wearing a shareholder-friendly costume.
- **Compare the working capital movements to the balance sheet changes.** Chapter 11's receivables and inventory lines must reconcile to the movements shown here. Where they do not, look for an acquisition, a disposal, or a reclassification — and read the note that explains it.
- **Watch the interest paid line against the finance cost line.** Finance cost is added back; interest paid is deducted. A large and growing gap between them means interest is being accrued rather than settled, or capitalised into an asset. Both are worth understanding before you accept the profit figure.
- **Treat any sudden NOCF improvement with no operational change as a classification question.** Check capex in the same year. If capex jumped while NOCF jumped and no new plant was commissioned, an expense probably became an asset.
- **Look at the sign pattern across all three sections before any number.** Minus, minus, big plus is the configuration to reject on sight. It takes four seconds and it filters more bad DSE companies than any ratio in this book.
- **For the mid-cap boards specifically, compute the accruals ratio for every company you are screening and rank by it.** The bottom of that ranking is where the DSE's future exceptional items are sitting today, disclosed, audited, and ignored.`,
      bn: `- **আয় বিবরণীর আগে নগদ প্রবাহ বিবরণী পড়ুন।** বার্ষিক প্রতিবেদনে এটি সাধারণত তৃতীয় বিবরণী এবং সবার শেষে যেটিতে কেউ পৌঁছায়। আগে পড়লে আপনি EPS-এ নোঙর ফেলবেন না — ঠিক যেমন অধ্যায় ১১ price-to-book-এর আগে ট্যানজিবল NAV দাবি করেছিল।
- **নিট মুনাফা ও NOCF পাশাপাশি রেখে পাঁচ বছরের একটি সারি বানান।** প্রতি কোম্পানিতে পনেরো মিনিট লাগে, আর বাংলাদেশি মৌল বিশ্লেষণে এটিই সর্বোচ্চ ফলদায়ী পনেরো মিনিট। পাঁচ বছরের দুটি সারিরই যোগফল করুন। পুঞ্জীভূত NOCF যদি পুঞ্জীভূত মুনাফার অনেক নিচে হয়, তবে ব্যবধানটি কখনো বন্ধ হয়নি — জমেছে।
- **লভ্যাংশ NOCF দিয়ে আচ্ছাদিত ছিল কি না দেখুন।** প্রদত্ত লভ্যাংশকে NOCF দিয়ে ভাগ করুন। ১.০-এর ওপরে মানে বিতরণটি পরিচালন ছাড়া অন্য কোথাও থেকে এসেছে, আর অর্থায়ন অংশ বলে দেবে কোথা থেকে। স্বল্পমেয়াদি ব্যাংক ঋণে অর্থায়িত লভ্যাংশ হলো শেয়ারহোল্ডার-বান্ধব পোশাক পরা একটি সচ্ছলতার প্রশ্ন।
- **চলতি মূলধনের নড়াচড়ার সঙ্গে স্থিতিপত্রের পরিবর্তন মিলিয়ে দেখুন।** অধ্যায় ১১-এর প্রাপ্য ও মজুদের লাইন এখানে দেখানো নড়াচড়ার সঙ্গে মিলতেই হবে। না মিললে কোনো অধিগ্রহণ, বিক্রয় বা পুনঃশ্রেণিবিভাজন খুঁজুন — এবং তার ব্যাখ্যা দেওয়া নোটটি পড়ুন।
- **অর্থব্যয়ের লাইনের বিপরীতে প্রদত্ত সুদের লাইনটি লক্ষ করুন।** অর্থব্যয় ফেরত যোগ হয়; প্রদত্ত সুদ বাদ যায়। দুটির মধ্যে বড় ও ক্রমবর্ধমান ব্যবধান মানে সুদ নিষ্পত্তি না হয়ে সঞ্চিত হচ্ছে, নয়তো কোনো সম্পদে মূলধনীকৃত হচ্ছে। মুনাফার অঙ্ক মেনে নেওয়ার আগে দুটোই বোঝার মতো।
- **পরিচালনগত কোনো পরিবর্তন ছাড়া NOCF-এর আকস্মিক উন্নতিকে শ্রেণিবিভাজনের প্রশ্ন হিসেবে দেখুন।** একই বছরের capex দেখুন। NOCF লাফানোর সঙ্গে capex-ও লাফালো অথচ নতুন কোনো প্ল্যান্ট চালু হয়নি — তবে সম্ভবত একটি ব্যয় সম্পদ হয়ে গেছে।
- **কোনো সংখ্যা দেখার আগে তিনটি অংশের চিহ্নের ধরনটি দেখুন।** বিয়োগ, বিয়োগ, বড় যোগ — দেখামাত্র বাতিল করার বিন্যাস। এতে চার সেকেন্ড লাগে, আর এই বইয়ের যেকোনো অনুপাতের চেয়ে বেশি খারাপ ডিএসই কোম্পানি এটি ছেঁকে ফেলে।
- **বিশেষত মাঝারি বোর্ডে, আপনি যত কোম্পানি স্ক্রিন করছেন প্রত্যেকের accruals ratio গণনা করে সেই অনুযায়ী সাজান।** ঐ ক্রমের তলানিতেই আজ বসে আছে ডিএসই-র ভবিষ্যৎ "ব্যতিক্রমী দফা"গুলো — প্রকাশিত, নিরীক্ষিত, এবং উপেক্ষিত।`,
    },

    exercises: {
      en: `1. Pick any DSE-listed company outside the banking sector. From its latest annual report, record net profit and net cash from operating activities. Compute cash conversion and the accruals ratio. Which band of the cash conversion table does it fall in?
2. Repeat exercise 1 for the four preceding years. Build a five-year table with net profit in one row and NOCF in the row beneath. Sum both rows. State in two sentences what the cumulative gap tells you.
3. For the same company, take the operating section apart. Record operating profit before working capital changes, then each working capital line separately. What percentage of the movement from that subtotal to NOCF was caused by receivables alone?
4. Find the receivables and inventory figures in the balance sheet for two consecutive years. Compute the change. Do those changes match the working capital lines in the cash flow statement? If not, find the note that explains the difference.
5. Compute dividend paid divided by NOCF for three consecutive years. In any year where the ratio exceeds 1.0, read the financing section and state where the cash for the dividend actually came from.
6. Compute free cash flow (NOCF − capex) for five years and sum it. Then compute the total new borrowing raised over the same five years from the financing sections. Compare the two numbers and explain the relationship in three sentences.
7. Find a DSE company that reported rising EPS and falling NOCF per share in the same year. Read the working capital section and identify which single line caused the divergence.
8. Using the Python class in §12.11, change \`receivables_change\` for Jamuna from −62 to −20 and re-run. Record the new NOCF, cash conversion, accruals ratio and verdict. Explain in two sentences what BDT 42 crore of collected receivables would have done to the company's year.
9. Build the Excel sheet from §12.10 for three companies in the same sector. Rank them by cash conversion. Now rank them by P/E. Where the two rankings disagree, state which company you would actually buy and why.
10. Take one company whose capex rose sharply in a year when NOCF also rose sharply. Read the PPE note. Was new productive capacity commissioned, or did an expense become an asset? State your conclusion and the specific disclosure that supports it.`,
      bn: `১. ব্যাংক খাতের বাইরে যেকোনো ডিএসই-তালিকাভুক্ত কোম্পানি বাছুন। এর সর্বশেষ বার্ষিক প্রতিবেদন থেকে নিট মুনাফা ও পরিচালন কার্যক্রম থেকে নিট নগদ নথিভুক্ত করুন। Cash conversion ও accruals ratio গণনা করুন। Cash conversion সারণির কোন স্তরে এটি পড়ে?
২. আগের চার বছরের জন্য অনুশীলনী ১ পুনরাবৃত্তি করুন। একটি সারিতে নিট মুনাফা ও তার নিচের সারিতে NOCF রেখে পাঁচ বছরের সারণি বানান। দুটি সারিরই যোগফল করুন। পুঞ্জীভূত ব্যবধান আপনাকে কী বলে তা দুই বাক্যে বলুন।
৩. একই কোম্পানির পরিচালন অংশটি ভেঙে ফেলুন। চলতি মূলধন পরিবর্তনের পূর্বে পরিচালন মুনাফা, তারপর প্রতিটি চলতি মূলধন লাইন আলাদাভাবে নথিভুক্ত করুন। ঐ উপযোগফল থেকে NOCF পর্যন্ত নড়াচড়ার কত শতাংশ কেবল প্রাপ্যের কারণে হয়েছে?
৪. টানা দুই বছরের স্থিতিপত্র থেকে প্রাপ্য ও মজুদের অঙ্ক নিন। পরিবর্তন গণনা করুন। ঐ পরিবর্তনগুলো কি নগদ প্রবাহ বিবরণীর চলতি মূলধন লাইনের সঙ্গে মেলে? না মিললে পার্থক্যটি ব্যাখ্যা করা নোটটি খুঁজুন।
৫. টানা তিন বছরের প্রদত্ত লভ্যাংশকে NOCF দিয়ে ভাগ করুন। যে বছরে অনুপাতটি ১.০ ছাড়ায়, সেই বছরের অর্থায়ন অংশ পড়ুন এবং বলুন লভ্যাংশের টাকা প্রকৃতপক্ষে কোথা থেকে এসেছিল।
৬. পাঁচ বছরের free cash flow (NOCF − capex) গণনা করে যোগফল করুন। এরপর ঐ একই পাঁচ বছরের অর্থায়ন অংশ থেকে মোট নতুন গৃহীত ঋণ গণনা করুন। দুটি সংখ্যা তুলনা করুন এবং সম্পর্কটি তিন বাক্যে ব্যাখ্যা করুন।
৭. এমন একটি ডিএসই কোম্পানি খুঁজুন যে একই বছরে বাড়তি EPS ও কমতি NOCF per share প্রতিবেদন করেছে। চলতি মূলধন অংশটি পড়ুন এবং চিহ্নিত করুন কোন একটিমাত্র লাইন এই বিচ্যুতি ঘটিয়েছে।
৮. §১২.১১-এর Python ক্লাসে যমুনার \`receivables_change\` −৬২ থেকে −২০ করে পুনরায় চালান। নতুন NOCF, cash conversion, accruals ratio ও রায় নথিভুক্ত করুন। ৪২ কোটি টাকার আদায়কৃত প্রাপ্য কোম্পানির বছরটিতে কী করত তা দুই বাক্যে ব্যাখ্যা করুন।
৯. একই খাতের তিনটি কোম্পানির জন্য §১২.১০-এর এক্সেল শিট বানান। Cash conversion অনুযায়ী সাজান। এবার P/E অনুযায়ী সাজান। যেখানে দুটি ক্রম মেলে না, সেখানে আপনি প্রকৃতপক্ষে কোন কোম্পানিটি কিনবেন এবং কেন তা বলুন।
১০. এমন একটি কোম্পানি নিন যার capex এমন বছরে তীব্রভাবে বেড়েছে যে বছরে NOCF-ও তীব্রভাবে বেড়েছে। PPE নোটটি পড়ুন। নতুন উৎপাদন সক্ষমতা কি চালু হয়েছিল, নাকি একটি ব্যয় সম্পদ হয়ে গিয়েছিল? আপনার সিদ্ধান্ত এবং তা সমর্থনকারী নির্দিষ্ট প্রকাশনাটি বলুন।`,
    },

    summary: {
      en: `- The cash flow statement, required under IAS 7 as adopted in Bangladesh, records money that actually moved. Profit is an opinion built on estimates; cash is confirmed by a third party with no interest in the share price.
- **Cash is not unmanipulable — it is manipulable only in ways that are visible or that unwind.** Reclassifying an expense as an asset moves it from operating to investing; delaying supplier payments over the reporting date reverses in weeks. Profit can be inflated indefinitely by an estimate.
- The three sections answer three questions: **operating** — do customers pay us; **investing** — are we buying capacity; **financing** — are we raising money or returning it. **Minus, minus, big plus is the configuration to reject on sight.**
- Almost every Bangladeshi company uses the **indirect method**, which is a reconciliation. It shows you line by line where reported profit and reported cash diverged. That reconciliation is the analytical content.
- **An operating asset rising consumes cash; an operating liability rising releases it.** This is where Chapter 11's overstated inventory and receivables become arithmetically undeniable — the lie cannot be hidden in the profit line and the working capital line at the same time.
- **NOCF per share is printed beside EPS in every Bangladeshi disclosure.** EPS is what management says the year produced; NOCF per share is what the year deposited. Use the pair for sign and direction, not as a valuation multiple — for a multiple use free cash flow.
- For Jamuna Engineering: net profit **BDT 40 crore**, NOCF **negative BDT 12 crore**. EPS **BDT 5.00**, NOCF per share **−BDT 1.50**, an accrual gap of **BDT 6.50 per share**. Cash conversion **−0.30×**, accruals ratio **6.67%**, free cash flow **−BDT 67 crore**.
- **The working capital movement of BDT 81 crore was larger than profit before tax of BDT 54 crore.** The year was decided in one section of one statement that most investors never open.
- **Jamuna's BDT 8 crore dividend was paid out of BDT 72 crore of new short-term bank borrowing.** Its dividend, its capex and its solvency now depend on that line being renewed — which returns you to Chapter 11's rollover risk, a year earlier and in cash terms.
- Free cash flow is NOCF minus capex — the only cash genuinely available. Negative FCF driven by strong NOCF and heavy capex is investment. **Negative FCF driven by negative NOCF is a company investing out of borrowings while its operations consume cash.**
- **Discipline established:** never state EPS for a Bangladeshi company without stating NOCF per share in the same breath, and never accept a growth narrative as an explanation for negative operating cash flow without a five-year table in front of you. Profit tells you what management concluded. Cash tells you what the customers did.`,
      bn: `- নগদ প্রবাহ বিবরণী, যা বাংলাদেশে গৃহীত IAS 7 অনুযায়ী বাধ্যতামূলক, প্রকৃতপক্ষে নড়াচড়া করা টাকা নথিবদ্ধ করে। মুনাফা নিরূপণের ওপর গড়া একটি মতামত; নগদ নিশ্চিত করে এমন একটি তৃতীয় পক্ষ যার শেয়ারদরে কোনো স্বার্থ নেই।
- **নগদ কারসাজি-অযোগ্য নয় — এটি কেবল এমন উপায়েই কারসাজিযোগ্য যা দৃশ্যমান, নয়তো যা খুলে যায়।** ব্যয়কে সম্পদ হিসেবে পুনঃশ্রেণিবদ্ধ করলে তা পরিচালন থেকে বিনিয়োগে সরে; প্রতিবেদন তারিখের ওপর দিয়ে সরবরাহকারীর পাওনা পেছালে কয়েক সপ্তাহেই উল্টে যায়। মুনাফা একটি নিরূপণ দিয়ে অনন্তকাল স্ফীত করা যায়।
- তিনটি অংশ তিনটি প্রশ্নের উত্তর দেয়: **পরিচালন** — ক্রেতারা কি টাকা দেন; **বিনিয়োগ** — আমরা কি সক্ষমতা কিনছি; **অর্থায়ন** — আমরা কি টাকা তুলছি না ফেরত দিচ্ছি। **বিয়োগ, বিয়োগ, বড় যোগ — দেখামাত্র বাতিল করার বিন্যাস।**
- প্রায় প্রতিটি বাংলাদেশি কোম্পানি **পরোক্ষ পদ্ধতি** ব্যবহার করে, যা একটি সমন্বয়-বিবরণ। এটি লাইনে লাইনে দেখায় প্রতিবেদিত মুনাফা ও প্রতিবেদিত নগদ কোথায় আলাদা হলো। ঐ সমন্বয়টিই বিশ্লেষণী উপাদান।
- **পরিচালন সম্পদ বাড়লে নগদ খরচ হয়; পরিচালন দায় বাড়লে নগদ ছাড়া পায়।** এখানেই অধ্যায় ১১-এর বাড়িয়ে দেখানো মজুদ ও প্রাপ্য পাটিগাণিতিকভাবে অস্বীকার-অযোগ্য হয় — মিথ্যাটি মুনাফার লাইনে ও চলতি মূলধনের লাইনে একসঙ্গে লুকানো যায় না।
- **প্রতিটি বাংলাদেশি প্রকাশনায় NOCF per share ছাপা হয় EPS-এর পাশে।** EPS হলো ব্যবস্থাপনা যা বলছে বছরটি তৈরি করেছে; NOCF per share হলো বছরটি যা জমা দিয়েছে। জোড়াটি ব্যবহার করুন চিহ্ন ও দিকের জন্য, মূল্যায়ন গুণিতক হিসেবে নয় — গুণিতকের জন্য free cash flow।
- যমুনা ইঞ্জিনিয়ারিংয়ের জন্য: নিট মুনাফা **৪০ কোটি টাকা**, NOCF **ঋণাত্মক ১২ কোটি টাকা**। EPS **৫.০০ টাকা**, NOCF per share **−১.৫০ টাকা**, প্রতি শেয়ারে সঞ্চিতি-ব্যবধান **৬.৫০ টাকা**। Cash conversion **−০.৩০×**, accruals ratio **৬.৬৭%**, free cash flow **−৬৭ কোটি টাকা**।
- **৮১ কোটি টাকার চলতি মূলধন নড়াচড়া ৫৪ কোটি টাকার কর-পূর্ব মুনাফার চেয়েও বড় ছিল।** বছরটি নির্ধারিত হয়েছে এমন একটি বিবরণীর এমন একটি অংশে, যা বেশিরভাগ বিনিয়োগকারী কখনো খোলেন না।
- **যমুনার ৮ কোটি টাকার লভ্যাংশ দেওয়া হয়েছে ৭২ কোটি টাকার নতুন স্বল্পমেয়াদি ব্যাংক ঋণ থেকে।** তার লভ্যাংশ, তার capex এবং তার সচ্ছলতা এখন ঐ সীমাটি নবায়িত হওয়ার ওপর নির্ভরশীল — যা আপনাকে অধ্যায় ১১-এর রোলওভার ঝুঁকিতেই ফিরিয়ে নেয়, এক বছর আগে এবং নগদের ভাষায়।
- Free cash flow হলো NOCF বিয়োগ capex — একমাত্র সত্যিই উপলব্ধ নগদ। শক্তিশালী NOCF ও ভারী capex-চালিত ঋণাত্মক FCF হলো বিনিয়োগ। **ঋণাত্মক NOCF-চালিত ঋণাত্মক FCF হলো এমন একটি কোম্পানি যে ঋণ থেকে বিনিয়োগ করছে, অথচ তার পরিচালন নগদ খেয়ে ফেলছে।**
- **প্রতিষ্ঠিত শৃঙ্খলা:** কোনো বাংলাদেশি কোম্পানির EPS কখনো একই নিঃশ্বাসে NOCF per share না বলে উচ্চারণ করবেন না, আর সামনে পাঁচ বছরের সারণি না রেখে ঋণাত্মক পরিচালন নগদ প্রবাহের ব্যাখ্যা হিসেবে কোনো প্রবৃদ্ধির আখ্যান মেনে নেবেন না। মুনাফা বলে ব্যবস্থাপনা কী সিদ্ধান্তে এসেছে। নগদ বলে ক্রেতারা কী করেছেন।`,
    },
  },

  interview: [
    {
      q: {
        en: 'Why is operating cash flow harder to manipulate than net profit, and where can it still be manipulated?',
        bn: 'পরিচালন নগদ প্রবাহে নিট মুনাফার চেয়ে কারসাজি করা কেন কঠিন, এবং কোথায় এতে এখনো কারসাজি করা যায়?',
      },
      a: {
        en: 'Net profit depends on a series of management estimates — when revenue is earned, how much inventory is obsolete, what proportion of receivables is uncollectable, useful lives, provisions. Every one of those moves profit and none of them moves cash. Cash contains no estimate: a taka either entered the bank account or it did not, and the closing balance can be confirmed directly with the bank by the auditor. That said, three manipulations remain available. First and most important, classification: the total cash movement is a fact but the section it sits in is a choice, so capitalising an operating expense moves it from operating to investing and raises NOCF without changing the bank balance at all. Second, timing around the reporting date — deferring supplier payments or pushing collections into the last fortnight, both of which reverse within weeks. Third, raising cash rather than earning it, which is why you read the financing section alongside the operating one. The honest summary is that manipulating cash flow requires either a reclassification visible in the notes or a trick that unwinds quickly, whereas profit can be inflated indefinitely by an estimate nobody can audit to a single number.',
        bn: 'নিট মুনাফা নির্ভর করে ব্যবস্থাপনার একগুচ্ছ নিরূপণের ওপর — রাজস্ব কখন অর্জিত, কতটা মজুদ অপ্রচলিত, প্রাপ্যের কত অংশ অনাদায়ী, উপযোগী আয়ু, সঞ্চিতি। এর প্রতিটিই মুনাফা নাড়ায়, কোনোটিই নগদ নাড়ায় না। নগদে কোনো নিরূপণ নেই: একটি টাকা হয় ব্যাংক হিসাবে ঢুকেছে নয়তো ঢোকেনি, আর নিরীক্ষক ব্যাংকের সঙ্গে সরাসরি সমাপনী স্থিতি নিশ্চিত করতে পারেন। তবু তিনটি কারসাজি রয়ে যায়। প্রথম এবং সবচেয়ে গুরুত্বপূর্ণ, শ্রেণিবিভাজন: মোট নগদ নড়াচড়া একটি ঘটনা, কিন্তু সেটি কোন অংশে বসবে তা একটি পছন্দ — তাই পরিচালন ব্যয়কে মূলধনীকরণ করলে তা পরিচালন থেকে বিনিয়োগে সরে যায় এবং ব্যাংক স্থিতি একটুও না বদলে NOCF বাড়ে। দ্বিতীয়, প্রতিবেদন তারিখের আশপাশে সময় — সরবরাহকারীর পাওনা পেছানো বা শেষ পনেরো দিনে আদায়ে চাপ, দুটোই কয়েক সপ্তাহে উল্টে যায়। তৃতীয়, নগদ অর্জনের বদলে সংগ্রহ করা — এ কারণেই পরিচালন অংশের পাশাপাশি অর্থায়ন অংশ পড়তে হয়। সৎ সারাংশ হলো, নগদ প্রবাহে কারসাজি করতে হয় নোটে দৃশ্যমান একটি পুনঃশ্রেণিবিভাজন, নয়তো দ্রুত খুলে যাওয়া একটি কৌশল — অথচ মুনাফা অনির্দিষ্টকাল স্ফীত করা যায় এমন একটি নিরূপণ দিয়ে যাকে কেউ একটিমাত্র সংখ্যায় নিরীক্ষা করতে পারে না।',
      },
    },
    {
      q: {
        en: 'A company reports BDT 40 crore of net profit and negative BDT 12 crore of operating cash flow. Walk me through how you would investigate that.',
        bn: 'একটি কোম্পানি ৪০ কোটি টাকা নিট মুনাফা এবং ঋণাত্মক ১২ কোটি টাকা পরিচালন নগদ প্রবাহ প্রতিবেদন করে। আপনি কীভাবে এটি অনুসন্ধান করবেন তা ব্যাখ্যা করুন।',
      },
      a: {
        en: 'I would take the operating section apart from the top. Profit before tax of BDT 54 crore, plus depreciation of 26, finance cost of 22 and a disposal loss of 2, less interest income of 3, gives operating profit before working capital of BDT 101 crore — so the business itself is not the problem. The entire divergence sits in working capital: receivables up 62, inventory up 33, advances up 4, offset by payables up only 18, a net drag of BDT 81 crore. That leaves BDT 20 crore of cash generated from operations, and after interest paid of 22 and tax paid of 10, NOCF is negative BDT 12 crore. So the first finding is that the working capital movement of BDT 81 crore exceeded profit before tax of BDT 54 crore — the year was decided there, not in the income statement. Next I would compute cash conversion of −0.30 and the accruals ratio of 6.67% of total assets, then repeat both for the two prior years to see whether this is a one-year expansion or a pattern. Then I would read the receivables ageing note, because BDT 62 crore of new receivables against BDT 620 crore of revenue is roughly 36 days of additional credit extended in a single year. Finally I would read the financing section: BDT 72 crore of net new short-term borrowing funded BDT 55 crore of capex, the operating deficit, and an BDT 8 crore dividend. That last fact is the one I would lead with — the dividend was paid out of borrowed money.',
        bn: 'আমি পরিচালন অংশটি ওপর থেকে ভেঙে দেখব। ৫৪ কোটি টাকা কর-পূর্ব মুনাফা, যোগ ২৬ অবচয়, ২২ অর্থব্যয় ও ২ বিক্রয়-ক্ষতি, বাদ ৩ সুদ আয় — চলতি মূলধনের আগে পরিচালন মুনাফা ১০১ কোটি টাকা, অর্থাৎ ব্যবসাটি নিজে সমস্যা নয়। সম্পূর্ণ বিচ্যুতিটি চলতি মূলধনে: প্রাপ্য বৃদ্ধি ৬২, মজুদ বৃদ্ধি ৩৩, অগ্রিম বৃদ্ধি ৪, বিপরীতে প্রদেয় বৃদ্ধি মাত্র ১৮ — নিট টান ৮১ কোটি টাকা। তাতে পরিচালন থেকে উদ্ভূত নগদ দাঁড়ায় ২০ কোটি টাকা, এবং ২২ কোটি প্রদত্ত সুদ ও ১০ কোটি প্রদত্ত করের পর NOCF ঋণাত্মক ১২ কোটি টাকা। তাই প্রথম সিদ্ধান্ত: ৮১ কোটি টাকার চলতি মূলধন নড়াচড়া ৫৪ কোটি টাকার কর-পূর্ব মুনাফাকে ছাড়িয়ে গেছে — বছরটি সেখানেই নির্ধারিত হয়েছে, আয় বিবরণীতে নয়। এরপর আমি cash conversion −০.৩০ এবং মোট সম্পদের ৬.৬৭% accruals ratio গণনা করব, তারপর আগের দুই বছরের জন্য দুটোই পুনরাবৃত্তি করব — এটি এক বছরের সম্প্রসারণ না একটি ধরন তা দেখতে। এরপর প্রাপ্যের বয়স-বিন্যাস নোট পড়ব, কারণ ৬২০ কোটি টাকা রাজস্বের বিপরীতে ৬২ কোটি টাকার নতুন প্রাপ্য মানে এক বছরে প্রায় ৩৬ দিনের অতিরিক্ত বাকি দেওয়া। শেষে অর্থায়ন অংশ পড়ব: ৭২ কোটি টাকার নিট নতুন স্বল্পমেয়াদি ঋণ ৫৫ কোটি টাকার capex, পরিচালন ঘাটতি এবং ৮ কোটি টাকার লভ্যাংশ — সবই অর্থায়ন করেছে। শেষ তথ্যটি দিয়েই আমি শুরু করব: লভ্যাংশ দেওয়া হয়েছে ধার করা টাকা থেকে।',
      },
    },
    {
      q: {
        en: 'Explain the difference between the direct and indirect methods, and why the indirect method is more useful to an analyst even though it is less informative about actual cash categories.',
        bn: 'প্রত্যক্ষ ও পরোক্ষ পদ্ধতির পার্থক্য ব্যাখ্যা করুন, এবং প্রকৃত নগদ শ্রেণি সম্পর্কে কম তথ্য দেওয়া সত্ত্বেও পরোক্ষ পদ্ধতি একজন বিশ্লেষকের কাছে কেন বেশি কার্যকর।',
      },
      a: {
        en: 'The direct method lists actual cash categories — cash received from customers, cash paid to suppliers, cash paid to employees. It is a better description of what happened, and almost no Bangladeshi company uses it because preparing it requires a cash-basis ledger that most do not maintain. The indirect method starts from profit before tax and adjusts backwards: add non-cash charges, add back finance cost, deduct non-cash gains and interest income, adjust for working capital movements, deduct interest and tax actually paid. The result is the same NOCF figure either way. The reason the indirect method is more useful analytically is that it is a reconciliation rather than a report. A direct-method statement tells me operating cash was negative BDT 12 crore; an indirect-method statement tells me that it was negative because receivables rose 62 and inventory rose 33 against payables of only 18. That is a diagnosis, not a result, and it points me directly at the two notes I need to read next. The trade-off is real — the indirect method obscures what the business actually collects and pays — but for detecting earnings quality problems the reconciliation is exactly what you want.',
        bn: 'প্রত্যক্ষ পদ্ধতি প্রকৃত নগদ শ্রেণি তালিকাবদ্ধ করে — ক্রেতাদের কাছ থেকে প্রাপ্ত নগদ, সরবরাহকারীদের প্রদত্ত নগদ, কর্মচারীদের প্রদত্ত নগদ। কী ঘটেছে তার এটি ভালো বর্ণনা, আর প্রায় কোনো বাংলাদেশি কোম্পানিই এটি ব্যবহার করে না, কারণ এটি তৈরি করতে এমন নগদভিত্তিক খতিয়ান লাগে যা বেশিরভাগই রাখে না। পরোক্ষ পদ্ধতি কর-পূর্ব মুনাফা থেকে শুরু করে পিছিয়ে সমন্বয় করে: অ-নগদ খরচ যোগ, অর্থব্যয় ফেরত যোগ, অ-নগদ আয় ও সুদ আয় বাদ, চলতি মূলধনের নড়াচড়া সমন্বয়, প্রকৃতপক্ষে প্রদত্ত সুদ ও কর বাদ। দুই পদ্ধতিতেই NOCF-এর অঙ্ক একই। বিশ্লেষণগতভাবে পরোক্ষ পদ্ধতি বেশি কার্যকর কারণ এটি প্রতিবেদন নয়, একটি সমন্বয়-বিবরণ। প্রত্যক্ষ পদ্ধতির বিবরণী আমাকে বলে পরিচালন নগদ ছিল ঋণাত্মক ১২ কোটি টাকা; পরোক্ষ পদ্ধতির বিবরণী বলে সেটি ঋণাত্মক হয়েছে কারণ প্রাপ্য বেড়েছে ৬২ ও মজুদ বেড়েছে ৩৩, বিপরীতে প্রদেয় মাত্র ১৮। এটি ফলাফল নয়, রোগনির্ণয় — এবং এটি সরাসরি দেখিয়ে দেয় পরবর্তী কোন দুটি নোট আমাকে পড়তে হবে। বিনিময়টি বাস্তব — পরোক্ষ পদ্ধতি আড়াল করে ব্যবসাটি প্রকৃতপক্ষে কী আদায় করে ও কী পরিশোধ করে — কিন্তু আয়ের গুণমানের সমস্যা শনাক্ত করতে ঐ সমন্বয়টিই ঠিক যা আপনি চান।',
      },
    },
    {
      q: {
        en: 'A company shows strongly positive NOCF and heavily negative free cash flow. Is that a concern?',
        bn: 'একটি কোম্পানি প্রবলভাবে ধনাত্মক NOCF ও ভারীভাবে ঋণাত্মক free cash flow দেখায়। এটি কি উদ্বেগের বিষয়?',
      },
      a: {
        en: 'Not on its own — that is the signature of an expanding company, and it is the pattern a discounted cash flow model is designed to value. Free cash flow is NOCF minus capital expenditure, so negative FCF simply means the company spent more on assets than its operations produced in the period. The question is what the capex bought and whether NOCF grows to support it. So I would check three things. First, whether the capex is expansionary or maintenance — the PPE note and the capital work-in-progress line tell you whether new capacity is being built or existing plant replaced. Second, the trend in NOCF over five years: rising NOCF alongside heavy capex is investment working; flat NOCF alongside years of heavy capex is capital being consumed. Third, how the gap is funded, from the financing section — funding expansion out of retained cash and long-term debt is different from funding it out of short-term working capital lines, which is the Chapter 11 rollover problem in a new costume. What would concern me is the opposite configuration: negative FCF driven by negative NOCF. There the company is not investing out of earnings at all; it is borrowing to run and borrowing to expand simultaneously, and every taka of expansion increases next year\'s external funding requirement.',
        bn: 'নিজে থেকে নয় — এটি একটি সম্প্রসারণশীল কোম্পানির স্বাক্ষর, এবং discounted cash flow মডেল ঠিক এই ধরনটিরই মূল্যায়নের জন্য তৈরি। Free cash flow হলো NOCF বিয়োগ মূলধনী ব্যয়, তাই ঋণাত্মক FCF-এর মানে কেবল এই যে কোম্পানি ঐ সময়কালে পরিচালন যা তৈরি করেছে তার চেয়ে বেশি সম্পদে খরচ করেছে। প্রশ্ন হলো capex দিয়ে কী কেনা হলো এবং NOCF তা সমর্থন করার মতো বাড়ে কি না। তাই আমি তিনটি জিনিস দেখব। প্রথমত, capex সম্প্রসারণমূলক না রক্ষণাবেক্ষণমূলক — PPE নোট ও চলমান মূলধনী কাজের লাইন বলে দেয় নতুন সক্ষমতা গড়া হচ্ছে না পুরনো প্ল্যান্ট বদলানো হচ্ছে। দ্বিতীয়ত, পাঁচ বছরে NOCF-এর প্রবণতা: ভারী capex-এর পাশাপাশি বাড়তে থাকা NOCF মানে বিনিয়োগ কাজ করছে; বছরের পর বছর ভারী capex-এর পাশাপাশি স্থির NOCF মানে মূলধন ক্ষয় হচ্ছে। তৃতীয়ত, ব্যবধানটি কীভাবে অর্থায়িত, অর্থায়ন অংশ থেকে — সংরক্ষিত নগদ ও দীর্ঘমেয়াদি ঋণ দিয়ে সম্প্রসারণে অর্থায়ন আর স্বল্পমেয়াদি চলতি মূলধন সীমা দিয়ে অর্থায়ন এক জিনিস নয়, দ্বিতীয়টি নতুন পোশাকে অধ্যায় ১১-এর রোলওভার সমস্যা। যা আমাকে উদ্বিগ্ন করত তা হলো বিপরীত বিন্যাসটি: ঋণাত্মক NOCF-চালিত ঋণাত্মক FCF। সেখানে কোম্পানি আদৌ আয় থেকে বিনিয়োগ করছে না; সে একই সঙ্গে চলার জন্য ধার করছে এবং বাড়ার জন্য ধার করছে, আর সম্প্রসারণের প্রতিটি টাকা পরের বছরের বাহ্যিক অর্থায়নের প্রয়োজন বাড়ায়।',
      },
    },
    {
      q: {
        en: 'What does the accruals ratio measure, and what threshold would make you reject a company?',
        bn: 'Accruals ratio কী পরিমাপ করে, এবং কোন সীমায় আপনি একটি কোম্পানি বাতিল করবেন?',
      },
      a: {
        en: 'The accruals ratio is net profit minus NOCF, divided by total assets. It measures the portion of reported earnings that did not arrive as cash, scaled by the balance sheet those accruals are accumulating on. Total assets rather than revenue is the right denominator precisely because accruals build up as balance sheet items — receivables, inventory, capitalised costs — so the scaling should match where they sit. On level, above roughly 5% I want an explanation and above 10% I treat reported profit as unproven. But the threshold matters far less than persistence. Accruals in any single year are normal and mechanically unavoidable; the diagnostic value is in the sequence. Three consecutive years above 5% means working capital has been expanding faster than the business converts it, and working capital cannot expand forever — either the receivables convert to cash or they are written off, and the write-off arrives as a single large exceptional item years later. So my practical rule is: compute it for five years, look at the sign and the trend rather than any one value, and treat a rising multi-year series as a finding rather than a flag. For Jamuna at 6.67% in one year I would not reject outright; I would compute the prior two years first, and I would read the receivables ageing note before I did anything else.',
        bn: 'Accruals ratio হলো নিট মুনাফা বিয়োগ NOCF, ভাগ মোট সম্পদ। এটি পরিমাপ করে প্রতিবেদিত আয়ের কতটা নগদ হয়ে আসেনি, এবং সেই সঞ্চিতি যে স্থিতিপত্রে জমছে তার মাপে সমন্বিত। রাজস্বের বদলে মোট সম্পদই সঠিক হর, ঠিক এ কারণেই যে সঞ্চিতি জমে স্থিতিপত্রের উপাদান হিসেবে — প্রাপ্য, মজুদ, মূলধনীকৃত ব্যয় — তাই মাপটিও সেখানেই মেলা উচিত। মাত্রার দিক থেকে, মোটামুটি ৫%-এর ওপরে আমি ব্যাখ্যা চাই এবং ১০%-এর ওপরে প্রতিবেদিত মুনাফাকে অপ্রমাণিত গণ্য করি। তবে সীমার চেয়ে স্থায়িত্ব অনেক বেশি গুরুত্বপূর্ণ। যেকোনো একক বছরে সঞ্চিতি স্বাভাবিক এবং যান্ত্রিকভাবে অনিবার্য; নির্ণায়ক মূল্যটি ক্রমটিতে। টানা তিন বছর ৫%-এর ওপরে মানে ব্যবসা যত দ্রুত রূপান্তর করে তার চেয়ে দ্রুত চলতি মূলধন বাড়ছে, আর চলতি মূলধন অনন্তকাল বাড়তে পারে না — হয় প্রাপ্য নগদে রূপান্তরিত হবে, নয়তো অবলোপন হবে, আর অবলোপনটি আসে বছরকয়েক পরে একটিমাত্র বড় ব্যতিক্রমী দফা হিসেবে। তাই আমার ব্যবহারিক নিয়ম: পাঁচ বছরের জন্য গণনা করুন, কোনো একটি মান নয় বরং চিহ্ন ও প্রবণতা দেখুন, এবং বহু-বছরের ঊর্ধ্বমুখী ধারাকে নিছক সতর্কতা নয় বরং একটি সিদ্ধান্ত গণ্য করুন। যমুনার এক বছরের ৬.৬৭%-এ আমি সরাসরি বাতিল করতাম না; আগে আগের দুই বছর গণনা করতাম, এবং অন্য কিছু করার আগে প্রাপ্যের বয়স-বিন্যাস নোটটি পড়তাম।',
      },
    },
    {
      q: {
        en: 'A company pays a dividend in a year when operating cash flow was negative. What does that tell you, and how would you verify it?',
        bn: 'একটি কোম্পানি এমন বছরে লভ্যাংশ দেয় যে বছরে পরিচালন নগদ প্রবাহ ঋণাত্মক ছিল। এটি আপনাকে কী বলে, এবং আপনি কীভাবে যাচাই করবেন?',
      },
      a: {
        en: 'It tells me the distribution did not come from operations, because operations produced no cash to distribute. There are only three other places it can have come from: an existing cash balance, an asset disposal, or new borrowing. The financing and investing sections identify which, and the verification is arithmetic rather than judgement. For Jamuna, operations consumed BDT 12 crore and investing consumed BDT 46 crore, a total requirement of BDT 58 crore, against an opening cash balance of BDT 11 crore. The financing section shows BDT 72 crore of net new short-term borrowing, BDT 9 crore of long-term repayment and the BDT 8 crore dividend. Strip out the borrowing and the company cannot pay the dividend, cannot fund the capex, and ends the year insolvent on cash. So the dividend was funded by short-term bank borrowing. I would then note what that means structurally rather than morally. A dividend is a signal — management is telling the market the business is generating returns. Here the signal is being manufactured with borrowed money, and the borrowing is the working capital line that Chapter 11 identified as renewable at the bank\'s discretion every ninety or one hundred eighty days. The company has committed cash it did not earn, to a distribution it did not need to make, funded by a facility it does not control. That is the finding, and it is visible in about ninety seconds from two sections of one statement.',
        bn: 'এটি আমাকে বলে বিতরণটি পরিচালন থেকে আসেনি, কারণ পরিচালন বিতরণ করার মতো কোনো নগদ তৈরি করেনি। এটি আর মাত্র তিন জায়গা থেকে আসতে পারে: বিদ্যমান নগদ স্থিতি, সম্পদ বিক্রয়, অথবা নতুন ঋণ। অর্থায়ন ও বিনিয়োগ অংশ চিহ্নিত করে দেয় কোনটি, আর যাচাইটি বিচার নয়, পাটিগণিত। যমুনার ক্ষেত্রে পরিচালন খেয়েছে ১২ কোটি টাকা ও বিনিয়োগ খেয়েছে ৪৬ কোটি টাকা — মোট প্রয়োজন ৫৮ কোটি টাকা, বিপরীতে প্রারম্ভিক নগদ স্থিতি ১১ কোটি টাকা। অর্থায়ন অংশ দেখায় ৭২ কোটি টাকার নিট নতুন স্বল্পমেয়াদি ঋণ, ৯ কোটি টাকার দীর্ঘমেয়াদি পরিশোধ এবং ৮ কোটি টাকার লভ্যাংশ। ঋণটি সরিয়ে দিন — কোম্পানি লভ্যাংশ দিতে পারে না, capex অর্থায়ন করতে পারে না, এবং নগদের দিক থেকে অসচ্ছল হয়ে বছর শেষ করে। অর্থাৎ লভ্যাংশটি স্বল্পমেয়াদি ব্যাংক ঋণে অর্থায়িত। এরপর আমি নৈতিক নয়, কাঠামোগত অর্থটি উল্লেখ করব। লভ্যাংশ একটি সংকেত — ব্যবস্থাপনা বাজারকে বলছে ব্যবসাটি রিটার্ন তৈরি করছে। এখানে সংকেতটি ধার করা টাকায় বানানো হচ্ছে, আর ঐ ঋণটি সেই চলতি মূলধন সীমা যাকে অধ্যায় ১১ চিহ্নিত করেছে ব্যাংকের ইচ্ছায় প্রতি নব্বই বা একশো আশি দিনে নবায়নযোগ্য হিসেবে। কোম্পানি এমন নগদ প্রতিশ্রুত করেছে যা সে অর্জন করেনি, এমন একটি বিতরণে যা তার করার দরকার ছিল না, এমন একটি সুবিধার টাকায় যা সে নিয়ন্ত্রণ করে না। এটাই সিদ্ধান্ত, এবং একটি বিবরণীর দুটি অংশ থেকে প্রায় নব্বই সেকেন্ডেই এটি দেখা যায়।',
      },
    },
  ],

  quiz: [
    {
      q: {
        en: 'Operating cash flow is harder to manipulate than net profit primarily because:',
        bn: 'পরিচালন নগদ প্রবাহে নিট মুনাফার চেয়ে কারসাজি করা প্রধানত কঠিন কারণ:',
      },
      options: {
        en: [
          'It is audited more strictly than the income statement',
          'It contains no management estimates — a taka either moved or it did not',
          'It is not required under IFRS',
          'It excludes tax and interest entirely',
        ],
        bn: [
          'এটি আয় বিবরণীর চেয়ে কঠোরভাবে নিরীক্ষিত হয়',
          'এতে ব্যবস্থাপনার কোনো নিরূপণ নেই — একটি টাকা হয় নড়েছে নয়তো নড়েনি',
          'IFRS-এ এটি বাধ্যতামূলক নয়',
          'এটি কর ও সুদ সম্পূর্ণ বাদ দেয়',
        ],
      },
      answer: 1,
    },
    {
      q: {
        en: 'Under the indirect method, an increase in trade receivables is shown as:',
        bn: 'পরোক্ষ পদ্ধতিতে বাণিজ্যিক প্রাপ্যের বৃদ্ধি দেখানো হয়:',
      },
      options: {
        en: [
          'A cash inflow, because sales have been made',
          'A cash outflow, because the asset rose without cash arriving',
          'A financing activity',
          'A non-cash adjustment added back to profit',
        ],
        bn: [
          'নগদ অন্তঃপ্রবাহ, কারণ বিক্রয় হয়েছে',
          'নগদ বহিঃপ্রবাহ, কারণ নগদ না এসেই সম্পদ বেড়েছে',
          'একটি অর্থায়ন কার্যক্রম',
          'মুনাফায় ফেরত-যোগ করা একটি অ-নগদ সমন্বয়',
        ],
      },
      answer: 1,
    },
    {
      q: {
        en: 'Net profit BDT 40 cr, NOCF −BDT 12 cr, 8 crore shares. NOCF per share is:',
        bn: 'নিট মুনাফা ৪০ কোটি টাকা, NOCF −১২ কোটি টাকা, ৮ কোটি শেয়ার। NOCF per share:',
      },
      options: {
        en: ['BDT 5.00', '−BDT 1.50', '−BDT 0.30', 'BDT 6.50'],
        bn: ['৫.০০ টাকা', '−১.৫০ টাকা', '−০.৩০ টাকা', '৬.৫০ টাকা'],
      },
      answer: 1,
    },
    {
      q: {
        en: 'Net profit BDT 40 cr, NOCF −BDT 12 cr, total assets BDT 780 cr. The accruals ratio is:',
        bn: 'নিট মুনাফা ৪০ কোটি, NOCF −১২ কোটি, মোট সম্পদ ৭৮০ কোটি টাকা। Accruals ratio:',
      },
      options: {
        en: ['3.59%', '5.13%', '6.67%', '−0.30%'],
        bn: ['৩.৫৯%', '৫.১৩%', '৬.৬৭%', '−০.৩০%'],
      },
      answer: 2,
    },
    {
      q: {
        en: 'Free cash flow is defined as:',
        bn: 'Free cash flow-এর সংজ্ঞা:',
      },
      options: {
        en: [
          'Net profit minus dividends paid',
          'NOCF minus capital expenditure',
          'Cash generated from operations before interest and tax',
          'Net change in cash across all three sections',
        ],
        bn: [
          'নিট মুনাফা বিয়োগ প্রদত্ত লভ্যাংশ',
          'NOCF বিয়োগ মূলধনী ব্যয়',
          'সুদ ও করের আগে পরিচালন থেকে উদ্ভূত নগদ',
          'তিনটি অংশজুড়ে নগদের নিট পরিবর্তন',
        ],
      },
      answer: 1,
    },
    {
      q: {
        en: 'A company shows negative operating cash flow, negative investing cash flow and a large positive financing cash flow. This means:',
        bn: 'একটি কোম্পানি ঋণাত্মক পরিচালন নগদ প্রবাহ, ঋণাত্মক বিনিয়োগ নগদ প্রবাহ ও বড় ধনাত্মক অর্থায়ন নগদ প্রবাহ দেখায়। এর মানে:',
      },
      options: {
        en: [
          'The company is growing strongly out of its own earnings',
          'Lenders and shareholders are funding both operations and expansion',
          'The company has repaid all its debt',
          'The statement does not balance',
        ],
        bn: [
          'কোম্পানি নিজের আয় থেকে জোরালোভাবে বাড়ছে',
          'ঋণদাতা ও শেয়ারহোল্ডাররা পরিচালন ও সম্প্রসারণ দুটোরই অর্থায়ন করছেন',
          'কোম্পানি তার সব ঋণ শোধ করেছে',
          'বিবরণীটি মেলে না',
        ],
      },
      answer: 1,
    },
    {
      q: {
        en: 'Capitalising an operating expense as an asset has what effect on the cash flow statement?',
        bn: 'পরিচালন ব্যয়কে সম্পদ হিসেবে মূলধনীকরণ করলে নগদ প্রবাহ বিবরণীতে কী প্রভাব পড়ে?',
      },
      options: {
        en: [
          'It reduces NOCF and total cash equally',
          'It raises NOCF by moving the outflow to investing, with no change in total cash',
          'It has no effect anywhere in the statement',
          'It appears only in the financing section',
        ],
        bn: [
          'এটি NOCF ও মোট নগদ সমানভাবে কমায়',
          'বহিঃপ্রবাহটি বিনিয়োগে সরিয়ে NOCF বাড়ায়, মোট নগদ অপরিবর্তিত থাকে',
          'বিবরণীর কোথাও এর কোনো প্রভাব নেই',
          'এটি কেবল অর্থায়ন অংশে দেখা যায়',
        ],
      },
      answer: 1,
    },
    {
      q: {
        en: 'An increase in trade payables improves NOCF. The correct reading of that is:',
        bn: 'বাণিজ্যিক প্রদেয়ের বৃদ্ধি NOCF উন্নত করে। এর সঠিক পাঠ:',
      },
      options: {
        en: [
          'Customers paid faster than expected',
          'The company deferred paying its suppliers — a bill was postponed, not collected',
          'The company issued new shares',
          'Inventory was written down',
        ],
        bn: [
          'ক্রেতারা প্রত্যাশার চেয়ে দ্রুত টাকা দিয়েছেন',
          'কোম্পানি সরবরাহকারীদের পাওনা পিছিয়েছে — একটি বিল স্থগিত হয়েছে, আদায় হয়নি',
          'কোম্পানি নতুন শেয়ার ইস্যু করেছে',
          'মজুদ অবলোপন করা হয়েছে',
        ],
      },
      answer: 1,
    },
    {
      q: {
        en: 'Cash conversion (NOCF / Net Profit) of −0.30× indicates:',
        bn: '−০.৩০× cash conversion (NOCF / নিট মুনাফা) নির্দেশ করে:',
      },
      options: {
        en: [
          'Profit converted to cash at a 30% rate',
          'Operations consumed cash — every taka of profit cost 30 poisha',
          'The company is 30% leveraged',
          'Depreciation exceeded profit by 30%',
        ],
        bn: [
          'মুনাফা ৩০% হারে নগদে রূপান্তরিত হয়েছে',
          'পরিচালন নগদ খেয়েছে — মুনাফার প্রতি টাকায় ৩০ পয়সা খরচ হয়েছে',
          'কোম্পানি ৩০% লিভারেজড',
          'অবচয় মুনাফাকে ৩০% ছাড়িয়েছে',
        ],
      },
      answer: 1,
    },
    {
      q: {
        en: 'A DSE company reports EPS of BDT 5.00 and NOCF per share of −BDT 1.50 in the same annual report. The best conclusion is:',
        bn: 'একটি ডিএসই কোম্পানি একই বার্ষিক প্রতিবেদনে EPS ৫.০০ টাকা ও NOCF per share −১.৫০ টাকা প্রতিবেদন করে। সবচেয়ে ভালো সিদ্ধান্ত:',
      },
      options: {
        en: [
          'The two numbers are not comparable, so the difference can be ignored',
          'The reported earnings did not arrive as money — investigate before valuing on EPS',
          'The company must have made an accounting error',
          'The share is cheap because NOCF per share is low',
        ],
        bn: [
          'সংখ্যা দুটি তুলনীয় নয়, তাই পার্থক্যটি উপেক্ষা করা যায়',
          'প্রতিবেদিত আয় টাকা হয়ে আসেনি — EPS-এ মূল্যায়নের আগে অনুসন্ধান করুন',
          'কোম্পানি নিশ্চয়ই হিসাবের ভুল করেছে',
          'শেয়ারটি সস্তা কারণ NOCF per share কম',
        ],
      },
      answer: 1,
    },
  ],
};
