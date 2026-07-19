/**
 * Chapter 4 — Primary vs Secondary Market
 * Part I, Stock Market Foundation.
 *
 * Chapter 3 covered issuance. This chapter covers what happens to a share
 * *after* it lists: settlement, categories, and corporate-action adjustments.
 */

export default {
  n: 4,
  tools: [],

  excelSheet: {
    filename: 'ch04-corporate-action-adjuster.xlsx',
    sheetName: 'Corporate Actions',
    cells: [
      { cell: 'A1', v: 'CUM PRICE (before adjustment)' }, { cell: 'B1', v: 120 },

      { cell: 'A3', v: '— Cash Dividend —' },
      { cell: 'A4', v: 'Face Value (BDT)' }, { cell: 'B4', v: 10 },
      { cell: 'A5', v: 'Cash Dividend (% of face)' }, { cell: 'B5', v: 25 },
      { cell: 'A6', v: 'Dividend per Share (BDT)' }, { cell: 'B6', f: 'B4*B5/100' },
      { cell: 'A7', v: 'Ex-Dividend Price' }, { cell: 'B7', f: 'B1-B6' },

      { cell: 'A9', v: '— Stock Dividend (Bonus) —' },
      { cell: 'A10', v: 'Bonus Ratio (% e.g. 20 for 20%)' }, { cell: 'B10', v: 20 },
      { cell: 'A11', v: 'Ex-Bonus Price' }, { cell: 'B11', f: 'B1/(1+B10/100)' },

      { cell: 'A13', v: '— Rights Issue —' },
      { cell: 'A14', v: 'Existing Shares (N old)' }, { cell: 'B14', v: 2 },
      { cell: 'A15', v: 'New Rights Shares (N new)' }, { cell: 'B15', v: 1 },
      { cell: 'A16', v: 'Rights Subscription Price' }, { cell: 'B16', v: 60 },
      { cell: 'A17', v: 'TERP' }, { cell: 'B17', f: '(B14*B1+B15*B16)/(B14+B15)' },
      { cell: 'A18', v: 'Value of One Right' }, { cell: 'B18', f: 'B1-B17' },

      { cell: 'A20', v: '— Combined (cash + bonus) —' },
      { cell: 'A21', v: 'Adjusted Price' }, { cell: 'B21', f: '(B1-B6)/(1+B10/100)' },

      { cell: 'A23', v: 'Apparent Fall (%)' }, { cell: 'B23', f: '(B1-B21)/B1*100' },
      { cell: 'A24', v: 'REAL Economic Loss?' },
      { cell: 'B24', f: '"No - this is a mechanical adjustment, not a loss"' },
    ],
  },

  objectives: {
    en: [
      'Explain the feedback loop by which secondary-market pricing governs primary-market issuance.',
      'Read the DSE A / B / N / Z categories and state what each implies for settlement and margin eligibility.',
      'Compute ex-dividend, ex-bonus, and theoretical ex-rights prices, and the value of a right.',
      'Distinguish a mechanical corporate-action adjustment from a genuine price fall.',
      'Explain why the settlement cycle determines how quickly capital can be recycled.',
    ],
    bn: [
      'মাধ্যমিক বাজারের মূল্য নির্ধারণ কীভাবে প্রাথমিক বাজারের ইস্যু নিয়ন্ত্রণ করে সেই প্রতিক্রিয়া চক্র ব্যাখ্যা করা।',
      'ডিএসই-র A / B / N / Z শ্রেণি পড়া এবং প্রতিটি নিষ্পত্তি ও মার্জিন যোগ্যতার জন্য কী বোঝায় তা বলা।',
      'এক্স-ডিভিডেন্ড, এক্স-বোনাস ও তাত্ত্বিক এক্স-রাইটস মূল্য এবং একটি রাইটের মূল্য গণনা করা।',
      'যান্ত্রিক কর্পোরেট অ্যাকশন সমন্বয়কে প্রকৃত দরপতন থেকে আলাদা করা।',
      'কেন নিষ্পত্তি চক্র নির্ধারণ করে কত দ্রুত মূলধন পুনর্ব্যবহার করা যায় তা ব্যাখ্যা করা।',
    ],
  },

  blocks: {
    theory: {
      en: `Chapter 3 established the distinction: the primary market creates securities and funds the company; the secondary market transfers them and funds nothing. This chapter is about what that transfer machinery actually does — and about the loop that connects the two markets.

### The feedback loop

The two markets are not independent. **Secondary-market prices set primary-market terms.**

If the secondary market values a sector at 25× earnings, a company in that sector can issue at a high price and raise a lot of capital per share sold. If the same sector trades at 6×, issuance is expensive in dilution terms and the company postpones. This is why IPO pipelines dry up in bear markets and flood in bull markets — not because companies suddenly need capital in 2010 and not in 2012, but because the price at which capital is available changed.

The loop runs both ways. Heavy issuance adds supply, which depresses secondary prices, which closes the issuance window. **Neither market can be understood alone.**

### Settlement

A trade is agreed on the exchange and *settled* through the clearing process — shares move in CDBL, money moves through the settlement banks.

| Category | Settlement (indicative) |
|---|---|
| A, B, N | T+2 |
| Z | T+3 |
| Spot market | T+1 |

*(Cycles have been revised repeatedly. Verify on dsebd.org before relying on any figure here.)*

**Why the cycle matters practically:** it governs how fast capital recycles. On T+2, sale proceeds are available to redeploy on the second working day. A trader running a strategy that turns over weekly is constrained by settlement, not by ideas.

### The DSE categories

Every listed security carries a category letter. This is one of the most useful pieces of free information on the exchange, and most retail investors never look at it.

| Category | Meaning |
|---|---|
| **A** | Holds AGM regularly and declared dividend of 10% or more |
| **B** | Holds AGM but declared less than 10% dividend |
| **N** | Newly listed — carries this until its first AGM/dividend |
| **Z** | Fails to hold AGM, or pays no dividend, or is non-operational, or accumulated losses exceed paid-up capital |

**Z is not a warning. It is a diagnosis.** A Z-category company has already failed at least one of: holding a legally required meeting, generating a distributable surplus, or staying operational.

The category is not cosmetic — it changes what you can do:

- **Margin loan eligibility** is generally restricted to A (and sometimes B) category securities. Z is typically excluded.
- **Settlement is slower** for Z.
- Category migration is itself an event. A company moving A → Z faces forced deleveraging: everyone holding it on margin must unwind, into a market that has just been told the company failed.

### The spot market

Before a record date, a security is typically moved to the **spot market**, where settlement is compressed (T+1) and price limits are handled differently. The purpose is to make ownership unambiguous on the record date so that entitlements — dividends, bonus shares, rights — attach to the correct holder.

### Corporate actions and the record date

A **corporate action** is anything the company does that changes what a share represents: a cash dividend, a stock dividend (bonus), a rights issue, a split.

- **Record date** — the date on which the register is read. Hold the share on that date, receive the entitlement.
- **Ex-date** — from this date the share trades *without* the entitlement, and the price adjusts downward mechanically to reflect that.

**On the first trading day after the record date, DSE relaxes the circuit breaker** so the price can adjust freely to its new basis. This is essential: a 20% bonus requires a ~16.7% downward adjustment, which would otherwise hit the 10% circuit and lock.

**This is the single most misread event on the exchange.** A stock that closed at 120 and opens at 96 has not lost 20%. If it went ex a 25% cash dividend and a 20% bonus, it is worth exactly what it was worth — you now hold more shares plus cash. The chart shows a cliff; your wealth is unchanged.`,
      bn: `অধ্যায় ৩ পার্থক্যটি প্রতিষ্ঠা করেছে: প্রাথমিক বাজার সিকিউরিটিজ সৃষ্টি করে ও কোম্পানিকে অর্থায়ন করে; মাধ্যমিক বাজার সেগুলো হস্তান্তর করে ও কিছুই অর্থায়ন করে না। এই অধ্যায় ঐ হস্তান্তর যন্ত্র আসলে কী করে সে সম্পর্কে — এবং দুই বাজারকে যুক্ত করা চক্রটি সম্পর্কে।

### প্রতিক্রিয়া চক্র

দুই বাজার স্বাধীন নয়। **মাধ্যমিক বাজারের দাম প্রাথমিক বাজারের শর্ত নির্ধারণ করে।**

মাধ্যমিক বাজার যদি কোনো খাতকে ২৫ গুণ আয়ে মূল্যায়ন করে, ঐ খাতের একটি কোম্পানি উঁচু দামে ইস্যু করতে ও প্রতি শেয়ারে বেশি মূলধন তুলতে পারে। একই খাত যদি ৬ গুণে লেনদেন হয়, তবে ডাইলিউশনের হিসাবে ইস্যু ব্যয়বহুল এবং কোম্পানি স্থগিত করে। এ কারণেই বিয়ার মার্কেটে আইপিও-র সারি শুকিয়ে যায় ও বুল মার্কেটে উপচে পড়ে — কোম্পানিগুলোর ২০১০ সালে হঠাৎ মূলধন দরকার আর ২০১২ সালে দরকার নেই বলে নয়, বরং যে দামে মূলধন পাওয়া যায় তা বদলে গেছে বলে।

চক্রটি দুই দিকেই চলে। অতিরিক্ত ইস্যু সরবরাহ বাড়ায়, যা মাধ্যমিক দাম চাপে ফেলে, যা ইস্যুর জানালা বন্ধ করে দেয়। **কোনো বাজারকেই একা বোঝা যায় না।**

### নিষ্পত্তি

লেনদেন এক্সচেঞ্জে সম্মত হয় এবং ক্লিয়ারিং প্রক্রিয়ার মাধ্যমে *নিষ্পত্তি* হয় — শেয়ার সরে সিডিবিএল-এ, টাকা সরে নিষ্পত্তি ব্যাংকের মাধ্যমে।

| শ্রেণি | নিষ্পত্তি (নির্দেশক) |
|---|---|
| A, B, N | T+২ |
| Z | T+৩ |
| স্পট মার্কেট | T+১ |

*(চক্র বারবার সংশোধিত হয়েছে। এখানকার কোনো সংখ্যার ওপর নির্ভর করার আগে dsebd.org-এ যাচাই করুন।)*

**ব্যবহারিকভাবে চক্রটি কেন গুরুত্বপূর্ণ:** এটি নির্ধারণ করে মূলধন কত দ্রুত পুনর্ব্যবহৃত হয়। T+২-তে বিক্রির অর্থ দ্বিতীয় কার্যদিবসে পুনঃবিনিয়োগের জন্য পাওয়া যায়। সাপ্তাহিক হারে লেনদেন করা কৌশল ধারণাগত সীমা নয়, নিষ্পত্তির সীমায় আটকে থাকে।

### ডিএসই শ্রেণিসমূহ

প্রতিটি তালিকাভুক্ত সিকিউরিটির একটি শ্রেণি-অক্ষর থাকে। এক্সচেঞ্জের সবচেয়ে কার্যকর বিনামূল্যের তথ্যগুলোর এটি একটি, এবং বেশিরভাগ খুচরা বিনিয়োগকারী কখনো এটি দেখেন না।

| শ্রেণি | অর্থ |
|---|---|
| **A** | নিয়মিত এজিএম করে এবং ১০% বা তার বেশি লভ্যাংশ ঘোষণা করেছে |
| **B** | এজিএম করে কিন্তু ১০%-এর কম লভ্যাংশ ঘোষণা করেছে |
| **N** | নবতালিকাভুক্ত — প্রথম এজিএম/লভ্যাংশ পর্যন্ত এই শ্রেণিতে থাকে |
| **Z** | এজিএম করতে ব্যর্থ, বা কোনো লভ্যাংশ দেয় না, বা অকার্যকর, বা পুঞ্জীভূত লোকসান পরিশোধিত মূলধন ছাড়িয়েছে |

**Z কোনো সতর্কতা নয়। এটি একটি রোগনির্ণয়।** একটি Z-শ্রেণির কোম্পানি ইতিমধ্যেই অন্তত একটিতে ব্যর্থ হয়েছে: আইনত বাধ্যতামূলক একটি সভা করা, বণ্টনযোগ্য উদ্বৃত্ত তৈরি করা, বা কার্যকর থাকা।

শ্রেণিটি প্রসাধনী নয় — এটি আপনি কী করতে পারবেন তা বদলে দেয়:

- **মার্জিন ঋণের যোগ্যতা** সাধারণত A (এবং কখনো B) শ্রেণির সিকিউরিটিজে সীমাবদ্ধ। Z সাধারণত বাদ।
- Z-এর জন্য **নিষ্পত্তি ধীর**।
- শ্রেণি পরিবর্তন নিজেই একটি ঘটনা। A → Z-এ যাওয়া কোম্পানি বাধ্যতামূলক ঋণমুক্তির মুখে পড়ে: মার্জিনে ধারণকারী সবাইকে ছেড়ে দিতে হয়, এমন এক বাজারে যাকে সবে বলা হয়েছে কোম্পানিটি ব্যর্থ।

### স্পট মার্কেট

রেকর্ড তারিখের আগে একটি সিকিউরিটি সাধারণত **স্পট মার্কেটে** সরানো হয়, যেখানে নিষ্পত্তি সংক্ষিপ্ত (T+১) এবং মূল্যসীমা ভিন্নভাবে পরিচালিত হয়। উদ্দেশ্য হলো রেকর্ড তারিখে মালিকানা দ্ব্যর্থহীন করা, যাতে প্রাপ্য — লভ্যাংশ, বোনাস শেয়ার, রাইটস — সঠিক ধারকের সঙ্গে যুক্ত হয়।

### কর্পোরেট অ্যাকশন ও রেকর্ড তারিখ

**কর্পোরেট অ্যাকশন** হলো কোম্পানির এমন যেকোনো পদক্ষেপ যা একটি শেয়ার কী প্রতিনিধিত্ব করে তা বদলে দেয়: নগদ লভ্যাংশ, স্টক লভ্যাংশ (বোনাস), রাইটস ইস্যু, বিভাজন।

- **রেকর্ড তারিখ** — যেদিন রেজিস্টার পড়া হয়। ঐ তারিখে শেয়ার ধরে রাখুন, প্রাপ্য পাবেন।
- **এক্স-তারিখ** — এই তারিখ থেকে শেয়ার প্রাপ্য *ছাড়াই* লেনদেন হয়, এবং দাম তা প্রতিফলিত করতে যান্ত্রিকভাবে নিচে সমন্বিত হয়।

**রেকর্ড তারিখের পরের প্রথম লেনদেন দিবসে ডিএসই সার্কিট ব্রেকার শিথিল করে** যাতে দাম অবাধে নতুন ভিত্তিতে সমন্বিত হতে পারে। এটি অপরিহার্য: ২০% বোনাসের জন্য প্রায় ১৬.৭% নিম্নমুখী সমন্বয় দরকার, যা নইলে ১০% সার্কিটে গিয়ে আটকে যেত।

**এক্সচেঞ্জে এটিই সবচেয়ে বেশি ভুল-পঠিত ঘটনা।** যে শেয়ার ১২০-এ বন্ধ হয়ে ৯৬-এ খোলে, সেটি ২০% হারায়নি। যদি এটি ২৫% নগদ লভ্যাংশ ও ২০% বোনাসের এক্স হয়ে থাকে, তবে এটির মূল্য ঠিক আগের মতোই — আপনার হাতে এখন বেশি শেয়ার এবং নগদ। চার্ট দেখাচ্ছে খাদ; আপনার সম্পদ অপরিবর্তিত।`,
    },

    simple: {
      en: `Back to the bakery.

**Primary market:** the bakery sells you a share and buys an oven with your money.
**Secondary market:** you sell that share to your neighbour. The bakery is not involved.

But the two are linked by a rope. If shares in bakeries are fashionable and expensive, our baker can sell a small slice of the business for a lot of money, so she issues. If bakery shares are cheap and unloved, selling that same slice costs her most of the shop — so she waits. **The price on the street decides whether anything new gets built.**

### The letter on the label

Every share carries a grade: **A**, **B**, **N**, or **Z**.

Think of it as a hygiene rating on a restaurant door. **A** means the place holds its meetings and pays out properly. **Z** means it did not hold the meeting the law requires, or paid nothing, or has eaten through its own capital. You are still allowed to eat there. Nobody will lend you money to do it.

### When the price drops and nothing is wrong

This one costs people real money through pure misunderstanding.

Suppose a share is at 120. The company declares a 20% bonus — for every 5 shares you own, you get 1 more free. The next morning the price shows **100**, and the chart draws a cliff.

You have lost nothing. You had 5 shares at 120 = 600. You now have 6 shares at 100 = 600. Identical.

Panic-selling into that "crash" is one of the most common unforced errors on the DSE. **Before you react to any gap down, check whether the share just went ex-dividend, ex-bonus, or ex-rights.** Ninety percent of inexplicable drops are this.`,
      bn: `আবার বেকারিতে ফিরি।

**প্রাথমিক বাজার:** বেকারি আপনার কাছে একটি শেয়ার বিক্রি করে এবং আপনার টাকায় একটি চুলা কেনে।
**মাধ্যমিক বাজার:** আপনি ঐ শেয়ার প্রতিবেশীর কাছে বিক্রি করেন। বেকারি এতে জড়িত নয়।

কিন্তু দুটি একটি দড়ি দিয়ে বাঁধা। বেকারির শেয়ার যদি চলতি ও দামি হয়, আমাদের বেকার ব্যবসার সামান্য অংশ অনেক টাকায় বেচতে পারেন, তাই তিনি ইস্যু করেন। বেকারির শেয়ার যদি সস্তা ও অবহেলিত হয়, ঐ একই অংশ বেচতে তাঁর প্রায় পুরো দোকানই চলে যায় — তাই তিনি অপেক্ষা করেন। **রাস্তার দামই ঠিক করে নতুন কিছু আদৌ তৈরি হবে কি না।**

### লেবেলের অক্ষরটি

প্রতিটি শেয়ার একটি গ্রেড বহন করে: **A**, **B**, **N**, বা **Z**।

একে রেস্তোরাঁর দরজায় স্বাস্থ্যবিধির রেটিং ভাবুন। **A** মানে জায়গাটি তার সভা করে এবং যথাযথভাবে পরিশোধ করে। **Z** মানে আইনত বাধ্যতামূলক সভাটি করেনি, বা কিছুই দেয়নি, বা নিজের মূলধনই খেয়ে ফেলেছে। আপনি সেখানে খেতে পারবেন। কেউ আপনাকে সেজন্য টাকা ধার দেবে না।

### যখন দাম পড়ে অথচ কিছুই ভুল নয়

এটি নিছক ভুল বোঝাবুঝিতে মানুষের প্রকৃত টাকা খরচ করায়।

ধরুন একটি শেয়ার ১২০-এ। কোম্পানি ২০% বোনাস ঘোষণা করে — আপনার প্রতি ৫টি শেয়ারে আরও ১টি বিনামূল্যে। পরদিন সকালে দাম দেখাচ্ছে **১০০**, আর চার্ট একটি খাদ আঁকছে।

আপনি কিছুই হারাননি। আপনার ছিল ১২০ টাকায় ৫টি শেয়ার = ৬০০। এখন আছে ১০০ টাকায় ৬টি শেয়ার = ৬০০। অভিন্ন।

ঐ "ধসে" আতঙ্কিত হয়ে বিক্রি করা ডিএসই-র সবচেয়ে সাধারণ অপ্রয়োজনীয় ভুলগুলোর একটি। **যেকোনো গ্যাপ-ডাউনে প্রতিক্রিয়া দেখানোর আগে দেখুন শেয়ারটি সবে এক্স-ডিভিডেন্ড, এক্স-বোনাস বা এক্স-রাইটস হয়েছে কি না।** অব্যাখ্যাত পতনের নব্বই শতাংশ এটিই।`,
    },

    example: {
      en: `### One company, one AGM, three adjustments

A pharmaceutical scrip closes at **BDT 120** the day before its record date. At the AGM the company declared:

- **25% cash dividend** on face value BDT 10 → BDT 2.50 per share
- **20% stock dividend** (bonus) → 1 new share for every 5 held

**Step through what a holder of 500 shares owns.**

| | Before | After |
|---|---|---|
| Shares held | 500 | 600 |
| Price per share | 120.00 | 97.92 |
| Value of shares | 60,000 | 58,750 |
| Cash received | — | 1,250 |
| **Total** | **60,000** | **60,000** |

The screen shows a fall from 120 to 97.92 — **an 18.4% drop**. Nothing was lost. The 1,250 in cash plus 100 extra shares exactly replaces the price decline.

**The adjustment:**
$$P_{ex} = \\frac{120 - 2.50}{1 + 0.20} = \\frac{117.50}{1.20} = 97.92$$

Note the order: **cash comes off first, then the bonus divides.** Doing it the other way round gives 97.50 — close enough to look right, and wrong.

### Now a rights issue

Six months later the same company announces a **1:2 rights issue at BDT 60** — one new share for every two held, subscribed at 60 against a market price of 120.

$$\\text{TERP} = \\frac{(2 \\times 120) + (1 \\times 60)}{2 + 1} = \\frac{300}{3} = \\text{BDT } 100$$

$$\\text{Value of one right} = 120 - 100 = \\text{BDT } 20$$

**What this means for you.** If you subscribe, you pay 60 for a share worth 100 — you capture the 20 per right on your two existing shares. If you *do not* subscribe, your holding reprices from 120 to 100 and you receive nothing for it. **A rights issue you ignore is a direct transfer of your wealth to those who subscribe.**

This is not a subtlety. It is the most reliable way for a passive retail holder on the DSE to lose money while doing nothing wrong in any other respect.

### Why the category letter is not cosmetic

Two textile scrips, both around BDT 18, both loss-making last year.

| | Scrip P (B category) | Scrip Q (Z category) |
|---|---|---|
| AGM held | Yes | No, two years running |
| Last dividend | 5% cash | None |
| Margin eligible | Usually | No |
| Settlement | T+2 | T+3 |
| Natural buyer base | Retail + some institutions | Retail speculators only |

They look identical on a price chart. They are not the same instrument. Q cannot be bought on margin, which removes a whole class of buyer, which is why its rallies are thinner and its falls are steeper. And if P is ever *downgraded* to Z, every margin holder must liquidate at once — into a market with no margin buyers left to absorb it.

**Category migration is a forced-seller event with a published trigger.** It is on the DSE website. Almost nobody watches it.`,
      bn: `### একটি কোম্পানি, একটি এজিএম, তিনটি সমন্বয়

একটি ওষুধ স্ক্রিপ তার রেকর্ড তারিখের আগের দিন **১২০ টাকায়** বন্ধ হয়। এজিএমে কোম্পানি ঘোষণা করেছে:

- অভিহিত মূল্য ১০ টাকার ওপর **২৫% নগদ লভ্যাংশ** → শেয়ারপ্রতি ২.৫০ টাকা
- **২০% স্টক লভ্যাংশ** (বোনাস) → প্রতি ৫টিতে ১টি নতুন শেয়ার

**৫০০ শেয়ারের একজন ধারকের কী আছে, ধাপে ধাপে দেখুন।**

| | আগে | পরে |
|---|---|---|
| ধারণকৃত শেয়ার | ৫০০ | ৬০০ |
| শেয়ারপ্রতি দাম | ১২০.০০ | ৯৭.৯২ |
| শেয়ারের মূল্য | ৬০,০০০ | ৫৮,৭৫০ |
| প্রাপ্ত নগদ | — | ১,২৫০ |
| **মোট** | **৬০,০০০** | **৬০,০০০** |

পর্দায় দেখাচ্ছে ১২০ থেকে ৯৭.৯২-এ পতন — **১৮.৪% পতন**। কিছুই হারায়নি। ১,২৫০ টাকা নগদ ও অতিরিক্ত ১০০ শেয়ার ঠিক ঐ দরপতনের সমান।

**সমন্বয়:**
$$P_{ex} = \\frac{120 - 2.50}{1 + 0.20} = \\frac{117.50}{1.20} = 97.92$$

ক্রম লক্ষ করুন: **আগে নগদ বাদ যায়, তারপর বোনাস ভাগ করে।** উল্টো করলে ৯৭.৫০ আসে — দেখতে যথেষ্ট কাছাকাছি, এবং ভুল।

### এবার একটি রাইটস ইস্যু

ছয় মাস পরে একই কোম্পানি **৬০ টাকায় ১:২ রাইটস ইস্যু** ঘোষণা করে — প্রতি দুটিতে একটি নতুন শেয়ার, ১২০ টাকা বাজারমূল্যের বিপরীতে ৬০ টাকায় চাঁদা।

$$\\text{TERP} = \\frac{(2 \\times 120) + (1 \\times 60)}{2 + 1} = \\frac{300}{3} = ১০০ \\text{ টাকা}$$

$$\\text{একটি রাইটের মূল্য} = 120 - 100 = ২০ \\text{ টাকা}$$

**আপনার জন্য এর অর্থ।** চাঁদা দিলে আপনি ১০০ টাকা মূল্যের শেয়ার ৬০ টাকায় পান — আপনার দুটি বিদ্যমান শেয়ারে প্রতি রাইটে ২০ টাকা ধরে ফেলেন। চাঁদা *না* দিলে আপনার মালিকানা ১২০ থেকে ১০০-এ পুনর্মূল্যায়িত হয় এবং তার বিনিময়ে আপনি কিছুই পান না। **আপনি যে রাইটস ইস্যু উপেক্ষা করেন তা যাঁরা চাঁদা দেন তাঁদের কাছে আপনার সম্পদের সরাসরি স্থানান্তর।**

এটি কোনো সূক্ষ্মতা নয়। ডিএসই-তে একজন নিষ্ক্রিয় খুচরা ধারকের অন্য সব দিকে নির্ভুল থেকেও টাকা হারানোর এটিই সবচেয়ে নির্ভরযোগ্য উপায়।

### কেন শ্রেণি-অক্ষর প্রসাধনী নয়

দুটি বস্ত্র স্ক্রিপ, দুটোই প্রায় ১৮ টাকায়, দুটোই গত বছর লোকসানে।

| | স্ক্রিপ P (B শ্রেণি) | স্ক্রিপ Q (Z শ্রেণি) |
|---|---|---|
| এজিএম হয়েছে | হ্যাঁ | না, টানা দুই বছর |
| সর্বশেষ লভ্যাংশ | ৫% নগদ | নেই |
| মার্জিন যোগ্য | সাধারণত | না |
| নিষ্পত্তি | T+২ | T+৩ |
| স্বাভাবিক ক্রেতা ভিত্তি | খুচরা + কিছু প্রতিষ্ঠান | কেবল খুচরা ফটকাবাজ |

মূল্য চার্টে দুটিকে অভিন্ন দেখায়। দুটি এক উপকরণ নয়। Q মার্জিনে কেনা যায় না, যা একটি সম্পূর্ণ ক্রেতা শ্রেণিকে সরিয়ে দেয়, আর সে কারণেই এর উত্থান পাতলা ও পতন খাড়া। আর P যদি কখনো Z-এ **অবনমিত** হয়, প্রতিটি মার্জিন ধারককে একসঙ্গে বিক্রি করতে হবে — এমন এক বাজারে যেখানে শোষণ করার মতো কোনো মার্জিন ক্রেতা আর অবশিষ্ট নেই।

**শ্রেণি পরিবর্তন একটি প্রকাশিত ট্রিগারসহ বাধ্যতামূলক-বিক্রেতা ঘটনা।** এটি ডিএসই ওয়েবসাইটে আছে। প্রায় কেউই এটি দেখে না।`,
    },

    formula: {
      en: `**Ex-dividend price** (cash dividend $D$ per share):
$$P_{ex} = P_{cum} - D, \\qquad D = \\text{Face Value} \\times \\frac{\\text{Dividend \\%}}{100}$$

**Ex-bonus price** (stock dividend at ratio $b$, expressed as a fraction):
$$P_{ex} = \\frac{P_{cum}}{1 + b}$$

**Combined cash and bonus** — cash comes off first, then the bonus divides:
$$P_{ex} = \\frac{P_{cum} - D}{1 + b}$$

**Theoretical Ex-Rights Price (TERP)** — $N_o$ existing shares, $N_n$ new shares at subscription price $P_s$:
$$\\text{TERP} = \\frac{N_o \\times P_{cum} + N_n \\times P_s}{N_o + N_n}$$

**Value of one right:**
$$R = P_{cum} - \\text{TERP}$$

**Apparent fall versus real loss.** The percentage the chart shows:
$$\\text{Apparent Fall} = \\frac{P_{cum} - P_{ex}}{P_{cum}} \\times 100$$

The real economic change to a holder who receives the entitlement is **zero**. Any difference between the two is the measure of how badly a naive price chart misleads.

**Capital recycling constraint.** With settlement at $T+n$, the maximum number of complete round trips in $d$ trading days is:
$$\\text{Turns} = \\frac{d}{n + 1}$$`,
      bn: `**এক্স-ডিভিডেন্ড মূল্য** (শেয়ারপ্রতি নগদ লভ্যাংশ $D$):
$$P_{ex} = P_{cum} - D, \\qquad D = \\text{অভিহিত মূল্য} \\times \\frac{\\text{লভ্যাংশ \\%}}{100}$$

**এক্স-বোনাস মূল্য** ($b$ অনুপাতে স্টক লভ্যাংশ, ভগ্নাংশে প্রকাশিত):
$$P_{ex} = \\frac{P_{cum}}{1 + b}$$

**নগদ ও বোনাস একসঙ্গে** — আগে নগদ বাদ যায়, তারপর বোনাস ভাগ করে:
$$P_{ex} = \\frac{P_{cum} - D}{1 + b}$$

**তাত্ত্বিক এক্স-রাইটস মূল্য (TERP)** — $N_o$ বিদ্যমান শেয়ার, চাঁদা মূল্য $P_s$-এ $N_n$ নতুন শেয়ার:
$$\\text{TERP} = \\frac{N_o \\times P_{cum} + N_n \\times P_s}{N_o + N_n}$$

**একটি রাইটের মূল্য:**
$$R = P_{cum} - \\text{TERP}$$

**আপাত পতন বনাম প্রকৃত ক্ষতি।** চার্ট যে শতাংশ দেখায়:
$$\\text{আপাত পতন} = \\frac{P_{cum} - P_{ex}}{P_{cum}} \\times 100$$

প্রাপ্য গ্রহণকারী ধারকের প্রকৃত অর্থনৈতিক পরিবর্তন **শূন্য**। দুটির মধ্যে যেকোনো পার্থক্যই মাপে একটি সরল মূল্য চার্ট কতটা খারাপভাবে বিভ্রান্ত করে।

**মূলধন পুনর্ব্যবহারের সীমা।** $T+n$ নিষ্পত্তিতে, $d$ লেনদেন দিবসে সর্বোচ্চ সম্পূর্ণ রাউন্ড ট্রিপের সংখ্যা:
$$\\text{টার্ন} = \\frac{d}{n + 1}$$`,
    },

    manual: {
      en: `**Scenario.** Share closes at BDT 120 before record date. Face value BDT 10. Declared: 25% cash dividend and 20% stock dividend. You hold 500 shares.

**Step 1 — Cash dividend per share:**
$$D = 10 \\times \\frac{25}{100} = \\text{BDT } 2.50$$

**Step 2 — Total cash received:**
$$500 \\times 2.50 = \\text{BDT } 1{,}250$$

**Step 3 — Bonus shares received:**
$$500 \\times 0.20 = 100 \\text{ shares} \\quad \\Rightarrow \\quad 600 \\text{ shares held}$$

**Step 4 — Ex-price, cash first then bonus:**
$$P_{ex} = \\frac{120 - 2.50}{1.20} = \\frac{117.50}{1.20} = \\text{BDT } 97.92$$

**Step 5 — Verify wealth is unchanged:**
$$600 \\times 97.92 + 1{,}250 = 58{,}750 + 1{,}250 = \\text{BDT } 60{,}000$$

Before: $500 \\times 120 = \\text{BDT } 60{,}000$. **Identical.**

**Step 6 — Apparent fall on the chart:**
$$\\frac{120 - 97.92}{120} \\times 100 = 18.4\\%$$

---

**Now the rights issue.** 1:2 at BDT 60, market price 120.

**Step 7 — TERP:**
$$\\text{TERP} = \\frac{(2 \\times 120) + (1 \\times 60)}{3} = \\frac{240 + 60}{3} = \\text{BDT } 100$$

**Step 8 — Value of one right:**
$$R = 120 - 100 = \\text{BDT } 20$$

**Step 9 — The cost of ignoring it.** You hold 500 shares, entitled to 250 rights.

- **Subscribe:** pay $250 \\times 60 = 15{,}000$. Hold 750 shares at 100 = 75,000. Started with 60,000, added 15,000 cash → 75,000. **Neutral.**
- **Ignore:** hold 500 shares at 100 = **50,000**. You began with 60,000.

**Ignoring the rights issue cost BDT 10,000 — a sixth of the position — while the company did nothing wrong and the business did not change.**

**Step 10 — Settlement constraint.** At T+2, over 20 trading days:
$$\\text{Turns} = \\frac{20}{3} = 6.67$$

You cannot run more than about six complete round trips a month regardless of how many signals you see. **Strategy turnover is capped by plumbing, not by conviction.**`,
      bn: `**পরিস্থিতি।** রেকর্ড তারিখের আগে শেয়ার ১২০ টাকায় বন্ধ। অভিহিত মূল্য ১০ টাকা। ঘোষিত: ২৫% নগদ লভ্যাংশ ও ২০% স্টক লভ্যাংশ। আপনার হাতে ৫০০ শেয়ার।

**ধাপ ১ — শেয়ারপ্রতি নগদ লভ্যাংশ:**
$$D = 10 \\times \\frac{25}{100} = ২.৫০ \\text{ টাকা}$$

**ধাপ ২ — মোট প্রাপ্ত নগদ:**
$$500 \\times 2.50 = ১{,}২৫০ \\text{ টাকা}$$

**ধাপ ৩ — প্রাপ্ত বোনাস শেয়ার:**
$$500 \\times 0.20 = 100 \\text{ শেয়ার} \\quad \\Rightarrow \\quad 600 \\text{ শেয়ার}$$

**ধাপ ৪ — এক্স-মূল্য, আগে নগদ তারপর বোনাস:**
$$P_{ex} = \\frac{120 - 2.50}{1.20} = ৯৭.৯২ \\text{ টাকা}$$

**ধাপ ৫ — সম্পদ অপরিবর্তিত কি না যাচাই:**
$$600 \\times 97.92 + 1{,}250 = 58{,}750 + 1{,}250 = ৬০{,}০০০ \\text{ টাকা}$$

আগে: $500 \\times 120 = ৬০{,}০০০$ টাকা। **অভিন্ন।**

**ধাপ ৬ — চার্টে আপাত পতন:**
$$\\frac{120 - 97.92}{120} \\times 100 = 18.4\\%$$

---

**এবার রাইটস ইস্যু।** ৬০ টাকায় ১:২, বাজারমূল্য ১২০।

**ধাপ ৭ — TERP:**
$$\\text{TERP} = \\frac{(2 \\times 120) + (1 \\times 60)}{3} = ১০০ \\text{ টাকা}$$

**ধাপ ৮ — একটি রাইটের মূল্য:**
$$R = 120 - 100 = ২০ \\text{ টাকা}$$

**ধাপ ৯ — উপেক্ষা করার খরচ।** আপনার ৫০০ শেয়ার, প্রাপ্য ২৫০ রাইটস।

- **চাঁদা দিলে:** $250 \\times 60 = ১৫{,}০০০$ টাকা দিন। ১০০ টাকায় ৭৫০ শেয়ার = ৭৫,০০০। শুরু ৬০,০০০, যোগ ১৫,০০০ নগদ → ৭৫,০০০। **নিরপেক্ষ।**
- **উপেক্ষা করলে:** ১০০ টাকায় ৫০০ শেয়ার = **৫০,০০০**। আপনি শুরু করেছিলেন ৬০,০০০ দিয়ে।

**রাইটস ইস্যু উপেক্ষা করার খরচ ১০,০০০ টাকা — পজিশনের এক-ষষ্ঠাংশ — অথচ কোম্পানি কোনো ভুল করেনি এবং ব্যবসাও বদলায়নি।**

**ধাপ ১০ — নিষ্পত্তির সীমা।** T+২-তে, ২০ লেনদেন দিবসে:
$$\\text{টার্ন} = \\frac{20}{3} = 6.67$$

আপনি যত সংকেতই দেখুন, মাসে প্রায় ছয়টির বেশি সম্পূর্ণ রাউন্ড ট্রিপ চালাতে পারবেন না। **কৌশলের টার্নওভার প্রত্যয় নয়, নলব্যবস্থার সীমায় বাঁধা।**`,
    },

    excel: {
      en: `\`\`\`
A1: CUM PRICE (before adjustment)    B1: 120

A3: — Cash Dividend —
A4: Face Value (BDT)                 B4: 10
A5: Cash Dividend (% of face)        B5: 25
A6: Dividend per Share (BDT)         B6: =B4*B5/100
A7: Ex-Dividend Price                B7: =B1-B6

A9: — Stock Dividend (Bonus) —
A10: Bonus Ratio (%)                 B10: 20
A11: Ex-Bonus Price                  B11: =B1/(1+B10/100)

A13: — Rights Issue —
A14: Existing Shares (N old)         B14: 2
A15: New Rights Shares (N new)       B15: 1
A16: Rights Subscription Price       B16: 60
A17: TERP                            B17: =(B14*B1+B15*B16)/(B14+B15)
A18: Value of One Right              B18: =B1-B17

A20: — Combined (cash + bonus) —
A21: Adjusted Price                  B21: =(B1-B6)/(1+B10/100)

A23: Apparent Fall (%)               B23: =(B1-B21)/B1*100
A24: REAL Economic Loss?             B24: "No - mechanical adjustment, not a loss"
\`\`\`

**B21 is the cell that matters**, and note it applies cash *before* dividing by the bonus. Reversing the order gives 97.50 instead of 97.92 — a difference small enough to look like a rounding error and large enough to corrupt every downstream return calculation.

Keep this sheet open during AGM season. Every time a holding gaps down, put the numbers in before you touch the sell button.`,
      bn: `\`\`\`
A1: কাম মূল্য (সমন্বয়ের আগে)        B1: 120

A3: — নগদ লভ্যাংশ —
A4: অভিহিত মূল্য (টাকা)             B4: 10
A5: নগদ লভ্যাংশ (অভিহিতের %)        B5: 25
A6: শেয়ারপ্রতি লভ্যাংশ (টাকা)       B6: =B4*B5/100
A7: এক্স-ডিভিডেন্ড মূল্য            B7: =B1-B6

A9: — স্টক লভ্যাংশ (বোনাস) —
A10: বোনাস অনুপাত (%)               B10: 20
A11: এক্স-বোনাস মূল্য               B11: =B1/(1+B10/100)

A13: — রাইটস ইস্যু —
A14: বিদ্যমান শেয়ার (N old)         B14: 2
A15: নতুন রাইটস শেয়ার (N new)       B15: 1
A16: রাইটস চাঁদা মূল্য              B16: 60
A17: TERP                            B17: =(B14*B1+B15*B16)/(B14+B15)
A18: একটি রাইটের মূল্য              B18: =B1-B17

A20: — সম্মিলিত (নগদ + বোনাস) —
A21: সমন্বিত মূল্য                   B21: =(B1-B6)/(1+B10/100)

A23: আপাত পতন (%)                    B23: =(B1-B21)/B1*100
A24: প্রকৃত অর্থনৈতিক ক্ষতি?          B24: "No - mechanical adjustment, not a loss"
\`\`\`

**B21-ই গুরুত্বপূর্ণ ঘরটি**, এবং লক্ষ করুন এটি বোনাস দিয়ে ভাগ করার *আগে* নগদ প্রয়োগ করে। ক্রম উল্টালে ৯৭.৯২-এর বদলে ৯৭.৫০ আসে — পার্থক্যটি এতই ছোট যে গোল করার ভুল মনে হয়, আর এতই বড় যে পরবর্তী প্রতিটি রিটার্ন হিসাব নষ্ট করে দেয়।

এজিএম মৌসুমে এই শিটটি খোলা রাখুন। যতবার কোনো হোল্ডিং গ্যাপ-ডাউন করে, বিক্রির বোতাম ছোঁয়ার আগে সংখ্যাগুলো বসান।`,
    },

    python: {
      en: `\`\`\`python
"""
Chapter 4 — Corporate action price adjustments and the cost of ignoring rights.
Educational.
"""
from dataclasses import dataclass


@dataclass
class CorporateAction:
    """A declared action, and what it does to price and share count."""
    cum_price: float
    face_value: float = 10.0
    cash_dividend_pct: float = 0.0   # % of face value
    bonus_pct: float = 0.0           # % stock dividend

    @property
    def dividend_per_share(self) -> float:
        return self.face_value * self.cash_dividend_pct / 100

    @property
    def ex_price(self) -> float:
        """Cash comes off first, then the bonus divides. Order matters."""
        return (self.cum_price - self.dividend_per_share) / (1 + self.bonus_pct / 100)

    @property
    def apparent_fall_pct(self) -> float:
        return (self.cum_price - self.ex_price) / self.cum_price * 100

    def wealth_check(self, shares_held: int) -> dict:
        """Confirm the holder's total wealth is unchanged by the adjustment."""
        before = shares_held * self.cum_price
        new_shares = shares_held * (1 + self.bonus_pct / 100)
        cash = shares_held * self.dividend_per_share
        after = new_shares * self.ex_price + cash
        return {
            "before": before,
            "shares_after": new_shares,
            "cash_received": cash,
            "after": after,
            "difference": after - before,
        }


def terp(cum_price: float, n_old: int, n_new: int, sub_price: float) -> float:
    """Theoretical ex-rights price."""
    return (n_old * cum_price + n_new * sub_price) / (n_old + n_new)


def rights_outcome(shares: int, cum_price: float, n_old: int,
                   n_new: int, sub_price: float) -> dict:
    """What subscribing versus ignoring a rights issue is worth."""
    p = terp(cum_price, n_old, n_new, sub_price)
    entitled = shares * n_new / n_old
    start = shares * cum_price

    subscribed_value = (shares + entitled) * p
    cash_paid = entitled * sub_price
    ignored_value = shares * p

    return {
        "terp": p,
        "right_value": cum_price - p,
        "start_value": start,
        "subscribe_net": subscribed_value - cash_paid,
        "ignore_net": ignored_value,
        "cost_of_ignoring": start - ignored_value,
    }


def max_turns(trading_days: int, settlement_n: int) -> float:
    """Complete round trips possible under a T+n settlement cycle."""
    return trading_days / (settlement_n + 1)


if __name__ == "__main__":
    ca = CorporateAction(cum_price=120.0, cash_dividend_pct=25.0, bonus_pct=20.0)

    print(f"Cum price            : BDT {ca.cum_price:.2f}")
    print(f"Dividend per share   : BDT {ca.dividend_per_share:.2f}")
    print(f"Ex price             : BDT {ca.ex_price:.2f}")
    print(f"Apparent fall        : {ca.apparent_fall_pct:.1f}%")
    print()

    w = ca.wealth_check(500)
    print(f"Wealth before        : BDT {w['before']:,.2f}")
    print(f"Shares after         : {w['shares_after']:.0f}")
    print(f"Cash received        : BDT {w['cash_received']:,.2f}")
    print(f"Wealth after         : BDT {w['after']:,.2f}")
    print(f"Real change          : BDT {w['difference']:,.2f}")
    print()

    r = rights_outcome(shares=500, cum_price=120.0, n_old=2, n_new=1, sub_price=60.0)
    print(f"TERP                 : BDT {r['terp']:.2f}")
    print(f"Value of one right   : BDT {r['right_value']:.2f}")
    print(f"Start value          : BDT {r['start_value']:,.2f}")
    print(f"If you subscribe     : BDT {r['subscribe_net']:,.2f}")
    print(f"If you ignore        : BDT {r['ignore_net']:,.2f}")
    print(f"COST OF IGNORING     : BDT {r['cost_of_ignoring']:,.2f}")
    print()

    for n in (1, 2, 3):
        print(f"T+{n} settlement -> {max_turns(20, n):.2f} round trips per 20 days")
\`\`\`

**The line that matters is \`Real change\`.** It prints 0.00. An 18.4% fall on the chart, and zero change in wealth. Any strategy, indicator, or stop-loss that reads raw unadjusted prices will treat this as an 18.4% loss and act on it. **This is why adjusted price series exist, and why backtests run on unadjusted DSE data are worthless.**`,
      bn: `\`\`\`python
"""
অধ্যায় ৪ — কর্পোরেট অ্যাকশনে মূল্য সমন্বয় ও রাইটস উপেক্ষা করার খরচ।
শিক্ষামূলক।
"""
from dataclasses import dataclass


@dataclass
class CorporateAction:
    """একটি ঘোষিত পদক্ষেপ, এবং তা দাম ও শেয়ার সংখ্যায় যা করে।"""
    cum_price: float
    face_value: float = 10.0
    cash_dividend_pct: float = 0.0   # অভিহিত মূল্যের %
    bonus_pct: float = 0.0           # % স্টক লভ্যাংশ

    @property
    def dividend_per_share(self) -> float:
        return self.face_value * self.cash_dividend_pct / 100

    @property
    def ex_price(self) -> float:
        """আগে নগদ বাদ যায়, তারপর বোনাস ভাগ করে। ক্রম গুরুত্বপূর্ণ।"""
        return (self.cum_price - self.dividend_per_share) / (1 + self.bonus_pct / 100)

    @property
    def apparent_fall_pct(self) -> float:
        return (self.cum_price - self.ex_price) / self.cum_price * 100

    def wealth_check(self, shares_held: int) -> dict:
        """সমন্বয়ে ধারকের মোট সম্পদ অপরিবর্তিত কি না নিশ্চিত করা।"""
        before = shares_held * self.cum_price
        new_shares = shares_held * (1 + self.bonus_pct / 100)
        cash = shares_held * self.dividend_per_share
        after = new_shares * self.ex_price + cash
        return {
            "before": before,
            "shares_after": new_shares,
            "cash_received": cash,
            "after": after,
            "difference": after - before,
        }


def terp(cum_price: float, n_old: int, n_new: int, sub_price: float) -> float:
    """তাত্ত্বিক এক্স-রাইটস মূল্য।"""
    return (n_old * cum_price + n_new * sub_price) / (n_old + n_new)


def rights_outcome(shares: int, cum_price: float, n_old: int,
                   n_new: int, sub_price: float) -> dict:
    """রাইটস ইস্যুতে চাঁদা দেওয়া বনাম উপেক্ষা করার মূল্য।"""
    p = terp(cum_price, n_old, n_new, sub_price)
    entitled = shares * n_new / n_old
    start = shares * cum_price

    subscribed_value = (shares + entitled) * p
    cash_paid = entitled * sub_price
    ignored_value = shares * p

    return {
        "terp": p,
        "right_value": cum_price - p,
        "start_value": start,
        "subscribe_net": subscribed_value - cash_paid,
        "ignore_net": ignored_value,
        "cost_of_ignoring": start - ignored_value,
    }


def max_turns(trading_days: int, settlement_n: int) -> float:
    """T+n নিষ্পত্তি চক্রে সম্ভব সম্পূর্ণ রাউন্ড ট্রিপ।"""
    return trading_days / (settlement_n + 1)


if __name__ == "__main__":
    ca = CorporateAction(cum_price=120.0, cash_dividend_pct=25.0, bonus_pct=20.0)

    print(f"Cum price            : BDT {ca.cum_price:.2f}")
    print(f"Dividend per share   : BDT {ca.dividend_per_share:.2f}")
    print(f"Ex price             : BDT {ca.ex_price:.2f}")
    print(f"Apparent fall        : {ca.apparent_fall_pct:.1f}%")
    print()

    w = ca.wealth_check(500)
    print(f"Wealth before        : BDT {w['before']:,.2f}")
    print(f"Shares after         : {w['shares_after']:.0f}")
    print(f"Cash received        : BDT {w['cash_received']:,.2f}")
    print(f"Wealth after         : BDT {w['after']:,.2f}")
    print(f"Real change          : BDT {w['difference']:,.2f}")
    print()

    r = rights_outcome(shares=500, cum_price=120.0, n_old=2, n_new=1, sub_price=60.0)
    print(f"TERP                 : BDT {r['terp']:.2f}")
    print(f"Value of one right   : BDT {r['right_value']:.2f}")
    print(f"Start value          : BDT {r['start_value']:,.2f}")
    print(f"If you subscribe     : BDT {r['subscribe_net']:,.2f}")
    print(f"If you ignore        : BDT {r['ignore_net']:,.2f}")
    print(f"COST OF IGNORING     : BDT {r['cost_of_ignoring']:,.2f}")
    print()

    for n in (1, 2, 3):
        print(f"T+{n} settlement -> {max_turns(20, n):.2f} round trips per 20 days")
\`\`\`

**গুরুত্বপূর্ণ লাইনটি হলো \`Real change\`।** এটি ০.০০ ছাপে। চার্টে ১৮.৪% পতন, আর সম্পদে শূন্য পরিবর্তন। যে কৌশল, নির্দেশক বা স্টপ-লস অসমন্বিত কাঁচা দাম পড়ে, সেটি একে ১৮.৪% ক্ষতি ধরে নিয়ে ব্যবস্থা নেবে। **এ কারণেই সমন্বিত মূল্য সিরিজ থাকে, এবং এ কারণেই অসমন্বিত ডিএসই ডেটায় চালানো ব্যাকটেস্ট মূল্যহীন।**`,
    },

    mistakes: {
      en: `1. **Panic-selling an ex-dividend or ex-bonus gap.** The most expensive arithmetic error available on this exchange. Check the record date before you check your emotions.
2. **Ignoring a rights issue.** Not subscribing is not "staying neutral" — it is a wealth transfer to those who do subscribe, mechanically and with certainty. If you cannot fund it, sell the entitlement if the market allows, or sell the position before it goes ex.
3. **Applying the bonus adjustment before the cash dividend.** The order is cash first, then divide. Reversing it corrupts every return figure downstream.
4. **Backtesting on unadjusted price data.** Every corporate action appears as a crash. Your strategy will "learn" to sell into dividend distributions, which is the opposite of what it should do.
5. **Never looking at the category letter.** A and Z are structurally different instruments with different buyer bases, margin eligibility, and settlement. They are not distinguished on a price chart.
6. **Ignoring category migration announcements.** An A → Z downgrade forces every margin holder to liquidate simultaneously, into a market that just lost its margin buyers. It is announced in advance.
7. **Planning turnover the settlement cycle cannot support.** If your strategy needs fifteen round trips a month, T+2 makes it arithmetically impossible. Design within the plumbing.`,
      bn: `১. **এক্স-ডিভিডেন্ড বা এক্স-বোনাস গ্যাপে আতঙ্কিত হয়ে বিক্রি করা।** এই এক্সচেঞ্জে সবচেয়ে ব্যয়বহুল পাটিগণিতের ভুল। আবেগ দেখার আগে রেকর্ড তারিখ দেখুন।
২. **রাইটস ইস্যু উপেক্ষা করা।** চাঁদা না দেওয়া "নিরপেক্ষ থাকা" নয় — এটি যাঁরা চাঁদা দেন তাঁদের কাছে যান্ত্রিকভাবে ও নিশ্চিতভাবে সম্পদ স্থানান্তর। অর্থায়ন করতে না পারলে বাজার অনুমতি দিলে প্রাপ্যটি বিক্রি করুন, নয়তো এক্স হওয়ার আগেই পজিশন বিক্রি করুন।
৩. **নগদ লভ্যাংশের আগে বোনাস সমন্বয় প্রয়োগ করা।** ক্রম হলো আগে নগদ, তারপর ভাগ। উল্টালে পরবর্তী প্রতিটি রিটার্ন সংখ্যা নষ্ট হয়।
৪. **অসমন্বিত মূল্য ডেটায় ব্যাকটেস্ট করা।** প্রতিটি কর্পোরেট অ্যাকশন ধস হিসেবে দেখা দেয়। আপনার কৌশল লভ্যাংশ বণ্টনে বিক্রি করতে "শিখবে", যা যা করা উচিত তার ঠিক উল্টো।
৫. **শ্রেণি-অক্ষর কখনো না দেখা।** A ও Z কাঠামোগতভাবে ভিন্ন উপকরণ — ভিন্ন ক্রেতা ভিত্তি, মার্জিন যোগ্যতা ও নিষ্পত্তিসহ। মূল্য চার্টে এদের আলাদা করা যায় না।
৬. **শ্রেণি পরিবর্তনের ঘোষণা উপেক্ষা করা।** A → Z অবনমন প্রতিটি মার্জিন ধারককে একসঙ্গে বিক্রি করতে বাধ্য করে, এমন বাজারে যে সবে তার মার্জিন ক্রেতাদের হারিয়েছে। এটি আগেই ঘোষিত হয়।
৭. **নিষ্পত্তি চক্র যা সমর্থন করে না এমন টার্নওভার পরিকল্পনা করা।** আপনার কৌশলে মাসে পনেরোটি রাউন্ড ট্রিপ দরকার হলে T+২ তা পাটিগাণিতিকভাবেই অসম্ভব করে। নলব্যবস্থার ভেতরে নকশা করুন।`,
    },

    tips: {
      en: `- **Keep a corporate-action calendar for everything you hold.** Record date, ex-date, dividend %, bonus %, any rights. Five minutes per holding per year, and it eliminates an entire category of loss.
- **Set an alert for the spot-market transition.** When a share moves to spot, the record date is imminent. That is your cue to decide on rights participation, not the morning of the gap.
- **Check the category letter before every purchase, and again quarterly on holdings.** It is on the dsebd.org page for the scrip. Migration is the signal, not the level.
- **Never run a technical indicator on unadjusted data.** Either use an adjusted series or manually patch the corporate-action dates. On the DSE this often means building your own adjusted series — which is exactly what Part VII's Python chapters do.
- **Treat a deep-discount rights issue as a question about the company, not a gift.** Why does it need capital at half the market price? A rights issue at a steep discount from a company with strong cash flow deserves an explanation you can find in the notice.
- **When a stock gaps down, your first three checks in order:** record date, category change, block/negotiated trade. Only after all three come back clean should you consider it a genuine price move.`,
      bn: `- **আপনার প্রতিটি হোল্ডিংয়ের জন্য একটি কর্পোরেট-অ্যাকশন ক্যালেন্ডার রাখুন।** রেকর্ড তারিখ, এক্স-তারিখ, লভ্যাংশ %, বোনাস %, যেকোনো রাইটস। প্রতি হোল্ডিংয়ে বছরে পাঁচ মিনিট, আর এটি একটি সম্পূর্ণ শ্রেণির ক্ষতি দূর করে।
- **স্পট-মার্কেটে স্থানান্তরের জন্য অ্যালার্ট সেট করুন।** কোনো শেয়ার স্পটে গেলে রেকর্ড তারিখ আসন্ন। রাইটসে অংশগ্রহণের সিদ্ধান্ত নেওয়ার সংকেত সেটিই, গ্যাপের সকাল নয়।
- **প্রতিটি ক্রয়ের আগে এবং হোল্ডিংয়ে ত্রৈমাসিকভাবে শ্রেণি-অক্ষর দেখুন।** এটি স্ক্রিপের dsebd.org পাতায় আছে। স্তর নয়, পরিবর্তনটাই সংকেত।
- **অসমন্বিত ডেটায় কখনো টেকনিক্যাল নির্দেশক চালাবেন না।** হয় সমন্বিত সিরিজ ব্যবহার করুন, নয়তো কর্পোরেট-অ্যাকশন তারিখগুলো হাতে ঠিক করুন। ডিএসই-তে এর অর্থ প্রায়ই নিজের সমন্বিত সিরিজ তৈরি করা — যা পর্ব VII-এর পাইথন অধ্যায়গুলো ঠিক তা-ই করে।
- **গভীর ছাড়ের রাইটস ইস্যুকে উপহার নয়, কোম্পানি সম্পর্কে একটি প্রশ্ন হিসেবে দেখুন।** বাজারমূল্যের অর্ধেকে তার মূলধন দরকার কেন? শক্তিশালী নগদ প্রবাহের কোম্পানির খাড়া ছাড়ে রাইটস ইস্যুর এমন ব্যাখ্যা প্রাপ্য যা আপনি নোটিশে খুঁজে পাবেন।
- **কোনো শেয়ার গ্যাপ-ডাউন করলে আপনার প্রথম তিনটি যাচাই ক্রমানুসারে:** রেকর্ড তারিখ, শ্রেণি পরিবর্তন, ব্লক/আলোচিত লেনদেন। তিনটিই পরিষ্কার এলে তবেই একে প্রকৃত মূল্য পরিবর্তন ভাবুন।`,
    },

    exercises: {
      en: `1. Pick five companies that declared both cash and stock dividends last year. For each, find the cum price on the day before the ex-date and the actual opening price on the ex-date. Compute the theoretical ex-price and compare. How close was the market?
2. For one of those five, compute what a 1,000-share holder's total wealth was the day before and the day after. Confirm it nets to zero change.
3. Find a rights issue from the last three years. Compute TERP and the value of one right. Then find what the share actually traded at on the first ex-rights day. Explain any gap between theory and outcome.
4. For that same rights issue, compute the exact BDT cost to a 2,000-share holder who did not subscribe.
5. Go to dsebd.org and list every company currently in Z category. How many are there? What percentage of listed companies? What does that tell you about the exchange?
6. Find three companies that migrated between categories in the last two years. Chart the price for 30 days either side of the migration announcement. Describe the pattern.
7. Take your own trading over the last three months. Count actual complete round trips. Compare to the theoretical maximum under T+2. Were you constrained by settlement or by your own decision-making?
8. Download 2 years of daily prices for one dividend-paying scrip. Manually build an adjusted series by patching each ex-date. Compute total return from the raw series and from the adjusted series. How large is the error?`,
      bn: `১. গত বছর নগদ ও স্টক উভয় লভ্যাংশ ঘোষণা করেছে এমন পাঁচটি কোম্পানি বাছুন। প্রতিটির এক্স-তারিখের আগের দিনের কাম মূল্য ও এক্স-তারিখের প্রকৃত খোলার দাম বের করুন। তাত্ত্বিক এক্স-মূল্য গণনা করে তুলনা করুন। বাজার কতটা কাছাকাছি ছিল?
২. ঐ পাঁচটির একটির জন্য ১,০০০ শেয়ার ধারকের মোট সম্পদ আগের দিন ও পরের দিন কত ছিল গণনা করুন। নিশ্চিত করুন এটি শূন্য পরিবর্তনে দাঁড়ায়।
৩. গত তিন বছরের একটি রাইটস ইস্যু বের করুন। TERP ও একটি রাইটের মূল্য গণনা করুন। তারপর প্রথম এক্স-রাইটস দিনে শেয়ারটি আসলে কত দামে লেনদেন হয়েছিল বের করুন। তত্ত্ব ও ফলাফলের যেকোনো ব্যবধান ব্যাখ্যা করুন।
৪. ঐ একই রাইটস ইস্যুতে চাঁদা না দেওয়া ২,০০০ শেয়ার ধারকের সঠিক টাকার খরচ গণনা করুন।
৫. dsebd.org-এ গিয়ে বর্তমানে Z শ্রেণিতে থাকা প্রতিটি কোম্পানির তালিকা করুন। কতগুলো আছে? তালিকাভুক্ত কোম্পানির শতকরা কত? এটি এক্সচেঞ্জ সম্পর্কে আপনাকে কী বলে?
৬. গত দুই বছরে শ্রেণি পরিবর্তন করেছে এমন তিনটি কোম্পানি বের করুন। পরিবর্তনের ঘোষণার দুই পাশে ৩০ দিনের দাম চার্ট করুন। ধরনটি বর্ণনা করুন।
৭. গত তিন মাসে আপনার নিজের লেনদেন নিন। প্রকৃত সম্পূর্ণ রাউন্ড ট্রিপ গণনা করুন। T+২-তে তাত্ত্বিক সর্বোচ্চের সঙ্গে তুলনা করুন। আপনি নিষ্পত্তিতে আটকে ছিলেন না নিজের সিদ্ধান্ত গ্রহণে?
৮. একটি লভ্যাংশ প্রদানকারী স্ক্রিপের ২ বছরের দৈনিক দাম ডাউনলোড করুন। প্রতিটি এক্স-তারিখ ঠিক করে হাতে একটি সমন্বিত সিরিজ তৈরি করুন। কাঁচা সিরিজ ও সমন্বিত সিরিজ থেকে মোট রিটার্ন গণনা করুন। ভুলটি কত বড়?`,
    },

    summary: {
      en: `- The primary market funds companies; the secondary market transfers ownership and funds nothing — but secondary prices set the terms on which primary issuance is possible, which is why IPO pipelines follow the cycle rather than corporate need.
- Settlement is T+2 for A/B/N and T+3 for Z, with the spot market at T+1. The cycle caps how fast capital recycles: round trips ≈ trading days ÷ (n+1).
- The **A / B / N / Z** category is free, published, and consequential — it governs margin eligibility, settlement speed, and the buyer base. Migration to Z forces simultaneous liquidation by every margin holder.
- Corporate actions adjust price mechanically. Cash first, then bonus: $P_{ex} = (P_{cum} - D)/(1+b)$. A 120 share going ex a 25% cash and 20% bonus opens near 97.92 — an 18.4% apparent fall and **zero** change in wealth.
- TERP $= (N_o P_{cum} + N_n P_s)/(N_o + N_n)$, and the value of a right is $P_{cum} -$ TERP. **Ignoring a rights issue is a certain, mechanical wealth transfer to those who subscribe** — in the worked case, BDT 10,000 on a BDT 60,000 position.
- Unadjusted price series make every corporate action look like a crash, which invalidates indicators and backtests built on them.
- **Discipline established:** before reacting to any gap down, check record date, then category change, then block trades. Only a clean sweep of all three makes it a real price move.`,
      bn: `- প্রাথমিক বাজার কোম্পানিকে অর্থায়ন করে; মাধ্যমিক বাজার মালিকানা হস্তান্তর করে ও কিছুই অর্থায়ন করে না — কিন্তু মাধ্যমিক দামই ঠিক করে কোন শর্তে প্রাথমিক ইস্যু সম্ভব, আর সে কারণেই আইপিও-র সারি কর্পোরেট প্রয়োজন নয়, চক্র অনুসরণ করে।
- নিষ্পত্তি A/B/N-এর জন্য T+২ ও Z-এর জন্য T+৩, স্পট মার্কেট T+১। চক্রটি মূলধন পুনর্ব্যবহারের গতিতে সীমা দেয়: রাউন্ড ট্রিপ ≈ লেনদেন দিবস ÷ (n+১)।
- **A / B / N / Z** শ্রেণি বিনামূল্যের, প্রকাশিত ও পরিণতিবাহী — এটি মার্জিন যোগ্যতা, নিষ্পত্তির গতি ও ক্রেতা ভিত্তি নিয়ন্ত্রণ করে। Z-এ স্থানান্তর প্রতিটি মার্জিন ধারককে একযোগে বিক্রিতে বাধ্য করে।
- কর্পোরেট অ্যাকশন দাম যান্ত্রিকভাবে সমন্বয় করে। আগে নগদ, তারপর বোনাস: $P_{ex} = (P_{cum} - D)/(1+b)$। ২৫% নগদ ও ২০% বোনাসের এক্স হওয়া ১২০ টাকার শেয়ার প্রায় ৯৭.৯২-এ খোলে — ১৮.৪% আপাত পতন এবং সম্পদে **শূন্য** পরিবর্তন।
- TERP $= (N_o P_{cum} + N_n P_s)/(N_o + N_n)$, এবং একটি রাইটের মূল্য $P_{cum} -$ TERP। **রাইটস ইস্যু উপেক্ষা করা যাঁরা চাঁদা দেন তাঁদের কাছে একটি নিশ্চিত, যান্ত্রিক সম্পদ স্থানান্তর** — উদাহরণে ৬০,০০০ টাকার পজিশনে ১০,০০০ টাকা।
- অসমন্বিত মূল্য সিরিজ প্রতিটি কর্পোরেট অ্যাকশনকে ধসের মতো দেখায়, যা তার ওপর নির্মিত নির্দেশক ও ব্যাকটেস্ট অকার্যকর করে দেয়।
- **প্রতিষ্ঠিত শৃঙ্খলা:** যেকোনো গ্যাপ-ডাউনে প্রতিক্রিয়া দেখানোর আগে দেখুন রেকর্ড তারিখ, তারপর শ্রেণি পরিবর্তন, তারপর ব্লক লেনদেন। তিনটিই পরিষ্কার এলে তবেই এটি প্রকৃত মূল্য পরিবর্তন।`,
    },
  },

  interview: [
    {
      q: {
        en: 'How do secondary-market conditions affect primary-market issuance?',
        bn: 'মাধ্যমিক বাজারের অবস্থা প্রাথমিক বাজারের ইস্যুকে কীভাবে প্রভাবিত করে?',
      },
      a: {
        en: 'Secondary prices set the terms on which a company can raise capital. At 25× earnings a company sells a small stake for a lot of money; at 6× the same capital costs a much larger share of the business, so issuance is postponed. This is why IPO pipelines swell in bull markets and empty in bear markets — the driver is the price of capital, not corporate need. The loop also runs the other way: heavy issuance adds supply that depresses secondary prices and closes the window.',
        bn: 'মাধ্যমিক দাম ঠিক করে কোন শর্তে একটি কোম্পানি মূলধন তুলতে পারে। ২৫ গুণ আয়ে কোম্পানি ছোট একটি অংশ অনেক টাকায় বেচে; ৬ গুণে একই মূলধনের জন্য ব্যবসার অনেক বড় অংশ লাগে, তাই ইস্যু স্থগিত হয়। এ কারণেই বুল মার্কেটে আইপিও-র সারি ফুলে ওঠে ও বিয়ার মার্কেটে খালি হয় — চালিকাশক্তি মূলধনের দাম, কর্পোরেট প্রয়োজন নয়। চক্রটি উল্টোদিকেও চলে: অতিরিক্ত ইস্যু সরবরাহ যোগ করে যা মাধ্যমিক দাম চাপে ফেলে ও জানালা বন্ধ করে।',
      },
    },
    {
      q: {
        en: 'A share closes at 120 and opens at 98 the next morning. Walk me through your diagnosis.',
        bn: 'একটি শেয়ার ১২০-এ বন্ধ হয়ে পরদিন সকালে ৯৮-এ খোলে। আপনার রোগনির্ণয় বলুন।',
      },
      a: {
        en: 'First I check whether it went ex on a corporate action. An 18% drop is consistent with a 25% cash dividend plus a 20% bonus on face value 10: (120 − 2.50) / 1.20 = 97.92. If so, nothing was lost — the holder has more shares and cash that exactly offset the decline, and DSE relaxes the circuit that day precisely to allow this adjustment. If there is no record date, I check for a category migration, then for a large block or negotiated trade. Only if all three are clean do I treat it as a genuine repricing requiring a fundamental explanation.',
        bn: 'প্রথমে দেখব এটি কোনো কর্পোরেট অ্যাকশনে এক্স হয়েছে কি না। ১৮% পতন অভিহিত মূল্য ১০-এ ২৫% নগদ লভ্যাংশ ও ২০% বোনাসের সঙ্গে সঙ্গতিপূর্ণ: (১২০ − ২.৫০) / ১.২০ = ৯৭.৯২। তাই হলে কিছুই হারায়নি — ধারকের হাতে বেশি শেয়ার ও নগদ আছে যা পতনটি ঠিক পুষিয়ে দেয়, আর ডিএসই ঐ দিন সার্কিট শিথিল করে ঠিক এই সমন্বয়ের জন্যই। রেকর্ড তারিখ না থাকলে শ্রেণি পরিবর্তন দেখব, তারপর কোনো বড় ব্লক বা আলোচিত লেনদেন। তিনটিই পরিষ্কার হলে তবেই একে প্রকৃত পুনর্মূল্যায়ন ধরব, যার একটি মৌলিক ব্যাখ্যা দরকার।',
      },
    },
    {
      q: {
        en: 'What happens to a holder who ignores a rights issue, and why?',
        bn: 'যে ধারক রাইটস ইস্যু উপেক্ষা করেন তাঁর কী হয়, এবং কেন?',
      },
      a: {
        en: 'Their wealth falls by the value of the rights they let lapse. The share reprices from the cum price to TERP because new shares are issued below market — that dilution happens whether or not they participate. A subscriber pays the discounted price and captures the difference, ending neutral; a non-subscriber suffers the repricing and receives nothing for it. On a 1:2 issue at 60 against a market price of 120, TERP is 100 and each right is worth 20, so a 500-share holder who ignores it loses BDT 10,000 on a BDT 60,000 position. It is a mechanical, certain transfer, not a market risk.',
        bn: 'তাঁরা যে রাইটস নষ্ট হতে দেন তার মূল্য পরিমাণ সম্পদ কমে যায়। শেয়ারটি কাম মূল্য থেকে TERP-এ পুনর্মূল্যায়িত হয় কারণ নতুন শেয়ার বাজারের নিচে ইস্যু হচ্ছে — তাঁরা অংশ নিন বা না নিন ঐ ডাইলিউশন ঘটবেই। চাঁদাদাতা ছাড়ের দাম দিয়ে পার্থক্যটি ধরে ফেলেন, নিরপেক্ষভাবে শেষ করেন; চাঁদা না দেওয়া ব্যক্তি পুনর্মূল্যায়নের ধাক্কা খান এবং বিনিময়ে কিছুই পান না। ১২০ বাজারমূল্যের বিপরীতে ৬০ টাকায় ১:২ ইস্যুতে TERP ১০০ এবং প্রতিটি রাইটের মূল্য ২০, তাই ৫০০ শেয়ার ধারক উপেক্ষা করলে ৬০,০০০ টাকার পজিশনে ১০,০০০ টাকা হারান। এটি বাজার ঝুঁকি নয়, একটি যান্ত্রিক ও নিশ্চিত স্থানান্তর।',
      },
    },
    {
      q: {
        en: 'What does Z category signify, and why does it matter beyond the label?',
        bn: 'Z শ্রেণি কী নির্দেশ করে, এবং লেবেলের বাইরে এটি কেন গুরুত্বপূর্ণ?',
      },
      a: {
        en: 'Z means the company has failed at least one of: holding a legally required AGM, declaring any dividend, remaining operational, or keeping accumulated losses below paid-up capital. It matters because it changes the instrument, not just the description — Z scrips are generally excluded from margin lending and settle more slowly, which removes a whole class of buyer and makes rallies thinner and declines steeper. Migration into Z is the sharper event: every margin holder must liquidate at once, into a market that has simultaneously lost its margin buyers.',
        bn: 'Z মানে কোম্পানিটি অন্তত একটিতে ব্যর্থ হয়েছে: আইনত বাধ্যতামূলক এজিএম করা, কোনো লভ্যাংশ ঘোষণা করা, কার্যকর থাকা, বা পুঞ্জীভূত লোকসান পরিশোধিত মূলধনের নিচে রাখা। এটি গুরুত্বপূর্ণ কারণ এটি কেবল বর্ণনা নয়, উপকরণটিই বদলে দেয় — Z স্ক্রিপ সাধারণত মার্জিন ঋণ থেকে বাদ এবং ধীরে নিষ্পত্তি হয়, যা একটি সম্পূর্ণ ক্রেতা শ্রেণিকে সরিয়ে দেয় এবং উত্থানকে পাতলা ও পতনকে খাড়া করে। Z-এ স্থানান্তর আরও তীক্ষ্ণ ঘটনা: প্রতিটি মার্জিন ধারককে একসঙ্গে বিক্রি করতে হয়, এমন বাজারে যা একই সঙ্গে তার মার্জিন ক্রেতাদের হারিয়েছে।',
      },
    },
    {
      q: {
        en: 'Why can a backtest on raw DSE price data be actively misleading?',
        bn: 'কাঁচা ডিএসই মূল্য ডেটায় ব্যাকটেস্ট কেন সক্রিয়ভাবে বিভ্রান্তিকর হতে পারে?',
      },
      a: {
        en: 'Because every corporate action appears in the raw series as a sharp fall that never happened economically. A share going ex a cash dividend and a bonus can print an 18% drop with zero change in holder wealth. A strategy trained on that data learns to interpret dividend distributions as crashes and will systematically sell high-quality dividend payers at exactly the wrong moment. Any credible backtest requires an adjusted series, which on the DSE usually means constructing one yourself from the corporate-action record.',
        bn: 'কারণ প্রতিটি কর্পোরেট অ্যাকশন কাঁচা সিরিজে এমন একটি তীব্র পতন হিসেবে দেখা দেয় যা অর্থনৈতিকভাবে কখনো ঘটেনি। নগদ লভ্যাংশ ও বোনাসের এক্স হওয়া শেয়ার ধারকের সম্পদে শূন্য পরিবর্তনসহ ১৮% পতন দেখাতে পারে। ঐ ডেটায় প্রশিক্ষিত কৌশল লভ্যাংশ বণ্টনকে ধস হিসেবে ব্যাখ্যা করতে শেখে এবং ঠিক ভুল মুহূর্তে উঁচু মানের লভ্যাংশদাতাদের নিয়মতান্ত্রিকভাবে বিক্রি করে। যেকোনো বিশ্বাসযোগ্য ব্যাকটেস্টের জন্য সমন্বিত সিরিজ দরকার, যা ডিএসই-তে সাধারণত কর্পোরেট-অ্যাকশন রেকর্ড থেকে নিজেই তৈরি করতে হয়।',
      },
    },
  ],

  quiz: [
    {
      q: { en: 'Settlement for A, B and N category securities is generally:', bn: 'A, B ও N শ্রেণির সিকিউরিটিজের নিষ্পত্তি সাধারণত:' },
      options: { en: ['T+0', 'T+1', 'T+2', 'T+5'], bn: ['T+০', 'T+১', 'T+২', 'T+৫'] },
      answer: 2,
    },
    {
      q: { en: 'Z category indicates a company that:', bn: 'Z শ্রেণি নির্দেশ করে এমন একটি কোম্পানি যা:' },
      options: {
        en: [
          'Is newly listed',
          'Declared more than 10% dividend',
          'Failed to hold AGM, pay dividend, or remain operational',
          'Is Shariah-compliant',
        ],
        bn: [
          'নবতালিকাভুক্ত',
          '১০%-এর বেশি লভ্যাংশ ঘোষণা করেছে',
          'এজিএম করতে, লভ্যাংশ দিতে বা কার্যকর থাকতে ব্যর্থ',
          'শরিয়াহ-সম্মত',
        ],
      },
      answer: 2,
    },
    {
      q: {
        en: 'A share at BDT 120 goes ex a 25% cash dividend (face value 10) and a 20% bonus. The ex-price is:',
        bn: '১২০ টাকার শেয়ার ২৫% নগদ লভ্যাংশ (অভিহিত মূল্য ১০) ও ২০% বোনাসের এক্স হয়। এক্স-মূল্য:',
      },
      options: { en: ['96.00', '97.50', '97.92', '100.00'], bn: ['৯৬.০০', '৯৭.৫০', '৯৭.৯২', '১০০.০০'] },
      answer: 2,
    },
    {
      q: { en: 'In the combined adjustment, the correct order is:', bn: 'সম্মিলিত সমন্বয়ে সঠিক ক্রম হলো:' },
      options: {
        en: [
          'Divide by bonus first, then subtract cash',
          'Subtract cash first, then divide by bonus',
          'Order does not matter',
          'Apply both simultaneously',
        ],
        bn: [
          'আগে বোনাস দিয়ে ভাগ, তারপর নগদ বিয়োগ',
          'আগে নগদ বিয়োগ, তারপর বোনাস দিয়ে ভাগ',
          'ক্রমে কিছু যায়-আসে না',
          'দুটোই একসঙ্গে প্রয়োগ',
        ],
      },
      answer: 1,
    },
    {
      q: {
        en: 'A 1:2 rights issue at BDT 60 with market price BDT 120 gives a TERP of:',
        bn: '১২০ টাকা বাজারমূল্যে ৬০ টাকায় ১:২ রাইটস ইস্যুর TERP:',
      },
      options: { en: ['80', '90', '100', '110'], bn: ['৮০', '৯০', '১০০', '১১০'] },
      answer: 2,
    },
    {
      q: { en: 'A holder who ignores a rights issue:', bn: 'যে ধারক রাইটস ইস্যু উপেক্ষা করেন তিনি:' },
      options: {
        en: [
          'Stays economically neutral',
          'Loses the value of the lapsed rights',
          'Gains from reduced dilution',
          'Receives cash compensation automatically',
        ],
        bn: [
          'অর্থনৈতিকভাবে নিরপেক্ষ থাকেন',
          'নষ্ট হওয়া রাইটসের মূল্য হারান',
          'কম ডাইলিউশন থেকে লাভবান হন',
          'স্বয়ংক্রিয়ভাবে নগদ ক্ষতিপূরণ পান',
        ],
      },
      answer: 1,
    },
    {
      q: {
        en: 'On the first trading day after a record date, DSE typically:',
        bn: 'রেকর্ড তারিখের পরের প্রথম লেনদেন দিবসে ডিএসই সাধারণত:',
      },
      options: {
        en: [
          'Halts the scrip',
          'Relaxes the circuit breaker',
          'Tightens the circuit breaker',
          'Moves it to Z category',
        ],
        bn: [
          'স্ক্রিপটি বন্ধ রাখে',
          'সার্কিট ব্রেকার শিথিল করে',
          'সার্কিট ব্রেকার কঠোর করে',
          'এটিকে Z শ্রেণিতে সরায়',
        ],
      },
      answer: 1,
    },
    {
      q: {
        en: 'Under T+2 settlement, the maximum complete round trips in 20 trading days is about:',
        bn: 'T+২ নিষ্পত্তিতে ২০ লেনদেন দিবসে সর্বোচ্চ সম্পূর্ণ রাউন্ড ট্রিপ প্রায়:',
      },
      options: { en: ['5', '6.7', '10', '20'], bn: ['৫', '৬.৭', '১০', '২০'] },
      answer: 1,
    },
    {
      q: { en: 'Margin loan eligibility is generally restricted to:', bn: 'মার্জিন ঋণের যোগ্যতা সাধারণত সীমাবদ্ধ:' },
      options: {
        en: ['Z category only', 'A (and sometimes B) category', 'All categories equally', 'N category only'],
        bn: ['কেবল Z শ্রেণিতে', 'A (এবং কখনো B) শ্রেণিতে', 'সব শ্রেণিতে সমানভাবে', 'কেবল N শ্রেণিতে'],
      },
      answer: 1,
    },
    {
      q: {
        en: 'Running a technical indicator on unadjusted DSE prices will:',
        bn: 'অসমন্বিত ডিএসই দামে টেকনিক্যাল নির্দেশক চালালে:',
      },
      options: {
        en: [
          'Give identical results to adjusted data',
          'Treat corporate actions as genuine crashes',
          'Automatically correct for dividends',
          'Only affect Z category scrips',
        ],
        bn: [
          'সমন্বিত ডেটার সঙ্গে অভিন্ন ফল দেবে',
          'কর্পোরেট অ্যাকশনকে প্রকৃত ধস হিসেবে ধরবে',
          'স্বয়ংক্রিয়ভাবে লভ্যাংশ সংশোধন করবে',
          'কেবল Z শ্রেণির স্ক্রিপে প্রভাব ফেলবে',
        ],
      },
      answer: 1,
    },
  ],
};
