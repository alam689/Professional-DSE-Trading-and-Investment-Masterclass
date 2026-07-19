/**
 * Chapter 34 — Moving Averages
 * Part III, Technical Analysis.
 */

export default {
  n: 34,
  tools: [],

  excelSheet: {
    filename: 'ch34-moving-average-crossover-cost.xlsx',
    sheetName: 'MA Crossover',
    cells: [
/*CELLS*/
    ],
  },

  objectives: {
    en: [
      'State what an indicator is — a transformation of price that adds no information — and apply that test to every tool in Part III.',
      'Compute SMA, EMA and WMA by hand, derive the EMA smoothing constant, and explain why an EMA has no true start date.',
      'Quantify the lag of an N-period average as (N−1)/2 bars and explain why every crossover signal is late by construction.',
      'Show with arithmetic why a moving-average crossover system loses money in ranging markets once DSE round-trip costs are charged.',
      'Apply a trend filter to a crossover system and explain why parameter optimisation on in-sample data is not evidence.',
    ],
    bn: [
      'ইন্ডিকেটর কী তা বলা — দামের একটি রূপান্তর যা নতুন কোনো তথ্য যোগ করে না — এবং পার্ট III-এর প্রতিটি হাতিয়ারে এই পরীক্ষা প্রয়োগ করা।',
      'হাতে SMA, EMA ও WMA গণনা করা, EMA-র স্মুদিং ধ্রুবক নিষ্কাশন করা, এবং কেন EMA-র কোনো প্রকৃত শুরুর তারিখ নেই তা ব্যাখ্যা করা।',
      'N-পিরিয়ড গড়ের পশ্চাদপদতা (N−1)/2 বার হিসেবে পরিমাপ করা এবং কেন প্রতিটি ক্রসওভার সংকেত গঠনগতভাবেই দেরিতে আসে তা ব্যাখ্যা করা।',
      'পাটিগণিত দিয়ে দেখানো কেন ডিএসই-র রাউন্ড-ট্রিপ খরচ ধরলে রেঞ্জিং বাজারে মুভিং অ্যাভারেজ ক্রসওভার সিস্টেম টাকা হারায়।',
      'একটি ক্রসওভার সিস্টেমে ট্রেন্ড ফিল্টার প্রয়োগ করা এবং কেন ইন-স্যাম্পল ডেটায় প্যারামিটার অপটিমাইজেশন কোনো প্রমাণ নয় তা ব্যাখ্যা করা।',
    ],
  },

  blocks: {
    theory: {
      en: `This is the first indicator chapter, and what it establishes about indicators matters more than what it establishes about moving averages.

### An indicator is a transformation of price

Chapters 26 through 33 worked directly on price and volume: structure, trend, support and resistance, candlesticks, patterns, gaps. Nothing was computed. You read what the market printed.

An indicator is different in exactly one way. **It takes the same price series and applies a function to it.** That is all it does.

The consequence is severe and permanent:

- **An indicator contains no information that is not already in the price series.** It cannot. It is a function of that series and nothing else.
- **Every indicator therefore trades responsiveness against noise.** Smooth the series more and you see the trend more clearly but later. Smooth it less and you see it sooner but you also see moves that are not there.
- **There is no setting that escapes this.** The parameter you choose places you somewhere on that curve. It does not lift you off it.

Hold that in mind through RSI in Chapter 36, Bollinger Bands in Chapter 38, and everything after. **When someone claims an indicator "predicts", ask what information it has that the price does not.** The answer is always none.

What an indicator does supply is *legibility*. Human eyes are bad at extracting a central tendency from a jagged line. A moving average does that arithmetic reliably and identically every time — which is worth something, and is a smaller thing than most traders believe.

### The four averages

**Simple moving average (SMA).** The arithmetic mean of the last $N$ closes. Every bar in the window carries weight $1/N$; every bar outside carries zero. Its defect is that it treats the oldest bar in the window exactly like the newest, and then discards it abruptly. A single large print entering or leaving the window moves the line even when nothing has happened today.

**Exponential moving average (EMA).** Weights decay geometrically into the past. Defined by the recursion

$$E_t = \\alpha P_t + (1-\\alpha) E_{t-1}$$

with smoothing constant $\\alpha$. The convention $\\alpha = 2/(N+1)$ exists so that an EMA labelled "20" has the same **centre of mass** as an SMA(20) — the same average age of data, so the two lag comparably. It is a calibration choice, not a law.

**Weighted moving average (WMA).** Linear weights: the newest bar gets weight $N$, the next $N-1$, down to $1$. Faster than the SMA, slower to discard than the EMA. Rarely worth the extra arithmetic on its own.

**Adaptive averages** (KAMA, VIDYA, and their relatives) vary $\\alpha$ with measured volatility or trend efficiency — smoothing hard in chop, tracking closely in trend. They are a genuine idea, and they add a second layer of parameters to fit. **On DSE data, where the sample of clean trending episodes per name is small, an adaptive average is usually a more elaborate way to overfit.** Learn it, but do not start there.

### The EMA does not stop at N bars

This is the point most textbooks skip, and it matters.

Unrolling the recursion gives

$$E_t = \\alpha \\sum_{k=0}^{\\infty} (1-\\alpha)^k P_{t-k}$$

**The sum runs to infinity.** An EMA(20) does not use 20 bars — it uses every bar that ever existed, with geometrically shrinking weight.

The share of total weight sitting *beyond* bar $N$ is $(1-\\alpha)^N$. With $\\alpha = 2/(N+1)$ this converges to $e^{-2} \\approx 13.53\\%$ **for every $N$**. An EMA(20) carries 13.5% of its weight in bars older than 20; so does an EMA(200) in bars older than 200. Reaching 99% of the weight takes about $2.3N$ bars.

Two practical consequences follow:

1. **The seed is a fiction.** Software seeds an EMA with the first SMA(N), or with the first close, or with whatever the vendor chose. A true EMA has no start date. Two platforms seeded differently will print different EMA values on the same data, converging slowly. **If your broker's chart and your spreadsheet disagree on the EMA, this is usually why.**
2. **An EMA computed on a short history is wrong.** Give an EMA(50) at least 150 bars of warm-up before you act on it. For DSE names listed recently, or for a series that starts after the floor-price era, that warm-up may not exist.

### Lag is not a defect

An SMA(N) is centred on the middle of its window. Its centre of mass sits $(N-1)/2$ bars in the past:

| Average | Lag (bars) |
|---|---|
| SMA(5) | 2.0 |
| SMA(20) | 9.5 |
| SMA(50) | 24.5 |
| SMA(200) | 99.5 |

**A 200-day average is telling you, on average, where price was a hundred sessions ago.** A crossover between a 50 and a 200 is a comparison of two backward-looking statements, so it cannot fire near a turning point. It fires well after.

Every attempt to "remove" the lag — zero-lag EMAs, Hull averages, displaced averages — removes it by extrapolating, which means **manufacturing signal where there is none**. You may trade the noise sooner. You have not seen the future. Lag is the price of smoothing, and it is charged in full.

### What moving averages are actually for

- **Trend identification.** Price above a rising average is an uptrend; below a falling one is a downtrend. **The slope carries more information than the crossing.** A flat average with price oscillating across it is not a trend at all — it is a range with a line drawn through the middle of it.
- **Dynamic support and resistance.** In an established trend, pullbacks often stall near a well-watched average. This is partly reflexive: enough participants watch the 50-day for it to become a level. Chapter 28's rules on support still apply — a level is a zone, and it is only a level once it has held.
- **Crossover systems.** Fast crosses slow, you act. The 50/200 pair has the folk names *golden cross* (up) and *death cross* (down). **Neither name is analysis.** They are late by roughly a hundred bars, and their published hit rates are computed on indices in long secular bull markets, not on thin single names.
- **Ribbons.** Several averages plotted together. Fanning apart signals trend strength; braiding together signals chop. A ribbon is a legibility device — it shows you the whipsaw regime before it costs you money, which is its real use.
- **Envelopes.** Bands at a fixed percentage above and below an average. A crude precursor to the volatility-scaled bands of Chapter 38, and inferior to them, because the correct band width is not constant.

### The honest core: crossovers lose in ranges

Here is the sentence the marketing material omits. **Moving-average crossover systems lose money in ranging markets, and most markets range most of the time.**

The mechanism is mechanical, not bad luck. In a range, the fast average oscillates across the slow one repeatedly. Each crossing is a signal. Each signal is a round trip. Each round trip pays the full cost. The system is *designed* to trade most often precisely when there is no trend to capture.

Run the arithmetic on a year of a typical DSE mid-cap. Suppose the 20/50 crossover produces 14 round trips: 4 in genuine trends averaging +6.5% gross, and 10 in chop averaging −1.8% gross.

$$\\text{Gross} = 4(6.5) + 10(-1.8) = +8.0\\%$$

That looks like an edge. Now charge cost. **Assume 0.40% per side all-in — brokerage plus exchange and regulatory levies — so 0.80% round trip.** Substitute your own broker's schedule; this is an illustrative figure, not a quoted rate.

$$\\text{Cost} = 14 \\times 0.80 = 11.2\\% \\qquad \\text{Net} = 8.0 - 11.2 = \\mathbf{-3.2\\%}$$

**The strategy has a positive gross edge and a negative net return.** Average gross per trade is $8.0/14 = 0.571\\%$, which is the break-even round-trip cost. Any broker charging more than 0.286% per side destroys it. **This is the DSE caveat, and it is not marginal — it is decisive.** Costs here are high relative to developed markets, and a system whose profitability depends on trading often is structurally disadvantaged before the first signal fires.

### The fix, and the trap

The fix is a **trend filter**: take crossover signals only when the market is trending. Require the slow average's slope to exceed a threshold, or require a directional-strength reading (ADX-style, Chapter 37) above a floor. On the same 14 trades, suppose the filter removes 8 of the 10 chop trades and costs you 1 of the 4 trend trades:

$$\\text{Gross} = 3(6.5) + 2(-1.8) = +15.9\\% \\qquad \\text{Cost} = 5 \\times 0.80 = 4.0\\%$$
$$\\text{Net} = \\mathbf{+11.9\\%}$$

**Fewer trades, better net.** The filter did not improve the entries; it removed the ones that were never worth taking.

The trap is **parameter optimisation**. Test every fast/slow pair on your history, pick the best, and you will find one that returns beautifully. You have discovered nothing. With 20 fast values and 20 slow values you have run 400 tests on one sample, and the best of 400 looks good by construction. **The 50/200 pair is not magic — it is a convention that survived because it is round, not because it is optimal.** Any backtest that selects parameters in-sample and reports in-sample returns is fiction. Chapter 55 covers what an honest backtest requires: out-of-sample data, walk-forward testing, and cost assumptions fixed before you look at results.

### The DSE overlay

Three things break moving averages on this exchange specifically.

**Round-trip cost, as above.** High-frequency crossover systems are structurally unprofitable here. Not "hard" — structurally unprofitable, because the cost per trade exceeds the average gross edge per trade.

**The floor-price era poisons the data.** Where an administrative floor held a stock flat for months, the average over that stretch is not an average of market prices — it is an average of a policy. **Any moving average whose window spans that period is meaningless, and any backtest that includes it is measuring the floor, not the strategy.** Exclude the period explicitly and say that you have.

**Thin names gap through the average rather than testing it.** The dynamic-support story assumes enough participants trading closely enough to make the level function. On a name with a handful of trades a day and a wide spread, price does not approach the 50-day and bounce — it opens 4% below it. The average never becomes a level because nothing transacts there. **Reserve MA support-and-resistance reasoning for the liquid names, and drop it entirely below the liquidity threshold you set in Chapter 27.**

Chapter 35 takes the EMA recursion you have just derived and builds MACD directly on top of it — two EMAs, their difference, and an EMA of that difference. Everything you now know about lag and warm-up carries straight across.`,
      bn: `এটি প্রথম ইন্ডিকেটর অধ্যায়, আর ইন্ডিকেটর সম্পর্কে এটি যা প্রতিষ্ঠা করে তা মুভিং অ্যাভারেজ সম্পর্কে যা প্রতিষ্ঠা করে তার চেয়ে বেশি গুরুত্বপূর্ণ।

### ইন্ডিকেটর দামের একটি রূপান্তর

অধ্যায় ২৬ থেকে ৩৩ সরাসরি দাম ও ভলিউমে কাজ করেছে: কাঠামো, ট্রেন্ড, সাপোর্ট ও রেজিস্ট্যান্স, ক্যান্ডেলস্টিক, প্যাটার্ন, গ্যাপ। কিছুই গণনা করা হয়নি। বাজার যা ছেপেছে আপনি তা পড়েছেন।

ইন্ডিকেটর ঠিক একটি জায়গায় ভিন্ন। **এটি একই দামের সিরিজ নেয় এবং তাতে একটি ফাংশন প্রয়োগ করে।** এটুকুই এর কাজ।

পরিণতিটি কঠোর ও স্থায়ী:

- **দামের সিরিজে ইতিমধ্যে নেই এমন কোনো তথ্য ইন্ডিকেটরে থাকে না।** থাকতে পারে না। এটি ঐ সিরিজের একটি ফাংশন, আর কিছুই নয়।
- **তাই প্রতিটি ইন্ডিকেটর সাড়াশীলতার সঙ্গে নয়েজের বিনিময় করে।** বেশি স্মুদ করলে ট্রেন্ড স্পষ্টতর দেখবেন কিন্তু দেরিতে। কম স্মুদ করলে আগে দেখবেন, কিন্তু যেসব নড়াচড়া নেই সেগুলোও দেখবেন।
- **এই ব্যবস্থা থেকে পালানোর কোনো সেটিং নেই।** আপনার বেছে নেওয়া প্যারামিটার আপনাকে ঐ বক্ররেখার কোনো একটি বিন্দুতে বসায়। বক্ররেখা থেকে তুলে নেয় না।

অধ্যায় ৩৬-এর RSI, অধ্যায় ৩৮-এর বলিঙ্গার ব্যান্ড ও তার পরের সবকিছুতে এটি মনে রাখুন। **কেউ যখন দাবি করে কোনো ইন্ডিকেটর "ভবিষ্যদ্বাণী করে", জিজ্ঞেস করুন দামের কাছে নেই এমন কোন তথ্য তার কাছে আছে।** উত্তর সবসময় — কিছুই না।

ইন্ডিকেটর যা সরবরাহ করে তা হলো *পাঠযোগ্যতা*। মানুষের চোখ খাঁজকাটা রেখা থেকে কেন্দ্রীয় প্রবণতা বের করতে দুর্বল। মুভিং অ্যাভারেজ ঐ পাটিগণিতটি প্রতিবার নির্ভরযোগ্যভাবে ও অভিন্নভাবে করে — যার মূল্য আছে, এবং যা বেশিরভাগ ট্রেডার যা ভাবেন তার চেয়ে ছোট জিনিস।

### চারটি গড়

**সিম্পল মুভিং অ্যাভারেজ (SMA)।** শেষ $N$টি ক্লোজের গাণিতিক গড়। উইন্ডোর প্রতিটি বার $1/N$ ওজন বহন করে; বাইরের প্রতিটি বার শূন্য। এর ত্রুটি হলো এটি উইন্ডোর সবচেয়ে পুরনো বারকে ঠিক নতুনটির মতোই গণ্য করে, তারপর হঠাৎ বাদ দেয়। একটি বড় প্রিন্ট উইন্ডোয় ঢুকলে বা বেরোলে আজ কিছু না ঘটলেও রেখাটি নড়ে।

**এক্সপোনেনশিয়াল মুভিং অ্যাভারেজ (EMA)।** ওজন অতীতের দিকে জ্যামিতিকভাবে ক্ষয় পায়। রিকার্শন দিয়ে সংজ্ঞায়িত:

$$E_t = \\alpha P_t + (1-\\alpha) E_{t-1}$$

যেখানে $\\alpha$ স্মুদিং ধ্রুবক। $\\alpha = 2/(N+1)$ প্রথাটি আছে যাতে "২০" লেবেলযুক্ত EMA-র **ভরকেন্দ্র** SMA(20)-এর সমান হয় — ডেটার একই গড় বয়স, তাই দুটির পশ্চাদপদতা তুলনীয় হয়। এটি একটি ক্যালিব্রেশন পছন্দ, কোনো নিয়ম নয়।

**ওয়েটেড মুভিং অ্যাভারেজ (WMA)।** রৈখিক ওজন: নতুনতম বার পায় $N$, পরেরটি $N-1$, এভাবে $1$ পর্যন্ত। SMA-র চেয়ে দ্রুত, EMA-র চেয়ে বাদ দিতে ধীর। একা ব্যবহারে অতিরিক্ত পাটিগণিতের মূল্য সাধারণত নেই।

**অ্যাডাপটিভ গড়** (KAMA, VIDYA ও তাদের স্বজন) পরিমাপিত অস্থিরতা বা ট্রেন্ড দক্ষতার সঙ্গে $\\alpha$ বদলায় — চপে জোরে স্মুদ করে, ট্রেন্ডে ঘনিষ্ঠভাবে অনুসরণ করে। ধারণাটি প্রকৃত, আর এটি ফিট করার মতো দ্বিতীয় স্তরের প্যারামিটার যোগ করে। **ডিএসই ডেটায়, যেখানে প্রতি নামের পরিষ্কার ট্রেন্ডিং পর্বের নমুনা কম, অ্যাডাপটিভ গড় সাধারণত ওভারফিট করার আরও অলঙ্কৃত উপায়।** শিখুন, কিন্তু ওখান থেকে শুরু করবেন না।

### EMA N বারে থামে না

এই বিন্দুটি বেশিরভাগ পাঠ্যবই এড়িয়ে যায়, আর এটি গুরুত্বপূর্ণ।

রিকার্শন খুললে পাওয়া যায়:

$$E_t = \\alpha \\sum_{k=0}^{\\infty} (1-\\alpha)^k P_{t-k}$$

**যোগফলটি অসীম পর্যন্ত চলে।** EMA(20) ২০টি বার ব্যবহার করে না — এটি কখনো অস্তিত্বে থাকা প্রতিটি বার ব্যবহার করে, জ্যামিতিকভাবে সংকুচিত ওজনসহ।

বার $N$-এর *বাইরে* থাকা মোট ওজনের অংশ $(1-\\alpha)^N$। $\\alpha = 2/(N+1)$ হলে এটি **প্রতিটি $N$-এর জন্য** $e^{-2} \\approx 13.53\\%$-এ অভিসারী হয়। EMA(20) তার ওজনের ১৩.৫% রাখে ২০-এর বেশি পুরনো বারে; EMA(200)-ও তাই রাখে ২০০-এর বেশি পুরনো বারে। ওজনের ৯৯%-এ পৌঁছাতে প্রায় $2.3N$ বার লাগে।

দুটি ব্যবহারিক পরিণতি:

১. **সিড একটি কল্পকাহিনি।** সফটওয়্যার EMA-কে প্রথম SMA(N) দিয়ে, বা প্রথম ক্লোজ দিয়ে, বা বিক্রেতা যা বেছেছে তা দিয়ে সিড করে। প্রকৃত EMA-র কোনো শুরুর তারিখ নেই। ভিন্নভাবে সিড করা দুটি প্ল্যাটফর্ম একই ডেটায় ভিন্ন EMA মান ছাপবে, ধীরে অভিসারী হবে। **আপনার ব্রোকারের চার্ট আর আপনার স্প্রেডশিট EMA নিয়ে দ্বিমত করলে কারণ সাধারণত এটিই।**
২. **সংক্ষিপ্ত ইতিহাসে গণিত EMA ভুল।** EMA(50)-কে কাজে লাগানোর আগে অন্তত ১৫০ বার ওয়ার্ম-আপ দিন। সম্প্রতি তালিকাভুক্ত ডিএসই নাম, বা ফ্লোর-প্রাইস যুগের পরে শুরু হওয়া সিরিজে ঐ ওয়ার্ম-আপ নাও থাকতে পারে।

### পশ্চাদপদতা কোনো ত্রুটি নয়

SMA(N) তার উইন্ডোর মাঝখানে কেন্দ্রীভূত। এর ভরকেন্দ্র অতীতে $(N-1)/2$ বার পিছিয়ে বসে:

| গড় | পশ্চাদপদতা (বার) |
|---|---|
| SMA(5) | ২.০ |
| SMA(20) | ৯.৫ |
| SMA(50) | ২৪.৫ |
| SMA(200) | ৯৯.৫ |

**২০০ দিনের গড় আপনাকে গড়ে বলছে দাম একশো সেশন আগে কোথায় ছিল।** ৫০ ও ২০০-এর মধ্যে ক্রসওভার দুটি পশ্চাদমুখী বিবৃতির তুলনা, তাই এটি মোড়ের কাছে জ্বলতে পারে না। এটি অনেক পরে জ্বলে।

পশ্চাদপদতা "সরানোর" প্রতিটি চেষ্টা — জিরো-ল্যাগ EMA, হাল অ্যাভারেজ, ডিসপ্লেসড অ্যাভারেজ — বহির্বেশন করে সরায়, অর্থাৎ **যেখানে সংকেত নেই সেখানে সংকেত তৈরি করে**। আপনি নয়েজ আগে ট্রেড করতে পারেন। ভবিষ্যৎ দেখেননি। পশ্চাদপদতা স্মুদিংয়ের মূল্য, আর তা পুরোটাই আদায় করা হয়।

### মুভিং অ্যাভারেজ আসলে কী কাজে লাগে

- **ট্রেন্ড চিহ্নিতকরণ।** ঊর্ধ্বমুখী গড়ের ওপরে দাম আপট্রেন্ড; নিম্নমুখী গড়ের নিচে ডাউনট্রেন্ড। **ক্রসিংয়ের চেয়ে ঢাল বেশি তথ্য বহন করে।** সমতল গড়ের ওপর-নিচে দাম দোলা মোটেই ট্রেন্ড নয় — এটি একটি রেঞ্জ যার মাঝ দিয়ে একটি রেখা টানা হয়েছে।
- **গতিশীল সাপোর্ট ও রেজিস্ট্যান্স।** প্রতিষ্ঠিত ট্রেন্ডে পুলব্যাক প্রায়ই বহুল-পর্যবেক্ষিত গড়ের কাছে থেমে যায়। এটি আংশিকভাবে প্রতিফলনমূলক: যথেষ্ট অংশগ্রহণকারী ৫০-দিনের গড় দেখেন বলেই তা একটি স্তরে পরিণত হয়। অধ্যায় ২৮-এর সাপোর্ট বিধি এখনো প্রযোজ্য — একটি স্তর একটি অঞ্চল, আর এটি টিকে যাওয়ার পরেই কেবল স্তর।
- **ক্রসওভার সিস্টেম।** দ্রুত ধীরকে অতিক্রম করে, আপনি কাজ করেন। ৫০/২০০ জোড়ার লোকনাম *গোল্ডেন ক্রস* (ঊর্ধ্বে) ও *ডেথ ক্রস* (নিম্নে)। **কোনো নামই বিশ্লেষণ নয়।** এগুলো প্রায় একশো বার দেরিতে আসে, আর এদের প্রকাশিত সাফল্যের হার গণিত হয়েছে দীর্ঘ সেকুলার বুল বাজারে সূচকের ওপর, পাতলা একক নামে নয়।
- **রিবন।** একসঙ্গে আঁকা কয়েকটি গড়। ছড়িয়ে পড়া ট্রেন্ডের শক্তি নির্দেশ করে; জড়িয়ে যাওয়া চপ নির্দেশ করে। রিবন একটি পাঠযোগ্যতার যন্ত্র — এটি হুইপস (whipsaw) ব্যবস্থা টাকা খরচ হওয়ার আগেই দেখায়, আর এটিই এর প্রকৃত ব্যবহার।
- **এনভেলপ।** গড়ের ওপরে ও নিচে নির্দিষ্ট শতাংশে ব্যান্ড। অধ্যায় ৩৮-এর অস্থিরতা-স্কেলড ব্যান্ডের একটি অমার্জিত পূর্বসূরি, এবং তার চেয়ে নিকৃষ্ট, কারণ সঠিক ব্যান্ড প্রস্থ ধ্রুবক নয়।

### সৎ মর্মকথা: রেঞ্জে ক্রসওভার হারায়

এই বাক্যটিই বিপণন সামগ্রী বাদ দেয়। **মুভিং অ্যাভারেজ ক্রসওভার সিস্টেম রেঞ্জিং বাজারে টাকা হারায়, আর বেশিরভাগ বাজার বেশিরভাগ সময় রেঞ্জে থাকে।**

কারণটি যান্ত্রিক, দুর্ভাগ্য নয়। রেঞ্জে দ্রুত গড় বারবার ধীর গড়ের এপাশ-ওপাশ করে। প্রতিটি অতিক্রম একটি সংকেত। প্রতিটি সংকেত একটি রাউন্ড ট্রিপ। প্রতিটি রাউন্ড ট্রিপ পুরো খরচ দেয়। সিস্টেমটি ঠিক তখনই সবচেয়ে বেশি ট্রেড করার জন্য *নকশা করা*, যখন ধরার মতো কোনো ট্রেন্ড নেই।

একটি সাধারণ ডিএসই মিড-ক্যাপের এক বছরে পাটিগণিত চালান। ধরুন ২০/৫০ ক্রসওভার ১৪টি রাউন্ড ট্রিপ দেয়: ৪টি প্রকৃত ট্রেন্ডে গড়ে +৬.৫% গ্রস, আর ১০টি চপে গড়ে −১.৮% গ্রস।

$$\\text{Gross} = 4(6.5) + 10(-1.8) = +8.0\\%$$

এটি একটি প্রান্ত (edge) বলে মনে হয়। এবার খরচ ধরুন। **ধরুন প্রতি পাশে সর্বমোট ০.৪০% — ব্রোকারেজ যোগ এক্সচেঞ্জ ও নিয়ন্ত্রক লেভি — অর্থাৎ রাউন্ড ট্রিপে ০.৮০%।** নিজের ব্রোকারের তালিকা বসান; এটি উদাহরণমূলক সংখ্যা, উদ্ধৃত হার নয়।

$$\\text{Cost} = 14 \\times 0.80 = 11.2\\% \\qquad \\text{Net} = 8.0 - 11.2 = \\mathbf{-3.2\\%}$$

**কৌশলটির গ্রস প্রান্ত ধনাত্মক আর নিট রিটার্ন ঋণাত্মক।** প্রতি ট্রেডে গড় গ্রস $8.0/14 = 0.571\\%$, যা ব্রেক-ইভেন রাউন্ড-ট্রিপ খরচ। প্রতি পাশে ০.২৮৬%-এর বেশি নেওয়া যেকোনো ব্রোকার এটি ধ্বংস করে। **এটিই ডিএসই সতর্কতা, আর এটি প্রান্তিক নয় — নির্ণায়ক।** এখানে খরচ উন্নত বাজারের তুলনায় উঁচু, আর যে সিস্টেমের লাভজনকতা ঘন ঘন ট্রেড করার ওপর নির্ভর করে তা প্রথম সংকেত জ্বলার আগেই কাঠামোগতভাবে পিছিয়ে থাকে।

### সমাধান, ও ফাঁদ

সমাধান হলো একটি **ট্রেন্ড ফিল্টার**: বাজার ট্রেন্ডে থাকলেই কেবল ক্রসওভার সংকেত নিন। ধীর গড়ের ঢাল একটি সীমা ছাড়াতে হবে, অথবা দিকনির্দেশক শক্তির পাঠ (ADX-ধাঁচের, অধ্যায় ৩৭) একটি মেঝের ওপরে থাকতে হবে। ঐ একই ১৪টি ট্রেডে ধরুন ফিল্টার ১০টি চপ ট্রেডের ৮টি সরায় আর ৪টি ট্রেন্ড ট্রেডের ১টি হারায়:

$$\\text{Gross} = 3(6.5) + 2(-1.8) = +15.9\\% \\qquad \\text{Cost} = 5 \\times 0.80 = 4.0\\%$$
$$\\text{Net} = \\mathbf{+11.9\\%}$$

**কম ট্রেড, ভালো নিট।** ফিল্টার এন্ট্রি উন্নত করেনি; যেগুলো কখনোই নেওয়ার মতো ছিল না সেগুলো সরিয়েছে।

ফাঁদটি হলো **প্যারামিটার অপটিমাইজেশন**। আপনার ইতিহাসে প্রতিটি দ্রুত/ধীর জোড়া পরীক্ষা করুন, সেরাটি বেছে নিন, আর আপনি এমন একটি পাবেন যা চমৎকার রিটার্ন দেয়। আপনি কিছুই আবিষ্কার করেননি। ২০টি দ্রুত ও ২০টি ধীর মানে আপনি একটি নমুনায় ৪০০টি পরীক্ষা চালিয়েছেন, আর ৪০০-র সেরাটি গঠনগতভাবেই ভালো দেখায়। **৫০/২০০ জোড়া জাদু নয় — এটি একটি প্রথা যা টিকে আছে কারণ সংখ্যাদুটি গোল, সর্বোত্তম বলে নয়।** যে ব্যাকটেস্ট ইন-স্যাম্পল প্যারামিটার বাছে ও ইন-স্যাম্পল রিটার্ন জানায় তা কল্পকাহিনি। অধ্যায় ৫৫ বলে একটি সৎ ব্যাকটেস্টে কী লাগে: আউট-অব-স্যাম্পল ডেটা, ওয়াক-ফরওয়ার্ড পরীক্ষা, এবং ফলাফল দেখার আগেই স্থির করা খরচের অনুমান।

### ডিএসই আচ্ছাদন

তিনটি জিনিস বিশেষভাবে এই এক্সচেঞ্জে মুভিং অ্যাভারেজ ভেঙে দেয়।

**রাউন্ড-ট্রিপ খরচ, উপরের মতো।** উচ্চ-কম্পাঙ্কের ক্রসওভার সিস্টেম এখানে কাঠামোগতভাবে অলাভজনক। "কঠিন" নয় — কাঠামোগতভাবে অলাভজনক, কারণ প্রতি ট্রেডে খরচ প্রতি ট্রেডে গড় গ্রস প্রান্তকে ছাড়িয়ে যায়।

**ফ্লোর-প্রাইস যুগ ডেটা বিষাক্ত করে।** যেখানে প্রশাসনিক মেঝে মাসের পর মাস একটি শেয়ারকে সমতল রেখেছিল, ঐ পর্বের গড় বাজারদামের গড় নয় — এটি একটি নীতির গড়। **যে মুভিং অ্যাভারেজের উইন্ডো ঐ সময় বিস্তৃত করে তা অর্থহীন, আর যে ব্যাকটেস্ট তা অন্তর্ভুক্ত করে তা কৌশল নয়, মেঝে মাপছে।** পর্বটি স্পষ্টভাবে বাদ দিন এবং বলুন যে বাদ দিয়েছেন।

**পাতলা নাম গড় পরীক্ষা না করে তার ভেতর দিয়ে গ্যাপ করে যায়।** গতিশীল সাপোর্টের গল্পটি ধরে নেয় যথেষ্ট অংশগ্রহণকারী যথেষ্ট ঘনিষ্ঠভাবে ট্রেড করছেন যাতে স্তরটি কাজ করে। দিনে হাতেগোনা কয়েকটি ট্রেড ও চওড়া স্প্রেডের নামে দাম ৫০-দিনের গড়ের কাছে এসে ফিরে যায় না — এটি ৪% নিচে খোলে। গড়টি কখনো স্তর হয় না কারণ ওখানে কিছুই লেনদেন হয় না। **MA সাপোর্ট-রেজিস্ট্যান্স যুক্তি তরল নামগুলোর জন্য রাখুন, আর অধ্যায় ২৭-এ ঠিক করা তারল্য সীমার নিচে তা সম্পূর্ণ বাদ দিন।**

অধ্যায় ৩৫ আপনার সদ্য নিষ্কাশিত EMA রিকার্শন নিয়ে তার ওপরেই সরাসরি MACD গড়ে তোলে — দুটি EMA, তাদের পার্থক্য, এবং ঐ পার্থক্যের একটি EMA। পশ্চাদপদতা ও ওয়ার্ম-আপ সম্পর্কে আপনি এখন যা জানেন তা সবটাই সরাসরি প্রযোজ্য।`,
    },

    simple: {
      en: `Think about the speedometer in a bus.

The needle does not jump. You press the accelerator and it climbs steadily. You brake and it falls steadily. It never flicks about the way the road does — potholes, gear changes, a moment of clutch — because the needle is damped. **Damping is what makes it readable.**

Now notice the cost of that. **The needle tells you how fast you were going a moment ago, not how fast you are going now.** If the driver slams the brakes, the needle is still reading high while the bus is already slowing. The heavier the damping, the smoother the needle and the further behind it sits.

A moving average is exactly this. **It is a damped needle on the price.**

### There is no free smoothness

Ask for a smoother needle and you get a later one. Ask for a faster needle and you get one that twitches at every pothole.

- A **5-day average** is a twitchy needle. It follows price closely and it lies to you constantly, because it treats one loud session as a change of direction.
- A **200-day average** is a heavy needle. It almost never lies, and by the time it moves you have been going the other way for months.

**That trade-off is the whole subject.** Every argument about which average to use, which length, simple or exponential, is an argument about where on that one dial you want to sit. **Nobody has ever found a setting that is both smooth and immediate**, and anyone selling you one is selling you extrapolation dressed as measurement.

### Why the average tells you nothing new

Here is the part that should change how you look at every indicator in Part III.

**The needle is driven entirely by the accelerator.** It has no separate sensor. It cannot know something the engine does not know. If you had a perfect record of every press of the pedal, the needle would tell you nothing you could not already work out.

A moving average is a number computed *from* the closing prices. **It has no information that the closing prices do not have.** It is a convenience for your eyes, and it is only that. It converts a jagged line into a smooth one so that a human brain can see a direction. That is genuinely useful. It is also much smaller than what most traders believe they are buying.

### Two needles, and the moment they cross

The popular game is to fit two needles — a light one and a heavy one — and act when the light one crosses the heavy one.

Picture the bus again. The light needle drops below the heavy one only *after* the driver has been braking for a while. **The cross is not a warning. It is a confirmation that the braking already happened.** It is late by construction, and no amount of tuning removes that, because the lateness is what buys you the smoothness.

Where this becomes expensive is on a bumpy road. If the driver is riding the accelerator on and off through traffic, the light needle keeps crossing back and forth across the heavy one. Ten crossings, ten signals, ten trades. **And on the DSE, every one of those trades costs you brokerage on the way in and brokerage on the way out.**

That is the sentence to keep. **A crossover system trades most often exactly when there is nothing to catch**, and it charges you full price for each of those trades.

### And on the DSE, three extra warnings

**One: the flat stretches are not calm markets.** Where a floor price held a share from trading lower, the average across those months is the average of a rule, not of a market. The needle looks beautifully steady. It is measuring nothing.

**Two: the average is not a wall on a thin share.** People say "it bounced off the 50-day." That only happens where enough buyers and sellers are actually trading near that price. On a name with twenty trades a day, price does not walk down to the 50-day and stop — it opens four percent below it and never touches it. **You cannot bounce off a level nobody is standing on.**

**Three: a share can also just stop.** When it hits the daily circuit limit, the session ends where the rulebook ran out of room, not where buyers and sellers agreed. Feed that close into your average and you have averaged in a regulation.

So: use the needle to read direction. **Read the slope, not the crossing.** And never forget that the needle is downstream of the road, never ahead of it.`,
      bn: `একটি বাসের স্পিডোমিটারের কথা ভাবুন।

কাঁটাটি লাফায় না। আপনি অ্যাক্সিলারেটর চাপলে এটি ধীরে ধীরে ওঠে। ব্রেক করলে ধীরে ধীরে নামে। রাস্তা যেভাবে নড়ে — খানাখন্দ, গিয়ার বদল, ক্লাচের এক মুহূর্ত — কাঁটা কখনো সেভাবে নড়ে না, কারণ কাঁটাটি ড্যাম্প করা। **এই ড্যাম্পিংই একে পাঠযোগ্য করে।**

এবার এর মূল্যটি লক্ষ করুন। **কাঁটা আপনাকে বলে আপনি এক মুহূর্ত আগে কত জোরে চলছিলেন, এখন কত জোরে চলছেন তা নয়।** চালক হঠাৎ ব্রেক কষলে বাস ইতিমধ্যেই ধীর হয়ে যাচ্ছে অথচ কাঁটা তখনো উঁচু পড়ছে। ড্যাম্পিং যত ভারী, কাঁটা তত মসৃণ আর তত বেশি পিছিয়ে।

মুভিং অ্যাভারেজ ঠিক এটাই। **এটি দামের ওপর বসানো একটি ড্যাম্প করা কাঁটা।**

### বিনামূল্যে মসৃণতা বলে কিছু নেই

মসৃণতর কাঁটা চাইলে পাবেন দেরিতর কাঁটা। দ্রুততর কাঁটা চাইলে পাবেন এমন একটি যা প্রতিটি খানাখন্দে কেঁপে ওঠে।

- **৫ দিনের গড়** একটি কম্পমান কাঁটা। এটি দামকে ঘনিষ্ঠভাবে অনুসরণ করে আর অবিরাম আপনার কাছে মিথ্যা বলে, কারণ এটি একটি চড়া সেশনকেই দিক বদল ধরে নেয়।
- **২০০ দিনের গড়** একটি ভারী কাঁটা। এটি প্রায় কখনো মিথ্যা বলে না, আর যখন এটি নড়ে ততক্ষণে আপনি মাসের পর মাস উল্টো দিকে চলছেন।

**ঐ বিনিময়টাই গোটা বিষয়।** কোন গড়, কোন দৈর্ঘ্য, সিম্পল না এক্সপোনেনশিয়াল — প্রতিটি তর্কই আসলে ঐ একটিমাত্র ডায়ালের কোথায় বসতে চান তা নিয়ে তর্ক। **কেউ কখনো এমন সেটিং পাননি যা একইসঙ্গে মসৃণ ও তাৎক্ষণিক**, আর যিনি আপনাকে তেমন কিছু বিক্রি করছেন তিনি পরিমাপের পোশাকে বহির্বেশন বিক্রি করছেন।

### গড় আপনাকে নতুন কিছু বলে না কেন

এই অংশটিই পার্ট III-এর প্রতিটি ইন্ডিকেটরের দিকে আপনার তাকানোর ধরন বদলে দেওয়া উচিত।

**কাঁটাটি সম্পূর্ণভাবে অ্যাক্সিলারেটর দ্বারা চালিত।** এর কোনো আলাদা সেন্সর নেই। ইঞ্জিন যা জানে না তা এটি জানতে পারে না। প্যাডেলের প্রতিটি চাপের নিখুঁত হিসাব আপনার কাছে থাকলে কাঁটা আপনাকে এমন কিছুই বলত না যা আপনি আগেই বের করতে পারতেন না।

মুভিং অ্যাভারেজ ক্লোজিং দাম *থেকে* গণিত একটি সংখ্যা। **ক্লোজিং দামের কাছে নেই এমন কোনো তথ্য এর কাছে নেই।** এটি আপনার চোখের জন্য একটি সুবিধা, আর কেবল তাই। এটি খাঁজকাটা রেখাকে মসৃণ করে যাতে মানুষের মস্তিষ্ক একটি দিক দেখতে পায়। এটি সত্যিই কাজের। এবং বেশিরভাগ ট্রেডার যা কিনছেন বলে ভাবেন, এটি তার চেয়ে অনেক ছোট।

### দুটি কাঁটা, আর তাদের অতিক্রম করার মুহূর্ত

জনপ্রিয় খেলাটি হলো দুটি কাঁটা বসানো — একটি হালকা, একটি ভারী — আর হালকাটি ভারীটিকে অতিক্রম করলে কাজ করা।

আবার বাসটির কথা ভাবুন। হালকা কাঁটা ভারীটির নিচে নামে কেবল চালক *কিছুক্ষণ ব্রেক কষার পরে*। **ক্রস কোনো সতর্কবার্তা নয়। এটি নিশ্চিতকরণ যে ব্রেক কষা ইতিমধ্যেই হয়ে গেছে।** এটি গঠনগতভাবেই দেরিতে, আর যত টিউনিংই করুন তা সরে না, কারণ ঐ দেরিটাই আপনার মসৃণতার দাম।

এটি ব্যয়বহুল হয়ে ওঠে এবড়োখেবড়ো রাস্তায়। চালক যানজটে অ্যাক্সিলারেটর বারবার চেপে ছেড়ে দিলে হালকা কাঁটা ভারীটির এপাশ-ওপাশ করতেই থাকে। দশটি অতিক্রম, দশটি সংকেত, দশটি ট্রেড। **আর ডিএসই-তে ঐ প্রতিটি ট্রেডে ঢোকার সময় ব্রোকারেজ, বেরোনোর সময় ব্রোকারেজ।**

এই বাক্যটি ধরে রাখুন। **ক্রসওভার সিস্টেম সবচেয়ে বেশি ট্রেড করে ঠিক তখনই যখন ধরার মতো কিছু নেই**, আর ঐ প্রতিটি ট্রেডের পুরো দাম আপনার কাছ থেকে নেয়।

### আর ডিএসই-তে তিনটি বাড়তি সতর্কতা

**এক: সমতল অংশগুলো শান্ত বাজার নয়।** যেখানে ফ্লোর প্রাইস একটি শেয়ারকে নিচে লেনদেন করতে দেয়নি, ঐ মাসগুলোর গড় একটি বিধির গড়, বাজারের নয়। কাঁটাটি চমৎকার স্থির দেখায়। এটি কিছুই মাপছে না।

**দুই: পাতলা শেয়ারে গড় কোনো দেয়াল নয়।** লোকে বলে "এটি ৫০-দিনের গড় থেকে ফিরে এল।" তা কেবল সেখানেই ঘটে যেখানে ঐ দামের কাছে যথেষ্ট ক্রেতা-বিক্রেতা সত্যিই লেনদেন করছেন। দিনে কুড়িটি ট্রেড হওয়া নামে দাম হেঁটে ৫০-দিনের গড় পর্যন্ত নেমে থামে না — এটি চার শতাংশ নিচে খোলে এবং কখনো ছোঁয় না। **যে স্তরে কেউ দাঁড়িয়ে নেই তা থেকে ফিরে আসা যায় না।**

**তিন: শেয়ার নিছক থেমেও যেতে পারে।** দৈনিক সার্কিট সীমায় পৌঁছালে সেশনটি শেষ হয় যেখানে বিধিপুস্তকের জায়গা ফুরিয়েছে, ক্রেতা-বিক্রেতা যেখানে একমত হয়েছেন সেখানে নয়। ঐ ক্লোজ আপনার গড়ে ঢোকান আর আপনি একটি নিয়মকেই গড় করলেন।

তাই: দিক পড়তে কাঁটাটি ব্যবহার করুন। **ক্রসিং নয়, ঢাল পড়ুন।** আর কখনো ভুলবেন না কাঁটাটি রাস্তার নিচের দিকে, কখনো তার আগে নয়।`,
    },

    example: {
      en: `### RUPALIPOLY: twenty sessions, three averages, one late signal

RUPALIPOLY is a mid-cap DSE polymer name used illustratively here; **every figure below is constructed, not historical.** Twenty consecutive daily closes, a clean rise and a clean roll-over, chosen precisely because it is the *easy* case — no gaps, no circuit locks, no floor-price window. If moving averages struggle here they have no chance on a difficult chart.

We fit three lines: SMA(5), SMA(10) and EMA(5) with $\\alpha = 2/(5+1) = 1/3$, seeded on day 5 with the SMA(5) value of 44.80.

| Day | Close | SMA(5) | SMA(10) | EMA(5) |
|---|---|---|---|---|
| 1 | 44.00 | — | — | — |
| 2 | 44.60 | — | — | — |
| 3 | 45.20 | — | — | — |
| 4 | 44.80 | — | — | — |
| 5 | 45.40 | 44.80 | — | 44.8000 |
| 6 | 46.20 | 45.24 | — | 45.2667 |
| 7 | 46.00 | 45.52 | — | 45.5111 |
| 8 | 47.10 | 45.90 | — | 46.0407 |
| 9 | 47.60 | 46.46 | — | 46.5605 |
| 10 | 47.20 | 46.82 | 45.81 | 46.7737 |
| 11 | 48.30 | 47.24 | 46.24 | 47.2824 |
| 12 | **48.90** | 47.82 | 46.67 | 47.8216 |
| 13 | 48.40 | **48.08** | 46.99 | **48.0144** |
| 14 | 47.50 | 48.06 | 47.26 | 47.8429 |
| 15 | 46.30 | 47.88 | 47.35 | 47.3286 |
| 16 | 45.90 | 47.40 | 47.32 | 46.8524 |
| 17 | **45.10** | **46.64** | **47.23** | 46.2683 |
| 18 | 44.40 | 45.84 | 46.96 | 45.6455 |
| 19 | 44.80 | 45.30 | 46.68 | 45.3637 |
| 20 | 43.90 | 44.82 | 46.35 | 44.8758 |

### Read the first thing that is wrong

**Price tops on day 12 at 48.90. Both averages top on day 13.** They are already one bar behind at the very best moment, on the cleanest possible data, with no noise to confuse them. That is not a flaw in the calculation. It is the calculation.

### Where the EMA earns its keep, and where it does not

Look at day 8. Price jumps from 46.00 to 47.10. The SMA(5) moves from 45.52 to 45.90, a rise of 0.38. The EMA(5) moves from 45.5111 to 46.0407, a rise of 0.5296. **The EMA registers 39% more of that day's move**, because the newest close gets a full third of the weight instead of one fifth.

Now look at day 14, the first bar after the top. SMA(5) falls from 48.08 to 48.06 — a change of **0.02**, which on a chart is invisible. EMA(5) falls from 48.0144 to 47.8429 — a change of **0.1715**.

$$\\frac{0.1715}{0.02} = 8.57$$

**The EMA reports the turn eight and a half times more loudly than the SMA on the identical bar.** This is the single clearest illustration of the responsiveness dial in the whole chapter: same data, same nominal period, and one line has already flinched while the other has not noticed.

And now the honest half of it. Look at day 19, where price bounces from 44.40 to 44.80. The EMA(5) barely stops falling. Had that bounce been the start of a real recovery, the EMA would have told you sooner — and had it been noise, which here it is, the EMA would have told you something false sooner. **You cannot have the first without the second.** They are the same property.

### The crossover, and how much it cost

Take the classic construction: go flat when SMA(5) closes below SMA(10).

| Day | SMA(5) | SMA(10) | Fast − Slow |
|---|---|---|---|
| 13 | 48.08 | 46.99 | +1.09 |
| 14 | 48.06 | 47.26 | +0.80 |
| 15 | 47.88 | 47.35 | +0.53 |
| 16 | 47.40 | 47.32 | **+0.08** |
| 17 | 46.64 | 47.23 | **−0.59** |

**The sell signal fires on day 17 at a close of 45.10.** The high close was 48.90 on day 12.

$$\\text{Signal lag} = 17 - 12 = 5 \\text{ sessions}$$
$$\\text{Give-back} = 48.90 - 45.10 = 3.80 \\quad\\Rightarrow\\quad \\frac{3.80}{48.90} = 7.77\\%$$

**You handed back 7.77% of the position's value between the top and the exit** — on a data set with no gaps, no illiquidity and no adverse fills. Widen the pair to 20/50 and that give-back scales with it.

Notice also the day-16 spread of **+0.08**. On a real chart, at real tick sizes, that is a coin flip: one slightly different close on day 11 and the cross happens a session earlier or later. **A signal that hinges on eight paisa of separation between two smoothed lines is not a robust signal.** This is why practitioners impose a separation threshold, and why the threshold is another parameter to overfit.

### The full round trip, with cost

Assume the prior long entry came from the matching up-cross at a close of **44.20**, one session before this window opens. The exit is day 17 at 45.10.

| | Value |
|---|---|
| Entry | 44.20 |
| Exit | 45.10 |
| Gross move | +0.90 |
| Gross return | **+2.036%** |
| Round-trip cost at 0.40% per side | **−0.800%** |
| **Net** | **+1.236%** |

Now measure what was actually available. Buying the day-1 area at 44.20 and selling the day-12 top at 48.90:

$$\\frac{48.90 - 44.20}{44.20} = 10.633\\%$$

$$\\text{Capture ratio} = \\frac{2.036}{10.633} = 19.15\\%$$

**The system captured 19.15% of the move it was designed to capture, and kept 1.236% after cost.** Read that twice. This is the *winning* trade. It is a clean uptrend, correctly identified, correctly exited, and it delivered a net return smaller than the round-trip cost of taking it.

That is not an argument against moving averages. **It is an argument against believing a crossover is an entry and exit system rather than a trend description.**

### Now put it in the ranging case

Chapter 34's core arithmetic applies directly. Over a year this same 20/50 construction on this same name produced 14 round trips: 4 in genuine trends averaging +6.5% gross and 10 in chop averaging −1.8% gross.

$$\\text{Gross} = 4(6.5) + 10(-1.8) = +8.0\\%$$
$$\\text{Cost} = 14 \\times 0.80 = 11.2\\% \\qquad \\text{Net} = \\mathbf{-3.2\\%}$$

**Average gross per trade is 8.0/14 = 0.571%**, so the break-even round-trip cost is 0.571% and the break-even per-side cost is **0.286%**. At 0.40% per side you are 40% over the line before you place an order.

There is a second way to state the same fact, and it is the more useful one:

$$\\text{Maximum affordable trades} = \\frac{8.0\\%}{0.80\\%} = 10$$

**The strategy could afford 10 round trips and took 14.** The excess four trades are not bad luck; they are the four whipsaws the system exists to generate.

### The filtered version

Require the slow average's slope to exceed a threshold, or an ADX-style directional reading above a floor (Chapter 37). Suppose that removes 8 of the 10 chop trades and costs you 1 of the 4 trend trades:

$$\\text{Gross} = 3(6.5) + 2(-1.8) = 19.5 - 3.6 = +15.9\\%$$
$$\\text{Cost} = 5 \\times 0.80 = 4.0\\% \\qquad \\text{Net} = \\mathbf{+11.9\\%}$$

Compare the two systems on the number that matters — how much cost each can survive:

| | Unfiltered | Filtered |
|---|---|---|
| Round trips | 14 | **5** |
| Gross | +8.0% | **+15.9%** |
| Cost | 11.2% | **4.0%** |
| Net | **−3.2%** | **+11.9%** |
| Gross per trade | 0.571% | **3.18%** |
| Break-even per side | 0.286% | **1.59%** |

**The filter multiplies your cost tolerance by 5.56×.** It did not improve a single entry. It deleted the trades that were never worth taking, and the swing from −3.2% to +11.9% — **15.1 percentage points** — came entirely from not trading.

### The DSE checks that come before any of this counts

| Check | Why it kills the analysis |
|---|---|
| Does any window span a floor-price period? | The average over an administered floor is the average of a policy. Exclude explicitly, per Chapter 26. |
| Did any close print at the circuit limit? | That close is where the band ran out, not where supply met demand. It is a regulated number fed into an average. |
| Is the name liquid enough for the average to act as support? | Below the Chapter 27 liquidity threshold, price gaps through the line instead of testing it. **The 50-day is never a level on a name that trades twenty times a day.** |
| Is there a warm-up? | An EMA(50) needs roughly 150 bars behind it. A recently listed name, or a series restarted after the floor era, may not have them. |
| Can you act on the down-cross? | On the DSE the down-cross is an exit, not a short. **Half the published crossover literature assumes a short side we do not have**, and its reported returns are therefore unavailable to you. |

That last row halves every backtest you have read. **A long-only crossover system earns nothing in the down leg — it merely avoids losing**, and the published equity curves count both legs.`,
      bn: `### RUPALIPOLY: কুড়িটি সেশন, তিনটি গড়, একটি দেরি সংকেত

RUPALIPOLY এখানে দৃষ্টান্তমূলকভাবে ব্যবহৃত একটি মাঝারি আকারের ডিএসই পলিমার নাম; **নিচের প্রতিটি সংখ্যা নির্মিত, ঐতিহাসিক নয়।** কুড়িটি ধারাবাহিক দৈনিক ক্লোজ, একটি পরিষ্কার উত্থান ও একটি পরিষ্কার মোড়, ঠিক এই কারণেই বাছা যে এটি *সহজ* ক্ষেত্র — কোনো গ্যাপ নেই, সার্কিট লক নেই, ফ্লোর-প্রাইসের জানালা নেই। মুভিং অ্যাভারেজ এখানেই হিমশিম খেলে কঠিন চার্টে তার কোনো সুযোগ নেই।

আমরা তিনটি রেখা বসাই: SMA(5), SMA(10) এবং $\\alpha = 2/(5+1) = 1/3$ সহ EMA(5), যা পঞ্চম দিনে SMA(5)-এর মান ৪৪.৮০ দিয়ে সিড করা।

| দিন | ক্লোজ | SMA(5) | SMA(10) | EMA(5) |
|---|---|---|---|---|
| ১ | ৪৪.০০ | — | — | — |
| ২ | ৪৪.৬০ | — | — | — |
| ৩ | ৪৫.২০ | — | — | — |
| ৪ | ৪৪.৮০ | — | — | — |
| ৫ | ৪৫.৪০ | ৪৪.৮০ | — | ৪৪.৮০০০ |
| ৬ | ৪৬.২০ | ৪৫.২৪ | — | ৪৫.২৬৬৭ |
| ৭ | ৪৬.০০ | ৪৫.৫২ | — | ৪৫.৫১১১ |
| ৮ | ৪৭.১০ | ৪৫.৯০ | — | ৪৬.০৪০৭ |
| ৯ | ৪৭.৬০ | ৪৬.৪৬ | — | ৪৬.৫৬০৫ |
| ১০ | ৪৭.২০ | ৪৬.৮২ | ৪৫.৮১ | ৪৬.৭৭৩৭ |
| ১১ | ৪৮.৩০ | ৪৭.২৪ | ৪৬.২৪ | ৪৭.২৮২৪ |
| ১২ | **৪৮.৯০** | ৪৭.৮২ | ৪৬.৬৭ | ৪৭.৮২১৬ |
| ১৩ | ৪৮.৪০ | **৪৮.০৮** | ৪৬.৯৯ | **৪৮.০১৪৪** |
| ১৪ | ৪৭.৫০ | ৪৮.০৬ | ৪৭.২৬ | ৪৭.৮৪২৯ |
| ১৫ | ৪৬.৩০ | ৪৭.৮৮ | ৪৭.৩৫ | ৪৭.৩২৮৬ |
| ১৬ | ৪৫.৯০ | ৪৭.৪০ | ৪৭.৩২ | ৪৬.৮৫২৪ |
| ১৭ | **৪৫.১০** | **৪৬.৬৪** | **৪৭.২৩** | ৪৬.২৬৮৩ |
| ১৮ | ৪৪.৪০ | ৪৫.৮৪ | ৪৬.৯৬ | ৪৫.৬৪৫৫ |
| ১৯ | ৪৪.৮০ | ৪৫.৩০ | ৪৬.৬৮ | ৪৫.৩৬৩৭ |
| ২০ | ৪৩.৯০ | ৪৪.৮২ | ৪৬.৩৫ | ৪৪.৮৭৫৮ |

### প্রথম যে জিনিসটি ভুল তা পড়ুন

**দাম শীর্ষে ওঠে ১২ দিনে ৪৮.৯০-তে। দুটি গড়ই শীর্ষে ওঠে ১৩ দিনে।** সবচেয়ে গুরুত্বপূর্ণ মুহূর্তে, সম্ভাব্য সবচেয়ে পরিষ্কার ডেটায়, বিভ্রান্ত করার মতো কোনো নয়েজ ছাড়াই তারা ইতিমধ্যেই এক বার পিছিয়ে। এটি গণনার ত্রুটি নয়। এটিই গণনা।

### EMA কোথায় তার মূল্য দেয়, আর কোথায় দেয় না

৮ দিনটি দেখুন। দাম ৪৬.০০ থেকে ৪৭.১০-এ লাফায়। SMA(5) ৪৫.৫২ থেকে ৪৫.৯০-এ যায়, বৃদ্ধি ০.৩৮। EMA(5) ৪৫.৫১১১ থেকে ৪৬.০৪০৭-এ যায়, বৃদ্ধি ০.৫২৯৬। **EMA ঐ দিনের নড়াচড়ার ৩৯% বেশি নথিভুক্ত করে**, কারণ নতুনতম ক্লোজ এক-পঞ্চমাংশের বদলে পুরো এক-তৃতীয়াংশ ওজন পায়।

এবার ১৪ দিনটি দেখুন, শীর্ষের পরের প্রথম বার। SMA(5) ৪৮.০৮ থেকে ৪৮.০৬-এ নামে — পরিবর্তন **০.০২**, যা চার্টে অদৃশ্য। EMA(5) ৪৮.০১৪৪ থেকে ৪৭.৮৪২৯-এ নামে — পরিবর্তন **০.১৭১৫**।

$$\\frac{0.1715}{0.02} = 8.57$$

**অভিন্ন বারে EMA মোড়টির খবর SMA-র চেয়ে সাড়ে আট গুণ জোরে দেয়।** গোটা অধ্যায়ে সাড়াশীলতার ডায়ালের এটিই সবচেয়ে স্পষ্ট নিদর্শন: একই ডেটা, একই নামমাত্র পিরিয়ড, আর একটি রেখা ইতিমধ্যেই চমকে উঠেছে যখন অন্যটি টেরই পায়নি।

আর এবার এর সৎ অর্ধেকটি। ১৯ দিনটি দেখুন, যেখানে দাম ৪৪.৪০ থেকে ৪৪.৮০-তে ফেরে। EMA(5) কোনোমতে পড়া থামায়। ঐ ফেরাটি যদি প্রকৃত পুনরুদ্ধারের শুরু হতো, EMA আপনাকে আগে বলত — আর তা যদি নয়েজ হতো, যা এখানে তাই, EMA আপনাকে একটি মিথ্যা কথা আগে বলত। **দ্বিতীয়টি ছাড়া প্রথমটি পাওয়া যায় না।** দুটি একই ধর্ম।

### ক্রসওভার, আর তার খরচ কত হলো

ধ্রুপদী গঠনটি নিন: SMA(5) SMA(10)-এর নিচে বন্ধ হলে ফ্ল্যাট হয়ে যান।

| দিন | SMA(5) | SMA(10) | দ্রুত − ধীর |
|---|---|---|---|
| ১৩ | ৪৮.০৮ | ৪৬.৯৯ | +১.০৯ |
| ১৪ | ৪৮.০৬ | ৪৭.২৬ | +০.৮০ |
| ১৫ | ৪৭.৮৮ | ৪৭.৩৫ | +০.৫৩ |
| ১৬ | ৪৭.৪০ | ৪৭.৩২ | **+০.০৮** |
| ১৭ | ৪৬.৬৪ | ৪৭.২৩ | **−০.৫৯** |

**বিক্রয় সংকেত জ্বলে ১৭ দিনে, ক্লোজ ৪৫.১০-তে।** সর্বোচ্চ ক্লোজ ছিল ১২ দিনে ৪৮.৯০।

$$\\text{Signal lag} = 17 - 12 = 5 \\text{ sessions}$$
$$\\text{Give-back} = 48.90 - 45.10 = 3.80 \\quad\\Rightarrow\\quad \\frac{3.80}{48.90} = 7.77\\%$$

**শীর্ষ ও প্রস্থানের মাঝে আপনি পজিশনের মূল্যের ৭.৭৭% ফেরত দিয়েছেন** — এমন একটি ডেটাসেটে যেখানে কোনো গ্যাপ নেই, তারল্যের অভাব নেই, প্রতিকূল ফিল নেই। জোড়াটিকে ২০/৫০-এ চওড়া করুন আর ঐ ফেরত দেওয়াও সেই অনুপাতে বাড়ে।

১৬ দিনের ব্যবধান **+০.০৮**-ও লক্ষ করুন। প্রকৃত চার্টে, প্রকৃত টিক আকারে, ওটি একটি মুদ্রা নিক্ষেপ: ১১ দিনে সামান্য ভিন্ন একটি ক্লোজ হলে ক্রসটি এক সেশন আগে বা পরে ঘটত। **দুটি স্মুদ করা রেখার মধ্যে আট পয়সার ব্যবধানের ওপর ঝুলে থাকা সংকেত কোনো দৃঢ় সংকেত নয়।** এজন্যই ব্যবহারকারীরা একটি বিচ্ছেদ সীমা আরোপ করেন, আর এজন্যই ঐ সীমাটি ওভারফিট করার আরেকটি প্যারামিটার।

### সম্পূর্ণ রাউন্ড ট্রিপ, খরচসহ

ধরুন আগের লং এন্ট্রি এসেছিল মিলিত আপ-ক্রস থেকে **৪৪.২০** ক্লোজে, এই জানালা খোলার এক সেশন আগে। প্রস্থান ১৭ দিনে ৪৫.১০-তে।

| | মান |
|---|---|
| প্রবেশ | ৪৪.২০ |
| প্রস্থান | ৪৫.১০ |
| গ্রস নড়াচড়া | +০.৯০ |
| গ্রস রিটার্ন | **+২.০৩৬%** |
| প্রতি পাশে ০.৪০%-এ রাউন্ড-ট্রিপ খরচ | **−০.৮০০%** |
| **নিট** | **+১.২৩৬%** |

এবার মাপুন আসলে কতটা পাওয়া যেত। ১ দিনের এলাকায় ৪৪.২০-তে কিনে ১২ দিনের শীর্ষে ৪৮.৯০-তে বিক্রি করলে:

$$\\frac{48.90 - 44.20}{44.20} = 10.633\\%$$

$$\\text{Capture ratio} = \\frac{2.036}{10.633} = 19.15\\%$$

**সিস্টেমটি যে নড়াচড়া ধরার জন্য নকশা করা তার ১৯.১৫% ধরেছে, আর খরচের পর রেখেছে ১.২৩৬%।** এটি দুবার পড়ুন। এটি *বিজয়ী* ট্রেড। এটি একটি পরিষ্কার আপট্রেন্ড, সঠিকভাবে চিহ্নিত, সঠিকভাবে পরিত্যক্ত, আর এটি এনে দিয়েছে ট্রেডটি নেওয়ার রাউন্ড-ট্রিপ খরচের চেয়েও ছোট একটি নিট রিটার্ন।

এটি মুভিং অ্যাভারেজের বিরুদ্ধে যুক্তি নয়। **এটি ক্রসওভারকে ট্রেন্ডের বর্ণনা না ভেবে প্রবেশ-প্রস্থানের সিস্টেম ভাবার বিরুদ্ধে যুক্তি।**

### এবার রেঞ্জিং ক্ষেত্রে বসান

অধ্যায় ৩৪-এর মূল পাটিগণিত সরাসরি প্রযোজ্য। এক বছরে এই একই নামে এই একই ২০/৫০ গঠন ১৪টি রাউন্ড ট্রিপ দিয়েছে: ৪টি প্রকৃত ট্রেন্ডে গড়ে +৬.৫% গ্রস আর ১০টি চপে গড়ে −১.৮% গ্রস।

$$\\text{Gross} = 4(6.5) + 10(-1.8) = +8.0\\%$$
$$\\text{Cost} = 14 \\times 0.80 = 11.2\\% \\qquad \\text{Net} = \\mathbf{-3.2\\%}$$

**প্রতি ট্রেডে গড় গ্রস ৮.০/১৪ = ০.৫৭১%**, তাই ব্রেক-ইভেন রাউন্ড-ট্রিপ খরচ ০.৫৭১% আর ব্রেক-ইভেন প্রতি-পাশ খরচ **০.২৮৬%**। প্রতি পাশে ০.৪০%-এ আপনি অর্ডার বসানোর আগেই সীমার ৪০% ওপরে।

একই সত্য বলার আরেকটি উপায় আছে, আর সেটি বেশি কাজের:

$$\\text{Maximum affordable trades} = \\frac{8.0\\%}{0.80\\%} = 10$$

**কৌশলটি ১০টি রাউন্ড ট্রিপ বহন করতে পারত আর নিয়েছে ১৪টি।** অতিরিক্ত চারটি ট্রেড দুর্ভাগ্য নয়; ওগুলোই সেই চারটি হুইপস যা তৈরি করতেই সিস্টেমটির অস্তিত্ব।

### ফিল্টার করা সংস্করণ

ধীর গড়ের ঢাল একটি সীমা ছাড়াতে হবে, অথবা ADX-ধাঁচের দিকনির্দেশক পাঠ একটি মেঝের ওপরে থাকতে হবে (অধ্যায় ৩৭)। ধরুন তা ১০টি চপ ট্রেডের ৮টি সরায় আর ৪টি ট্রেন্ড ট্রেডের ১টি কেড়ে নেয়:

$$\\text{Gross} = 3(6.5) + 2(-1.8) = 19.5 - 3.6 = +15.9\\%$$
$$\\text{Cost} = 5 \\times 0.80 = 4.0\\% \\qquad \\text{Net} = \\mathbf{+11.9\\%}$$

যে সংখ্যাটি গুরুত্বপূর্ণ তাতে দুটি সিস্টেম তুলনা করুন — প্রত্যেকটি কত খরচ সহ্য করতে পারে:

| | ফিল্টারহীন | ফিল্টারযুক্ত |
|---|---|---|
| রাউন্ড ট্রিপ | ১৪ | **৫** |
| গ্রস | +৮.০% | **+১৫.৯%** |
| খরচ | ১১.২% | **৪.০%** |
| নিট | **−৩.২%** | **+১১.৯%** |
| প্রতি ট্রেডে গ্রস | ০.৫৭১% | **৩.১৮%** |
| প্রতি পাশে ব্রেক-ইভেন | ০.২৮৬% | **১.৫৯%** |

**ফিল্টার আপনার খরচ সহ্য করার ক্ষমতা ৫.৫৬ গুণ বাড়ায়।** এটি একটিও প্রবেশ উন্নত করেনি। এটি ঐ ট্রেডগুলো মুছেছে যেগুলো কখনোই নেওয়ার মতো ছিল না, আর −৩.২% থেকে +১১.৯%-এর দোলটি — **১৫.১ শতাংশ বিন্দু** — পুরোপুরি এসেছে ট্রেড না করা থেকে।

### যে ডিএসই যাচাইগুলো এসবের আগে আসে

| যাচাই | কেন এটি বিশ্লেষণ মেরে ফেলে |
|---|---|
| কোনো উইন্ডো কি ফ্লোর-প্রাইসের সময়কাল ছুঁয়েছে? | প্রশাসিত মেঝের ওপর গড় একটি নীতির গড়। অধ্যায় ২৬ অনুযায়ী স্পষ্টভাবে বাদ দিন। |
| কোনো ক্লোজ কি সার্কিট সীমায় ছাপা হয়েছে? | ঐ ক্লোজ যেখানে ব্যান্ড ফুরিয়েছে, চাহিদা সরবরাহের সঙ্গে যেখানে মিলেছে তা নয়। এটি একটি নিয়ন্ত্রিত সংখ্যা যা গড়ে ঢুকছে। |
| নামটি কি এতটা তরল যে গড়টি সাপোর্ট হিসেবে কাজ করবে? | অধ্যায় ২৭-এর তারল্য সীমার নিচে দাম রেখাটি পরীক্ষা না করে তার ভেতর দিয়ে গ্যাপ করে। **দিনে কুড়িবার লেনদেন হওয়া নামে ৫০-দিনের গড় কখনোই একটি স্তর নয়।** |
| ওয়ার্ম-আপ আছে কি? | EMA(50)-এর পিছনে মোটামুটি ১৫০ বার লাগে। সম্প্রতি তালিকাভুক্ত নাম, বা ফ্লোর যুগের পরে পুনরায় শুরু হওয়া সিরিজে তা নাও থাকতে পারে। |
| ডাউন-ক্রসে কি আপনি কাজ করতে পারবেন? | ডিএসই-তে ডাউন-ক্রস একটি প্রস্থান, শর্ট নয়। **প্রকাশিত ক্রসওভার সাহিত্যের অর্ধেক এমন একটি শর্ট সাইড ধরে নেয় যা আমাদের নেই**, তাই তাদের জানানো রিটার্ন আপনার কাছে অনুপলব্ধ। |

শেষ সারিটি আপনার পড়া প্রতিটি ব্যাকটেস্টকে অর্ধেক করে দেয়। **কেবল-লং ক্রসওভার সিস্টেম নিম্নমুখী পায়ে কিছুই আয় করে না — এটি নিছক হারানো এড়ায়**, আর প্রকাশিত ইকুইটি কার্ভগুলো দুটি পা-ই গোনে।`,
    },

    formula: {
      en: `### 1. The simple moving average, and what its weights admit

$$SMA_t(N) = \\frac{1}{N}\\sum_{k=0}^{N-1} P_{t-k}$$

Every bar in the window carries weight exactly $1/N$; every bar outside carries exactly zero.

**Read those two facts as a confession.** The SMA asserts that yesterday's close and the close from $N-1$ sessions ago are equally informative about today, and that the close from $N$ sessions ago is worth nothing at all. Neither claim is defensible. It is the discontinuity that bites in practice: **when a large print drops out of the window the line moves even though nothing happened today.** On RUPALIPOLY, day 14's SMA(5) fell only 0.02 because the bar leaving the window (46.20 on day 9... in the ten-bar case) partially offset the bar arriving. That cancellation is an artefact of the rectangular window, not a statement about the market.

The recursive update is cheap and worth knowing:

$$SMA_t = SMA_{t-1} + \\frac{P_t - P_{t-N}}{N}$$

**The term $P_{t-N}$ is the one people forget exists**, and it is why an SMA can fall on a day price rose.

### 2. The EMA smoothing constant, and why $2/(N+1)$

$$E_t = \\alpha P_t + (1-\\alpha)E_{t-1}, \\qquad 0 < \\alpha \\le 1$$

The average age of the data in an exponentially weighted average — its **centre of mass** — is

$$\\text{CoM}_{EMA} = \\frac{1-\\alpha}{\\alpha}$$

The centre of mass of an $N$-period SMA is

$$\\text{CoM}_{SMA} = \\frac{N-1}{2}$$

Set them equal and solve:

$$\\frac{1-\\alpha}{\\alpha} = \\frac{N-1}{2} \\;\\Rightarrow\\; 2 - 2\\alpha = \\alpha N - \\alpha \\;\\Rightarrow\\; \\alpha = \\frac{2}{N+1}$$

**That is the entire justification for the convention, and it is a calibration, not a law.** It exists so that an EMA labelled 20 lags comparably to an SMA labelled 20 and the two can be discussed in the same sentence. Check it on our worked case: $N = 5$ gives $\\alpha = 1/3$, so $\\text{CoM} = (1 - 1/3)/(1/3) = 2.0$, and $(5-1)/2 = 2.0$. **Identical.**

You are free to choose $\\alpha$ directly and ignore $N$ entirely. Risk systems routinely do — RiskMetrics used $\\lambda = 0.94$ on daily data, which is $\\alpha = 0.06$ and an implied $N$ of about 32.3. **Nothing breaks. The label is a convenience.**

### 3. Unrolling the recursion: the EMA has no start date

Substitute the recursion into itself repeatedly:

$$E_t = \\alpha P_t + (1-\\alpha)\\big[\\alpha P_{t-1} + (1-\\alpha)E_{t-2}\\big] = \\alpha \\sum_{k=0}^{\\infty}(1-\\alpha)^k P_{t-k}$$

The weights sum to one, since $\\alpha \\sum_{k\\ge 0}(1-\\alpha)^k = \\alpha \\cdot \\frac{1}{\\alpha} = 1$.

**The upper limit is infinity.** An EMA(20) does not use 20 bars. It uses every bar that has ever existed, with geometrically shrinking weight. The share of weight sitting strictly beyond bar $N$ is

$$W_{>N} = (1-\\alpha)^N$$

and with $\\alpha = 2/(N+1)$ this converges to $e^{-2} \\approx 13.53\\%$ **for every $N$** as $N$ grows. For our small case:

$$\\left(\\tfrac{2}{3}\\right)^5 = \\frac{32}{243} = 13.17\\%$$

which is already within four-tenths of a point of the limit at $N = 5$. **An EMA(5) carries 13.17% of its weight in bars older than five. An EMA(200) carries 13.5% of its weight in bars older than two hundred.** The number does not shrink with $N$ — this is the fact that makes the "period" label misleading.

### 4. Warm-up, and how much history the number needs

Solve for the number of bars $m$ capturing a fraction $f$ of total weight:

$$1 - (1-\\alpha)^m \\ge f \\;\\Rightarrow\\; m \\ge \\frac{\\ln(1-f)}{\\ln(1-\\alpha)}$$

At $f = 0.99$ and $\\alpha = 1/3$:

$$m \\ge \\frac{\\ln 0.01}{\\ln(2/3)} = \\frac{-4.6052}{-0.4055} = 11.36 \\;\\Rightarrow\\; \\mathbf{12 \\text{ bars}}$$

The general result is $m \\approx 2.3N$. **Round it up to $3N$ in practice** and an EMA(50) wants 150 bars before you trade on it.

Now quantify the seeding error directly, because this is where two platforms disagree. If your seed is wrong by $\\varepsilon_0$, then after $k$ updates the error is

$$\\varepsilon_k = \\varepsilon_0 (1-\\alpha)^k$$

On RUPALIPOLY: seed with the day-5 close of 45.40 or with the day-1 close of 44.00 instead of the SMA(5) of 44.80 and you carry an error. Seeding with 44.00 gives $\\varepsilon_0 = -0.80$, and by day 12 ($k = 7$):

$$\\varepsilon_7 = -0.80 \\times (2/3)^7 = -0.80 \\times 0.058527 = -0.0468$$

**The day-12 EMA reads 47.7748 instead of 47.8216 — a discrepancy of 4.68 paisa purely from a seeding choice.** On an EMA(50) the same error decays at $(49/51)^k$ and takes roughly 115 bars to fall below one percent of its initial size. **If your spreadsheet disagrees with your broker's chart, check the seed before you check your arithmetic.**

### 5. Lag, stated exactly

For the SMA the lag is the centre of mass:

$$L_{SMA}(N) = \\frac{N-1}{2}$$

| Average | Lag (bars) |
|---|---|
| SMA(5) | 2.0 |
| SMA(10) | 4.5 |
| SMA(20) | 9.5 |
| SMA(50) | 24.5 |
| SMA(200) | 99.5 |

**A 200-day average reports, on average, where price was a hundred sessions ago.** Under $\\alpha = 2/(N+1)$ the EMA of the same label has the same lag by construction — that was the whole point of §4.2.

For a crossover of a fast $N_f$ and a slow $N_s$ the naive estimate of signal delay is the difference of centres:

$$\\Delta L = \\frac{N_s - N_f}{2}$$

For 5 and 10 that is 2.5 bars. **Our worked signal arrived 5 bars after the top — twice the naive estimate.** The reason matters: $\\Delta L$ measures the separation of the two lines' effective timestamps, but the *cross* requires the fast line to travel the entire existing gap, and that gap was +1.09 on day 13. **The crossover lag is not a constant. It grows with the size of the prior trend**, which is exactly backwards from what you want: the stronger the move you rode, the later you are told it ended.

### 6. Weighted and adaptive averages

$$WMA_t(N) = \\frac{\\sum_{k=0}^{N-1}(N-k)P_{t-k}}{\\sum_{k=1}^{N}k} = \\frac{2}{N(N+1)}\\sum_{k=0}^{N-1}(N-k)P_{t-k}$$

Its centre of mass is $(N-1)/3$, so a WMA(5) lags 1.33 bars against the SMA's 2.0. On day 12 of RUPALIPOLY:

$$WMA_5 = \\frac{5(48.90) + 4(48.30) + 3(47.20) + 2(47.60) + 1(47.10)}{15} = \\frac{721.60}{15} = 48.1067$$

against an SMA(5) of 47.82 and an EMA(5) of 47.8216. **The WMA sits 0.29 higher because it front-loads the two strongest closes.** Faster, and correspondingly noisier — the dial again.

Adaptive averages vary $\\alpha$ with a measured efficiency ratio $ER$:

$$ER_t = \\frac{|P_t - P_{t-n}|}{\\sum_{k=0}^{n-1}|P_{t-k} - P_{t-k-1}|}, \\qquad \\alpha_t = \\big[ER_t(\\alpha_{fast} - \\alpha_{slow}) + \\alpha_{slow}\\big]^2$$

**$ER$ is directed travel divided by total travel**, so it runs from near zero in chop to one in a clean trend. The idea is sound. The cost is that you have now introduced $n$, $\\alpha_{fast}$ and $\\alpha_{slow}$ as free parameters. **On DSE data, where the count of clean trending episodes per name is small, three extra parameters is three extra ways to fit noise.** Learn it; do not start there.

### 7. Crossover mechanics and the cost condition

Define the spread $S_t = F_t - L_t$ for fast $F$ and slow $L$. A signal fires when $\\operatorname{sign}(S_t) \\ne \\operatorname{sign}(S_{t-1})$.

**The spread is itself an oscillator, and Chapter 35 is about exactly that** — MACD is $S_t$ built from two EMAs, plus an EMA of $S_t$ as a signal line. Everything in §3 and §4 above carries directly across, warm-up included.

The economics. For $n$ round trips, mean gross return $\\bar{g}$ per trade and round-trip cost $c$:

$$\\Pi = n(\\bar{g} - c), \\qquad \\text{break-even: } \\bar{g} = c$$

Substituting the illustrative DSE figures — $n = 14$, total gross $8.0\\%$, $c = 0.80\\%$:

$$\\bar{g} = \\frac{8.0}{14} = 0.571\\%, \\qquad \\Pi = 8.0 - 11.2 = -3.2\\%$$

**A strategy can have a strictly positive gross edge and a strictly negative net return, and the only quantity that decides which is the trade count.** State it as a constraint instead:

$$n_{\\max} = \\frac{\\text{total gross}}{c} = \\frac{8.0}{0.80} = 10$$

**Ten trades were affordable and fourteen were taken.** Any filter is justified precisely to the extent that it lowers $n$ faster than it lowers total gross.

### 8. What a threshold does, and why every one of them is a parameter

Practitioners add a separation band $\\theta$ so the signal requires

$$|S_t| > \\theta \\cdot ATR_t$$

**This exists because of days like day 16, where the spread was +0.08 and the sign of the next bar was effectively a coin flip.** The band removes marginal crossings and therefore removes trades, which is the same lever as the trend filter.

And here is the trap, stated as arithmetic. If you test $n_f$ fast values against $n_s$ slow values, you have run $n_f \\times n_s$ experiments on one sample. With 20 and 20 that is **400 tests**, and the maximum of 400 draws from a noisy distribution is high by construction. Adding $\\theta$ with 10 candidate values makes it 4,000.

**The 50/200 pair is a convention that survived because the numbers are round, not because they are optimal.** Chapter 55 sets out what an honest evaluation requires: out-of-sample data, walk-forward testing, and cost assumptions fixed in writing before you look at a single result.`,
      bn: `### ১. সিম্পল মুভিং অ্যাভারেজ, আর তার ওজন যা স্বীকার করে

$$SMA_t(N) = \\frac{1}{N}\\sum_{k=0}^{N-1} P_{t-k}$$

উইন্ডোর প্রতিটি বার ঠিক $1/N$ ওজন বহন করে; বাইরের প্রতিটি বার ঠিক শূন্য।

**ঐ দুটি তথ্য স্বীকারোক্তি হিসেবে পড়ুন।** SMA দাবি করে গতকালের ক্লোজ আর $N-1$ সেশন আগের ক্লোজ আজকের সম্পর্কে সমান তথ্যপূর্ণ, আর $N$ সেশন আগের ক্লোজের কোনো মূল্যই নেই। কোনো দাবিই রক্ষণীয় নয়। ব্যবহারিকভাবে বিচ্ছিন্নতাটিই কামড়ায়: **একটি বড় প্রিন্ট উইন্ডো থেকে বেরিয়ে গেলে আজ কিছু না ঘটলেও রেখাটি নড়ে।** RUPALIPOLY-তে ১৪ দিনের SMA(5) মাত্র ০.০২ নেমেছে কারণ উইন্ডো ছেড়ে যাওয়া বারটি আগত বারটিকে আংশিকভাবে কাটাকাটি করেছে। ঐ কাটাকাটি আয়তাকার উইন্ডোর একটি কৃত্রিম ফল, বাজার সম্পর্কে কোনো বিবৃতি নয়।

পুনরাবৃত্ত হালনাগাদটি সস্তা ও জানার মতো:

$$SMA_t = SMA_{t-1} + \\frac{P_t - P_{t-N}}{N}$$

**$P_{t-N}$ পদটির অস্তিত্বই মানুষ ভুলে যান**, আর এজন্যই দাম বাড়া দিনে SMA নামতে পারে।

### ২. EMA স্মুদিং ধ্রুবক, আর $2/(N+1)$ কেন

$$E_t = \\alpha P_t + (1-\\alpha)E_{t-1}, \\qquad 0 < \\alpha \\le 1$$

এক্সপোনেনশিয়ালি ভারিত গড়ে ডেটার গড় বয়স — তার **ভরকেন্দ্র** — হলো

$$\\text{CoM}_{EMA} = \\frac{1-\\alpha}{\\alpha}$$

$N$-পিরিয়ড SMA-র ভরকেন্দ্র

$$\\text{CoM}_{SMA} = \\frac{N-1}{2}$$

সমান বসিয়ে সমাধান করুন:

$$\\frac{1-\\alpha}{\\alpha} = \\frac{N-1}{2} \\;\\Rightarrow\\; 2 - 2\\alpha = \\alpha N - \\alpha \\;\\Rightarrow\\; \\alpha = \\frac{2}{N+1}$$

**প্রথাটির সম্পূর্ণ যুক্তি এটুকুই, আর এটি একটি ক্যালিব্রেশন, কোনো নিয়ম নয়।** এটি আছে যাতে "২০" লেবেলযুক্ত EMA "২০" লেবেলযুক্ত SMA-র তুলনীয়ভাবে পিছিয়ে থাকে ও দুটিকে একই বাক্যে আলোচনা করা যায়। আমাদের উদাহরণে যাচাই করুন: $N = 5$ দেয় $\\alpha = 1/3$, তাই $\\text{CoM} = (1 - 1/3)/(1/3) = 2.0$, আর $(5-1)/2 = 2.0$। **অভিন্ন।**

আপনি সরাসরি $\\alpha$ বেছে $N$ পুরোপুরি উপেক্ষা করতে পারেন। ঝুঁকি ব্যবস্থাগুলো নিয়মিতই তা করে — RiskMetrics দৈনিক ডেটায় $\\lambda = 0.94$ ব্যবহার করত, যা $\\alpha = 0.06$ ও প্রায় ৩২.৩-র একটি অন্তর্নিহিত $N$। **কিছুই ভাঙে না। লেবেলটি একটি সুবিধা মাত্র।**

### ৩. রিকার্শন খোলা: EMA-র কোনো শুরুর তারিখ নেই

রিকার্শনটিকে বারবার নিজের ভেতরে বসান:

$$E_t = \\alpha P_t + (1-\\alpha)\\big[\\alpha P_{t-1} + (1-\\alpha)E_{t-2}\\big] = \\alpha \\sum_{k=0}^{\\infty}(1-\\alpha)^k P_{t-k}$$

ওজনগুলোর যোগফল এক, যেহেতু $\\alpha \\sum_{k\\ge 0}(1-\\alpha)^k = \\alpha \\cdot \\frac{1}{\\alpha} = 1$।

**ঊর্ধ্বসীমা অসীম।** EMA(20) ২০টি বার ব্যবহার করে না। এটি কখনো অস্তিত্বে থাকা প্রতিটি বার ব্যবহার করে, জ্যামিতিকভাবে সংকুচিত ওজনসহ। বার $N$-এর কঠোরভাবে বাইরে থাকা ওজনের অংশ

$$W_{>N} = (1-\\alpha)^N$$

আর $\\alpha = 2/(N+1)$ হলে $N$ বাড়ার সঙ্গে এটি **প্রতিটি $N$-এর জন্য** $e^{-2} \\approx 13.53\\%$-এ অভিসারী হয়। আমাদের ছোট ক্ষেত্রে:

$$\\left(\\tfrac{2}{3}\\right)^5 = \\frac{32}{243} = 13.17\\%$$

যা $N = 5$-এই সীমার দশমিক চার বিন্দুর মধ্যে। **EMA(5) তার ওজনের ১৩.১৭% রাখে পাঁচের বেশি পুরনো বারে। EMA(200) তার ওজনের ১৩.৫% রাখে দুইশোর বেশি পুরনো বারে।** সংখ্যাটি $N$-এর সঙ্গে ছোট হয় না — এই তথ্যটিই "পিরিয়ড" লেবেলটিকে বিভ্রান্তিকর করে।

### ৪. ওয়ার্ম-আপ, আর সংখ্যাটির কত ইতিহাস দরকার

মোট ওজনের $f$ ভগ্নাংশ ধরতে কতগুলো বার $m$ লাগে তা বের করুন:

$$1 - (1-\\alpha)^m \\ge f \\;\\Rightarrow\\; m \\ge \\frac{\\ln(1-f)}{\\ln(1-\\alpha)}$$

$f = 0.99$ ও $\\alpha = 1/3$-এ:

$$m \\ge \\frac{\\ln 0.01}{\\ln(2/3)} = \\frac{-4.6052}{-0.4055} = 11.36 \\;\\Rightarrow\\; \\mathbf{12 \\text{ bars}}$$

সাধারণ ফলাফলটি $m \\approx 2.3N$। **ব্যবহারিকভাবে $3N$-এ গোল করুন** আর EMA(50)-এর ট্রেড করার আগে ১৫০ বার চাই।

এবার সিডিং ত্রুটি সরাসরি পরিমাপ করুন, কারণ এখানেই দুটি প্ল্যাটফর্ম দ্বিমত করে। সিড $\\varepsilon_0$ পরিমাণে ভুল হলে $k$ হালনাগাদের পর ত্রুটি

$$\\varepsilon_k = \\varepsilon_0 (1-\\alpha)^k$$

RUPALIPOLY-তে: ৪৪.৮০-র SMA(5)-এর বদলে ৫ দিনের ক্লোজ ৪৫.৪০ বা ১ দিনের ক্লোজ ৪৪.০০ দিয়ে সিড করলে একটি ত্রুটি বহন করবেন। ৪৪.০০ দিয়ে সিড করলে $\\varepsilon_0 = -0.80$, আর ১২ দিন নাগাদ ($k = 7$):

$$\\varepsilon_7 = -0.80 \\times (2/3)^7 = -0.80 \\times 0.058527 = -0.0468$$

**১২ দিনের EMA ৪৭.৮২১৬-র বদলে ৪৭.৭৭৪৮ পড়ে — কেবল একটি সিডিং পছন্দের কারণে ৪.৬৮ পয়সার অসঙ্গতি।** EMA(50)-তে একই ত্রুটি $(49/51)^k$ হারে ক্ষয় হয় আর তার প্রাথমিক আকারের এক শতাংশের নিচে নামতে প্রায় ১১৫ বার নেয়। **আপনার স্প্রেডশিট ব্রোকারের চার্টের সঙ্গে না মিললে পাটিগণিত দেখার আগে সিড দেখুন।**

### ৫. পশ্চাদপদতা, নিখুঁতভাবে বলা

SMA-র ক্ষেত্রে পশ্চাদপদতা হলো ভরকেন্দ্র:

$$L_{SMA}(N) = \\frac{N-1}{2}$$

| গড় | পশ্চাদপদতা (বার) |
|---|---|
| SMA(5) | ২.০ |
| SMA(10) | ৪.৫ |
| SMA(20) | ৯.৫ |
| SMA(50) | ২৪.৫ |
| SMA(200) | ৯৯.৫ |

**২০০ দিনের গড় গড়ে জানায় দাম একশো সেশন আগে কোথায় ছিল।** $\\alpha = 2/(N+1)$-এ একই লেবেলের EMA গঠনগতভাবেই একই পশ্চাদপদতা পায় — §৪.২-এর পুরো উদ্দেশ্যই তাই ছিল।

দ্রুত $N_f$ ও ধীর $N_s$-এর ক্রসওভারে সংকেত বিলম্বের সরল অনুমান হলো কেন্দ্রদুটির পার্থক্য:

$$\\Delta L = \\frac{N_s - N_f}{2}$$

৫ ও ১০-এর জন্য তা ২.৫ বার। **আমাদের উদাহরণে সংকেত এসেছে শীর্ষের ৫ বার পরে — সরল অনুমানের দ্বিগুণ।** কারণটি গুরুত্বপূর্ণ: $\\Delta L$ দুটি রেখার কার্যকর সময়চিহ্নের বিচ্ছেদ মাপে, কিন্তু *ক্রস*-এর জন্য দ্রুত রেখাটিকে বিদ্যমান পুরো ব্যবধান পাড়ি দিতে হয়, আর ১৩ দিনে ঐ ব্যবধান ছিল +১.০৯। **ক্রসওভারের পশ্চাদপদতা ধ্রুবক নয়। এটি পূর্ববর্তী ট্রেন্ডের আকারের সঙ্গে বাড়ে**, যা আপনি যা চান তার ঠিক উল্টো: যত শক্তিশালী নড়াচড়ায় চড়েছেন, তত দেরিতে জানবেন তা শেষ হয়েছে।

### ৬. ওয়েটেড ও অ্যাডাপটিভ গড়

$$WMA_t(N) = \\frac{\\sum_{k=0}^{N-1}(N-k)P_{t-k}}{\\sum_{k=1}^{N}k} = \\frac{2}{N(N+1)}\\sum_{k=0}^{N-1}(N-k)P_{t-k}$$

এর ভরকেন্দ্র $(N-1)/3$, তাই WMA(5) পিছিয়ে ১.৩৩ বার, SMA-র ২.০-র বিপরীতে। RUPALIPOLY-র ১২ দিনে:

$$WMA_5 = \\frac{5(48.90) + 4(48.30) + 3(47.20) + 2(47.60) + 1(47.10)}{15} = \\frac{721.60}{15} = 48.1067$$

SMA(5)-এর ৪৭.৮২ ও EMA(5)-এর ৪৭.৮২১৬-র বিপরীতে। **WMA ০.২৯ ওপরে বসে কারণ এটি দুটি শক্তিশালীতম ক্লোজকে সামনে টেনে আনে।** দ্রুততর, এবং সেই অনুপাতে বেশি নয়েজময় — আবার সেই ডায়াল।

অ্যাডাপটিভ গড় একটি পরিমাপিত দক্ষতা অনুপাত $ER$-এর সঙ্গে $\\alpha$ বদলায়:

$$ER_t = \\frac{|P_t - P_{t-n}|}{\\sum_{k=0}^{n-1}|P_{t-k} - P_{t-k-1}|}, \\qquad \\alpha_t = \\big[ER_t(\\alpha_{fast} - \\alpha_{slow}) + \\alpha_{slow}\\big]^2$$

**$ER$ হলো দিকনির্দেশিত পথ ভাগ মোট পথ**, তাই এটি চপে শূন্যের কাছ থেকে পরিষ্কার ট্রেন্ডে এক পর্যন্ত চলে। ধারণাটি সঠিক। খরচ হলো আপনি এখন $n$, $\\alpha_{fast}$ ও $\\alpha_{slow}$-কে মুক্ত প্যারামিটার হিসেবে ঢুকিয়েছেন। **ডিএসই ডেটায়, যেখানে প্রতি নামে পরিষ্কার ট্রেন্ডিং পর্বের সংখ্যা কম, তিনটি বাড়তি প্যারামিটার মানে নয়েজে ফিট করার তিনটি বাড়তি উপায়।** শিখুন; ওখান থেকে শুরু করবেন না।

### ৭. ক্রসওভারের যন্ত্রকৌশল ও খরচের শর্ত

দ্রুত $F$ ও ধীর $L$-এর জন্য ব্যবধান $S_t = F_t - L_t$ সংজ্ঞায়িত করুন। $\\operatorname{sign}(S_t) \\ne \\operatorname{sign}(S_{t-1})$ হলে একটি সংকেত জ্বলে।

**ব্যবধানটি নিজেই একটি অসিলেটর, আর অধ্যায় ৩৫ ঠিক সেই বিষয়েই** — MACD হলো দুটি EMA থেকে গড়া $S_t$, সঙ্গে সংকেত রেখা হিসেবে $S_t$-এর একটি EMA। ওপরের §৩ ও §৪-এর সবকিছু সরাসরি প্রযোজ্য, ওয়ার্ম-আপসহ।

অর্থনীতি। $n$ রাউন্ড ট্রিপ, প্রতি ট্রেডে গড় গ্রস রিটার্ন $\\bar{g}$ ও রাউন্ড-ট্রিপ খরচ $c$-এর জন্য:

$$\\Pi = n(\\bar{g} - c), \\qquad \\text{break-even: } \\bar{g} = c$$

দৃষ্টান্তমূলক ডিএসই সংখ্যাগুলো বসিয়ে — $n = 14$, মোট গ্রস $8.0\\%$, $c = 0.80\\%$:

$$\\bar{g} = \\frac{8.0}{14} = 0.571\\%, \\qquad \\Pi = 8.0 - 11.2 = -3.2\\%$$

**একটি কৌশলের কঠোরভাবে ধনাত্মক গ্রস প্রান্ত ও কঠোরভাবে ঋণাত্মক নিট রিটার্ন থাকতে পারে, আর কোনটি হবে তা ঠিক করে একমাত্র ট্রেডের সংখ্যা।** বরং একে একটি সীমাবদ্ধতা হিসেবে বলুন:

$$n_{\\max} = \\frac{\\text{total gross}}{c} = \\frac{8.0}{0.80} = 10$$

**দশটি ট্রেড বহনযোগ্য ছিল আর চৌদ্দটি নেওয়া হয়েছে।** যেকোনো ফিল্টার ঠিক ততটাই ন্যায্য যতটা তা মোট গ্রস কমানোর চেয়ে দ্রুত $n$ কমায়।

### ৮. সীমা কী করে, আর প্রতিটি সীমা কেন একটি প্যারামিটার

ব্যবহারকারীরা একটি বিচ্ছেদ ব্যান্ড $\\theta$ যোগ করেন যাতে সংকেতের জন্য দরকার

$$|S_t| > \\theta \\cdot ATR_t$$

**এর অস্তিত্ব ১৬ দিনের মতো দিনগুলোর কারণে, যেখানে ব্যবধান ছিল +০.০৮ আর পরের বারের চিহ্ন কার্যত মুদ্রা নিক্ষেপ।** ব্যান্ডটি প্রান্তিক অতিক্রমগুলো সরায় ও তাই ট্রেড সরায়, যা ট্রেন্ড ফিল্টারের মতোই একই লিভার।

আর এই যে ফাঁদ, পাটিগণিত হিসেবে বলা। $n_f$টি দ্রুত মানের বিপরীতে $n_s$টি ধীর মান পরীক্ষা করলে আপনি একটি নমুনায় $n_f \\times n_s$টি পরীক্ষা চালিয়েছেন। ২০ ও ২০-তে তা **৪০০টি পরীক্ষা**, আর একটি নয়েজময় বণ্টন থেকে ৪০০টি টানের সর্বোচ্চটি গঠনগতভাবেই উঁচু। ১০টি প্রার্থী মানসহ $\\theta$ যোগ করলে তা ৪,০০০ হয়।

**৫০/২০০ জোড়া একটি প্রথা যা টিকে আছে কারণ সংখ্যাগুলো গোল, সর্বোত্তম বলে নয়।** অধ্যায় ৫৫ বলে একটি সৎ মূল্যায়নে কী লাগে: আউট-অব-স্যাম্পল ডেটা, ওয়াক-ফরওয়ার্ড পরীক্ষা, এবং একটিও ফলাফল দেখার আগেই লিখিতভাবে স্থির করা খরচের অনুমান।`,
    },

    manual: {
      en: `**Scenario.** RUPALIPOLY from §34.3. Twenty daily closes: 44.00, 44.60, 45.20, 44.80, 45.40, 46.20, 46.00, 47.10, 47.60, 47.20, 48.30, 48.90, 48.40, 47.50, 46.30, 45.90, 45.10, 44.40, 44.80, 43.90. We build SMA(5), SMA(10) and EMA(5) by hand, run the crossover, and price the round trip at 0.40% per side.

**Step 1 — Fix the EMA smoothing constant before anything else.**
$$\\alpha = \\frac{2}{N+1} = \\frac{2}{5+1} = \\frac{1}{3} = 0.333333, \\qquad 1-\\alpha = \\frac{2}{3} = 0.666667$$

**Confirm the calibration is doing what it claims.** Centre of mass of the EMA:
$$\\text{CoM} = \\frac{1-\\alpha}{\\alpha} = \\frac{2/3}{1/3} = 2.0 \\text{ bars}$$
Centre of mass of the SMA(5):
$$\\frac{N-1}{2} = \\frac{4}{2} = 2.0 \\text{ bars}$$

**Identical. That equality is the only reason the label "5" means the same thing on both lines**, and it is why you may compare an EMA(20) to an SMA(20) without qualification.

**Step 2 — First SMA(5), at day 5.**
$$\\frac{44.00 + 44.60 + 45.20 + 44.80 + 45.40}{5} = \\frac{224.00}{5} = 44.80$$

**Step 3 — Roll it forward with the recursive form, not by re-adding five numbers.**
$$SMA_t = SMA_{t-1} + \\frac{P_t - P_{t-5}}{5}$$
Day 6: $44.80 + \\frac{46.20 - 44.00}{5} = 44.80 + 0.44 = 45.24$
Day 7: $45.24 + \\frac{46.00 - 44.60}{5} = 45.24 + 0.28 = 45.52$
Day 8: $45.52 + \\frac{47.10 - 45.20}{5} = 45.52 + 0.38 = 45.90$
Day 9: $45.90 + \\frac{47.60 - 44.80}{5} = 45.90 + 0.56 = 46.46$
Day 10: $46.46 + \\frac{47.20 - 45.40}{5} = 46.46 + 0.36 = 46.82$

**Look at the numerator every time.** The line moves on the difference between the arriving bar and the *departing* bar. On day 10 price fell from 47.60 to 47.20 and the SMA rose 0.36, purely because the bar that left the window was 45.40. **That is not the market saying anything. That is the rectangular window.**

Continuing: day 11 = 47.24, day 12 = 47.82, day 13 = 48.08, day 14 = 48.06, day 15 = 47.88, day 16 = 47.40, day 17 = 46.64, day 18 = 45.84, day 19 = 45.30, day 20 = 44.82.

**Step 4 — Seed the EMA, and write down that the seed is a choice.**
$$E_5 = SMA_5(5) = 44.80$$

There is no correct seed. A true EMA has no start date — §34.4 §3 shows the sum runs to infinity. We adopt the first-SMA convention because it is what most vendors use; step 12 prices what a different choice would have done.

**Step 5 — Run the recursion.**
$$E_t = \\tfrac{1}{3}P_t + \\tfrac{2}{3}E_{t-1}$$
$$E_6 = \\tfrac{1}{3}(46.20) + \\tfrac{2}{3}(44.80) = 15.400000 + 29.866667 = 45.2667$$
$$E_7 = \\tfrac{1}{3}(46.00) + \\tfrac{2}{3}(45.266667) = 15.333333 + 30.177778 = 45.5111$$
$$E_8 = \\tfrac{1}{3}(47.10) + \\tfrac{2}{3}(45.511111) = 15.700000 + 30.340741 = 46.0407$$
$$E_9 = \\tfrac{1}{3}(47.60) + \\tfrac{2}{3}(46.040741) = 15.866667 + 30.693827 = 46.5605$$
$$E_{10} = \\tfrac{1}{3}(47.20) + \\tfrac{2}{3}(46.560494) = 15.733333 + 31.040329 = 46.7737$$
$$E_{11} = \\tfrac{1}{3}(48.30) + \\tfrac{2}{3}(46.773663) = 16.100000 + 31.182442 = 47.2824$$
$$E_{12} = \\tfrac{1}{3}(48.90) + \\tfrac{2}{3}(47.282442) = 16.300000 + 31.521628 = 47.8216$$

**Carry the full decimals through, not the rounded display value.** Round each step to two places and by day 12 you are off by roughly a paisa; the recursion compounds your rounding as faithfully as it compounds the data.

Continuing: $E_{13} = 48.0144$, $E_{14} = 47.8429$, $E_{15} = 47.3286$, $E_{16} = 46.8524$, $E_{17} = 46.2683$, $E_{18} = 45.6455$, $E_{19} = 45.3637$, $E_{20} = 44.8758$.

**Step 6 — Compare SMA and EMA at day 8, the strong up-bar.**
$$\\Delta SMA = 45.90 - 45.52 = 0.38, \\qquad \\Delta EMA = 46.0407 - 45.5111 = 0.5296$$
$$\\frac{0.5296}{0.38} = 1.39$$

**The EMA captured 39% more of that day's move**, because the newest close carries $1/3$ of the weight rather than $1/5$.

**Step 7 — Compare them at day 14, the first bar after the top. This is the important one.**
$$\\Delta SMA = 48.06 - 48.08 = -0.02, \\qquad \\Delta EMA = 47.8429 - 48.0144 = -0.1715$$
$$\\frac{0.1715}{0.02} = 8.57$$

**On the identical bar, the EMA reports the turn eight and a half times more loudly.** The SMA's near-zero move is the window artefact from step 3 — the departing bar happened to offset the arriving one. **A trader watching only the SMA has been told nothing happened on the day the trend ended.**

**Step 8 — Compute the WMA(5) at day 12, for the third point on the dial.**
$$WMA = \\frac{5(48.90) + 4(48.30) + 3(47.20) + 2(47.60) + 1(47.10)}{15}$$
$$= \\frac{244.50 + 193.20 + 141.60 + 95.20 + 47.10}{15} = \\frac{721.60}{15} = 48.1067$$

| Day-12 line | Value | Lag (bars) |
|---|---|---|
| SMA(5) | 47.82 | 2.00 |
| EMA(5) | 47.8216 | 2.00 |
| WMA(5) | **48.1067** | **1.33** |

**The SMA and EMA agree to 0.0016 taka here — and that is the trap.** In a steady linear trend the two coincide almost exactly, which is precisely when the choice between them does not matter. They separate at turns, which is exactly when it does. **Never judge SMA-versus-EMA on a trending stretch.**

**Step 9 — Weight beyond the nominal period.**
$$W_{>5} = (1-\\alpha)^5 = \\left(\\tfrac{2}{3}\\right)^5 = \\frac{32}{243} = 0.131687 = 13.17\\%$$

**An EMA(5) puts 13.17% of its weight on bars older than five.** Compare the asymptote $e^{-2} = 13.53\\%$, which every EMA under this convention approaches. **The number does not shrink as $N$ grows** — that is what makes the period label a nickname rather than a window.

**Step 10 — Warm-up requirement.**
$$m \\ge \\frac{\\ln(0.01)}{\\ln(2/3)} = \\frac{-4.6052}{-0.4055} = 11.36 \\;\\Rightarrow\\; 12 \\text{ bars for 99\\% of the weight}$$

General rule $m \\approx 2.3N$; **use $3N$ in practice.** For an EMA(50) that is 150 sessions of history before the number means anything. **On a DSE name listed two years ago whose series is interrupted by a floor-price window you excluded, check that you still have them.**

**Step 11 — Price the seeding choice, because "the seed is a fiction" is otherwise just a slogan.**

Seed with the day-1 close of 44.00 instead of the SMA of 44.80:
$$\\varepsilon_0 = 44.00 - 44.80 = -0.80$$
$$\\varepsilon_7 = \\varepsilon_0 (1-\\alpha)^7 = -0.80 \\times \\left(\\tfrac{2}{3}\\right)^7 = -0.80 \\times 0.058527 = -0.0468$$
$$E_{12}^{\\text{alt}} = 47.8216 - 0.0468 = 47.7748$$

**Two spreadsheets, identical data, identical formula, and a 4.68 paisa disagreement on day 12 purely from the seed.** On an EMA(50), where $1-\\alpha = 49/51$, the same relative error needs about 115 bars to fall below one percent of itself. **This is the first thing to check when your chart and your sheet disagree.**

**Step 12 — Run the crossover.** Signal: exit long when SMA(5) closes below SMA(10).

| Day | SMA(5) | SMA(10) | Spread |
|---|---|---|---|
| 13 | 48.08 | 46.99 | +1.09 |
| 14 | 48.06 | 47.26 | +0.80 |
| 15 | 47.88 | 47.35 | +0.53 |
| 16 | 47.40 | 47.32 | **+0.08** |
| 17 | 46.64 | 47.23 | **−0.59** |

**Exit fires on day 17 at the close of 45.10.**

**Step 13 — Measure the lag against the naive estimate, and notice it fails.**
$$\\Delta L = \\frac{N_s - N_f}{2} = \\frac{10 - 5}{2} = 2.5 \\text{ bars (predicted)}$$
$$\\text{Actual} = 17 - 12 = 5 \\text{ bars}$$

**Twice the textbook estimate.** The reason is in the day-13 spread of +1.09: the fast line must travel the whole accumulated gap before it can cross, and that gap was built by the very trend you were riding. **Crossover lag scales with the strength of the move that preceded it.** The better the trend, the later the exit.

**Step 14 — Price the give-back.**
$$48.90 - 45.10 = 3.80 \\qquad\\Rightarrow\\qquad \\frac{3.80}{48.90} = 7.77\\%$$

**7.77% of the position handed back between the top and the exit** — on data with no gaps, no circuit locks and no slippage.

**Step 15 — The full round trip, with cost.** Entry from the matching up-cross at 44.20.
$$g = \\frac{45.10 - 44.20}{44.20} = \\frac{0.90}{44.20} = 2.036\\%$$
$$c = 2 \\times 0.40\\% = 0.80\\%$$
$$\\text{Net} = 2.036 - 0.800 = \\mathbf{1.236\\%}$$

**Step 16 — Compute the capture ratio, which is the number that should stop you.**
$$\\text{Available} = \\frac{48.90 - 44.20}{44.20} = 10.633\\%$$
$$\\text{Capture} = \\frac{2.036}{10.633} = \\mathbf{19.15\\%}$$

**This is the winning trade.** Correct direction, clean trend, correct exit — and it kept 1.236% net out of a 10.633% move, because the system entered late and exited late and paid 0.80% for the privilege. **A crossover is a description of a trend, not a way to trade one.**

**Step 17 — Now the ranging year, which is where the money actually goes.** 14 round trips: 4 trends at +6.5%, 10 chops at −1.8%.
$$\\text{Gross} = 4(6.5) + 10(-1.8) = 26.0 - 18.0 = +8.0\\%$$
$$\\text{Cost} = 14 \\times 0.80 = 11.2\\%$$
$$\\text{Net} = 8.0 - 11.2 = \\mathbf{-3.2\\%}$$

$$\\bar{g} = \\frac{8.0}{14} = 0.571\\% \\;\\Rightarrow\\; \\text{break-even per side} = \\frac{0.571}{2} = \\mathbf{0.286\\%}$$

$$n_{\\max} = \\frac{8.0}{0.80} = 10 \\text{ trades affordable, } 14 \\text{ taken}$$

**Positive gross edge, negative net return, and the deciding variable is the trade count.**

**Step 18 — Apply the filter and re-price.** Filter removes 8 of 10 chops, costs 1 of 4 trends.
$$\\text{Gross} = 3(6.5) + 2(-1.8) = 19.5 - 3.6 = +15.9\\%$$
$$\\text{Cost} = 5 \\times 0.80 = 4.0\\% \\qquad \\text{Net} = \\mathbf{+11.9\\%}$$
$$\\bar{g} = \\frac{15.9}{5} = 3.18\\% \\;\\Rightarrow\\; \\text{break-even per side} = \\mathbf{1.59\\%}$$
$$\\frac{1.59}{0.286} = 5.56\\times$$

**The filter multiplied the survivable cost by 5.56 and swung the year by 15.1 percentage points, without improving a single entry.** It deleted trades. That is the whole mechanism, and it is worth being blunt about it: **on this exchange, the most reliable way to improve a crossover system is to make it trade less.**

**Step 19 — State the DSE caveats the arithmetic cannot see.**

| Caveat | Effect on the numbers above |
|---|---|
| Floor-price window inside any average's lookback | The average is of an administered price. **Every figure in steps 2–8 becomes meaningless**, and no warning appears. Exclude per Chapter 26. |
| A close printed at the circuit limit | That close is where the band ended. It enters the average as if it were an agreed price. |
| Thin name, wide spread | The 0.40% per side assumed in step 15 is brokerage only. **Add half the spread each way and a name quoting 44.00/44.60 costs you another 0.68% per side** — which alone doubles the break-even. |
| Gappy illiquid name | Price does not test the average; it opens 4% through it. **The MA is never a level below the Chapter 27 liquidity threshold.** |
| No reliable short side | The day-17 down-cross is an exit. It is not a short. **Every published crossover return that counts the down leg is unavailable to you**, so halve it before you believe it. |

**Step 20 — Carry the recursion forward.** Chapter 35 takes $E_t = \\alpha P_t + (1-\\alpha)E_{t-1}$ exactly as derived in step 5, builds two of them at 12 and 26, subtracts to get the spread $S_t$ of step 12, and then smooths $S_t$ with a third EMA at 9. **The warm-up of step 10, the seeding error of step 11 and the lag of step 13 all carry across unchanged** — MACD inherits every one of them, and inherits them three times over.`,
      bn: `**পরিস্থিতি।** §৩৪.৩-এর RUPALIPOLY। কুড়িটি দৈনিক ক্লোজ: ৪৪.০০, ৪৪.৬০, ৪৫.২০, ৪৪.৮০, ৪৫.৪০, ৪৬.২০, ৪৬.০০, ৪৭.১০, ৪৭.৬০, ৪৭.২০, ৪৮.৩০, ৪৮.৯০, ৪৮.৪০, ৪৭.৫০, ৪৬.৩০, ৪৫.৯০, ৪৫.১০, ৪৪.৪০, ৪৪.৮০, ৪৩.৯০। আমরা হাতে SMA(5), SMA(10) ও EMA(5) গড়ব, ক্রসওভার চালাব, আর প্রতি পাশে ০.৪০%-এ রাউন্ড ট্রিপের দাম হিসাব করব।

**ধাপ ১ — সবকিছুর আগে EMA স্মুদিং ধ্রুবক স্থির করুন।**
$$\\alpha = \\frac{2}{N+1} = \\frac{2}{5+1} = \\frac{1}{3} = 0.333333, \\qquad 1-\\alpha = \\frac{2}{3} = 0.666667$$

**ক্যালিব্রেশনটি যা দাবি করে তা করছে কি না নিশ্চিত করুন।** EMA-র ভরকেন্দ্র:
$$\\text{CoM} = \\frac{1-\\alpha}{\\alpha} = \\frac{2/3}{1/3} = 2.0 \\text{ bars}$$
SMA(5)-এর ভরকেন্দ্র:
$$\\frac{N-1}{2} = \\frac{4}{2} = 2.0 \\text{ bars}$$

**অভিন্ন। ঐ সমতাই একমাত্র কারণ যে "৫" লেবেলটি দুটি রেখাতেই একই জিনিস বোঝায়**, আর এজন্যই আপনি কোনো শর্ত ছাড়াই EMA(20)-কে SMA(20)-এর সঙ্গে তুলনা করতে পারেন।

**ধাপ ২ — প্রথম SMA(5), ৫ দিনে।**
$$\\frac{44.00 + 44.60 + 45.20 + 44.80 + 45.40}{5} = \\frac{224.00}{5} = 44.80$$

**ধাপ ৩ — পাঁচটি সংখ্যা আবার যোগ না করে পুনরাবৃত্ত রূপে এগিয়ে নিন।**
$$SMA_t = SMA_{t-1} + \\frac{P_t - P_{t-5}}{5}$$
দিন ৬: $44.80 + \\frac{46.20 - 44.00}{5} = 44.80 + 0.44 = 45.24$
দিন ৭: $45.24 + \\frac{46.00 - 44.60}{5} = 45.24 + 0.28 = 45.52$
দিন ৮: $45.52 + \\frac{47.10 - 45.20}{5} = 45.52 + 0.38 = 45.90$
দিন ৯: $45.90 + \\frac{47.60 - 44.80}{5} = 45.90 + 0.56 = 46.46$
দিন ১০: $46.46 + \\frac{47.20 - 45.40}{5} = 46.46 + 0.36 = 46.82$

**প্রতিবার লবটি দেখুন।** রেখাটি নড়ে আগত বার ও *বিদায়ী* বারের পার্থক্যে। ১০ দিনে দাম ৪৭.৬০ থেকে ৪৭.২০-তে নেমেছে অথচ SMA ০.৩৬ উঠেছে, কেবল এই কারণে যে উইন্ডো ছেড়ে যাওয়া বারটি ছিল ৪৫.৪০। **এটি বাজারের কোনো কথা নয়। এটি আয়তাকার উইন্ডো।**

চলমান: দিন ১১ = ৪৭.২৪, দিন ১২ = ৪৭.৮২, দিন ১৩ = ৪৮.০৮, দিন ১৪ = ৪৮.০৬, দিন ১৫ = ৪৭.৮৮, দিন ১৬ = ৪৭.৪০, দিন ১৭ = ৪৬.৬৪, দিন ১৮ = ৪৫.৮৪, দিন ১৯ = ৪৫.৩০, দিন ২০ = ৪৪.৮২।

**ধাপ ৪ — EMA সিড করুন, আর লিখে রাখুন সিডটি একটি পছন্দ।**
$$E_5 = SMA_5(5) = 44.80$$

কোনো সঠিক সিড নেই। প্রকৃত EMA-র কোনো শুরুর তারিখ নেই — §৩৪.৪-এর §৩ দেখায় যোগফল অসীম পর্যন্ত চলে। আমরা প্রথম-SMA প্রথাটি নিই কারণ বেশিরভাগ বিক্রেতা তাই ব্যবহার করে; ধাপ ১১ হিসাব করে ভিন্ন পছন্দ কী করত।

**ধাপ ৫ — রিকার্শন চালান।**
$$E_t = \\tfrac{1}{3}P_t + \\tfrac{2}{3}E_{t-1}$$
$$E_6 = \\tfrac{1}{3}(46.20) + \\tfrac{2}{3}(44.80) = 15.400000 + 29.866667 = 45.2667$$
$$E_7 = \\tfrac{1}{3}(46.00) + \\tfrac{2}{3}(45.266667) = 15.333333 + 30.177778 = 45.5111$$
$$E_8 = \\tfrac{1}{3}(47.10) + \\tfrac{2}{3}(45.511111) = 15.700000 + 30.340741 = 46.0407$$
$$E_9 = \\tfrac{1}{3}(47.60) + \\tfrac{2}{3}(46.040741) = 15.866667 + 30.693827 = 46.5605$$
$$E_{10} = \\tfrac{1}{3}(47.20) + \\tfrac{2}{3}(46.560494) = 15.733333 + 31.040329 = 46.7737$$
$$E_{11} = \\tfrac{1}{3}(48.30) + \\tfrac{2}{3}(46.773663) = 16.100000 + 31.182442 = 47.2824$$
$$E_{12} = \\tfrac{1}{3}(48.90) + \\tfrac{2}{3}(47.282442) = 16.300000 + 31.521628 = 47.8216$$

**প্রদর্শিত গোল করা মান নয়, পুরো দশমিক বহন করুন।** প্রতিটি ধাপ দুই ঘরে গোল করলে ১২ দিন নাগাদ আপনি প্রায় এক পয়সা দূরে; রিকার্শন আপনার গোল করাকে ডেটার মতোই বিশ্বস্তভাবে চক্রবৃদ্ধি করে।

চলমান: $E_{13} = 48.0144$, $E_{14} = 47.8429$, $E_{15} = 47.3286$, $E_{16} = 46.8524$, $E_{17} = 46.2683$, $E_{18} = 45.6455$, $E_{19} = 45.3637$, $E_{20} = 44.8758$।

**ধাপ ৬ — ৮ দিনে, শক্তিশালী ঊর্ধ্বমুখী বারে SMA ও EMA তুলনা করুন।**
$$\\Delta SMA = 45.90 - 45.52 = 0.38, \\qquad \\Delta EMA = 46.0407 - 45.5111 = 0.5296$$
$$\\frac{0.5296}{0.38} = 1.39$$

**EMA ঐ দিনের নড়াচড়ার ৩৯% বেশি ধরেছে**, কারণ নতুনতম ক্লোজ $1/5$ নয়, $1/3$ ওজন বহন করে।

**ধাপ ৭ — ১৪ দিনে তুলনা করুন, শীর্ষের পরের প্রথম বার। এটিই গুরুত্বপূর্ণ।**
$$\\Delta SMA = 48.06 - 48.08 = -0.02, \\qquad \\Delta EMA = 47.8429 - 48.0144 = -0.1715$$
$$\\frac{0.1715}{0.02} = 8.57$$

**অভিন্ন বারে EMA মোড়টির খবর সাড়ে আট গুণ জোরে দেয়।** SMA-র প্রায়-শূন্য নড়াচড়া ধাপ ৩-এর সেই উইন্ডো কৃত্রিমতা — বিদায়ী বারটি ঘটনাচক্রে আগত বারটিকে কাটাকাটি করেছে। **যিনি কেবল SMA দেখছেন তাঁকে বলা হয়েছে ট্রেন্ড শেষ হওয়ার দিনে কিছুই ঘটেনি।**

**ধাপ ৮ — ডায়ালের তৃতীয় বিন্দুর জন্য ১২ দিনে WMA(5) গণনা করুন।**
$$WMA = \\frac{5(48.90) + 4(48.30) + 3(47.20) + 2(47.60) + 1(47.10)}{15}$$
$$= \\frac{244.50 + 193.20 + 141.60 + 95.20 + 47.10}{15} = \\frac{721.60}{15} = 48.1067$$

| ১২ দিনের রেখা | মান | পশ্চাদপদতা (বার) |
|---|---|---|
| SMA(5) | ৪৭.৮২ | ২.০০ |
| EMA(5) | ৪৭.৮২১৬ | ২.০০ |
| WMA(5) | **৪৮.১০৬৭** | **১.৩৩** |

**এখানে SMA ও EMA ০.০০১৬ টাকা পর্যন্ত মিলে যায় — আর ওটাই ফাঁদ।** স্থির রৈখিক ট্রেন্ডে দুটি প্রায় হুবহু মিলে যায়, আর ঠিক তখনই দুটির মধ্যে পছন্দ কোনো ব্যাপার নয়। তারা আলাদা হয় মোড়ে, আর ঠিক তখনই তা ব্যাপার। **কখনো ট্রেন্ডিং অংশে SMA-বনাম-EMA বিচার করবেন না।**

**ধাপ ৯ — নামমাত্র পিরিয়ডের বাইরের ওজন।**
$$W_{>5} = (1-\\alpha)^5 = \\left(\\tfrac{2}{3}\\right)^5 = \\frac{32}{243} = 0.131687 = 13.17\\%$$

**EMA(5) তার ওজনের ১৩.১৭% বসায় পাঁচের বেশি পুরনো বারে।** তুলনা করুন প্রান্তমান $e^{-2} = 13.53\\%$, যার দিকে এই প্রথার প্রতিটি EMA এগোয়। **$N$ বাড়লেও সংখ্যাটি ছোট হয় না** — এটিই পিরিয়ড লেবেলকে উইন্ডো নয়, একটি ডাকনাম করে তোলে।

**ধাপ ১০ — ওয়ার্ম-আপের প্রয়োজন।**
$$m \\ge \\frac{\\ln(0.01)}{\\ln(2/3)} = \\frac{-4.6052}{-0.4055} = 11.36 \\;\\Rightarrow\\; 12 \\text{ bars for 99\\% of the weight}$$

সাধারণ নিয়ম $m \\approx 2.3N$; **ব্যবহারিকভাবে $3N$ নিন।** EMA(50)-এর জন্য তা সংখ্যাটির কোনো মানে হওয়ার আগে ১৫০ সেশনের ইতিহাস। **দুই বছর আগে তালিকাভুক্ত এমন একটি ডিএসই নামে যার সিরিজ আপনার বাদ দেওয়া ফ্লোর-প্রাইস জানালায় ছিন্ন, যাচাই করুন সেগুলো এখনো আছে কি না।**

**ধাপ ১১ — সিডিং পছন্দের দাম হিসাব করুন, কারণ নইলে "সিড একটি কল্পকাহিনি" নিছক স্লোগান।**

৪৪.৮০-র SMA-র বদলে ১ দিনের ক্লোজ ৪৪.০০ দিয়ে সিড করুন:
$$\\varepsilon_0 = 44.00 - 44.80 = -0.80$$
$$\\varepsilon_7 = \\varepsilon_0 (1-\\alpha)^7 = -0.80 \\times \\left(\\tfrac{2}{3}\\right)^7 = -0.80 \\times 0.058527 = -0.0468$$
$$E_{12}^{\\text{alt}} = 47.8216 - 0.0468 = 47.7748$$

**দুটি স্প্রেডশিট, অভিন্ন ডেটা, অভিন্ন সূত্র, আর কেবল সিডের কারণে ১২ দিনে ৪.৬৮ পয়সার দ্বিমত।** EMA(50)-তে, যেখানে $1-\\alpha = 49/51$, একই আপেক্ষিক ত্রুটির নিজের এক শতাংশের নিচে নামতে প্রায় ১১৫ বার লাগে। **আপনার চার্ট ও শিট না মিললে সবার আগে এটিই দেখুন।**

**ধাপ ১২ — ক্রসওভার চালান।** সংকেত: SMA(5) SMA(10)-এর নিচে বন্ধ হলে লং থেকে বেরোন।

| দিন | SMA(5) | SMA(10) | ব্যবধান |
|---|---|---|---|
| ১৩ | ৪৮.০৮ | ৪৬.৯৯ | +১.০৯ |
| ১৪ | ৪৮.০৬ | ৪৭.২৬ | +০.৮০ |
| ১৫ | ৪৭.৮৮ | ৪৭.৩৫ | +০.৫৩ |
| ১৬ | ৪৭.৪০ | ৪৭.৩২ | **+০.০৮** |
| ১৭ | ৪৬.৬৪ | ৪৭.২৩ | **−০.৫৯** |

**প্রস্থান জ্বলে ১৭ দিনে, ক্লোজ ৪৫.১০-তে।**

**ধাপ ১৩ — সরল অনুমানের বিপরীতে পশ্চাদপদতা মাপুন, আর লক্ষ করুন তা ব্যর্থ হয়।**
$$\\Delta L = \\frac{N_s - N_f}{2} = \\frac{10 - 5}{2} = 2.5 \\text{ bars (predicted)}$$
$$\\text{Actual} = 17 - 12 = 5 \\text{ bars}$$

**পাঠ্যবইয়ের অনুমানের দ্বিগুণ।** কারণটি ১৩ দিনের +১.০৯ ব্যবধানে: ক্রস করার আগে দ্রুত রেখাটিকে পুরো জমা ব্যবধান পাড়ি দিতে হয়, আর ঐ ব্যবধান গড়েছে ঠিক সেই ট্রেন্ডটিই যাতে আপনি চড়ছিলেন। **ক্রসওভারের পশ্চাদপদতা তার পূর্ববর্তী নড়াচড়ার শক্তির সঙ্গে বাড়ে।** ট্রেন্ড যত ভালো, প্রস্থান তত দেরিতে।

**ধাপ ১৪ — ফেরত দেওয়ার দাম হিসাব করুন।**
$$48.90 - 45.10 = 3.80 \\qquad\\Rightarrow\\qquad \\frac{3.80}{48.90} = 7.77\\%$$

**শীর্ষ ও প্রস্থানের মাঝে পজিশনের ৭.৭৭% ফেরত** — এমন ডেটায় যেখানে কোনো গ্যাপ নেই, সার্কিট লক নেই, স্লিপেজ নেই।

**ধাপ ১৫ — সম্পূর্ণ রাউন্ড ট্রিপ, খরচসহ।** মিলিত আপ-ক্রস থেকে প্রবেশ ৪৪.২০-তে।
$$g = \\frac{45.10 - 44.20}{44.20} = \\frac{0.90}{44.20} = 2.036\\%$$
$$c = 2 \\times 0.40\\% = 0.80\\%$$
$$\\text{Net} = 2.036 - 0.800 = \\mathbf{1.236\\%}$$

**ধাপ ১৬ — ক্যাপচার অনুপাত গণনা করুন, যে সংখ্যাটির আপনাকে থামানো উচিত।**
$$\\text{Available} = \\frac{48.90 - 44.20}{44.20} = 10.633\\%$$
$$\\text{Capture} = \\frac{2.036}{10.633} = \\mathbf{19.15\\%}$$

**এটিই বিজয়ী ট্রেড।** সঠিক দিক, পরিষ্কার ট্রেন্ড, সঠিক প্রস্থান — আর এটি ১০.৬৩৩% নড়াচড়া থেকে নিট রেখেছে ১.২৩৬%, কারণ সিস্টেমটি দেরিতে ঢুকেছে, দেরিতে বেরিয়েছে, আর সেই সুযোগের জন্য ০.৮০% দিয়েছে। **ক্রসওভার একটি ট্রেন্ডের বর্ণনা, তা ট্রেড করার উপায় নয়।**

**ধাপ ১৭ — এবার রেঞ্জিং বছর, যেখানে টাকা আসলে যায়।** ১৪টি রাউন্ড ট্রিপ: ৪টি ট্রেন্ড +৬.৫%-এ, ১০টি চপ −১.৮%-এ।
$$\\text{Gross} = 4(6.5) + 10(-1.8) = 26.0 - 18.0 = +8.0\\%$$
$$\\text{Cost} = 14 \\times 0.80 = 11.2\\%$$
$$\\text{Net} = 8.0 - 11.2 = \\mathbf{-3.2\\%}$$

$$\\bar{g} = \\frac{8.0}{14} = 0.571\\% \\;\\Rightarrow\\; \\text{break-even per side} = \\frac{0.571}{2} = \\mathbf{0.286\\%}$$

$$n_{\\max} = \\frac{8.0}{0.80} = 10 \\text{ trades affordable, } 14 \\text{ taken}$$

**ধনাত্মক গ্রস প্রান্ত, ঋণাত্মক নিট রিটার্ন, আর নির্ণায়ক চলকটি ট্রেডের সংখ্যা।**

**ধাপ ১৮ — ফিল্টার প্রয়োগ করে আবার দাম হিসাব করুন।** ফিল্টার ১০টি চপের ৮টি সরায়, ৪টি ট্রেন্ডের ১টি কেড়ে নেয়।
$$\\text{Gross} = 3(6.5) + 2(-1.8) = 19.5 - 3.6 = +15.9\\%$$
$$\\text{Cost} = 5 \\times 0.80 = 4.0\\% \\qquad \\text{Net} = \\mathbf{+11.9\\%}$$
$$\\bar{g} = \\frac{15.9}{5} = 3.18\\% \\;\\Rightarrow\\; \\text{break-even per side} = \\mathbf{1.59\\%}$$
$$\\frac{1.59}{0.286} = 5.56\\times$$

**ফিল্টার সহনীয় খরচকে ৫.৫৬ গুণ করেছে ও বছরটিকে ১৫.১ শতাংশ বিন্দু ঘুরিয়েছে, একটিও প্রবেশ উন্নত না করেই।** এটি ট্রেড মুছেছে। পুরো কৌশলটি এটাই, আর এ বিষয়ে স্পষ্ট হওয়া মূল্যবান: **এই এক্সচেঞ্জে ক্রসওভার সিস্টেম উন্নত করার সবচেয়ে নির্ভরযোগ্য উপায় হলো একে কম ট্রেড করানো।**

**ধাপ ১৯ — যে ডিএসই সতর্কতাগুলো পাটিগণিত দেখতে পায় না তা বলুন।**

| সতর্কতা | ওপরের সংখ্যায় প্রভাব |
|---|---|
| যেকোনো গড়ের লুকব্যাকের ভেতরে ফ্লোর-প্রাইস জানালা | গড়টি একটি প্রশাসিত দামের। **ধাপ ২–৮-এর প্রতিটি সংখ্যা অর্থহীন হয়ে যায়**, আর কোনো সতর্কবার্তা আসে না। অধ্যায় ২৬ অনুযায়ী বাদ দিন। |
| সার্কিট সীমায় ছাপা একটি ক্লোজ | ঐ ক্লোজ যেখানে ব্যান্ড শেষ হয়েছে। এটি গড়ে ঢোকে যেন একটি সম্মত দাম। |
| পাতলা নাম, চওড়া স্প্রেড | ধাপ ১৫-এ ধরা প্রতি পাশে ০.৪০% কেবল ব্রোকারেজ। **দুই পাশে অর্ধেক স্প্রেড যোগ করুন আর ৪৪.০০/৪৪.৬০ কোট করা নাম আপনার প্রতি পাশে আরও ০.৬৮% নেয়** — যা একাই ব্রেক-ইভেন দ্বিগুণ করে। |
| গ্যাপি অতরল নাম | দাম গড়টি পরীক্ষা করে না; এটি ৪% দূরে খোলে। **অধ্যায় ২৭-এর তারল্য সীমার নিচে MA কখনোই একটি স্তর নয়।** |
| নির্ভরযোগ্য শর্ট সাইড নেই | ১৭ দিনের ডাউন-ক্রস একটি প্রস্থান। এটি শর্ট নয়। **নিম্নমুখী পা গোনা প্রতিটি প্রকাশিত ক্রসওভার রিটার্ন আপনার কাছে অনুপলব্ধ**, তাই বিশ্বাস করার আগে তা অর্ধেক করুন। |

**ধাপ ২০ — রিকার্শনটি সামনে নিয়ে যান।** অধ্যায় ৩৫ ধাপ ৫-এ নিষ্কাশিত $E_t = \\alpha P_t + (1-\\alpha)E_{t-1}$ হুবহু নেয়, ১২ ও ২৬-এ দুটি গড়ে, ধাপ ১২-এর ব্যবধান $S_t$ পেতে বিয়োগ করে, তারপর ৯-এ তৃতীয় একটি EMA দিয়ে $S_t$ স্মুদ করে। **ধাপ ১০-এর ওয়ার্ম-আপ, ধাপ ১১-এর সিডিং ত্রুটি ও ধাপ ১৩-এর পশ্চাদপদতা সবই অপরিবর্তিতভাবে প্রযোজ্য** — MACD এদের প্রতিটি উত্তরাধিকার সূত্রে পায়, আর তিনবার করে পায়।`,
    },

    mistakes: {
      en: `1. **Believing an EMA(20) uses twenty bars.** It uses every bar that ever existed. **13.53% of an EMA's weight sits beyond its nominal period, for every period** — 13.17% on our EMA(5), computed as $(2/3)^5 = 32/243$. The label is a nickname, not a window, and treating it as a window is why people run an EMA(50) on 60 bars of data and act on the result.
2. **Seeding the EMA carelessly and then blaming the arithmetic.** Seed our EMA(5) with the day-1 close of 44.00 instead of the SMA(5) of 44.80 and day 12 reads **47.7748 instead of 47.8216** — a 4.68 paisa gap from nothing but the seed. On an EMA(50) that error needs about 115 bars to decay below one percent of itself. **Check the seed before you check your formula.**
3. **Rounding inside the recursion.** $E_t = \\frac{1}{3}P_t + \\frac{2}{3}E_{t-1}$ feeds its own output back in. Round each step to two decimals and by day 12 you are off by roughly a paisa; the recursion compounds your rounding with the same fidelity it compounds the data. **Carry full precision and round only for display.**
4. **Judging SMA against EMA on a trending stretch.** At day 12 our SMA(5) reads 47.82 and the EMA(5) reads 47.8216 — a difference of **0.0016 taka**, which proves nothing. They separate at turns: at day 14 the SMA moved 0.02 and the EMA moved 0.1715, **a factor of 8.57**. Comparing them where they agree is comparing them where the choice is irrelevant.
5. **Reading the SMA's flat day as "nothing happened".** Day 14's SMA(5) fell 0.02 because the departing bar offset the arriving one. **That is the rectangular window, not the market.** The recursive form $SMA_t = SMA_{t-1} + (P_t - P_{t-N})/N$ makes the culprit explicit: $P_{t-N}$, the bar people forget exists.
6. **Estimating crossover lag as $(N_s - N_f)/2$.** For 5 and 10 that predicts 2.5 bars. **Our signal arrived 5 bars after the top — double.** The fast line must cross the whole accumulated gap, which was +1.09 on day 13 and was built by the very trend you rode. **The stronger the move, the later the exit**, which is exactly the wrong way round.
7. **Acting on a marginal cross.** Day 16's spread was **+0.08**, and one slightly different close on day 11 flips the signal by a session. A signal hanging on eight paisa between two smoothed lines is a coin flip wearing a formula. **Impose a separation threshold — and then be honest that the threshold is one more parameter to overfit.**
8. **Counting the gross edge and calling it an edge.** Our 14 round trips produced **+8.0% gross and −3.2% net.** Break-even round-trip cost is 0.571%, break-even per side is **0.286%**, and at 0.40% per side you are 40% over the line before you place an order. Stated as a constraint: **10 trades were affordable and 14 were taken.**
9. **Quoting cost as brokerage only.** The 0.40% per side above ignores the spread. On a name quoting 44.00 bid against 44.60 offer, half the spread is 0.30 taka, or **0.68% per side** — which alone more than doubles the round-trip cost and turns the filtered system's comfortable margin into a question.
10. **Running an average across a floor-price window.** The mean of an administered price is the mean of a policy. **Every figure in the calculation stays plausible and every one of them is meaningless**, and no software will warn you. Exclude the period explicitly, per Chapter 26, and say in writing that you did.
11. **Treating the average as support on an illiquid name.** Dynamic support requires participants transacting near the line. Below the Chapter 27 liquidity threshold price does not walk down to the 50-day — it opens 4% through it. **You cannot bounce off a level nobody is standing on.**
12. **Reading the down-cross as a short.** On the DSE it is an exit and a do-not-buy, nothing more. **Every published crossover return that counts the short leg is unavailable to you**, so halve the headline before you believe it — and notice that a long-only version earns nothing in the down leg, it merely avoids losing.
13. **Optimising the pair and reporting the result as evidence.** Twenty fast values against twenty slow values is **400 tests on one sample**, and the best of 400 draws is high by construction. Add a threshold with ten candidates and it is 4,000. **The 50/200 pair survived because the numbers are round.** Chapter 55 sets out what an honest evaluation costs.`,
      bn: `১. **EMA(20) কুড়িটি বার ব্যবহার করে ভাবা।** এটি কখনো অস্তিত্বে থাকা প্রতিটি বার ব্যবহার করে। **প্রতিটি পিরিয়ডের জন্যই EMA-র ওজনের ১৩.৫৩% তার নামমাত্র পিরিয়ডের বাইরে বসে** — আমাদের EMA(5)-এ ১৩.১৭%, যা $(2/3)^5 = 32/243$ হিসেবে গণিত। লেবেলটি একটি ডাকনাম, উইন্ডো নয়, আর একে উইন্ডো ভাবার কারণেই মানুষ ৬০ বারের ডেটায় EMA(50) চালিয়ে ফলাফলে কাজ করেন।
২. **অসাবধানে EMA সিড করে তারপর পাটিগণিতকে দোষ দেওয়া।** আমাদের EMA(5)-কে ৪৪.৮০-র SMA(5)-এর বদলে ১ দিনের ক্লোজ ৪৪.০০ দিয়ে সিড করুন আর ১২ দিন পড়ে **৪৭.৮২১৬-র বদলে ৪৭.৭৭৪৮** — কেবল সিডের কারণেই ৪.৬৮ পয়সার ফারাক। EMA(50)-তে ঐ ত্রুটির নিজের এক শতাংশের নিচে ক্ষয় হতে প্রায় ১১৫ বার লাগে। **সূত্র দেখার আগে সিড দেখুন।**
৩. **রিকার্শনের ভেতরে গোল করা।** $E_t = \\frac{1}{3}P_t + \\frac{2}{3}E_{t-1}$ নিজের আউটপুট নিজেই ফিরিয়ে নেয়। প্রতিটি ধাপ দুই দশমিকে গোল করুন আর ১২ দিন নাগাদ প্রায় এক পয়সা দূরে; রিকার্শন আপনার গোল করাকে ডেটার মতোই বিশ্বস্তভাবে চক্রবৃদ্ধি করে। **পূর্ণ নির্ভুলতা বহন করুন, কেবল প্রদর্শনের জন্য গোল করুন।**
৪. **ট্রেন্ডিং অংশে SMA-র বিপরীতে EMA বিচার করা।** ১২ দিনে আমাদের SMA(5) পড়ে ৪৭.৮২ আর EMA(5) পড়ে ৪৭.৮২১৬ — পার্থক্য **০.০০১৬ টাকা**, যা কিছুই প্রমাণ করে না। তারা আলাদা হয় মোড়ে: ১৪ দিনে SMA নড়েছে ০.০২ আর EMA নড়েছে ০.১৭১৫, **৮.৫৭ গুণ**। যেখানে তারা একমত সেখানে তুলনা করা মানে যেখানে পছন্দটি অপ্রাসঙ্গিক সেখানে তুলনা করা।
৫. **SMA-র সমতল দিনকে "কিছুই ঘটেনি" পড়া।** ১৪ দিনের SMA(5) ০.০২ নেমেছে কারণ বিদায়ী বারটি আগত বারটিকে কাটাকাটি করেছে। **এটি আয়তাকার উইন্ডো, বাজার নয়।** পুনরাবৃত্ত রূপ $SMA_t = SMA_{t-1} + (P_t - P_{t-N})/N$ অপরাধীকে স্পষ্ট করে: $P_{t-N}$, যে বারটির অস্তিত্বই মানুষ ভুলে যান।
৬. **ক্রসওভারের পশ্চাদপদতা $(N_s - N_f)/2$ ধরে অনুমান করা।** ৫ ও ১০-এর জন্য তা ২.৫ বার বলে। **আমাদের সংকেত এসেছে শীর্ষের ৫ বার পরে — দ্বিগুণ।** দ্রুত রেখাটিকে পুরো জমা ব্যবধান পাড়ি দিতে হয়, যা ১৩ দিনে ছিল +১.০৯ আর গড়েছিল ঠিক সেই ট্রেন্ডটিই যাতে আপনি চড়ছিলেন। **নড়াচড়া যত শক্তিশালী, প্রস্থান তত দেরিতে**, যা ঠিক উল্টো।
৭. **প্রান্তিক ক্রসে কাজ করা।** ১৬ দিনের ব্যবধান ছিল **+০.০৮**, আর ১১ দিনে সামান্য ভিন্ন একটি ক্লোজ সংকেতটিকে এক সেশন সরিয়ে দেয়। দুটি স্মুদ রেখার মাঝে আট পয়সায় ঝোলা সংকেত সূত্রের পোশাক পরা মুদ্রা নিক্ষেপ। **একটি বিচ্ছেদ সীমা আরোপ করুন — আর তারপর সৎভাবে স্বীকার করুন সীমাটি ওভারফিট করার আরেকটি প্যারামিটার।**
৮. **গ্রস প্রান্ত গুনে তাকেই প্রান্ত বলা।** আমাদের ১৪টি রাউন্ড ট্রিপ দিয়েছে **+৮.০% গ্রস ও −৩.২% নিট।** ব্রেক-ইভেন রাউন্ড-ট্রিপ খরচ ০.৫৭১%, প্রতি পাশে ব্রেক-ইভেন **০.২৮৬%**, আর প্রতি পাশে ০.৪০%-এ আপনি অর্ডার বসানোর আগেই সীমার ৪০% ওপরে। সীমাবদ্ধতা হিসেবে: **১০টি ট্রেড বহনযোগ্য ছিল আর ১৪টি নেওয়া হয়েছে।**
৯. **খরচ কেবল ব্রোকারেজ হিসেবে বলা।** ওপরের প্রতি পাশে ০.৪০% স্প্রেড উপেক্ষা করে। ৪৪.০০ বিড ও ৪৪.৬০ অফার কোট করা নামে অর্ধেক স্প্রেড ০.৩০ টাকা, অর্থাৎ **প্রতি পাশে ০.৬৮%** — যা একাই রাউন্ড-ট্রিপ খরচ দ্বিগুণেরও বেশি করে ও ফিল্টারযুক্ত সিস্টেমের স্বস্তিকর ব্যবধানকে প্রশ্নে পরিণত করে।
১০. **ফ্লোর-প্রাইস জানালার ওপর দিয়ে গড় চালানো।** প্রশাসিত দামের গড় একটি নীতির গড়। **গণনার প্রতিটি সংখ্যা বিশ্বাসযোগ্য থাকে আর তাদের প্রতিটিই অর্থহীন**, আর কোনো সফটওয়্যার সতর্ক করবে না। অধ্যায় ২৬ অনুযায়ী সময়কালটি স্পষ্টভাবে বাদ দিন ও লিখিতভাবে বলুন যে দিয়েছেন।
১১. **অতরল নামে গড়কে সাপোর্ট গণ্য করা।** গতিশীল সাপোর্টের জন্য রেখার কাছে লেনদেনরত অংশগ্রহণকারী দরকার। অধ্যায় ২৭-এর তারল্য সীমার নিচে দাম হেঁটে ৫০-দিনের গড় পর্যন্ত নামে না — এটি ৪% পার হয়ে খোলে। **যে স্তরে কেউ দাঁড়িয়ে নেই তা থেকে ফিরে আসা যায় না।**
১২. **ডাউন-ক্রসকে শর্ট হিসেবে পড়া।** ডিএসই-তে এটি একটি প্রস্থান ও একটি কিনবেন-না, তার বেশি নয়। **শর্ট পা গোনা প্রতিটি প্রকাশিত ক্রসওভার রিটার্ন আপনার কাছে অনুপলব্ধ**, তাই শিরোনামটি বিশ্বাস করার আগে অর্ধেক করুন — আর লক্ষ করুন কেবল-লং সংস্করণ নিম্নমুখী পায়ে কিছুই আয় করে না, নিছক হারানো এড়ায়।
১৩. **জোড়া অপটিমাইজ করে ফলাফলকে প্রমাণ হিসেবে জানানো।** কুড়িটি দ্রুত মানের বিপরীতে কুড়িটি ধীর মান মানে **একটি নমুনায় ৪০০টি পরীক্ষা**, আর ৪০০টি টানের সেরাটি গঠনগতভাবেই উঁচু। দশটি প্রার্থীসহ একটি সীমা যোগ করলে তা ৪,০০০। **৫০/২০০ জোড়া টিকে আছে কারণ সংখ্যাগুলো গোল।** অধ্যায় ৫৫ বলে একটি সৎ মূল্যায়নের খরচ কত।`,
    },

    tips: {
      en: `1. **Read the slope, not the crossing.** A rising average with price above it is a trend; a flat average with price oscillating across it is a range with a line drawn through it. The crossing on day 17 told you what the slope had been saying since day 14. **The slope is free and early; the cross is late and expensive.**
2. **Fix $\\alpha$ before you fix $N$, and know they are the same decision.** $\\alpha = 2/(N+1)$ exists only to make the two labels comparable — it equates the centres of mass at $(N-1)/2$. If you prefer to set $\\alpha$ directly, do; nothing breaks. **Just never claim the period is a lookback window.**
3. **Give every EMA $3N$ bars of warm-up before you act on it.** 99% of the weight arrives at about $2.3N$; round up. An EMA(50) wants 150 sessions. **On a recently listed DSE name, or a series broken by an excluded floor-price window, verify the bars exist rather than assuming them.**
4. **Record which seed your platform uses, in writing, next to the strategy.** Our worked case shows a 4.68 paisa divergence on day 12 from the seed alone. When your chart and your sheet disagree, this is the first suspect and it is almost never the second.
5. **Impose a separation threshold on every crossover, expressed in ATR.** Day 16's +0.08 spread is noise pretending to be a signal. Require $|S_t| > \\theta \\cdot ATR_t$. **Then write down that $\\theta$ is a parameter you chose, and never report an optimised $\\theta$ as a finding.**
6. **Compute your break-even cost per side before you compute anything else.** For the unfiltered system it is **0.286%** and you pay 0.40% — the system is dead before the first signal. **This calculation takes thirty seconds and disqualifies most crossover strategies you will ever be shown.**
7. **Judge any filter by trades removed against gross removed.** Ours cut trades from 14 to 5 while raising gross from 8.0% to 15.9%, and multiplied survivable cost per side by **5.56×**. A filter that removes trades faster than it removes gross is working; one that does not is just a smaller version of the same system.
8. **Add half the spread to both sides of every cost assumption.** Brokerage is the part people quote. On an illiquid name quoting 44.00/44.60, half the spread is another **0.68% per side** — which is larger than the brokerage and is the reason thin names cannot be traded systematically here at all.
9. **Never treat an average as support below your Chapter 27 liquidity threshold.** Dynamic support is reflexive: it needs a crowd watching and transacting. Below the threshold the name gaps through the line and the whole story collapses. **Use the average for direction only on those names, or not at all.**
10. **Flag and exclude floor-price sessions before any average is computed**, using the Chapter 26 exclusion column. Then state the exclusion in the write-up. **An average across administered prices is arithmetic performed on a regulation.**
11. **Treat every down-cross as an exit, never as a short**, and halve any published crossover return that counts a short leg. **Two-thirds of the classical literature assumes a borrow we do not have**, and importing its conclusions is how imported strategies fail here.
12. **Compare SMA and EMA at turns, never in trends.** They agreed to 0.0016 taka at day 12 and diverged 8.57-fold at day 14. **Any test you run on a trending sample will tell you the choice does not matter, and that test is worthless.**
13. **Prefer fewer, slower, longer-held signals on this exchange, as a standing bias.** Cost is high, the short side is absent, liquidity is thin, and every one of those pushes in the same direction. **The correct DSE default is a slow pair with a trend filter, traded rarely.**`,
      bn: `১. **ক্রসিং নয়, ঢাল পড়ুন।** ঊর্ধ্বমুখী গড় ও তার ওপরে দাম মানে ট্রেন্ড; সমতল গড় ও তার এপাশ-ওপাশ দোলা দাম মানে একটি রেঞ্জ যার মধ্য দিয়ে রেখা টানা। ১৭ দিনের ক্রসিং আপনাকে তাই বলেছে যা ঢাল ১৪ দিন থেকেই বলছিল। **ঢাল বিনামূল্যে ও আগে; ক্রস দেরিতে ও ব্যয়বহুল।**
২. **$N$ স্থির করার আগে $\\alpha$ স্থির করুন, আর জানুন দুটি একই সিদ্ধান্ত।** $\\alpha = 2/(N+1)$-এর অস্তিত্ব কেবল দুটি লেবেলকে তুলনীয় করতে — এটি ভরকেন্দ্র দুটিকে $(N-1)/2$-এ সমান করে। সরাসরি $\\alpha$ বসাতে চাইলে বসান; কিছুই ভাঙে না। **কেবল কখনো দাবি করবেন না পিরিয়ডটি একটি লুকব্যাক উইন্ডো।**
৩. **কাজে লাগানোর আগে প্রতিটি EMA-কে $3N$ বার ওয়ার্ম-আপ দিন।** ওজনের ৯৯% আসে প্রায় $2.3N$-এ; ওপরে গোল করুন। EMA(50) চায় ১৫০ সেশন। **সম্প্রতি তালিকাভুক্ত ডিএসই নামে, বা বাদ দেওয়া ফ্লোর-প্রাইস জানালায় ছিন্ন সিরিজে, বারগুলো আছে ধরে না নিয়ে যাচাই করুন।**
৪. **আপনার প্ল্যাটফর্ম কোন সিড ব্যবহার করে তা কৌশলের পাশে লিখে রাখুন।** আমাদের উদাহরণ দেখায় কেবল সিড থেকেই ১২ দিনে ৪.৬৮ পয়সার বিচ্যুতি। চার্ট ও শিট না মিললে এটিই প্রথম সন্দেহভাজন আর প্রায় কখনোই দ্বিতীয়টি নয়।
৫. **প্রতিটি ক্রসওভারে ATR-এ প্রকাশিত একটি বিচ্ছেদ সীমা আরোপ করুন।** ১৬ দিনের +০.০৮ ব্যবধান সংকেতের ভান করা নয়েজ। $|S_t| > \\theta \\cdot ATR_t$ দাবি করুন। **তারপর লিখে রাখুন $\\theta$ আপনার বেছে নেওয়া একটি প্যারামিটার, আর কখনো অপটিমাইজ করা $\\theta$-কে আবিষ্কার হিসেবে জানাবেন না।**
৬. **অন্য কিছু গণনার আগে প্রতি পাশে আপনার ব্রেক-ইভেন খরচ গণনা করুন।** ফিল্টারহীন সিস্টেমে তা **০.২৮৬%** আর আপনি দেন ০.৪০% — প্রথম সংকেতের আগেই সিস্টেমটি মৃত। **এই গণনায় ত্রিশ সেকেন্ড লাগে আর আপনাকে দেখানো বেশিরভাগ ক্রসওভার কৌশলকেই অযোগ্য করে।**
৭. **যেকোনো ফিল্টার বিচার করুন সরানো ট্রেড বনাম সরানো গ্রস দিয়ে।** আমাদেরটি ট্রেড ১৪ থেকে ৫-এ নামিয়েছে অথচ গ্রস ৮.০% থেকে ১৫.৯%-এ তুলেছে, আর প্রতি পাশে সহনীয় খরচ **৫.৫৬ গুণ** করেছে। যে ফিল্টার গ্রসের চেয়ে দ্রুত ট্রেড সরায় তা কাজ করছে; যেটি করে না তা কেবল একই সিস্টেমের ছোট সংস্করণ।
৮. **প্রতিটি খরচের অনুমানের দুই পাশে অর্ধেক স্প্রেড যোগ করুন।** ব্রোকারেজ সেই অংশ যা মানুষ উদ্ধৃত করেন। ৪৪.০০/৪৪.৬০ কোট করা অতরল নামে অর্ধেক স্প্রেড আরও **প্রতি পাশে ০.৬৮%** — যা ব্রোকারেজের চেয়ে বড় আর এজন্যই এখানে পাতলা নাম মোটেই ব্যবস্থাবদ্ধভাবে ট্রেড করা যায় না।
৯. **অধ্যায় ২৭-এর তারল্য সীমার নিচে কখনো গড়কে সাপোর্ট গণ্য করবেন না।** গতিশীল সাপোর্ট প্রতিফলনমূলক: এর জন্য দেখতে ও লেনদেন করতে থাকা একটি ভিড় দরকার। সীমার নিচে নামটি রেখা পেরিয়ে গ্যাপ করে আর গোটা গল্পটি ভেঙে পড়ে। **ঐ নামগুলোতে গড়টি কেবল দিকের জন্য ব্যবহার করুন, নয়তো একেবারেই নয়।**
১০. **কোনো গড় গণনার আগে ফ্লোর-প্রাইসের সেশনগুলো চিহ্নিত ও বাদ দিন**, অধ্যায় ২৬-এর বর্জন কলাম ব্যবহার করে। তারপর লেখায় বর্জনটি উল্লেখ করুন। **প্রশাসিত দামের ওপর গড় মানে একটি নিয়মের ওপর করা পাটিগণিত।**
১১. **প্রতিটি ডাউন-ক্রসকে প্রস্থান গণ্য করুন, কখনো শর্ট নয়**, আর শর্ট পা গোনা যেকোনো প্রকাশিত ক্রসওভার রিটার্ন অর্ধেক করুন। **ধ্রুপদী সাহিত্যের দুই-তৃতীয়াংশ এমন একটি ধার ধরে নেয় যা আমাদের নেই**, আর তাদের উপসংহার আমদানি করাই আমদানি করা কৌশলের এখানে ব্যর্থ হওয়ার কারণ।
১২. **SMA ও EMA তুলনা করুন মোড়ে, কখনো ট্রেন্ডে নয়।** ১২ দিনে তারা ০.০০১৬ টাকা পর্যন্ত একমত আর ১৪ দিনে ৮.৫৭ গুণ আলাদা। **ট্রেন্ডিং নমুনায় চালানো যেকোনো পরীক্ষা আপনাকে বলবে পছন্দটি ব্যাপার নয়, আর ঐ পরীক্ষাটি মূল্যহীন।**
১৩. **এই এক্সচেঞ্জে স্থায়ী পক্ষপাত হিসেবে কম, ধীর, দীর্ঘ-ধারণকৃত সংকেত পছন্দ করুন।** খরচ উঁচু, শর্ট সাইড অনুপস্থিত, তারল্য পাতলা, আর এদের প্রত্যেকটিই একই দিকে ঠেলে। **সঠিক ডিএসই ডিফল্ট হলো ট্রেন্ড ফিল্টারসহ একটি ধীর জোড়া, খুব কম ট্রেড করা।**`,
    },

    exercises: {
      en: `1. Reproduce the §34.6 table by hand from the twenty closes. Confirm SMA(5) at day 12 = 47.82, SMA(10) at day 12 = 46.67, and EMA(5) at day 12 = 47.8216. Where does your first disagreement appear, and is it a rounding error or a formula error?
2. Recompute the SMA(5) column using the recursive form $SMA_t = SMA_{t-1} + (P_t - P_{t-5})/5$. Identify every session where the line moved *against* the day's price change, and explain each one by naming the departing bar.
3. Seed the EMA(5) three ways — with the SMA(5) of 44.80, with the day-1 close of 44.00, and with the day-5 close of 45.40. Tabulate all three through day 20. How many bars until the three agree to within one paisa?
4. Derive $\\alpha = 2/(N+1)$ from the equality of centres of mass. Then compute the centre of mass for $\\alpha = 0.94$-style decay ($\\lambda = 0.94$, $\\alpha = 0.06$) and state the implied $N$.
5. Compute $(1-\\alpha)^N$ for $N = 5, 10, 20, 50, 200$ under $\\alpha = 2/(N+1)$. Confirm the sequence converges to $e^{-2}$ and state, in one sentence, why this makes the word "period" misleading.
6. Extend the crossover test to a 20/50 pair on any DSE name with at least 300 clean sessions. Count the round trips over one year. Compute total gross, total cost at 0.40% per side, and net. Was the gross edge positive and the net negative?
7. For the same name, compute the break-even cost per side and $n_{\\max}$. How many trades could the strategy afford, and how many did it take?
8. Apply a trend filter — slope of the slow average above a threshold you choose *before* looking at results. Report trades removed, gross removed, and the new break-even per side. Did the filter remove trades faster than it removed gross?
9. Now optimise: test 10 fast values against 10 slow values on the same sample and report the best pair's return. Then run that pair on a held-out year. By how much did the out-of-sample result fall short, and what does that tell you about the first number?
10. Take a DSE name that traded at a floor price for a stretch. Compute an SMA(50) across the boundary. Plot it. Write two sentences on what that line is measuring, and then rerun it with the period excluded.
11. Find an illiquid name — below your Chapter 27 threshold — and count how many times in a year price closed within 0.5% of its 50-day average. Compare with a liquid name. What does this say about MA support?
12. Recompute the day-15 round trip from §34.6 adding half the bid-ask spread to each side, using the actual quoted spread on a name of your choosing. At what spread does the net return of 1.236% go to zero?
13. Take every down-cross your 20/50 test produced and reclassify it as an exit rather than a short. Recompute the equity curve. By what fraction did the reported return fall?`,
      bn: `১. কুড়িটি ক্লোজ থেকে হাতে §৩৪.৬-এর সারণি পুনরুৎপাদন করুন। নিশ্চিত করুন ১২ দিনে SMA(5) = ৪৭.৮২, ১২ দিনে SMA(10) = ৪৬.৬৭, আর ১২ দিনে EMA(5) = ৪৭.৮২১৬। আপনার প্রথম অমিল কোথায় দেখা দেয়, আর তা কি গোল করার ভুল না সূত্রের ভুল?
২. পুনরাবৃত্ত রূপ $SMA_t = SMA_{t-1} + (P_t - P_{t-5})/5$ ব্যবহার করে SMA(5) কলামটি আবার গণনা করুন। যে প্রতিটি সেশনে রেখাটি দিনের দাম পরিবর্তনের *বিপরীতে* নড়েছে তা শনাক্ত করুন, আর বিদায়ী বারটির নাম করে প্রতিটি ব্যাখ্যা করুন।
৩. EMA(5) তিনভাবে সিড করুন — ৪৪.৮০-র SMA(5) দিয়ে, ১ দিনের ক্লোজ ৪৪.০০ দিয়ে, আর ৫ দিনের ক্লোজ ৪৫.৪০ দিয়ে। ২০ দিন পর্যন্ত তিনটিরই সারণি করুন। কত বার পরে তিনটি এক পয়সার মধ্যে মিলে যায়?
৪. ভরকেন্দ্রের সমতা থেকে $\\alpha = 2/(N+1)$ নিষ্কাশন করুন। তারপর $\\lambda = 0.94$ ধাঁচের ক্ষয়ে ($\\alpha = 0.06$) ভরকেন্দ্র গণনা করুন ও অন্তর্নিহিত $N$ বলুন।
৫. $\\alpha = 2/(N+1)$-এ $N = 5, 10, 20, 50, 200$-এর জন্য $(1-\\alpha)^N$ গণনা করুন। নিশ্চিত করুন ক্রমটি $e^{-2}$-তে অভিসারী, আর এক বাক্যে বলুন কেন এটি "পিরিয়ড" শব্দটিকে বিভ্রান্তিকর করে।
৬. অন্তত ৩০০টি পরিষ্কার সেশনসহ যেকোনো ডিএসই নামে ২০/৫০ জোড়ায় ক্রসওভার পরীক্ষা বিস্তৃত করুন। এক বছরে রাউন্ড ট্রিপ গুনুন। মোট গ্রস, প্রতি পাশে ০.৪০%-এ মোট খরচ, ও নিট গণনা করুন। গ্রস প্রান্ত কি ধনাত্মক আর নিট ঋণাত্মক ছিল?
৭. একই নামের জন্য প্রতি পাশে ব্রেক-ইভেন খরচ ও $n_{\\max}$ গণনা করুন। কৌশলটি কতগুলো ট্রেড বহন করতে পারত, আর কতগুলো নিয়েছে?
৮. একটি ট্রেন্ড ফিল্টার প্রয়োগ করুন — ফলাফল দেখার *আগে* বেছে নেওয়া একটি সীমার ওপরে ধীর গড়ের ঢাল। সরানো ট্রেড, সরানো গ্রস, ও নতুন প্রতি-পাশ ব্রেক-ইভেন জানান। ফিল্টার কি গ্রসের চেয়ে দ্রুত ট্রেড সরিয়েছে?
৯. এবার অপটিমাইজ করুন: একই নমুনায় ১০টি দ্রুত মানের বিপরীতে ১০টি ধীর মান পরীক্ষা করুন ও সেরা জোড়ার রিটার্ন জানান। তারপর ঐ জোড়াটি একটি সরিয়ে রাখা বছরে চালান। আউট-অব-স্যাম্পল ফলাফল কতটা কম হলো, আর তা প্রথম সংখ্যাটি সম্পর্কে আপনাকে কী বলে?
১০. এমন একটি ডিএসই নাম নিন যা কিছুকাল ফ্লোর প্রাইসে লেনদেন হয়েছে। সীমানা পেরিয়ে একটি SMA(50) গণনা করুন। আঁকুন। ঐ রেখাটি কী মাপছে তা নিয়ে দুই বাক্য লিখুন, তারপর সময়কালটি বাদ দিয়ে আবার চালান।
১১. একটি অতরল নাম খুঁজুন — আপনার অধ্যায় ২৭ সীমার নিচে — আর গুনুন এক বছরে কতবার দাম তার ৫০-দিনের গড়ের ০.৫%-এর মধ্যে বন্ধ হয়েছে। একটি তরল নামের সঙ্গে তুলনা করুন। এটি MA সাপোর্ট সম্পর্কে কী বলে?
১২. আপনার বেছে নেওয়া একটি নামের প্রকৃত কোট করা স্প্রেড ব্যবহার করে §৩৪.৬-এর ১৫ ধাপের রাউন্ড ট্রিপ প্রতি পাশে অর্ধেক বিড-আস্ক স্প্রেড যোগ করে আবার গণনা করুন। কোন স্প্রেডে ১.২৩৬% নিট রিটার্ন শূন্য হয়ে যায়?
১৩. আপনার ২০/৫০ পরীক্ষায় পাওয়া প্রতিটি ডাউন-ক্রসকে শর্ট নয়, প্রস্থান হিসেবে পুনঃশ্রেণিবদ্ধ করুন। ইকুইটি কার্ভ আবার গণনা করুন। জানানো রিটার্ন কত ভগ্নাংশ কমল?`,
    },

    summary: {
      en: `- **An indicator is a transformation of price and contains no information the price does not.** It cannot, because it is a function of that series and nothing else. What it supplies is legibility, which is genuinely useful and much smaller than most traders believe they are buying. **Apply that test to RSI in Chapter 36 and to everything after.**
- **Every average sits on one dial: responsiveness against noise.** Smooth more and you see the trend later; smooth less and you see moves that are not there. **No parameter escapes the curve — it only chooses your position on it.**
- **The EMA smoothing constant $\\alpha = 2/(N+1)$ is a calibration, not a law.** It equates the EMA's centre of mass $(1-\\alpha)/\\alpha$ to the SMA's $(N-1)/2$. At $N = 5$ both equal **2.0 bars exactly**, which is the only reason "5" means the same thing on both lines.
- **The EMA has no start date: the unrolled sum runs to infinity, and $(1-\\alpha)^N \\to e^{-2} \\approx 13.53\\%$ of the weight sits beyond the nominal period for every $N$.** Our EMA(5) carries **13.17%** there, computed as $32/243$. **The period label is a nickname, not a lookback window.**
- **Warm-up is real and quantified:** 99% of the weight arrives at $m = \\ln(0.01)/\\ln(1-\\alpha)$, which is **12 bars for our EMA(5)** and about $2.3N$ in general — **use $3N$**, so an EMA(50) wants 150 sessions. Seeding error decays as $\\varepsilon_0(1-\\alpha)^k$: seed with 44.00 instead of 44.80 and day 12 reads **47.7748 against 47.8216, a 4.68 paisa gap from the seed alone.**
- **Lag is $(N-1)/2$ bars and it is the price of smoothing, charged in full.** SMA(200) reports where price was 99.5 sessions ago. On RUPALIPOLY price topped at 48.90 on day 12 and **both averages topped on day 13 — one bar late on flawless data with no noise at all.**
- **The EMA reports turns far more loudly than the SMA, and only at turns.** At day 12 the two agree to **0.0016 taka**; at day 14 the SMA moved 0.02 and the EMA moved 0.1715, a factor of **8.57**. **Never judge SMA against EMA on a trending stretch — that is exactly where the choice does not matter.**
- **Crossover lag is not $(N_s - N_f)/2$.** That predicts 2.5 bars for a 5/10 pair; **the actual signal came 5 bars after the top**, because the fast line must cross the whole accumulated gap of +1.09 built by the trend itself. **The stronger the move you rode, the later you are told it ended.** Give-back from top to exit was **7.77%**.
- **The winning trade kept 1.236% net out of a 10.633% move — a capture ratio of 19.15%.** Entry 44.20, exit 45.10, gross 2.036%, cost 0.80%. **A crossover is a description of a trend, not a way to trade one.**
- **A crossover system can have a positive gross edge and a negative net return, and the deciding variable is the trade count.** Fourteen round trips gave **+8.0% gross, 11.2% cost, −3.2% net.** Break-even per side is **0.286%** against 0.40% paid; stated as a constraint, **10 trades were affordable and 14 were taken.**
- **The fix is a trend filter, and it works by deleting trades rather than improving them.** Five round trips gave **+15.9% gross, 4.0% cost, +11.9% net** — a swing of **15.1 percentage points** and a break-even per side of **1.59%**, which is **5.56× more cost tolerance.** The trap is parameter optimisation: 20 fast values against 20 slow is **400 tests on one sample**, and **50/200 survived because the numbers are round.**
- **Four DSE realities come before any of the above:** a window spanning a floor-price period averages a policy and warns you of nothing; a close printed at the circuit limit is where the band ended, not where supply met demand; below the Chapter 27 liquidity threshold price gaps through the average rather than testing it, so **the MA is never a level**; and the down-cross is an exit, not a short — **halve any published return that counts the short leg.**
- **Chapter 35 inherits all of it.** MACD is two EMAs built on the step-5 recursion, their difference — the same spread $S_t$ you crossed here — and a third EMA of that difference. **The warm-up, the seeding error and the lag carry across unchanged, and MACD inherits each of them three times over.**`,
      bn: `- **ইন্ডিকেটর দামের একটি রূপান্তর আর দামের কাছে নেই এমন কোনো তথ্য এতে নেই।** থাকতে পারে না, কারণ এটি ঐ সিরিজের একটি ফাংশন, আর কিছুই নয়। এটি সরবরাহ করে পাঠযোগ্যতা, যা সত্যিই কাজের ও বেশিরভাগ ট্রেডার যা কিনছেন ভাবেন তার চেয়ে অনেক ছোট। **অধ্যায় ৩৬-এর RSI ও তার পরের সবকিছুতে এই পরীক্ষা প্রয়োগ করুন।**
- **প্রতিটি গড় একটি ডায়ালে বসে: সাড়াশীলতা বনাম নয়েজ।** বেশি স্মুদ করলে ট্রেন্ড দেরিতে দেখবেন; কম করলে যেসব নড়াচড়া নেই সেগুলো দেখবেন। **কোনো প্যারামিটার বক্ররেখা থেকে পালায় না — কেবল তাতে আপনার অবস্থান বাছে।**
- **EMA স্মুদিং ধ্রুবক $\\alpha = 2/(N+1)$ একটি ক্যালিব্রেশন, নিয়ম নয়।** এটি EMA-র ভরকেন্দ্র $(1-\\alpha)/\\alpha$-কে SMA-র $(N-1)/2$-এর সমান করে। $N = 5$-এ দুটিই ঠিক **২.০ বার**, আর এটিই একমাত্র কারণ যে "৫" দুটি রেখাতেই একই জিনিস বোঝায়।
- **EMA-র কোনো শুরুর তারিখ নেই: খোলা যোগফল অসীম পর্যন্ত চলে, আর প্রতিটি $N$-এর জন্য নামমাত্র পিরিয়ডের বাইরে $(1-\\alpha)^N \\to e^{-2} \\approx 13.53\\%$ ওজন বসে।** আমাদের EMA(5) সেখানে বহন করে **১৩.১৭%**, যা $32/243$ হিসেবে গণিত। **পিরিয়ড লেবেলটি একটি ডাকনাম, লুকব্যাক উইন্ডো নয়।**
- **ওয়ার্ম-আপ বাস্তব ও পরিমাপিত:** ওজনের ৯৯% আসে $m = \\ln(0.01)/\\ln(1-\\alpha)$-এ, যা **আমাদের EMA(5)-এ ১২ বার** ও সাধারণভাবে প্রায় $2.3N$ — **$3N$ নিন**, তাই EMA(50) চায় ১৫০ সেশন। সিডিং ত্রুটি $\\varepsilon_0(1-\\alpha)^k$ হারে ক্ষয় হয়: ৪৪.৮০-র বদলে ৪৪.০০ দিয়ে সিড করুন আর ১২ দিন পড়ে **৪৭.৮২১৬-র বিপরীতে ৪৭.৭৭৪৮, কেবল সিড থেকেই ৪.৬৮ পয়সার ফারাক।**
- **পশ্চাদপদতা $(N-1)/2$ বার আর তা স্মুদিংয়ের মূল্য, পুরোটাই আদায় করা।** SMA(200) জানায় দাম ৯৯.৫ সেশন আগে কোথায় ছিল। RUPALIPOLY-তে দাম শীর্ষে ওঠে ১২ দিনে ৪৮.৯০-তে আর **দুটি গড়ই শীর্ষে ওঠে ১৩ দিনে — কোনো নয়েজবিহীন নিখুঁত ডেটায় এক বার দেরিতে।**
- **EMA মোড়ের খবর SMA-র চেয়ে অনেক জোরে দেয়, আর কেবল মোড়েই।** ১২ দিনে দুটি **০.০০১৬ টাকা** পর্যন্ত একমত; ১৪ দিনে SMA নড়েছে ০.০২ আর EMA নড়েছে ০.১৭১৫, অর্থাৎ **৮.৫৭ গুণ**। **কখনো ট্রেন্ডিং অংশে SMA-র বিপরীতে EMA বিচার করবেন না — ঠিক সেখানেই পছন্দটি কোনো ব্যাপার নয়।**
- **ক্রসওভারের পশ্চাদপদতা $(N_s - N_f)/2$ নয়।** ৫/১০ জোড়ায় তা ২.৫ বার বলে; **প্রকৃত সংকেত এসেছে শীর্ষের ৫ বার পরে**, কারণ দ্রুত রেখাটিকে ট্রেন্ডের গড়া +১.০৯-এর পুরো জমা ব্যবধান পাড়ি দিতে হয়। **যত শক্তিশালী নড়াচড়ায় চড়েছেন, তত দেরিতে জানবেন তা শেষ।** শীর্ষ থেকে প্রস্থান পর্যন্ত ফেরত দেওয়া **৭.৭৭%**।
- **বিজয়ী ট্রেডটি ১০.৬৩৩% নড়াচড়া থেকে নিট রেখেছে ১.২৩৬% — ক্যাপচার অনুপাত ১৯.১৫%।** প্রবেশ ৪৪.২০, প্রস্থান ৪৫.১০, গ্রস ২.০৩৬%, খরচ ০.৮০%। **ক্রসওভার একটি ট্রেন্ডের বর্ণনা, তা ট্রেড করার উপায় নয়।**
- **ক্রসওভার সিস্টেমের ধনাত্মক গ্রস প্রান্ত ও ঋণাত্মক নিট রিটার্ন থাকতে পারে, আর নির্ণায়ক চলকটি ট্রেডের সংখ্যা।** চৌদ্দটি রাউন্ড ট্রিপ দিয়েছে **+৮.০% গ্রস, ১১.২% খরচ, −৩.২% নিট।** প্রতি পাশে ব্রেক-ইভেন **০.২৮৬%**, দেওয়া হয় ০.৪০%; সীমাবদ্ধতা হিসেবে, **১০টি ট্রেড বহনযোগ্য ছিল আর ১৪টি নেওয়া হয়েছে।**
- **সমাধান একটি ট্রেন্ড ফিল্টার, আর তা কাজ করে ট্রেড উন্নত করে নয়, ট্রেড মুছে।** পাঁচটি রাউন্ড ট্রিপ দিয়েছে **+১৫.৯% গ্রস, ৪.০% খরচ, +১১.৯% নিট** — **১৫.১ শতাংশ বিন্দুর** দোল আর প্রতি পাশে **১.৫৯%** ব্রেক-ইভেন, যা **৫.৫৬ গুণ বেশি খরচ সহনশীলতা।** ফাঁদটি প্যারামিটার অপটিমাইজেশন: ২০টি দ্রুত মানের বিপরীতে ২০টি ধীর মানে **একটি নমুনায় ৪০০টি পরীক্ষা**, আর **৫০/২০০ টিকে আছে কারণ সংখ্যাগুলো গোল।**
- **চারটি ডিএসই বাস্তবতা ওপরের সবকিছুর আগে আসে:** ফ্লোর-প্রাইস সময়কাল ছোঁয়া উইন্ডো একটি নীতির গড় করে ও কিছুই সতর্ক করে না; সার্কিট সীমায় ছাপা ক্লোজ যেখানে ব্যান্ড শেষ হয়েছে, চাহিদা সরবরাহের সঙ্গে যেখানে মিলেছে তা নয়; অধ্যায় ২৭-এর তারল্য সীমার নিচে দাম গড়টি পরীক্ষা না করে তার ভেতর দিয়ে গ্যাপ করে, তাই **MA কখনোই একটি স্তর নয়**; আর ডাউন-ক্রস একটি প্রস্থান, শর্ট নয় — **শর্ট পা গোনা যেকোনো প্রকাশিত রিটার্ন অর্ধেক করুন।**
- **অধ্যায় ৩৫ এর সবটাই উত্তরাধিকারে পায়।** MACD হলো ধাপ ৫-এর রিকার্শনে গড়া দুটি EMA, তাদের পার্থক্য — এখানে আপনি যে ব্যবধান $S_t$ অতিক্রম করলেন সেটিই — আর ঐ পার্থক্যের তৃতীয় একটি EMA। **ওয়ার্ম-আপ, সিডিং ত্রুটি ও পশ্চাদপদতা অপরিবর্তিতভাবে প্রযোজ্য, আর MACD এদের প্রতিটি তিনবার করে উত্তরাধিকারে পায়।**`,
    },
  },

  interview: [
    {
      q: {
        en: 'Why does the exponential moving average use two divided by N plus one, and what would break if you chose something else?',
        bn: 'এক্সপোনেনশিয়াল মুভিং অ্যাভারেজ কেন দুই ভাগ N যোগ এক ব্যবহার করে, আর অন্য কিছু বাছলে কী ভাঙত?',
      },
      a: {
        en: 'Nothing would break, which is the honest answer, and that is exactly why the convention is worth understanding rather than memorising. The smoothing constant exists to set how much weight the newest close carries. The choice of two over N plus one is made so that the exponentially weighted average has the same centre of mass as a simple moving average of the same nominal length. The centre of mass of an exponential average is one minus alpha over alpha, and the centre of mass of an N-period simple average is N minus one over two. Set those equal and solve and you get alpha equals two over N plus one, uniquely. On the worked example with N of five, alpha is one third, so the centre of mass is two point zero bars, and N minus one over two is also two point zero bars — identical. That equality is the entire reason a chart can plot an exponential twenty against a simple twenty and let you discuss them in the same sentence, because they lag comparably. If you set alpha directly instead, nothing at all breaks. Risk systems do this routinely — RiskMetrics used a decay of zero point nine four on daily data, which is an alpha of zero point zero six and an implied N of about thirty-two. The number is still a perfectly good exponential average. What you lose is the label, and the label was only ever a convenience for comparison. Where I would push back on a candidate is if they described the period as a lookback window, because it is not one — the sum runs to infinity and about thirteen and a half percent of the weight sits beyond the nominal period for every N.',
        bn: 'কিছুই ভাঙত না, আর এটিই সৎ উত্তর, আর ঠিক সেজন্যই প্রথাটি মুখস্থ না করে বোঝার মতো। স্মুদিং ধ্রুবকের অস্তিত্ব ঠিক করতে যে নতুনতম ক্লোজ কত ওজন বহন করবে। দুই ভাগ N যোগ এক বাছা হয়েছে যাতে এক্সপোনেনশিয়ালি ভারিত গড়ের ভরকেন্দ্র একই নামমাত্র দৈর্ঘ্যের সিম্পল মুভিং অ্যাভারেজের ভরকেন্দ্রের সমান হয়। এক্সপোনেনশিয়াল গড়ের ভরকেন্দ্র এক বিয়োগ আলফা ভাগ আলফা, আর N-পিরিয়ড সিম্পল গড়ের ভরকেন্দ্র N বিয়োগ এক ভাগ দুই। এদের সমান বসিয়ে সমাধান করলে অনন্যভাবে পাওয়া যায় আলফা সমান দুই ভাগ N যোগ এক। N সমান পাঁচের উদাহরণে আলফা এক-তৃতীয়াংশ, তাই ভরকেন্দ্র দুই দশমিক শূন্য বার, আর N বিয়োগ এক ভাগ দুই-ও দুই দশমিক শূন্য বার — অভিন্ন। ঐ সমতাই একমাত্র কারণ যে একটি চার্ট এক্সপোনেনশিয়াল কুড়ির বিপরীতে সিম্পল কুড়ি আঁকতে পারে আর আপনি দুটিকে একই বাক্যে আলোচনা করতে পারেন, কারণ তাদের পশ্চাদপদতা তুলনীয়। বদলে সরাসরি আলফা বসালে কিছুই ভাঙে না। ঝুঁকি ব্যবস্থাগুলো নিয়মিতই তা করে — RiskMetrics দৈনিক ডেটায় শূন্য দশমিক নয় চার ক্ষয় ব্যবহার করত, যা শূন্য দশমিক শূন্য ছয় আলফা ও প্রায় বত্রিশের অন্তর্নিহিত N। সংখ্যাটি তবুও পুরোপুরি ভালো একটি এক্সপোনেনশিয়াল গড়। আপনি হারান লেবেলটি, আর লেবেলটি কেবল তুলনার সুবিধা ছাড়া কখনো কিছু ছিল না। প্রার্থীর সঙ্গে আমি দ্বিমত করব যদি তিনি পিরিয়ডকে লুকব্যাক উইন্ডো বলেন, কারণ তা নয় — যোগফল অসীম পর্যন্ত চলে আর প্রতিটি N-এর জন্য প্রায় সাড়ে তেরো শতাংশ ওজন নামমাত্র পিরিয়ডের বাইরে বসে।',
      },
    },
    {
      q: {
        en: 'Your spreadsheet and your broker\'s chart print different values for the same EMA on the same data. What is going on?',
        bn: 'একই ডেটায় একই EMA-র জন্য আপনার স্প্রেডশিট ও আপনার ব্রোকারের চার্ট ভিন্ন মান ছাপে। কী ঘটছে?',
      },
      a: {
        en: 'Almost certainly the seed, and I would check that before I checked a single formula. A true exponential moving average has no start date — unroll the recursion and the sum runs to infinity, so every bar that ever existed carries some weight. Software has to start somewhere, so it invents a beginning: some vendors seed with the first simple moving average of length N, some with the first close, some with something else entirely, and almost none of them document it. The error does not vanish; it decays. If your seed is wrong by epsilon nought, then after k updates the error is epsilon nought times one minus alpha to the power k. On the worked example, seeding with the day-one close of forty-four flat instead of the correct simple average of forty-four point eight gives an initial error of minus zero point eight. By day twelve, seven updates later, two-thirds to the seventh is zero point zero five eight five, so the error is minus zero point zero four six eight and the exponential average reads forty-seven point seven seven four eight where the properly seeded one reads forty-seven point eight two one six. Four point six eight paisa of disagreement from nothing but the starting choice. On a longer average it is worse and slower — an exponential fifty has one minus alpha of forty-nine over fifty-one, so the same relative error needs about a hundred and fifteen bars to fall below one percent of itself. The practical rules I would take from this are three. Give every exponential average about three N bars of warm-up before acting on it. Record which seed your platform uses, in writing, next to the strategy. And do not chase a small discrepancy through your formulas until you have ruled the seed out, because that is where it almost always is.',
        bn: 'প্রায় নিশ্চিতভাবেই সিড, আর আমি একটিও সূত্র দেখার আগে তা দেখব। প্রকৃত এক্সপোনেনশিয়াল মুভিং অ্যাভারেজের কোনো শুরুর তারিখ নেই — রিকার্শন খুললে যোগফল অসীম পর্যন্ত চলে, তাই কখনো অস্তিত্বে থাকা প্রতিটি বার কিছু ওজন বহন করে। সফটওয়্যারকে কোথাও না কোথাও শুরু করতে হয়, তাই এটি একটি শুরু উদ্ভাবন করে: কোনো বিক্রেতা N দৈর্ঘ্যের প্রথম সিম্পল মুভিং অ্যাভারেজ দিয়ে সিড করে, কেউ প্রথম ক্লোজ দিয়ে, কেউ সম্পূর্ণ অন্য কিছু দিয়ে, আর প্রায় কেউই তা নথিবদ্ধ করে না। ত্রুটিটি মিলিয়ে যায় না; ক্ষয় হয়। সিড এপসাইলন শূন্য পরিমাণে ভুল হলে k হালনাগাদের পর ত্রুটি এপসাইলন শূন্য গুণ এক বিয়োগ আলফা-র k ঘাত। উদাহরণে, চুয়াল্লিশ দশমিক আটের সঠিক সিম্পল গড়ের বদলে এক দিনের ক্লোজ চুয়াল্লিশ দিয়ে সিড করলে প্রাথমিক ত্রুটি মাইনাস শূন্য দশমিক আট। বারো দিন নাগাদ, সাতটি হালনাগাদ পরে, দুই-তৃতীয়াংশের সপ্তম ঘাত শূন্য দশমিক শূন্য পাঁচ আট পাঁচ, তাই ত্রুটি মাইনাস শূন্য দশমিক শূন্য চার ছয় আট আর এক্সপোনেনশিয়াল গড় পড়ে সাতচল্লিশ দশমিক সাত সাত চার আট, যেখানে সঠিকভাবে সিড করাটি পড়ে সাতচল্লিশ দশমিক আট দুই এক ছয়। কেবল শুরুর পছন্দ থেকেই চার দশমিক ছয় আট পয়সার দ্বিমত। দীর্ঘতর গড়ে তা আরও খারাপ ও ধীর — এক্সপোনেনশিয়াল পঞ্চাশে এক বিয়োগ আলফা হলো ঊনপঞ্চাশ ভাগ একান্ন, তাই একই আপেক্ষিক ত্রুটির নিজের এক শতাংশের নিচে নামতে প্রায় একশো পনেরো বার লাগে। এ থেকে আমি তিনটি ব্যবহারিক নিয়ম নেব। কাজে লাগানোর আগে প্রতিটি এক্সপোনেনশিয়াল গড়কে প্রায় তিন N বার ওয়ার্ম-আপ দিন। আপনার প্ল্যাটফর্ম কোন সিড ব্যবহার করে তা কৌশলের পাশে লিখে রাখুন। আর সিড বাদ না দেওয়া পর্যন্ত সূত্রের ভেতর ছোট অসঙ্গতির পিছু নেবেন না, কারণ প্রায় সবসময় ওখানেই তা থাকে।',
      },
    },
    {
      q: {
        en: 'How late is a moving average crossover, and can you quantify it?',
        bn: 'একটি মুভিং অ্যাভারেজ ক্রসওভার কতটা দেরিতে, আর আপনি তা পরিমাপ করতে পারেন?',
      },
      a: {
        en: 'Yes, and the textbook quantification is wrong in a way that matters. The lag of a single N-period average is its centre of mass, N minus one over two bars, so a five-period average lags two bars, a fifty lags twenty-four and a half, and a two hundred lags ninety-nine and a half — meaning a two-hundred-day average is telling you, on average, where price was a hundred sessions ago. The usual estimate for a crossover is the difference of the two centres, N slow minus N fast over two, which for a five-ten pair predicts two and a half bars. On my worked case the actual signal came five bars after the top — exactly double. The reason is structural rather than a fluke. The difference of centres measures how far apart the two lines\' effective timestamps sit, but a crossover requires the fast line to travel the entire existing gap between them and then cross. On day thirteen that gap was one taka nine paisa, and that gap was built by the very trend you had been riding. So the crossover lag is not a constant; it grows with the strength of the preceding move. That is precisely backwards from what you want. The better the trend you caught, the later you are told it ended. In money, price topped at forty-eight ninety and the exit fired at forty-five ten, which is three taka eighty, or seven point seven seven percent of the position handed back — and that was on constructed data with no gaps, no circuit locks and no slippage. Widen to a twenty-fifty pair, which is what people actually trade, and the give-back scales with it. My conclusion from this is not that crossovers are useless. It is that a crossover is a description of a trend, not a way to enter and exit one.',
        bn: 'হ্যাঁ, আর পাঠ্যবইয়ের পরিমাপটি এমনভাবে ভুল যা গুরুত্বপূর্ণ। একটি একক N-পিরিয়ড গড়ের পশ্চাদপদতা তার ভরকেন্দ্র, N বিয়োগ এক ভাগ দুই বার, তাই পাঁচ-পিরিয়ড গড় দুই বার পিছিয়ে, পঞ্চাশ চব্বিশ দশমিক পাঁচ, আর দুইশো নিরানব্বই দশমিক পাঁচ — অর্থাৎ দুইশো দিনের গড় আপনাকে গড়ে বলছে দাম একশো সেশন আগে কোথায় ছিল। ক্রসওভারের প্রচলিত অনুমান হলো দুটি কেন্দ্রের পার্থক্য, N ধীর বিয়োগ N দ্রুত ভাগ দুই, যা পাঁচ-দশ জোড়ায় আড়াই বার বলে। আমার উদাহরণে প্রকৃত সংকেত এসেছে শীর্ষের পাঁচ বার পরে — ঠিক দ্বিগুণ। কারণটি কাকতালীয় নয়, কাঠামোগত। কেন্দ্রের পার্থক্য মাপে দুটি রেখার কার্যকর সময়চিহ্ন কত দূরে বসে, কিন্তু ক্রসওভারের জন্য দ্রুত রেখাটিকে তাদের মধ্যেকার পুরো বিদ্যমান ব্যবধান পাড়ি দিয়ে তারপর অতিক্রম করতে হয়। তেরো দিনে ঐ ব্যবধান ছিল এক টাকা নয় পয়সা, আর ঐ ব্যবধান গড়েছিল ঠিক সেই ট্রেন্ডটিই যাতে আপনি চড়ছিলেন। তাই ক্রসওভারের পশ্চাদপদতা ধ্রুবক নয়; এটি পূর্ববর্তী নড়াচড়ার শক্তির সঙ্গে বাড়ে। আপনি যা চান তার ঠিক উল্টো। যত ভালো ট্রেন্ড ধরেছেন, তত দেরিতে জানবেন তা শেষ হয়েছে। টাকায়, দাম শীর্ষে উঠেছিল আটচল্লিশ নব্বইতে আর প্রস্থান জ্বলেছে পঁয়তাল্লিশ দশে, অর্থাৎ তিন টাকা আশি, বা পজিশনের সাত দশমিক সাত সাত শতাংশ ফেরত — আর তা ছিল নির্মিত ডেটায়, কোনো গ্যাপ, সার্কিট লক বা স্লিপেজ ছাড়া। কুড়ি-পঞ্চাশ জোড়ায় চওড়া করুন, যা মানুষ আসলে ট্রেড করেন, আর ফেরত দেওয়াও সেই অনুপাতে বাড়ে। এ থেকে আমার উপসংহার এই নয় যে ক্রসওভার অকেজো। উপসংহার হলো ক্রসওভার একটি ট্রেন্ডের বর্ণনা, তাতে ঢোকা-বেরোনোর উপায় নয়।',
      },
    },
    {
      q: {
        en: 'A crossover strategy shows a positive gross return in your backtest. Why might you still refuse to trade it?',
        bn: 'আপনার ব্যাকটেস্টে একটি ক্রসওভার কৌশল ধনাত্মক গ্রস রিটার্ন দেখায়। তবু আপনি কেন এটি ট্রেড করতে অস্বীকার করতে পারেন?',
      },
      a: {
        en: 'Because gross return and net return can have opposite signs, and on our exchange they usually do. Take the illustrative case from the chapter. A twenty-fifty crossover on a mid-cap produced fourteen round trips in a year: four in genuine trends averaging plus six and a half percent gross, and ten in chop averaging minus one point eight percent gross. That nets out to plus eight percent gross, which looks like an edge. Now charge cost at forty basis points a side, so eighty a round trip. Fourteen round trips is eleven point two percent, and the strategy returns minus three point two percent net. The useful way to state this is not as a subtraction but as a constraint. Average gross per trade is eight over fourteen, or zero point five seven one percent, so break-even round-trip cost is zero point five seven one and break-even per side is zero point two eight six percent. At forty basis points a side you are forty percent over the line before you place a single order. Or equivalently: the strategy could afford ten round trips on its gross edge and it took fourteen. The extra four are not bad luck — they are the whipsaws the system exists to generate, because in a range the fast average oscillates across the slow one repeatedly and every oscillation is a signal. And the forty basis points is generous, because it is brokerage only. On a thin name quoting forty-four bid against forty-four sixty offered, half the spread is another sixty-eight basis points a side, which more than doubles the cost again. So my refusal is not aesthetic. It is that I can compute the break-even cost per side in thirty seconds, and it disqualifies most crossover systems I will ever be shown before I look at a single equity curve.',
        bn: 'কারণ গ্রস রিটার্ন ও নিট রিটার্নের চিহ্ন বিপরীত হতে পারে, আর আমাদের এক্সচেঞ্জে সাধারণত তাই হয়। অধ্যায়ের দৃষ্টান্তমূলক ক্ষেত্রটি নিন। একটি মিড-ক্যাপে কুড়ি-পঞ্চাশ ক্রসওভার বছরে চৌদ্দটি রাউন্ড ট্রিপ দিয়েছে: চারটি প্রকৃত ট্রেন্ডে গড়ে যোগ সাড়ে ছয় শতাংশ গ্রস, আর দশটি চপে গড়ে বিয়োগ এক দশমিক আট শতাংশ গ্রস। তা মিলে দাঁড়ায় যোগ আট শতাংশ গ্রস, যা প্রান্তের মতো দেখায়। এবার প্রতি পাশে চল্লিশ বেসিস পয়েন্ট খরচ ধরুন, অর্থাৎ রাউন্ড ট্রিপে আশি। চৌদ্দটি রাউন্ড ট্রিপ মানে এগারো দশমিক দুই শতাংশ, আর কৌশলটি দেয় বিয়োগ তিন দশমিক দুই শতাংশ নিট। এটি বলার কাজের উপায় বিয়োগ নয়, একটি সীমাবদ্ধতা। প্রতি ট্রেডে গড় গ্রস আট ভাগ চৌদ্দ, অর্থাৎ শূন্য দশমিক পাঁচ সাত এক শতাংশ, তাই ব্রেক-ইভেন রাউন্ড-ট্রিপ খরচ শূন্য দশমিক পাঁচ সাত এক আর প্রতি পাশে ব্রেক-ইভেন শূন্য দশমিক দুই আট ছয় শতাংশ। প্রতি পাশে চল্লিশ বেসিস পয়েন্টে আপনি একটিও অর্ডার বসানোর আগেই সীমার চল্লিশ শতাংশ ওপরে। অথবা সমতুল্যভাবে: কৌশলটি তার গ্রস প্রান্তে দশটি রাউন্ড ট্রিপ বহন করতে পারত আর নিয়েছে চৌদ্দটি। অতিরিক্ত চারটি দুর্ভাগ্য নয় — ওগুলোই সেই হুইপস যা তৈরি করতেই সিস্টেমটির অস্তিত্ব, কারণ রেঞ্জে দ্রুত গড় বারবার ধীরটির এপাশ-ওপাশ করে আর প্রতিটি দোলই একটি সংকেত। আর চল্লিশ বেসিস পয়েন্ট উদার, কারণ তা কেবল ব্রোকারেজ। চুয়াল্লিশ বিড ও চুয়াল্লিশ ষাট অফার কোট করা পাতলা নামে অর্ধেক স্প্রেড আরও আটষট্টি বেসিস পয়েন্ট প্রতি পাশে, যা খরচ আবার দ্বিগুণেরও বেশি করে। তাই আমার অস্বীকার নান্দনিক নয়। কারণটি হলো আমি ত্রিশ সেকেন্ডে প্রতি পাশে ব্রেক-ইভেন খরচ গণনা করতে পারি, আর তা একটিও ইকুইটি কার্ভ দেখার আগেই আমাকে দেখানো বেশিরভাগ ক্রসওভার সিস্টেমকে অযোগ্য করে।',
      },
    },
    {
      q: {
        en: 'You add a trend filter and the backtest improves substantially. Why is that not yet evidence?',
        bn: 'আপনি একটি ট্রেন্ড ফিল্টার যোগ করলেন ও ব্যাকটেস্ট উল্লেখযোগ্যভাবে উন্নত হলো। এটি কেন এখনো প্রমাণ নয়?',
      },
      a: {
        en: 'Because improvement on the sample you designed the filter against is what you would expect even if the filter had no merit at all. Let me first say what the filter genuinely does, because the mechanism is sound. On the illustrative fourteen trades, suppose the filter removes eight of the ten chop trades and costs me one of the four trend trades. Gross goes from plus eight percent to plus fifteen point nine, cost goes from eleven point two to four, and the year swings from minus three point two to plus eleven point nine — fifteen point one percentage points. Break-even per side moves from zero point two eight six percent to one point five nine percent, which is five and a half times more cost tolerance. And notice what did the work: the filter did not improve a single entry. It deleted trades that were never worth taking. That mechanism is real and I believe in it. The problem is evidential. If I searched for a slope threshold that produced those numbers, I ran a search on one sample, and the best result of a search is high by construction. The same objection applies with much more force to the pair itself. Twenty candidate fast values against twenty candidate slow values is four hundred tests on one history, and the maximum of four hundred draws from a noisy distribution looks excellent whether or not anything is there. Add a separation threshold with ten candidates and it is four thousand. That is also, incidentally, why the fifty-two hundred pair is not magic — it is a convention that survived because the numbers are round. So what would make it evidence? Fixing the parameters and the cost assumption in writing before looking at any result, testing on data held out from the design, and walk-forward rather than a single split. Until then the improvement is a description of my sample, not a property of the market.',
        bn: 'কারণ যে নমুনার বিপরীতে আপনি ফিল্টারটি নকশা করেছেন সেই নমুনায় উন্নতি হওয়াটাই প্রত্যাশিত, ফিল্টারটির কোনো গুণ না থাকলেও। প্রথমে বলি ফিল্টারটি আসলে কী করে, কারণ কৌশলটি সঠিক। দৃষ্টান্তমূলক চৌদ্দটি ট্রেডে ধরুন ফিল্টার দশটি চপ ট্রেডের আটটি সরায় আর চারটি ট্রেন্ড ট্রেডের একটি কেড়ে নেয়। গ্রস যোগ আট শতাংশ থেকে যোগ পনেরো দশমিক নয়-এ যায়, খরচ এগারো দশমিক দুই থেকে চারে, আর বছরটি বিয়োগ তিন দশমিক দুই থেকে যোগ এগারো দশমিক নয়-এ দোলে — পনেরো দশমিক এক শতাংশ বিন্দু। প্রতি পাশে ব্রেক-ইভেন শূন্য দশমিক দুই আট ছয় শতাংশ থেকে এক দশমিক পাঁচ নয় শতাংশে যায়, যা সাড়ে পাঁচ গুণ বেশি খরচ সহনশীলতা। আর লক্ষ করুন কাজটি করল কী: ফিল্টার একটিও প্রবেশ উন্নত করেনি। এটি এমন ট্রেড মুছেছে যেগুলো কখনোই নেওয়ার মতো ছিল না। ঐ কৌশলটি বাস্তব আর আমি তাতে বিশ্বাস করি। সমস্যাটি প্রমাণের। ঐ সংখ্যাগুলো তৈরি করে এমন একটি ঢালের সীমা যদি আমি খুঁজে থাকি, তবে আমি একটি নমুনায় একটি অনুসন্ধান চালিয়েছি, আর অনুসন্ধানের সেরা ফলাফল গঠনগতভাবেই উঁচু। একই আপত্তি জোড়াটির ক্ষেত্রে আরও অনেক জোরে প্রযোজ্য। কুড়িটি প্রার্থী দ্রুত মানের বিপরীতে কুড়িটি প্রার্থী ধীর মান মানে একটি ইতিহাসে চারশো পরীক্ষা, আর একটি নয়েজময় বণ্টন থেকে চারশো টানের সর্বোচ্চটি চমৎকার দেখায় সেখানে কিছু থাক বা না থাক। দশটি প্রার্থীসহ একটি বিচ্ছেদ সীমা যোগ করলে তা চার হাজার। প্রসঙ্গত এজন্যই পঞ্চাশ-দুইশো জোড়া জাদু নয় — এটি একটি প্রথা যা টিকে আছে কারণ সংখ্যাগুলো গোল। তাহলে কী একে প্রমাণ করত? কোনো ফলাফল দেখার আগেই লিখিতভাবে প্যারামিটার ও খরচের অনুমান স্থির করা, নকশা থেকে সরিয়ে রাখা ডেটায় পরীক্ষা, আর একটিমাত্র ভাগ নয়, ওয়াক-ফরওয়ার্ড। ততক্ষণ পর্যন্ত উন্নতিটি আমার নমুনার বর্ণনা, বাজারের কোনো ধর্ম নয়।',
      },
    },
    {
      q: {
        en: 'What specifically breaks a moving average on the Dhaka Stock Exchange that would not break it elsewhere?',
        bn: 'ঢাকা স্টক এক্সচেঞ্জে বিশেষভাবে কী মুভিং অ্যাভারেজ ভেঙে দেয় যা অন্যত্র ভাঙত না?',
      },
      a: {
        en: 'Four things, and I would rank them by how quietly they fail, because the quiet failures are the dangerous ones. The first is the floor-price era. Where an administrative floor held a share from trading lower, the average across those months is not an average of market prices — it is an average of a policy. What makes this dangerous is that nothing looks wrong. Every number is plausible, the line is beautifully smooth, and no software will warn you. So the discipline is to flag and exclude those sessions before any average is computed, and to say in the write-up that you did. The second is circuit limits. A close printed at the daily band is where the exchange stopped the move, not where supply met demand, and it enters the average as though it were an agreed price. The third is liquidity, and this one kills the dynamic-support story entirely. Support at a moving average is reflexive — it works because enough participants are watching that line and transacting near it. On a name with a handful of trades a day and a wide spread, price does not walk down to the fifty-day and bounce; it opens four percent below it. You cannot bounce off a level nobody is standing on. So below my liquidity threshold I use the average for direction only, or not at all. The fourth is the absence of a reliable short side. A down-cross here is an exit and a do-not-buy, and nothing more. That matters enormously for how you read the literature, because the published crossover returns you have seen count both legs of the trade. A long-only version earns nothing in the down leg — it merely avoids losing — so halve the headline figure before you believe it. And I would add the cost point, which is not unique to Dhaka but bites hardest here: brokerage plus levies plus half the spread makes any strategy whose profitability depends on trading frequently structurally disadvantaged before the first signal fires.',
        bn: 'চারটি জিনিস, আর আমি সেগুলোকে কত নীরবে ব্যর্থ হয় সেই ক্রমে সাজাব, কারণ নীরব ব্যর্থতাগুলোই বিপজ্জনক। প্রথমটি ফ্লোর-প্রাইসের যুগ। যেখানে প্রশাসনিক মেঝে একটি শেয়ারকে নিচে লেনদেন করতে দেয়নি, ঐ মাসগুলোর গড় বাজারদামের গড় নয় — এটি একটি নীতির গড়। একে বিপজ্জনক করে এই যে কিছুই ভুল দেখায় না। প্রতিটি সংখ্যা বিশ্বাসযোগ্য, রেখাটি চমৎকার মসৃণ, আর কোনো সফটওয়্যার সতর্ক করবে না। তাই শৃঙ্খলা হলো কোনো গড় গণনার আগে ঐ সেশনগুলো চিহ্নিত ও বাদ দেওয়া, আর লেখায় বলা যে দিয়েছেন। দ্বিতীয়টি সার্কিট সীমা। দৈনিক ব্যান্ডে ছাপা একটি ক্লোজ যেখানে এক্সচেঞ্জ চলাচল থামিয়েছে, চাহিদা সরবরাহের সঙ্গে যেখানে মিলেছে তা নয়, আর তা গড়ে ঢোকে যেন একটি সম্মত দাম। তৃতীয়টি তারল্য, আর এটি গতিশীল সাপোর্টের গল্পটি পুরোপুরি মেরে ফেলে। মুভিং অ্যাভারেজে সাপোর্ট প্রতিফলনমূলক — এটি কাজ করে কারণ যথেষ্ট অংশগ্রহণকারী ঐ রেখা দেখছেন ও তার কাছে লেনদেন করছেন। দিনে হাতেগোনা কয়েকটি ট্রেড ও চওড়া স্প্রেডের নামে দাম হেঁটে পঞ্চাশ-দিনের গড় পর্যন্ত নেমে ফিরে আসে না; এটি চার শতাংশ নিচে খোলে। যে স্তরে কেউ দাঁড়িয়ে নেই তা থেকে ফিরে আসা যায় না। তাই আমার তারল্য সীমার নিচে আমি গড়টি কেবল দিকের জন্য ব্যবহার করি, নয়তো একেবারেই নয়। চতুর্থটি নির্ভরযোগ্য শর্ট সাইডের অনুপস্থিতি। এখানে ডাউন-ক্রস একটি প্রস্থান ও একটি কিনবেন-না, তার বেশি কিছু নয়। সাহিত্য কীভাবে পড়বেন তার জন্য এটি বিপুলভাবে গুরুত্বপূর্ণ, কারণ আপনার দেখা প্রকাশিত ক্রসওভার রিটার্নগুলো ট্রেডের দুটি পা-ই গোনে। কেবল-লং সংস্করণ নিম্নমুখী পায়ে কিছুই আয় করে না — নিছক হারানো এড়ায় — তাই শিরোনামের সংখ্যাটি বিশ্বাস করার আগে অর্ধেক করুন। আর আমি খরচের কথাটি যোগ করব, যা ঢাকার একচেটিয়া নয় কিন্তু এখানেই সবচেয়ে জোরে কামড়ায়: ব্রোকারেজ যোগ লেভি যোগ অর্ধেক স্প্রেড মিলে যে কোনো কৌশল যার লাভজনকতা ঘন ঘন ট্রেডের ওপর নির্ভর করে তা প্রথম সংকেত জ্বলার আগেই কাঠামোগতভাবে পিছিয়ে থাকে।',
      },
    },
  ],

  quiz: [
    {
      q: {
        en: 'An indicator such as a moving average:',
        bn: 'মুভিং অ্যাভারেজের মতো একটি ইন্ডিকেটর:',
      },
      options: {
        en: [
          'Adds information the price series does not contain',
          'Is a transformation of price and contains no new information',
          'Predicts future prices when correctly tuned',
          'Replaces the need to read price structure',
        ],
        bn: [
          'দামের সিরিজে নেই এমন তথ্য যোগ করে',
          'দামের একটি রূপান্তর এবং এতে নতুন কোনো তথ্য নেই',
          'সঠিকভাবে টিউন করলে ভবিষ্যৎ দাম ভবিষ্যদ্বাণী করে',
          'দামের কাঠামো পড়ার প্রয়োজন দূর করে',
        ],
      },
      answer: 1,
    },
    {
      q: {
        en: 'For an EMA(5) under the standard convention, the smoothing constant is:',
        bn: 'প্রচলিত প্রথায় EMA(5)-এর স্মুদিং ধ্রুবক:',
      },
      options: {
        en: ['0.20', '0.25', '0.3333', '0.50'],
        bn: ['০.২০', '০.২৫', '০.৩৩৩৩', '০.৫০'],
      },
      answer: 2,
    },
    {
      q: {
        en: 'The convention $\\alpha = 2/(N+1)$ exists so that the EMA:',
        bn: '$\\alpha = 2/(N+1)$ প্রথাটি আছে যাতে EMA:',
      },
      options: {
        en: [
          'Reaches steady state in exactly N bars',
          'Has the same centre of mass as an SMA of the same N',
          'Always leads price rather than lagging it',
          'Sums its weights to exactly N',
        ],
        bn: [
          'ঠিক N বারে স্থিতিশীল অবস্থায় পৌঁছায়',
          'একই N-এর SMA-র সমান ভরকেন্দ্র পায়',
          'সর্বদা দামের পিছনে না থেকে আগে থাকে',
          'তার ওজনের যোগফল ঠিক N হয়',
        ],
      },
      answer: 1,
    },
    {
      q: {
        en: 'Under $\\alpha = 2/(N+1)$, the share of an EMA\'s weight lying beyond bar N converges to approximately:',
        bn: '$\\alpha = 2/(N+1)$-এ EMA-র ওজনের যে অংশ বার N-এর বাইরে থাকে তা অভিসারী হয় প্রায়:',
      },
      options: {
        en: ['0%', '5.00%', '13.53%', '36.79%'],
        bn: ['০%', '৫.০০%', '১৩.৫৩%', '৩৬.৭৯%'],
      },
      answer: 2,
    },
    {
      q: {
        en: 'The lag of an SMA(50), in bars, is:',
        bn: 'SMA(50)-এর পশ্চাদপদতা, বারে:',
      },
      options: {
        en: ['12.5', '24.5', '50.0', '99.5'],
        bn: ['১২.৫', '২৪.৫', '৫০.০', '৯৯.৫'],
      },
      answer: 1,
    },
    {
      q: {
        en: 'In the worked example, price topped on day 12 and the SMA(5)/SMA(10) sell signal fired on:',
        bn: 'উদাহরণে দাম শীর্ষে উঠেছে ১২ দিনে আর SMA(5)/SMA(10) বিক্রয় সংকেত জ্বলেছে:',
      },
      options: {
        en: ['Day 13', 'Day 14', 'Day 17', 'Day 20'],
        bn: ['১৩ দিন', '১৪ দিন', '১৭ দিন', '২০ দিন'],
      },
      answer: 2,
    },
    {
      q: {
        en: 'On day 14 the SMA(5) moved 0.02 and the EMA(5) moved 0.1715. This shows that:',
        bn: '১৪ দিনে SMA(5) নড়েছে ০.০২ আর EMA(5) নড়েছে ০.১৭১৫। এটি দেখায় যে:',
      },
      options: {
        en: [
          'The EMA is more accurate than the SMA',
          'The EMA registers turns far more strongly, at the cost of more false signals',
          'The SMA is broken and should be discarded',
          'The two averages use different data',
        ],
        bn: [
          'EMA SMA-র চেয়ে বেশি নির্ভুল',
          'EMA মোড় অনেক জোরে নথিভুক্ত করে, বেশি ভুয়া সংকেতের বিনিময়ে',
          'SMA নষ্ট এবং তা বাতিল করা উচিত',
          'দুটি গড় ভিন্ন ডেটা ব্যবহার করে',
        ],
      },
      answer: 1,
    },
    {
      q: {
        en: 'With 14 round trips producing +8.0% total gross, the break-even cost per side is:',
        bn: '১৪টি রাউন্ড ট্রিপে মোট +৮.০% গ্রস হলে প্রতি পাশে ব্রেক-ইভেন খরচ:',
      },
      options: {
        en: ['0.286%', '0.571%', '0.800%', '1.140%'],
        bn: ['০.২৮৬%', '০.৫৭১%', '০.৮০০%', '১.১৪০%'],
      },
      answer: 0,
    },
    {
      q: {
        en: 'The trend filter improved the year from −3.2% to +11.9% primarily because it:',
        bn: 'ট্রেন্ড ফিল্টার বছরটিকে −৩.২% থেকে +১১.৯%-এ উন্নত করেছে মূলত কারণ এটি:',
      },
      options: {
        en: [
          'Improved the entry price on every trade',
          'Removed trades faster than it removed gross return',
          'Increased the number of trend trades taken',
          'Reduced the per-side brokerage rate',
        ],
        bn: [
          'প্রতিটি ট্রেডের প্রবেশমূল্য উন্নত করেছে',
          'গ্রস রিটার্ন সরানোর চেয়ে দ্রুত ট্রেড সরিয়েছে',
          'নেওয়া ট্রেন্ড ট্রেডের সংখ্যা বাড়িয়েছে',
          'প্রতি পাশে ব্রোকারেজের হার কমিয়েছে',
        ],
      },
      answer: 1,
    },
    {
      q: {
        en: 'On the DSE, a moving-average down-cross should normally be read as:',
        bn: 'ডিএসই-তে মুভিং অ্যাভারেজের ডাউন-ক্রস সাধারণত পড়া উচিত:',
      },
      options: {
        en: [
          'A short entry with a stop above the average',
          'An exit and a do-not-buy signal, because there is no reliable short side',
          'Proof that the floor price has been breached',
          'A guarantee that the trend has ended',
        ],
        bn: [
          'গড়ের ওপরে স্টপসহ একটি শর্ট প্রবেশ',
          'একটি প্রস্থান ও কিনবেন-না সংকেত, কারণ নির্ভরযোগ্য শর্ট সাইড নেই',
          'ফ্লোর প্রাইস ভেঙেছে তার প্রমাণ',
          'ট্রেন্ড শেষ হয়েছে তার নিশ্চয়তা',
        ],
      },
      answer: 1,
    },
  ],
};
