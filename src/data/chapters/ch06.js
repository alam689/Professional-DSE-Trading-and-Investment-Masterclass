/**
 * Chapter 6 — Bull & Bear Markets
 * Part I, Stock Market Foundation.
 */

export default {
  n: 6,
  tools: [],

  excelSheet: {
    filename: 'ch06-drawdown-and-breadth.xlsx',
    sheetName: 'Drawdown & Breadth',
    cells: [
      { cell: 'A1', v: '— Drawdown & Recovery —' },
      { cell: 'A2', v: 'Peak Index / Price' }, { cell: 'B2', v: 8918 },
      { cell: 'A3', v: 'Current Index / Price' }, { cell: 'B3', v: 3600 },
      { cell: 'A4', v: 'Drawdown (%)' }, { cell: 'B4', f: '(B3-B2)/B2*100' },
      { cell: 'A5', v: 'Gain Required to Recover (%)' }, { cell: 'B5', f: '(B2/B3-1)*100' },
      { cell: 'A6', v: 'Years at 12% p.a. to Recover' }, { cell: 'B6', f: 'LOG(B2/B3)/LOG(1.12)' },

      { cell: 'A8', v: '— Breadth —' },
      { cell: 'A9', v: 'Advancing Issues' }, { cell: 'B9', v: 82 },
      { cell: 'A10', v: 'Declining Issues' }, { cell: 'B10', v: 241 },
      { cell: 'A11', v: 'Unchanged' }, { cell: 'B11', v: 27 },
      { cell: 'A12', v: 'Advance-Decline Ratio' }, { cell: 'B12', f: 'B9/B10' },
      { cell: 'A13', v: 'Net Advances' }, { cell: 'B13', f: 'B9-B10' },
      { cell: 'A14', v: 'Breadth (% advancing)' }, { cell: 'B14', f: 'B9/(B9+B10+B11)*100' },

      { cell: 'A16', v: '— Divergence Check —' },
      { cell: 'A17', v: 'Index Change Today (%)' }, { cell: 'B17', v: 0.8 },
      { cell: 'A18', v: 'DIVERGENCE?' },
      {
        cell: 'B18',
        f: 'IF(AND(B17>0,B13<0),"YES - index up on negative breadth. Narrow, led by heavyweights.",IF(AND(B17<0,B13>0),"YES - index down on positive breadth.","No - index and breadth agree"))',
      },

      { cell: 'A20', v: '— Liquidity —' },
      { cell: 'A21', v: 'Turnover Velocity (% p.a.)' }, { cell: 'B21', v: 28 },
      { cell: 'A22', v: 'LIQUIDITY SIGNAL' },
      {
        cell: 'B22',
        f: 'IF(B21>50,"Speculative churn - warning",IF(B21<15,"Dormant - no participation","Normal"))',
      },
    ],
  },

  objectives: {
    en: [
      'Explain why the conventional 20% definition of a bull or bear market is backward-looking and near-useless in real time.',
      'Define market phase by breadth, liquidity, and credit rather than by index level.',
      'Compute drawdown and the asymmetric gain required to recover from it.',
      'Detect index-breadth divergence and explain what it reveals about a narrow rally.',
      'Explain the floor-price era as a third state in which price stops clearing altogether.',
    ],
    bn: [
      'বুল বা বিয়ার মার্কেটের প্রচলিত ২০% সংজ্ঞা কেন পশ্চাৎমুখী ও বাস্তব সময়ে প্রায় অকেজো তা ব্যাখ্যা করা।',
      'সূচকের স্তর নয়, ব্যাপ্তি, তারল্য ও ঋণ দিয়ে বাজার পর্যায় সংজ্ঞায়িত করা।',
      'ড্রডাউন এবং তা থেকে পুনরুদ্ধারে প্রয়োজনীয় অপ্রতিসম উত্থান গণনা করা।',
      'সূচক-ব্যাপ্তি বিচ্যুতি শনাক্ত করা এবং তা একটি সংকীর্ণ উত্থান সম্পর্কে কী প্রকাশ করে তা ব্যাখ্যা করা।',
      'ফ্লোর প্রাইস যুগকে এমন একটি তৃতীয় অবস্থা হিসেবে ব্যাখ্যা করা যেখানে দাম আদৌ নিষ্পত্তি হওয়া বন্ধ করে।',
    ],
  },

  blocks: {
    theory: {
      en: `### The conventional definition, and why it fails

A **bull market** is conventionally a rise of 20% or more from a trough; a **bear market**, a fall of 20% or more from a peak.

This definition has one virtue — it is unambiguous — and one fatal flaw: **it can only be applied after the fact.** You know you were in a bear market once the 20% has already been lost. As an operational tool for deciding whether to hold or reduce, it is worthless. By the time it fires, the damage it was supposed to warn you about has happened.

Worse, on a market with the DSE's concentration, the 20% is measured on an index that a handful of scrips can move independently of everything else. Chapter 1 established that Grameenphone alone has at times been ~10% of market capitalisation. **The index can hold up while the market beneath it is destroyed.**

### A working definition

A market phase is better defined by three conditions than by one number:

**1. Breadth** — are most stocks participating, or a few?
**2. Liquidity** — is turnover expanding or contracting, and at what velocity?
**3. Credit** — is margin available and expanding, and is private-sector credit growth accelerating?

A **bull market** is a condition in which breadth is expanding, turnover is rising, and credit is available. A **bear market** is the reverse: narrowing breadth, contracting turnover, withdrawing credit.

Note that price is not in the definition. **Price is the output. These three are the inputs.** That is what makes them usable before the fact rather than after.

### The four phases

| Phase | Breadth | Volume | Who is buying | Who is selling |
|---|---|---|---|---|
| **Accumulation** | Narrow, quiet | Low | Informed, patient capital | Exhausted holders |
| **Markup** | Expanding | Rising | Institutions, then retail | Early buyers trimming |
| **Distribution** | Narrowing at highs | High but churning | Late retail | Informed capital, sponsors |
| **Markdown** | Collapsing | Spikes then dries | Nobody willingly | Forced sellers |

The most dangerous phase is **distribution**, because it looks like markup. Prices are at highs, headlines are positive, turnover is heavy. The difference is *breadth*: in markup, gains broaden; in distribution, the index is carried by fewer and fewer names while the majority quietly roll over.

### What makes a Bangladeshi bear market different

In most markets a bear market is a repricing of expected earnings. **On the DSE it is more often a leverage event.**

Chapter 5 established the mechanism: falling prices breach maintenance ratios, merchant banks force-sell, that supply drives prices lower, more accounts breach. Nothing in that loop involves anyone's view of corporate earnings.

The practical consequence is that **a DSE bear market ends when forced supply is exhausted, not when valuations become attractive.** Buying "because it is cheap" during a cascade is buying into a seller who does not care what anything is worth and has not finished. Cheapness is not a catalyst. Exhaustion is.

### The third state: administered markets

Bull and bear are not exhaustive. Bangladesh has repeatedly produced a third condition in which **price stops clearing altogether.**

During the **floor-price episodes** — notably 2020 and 2022 — BSEC imposed a price below which a security could not trade. The intent was to stop a decline. The effect was to stop the *market*:

- If the true clearing price sat below the floor, no seller could find a buyer, so **volume collapsed**.
- The quoted price was not a price. It was an administrative boundary that no transaction occurred at.
- Investors were not protected. They were **frozen** — holding positions they could not exit at a price that did not exist.
- Index levels became meaningless, because an index of non-trading securities measures nothing.

**Read this carefully, because it is the single most Bangladesh-specific risk in this book.** In a normal bear market you lose money and retain the option to leave. In a floor-price regime you retain a number on a screen and lose the option. Chapter 2 argued that circuit breakers convert price risk into liquidity risk. A floor price completes that conversion: **it removes liquidity entirely and calls it protection.**

Position sizing must survive a market in which selling is not permitted. That is not a hypothetical for the DSE. It is recent history.`,
      bn: `### প্রচলিত সংজ্ঞা, এবং কেন তা ব্যর্থ হয়

প্রচলিতভাবে **বুল মার্কেট** হলো তলানি থেকে ২০% বা তার বেশি উত্থান; **বিয়ার মার্কেট**, শীর্ষ থেকে ২০% বা তার বেশি পতন।

এই সংজ্ঞার একটি গুণ আছে — এটি দ্ব্যর্থহীন — এবং একটি মারাত্মক ত্রুটি: **এটি কেবল ঘটনার পরেই প্রয়োগ করা যায়।** ২০% হারিয়ে ফেলার পরেই আপনি জানতে পারেন যে আপনি বিয়ার মার্কেটে ছিলেন। ধরে রাখা না কমানোর সিদ্ধান্ত নেওয়ার কার্যকর হাতিয়ার হিসেবে এটি মূল্যহীন। যখন এটি সংকেত দেয়, ততক্ষণে যে ক্ষতি সম্পর্কে সতর্ক করার কথা ছিল তা ঘটে গেছে।

আরও খারাপ, ডিএসই-র মতো কেন্দ্রীভবনের বাজারে ঐ ২০% মাপা হয় এমন একটি সূচকে যাকে হাতেগোনা কয়েকটি স্ক্রিপ বাকি সবকিছু নির্বিশেষে নাড়াতে পারে। অধ্যায় ১ প্রতিষ্ঠা করেছে যে কেবল গ্রামীণফোনই কখনো কখনো বাজার মূলধনের ~১০% ছিল। **সূচক টিকে থাকতে পারে যখন তার নিচের বাজারটি ধ্বংস হয়ে যাচ্ছে।**

### একটি কার্যকর সংজ্ঞা

একটি বাজার পর্যায় একটি সংখ্যার চেয়ে তিনটি শর্ত দিয়ে ভালোভাবে সংজ্ঞায়িত হয়:

**১. ব্যাপ্তি** — অধিকাংশ শেয়ার অংশ নিচ্ছে, নাকি কয়েকটি?
**২. তারল্য** — লেনদেন বাড়ছে না কমছে, এবং কোন গতিতে?
**৩. ঋণ** — মার্জিন পাওয়া যাচ্ছে ও বাড়ছে কি, এবং বেসরকারি খাতে ঋণ প্রবৃদ্ধি ত্বরান্বিত হচ্ছে কি?

**বুল মার্কেট** এমন একটি অবস্থা যেখানে ব্যাপ্তি বাড়ছে, লেনদেন বাড়ছে, এবং ঋণ পাওয়া যাচ্ছে। **বিয়ার মার্কেট** এর বিপরীত: সংকুচিত ব্যাপ্তি, কমতে থাকা লেনদেন, প্রত্যাহৃত ঋণ।

লক্ষ করুন সংজ্ঞায় দাম নেই। **দাম হলো ফলাফল। এই তিনটি হলো উপাদান।** এ কারণেই এগুলো ঘটনার পরে নয়, আগেই ব্যবহারযোগ্য।

### চারটি পর্যায়

| পর্যায় | ব্যাপ্তি | ভলিউম | কে কিনছে | কে বেচছে |
|---|---|---|---|---|
| **সঞ্চয়ন** | সংকীর্ণ, নীরব | কম | অবহিত, ধৈর্যশীল মূলধন | নিঃশেষ ধারকরা |
| **উত্থান** | প্রসারিত | বাড়ন্ত | প্রতিষ্ঠান, তারপর খুচরা | আগের ক্রেতারা কমাচ্ছেন |
| **বণ্টন** | শীর্ষে সংকুচিত | ভারী কিন্তু মন্থনরত | দেরিতে আসা খুচরা | অবহিত মূলধন, উদ্যোক্তা |
| **পতন** | ভেঙে পড়ছে | লাফ দিয়ে তারপর শুকিয়ে যায় | স্বেচ্ছায় কেউ নয় | বাধ্যতামূলক বিক্রেতা |

সবচেয়ে বিপজ্জনক পর্যায় **বণ্টন**, কারণ দেখতে উত্থানের মতো। দাম শীর্ষে, শিরোনাম ইতিবাচক, লেনদেন ভারী। পার্থক্য হলো *ব্যাপ্তি*: উত্থানে লাভ ছড়ায়; বণ্টনে সূচক ক্রমশ কম নামের কাঁধে চড়ে যখন সংখ্যাগরিষ্ঠ চুপচাপ উল্টে যায়।

### বাংলাদেশি বিয়ার মার্কেট কেন আলাদা

বেশিরভাগ বাজারে বিয়ার মার্কেট হলো প্রত্যাশিত আয়ের পুনর্মূল্যায়ন। **ডিএসই-তে এটি প্রায়ই একটি লিভারেজ ঘটনা।**

অধ্যায় ৫ কৌশলটি প্রতিষ্ঠা করেছে: পতনশীল দাম রক্ষণাবেক্ষণ অনুপাত লঙ্ঘন করে, মার্চেন্ট ব্যাংক বাধ্যতামূলক বিক্রি করে, ঐ সরবরাহ দাম নামায়, আরও অ্যাকাউন্ট লঙ্ঘন করে। ঐ চক্রের কিছুই কারো কর্পোরেট আয়ের দৃষ্টিভঙ্গির সঙ্গে সম্পর্কিত নয়।

ব্যবহারিক পরিণতি হলো **ডিএসই বিয়ার মার্কেট শেষ হয় যখন বাধ্যতামূলক সরবরাহ নিঃশেষ হয়, মূল্যায়ন আকর্ষণীয় হলে নয়।** ধারাবাহিক প্রতিক্রিয়ার সময় "সস্তা বলে" কেনা মানে এমন এক বিক্রেতার কাছ থেকে কেনা যিনি কীসের কত দাম তা নিয়ে ভাবেন না এবং যাঁর বিক্রি শেষ হয়নি। সস্তা হওয়া কোনো চালক নয়। নিঃশেষ হওয়া চালক।

### তৃতীয় অবস্থা: প্রশাসিত বাজার

বুল ও বিয়ারই সব নয়। বাংলাদেশ বারবার এমন একটি তৃতীয় অবস্থা তৈরি করেছে যেখানে **দাম আদৌ নিষ্পত্তি হওয়া বন্ধ করে।**

**ফ্লোর প্রাইস পর্বগুলোতে** — বিশেষত ২০২০ ও ২০২২ — বিএসইসি এমন একটি দাম আরোপ করে যার নিচে কোনো সিকিউরিটি লেনদেন হতে পারত না। উদ্দেশ্য ছিল পতন থামানো। ফল হলো *বাজার* থেমে যাওয়া:

- প্রকৃত নিষ্পত্তি মূল্য ফ্লোরের নিচে থাকলে কোনো বিক্রেতা ক্রেতা পেতেন না, তাই **ভলিউম ধসে পড়ে**।
- উদ্ধৃত দামটি দাম ছিল না। এটি ছিল একটি প্রশাসনিক সীমা যেখানে কোনো লেনদেনই ঘটেনি।
- বিনিয়োগকারীরা সুরক্ষিত হননি। তাঁরা **জমে গিয়েছিলেন** — এমন দামে বেরোতে না পারা পজিশন ধরে যে দামের অস্তিত্বই ছিল না।
- সূচকের স্তর অর্থহীন হয়ে পড়ে, কারণ লেনদেন-না-হওয়া সিকিউরিটিজের সূচক কিছুই মাপে না।

**এটি মনোযোগ দিয়ে পড়ুন, কারণ এই বইয়ের সবচেয়ে বাংলাদেশ-নির্দিষ্ট ঝুঁকি এটিই।** স্বাভাবিক বিয়ার মার্কেটে আপনি টাকা হারান কিন্তু বেরোনোর বিকল্প ধরে রাখেন। ফ্লোর প্রাইস ব্যবস্থায় আপনি পর্দায় একটি সংখ্যা ধরে রাখেন এবং বিকল্পটি হারান। অধ্যায় ২ যুক্তি দিয়েছিল সার্কিট ব্রেকার মূল্য ঝুঁকিকে তারল্য ঝুঁকিতে রূপান্তরিত করে। ফ্লোর প্রাইস ঐ রূপান্তর সম্পূর্ণ করে: **এটি তারল্য সম্পূর্ণ সরিয়ে দিয়ে তাকে সুরক্ষা বলে।**

পজিশন সাইজিং এমন বাজারে টিকতে হবে যেখানে বিক্রি করার অনুমতি নেই। ডিএসই-র জন্য এটি কল্পনা নয়। এটি সাম্প্রতিক ইতিহাস।`,
    },

    simple: {
      en: `**Bull market:** most things go up, lots of people are trading, and money is easy to borrow.
**Bear market:** most things go down, trading dries up, and lenders want their money back.

Notice neither definition mentions a percentage. That is deliberate.

### The index lies

Imagine a class of 30 students. One of them is enormous — he weighs as much as the other five put together. If he gains 10 kilos and everyone else loses 2, the **class average goes up** while 29 students got lighter.

That is DSEX with Grameenphone in it. "The market went up today" can mean 300 companies fell and one big one rose.

**The honest question is not "did the index rise?" but "how many things rose?"** That is breadth, and it is published free every day: advances, declines, unchanged.

### The arithmetic that ruins people

Lose 50%, and you need **+100%** to get back to even. Not +50%.

| You lose | You need to recover |
|---|---|
| 10% | 11% |
| 25% | 33% |
| 50% | 100% |
| 75% | 300% |
| 90% | 900% |

Look at that last row and remember the margin account from Chapter 5 — the one that lost 90% when the share fell 45%. That investor needs the share to go up **nine times** to get their money back. At a very good 12% a year, that is over twenty years.

**This is why avoiding the large loss matters more than catching the large gain.** The maths is not symmetric, and it never forgives.

### And a third thing that is neither

Sometimes the government says: this share may not trade below 40 taka.

It sounds protective. Here is what actually happens. If everybody thinks it is worth 25, then at 40 there are no buyers. So nothing trades at all. The screen shows 40. **You cannot sell at 40. You cannot sell at 25. You cannot sell.**

You have not been given a floor. You have been given a number and had the door locked.`,
      bn: `**বুল মার্কেট:** বেশিরভাগ জিনিস বাড়ে, অনেক মানুষ লেনদেন করে, আর টাকা ধার পাওয়া সহজ।
**বিয়ার মার্কেট:** বেশিরভাগ জিনিস পড়ে, লেনদেন শুকিয়ে যায়, আর ঋণদাতারা টাকা ফেরত চান।

লক্ষ করুন কোনো সংজ্ঞাতেই কোনো শতাংশ নেই। এটি ইচ্ছাকৃত।

### সূচক মিথ্যা বলে

৩০ জন ছাত্রের একটি ক্লাস কল্পনা করুন। তাদের একজন বিশাল — তার ওজন বাকি পাঁচজনের সমান। সে ১০ কেজি বাড়ল আর বাকি সবাই ২ কেজি করে কমল, তাহলে **ক্লাসের গড় বাড়বে** যখন ২৯ জন ছাত্র হালকা হয়েছে।

গ্রামীণফোনসহ DSEX ঠিক তাই। "আজ বাজার বেড়েছে" মানে হতে পারে ৩০০টি কোম্পানি পড়েছে আর একটি বড় কোম্পানি বেড়েছে।

**সৎ প্রশ্নটি "সূচক কি বেড়েছে?" নয়, বরং "কতগুলো জিনিস বেড়েছে?"** সেটিই ব্যাপ্তি, এবং তা প্রতিদিন বিনামূল্যে প্রকাশিত হয়: বৃদ্ধি, পতন, অপরিবর্তিত।

### যে পাটিগণিত মানুষকে ধ্বংস করে

৫০% হারান, আর সমান হতে আপনার দরকার **+১০০%**। +৫০% নয়।

| আপনি হারান | পুনরুদ্ধারে দরকার |
|---|---|
| ১০% | ১১% |
| ২৫% | ৩৩% |
| ৫০% | ১০০% |
| ৭৫% | ৩০০% |
| ৯০% | ৯০০% |

শেষ সারিটি দেখুন এবং অধ্যায় ৫-এর মার্জিন অ্যাকাউন্টটি মনে করুন — যেটি শেয়ার ৪৫% পড়ায় ৯০% হারিয়েছিল। ঐ বিনিয়োগকারীর টাকা ফেরত পেতে শেয়ারটিকে **নয় গুণ** বাড়তে হবে। বছরে খুব ভালো ১২% হারেও তা কুড়ি বছরের বেশি।

**এ কারণেই বড় লাভ ধরার চেয়ে বড় ক্ষতি এড়ানো বেশি গুরুত্বপূর্ণ।** গণিতটি প্রতিসম নয়, এবং এটি কখনো ক্ষমা করে না।

### আর একটি তৃতীয় জিনিস যা কোনোটিই নয়

কখনো কখনো সরকার বলে: এই শেয়ার ৪০ টাকার নিচে লেনদেন হতে পারবে না।

শুনতে সুরক্ষামূলক লাগে। আসলে যা ঘটে তা এই। সবাই যদি মনে করে এর দাম ২৫, তবে ৪০-এ কোনো ক্রেতা নেই। তাই কিছুই লেনদেন হয় না। পর্দা দেখায় ৪০। **আপনি ৪০-এ বেচতে পারবেন না। ২৫-এও পারবেন না। আপনি বেচতেই পারবেন না।**

আপনাকে মেঝে দেওয়া হয়নি। আপনাকে একটি সংখ্যা দেওয়া হয়েছে আর দরজায় তালা দেওয়া হয়েছে।`,
    },

    example: {
      en: `### The 2010–11 drawdown, in recovery terms

DGEN peaked near **8,918** in December 2010 and fell to roughly **3,600** by early 2012.

$$\\text{Drawdown} = \\frac{3{,}600 - 8{,}918}{8{,}918} \\times 100 = -59.6\\%$$

$$\\text{Gain required to recover} = \\left(\\frac{8{,}918}{3{,}600} - 1\\right) \\times 100 = +147.7\\%$$

At a compound 12% a year:

$$t = \\frac{\\ln(8{,}918/3{,}600)}{\\ln(1.12)} = \\frac{0.907}{0.1133} = 8.0 \\text{ years}$$

**Eight years of good returns simply to return to the starting point** — and that is the index, not the leveraged retail account, which as Chapter 5 showed was down far more.

*(A reminder from Chapter 1: DGEN was discontinued in 2013 and cannot be compared with DSEX levels. This calculation is entirely within DGEN, which is why it is legitimate.)*

### Reading breadth against the index

Two trading days on the same exchange:

| | Day A | Day B |
|---|---|---|
| DSEX change | +0.8% | +0.8% |
| Advancing issues | 241 | 82 |
| Declining issues | 82 | 241 |
| A/D ratio | 2.94 | 0.34 |
| Net advances | +159 | −159 |
| Turnover | BDT 950 cr | BDT 1,400 cr |

**The headline is identical. The markets are opposites.**

Day A is a genuine broad advance — three stocks rise for every one that falls. Money is moving into the market generally.

Day B is a narrow, heavyweight-driven print. The index rose because one or two large-cap names rose, while **241 companies fell**. The high turnover makes it look healthy; combined with negative breadth it more likely indicates distribution — informed holders selling into strength, with the index masking it.

**A newspaper reports both days as "market gains 0.8%."** Only breadth distinguishes them, and it is free.

### The floor-price state

Consider a scrip whose honest clearing price is BDT 25, with an imposed floor at BDT 40.

| Metric | Before floor | Under floor |
|---|---|---|
| Quoted price | 42 → falling | 40 (static) |
| Daily volume | 8 lakh shares | ~0 |
| Bid depth at quote | Thin but present | None |
| Can you sell? | Yes, at a loss | **No** |
| Reported portfolio value | Marked at 42 | Marked at 40 |
| Realisable value | ~42 | **Unknown, unrealisable** |

Note the last two rows. Your statement shows a value of 40. That number is fiction — not because the company is worth less, but because **no transaction can occur to test it.** You hold an asset whose reported value cannot be converted into money at any price.

**This is why Chapter 1 insisted that regulatory intervention is a permanent feature, not an anomaly, and that position sizing must survive a market where you cannot sell.** A floor price is the specific mechanism by which that happens.`,
      bn: `### ২০১০–১১ ড্রডাউন, পুনরুদ্ধারের ভাষায়

DGEN ২০১০ সালের ডিসেম্বরে প্রায় **৮,৯১৮**-এ শীর্ষে ওঠে এবং ২০১২ সালের শুরুতে প্রায় **৩,৬০০**-এ নামে।

$$\\text{ড্রডাউন} = \\frac{3{,}600 - 8{,}918}{8{,}918} \\times 100 = -59.6\\%$$

$$\\text{পুনরুদ্ধারে প্রয়োজনীয় উত্থান} = \\left(\\frac{8{,}918}{3{,}600} - 1\\right) \\times 100 = +147.7\\%$$

বার্ষিক চক্রবৃদ্ধি ১২% হারে:

$$t = \\frac{\\ln(8{,}918/3{,}600)}{\\ln(1.12)} = 8.0 \\text{ বছর}$$

**কেবল শুরুর বিন্দুতে ফেরার জন্যই আট বছরের ভালো রিটার্ন** — আর এটি সূচক, লিভারেজড খুচরা অ্যাকাউন্ট নয়, যা অধ্যায় ৫ দেখিয়েছে অনেক বেশি পড়েছিল।

*(অধ্যায় ১ থেকে স্মরণ: DGEN ২০১৩ সালে বন্ধ হয়েছে এবং DSEX-এর স্তরের সঙ্গে তুলনীয় নয়। এই হিসাব সম্পূর্ণ DGEN-এর ভেতরেই, তাই এটি বৈধ।)*

### সূচকের বিপরীতে ব্যাপ্তি পড়া

একই এক্সচেঞ্জে দুটি লেনদেন দিবস:

| | দিন ক | দিন খ |
|---|---|---|
| DSEX পরিবর্তন | +০.৮% | +০.৮% |
| বৃদ্ধিপ্রাপ্ত | ২৪১ | ৮২ |
| পতনপ্রাপ্ত | ৮২ | ২৪১ |
| A/D অনুপাত | ২.৯৪ | ০.৩৪ |
| নিট বৃদ্ধি | +১৫৯ | −১৫৯ |
| লেনদেন | ৯৫০ কোটি টাকা | ১,৪০০ কোটি টাকা |

**শিরোনাম অভিন্ন। বাজার দুটি বিপরীত।**

দিন ক একটি প্রকৃত ব্যাপক অগ্রগতি — প্রতি একটি পতনের বিপরীতে তিনটি শেয়ার বাড়ছে। টাকা সাধারণভাবে বাজারে ঢুকছে।

দিন খ একটি সংকীর্ণ, বড়-কোম্পানি-চালিত পাঠ। সূচক বেড়েছে কারণ এক-দুটি বড় নাম বেড়েছে, যখন **২৪১টি কোম্পানি পড়েছে**। উচ্চ লেনদেন একে স্বাস্থ্যকর দেখায়; ঋণাত্মক ব্যাপ্তির সঙ্গে মিলে এটি বরং বণ্টন নির্দেশ করে — অবহিত ধারকরা শক্তির মধ্যে বিক্রি করছেন, আর সূচক তা ঢেকে রাখছে।

**সংবাদপত্র দুটি দিনকেই "বাজার ০.৮% বেড়েছে" বলে ছাপে।** কেবল ব্যাপ্তিই এদের আলাদা করে, এবং তা বিনামূল্যের।

### ফ্লোর প্রাইস অবস্থা

এমন একটি স্ক্রিপ ভাবুন যার সৎ নিষ্পত্তি মূল্য ২৫ টাকা, আর আরোপিত ফ্লোর ৪০ টাকা।

| পরিমাপ | ফ্লোরের আগে | ফ্লোরের অধীনে |
|---|---|---|
| উদ্ধৃত দাম | ৪২ → পড়ছে | ৪০ (স্থির) |
| দৈনিক ভলিউম | ৮ লক্ষ শেয়ার | ~০ |
| উদ্ধৃত দামে ক্রয় গভীরতা | পাতলা কিন্তু আছে | নেই |
| আপনি কি বেচতে পারবেন? | হ্যাঁ, ক্ষতিতে | **না** |
| প্রতিবেদিত পোর্টফোলিও মূল্য | ৪২-এ চিহ্নিত | ৪০-এ চিহ্নিত |
| আদায়যোগ্য মূল্য | ~৪২ | **অজানা, অনাদায়যোগ্য** |

শেষ দুটি সারি লক্ষ করুন। আপনার বিবরণী ৪০ মূল্য দেখাচ্ছে। ঐ সংখ্যাটি কল্পকাহিনি — কোম্পানির দাম কম বলে নয়, বরং **তা যাচাই করার মতো কোনো লেনদেনই ঘটতে পারে না বলে।** আপনি এমন একটি সম্পদ ধরে আছেন যার প্রতিবেদিত মূল্য কোনো দামেই টাকায় রূপান্তরিত করা যায় না।

**এ কারণেই অধ্যায় ১ জোর দিয়েছিল যে নিয়ন্ত্রক হস্তক্ষেপ একটি স্থায়ী বৈশিষ্ট্য, ব্যতিক্রম নয়, এবং পজিশন সাইজিং এমন বাজারে টিকতে হবে যেখানে আপনি বিক্রি করতে পারবেন না।** ফ্লোর প্রাইস হলো সেই নির্দিষ্ট কৌশল যার মাধ্যমে তা ঘটে।`,
    },

    formula: {
      en: `**Drawdown** from a peak:
$$DD = \\frac{P_{current} - P_{peak}}{P_{peak}} \\times 100$$

**Gain required to recover** — the asymmetry:
$$R = \\left(\\frac{1}{1 + DD} - 1\\right) \\times 100 \\qquad (DD \\text{ as a negative fraction})$$

Equivalently $R = (P_{peak}/P_{current} - 1) \\times 100$.

**Years to recover** at compound annual rate $g$:
$$t = \\frac{\\ln(P_{peak} / P_{current})}{\\ln(1 + g)}$$

**Advance-Decline Ratio:**
$$ADR = \\frac{\\text{Advancing Issues}}{\\text{Declining Issues}}$$

**Net Advances:**
$$NA = \\text{Advances} - \\text{Declines}$$

**Advance-Decline Line** — cumulative, and the series matters more than any single value:
$$ADL_t = ADL_{t-1} + NA_t$$

**Breadth percentage:**
$$B = \\frac{\\text{Advances}}{\\text{Advances} + \\text{Declines} + \\text{Unchanged}} \\times 100$$

**Divergence condition.** A warning fires when index direction and breadth direction disagree:
$$\\text{Divergence} = \\text{sign}(\\Delta \\text{Index}) \\neq \\text{sign}(NA)$$

**Turnover velocity** (from Chapter 1), used here as a phase indicator:
$$V = \\frac{\\text{Daily Turnover} \\times 250}{\\text{Market Cap}} \\times 100$$

with $V > 50\\%$ indicating speculative churn and $V < 15\\%$ indicating dormancy.`,
      bn: `শীর্ষ থেকে **ড্রডাউন**:
$$DD = \\frac{P_{current} - P_{peak}}{P_{peak}} \\times 100$$

**পুনরুদ্ধারে প্রয়োজনীয় উত্থান** — অপ্রতিসমতা:
$$R = \\left(\\frac{1}{1 + DD} - 1\\right) \\times 100 \\qquad (DD \\text{ ঋণাত্মক ভগ্নাংশ হিসেবে})$$

সমতুল্যভাবে $R = (P_{peak}/P_{current} - 1) \\times 100$।

চক্রবৃদ্ধি বার্ষিক হার $g$-এ **পুনরুদ্ধারে বছর**:
$$t = \\frac{\\ln(P_{peak} / P_{current})}{\\ln(1 + g)}$$

**বৃদ্ধি-পতন অনুপাত:**
$$ADR = \\frac{\\text{বৃদ্ধিপ্রাপ্ত}}{\\text{পতনপ্রাপ্ত}}$$

**নিট বৃদ্ধি:**
$$NA = \\text{বৃদ্ধি} - \\text{পতন}$$

**বৃদ্ধি-পতন রেখা** — পুঞ্জীভূত, এবং যেকোনো একক মানের চেয়ে ধারাটি বেশি গুরুত্বপূর্ণ:
$$ADL_t = ADL_{t-1} + NA_t$$

**ব্যাপ্তির শতাংশ:**
$$B = \\frac{\\text{বৃদ্ধি}}{\\text{বৃদ্ধি} + \\text{পতন} + \\text{অপরিবর্তিত}} \\times 100$$

**বিচ্যুতির শর্ত।** সূচকের দিক ও ব্যাপ্তির দিক না মিললে সতর্কতা সংকেত:
$$\\text{বিচ্যুতি} = \\text{sign}(\\Delta \\text{সূচক}) \\neq \\text{sign}(NA)$$

**টার্নওভার ভেলোসিটি** (অধ্যায় ১ থেকে), এখানে পর্যায় নির্দেশক হিসেবে:
$$V = \\frac{\\text{দৈনিক লেনদেন} \\times 250}{\\text{বাজার মূলধন}} \\times 100$$

যেখানে $V > 50\\%$ ফটকা মন্থন এবং $V < 15\\%$ নিষ্ক্রিয়তা নির্দেশ করে।`,
    },

    manual: {
      en: `**Part 1 — The 2010–11 drawdown.** DGEN peak 8,918; trough 3,600.

**Step 1 — Drawdown:**
$$DD = \\frac{3{,}600 - 8{,}918}{8{,}918} \\times 100 = \\frac{-5{,}318}{8{,}918} \\times 100 = -59.63\\%$$

**Step 2 — Gain required to recover:**
$$R = \\left(\\frac{8{,}918}{3{,}600} - 1\\right) \\times 100 = (2.4772 - 1) \\times 100 = +147.72\\%$$

**Step 3 — Years at 12% compound:**
$$t = \\frac{\\ln(2.4772)}{\\ln(1.12)} = \\frac{0.9072}{0.11333} = 8.00 \\text{ years}$$

**Step 4 — The same for the Chapter 5 margin account** (−90% on own capital):
$$R = \\left(\\frac{1}{1 - 0.90} - 1\\right) \\times 100 = (10 - 1) \\times 100 = +900\\%$$
$$t = \\frac{\\ln(10)}{\\ln(1.12)} = \\frac{2.3026}{0.11333} = 20.3 \\text{ years}$$

**Twenty years at 12% a year to undo one leveraged position.** That is the real cost of the margin arithmetic in Chapter 5, expressed in time rather than percentage.

---

**Part 2 — Breadth on Day B.** Advances 82, Declines 241, Unchanged 27, index +0.8%.

**Step 5 — A/D ratio:**
$$ADR = \\frac{82}{241} = 0.34$$

**Step 6 — Net advances:**
$$NA = 82 - 241 = -159$$

**Step 7 — Breadth percentage:**
$$B = \\frac{82}{82 + 241 + 27} \\times 100 = \\frac{82}{350} \\times 100 = 23.4\\%$$

**Step 8 — Divergence test:**
$$\\text{sign}(+0.8) = +, \\qquad \\text{sign}(-159) = -$$

Signs disagree → **divergence confirmed.**

**Interpretation.** Fewer than one stock in four rose, yet the index gained. The advance is being carried by a small number of heavyweight names. This is the signature of the **distribution** phase: strength in the index masking deterioration underneath.

**The action this implies is not "sell everything."** It is: stop adding, tighten position sizing, and stop treating index strength as evidence that your holdings are healthy. Check each holding against breadth, not against the headline.`,
      bn: `**অংশ ১ — ২০১০–১১ ড্রডাউন।** DGEN শীর্ষ ৮,৯১৮; তলানি ৩,৬০০।

**ধাপ ১ — ড্রডাউন:**
$$DD = \\frac{3{,}600 - 8{,}918}{8{,}918} \\times 100 = -59.63\\%$$

**ধাপ ২ — পুনরুদ্ধারে প্রয়োজনীয় উত্থান:**
$$R = \\left(\\frac{8{,}918}{3{,}600} - 1\\right) \\times 100 = +147.72\\%$$

**ধাপ ৩ — ১২% চক্রবৃদ্ধিতে বছর:**
$$t = \\frac{\\ln(2.4772)}{\\ln(1.12)} = 8.00 \\text{ বছর}$$

**ধাপ ৪ — অধ্যায় ৫-এর মার্জিন অ্যাকাউন্টের জন্য একই হিসাব** (নিজস্ব মূলধনে −৯০%):
$$R = \\left(\\frac{1}{1 - 0.90} - 1\\right) \\times 100 = +900\\%$$
$$t = \\frac{\\ln(10)}{\\ln(1.12)} = 20.3 \\text{ বছর}$$

**একটি লিভারেজড পজিশন পুষিয়ে নিতে বছরে ১২% হারে কুড়ি বছর।** এটিই অধ্যায় ৫-এর মার্জিন পাটিগণিতের প্রকৃত খরচ, শতাংশ নয় — সময়ে প্রকাশিত।

---

**অংশ ২ — দিন খ-এর ব্যাপ্তি।** বৃদ্ধি ৮২, পতন ২৪১, অপরিবর্তিত ২৭, সূচক +০.৮%।

**ধাপ ৫ — A/D অনুপাত:**
$$ADR = \\frac{82}{241} = 0.34$$

**ধাপ ৬ — নিট বৃদ্ধি:**
$$NA = 82 - 241 = -159$$

**ধাপ ৭ — ব্যাপ্তির শতাংশ:**
$$B = \\frac{82}{350} \\times 100 = 23.4\\%$$

**ধাপ ৮ — বিচ্যুতি পরীক্ষা:**
$$\\text{sign}(+0.8) = +, \\qquad \\text{sign}(-159) = -$$

চিহ্ন মেলে না → **বিচ্যুতি নিশ্চিত।**

**ব্যাখ্যা।** চারটির একটিরও কম শেয়ার বেড়েছে, অথচ সূচক বেড়েছে। অগ্রগতিটি বহন করছে অল্প কয়েকটি ভারী নাম। এটি **বণ্টন** পর্যায়ের স্বাক্ষর: সূচকের শক্তি নিচের অবনতি ঢেকে রাখছে।

**এতে যে পদক্ষেপ বোঝায় তা "সব বেচে দিন" নয়।** বরং: যোগ করা বন্ধ করুন, পজিশনের আকার কঠোর করুন, এবং সূচকের শক্তিকে আপনার হোল্ডিং সুস্থ থাকার প্রমাণ ভাবা বন্ধ করুন। প্রতিটি হোল্ডিং শিরোনামের নয়, ব্যাপ্তির বিপরীতে যাচাই করুন।`,
    },

    excel: {
      en: `\`\`\`
A1: — Drawdown & Recovery —
A2: Peak Index / Price            B2: 8918
A3: Current Index / Price         B3: 3600
A4: Drawdown (%)                  B4: =(B3-B2)/B2*100
A5: Gain Required to Recover (%)  B5: =(B2/B3-1)*100
A6: Years at 12% p.a. to Recover  B6: =LOG(B2/B3)/LOG(1.12)

A8: — Breadth —
A9:  Advancing Issues             B9:  82
A10: Declining Issues             B10: 241
A11: Unchanged                    B11: 27
A12: Advance-Decline Ratio        B12: =B9/B10
A13: Net Advances                 B13: =B9-B10
A14: Breadth (% advancing)        B14: =B9/(B9+B10+B11)*100

A16: — Divergence Check —
A17: Index Change Today (%)       B17: 0.8
A18: DIVERGENCE?                  B18: =IF(AND(B17>0,B13<0),
                                     "YES - index up on negative breadth",
                                     IF(AND(B17<0,B13>0),
                                     "YES - index down on positive breadth",
                                     "No - index and breadth agree"))

A20: — Liquidity —
A21: Turnover Velocity (% p.a.)   B21: 28
A22: LIQUIDITY SIGNAL             B22: =IF(B21>50,"Speculative churn - warning",
                                     IF(B21<15,"Dormant - no participation","Normal"))
\`\`\`

**B5 is the cell to internalise.** Enter your own worst holding: peak price in B2, today's price in B3. B5 tells you what it must do just to return you to break-even, and B6 tells you how long that takes at a realistic rate.

Most investors have never computed B6 for a position they are holding "until it comes back." Doing so once tends to settle the question.

Update B9:B11 daily from the DSE market summary. It takes thirty seconds and it is the only honest read on whether the index is telling the truth.`,
      bn: `\`\`\`
A1: — ড্রডাউন ও পুনরুদ্ধার —
A2: শীর্ষ সূচক / দাম               B2: 8918
A3: বর্তমান সূচক / দাম             B3: 3600
A4: ড্রডাউন (%)                    B4: =(B3-B2)/B2*100
A5: পুনরুদ্ধারে প্রয়োজনীয় উত্থান (%) B5: =(B2/B3-1)*100
A6: ১২% হারে পুনরুদ্ধারে বছর        B6: =LOG(B2/B3)/LOG(1.12)

A8: — ব্যাপ্তি —
A9:  বৃদ্ধিপ্রাপ্ত                  B9:  82
A10: পতনপ্রাপ্ত                    B10: 241
A11: অপরিবর্তিত                    B11: 27
A12: বৃদ্ধি-পতন অনুপাত             B12: =B9/B10
A13: নিট বৃদ্ধি                    B13: =B9-B10
A14: ব্যাপ্তি (% বৃদ্ধিপ্রাপ্ত)      B14: =B9/(B9+B10+B11)*100

A16: — বিচ্যুতি যাচাই —
A17: আজ সূচক পরিবর্তন (%)          B17: 0.8
A18: বিচ্যুতি?                     B18: =IF(AND(B17>0,B13<0),
                                     "YES - index up on negative breadth",
                                     IF(AND(B17<0,B13>0),
                                     "YES - index down on positive breadth",
                                     "No - index and breadth agree"))

A20: — তারল্য —
A21: টার্নওভার ভেলোসিটি (% বার্ষিক) B21: 28
A22: তারল্য সংকেত                  B22: =IF(B21>50,"Speculative churn - warning",
                                     IF(B21<15,"Dormant - no participation","Normal"))
\`\`\`

**B5 ঘরটি আত্মস্থ করুন।** আপনার সবচেয়ে খারাপ হোল্ডিংটি বসান: B2-তে শীর্ষ দাম, B3-তে আজকের দাম। B5 বলবে কেবল ব্রেক-ইভেনে ফেরাতে এটিকে কী করতে হবে, আর B6 বলবে বাস্তবসম্মত হারে তাতে কত সময় লাগবে।

"ফিরে আসা পর্যন্ত" ধরে রাখা পজিশনের জন্য বেশিরভাগ বিনিয়োগকারী কখনো B6 গণনা করেননি। একবার করলেই সাধারণত প্রশ্নটির মীমাংসা হয়ে যায়।

ডিএসই মার্কেট সামারি থেকে প্রতিদিন B9:B11 হালনাগাদ করুন। ত্রিশ সেকেন্ড লাগে, আর সূচক সত্যি বলছে কি না তার একমাত্র সৎ পাঠ এটিই।`,
    },

    python: {
      en: `\`\`\`python
"""
Chapter 6 — Drawdown asymmetry, breadth, and market phase classification.
Educational.
"""
import math
from dataclasses import dataclass


def drawdown_pct(current: float, peak: float) -> float:
    return (current - peak) / peak * 100


def recovery_required_pct(current: float, peak: float) -> float:
    """The asymmetry: what the asset must gain to undo the loss."""
    return (peak / current - 1) * 100


def years_to_recover(current: float, peak: float, annual_growth: float = 0.12) -> float:
    if current <= 0 or peak <= current:
        return 0.0
    return math.log(peak / current) / math.log(1 + annual_growth)


@dataclass
class BreadthDay:
    """One trading day's market internals."""
    date: str
    index_change_pct: float
    advances: int
    declines: int
    unchanged: int
    turnover_cr: float

    @property
    def ad_ratio(self) -> float:
        return self.advances / self.declines if self.declines else float("inf")

    @property
    def net_advances(self) -> int:
        return self.advances - self.declines

    @property
    def breadth_pct(self) -> float:
        total = self.advances + self.declines + self.unchanged
        return self.advances / total * 100 if total else 0.0

    @property
    def divergent(self) -> bool:
        """Index and breadth pointing opposite ways."""
        if self.index_change_pct == 0 or self.net_advances == 0:
            return False
        return (self.index_change_pct > 0) != (self.net_advances > 0)

    def read(self) -> str:
        if self.divergent and self.index_change_pct > 0:
            return "DIVERGENT - narrow advance, possible distribution"
        if self.divergent:
            return "DIVERGENT - index weak but breadth improving"
        if self.net_advances > 0:
            return "Broad advance"
        return "Broad decline"


def velocity_signal(velocity_pct: float) -> str:
    if velocity_pct > 50:
        return "Speculative churn - warning"
    if velocity_pct < 15:
        return "Dormant - no participation"
    return "Normal"


if __name__ == "__main__":
    print("=== Drawdown asymmetry ===")
    print(f"{'Loss':>8} {'Recovery needed':>18} {'Years @12%':>12}")
    print("-" * 42)
    for loss in (0.10, 0.25, 0.50, 0.596, 0.75, 0.90):
        cur, peak = 100 * (1 - loss), 100.0
        print(f"{-loss*100:>7.1f}% {recovery_required_pct(cur, peak):>17.1f}% "
              f"{years_to_recover(cur, peak):>12.1f}")

    print()
    print("=== DGEN 2010-11 ===")
    print(f"Drawdown           : {drawdown_pct(3600, 8918):.2f}%")
    print(f"Recovery required  : {recovery_required_pct(3600, 8918):.2f}%")
    print(f"Years at 12%       : {years_to_recover(3600, 8918):.2f}")

    print()
    print("=== Breadth: same headline, opposite markets ===")
    days = [
        BreadthDay("Day A", +0.8, 241, 82, 27, 950),
        BreadthDay("Day B", +0.8, 82, 241, 27, 1400),
    ]
    print(f"{'Day':<7} {'Index':>7} {'A/D':>7} {'Net':>6} {'Breadth':>9}  Read")
    print("-" * 74)
    for d in days:
        print(f"{d.date:<7} {d.index_change_pct:>6.1f}% {d.ad_ratio:>7.2f} "
              f"{d.net_advances:>6} {d.breadth_pct:>8.1f}%  {d.read()}")

    print()
    print("=== Turnover velocity ===")
    for v in (12.0, 28.0, 65.0):
        print(f"{v:>5.1f}% -> {velocity_signal(v)}")
\`\`\`

**The first table is the one to keep.** It shows the recovery requirement and the *time cost* side by side. A 50% loss needs 100% and six years at 12%. A 90% loss — the leveraged outcome from Chapter 5 — needs 900% and **twenty years**.

The breadth section prints two days with an identical +0.8% headline and opposite internals. **Any process that reads only the index cannot distinguish them.** That is the argument for tracking breadth in one line of arithmetic per day.`,
      bn: `\`\`\`python
"""
অধ্যায় ৬ — ড্রডাউনের অপ্রতিসমতা, ব্যাপ্তি ও বাজার পর্যায় শ্রেণিবিন্যাস।
শিক্ষামূলক।
"""
import math
from dataclasses import dataclass


def drawdown_pct(current: float, peak: float) -> float:
    return (current - peak) / peak * 100


def recovery_required_pct(current: float, peak: float) -> float:
    """অপ্রতিসমতা: ক্ষতি পুষিয়ে নিতে সম্পদটিকে কত বাড়তে হবে।"""
    return (peak / current - 1) * 100


def years_to_recover(current: float, peak: float, annual_growth: float = 0.12) -> float:
    if current <= 0 or peak <= current:
        return 0.0
    return math.log(peak / current) / math.log(1 + annual_growth)


@dataclass
class BreadthDay:
    """একটি লেনদেন দিবসের বাজার অভ্যন্তর।"""
    date: str
    index_change_pct: float
    advances: int
    declines: int
    unchanged: int
    turnover_cr: float

    @property
    def ad_ratio(self) -> float:
        return self.advances / self.declines if self.declines else float("inf")

    @property
    def net_advances(self) -> int:
        return self.advances - self.declines

    @property
    def breadth_pct(self) -> float:
        total = self.advances + self.declines + self.unchanged
        return self.advances / total * 100 if total else 0.0

    @property
    def divergent(self) -> bool:
        """সূচক ও ব্যাপ্তি বিপরীত দিকে নির্দেশ করছে।"""
        if self.index_change_pct == 0 or self.net_advances == 0:
            return False
        return (self.index_change_pct > 0) != (self.net_advances > 0)

    def read(self) -> str:
        if self.divergent and self.index_change_pct > 0:
            return "DIVERGENT - narrow advance, possible distribution"
        if self.divergent:
            return "DIVERGENT - index weak but breadth improving"
        if self.net_advances > 0:
            return "Broad advance"
        return "Broad decline"


def velocity_signal(velocity_pct: float) -> str:
    if velocity_pct > 50:
        return "Speculative churn - warning"
    if velocity_pct < 15:
        return "Dormant - no participation"
    return "Normal"


if __name__ == "__main__":
    print("=== Drawdown asymmetry ===")
    print(f"{'Loss':>8} {'Recovery needed':>18} {'Years @12%':>12}")
    print("-" * 42)
    for loss in (0.10, 0.25, 0.50, 0.596, 0.75, 0.90):
        cur, peak = 100 * (1 - loss), 100.0
        print(f"{-loss*100:>7.1f}% {recovery_required_pct(cur, peak):>17.1f}% "
              f"{years_to_recover(cur, peak):>12.1f}")

    print()
    print("=== DGEN 2010-11 ===")
    print(f"Drawdown           : {drawdown_pct(3600, 8918):.2f}%")
    print(f"Recovery required  : {recovery_required_pct(3600, 8918):.2f}%")
    print(f"Years at 12%       : {years_to_recover(3600, 8918):.2f}")

    print()
    print("=== Breadth: same headline, opposite markets ===")
    days = [
        BreadthDay("Day A", +0.8, 241, 82, 27, 950),
        BreadthDay("Day B", +0.8, 82, 241, 27, 1400),
    ]
    print(f"{'Day':<7} {'Index':>7} {'A/D':>7} {'Net':>6} {'Breadth':>9}  Read")
    print("-" * 74)
    for d in days:
        print(f"{d.date:<7} {d.index_change_pct:>6.1f}% {d.ad_ratio:>7.2f} "
              f"{d.net_advances:>6} {d.breadth_pct:>8.1f}%  {d.read()}")

    print()
    print("=== Turnover velocity ===")
    for v in (12.0, 28.0, 65.0):
        print(f"{v:>5.1f}% -> {velocity_signal(v)}")
\`\`\`

**প্রথম টেবিলটিই রাখার মতো।** এটি পুনরুদ্ধারের প্রয়োজন ও *সময়ের খরচ* পাশাপাশি দেখায়। ৫০% ক্ষতিতে দরকার ১০০% এবং ১২% হারে ছয় বছর। ৯০% ক্ষতিতে — অধ্যায় ৫-এর লিভারেজড ফলাফল — দরকার ৯০০% এবং **কুড়ি বছর**।

ব্যাপ্তি অংশটি অভিন্ন +০.৮% শিরোনাম ও বিপরীত অভ্যন্তরসহ দুটি দিন ছাপে। **যে প্রক্রিয়া কেবল সূচক পড়ে তা এদের আলাদা করতে পারে না।** প্রতিদিন এক লাইন পাটিগণিতে ব্যাপ্তি অনুসরণ করার যুক্তি এটিই।`,
    },

    mistakes: {
      en: `1. **Using the 20% rule to make decisions.** It is a label applied after the loss, not a signal available before it. By the time it triggers, the information has no value.
2. **Reading the index as the market.** With one scrip at ~10% of market cap, DSEX can rise on a day 241 companies fall. The index is a weighted average, not a census.
3. **Ignoring the recovery asymmetry.** A 50% loss requires a 100% gain. Investors routinely hold a −60% position "until it recovers" without ever computing that this needs +150% and eight years at a good rate.
4. **Buying a cascade because it looks cheap.** A DSE bear market ends when forced supply is exhausted, not when valuation is attractive. Cheapness is a condition, not a catalyst.
5. **Mistaking distribution for markup.** Both show high prices, positive headlines, and heavy turnover. Only breadth separates them, and breadth is precisely what nobody checks at highs.
6. **Treating a floor price as protection.** It removes the ability to sell while leaving a number on your statement. You do not have a position worth 40; you have a position you cannot convert into money.
7. **Marking a portfolio at a floor price.** That value is unrealisable by construction. Any planning based on it — collateral, allocation, retirement maths — is planning on a fiction.
8. **Assuming high turnover means health.** Turnover velocity above ~50% signals churn, not participation. Volume during markdown spikes precisely because forced sellers are transacting.`,
      bn: `১. **সিদ্ধান্ত নিতে ২০% নিয়ম ব্যবহার করা।** এটি ক্ষতির পরে লাগানো একটি লেবেল, তার আগে পাওয়া কোনো সংকেত নয়। যখন এটি সক্রিয় হয়, তথ্যটির আর কোনো মূল্য নেই।
২. **সূচককেই বাজার হিসেবে পড়া।** বাজার মূলধনের ~১০% একটি স্ক্রিপ থাকলে ২৪১টি কোম্পানি পড়া দিনেও DSEX বাড়তে পারে। সূচক একটি ভারিত গড়, আদমশুমারি নয়।
৩. **পুনরুদ্ধারের অপ্রতিসমতা উপেক্ষা করা।** ৫০% ক্ষতিতে ১০০% উত্থান দরকার। বিনিয়োগকারীরা নিয়মিত −৬০% পজিশন "পুনরুদ্ধার পর্যন্ত" ধরে রাখেন, কখনো গণনা না করেই যে এতে দরকার +১৫০% এবং ভালো হারেও আট বছর।
৪. **সস্তা দেখায় বলে ধারাবাহিক প্রতিক্রিয়ায় কেনা।** ডিএসই বিয়ার মার্কেট শেষ হয় বাধ্যতামূলক সরবরাহ নিঃশেষ হলে, মূল্যায়ন আকর্ষণীয় হলে নয়। সস্তা হওয়া একটি অবস্থা, চালক নয়।
৫. **বণ্টনকে উত্থান ভাবা।** দুটোতেই উঁচু দাম, ইতিবাচক শিরোনাম ও ভারী লেনদেন দেখা যায়। কেবল ব্যাপ্তিই এদের আলাদা করে, আর শীর্ষে ঠিক সেটিই কেউ দেখে না।
৬. **ফ্লোর প্রাইসকে সুরক্ষা ভাবা।** এটি বিক্রির সক্ষমতা কেড়ে নিয়ে আপনার বিবরণীতে একটি সংখ্যা রেখে দেয়। আপনার ৪০ মূল্যের পজিশন নেই; আপনার এমন পজিশন আছে যা টাকায় রূপান্তরিত করা যায় না।
৭. **ফ্লোর প্রাইসে পোর্টফোলিও মূল্যায়ন করা।** ঐ মূল্য গঠনগতভাবেই অনাদায়যোগ্য। এর ওপর ভিত্তি করে যেকোনো পরিকল্পনা — জামানত, বণ্টন, অবসরের হিসাব — কল্পকাহিনির ওপর পরিকল্পনা।
৮. **উচ্চ লেনদেন মানেই সুস্থতা ধরে নেওয়া।** ~৫০%-এর ওপরে টার্নওভার ভেলোসিটি অংশগ্রহণ নয়, মন্থন নির্দেশ করে। পতনের সময় ভলিউম লাফ দেয় ঠিক এ কারণেই যে বাধ্যতামূলক বিক্রেতারা লেনদেন করছেন।`,
    },

    tips: {
      en: `- **Record advances, declines, and unchanged every single day.** Thirty seconds from the DSE market summary. Build the cumulative A/D line. When it diverges from the index for more than a couple of weeks, believe the A/D line.
- **Define your own phase indicator in writing, before you need it.** Mine: breadth expanding + velocity 15–50% + credit growth accelerating = constructive. Any two failing = reduce. Write yours down while you are calm, because you will not be calm when it matters.
- **Compute the recovery requirement on every losing position quarterly.** Not the loss — the gain required, and the years at a realistic rate. This converts an emotional decision into an arithmetic one.
- **In a suspected distribution phase, stop adding before you start selling.** The first defensive act is to stop deploying new capital, which costs nothing and is reversible. Selling is the second act, not the first.
- **During a cascade, watch for the exhaustion signature:** heavy volume that produces no further price decline. That is forced supply meeting genuine demand, and it is the only reliable end-of-cascade marker.
- **Track private-sector credit growth monthly** (the Chapter 1 tip). Credit leads liquidity, liquidity leads breadth, breadth leads the index. By the time the index tells you, three prior signals have already fired.
- **Size every position so that a floor-price regime would not ruin you.** Ask literally: if I could not sell this for eighteen months, would I be solvent and calm? If not, the position is too large regardless of conviction.`,
      bn: `- **প্রতিদিন বৃদ্ধি, পতন ও অপরিবর্তিত লিপিবদ্ধ করুন।** ডিএসই মার্কেট সামারি থেকে ত্রিশ সেকেন্ড। পুঞ্জীভূত A/D রেখা তৈরি করুন। কয়েক সপ্তাহের বেশি এটি সূচক থেকে বিচ্যুত হলে A/D রেখাকেই বিশ্বাস করুন।
- **প্রয়োজন হওয়ার আগেই নিজের পর্যায় নির্দেশক লিখে রাখুন।** আমার: ব্যাপ্তি প্রসারিত + ভেলোসিটি ১৫–৫০% + ঋণ প্রবৃদ্ধি ত্বরান্বিত = গঠনমূলক। যেকোনো দুটি ব্যর্থ = কমান। শান্ত থাকতে থাকতেই নিজেরটা লিখে ফেলুন, কারণ যখন দরকার হবে তখন আপনি শান্ত থাকবেন না।
- **প্রতি ত্রৈমাসিকে প্রতিটি লোকসানি পজিশনের পুনরুদ্ধারের প্রয়োজন গণনা করুন।** ক্ষতি নয় — প্রয়োজনীয় উত্থান, এবং বাস্তবসম্মত হারে কত বছর। এটি একটি আবেগীয় সিদ্ধান্তকে পাটিগাণিতিক সিদ্ধান্তে রূপান্তরিত করে।
- **সন্দেহভাজন বণ্টন পর্যায়ে বিক্রি শুরুর আগে যোগ করা বন্ধ করুন।** প্রথম রক্ষণাত্মক পদক্ষেপ হলো নতুন মূলধন বিনিয়োগ বন্ধ করা, যাতে কোনো খরচ নেই এবং যা ফেরানো যায়। বিক্রি দ্বিতীয় পদক্ষেপ, প্রথম নয়।
- **ধারাবাহিক প্রতিক্রিয়ার সময় নিঃশেষের স্বাক্ষর লক্ষ করুন:** ভারী ভলিউম যা আর কোনো দরপতন তৈরি করে না। সেটিই বাধ্যতামূলক সরবরাহের সঙ্গে প্রকৃত চাহিদার মিলন, এবং প্রতিক্রিয়া শেষের একমাত্র নির্ভরযোগ্য চিহ্ন।
- **মাসিকভাবে বেসরকারি খাতে ঋণ প্রবৃদ্ধি অনুসরণ করুন** (অধ্যায় ১-এর পরামর্শ)। ঋণ তারল্যকে নেতৃত্ব দেয়, তারল্য ব্যাপ্তিকে, ব্যাপ্তি সূচককে। সূচক যখন আপনাকে বলে, ততক্ষণে তিনটি পূর্ববর্তী সংকেত বেজে গেছে।
- **প্রতিটি পজিশনের আকার এমন রাখুন যাতে ফ্লোর প্রাইস ব্যবস্থা আপনাকে ধ্বংস না করে।** আক্ষরিকভাবে জিজ্ঞেস করুন: আঠারো মাস এটি বিক্রি করতে না পারলে আমি কি স্বচ্ছল ও শান্ত থাকব? না হলে প্রত্যয় যা-ই হোক, পজিশনটি অত্যধিক বড়।`,
    },

    exercises: {
      en: `1. Build the drawdown sheet from §6.10. Enter your worst current holding. Record the recovery percentage required and the years at 12%. Would you buy this position fresh today at this price? If not, why are you holding it?
2. Download 60 trading days of DSE advances, declines, and unchanged. Build the cumulative A/D line and plot it against DSEX on the same chart. Mark every day the two diverged in direction.
3. For the divergences found in (2), record what DSEX did over the following 10 trading days. Does divergence have predictive value on this sample? State honestly if it does not.
4. Compute the drawdown and recovery requirement for DGEN from its December 2010 peak to the early 2012 trough. Now do the same for a hypothetical 1:1 leveraged account over the same period.
5. Find the DSE daily turnover and market capitalisation for a month in a quiet period and a month in a hot period. Compute turnover velocity for each. Which side of the 50% threshold does the hot period fall on?
6. Identify the floor-price period dates from BSEC announcements. For three scrips, compare average daily volume in the three months before the floor with the three months during it. Compute the percentage collapse.
7. For one of those scrips, find the first traded price after the floor was lifted. Compare it to the floor price. What does the gap tell you about what the floor was actually holding back?
8. Write your own market-phase rule in one sentence, using only breadth, velocity, and credit growth. Backtest it by eye against DSEX over the last three years. Where would it have been wrong?`,
      bn: `১. §৬.১০-এর ড্রডাউন শিটটি তৈরি করুন। আপনার বর্তমান সবচেয়ে খারাপ হোল্ডিং বসান। প্রয়োজনীয় পুনরুদ্ধারের শতাংশ ও ১২% হারে বছর লিপিবদ্ধ করুন। এই দামে আজ নতুন করে কি এই পজিশন কিনতেন? না হলে ধরে রেখেছেন কেন?
২. ডিএসই-র ৬০ লেনদেন দিবসের বৃদ্ধি, পতন ও অপরিবর্তিত ডাউনলোড করুন। পুঞ্জীভূত A/D রেখা তৈরি করে একই চার্টে DSEX-এর বিপরীতে প্লট করুন। দুটি দিক যেদিন বিচ্যুত হয়েছে প্রতিটি চিহ্নিত করুন।
৩. (২)-এ পাওয়া বিচ্যুতিগুলোর পরবর্তী ১০ লেনদেন দিবসে DSEX কী করেছে লিপিবদ্ধ করুন। এই নমুনায় বিচ্যুতির কি পূর্বাভাসী মূল্য আছে? না থাকলে সৎভাবে বলুন।
৪. DGEN-এর ২০১০ সালের ডিসেম্বরের শীর্ষ থেকে ২০১২ সালের শুরুর তলানি পর্যন্ত ড্রডাউন ও পুনরুদ্ধারের প্রয়োজন গণনা করুন। এবার একই সময়ে একটি কাল্পনিক ১:১ লিভারেজড অ্যাকাউন্টের জন্য একই কাজ করুন।
৫. একটি শান্ত সময়ের ও একটি উত্তপ্ত সময়ের এক মাসের ডিএসই দৈনিক লেনদেন ও বাজার মূলধন বের করুন। প্রতিটির টার্নওভার ভেলোসিটি গণনা করুন। উত্তপ্ত সময়টি ৫০% সীমার কোন পাশে পড়ে?
৬. বিএসইসি ঘোষণা থেকে ফ্লোর প্রাইস সময়কালের তারিখ চিহ্নিত করুন। তিনটি স্ক্রিপের জন্য ফ্লোরের আগের তিন মাস ও ফ্লোর চলাকালীন তিন মাসের গড় দৈনিক ভলিউম তুলনা করুন। শতকরা ধস গণনা করুন।
৭. ঐ স্ক্রিপগুলোর একটির জন্য ফ্লোর তুলে নেওয়ার পর প্রথম লেনদেনকৃত দাম বের করুন। ফ্লোর প্রাইসের সঙ্গে তুলনা করুন। ব্যবধানটি আপনাকে বলে ফ্লোরটি আসলে কী আটকে রাখছিল?
৮. কেবল ব্যাপ্তি, ভেলোসিটি ও ঋণ প্রবৃদ্ধি ব্যবহার করে এক বাক্যে নিজের বাজার-পর্যায় নিয়ম লিখুন। গত তিন বছরের DSEX-এর বিপরীতে চোখে দেখে ব্যাকটেস্ট করুন। কোথায় এটি ভুল হতো?`,
    },

    summary: {
      en: `- The conventional 20% definition of bull and bear markets is backward-looking: it labels a loss after it has occurred and provides no decision value beforehand.
- A better definition uses three inputs — **breadth, liquidity, and credit**. Price is the output of these, which is why they are usable in advance.
- The four phases are accumulation, markup, distribution, and markdown. **Distribution is the dangerous one** because it resembles markup in price, headlines, and volume; only breadth separates them.
- Because DSEX is concentrated, the index can rise while the majority of companies fall. Advances, declines, and unchanged are published daily and free — **breadth is the only honest read**.
- Drawdown recovery is asymmetric: $R = (P_{peak}/P_{current} - 1)$. A 50% loss needs +100%; DGEN's 59.6% fall needed +147.7%, or eight years at 12%. The Chapter 5 leveraged account's 90% loss needs **+900% and twenty years**.
- On the DSE a bear market is more often a **leverage event than a valuation event**. It ends when forced supply is exhausted, not when stocks become cheap. Watch for heavy volume that no longer produces decline.
- **Floor prices create a third state** in which price stops clearing entirely: volume collapses, the quoted number is administrative rather than transactional, and holders are frozen rather than protected. Portfolio values marked at a floor are unrealisable by construction.
- **Discipline established:** judge the market by breadth, liquidity, and credit rather than by the index; compute the recovery requirement on every loss; and size every position so that eighteen months of being unable to sell would not ruin you.`,
      bn: `- বুল ও বিয়ার মার্কেটের প্রচলিত ২০% সংজ্ঞা পশ্চাৎমুখী: এটি ক্ষতি ঘটে যাওয়ার পর লেবেল লাগায় এবং আগে কোনো সিদ্ধান্ত-মূল্য দেয় না।
- ভালো সংজ্ঞা তিনটি উপাদান ব্যবহার করে — **ব্যাপ্তি, তারল্য ও ঋণ**। দাম এদের ফলাফল, আর সে কারণেই এগুলো আগেই ব্যবহারযোগ্য।
- চারটি পর্যায় হলো সঞ্চয়ন, উত্থান, বণ্টন ও পতন। **বণ্টনই বিপজ্জনক** কারণ দাম, শিরোনাম ও ভলিউমে এটি উত্থানের মতো দেখায়; কেবল ব্যাপ্তিই এদের আলাদা করে।
- DSEX কেন্দ্রীভূত হওয়ায় অধিকাংশ কোম্পানি পড়লেও সূচক বাড়তে পারে। বৃদ্ধি, পতন ও অপরিবর্তিত প্রতিদিন বিনামূল্যে প্রকাশিত হয় — **ব্যাপ্তিই একমাত্র সৎ পাঠ**।
- ড্রডাউন পুনরুদ্ধার অপ্রতিসম: $R = (P_{peak}/P_{current} - 1)$। ৫০% ক্ষতিতে দরকার +১০০%; DGEN-এর ৫৯.৬% পতনে দরকার ছিল +১৪৭.৭%, অর্থাৎ ১২% হারে আট বছর। অধ্যায় ৫-এর লিভারেজড অ্যাকাউন্টের ৯০% ক্ষতিতে দরকার **+৯০০% ও কুড়ি বছর**।
- ডিএসই-তে বিয়ার মার্কেট মূল্যায়ন ঘটনার চেয়ে বেশি **লিভারেজ ঘটনা**। এটি শেষ হয় বাধ্যতামূলক সরবরাহ নিঃশেষ হলে, শেয়ার সস্তা হলে নয়। ভারী ভলিউম লক্ষ করুন যা আর পতন তৈরি করে না।
- **ফ্লোর প্রাইস একটি তৃতীয় অবস্থা তৈরি করে** যেখানে দাম আদৌ নিষ্পত্তি হয় না: ভলিউম ধসে পড়ে, উদ্ধৃত সংখ্যাটি লেনদেনভিত্তিক নয় প্রশাসনিক, এবং ধারকরা সুরক্ষিত নয় — জমে যান। ফ্লোরে চিহ্নিত পোর্টফোলিও মূল্য গঠনগতভাবেই অনাদায়যোগ্য।
- **প্রতিষ্ঠিত শৃঙ্খলা:** সূচক নয়, ব্যাপ্তি, তারল্য ও ঋণ দিয়ে বাজার বিচার করুন; প্রতিটি ক্ষতিতে পুনরুদ্ধারের প্রয়োজন গণনা করুন; এবং প্রতিটি পজিশনের আকার এমন রাখুন যাতে আঠারো মাস বিক্রি করতে না পারা আপনাকে ধ্বংস না করে।`,
    },
  },

  interview: [
    {
      q: {
        en: 'Why is the 20% definition of a bear market of limited practical use?',
        bn: 'বিয়ার মার্কেটের ২০% সংজ্ঞা কেন ব্যবহারিকভাবে সীমিত?',
      },
      a: {
        en: 'Because it can only be applied retrospectively — you know you were in a bear market once 20% has already been lost, which is precisely too late to act on. It also measures an index, and on a concentrated exchange like the DSE the index can be held up or dragged down by a handful of heavyweight names independently of what the majority of companies are doing. A definition based on breadth, liquidity, and credit is superior because those are inputs that move before price rather than a label applied afterwards.',
        bn: 'কারণ এটি কেবল পশ্চাৎদৃষ্টিতে প্রয়োগ করা যায় — ২০% হারিয়ে ফেলার পরেই আপনি জানেন যে আপনি বিয়ার মার্কেটে ছিলেন, যা পদক্ষেপ নেওয়ার জন্য ঠিক অতি দেরি। এটি একটি সূচকও মাপে, আর ডিএসই-র মতো কেন্দ্রীভূত এক্সচেঞ্জে অধিকাংশ কোম্পানি যা করছে তা নির্বিশেষে হাতেগোনা কয়েকটি ভারী নাম সূচককে ধরে রাখতে বা টেনে নামাতে পারে। ব্যাপ্তি, তারল্য ও ঋণভিত্তিক সংজ্ঞা উন্নততর, কারণ এগুলো দামের আগে নড়া উপাদান, পরে লাগানো লেবেল নয়।',
      },
    },
    {
      q: {
        en: 'The index rises 0.8% but 241 stocks fall and 82 rise. What is happening and what would you do?',
        bn: 'সূচক ০.৮% বাড়ল অথচ ২৪১টি শেয়ার পড়ল ও ৮২টি বাড়ল। কী ঘটছে এবং আপনি কী করবেন?',
      },
      a: {
        en: 'This is index-breadth divergence: the advance is narrow and carried by a small number of heavyweight names while roughly three-quarters of the market declined. Combined with heavy turnover it is the classic signature of distribution — informed holders selling into strength while the headline masks deterioration. My response would be graduated: first stop deploying new capital, which is costless and reversible; then tighten position sizes and review each holding against its own breadth rather than the index; and only then consider reducing. I would also want to see whether the divergence persists for more than a week or two before treating it as a phase change rather than noise.',
        bn: 'এটি সূচক-ব্যাপ্তি বিচ্যুতি: অগ্রগতিটি সংকীর্ণ ও অল্প কয়েকটি ভারী নামের কাঁধে, যখন বাজারের প্রায় তিন-চতুর্থাংশ পড়েছে। ভারী লেনদেনের সঙ্গে মিলে এটি বণ্টনের ধ্রুপদী স্বাক্ষর — অবহিত ধারকরা শক্তির মধ্যে বিক্রি করছেন আর শিরোনাম অবনতি ঢেকে রাখছে। আমার প্রতিক্রিয়া হবে ধাপে ধাপে: প্রথমে নতুন মূলধন বিনিয়োগ বন্ধ, যা ব্যয়হীন ও ফেরানোযোগ্য; তারপর পজিশনের আকার কঠোর করা এবং প্রতিটি হোল্ডিং সূচকের নয়, নিজস্ব ব্যাপ্তির বিপরীতে পর্যালোচনা; এবং তারপরই কমানোর কথা ভাবা। বিচ্যুতিটি এক-দুই সপ্তাহের বেশি টিকছে কি না তাও দেখতে চাইব, তবেই একে গোলমাল নয় পর্যায় পরিবর্তন ধরব।',
      },
    },
    {
      q: {
        en: 'Explain the recovery asymmetry and why it changes how you think about risk.',
        bn: 'পুনরুদ্ধারের অপ্রতিসমতা ব্যাখ্যা করুন এবং কেন এটি ঝুঁকি সম্পর্কে আপনার ভাবনা বদলে দেয়।',
      },
      a: {
        en: 'Losses and gains are not symmetric because they compound off different bases. A 50% loss leaves you at 50, and returning to 100 from 50 requires a 100% gain, not 50%. The relationship is R = 1/(1+DD) − 1, which becomes brutal at the tail: 90% down needs 900% up, which at 12% a year is twenty years. This changes risk thinking fundamentally — avoiding the large loss matters more than capturing the large gain, because the arithmetic of recovery is punitive and time is finite. It is also the strongest argument against leverage, since leverage is precisely the mechanism that moves you from the recoverable part of the curve to the unrecoverable part.',
        bn: 'ক্ষতি ও লাভ প্রতিসম নয় কারণ এরা ভিন্ন ভিত্তিতে চক্রবৃদ্ধি হয়। ৫০% ক্ষতি আপনাকে ৫০-এ রাখে, আর ৫০ থেকে ১০০-তে ফিরতে দরকার ১০০% লাভ, ৫০% নয়। সম্পর্কটি R = 1/(1+DD) − 1, যা প্রান্তে গিয়ে নির্মম হয়: ৯০% নিচে নামলে দরকার ৯০০% ওপরে, যা বছরে ১২% হারে কুড়ি বছর। এটি ঝুঁকি-ভাবনা মৌলিকভাবে বদলে দেয় — বড় লাভ ধরার চেয়ে বড় ক্ষতি এড়ানো বেশি গুরুত্বপূর্ণ, কারণ পুনরুদ্ধারের পাটিগণিত শাস্তিমূলক এবং সময় সীমিত। এটি লিভারেজের বিরুদ্ধেও শক্তিশালীতম যুক্তি, কারণ লিভারেজই সেই কৌশল যা আপনাকে বক্ররেখার পুনরুদ্ধারযোগ্য অংশ থেকে অপুনরুদ্ধারযোগ্য অংশে নিয়ে যায়।',
      },
    },
    {
      q: {
        en: 'Why does a DSE bear market end differently from a bear market driven by earnings expectations?',
        bn: 'আয় প্রত্যাশা-চালিত বিয়ার মার্কেটের চেয়ে ডিএসই বিয়ার মার্কেট কেন ভিন্নভাবে শেষ হয়?',
      },
      a: {
        en: 'Because it is usually a leverage event rather than a valuation event. The selling comes from merchant banks liquidating collateral after maintenance ratios are breached, and those sellers have no view on value — they sell at any price to protect a loan. So the decline does not stop when stocks become cheap; cheapness is irrelevant to a forced seller. It stops when the supply of forced sellers is exhausted. Practically, the marker to watch is heavy volume that no longer produces further price decline, which indicates forced supply is finally meeting genuine demand.',
        bn: 'কারণ এটি সাধারণত মূল্যায়ন ঘটনা নয়, লিভারেজ ঘটনা। বিক্রি আসে মার্চেন্ট ব্যাংক থেকে, যারা রক্ষণাবেক্ষণ অনুপাত লঙ্ঘনের পর জামানত গুটায়, আর ঐ বিক্রেতাদের মূল্য সম্পর্কে কোনো দৃষ্টিভঙ্গি নেই — তারা ঋণ রক্ষায় যেকোনো দামে বিক্রি করে। তাই শেয়ার সস্তা হলে পতন থামে না; বাধ্যতামূলক বিক্রেতার কাছে সস্তা হওয়া অপ্রাসঙ্গিক। এটি থামে যখন বাধ্যতামূলক বিক্রেতাদের সরবরাহ নিঃশেষ হয়। ব্যবহারিকভাবে লক্ষণীয় চিহ্ন হলো ভারী ভলিউম যা আর কোনো দরপতন তৈরি করে না, যা নির্দেশ করে বাধ্যতামূলক সরবরাহ অবশেষে প্রকৃত চাহিদার মুখোমুখি হয়েছে।',
      },
    },
    {
      q: {
        en: 'What is wrong with valuing a portfolio at floor prices?',
        bn: 'ফ্লোর প্রাইসে পোর্টফোলিও মূল্যায়নে সমস্যা কী?',
      },
      a: {
        en: 'A floor price is an administrative boundary, not a transaction price. If the honest clearing level sits below the floor, no trades occur at the floor at all — volume collapses to near zero because no buyer will pay it. So the number on the statement has never been tested by an actual exchange of money and cannot be realised. Marking a portfolio there overstates liquid wealth, and any decision built on that figure — using it as collateral, computing allocation weights, planning withdrawals — is built on a value that cannot be converted into cash at any volume. The honest treatment is to record it as unrealisable until genuine trading resumes.',
        bn: 'ফ্লোর প্রাইস একটি প্রশাসনিক সীমা, লেনদেনের দাম নয়। সৎ নিষ্পত্তি স্তর ফ্লোরের নিচে থাকলে ফ্লোরে আদৌ কোনো লেনদেন ঘটে না — ভলিউম প্রায় শূন্যে নামে কারণ কোনো ক্রেতা তা দেবেন না। তাই বিবরণীর সংখ্যাটি কখনো প্রকৃত অর্থ বিনিময়ে যাচাই হয়নি এবং আদায় করা যায় না। সেখানে পোর্টফোলিও চিহ্নিত করলে তরল সম্পদ অতিরঞ্জিত হয়, আর ঐ সংখ্যার ওপর নির্মিত যেকোনো সিদ্ধান্ত — জামানত হিসেবে ব্যবহার, বণ্টনের ওজন গণনা, উত্তোলনের পরিকল্পনা — এমন একটি মূল্যের ওপর নির্মিত যা কোনো পরিমাণেই নগদে রূপান্তরিত করা যায় না। সৎ পদ্ধতি হলো প্রকৃত লেনদেন ফিরে না আসা পর্যন্ত একে অনাদায়যোগ্য হিসেবে লিপিবদ্ধ করা।',
      },
    },
  ],

  quiz: [
    {
      q: {
        en: 'The conventional bear market threshold is a fall of:',
        bn: 'প্রচলিত বিয়ার মার্কেটের সীমা হলো পতন:',
      },
      options: { en: ['10%', '15%', '20%', '30%'], bn: ['১০%', '১৫%', '২০%', '৩০%'] },
      answer: 2,
    },
    {
      q: {
        en: 'A 50% loss requires what gain to break even?',
        bn: '৫০% ক্ষতিতে ব্রেক-ইভেনে ফিরতে কত উত্থান দরকার?',
      },
      options: { en: ['50%', '75%', '100%', '150%'], bn: ['৫০%', '৭৫%', '১০০%', '১৫০%'] },
      answer: 2,
    },
    {
      q: {
        en: 'A 90% loss requires a gain of approximately:',
        bn: '৯০% ক্ষতিতে প্রয়োজনীয় উত্থান প্রায়:',
      },
      options: { en: ['90%', '200%', '500%', '900%'], bn: ['৯০%', '২০০%', '৫০০%', '৯০০%'] },
      answer: 3,
    },
    {
      q: {
        en: 'Index up 0.8% with net advances of −159 indicates:',
        bn: 'নিট বৃদ্ধি −১৫৯ সহ সূচক ০.৮% বাড়া নির্দেশ করে:',
      },
      options: {
        en: [
          'A broad, healthy advance',
          'Divergence — a narrow rally led by heavyweights',
          'A data error',
          'A bear market has begun',
        ],
        bn: [
          'একটি ব্যাপক, স্বাস্থ্যকর অগ্রগতি',
          'বিচ্যুতি — ভারী নামের নেতৃত্বে সংকীর্ণ উত্থান',
          'একটি ডেটা ভুল',
          'বিয়ার মার্কেট শুরু হয়েছে',
        ],
      },
      answer: 1,
    },
    {
      q: { en: 'The most dangerous phase to misread is:', bn: 'ভুল পড়ার জন্য সবচেয়ে বিপজ্জনক পর্যায়:' },
      options: {
        en: ['Accumulation', 'Markup', 'Distribution', 'Markdown'],
        bn: ['সঞ্চয়ন', 'উত্থান', 'বণ্টন', 'পতন'],
      },
      answer: 2,
    },
    {
      q: {
        en: 'A DSE bear market driven by margin cascades ends when:',
        bn: 'মার্জিন ধারাবাহিক প্রতিক্রিয়ায় চালিত ডিএসই বিয়ার মার্কেট শেষ হয় যখন:',
      },
      options: {
        en: [
          'Valuations become attractive',
          'Forced supply is exhausted',
          'The index falls 20%',
          'BSEC intervenes',
        ],
        bn: [
          'মূল্যায়ন আকর্ষণীয় হয়',
          'বাধ্যতামূলক সরবরাহ নিঃশেষ হয়',
          'সূচক ২০% পড়ে',
          'বিএসইসি হস্তক্ষেপ করে',
        ],
      },
      answer: 1,
    },
    {
      q: {
        en: 'Under an effective floor price, daily volume typically:',
        bn: 'কার্যকর ফ্লোর প্রাইসের অধীনে দৈনিক ভলিউম সাধারণত:',
      },
      options: {
        en: ['Rises sharply', 'Stays unchanged', 'Collapses toward zero', 'Becomes more volatile'],
        bn: ['তীব্রভাবে বাড়ে', 'অপরিবর্তিত থাকে', 'শূন্যের দিকে ধসে পড়ে', 'আরও অস্থির হয়'],
      },
      answer: 2,
    },
    {
      q: {
        en: 'A portfolio marked at floor prices reports a value that is:',
        bn: 'ফ্লোর প্রাইসে চিহ্নিত পোর্টফোলিও এমন একটি মূল্য দেখায় যা:',
      },
      options: {
        en: ['Conservative', 'Unrealisable by construction', 'Audited', 'Market-tested'],
        bn: ['রক্ষণশীল', 'গঠনগতভাবেই অনাদায়যোগ্য', 'নিরীক্ষিত', 'বাজারে যাচাইকৃত'],
      },
      answer: 1,
    },
    {
      q: {
        en: 'Turnover velocity above ~50% per annum most likely signals:',
        bn: 'বার্ষিক ~৫০%-এর ওপরে টার্নওভার ভেলোসিটি সম্ভবত নির্দেশ করে:',
      },
      options: {
        en: ['Healthy participation', 'Speculative churn', 'Foreign inflow', 'Rising free float'],
        bn: ['স্বাস্থ্যকর অংশগ্রহণ', 'ফটকা মন্থন', 'বিদেশি প্রবাহ', 'বাড়ন্ত ফ্রি ফ্লোট'],
      },
      answer: 1,
    },
    {
      q: {
        en: 'The exhaustion signature at the end of a cascade is:',
        bn: 'ধারাবাহিক প্রতিক্রিয়ার শেষে নিঃশেষের স্বাক্ষর হলো:',
      },
      options: {
        en: [
          'Very low volume at the lows',
          'Heavy volume that produces no further decline',
          'A gap down on no volume',
          'The index touching a round number',
        ],
        bn: [
          'তলানিতে খুব কম ভলিউম',
          'ভারী ভলিউম যা আর কোনো পতন তৈরি করে না',
          'ভলিউম ছাড়া গ্যাপ ডাউন',
          'সূচকের একটি গোল সংখ্যা ছোঁয়া',
        ],
      },
      answer: 1,
    },
  ],
};
