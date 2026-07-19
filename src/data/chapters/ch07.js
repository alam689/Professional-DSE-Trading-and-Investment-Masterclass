/**
 * Chapter 7 — The Market Cycle
 * Part I, Stock Market Foundation.
 *
 * Chapter 6 named the phases. This chapter makes them measurable.
 */

export default {
  n: 7,
  tools: [],

  excelSheet: {
    filename: 'ch07-cycle-scorecard.xlsx',
    sheetName: 'Cycle Scorecard',
    cells: [
      { cell: 'A1', v: 'INDICATOR' }, { cell: 'B1', v: 'Current' },
      { cell: 'C1', v: 'Mean' }, { cell: 'D1', v: 'Std Dev' },
      { cell: 'E1', v: 'Z-Score' }, { cell: 'F1', v: 'Weight' }, { cell: 'G1', v: 'Contribution' },

      { cell: 'A2', v: 'Private Sector Credit Growth (%)' },
      { cell: 'B2', v: 13.5 }, { cell: 'C2', v: 11.0 }, { cell: 'D2', v: 3.0 },
      { cell: 'E2', f: '(B2-C2)/D2' }, { cell: 'F2', v: 0.30 }, { cell: 'G2', f: 'E2*F2' },

      { cell: 'A3', v: 'Call Money Rate (%) [inverted]' },
      { cell: 'B3', v: 6.0 }, { cell: 'C3', v: 7.5 }, { cell: 'D3', v: 2.0 },
      { cell: 'E3', f: '-(B3-C3)/D3' }, { cell: 'F3', v: 0.20 }, { cell: 'G3', f: 'E3*F3' },

      { cell: 'A4', v: 'Turnover Velocity (% p.a.)' },
      { cell: 'B4', v: 32.0 }, { cell: 'C4', v: 28.0 }, { cell: 'D4', v: 9.0 },
      { cell: 'E4', f: '(B4-C4)/D4' }, { cell: 'F4', v: 0.20 }, { cell: 'G4', f: 'E4*F4' },

      { cell: 'A5', v: 'Breadth: 20d Avg Net Advances' },
      { cell: 'B5', v: 34 }, { cell: 'C5', v: 0 }, { cell: 'D5', v: 60 },
      { cell: 'E5', f: '(B5-C5)/D5' }, { cell: 'F5', v: 0.20 }, { cell: 'G5', f: 'E5*F5' },

      { cell: 'A6', v: 'Buffett Indicator (%) [inverted]' },
      { cell: 'B6', v: 14.4 }, { cell: 'C6', v: 15.5 }, { cell: 'D6', v: 3.2 },
      { cell: 'E6', f: '-(B6-C6)/D6' }, { cell: 'F6', v: 0.10 }, { cell: 'G6', f: 'E6*F6' },

      { cell: 'A8', v: 'COMPOSITE SCORE' }, { cell: 'B8', f: 'SUM(G2:G6)' },
      { cell: 'A9', v: 'WEIGHT CHECK (must be 1.00)' }, { cell: 'B9', f: 'SUM(F2:F6)' },

      { cell: 'A11', v: 'PHASE' },
      {
        cell: 'B11',
        f: 'IF(B8>1,"MARKUP - broad participation, credit expanding",IF(B8>0.25,"EARLY MARKUP / ACCUMULATION",IF(B8>-0.25,"NEUTRAL - no edge, reduce activity",IF(B8>-1,"DISTRIBUTION / EARLY MARKDOWN","MARKDOWN - forced selling likely"))))',
      },

      { cell: 'A13', v: 'Base Equity Allocation (%)' }, { cell: 'B13', v: 60 },
      { cell: 'A14', v: 'Cycle Tilt (%)' }, { cell: 'B14', f: 'B8*15' },
      { cell: 'A15', v: 'SUGGESTED ALLOCATION (%)' }, { cell: 'B15', f: 'MAX(20,MIN(90,B13+B14))' },
    ],
  },

  objectives: {
    en: [
      'Distinguish the liquidity cycle from the earnings cycle and explain which dominates on the DSE.',
      'Rank DSE cycle indicators as leading, coincident, or lagging.',
      'Normalise dissimilar indicators with z-scores and combine them into a single composite phase score.',
      'Translate a composite score into a position-sizing decision rather than a market call.',
      'Explain why a cycle framework must be written down before it is needed.',
    ],
    bn: [
      'তারল্য চক্রকে আয় চক্র থেকে আলাদা করা এবং ডিএসই-তে কোনটি প্রাধান্য পায় তা ব্যাখ্যা করা।',
      'ডিএসই চক্রের নির্দেশকগুলোকে অগ্রবর্তী, সমকালীন বা পশ্চাৎবর্তী হিসেবে সাজানো।',
      'জেড-স্কোর দিয়ে অসদৃশ নির্দেশক প্রমিতকরণ এবং একটি একক সমন্বিত পর্যায় স্কোরে যুক্ত করা।',
      'সমন্বিত স্কোরকে বাজার ভবিষ্যদ্বাণী নয়, পজিশন সাইজিং সিদ্ধান্তে রূপান্তরিত করা।',
      'কেন চক্র কাঠামো প্রয়োজন হওয়ার আগেই লিখে রাখতে হবে তা ব্যাখ্যা করা।',
    ],
  },

  blocks: {
    theory: {
      en: `Chapter 6 named the four phases. This chapter answers the harder question: **how do you know which one you are in, before it is obvious?**

### Two cycles, not one

Every equity market runs two cycles simultaneously.

**The earnings cycle** — corporate profits expand and contract with the real economy. Slow, measurable in quarters, and ultimately what a share is worth.

**The liquidity cycle** — the quantity of money available to buy shares expands and contracts with credit conditions. Fast, and it sets prices in the short and medium term.

In a deep market these two roughly converge. **On the DSE they frequently do not, and when they diverge, liquidity wins.**

The reason is structural, from Chapter 1: the listed market is ~15% of GDP and heavily concentrated. It is small enough that a modest shift in domestic credit conditions can flood it or drain it, regardless of what corporate earnings are doing. Square Pharmaceuticals' earnings in 2011 were fine. The price was not, because the money had left.

**This is why Part I exists before Part II.** Company analysis tells you what is worth owning. The liquidity cycle tells you whether owning it right now will be rewarded.

### The drivers, in order of usefulness

**1. Private sector credit growth** *(leading)*
Published monthly by Bangladesh Bank. When credit growth accelerates, some of that money reaches the market — directly through margin, indirectly through business liquidity. This is the single best forward indicator for DSE liquidity, and it is free.

**2. Call money rate** *(leading)*
The overnight interbank rate. Soft call money means banks have surplus liquidity; tight call money means they do not. When the rate spikes, market liquidity contracts within weeks.

**3. Margin availability** *(leading, policy-driven)*
BSEC periodically adjusts permitted margin ratios, sometimes tied to index levels. A loosening is an explicit injection of leveraged buying power; a tightening is a scheduled withdrawal. This is announced, and therefore knowable in advance.

**4. Breadth** *(coincident)*
Advances minus declines, from Chapter 6. Confirms what the liquidity indicators predicted. Coincident means it tells you where you are, not where you are going — still valuable, because most participants do not even know where they are.

**5. Turnover velocity** *(coincident)*
From Chapter 1. Below ~15% signals dormancy; above ~50% signals speculative churn rather than investment.

**6. IPO supply** *(coincident to lagging)*
From Chapter 4's feedback loop: issuance floods when valuations are high. A crowded IPO pipeline is a symptom of a late-stage market, not a cause.

**7. Index level and P/E** *(lagging)*
These describe what has already happened. They are the indicators everyone quotes and the least useful for deciding what to do next.

### Why a composite, and why z-scores

No single indicator works. Credit growth can accelerate while breadth deteriorates; velocity can spike in both euphoria and panic. Any one of them will whipsaw you.

The fix is to combine them — but they are in incompatible units. Credit growth is a percentage around 11; net advances is a count around zero; velocity is a percentage around 28. You cannot average them directly.

**The z-score solves this.** It restates every indicator as "how many standard deviations from its own historical mean," which is unitless and comparable:

$$z = \\frac{x - \\mu}{\\sigma}$$

Note that this is the same logic as Chapter 1's historical percentile framing of the Buffett Indicator. **The raw number is noise; the position within its own history is signal.** That principle, established in the first chapter, is what makes a composite possible at all.

Some indicators must be **inverted** before combining — a high call money rate is bearish, so its z-score enters with a negative sign. Getting the sign wrong is the most common error in building one of these.

### What the composite is for

**It is not a market forecast.** It does not tell you the index will rise. It tells you whether current conditions have historically favoured taking risk, which is a different and more modest claim.

Its correct output is a **position-sizing decision**, not a buy or sell instruction:

| Composite | Reading | Action |
|---|---|---|
| > +1.0 | Markup | Full allocation, add on weakness |
| +0.25 to +1.0 | Early markup / accumulation | Building, normal allocation |
| −0.25 to +0.25 | Neutral | No edge — reduce activity, do not force trades |
| −1.0 to −0.25 | Distribution / early markdown | Stop adding, tighten sizing |
| < −1.0 | Markdown | Minimum allocation, expect forced selling |

**The neutral band matters more than it looks.** Most of the time the composite will sit near zero, and the correct action is to do very little. Frameworks that always produce a signal are frameworks that will always produce a trade, and turnover is a cost.`,
      bn: `অধ্যায় ৬ চারটি পর্যায়ের নাম দিয়েছে। এই অধ্যায় কঠিন প্রশ্নটির উত্তর দেয়: **স্পষ্ট হওয়ার আগেই আপনি কীভাবে জানবেন কোনটিতে আছেন?**

### একটি নয়, দুটি চক্র

প্রতিটি শেয়ারবাজারে একসঙ্গে দুটি চক্র চলে।

**আয় চক্র** — কর্পোরেট মুনাফা প্রকৃত অর্থনীতির সঙ্গে বাড়ে ও কমে। ধীর, প্রান্তিকে মাপা যায়, এবং শেষ পর্যন্ত একটি শেয়ারের মূল্য এটিই।

**তারল্য চক্র** — শেয়ার কেনার জন্য উপলব্ধ অর্থের পরিমাণ ঋণ পরিস্থিতির সঙ্গে বাড়ে ও কমে। দ্রুত, এবং স্বল্প ও মধ্যমেয়াদে দাম এটিই নির্ধারণ করে।

গভীর বাজারে এই দুটি মোটামুটি মিলে যায়। **ডিএসই-তে প্রায়ই মেলে না, আর যখন আলাদা হয়, তারল্য জেতে।**

কারণটি কাঠামোগত, অধ্যায় ১ থেকে: তালিকাভুক্ত বাজার জিডিপির ~১৫% এবং প্রবলভাবে কেন্দ্রীভূত। এটি এতই ছোট যে অভ্যন্তরীণ ঋণ পরিস্থিতির সামান্য পরিবর্তনও একে ভাসিয়ে দিতে বা শুকিয়ে ফেলতে পারে, কর্পোরেট আয় যা-ই করুক। ২০১১ সালে স্কয়ার ফার্মার আয় ঠিকই ছিল। দাম ছিল না, কারণ টাকা চলে গিয়েছিল।

**এ কারণেই পর্ব ২-এর আগে পর্ব ১ আছে।** কোম্পানি বিশ্লেষণ বলে কী মালিকানার যোগ্য। তারল্য চক্র বলে এই মুহূর্তে তার মালিক হওয়া পুরস্কৃত হবে কি না।

### চালকসমূহ, উপযোগিতার ক্রমে

**১. বেসরকারি খাতে ঋণ প্রবৃদ্ধি** *(অগ্রবর্তী)*
বাংলাদেশ ব্যাংক মাসিকভাবে প্রকাশ করে। ঋণ প্রবৃদ্ধি ত্বরান্বিত হলে ঐ টাকার কিছু বাজারে পৌঁছায় — সরাসরি মার্জিনের মাধ্যমে, পরোক্ষভাবে ব্যবসায়িক তারল্যের মাধ্যমে। ডিএসই তারল্যের জন্য এটিই একক সেরা অগ্রবর্তী নির্দেশক, এবং এটি বিনামূল্যের।

**২. কল মানি রেট** *(অগ্রবর্তী)*
আন্তঃব্যাংক রাতারাতি হার। নরম কল মানি মানে ব্যাংকের উদ্বৃত্ত তারল্য আছে; কড়া কল মানি মানে নেই। হার লাফ দিলে সপ্তাহের মধ্যেই বাজার তারল্য সংকুচিত হয়।

**৩. মার্জিনের প্রাপ্যতা** *(অগ্রবর্তী, নীতি-চালিত)*
বিএসইসি পর্যায়ক্রমে অনুমোদিত মার্জিন অনুপাত সমন্বয় করে, কখনো সূচকের স্তরের সঙ্গে যুক্ত করে। শিথিলকরণ মানে লিভারেজড ক্রয়ক্ষমতার স্পষ্ট সঞ্চালন; কড়াকড়ি মানে নির্ধারিত প্রত্যাহার। এটি ঘোষিত হয়, তাই আগে থেকেই জানা যায়।

**৪. ব্যাপ্তি** *(সমকালীন)*
অধ্যায় ৬-এর বৃদ্ধি বিয়োগ পতন। তারল্য নির্দেশক যা পূর্বাভাস দিয়েছিল তা নিশ্চিত করে। সমকালীন মানে এটি বলে আপনি কোথায় আছেন, কোথায় যাচ্ছেন তা নয় — তবুও মূল্যবান, কারণ বেশিরভাগ অংশগ্রহণকারী কোথায় আছেন তা-ও জানেন না।

**৫. টার্নওভার ভেলোসিটি** *(সমকালীন)*
অধ্যায় ১ থেকে। ~১৫%-এর নিচে নিষ্ক্রিয়তা; ~৫০%-এর ওপরে বিনিয়োগ নয় ফটকা মন্থন নির্দেশ করে।

**৬. আইপিও সরবরাহ** *(সমকালীন থেকে পশ্চাৎবর্তী)*
অধ্যায় ৪-এর প্রতিক্রিয়া চক্র থেকে: মূল্যায়ন উঁচু হলে ইস্যু উপচে পড়ে। ভিড়ে ঠাসা আইপিও সারি শেষ পর্যায়ের বাজারের লক্ষণ, কারণ নয়।

**৭. সূচকের স্তর ও P/E** *(পশ্চাৎবর্তী)*
এগুলো যা ঘটে গেছে তা বর্ণনা করে। সবাই এগুলোই উদ্ধৃত করে, আর পরবর্তী পদক্ষেপ ঠিক করার জন্য এগুলোই সবচেয়ে কম কার্যকর।

### কেন সমন্বিত, এবং কেন জেড-স্কোর

কোনো একক নির্দেশক কাজ করে না। ব্যাপ্তি খারাপ হতে থাকা অবস্থায়ও ঋণ প্রবৃদ্ধি ত্বরান্বিত হতে পারে; উচ্ছ্বাস ও আতঙ্ক — দুটোতেই ভেলোসিটি লাফ দিতে পারে। যেকোনো একটি আপনাকে এদিক-ওদিক ছুঁড়ে ফেলবে।

সমাধান হলো এগুলো যুক্ত করা — কিন্তু এদের একক অসঙ্গত। ঋণ প্রবৃদ্ধি ১১-এর আশপাশে একটি শতাংশ; নিট বৃদ্ধি শূন্যের আশপাশে একটি গণনা; ভেলোসিটি ২৮-এর আশপাশে একটি শতাংশ। এদের সরাসরি গড় করা যায় না।

**জেড-স্কোর এটি সমাধান করে।** এটি প্রতিটি নির্দেশককে "নিজস্ব ঐতিহাসিক গড় থেকে কত পরিমিত ব্যবধান দূরে" হিসেবে পুনর্লিখন করে, যা এককবিহীন ও তুলনীয়:

$$z = \\frac{x - \\mu}{\\sigma}$$

লক্ষ করুন এটি অধ্যায় ১-এর বাফেট নির্দেশকের ঐতিহাসিক পার্সেন্টাইল কাঠামোরই যুক্তি। **কাঁচা সংখ্যাটি গোলমাল; নিজস্ব ইতিহাসের মধ্যে অবস্থানটিই সংকেত।** প্রথম অধ্যায়ে প্রতিষ্ঠিত ঐ নীতিই সমন্বিত স্কোর আদৌ সম্ভব করে।

কিছু নির্দেশক যুক্ত করার আগে **উল্টে নিতে হয়** — উঁচু কল মানি রেট মন্দাসূচক, তাই তার জেড-স্কোর ঋণাত্মক চিহ্নসহ ঢোকে। চিহ্ন ভুল করা এ ধরনের মডেল তৈরিতে সবচেয়ে সাধারণ ভুল।

### সমন্বিত স্কোর কীসের জন্য

**এটি বাজারের পূর্বাভাস নয়।** এটি বলে না সূচক বাড়বে। এটি বলে বর্তমান পরিস্থিতি ঐতিহাসিকভাবে ঝুঁকি নেওয়ার অনুকূল ছিল কি না, যা একটি ভিন্ন ও অধিকতর বিনয়ী দাবি।

এর সঠিক ফলাফল একটি **পজিশন সাইজিং সিদ্ধান্ত**, ক্রয় বা বিক্রয় নির্দেশ নয়:

| সমন্বিত | পাঠ | পদক্ষেপ |
|---|---|---|
| > +১.০ | উত্থান | পূর্ণ বণ্টন, দুর্বলতায় যোগ |
| +০.২৫ থেকে +১.০ | প্রাথমিক উত্থান / সঞ্চয়ন | গড়ে তোলা, স্বাভাবিক বণ্টন |
| −০.২৫ থেকে +০.২৫ | নিরপেক্ষ | কোনো সুবিধা নেই — কার্যকলাপ কমান, জোর করে লেনদেন নয় |
| −১.০ থেকে −০.২৫ | বণ্টন / প্রাথমিক পতন | যোগ করা বন্ধ, সাইজিং কঠোর |
| < −১.০ | পতন | ন্যূনতম বণ্টন, বাধ্যতামূলক বিক্রি প্রত্যাশা করুন |

**নিরপেক্ষ পরিসরটি দেখতে যতটা মনে হয় তার চেয়ে বেশি গুরুত্বপূর্ণ।** বেশিরভাগ সময় সমন্বিত স্কোর শূন্যের কাছে থাকবে, আর সঠিক পদক্ষেপ হলো খুব সামান্য কিছু করা। যে কাঠামো সবসময় একটি সংকেত দেয়, সেটি সবসময় একটি লেনদেন তৈরি করবে, আর লেনদেনের পরিমাণ একটি খরচ।`,
    },

    simple: {
      en: `Two things move share prices: **how well companies are doing**, and **how much money is around to buy shares with**.

In a big market these usually move together. In Bangladesh they often do not — and when they disagree, **the money wins**.

Think of the DSE as a small pond. The listed market is only about 15% of the economy. So when the banking system has spare cash, a little of it flows into the pond and the water rises a lot. When the banks tighten, that water drains out fast. The fish are the same fish. The water level has nothing to do with them.

**That is why a great company can fall 60% while its business is fine.** Square in 2011 was not a worse company. The pond had drained.

### So watch the water, not just the fish

Where does the water come from? In order of how early they warn you:

1. **Bank lending growth** — published monthly, free. Money being lent is money that eventually finds the market.
2. **The overnight rate banks charge each other** — low means spare cash, high means none.
3. **Whether brokers are allowed to lend more or less on margin** — announced by BSEC in advance.

Then the confirmations: how many shares are rising (breadth), and how much is being traded.

Everyone quotes the index and the P/E. Those describe **what already happened**. They are the last to know.

### The problem with using just one

Each of these signals lies sometimes. Lending can be growing while the market is quietly rolling over. Trading volume goes up in a panic *and* in a boom.

So you combine them. But you cannot average "13.5% credit growth" with "net advances of 34" — different units entirely.

**The trick:** for each one, ask "how unusual is this compared to its own history?" That gives you a number like +0.8 or −1.2 for everything, in the same units. Now you can average them.

Then one number tells you: are conditions currently friendly or hostile?

**And here is the important part.** That number does not tell you what the market will do. It tells you **how much to bet**. Friendly conditions, normal size. Hostile conditions, small size. Neutral — which is most of the time — do very little.

A system that always tells you to do something will make you trade constantly, and trading costs money.`,
      bn: `শেয়ারের দাম দুটি জিনিস নাড়ায়: **কোম্পানিগুলো কেমন করছে**, আর **শেয়ার কেনার মতো কত টাকা আশপাশে আছে**।

বড় বাজারে এ দুটি সাধারণত একসঙ্গে চলে। বাংলাদেশে প্রায়ই চলে না — আর যখন এরা দ্বিমত করে, **টাকা জেতে**।

ডিএসই-কে একটি ছোট পুকুর ভাবুন। তালিকাভুক্ত বাজার অর্থনীতির মাত্র ~১৫%। তাই ব্যাংকব্যবস্থায় বাড়তি নগদ থাকলে তার সামান্যই পুকুরে ঢোকে আর পানি অনেকটা বাড়ে। ব্যাংক কড়াকড়ি করলে ঐ পানি দ্রুত বেরিয়ে যায়। মাছগুলো একই মাছ। পানির স্তরের সঙ্গে তাদের কোনো সম্পর্ক নেই।

**এ কারণেই ব্যবসা ঠিক থাকা সত্ত্বেও একটি চমৎকার কোম্পানি ৬০% পড়তে পারে।** ২০১১ সালে স্কয়ার খারাপ কোম্পানি হয়ে যায়নি। পুকুর শুকিয়ে গিয়েছিল।

### তাই কেবল মাছ নয়, পানি দেখুন

পানি কোথা থেকে আসে? কারা কত আগে সতর্ক করে সেই ক্রমে:

১. **ব্যাংক ঋণের প্রবৃদ্ধি** — মাসিক প্রকাশিত, বিনামূল্যের। যে টাকা ধার দেওয়া হচ্ছে তা শেষ পর্যন্ত বাজারে পৌঁছায়।
২. **ব্যাংকগুলো একে অপরের কাছে যে রাতারাতি হার নেয়** — কম মানে বাড়তি নগদ, বেশি মানে নেই।
৩. **ব্রোকাররা মার্জিনে বেশি না কম ধার দিতে পারবে** — বিএসইসি আগেই ঘোষণা করে।

তারপর নিশ্চিতকরণ: কতগুলো শেয়ার বাড়ছে (ব্যাপ্তি), আর কত লেনদেন হচ্ছে।

সবাই সূচক ও P/E উদ্ধৃত করে। ওগুলো **যা ঘটে গেছে** তা বর্ণনা করে। ওরাই সবার শেষে জানে।

### কেবল একটি ব্যবহারের সমস্যা

এই সংকেতগুলোর প্রতিটিই কখনো কখনো মিথ্যা বলে। বাজার চুপচাপ উল্টে যেতে থাকা অবস্থায়ও ঋণ বাড়তে পারে। আতঙ্কে *এবং* উত্থানে — দুটোতেই লেনদেনের পরিমাণ বাড়ে।

তাই এদের যুক্ত করুন। কিন্তু "১৩.৫% ঋণ প্রবৃদ্ধি" ও "নিট বৃদ্ধি ৩৪"-এর গড় করা যায় না — একেবারে ভিন্ন একক।

**কৌশলটি:** প্রতিটির জন্য জিজ্ঞেস করুন "নিজের ইতিহাসের তুলনায় এটি কতটা অস্বাভাবিক?" এতে সবকিছুর জন্য +০.৮ বা −১.২ ধরনের একটি সংখ্যা পাবেন, একই এককে। এখন গড় করা যায়।

তারপর একটি সংখ্যা বলে দেয়: পরিস্থিতি এখন বন্ধুভাবাপন্ন না বৈরী?

**আর এখানেই গুরুত্বপূর্ণ অংশ।** ঐ সংখ্যা বলে না বাজার কী করবে। এটি বলে **কতটা বাজি ধরবেন**। বন্ধুভাবাপন্ন পরিস্থিতি, স্বাভাবিক আকার। বৈরী পরিস্থিতি, ছোট আকার। নিরপেক্ষ — যা বেশিরভাগ সময়ই — খুব সামান্য কিছু করুন।

যে ব্যবস্থা সবসময় আপনাকে কিছু করতে বলে, সেটি আপনাকে অবিরাম লেনদেন করাবে, আর লেনদেনে টাকা খরচ হয়।`,
    },

    example: {
      en: `### Building the scorecard on a live reading

Five indicators, each with its own historical mean and standard deviation.

| Indicator | Current | Mean μ | Std σ | Raw z | Invert? | Final z | Weight | Contribution |
|---|---|---|---|---|---|---|---|---|
| Private sector credit growth (%) | 13.5 | 11.0 | 3.0 | +0.83 | No | **+0.83** | 0.30 | +0.250 |
| Call money rate (%) | 6.0 | 7.5 | 2.0 | −0.75 | **Yes** | **+0.75** | 0.20 | +0.150 |
| Turnover velocity (% p.a.) | 32.0 | 28.0 | 9.0 | +0.44 | No | **+0.44** | 0.20 | +0.089 |
| Breadth: 20-day avg net advances | 34 | 0 | 60 | +0.57 | No | **+0.57** | 0.20 | +0.113 |
| Buffett Indicator (%) | 14.4 | 15.5 | 3.2 | −0.34 | **Yes** | **+0.34** | 0.10 | +0.034 |
| | | | | | | | **1.00** | **+0.636** |

**Composite = +0.64** → *Early markup / accumulation.*

**Read what is actually driving it.** Credit growth contributes +0.250 of the +0.636 — nearly 40% of the signal from one indicator. That is by design (it carries the highest weight because it leads), but it means **this reading is substantially a bet that Bangladesh Bank data is telling the truth about liquidity.** If credit growth reverses next month, the composite falls by roughly a quarter of a point on that line alone.

Always decompose the score. A composite of +0.64 built from five indicators all around +0.6 is a very different signal from +0.64 built from one at +2.5 and four near zero. The first is a consensus; the second is a single indicator shouting.

### The two inverted signs

Note carefully which two indicators are inverted, because getting this wrong reverses the entire model:

- **Call money rate at 6.0 vs a mean of 7.5** is *below* average. Cheap money is *favourable*. Raw z is −0.75; we flip it to **+0.75**.
- **Buffett Indicator at 14.4 vs a mean of 15.5** means the market is *cheaper* than its own history. Cheaper is *favourable*. Raw z is −0.34; we flip it to **+0.34**.

Both of these are "low number = good." The other three are "high number = good." **Write the direction of every indicator down next to it in the sheet.** This is the error that silently inverts a model, and it produces a system that is confidently wrong for years.

### From score to size

A composite of +0.64 with a base allocation of 60%:

$$\\text{Tilt} = 0.636 \\times 15 = +9.5\\%$$
$$\\text{Allocation} = 60 + 9.5 = 69.5\\% \\text{, floored at 20\\% and capped at 90\\%}$$

**Note what this is not.** It is not "buy" — it is "carry somewhat more equity than your neutral weight." The floors and caps matter: even at a maximum score you hold 90%, not 100%, and even at the worst reading you hold 20%, not zero.

**Never let a model take you to a corner.** The composite can be wrong, the indicators can be revised, and a framework that permits 0% or 100% will eventually deliver one of them at exactly the wrong moment.

### The same scorecard in late 2010

Reconstruct it approximately for December 2010:

| Indicator | Reading | Final z |
|---|---|---|
| Credit growth | Very high, decelerating from peak | +1.2 |
| Call money | Spiking sharply | −1.5 |
| Turnover velocity | Far above 50% | +2.0 raw, **but** |
| Breadth | Deteriorating at index highs | −0.8 |
| Buffett Indicator | Well above historical range | −1.6 |

**Now run it.** The §7.11 code computes this exactly, and the answer should disturb you:

$$C = +1.663 \\quad \\Rightarrow \\quad \\textbf{MARKUP} \\quad \\Rightarrow \\quad \\textbf{84.9\\% allocation}$$

**The scorecard as built in §7.10 would have told you to be 85% invested in December 2010.** Weeks before the worst crash in the market's modern history.

This is not a flaw in the idea of a composite. It is two specific, identifiable modelling errors, and both are instructive.

**Error 1 — velocity scored as a straight line.** Turnover velocity of 75% against a mean of 28% produces $z = +5.22$, contributing $+1.044$. The model reads the most extreme speculative churn in DSE history as its single strongest *bullish* input. Chapter 1 already told us velocity above ~50% signals churn rather than health — the scorecard simply was not built to know that.

Score it as an inverted-U about a healthy ~28% instead, and that $+1.044$ becomes $-1.044$. The composite swings by 2.088 points:

$$C_{corrected} = 1.663 - 2.088 = -0.425 \\quad \\Rightarrow \\quad \\textbf{DISTRIBUTION / EARLY MARKDOWN}$$

**One modelling decision, and the framework flips from "be 85% invested" to "stop adding, tighten sizing."**

**Error 2 — an unwinsorised extreme.** Credit growth at 24% against a mean of 11% with σ of 3 gives $z = +4.33$, contributing $+1.300$ on its own. A z-score above 4 is a once-in-a-generation reading, and the model treats it as simply "very bullish, linearly." But **credit growth that far above trend is itself a late-cycle warning**, not a green light. Capping z-scores at ±2 (winsorising) would have cut that contribution from +1.300 to +0.600.

Apply both fixes together and December 2010 reads clearly negative.

**The honest lesson of this chapter is therefore not "build a composite and follow it."** It is: *a composite inherits every assumption you make about the shape of its inputs, and a linear assumption on a non-linear indicator will point confidently in exactly the wrong direction at exactly the top.* The version in §7.10 is left deliberately naive so that you run it on 2010 and see this for yourself.`,
      bn: `### একটি চলমান পাঠে স্কোরকার্ড তৈরি

পাঁচটি নির্দেশক, প্রতিটির নিজস্ব ঐতিহাসিক গড় ও পরিমিত ব্যবধানসহ।

| নির্দেশক | বর্তমান | গড় μ | σ | কাঁচা z | উল্টাবেন? | চূড়ান্ত z | ওজন | অবদান |
|---|---|---|---|---|---|---|---|---|
| বেসরকারি ঋণ প্রবৃদ্ধি (%) | ১৩.৫ | ১১.০ | ৩.০ | +০.৮৩ | না | **+০.৮৩** | ০.৩০ | +০.২৫০ |
| কল মানি রেট (%) | ৬.০ | ৭.৫ | ২.০ | −০.৭৫ | **হ্যাঁ** | **+০.৭৫** | ০.২০ | +০.১৫০ |
| টার্নওভার ভেলোসিটি (%) | ৩২.০ | ২৮.০ | ৯.০ | +০.৪৪ | না | **+০.৪৪** | ০.২০ | +০.০৮৯ |
| ব্যাপ্তি: ২০ দিনের গড় নিট বৃদ্ধি | ৩৪ | ০ | ৬০ | +০.৫৭ | না | **+০.৫৭** | ০.২০ | +০.১১৩ |
| বাফেট নির্দেশক (%) | ১৪.৪ | ১৫.৫ | ৩.২ | −০.৩৪ | **হ্যাঁ** | **+০.৩৪** | ০.১০ | +০.০৩৪ |
| | | | | | | | **১.০০** | **+০.৬৩৬** |

**সমন্বিত = +০.৬৪** → *প্রাথমিক উত্থান / সঞ্চয়ন।*

**আসলে কী এটি চালাচ্ছে তা পড়ুন।** +০.৬৩৬-এর মধ্যে ঋণ প্রবৃদ্ধি অবদান রাখছে +০.২৫০ — একটি নির্দেশক থেকেই সংকেতের প্রায় ৪০%। এটি নকশা অনুযায়ীই (এটি অগ্রবর্তী বলে সর্বোচ্চ ওজন বহন করে), কিন্তু এর অর্থ **এই পাঠটি মূলত এই বাজি যে বাংলাদেশ ব্যাংকের তথ্য তারল্য সম্পর্কে সত্য বলছে।** পরের মাসে ঋণ প্রবৃদ্ধি উল্টে গেলে কেবল ঐ এক লাইনেই সমন্বিত স্কোর প্রায় এক-চতুর্থাংশ পয়েন্ট পড়বে।

সবসময় স্কোর ভেঙে দেখুন। পাঁচটি নির্দেশক সবই ~+০.৬-এর আশপাশে থেকে তৈরি +০.৬৪ আর একটি +২.৫ ও চারটি শূন্যের কাছে থেকে তৈরি +০.৬৪ সম্পূর্ণ ভিন্ন সংকেত। প্রথমটি ঐকমত্য; দ্বিতীয়টি একটি নির্দেশকের চিৎকার।

### দুটি উল্টানো চিহ্ন

কোন দুটি নির্দেশক উল্টানো তা মনোযোগ দিয়ে লক্ষ করুন, কারণ এটি ভুল করলে পুরো মডেল উল্টে যায়:

- **৭.৫ গড়ের বিপরীতে কল মানি রেট ৬.০** গড়ের *নিচে*। সস্তা টাকা *অনুকূল*। কাঁচা z হলো −০.৭৫; আমরা একে **+০.৭৫** করি।
- **১৫.৫ গড়ের বিপরীতে বাফেট নির্দেশক ১৪.৪** মানে বাজার নিজের ইতিহাসের চেয়ে *সস্তা*। সস্তা *অনুকূল*। কাঁচা z হলো −০.৩৪; আমরা একে **+০.৩৪** করি।

দুটিই "কম সংখ্যা = ভালো।" বাকি তিনটি "বেশি সংখ্যা = ভালো।" **শিটে প্রতিটি নির্দেশকের পাশে তার দিক লিখে রাখুন।** এই ভুলটিই নীরবে একটি মডেল উল্টে দেয়, আর এমন একটি ব্যবস্থা তৈরি করে যা বছরের পর বছর আত্মবিশ্বাসের সঙ্গে ভুল থাকে।

### স্কোর থেকে আকারে

৬০% ভিত্তি বণ্টনসহ +০.৬৪ সমন্বিত স্কোর:

$$\\text{ঝোঁক} = 0.636 \\times 15 = +9.5\\%$$
$$\\text{বণ্টন} = 60 + 9.5 = 69.5\\% \\text{, সর্বনিম্ন ২০\\% ও সর্বোচ্চ ৯০\\%}$$

**এটি যা নয় তা লক্ষ করুন।** এটি "কিনুন" নয় — এটি "আপনার নিরপেক্ষ ওজনের চেয়ে কিছুটা বেশি শেয়ার রাখুন।" সর্বনিম্ন ও সর্বোচ্চ সীমা গুরুত্বপূর্ণ: সর্বোচ্চ স্কোরেও আপনি ৯০% রাখেন, ১০০% নয়, আর সবচেয়ে খারাপ পাঠেও ২০% রাখেন, শূন্য নয়।

**কখনো কোনো মডেলকে আপনাকে কোণায় নিয়ে যেতে দেবেন না।** সমন্বিত স্কোর ভুল হতে পারে, নির্দেশক সংশোধিত হতে পারে, আর যে কাঠামো ০% বা ১০০% অনুমোদন করে তা শেষ পর্যন্ত ঠিক ভুল মুহূর্তে তার একটি দেবে।

### ২০১০ সালের শেষে একই স্কোরকার্ড

২০১০ সালের ডিসেম্বরের জন্য আনুমানিকভাবে পুনর্গঠন করুন:

| নির্দেশক | পাঠ | চূড়ান্ত z |
|---|---|---|
| ঋণ প্রবৃদ্ধি | খুব উঁচু, শীর্ষ থেকে মন্থর হচ্ছে | +১.২ |
| কল মানি | তীব্রভাবে লাফাচ্ছে | −১.৫ |
| টার্নওভার ভেলোসিটি | ৫০%-এর অনেক ওপরে | +২.০ কাঁচা, **কিন্তু** |
| ব্যাপ্তি | সূচকের শীর্ষে অবনতিশীল | −০.৮ |
| বাফেট নির্দেশক | ঐতিহাসিক পরিসরের অনেক ওপরে | −১.৬ |

**এবার চালান।** §৭.১১-এর কোড এটি ঠিকভাবে গণনা করে, আর উত্তরটি আপনাকে অস্থির করা উচিত:

$$C = +1.663 \\quad \\Rightarrow \\quad \\textbf{উত্থান} \\quad \\Rightarrow \\quad \\textbf{৮৪.৯\\% বণ্টন}$$

**§৭.১০-এ তৈরি স্কোরকার্ডটি ২০১০ সালের ডিসেম্বরে আপনাকে ৮৫% বিনিয়োজিত থাকতে বলত।** বাজারের আধুনিক ইতিহাসের সবচেয়ে ভয়াবহ ধসের কয়েক সপ্তাহ আগে।

এটি সমন্বিত স্কোরের ধারণার ত্রুটি নয়। এটি দুটি নির্দিষ্ট, শনাক্তযোগ্য মডেলিং ভুল, আর দুটিই শিক্ষণীয়।

**ভুল ১ — ভেলোসিটি সরলরেখা হিসেবে স্কোর করা।** ২৮ গড়ের বিপরীতে ৭৫% টার্নওভার ভেলোসিটি দেয় $z = +5.22$, অবদান $+1.044$। মডেলটি ডিএসই ইতিহাসের সবচেয়ে চরম ফটকা মন্থনকে তার একক সবচেয়ে *তেজি* উপাদান হিসেবে পড়ে। অধ্যায় ১ আগেই বলেছে ~৫০%-এর ওপরে ভেলোসিটি সুস্থতা নয় মন্থন নির্দেশ করে — স্কোরকার্ডটি কেবল তা জানার মতো করে তৈরি হয়নি।

বরং সুস্থ ~২৮%-কে কেন্দ্র করে উল্টো-U হিসেবে স্কোর করুন, আর ঐ $+1.044$ হয়ে যায় $-1.044$। সমন্বিত স্কোর ২.০৮৮ পয়েন্ট দোল খায়:

$$C_{সংশোধিত} = 1.663 - 2.088 = -0.425 \\quad \\Rightarrow \\quad \\textbf{বণ্টন / প্রাথমিক পতন}$$

**একটি মডেলিং সিদ্ধান্ত, আর কাঠামোটি "৮৫% বিনিয়োজিত থাকুন" থেকে "যোগ করা বন্ধ করুন, সাইজিং কঠোর করুন"-এ উল্টে যায়।**

**ভুল ২ — একটি অসীমাবদ্ধ চরম পাঠ।** σ = ৩ সহ ১১ গড়ের বিপরীতে ২৪% ঋণ প্রবৃদ্ধি দেয় $z = +4.33$, একাই অবদান $+1.300$। ৪-এর ওপরে জেড-স্কোর এক প্রজন্মে একবারের পাঠ, আর মডেল একে কেবল "খুব তেজি, রৈখিকভাবে" গণ্য করে। কিন্তু **প্রবণতার এত ওপরে ঋণ প্রবৃদ্ধি নিজেই একটি শেষ-পর্যায়ের সতর্কতা**, সবুজ সংকেত নয়। জেড-স্কোর ±২-এ সীমাবদ্ধ করলে (উইনসরাইজিং) ঐ অবদান +১.৩০০ থেকে +০.৬০০-এ নামত।

দুটি সংশোধন একসঙ্গে প্রয়োগ করলে ২০১০ সালের ডিসেম্বর স্পষ্টভাবে ঋণাত্মক পড়ে।

**তাই এই অধ্যায়ের সৎ শিক্ষা "একটি সমন্বিত স্কোর তৈরি করে তা অনুসরণ করুন" নয়।** বরং: *একটি সমন্বিত স্কোর তার উপাদানগুলোর আকৃতি সম্পর্কে আপনার করা প্রতিটি অনুমান উত্তরাধিকারসূত্রে পায়, আর অরৈখিক নির্দেশকে রৈখিক অনুমান ঠিক শীর্ষে আত্মবিশ্বাসের সঙ্গে ঠিক ভুল দিকে নির্দেশ করবে।* §৭.১০-এর সংস্করণ ইচ্ছাকৃতভাবে সরল রাখা হয়েছে যাতে আপনি এটি ২০১০-এ চালিয়ে নিজে দেখেন।`,
    },

    formula: {
      en: `**Z-score** — restating any indicator in units of its own historical variability:
$$z_i = \\frac{x_i - \\mu_i}{\\sigma_i}$$

**Sign convention.** For indicators where a *low* reading is favourable (call money rate, valuation), invert:
$$z_i^{adj} = -z_i$$

**Composite score** — weighted sum, with weights summing to 1:
$$C = \\sum_{i=1}^{n} w_i \\, z_i^{adj}, \\qquad \\sum_{i=1}^{n} w_i = 1$$

**Contribution of a single indicator** — always decompose before trusting a composite:
$$\\text{Contribution}_i = w_i \\, z_i^{adj}$$

**Credit impulse** — the acceleration of credit, which leads the level:
$$I_t = \\Delta g_t = g_t - g_{t-1}$$

where $g_t$ is the credit growth rate in period $t$. A decelerating but still-high growth rate is an early warning that the level alone will not give you.

**Allocation from score** — bounded, so the model can never take you to a corner:
$$A = \\max\\left(A_{min}, \\; \\min\\left(A_{max}, \\; A_{base} + kC\\right)\\right)$$

with $k$ the tilt sensitivity (15 in the worked example), $A_{min} = 20\\%$, $A_{max} = 90\\%$.

**Inverted-U treatment for turnover velocity.** Because both extremes are unfavourable, score the *distance from the healthy midpoint* rather than the level:
$$z_V^{adj} = -\\left| \\frac{V - V_{healthy}}{\\sigma_V} \\right|$$

with $V_{healthy} \\approx 28\\%$ from Chapter 1. This is the refinement the worked example deliberately omits.`,
      bn: `**জেড-স্কোর** — যেকোনো নির্দেশককে তার নিজস্ব ঐতিহাসিক পরিবর্তনশীলতার এককে পুনর্লিখন:
$$z_i = \\frac{x_i - \\mu_i}{\\sigma_i}$$

**চিহ্নের নিয়ম।** যেসব নির্দেশকে *কম* পাঠ অনুকূল (কল মানি রেট, মূল্যায়ন), সেগুলো উল্টান:
$$z_i^{adj} = -z_i$$

**সমন্বিত স্কোর** — ভারিত যোগফল, ওজনের যোগফল ১:
$$C = \\sum_{i=1}^{n} w_i \\, z_i^{adj}, \\qquad \\sum_{i=1}^{n} w_i = 1$$

**একটি নির্দেশকের অবদান** — সমন্বিত স্কোরে আস্থা রাখার আগে সবসময় ভেঙে দেখুন:
$$\\text{অবদান}_i = w_i \\, z_i^{adj}$$

**ঋণ প্রেরণা** — ঋণের ত্বরণ, যা স্তরের আগে চলে:
$$I_t = \\Delta g_t = g_t - g_{t-1}$$

যেখানে $g_t$ হলো $t$ সময়ে ঋণ প্রবৃদ্ধির হার। মন্থর হতে থাকা অথচ এখনো উঁচু প্রবৃদ্ধি হার একটি আগাম সতর্কতা, যা কেবল স্তর দেখে পাওয়া যায় না।

**স্কোর থেকে বণ্টন** — সীমাবদ্ধ, যাতে মডেল কখনো আপনাকে কোণায় নিতে না পারে:
$$A = \\max\\left(A_{min}, \\; \\min\\left(A_{max}, \\; A_{base} + kC\\right)\\right)$$

যেখানে $k$ ঝোঁকের সংবেদনশীলতা (উদাহরণে ১৫), $A_{min} = 20\\%$, $A_{max} = 90\\%$।

**টার্নওভার ভেলোসিটির উল্টো-U গণ্যকরণ।** যেহেতু দুই প্রান্তই প্রতিকূল, স্তরের বদলে *সুস্থ মধ্যবিন্দু থেকে দূরত্ব* স্কোর করুন:
$$z_V^{adj} = -\\left| \\frac{V - V_{healthy}}{\\sigma_V} \\right|$$

যেখানে অধ্যায় ১ থেকে $V_{healthy} \\approx 28\\%$। এই পরিমার্জনটিই উদাহরণে ইচ্ছাকৃতভাবে বাদ দেওয়া হয়েছে।`,
    },

    manual: {
      en: `**Scenario.** Compute the composite from the five current readings.

**Step 1 — Credit growth.** Current 13.5, μ = 11.0, σ = 3.0. Higher is favourable, no inversion.
$$z = \\frac{13.5 - 11.0}{3.0} = \\frac{2.5}{3.0} = +0.833$$

**Step 2 — Call money rate.** Current 6.0, μ = 7.5, σ = 2.0. **Lower is favourable — invert.**
$$z_{raw} = \\frac{6.0 - 7.5}{2.0} = -0.750 \\quad \\Rightarrow \\quad z^{adj} = +0.750$$

**Step 3 — Turnover velocity.** Current 32.0, μ = 28.0, σ = 9.0. No inversion (linear version).
$$z = \\frac{32.0 - 28.0}{9.0} = +0.444$$

**Step 4 — Breadth.** Current 34, μ = 0, σ = 60. No inversion.
$$z = \\frac{34 - 0}{60} = +0.567$$

**Step 5 — Buffett Indicator.** Current 14.4, μ = 15.5, σ = 3.2. **Cheaper is favourable — invert.**
$$z_{raw} = \\frac{14.4 - 15.5}{3.2} = -0.344 \\quad \\Rightarrow \\quad z^{adj} = +0.344$$

**Step 6 — Weighted contributions:**

$$0.30(0.833) = 0.2500$$
$$0.20(0.750) = 0.1500$$
$$0.20(0.444) = 0.0889$$
$$0.20(0.567) = 0.1133$$
$$0.10(0.344) = 0.0344$$

**Step 7 — Composite:**
$$C = 0.2500 + 0.1500 + 0.0889 + 0.1133 + 0.0344 = +0.6366$$

**Step 8 — Phase:** $+0.25 < 0.637 < 1.0$ → **Early markup / accumulation.**

**Step 9 — Allocation** from a 60% base with $k = 15$:
$$A = 60 + 15(0.6366) = 60 + 9.55 = 69.5\\%$$

Within the 20–90% bounds, so no clamping applies.

---

**Step 10 — Now the sensitivity test that most people skip.** Credit growth contributes 0.250 of 0.637 — **39% of the entire signal**. Suppose next month's Bangladesh Bank release revises credit growth to 11.0, exactly the mean:

$$z = 0 \\quad \\Rightarrow \\quad \\text{contribution} = 0$$
$$C_{new} = 0 + 0.1500 + 0.0889 + 0.1133 + 0.0344 = +0.3866$$

The composite falls from +0.64 to +0.39 — still positive, still the same phase band, but the tilt drops from +9.5% to +5.8% of the portfolio.

**Interpretation.** The framework degrades gracefully rather than flipping, which is what a well-weighted composite should do. But note that a *single* indicator moving from +0.83 to 0 cost you nearly 40% of the signal. **If one line can do that, you must look at that line every time.** Never read the composite without reading its decomposition.

**The discipline established here:** the score is an input to sizing, not a prediction. It says "conditions currently resemble periods that historically rewarded risk-taking." It does not say the market will rise, and any month it is treated as though it does is a month you have stopped doing analysis and started doing astrology.`,
      bn: `**পরিস্থিতি।** পাঁচটি বর্তমান পাঠ থেকে সমন্বিত স্কোর গণনা করুন।

**ধাপ ১ — ঋণ প্রবৃদ্ধি।** বর্তমান ১৩.৫, μ = ১১.০, σ = ৩.০। বেশি হওয়া অনুকূল, উল্টানো নেই।
$$z = \\frac{13.5 - 11.0}{3.0} = +0.833$$

**ধাপ ২ — কল মানি রেট।** বর্তমান ৬.০, μ = ৭.৫, σ = ২.০। **কম হওয়া অনুকূল — উল্টান।**
$$z_{raw} = \\frac{6.0 - 7.5}{2.0} = -0.750 \\quad \\Rightarrow \\quad z^{adj} = +0.750$$

**ধাপ ৩ — টার্নওভার ভেলোসিটি।** বর্তমান ৩২.০, μ = ২৮.০, σ = ৯.০। উল্টানো নেই (রৈখিক সংস্করণ)।
$$z = \\frac{32.0 - 28.0}{9.0} = +0.444$$

**ধাপ ৪ — ব্যাপ্তি।** বর্তমান ৩৪, μ = ০, σ = ৬০। উল্টানো নেই।
$$z = \\frac{34 - 0}{60} = +0.567$$

**ধাপ ৫ — বাফেট নির্দেশক।** বর্তমান ১৪.৪, μ = ১৫.৫, σ = ৩.২। **সস্তা হওয়া অনুকূল — উল্টান।**
$$z_{raw} = \\frac{14.4 - 15.5}{3.2} = -0.344 \\quad \\Rightarrow \\quad z^{adj} = +0.344$$

**ধাপ ৬ — ভারিত অবদান:**

$$0.30(0.833) = 0.2500$$
$$0.20(0.750) = 0.1500$$
$$0.20(0.444) = 0.0889$$
$$0.20(0.567) = 0.1133$$
$$0.10(0.344) = 0.0344$$

**ধাপ ৭ — সমন্বিত:**
$$C = +0.6366$$

**ধাপ ৮ — পর্যায়:** $+0.25 < 0.637 < 1.0$ → **প্রাথমিক উত্থান / সঞ্চয়ন।**

**ধাপ ৯ — বণ্টন** ৬০% ভিত্তি থেকে, $k = 15$:
$$A = 60 + 15(0.6366) = 69.5\\%$$

২০–৯০% সীমার মধ্যে, তাই কোনো সীমাবদ্ধকরণ প্রযোজ্য নয়।

---

**ধাপ ১০ — এবার যে সংবেদনশীলতা পরীক্ষা বেশিরভাগ মানুষ এড়িয়ে যান।** ঋণ প্রবৃদ্ধি ০.৬৩৭-এর মধ্যে ০.২৫০ অবদান রাখছে — **পুরো সংকেতের ৩৯%**। ধরুন পরের মাসে বাংলাদেশ ব্যাংকের প্রকাশনায় ঋণ প্রবৃদ্ধি ঠিক গড় ১১.০-এ সংশোধিত হলো:

$$z = 0 \\quad \\Rightarrow \\quad \\text{অবদান} = 0$$
$$C_{new} = +0.3866$$

সমন্বিত স্কোর +০.৬৪ থেকে +০.৩৯-এ নামে — এখনো ধনাত্মক, এখনো একই পর্যায় পরিসরে, কিন্তু ঝোঁক পোর্টফোলিওর +৯.৫% থেকে +৫.৮%-এ নামে।

**ব্যাখ্যা।** কাঠামোটি উল্টে না গিয়ে ধীরে ধীরে দুর্বল হয়, যা একটি সুভারিত সমন্বিত স্কোরের ঠিক তাই করা উচিত। কিন্তু লক্ষ করুন *একটি* নির্দেশক +০.৮৩ থেকে ০-এ নামায় আপনার সংকেতের প্রায় ৪০% খরচ হলো। **একটি লাইন যদি তা করতে পারে, তবে প্রতিবারই ঐ লাইনটি দেখতে হবে।** কখনো ভাঙচি না দেখে সমন্বিত স্কোর পড়বেন না।

**এখানে প্রতিষ্ঠিত শৃঙ্খলা:** স্কোরটি সাইজিংয়ের একটি উপাদান, পূর্বাভাস নয়। এটি বলে "বর্তমান পরিস্থিতি এমন সময়ের সঙ্গে সাদৃশ্যপূর্ণ যা ঐতিহাসিকভাবে ঝুঁকি নেওয়াকে পুরস্কৃত করেছে।" এটি বলে না বাজার বাড়বে, আর যে মাসে একে সেভাবে গণ্য করা হয় সে মাসে আপনি বিশ্লেষণ থামিয়ে জ্যোতিষচর্চা শুরু করেছেন।`,
    },

    excel: {
      en: `\`\`\`
     A                              B        C      D       E          F       G
1    INDICATOR                      Current  Mean   StdDev  Z-Score    Weight  Contribution
2    Private Sector Credit Gr (%)   13.5     11.0   3.0     =(B2-C2)/D2   0.30  =E2*F2
3    Call Money Rate (%) [inv]      6.0      7.5    2.0     =-(B3-C3)/D3  0.20  =E3*F3
4    Turnover Velocity (% p.a.)     32.0     28.0   9.0     =(B4-C4)/D4   0.20  =E4*F4
5    Breadth: 20d Avg Net Adv       34       0      60      =(B5-C5)/D5   0.20  =E5*F5
6    Buffett Indicator (%) [inv]    14.4     15.5   3.2     =-(B6-C6)/D6  0.10  =E6*F6

8    COMPOSITE SCORE                =SUM(G2:G6)
9    WEIGHT CHECK (must be 1.00)    =SUM(F2:F6)

11   PHASE      =IF(B8>1,"MARKUP - broad participation, credit expanding",
                 IF(B8>0.25,"EARLY MARKUP / ACCUMULATION",
                 IF(B8>-0.25,"NEUTRAL - no edge, reduce activity",
                 IF(B8>-1,"DISTRIBUTION / EARLY MARKDOWN",
                 "MARKDOWN - forced selling likely"))))

13   Base Equity Allocation (%)     60
14   Cycle Tilt (%)                 =B8*15
15   SUGGESTED ALLOCATION (%)       =MAX(20,MIN(90,B13+B14))
\`\`\`

**Three things about this sheet.**

**B9 is not decoration.** If your weights do not sum to exactly 1.00, the composite is on a different scale than the thresholds in B11, and the phase labels silently become wrong. Check it every time you change a weight.

**Column G is the sheet's real output**, not B8. The composite is a summary; the contributions tell you what is actually driving it. Sort G descending in your head before acting.

**B15 is bounded on purpose.** MAX(20, MIN(90, …)) means the model can never recommend zero or everything. Remove those bounds and the first extreme reading will take you to a corner you cannot recover from.

Update B2:B6 monthly. The μ and σ columns should be recomputed from your own rolling history — annually is enough, and use at least five years so that the standard deviations mean something.`,
      bn: `\`\`\`
     A                              B        C      D       E          F       G
1    নির্দেশক                        বর্তমান   গড়    σ      জেড-স্কোর    ওজন    অবদান
2    বেসরকারি ঋণ প্রবৃদ্ধি (%)        13.5     11.0   3.0     =(B2-C2)/D2   0.30  =E2*F2
3    কল মানি রেট (%) [উল্টানো]        6.0      7.5    2.0     =-(B3-C3)/D3  0.20  =E3*F3
4    টার্নওভার ভেলোসিটি (%)          32.0     28.0   9.0     =(B4-C4)/D4   0.20  =E4*F4
5    ব্যাপ্তি: ২০ দিনের গড় নিট বৃদ্ধি  34       0      60      =(B5-C5)/D5   0.20  =E5*F5
6    বাফেট নির্দেশক (%) [উল্টানো]     14.4     15.5   3.2     =-(B6-C6)/D6  0.10  =E6*F6

8    সমন্বিত স্কোর                    =SUM(G2:G6)
9    ওজন যাচাই (অবশ্যই ১.০০)         =SUM(F2:F6)

11   পর্যায়     =IF(B8>1,"MARKUP - broad participation, credit expanding",
                 IF(B8>0.25,"EARLY MARKUP / ACCUMULATION",
                 IF(B8>-0.25,"NEUTRAL - no edge, reduce activity",
                 IF(B8>-1,"DISTRIBUTION / EARLY MARKDOWN",
                 "MARKDOWN - forced selling likely"))))

13   ভিত্তি শেয়ার বণ্টন (%)          60
14   চক্র ঝোঁক (%)                   =B8*15
15   প্রস্তাবিত বণ্টন (%)             =MAX(20,MIN(90,B13+B14))
\`\`\`

**এই শিট সম্পর্কে তিনটি কথা।**

**B9 সাজসজ্জা নয়।** আপনার ওজনের যোগফল ঠিক ১.০০ না হলে সমন্বিত স্কোর B11-এর সীমাগুলোর চেয়ে ভিন্ন মাপে থাকে, আর পর্যায়ের লেবেলগুলো নীরবে ভুল হয়ে যায়। ওজন বদলানোর সময় প্রতিবার এটি যাচাই করুন।

**G কলামই শিটের প্রকৃত ফলাফল**, B8 নয়। সমন্বিত স্কোর একটি সারসংক্ষেপ; অবদানগুলো বলে আসলে কী এটি চালাচ্ছে। পদক্ষেপ নেওয়ার আগে মনে মনে G অবরোহী ক্রমে সাজান।

**B15 ইচ্ছাকৃতভাবে সীমাবদ্ধ।** MAX(20, MIN(90, …)) মানে মডেল কখনো শূন্য বা সবকিছু সুপারিশ করতে পারে না। ঐ সীমা তুলে দিলে প্রথম চরম পাঠটিই আপনাকে এমন কোণায় নেবে যেখান থেকে ফেরা যায় না।

মাসিকভাবে B2:B6 হালনাগাদ করুন। μ ও σ কলাম আপনার নিজস্ব চলমান ইতিহাস থেকে পুনর্গণনা করা উচিত — বছরে একবারই যথেষ্ট, এবং অন্তত পাঁচ বছর ব্যবহার করুন যাতে পরিমিত ব্যবধানগুলোর অর্থ থাকে।`,
    },

    python: {
      en: `\`\`\`python
"""
Chapter 7 — Composite market cycle scorecard for the DSE.
Educational. Weights and thresholds are illustrative and must be
re-estimated on your own history before any real use.
"""
from dataclasses import dataclass


@dataclass
class Indicator:
    """One cycle input, with its own historical mean and dispersion."""
    name: str
    current: float
    mean: float
    std: float
    weight: float
    invert: bool = False      # True when a LOW reading is favourable

    @property
    def z(self) -> float:
        if self.std == 0:
            return 0.0
        raw = (self.current - self.mean) / self.std
        return -raw if self.invert else raw

    @property
    def contribution(self) -> float:
        return self.z * self.weight


def composite(indicators: list[Indicator]) -> float:
    return sum(i.contribution for i in indicators)


def phase(score: float) -> str:
    if score > 1.0:
        return "MARKUP - broad participation, credit expanding"
    if score > 0.25:
        return "EARLY MARKUP / ACCUMULATION"
    if score > -0.25:
        return "NEUTRAL - no edge, reduce activity"
    if score > -1.0:
        return "DISTRIBUTION / EARLY MARKDOWN"
    return "MARKDOWN - forced selling likely"


def allocation(score: float, base: float = 60.0, k: float = 15.0,
               lo: float = 20.0, hi: float = 90.0) -> float:
    """Bounded so the model can never recommend a corner."""
    return max(lo, min(hi, base + k * score))


def velocity_inverted_u(current: float, healthy: float = 28.0,
                        std: float = 9.0) -> float:
    """
    Turnover velocity is bad at BOTH extremes (Chapter 1: >50% is churn,
    <15% is dormancy). Score distance from the healthy midpoint, not level.
    """
    return -abs((current - healthy) / std)


def report(indicators: list[Indicator], label: str) -> None:
    print(f"=== {label} ===")
    print(f"{'Indicator':<34}{'Cur':>8}{'z':>8}{'w':>7}{'contrib':>10}")
    print("-" * 67)
    for i in indicators:
        print(f"{i.name:<34}{i.current:>8.1f}{i.z:>8.2f}"
              f"{i.weight:>7.2f}{i.contribution:>10.3f}")
    c = composite(indicators)
    w = sum(i.weight for i in indicators)
    print("-" * 67)
    print(f"{'COMPOSITE':<34}{'':>8}{'':>8}{w:>7.2f}{c:>10.3f}")
    print(f"Phase      : {phase(c)}")
    print(f"Allocation : {allocation(c):.1f}%")
    print()


if __name__ == "__main__":
    current = [
        Indicator("Private sector credit growth", 13.5, 11.0, 3.0, 0.30),
        Indicator("Call money rate", 6.0, 7.5, 2.0, 0.20, invert=True),
        Indicator("Turnover velocity", 32.0, 28.0, 9.0, 0.20),
        Indicator("Breadth (20d net advances)", 34.0, 0.0, 60.0, 0.20),
        Indicator("Buffett Indicator", 14.4, 15.5, 3.2, 0.10, invert=True),
    ]
    report(current, "Current reading")

    # Sensitivity: what if credit growth reverts to its mean?
    reverted = [
        Indicator("Private sector credit growth", 11.0, 11.0, 3.0, 0.30),
        *current[1:],
    ]
    print(f"If credit growth reverts to mean -> composite "
          f"{composite(reverted):+.3f}, allocation {allocation(composite(reverted)):.1f}%")
    print()

    # Approximate December 2010, using the inverted-U for velocity
    dec2010 = [
        Indicator("Private sector credit growth", 24.0, 11.0, 3.0, 0.30),
        Indicator("Call money rate", 11.0, 7.5, 2.0, 0.20, invert=True),
        Indicator("Turnover velocity", 75.0, 28.0, 9.0, 0.20),
        Indicator("Breadth (20d net advances)", -48.0, 0.0, 60.0, 0.20),
        Indicator("Buffett Indicator", 21.0, 15.5, 3.2, 0.10, invert=True),
    ]
    report(dec2010, "Approx December 2010 - LINEAR velocity")

    print("Same month, velocity scored as an inverted-U instead:")
    print(f"  linear velocity z      : {(75.0-28.0)/9.0:+.2f}  (scores euphoria as GOOD)")
    print(f"  inverted-U velocity z  : {velocity_inverted_u(75.0):+.2f}  (scores it as BAD)")
\`\`\`

**Run this and look hard at the December 2010 block.** The composite prints **+1.663**, phase **MARKUP**, allocation **84.9%** — weeks before the crash. The naive scorecard does not merely fail to warn; it actively recommends near-maximum exposure at the top.

Two lines are doing the damage. Credit growth at $z = +4.33$ contributes $+1.300$, and velocity at $z = +5.22$ contributes $+1.044$. Together they are $+2.34$ against only $-0.68$ of combined warning from call money, breadth, and valuation. **The two most extreme readings in the table are both scored as maximally bullish, when both are in fact late-cycle warnings.**

The last two lines isolate the velocity error precisely: linear scoring gives **+5.22**, the inverted-U gives **−5.22**. Same input, opposite sign, purely from the assumed shape. Swap it and the composite falls to **−0.425** — distribution.

**Do not take the §7.10 sheet as a finished product.** It is a working demonstration that a plausible-looking framework, built with reasonable indicators and sensible weights, can be catastrophically wrong if the functional form of a single input is mis-specified. Fix the velocity shape and winsorise the z-scores at ±2 before you rely on anything like it.`,
      bn: `\`\`\`python
"""
অধ্যায় ৭ — ডিএসই-র জন্য সমন্বিত বাজার চক্র স্কোরকার্ড।
শিক্ষামূলক। ওজন ও সীমা দৃষ্টান্তমূলক এবং প্রকৃত ব্যবহারের আগে
নিজের ইতিহাসে পুনঃনির্ধারণ করতে হবে।
"""
from dataclasses import dataclass


@dataclass
class Indicator:
    """একটি চক্র উপাদান, নিজস্ব ঐতিহাসিক গড় ও বিস্তারসহ।"""
    name: str
    current: float
    mean: float
    std: float
    weight: float
    invert: bool = False      # কম পাঠ অনুকূল হলে True

    @property
    def z(self) -> float:
        if self.std == 0:
            return 0.0
        raw = (self.current - self.mean) / self.std
        return -raw if self.invert else raw

    @property
    def contribution(self) -> float:
        return self.z * self.weight


def composite(indicators: list[Indicator]) -> float:
    return sum(i.contribution for i in indicators)


def phase(score: float) -> str:
    if score > 1.0:
        return "MARKUP - broad participation, credit expanding"
    if score > 0.25:
        return "EARLY MARKUP / ACCUMULATION"
    if score > -0.25:
        return "NEUTRAL - no edge, reduce activity"
    if score > -1.0:
        return "DISTRIBUTION / EARLY MARKDOWN"
    return "MARKDOWN - forced selling likely"


def allocation(score: float, base: float = 60.0, k: float = 15.0,
               lo: float = 20.0, hi: float = 90.0) -> float:
    """সীমাবদ্ধ, যাতে মডেল কখনো কোণা সুপারিশ করতে না পারে।"""
    return max(lo, min(hi, base + k * score))


def velocity_inverted_u(current: float, healthy: float = 28.0,
                        std: float = 9.0) -> float:
    """
    টার্নওভার ভেলোসিটি দুই প্রান্তেই খারাপ (অধ্যায় ১: >৫০% মন্থন,
    <১৫% নিষ্ক্রিয়তা)। স্তর নয়, সুস্থ মধ্যবিন্দু থেকে দূরত্ব স্কোর করুন।
    """
    return -abs((current - healthy) / std)


def report(indicators: list[Indicator], label: str) -> None:
    print(f"=== {label} ===")
    print(f"{'Indicator':<34}{'Cur':>8}{'z':>8}{'w':>7}{'contrib':>10}")
    print("-" * 67)
    for i in indicators:
        print(f"{i.name:<34}{i.current:>8.1f}{i.z:>8.2f}"
              f"{i.weight:>7.2f}{i.contribution:>10.3f}")
    c = composite(indicators)
    w = sum(i.weight for i in indicators)
    print("-" * 67)
    print(f"{'COMPOSITE':<34}{'':>8}{'':>8}{w:>7.2f}{c:>10.3f}")
    print(f"Phase      : {phase(c)}")
    print(f"Allocation : {allocation(c):.1f}%")
    print()


if __name__ == "__main__":
    current = [
        Indicator("Private sector credit growth", 13.5, 11.0, 3.0, 0.30),
        Indicator("Call money rate", 6.0, 7.5, 2.0, 0.20, invert=True),
        Indicator("Turnover velocity", 32.0, 28.0, 9.0, 0.20),
        Indicator("Breadth (20d net advances)", 34.0, 0.0, 60.0, 0.20),
        Indicator("Buffett Indicator", 14.4, 15.5, 3.2, 0.10, invert=True),
    ]
    report(current, "Current reading")

    reverted = [
        Indicator("Private sector credit growth", 11.0, 11.0, 3.0, 0.30),
        *current[1:],
    ]
    print(f"If credit growth reverts to mean -> composite "
          f"{composite(reverted):+.3f}, allocation {allocation(composite(reverted)):.1f}%")
    print()

    dec2010 = [
        Indicator("Private sector credit growth", 24.0, 11.0, 3.0, 0.30),
        Indicator("Call money rate", 11.0, 7.5, 2.0, 0.20, invert=True),
        Indicator("Turnover velocity", 75.0, 28.0, 9.0, 0.20),
        Indicator("Breadth (20d net advances)", -48.0, 0.0, 60.0, 0.20),
        Indicator("Buffett Indicator", 21.0, 15.5, 3.2, 0.10, invert=True),
    ]
    report(dec2010, "Approx December 2010 - LINEAR velocity")

    print("Same month, velocity scored as an inverted-U instead:")
    print(f"  linear velocity z      : {(75.0-28.0)/9.0:+.2f}  (scores euphoria as GOOD)")
    print(f"  inverted-U velocity z  : {velocity_inverted_u(75.0):+.2f}  (scores it as BAD)")
\`\`\`

**এটি চালিয়ে ২০১০ সালের ডিসেম্বরের অংশটি দেখুন।** ভেলোসিটি সরল রৈখিক উপায়ে স্কোর করলেও — যা ফটকা মন্থনকে সক্রিয়ভাবে *পুরস্কৃত* করে — সমন্বিত স্কোর তবুও ঋণাত্মক আসে, কারণ কল মানি, ব্যাপ্তি ও মূল্যায়ন একে ছাপিয়ে যায়।

তারপর শেষ দুটি লাইন দেখুন। রৈখিক স্কোরিং ভেলোসিটিকে দেয় **+৫.২২**, ৭৫% মন্থন হারকে মডেলের সবচেয়ে তেজি সংকেত হিসেবে গণ্য করে। উল্টো-U দেয় **−৫.২২**। **একই উপাদান, বিপরীত চিহ্ন, কেবল আপনি কীভাবে মডেল করলেন তা থেকেই।**

এটিই এই অধ্যায়ের সৎ শিক্ষা: একটি সমন্বিত স্কোর ততটাই ভালো যতটা আপনি প্রতিটি উপাদানের জন্য যে আকৃতি ধরে নিয়েছেন, আর অরৈখিক নির্দেশকে রৈখিক অনুমান ঠিক শীর্ষে আত্মবিশ্বাসের সঙ্গে ভুল দিকে নির্দেশ করবে।`,
    },

    mistakes: {
      en: `1. **Getting an inversion sign wrong.** A high call money rate is unfavourable; a low Buffett Indicator is favourable. Flip one sign and the model is confidently backwards for years without ever looking broken. Label the direction of every indicator in the sheet.
2. **Reading the composite without its decomposition.** A score of +0.64 from five indicators at +0.6 is consensus; the same score from one at +2.5 and four at zero is a single indicator shouting. These demand different confidence.
3. **Scoring turnover velocity linearly.** Both extremes are bad. A linear model treats the 75% churn of December 2010 as the strongest bullish input in the framework — precisely inverted at precisely the top.
4. **Letting the model reach a corner.** An unbounded allocation rule will eventually recommend 0% or 100%. Bound it. The model will be wrong sometimes and you must survive those occasions.
5. **Treating the composite as a forecast.** It is a statement about current conditions relative to history, not about future prices. The moment it is used to predict, it has become astrology with arithmetic.
6. **Using lagging indicators as inputs.** Index level and trailing P/E describe what already happened. They belong in a report, not in a forward-looking score.
7. **Building the framework during a crisis.** A rule written while you are frightened will encode your fear. Write it while calm, then follow it when you are not.
8. **Re-fitting weights after every bad call.** Continuous re-optimisation against recent history guarantees you are always fighting the last cycle. Re-estimate μ and σ annually; leave the weights alone unless the reasoning changed.`,
      bn: `১. **উল্টানোর চিহ্ন ভুল করা।** উঁচু কল মানি রেট প্রতিকূল; নিচু বাফেট নির্দেশক অনুকূল। একটি চিহ্ন উল্টে দিন, মডেলটি বছরের পর বছর আত্মবিশ্বাসের সঙ্গে উল্টো চলবে অথচ কখনো ভাঙা মনে হবে না। শিটে প্রতিটি নির্দেশকের দিক লেবেল করুন।
২. **ভাঙচি ছাড়া সমন্বিত স্কোর পড়া।** পাঁচটি নির্দেশক +০.৬-এ থেকে +০.৬৪ হলো ঐকমত্য; একটি +২.৫ ও চারটি শূন্যে থেকে একই স্কোর একটি নির্দেশকের চিৎকার। এদের ভিন্ন মাত্রার আস্থা প্রাপ্য।
৩. **টার্নওভার ভেলোসিটি রৈখিকভাবে স্কোর করা।** দুই প্রান্তই খারাপ। রৈখিক মডেল ২০১০ সালের ডিসেম্বরের ৭৫% মন্থনকে কাঠামোর সবচেয়ে তেজি উপাদান গণ্য করে — ঠিক শীর্ষে ঠিক উল্টো।
৪. **মডেলকে কোণায় পৌঁছাতে দেওয়া।** সীমাহীন বণ্টন নিয়ম শেষ পর্যন্ত ০% বা ১০০% সুপারিশ করবে। সীমা দিন। মডেল কখনো ভুল হবেই এবং ঐ মুহূর্তগুলোতে আপনাকে টিকে থাকতে হবে।
৫. **সমন্বিত স্কোরকে পূর্বাভাস ভাবা।** এটি ইতিহাসের সাপেক্ষে বর্তমান পরিস্থিতি সম্পর্কে একটি বক্তব্য, ভবিষ্যৎ দাম সম্পর্কে নয়। যে মুহূর্তে এটি ভবিষ্যদ্বাণীতে ব্যবহৃত হয়, তা পাটিগণিতসহ জ্যোতিষচর্চা হয়ে যায়।
৬. **পশ্চাৎবর্তী নির্দেশককে উপাদান হিসেবে ব্যবহার।** সূচকের স্তর ও অতীত P/E যা ঘটে গেছে তা বর্ণনা করে। এদের জায়গা প্রতিবেদনে, অগ্রমুখী স্কোরে নয়।
৭. **সংকটের সময় কাঠামো তৈরি করা।** ভয় পাওয়া অবস্থায় লেখা নিয়ম আপনার ভয়কেই সংকেতবদ্ধ করবে। শান্ত থাকতে থাকতে লিখুন, তারপর অশান্ত অবস্থায় অনুসরণ করুন।
৮. **প্রতিটি ভুলের পর ওজন পুনর্নির্ধারণ।** সাম্প্রতিক ইতিহাসের বিপরীতে অবিরাম পুনঃঅনুকূলন নিশ্চিত করে যে আপনি সবসময় গত চক্রের সঙ্গে লড়ছেন। μ ও σ বছরে একবার পুনঃনির্ধারণ করুন; যুক্তি না বদলালে ওজন ছোঁবেন না।`,
    },

    tips: {
      en: `- **Write your framework down before you need it, and date it.** A rule written in a calm month is a different rule from one written in a panic. The written version is the one you follow.
- **Set a monthly calendar entry for the Bangladesh Bank release.** Update the sheet the same day. Thirty minutes a month is the entire maintenance cost of this framework.
- **Track the credit impulse, not just the level.** Credit growth of 24% that fell from 28% is decelerating — an early warning that the level alone hides. The second derivative leads the first.
- **Decompose before you act, every single time.** Sort the contributions. If one line is more than half the signal, your framework has temporarily become a single-indicator model and should be treated with correspondingly less confidence.
- **Fix the velocity shape when you build your own.** Use the inverted-U in §7.8. It is the difference between a model that warns you in December 2010 and one that cheers.
- **Respect the neutral band.** Most months the score sits near zero and the correct action is nothing. A framework that always generates activity is a commission-generating machine wearing the costume of a process.
- **Re-estimate μ and σ annually, not continuously.** Rolling five years minimum. Continuous re-fitting means your baseline chases the very conditions you are trying to measure against.
- **Keep a log of the score and what you did.** After two years you can check whether you actually followed your own framework. Most people discover they did not, which is more useful information than any refinement to the weights.`,
      bn: `- **প্রয়োজন হওয়ার আগেই কাঠামো লিখে ফেলুন, এবং তারিখ দিন।** শান্ত মাসে লেখা নিয়ম আর আতঙ্কে লেখা নিয়ম এক নয়। লিখিত সংস্করণটিই আপনি অনুসরণ করবেন।
- **বাংলাদেশ ব্যাংকের প্রকাশনার জন্য মাসিক ক্যালেন্ডার এন্ট্রি রাখুন।** একই দিনে শিট হালনাগাদ করুন। মাসে ত্রিশ মিনিটই এই কাঠামোর সম্পূর্ণ রক্ষণাবেক্ষণ খরচ।
- **কেবল স্তর নয়, ঋণ প্রেরণা অনুসরণ করুন।** ২৮% থেকে নেমে আসা ২৪% ঋণ প্রবৃদ্ধি মন্থর হচ্ছে — একটি আগাম সতর্কতা যা কেবল স্তর দেখলে লুকিয়ে থাকে। দ্বিতীয় অন্তরকলজ প্রথমটির আগে চলে।
- **প্রতিবারই পদক্ষেপের আগে ভেঙে দেখুন।** অবদানগুলো সাজান। একটি লাইন যদি সংকেতের অর্ধেকের বেশি হয়, আপনার কাঠামো সাময়িকভাবে একক-নির্দেশক মডেল হয়ে গেছে এবং সেই অনুপাতে কম আস্থার যোগ্য।
- **নিজেরটি তৈরির সময় ভেলোসিটির আকৃতি ঠিক করুন।** §৭.৮-এর উল্টো-U ব্যবহার করুন। ২০১০ সালের ডিসেম্বরে যে মডেল সতর্ক করে আর যেটি উল্লাস করে — পার্থক্য এটিই।
- **নিরপেক্ষ পরিসরকে সম্মান করুন।** বেশিরভাগ মাসে স্কোর শূন্যের কাছে থাকে আর সঠিক পদক্ষেপ হলো কিছুই না করা। যে কাঠামো সবসময় কার্যকলাপ তৈরি করে সেটি প্রক্রিয়ার পোশাক পরা একটি কমিশন-উৎপাদক যন্ত্র।
- **μ ও σ বছরে একবার পুনঃনির্ধারণ করুন, অবিরাম নয়।** ন্যূনতম চলমান পাঁচ বছর। অবিরাম পুনঃসন্নিবেশ মানে আপনার ভিত্তিরেখা ঠিক সেই পরিস্থিতির পেছনে ছুটছে যার বিপরীতে আপনি মাপতে চাইছেন।
- **স্কোর ও আপনি কী করলেন তার একটি লগ রাখুন।** দুই বছর পর যাচাই করতে পারবেন আপনি আদৌ নিজের কাঠামো অনুসরণ করেছেন কি না। বেশিরভাগ মানুষ আবিষ্কার করেন যে করেননি, যা ওজনের যেকোনো পরিমার্জনের চেয়ে বেশি কার্যকর তথ্য।`,
    },

    exercises: {
      en: `1. Download 60 months of private sector credit growth from bb.org.bd. Compute the mean and standard deviation. What is the current z-score?
2. For the same 60 months, compute the credit impulse (month-on-month change in the growth rate). Plot it against DSEX. Does the impulse lead the index, and by how many months?
3. Build the scorecard from §7.10 with your own μ and σ estimates. Compute today's composite and decompose it. Which single indicator dominates?
4. Re-run exercise 3 with the velocity term scored as an inverted-U instead of linearly. How much does the composite change? In which direction?
5. Reconstruct the five indicators for December 2010 as accurately as you can from published sources. Compute the composite. Would it have kept you out?
6. Do the same for one month during the 2020 floor-price period. What does the framework say when turnover has collapsed to near zero? Does your model handle that case, or does it break?
7. Change one weight by 0.05 and observe the effect on the composite and the suggested allocation. Is the framework robust to reasonable weight disagreement, or fragile?
8. Deliberately invert the sign on the call money rate. Run the model over the last three years. How long would it take you to notice the model was broken, if you were only reading the composite?
9. Write your own phase framework in three sentences, using at most four indicators. Justify every inclusion and every exclusion.`,
      bn: `১. bb.org.bd থেকে ৬০ মাসের বেসরকারি খাতে ঋণ প্রবৃদ্ধি ডাউনলোড করুন। গড় ও পরিমিত ব্যবধান গণনা করুন। বর্তমান জেড-স্কোর কত?
২. একই ৬০ মাসের জন্য ঋণ প্রেরণা (প্রবৃদ্ধি হারের মাসিক পরিবর্তন) গণনা করুন। DSEX-এর বিপরীতে প্লট করুন। প্রেরণা কি সূচকের আগে চলে, এবং কত মাস আগে?
৩. নিজের μ ও σ অনুমান দিয়ে §৭.১০-এর স্কোরকার্ড তৈরি করুন। আজকের সমন্বিত স্কোর গণনা করে ভেঙে দেখুন। কোন একক নির্দেশক প্রাধান্য পাচ্ছে?
৪. ভেলোসিটি পদটি রৈখিকের বদলে উল্টো-U হিসেবে স্কোর করে অনুশীলনী ৩ আবার চালান। সমন্বিত স্কোর কতটা বদলায়? কোন দিকে?
৫. প্রকাশিত উৎস থেকে যতটা নির্ভুলভাবে পারেন ২০১০ সালের ডিসেম্বরের পাঁচটি নির্দেশক পুনর্গঠন করুন। সমন্বিত স্কোর গণনা করুন। এটি কি আপনাকে দূরে রাখত?
৬. ২০২০ সালের ফ্লোর প্রাইস সময়কালের একটি মাসের জন্য একই কাজ করুন। লেনদেন প্রায় শূন্যে নেমে এলে কাঠামো কী বলে? আপনার মডেল কি এই ক্ষেত্রটি সামলায়, নাকি ভেঙে পড়ে?
৭. একটি ওজন ০.০৫ বদলে সমন্বিত স্কোর ও প্রস্তাবিত বণ্টনে প্রভাব লক্ষ করুন। যুক্তিসঙ্গত ওজন-মতভেদে কাঠামোটি কি দৃঢ়, নাকি ভঙ্গুর?
৮. ইচ্ছাকৃতভাবে কল মানি রেটের চিহ্ন উল্টে দিন। গত তিন বছরে মডেলটি চালান। কেবল সমন্বিত স্কোর পড়লে মডেলটি ভাঙা তা বুঝতে আপনার কত সময় লাগত?
৯. সর্বোচ্চ চারটি নির্দেশক ব্যবহার করে তিন বাক্যে নিজের পর্যায় কাঠামো লিখুন। প্রতিটি অন্তর্ভুক্তি ও প্রতিটি বর্জনের যৌক্তিকতা দিন।`,
    },

    summary: {
      en: `- Every market runs an **earnings cycle** and a **liquidity cycle**. On the DSE, where the listed market is ~15% of GDP, the liquidity cycle dominates in the short and medium term — which is why a good company can fall 60% with its business intact.
- Indicators rank as **leading** (private sector credit growth, call money rate, margin policy), **coincident** (breadth, turnover velocity), and **lagging** (index level, trailing P/E). Everyone quotes the lagging ones.
- No single indicator works. Combining them requires **z-scores**, $z = (x-\\mu)/\\sigma$, which restate every input in units of its own history — the same principle as Chapter 1's percentile framing of the Buffett Indicator.
- Indicators where a low reading is favourable must be **inverted**. A wrong sign produces a model that is confidently backwards for years without appearing broken.
- The composite $C = \\sum w_i z_i^{adj}$ maps to a **position size**, not a market call, and the mapping must be **bounded** so the model can never recommend 0% or 100%.
- **Always decompose.** A +0.64 built from five agreeing indicators is a different signal from a +0.64 driven by one extreme reading.
- **Turnover velocity is non-linear.** Scored linearly, the 75% churn of December 2010 registers as one of the model's most bullish inputs. Scored as an inverted-U about a healthy ~28%, it correctly registers as a warning. Same data, opposite sign, purely from the assumed shape.
- **The §7.10 scorecard, run on December 2010, returns +1.66 and recommends 85% equity — weeks before the crash.** Two errors cause it: velocity scored linearly, and an unwinsorised credit-growth z-score of +4.33. Correcting the velocity shape alone flips the composite to −0.43. **A composite inherits every assumption you make about the shape of its inputs.**
- **Discipline established:** write the framework down while calm and date it; update it monthly on the Bangladesh Bank release; decompose before acting; and respect the neutral band, because most of the time the correct action is to do nothing.`,
      bn: `- প্রতিটি বাজারে একটি **আয় চক্র** ও একটি **তারল্য চক্র** চলে। ডিএসই-তে, যেখানে তালিকাভুক্ত বাজার জিডিপির ~১৫%, স্বল্প ও মধ্যমেয়াদে তারল্য চক্র প্রাধান্য পায় — আর সে কারণেই ব্যবসা অক্ষত থাকা সত্ত্বেও একটি ভালো কোম্পানি ৬০% পড়তে পারে।
- নির্দেশকরা সাজে **অগ্রবর্তী** (বেসরকারি ঋণ প্রবৃদ্ধি, কল মানি রেট, মার্জিন নীতি), **সমকালীন** (ব্যাপ্তি, টার্নওভার ভেলোসিটি), ও **পশ্চাৎবর্তী** (সূচকের স্তর, অতীত P/E) হিসেবে। সবাই পশ্চাৎবর্তীগুলোই উদ্ধৃত করে।
- কোনো একক নির্দেশক কাজ করে না। এদের যুক্ত করতে **জেড-স্কোর** লাগে, $z = (x-\\mu)/\\sigma$, যা প্রতিটি উপাদানকে তার নিজস্ব ইতিহাসের এককে পুনর্লিখন করে — অধ্যায় ১-এর বাফেট নির্দেশকের পার্সেন্টাইল কাঠামোরই নীতি।
- যেসব নির্দেশকে কম পাঠ অনুকূল সেগুলো **উল্টাতে** হবে। ভুল চিহ্ন এমন একটি মডেল তৈরি করে যা বছরের পর বছর আত্মবিশ্বাসের সঙ্গে উল্টো চলে অথচ ভাঙা মনে হয় না।
- সমন্বিত স্কোর $C = \\sum w_i z_i^{adj}$ একটি **পজিশনের আকারে** রূপান্তরিত হয়, বাজার ভবিষ্যদ্বাণীতে নয়, এবং রূপান্তরটি **সীমাবদ্ধ** হতে হবে যাতে মডেল কখনো ০% বা ১০০% সুপারিশ করতে না পারে।
- **সবসময় ভেঙে দেখুন।** পাঁচটি একমত নির্দেশক থেকে তৈরি +০.৬৪ আর একটি চরম পাঠে চালিত +০.৬৪ ভিন্ন সংকেত।
- **টার্নওভার ভেলোসিটি অরৈখিক।** রৈখিকভাবে স্কোর করলে ২০১০ সালের ডিসেম্বরের ৭৫% মন্থন মডেলের অন্যতম তেজি উপাদান হিসেবে ধরা পড়ে। সুস্থ ~২৮%-কে কেন্দ্র করে উল্টো-U হিসেবে স্কোর করলে তা সঠিকভাবে সতর্কতা হিসেবে ধরা পড়ে। একই তথ্য, বিপরীত চিহ্ন, কেবল অনুমিত আকৃতি থেকেই।
- **§৭.১০-এর স্কোরকার্ড ২০১০ সালের ডিসেম্বরে চালালে +১.৬৬ দেয় এবং ৮৫% শেয়ার সুপারিশ করে — ধসের কয়েক সপ্তাহ আগে।** দুটি ভুল এর কারণ: ভেলোসিটি রৈখিকভাবে স্কোর করা, এবং +৪.৩৩-এর একটি অসীমাবদ্ধ ঋণ-প্রবৃদ্ধি জেড-স্কোর। কেবল ভেলোসিটির আকৃতি সংশোধন করলেই সমন্বিত স্কোর −০.৪৩-এ উল্টে যায়। **একটি সমন্বিত স্কোর তার উপাদানগুলোর আকৃতি সম্পর্কে আপনার করা প্রতিটি অনুমান উত্তরাধিকারসূত্রে পায়।**
- **প্রতিষ্ঠিত শৃঙ্খলা:** শান্ত থাকতে থাকতে কাঠামো লিখে তারিখ দিন; বাংলাদেশ ব্যাংকের প্রকাশনায় মাসিকভাবে হালনাগাদ করুন; পদক্ষেপের আগে ভেঙে দেখুন; এবং নিরপেক্ষ পরিসরকে সম্মান করুন, কারণ বেশিরভাগ সময় সঠিক পদক্ষেপ হলো কিছুই না করা।`,
    },
  },

  interview: [
    {
      q: {
        en: 'Why does the liquidity cycle dominate the earnings cycle on the DSE?',
        bn: 'ডিএসই-তে তারল্য চক্র কেন আয় চক্রকে ছাপিয়ে যায়?',
      },
      a: {
        en: 'Because the listed market is small relative to the economy — roughly 15% of GDP — and heavily concentrated. A modest shift in domestic credit conditions therefore represents a large flow relative to the market\'s size, enough to flood or drain it regardless of what corporate profits are doing. Square Pharmaceuticals in 2011 is the standing example: earnings were sound, but the money had left, and the price fell with everything else. In a deep market the two cycles converge; here they frequently diverge, and when they do, liquidity sets the price in the short and medium term.',
        bn: 'কারণ তালিকাভুক্ত বাজার অর্থনীতির তুলনায় ছোট — জিডিপির প্রায় ১৫% — এবং প্রবলভাবে কেন্দ্রীভূত। তাই অভ্যন্তরীণ ঋণ পরিস্থিতির সামান্য পরিবর্তনও বাজারের আকারের তুলনায় বড় প্রবাহ, যা কর্পোরেট মুনাফা যা-ই করুক একে ভাসিয়ে দিতে বা শুকিয়ে ফেলতে যথেষ্ট। ২০১১ সালের স্কয়ার ফার্মা স্থায়ী উদাহরণ: আয় সুদৃঢ় ছিল, কিন্তু টাকা চলে গিয়েছিল, আর দাম বাকি সবকিছুর সঙ্গে পড়েছিল। গভীর বাজারে দুটি চক্র মিলে যায়; এখানে প্রায়ই আলাদা হয়, আর তখন স্বল্প ও মধ্যমেয়াদে তারল্যই দাম নির্ধারণ করে।',
      },
    },
    {
      q: {
        en: 'Why use z-scores to build a composite rather than averaging the raw indicators?',
        bn: 'কাঁচা নির্দেশকের গড় না করে সমন্বিত স্কোর তৈরিতে জেড-স্কোর কেন ব্যবহার করবেন?',
      },
      a: {
        en: 'Because the inputs are in incompatible units and scales — credit growth is a percentage around 11, net advances is a count around zero, velocity is a percentage around 28. Averaging them directly is meaningless and would let whichever indicator has the largest numeric range dominate purely by accident of units. The z-score, (x − μ)/σ, restates each input as standard deviations from its own historical mean, which is unitless and comparable. It also embeds the principle established in Chapter 1: the raw level is noise, the position within the indicator\'s own history is signal.',
        bn: 'কারণ উপাদানগুলো অসঙ্গত একক ও মাপে — ঋণ প্রবৃদ্ধি ১১-এর আশপাশে একটি শতাংশ, নিট বৃদ্ধি শূন্যের আশপাশে একটি গণনা, ভেলোসিটি ২৮-এর আশপাশে একটি শতাংশ। এদের সরাসরি গড় করা অর্থহীন এবং যার সংখ্যাগত পরিসর সবচেয়ে বড় সেটিকে কেবল এককের দুর্ঘটনায় প্রাধান্য দিতে দেবে। জেড-স্কোর, (x − μ)/σ, প্রতিটি উপাদানকে তার নিজস্ব ঐতিহাসিক গড় থেকে পরিমিত ব্যবধান হিসেবে পুনর্লিখন করে, যা এককবিহীন ও তুলনীয়। এটি অধ্যায় ১-এ প্রতিষ্ঠিত নীতিও ধারণ করে: কাঁচা স্তর গোলমাল, নির্দেশকের নিজস্ব ইতিহাসে অবস্থানটিই সংকেত।',
      },
    },
    {
      q: {
        en: 'Your composite reads +0.64. What do you do, and what do you check first?',
        bn: 'আপনার সমন্বিত স্কোর +০.৬৪। আপনি কী করবেন, এবং প্রথমে কী যাচাই করবেন?',
      },
      a: {
        en: 'First I decompose it, before doing anything. A +0.64 built from five indicators all near +0.6 is a consensus reading and deserves normal confidence; the same +0.64 driven by one indicator at +2.5 with four near zero is a single indicator shouting and deserves much less. In the worked case credit growth alone contributes 39% of the signal, so the reading is substantially a bet on one Bangladesh Bank series. Given a genuine consensus, the action is a position-size decision, not a market call — tilt roughly 9-10 percentage points above the neutral equity weight, bounded, and continue as normal. It emphatically does not mean the index will rise.',
        bn: 'কিছু করার আগে প্রথমে আমি এটি ভেঙে দেখব। পাঁচটি নির্দেশক সবই ~+০.৬-এ থেকে তৈরি +০.৬৪ একটি ঐকমত্যের পাঠ এবং স্বাভাবিক আস্থার যোগ্য; একটি নির্দেশক +২.৫-এ ও চারটি শূন্যের কাছে থেকে তৈরি একই +০.৬৪ একটি নির্দেশকের চিৎকার এবং অনেক কম আস্থার যোগ্য। উদাহরণে কেবল ঋণ প্রবৃদ্ধিই সংকেতের ৩৯% অবদান রাখছে, তাই পাঠটি মূলত একটি বাংলাদেশ ব্যাংক সিরিজের ওপর বাজি। প্রকৃত ঐকমত্য থাকলে পদক্ষেপ হলো পজিশনের আকারের সিদ্ধান্ত, বাজার ভবিষ্যদ্বাণী নয় — নিরপেক্ষ শেয়ার ওজনের চেয়ে প্রায় ৯-১০ শতাংশ পয়েন্ট বেশি ঝোঁক, সীমাবদ্ধভাবে, এবং স্বাভাবিক কাজ চালিয়ে যাওয়া। এর অর্থ কোনোভাবেই এই নয় যে সূচক বাড়বে।',
      },
    },
    {
      q: {
        en: 'What is wrong with scoring turnover velocity linearly?',
        bn: 'টার্নওভার ভেলোসিটি রৈখিকভাবে স্কোর করায় সমস্যা কী?',
      },
      a: {
        en: 'Velocity is bad at both extremes, so its relationship to market health is an inverted-U, not a line. Below about 15% the market is dormant with no participation; above about 50% the turnover reflects speculative churn rather than investment. A linear score treats "higher is better" throughout, so the 75% churn rate of December 2010 registers as the single most bullish input in the model at precisely the top of a bubble. The fix is to score the absolute distance from a healthy midpoint of roughly 28% and negate it, so both extremes penalise the composite. It is a good illustration that a composite is only as sound as the functional shape assumed for each input.',
        bn: 'ভেলোসিটি দুই প্রান্তেই খারাপ, তাই বাজারের সুস্থতার সঙ্গে এর সম্পর্ক একটি উল্টো-U, রেখা নয়। প্রায় ১৫%-এর নিচে বাজার নিষ্ক্রিয়, কোনো অংশগ্রহণ নেই; প্রায় ৫০%-এর ওপরে লেনদেন বিনিয়োগ নয় ফটকা মন্থনের প্রতিফলন। রৈখিক স্কোর সর্বত্র "বেশি মানে ভালো" ধরে, তাই ২০১০ সালের ডিসেম্বরের ৭৫% মন্থন হার ঠিক বুদ্বুদের শীর্ষে মডেলের একক সবচেয়ে তেজি উপাদান হিসেবে ধরা পড়ে। সমাধান হলো প্রায় ২৮%-এর সুস্থ মধ্যবিন্দু থেকে পরম দূরত্ব স্কোর করে তা ঋণাত্মক করা, যাতে দুই প্রান্তই সমন্বিত স্কোরকে শাস্তি দেয়। এটি ভালোভাবে দেখায় যে সমন্বিত স্কোর ততটাই সুদৃঢ় যতটা প্রতিটি উপাদানের জন্য অনুমিত ফাংশনাল আকৃতি।',
      },
    },
    {
      q: {
        en: 'Why must the allocation rule be bounded?',
        bn: 'বণ্টনের নিয়ম কেন সীমাবদ্ধ হতে হবে?',
      },
      a: {
        en: 'Because the model will be wrong sometimes and you have to survive those occasions. An unbounded rule will eventually produce a 0% or 100% recommendation on an extreme reading, and extreme readings cluster precisely at turning points where indicators are most likely to be misleading or subject to revision. Bounding at, say, 20% and 90% means a wrong call costs you relative performance rather than solvency or the ability to participate in a recovery. It also enforces humility structurally rather than relying on the discipline of whoever is reading the score, which tends to be weakest exactly when the reading is most extreme.',
        bn: 'কারণ মডেল কখনো ভুল হবেই এবং ঐ মুহূর্তগুলোতে আপনাকে টিকে থাকতে হবে। সীমাহীন নিয়ম শেষ পর্যন্ত কোনো চরম পাঠে ০% বা ১০০% সুপারিশ দেবে, আর চরম পাঠ ঠিক সেই মোড় ঘোরার বিন্দুতেই জমা হয় যেখানে নির্দেশকরা সবচেয়ে বেশি বিভ্রান্তিকর বা সংশোধনসাপেক্ষ। ধরুন ২০% ও ৯০%-এ সীমা দিলে একটি ভুল সিদ্ধান্তের খরচ হয় আপেক্ষিক কর্মক্ষমতা, স্বচ্ছলতা বা পুনরুদ্ধারে অংশ নেওয়ার সক্ষমতা নয়। এটি বিনয়কে কাঠামোগতভাবে বাধ্যতামূলক করে, স্কোর পাঠকারীর শৃঙ্খলার ওপর নির্ভর না করে — যে শৃঙ্খলা ঠিক তখনই সবচেয়ে দুর্বল থাকে যখন পাঠটি সবচেয়ে চরম।',
      },
    },
  ],

  quiz: [
    {
      q: {
        en: 'On the DSE, which cycle dominates price in the short to medium term?',
        bn: 'ডিএসই-তে স্বল্প থেকে মধ্যমেয়াদে কোন চক্র দামে প্রাধান্য পায়?',
      },
      options: {
        en: ['The earnings cycle', 'The liquidity cycle', 'The political cycle', 'The dividend cycle'],
        bn: ['আয় চক্র', 'তারল্য চক্র', 'রাজনৈতিক চক্র', 'লভ্যাংশ চক্র'],
      },
      answer: 1,
    },
    {
      q: {
        en: 'Which of these is a LEADING indicator for DSE liquidity?',
        bn: 'এদের মধ্যে কোনটি ডিএসই তারল্যের অগ্রবর্তী নির্দেশক?',
      },
      options: {
        en: ['Index level', 'Trailing P/E', 'Private sector credit growth', 'IPO listings completed'],
        bn: ['সূচকের স্তর', 'অতীত P/E', 'বেসরকারি খাতে ঋণ প্রবৃদ্ধি', 'সম্পন্ন আইপিও তালিকাভুক্তি'],
      },
      answer: 2,
    },
    {
      q: { en: 'The z-score formula is:', bn: 'জেড-স্কোরের সূত্র:' },
      options: {
        en: ['(x − σ)/μ', '(x − μ)/σ', 'x/(μσ)', '(μ − x)/x'],
        bn: ['(x − σ)/μ', '(x − μ)/σ', 'x/(μσ)', '(μ − x)/x'],
      },
      answer: 1,
    },
    {
      q: {
        en: 'Which indicator should be INVERTED before entering the composite?',
        bn: 'সমন্বিত স্কোরে ঢোকানোর আগে কোন নির্দেশক উল্টাতে হবে?',
      },
      options: {
        en: ['Breadth', 'Credit growth', 'Call money rate', 'Turnover velocity'],
        bn: ['ব্যাপ্তি', 'ঋণ প্রবৃদ্ধি', 'কল মানি রেট', 'টার্নওভার ভেলোসিটি'],
      },
      answer: 2,
    },
    {
      q: {
        en: 'Credit growth 13.5, mean 11.0, std 3.0. Its z-score is approximately:',
        bn: 'ঋণ প্রবৃদ্ধি ১৩.৫, গড় ১১.০, σ ৩.০। এর জেড-স্কোর প্রায়:',
      },
      options: { en: ['+0.44', '+0.57', '+0.75', '+0.83'], bn: ['+০.৪৪', '+০.৫৭', '+০.৭৫', '+০.৮৩'] },
      answer: 3,
    },
    {
      q: {
        en: 'The correct output of a composite cycle score is:',
        bn: 'সমন্বিত চক্র স্কোরের সঠিক ফলাফল:',
      },
      options: {
        en: [
          'A forecast of the index level',
          'A position-sizing decision',
          'A list of stocks to buy',
          'An earnings estimate',
        ],
        bn: [
          'সূচকের স্তরের পূর্বাভাস',
          'পজিশনের আকারের সিদ্ধান্ত',
          'কেনার শেয়ারের তালিকা',
          'আয়ের অনুমান',
        ],
      },
      answer: 1,
    },
    {
      q: {
        en: 'Turnover velocity should be scored as:',
        bn: 'টার্নওভার ভেলোসিটি স্কোর করা উচিত:',
      },
      options: {
        en: ['Linear, higher is better', 'Linear, lower is better', 'An inverted-U about a healthy midpoint', 'It should be excluded'],
        bn: ['রৈখিক, বেশি মানে ভালো', 'রৈখিক, কম মানে ভালো', 'সুস্থ মধ্যবিন্দুকে কেন্দ্র করে উল্টো-U', 'এটি বাদ দেওয়া উচিত'],
      },
      answer: 2,
    },
    {
      q: {
        en: 'A composite of +0.64 driven almost entirely by one indicator should be treated with:',
        bn: 'প্রায় সম্পূর্ণ একটি নির্দেশকে চালিত +০.৬৪ সমন্বিত স্কোর গণ্য করা উচিত:',
      },
      options: {
        en: ['More confidence than a consensus reading', 'The same confidence', 'Less confidence', 'It cannot occur'],
        bn: ['ঐকমত্যের পাঠের চেয়ে বেশি আস্থায়', 'একই আস্থায়', 'কম আস্থায়', 'এটি ঘটতে পারে না'],
      },
      answer: 2,
    },
    {
      q: {
        en: 'The allocation rule is bounded (e.g. 20–90%) primarily to:',
        bn: 'বণ্টনের নিয়ম সীমাবদ্ধ (যেমন ২০–৯০%) রাখা হয় মূলত:',
      },
      options: {
        en: [
          'Reduce brokerage costs',
          'Ensure the model can never take you to a corner',
          'Comply with BSEC rules',
          'Improve the z-score accuracy',
        ],
        bn: [
          'ব্রোকারেজ খরচ কমাতে',
          'মডেল যাতে কখনো আপনাকে কোণায় নিতে না পারে তা নিশ্চিত করতে',
          'বিএসইসি বিধি মানতে',
          'জেড-স্কোরের নির্ভুলতা বাড়াতে',
        ],
      },
      answer: 1,
    },
    {
      q: {
        en: 'When the composite sits in the neutral band, the correct action is usually to:',
        bn: 'সমন্বিত স্কোর নিরপেক্ষ পরিসরে থাকলে সঠিক পদক্ষেপ সাধারণত:',
      },
      options: {
        en: ['Trade more actively', 'Do very little', 'Go fully invested', 'Exit entirely'],
        bn: ['আরও সক্রিয়ভাবে লেনদেন করা', 'খুব সামান্য কিছু করা', 'সম্পূর্ণ বিনিয়োগ করা', 'সম্পূর্ণ বেরিয়ে যাওয়া'],
      },
      answer: 1,
    },
  ],
};
