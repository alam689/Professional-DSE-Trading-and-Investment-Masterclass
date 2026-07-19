/**
 * Chapter 2 — DSE & CSE: Mechanics of the Exchange
 * Source: 00_Front_Matter_and_Part_I.md §2.1–2.13
 */

export default {
  n: 2,
  tools: ['liquidity', 'circuit'],

  /** Live-formula spreadsheet for §2.6, downloadable as .xlsx. */
  excelSheet: {
    filename: 'ch02-liquidity-filter.xlsx',
    sheetName: 'Liquidity Filter',
    cells: [
      { cell: 'A1', v: 'Best Bid' }, { cell: 'B1', v: 13.8 },
      { cell: 'A2', v: 'Best Ask' }, { cell: 'B2', v: 14.2 },
      { cell: 'A3', v: 'Mid Price' }, { cell: 'B3', f: '(B1+B2)/2' },
      { cell: 'A4', v: 'Spread (abs)' }, { cell: 'B4', f: 'B2-B1' },
      { cell: 'A5', v: 'Spread (%)' }, { cell: 'B5', f: 'B4/B3*100' },

      { cell: 'A7', v: 'Position Size (BDT)' }, { cell: 'B7', v: 2000000 },
      { cell: 'A8', v: 'ADTV (BDT)' }, { cell: 'B8', v: 3000000 },
      { cell: 'A9', v: 'Participation Rate' }, { cell: 'B9', v: 0.15 },
      { cell: 'A10', v: 'Days to Liquidate' }, { cell: 'B10', f: 'B7/(B8*B9)' },

      { cell: 'A12', v: 'Stressed ADTV (BDT)' }, { cell: 'B12', v: 500000 },
      { cell: 'A13', v: 'Days (Stressed)' }, { cell: 'B13', f: 'B7/(B12*B9)' },

      { cell: 'A15', v: 'Brokerage per side (%)' }, { cell: 'B15', v: 0.35 },
      { cell: 'A16', v: 'Impact per side (%)' }, { cell: 'B16', v: 1.0 },
      { cell: 'A17', v: 'Round-Trip Cost (%)' }, { cell: 'B17', f: 'B5+(2*B15)+(2*B16)' },

      { cell: 'A19', v: 'Prev Close' }, { cell: 'B19', v: 14.0 },
      { cell: 'A20', v: 'Slab Limit' },
      {
        cell: 'B20',
        f: 'IF(B19<=200,0.10,IF(B19<=500,0.0875,IF(B19<=1000,0.075,IF(B19<=2000,0.0625,IF(B19<=5000,0.05,0.0375)))))',
      },
      { cell: 'A21', v: 'Upper Circuit' }, { cell: 'B21', f: 'ROUND(B19*(1+B20),1)' },
      { cell: 'A22', v: 'Lower Circuit' }, { cell: 'B22', f: 'ROUND(B19*(1-B20),1)' },

      { cell: 'A24', v: 'VERDICT' },
      {
        cell: 'B24',
        f: 'IF(OR(B5>2,B13>10),"REJECT - Illiquid",IF(B17>3,"CAUTION - High friction","Acceptable"))',
      },
    ],
  },

  objectives: {
    en: [
      'Read an order book and explain price–time priority.',
      'Compute relative spread, days-to-liquidate, and total round-trip cost.',
      'Explain why a circuit breaker converts price risk into liquidity risk rather than removing it.',
      'Apply a hard liquidity filter before any fundamental work begins.',
      'Distinguish volume from liquidity and explain why the two diverge on the DSE.',
    ],
    bn: [
      'অর্ডার বুক পড়া ও মূল্য–সময় অগ্রাধিকার ব্যাখ্যা করা।',
      'আপেক্ষিক স্প্রেড, তারল্যকরণের দিন ও মোট রাউন্ড-ট্রিপ খরচ গণনা করা।',
      'সার্কিট ব্রেকার কেন ঝুঁকি দূর না করে মূল্য ঝুঁকিকে তারল্য ঝুঁকিতে রূপান্তরিত করে তা ব্যাখ্যা করা।',
      'যেকোনো মৌল বিশ্লেষণ শুরুর আগে একটি কঠোর তারল্য ফিল্টার প্রয়োগ করা।',
      'ভলিউম ও তারল্যের পার্থক্য এবং ডিএসই-তে কেন দুটি আলাদা হয়ে যায় তা ব্যাখ্যা করা।',
    ],
  },

  blocks: {
    theory: {
      en: `An exchange provides five services: **price discovery**, **liquidity**, **counterparty guarantee via clearing**, **standardization of contracts**, and **surveillance**.

The DSE operates an **order-driven, continuous auction market** with automated matching. There is no market maker on the main board. Price is discovered purely by the interaction of the limit order book — buyers' bids and sellers' asks.

### The order book

Every tradable scrip has a book with two sides:

| Bid Qty | Bid Price | Ask Price | Ask Qty |
|---|---|---|---|
| 5,000 | 245.10 | 245.30 | 2,000 |
| 12,000 | 245.00 | 245.40 | 8,000 |
| 3,500 | 244.90 | 245.50 | 15,000 |

- **Best Bid** = 245.10 (highest anyone will pay)
- **Best Ask** = 245.30 (lowest anyone will accept)
- **Spread** = 0.20 (the cost of immediacy)
- **Depth** = the quantity stacked at each level

**Matching priority is Price, then Time.** A better price always matches first. Among equal prices, the earlier order matches first. This is why order timing matters on illiquid scrips — being second in a queue at the same price on a rising stock means you may never fill.

### Trading sessions

| Session | Approx. Time | What happens |
|---|---|---|
| Pre-Opening | 09:30 – 10:00 | Orders entered, no matching; indicative equilibrium price calculated |
| Opening | 10:00 | Opening cross executes |
| Continuous Trading | 10:00 – 14:20 | Live matching, price–time priority |
| Post-Closing | 14:20 – 14:30 | Trades at closing price only |

*(Session times have been revised repeatedly — including during COVID and various regulatory phases. Always verify current timings on dsebd.org.)*

### Circuit breakers

DSE applies a daily price movement limit that varies by the previous close. Indicative structure:

| Previous Close (BDT) | Daily Limit |
|---|---|
| Up to 200 | 10% |
| 200 – 500 | 8.75% |
| 500 – 1,000 | 7.50% |
| 1,000 – 2,000 | 6.25% |
| 2,000 – 5,000 | 5.00% |
| Above 5,000 | 3.75% |

The logic is that a 10% move on a BDT 5,000 share is BDT 500 of absolute movement, which is a far larger risk transfer than 10% on a BDT 20 share. So limits tighten as price rises.

**The critical consequence:** a circuit breaker does not stop a fall. It *spreads* it. A stock that "should" fall 40% falls 10% a day for four days — and during those four days, if it is locked at the lower circuit with no bids, **you cannot sell at all.** The limit converts price risk into liquidity risk. This is not a protection. It is a transformation.`,
      bn: `একটি এক্সচেঞ্জ পাঁচটি সেবা দেয়: **মূল্য আবিষ্কার**, **তারল্য**, **ক্লিয়ারিংয়ের মাধ্যমে প্রতিপক্ষের নিশ্চয়তা**, **চুক্তির প্রমিতকরণ**, এবং **নজরদারি**।

ডিএসই স্বয়ংক্রিয় ম্যাচিংসহ একটি **অর্ডার-চালিত, ধারাবাহিক নিলাম বাজার** পরিচালনা করে। মূল বোর্ডে কোনো মার্কেট মেকার নেই। মূল্য নির্ধারিত হয় সম্পূর্ণরূপে লিমিট অর্ডার বুকের মিথস্ক্রিয়ায় — ক্রেতার দর ও বিক্রেতার চাহিদা।

### অর্ডার বুক

প্রতিটি লেনদেনযোগ্য স্ক্রিপের দুই পাশের একটি বুক থাকে:

| ক্রয় পরিমাণ | ক্রয়দর | বিক্রয়দর | বিক্রয় পরিমাণ |
|---|---|---|---|
| ৫,০০০ | ২৪৫.১০ | ২৪৫.৩০ | ২,০০০ |
| ১২,০০০ | ২৪৫.০০ | ২৪৫.৪০ | ৮,০০০ |
| ৩,৫০০ | ২৪৪.৯০ | ২৪৫.৫০ | ১৫,০০০ |

- **সেরা ক্রয়দর** = ২৪৫.১০ (সর্বোচ্চ যে দাম কেউ দেবে)
- **সেরা বিক্রয়দর** = ২৪৫.৩০ (সর্বনিম্ন যে দাম কেউ নেবে)
- **স্প্রেড** = ০.২০ (তাৎক্ষণিকতার মূল্য)
- **গভীরতা** = প্রতিটি স্তরে জমা পরিমাণ

**ম্যাচিং অগ্রাধিকার হলো মূল্য, তারপর সময়।** ভালো দাম সবসময় আগে মেলে। সমান দামের মধ্যে আগের অর্ডার আগে মেলে। এ কারণেই তারল্যহীন স্ক্রিপে অর্ডারের সময় গুরুত্বপূর্ণ — বাড়ন্ত শেয়ারে একই দামে সারিতে দ্বিতীয় হওয়া মানে আপনার অর্ডার হয়তো কখনোই পূরণ হবে না।

### লেনদেন সেশন

| সেশন | আনুমানিক সময় | যা ঘটে |
|---|---|---|
| প্রি-ওপেনিং | ০৯:৩০ – ১০:০০ | অর্ডার প্রবেশ, ম্যাচিং নেই; নির্দেশক ভারসাম্য মূল্য গণিত |
| ওপেনিং | ১০:০০ | ওপেনিং ক্রস সম্পাদিত |
| ধারাবাহিক লেনদেন | ১০:০০ – ১৪:২০ | সরাসরি ম্যাচিং, মূল্য–সময় অগ্রাধিকার |
| পোস্ট-ক্লোজিং | ১৪:২০ – ১৪:৩০ | কেবল সমাপনী মূল্যে লেনদেন |

*(সেশনের সময় বারবার সংশোধিত হয়েছে — কোভিড ও বিভিন্ন নিয়ন্ত্রক পর্যায়সহ। সর্বদা dsebd.org-এ বর্তমান সময়সূচি যাচাই করুন।)*

### সার্কিট ব্রেকার

ডিএসই পূর্ববর্তী সমাপনী মূল্য অনুযায়ী পরিবর্তনশীল একটি দৈনিক মূল্য পরিবর্তন সীমা প্রয়োগ করে। নির্দেশক কাঠামো:

| পূর্ববর্তী সমাপনী মূল্য (টাকা) | দৈনিক সীমা |
|---|---|
| ২০০ পর্যন্ত | ১০% |
| ২০০ – ৫০০ | ৮.৭৫% |
| ৫০০ – ১,০০০ | ৭.৫০% |
| ১,০০০ – ২,০০০ | ৬.২৫% |
| ২,০০০ – ৫,০০০ | ৫.০০% |
| ৫,০০০-এর ওপরে | ৩.৭৫% |

যুক্তি হলো ৫,০০০ টাকার শেয়ারে ১০% নড়াচড়া মানে ৫০০ টাকার পরম পরিবর্তন, যা ২০ টাকার শেয়ারে ১০%-এর চেয়ে অনেক বড় ঝুঁকি স্থানান্তর। তাই দাম বাড়ার সঙ্গে সীমা কঠোর হয়।

**গুরুত্বপূর্ণ পরিণতি:** সার্কিট ব্রেকার পতন থামায় না। এটি পতনকে *ছড়িয়ে দেয়*। যে শেয়ারের ৪০% পড়া "উচিত" তা চার দিন ধরে দৈনিক ১০% পড়ে — এবং ঐ চার দিনে যদি এটি কোনো ক্রয়াদেশ ছাড়াই নিম্ন সার্কিটে আটকে থাকে, **আপনি আদৌ বিক্রি করতে পারবেন না।** সীমাটি মূল্য ঝুঁকিকে তারল্য ঝুঁকিতে রূপান্তরিত করে। এটি সুরক্ষা নয়। এটি রূপান্তর।`,
    },

    simple: {
      en: `The exchange is an auction hall with a rule book.

- Everyone shouts what they will pay (bids) and what they will accept (asks).
- The clerk (the matching engine) pairs the highest bidder with the lowest seller. If they meet, a trade happens.
- The **spread** is the gap between the highest bidder and the lowest seller. On a busy stock like GP it is one tick. On a dead textile scrip it might be 3% — and that 3% is a real, immediate loss the moment you buy.
- The **circuit breaker** is a rule that says: if the price moves more than X% today, we stop. It sounds protective. It is not. If everyone wants out and nobody wants in, the price hits the floor and *nothing trades*. You are locked in, holding, watching.`,
      bn: `এক্সচেঞ্জ হলো নিয়মপুস্তকসহ একটি নিলাম হল।

- সবাই চিৎকার করে বলে তারা কত দেবে (ক্রয়দর) এবং কত নেবে (বিক্রয়দর)।
- কেরানি (ম্যাচিং ইঞ্জিন) সর্বোচ্চ ক্রেতাকে সর্বনিম্ন বিক্রেতার সঙ্গে জোড়া লাগায়। তারা মিললে একটি লেনদেন হয়।
- **স্প্রেড** হলো সর্বোচ্চ ক্রেতা ও সর্বনিম্ন বিক্রেতার মধ্যকার ব্যবধান। জিপির মতো ব্যস্ত শেয়ারে এটি এক টিক। মৃত বস্ত্র স্ক্রিপে এটি ৩% হতে পারে — এবং সেই ৩% আপনার কেনার মুহূর্তেই একটি বাস্তব, তাৎক্ষণিক ক্ষতি।
- **সার্কিট ব্রেকার** এমন একটি নিয়ম যা বলে: আজ দাম X%-এর বেশি নড়লে আমরা থামব। শুনতে সুরক্ষামূলক লাগে। তা নয়। সবাই বেরোতে চাইলে ও কেউ ঢুকতে না চাইলে দাম তলায় গিয়ে ঠেকে এবং *কিছুই লেনদেন হয় না*। আপনি আটকে আছেন, ধরে আছেন, দেখছেন।`,
    },

    example: {
      en: `### The liquidity trap

Two companies, same day.

**Grameenphone (GP)** — market cap ~BDT 40,000 crore, daily turnover ~BDT 15 crore, spread typically 0.10–0.30 BDT on a ~290 BDT price (≈0.07%). You can move BDT 50 lakh without materially disturbing the price.

**A small textile scrip** — market cap ~BDT 80 crore, free float perhaps 25% = BDT 20 crore, daily turnover ~BDT 30 lakh, spread perhaps 0.40 BDT on a 14 BDT price (≈2.9%).

Now: you want to deploy BDT 20 lakh in the textile scrip.

- BDT 20 lakh is **6.7% of daily turnover** and **1% of the entire free float**.
- Buying it will move the price against you — this is **market impact**.
- Selling it later, in a falling market, when turnover collapses to BDT 5 lakh/day, means **four full days of selling** *if you are the only seller*. You will not be.

**Round-trip cost estimate on the textile scrip:**

| Component | Cost |
|---|---|
| Spread (half on entry, half on exit) | ~2.9% |
| Brokerage (both sides, ~0.35% each) | ~0.70% |
| Market impact (entry + exit) | ~2.0% |
| **Total round trip** | **~5.6%** |

**The stock must rise 5.6% before you break even.** On GP the same round trip costs perhaps 0.85%.

This is the single most under-appreciated fact in retail DSE trading. People chase the small scrip because "it can double." They do not price the fact that they are paying 5.6% for the privilege of entering, and may be unable to exit at all.`,
      bn: `### তারল্য ফাঁদ

দুটি কোম্পানি, একই দিন।

**গ্রামীণফোন (জিপি)** — বাজার মূলধন ~৪০,০০০ কোটি টাকা, দৈনিক লেনদেন ~১৫ কোটি টাকা, ~২৯০ টাকা দামে স্প্রেড সাধারণত ০.১০–০.৩০ টাকা (≈০.০৭%)। আপনি দামে উল্লেখযোগ্য প্রভাব না ফেলে ৫০ লক্ষ টাকা সরাতে পারেন।

**একটি ছোট বস্ত্র স্ক্রিপ** — বাজার মূলধন ~৮০ কোটি টাকা, ফ্রি ফ্লোট সম্ভবত ২৫% = ২০ কোটি টাকা, দৈনিক লেনদেন ~৩০ লক্ষ টাকা, ১৪ টাকা দামে স্প্রেড সম্ভবত ০.৪০ টাকা (≈২.৯%)।

এখন: আপনি বস্ত্র স্ক্রিপে ২০ লক্ষ টাকা বিনিয়োগ করতে চান।

- ২০ লক্ষ টাকা হলো **দৈনিক লেনদেনের ৬.৭%** এবং **সম্পূর্ণ ফ্রি ফ্লোটের ১%**।
- এটি কিনলে দাম আপনার বিপক্ষে সরবে — এটিই **বাজার প্রভাব**।
- পরে পতনশীল বাজারে বিক্রি করা, যখন লেনদেন দৈনিক ৫ লক্ষ টাকায় ধসে পড়ে, মানে **পূর্ণ চার দিনের বিক্রি** — *যদি আপনি একমাত্র বিক্রেতা হন*। আপনি হবেন না।

**বস্ত্র স্ক্রিপে রাউন্ড-ট্রিপ খরচের অনুমান:**

| উপাদান | খরচ |
|---|---|
| স্প্রেড (অর্ধেক প্রবেশে, অর্ধেক প্রস্থানে) | ~২.৯% |
| ব্রোকারেজ (উভয় পাশে, প্রতিটি ~০.৩৫%) | ~০.৭০% |
| বাজার প্রভাব (প্রবেশ + প্রস্থান) | ~২.০% |
| **মোট রাউন্ড ট্রিপ** | **~৫.৬%** |

**ব্রেক-ইভেনের আগে শেয়ারটিকে ৫.৬% বাড়তে হবে।** জিপিতে একই রাউন্ড ট্রিপে খরচ সম্ভবত ০.৮৫%।

খুচরা ডিএসই ট্রেডিংয়ে এটিই সবচেয়ে কম মূল্যায়িত সত্য। মানুষ ছোট স্ক্রিপের পেছনে ছোটে কারণ "এটি দ্বিগুণ হতে পারে।" তারা হিসাব করে না যে প্রবেশের সুযোগের জন্য তারা ৫.৬% দিচ্ছে, এবং হয়তো আদৌ বেরোতে পারবে না।`,
    },

    formula: {
      en: `**Bid-Ask Spread (absolute):**
$$S = P_{ask} - P_{bid}$$

**Relative Spread:**
$$S_{rel} = \\frac{P_{ask} - P_{bid}}{P_{mid}} \\times 100 \\qquad \\text{where } P_{mid} = \\frac{P_{ask} + P_{bid}}{2}$$

**Days to Liquidate:**
$$D = \\frac{\\text{Position Value}}{\\text{ADTV} \\times \\text{Participation Rate}}$$

where ADTV = Average Daily Traded Value, and Participation Rate is the fraction of daily volume you can realistically be without dominating the tape (professionals use 10–20%).

**Total Round-Trip Cost:**
$$C_{total} = S_{rel} + 2b + 2I$$

where $b$ = brokerage rate per side, $I$ = estimated market impact per side.

**Circuit Breaker Bands:**
$$P_{upper} = P_{prev} \\times (1 + L), \\qquad P_{lower} = P_{prev} \\times (1 - L)$$

where $L$ is the slab limit for that price band.`,
      bn: `**ক্রয়-বিক্রয় স্প্রেড (পরম):**
$$S = P_{ask} - P_{bid}$$

**আপেক্ষিক স্প্রেড:**
$$S_{rel} = \\frac{P_{ask} - P_{bid}}{P_{mid}} \\times 100 \\qquad \\text{যেখানে } P_{mid} = \\frac{P_{ask} + P_{bid}}{2}$$

**তারল্যকরণের দিন:**
$$D = \\frac{\\text{পজিশনের মূল্য}}{\\text{ADTV} \\times \\text{অংশগ্রহণ হার}}$$

যেখানে ADTV = গড় দৈনিক লেনদেনকৃত মূল্য, এবং অংশগ্রহণ হার হলো দৈনিক ভলিউমের সেই ভগ্নাংশ যা আপনি টেপে আধিপত্য না করে বাস্তবসম্মতভাবে হতে পারেন (পেশাদাররা ১০–২০% ব্যবহার করেন)।

**মোট রাউন্ড-ট্রিপ খরচ:**
$$C_{total} = S_{rel} + 2b + 2I$$

যেখানে $b$ = প্রতি পাশে ব্রোকারেজ হার, $I$ = প্রতি পাশে আনুমানিক বাজার প্রভাব।

**সার্কিট ব্রেকার ব্যান্ড:**
$$P_{upper} = P_{prev} \\times (1 + L), \\qquad P_{lower} = P_{prev} \\times (1 - L)$$

যেখানে $L$ হলো ঐ মূল্য পরিসরের স্ল্যাব সীমা।`,
    },

    manual: {
      en: `**Scenario.** Textile scrip. Best bid 13.80, best ask 14.20. ADTV = BDT 30 lakh. You want BDT 20 lakh. Brokerage 0.35% per side. Assume market impact 1.0% per side.

**Step 1 — Mid price:**
$$P_{mid} = \\frac{14.20 + 13.80}{2} = 14.00$$

**Step 2 — Relative spread:**
$$S_{rel} = \\frac{14.20 - 13.80}{14.00} \\times 100 = \\frac{0.40}{14.00} \\times 100 = 2.857\\%$$

**Step 3 — Days to liquidate at 15% participation:**
$$D = \\frac{20{,}00{,}000}{30{,}00{,}000 \\times 0.15} = \\frac{20{,}00{,}000}{4{,}50{,}000} = 4.44 \\text{ days}$$

**Step 4 — Days to liquidate in a stressed market** (turnover falls to BDT 5 lakh):
$$D_{stress} = \\frac{20{,}00{,}000}{5{,}00{,}000 \\times 0.15} = 26.7 \\text{ days}$$

**Step 5 — Total round-trip cost:**
$$C_{total} = 2.857\\% + 2(0.35\\%) + 2(1.0\\%) = 5.557\\%$$

**Step 6 — Circuit breaker band** (previous close 14.00, so ≤200 slab → 10%):
$$P_{upper} = 14.00 \\times 1.10 = 15.40, \\qquad P_{lower} = 14.00 \\times 0.90 = 12.60$$

**Interpretation.** You need +5.56% just to break even. Your normal exit takes 4.4 days. In a stressed market it takes **27 days** — over a month of forced holding while the price falls 10% per day at the lower circuit. Twenty-seven days at even a fraction of that decline is catastrophic.

**This is the calculation almost no retail investor performs, and it is the one that would prevent most of their losses.**`,
      bn: `**পরিস্থিতি।** বস্ত্র স্ক্রিপ। সেরা ক্রয়দর ১৩.৮০, সেরা বিক্রয়দর ১৪.২০। ADTV = ৩০ লক্ষ টাকা। আপনি ২০ লক্ষ টাকা চান। প্রতি পাশে ব্রোকারেজ ০.৩৫%। ধরুন প্রতি পাশে বাজার প্রভাব ১.০%।

**ধাপ ১ — মধ্যম মূল্য:**
$$P_{mid} = \\frac{14.20 + 13.80}{2} = 14.00$$

**ধাপ ২ — আপেক্ষিক স্প্রেড:**
$$S_{rel} = \\frac{14.20 - 13.80}{14.00} \\times 100 = \\frac{0.40}{14.00} \\times 100 = 2.857\\%$$

**ধাপ ৩ — ১৫% অংশগ্রহণে তারল্যকরণের দিন:**
$$D = \\frac{20{,}00{,}000}{30{,}00{,}000 \\times 0.15} = 4.44 \\text{ দিন}$$

**ধাপ ৪ — চাপযুক্ত বাজারে তারল্যকরণের দিন** (লেনদেন ৫ লক্ষ টাকায় নামলে):
$$D_{stress} = \\frac{20{,}00{,}000}{5{,}00{,}000 \\times 0.15} = 26.7 \\text{ দিন}$$

**ধাপ ৫ — মোট রাউন্ড-ট্রিপ খরচ:**
$$C_{total} = 2.857\\% + 2(0.35\\%) + 2(1.0\\%) = 5.557\\%$$

**ধাপ ৬ — সার্কিট ব্রেকার ব্যান্ড** (পূর্ববর্তী সমাপনী ১৪.০০, তাই ≤২০০ স্ল্যাব → ১০%):
$$P_{upper} = 14.00 \\times 1.10 = 15.40, \\qquad P_{lower} = 14.00 \\times 0.90 = 12.60$$

**ব্যাখ্যা।** কেবল ব্রেক-ইভেনের জন্যই আপনার +৫.৫৬% দরকার। স্বাভাবিক প্রস্থানে লাগে ৪.৪ দিন। চাপযুক্ত বাজারে লাগে **২৭ দিন** — এক মাসেরও বেশি বাধ্যতামূলক ধরে রাখা, যখন দাম নিম্ন সার্কিটে দৈনিক ১০% পড়ছে। ঐ পতনের ভগ্নাংশেও সাতাশ দিন বিপর্যয়কর।

**এই হিসাবটি প্রায় কোনো খুচরা বিনিয়োগকারী করেন না, অথচ এটিই তাঁদের বেশিরভাগ ক্ষতি প্রতিরোধ করত।**`,
    },

    excel: {
      en: `\`\`\`
A1: Best Bid                  B1: 13.80
A2: Best Ask                  B2: 14.20
A3: Mid Price                 B3: =(B1+B2)/2
A4: Spread (abs)              B4: =B2-B1
A5: Spread (%)                B5: =B4/B3*100

A7: Position Size (BDT)       B7: 2000000
A8: ADTV (BDT)                B8: 3000000
A9: Participation Rate        B9: 0.15
A10: Days to Liquidate        B10: =B7/(B8*B9)

A12: Stressed ADTV (BDT)      B12: 500000
A13: Days (Stressed)          B13: =B7/(B12*B9)

A15: Brokerage per side (%)   B15: 0.35
A16: Impact per side (%)      B16: 1.00
A17: Round-Trip Cost (%)      B17: =B5+(2*B15)+(2*B16)

A19: Prev Close               B19: 14.00
A20: Slab Limit               B20: =IF(B19<=200,0.10,IF(B19<=500,0.0875,
                                    IF(B19<=1000,0.075,IF(B19<=2000,0.0625,
                                    IF(B19<=5000,0.05,0.0375)))))
A21: Upper Circuit            B21: =ROUND(B19*(1+B20),1)
A22: Lower Circuit            B22: =ROUND(B19*(1-B20),1)

A24: VERDICT                  B24: =IF(OR(B5>2,B13>10),"REJECT - Illiquid",
                                    IF(B17>3,"CAUTION - High friction","Acceptable"))
\`\`\`

Cell B24 is the whole point of the sheet. Build this once, and run every small-cap idea through it before you place the order.`,
      bn: `\`\`\`
A1: সেরা ক্রয়দর               B1: 13.80
A2: সেরা বিক্রয়দর              B2: 14.20
A3: মধ্যম মূল্য                 B3: =(B1+B2)/2
A4: স্প্রেড (পরম)               B4: =B2-B1
A5: স্প্রেড (%)                 B5: =B4/B3*100

A7: পজিশনের আকার (টাকা)       B7: 2000000
A8: ADTV (টাকা)                B8: 3000000
A9: অংশগ্রহণ হার                B9: 0.15
A10: তারল্যকরণের দিন            B10: =B7/(B8*B9)

A12: চাপযুক্ত ADTV (টাকা)       B12: 500000
A13: দিন (চাপযুক্ত)             B13: =B7/(B12*B9)

A15: প্রতি পাশে ব্রোকারেজ (%)    B15: 0.35
A16: প্রতি পাশে প্রভাব (%)       B16: 1.00
A17: রাউন্ড-ট্রিপ খরচ (%)        B17: =B5+(2*B15)+(2*B16)

A19: পূর্ববর্তী সমাপনী           B19: 14.00
A20: স্ল্যাব সীমা                B20: =IF(B19<=200,0.10,IF(B19<=500,0.0875,
                                    IF(B19<=1000,0.075,IF(B19<=2000,0.0625,
                                    IF(B19<=5000,0.05,0.0375)))))
A21: ঊর্ধ্ব সার্কিট              B21: =ROUND(B19*(1+B20),1)
A22: নিম্ন সার্কিট               B22: =ROUND(B19*(1-B20),1)

A24: রায়                       B24: =IF(OR(B5>2,B13>10),"REJECT - Illiquid",
                                    IF(B17>3,"CAUTION - High friction","Acceptable"))
\`\`\`

B24 ঘরটিই শিটের মূল উদ্দেশ্য। একবার এটি তৈরি করুন, এবং অর্ডার দেওয়ার আগে প্রতিটি স্মল-ক্যাপ ধারণা এর মধ্য দিয়ে চালান।`,
    },

    python: {
      en: `\`\`\`python
"""
Chapter 2 — DSE market microstructure: spread, liquidity, and circuit breakers.
Educational.
"""
from dataclasses import dataclass


# DSE circuit breaker slabs: (upper price bound, limit fraction)
CIRCUIT_SLABS = [
    (200,    0.1000),
    (500,    0.0875),
    (1000,   0.0750),
    (2000,   0.0625),
    (5000,   0.0500),
    (float("inf"), 0.0375),
]


def circuit_limit(prev_close: float) -> float:
    """Return the daily price-movement limit fraction for a given previous close."""
    for bound, limit in CIRCUIT_SLABS:
        if prev_close <= bound:
            return limit
    return 0.0375


def circuit_bands(prev_close: float) -> tuple[float, float]:
    """Return (lower_circuit, upper_circuit) for a given previous close."""
    lim = circuit_limit(prev_close)
    return (round(prev_close * (1 - lim), 1),
            round(prev_close * (1 + lim), 1))


@dataclass
class OrderBookTop:
    """Top-of-book snapshot for one scrip."""
    ticker: str
    best_bid: float
    best_ask: float
    adtv_bdt: float          # average daily traded value
    stressed_adtv_bdt: float # realistic ADTV in a falling market

    @property
    def mid(self) -> float:
        return (self.best_bid + self.best_ask) / 2

    @property
    def spread_abs(self) -> float:
        return self.best_ask - self.best_bid

    @property
    def spread_pct(self) -> float:
        return (self.spread_abs / self.mid) * 100


def days_to_liquidate(position_bdt: float, adtv_bdt: float,
                      participation: float = 0.15) -> float:
    """How many trading days to exit at a given share of daily volume."""
    if adtv_bdt <= 0:
        return float("inf")
    return position_bdt / (adtv_bdt * participation)


def round_trip_cost(spread_pct: float, brokerage_pct: float = 0.35,
                    impact_pct: float = 1.0) -> float:
    """Total cost of entering and exiting, in percent."""
    return spread_pct + (2 * brokerage_pct) + (2 * impact_pct)


def assess(book: OrderBookTop, position_bdt: float,
           brokerage_pct: float = 0.35, impact_pct: float = 1.0) -> dict:
    """Full pre-trade liquidity assessment for one scrip."""
    d_normal = days_to_liquidate(position_bdt, book.adtv_bdt)
    d_stress = days_to_liquidate(position_bdt, book.stressed_adtv_bdt)
    cost = round_trip_cost(book.spread_pct, brokerage_pct, impact_pct)

    if book.spread_pct > 2.0 or d_stress > 10:
        verdict = "REJECT — Illiquid"
    elif cost > 3.0:
        verdict = "CAUTION — High friction"
    else:
        verdict = "Acceptable"

    return {
        "ticker": book.ticker,
        "mid": book.mid,
        "spread_pct": book.spread_pct,
        "days_normal": d_normal,
        "days_stressed": d_stress,
        "round_trip_cost_pct": cost,
        "breakeven_move_pct": cost,
        "verdict": verdict,
    }


if __name__ == "__main__":
    candidates = [
        OrderBookTop("GP",      289.70, 289.90, 15_00_00_000, 4_00_00_000),
        OrderBookTop("TEXTILE", 13.80,  14.20,    30_00_000,     5_00_000),
    ]

    POSITION = 20_00_000  # BDT 20 lakh

    print(f"{'Scrip':<10} {'Spread%':>8} {'Days':>7} {'Days(str)':>10} "
          f"{'RT Cost%':>9}  Verdict")
    print("-" * 72)
    for c in candidates:
        r = assess(c, POSITION)
        print(f"{r['ticker']:<10} {r['spread_pct']:>8.2f} {r['days_normal']:>7.1f} "
              f"{r['days_stressed']:>10.1f} {r['round_trip_cost_pct']:>9.2f}  "
              f"{r['verdict']}")

    print()
    for px in (14.00, 289.80, 750.00, 2400.00):
        lo, hi = circuit_bands(px)
        print(f"Prev close {px:>8.2f} -> circuit band [{lo:.1f}, {hi:.1f}] "
              f"(±{circuit_limit(px)*100:.2f}%)")
\`\`\`

**Expected output:**

\`\`\`
Scrip        Spread%    Days  Days(str)  RT Cost%  Verdict
------------------------------------------------------------------------
GP              0.07     0.9        3.3      2.77  Acceptable
TEXTILE         2.86     4.4       26.7      5.56  REJECT — Illiquid

Prev close    14.00 -> circuit band [12.6, 15.4] (±10.00%)
Prev close   289.80 -> circuit band [264.4, 315.2] (±8.75%)
Prev close   750.00 -> circuit band [693.8, 806.3] (±7.50%)
Prev close  2400.00 -> circuit band [2280.0, 2520.0] (±5.00%)
\`\`\`

Note that GP is flagged "Acceptable" despite a 2.77% round-trip cost — because that cost is dominated by the *assumed* impact figure, which for GP at this size is unrealistically high. **Calibrate \`impact_pct\` to position size relative to ADTV**; a flat 1% is a teaching simplification, not a production model. In Part IV we replace it with a square-root impact model.`,
      bn: `\`\`\`python
"""
অধ্যায় ২ — ডিএসই বাজার মাইক্রোস্ট্রাকচার: স্প্রেড, তারল্য ও সার্কিট ব্রেকার।
শিক্ষামূলক।
"""
from dataclasses import dataclass


# ডিএসই সার্কিট ব্রেকার স্ল্যাব: (ঊর্ধ্ব মূল্যসীমা, সীমা ভগ্নাংশ)
CIRCUIT_SLABS = [
    (200,    0.1000),
    (500,    0.0875),
    (1000,   0.0750),
    (2000,   0.0625),
    (5000,   0.0500),
    (float("inf"), 0.0375),
]


def circuit_limit(prev_close: float) -> float:
    """প্রদত্ত পূর্ববর্তী সমাপনী মূল্যের জন্য দৈনিক মূল্য-পরিবর্তন সীমা ভগ্নাংশ ফেরত দেয়।"""
    for bound, limit in CIRCUIT_SLABS:
        if prev_close <= bound:
            return limit
    return 0.0375


def circuit_bands(prev_close: float) -> tuple[float, float]:
    """প্রদত্ত পূর্ববর্তী সমাপনী মূল্যের জন্য (নিম্ন সার্কিট, ঊর্ধ্ব সার্কিট) ফেরত দেয়।"""
    lim = circuit_limit(prev_close)
    return (round(prev_close * (1 - lim), 1),
            round(prev_close * (1 + lim), 1))


@dataclass
class OrderBookTop:
    """একটি স্ক্রিপের টপ-অফ-বুক স্ন্যাপশট।"""
    ticker: str
    best_bid: float
    best_ask: float
    adtv_bdt: float          # গড় দৈনিক লেনদেনকৃত মূল্য
    stressed_adtv_bdt: float # পতনশীল বাজারে বাস্তবসম্মত ADTV

    @property
    def mid(self) -> float:
        return (self.best_bid + self.best_ask) / 2

    @property
    def spread_abs(self) -> float:
        return self.best_ask - self.best_bid

    @property
    def spread_pct(self) -> float:
        return (self.spread_abs / self.mid) * 100


def days_to_liquidate(position_bdt: float, adtv_bdt: float,
                      participation: float = 0.15) -> float:
    """দৈনিক ভলিউমের প্রদত্ত অংশে বেরোতে কত লেনদেন দিবস লাগবে।"""
    if adtv_bdt <= 0:
        return float("inf")
    return position_bdt / (adtv_bdt * participation)


def round_trip_cost(spread_pct: float, brokerage_pct: float = 0.35,
                    impact_pct: float = 1.0) -> float:
    """প্রবেশ ও প্রস্থানের মোট খরচ, শতাংশে।"""
    return spread_pct + (2 * brokerage_pct) + (2 * impact_pct)


def assess(book: OrderBookTop, position_bdt: float,
           brokerage_pct: float = 0.35, impact_pct: float = 1.0) -> dict:
    """একটি স্ক্রিপের সম্পূর্ণ প্রি-ট্রেড তারল্য মূল্যায়ন।"""
    d_normal = days_to_liquidate(position_bdt, book.adtv_bdt)
    d_stress = days_to_liquidate(position_bdt, book.stressed_adtv_bdt)
    cost = round_trip_cost(book.spread_pct, brokerage_pct, impact_pct)

    if book.spread_pct > 2.0 or d_stress > 10:
        verdict = "REJECT — Illiquid"
    elif cost > 3.0:
        verdict = "CAUTION — High friction"
    else:
        verdict = "Acceptable"

    return {
        "ticker": book.ticker,
        "mid": book.mid,
        "spread_pct": book.spread_pct,
        "days_normal": d_normal,
        "days_stressed": d_stress,
        "round_trip_cost_pct": cost,
        "breakeven_move_pct": cost,
        "verdict": verdict,
    }


if __name__ == "__main__":
    candidates = [
        OrderBookTop("GP",      289.70, 289.90, 15_00_00_000, 4_00_00_000),
        OrderBookTop("TEXTILE", 13.80,  14.20,    30_00_000,     5_00_000),
    ]

    POSITION = 20_00_000  # ২০ লক্ষ টাকা

    print(f"{'Scrip':<10} {'Spread%':>8} {'Days':>7} {'Days(str)':>10} "
          f"{'RT Cost%':>9}  Verdict")
    print("-" * 72)
    for c in candidates:
        r = assess(c, POSITION)
        print(f"{r['ticker']:<10} {r['spread_pct']:>8.2f} {r['days_normal']:>7.1f} "
              f"{r['days_stressed']:>10.1f} {r['round_trip_cost_pct']:>9.2f}  "
              f"{r['verdict']}")

    print()
    for px in (14.00, 289.80, 750.00, 2400.00):
        lo, hi = circuit_bands(px)
        print(f"Prev close {px:>8.2f} -> circuit band [{lo:.1f}, {hi:.1f}] "
              f"(±{circuit_limit(px)*100:.2f}%)")
\`\`\`

**প্রত্যাশিত ফলাফল:**

\`\`\`
Scrip        Spread%    Days  Days(str)  RT Cost%  Verdict
------------------------------------------------------------------------
GP              0.07     0.9        3.3      2.77  Acceptable
TEXTILE         2.86     4.4       26.7      5.56  REJECT — Illiquid

Prev close    14.00 -> circuit band [12.6, 15.4] (±10.00%)
Prev close   289.80 -> circuit band [264.4, 315.2] (±8.75%)
Prev close   750.00 -> circuit band [693.8, 806.3] (±7.50%)
Prev close  2400.00 -> circuit band [2280.0, 2520.0] (±5.00%)
\`\`\`

লক্ষ করুন, ২.৭৭% রাউন্ড-ট্রিপ খরচ সত্ত্বেও জিপিকে "Acceptable" চিহ্নিত করা হয়েছে — কারণ ঐ খরচে *অনুমিত* প্রভাব সংখ্যাটির আধিপত্য, যা এই আকারে জিপির জন্য অবাস্তবভাবে বেশি। **ADTV-এর তুলনায় পজিশনের আকারের সাপেক্ষে \`impact_pct\` ক্যালিব্রেট করুন**; সমতল ১% একটি শিক্ষণ সরলীকরণ, উৎপাদন মডেল নয়। পর্ব ৪-এ আমরা এটিকে একটি বর্গমূল প্রভাব মডেল দিয়ে প্রতিস্থাপন করব।`,
    },

    mistakes: {
      en: `1. **Treating the circuit breaker as protection.** It caps the daily print, not the loss. Locked at lower circuit = cannot sell = unlimited effective loss until it unlocks.
2. **Ignoring the spread on small caps.** A 3% spread means you are down 3% at the instant of purchase. Compounded across frequent trading in illiquid names, this alone destroys accounts.
3. **Sizing by conviction instead of by liquidity.** "I'm very confident" is not a reason to hold 1% of a company's free float.
4. **Using normal-market ADTV to plan an exit.** You will exit in a bad market. Plan with stressed ADTV. The ratio between the two is often 5:1 or worse.
5. **Placing market orders on illiquid scrips.** With a thin book, a market order walks the ladder and fills at prices you would never have chosen. **Always use limit orders on anything outside the top ~50 scrips by turnover.**
6. **Confusing volume with liquidity.** A scrip can print high volume on circuit-locked days with a handful of trades between related parties. Volume is a number. Liquidity is the ability to exit at a fair price. They are not the same.`,
      bn: `১. **সার্কিট ব্রেকারকে সুরক্ষা মনে করা।** এটি দৈনিক প্রিন্টে সীমা দেয়, ক্ষতিতে নয়। নিম্ন সার্কিটে আটকে থাকা = বিক্রি করতে না পারা = খোলার আগ পর্যন্ত অসীম কার্যকর ক্ষতি।
২. **স্মল-ক্যাপে স্প্রেড উপেক্ষা করা।** ৩% স্প্রেড মানে কেনার মুহূর্তেই আপনি ৩% নিচে। তারল্যহীন নামে ঘন ঘন লেনদেনে চক্রবৃদ্ধি হয়ে কেবল এটিই অ্যাকাউন্ট ধ্বংস করে।
৩. **তারল্য নয়, প্রত্যয় দিয়ে আকার নির্ধারণ।** "আমি খুব আত্মবিশ্বাসী" কোনো কোম্পানির ফ্রি ফ্লোটের ১% ধরে রাখার কারণ নয়।
৪. **প্রস্থানের পরিকল্পনায় স্বাভাবিক-বাজারের ADTV ব্যবহার।** আপনি খারাপ বাজারেই বেরোবেন। চাপযুক্ত ADTV দিয়ে পরিকল্পনা করুন। দুটির অনুপাত প্রায়ই ৫:১ বা তারও খারাপ।
৫. **তারল্যহীন স্ক্রিপে মার্কেট অর্ডার দেওয়া।** পাতলা বুকে মার্কেট অর্ডার মই বেয়ে নামে এবং এমন দামে পূরণ হয় যা আপনি কখনো বাছতেন না। **লেনদেন অনুযায়ী শীর্ষ ~৫০ স্ক্রিপের বাইরে সবকিছুতে সর্বদা লিমিট অর্ডার ব্যবহার করুন।**
৬. **ভলিউমকে তারল্যের সঙ্গে গুলিয়ে ফেলা।** সার্কিট-আটকা দিনে সম্পর্কিত পক্ষের মধ্যে হাতেগোনা লেনদেনেও একটি স্ক্রিপ উচ্চ ভলিউম দেখাতে পারে। ভলিউম একটি সংখ্যা। তারল্য হলো ন্যায্য দামে বেরোনোর সক্ষমতা। দুটি এক নয়।`,
    },

    tips: {
      en: `- **Build a hard liquidity filter and never override it.** Suggested floor: ADTV ≥ BDT 50 lakh, relative spread ≤ 1%, stressed days-to-exit ≤ 5. If a stock fails, it does not enter the portfolio regardless of how good the story is.
- **Cap your position at ≤ 10% of ADTV.** This keeps a single-day exit possible at ~10% participation.
- **Watch the pre-opening indicative price.** A large gap between the indicative equilibrium and the previous close signals overnight news is being priced. It is free information available before you commit.
- **Read the depth, not just the top of book.** A best bid of 5,000 shares with nothing behind it is a mirage. Depth-of-market is where the real liquidity picture is.
- **When a stock locks at upper circuit repeatedly with a huge queue, that is not strength — it is an absence of sellers.** The queue that forms on the way up evaporates on the way down. Ask why there are no sellers before you join the buy queue.
- **Log your actual fills versus your intended price.** The difference is your real market impact. After 50 trades you will have a personally calibrated impact model, which is worth more than any textbook estimate.`,
      bn: `- **একটি কঠোর তারল্য ফিল্টার তৈরি করুন এবং কখনো তা লঙ্ঘন করবেন না।** প্রস্তাবিত সর্বনিম্ন: ADTV ≥ ৫০ লক্ষ টাকা, আপেক্ষিক স্প্রেড ≤ ১%, চাপযুক্ত প্রস্থান-দিন ≤ ৫। কোনো শেয়ার ব্যর্থ হলে গল্প যত ভালোই হোক, তা পোর্টফোলিওতে ঢোকে না।
- **আপনার পজিশন ADTV-এর ≤ ১০%-এ সীমাবদ্ধ রাখুন।** এতে ~১০% অংশগ্রহণে একদিনে প্রস্থান সম্ভব থাকে।
- **প্রি-ওপেনিং নির্দেশক মূল্য লক্ষ করুন।** নির্দেশক ভারসাম্য ও পূর্ববর্তী সমাপনী মূল্যের মধ্যে বড় ব্যবধান সংকেত দেয় যে রাতের খবর দামে ধরা হচ্ছে। প্রতিশ্রুতিবদ্ধ হওয়ার আগেই এটি বিনামূল্যের তথ্য।
- **কেবল টপ-অফ-বুক নয়, গভীরতা পড়ুন।** পেছনে কিছু না থাকা ৫,০০০ শেয়ারের সেরা ক্রয়দর একটি মরীচিকা। প্রকৃত তারল্যের ছবি ডেপথ-অফ-মার্কেটে।
- **কোনো শেয়ার বিশাল সারিসহ বারবার ঊর্ধ্ব সার্কিটে আটকালে, সেটি শক্তি নয় — সেটি বিক্রেতার অনুপস্থিতি।** ওঠার পথে যে সারি তৈরি হয় তা নামার পথে বাষ্প হয়ে যায়। ক্রয় সারিতে যোগ দেওয়ার আগে জিজ্ঞেস করুন কেন কোনো বিক্রেতা নেই।
- **আপনার অভিপ্রেত দামের বিপরীতে প্রকৃত ফিল লিপিবদ্ধ করুন।** পার্থক্যটিই আপনার প্রকৃত বাজার প্রভাব। ৫০টি লেনদেনের পর আপনার নিজস্বভাবে ক্যালিব্রেটেড একটি প্রভাব মডেল থাকবে, যা যেকোনো পাঠ্যপুস্তকের অনুমানের চেয়ে বেশি মূল্যবান।`,
    },

    exercises: {
      en: `1. Open your broker terminal. For GP and for any scrip outside the top 100 by turnover, record the top 5 levels of depth on both sides. Compute the relative spread for each. Compute the total BDT value sitting within 1% of the mid on each side.
2. For the illiquid scrip in (1), compute days-to-liquidate for a BDT 10 lakh position using its 30-day ADTV, at 10% and at 20% participation.
3. Pull the 30-day ADTV for that scrip. Now pull its ADTV during the worst 10-day stretch of the last 12 months. Compute the ratio. Redo exercise (2) using the stressed figure.
4. Write the circuit-breaker slab function from scratch in Excel using nested IF, then verify it against the Python output for prices 150, 350, 800, 1500, 3000, 6000.
5. Track one illiquid scrip for 10 trading days. Each day record: open, high, low, close, volume, number of trades. Compute average trade size. What does an average trade size of 50,000 shares on a scrip with 30 trades per day tell you about who is actually trading it?
6. Using your own last 20 trades, compute the average difference between your intended entry price and your actual fill. That number is your personal market impact. Compare it to the 1% assumption in this chapter.`,
      bn: `১. আপনার ব্রোকার টার্মিনাল খুলুন। জিপি এবং লেনদেন অনুযায়ী শীর্ষ ১০০-এর বাইরের যেকোনো স্ক্রিপের জন্য উভয় পাশের শীর্ষ ৫ স্তরের গভীরতা লিপিবদ্ধ করুন। প্রতিটির আপেক্ষিক স্প্রেড গণনা করুন। প্রতি পাশে মধ্যম মূল্যের ১%-এর মধ্যে অবস্থিত মোট টাকার পরিমাণ গণনা করুন।
২. (১)-এর তারল্যহীন স্ক্রিপের জন্য, ৩০ দিনের ADTV ব্যবহার করে ১০ লক্ষ টাকার পজিশনের তারল্যকরণের দিন গণনা করুন — ১০% ও ২০% অংশগ্রহণে।
৩. ঐ স্ক্রিপের ৩০ দিনের ADTV বের করুন। এখন গত ১২ মাসের সবচেয়ে খারাপ ১০ দিনের সময়কালের ADTV বের করুন। অনুপাত গণনা করুন। চাপযুক্ত সংখ্যা ব্যবহার করে অনুশীলনী (২) আবার করুন।
৪. নেস্টেড IF ব্যবহার করে এক্সেলে সার্কিট-ব্রেকার স্ল্যাব ফাংশনটি নতুন করে লিখুন, তারপর ১৫০, ৩৫০, ৮০০, ১৫০০, ৩০০০, ৬০০০ দামের জন্য পাইথন ফলাফলের সঙ্গে যাচাই করুন।
৫. একটি তারল্যহীন স্ক্রিপ ১০ লেনদেন দিবস অনুসরণ করুন। প্রতিদিন লিপিবদ্ধ করুন: খোলা, সর্বোচ্চ, সর্বনিম্ন, সমাপনী, ভলিউম, লেনদেন সংখ্যা। গড় লেনদেনের আকার গণনা করুন। দৈনিক ৩০টি লেনদেনের একটি স্ক্রিপে ৫০,০০০ শেয়ারের গড় লেনদেন আকার আপনাকে কী বলে — আসলে কারা এটি লেনদেন করছে?
৬. আপনার নিজের শেষ ২০টি লেনদেন ব্যবহার করে, অভিপ্রেত প্রবেশ মূল্য ও প্রকৃত ফিলের গড় পার্থক্য গণনা করুন। ঐ সংখ্যাটিই আপনার ব্যক্তিগত বাজার প্রভাব। এই অধ্যায়ের ১% অনুমানের সঙ্গে তুলনা করুন।`,
    },

    summary: {
      en: `- DSE is an order-driven continuous auction with automated price–time priority matching and no main-board market maker.
- The order book's spread is the cost of immediacy; its depth is the real measure of liquidity. Top-of-book alone is misleading.
- Circuit breakers tighten as price rises (10% → 3.75%) to equalize absolute risk, but they **do not protect you** — they convert price risk into liquidity risk. A locked circuit means no exit.
- Round-trip cost = spread + 2×brokerage + 2×impact. On an illiquid textile scrip this can exceed 5.5%, meaning the stock must rise 5.5% before you break even. On GP it is under 1%.
- Days-to-liquidate must be computed with **stressed** ADTV, not normal ADTV, because you will always be exiting in a bad market. The stressed figure is often 5× worse.
- **Discipline established:** liquidity is a hard filter, applied before analysis, and never overridden by conviction. A great company you cannot exit is not a great investment.`,
      bn: `- ডিএসই একটি অর্ডার-চালিত ধারাবাহিক নিলাম, স্বয়ংক্রিয় মূল্য–সময় অগ্রাধিকার ম্যাচিংসহ এবং মূল বোর্ডে কোনো মার্কেট মেকার ছাড়া।
- অর্ডার বুকের স্প্রেড হলো তাৎক্ষণিকতার মূল্য; এর গভীরতাই তারল্যের প্রকৃত পরিমাপ। কেবল টপ-অফ-বুক বিভ্রান্তিকর।
- দাম বাড়ার সঙ্গে সার্কিট ব্রেকার কঠোর হয় (১০% → ৩.৭৫%) পরম ঝুঁকি সমান করতে, কিন্তু এগুলো **আপনাকে রক্ষা করে না** — এগুলো মূল্য ঝুঁকিকে তারল্য ঝুঁকিতে রূপান্তরিত করে। আটকানো সার্কিট মানে কোনো প্রস্থান নেই।
- রাউন্ড-ট্রিপ খরচ = স্প্রেড + ২×ব্রোকারেজ + ২×প্রভাব। তারল্যহীন বস্ত্র স্ক্রিপে এটি ৫.৫% ছাড়াতে পারে, অর্থাৎ ব্রেক-ইভেনের আগে শেয়ারটিকে ৫.৫% বাড়তে হবে। জিপিতে এটি ১%-এর নিচে।
- তারল্যকরণের দিন অবশ্যই **চাপযুক্ত** ADTV দিয়ে গণনা করতে হবে, স্বাভাবিক ADTV দিয়ে নয়, কারণ আপনি সর্বদা খারাপ বাজারেই বেরোবেন। চাপযুক্ত সংখ্যাটি প্রায়ই ৫ গুণ খারাপ।
- **প্রতিষ্ঠিত শৃঙ্খলা:** তারল্য একটি কঠোর ফিল্টার, বিশ্লেষণের আগে প্রয়োগ করা হয়, এবং প্রত্যয় দিয়ে কখনো লঙ্ঘন করা হয় না। যে চমৎকার কোম্পানি থেকে আপনি বেরোতে পারবেন না, সেটি চমৎকার বিনিয়োগ নয়।`,
    },
  },

  interview: [
    {
      q: { en: 'Explain price–time priority.', bn: 'মূল্য–সময় অগ্রাধিকার ব্যাখ্যা করুন।' },
      a: {
        en: 'The matching engine ranks orders first by price (better prices match first — higher bids, lower asks), then among orders at the same price, by time of entry (earlier first). It ensures fairness and rewards both aggressive pricing and early commitment.',
        bn: 'ম্যাচিং ইঞ্জিন প্রথমে মূল্য অনুযায়ী অর্ডার সাজায় (ভালো দাম আগে মেলে — উচ্চতর ক্রয়দর, নিম্নতর বিক্রয়দর), তারপর একই দামের অর্ডারগুলোর মধ্যে প্রবেশের সময় অনুযায়ী (আগেরটি আগে)। এটি ন্যায্যতা নিশ্চিত করে এবং আক্রমণাত্মক মূল্য নির্ধারণ ও আগাম প্রতিশ্রুতি উভয়কেই পুরস্কৃত করে।',
      },
    },
    {
      q: { en: 'Why do DSE circuit-breaker limits tighten as share price rises?', bn: 'শেয়ারের দাম বাড়ার সঙ্গে ডিএসই সার্কিট-ব্রেকার সীমা কেন কঠোর হয়?' },
      a: {
        en: 'Because the limit governs percentage movement but risk is transferred in absolute BDT. A 10% move on a BDT 5,000 share is BDT 500 per share; on a BDT 20 share it is BDT 2. Tightening the percentage as price rises roughly equalizes the absolute risk per share across the slabs.',
        bn: 'কারণ সীমাটি শতকরা পরিবর্তন নিয়ন্ত্রণ করে কিন্তু ঝুঁকি স্থানান্তরিত হয় পরম টাকায়। ৫,০০০ টাকার শেয়ারে ১০% নড়াচড়া মানে প্রতি শেয়ারে ৫০০ টাকা; ২০ টাকার শেয়ারে তা ২ টাকা। দাম বাড়ার সঙ্গে শতাংশ কঠোর করলে স্ল্যাবগুলোর মধ্যে প্রতি শেয়ারে পরম ঝুঁকি মোটামুটি সমান হয়।',
      },
    },
    {
      q: {
        en: 'A stock is locked at lower circuit for three consecutive days. What is your actual risk?',
        bn: 'একটি শেয়ার টানা তিন দিন নিম্ন সার্কিটে আটকে আছে। আপনার প্রকৃত ঝুঁকি কী?',
      },
      a: {
        en: 'Effectively unbounded within the window. The circuit caps the printed price change but does not create buyers. With no bids, no exit is possible at any price, so the position cannot be closed and the loss compounds daily. The risk has transformed from price risk into liquidity risk, which is worse because it removes optionality.',
        bn: 'ঐ সময়সীমার মধ্যে কার্যত সীমাহীন। সার্কিট প্রিন্ট করা মূল্য পরিবর্তনে সীমা দেয় কিন্তু ক্রেতা তৈরি করে না। কোনো ক্রয়াদেশ না থাকলে কোনো দামেই প্রস্থান সম্ভব নয়, তাই পজিশন বন্ধ করা যায় না এবং ক্ষতি প্রতিদিন চক্রবৃদ্ধি হয়। ঝুঁকি মূল্য ঝুঁকি থেকে তারল্য ঝুঁকিতে রূপান্তরিত হয়েছে, যা আরও খারাপ কারণ এটি বিকল্প বেছে নেওয়ার সুযোগ কেড়ে নেয়।',
      },
    },
    {
      q: { en: 'Why should you never place a market order on an illiquid scrip?', bn: 'তারল্যহীন স্ক্রিপে কেন কখনো মার্কেট অর্ডার দেওয়া উচিত নয়?' },
      a: {
        en: 'A market order consumes the book from the top down until filled. On a thin book, it will walk through multiple price levels and fill at a volume-weighted price far from the last trade — sometimes several percent away. A limit order caps that.',
        bn: 'মার্কেট অর্ডার পূরণ না হওয়া পর্যন্ত বুককে ওপর থেকে নিচে গ্রাস করে। পাতলা বুকে এটি একাধিক মূল্যস্তর অতিক্রম করে এবং শেষ লেনদেন থেকে অনেক দূরের একটি ভলিউম-ভারিত দামে পূরণ হয় — কখনো কয়েক শতাংশ দূরে। লিমিট অর্ডার তাতে সীমা দেয়।',
      },
    },
    {
      q: { en: 'Distinguish volume from liquidity.', bn: 'ভলিউম ও তারল্যের পার্থক্য করুন।' },
      a: {
        en: 'Volume is quantity traded. Liquidity is the ability to transact size at a price close to the prevailing mid, quickly. A scrip can have high volume from a few large related-party crosses while having near-zero genuine liquidity — no depth, wide spread, and no ability to exit meaningfully.',
        bn: 'ভলিউম হলো লেনদেনকৃত পরিমাণ। তারল্য হলো প্রচলিত মধ্যম মূল্যের কাছাকাছি দামে দ্রুত বড় পরিমাণ লেনদেনের সক্ষমতা। কয়েকটি বড় সম্পর্কিত-পক্ষ ক্রসের কারণে একটি স্ক্রিপের উচ্চ ভলিউম থাকতে পারে অথচ প্রকৃত তারল্য প্রায় শূন্য — কোনো গভীরতা নেই, প্রশস্ত স্প্রেড, এবং অর্থবহভাবে বেরোনোর সক্ষমতা নেই।',
      },
    },
    {
      q: { en: 'How would you size a position in a stock with BDT 40 lakh ADTV?', bn: '৪০ লক্ষ টাকা ADTV-এর শেয়ারে আপনি কীভাবে পজিশনের আকার নির্ধারণ করবেন?' },
      a: {
        en: 'At a 10%-of-ADTV cap, maximum position ≈ BDT 4 lakh, which allows exit in roughly one day at 10% participation in a normal market. I would then stress-test using the worst 10-day ADTV of the past year — if that is BDT 8 lakh, the same position takes 5 days to exit under stress, which is my tolerance ceiling. Beyond that, I reduce size or reject.',
        bn: 'ADTV-এর ১০% সীমায়, সর্বোচ্চ পজিশন ≈ ৪ লক্ষ টাকা, যা স্বাভাবিক বাজারে ১০% অংশগ্রহণে প্রায় একদিনে প্রস্থানের সুযোগ দেয়। এরপর আমি গত বছরের সবচেয়ে খারাপ ১০ দিনের ADTV দিয়ে স্ট্রেস-টেস্ট করব — সেটি ৮ লক্ষ টাকা হলে চাপে একই পজিশন থেকে বেরোতে ৫ দিন লাগবে, যা আমার সহনশীলতার সর্বোচ্চ সীমা। এর বেশি হলে আমি আকার কমাই বা প্রত্যাখ্যান করি।',
      },
    },
  ],

  quiz: [
    {
      q: { en: "DSE's main board uses:", bn: 'ডিএসই-র মূল বোর্ড ব্যবহার করে:' },
      options: {
        en: ['A market maker', 'Order-driven continuous auction', 'Call auction only', 'Dealer quotes'],
        bn: ['একজন মার্কেট মেকার', 'অর্ডার-চালিত ধারাবাহিক নিলাম', 'কেবল কল নিলাম', 'ডিলার কোট'],
      },
      answer: 1,
    },
    {
      q: { en: 'Matching priority is:', bn: 'ম্যাচিং অগ্রাধিকার হলো:' },
      options: {
        en: ['Time then price', 'Price then time', 'Quantity then price', 'Random'],
        bn: ['সময় তারপর মূল্য', 'মূল্য তারপর সময়', 'পরিমাণ তারপর মূল্য', 'এলোমেলো'],
      },
      answer: 1,
    },
    {
      q: { en: 'Spread is the cost of:', bn: 'স্প্রেড হলো যার মূল্য:' },
      options: {
        en: ['Brokerage', 'Immediacy', 'Settlement', 'Tax'],
        bn: ['ব্রোকারেজ', 'তাৎক্ষণিকতা', 'নিষ্পত্তি', 'কর'],
      },
      answer: 1,
    },
    {
      q: {
        en: 'A share with previous close BDT 800 has a circuit limit of:',
        bn: '৮০০ টাকা পূর্ববর্তী সমাপনী মূল্যের শেয়ারের সার্কিট সীমা:',
      },
      options: { en: ['10%', '8.75%', '7.50%', '6.25%'], bn: ['১০%', '৮.৭৫%', '৭.৫০%', '৬.২৫%'] },
      answer: 2,
    },
    {
      q: { en: 'Locked at lower circuit means:', bn: 'নিম্ন সার্কিটে আটকে থাকা মানে:' },
      options: {
        en: ['You are protected', 'You likely cannot sell', 'Trading is halted for all scrips', 'The price will rebound'],
        bn: ['আপনি সুরক্ষিত', 'আপনি সম্ভবত বিক্রি করতে পারবেন না', 'সব স্ক্রিপের লেনদেন বন্ধ', 'দাম আবার বাড়বে'],
      },
      answer: 1,
    },
    {
      q: { en: 'Days-to-liquidate uses which denominator?', bn: 'তারল্যকরণের দিন কোন হর ব্যবহার করে?' },
      options: {
        en: ['Market cap', 'ADTV × participation rate', 'Free float', 'Shares outstanding'],
        bn: ['বাজার মূলধন', 'ADTV × অংশগ্রহণ হার', 'ফ্রি ফ্লোট', 'বকেয়া শেয়ার'],
      },
      answer: 1,
    },
    {
      q: { en: 'Round-trip cost includes the spread how many times?', bn: 'রাউন্ড-ট্রিপ খরচে স্প্রেড কতবার অন্তর্ভুক্ত?' },
      options: { en: ['Zero', 'Once', 'Twice', 'Four times'], bn: ['শূন্য', 'একবার', 'দুইবার', 'চারবার'] },
      answer: 1,
    },
    {
      q: { en: 'On a thin book, the correct order type is:', bn: 'পাতলা বুকে সঠিক অর্ডার ধরন হলো:' },
      options: { en: ['Market', 'Limit', 'Stop-market', 'Any'], bn: ['মার্কেট', 'লিমিট', 'স্টপ-মার্কেট', 'যেকোনো'] },
      answer: 1,
    },
    {
      q: { en: 'Stressed ADTV versus normal ADTV is typically:', bn: 'স্বাভাবিক ADTV-এর তুলনায় চাপযুক্ত ADTV সাধারণত:' },
      options: {
        en: ['Higher', 'Identical', 'Much lower', 'Unpredictable'],
        bn: ['বেশি', 'অভিন্ন', 'অনেক কম', 'অননুমেয়'],
      },
      answer: 2,
    },
    {
      q: {
        en: 'A position equal to 1% of free float in a small cap is:',
        bn: 'স্মল-ক্যাপে ফ্রি ফ্লোটের ১% সমান একটি পজিশন হলো:',
      },
      options: {
        en: ['Prudent', 'Dangerous — exit may be impossible', 'Irrelevant', 'Required for meaningful returns'],
        bn: ['বিচক্ষণ', 'বিপজ্জনক — প্রস্থান অসম্ভব হতে পারে', 'অপ্রাসঙ্গিক', 'অর্থবহ রিটার্নের জন্য প্রয়োজনীয়'],
      },
      answer: 1,
    },
  ],
};
