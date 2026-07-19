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
  },
};
