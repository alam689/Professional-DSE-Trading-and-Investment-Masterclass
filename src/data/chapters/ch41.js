/**
 * Chapter 41 — Fibonacci Retracement & Extension
 * Part III, Technical Analysis. Builds on Ch 30 (why support and resistance exist),
 * Ch 39 (ATR as a tolerance unit). Feeds Ch 42 (Dow Theory) and Ch 45 (confluence).
 */

export default {
  n: 41,
  tools: [],

  excelSheet: {
    filename: 'ch41-fibonacci-grid-confluence.xlsx',
    sheetName: 'Fib Grid',
    cells: [
      { cell: 'A1', v: '— Fibonacci Grid: Inputs —' },
      { cell: 'A2', v: 'Swing High' }, { cell: 'B2', v: 78 },
      { cell: 'A3', v: 'Swing Low' }, { cell: 'B3', v: 42 },
      { cell: 'A4', v: 'Range' }, { cell: 'B4', f: 'B2-B3' },
      { cell: 'A5', v: 'Current Price' }, { cell: 'B5', v: 56.4 },
      { cell: 'A6', v: 'ATR(14)' }, { cell: 'B6', v: 1.85 },
      { cell: 'A7', v: 'Direction (1=up-leg, -1=down-leg)' }, { cell: 'B7', v: 1 },

      { cell: 'A9', v: '— Retracement Levels —' },
      { cell: 'A10', v: 'Ratio' }, { cell: 'B10', v: 'Price' },
      { cell: 'C10', v: 'Dist from Price' }, { cell: 'D10', v: 'ATR Units' }, { cell: 'E10', v: 'Confluence' },

      { cell: 'A11', v: 0.236 },
      { cell: 'B11', f: 'IF($B$7=1,$B$2-$B$4*A11,$B$3+$B$4*A11)' },
      { cell: 'C11', f: 'B11-$B$5' }, { cell: 'D11', f: 'ABS(C11)/$B$6' },
      { cell: 'E11', f: 'IF(OR(ABS(B11-$B$25)<=$B$28,ABS(B11-$B$26)<=$B$28),"FLAG","")' },

      { cell: 'A12', v: 0.382 },
      { cell: 'B12', f: 'IF($B$7=1,$B$2-$B$4*A12,$B$3+$B$4*A12)' },
      { cell: 'C12', f: 'B12-$B$5' }, { cell: 'D12', f: 'ABS(C12)/$B$6' },
      { cell: 'E12', f: 'IF(OR(ABS(B12-$B$25)<=$B$28,ABS(B12-$B$26)<=$B$28),"FLAG","")' },

      { cell: 'A13', v: 0.5 },
      { cell: 'B13', f: 'IF($B$7=1,$B$2-$B$4*A13,$B$3+$B$4*A13)' },
      { cell: 'C13', f: 'B13-$B$5' }, { cell: 'D13', f: 'ABS(C13)/$B$6' },
      { cell: 'E13', f: 'IF(OR(ABS(B13-$B$25)<=$B$28,ABS(B13-$B$26)<=$B$28),"FLAG","")' },

      { cell: 'A14', v: 0.618 },
      { cell: 'B14', f: 'IF($B$7=1,$B$2-$B$4*A14,$B$3+$B$4*A14)' },
      { cell: 'C14', f: 'B14-$B$5' }, { cell: 'D14', f: 'ABS(C14)/$B$6' },
      { cell: 'E14', f: 'IF(OR(ABS(B14-$B$25)<=$B$28,ABS(B14-$B$26)<=$B$28),"FLAG","")' },

      { cell: 'A15', v: 0.786 },
      { cell: 'B15', f: 'IF($B$7=1,$B$2-$B$4*A15,$B$3+$B$4*A15)' },
      { cell: 'C15', f: 'B15-$B$5' }, { cell: 'D15', f: 'ABS(C15)/$B$6' },
      { cell: 'E15', f: 'IF(OR(ABS(B15-$B$25)<=$B$28,ABS(B15-$B$26)<=$B$28),"FLAG","")' },

      { cell: 'A17', v: '— Extension Targets —' },
      { cell: 'A18', v: 'Ratio' }, { cell: 'B18', v: 'Price' },
      { cell: 'C18', v: 'Dist from Price' }, { cell: 'D18', v: 'ATR Units' },

      { cell: 'A19', v: 1.272 },
      { cell: 'B19', f: 'IF($B$7=1,$B$3+$B$4*A19,$B$2-$B$4*A19)' },
      { cell: 'C19', f: 'B19-$B$5' }, { cell: 'D19', f: 'ABS(C19)/$B$6' },

      { cell: 'A20', v: 1.414 },
      { cell: 'B20', f: 'IF($B$7=1,$B$3+$B$4*A20,$B$2-$B$4*A20)' },
      { cell: 'C20', f: 'B20-$B$5' }, { cell: 'D20', f: 'ABS(C20)/$B$6' },

      { cell: 'A21', v: 1.618 },
      { cell: 'B21', f: 'IF($B$7=1,$B$3+$B$4*A21,$B$2-$B$4*A21)' },
      { cell: 'C21', f: 'B21-$B$5' }, { cell: 'D21', f: 'ABS(C21)/$B$6' },

      { cell: 'A22', v: 2.618 },
      { cell: 'B22', f: 'IF($B$7=1,$B$3+$B$4*A22,$B$2-$B$4*A22)' },
      { cell: 'C22', f: 'B22-$B$5' }, { cell: 'D22', f: 'ABS(C22)/$B$6' },

      { cell: 'A24', v: '— Confluence Panel —' },
      { cell: 'A25', v: 'Moving Average (50-day)' }, { cell: 'B25', v: 55.1 },
      { cell: 'A26', v: 'Prior Support / Resistance Zone' }, { cell: 'B26', v: 56 },
      { cell: 'A27', v: 'Tolerance (multiple of ATR)' }, { cell: 'B27', v: 0.5 },
      { cell: 'A28', v: 'Tolerance Band (BDT)' }, { cell: 'B28', f: 'B6*B27' },
      { cell: 'A29', v: 'Levels Flagged' }, { cell: 'B29', f: 'COUNTIF(E11:E15,"FLAG")' },

      { cell: 'A31', v: 'Nearest Level Price' }, { cell: 'B31', f: 'INDEX(B11:B15,MATCH(MIN(D11:D15),D11:D15,0))' },
      { cell: 'A32', v: 'Nearest Level Distance (ATR)' }, { cell: 'B32', f: 'MIN(D11:D15)' },

      { cell: 'A34', v: 'VERDICT' },
      {
        cell: 'B34',
        f: 'IF(B29=0,"No confluence - a Fibonacci level alone is not a trade",IF(B32<=0.5,"Confluence within 0.5 ATR of price - now demand a Ch28/34/40 trigger","Confluence exists but price is not there - set an alert, do not pre-position"))',
      },
    ],
  },

  objectives: {
    en: [
      'Derive the golden ratio from the Fibonacci sequence and show where 0.618, 0.382, 0.786 and 2.618 actually come from.',
      'State plainly that 0.500 is not a Fibonacci ratio, and explain what its inclusion reveals about how the toolkit was assembled.',
      'Argue the only defensible mechanism for why Fibonacci levels work — self-fulfilling coordination — and name the conditions under which it fails.',
      'Build a retracement and extension grid from a pre-committed swing rule, and measure how much the grid moves when the anchor moves.',
      'Apply the operational rule that a Fibonacci level is a location to look for a signal, never a signal in itself.',
    ],
    bn: [
      'ফিবোনাচ্চি ধারা থেকে সোনালি অনুপাত উদ্ভাবন করা এবং ০.৬১৮, ০.৩৮২, ০.৭৮৬ ও ২.৬১৮ আসলে কোথা থেকে আসে তা দেখানো।',
      'স্পষ্টভাবে বলা যে ০.৫০০ কোনো ফিবোনাচ্চি অনুপাত নয়, এবং এর অন্তর্ভুক্তি এই হাতিয়ারের সংকলন সম্পর্কে কী প্রকাশ করে তা ব্যাখ্যা করা।',
      'ফিবোনাচ্চি স্তর কেন কাজ করে তার একমাত্র সমর্থনযোগ্য কার্যকারণ — স্বয়ংপূরক সমন্বয় — যুক্তি দিয়ে দাঁড় করানো এবং কোন শর্তে তা ব্যর্থ হয় তা বলা।',
      'পূর্বনির্ধারিত সুইং নিয়ম থেকে রিট্রেসমেন্ট ও এক্সটেনশন গ্রিড তৈরি করা, এবং অ্যাংকর সরালে গ্রিড কতটা সরে তা পরিমাপ করা।',
      'এই পরিচালন নিয়ম প্রয়োগ করা যে ফিবোনাচ্চি স্তর সংকেত খোঁজার জায়গা, কখনোই নিজে সংকেত নয়।',
    ],
  },

  blocks: {
    theory: {
      en: `There is a large literature claiming that a ratio derived from a twelfth-century rabbit-breeding puzzle governs the price of equities. **That claim is false, and this chapter will say so before it teaches the tool.** It will then teach the tool properly, because you will encounter it on every trading platform, in every broker's research note, and in every conversation on the DSE floor, and refusing to understand something widely used is not scepticism — it is a handicap.

### The sequence and the ratio

The Fibonacci sequence is defined by $F_1 = F_2 = 1$ and $F_n = F_{n-1} + F_{n-2}$:

1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, …

Take the ratio of consecutive terms and watch it settle:

| Pair | Ratio |
|---|---|
| 3 / 2 | 1.5000 |
| 5 / 3 | 1.6667 |
| 8 / 5 | 1.6000 |
| 13 / 8 | 1.6250 |
| 21 / 13 | 1.61538 |
| 55 / 34 | 1.61765 |
| 144 / 89 | 1.617978 |
| 233 / 144 | 1.618056 |

The limit is the **golden ratio** $\\varphi$. It is not mystical; it is the positive root of a quadratic. If the ratio converges to some $x$, then dividing $F_n = F_{n-1} + F_{n-2}$ through by $F_{n-1}$ gives $x = 1 + 1/x$, hence:

$$x^2 - x - 1 = 0 \\quad \\Rightarrow \\quad \\varphi = \\frac{1 + \\sqrt{5}}{2} \\approx 1.6180339887$$

Everything on a Fibonacci toolbar is a power or root of that one number:

- $0.618 = 1/\\varphi$
- $0.382 = 1/\\varphi^2$ (and note $0.382 = 1 - 0.618$, which is why the pair looks symmetric)
- $0.236 = 1/\\varphi^3$
- $0.786 = \\sqrt{0.618}$
- $1.272 = \\sqrt{1.618}$
- $2.618 = \\varphi^2$
- $1.414 = \\sqrt{2}$ — **which has nothing to do with Fibonacci at all**

### The 0.500 problem

**0.500 is not a Fibonacci ratio.** It is not a limit of consecutive terms, not a power of $\\varphi$, not a root of one. It appears on the toolbar because Dow Theory — the subject of Chapter 42 — observed a century ago that corrections frequently retrace about half of the prior move, and because a half is a natural number for a human being to reach for.

Nor is 1.414 Fibonacci. It is $\\sqrt{2}$, borrowed from a different geometric tradition.

**Take this seriously, because it tells you what kind of object you are holding.** The Fibonacci toolbar is not a mathematical structure discovered in market data. It is a *collection of round-ish fractions* that practitioners found useful, with a mathematical derivation attached afterwards to some of them and not others. Once you see that the set is assembled rather than derived, the correct posture towards it becomes obvious.

### The honest verdict on mechanism

Here is the position this book takes, stated without hedging.

**There is no established mechanism by which a ratio from a rabbit-population recurrence governs equity prices.** No causal chain has ever been demonstrated from $\\varphi$ to the willingness of a Dhaka investor to sell at 55.75 rather than 55.60. Appeals to sunflower spirals, nautilus shells, and the Parthenon are not evidence about order books; most of them do not survive careful measurement even in their own domains.

**What is defensible is much narrower and much more useful: Fibonacci levels function as a coordination device.**

Chapter 30 established why support and resistance exist at all — not because a price is magic, but because *resting orders sit there*. A price level acquires meaning when a large quantity of limit orders, stop orders, and prior-buyer memory accumulates at it. Now observe: tens of thousands of participants run the same tool, on the same charting software, with the same default ratios, on the same well-known swing. They compute the same numbers. They place orders at those numbers.

**The level then has real inventory sitting on it — and it behaves like support because it *is* support, in exactly the sense Chapter 30 defined.** The prophecy is self-fulfilling, and a self-fulfilling prophecy in a market with real order flow is a real, tradable effect.

Notice what this reframing does. It replaces an unfalsifiable claim about universal harmony with a testable one about participant behaviour — and testable claims come with conditions under which they fail. That is the whole value of stating the mechanism honestly.

### Swing selection: the single largest source of variation

Ask five analysts to draw a Fibonacci grid on the same chart and you will typically get five different grids, because each chooses a different swing high and swing low. The ratios are fixed; **the anchors are not, and the anchors are where all the discretion lives.**

This is not a small effect. In the worked example of §41.3, moving the swing low by BDT 2.80 — one plausible alternative pivot — shifts the 61.8% level by BDT 1.73, which is **0.94 ATR**. An entire unit of daily volatility, produced purely by a drawing choice.

The remedy is not to find the "correct" swing. There isn't one. **The remedy is to pre-commit to a mechanical rule and apply it identically every time**, so that your levels are at least reproducible by you tomorrow and by a colleague reading your note. A serviceable rule:

> Anchor to the most recent completed impulse leg on the working timeframe — the last swing low to swing high (or high to low) where both endpoints are pivots unbroken for at least *k* bars on either side.

Any rule with those properties will do. What will not do is choosing the swing that makes the grid land where you already wanted to buy. **That is not analysis; it is drawing a line around a decision you have already made.**

### Reading the depth of a retracement

The levels themselves carry information about trend strength:

| Retracement | Ratio | What it suggests |
|---|---|---|
| Shallow | 0.236 / 0.382 | Strong trend. Buyers absorbed the pullback quickly; little supply overhead. |
| Moderate | 0.500 | Ordinary correction. Neutral information. |
| Deep | 0.618 | Trend intact but contested. The classic "last defensible line". |
| Very deep | 0.786 | Fragile. Beyond this the prior move is largely undone and the trend label is in question. |

A move that retraces beyond 0.786 and keeps going has, for practical purposes, failed. Some traders treat a full retracement as trend termination; that is a reasonable convention, not a law.

### Extensions, clusters, and time

**Extensions** project beyond the swing for targets: 1.272, 1.414, 1.618 and 2.618 of the impulse range, measured from the swing origin. They are used to set profit objectives, and they are subject to exactly the same anchoring problem — with the additional weakness that a 2.618 extension sits so far from current price that any error in the anchor is magnified enormously.

**Clusters (confluence)** occur where levels computed from *different* swings land in the same narrow band. The argument for clusters is coherent under the coordination mechanism: if two populations of analysts, anchoring to two different swings, both arrive near BDT 55.7, then orders from both populations rest there and the level carries more inventory than either would alone. **Clusters are the strongest form of the Fibonacci argument** — and they are the direct forerunner of Chapter 45's confluence framework.

**Time-based Fibonacci** — projecting turning points forward by 8, 13, 21, 34 bars — is the weakest variant in the family and should be treated as a curiosity. Price levels at least have a coordination story, because orders rest at prices. Nothing rests at a *date*. Mention it so you recognise it; do not build on it.

### The operational rule

This is the sentence to carry out of the chapter.

**A Fibonacci level is never a signal. It is a location where you go and look for a signal.**

A 61.8% retracement that coincides with the 50-day moving average, a prior support zone from Chapter 30, and a bullish engulfing candle on expanded volume from Chapters 28 and 40 is a trade with four independent reasons behind it. A 61.8% retracement on its own is a line on a screen that a piece of software drew for you. **The line did not consult the order book. You have to.**

### What breaks on the DSE

The coordination mechanism has a precondition: **a large, dispersed participant base, independently running the same tool.** That precondition is a great deal weaker here than the textbooks assume.

- **Thin counters have concentrated ownership.** When a handful of accounts can move a stock through the day's range, the marginal order at a computed level is not a wall of dispersed retail limits — it is whatever one or two participants decide. The self-fulfilling effect is correspondingly weak.
- **The effect is strongest on the heavily-watched large caps** — the names carried on every broker screen and discussed in every group. There, thousands of participants genuinely do compute the same numbers. That is where the coordination story has some claim on your attention, and nowhere else.
- **Floor-price-era data must be excluded from swing selection.** During the floor regime, prices at the floor were not clearing prices — they were an administrative boundary. A "swing low" that is really a floor is not a pivot in any behavioural sense, and a grid anchored to one is anchored to a regulation.
- **Record-date gaps distort the endpoints.** A share going ex-dividend or ex-bonus gaps down for reasons unrelated to supply and demand. Anchoring a swing high to a pre-record-date price and a swing low to a post-adjustment price measures a range that no participant ever traded through. Use adjusted series, and if you cannot, do not anchor across a record date.
- **Circuit breakers truncate the pivots.** A move halted by the limit did not end because sellers were exhausted; it ended because the exchange stopped it. The high it printed is an artefact of the rule, not a behavioural extreme.

**Put those together and the honest DSE position is this:** on the twenty or thirty most liquid names, on clean post-floor data, with the grid used as a location filter rather than a signal, Fibonacci is a reasonable component of a confluence process. On an illiquid counter, it is decoration.`,
      bn: `একটি বিশাল সাহিত্য দাবি করে যে দ্বাদশ শতকের খরগোশ-প্রজনন ধাঁধা থেকে পাওয়া একটি অনুপাত শেয়ারের দাম নিয়ন্ত্রণ করে। **ঐ দাবিটি মিথ্যা, এবং এই অধ্যায় হাতিয়ারটি শেখানোর আগেই তা বলে দেবে।** তারপর এটি হাতিয়ারটি ঠিকভাবে শেখাবে, কারণ আপনি এটি প্রতিটি ট্রেডিং প্ল্যাটফর্মে, প্রতিটি ব্রোকারের গবেষণা নোটে, আর ডিএসই-র প্রতিটি আলোচনায় পাবেন — আর ব্যাপকভাবে ব্যবহৃত কিছু বুঝতে অস্বীকার করা সংশয়বাদ নয়, প্রতিবন্ধকতা।

### ধারা ও অনুপাত

ফিবোনাচ্চি ধারা সংজ্ঞায়িত হয় $F_1 = F_2 = 1$ এবং $F_n = F_{n-1} + F_{n-2}$ দিয়ে:

১, ১, ২, ৩, ৫, ৮, ১৩, ২১, ৩৪, ৫৫, ৮৯, ১৪৪, ২৩৩, …

পরপর দুটি পদের অনুপাত নিন এবং দেখুন তা কোথায় থিতু হয়:

| জোড়া | অনুপাত |
|---|---|
| ৩ / ২ | ১.৫০০০ |
| ৫ / ৩ | ১.৬৬৬৭ |
| ৮ / ৫ | ১.৬০০০ |
| ১৩ / ৮ | ১.৬২৫০ |
| ২১ / ১৩ | ১.৬১৫৩৮ |
| ৫৫ / ৩৪ | ১.৬১৭৬৫ |
| ১৪৪ / ৮৯ | ১.৬১৭৯৭৮ |
| ২৩৩ / ১৪৪ | ১.৬১৮০৫৬ |

সীমাটি হলো **সোনালি অনুপাত** $\\varphi$। এটি রহস্যময় কিছু নয়; এটি একটি দ্বিঘাত সমীকরণের ধনাত্মক মূল। অনুপাত যদি কোনো $x$-এ অভিসারী হয়, তবে $F_n = F_{n-1} + F_{n-2}$-কে $F_{n-1}$ দিয়ে ভাগ করলে পাওয়া যায় $x = 1 + 1/x$, অর্থাৎ:

$$x^2 - x - 1 = 0 \\quad \\Rightarrow \\quad \\varphi = \\frac{1 + \\sqrt{5}}{2} \\approx 1.6180339887$$

ফিবোনাচ্চি টুলবারের সবকিছুই ঐ একটি সংখ্যার ঘাত বা মূল:

- $0.618 = 1/\\varphi$
- $0.382 = 1/\\varphi^2$ (আর লক্ষ করুন $0.382 = 1 - 0.618$, এ কারণেই জোড়াটি প্রতিসম দেখায়)
- $0.236 = 1/\\varphi^3$
- $0.786 = \\sqrt{0.618}$
- $1.272 = \\sqrt{1.618}$
- $2.618 = \\varphi^2$
- $1.414 = \\sqrt{2}$ — **যার সঙ্গে ফিবোনাচ্চির কোনোই সম্পর্ক নেই**

### ০.৫০০-এর সমস্যা

**০.৫০০ কোনো ফিবোনাচ্চি অনুপাত নয়।** এটি পরপর পদের সীমা নয়, $\\varphi$-এর ঘাত নয়, কোনো মূলও নয়। এটি টুলবারে আছে কারণ ডাও থিওরি — অধ্যায় ৪২-এর বিষয় — একশো বছর আগে লক্ষ করেছিল যে সংশোধন প্রায়ই আগের চলনের অর্ধেক ফিরিয়ে দেয়, আর কারণ অর্ধেক মানুষের হাত বাড়িয়ে ধরার মতো স্বাভাবিক একটি সংখ্যা।

১.৪১৪-ও ফিবোনাচ্চি নয়। এটি $\\sqrt{2}$, ভিন্ন এক জ্যামিতিক ঐতিহ্য থেকে ধার করা।

**এটিকে গুরুত্ব দিন, কারণ এটি বলে দেয় আপনি কী ধরনের বস্তু ধরে আছেন।** ফিবোনাচ্চি টুলবার বাজারের উপাত্তে আবিষ্কৃত কোনো গাণিতিক কাঠামো নয়। এটি *প্রায়-গোল ভগ্নাংশের একটি সংগ্রহ* যা ব্যবহারকারীরা কাজে লাগে বলে পেয়েছিলেন, আর পরে কয়েকটির সঙ্গে গাণিতিক উদ্ভব জুড়ে দেওয়া হয়েছে, বাকিগুলোর সঙ্গে নয়। সেটটি উদ্ভাবিত নয় বরং সংকলিত — এটি একবার দেখলে এর প্রতি সঠিক অবস্থানটি স্পষ্ট হয়ে যায়।

### কার্যকারণ সম্পর্কে সৎ রায়

এই বই যে অবস্থান নেয় তা রাখঢাক ছাড়া বলা হলো।

**খরগোশ-জনসংখ্যার পুনরাবৃত্তি থেকে পাওয়া একটি অনুপাত কীভাবে শেয়ারের দাম নিয়ন্ত্রণ করে তার কোনো প্রতিষ্ঠিত কার্যকারণ নেই।** $\\varphi$ থেকে ঢাকার একজন বিনিয়োগকারীর ৫৫.৬০-এর বদলে ৫৫.৭৫-এ বিক্রি করার ইচ্ছা পর্যন্ত কোনো কার্যকারণ শৃঙ্খল কখনো প্রদর্শিত হয়নি। সূর্যমুখীর সর্পিল, শামুকের খোল আর পার্থেননের দোহাই অর্ডার বুক সম্পর্কে প্রমাণ নয়; এদের বেশিরভাগ নিজেদের ক্ষেত্রেও সতর্ক পরিমাপে টেকে না।

**যা সমর্থনযোগ্য তা অনেক সংকীর্ণ এবং অনেক বেশি কাজের: ফিবোনাচ্চি স্তর একটি সমন্বয় ব্যবস্থা হিসেবে কাজ করে।**

অধ্যায় ৩০ প্রতিষ্ঠা করেছে সাপোর্ট ও রেজিস্ট্যান্স আদৌ কেন থাকে — কোনো দাম জাদুকরী বলে নয়, বরং *সেখানে অপেক্ষমাণ অর্ডার বসে থাকে* বলে। একটি দামের স্তর অর্থবহ হয় যখন সেখানে বিপুল পরিমাণ লিমিট অর্ডার, স্টপ অর্ডার ও আগের ক্রেতাদের স্মৃতি জমা হয়। এবার লক্ষ করুন: হাজার হাজার অংশগ্রহণকারী একই হাতিয়ার চালান, একই চার্টিং সফটওয়্যারে, একই ডিফল্ট অনুপাতে, একই সুপরিচিত সুইংয়ে। তাঁরা একই সংখ্যা গণনা করেন। তাঁরা ঐ সংখ্যাগুলোতে অর্ডার বসান।

**তখন স্তরটিতে সত্যিকারের ইনভেন্টরি বসে থাকে — আর এটি সাপোর্টের মতো আচরণ করে কারণ অধ্যায় ৩০ যে অর্থে সংজ্ঞা দিয়েছে ঠিক সেই অর্থে এটি সাপোর্টই।** ভবিষ্যদ্বাণীটি স্বয়ংপূরক, আর প্রকৃত অর্ডার প্রবাহের বাজারে একটি স্বয়ংপূরক ভবিষ্যদ্বাণী একটি বাস্তব, লেনদেনযোগ্য প্রভাব।

লক্ষ করুন এই পুনর্গঠন কী করে। এটি সর্বজনীন সাদৃশ্য সম্পর্কে একটি অখণ্ডনযোগ্য দাবিকে অংশগ্রহণকারীর আচরণ সম্পর্কে একটি পরীক্ষণযোগ্য দাবিতে বদলে দেয় — আর পরীক্ষণযোগ্য দাবির সঙ্গে আসে সেই শর্তগুলো যেখানে তা ব্যর্থ হয়। কার্যকারণ সৎভাবে বলার পুরো মূল্য এটাই।

### সুইং নির্বাচন: বৈচিত্র্যের একক বৃহত্তম উৎস

পাঁচজন বিশ্লেষককে একই চার্টে ফিবোনাচ্চি গ্রিড আঁকতে বলুন, সাধারণত পাঁচটি ভিন্ন গ্রিড পাবেন, কারণ প্রত্যেকে ভিন্ন সুইং হাই ও সুইং লো বাছেন। অনুপাতগুলো নির্দিষ্ট; **অ্যাংকরগুলো নয়, আর সমস্ত বিচারবুদ্ধি ঐ অ্যাংকরেই থাকে।**

এটি ছোট প্রভাব নয়। §৪১.৩-এর উদাহরণে সুইং লো ২.৮০ টাকা সরালে — একটি যুক্তিসঙ্গত বিকল্প পিভট — ৬১.৮% স্তর সরে যায় ১.৭৩ টাকা, যা **০.৯৪ ATR**। কেবল একটি আঁকার সিদ্ধান্তে দৈনিক অস্থিরতার পুরো এক একক।

সমাধান "সঠিক" সুইং খুঁজে বের করা নয়। সেটি বলে কিছু নেই। **সমাধান হলো একটি যান্ত্রিক নিয়মে আগেভাগে প্রতিশ্রুতিবদ্ধ হওয়া এবং প্রতিবার অভিন্নভাবে তা প্রয়োগ করা**, যাতে আপনার স্তরগুলো অন্তত আগামীকাল আপনার দ্বারা আর আপনার নোট পড়া সহকর্মীর দ্বারা পুনরুৎপাদনযোগ্য হয়। একটি চলনসই নিয়ম:

> কর্মক্ষম টাইমফ্রেমে সবচেয়ে সাম্প্রতিক সম্পূর্ণ ইমপালস লেগে অ্যাংকর করুন — শেষ সুইং লো থেকে সুইং হাই (বা হাই থেকে লো) যেখানে দুই প্রান্তই কমপক্ষে *k* বার দুই পাশে অভগ্ন পিভট।

এই বৈশিষ্ট্যের যেকোনো নিয়ম চলবে। যা চলবে না তা হলো এমন সুইং বাছা যা গ্রিডকে ঠিক সেখানে নামায় যেখানে আপনি আগে থেকেই কিনতে চেয়েছিলেন। **সেটি বিশ্লেষণ নয়; সেটি আগেই নেওয়া একটি সিদ্ধান্তের চারপাশে দাগ টানা।**

### রিট্রেসমেন্টের গভীরতা পড়া

স্তরগুলো নিজেই প্রবণতার শক্তি সম্পর্কে তথ্য বহন করে:

| রিট্রেসমেন্ট | অনুপাত | কী নির্দেশ করে |
|---|---|---|
| অগভীর | ০.২৩৬ / ০.৩৮২ | শক্তিশালী প্রবণতা। ক্রেতারা দ্রুত পুলব্যাক শুষে নিয়েছে; ওপরে সরবরাহ কম। |
| মাঝারি | ০.৫০০ | সাধারণ সংশোধন। নিরপেক্ষ তথ্য। |
| গভীর | ০.৬১৮ | প্রবণতা অটুট কিন্তু বিতর্কিত। ধ্রুপদী "শেষ রক্ষণযোগ্য রেখা"। |
| অতি গভীর | ০.৭৮৬ | ভঙ্গুর। এর পরে আগের চলন প্রায় পুরোটাই মুছে যায় এবং প্রবণতার নামকরণই প্রশ্নবিদ্ধ। |

০.৭৮৬ ছাড়িয়ে গিয়ে যে চলন চলতেই থাকে, তা ব্যবহারিক অর্থে ব্যর্থ হয়েছে। কেউ কেউ পূর্ণ রিট্রেসমেন্টকে প্রবণতার সমাপ্তি ধরেন; সেটি একটি যুক্তিসঙ্গত রীতি, কোনো সূত্র নয়।

### এক্সটেনশন, ক্লাস্টার ও সময়

**এক্সটেনশন** লক্ষ্যমাত্রার জন্য সুইংয়ের বাইরে প্রক্ষেপণ করে: ইমপালস রেঞ্জের ১.২৭২, ১.৪১৪, ১.৬১৮ ও ২.৬১৮ গুণ, সুইংয়ের উৎস থেকে মাপা। এগুলো মুনাফার লক্ষ্য নির্ধারণে ব্যবহৃত হয়, আর ঠিক একই অ্যাংকরিং সমস্যার অধীন — অতিরিক্ত দুর্বলতা হলো ২.৬১৮ এক্সটেনশন বর্তমান দাম থেকে এত দূরে বসে যে অ্যাংকরের যেকোনো ত্রুটি বিপুলভাবে বিবর্ধিত হয়।

**ক্লাস্টার (কনফ্লুয়েন্স)** ঘটে যখন *ভিন্ন ভিন্ন* সুইং থেকে গণিত স্তরগুলো একই সংকীর্ণ ব্যান্ডে পড়ে। সমন্বয় কার্যকারণের অধীনে ক্লাস্টারের যুক্তি সুসংহত: দুটি ভিন্ন সুইংয়ে অ্যাংকর করা দুই দল বিশ্লেষক যদি দুজনেই ৫৫.৭ টাকার কাছে পৌঁছান, তবে দুই দলেরই অর্ডার সেখানে বসে আর স্তরটি এককভাবে যা বহন করত তার চেয়ে বেশি ইনভেন্টরি বহন করে। **ক্লাস্টারই ফিবোনাচ্চি যুক্তির সবচেয়ে শক্তিশালী রূপ** — আর এগুলোই অধ্যায় ৪৫-এর কনফ্লুয়েন্স কাঠামোর সরাসরি পূর্বসূরি।

**সময়ভিত্তিক ফিবোনাচ্চি** — ৮, ১৩, ২১, ৩৪ বার এগিয়ে মোড়বিন্দু প্রক্ষেপণ — পরিবারের দুর্বলতম রূপ এবং একে কৌতূহল হিসেবেই দেখা উচিত। দামের স্তরের অন্তত একটি সমন্বয়ের গল্প আছে, কারণ অর্ডার দামে বসে। *তারিখে* কিছুই বসে না। চিনে রাখার জন্য উল্লেখ করুন; এর ওপর কিছু গড়বেন না।

### পরিচালন নিয়ম

অধ্যায় থেকে এই বাক্যটি বয়ে নিয়ে যাবেন।

**ফিবোনাচ্চি স্তর কখনো সংকেত নয়। এটি এমন একটি জায়গা যেখানে আপনি সংকেত খুঁজতে যান।**

৬১.৮% রিট্রেসমেন্ট যা ৫০-দিনের মুভিং অ্যাভারেজ, অধ্যায় ৩০-এর আগের সাপোর্ট জোন, এবং অধ্যায় ২৮ ও ৪০-এর বর্ধিত ভলিউমে বুলিশ এনগালফিং ক্যান্ডেলের সঙ্গে মেলে — সেটি চারটি স্বাধীন কারণসহ একটি ট্রেড। একা ৬১.৮% রিট্রেসমেন্ট পর্দায় একটি রেখা যা একটি সফটওয়্যার আপনার জন্য এঁকে দিয়েছে। **রেখাটি অর্ডার বুক দেখে আসেনি। আপনাকে দেখতে হবে।**

### ডিএসই-তে কী ভাঙে

সমন্বয় কার্যকারণের একটি পূর্বশর্ত আছে: **একটি বড়, বিক্ষিপ্ত অংশগ্রহণকারী ভিত্তি, যারা স্বাধীনভাবে একই হাতিয়ার চালায়।** পাঠ্যবই যা ধরে নেয়, এখানে ঐ পূর্বশর্ত তার চেয়ে অনেক দুর্বল।

- **পাতলা কাউন্টারে মালিকানা কেন্দ্রীভূত।** যখন গুটিকয় অ্যাকাউন্ট দিনের পুরো রেঞ্জজুড়ে একটি শেয়ার নাড়াতে পারে, গণিত স্তরে প্রান্তিক অর্ডারটি বিক্ষিপ্ত খুচরা লিমিটের দেয়াল নয় — এটি এক-দুজন অংশগ্রহণকারী যা ঠিক করেন তা-ই। স্বয়ংপূরক প্রভাব সেই অনুপাতে দুর্বল।
- **প্রভাবটি সবচেয়ে বেশি নজরে থাকা বড় মূলধনী শেয়ারে সবচেয়ে শক্তিশালী** — যেসব নাম প্রতিটি ব্রোকারের পর্দায় থাকে ও প্রতিটি গ্রুপে আলোচিত হয়। সেখানে হাজার হাজার অংশগ্রহণকারী সত্যিই একই সংখ্যা গণনা করেন। সমন্বয়ের গল্পটি কেবল সেখানেই আপনার মনোযোগ দাবি করতে পারে, অন্য কোথাও নয়।
- **ফ্লোর-প্রাইস যুগের উপাত্ত সুইং নির্বাচন থেকে বাদ দিতে হবে।** ফ্লোর ব্যবস্থার সময় ফ্লোরে থাকা দাম নিষ্পত্তির দাম ছিল না — ছিল একটি প্রশাসনিক সীমা। যে "সুইং লো" আসলে একটি ফ্লোর তা আচরণগত অর্থে পিভটই নয়, আর তাতে অ্যাংকর করা গ্রিড একটি বিধিতে অ্যাংকর করা।
- **রেকর্ড-ডেট গ্যাপ প্রান্তবিন্দু বিকৃত করে।** এক্স-ডিভিডেন্ড বা এক্স-বোনাস হওয়া শেয়ার এমন কারণে গ্যাপ ডাউন করে যার সঙ্গে চাহিদা-সরবরাহের সম্পর্ক নেই। রেকর্ড ডেটের আগের দামে সুইং হাই আর সমন্বয়ের পরের দামে সুইং লো অ্যাংকর করলে এমন রেঞ্জ মাপা হয় যার ভেতর দিয়ে কোনো অংশগ্রহণকারী কখনো লেনদেন করেননি। সমন্বিত সিরিজ ব্যবহার করুন, আর না পারলে রেকর্ড ডেট পেরিয়ে অ্যাংকর করবেন না।
- **সার্কিট ব্রেকার পিভট কেটে দেয়।** সীমায় থেমে যাওয়া চলন বিক্রেতা ফুরিয়ে যাওয়ায় থামেনি; থেমেছে কারণ এক্সচেঞ্জ থামিয়েছে। যে উচ্চ দাম ছাপা হয়েছে তা বিধির একটি কৃত্রিম ফল, আচরণগত চরম নয়।

**এগুলো একসঙ্গে রাখলে সৎ ডিএসই অবস্থান হলো:** সবচেয়ে তারল্যপূর্ণ কুড়ি-ত্রিশটি নামে, পরিচ্ছন্ন ফ্লোর-পরবর্তী উপাত্তে, গ্রিডকে সংকেত নয় বরং অবস্থান-ছাঁকনি হিসেবে ব্যবহার করলে ফিবোনাচ্চি কনফ্লুয়েন্স প্রক্রিয়ার একটি যুক্তিসঙ্গত উপাদান। তারল্যহীন কাউন্টারে এটি সাজসজ্জা।`,
    },

    simple: {
      en: `Think about the traffic app on your phone during Dhaka's evening rush.

You open it at Gulshan, it suggests a route through a particular side road, and you take it. So does everybody else who opened the same app in the same five minutes. **Twenty minutes later that side road is jammed — not because the app was wrong about it, and not because the road has some hidden property, but because the app sent everyone there.**

Now ask the important question. Was the app's suggestion *correct*? In one sense no: the road it recommended became the worst road. In another sense yes: **it correctly predicted where the traffic would be, because it created the traffic.**

**Fibonacci levels on a price chart are that side road.**

### What the tool actually does

Every charting platform on earth ships with a Fibonacci tool. You click a low, you click a high, and the software draws horizontal lines at fixed fractions of the distance between them — 23.6%, 38.2%, 50%, 61.8%, 78.6%. That is the whole mechanism. There is no clever computation happening behind the screen.

Suppose a stock ran from BDT 42 up to BDT 78. That is a move of BDT 36. Now it is falling back. Where might the fall stop?

- Give back 38.2% of the move — that is BDT 13.75 — and you land at **64.25**.
- Give back half — BDT 18 — and you land at **60.00**.
- Give back 61.8% — BDT 22.25 — and you land at **55.75**.

Those are the lines. **You could have computed them on the back of a bus ticket.**

### Where the numbers come from, and why that matters less than you think

0.618 and 0.382 come from a genuine piece of mathematics — the Fibonacci sequence, and a number called the golden ratio that shows up when you divide each term by the one before it. That part is real arithmetic.

But **0.500 is not a Fibonacci number at all.** Nobody derived it. It is on the toolbar because *half* is the most natural fraction a human being reaches for, and because a century of chart-readers noticed that corrections often give back about half.

**Sit with that for a second.** The single most-watched line on the most famous "mathematical" tool in technical analysis is a plain, undecorated half. Once you notice that, you stop asking whether the ratios are cosmically true and start asking a better question: *does anybody act on them?*

### The only reason they work

They work for the same reason the side road jams.

Tens of thousands of people run the same software, with the same default ratios, on the same obvious high and low. They all compute 55.75. **Some of them then put a real buy order at 55.75.**

Chapter 30 told you what support actually is: **not magic, just a pile of orders sitting at a price.** Well — here is a pile of orders sitting at a price. The level works because people made it work.

That is a genuine effect and you can trade it. **But notice what kind of effect it is.** It is not a law of nature. It depends entirely on enough people watching, and it evaporates the moment they stop.

### The catch that nobody tells beginners

Here is the part that should make you cautious.

The ratios are fixed. **The two points you click are not.**

On the same chart, one analyst clicks the low at 42 and gets a 61.8% line at 55.75. Another analyst thinks the real low was 44.80, three bars later, and gets a 61.8% line at 57.48. **Same stock, same day, same tool, same ratio — and the levels are BDT 1.73 apart.** That gap is almost a full day's normal price movement.

So when somebody shows you a chart where price bounced perfectly off the 61.8% line, **the first question is not "wow, does it work?" It is "when did you draw that?"** Because if you are allowed to pick the two anchor points *after* seeing where price turned, you can make the 61.8% line land almost anywhere you like.

**That is not a flaw you can fix with a better ratio. It is the central honesty problem of the whole tool**, and this chapter deals with it by making you write the swing rule down first and refusing to change it afterwards.

### So what is the tool for?

Not for telling you what will happen. **For telling you where to look.**

If the 61.8% line lands at 55.75, and the 50-day moving average is at 55.10, and there is an old support zone from Chapter 30 at 56.00 — then several different reasons are pointing at the same small patch of the chart. That patch is worth watching. **You still wait for something to actually happen there** — a candle, a volume surge, a signal from Chapters 28 or 40.

A Fibonacci line on its own is a line a piece of software drew because you clicked twice. **It did not look at the order book. You have to.**

### And on the DSE, one more warning

The traffic-app story needs a crowd. On DSE's twenty or thirty most heavily traded names, the crowd exists — thousands of people really are looking at the same chart.

**On a thin counter, there is no crowd.** A handful of accounts move the stock. Nobody is queuing at 55.75 because a piece of software said so. Draw the lines if you like; they mean nothing.

And be very careful about which highs and lows you click on a Bangladeshi chart:

- **A low printed during the floor-price period is not a low.** It is a regulation. Nobody chose to stop selling there — they were not permitted to sell lower.
- **A high printed on a circuit-limit lock is not a high.** The move stopped because the exchange stopped it, not because buyers ran out.
- **A gap on a record date is not a move.** The stock fell because a dividend came out of it. Anchoring across that gap measures a distance nobody ever traded through.

**Click a bad anchor and every line below it is wrong by exactly the same mistake, silently, all the way down the grid.**`,
      bn: `ঢাকার সন্ধ্যার ভিড়ে আপনার ফোনের ট্রাফিক অ্যাপটির কথা ভাবুন।

গুলশানে দাঁড়িয়ে অ্যাপটি খুললেন, এটি একটি নির্দিষ্ট গলি ধরে যাওয়ার পরামর্শ দিল, আপনি সেটাই নিলেন। ঐ একই পাঁচ মিনিটে একই অ্যাপ খোলা বাকি সবাইও তাই নিলেন। **কুড়ি মিনিট পরে ঐ গলিটি জ্যাম — অ্যাপটি ভুল বলেছিল বলে নয়, রাস্তাটির কোনো গোপন গুণ আছে বলেও নয়, বরং অ্যাপটি সবাইকে সেখানে পাঠিয়েছিল বলে।**

এবার গুরুত্বপূর্ণ প্রশ্নটি করুন। অ্যাপের পরামর্শটি কি *সঠিক* ছিল? এক অর্থে না: যে রাস্তার সুপারিশ করেছিল সেটিই সবচেয়ে খারাপ হয়ে গেল। আরেক অর্থে হ্যাঁ: **এটি ঠিকই ভবিষ্যদ্বাণী করেছিল যানজট কোথায় হবে, কারণ যানজটটি এটিই তৈরি করেছিল।**

**প্রাইস চার্টে ফিবোনাচ্চি স্তর হলো ঐ গলিটি।**

### হাতিয়ারটি আসলে কী করে

পৃথিবীর প্রতিটি চার্টিং প্ল্যাটফর্মে একটি ফিবোনাচ্চি টুল থাকে। আপনি একটি লো-তে ক্লিক করেন, একটি হাই-তে ক্লিক করেন, আর সফটওয়্যার দুইয়ের দূরত্বের নির্দিষ্ট ভগ্নাংশে অনুভূমিক রেখা এঁকে দেয় — ২৩.৬%, ৩৮.২%, ৫০%, ৬১.৮%, ৭৮.৬%। পুরো কারিগরিটা এটুকুই। পর্দার পেছনে চতুর কোনো গণনা হচ্ছে না।

ধরুন একটি শেয়ার ৪২ টাকা থেকে ৭৮ টাকায় উঠেছে। অর্থাৎ ৩৬ টাকার চলন। এখন এটি নেমে আসছে। পতনটি কোথায় থামতে পারে?

- চলনের ৩৮.২% ফিরিয়ে দিন — অর্থাৎ ১৩.৭৫ টাকা — আপনি নামবেন **৬৪.২৫**-এ।
- অর্ধেক ফিরিয়ে দিন — ১৮ টাকা — নামবেন **৬০.০০**-এ।
- ৬১.৮% ফিরিয়ে দিন — ২২.২৫ টাকা — নামবেন **৫৫.৭৫**-এ।

ঐগুলোই রেখা। **আপনি বাসের টিকিটের পিঠে বসেই এগুলো হিসাব করতে পারতেন।**

### সংখ্যাগুলো কোথা থেকে আসে, আর তা আপনার ধারণার চেয়ে কম গুরুত্বপূর্ণ কেন

০.৬১৮ ও ০.৩৮২ প্রকৃত গণিত থেকে আসে — ফিবোনাচ্চি ধারা, আর সোনালি অনুপাত নামের একটি সংখ্যা যা প্রতিটি পদকে তার আগেরটি দিয়ে ভাগ করলে বেরিয়ে আসে। ঐ অংশটুকু আসল পাটিগণিত।

কিন্তু **০.৫০০ মোটেই কোনো ফিবোনাচ্চি সংখ্যা নয়।** কেউ এটি উদ্ভাবন করেননি। এটি টুলবারে আছে কারণ *অর্ধেক* মানুষের হাত বাড়িয়ে ধরার সবচেয়ে স্বাভাবিক ভগ্নাংশ, আর কারণ একশো বছরের চার্ট-পাঠক লক্ষ করেছেন সংশোধন প্রায়ই প্রায় অর্ধেক ফিরিয়ে দেয়।

**একটু থেমে ভাবুন।** টেকনিক্যাল অ্যানালাইসিসের সবচেয়ে বিখ্যাত "গাণিতিক" হাতিয়ারের সবচেয়ে বেশি নজরে থাকা রেখাটি একটি সাদামাটা, অলংকারহীন অর্ধেক। এটি একবার লক্ষ করলে আপনি জিজ্ঞেস করা ছেড়ে দেন অনুপাতগুলো মহাজাগতিকভাবে সত্য কি না, আর একটি ভালো প্রশ্ন করতে শুরু করেন: *কেউ কি এগুলোর ভিত্তিতে কাজ করে?*

### এগুলো কাজ করার একমাত্র কারণ

এগুলো ঠিক সেই কারণেই কাজ করে যে কারণে গলিটি জ্যাম হয়।

হাজার হাজার মানুষ একই সফটওয়্যার চালান, একই ডিফল্ট অনুপাতে, একই স্পষ্ট হাই ও লো-তে। তাঁরা সবাই ৫৫.৭৫ হিসাব করেন। **তাঁদের কেউ কেউ তারপর ৫৫.৭৫-এ সত্যিকারের একটি ক্রয় আদেশ বসান।**

অধ্যায় ৩০ আপনাকে বলেছে সাপোর্ট আসলে কী: **জাদু নয়, কেবল এক দামে জমে থাকা অর্ডারের স্তূপ।** তো — এখানে এক দামে জমে থাকা অর্ডারের একটি স্তূপ। স্তরটি কাজ করে কারণ মানুষ একে কাজ করিয়েছে।

এটি একটি প্রকৃত প্রভাব এবং আপনি এতে লেনদেন করতে পারেন। **কিন্তু লক্ষ করুন এটি কোন ধরনের প্রভাব।** এটি প্রকৃতির নিয়ম নয়। এটি পুরোপুরি নির্ভর করে যথেষ্ট মানুষ তাকিয়ে আছেন কি না তার ওপর, আর তাঁরা তাকানো বন্ধ করলেই এটি উবে যায়।

### যে ফাঁদটি নতুনদের কেউ বলে না

এই অংশটি আপনাকে সতর্ক করা উচিত।

অনুপাতগুলো নির্দিষ্ট। **আপনি যে দুটি বিন্দুতে ক্লিক করেন সেগুলো নয়।**

একই চার্টে একজন বিশ্লেষক ৪২-এ লো ক্লিক করে ৬১.৮% রেখা পান ৫৫.৭৫-এ। আরেকজন মনে করেন আসল লো ছিল তিন বার পরে ৪৪.৮০-তে, আর তিনি ৬১.৮% রেখা পান ৫৭.৪৮-এ। **একই শেয়ার, একই দিন, একই হাতিয়ার, একই অনুপাত — আর স্তর দুটির ব্যবধান ১.৭৩ টাকা।** ঐ ব্যবধানটি প্রায় এক দিনের স্বাভাবিক দাম-চলনের সমান।

তাই কেউ যখন আপনাকে এমন একটি চার্ট দেখান যেখানে দাম ৬১.৮% রেখা থেকে নিখুঁতভাবে ফিরে এসেছে, **প্রথম প্রশ্ন "বাহ, এটি কি কাজ করে?" নয়। প্রথম প্রশ্ন "আপনি ওটা কখন এঁকেছিলেন?"** কারণ দাম কোথায় ঘুরেছে তা *দেখে নেওয়ার পরে* যদি আপনাকে দুটি অ্যাংকর বাছতে দেওয়া হয়, তবে আপনি ৬১.৮% রেখাটিকে প্রায় যেখানে খুশি সেখানে নামাতে পারেন।

**এটি এমন ত্রুটি নয় যা ভালো অনুপাত দিয়ে সারানো যায়। এটি পুরো হাতিয়ারটির কেন্দ্রীয় সততার সমস্যা**, আর এই অধ্যায় তার মোকাবিলা করে আপনাকে সুইং নিয়মটি আগে লিখিয়ে নিয়ে এবং পরে তা বদলাতে অস্বীকার করে।

### তাহলে হাতিয়ারটি কীসের জন্য?

কী ঘটবে তা বলার জন্য নয়। **কোথায় তাকাতে হবে তা বলার জন্য।**

৬১.৮% রেখা যদি ৫৫.৭৫-এ নামে, আর ৫০-দিনের মুভিং অ্যাভারেজ ৫৫.১০-এ থাকে, আর অধ্যায় ৩০-এর একটি পুরোনো সাপোর্ট জোন ৫৬.০০-তে থাকে — তবে কয়েকটি ভিন্ন কারণ চার্টের একই ছোট্ট টুকরোর দিকে আঙুল তুলছে। ঐ টুকরোটি দেখার মতো। **সেখানে সত্যিই কিছু একটা ঘটার জন্য আপনি তবু অপেক্ষা করবেন** — একটি ক্যান্ডেল, একটি ভলিউম উত্থান, অধ্যায় ২৮ বা ৪০-এর একটি সংকেত।

একা একটি ফিবোনাচ্চি রেখা এমন একটি রেখা যা আপনি দুবার ক্লিক করেছেন বলে একটি সফটওয়্যার এঁকে দিয়েছে। **এটি অর্ডার বুক দেখেনি। আপনাকে দেখতে হবে।**

### আর ডিএসই-তে আরও একটি সতর্কতা

ট্রাফিক-অ্যাপের গল্পটির জন্য একটি ভিড় দরকার। ডিএসই-র সবচেয়ে বেশি লেনদেন হওয়া কুড়ি-ত্রিশটি নামে ভিড়টি আছে — হাজার হাজার মানুষ সত্যিই একই চার্টের দিকে তাকিয়ে আছেন।

**পাতলা কাউন্টারে কোনো ভিড় নেই।** গুটিকয় অ্যাকাউন্ট শেয়ারটি নাড়ায়। একটি সফটওয়্যার বলেছে বলে কেউ ৫৫.৭৫-এ সারিতে দাঁড়ায় না। ইচ্ছে হলে রেখা আঁকুন; সেগুলোর কোনো অর্থ নেই।

আর বাংলাদেশি চার্টে কোন হাই ও লো-তে ক্লিক করছেন তা নিয়ে খুব সাবধান হোন:

- **ফ্লোর-প্রাইসের সময়ে ছাপা লো কোনো লো নয়।** এটি একটি বিধি। কেউ সেখানে বিক্রি থামানোর সিদ্ধান্ত নেননি — তাঁদের নিচে বিক্রির অনুমতিই ছিল না।
- **সার্কিট-সীমার লকে ছাপা হাই কোনো হাই নয়।** চলনটি থেমেছে কারণ এক্সচেঞ্জ থামিয়েছে, ক্রেতা ফুরিয়ে যাওয়ায় নয়।
- **রেকর্ড ডেটের গ্যাপ কোনো চলন নয়।** শেয়ারটি পড়েছে কারণ তার ভেতর থেকে একটি লভ্যাংশ বেরিয়ে গেছে। ঐ গ্যাপ পেরিয়ে অ্যাংকর করা এমন দূরত্ব মাপে যার ভেতর দিয়ে কেউ কখনো লেনদেন করেনি।

**একটি খারাপ অ্যাংকরে ক্লিক করুন, আর তার নিচের প্রতিটি রেখা ঠিক ঐ একই ভুলে ভুল হয়ে যাবে — নীরবে, গ্রিডের একেবারে নিচ পর্যন্ত।**`,
    },

    example: {
      en: `### DELTAPOLY: one grid, three defensible anchors, three different answers

DELTAPOLY is a mid-cap DSE engineering-polymer name used illustratively here; **every figure below is constructed, not historical.** It is one of the thirty most actively traded counters on the exchange, which is the only reason a coordination argument applies to it at all.

The working data:

| Input | Value | Source |
|---|---|---|
| Swing low | BDT 42.00 | Post-floor-regime pivot, unbroken 8 bars either side |
| Swing high | BDT 78.00 | Impulse peak, unbroken 8 bars either side |
| Range | BDT 36.00 | $78.00 - 42.00$ |
| Current price | BDT 56.40 | Mid-pullback |
| ATR(14) | BDT 1.85 | Chapter 39 |
| 50-day MA | BDT 55.10 | Chapter 33 |
| Prior S/R zone centre | BDT 56.00 | Chapter 30, zone 55.5375–56.4625 |

Note the direction: the stock rose from 42 to 78 and is now pulling back. Retracement levels are therefore measured **down from the high**, and extension targets are measured **up from the low**.

### Step one: the grid the software draws

$$R_r = H - r\\,(H - L) = 78.00 - 36.00\\,r$$

| Ratio | Level (BDT) | Distance from 56.40 | ATR units | Confluence |
|---|---|---|---|---|
| 0.236 | 69.504 | +13.104 | 7.08 | — |
| 0.382 | 64.248 | +7.848 | 4.24 | — |
| 0.500 | 60.000 | +3.600 | 1.95 | — |
| **0.618** | **55.752** | **−0.648** | **0.35** | **FLAG** |
| 0.786 | 49.704 | −6.696 | 3.62 | — |

**Read the ATR column before you read anything else.** Three of the five levels are more than two ATR from current price. They are not *wrong*; they are simply not decisions you have to make today. The 0.618 level at 55.752 is 0.35 ATR away — **that is the only line on the grid that is currently a live question.**

This is the first discipline the chapter imposes. A Fibonacci tool draws five lines and gives every one of them the same visual weight. **Distance in ATR units is how you restore the weighting the software threw away.**

### Step two: the confluence check, which is where the level earns its keep

Tolerance band, at half an ATR:

$$\\tau = 0.5 \\times 1.85 = 0.925$$

Against 55.752:

| Structural level | Price | Gap | Inside $\\tau$? | Weight |
|---|---|---|---|---|
| Ch 30 transacted S/R zone | 55.5375–56.4625 | contains it | ✓ | 3 |
| 50-day moving average | 55.10 | 0.652 | ✓ | 2 |
| Round taka figure | 55.00 | 0.752 | ✓ | 1 |
| Higher-degree Fib cluster (30.00 → 71.50, 0.382) | 55.647 | 0.105 | ✓ | 2 |
| **Confluence score** | | | | **8** |

**The Fibonacci level itself contributes zero to that score, and that is deliberate.** Its role is to nominate a location; the weight comes entirely from independent structural evidence. A level that scores 8 is a place where four separate populations of participants have reasons to transact within a band narrower than one daily range.

Compare that with the highest line on the grid. The 0.236 level at 69.504 has nothing near it — no moving average, no prior zone, no round figure, no second-swing cluster. **Confluence score: zero.** Yet the software drew it in exactly the same colour and thickness as 55.752. **The chart gives you no way to tell an 8 from a 0. The sheet does.**

### Step three: the anchor problem, demonstrated rather than asserted

Now the part of the chapter that matters most.

The swing low at 42.00 is defensible. So is a second reading: a chartist who requires the pivot to be the last *closing* low rather than the last intraday low puts the swing low at **44.80**, three sessions later. A third chartist notices that the 78.00 print occurred on a session that locked at the circuit limit and, following the Chapter 30 rule that a limit-locked extreme is an artefact of the regulation, uses the prior clean high of **76.50** instead.

**None of these three people is being dishonest. All three rules are written down in advance. And they produce three different grids.**

| Ratio | Anchor A: 42.00 → 78.00 | Anchor B: 44.80 → 78.00 | Anchor C: 42.00 → 76.50 |
|---|---|---|---|
| 0.236 | 69.504 | 70.165 | 68.358 |
| 0.382 | 64.248 | 65.318 | 63.321 |
| 0.500 | 60.000 | 61.400 | 59.250 |
| **0.618** | **55.752** | **57.482** | **55.179** |
| 0.786 | 49.704 | 51.905 | 49.383 |

The 61.8% level — the most-watched line in the entire toolkit — sits anywhere in the range **55.179 to 57.482**. That is a spread of **BDT 2.303**, which is:

$$\\frac{2.303}{1.85} = 1.245\\;ATR$$

**One and a quarter days of normal price movement, produced entirely by the choice of where to click.** Nothing about the stock changed. No new information arrived. The ratios were identical in all three cases.

And the consequences are not cosmetic. Re-run the confluence check on anchor B's level at 57.482:

| Structural level | Price | Gap | Inside 0.925? |
|---|---|---|---|
| Ch 30 zone | 55.5375–56.4625 | 1.020 above ceiling | ✗ |
| 50-day MA | 55.10 | 2.382 | ✗ |
| Round figure | 57.00 | 0.482 | ✓ (weight 1) |
| Fib cluster | 55.647 | 1.835 | ✗ |
| **Confluence score** | | | **1** |

**Anchor A says score 8, look for a trigger. Anchor B says score 1, there is nothing here.** Same stock, same session, same ratios.

Anchor C, meanwhile, is the strongest of the three: its 61.8% level at 55.179 sits 0.079 from the moving average — closer than anchor A managed. Its confluence score is also 8.

**Two of three defensible anchors agree; one does not.** That is the honest state of the evidence, and it is worth stating exactly that way rather than pretending the tool produced a single number.

### Step four: the curve-fit, so you can recognise it when someone does it to you

Here is a calculation you should run once and never forget.

Ask: **what swing low would place the 61.8% level exactly on the 50-day moving average at 55.10?**

$$78.00 - 0.618\\,(78.00 - L) = 55.10 \\;\\Rightarrow\\; 78.00 - L = \\frac{22.90}{0.618} = 37.055 \\;\\Rightarrow\\; L = 40.945$$

**BDT 40.945.** That is BDT 1.055 below the anchor we actually used — well inside the range of pivots a chart-reader could plausibly nominate over a three-month leg.

So if you *wanted* a perfect confluence, you could have one. Move the anchor by roughly one taka and the 61.8% line lands precisely on the moving average, and you can publish a chart captioned "textbook 61.8% retracement into dynamic support."

**This is how most of the impressive Fibonacci charts on the internet are made.** Not by fraud — by a small, unrecorded, entirely unconscious adjustment of the anchor after the outcome is visible. **The only defence is that the swing rule is written down before the grid is drawn and is not revised afterwards.** Everything else in this chapter is downstream of that one procedural commitment.

### Step five: the trade, and what the Fibonacci level contributes to it

Price falls into the confluence band. **You do not buy the line.** You wait for a Chapter 28 or Chapter 40 trigger inside the band.

Session: price trades down to 55.60, closes at 56.90 on volume 2.1× ADV — a bullish engulfing on expanded volume, exactly the Chapter 28 pattern, occurring inside the confluence band.

Entry 56.90. The stop is anchored to the structure, not to the entry: half an ATR below the *lowest* member of the confluence cluster, which is the moving average at 55.10.

$$X = 55.10 - (0.5 \\times 1.85) = 55.10 - 0.925 = 54.175$$
$$\\text{Risk} = 56.90 - 54.175 = 2.725$$

The first target is the next level *up* the grid, which becomes resistance on the way back — the 38.2% retracement at 64.248:

$$\\text{Reward} = 64.248 - 56.90 = 7.348$$
$$R{:}R = \\frac{7.348}{2.725} = 2.6965, \\qquad p^{*} = \\frac{1}{1 + 2.6965} = 0.2705 = 27.05\\%$$

**A 2.70:1 structure needing a 27.05% hit rate.** Note carefully what produced that: not the Fibonacci ratio, but the fact that the stop sits at the price where the *confluence* fails. If 54.175 trades, the moving average has broken, the Chapter 30 zone has broken, and the 61.8% level has broken — three arguments falsified at once. **That is what a good stop looks like.**

### Step six: what pre-positioning at a level would have cost

Now price the alternative, because "wait for a trigger" is otherwise just advice.

Suppose instead you had done what the Fibonacci literature usually recommends: place a resting buy at the first level price approaches — the 50% line at 60.000 — with the same structural stop.

| | Buy the 50% line | Wait for the trigger |
|---|---|---|
| Entry | 60.000 | **56.90** |
| Stop | 54.175 | 54.175 |
| Risk per share | 5.825 | **2.725** |
| Reward to 64.248 | 4.248 | **7.348** |
| $R{:}R$ | 0.729 | **2.697** |
| Break-even win rate | **57.83%** | **27.05%** |

**Buying the line requires you to be right 57.83% of the time. Waiting for the trigger requires 27.05%.** Same stock, same grid, same stop, same target. The entire difference is that one entry was placed because a piece of software drew a line, and the other was placed because something observable happened at a location the software had nominated.

**And 57.83% is worse than a coin toss on a market with no reliable short side.** A method that needs you to be right nearly six times in ten, before costs, is not a method.

### Step seven: the extension targets, and why the far ones are decoration

Extensions project from the swing low:

$$X_e = L + e\\,(H - L) = 42.00 + 36.00\\,e$$

| Ratio | Target (BDT) | Distance from 56.40 | ATR units |
|---|---|---|---|
| 1.272 | 87.792 | +31.392 | 16.97 |
| 1.414 | 92.904 | +36.504 | 19.73 |
| 1.618 | 100.248 | +43.848 | 23.70 |
| 2.618 | 136.248 | +79.848 | 43.16 |

**Look at the last row honestly.** The 2.618 extension asks you to accept a target 2.4 times the current price and 43 ATR away. Worse, it is arithmetically the most fragile number on the sheet: a one-taka error in the swing high moves it by BDT 2.618, and a one-taka error in the swing low moves it by BDT 1.618. Under the three anchors above, the 2.618 target ranges from **131.718 to 136.248** — a spread of **BDT 4.530, or 2.45 ATR.**

**A target you cannot locate to within two and a half days' volatility is not a target.** Use 1.272 and 1.618 as a rough sense of where a completed move might run out; treat 2.618 as a curiosity, and never size a position against it.

### Step eight: the DSE checks, which come before any of the above counts

| Check | On DELTAPOLY | Verdict |
|---|---|---|
| Did the 42.00 low print during a floor-price window? | No — post-floor data | ✓ Anchor usable |
| Did the 78.00 high print on a circuit-limit lock? | **Yes, per anchor C's reading** | ⚠ Ambiguous — hence anchor C exists |
| Does the leg cross a record date? | No | ✓ No adjustment gap inside the swing |
| Is the counter in the top-30 by turnover? | Yes | ✓ Coordination argument applies |
| Taka value clearing the confluence band? | ADV 850,000 at ~56 ⇒ BDT 4.76 crore/day | ⚠ One large ticket is under a day |

**The second row is the one that should stay with you.** The circuit-limit question is not a technicality — it is the reason there are three anchors instead of one, and it is a distortion that simply does not exist in the markets the Fibonacci literature was written for. On the DSE, the extremes of a strong move are precisely the prints most likely to be regulatory artefacts, **which means the DSE corrupts exactly the two data points the tool depends on most.**

**Put the whole example together and the defensible claim is narrow:** on a heavily-watched counter, on clean data, with the swing rule fixed in advance, the 61.8% level nominated a band that three independent structural arguments also nominated, and waiting for a trigger inside that band produced a 2.70:1 structure. **That is the tool working as well as it ever works.** It is a location filter. It is not a forecast, and the arithmetic in step three is your permanent reminder of why.`,
      bn: `### DELTAPOLY: একটি গ্রিড, তিনটি সমর্থনযোগ্য অ্যাংকর, তিনটি ভিন্ন উত্তর

DELTAPOLY এখানে দৃষ্টান্তমূলকভাবে ব্যবহৃত একটি মাঝারি আকারের ডিএসই ইঞ্জিনিয়ারিং-পলিমার নাম; **নিচের প্রতিটি সংখ্যা নির্মিত, ঐতিহাসিক নয়।** এটি এক্সচেঞ্জের সবচেয়ে সক্রিয়ভাবে লেনদেন হওয়া ত্রিশটি কাউন্টারের একটি, আর কেবল এ কারণেই এর ওপর সমন্বয়ের যুক্তি আদৌ প্রযোজ্য।

কার্যকর উপাত্ত:

| উপাদান | মান | উৎস |
|---|---|---|
| সুইং লো | ৪২.০০ টাকা | ফ্লোর-পরবর্তী পিভট, দুই পাশে ৮ বার অভগ্ন |
| সুইং হাই | ৭৮.০০ টাকা | ইমপালস শীর্ষ, দুই পাশে ৮ বার অভগ্ন |
| রেঞ্জ | ৩৬.০০ টাকা | $78.00 - 42.00$ |
| বর্তমান দাম | ৫৬.৪০ টাকা | পুলব্যাকের মাঝপথে |
| ATR(১৪) | ১.৮৫ টাকা | অধ্যায় ৩৯ |
| ৫০-দিনের MA | ৫৫.১০ টাকা | অধ্যায় ৩৩ |
| পূর্ববর্তী S/R জোনের কেন্দ্র | ৫৬.০০ টাকা | অধ্যায় ৩০, জোন ৫৫.৫৩৭৫–৫৬.৪৬২৫ |

দিকটি লক্ষ করুন: শেয়ারটি ৪২ থেকে ৭৮-এ উঠেছে এবং এখন পিছিয়ে আসছে। তাই রিট্রেসমেন্ট স্তর **হাই থেকে নিচে** মাপা হয়, আর এক্সটেনশন লক্ষ্য **লো থেকে ওপরে**।

### ধাপ এক: সফটওয়্যার যে গ্রিড আঁকে

$$R_r = H - r\\,(H - L) = 78.00 - 36.00\\,r$$

| অনুপাত | স্তর (টাকা) | ৫৬.৪০ থেকে দূরত্ব | ATR একক | কনফ্লুয়েন্স |
|---|---|---|---|---|
| ০.২৩৬ | ৬৯.৫০৪ | +১৩.১০৪ | ৭.০৮ | — |
| ০.৩৮২ | ৬৪.২৪৮ | +৭.৮৪৮ | ৪.২৪ | — |
| ০.৫০০ | ৬০.০০০ | +৩.৬০০ | ১.৯৫ | — |
| **০.৬১৮** | **৫৫.৭৫২** | **−০.৬৪৮** | **০.৩৫** | **FLAG** |
| ০.৭৮৬ | ৪৯.৭০৪ | −৬.৬৯৬ | ৩.৬২ | — |

**অন্য কিছু পড়ার আগে ATR কলামটি পড়ুন।** পাঁচটির তিনটি স্তরই বর্তমান দাম থেকে দুই ATR-এর বেশি দূরে। সেগুলো *ভুল* নয়; সেগুলো কেবল আজ আপনার নেওয়ার মতো সিদ্ধান্ত নয়। ৫৫.৭৫২-এ ০.৬১৮ স্তরটি ০.৩৫ ATR দূরে — **গ্রিডের একমাত্র ঐ রেখাটিই এই মুহূর্তে জীবন্ত প্রশ্ন।**

এটিই অধ্যায়ের আরোপিত প্রথম শৃঙ্খলা। ফিবোনাচ্চি টুল পাঁচটি রেখা আঁকে ও প্রতিটিকে একই দৃশ্যগত ওজন দেয়। **ATR এককে দূরত্বই সফটওয়্যারের ছুঁড়ে ফেলা ওজনটি ফিরিয়ে আনার উপায়।**

### ধাপ দুই: কনফ্লুয়েন্স যাচাই, যেখানে স্তরটি তার মূল্য অর্জন করে

সহনশীলতার ব্যান্ড, অর্ধ ATR-এ:

$$\\tau = 0.5 \\times 1.85 = 0.925$$

৫৫.৭৫২-এর বিপরীতে:

| কাঠামোগত স্তর | দাম | ব্যবধান | $\\tau$-এর ভেতরে? | ওজন |
|---|---|---|---|---|
| অ ৩০-এর সম্পন্ন S/R জোন | ৫৫.৫৩৭৫–৫৬.৪৬২৫ | ভেতরে ধারণ করে | ✓ | ৩ |
| ৫০-দিনের মুভিং অ্যাভারেজ | ৫৫.১০ | ০.৬৫২ | ✓ | ২ |
| রাউন্ড টাকার অঙ্ক | ৫৫.০০ | ০.৭৫২ | ✓ | ১ |
| উচ্চতর মাত্রার ফিব ক্লাস্টার (৩০.০০ → ৭১.৫০, ০.৩৮২) | ৫৫.৬৪৭ | ০.১০৫ | ✓ | ২ |
| **কনফ্লুয়েন্স স্কোর** | | | | **৮** |

**ফিবোনাচ্চি স্তরটি নিজে ঐ স্কোরে শূন্য যোগ করে, আর তা ইচ্ছাকৃত।** এর ভূমিকা একটি অবস্থান মনোনীত করা; ওজনটি পুরোপুরি আসে স্বাধীন কাঠামোগত প্রমাণ থেকে। যে স্তর ৮ স্কোর করে তা এমন জায়গা যেখানে চারটি আলাদা অংশগ্রহণকারী-দলের এক দৈনিক রেঞ্জের চেয়েও সংকীর্ণ ব্যান্ডে লেনদেন করার কারণ আছে।

এর সঙ্গে গ্রিডের সর্বোচ্চ রেখাটি তুলনা করুন। ৬৯.৫০৪-এ ০.২৩৬ স্তরের কাছে কিছুই নেই — কোনো মুভিং অ্যাভারেজ নয়, কোনো পূর্ববর্তী জোন নয়, কোনো রাউন্ড অঙ্ক নয়, কোনো দ্বিতীয়-সুইং ক্লাস্টার নয়। **কনফ্লুয়েন্স স্কোর: শূন্য।** তবু সফটওয়্যার একে ৫৫.৭৫২-এর হুবহু একই রঙে ও পুরুত্বে এঁকেছে। **চার্ট আপনাকে ৮ আর ০-এর পার্থক্য বলার কোনো উপায় দেয় না। শিট দেয়।**

### ধাপ তিন: অ্যাংকরের সমস্যা, দাবি করে নয় বরং দেখিয়ে

এবার অধ্যায়ের সবচেয়ে গুরুত্বপূর্ণ অংশ।

৪২.০০-এর সুইং লো সমর্থনযোগ্য। একটি দ্বিতীয় পাঠও তাই: যে চার্টিস্ট পিভটকে শেষ ইন্ট্রাডে লো নয় বরং শেষ *ক্লোজিং* লো হতে হবে বলে দাবি করেন, তিনি সুইং লো বসান তিন সেশন পরে **৪৪.৮০**-তে। তৃতীয়জন লক্ষ করেন ৭৮.০০ প্রিন্টটি এমন এক সেশনে হয়েছিল যা সার্কিট সীমায় লক হয়েছিল, আর অধ্যায় ৩০-এর নিয়ম — সীমা-লক চরম একটি বিধির কৃত্রিম ফল — অনুসরণ করে তিনি বদলে আগের পরিচ্ছন্ন হাই **৭৬.৫০** ব্যবহার করেন।

**এই তিনজনের কেউই অসৎ নন। তিনটি নিয়মই আগেভাগে লেখা। আর তারা তিনটি ভিন্ন গ্রিড তৈরি করে।**

| অনুপাত | অ্যাংকর A: ৪২.০০ → ৭৮.০০ | অ্যাংকর B: ৪৪.৮০ → ৭৮.০০ | অ্যাংকর C: ৪২.০০ → ৭৬.৫০ |
|---|---|---|---|
| ০.২৩৬ | ৬৯.৫০৪ | ৭০.১৬৫ | ৬৮.৩৫৮ |
| ০.৩৮২ | ৬৪.২৪৮ | ৬৫.৩১৮ | ৬৩.৩২১ |
| ০.৫০০ | ৬০.০০০ | ৬১.৪০০ | ৫৯.২৫০ |
| **০.৬১৮** | **৫৫.৭৫২** | **৫৭.৪৮২** | **৫৫.১৭৯** |
| ০.৭৮৬ | ৪৯.৭০৪ | ৫১.৯০৫ | ৪৯.৩৮৩ |

৬১.৮% স্তর — গোটা হাতিয়ারের সবচেয়ে বেশি নজরে থাকা রেখা — বসে থাকে **৫৫.১৭৯ থেকে ৫৭.৪৮২** পরিসরের যেকোনো জায়গায়। ব্যাপ্তি **২.৩০৩ টাকা**, অর্থাৎ:

$$\\frac{2.303}{1.85} = 1.245\\;ATR$$

**সোয়া এক দিনের স্বাভাবিক দাম-চলন, যা পুরোপুরি কোথায় ক্লিক করা হবে সেই পছন্দ থেকে তৈরি।** শেয়ারটির কিছুই বদলায়নি। কোনো নতুন তথ্য আসেনি। তিনটি ক্ষেত্রেই অনুপাত অভিন্ন ছিল।

আর পরিণতি নিছক প্রসাধনী নয়। অ্যাংকর B-র ৫৭.৪৮২ স্তরে কনফ্লুয়েন্স যাচাই আবার চালান:

| কাঠামোগত স্তর | দাম | ব্যবধান | ০.৯২৫-এর ভেতরে? |
|---|---|---|---|
| অ ৩০-এর জোন | ৫৫.৫৩৭৫–৫৬.৪৬২৫ | ছাদের ১.০২০ ওপরে | ✗ |
| ৫০-দিনের MA | ৫৫.১০ | ২.৩৮২ | ✗ |
| রাউন্ড অঙ্ক | ৫৭.০০ | ০.৪৮২ | ✓ (ওজন ১) |
| ফিব ক্লাস্টার | ৫৫.৬৪৭ | ১.৮৩৫ | ✗ |
| **কনফ্লুয়েন্স স্কোর** | | | **১** |

**অ্যাংকর A বলে স্কোর ৮, ট্রিগার খুঁজুন। অ্যাংকর B বলে স্কোর ১, এখানে কিছু নেই।** একই শেয়ার, একই সেশন, একই অনুপাত।

এদিকে অ্যাংকর C তিনটির মধ্যে শক্তিশালীতম: এর ৬১.৮% স্তর ৫৫.১৭৯ মুভিং অ্যাভারেজ থেকে ০.০৭৯ দূরে — অ্যাংকর A যা পেরেছিল তার চেয়েও কাছে। এর কনফ্লুয়েন্স স্কোরও ৮।

**তিনটি সমর্থনযোগ্য অ্যাংকরের দুটি একমত; একটি নয়।** প্রমাণের সৎ অবস্থা এটিই, আর হাতিয়ারটি একটি একক সংখ্যা দিয়েছে ভান না করে ঠিক এভাবেই বলা উচিত।

### ধাপ চার: কার্ভ-ফিট, যাতে কেউ আপনার সঙ্গে করলে আপনি চিনতে পারেন

এই গণনাটি একবার চালান এবং কখনো ভুলবেন না।

জিজ্ঞেস করুন: **কোন সুইং লো ৬১.৮% স্তরকে ঠিক ৫৫.১০-এর ৫০-দিনের মুভিং অ্যাভারেজে বসাবে?**

$$78.00 - 0.618\\,(78.00 - L) = 55.10 \\;\\Rightarrow\\; 78.00 - L = \\frac{22.90}{0.618} = 37.055 \\;\\Rightarrow\\; L = 40.945$$

**৪০.৯৪৫ টাকা।** যে অ্যাংকরটি আমরা সত্যিই ব্যবহার করেছি তার চেয়ে ১.০৫৫ টাকা নিচে — একটি তিন মাসের লেগে একজন চার্ট-পাঠক যেসব পিভট যুক্তিসঙ্গতভাবে মনোনীত করতে পারেন তার পরিসরের ভেতরেই।

তাই আপনি যদি একটি নিখুঁত কনফ্লুয়েন্স *চাইতেন*, আপনি তা পেতে পারতেন। অ্যাংকরটি প্রায় এক টাকা সরান, ৬১.৮% রেখা ঠিক মুভিং অ্যাভারেজে নামবে, আর আপনি "পাঠ্যবইসুলভ ৬১.৮% রিট্রেসমেন্ট ডায়নামিক সাপোর্টে" শিরোনামে একটি চার্ট প্রকাশ করতে পারবেন।

**ইন্টারনেটের বেশিরভাগ চিত্তাকর্ষক ফিবোনাচ্চি চার্ট এভাবেই তৈরি হয়।** জালিয়াতিতে নয় — ফলাফল দেখা যাওয়ার পরে অ্যাংকরের একটি ছোট, অলিখিত, সম্পূর্ণ অবচেতন সমন্বয়ে। **একমাত্র প্রতিরক্ষা হলো গ্রিড আঁকার আগে সুইং নিয়মটি লিখে ফেলা এবং পরে তা সংশোধন না করা।** এই অধ্যায়ের বাকি সবকিছু ঐ একটি প্রক্রিয়াগত প্রতিশ্রুতির অধস্তন।

### ধাপ পাঁচ: ট্রেড, আর ফিবোনাচ্চি স্তর তাতে কী যোগ করে

দাম কনফ্লুয়েন্স ব্যান্ডে নেমে আসে। **আপনি রেখাটি কেনেন না।** আপনি ব্যান্ডের ভেতরে অধ্যায় ২৮ বা অধ্যায় ৪০-এর একটি ট্রিগারের অপেক্ষা করেন।

সেশন: দাম নেমে ৫৫.৬০ পর্যন্ত লেনদেন হয়, ADV-র ২.১ গুণ ভলিউমে ৫৬.৯০-এ ক্লোজ করে — বর্ধিত ভলিউমে একটি বুলিশ এনগালফিং, হুবহু অধ্যায় ২৮-এর ধরন, কনফ্লুয়েন্স ব্যান্ডের ভেতরে ঘটছে।

এন্ট্রি ৫৬.৯০। স্টপ প্রবেশে নয়, কাঠামোয় নোঙর করা: কনফ্লুয়েন্স গুচ্ছের *সর্বনিম্ন* সদস্যের অর্ধ ATR নিচে, যা ৫৫.১০-এর মুভিং অ্যাভারেজ।

$$X = 55.10 - (0.5 \\times 1.85) = 55.10 - 0.925 = 54.175$$
$$\\text{Risk} = 56.90 - 54.175 = 2.725$$

প্রথম লক্ষ্য গ্রিডের *ওপরের* পরবর্তী স্তর, যা ফেরার পথে রেজিস্ট্যান্স হয় — ৬৪.২৪৮-এ ৩৮.২% রিট্রেসমেন্ট:

$$\\text{Reward} = 64.248 - 56.90 = 7.348$$
$$R{:}R = \\frac{7.348}{2.725} = 2.6965, \\qquad p^{*} = \\frac{1}{1 + 2.6965} = 0.2705 = 27.05\\%$$

**২.৭০:১ কাঠামো, দরকার ২৭.০৫% হিট রেট।** কী তা তৈরি করল তা মন দিয়ে দেখুন: ফিবোনাচ্চি অনুপাত নয়, বরং এই সত্য যে স্টপটি সেই দামে বসে আছে যেখানে *কনফ্লুয়েন্সটি* ব্যর্থ হয়। ৫৪.১৭৫ লেনদেন হলে মুভিং অ্যাভারেজ ভেঙেছে, অধ্যায় ৩০-এর জোন ভেঙেছে, আর ৬১.৮% স্তর ভেঙেছে — একসঙ্গে তিনটি যুক্তি মিথ্যা প্রমাণিত। **ভালো স্টপ দেখতে এমনই হয়।**

### ধাপ ছয়: স্তরে আগেভাগে অবস্থান নিলে কত খরচ হতো

এবার বিকল্পটির দাম হিসাব করুন, কারণ "ট্রিগারের অপেক্ষা করুন" নইলে নিছক উপদেশ।

ধরুন বদলে আপনি ফিবোনাচ্চি সাহিত্য সাধারণত যা সুপারিশ করে তাই করতেন: দাম যে প্রথম স্তরের কাছে আসে সেখানে একটি অপেক্ষমাণ ক্রয় বসাতেন — ৬০.০০০-এ ৫০% রেখা — একই কাঠামোগত স্টপ নিয়ে।

| | ৫০% রেখা কেনা | ট্রিগারের অপেক্ষা |
|---|---|---|
| এন্ট্রি | ৬০.০০০ | **৫৬.৯০** |
| স্টপ | ৫৪.১৭৫ | ৫৪.১৭৫ |
| প্রতি শেয়ার ঝুঁকি | ৫.৮২৫ | **২.৭২৫** |
| ৬৪.২৪৮ পর্যন্ত পুরস্কার | ৪.২৪৮ | **৭.৩৪৮** |
| $R{:}R$ | ০.৭২৯ | **২.৬৯৭** |
| ব্রেক-ইভেন উইন রেট | **৫৭.৮৩%** | **২৭.০৫%** |

**রেখাটি কিনলে আপনাকে ৫৭.৮৩% সময় ঠিক হতে হবে। ট্রিগারের অপেক্ষা করলে ২৭.০৫%।** একই শেয়ার, একই গ্রিড, একই স্টপ, একই লক্ষ্য। পুরো পার্থক্য এটুকু যে একটি প্রবেশ বসানো হয়েছিল কারণ একটি সফটওয়্যার একটি রেখা এঁকেছিল, আর অন্যটি বসানো হয়েছিল কারণ সফটওয়্যারের মনোনীত একটি অবস্থানে পর্যবেক্ষণযোগ্য কিছু ঘটেছিল।

**আর নির্ভরযোগ্য শর্ট সাইড নেই এমন বাজারে ৫৭.৮৩% মুদ্রা-নিক্ষেপের চেয়েও খারাপ।** যে পদ্ধতিতে খরচের আগেই আপনাকে দশবারে প্রায় ছয়বার ঠিক হতে হয়, তা পদ্ধতি নয়।

### ধাপ সাত: এক্সটেনশন লক্ষ্য, আর দূরেরগুলো কেন সাজসজ্জা

এক্সটেনশন সুইং লো থেকে প্রক্ষেপিত হয়:

$$X_e = L + e\\,(H - L) = 42.00 + 36.00\\,e$$

| অনুপাত | লক্ষ্য (টাকা) | ৫৬.৪০ থেকে দূরত্ব | ATR একক |
|---|---|---|---|
| ১.২৭২ | ৮৭.৭৯২ | +৩১.৩৯২ | ১৬.৯৭ |
| ১.৪১৪ | ৯২.৯০৪ | +৩৬.৫০৪ | ১৯.৭৩ |
| ১.৬১৮ | ১০০.২৪৮ | +৪৩.৮৪৮ | ২৩.৭০ |
| ২.৬১৮ | ১৩৬.২৪৮ | +৭৯.৮৪৮ | ৪৩.১৬ |

**শেষ সারিটি সৎভাবে দেখুন।** ২.৬১৮ এক্সটেনশন আপনাকে বর্তমান দামের ২.৪ গুণ ও ৪৩ ATR দূরের একটি লক্ষ্য মেনে নিতে বলে। আরও খারাপ, এটি শিটের পাটিগণিতিকভাবে সবচেয়ে ভঙ্গুর সংখ্যা: সুইং হাই-তে এক টাকার ত্রুটি একে ২.৬১৮ টাকা সরায়, আর সুইং লো-তে এক টাকার ত্রুটি ১.৬১৮ টাকা। ওপরের তিনটি অ্যাংকরে ২.৬১৮ লক্ষ্য **১৩১.৭১৮ থেকে ১৩৬.২৪৮** পর্যন্ত বিস্তৃত — ব্যাপ্তি **৪.৫৩০ টাকা, অর্থাৎ ২.৪৫ ATR।**

**যে লক্ষ্য আপনি আড়াই দিনের অস্থিরতার ভেতরেও স্থির করতে পারেন না তা লক্ষ্য নয়।** একটি সম্পূর্ণ চলন কোথায় ফুরাতে পারে তার মোটা ধারণা হিসেবে ১.২৭২ ও ১.৬১৮ ব্যবহার করুন; ২.৬১৮-কে কৌতূহল গণ্য করুন, আর কখনো এর বিপরীতে পজিশনের আকার নেবেন না।

### ধাপ আট: ডিএসই যাচাই, যা ওপরের কিছু গণ্য হওয়ার আগে আসে

| যাচাই | DELTAPOLY-তে | রায় |
|---|---|---|
| ৪২.০০ লো কি ফ্লোর-প্রাইসের সময়ে ছাপা? | না — ফ্লোর-পরবর্তী উপাত্ত | ✓ অ্যাংকর ব্যবহারযোগ্য |
| ৭৮.০০ হাই কি সার্কিট-সীমার লকে ছাপা? | **হ্যাঁ, অ্যাংকর C-র পাঠ অনুযায়ী** | ⚠ দ্ব্যর্থক — তাই অ্যাংকর C-র অস্তিত্ব |
| লেগটি কি কোনো রেকর্ড ডেট পেরোয়? | না | ✓ সুইংয়ের ভেতরে সমন্বয় গ্যাপ নেই |
| কাউন্টারটি কি টার্নওভারে শীর্ষ ৩০-এ? | হ্যাঁ | ✓ সমন্বয়ের যুক্তি প্রযোজ্য |
| কনফ্লুয়েন্স ব্যান্ড পরিষ্কার করার টাকার মূল্য? | ~৫৬ টাকায় ADV ৮,৫০,০০০ ⇒ দিনে ৪.৭৬ কোটি টাকা | ⚠ একটি বড় টিকিট এক দিনেরও কম |

**দ্বিতীয় সারিটিই আপনার সঙ্গে থেকে যাওয়া উচিত।** সার্কিট-সীমার প্রশ্নটি কারিগরি খুঁটিনাটি নয় — এটিই একটির বদলে তিনটি অ্যাংকর থাকার কারণ, আর এটি এমন একটি বিকৃতি যা ফিবোনাচ্চি সাহিত্য যেসব বাজারের জন্য লেখা হয়েছিল সেখানে থাকেই না। ডিএসই-তে একটি শক্তিশালী চলনের চরম বিন্দুগুলোই ঠিক সেই প্রিন্ট যা সবচেয়ে বেশি সম্ভাবনায় নিয়ন্ত্রক কৃত্রিম ফল, **অর্থাৎ ডিএসই ঠিক সেই দুটি উপাত্ত-বিন্দুকেই কলুষিত করে যেগুলোর ওপর হাতিয়ারটি সবচেয়ে বেশি নির্ভর করে।**

**পুরো উদাহরণটি একত্র করলে সমর্থনযোগ্য দাবিটি সংকীর্ণ:** বেশি নজরে থাকা একটি কাউন্টারে, পরিচ্ছন্ন উপাত্তে, আগেভাগে স্থির করা সুইং নিয়মে, ৬১.৮% স্তর এমন একটি ব্যান্ড মনোনীত করেছে যা তিনটি স্বাধীন কাঠামোগত যুক্তিও মনোনীত করেছে, আর ঐ ব্যান্ডের ভেতরে ট্রিগারের অপেক্ষা ২.৭০:১ কাঠামো তৈরি করেছে। **হাতিয়ারটি যতটা ভালো কাজ করে, এটিই তা।** এটি একটি অবস্থান-ছাঁকনি। এটি পূর্বাভাস নয়, আর ধাপ তিনের পাটিগণিতই কেন নয় তার আপনার স্থায়ী স্মারক।`,
    },

    formula: {
      en: `### 1. Where the ratios come from — the arithmetic, in full, with nothing hidden

The sequence is $F_1 = F_2 = 1$, $F_n = F_{n-1} + F_{n-2}$. If consecutive ratios converge to some $x$, divide the recurrence by $F_{n-1}$:

$$\\frac{F_n}{F_{n-1}} = 1 + \\frac{F_{n-2}}{F_{n-1}} \\;\\Longrightarrow\\; x = 1 + \\frac{1}{x} \\;\\Longrightarrow\\; x^2 - x - 1 = 0$$

$$\\varphi = \\frac{1 + \\sqrt{5}}{2} = 1.6180339887\\ldots$$

Every ratio on the toolbar, and its **actual** origin:

| Toolbar ratio | Exact value | Genuine derivation? |
|---|---|---|
| 0.236 | $\\varphi^{-3} = 0.2360680$ | **Yes** — third inverse power |
| 0.382 | $\\varphi^{-2} = 0.3819660$ | **Yes** — second inverse power; also $1 - \\varphi^{-1}$ |
| 0.500 | $1/2$ | **No.** Not a Fibonacci quantity in any sense |
| 0.618 | $\\varphi^{-1} = 0.6180340$ | **Yes** — the golden ratio's reciprocal |
| 0.786 | $\\sqrt{\\varphi^{-1}} = 0.7861514$ | **Partly** — a square root of a real ratio, chosen for convenience |
| 1.272 | $\\sqrt{\\varphi} = 1.2720196$ | **Partly** — same manoeuvre, mirrored |
| 1.414 | $\\sqrt{2} = 1.4142136$ | **No.** Nothing to do with Fibonacci |
| 1.618 | $\\varphi$ | **Yes** |
| 2.618 | $\\varphi^{2} = 2.6180340$ | **Yes** |

Verify the identity that makes 0.382 and 0.618 look like a matched pair:

$$\\varphi^{-1} + \\varphi^{-2} = 0.6180340 + 0.3819660 = 1.0000000$$

That is not a coincidence; it is $\\varphi^2 = \\varphi + 1$ divided through by $\\varphi^2$. **It is also the only structural relationship on the whole toolbar**, and it is why practitioners talk about the 38.2% and 61.8% levels as complements.

**Now say the uncomfortable part plainly. Three of the nine ratios in daily use — 0.500, 1.414, and arguably 0.786 and 1.272 — are not consequences of the golden ratio.** 0.500 is a half. 1.414 is $\\sqrt{2}$, imported from a different geometric tradition. 0.786 and 1.272 are square roots applied to real ratios because square roots produced numbers that fell in a useful gap.

**This is decisive for how you should hold the tool.** A derived system has the property that you cannot add or remove members without breaking it. This set does not have that property — members were added when they were useful and their pedigree was reverse-engineered afterwards, or omitted. **What you are holding is a grid of round-ish fractions with a partial mathematical veneer.** That is not a reason to discard it. It is a reason never to treat a level's number as evidence for the level.

### 2. Retracement levels, and why the formula is a weighted average

For an up-leg from swing low $L$ to swing high $H$, with range $\\Delta = H - L$:

$$R_r = H - r\\,\\Delta = H - r\\,(H - L)$$

Rearrange, and the structure of the tool becomes visible:

$$\\boxed{\\;R_r = (1 - r)\\,H + r\\,L\\;}$$

**Every retracement level is a convex combination of the two anchors, with weight $r$ on the low and $1 - r$ on the high.** For DELTAPOLY at $r = 0.618$:

$$R_{0.618} = 0.382 \\times 78.00 + 0.618 \\times 42.00 = 29.796 + 25.956 = 55.752$$

For a down-leg, the roles reverse:

$$R_r = L + r\\,(H - L) = r\\,H + (1 - r)\\,L$$

The sheet handles both through the direction switch in B7: $+1$ for an up-leg, $-1$ for a down-leg. **The direction flag is not decoration — set it wrong and every level on the grid is reflected about the midpoint**, which produces a plausible-looking set of numbers that are all wrong. A grid whose 61.8% level sits *above* the 50% level in an up-leg pullback is the visible symptom.

### 3. Extension levels

Extensions project past the origin of the impulse:

$$X_e = L + e\\,\\Delta = e\\,H + (1 - e)\\,L, \\qquad e > 1$$

Because $e > 1$, the coefficient $(1 - e)$ is **negative**. The extension is no longer an interpolation between the anchors — it is an *extrapolation*, and extrapolation amplifies whatever error is in the inputs. This is the mathematical reason the far extensions are unreliable, and it is worth being precise about it rather than gesturing at it.

For DELTAPOLY:

$$X_{1.618} = 1.618 \\times 78.00 - 0.618 \\times 42.00 = 126.204 - 25.956 = 100.248$$
$$X_{2.618} = 2.618 \\times 78.00 - 1.618 \\times 42.00 = 204.204 - 67.956 = 136.248$$

### 4. The swing-selection problem, stated as sensitivity

**This is the most important section in the chapter, and it is not a warning — it is a derivative.**

Differentiate the retracement formula with respect to each anchor:

$$\\frac{\\partial R_r}{\\partial H} = 1 - r, \\qquad \\frac{\\partial R_r}{\\partial L} = r$$

And the extension formula:

$$\\frac{\\partial X_e}{\\partial H} = e, \\qquad \\frac{\\partial X_e}{\\partial L} = 1 - e \\;\\;(\\text{negative, magnitude } e - 1)$$

Read the table these produce, because it tells you exactly how much of your grid is opinion:

| Level | Sensitivity to $H$ | Sensitivity to $L$ | BDT move per BDT 1 anchor error |
|---|---|---|---|
| 0.236 retracement | 0.764 | 0.236 | up to 0.76 |
| 0.382 retracement | 0.618 | 0.382 | up to 0.62 |
| 0.500 retracement | 0.500 | 0.500 | 0.50 either way |
| 0.618 retracement | 0.382 | 0.618 | up to 0.62 |
| 0.786 retracement | 0.214 | 0.786 | up to 0.79 |
| 1.272 extension | 1.272 | 0.272 | up to **1.27** |
| 1.618 extension | 1.618 | 0.618 | up to **1.62** |
| 2.618 extension | 2.618 | 1.618 | up to **2.62** |

**For retracements the sensitivities sum to exactly one**, because the level is a weighted average — an error in one anchor is partly offset if the other moves the same way. **For extensions they sum to $2e - 1$, which is greater than one and grows without bound.** At $e = 2.618$ the sum is 4.236: the 2.618 target is four times as sensitive to anchor error as any retracement level can ever be.

Apply it to DELTAPOLY. Anchor B moves the low by $+2.80$:

$$\\Delta R_{0.618} = 0.618 \\times 2.80 = 1.7304 \\;\\Rightarrow\\; \\frac{1.7304}{1.85} = 0.935\\,ATR$$
$$\\Delta X_{2.618} = -1.618 \\times 2.80 = -4.5304 \\;\\Rightarrow\\; 2.449\\,ATR$$

Anchor C moves the high by $-1.50$:

$$\\Delta R_{0.618} = 0.382 \\times (-1.50) = -0.573 \\;\\Rightarrow\\; 0.310\\,ATR$$
$$\\Delta X_{2.618} = 2.618 \\times (-1.50) = -3.927 \\;\\Rightarrow\\; 2.123\\,ATR$$

**Define the honest reporting quantity: the anchor dispersion of a level.** Given a set of $m$ defensible anchor pairs, report

$$D_r = \\max_j R_r^{(j)} - \\min_j R_r^{(j)}, \\qquad \\tilde{D}_r = \\frac{D_r}{ATR}$$

For DELTAPOLY's 61.8% level across three anchors: $D = 57.482 - 55.179 = 2.303$, hence $\\tilde{D} = 1.245$ ATR.

**A level whose anchor dispersion exceeds the confluence tolerance $\\tau$ is not a level. It is a region of disagreement.** Here $\\tilde{D} = 1.245$ ATR against $\\tau = 0.5$ ATR, so on the strict reading DELTAPOLY's 61.8% "level" fails that test outright — and the only reason the analysis survives is that two of the three anchors happen to agree, not that the tool produced a unique answer. **State that in your note. It is the difference between analysis and advertising.**

### 5. The pre-commitment rule, written as a procedure

The remedy for §4 is not a better ratio. It is a rule fixed before the grid is drawn.

$$\\text{Pivot}(t) \\text{ is a swing high} \\iff H_t = \\max\\{H_{t-k}, \\ldots, H_{t+k}\\}, \\quad k = 8$$

with the symmetric definition for a swing low, and the leg defined as the most recent completed pivot-to-pivot move on the working timeframe. **Three properties make a rule serviceable:**

1. **Deterministic** — two people applying it to the same data get the same anchors.
2. **Causal** — it uses no information from after the drawing date, so a grid drawn on Sunday is still the grid on Thursday.
3. **Recorded** — $k$, the timeframe, and the exclusion filters are written in the note before the levels are.

**The third is the one that actually binds**, because the failure mode is not choosing a bad rule; it is quietly choosing a different rule when the first one produces an inconvenient grid. That failure leaves no trace unless the rule was written down first.

**The test for whether you are curve-fitting is mechanical: could you have drawn this grid one month ago, before the turn you are now explaining?** If the answer requires the turn, the grid is a description, not a prediction.

### 6. Confluence scoring against Chapter 30's structural levels

Fibonacci earns its place only by intersecting things that exist for independent reasons. Define the tolerance band in volatility units:

$$\\tau = m \\cdot ATR, \\qquad m = 0.5 \\;\\Rightarrow\\; \\tau = 0.5 \\times 1.85 = 0.925$$

and score a candidate level $F$ against a set of structural references $S_j$ with weights $w_j$:

$$C(F) = \\sum_j w_j \\cdot \\mathbb{1}\\big[\\,|F - S_j| \\le \\tau\\,\\big]$$

| Reference $S_j$ | Weight $w_j$ | Why this weight |
|---|---|---|
| Chapter 30 transacted S/R zone | 3 | Real positioned inventory; the strongest evidence available |
| Moving average (50-day, Ch 33) | 2 | Widely watched, genuinely traded against |
| Fibonacci cluster from a *second* swing | 2 | Two independent analyst populations arriving at one band |
| Round taka figure | 1 | Psychologically real, structurally weak (Ch 30's ranking) |
| **The Fibonacci level under test** | **0** | **It nominates the location; it does not vote on it** |

$$\\text{Action} = \\begin{cases} \\text{Look for a Ch 28/34/40 trigger} & C \\ge 3 \\\\ \\text{Watchlist only, set an alert} & 1 \\le C < 3 \\\\ \\text{Ignore the level entirely} & C = 0 \\end{cases}$$

**The zero weight on the Fibonacci level is the entire architectural claim of this chapter**, and it is the same architecture as Chapter 30's exhaustion override: a component that cannot be outvoted by an attractive total, and a component that cannot vote for itself. Give the Fibonacci level a weight of 2 and a bare 61.8% line with a round figure nearby scores 3 and becomes tradable, which is precisely the error the chapter exists to prevent.

For DELTAPOLY's 55.752: $C = 3 + 2 + 2 + 1 = 8$. For anchor B's 57.482: $C = 1$. **Same ratio, same session, and the action changes from "look for a trigger" to "there is nothing here."**

### 7. Position sizing from the confluence, not from the level

$$E = \\text{trigger close}, \\qquad X = \\min_j\\{S_j \\text{ in the cluster}\\} - 0.5\\,ATR$$

$$R{:}R = \\frac{T - E}{E - X}, \\qquad p^{*} = \\frac{1}{1 + R{:}R}$$

**The stop is anchored to the lowest member of the confluence cluster, not to the Fibonacci level and never to the entry.** The reasoning is that the trade's thesis is the *cluster*; the price at which the thesis is falsified is the price below which every member of the cluster has failed. On DELTAPOLY that is the 50-day MA at 55.10, giving $X = 54.175$, and the resulting 27.05% break-even is a property of that structure rather than of the ratio 0.618.

### 8. Time-based Fibonacci, and why it is excluded

Projecting turning points at $t_0 + 8, 13, 21, 34$ bars is the family's weakest member and this book does not use it.

**The coordination mechanism requires that something can rest at the coordinate.** Limit orders rest at prices. **Nothing rests at a date.** There is no order book indexed by time, no inventory positioned at "thirteen sessions from Tuesday", and therefore no mechanism at all — not even a self-fulfilling one. It also enjoys an unlimited supply of degrees of freedom: choose the origin bar, the timeframe, and the count, and a turning point can be found near almost any projection.

Recognise it so you are not persuaded by it. Do not build on it.

### 9. The DSE corrections, which precede everything above

| Distortion | Effect on the grid |
|---|---|
| Floor-price window | A "swing low" at the floor is an administrative boundary, not a pivot. **Every level below the high inherits the error, scaled by $r$.** Exclude the window before pivot detection, per Ch 26. |
| Circuit-limit lock | A limit-locked extreme is where the exchange stopped the move. On DELTAPOLY this is exactly the ambiguity that generates anchor C. **Flag limit-locked bars and report both grids.** |
| Record-date gap | An ex-dividend or ex-bonus gap is not supply meeting demand. Anchoring across one measures a range nobody traded. Use adjusted series or refuse the swing. |
| Thin liquidity | The coordination mechanism needs a dispersed crowd. Below the top-30 by turnover there is no crowd, and the grid is decoration. **Compute the taka value that clears the confluence band and size on the smaller of that and the score.** |
| No reliable short side | A failed retracement — price slicing through 0.786 on volume — is a textbook short and is not actionable here. **It resolves to: do not buy, and exit if long.** |`,
      bn: `### ১. অনুপাতগুলো কোথা থেকে আসে — সম্পূর্ণ পাটিগণিত, কিছুই লুকানো নেই

ধারাটি $F_1 = F_2 = 1$, $F_n = F_{n-1} + F_{n-2}$। পরপর অনুপাত কোনো $x$-এ অভিসারী হলে পুনরাবৃত্তিটিকে $F_{n-1}$ দিয়ে ভাগ করুন:

$$\\frac{F_n}{F_{n-1}} = 1 + \\frac{F_{n-2}}{F_{n-1}} \\;\\Longrightarrow\\; x = 1 + \\frac{1}{x} \\;\\Longrightarrow\\; x^2 - x - 1 = 0$$

$$\\varphi = \\frac{1 + \\sqrt{5}}{2} = 1.6180339887\\ldots$$

টুলবারের প্রতিটি অনুপাত, আর তার **প্রকৃত** উৎস:

| টুলবার অনুপাত | সঠিক মান | প্রকৃত উদ্ভব? |
|---|---|---|
| ০.২৩৬ | $\\varphi^{-3} = 0.2360680$ | **হ্যাঁ** — তৃতীয় বিপরীত ঘাত |
| ০.৩৮২ | $\\varphi^{-2} = 0.3819660$ | **হ্যাঁ** — দ্বিতীয় বিপরীত ঘাত; আবার $1 - \\varphi^{-1}$ |
| ০.৫০০ | $1/2$ | **না।** কোনো অর্থেই ফিবোনাচ্চি রাশি নয় |
| ০.৬১৮ | $\\varphi^{-1} = 0.6180340$ | **হ্যাঁ** — সোনালি অনুপাতের ব্যস্ত |
| ০.৭৮৬ | $\\sqrt{\\varphi^{-1}} = 0.7861514$ | **আংশিক** — একটি প্রকৃত অনুপাতের বর্গমূল, সুবিধার জন্য বাছা |
| ১.২৭২ | $\\sqrt{\\varphi} = 1.2720196$ | **আংশিক** — একই কৌশল, প্রতিফলিত |
| ১.৪১৪ | $\\sqrt{2} = 1.4142136$ | **না।** ফিবোনাচ্চির সঙ্গে কোনো সম্পর্ক নেই |
| ১.৬১৮ | $\\varphi$ | **হ্যাঁ** |
| ২.৬১৮ | $\\varphi^{2} = 2.6180340$ | **হ্যাঁ** |

০.৩৮২ ও ০.৬১৮-কে মিলিত জোড়া দেখানো অভেদটি যাচাই করুন:

$$\\varphi^{-1} + \\varphi^{-2} = 0.6180340 + 0.3819660 = 1.0000000$$

এটি কাকতালীয় নয়; এটি $\\varphi^2 = \\varphi + 1$-কে $\\varphi^2$ দিয়ে ভাগ করা। **এটিই গোটা টুলবারের একমাত্র কাঠামোগত সম্পর্ক**, আর এ কারণেই ব্যবহারকারীরা ৩৮.২% ও ৬১.৮% স্তরকে পরিপূরক বলে আলোচনা করেন।

**এবার অস্বস্তিকর অংশটি স্পষ্ট করে বলুন। প্রাত্যহিক ব্যবহারের নয়টি অনুপাতের তিনটি — ০.৫০০, ১.৪১৪, আর তর্কসাপেক্ষে ০.৭৮৬ ও ১.২৭২ — সোনালি অনুপাতের পরিণতি নয়।** ০.৫০০ একটি অর্ধেক। ১.৪১৪ হলো $\\sqrt{2}$, ভিন্ন এক জ্যামিতিক ঐতিহ্য থেকে আমদানি করা। ০.৭৮৬ ও ১.২৭২ প্রকৃত অনুপাতে প্রয়োগ করা বর্গমূল, কারণ বর্গমূল এমন সংখ্যা দিয়েছিল যা একটি কাজের ফাঁকে পড়েছিল।

**হাতিয়ারটি আপনার কীভাবে ধরা উচিত তার জন্য এটি নির্ণায়ক।** একটি উদ্ভাবিত ব্যবস্থার ধর্ম এই যে তার সদস্য যোগ বা বিয়োগ করলে তা ভেঙে পড়ে। এই সেটটির সে ধর্ম নেই — সদস্য যোগ হয়েছে যখন কাজে লেগেছে, আর তার বংশপরিচয় পরে উল্টো-প্রকৌশলে বানানো হয়েছে, নয়তো বাদ দেওয়া হয়েছে। **আপনি ধরে আছেন প্রায়-গোল ভগ্নাংশের একটি গ্রিড, যাতে আংশিক গাণিতিক প্রলেপ দেওয়া।** এটি একে ফেলে দেওয়ার কারণ নয়। এটি কখনো স্তরটির সংখ্যাকেই স্তরটির প্রমাণ না ভাবার কারণ।

### ২. রিট্রেসমেন্ট স্তর, আর সূত্রটি কেন একটি ভারিত গড়

সুইং লো $L$ থেকে সুইং হাই $H$ পর্যন্ত একটি আপ-লেগে, রেঞ্জ $\\Delta = H - L$ ধরে:

$$R_r = H - r\\,\\Delta = H - r\\,(H - L)$$

পুনর্বিন্যাস করুন, আর হাতিয়ারের কাঠামো দৃশ্যমান হয়:

$$\\boxed{\\;R_r = (1 - r)\\,H + r\\,L\\;}$$

**প্রতিটি রিট্রেসমেন্ট স্তর দুটি অ্যাংকরের একটি উত্তল সমাবেশ, লো-তে ওজন $r$ ও হাই-তে ওজন $1 - r$।** DELTAPOLY-তে $r = 0.618$-এ:

$$R_{0.618} = 0.382 \\times 78.00 + 0.618 \\times 42.00 = 29.796 + 25.956 = 55.752$$

ডাউন-লেগে ভূমিকা উল্টে যায়:

$$R_r = L + r\\,(H - L) = r\\,H + (1 - r)\\,L$$

শিট দুটোই সামলায় B7-এর দিক-সুইচ দিয়ে: আপ-লেগে $+1$, ডাউন-লেগে $-1$। **দিক-চিহ্নটি অলংকার নয় — ভুল বসালে গ্রিডের প্রতিটি স্তর মধ্যবিন্দুর সাপেক্ষে প্রতিফলিত হয়**, যা যুক্তিসঙ্গত-দেখতে একগুচ্ছ সংখ্যা তৈরি করে যেগুলো সবই ভুল। আপ-লেগ পুলব্যাকে যে গ্রিডের ৬১.৮% স্তর ৫০% স্তরের *ওপরে* বসে, সেটিই দৃশ্যমান উপসর্গ।

### ৩. এক্সটেনশন স্তর

এক্সটেনশন ইমপালসের উৎস ছাড়িয়ে প্রক্ষেপণ করে:

$$X_e = L + e\\,\\Delta = e\\,H + (1 - e)\\,L, \\qquad e > 1$$

যেহেতু $e > 1$, সহগ $(1 - e)$ **ঋণাত্মক**। এক্সটেনশন আর অ্যাংকরদুটির মাঝে অন্তর্বেশন নয় — এটি *বহির্বেশন*, আর বহির্বেশন উপাদানে যে ত্রুটিই থাকুক তা বিবর্ধিত করে। দূরের এক্সটেনশনগুলো অনির্ভরযোগ্য হওয়ার গাণিতিক কারণ এটিই, আর ইশারা না করে এ বিষয়ে নির্দিষ্ট হওয়াই ভালো।

DELTAPOLY-তে:

$$X_{1.618} = 1.618 \\times 78.00 - 0.618 \\times 42.00 = 126.204 - 25.956 = 100.248$$
$$X_{2.618} = 2.618 \\times 78.00 - 1.618 \\times 42.00 = 204.204 - 67.956 = 136.248$$

### ৪. সুইং নির্বাচনের সমস্যা, সংবেদনশীলতা হিসেবে বিবৃত

**এটি অধ্যায়ের সবচেয়ে গুরুত্বপূর্ণ অংশ, আর এটি সতর্কবাণী নয় — এটি একটি অন্তরকলজ।**

রিট্রেসমেন্ট সূত্রটিকে প্রতিটি অ্যাংকরের সাপেক্ষে অন্তরীকরণ করুন:

$$\\frac{\\partial R_r}{\\partial H} = 1 - r, \\qquad \\frac{\\partial R_r}{\\partial L} = r$$

আর এক্সটেনশন সূত্রটি:

$$\\frac{\\partial X_e}{\\partial H} = e, \\qquad \\frac{\\partial X_e}{\\partial L} = 1 - e \\;\\;(\\text{ঋণাত্মক, মান } e - 1)$$

এগুলো যে সারণি তৈরি করে তা পড়ুন, কারণ এটি বলে দেয় আপনার গ্রিডের কতটা মতামত:

| স্তর | $H$-এর প্রতি সংবেদনশীলতা | $L$-এর প্রতি সংবেদনশীলতা | প্রতি ১ টাকা অ্যাংকর-ত্রুটিতে টাকা-চলন |
|---|---|---|---|
| ০.২৩৬ রিট্রেসমেন্ট | ০.৭৬৪ | ০.২৩৬ | সর্বোচ্চ ০.৭৬ |
| ০.৩৮২ রিট্রেসমেন্ট | ০.৬১৮ | ০.৩৮২ | সর্বোচ্চ ০.৬২ |
| ০.৫০০ রিট্রেসমেন্ট | ০.৫০০ | ০.৫০০ | দুই দিকেই ০.৫০ |
| ০.৬১৮ রিট্রেসমেন্ট | ০.৩৮২ | ০.৬১৮ | সর্বোচ্চ ০.৬২ |
| ০.৭৮৬ রিট্রেসমেন্ট | ০.২১৪ | ০.৭৮৬ | সর্বোচ্চ ০.৭৯ |
| ১.২৭২ এক্সটেনশন | ১.২৭২ | ০.২৭২ | সর্বোচ্চ **১.২৭** |
| ১.৬১৮ এক্সটেনশন | ১.৬১৮ | ০.৬১৮ | সর্বোচ্চ **১.৬২** |
| ২.৬১৮ এক্সটেনশন | ২.৬১৮ | ১.৬১৮ | সর্বোচ্চ **২.৬২** |

**রিট্রেসমেন্টে সংবেদনশীলতার যোগফল ঠিক এক**, কারণ স্তরটি একটি ভারিত গড় — এক অ্যাংকরের ত্রুটি আংশিক প্রশমিত হয় যদি অন্যটি একই দিকে সরে। **এক্সটেনশনে যোগফল $2e - 1$, যা একের বেশি ও নিরবধি বাড়ে।** $e = 2.618$-এ যোগফল ৪.২৩৬: ২.৬১৮ লক্ষ্য যেকোনো রিট্রেসমেন্ট স্তরের চেয়ে চার গুণ বেশি অ্যাংকর-ত্রুটি-সংবেদনশীল।

DELTAPOLY-তে প্রয়োগ করুন। অ্যাংকর B লো সরায় $+2.80$:

$$\\Delta R_{0.618} = 0.618 \\times 2.80 = 1.7304 \\;\\Rightarrow\\; \\frac{1.7304}{1.85} = 0.935\\,ATR$$
$$\\Delta X_{2.618} = -1.618 \\times 2.80 = -4.5304 \\;\\Rightarrow\\; 2.449\\,ATR$$

অ্যাংকর C হাই সরায় $-1.50$:

$$\\Delta R_{0.618} = 0.382 \\times (-1.50) = -0.573 \\;\\Rightarrow\\; 0.310\\,ATR$$
$$\\Delta X_{2.618} = 2.618 \\times (-1.50) = -3.927 \\;\\Rightarrow\\; 2.123\\,ATR$$

**সৎ প্রতিবেদনের রাশিটি সংজ্ঞায়িত করুন: একটি স্তরের অ্যাংকর বিচ্ছুরণ।** $m$টি সমর্থনযোগ্য অ্যাংকর-জোড়া থাকলে জানান

$$D_r = \\max_j R_r^{(j)} - \\min_j R_r^{(j)}, \\qquad \\tilde{D}_r = \\frac{D_r}{ATR}$$

DELTAPOLY-র ৬১.৮% স্তরে তিন অ্যাংকরজুড়ে: $D = 57.482 - 55.179 = 2.303$, অর্থাৎ $\\tilde{D} = 1.245$ ATR।

**যে স্তরের অ্যাংকর বিচ্ছুরণ কনফ্লুয়েন্স সহনশীলতা $\\tau$ ছাড়িয়ে যায় তা স্তর নয়। তা মতভেদের একটি অঞ্চল।** এখানে $\\tilde{D} = 1.245$ ATR বনাম $\\tau = 0.5$ ATR, তাই কড়া পাঠে DELTAPOLY-র ৬১.৮% "স্তর" ঐ পরীক্ষায় সরাসরি ব্যর্থ — আর বিশ্লেষণটি টিকে যায় কেবল এ কারণে যে তিনটির দুটি অ্যাংকর ঘটনাচক্রে একমত, হাতিয়ারটি একটি অদ্বিতীয় উত্তর দিয়েছে বলে নয়। **আপনার নোটে এটি লিখুন। বিশ্লেষণ ও বিজ্ঞাপনের পার্থক্য এটিই।**

### ৫. পূর্ব-প্রতিশ্রুতির নিয়ম, একটি প্রক্রিয়া হিসেবে লিখিত

§৪-এর প্রতিকার ভালো অনুপাত নয়। গ্রিড আঁকার আগে স্থির করা একটি নিয়ম।

$$\\text{Pivot}(t) \\text{ একটি সুইং হাই} \\iff H_t = \\max\\{H_{t-k}, \\ldots, H_{t+k}\\}, \\quad k = 8$$

সুইং লো-র জন্য প্রতিসম সংজ্ঞাসহ, আর লেগ সংজ্ঞায়িত কর্মক্ষম টাইমফ্রেমে সবচেয়ে সাম্প্রতিক সম্পূর্ণ পিভট-থেকে-পিভট চলন হিসেবে। **তিনটি ধর্ম একটি নিয়মকে চলনসই করে:**

১. **নির্ধারণবাদী** — একই উপাত্তে দুজন প্রয়োগ করলে একই অ্যাংকর পান।
২. **কার্যকারণগত** — অঙ্কনের তারিখের পরের কোনো তথ্য ব্যবহার করে না, তাই রবিবারে আঁকা গ্রিড বৃহস্পতিবারেও একই গ্রিড।
৩. **লিপিবদ্ধ** — $k$, টাইমফ্রেম ও বর্জন-ছাঁকনি নোটে লেভেলের আগেই লেখা।

**তৃতীয়টিই আসলে বাঁধে**, কারণ ব্যর্থতার ধরনটি খারাপ নিয়ম বাছা নয়; প্রথমটি অসুবিধাজনক গ্রিড দিলে নীরবে ভিন্ন একটি নিয়ম বেছে নেওয়া। নিয়মটি আগে লেখা না থাকলে ঐ ব্যর্থতা কোনো চিহ্ন রাখে না।

**আপনি কার্ভ-ফিট করছেন কি না তার পরীক্ষা যান্ত্রিক: আপনি এখন যে মোড় ব্যাখ্যা করছেন তার আগে, এক মাস আগে, কি এই গ্রিডটি আঁকতে পারতেন?** উত্তরটির জন্য যদি মোড়টি দরকার হয়, তবে গ্রিডটি বর্ণনা, পূর্বাভাস নয়।

### ৬. অধ্যায় ৩০-এর কাঠামোগত স্তরের বিপরীতে কনফ্লুয়েন্স স্কোরিং

ফিবোনাচ্চি তার জায়গা অর্জন করে কেবল স্বাধীন কারণে বিদ্যমান জিনিসকে ছেদ করে। সহনশীলতার ব্যান্ড ভোলাটিলিটির এককে সংজ্ঞায়িত করুন:

$$\\tau = m \\cdot ATR, \\qquad m = 0.5 \\;\\Rightarrow\\; \\tau = 0.5 \\times 1.85 = 0.925$$

আর প্রার্থী স্তর $F$-কে ওজন $w_j$ সহ কাঠামোগত রেফারেন্স $S_j$-এর বিপরীতে স্কোর করুন:

$$C(F) = \\sum_j w_j \\cdot \\mathbb{1}\\big[\\,|F - S_j| \\le \\tau\\,\\big]$$

| রেফারেন্স $S_j$ | ওজন $w_j$ | এই ওজন কেন |
|---|---|---|
| অধ্যায় ৩০-এর সম্পন্ন S/R জোন | ৩ | প্রকৃত অবস্থানরত ইনভেন্টরি; উপলব্ধ শক্তিশালীতম প্রমাণ |
| মুভিং অ্যাভারেজ (৫০-দিন, অ ৩৩) | ২ | ব্যাপকভাবে দেখা হয়, সত্যিই এর বিপরীতে লেনদেন হয় |
| *দ্বিতীয়* একটি সুইং থেকে ফিবোনাচ্চি ক্লাস্টার | ২ | দুটি স্বাধীন বিশ্লেষক-দল একই ব্যান্ডে পৌঁছেছে |
| রাউন্ড টাকার অঙ্ক | ১ | মনস্তাত্ত্বিকভাবে বাস্তব, কাঠামোগতভাবে দুর্বল (অ ৩০-এর ক্রম) |
| **পরীক্ষাধীন ফিবোনাচ্চি স্তরটি** | **০** | **এটি অবস্থান মনোনীত করে; এর ওপর ভোট দেয় না** |

$$\\text{কাজ} = \\begin{cases} \\text{অ ২৮/৩৪/৪০-এর ট্রিগার খুঁজুন} & C \\ge 3 \\\\ \\text{কেবল ওয়াচলিস্ট, অ্যালার্ট বসান} & 1 \\le C < 3 \\\\ \\text{স্তরটি সম্পূর্ণ উপেক্ষা করুন} & C = 0 \\end{cases}$$

**ফিবোনাচ্চি স্তরের ওপর শূন্য ওজনই এই অধ্যায়ের পুরো স্থাপত্যগত দাবি**, আর এটি অধ্যায় ৩০-এর এক্সহসশন অগ্রাহ্যকারীর সেই একই স্থাপত্য: এমন একটি উপাদান যাকে আকর্ষণীয় মোট ভোটে হারাতে পারে না, আর এমন একটি উপাদান যে নিজের পক্ষে ভোট দিতে পারে না। ফিবোনাচ্চি স্তরকে ২ ওজন দিন, আর কাছে একটি রাউন্ড অঙ্কসহ একটি খালি ৬১.৮% রেখা ৩ স্কোর করে লেনদেনযোগ্য হয়ে যায় — ঠিক যে ভুলটি ঠেকাতে অধ্যায়টির অস্তিত্ব।

DELTAPOLY-র ৫৫.৭৫২-তে: $C = 3 + 2 + 2 + 1 = 8$। অ্যাংকর B-র ৫৭.৪৮২-তে: $C = 1$। **একই অনুপাত, একই সেশন, আর কাজ বদলে "ট্রিগার খুঁজুন" থেকে "এখানে কিছু নেই" হয়ে যায়।**

### ৭. স্তর থেকে নয়, কনফ্লুয়েন্স থেকে পজিশনের আকার

$$E = \\text{ট্রিগার ক্লোজ}, \\qquad X = \\min_j\\{\\text{গুচ্ছের } S_j\\} - 0.5\\,ATR$$

$$R{:}R = \\frac{T - E}{E - X}, \\qquad p^{*} = \\frac{1}{1 + R{:}R}$$

**স্টপ নোঙর করা কনফ্লুয়েন্স গুচ্ছের সর্বনিম্ন সদস্যে, ফিবোনাচ্চি স্তরে নয় আর কখনোই প্রবেশে নয়।** যুক্তি হলো ট্রেডটির যুক্তি হলো *গুচ্ছ*; যে দামে যুক্তিটি মিথ্যা প্রমাণিত হয় তা সেই দাম যার নিচে গুচ্ছের প্রতিটি সদস্য ব্যর্থ হয়েছে। DELTAPOLY-তে তা ৫৫.১০-এর ৫০-দিনের MA, যা দেয় $X = 54.175$, আর ফলস্বরূপ ২৭.০৫% ব্রেক-ইভেন ০.৬১৮ অনুপাতের নয়, ঐ কাঠামোর ধর্ম।

### ৮. সময়ভিত্তিক ফিবোনাচ্চি, আর একে কেন বাদ দেওয়া হয়

$t_0 + 8, 13, 21, 34$ বারে মোড়বিন্দু প্রক্ষেপণ পরিবারের দুর্বলতম সদস্য এবং এই বই তা ব্যবহার করে না।

**সমন্বয় কার্যকারণের দাবি হলো স্থানাঙ্কটিতে কিছু একটা বসে থাকতে পারবে।** লিমিট অর্ডার দামে বসে। **তারিখে কিছুই বসে না।** সময়ে সূচিত কোনো অর্ডার বুক নেই, "মঙ্গলবার থেকে তেরো সেশন"-এ অবস্থান নেওয়া কোনো ইনভেন্টরি নেই, ফলে কোনো কার্যকারণই নেই — এমনকি স্বয়ংপূরকটিও নয়। এটি অসীম স্বাধীনতার মাত্রাও উপভোগ করে: উৎস বার, টাইমফ্রেম ও গণনা বাছুন, আর প্রায় যেকোনো প্রক্ষেপণের কাছেই একটি মোড়বিন্দু পাওয়া যাবে।

চিনে রাখুন যাতে এতে প্ররোচিত না হন। এর ওপর কিছু গড়বেন না।

### ৯. ডিএসই সংশোধন, যা ওপরের সবকিছুর আগে আসে

| বিকৃতি | গ্রিডের ওপর প্রভাব |
|---|---|
| ফ্লোর-প্রাইসের সময়কাল | ফ্লোরে একটি "সুইং লো" একটি প্রশাসনিক সীমা, পিভট নয়। **হাই-এর নিচের প্রতিটি স্তর ত্রুটিটি উত্তরাধিকারে পায়, $r$ দিয়ে মাপা।** অ ২৬ অনুযায়ী পিভট শনাক্তকরণের আগে সময়কালটি বাদ দিন। |
| সার্কিট-সীমার লক | সীমা-লক চরম হলো যেখানে এক্সচেঞ্জ চলনটি থামিয়েছে। DELTAPOLY-তে ঠিক এই দ্ব্যর্থতাই অ্যাংকর C তৈরি করে। **সীমা-লক বার চিহ্নিত করুন ও দুটি গ্রিডই জানান।** |
| রেকর্ড-ডেট গ্যাপ | এক্স-ডিভিডেন্ড বা এক্স-বোনাস গ্যাপ চাহিদা-সরবরাহের মিলন নয়। এর ওপর দিয়ে অ্যাংকর করলে এমন রেঞ্জ মাপা হয় যাতে কেউ লেনদেন করেনি। সমন্বিত সিরিজ ব্যবহার করুন বা সুইংটি প্রত্যাখ্যান করুন। |
| পাতলা তারল্য | সমন্বয় কার্যকারণের একটি বিক্ষিপ্ত ভিড় দরকার। টার্নওভারে শীর্ষ ৩০-এর নিচে কোনো ভিড় নেই, আর গ্রিড সাজসজ্জা। **কনফ্লুয়েন্স ব্যান্ড পরিষ্কার করা টাকার মূল্য গণনা করুন ও তার ও স্কোরের ছোটটিতে আকার নিন।** |
| নির্ভরযোগ্য শর্ট সাইড নেই | ব্যর্থ রিট্রেসমেন্ট — ভলিউমে ০.৭৮৬ কেটে নেমে যাওয়া দাম — পাঠ্যবইয়ের শর্ট আর এখানে কার্যকরযোগ্য নয়। **এটি দাঁড়ায়: কিনবেন না, আর লং থাকলে বেরিয়ে আসুন।** |`,
    },

    manual: {
      en: `**Scenario.** DELTAPOLY from §41.3. Swing low BDT 42.00 (B3), swing high BDT 78.00 (B2), current price BDT 56.40 (B5), ATR(14) BDT 1.85 (B6), direction $+1$ for an up-leg (B7). Confluence panel: 50-day MA 55.10 (B25), prior Chapter 30 S/R zone centre 56.00 (B26), tolerance multiple 0.5 (B27).

Everything below is done by hand. **Every figure reconciles to a cell in the §41 sheet, and cell references are given so you can check each line rather than trust it.**

**Step 0 — Fix the anchors before you compute anything.**

The rule, written down first: the leg is the most recent completed pivot-to-pivot impulse on the daily chart, where a pivot is an extreme unbroken for $k = 8$ bars on either side, with floor-price and record-date sessions excluded per Chapters 26 and 30.

Applied to DELTAPOLY that returns $L = 42.00$, $H = 78.00$. **Write those two numbers down and do not revise them for the rest of the exercise, whatever the grid turns out to say.** Step 12 is where you will be tempted.

**Step 1 — The range (B4).**
$$\\Delta = H - L = 78.00 - 42.00 = 36.00$$

Everything on the sheet is a multiple of this one number. **A 1% error here is a 1% error in every level simultaneously** — the levels are not independent estimates that can average out, they are a rigid ruler laid against one measurement.

**Step 2 — Retracement levels (B11:B15), from the direction switch.**

With B7 $= 1$, the sheet computes $B = \\$B\\$2 - \\$B\\$4 \\times A_{\\text{ratio}}$:

$$B_{11} = 78.00 - 36.00 \\times 0.236 = 78.00 - 8.496 = 69.504$$
$$B_{12} = 78.00 - 36.00 \\times 0.382 = 78.00 - 13.752 = 64.248$$
$$B_{13} = 78.00 - 36.00 \\times 0.500 = 78.00 - 18.000 = 60.000$$
$$B_{14} = 78.00 - 36.00 \\times 0.618 = 78.00 - 22.248 = 55.752$$
$$B_{15} = 78.00 - 36.00 \\times 0.786 = 78.00 - 28.296 = 49.704$$

Check B14 the other way, as the weighted average from §41.4:
$$0.382 \\times 78.00 + 0.618 \\times 42.00 = 29.796 + 25.956 = 55.752 \\;\\checkmark$$

**Step 3 — Distance from current price (C11:C15).** Signed, deliberately: positive means the level is above you.

$$C_{11} = 69.504 - 56.40 = +13.104$$
$$C_{12} = 64.248 - 56.40 = +7.848$$
$$C_{13} = 60.000 - 56.40 = +3.600$$
$$C_{14} = 55.752 - 56.40 = -0.648$$
$$C_{15} = 49.704 - 56.40 = -6.696$$

**Step 4 — Convert to ATR units (D11:D15), which is the step that ranks the grid.**

$$D_{11} = \\frac{13.104}{1.85} = 7.0832 \\qquad D_{12} = \\frac{7.848}{1.85} = 4.2422$$
$$D_{13} = \\frac{3.600}{1.85} = 1.9459 \\qquad D_{14} = \\frac{0.648}{1.85} = 0.3503 \\qquad D_{15} = \\frac{6.696}{1.85} = 3.6195$$

**Stop and look at this column, because it does the work the chart refuses to do.** The software drew five lines in identical colour and weight. In ATR terms they are 7.08, 4.24, 1.95, **0.35**, and 3.62 away. Only one of them is a decision you could plausibly face this week. **The other four are furniture.**

**Step 5 — The tolerance band (B28).**
$$\\tau = B_6 \\times B_{27} = 1.85 \\times 0.5 = 0.925$$

Expressed in volatility rather than taka, for exactly the reason Chapter 30 gave: a fixed BDT 0.925 band would be generous on a stock that moves BDT 0.30 a day and meaningless on one that moves BDT 4.00.

**Step 6 — Confluence flags (E11:E15).** Flag if the level is within $\\tau$ of either the 50-day MA (B25 = 55.10) or the prior S/R zone (B26 = 56.00).

| Cell | Level | $\lvert F - 55.10 \rvert$ | $\lvert F - 56.00 \rvert$ | Within 0.925? |
|---|---|---|---|---|
| E11 | 69.504 | 14.404 | 13.504 | no |
| E12 | 64.248 | 9.148 | 8.248 | no |
| E13 | 60.000 | 4.900 | 4.000 | no |
| **E14** | **55.752** | **0.652** | **0.248** | **FLAG** |
| E15 | 49.704 | 5.396 | 6.296 | no |

**Step 7 — Count the flags (B29).**
$$B_{29} = \\text{COUNTIF}(E_{11:15}, \\text{"FLAG"}) = 1$$

**One flag out of five, and that is the normal result.** A grid that flags three or four levels is telling you the tolerance is too wide, not that the stock is unusually structured. If you ever find yourself widening $\\tau$ until something flags, you have stopped analysing.

**Step 8 — Nearest level and its distance (B31, B32).**

$$B_{32} = \\min(D_{11:15}) = \\min(7.0832,\\, 4.2422,\\, 1.9459,\\, 0.3503,\\, 3.6195) = 0.3503$$
$$B_{31} = \\text{INDEX}(B_{11:15}, \\text{MATCH}(0.3503)) = 55.752$$

**Step 9 — The verdict (B34).** Three branches, evaluated in order:

- Is $B_{29} = 0$? No, it is 1 — so we do not return *"No confluence — a Fibonacci level alone is not a trade."*
- Is $B_{32} \\le 0.5$? Yes, 0.3503 — so we return:

> **"Confluence within 0.5 ATR of price — now demand a Ch 28/34/40 trigger."**

**Read the wording of that verdict carefully, because it is the chapter's operational rule compiled into a cell.** The best possible outcome the sheet can return is not "buy". It is *"now go and demand a trigger."* **There is no branch in this sheet that authorises a trade.** That is deliberate: a Fibonacci level, however clean, is a location, and the sheet is not permitted to pretend otherwise.

Note also the third branch, which fires when confluence exists but price is somewhere else: *"set an alert, do not pre-position."* **Pre-positioning at a distant level is the single most common way retail money is lost with this tool**, and step 15 prices it.

**Step 10 — Extension targets (B19:B22).** With B7 $= 1$ the sheet computes $B = \\$B\\$3 + \\$B\\$4 \\times A_{\\text{ratio}}$:

$$B_{19} = 42.00 + 36.00 \\times 1.272 = 42.00 + 45.792 = 87.792$$
$$B_{20} = 42.00 + 36.00 \\times 1.414 = 42.00 + 50.904 = 92.904$$
$$B_{21} = 42.00 + 36.00 \\times 1.618 = 42.00 + 58.248 = 100.248$$
$$B_{22} = 42.00 + 36.00 \\times 2.618 = 42.00 + 94.248 = 136.248$$

**Step 11 — Extension distances (C19:D22).**

$$C_{19} = 31.392 \\Rightarrow D_{19} = 16.9686 \\qquad C_{20} = 36.504 \\Rightarrow D_{20} = 19.7319$$
$$C_{21} = 43.848 \\Rightarrow D_{21} = 23.7016 \\qquad C_{22} = 79.848 \\Rightarrow D_{22} = 43.1611$$

**D22 is the most honest cell on the sheet.** It says the 2.618 target is forty-three average daily ranges away. Any model that requires you to hold a position across forty-three ATR of path has priced nothing about the intervening two hundred sessions of news, dividends, and regime change. **Report it; never size against it.**

**Step 12 — Now do the thing the chapter is really about: move the anchor.**

Repeat steps 1–9 with B3 changed from 42.00 to **44.80** — the closing-low reading of the same pivot, three sessions later. That is the only edit.

$$\\Delta' = 78.00 - 44.80 = 33.20$$
$$B'_{14} = 78.00 - 33.20 \\times 0.618 = 78.00 - 20.5176 = 57.4824$$

The level moved by:
$$57.4824 - 55.752 = 1.7304 \\;\\Rightarrow\\; \\frac{1.7304}{1.85} = 0.935\\;ATR$$

Confirm it against the derivative from §41.4: $\\partial R_{0.618} / \\partial L = 0.618$, and $0.618 \\times 2.80 = 1.7304$. ✓

Now re-run the flags on the new grid — $70.1648,\\; 65.3176,\\; 61.400,\\; 57.4824,\\; 51.9048$:

| Level | $\lvert F - 55.10 \rvert$ | $\lvert F - 56.00 \rvert$ | Within 0.925? |
|---|---|---|---|
| 57.4824 | 2.3824 | 1.4824 | no |
| 61.400 | 6.300 | 5.400 | no |

**B29 falls from 1 to 0.** And the verdict switches to the first branch:

> **"No confluence — a Fibonacci level alone is not a trade."**

**Sit with that.** One anchor edit — a defensible one, made by a chartist following a written rule that simply differs from yours — takes the sheet from *"demand a trigger"* to *"there is nothing here."* Nothing about DELTAPOLY changed. No information arrived. **The output of the tool was determined by a drawing convention.**

**Step 13 — And now move the other anchor, to see that it can cut the other way.**

Set B3 back to 42.00 and change B2 from 78.00 to **76.50**, the last clean high before the circuit-limit-locked session that printed 78.00.

$$\\Delta'' = 76.50 - 42.00 = 34.50, \\qquad B''_{14} = 76.50 - 34.50 \\times 0.618 = 76.50 - 21.321 = 55.179$$

$$|55.179 - 55.10| = 0.079 \\;\\le\\; 0.925 \\;\\Rightarrow\\; \\text{FLAG}$$

**Anchor C produces a *tighter* confluence than anchor A did** — 0.079 from the moving average against 0.652. Three anchors, and the 61.8% level ranges 55.179 to 57.4824:

$$D = 2.3034, \\qquad \\tilde{D} = \\frac{2.3034}{1.85} = 1.245\\;ATR$$

**The anchor dispersion is two and a half times the confluence tolerance.** Under the §41.4 rule this level formally fails: $\\tilde{D} > \\tau$ means the "level" is a region of disagreement. **The analysis survives only on the weaker claim that two of the three defensible anchors agree.** That is a real finding and it is what you should write in the note — not "61.8% support at 55.75".

**Step 14 — The curve-fit calculation. Do it once so you can never be fooled by it again.**

What swing low puts the 61.8% level exactly on the moving average?

$$78.00 - 0.618\\,(78.00 - L) = 55.10$$
$$0.618\\,(78.00 - L) = 22.90 \\;\\Rightarrow\\; 78.00 - L = 37.055 \\;\\Rightarrow\\; L = 40.945$$

**BDT 40.945 — one taka and five and a half poisha below the anchor we used.** Well inside the range of pivots a chart-reader could nominate on a three-month leg.

So the perfect chart is one taka away, always. **This is why the pre-committed rule from step 0 is not bureaucracy.** It is the only thing standing between you and a grid that always confirms what you already believed.

**Step 15 — Price the discipline, because "wait for a trigger" is otherwise advice rather than arithmetic.**

Price falls into the confluence band and prints a Chapter 28 bullish engulfing on 2.1× volume, closing 56.90.

Stop, anchored to the lowest member of the cluster (the MA at 55.10), not to the Fibonacci level and not to the entry:

$$X = 55.10 - (0.5 \\times 1.85) = 55.10 - 0.925 = 54.175$$

Trigger entry:
$$\\text{Risk} = 56.90 - 54.175 = 2.725, \\qquad \\text{Reward} = 64.248 - 56.90 = 7.348$$
$$R{:}R = \\frac{7.348}{2.725} = 2.6965, \\qquad p^{*} = \\frac{1}{1 + 2.6965} = 0.2705 = 27.05\\%$$

Pre-positioned entry at the first level price approached, the 50% line at 60.000, same stop:
$$\\text{Risk} = 60.000 - 54.175 = 5.825, \\qquad \\text{Reward} = 64.248 - 60.000 = 4.248$$
$$R{:}R = \\frac{4.248}{5.825} = 0.7293, \\qquad p^{*} = \\frac{1}{1.7293} = 0.5783 = 57.83\\%$$

| | Buy the 50% line | Wait for the trigger |
|---|---|---|
| Entry | 60.000 | **56.90** |
| Stop | 54.175 | 54.175 |
| Risk | 5.825 | **2.725** |
| Reward to 64.248 | 4.248 | **7.348** |
| $R{:}R$ | 0.729 | **2.697** |
| Break-even win rate | **57.83%** | **27.05%** |

**Buying the line needs 57.83%; waiting for the trigger needs 27.05%.** Identical stock, identical grid, identical stop, identical target. **The only difference is whether the entry was caused by a software drawing or by an observable event.**

And note the asymmetry in the DSE context: a method requiring 57.83% accuracy, before brokerage and before the fact that you cannot short the failures, is not a marginal method. **It is a losing one.**

**Step 16 — Place the result among its neighbours.**

| Setup | $R{:}R$ | Break-even |
|---|---|---|
| Ch 28 — confirmed morning star | 1.29 | 43.75% |
| Ch 29 — continuation retest | 2.76 | 26.57% |
| Ch 30 — polarity retest | 3.35 | 23.01% |
| **Ch 41 — confluence + trigger** | **2.70** | **27.05%** |
| Ch 41 — pre-positioned at the 50% line | 0.73 | **57.83%** |

**The Fibonacci confluence trade sits in the same band as the other structural entries, and the pre-positioned Fibonacci trade sits nowhere near them.** That is the correct summary of this tool's contribution. It does not beat Chapter 30's polarity retest; it finds a comparable setup when no polarity retest is on offer, **and only when it is used the way Chapter 30 taught you to use a level.**

**Step 17 — The DSE caveat the sheet cannot compute.**

Twenty-day average volume is 850,000 shares at around BDT 56, so a day's turnover is roughly BDT 4.76 crore. A single BDT 5 crore institutional ticket is **slightly more than one full day of volume** — meaning one participant can walk price through the entire confluence band in a session.

**The confluence score of 8 has no way of expressing that**, because every one of its four components measures history rather than depth. The 50-day MA does not know how many shares are behind it. The Chapter 30 zone knows how much volume traded there in the past, not how much is resting there now. **Compute the taka value alongside the score, every time, and size on the smaller of what the two suggest.**

And the last check, which is specific to this chapter and to this market: **the 78.00 high may be a circuit-limit artefact.** If it is, anchor A was never the right grid — anchor C was. The sheet will happily compute five levels to three decimal places from a number the exchange chose rather than the market. **Precision in the output tells you nothing about the quality of the input, and the Fibonacci tool is unusually good at disguising that.**`,
      bn: `**পরিস্থিতি।** §৪১.৩-এর DELTAPOLY। সুইং লো ৪২.০০ টাকা (B3), সুইং হাই ৭৮.০০ টাকা (B2), বর্তমান দাম ৫৬.৪০ টাকা (B5), ATR(১৪) ১.৮৫ টাকা (B6), আপ-লেগের জন্য দিক $+1$ (B7)। কনফ্লুয়েন্স প্যানেল: ৫০-দিনের MA ৫৫.১০ (B25), অধ্যায় ৩০-এর পূর্ববর্তী S/R জোনের কেন্দ্র ৫৬.০০ (B26), সহনশীলতা গুণক ০.৫ (B27)।

নিচের সবকিছু হাতে করা। **প্রতিটি সংখ্যা §৪১ শিটের একটি ঘরের সঙ্গে মেলে, আর ঘরের রেফারেন্স দেওয়া আছে যাতে আপনি প্রতিটি লাইন বিশ্বাস না করে যাচাই করতে পারেন।**

**ধাপ ০ — কিছু গণনার আগে অ্যাংকর স্থির করুন।**

নিয়মটি, আগে লেখা: লেগ হলো দৈনিক চার্টে সবচেয়ে সাম্প্রতিক সম্পূর্ণ পিভট-থেকে-পিভট ইমপালস, যেখানে পিভট মানে দুই পাশে $k = 8$ বার অভগ্ন একটি চরম, আর অধ্যায় ২৬ ও ৩০ অনুযায়ী ফ্লোর-প্রাইস ও রেকর্ড-ডেট সেশন বাদ।

DELTAPOLY-তে প্রয়োগ করলে তা দেয় $L = 42.00$, $H = 78.00$। **ঐ দুটি সংখ্যা লিখে ফেলুন এবং বাকি অনুশীলনে সেগুলো সংশোধন করবেন না, গ্রিড যা-ই বলুক।** ধাপ ১২-ই সেই জায়গা যেখানে আপনি প্রলুব্ধ হবেন।

**ধাপ ১ — রেঞ্জ (B4)।**
$$\\Delta = H - L = 78.00 - 42.00 = 36.00$$

শিটের সবকিছুই এই একটি সংখ্যার গুণিতক। **এখানে ১% ত্রুটি মানে একই সঙ্গে প্রতিটি স্তরে ১% ত্রুটি** — স্তরগুলো স্বাধীন অনুমান নয় যে গড়ে মিলিয়ে যাবে, তারা একটি পরিমাপের বিপরীতে রাখা একটি অনমনীয় স্কেল।

**ধাপ ২ — রিট্রেসমেন্ট স্তর (B11:B15), দিক-সুইচ থেকে।**

B7 $= 1$ হলে শিট গণনা করে $B = \\$B\\$2 - \\$B\\$4 \\times A_{\\text{ratio}}$:

$$B_{11} = 78.00 - 36.00 \\times 0.236 = 78.00 - 8.496 = 69.504$$
$$B_{12} = 78.00 - 36.00 \\times 0.382 = 78.00 - 13.752 = 64.248$$
$$B_{13} = 78.00 - 36.00 \\times 0.500 = 78.00 - 18.000 = 60.000$$
$$B_{14} = 78.00 - 36.00 \\times 0.618 = 78.00 - 22.248 = 55.752$$
$$B_{15} = 78.00 - 36.00 \\times 0.786 = 78.00 - 28.296 = 49.704$$

B14 অন্যভাবে যাচাই করুন, §৪১.৪-এর ভারিত গড় হিসেবে:
$$0.382 \\times 78.00 + 0.618 \\times 42.00 = 29.796 + 25.956 = 55.752 \\;\\checkmark$$

**ধাপ ৩ — বর্তমান দাম থেকে দূরত্ব (C11:C15)।** ইচ্ছাকৃতভাবে চিহ্নসহ: ধনাত্মক মানে স্তরটি আপনার ওপরে।

$$C_{11} = 69.504 - 56.40 = +13.104$$
$$C_{12} = 64.248 - 56.40 = +7.848$$
$$C_{13} = 60.000 - 56.40 = +3.600$$
$$C_{14} = 55.752 - 56.40 = -0.648$$
$$C_{15} = 49.704 - 56.40 = -6.696$$

**ধাপ ৪ — ATR এককে রূপান্তর (D11:D15), যে ধাপটি গ্রিডকে ক্রমে সাজায়।**

$$D_{11} = \\frac{13.104}{1.85} = 7.0832 \\qquad D_{12} = \\frac{7.848}{1.85} = 4.2422$$
$$D_{13} = \\frac{3.600}{1.85} = 1.9459 \\qquad D_{14} = \\frac{0.648}{1.85} = 0.3503 \\qquad D_{15} = \\frac{6.696}{1.85} = 3.6195$$

**থামুন ও এই কলামটি দেখুন, কারণ চার্ট যে কাজ করতে অস্বীকার করে এটি তা করে।** সফটওয়্যার অভিন্ন রঙ ও পুরুত্বে পাঁচটি রেখা এঁকেছে। ATR-এ তারা ৭.০৮, ৪.২৪, ১.৯৫, **০.৩৫**, আর ৩.৬২ দূরে। এর একটিই কেবল এমন সিদ্ধান্ত যার মুখোমুখি আপনি এ সপ্তাহে যুক্তিসঙ্গতভাবে হতে পারেন। **বাকি চারটি আসবাব।**

**ধাপ ৫ — সহনশীলতার ব্যান্ড (B28)।**
$$\\tau = B_6 \\times B_{27} = 1.85 \\times 0.5 = 0.925$$

টাকায় নয় ভোলাটিলিটিতে প্রকাশিত, ঠিক অধ্যায় ৩০ যে কারণ দিয়েছিল সেই কারণে: নির্দিষ্ট ০.৯২৫ টাকার ব্যান্ড দিনে ০.৩০ টাকা নড়া শেয়ারে উদার আর ৪.০০ টাকা নড়া শেয়ারে অর্থহীন।

**ধাপ ৬ — কনফ্লুয়েন্স চিহ্ন (E11:E15)।** স্তরটি ৫০-দিনের MA (B25 = ৫৫.১০) বা পূর্ববর্তী S/R জোন (B26 = ৫৬.০০)-এর $\\tau$-এর ভেতরে থাকলে চিহ্নিত করুন।

| ঘর | স্তর | $\lvert F - 55.10 \rvert$ | $\lvert F - 56.00 \rvert$ | ০.৯২৫-এর ভেতরে? |
|---|---|---|---|---|
| E11 | ৬৯.৫০৪ | ১৪.৪০৪ | ১৩.৫০৪ | না |
| E12 | ৬৪.২৪৮ | ৯.১৪৮ | ৮.২৪৮ | না |
| E13 | ৬০.০০০ | ৪.৯০০ | ৪.০০০ | না |
| **E14** | **৫৫.৭৫২** | **০.৬৫২** | **০.২৪৮** | **FLAG** |
| E15 | ৪৯.৭০৪ | ৫.৩৯৬ | ৬.২৯৬ | না |

**ধাপ ৭ — চিহ্ন গণনা (B29)।**
$$B_{29} = \\text{COUNTIF}(E_{11:15}, \\text{"FLAG"}) = 1$$

**পাঁচটির একটি চিহ্ন, আর এটিই স্বাভাবিক ফল।** যে গ্রিড তিন-চারটি স্তর চিহ্নিত করে তা বলছে সহনশীলতা বেশি চওড়া, শেয়ারটির কাঠামো অস্বাভাবিক তা নয়। কিছু একটা চিহ্নিত না হওয়া পর্যন্ত আপনি যদি কখনো $\\tau$ চওড়া করতে থাকেন, আপনি বিশ্লেষণ করা থামিয়ে দিয়েছেন।

**ধাপ ৮ — নিকটতম স্তর ও তার দূরত্ব (B31, B32)।**

$$B_{32} = \\min(D_{11:15}) = \\min(7.0832,\\, 4.2422,\\, 1.9459,\\, 0.3503,\\, 3.6195) = 0.3503$$
$$B_{31} = \\text{INDEX}(B_{11:15}, \\text{MATCH}(0.3503)) = 55.752$$

**ধাপ ৯ — রায় (B34)।** তিনটি শাখা, ক্রমানুসারে মূল্যায়িত:

- $B_{29} = 0$ কি? না, এটি ১ — তাই আমরা ফেরত দিই না *"কোনো কনফ্লুয়েন্স নেই — একা একটি ফিবোনাচ্চি স্তর ট্রেড নয়।"*
- $B_{32} \\le 0.5$ কি? হ্যাঁ, ০.৩৫০৩ — তাই আমরা ফেরত দিই:

> **"দামের ০.৫ ATR-এর ভেতরে কনফ্লুয়েন্স — এবার অ ২৮/৩৪/৪০-এর ট্রিগার দাবি করুন।"**

**ঐ রায়ের শব্দচয়ন মন দিয়ে পড়ুন, কারণ এটি অধ্যায়ের পরিচালন নিয়মকে একটি ঘরে সংকলিত করা।** শিট যে সেরা ফলাফল ফেরত দিতে পারে তা "কিনুন" নয়। তা *"এবার গিয়ে একটি ট্রিগার দাবি করুন।"* **এই শিটে এমন কোনো শাখা নেই যা একটি ট্রেডের অনুমোদন দেয়।** এটি ইচ্ছাকৃত: একটি ফিবোনাচ্চি স্তর, যত পরিচ্ছন্নই হোক, একটি অবস্থান, আর শিটকে অন্য কিছু ভান করার অনুমতি নেই।

তৃতীয় শাখাটিও লক্ষ করুন, যা চালু হয় যখন কনফ্লুয়েন্স আছে কিন্তু দাম অন্য কোথাও: *"অ্যালার্ট বসান, আগেভাগে অবস্থান নেবেন না।"* **দূরের স্তরে আগেভাগে অবস্থান নেওয়াই এই হাতিয়ারে খুচরা টাকা হারানোর সবচেয়ে সাধারণ উপায়**, আর ধাপ ১৫ তার দাম হিসাব করে।

**ধাপ ১০ — এক্সটেনশন লক্ষ্য (B19:B22)।** B7 $= 1$ হলে শিট গণনা করে $B = \\$B\\$3 + \\$B\\$4 \\times A_{\\text{ratio}}$:

$$B_{19} = 42.00 + 36.00 \\times 1.272 = 42.00 + 45.792 = 87.792$$
$$B_{20} = 42.00 + 36.00 \\times 1.414 = 42.00 + 50.904 = 92.904$$
$$B_{21} = 42.00 + 36.00 \\times 1.618 = 42.00 + 58.248 = 100.248$$
$$B_{22} = 42.00 + 36.00 \\times 2.618 = 42.00 + 94.248 = 136.248$$

**ধাপ ১১ — এক্সটেনশনের দূরত্ব (C19:D22)।**

$$C_{19} = 31.392 \\Rightarrow D_{19} = 16.9686 \\qquad C_{20} = 36.504 \\Rightarrow D_{20} = 19.7319$$
$$C_{21} = 43.848 \\Rightarrow D_{21} = 23.7016 \\qquad C_{22} = 79.848 \\Rightarrow D_{22} = 43.1611$$

**D22 শিটের সবচেয়ে সৎ ঘর।** এটি বলে ২.৬১৮ লক্ষ্যটি তেতাল্লিশটি গড় দৈনিক রেঞ্জ দূরে। যে মডেল আপনাকে তেতাল্লিশ ATR পথজুড়ে একটি পজিশন ধরে রাখতে বলে তা মধ্যবর্তী দুইশো সেশনের খবর, লভ্যাংশ ও ব্যবস্থা-পরিবর্তনের কিছুই হিসাবে আনেনি। **এটি জানান; কখনো এর বিপরীতে আকার নেবেন না।**

**ধাপ ১২ — এবার অধ্যায়টি আসলে যা নিয়ে তা করুন: অ্যাংকর সরান।**

ধাপ ১–৯ আবার চালান, B3 ৪২.০০ থেকে **৪৪.৮০** করে — একই পিভটের ক্লোজিং-লো পাঠ, তিন সেশন পরে। এটাই একমাত্র সম্পাদনা।

$$\\Delta' = 78.00 - 44.80 = 33.20$$
$$B'_{14} = 78.00 - 33.20 \\times 0.618 = 78.00 - 20.5176 = 57.4824$$

স্তরটি সরল:
$$57.4824 - 55.752 = 1.7304 \\;\\Rightarrow\\; \\frac{1.7304}{1.85} = 0.935\\;ATR$$

§৪১.৪-এর অন্তরকলজের বিপরীতে যাচাই করুন: $\\partial R_{0.618} / \\partial L = 0.618$, আর $0.618 \\times 2.80 = 1.7304$। ✓

এবার নতুন গ্রিডে চিহ্নগুলো আবার চালান — $70.1648,\\; 65.3176,\\; 61.400,\\; 57.4824,\\; 51.9048$:

| স্তর | $\lvert F - 55.10 \rvert$ | $\lvert F - 56.00 \rvert$ | ০.৯২৫-এর ভেতরে? |
|---|---|---|---|
| ৫৭.৪৮২৪ | ২.৩৮২৪ | ১.৪৮২৪ | না |
| ৬১.৪০০ | ৬.৩০০ | ৫.৪০০ | না |

**B29 ১ থেকে নেমে ০ হয়।** আর রায় প্রথম শাখায় বদলে যায়:

> **"কোনো কনফ্লুয়েন্স নেই — একা একটি ফিবোনাচ্চি স্তর ট্রেড নয়।"**

**একটু থামুন।** একটি অ্যাংকর সম্পাদনা — একটি সমর্থনযোগ্য সম্পাদনা, যা এমন এক চার্টিস্ট করেছেন যিনি একটি লিখিত নিয়ম মানছেন যা কেবল আপনার নিয়ম থেকে আলাদা — শিটকে *"ট্রিগার দাবি করুন"* থেকে *"এখানে কিছু নেই"*-এ নিয়ে যায়। DELTAPOLY-র কিছুই বদলায়নি। কোনো তথ্য আসেনি। **হাতিয়ারের ফলাফল নির্ধারণ করেছে একটি অঙ্কন-রীতি।**

**ধাপ ১৩ — এবার অন্য অ্যাংকরটি সরান, দেখতে যে এটি উল্টো দিকেও কাটতে পারে।**

B3 ফের ৪২.০০ করুন আর B2 ৭৮.০০ থেকে **৭৬.৫০** করুন, ৭৮.০০ ছাপা সার্কিট-সীমা-লক সেশনের আগের শেষ পরিচ্ছন্ন হাই।

$$\\Delta'' = 76.50 - 42.00 = 34.50, \\qquad B''_{14} = 76.50 - 34.50 \\times 0.618 = 76.50 - 21.321 = 55.179$$

$$|55.179 - 55.10| = 0.079 \\;\\le\\; 0.925 \\;\\Rightarrow\\; \\text{FLAG}$$

**অ্যাংকর C অ্যাংকর A-র চেয়ে *আঁটসাঁট* কনফ্লুয়েন্স তৈরি করে** — মুভিং অ্যাভারেজ থেকে ০.৬৫২-এর বদলে ০.০৭৯। তিনটি অ্যাংকর, আর ৬১.৮% স্তর ৫৫.১৭৯ থেকে ৫৭.৪৮২৪ বিস্তৃত:

$$D = 2.3034, \\qquad \\tilde{D} = \\frac{2.3034}{1.85} = 1.245\\;ATR$$

**অ্যাংকর বিচ্ছুরণ কনফ্লুয়েন্স সহনশীলতার আড়াই গুণ।** §৪১.৪-এর নিয়মে এই স্তরটি আনুষ্ঠানিকভাবে ব্যর্থ: $\\tilde{D} > \\tau$ মানে "স্তর"টি মতভেদের একটি অঞ্চল। **বিশ্লেষণটি টেকে কেবল এই দুর্বলতর দাবিতে যে তিনটি সমর্থনযোগ্য অ্যাংকরের দুটি একমত।** এটি একটি প্রকৃত ফলাফল আর নোটে এটিই লেখা উচিত — "৫৫.৭৫-এ ৬১.৮% সাপোর্ট" নয়।

**ধাপ ১৪ — কার্ভ-ফিটের গণনা। একবার করুন যাতে কখনো এতে ঠকতে না হয়।**

কোন সুইং লো ৬১.৮% স্তরকে ঠিক মুভিং অ্যাভারেজে বসাবে?

$$78.00 - 0.618\\,(78.00 - L) = 55.10$$
$$0.618\\,(78.00 - L) = 22.90 \\;\\Rightarrow\\; 78.00 - L = 37.055 \\;\\Rightarrow\\; L = 40.945$$

**৪০.৯৪৫ টাকা — আমাদের ব্যবহৃত অ্যাংকরের চেয়ে এক টাকা সাড়ে পাঁচ পয়সা নিচে।** একটি তিন মাসের লেগে একজন চার্ট-পাঠক যেসব পিভট মনোনীত করতে পারেন তার পরিসরের ভালোভাবেই ভেতরে।

তাই নিখুঁত চার্টটি সবসময় এক টাকা দূরে। **এ কারণেই ধাপ ০-এর পূর্ব-প্রতিশ্রুত নিয়মটি আমলাতন্ত্র নয়।** আপনি আগে থেকেই যা বিশ্বাস করতেন তা সবসময় নিশ্চিত করা একটি গ্রিড আর আপনার মাঝে কেবল ঐটিই দাঁড়িয়ে আছে।

**ধাপ ১৫ — শৃঙ্খলার দাম হিসাব করুন, কারণ "ট্রিগারের অপেক্ষা করুন" নইলে পাটিগণিত নয়, উপদেশ।**

দাম কনফ্লুয়েন্স ব্যান্ডে নামে আর ২.১× ভলিউমে অধ্যায় ২৮-এর একটি বুলিশ এনগালফিং ছাপে, ৫৬.৯০-এ ক্লোজ।

স্টপ, গুচ্ছের সর্বনিম্ন সদস্যে (৫৫.১০-এর MA) নোঙর করা, ফিবোনাচ্চি স্তরে নয় ও প্রবেশে নয়:

$$X = 55.10 - (0.5 \\times 1.85) = 55.10 - 0.925 = 54.175$$

ট্রিগার প্রবেশ:
$$\\text{Risk} = 56.90 - 54.175 = 2.725, \\qquad \\text{Reward} = 64.248 - 56.90 = 7.348$$
$$R{:}R = \\frac{7.348}{2.725} = 2.6965, \\qquad p^{*} = \\frac{1}{1 + 2.6965} = 0.2705 = 27.05\\%$$

দাম যে প্রথম স্তরের কাছে এসেছিল সেখানে আগেভাগে প্রবেশ, ৬০.০০০-এ ৫০% রেখা, একই স্টপ:
$$\\text{Risk} = 60.000 - 54.175 = 5.825, \\qquad \\text{Reward} = 64.248 - 60.000 = 4.248$$
$$R{:}R = \\frac{4.248}{5.825} = 0.7293, \\qquad p^{*} = \\frac{1}{1.7293} = 0.5783 = 57.83\\%$$

| | ৫০% রেখা কেনা | ট্রিগারের অপেক্ষা |
|---|---|---|
| এন্ট্রি | ৬০.০০০ | **৫৬.৯০** |
| স্টপ | ৫৪.১৭৫ | ৫৪.১৭৫ |
| ঝুঁকি | ৫.৮২৫ | **২.৭২৫** |
| ৬৪.২৪৮ পর্যন্ত পুরস্কার | ৪.২৪৮ | **৭.৩৪৮** |
| $R{:}R$ | ০.৭২৯ | **২.৬৯৭** |
| ব্রেক-ইভেন উইন রেট | **৫৭.৮৩%** | **২৭.০৫%** |

**রেখা কিনতে দরকার ৫৭.৮৩%; ট্রিগারের অপেক্ষায় দরকার ২৭.০৫%।** অভিন্ন শেয়ার, অভিন্ন গ্রিড, অভিন্ন স্টপ, অভিন্ন লক্ষ্য। **একমাত্র পার্থক্য হলো প্রবেশটি একটি সফটওয়্যারের অঙ্কনে হয়েছিল না একটি পর্যবেক্ষণযোগ্য ঘটনায়।**

আর ডিএসই প্রেক্ষাপটে অসামঞ্জস্যটি লক্ষ করুন: যে পদ্ধতিতে ৫৭.৮৩% নির্ভুলতা লাগে, ব্রোকারেজের আগে ও ব্যর্থতাগুলো শর্ট করা যায় না এই সত্যের আগে, তা প্রান্তিক পদ্ধতি নয়। **তা একটি লোকসানি পদ্ধতি।**

**ধাপ ১৬ — ফলাফলটিকে তার প্রতিবেশীদের মাঝে বসান।**

| সেটআপ | $R{:}R$ | ব্রেক-ইভেন |
|---|---|---|
| অ ২৮ — নিশ্চিত মর্নিং স্টার | ১.২৯ | ৪৩.৭৫% |
| অ ২৯ — কন্টিনিউয়েশন রিটেস্ট | ২.৭৬ | ২৬.৫৭% |
| অ ৩০ — পোলারিটি রিটেস্ট | ৩.৩৫ | ২৩.০১% |
| **অ ৪১ — কনফ্লুয়েন্স + ট্রিগার** | **২.৭০** | **২৭.০৫%** |
| অ ৪১ — ৫০% রেখায় আগেভাগে অবস্থান | ০.৭৩ | **৫৭.৮৩%** |

**ফিবোনাচ্চি কনফ্লুয়েন্স ট্রেড অন্য কাঠামোগত প্রবেশগুলোর একই ব্যান্ডে বসে, আর আগেভাগে-অবস্থান নেওয়া ফিবোনাচ্চি ট্রেড তাদের ধারেকাছেও বসে না।** এই হাতিয়ারের অবদানের সঠিক সারাংশ এটিই। এটি অধ্যায় ৩০-এর পোলারিটি রিটেস্টকে হারায় না; কোনো পোলারিটি রিটেস্ট না থাকলে এটি একটি তুলনীয় সেটআপ খুঁজে দেয়, **আর কেবল তখনই যখন অধ্যায় ৩০ আপনাকে একটি স্তর ব্যবহার করতে যেভাবে শিখিয়েছে সেভাবে এটি ব্যবহৃত হয়।**

**ধাপ ১৭ — শিট যে ডিএসই সতর্কতা গণনা করতে পারে না।**

কুড়ি-দিনের গড় ভলিউম প্রায় ৫৬ টাকায় ৮,৫০,০০০ শেয়ার, তাই এক দিনের টার্নওভার প্রায় ৪.৭৬ কোটি টাকা। ৫ কোটি টাকার একটি একক প্রাতিষ্ঠানিক টিকিট **এক পূর্ণ দিনের ভলিউমের সামান্য বেশি** — অর্থাৎ একজন অংশগ্রহণকারী এক সেশনে গোটা কনফ্লুয়েন্স ব্যান্ডের মধ্য দিয়ে দাম হাঁটিয়ে নিতে পারেন।

**৮ কনফ্লুয়েন্স স্কোরের তা প্রকাশ করার কোনো উপায় নেই**, কারণ এর চারটি উপাদানের প্রতিটিই গভীরতা নয়, ইতিহাস মাপে। ৫০-দিনের MA জানে না তার পেছনে কত শেয়ার আছে। অধ্যায় ৩০-এর জোন জানে অতীতে সেখানে কত ভলিউম হয়েছে, এখন সেখানে কত বসে আছে তা নয়। **প্রতিবার স্কোরের পাশে টাকার মূল্য গণনা করুন, আর দুটি যা বলে তার ছোটটিতে আকার নিন।**

আর শেষ যাচাই, যা এই অধ্যায় ও এই বাজারের নির্দিষ্ট: **৭৮.০০ হাই একটি সার্কিট-সীমার কৃত্রিম ফল হতে পারে।** হলে অ্যাংকর A কখনোই সঠিক গ্রিড ছিল না — অ্যাংকর C ছিল। বাজার নয় বরং এক্সচেঞ্জ যে সংখ্যাটি বেছেছে, শিট তা থেকেই দশমিকের তিন ঘর পর্যন্ত পাঁচটি স্তর সানন্দে গণনা করবে। **ফলাফলের নির্ভুলতা উপাদানের গুণমান সম্পর্কে কিছুই বলে না, আর ফিবোনাচ্চি টুল তা আড়াল করতে অস্বাভাবিক রকম দক্ষ।**`,
    },

    mistakes: {
      en: `1. **Re-choosing the swing after the fact so the level "works".** This is the defining error of the entire tool and it deserves the first place. On DELTAPOLY, a swing low of **40.945 instead of 42.00** puts the 61.8% level exactly on the 50-day moving average at 55.10 — a shift of one taka and five and a half poisha, well inside the range of pivots anyone could nominate. **It leaves no evidence.** There is no error message, the grid looks textbook, and the chart you publish is indistinguishable from analysis. The only defence is the written rule from step 0, applied before the grid is drawn and not revised after.
2. **Treating a Fibonacci level as a signal instead of a location.** Pre-positioning a buy at the 50% line at **60.000** instead of waiting for a trigger inside the confluence band at **56.90** moves the required win rate from **27.05% to 57.83%** — identical stock, identical stop at 54.175, identical target at 64.248. **A method needing 57.83% before costs on a market with no short side is not a method.**
3. **Giving all five lines equal weight because the software drew them the same colour.** On DELTAPOLY the ATR column reads 7.08, 4.24, 1.95, **0.35**, 3.62. Four of the five levels are not decisions you face this week. **Skip the D column and you will find yourself defending a level three and a half ATR away as though it mattered today.**
4. **Believing 0.500 and 1.414 are Fibonacci ratios.** 0.500 is a half — no derivation exists. 1.414 is $\\sqrt{2}$, from a different tradition entirely. **This matters because it tells you the set was assembled, not derived**, and an assembled set carries no authority beyond the fact that people watch it.
5. **Setting the direction flag (B7) wrong.** With $-1$ on an up-leg pullback the sheet reflects every level about the midpoint and returns a full grid of plausible-looking numbers that are all wrong. The visible symptom is a 61.8% level sitting *above* the 50% level. **The sheet produces no error; it produces confident nonsense.**
6. **Sizing against the 2.618 extension.** DELTAPOLY's 2.618 target is 136.248 — **43.16 ATR from current price**, and its anchor dispersion across three defensible swings is BDT 4.530. A target whose location is uncertain by two and a half days of volatility, two hundred sessions into the future, prices none of the news, dividends or regime changes in between. Report it; never size on it.
7. **Anchoring the stop to the Fibonacci level or to your entry.** The stop belongs at **54.175**, half an ATR below the *lowest member of the confluence cluster* — because that is the price at which the moving average, the Chapter 30 zone and the 61.8% level have all failed simultaneously. A stop under 55.752 because that is "the Fib level" falsifies one argument out of three and gets you stopped out of a thesis that is still intact.
8. **Anchoring a swing to a circuit-limit lock or a floor-price session.** DELTAPOLY's 78.00 high may be exactly this, which is why anchor C exists at 76.50. **A limit-locked extreme is where the exchange stopped the move, not where buyers ran out**, and the tool depends on the two extremes more than on any other input. On the DSE, the extremes of a strong move are precisely the prints most likely to be regulatory artefacts.
9. **Widening the tolerance $\\tau$ until something flags.** At $\\tau = 0.925$ DELTAPOLY flags one level out of five, which is the normal result. Push $\\tau$ to 1.5 ATR and you will flag two or three, and the flag will have stopped meaning anything. **If you are adjusting the tolerance after seeing the flags, you are no longer running a test.**
10. **Letting the Fibonacci level vote in its own confluence score.** Give it a weight of 2 and a bare 61.8% line with a round figure nearby scores 3 and becomes "tradable". **The level nominates the location; it contributes zero to the evidence.** This is Chapter 30's exhaustion-override architecture in a new domain.
11. **Running the grid on an illiquid counter.** The coordination mechanism requires a large dispersed crowd computing the same numbers. Below the top thirty by turnover that crowd does not exist, and **the levels are lines with nobody standing at them** — decoration with three decimal places.
12. **Reading a failed retracement as a short.** Price slicing through the 0.786 level at 49.704 on volume is a textbook short in the literature. **On the DSE it resolves to two actions and no more: do not buy, and exit if long.** Importing the textbook conclusion imports a short side we do not have.`,
      bn: `১. **স্তরটি যাতে "কাজ করে" সেজন্য ঘটনার পরে সুইং পুনরায় বাছা।** এটি গোটা হাতিয়ারটির সংজ্ঞায়ক ভুল আর প্রথম স্থানটি এর প্রাপ্য। DELTAPOLY-তে ৪২.০০-এর বদলে **৪০.৯৪৫** সুইং লো ৬১.৮% স্তরকে ঠিক ৫৫.১০-এর ৫০-দিনের মুভিং অ্যাভারেজে বসায় — এক টাকা সাড়ে পাঁচ পয়সার সরণ, যে কেউ মনোনীত করতে পারেন এমন পিভটের পরিসরের ভালোভাবেই ভেতরে। **এটি কোনো প্রমাণ রাখে না।** কোনো ভুলবার্তা নেই, গ্রিড পাঠ্যবইসুলভ দেখায়, আর আপনার প্রকাশ করা চার্ট বিশ্লেষণ থেকে অভিন্ন। একমাত্র প্রতিরক্ষা ধাপ ০-এর লিখিত নিয়ম, গ্রিড আঁকার আগে প্রয়োগ ও পরে অসংশোধিত।
২. **ফিবোনাচ্চি স্তরকে অবস্থান নয়, সংকেত গণ্য করা।** কনফ্লুয়েন্স ব্যান্ডের ভেতরে **৫৬.৯০**-এ ট্রিগারের অপেক্ষা না করে **৬০.০০০**-এ ৫০% রেখায় আগেভাগে ক্রয় বসালে প্রয়োজনীয় উইন রেট **২৭.০৫% থেকে ৫৭.৮৩%** হয় — অভিন্ন শেয়ার, ৫৪.১৭৫-এ অভিন্ন স্টপ, ৬৪.২৪৮-এ অভিন্ন লক্ষ্য। **শর্ট সাইড নেই এমন বাজারে খরচের আগেই ৫৭.৮৩% লাগে যে পদ্ধতিতে, তা পদ্ধতি নয়।**
৩. **সফটওয়্যার একই রঙে এঁকেছে বলে পাঁচটি রেখাকেই সমান ওজন দেওয়া।** DELTAPOLY-তে ATR কলাম পড়ে ৭.০৮, ৪.২৪, ১.৯৫, **০.৩৫**, ৩.৬২। পাঁচটির চারটিই এ সপ্তাহে আপনার মুখোমুখি হওয়া সিদ্ধান্ত নয়। **D কলাম বাদ দিন, আর দেখবেন সাড়ে তিন ATR দূরের একটি স্তরকে আজকের বিষয় ভেবে সমর্থন করছেন।**
৪. **০.৫০০ ও ১.৪১৪-কে ফিবোনাচ্চি অনুপাত ভাবা।** ০.৫০০ একটি অর্ধেক — কোনো উদ্ভব নেই। ১.৪১৪ হলো $\\sqrt{2}$, সম্পূর্ণ ভিন্ন এক ঐতিহ্য থেকে। **এটি গুরুত্বপূর্ণ কারণ এটি বলে দেয় সেটটি উদ্ভাবিত নয়, সংকলিত**, আর সংকলিত সেটের কর্তৃত্ব কেবল এটুকুই যে মানুষ তা দেখে।
৫. **দিক-চিহ্ন (B7) ভুল বসানো।** আপ-লেগ পুলব্যাকে $-1$ দিলে শিট প্রতিটি স্তরকে মধ্যবিন্দুর সাপেক্ষে প্রতিফলিত করে ও একগুচ্ছ যুক্তিসঙ্গত-দেখতে সংখ্যা ফেরত দেয় যেগুলো সবই ভুল। দৃশ্যমান উপসর্গ হলো ৫০% স্তরের *ওপরে* বসা একটি ৬১.৮% স্তর। **শিট কোনো ভুল দেখায় না; এটি আত্মবিশ্বাসী অর্থহীনতা দেখায়।**
৬. **২.৬১৮ এক্সটেনশনের বিপরীতে আকার নেওয়া।** DELTAPOLY-র ২.৬১৮ লক্ষ্য ১৩৬.২৪৮ — বর্তমান দাম থেকে **৪৩.১৬ ATR**, আর তিনটি সমর্থনযোগ্য সুইংজুড়ে এর অ্যাংকর বিচ্ছুরণ ৪.৫৩০ টাকা। যে লক্ষ্যের অবস্থান আড়াই দিনের অস্থিরতার মধ্যে অনিশ্চিত, দুইশো সেশন ভবিষ্যতে, তা মধ্যবর্তী খবর, লভ্যাংশ বা ব্যবস্থা-পরিবর্তনের কিছুই হিসাবে আনে না। জানান; কখনো এতে আকার নেবেন না।
৭. **স্টপকে ফিবোনাচ্চি স্তরে বা আপনার প্রবেশে নোঙর করা।** স্টপের জায়গা **৫৪.১৭৫**, *কনফ্লুয়েন্স গুচ্ছের সর্বনিম্ন সদস্যের* অর্ধ ATR নিচে — কারণ ঐ দামেই মুভিং অ্যাভারেজ, অধ্যায় ৩০-এর জোন ও ৬১.৮% স্তর একসঙ্গে ব্যর্থ হয়েছে। "ফিব স্তর" বলে ৫৫.৭৫২-এর নিচে স্টপ তিনটির একটি যুক্তি মিথ্যা প্রমাণ করে এবং এখনো অটুট একটি যুক্তি থেকে আপনাকে বের করে দেয়।
৮. **সার্কিট-সীমার লক বা ফ্লোর-প্রাইসের সেশনে সুইং অ্যাংকর করা।** DELTAPOLY-র ৭৮.০০ হাই হয়তো ঠিক তা-ই, আর সে কারণেই ৭৬.৫০-এ অ্যাংকর C-র অস্তিত্ব। **সীমা-লক চরম হলো যেখানে এক্সচেঞ্জ চলনটি থামিয়েছে, ক্রেতা ফুরিয়ে যাওয়ার জায়গা নয়**, আর হাতিয়ারটি অন্য যেকোনো উপাদানের চেয়ে ঐ দুই চরমের ওপর বেশি নির্ভর করে। ডিএসই-তে একটি শক্তিশালী চলনের চরমগুলোই সবচেয়ে বেশি সম্ভাবনায় নিয়ন্ত্রক কৃত্রিম ফল।
৯. **কিছু চিহ্নিত না হওয়া পর্যন্ত সহনশীলতা $\\tau$ চওড়া করা।** $\\tau = 0.925$-এ DELTAPOLY পাঁচটির একটি চিহ্নিত করে, যা স্বাভাবিক ফল। $\\tau$ ১.৫ ATR করুন, দুই-তিনটি চিহ্নিত হবে, আর চিহ্নের কোনো অর্থ থাকবে না। **চিহ্ন দেখার পরে সহনশীলতা সমন্বয় করলে আপনি আর কোনো পরীক্ষা চালাচ্ছেন না।**
১০. **ফিবোনাচ্চি স্তরকে নিজের কনফ্লুয়েন্স স্কোরে ভোট দিতে দেওয়া।** একে ২ ওজন দিন, আর কাছে একটি রাউন্ড অঙ্কসহ একটি খালি ৬১.৮% রেখা ৩ স্কোর করে "লেনদেনযোগ্য" হয়ে যায়। **স্তরটি অবস্থান মনোনীত করে; প্রমাণে এটি শূন্য যোগ করে।** এটি নতুন ক্ষেত্রে অধ্যায় ৩০-এর এক্সহসশন-অগ্রাহ্যকারীর স্থাপত্য।
১১. **তারল্যহীন কাউন্টারে গ্রিড চালানো।** সমন্বয় কার্যকারণের দাবি একটি বড় বিক্ষিপ্ত ভিড় একই সংখ্যা গণনা করবে। টার্নওভারে শীর্ষ ত্রিশের নিচে ঐ ভিড় নেই, আর **স্তরগুলো এমন রেখা যাতে কেউ দাঁড়িয়ে নেই** — দশমিকের তিন ঘরসহ সাজসজ্জা।
১২. **ব্যর্থ রিট্রেসমেন্টকে শর্ট হিসেবে পড়া।** ভলিউমে ৪৯.৭০৪-এ ০.৭৮৬ স্তর কেটে নেমে যাওয়া দাম সাহিত্যে পাঠ্যবইয়ের শর্ট। **ডিএসই-তে এটি দুটি কাজে গিয়ে দাঁড়ায়, তার বেশি নয়: কিনবেন না, আর লং থাকলে বেরিয়ে আসুন।** পাঠ্যবইয়ের উপসংহার আমদানি করা মানে আমাদের না-থাকা একটি শর্ট সাইড আমদানি করা।`,
    },

    tips: {
      en: `1. **Write the swing rule in the note before you open the chart, and date it.** Pivot definition, $k$, timeframe, exclusion filters. **If the rule is not written before the grid, you have no way to prove — even to yourself — that you did not adjust it afterwards**, and the adjustment is worth a full taka on DELTAPOLY's 61.8% level.
2. **Report the anchor dispersion beside every level you publish.** Compute the grid under two or three defensible anchors and state the spread. DELTAPOLY's 61.8% level ranges 55.179 to 57.4824 — $\\tilde{D} = 1.245$ ATR. **A number quoted without its dispersion is an assertion; a number quoted with it is a finding.**
3. **Read the ATR-distance column before the price column.** The software gives five lines identical visual weight. Only 55.752, at 0.35 ATR, is live. **Distance in volatility units is how you restore the ranking the chart threw away.**
4. **Never let the Fibonacci level vote in its own confluence score.** Weight zero, always. Chapter 30's zone gets 3, the moving average 2, a second-swing cluster 2, a round taka figure 1. **The level's job is to nominate a place to look, and a nomination is not evidence.**
5. **Demand a Chapter 28, 34 or 40 trigger inside the band before any entry.** The sheet's best possible verdict is *"now demand a trigger"* — there is no branch that authorises a trade, and that is deliberate. On DELTAPOLY the discipline is worth the gap between 27.05% and 57.83%.
6. **Anchor the stop to the lowest member of the confluence cluster, never to the Fib line and never to your fill.** On DELTAPOLY that is the 50-day MA at 55.10, so $X = 54.175$. **That price falsifies three arguments at once, which is what makes it a real invalidation.**
7. **Set alerts; do not pre-position.** When confluence exists but price is elsewhere, the sheet says *"set an alert, do not pre-position."* Resting orders at distant levels is how this tool separates retail accounts from their money, and the arithmetic in step 15 is why.
8. **Flag limit-locked and floor-price bars before pivot detection, not after.** DELTAPOLY's 78.00 high is the reason there are three anchors. **A grid anchored to a regulatory boundary is a grid describing a rule, not a crowd.**
9. **Use 1.272 and 1.618 as rough exhaustion zones; treat 2.618 as a curiosity.** 136.248 is 43.16 ATR away and moves BDT 4.530 across defensible anchors. **Extrapolation amplifies anchor error by $2e - 1$; interpolation cannot.**
10. **Run the grid only on the top thirty by turnover.** The self-fulfilling mechanism needs a crowd. Below that, compute the taka value that clears the confluence band — on DELTAPOLY one BDT 5 crore ticket is just over a day of volume — and size on the smaller of depth and score.
11. **Prefer clusters from two different swings to any single level.** Two independent analyst populations arriving in one band is the strongest form of the Fibonacci argument, which is why the second-swing cluster carries weight 2 and why 55.647 mattered on DELTAPOLY.
12. **Ignore time-based Fibonacci entirely.** Orders rest at prices; nothing rests at a date. **There is no mechanism there, not even a self-fulfilling one**, and the degrees of freedom are unlimited.
13. **Ask the falsification question out loud: could I have drawn this grid a month ago?** If the answer needs the turn you are explaining, the grid is a description of the past wearing the clothes of a forecast.`,
      bn: `১. **চার্ট খোলার আগে নোটে সুইং নিয়ম লিখুন, আর তারিখ দিন।** পিভটের সংজ্ঞা, $k$, টাইমফ্রেম, বর্জন-ছাঁকনি। **গ্রিডের আগে নিয়মটি লেখা না থাকলে আপনার কাছে — এমনকি নিজের কাছেও — প্রমাণ করার উপায় নেই যে পরে তা সমন্বয় করেননি**, আর ঐ সমন্বয়ের দাম DELTAPOLY-র ৬১.৮% স্তরে পুরো এক টাকা।
২. **আপনার প্রকাশ করা প্রতিটি স্তরের পাশে অ্যাংকর বিচ্ছুরণ জানান।** দুই-তিনটি সমর্থনযোগ্য অ্যাংকরে গ্রিড গণনা করুন ও ব্যাপ্তি বলুন। DELTAPOLY-র ৬১.৮% স্তর ৫৫.১৭৯ থেকে ৫৭.৪৮২৪ বিস্তৃত — $\\tilde{D} = 1.245$ ATR। **বিচ্ছুরণ ছাড়া উদ্ধৃত সংখ্যা একটি দাবি; বিচ্ছুরণসহ উদ্ধৃত সংখ্যা একটি ফলাফল।**
৩. **দামের কলামের আগে ATR-দূরত্বের কলাম পড়ুন।** সফটওয়্যার পাঁচটি রেখাকে অভিন্ন দৃশ্যগত ওজন দেয়। কেবল ৫৫.৭৫২, ০.৩৫ ATR-এ, জীবন্ত। **ভোলাটিলিটির এককে দূরত্বই চার্টের ছুঁড়ে ফেলা ক্রমটি ফিরিয়ে আনার উপায়।**
৪. **ফিবোনাচ্চি স্তরকে কখনো নিজের কনফ্লুয়েন্স স্কোরে ভোট দিতে দেবেন না।** ওজন শূন্য, সবসময়। অধ্যায় ৩০-এর জোন পায় ৩, মুভিং অ্যাভারেজ ২, দ্বিতীয়-সুইং ক্লাস্টার ২, রাউন্ড টাকার অঙ্ক ১। **স্তরটির কাজ তাকানোর একটি জায়গা মনোনীত করা, আর মনোনয়ন প্রমাণ নয়।**
৫. **যেকোনো প্রবেশের আগে ব্যান্ডের ভেতরে অধ্যায় ২৮, ৩৪ বা ৪০-এর একটি ট্রিগার দাবি করুন।** শিটের সেরা সম্ভাব্য রায় *"এবার একটি ট্রিগার দাবি করুন"* — এমন কোনো শাখা নেই যা ট্রেডের অনুমোদন দেয়, আর তা ইচ্ছাকৃত। DELTAPOLY-তে এই শৃঙ্খলার মূল্য ২৭.০৫% ও ৫৭.৮৩%-এর ব্যবধান।
৬. **স্টপ কনফ্লুয়েন্স গুচ্ছের সর্বনিম্ন সদস্যে নোঙর করুন, কখনো ফিব রেখায় নয় ও কখনো আপনার ফিলে নয়।** DELTAPOLY-তে তা ৫৫.১০-এর ৫০-দিনের MA, তাই $X = 54.175$। **ঐ দামটি একসঙ্গে তিনটি যুক্তি মিথ্যা প্রমাণ করে, আর সেটিই একে প্রকৃত ইনভ্যালিডেশন করে।**
৭. **অ্যালার্ট বসান; আগেভাগে অবস্থান নেবেন না।** কনফ্লুয়েন্স আছে কিন্তু দাম অন্য কোথাও — শিট বলে *"অ্যালার্ট বসান, আগেভাগে অবস্থান নেবেন না।"* দূরের স্তরে অপেক্ষমাণ অর্ডারই এই হাতিয়ারের খুচরা অ্যাকাউন্টকে তার টাকা থেকে আলাদা করার উপায়, আর ধাপ ১৫-এর পাটিগণিতই তার কারণ।
৮. **পিভট শনাক্তকরণের আগে সীমা-লক ও ফ্লোর-প্রাইসের বার চিহ্নিত করুন, পরে নয়।** DELTAPOLY-র ৭৮.০০ হাই-ই তিনটি অ্যাংকর থাকার কারণ। **একটি নিয়ন্ত্রক সীমায় অ্যাংকর করা গ্রিড ভিড় নয়, একটি বিধি বর্ণনা করে।**
৯. **১.২৭২ ও ১.৬১৮ মোটামুটি নিঃশেষণ অঞ্চল হিসেবে ব্যবহার করুন; ২.৬১৮-কে কৌতূহল গণ্য করুন।** ১৩৬.২৪৮ ৪৩.১৬ ATR দূরে আর সমর্থনযোগ্য অ্যাংকরজুড়ে ৪.৫৩০ টাকা সরে। **বহির্বেশন অ্যাংকর-ত্রুটিকে $2e - 1$ গুণে বাড়ায়; অন্তর্বেশন পারে না।**
১০. **কেবল টার্নওভারে শীর্ষ ত্রিশে গ্রিড চালান।** স্বয়ংপূরক কার্যকারণের একটি ভিড় দরকার। তার নিচে কনফ্লুয়েন্স ব্যান্ড পরিষ্কার করা টাকার মূল্য গণনা করুন — DELTAPOLY-তে ৫ কোটি টাকার একটি টিকিট এক দিনের ভলিউমের সামান্য বেশি — আর গভীরতা ও স্কোরের ছোটটিতে আকার নিন।
১১. **যেকোনো একক স্তরের চেয়ে দুটি ভিন্ন সুইং থেকে আসা ক্লাস্টার পছন্দ করুন।** দুটি স্বাধীন বিশ্লেষক-দলের একই ব্যান্ডে পৌঁছানোই ফিবোনাচ্চি যুক্তির শক্তিশালীতম রূপ, সে কারণেই দ্বিতীয়-সুইং ক্লাস্টার ২ ওজন বহন করে আর DELTAPOLY-তে ৫৫.৬৪৭ গুরুত্বপূর্ণ ছিল।
১২. **সময়ভিত্তিক ফিবোনাচ্চি সম্পূর্ণ উপেক্ষা করুন।** অর্ডার দামে বসে; তারিখে কিছুই বসে না। **সেখানে কোনো কার্যকারণ নেই, এমনকি স্বয়ংপূরকটিও নয়**, আর স্বাধীনতার মাত্রা অসীম।
১৩. **মিথ্যাপ্রমাণের প্রশ্নটি জোরে জিজ্ঞেস করুন: এক মাস আগে কি আমি এই গ্রিডটি আঁকতে পারতাম?** উত্তরটির জন্য যদি আপনি যে মোড় ব্যাখ্যা করছেন তা লাগে, তবে গ্রিডটি পূর্বাভাসের পোশাক পরা অতীতের বর্ণনা।`,
    },

    exercises: {
      en: `1. Build the §41 sheet. Enter B2 = 78, B3 = 42, B5 = 56.4, B6 = 1.85, B7 = 1 and confirm B4 = 36, B11:B15 = 69.504 / 64.248 / 60.000 / 55.752 / 49.704, B28 = 0.925, B29 = 1, B31 = 55.752, B32 = 0.3503, and that B34 returns the "demand a Ch 28/34/40 trigger" branch.
2. **The anchor-shift exercise, which is the one that matters.** Change B3 from 42.00 to 44.80 and record the new B11:B15 and B29. Then change it to 40.945 and record them again. Tabulate the 61.8% level across all three lows and express the total spread in ATR units. **How many taka of anchor movement does it take to flip B34 from one branch to another?**
3. Set B3 back to 42.00 and change B2 from 78.00 to 76.50 — the pre-circuit-limit high. Confirm B14 = 55.179 and that it now sits 0.079 from the 50-day MA. Which anchor produces the tighter confluence, and does that make it the correct anchor? Defend your answer in two sentences.
4. Compute the anchor dispersion $\\tilde{D}$ for all five retracement ratios across the three anchors from exercises 2 and 3. Which ratio is most stable, and does the sensitivity table in §41.4 predict it correctly?
5. Set B7 to $-1$ without changing anything else. Write down all five levels. What is the visible symptom that the flag is wrong, and would you have noticed it on a chart rather than in the sheet?
6. Raise B27 from 0.5 to 1.0. Recompute B28 and B29. How many levels flag now? Then answer honestly: if you had done this *after* seeing that only one level flagged, what would you have been doing?
7. Compute the 2.618 extension under all three anchors. Report the spread in taka and in ATR. Then state, in one sentence, what a position sized against that target is actually assuming.
8. Take a top-thirty DSE name and apply the step-0 pivot rule with $k = 8$ to the last twelve months. Draw the grid. Now apply it with $k = 5$ and $k = 12$. **How much does the 61.8% level move? Which value of $k$ would you have chosen if you had drawn it after the fact?**
9. For the same name, identify every session in your data that closed at a circuit limit or inside a floor-price window. Do any of them serve as a pivot under your rule? If yes, redraw the grid excluding them and report both.
10. Build the confluence score for the 55.752 level by hand: Chapter 30 zone 3, moving average 2, second-swing cluster 2, round figure 1. Now set the Fibonacci level's own weight to 2 and recompute for the 57.4824 level under anchor B. What does the score become, and what would the sheet then have told you to do?
11. Price both entries on your own name: a resting order at the first level price approaches, and a Chapter 28 trigger inside the confluence band, with the stop half an ATR below the lowest cluster member in both cases. Report both break-even win rates. How often, historically, did that name actually print a trigger inside the band rather than slicing through it?
12. Pick a published Fibonacci chart — from a broker note, a Facebook group, or a YouTube analysis — and reconstruct it. Identify the two anchors used. Then apply your own written pivot rule to the same data. **Do you get the same grid? If not, when do you think the chart was drawn?**
13. In three sentences, write down what the confluence score cannot see. Keep it with the sheet, next to the taka-value-of-a-day's-turnover calculation.`,
      bn: `১. §৪১-এর শিট তৈরি করুন। B2 = ৭৮, B3 = ৪২, B5 = ৫৬.৪, B6 = ১.৮৫, B7 = ১ বসান ও নিশ্চিত করুন B4 = ৩৬, B11:B15 = ৬৯.৫০৪ / ৬৪.২৪৮ / ৬০.০০০ / ৫৫.৭৫২ / ৪৯.৭০৪, B28 = ০.৯২৫, B29 = ১, B31 = ৫৫.৭৫২, B32 = ০.৩৫০৩, আর B34 "অ ২৮/৩৪/৪০-এর ট্রিগার দাবি করুন" শাখাটি ফেরত দেয়।
২. **অ্যাংকর-সরণের অনুশীলন, যেটিই আসল।** B3 ৪২.০০ থেকে ৪৪.৮০ করুন আর নতুন B11:B15 ও B29 লিখুন। তারপর ৪০.৯৪৫ করুন ও আবার লিখুন। তিনটি লো-জুড়ে ৬১.৮% স্তর সারণিবদ্ধ করুন ও মোট ব্যাপ্তি ATR এককে প্রকাশ করুন। **B34-কে এক শাখা থেকে অন্য শাখায় নিতে কত টাকার অ্যাংকর-চলন লাগে?**
৩. B3 ফের ৪২.০০ করুন আর B2 ৭৮.০০ থেকে ৭৬.৫০ করুন — সার্কিট-সীমার আগের হাই। নিশ্চিত করুন B14 = ৫৫.১৭৯ আর এটি এখন ৫০-দিনের MA থেকে ০.০৭৯ দূরে। কোন অ্যাংকর আঁটসাঁট কনফ্লুয়েন্স তৈরি করে, আর তাতে কি সেটি সঠিক অ্যাংকর হয়ে যায়? দুই বাক্যে উত্তরটি সমর্থন করুন।
৪. অনুশীলন ২ ও ৩-এর তিন অ্যাংকরজুড়ে পাঁচটি রিট্রেসমেন্ট অনুপাতেরই অ্যাংকর বিচ্ছুরণ $\\tilde{D}$ গণনা করুন। কোন অনুপাত সবচেয়ে স্থিতিশীল, আর §৪১.৪-এর সংবেদনশীলতা সারণি কি তা সঠিকভাবে পূর্বাভাস দেয়?
৫. অন্য কিছু না বদলে B7 $-1$ করুন। পাঁচটি স্তরই লিখুন। চিহ্নটি ভুল হওয়ার দৃশ্যমান উপসর্গ কী, আর শিটে নয় বরং চার্টে দেখলে কি আপনি তা লক্ষ করতেন?
৬. B27 ০.৫ থেকে ১.০ করুন। B28 ও B29 পুনর্গণনা করুন। এখন কতগুলো স্তর চিহ্নিত হয়? তারপর সৎভাবে উত্তর দিন: কেবল একটি স্তর চিহ্নিত হয়েছে তা *দেখার পরে* যদি এটি করতেন, তবে আপনি কী করছিলেন?
৭. তিনটি অ্যাংকরেই ২.৬১৮ এক্সটেনশন গণনা করুন। ব্যাপ্তি টাকায় ও ATR-এ জানান। তারপর এক বাক্যে বলুন ঐ লক্ষ্যের বিপরীতে আকার নেওয়া একটি পজিশন আসলে কী ধরে নিচ্ছে।
৮. শীর্ষ-ত্রিশের একটি ডিএসই নাম নিন ও গত বারো মাসে $k = 8$ সহ ধাপ-০-র পিভট নিয়ম প্রয়োগ করুন। গ্রিড আঁকুন। এবার $k = 5$ ও $k = 12$ দিয়ে প্রয়োগ করুন। **৬১.৮% স্তর কতটা সরে? ঘটনার পরে আঁকলে আপনি $k$-র কোন মান বাছতেন?**
৯. একই নামের জন্য আপনার উপাত্তে প্রতিটি সেশন শনাক্ত করুন যা সার্কিট সীমায় বা ফ্লোর-প্রাইসের সময়কালের ভেতরে ক্লোজ করেছে। আপনার নিয়মে এদের কোনোটি কি পিভট হিসেবে কাজ করে? হলে সেগুলো বাদ দিয়ে গ্রিড আবার আঁকুন ও দুটোই জানান।
১০. ৫৫.৭৫২ স্তরের কনফ্লুয়েন্স স্কোর হাতে তৈরি করুন: অধ্যায় ৩০-এর জোন ৩, মুভিং অ্যাভারেজ ২, দ্বিতীয়-সুইং ক্লাস্টার ২, রাউন্ড অঙ্ক ১। এবার ফিবোনাচ্চি স্তরের নিজের ওজন ২ করুন ও অ্যাংকর B-র ৫৭.৪৮২৪ স্তরের জন্য পুনর্গণনা করুন। স্কোর কত হয়, আর শিট তখন আপনাকে কী করতে বলত?
১১. আপনার নিজের নামে দুটি প্রবেশেরই দাম হিসাব করুন: দাম যে প্রথম স্তরের কাছে আসে সেখানে একটি অপেক্ষমাণ অর্ডার, আর কনফ্লুয়েন্স ব্যান্ডের ভেতরে অধ্যায় ২৮-এর একটি ট্রিগার, দুই ক্ষেত্রেই গুচ্ছের সর্বনিম্ন সদস্যের অর্ধ ATR নিচে স্টপ নিয়ে। দুটি ব্রেক-ইভেন উইন রেটই জানান। ঐতিহাসিকভাবে ঐ নামটি ব্যান্ড কেটে না গিয়ে কতবার সত্যিই ব্যান্ডের ভেতরে একটি ট্রিগার ছেপেছে?
১২. একটি প্রকাশিত ফিবোনাচ্চি চার্ট বাছুন — ব্রোকারের নোট, ফেসবুক গ্রুপ বা ইউটিউব বিশ্লেষণ থেকে — এবং তা পুনর্নির্মাণ করুন। ব্যবহৃত দুটি অ্যাংকর শনাক্ত করুন। তারপর একই উপাত্তে আপনার নিজের লিখিত পিভট নিয়ম প্রয়োগ করুন। **আপনি কি একই গ্রিড পান? না পেলে আপনার মতে চার্টটি কখন আঁকা হয়েছিল?**
১৩. তিন বাক্যে লিখুন কনফ্লুয়েন্স স্কোর কী দেখতে পায় না। শিটের সঙ্গে, এক দিনের টার্নওভারের টাকার মূল্যের গণনার পাশে রেখে দিন।`,
    },

    summary: {
      en: `- **The ratios are real arithmetic, but the set is assembled rather than derived.** $\\varphi = (1+\\sqrt{5})/2 = 1.6180339887$ genuinely produces 0.618, 0.382, 0.236, 1.618 and 2.618. **0.500 is a half with no derivation, and 1.414 is $\\sqrt{2}$ from an unrelated tradition.** Once you see that members were added because they were useful, you stop treating a level's number as evidence for the level.
- **The only defensible mechanism is self-fulfilling coordination, not natural law.** No causal chain runs from a rabbit-breeding recurrence to a Dhaka investor's limit order. What is real is that thousands of participants compute the same numbers and place orders there — **which makes the level support in exactly Chapter 30's sense: positioned inventory.** That claim is testable, and it fails wherever the crowd is absent.
- **Every retracement level is a weighted average of the two anchors:** $R_r = (1-r)H + rL$. On DELTAPOLY, $0.382 \\times 78.00 + 0.618 \\times 42.00 = 55.752$. Extensions are extrapolations, $X_e = eH + (1-e)L$, **and extrapolation amplifies anchor error while interpolation cannot.**
- **The swing choice, not the ratio, is where all the discretion lives — and it is quantifiable.** $\\partial R_{0.618}/\\partial L = 0.618$ and $\\partial X_{2.618}/\\partial H = 2.618$. Across three defensible anchors DELTAPOLY's 61.8% level ranges **55.179 to 57.4824 — a spread of BDT 2.303, or 1.245 ATR.** Nothing about the stock changed; only where somebody clicked.
- **Anchor dispersion greater than the confluence tolerance means the level is a region of disagreement.** Here $\\tilde{D} = 1.245$ ATR against $\\tau = 0.5$ ATR, so on the strict test the level fails, **and the analysis survives only on the weaker claim that two of three anchors agree.** Publish that sentence, not "61.8% support at 55.75".
- **A swing low of 40.945 instead of 42.00 puts the 61.8% level exactly on the 50-day moving average.** One taka and five and a half poisha buys a perfect chart, silently, with no error message. **The written pre-committed swing rule is the only defence, and it must be dated before the grid is drawn.**
- **Confluence is where the tool earns its place, and the Fibonacci level gets weight zero in its own score.** Chapter 30's transacted zone scores 3, the moving average 2, a second-swing cluster 2, a round figure 1. DELTAPOLY's 55.752 scores **8**; anchor B's 57.4824 scores **1**. **Same ratio, same session, opposite conclusions.**
- **The sheet's best possible verdict is not "buy" — it is "now demand a Ch 28/34/40 trigger."** With B29 = 1 and B32 = 0.3503 ATR that is exactly what B34 returns. **There is no branch in the whole sheet that authorises a trade, and that is the chapter's operational rule compiled into a cell.**
- **Waiting for a trigger instead of buying the line is worth more than double the edge.** Entry at 56.90 with the stop at 54.175 — half an ATR below the *lowest* cluster member — gives risk 2.725, reward 7.348 to the 38.2% level at 64.248, **$R{:}R = 2.70$ and a break-even of 27.05%.** Pre-positioning at the 50% line at 60.000 gives $R{:}R = 0.73$ and needs **57.83%**, which on a market with no short side is a losing method.
- **The far extensions are decoration.** DELTAPOLY's 2.618 target sits at 136.248 — **43.16 ATR away**, and moving BDT 4.530 across defensible anchors. Report 1.272 and 1.618 as rough exhaustion zones; never size a position against 2.618. **Time-based Fibonacci is weaker still: orders rest at prices, and nothing rests at a date.**
- **The DSE corrupts precisely the two inputs the tool depends on most.** A floor-price low is a regulation, a limit-locked high is where the exchange stopped the move — DELTAPOLY's 78.00 may be exactly that, which is why anchor C exists — and a record-date gap measures a range nobody traded. **Add thin liquidity, where one BDT 5 crore ticket clears a day's turnover, and the honest conclusion is narrow: top thirty by turnover, clean data, rule fixed in advance, grid used as a location filter. Everywhere else, it is decoration with three decimal places.**`,
      bn: `- **অনুপাতগুলো প্রকৃত পাটিগণিত, কিন্তু সেটটি উদ্ভাবিত নয়, সংকলিত।** $\\varphi = (1+\\sqrt{5})/2 = 1.6180339887$ সত্যিই ০.৬১৮, ০.৩৮২, ০.২৩৬, ১.৬১৮ ও ২.৬১৮ তৈরি করে। **০.৫০০ একটি অর্ধেক, কোনো উদ্ভব নেই, আর ১.৪১৪ হলো অসম্পর্কিত এক ঐতিহ্যের $\\sqrt{2}$।** সদস্য যোগ হয়েছে কাজে লেগেছে বলে — এটি দেখলে আপনি স্তরটির সংখ্যাকে স্তরটির প্রমাণ ভাবা ছেড়ে দেন।
- **একমাত্র সমর্থনযোগ্য কার্যকারণ স্বয়ংপূরক সমন্বয়, প্রকৃতির নিয়ম নয়।** খরগোশ-প্রজননের পুনরাবৃত্তি থেকে ঢাকার বিনিয়োগকারীর লিমিট অর্ডার পর্যন্ত কোনো কার্যকারণ শৃঙ্খল নেই। যা বাস্তব তা হলো হাজার হাজার অংশগ্রহণকারী একই সংখ্যা গণনা করেন ও সেখানে অর্ডার বসান — **যা স্তরটিকে হুবহু অধ্যায় ৩০-এর অর্থে সাপোর্ট করে: অবস্থানরত ইনভেন্টরি।** ঐ দাবিটি পরীক্ষণযোগ্য, আর যেখানে ভিড় নেই সেখানে তা ব্যর্থ হয়।
- **প্রতিটি রিট্রেসমেন্ট স্তর দুই অ্যাংকরের একটি ভারিত গড়:** $R_r = (1-r)H + rL$। DELTAPOLY-তে $0.382 \\times 78.00 + 0.618 \\times 42.00 = 55.752$। এক্সটেনশন বহির্বেশন, $X_e = eH + (1-e)L$, **আর বহির্বেশন অ্যাংকর-ত্রুটি বিবর্ধিত করে, অন্তর্বেশন পারে না।**
- **অনুপাত নয়, সুইং পছন্দেই সমস্ত বিচারবুদ্ধি থাকে — আর তা পরিমাপযোগ্য।** $\\partial R_{0.618}/\\partial L = 0.618$ আর $\\partial X_{2.618}/\\partial H = 2.618$। তিনটি সমর্থনযোগ্য অ্যাংকরজুড়ে DELTAPOLY-র ৬১.৮% স্তর **৫৫.১৭৯ থেকে ৫৭.৪৮২৪ — ব্যাপ্তি ২.৩০৩ টাকা, অর্থাৎ ১.২৪৫ ATR।** শেয়ারটির কিছুই বদলায়নি; কেবল কেউ কোথায় ক্লিক করেছেন তা বদলেছে।
- **কনফ্লুয়েন্স সহনশীলতার চেয়ে বড় অ্যাংকর বিচ্ছুরণ মানে স্তরটি মতভেদের একটি অঞ্চল।** এখানে $\\tilde{D} = 1.245$ ATR বনাম $\\tau = 0.5$ ATR, তাই কড়া পরীক্ষায় স্তরটি ব্যর্থ, **আর বিশ্লেষণ টেকে কেবল এই দুর্বলতর দাবিতে যে তিনটির দুটি অ্যাংকর একমত।** ঐ বাক্যটি প্রকাশ করুন, "৫৫.৭৫-এ ৬১.৮% সাপোর্ট" নয়।
- **৪২.০০-এর বদলে ৪০.৯৪৫ সুইং লো ৬১.৮% স্তরকে ঠিক ৫০-দিনের মুভিং অ্যাভারেজে বসায়।** এক টাকা সাড়ে পাঁচ পয়সায় একটি নিখুঁত চার্ট কেনা যায়, নীরবে, কোনো ভুলবার্তা ছাড়াই। **লিখিত পূর্ব-প্রতিশ্রুত সুইং নিয়মই একমাত্র প্রতিরক্ষা, আর তা গ্রিড আঁকার আগে তারিখসহ লেখা থাকতে হবে।**
- **কনফ্লুয়েন্সেই হাতিয়ারটি তার জায়গা অর্জন করে, আর নিজের স্কোরে ফিবোনাচ্চি স্তর শূন্য ওজন পায়।** অধ্যায় ৩০-এর সম্পন্ন জোন পায় ৩, মুভিং অ্যাভারেজ ২, দ্বিতীয়-সুইং ক্লাস্টার ২, রাউন্ড অঙ্ক ১। DELTAPOLY-র ৫৫.৭৫২ পায় **৮**; অ্যাংকর B-র ৫৭.৪৮২৪ পায় **১**। **একই অনুপাত, একই সেশন, বিপরীত সিদ্ধান্ত।**
- **শিটের সেরা সম্ভাব্য রায় "কিনুন" নয় — তা "এবার অ ২৮/৩৪/৪০-এর ট্রিগার দাবি করুন।"** B29 = ১ ও B32 = ০.৩৫০৩ ATR-এ B34 ঠিক তা-ই ফেরত দেয়। **গোটা শিটে এমন কোনো শাখা নেই যা একটি ট্রেডের অনুমোদন দেয়, আর তা অধ্যায়ের পরিচালন নিয়মকে একটি ঘরে সংকলিত করা।**
- **রেখা কেনার বদলে ট্রিগারের অপেক্ষার মূল্য প্রান্তের দ্বিগুণেরও বেশি।** ৫৪.১৭৫-এ স্টপসহ ৫৬.৯০-এ প্রবেশ — গুচ্ছের *সর্বনিম্ন* সদস্যের অর্ধ ATR নিচে — দেয় ঝুঁকি ২.৭২৫, ৬৪.২৪৮-এ ৩৮.২% স্তর পর্যন্ত পুরস্কার ৭.৩৪৮, **$R{:}R = 2.70$ ও ব্রেক-ইভেন ২৭.০৫%।** ৬০.০০০-এ ৫০% রেখায় আগেভাগে অবস্থান দেয় $R{:}R = 0.73$ ও দরকার **৫৭.৮৩%**, যা শর্ট সাইড নেই এমন বাজারে একটি লোকসানি পদ্ধতি।
- **দূরের এক্সটেনশনগুলো সাজসজ্জা।** DELTAPOLY-র ২.৬১৮ লক্ষ্য ১৩৬.২৪৮-এ — **৪৩.১৬ ATR দূরে**, আর সমর্থনযোগ্য অ্যাংকরজুড়ে ৪.৫৩০ টাকা সরে। ১.২৭২ ও ১.৬১৮ মোটামুটি নিঃশেষণ অঞ্চল হিসেবে জানান; কখনো ২.৬১৮-এর বিপরীতে আকার নেবেন না। **সময়ভিত্তিক ফিবোনাচ্চি আরও দুর্বল: অর্ডার দামে বসে, আর তারিখে কিছুই বসে না।**
- **ডিএসই ঠিক সেই দুটি উপাদানকেই কলুষিত করে যেগুলোর ওপর হাতিয়ারটি সবচেয়ে বেশি নির্ভর করে।** ফ্লোর-প্রাইসের লো একটি বিধি, সীমা-লক হাই হলো যেখানে এক্সচেঞ্জ চলনটি থামিয়েছে — DELTAPOLY-র ৭৮.০০ হয়তো ঠিক তা-ই, আর সে কারণেই অ্যাংকর C-র অস্তিত্ব — আর রেকর্ড-ডেট গ্যাপ এমন রেঞ্জ মাপে যাতে কেউ লেনদেন করেনি। **সঙ্গে যোগ করুন পাতলা তারল্য, যেখানে ৫ কোটি টাকার একটি টিকিট এক দিনের টার্নওভার পরিষ্কার করে, আর সৎ উপসংহার সংকীর্ণ: টার্নওভারে শীর্ষ ত্রিশ, পরিচ্ছন্ন উপাত্ত, আগেভাগে স্থির নিয়ম, আর গ্রিড অবস্থান-ছাঁকনি হিসেবে ব্যবহৃত। বাকি সর্বত্র এটি দশমিকের তিন ঘরসহ সাজসজ্জা।**`,
    },
  },

  interview: [
    {
      q: {
        en: 'Do you believe Fibonacci retracements work? Give me your honest position.',
        bn: 'আপনি কি বিশ্বাস করেন ফিবোনাচ্চি রিট্রেসমেন্ট কাজ করে? আপনার সৎ অবস্থানটি বলুন।',
      },
      a: {
        en: 'I believe they work in a narrow and specific sense, and I think the usual justification for them is false, so let me separate the two. The usual justification is that a ratio derived from a twelfth-century rabbit-breeding recurrence governs the price of equities, and there is no causal chain anywhere in that claim — nobody has ever demonstrated a path from the golden ratio to a Dhaka investor deciding to sell at fifty-five seventy-five rather than fifty-five sixty. Sunflower spirals and nautilus shells are not evidence about an order book. What is defensible is much narrower: the levels function as a coordination device. Tens of thousands of participants run the same software with the same default ratios on the same obvious swing, they all compute the same number, and some of them place real orders there. Chapter thirty told us that support is positioned inventory rather than a mystical property of a price, and this is positioned inventory — so the level behaves like support because it is support, in exactly that mechanical sense. The prophecy is self-fulfilling, and a self-fulfilling prophecy in a market with real order flow is a real tradable effect. But notice what that reframing buys you. It replaces an unfalsifiable claim about universal harmony with a testable one about participant behaviour, and testable claims come with conditions under which they fail. The condition here is a large dispersed crowd independently watching, which on our market exists on maybe the top twenty or thirty counters by turnover and absolutely nowhere else. On a thin name I would say the grid is decoration, and I would say that to a client.',
        bn: 'আমি বিশ্বাস করি এগুলো একটি সংকীর্ণ ও নির্দিষ্ট অর্থে কাজ করে, আর আমি মনে করি এগুলোর প্রচলিত সাফাইটি মিথ্যা, তাই দুটোকে আলাদা করি। প্রচলিত সাফাই হলো দ্বাদশ শতকের খরগোশ-প্রজননের পুনরাবৃত্তি থেকে পাওয়া একটি অনুপাত শেয়ারের দাম নিয়ন্ত্রণ করে, আর ঐ দাবির কোথাও কোনো কার্যকারণ শৃঙ্খল নেই — সোনালি অনুপাত থেকে ঢাকার একজন বিনিয়োগকারীর পঞ্চান্ন ষাটের বদলে পঞ্চান্ন পঁচাত্তরে বিক্রির সিদ্ধান্ত পর্যন্ত কোনো পথ কেউ কখনো দেখাননি। সূর্যমুখীর সর্পিল আর শামুকের খোল অর্ডার বুক সম্পর্কে প্রমাণ নয়। যা সমর্থনযোগ্য তা অনেক সংকীর্ণ: স্তরগুলো একটি সমন্বয় ব্যবস্থা হিসেবে কাজ করে। হাজার হাজার অংশগ্রহণকারী একই সফটওয়্যার একই ডিফল্ট অনুপাতে একই স্পষ্ট সুইংয়ে চালান, তাঁরা সবাই একই সংখ্যা গণনা করেন, আর তাঁদের কেউ কেউ সেখানে সত্যিকারের অর্ডার বসান। অধ্যায় ত্রিশ বলেছে সাপোর্ট দামের রহস্যময় ধর্ম নয়, অবস্থানরত ইনভেন্টরি, আর এটিই অবস্থানরত ইনভেন্টরি — তাই স্তরটি সাপোর্টের মতো আচরণ করে কারণ ঠিক ঐ যান্ত্রিক অর্থে এটি সাপোর্টই। ভবিষ্যদ্বাণীটি স্বয়ংপূরক, আর প্রকৃত অর্ডার প্রবাহের বাজারে একটি স্বয়ংপূরক ভবিষ্যদ্বাণী একটি বাস্তব লেনদেনযোগ্য প্রভাব। কিন্তু লক্ষ করুন ঐ পুনর্গঠন আপনাকে কী দেয়। এটি সর্বজনীন সাদৃশ্য সম্পর্কে একটি অখণ্ডনযোগ্য দাবিকে অংশগ্রহণকারীর আচরণ সম্পর্কে একটি পরীক্ষণযোগ্য দাবিতে বদলে দেয়, আর পরীক্ষণযোগ্য দাবির সঙ্গে আসে সেই শর্ত যেখানে তা ব্যর্থ হয়। এখানে শর্তটি হলো একটি বড় বিক্ষিপ্ত ভিড় স্বাধীনভাবে দেখছে, যা আমাদের বাজারে টার্নওভারে হয়তো শীর্ষ কুড়ি-ত্রিশটি কাউন্টারে আছে আর একেবারেই অন্য কোথাও নেই। পাতলা একটি নামে আমি বলব গ্রিডটি সাজসজ্জা, আর আমি ক্লায়েন্টকেও তাই বলব।',
      },
    },
    {
      q: {
        en: 'Is fifty percent a Fibonacci ratio? Why does the answer matter?',
        bn: 'পঞ্চাশ শতাংশ কি একটি ফিবোনাচ্চি অনুপাত? উত্তরটি কেন গুরুত্বপূর্ণ?',
      },
      a: {
        en: 'No, it is not, and the fact that it is not is the most informative thing on the toolbar. Zero point six one eight is one over phi, zero point three eight two is one over phi squared, zero point two three six is one over phi cubed, one point six one eight is phi, and two point six one eight is phi squared — those are genuine, and you can verify them in a minute by dividing consecutive terms of the sequence. Zero point five is a half. It is not a limit of consecutive terms, it is not a power of phi, it is not a root of one. It is on the toolbar because Dow observed a century ago that corrections often retrace about half of the prior move, and because a half is the most natural fraction a human being reaches for. One point four one four is not Fibonacci either — that is the square root of two, imported from a completely different geometric tradition. And zero point seven eight six and one point two seven two are square roots applied to real ratios because the square root happened to land in a useful gap. Now, why does that matter. A derived system has the property that you cannot add or remove members without breaking it. This set does not have that property. Members were added when practitioners found them useful and a pedigree was reverse-engineered afterwards for some and never for others. So what you are holding is a grid of round-ish fractions with a partial mathematical veneer, and the moment you understand that, you stop treating a level\'s number as evidence for the level. The number tells you nothing. What tells you something is whether other people are transacting there, and that is an entirely separate question you have to go and answer.',
        bn: 'না, নয়, আর এটি যে নয় সেই তথ্যটিই টুলবারের সবচেয়ে তথ্যবহুল বিষয়। শূন্য দশমিক ছয় এক আট হলো এক ভাগ ফাই, শূন্য দশমিক তিন আট দুই হলো এক ভাগ ফাই বর্গ, শূন্য দশমিক দুই তিন ছয় হলো এক ভাগ ফাই ঘন, এক দশমিক ছয় এক আট হলো ফাই, আর দুই দশমিক ছয় এক আট হলো ফাই বর্গ — এগুলো প্রকৃত, আর ধারার পরপর পদ ভাগ করে আপনি এক মিনিটে যাচাই করতে পারেন। শূন্য দশমিক পাঁচ একটি অর্ধেক। এটি পরপর পদের সীমা নয়, ফাই-এর ঘাত নয়, কোনো মূলও নয়। এটি টুলবারে আছে কারণ ডাও একশো বছর আগে লক্ষ করেছিলেন সংশোধন প্রায়ই আগের চলনের প্রায় অর্ধেক ফিরিয়ে দেয়, আর কারণ অর্ধেক মানুষের হাত বাড়িয়ে ধরার সবচেয়ে স্বাভাবিক ভগ্নাংশ। এক দশমিক চার এক চারও ফিবোনাচ্চি নয় — ওটি দুইয়ের বর্গমূল, সম্পূর্ণ ভিন্ন এক জ্যামিতিক ঐতিহ্য থেকে আমদানি করা। আর শূন্য দশমিক সাত আট ছয় ও এক দশমিক দুই সাত দুই প্রকৃত অনুপাতে প্রয়োগ করা বর্গমূল, কারণ বর্গমূলটি ঘটনাচক্রে একটি কাজের ফাঁকে পড়েছিল। এবার, এটি কেন গুরুত্বপূর্ণ। একটি উদ্ভাবিত ব্যবস্থার ধর্ম এই যে তার সদস্য যোগ বা বিয়োগ করলে তা ভেঙে পড়ে। এই সেটটির সে ধর্ম নেই। ব্যবহারকারীরা যখন কাজে লেগেছে তখন সদস্য যোগ করেছেন আর পরে কারো কারো জন্য বংশপরিচয় উল্টো-প্রকৌশলে বানানো হয়েছে, বাকিদের জন্য কখনো হয়নি। তাই আপনি ধরে আছেন প্রায়-গোল ভগ্নাংশের একটি গ্রিড যাতে আংশিক গাণিতিক প্রলেপ, আর যে মুহূর্তে এটি বোঝেন সেই মুহূর্তে আপনি স্তরটির সংখ্যাকে স্তরটির প্রমাণ ভাবা বন্ধ করেন। সংখ্যাটি আপনাকে কিছুই বলে না। যা বলে তা হলো সেখানে অন্যরা লেনদেন করছে কি না, আর সেটি সম্পূর্ণ আলাদা একটি প্রশ্ন যার উত্তর আপনাকে গিয়ে বের করতে হবে।',
      },
    },
    {
      q: {
        en: 'Two analysts draw a Fibonacci grid on the same chart and get different levels. Who is right, and how much does the disagreement actually cost?',
        bn: 'দুজন বিশ্লেষক একই চার্টে ফিবোনাচ্চি গ্রিড আঁকেন ও ভিন্ন স্তর পান। কে ঠিক, আর মতভেদটির আসল খরচ কত?',
      },
      a: {
        en: 'Neither of them is right, because there is no correct swing, and I would rather quantify the disagreement than argue about it. On my worked example the stock ran from forty-two to seventy-eight, so the range is thirty-six, and the sixty-one point eight percent retracement lands at fifty-five seventy-five. A second analyst who requires the pivot to be the last closing low rather than the last intraday low anchors at forty-four eighty, and his sixty-one point eight lands at fifty-seven forty-eight. A third notices that the seventy-eight print occurred on a session that locked at the circuit limit, applies the chapter thirty rule that a limit-locked extreme is an artefact of the regulation rather than of supply, and anchors the high at seventy-six fifty — his level is fifty-five eighteen. So the most-watched line in the entire toolkit sits anywhere between fifty-five eighteen and fifty-seven forty-eight, a spread of two taka thirty, which against an average true range of one eighty-five is one and a quarter days of normal price movement. All three analysts followed a written rule and none of them cheated. And it is not cosmetic, because the confluence test flips: my anchor scores eight against the moving average, the chapter thirty zone, a round figure and a second-swing cluster, and the second analyst\'s level scores one, so the sheet goes from demand a trigger to there is nothing here. The practical answer is that you cannot resolve this, so you report it. I compute the grid under every defensible anchor, quote the dispersion in ATR units next to the level, and if the dispersion exceeds my confluence tolerance — which here it does, one point two four five against zero point five — I say plainly that the level is a region of disagreement and that my analysis rests on the weaker claim that two of three anchors agree. That sentence is the difference between analysis and advertising.',
        bn: 'কেউই ঠিক নন, কারণ সঠিক সুইং বলে কিছু নেই, আর আমি মতভেদটি নিয়ে তর্কের বদলে তা পরিমাপ করতে চাই। আমার উদাহরণে শেয়ারটি বিয়াল্লিশ থেকে আটাত্তরে গেছে, তাই রেঞ্জ ছত্রিশ, আর একষট্টি দশমিক আট শতাংশ রিট্রেসমেন্ট নামে পঞ্চান্ন পঁচাত্তরে। দ্বিতীয় বিশ্লেষক যিনি পিভটকে শেষ ইন্ট্রাডে লো নয় বরং শেষ ক্লোজিং লো হতে হবে বলে দাবি করেন, তিনি চুয়াল্লিশ আশিতে অ্যাংকর করেন, আর তাঁর একষট্টি দশমিক আট নামে সাতান্ন আটচল্লিশে। তৃতীয়জন লক্ষ করেন আটাত্তর প্রিন্টটি এমন সেশনে হয়েছিল যা সার্কিট সীমায় লক হয়েছিল, অধ্যায় ত্রিশের নিয়ম প্রয়োগ করেন যে সীমা-লক চরম সরবরাহের নয় বিধির কৃত্রিম ফল, আর হাই অ্যাংকর করেন ছিয়াত্তর পঞ্চাশে — তাঁর স্তর পঞ্চান্ন আঠারো। অর্থাৎ গোটা হাতিয়ারের সবচেয়ে বেশি নজরে থাকা রেখাটি পঞ্চান্ন আঠারো থেকে সাতান্ন আটচল্লিশের যেকোনো জায়গায় বসে, ব্যাপ্তি দুই টাকা ত্রিশ, যা এক দশমিক আট পাঁচ গড় true range-এর বিপরীতে সোয়া এক দিনের স্বাভাবিক দাম-চলন। তিনজনই একটি লিখিত নিয়ম মেনেছেন আর কেউ প্রতারণা করেননি। আর এটি প্রসাধনী নয়, কারণ কনফ্লুয়েন্স পরীক্ষা উল্টে যায়: আমার অ্যাংকর মুভিং অ্যাভারেজ, অধ্যায় ত্রিশের জোন, একটি রাউন্ড অঙ্ক ও একটি দ্বিতীয়-সুইং ক্লাস্টারের বিপরীতে আট স্কোর করে, আর দ্বিতীয় বিশ্লেষকের স্তর এক স্কোর করে, তাই শিট ট্রিগার দাবি করুন থেকে এখানে কিছু নেই-তে চলে যায়। ব্যবহারিক উত্তর হলো আপনি এটি মীমাংসা করতে পারবেন না, তাই আপনি এটি জানাবেন। আমি প্রতিটি সমর্থনযোগ্য অ্যাংকরে গ্রিড গণনা করি, স্তরের পাশে ATR এককে বিচ্ছুরণ উদ্ধৃত করি, আর বিচ্ছুরণ আমার কনফ্লুয়েন্স সহনশীলতা ছাড়িয়ে গেলে — যা এখানে যায়, শূন্য দশমিক পাঁচের বিপরীতে এক দশমিক দুই চার পাঁচ — আমি স্পষ্ট বলি যে স্তরটি মতভেদের একটি অঞ্চল আর আমার বিশ্লেষণ এই দুর্বলতর দাবিতে দাঁড়িয়ে যে তিনটির দুটি অ্যাংকর একমত। ঐ বাক্যটিই বিশ্লেষণ ও বিজ্ঞাপনের পার্থক্য।',
      },
    },
    {
      q: {
        en: 'Price is falling toward your sixty-one point eight level. Why not simply place a buy order there?',
        bn: 'দাম আপনার একষট্টি দশমিক আট স্তরের দিকে নামছে। সেখানে কেবল একটি ক্রয় আদেশ বসাচ্ছেন না কেন?',
      },
      a: {
        en: 'Because the arithmetic on pre-positioning is brutal and I would rather show it than assert it. On my worked example the confluence sits around fifty-five seventy-five and the stop belongs at fifty-four seventeen five, which is half an average true range below the lowest member of the confluence cluster — the fifty-day moving average at fifty-five ten. That stop is a property of the structure, not of my fill, because it is the price at which the moving average, the chapter thirty zone and the Fibonacci level have all failed simultaneously. Now compare two entries against that same stop. If I wait for a chapter twenty-eight trigger inside the band and get filled at fifty-six ninety on a bullish engulfing with twice average volume, my risk is two taka seventy-two and a half, my reward to the thirty-eight point two level at sixty-four twenty-five is seven taka thirty-five, so a ratio of two point seven to one and a break-even win rate of twenty-seven point zero five percent. If instead I rest a buy at the first level price approaches — the fifty percent line at sixty — my risk is five taka eighty-two and a half and my reward is four taka twenty-five, a ratio of zero point seven three, and a break-even of fifty-seven point eight three percent. Same stock, same grid, same stop, same target, and pre-positioning more than doubles the accuracy I need. And fifty-seven point eight three percent before brokerage, on a market where I cannot short the failures, is not a marginal method — it is a losing one. The honest counter-argument is that waiting costs you the trades where price touches the band and reverses without printing a trigger, and I would want to measure that frequency on my own names rather than assume it. But the trade I do take should be the one where I am paying least for the same invalidation.',
        bn: 'কারণ আগেভাগে অবস্থান নেওয়ার পাটিগণিতটি নির্মম আর আমি দাবি করার চেয়ে তা দেখাতে চাই। আমার উদাহরণে কনফ্লুয়েন্স বসে প্রায় পঞ্চান্ন পঁচাত্তরে আর স্টপের জায়গা চুয়ান্ন সতেরো পাঁচে, যা কনফ্লুয়েন্স গুচ্ছের সর্বনিম্ন সদস্যের — পঞ্চান্ন দশে পঞ্চাশ দিনের মুভিং অ্যাভারেজ — অর্ধ গড় true range নিচে। ঐ স্টপ আমার ফিলের নয়, কাঠামোর একটি ধর্ম, কারণ ঐ দামেই মুভিং অ্যাভারেজ, অধ্যায় ত্রিশের জোন ও ফিবোনাচ্চি স্তর একসঙ্গে ব্যর্থ হয়েছে। এবার ঐ একই স্টপের বিপরীতে দুটি প্রবেশ তুলনা করুন। আমি যদি ব্যান্ডের ভেতরে অধ্যায় আটাশের একটি ট্রিগারের অপেক্ষা করি আর গড়ের দ্বিগুণ ভলিউমে একটি বুলিশ এনগালফিংয়ে ছাপ্পান্ন নব্বইতে ফিল পাই, আমার ঝুঁকি দুই টাকা বাহাত্তর পয়সা পঞ্চাশ, চৌষট্টি পঁচিশে আটত্রিশ দশমিক দুই স্তর পর্যন্ত পুরস্কার সাত টাকা পঁয়ত্রিশ, অর্থাৎ দুই দশমিক সাত অনুপাত ও সাতাশ দশমিক শূন্য পাঁচ শতাংশ ব্রেক-ইভেন উইন রেট। বদলে যদি দাম যে প্রথম স্তরের কাছে আসে সেখানে একটি ক্রয় বসাই — ষাটে পঞ্চাশ শতাংশ রেখা — আমার ঝুঁকি পাঁচ টাকা বিরাশি পয়সা পঞ্চাশ আর পুরস্কার চার টাকা পঁচিশ, অনুপাত শূন্য দশমিক সাত তিন, আর ব্রেক-ইভেন সাতান্ন দশমিক আট তিন শতাংশ। একই শেয়ার, একই গ্রিড, একই স্টপ, একই লক্ষ্য, আর আগেভাগে অবস্থান নেওয়ায় আমার প্রয়োজনীয় নির্ভুলতা দ্বিগুণেরও বেশি হয়ে যায়। আর ব্রোকারেজের আগে সাতান্ন দশমিক আট তিন শতাংশ, এমন বাজারে যেখানে আমি ব্যর্থতাগুলো শর্ট করতে পারি না, প্রান্তিক পদ্ধতি নয় — লোকসানি পদ্ধতি। সৎ পাল্টা যুক্তি হলো অপেক্ষা করলে সেই ট্রেডগুলো হাতছাড়া হয় যেখানে দাম ব্যান্ড ছুঁয়ে ট্রিগার না ছেপেই ঘুরে যায়, আর আমি ঐ হার অনুমান না করে নিজের নামগুলোতে মাপতে চাইব। কিন্তু আমি যে ট্রেডটি নিই তা এমন হওয়া উচিত যেখানে একই ইনভ্যালিডেশনের জন্য আমি সবচেয়ে কম দিচ্ছি।',
      },
    },
    {
      q: {
        en: 'Someone shows you a chart where price bounced perfectly off the sixty-one point eight level. What is your first question?',
        bn: 'কেউ আপনাকে এমন চার্ট দেখান যেখানে দাম একষট্টি দশমিক আট স্তর থেকে নিখুঁতভাবে ফিরে এসেছে। আপনার প্রথম প্রশ্ন কী?',
      },
      a: {
        en: 'My first question is when they drew it, and I ask it without any implication of dishonesty, because the failure mode here is almost always unconscious. Here is the calculation that makes the question necessary. On my worked example the swing low is forty-two and the fifty-day moving average is at fifty-five ten. If I ask what swing low would put the sixty-one point eight level exactly on that moving average, the algebra gives forty point nine four five — one taka and five and a half poisha below the anchor I actually used. That is comfortably inside the range of pivots any competent chart-reader could nominate over a three-month leg. So a perfect confluence is always about one taka away, on any chart, at any time. And the adjustment leaves no evidence whatsoever: there is no error message, the grid looks textbook, and the published chart is visually indistinguishable from genuine analysis. Nobody has to lie. You simply look at the chart, see where the turn happened, and your eye finds the pivot that makes the story coherent. That is how most of the impressive Fibonacci charts in circulation are made. So the second question I ask is whether they can show me the written swing rule and the date it was written — pivot definition, the lookback k, the timeframe, the exclusion filters for floor-price and limit-locked bars. If the rule predates the grid, I take the chart seriously. If it does not, the chart is a description of the past wearing the clothes of a forecast, and the test I apply to my own work is exactly the same: could I have drawn this grid a month ago, before the turn I am now explaining?',
        bn: 'আমার প্রথম প্রশ্ন তাঁরা কখন এঁকেছিলেন, আর আমি এটি অসততার কোনো ইঙ্গিত ছাড়াই জিজ্ঞেস করি, কারণ এখানে ব্যর্থতার ধরনটি প্রায় সবসময়ই অবচেতন। যে গণনাটি প্রশ্নটিকে প্রয়োজনীয় করে তা এই। আমার উদাহরণে সুইং লো বিয়াল্লিশ আর পঞ্চাশ দিনের মুভিং অ্যাভারেজ পঞ্চান্ন দশে। আমি যদি জিজ্ঞেস করি কোন সুইং লো একষট্টি দশমিক আট স্তরকে ঠিক ঐ মুভিং অ্যাভারেজে বসাবে, বীজগণিত দেয় চল্লিশ দশমিক নয় চার পাঁচ — আমি সত্যিই যে অ্যাংকর ব্যবহার করেছি তার এক টাকা সাড়ে পাঁচ পয়সা নিচে। তিন মাসের একটি লেগে যেকোনো দক্ষ চার্ট-পাঠক যেসব পিভট মনোনীত করতে পারেন তার পরিসরের স্বচ্ছন্দে ভেতরে। অর্থাৎ একটি নিখুঁত কনফ্লুয়েন্স সবসময় প্রায় এক টাকা দূরে, যেকোনো চার্টে, যেকোনো সময়ে। আর সমন্বয়টি কোনোই প্রমাণ রাখে না: কোনো ভুলবার্তা নেই, গ্রিড পাঠ্যবইসুলভ দেখায়, আর প্রকাশিত চার্টটি প্রকৃত বিশ্লেষণ থেকে দৃশ্যত অভিন্ন। কাউকে মিথ্যা বলতে হয় না। আপনি কেবল চার্টের দিকে তাকান, দেখেন মোড়টি কোথায় হয়েছিল, আর আপনার চোখ সেই পিভটটি খুঁজে নেয় যা গল্পটিকে সুসংহত করে। প্রচলিত বেশিরভাগ চিত্তাকর্ষক ফিবোনাচ্চি চার্ট এভাবেই তৈরি হয়। তাই আমার দ্বিতীয় প্রশ্ন হলো তাঁরা কি লিখিত সুইং নিয়ম ও তা লেখার তারিখ দেখাতে পারবেন — পিভটের সংজ্ঞা, লুকব্যাক k, টাইমফ্রেম, ফ্লোর-প্রাইস ও সীমা-লক বারের বর্জন-ছাঁকনি। নিয়মটি গ্রিডের আগের হলে আমি চার্টটি গুরুত্ব দিই। না হলে চার্টটি পূর্বাভাসের পোশাক পরা অতীতের বর্ণনা, আর নিজের কাজে আমি হুবহু একই পরীক্ষা প্রয়োগ করি: আমি এখন যে মোড় ব্যাখ্যা করছি তার আগে, এক মাস আগে, কি এই গ্রিডটি আঁকতে পারতাম?',
      },
    },
    {
      q: {
        en: 'What specifically breaks about Fibonacci analysis on the DSE that would not break on a developed market?',
        bn: 'ডিএসই-তে ফিবোনাচ্চি বিশ্লেষণের ঠিক কী ভাঙে যা উন্নত বাজারে ভাঙত না?',
      },
      a: {
        en: 'Two things break, and the second one is worse than people realise. The first is the mechanism itself. The coordination story requires a large dispersed participant base independently running the same tool, and that base exists here on maybe the twenty or thirty most heavily traded counters and nowhere else. On a thin name with concentrated ownership, the marginal order at a computed level is not a wall of dispersed retail limits — it is whatever one or two accounts decide that morning, so the self-fulfilling effect is correspondingly weak. And even on the liquid names I would compute the taka value that clears the confluence band: on my worked example twenty-day volume is eight hundred and fifty thousand shares at around fifty-six taka, which is about four crore seventy-six lakh taka a day, so a single five crore taka institutional ticket walks price through the entire band in a session. The second problem is the one that really matters, and it is specific to our regulatory history. This tool depends on two data points — the swing high and the swing low — more than on anything else, and our market corrupts precisely those two prints. A low printed during the floor-price regime is not a pivot; nobody chose to stop selling, they were not permitted to sell lower, so anchoring there anchors to a regulation. A high printed on a circuit-limit lock is where the exchange stopped the move rather than where buyers ran out. And a record-date gap measures a distance nobody ever traded through. Think about what that means: the extremes of a strong move are exactly the prints most likely to be regulatory artefacts, so the DSE damages the two inputs the tool relies on most. On my example the seventy-eight high may be a limit lock, which is the entire reason a third defensible anchor exists at seventy-six fifty. My practice is to flag limit-locked and floor-price bars before pivot detection rather than after, and to report both grids when the flag is ambiguous.',
        bn: 'দুটি জিনিস ভাঙে, আর দ্বিতীয়টি মানুষ যতটা বোঝে তার চেয়ে খারাপ। প্রথমটি কার্যকারণ নিজেই। সমন্বয়ের গল্পের জন্য একটি বড় বিক্ষিপ্ত অংশগ্রহণকারী ভিত্তি দরকার যারা স্বাধীনভাবে একই হাতিয়ার চালায়, আর ঐ ভিত্তি এখানে হয়তো সবচেয়ে বেশি লেনদেন হওয়া কুড়ি-ত্রিশটি কাউন্টারে আছে, অন্য কোথাও নেই। কেন্দ্রীভূত মালিকানার পাতলা একটি নামে গণিত স্তরে প্রান্তিক অর্ডারটি বিক্ষিপ্ত খুচরা লিমিটের দেয়াল নয় — এটি ঐ সকালে এক-দুটি অ্যাকাউন্ট যা ঠিক করে তা-ই, তাই স্বয়ংপূরক প্রভাব সেই অনুপাতে দুর্বল। আর তারল্যপূর্ণ নামেও আমি কনফ্লুয়েন্স ব্যান্ড পরিষ্কার করা টাকার মূল্য গণনা করব: আমার উদাহরণে কুড়ি দিনের ভলিউম প্রায় ছাপ্পান্ন টাকায় আট লক্ষ পঞ্চাশ হাজার শেয়ার, অর্থাৎ দিনে প্রায় চার কোটি ছিয়াত্তর লক্ষ টাকা, তাই পাঁচ কোটি টাকার একটি একক প্রাতিষ্ঠানিক টিকিট এক সেশনে গোটা ব্যান্ডের মধ্য দিয়ে দাম হাঁটিয়ে নেয়। দ্বিতীয় সমস্যাটিই আসল, আর তা আমাদের নিয়ন্ত্রক ইতিহাসের নির্দিষ্ট। এই হাতিয়ারটি দুটি উপাত্ত-বিন্দুর ওপর — সুইং হাই ও সুইং লো — অন্য যেকোনো কিছুর চেয়ে বেশি নির্ভর করে, আর আমাদের বাজার ঠিক ঐ দুটি প্রিন্টই কলুষিত করে। ফ্লোর-প্রাইস ব্যবস্থার সময়ে ছাপা লো কোনো পিভট নয়; কেউ বিক্রি থামানোর সিদ্ধান্ত নেননি, তাঁদের নিচে বিক্রির অনুমতি ছিল না, তাই সেখানে অ্যাংকর করা মানে একটি বিধিতে অ্যাংকর করা। সার্কিট-সীমার লকে ছাপা হাই হলো যেখানে এক্সচেঞ্জ চলনটি থামিয়েছে, ক্রেতা ফুরিয়ে যাওয়ার জায়গা নয়। আর রেকর্ড-ডেট গ্যাপ এমন দূরত্ব মাপে যার ভেতর দিয়ে কেউ কখনো লেনদেন করেনি। ভাবুন এর মানে কী: একটি শক্তিশালী চলনের চরমগুলোই ঠিক সেই প্রিন্ট যেগুলো সবচেয়ে বেশি সম্ভাবনায় নিয়ন্ত্রক কৃত্রিম ফল, তাই ডিএসই হাতিয়ারটির সবচেয়ে নির্ভরশীল দুটি উপাদানকেই ক্ষতিগ্রস্ত করে। আমার উদাহরণে আটাত্তর হাইটি একটি সীমা-লক হতে পারে, আর ছিয়াত্তর পঞ্চাশে একটি তৃতীয় সমর্থনযোগ্য অ্যাংকর থাকার পুরো কারণ সেটিই। আমার চর্চা হলো পিভট শনাক্তকরণের পরে নয় বরং আগে সীমা-লক ও ফ্লোর-প্রাইসের বার চিহ্নিত করা, আর চিহ্নটি দ্ব্যর্থক হলে দুটি গ্রিডই জানানো।',
      },
    },
  ],

  quiz: [
    {
      q: {
        en: 'Which of these is NOT a Fibonacci-derived ratio?',
        bn: 'এদের মধ্যে কোনটি ফিবোনাচ্চি থেকে উদ্ভূত অনুপাত নয়?',
      },
      options: {
        en: ['0.618', '0.382', '0.500', '2.618'],
        bn: ['০.৬১৮', '০.৩৮২', '০.৫০০', '২.৬১৮'],
      },
      answer: 2,
    },
    {
      q: {
        en: 'With a swing low of 42.00 and a swing high of 78.00, the 61.8% retracement level is:',
        bn: 'সুইং লো ৪২.০০ ও সুইং হাই ৭৮.০০ হলে ৬১.৮% রিট্রেসমেন্ট স্তর:',
      },
      options: {
        en: ['55.752', '60.000', '64.248', '49.704'],
        bn: ['৫৫.৭৫২', '৬০.০০০', '৬৪.২৪৮', '৪৯.৭০৪'],
      },
      answer: 0,
    },
    {
      q: {
        en: 'The only defensible mechanism by which Fibonacci levels influence price is:',
        bn: 'ফিবোনাচ্চি স্তর দামকে প্রভাবিত করার একমাত্র সমর্থনযোগ্য কার্যকারণ:',
      },
      options: {
        en: [
          'A universal harmonic law observed in nature',
          'Self-fulfilling coordination — many participants place real orders at the same computed price',
          'A statistical property of random walks',
          'Central bank intervention at golden-ratio prices',
        ],
        bn: [
          'প্রকৃতিতে পর্যবেক্ষিত একটি সর্বজনীন সাদৃশ্য সূত্র',
          'স্বয়ংপূরক সমন্বয় — বহু অংশগ্রহণকারী একই গণিত দামে সত্যিকারের অর্ডার বসান',
          'র‍্যান্ডম ওয়াকের একটি পরিসংখ্যানগত ধর্ম',
          'সোনালি-অনুপাতের দামে কেন্দ্রীয় ব্যাংকের হস্তক্ষেপ',
        ],
      },
      answer: 1,
    },
    {
      q: {
        en: 'Moving the swing low from 42.00 to 44.80 shifts the 61.8% level by BDT 1.7304 because:',
        bn: 'সুইং লো ৪২.০০ থেকে ৪৪.৮০ করলে ৬১.৮% স্তর ১.৭৩০৪ টাকা সরে কারণ:',
      },
      options: {
        en: [
          'The ratio itself changes with the range',
          'The level\'s sensitivity to the low equals the ratio, 0.618',
          'ATR rescales the grid automatically',
          'The extension ratios feed back into the retracements',
        ],
        bn: [
          'রেঞ্জের সঙ্গে অনুপাতটি নিজেই বদলায়',
          'লো-এর প্রতি স্তরের সংবেদনশীলতা অনুপাতেরই সমান, ০.৬১৮',
          'ATR স্বয়ংক্রিয়ভাবে গ্রিড পুনর্মাপন করে',
          'এক্সটেনশন অনুপাত রিট্রেসমেন্টে ফিরে আসে',
        ],
      },
      answer: 1,
    },
    {
      q: {
        en: 'In the confluence score, the weight assigned to the Fibonacci level being tested is:',
        bn: 'কনফ্লুয়েন্স স্কোরে পরীক্ষাধীন ফিবোনাচ্চি স্তরটিকে দেওয়া ওজন:',
      },
      options: {
        en: ['3, the highest weight', '2, equal to a moving average', '1, the same as a round figure', '0 — it nominates the location but does not vote on it'],
        bn: ['৩, সর্বোচ্চ ওজন', '২, মুভিং অ্যাভারেজের সমান', '১, রাউন্ড অঙ্কের সমান', '০ — এটি অবস্থান মনোনীত করে কিন্তু ভোট দেয় না'],
      },
      answer: 3,
    },
    {
      q: {
        en: 'With ATR 1.85 and a tolerance multiple of 0.5, the confluence tolerance band B28 equals:',
        bn: 'ATR ১.৮৫ ও সহনশীলতা গুণক ০.৫ হলে কনফ্লুয়েন্স সহনশীলতার ব্যান্ড B28:',
      },
      options: {
        en: ['0.925', '1.850', '0.500', '3.700'],
        bn: ['০.৯২৫', '১.৮৫০', '০.৫০০', '৩.৭০০'],
      },
      answer: 0,
    },
    {
      q: {
        en: 'The best verdict the §41 sheet can return at cell B34 is:',
        bn: '§৪১ শিট B34 ঘরে যে সেরা রায় ফেরত দিতে পারে:',
      },
      options: {
        en: [
          'BUY — the confluence is confirmed',
          'Confluence within 0.5 ATR of price — now demand a Ch 28/34/40 trigger',
          'Place a resting order at the nearest level',
          'Target the 2.618 extension',
        ],
        bn: [
          'কিনুন — কনফ্লুয়েন্স নিশ্চিত',
          'দামের ০.৫ ATR-এর ভেতরে কনফ্লুয়েন্স — এবার অ ২৮/৩৪/৪০-এর ট্রিগার দাবি করুন',
          'নিকটতম স্তরে একটি অপেক্ষমাণ অর্ডার বসান',
          '২.৬১৮ এক্সটেনশনকে লক্ষ্য করুন',
        ],
      },
      answer: 1,
    },
    {
      q: {
        en: 'Pre-positioning at the 50% line (60.000) instead of waiting for a trigger (56.90), with the same stop at 54.175, changes the break-even win rate from 27.05% to:',
        bn: '৫৪.১৭৫-এ একই স্টপ নিয়ে ট্রিগারের (৫৬.৯০) অপেক্ষার বদলে ৫০% রেখায় (৬০.০০০) আগেভাগে অবস্থান নিলে ব্রেক-ইভেন উইন রেট ২৭.০৫% থেকে হয়:',
      },
      options: {
        en: ['33.33%', '43.09%', '57.83%', '50.00%'],
        bn: ['৩৩.৩৩%', '৪৩.০৯%', '৫৭.৮৩%', '৫০.০০%'],
      },
      answer: 2,
    },
    {
      q: {
        en: 'A "swing low" printed during a floor-price window should be treated as:',
        bn: 'ফ্লোর-প্রাইসের সময়কালে ছাপা একটি "সুইং লো" গণ্য করা উচিত:',
      },
      options: {
        en: [
          'The strongest possible anchor, since price held there',
          'An administrative boundary, not a pivot — exclude it before drawing the grid',
          'A confirmed 100% retracement level',
          'Equivalent to any other intraday low',
        ],
        bn: [
          'সম্ভাব্য শক্তিশালীতম অ্যাংকর, যেহেতু দাম সেখানে ধরে রেখেছে',
          'একটি প্রশাসনিক সীমা, পিভট নয় — গ্রিড আঁকার আগে বাদ দিন',
          'একটি নিশ্চিত ১০০% রিট্রেসমেন্ট স্তর',
          'অন্য যেকোনো ইন্ট্রাডে লো-এর সমতুল্য',
        ],
      },
      answer: 1,
    },
    {
      q: {
        en: 'Why is the 2.618 extension the least reliable number on the sheet?',
        bn: '২.৬১৮ এক্সটেনশন শিটের সবচেয়ে অনির্ভরযোগ্য সংখ্যা কেন?',
      },
      options: {
        en: [
          'Because 2.618 is not a genuine Fibonacci ratio',
          'Because it is an extrapolation: a BDT 1 error in the swing high moves it BDT 2.618, and it sits 43.16 ATR from price',
          'Because it is computed from the swing high rather than the swing low',
          'Because ATR cannot be measured beyond one year',
        ],
        bn: [
          'কারণ ২.৬১৮ প্রকৃত ফিবোনাচ্চি অনুপাত নয়',
          'কারণ এটি একটি বহির্বেশন: সুইং হাই-তে ১ টাকার ত্রুটি একে ২.৬১৮ টাকা সরায়, আর এটি দাম থেকে ৪৩.১৬ ATR দূরে',
          'কারণ এটি সুইং লো নয়, সুইং হাই থেকে গণিত',
          'কারণ এক বছরের বেশি ATR মাপা যায় না',
        ],
      },
      answer: 1,
    },
  ],
};
