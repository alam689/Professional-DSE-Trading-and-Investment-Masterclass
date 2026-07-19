/**
 * Chapter 17 — Leverage & Solvency Ratios
 * Part II, Fundamental Analysis.
 */

export default {
  n: 17,
  tools: [],

  excelSheet: {
    filename: 'ch17-solvency-dashboard.xlsx',
    sheetName: 'Solvency',
    cells: [
      { cell: 'A1', v: 'COMPANY' }, { cell: 'B1', v: 'DSE Cement Co (illustrative)' },

      { cell: 'A3', v: 'Revenue (BDT cr)' }, { cell: 'B3', v: 1450 },
      { cell: 'A4', v: 'EBITDA (BDT cr)' }, { cell: 'B4', v: 240 },
      { cell: 'A5', v: 'Depreciation & Amortisation' }, { cell: 'B5', v: 60 },
      { cell: 'A6', v: 'EBIT' }, { cell: 'B6', f: 'B4-B5' },
      { cell: 'A7', v: 'Interest Expense' }, { cell: 'B7', v: 112.5 },

      { cell: 'A9', v: 'Total Debt' }, { cell: 'B9', v: 1120 },
      { cell: 'A10', v: 'of which Short-Term (rolled)' }, { cell: 'B10', v: 620 },
      { cell: 'A11', v: 'Cash & Equivalents' }, { cell: 'B11', v: 112 },
      { cell: 'A12', v: 'Net Debt' }, { cell: 'B12', f: 'B9-B11' },
      { cell: 'A13', v: "Shareholders' Equity" }, { cell: 'B13', v: 800 },
      { cell: 'A14', v: 'Total Assets' }, { cell: 'B14', v: 2400 },

      { cell: 'A16', v: 'Cash Tax Paid' }, { cell: 'B16', v: 15 },
      { cell: 'A17', v: 'Maintenance Capex' }, { cell: 'B17', v: 35 },
      { cell: 'A18', v: 'Principal Due next 12m' }, { cell: 'B18', v: 140 },

      { cell: 'A20', v: 'RATIOS' },
      { cell: 'A21', v: 'Debt / Equity (x)' }, { cell: 'B21', f: 'B9/B13' },
      { cell: 'A22', v: 'Net Debt / Equity (x)' }, { cell: 'B22', f: 'B12/B13' },
      { cell: 'A23', v: 'Debt / Assets (%)' }, { cell: 'B23', f: 'B9/B14*100' },
      { cell: 'A24', v: 'Net Debt / EBITDA (x)' }, { cell: 'B24', f: 'B12/B4' },
      { cell: 'A25', v: 'Interest Coverage EBIT (x)' }, { cell: 'B25', f: 'B6/B7' },
      { cell: 'A26', v: 'Interest Coverage EBITDA (x)' }, { cell: 'B26', f: 'B4/B7' },
      { cell: 'A27', v: 'CFADS (BDT cr)' }, { cell: 'B27', f: 'B4-B16-B17' },
      { cell: 'A28', v: 'Debt Service (BDT cr)' }, { cell: 'B28', f: 'B7+B18' },
      { cell: 'A29', v: 'DSCR (x)' }, { cell: 'B29', f: 'B27/B28' },
      { cell: 'A30', v: 'Short-Term Share of Debt (%)' }, { cell: 'B30', f: 'B10/B9*100' },
      { cell: 'A31', v: 'Asset Leverage (x)' }, { cell: 'B31', f: 'B14/B13' },

      { cell: 'A33', v: 'DISTANCE TO DISTRESS' },
      { cell: 'A34', v: 'Breakeven EBITDA (coverage = 1.0)' }, { cell: 'B34', f: 'B7+B5' },
      { cell: 'A35', v: 'Cushion (BDT cr)' }, { cell: 'B35', f: 'B4-B34' },
      { cell: 'A36', v: 'EBITDA DECLINE TO BREACH (%)' }, { cell: 'B36', f: '(B4-B34)/B4*100' },
      {
        cell: 'A37', v: 'VERDICT',
      },
      {
        cell: 'B37',
        f: 'IF(OR(B29<1,B36<20),"DISTRESSED - solvent while lenders roll",IF(B36<35,"FRAGILE","Adequate"))',
      },

      { cell: 'A39', v: 'COMPOUNDED RISK (see Chapter 5)' },
      { cell: 'A40', v: 'Investor Margin Ratio (1:x)' }, { cell: 'B40', v: 1 },
      { cell: 'A41', v: 'Account Leverage (x)' }, { cell: 'B41', f: '1+B40' },
      { cell: 'A42', v: 'COMBINED LEVERAGE (x)' }, { cell: 'B42', f: 'B31*B41' },
      { cell: 'A43', v: 'Asset Value Fall (%)' }, { cell: 'B43', v: 10 },
      { cell: 'A44', v: 'Loss on Own Capital (%)' }, { cell: 'B44', f: '-B43*B42' },

      { cell: 'A46', v: 'NOTE' },
      { cell: 'B46', v: 'B36 is the only number that matters. It is how much bad news the company can absorb before the lender, not the board, decides its future.' },
    ],
  },

  objectives: {
    en: [
      'Compute debt-to-equity, debt-to-assets, net debt/EBITDA, interest coverage and DSCR from a published annual report.',
      'Distinguish operating leverage from financial leverage and explain why the two multiply rather than add.',
      'Derive the breakeven EBITDA at which interest coverage falls to 1.0 and express it as a percentage decline from current EBITDA.',
      'Explain why a debt stack dominated by rolled short-term facilities is more dangerous in Bangladesh than a longer-dated one of the same size.',
      'Show arithmetically how a levered company held in a levered account compounds the loss twice.',
    ],
    bn: [
      'প্রকাশিত বার্ষিক প্রতিবেদন থেকে ঋণ-ইকুইটি, ঋণ-সম্পদ, নেট ঋণ/EBITDA, সুদ কভারেজ ও DSCR গণনা করা।',
      'পরিচালন লিভারেজ ও আর্থিক লিভারেজের পার্থক্য করা এবং কেন এ দুটি যোগ নয় বরং গুণ হয় তা ব্যাখ্যা করা।',
      'যে EBITDA-তে সুদ কভারেজ ১.০-এ নেমে আসে সেই ব্রেকইভেন EBITDA নির্ণয় করা এবং বর্তমান EBITDA থেকে শতকরা পতন হিসেবে প্রকাশ করা।',
      'কেন বাংলাদেশে বারবার নবায়ন করা স্বল্পমেয়াদি ঋণে ভরা ঋণকাঠামো একই আকারের দীর্ঘমেয়াদি ঋণের চেয়ে বেশি বিপজ্জনক তা ব্যাখ্যা করা।',
      'পাটিগাণিতিকভাবে দেখানো যে লিভারেজড অ্যাকাউন্টে ধরা লিভারেজড কোম্পানি ক্ষতিকে দুইবার গুণ করে।',
    ],
  },

  blocks: {
    theory: {
      en: `Chapter 14 asked whether a company can pay its bills this month. Chapter 15 asked whether it earns a decent return. **This chapter asks a different and harder question: who actually controls the company's future — the board, or the lender?**

Leverage ratios answer that question. They are not measures of profitability. They are measures of *who decides*.

### Two kinds of leverage, and they are not the same thing

**Operating leverage** is the share of a company's cost base that is fixed. A cement plant, a power plant, a spinning mill: kilns, turbines and machines cost the same whether they run at 90% or 45% utilisation. High operating leverage means revenue changes are amplified into EBITDA changes.

**Financial leverage** is the share of a company's capital that is borrowed. Interest is a fixed charge that does not care about utilisation either. High financial leverage means EBITDA changes are amplified into net profit changes.

**They multiply.** A company with 2.0× operating leverage and 2.5× financial leverage does not have 4.5× combined exposure. It has 5.0×. This is why DSE cement, textile and power companies — high fixed asset intensity *and* high borrowing — are structurally the most fragile earnings streams on the exchange, regardless of how good last year's numbers looked.

$$\\text{DTL} = \\text{DOL} \\times \\text{DFL}$$

### The five ratios that matter

**1. Debt-to-Equity (D/E).** Total debt divided by shareholders' equity. The oldest solvency measure and the least useful, for one reason: **its denominator is an accounting number you cannot trust.** Chapter 11 established that Bangladeshi balance sheets routinely carry revaluation reserves on land and buildings inside equity. A company that revalues its land upward reduces its D/E without repaying a single taka. Always compute D/E twice — once as reported, once excluding revaluation surplus.

**2. Debt-to-Assets.** Total debt over total assets. Same denominator problem, same fix.

**3. Net Debt / EBITDA.** Debt less cash, divided by EBITDA. This is the ratio lenders actually use, because it is expressed in *years*: how many years of current cash earnings would be required to extinguish the debt. Above 3.0× is stretched for a cyclical. Above 4.0× the company is running on the lender's patience.

**4. Interest Coverage.** EBIT divided by interest expense. How many times over can the company pay this year's interest from this year's operating profit? Below 2.5× is uncomfortable. Below 1.5× the company is one bad quarter from a default event.

**5. Debt Service Coverage Ratio (DSCR).** Cash available for debt service divided by *interest plus scheduled principal*. This is the ratio that separates the analysts from the ratio-reciters. **Interest coverage ignores principal. DSCR does not.** A company can post interest coverage of 1.6× and a DSCR of 0.75× at the same time — meaning it comfortably pays interest and cannot repay principal at all. It survives only because the lender rolls the loan.

### Why short-term debt rolled repeatedly is the specific Bangladeshi danger

A ten-year term loan and a 180-day working-capital facility of the same size look identical in a D/E ratio. They are not remotely the same instrument.

The term loan is a **contract**. The lender is committed for ten years. Absent a covenant breach, they cannot demand repayment.

The rolled short-term facility is a **decision, taken twice a year, by somebody you have never met.** Each renewal is a fresh credit assessment. The company is not financed for 180 days; it is financed until the next time a credit committee changes its mind.

This matters more in Bangladesh than in a deep market for four structural reasons:

- **There is no functioning corporate bond market to refinance into.** The listed debt market is overwhelmingly government treasury securities. A company denied a bank rollover has almost nowhere else to go.
- **Bank liquidity is procyclical.** Bangladesh Bank tightening, a deposit run at a stressed bank, or a spike in the call money rate all reduce rollover appetite simultaneously across the system — at exactly the moment borrowers most need it.
- **Rescheduling masks the problem until it doesn't.** Repeated Bangladesh Bank rescheduling circulars have allowed stressed exposures to be re-dated rather than recognised. A loan that has been rescheduled twice is not performing; it is deferred.
- **Working capital lines are secured against inventory and receivables** — precisely the assets that lose value in the downturn that triggers the rollover refusal.

**The lesson is not that short-term debt is bad. The lesson is that a company financed by rolled short-term debt does not control its own solvency date.** Read the maturity profile note in the financial statements, not just the total.

### The interaction with Chapter 5

Chapter 5 established that a 1:1 margin loan turns a 45% share price fall into a 90% loss of your own capital. That was a statement about the *account*.

This chapter adds the other half. A company with total assets of BDT 2,400 crore against equity of BDT 800 crore has asset leverage of 3.0×. A 10% impairment of its assets is a 30% destruction of its equity value — before the market applies any multiple compression at all.

**Now hold that company in a 1:1 margin account.** The combined leverage is 3.0 × 2.0 = **6.0×**. A 10% write-down at the operating level becomes a 60% loss of your own money.

This is not two risks side by side. **It is one risk multiplied by itself.** The retail investor who buys a highly levered cement or textile scrip on margin because "it is cheap and the market is recovering" has constructed a position that requires almost nothing to go wrong before their capital is gone. This is, in aggregate, the single most common way money is destroyed on the DSE.`,
      bn: `অধ্যায় ১৪ জিজ্ঞেস করেছিল কোম্পানিটি এ মাসের বিল দিতে পারে কি না। অধ্যায় ১৫ জিজ্ঞেস করেছিল এটি ভদ্রস্থ রিটার্ন আয় করে কি না। **এই অধ্যায় একটি ভিন্ন ও কঠিনতর প্রশ্ন করে: কোম্পানির ভবিষ্যৎ আসলে কে নিয়ন্ত্রণ করে — পরিচালনা পর্ষদ, না ঋণদাতা?**

লিভারেজ অনুপাত সেই প্রশ্নের উত্তর দেয়। এগুলো মুনাফার পরিমাপ নয়। এগুলো *কে সিদ্ধান্ত নেয়* তার পরিমাপ।

### দুই ধরনের লিভারেজ, এবং এরা এক জিনিস নয়

**পরিচালন লিভারেজ** হলো কোম্পানির ব্যয়ভিত্তির যে অংশ স্থির। একটি সিমেন্ট কারখানা, একটি বিদ্যুৎকেন্দ্র, একটি স্পিনিং মিল: ভাটা, টারবাইন ও যন্ত্র ৯০% না ৪৫% সক্ষমতায় চলছে তা নির্বিশেষে একই খরচ। উচ্চ পরিচালন লিভারেজ মানে রাজস্বের পরিবর্তন EBITDA-র পরিবর্তনে বর্ধিত হয়।

**আর্থিক লিভারেজ** হলো কোম্পানির মূলধনের যে অংশ ধার করা। সুদও একটি স্থির চার্জ, যা সক্ষমতা ব্যবহারের তোয়াক্কা করে না। উচ্চ আর্থিক লিভারেজ মানে EBITDA-র পরিবর্তন নিট মুনাফার পরিবর্তনে বর্ধিত হয়।

**এরা গুণ হয়।** ২.০× পরিচালন লিভারেজ ও ২.৫× আর্থিক লিভারেজের কোম্পানির সম্মিলিত ঝুঁকি ৪.৫× নয়। এটি ৫.০×। এ কারণেই ডিএসই-র সিমেন্ট, বস্ত্র ও বিদ্যুৎ কোম্পানি — উচ্চ স্থির সম্পদ নিবিড়তা *এবং* উচ্চ ঋণ — গত বছরের সংখ্যা যত ভালোই দেখাক, কাঠামোগতভাবে এক্সচেঞ্জের সবচেয়ে ভঙ্গুর আয়প্রবাহ।

$$\\text{DTL} = \\text{DOL} \\times \\text{DFL}$$

### যে পাঁচটি অনুপাত গুরুত্বপূর্ণ

**১. ঋণ-ইকুইটি (D/E)।** মোট ঋণ ভাগ শেয়ারহোল্ডারদের ইকুইটি। প্রাচীনতম স্বচ্ছলতা পরিমাপ এবং সবচেয়ে কম কার্যকর, একটি কারণে: **এর হর একটি হিসাবরক্ষণ সংখ্যা যাকে আপনি বিশ্বাস করতে পারেন না।** অধ্যায় ১১ প্রতিষ্ঠা করেছে যে বাংলাদেশি স্থিতিপত্রে ইকুইটির ভেতরে জমি ও ভবনের পুনর্মূল্যায়ন সঞ্চিতি নিয়মিতভাবে থাকে। যে কোম্পানি তার জমির মূল্য বাড়িয়ে দেখায় সে এক টাকাও পরিশোধ না করে D/E কমিয়ে ফেলে। D/E সর্বদা দুইবার গণনা করুন — একবার প্রকাশিত অনুযায়ী, একবার পুনর্মূল্যায়ন উদ্বৃত্ত বাদ দিয়ে।

**২. ঋণ-সম্পদ।** মোট ঋণ ভাগ মোট সম্পদ। একই হরের সমস্যা, একই সমাধান।

**৩. নেট ঋণ / EBITDA।** ঋণ বিয়োগ নগদ, ভাগ EBITDA। ঋণদাতারা আসলে এই অনুপাতটিই ব্যবহার করেন, কারণ এটি *বছরে* প্রকাশিত: বর্তমান নগদ আয়ের কত বছর লাগবে ঋণটি নিঃশেষ করতে। একটি চক্রীয় কোম্পানির জন্য ৩.০×-এর ওপর টানটান। ৪.০×-এর ওপর কোম্পানিটি ঋণদাতার ধৈর্যের ওপর চলছে।

**৪. সুদ কভারেজ।** EBIT ভাগ সুদ ব্যয়। এ বছরের পরিচালন মুনাফা থেকে কোম্পানি এ বছরের সুদ কতবার দিতে পারে? ২.৫×-এর নিচে অস্বস্তিকর। ১.৫×-এর নিচে কোম্পানিটি একটি খারাপ প্রান্তিকের দূরত্বে খেলাপি হওয়ার ঘটনা থেকে।

**৫. ঋণ পরিশোধ কভারেজ অনুপাত (DSCR)।** ঋণ পরিশোধের জন্য প্রাপ্য নগদ ভাগ *সুদ যোগ নির্ধারিত আসল*। এই অনুপাতটিই বিশ্লেষককে অনুপাত-আওড়ানো লোকের থেকে আলাদা করে। **সুদ কভারেজ আসল উপেক্ষা করে। DSCR করে না।** একটি কোম্পানি একই সঙ্গে ১.৬× সুদ কভারেজ ও ০.৭৫× DSCR দেখাতে পারে — অর্থাৎ সে স্বচ্ছন্দে সুদ দেয় এবং আসল আদৌ শোধ করতে পারে না। সে টিকে থাকে কেবল কারণ ঋণদাতা ঋণটি নবায়ন করে যায়।

### কেন বারবার নবায়ন করা স্বল্পমেয়াদি ঋণই বাংলাদেশের নির্দিষ্ট বিপদ

একই আকারের একটি দশ বছরের মেয়াদি ঋণ এবং একটি ১৮০ দিনের চলতি মূলধন সুবিধা D/E অনুপাতে অভিন্ন দেখায়। এরা মোটেও এক উপকরণ নয়।

মেয়াদি ঋণ একটি **চুক্তি**। ঋণদাতা দশ বছরের জন্য প্রতিশ্রুতিবদ্ধ। শর্ত ভঙ্গ না হলে তিনি পরিশোধ দাবি করতে পারেন না।

নবায়িত স্বল্পমেয়াদি সুবিধা হলো **একটি সিদ্ধান্ত, বছরে দুইবার নেওয়া, এমন কারো দ্বারা যাঁর সঙ্গে আপনার কখনো দেখা হয়নি।** প্রতিটি নবায়ন একটি নতুন ঋণ মূল্যায়ন। কোম্পানিটি ১৮০ দিনের জন্য অর্থায়িত নয়; সে অর্থায়িত পরের বার একটি ঋণ কমিটি মত বদলানো পর্যন্ত।

গভীর বাজারের চেয়ে বাংলাদেশে এটি চারটি কাঠামোগত কারণে বেশি গুরুত্বপূর্ণ:

- **পুনঃঅর্থায়নের জন্য কার্যকর কোনো কর্পোরেট বন্ড বাজার নেই।** তালিকাভুক্ত ঋণ বাজার প্রধানত সরকারি ট্রেজারি সিকিউরিটিজ। ব্যাংক নবায়ন প্রত্যাখ্যান করলে কোম্পানির যাওয়ার প্রায় কোনো জায়গা নেই।
- **ব্যাংক তারল্য প্রোসাইক্লিকাল।** বাংলাদেশ ব্যাংকের কড়াকড়ি, চাপগ্রস্ত ব্যাংকে আমানত তোলার হিড়িক, বা কল মানি রেটের লাফ — সবই একই সঙ্গে সমগ্র ব্যবস্থায় নবায়নের আগ্রহ কমায়, ঠিক যখন ঋণগ্রহীতাদের তা সবচেয়ে বেশি দরকার।
- **পুনঃতফসিলিকরণ সমস্যাটি ঢেকে রাখে, যতক্ষণ না তা আর পারে না।** বাংলাদেশ ব্যাংকের বারবার জারি করা পুনঃতফসিল সার্কুলার চাপগ্রস্ত ঋণকে স্বীকৃতির বদলে নতুন তারিখ দেওয়ার সুযোগ দিয়েছে। দুইবার পুনঃতফসিল হওয়া ঋণ সচল নয়; স্থগিত।
- **চলতি মূলধন সীমা মজুদ ও প্রাপ্য বিলের বিপরীতে জামানতযুক্ত** — ঠিক সেই সম্পদ যেগুলো ঐ মন্দায় মূল্য হারায় যা নবায়ন প্রত্যাখ্যান ঘটায়।

**শিক্ষাটি এই নয় যে স্বল্পমেয়াদি ঋণ খারাপ। শিক্ষাটি হলো, নবায়িত স্বল্পমেয়াদি ঋণে অর্থায়িত কোম্পানি নিজের স্বচ্ছলতার তারিখ নিজে নিয়ন্ত্রণ করে না।** কেবল মোট নয়, আর্থিক বিবরণীর মেয়াদ-বিন্যাস নোটটি পড়ুন।

### অধ্যায় ৫-এর সঙ্গে মিথস্ক্রিয়া

অধ্যায় ৫ প্রতিষ্ঠা করেছে যে ১:১ মার্জিন ঋণ শেয়ারের ৪৫% পতনকে আপনার নিজস্ব মূলধনের ৯০% ক্ষতিতে পরিণত করে। সেটি ছিল *অ্যাকাউন্ট* সম্পর্কে একটি বক্তব্য।

এই অধ্যায় বাকি অর্ধেকটি যোগ করে। ৮০০ কোটি টাকা ইকুইটির বিপরীতে ২,৪০০ কোটি টাকা মোট সম্পদের কোম্পানির সম্পদ লিভারেজ ৩.০×। তার সম্পদের ১০% অবচয় মানে ইকুইটি মূল্যের ৩০% ধ্বংস — বাজার কোনো গুণক সংকোচন প্রয়োগ করার আগেই।

**এবার ঐ কোম্পানিকে একটি ১:১ মার্জিন অ্যাকাউন্টে ধরুন।** সম্মিলিত লিভারেজ ৩.০ × ২.০ = **৬.০×**। পরিচালন স্তরে ১০% অবলোপন হয়ে দাঁড়ায় আপনার নিজের টাকার ৬০% ক্ষতি।

এটি পাশাপাশি দুটি ঝুঁকি নয়। **এটি একটি ঝুঁকিকে নিজেরই দ্বারা গুণ করা।** যে খুচরা বিনিয়োগকারী "সস্তা এবং বাজার ঘুরে দাঁড়াচ্ছে" বলে একটি উচ্চ লিভারেজড সিমেন্ট বা বস্ত্র স্ক্রিপ মার্জিনে কেনেন, তিনি এমন একটি পজিশন বানিয়েছেন যেখানে তাঁর মূলধন শেষ হতে প্রায় কিছুই ভুল হওয়া লাগে না। সামষ্টিকভাবে, ডিএসই-তে টাকা ধ্বংস হওয়ার এটিই একক সবচেয়ে সাধারণ উপায়।`,
    },

    simple: {
      en: `Two shopkeepers. Both sell BDT 1 crore of goods a year and both make BDT 10 lakh of profit before interest.

**Shopkeeper A** built his shop with his own money. He owes nothing.
**Shopkeeper B** borrowed 80% of his shop. He pays BDT 7 lakh a year in interest.

In a good year A keeps 10 lakh and B keeps 3 lakh. B looks worse but survives.

Now sales fall 20%. Profit before interest drops to BDT 8 lakh for both.

A keeps 8 lakh. He has had a slightly worse year.
B pays 7 lakh interest and keeps 1 lakh. He has had a **disastrous** year — down 67%.

Sales fell 20%. B's profit fell 67%. **Nothing about B's shop changed. Only his financing did.**

---

### The question nobody asks

Everyone asks "how much does it owe?" Almost nobody asks **"when does it have to pay, and who decides?"**

Two companies each owe BDT 100 crore.

- Company One borrowed for ten years at a fixed rate. Nobody can ask for it back before 2035.
- Company Two borrowed on a six-month working capital line that has been renewed fourteen times.

On paper their debt is identical. In reality Company Two's survival is re-decided every six months by a bank credit committee. If Bangladesh Bank tightens, or the bank has its own bad quarter, or the sector falls out of favour, the answer is no — and there is no corporate bond market in Bangladesh to run to.

**This is not a loan. It is a lease on the right to exist, renewed twice a year.**

---

### And then you borrow too

Suppose you buy this company's shares with a 1:1 margin loan.

The company borrows twice what its owners put in. You borrow the same amount you put in.

A modest 10% loss in the value of what the company actually owns wipes out 30% of the shareholders' claim. That 30% fall in the share price wipes out 60% of your money.

**Ten percent becomes sixty percent.** You did not take one risk twice. You multiplied two risks together, and the arithmetic is not sympathetic.`,
      bn: `দুজন দোকানদার। দুজনেই বছরে ১ কোটি টাকার পণ্য বিক্রি করেন এবং দুজনেই সুদের আগে ১০ লক্ষ টাকা মুনাফা করেন।

**দোকানদার ক** নিজের টাকায় দোকান বানিয়েছেন। তাঁর কোনো দেনা নেই।
**দোকানদার খ** দোকানের ৮০% ধার করেছেন। তিনি বছরে ৭ লক্ষ টাকা সুদ দেন।

ভালো বছরে ক রাখেন ১০ লক্ষ, খ রাখেন ৩ লক্ষ। খ-কে খারাপ দেখায় কিন্তু তিনি টিকে থাকেন।

এবার বিক্রি ২০% কমল। সুদের আগে মুনাফা দুজনেরই ৮ লক্ষ টাকায় নামল।

ক রাখেন ৮ লক্ষ। তাঁর বছরটা একটু খারাপ গেল।
খ ৭ লক্ষ সুদ দিয়ে রাখেন ১ লক্ষ। তাঁর বছরটা **বিপর্যয়কর** — ৬৭% পতন।

বিক্রি কমল ২০%। খ-এর মুনাফা কমল ৬৭%। **খ-এর দোকানের কিছুই বদলায়নি। কেবল তাঁর অর্থায়ন বদলেছে।**

---

### যে প্রশ্নটি কেউ করে না

সবাই জিজ্ঞেস করে "কত দেনা?" প্রায় কেউ জিজ্ঞেস করে না **"কখন শোধ করতে হবে, আর সিদ্ধান্ত নেয় কে?"**

দুটি কোম্পানির প্রত্যেকের ১০০ কোটি টাকা দেনা।

- কোম্পানি এক দশ বছরের জন্য স্থির সুদে ধার নিয়েছে। ২০৩৫ সালের আগে কেউ ফেরত চাইতে পারবে না।
- কোম্পানি দুই ছয় মাসের চলতি মূলধন সীমায় ধার নিয়েছে, যা চৌদ্দবার নবায়ন হয়েছে।

কাগজে তাদের ঋণ অভিন্ন। বাস্তবে কোম্পানি দুই-এর টিকে থাকা প্রতি ছয় মাসে একটি ব্যাংক ঋণ কমিটি নতুন করে ঠিক করে। বাংলাদেশ ব্যাংক কড়াকড়ি করলে, বা ব্যাংকটির নিজের একটি খারাপ প্রান্তিক গেলে, বা খাতটি অপছন্দের হয়ে গেলে — উত্তরটি না, আর বাংলাদেশে দৌড়ে যাওয়ার মতো কোনো কর্পোরেট বন্ড বাজার নেই।

**এটি ঋণ নয়। এটি অস্তিত্বের অধিকারের ইজারা, বছরে দুইবার নবায়নযোগ্য।**

---

### আর তারপর আপনিও ধার করেন

ধরুন আপনি এই কোম্পানির শেয়ার ১:১ মার্জিন ঋণে কিনলেন।

কোম্পানি তার মালিকদের দেওয়া টাকার দ্বিগুণ ধার করে। আপনি নিজের দেওয়া টাকার সমান ধার করেন।

কোম্পানির প্রকৃত মালিকানার মূল্যে সামান্য ১০% ক্ষতি শেয়ারহোল্ডারদের দাবির ৩০% মুছে দেয়। শেয়ারের দামে ঐ ৩০% পতন আপনার টাকার ৬০% মুছে দেয়।

**দশ শতাংশ হয়ে যায় ষাট শতাংশ।** আপনি একটি ঝুঁকি দুইবার নেননি। আপনি দুটি ঝুঁকিকে গুণ করেছেন, আর পাটিগণিত সহানুভূতিশীল নয়।`,
    },

    example: {
      en: `### A cement company that looks survivable and is not

Take a mid-size DSE-listed cement company. Cement is the textbook high-operating-leverage sector in Bangladesh: clinker imported in dollars, gas and electricity as major inputs, kilns that cost the same whether they run or not, and demand tied to a construction cycle that stops when government development spending stops.

**Reported figures for the year (BDT crore):**

| Line | Amount |
|---|---|
| Revenue | 1,450 |
| EBITDA | 240 |
| Depreciation & amortisation | 60 |
| EBIT | 180 |
| Interest expense | 112.5 |
| Profit before tax | 67.5 |
| Total debt | 1,120 |
| — of which short-term (rolled) | 620 |
| Cash & equivalents | 112 |
| Net debt | 1,008 |
| Shareholders' equity | 800 |
| Total assets | 2,400 |
| Cash tax paid | 15 |
| Maintenance capex | 35 |
| Principal due next 12 months | 140 |

**The ratios:**

| Ratio | Value | Read |
|---|---|---|
| Debt / Equity | 1.40× | Above 1.0 — lenders own more of this business than shareholders do |
| Net Debt / Equity | 1.26× | Cash barely dents it |
| Debt / Assets | 46.67% | Nearly half the asset base is financed by someone else |
| **Net Debt / EBITDA** | **4.20×** | **Over four years of current earnings to clear the debt** |
| **Interest Coverage (EBIT)** | **1.60×** | **Pays interest 1.6 times over. Nothing more.** |
| Interest Coverage (EBITDA) | 2.13× | Flattering, because it ignores the capital being consumed |
| DSCR | **0.75×** | **Cannot service scheduled debt from operations at all** |
| Short-term share of debt | 55.36% | Majority must be re-approved within a year |
| Asset leverage | 3.00× | Every 1% of asset value is 3% of equity value |

**Look at the gap between interest coverage and DSCR.** Interest coverage of 1.60× says "tight but paying." DSCR of 0.75× says "the company generates BDT 190 crore of cash for debt service and owes BDT 252.5 crore of it." The shortfall — BDT 62.5 crore — is met by rolling debt. Nothing else.

**This company is not solvent. It is renewed.**

### How far can EBITDA fall before coverage breaks?

Interest coverage hits 1.0× when EBIT equals interest. EBIT is EBITDA minus depreciation, and depreciation does not fall when volumes fall — that is exactly what operating leverage means.

$$\\text{EBITDA}_{be} = \\text{Interest} + \\text{D\\&A} = 112.5 + 60 = \\text{BDT } 172.5 \\text{ crore}$$

$$\\text{Decline to breach} = \\frac{240 - 172.5}{240} = 28.125\\%$$

**A 28.1% EBITDA decline breaches interest coverage.**

| EBITDA fall | EBITDA | EBIT | Coverage | Status |
|---|---|---|---|---|
| 0% | 240.00 | 180.00 | 1.60× | ok |
| 10% | 216.00 | 156.00 | 1.39× | ok |
| 20% | 192.00 | 132.00 | 1.17× | ok |
| **28.1%** | **172.50** | **112.50** | **1.00×** | **at the line** |
| 35% | 156.00 | 96.00 | 0.85× | breached |
| 50% | 120.00 | 60.00 | 0.53× | breached |

Now ask the operational question: **is a 28% EBITDA decline a rare event for a Bangladeshi cement company?** It is not. A 12% volume drop in a construction slowdown, combined with a taka depreciation raising imported clinker cost and a gas tariff increase, produces that comfortably in a single year. Each of those three things has happened. They have happened together.

### The compounding

Now suppose an investor holds this scrip in a 1:1 margin account, having read that it trades at "only 8× earnings."

| Asset value fall | Equity value fall (×3.0) | Loss on own capital (×2.0 more) |
|---|---|---|
| 5% | −15.0% | **−30.0%** |
| 10% | −30.0% | **−60.0%** |
| 15% | −45.0% | **−90.0%** |

At a 15% impairment of the underlying business, the investor is wiped out. Chapter 5 showed the margin arithmetic in isolation. **This is what it looks like when the asset itself is already levered.**

And note the sequencing that makes it worse: when the cement sector turns down, *every* levered cement company breaches at once, every margin account holding them is called at once, and the forced selling described in Chapter 5 arrives in a sector where the fundamental news is also bad. The cascade and the fundamentals reinforce each other. This is why sector-concentrated margin positions in cyclicals are the most reliable way to lose everything on this exchange.

### What a healthy comparison looks like

The same analysis on a DSE pharma archetype — low fixed asset intensity relative to earnings, largely equity funded:

| Ratio | Cement Co | Pharma Co |
|---|---|---|
| Net Debt / EBITDA | 4.20× | 0.60× |
| Interest Coverage | 1.60× | 14.5× |
| DSCR | 0.75× | 4.2× |
| Short-term share of debt | 55.4% | 18% |
| EBITDA decline to breach coverage | 28.1% | 91% |

**The pharma company can lose 91% of its EBITDA before interest coverage breaks.** That is not a better business by 10%. It is a categorically different level of survivability, and it is why the same 20% market decline leaves one company negotiating with lenders and the other buying assets.`,
      bn: `### একটি সিমেন্ট কোম্পানি যাকে টিকে থাকার মতো দেখায়, কিন্তু নয়

একটি মাঝারি আকারের ডিএসই-তালিকাভুক্ত সিমেন্ট কোম্পানি নিন। বাংলাদেশে সিমেন্টই পাঠ্যপুস্তকীয় উচ্চ-পরিচালন-লিভারেজ খাত: ডলারে আমদানি করা ক্লিংকার, প্রধান উপকরণ হিসেবে গ্যাস ও বিদ্যুৎ, এমন ভাটা যা চলুক বা না চলুক একই খরচ, এবং এমন নির্মাণ চক্রের সঙ্গে বাঁধা চাহিদা যা সরকারি উন্নয়ন ব্যয় থামলেই থামে।

**বছরের প্রকাশিত পরিসংখ্যান (কোটি টাকা):**

| খাত | পরিমাণ |
|---|---|
| রাজস্ব | ১,৪৫০ |
| EBITDA | ২৪০ |
| অবচয় ও পরিশোধ | ৬০ |
| EBIT | ১৮০ |
| সুদ ব্যয় | ১১২.৫ |
| করপূর্ব মুনাফা | ৬৭.৫ |
| মোট ঋণ | ১,১২০ |
| — যার মধ্যে স্বল্পমেয়াদি (নবায়িত) | ৬২০ |
| নগদ ও সমতুল্য | ১১২ |
| নেট ঋণ | ১,০০৮ |
| শেয়ারহোল্ডারদের ইকুইটি | ৮০০ |
| মোট সম্পদ | ২,৪০০ |
| প্রদত্ত নগদ কর | ১৫ |
| রক্ষণাবেক্ষণ মূলধনি ব্যয় | ৩৫ |
| আগামী ১২ মাসে প্রদেয় আসল | ১৪০ |

**অনুপাতগুলো:**

| অনুপাত | মান | পাঠ |
|---|---|---|
| ঋণ / ইকুইটি | ১.৪০× | ১.০-এর ওপরে — শেয়ারহোল্ডারদের চেয়ে ঋণদাতাদের অংশ বেশি |
| নেট ঋণ / ইকুইটি | ১.২৬× | নগদ প্রায় কিছুই কমায় না |
| ঋণ / সম্পদ | ৪৬.৬৭% | সম্পদভিত্তির প্রায় অর্ধেক অন্যের অর্থায়িত |
| **নেট ঋণ / EBITDA** | **৪.২০×** | **ঋণ শোধ করতে বর্তমান আয়ের চার বছরেরও বেশি** |
| **সুদ কভারেজ (EBIT)** | **১.৬০×** | **সুদ ১.৬ বার দিতে পারে। এর বেশি কিছু নয়।** |
| সুদ কভারেজ (EBITDA) | ২.১৩× | তোষামোদী, কারণ এটি ক্ষয় হতে থাকা মূলধন উপেক্ষা করে |
| DSCR | **০.৭৫×** | **পরিচালনা থেকে নির্ধারিত ঋণ আদৌ পরিশোধ করতে পারে না** |
| ঋণে স্বল্পমেয়াদির অংশ | ৫৫.৩৬% | সংখ্যাগরিষ্ঠ অংশ এক বছরের মধ্যে পুনঃঅনুমোদন লাগবে |
| সম্পদ লিভারেজ | ৩.০০× | সম্পদমূল্যের প্রতি ১% মানে ইকুইটি মূল্যের ৩% |

**সুদ কভারেজ ও DSCR-এর ফারাকটি দেখুন।** ১.৬০× সুদ কভারেজ বলে "টানটান, কিন্তু দিচ্ছে।" ০.৭৫× DSCR বলে "কোম্পানি ঋণ পরিশোধের জন্য ১৯০ কোটি টাকা নগদ তৈরি করে এবং ২৫২.৫ কোটি টাকা পরিশোধ করতে হয়।" ঘাটতি — ৬২.৫ কোটি টাকা — ঋণ নবায়ন করে মেটানো হয়। আর কিছুতে নয়।

**এই কোম্পানি স্বচ্ছল নয়। এটি নবায়িত।**

### কভারেজ ভাঙার আগে EBITDA কতটা পড়তে পারে?

EBIT সুদের সমান হলে সুদ কভারেজ ১.০×-এ পৌঁছায়। EBIT হলো EBITDA বিয়োগ অবচয়, আর পরিমাণ কমলে অবচয় কমে না — পরিচালন লিভারেজের অর্থ ঠিক এটাই।

$$\\text{EBITDA}_{be} = \\text{Interest} + \\text{D\\&A} = 112.5 + 60 = \\text{BDT } 172.5 \\text{ crore}$$

$$\\text{Decline to breach} = \\frac{240 - 172.5}{240} = 28.125\\%$$

**২৮.১% EBITDA পতনেই সুদ কভারেজ ভেঙে যায়।**

| EBITDA পতন | EBITDA | EBIT | কভারেজ | অবস্থা |
|---|---|---|---|---|
| ০% | ২৪০.০০ | ১৮০.০০ | ১.৬০× | ঠিক আছে |
| ১০% | ২১৬.০০ | ১৫৬.০০ | ১.৩৯× | ঠিক আছে |
| ২০% | ১৯২.০০ | ১৩২.০০ | ১.১৭× | ঠিক আছে |
| **২৮.১%** | **১৭২.৫০** | **১১২.৫০** | **১.০০×** | **সীমায়** |
| ৩৫% | ১৫৬.০০ | ৯৬.০০ | ০.৮৫× | ভঙ্গ |
| ৫০% | ১২০.০০ | ৬০.০০ | ০.৫৩× | ভঙ্গ |

এবার পরিচালন প্রশ্নটি করুন: **বাংলাদেশি সিমেন্ট কোম্পানির জন্য ২৮% EBITDA পতন কি বিরল ঘটনা?** নয়। নির্মাণ মন্দায় ১২% পরিমাণ পতন, তার সঙ্গে টাকার অবমূল্যায়নে আমদানি করা ক্লিংকারের খরচ বৃদ্ধি এবং একটি গ্যাস ট্যারিফ বৃদ্ধি — এক বছরেই তা স্বচ্ছন্দে তৈরি হয়। এই তিনটির প্রতিটি ঘটেছে। এগুলো একসঙ্গেও ঘটেছে।

### গুণিতকরণ

এবার ধরুন একজন বিনিয়োগকারী "মাত্র ৮ গুণ আয়ে লেনদেন হচ্ছে" পড়ে এই স্ক্রিপটি ১:১ মার্জিন অ্যাকাউন্টে ধরেছেন।

| সম্পদমূল্যের পতন | ইকুইটি মূল্যের পতন (×৩.০) | নিজস্ব মূলধনে ক্ষতি (আরও ×২.০) |
|---|---|---|
| ৫% | −১৫.০% | **−৩০.০%** |
| ১০% | −৩০.০% | **−৬০.০%** |
| ১৫% | −৪৫.০% | **−৯০.০%** |

অন্তর্নিহিত ব্যবসার ১৫% অবচয়েই বিনিয়োগকারী নিঃশেষ। অধ্যায় ৫ মার্জিনের পাটিগণিত একা দেখিয়েছিল। **সম্পদটি নিজেই যখন আগে থেকেই লিভারেজড, তখন সেটি দেখতে এমন হয়।**

আর যে ক্রমটি একে আরও খারাপ করে তা লক্ষ করুন: সিমেন্ট খাত নিম্নমুখী হলে *প্রতিটি* লিভারেজড সিমেন্ট কোম্পানি একসঙ্গে সীমা ভাঙে, সেগুলো ধারণকারী প্রতিটি মার্জিন অ্যাকাউন্টে একসঙ্গে কল হয়, এবং অধ্যায় ৫-এ বর্ণিত বাধ্যতামূলক বিক্রি এমন এক খাতে এসে পড়ে যেখানে মৌলিক খবরও খারাপ। ধারাবাহিক প্রতিক্রিয়া ও মৌলভিত্তি পরস্পরকে শক্তিশালী করে। এ কারণেই চক্রীয় খাতে কেন্দ্রীভূত মার্জিন পজিশনই এই এক্সচেঞ্জে সব হারানোর সবচেয়ে নির্ভরযোগ্য উপায়।

### সুস্থ তুলনা দেখতে কেমন

একই বিশ্লেষণ একটি ডিএসই ওষুধ আর্কিটাইপে — আয়ের তুলনায় কম স্থির সম্পদ নিবিড়তা, প্রধানত ইকুইটি-অর্থায়িত:

| অনুপাত | সিমেন্ট কোং | ওষুধ কোং |
|---|---|---|
| নেট ঋণ / EBITDA | ৪.২০× | ০.৬০× |
| সুদ কভারেজ | ১.৬০× | ১৪.৫× |
| DSCR | ০.৭৫× | ৪.২× |
| ঋণে স্বল্পমেয়াদির অংশ | ৫৫.৪% | ১৮% |
| কভারেজ ভাঙতে EBITDA পতন | ২৮.১% | ৯১% |

**ওষুধ কোম্পানিটি সুদ কভারেজ ভাঙার আগে তার EBITDA-র ৯১% হারাতে পারে।** এটি ১০% ভালো ব্যবসা নয়। এটি টিকে থাকার সক্ষমতার সম্পূর্ণ ভিন্ন এক স্তর, এবং এ কারণেই একই ২০% বাজার পতনে একটি কোম্পানি ঋণদাতার সঙ্গে দর কষে আর অন্যটি সম্পদ কেনে।`,
    },

    formula: {
      en: `**Debt-to-Equity:**
$$\\text{D/E} = \\frac{\\text{Total Debt}}{\\text{Shareholders' Equity}}$$

Compute it a second time excluding revaluation surplus, per Chapter 11:
$$\\text{D/E}_{adj} = \\frac{\\text{Total Debt}}{\\text{Equity} - \\text{Revaluation Reserve}}$$

**Debt-to-Assets:**
$$\\text{D/A} = \\frac{\\text{Total Debt}}{\\text{Total Assets}} \\times 100$$

**Net Debt:**
$$\\text{Net Debt} = \\text{Total Debt} - \\text{Cash and Equivalents}$$

**Net Debt / EBITDA** — the lender's ratio, denominated in years:
$$\\text{ND/EBITDA} = \\frac{\\text{Total Debt} - \\text{Cash}}{\\text{EBITDA}}$$

**Interest Coverage** — classical definition uses EBIT:
$$\\text{ICR} = \\frac{\\text{EBIT}}{\\text{Interest Expense}}$$

**DSCR** — the ratio that includes principal:
$$\\text{DSCR} = \\frac{\\text{CFADS}}{\\text{Interest} + \\text{Scheduled Principal}}$$

where
$$\\text{CFADS} = \\text{EBITDA} - \\text{Cash Tax} - \\text{Maintenance Capex}$$

**Degree of Operating Leverage:**
$$\\text{DOL} = \\frac{\\%\\Delta \\text{EBIT}}{\\%\\Delta \\text{Revenue}}$$

**Degree of Financial Leverage:**
$$\\text{DFL} = \\frac{\\%\\Delta \\text{Net Profit}}{\\%\\Delta \\text{EBIT}} = \\frac{\\text{EBIT}}{\\text{EBIT} - \\text{Interest}}$$

**Degree of Total Leverage** — they multiply:
$$\\text{DTL} = \\text{DOL} \\times \\text{DFL}$$

---

**Breakeven EBITDA.** The centrepiece of this chapter. Interest coverage equals 1.0 when EBIT equals interest. Since $\\text{EBIT} = \\text{EBITDA} - D$:

$$\\frac{\\text{EBITDA} - D}{I} = 1 \\;\\Rightarrow\\; \\text{EBITDA} - D = I \\;\\Rightarrow\\; \\boxed{\\text{EBITDA}_{be} = I + D}$$

where $I$ is interest expense and $D$ is depreciation and amortisation.

**Distance to distress**, expressed as the tolerable percentage decline:
$$\\text{Decline}_{breach} = \\frac{\\text{EBITDA}_0 - \\text{EBITDA}_{be}}{\\text{EBITDA}_0} \\times 100$$

Generalised to any target coverage $c$:
$$\\text{EBITDA}_{c} = cI + D$$

**Asset leverage** — how firm-level asset moves map to equity:
$$\\lambda_{firm} = \\frac{\\text{Total Assets}}{\\text{Equity}}$$

**Compounded leverage** — Chapter 5's account leverage times this chapter's firm leverage:
$$\\lambda_{total} = \\lambda_{firm} \\times \\lambda_{account} = \\frac{\\text{Total Assets}}{\\text{Equity}} \\times (1 + \\text{margin ratio})$$

$$\\text{Loss on own capital} = -\\,\\lambda_{total} \\times \\%\\text{ fall in asset value}$$`,
      bn: `**ঋণ-ইকুইটি:**
$$\\text{D/E} = \\frac{\\text{Total Debt}}{\\text{Shareholders' Equity}}$$

অধ্যায় ১১ অনুসারে পুনর্মূল্যায়ন উদ্বৃত্ত বাদ দিয়ে দ্বিতীয়বার গণনা করুন:
$$\\text{D/E}_{adj} = \\frac{\\text{Total Debt}}{\\text{Equity} - \\text{Revaluation Reserve}}$$

**ঋণ-সম্পদ:**
$$\\text{D/A} = \\frac{\\text{Total Debt}}{\\text{Total Assets}} \\times 100$$

**নেট ঋণ:**
$$\\text{Net Debt} = \\text{Total Debt} - \\text{Cash and Equivalents}$$

**নেট ঋণ / EBITDA** — ঋণদাতার অনুপাত, বছরে প্রকাশিত:
$$\\text{ND/EBITDA} = \\frac{\\text{Total Debt} - \\text{Cash}}{\\text{EBITDA}}$$

**সুদ কভারেজ** — ধ্রুপদী সংজ্ঞা EBIT ব্যবহার করে:
$$\\text{ICR} = \\frac{\\text{EBIT}}{\\text{Interest Expense}}$$

**DSCR** — যে অনুপাত আসল অন্তর্ভুক্ত করে:
$$\\text{DSCR} = \\frac{\\text{CFADS}}{\\text{Interest} + \\text{Scheduled Principal}}$$

যেখানে
$$\\text{CFADS} = \\text{EBITDA} - \\text{Cash Tax} - \\text{Maintenance Capex}$$

**পরিচালন লিভারেজের মাত্রা:**
$$\\text{DOL} = \\frac{\\%\\Delta \\text{EBIT}}{\\%\\Delta \\text{Revenue}}$$

**আর্থিক লিভারেজের মাত্রা:**
$$\\text{DFL} = \\frac{\\%\\Delta \\text{Net Profit}}{\\%\\Delta \\text{EBIT}} = \\frac{\\text{EBIT}}{\\text{EBIT} - \\text{Interest}}$$

**মোট লিভারেজের মাত্রা** — এরা গুণ হয়:
$$\\text{DTL} = \\text{DOL} \\times \\text{DFL}$$

---

**ব্রেকইভেন EBITDA।** এই অধ্যায়ের কেন্দ্রবিন্দু। EBIT সুদের সমান হলে সুদ কভারেজ ১.০। যেহেতু $\\text{EBIT} = \\text{EBITDA} - D$:

$$\\frac{\\text{EBITDA} - D}{I} = 1 \\;\\Rightarrow\\; \\text{EBITDA} - D = I \\;\\Rightarrow\\; \\boxed{\\text{EBITDA}_{be} = I + D}$$

যেখানে $I$ সুদ ব্যয় এবং $D$ অবচয় ও পরিশোধ।

**সংকট থেকে দূরত্ব**, সহনীয় শতকরা পতন হিসেবে প্রকাশিত:
$$\\text{Decline}_{breach} = \\frac{\\text{EBITDA}_0 - \\text{EBITDA}_{be}}{\\text{EBITDA}_0} \\times 100$$

যেকোনো লক্ষ্য কভারেজ $c$-এর জন্য সাধারণীকৃত:
$$\\text{EBITDA}_{c} = cI + D$$

**সম্পদ লিভারেজ** — কোম্পানি স্তরের সম্পদ পরিবর্তন কীভাবে ইকুইটিতে মানচিত্রিত হয়:
$$\\lambda_{firm} = \\frac{\\text{Total Assets}}{\\text{Equity}}$$

**সম্মিলিত লিভারেজ** — অধ্যায় ৫-এর অ্যাকাউন্ট লিভারেজ গুণ এই অধ্যায়ের কোম্পানি লিভারেজ:
$$\\lambda_{total} = \\lambda_{firm} \\times \\lambda_{account} = \\frac{\\text{Total Assets}}{\\text{Equity}} \\times (1 + \\text{margin ratio})$$

$$\\text{Loss on own capital} = -\\,\\lambda_{total} \\times \\%\\text{ fall in asset value}$$`,
    },

    manual: {
      en: `**Inputs (BDT crore).** EBITDA 240. Depreciation & amortisation 60. Interest expense 112.5. Total debt 1,120, of which short-term 620. Cash 112. Equity 800. Total assets 2,400. Cash tax 15. Maintenance capex 35. Principal due within 12 months 140.

**Step 1 — EBIT.**
$$\\text{EBIT} = 240 - 60 = \\text{BDT } 180.00 \\text{ crore}$$

**Step 2 — Net debt.**
$$\\text{Net Debt} = 1{,}120 - 112 = \\text{BDT } 1{,}008.00 \\text{ crore}$$

**Step 3 — Debt-to-Equity.**
$$\\text{D/E} = \\frac{1{,}120}{800} = 1.40\\times$$

**Step 4 — Net Debt to Equity.**
$$\\frac{1{,}008}{800} = 1.26\\times$$

**Step 5 — Debt-to-Assets.**
$$\\frac{1{,}120}{2{,}400} \\times 100 = 46.67\\%$$

**Step 6 — Net Debt / EBITDA.**
$$\\frac{1{,}008}{240} = 4.20\\times$$

Four years and two months of every taka of current cash earnings, applied to nothing but debt repayment, to clear the balance sheet. That is the honest translation of 4.20×.

**Step 7 — Interest coverage on EBIT.**
$$\\text{ICR} = \\frac{180}{112.5} = 1.60\\times$$

**Step 8 — Interest coverage on EBITDA** (shown only to demonstrate why it misleads).
$$\\frac{240}{112.5} = 2.13\\times$$

EBITDA coverage looks 33% healthier. It is not. It reaches that figure by pretending the kilns do not wear out.

**Step 9 — Cash flow available for debt service.**
$$\\text{CFADS} = 240 - 15 - 35 = \\text{BDT } 190.00 \\text{ crore}$$

**Step 10 — Debt service due.**
$$\\text{Debt Service} = 112.5 + 140 = \\text{BDT } 252.50 \\text{ crore}$$

**Step 11 — DSCR.**
$$\\text{DSCR} = \\frac{190.00}{252.50} = 0.75\\times$$

**Stop here and read that number properly.** The company generates BDT 190 crore of cash for debt service and owes BDT 252.5 crore of it this year. It is short by BDT 62.5 crore. There is no operational fix for that gap. It is closed by a bank agreeing to roll.

**Step 12 — Short-term share of the debt stack.**
$$\\frac{620}{1{,}120} \\times 100 = 55.36\\%$$

More than half the debt requires a fresh credit decision within twelve months, by a lender under no obligation to say yes.

**Step 13 — Breakeven EBITDA.** Coverage equals 1.0 when EBIT equals interest:
$$\\text{EBIT} = \\text{EBITDA} - 60 = 112.5$$
$$\\text{EBITDA}_{be} = 112.5 + 60 = \\text{BDT } 172.50 \\text{ crore}$$

**Step 14 — Cushion in absolute terms.**
$$240.00 - 172.50 = \\text{BDT } 67.50 \\text{ crore}$$

**Step 15 — Express it as a percentage decline.**
$$\\frac{67.50}{240.00} \\times 100 = 28.125\\%$$

**Step 16 — Verify at the breach point.**
$$\\text{EBITDA} = 240 \\times (1 - 0.28125) = 172.50$$
$$\\text{EBIT} = 172.50 - 60 = 112.50$$
$$\\text{ICR} = \\frac{112.50}{112.50} = 1.00\\times \\;\\checkmark$$

**Step 17 — Asset leverage.**
$$\\lambda_{firm} = \\frac{2{,}400}{800} = 3.00\\times$$

**Step 18 — Compounded with a 1:1 margin account.**
$$\\lambda_{total} = 3.00 \\times 2.00 = 6.00\\times$$

A 10% fall in the value of the underlying assets:
$$\\text{Equity value} = -10\\% \\times 3.00 = -30.0\\%$$
$$\\text{Own capital} = -10\\% \\times 6.00 = -60.0\\%$$

---

**Interpretation. Three numbers carry this chapter.**

**28.125%** — the EBITDA decline that breaks interest coverage. Write this number down for every levered company you own. It converts a vague sense that "the balance sheet is stretched" into a specific, falsifiable operational threshold. You can then ask a real question: *has this business ever had a year that bad?* For a Bangladeshi cement producer facing dollar-denominated clinker, gas tariff revisions, and a government capex cycle, the answer is yes, repeatedly.

**0.75×** — the DSCR. This is the number that tells you the company is not financing itself. Interest coverage of 1.60× is the number the company will quote to you. DSCR is the number the lender computes. **When the two disagree this violently, the lender's number is the true one.**

**6.00×** — the compounded leverage if you hold it on margin. Chapter 5 taught you to compute $P_{call}$ before borrowing. This chapter adds the prior step: **compute the company's own leverage before you decide whether it is a candidate for margin at all.** A 3.0× levered balance sheet in a 2.0× levered account is not an aggressive position. It is a position that requires a 16.7% asset decline to eliminate you entirely.

**The discipline:** never assess a leverage ratio as a level. Assess it as a distance. "Net debt/EBITDA is 4.2×" is a fact with no decision attached. "This company breaches interest coverage on a 28% EBITDA decline, and has done so twice in the last decade" is an investment conclusion.`,
      bn: `**ইনপুট (কোটি টাকা)।** EBITDA ২৪০। অবচয় ও পরিশোধ ৬০। সুদ ব্যয় ১১২.৫। মোট ঋণ ১,১২০, যার স্বল্পমেয়াদি ৬২০। নগদ ১১২। ইকুইটি ৮০০। মোট সম্পদ ২,৪০০। নগদ কর ১৫। রক্ষণাবেক্ষণ মূলধনি ব্যয় ৩৫। ১২ মাসে প্রদেয় আসল ১৪০।

**ধাপ ১ — EBIT।**
$$\\text{EBIT} = 240 - 60 = \\text{BDT } 180.00 \\text{ crore}$$

**ধাপ ২ — নেট ঋণ।**
$$\\text{Net Debt} = 1{,}120 - 112 = \\text{BDT } 1{,}008.00 \\text{ crore}$$

**ধাপ ৩ — ঋণ-ইকুইটি।**
$$\\text{D/E} = \\frac{1{,}120}{800} = 1.40\\times$$

**ধাপ ৪ — নেট ঋণ-ইকুইটি।**
$$\\frac{1{,}008}{800} = 1.26\\times$$

**ধাপ ৫ — ঋণ-সম্পদ।**
$$\\frac{1{,}120}{2{,}400} \\times 100 = 46.67\\%$$

**ধাপ ৬ — নেট ঋণ / EBITDA।**
$$\\frac{1{,}008}{240} = 4.20\\times$$

স্থিতিপত্র পরিষ্কার করতে বর্তমান নগদ আয়ের প্রতিটি টাকা কেবল ঋণ পরিশোধে লাগালে চার বছর দুই মাস। ৪.২০×-এর সৎ অনুবাদ এটাই।

**ধাপ ৭ — EBIT-ভিত্তিক সুদ কভারেজ।**
$$\\text{ICR} = \\frac{180}{112.5} = 1.60\\times$$

**ধাপ ৮ — EBITDA-ভিত্তিক সুদ কভারেজ** (কেবল দেখানোর জন্য যে এটি কীভাবে বিভ্রান্ত করে)।
$$\\frac{240}{112.5} = 2.13\\times$$

EBITDA কভারেজ ৩৩% বেশি সুস্থ দেখায়। তা নয়। ভাটা ক্ষয় হয় না — এই ভান করেই সে ঐ সংখ্যায় পৌঁছায়।

**ধাপ ৯ — ঋণ পরিশোধের জন্য প্রাপ্য নগদ প্রবাহ।**
$$\\text{CFADS} = 240 - 15 - 35 = \\text{BDT } 190.00 \\text{ crore}$$

**ধাপ ১০ — প্রদেয় ঋণ সেবা।**
$$\\text{Debt Service} = 112.5 + 140 = \\text{BDT } 252.50 \\text{ crore}$$

**ধাপ ১১ — DSCR।**
$$\\text{DSCR} = \\frac{190.00}{252.50} = 0.75\\times$$

**এখানে থামুন এবং সংখ্যাটি ঠিকভাবে পড়ুন।** কোম্পানি ঋণ পরিশোধের জন্য ১৯০ কোটি টাকা নগদ তৈরি করে এবং এ বছর ২৫২.৫ কোটি টাকা পরিশোধ করতে হয়। ঘাটতি ৬২.৫ কোটি টাকা। ঐ ফাঁকের কোনো পরিচালনগত সমাধান নেই। এটি বন্ধ হয় একটি ব্যাংক নবায়নে রাজি হলে।

**ধাপ ১২ — ঋণকাঠামোয় স্বল্পমেয়াদির অংশ।**
$$\\frac{620}{1{,}120} \\times 100 = 55.36\\%$$

অর্ধেকের বেশি ঋণের জন্য বারো মাসের মধ্যে নতুন ঋণ সিদ্ধান্ত দরকার, এমন এক ঋণদাতার কাছ থেকে যাঁর হ্যাঁ বলার কোনো বাধ্যবাধকতা নেই।

**ধাপ ১৩ — ব্রেকইভেন EBITDA।** EBIT সুদের সমান হলে কভারেজ ১.০:
$$\\text{EBIT} = \\text{EBITDA} - 60 = 112.5$$
$$\\text{EBITDA}_{be} = 112.5 + 60 = \\text{BDT } 172.50 \\text{ crore}$$

**ধাপ ১৪ — পরম অঙ্কে কুশন।**
$$240.00 - 172.50 = \\text{BDT } 67.50 \\text{ crore}$$

**ধাপ ১৫ — শতকরা পতন হিসেবে প্রকাশ।**
$$\\frac{67.50}{240.00} \\times 100 = 28.125\\%$$

**ধাপ ১৬ — ভঙ্গবিন্দুতে যাচাই।**
$$\\text{EBITDA} = 240 \\times (1 - 0.28125) = 172.50$$
$$\\text{EBIT} = 172.50 - 60 = 112.50$$
$$\\text{ICR} = \\frac{112.50}{112.50} = 1.00\\times \\;\\checkmark$$

**ধাপ ১৭ — সম্পদ লিভারেজ।**
$$\\lambda_{firm} = \\frac{2{,}400}{800} = 3.00\\times$$

**ধাপ ১৮ — ১:১ মার্জিন অ্যাকাউন্টের সঙ্গে সম্মিলিত।**
$$\\lambda_{total} = 3.00 \\times 2.00 = 6.00\\times$$

অন্তর্নিহিত সম্পদের মূল্যে ১০% পতনে:
$$\\text{Equity value} = -10\\% \\times 3.00 = -30.0\\%$$
$$\\text{Own capital} = -10\\% \\times 6.00 = -60.0\\%$$

---

**ব্যাখ্যা। তিনটি সংখ্যা এই অধ্যায়টি বহন করে।**

**২৮.১২৫%** — যে EBITDA পতন সুদ কভারেজ ভাঙে। আপনার মালিকানাধীন প্রতিটি লিভারেজড কোম্পানির জন্য এই সংখ্যাটি লিখে রাখুন। এটি "স্থিতিপত্র টানটান" এই অস্পষ্ট বোধকে একটি সুনির্দিষ্ট, যাচাইযোগ্য পরিচালনগত সীমায় রূপান্তরিত করে। তারপর আপনি একটি বাস্তব প্রশ্ন করতে পারেন: *এই ব্যবসার কি কখনো এত খারাপ বছর গেছে?* ডলারে মূল্যায়িত ক্লিংকার, গ্যাস ট্যারিফ সংশোধন ও সরকারি মূলধনি ব্যয় চক্রের মুখোমুখি বাংলাদেশি সিমেন্ট উৎপাদকের জন্য উত্তরটি হ্যাঁ, বারবার।

**০.৭৫×** — DSCR। এই সংখ্যাটিই বলে কোম্পানিটি নিজেকে অর্থায়ন করছে না। ১.৬০× সুদ কভারেজ সেই সংখ্যা যা কোম্পানি আপনাকে বলবে। DSCR সেই সংখ্যা যা ঋণদাতা গণনা করে। **দুটি যখন এত তীব্রভাবে অমিল, তখন ঋণদাতার সংখ্যাটিই সত্য।**

**৬.০০×** — মার্জিনে ধরলে সম্মিলিত লিভারেজ। অধ্যায় ৫ শিখিয়েছিল ধার নেওয়ার আগে $P_{call}$ গণনা করতে। এই অধ্যায় তার আগের ধাপটি যোগ করে: **কোম্পানিটি আদৌ মার্জিনের যোগ্য কি না তা ঠিক করার আগে কোম্পানির নিজের লিভারেজ গণনা করুন।** ২.০× লিভারেজড অ্যাকাউন্টে ৩.০× লিভারেজড স্থিতিপত্র আক্রমণাত্মক পজিশন নয়। এটি এমন এক পজিশন যেখানে আপনাকে সম্পূর্ণ মুছে ফেলতে ১৬.৭% সম্পদ পতনই যথেষ্ট।

**শৃঙ্খলা:** কখনো লিভারেজ অনুপাতকে একটি স্তর হিসেবে মূল্যায়ন করবেন না। একে দূরত্ব হিসেবে মূল্যায়ন করুন। "নেট ঋণ/EBITDA ৪.২×" একটি তথ্য, এর সঙ্গে কোনো সিদ্ধান্ত জড়িত নেই। "এই কোম্পানি ২৮% EBITDA পতনে সুদ কভারেজ ভাঙে, এবং গত দশকে দুইবার তা ভেঙেছে" — এটি একটি বিনিয়োগ সিদ্ধান্ত।`,
    },

    excel: {
      en: `\`\`\`
A1:  COMPANY                          B1:  DSE Cement Co (illustrative)

A3:  Revenue (BDT cr)                 B3:  1450
A4:  EBITDA (BDT cr)                  B4:  240
A5:  Depreciation & Amortisation      B5:  60
A6:  EBIT                             B6:  =B4-B5
A7:  Interest Expense                 B7:  112.5

A9:  Total Debt                       B9:  1120
A10: of which Short-Term (rolled)     B10: 620
A11: Cash & Equivalents               B11: 112
A12: Net Debt                         B12: =B9-B11
A13: Shareholders' Equity             B13: 800
A14: Total Assets                     B14: 2400

A16: Cash Tax Paid                    B16: 15
A17: Maintenance Capex                B17: 35
A18: Principal Due next 12m           B18: 140

A20: RATIOS
A21: Debt / Equity (x)                B21: =B9/B13
A22: Net Debt / Equity (x)            B22: =B12/B13
A23: Debt / Assets (%)                B23: =B9/B14*100
A24: Net Debt / EBITDA (x)            B24: =B12/B4
A25: Interest Coverage EBIT (x)       B25: =B6/B7
A26: Interest Coverage EBITDA (x)     B26: =B4/B7
A27: CFADS (BDT cr)                   B27: =B4-B16-B17
A28: Debt Service (BDT cr)            B28: =B7+B18
A29: DSCR (x)                         B29: =B27/B28
A30: Short-Term Share of Debt (%)     B30: =B10/B9*100
A31: Asset Leverage (x)               B31: =B14/B13

A33: DISTANCE TO DISTRESS
A34: Breakeven EBITDA (coverage=1.0)  B34: =B7+B5
A35: Cushion (BDT cr)                 B35: =B4-B34
A36: EBITDA DECLINE TO BREACH (%)     B36: =(B4-B34)/B4*100
A37: VERDICT                          B37: =IF(OR(B29<1,B36<20),
                                             "DISTRESSED - solvent while lenders roll",
                                             IF(B36<35,"FRAGILE","Adequate"))

A39: COMPOUNDED RISK (see Chapter 5)
A40: Investor Margin Ratio (1:x)      B40: 1
A41: Account Leverage (x)             B41: =1+B40
A42: COMBINED LEVERAGE (x)            B42: =B31*B41
A43: Asset Value Fall (%)             B43: 10
A44: Loss on Own Capital (%)          B44: =-B43*B42
\`\`\`

**B36 is the sheet.** Everything above it is bookkeeping; B36 is the decision variable. It converts a balance sheet into a single question: *how much bad news can this company absorb before its lender, rather than its board, decides what happens next?*

**Use it as a screen, not a report.** Paste the same block for every levered holding in your portfolio and sort by B36 ascending. The companies at the top of that sorted list are the ones that will require your attention first in the next downturn — and, if you own several of them, they will require it on the same day.

**Set B40 to 2 to see the 2010 margin regime.** Combined leverage rises to 9.00× and a 10% asset impairment produces a 90% loss on own capital. Then read B37 and B44 together. If B37 says DISTRESSED and B44 exceeds your total risk budget, the position is not a trade you are managing. It is an outcome you have already chosen.`,
      bn: `\`\`\`
A1:  কোম্পানি                          B1:  DSE Cement Co (illustrative)

A3:  রাজস্ব (কোটি টাকা)                 B3:  1450
A4:  EBITDA (কোটি টাকা)                B4:  240
A5:  অবচয় ও পরিশোধ                     B5:  60
A6:  EBIT                             B6:  =B4-B5
A7:  সুদ ব্যয়                          B7:  112.5

A9:  মোট ঋণ                            B9:  1120
A10: যার স্বল্পমেয়াদি (নবায়িত)          B10: 620
A11: নগদ ও সমতুল্য                      B11: 112
A12: নেট ঋণ                            B12: =B9-B11
A13: শেয়ারহোল্ডারদের ইকুইটি             B13: 800
A14: মোট সম্পদ                          B14: 2400

A16: প্রদত্ত নগদ কর                     B16: 15
A17: রক্ষণাবেক্ষণ মূলধনি ব্যয়            B17: 35
A18: ১২ মাসে প্রদেয় আসল                B18: 140

A20: অনুপাতসমূহ
A21: ঋণ / ইকুইটি (x)                    B21: =B9/B13
A22: নেট ঋণ / ইকুইটি (x)                B22: =B12/B13
A23: ঋণ / সম্পদ (%)                     B23: =B9/B14*100
A24: নেট ঋণ / EBITDA (x)               B24: =B12/B4
A25: সুদ কভারেজ EBIT (x)                B25: =B6/B7
A26: সুদ কভারেজ EBITDA (x)              B26: =B4/B7
A27: CFADS (কোটি টাকা)                  B27: =B4-B16-B17
A28: ঋণ সেবা (কোটি টাকা)                B28: =B7+B18
A29: DSCR (x)                          B29: =B27/B28
A30: ঋণে স্বল্পমেয়াদির অংশ (%)          B30: =B10/B9*100
A31: সম্পদ লিভারেজ (x)                  B31: =B14/B13

A33: সংকট থেকে দূরত্ব
A34: ব্রেকইভেন EBITDA (কভারেজ=১.০)      B34: =B7+B5
A35: কুশন (কোটি টাকা)                   B35: =B4-B34
A36: ভঙ্গ পর্যন্ত EBITDA পতন (%)         B36: =(B4-B34)/B4*100
A37: রায়                               B37: =IF(OR(B29<1,B36<20),
                                             "DISTRESSED - solvent while lenders roll",
                                             IF(B36<35,"FRAGILE","Adequate"))

A39: সম্মিলিত ঝুঁকি (অধ্যায় ৫ দ্রষ্টব্য)
A40: বিনিয়োগকারীর মার্জিন অনুপাত (১:x)   B40: 1
A41: অ্যাকাউন্ট লিভারেজ (x)              B41: =1+B40
A42: সম্মিলিত লিভারেজ (x)                B42: =B31*B41
A43: সম্পদমূল্যের পতন (%)                B43: 10
A44: নিজস্ব মূলধনে ক্ষতি (%)             B44: =-B43*B42
\`\`\`

**B36-ই এই শিটটি।** তার ওপরের সবকিছু হিসাবরক্ষণ; B36 হলো সিদ্ধান্তের চলক। এটি একটি স্থিতিপত্রকে একটিমাত্র প্রশ্নে রূপান্তরিত করে: *এই কোম্পানির পর্ষদ নয় বরং তার ঋণদাতা পরবর্তী পদক্ষেপ ঠিক করার আগে কোম্পানিটি কতটা খারাপ খবর শুষে নিতে পারে?*

**একে প্রতিবেদন নয়, স্ক্রিন হিসেবে ব্যবহার করুন।** পোর্টফোলিওর প্রতিটি লিভারেজড হোল্ডিংয়ের জন্য একই ব্লক বসান এবং B36 অনুযায়ী ঊর্ধ্বক্রমে সাজান। ঐ তালিকার শীর্ষের কোম্পানিগুলোই পরবর্তী মন্দায় প্রথম আপনার মনোযোগ দাবি করবে — এবং আপনার কাছে যদি কয়েকটি থাকে, তারা একই দিনে তা দাবি করবে।

**২০১০ সালের মার্জিন ব্যবস্থা দেখতে B40-তে ২ বসান।** সম্মিলিত লিভারেজ ওঠে ৯.০০×-এ এবং ১০% সম্পদ অবচয় নিজস্ব মূলধনে ৯০% ক্ষতি তৈরি করে। তারপর B37 ও B44 একসঙ্গে পড়ুন। B37 যদি DISTRESSED বলে এবং B44 আপনার মোট ঝুঁকি বাজেট ছাড়িয়ে যায়, তবে পজিশনটি আপনার পরিচালিত কোনো লেনদেন নয়। এটি এমন একটি ফলাফল যা আপনি ইতিমধ্যে বেছে নিয়েছেন।`,
    },

    python: {
      en: `\`\`\`python
"""
Chapter 17 — Leverage and solvency for a DSE-listed cement company.
All figures in BDT crore. Educational.
"""
from dataclasses import dataclass
from typing import List


@dataclass
class Solvency:
    """One company's capital structure and its distance to distress."""
    name: str
    revenue: float
    ebitda: float
    depreciation: float
    interest: float
    total_debt: float
    short_term_debt: float
    cash: float
    equity: float
    total_assets: float
    principal_due_12m: float
    cash_tax: float
    maintenance_capex: float

    # ---- structure -------------------------------------------------
    @property
    def ebit(self) -> float:
        return self.ebitda - self.depreciation

    @property
    def net_debt(self) -> float:
        return self.total_debt - self.cash

    @property
    def debt_to_equity(self) -> float:
        return self.total_debt / self.equity

    @property
    def net_debt_to_equity(self) -> float:
        return self.net_debt / self.equity

    @property
    def debt_to_assets_pct(self) -> float:
        return self.total_debt / self.total_assets * 100

    @property
    def short_term_share_pct(self) -> float:
        return self.short_term_debt / self.total_debt * 100

    @property
    def asset_leverage(self) -> float:
        """Total assets / equity. How a 1% asset move maps to equity."""
        return self.total_assets / self.equity

    # ---- burden ----------------------------------------------------
    @property
    def net_debt_to_ebitda(self) -> float:
        return self.net_debt / self.ebitda

    @property
    def interest_coverage(self) -> float:
        """EBIT / interest. The classical definition."""
        return self.ebit / self.interest

    @property
    def ebitda_coverage(self) -> float:
        return self.ebitda / self.interest

    @property
    def cfads(self) -> float:
        """Cash flow available for debt service."""
        return self.ebitda - self.cash_tax - self.maintenance_capex

    @property
    def debt_service(self) -> float:
        return self.interest + self.principal_due_12m

    @property
    def dscr(self) -> float:
        return self.cfads / self.debt_service

    # ---- distance to distress --------------------------------------
    @property
    def breakeven_ebitda(self) -> float:
        """EBITDA at which EBIT interest coverage is exactly 1.0."""
        return self.interest + self.depreciation

    @property
    def cushion(self) -> float:
        return self.ebitda - self.breakeven_ebitda

    @property
    def decline_to_breach_pct(self) -> float:
        return self.cushion / self.ebitda * 100

    def compounded_loss_pct(self, asset_fall_pct: float,
                            margin_ratio: float) -> float:
        """Chapter 5 meets Chapter 17: firm leverage times account leverage."""
        account_leverage = 1.0 + margin_ratio
        return -asset_fall_pct * self.asset_leverage * account_leverage

    def flags(self) -> List[str]:
        out = []
        if self.net_debt_to_ebitda > 3.0:
            out.append("Net debt/EBITDA above 3.0x")
        if self.interest_coverage < 2.5:
            out.append("Interest coverage below 2.5x")
        if self.dscr < 1.0:
            out.append("DSCR below 1.0x - cannot self-fund debt service")
        if self.short_term_share_pct > 50.0:
            out.append("Majority of debt is short-term and must be rolled")
        if self.decline_to_breach_pct < 35.0:
            out.append("Under 35% EBITDA cushion to a coverage breach")
        return out

    def verdict(self) -> str:
        n = len(self.flags())
        if n >= 4:
            return "DISTRESSED - solvent only while lenders keep rolling"
        if n >= 2:
            return "FRAGILE - one bad year from a covenant breach"
        if n == 1:
            return "WATCH"
        return "ADEQUATE"


def sensitivity(s: Solvency, declines) -> None:
    print(f"{'EBITDA fall':>12} {'EBITDA':>9} {'EBIT':>9} {'Coverage':>9}  Status")
    print("-" * 55)
    for d in declines:
        eb = s.ebitda * (1 - d / 100)
        ebit = eb - s.depreciation
        cov = ebit / s.interest
        status = "BREACHED" if cov < 1.0 else ("at 1.0x" if abs(cov - 1.0) < 0.005 else "ok")
        print(f"{d:>11.1f}% {eb:>9.2f} {ebit:>9.2f} {cov:>9.2f}  {status}")


if __name__ == "__main__":
    co = Solvency(
        name="DSE Cement Co (illustrative)",
        revenue=1450.0,
        ebitda=240.0,
        depreciation=60.0,
        interest=112.5,
        total_debt=1120.0,
        short_term_debt=620.0,
        cash=112.0,
        equity=800.0,
        total_assets=2400.0,
        principal_due_12m=140.0,
        cash_tax=15.0,
        maintenance_capex=35.0,
    )

    print(f"Company                      : {co.name}")
    print(f"EBITDA (BDT cr)              : {co.ebitda:,.2f}")
    print(f"EBIT (BDT cr)                : {co.ebit:,.2f}")
    print(f"Net debt (BDT cr)            : {co.net_debt:,.2f}")
    print()
    print(f"Debt / Equity                : {co.debt_to_equity:.2f}x")
    print(f"Net debt / Equity            : {co.net_debt_to_equity:.2f}x")
    print(f"Debt / Assets                : {co.debt_to_assets_pct:.2f}%")
    print(f"Net debt / EBITDA            : {co.net_debt_to_ebitda:.2f}x")
    print(f"Interest coverage (EBIT)     : {co.interest_coverage:.2f}x")
    print(f"Interest coverage (EBITDA)   : {co.ebitda_coverage:.2f}x")
    print(f"CFADS (BDT cr)               : {co.cfads:,.2f}")
    print(f"Debt service (BDT cr)        : {co.debt_service:,.2f}")
    print(f"DSCR                         : {co.dscr:.2f}x")
    print(f"Short-term share of debt     : {co.short_term_share_pct:.2f}%")
    print(f"Asset leverage               : {co.asset_leverage:.2f}x")
    print()
    print(f"BREAKEVEN EBITDA (cov = 1.0) : {co.breakeven_ebitda:,.2f}")
    print(f"Cushion (BDT cr)             : {co.cushion:,.2f}")
    print(f"EBITDA DECLINE TO BREACH     : {co.decline_to_breach_pct:.3f}%")
    print()

    sensitivity(co, [0.0, 10.0, 20.0, 28.125, 35.0, 50.0])
    print()

    print("Flags:")
    for f in co.flags():
        print(f"  - {f}")
    print(f"VERDICT: {co.verdict()}")
    print()

    print("Compounded leverage (Chapter 5 x Chapter 17):")
    print(f"{'Asset fall':>11} {'Equity fall':>12} {'Own capital (1:1 margin)':>26}")
    print("-" * 51)
    for fall in (5.0, 10.0, 15.0):
        eq = -fall * co.asset_leverage
        own = co.compounded_loss_pct(fall, margin_ratio=1.0)
        print(f"{fall:>10.1f}% {eq:>11.1f}% {own:>25.1f}%")
\`\`\`

**Expected output:**

\`\`\`
Company                      : DSE Cement Co (illustrative)
EBITDA (BDT cr)              : 240.00
EBIT (BDT cr)                : 180.00
Net debt (BDT cr)            : 1,008.00

Debt / Equity                : 1.40x
Net debt / Equity            : 1.26x
Debt / Assets                : 46.67%
Net debt / EBITDA            : 4.20x
Interest coverage (EBIT)     : 1.60x
Interest coverage (EBITDA)   : 2.13x
CFADS (BDT cr)               : 190.00
Debt service (BDT cr)        : 252.50
DSCR                         : 0.75x
Short-term share of debt     : 55.36%
Asset leverage               : 3.00x

BREAKEVEN EBITDA (cov = 1.0) : 172.50
Cushion (BDT cr)             : 67.50
EBITDA DECLINE TO BREACH     : 28.125%

 EBITDA fall    EBITDA      EBIT  Coverage  Status
-------------------------------------------------------
        0.0%    240.00    180.00      1.60  ok
       10.0%    216.00    156.00      1.39  ok
       20.0%    192.00    132.00      1.17  ok
       28.1%    172.50    112.50      1.00  at 1.0x
       35.0%    156.00     96.00      0.85  BREACHED
       50.0%    120.00     60.00      0.53  BREACHED

Flags:
  - Net debt/EBITDA above 3.0x
  - Interest coverage below 2.5x
  - DSCR below 1.0x - cannot self-fund debt service
  - Majority of debt is short-term and must be rolled
  - Under 35% EBITDA cushion to a coverage breach
VERDICT: DISTRESSED - solvent only while lenders keep rolling

Compounded leverage (Chapter 5 x Chapter 17):
 Asset fall  Equity fall   Own capital (1:1 margin)
---------------------------------------------------
       5.0%       -15.0%                     -30.0%
      10.0%       -30.0%                     -60.0%
      15.0%       -45.0%                     -90.0%
\`\`\`

**Five flags fire simultaneously, and that is the point.** These are not five independent problems. They are five views of one problem: the company's operations do not generate enough cash to retire its capital structure, so it survives by continuously persuading lenders to postpone. Every flag is a different angle on the same dependency.

**Change one input at a time and watch what does and does not help.** Cut interest to 60 by assuming a refinancing at a lower rate: breakeven EBITDA falls to 120 and the cushion widens to 50%. Now instead cut total debt to 700 while leaving the rate unchanged: the coverage ratio improves far less than you would expect, because coverage is driven by the interest *rate* as much as the *quantum*. **A Bangladeshi company that borrows heavily at a low rate and a company that borrows moderately at a high rate can have identical coverage.** Only DSCR and net debt/EBITDA distinguish them — which is exactly why lenders look at those two and retail investors look at D/E.`,
      bn: `\`\`\`python
"""
অধ্যায় ১৭ — একটি ডিএসই-তালিকাভুক্ত সিমেন্ট কোম্পানির লিভারেজ ও স্বচ্ছলতা।
সব পরিসংখ্যান কোটি টাকায়। শিক্ষামূলক।
"""
from dataclasses import dataclass
from typing import List


@dataclass
class Solvency:
    """একটি কোম্পানির মূলধন কাঠামো ও সংকট থেকে তার দূরত্ব।"""
    name: str
    revenue: float
    ebitda: float
    depreciation: float
    interest: float
    total_debt: float
    short_term_debt: float
    cash: float
    equity: float
    total_assets: float
    principal_due_12m: float
    cash_tax: float
    maintenance_capex: float

    # ---- কাঠামো ----------------------------------------------------
    @property
    def ebit(self) -> float:
        return self.ebitda - self.depreciation

    @property
    def net_debt(self) -> float:
        return self.total_debt - self.cash

    @property
    def debt_to_equity(self) -> float:
        return self.total_debt / self.equity

    @property
    def net_debt_to_equity(self) -> float:
        return self.net_debt / self.equity

    @property
    def debt_to_assets_pct(self) -> float:
        return self.total_debt / self.total_assets * 100

    @property
    def short_term_share_pct(self) -> float:
        return self.short_term_debt / self.total_debt * 100

    @property
    def asset_leverage(self) -> float:
        """মোট সম্পদ / ইকুইটি। ১% সম্পদ পরিবর্তন ইকুইটিতে কীভাবে যায়।"""
        return self.total_assets / self.equity

    # ---- ভার -------------------------------------------------------
    @property
    def net_debt_to_ebitda(self) -> float:
        return self.net_debt / self.ebitda

    @property
    def interest_coverage(self) -> float:
        """EBIT / সুদ। ধ্রুপদী সংজ্ঞা।"""
        return self.ebit / self.interest

    @property
    def ebitda_coverage(self) -> float:
        return self.ebitda / self.interest

    @property
    def cfads(self) -> float:
        """ঋণ পরিশোধের জন্য প্রাপ্য নগদ প্রবাহ।"""
        return self.ebitda - self.cash_tax - self.maintenance_capex

    @property
    def debt_service(self) -> float:
        return self.interest + self.principal_due_12m

    @property
    def dscr(self) -> float:
        return self.cfads / self.debt_service

    # ---- সংকট থেকে দূরত্ব -------------------------------------------
    @property
    def breakeven_ebitda(self) -> float:
        """যে EBITDA-তে EBIT সুদ কভারেজ ঠিক ১.০।"""
        return self.interest + self.depreciation

    @property
    def cushion(self) -> float:
        return self.ebitda - self.breakeven_ebitda

    @property
    def decline_to_breach_pct(self) -> float:
        return self.cushion / self.ebitda * 100

    def compounded_loss_pct(self, asset_fall_pct: float,
                            margin_ratio: float) -> float:
        """অধ্যায় ৫ ও ১৭-এর মিলন: কোম্পানি লিভারেজ গুণ অ্যাকাউন্ট লিভারেজ।"""
        account_leverage = 1.0 + margin_ratio
        return -asset_fall_pct * self.asset_leverage * account_leverage

    def flags(self) -> List[str]:
        out = []
        if self.net_debt_to_ebitda > 3.0:
            out.append("Net debt/EBITDA above 3.0x")
        if self.interest_coverage < 2.5:
            out.append("Interest coverage below 2.5x")
        if self.dscr < 1.0:
            out.append("DSCR below 1.0x - cannot self-fund debt service")
        if self.short_term_share_pct > 50.0:
            out.append("Majority of debt is short-term and must be rolled")
        if self.decline_to_breach_pct < 35.0:
            out.append("Under 35% EBITDA cushion to a coverage breach")
        return out

    def verdict(self) -> str:
        n = len(self.flags())
        if n >= 4:
            return "DISTRESSED - solvent only while lenders keep rolling"
        if n >= 2:
            return "FRAGILE - one bad year from a covenant breach"
        if n == 1:
            return "WATCH"
        return "ADEQUATE"


def sensitivity(s: Solvency, declines) -> None:
    print(f"{'EBITDA fall':>12} {'EBITDA':>9} {'EBIT':>9} {'Coverage':>9}  Status")
    print("-" * 55)
    for d in declines:
        eb = s.ebitda * (1 - d / 100)
        ebit = eb - s.depreciation
        cov = ebit / s.interest
        status = "BREACHED" if cov < 1.0 else ("at 1.0x" if abs(cov - 1.0) < 0.005 else "ok")
        print(f"{d:>11.1f}% {eb:>9.2f} {ebit:>9.2f} {cov:>9.2f}  {status}")


if __name__ == "__main__":
    co = Solvency(
        name="DSE Cement Co (illustrative)",
        revenue=1450.0,
        ebitda=240.0,
        depreciation=60.0,
        interest=112.5,
        total_debt=1120.0,
        short_term_debt=620.0,
        cash=112.0,
        equity=800.0,
        total_assets=2400.0,
        principal_due_12m=140.0,
        cash_tax=15.0,
        maintenance_capex=35.0,
    )

    print(f"Company                      : {co.name}")
    print(f"EBITDA (BDT cr)              : {co.ebitda:,.2f}")
    print(f"EBIT (BDT cr)                : {co.ebit:,.2f}")
    print(f"Net debt (BDT cr)            : {co.net_debt:,.2f}")
    print()
    print(f"Debt / Equity                : {co.debt_to_equity:.2f}x")
    print(f"Net debt / Equity            : {co.net_debt_to_equity:.2f}x")
    print(f"Debt / Assets                : {co.debt_to_assets_pct:.2f}%")
    print(f"Net debt / EBITDA            : {co.net_debt_to_ebitda:.2f}x")
    print(f"Interest coverage (EBIT)     : {co.interest_coverage:.2f}x")
    print(f"Interest coverage (EBITDA)   : {co.ebitda_coverage:.2f}x")
    print(f"CFADS (BDT cr)               : {co.cfads:,.2f}")
    print(f"Debt service (BDT cr)        : {co.debt_service:,.2f}")
    print(f"DSCR                         : {co.dscr:.2f}x")
    print(f"Short-term share of debt     : {co.short_term_share_pct:.2f}%")
    print(f"Asset leverage               : {co.asset_leverage:.2f}x")
    print()
    print(f"BREAKEVEN EBITDA (cov = 1.0) : {co.breakeven_ebitda:,.2f}")
    print(f"Cushion (BDT cr)             : {co.cushion:,.2f}")
    print(f"EBITDA DECLINE TO BREACH     : {co.decline_to_breach_pct:.3f}%")
    print()

    sensitivity(co, [0.0, 10.0, 20.0, 28.125, 35.0, 50.0])
    print()

    print("Flags:")
    for f in co.flags():
        print(f"  - {f}")
    print(f"VERDICT: {co.verdict()}")
    print()

    print("Compounded leverage (Chapter 5 x Chapter 17):")
    print(f"{'Asset fall':>11} {'Equity fall':>12} {'Own capital (1:1 margin)':>26}")
    print("-" * 51)
    for fall in (5.0, 10.0, 15.0):
        eq = -fall * co.asset_leverage
        own = co.compounded_loss_pct(fall, margin_ratio=1.0)
        print(f"{fall:>10.1f}% {eq:>11.1f}% {own:>25.1f}%")
\`\`\`

**প্রত্যাশিত ফলাফল:**

\`\`\`
Company                      : DSE Cement Co (illustrative)
EBITDA (BDT cr)              : 240.00
EBIT (BDT cr)                : 180.00
Net debt (BDT cr)            : 1,008.00

Debt / Equity                : 1.40x
Net debt / Equity            : 1.26x
Debt / Assets                : 46.67%
Net debt / EBITDA            : 4.20x
Interest coverage (EBIT)     : 1.60x
Interest coverage (EBITDA)   : 2.13x
CFADS (BDT cr)               : 190.00
Debt service (BDT cr)        : 252.50
DSCR                         : 0.75x
Short-term share of debt     : 55.36%
Asset leverage               : 3.00x

BREAKEVEN EBITDA (cov = 1.0) : 172.50
Cushion (BDT cr)             : 67.50
EBITDA DECLINE TO BREACH     : 28.125%

 EBITDA fall    EBITDA      EBIT  Coverage  Status
-------------------------------------------------------
        0.0%    240.00    180.00      1.60  ok
       10.0%    216.00    156.00      1.39  ok
       20.0%    192.00    132.00      1.17  ok
       28.1%    172.50    112.50      1.00  at 1.0x
       35.0%    156.00     96.00      0.85  BREACHED
       50.0%    120.00     60.00      0.53  BREACHED

Flags:
  - Net debt/EBITDA above 3.0x
  - Interest coverage below 2.5x
  - DSCR below 1.0x - cannot self-fund debt service
  - Majority of debt is short-term and must be rolled
  - Under 35% EBITDA cushion to a coverage breach
VERDICT: DISTRESSED - solvent only while lenders keep rolling

Compounded leverage (Chapter 5 x Chapter 17):
 Asset fall  Equity fall   Own capital (1:1 margin)
---------------------------------------------------
       5.0%       -15.0%                     -30.0%
      10.0%       -30.0%                     -60.0%
      15.0%       -45.0%                     -90.0%
\`\`\`

**পাঁচটি ফ্ল্যাগ একসঙ্গে জ্বলে ওঠে, আর সেটাই মূল কথা।** এগুলো পাঁচটি স্বাধীন সমস্যা নয়। এগুলো একটি সমস্যার পাঁচটি দৃশ্য: কোম্পানির পরিচালনা তার মূলধন কাঠামো নিঃশেষ করার মতো যথেষ্ট নগদ তৈরি করে না, তাই সে ঋণদাতাদের ক্রমাগত স্থগিত করতে রাজি করিয়ে টিকে থাকে। প্রতিটি ফ্ল্যাগ একই নির্ভরশীলতার ভিন্ন কোণ।

**একবারে একটি ইনপুট বদলান এবং দেখুন কী সাহায্য করে আর কী করে না।** কম সুদে পুনঃঅর্থায়ন ধরে সুদ ৬০-এ নামান: ব্রেকইভেন EBITDA নামে ১২০-এ এবং কুশন প্রসারিত হয়ে ৫০% হয়। এবার বরং সুদহার অপরিবর্তিত রেখে মোট ঋণ ৭০০-তে নামান: কভারেজ অনুপাত প্রত্যাশার চেয়ে অনেক কম উন্নত হয়, কারণ কভারেজ ঋণের *পরিমাণের* মতোই সুদের *হার* দ্বারা চালিত। **যে বাংলাদেশি কোম্পানি কম সুদে প্রচুর ধার করে আর যে মাঝারি ধার করে উচ্চ সুদে, তাদের কভারেজ অভিন্ন হতে পারে।** কেবল DSCR ও নেট ঋণ/EBITDA এদের আলাদা করে — আর ঠিক এ কারণেই ঋণদাতারা ঐ দুটি দেখেন এবং খুচরা বিনিয়োগকারীরা দেখেন D/E।`,
    },

    mistakes: {
      en: `1. **Reading D/E without stripping revaluation surplus.** Chapter 11 established that Bangladeshi balance sheets carry revalued land and buildings inside equity. A company that revalues its land upward reduces D/E without repaying a single taka. If a D/E ratio improved in a year with no debt repayment and no rights issue, the improvement happened in the notes, not in the business.
2. **Using EBITDA interest coverage because it looks better.** EBITDA coverage of 2.13× and EBIT coverage of 1.60× describe the same company. The difference is depreciation, and for a cement or textile plant depreciation is not an accounting fiction — it is the replacement cost of the asset that generates the EBITDA.
3. **Ignoring principal entirely.** Interest coverage is the ratio companies quote and the ratio retail investors compute. DSCR is the ratio the lender computes. When ICR says 1.60× and DSCR says 0.75×, the company is not paying down debt; it is renting it.
4. **Treating total debt as one thing.** A ten-year term loan and a rolled 180-day working capital line are not the same liability. Read the maturity profile note. **In Bangladesh, with no corporate bond market to refinance into, rollover risk is the dominant form of default risk.**
5. **Assuming a rescheduled loan is a performing loan.** Repeated Bangladesh Bank rescheduling facilities have allowed stressed exposures to be re-dated rather than recognised. Check the notes for rescheduling and for loans classified as special mention.
6. **Comparing leverage across sectors.** A bank's D/E of 10× is normal — deposits are its raw material. A pharma company's D/E of 10× is a solvency event. Ratio thresholds are sector-specific and always were.
7. **Buying a levered company on margin because it is "cheap."** Firm leverage and account leverage multiply. A 3.0× levered balance sheet in a 2.0× margin account is a 6.0× exposure. A 16.7% decline in asset value eliminates you.
8. **Confusing low interest expense with low leverage.** A company with subsidised or related-party borrowing can carry enormous debt at negligible interest, producing flattering coverage. Net debt/EBITDA catches what coverage misses. Compute both, always.
9. **Missing off-balance-sheet and guaranteed obligations.** Corporate guarantees given to group companies, and lease liabilities under IFRS 16 as adopted in Bangladesh, are real claims. They appear in the notes, not the headline debt figure.
10. **Treating the ratio as a level rather than a distance.** "Coverage is 1.6×" tells you nothing actionable. "This company breaches coverage on a 28% EBITDA decline, and 2019 delivered a 31% decline" is an investment decision.`,
      bn: `১. **পুনর্মূল্যায়ন উদ্বৃত্ত না সরিয়ে D/E পড়া।** অধ্যায় ১১ প্রতিষ্ঠা করেছে যে বাংলাদেশি স্থিতিপত্রে ইকুইটির ভেতরে পুনর্মূল্যায়িত জমি ও ভবন থাকে। যে কোম্পানি জমির মূল্য বাড়ায় সে এক টাকাও শোধ না করে D/E কমায়। কোনো বছরে ঋণ পরিশোধ বা রাইট ইস্যু ছাড়াই D/E উন্নত হলে উন্নতিটি ব্যবসায় নয়, নোটে ঘটেছে।
২. **EBITDA সুদ কভারেজ ব্যবহার করা কারণ তা ভালো দেখায়।** ২.১৩× EBITDA কভারেজ আর ১.৬০× EBIT কভারেজ একই কোম্পানির বর্ণনা। পার্থক্যটি অবচয়, আর সিমেন্ট বা বস্ত্র কারখানার জন্য অবচয় কোনো হিসাবরক্ষণ কল্পকাহিনি নয় — এটি সেই সম্পদের প্রতিস্থাপন ব্যয় যা EBITDA তৈরি করে।
৩. **আসল সম্পূর্ণ উপেক্ষা করা।** সুদ কভারেজ সেই অনুপাত যা কোম্পানি উদ্ধৃত করে এবং খুচরা বিনিয়োগকারী গণনা করেন। DSCR সেই অনুপাত যা ঋণদাতা গণনা করেন। ICR যখন ১.৬০× বলে আর DSCR ০.৭৫×, তখন কোম্পানি ঋণ শোধ করছে না; ভাড়া নিচ্ছে।
৪. **মোট ঋণকে একটি জিনিস ভাবা।** দশ বছরের মেয়াদি ঋণ আর নবায়িত ১৮০ দিনের চলতি মূলধন সীমা এক দায় নয়। মেয়াদ-বিন্যাস নোটটি পড়ুন। **বাংলাদেশে, পুনঃঅর্থায়নের জন্য কোনো কর্পোরেট বন্ড বাজার না থাকায়, নবায়ন ঝুঁকিই খেলাপি ঝুঁকির প্রধান রূপ।**
৫. **পুনঃতফসিল হওয়া ঋণকে সচল ঋণ ধরে নেওয়া।** বাংলাদেশ ব্যাংকের বারবার দেওয়া পুনঃতফসিল সুবিধা চাপগ্রস্ত ঋণকে স্বীকৃতির বদলে নতুন তারিখ দেওয়ার সুযোগ দিয়েছে। পুনঃতফসিল এবং বিশেষ উল্লেখযোগ্য শ্রেণিভুক্ত ঋণের জন্য নোট দেখুন।
৬. **খাতভেদে লিভারেজ তুলনা করা।** ব্যাংকের ১০× D/E স্বাভাবিক — আমানতই তার কাঁচামাল। একটি ওষুধ কোম্পানির ১০× D/E একটি স্বচ্ছলতা সংকট। অনুপাতের সীমা খাতনির্দিষ্ট, সর্বদাই ছিল।
৭. **"সস্তা" বলে একটি লিভারেজড কোম্পানি মার্জিনে কেনা।** কোম্পানি লিভারেজ ও অ্যাকাউন্ট লিভারেজ গুণ হয়। ২.০× মার্জিন অ্যাকাউন্টে ৩.০× লিভারেজড স্থিতিপত্র মানে ৬.০× এক্সপোজার। সম্পদমূল্যে ১৬.৭% পতনেই আপনি নিঃশেষ।
৮. **কম সুদ ব্যয়কে কম লিভারেজ ভাবা।** ভর্তুকিযুক্ত বা সংশ্লিষ্ট-পক্ষ ঋণ থাকা কোম্পানি নগণ্য সুদে বিপুল ঋণ বহন করতে পারে, যা তোষামোদী কভারেজ তৈরি করে। কভারেজ যা মিস করে নেট ঋণ/EBITDA তা ধরে। সর্বদা দুটিই গণনা করুন।
৯. **স্থিতিপত্র-বহির্ভূত ও নিশ্চয়তাপ্রদত্ত দায় বাদ দেওয়া।** গ্রুপ কোম্পানিকে দেওয়া কর্পোরেট গ্যারান্টি এবং বাংলাদেশে গৃহীত IFRS 16 অনুযায়ী লিজ দায় প্রকৃত দাবি। এগুলো শিরোনাম ঋণ সংখ্যায় নয়, নোটে থাকে।
১০. **অনুপাতকে দূরত্ব নয়, স্তর হিসেবে দেখা।** "কভারেজ ১.৬×" কার্যকর কিছু বলে না। "এই কোম্পানি ২৮% EBITDA পতনে কভারেজ ভাঙে, এবং ২০১৯ সালে ৩১% পতন হয়েছিল" — এটি একটি বিনিয়োগ সিদ্ধান্ত।`,
    },

    tips: {
      en: `- **Compute breakeven EBITDA for every levered holding and keep the list sorted.** One number per company. It is the fastest portfolio-wide stress test available to a retail investor and it takes ten minutes.
- **Read the maturity profile note before the debt total.** Split borrowings into under-one-year and over-one-year. If more than half is under one year, you are not holding an equity in a company; you are holding a call option on a credit committee's mood.
- **Cross-check the interest expense against the debt balance.** Divide interest by average total debt to get an implied rate. If the implied rate is far below prevailing Bangladeshi lending rates, look for subsidised, related-party, or capitalised interest. Capitalised interest is the most common way coverage is flattered on the DSE.
- **Look for the same debt on both sides of a group.** Bangladeshi listed companies frequently sit inside larger family groups. Corporate guarantees to unlisted affiliates are disclosed in the contingent liabilities note and are real, senior claims on the same cash flows you are buying.
- **Track sector-wide leverage, not just the company's.** When every cement producer breaches at once, the equity market does not distinguish between them. Chapter 8's sector work and this chapter's ratio work belong in the same screen.
- **Never take margin against a company whose own asset leverage exceeds 2.5×.** This is not a suggestion about risk appetite. It is arithmetic: at 2.5× firm and 2.0× account leverage, a 20% asset decline is a total loss of your capital.
- **Watch for the refinancing announcement, not the earnings announcement.** For a company at DSCR below 1.0, the price-relevant news is a successfully renewed facility or a new syndication — not a quarterly EPS beat. Retail investors trade the wrong disclosure.
- **Prefer companies whose coverage is high because interest is low relative to a large EBITDA — not because debt was recently reclassified.** Compare three years of the same ratio. A step change with no operational cause is an accounting event.`,
      bn: `- **প্রতিটি লিভারেজড হোল্ডিংয়ের ব্রেকইভেন EBITDA গণনা করুন এবং তালিকাটি সাজানো রাখুন।** কোম্পানিপ্রতি একটি সংখ্যা। একজন খুচরা বিনিয়োগকারীর জন্য এটিই দ্রুততম পোর্টফোলিও-ব্যাপী চাপ পরীক্ষা এবং এতে দশ মিনিট লাগে।
- **ঋণের মোটের আগে মেয়াদ-বিন্যাস নোটটি পড়ুন।** ঋণকে এক বছরের কম ও এক বছরের বেশি — এই দুই ভাগে ভাগ করুন। অর্ধেকের বেশি যদি এক বছরের কম হয়, তবে আপনি কোনো কোম্পানির ইকুইটি ধরে নেই; আপনি একটি ঋণ কমিটির মেজাজের ওপর কল অপশন ধরে আছেন।
- **ঋণের স্থিতির বিপরীতে সুদ ব্যয় ক্রস-চেক করুন।** সুদকে গড় মোট ঋণ দিয়ে ভাগ করে অন্তর্নিহিত হার বের করুন। অন্তর্নিহিত হার যদি প্রচলিত বাংলাদেশি ঋণহারের অনেক নিচে হয়, তবে ভর্তুকিযুক্ত, সংশ্লিষ্ট-পক্ষ বা মূলধনীকৃত সুদ খুঁজুন। ডিএসই-তে কভারেজ তোষামোদ করার সবচেয়ে সাধারণ উপায় মূলধনীকৃত সুদ।
- **একই ঋণ গ্রুপের দুই পাশে খুঁজুন।** বাংলাদেশি তালিকাভুক্ত কোম্পানিগুলো প্রায়ই বড় পারিবারিক গ্রুপের ভেতরে থাকে। অতালিকাভুক্ত সহযোগীকে দেওয়া কর্পোরেট গ্যারান্টি সম্ভাব্য দায় নোটে প্রকাশিত হয় এবং এগুলো আপনি যে নগদ প্রবাহ কিনছেন তারই ওপর প্রকৃত, অগ্রাধিকারপ্রাপ্ত দাবি।
- **কেবল কোম্পানির নয়, খাতব্যাপী লিভারেজ অনুসরণ করুন।** প্রতিটি সিমেন্ট উৎপাদক একসঙ্গে সীমা ভাঙলে ইকুইটি বাজার তাদের মধ্যে পার্থক্য করে না। অধ্যায় ৮-এর খাত-কাজ ও এই অধ্যায়ের অনুপাত-কাজ একই স্ক্রিনে থাকার কথা।
- **যে কোম্পানির নিজস্ব সম্পদ লিভারেজ ২.৫× ছাড়ায় তার বিপরীতে কখনো মার্জিন নেবেন না।** এটি ঝুঁকি রুচি নিয়ে পরামর্শ নয়। এটি পাটিগণিত: ২.৫× কোম্পানি ও ২.০× অ্যাকাউন্ট লিভারেজে ২০% সম্পদ পতন মানে আপনার মূলধনের সম্পূর্ণ ক্ষতি।
- **আয়ের ঘোষণা নয়, পুনঃঅর্থায়নের ঘোষণার দিকে নজর রাখুন।** ১.০-এর নিচে DSCR-এর কোম্পানির জন্য দাম-প্রাসঙ্গিক খবর হলো সফলভাবে নবায়িত সুবিধা বা নতুন সিন্ডিকেশন — ত্রৈমাসিক EPS ছাড়িয়ে যাওয়া নয়। খুচরা বিনিয়োগকারীরা ভুল প্রকাশনার ওপর লেনদেন করেন।
- **সেই কোম্পানি বেছে নিন যার কভারেজ উচ্চ কারণ বড় EBITDA-র তুলনায় সুদ কম — সম্প্রতি ঋণ পুনঃশ্রেণিবিন্যাস হয়েছে বলে নয়।** একই অনুপাতের তিন বছর তুলনা করুন। পরিচালনগত কারণ ছাড়া ধাপ-পরিবর্তন একটি হিসাবরক্ষণ ঘটনা।`,
    },

    exercises: {
      en: `1. Take any DSE-listed cement, textile, or power company. From its most recent annual report, extract total borrowings, the short-term/long-term split from the maturity note, cash, EBITDA, depreciation, and finance cost. Compute all five ratios in this chapter. State which one you would show a lender and which one the lender would show you.
2. For the same company, compute breakeven EBITDA and the percentage decline to a coverage breach. Now pull the last five years of EBITDA from the annual reports. Has the company already delivered a year-on-year decline of that magnitude? If yes, in which year, and what happened to the share price over the following twelve months?
3. Recompute D/E twice: once as reported, once after removing any revaluation surplus from equity (Chapter 11). Report both. If they differ by more than 20%, write one paragraph on what the reported figure was concealing.
4. Divide finance cost by average total debt to derive the implied interest rate. Compare it to the prevailing bank lending rate range for that year. Explain any gap of more than 300 basis points — check the notes for capitalised interest, related-party loans, and subsidised export financing.
5. Find a DSE company whose interest coverage exceeds 2.0× while its DSCR is below 1.0×. Explain in five sentences how both statements can be true simultaneously and what it implies about the next twelve months.
6. Compute the combined leverage for the same company assuming you hold it in a 1:1 margin account. Then compute the percentage fall in asset value that would eliminate your capital entirely. Compare that figure to the company's largest single-year share price decline in the last decade.
7. Read the contingent liabilities note of any DSE-listed company that belongs to a family group. List every corporate guarantee given to an affiliate. Add those to total debt and recompute net debt/EBITDA. Report the difference.`,
      bn: `১. যেকোনো ডিএসই-তালিকাভুক্ত সিমেন্ট, বস্ত্র বা বিদ্যুৎ কোম্পানি নিন। সাম্প্রতিকতম বার্ষিক প্রতিবেদন থেকে মোট ঋণ, মেয়াদ নোট থেকে স্বল্প/দীর্ঘমেয়াদি বিভাজন, নগদ, EBITDA, অবচয় ও অর্থায়ন ব্যয় বের করুন। এই অধ্যায়ের পাঁচটি অনুপাতই গণনা করুন। বলুন কোনটি আপনি একজন ঋণদাতাকে দেখাতেন এবং কোনটি ঋণদাতা আপনাকে দেখাতেন।
২. একই কোম্পানির জন্য ব্রেকইভেন EBITDA এবং কভারেজ ভঙ্গ পর্যন্ত শতকরা পতন গণনা করুন। এবার বার্ষিক প্রতিবেদন থেকে গত পাঁচ বছরের EBITDA নিন। কোম্পানিটি কি ইতিমধ্যেই ঐ মাপের বার্ষিক পতন দেখিয়েছে? হ্যাঁ হলে কোন বছরে, এবং পরবর্তী বারো মাসে শেয়ারের দামে কী ঘটেছিল?
৩. D/E দুইবার গণনা করুন: একবার প্রকাশিত অনুযায়ী, একবার ইকুইটি থেকে যেকোনো পুনর্মূল্যায়ন উদ্বৃত্ত সরিয়ে (অধ্যায় ১১)। দুটিই জানান। ২০%-এর বেশি পার্থক্য হলে প্রকাশিত সংখ্যাটি কী আড়াল করছিল তা নিয়ে এক অনুচ্ছেদ লিখুন।
৪. অর্থায়ন ব্যয়কে গড় মোট ঋণ দিয়ে ভাগ করে অন্তর্নিহিত সুদহার বের করুন। ঐ বছরের প্রচলিত ব্যাংক ঋণহারের পরিসরের সঙ্গে তুলনা করুন। ৩০০ বেসিস পয়েন্টের বেশি যেকোনো ফারাক ব্যাখ্যা করুন — মূলধনীকৃত সুদ, সংশ্লিষ্ট-পক্ষ ঋণ ও ভর্তুকিযুক্ত রপ্তানি অর্থায়নের জন্য নোট দেখুন।
৫. এমন একটি ডিএসই কোম্পানি খুঁজুন যার সুদ কভারেজ ২.০× ছাড়ায় অথচ DSCR ১.০×-এর নিচে। পাঁচ বাক্যে ব্যাখ্যা করুন কীভাবে দুটি বক্তব্যই একসঙ্গে সত্য হতে পারে এবং আগামী বারো মাস সম্পর্কে এটি কী বোঝায়।
৬. ঐ কোম্পানিটি ১:১ মার্জিন অ্যাকাউন্টে ধরেছেন ধরে সম্মিলিত লিভারেজ গণনা করুন। তারপর সম্পদমূল্যে কত শতাংশ পতনে আপনার মূলধন সম্পূর্ণ নিঃশেষ হবে তা গণনা করুন। ঐ সংখ্যাটি গত দশকে কোম্পানির সবচেয়ে বড় এক-বছরের শেয়ার দরপতনের সঙ্গে তুলনা করুন।
৭. একটি পারিবারিক গ্রুপভুক্ত যেকোনো ডিএসই-তালিকাভুক্ত কোম্পানির সম্ভাব্য দায় নোট পড়ুন। সহযোগীকে দেওয়া প্রতিটি কর্পোরেট গ্যারান্টি তালিকাভুক্ত করুন। সেগুলো মোট ঋণে যোগ করে নেট ঋণ/EBITDA পুনরায় গণনা করুন। পার্থক্যটি জানান।`,
    },

    summary: {
      en: `- Leverage ratios do not measure profitability. They measure **who decides the company's future — the board or the lender.**
- Operating leverage (fixed costs) and financial leverage (fixed interest) **multiply**: $\\text{DTL} = \\text{DOL} \\times \\text{DFL}$. This is why DSE cement, textile and power companies are structurally the most fragile earnings streams on the exchange.
- D/E and debt-to-assets both depend on an equity figure that Bangladeshi companies routinely inflate with revaluation reserves. Always recompute excluding revaluation surplus, per Chapter 11.
- Net debt/EBITDA is the lender's ratio and is denominated in years. Above 4.0× a cyclical company is running on the lender's patience.
- **Interest coverage ignores principal; DSCR does not.** Our cement company shows ICR 1.60× and DSCR 0.75× simultaneously — comfortable on interest, unable to repay principal at all. It is not solvent; it is renewed.
- Breakeven EBITDA is $\\text{EBITDA}_{be} = I + D$. For the worked example, 112.5 + 60 = BDT 172.5 crore, a **28.125% decline** from current EBITDA of 240. That single number converts a vague balance-sheet worry into a testable operational threshold.
- A debt stack that is 55% short-term and rolled is not financed for 180 days. It is financed until a credit committee changes its mind — and Bangladesh has no corporate bond market to refinance into.
- Firm leverage and account leverage **compound**: 3.0× asset leverage inside a 1:1 margin account is 6.0× combined. A 10% asset impairment destroys 60% of the investor's own capital. Chapter 5's cascade and this chapter's balance sheet arrive together, in the same sector, on the same day.
- **Discipline established:** never read a leverage ratio as a level. Read it as a distance. Compute the breakeven EBITDA, express it as a percentage decline, and check whether the business has already delivered a year that bad. If it has, the ratio is not a description of risk — it is a schedule.`,
      bn: `- লিভারেজ অনুপাত মুনাফা মাপে না। এটি মাপে **কোম্পানির ভবিষ্যৎ কে ঠিক করে — পর্ষদ, না ঋণদাতা।**
- পরিচালন লিভারেজ (স্থির ব্যয়) ও আর্থিক লিভারেজ (স্থির সুদ) **গুণ হয়**: $\\text{DTL} = \\text{DOL} \\times \\text{DFL}$। এ কারণেই ডিএসই-র সিমেন্ট, বস্ত্র ও বিদ্যুৎ কোম্পানি কাঠামোগতভাবে এক্সচেঞ্জের সবচেয়ে ভঙ্গুর আয়প্রবাহ।
- D/E ও ঋণ-সম্পদ উভয়ই এমন এক ইকুইটি সংখ্যার ওপর নির্ভরশীল যা বাংলাদেশি কোম্পানিগুলো নিয়মিতভাবে পুনর্মূল্যায়ন সঞ্চিতি দিয়ে স্ফীত করে। অধ্যায় ১১ অনুসারে সর্বদা পুনর্মূল্যায়ন উদ্বৃত্ত বাদ দিয়ে পুনরায় গণনা করুন।
- নেট ঋণ/EBITDA ঋণদাতার অনুপাত এবং তা বছরে প্রকাশিত। ৪.০×-এর ওপরে একটি চক্রীয় কোম্পানি ঋণদাতার ধৈর্যের ওপর চলছে।
- **সুদ কভারেজ আসল উপেক্ষা করে; DSCR করে না।** আমাদের সিমেন্ট কোম্পানি একই সঙ্গে ১.৬০× ICR ও ০.৭৫× DSCR দেখায় — সুদে স্বচ্ছন্দ, আসল আদৌ শোধ করতে অক্ষম। সে স্বচ্ছল নয়; সে নবায়িত।
- ব্রেকইভেন EBITDA হলো $\\text{EBITDA}_{be} = I + D$। কার্যকৃত উদাহরণে ১১২.৫ + ৬০ = ১৭২.৫ কোটি টাকা, যা বর্তমান ২৪০ থেকে **২৮.১২৫% পতন**। ঐ একটিমাত্র সংখ্যা অস্পষ্ট স্থিতিপত্র-উদ্বেগকে একটি যাচাইযোগ্য পরিচালনগত সীমায় রূপান্তরিত করে।
- ৫৫% স্বল্পমেয়াদি ও নবায়িত ঋণকাঠামো ১৮০ দিনের জন্য অর্থায়িত নয়। এটি অর্থায়িত একটি ঋণ কমিটি মত বদলানো পর্যন্ত — আর বাংলাদেশে পুনঃঅর্থায়নের জন্য কোনো কর্পোরেট বন্ড বাজার নেই।
- কোম্পানি লিভারেজ ও অ্যাকাউন্ট লিভারেজ **সম্মিলিত হয়**: ১:১ মার্জিন অ্যাকাউন্টে ৩.০× সম্পদ লিভারেজ মানে ৬.০×। ১০% সম্পদ অবচয় বিনিয়োগকারীর নিজস্ব মূলধনের ৬০% ধ্বংস করে। অধ্যায় ৫-এর ধারাবাহিক প্রতিক্রিয়া ও এই অধ্যায়ের স্থিতিপত্র একসঙ্গে আসে, একই খাতে, একই দিনে।
- **প্রতিষ্ঠিত শৃঙ্খলা:** কখনো লিভারেজ অনুপাতকে স্তর হিসেবে পড়বেন না। দূরত্ব হিসেবে পড়ুন। ব্রেকইভেন EBITDA গণনা করুন, শতকরা পতন হিসেবে প্রকাশ করুন, এবং দেখুন ব্যবসাটি ইতিমধ্যেই তত খারাপ একটি বছর দিয়েছে কি না। দিয়ে থাকলে অনুপাতটি ঝুঁকির বর্ণনা নয় — এটি একটি সময়সূচি।`,
    },
  },

  interview: [
    {
      q: {
        en: 'A company reports interest coverage of 1.6× and DSCR of 0.75×. Explain how both can be true and what it tells you.',
        bn: 'একটি কোম্পানি ১.৬× সুদ কভারেজ ও ০.৭৫× DSCR দেখায়। দুটি কীভাবে সত্য হতে পারে এবং এটি আপনাকে কী বলে?',
      },
      a: {
        en: 'Interest coverage measures EBIT against interest only. DSCR measures cash available for debt service against interest plus scheduled principal repayment. A company can comfortably pay interest out of operating profit while being unable to repay any principal from operations. It survives only because lenders keep rolling the facility. The company is not solvent in any meaningful sense; it is continuously refinanced, and its survival depends on a credit decision it does not control. In Bangladesh this matters more because there is no corporate bond market to refinance into if the bank says no.',
        bn: 'সুদ কভারেজ কেবল সুদের বিপরীতে EBIT মাপে। DSCR সুদ যোগ নির্ধারিত আসল পরিশোধের বিপরীতে ঋণ পরিশোধের জন্য প্রাপ্য নগদ মাপে। একটি কোম্পানি পরিচালন মুনাফা থেকে স্বচ্ছন্দে সুদ দিতে পারে অথচ পরিচালনা থেকে কোনো আসলই শোধ করতে অক্ষম হতে পারে। সে টিকে থাকে কেবল কারণ ঋণদাতারা সুবিধাটি নবায়ন করে যান। কোম্পানিটি কোনো অর্থবহ অর্থে স্বচ্ছল নয়; সে ক্রমাগত পুনঃঅর্থায়িত, এবং তার টিকে থাকা এমন এক ঋণ সিদ্ধান্তের ওপর নির্ভর করে যা সে নিয়ন্ত্রণ করে না। বাংলাদেশে এটি বেশি গুরুত্বপূর্ণ কারণ ব্যাংক না বললে পুনঃঅর্থায়নের জন্য কোনো কর্পোরেট বন্ড বাজার নেই।',
      },
    },
    {
      q: {
        en: 'Derive the breakeven EBITDA at which interest coverage equals 1.0.',
        bn: 'যে EBITDA-তে সুদ কভারেজ ১.০ হয় তা নির্ণয় করুন।',
      },
      a: {
        en: 'Interest coverage is EBIT divided by interest. Setting it to 1.0 gives EBIT = I. Since EBIT = EBITDA − D, we get EBITDA = I + D. So the breakeven EBITDA is simply interest expense plus depreciation and amortisation. Expressing it as a percentage decline from current EBITDA gives the distance to distress. For a company with EBITDA 240, D&A 60 and interest 112.5: breakeven is 172.5, a decline of 28.125%. Generalising to any target coverage c: EBITDA = cI + D.',
        bn: 'সুদ কভারেজ হলো EBIT ভাগ সুদ। একে ১.০ ধরলে EBIT = I। যেহেতু EBIT = EBITDA − D, পাই EBITDA = I + D। অর্থাৎ ব্রেকইভেন EBITDA কেবল সুদ ব্যয় যোগ অবচয় ও পরিশোধ। বর্তমান EBITDA থেকে শতকরা পতন হিসেবে প্রকাশ করলে সংকট থেকে দূরত্ব পাওয়া যায়। EBITDA ২৪০, D&A ৬০ ও সুদ ১১২.৫-এর কোম্পানির জন্য ব্রেকইভেন ১৭২.৫, অর্থাৎ ২৮.১২৫% পতন। যেকোনো লক্ষ্য কভারেজ c-এর জন্য সাধারণীকৃত: EBITDA = cI + D।',
      },
    },
    {
      q: {
        en: 'Why is BDT 100 crore of rolled short-term debt more dangerous than BDT 100 crore of ten-year term debt in Bangladesh specifically?',
        bn: 'বাংলাদেশে নির্দিষ্টভাবে ১০০ কোটি টাকার নবায়িত স্বল্পমেয়াদি ঋণ কেন ১০০ কোটি টাকার দশ বছরের মেয়াদি ঋণের চেয়ে বিপজ্জনক?',
      },
      a: {
        en: 'The term loan is a contract the lender cannot exit absent a covenant breach. The short-term facility is a fresh credit decision taken every renewal cycle. Four Bangladesh-specific factors sharpen this: there is no functioning corporate bond market to refinance into; bank liquidity is procyclical, so Bangladesh Bank tightening or a stressed banking sector withdraws rollover appetite across the system simultaneously; repeated rescheduling circulars mean stressed exposures are re-dated rather than recognised, so the deterioration is invisible until it is not; and working capital lines are secured against inventory and receivables, precisely the assets that lose value in the downturn that triggers the refusal.',
        bn: 'মেয়াদি ঋণ এমন এক চুক্তি যা শর্ত ভঙ্গ না হলে ঋণদাতা ছাড়তে পারেন না। স্বল্পমেয়াদি সুবিধা প্রতিটি নবায়ন চক্রে নেওয়া একটি নতুন ঋণ সিদ্ধান্ত। চারটি বাংলাদেশ-নির্দিষ্ট বিষয় একে তীক্ষ্ণ করে: পুনঃঅর্থায়নের জন্য কার্যকর কোনো কর্পোরেট বন্ড বাজার নেই; ব্যাংক তারল্য প্রোসাইক্লিকাল, তাই বাংলাদেশ ব্যাংকের কড়াকড়ি বা চাপগ্রস্ত ব্যাংকিং খাত একই সঙ্গে সমগ্র ব্যবস্থা থেকে নবায়নের আগ্রহ তুলে নেয়; বারবার পুনঃতফসিল সার্কুলারের কারণে চাপগ্রস্ত ঋণ স্বীকৃতির বদলে নতুন তারিখ পায়, ফলে অবনতি অদৃশ্য থাকে যতক্ষণ না তা আর থাকে না; এবং চলতি মূলধন সীমা মজুদ ও প্রাপ্য বিলের বিপরীতে জামানতযুক্ত, ঠিক সেই সম্পদ যা প্রত্যাখ্যান ঘটানো মন্দায় মূল্য হারায়।',
      },
    },
    {
      q: {
        en: 'Why should a Bangladeshi analyst compute debt-to-equity twice?',
        bn: 'একজন বাংলাদেশি বিশ্লেষকের কেন ঋণ-ইকুইটি দুইবার গণনা করা উচিত?',
      },
      a: {
        en: 'Because equity on a Bangladeshi balance sheet frequently contains a revaluation reserve on land and buildings, as Chapter 11 established. Revaluing land upward inflates equity and therefore reduces D/E without a single taka of debt being repaid. The second computation removes revaluation surplus from the denominator. If the two figures differ materially, the reported ratio is describing an accounting decision rather than a financing decision. The same logic applies to debt-to-assets.',
        bn: 'কারণ অধ্যায় ১১ যেমন প্রতিষ্ঠা করেছে, বাংলাদেশি স্থিতিপত্রে ইকুইটিতে প্রায়ই জমি ও ভবনের পুনর্মূল্যায়ন সঞ্চিতি থাকে। জমির ঊর্ধ্বমুখী পুনর্মূল্যায়ন ইকুইটি স্ফীত করে এবং তাই এক টাকা ঋণ পরিশোধ না করেই D/E কমায়। দ্বিতীয় গণনাটি হর থেকে পুনর্মূল্যায়ন উদ্বৃত্ত সরায়। দুটি সংখ্যার উল্লেখযোগ্য পার্থক্য হলে প্রকাশিত অনুপাতটি অর্থায়ন সিদ্ধান্ত নয়, একটি হিসাবরক্ষণ সিদ্ধান্তের বর্ণনা দিচ্ছে। একই যুক্তি ঋণ-সম্পদের ক্ষেত্রেও প্রযোজ্য।',
      },
    },
    {
      q: {
        en: 'Explain how holding a levered company in a margin account compounds risk, with arithmetic.',
        bn: 'পাটিগণিতসহ ব্যাখ্যা করুন মার্জিন অ্যাকাউন্টে একটি লিভারেজড কোম্পানি ধরা কীভাবে ঝুঁকি গুণ করে।',
      },
      a: {
        en: 'Firm asset leverage is total assets over equity. With assets of BDT 2,400 crore and equity of BDT 800 crore that is 3.0×, so a 10% impairment of assets destroys 30% of equity value. A 1:1 margin account has leverage of 2.0×, so a 30% fall in share price destroys 60% of the investor own capital. Combined leverage is 3.0 × 2.0 = 6.0×. A 16.7% asset decline eliminates the investor entirely. These do not add; they multiply. Worse, when the sector turns, every levered company in it breaches simultaneously and the Chapter 5 forced-selling cascade arrives at the same moment as the bad fundamental news.',
        bn: 'কোম্পানির সম্পদ লিভারেজ হলো মোট সম্পদ ভাগ ইকুইটি। ২,৪০০ কোটি টাকা সম্পদ ও ৮০০ কোটি টাকা ইকুইটিতে তা ৩.০×, তাই সম্পদের ১০% অবচয় ইকুইটি মূল্যের ৩০% ধ্বংস করে। ১:১ মার্জিন অ্যাকাউন্টের লিভারেজ ২.০×, তাই শেয়ারের দামে ৩০% পতন বিনিয়োগকারীর নিজস্ব মূলধনের ৬০% ধ্বংস করে। সম্মিলিত লিভারেজ ৩.০ × ২.০ = ৬.০×। ১৬.৭% সম্পদ পতনেই বিনিয়োগকারী সম্পূর্ণ নিঃশেষ। এরা যোগ হয় না; গুণ হয়। আরও খারাপ, খাত ঘুরলে তার প্রতিটি লিভারেজড কোম্পানি একসঙ্গে সীমা ভাঙে এবং অধ্যায় ৫-এর বাধ্যতামূলক বিক্রির ধারাবাহিক প্রতিক্রিয়া খারাপ মৌলিক খবরের সঙ্গে একই মুহূর্তে এসে পড়ে।',
      },
    },
    {
      q: {
        en: 'A cement company and a bank both have debt-to-equity of 8×. Is either a problem?',
        bn: 'একটি সিমেন্ট কোম্পানি ও একটি ব্যাংক উভয়েরই ঋণ-ইকুইটি ৮×। কোনোটি কি সমস্যা?',
      },
      a: {
        en: 'For the bank, no — deposits are its raw material and 8× is unremarkable for a Bangladeshi commercial bank; you assess it on capital adequacy, NPL ratio and provisioning coverage instead. For the cement company, 8× is a solvency event: interest coverage would almost certainly be below 1.0 and the company would be in default or in negotiation. Leverage thresholds are sector-specific. Applying a single benchmark across sectors is the same category error as applying the Buffett Indicator across countries in Chapter 1.',
        bn: 'ব্যাংকের জন্য নয় — আমানতই তার কাঁচামাল এবং একটি বাংলাদেশি বাণিজ্যিক ব্যাংকের জন্য ৮× অস্বাভাবিক নয়; তাকে বরং মূলধন পর্যাপ্ততা, খেলাপি ঋণ অনুপাত ও সঞ্চিতি কভারেজ দিয়ে মূল্যায়ন করবেন। সিমেন্ট কোম্পানির জন্য ৮× একটি স্বচ্ছলতা সংকট: সুদ কভারেজ প্রায় নিশ্চিতভাবে ১.০-এর নিচে থাকবে এবং কোম্পানিটি খেলাপি বা আলোচনায় থাকবে। লিভারেজের সীমা খাতনির্দিষ্ট। সব খাতে একটিমাত্র মানদণ্ড প্রয়োগ করা অধ্যায় ১-এ দেশভেদে বাফেট নির্দেশক প্রয়োগ করার মতোই একই শ্রেণিগত ভুল।',
      },
    },
  ],

  quiz: [
    {
      q: {
        en: 'Breakeven EBITDA at which interest coverage equals 1.0 is:',
        bn: 'যে EBITDA-তে সুদ কভারেজ ১.০ হয় তা হলো:',
      },
      options: {
        en: ['Interest only', 'Interest + Depreciation', 'Interest + Principal', 'EBITDA − Interest'],
        bn: ['কেবল সুদ', 'সুদ + অবচয়', 'সুদ + আসল', 'EBITDA − সুদ'],
      },
      answer: 1,
    },
    {
      q: {
        en: 'With EBITDA 240, D&A 60 and interest 112.5 (BDT cr), the EBITDA decline that breaches coverage is:',
        bn: 'EBITDA ২৪০, D&A ৬০ ও সুদ ১১২.৫ (কোটি টাকা) হলে কভারেজ ভঙ্গকারী EBITDA পতন হলো:',
      },
      options: {
        en: ['12.5%', '19.4%', '28.1%', '46.9%'],
        bn: ['১২.৫%', '১৯.৪%', '২৮.১%', '৪৬.৯%'],
      },
      answer: 2,
    },
    {
      q: {
        en: 'The key difference between interest coverage and DSCR is that DSCR includes:',
        bn: 'সুদ কভারেজ ও DSCR-এর মূল পার্থক্য হলো DSCR অন্তর্ভুক্ত করে:',
      },
      options: {
        en: ['Depreciation', 'Scheduled principal repayment', 'Dividends', 'Deferred tax'],
        bn: ['অবচয়', 'নির্ধারিত আসল পরিশোধ', 'লভ্যাংশ', 'বিলম্বিত কর'],
      },
      answer: 1,
    },
    {
      q: {
        en: 'Operating leverage and financial leverage combine by:',
        bn: 'পরিচালন লিভারেজ ও আর্থিক লিভারেজ মিলিত হয়:',
      },
      options: {
        en: ['Addition', 'Multiplication', 'Averaging', 'Taking the maximum'],
        bn: ['যোগ করে', 'গুণ করে', 'গড় করে', 'সর্বোচ্চটি নিয়ে'],
      },
      answer: 1,
    },
    {
      q: {
        en: 'A Bangladeshi company reduces its D/E ratio with no debt repayment and no equity issue. The most likely cause is:',
        bn: 'একটি বাংলাদেশি কোম্পানি ঋণ পরিশোধ বা ইকুইটি ইস্যু ছাড়াই D/E কমায়। সবচেয়ে সম্ভাব্য কারণ:',
      },
      options: {
        en: ['Higher sales', 'An upward revaluation of land inside equity', 'Lower interest rates', 'A stock split'],
        bn: ['বেশি বিক্রি', 'ইকুইটির ভেতরে জমির ঊর্ধ্বমুখী পুনর্মূল্যায়ন', 'কম সুদহার', 'স্টক বিভাজন'],
      },
      answer: 1,
    },
    {
      q: {
        en: 'Net debt / EBITDA is best interpreted as:',
        bn: 'নেট ঋণ / EBITDA-র সেরা ব্যাখ্যা:',
      },
      options: {
        en: ['A profitability margin', 'Years of current cash earnings needed to clear debt', 'A liquidity ratio', 'A dividend capacity measure'],
        bn: ['একটি মুনাফা মার্জিন', 'ঋণ শোধ করতে প্রয়োজনীয় বর্তমান নগদ আয়ের বছর', 'একটি তারল্য অনুপাত', 'লভ্যাংশ সক্ষমতার পরিমাপ'],
      },
      answer: 1,
    },
    {
      q: {
        en: 'A firm with asset leverage 3.0× held in a 1:1 margin account has combined leverage of:',
        bn: '১:১ মার্জিন অ্যাকাউন্টে ধরা ৩.০× সম্পদ লিভারেজের কোম্পানির সম্মিলিত লিভারেজ:',
      },
      options: {
        en: ['3.0×', '4.0×', '5.0×', '6.0×'],
        bn: ['৩.০×', '৪.০×', '৫.০×', '৬.০×'],
      },
      answer: 3,
    },
    {
      q: {
        en: 'Why is rolled short-term debt especially dangerous in Bangladesh?',
        bn: 'নবায়িত স্বল্পমেয়াদি ঋণ বাংলাদেশে বিশেষভাবে বিপজ্জনক কেন?',
      },
      options: {
        en: [
          'It always carries a higher interest rate',
          'There is no corporate bond market to refinance into if a bank refuses',
          'It is prohibited by BSEC',
          'It cannot be secured',
        ],
        bn: [
          'এতে সর্বদা বেশি সুদ লাগে',
          'ব্যাংক প্রত্যাখ্যান করলে পুনঃঅর্থায়নের জন্য কোনো কর্পোরেট বন্ড বাজার নেই',
          'বিএসইসি এটি নিষিদ্ধ করেছে',
          'এটি জামানতযুক্ত করা যায় না',
        ],
      },
      answer: 1,
    },
    {
      q: {
        en: 'EBITDA-based interest coverage flatters a cement company because it ignores:',
        bn: 'EBITDA-ভিত্তিক সুদ কভারেজ একটি সিমেন্ট কোম্পানিকে তোষামোদ করে কারণ এটি উপেক্ষা করে:',
      },
      options: {
        en: ['Tax', 'Depreciation on the plant that generates the EBITDA', 'Working capital', 'Dividends'],
        bn: ['কর', 'যে প্লান্ট EBITDA তৈরি করে তার অবচয়', 'চলতি মূলধন', 'লভ্যাংশ'],
      },
      answer: 1,
    },
    {
      q: {
        en: 'The chapter argues a leverage ratio should be read as:',
        bn: 'অধ্যায়টি যুক্তি দেয় যে লিভারেজ অনুপাত পড়া উচিত:',
      },
      options: {
        en: ['A level to compare against a fixed benchmark', 'A distance to a specific operational breach', 'A sector average', 'A signal of management quality'],
        bn: ['স্থির মানদণ্ডের সঙ্গে তুলনীয় একটি স্তর হিসেবে', 'একটি নির্দিষ্ট পরিচালনগত ভঙ্গ পর্যন্ত দূরত্ব হিসেবে', 'একটি খাতগড় হিসেবে', 'ব্যবস্থাপনার গুণমানের সংকেত হিসেবে'],
      },
      answer: 1,
    },
  ],
};
