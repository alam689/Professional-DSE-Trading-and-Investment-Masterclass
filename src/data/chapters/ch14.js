/**
 * Chapter 14 — Liquidity Ratios
 * Part II, Fundamental Analysis.
 * Chapter 13 asked whether the profit was real. This chapter asks whether
 * the company survives the next twelve months.
 */

export default {
  n: 14,
  tools: [],

  excelSheet: {
    filename: 'ch14-liquidity-dashboard.xlsx',
    sheetName: 'Liquidity Dashboard',
    cells: [
      { cell: 'A1', v: 'LIQUIDITY DASHBOARD — Company T (BDT crore)' },

      { cell: 'A3', v: 'CURRENT ASSETS' },
      { cell: 'A4', v: 'Cash & Cash Equivalents' }, { cell: 'B4', v: 6 },
      { cell: 'A5', v: 'Short-term Investments' }, { cell: 'B5', v: 4 },
      { cell: 'A6', v: 'Trade Receivables' }, { cell: 'B6', v: 118 },
      { cell: 'A7', v: 'Inventory' }, { cell: 'B7', v: 95 },
      { cell: 'A8', v: 'Advances, Deposits & Prepayments' }, { cell: 'B8', v: 25 },
      { cell: 'A9', v: 'TOTAL CURRENT ASSETS' }, { cell: 'B9', f: 'SUM(B4:B8)' },

      { cell: 'A11', v: 'CURRENT LIABILITIES' },
      { cell: 'A12', v: 'Short-term Bank Loans' }, { cell: 'B12', v: 55 },
      { cell: 'A13', v: 'Current Portion of Long-term Debt' }, { cell: 'B13', v: 15 },
      { cell: 'A14', v: 'Trade Payables' }, { cell: 'B14', v: 42 },
      { cell: 'A15', v: 'Accrued Expenses & Other' }, { cell: 'B15', v: 6 },
      { cell: 'A16', v: 'TOTAL CURRENT LIABILITIES' }, { cell: 'B16', f: 'SUM(B12:B15)' },

      { cell: 'A18', v: 'HEADLINE RATIOS' },
      { cell: 'A19', v: 'Working Capital' }, { cell: 'B19', f: 'B9-B16' },
      { cell: 'A20', v: 'Current Ratio' }, { cell: 'B20', f: 'B9/B16' },
      { cell: 'A21', v: 'Quick Ratio' }, { cell: 'B21', f: '(B9-B7-B8)/B16' },
      { cell: 'A22', v: 'Cash Ratio' }, { cell: 'B22', f: '(B4+B5)/B16' },

      { cell: 'A24', v: 'FLOW DATA' },
      { cell: 'A25', v: 'Revenue' }, { cell: 'B25', v: 420 },
      { cell: 'A26', v: 'Cost of Goods Sold' }, { cell: 'B26', v: 340 },
      { cell: 'A27', v: 'Operating Expenses' }, { cell: 'B27', v: 46 },
      { cell: 'A28', v: 'Depreciation (non-cash)' }, { cell: 'B28', v: 24 },
      { cell: 'A29', v: 'Receivables (prior year)' }, { cell: 'B29', v: 96 },
      { cell: 'A30', v: 'Inventory (prior year)' }, { cell: 'B30', v: 82 },
      { cell: 'A31', v: 'Payables (prior year)' }, { cell: 'B31', v: 38 },

      { cell: 'A33', v: 'CASH CONVERSION CYCLE' },
      { cell: 'A34', v: 'DSO (days)' }, { cell: 'B34', f: '((B6+B29)/2)/B25*365' },
      { cell: 'A35', v: 'DIO (days)' }, { cell: 'B35', f: '((B7+B30)/2)/B26*365' },
      { cell: 'A36', v: 'DPO (days)' }, { cell: 'B36', f: '((B14+B31)/2)/B26*365' },
      { cell: 'A37', v: 'CASH CONVERSION CYCLE' }, { cell: 'B37', f: 'B34+B35-B36' },

      { cell: 'A39', v: 'DEFENSIVE INTERVAL' },
      { cell: 'A40', v: 'Daily Cash Operating Expenditure' }, { cell: 'B40', f: '(B26+B27-B28)/365' },
      { cell: 'A41', v: 'Defensive Interval (days)' }, { cell: 'B41', f: '(B4+B5+B6)/B40' },

      { cell: 'A43', v: 'HAIRCUTS FROM THE NOTES' },
      { cell: 'A44', v: 'Receivables aged over 180 days' }, { cell: 'B44', v: 46 },
      { cell: 'A45', v: 'Inventory aged over 12 months' }, { cell: 'B45', v: 38 },
      { cell: 'A46', v: 'Deposits not realisable within 12m' }, { cell: 'B46', v: 15 },
      { cell: 'A47', v: 'Unlisted related-party placement' }, { cell: 'B47', v: 4 },
      { cell: 'A48', v: 'LC / acceptance obligations due < 12m' }, { cell: 'B48', v: 22 },

      { cell: 'A50', v: 'ADJUSTED POSITION' },
      { cell: 'A51', v: 'Adjusted Current Assets' }, { cell: 'B51', f: 'B9-B44-B45-B46-B47' },
      { cell: 'A52', v: 'Adjusted Current Liabilities' }, { cell: 'B52', f: 'B16+B48' },
      { cell: 'A53', v: 'ADJUSTED CURRENT RATIO' }, { cell: 'B53', f: 'B51/B52' },
      { cell: 'A54', v: 'Adjusted Quick Ratio' }, { cell: 'B54', f: '(B51-(B7-B45))/B52' },
      { cell: 'A55', v: 'Adjusted Defensive Interval (days)' }, { cell: 'B55', f: '(B4+(B5-B47)+(B6-B44))/B40' },

      { cell: 'A57', v: 'ROLLOVER EXPOSURE' },
      { cell: 'A58', v: 'Debt Maturing within 12 Months' }, { cell: 'B58', f: 'B12+B13' },
      { cell: 'A59', v: 'Cash Cover of that Debt (%)' }, { cell: 'B59', f: 'B4/B58*100' },

      { cell: 'A61', v: 'VERDICT' },
      {
        cell: 'B61',
        f: 'IF(AND(B53>=1.5,B22>=0.2),"STRONG",IF(B53>=1,"ROLLOVER-DEPENDENT","FRAGILE"))',
      },

      { cell: 'A63', v: 'NOTE' },
      { cell: 'B63', v: 'B20 says 2.10. B53 says 1.04. The gap is the whole chapter.' },
    ],
  },

  objectives: {
    en: [
      'Compute the current, quick and cash ratios and state precisely what each one excludes and why.',
      'Explain why the current ratio systematically flatters companies carrying slow inventory and stale receivables.',
      'Compute DSO, DIO, DPO and the cash conversion cycle, and read the cycle as a financing requirement in taka.',
      'Strip a reported current ratio down to a defensible adjusted ratio using the ageing and contingency notes.',
      'Quantify short-term debt rollover risk and explain why Chapter 5 makes it the dominant liquidity risk on the DSE.',
    ],
    bn: [
      'চলতি, ত্বরিত ও নগদ অনুপাত গণনা করা এবং প্রতিটি ঠিক কী বাদ দেয় ও কেন তা বলা।',
      'ধীরগতির মজুদ ও বাসি প্রাপ্য বহনকারী কোম্পানিকে চলতি অনুপাত কেন ব্যবস্থাগতভাবে সুন্দর দেখায় তা ব্যাখ্যা করা।',
      'DSO, DIO, DPO ও নগদ রূপান্তর চক্র গণনা করা, এবং চক্রটিকে টাকার অঙ্কে একটি অর্থায়ন প্রয়োজন হিসেবে পড়া।',
      'বয়সভিত্তিক ও সম্ভাব্য-দায় নোট ব্যবহার করে রিপোর্টকৃত চলতি অনুপাতকে একটি সমর্থনযোগ্য সমন্বিত অনুপাতে নামিয়ে আনা।',
      'স্বল্পমেয়াদি ঋণের নবায়ন ঝুঁকি পরিমাপ করা এবং অধ্যায় ৫ কেন একে ডিএসই-র প্রধান তারল্য ঝুঁকি বানায় তা ব্যাখ্যা করা।',
    ],
  },

  blocks: {
    theory: {
      en: `Chapter 13 asked whether reported profit was real. This chapter asks a different and more urgent question: **can the company pay what it owes in the next twelve months?**

A profitable company can go bankrupt. It happens constantly, and it happens for one reason — profit is measured over a period, obligations fall due on a date. A textile mill with BDT 60 crore of annual profit and BDT 6 crore of cash cannot pay a BDT 40 crore loan maturing in March with a profit that will arrive across the year.

### The three ratios, in descending order of generosity

**Current ratio** — the broadest:

$$\\text{Current Ratio} = \\frac{\\text{Current Assets}}{\\text{Current Liabilities}}$$

Everything classified as current, over everything owed within a year. Textbooks say 2.0 is comfortable. **On the DSE that number is close to meaningless, for a specific reason developed below.**

**Quick ratio (acid test)** — removes inventory and prepayments:

$$\\text{Quick Ratio} = \\frac{\\text{Current Assets} - \\text{Inventory} - \\text{Prepayments}}{\\text{Current Liabilities}}$$

The logic is that inventory must first be sold, then collected — two steps, both uncertain. Prepayments cannot be turned into cash at all; they are a right to receive a service.

**Cash ratio** — the most severe:

$$\\text{Cash Ratio} = \\frac{\\text{Cash} + \\text{Marketable Securities}}{\\text{Current Liabilities}}$$

What can be paid this week without persuading anybody. Almost every listed Bangladeshi manufacturer will look terrible on this measure, and that is the point: it establishes how completely the business depends on collections and credit continuing to function.

**Working capital** is the same information in taka rather than as a ratio:

$$\\text{Working Capital} = \\text{Current Assets} - \\text{Current Liabilities}$$

A ratio of 2.0 on a small base and a ratio of 2.0 on a large base are not the same problem. Compute both.

### Why the current ratio flatters

**Current assets are not a homogeneous pool.** They are ranked by how close they are to being cash, and the current ratio treats a taka of cash and a taka of 400-day-old greige fabric as identical. They are not.

Three specific distortions matter on the DSE:

**1. Slow-moving inventory inflates the numerator permanently.** A textile mill that cannot sell its yarn does not write it down — Chapter 13 established that failing to write down impaired inventory is itself a profit lever. That unsold, unwritten-down stock sits in current assets year after year, holding the current ratio up. **The worse the business gets, the better the current ratio looks**, because unsold goods accumulate. This inversion is not a subtlety. It is the single most important thing in this chapter.

**2. Stale receivables do the same.** Receivables aged over 180 days in a market where the customer is a distressed buyer are not assets in any economic sense. They are recorded at full value until an auditor forces a provision. Chapter 13's receivable-growth test and this chapter's liquidity test are looking at the same balance from two directions.

**3. Advances, deposits and prepayments are a mixed bag.** A Bangladeshi manufacturer's "advances, deposits and prepayments" line routinely contains long-term security deposits with utilities, landlords and government bodies that will not be realised in twelve months and often will not be realised at all. They are current only by classification convention.

**The result is arithmetically predictable.** A deteriorating company accumulates unsellable inventory and uncollectible receivables, both of which are current assets, and its current ratio rises. **A rising current ratio in a company with falling revenue is a warning, not a reassurance.**

### The cash conversion cycle

The ratios are photographs. The cycle is the film.

$$CCC = DSO + DIO - DPO$$

- **DSO** — days sales outstanding. How long from sale to cash.
- **DIO** — days inventory outstanding. How long stock sits before it is sold.
- **DPO** — days payables outstanding. How long the company takes to pay its own suppliers.

DSO plus DIO is the operating cycle: the time from buying raw material to receiving cash. DPO is the free financing suppliers provide. **The difference is the number of days the company must fund out of its own pocket or a bank's.**

Convert it to taka and it stops being an abstraction:

$$\\text{Working Capital Requirement} \\approx \\frac{CCC}{365} \\times \\text{Annual Operating Cost}$$

A 145-day cycle on BDT 386 crore of annual cash operating cost is roughly BDT 153 crore of permanent financing need. That is not a ratio. That is a loan the company must keep alive, forever, or shrink.

### Rollover risk — where Bangladesh differs

Here is where this chapter connects to Part I.

Most DSE-listed manufacturers fund their cash conversion cycle with short-term bank facilities: cash credit, overdraft, LTR, packing credit. These are typically 90 to 180 day instruments **rolled over continuously**. On the balance sheet they appear as current liabilities. In practice everybody — company, bank, analyst — assumes they will be renewed.

**That assumption is the risk.**

Chapter 5 established that credit in this market can withdraw suddenly and for reasons unrelated to the borrower: a bank's own capital-market exposure ratio breaching its 25% cap, a Bangladesh Bank tightening cycle, a sector-wide classification review, or simply a change in the bank's own liquidity. When the roll stops, a facility that has been renewed for eleven consecutive years becomes due in full, in cash, on a date.

**Read this precisely.** A company whose adjusted current ratio is 1.04 is not solvent because its assets exceed its liabilities. It is solvent because a credit committee has not yet said no. **That is not a balance sheet fact. It is a relationship.**

The defensive interval measures how long that relationship can fail before operations stop:

$$\\text{Defensive Interval} = \\frac{\\text{Cash} + \\text{Marketable Securities} + \\text{Receivables}}{\\text{Daily Cash Operating Expenditure}}$$

Expressed in days. It is the only liquidity measure in this chapter that answers the question an investor actually cares about: **how long does this company have?**`,
      bn: `অধ্যায় ১৩ জিজ্ঞেস করেছিল রিপোর্টকৃত মুনাফা বাস্তব কি না। এই অধ্যায় ভিন্ন ও আরও জরুরি প্রশ্ন করে: **কোম্পানিটি কি আগামী বারো মাসে তার দেনা শোধ করতে পারবে?**

একটি লাভজনক কোম্পানি দেউলিয়া হতে পারে। এটি নিয়ত ঘটে, এবং একটি কারণেই ঘটে — মুনাফা মাপা হয় একটি সময়কাল জুড়ে, দায় পরিশোধযোগ্য হয় একটি তারিখে। বছরে ৬০ কোটি টাকা মুনাফা ও ৬ কোটি টাকা নগদসহ একটি বস্ত্রকল মার্চে পরিশোধযোগ্য ৪০ কোটি টাকার ঋণ এমন মুনাফা দিয়ে শোধ করতে পারে না যা সারা বছর ধরে আসবে।

### তিনটি অনুপাত, উদারতার অবরোহী ক্রমে

**চলতি অনুপাত** — সবচেয়ে বিস্তৃত:

$$\\text{চলতি অনুপাত} = \\frac{\\text{চলতি সম্পদ}}{\\text{চলতি দায়}}$$

চলতি হিসেবে শ্রেণীবদ্ধ সবকিছু, এক বছরের মধ্যে দেয় সবকিছুর ওপর। পাঠ্যবই বলে ২.০ স্বস্তিদায়ক। **ডিএসই-তে ঐ সংখ্যাটি প্রায় অর্থহীন, এবং তার একটি সুনির্দিষ্ট কারণ নিচে ব্যাখ্যা করা হয়েছে।**

**ত্বরিত অনুপাত (অ্যাসিড টেস্ট)** — মজুদ ও অগ্রিম পরিশোধ বাদ দেয়:

$$\\text{ত্বরিত অনুপাত} = \\frac{\\text{চলতি সম্পদ} - \\text{মজুদ} - \\text{অগ্রিম পরিশোধ}}{\\text{চলতি দায়}}$$

যুক্তিটি হলো মজুদকে আগে বিক্রি করতে হয়, তারপর আদায় করতে হয় — দুটি ধাপ, দুটোই অনিশ্চিত। অগ্রিম পরিশোধকে আদৌ নগদে রূপান্তর করা যায় না; সেটি একটি সেবা পাওয়ার অধিকার মাত্র।

**নগদ অনুপাত** — সবচেয়ে কঠোর:

$$\\text{নগদ অনুপাত} = \\frac{\\text{নগদ} + \\text{বাজারযোগ্য সিকিউরিটিজ}}{\\text{চলতি দায়}}$$

কাউকে রাজি না করিয়ে এ সপ্তাহেই যা শোধ করা যায়। প্রায় প্রতিটি তালিকাভুক্ত বাংলাদেশি প্রস্তুতকারককেই এই পরিমাপে ভয়ানক দেখাবে, এবং সেটিই মূল কথা: এটি প্রতিষ্ঠা করে যে ব্যবসাটি আদায় ও ঋণ চালু থাকার ওপর কতটা সম্পূর্ণভাবে নির্ভরশীল।

**কার্যকরী মূলধন** একই তথ্য, অনুপাত নয় বরং টাকার অঙ্কে:

$$\\text{কার্যকরী মূলধন} = \\text{চলতি সম্পদ} - \\text{চলতি দায়}$$

ছোট ভিত্তির ওপর ২.০ অনুপাত আর বড় ভিত্তির ওপর ২.০ অনুপাত একই সমস্যা নয়। দুটিই গণনা করুন।

### চলতি অনুপাত কেন সুন্দর দেখায়

**চলতি সম্পদ কোনো সমসত্ত্ব পুকুর নয়।** এগুলো নগদ হওয়ার নৈকট্য অনুযায়ী ক্রমবদ্ধ, আর চলতি অনুপাত এক টাকা নগদ ও ৪০০ দিনের পুরোনো গ্রে ফ্যাব্রিকের এক টাকাকে অভিন্ন গণ্য করে। এরা অভিন্ন নয়।

ডিএসই-তে তিনটি নির্দিষ্ট বিকৃতি গুরুত্বপূর্ণ:

**১. ধীরগতির মজুদ লবকে স্থায়ীভাবে স্ফীত করে।** যে বস্ত্রকল তার সুতা বিক্রি করতে পারে না সে তা অবলোপন করে না — অধ্যায় ১৩ প্রতিষ্ঠা করেছে ক্ষয়প্রাপ্ত মজুদের অবলোপন না করা নিজেই একটি মুনাফা-কৌশল। ঐ অবিক্রীত, অ-অবলোপিত মজুদ বছরের পর বছর চলতি সম্পদে বসে থাকে, চলতি অনুপাতকে উঁচুতে ধরে রেখে। **ব্যবসা যত খারাপ হয়, চলতি অনুপাত তত ভালো দেখায়**, কারণ অবিক্রীত পণ্য জমতে থাকে। এই উল্টো ব্যাপারটি কোনো সূক্ষ্মতা নয়। এই অধ্যায়ের একক সবচেয়ে গুরুত্বপূর্ণ বিষয় এটিই।

**২. বাসি প্রাপ্য একই কাজ করে।** যে বাজারে খদ্দের একজন চাপগ্রস্ত ক্রেতা, সেখানে ১৮০ দিনের বেশি পুরোনো প্রাপ্য অর্থনৈতিক অর্থে কোনো সম্পদই নয়। নিরীক্ষক সঞ্চিতি রাখতে বাধ্য না করা পর্যন্ত এগুলো পূর্ণ মূল্যে লিপিবদ্ধ থাকে। অধ্যায় ১৩-এর প্রাপ্য-প্রবৃদ্ধি পরীক্ষা এবং এই অধ্যায়ের তারল্য পরীক্ষা একই ব্যালান্সকে দুই দিক থেকে দেখছে।

**৩. অগ্রিম, জামানত ও অগ্রিম পরিশোধ একটি মিশ্র ঝুড়ি।** একজন বাংলাদেশি প্রস্তুতকারকের "অগ্রিম, জামানত ও অগ্রিম পরিশোধ" রেখায় নিয়মিতভাবে ইউটিলিটি, বাড়িওয়ালা ও সরকারি সংস্থার কাছে রাখা দীর্ঘমেয়াদি জামানত থাকে, যা বারো মাসে আদায় হবে না এবং প্রায়ই আদৌ আদায় হবে না। এগুলো কেবল শ্রেণীবিন্যাসের রীতি অনুযায়ীই চলতি।

**ফলাফল পাটিগাণিতিকভাবে পূর্বানুমেয়।** অবনতিশীল কোম্পানি অবিক্রেয় মজুদ ও অনাদায়ী প্রাপ্য জমায়, দুটোই চলতি সম্পদ, এবং তার চলতি অনুপাত বাড়ে। **রাজস্ব পড়তে থাকা কোম্পানিতে বেড়ে চলা চলতি অনুপাত একটি সতর্কতা, আশ্বাস নয়।**

### নগদ রূপান্তর চক্র

অনুপাতগুলো আলোকচিত্র। চক্রটি চলচ্চিত্র।

$$CCC = DSO + DIO - DPO$$

- **DSO** — দিনভিত্তিক বকেয়া বিক্রয়। বিক্রয় থেকে নগদ পর্যন্ত কত দিন।
- **DIO** — দিনভিত্তিক বকেয়া মজুদ। বিক্রি হওয়ার আগে মজুদ কত দিন পড়ে থাকে।
- **DPO** — দিনভিত্তিক বকেয়া প্রদেয়। কোম্পানি নিজের সরবরাহকারীদের শোধ করতে কত দিন নেয়।

DSO যোগ DIO হলো পরিচালন চক্র: কাঁচামাল কেনা থেকে নগদ পাওয়া পর্যন্ত সময়। DPO হলো সরবরাহকারীদের দেওয়া বিনামূল্যের অর্থায়ন। **পার্থক্যটিই সেই দিনসংখ্যা যা কোম্পানিকে নিজের পকেট বা ব্যাংকের পকেট থেকে জোগাতে হয়।**

একে টাকায় রূপান্তর করুন, তখন আর তা বিমূর্ত থাকে না:

$$\\text{কার্যকরী মূলধনের প্রয়োজন} \\approx \\frac{CCC}{365} \\times \\text{বার্ষিক পরিচালন ব্যয়}$$

৩৮৬ কোটি টাকার বার্ষিক নগদ পরিচালন ব্যয়ে ১৪৫ দিনের চক্র মানে মোটামুটি ১৫৩ কোটি টাকার স্থায়ী অর্থায়নের প্রয়োজন। এটি কোনো অনুপাত নয়। এটি এমন একটি ঋণ যা কোম্পানিকে চিরকাল জীবিত রাখতে হবে, নয়তো সংকুচিত হতে হবে।

### নবায়ন ঝুঁকি — যেখানে বাংলাদেশ আলাদা

এখানেই এই অধ্যায় পর্ব ১-এর সঙ্গে যুক্ত হয়।

ডিএসই-তালিকাভুক্ত বেশিরভাগ প্রস্তুতকারক তাঁদের নগদ রূপান্তর চক্রে অর্থায়ন করেন স্বল্পমেয়াদি ব্যাংক সুবিধা দিয়ে: ক্যাশ ক্রেডিট, ওভারড্রাফট, LTR, প্যাকিং ক্রেডিট। এগুলো সাধারণত ৯০ থেকে ১৮০ দিনের উপকরণ যা **ধারাবাহিকভাবে নবায়ন করা হয়**। স্থিতিপত্রে এগুলো চলতি দায় হিসেবে দেখা যায়। বাস্তবে সবাই — কোম্পানি, ব্যাংক, বিশ্লেষক — ধরে নেন এগুলো নবায়ন হবে।

**ঐ অনুমানটিই ঝুঁকি।**

অধ্যায় ৫ প্রতিষ্ঠা করেছে এই বাজারে ঋণ হঠাৎ এবং ঋণগ্রহীতার সঙ্গে অসম্পর্কিত কারণে প্রত্যাহার হতে পারে: ব্যাংকের নিজের পুঁজিবাজার এক্সপোজার অনুপাত ২৫% সীমা লঙ্ঘন, বাংলাদেশ ব্যাংকের কড়াকড়ির চক্র, খাতব্যাপী শ্রেণীকরণ পর্যালোচনা, বা কেবল ব্যাংকের নিজস্ব তারল্যের পরিবর্তন। নবায়ন থামলে টানা এগারো বছর নবায়িত একটি সুবিধা পূর্ণ অঙ্কে, নগদে, একটি তারিখে দেয় হয়ে যায়।

**এটি নিখুঁতভাবে পড়ুন।** যে কোম্পানির সমন্বিত চলতি অনুপাত ১.০৪, সে স্বচ্ছল এ কারণে নয় যে তার সম্পদ দায়কে ছাড়িয়ে গেছে। সে স্বচ্ছল এ কারণে যে একটি ঋণ কমিটি এখনো না বলেনি। **এটি স্থিতিপত্রের তথ্য নয়। এটি একটি সম্পর্ক।**

প্রতিরক্ষামূলক ব্যবধান মাপে ঐ সম্পর্ক ভেঙে গেলে কার্যক্রম থামার আগে কত সময় থাকে:

$$\\text{প্রতিরক্ষামূলক ব্যবধান} = \\frac{\\text{নগদ} + \\text{বাজারযোগ্য সিকিউরিটিজ} + \\text{প্রাপ্য}}{\\text{দৈনিক নগদ পরিচালন ব্যয়}}$$

দিনে প্রকাশিত। এই অধ্যায়ে এটিই একমাত্র তারল্য পরিমাপ যা বিনিয়োগকারীর প্রকৃত আগ্রহের প্রশ্নের উত্তর দেয়: **এই কোম্পানির হাতে আর কত সময় আছে?**`,
    },

    simple: {
      en: `You run a shop. Someone asks: are you in trouble?

You could answer three ways.

- **"I have BDT 2.10 of stuff for every BDT 1 I owe."** That is the current ratio. It sounds excellent.
- **"But most of that stuff is unsold shirts and money customers haven't paid."** That is the quick ratio.
- **"Actually, in the drawer right now, I have eight paisa for every taka I owe."** That is the cash ratio.

All three are true at the same time. The bank manager only cares about the third one.

---

### The trap that looks like good news

Here is the part that catches people.

Your shirts are not selling. Every month, more shirts pile up in the back room. You do not throw them away — on paper they are still worth what you paid.

Now look at your current ratio. Unsold shirts are "current assets." **The more shirts you fail to sell, the higher your current ratio goes.**

A business that is dying of unsold stock will show an *improving* current ratio right up to the week it closes.

So the rule is not "current ratio above 2 is safe." The rule is: **find out what the current assets actually are, and how old they are.**

### Where the money actually goes

You buy cloth. It sits for three months before it becomes a shirt someone buys. Then the buyer takes three more months to pay you.

That is six months from spending your money to getting it back.

Your own supplier gives you six weeks. So for roughly four and a half months, **somebody has to fund your shop, and it is either you or a bank.**

That is the cash conversion cycle. It is not an accounting concept. It is a number of days you are personally short of money, every single cycle, forever.

### The one that actually kills companies

The bank has renewed your working capital loan every year for eleven years. You have stopped thinking of it as a loan. It is just part of the business.

Then one year the bank says no. Not because of anything you did — the bank has its own problems.

**Now the whole amount is due. In cash. On a date.**

Your shirts cannot be sold in a week. Your customers will not pay early. The BDT 6 lakh in the drawer does not cover BDT 70 lakh.

**This is how profitable Bangladeshi companies fail.** Not from losing money. From a phone call in which somebody stops rolling over a facility that everyone had quietly assumed was permanent.`,
      bn: `আপনি একটি দোকান চালান। কেউ জিজ্ঞেস করলেন: আপনি কি বিপদে আছেন?

আপনি তিনভাবে উত্তর দিতে পারেন।

- **"আমার প্রতি ১ টাকা দেনার বিপরীতে ২.১০ টাকার জিনিস আছে।"** এটি চলতি অনুপাত। শুনতে চমৎকার।
- **"কিন্তু ঐ জিনিসের বেশিরভাগই অবিক্রীত জামা আর খদ্দেরদের না-দেওয়া টাকা।"** এটি ত্বরিত অনুপাত।
- **"আসলে, এই মুহূর্তে ড্রয়ারে, প্রতি টাকা দেনার বিপরীতে আমার আট পয়সা আছে।"** এটি নগদ অনুপাত।

তিনটিই একই সঙ্গে সত্য। ব্যাংক ম্যানেজার কেবল তৃতীয়টি নিয়েই ভাবেন।

---

### যে ফাঁদ সুসংবাদের মতো দেখায়

এখানেই মানুষ ধরা পড়ে।

আপনার জামা বিক্রি হচ্ছে না। প্রতি মাসে পেছনের ঘরে আরও জামা জমছে। আপনি সেগুলো ফেলে দিচ্ছেন না — কাগজে-কলমে সেগুলো এখনো আপনার দেওয়া দামেই মূল্যবান।

এবার আপনার চলতি অনুপাত দেখুন। অবিক্রীত জামা "চলতি সম্পদ"। **আপনি যত বেশি জামা বিক্রি করতে ব্যর্থ হবেন, আপনার চলতি অনুপাত তত বাড়বে।**

অবিক্রীত মজুদে মরতে থাকা ব্যবসা বন্ধ হওয়ার সপ্তাহ পর্যন্ত একটি *উন্নতিশীল* চলতি অনুপাত দেখাবে।

তাই নিয়মটি "চলতি অনুপাত ২-এর ওপরে হলে নিরাপদ" নয়। নিয়মটি হলো: **বের করুন চলতি সম্পদগুলো আসলে কী, এবং সেগুলোর বয়স কত।**

### টাকা আসলে কোথায় যায়

আপনি কাপড় কেনেন। জামা হয়ে কারো কাছে বিক্রি হওয়ার আগে তা তিন মাস পড়ে থাকে। তারপর ক্রেতা আপনাকে টাকা দিতে আরও তিন মাস নেন।

অর্থাৎ টাকা খরচ করা থেকে ফেরত পাওয়া পর্যন্ত ছয় মাস।

আপনার নিজের সরবরাহকারী আপনাকে ছয় সপ্তাহ দেন। তাই প্রায় সাড়ে চার মাস ধরে **কাউকে আপনার দোকানে অর্থায়ন করতে হয়, আর সে হয় আপনি নয়তো একটি ব্যাংক।**

এটিই নগদ রূপান্তর চক্র। এটি কোনো হিসাবরক্ষণ ধারণা নয়। এটি সেই দিনসংখ্যা যতদিন আপনি ব্যক্তিগতভাবে টাকার টানে থাকেন, প্রতিটি চক্রে, চিরকাল।

### যেটি আসলে কোম্পানি মেরে ফেলে

ব্যাংক এগারো বছর ধরে প্রতি বছর আপনার কার্যকরী মূলধন ঋণ নবায়ন করেছে। আপনি একে আর ঋণ ভাবাই বন্ধ করে দিয়েছেন। এটি ব্যবসারই অংশ।

তারপর এক বছর ব্যাংক না বলে দেয়। আপনার কোনো কাজের কারণে নয় — ব্যাংকের নিজের সমস্যা আছে।

**এখন পুরো অঙ্কটি দেয়। নগদে। একটি তারিখে।**

আপনার জামা এক সপ্তাহে বিক্রি হবে না। আপনার খদ্দেররা আগে টাকা দেবেন না। ড্রয়ারের ৬ লক্ষ টাকা ৭০ লক্ষ টাকা ঢাকে না।

**এভাবেই লাভজনক বাংলাদেশি কোম্পানি ব্যর্থ হয়।** টাকা হারিয়ে নয়। এমন একটি ফোনকল থেকে যেখানে কেউ একজন এমন একটি সুবিধার নবায়ন থামিয়ে দেন যাকে সবাই চুপচাপ স্থায়ী ধরে নিয়েছিলেন।`,
    },

    example: {
      en: `### Company T — a textile spinner with a "healthy" balance sheet

FY2024. All figures BDT crore. This is the kind of company a screener flags as safe.

**Current assets**

| Line | BDT cr |
|---|---|
| Cash & cash equivalents | 6 |
| Short-term investments | 4 |
| Trade receivables | 118 |
| Inventory | 95 |
| Advances, deposits & prepayments | 25 |
| **Total current assets** | **248** |

**Current liabilities**

| Line | BDT cr |
|---|---|
| Short-term bank loans (CC / OD / LTR) | 55 |
| Current portion of long-term debt | 15 |
| Trade payables | 42 |
| Accrued expenses & other | 6 |
| **Total current liabilities** | **118** |

**Headline ratios**

| Measure | Value | Textbook reading |
|---|---|---|
| Working capital | BDT 130 cr | Comfortable |
| **Current ratio** | **2.10** | "Healthy — above 2.0" |
| Quick ratio | 1.08 | "Adequate — above 1.0" |
| **Cash ratio** | **0.08** | Nobody quotes this one |

Two of these three numbers are used in every broker report in Dhaka. The third is not, and the third is the true one.

### Now read the notes

The annual report contains four disclosures that a screener never sees.

| Note | Finding | BDT cr |
|---|---|---|
| Receivables ageing | Aged over 180 days, no provision made | 46 |
| Inventory ageing | Greige fabric and yarn held over 12 months, in a falling cotton market | 38 |
| Advances & deposits | Security deposits with the utility and the landlord, not realisable within 12 months | 15 |
| Short-term investments | An unlisted placement with a related party; no market, no exit | 4 |
| Contingencies | Acceptances and LC obligations maturing within 12 months, not on the face of the balance sheet | 22 |

**Every one of these is disclosed.** None of them is hidden. They are simply in the back of a PDF that most investors never open.

### The strip-down

| | Reported | Adjustment | Adjusted |
|---|---|---|---|
| Current assets | 248 | −46 −38 −15 −4 | **145** |
| Current liabilities | 118 | +22 | **140** |
| **Current ratio** | **2.10** | | **1.04** |
| Quick ratio | 1.08 | | **0.63** |

**From 2.10 to 1.04.** The company did not change. Nothing was restated. No fraud was alleged. **The only thing that changed is that somebody read the ageing schedule.**

At 1.04, Company T has BDT 5 crore of headroom against BDT 140 crore of twelve-month obligations. One bad quarter closes that gap.

### The cash conversion cycle

Prior year: receivables 96, inventory 82, payables 38. Revenue 420, COGS 340.

| Measure | Calculation | Days |
|---|---|---|
| DSO | avg AR 107 ÷ 420 × 365 | **92.99** |
| DIO | avg inventory 88.5 ÷ 340 × 365 | **95.01** |
| DPO | avg payables 40 ÷ 340 × 365 | **42.94** |
| **CCC** | 92.99 + 95.01 − 42.94 | **145.05** |

**145 days.** Company T pays for cotton roughly five months before the cash from the resulting yarn comes back. Suppliers fund 43 of those days. **The remaining 102 days are funded by a bank.**

In taka: annual cash operating cost is 340 + 46 − 24 = BDT 362 crore, so the cycle absorbs roughly BDT 144 crore of permanent financing. Compare that to the BDT 55 crore of short-term bank loans on the balance sheet and the BDT 22 crore of off-balance-sheet acceptances. **The financing is there. It is just partly disclosed in a note rather than on the face.**

### The defensive interval

Daily cash operating expenditure = 362 ÷ 365 = BDT 0.9918 crore per day.

| | Defensive assets | Days |
|---|---|---|
| As reported (cash 6 + investments 4 + receivables 118 = 128) | 128 | **129.06** |
| Adjusted (cash 6 + investments 0 + collectible receivables 72 = 78) | 78 | **78.65** |

The reported figure says four months of runway. The honest figure says two and a half — **and that assumes every remaining receivable is collected on schedule, which for a company with 93-day DSO it will not be.**

### Rollover exposure

| Item | BDT cr |
|---|---|
| Short-term bank loans | 55 |
| Current portion of long-term debt | 15 |
| **Debt maturing within 12 months** | **70** |
| Cash on hand | 6 |
| **Cash cover** | **8.6%** |

**This is the number.** Company T must refinance BDT 70 crore within twelve months and holds BDT 6 crore against it. Chapter 5 established that credit in this market withdraws for reasons that have nothing to do with the borrower. If the working capital line is not renewed, Company T does not have a liquidity problem. **It has an existence problem, and the current ratio of 2.10 said nothing about it.**

### What retail investors do instead

They see **current ratio 2.10, P/E 9, dividend yield 4%** on a broker's one-page summary and conclude the stock is cheap and safe. It is neither. It is a rollover-dependent business trading on the assumption that a bank keeps saying yes.

**The share does not fall when the business deteriorates. It falls on the day the bank's decision becomes public** — usually via a classified-loan disclosure, a delayed dividend, or a qualified audit opinion. By then the scrip is at the lower circuit and Chapter 2 established what that means: you cannot sell.`,
      bn: `### কোম্পানি T — "স্বাস্থ্যকর" স্থিতিপত্রসহ একটি বস্ত্র স্পিনার

FY২০২৪। সব সংখ্যা কোটি টাকায়। এটি সেই ধরনের কোম্পানি যাকে স্ক্রিনার নিরাপদ বলে চিহ্নিত করে।

**চলতি সম্পদ**

| খাত | কোটি টাকা |
|---|---|
| নগদ ও নগদ সমতুল্য | ৬ |
| স্বল্পমেয়াদি বিনিয়োগ | ৪ |
| বাণিজ্যিক প্রাপ্য | ১১৮ |
| মজুদ | ৯৫ |
| অগ্রিম, জামানত ও অগ্রিম পরিশোধ | ২৫ |
| **মোট চলতি সম্পদ** | **২৪৮** |

**চলতি দায়**

| খাত | কোটি টাকা |
|---|---|
| স্বল্পমেয়াদি ব্যাংক ঋণ (CC / OD / LTR) | ৫৫ |
| দীর্ঘমেয়াদি ঋণের চলতি কিস্তি | ১৫ |
| বাণিজ্যিক প্রদেয় | ৪২ |
| অর্জিত ব্যয় ও অন্যান্য | ৬ |
| **মোট চলতি দায়** | **১১৮** |

**শিরোনাম অনুপাত**

| পরিমাপ | মান | পাঠ্যবইয়ের পাঠ |
|---|---|---|
| কার্যকরী মূলধন | ১৩০ কোটি টাকা | স্বস্তিদায়ক |
| **চলতি অনুপাত** | **২.১০** | "স্বাস্থ্যকর — ২.০-এর ওপরে" |
| ত্বরিত অনুপাত | ১.০৮ | "পর্যাপ্ত — ১.০-এর ওপরে" |
| **নগদ অনুপাত** | **০.০৮** | এটি কেউ উদ্ধৃত করে না |

এই তিনটির দুটি ঢাকার প্রতিটি ব্রোকার প্রতিবেদনে ব্যবহৃত হয়। তৃতীয়টি হয় না, আর তৃতীয়টিই সত্য।

### এবার নোটগুলো পড়ুন

বার্ষিক প্রতিবেদনে চারটি প্রকাশ আছে যা কোনো স্ক্রিনার কখনো দেখে না।

| নোট | প্রাপ্তি | কোটি টাকা |
|---|---|---|
| প্রাপ্যের বয়স | ১৮০ দিনের বেশি পুরোনো, কোনো সঞ্চিতি নেই | ৪৬ |
| মজুদের বয়স | পড়তি তুলার বাজারে ১২ মাসের বেশি ধরে রাখা গ্রে ফ্যাব্রিক ও সুতা | ৩৮ |
| অগ্রিম ও জামানত | ইউটিলিটি ও বাড়িওয়ালার কাছে জামানত, বারো মাসে আদায়যোগ্য নয় | ১৫ |
| স্বল্পমেয়াদি বিনিয়োগ | একটি সম্পর্কিত পক্ষে অতালিকাভুক্ত প্লেসমেন্ট; বাজার নেই, প্রস্থান নেই | ৪ |
| সম্ভাব্য দায় | বারো মাসের মধ্যে পরিশোধযোগ্য অ্যাকসেপ্ট্যান্স ও LC দায়, স্থিতিপত্রের মুখে নেই | ২২ |

**এদের প্রতিটিই প্রকাশিত।** কোনোটিই লুকানো নয়। এগুলো কেবল এমন একটি PDF-এর পেছনে আছে যা বেশিরভাগ বিনিয়োগকারী কখনো খোলেন না।

### ছাঁটাই

| | রিপোর্টকৃত | সমন্বয় | সমন্বিত |
|---|---|---|---|
| চলতি সম্পদ | ২৪৮ | −৪৬ −৩৮ −১৫ −৪ | **১৪৫** |
| চলতি দায় | ১১৮ | +২২ | **১৪০** |
| **চলতি অনুপাত** | **২.১০** | | **১.০৪** |
| ত্বরিত অনুপাত | ১.০৮ | | **০.৬৩** |

**২.১০ থেকে ১.০৪।** কোম্পানি বদলায়নি। কিছু পুনর্বিবৃত হয়নি। কোনো প্রতারণার অভিযোগ ওঠেনি। **একমাত্র যা বদলেছে তা হলো কেউ একজন বয়সভিত্তিক তালিকাটি পড়েছেন।**

১.০৪-এ কোম্পানি T-এর ১৪০ কোটি টাকার বারো-মাসী দায়ের বিপরীতে ৫ কোটি টাকার অবকাশ আছে। একটি খারাপ প্রান্তিকই ঐ ফাঁক বন্ধ করে দেয়।

### নগদ রূপান্তর চক্র

পূর্ববর্তী বছর: প্রাপ্য ৯৬, মজুদ ৮২, প্রদেয় ৩৮। রাজস্ব ৪২০, বিক্রীত পণ্যের ব্যয় ৩৪০।

| পরিমাপ | গণনা | দিন |
|---|---|---|
| DSO | গড় প্রাপ্য ১০৭ ÷ ৪২০ × ৩৬৫ | **৯২.৯৯** |
| DIO | গড় মজুদ ৮৮.৫ ÷ ৩৪০ × ৩৬৫ | **৯৫.০১** |
| DPO | গড় প্রদেয় ৪০ ÷ ৩৪০ × ৩৬৫ | **৪২.৯৪** |
| **CCC** | ৯২.৯৯ + ৯৫.০১ − ৪২.৯৪ | **১৪৫.০৫** |

**১৪৫ দিন।** কোম্পানি T তুলার দাম দেয় ফলিত সুতার নগদ ফেরত আসার প্রায় পাঁচ মাস আগে। সরবরাহকারীরা ঐ দিনগুলোর ৪৩ দিন অর্থায়ন করেন। **বাকি ১০২ দিন একটি ব্যাংক অর্থায়ন করে।**

টাকায়: বার্ষিক নগদ পরিচালন ব্যয় ৩৪০ + ৪৬ − ২৪ = ৩৬২ কোটি টাকা, তাই চক্রটি মোটামুটি ১৪৪ কোটি টাকার স্থায়ী অর্থায়ন শোষণ করে। এটিকে স্থিতিপত্রের ৫৫ কোটি টাকার স্বল্পমেয়াদি ব্যাংক ঋণ ও ২২ কোটি টাকার স্থিতিপত্র-বহির্ভূত অ্যাকসেপ্ট্যান্সের সঙ্গে তুলনা করুন। **অর্থায়নটি আছে। কেবল আংশিকভাবে মুখে নয়, একটি নোটে প্রকাশিত।**

### প্রতিরক্ষামূলক ব্যবধান

দৈনিক নগদ পরিচালন ব্যয় = ৩৬২ ÷ ৩৬৫ = দিনে ০.৯৯১৮ কোটি টাকা।

| | প্রতিরক্ষামূলক সম্পদ | দিন |
|---|---|---|
| রিপোর্ট অনুযায়ী (নগদ ৬ + বিনিয়োগ ৪ + প্রাপ্য ১১৮ = ১২৮) | ১২৮ | **১২৯.০৬** |
| সমন্বিত (নগদ ৬ + বিনিয়োগ ০ + আদায়যোগ্য প্রাপ্য ৭২ = ৭৮) | ৭৮ | **৭৮.৬৫** |

রিপোর্টকৃত সংখ্যাটি বলে চার মাসের রসদ। সৎ সংখ্যাটি বলে আড়াই মাস — **আর তাও ধরে নিয়ে যে অবশিষ্ট প্রতিটি প্রাপ্য সময়মতো আদায় হবে, যা ৯৩ দিন DSO-র কোম্পানির ক্ষেত্রে হবে না।**

### নবায়ন ঝুঁকি

| খাত | কোটি টাকা |
|---|---|
| স্বল্পমেয়াদি ব্যাংক ঋণ | ৫৫ |
| দীর্ঘমেয়াদি ঋণের চলতি কিস্তি | ১৫ |
| **বারো মাসের মধ্যে পরিশোধযোগ্য ঋণ** | **৭০** |
| হাতে নগদ | ৬ |
| **নগদ আচ্ছাদন** | **৮.৬%** |

**সংখ্যাটি এটিই।** কোম্পানি T-কে বারো মাসের মধ্যে ৭০ কোটি টাকা পুনঃঅর্থায়ন করতে হবে এবং তার বিপরীতে আছে ৬ কোটি টাকা। অধ্যায় ৫ প্রতিষ্ঠা করেছে এই বাজারে ঋণ এমন কারণে প্রত্যাহার হয় যার সঙ্গে ঋণগ্রহীতার কোনো সম্পর্ক নেই। কার্যকরী মূলধনের সীমাটি নবায়ন না হলে কোম্পানি T-এর তারল্য সমস্যা হবে না। **তার অস্তিত্বের সমস্যা হবে, আর ২.১০-এর চলতি অনুপাত সে বিষয়ে কিছুই বলেনি।**

### খুচরা বিনিয়োগকারীরা এর বদলে যা করেন

তাঁরা ব্রোকারের এক পাতার সারসংক্ষেপে **চলতি অনুপাত ২.১০, P/E ৯, লভ্যাংশ ফলন ৪%** দেখে সিদ্ধান্তে আসেন শেয়ারটি সস্তা ও নিরাপদ। এটি কোনোটিই নয়। এটি একটি নবায়ন-নির্ভর ব্যবসা যা এই অনুমানের ওপর লেনদেন হচ্ছে যে একটি ব্যাংক হ্যাঁ বলতে থাকবে।

**ব্যবসার অবনতি হলে শেয়ার পড়ে না। শেয়ার পড়ে যেদিন ব্যাংকের সিদ্ধান্ত প্রকাশ্য হয়** — সাধারণত একটি শ্রেণীকৃত-ঋণ প্রকাশ, একটি বিলম্বিত লভ্যাংশ, বা একটি সংশোধিত নিরীক্ষা মতামতের মাধ্যমে। ততক্ষণে স্ক্রিপটি নিম্ন সার্কিটে, আর অধ্যায় ২ প্রতিষ্ঠা করেছে তার মানে কী: আপনি বিক্রি করতে পারবেন না।`,
    },

    formula: {
      en: `**1. Current ratio**

$$\\text{Current Ratio} = \\frac{\\text{Current Assets}}{\\text{Current Liabilities}}$$

**2. Quick ratio (acid test)**

$$\\text{Quick Ratio} = \\frac{\\text{Current Assets} - \\text{Inventory} - \\text{Prepayments}}{\\text{Current Liabilities}}$$

Equivalently, and preferably, built up rather than stripped down:

$$\\text{Quick Ratio} = \\frac{\\text{Cash} + \\text{Marketable Securities} + \\text{Receivables}}{\\text{Current Liabilities}}$$

**3. Cash ratio**

$$\\text{Cash Ratio} = \\frac{\\text{Cash} + \\text{Marketable Securities}}{\\text{Current Liabilities}}$$

**4. Working capital**

$$\\text{Working Capital} = \\text{Current Assets} - \\text{Current Liabilities}$$

**5. Days sales outstanding**

$$DSO = \\frac{\\text{Average Receivables}}{\\text{Revenue}} \\times 365$$

**6. Days inventory outstanding** — note the denominator is COGS, not revenue:

$$DIO = \\frac{\\text{Average Inventory}}{\\text{Cost of Goods Sold}} \\times 365$$

**7. Days payables outstanding** — also on COGS:

$$DPO = \\frac{\\text{Average Payables}}{\\text{Cost of Goods Sold}} \\times 365$$

**8. Cash conversion cycle**

$$CCC = DSO + DIO - DPO$$

and the operating cycle, which is the same thing before supplier credit:

$$\\text{Operating Cycle} = DSO + DIO$$

**Converted to a financing requirement in taka:**

$$WCR \\approx \\frac{CCC}{365} \\times \\text{Annual Cash Operating Cost}$$

**9. Defensive interval**

$$DI = \\frac{\\text{Cash} + \\text{Marketable Securities} + \\text{Receivables}}{(\\text{COGS} + \\text{OpEx} - \\text{Depreciation}) / 365}$$

The denominator strips depreciation because it is not a cash outflow. Chapter 12 established that distinction; it matters here.

**10. Adjusted current ratio — the one you actually use**

$$\\text{ACR} = \\frac{CA - R_{stale} - I_{stale} - P_{non\\text{-}current} - S_{illiquid}}{CL + O_{undisclosed}}$$

where the numerator deductions come from the ageing schedules and the denominator addition comes from the contingent liabilities note.

**11. Rollover exposure**

$$\\text{Debt Due}_{12m} = \\text{Short-term Debt} + \\text{Current Portion of LTD}$$

$$\\text{Cash Cover} = \\frac{\\text{Cash}}{\\text{Debt Due}_{12m}} \\times 100$$

**12. Verdict rule**

$$\\text{Verdict} = \\begin{cases} \\text{STRONG} & \\text{ACR} \\geq 1.50 \\text{ and Cash Ratio} \\geq 0.20 \\\\ \\text{ROLLOVER-DEPENDENT} & 1.00 \\leq \\text{ACR} < 1.50 \\\\ \\text{FRAGILE} & \\text{ACR} < 1.00 \\end{cases}$$

**The middle category is the one that matters.** Most DSE-listed manufacturers sit in it. "Rollover-dependent" is not a euphemism for adequate. It means the company is solvent conditional on a bank decision it does not control.`,
      bn: `**১. চলতি অনুপাত**

$$\\text{চলতি অনুপাত} = \\frac{\\text{চলতি সম্পদ}}{\\text{চলতি দায়}}$$

**২. ত্বরিত অনুপাত (অ্যাসিড টেস্ট)**

$$\\text{ত্বরিত অনুপাত} = \\frac{\\text{চলতি সম্পদ} - \\text{মজুদ} - \\text{অগ্রিম পরিশোধ}}{\\text{চলতি দায়}}$$

সমতুল্যভাবে, এবং বরং অগ্রাধিকারযোগ্যভাবে, ছেঁটে নয় বরং গড়ে তুলে:

$$\\text{ত্বরিত অনুপাত} = \\frac{\\text{নগদ} + \\text{বাজারযোগ্য সিকিউরিটিজ} + \\text{প্রাপ্য}}{\\text{চলতি দায়}}$$

**৩. নগদ অনুপাত**

$$\\text{নগদ অনুপাত} = \\frac{\\text{নগদ} + \\text{বাজারযোগ্য সিকিউরিটিজ}}{\\text{চলতি দায়}}$$

**৪. কার্যকরী মূলধন**

$$\\text{কার্যকরী মূলধন} = \\text{চলতি সম্পদ} - \\text{চলতি দায়}$$

**৫. দিনভিত্তিক বকেয়া বিক্রয়**

$$DSO = \\frac{\\text{গড় প্রাপ্য}}{\\text{রাজস্ব}} \\times 365$$

**৬. দিনভিত্তিক বকেয়া মজুদ** — লক্ষ করুন হর হলো বিক্রীত পণ্যের ব্যয়, রাজস্ব নয়:

$$DIO = \\frac{\\text{গড় মজুদ}}{\\text{বিক্রীত পণ্যের ব্যয়}} \\times 365$$

**৭. দিনভিত্তিক বকেয়া প্রদেয়** — এটিও বিক্রীত পণ্যের ব্যয়ের ওপর:

$$DPO = \\frac{\\text{গড় প্রদেয়}}{\\text{বিক্রীত পণ্যের ব্যয়}} \\times 365$$

**৮. নগদ রূপান্তর চক্র**

$$CCC = DSO + DIO - DPO$$

এবং পরিচালন চক্র, যা সরবরাহকারীর ঋণের আগের একই জিনিস:

$$\\text{পরিচালন চক্র} = DSO + DIO$$

**টাকার অঙ্কে অর্থায়ন প্রয়োজনে রূপান্তরিত:**

$$WCR \\approx \\frac{CCC}{365} \\times \\text{বার্ষিক নগদ পরিচালন ব্যয়}$$

**৯. প্রতিরক্ষামূলক ব্যবধান**

$$DI = \\frac{\\text{নগদ} + \\text{বাজারযোগ্য সিকিউরিটিজ} + \\text{প্রাপ্য}}{(\\text{COGS} + \\text{পরিচালন ব্যয়} - \\text{অবচয়}) / 365}$$

হর থেকে অবচয় বাদ দেওয়া হয় কারণ তা নগদ বহির্গমন নয়। অধ্যায় ১২ এই পার্থক্য প্রতিষ্ঠা করেছে; এখানে তা গুরুত্বপূর্ণ।

**১০. সমন্বিত চলতি অনুপাত — যেটি আপনি আসলে ব্যবহার করবেন**

$$\\text{ACR} = \\frac{CA - R_{বাসি} - I_{বাসি} - P_{অ\\text{-}চলতি} - S_{তরলহীন}}{CL + O_{অপ্রকাশিত}}$$

যেখানে লবের বিয়োগগুলো আসে বয়সভিত্তিক তালিকা থেকে এবং হরের যোগটি আসে সম্ভাব্য দায় নোট থেকে।

**১১. নবায়ন ঝুঁকি**

$$\\text{দেয় ঋণ}_{12m} = \\text{স্বল্পমেয়াদি ঋণ} + \\text{দীর্ঘমেয়াদি ঋণের চলতি কিস্তি}$$

$$\\text{নগদ আচ্ছাদন} = \\frac{\\text{নগদ}}{\\text{দেয় ঋণ}_{12m}} \\times 100$$

**১২. রায়ের নিয়ম**

$$\\text{রায়} = \\begin{cases} \\text{STRONG} & \\text{ACR} \\geq 1.50 \\text{ এবং নগদ অনুপাত} \\geq 0.20 \\\\ \\text{ROLLOVER-DEPENDENT} & 1.00 \\leq \\text{ACR} < 1.50 \\\\ \\text{FRAGILE} & \\text{ACR} < 1.00 \\end{cases}$$

**মাঝের শ্রেণিটিই গুরুত্বপূর্ণ।** ডিএসই-তালিকাভুক্ত বেশিরভাগ প্রস্তুতকারক সেখানেই বসে আছেন। "নবায়ন-নির্ভর" পর্যাপ্ততার কোনো শোভন প্রতিশব্দ নয়। এর অর্থ কোম্পানিটি স্বচ্ছল, তবে এমন এক ব্যাংক-সিদ্ধান্তের শর্তে যা তার নিয়ন্ত্রণে নেই।`,
    },

    manual: {
      en: `We take Company T's reported current ratio of 2.10 and strip it to a defensible number. All figures BDT crore.

---

**Step 1 — Total current assets.**

$$6 + 4 + 118 + 95 + 25 = 248$$

**Step 2 — Total current liabilities.**

$$55 + 15 + 42 + 6 = 118$$

**Step 3 — Reported current ratio.**

$$\\frac{248}{118} = 2.10$$

**Step 4 — Working capital.**

$$248 - 118 = \\text{BDT } 130 \\text{ crore}$$

**Step 5 — Quick ratio.** Remove inventory (95) and prepayments (25):

$$\\frac{248 - 95 - 25}{118} = \\frac{128}{118} = 1.08$$

**Step 6 — Cash ratio.**

$$\\frac{6 + 4}{118} = \\frac{10}{118} = 0.08$$

**Note the collapse across steps 3, 5 and 6: 2.10 → 1.08 → 0.08.** Nothing has been adjusted yet. This is just the same balance sheet read with progressively fewer assumptions.

---

**Step 7 — DSO.** Average receivables $= (118 + 96)/2 = 107$.

$$DSO = \\frac{107}{420} \\times 365 = 92.99 \\text{ days}$$

**Step 8 — DIO.** Average inventory $= (95 + 82)/2 = 88.5$. Denominator is COGS.

$$DIO = \\frac{88.5}{340} \\times 365 = 95.01 \\text{ days}$$

**Step 9 — DPO.** Average payables $= (42 + 38)/2 = 40$.

$$DPO = \\frac{40}{340} \\times 365 = 42.94 \\text{ days}$$

**Step 10 — Cash conversion cycle.**

$$CCC = 92.99 + 95.01 - 42.94 = 145.05 \\text{ days}$$

**Step 11 — Convert to a financing requirement.** Annual cash operating cost $= 340 + 46 - 24 = 362$.

$$WCR = \\frac{145.05}{365} \\times 362 = \\text{BDT } 143.8 \\text{ crore}$$

**That is the permanent hole.** Company T needs roughly BDT 144 crore of financing that never gets repaid, only rolled — for as long as it operates at this scale.

---

**Step 12 — Daily cash operating expenditure.**

$$\\frac{362}{365} = \\text{BDT } 0.9918 \\text{ crore per day}$$

**Step 13 — Defensive interval, as reported.**

$$\\frac{6 + 4 + 118}{0.9918} = \\frac{128}{0.9918} = 129.06 \\text{ days}$$

---

Now the strip-down. Each deduction comes from a specific disclosure.

**Step 14 — Remove receivables aged over 180 days.** Note discloses BDT 46 crore with no provision. A 180-day-old receivable from a distressed buyer in a falling market is not a twelve-month asset.

$$248 - 46 = 202$$

**Step 15 — Remove inventory aged over 12 months.** BDT 38 crore of greige fabric and yarn, held through a falling cotton cycle. Chapter 13 established that not writing this down was itself a profit lever; here it is also a liquidity misstatement.

$$202 - 38 = 164$$

**Step 16 — Remove non-current deposits.** BDT 15 crore of security deposits with the utility and the landlord. Current by classification only.

$$164 - 15 = 149$$

**Step 17 — Remove the illiquid placement.** BDT 4 crore in an unlisted related-party instrument. No market, no exit, no marketable security.

$$149 - 4 = 145$$

$$\\boxed{\\text{Adjusted current assets} = \\text{BDT } 145 \\text{ crore}}$$

**Step 18 — Add undisclosed current obligations.** BDT 22 crore of acceptances and LC obligations maturing within twelve months, disclosed in the contingencies note but not on the face of the balance sheet.

$$118 + 22 = 140$$

$$\\boxed{\\text{Adjusted current liabilities} = \\text{BDT } 140 \\text{ crore}}$$

---

**Step 19 — Adjusted current ratio.**

$$ACR = \\frac{145}{140} = 1.04$$

**Step 20 — Adjusted quick ratio.** Remaining good inventory $= 95 - 38 = 57$.

$$\\frac{145 - 57}{140} = \\frac{88}{140} = 0.63$$

**Step 21 — Adjusted defensive interval.** Collectible receivables $= 118 - 46 = 72$; marketable securities $= 4 - 4 = 0$.

$$\\frac{6 + 0 + 72}{0.9918} = \\frac{78}{0.9918} = 78.65 \\text{ days}$$

**Step 22 — Rollover exposure.**

$$\\text{Debt due within 12m} = 55 + 15 = \\text{BDT } 70 \\text{ crore}$$
$$\\text{Cash cover} = \\frac{6}{70} \\times 100 = 8.6\\%$$

**Step 23 — Verdict.** $ACR = 1.04$, which is $\\geq 1.00$ but $< 1.50$. Cash ratio $0.08 < 0.20$.

$$\\Rightarrow \\textbf{ROLLOVER-DEPENDENT}$$

---

| Measure | Reported | Adjusted |
|---|---|---|
| Current ratio | 2.10 | **1.04** |
| Quick ratio | 1.08 | **0.63** |
| Defensive interval | 129.06 days | **78.65 days** |
| Cash ratio | 0.08 | 0.08 |

**Interpretation. Four things follow, and none of them is optional.**

**First, the reported current ratio was not wrong. It was correct and useless.** Every input was audited, every classification followed IAS 1. The ratio is a faithful summary of a balance sheet that classifies 400-day-old yarn as a current asset. **The error is not in the accounts. It is in believing a ratio can substitute for reading them.**

**Second, the direction of the distortion is always the same.** Stale inventory and stale receivables inflate the numerator. Off-balance-sheet obligations deflate the denominator. Non-current items misclassified as current inflate the numerator again. **Every common distortion pushes the current ratio up.** There is no symmetric error that pushes it down. That asymmetry is why an unadjusted current ratio should be treated as an upper bound, never as an estimate.

**Third, 1.04 is not "just above 1.0."** It is BDT 5 crore of headroom on BDT 140 crore of obligations — 3.6%. A single delayed export payment, a single supplier demanding cash terms, or a single BDT 6 crore provision erases it.

**Fourth, and this is the one that matters:** at a 145-day cash conversion cycle and BDT 70 crore of debt maturing within twelve months against BDT 6 crore of cash, Company T's solvency is not determined by its balance sheet at all. **It is determined by whether a credit committee renews a facility.** Chapter 5 established that this market's lenders act on their own constraints — capital-market exposure caps, Bangladesh Bank tightening, sector classification reviews — not on the borrower's merit.

**You are not analysing a company. You are taking a position on a bank's future decision, and you have no information about it.** Price that accordingly, or do not take the position.`,
      bn: `আমরা কোম্পানি T-এর রিপোর্টকৃত ২.১০ চলতি অনুপাত নিয়ে তাকে একটি সমর্থনযোগ্য সংখ্যায় নামিয়ে আনব। সব সংখ্যা কোটি টাকায়।

---

**ধাপ ১ — মোট চলতি সম্পদ।**

$$6 + 4 + 118 + 95 + 25 = 248$$

**ধাপ ২ — মোট চলতি দায়।**

$$55 + 15 + 42 + 6 = 118$$

**ধাপ ৩ — রিপোর্টকৃত চলতি অনুপাত।**

$$\\frac{248}{118} = 2.10$$

**ধাপ ৪ — কার্যকরী মূলধন।**

$$248 - 118 = ১৩০ \\text{ কোটি টাকা}$$

**ধাপ ৫ — ত্বরিত অনুপাত।** মজুদ (৯৫) ও অগ্রিম পরিশোধ (২৫) বাদ দিন:

$$\\frac{248 - 95 - 25}{118} = \\frac{128}{118} = 1.08$$

**ধাপ ৬ — নগদ অনুপাত।**

$$\\frac{6 + 4}{118} = \\frac{10}{118} = 0.08$$

**৩, ৫ ও ৬ নং ধাপ জুড়ে ধসটি লক্ষ করুন: ২.১০ → ১.০৮ → ০.০৮।** এখনো কিছুই সমন্বয় করা হয়নি। এটি কেবল একই স্থিতিপত্র ক্রমান্বয়ে কম অনুমান নিয়ে পড়া।

---

**ধাপ ৭ — DSO।** গড় প্রাপ্য $= (118 + 96)/2 = 107$।

$$DSO = \\frac{107}{420} \\times 365 = 92.99 \\text{ দিন}$$

**ধাপ ৮ — DIO।** গড় মজুদ $= (95 + 82)/2 = 88.5$। হর হলো বিক্রীত পণ্যের ব্যয়।

$$DIO = \\frac{88.5}{340} \\times 365 = 95.01 \\text{ দিন}$$

**ধাপ ৯ — DPO।** গড় প্রদেয় $= (42 + 38)/2 = 40$।

$$DPO = \\frac{40}{340} \\times 365 = 42.94 \\text{ দিন}$$

**ধাপ ১০ — নগদ রূপান্তর চক্র।**

$$CCC = 92.99 + 95.01 - 42.94 = 145.05 \\text{ দিন}$$

**ধাপ ১১ — অর্থায়ন প্রয়োজনে রূপান্তর।** বার্ষিক নগদ পরিচালন ব্যয় $= 340 + 46 - 24 = 362$।

$$WCR = \\frac{145.05}{365} \\times 362 = ১৪৩.৮ \\text{ কোটি টাকা}$$

**এটিই স্থায়ী গর্ত।** কোম্পানি T-এর মোটামুটি ১৪৪ কোটি টাকার অর্থায়ন দরকার যা কখনো শোধ হয় না, কেবল নবায়ন হয় — যতদিন সে এই মাপে চলে।

---

**ধাপ ১২ — দৈনিক নগদ পরিচালন ব্যয়।**

$$\\frac{362}{365} = \\text{দিনে } ০.৯৯১৮ \\text{ কোটি টাকা}$$

**ধাপ ১৩ — প্রতিরক্ষামূলক ব্যবধান, রিপোর্ট অনুযায়ী।**

$$\\frac{6 + 4 + 118}{0.9918} = \\frac{128}{0.9918} = 129.06 \\text{ দিন}$$

---

এবার ছাঁটাই। প্রতিটি বিয়োগ একটি নির্দিষ্ট প্রকাশ থেকে আসে।

**ধাপ ১৪ — ১৮০ দিনের বেশি পুরোনো প্রাপ্য বাদ দিন।** নোট প্রকাশ করে ৪৬ কোটি টাকা, কোনো সঞ্চিতি ছাড়া। পড়তি বাজারে একজন চাপগ্রস্ত ক্রেতার কাছ থেকে ১৮০ দিনের পুরোনো প্রাপ্য বারো-মাসী সম্পদ নয়।

$$248 - 46 = 202$$

**ধাপ ১৫ — ১২ মাসের বেশি পুরোনো মজুদ বাদ দিন।** পড়তি তুলার চক্রের ভেতর ধরে রাখা ৩৮ কোটি টাকার গ্রে ফ্যাব্রিক ও সুতা। অধ্যায় ১৩ প্রতিষ্ঠা করেছে এটি অবলোপন না করা নিজেই একটি মুনাফা-কৌশল ছিল; এখানে এটি একটি তারল্য ভুল-বিবৃতিও।

$$202 - 38 = 164$$

**ধাপ ১৬ — অ-চলতি জামানত বাদ দিন।** ইউটিলিটি ও বাড়িওয়ালার কাছে ১৫ কোটি টাকার জামানত। কেবল শ্রেণীবিন্যাসেই চলতি।

$$164 - 15 = 149$$

**ধাপ ১৭ — তরলহীন প্লেসমেন্ট বাদ দিন।** একটি অতালিকাভুক্ত সম্পর্কিত-পক্ষ উপকরণে ৪ কোটি টাকা। বাজার নেই, প্রস্থান নেই, বাজারযোগ্য সিকিউরিটি নয়।

$$149 - 4 = 145$$

$$\\boxed{\\text{সমন্বিত চলতি সম্পদ} = ১৪৫ \\text{ কোটি টাকা}}$$

**ধাপ ১৮ — অপ্রকাশিত চলতি দায় যোগ করুন।** বারো মাসের মধ্যে পরিশোধযোগ্য ২২ কোটি টাকার অ্যাকসেপ্ট্যান্স ও LC দায়, সম্ভাব্য দায় নোটে প্রকাশিত কিন্তু স্থিতিপত্রের মুখে নেই।

$$118 + 22 = 140$$

$$\\boxed{\\text{সমন্বিত চলতি দায়} = ১৪০ \\text{ কোটি টাকা}}$$

---

**ধাপ ১৯ — সমন্বিত চলতি অনুপাত।**

$$ACR = \\frac{145}{140} = 1.04$$

**ধাপ ২০ — সমন্বিত ত্বরিত অনুপাত।** অবশিষ্ট ভালো মজুদ $= 95 - 38 = 57$।

$$\\frac{145 - 57}{140} = \\frac{88}{140} = 0.63$$

**ধাপ ২১ — সমন্বিত প্রতিরক্ষামূলক ব্যবধান।** আদায়যোগ্য প্রাপ্য $= 118 - 46 = 72$; বাজারযোগ্য সিকিউরিটিজ $= 4 - 4 = 0$।

$$\\frac{6 + 0 + 72}{0.9918} = \\frac{78}{0.9918} = 78.65 \\text{ দিন}$$

**ধাপ ২২ — নবায়ন ঝুঁকি।**

$$\\text{বারো মাসে দেয় ঋণ} = 55 + 15 = ৭০ \\text{ কোটি টাকা}$$
$$\\text{নগদ আচ্ছাদন} = \\frac{6}{70} \\times 100 = 8.6\\%$$

**ধাপ ২৩ — রায়।** $ACR = 1.04$, যা $\\geq 1.00$ কিন্তু $< 1.50$। নগদ অনুপাত $0.08 < 0.20$।

$$\\Rightarrow \\textbf{ROLLOVER-DEPENDENT}$$

---

| পরিমাপ | রিপোর্টকৃত | সমন্বিত |
|---|---|---|
| চলতি অনুপাত | ২.১০ | **১.০৪** |
| ত্বরিত অনুপাত | ১.০৮ | **০.৬৩** |
| প্রতিরক্ষামূলক ব্যবধান | ১২৯.০৬ দিন | **৭৮.৬৫ দিন** |
| নগদ অনুপাত | ০.০৮ | ০.০৮ |

**ব্যাখ্যা। চারটি বিষয় অনুসরণ করে, এবং একটিও ঐচ্ছিক নয়।**

**প্রথমত, রিপোর্টকৃত চলতি অনুপাতটি ভুল ছিল না। এটি সঠিক ছিল এবং অকেজো ছিল।** প্রতিটি ইনপুট নিরীক্ষিত, প্রতিটি শ্রেণীবিন্যাস IAS ১ অনুসরণ করেছে। অনুপাতটি এমন একটি স্থিতিপত্রের বিশ্বস্ত সারসংক্ষেপ যা ৪০০ দিনের পুরোনো সুতাকে চলতি সম্পদ হিসেবে শ্রেণীবদ্ধ করে। **ভুলটি হিসাবে নেই। ভুলটি হলো এই বিশ্বাসে যে একটি অনুপাত হিসাব পড়ার বিকল্প হতে পারে।**

**দ্বিতীয়ত, বিকৃতির দিক সবসময় একই।** বাসি মজুদ ও বাসি প্রাপ্য লবকে স্ফীত করে। স্থিতিপত্র-বহির্ভূত দায় হরকে সংকুচিত করে। চলতি হিসেবে ভুল শ্রেণীবদ্ধ অ-চলতি আইটেম আবার লবকে স্ফীত করে। **প্রতিটি সাধারণ বিকৃতি চলতি অনুপাতকে ওপরে ঠেলে।** একে নিচে ঠেলে এমন কোনো প্রতিসম ভুল নেই। এই অপ্রতিসমতাই কারণ যে একটি অসমন্বিত চলতি অনুপাতকে ঊর্ধ্বসীমা হিসেবে গণ্য করা উচিত, কখনোই প্রাক্কলন হিসেবে নয়।

**তৃতীয়ত, ১.০৪ মানে "১.০-এর সামান্য ওপরে" নয়।** এটি ১৪০ কোটি টাকার দায়ের ওপর ৫ কোটি টাকার অবকাশ — ৩.৬%। একটি বিলম্বিত রপ্তানি প্রাপ্তি, নগদ শর্ত দাবি করা একজন সরবরাহকারী, বা একটি ৬ কোটি টাকার সঞ্চিতিই তা মুছে দেয়।

**চতুর্থত, এবং এটিই গুরুত্বপূর্ণ:** ১৪৫ দিনের নগদ রূপান্তর চক্র এবং ৬ কোটি টাকা নগদের বিপরীতে বারো মাসে পরিশোধযোগ্য ৭০ কোটি টাকা ঋণসহ, কোম্পানি T-এর স্বচ্ছলতা তার স্থিতিপত্র দিয়ে আদৌ নির্ধারিত হয় না। **তা নির্ধারিত হয় একটি ঋণ কমিটি সুবিধাটি নবায়ন করে কি না তা দিয়ে।** অধ্যায় ৫ প্রতিষ্ঠা করেছে এই বাজারের ঋণদাতারা নিজেদের সীমাবদ্ধতায় কাজ করেন — পুঁজিবাজার এক্সপোজার সীমা, বাংলাদেশ ব্যাংকের কড়াকড়ি, খাতভিত্তিক শ্রেণীকরণ পর্যালোচনা — ঋণগ্রহীতার যোগ্যতায় নয়।

**আপনি একটি কোম্পানি বিশ্লেষণ করছেন না। আপনি একটি ব্যাংকের ভবিষ্যৎ সিদ্ধান্তের ওপর অবস্থান নিচ্ছেন, আর সে বিষয়ে আপনার কোনো তথ্য নেই।** সেই অনুযায়ী দাম নির্ধারণ করুন, নয়তো অবস্থানটি নেবেন না।`,
    },

    excel: {
      en: `\`\`\`
A3:  CURRENT ASSETS
A4:  Cash & Cash Equivalents             B4: 6
A5:  Short-term Investments              B5: 4
A6:  Trade Receivables                   B6: 118
A7:  Inventory                           B7: 95
A8:  Advances, Deposits & Prepayments    B8: 25
A9:  TOTAL CURRENT ASSETS                B9: =SUM(B4:B8)

A11: CURRENT LIABILITIES
A12: Short-term Bank Loans               B12: 55
A13: Current Portion of Long-term Debt   B13: 15
A14: Trade Payables                      B14: 42
A15: Accrued Expenses & Other            B15: 6
A16: TOTAL CURRENT LIABILITIES           B16: =SUM(B12:B15)

A19: Working Capital                     B19: =B9-B16
A20: Current Ratio                       B20: =B9/B16
A21: Quick Ratio                         B21: =(B9-B7-B8)/B16
A22: Cash Ratio                          B22: =(B4+B5)/B16

A25: Revenue                             B25: 420
A26: Cost of Goods Sold                  B26: 340
A27: Operating Expenses                  B27: 46
A28: Depreciation (non-cash)             B28: 24
A29: Receivables (prior year)            B29: 96
A30: Inventory (prior year)              B30: 82
A31: Payables (prior year)               B31: 38

A34: DSO (days)                          B34: =((B6+B29)/2)/B25*365
A35: DIO (days)                          B35: =((B7+B30)/2)/B26*365
A36: DPO (days)                          B36: =((B14+B31)/2)/B26*365
A37: CASH CONVERSION CYCLE               B37: =B34+B35-B36

A40: Daily Cash Operating Expenditure    B40: =(B26+B27-B28)/365
A41: Defensive Interval (days)           B41: =(B4+B5+B6)/B40

A43: HAIRCUTS FROM THE NOTES
A44: Receivables aged over 180 days      B44: 46
A45: Inventory aged over 12 months       B45: 38
A46: Deposits not realisable < 12m       B46: 15
A47: Unlisted related-party placement    B47: 4
A48: LC / acceptances due < 12m          B48: 22

A51: Adjusted Current Assets             B51: =B9-B44-B45-B46-B47
A52: Adjusted Current Liabilities        B52: =B16+B48
A53: ADJUSTED CURRENT RATIO              B53: =B51/B52
A54: Adjusted Quick Ratio                B54: =(B51-(B7-B45))/B52
A55: Adjusted Defensive Interval         B55: =(B4+(B5-B47)+(B6-B44))/B40

A58: Debt Maturing within 12 Months      B58: =B12+B13
A59: Cash Cover of that Debt (%)         B59: =B4/B58*100

A61: VERDICT
B61: =IF(AND(B53>=1.5,B22>=0.2),"STRONG",
        IF(B53>=1,"ROLLOVER-DEPENDENT","FRAGILE"))
\`\`\`

**B20 reads 2.10. B53 reads 1.04. Put them in the same view and never look at B20 alone again.**

**Rows 44 to 48 are the entire value of this dashboard.** They are also the only rows a broker's summary sheet will not give you. If you cannot fill them, you have not read the annual report, and the adjusted ratio in B53 is not adjusted — it is just the reported ratio wearing a different label. **A dashboard with zeros in rows 44–48 is worse than no dashboard, because it produces false confidence with the appearance of rigour.**

**Three uses beyond the single-year snapshot.**

Build the same sheet for five consecutive years and watch B20 and B53 diverge. **A widening gap between reported and adjusted is the clearest early-warning signal in fundamental analysis of a Bangladeshi manufacturer** — it means the stale assets are accumulating faster than the good ones.

Set B44 and B45 to zero and see B53 jump back toward 2.10. That is exactly the analysis a screener performs, and now you can see precisely what it is assuming.

Finally, add a row: B58 divided by B37 × 365, giving debt-due as a multiple of one full cash conversion cycle's financing need. For Company T that is 70 ÷ 143.8 = 0.49. **Half of the permanent working capital hole comes up for renewal within twelve months.** That single figure explains more about the risk in this share than the P/E, the dividend yield and the chart combined.`,
      bn: `\`\`\`
A3:  চলতি সম্পদ
A4:  নগদ ও নগদ সমতুল্য                   B4: 6
A5:  স্বল্পমেয়াদি বিনিয়োগ                B5: 4
A6:  বাণিজ্যিক প্রাপ্য                    B6: 118
A7:  মজুদ                                B7: 95
A8:  অগ্রিম, জামানত ও অগ্রিম পরিশোধ       B8: 25
A9:  মোট চলতি সম্পদ                      B9: =SUM(B4:B8)

A11: চলতি দায়
A12: স্বল্পমেয়াদি ব্যাংক ঋণ              B12: 55
A13: দীর্ঘমেয়াদি ঋণের চলতি কিস্তি         B13: 15
A14: বাণিজ্যিক প্রদেয়                    B14: 42
A15: অর্জিত ব্যয় ও অন্যান্য              B15: 6
A16: মোট চলতি দায়                       B16: =SUM(B12:B15)

A19: কার্যকরী মূলধন                      B19: =B9-B16
A20: চলতি অনুপাত                         B20: =B9/B16
A21: ত্বরিত অনুপাত                       B21: =(B9-B7-B8)/B16
A22: নগদ অনুপাত                          B22: =(B4+B5)/B16

A25: রাজস্ব                              B25: 420
A26: বিক্রীত পণ্যের ব্যয়                 B26: 340
A27: পরিচালন ব্যয়                        B27: 46
A28: অবচয় (অ-নগদ)                       B28: 24
A29: প্রাপ্য (পূর্ববর্তী বছর)             B29: 96
A30: মজুদ (পূর্ববর্তী বছর)               B30: 82
A31: প্রদেয় (পূর্ববর্তী বছর)             B31: 38

A34: DSO (দিন)                          B34: =((B6+B29)/2)/B25*365
A35: DIO (দিন)                          B35: =((B7+B30)/2)/B26*365
A36: DPO (দিন)                          B36: =((B14+B31)/2)/B26*365
A37: নগদ রূপান্তর চক্র                    B37: =B34+B35-B36

A40: দৈনিক নগদ পরিচালন ব্যয়              B40: =(B26+B27-B28)/365
A41: প্রতিরক্ষামূলক ব্যবধান (দিন)          B41: =(B4+B5+B6)/B40

A43: নোট থেকে ছাঁটাই
A44: ১৮০ দিনের বেশি পুরোনো প্রাপ্য        B44: 46
A45: ১২ মাসের বেশি পুরোনো মজুদ            B45: 38
A46: ১২ মাসে অনাদায়যোগ্য জামানত          B46: 15
A47: অতালিকাভুক্ত সম্পর্কিত-পক্ষ প্লেসমেন্ট B47: 4
A48: ১২ মাসে দেয় LC / অ্যাকসেপ্ট্যান্স    B48: 22

A51: সমন্বিত চলতি সম্পদ                   B51: =B9-B44-B45-B46-B47
A52: সমন্বিত চলতি দায়                    B52: =B16+B48
A53: সমন্বিত চলতি অনুপাত                  B53: =B51/B52
A54: সমন্বিত ত্বরিত অনুপাত                B54: =(B51-(B7-B45))/B52
A55: সমন্বিত প্রতিরক্ষামূলক ব্যবধান        B55: =(B4+(B5-B47)+(B6-B44))/B40

A58: বারো মাসে পরিশোধযোগ্য ঋণ            B58: =B12+B13
A59: ঐ ঋণের নগদ আচ্ছাদন (%)              B59: =B4/B58*100

A61: রায়
B61: =IF(AND(B53>=1.5,B22>=0.2),"STRONG",
        IF(B53>=1,"ROLLOVER-DEPENDENT","FRAGILE"))
\`\`\`

**B20 দেখায় ২.১০। B53 দেখায় ১.০৪। এদের একই দৃশ্যে রাখুন এবং আর কখনো একা B20 দেখবেন না।**

**৪৪ থেকে ৪৮ নং সারিই এই ড্যাশবোর্ডের সমগ্র মূল্য।** এগুলোই একমাত্র সারি যা ব্রোকারের সারসংক্ষেপ শিট আপনাকে দেবে না। এগুলো ভরতে না পারলে আপনি বার্ষিক প্রতিবেদন পড়েননি, এবং B53-এর সমন্বিত অনুপাতটি সমন্বিত নয় — সেটি ভিন্ন লেবেল পরা রিপোর্টকৃত অনুপাতই। **৪৪–৪৮ সারিতে শূন্যসহ একটি ড্যাশবোর্ড ড্যাশবোর্ড না থাকার চেয়েও খারাপ, কারণ তা কঠোরতার চেহারা নিয়ে মিথ্যা আত্মবিশ্বাস তৈরি করে।**

**এক-বছরের স্ন্যাপশটের বাইরে তিনটি ব্যবহার।**

টানা পাঁচ বছরের জন্য একই শিট বানান এবং দেখুন B20 ও B53 কীভাবে দূরে সরে যায়। **রিপোর্টকৃত ও সমন্বিতের মধ্যে চওড়া হতে থাকা ফাঁকই একজন বাংলাদেশি প্রস্তুতকারকের মৌল বিশ্লেষণে সবচেয়ে স্পষ্ট পূর্বসতর্কতা সংকেত** — এর মানে বাসি সম্পদ ভালোগুলোর চেয়ে দ্রুত জমছে।

B44 ও B45-এ শূন্য বসিয়ে দেখুন B53 আবার ২.১০-এর দিকে লাফিয়ে ওঠে। ঠিক এই বিশ্লেষণই একটি স্ক্রিনার করে, এবং এখন আপনি নিখুঁতভাবে দেখতে পাচ্ছেন সে কী ধরে নিচ্ছে।

শেষে, একটি সারি যোগ করুন: B58 ভাগ B37 × ৩৬৫, যা এক পূর্ণ নগদ রূপান্তর চক্রের অর্থায়ন প্রয়োজনের গুণিতক হিসেবে দেয় ঋণ দেখায়। কোম্পানি T-এর জন্য তা ৭০ ÷ ১৪৩.৮ = ০.৪৯। **স্থায়ী কার্যকরী মূলধনের গর্তের অর্ধেক বারো মাসের মধ্যে নবায়নের জন্য আসে।** এই একটিমাত্র সংখ্যা এই শেয়ারের ঝুঁকি সম্পর্কে P/E, লভ্যাংশ ফলন ও চার্ট — সব মিলিয়ে যা বলে তার চেয়ে বেশি বলে।`,
    },

    python: {
      en: `\`\`\`python
"""
Chapter 14 - Liquidity ratios, the cash conversion cycle, and the
adjusted current ratio. Educational. All figures in BDT crore.
"""
from dataclasses import dataclass


@dataclass
class Liquidity:
    """One company-year balance sheet, current section, plus flow data."""
    name: str
    cash: float
    marketable_securities: float
    receivables: float
    inventory: float
    prepayments: float
    short_term_debt: float
    current_portion_ltd: float
    payables: float
    accrued_other: float

    revenue: float
    cogs: float
    operating_expenses: float
    depreciation: float
    receivables_prior: float
    inventory_prior: float
    payables_prior: float

    # haircuts discovered in the notes
    stale_receivables: float = 0.0
    stale_inventory: float = 0.0
    non_current_prepayments: float = 0.0
    illiquid_investments: float = 0.0
    undisclosed_current_obligations: float = 0.0

    # --- headline ratios ------------------------------------------------
    @property
    def current_assets(self) -> float:
        return (self.cash + self.marketable_securities + self.receivables
                + self.inventory + self.prepayments)

    @property
    def current_liabilities(self) -> float:
        return (self.short_term_debt + self.current_portion_ltd
                + self.payables + self.accrued_other)

    @property
    def current_ratio(self) -> float:
        return self.current_assets / self.current_liabilities

    @property
    def quick_ratio(self) -> float:
        quick = self.current_assets - self.inventory - self.prepayments
        return quick / self.current_liabilities

    @property
    def cash_ratio(self) -> float:
        return (self.cash + self.marketable_securities) / self.current_liabilities

    @property
    def working_capital(self) -> float:
        return self.current_assets - self.current_liabilities

    # --- cash conversion cycle -------------------------------------------
    @property
    def dso(self) -> float:
        avg_ar = (self.receivables + self.receivables_prior) / 2
        return avg_ar / self.revenue * 365

    @property
    def dio(self) -> float:
        avg_inv = (self.inventory + self.inventory_prior) / 2
        return avg_inv / self.cogs * 365

    @property
    def dpo(self) -> float:
        avg_ap = (self.payables + self.payables_prior) / 2
        return avg_ap / self.cogs * 365

    @property
    def cash_conversion_cycle(self) -> float:
        return self.dso + self.dio - self.dpo

    # --- defensive interval ----------------------------------------------
    @property
    def daily_cash_opex(self) -> float:
        return (self.cogs + self.operating_expenses - self.depreciation) / 365

    @property
    def defensive_interval(self) -> float:
        defensive = self.cash + self.marketable_securities + self.receivables
        return defensive / self.daily_cash_opex

    @property
    def adjusted_defensive_interval(self) -> float:
        defensive = (self.cash
                     + (self.marketable_securities - self.illiquid_investments)
                     + (self.receivables - self.stale_receivables))
        return defensive / self.daily_cash_opex

    # --- adjusted ratios ---------------------------------------------------
    @property
    def adjusted_current_assets(self) -> float:
        return (self.current_assets - self.stale_receivables - self.stale_inventory
                - self.non_current_prepayments - self.illiquid_investments)

    @property
    def adjusted_current_liabilities(self) -> float:
        return self.current_liabilities + self.undisclosed_current_obligations

    @property
    def adjusted_current_ratio(self) -> float:
        return self.adjusted_current_assets / self.adjusted_current_liabilities

    @property
    def adjusted_quick_ratio(self) -> float:
        good_inventory = self.inventory - self.stale_inventory
        return ((self.adjusted_current_assets - good_inventory)
                / self.adjusted_current_liabilities)

    # --- rollover exposure -------------------------------------------------
    @property
    def debt_maturing_12m(self) -> float:
        return self.short_term_debt + self.current_portion_ltd

    @property
    def rollover_cover(self) -> float:
        return self.cash / self.debt_maturing_12m * 100

    def verdict(self) -> str:
        if self.adjusted_current_ratio >= 1.50 and self.cash_ratio >= 0.20:
            return "STRONG"
        if self.adjusted_current_ratio >= 1.00:
            return "ROLLOVER-DEPENDENT"
        return "FRAGILE"

    def report(self) -> None:
        print(f"=== {self.name} ===")
        print("-- Reported --")
        print(f"  Current assets       : {self.current_assets:,.0f} cr")
        print(f"  Current liabilities  : {self.current_liabilities:,.0f} cr")
        print(f"  Working capital      : {self.working_capital:,.0f} cr")
        print(f"  Current ratio        : {self.current_ratio:.2f}")
        print(f"  Quick ratio          : {self.quick_ratio:.2f}")
        print(f"  Cash ratio           : {self.cash_ratio:.2f}")
        print("-- Cash conversion cycle --")
        print(f"  DSO                  : {self.dso:.2f} days")
        print(f"  DIO                  : {self.dio:.2f} days")
        print(f"  DPO                  : {self.dpo:.2f} days")
        print(f"  CCC                  : {self.cash_conversion_cycle:.2f} days")
        print("-- Defensive interval --")
        print(f"  Daily cash opex      : {self.daily_cash_opex:.4f} cr/day")
        print(f"  Reported             : {self.defensive_interval:.2f} days")
        print(f"  Adjusted             : {self.adjusted_defensive_interval:.2f} days")
        print("-- After stripping the notes --")
        print(f"  Adj current assets   : {self.adjusted_current_assets:,.0f} cr")
        print(f"  Adj current liabs    : {self.adjusted_current_liabilities:,.0f} cr")
        print(f"  ADJ CURRENT RATIO    : {self.adjusted_current_ratio:.2f}")
        print(f"  Adj quick ratio      : {self.adjusted_quick_ratio:.2f}")
        print("-- Rollover exposure --")
        print(f"  Debt due within 12m  : {self.debt_maturing_12m:,.0f} cr")
        print(f"  Cash cover           : {self.rollover_cover:.1f}%")
        print(f"  VERDICT              : {self.verdict()}")


if __name__ == "__main__":
    co = Liquidity(
        name="Company T - textile archetype, FY2024",
        cash=6, marketable_securities=4, receivables=118,
        inventory=95, prepayments=25,
        short_term_debt=55, current_portion_ltd=15,
        payables=42, accrued_other=6,
        revenue=420, cogs=340, operating_expenses=46, depreciation=24,
        receivables_prior=96, inventory_prior=82, payables_prior=38,
        stale_receivables=46,
        stale_inventory=38,
        non_current_prepayments=15,
        illiquid_investments=4,
        undisclosed_current_obligations=22,
    )
    co.report()
\`\`\`

**Expected output:**

\`\`\`
=== Company T - textile archetype, FY2024 ===
-- Reported --
  Current assets       : 248 cr
  Current liabilities  : 118 cr
  Working capital      : 130 cr
  Current ratio        : 2.10
  Quick ratio          : 1.08
  Cash ratio           : 0.08
-- Cash conversion cycle --
  DSO                  : 92.99 days
  DIO                  : 95.01 days
  DPO                  : 42.94 days
  CCC                  : 145.05 days
-- Defensive interval --
  Daily cash opex      : 0.9918 cr/day
  Reported             : 129.06 days
  Adjusted             : 78.65 days
-- After stripping the notes --
  Adj current assets   : 145 cr
  Adj current liabs    : 140 cr
  ADJ CURRENT RATIO    : 1.04
  Adj quick ratio      : 0.63
-- Rollover exposure --
  Debt due within 12m  : 70 cr
  Cash cover           : 8.6%
  VERDICT              : ROLLOVER-DEPENDENT
\`\`\`

**Set the five haircut fields to zero and re-run.** The adjusted current ratio returns to 2.10 and the verdict becomes STRONG — no, it does not, because the cash ratio of 0.08 still fails the 0.20 test, so it becomes ROLLOVER-DEPENDENT at 2.10 instead. **That is the class doing something a screener cannot: refusing to call a company strong on the strength of assets it cannot spend.**

The default values of the haircut fields are zero for a reason. **A \`Liquidity\` object constructed without them is not a liquidity analysis. It is a restatement of the balance sheet.** The work of this chapter is entirely in filling those five fields from the notes.`,
      bn: `\`\`\`python
"""
অধ্যায় ১৪ — তারল্য অনুপাত, নগদ রূপান্তর চক্র, এবং সমন্বিত চলতি অনুপাত।
শিক্ষামূলক। সব সংখ্যা কোটি টাকায়।
"""
from dataclasses import dataclass


@dataclass
class Liquidity:
    """একটি কোম্পানি-বছরের স্থিতিপত্রের চলতি অংশ, সঙ্গে প্রবাহ তথ্য।"""
    name: str
    cash: float
    marketable_securities: float
    receivables: float
    inventory: float
    prepayments: float
    short_term_debt: float
    current_portion_ltd: float
    payables: float
    accrued_other: float

    revenue: float
    cogs: float
    operating_expenses: float
    depreciation: float
    receivables_prior: float
    inventory_prior: float
    payables_prior: float

    # নোটে পাওয়া ছাঁটাই
    stale_receivables: float = 0.0
    stale_inventory: float = 0.0
    non_current_prepayments: float = 0.0
    illiquid_investments: float = 0.0
    undisclosed_current_obligations: float = 0.0

    # --- শিরোনাম অনুপাত --------------------------------------------------
    @property
    def current_assets(self) -> float:
        return (self.cash + self.marketable_securities + self.receivables
                + self.inventory + self.prepayments)

    @property
    def current_liabilities(self) -> float:
        return (self.short_term_debt + self.current_portion_ltd
                + self.payables + self.accrued_other)

    @property
    def current_ratio(self) -> float:
        return self.current_assets / self.current_liabilities

    @property
    def quick_ratio(self) -> float:
        quick = self.current_assets - self.inventory - self.prepayments
        return quick / self.current_liabilities

    @property
    def cash_ratio(self) -> float:
        return (self.cash + self.marketable_securities) / self.current_liabilities

    @property
    def working_capital(self) -> float:
        return self.current_assets - self.current_liabilities

    # --- নগদ রূপান্তর চক্র ------------------------------------------------
    @property
    def dso(self) -> float:
        avg_ar = (self.receivables + self.receivables_prior) / 2
        return avg_ar / self.revenue * 365

    @property
    def dio(self) -> float:
        avg_inv = (self.inventory + self.inventory_prior) / 2
        return avg_inv / self.cogs * 365

    @property
    def dpo(self) -> float:
        avg_ap = (self.payables + self.payables_prior) / 2
        return avg_ap / self.cogs * 365

    @property
    def cash_conversion_cycle(self) -> float:
        return self.dso + self.dio - self.dpo

    # --- প্রতিরক্ষামূলক ব্যবধান -------------------------------------------
    @property
    def daily_cash_opex(self) -> float:
        return (self.cogs + self.operating_expenses - self.depreciation) / 365

    @property
    def defensive_interval(self) -> float:
        defensive = self.cash + self.marketable_securities + self.receivables
        return defensive / self.daily_cash_opex

    @property
    def adjusted_defensive_interval(self) -> float:
        defensive = (self.cash
                     + (self.marketable_securities - self.illiquid_investments)
                     + (self.receivables - self.stale_receivables))
        return defensive / self.daily_cash_opex

    # --- সমন্বিত অনুপাত ---------------------------------------------------
    @property
    def adjusted_current_assets(self) -> float:
        return (self.current_assets - self.stale_receivables - self.stale_inventory
                - self.non_current_prepayments - self.illiquid_investments)

    @property
    def adjusted_current_liabilities(self) -> float:
        return self.current_liabilities + self.undisclosed_current_obligations

    @property
    def adjusted_current_ratio(self) -> float:
        return self.adjusted_current_assets / self.adjusted_current_liabilities

    @property
    def adjusted_quick_ratio(self) -> float:
        good_inventory = self.inventory - self.stale_inventory
        return ((self.adjusted_current_assets - good_inventory)
                / self.adjusted_current_liabilities)

    # --- নবায়ন ঝুঁকি ------------------------------------------------------
    @property
    def debt_maturing_12m(self) -> float:
        return self.short_term_debt + self.current_portion_ltd

    @property
    def rollover_cover(self) -> float:
        return self.cash / self.debt_maturing_12m * 100

    def verdict(self) -> str:
        if self.adjusted_current_ratio >= 1.50 and self.cash_ratio >= 0.20:
            return "STRONG"
        if self.adjusted_current_ratio >= 1.00:
            return "ROLLOVER-DEPENDENT"
        return "FRAGILE"

    def report(self) -> None:
        print(f"=== {self.name} ===")
        print("-- Reported --")
        print(f"  Current assets       : {self.current_assets:,.0f} cr")
        print(f"  Current liabilities  : {self.current_liabilities:,.0f} cr")
        print(f"  Working capital      : {self.working_capital:,.0f} cr")
        print(f"  Current ratio        : {self.current_ratio:.2f}")
        print(f"  Quick ratio          : {self.quick_ratio:.2f}")
        print(f"  Cash ratio           : {self.cash_ratio:.2f}")
        print("-- Cash conversion cycle --")
        print(f"  DSO                  : {self.dso:.2f} days")
        print(f"  DIO                  : {self.dio:.2f} days")
        print(f"  DPO                  : {self.dpo:.2f} days")
        print(f"  CCC                  : {self.cash_conversion_cycle:.2f} days")
        print("-- Defensive interval --")
        print(f"  Daily cash opex      : {self.daily_cash_opex:.4f} cr/day")
        print(f"  Reported             : {self.defensive_interval:.2f} days")
        print(f"  Adjusted             : {self.adjusted_defensive_interval:.2f} days")
        print("-- After stripping the notes --")
        print(f"  Adj current assets   : {self.adjusted_current_assets:,.0f} cr")
        print(f"  Adj current liabs    : {self.adjusted_current_liabilities:,.0f} cr")
        print(f"  ADJ CURRENT RATIO    : {self.adjusted_current_ratio:.2f}")
        print(f"  Adj quick ratio      : {self.adjusted_quick_ratio:.2f}")
        print("-- Rollover exposure --")
        print(f"  Debt due within 12m  : {self.debt_maturing_12m:,.0f} cr")
        print(f"  Cash cover           : {self.rollover_cover:.1f}%")
        print(f"  VERDICT              : {self.verdict()}")


if __name__ == "__main__":
    co = Liquidity(
        name="Company T - textile archetype, FY2024",
        cash=6, marketable_securities=4, receivables=118,
        inventory=95, prepayments=25,
        short_term_debt=55, current_portion_ltd=15,
        payables=42, accrued_other=6,
        revenue=420, cogs=340, operating_expenses=46, depreciation=24,
        receivables_prior=96, inventory_prior=82, payables_prior=38,
        stale_receivables=46,
        stale_inventory=38,
        non_current_prepayments=15,
        illiquid_investments=4,
        undisclosed_current_obligations=22,
    )
    co.report()
\`\`\`

**প্রত্যাশিত ফলাফল:**

\`\`\`
=== Company T - textile archetype, FY2024 ===
-- Reported --
  Current assets       : 248 cr
  Current liabilities  : 118 cr
  Working capital      : 130 cr
  Current ratio        : 2.10
  Quick ratio          : 1.08
  Cash ratio           : 0.08
-- Cash conversion cycle --
  DSO                  : 92.99 days
  DIO                  : 95.01 days
  DPO                  : 42.94 days
  CCC                  : 145.05 days
-- Defensive interval --
  Daily cash opex      : 0.9918 cr/day
  Reported             : 129.06 days
  Adjusted             : 78.65 days
-- After stripping the notes --
  Adj current assets   : 145 cr
  Adj current liabs    : 140 cr
  ADJ CURRENT RATIO    : 1.04
  Adj quick ratio      : 0.63
-- Rollover exposure --
  Debt due within 12m  : 70 cr
  Cash cover           : 8.6%
  VERDICT              : ROLLOVER-DEPENDENT
\`\`\`

**পাঁচটি ছাঁটাই ক্ষেত্রে শূন্য বসিয়ে আবার চালান।** সমন্বিত চলতি অনুপাত ২.১০-এ ফিরে আসে এবং রায় হয় STRONG — না, হয় না, কারণ ০.০৮-এর নগদ অনুপাত এখনো ০.২০-এর পরীক্ষায় ব্যর্থ, তাই ২.১০-এ থেকেও রায় হয় ROLLOVER-DEPENDENT। **এখানেই ক্লাসটি এমন কিছু করছে যা একটি স্ক্রিনার পারে না: যে সম্পদ খরচ করা যায় না তার জোরে কোনো কোম্পানিকে শক্তিশালী বলতে অস্বীকার করছে।**

ছাঁটাই ক্ষেত্রগুলোর ডিফল্ট মান শূন্য — এবং তার কারণ আছে। **সেগুলো ছাড়া গঠিত একটি \`Liquidity\` অবজেক্ট কোনো তারল্য বিশ্লেষণ নয়। সেটি স্থিতিপত্রের পুনর্বিবৃতি মাত্র।** এই অধ্যায়ের কাজ সম্পূর্ণভাবেই ঐ পাঁচটি ক্ষেত্র নোট থেকে ভরার মধ্যে।`,
    },

    mistakes: {
      en: `1. **Treating "current ratio above 2.0" as a pass.** Company T reported 2.10 and was rollover-dependent at an adjusted 1.04. The threshold is inherited from a very different market with far shorter collection cycles and functioning receivables discounting. It does not transfer.

2. **Missing the inversion.** A deteriorating manufacturer accumulates unsold inventory and uncollected receivables, both of which are current assets. **The current ratio therefore rises as the business gets worse.** If you screen for "improving current ratio" you will systematically select dying companies. This is not a rare edge case; it is the standard failure mode of a textile or engineering company on the DSE.

3. **Computing DIO or DPO on revenue instead of COGS.** Inventory and payables are carried at cost, not at selling price. Using revenue as the denominator understates both figures by roughly the gross margin, which flatters the cash conversion cycle by weeks.

4. **Ignoring the contingent liabilities note.** Acceptances, LCs, bank guarantees and bill discounting with recourse are real twelve-month obligations that do not appear on the face of the balance sheet. For Company T they were BDT 22 crore — 19% of reported current liabilities. Omitting them is not conservatism; it is an error in the denominator.

5. **Assuming the working capital facility rolls.** It has rolled for eleven years, so it will roll again. This is the single most expensive assumption in Bangladeshi equity analysis. Chapter 5 established that lenders in this market act on their own constraints, not the borrower's merit.

6. **Reading a high defensive interval as safety when receivables are stale.** The reported 129 days for Company T assumed BDT 118 crore of receivables would be collected. BDT 46 crore of them were over 180 days old. The honest figure was 79 days, and even that assumes the rest collects on time.

7. **Comparing liquidity ratios across sectors.** A pharmaceutical company selling to distributors on 45-day terms and a textile mill selling to garment buyers on 120-day terms have structurally different cycles. Compare within sector, and compare against the company's own five-year history, which is more informative than either.

8. **Confusing profitability with survival.** Chapter 13's Company B was profitable on paper. Company T here is profitable too. **Profit is measured over a period. Obligations fall due on a date. A company dies on the date, not over the period.**`,
      bn: `১. **"চলতি অনুপাত ২.০-এর ওপরে" মানেই পাস ধরে নেওয়া।** কোম্পানি T রিপোর্ট করেছে ২.১০ এবং সমন্বিত ১.০৪-এ নবায়ন-নির্ভর ছিল। সীমাটি এমন এক ভিন্ন বাজার থেকে উত্তরাধিকারসূত্রে পাওয়া যেখানে আদায়ের চক্র অনেক ছোট এবং প্রাপ্য বাট্টাকরণ কার্যকর। এটি এখানে স্থানান্তরিত হয় না।

২. **উল্টো ব্যাপারটি এড়িয়ে যাওয়া।** অবনতিশীল প্রস্তুতকারক অবিক্রীত মজুদ ও অনাদায়ী প্রাপ্য জমায়, দুটোই চলতি সম্পদ। **তাই ব্যবসা খারাপ হওয়ার সঙ্গে সঙ্গে চলতি অনুপাত বাড়ে।** "উন্নতিশীল চলতি অনুপাত" দিয়ে স্ক্রিন করলে আপনি ব্যবস্থাগতভাবে মৃতপ্রায় কোম্পানি বাছাই করবেন। এটি বিরল কোনো প্রান্তিক ঘটনা নয়; ডিএসই-তে বস্ত্র বা প্রকৌশল কোম্পানির এটিই প্রমিত ব্যর্থতার ধরন।

৩. **DIO বা DPO বিক্রীত পণ্যের ব্যয়ের বদলে রাজস্বের ওপর গণনা করা।** মজুদ ও প্রদেয় ক্রয়মূল্যে ধরা হয়, বিক্রয়মূল্যে নয়। হর হিসেবে রাজস্ব ব্যবহার করলে দুটি সংখ্যাই মোটামুটি মোট মার্জিনের সমান কম দেখায়, যা নগদ রূপান্তর চক্রকে সপ্তাহখানেক সুন্দর করে দেখায়।

৪. **সম্ভাব্য দায় নোট উপেক্ষা করা।** অ্যাকসেপ্ট্যান্স, LC, ব্যাংক গ্যারান্টি ও রিকোর্সসহ বিল বাট্টাকরণ বাস্তব বারো-মাসী দায়, যা স্থিতিপত্রের মুখে আসে না। কোম্পানি T-এর ক্ষেত্রে তা ছিল ২২ কোটি টাকা — রিপোর্টকৃত চলতি দায়ের ১৯%। এগুলো বাদ দেওয়া রক্ষণশীলতা নয়; হরের একটি ভুল।

৫. **কার্যকরী মূলধন সুবিধাটি নবায়ন হবে ধরে নেওয়া।** এগারো বছর নবায়ন হয়েছে, তাই আবারও হবে। বাংলাদেশি ইকুইটি বিশ্লেষণে এটিই একক সবচেয়ে ব্যয়বহুল অনুমান। অধ্যায় ৫ প্রতিষ্ঠা করেছে এই বাজারের ঋণদাতারা নিজেদের সীমাবদ্ধতায় কাজ করেন, ঋণগ্রহীতার যোগ্যতায় নয়।

৬. **প্রাপ্য বাসি হলেও উচ্চ প্রতিরক্ষামূলক ব্যবধানকে নিরাপত্তা হিসেবে পড়া।** কোম্পানি T-এর রিপোর্টকৃত ১২৯ দিন ধরে নিয়েছিল ১১৮ কোটি টাকার প্রাপ্য আদায় হবে। এর ৪৬ কোটি টাকা ছিল ১৮০ দিনের বেশি পুরোনো। সৎ সংখ্যাটি ছিল ৭৯ দিন, আর সেটিও ধরে নেয় বাকিটা সময়মতো আদায় হবে।

৭. **খাতভেদে তারল্য অনুপাত তুলনা করা।** ৪৫ দিনের শর্তে পরিবেশকদের কাছে বিক্রি করা একটি ওষুধ কোম্পানি আর ১২০ দিনের শর্তে পোশাক ক্রেতাদের কাছে বিক্রি করা একটি বস্ত্রকলের চক্র কাঠামোগতভাবে ভিন্ন। খাতের ভেতরে তুলনা করুন, এবং কোম্পানির নিজস্ব পাঁচ বছরের ইতিহাসের সঙ্গে তুলনা করুন, যা দুটোর চেয়েই বেশি তথ্যবহুল।

৮. **লাভজনকতাকে টিকে থাকার সঙ্গে গুলিয়ে ফেলা।** অধ্যায় ১৩-এর কোম্পানি B কাগজে লাভজনক ছিল। এখানকার কোম্পানি T-ও লাভজনক। **মুনাফা মাপা হয় একটি সময়কাল জুড়ে। দায় পরিশোধযোগ্য হয় একটি তারিখে। কোম্পানি মরে তারিখে, সময়কাল জুড়ে নয়।**`,
    },

    tips: {
      en: `- **Read the receivables ageing schedule before you read anything else in the current assets section.** It is a mandatory disclosure. The single number that matters is the amount aged beyond 180 days and the provision held against it. If the provision is zero on a material aged balance, you have found the analysis.

- **Track the reported and adjusted current ratios side by side for five years.** The gap between them is the signal. A company where the gap widens from 0.2 to 1.1 over five years is accumulating dead assets on the balance sheet at an accelerating rate, and it will show up in a provision long before it shows up in the share price.

- **Compute the cash conversion cycle in taka, not days.** Days are abstract; BDT 144 crore of permanent financing need is not. Then compare it against the short-term debt on the balance sheet plus the contingencies. If the financing need exceeds the disclosed facilities, ask where the difference is coming from.

- **Check whether inventory growth is outrunning revenue growth**, using the same test as Chapter 13's F4 flag. It links the two chapters directly: unwritten-down inventory inflates profit *and* inflates the current ratio, from the same entry.

- **Look at the maturity profile, not just the amount.** Two companies with identical BDT 70 crore of short-term debt are not equally exposed if one has it spread across four banks with staggered renewal dates and the other has it concentrated with a single lender renewing in March.

- **Watch DPO rising sharply.** A jump in days payable is usually presented as improved supplier negotiation. It is far more often a company that has stopped paying on time. Cross-check against the trade payables note and any disclosure of overdue amounts.

- **For banks and NBFIs, discard this entire framework.** A bank's balance sheet has no meaningful current/non-current split; deposits are legally on demand and behaviourally sticky. Bank liquidity is analysed through CRR, SLR, the advance-deposit ratio and the liquidity coverage ratio. Applying a current ratio to a listed bank is a category error, and it is made regularly in Dhaka research notes.

- **When the verdict is ROLLOVER-DEPENDENT, size the position as though you cannot exit.** Chapter 6 established that DSE downturns come with floor prices and locked circuits. A liquidity event in a mid-cap textile scrip is exactly the news that produces three consecutive floor-price openings.`,
      bn: `- **চলতি সম্পদ অংশের আর কিছু পড়ার আগে প্রাপ্যের বয়সভিত্তিক তালিকা পড়ুন।** এটি একটি বাধ্যতামূলক প্রকাশ। যে একটিমাত্র সংখ্যা গুরুত্বপূর্ণ তা হলো ১৮০ দিনের বেশি পুরোনো অঙ্ক এবং তার বিপরীতে রাখা সঞ্চিতি। উল্লেখযোগ্য পুরোনো ব্যালান্সে সঞ্চিতি শূন্য হলে আপনি বিশ্লেষণটি পেয়ে গেছেন।

- **পাঁচ বছরের রিপোর্টকৃত ও সমন্বিত চলতি অনুপাত পাশাপাশি অনুসরণ করুন।** এদের মধ্যকার ফাঁকই সংকেত। যে কোম্পানিতে ফাঁক পাঁচ বছরে ০.২ থেকে ১.১-এ চওড়া হয়, সে ত্বরিত হারে স্থিতিপত্রে মৃত সম্পদ জমাচ্ছে, এবং তা শেয়ারদরে দেখা দেওয়ার অনেক আগেই একটি সঞ্চিতিতে দেখা দেবে।

- **নগদ রূপান্তর চক্র দিনে নয়, টাকায় গণনা করুন।** দিন বিমূর্ত; ১৪৪ কোটি টাকার স্থায়ী অর্থায়ন প্রয়োজন নয়। তারপর তা স্থিতিপত্রের স্বল্পমেয়াদি ঋণ ও সম্ভাব্য দায়ের সঙ্গে তুলনা করুন। অর্থায়ন প্রয়োজন প্রকাশিত সুবিধাকে ছাড়িয়ে গেলে জিজ্ঞেস করুন পার্থক্যটা কোথা থেকে আসছে।

- **মজুদ প্রবৃদ্ধি রাজস্ব প্রবৃদ্ধিকে ছাড়াচ্ছে কি না দেখুন**, অধ্যায় ১৩-এর F4 পতাকার একই পরীক্ষা ব্যবহার করে। এটি দুই অধ্যায়কে সরাসরি যুক্ত করে: অ-অবলোপিত মজুদ মুনাফা স্ফীত করে *এবং* চলতি অনুপাত স্ফীত করে, একই এন্ট্রি থেকে।

- **কেবল অঙ্ক নয়, মেয়াদের বিন্যাস দেখুন।** ৭০ কোটি টাকার অভিন্ন স্বল্পমেয়াদি ঋণের দুটি কোম্পানি সমানভাবে উন্মুক্ত নয়, যদি একটির ঋণ ভিন্ন নবায়ন তারিখে চারটি ব্যাংকে ছড়ানো থাকে আর অন্যটির মার্চে নবায়নযোগ্য একক ঋণদাতায় কেন্দ্রীভূত থাকে।

- **DPO তীব্রভাবে বাড়ছে কি না লক্ষ রাখুন।** প্রদেয় দিনের লাফকে সাধারণত উন্নত সরবরাহকারী দর-কষাকষি হিসেবে উপস্থাপন করা হয়। বহুক্ষেত্রে এটি বরং এমন একটি কোম্পানি যে সময়মতো শোধ করা বন্ধ করে দিয়েছে। বাণিজ্যিক প্রদেয় নোট ও বকেয়া অঙ্কের যেকোনো প্রকাশের সঙ্গে মিলিয়ে দেখুন।

- **ব্যাংক ও এনবিএফআই-এর জন্য এই পুরো কাঠামো বাদ দিন।** ব্যাংকের স্থিতিপত্রে অর্থবহ চলতি/অ-চলতি বিভাজন নেই; আমানত আইনত চাহিবামাত্র দেয় এবং আচরণগতভাবে স্থিতিশীল। ব্যাংকের তারল্য বিশ্লেষণ হয় CRR, SLR, অগ্রিম-আমানত অনুপাত ও তারল্য আচ্ছাদন অনুপাত দিয়ে। একটি তালিকাভুক্ত ব্যাংকে চলতি অনুপাত প্রয়োগ করা একটি শ্রেণিগত ভুল, এবং ঢাকার গবেষণা নোটে এটি নিয়মিত ঘটে।

- **রায় ROLLOVER-DEPENDENT হলে পজিশনের আকার এমনভাবে নিন যেন আপনি বেরোতে পারবেন না।** অধ্যায় ৬ প্রতিষ্ঠা করেছে ডিএসই-র পতন আসে ফ্লোর প্রাইস ও আটকানো সার্কিটসহ। একটি মিড-ক্যাপ বস্ত্র স্ক্রিপে তারল্য ঘটনা ঠিক সেই খবর যা টানা তিন দিন ফ্লোর-প্রাইসে খোলা তৈরি করে।`,
    },

    exercises: {
      en: `1. Pick any DSE-listed textile company. Compute the current, quick and cash ratios from its most recent balance sheet. Write all three on one line. In two sentences, explain what the collapse from the first to the third tells you.

2. For the same company, find the receivables ageing schedule and the inventory ageing note. Compute the adjusted current ratio using the method in the manual block. Report both figures and the gap between them.

3. Compute DSO, DIO, DPO and the cash conversion cycle for that company for three consecutive years. State whether the cycle is lengthening or shortening, and identify which of the three components is driving the change.

4. Convert the most recent cash conversion cycle into a taka financing requirement. Compare it against the sum of short-term bank loans, current portion of long-term debt, and the contingent liabilities note. Report whether the disclosed financing covers the requirement.

5. Find the contingent liabilities note for one DSE-listed manufacturer. List every item maturing within twelve months. Add them to current liabilities and recompute the current ratio. Report the change in basis points.

6. Take a company whose current ratio improved over the last three years while its revenue declined. Determine from the accounts whether the improvement came from rising cash, or from rising inventory and receivables. Write one paragraph on what this implies, referring explicitly to the inversion described in this chapter.

7. For any two DSE-listed companies in different sectors — one pharma, one textile — compute the cash conversion cycle for both. Explain in three sentences why comparing the two numbers directly is invalid, and state what comparison would be valid instead.`,
      bn: `১. যেকোনো ডিএসই-তালিকাভুক্ত বস্ত্র কোম্পানি বাছুন। তার সাম্প্রতিকতম স্থিতিপত্র থেকে চলতি, ত্বরিত ও নগদ অনুপাত গণনা করুন। তিনটিই এক লাইনে লিখুন। দুই বাক্যে ব্যাখ্যা করুন প্রথম থেকে তৃতীয়ে ধসটি আপনাকে কী বলে।

২. একই কোম্পানির জন্য প্রাপ্যের বয়সভিত্তিক তালিকা ও মজুদের বয়স নোট খুঁজুন। ম্যানুয়াল ব্লকের পদ্ধতি ব্যবহার করে সমন্বিত চলতি অনুপাত গণনা করুন। দুটি সংখ্যা এবং এদের মধ্যকার ফাঁক জানান।

৩. ঐ কোম্পানির জন্য টানা তিন বছরের DSO, DIO, DPO ও নগদ রূপান্তর চক্র গণনা করুন। চক্রটি দীর্ঘ হচ্ছে না সংক্ষিপ্ত হচ্ছে তা বলুন, এবং তিনটি উপাদানের কোনটি পরিবর্তন চালাচ্ছে তা চিহ্নিত করুন।

৪. সাম্প্রতিকতম নগদ রূপান্তর চক্রকে টাকার অঙ্কে অর্থায়ন প্রয়োজনে রূপান্তর করুন। এটিকে স্বল্পমেয়াদি ব্যাংক ঋণ, দীর্ঘমেয়াদি ঋণের চলতি কিস্তি ও সম্ভাব্য দায় নোটের যোগফলের সঙ্গে তুলনা করুন। প্রকাশিত অর্থায়ন প্রয়োজনটি ঢাকে কি না জানান।

৫. একটি ডিএসই-তালিকাভুক্ত প্রস্তুতকারকের সম্ভাব্য দায় নোট খুঁজুন। বারো মাসের মধ্যে পরিশোধযোগ্য প্রতিটি আইটেম তালিকাভুক্ত করুন। সেগুলো চলতি দায়ে যোগ করে চলতি অনুপাত পুনরায় গণনা করুন। বেসিস পয়েন্টে পরিবর্তন জানান।

৬. এমন একটি কোম্পানি নিন যার চলতি অনুপাত গত তিন বছরে উন্নত হয়েছে অথচ রাজস্ব কমেছে। হিসাব থেকে নির্ধারণ করুন উন্নতিটি এসেছে বাড়তি নগদ থেকে, নাকি বাড়তি মজুদ ও প্রাপ্য থেকে। এটি কী বোঝায় তা নিয়ে এক অনুচ্ছেদ লিখুন, এই অধ্যায়ে বর্ণিত উল্টো ব্যাপারটির স্পষ্ট উল্লেখসহ।

৭. ভিন্ন খাতের যেকোনো দুটি ডিএসই-তালিকাভুক্ত কোম্পানির জন্য — একটি ওষুধ, একটি বস্ত্র — দুটোরই নগদ রূপান্তর চক্র গণনা করুন। তিন বাক্যে ব্যাখ্যা করুন কেন দুটি সংখ্যার সরাসরি তুলনা অবৈধ, এবং এর বদলে কোন তুলনা বৈধ হতো তা বলুন।`,
    },

    summary: {
      en: `- Liquidity asks a different question from profitability: not "did it earn," but "can it pay on the date." A profitable company with 145 days of cash conversion cycle and BDT 6 crore of cash can fail while reporting a profit.
- The three ratios narrow progressively: current (everything), quick (removes inventory and prepayments), cash (only what can be spent this week). Company T read 2.10, 1.08 and 0.08 on the same balance sheet.
- **The current ratio systematically flatters, and always in the same direction.** Stale inventory and stale receivables inflate the numerator; off-balance-sheet obligations are missing from the denominator; non-current items misclassified as current inflate the numerator again. Treat any unadjusted current ratio as an upper bound.
- **The inversion is the critical point: as a manufacturer deteriorates, unsold inventory and uncollected receivables accumulate, and the current ratio rises.** Screening for an improving current ratio in a shrinking business selects for failure.
- Stripping Company T's disclosed ageing schedules and contingencies took the current ratio from **2.10 to 1.04**, the quick ratio from 1.08 to 0.63, and the defensive interval from 129 to 79 days. Nothing was restated. Somebody simply read the notes.
- The cash conversion cycle — DSO + DIO − DPO — was 145.05 days, equal to roughly BDT 144 crore of permanent financing need. Convert cycles to taka; days are abstract, financing requirements are not.
- **Rollover risk is the dominant DSE liquidity risk.** BDT 70 crore of debt matured within twelve months against BDT 6 crore of cash — 8.6% cover. Chapter 5 established that lenders in this market withdraw credit for their own reasons: exposure caps, Bangladesh Bank tightening, sector reviews. A rollover-dependent company is solvent at the discretion of a credit committee.
- Discard this framework entirely for banks and NBFIs; their liquidity is a CRR, SLR, ADR and LCR question.
- **Discipline established:** never accept a reported current ratio. Deduct what the ageing schedules say cannot be collected, add what the contingencies note says is owed, and read the number that survives. If that number is between 1.00 and 1.50, you are not analysing a balance sheet — you are underwriting a bank's future decision, unpaid and uninformed.`,
      bn: `- তারল্য লাভজনকতার চেয়ে ভিন্ন প্রশ্ন করে: "আয় করেছে কি" নয়, বরং "তারিখে শোধ করতে পারবে কি"। ১৪৫ দিনের নগদ রূপান্তর চক্র ও ৬ কোটি টাকা নগদসহ একটি লাভজনক কোম্পানি মুনাফা রিপোর্ট করতে করতেই ব্যর্থ হতে পারে।
- তিনটি অনুপাত ক্রমান্বয়ে সংকীর্ণ হয়: চলতি (সবকিছু), ত্বরিত (মজুদ ও অগ্রিম পরিশোধ বাদ), নগদ (কেবল যা এ সপ্তাহে খরচ করা যায়)। একই স্থিতিপত্রে কোম্পানি T দেখিয়েছে ২.১০, ১.০৮ ও ০.০৮।
- **চলতি অনুপাত ব্যবস্থাগতভাবে সুন্দর দেখায়, এবং সবসময় একই দিকে।** বাসি মজুদ ও বাসি প্রাপ্য লবকে স্ফীত করে; স্থিতিপত্র-বহির্ভূত দায় হর থেকে অনুপস্থিত; চলতি হিসেবে ভুল শ্রেণীবদ্ধ অ-চলতি আইটেম আবার লব স্ফীত করে। যেকোনো অসমন্বিত চলতি অনুপাতকে ঊর্ধ্বসীমা হিসেবে গণ্য করুন।
- **উল্টো ব্যাপারটিই গুরুত্বপূর্ণ বিন্দু: প্রস্তুতকারকের অবনতির সঙ্গে সঙ্গে অবিক্রীত মজুদ ও অনাদায়ী প্রাপ্য জমে, এবং চলতি অনুপাত বাড়ে।** সংকুচিত ব্যবসায় উন্নতিশীল চলতি অনুপাত দিয়ে স্ক্রিন করা মানে ব্যর্থতাকেই বাছাই করা।
- কোম্পানি T-এর প্রকাশিত বয়সভিত্তিক তালিকা ও সম্ভাব্য দায় ছেঁটে চলতি অনুপাত **২.১০ থেকে ১.০৪**-এ, ত্বরিত অনুপাত ১.০৮ থেকে ০.৬৩-এ, এবং প্রতিরক্ষামূলক ব্যবধান ১২৯ থেকে ৭৯ দিনে নেমেছে। কিছুই পুনর্বিবৃত হয়নি। কেবল কেউ একজন নোটগুলো পড়েছেন।
- নগদ রূপান্তর চক্র — DSO + DIO − DPO — ছিল ১৪৫.০৫ দিন, যা মোটামুটি ১৪৪ কোটি টাকার স্থায়ী অর্থায়ন প্রয়োজনের সমান। চক্রকে টাকায় রূপান্তর করুন; দিন বিমূর্ত, অর্থায়ন প্রয়োজন নয়।
- **নবায়ন ঝুঁকিই ডিএসই-র প্রধান তারল্য ঝুঁকি।** ৬ কোটি টাকা নগদের বিপরীতে ৭০ কোটি টাকার ঋণ বারো মাসে পরিশোধযোগ্য — ৮.৬% আচ্ছাদন। অধ্যায় ৫ প্রতিষ্ঠা করেছে এই বাজারের ঋণদাতারা নিজেদের কারণে ঋণ প্রত্যাহার করেন: এক্সপোজার সীমা, বাংলাদেশ ব্যাংকের কড়াকড়ি, খাত পর্যালোচনা। একটি নবায়ন-নির্ভর কোম্পানি একটি ঋণ কমিটির বিবেচনায় স্বচ্ছল।
- ব্যাংক ও এনবিএফআই-এর জন্য এই কাঠামো সম্পূর্ণ বাদ দিন; তাদের তারল্য CRR, SLR, ADR ও LCR-এর প্রশ্ন।
- **প্রতিষ্ঠিত শৃঙ্খলা:** কখনো রিপোর্টকৃত চলতি অনুপাত মেনে নেবেন না। বয়সভিত্তিক তালিকা যা আদায় অযোগ্য বলে তা বিয়োগ করুন, সম্ভাব্য দায় নোট যা দেয় বলে তা যোগ করুন, এবং যে সংখ্যাটি টিকে থাকে তা পড়ুন। ঐ সংখ্যা ১.০০ ও ১.৫০-এর মাঝে হলে আপনি স্থিতিপত্র বিশ্লেষণ করছেন না — আপনি একটি ব্যাংকের ভবিষ্যৎ সিদ্ধান্তের আন্ডাররাইটিং করছেন, বিনা পারিশ্রমিকে ও বিনা তথ্যে।`,
    },
  },

  interview: [
    {
      q: {
        en: 'Why can the current ratio rise while a business deteriorates?',
        bn: 'ব্যবসার অবনতি হতে থাকলেও চলতি অনুপাত কেন বাড়তে পারে?',
      },
      a: {
        en: 'Because the assets that accumulate when a business fails are current assets. Unsold inventory builds up and is not written down; receivables age and are not provided against. Both sit in the numerator of the current ratio at full carrying value. The denominator does not grow at the same rate, so the ratio improves. A rising current ratio alongside falling revenue is therefore a warning signal, not a reassurance, and it is the standard failure pattern for a DSE-listed textile or engineering company.',
        bn: 'কারণ ব্যবসা ব্যর্থ হলে যে সম্পদগুলো জমে সেগুলো চলতি সম্পদ। অবিক্রীত মজুদ জমতে থাকে এবং অবলোপন করা হয় না; প্রাপ্য পুরোনো হয় এবং সঞ্চিতি রাখা হয় না। দুটিই পূর্ণ বহনমূল্যে চলতি অনুপাতের লবে বসে থাকে। হর একই হারে বাড়ে না, তাই অনুপাত উন্নত হয়। তাই রাজস্ব পড়তে থাকা অবস্থায় বেড়ে চলা চলতি অনুপাত একটি সতর্কতা সংকেত, আশ্বাস নয়, এবং ডিএসই-তালিকাভুক্ত বস্ত্র বা প্রকৌশল কোম্পানির এটিই প্রমিত ব্যর্থতার ধরন।',
      },
    },
    {
      q: {
        en: 'A company reports a current ratio of 2.10. What five things do you check before accepting it?',
        bn: 'একটি কোম্পানি ২.১০ চলতি অনুপাত রিপোর্ট করেছে। মেনে নেওয়ার আগে আপনি কোন পাঁচটি বিষয় যাচাই করবেন?',
      },
      a: {
        en: 'First, the receivables ageing schedule — how much is beyond 180 days and what provision is held. Second, inventory ageing and whether any write-down was taken. Third, what is inside advances, deposits and prepayments, since long-term security deposits are routinely classified as current. Fourth, whether short-term investments are actually marketable or are unlisted related-party placements. Fifth, the contingent liabilities note for acceptances, LCs and guarantees maturing within twelve months that do not appear on the face of the balance sheet. In the worked case in this chapter those five checks took a reported 2.10 to an adjusted 1.04.',
        bn: 'প্রথম, প্রাপ্যের বয়সভিত্তিক তালিকা — কতটা ১৮০ দিনের বেশি এবং কী সঞ্চিতি রাখা আছে। দ্বিতীয়, মজুদের বয়স এবং কোনো অবলোপন নেওয়া হয়েছে কি না। তৃতীয়, অগ্রিম, জামানত ও অগ্রিম পরিশোধের ভেতরে কী আছে, যেহেতু দীর্ঘমেয়াদি জামানত নিয়মিতভাবে চলতি হিসেবে শ্রেণীবদ্ধ হয়। চতুর্থ, স্বল্পমেয়াদি বিনিয়োগ আসলেই বাজারযোগ্য নাকি অতালিকাভুক্ত সম্পর্কিত-পক্ষ প্লেসমেন্ট। পঞ্চম, বারো মাসের মধ্যে পরিশোধযোগ্য অ্যাকসেপ্ট্যান্স, LC ও গ্যারান্টির জন্য সম্ভাব্য দায় নোট, যা স্থিতিপত্রের মুখে আসে না। এই অধ্যায়ের নিরূপিত ঘটনায় এই পাঁচটি যাচাই রিপোর্টকৃত ২.১০-কে সমন্বিত ১.০৪-এ নামিয়েছে।',
      },
    },
    {
      q: {
        en: 'Why is DIO computed on cost of goods sold rather than revenue?',
        bn: 'DIO কেন রাজস্বের বদলে বিক্রীত পণ্যের ব্যয়ের ওপর গণনা করা হয়?',
      },
      a: {
        en: 'Because inventory is carried at cost, not at selling price. Dividing a cost-based balance by a revenue-based flow mixes two different valuation bases and understates the number of days by roughly the gross margin. The same argument applies to DPO, since payables are recorded at the cost of what was purchased. Only DSO uses revenue, because receivables are recorded at the invoiced selling price.',
        bn: 'কারণ মজুদ ক্রয়মূল্যে ধরা হয়, বিক্রয়মূল্যে নয়। ক্রয়মূল্যভিত্তিক একটি ব্যালান্সকে রাজস্বভিত্তিক একটি প্রবাহ দিয়ে ভাগ করলে দুটি ভিন্ন মূল্যায়ন ভিত্তি মিশে যায় এবং দিনসংখ্যা মোটামুটি মোট মার্জিনের সমান কম দেখায়। DPO-র ক্ষেত্রেও একই যুক্তি, যেহেতু প্রদেয় যা কেনা হয়েছে তার ক্রয়মূল্যে লিপিবদ্ধ হয়। কেবল DSO রাজস্ব ব্যবহার করে, কারণ প্রাপ্য চালানকৃত বিক্রয়মূল্যে লিপিবদ্ধ হয়।',
      },
    },
    {
      q: {
        en: 'Explain rollover risk and why it is the dominant liquidity risk for a DSE-listed manufacturer.',
        bn: 'নবায়ন ঝুঁকি ব্যাখ্যা করুন এবং একজন ডিএসই-তালিকাভুক্ত প্রস্তুতকারকের জন্য এটি কেন প্রধান তারল্য ঝুঁকি তা বলুন।',
      },
      a: {
        en: 'Most DSE manufacturers fund a long cash conversion cycle with 90 to 180 day bank facilities that are renewed continuously — cash credit, overdraft, LTR, packing credit. Everyone treats them as permanent, but legally they mature within twelve months. Chapter 5 established that lenders in this market withdraw credit for reasons unrelated to the borrower: a bank breaching its 25% capital-market exposure cap, a Bangladesh Bank tightening cycle, a sector-wide classification review. When the roll stops, the full amount becomes due in cash on a date, against a company holding a fraction of it. In the worked case, BDT 70 crore matured within twelve months against BDT 6 crore of cash — 8.6% cover. The company is solvent only while a credit committee keeps saying yes, which is a relationship, not a balance sheet fact.',
        bn: 'বেশিরভাগ ডিএসই প্রস্তুতকারক দীর্ঘ নগদ রূপান্তর চক্রে অর্থায়ন করেন ৯০ থেকে ১৮০ দিনের ব্যাংক সুবিধা দিয়ে, যা ধারাবাহিকভাবে নবায়ন হয় — ক্যাশ ক্রেডিট, ওভারড্রাফট, LTR, প্যাকিং ক্রেডিট। সবাই এগুলোকে স্থায়ী ধরে নেন, কিন্তু আইনত এগুলো বারো মাসের মধ্যে পরিশোধযোগ্য। অধ্যায় ৫ প্রতিষ্ঠা করেছে এই বাজারের ঋণদাতারা ঋণগ্রহীতার সঙ্গে অসম্পর্কিত কারণে ঋণ প্রত্যাহার করেন: একটি ব্যাংকের ২৫% পুঁজিবাজার এক্সপোজার সীমা লঙ্ঘন, বাংলাদেশ ব্যাংকের কড়াকড়ির চক্র, খাতব্যাপী শ্রেণীকরণ পর্যালোচনা। নবায়ন থামলে পূর্ণ অঙ্কটি একটি তারিখে নগদে দেয় হয়ে যায়, এমন কোম্পানির বিপরীতে যার হাতে তার ভগ্নাংশ আছে। নিরূপিত ঘটনায় ৬ কোটি টাকা নগদের বিপরীতে ৭০ কোটি টাকা বারো মাসে পরিশোধযোগ্য — ৮.৬% আচ্ছাদন। কোম্পানিটি কেবল ততক্ষণই স্বচ্ছল যতক্ষণ একটি ঋণ কমিটি হ্যাঁ বলে যায়, যা একটি সম্পর্ক, স্থিতিপত্রের তথ্য নয়।',
      },
    },
    {
      q: {
        en: 'What is the defensive interval and what does it add beyond the quick ratio?',
        bn: 'প্রতিরক্ষামূলক ব্যবধান কী এবং ত্বরিত অনুপাতের বাইরে এটি কী যোগ করে?',
      },
      a: {
        en: 'The defensive interval divides cash, marketable securities and receivables by daily cash operating expenditure, giving an answer in days rather than as a ratio. The quick ratio compares liquid assets to obligations at a point in time; the defensive interval asks how long the business can keep running if collections and credit both stop. Depreciation is removed from the denominator because it is not a cash outflow. Its value is that it is directly interpretable — 79 days is a survival horizon, whereas 0.63 is not.',
        bn: 'প্রতিরক্ষামূলক ব্যবধান নগদ, বাজারযোগ্য সিকিউরিটিজ ও প্রাপ্যকে দৈনিক নগদ পরিচালন ব্যয় দিয়ে ভাগ করে, ফলে উত্তর আসে অনুপাত নয় বরং দিনে। ত্বরিত অনুপাত একটি নির্দিষ্ট সময়ে তরল সম্পদকে দায়ের সঙ্গে তুলনা করে; প্রতিরক্ষামূলক ব্যবধান জিজ্ঞেস করে আদায় ও ঋণ দুটোই থেমে গেলে ব্যবসাটি আর কতদিন চলতে পারবে। হর থেকে অবচয় বাদ দেওয়া হয় কারণ তা নগদ বহির্গমন নয়। এর মূল্য হলো এটি সরাসরি ব্যাখ্যাযোগ্য — ৭৯ দিন একটি বেঁচে থাকার দিগন্ত, যেখানে ০.৬৩ তা নয়।',
      },
    },
    {
      q: {
        en: 'Would you apply this framework to a listed bank? Justify your answer.',
        bn: 'একটি তালিকাভুক্ত ব্যাংকে কি আপনি এই কাঠামো প্রয়োগ করবেন? যুক্তি দিন।',
      },
      a: {
        en: 'No. A bank has no meaningful current versus non-current split — deposits are legally repayable on demand yet behaviourally stable, and loans are the operating asset rather than a working capital item. A current ratio computed on a bank is arithmetically valid and economically meaningless. Bank liquidity is assessed through the cash reserve ratio, the statutory liquidity ratio, the advance-deposit ratio, the liquidity coverage ratio, and the maturity gap analysis in the risk disclosures. Applying a manufacturer framework to a bank is a category error that nonetheless appears regularly in Dhaka research notes.',
        bn: 'না। ব্যাংকের ক্ষেত্রে চলতি বনাম অ-চলতি বিভাজন অর্থবহ নয় — আমানত আইনত চাহিবামাত্র পরিশোধযোগ্য অথচ আচরণগতভাবে স্থিতিশীল, এবং ঋণ কার্যকরী মূলধনের আইটেম নয় বরং পরিচালন সম্পদ। ব্যাংকের ওপর গণিত চলতি অনুপাত পাটিগাণিতিকভাবে বৈধ কিন্তু অর্থনৈতিকভাবে অর্থহীন। ব্যাংকের তারল্য মূল্যায়ন হয় নগদ সংরক্ষণ অনুপাত, সংবিধিবদ্ধ তারল্য অনুপাত, অগ্রিম-আমানত অনুপাত, তারল্য আচ্ছাদন অনুপাত এবং ঝুঁকি প্রকাশে থাকা মেয়াদ-ব্যবধান বিশ্লেষণ দিয়ে। একটি ব্যাংকে প্রস্তুতকারকের কাঠামো প্রয়োগ করা একটি শ্রেণিগত ভুল, যা তবুও ঢাকার গবেষণা নোটে নিয়মিত দেখা যায়।',
      },
    },
  ],

  quiz: [
    {
      q: { en: 'The quick ratio differs from the current ratio by excluding:', bn: 'ত্বরিত অনুপাত চলতি অনুপাত থেকে যা বাদ দিয়ে আলাদা হয়:' },
      options: {
        en: ['Cash and receivables', 'Inventory and prepayments', 'Short-term debt', 'Trade payables'],
        bn: ['নগদ ও প্রাপ্য', 'মজুদ ও অগ্রিম পরিশোধ', 'স্বল্পমেয়াদি ঋণ', 'বাণিজ্যিক প্রদেয়'],
      },
      answer: 1,
    },
    {
      q: { en: 'Current assets 248 and current liabilities 118 give a current ratio of:', bn: 'চলতি সম্পদ ২৪৮ ও চলতি দায় ১১৮-এ চলতি অনুপাত হয়:' },
      options: { en: ['1.08', '1.04', '2.10', '2.48'], bn: ['১.০৮', '১.০৪', '২.১০', '২.৪৮'] },
      answer: 2,
    },
    {
      q: { en: 'The cash conversion cycle is:', bn: 'নগদ রূপান্তর চক্র হলো:' },
      options: {
        en: ['DSO + DIO + DPO', 'DSO + DIO − DPO', 'DSO − DIO + DPO', 'DIO − DSO − DPO'],
        bn: ['DSO + DIO + DPO', 'DSO + DIO − DPO', 'DSO − DIO + DPO', 'DIO − DSO − DPO'],
      },
      answer: 1,
    },
    {
      q: { en: 'DIO should be computed using which denominator?', bn: 'DIO কোন হর ব্যবহার করে গণনা করা উচিত?' },
      options: {
        en: ['Revenue', 'Cost of goods sold', 'Gross profit', 'Operating expenses'],
        bn: ['রাজস্ব', 'বিক্রীত পণ্যের ব্যয়', 'মোট মুনাফা', 'পরিচালন ব্যয়'],
      },
      answer: 1,
    },
    {
      q: { en: 'A manufacturer with falling revenue shows a RISING current ratio. This most likely means:', bn: 'রাজস্ব পড়তে থাকা একটি প্রস্তুতকারকের চলতি অনুপাত বাড়ছে। এর সম্ভাব্য অর্থ:' },
      options: {
        en: ['Improving cash generation', 'Unsold inventory and uncollected receivables are accumulating', 'Debt has been repaid', 'Suppliers have extended credit'],
        bn: ['নগদ উৎপাদনের উন্নতি', 'অবিক্রীত মজুদ ও অনাদায়ী প্রাপ্য জমছে', 'ঋণ পরিশোধ হয়েছে', 'সরবরাহকারীরা ঋণ বাড়িয়েছেন'],
      },
      answer: 1,
    },
    {
      q: { en: 'The defensive interval divides liquid assets by:', bn: 'প্রতিরক্ষামূলক ব্যবধান তরল সম্পদকে ভাগ করে:' },
      options: {
        en: ['Current liabilities', 'Daily cash operating expenditure', 'Annual revenue', 'Total debt'],
        bn: ['চলতি দায় দিয়ে', 'দৈনিক নগদ পরিচালন ব্যয় দিয়ে', 'বার্ষিক রাজস্ব দিয়ে', 'মোট ঋণ দিয়ে'],
      },
      answer: 1,
    },
    {
      q: { en: 'Cash 6, marketable securities 4, current liabilities 118. The cash ratio is:', bn: 'নগদ ৬, বাজারযোগ্য সিকিউরিটিজ ৪, চলতি দায় ১১৮। নগদ অনুপাত:' },
      options: { en: ['0.05', '0.08', '0.85', '1.08'], bn: ['০.০৫', '০.০৮', '০.৮৫', '১.০৮'] },
      answer: 1,
    },
    {
      q: { en: 'Acceptances and LC obligations maturing within 12 months should be:', bn: 'বারো মাসের মধ্যে পরিশোধযোগ্য অ্যাকসেপ্ট্যান্স ও LC দায় হওয়া উচিত:' },
      options: {
        en: ['Ignored, as they are contingent', 'Added to current liabilities in the adjusted ratio', 'Deducted from current assets', 'Added to long-term debt only'],
        bn: ['উপেক্ষা করা, যেহেতু এগুলো সম্ভাব্য', 'সমন্বিত অনুপাতে চলতি দায়ে যোগ করা', 'চলতি সম্পদ থেকে বিয়োগ করা', 'কেবল দীর্ঘমেয়াদি ঋণে যোগ করা'],
      },
      answer: 1,
    },
    {
      q: { en: 'Rollover risk on a working capital facility is dangerous mainly because:', bn: 'কার্যকরী মূলধন সুবিধায় নবায়ন ঝুঁকি প্রধানত বিপজ্জনক কারণ:' },
      options: {
        en: ['Interest rates may rise', 'The lender may withdraw for its own reasons unrelated to the borrower', 'The company may not want the loan', 'It converts to equity automatically'],
        bn: ['সুদের হার বাড়তে পারে', 'ঋণদাতা ঋণগ্রহীতার সঙ্গে অসম্পর্কিত নিজস্ব কারণে প্রত্যাহার করতে পারেন', 'কোম্পানি ঋণটি নাও চাইতে পারে', 'এটি স্বয়ংক্রিয়ভাবে ইকুইটিতে রূপান্তরিত হয়'],
      },
      answer: 1,
    },
    {
      q: { en: 'Which framework is appropriate for assessing a listed bank’s liquidity?', bn: 'একটি তালিকাভুক্ত ব্যাংকের তারল্য মূল্যায়নে কোন কাঠামো উপযুক্ত?' },
      options: {
        en: ['Current and quick ratios', 'CRR, SLR, advance-deposit ratio and LCR', 'Cash conversion cycle', 'Defensive interval'],
        bn: ['চলতি ও ত্বরিত অনুপাত', 'CRR, SLR, অগ্রিম-আমানত অনুপাত ও LCR', 'নগদ রূপান্তর চক্র', 'প্রতিরক্ষামূলক ব্যবধান'],
      },
      answer: 1,
    },
  ],
};
