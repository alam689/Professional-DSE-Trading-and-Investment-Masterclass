/**
 * Chapter 20 — Dividend Analysis & Policy
 * Part II, Fundamental Analysis. Builds on Ch 4 (corporate actions, categories),
 * Ch 12 (cash flow), Ch 19 (DuPont / ROE).
 */

export default {
  n: 20,
  tools: [],

  excelSheet: {
    filename: 'ch20-dividend-sustainability.xlsx',
    sheetName: 'Dividend Scorer',
    cells: [
      { cell: 'A1', v: 'DIVIDEND SUSTAINABILITY SCORER' },
      { cell: 'B2', v: 'GENCO' }, { cell: 'C2', v: 'SPINTEX' },

      { cell: 'A3', v: 'Market Price (BDT)' }, { cell: 'B3', v: 60 }, { cell: 'C3', v: 40 },
      { cell: 'A4', v: 'Face Value (BDT)' }, { cell: 'B4', v: 10 }, { cell: 'C4', v: 10 },
      { cell: 'A5', v: 'EPS (BDT)' }, { cell: 'B5', v: 9 }, { cell: 'C5', v: 1.2 },
      { cell: 'A6', v: 'Cash DPS (BDT)' }, { cell: 'B6', v: 5.4 }, { cell: 'C6', v: 3.6 },
      { cell: 'A7', v: 'Shares Outstanding (crore)' }, { cell: 'B7', v: 12 }, { cell: 'C7', v: 10 },
      { cell: 'A8', v: 'CFO (BDT crore)' }, { cell: 'B8', v: 200 }, { cell: 'C8', v: 22 },
      { cell: 'A9', v: 'Capex (BDT crore)' }, { cell: 'B9', v: 64 }, { cell: 'C9', v: 45 },
      { cell: 'A10', v: 'Shareholders Equity (crore)' }, { cell: 'B10', v: 720 }, { cell: 'C10', v: 300 },
      { cell: 'A11', v: 'Free Reserves (crore)' }, { cell: 'B11', v: 430 }, { cell: 'C11', v: 180 },

      { cell: 'A13', v: '— HEADLINE —' },
      { cell: 'A14', v: 'Declared Rate on Face (%)' }, { cell: 'B14', f: 'B6/B4*100' }, { cell: 'C14', f: 'C6/C4*100' },
      { cell: 'A15', v: 'Dividend Yield (%)' }, { cell: 'B15', f: 'B6/B3*100' }, { cell: 'C15', f: 'C6/C3*100' },
      { cell: 'A16', v: 'Payout Ratio (%)' }, { cell: 'B16', f: 'B6/B5*100' }, { cell: 'C16', f: 'C6/C5*100' },
      { cell: 'A17', v: 'Retention Ratio (%)' }, { cell: 'B17', f: '100-B16' }, { cell: 'C17', f: '100-C16' },

      { cell: 'A19', v: '— COVER FROM EARNINGS —' },
      { cell: 'A20', v: 'Earnings Cover (x)' }, { cell: 'B20', f: 'B5/B6' }, { cell: 'C20', f: 'C5/C6' },

      { cell: 'A22', v: '— COVER FROM CASH —' },
      { cell: 'A23', v: 'Free Cash Flow (crore)' }, { cell: 'B23', f: 'B8-B9' }, { cell: 'C23', f: 'C8-C9' },
      { cell: 'A24', v: 'Total Cash Dividend (crore)' }, { cell: 'B24', f: 'B6*B7' }, { cell: 'C24', f: 'C6*C7' },
      { cell: 'A25', v: 'FCF Cover (x)' }, { cell: 'B25', f: 'B23/B24' }, { cell: 'C25', f: 'C23/C24' },
      { cell: 'A26', v: 'FCF Payout Ratio (%)' }, { cell: 'B26', f: 'B24/B23*100' }, { cell: 'C26', f: 'C24/C23*100' },
      { cell: 'A27', v: 'Cash Gap (crore)' }, { cell: 'B27', f: 'B23-B24' }, { cell: 'C27', f: 'C23-C24' },
      { cell: 'A28', v: 'Reserve Runway (years)' },
      { cell: 'B28', f: 'IF(B27>=0,"no gap",B11/-B27)' },
      { cell: 'C28', f: 'IF(C27>=0,"no gap",C11/-C27)' },

      { cell: 'A30', v: '— GROWTH ARITHMETIC —' },
      { cell: 'A31', v: 'Net Income (crore)' }, { cell: 'B31', f: 'B5*B7' }, { cell: 'C31', f: 'C5*C7' },
      { cell: 'A32', v: 'ROE (%)' }, { cell: 'B32', f: 'B31/B10*100' }, { cell: 'C32', f: 'C31/C10*100' },
      { cell: 'A33', v: 'Sustainable Growth (%)' }, { cell: 'B33', f: 'B32*B17/100' }, { cell: 'C33', f: 'C32*C17/100' },

      { cell: 'A35', v: 'VERDICT' },
      {
        cell: 'B35',
        f: 'IF(B23<=0,"UNFUNDED",IF(AND(B20>=1.5,B25>=1.5),"SUSTAINABLE",IF(AND(B20>=1,B25>=1),"TIGHT","STRAINED")))',
      },
      {
        cell: 'C35',
        f: 'IF(C23<=0,"UNFUNDED",IF(AND(C20>=1.5,C25>=1.5),"SUSTAINABLE",IF(AND(C20>=1,C25>=1),"TIGHT","STRAINED")))',
      },

      { cell: 'A38', v: 'STOCK DIVIDEND — CASH THAT NEVER LEAVES' },
      { cell: 'A39', v: 'Pre-record Price (BDT)' }, { cell: 'B39', v: 40 },
      { cell: 'A40', v: 'Stock Dividend (%)' }, { cell: 'B40', v: 20 },
      { cell: 'A41', v: 'Theoretical Ex-Bonus Price' }, { cell: 'B41', f: 'B39/(1+B40/100)' },
      { cell: 'A42', v: 'Shares Held Before' }, { cell: 'B42', v: 1000 },
      { cell: 'A43', v: 'Shares Held After' }, { cell: 'B43', f: 'B42*(1+B40/100)' },
      { cell: 'A44', v: 'Value Before (BDT)' }, { cell: 'B44', f: 'B42*B39' },
      { cell: 'A45', v: 'Value After (BDT)' }, { cell: 'B45', f: 'B43*B41' },
      { cell: 'A46', v: 'Cash to Shareholder (BDT)' }, { cell: 'B46', v: 0 },
      { cell: 'A47', v: 'Cash out of Company (BDT)' }, { cell: 'B47', v: 0 },
    ],
  },

  objectives: {
    en: [
      'Distinguish a cash dividend from a stock dividend in terms of cash, share count, and price, using the Chapter 4 adjustment mechanics.',
      'Compute payout ratio, dividend yield, dividend coverage, FCF payout ratio, retention ratio, and sustainable growth rate.',
      'Test a dividend against earnings AND against free cash flow, and state why passing only one is a failure.',
      'Explain why a high dividend yield on the DSE is more often a warning than an attraction.',
      'Explain how the DSE A/B/Z category rule converts dividend declaration into a category-migration event, and what that does to incentives.',
    ],
    bn: [
      'অধ্যায় ৪-এর সমন্বয় কার্যপ্রণালী ব্যবহার করে নগদ ও স্টক লভ্যাংশকে নগদ, শেয়ার সংখ্যা ও দামের নিরিখে আলাদা করা।',
      'পরিশোধ অনুপাত, লভ্যাংশ ফলন, লভ্যাংশ আচ্ছাদন, FCF পরিশোধ অনুপাত, ধারণ অনুপাত ও টেকসই প্রবৃদ্ধির হার গণনা করা।',
      'একটি লভ্যাংশকে মুনাফার বিপরীতে এবং মুক্ত নগদ প্রবাহের বিপরীতে — উভয়ভাবে পরীক্ষা করা, এবং কেন কেবল একটিতে উত্তীর্ণ হওয়া ব্যর্থতা তা বলা।',
      'ডিএসই-তে উচ্চ লভ্যাংশ ফলন কেন আকর্ষণের চেয়ে বেশি বার সতর্কবার্তা তা ব্যাখ্যা করা।',
      'ডিএসই-র A/B/Z শ্রেণি বিধি কীভাবে লভ্যাংশ ঘোষণাকে শ্রেণি-স্থানান্তরের ঘটনায় পরিণত করে এবং তা প্রণোদনায় কী করে তা ব্যাখ্যা করা।',
    ],
  },

  blocks: {
    theory: {
      en: `A dividend is a distribution of the company's cash or shares to its owners. That definition is short and the practice is not, because on the DSE **the dividend is simultaneously a payment, a signal, a tax event, and a regulatory classification trigger** — and those four functions frequently conflict.

### Cash dividend versus stock dividend

Chapter 4 established the price mechanics. Restate them here because everything in this chapter depends on them.

| | **Cash dividend** | **Stock dividend (bonus)** |
|---|---|---|
| Cash leaves the company | Yes | **No** |
| Cash reaches the shareholder | Yes | **No** |
| Share count changes | No | Yes, rises |
| Price adjustment | $P - D$ | $P \\div (1+b)$ |
| Shareholder wealth on record date | Unchanged (cash replaces price) | **Unchanged (more shares, lower price)** |
| Reserves | Reduced by cash paid | Capitalised into paid-up capital |
| Effect on EPS next year | Neutral | **Diluted — same profit, more shares** |

**A stock dividend transfers nothing.** It moves a number from the reserves line to the paid-up capital line and issues paper against it. The shareholder ends the day with the same wealth they started with, holding more units of a proportionally cheaper thing. Chapter 4 called this "the single most misread event on the exchange" for exactly this reason.

**And yet it is announced, reported, and celebrated as though it were a payment.** "Company declares 20% dividend" — on the DSE that headline is frequently a stock dividend, meaning the company paid nothing, and the shareholder received nothing except a lower per-share price and permanently diluted future EPS.

Both are legitimate instruments. A genuinely growing company that needs its cash for capacity has a good reason to issue bonus shares rather than pay out. **A company with no cash and no growth that issues bonus shares to appear generous has a different reason, and you must be able to tell which you are looking at.**

### The DSE category rule turns dividend into a compliance decision

Chapter 4 set out the categories:

| Category | Rule |
|---|---|
| **A** | Holds AGM regularly and declared dividend of 10% or more |
| **B** | Holds AGM but declared less than 10% dividend |
| **N** | Newly listed, until first AGM/dividend |
| **Z** | No AGM, or no dividend, or non-operational, or accumulated losses exceed paid-up capital |

Read that A-category rule again. **Ten percent of face value.** On a BDT 10 face value, that is BDT 1.00 per share. For a company whose shares trade at BDT 40, a BDT 1.00 declaration is a 2.5% yield — trivial to an investor, and decisive to the company, because:

- **A-category securities are margin-eligible.** B and Z generally are not. Chapter 5 established what margin lending does to a scrip's demand. A company falling out of A loses the leveraged marginal buyer entirely.
- **Institutional mandates screen on category.** Falling to B or Z removes the company from portfolios mechanically, regardless of price.
- **Category migration is itself a price event.** A → Z forces every margin holder to unwind into a market that has just been told the company failed.

**This creates a direct and permanent incentive to declare a dividend the company cannot afford.** Not because management is dishonest, but because the alternative — a category downgrade with forced deleveraging — is worse for everyone holding the stock, including management. **A stock dividend of 10% satisfies the rule and costs no cash at all.** That is why so many marginal DSE companies declare exactly 10%, in stock, every year, for years.

### Sustainability has two tests, not one

Most retail analysis stops at the payout ratio: dividend per share over earnings per share. If it is under 100%, the dividend is "covered."

**That test is necessary and completely insufficient.** Chapter 12 established why: earnings are an accrual concept and dividends are paid in cash. A company can report BDT 9 of EPS while collecting almost none of it, if revenue is sitting in receivables. Chapter 13 established the quality-of-earnings gap this creates.

The dividend must therefore pass **both**:

1. **Earnings cover** — $EPS \\div DPS \\ge 1$. Is there accounting profit behind it?
2. **Free cash flow cover** — $FCF \\div \\text{Total cash dividend} \\ge 1$. Is there actual cash behind it, *after* the company has spent what it must on capex to stay in business?

A dividend that passes test 1 and fails test 2 is being funded from somewhere other than the year's operations: from reserves, from borrowing, from asset sales, or from deferred capex. All four are finite. **The third — borrowing to pay a dividend — is the one that shows up in the Chapter 19 equity multiplier, climbing.**

### Dividend from reserves versus from current profit

The Companies Act 1994 permits distribution out of accumulated profits, not merely the current year's. This is a legitimate provision for a genuinely cyclical business smoothing a bad year.

It is also the mechanism by which a dying company distributes its own capital back to shareholders and calls it income. **Watch the retained earnings line across five years.** A company paying more than it earns, year after year, is not paying you a dividend. It is returning your capital in instalments and charging you a market price for the privilege.

### Why high yield is usually a warning

Yield is $DPS \\div P$. It rises when the numerator rises or **when the denominator falls**.

On the DSE the second is far more common. A yield that has gone from 4% to 9% has usually done so because the price halved, and the price halved because the market has concluded the earnings that fund the dividend are not durable. **You are not being offered 9%. You are being offered a dividend the market does not believe will be paid again.**

The correct reading of a 9% yield is a question, not an opportunity: *what does the market know that makes this cheap?* Then answer it with the two cover tests, not with the yield.`,
      bn: `লভ্যাংশ হলো কোম্পানির নগদ বা শেয়ারের মালিকদের মধ্যে বণ্টন। সংজ্ঞাটি সংক্ষিপ্ত, বাস্তবতা নয়, কারণ ডিএসই-তে **লভ্যাংশ একই সঙ্গে একটি পরিশোধ, একটি সংকেত, একটি কর ঘটনা এবং একটি নিয়ন্ত্রক শ্রেণিবিন্যাসের ট্রিগার** — এবং এই চারটি কাজ প্রায়ই পরস্পরবিরোধী।

### নগদ লভ্যাংশ বনাম স্টক লভ্যাংশ

অধ্যায় ৪ দামের কার্যপ্রণালী প্রতিষ্ঠা করেছে। এখানে পুনরায় বলা হচ্ছে কারণ এই অধ্যায়ের সবকিছু এর ওপর নির্ভরশীল।

| | **নগদ লভ্যাংশ** | **স্টক লভ্যাংশ (বোনাস)** |
|---|---|---|
| কোম্পানি থেকে নগদ বেরোয় | হ্যাঁ | **না** |
| শেয়ারহোল্ডারের কাছে নগদ পৌঁছায় | হ্যাঁ | **না** |
| শেয়ার সংখ্যা বদলায় | না | হ্যাঁ, বাড়ে |
| দামের সমন্বয় | $P - D$ | $P \\div (1+b)$ |
| রেকর্ড তারিখে শেয়ারহোল্ডারের সম্পদ | অপরিবর্তিত (দামের বদলে নগদ) | **অপরিবর্তিত (বেশি শেয়ার, কম দাম)** |
| সঞ্চিতি | পরিশোধিত নগদ পরিমাণ কমে | পরিশোধিত মূলধনে মূলধনীকৃত |
| পরের বছরের EPS-এ প্রভাব | নিরপেক্ষ | **লঘুকৃত — একই মুনাফা, বেশি শেয়ার** |

**স্টক লভ্যাংশ কিছুই হস্তান্তর করে না।** এটি একটি সংখ্যাকে সঞ্চিতির সারি থেকে পরিশোধিত মূলধনের সারিতে সরায় এবং তার বিপরীতে কাগজ ইস্যু করে। শেয়ারহোল্ডার দিন শেষ করেন ঠিক যে সম্পদ নিয়ে শুরু করেছিলেন, সমানুপাতিকভাবে সস্তা একটি জিনিসের বেশি একক ধরে। ঠিক এ কারণেই অধ্যায় ৪ একে "এক্সচেঞ্জের সবচেয়ে বেশি ভুল-পঠিত ঘটনা" বলেছে।

**তবুও এটি এমনভাবে ঘোষিত, প্রচারিত ও উদযাপিত হয় যেন এটি একটি পরিশোধ।** "কোম্পানি ২০% লভ্যাংশ ঘোষণা করেছে" — ডিএসই-তে এই শিরোনাম প্রায়ই একটি স্টক লভ্যাংশ, অর্থাৎ কোম্পানি কিছুই দেয়নি, এবং শেয়ারহোল্ডার কম শেয়ারপ্রতি দাম ও স্থায়ীভাবে লঘুকৃত ভবিষ্যৎ EPS ছাড়া কিছুই পাননি।

দুটিই বৈধ উপকরণ। প্রকৃতপক্ষে বর্ধনশীল যে কোম্পানির নগদ দরকার সক্ষমতার জন্য, তার পরিশোধ না করে বোনাস শেয়ার ইস্যু করার ভালো কারণ আছে। **যে কোম্পানির নগদও নেই, প্রবৃদ্ধিও নেই, অথচ উদার দেখাতে বোনাস শেয়ার ইস্যু করে — তার কারণ ভিন্ন, এবং আপনাকে বুঝতে পারতে হবে আপনি কোনটি দেখছেন।**

### ডিএসই-র শ্রেণি বিধি লভ্যাংশকে একটি সম্মতি-সিদ্ধান্তে পরিণত করে

অধ্যায় ৪ শ্রেণিগুলো উপস্থাপন করেছে:

| শ্রেণি | বিধি |
|---|---|
| **A** | নিয়মিত এজিএম করে এবং ১০% বা তার বেশি লভ্যাংশ ঘোষণা করেছে |
| **B** | এজিএম করে কিন্তু ১০%-এর কম লভ্যাংশ ঘোষণা করেছে |
| **N** | নতুন তালিকাভুক্ত, প্রথম এজিএম/লভ্যাংশ পর্যন্ত |
| **Z** | এজিএম নেই, বা লভ্যাংশ নেই, বা অকার্যকর, বা পুঞ্জীভূত ক্ষতি পরিশোধিত মূলধন ছাড়িয়েছে |

A-শ্রেণির বিধিটি আবার পড়ুন। **অভিহিত মূল্যের দশ শতাংশ।** ১০ টাকা অভিহিত মূল্যে তা শেয়ারপ্রতি ১.০০ টাকা। যে কোম্পানির শেয়ার ৪০ টাকায় লেনদেন হয়, তার জন্য ১.০০ টাকা ঘোষণা মানে ২.৫% ফলন — বিনিয়োগকারীর কাছে তুচ্ছ, কোম্পানির কাছে নির্ণায়ক, কারণ:

- **A-শ্রেণির সিকিউরিটি মার্জিন-যোগ্য।** B ও Z সাধারণত নয়। অধ্যায় ৫ প্রতিষ্ঠা করেছে মার্জিন ঋণ একটি স্ক্রিপের চাহিদায় কী করে। A থেকে পড়ে যাওয়া কোম্পানি ঋণভারযুক্ত প্রান্তিক ক্রেতাকে সম্পূর্ণ হারায়।
- **প্রাতিষ্ঠানিক ম্যান্ডেট শ্রেণি দিয়ে ছাঁকে।** B বা Z-এ নামলে কোম্পানিটি দাম নির্বিশেষে যান্ত্রিকভাবে পোর্টফোলিও থেকে বাদ পড়ে।
- **শ্রেণি-স্থানান্তর নিজেই একটি মূল্য-ঘটনা।** A → Z প্রতিটি মার্জিন ধারককে এমন বাজারে গুটিয়ে নিতে বাধ্য করে যাকে সবে বলা হয়েছে কোম্পানিটি ব্যর্থ হয়েছে।

**এটি এমন লভ্যাংশ ঘোষণার একটি সরাসরি ও স্থায়ী প্রণোদনা তৈরি করে যা কোম্পানির সামর্থ্যের বাইরে।** ব্যবস্থাপনা অসৎ বলে নয়, বরং বিকল্পটি — বাধ্যতামূলক ঋণভার-হ্রাসসহ শ্রেণি অবনমন — শেয়ার ধারণকারী সবার জন্য, ব্যবস্থাপনাসহ, আরও খারাপ বলে। **১০% স্টক লভ্যাংশ বিধিটি পূরণ করে এবং এক পয়সাও নগদ খরচ করে না।** এ কারণেই এত সংখ্যক প্রান্তিক ডিএসই কোম্পানি বছরের পর বছর ঠিক ১০%, স্টকে, ঘোষণা করে।

### টেকসইতার পরীক্ষা একটি নয়, দুটি

বেশিরভাগ খুচরা বিশ্লেষণ পরিশোধ অনুপাতে থেমে যায়: শেয়ারপ্রতি লভ্যাংশ ভাগ শেয়ারপ্রতি আয়। ১০০%-এর নিচে হলে লভ্যাংশ "আচ্ছাদিত"।

**ঐ পরীক্ষা প্রয়োজনীয় এবং সম্পূর্ণ অপর্যাপ্ত।** অধ্যায় ১২ কারণটি প্রতিষ্ঠা করেছে: আয় একটি সঞ্চিতিভিত্তিক ধারণা আর লভ্যাংশ দেওয়া হয় নগদে। রাজস্ব প্রাপ্য হিসাবে বসে থাকলে একটি কোম্পানি ৯ টাকা EPS দেখাতে পারে অথচ তার প্রায় কিছুই আদায় না করে। অধ্যায় ১৩ এতে তৈরি হওয়া আয়-গুণমানের ফাঁক প্রতিষ্ঠা করেছে।

অতএব লভ্যাংশকে **দুটিতেই** উত্তীর্ণ হতে হবে:

১. **মুনাফা আচ্ছাদন** — $EPS \\div DPS \\ge 1$। এর পেছনে হিসাবগত মুনাফা আছে কি?
২. **মুক্ত নগদ প্রবাহ আচ্ছাদন** — $FCF \\div \\text{মোট নগদ লভ্যাংশ} \\ge 1$। ব্যবসায় টিকে থাকতে কোম্পানি যা মূলধনী ব্যয় করতে বাধ্য তা করার *পরে* এর পেছনে প্রকৃত নগদ আছে কি?

যে লভ্যাংশ ১ নম্বরে উত্তীর্ণ ও ২ নম্বরে ব্যর্থ, সেটি বছরের পরিচালনার বাইরে অন্য কোথাও থেকে অর্থায়িত হচ্ছে: সঞ্চিতি থেকে, ঋণ থেকে, সম্পদ বিক্রি থেকে, বা স্থগিত মূলধনী ব্যয় থেকে। চারটিই সীমিত। **তৃতীয়টি — লভ্যাংশ দিতে ঋণ নেওয়া — সেটিই অধ্যায় ১৯-এর ইক্যুইটি গুণকে ধরা পড়ে, ঊর্ধ্বমুখী হয়ে।**

### সঞ্চিতি থেকে লভ্যাংশ বনাম চলতি মুনাফা থেকে

কোম্পানি আইন ১৯৯৪ কেবল চলতি বছরের নয়, পুঞ্জীভূত মুনাফা থেকেও বণ্টনের অনুমতি দেয়। প্রকৃতপক্ষে চক্রীয় একটি ব্যবসার খারাপ বছর মসৃণ করার জন্য এটি একটি বৈধ বিধান।

এটি সেই কৌশলও, যার মাধ্যমে একটি মৃতপ্রায় কোম্পানি নিজের মূলধন শেয়ারহোল্ডারদের ফেরত দিয়ে তাকে আয় বলে চালায়। **পাঁচ বছর ধরে সংরক্ষিত মুনাফার সারিটি দেখুন।** যে কোম্পানি বছরের পর বছর আয়ের চেয়ে বেশি দেয়, সে আপনাকে লভ্যাংশ দিচ্ছে না। সে আপনার মূলধন কিস্তিতে ফেরত দিচ্ছে এবং সেই সুযোগের জন্য আপনার কাছ থেকে বাজারমূল্য নিচ্ছে।

### কেন উচ্চ ফলন সাধারণত একটি সতর্কবার্তা

ফলন হলো $DPS \\div P$। লব বাড়লে এটি বাড়ে, অথবা **হর কমলেও বাড়ে**।

ডিএসই-তে দ্বিতীয়টিই অনেক বেশি সাধারণ। ৪% থেকে ৯%-এ যাওয়া ফলন সাধারণত গেছে কারণ দাম অর্ধেক হয়েছে, আর দাম অর্ধেক হয়েছে কারণ বাজার সিদ্ধান্ত নিয়েছে যে লভ্যাংশের তহবিল জোগানো আয়টি টেকসই নয়। **আপনাকে ৯% দেওয়া হচ্ছে না। আপনাকে এমন একটি লভ্যাংশ দেওয়া হচ্ছে যা আবার দেওয়া হবে বলে বাজার বিশ্বাস করে না।**

৯% ফলনের সঠিক পাঠ একটি প্রশ্ন, সুযোগ নয়: *বাজার এমন কী জানে যা একে সস্তা করেছে?* তারপর উত্তর দিন দুটি আচ্ছাদন পরীক্ষা দিয়ে, ফলন দিয়ে নয়।`,
    },

    simple: {
      en: `Two shops on the same street. Both promise to hand you 9 taka a year for every 100 taka you invest.

**Shop 1 — the power company.** It earns 9 taka of profit per share, pays you 5.40, keeps 3.60. After paying for all its machinery and repairs, it still has more than twice as much spare cash as it needs for your payment. It could pay you this every year for a decade without touching anything.

**Shop 2 — the textile mill.** It earns 1.20 taka per share and pays you 3.60. It is paying three times what it made. Worse: after machinery costs, it did not generate any spare cash at all this year — it was 23 crore short. So where is your 3.60 coming from?

**From the money it saved in better years, and from the bank.**

That is not a dividend. **That is your own money coming back, plus borrowed money, arriving in an envelope marked "income."**

---

### Why does Shop 2 do it?

Because of a rule. On the DSE, if a company pays a dividend of at least 10% of face value, it stays in **A category**. If it does not, it drops to B or Z.

A-category shares can be bought with a margin loan. B and Z generally cannot. The moment a company drops out of A, everyone holding it on borrowed money must sell — and Chapter 5 showed you what forced selling does to a price.

So the mill declares a dividend it cannot afford, because the alternative is watching its own shareholders get liquidated.

---

### The trick that costs nothing

There is a cheaper way to satisfy the rule. **Declare the dividend in shares instead of cash.**

You hold 1,000 shares at 40 taka. Total: 40,000 taka. The company declares a 20% stock dividend. You now hold 1,200 shares. The price adjusts to 33.33 taka.

1,200 × 33.33 = **40,000 taka.**

You have exactly what you had. The company paid nothing. Nobody received anything. And the headline in the newspaper says the company declared a 20% dividend.

---

### The one number to check

Before you buy anything for its dividend, find the cash flow statement and compute one thing:

**Cash from operations, minus what the company spent on equipment, minus the total dividend.**

If that number is positive, the dividend was paid out of the business. If it is negative, it was paid out of reserves or a loan, and **you should assume it will not be paid again.**

Retail investors in Bangladesh chase yield harder than anything else on this exchange, and lose money doing it more reliably than almost any other habit. A 9% yield on a share that falls 30% is a 21% loss with extra steps.`,
      bn: `একই রাস্তার দুটি দোকান। দুটিই প্রতিশ্রুতি দেয় আপনার বিনিয়োগ করা প্রতি ১০০ টাকায় বছরে ৯ টাকা দেবে।

**দোকান ১ — বিদ্যুৎ কোম্পানি।** এটি শেয়ারপ্রতি ৯ টাকা মুনাফা করে, আপনাকে দেয় ৫.৪০, রাখে ৩.৬০। সব যন্ত্রপাতি ও মেরামতের খরচ মেটানোর পরও আপনার পাওনার জন্য যা দরকার তার দ্বিগুণেরও বেশি উদ্বৃত্ত নগদ তার আছে। এক দশক ধরে কিছুতে হাত না দিয়েই সে আপনাকে এটি দিতে পারে।

**দোকান ২ — বস্ত্রকল।** এটি শেয়ারপ্রতি ১.২০ টাকা আয় করে এবং আপনাকে দেয় ৩.৬০। যা আয় করেছে তার তিন গুণ দিচ্ছে। আরও খারাপ: যন্ত্রপাতির খরচের পর এ বছর তার কোনো উদ্বৃত্ত নগদই তৈরি হয়নি — ঘাটতি ছিল ২৩ কোটি টাকা। তাহলে আপনার ৩.৬০ আসছে কোথা থেকে?

**ভালো বছরগুলোতে জমানো টাকা থেকে, আর ব্যাংক থেকে।**

এটি লভ্যাংশ নয়। **এটি আপনারই টাকা ফেরত আসছে, সঙ্গে ধার করা টাকা, "আয়" লেখা খামে।**

---

### দোকান ২ কেন এটি করে?

একটি বিধির কারণে। ডিএসই-তে কোনো কোম্পানি অভিহিত মূল্যের অন্তত ১০% লভ্যাংশ দিলে সে **A শ্রেণিতে** থাকে। না দিলে B বা Z-এ নেমে যায়।

A-শ্রেণির শেয়ার মার্জিন ঋণে কেনা যায়। B ও Z সাধারণত যায় না। যে মুহূর্তে একটি কোম্পানি A থেকে পড়ে, ধার করা টাকায় তা ধরে থাকা সবাইকে বেচতে হয় — আর অধ্যায় ৫ দেখিয়েছে বাধ্যতামূলক বিক্রি দামের কী করে।

তাই কলটি এমন লভ্যাংশ ঘোষণা করে যা তার সামর্থ্যের বাইরে, কারণ বিকল্পটি হলো নিজের শেয়ারহোল্ডারদের গুটিয়ে যাওয়া দেখা।

---

### যে কৌশলে কোনো খরচ নেই

বিধিটি পূরণের সস্তা উপায় আছে। **নগদের বদলে শেয়ারে লভ্যাংশ ঘোষণা করুন।**

আপনার ৪০ টাকা দরে ১,০০০ শেয়ার। মোট: ৪০,০০০ টাকা। কোম্পানি ২০% স্টক লভ্যাংশ ঘোষণা করল। আপনার এখন ১,২০০ শেয়ার। দাম সমন্বিত হয়ে ৩৩.৩৩ টাকা।

১,২০০ × ৩৩.৩৩ = **৪০,০০০ টাকা।**

আপনার যা ছিল ঠিক তাই আছে। কোম্পানি কিছু দেয়নি। কেউ কিছু পায়নি। আর সংবাদপত্রের শিরোনাম বলছে কোম্পানি ২০% লভ্যাংশ ঘোষণা করেছে।

---

### যে একটি সংখ্যা দেখতেই হবে

লভ্যাংশের জন্য কিছু কেনার আগে নগদ প্রবাহ বিবরণী বের করে একটি জিনিস গণনা করুন:

**পরিচালনা থেকে নগদ, বিয়োগ যন্ত্রপাতিতে কোম্পানির খরচ, বিয়োগ মোট লভ্যাংশ।**

সংখ্যাটি ধনাত্মক হলে লভ্যাংশ ব্যবসা থেকে দেওয়া হয়েছে। ঋণাত্মক হলে তা সঞ্চিতি বা ঋণ থেকে দেওয়া হয়েছে, এবং **ধরে নিন এটি আর দেওয়া হবে না।**

বাংলাদেশের খুচরা বিনিয়োগকারীরা এই এক্সচেঞ্জে অন্য যেকোনো কিছুর চেয়ে বেশি ফলনের পেছনে ছোটেন, এবং প্রায় অন্য যেকোনো অভ্যাসের চেয়ে নিয়মিতভাবে তাতে টাকা হারান। যে শেয়ার ৩০% পড়ে তাতে ৯% ফলন মানে অতিরিক্ত ধাপসহ ২১% ক্ষতি।`,
    },

    example: {
      en: `### Two companies, one 9% yield

Both trade on the DSE. Both offer a dividend yield of exactly 9.00%. A yield screener returns them adjacent.

| | **GENCO** (fuel & power) | **SPINTEX** (textile) |
|---|---|---|
| Market price | BDT 60.00 | BDT 40.00 |
| Face value | BDT 10.00 | BDT 10.00 |
| EPS | BDT 9.00 | BDT 1.20 |
| Cash DPS declared | BDT 5.40 | BDT 3.60 |
| **Declared rate on face value** | **54%** | **36%** |
| **Dividend yield** | **9.00%** | **9.00%** |
| Shares outstanding | 12.0 crore | 10.0 crore |
| CFO (BDT crore) | 200.0 | 22.0 |
| Capex (BDT crore) | 64.0 | 45.0 |
| Shareholders' equity (BDT crore) | 720.0 | 300.0 |
| Free reserves (BDT crore) | 430.0 | 180.0 |

Both are comfortably A-category. Both headlines read "declares handsome dividend."

### Test 1 — cover from earnings

| | GENCO | SPINTEX |
|---|---|---|
| Payout ratio | 5.40 / 9.00 = **60.00%** | 3.60 / 1.20 = **300.00%** |
| Earnings cover | 9.00 / 5.40 = **1.67×** | 1.20 / 3.60 = **0.33×** |
| Retention ratio | **40.00%** | **−200.00%** |

SPINTEX is paying three taka for every taka it earned. Its retention ratio is negative, which is not a rhetorical flourish — it means the equity base is shrinking. Chapter 19's DuPont denominator is being consumed to fund the payment.

**GENCO passes. SPINTEX fails on the first and easiest test, and a yield screener still returned it.**

### Test 2 — cover from cash

| | GENCO | SPINTEX |
|---|---|---|
| CFO | 200.0 | 22.0 |
| less Capex | 64.0 | 45.0 |
| **Free cash flow** | **136.0** | **−23.0** |
| Total cash dividend (DPS × shares) | 5.40 × 12 = **64.8** | 3.60 × 10 = **36.0** |
| **FCF cover** | **2.10×** | **−0.64×** |
| FCF payout ratio | 47.6% | n/a (FCF negative) |
| **Cash gap (FCF − dividend)** | **+71.2** | **−59.0** |

**GENCO generates 136 crore of free cash and hands out 64.8 crore of it.** After the dividend it still retains 71.2 crore. It could pay this dividend, unchanged, through a materially worse year.

**SPINTEX generated negative free cash flow and paid out 36 crore anyway.** The full 36 crore came from somewhere other than this year's operations, and the cash gap is 59 crore.

### Where SPINTEX's dividend actually came from

Net income was 1.20 × 10 = **12.0 crore**. The dividend was **36.0 crore**. The excess of 24.0 crore came out of the 180 crore free reserve — that is the accounting story.

But the *cash* story is worse, because the business also consumed cash: FCF was −23.0 crore. The total cash requirement was 23.0 + 36.0 = **59.0 crore**, and it was funded by drawing down cash balances and increasing borrowing.

**Reserve runway:** 180 ÷ 59 = **3.05 years** at this rate, and that assumes operations do not deteriorate further and the lenders keep lending.

### The growth arithmetic

Chapter 19 gave us ROE. Combine it with retention:

| | GENCO | SPINTEX |
|---|---|---|
| Net income (crore) | 9.00 × 12 = 108.0 | 1.20 × 10 = 12.0 |
| Equity (crore) | 720.0 | 300.0 |
| **ROE** | **15.00%** | **4.00%** |
| Retention ratio | 0.40 | −2.00 |
| **Sustainable growth (ROE × b)** | **+6.00%** | **−8.00%** |

**GENCO can grow its equity base at 6% a year from internal resources alone.** SPINTEX is shrinking its equity base at 8% a year. Left alone, its book value halves in roughly nine years while it continues to advertise a 9% yield.

**This is the whole chapter in one comparison.** Identical yield. One company is distributing surplus. The other is distributing itself.

### The stock dividend alternative

Now suppose SPINTEX's board looks at the cash gap and decides it cannot fund 36 crore. It has three options:

| Option | Cash out | Category outcome | Shareholder receives |
|---|---|---|---|
| Pay 36% cash | BDT 36 crore | Stays **A** | BDT 3.60 per share |
| Pay 10% cash | BDT 10 crore | Stays **A** (meets the 10% rule) | BDT 1.00 per share |
| Pay 20% **stock** | **BDT 0** | Stays **A** | **Nothing** |

The third option costs the company nothing, satisfies the A-category rule, generates a positive headline, and preserves margin eligibility for every leveraged holder of the stock.

**Watch the shareholder's position under option three.** A holder of 1,000 shares at BDT 40:

$$\\text{Before: } 1{,}000 \\times 40.00 = \\text{BDT } 40{,}000$$
$$\\text{Ex-bonus price} = \\frac{40.00}{1 + 0.20} = \\text{BDT } 33.33$$
$$\\text{After: } 1{,}200 \\times 33.33 = \\text{BDT } 40{,}000$$

**Wealth unchanged. Cash received: zero.** And next year the same profit is divided across 20% more shares, so EPS falls by one-sixth before the business has done anything at all.

This is not fraud and it is not prohibited. It is a rational response to a category rule that measures generosity in percent of face value rather than in cash. **Chapter 4 established that the DSE relaxes the circuit breaker on the first post-record trading day precisely so a bonus adjustment can happen without locking.** The exchange has built infrastructure to accommodate a distribution that distributes nothing.

### What the market does with this

Look at the price reaction, not the announcement.

| | SPINTEX before | SPINTEX after 3 quarters |
|---|---|---|
| Price | BDT 40.00 | BDT 26.00 |
| Cash DPS (next declaration) | 3.60 | 0.00 |
| Yield on original cost | 9.00% | 0.00% |
| Total return to holder | — | **−35% + 9% = −26%** |

An investor who bought at BDT 40 for the 9% yield collected BDT 3.60 once and lost BDT 14.00 of capital. **The yield was real. It was also the last one.**

**The lesson is not that high yield is bad. The lesson is that yield is an output of two numbers, and on the DSE the denominator moves far more violently than the numerator.**`,
      bn: `### দুটি কোম্পানি, একটি ৯% ফলন

দুটিই ডিএসই-তে লেনদেন হয়। দুটিরই লভ্যাংশ ফলন ঠিক ৯.০০%। একটি ফলন স্ক্রিনার এদের পাশাপাশি ফেরত দেয়।

| | **GENCO** (জ্বালানি ও বিদ্যুৎ) | **SPINTEX** (বস্ত্র) |
|---|---|---|
| বাজারমূল্য | ৬০.০০ টাকা | ৪০.০০ টাকা |
| অভিহিত মূল্য | ১০.০০ টাকা | ১০.০০ টাকা |
| EPS | ৯.০০ টাকা | ১.২০ টাকা |
| ঘোষিত নগদ DPS | ৫.৪০ টাকা | ৩.৬০ টাকা |
| **অভিহিত মূল্যের ওপর ঘোষিত হার** | **৫৪%** | **৩৬%** |
| **লভ্যাংশ ফলন** | **৯.০০%** | **৯.০০%** |
| বকেয়া শেয়ার | ১২.০ কোটি | ১০.০ কোটি |
| CFO (কোটি টাকা) | ২০০.০ | ২২.০ |
| মূলধনী ব্যয় (কোটি টাকা) | ৬৪.০ | ৪৫.০ |
| শেয়ারহোল্ডারদের ইক্যুইটি (কোটি টাকা) | ৭২০.০ | ৩০০.০ |
| মুক্ত সঞ্চিতি (কোটি টাকা) | ৪৩০.০ | ১৮০.০ |

দুটিই স্বচ্ছন্দে A-শ্রেণির। দুটির শিরোনামই বলে "আকর্ষণীয় লভ্যাংশ ঘোষণা"।

### পরীক্ষা ১ — মুনাফা থেকে আচ্ছাদন

| | GENCO | SPINTEX |
|---|---|---|
| পরিশোধ অনুপাত | ৫.৪০ / ৯.০০ = **৬০.০০%** | ৩.৬০ / ১.২০ = **৩০০.০০%** |
| মুনাফা আচ্ছাদন | ৯.০০ / ৫.৪০ = **১.৬৭×** | ১.২০ / ৩.৬০ = **০.৩৩×** |
| ধারণ অনুপাত | **৪০.০০%** | **−২০০.০০%** |

SPINTEX আয়ের প্রতি এক টাকায় তিন টাকা দিচ্ছে। তার ধারণ অনুপাত ঋণাত্মক, যা কোনো অলংকার নয় — এর মানে ইক্যুইটিভিত্তি সংকুচিত হচ্ছে। পরিশোধের তহবিল জোগাতে অধ্যায় ১৯-এর ডুপন্ট হরটিই খেয়ে ফেলা হচ্ছে।

**GENCO উত্তীর্ণ। SPINTEX প্রথম ও সবচেয়ে সহজ পরীক্ষাতেই ব্যর্থ, তবুও ফলন স্ক্রিনার একে ফেরত দিয়েছে।**

### পরীক্ষা ২ — নগদ থেকে আচ্ছাদন

| | GENCO | SPINTEX |
|---|---|---|
| CFO | ২০০.০ | ২২.০ |
| বিয়োগ মূলধনী ব্যয় | ৬৪.০ | ৪৫.০ |
| **মুক্ত নগদ প্রবাহ** | **১৩৬.০** | **−২৩.০** |
| মোট নগদ লভ্যাংশ (DPS × শেয়ার) | ৫.৪০ × ১২ = **৬৪.৮** | ৩.৬০ × ১০ = **৩৬.০** |
| **FCF আচ্ছাদন** | **২.১০×** | **−০.৬৪×** |
| FCF পরিশোধ অনুপাত | ৪৭.৬% | প্রযোজ্য নয় (FCF ঋণাত্মক) |
| **নগদ ঘাটতি (FCF − লভ্যাংশ)** | **+৭১.২** | **−৫৯.০** |

**GENCO ১৩৬ কোটি টাকা মুক্ত নগদ তৈরি করে এবং তার ৬৪.৮ কোটি বিতরণ করে।** লভ্যাংশের পরও ৭১.২ কোটি ধরে রাখে। একটি উল্লেখযোগ্যভাবে খারাপ বছরেও সে এই লভ্যাংশ অপরিবর্তিত রাখতে পারত।

**SPINTEX ঋণাত্মক মুক্ত নগদ প্রবাহ তৈরি করেছে এবং তবুও ৩৬ কোটি বিতরণ করেছে।** পুরো ৩৬ কোটি এসেছে এ বছরের পরিচালনার বাইরে অন্য কোথাও থেকে, এবং নগদ ঘাটতি ৫৯ কোটি।

### SPINTEX-এর লভ্যাংশ আসলে কোথা থেকে এল

নিট মুনাফা ছিল ১.২০ × ১০ = **১২.০ কোটি**। লভ্যাংশ ছিল **৩৬.০ কোটি**। ২৪.০ কোটির অতিরিক্তটি এসেছে ১৮০ কোটির মুক্ত সঞ্চিতি থেকে — এটি হিসাবের গল্প।

কিন্তু *নগদের* গল্প আরও খারাপ, কারণ ব্যবসাটি নগদও খেয়েছে: FCF ছিল −২৩.০ কোটি। মোট নগদ চাহিদা ছিল ২৩.০ + ৩৬.০ = **৫৯.০ কোটি**, এবং তা মেটানো হয়েছে নগদ ব্যালান্স কমিয়ে ও ঋণ বাড়িয়ে।

**সঞ্চিতির স্থায়িত্ব:** এই হারে ১৮০ ÷ ৫৯ = **৩.০৫ বছর**, এবং তা ধরে নিচ্ছে যে পরিচালনা আর অবনত হবে না এবং ঋণদাতারা ঋণ দিতে থাকবেন।

### প্রবৃদ্ধির পাটিগণিত

অধ্যায় ১৯ আমাদের ROE দিয়েছে। ধারণের সঙ্গে মেলান:

| | GENCO | SPINTEX |
|---|---|---|
| নিট মুনাফা (কোটি) | ৯.০০ × ১২ = ১০৮.০ | ১.২০ × ১০ = ১২.০ |
| ইক্যুইটি (কোটি) | ৭২০.০ | ৩০০.০ |
| **ROE** | **১৫.০০%** | **৪.০০%** |
| ধারণ অনুপাত | ০.৪০ | −২.০০ |
| **টেকসই প্রবৃদ্ধি (ROE × b)** | **+৬.০০%** | **−৮.০০%** |

**GENCO কেবল অভ্যন্তরীণ সম্পদ দিয়েই বছরে ৬% হারে ইক্যুইটিভিত্তি বাড়াতে পারে।** SPINTEX বছরে ৮% হারে ইক্যুইটিভিত্তি সংকুচিত করছে। এভাবে চললে প্রায় নয় বছরে তার বহিমূল্য অর্ধেক হবে, আর সে ৯% ফলনের বিজ্ঞাপন দিয়ে যাবে।

**একটি তুলনায় পুরো অধ্যায়টি এখানে।** অভিন্ন ফলন। একটি কোম্পানি উদ্বৃত্ত বিতরণ করছে। অন্যটি নিজেকে বিতরণ করছে।

### স্টক লভ্যাংশের বিকল্প

এবার ধরুন SPINTEX-এর পর্ষদ নগদ ঘাটতি দেখে সিদ্ধান্ত নেয় যে ৩৬ কোটির তহবিল সে জোগাতে পারবে না। তার তিনটি বিকল্প:

| বিকল্প | নগদ বেরোয় | শ্রেণির ফল | শেয়ারহোল্ডার পান |
|---|---|---|---|
| ৩৬% নগদ | ৩৬ কোটি টাকা | **A**-তে থাকে | শেয়ারপ্রতি ৩.৬০ টাকা |
| ১০% নগদ | ১০ কোটি টাকা | **A**-তে থাকে (১০% বিধি পূরণ) | শেয়ারপ্রতি ১.০০ টাকা |
| ২০% **স্টক** | **০ টাকা** | **A**-তে থাকে | **কিছুই না** |

তৃতীয় বিকল্পে কোম্পানির কোনো খরচ নেই, A-শ্রেণির বিধি পূরণ হয়, ইতিবাচক শিরোনাম তৈরি হয়, এবং শেয়ারটির প্রতিটি ঋণভারযুক্ত ধারকের মার্জিন-যোগ্যতা অক্ষুণ্ণ থাকে।

**তৃতীয় বিকল্পে শেয়ারহোল্ডারের অবস্থান দেখুন।** ৪০ টাকা দরে ১,০০০ শেয়ারের একজন ধারক:

$$\\text{আগে: } 1{,}000 \\times 40.00 = 40{,}000 \\text{ টাকা}$$
$$\\text{ex-বোনাস দাম} = \\frac{40.00}{1 + 0.20} = 33.33 \\text{ টাকা}$$
$$\\text{পরে: } 1{,}200 \\times 33.33 = 40{,}000 \\text{ টাকা}$$

**সম্পদ অপরিবর্তিত। প্রাপ্ত নগদ: শূন্য।** আর পরের বছর একই মুনাফা ২০% বেশি শেয়ারে ভাগ হবে, অর্থাৎ ব্যবসাটি কিছু করার আগেই EPS এক-ষষ্ঠাংশ কমে যাবে।

এটি প্রতারণা নয় এবং নিষিদ্ধও নয়। এটি এমন একটি শ্রেণি বিধির যৌক্তিক প্রতিক্রিয়া যা উদারতা মাপে নগদে নয়, অভিহিত মূল্যের শতাংশে। **অধ্যায় ৪ প্রতিষ্ঠা করেছে যে ডিএসই রেকর্ড-পরবর্তী প্রথম লেনদেন দিবসে সার্কিট ব্রেকার শিথিল করে ঠিক এ কারণেই — যাতে বোনাস সমন্বয়টি আটকে না গিয়ে ঘটতে পারে।** এক্সচেঞ্জ এমন একটি বণ্টনের জন্য অবকাঠামো বানিয়েছে যা কিছুই বণ্টন করে না।

### বাজার এ নিয়ে কী করে

ঘোষণা নয়, দামের প্রতিক্রিয়া দেখুন।

| | SPINTEX আগে | SPINTEX ৩ প্রান্তিক পরে |
|---|---|---|
| দাম | ৪০.০০ টাকা | ২৬.০০ টাকা |
| নগদ DPS (পরবর্তী ঘোষণা) | ৩.৬০ | ০.০০ |
| মূল ব্যয়ের ওপর ফলন | ৯.০০% | ০.০০% |
| ধারকের মোট রিটার্ন | — | **−৩৫% + ৯% = −২৬%** |

যিনি ৯% ফলনের জন্য ৪০ টাকায় কিনেছিলেন, তিনি একবার ৩.৬০ টাকা পেয়েছেন এবং ১৪.০০ টাকা মূলধন হারিয়েছেন। **ফলনটি প্রকৃত ছিল। সেটিই শেষ ফলনও ছিল।**

**শিক্ষাটি এই নয় যে উচ্চ ফলন খারাপ। শিক্ষাটি হলো ফলন দুটি সংখ্যার ফলাফল, এবং ডিএসই-তে হর লবের চেয়ে অনেক বেশি প্রচণ্ডভাবে নড়ে।**`,
    },

    formula: {
      en: `**Dividend per share** — from the total declared distribution:

$$DPS = \\frac{\\text{Total Cash Dividend Declared}}{\\text{Shares Outstanding}}$$

**Declared rate on face value** — the number the DSE and the company actually announce:

$$r_{face} = \\frac{DPS}{\\text{Face Value}} \\times 100$$

This is the figure the A/B category rule tests against, not the yield.

**Dividend yield** — the number that matters to you as a buyer:

$$\\text{Yield} = \\frac{DPS}{P} \\times 100$$

**Payout ratio:**

$$\\text{Payout} = \\frac{DPS}{EPS} = \\frac{\\text{Total Dividend}}{\\text{Net Income}}$$

**Retention ratio** (also called the plowback ratio), $b$:

$$b = 1 - \\text{Payout}$$

Note that $b$ is negative whenever payout exceeds 100%. That is not a computational artefact — it means the equity base is being reduced.

**Dividend coverage from earnings:**

$$\\text{Earnings Cover} = \\frac{EPS}{DPS} = \\frac{1}{\\text{Payout}}$$

**Free cash flow:**

$$FCF = \\text{CFO} - \\text{Capex}$$

**Dividend coverage from cash:**

$$\\text{FCF Cover} = \\frac{FCF}{\\text{Total Cash Dividend}}$$

**FCF payout ratio:**

$$\\text{FCF Payout} = \\frac{\\text{Total Cash Dividend}}{FCF} \\times 100$$

**Cash gap** — the amount that must come from reserves, borrowing, or asset sales:

$$\\text{Gap} = FCF - \\text{Total Cash Dividend}$$

**Reserve runway** — years the free reserve can absorb a persistent gap:

$$\\text{Runway} = \\frac{\\text{Free Reserves}}{|\\text{Gap}|} \\quad\\text{when Gap} < 0$$

**Sustainable growth rate** — the rate at which equity can grow with no external capital:

$$g_{sust} = ROE \\times b$$

Chapter 19 decomposed the $ROE$ term. Combining the two:

$$g_{sust} = \\left(\\frac{NI}{S} \\times \\frac{S}{A} \\times \\frac{A}{E}\\right) \\times (1 - \\text{Payout})$$

**Stock dividend price adjustment** (Chapter 4), for a bonus ratio $b_s$ expressed as a fraction:

$$P_{ex} = \\frac{P}{1 + b_s}$$

**Combined cash and stock** — cash comes off first, then the bonus divides:

$$P_{ex} = \\frac{P - D}{1 + b_s}$$

**EPS dilution from a stock dividend** — same profit, more shares:

$$EPS_{new} = \\frac{EPS_{old}}{1 + b_s}$$

**Sustainability verdict** as a decision rule:

$$\\text{Verdict} = \\begin{cases} \\text{UNFUNDED} & FCF \\le 0 \\\\ \\text{SUSTAINABLE} & \\text{EarnCov} \\ge 1.5 \\text{ and FCFCov} \\ge 1.5 \\\\ \\text{TIGHT} & \\text{EarnCov} \\ge 1.0 \\text{ and FCFCov} \\ge 1.0 \\\\ \\text{STRAINED} & \\text{otherwise} \\end{cases}$$`,
      bn: `**শেয়ারপ্রতি লভ্যাংশ** — মোট ঘোষিত বণ্টন থেকে:

$$DPS = \\frac{\\text{মোট ঘোষিত নগদ লভ্যাংশ}}{\\text{বকেয়া শেয়ার}}$$

**অভিহিত মূল্যের ওপর ঘোষিত হার** — যে সংখ্যাটি ডিএসই ও কোম্পানি আসলে ঘোষণা করে:

$$r_{face} = \\frac{DPS}{\\text{অভিহিত মূল্য}} \\times 100$$

A/B শ্রেণি বিধি এই সংখ্যাটিই পরীক্ষা করে, ফলন নয়।

**লভ্যাংশ ফলন** — ক্রেতা হিসেবে আপনার কাছে যে সংখ্যাটি গুরুত্বপূর্ণ:

$$\\text{ফলন} = \\frac{DPS}{P} \\times 100$$

**পরিশোধ অনুপাত:**

$$\\text{পরিশোধ} = \\frac{DPS}{EPS} = \\frac{\\text{মোট লভ্যাংশ}}{\\text{নিট মুনাফা}}$$

**ধারণ অনুপাত** (plowback ratio নামেও পরিচিত), $b$:

$$b = 1 - \\text{পরিশোধ}$$

লক্ষ করুন পরিশোধ ১০০% ছাড়ালেই $b$ ঋণাত্মক। এটি কোনো গাণিতিক কৃত্রিমতা নয় — এর অর্থ ইক্যুইটিভিত্তি হ্রাস পাচ্ছে।

**মুনাফা থেকে লভ্যাংশ আচ্ছাদন:**

$$\\text{মুনাফা আচ্ছাদন} = \\frac{EPS}{DPS} = \\frac{1}{\\text{পরিশোধ}}$$

**মুক্ত নগদ প্রবাহ:**

$$FCF = \\text{CFO} - \\text{মূলধনী ব্যয়}$$

**নগদ থেকে লভ্যাংশ আচ্ছাদন:**

$$\\text{FCF আচ্ছাদন} = \\frac{FCF}{\\text{মোট নগদ লভ্যাংশ}}$$

**FCF পরিশোধ অনুপাত:**

$$\\text{FCF পরিশোধ} = \\frac{\\text{মোট নগদ লভ্যাংশ}}{FCF} \\times 100$$

**নগদ ঘাটতি** — যে পরিমাণ সঞ্চিতি, ঋণ বা সম্পদ বিক্রি থেকে আসতে বাধ্য:

$$\\text{ঘাটতি} = FCF - \\text{মোট নগদ লভ্যাংশ}$$

**সঞ্চিতির স্থায়িত্ব** — স্থায়ী ঘাটতি মুক্ত সঞ্চিতি কত বছর শুষতে পারে:

$$\\text{স্থায়িত্ব} = \\frac{\\text{মুক্ত সঞ্চিতি}}{|\\text{ঘাটতি}|} \\quad\\text{যখন ঘাটতি} < 0$$

**টেকসই প্রবৃদ্ধির হার** — বাহ্যিক মূলধন ছাড়া ইক্যুইটি যে হারে বাড়তে পারে:

$$g_{sust} = ROE \\times b$$

অধ্যায় ১৯ $ROE$ পদটি বিশ্লিষ্ট করেছে। দুটি মিলিয়ে:

$$g_{sust} = \\left(\\frac{NI}{S} \\times \\frac{S}{A} \\times \\frac{A}{E}\\right) \\times (1 - \\text{পরিশোধ})$$

**স্টক লভ্যাংশে দামের সমন্বয়** (অধ্যায় ৪), ভগ্নাংশে প্রকাশিত বোনাস অনুপাত $b_s$-এর জন্য:

$$P_{ex} = \\frac{P}{1 + b_s}$$

**নগদ ও স্টক একসঙ্গে** — নগদ আগে বাদ যায়, তারপর বোনাস ভাগ করে:

$$P_{ex} = \\frac{P - D}{1 + b_s}$$

**স্টক লভ্যাংশে EPS লঘুকরণ** — একই মুনাফা, বেশি শেয়ার:

$$EPS_{new} = \\frac{EPS_{old}}{1 + b_s}$$

**সিদ্ধান্ত বিধি হিসেবে টেকসইতার রায়:**

$$\\text{রায়} = \\begin{cases} \\text{UNFUNDED} & FCF \\le 0 \\\\ \\text{SUSTAINABLE} & \\text{মুনাফা আচ্ছাদন} \\ge 1.5 \\text{ এবং FCF আচ্ছাদন} \\ge 1.5 \\\\ \\text{TIGHT} & \\text{মুনাফা আচ্ছাদন} \\ge 1.0 \\text{ এবং FCF আচ্ছাদন} \\ge 1.0 \\\\ \\text{STRAINED} & \\text{অন্যথায়} \\end{cases}$$`,
    },

    manual: {
      en: `### Full sustainability assessment — GENCO

**Inputs.** Price BDT 60.00; face value BDT 10.00; EPS BDT 9.00; cash DPS BDT 5.40; shares 12.0 crore; CFO BDT 200.0 crore; capex BDT 64.0 crore; equity BDT 720.0 crore; free reserves BDT 430.0 crore.

**Step 1 — Declared rate on face value:**
$$\\frac{5.40}{10.00} \\times 100 = 54.00\\%$$

Comfortably above the 10% A-category threshold.

**Step 2 — Dividend yield:**
$$\\frac{5.40}{60.00} \\times 100 = 9.00\\%$$

**Step 3 — Payout ratio:**
$$\\frac{5.40}{9.00} = 0.6000 = 60.00\\%$$

**Step 4 — Retention ratio:**
$$b = 1 - 0.6000 = 0.4000 = 40.00\\%$$

**Step 5 — Earnings cover:**
$$\\frac{9.00}{5.40} = 1.67\\times$$

**Step 6 — Free cash flow:**
$$FCF = 200.0 - 64.0 = \\text{BDT } 136.0 \\text{ crore}$$

**Step 7 — Total cash dividend:**
$$5.40 \\times 12.0 = \\text{BDT } 64.8 \\text{ crore}$$

**Step 8 — FCF cover:**
$$\\frac{136.0}{64.8} = 2.10\\times$$

**Step 9 — FCF payout ratio:**
$$\\frac{64.8}{136.0} \\times 100 = 47.65\\%$$

**Step 10 — Cash gap:**
$$136.0 - 64.8 = +\\text{BDT } 71.2 \\text{ crore}$$

Positive. No reserve drawdown required; runway is not applicable.

**Step 11 — Net income and ROE:**
$$NI = 9.00 \\times 12.0 = \\text{BDT } 108.0 \\text{ crore}$$
$$ROE = \\frac{108.0}{720.0} = 0.1500 = 15.00\\%$$

**Step 12 — Sustainable growth:**
$$g = 15.00\\% \\times 0.4000 = 6.00\\%$$

**Step 13 — Verdict.** $FCF > 0$; earnings cover $1.67 \\ge 1.5$; FCF cover $2.10 \\ge 1.5$.

**SUSTAINABLE — covered by both profit and cash.**

---

### Full sustainability assessment — SPINTEX

**Inputs.** Price BDT 40.00; face value BDT 10.00; EPS BDT 1.20; cash DPS BDT 3.60; shares 10.0 crore; CFO BDT 22.0 crore; capex BDT 45.0 crore; equity BDT 300.0 crore; free reserves BDT 180.0 crore.

**Step 1 — Declared rate on face value:**
$$\\frac{3.60}{10.00} \\times 100 = 36.00\\%$$

Also comfortably A-category. **The category rule cannot distinguish these two companies at all.**

**Step 2 — Dividend yield:**
$$\\frac{3.60}{40.00} \\times 100 = 9.00\\%$$

Identical to GENCO. So does the screener.

**Step 3 — Payout ratio:**
$$\\frac{3.60}{1.20} = 3.0000 = 300.00\\%$$

**Step 4 — Retention ratio:**
$$b = 1 - 3.0000 = -2.0000 = -200.00\\%$$

**Step 5 — Earnings cover:**
$$\\frac{1.20}{3.60} = 0.33\\times$$

Below 1.0. **First test failed.**

**Step 6 — Free cash flow:**
$$FCF = 22.0 - 45.0 = -\\text{BDT } 23.0 \\text{ crore}$$

Negative. The business consumed cash before any distribution was contemplated.

**Step 7 — Total cash dividend:**
$$3.60 \\times 10.0 = \\text{BDT } 36.0 \\text{ crore}$$

**Step 8 — FCF cover:**
$$\\frac{-23.0}{36.0} = -0.64\\times$$

**Second test failed, and failed in the worst available way** — not "insufficient cash" but "negative cash."

**Step 9 — Cash gap:**
$$-23.0 - 36.0 = -\\text{BDT } 59.0 \\text{ crore}$$

**Step 10 — Where the 59 crore came from.** Decompose it:

| Source | BDT crore |
|---|---|
| Operating shortfall after capex | 23.0 |
| Cash dividend paid | 36.0 |
| **Total requirement** | **59.0** |

Funded by drawing cash balances and increasing borrowing. Chapter 19's equity multiplier will be higher next year, and the interest burden term lower, for a reason that has nothing to do with investment.

**Step 11 — Reserve runway:**
$$\\frac{180.0}{59.0} = 3.05 \\text{ years}$$

**Step 12 — Accounting view of the reserve.** Net income 12.0 crore against a 36.0 crore distribution:
$$180.0 - (36.0 - 12.0) = \\text{BDT } 156.0 \\text{ crore remaining}$$

Note the two numbers disagree — the accounting drain is 24.0 crore a year, the cash drain is 59.0 crore a year. **Always take the cash number.** The reserve is an accounting balance; the bank account is not.

**Step 13 — Net income and ROE:**
$$NI = 1.20 \\times 10.0 = \\text{BDT } 12.0 \\text{ crore}$$
$$ROE = \\frac{12.0}{300.0} = 0.0400 = 4.00\\%$$

**Step 14 — Sustainable growth:**
$$g = 4.00\\% \\times (-2.0000) = -8.00\\%$$

**A negative sustainable growth rate is the arithmetic of self-liquidation.** The equity base shrinks 8% a year from the dividend policy alone, before any operating deterioration is added.

**Step 15 — Verdict.** $FCF = -23.0 \\le 0$.

**UNFUNDED — no free cash flow; dividend financed by reserves or debt.**

---

### Side by side

| | GENCO | SPINTEX |
|---|---|---|
| Dividend yield | 9.00% | 9.00% |
| Declared rate on face | 54% | 36% |
| DSE category | A | A |
| Payout ratio | 60.00% | 300.00% |
| Earnings cover | 1.67× | 0.33× |
| Free cash flow (crore) | +136.0 | −23.0 |
| FCF cover | 2.10× | −0.64× |
| Cash gap (crore) | +71.2 | −59.0 |
| Reserve runway | n/a | 3.05 years |
| ROE | 15.00% | 4.00% |
| Sustainable growth | +6.00% | −8.00% |
| **Verdict** | **SUSTAINABLE** | **UNFUNDED** |

**Every figure a casual investor looks at is identical or better for SPINTEX.** Same yield. Same category. The declared rate is lower but the price is lower too, so it looks like the cheaper entry.

**Every figure that determines whether the dividend will be paid again is catastrophic.**

### The stock-dividend arithmetic, in full

SPINTEX cannot fund 36 crore. Suppose it declares a 20% stock dividend instead. A holder of 1,000 shares at BDT 40.00:

**Step 1 — Value before:**
$$1{,}000 \\times 40.00 = \\text{BDT } 40{,}000.00$$

**Step 2 — Theoretical ex-bonus price** (Chapter 4):
$$P_{ex} = \\frac{40.00}{1 + 0.20} = \\frac{40.00}{1.20} = \\text{BDT } 33.33$$

**Step 3 — Shares after:**
$$1{,}000 \\times 1.20 = 1{,}200 \\text{ shares}$$

**Step 4 — Value after:**
$$1{,}200 \\times 33.33 = \\text{BDT } 40{,}000.00$$

**Step 5 — Cash received by shareholder:** BDT 0.00.
**Step 6 — Cash paid by company:** BDT 0.00.

**Step 7 — EPS effect next year,** assuming identical profit:
$$EPS_{new} = \\frac{1.20}{1.20} = \\text{BDT } 1.00$$

EPS falls from 1.20 to 1.00 — a 16.67% decline produced entirely by the "dividend."

**Interpretation.** The company satisfied the A-category rule, generated a favourable headline, paid nothing, and permanently diluted its own EPS. The shareholder received nothing and now owns more units of a company earning less per unit.

**This is not protection. It is a transformation.** The company's obligation to distribute value became an obligation to distribute paper, and the accounting entry that made it possible was a transfer from reserves to paid-up capital — a movement between two lines on the same page.

**The discipline:** before you buy any DSE share for its yield, compute CFO − capex − total cash dividend. One subtraction, three numbers, all in the annual report. If it is negative, the dividend is a liquidation and the yield is a countdown.`,
      bn: `### সম্পূর্ণ টেকসইতা মূল্যায়ন — GENCO

**ইনপুট।** দাম ৬০.০০ টাকা; অভিহিত মূল্য ১০.০০ টাকা; EPS ৯.০০ টাকা; নগদ DPS ৫.৪০ টাকা; শেয়ার ১২.০ কোটি; CFO ২০০.০ কোটি টাকা; মূলধনী ব্যয় ৬৪.০ কোটি টাকা; ইক্যুইটি ৭২০.০ কোটি টাকা; মুক্ত সঞ্চিতি ৪৩০.০ কোটি টাকা।

**ধাপ ১ — অভিহিত মূল্যের ওপর ঘোষিত হার:**
$$\\frac{5.40}{10.00} \\times 100 = 54.00\\%$$

A-শ্রেণির ১০% সীমার অনেক ওপরে।

**ধাপ ২ — লভ্যাংশ ফলন:**
$$\\frac{5.40}{60.00} \\times 100 = 9.00\\%$$

**ধাপ ৩ — পরিশোধ অনুপাত:**
$$\\frac{5.40}{9.00} = 0.6000 = 60.00\\%$$

**ধাপ ৪ — ধারণ অনুপাত:**
$$b = 1 - 0.6000 = 0.4000 = 40.00\\%$$

**ধাপ ৫ — মুনাফা আচ্ছাদন:**
$$\\frac{9.00}{5.40} = 1.67\\times$$

**ধাপ ৬ — মুক্ত নগদ প্রবাহ:**
$$FCF = 200.0 - 64.0 = 136.0 \\text{ কোটি টাকা}$$

**ধাপ ৭ — মোট নগদ লভ্যাংশ:**
$$5.40 \\times 12.0 = 64.8 \\text{ কোটি টাকা}$$

**ধাপ ৮ — FCF আচ্ছাদন:**
$$\\frac{136.0}{64.8} = 2.10\\times$$

**ধাপ ৯ — FCF পরিশোধ অনুপাত:**
$$\\frac{64.8}{136.0} \\times 100 = 47.65\\%$$

**ধাপ ১০ — নগদ ঘাটতি:**
$$136.0 - 64.8 = +71.2 \\text{ কোটি টাকা}$$

ধনাত্মক। সঞ্চিতি ভাঙার দরকার নেই; স্থায়িত্ব প্রযোজ্য নয়।

**ধাপ ১১ — নিট মুনাফা ও ROE:**
$$NI = 9.00 \\times 12.0 = 108.0 \\text{ কোটি টাকা}$$
$$ROE = \\frac{108.0}{720.0} = 0.1500 = 15.00\\%$$

**ধাপ ১২ — টেকসই প্রবৃদ্ধি:**
$$g = 15.00\\% \\times 0.4000 = 6.00\\%$$

**ধাপ ১৩ — রায়।** $FCF > 0$; মুনাফা আচ্ছাদন $1.67 \\ge 1.5$; FCF আচ্ছাদন $2.10 \\ge 1.5$।

**SUSTAINABLE — মুনাফা ও নগদ উভয়ে আচ্ছাদিত।**

---

### সম্পূর্ণ টেকসইতা মূল্যায়ন — SPINTEX

**ইনপুট।** দাম ৪০.০০ টাকা; অভিহিত মূল্য ১০.০০ টাকা; EPS ১.২০ টাকা; নগদ DPS ৩.৬০ টাকা; শেয়ার ১০.০ কোটি; CFO ২২.০ কোটি টাকা; মূলধনী ব্যয় ৪৫.০ কোটি টাকা; ইক্যুইটি ৩০০.০ কোটি টাকা; মুক্ত সঞ্চিতি ১৮০.০ কোটি টাকা।

**ধাপ ১ — অভিহিত মূল্যের ওপর ঘোষিত হার:**
$$\\frac{3.60}{10.00} \\times 100 = 36.00\\%$$

এটিও স্বচ্ছন্দে A-শ্রেণি। **শ্রেণি বিধি এই দুটি কোম্পানিকে মোটেই আলাদা করতে পারে না।**

**ধাপ ২ — লভ্যাংশ ফলন:**
$$\\frac{3.60}{40.00} \\times 100 = 9.00\\%$$

GENCO-র অভিন্ন। স্ক্রিনারও তাই বলে।

**ধাপ ৩ — পরিশোধ অনুপাত:**
$$\\frac{3.60}{1.20} = 3.0000 = 300.00\\%$$

**ধাপ ৪ — ধারণ অনুপাত:**
$$b = 1 - 3.0000 = -2.0000 = -200.00\\%$$

**ধাপ ৫ — মুনাফা আচ্ছাদন:**
$$\\frac{1.20}{3.60} = 0.33\\times$$

১.০-এর নিচে। **প্রথম পরীক্ষায় ব্যর্থ।**

**ধাপ ৬ — মুক্ত নগদ প্রবাহ:**
$$FCF = 22.0 - 45.0 = -23.0 \\text{ কোটি টাকা}$$

ঋণাত্মক। কোনো বণ্টনের কথা ভাবার আগেই ব্যবসাটি নগদ খেয়ে ফেলেছে।

**ধাপ ৭ — মোট নগদ লভ্যাংশ:**
$$3.60 \\times 10.0 = 36.0 \\text{ কোটি টাকা}$$

**ধাপ ৮ — FCF আচ্ছাদন:**
$$\\frac{-23.0}{36.0} = -0.64\\times$$

**দ্বিতীয় পরীক্ষায় ব্যর্থ, এবং সম্ভাব্য সবচেয়ে খারাপভাবে ব্যর্থ** — "অপর্যাপ্ত নগদ" নয়, "ঋণাত্মক নগদ"।

**ধাপ ৯ — নগদ ঘাটতি:**
$$-23.0 - 36.0 = -59.0 \\text{ কোটি টাকা}$$

**ধাপ ১০ — ৫৯ কোটি কোথা থেকে এল।** বিশ্লিষ্ট করুন:

| উৎস | কোটি টাকা |
|---|---|
| মূলধনী ব্যয়ের পর পরিচালন ঘাটতি | ২৩.০ |
| পরিশোধিত নগদ লভ্যাংশ | ৩৬.০ |
| **মোট প্রয়োজন** | **৫৯.০** |

নগদ ব্যালান্স ভেঙে ও ঋণ বাড়িয়ে মেটানো হয়েছে। পরের বছর অধ্যায় ১৯-এর ইক্যুইটি গুণক বেশি হবে এবং সুদ ভার পদটি কম হবে — এমন এক কারণে যার বিনিয়োগের সঙ্গে কোনো সম্পর্ক নেই।

**ধাপ ১১ — সঞ্চিতির স্থায়িত্ব:**
$$\\frac{180.0}{59.0} = 3.05 \\text{ বছর}$$

**ধাপ ১২ — সঞ্চিতির হিসাবগত চিত্র।** ৩৬.০ কোটির বণ্টনের বিপরীতে নিট মুনাফা ১২.০ কোটি:
$$180.0 - (36.0 - 12.0) = 156.0 \\text{ কোটি টাকা অবশিষ্ট}$$

লক্ষ করুন দুটি সংখ্যা মেলে না — হিসাবগত ক্ষরণ বছরে ২৪.০ কোটি, নগদ ক্ষরণ বছরে ৫৯.০ কোটি। **সর্বদা নগদ সংখ্যাটি নিন।** সঞ্চিতি একটি হিসাবগত ব্যালান্স; ব্যাংক অ্যাকাউন্ট নয়।

**ধাপ ১৩ — নিট মুনাফা ও ROE:**
$$NI = 1.20 \\times 10.0 = 12.0 \\text{ কোটি টাকা}$$
$$ROE = \\frac{12.0}{300.0} = 0.0400 = 4.00\\%$$

**ধাপ ১৪ — টেকসই প্রবৃদ্ধি:**
$$g = 4.00\\% \\times (-2.0000) = -8.00\\%$$

**ঋণাত্মক টেকসই প্রবৃদ্ধির হার হলো স্ব-অবসায়নের পাটিগণিত।** কোনো পরিচালন অবনতি যোগ করার আগেই কেবল লভ্যাংশ নীতির কারণেই ইক্যুইটিভিত্তি বছরে ৮% সংকুচিত হয়।

**ধাপ ১৫ — রায়।** $FCF = -23.0 \\le 0$।

**UNFUNDED — কোনো মুক্ত নগদ প্রবাহ নেই; লভ্যাংশ সঞ্চিতি বা ঋণে অর্থায়িত।**

---

### পাশাপাশি

| | GENCO | SPINTEX |
|---|---|---|
| লভ্যাংশ ফলন | ৯.০০% | ৯.০০% |
| অভিহিত মূল্যে ঘোষিত হার | ৫৪% | ৩৬% |
| ডিএসই শ্রেণি | A | A |
| পরিশোধ অনুপাত | ৬০.০০% | ৩০০.০০% |
| মুনাফা আচ্ছাদন | ১.৬৭× | ০.৩৩× |
| মুক্ত নগদ প্রবাহ (কোটি) | +১৩৬.০ | −২৩.০ |
| FCF আচ্ছাদন | ২.১০× | −০.৬৪× |
| নগদ ঘাটতি (কোটি) | +৭১.২ | −৫৯.০ |
| সঞ্চিতির স্থায়িত্ব | প্রযোজ্য নয় | ৩.০৫ বছর |
| ROE | ১৫.০০% | ৪.০০% |
| টেকসই প্রবৃদ্ধি | +৬.০০% | −৮.০০% |
| **রায়** | **SUSTAINABLE** | **UNFUNDED** |

**একজন সাধারণ বিনিয়োগকারী যে প্রতিটি সংখ্যা দেখেন, SPINTEX-এর ক্ষেত্রে তা অভিন্ন বা ভালো।** একই ফলন। একই শ্রেণি। ঘোষিত হার কম, কিন্তু দামও কম, তাই একে সস্তা প্রবেশপথ মনে হয়।

**লভ্যাংশটি আবার দেওয়া হবে কি না তা নির্ধারণকারী প্রতিটি সংখ্যা বিপর্যয়কর।**

### স্টক-লভ্যাংশের পূর্ণ পাটিগণিত

SPINTEX ৩৬ কোটির তহবিল জোগাতে পারে না। ধরুন সে বদলে ২০% স্টক লভ্যাংশ ঘোষণা করল। ৪০.০০ টাকা দরে ১,০০০ শেয়ারের একজন ধারক:

**ধাপ ১ — আগের মূল্য:**
$$1{,}000 \\times 40.00 = 40{,}000.00 \\text{ টাকা}$$

**ধাপ ২ — তাত্ত্বিক ex-বোনাস দাম** (অধ্যায় ৪):
$$P_{ex} = \\frac{40.00}{1 + 0.20} = \\frac{40.00}{1.20} = 33.33 \\text{ টাকা}$$

**ধাপ ৩ — পরের শেয়ার:**
$$1{,}000 \\times 1.20 = 1{,}200 \\text{ শেয়ার}$$

**ধাপ ৪ — পরের মূল্য:**
$$1{,}200 \\times 33.33 = 40{,}000.00 \\text{ টাকা}$$

**ধাপ ৫ — শেয়ারহোল্ডারের প্রাপ্ত নগদ:** ০.০০ টাকা।
**ধাপ ৬ — কোম্পানির পরিশোধিত নগদ:** ০.০০ টাকা।

**ধাপ ৭ — পরের বছর EPS-এ প্রভাব,** মুনাফা অভিন্ন ধরে:
$$EPS_{new} = \\frac{1.20}{1.20} = 1.00 \\text{ টাকা}$$

EPS ১.২০ থেকে ১.০০-এ নামে — ১৬.৬৭% পতন, সম্পূর্ণভাবে "লভ্যাংশ"-এর ফলে।

**ব্যাখ্যা।** কোম্পানিটি A-শ্রেণির বিধি পূরণ করল, অনুকূল শিরোনাম তৈরি করল, কিছুই দিল না, এবং স্থায়ীভাবে নিজের EPS লঘু করল। শেয়ারহোল্ডার কিছুই পেলেন না এবং এখন এমন এক কোম্পানির বেশি একক তাঁর, যা এককপ্রতি কম আয় করে।

**এটি সুরক্ষা নয়। এটি একটি রূপান্তর।** মূল্য বণ্টনের বাধ্যবাধকতা হয়ে গেল কাগজ বণ্টনের বাধ্যবাধকতা, এবং যে হিসাব-এন্ট্রি এটি সম্ভব করল তা হলো সঞ্চিতি থেকে পরিশোধিত মূলধনে স্থানান্তর — একই পাতার দুটি সারির মধ্যে একটি নড়াচড়া।

**শৃঙ্খলা:** ফলনের জন্য কোনো ডিএসই শেয়ার কেনার আগে গণনা করুন CFO − মূলধনী ব্যয় − মোট নগদ লভ্যাংশ। একটি বিয়োগ, তিনটি সংখ্যা, সবগুলোই বার্ষিক প্রতিবেদনে। ঋণাত্মক হলে লভ্যাংশটি একটি অবসায়ন এবং ফলনটি একটি কাউন্টডাউন।`,
    },

    excel: {
      en: `\`\`\`
DIVIDEND SUSTAINABILITY SCORER

       A                                B          C
 2                                   GENCO     SPINTEX
 3   Market Price (BDT)                 60          40
 4   Face Value (BDT)                   10          10
 5   EPS (BDT)                           9         1.2
 6   Cash DPS (BDT)                    5.4         3.6
 7   Shares Outstanding (crore)         12          10
 8   CFO (BDT crore)                   200          22
 9   Capex (BDT crore)                  64          45
10   Shareholders Equity (crore)       720         300
11   Free Reserves (crore)             430         180

13   — HEADLINE —
14   Declared Rate on Face (%)   =B6/B4*100   =C6/C4*100
15   Dividend Yield (%)          =B6/B3*100   =C6/C3*100
16   Payout Ratio (%)            =B6/B5*100   =C6/C5*100
17   Retention Ratio (%)         =100-B16     =100-C16

19   — COVER FROM EARNINGS —
20   Earnings Cover (x)          =B5/B6       =C5/C6

22   — COVER FROM CASH —
23   Free Cash Flow (crore)      =B8-B9       =C8-C9
24   Total Cash Dividend (crore) =B6*B7       =C6*C7
25   FCF Cover (x)               =B23/B24     =C23/C24
26   FCF Payout Ratio (%)        =B24/B23*100 =C24/C23*100
27   Cash Gap (crore)            =B23-B24     =C23-C24
28   Reserve Runway (years)      =IF(B27>=0,"no gap",B11/-B27)

30   — GROWTH ARITHMETIC —
31   Net Income (crore)          =B5*B7       =C5*C7
32   ROE (%)                     =B31/B10*100 =C31/C10*100
33   Sustainable Growth (%)      =B32*B17/100 =C32*C17/100

35   VERDICT
     =IF(B23<=0,"UNFUNDED",
        IF(AND(B20>=1.5,B25>=1.5),"SUSTAINABLE",
        IF(AND(B20>=1,B25>=1),"TIGHT","STRAINED")))

STOCK DIVIDEND — CASH THAT NEVER LEAVES
39   Pre-record Price (BDT)             40
40   Stock Dividend (%)                 20
41   Theoretical Ex-Bonus Price   =B39/(1+B40/100)
42   Shares Held Before               1000
43   Shares Held After            =B42*(1+B40/100)
44   Value Before (BDT)           =B42*B39
45   Value After (BDT)            =B43*B41
46   Cash to Shareholder (BDT)           0
47   Cash out of Company (BDT)           0
\`\`\`

**Row 23 is the row that decides.** Everything above it is available on a broker's app; nothing above it can tell the two companies apart. Rows 3 through 20 give GENCO and SPINTEX identical yields, identical A-category status, and a *lower* declared rate for the healthier company.

**Row 27 is the number to write down.** A negative cash gap means the dividend was funded by something that will run out. Row 28 tells you roughly when.

**Rows 44 and 45 exist to be stared at.** They are equal. They will always be equal. Any stock dividend, any ratio, any price — the two cells match, because a bonus issue moves value nowhere. If a colleague tells you a company "gave a good bonus," point at these two cells.

**To turn this into a screen:** replicate columns B and C across every A-category company in a sector, sort ascending on row 25 (FCF cover), and read from the top. The names with FCF cover below 1.0 that are still declaring dividends are the ones where the next annual report will contain a surprise.

**One adjustment for Bangladeshi accounts.** Capex in row 9 should be *maintenance* capex where the annual report distinguishes it from expansion capex. Most DSE companies do not distinguish, so use total additions to PPE from the fixed asset note, and be aware that this makes the FCF test conservative for a genuinely expanding company. Conservative is the correct direction for this test.`,
      bn: `\`\`\`
লভ্যাংশ টেকসইতা স্কোরার

       A                                B          C
 2                                   GENCO     SPINTEX
 3   বাজারমূল্য (টাকা)                  60          40
 4   অভিহিত মূল্য (টাকা)                10          10
 5   EPS (টাকা)                          9         1.2
 6   নগদ DPS (টাকা)                    5.4         3.6
 7   বকেয়া শেয়ার (কোটি)                12          10
 8   CFO (কোটি টাকা)                   200          22
 9   মূলধনী ব্যয় (কোটি টাকা)            64          45
10   শেয়ারহোল্ডার ইক্যুইটি (কোটি)      720         300
11   মুক্ত সঞ্চিতি (কোটি)               430         180

13   — শিরোনাম —
14   অভিহিত মূল্যে ঘোষিত হার (%)  =B6/B4*100   =C6/C4*100
15   লভ্যাংশ ফলন (%)             =B6/B3*100   =C6/C3*100
16   পরিশোধ অনুপাত (%)           =B6/B5*100   =C6/C5*100
17   ধারণ অনুপাত (%)             =100-B16     =100-C16

19   — মুনাফা থেকে আচ্ছাদন —
20   মুনাফা আচ্ছাদন (x)          =B5/B6       =C5/C6

22   — নগদ থেকে আচ্ছাদন —
23   মুক্ত নগদ প্রবাহ (কোটি)     =B8-B9       =C8-C9
24   মোট নগদ লভ্যাংশ (কোটি)      =B6*B7       =C6*C7
25   FCF আচ্ছাদন (x)             =B23/B24     =C23/C24
26   FCF পরিশোধ অনুপাত (%)       =B24/B23*100 =C24/C23*100
27   নগদ ঘাটতি (কোটি)            =B23-B24     =C23-C24
28   সঞ্চিতির স্থায়িত্ব (বছর)     =IF(B27>=0,"no gap",B11/-B27)

30   — প্রবৃদ্ধির পাটিগণিত —
31   নিট মুনাফা (কোটি)           =B5*B7       =C5*C7
32   ROE (%)                     =B31/B10*100 =C31/C10*100
33   টেকসই প্রবৃদ্ধি (%)          =B32*B17/100 =C32*C17/100

35   রায়
     =IF(B23<=0,"UNFUNDED",
        IF(AND(B20>=1.5,B25>=1.5),"SUSTAINABLE",
        IF(AND(B20>=1,B25>=1),"TIGHT","STRAINED")))

স্টক লভ্যাংশ — যে নগদ কখনো বেরোয় না
39   রেকর্ড-পূর্ব দাম (টাকা)            40
40   স্টক লভ্যাংশ (%)                   20
41   তাত্ত্বিক ex-বোনাস দাম       =B39/(1+B40/100)
42   আগে ধারণকৃত শেয়ার               1000
43   পরে ধারণকৃত শেয়ার           =B42*(1+B40/100)
44   আগের মূল্য (টাকা)            =B42*B39
45   পরের মূল্য (টাকা)            =B43*B41
46   শেয়ারহোল্ডারের নগদ (টাকা)          0
47   কোম্পানি থেকে নগদ (টাকা)            0
\`\`\`

**সারি ২৩-ই সিদ্ধান্ত নেয়।** এর ওপরের সবকিছু ব্রোকারের অ্যাপেই পাওয়া যায়; এর ওপরের কিছুই দুটি কোম্পানিকে আলাদা করতে পারে না। সারি ৩ থেকে ২০ GENCO ও SPINTEX-কে অভিন্ন ফলন, অভিন্ন A-শ্রেণি মর্যাদা এবং সুস্থ কোম্পানিটির জন্য *কম* ঘোষিত হার দেখায়।

**সারি ২৭-এর সংখ্যাটি লিখে রাখুন।** ঋণাত্মক নগদ ঘাটতি মানে লভ্যাংশ এমন কিছু দিয়ে অর্থায়িত যা ফুরিয়ে যাবে। সারি ২৮ মোটামুটি কখন তা বলে।

**সারি ৪৪ ও ৪৫ আছে তাকিয়ে থাকার জন্য।** এরা সমান। এরা সর্বদাই সমান থাকবে। যেকোনো স্টক লভ্যাংশ, যেকোনো অনুপাত, যেকোনো দাম — ঘর দুটি মেলে, কারণ বোনাস ইস্যু মূল্যকে কোথাও সরায় না। কোনো সহকর্মী বললে যে একটি কোম্পানি "ভালো বোনাস দিয়েছে", এই দুটি ঘর দেখিয়ে দিন।

**একে স্ক্রিনে পরিণত করতে:** একটি খাতের প্রতিটি A-শ্রেণির কোম্পানির জন্য কলাম B ও C প্রতিলিপি করুন, সারি ২৫ (FCF আচ্ছাদন) অনুযায়ী আরোহী ক্রমে সাজান, এবং ওপর থেকে পড়ুন। যেসব নামের FCF আচ্ছাদন ১.০-এর নিচে অথচ এখনো লভ্যাংশ ঘোষণা করছে, তাদের পরবর্তী বার্ষিক প্রতিবেদনেই চমক থাকবে।

**বাংলাদেশি হিসাবের জন্য একটি সমন্বয়।** সারি ৯-এর মূলধনী ব্যয় হওয়া উচিত *রক্ষণাবেক্ষণ* মূলধনী ব্যয়, যেখানে বার্ষিক প্রতিবেদন একে সম্প্রসারণ মূলধনী ব্যয় থেকে আলাদা করে। বেশিরভাগ ডিএসই কোম্পানি আলাদা করে না, তাই স্থায়ী সম্পদ নোট থেকে PPE-তে মোট সংযোজন ব্যবহার করুন, এবং জেনে রাখুন এটি প্রকৃতপক্ষে সম্প্রসারণশীল কোম্পানির জন্য FCF পরীক্ষাকে রক্ষণশীল করে তোলে। এই পরীক্ষার জন্য রক্ষণশীলতাই সঠিক দিক।`,
    },

    python: {
      en: `\`\`\`python
"""
Chapter 20 - Dividend sustainability: earnings cover and cash cover.
Educational. Pure standard library.
"""
from dataclasses import dataclass
from typing import List


@dataclass
class Dividend:
    """One company's declared dividend, tested against profit AND cash."""
    name: str
    price: float          # BDT per share
    face_value: float     # BDT per share
    eps: float            # BDT per share
    dps_cash: float       # BDT per share, cash only
    stock_div_pct: float  # declared stock dividend, % of holding
    shares_cr: float      # crore shares outstanding
    cfo_cr: float         # cash flow from operations, BDT crore
    capex_cr: float       # capital expenditure, BDT crore
    equity_cr: float      # shareholders' equity, BDT crore
    reserves_cr: float    # retained earnings / free reserves, BDT crore

    # --- headline ratios ---
    @property
    def dividend_yield(self) -> float:
        return self.dps_cash / self.price

    @property
    def declared_rate_on_face(self) -> float:
        """DSE declares dividend as a % of face value, not of price."""
        return self.dps_cash / self.face_value

    @property
    def payout_ratio(self) -> float:
        return self.dps_cash / self.eps

    @property
    def retention_ratio(self) -> float:
        return 1.0 - self.payout_ratio

    # --- cover from earnings ---
    @property
    def earnings_cover(self) -> float:
        return self.eps / self.dps_cash

    # --- cover from cash ---
    @property
    def net_income_cr(self) -> float:
        return self.eps * self.shares_cr

    @property
    def total_cash_dividend_cr(self) -> float:
        return self.dps_cash * self.shares_cr

    @property
    def fcf_cr(self) -> float:
        return self.cfo_cr - self.capex_cr

    @property
    def fcf_cover(self) -> float:
        return self.fcf_cr / self.total_cash_dividend_cr

    @property
    def fcf_payout(self) -> float:
        return self.total_cash_dividend_cr / self.fcf_cr

    @property
    def cash_gap_cr(self) -> float:
        """Negative means the dividend must be funded from reserves or debt."""
        return self.fcf_cr - self.total_cash_dividend_cr

    # --- growth arithmetic ---
    @property
    def roe(self) -> float:
        return self.net_income_cr / self.equity_cr

    @property
    def sustainable_growth(self) -> float:
        return self.roe * self.retention_ratio

    @property
    def reserve_years(self) -> float:
        """Years the reserve can absorb the annual cash gap. inf if none."""
        if self.cash_gap_cr >= 0:
            return float("inf")
        return self.reserves_cr / (-self.cash_gap_cr)

    # --- verdict ---
    @property
    def verdict(self) -> str:
        if self.fcf_cr <= 0:
            return "UNFUNDED - no free cash flow; dividend financed by reserves or debt"
        if self.earnings_cover >= 1.5 and self.fcf_cover >= 1.5:
            return "SUSTAINABLE - covered by both profit and cash"
        if self.earnings_cover >= 1.0 and self.fcf_cover >= 1.0:
            return "TIGHT - covered, but no margin for a bad year"
        return "STRAINED - one of the two covers is below 1.0x"


def report(d: Dividend) -> None:
    print(f"--- {d.name} ---")
    print(f"Price / EPS / cash DPS      : {d.price:.2f} / {d.eps:.2f} / {d.dps_cash:.2f}")
    print(f"Declared rate on face value : {d.declared_rate_on_face:.0%}"
          f"   (stock dividend {d.stock_div_pct:.0f}%)")
    print(f"Dividend yield              : {d.dividend_yield:.2%}")
    print(f"Payout ratio                : {d.payout_ratio:.2%}")
    print(f"Retention ratio             : {d.retention_ratio:.2%}")
    print(f"Earnings cover              : {d.earnings_cover:.2f}x")
    print(f"CFO / Capex / FCF (cr)      : {d.cfo_cr:.1f} / {d.capex_cr:.1f} / {d.fcf_cr:.1f}")
    print(f"Total cash dividend (cr)    : {d.total_cash_dividend_cr:.1f}")
    print(f"FCF cover                   : {d.fcf_cover:.2f}x")
    print(f"Cash gap (cr)               : {d.cash_gap_cr:+.1f}")
    print(f"ROE                         : {d.roe:.2%}")
    print(f"Sustainable growth (ROE*b)  : {d.sustainable_growth:.2%}")
    ry = d.reserve_years
    print(f"Reserve runway (years)      : {'no gap' if ry == float('inf') else f'{ry:.1f}'}")
    print(f"VERDICT                     : {d.verdict}")
    print()


if __name__ == "__main__":
    book: List[Dividend] = [
        Dividend(
            name="GENCO  (fuel & power archetype)",
            price=60.0, face_value=10.0, eps=9.00, dps_cash=5.40, stock_div_pct=0.0,
            shares_cr=12.0, cfo_cr=200.0, capex_cr=64.0,
            equity_cr=720.0, reserves_cr=430.0,
        ),
        Dividend(
            name="SPINTEX (textile archetype)",
            price=40.0, face_value=10.0, eps=1.20, dps_cash=3.60, stock_div_pct=0.0,
            shares_cr=10.0, cfo_cr=22.0, capex_cr=45.0,
            equity_cr=300.0, reserves_cr=180.0,
        ),
    ]

    print("=== TWO COMPANIES, ONE YIELD ===")
    print(f"{'COMPANY':<34}{'Yield':>8}{'EarnCov':>9}{'FCFCov':>9}")
    for d in book:
        print(f"{d.name:<34}{d.dividend_yield:>8.2%}"
              f"{d.earnings_cover:>9.2f}{d.fcf_cover:>9.2f}")
    print()

    print("=== FULL SUSTAINABILITY ASSESSMENT ===")
    for d in book:
        report(d)

    print("=== STOCK DIVIDEND: THE CASH THAT NEVER LEAVES ===")
    pre_price, bonus = 40.0, 0.20
    ex_price = pre_price / (1 + bonus)
    held = 1000
    print(f"Pre-record price            : BDT {pre_price:.2f}")
    print(f"Stock dividend declared     : {bonus:.0%}")
    print(f"Theoretical ex-bonus price  : BDT {ex_price:.2f}")
    print(f"Holding before              : {held} shares worth BDT {held*pre_price:,.2f}")
    print(f"Holding after               : {int(held*(1+bonus))} shares worth "
          f"BDT {held*(1+bonus)*ex_price:,.2f}")
    print(f"Cash received by shareholder: BDT 0.00")
    print(f"Cash paid by company        : BDT 0.00")
\`\`\`

**Expected output:**

\`\`\`
=== TWO COMPANIES, ONE YIELD ===
COMPANY                              Yield  EarnCov   FCFCov
GENCO  (fuel & power archetype)      9.00%     1.67     2.10
SPINTEX (textile archetype)          9.00%     0.33    -0.64

=== FULL SUSTAINABILITY ASSESSMENT ===
--- GENCO  (fuel & power archetype) ---
Price / EPS / cash DPS      : 60.00 / 9.00 / 5.40
Declared rate on face value : 54%   (stock dividend 0%)
Dividend yield              : 9.00%
Payout ratio                : 60.00%
Retention ratio             : 40.00%
Earnings cover              : 1.67x
CFO / Capex / FCF (cr)      : 200.0 / 64.0 / 136.0
Total cash dividend (cr)    : 64.8
FCF cover                   : 2.10x
Cash gap (cr)               : +71.2
ROE                         : 15.00%
Sustainable growth (ROE*b)  : 6.00%
Reserve runway (years)      : no gap
VERDICT                     : SUSTAINABLE - covered by both profit and cash

--- SPINTEX (textile archetype) ---
Price / EPS / cash DPS      : 40.00 / 1.20 / 3.60
Declared rate on face value : 36%   (stock dividend 0%)
Dividend yield              : 9.00%
Payout ratio                : 300.00%
Retention ratio             : -200.00%
Earnings cover              : 0.33x
CFO / Capex / FCF (cr)      : 22.0 / 45.0 / -23.0
Total cash dividend (cr)    : 36.0
FCF cover                   : -0.64x
Cash gap (cr)               : -59.0
ROE                         : 4.00%
Sustainable growth (ROE*b)  : -8.00%
Reserve runway (years)      : 3.1
VERDICT                     : UNFUNDED - no free cash flow; dividend financed by reserves or debt

=== STOCK DIVIDEND: THE CASH THAT NEVER LEAVES ===
Pre-record price            : BDT 40.00
Stock dividend declared     : 20%
Theoretical ex-bonus price  : BDT 33.33
Holding before              : 1000 shares worth BDT 40,000.00
Holding after               : 1200 shares worth BDT 40,000.00
Cash received by shareholder: BDT 0.00
Cash paid by company        : BDT 0.00
\`\`\`

**The first block is the whole argument.** Two identical yields. One earnings cover of 1.67 and one of 0.33. One FCF cover of 2.10 and one that is *negative* — a number that should not exist alongside a declared dividend, and does, routinely, on this exchange.

**\`reserve_years\` is deliberately computed from the cash gap, not the accounting gap.** SPINTEX's reserve looks like it can absorb the payment for 7.5 years if you use net income against dividend (180 ÷ 24). Using cash it is 3.1 years. **The bank account is the constraint, not the reserve line.**

**To extend this:** instantiate one \`Dividend\` per A-category company in a sector from the latest annual report, sort by \`fcf_cover\` ascending, and print everything below 1.0. That list is short, it is free to build, and it will contain names currently being recommended to retail investors on the strength of their yield.`,
      bn: `\`\`\`python
"""
অধ্যায় ২০ — লভ্যাংশের টেকসইতা: মুনাফা আচ্ছাদন ও নগদ আচ্ছাদন।
শিক্ষামূলক। কেবল স্ট্যান্ডার্ড লাইব্রেরি।
"""
from dataclasses import dataclass
from typing import List


@dataclass
class Dividend:
    """একটি কোম্পানির ঘোষিত লভ্যাংশ, মুনাফা ও নগদ উভয়ের বিপরীতে পরীক্ষিত।"""
    name: str
    price: float          # শেয়ারপ্রতি টাকা
    face_value: float     # শেয়ারপ্রতি টাকা
    eps: float            # শেয়ারপ্রতি টাকা
    dps_cash: float       # শেয়ারপ্রতি টাকা, কেবল নগদ
    stock_div_pct: float  # ঘোষিত স্টক লভ্যাংশ, ধারণের %
    shares_cr: float      # কোটি বকেয়া শেয়ার
    cfo_cr: float         # পরিচালনা থেকে নগদ প্রবাহ, কোটি টাকা
    capex_cr: float       # মূলধনী ব্যয়, কোটি টাকা
    equity_cr: float      # শেয়ারহোল্ডারদের ইক্যুইটি, কোটি টাকা
    reserves_cr: float    # সংরক্ষিত মুনাফা / মুক্ত সঞ্চিতি, কোটি টাকা

    # --- শিরোনাম অনুপাত ---
    @property
    def dividend_yield(self) -> float:
        return self.dps_cash / self.price

    @property
    def declared_rate_on_face(self) -> float:
        """ডিএসই লভ্যাংশ ঘোষণা করে অভিহিত মূল্যের %-এ, দামের নয়।"""
        return self.dps_cash / self.face_value

    @property
    def payout_ratio(self) -> float:
        return self.dps_cash / self.eps

    @property
    def retention_ratio(self) -> float:
        return 1.0 - self.payout_ratio

    # --- মুনাফা থেকে আচ্ছাদন ---
    @property
    def earnings_cover(self) -> float:
        return self.eps / self.dps_cash

    # --- নগদ থেকে আচ্ছাদন ---
    @property
    def net_income_cr(self) -> float:
        return self.eps * self.shares_cr

    @property
    def total_cash_dividend_cr(self) -> float:
        return self.dps_cash * self.shares_cr

    @property
    def fcf_cr(self) -> float:
        return self.cfo_cr - self.capex_cr

    @property
    def fcf_cover(self) -> float:
        return self.fcf_cr / self.total_cash_dividend_cr

    @property
    def fcf_payout(self) -> float:
        return self.total_cash_dividend_cr / self.fcf_cr

    @property
    def cash_gap_cr(self) -> float:
        """ঋণাত্মক মানে লভ্যাংশ সঞ্চিতি বা ঋণ থেকে অর্থায়ন করতে হবে।"""
        return self.fcf_cr - self.total_cash_dividend_cr

    # --- প্রবৃদ্ধির পাটিগণিত ---
    @property
    def roe(self) -> float:
        return self.net_income_cr / self.equity_cr

    @property
    def sustainable_growth(self) -> float:
        return self.roe * self.retention_ratio

    @property
    def reserve_years(self) -> float:
        """সঞ্চিতি বার্ষিক নগদ ঘাটতি কত বছর শুষতে পারে। ঘাটতি না থাকলে inf।"""
        if self.cash_gap_cr >= 0:
            return float("inf")
        return self.reserves_cr / (-self.cash_gap_cr)

    # --- রায় ---
    @property
    def verdict(self) -> str:
        if self.fcf_cr <= 0:
            return "UNFUNDED - no free cash flow; dividend financed by reserves or debt"
        if self.earnings_cover >= 1.5 and self.fcf_cover >= 1.5:
            return "SUSTAINABLE - covered by both profit and cash"
        if self.earnings_cover >= 1.0 and self.fcf_cover >= 1.0:
            return "TIGHT - covered, but no margin for a bad year"
        return "STRAINED - one of the two covers is below 1.0x"


def report(d: Dividend) -> None:
    print(f"--- {d.name} ---")
    print(f"Price / EPS / cash DPS      : {d.price:.2f} / {d.eps:.2f} / {d.dps_cash:.2f}")
    print(f"Declared rate on face value : {d.declared_rate_on_face:.0%}"
          f"   (stock dividend {d.stock_div_pct:.0f}%)")
    print(f"Dividend yield              : {d.dividend_yield:.2%}")
    print(f"Payout ratio                : {d.payout_ratio:.2%}")
    print(f"Retention ratio             : {d.retention_ratio:.2%}")
    print(f"Earnings cover              : {d.earnings_cover:.2f}x")
    print(f"CFO / Capex / FCF (cr)      : {d.cfo_cr:.1f} / {d.capex_cr:.1f} / {d.fcf_cr:.1f}")
    print(f"Total cash dividend (cr)    : {d.total_cash_dividend_cr:.1f}")
    print(f"FCF cover                   : {d.fcf_cover:.2f}x")
    print(f"Cash gap (cr)               : {d.cash_gap_cr:+.1f}")
    print(f"ROE                         : {d.roe:.2%}")
    print(f"Sustainable growth (ROE*b)  : {d.sustainable_growth:.2%}")
    ry = d.reserve_years
    print(f"Reserve runway (years)      : {'no gap' if ry == float('inf') else f'{ry:.1f}'}")
    print(f"VERDICT                     : {d.verdict}")
    print()


if __name__ == "__main__":
    book: List[Dividend] = [
        Dividend(
            name="GENCO  (fuel & power archetype)",
            price=60.0, face_value=10.0, eps=9.00, dps_cash=5.40, stock_div_pct=0.0,
            shares_cr=12.0, cfo_cr=200.0, capex_cr=64.0,
            equity_cr=720.0, reserves_cr=430.0,
        ),
        Dividend(
            name="SPINTEX (textile archetype)",
            price=40.0, face_value=10.0, eps=1.20, dps_cash=3.60, stock_div_pct=0.0,
            shares_cr=10.0, cfo_cr=22.0, capex_cr=45.0,
            equity_cr=300.0, reserves_cr=180.0,
        ),
    ]

    print("=== TWO COMPANIES, ONE YIELD ===")
    print(f"{'COMPANY':<34}{'Yield':>8}{'EarnCov':>9}{'FCFCov':>9}")
    for d in book:
        print(f"{d.name:<34}{d.dividend_yield:>8.2%}"
              f"{d.earnings_cover:>9.2f}{d.fcf_cover:>9.2f}")
    print()

    print("=== FULL SUSTAINABILITY ASSESSMENT ===")
    for d in book:
        report(d)

    print("=== STOCK DIVIDEND: THE CASH THAT NEVER LEAVES ===")
    pre_price, bonus = 40.0, 0.20
    ex_price = pre_price / (1 + bonus)
    held = 1000
    print(f"Pre-record price            : BDT {pre_price:.2f}")
    print(f"Stock dividend declared     : {bonus:.0%}")
    print(f"Theoretical ex-bonus price  : BDT {ex_price:.2f}")
    print(f"Holding before              : {held} shares worth BDT {held*pre_price:,.2f}")
    print(f"Holding after               : {int(held*(1+bonus))} shares worth "
          f"BDT {held*(1+bonus)*ex_price:,.2f}")
    print(f"Cash received by shareholder: BDT 0.00")
    print(f"Cash paid by company        : BDT 0.00")
\`\`\`

**প্রত্যাশিত ফলাফল:**

\`\`\`
=== TWO COMPANIES, ONE YIELD ===
COMPANY                              Yield  EarnCov   FCFCov
GENCO  (fuel & power archetype)      9.00%     1.67     2.10
SPINTEX (textile archetype)          9.00%     0.33    -0.64

=== FULL SUSTAINABILITY ASSESSMENT ===
--- GENCO  (fuel & power archetype) ---
Price / EPS / cash DPS      : 60.00 / 9.00 / 5.40
Declared rate on face value : 54%   (stock dividend 0%)
Dividend yield              : 9.00%
Payout ratio                : 60.00%
Retention ratio             : 40.00%
Earnings cover              : 1.67x
CFO / Capex / FCF (cr)      : 200.0 / 64.0 / 136.0
Total cash dividend (cr)    : 64.8
FCF cover                   : 2.10x
Cash gap (cr)               : +71.2
ROE                         : 15.00%
Sustainable growth (ROE*b)  : 6.00%
Reserve runway (years)      : no gap
VERDICT                     : SUSTAINABLE - covered by both profit and cash

--- SPINTEX (textile archetype) ---
Price / EPS / cash DPS      : 40.00 / 1.20 / 3.60
Declared rate on face value : 36%   (stock dividend 0%)
Dividend yield              : 9.00%
Payout ratio                : 300.00%
Retention ratio             : -200.00%
Earnings cover              : 0.33x
CFO / Capex / FCF (cr)      : 22.0 / 45.0 / -23.0
Total cash dividend (cr)    : 36.0
FCF cover                   : -0.64x
Cash gap (cr)               : -59.0
ROE                         : 4.00%
Sustainable growth (ROE*b)  : -8.00%
Reserve runway (years)      : 3.1
VERDICT                     : UNFUNDED - no free cash flow; dividend financed by reserves or debt

=== STOCK DIVIDEND: THE CASH THAT NEVER LEAVES ===
Pre-record price            : BDT 40.00
Stock dividend declared     : 20%
Theoretical ex-bonus price  : BDT 33.33
Holding before              : 1000 shares worth BDT 40,000.00
Holding after               : 1200 shares worth BDT 40,000.00
Cash received by shareholder: BDT 0.00
Cash paid by company        : BDT 0.00
\`\`\`

**প্রথম ব্লকটিই সম্পূর্ণ যুক্তি।** দুটি অভিন্ন ফলন। একটির মুনাফা আচ্ছাদন ১.৬৭, অন্যটির ০.৩৩। একটির FCF আচ্ছাদন ২.১০, অন্যটির *ঋণাত্মক* — এমন একটি সংখ্যা যা ঘোষিত লভ্যাংশের পাশে থাকা উচিত নয়, অথচ এই এক্সচেঞ্জে নিয়মিতই থাকে।

**\`reserve_years\` ইচ্ছাকৃতভাবে হিসাবগত ঘাটতি নয়, নগদ ঘাটতি থেকে গণিত।** নিট মুনাফার বিপরীতে লভ্যাংশ ধরলে (১৮০ ÷ ২৪) SPINTEX-এর সঞ্চিতি ৭.৫ বছর পরিশোধ শুষতে পারবে বলে মনে হয়। নগদে হিসাব করলে তা ৩.১ বছর। **সীমাবদ্ধতা ব্যাংক অ্যাকাউন্ট, সঞ্চিতির সারি নয়।**

**একে সম্প্রসারণ করতে:** সর্বশেষ বার্ষিক প্রতিবেদন থেকে একটি খাতের প্রতিটি A-শ্রেণির কোম্পানির জন্য একটি করে \`Dividend\` তৈরি করুন, \`fcf_cover\` অনুযায়ী আরোহী ক্রমে সাজান, এবং ১.০-এর নিচের সব ছাপুন। তালিকাটি ছোট, বানাতে খরচ নেই, এবং তাতে এমন নাম থাকবে যেগুলো এই মুহূর্তে ফলনের জোরে খুচরা বিনিয়োগকারীদের সুপারিশ করা হচ্ছে।`,
    },

    mistakes: {
      en: `1. **Buying for yield without computing FCF cover.** This is the central error of the chapter and probably the single most expensive habit among yield-seeking DSE retail investors. Two 9% yields can be a 2.10× cover and a −0.64× cover.
2. **Treating a stock dividend as income.** It is not. Cash out of the company: zero. Cash to you: zero. Wealth change: zero. Future EPS: diluted. Chapter 4 gave you the adjustment formula; use it before you celebrate.
3. **Confusing the declared rate with the yield.** A "54% dividend" means 54% of BDT 10 face value, i.e. BDT 5.40. On a BDT 60 share that is a 9% yield. Bangladeshi headlines quote the face-value rate almost exclusively, and it is not the number you are buying.
4. **Assuming a rising yield is a better entry.** Yield rises when price falls. A yield that doubled in six months usually reflects a market that has decided the dividend is finished. Verify with the cover tests before treating the fall as an opportunity.
5. **Using payout ratio alone.** Earnings are accrual; dividends are cash. Chapter 12 and Chapter 13 established the gap. A 60% payout ratio on earnings that are 70% receivables is not covered by anything.
6. **Ignoring the A-category incentive.** A company declaring exactly 10% of face value, in stock, every year, is telling you it is managing a classification, not distributing a surplus. That is a signal, and it is free.
7. **Reading dividend-from-reserves as prudent smoothing without checking the cash.** It can be either. The distinction is whether FCF is positive. A cyclical business smoothing a weak year has positive FCF and a reserve; a dying business has neither.
8. **Forgetting the tax and settlement mechanics.** Cash dividends to individual shareholders are subject to withholding at source under the Income Tax Act; the yield you compute gross is not the yield you receive. Verify the current rate and whether the company applies the lower rate for BO accounts with e-TIN.
9. **Buying just before the record date to "capture" the dividend.** Chapter 4 established that the price adjusts by the dividend on the ex-date. You capture nothing. You convert price into cash, and on the DSE you also pay the spread twice and land in the spot market's compressed settlement.`,
      bn: `১. **FCF আচ্ছাদন গণনা না করে ফলনের জন্য কেনা।** এটিই অধ্যায়ের কেন্দ্রীয় ভুল এবং সম্ভবত ফলন-সন্ধানী ডিএসই খুচরা বিনিয়োগকারীদের সবচেয়ে ব্যয়বহুল একক অভ্যাস। দুটি ৯% ফলন হতে পারে একটি ২.১০× আচ্ছাদন ও একটি −০.৬৪× আচ্ছাদন।
২. **স্টক লভ্যাংশকে আয় ভাবা।** এটি আয় নয়। কোম্পানি থেকে নগদ: শূন্য। আপনার কাছে নগদ: শূন্য। সম্পদের পরিবর্তন: শূন্য। ভবিষ্যৎ EPS: লঘুকৃত। অধ্যায় ৪ সমন্বয়ের সূত্র দিয়েছে; উদযাপনের আগে সেটি ব্যবহার করুন।
৩. **ঘোষিত হারকে ফলনের সঙ্গে গুলিয়ে ফেলা।** "৫৪% লভ্যাংশ" মানে ১০ টাকা অভিহিত মূল্যের ৫৪%, অর্থাৎ ৫.৪০ টাকা। ৬০ টাকার শেয়ারে তা ৯% ফলন। বাংলাদেশি শিরোনামে প্রায় একচেটিয়াভাবে অভিহিত-মূল্য হারই লেখা হয়, এবং আপনি যা কিনছেন সেটি ঐ সংখ্যা নয়।
৪. **বর্ধমান ফলনকে ভালো প্রবেশপথ ধরে নেওয়া।** দাম পড়লে ফলন বাড়ে। ছয় মাসে দ্বিগুণ হওয়া ফলন সাধারণত এমন একটি বাজারের প্রতিফলন যা সিদ্ধান্ত নিয়েছে লভ্যাংশটি শেষ। পতনকে সুযোগ ভাবার আগে আচ্ছাদন পরীক্ষা দিয়ে যাচাই করুন।
৫. **কেবল পরিশোধ অনুপাত ব্যবহার করা।** আয় সঞ্চিতিভিত্তিক; লভ্যাংশ নগদ। অধ্যায় ১২ ও ১৩ এই ফাঁক প্রতিষ্ঠা করেছে। ৭০% প্রাপ্য-নির্ভর আয়ের ওপর ৬০% পরিশোধ অনুপাত কোনো কিছু দিয়েই আচ্ছাদিত নয়।
৬. **A-শ্রেণির প্রণোদনা উপেক্ষা করা।** যে কোম্পানি প্রতি বছর ঠিক ১০% অভিহিত মূল্য, স্টকে, ঘোষণা করে, সে আপনাকে বলছে যে সে একটি শ্রেণিবিন্যাস সামলাচ্ছে, উদ্বৃত্ত বণ্টন করছে না। এটি একটি সংকেত, এবং এটি বিনামূল্যে।
৭. **নগদ না দেখে সঞ্চিতি-থেকে-লভ্যাংশকে বিচক্ষণ মসৃণকরণ পড়া।** এটি দুটোর যেকোনোটি হতে পারে। পার্থক্যটি হলো FCF ধনাত্মক কি না। দুর্বল বছর মসৃণ করা চক্রীয় ব্যবসার ধনাত্মক FCF ও সঞ্চিতি থাকে; মৃতপ্রায় ব্যবসার কোনোটিই থাকে না।
৮. **কর ও নিষ্পত্তির কার্যপ্রণালী ভুলে যাওয়া।** ব্যক্তি শেয়ারহোল্ডারের নগদ লভ্যাংশে আয়কর আইন অনুযায়ী উৎসে কর কর্তন হয়; আপনি যে গ্রস ফলন গণনা করেন তা আপনার প্রাপ্ত ফলন নয়। বর্তমান হার এবং e-TIN সহ BO অ্যাকাউন্টে কোম্পানি নিম্নতর হার প্রয়োগ করে কি না তা যাচাই করুন।
৯. **লভ্যাংশ "ধরতে" রেকর্ড তারিখের ঠিক আগে কেনা।** অধ্যায় ৪ প্রতিষ্ঠা করেছে যে ex-তারিখে দাম লভ্যাংশের পরিমাণে সমন্বিত হয়। আপনি কিছুই ধরেন না। আপনি দামকে নগদে রূপান্তর করেন, এবং ডিএসই-তে স্প্রেডও দুইবার দেন ও স্পট মার্কেটের সংকুচিত নিষ্পত্তিতে গিয়ে পড়েন।`,
    },

    tips: {
      en: `- **Compute one number before any dividend purchase: CFO − capex − total cash dividend.** Three figures from two statements. If it is negative, walk away regardless of yield, category, or headline.
- **Read the declaration wording carefully.** "20% dividend" on the DSE could be 20% cash, 20% stock, or 10% + 10%. The price adjustment, the cash you receive, and the EPS dilution are completely different in each case. The exact wording is in the price-sensitive disclosure on dsebd.org.
- **Build a five-year dividend history alongside a five-year FCF history.** A company that has paid an uninterrupted cash dividend covered by FCF for five years is a genuinely different object from one with the same average payout achieved through reserves. The DSE will not tell you which is which; the annual reports will.
- **Treat a company that declares exactly 10% of face value in stock, repeatedly, as a category-management case.** It is not necessarily a bad company. It is definitively a company with no distributable cash, telling you so in the only way the rules permit.
- **Check the retained earnings line across five years, not just the payout ratio.** A shrinking reserve while dividends continue is the pattern. It is visible in the statement of changes in equity, which almost nobody reads.
- **When yield rises sharply, re-run the cover tests before you look at the chart.** The price fell for a reason and the reason is usually in the cash flow statement, months before it is in the price.
- **Reconcile the dividend against the equity multiplier from Chapter 19.** A company whose payout is stable while its equity multiplier climbs is borrowing to pay you. That is not income. That is a loan in your name.
- **For a genuinely growing company, prefer low payout.** Sustainable growth is ROE × retention. A company with 20% ROE retaining 70% can compound book value at 14%. The same company paying out 90% compounds at 2% and hands you cash you must reinvest yourself, at retail cost, into a market Chapter 2 established is expensive to transact in.`,
      bn: `- **যেকোনো লভ্যাংশ-ক্রয়ের আগে একটি সংখ্যা গণনা করুন: CFO − মূলধনী ব্যয় − মোট নগদ লভ্যাংশ।** দুটি বিবরণী থেকে তিনটি সংখ্যা। ঋণাত্মক হলে ফলন, শ্রেণি বা শিরোনাম নির্বিশেষে সরে আসুন।
- **ঘোষণার ভাষা মনোযোগ দিয়ে পড়ুন।** ডিএসই-তে "২০% লভ্যাংশ" হতে পারে ২০% নগদ, ২০% স্টক, বা ১০% + ১০%। প্রতিটি ক্ষেত্রে দামের সমন্বয়, আপনার প্রাপ্ত নগদ ও EPS লঘুকরণ সম্পূর্ণ ভিন্ন। সঠিক ভাষাটি dsebd.org-এর মূল্য-সংবেদনশীল প্রকাশনায় আছে।
- **পাঁচ বছরের লভ্যাংশ ইতিহাসের পাশে পাঁচ বছরের FCF ইতিহাস তৈরি করুন।** যে কোম্পানি পাঁচ বছর ধরে FCF-আচ্ছাদিত অবিচ্ছিন্ন নগদ লভ্যাংশ দিয়েছে, সে একই গড় পরিশোধ সঞ্চিতি দিয়ে অর্জনকারী কোম্পানি থেকে সম্পূর্ণ ভিন্ন বস্তু। ডিএসই আপনাকে বলবে না কোনটি কোনটি; বার্ষিক প্রতিবেদন বলবে।
- **যে কোম্পানি বারবার ঠিক ১০% অভিহিত মূল্য স্টকে ঘোষণা করে, তাকে একটি শ্রেণি-ব্যবস্থাপনার কেস হিসেবে ধরুন।** এটি অগত্যা খারাপ কোম্পানি নয়। এটি নিশ্চিতভাবেই এমন কোম্পানি যার বণ্টনযোগ্য নগদ নেই, এবং বিধি যেভাবে অনুমতি দেয় কেবল সেভাবেই সে তা আপনাকে বলছে।
- **কেবল পরিশোধ অনুপাত নয়, পাঁচ বছর ধরে সংরক্ষিত মুনাফার সারিটি দেখুন।** লভ্যাংশ চলতে থাকা অবস্থায় সংকুচিত সঞ্চিতিই সেই প্যাটার্ন। এটি ইক্যুইটি পরিবর্তনের বিবরণীতে দৃশ্যমান, যা প্রায় কেউ পড়ে না।
- **ফলন তীব্রভাবে বাড়লে চার্ট দেখার আগে আচ্ছাদন পরীক্ষা আবার চালান।** দাম একটি কারণে পড়েছে এবং কারণটি সাধারণত দামে আসার মাস কয়েক আগেই নগদ প্রবাহ বিবরণীতে থাকে।
- **লভ্যাংশকে অধ্যায় ১৯-এর ইক্যুইটি গুণকের সঙ্গে মেলান।** যে কোম্পানির পরিশোধ স্থিতিশীল অথচ ইক্যুইটি গুণক ঊর্ধ্বমুখী, সে আপনাকে দিতে ঋণ নিচ্ছে। এটি আয় নয়। এটি আপনার নামে একটি ঋণ।
- **প্রকৃতপক্ষে বর্ধনশীল কোম্পানির ক্ষেত্রে কম পরিশোধ পছন্দ করুন।** টেকসই প্রবৃদ্ধি = ROE × ধারণ। ২০% ROE-র কোম্পানি ৭০% ধরে রাখলে বহিমূল্য ১৪% হারে চক্রবৃদ্ধি করতে পারে। একই কোম্পানি ৯০% পরিশোধ করলে ২% হারে চক্রবৃদ্ধি করে এবং আপনাকে এমন নগদ দেয় যা আপনাকেই খুচরা খরচে, অধ্যায় ২-এ প্রতিষ্ঠিত ব্যয়বহুল লেনদেনের বাজারে, আবার বিনিয়োগ করতে হবে।`,
    },

    exercises: {
      en: `1. Pick five A-category DSE companies with a dividend yield above 6%. For each, compute earnings cover and FCF cover from the latest annual report. How many pass both at 1.5×? How many fail FCF cover entirely?
2. Take one of the failures from Exercise 1. Trace where the cash for the dividend came from: the statement of changes in equity, the borrowings note, and the cash flow statement's financing section. Write three sentences naming the actual source.
3. Find a DSE company that declared a stock dividend in the last two years. Compute the theoretical ex-bonus price, compare it to the actual opening price on the first post-record trading day, and explain any difference. Then compute the EPS dilution.
4. Find a company that has declared exactly 10% of face value for three or more consecutive years. Check whether it was cash or stock each time. What does the pattern tell you about its cash position and its category management?
5. For any DSE company, build a five-year table: EPS, DPS, payout ratio, CFO, capex, FCF, FCF cover. Chart FCF cover over the five years. Is the dividend policy stable, tightening, or already broken?
6. Compute sustainable growth (ROE × retention) for one pharma, one bank, and one textile company. Compare each to its actual five-year equity growth. Where they diverge, explain what closed the gap — rights issue, revaluation, or borrowing.
7. Take a company whose yield rose from under 4% to over 8% within twelve months. Determine whether the numerator rose or the denominator fell, then find what the market learned in that period. Was the cover test predictive?
8. Compare the after-tax yield of a 9% DSE dividend against the current 5-year Bangladesh Government Treasury Bond yield. Account for withholding tax on the dividend. Then state what additional return you are being paid for accepting equity risk, and whether it is enough.`,
      bn: `১. ৬%-এর বেশি লভ্যাংশ ফলনসম্পন্ন পাঁচটি A-শ্রেণির ডিএসই কোম্পানি বাছুন। প্রত্যেকের জন্য সর্বশেষ বার্ষিক প্রতিবেদন থেকে মুনাফা আচ্ছাদন ও FCF আচ্ছাদন গণনা করুন। কতগুলো ১.৫×-এ দুটিতেই উত্তীর্ণ? কতগুলো FCF আচ্ছাদনে সম্পূর্ণ ব্যর্থ?
২. অনুশীলনী ১-এর একটি ব্যর্থ কোম্পানি নিন। লভ্যাংশের নগদ কোথা থেকে এল তা অনুসরণ করুন: ইক্যুইটি পরিবর্তনের বিবরণী, ঋণ সংক্রান্ত নোট, এবং নগদ প্রবাহ বিবরণীর অর্থায়ন অংশ। প্রকৃত উৎসের নামসহ তিন বাক্য লিখুন।
৩. গত দুই বছরে স্টক লভ্যাংশ ঘোষণা করেছে এমন একটি ডিএসই কোম্পানি খুঁজুন। তাত্ত্বিক ex-বোনাস দাম গণনা করুন, রেকর্ড-পরবর্তী প্রথম লেনদেন দিবসের প্রকৃত সূচনা দামের সঙ্গে তুলনা করুন, এবং যেকোনো পার্থক্য ব্যাখ্যা করুন। তারপর EPS লঘুকরণ গণনা করুন।
৪. এমন একটি কোম্পানি খুঁজুন যা টানা তিন বা তার বেশি বছর ঠিক ১০% অভিহিত মূল্য ঘোষণা করেছে। প্রতিবার তা নগদ ছিল না স্টক তা দেখুন। প্যাটার্নটি তার নগদ অবস্থান ও শ্রেণি ব্যবস্থাপনা সম্পর্কে কী বলে?
৫. যেকোনো ডিএসই কোম্পানির জন্য পাঁচ বছরের সারণি তৈরি করুন: EPS, DPS, পরিশোধ অনুপাত, CFO, মূলধনী ব্যয়, FCF, FCF আচ্ছাদন। পাঁচ বছরের FCF আচ্ছাদন চার্ট করুন। লভ্যাংশ নীতি স্থিতিশীল, কঠিন হচ্ছে, না ইতিমধ্যেই ভেঙে পড়েছে?
৬. একটি ওষুধ, একটি ব্যাংক ও একটি বস্ত্র কোম্পানির টেকসই প্রবৃদ্ধি (ROE × ধারণ) গণনা করুন। প্রত্যেকটিকে তার প্রকৃত পাঁচ বছরের ইক্যুইটি প্রবৃদ্ধির সঙ্গে তুলনা করুন। যেখানে অমিল, ব্যাখ্যা করুন ফাঁকটি কী পূরণ করেছে — রাইট ইস্যু, পুনর্মূল্যায়ন, না ঋণ।
৭. এমন একটি কোম্পানি নিন যার ফলন বারো মাসে ৪%-এর নিচ থেকে ৮%-এর ওপরে উঠেছে। নির্ধারণ করুন লব বেড়েছে না হর কমেছে, তারপর ঐ সময়ে বাজার কী জেনেছে তা খুঁজুন। আচ্ছাদন পরীক্ষা কি পূর্বাভাসী ছিল?
৮. ৯% ডিএসই লভ্যাংশের কর-পরবর্তী ফলনকে বর্তমান ৫ বছর মেয়াদি বাংলাদেশ সরকারি ট্রেজারি বন্ডের ফলনের সঙ্গে তুলনা করুন। লভ্যাংশে উৎসে কর হিসাবে ধরুন। তারপর বলুন ইক্যুইটি ঝুঁকি নেওয়ার জন্য আপনাকে কতটা অতিরিক্ত রিটার্ন দেওয়া হচ্ছে, এবং তা যথেষ্ট কি না।`,
    },

    summary: {
      en: `- A cash dividend moves cash out of the company and into your account; the price adjusts by $D$. A stock dividend moves nothing — the price adjusts by $1/(1+b)$, wealth is unchanged, and future EPS is permanently diluted.
- The DSE announces dividends as a percentage of face value, not of price. A "54% dividend" on BDT 10 face value is BDT 5.40, which on a BDT 60 share is a 9% yield. These are not the same number and the headline never uses the second one.
- **The A/B/Z category rule makes dividend declaration a compliance event.** Ten percent of face value keeps a company in A, which preserves margin eligibility and institutional inclusion. A 10% *stock* dividend satisfies the rule at zero cash cost — which is why so many marginal companies declare exactly that, every year.
- **Sustainability requires two tests, not one.** Earnings cover (EPS ÷ DPS) and FCF cover (FCF ÷ total cash dividend). Passing one and failing the other means the dividend is funded from reserves, borrowing, asset sales, or deferred capex — all finite.
- The worked comparison: two companies at exactly 9.00% yield, both A-category. GENCO covered 1.67× by earnings and 2.10× by free cash flow, with a +71.2 crore cash surplus after paying. SPINTEX covered 0.33× by earnings and −0.64× by cash, with a −59.0 crore gap and a 3.05-year reserve runway.
- **Sustainable growth is ROE × retention.** GENCO: 15% × 0.40 = +6%. SPINTEX: 4% × (−2.00) = −8%. A negative sustainable growth rate is the arithmetic of self-liquidation, visible years before the dividend is finally cut.
- **A high yield on the DSE is more often a falling denominator than a rising numerator.** The correct response to a 9% yield is the question "what does the market know?", answered with the two cover tests.
- Cross-check the dividend against Chapter 19: a stable payout alongside a climbing equity multiplier means you are being paid with borrowed money.
- **Discipline established:** never buy for yield without first computing CFO − capex − total cash dividend. If that number is negative, the dividend is a liquidation and the yield is a countdown.`,
      bn: `- নগদ লভ্যাংশ কোম্পানি থেকে নগদ বের করে আপনার হিসাবে আনে; দাম $D$ পরিমাণে সমন্বিত হয়। স্টক লভ্যাংশ কিছুই সরায় না — দাম $1/(1+b)$ অনুপাতে সমন্বিত হয়, সম্পদ অপরিবর্তিত থাকে, এবং ভবিষ্যৎ EPS স্থায়ীভাবে লঘু হয়।
- ডিএসই লভ্যাংশ ঘোষণা করে অভিহিত মূল্যের শতাংশে, দামের নয়। ১০ টাকা অভিহিত মূল্যে "৫৪% লভ্যাংশ" মানে ৫.৪০ টাকা, যা ৬০ টাকার শেয়ারে ৯% ফলন। এ দুটি এক সংখ্যা নয় এবং শিরোনাম কখনোই দ্বিতীয়টি ব্যবহার করে না।
- **A/B/Z শ্রেণি বিধি লভ্যাংশ ঘোষণাকে একটি সম্মতি-ঘটনায় পরিণত করে।** অভিহিত মূল্যের দশ শতাংশ কোম্পানিকে A-তে রাখে, যা মার্জিন-যোগ্যতা ও প্রাতিষ্ঠানিক অন্তর্ভুক্তি রক্ষা করে। ১০% *স্টক* লভ্যাংশ শূন্য নগদ ব্যয়ে বিধিটি পূরণ করে — এ কারণেই এত প্রান্তিক কোম্পানি প্রতি বছর ঠিক সেটিই ঘোষণা করে।
- **টেকসইতার জন্য দুটি পরীক্ষা দরকার, একটি নয়।** মুনাফা আচ্ছাদন (EPS ÷ DPS) এবং FCF আচ্ছাদন (FCF ÷ মোট নগদ লভ্যাংশ)। একটিতে উত্তীর্ণ ও অন্যটিতে ব্যর্থ মানে লভ্যাংশ অর্থায়িত হচ্ছে সঞ্চিতি, ঋণ, সম্পদ বিক্রি বা স্থগিত মূলধনী ব্যয় থেকে — সবগুলোই সীমিত।
- কৃত তুলনা: ঠিক ৯.০০% ফলনের দুটি কোম্পানি, দুটিই A-শ্রেণির। GENCO মুনাফায় ১.৬৭× ও মুক্ত নগদ প্রবাহে ২.১০× আচ্ছাদিত, পরিশোধের পরও +৭১.২ কোটি নগদ উদ্বৃত্তসহ। SPINTEX মুনাফায় ০.৩৩× ও নগদে −০.৬৪× আচ্ছাদিত, −৫৯.০ কোটি ঘাটতি ও ৩.০৫ বছরের সঞ্চিতি-স্থায়িত্বসহ।
- **টেকসই প্রবৃদ্ধি = ROE × ধারণ।** GENCO: ১৫% × ০.৪০ = +৬%। SPINTEX: ৪% × (−২.০০) = −৮%। ঋণাত্মক টেকসই প্রবৃদ্ধির হার হলো স্ব-অবসায়নের পাটিগণিত, লভ্যাংশ শেষমেশ কাটা পড়ার বছরখানেক আগেই দৃশ্যমান।
- **ডিএসই-তে উচ্চ ফলন লব বাড়ার চেয়ে হর কমার ফল হওয়াই বেশি সাধারণ।** ৯% ফলনের সঠিক প্রতিক্রিয়া হলো "বাজার কী জানে?" প্রশ্নটি, যার উত্তর দুটি আচ্ছাদন পরীক্ষা দিয়ে।
- লভ্যাংশকে অধ্যায় ১৯-এর সঙ্গে ক্রস-চেক করুন: ঊর্ধ্বমুখী ইক্যুইটি গুণকের পাশে স্থিতিশীল পরিশোধ মানে আপনাকে ধার করা টাকায় দেওয়া হচ্ছে।
- **প্রতিষ্ঠিত শৃঙ্খলা:** CFO − মূলধনী ব্যয় − মোট নগদ লভ্যাংশ গণনা না করে কখনো ফলনের জন্য কিনবেন না। সংখ্যাটি ঋণাত্মক হলে লভ্যাংশটি একটি অবসায়ন এবং ফলনটি একটি কাউন্টডাউন।`,
    },
  },

  interview: [
    {
      q: {
        en: 'A DSE company announces a "20% dividend." What do you need to know before you can say what a shareholder receives?',
        bn: 'একটি ডিএসই কোম্পানি "২০% লভ্যাংশ" ঘোষণা করল। শেয়ারহোল্ডার কী পাবেন তা বলার আগে আপনার কী জানা দরকার?',
      },
      a: {
        en: 'Whether it is cash or stock, and the face value. Twenty percent of a BDT 10 face value is BDT 2.00 per share if cash — which on a BDT 50 share is a 4% yield, not 20%. If it is a stock dividend, the shareholder receives no cash at all: the price adjusts to P/(1+0.20), holdings rise 20%, wealth is unchanged, and next year\'s EPS is diluted by one-sixth. The headline percentage is measured against face value and tells you nothing about either yield or cash.',
        bn: 'এটি নগদ না স্টক, এবং অভিহিত মূল্য কত। নগদ হলে ১০ টাকা অভিহিত মূল্যের ২০% মানে শেয়ারপ্রতি ২.০০ টাকা — যা ৫০ টাকার শেয়ারে ৪% ফলন, ২০% নয়। স্টক লভ্যাংশ হলে শেয়ারহোল্ডার কোনো নগদই পান না: দাম P/(1+0.20)-এ সমন্বিত হয়, ধারণ ২০% বাড়ে, সম্পদ অপরিবর্তিত থাকে, এবং পরের বছরের EPS এক-ষষ্ঠাংশ লঘু হয়। শিরোনামের শতাংশ অভিহিত মূল্যের বিপরীতে মাপা এবং তা ফলন বা নগদ কোনোটি সম্পর্কেই কিছু বলে না।',
      },
    },
    {
      q: {
        en: 'Two companies both yield 9%. What two tests separate them, and why is one insufficient?',
        bn: 'দুটি কোম্পানিরই ফলন ৯%। কোন দুটি পরীক্ষা এদের আলাদা করে, এবং কেন একটি অপর্যাপ্ত?',
      },
      a: {
        en: 'Earnings cover (EPS ÷ DPS) and free cash flow cover (FCF ÷ total cash dividend). Earnings cover alone is insufficient because earnings are accrual and dividends are cash — a company can report healthy EPS sitting entirely in receivables and still have no cash to distribute. In the worked example, GENCO covers 1.67× on earnings and 2.10× on cash; SPINTEX covers 0.33× on earnings and −0.64× on cash, meaning it generated negative free cash flow and paid a 36 crore dividend anyway.',
        bn: 'মুনাফা আচ্ছাদন (EPS ÷ DPS) এবং মুক্ত নগদ প্রবাহ আচ্ছাদন (FCF ÷ মোট নগদ লভ্যাংশ)। কেবল মুনাফা আচ্ছাদন অপর্যাপ্ত কারণ আয় সঞ্চিতিভিত্তিক আর লভ্যাংশ নগদ — একটি কোম্পানি সম্পূর্ণ প্রাপ্য হিসাবে বসে থাকা সুস্থ EPS দেখিয়েও বণ্টনের নগদ না রাখতে পারে। কৃত উদাহরণে GENCO মুনাফায় ১.৬৭× ও নগদে ২.১০× আচ্ছাদিত; SPINTEX মুনাফায় ০.৩৩× ও নগদে −০.৬৪×, অর্থাৎ সে ঋণাত্মক মুক্ত নগদ প্রবাহ তৈরি করেও ৩৬ কোটি টাকা লভ্যাংশ দিয়েছে।',
      },
    },
    {
      q: {
        en: 'Explain how the DSE A/B/Z category rule distorts dividend policy.',
        bn: 'ডিএসই-র A/B/Z শ্রেণি বিধি কীভাবে লভ্যাংশ নীতি বিকৃত করে তা ব্যাখ্যা করুন।',
      },
      a: {
        en: 'A-category requires a regular AGM and a declared dividend of at least 10% of face value. A-category securities are margin-eligible and pass institutional screens; B and Z generally are not and do not. So falling out of A triggers forced deleveraging by every margin holder plus mechanical institutional exit — a price event independent of fundamentals. That gives management a permanent incentive to declare something rather than nothing, and a 10% stock dividend satisfies the rule at zero cash cost. The rule therefore rewards the appearance of distribution over the substance of it.',
        bn: 'A-শ্রেণির জন্য নিয়মিত এজিএম এবং অভিহিত মূল্যের অন্তত ১০% ঘোষিত লভ্যাংশ প্রয়োজন। A-শ্রেণির সিকিউরিটি মার্জিন-যোগ্য এবং প্রাতিষ্ঠানিক ছাঁকনি উতরায়; B ও Z সাধারণত নয়। তাই A থেকে পড়ে গেলে প্রতিটি মার্জিন ধারকের বাধ্যতামূলক ঋণভার-হ্রাস এবং যান্ত্রিক প্রাতিষ্ঠানিক প্রস্থান ট্রিগার হয় — মৌলভিত্তি-নিরপেক্ষ একটি মূল্য-ঘটনা। এটি ব্যবস্থাপনাকে কিছু না দেওয়ার বদলে কিছু ঘোষণার স্থায়ী প্রণোদনা দেয়, এবং ১০% স্টক লভ্যাংশ শূন্য নগদ ব্যয়ে বিধিটি পূরণ করে। অতএব বিধিটি বণ্টনের সারবস্তুর চেয়ে বণ্টনের চেহারাকে পুরস্কৃত করে।',
      },
    },
    {
      q: {
        en: 'What does a negative retention ratio mean, and what does it do to sustainable growth?',
        bn: 'ঋণাত্মক ধারণ অনুপাতের অর্থ কী, এবং এটি টেকসই প্রবৃদ্ধির কী করে?',
      },
      a: {
        en: 'Retention is 1 − payout, so it goes negative whenever payout exceeds 100% — the company is distributing more than it earned, so the equity base is shrinking. Sustainable growth is ROE × retention, so a positive ROE multiplied by a negative retention gives negative sustainable growth. In the worked case, 4.00% ROE × (−2.00) = −8.00%: the equity base contracts 8% a year from the dividend policy alone, before any operational deterioration. That is the arithmetic of self-liquidation, and it is visible years before the dividend is finally cut.',
        bn: 'ধারণ = ১ − পরিশোধ, তাই পরিশোধ ১০০% ছাড়ালেই এটি ঋণাত্মক হয় — কোম্পানি আয়ের চেয়ে বেশি বণ্টন করছে, অর্থাৎ ইক্যুইটিভিত্তি সংকুচিত হচ্ছে। টেকসই প্রবৃদ্ধি = ROE × ধারণ, তাই ধনাত্মক ROE-কে ঋণাত্মক ধারণ দিয়ে গুণ করলে ঋণাত্মক টেকসই প্রবৃদ্ধি আসে। কৃত ক্ষেত্রে ৪.০০% ROE × (−২.০০) = −৮.০০%: কোনো পরিচালন অবনতির আগেই কেবল লভ্যাংশ নীতিতে ইক্যুইটিভিত্তি বছরে ৮% সংকুচিত হয়। এটি স্ব-অবসায়নের পাটিগণিত, এবং লভ্যাংশ শেষমেশ কাটা পড়ার বছরখানেক আগেই দৃশ্যমান।',
      },
    },
    {
      q: {
        en: 'Why is a rising dividend yield usually a warning rather than an opportunity on the DSE?',
        bn: 'ডিএসই-তে বর্ধমান লভ্যাংশ ফলন কেন সাধারণত সুযোগ নয়, সতর্কবার্তা?',
      },
      a: {
        en: 'Yield is DPS ÷ price. It rises either because the dividend rose or because the price fell, and on the DSE the second dominates. A yield that went from 4% to 9% has usually done so because the price roughly halved, and the price halved because the market concluded the earnings funding the dividend are not durable. You are being offered a dividend the market does not expect to be repeated. The correct response is to re-run earnings cover and FCF cover, not to treat the fall as a discount.',
        bn: 'ফলন = DPS ÷ দাম। এটি বাড়ে হয় লভ্যাংশ বেড়েছে বলে, নয়তো দাম কমেছে বলে, এবং ডিএসই-তে দ্বিতীয়টিই প্রধান। ৪% থেকে ৯%-এ যাওয়া ফলন সাধারণত গেছে কারণ দাম মোটামুটি অর্ধেক হয়েছে, আর দাম অর্ধেক হয়েছে কারণ বাজার সিদ্ধান্ত নিয়েছে লভ্যাংশের তহবিল জোগানো আয় টেকসই নয়। আপনাকে এমন লভ্যাংশ দেওয়া হচ্ছে যার পুনরাবৃত্তি বাজার প্রত্যাশা করে না। সঠিক প্রতিক্রিয়া হলো মুনাফা ও FCF আচ্ছাদন আবার চালানো, পতনকে ছাড় ভাবা নয়।',
      },
    },
    {
      q: {
        en: 'A company pays a dividend out of accumulated reserves rather than current profit. When is that legitimate and when is it not?',
        bn: 'একটি কোম্পানি চলতি মুনাফা নয়, পুঞ্জীভূত সঞ্চিতি থেকে লভ্যাংশ দেয়। কখন এটি বৈধ এবং কখন নয়?',
      },
      a: {
        en: 'The Companies Act 1994 permits it, and for a genuinely cyclical business smoothing one weak year it is sound policy — but only if free cash flow is still positive. The distinction is cash, not accounting. If FCF is positive and the shortfall is only against reported earnings, the company is smoothing. If FCF is negative, the company is funding both its operating shortfall and the dividend from reserves and borrowing, which is capital being returned to shareholders and labelled income. Check the reserve trajectory across five years in the statement of changes in equity, and compute the runway from the cash gap, not the accounting gap.',
        bn: 'কোম্পানি আইন ১৯৯৪ এর অনুমতি দেয়, এবং প্রকৃতপক্ষে চক্রীয় একটি ব্যবসার একটি দুর্বল বছর মসৃণ করার জন্য এটি যুক্তিসঙ্গত নীতি — তবে কেবল তখনই যখন মুক্ত নগদ প্রবাহ এখনো ধনাত্মক। পার্থক্যটি নগদে, হিসাবে নয়। FCF ধনাত্মক হয়ে ঘাটতি কেবল ঘোষিত আয়ের বিপরীতে হলে কোম্পানি মসৃণ করছে। FCF ঋণাত্মক হলে কোম্পানি তার পরিচালন ঘাটতি ও লভ্যাংশ উভয়ই সঞ্চিতি ও ঋণ থেকে জোগাচ্ছে, যা শেয়ারহোল্ডারদের মূলধন ফেরত দিয়ে তাকে আয় বলা। ইক্যুইটি পরিবর্তনের বিবরণীতে পাঁচ বছরের সঞ্চিতির গতিপথ দেখুন, এবং স্থায়িত্ব গণনা করুন হিসাবগত ঘাটতি নয়, নগদ ঘাটতি থেকে।',
      },
    },
  ],

  quiz: [
    {
      q: {
        en: 'A company with BDT 10 face value declares a 54% cash dividend. Its share trades at BDT 60. The dividend yield is:',
        bn: '১০ টাকা অভিহিত মূল্যের একটি কোম্পানি ৫৪% নগদ লভ্যাংশ ঘোষণা করল। শেয়ার ৬০ টাকায় লেনদেন হয়। লভ্যাংশ ফলন:',
      },
      options: { en: ['5.4%', '9.0%', '54.0%', '10.8%'], bn: ['৫.৪%', '৯.০%', '৫৪.০%', '১০.৮%'] },
      answer: 1,
    },
    {
      q: {
        en: 'A 20% stock dividend on a share trading at BDT 40 gives a theoretical ex-bonus price of:',
        bn: '৪০ টাকায় লেনদেনরত শেয়ারে ২০% স্টক লভ্যাংশের তাত্ত্বিক ex-বোনাস দাম:',
      },
      options: { en: ['BDT 32.00', 'BDT 33.33', 'BDT 38.00', 'BDT 48.00'], bn: ['৩২.০০ টাকা', '৩৩.৩৩ টাকা', '৩৮.০০ টাকা', '৪৮.০০ টাকা'] },
      answer: 1,
    },
    {
      q: {
        en: 'Free cash flow for the dividend cover test is defined as:',
        bn: 'লভ্যাংশ আচ্ছাদন পরীক্ষার জন্য মুক্ত নগদ প্রবাহের সংজ্ঞা:',
      },
      options: {
        en: ['Net income − dividend', 'CFO − capex', 'EBITDA − interest', 'Revenue − operating expenses'],
        bn: ['নিট মুনাফা − লভ্যাংশ', 'CFO − মূলধনী ব্যয়', 'EBITDA − সুদ', 'রাজস্ব − পরিচালন ব্যয়'],
      },
      answer: 1,
    },
    {
      q: {
        en: 'EPS BDT 1.20, cash DPS BDT 3.60. The retention ratio is:',
        bn: 'EPS ১.২০ টাকা, নগদ DPS ৩.৬০ টাকা। ধারণ অনুপাত:',
      },
      options: { en: ['+33%', '−200%', '+300%', '−33%'], bn: ['+৩৩%', '−২০০%', '+৩০০%', '−৩৩%'] },
      answer: 1,
    },
    {
      q: {
        en: 'Sustainable growth rate is computed as:',
        bn: 'টেকসই প্রবৃদ্ধির হার গণনা করা হয়:',
      },
      options: {
        en: ['ROE × payout ratio', 'ROE × retention ratio', 'ROA × equity multiplier', 'Dividend yield × payout'],
        bn: ['ROE × পরিশোধ অনুপাত', 'ROE × ধারণ অনুপাত', 'ROA × ইক্যুইটি গুণক', 'লভ্যাংশ ফলন × পরিশোধ'],
      },
      answer: 1,
    },
    {
      q: {
        en: 'To stay in DSE A category, a company must declare a dividend of at least:',
        bn: 'ডিএসই A শ্রেণিতে থাকতে একটি কোম্পানিকে ন্যূনতম লভ্যাংশ ঘোষণা করতে হয়:',
      },
      options: {
        en: ['5% of face value', '10% of face value', '10% of market price', '20% of net profit'],
        bn: ['অভিহিত মূল্যের ৫%', 'অভিহিত মূল্যের ১০%', 'বাজারমূল্যের ১০%', 'নিট মুনাফার ২০%'],
      },
      answer: 1,
    },
    {
      q: {
        en: 'A shareholder holding 1,000 shares at BDT 40 receives a 20% stock dividend. Their total wealth after the adjustment is:',
        bn: '৪০ টাকা দরে ১,০০০ শেয়ার ধারণকারী একজন ২০% স্টক লভ্যাংশ পান। সমন্বয়ের পর তাঁর মোট সম্পদ:',
      },
      options: {
        en: ['BDT 40,000 — unchanged', 'BDT 48,000 — up 20%', 'BDT 33,330 — down 16.7%', 'BDT 44,000 — up 10%'],
        bn: ['৪০,০০০ টাকা — অপরিবর্তিত', '৪৮,০০০ টাকা — ২০% বৃদ্ধি', '৩৩,৩৩০ টাকা — ১৬.৭% হ্রাস', '৪৪,০০০ টাকা — ১০% বৃদ্ধি'],
      },
      answer: 0,
    },
    {
      q: {
        en: 'A dividend that passes the earnings cover test but fails the FCF cover test is being funded by:',
        bn: 'যে লভ্যাংশ মুনাফা আচ্ছাদন পরীক্ষায় উত্তীর্ণ কিন্তু FCF আচ্ছাদনে ব্যর্থ, তা অর্থায়িত হচ্ছে:',
      },
      options: {
        en: [
          'This year\'s operations',
          'Reserves, borrowing, asset sales, or deferred capex',
          'The share price',
          'Retained earnings only, which is always safe',
        ],
        bn: [
          'এ বছরের পরিচালনা',
          'সঞ্চিতি, ঋণ, সম্পদ বিক্রি বা স্থগিত মূলধনী ব্যয়',
          'শেয়ারের দাম',
          'কেবল সংরক্ষিত মুনাফা, যা সর্বদা নিরাপদ',
        ],
      },
      answer: 1,
    },
    {
      q: {
        en: 'On the DSE, a dividend yield rising from 4% to 9% in a year most commonly reflects:',
        bn: 'ডিএসই-তে এক বছরে ৪% থেকে ৯%-এ ওঠা লভ্যাংশ ফলন সাধারণত প্রতিফলিত করে:',
      },
      options: {
        en: [
          'A more generous board',
          'A falling share price',
          'Improving free cash flow',
          'A category upgrade',
        ],
        bn: [
          'আরও উদার পর্ষদ',
          'শেয়ারের দাম পতন',
          'উন্নত মুক্ত নগদ প্রবাহ',
          'শ্রেণির উন্নয়ন',
        ],
      },
      answer: 1,
    },
    {
      q: {
        en: 'A company declares exactly 10% of face value in stock, every year, for five years. The most reasonable inference is:',
        bn: 'একটি কোম্পানি টানা পাঁচ বছর ঠিক ১০% অভিহিত মূল্য স্টকে ঘোষণা করে। সবচেয়ে যৌক্তিক অনুমান:',
      },
      options: {
        en: [
          'It is a high-growth company reinvesting aggressively',
          'It has no distributable cash and is managing its DSE category',
          'It is rewarding long-term shareholders',
          'It is preparing for a rights issue',
        ],
        bn: [
          'এটি একটি উচ্চ-প্রবৃদ্ধির কোম্পানি যা আক্রমণাত্মকভাবে পুনর্বিনিয়োগ করছে',
          'এর বণ্টনযোগ্য নগদ নেই এবং সে তার ডিএসই শ্রেণি সামলাচ্ছে',
          'এটি দীর্ঘমেয়াদি শেয়ারহোল্ডারদের পুরস্কৃত করছে',
          'এটি রাইট ইস্যুর প্রস্তুতি নিচ্ছে',
        ],
      },
      answer: 1,
    },
  ],
};
