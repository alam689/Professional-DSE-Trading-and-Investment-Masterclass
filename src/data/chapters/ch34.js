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
  },
};
