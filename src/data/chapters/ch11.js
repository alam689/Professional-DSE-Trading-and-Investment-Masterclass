/**
 * Chapter 11 — The Balance Sheet
 * Part II, Company Analysis. Follows Ch 10 (Income Statement).
 */

export default {
  n: 11,
  tools: [],

  excelSheet: {
    filename: 'ch11-nav-adjuster.xlsx',
    sheetName: 'NAV Adjuster',
    cells: [
      { cell: 'A1', v: 'Paid-up Capital (BDT cr)' }, { cell: 'B1', v: 120 },
      { cell: 'A2', v: 'Face Value (BDT)' }, { cell: 'B2', v: 10 },
      { cell: 'A3', v: 'Shares Outstanding (cr)' }, { cell: 'B3', f: 'B1/B2' },

      { cell: 'A5', v: 'Share Premium' }, { cell: 'B5', v: 30 },
      { cell: 'A6', v: 'Revaluation Reserve' }, { cell: 'B6', v: 340 },
      { cell: 'A7', v: 'Retained Earnings' }, { cell: 'B7', v: 130 },
      { cell: 'A8', v: 'TOTAL EQUITY' }, { cell: 'B8', f: 'B1+B5+B6+B7' },

      { cell: 'A10', v: 'Intangibles & Goodwill' }, { cell: 'B10', v: 45 },

      { cell: 'A12', v: 'Reported NAV per Share' }, { cell: 'B12', f: 'B8/B3' },
      { cell: 'A13', v: 'Tangible Equity' }, { cell: 'B13', f: 'B8-B6-B10' },
      { cell: 'A14', v: 'TANGIBLE NAV per Share' }, { cell: 'B14', f: 'B13/B3' },
      { cell: 'A15', v: 'NAV Destroyed (%)' }, { cell: 'B15', f: '(B12-B14)/B12*100' },

      { cell: 'A17', v: 'Revaluation % of Equity' }, { cell: 'B17', f: 'B6/B8*100' },

      { cell: 'A19', v: 'Market Price (BDT)' }, { cell: 'B19', v: 28 },
      { cell: 'A20', v: 'P/B on Reported NAV' }, { cell: 'B20', f: 'B19/B12' },
      { cell: 'A21', v: 'P/B on Tangible NAV' }, { cell: 'B21', f: 'B19/B14' },
      {
        cell: 'A22', v: 'VERDICT',
      },
      {
        cell: 'B22',
        f: 'IF(B17>25,IF(B21>=1,"BOOK-VALUE ILLUSION - cheap only on paper","Revaluation-heavy but still cheap on tangible"),"Book value largely earned")',
      },

      { cell: 'A24', v: 'Current Assets' }, { cell: 'B24', v: 630 },
      { cell: 'A25', v: 'Current Liabilities' }, { cell: 'B25', v: 600 },
      { cell: 'A26', v: 'Working Capital' }, { cell: 'B26', f: 'B24-B25' },
      { cell: 'A27', v: 'Current Ratio' }, { cell: 'B27', f: 'B24/B25' },

      { cell: 'A29', v: 'Trade Receivables' }, { cell: 'B29', v: 265 },
      { cell: 'A30', v: 'Revenue' }, { cell: 'B30', v: 1060 },
      { cell: 'A31', v: 'Receivable Days' }, { cell: 'B31', f: 'B29/B30*365' },

      { cell: 'A33', v: 'Short-term Debt (incl. current portion)' }, { cell: 'B33', v: 450 },
      { cell: 'A34', v: 'Long-term Debt' }, { cell: 'B34', v: 185 },
      { cell: 'A35', v: 'Short-term % of Total Debt' }, { cell: 'B35', f: 'B33/(B33+B34)*100' },
      {
        cell: 'A36', v: 'ROLLOVER FLAG',
      },
      {
        cell: 'B36',
        f: 'IF(B35>50,"Majority of debt matures inside 12 months","Term structure acceptable")',
      },
    ],
  },

  objectives: {
    en: [
      'State the accounting identity and explain why it is a constraint, not a proof of accuracy.',
      'Separate current from non-current items and explain what each classification actually commits the company to.',
      'Identify the three balance sheet lines most commonly manipulated on the DSE — inventory, trade receivables, and revaluation reserves.',
      'Compute reported NAV per share and tangible NAV per share, and explain why the gap between them matters more than either number alone.',
      'Assess rollover risk from the term structure of debt rather than from the total debt figure.',
    ],
    bn: [
      'হিসাববিজ্ঞানের মৌলিক সমীকরণ বলা এবং কেন এটি একটি বাধ্যবাধকতা, নির্ভুলতার প্রমাণ নয়, তা ব্যাখ্যা করা।',
      'চলতি ও অ-চলতি উপাদান পৃথক করা এবং প্রতিটি শ্রেণিবিভাজন কোম্পানিকে প্রকৃতপক্ষে কীসে আবদ্ধ করে তা ব্যাখ্যা করা।',
      'ডিএসই-তে সবচেয়ে বেশি কারসাজি হওয়া তিনটি স্থিতিপত্র লাইন চিহ্নিত করা — মজুদ, বাণিজ্যিক প্রাপ্য, এবং পুনর্মূল্যায়ন সঞ্চিতি।',
      'প্রতিবেদিত NAV per share ও ট্যানজিবল NAV per share গণনা করা, এবং কেন এদের ব্যবধান দুটি সংখ্যার যেকোনো একটির চেয়ে বেশি গুরুত্বপূর্ণ তা ব্যাখ্যা করা।',
      'মোট ঋণের অঙ্ক নয়, ঋণের মেয়াদ-কাঠামো থেকে রোলওভার ঝুঁকি নিরূপণ করা।',
    ],
  },

  blocks: {
    theory: {
      en: `Chapter 10 established that the income statement is a **statement of flow over a period** — what the company claims it earned between two dates. The balance sheet is different in kind. It is a **statement of position at a single instant**: what the company owns, what it owes, and what is left over for shareholders, frozen on one date.

Under the *Companies Act, 1994* and IAS 1 as adopted in Bangladesh, its formal name is the **Statement of Financial Position**. Almost nobody in Dhaka calls it that.

### The accounting identity

$$\\text{Assets} = \\text{Liabilities} + \\text{Equity}$$

This always balances. **That is precisely why it proves nothing.**

The identity is a bookkeeping constraint, not a validation. If management overstates inventory by BDT 50 crore, the identity does not break — the offsetting BDT 50 crore simply appears in retained earnings, because unsold inventory that was never written down never passed through cost of goods sold. **A fraudulent balance sheet balances perfectly.** Investors who take comfort from a balance sheet that adds up have misunderstood what the addition means.

The identity rearranges to the sentence that matters:

$$\\text{Equity} = \\text{Assets} - \\text{Liabilities}$$

Equity — also called net assets, net worth, or shareholders' funds — is a **residual**. It is not a pool of money. It is what remains arithmetically after every creditor is satisfied. If the assets are overstated, the residual is overstated by the same amount, taka for taka.

### Current versus non-current

IAS 1 requires assets and liabilities to be split by whether they will be realised or settled **within twelve months** of the reporting date.

| | Current | Non-current |
|---|---|---|
| Assets | Cash, trade receivables, inventory, advances, short-term investments | PPE, intangibles, goodwill, long-term investments, deferred tax assets |
| Liabilities | Trade payables, short-term bank borrowing, current portion of long-term loan, accrued expenses, tax payable | Long-term loans, deferred tax liabilities, employee benefit obligations |

**This classification is where the real risk lives, and most retail investors skip it entirely.** They read "Total Liabilities: BDT 835 crore" and stop. The far more important question is *when* those BDT 835 crore fall due. A company with BDT 835 crore of debt maturing over ten years is in a completely different position from a company with BDT 835 crore maturing in ninety days, and the balance sheet tells you which — if you read the classification.

### Inventory: what it actually is

Inventory is measured under IAS 2 at **the lower of cost and net realisable value**. Read that rule carefully, because it contains the manipulation.

The company chooses the cost formula (FIFO or weighted average — LIFO is prohibited under IFRS). The company estimates net realisable value. The company decides whether a given batch is obsolete. **Every one of those is a judgement made by management, and every one of them flows directly to profit.**

The mechanism is simple. Inventory that should have been written down but was not stays on the balance sheet as an asset instead of passing through cost of goods sold as an expense. Profit is higher. Equity is higher. Nothing breaks. The lie survives until the inventory is either sold at a loss or written off in one large "exceptional item" three years later — at which point the company blames "market conditions."

**What to look for:** inventory growing materially faster than revenue. A textile company whose revenue grows 8% while inventory grows 40% is either building for an order book it has not disclosed, or it is sitting on unsaleable fabric it has not written down. Those are very different companies, and the balance sheet alone will not tell you which — but it tells you to ask.

### Trade receivables: revenue that has not become money

A trade receivable is a sale already recognised in the income statement for which **no cash has arrived**. Chapter 10 established that revenue recognition is an accrual judgement. Trade receivables are the balance sheet record of every one of those judgements that has not yet been settled in cash.

Under IFRS 9 as adopted in Bangladesh, companies must recognise **expected credit losses** — a forward-looking provision against receivables that may not be collected. The provision is, again, a management estimate.

**The manipulation is under-provisioning.** A company that has BDT 265 crore of receivables of which BDT 60 crore is genuinely uncollectable, but provides only BDT 10 crore, is overstating both its assets and its profit by BDT 50 crore. This is not exotic. It is the single most common form of soft misstatement in Bangladeshi mid-cap accounts, and it is why receivable days — computed in the formula block below — matters more than the receivable total.

### Revaluation reserves: the DSE's structural distortion

This is the section that changes how you read a Bangladeshi balance sheet.

Under IAS 16, a company may carry property, plant and equipment under either the **cost model** (historical cost less accumulated depreciation) or the **revaluation model** (fair value at the date of revaluation, less subsequent depreciation). If it chooses the revaluation model and the asset's value has risen, the increase goes to a **revaluation reserve** inside equity — it does *not* pass through profit.

On the DSE this facility is used heavily, and the asset revalued is overwhelmingly **land**.

The consequence is arithmetically enormous. A textile mill that bought forty bighas in Gazipur in 1994 for BDT 3 crore may carry that land at BDT 343 crore after a 2019 revaluation. Equity rises by BDT 340 crore. NAV per share rises proportionally. **Nothing about the business has changed.** The mill does not produce more fabric, earn more margin, or collect faster. It simply now reports a much larger book value.

Four things you must understand about that reserve:

**1. It is not distributable.** A revaluation reserve cannot ordinarily be paid out as cash dividend. It inflates the NAV you are quoted while being unavailable to you as a shareholder.

**2. It generates no earnings.** Land does not have a return on equity. Adding BDT 340 crore of land value to the denominator of ROE mechanically depresses the ratio, which is why revaluation-heavy companies show poor ROE alongside apparently high book value. Chapter 10 introduced ROE; this is where it gets contaminated.

**3. It is an appraiser's opinion, not a transaction.** No land was sold. No price was tested in a market. A valuer engaged by the company produced a number. The FRC has, since its establishment under the *Financial Reporting Act, 2015*, taken increasing interest in exactly this practice — which tells you the regulator considers it a live problem.

**4. It cannot be realised without destroying the business.** The land in question is usually the land the factory stands on. To monetise the revaluation you must sell the factory site. The value is real and simultaneously unavailable.

### Intangibles and goodwill

Under IAS 38, intangibles include software, licences, and acquired brands. **Goodwill** under IFRS 3 is the excess of the price paid in an acquisition over the fair value of the identifiable net assets acquired. In plain terms: goodwill is the record of how much a company overpaid, capitalised as an asset.

Goodwill is not amortised. It is tested annually for impairment. **An impairment test is an internal judgement about whether a past acquisition is still worth what was paid for it,** conducted by the same management that authorised the acquisition. Goodwill therefore tends to sit on balance sheets undisturbed for years and then vanish in a single catastrophic write-off.

For valuation purposes, the conservative treatment is to remove intangibles and goodwill from equity entirely. That produces **tangible NAV** — the number this chapter is built around.

### Debt and the term structure

The balance sheet separates:

- **Long-term borrowings** — repayable beyond twelve months.
- **Current portion of long-term loan** — the slice of that facility falling due inside twelve months, correctly shown as a current liability.
- **Short-term bank borrowing** — working capital lines, cash credit, overdrafts, and letter-of-credit financing.

**Short-term borrowing on a Bangladeshi balance sheet is rarely short-term in substance.** It is a working capital line rolled every ninety or one hundred eighty days, and it has been rolled continuously for years. Management treats it as permanent finance. The bank does not.

This is **rollover risk**, and it is the mechanism by which apparently solvent Bangladeshi companies fail. Nothing about the business changes. The bank simply declines to renew — because Bangladesh Bank has tightened, because the sector has been reclassified, because the relationship manager left, because the bank's own liquidity position deteriorated. The company must repay in ninety days a facility it has treated as permanent for nine years.

Chapter 5 established that a falling market can force a compliant bank to become a seller of shares. The same logic runs here on the lending side: a bank under liquidity pressure withdraws credit from borrowers who have done nothing wrong. **The company's risk is not its own behaviour. It is its lender's balance sheet.**

### NAV per share, and why Bangladesh quotes it constantly

$$\\text{NAV per share} = \\frac{\\text{Total Shareholders' Equity}}{\\text{Number of Ordinary Shares Outstanding}}$$

NAV per share is quoted on the DSE website, in every quarterly disclosure, in every brokerage note, and in every Facebook investment group in the country. Retail investors compare it to price and conclude that a share trading below NAV is cheap.

**Three reasons that inference is usually wrong on the DSE.**

First, NAV is a book number, and books can be inflated. If more than half of equity is a revaluation reserve, "trading below book" means trading below an appraiser's estimate of land the company cannot sell.

Second, NAV says nothing about earning power. A company can have a high NAV and a return on equity of 2%. You are buying a claim on future cash flows, not on a balance sheet. Chapter 12 will make this point in cash terms.

Third, book value is backward-looking by construction. It records what was spent, or what a valuer thought, not what the assets will generate.

**The correct use of NAV is as a floor test, not a value signal.** It answers: if this business stopped operating tomorrow and the assets were liquidated, what might be recovered? And for that question you must use tangible NAV, because in a liquidation goodwill recovers nothing and a revalued factory site sells for what a buyer will actually pay — not for what the valuer wrote.`,
      bn: `অধ্যায় ১০ প্রতিষ্ঠা করেছে যে আয় বিবরণী হলো **একটি সময়কালজুড়ে প্রবাহের বিবরণ** — দুটি তারিখের মধ্যে কোম্পানি কী আয় করেছে বলে দাবি করছে। স্থিতিপত্র প্রকৃতিগতভাবেই ভিন্ন। এটি **একটি নির্দিষ্ট মুহূর্তে অবস্থানের বিবরণ**: কোম্পানির কী আছে, কী দেনা, এবং শেয়ারহোল্ডারদের জন্য কী অবশিষ্ট — একটি তারিখে স্থির করা।

*কোম্পানি আইন, ১৯৯৪* এবং বাংলাদেশে গৃহীত IAS 1 অনুযায়ী এর আনুষ্ঠানিক নাম **আর্থিক অবস্থার বিবরণী**। ঢাকায় প্রায় কেউই একে ঐ নামে ডাকে না।

### হিসাববিজ্ঞানের মৌলিক সমীকরণ

$$\\text{সম্পদ} = \\text{দায়} + \\text{ইকুইটি}$$

এটি সর্বদাই মেলে। **ঠিক এ কারণেই এটি কিছুই প্রমাণ করে না।**

সমীকরণটি একটি হিসাবরক্ষণগত বাধ্যবাধকতা, কোনো যাচাই নয়। ব্যবস্থাপনা যদি মজুদ ৫০ কোটি টাকা বাড়িয়ে দেখায়, সমীকরণ ভাঙে না — পাল্টা ৫০ কোটি টাকা কেবল সংরক্ষিত মুনাফায় দেখা দেয়, কারণ যে অবিক্রীত মজুদ কখনো অবচয়/অবলোপন করা হয়নি তা কখনো বিক্রীত পণ্যের ব্যয়ে যায়নি। **একটি জালিয়াতিপূর্ণ স্থিতিপত্রও নিখুঁতভাবে মেলে।** যে বিনিয়োগকারী স্থিতিপত্র মিলে যাওয়া দেখে স্বস্তি পান, তিনি ঐ মিলে যাওয়ার অর্থ বোঝেননি।

সমীকরণটি পুনর্বিন্যস্ত হয়ে সেই বাক্যে পৌঁছায় যা গুরুত্বপূর্ণ:

$$\\text{ইকুইটি} = \\text{সম্পদ} - \\text{দায়}$$

ইকুইটি — যাকে নিট সম্পদ, নিট মূল্য বা শেয়ারহোল্ডারদের তহবিলও বলা হয় — একটি **অবশিষ্টাংশ**। এটি টাকার কোনো ভাণ্ডার নয়। প্রতিটি পাওনাদারকে মেটানোর পর পাটিগাণিতিকভাবে যা থাকে, এটি তাই। সম্পদ বাড়িয়ে দেখানো হলে অবশিষ্টাংশও ঠিক ততটাই, টাকায় টাকায় বাড়িয়ে দেখানো হয়।

### চলতি বনাম অ-চলতি

IAS 1 অনুযায়ী সম্পদ ও দায় ভাগ করতে হয় এই ভিত্তিতে যে প্রতিবেদন তারিখের **বারো মাসের মধ্যে** সেগুলো আদায় বা নিষ্পত্তি হবে কি না।

| | চলতি | অ-চলতি |
|---|---|---|
| সম্পদ | নগদ, বাণিজ্যিক প্রাপ্য, মজুদ, অগ্রিম, স্বল্পমেয়াদি বিনিয়োগ | PPE, অস্পৃশ্য সম্পদ, সুনাম, দীর্ঘমেয়াদি বিনিয়োগ, বিলম্বিত কর সম্পদ |
| দায় | বাণিজ্যিক প্রদেয়, স্বল্পমেয়াদি ব্যাংক ঋণ, দীর্ঘমেয়াদি ঋণের চলতি কিস্তি, বকেয়া ব্যয়, প্রদেয় কর | দীর্ঘমেয়াদি ঋণ, বিলম্বিত কর দায়, কর্মচারী সুবিধা দায় |

**এই শ্রেণিবিভাজনেই প্রকৃত ঝুঁকি বাস করে, আর বেশিরভাগ খুচরা বিনিয়োগকারী এটি পুরোপুরি এড়িয়ে যান।** তাঁরা "মোট দায়: ৮৩৫ কোটি টাকা" পড়ে থেমে যান। অনেক বেশি গুরুত্বপূর্ণ প্রশ্ন হলো ঐ ৮৩৫ কোটি টাকা *কখন* পরিশোধযোগ্য। দশ বছরে পরিশোধযোগ্য ৮৩৫ কোটি টাকার ঋণওয়ালা কোম্পানি আর নব্বই দিনে পরিশোধযোগ্য ৮৩৫ কোটি টাকার ঋণওয়ালা কোম্পানি সম্পূর্ণ ভিন্ন অবস্থানে — এবং স্থিতিপত্র আপনাকে বলে দেয় কোনটি, যদি আপনি শ্রেণিবিভাজনটি পড়েন।

### মজুদ: এটি আসলে কী

মজুদ IAS 2 অনুযায়ী **ব্যয় ও নিট আদায়যোগ্য মূল্যের মধ্যে যেটি কম** সেই মূল্যে পরিমাপ করা হয়। বিধিটি মনোযোগ দিয়ে পড়ুন, কারণ এর ভেতরেই কারসাজিটি রয়েছে।

কোম্পানি ব্যয়ের সূত্র বেছে নেয় (FIFO বা ভারিত গড় — IFRS-এ LIFO নিষিদ্ধ)। কোম্পানিই নিট আদায়যোগ্য মূল্য নিরূপণ করে। কোম্পানিই সিদ্ধান্ত নেয় কোনো ব্যাচ অপ্রচলিত হয়েছে কি না। **এর প্রতিটিই ব্যবস্থাপনার নেওয়া বিচার, এবং প্রতিটিই সরাসরি মুনাফায় গিয়ে পড়ে।**

কৌশলটি সরল। যে মজুদ অবলোপন করা উচিত ছিল কিন্তু করা হয়নি, তা ব্যয় হিসেবে বিক্রীত পণ্যের ব্যয়ে না গিয়ে সম্পদ হিসেবে স্থিতিপত্রে থেকে যায়। মুনাফা বেশি দেখায়। ইকুইটি বেশি দেখায়। কিছুই ভাঙে না। মিথ্যাটি টিকে থাকে যতক্ষণ না মজুদটি হয় ক্ষতিতে বিক্রি হয়, নয়তো তিন বছর পর একটিমাত্র বড় "ব্যতিক্রমী দফা" হিসেবে অবলোপন করা হয় — তখন কোম্পানি দোষ দেয় "বাজার পরিস্থিতিকে"।

**কী দেখবেন:** রাজস্বের চেয়ে উল্লেখযোগ্যভাবে দ্রুত বাড়তে থাকা মজুদ। যে বস্ত্র কোম্পানির রাজস্ব ৮% বাড়ে অথচ মজুদ ৪০% বাড়ে, সে হয় এমন অর্ডার বইয়ের জন্য প্রস্তুতি নিচ্ছে যা প্রকাশ করেনি, নয়তো অবলোপন না করা অবিক্রেয় কাপড়ের ওপর বসে আছে। এ দুটি খুবই ভিন্ন কোম্পানি, এবং কেবল স্থিতিপত্র আপনাকে বলবে না কোনটি — কিন্তু এটি আপনাকে প্রশ্নটি করতে বলে।

### বাণিজ্যিক প্রাপ্য: যে রাজস্ব এখনো টাকা হয়নি

বাণিজ্যিক প্রাপ্য হলো আয় বিবরণীতে ইতিমধ্যেই স্বীকৃত এমন একটি বিক্রয় যার বিপরীতে **কোনো নগদ আসেনি**। অধ্যায় ১০ প্রতিষ্ঠা করেছে যে রাজস্ব স্বীকৃতি একটি সঞ্চিতিভিত্তিক বিচার। বাণিজ্যিক প্রাপ্য হলো ঐ প্রতিটি বিচারের স্থিতিপত্রগত নথি যা এখনো নগদে নিষ্পত্তি হয়নি।

বাংলাদেশে গৃহীত IFRS 9 অনুযায়ী কোম্পানিকে **প্রত্যাশিত ঋণ ক্ষতি** স্বীকৃতি দিতে হয় — যে প্রাপ্য আদায় নাও হতে পারে তার বিপরীতে একটি সামনে-তাকানো সঞ্চিতি। এই সঞ্চিতিও আবার ব্যবস্থাপনার নিরূপণ।

**কারসাজিটি হলো কম-সঞ্চিতি রাখা।** যে কোম্পানির ২৬৫ কোটি টাকার প্রাপ্যের মধ্যে ৬০ কোটি টাকা প্রকৃতপক্ষে অনাদায়ী, কিন্তু সঞ্চিতি রেখেছে মাত্র ১০ কোটি, সে তার সম্পদ ও মুনাফা দুটোই ৫০ কোটি টাকা বাড়িয়ে দেখাচ্ছে। এটি বিরল কিছু নয়। বাংলাদেশি মাঝারি কোম্পানির হিসাবে এটিই সবচেয়ে সাধারণ নরম মিথ্যাচার, এবং এ কারণেই প্রাপ্যের মোট অঙ্কের চেয়ে receivable days — যা নিচের সূত্র অংশে গণনা করা হয়েছে — বেশি গুরুত্বপূর্ণ।

### পুনর্মূল্যায়ন সঞ্চিতি: ডিএসই-র কাঠামোগত বিকৃতি

এই অংশটিই বদলে দেয় আপনি কীভাবে একটি বাংলাদেশি স্থিতিপত্র পড়বেন।

IAS 16 অনুযায়ী একটি কোম্পানি সম্পত্তি, প্ল্যান্ট ও যন্ত্রপাতি হয় **ব্যয় মডেলে** (ঐতিহাসিক ব্যয় বাদ পুঞ্জীভূত অবচয়) নয়তো **পুনর্মূল্যায়ন মডেলে** (পুনর্মূল্যায়নের তারিখে ন্যায্য মূল্য, বাদ পরবর্তী অবচয়) দেখাতে পারে। পুনর্মূল্যায়ন মডেল বেছে নিলে এবং সম্পদের মূল্য বাড়লে বৃদ্ধিটি ইকুইটির ভেতরে **পুনর্মূল্যায়ন সঞ্চিতিতে** যায় — এটি মুনাফার মধ্য দিয়ে যায় *না*।

ডিএসই-তে এই সুবিধা ব্যাপকভাবে ব্যবহৃত হয়, এবং যে সম্পদটি পুনর্মূল্যায়ন করা হয় তা অপ্রতিরোধ্যভাবে **জমি**।

পরিণতিটি পাটিগাণিতিকভাবে বিশাল। যে বস্ত্রকল ১৯৯৪ সালে গাজীপুরে চল্লিশ বিঘা জমি ৩ কোটি টাকায় কিনেছিল, ২০১৯ সালের একটি পুনর্মূল্যায়নের পর সে ঐ জমি ৩৪৩ কোটি টাকায় দেখাতে পারে। ইকুইটি বাড়ে ৩৪০ কোটি টাকা। NAV per share আনুপাতিকভাবে বাড়ে। **ব্যবসার কিছুই বদলায়নি।** কলটি বেশি কাপড় বানায় না, বেশি মার্জিন পায় না, দ্রুত টাকা আদায় করে না। কেবল এখন সে অনেক বড় বুক ভ্যালু প্রতিবেদন করে।

ঐ সঞ্চিতি সম্পর্কে চারটি বিষয় আপনাকে বুঝতে হবে:

**১. এটি বিতরণযোগ্য নয়।** পুনর্মূল্যায়ন সঞ্চিতি সাধারণত নগদ লভ্যাংশ হিসেবে দেওয়া যায় না। এটি আপনাকে উদ্ধৃত করা NAV স্ফীত করে, অথচ শেয়ারহোল্ডার হিসেবে আপনার কাছে অনুপলব্ধ থাকে।

**২. এটি কোনো আয় তৈরি করে না।** জমির কোনো return on equity নেই। ROE-র হরে ৩৪০ কোটি টাকার জমির মূল্য যোগ করলে অনুপাতটি যান্ত্রিকভাবে নেমে যায়, আর এ কারণেই পুনর্মূল্যায়ন-ভারী কোম্পানিগুলো আপাত-উঁচু বুক ভ্যালুর পাশাপাশি দুর্বল ROE দেখায়। অধ্যায় ১০ ROE পরিচয় করিয়েছে; এখানেই সেটি দূষিত হয়।

**৩. এটি একজন মূল্যায়কের মতামত, কোনো লেনদেন নয়।** কোনো জমি বিক্রি হয়নি। কোনো দাম বাজারে পরীক্ষিত হয়নি। কোম্পানির নিযুক্ত একজন মূল্যায়ক একটি সংখ্যা তৈরি করেছেন। *আর্থিক প্রতিবেদন আইন, ২০১৫* এর অধীনে প্রতিষ্ঠার পর থেকে FRC ঠিক এই চর্চাটিতে ক্রমবর্ধমান আগ্রহ দেখিয়েছে — যা আপনাকে বলে দেয় নিয়ন্ত্রক এটিকে একটি জীবন্ত সমস্যা মনে করে।

**৪. ব্যবসা ধ্বংস না করে এটি নগদায়ন করা যায় না।** প্রশ্নবিদ্ধ জমিটি সাধারণত সেই জমি যার ওপর কারখানাটি দাঁড়িয়ে। পুনর্মূল্যায়নকে টাকায় রূপান্তর করতে হলে কারখানার জায়গাটিই বেচতে হবে। মূল্যটি বাস্তব এবং একই সঙ্গে অনুপলব্ধ।

### অস্পৃশ্য সম্পদ ও সুনাম

IAS 38 অনুযায়ী অস্পৃশ্য সম্পদের মধ্যে রয়েছে সফটওয়্যার, লাইসেন্স ও অর্জিত ব্র্যান্ড। IFRS 3 অনুযায়ী **সুনাম (goodwill)** হলো কোনো অধিগ্রহণে প্রদত্ত মূল্য এবং অর্জিত শনাক্তযোগ্য নিট সম্পদের ন্যায্য মূল্যের পার্থক্য। সহজ কথায়: সুনাম হলো একটি কোম্পানি কতটা বেশি দাম দিয়েছিল তার নথি, সম্পদ হিসেবে মূলধনীকৃত।

সুনামের অবলোপন হয় না। প্রতি বছর এর ক্ষয় পরীক্ষা (impairment test) করা হয়। **ক্ষয় পরীক্ষা হলো একটি অতীত অধিগ্রহণ এখনো প্রদত্ত মূল্যের যোগ্য কি না সে সম্পর্কে একটি অভ্যন্তরীণ বিচার,** যা করে সেই একই ব্যবস্থাপনা যারা অধিগ্রহণটি অনুমোদন করেছিল। তাই সুনাম সাধারণত বছরের পর বছর স্থিতিপত্রে অবিচল বসে থাকে, তারপর একটিমাত্র বিপর্যয়কর অবলোপনে উবে যায়।

মূল্যায়নের উদ্দেশ্যে রক্ষণশীল আচরণ হলো ইকুইটি থেকে অস্পৃশ্য সম্পদ ও সুনাম সম্পূর্ণ বাদ দেওয়া। তাতে পাওয়া যায় **ট্যানজিবল NAV** — যে সংখ্যাটির চারপাশে এই অধ্যায়টি গড়া।

### ঋণ ও মেয়াদ-কাঠামো

স্থিতিপত্র আলাদা করে দেখায়:

- **দীর্ঘমেয়াদি ঋণ** — বারো মাসের পরে পরিশোধযোগ্য।
- **দীর্ঘমেয়াদি ঋণের চলতি কিস্তি** — ঐ সুবিধার যে অংশ বারো মাসের মধ্যে পরিশোধযোগ্য, যথাযথভাবে চলতি দায় হিসেবে দেখানো।
- **স্বল্পমেয়াদি ব্যাংক ঋণ** — চলতি মূলধন সীমা, ক্যাশ ক্রেডিট, ওভারড্রাফট এবং ঋণপত্র অর্থায়ন।

**বাংলাদেশি স্থিতিপত্রে স্বল্পমেয়াদি ঋণ প্রকৃত অর্থে খুব কমই স্বল্পমেয়াদি।** এটি একটি চলতি মূলধন সীমা যা প্রতি নব্বই বা একশো আশি দিনে নবায়ন করা হয়, এবং বছরের পর বছর একটানা নবায়িত হয়ে আসছে। ব্যবস্থাপনা একে স্থায়ী অর্থায়ন হিসেবে গণ্য করে। ব্যাংক করে না।

এটিই **রোলওভার ঝুঁকি**, এবং এই কৌশলেই আপাতদৃষ্টিতে সচ্ছল বাংলাদেশি কোম্পানিগুলো ব্যর্থ হয়। ব্যবসার কিছুই বদলায় না। ব্যাংক কেবল নবায়ন করতে অস্বীকার করে — কারণ বাংলাদেশ ব্যাংক কড়াকড়ি করেছে, কারণ খাতটি পুনঃশ্রেণিবদ্ধ হয়েছে, কারণ সম্পর্ক ব্যবস্থাপক চলে গেছেন, কারণ ব্যাংকের নিজস্ব তারল্য অবস্থান খারাপ হয়েছে। কোম্পানিকে নব্বই দিনে এমন একটি সুবিধা শোধ করতে হয় যাকে সে নয় বছর ধরে স্থায়ী ভেবেছে।

অধ্যায় ৫ প্রতিষ্ঠা করেছে যে পতনশীল বাজার একটি নিয়ম-মান্যকারী ব্যাংককে শেয়ারের বিক্রেতা হতে বাধ্য করতে পারে। ঋণদানের দিকেও একই যুক্তি চলে: তারল্য চাপে থাকা একটি ব্যাংক এমন ঋণগ্রহীতার কাছ থেকেও ঋণ প্রত্যাহার করে যিনি কোনো ভুল করেননি। **কোম্পানির ঝুঁকি তার নিজের আচরণ নয়। এটি তার ঋণদাতার স্থিতিপত্র।**

### NAV per share, এবং বাংলাদেশ কেন এটি অবিরাম উদ্ধৃত করে

$$\\text{NAV per share} = \\frac{\\text{মোট শেয়ারহোল্ডার ইকুইটি}}{\\text{বকেয়া সাধারণ শেয়ার সংখ্যা}}$$

NAV per share ডিএসই ওয়েবসাইটে, প্রতিটি ত্রৈমাসিক প্রকাশনায়, প্রতিটি ব্রোকারেজ নোটে এবং দেশের প্রতিটি ফেসবুক বিনিয়োগ গ্রুপে উদ্ধৃত হয়। খুচরা বিনিয়োগকারীরা একে দামের সঙ্গে তুলনা করে সিদ্ধান্তে আসেন যে NAV-র নিচে লেনদেন হওয়া শেয়ার সস্তা।

**ডিএসই-তে ঐ অনুমান সাধারণত ভুল হওয়ার তিনটি কারণ।**

প্রথমত, NAV একটি বুক সংখ্যা, আর বুক স্ফীত করা যায়। ইকুইটির অর্ধেকের বেশি যদি পুনর্মূল্যায়ন সঞ্চিতি হয়, তবে "বুকের নিচে লেনদেন" মানে কোম্পানি বেচতে পারে না এমন জমি সম্পর্কে একজন মূল্যায়কের অনুমানের নিচে লেনদেন।

দ্বিতীয়ত, NAV আয়ক্ষমতা সম্পর্কে কিছুই বলে না। একটি কোম্পানির উঁচু NAV থাকতে পারে আর return on equity ২%। আপনি ভবিষ্যৎ নগদ প্রবাহের ওপর দাবি কিনছেন, স্থিতিপত্রের ওপর নয়। অধ্যায় ১২ এই কথাটিই নগদের ভাষায় বলবে।

তৃতীয়ত, বুক ভ্যালু গঠনগতভাবেই পেছনে-তাকানো। এটি কী খরচ হয়েছিল, বা একজন মূল্যায়ক কী ভেবেছিলেন তা নথিবদ্ধ করে — সম্পদগুলো কী তৈরি করবে তা নয়।

**NAV-র সঠিক ব্যবহার একটি মেঝে-পরীক্ষা হিসেবে, মূল্যের সংকেত হিসেবে নয়।** এটি উত্তর দেয়: এই ব্যবসা কাল বন্ধ হয়ে গেলে এবং সম্পদ বিক্রি হলে কতটা উদ্ধার হতে পারে? আর ঐ প্রশ্নের জন্য আপনাকে ট্যানজিবল NAV ব্যবহার করতে হবে, কারণ অবসায়নে সুনাম কিছুই ফেরত দেয় না এবং একটি পুনর্মূল্যায়িত কারখানার জায়গা ঐ দামেই বিক্রি হয় যা একজন ক্রেতা প্রকৃতপক্ষে দেবেন — মূল্যায়ক যা লিখেছিলেন তাতে নয়।`,
    },

    simple: {
      en: `A balance sheet is a photograph of a company on one day. Three columns of it, really.

- **What we own** (assets)
- **What we owe** (liabilities)
- **What's left for the owners** (equity)

The third one is just the first minus the second. It is not a bank account. It is a subtraction.

### Why "it balances" means nothing

People find comfort in the fact that a balance sheet adds up. Do not.

Suppose a company has BDT 50 crore of cloth in a warehouse that nobody will ever buy. Honest accounting says: write it off, take the loss, profit falls by 50 crore, equity falls by 50 crore. Dishonest accounting says: leave it on the books as an asset. Now assets are 50 crore too high — and so is equity, by exactly the same amount.

**The two lies cancel. The balance sheet still balances perfectly.**

That is the whole point. A balanced balance sheet tells you the bookkeeping is internally consistent. It tells you nothing whatsoever about whether the numbers are true.

### The land trick

This is the one that costs Bangladeshi retail investors the most money, and it is completely legal.

A textile mill bought land in Gazipur in 1994 for BDT 3 crore. In 2019 the company hired a valuer, who said the land is now worth BDT 343 crore. The company writes the new number on the balance sheet. Equity jumps by BDT 340 crore.

Ask yourself what changed:

- Does the mill produce more fabric? **No.**
- Does it earn more profit? **No.**
- Did it receive any money? **No.**
- Can it pay you a dividend from this? **No.**
- Can it even sell the land? **No — the factory is standing on it.**

Nothing happened. A man with a clipboard wrote a number.

But now the NAV per share reads BDT 51.67 instead of BDT 19.58, the share trades at BDT 28, and every investment group in the country says "look, it's trading at half of book value, it's a bargain."

**It is not a bargain. It is a company with an appraiser's opinion attached to it.**

### Money you owe next month versus money you owe in ten years

Two companies each owe BDT 600 crore.

**Company A** owes it over ten years, in fixed instalments, at an agreed rate.
**Company B** owes it as a working capital line the bank renews every ninety days.

Company B has renewed it every ninety days for nine years. Management thinks of it as permanent money. **The bank does not, and the bank is the one who decides.**

One quarter Bangladesh Bank tightens liquidity, or the bank has its own problems, or the relationship manager changes. The bank simply says: we are not renewing. Company B now has ninety days to find BDT 600 crore.

It has done nothing wrong. Its sales are fine. Its factory works. **It fails anyway.**

This is the single most common way a profitable-looking Bangladeshi company dies, and the balance sheet tells you it is coming — in a line most investors never read.

### The one habit to build

When someone tells you a share is trading below NAV, ask exactly one question:

**"How much of that NAV is revaluation reserve?"**

If the answer is more than a quarter, you are not looking at a discount. You are looking at an inflated denominator.`,
      bn: `স্থিতিপত্র হলো একটি কোম্পানির একদিনের আলোকচিত্র। আসলে এর তিনটি কলাম।

- **আমাদের কী আছে** (সম্পদ)
- **আমরা কী দেনা** (দায়)
- **মালিকদের জন্য কী থাকল** (ইকুইটি)

তৃতীয়টি কেবল প্রথমটি বিয়োগ দ্বিতীয়টি। এটি কোনো ব্যাংক হিসাব নয়। এটি একটি বিয়োগ।

### "এটি মেলে" কথাটির কোনো অর্থ কেন নেই

স্থিতিপত্র যোগ-বিয়োগে মিলে যায় দেখে মানুষ স্বস্তি পান। পাবেন না।

ধরুন একটি কোম্পানির গুদামে ৫০ কোটি টাকার কাপড় আছে যা কেউ কোনোদিন কিনবে না। সৎ হিসাব বলে: অবলোপন করুন, ক্ষতি নিন, মুনাফা ৫০ কোটি কমুক, ইকুইটি ৫০ কোটি কমুক। অসৎ হিসাব বলে: সম্পদ হিসেবে বইয়ে রেখে দিন। এখন সম্পদ ৫০ কোটি বেশি — আর ইকুইটিও ঠিক ততটাই বেশি।

**দুটি মিথ্যা একে অপরকে কাটে। স্থিতিপত্র তবু নিখুঁতভাবে মেলে।**

এটাই মূল কথা। মিলে যাওয়া স্থিতিপত্র আপনাকে বলে হিসাবরক্ষণটি অভ্যন্তরীণভাবে সঙ্গতিপূর্ণ। সংখ্যাগুলো সত্য কি না সে সম্পর্কে এটি কিছুই বলে না।

### জমির কৌশল

এটিই বাংলাদেশি খুচরা বিনিয়োগকারীদের সবচেয়ে বেশি টাকা খায়, আর এটি সম্পূর্ণ বৈধ।

একটি বস্ত্রকল ১৯৯৪ সালে গাজীপুরে ৩ কোটি টাকায় জমি কিনেছিল। ২০১৯ সালে কোম্পানি একজন মূল্যায়ক নিয়োগ করে, যিনি বলেন জমিটির মূল্য এখন ৩৪৩ কোটি টাকা। কোম্পানি নতুন সংখ্যাটি স্থিতিপত্রে লেখে। ইকুইটি লাফিয়ে বাড়ে ৩৪০ কোটি টাকা।

নিজেকে জিজ্ঞেস করুন কী বদলাল:

- কলটি কি বেশি কাপড় বানায়? **না।**
- এটি কি বেশি মুনাফা করে? **না।**
- এটি কি কোনো টাকা পেয়েছে? **না।**
- এটি কি এ থেকে আপনাকে লভ্যাংশ দিতে পারে? **না।**
- এটি কি অন্তত জমিটি বেচতে পারে? **না — কারখানাটি তার ওপরেই দাঁড়িয়ে।**

কিছুই ঘটেনি। ক্লিপবোর্ড হাতে একজন লোক একটি সংখ্যা লিখেছেন।

কিন্তু এখন NAV per share ১৯.৫৮ টাকার বদলে ৫১.৬৭ টাকা দেখায়, শেয়ার ২৮ টাকায় লেনদেন হয়, আর দেশের প্রতিটি বিনিয়োগ গ্রুপ বলে "দেখুন, বুক ভ্যালুর অর্ধেকে লেনদেন হচ্ছে, দারুণ সুযোগ।"

**এটি সুযোগ নয়। এটি একটি কোম্পানি যার সঙ্গে একজন মূল্যায়কের মতামত জুড়ে দেওয়া হয়েছে।**

### আগামী মাসের দেনা বনাম দশ বছরের দেনা

দুটি কোম্পানির প্রত্যেকের ৬০০ কোটি টাকা দেনা।

**কোম্পানি ক** দশ বছরে, নির্দিষ্ট কিস্তিতে, সম্মত সুদহারে শোধ করবে।
**কোম্পানি খ** এটি চলতি মূলধন সীমা হিসেবে দেনা, যা ব্যাংক প্রতি নব্বই দিনে নবায়ন করে।

কোম্পানি খ নয় বছর ধরে প্রতি নব্বই দিনে এটি নবায়ন করেছে। ব্যবস্থাপনা একে স্থায়ী টাকা ভাবে। **ব্যাংক ভাবে না, আর সিদ্ধান্ত নেয় ব্যাংকই।**

কোনো এক প্রান্তিকে বাংলাদেশ ব্যাংক তারল্য কড়া করে, বা ব্যাংকের নিজেরই সমস্যা হয়, বা সম্পর্ক ব্যবস্থাপক বদলে যান। ব্যাংক কেবল বলে: আমরা নবায়ন করছি না। কোম্পানি খ-এর হাতে এখন ৬০০ কোটি টাকা জোগাড় করতে নব্বই দিন।

সে কোনো ভুল করেনি। তার বিক্রি ঠিক আছে। তার কারখানা চলছে। **তবু সে ব্যর্থ হয়।**

লাভজনক-দেখতে বাংলাদেশি কোম্পানির মৃত্যুর এটিই সবচেয়ে সাধারণ পথ, এবং স্থিতিপত্র আপনাকে বলে দেয় এটি আসছে — এমন একটি লাইনে যা বেশিরভাগ বিনিয়োগকারী কখনো পড়েন না।

### যে একটি অভ্যাস গড়তে হবে

কেউ যখন আপনাকে বলে একটি শেয়ার NAV-র নিচে লেনদেন হচ্ছে, ঠিক একটি প্রশ্ন করুন:

**"ঐ NAV-র কতটা পুনর্মূল্যায়ন সঞ্চিতি?"**

উত্তর যদি এক-চতুর্থাংশের বেশি হয়, তবে আপনি ছাড় দেখছেন না। আপনি একটি স্ফীত হর দেখছেন।`,
    },

    example: {
      en: `### Meghna Textile Mills Ltd — a DSE textile archetype

All figures BDT crore, year ended 30 June. This is a composite, not a specific listed company, but every structural feature in it is common on the DSE textile board.

**Statement of Financial Position**

| Assets | BDT cr |
|---|---|
| **Non-current** | |
| Property, plant and equipment | 780 |
| Intangibles and goodwill | 45 |
| *Total non-current* | *825* |
| **Current** | |
| Inventory | 310 |
| Trade receivables | 265 |
| Advances, deposits and prepayments | 40 |
| Cash and cash equivalents | 15 |
| *Total current* | *630* |
| **TOTAL ASSETS** | **1,455** |

| Equity and Liabilities | BDT cr |
|---|---|
| **Equity** | |
| Paid-up capital (12 cr shares of BDT 10) | 120 |
| Share premium | 30 |
| **Revaluation reserve** | **340** |
| Retained earnings | 130 |
| *Total equity* | *620* |
| **Non-current liabilities** | |
| Long-term borrowings | 185 |
| Deferred tax liability | 50 |
| *Total non-current* | *235* |
| **Current liabilities** | |
| Short-term bank borrowings | 420 |
| Current portion of long-term loan | 30 |
| Trade payables | 150 |
| *Total current* | *600* |
| **TOTAL EQUITY AND LIABILITIES** | **1,455** |

Revenue for the year: BDT 1,060 crore. Market price: BDT 28.00.

### What the market sees

The DSE page reports **NAV per share of BDT 51.67**. The share trades at BDT 28.00. Price-to-book is **0.54×**.

Every screener in the country flags this as deep value. Half of book. A textile company with real factories, real orders, real exports.

### What is actually there

Strip the revaluation reserve and the intangibles:

| | BDT cr |
|---|---|
| Reported equity | 620 |
| Less: revaluation reserve | (340) |
| Less: intangibles and goodwill | (45) |
| **Tangible equity** | **235** |

**Tangible NAV per share: BDT 19.58.**

At BDT 28.00, the share trades at **1.43× tangible book.**

| | Reported | Tangible |
|---|---|---|
| Equity (BDT cr) | 620 | 235 |
| NAV per share (BDT) | 51.67 | 19.58 |
| Price-to-book at BDT 28 | 0.54× | 1.43× |
| Verdict | "Half of book — a bargain" | "Above book — fully priced" |

**The share did not move. The company did not change. One adjustment moved it from a 46% discount to a 43% premium.**

That is the entire chapter in one table.

### The rest of the balance sheet is worse

The NAV illusion is the headline. The term structure is the actual danger.

| Debt | BDT cr | Maturity |
|---|---|---|
| Short-term bank borrowings | 420 | Under 12 months |
| Current portion of long-term loan | 30 | Under 12 months |
| Long-term borrowings | 185 | Over 12 months |
| **Total debt** | **635** | |

**70.87% of total debt matures inside twelve months.** Against that, the company holds BDT 15 crore of cash.

Working capital is BDT 630 − 600 = **BDT 30 crore**. Current ratio **1.05**. The company can meet its current obligations only if every receivable is collected and every unit of inventory is sold — at book value, on schedule, with nothing written off.

Now look at what those current assets consist of:

| Current asset | BDT cr | Character |
|---|---|---|
| Inventory | 310 | Fabric, judged by management |
| Trade receivables | 265 | Sales already booked, cash not received |
| Advances and prepayments | 40 | Money already gone out |
| Cash | 15 | Actually money |

**Of BDT 630 crore of current assets, BDT 15 crore is cash.** The remaining BDT 615 crore is management's estimate of what other people owe them and what cloth is worth. The current ratio of 1.05 is computed entirely from judgements.

Receivable days: 265 / 1,060 × 365 = **91.25 days**. The company waits three months to get paid. In a sector where a bank line rolls every ninety days, the receivable cycle and the funding cycle are the same length — which means the company has no slack at all.

### Why this company is a rollover accident, not a value stock

Put it together:

1. Book value is **54.84% revaluation reserve** — an appraiser's number on land under the factory.
2. **70.87% of debt** is due within a year against BDT 15 crore of cash.
3. Current ratio of **1.05** rests on inventory and receivables that management values.
4. Receivables take **91 days**; the bank line renews in 90.

Nothing here requires fraud. Every line may be prepared in good faith and pass audit. The company is simply **structurally dependent on its bank continuing to say yes** — a decision made in a credit committee the company does not sit on, driven by Bangladesh Bank policy and the bank's own liquidity, neither of which has anything to do with how much fabric Meghna sold.

Chapter 5 said: name the party on the other side and the compulsion acting on them. Here the party is a lender, and the compulsion is its own balance sheet.

**The retail investor who bought this at BDT 28 because it was "half of book" bought a levered working capital position at a 43% premium to tangible assets.** They were not wrong about the arithmetic of 28 divided by 51.67. They were wrong about what 51.67 was.`,
      bn: `### মেঘনা টেক্সটাইল মিলস লিমিটেড — একটি ডিএসই বস্ত্র আদিরূপ

সব অঙ্ক কোটি টাকায়, ৩০ জুন সমাপ্ত বছর। এটি একটি সমন্বিত উদাহরণ, কোনো নির্দিষ্ট তালিকাভুক্ত কোম্পানি নয়, তবে এর প্রতিটি কাঠামোগত বৈশিষ্ট্য ডিএসই-র বস্ত্র বোর্ডে সাধারণ।

**আর্থিক অবস্থার বিবরণী**

| সম্পদ | কোটি টাকা |
|---|---|
| **অ-চলতি** | |
| সম্পত্তি, প্ল্যান্ট ও যন্ত্রপাতি | ৭৮০ |
| অস্পৃশ্য সম্পদ ও সুনাম | ৪৫ |
| *মোট অ-চলতি* | *৮২৫* |
| **চলতি** | |
| মজুদ | ৩১০ |
| বাণিজ্যিক প্রাপ্য | ২৬৫ |
| অগ্রিম, জামানত ও অগ্রপ্রদত্ত ব্যয় | ৪০ |
| নগদ ও নগদ সমতুল্য | ১৫ |
| *মোট চলতি* | *৬৩০* |
| **মোট সম্পদ** | **১,৪৫৫** |

| ইকুইটি ও দায় | কোটি টাকা |
|---|---|
| **ইকুইটি** | |
| পরিশোধিত মূলধন (১০ টাকার ১২ কোটি শেয়ার) | ১২০ |
| শেয়ার প্রিমিয়াম | ৩০ |
| **পুনর্মূল্যায়ন সঞ্চিতি** | **৩৪০** |
| সংরক্ষিত মুনাফা | ১৩০ |
| *মোট ইকুইটি* | *৬২০* |
| **অ-চলতি দায়** | |
| দীর্ঘমেয়াদি ঋণ | ১৮৫ |
| বিলম্বিত কর দায় | ৫০ |
| *মোট অ-চলতি* | *২৩৫* |
| **চলতি দায়** | |
| স্বল্পমেয়াদি ব্যাংক ঋণ | ৪২০ |
| দীর্ঘমেয়াদি ঋণের চলতি কিস্তি | ৩০ |
| বাণিজ্যিক প্রদেয় | ১৫০ |
| *মোট চলতি* | *৬০০* |
| **মোট ইকুইটি ও দায়** | **১,৪৫৫** |

বছরের রাজস্ব: ১,০৬০ কোটি টাকা। বাজারমূল্য: ২৮.০০ টাকা।

### বাজার যা দেখে

ডিএসই পাতা **NAV per share ৫১.৬৭ টাকা** দেখায়। শেয়ার লেনদেন হয় ২৮.০০ টাকায়। Price-to-book **০.৫৪×**।

দেশের প্রতিটি স্ক্রিনার একে গভীর মূল্য হিসেবে চিহ্নিত করে। বুকের অর্ধেক। বাস্তব কারখানা, বাস্তব অর্ডার, বাস্তব রপ্তানিসহ একটি বস্ত্র কোম্পানি।

### আসলে সেখানে কী আছে

পুনর্মূল্যায়ন সঞ্চিতি ও অস্পৃশ্য সম্পদ বাদ দিন:

| | কোটি টাকা |
|---|---|
| প্রতিবেদিত ইকুইটি | ৬২০ |
| বাদ: পুনর্মূল্যায়ন সঞ্চিতি | (৩৪০) |
| বাদ: অস্পৃশ্য সম্পদ ও সুনাম | (৪৫) |
| **ট্যানজিবল ইকুইটি** | **২৩৫** |

**ট্যানজিবল NAV per share: ১৯.৫৮ টাকা।**

২৮.০০ টাকায় শেয়ারটি লেনদেন হচ্ছে ট্যানজিবল বুকের **১.৪৩×**-এ।

| | প্রতিবেদিত | ট্যানজিবল |
|---|---|---|
| ইকুইটি (কোটি টাকা) | ৬২০ | ২৩৫ |
| NAV per share (টাকা) | ৫১.৬৭ | ১৯.৫৮ |
| ২৮ টাকায় price-to-book | ০.৫৪× | ১.৪৩× |
| রায় | "বুকের অর্ধেক — দারুণ সুযোগ" | "বুকের ওপরে — পুরো দাম দেওয়া" |

**শেয়ার নড়েনি। কোম্পানি বদলায়নি। একটিমাত্র সমন্বয় একে ৪৬% ছাড় থেকে ৪৩% প্রিমিয়ামে নিয়ে গেছে।**

একটি সারণিতে এটাই পুরো অধ্যায়।

### স্থিতিপত্রের বাকি অংশ আরও খারাপ

NAV-র বিভ্রম শিরোনাম। মেয়াদ-কাঠামোই প্রকৃত বিপদ।

| ঋণ | কোটি টাকা | মেয়াদ |
|---|---|---|
| স্বল্পমেয়াদি ব্যাংক ঋণ | ৪২০ | ১২ মাসের কম |
| দীর্ঘমেয়াদি ঋণের চলতি কিস্তি | ৩০ | ১২ মাসের কম |
| দীর্ঘমেয়াদি ঋণ | ১৮৫ | ১২ মাসের বেশি |
| **মোট ঋণ** | **৬৩৫** | |

**মোট ঋণের ৭০.৮৭% বারো মাসের মধ্যে পরিশোধযোগ্য।** এর বিপরীতে কোম্পানির হাতে নগদ ১৫ কোটি টাকা।

চলতি মূলধন ৬৩০ − ৬০০ = **৩০ কোটি টাকা**। চলতি অনুপাত **১.০৫**। কোম্পানি তার চলতি দায় মেটাতে পারবে কেবল তখনই যদি প্রতিটি প্রাপ্য আদায় হয় এবং প্রতিটি মজুদ একক বিক্রি হয় — বুক মূল্যে, সময়মতো, কিছুই অবলোপন না করে।

এবার দেখুন ঐ চলতি সম্পদগুলো কী দিয়ে গঠিত:

| চলতি সম্পদ | কোটি টাকা | চরিত্র |
|---|---|---|
| মজুদ | ৩১০ | কাপড়, ব্যবস্থাপনার বিচারে মূল্যায়িত |
| বাণিজ্যিক প্রাপ্য | ২৬৫ | বিক্রয় নথিভুক্ত, নগদ আসেনি |
| অগ্রিম ও অগ্রপ্রদত্ত | ৪০ | টাকা ইতিমধ্যেই বেরিয়ে গেছে |
| নগদ | ১৫ | প্রকৃত টাকা |

**৬৩০ কোটি টাকার চলতি সম্পদের মধ্যে ১৫ কোটি টাকা নগদ।** বাকি ৬১৫ কোটি টাকা হলো অন্যরা তাদের কত দেনা এবং কাপড়ের মূল্য কত — সে সম্পর্কে ব্যবস্থাপনার নিরূপণ। ১.০৫ চলতি অনুপাতটি সম্পূর্ণভাবে বিচারের ভিত্তিতে গণিত।

Receivable days: ২৬৫ / ১,০৬০ × ৩৬৫ = **৯১.২৫ দিন**। কোম্পানি টাকা পেতে তিন মাস অপেক্ষা করে। যে খাতে ব্যাংকের সীমা প্রতি নব্বই দিনে নবায়ন হয়, সেখানে প্রাপ্য চক্র ও অর্থায়ন চক্র সমান দৈর্ঘ্যের — অর্থাৎ কোম্পানির হাতে কোনো ফাঁক নেই।

### কেন এই কোম্পানিটি একটি রোলওভার দুর্ঘটনা, মূল্য-শেয়ার নয়

সব একসঙ্গে রাখুন:

১. বুক ভ্যালুর **৫৪.৮৪% পুনর্মূল্যায়ন সঞ্চিতি** — কারখানার নিচের জমি সম্পর্কে একজন মূল্যায়কের সংখ্যা।
২. **ঋণের ৭০.৮৭%** এক বছরের মধ্যে পরিশোধযোগ্য, বিপরীতে নগদ ১৫ কোটি টাকা।
৩. **১.০৫** চলতি অনুপাত দাঁড়িয়ে আছে ব্যবস্থাপনার মূল্যায়িত মজুদ ও প্রাপ্যের ওপর।
৪. প্রাপ্য আদায়ে লাগে **৯১ দিন**; ব্যাংকের সীমা নবায়ন হয় ৯০ দিনে।

এখানে জালিয়াতির কোনো প্রয়োজন নেই। প্রতিটি লাইন সরল বিশ্বাসে প্রস্তুত হতে পারে এবং নিরীক্ষায় উতরে যেতে পারে। কোম্পানিটি কেবল **কাঠামোগতভাবে নির্ভরশীল তার ব্যাংক হ্যাঁ বলা চালিয়ে যাওয়ার ওপর** — এমন একটি সিদ্ধান্ত যা নেওয়া হয় এমন ঋণ কমিটিতে যেখানে কোম্পানি বসে না, যা চালিত হয় বাংলাদেশ ব্যাংকের নীতি ও ব্যাংকের নিজস্ব তারল্য দিয়ে — যার কোনোটিরই মেঘনা কত কাপড় বেচল তার সঙ্গে সম্পর্ক নেই।

অধ্যায় ৫ বলেছিল: অন্য পাশের পক্ষটির নাম বলুন এবং তার ওপর কাজ করা বাধ্যবাধকতা চিহ্নিত করুন। এখানে পক্ষটি একজন ঋণদাতা, আর বাধ্যবাধকতা তার নিজের স্থিতিপত্র।

**যে খুচরা বিনিয়োগকারী "বুকের অর্ধেক" বলে ২৮ টাকায় এটি কিনেছিলেন, তিনি ট্যানজিবল সম্পদের ৪৩% প্রিমিয়ামে একটি লিভারেজড চলতি মূলধন পজিশন কিনেছেন।** ৫১.৬৭ দিয়ে ২৮ ভাগ করার পাটিগণিতে তিনি ভুল করেননি। ৫১.৬৭ জিনিসটা কী, সেখানে ভুল করেছেন।`,
    },

    formula: {
      en: `**The accounting identity:**
$$\\text{Assets} = \\text{Liabilities} + \\text{Equity}$$

Rearranged, and this is the form that matters:
$$\\text{Equity} = \\text{Assets} - \\text{Liabilities}$$

**NAV per share** — the number quoted on every DSE disclosure:
$$\\text{NAV per share} = \\frac{\\text{Total Shareholders' Equity}}{\\text{Ordinary Shares Outstanding}}$$

where shares outstanding is derived from paid-up capital:
$$N = \\frac{\\text{Paid-up Capital}}{\\text{Face Value}}$$

**Tangible NAV per share** — the number you should actually use:
$$\\text{Tangible NAV per share} = \\frac{\\text{Equity} - \\text{Revaluation Reserve} - \\text{Intangibles} - \\text{Goodwill}}{N}$$

**Revaluation dependence** — the single most useful diagnostic on a Bangladeshi balance sheet:
$$\\text{Revaluation \\%} = \\frac{\\text{Revaluation Reserve}}{\\text{Total Equity}} \\times 100$$

Above 25%, treat reported NAV as unreliable. Above 50%, the reported book value is primarily an appraisal.

**NAV destruction on adjustment:**
$$\\text{NAV Destroyed \\%} = \\frac{\\text{NAV}_{reported} - \\text{NAV}_{tangible}}{\\text{NAV}_{reported}} \\times 100$$

**Working capital** — the absolute cushion, in taka:
$$\\text{Working Capital} = \\text{Current Assets} - \\text{Current Liabilities}$$

**Current ratio** — the same idea as a multiple. Developed fully in Chapter 14; previewed here because it is inseparable from balance sheet structure:
$$\\text{Current Ratio} = \\frac{\\text{Current Assets}}{\\text{Current Liabilities}}$$

A ratio above 1 is necessary but not sufficient. **What the current assets consist of matters more than the ratio.** BDT 630 crore of current assets that is 2% cash is not the same as BDT 630 crore that is 40% cash, and the ratio cannot see the difference.

**Receivable days (Days Sales Outstanding):**
$$\\text{Receivable Days} = \\frac{\\text{Trade Receivables}}{\\text{Revenue}} \\times 365$$

Rising receivable days with flat revenue means one of three things: the company is selling to weaker customers, extending terms to hold volume, or recognising revenue it will not collect. All three are bad. None appears in the profit figure.

**Short-term share of total debt** — the rollover exposure:
$$\\text{ST Share} = \\frac{\\text{Short-term Borrowings} + \\text{Current Portion of LT Loan}}{\\text{Total Debt}} \\times 100$$

**Price to tangible book:**
$$P/TB = \\frac{\\text{Market Price}}{\\text{Tangible NAV per share}}$$

The discipline: **never quote $P/B$ on a Bangladeshi company without simultaneously quoting $P/TB$.** The two numbers frequently sit on opposite sides of 1.0, and only one of them is telling you the truth.`,
      bn: `**হিসাববিজ্ঞানের মৌলিক সমীকরণ:**
$$\\text{সম্পদ} = \\text{দায়} + \\text{ইকুইটি}$$

পুনর্বিন্যস্ত, এবং এই রূপটিই গুরুত্বপূর্ণ:
$$\\text{ইকুইটি} = \\text{সম্পদ} - \\text{দায়}$$

**NAV per share** — প্রতিটি ডিএসই প্রকাশনায় উদ্ধৃত সংখ্যা:
$$\\text{NAV per share} = \\frac{\\text{মোট শেয়ারহোল্ডার ইকুইটি}}{\\text{বকেয়া সাধারণ শেয়ার}}$$

যেখানে বকেয়া শেয়ার পরিশোধিত মূলধন থেকে বের হয়:
$$N = \\frac{\\text{পরিশোধিত মূলধন}}{\\text{অভিহিত মূল্য}}$$

**ট্যানজিবল NAV per share** — যে সংখ্যাটি আপনার প্রকৃতপক্ষে ব্যবহার করা উচিত:
$$\\text{ট্যানজিবল NAV per share} = \\frac{\\text{ইকুইটি} - \\text{পুনর্মূল্যায়ন সঞ্চিতি} - \\text{অস্পৃশ্য সম্পদ} - \\text{সুনাম}}{N}$$

**পুনর্মূল্যায়ন নির্ভরতা** — বাংলাদেশি স্থিতিপত্রে একক সবচেয়ে কার্যকর নির্ণায়ক:
$$\\text{পুনর্মূল্যায়ন \\%} = \\frac{\\text{পুনর্মূল্যায়ন সঞ্চিতি}}{\\text{মোট ইকুইটি}} \\times 100$$

২৫%-এর ওপরে হলে প্রতিবেদিত NAV-কে অনির্ভরযোগ্য গণ্য করুন। ৫০%-এর ওপরে হলে প্রতিবেদিত বুক ভ্যালু মূলত একটি মূল্যায়ন-অনুমান।

**সমন্বয়ে NAV ধ্বংস:**
$$\\text{ধ্বংসকৃত NAV \\%} = \\frac{\\text{NAV}_{প্রতিবেদিত} - \\text{NAV}_{ট্যানজিবল}}{\\text{NAV}_{প্রতিবেদিত}} \\times 100$$

**চলতি মূলধন** — টাকায় নিরঙ্কুশ আচ্ছাদন:
$$\\text{চলতি মূলধন} = \\text{চলতি সম্পদ} - \\text{চলতি দায়}$$

**চলতি অনুপাত** — একই ধারণা গুণিতক আকারে। অধ্যায় ১৪-এ পূর্ণভাবে আলোচিত; এখানে পূর্বাভাস দেওয়া হলো কারণ এটি স্থিতিপত্রের কাঠামো থেকে অবিচ্ছেদ্য:
$$\\text{চলতি অনুপাত} = \\frac{\\text{চলতি সম্পদ}}{\\text{চলতি দায়}}$$

১-এর ওপরে অনুপাত প্রয়োজনীয়, কিন্তু যথেষ্ট নয়। **চলতি সম্পদ কী দিয়ে গঠিত তা অনুপাতের চেয়ে বেশি গুরুত্বপূর্ণ।** ৬৩০ কোটি টাকার চলতি সম্পদ যার ২% নগদ, আর ৬৩০ কোটি টাকা যার ৪০% নগদ — এক জিনিস নয়, আর অনুপাত পার্থক্যটি দেখতে পায় না।

**Receivable days (Days Sales Outstanding):**
$$\\text{Receivable Days} = \\frac{\\text{বাণিজ্যিক প্রাপ্য}}{\\text{রাজস্ব}} \\times 365$$

স্থির রাজস্বের সঙ্গে বাড়তে থাকা receivable days তিনটি জিনিসের একটি বোঝায়: কোম্পানি দুর্বল ক্রেতার কাছে বেচছে, পরিমাণ ধরে রাখতে শর্ত শিথিল করছে, অথবা এমন রাজস্ব স্বীকৃতি দিচ্ছে যা আদায় হবে না। তিনটিই খারাপ। কোনোটিই মুনাফার অঙ্কে দেখা যায় না।

**মোট ঋণে স্বল্পমেয়াদির অংশ** — রোলওভার এক্সপোজার:
$$\\text{ST অংশ} = \\frac{\\text{স্বল্পমেয়াদি ঋণ} + \\text{দীর্ঘমেয়াদির চলতি কিস্তি}}{\\text{মোট ঋণ}} \\times 100$$

**Price to tangible book:**
$$P/TB = \\frac{\\text{বাজারমূল্য}}{\\text{ট্যানজিবল NAV per share}}$$

শৃঙ্খলা: **কোনো বাংলাদেশি কোম্পানির $P/B$ কখনো $P/TB$ একসঙ্গে না বলে উদ্ধৃত করবেন না।** সংখ্যা দুটি প্রায়ই ১.০-এর দুই পাশে থাকে, আর তাদের একটিই আপনাকে সত্য বলছে।`,
    },

    manual: {
      en: `**Scenario.** Meghna Textile Mills Ltd, all figures BDT crore. Paid-up capital 120 (face value BDT 10), share premium 30, revaluation reserve 340, retained earnings 130. Intangibles and goodwill 45. Current assets 630, current liabilities 600. Trade receivables 265, revenue 1,060. Short-term borrowings 420, current portion of long-term loan 30, long-term borrowings 185. Market price BDT 28.00.

**Step 1 — Verify the accounting identity.**

$$\\text{Assets} = 825 + 630 = 1{,}455$$
$$\\text{Equity} = 120 + 30 + 340 + 130 = 620$$
$$\\text{Liabilities} = 235 + 600 = 835$$
$$620 + 835 = 1{,}455 \\;\\checkmark$$

It balances. **Note carefully that this confirms nothing about the truth of any line.** It confirms only that the bookkeeping is internally consistent.

**Step 2 — Shares outstanding.**

$$N = \\frac{120}{10} = 12 \\text{ crore shares}$$

**Step 3 — Reported NAV per share.**

$$\\text{NAV}_{reported} = \\frac{620}{12} = \\text{BDT } 51.67$$

This is the number on the DSE page.

**Step 4 — Remove the revaluation reserve.**

$$620 - 340 = 280 \\text{ crore}$$

**Step 5 — Remove intangibles and goodwill.**

$$280 - 45 = 235 \\text{ crore}$$

**Step 6 — Tangible NAV per share.**

$$\\text{NAV}_{tangible} = \\frac{235}{12} = \\text{BDT } 19.58$$

**Step 7 — How much NAV was destroyed.**

$$51.67 - 19.58 = \\text{BDT } 32.08 \\text{ per share}$$
$$\\frac{32.08}{51.67} \\times 100 = 62.1\\%$$

**Sixty-two percent of the reported book value did not survive contact with two adjustments.**

**Step 8 — Revaluation dependence.**

$$\\frac{340}{620} \\times 100 = 54.84\\%$$

More than half of shareholders' equity is an appraiser's opinion about land the company cannot sell without shutting the factory.

**Step 9 — The two price-to-book ratios.**

$$P/B_{reported} = \\frac{28.00}{51.67} = 0.54\\times$$
$$P/TB = \\frac{28.00}{19.58} = 1.43\\times$$

**Step 10 — Working capital.**

$$630 - 600 = \\text{BDT } 30 \\text{ crore}$$

**Step 11 — Current ratio.**

$$\\frac{630}{600} = 1.05$$

**Step 12 — Receivable days.**

$$\\frac{265}{1{,}060} \\times 365 = 0.25 \\times 365 = 91.25 \\text{ days}$$

**Step 13 — Short-term share of total debt.**

$$\\text{Total debt} = 420 + 30 + 185 = 635$$
$$\\frac{420 + 30}{635} \\times 100 = \\frac{450}{635} \\times 100 = 70.87\\%$$

### Interpretation

Four numbers should stay with you.

**BDT 51.67 versus BDT 19.58.** These describe the same company on the same day under the same accounting standards. One of them is used by the entire retail market to decide whether the share is cheap. It is not the right one.

**54.84%.** Above half of equity is a revaluation reserve. Any statement of the form "trading below book" is, for this company, a statement about an appraisal.

**70.87%.** Nearly three-quarters of the debt must be repaid or renewed within twelve months, against BDT 15 crore of cash. The company is not financing itself. Its bank is financing it, ninety days at a time, and can stop.

**91.25 days.** The receivable cycle is as long as the funding cycle. There is no slack anywhere in this balance sheet.

**The discipline:** compute tangible NAV *before* you compute price-to-book, not after. If you compute $P/B$ first, you will anchor on 0.54 and every subsequent piece of analysis will be conducted in defence of a number that was wrong from the start.`,
      bn: `**পরিস্থিতি।** মেঘনা টেক্সটাইল মিলস লিমিটেড, সব অঙ্ক কোটি টাকায়। পরিশোধিত মূলধন ১২০ (অভিহিত মূল্য ১০ টাকা), শেয়ার প্রিমিয়াম ৩০, পুনর্মূল্যায়ন সঞ্চিতি ৩৪০, সংরক্ষিত মুনাফা ১৩০। অস্পৃশ্য সম্পদ ও সুনাম ৪৫। চলতি সম্পদ ৬৩০, চলতি দায় ৬০০। বাণিজ্যিক প্রাপ্য ২৬৫, রাজস্ব ১,০৬০। স্বল্পমেয়াদি ঋণ ৪২০, দীর্ঘমেয়াদি ঋণের চলতি কিস্তি ৩০, দীর্ঘমেয়াদি ঋণ ১৮৫। বাজারমূল্য ২৮.০০ টাকা।

**ধাপ ১ — হিসাববিজ্ঞানের সমীকরণ যাচাই।**

$$\\text{সম্পদ} = 825 + 630 = 1{,}455$$
$$\\text{ইকুইটি} = 120 + 30 + 340 + 130 = 620$$
$$\\text{দায়} = 235 + 600 = 835$$
$$620 + 835 = 1{,}455 \\;\\checkmark$$

মিলে গেছে। **সাবধানে লক্ষ করুন, এটি কোনো লাইনের সত্যতা সম্পর্কে কিছুই নিশ্চিত করে না।** এটি কেবল নিশ্চিত করে যে হিসাবরক্ষণ অভ্যন্তরীণভাবে সঙ্গতিপূর্ণ।

**ধাপ ২ — বকেয়া শেয়ার।**

$$N = \\frac{120}{10} = 12 \\text{ কোটি শেয়ার}$$

**ধাপ ৩ — প্রতিবেদিত NAV per share।**

$$\\text{NAV}_{প্রতিবেদিত} = \\frac{620}{12} = ৫১.৬৭ \\text{ টাকা}$$

এটিই ডিএসই পাতার সংখ্যা।

**ধাপ ৪ — পুনর্মূল্যায়ন সঞ্চিতি বাদ দিন।**

$$620 - 340 = 280 \\text{ কোটি টাকা}$$

**ধাপ ৫ — অস্পৃশ্য সম্পদ ও সুনাম বাদ দিন।**

$$280 - 45 = 235 \\text{ কোটি টাকা}$$

**ধাপ ৬ — ট্যানজিবল NAV per share।**

$$\\text{NAV}_{ট্যানজিবল} = \\frac{235}{12} = ১৯.৫৮ \\text{ টাকা}$$

**ধাপ ৭ — কতটা NAV ধ্বংস হলো।**

$$51.67 - 19.58 = ৩২.০৮ \\text{ টাকা প্রতি শেয়ার}$$
$$\\frac{32.08}{51.67} \\times 100 = 62.1\\%$$

**প্রতিবেদিত বুক ভ্যালুর বাষট্টি শতাংশ দুটি সমন্বয়ের সংস্পর্শে টিকল না।**

**ধাপ ৮ — পুনর্মূল্যায়ন নির্ভরতা।**

$$\\frac{340}{620} \\times 100 = 54.84\\%$$

শেয়ারহোল্ডার ইকুইটির অর্ধেকের বেশি হলো এমন জমি সম্পর্কে একজন মূল্যায়কের মতামত, যা কারখানা বন্ধ না করে কোম্পানি বেচতে পারে না।

**ধাপ ৯ — দুটি price-to-book অনুপাত।**

$$P/B_{প্রতিবেদিত} = \\frac{28.00}{51.67} = 0.54\\times$$
$$P/TB = \\frac{28.00}{19.58} = 1.43\\times$$

**ধাপ ১০ — চলতি মূলধন।**

$$630 - 600 = ৩০ \\text{ কোটি টাকা}$$

**ধাপ ১১ — চলতি অনুপাত।**

$$\\frac{630}{600} = 1.05$$

**ধাপ ১২ — Receivable days।**

$$\\frac{265}{1{,}060} \\times 365 = 0.25 \\times 365 = 91.25 \\text{ দিন}$$

**ধাপ ১৩ — মোট ঋণে স্বল্পমেয়াদির অংশ।**

$$\\text{মোট ঋণ} = 420 + 30 + 185 = 635$$
$$\\frac{450}{635} \\times 100 = 70.87\\%$$

### ব্যাখ্যা

চারটি সংখ্যা আপনার মনে থাকা উচিত।

**৫১.৬৭ টাকা বনাম ১৯.৫৮ টাকা।** এরা একই দিনে একই হিসাবমান অনুযায়ী একই কোম্পানিকে বর্ণনা করে। এদের একটি সমগ্র খুচরা বাজার ব্যবহার করে সিদ্ধান্ত নিতে যে শেয়ারটি সস্তা কি না। সেটি সঠিক সংখ্যাটি নয়।

**৫৪.৮৪%।** ইকুইটির অর্ধেকের বেশি পুনর্মূল্যায়ন সঞ্চিতি। এই কোম্পানির ক্ষেত্রে "বুকের নিচে লেনদেন" ধরনের যেকোনো বক্তব্য আসলে একটি মূল্যায়ন-অনুমান সম্পর্কে বক্তব্য।

**৭০.৮৭%।** ঋণের প্রায় তিন-চতুর্থাংশ বারো মাসের মধ্যে শোধ বা নবায়ন করতে হবে, বিপরীতে নগদ ১৫ কোটি টাকা। কোম্পানি নিজেকে অর্থায়ন করছে না। তার ব্যাংক তাকে অর্থায়ন করছে, একবারে নব্বই দিন করে, এবং থামিয়ে দিতে পারে।

**৯১.২৫ দিন।** প্রাপ্য চক্র অর্থায়ন চক্রের সমান দীর্ঘ। এই স্থিতিপত্রের কোথাও কোনো ফাঁক নেই।

**শৃঙ্খলা:** price-to-book গণনার *আগে* ট্যানজিবল NAV গণনা করুন, পরে নয়। $P/B$ আগে গণনা করলে আপনি ০.৫৪-এ নোঙর ফেলবেন, আর পরবর্তী প্রতিটি বিশ্লেষণ এমন একটি সংখ্যার সমর্থনে পরিচালিত হবে যা শুরু থেকেই ভুল ছিল।`,
    },

    excel: {
      en: `\`\`\`
A1: Paid-up Capital (BDT cr)          B1: 120
A2: Face Value (BDT)                  B2: 10
A3: Shares Outstanding (cr)           B3: =B1/B2

A5: Share Premium                     B5: 30
A6: Revaluation Reserve               B6: 340
A7: Retained Earnings                 B7: 130
A8: TOTAL EQUITY                      B8: =B1+B5+B6+B7

A10: Intangibles & Goodwill           B10: 45

A12: Reported NAV per Share           B12: =B8/B3
A13: Tangible Equity                  B13: =B8-B6-B10
A14: TANGIBLE NAV per Share           B14: =B13/B3
A15: NAV Destroyed (%)                B15: =(B12-B14)/B12*100

A17: Revaluation % of Equity          B17: =B6/B8*100

A19: Market Price (BDT)               B19: 28
A20: P/B on Reported NAV              B20: =B19/B12
A21: P/B on Tangible NAV              B21: =B19/B14
A22: VERDICT                          B22: =IF(B17>25,
       IF(B21>=1,"BOOK-VALUE ILLUSION - cheap only on paper",
                 "Revaluation-heavy but still cheap on tangible"),
       "Book value largely earned")

A24: Current Assets                   B24: 630
A25: Current Liabilities              B25: 600
A26: Working Capital                  B26: =B24-B25
A27: Current Ratio                    B27: =B24/B25

A29: Trade Receivables                B29: 265
A30: Revenue                          B30: 1060
A31: Receivable Days                  B31: =B29/B30*365

A33: Short-term Debt (incl. curr.)    B33: 450
A34: Long-term Debt                   B34: 185
A35: Short-term % of Total Debt       B35: =B33/(B33+B34)*100
A36: ROLLOVER FLAG                    B36: =IF(B35>50,
       "Majority of debt matures inside 12 months",
       "Term structure acceptable")
\`\`\`

**B14 and B21 are the two cells that matter.** B12 is what the market quotes; B14 is what you own. B20 will tell you the share is cheap and B21 will tell you it is not, and they will do so simultaneously, from the same inputs.

Run this on any DSE textile, cement, or engineering company before you accept a "trading below NAV" argument from anybody. The revaluation reserve figure is in the equity note of the annual report, usually within two pages of the statement of financial position.

**Set B6 to 0 to see what the company would look like on the cost model.** For Meghna, reported NAV falls to BDT 23.33 and tangible NAV is unchanged at BDT 19.58 — the gap closes to almost nothing, because the entire distortion was one line.`,
      bn: `\`\`\`
A1: পরিশোধিত মূলধন (কোটি টাকা)        B1: 120
A2: অভিহিত মূল্য (টাকা)               B2: 10
A3: বকেয়া শেয়ার (কোটি)               B3: =B1/B2

A5: শেয়ার প্রিমিয়াম                  B5: 30
A6: পুনর্মূল্যায়ন সঞ্চিতি              B6: 340
A7: সংরক্ষিত মুনাফা                   B7: 130
A8: মোট ইকুইটি                        B8: =B1+B5+B6+B7

A10: অস্পৃশ্য সম্পদ ও সুনাম            B10: 45

A12: প্রতিবেদিত NAV per Share         B12: =B8/B3
A13: ট্যানজিবল ইকুইটি                 B13: =B8-B6-B10
A14: ট্যানজিবল NAV per Share          B14: =B13/B3
A15: ধ্বংসকৃত NAV (%)                 B15: =(B12-B14)/B12*100

A17: ইকুইটিতে পুনর্মূল্যায়নের %        B17: =B6/B8*100

A19: বাজারমূল্য (টাকা)                B19: 28
A20: প্রতিবেদিত NAV-তে P/B            B20: =B19/B12
A21: ট্যানজিবল NAV-তে P/B             B21: =B19/B14
A22: রায়                              B22: =IF(B17>25,
       IF(B21>=1,"BOOK-VALUE ILLUSION - cheap only on paper",
                 "Revaluation-heavy but still cheap on tangible"),
       "Book value largely earned")

A24: চলতি সম্পদ                       B24: 630
A25: চলতি দায়                        B25: 600
A26: চলতি মূলধন                       B26: =B24-B25
A27: চলতি অনুপাত                      B27: =B24/B25

A29: বাণিজ্যিক প্রাপ্য                 B29: 265
A30: রাজস্ব                            B30: 1060
A31: Receivable Days                  B31: =B29/B30*365

A33: স্বল্পমেয়াদি ঋণ (চলতি কিস্তিসহ)  B33: 450
A34: দীর্ঘমেয়াদি ঋণ                   B34: 185
A35: মোট ঋণে স্বল্পমেয়াদির %          B35: =B33/(B33+B34)*100
A36: রোলওভার সতর্কতা                  B36: =IF(B35>50,
       "Majority of debt matures inside 12 months",
       "Term structure acceptable")
\`\`\`

**B14 ও B21 — এই দুটি ঘরই গুরুত্বপূর্ণ।** B12 বাজার যা উদ্ধৃত করে; B14 আপনি যা মালিক। B20 আপনাকে বলবে শেয়ারটি সস্তা আর B21 বলবে নয় — এবং তারা একই সঙ্গে, একই উপাত্ত থেকে তা বলবে।

কারো কাছ থেকে "NAV-র নিচে লেনদেন" যুক্তি মেনে নেওয়ার আগে যেকোনো ডিএসই বস্ত্র, সিমেন্ট বা প্রকৌশল কোম্পানিতে এটি চালান। পুনর্মূল্যায়ন সঞ্চিতির অঙ্ক বার্ষিক প্রতিবেদনের ইকুইটি নোটে থাকে, সাধারণত আর্থিক অবস্থার বিবরণীর দুই পাতার মধ্যেই।

**ব্যয় মডেলে কোম্পানিটি কেমন দেখাত তা দেখতে B6-তে ০ বসান।** মেঘনার ক্ষেত্রে প্রতিবেদিত NAV নেমে আসে ২৩.৩৩ টাকায় এবং ট্যানজিবল NAV ১৯.৫৮ টাকাতেই অপরিবর্তিত থাকে — ব্যবধান প্রায় শূন্যে নেমে আসে, কারণ পুরো বিকৃতিটিই ছিল একটিমাত্র লাইন।`,
    },

    python: {
      en: `\`\`\`python
"""
Chapter 11 - Balance sheet quality and the revaluation-adjusted NAV.
Educational. All figures in BDT crore unless stated.
"""
from dataclasses import dataclass


@dataclass
class BalanceSheet:
    """One listed company's statement of financial position, in BDT crore."""
    name: str
    # Non-current assets
    ppe: float
    intangibles: float
    # Current assets
    inventory: float
    receivables: float
    other_current_assets: float
    cash: float
    # Equity
    paid_up_capital: float
    face_value: float          # BDT per share
    share_premium: float
    revaluation_reserve: float
    retained_earnings: float
    # Non-current liabilities
    long_term_debt: float
    deferred_tax: float
    # Current liabilities
    short_term_debt: float
    current_portion_ltd: float
    trade_payables: float
    # Income statement links
    revenue: float
    market_price: float        # BDT per share

    # ---------- structure ----------
    @property
    def non_current_assets(self) -> float:
        return self.ppe + self.intangibles

    @property
    def current_assets(self) -> float:
        return self.inventory + self.receivables + self.other_current_assets + self.cash

    @property
    def total_assets(self) -> float:
        return self.non_current_assets + self.current_assets

    @property
    def equity(self) -> float:
        return (self.paid_up_capital + self.share_premium
                + self.revaluation_reserve + self.retained_earnings)

    @property
    def current_liabilities(self) -> float:
        return self.short_term_debt + self.current_portion_ltd + self.trade_payables

    @property
    def non_current_liabilities(self) -> float:
        return self.long_term_debt + self.deferred_tax

    @property
    def total_liabilities(self) -> float:
        return self.current_liabilities + self.non_current_liabilities

    @property
    def identity_holds(self) -> bool:
        return abs(self.total_assets - (self.equity + self.total_liabilities)) < 0.01

    # ---------- per share ----------
    @property
    def shares_crore(self) -> float:
        return self.paid_up_capital / self.face_value

    @property
    def nav_per_share(self) -> float:
        """Reported NAV. This is the number the DSE quotes."""
        return self.equity / self.shares_crore

    @property
    def tangible_equity(self) -> float:
        """Equity after removing the revaluation reserve and intangibles."""
        return self.equity - self.revaluation_reserve - self.intangibles

    @property
    def tangible_nav_per_share(self) -> float:
        return self.tangible_equity / self.shares_crore

    # ---------- distortion and stress ----------
    @property
    def revaluation_pct_equity(self) -> float:
        return self.revaluation_reserve / self.equity * 100

    @property
    def working_capital(self) -> float:
        return self.current_assets - self.current_liabilities

    @property
    def current_ratio(self) -> float:
        return self.current_assets / self.current_liabilities

    @property
    def receivable_days(self) -> float:
        return self.receivables / self.revenue * 365

    @property
    def total_debt(self) -> float:
        return self.short_term_debt + self.current_portion_ltd + self.long_term_debt

    @property
    def short_term_debt_share(self) -> float:
        return (self.short_term_debt + self.current_portion_ltd) / self.total_debt * 100

    @property
    def price_to_book(self) -> float:
        return self.market_price / self.nav_per_share

    @property
    def price_to_tangible_book(self) -> float:
        return self.market_price / self.tangible_nav_per_share

    def flags(self) -> list:
        out = []
        if self.revaluation_pct_equity > 25:
            out.append(f"REVALUATION-DEPENDENT: {self.revaluation_pct_equity:.1f}% "
                       f"of equity is a reserve, not cash earned.")
        if self.short_term_debt_share > 50:
            out.append(f"ROLLOVER RISK: {self.short_term_debt_share:.1f}% of debt "
                       f"matures inside 12 months.")
        if self.current_ratio < 1.20:
            out.append(f"THIN LIQUIDITY: current ratio {self.current_ratio:.2f}.")
        if self.receivable_days > 75:
            out.append(f"SLOW COLLECTION: {self.receivable_days:.1f} receivable days.")
        if self.price_to_book < 1 <= self.price_to_tangible_book:
            out.append("BOOK-VALUE ILLUSION: cheap on reported NAV, "
                       "not cheap on tangible NAV.")
        return out


if __name__ == "__main__":
    co = BalanceSheet(
        name="Meghna Textile Mills Ltd (archetype)",
        ppe=780.0, intangibles=45.0,
        inventory=310.0, receivables=265.0, other_current_assets=40.0, cash=15.0,
        paid_up_capital=120.0, face_value=10.0,
        share_premium=30.0, revaluation_reserve=340.0, retained_earnings=130.0,
        long_term_debt=185.0, deferred_tax=50.0,
        short_term_debt=420.0, current_portion_ltd=30.0, trade_payables=150.0,
        revenue=1060.0, market_price=28.0,
    )

    print(f"Company                  : {co.name}")
    print(f"Total assets             : BDT {co.total_assets:,.0f} cr")
    print(f"Total equity             : BDT {co.equity:,.0f} cr")
    print(f"Total liabilities        : BDT {co.total_liabilities:,.0f} cr")
    print(f"Accounting identity holds: {co.identity_holds}")
    print()
    print(f"Shares outstanding       : {co.shares_crore:.2f} crore")
    print(f"Reported NAV per share   : BDT {co.nav_per_share:.2f}")
    print(f"Tangible NAV per share   : BDT {co.tangible_nav_per_share:.2f}")
    print(f"Destroyed by adjustment  : BDT {co.nav_per_share - co.tangible_nav_per_share:.2f} "
          f"({(1 - co.tangible_nav_per_share / co.nav_per_share) * 100:.1f}%)")
    print()
    print(f"Price                    : BDT {co.market_price:.2f}")
    print(f"P/B on reported NAV      : {co.price_to_book:.2f}x")
    print(f"P/B on tangible NAV      : {co.price_to_tangible_book:.2f}x")
    print()
    print(f"Revaluation / equity     : {co.revaluation_pct_equity:.2f}%")
    print(f"Working capital          : BDT {co.working_capital:,.0f} cr")
    print(f"Current ratio            : {co.current_ratio:.2f}")
    print(f"Receivable days          : {co.receivable_days:.2f} days")
    print(f"Short-term share of debt : {co.short_term_debt_share:.2f}%")
    print()
    print("FLAGS")
    for f in co.flags():
        print(f"  - {f}")
\`\`\`

**Expected output:**

\`\`\`
Company                  : Meghna Textile Mills Ltd (archetype)
Total assets             : BDT 1,455 cr
Total equity             : BDT 620 cr
Total liabilities        : BDT 835 cr
Accounting identity holds: True

Shares outstanding       : 12.00 crore
Reported NAV per share   : BDT 51.67
Tangible NAV per share   : BDT 19.58
Destroyed by adjustment  : BDT 32.08 (62.1%)

Price                    : BDT 28.00
P/B on reported NAV      : 0.54x
P/B on tangible NAV      : 1.43x

Revaluation / equity     : 54.84%
Working capital          : BDT 30 cr
Current ratio            : 1.05
Receivable days          : 91.25 days
Short-term share of debt : 70.87%

FLAGS
  - REVALUATION-DEPENDENT: 54.8% of equity is a reserve, not cash earned.
  - ROLLOVER RISK: 70.9% of debt matures inside 12 months.
  - THIN LIQUIDITY: current ratio 1.05.
  - SLOW COLLECTION: 91.2 receivable days.
  - BOOK-VALUE ILLUSION: cheap on reported NAV, not cheap on tangible NAV.
\`\`\`

**Note the last flag.** It fires only when \`price_to_book < 1 <= price_to_tangible_book\` — that is, when the two ratios sit on opposite sides of 1.0. That specific configuration is the book-value illusion in its pure form, and it is common enough on the DSE textile and engineering boards that a screener built on reported NAV alone will surface these companies repeatedly and call them bargains.

The class is deliberately verbose about inputs. That is the point: **you cannot compute tangible NAV without opening the equity note**, and forcing every component into the constructor forces you to find each one in the annual report rather than accepting a single aggregated figure from a portal.`,
      bn: `\`\`\`python
"""
অধ্যায় ১১ — স্থিতিপত্রের গুণমান ও পুনর্মূল্যায়ন-সমন্বিত NAV।
শিক্ষামূলক। উল্লেখ না থাকলে সব অঙ্ক কোটি টাকায়।
"""
from dataclasses import dataclass


@dataclass
class BalanceSheet:
    """একটি তালিকাভুক্ত কোম্পানির আর্থিক অবস্থার বিবরণী, কোটি টাকায়।"""
    name: str
    # অ-চলতি সম্পদ
    ppe: float
    intangibles: float
    # চলতি সম্পদ
    inventory: float
    receivables: float
    other_current_assets: float
    cash: float
    # ইকুইটি
    paid_up_capital: float
    face_value: float          # টাকা প্রতি শেয়ার
    share_premium: float
    revaluation_reserve: float
    retained_earnings: float
    # অ-চলতি দায়
    long_term_debt: float
    deferred_tax: float
    # চলতি দায়
    short_term_debt: float
    current_portion_ltd: float
    trade_payables: float
    # আয় বিবরণীর সংযোগ
    revenue: float
    market_price: float        # টাকা প্রতি শেয়ার

    # ---------- কাঠামো ----------
    @property
    def non_current_assets(self) -> float:
        return self.ppe + self.intangibles

    @property
    def current_assets(self) -> float:
        return self.inventory + self.receivables + self.other_current_assets + self.cash

    @property
    def total_assets(self) -> float:
        return self.non_current_assets + self.current_assets

    @property
    def equity(self) -> float:
        return (self.paid_up_capital + self.share_premium
                + self.revaluation_reserve + self.retained_earnings)

    @property
    def current_liabilities(self) -> float:
        return self.short_term_debt + self.current_portion_ltd + self.trade_payables

    @property
    def non_current_liabilities(self) -> float:
        return self.long_term_debt + self.deferred_tax

    @property
    def total_liabilities(self) -> float:
        return self.current_liabilities + self.non_current_liabilities

    @property
    def identity_holds(self) -> bool:
        return abs(self.total_assets - (self.equity + self.total_liabilities)) < 0.01

    # ---------- প্রতি শেয়ার ----------
    @property
    def shares_crore(self) -> float:
        return self.paid_up_capital / self.face_value

    @property
    def nav_per_share(self) -> float:
        """প্রতিবেদিত NAV। ডিএসই এই সংখ্যাটিই উদ্ধৃত করে।"""
        return self.equity / self.shares_crore

    @property
    def tangible_equity(self) -> float:
        """পুনর্মূল্যায়ন সঞ্চিতি ও অস্পৃশ্য সম্পদ বাদ দেওয়ার পর ইকুইটি।"""
        return self.equity - self.revaluation_reserve - self.intangibles

    @property
    def tangible_nav_per_share(self) -> float:
        return self.tangible_equity / self.shares_crore

    # ---------- বিকৃতি ও চাপ ----------
    @property
    def revaluation_pct_equity(self) -> float:
        return self.revaluation_reserve / self.equity * 100

    @property
    def working_capital(self) -> float:
        return self.current_assets - self.current_liabilities

    @property
    def current_ratio(self) -> float:
        return self.current_assets / self.current_liabilities

    @property
    def receivable_days(self) -> float:
        return self.receivables / self.revenue * 365

    @property
    def total_debt(self) -> float:
        return self.short_term_debt + self.current_portion_ltd + self.long_term_debt

    @property
    def short_term_debt_share(self) -> float:
        return (self.short_term_debt + self.current_portion_ltd) / self.total_debt * 100

    @property
    def price_to_book(self) -> float:
        return self.market_price / self.nav_per_share

    @property
    def price_to_tangible_book(self) -> float:
        return self.market_price / self.tangible_nav_per_share

    def flags(self) -> list:
        out = []
        if self.revaluation_pct_equity > 25:
            out.append(f"REVALUATION-DEPENDENT: {self.revaluation_pct_equity:.1f}% "
                       f"of equity is a reserve, not cash earned.")
        if self.short_term_debt_share > 50:
            out.append(f"ROLLOVER RISK: {self.short_term_debt_share:.1f}% of debt "
                       f"matures inside 12 months.")
        if self.current_ratio < 1.20:
            out.append(f"THIN LIQUIDITY: current ratio {self.current_ratio:.2f}.")
        if self.receivable_days > 75:
            out.append(f"SLOW COLLECTION: {self.receivable_days:.1f} receivable days.")
        if self.price_to_book < 1 <= self.price_to_tangible_book:
            out.append("BOOK-VALUE ILLUSION: cheap on reported NAV, "
                       "not cheap on tangible NAV.")
        return out


if __name__ == "__main__":
    co = BalanceSheet(
        name="Meghna Textile Mills Ltd (archetype)",
        ppe=780.0, intangibles=45.0,
        inventory=310.0, receivables=265.0, other_current_assets=40.0, cash=15.0,
        paid_up_capital=120.0, face_value=10.0,
        share_premium=30.0, revaluation_reserve=340.0, retained_earnings=130.0,
        long_term_debt=185.0, deferred_tax=50.0,
        short_term_debt=420.0, current_portion_ltd=30.0, trade_payables=150.0,
        revenue=1060.0, market_price=28.0,
    )

    print(f"Company                  : {co.name}")
    print(f"Total assets             : BDT {co.total_assets:,.0f} cr")
    print(f"Total equity             : BDT {co.equity:,.0f} cr")
    print(f"Total liabilities        : BDT {co.total_liabilities:,.0f} cr")
    print(f"Accounting identity holds: {co.identity_holds}")
    print()
    print(f"Shares outstanding       : {co.shares_crore:.2f} crore")
    print(f"Reported NAV per share   : BDT {co.nav_per_share:.2f}")
    print(f"Tangible NAV per share   : BDT {co.tangible_nav_per_share:.2f}")
    print(f"Destroyed by adjustment  : BDT {co.nav_per_share - co.tangible_nav_per_share:.2f} "
          f"({(1 - co.tangible_nav_per_share / co.nav_per_share) * 100:.1f}%)")
    print()
    print(f"Price                    : BDT {co.market_price:.2f}")
    print(f"P/B on reported NAV      : {co.price_to_book:.2f}x")
    print(f"P/B on tangible NAV      : {co.price_to_tangible_book:.2f}x")
    print()
    print(f"Revaluation / equity     : {co.revaluation_pct_equity:.2f}%")
    print(f"Working capital          : BDT {co.working_capital:,.0f} cr")
    print(f"Current ratio            : {co.current_ratio:.2f}")
    print(f"Receivable days          : {co.receivable_days:.2f} days")
    print(f"Short-term share of debt : {co.short_term_debt_share:.2f}%")
    print()
    print("FLAGS")
    for f in co.flags():
        print(f"  - {f}")
\`\`\`

**প্রত্যাশিত ফলাফল:**

\`\`\`
Company                  : Meghna Textile Mills Ltd (archetype)
Total assets             : BDT 1,455 cr
Total equity             : BDT 620 cr
Total liabilities        : BDT 835 cr
Accounting identity holds: True

Shares outstanding       : 12.00 crore
Reported NAV per share   : BDT 51.67
Tangible NAV per share   : BDT 19.58
Destroyed by adjustment  : BDT 32.08 (62.1%)

Price                    : BDT 28.00
P/B on reported NAV      : 0.54x
P/B on tangible NAV      : 1.43x

Revaluation / equity     : 54.84%
Working capital          : BDT 30 cr
Current ratio            : 1.05
Receivable days          : 91.25 days
Short-term share of debt : 70.87%

FLAGS
  - REVALUATION-DEPENDENT: 54.8% of equity is a reserve, not cash earned.
  - ROLLOVER RISK: 70.9% of debt matures inside 12 months.
  - THIN LIQUIDITY: current ratio 1.05.
  - SLOW COLLECTION: 91.2 receivable days.
  - BOOK-VALUE ILLUSION: cheap on reported NAV, not cheap on tangible NAV.
\`\`\`

**শেষ সতর্কতাটি লক্ষ করুন।** এটি কেবল তখনই সক্রিয় হয় যখন \`price_to_book < 1 <= price_to_tangible_book\` — অর্থাৎ যখন অনুপাত দুটি ১.০-এর দুই পাশে থাকে। ঐ নির্দিষ্ট বিন্যাসটিই বিশুদ্ধ রূপে বুক-ভ্যালু বিভ্রম, এবং ডিএসই-র বস্ত্র ও প্রকৌশল বোর্ডে এটি এতটাই সাধারণ যে কেবল প্রতিবেদিত NAV-র ওপর গড়া স্ক্রিনার বারবার এই কোম্পানিগুলোকে সামনে আনবে এবং সুযোগ বলে ঘোষণা করবে।

ক্লাসটি ইনপুটের ব্যাপারে ইচ্ছাকৃতভাবে বাচাল। এটাই উদ্দেশ্য: **ইকুইটি নোট না খুলে আপনি ট্যানজিবল NAV গণনা করতে পারবেন না**, আর প্রতিটি উপাদানকে কনস্ট্রাক্টরে বাধ্যতামূলক করায় আপনাকে কোনো পোর্টাল থেকে একটিমাত্র সমষ্টিগত সংখ্যা মেনে না নিয়ে বার্ষিক প্রতিবেদনে প্রতিটি খুঁজে বের করতে হয়।`,
    },

    mistakes: {
      en: `1. **Treating a balanced balance sheet as a verified one.** The identity holds by construction. An overstated asset is offset by overstated equity, and nothing breaks. Balance is a bookkeeping property, not an assurance.
2. **Quoting NAV per share without checking the revaluation reserve.** This is the defining retail error on the DSE. "Trading at half of book" is meaningless if half of book is an appraiser's opinion about land under a factory.
3. **Reading total debt instead of the term structure.** BDT 635 crore of debt is not a fact about risk. BDT 450 crore of it maturing within twelve months against BDT 15 crore of cash is.
4. **Assuming short-term borrowing is genuinely short-term.** It is a rolled working capital line that management treats as permanent. The bank does not, and the bank decides.
5. **Accepting the current ratio without decomposing current assets.** A ratio of 1.05 built from 2% cash and 98% management estimates is not liquidity. It is an assumption about collection and sale.
6. **Ignoring inventory growth relative to revenue.** Inventory rising far faster than sales is either an undisclosed order book or unwritten-down obsolescence. The balance sheet will not distinguish them; it will only tell you to ask.
7. **Believing goodwill represents value.** Goodwill is the capitalised record of an overpayment, impairment-tested by the same management that authorised the payment. It sits undisturbed for years and then disappears in one write-off.
8. **Using book value as a valuation anchor rather than a liquidation floor.** You are buying future cash flows. A high NAV with a 2% return on equity is a large pile of assets earning nothing.
9. **Comparing NAV across sectors.** A bank's balance sheet is its business; a pharma company's is a support structure. Price-to-book means something quite different in each, and Chapter 15 will treat banks separately for exactly this reason.
10. **Forgetting that the revaluation reserve depresses ROE.** Companies with heavy revaluation reserves show poor returns on equity by construction — not necessarily because operations are bad, but because the denominator has been inflated by land.`,
      bn: `১. **মিলে যাওয়া স্থিতিপত্রকে যাচাইকৃত ভাবা।** সমীকরণটি গঠনগতভাবেই মেলে। বাড়িয়ে দেখানো সম্পদ বাড়িয়ে দেখানো ইকুইটি দিয়ে কাটা পড়ে, আর কিছুই ভাঙে না। মিলে যাওয়া একটি হিসাবরক্ষণগত বৈশিষ্ট্য, কোনো নিশ্চয়তা নয়।
২. **পুনর্মূল্যায়ন সঞ্চিতি না দেখে NAV per share উদ্ধৃত করা।** ডিএসই-তে এটিই খুচরা বিনিয়োগকারীর সংজ্ঞায়ক ভুল। "বুকের অর্ধেকে লেনদেন" অর্থহীন যদি বুকের অর্ধেকই কারখানার নিচের জমি সম্পর্কে একজন মূল্যায়কের মতামত হয়।
৩. **মেয়াদ-কাঠামোর বদলে মোট ঋণ পড়া।** ৬৩৫ কোটি টাকা ঋণ ঝুঁকি সম্পর্কে কোনো তথ্য নয়। এর ৪৫০ কোটি টাকা বারো মাসের মধ্যে পরিশোধযোগ্য এবং নগদ মাত্র ১৫ কোটি — এটিই তথ্য।
৪. **স্বল্পমেয়াদি ঋণকে সত্যিই স্বল্পমেয়াদি ধরে নেওয়া।** এটি একটি নবায়িত চলতি মূলধন সীমা যাকে ব্যবস্থাপনা স্থায়ী গণ্য করে। ব্যাংক করে না, আর সিদ্ধান্ত ব্যাংকেরই।
৫. **চলতি সম্পদ বিশ্লেষণ না করে চলতি অনুপাত মেনে নেওয়া।** ২% নগদ ও ৯৮% ব্যবস্থাপনার নিরূপণ দিয়ে গড়া ১.০৫ অনুপাত তারল্য নয়। এটি আদায় ও বিক্রি সম্পর্কে একটি অনুমান।
৬. **রাজস্বের তুলনায় মজুদ বৃদ্ধি উপেক্ষা করা।** বিক্রির চেয়ে অনেক দ্রুত বাড়তে থাকা মজুদ হয় অপ্রকাশিত অর্ডার বই, নয়তো অবলোপন না করা অপ্রচলিত পণ্য। স্থিতিপত্র এদের আলাদা করবে না; কেবল প্রশ্নটি করতে বলবে।
৭. **সুনামকে মূল্য বলে বিশ্বাস করা।** সুনাম হলো অতিরিক্ত মূল্য প্রদানের মূলধনীকৃত নথি, যার ক্ষয় পরীক্ষা করে সেই একই ব্যবস্থাপনা যারা ঐ মূল্য অনুমোদন করেছিল। এটি বছরের পর বছর অবিচল বসে থাকে, তারপর একটিমাত্র অবলোপনে উবে যায়।
৮. **বুক ভ্যালুকে অবসায়ন-মেঝের বদলে মূল্যায়নের নোঙর হিসেবে ব্যবহার করা।** আপনি ভবিষ্যৎ নগদ প্রবাহ কিনছেন। ২% return on equity সহ উঁচু NAV মানে বিপুল সম্পদের স্তূপ যা কিছুই আয় করছে না।
৯. **খাতের মধ্যে NAV তুলনা করা।** একটি ব্যাংকের স্থিতিপত্রই তার ব্যবসা; একটি ওষুধ কোম্পানির স্থিতিপত্র একটি সহায়ক কাঠামো। Price-to-book প্রতিটিতে বেশ ভিন্ন অর্থ বহন করে, আর ঠিক এ কারণেই অধ্যায় ১৫ ব্যাংককে আলাদাভাবে আলোচনা করবে।
১০. **পুনর্মূল্যায়ন সঞ্চিতি ROE নামিয়ে দেয় তা ভুলে যাওয়া।** ভারী পুনর্মূল্যায়ন সঞ্চিতিওয়ালা কোম্পানিগুলো গঠনগতভাবেই দুর্বল return on equity দেখায় — অগত্যা পরিচালন খারাপ বলে নয়, বরং হরটি জমি দিয়ে স্ফীত করা হয়েছে বলে।`,
    },

    tips: {
      en: `- **Open the equity note before you open the price chart.** The revaluation reserve is disclosed there, usually within two pages of the statement of financial position. It takes ninety seconds and it changes the conclusion more often than any other ninety seconds you will spend on a Bangladeshi annual report.
- **Compute tangible NAV first, price-to-book second.** Order matters because of anchoring. If you see 0.54× before you see the reserve, every later adjustment will feel like nitpicking rather than correction.
- **Build a five-year table of inventory, receivables, and revenue side by side.** Ratios in a single year tell you very little. The pattern of inventory and receivables growing faster than revenue for three consecutive years is one of the highest-quality warnings available in a published account.
- **Read the maturity profile note on borrowings, not the balance sheet line.** The note discloses when facilities fall due and often which bank holds them. Concentration matters: a company whose entire working capital line sits with one stressed bank has a single point of failure.
- **Check whether the revaluation was performed just before a rights issue or an IPO.** Revaluation raises book value, which supports a higher issue price. The timing is public, and the pattern is common enough to be worth checking every time.
- **Ask what the revalued asset is.** Land under an operating factory is not realisable. Surplus land in a separate location genuinely is. The balance sheet shows a single number; the property note shows what it consists of.
- **Treat any company where receivable days exceed the bank's rollover cycle as structurally fragile,** regardless of profitability. It has no timing cushion, and the failure mode does not require anything to go wrong operationally.
- **Cross-check the balance sheet against the cash flow statement every time.** Chapter 12 is the natural companion to this one: rising receivables and inventory on the balance sheet must appear as cash outflows in the operating section. If they do not, one of the two statements is wrong.`,
      bn: `- **দামের চার্ট খোলার আগে ইকুইটি নোট খুলুন।** পুনর্মূল্যায়ন সঞ্চিতি সেখানেই প্রকাশিত, সাধারণত আর্থিক অবস্থার বিবরণীর দুই পাতার মধ্যে। এতে নব্বই সেকেন্ড লাগে, এবং একটি বাংলাদেশি বার্ষিক প্রতিবেদনে ব্যয় করা অন্য যেকোনো নব্বই সেকেন্ডের চেয়ে এটি বেশিবার সিদ্ধান্ত বদলে দেয়।
- **আগে ট্যানজিবল NAV গণনা করুন, পরে price-to-book।** নোঙর প্রভাবের কারণে ক্রমটি গুরুত্বপূর্ণ। সঞ্চিতি দেখার আগে ০.৫৪× দেখে ফেললে পরবর্তী প্রতিটি সমন্বয়কে সংশোধনের বদলে খুঁতখুঁতানি মনে হবে।
- **মজুদ, প্রাপ্য ও রাজস্ব পাশাপাশি রেখে পাঁচ বছরের একটি সারণি বানান।** একক বছরের অনুপাত খুব সামান্যই বলে। টানা তিন বছর রাজস্বের চেয়ে দ্রুত বাড়তে থাকা মজুদ ও প্রাপ্যের ধরনটি প্রকাশিত হিসাবে প্রাপ্য সর্বোচ্চ মানের সতর্কবার্তাগুলোর একটি।
- **স্থিতিপত্রের লাইন নয়, ঋণের মেয়াদ-বিন্যাস নোটটি পড়ুন।** নোটটি প্রকাশ করে সুবিধাগুলো কখন পরিশোধযোগ্য এবং প্রায়ই কোন ব্যাংক সেগুলো ধরে আছে। কেন্দ্রীভবন গুরুত্বপূর্ণ: যে কোম্পানির পুরো চলতি মূলধন সীমা একটিমাত্র চাপগ্রস্ত ব্যাংকে, তার একটিমাত্র ব্যর্থতার বিন্দু আছে।
- **পুনর্মূল্যায়নটি কোনো রাইট ইস্যু বা আইপিও-র ঠিক আগে হয়েছে কি না দেখুন।** পুনর্মূল্যায়ন বুক ভ্যালু বাড়ায়, যা উঁচু ইস্যু মূল্যকে সমর্থন দেয়। সময়টি প্রকাশ্য, আর ধরনটি প্রতিবার যাচাই করার মতো যথেষ্ট সাধারণ।
- **পুনর্মূল্যায়িত সম্পদটি কী তা জিজ্ঞেস করুন।** চালু কারখানার নিচের জমি আদায়যোগ্য নয়। আলাদা জায়গায় উদ্বৃত্ত জমি সত্যিই আদায়যোগ্য। স্থিতিপত্র একটিমাত্র সংখ্যা দেখায়; সম্পত্তি নোট দেখায় সেটি কী দিয়ে গঠিত।
- **যে কোম্পানির receivable days ব্যাংকের রোলওভার চক্রের চেয়ে বেশি, তাকে কাঠামোগতভাবে ভঙ্গুর গণ্য করুন,** লাভজনকতা যাই হোক। তার কোনো সময়গত আচ্ছাদন নেই, আর ব্যর্থতার পথটির জন্য পরিচালনগতভাবে কিছু ভুল হওয়ার প্রয়োজন হয় না।
- **প্রতিবার স্থিতিপত্রকে নগদ প্রবাহ বিবরণীর সঙ্গে মিলিয়ে দেখুন।** অধ্যায় ১২ এটির স্বাভাবিক সঙ্গী: স্থিতিপত্রে বাড়তে থাকা প্রাপ্য ও মজুদ পরিচালন অংশে নগদ বহিঃপ্রবাহ হিসেবে দেখা দিতেই হবে। না দিলে দুটি বিবরণীর একটি ভুল।`,
    },

    exercises: {
      en: `1. Pick any DSE-listed textile company. From its latest annual report, find total equity and the revaluation reserve. Compute revaluation as a percentage of equity. Now compute reported NAV per share and tangible NAV per share. Which side of 1.0 does price-to-tangible-book fall on?
2. Repeat exercise 1 for one pharma company and one bank. Tabulate revaluation percentage across all three. Explain in three sentences why the pharma company's figure is typically lower.
3. For your textile company, build a five-year table of revenue, inventory, and trade receivables. Index all three to 100 in the earliest year. Plot them. Do inventory and receivables grow faster than revenue? For how many consecutive years?
4. Find the borrowings note in the same annual report. Split total debt into: short-term bank borrowings, current portion of long-term loan, and long-term borrowings. Compute the short-term share. Compare it to the company's cash balance. How many days of cover is there?
5. Compute receivable days for three consecutive years. Then compute the bank rollover cycle from the borrowings note (usually 90, 120, or 180 days). Which is longer, and by how much?
6. Find a DSE company that performed a revaluation within eighteen months of a rights issue or IPO. Compute NAV per share immediately before and immediately after the revaluation. What was the issue price relative to each?
7. Take a company with goodwill on its balance sheet. Find the acquisition that created it. Compute goodwill as a percentage of total equity. Then read the impairment note — what discount rate and growth assumption is management using to justify no impairment?
8. Using the Python class in §11.11, set \`revaluation_reserve=0\` and re-run. Record the new reported NAV, tangible NAV, and both price-to-book ratios. Explain in two sentences what the difference between the two runs represents in economic terms.
9. Build the Excel sheet from §11.10 for five DSE companies in the same sector. Rank them by revaluation percentage of equity. Now rank them by price-to-tangible-book. Are the rankings the same? Where they differ, which company is genuinely cheap?`,
      bn: `১. যেকোনো ডিএসই-তালিকাভুক্ত বস্ত্র কোম্পানি বাছুন। এর সর্বশেষ বার্ষিক প্রতিবেদন থেকে মোট ইকুইটি ও পুনর্মূল্যায়ন সঞ্চিতি বের করুন। ইকুইটির শতাংশ হিসেবে পুনর্মূল্যায়ন গণনা করুন। এবার প্রতিবেদিত NAV per share ও ট্যানজিবল NAV per share গণনা করুন। Price-to-tangible-book ১.০-এর কোন পাশে পড়ে?
২. একটি ওষুধ কোম্পানি ও একটি ব্যাংকের জন্য অনুশীলনী ১ পুনরাবৃত্তি করুন। তিনটির পুনর্মূল্যায়ন শতাংশ সারণিবদ্ধ করুন। তিন বাক্যে ব্যাখ্যা করুন ওষুধ কোম্পানির সংখ্যাটি সাধারণত কেন কম।
৩. আপনার বস্ত্র কোম্পানির জন্য রাজস্ব, মজুদ ও বাণিজ্যিক প্রাপ্যের পাঁচ বছরের সারণি তৈরি করুন। প্রথম বছরে তিনটিকেই ১০০-তে সূচকায়িত করুন। প্লট করুন। মজুদ ও প্রাপ্য কি রাজস্বের চেয়ে দ্রুত বাড়ছে? টানা কত বছর?
৪. একই বার্ষিক প্রতিবেদনে ঋণ নোটটি খুঁজুন। মোট ঋণকে ভাগ করুন: স্বল্পমেয়াদি ব্যাংক ঋণ, দীর্ঘমেয়াদি ঋণের চলতি কিস্তি, এবং দীর্ঘমেয়াদি ঋণ। স্বল্পমেয়াদির অংশ গণনা করুন। কোম্পানির নগদ স্থিতির সঙ্গে তুলনা করুন। কত দিনের আচ্ছাদন আছে?
৫. টানা তিন বছরের receivable days গণনা করুন। এরপর ঋণ নোট থেকে ব্যাংকের রোলওভার চক্র বের করুন (সাধারণত ৯০, ১২০ বা ১৮০ দিন)। কোনটি দীর্ঘ, এবং কতটা?
৬. এমন একটি ডিএসই কোম্পানি খুঁজুন যে কোনো রাইট ইস্যু বা আইপিও-র আঠারো মাসের মধ্যে পুনর্মূল্যায়ন করেছে। পুনর্মূল্যায়নের ঠিক আগে ও ঠিক পরে NAV per share গণনা করুন। প্রতিটির তুলনায় ইস্যু মূল্য কত ছিল?
৭. স্থিতিপত্রে সুনাম আছে এমন একটি কোম্পানি নিন। যে অধিগ্রহণ এটি তৈরি করেছে তা খুঁজুন। মোট ইকুইটির শতাংশ হিসেবে সুনাম গণনা করুন। এরপর ক্ষয় নোটটি পড়ুন — ক্ষয় না দেখানোর যৌক্তিকতায় ব্যবস্থাপনা কোন ডিসকাউন্ট হার ও প্রবৃদ্ধি অনুমান ব্যবহার করছে?
৮. §১১.১১-এর Python ক্লাসে \`revaluation_reserve=0\` বসিয়ে পুনরায় চালান। নতুন প্রতিবেদিত NAV, ট্যানজিবল NAV এবং দুটি price-to-book অনুপাত নথিভুক্ত করুন। দুই বার চালানোর পার্থক্য অর্থনৈতিকভাবে কী প্রতিনিধিত্ব করে তা দুই বাক্যে ব্যাখ্যা করুন।
৯. একই খাতের পাঁচটি ডিএসই কোম্পানির জন্য §১১.১০-এর এক্সেল শিট তৈরি করুন। ইকুইটিতে পুনর্মূল্যায়নের শতাংশ অনুযায়ী সাজান। এবার price-to-tangible-book অনুযায়ী সাজান। ক্রম দুটি কি একই? যেখানে ভিন্ন, সেখানে কোন কোম্পানিটি সত্যিই সস্তা?`,
    },

    summary: {
      en: `- The balance sheet is a position at an instant, not a flow over a period. Its formal name under IAS 1 is the Statement of Financial Position.
- **Assets = Liabilities + Equity always holds, which is exactly why it proves nothing.** An overstated asset is offset by overstated equity. A fraudulent balance sheet balances perfectly.
- Equity is a residual, not a pool of money. If assets are overstated, equity is overstated taka for taka.
- The **current versus non-current** split is where risk lives. Total debt is not a risk measure; the maturity profile is.
- **Inventory** (IAS 2, lower of cost and NRV) and **trade receivables** (IFRS 9, expected credit loss) are both built on management estimates that flow straight to profit. Under-writing-down inventory and under-provisioning receivables are the two most common soft misstatements in Bangladeshi mid-caps.
- **Revaluation reserves are the DSE's structural distortion.** Under IAS 16 a company may revalue PPE — overwhelmingly land — with the uplift going to equity without passing through profit. The reserve is not distributable, generates no earnings, is an appraiser's opinion rather than a transaction, and usually sits under an operating factory where it cannot be realised. The FRC's interest in the practice signals that the regulator considers it live.
- **Goodwill** is the capitalised record of an overpayment, impairment-tested by the management that authorised it. Remove it, and all intangibles, to get tangible NAV.
- For Meghna Textile: reported NAV **BDT 51.67**, tangible NAV **BDT 19.58**. At BDT 28, price-to-book is **0.54×** and price-to-tangible-book is **1.43×**. The revaluation reserve is **54.84%** of equity. **62.1% of the reported book value did not survive two adjustments.**
- **70.87% of Meghna's debt matures within twelve months** against BDT 15 crore of cash, while receivables take **91.25 days** and the bank line renews in 90. That is not a value stock. It is a rollover accident waiting for a credit committee.
- NAV per share is quoted constantly in Bangladesh and is almost always used wrongly. It is a liquidation floor test, not a value signal — and for that test you must use tangible NAV.
- **Discipline established:** never state a price-to-book ratio for a Bangladeshi company without stating price-to-tangible-book in the same breath, and never state either without first reading the borrowings note. Book value tells you what an appraiser thought. The maturity profile tells you whether the company survives to find out.`,
      bn: `- স্থিতিপত্র একটি মুহূর্তের অবস্থান, কোনো সময়কালের প্রবাহ নয়। IAS 1 অনুযায়ী এর আনুষ্ঠানিক নাম আর্থিক অবস্থার বিবরণী।
- **সম্পদ = দায় + ইকুইটি সর্বদাই মেলে, আর ঠিক এ কারণেই এটি কিছুই প্রমাণ করে না।** বাড়িয়ে দেখানো সম্পদ বাড়িয়ে দেখানো ইকুইটি দিয়ে কাটা পড়ে। একটি জালিয়াতিপূর্ণ স্থিতিপত্রও নিখুঁতভাবে মেলে।
- ইকুইটি একটি অবশিষ্টাংশ, টাকার ভাণ্ডার নয়। সম্পদ বাড়িয়ে দেখানো হলে ইকুইটিও টাকায় টাকায় বাড়িয়ে দেখানো হয়।
- **চলতি বনাম অ-চলতি** বিভাজনেই ঝুঁকি বাস করে। মোট ঋণ ঝুঁকির পরিমাপ নয়; মেয়াদ-বিন্যাস।
- **মজুদ** (IAS 2, ব্যয় ও NRV-র মধ্যে কম) এবং **বাণিজ্যিক প্রাপ্য** (IFRS 9, প্রত্যাশিত ঋণ ক্ষতি) — দুটোই ব্যবস্থাপনার নিরূপণের ওপর গড়া, যা সরাসরি মুনাফায় যায়। মজুদ কম অবলোপন ও প্রাপ্যে কম সঞ্চিতি বাংলাদেশি মাঝারি কোম্পানির দুটি সবচেয়ে সাধারণ নরম মিথ্যাচার।
- **পুনর্মূল্যায়ন সঞ্চিতিই ডিএসই-র কাঠামোগত বিকৃতি।** IAS 16 অনুযায়ী কোম্পানি PPE — অপ্রতিরোধ্যভাবে জমি — পুনর্মূল্যায়ন করতে পারে, বৃদ্ধিটি মুনাফার মধ্য দিয়ে না গিয়ে সরাসরি ইকুইটিতে যায়। সঞ্চিতিটি বিতরণযোগ্য নয়, কোনো আয় তৈরি করে না, লেনদেন নয় বরং একজন মূল্যায়কের মতামত, এবং সাধারণত চালু কারখানার নিচে থাকে যেখানে এটি আদায় করা যায় না। এই চর্চায় FRC-র আগ্রহ ইঙ্গিত দেয় নিয়ন্ত্রক এটিকে জীবন্ত সমস্যা মনে করে।
- **সুনাম** হলো অতিরিক্ত মূল্য প্রদানের মূলধনীকৃত নথি, যার ক্ষয় পরীক্ষা করে সেই ব্যবস্থাপনাই যারা তা অনুমোদন করেছিল। ট্যানজিবল NAV পেতে এটি ও সব অস্পৃশ্য সম্পদ বাদ দিন।
- মেঘনা টেক্সটাইলের জন্য: প্রতিবেদিত NAV **৫১.৬৭ টাকা**, ট্যানজিবল NAV **১৯.৫৮ টাকা**। ২৮ টাকায় price-to-book **০.৫৪×** এবং price-to-tangible-book **১.৪৩×**। পুনর্মূল্যায়ন সঞ্চিতি ইকুইটির **৫৪.৮৪%**। **প্রতিবেদিত বুক ভ্যালুর ৬২.১% দুটি সমন্বয়ে টিকল না।**
- **মেঘনার ঋণের ৭০.৮৭% বারো মাসের মধ্যে পরিশোধযোগ্য**, বিপরীতে নগদ ১৫ কোটি টাকা, অথচ প্রাপ্য আদায়ে লাগে **৯১.২৫ দিন** আর ব্যাংকের সীমা নবায়ন হয় ৯০ দিনে। এটি মূল্য-শেয়ার নয়। এটি একটি ঋণ কমিটির অপেক্ষায় থাকা রোলওভার দুর্ঘটনা।
- বাংলাদেশে NAV per share অবিরাম উদ্ধৃত হয় এবং প্রায় সর্বদাই ভুলভাবে ব্যবহৃত হয়। এটি একটি অবসায়ন-মেঝে পরীক্ষা, মূল্যের সংকেত নয় — আর ঐ পরীক্ষার জন্য ট্যানজিবল NAV ব্যবহার করতেই হবে।
- **প্রতিষ্ঠিত শৃঙ্খলা:** কোনো বাংলাদেশি কোম্পানির price-to-book কখনো একই নিঃশ্বাসে price-to-tangible-book না বলে উচ্চারণ করবেন না, আর ঋণ নোট না পড়ে কোনোটিই উচ্চারণ করবেন না। বুক ভ্যালু বলে একজন মূল্যায়ক কী ভেবেছিলেন। মেয়াদ-বিন্যাস বলে কোম্পানিটি তা জানার জন্য বেঁচে থাকবে কি না।`,
    },
  },

  interview: [
    {
      q: {
        en: 'The accounting identity always balances. Why does that mean it provides no assurance about accuracy?',
        bn: 'হিসাববিজ্ঞানের সমীকরণ সর্বদাই মেলে। এর অর্থ কেন এই যে এটি নির্ভুলতা সম্পর্কে কোনো নিশ্চয়তা দেয় না?',
      },
      a: {
        en: 'Because the identity is enforced by double entry, not by verification. Every misstatement has an offsetting entry by construction. If a company fails to write down BDT 50 crore of obsolete inventory, the asset is overstated by 50 crore — but that inventory also never passed through cost of goods sold, so profit and therefore retained earnings are overstated by exactly the same 50 crore. Assets are too high, equity is too high, and the identity holds perfectly. Balance is a property of the bookkeeping mechanism. It tells you the entries are internally consistent; it tells you nothing about whether the underlying valuations are true, which is why the audit opinion and the notes matter far more than the fact that the totals agree.',
        bn: 'কারণ সমীকরণটি বলবৎ হয় দুতরফা দাখিলার মাধ্যমে, কোনো যাচাইয়ের মাধ্যমে নয়। প্রতিটি মিথ্যাচারের গঠনগতভাবেই একটি পাল্টা দাখিলা থাকে। কোম্পানি যদি ৫০ কোটি টাকার অপ্রচলিত মজুদ অবলোপন না করে, সম্পদ ৫০ কোটি বাড়িয়ে দেখানো হয় — কিন্তু ঐ মজুদ বিক্রীত পণ্যের ব্যয়েও কখনো যায়নি, তাই মুনাফা এবং সেই সূত্রে সংরক্ষিত মুনাফাও ঠিক ঐ ৫০ কোটিই বাড়িয়ে দেখানো হয়। সম্পদ বেশি, ইকুইটি বেশি, আর সমীকরণ নিখুঁতভাবে মেলে। মিলে যাওয়া হিসাবরক্ষণ কৌশলের একটি বৈশিষ্ট্য। এটি বলে দাখিলাগুলো অভ্যন্তরীণভাবে সঙ্গতিপূর্ণ; অন্তর্নিহিত মূল্যায়নগুলো সত্য কি না সে সম্পর্কে কিছুই বলে না — এ কারণেই মোট মিলে যাওয়ার চেয়ে নিরীক্ষা মতামত ও নোটগুলো অনেক বেশি গুরুত্বপূর্ণ।',
      },
    },
    {
      q: {
        en: 'A DSE textile company reports NAV per share of BDT 51.67 and trades at BDT 28. Walk me through why you would not call that cheap.',
        bn: 'একটি ডিএসই বস্ত্র কোম্পানি NAV per share ৫১.৬৭ টাকা প্রতিবেদন করে এবং ২৮ টাকায় লেনদেন হয়। ব্যাখ্যা করুন কেন আপনি একে সস্তা বলবেন না।',
      },
      a: {
        en: 'The first thing I would do is open the equity note and find the revaluation reserve. In this case it is BDT 340 crore against total equity of BDT 620 crore — 54.84% of book value is a revaluation reserve, almost certainly on land under the operating factory. I would also remove intangibles and goodwill of BDT 45 crore. That leaves tangible equity of BDT 235 crore, and on 12 crore shares, tangible NAV per share of BDT 19.58. At BDT 28 the share trades at 1.43 times tangible book, not 0.54 times reported book. It moved from a 46% discount to a 43% premium on one adjustment. The reserve is not distributable as dividend, generates no earnings, and cannot be realised without selling the factory site, so it is book value I cannot access as a shareholder. Separately I would look at the borrowings note, where 70.87% of debt matures inside twelve months against BDT 15 crore of cash — which makes this a funding question, not a valuation one.',
        bn: 'প্রথমেই আমি ইকুইটি নোট খুলে পুনর্মূল্যায়ন সঞ্চিতি বের করব। এক্ষেত্রে তা ৬২০ কোটি টাকা মোট ইকুইটির বিপরীতে ৩৪০ কোটি টাকা — বুক ভ্যালুর ৫৪.৮৪% পুনর্মূল্যায়ন সঞ্চিতি, প্রায় নিশ্চিতভাবেই চালু কারখানার নিচের জমির ওপর। আমি ৪৫ কোটি টাকার অস্পৃশ্য সম্পদ ও সুনামও বাদ দেব। তাতে ট্যানজিবল ইকুইটি দাঁড়ায় ২৩৫ কোটি টাকা, এবং ১২ কোটি শেয়ারে ট্যানজিবল NAV per share ১৯.৫৮ টাকা। ২৮ টাকায় শেয়ারটি ট্যানজিবল বুকের ১.৪৩ গুণে লেনদেন হচ্ছে, প্রতিবেদিত বুকের ০.৫৪ গুণে নয়। একটিমাত্র সমন্বয়ে এটি ৪৬% ছাড় থেকে ৪৩% প্রিমিয়ামে গেল। সঞ্চিতিটি লভ্যাংশ হিসেবে বিতরণযোগ্য নয়, কোনো আয় তৈরি করে না, এবং কারখানার জায়গা না বেচে আদায় করা যায় না — অর্থাৎ এটি এমন বুক ভ্যালু যা শেয়ারহোল্ডার হিসেবে আমি ছুঁতে পারি না। আলাদাভাবে আমি ঋণ নোট দেখব, যেখানে ঋণের ৭০.৮৭% বারো মাসের মধ্যে পরিশোধযোগ্য এবং নগদ মাত্র ১৫ কোটি টাকা — যা একে মূল্যায়নের নয়, অর্থায়নের প্রশ্ন বানিয়ে দেয়।',
      },
    },
    {
      q: {
        en: 'Explain rollover risk and why it can destroy a company that has done nothing wrong.',
        bn: 'রোলওভার ঝুঁকি ব্যাখ্যা করুন এবং কেন এটি এমন একটি কোম্পানিকে ধ্বংস করতে পারে যে কোনো ভুল করেনি।',
      },
      a: {
        en: 'Short-term bank borrowings on a Bangladeshi balance sheet are working capital lines renewed every ninety or one hundred eighty days. Management treats them as permanent finance because they have in fact been renewed continuously for years, and often the business is structurally dependent on them. But renewal is the bank\'s decision, not the company\'s. The bank can decline for reasons entirely internal to itself: Bangladesh Bank tightens liquidity, the bank\'s own deposit base weakens, the sector gets reclassified, provisioning requirements change. At that point a company with, say, BDT 450 crore due inside twelve months and BDT 15 crore of cash has to repay a facility it has treated as permanent. Its sales are unchanged, its factory runs, its customers still order — and it fails anyway. This is the same structural logic as Chapter 5, where a falling market forces a compliant bank to sell shares because capital sits in the denominator. The company\'s survival depends on its lender\'s balance sheet, which it neither controls nor observes.',
        bn: 'বাংলাদেশি স্থিতিপত্রে স্বল্পমেয়াদি ব্যাংক ঋণ হলো চলতি মূলধন সীমা, যা প্রতি নব্বই বা একশো আশি দিনে নবায়ন হয়। ব্যবস্থাপনা একে স্থায়ী অর্থায়ন গণ্য করে কারণ বাস্তবে এটি বছরের পর বছর একটানা নবায়িত হয়েছে, এবং প্রায়ই ব্যবসাটি কাঠামোগতভাবে এর ওপর নির্ভরশীল। কিন্তু নবায়ন ব্যাংকের সিদ্ধান্ত, কোম্পানির নয়। ব্যাংক সম্পূর্ণ নিজস্ব কারণে অস্বীকার করতে পারে: বাংলাদেশ ব্যাংক তারল্য কড়া করেছে, ব্যাংকের নিজস্ব আমানত ভিত্তি দুর্বল হয়েছে, খাতটি পুনঃশ্রেণিবদ্ধ হয়েছে, সঞ্চিতির প্রয়োজনীয়তা বদলেছে। তখন যে কোম্পানির ধরুন ৪৫০ কোটি টাকা বারো মাসের মধ্যে পরিশোধযোগ্য আর নগদ ১৫ কোটি, তাকে এমন একটি সুবিধা শোধ করতে হয় যাকে সে স্থায়ী ভেবেছিল। তার বিক্রি অপরিবর্তিত, কারখানা চলছে, ক্রেতারা এখনো অর্ডার দিচ্ছেন — তবু সে ব্যর্থ হয়। এটি অধ্যায় ৫-এর সেই একই কাঠামোগত যুক্তি, যেখানে পতনশীল বাজার একটি নিয়ম-মান্যকারী ব্যাংককে শেয়ার বেচতে বাধ্য করে কারণ হরে মূলধন বসে থাকে। কোম্পানির বেঁচে থাকা নির্ভর করে তার ঋণদাতার স্থিতিপত্রের ওপর, যা সে নিয়ন্ত্রণও করে না, দেখতেও পায় না।',
      },
    },
    {
      q: {
        en: 'How would you detect that a company is under-provisioning against trade receivables?',
        bn: 'একটি কোম্পানি বাণিজ্যিক প্রাপ্যের বিপরীতে কম সঞ্চিতি রাখছে তা আপনি কীভাবে শনাক্ত করবেন?',
      },
      a: {
        en: 'No single figure proves it, so I would triangulate. First, receivable days over several years — trade receivables divided by revenue times 365. If days are rising while revenue is flat or slowing, the company is either selling to weaker customers or extending terms to hold volume. Second, the ageing schedule in the receivables note, which discloses how much is over 90, 180, and 365 days past due. A large and growing bucket beyond a year against a small provision is the clearest evidence available. Third, the provision as a percentage of gross receivables, compared to sector peers and to the company\'s own history — a company whose overdue book grows while its provision rate falls is making a deliberate choice. Fourth, and most decisively, the cash flow statement: if receivables are rising sharply, operating cash flow should show a corresponding outflow. A company reporting strong profit with weak or negative operating cash flow driven by receivables is the pattern Chapter 12 is built around, and it is the strongest corroboration because cash is far harder to manipulate than an estimate.',
        bn: 'একক কোনো অঙ্ক এটি প্রমাণ করে না, তাই আমি একাধিক দিক থেকে মিলিয়ে দেখব। প্রথমত, কয়েক বছরের receivable days — বাণিজ্যিক প্রাপ্য ভাগ রাজস্ব গুণ ৩৬৫। রাজস্ব স্থির বা ধীর হওয়া সত্ত্বেও দিন বাড়তে থাকলে কোম্পানি হয় দুর্বল ক্রেতার কাছে বেচছে, নয়তো পরিমাণ ধরে রাখতে শর্ত শিথিল করছে। দ্বিতীয়ত, প্রাপ্য নোটের বয়স-বিন্যাস তালিকা, যা প্রকাশ করে কতটা ৯০, ১৮০ ও ৩৬৫ দিনের বেশি বকেয়া। ছোট সঞ্চিতির বিপরীতে এক বছরের বেশি বকেয়ার বড় ও ক্রমবর্ধমান স্তর সবচেয়ে স্পষ্ট প্রমাণ। তৃতীয়ত, মোট প্রাপ্যের শতাংশ হিসেবে সঞ্চিতি, খাতের সমকক্ষ ও কোম্পানির নিজস্ব ইতিহাসের সঙ্গে তুলনা করে — যে কোম্পানির বকেয়া বই বাড়ছে অথচ সঞ্চিতির হার কমছে, সে সচেতন সিদ্ধান্ত নিচ্ছে। চতুর্থত, এবং সবচেয়ে নির্ণায়কভাবে, নগদ প্রবাহ বিবরণী: প্রাপ্য দ্রুত বাড়লে পরিচালন নগদ প্রবাহে সংশ্লিষ্ট বহিঃপ্রবাহ দেখাতেই হবে। প্রাপ্য-চালিত দুর্বল বা ঋণাত্মক পরিচালন নগদ প্রবাহসহ শক্তিশালী মুনাফা প্রতিবেদন করা কোম্পানি — এটিই সেই ধরন যার ওপর অধ্যায় ১২ গড়া, এবং এটিই সবচেয়ে শক্ত সমর্থন কারণ নিরূপণের চেয়ে নগদে কারসাজি করা অনেক কঠিন।',
      },
    },
    {
      q: {
        en: 'Why do revaluation-heavy companies show poor return on equity, and does that make them bad businesses?',
        bn: 'পুনর্মূল্যায়ন-ভারী কোম্পানিগুলো কেন দুর্বল return on equity দেখায়, এবং তাতে কি তারা খারাপ ব্যবসা হয়ে যায়?',
      },
      a: {
        en: 'Mechanically, ROE is net profit over shareholders\' equity. A revaluation reserve adds to the denominator without adding anything to the numerator, because land generates no earnings and the uplift never passes through profit. So a company that revalues BDT 340 crore of land onto a BDT 280 crore equity base more than doubles its denominator and roughly halves its reported ROE overnight, with operations completely unchanged. That is an artefact of accounting policy, not deterioration. The correct response is to compute ROE on tangible equity as well, which strips the reserve out and shows the return the operating business is actually generating on capital that was genuinely contributed or earned. Having said that, it does not make the company good either. Two things remain true: the revalued land is real, so in a liquidation it has value, but it is unproductive capital tied up in an asset that cannot be sold without closing the factory. A business carrying a large unproductive asset base has a structurally lower ceiling on returns, and that is a genuine economic fact rather than an accounting one.',
        bn: 'যান্ত্রিকভাবে ROE হলো নিট মুনাফা ভাগ শেয়ারহোল্ডার ইকুইটি। পুনর্মূল্যায়ন সঞ্চিতি হরে যোগ হয় কিন্তু লবে কিছুই যোগ করে না, কারণ জমি কোনো আয় তৈরি করে না এবং বৃদ্ধিটি কখনো মুনাফার মধ্য দিয়ে যায় না। তাই যে কোম্পানি ২৮০ কোটি টাকার ইকুইটি ভিত্তিতে ৩৪০ কোটি টাকার জমি পুনর্মূল্যায়ন করে, তার হর দ্বিগুণেরও বেশি হয় এবং প্রতিবেদিত ROE রাতারাতি প্রায় অর্ধেক হয়ে যায়, অথচ পরিচালন সম্পূর্ণ অপরিবর্তিত। এটি হিসাবনীতির উপজাত, অবনতি নয়। সঠিক প্রতিক্রিয়া হলো ট্যানজিবল ইকুইটির ওপরও ROE গণনা করা, যা সঞ্চিতিটি বাদ দিয়ে দেখায় প্রকৃতপক্ষে প্রদত্ত বা অর্জিত মূলধনের ওপর পরিচালন ব্যবসাটি কী রিটার্ন তৈরি করছে। তবে এতে কোম্পানিটি ভালোও হয়ে যায় না। দুটি বিষয় সত্য থাকে: পুনর্মূল্যায়িত জমি বাস্তব, তাই অবসায়নে এর মূল্য আছে, কিন্তু এটি এমন একটি সম্পদে আটকে থাকা অনুৎপাদনশীল মূলধন যা কারখানা বন্ধ না করে বেচা যায় না। বড় অনুৎপাদনশীল সম্পদ ভিত্তি বহনকারী ব্যবসার রিটার্নের সিলিং কাঠামোগতভাবেই নিচু, আর এটি হিসাবগত নয়, প্রকৃত অর্থনৈতিক সত্য।',
      },
    },
    {
      q: {
        en: 'A company\'s current ratio is 1.05. Is that adequate? What would change your answer?',
        bn: 'একটি কোম্পানির চলতি অনুপাত ১.০৫। এটি কি যথেষ্ট? কী আপনার উত্তর বদলে দেবে?',
      },
      a: {
        en: 'On its own the number is nearly uninformative, and 1.05 is thin by any standard. What changes the answer is the composition of the current assets. If BDT 630 crore of current assets is BDT 15 crore cash, BDT 310 crore inventory, and BDT 265 crore receivables, then 97.6% of the supposed liquidity is management\'s estimate of what cloth is worth and what customers will pay. The ratio is computed entirely from judgements. A ratio of 1.05 where 40% of current assets is cash and short-term deposits is a materially different position. Beyond composition I would look at three things: receivable days versus the bank\'s rollover cycle, because if collection takes 91 days and the line renews in 90 there is no timing cushion at all; inventory turnover and whether inventory is growing faster than revenue; and the concentration of current liabilities, because BDT 420 crore of bank borrowing with one lender is a single point of failure in a way that BDT 420 crore of trade payables spread across a hundred suppliers is not.',
        bn: 'নিজে থেকে সংখ্যাটি প্রায় তথ্যহীন, আর ১.০৫ যেকোনো মানদণ্ডেই পাতলা। উত্তর বদলে দেয় চলতি সম্পদের গঠন। ৬৩০ কোটি টাকার চলতি সম্পদ যদি ১৫ কোটি নগদ, ৩১০ কোটি মজুদ ও ২৬৫ কোটি প্রাপ্য হয়, তবে তথাকথিত তারল্যের ৯৭.৬% হলো কাপড়ের মূল্য কত এবং ক্রেতারা কত দেবেন সে সম্পর্কে ব্যবস্থাপনার নিরূপণ। অনুপাতটি সম্পূর্ণভাবে বিচারের ভিত্তিতে গণিত। যে ১.০৫ অনুপাতে চলতি সম্পদের ৪০% নগদ ও স্বল্পমেয়াদি আমানত, তা উল্লেখযোগ্যভাবে ভিন্ন অবস্থান। গঠনের বাইরে আমি তিনটি জিনিস দেখব: ব্যাংকের রোলওভার চক্রের বিপরীতে receivable days, কারণ আদায়ে ৯১ দিন লাগলে আর সীমা ৯০ দিনে নবায়ন হলে কোনো সময়গত আচ্ছাদনই নেই; মজুদের আবর্তন এবং মজুদ রাজস্বের চেয়ে দ্রুত বাড়ছে কি না; এবং চলতি দায়ের কেন্দ্রীভবন, কারণ একজন ঋণদাতার কাছে ৪২০ কোটি টাকার ব্যাংক ঋণ যেভাবে একটিমাত্র ব্যর্থতার বিন্দু, একশো সরবরাহকারীর মধ্যে ছড়ানো ৪২০ কোটি টাকার বাণিজ্যিক প্রদেয় সেভাবে নয়।',
      },
    },
  ],

  quiz: [
    {
      q: {
        en: 'The accounting identity Assets = Liabilities + Equity always balances. This proves:',
        bn: 'সম্পদ = দায় + ইকুইটি সমীকরণটি সর্বদাই মেলে। এটি প্রমাণ করে:',
      },
      options: {
        en: [
          'The financial statements are accurate',
          'Nothing about accuracy — it is a bookkeeping constraint',
          'The auditor has issued a clean opinion',
          'The company is solvent',
        ],
        bn: [
          'আর্থিক বিবরণী নির্ভুল',
          'নির্ভুলতা সম্পর্কে কিছুই নয় — এটি একটি হিসাবরক্ষণগত বাধ্যবাধকতা',
          'নিরীক্ষক নিষ্কলুষ মতামত দিয়েছেন',
          'কোম্পানিটি সচ্ছল',
        ],
      },
      answer: 1,
    },
    {
      q: {
        en: 'Equity BDT 620 cr, revaluation reserve BDT 340 cr, intangibles BDT 45 cr, shares 12 cr. Tangible NAV per share is:',
        bn: 'ইকুইটি ৬২০ কোটি, পুনর্মূল্যায়ন সঞ্চিতি ৩৪০ কোটি, অস্পৃশ্য সম্পদ ৪৫ কোটি, শেয়ার ১২ কোটি। ট্যানজিবল NAV per share:',
      },
      options: {
        en: ['BDT 51.67', 'BDT 23.33', 'BDT 19.58', 'BDT 28.00'],
        bn: ['৫১.৬৭ টাকা', '২৩.৩৩ টাকা', '১৯.৫৮ টাকা', '২৮.০০ টাকা'],
      },
      answer: 2,
    },
    {
      q: {
        en: 'Under IAS 16, an upward revaluation of land is credited to:',
        bn: 'IAS 16 অনুযায়ী জমির ঊর্ধ্বমুখী পুনর্মূল্যায়ন জমা হয়:',
      },
      options: {
        en: [
          'Profit or loss for the year',
          'A revaluation reserve within equity',
          'Retained earnings, as a distributable profit',
          'Deferred revenue',
        ],
        bn: [
          'বছরের লাভ-ক্ষতিতে',
          'ইকুইটির ভেতরে একটি পুনর্মূল্যায়ন সঞ্চিতিতে',
          'সংরক্ষিত মুনাফায়, বিতরণযোগ্য মুনাফা হিসেবে',
          'বিলম্বিত রাজস্বে',
        ],
      },
      answer: 1,
    },
    {
      q: {
        en: 'Trade receivables BDT 265 cr on revenue of BDT 1,060 cr gives receivable days of:',
        bn: '১,০৬০ কোটি টাকা রাজস্বে ২৬৫ কোটি টাকা বাণিজ্যিক প্রাপ্য মানে receivable days:',
      },
      options: {
        en: ['25.0 days', '45.6 days', '91.25 days', '146.0 days'],
        bn: ['২৫.০ দিন', '৪৫.৬ দিন', '৯১.২৫ দিন', '১৪৬.০ দিন'],
      },
      answer: 2,
    },
    {
      q: {
        en: 'A revaluation reserve is dangerous for the investor mainly because it:',
        bn: 'পুনর্মূল্যায়ন সঞ্চিতি বিনিয়োগকারীর জন্য প্রধানত বিপজ্জনক কারণ এটি:',
      },
      options: {
        en: [
          'Reduces reported profit',
          'Inflates NAV without being distributable or earning anything',
          'Increases the tax charge',
          'Must be repaid to the bank',
        ],
        bn: [
          'প্রতিবেদিত মুনাফা কমায়',
          'বিতরণযোগ্য না হয়ে বা কিছু আয় না করে NAV স্ফীত করে',
          'কর দায় বাড়ায়',
          'ব্যাংককে ফেরত দিতে হয়',
        ],
      },
      answer: 1,
    },
    {
      q: {
        en: 'Short-term borrowings 420, current portion of long-term loan 30, long-term borrowings 185. Short-term share of total debt is:',
        bn: 'স্বল্পমেয়াদি ঋণ ৪২০, দীর্ঘমেয়াদির চলতি কিস্তি ৩০, দীর্ঘমেয়াদি ঋণ ১৮৫। মোট ঋণে স্বল্পমেয়াদির অংশ:',
      },
      options: {
        en: ['29.13%', '66.14%', '70.87%', '77.19%'],
        bn: ['২৯.১৩%', '৬৬.১৪%', '৭০.৮৭%', '৭৭.১৯%'],
      },
      answer: 2,
    },
    {
      q: {
        en: 'Goodwill on a balance sheet represents:',
        bn: 'স্থিতিপত্রে সুনাম প্রতিনিধিত্ব করে:',
      },
      options: {
        en: [
          'The brand value the company built organically',
          'The excess paid in an acquisition over the fair value of net assets acquired',
          'Cash set aside for future acquisitions',
          'The revaluation surplus on intangible assets',
        ],
        bn: [
          'কোম্পানির স্বাভাবিকভাবে গড়া ব্র্যান্ড মূল্য',
          'অধিগ্রহণে অর্জিত নিট সম্পদের ন্যায্য মূল্যের চেয়ে অতিরিক্ত প্রদত্ত মূল্য',
          'ভবিষ্যৎ অধিগ্রহণের জন্য রাখা নগদ',
          'অস্পৃশ্য সম্পদের পুনর্মূল্যায়ন উদ্বৃত্ত',
        ],
      },
      answer: 1,
    },
    {
      q: {
        en: 'Inventory is measured under IAS 2 at:',
        bn: 'IAS 2 অনুযায়ী মজুদ পরিমাপ করা হয়:',
      },
      options: {
        en: [
          'Selling price less a standard margin',
          'The lower of cost and net realisable value',
          'Fair value at the reporting date',
          'Replacement cost',
        ],
        bn: [
          'বিক্রয়মূল্য বাদ একটি আদর্শ মার্জিন',
          'ব্যয় ও নিট আদায়যোগ্য মূল্যের মধ্যে যেটি কম',
          'প্রতিবেদন তারিখে ন্যায্য মূল্য',
          'প্রতিস্থাপন ব্যয়',
        ],
      },
      answer: 1,
    },
    {
      q: {
        en: 'A current ratio of 1.05 where cash is only 2.4% of current assets tells you:',
        bn: '১.০৫ চলতি অনুপাত যেখানে নগদ চলতি সম্পদের মাত্র ২.৪%, তা বোঝায়:',
      },
      options: {
        en: [
          'Liquidity is adequate because the ratio exceeds 1',
          'Liquidity depends almost entirely on collecting receivables and selling inventory at book value',
          'The company has no debt',
          'The current ratio cannot be computed',
        ],
        bn: [
          'তারল্য যথেষ্ট কারণ অনুপাত ১-এর বেশি',
          'তারল্য প্রায় সম্পূর্ণভাবে প্রাপ্য আদায় ও বুক মূল্যে মজুদ বিক্রির ওপর নির্ভরশীল',
          'কোম্পানির কোনো ঋণ নেই',
          'চলতি অনুপাত গণনা করা যায় না',
        ],
      },
      answer: 1,
    },
    {
      q: {
        en: 'At BDT 28, a share with reported NAV BDT 51.67 and tangible NAV BDT 19.58 is best described as:',
        bn: '২৮ টাকায়, প্রতিবেদিত NAV ৫১.৬৭ টাকা ও ট্যানজিবল NAV ১৯.৫৮ টাকার শেয়ারকে সবচেয়ে ভালোভাবে বর্ণনা করা যায়:',
      },
      options: {
        en: [
          'Trading at a 46% discount to book — clearly cheap',
          'Trading at a 43% premium to tangible book — not cheap',
          'Trading exactly at fair value',
          'Impossible to assess without the P/E ratio',
        ],
        bn: [
          'বুকের ৪৬% ছাড়ে লেনদেন হচ্ছে — স্পষ্টতই সস্তা',
          'ট্যানজিবল বুকের ৪৩% প্রিমিয়ামে লেনদেন হচ্ছে — সস্তা নয়',
          'ঠিক ন্যায্য মূল্যে লেনদেন হচ্ছে',
          'P/E অনুপাত ছাড়া মূল্যায়ন অসম্ভব',
        ],
      },
      answer: 1,
    },
  ],
};
