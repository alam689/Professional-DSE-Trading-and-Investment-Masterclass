/**
 * Chapter 38 — Bollinger Bands
 * Part III, Technical Analysis. Builds on Ch 34 (the SMA centre line), Ch 30
 * (why a level is a band and why bands are not levels), Ch 35–37 (MACD, RSI,
 * Stochastic — the oscillator family this chapter is NOT a member of),
 * Ch 2 (circuit limits), Ch 6 (floor price), Ch 5 (ask what moved the number).
 * Forward-references Ch 39 (ATR as the rival volatility measure) and Ch 49
 * (position sizing off volatility).
 */

export default {
  n: 38,
  tools: [],

  objectives: {
    en: [
      'Define Bollinger Bands mechanically as a moving average plus and minus a multiple of the rolling standard deviation of closes, and state exactly what that standard deviation is measuring.',
      'Choose the population denominator $n$ rather than the sample denominator $n-1$, and quantify what the wrong choice does to the band edges and to the bandwidth reading.',
      'Compute %b and bandwidth by hand, and use bandwidth percentile — not bandwidth level — to identify a squeeze.',
      'Explain why a touch of the upper band is not an overbought signal, and why the bands are not support and resistance in the Chapter 30 sense.',
      'State how DSE circuit limits, floor-price flatlines and thin liquidity corrupt a standard deviation computed on closes, and contrast band width with ATR as a volatility measure.',
    ],
    bn: [
      'বলিঞ্জার ব্যান্ডকে যান্ত্রিকভাবে সংজ্ঞায়িত করা — একটি মুভিং অ্যাভারেজ যোগ-বিয়োগ ক্লোজিং দামের চলমান স্ট্যান্ডার্ড ডেভিয়েশনের গুণিতক — এবং ঐ স্ট্যান্ডার্ড ডেভিয়েশন ঠিক কী মাপছে তা বলা।',
      'স্যাম্পল হর $n-1$-এর বদলে পপুলেশন হর $n$ বেছে নেওয়া, এবং ভুল পছন্দটি ব্যান্ডের প্রান্ত ও ব্যান্ডউইডথ পাঠে কী করে তা পরিমাণে প্রকাশ করা।',
      'হাতে %b ও ব্যান্ডউইডথ গণনা করা, এবং স্কুইজ শনাক্ত করতে ব্যান্ডউইডথের মাত্রা নয় — তার পার্সেন্টাইল ব্যবহার করা।',
      'ব্যাখ্যা করা কেন উপরের ব্যান্ড ছোঁয়া কোনো অতিক্রীত সংকেত নয়, এবং কেন ব্যান্ডগুলো অধ্যায় ৩০-এর অর্থে সাপোর্ট ও রেজিস্ট্যান্স নয়।',
      'বলা কীভাবে ডিএসই-র সার্কিট সীমা, ফ্লোর-প্রাইসের সমতল রেখা ও পাতলা তারল্য ক্লোজিং দামে গণনা করা স্ট্যান্ডার্ড ডেভিয়েশনকে নষ্ট করে, এবং ভোলাটিলিটির পরিমাপ হিসেবে ব্যান্ডের প্রস্থকে ATR-এর সঙ্গে তুলনা করা।',
    ],
  },

  blocks: {
    theory: {
      en: `Chapters 35, 36 and 37 gave you three oscillators. **Bollinger Bands are not a fourth one, and the single most common way to misuse them is to treat them as though they were.**

MACD, RSI and the Stochastic all answer a question about momentum: how fast, how stretched, how far through the recent range. **Bollinger Bands answer a completely different question, and it is a question about dispersion.** They ask: relative to how much this stock has been wandering lately, how unusual is today's close?

That is the whole idea. Everything else is bookkeeping.

### The construction, and what each piece is doing

Take the last $n$ closes, usually twenty. Compute their simple moving average — the same SMA from **Chapter 34**, with the same lag and the same equal weighting. That is the **centre line**. Then compute the standard deviation of those same twenty closes about that same mean, and place a band at the mean plus $k$ standard deviations and another at the mean minus $k$, with $k$ usually two.

$$\\text{Mid} = \\bar{P}, \\qquad \\text{Upper} = \\bar{P} + k\\sigma, \\qquad \\text{Lower} = \\bar{P} - k\\sigma$$

**Three things follow immediately from that definition, and each one contradicts something you will be taught.**

**First, the bands are computed from the closes and only from the closes.** The high of the day does not enter. The low does not enter. An overnight gap does not enter except through its effect on the close. **This is the fundamental difference between band width and the ATR of Chapter 39**, which is built from true range and therefore sees gaps, sees intraday sweeps, and sees the full excursion of the session. Two stocks can print identical band widths while one of them is quietly trading a two-taka intraday range every day and the other is not moving at all inside the session. **If you want to know how much room the stock gives you inside a day, band width is the wrong instrument.**

**Second, the bands move because $\\sigma$ moves, and $\\sigma$ is an output, not a setting.** Beginners speak of "the bands widening" as though something is being done to them. Nothing is being done to them. **The bands widen because the last twenty closes have become more scattered about their own mean.** That is the entire event. When you see the bands flare open, the correct internal sentence is not "volatility is rising" — that is a restatement — but "the dispersion of the last twenty closes has increased, and I should find out which closes did it."

**Third, and this is the one that costs money: the bands are self-referential.** The mean is computed from the same twenty numbers whose scatter you are measuring, and the newest close is one of those twenty. **A large move today widens the bands today.** The band is not an independent yardstick against which price is measured; it is a yardstick made partly out of the thing being measured. This is why price can sit *outside* the upper band for many consecutive sessions without any contradiction: each new high close drags the mean up and inflates $\\sigma$, and the band runs along underneath the price rather than capping it.

### What the standard deviation actually is here

$$\\sigma = \\sqrt{\\frac{1}{n}\\sum_{i=1}^{n}\\left(P_i - \\bar{P}\\right)^2}$$

Read that carefully. It is the root-mean-square distance of each close from the average close. **It is not a forecast, it is not a probability, and it is not a risk measure in any decision-theoretic sense.** It is a descriptive summary of how spread out twenty numbers were.

The temptation — and the entire mystique of the indicator — is to bolt a normal distribution onto it and conclude that 95.45% of closes lie within two standard deviations. **Do not do this.** Three separate objections, and they compound:

**1. The window is twenty observations, and the mean is estimated from the same twenty.** Even under perfect normality, the fraction of a sample lying within two *sample* standard deviations of its own *sample* mean is not 95.45%. It is smaller, and mechanically so. On a twenty-observation window the empirical fraction typically lands between 85% and 90%. **In the worked example in §38.3, eighteen of twenty closes fall inside the bands — exactly 90%, not 95.45%.**

**2. Financial returns are not normal.** They are leptokurtic: too many observations clustered near the middle, too few in the shoulders, and far too many in the extreme tails. The practical consequence is asymmetric. **The bands contain slightly more of the ordinary days than a normal distribution predicts, and dramatically fewer of the disasters.** A four-sigma day is supposed to happen once in about sixteen thousand sessions — roughly once in sixty-four years. On equity markets it happens every few years. **The band tells you nothing about the size of the move that breaks it.**

**3. Closes are serially correlated, especially here.** The normal-distribution argument silently assumes the twenty observations are independent draws. They are not. Consecutive closes of the same stock are strongly autocorrelated, and on the DSE, where a name can drift in one direction on tiny volume for a week, the effective number of independent observations in a twenty-day window may be five or six. **A standard deviation computed on serially correlated data understates dispersion in a trend and overstates it in a chop**, which is precisely backwards from what you want.

**None of this makes the indicator useless.** It makes the probabilistic interpretation useless. The bands remain a good *relative* statement — this close is unusual compared with the last twenty closes of this stock — and that statement is worth having. It is the *absolute* statement, the one with a percentage attached, that you must throw away.

### The denominator, and why this is not pedantry

There are two standard deviations in every statistics textbook:

$$\\sigma_{\\text{pop}} = \\sqrt{\\frac{\\sum(P_i - \\bar{P})^2}{n}} \\qquad\\text{versus}\\qquad s_{\\text{samp}} = \\sqrt{\\frac{\\sum(P_i - \\bar{P})^2}{n-1}}$$

**Bollinger Bands use the population denominator $n$.** Excel's \`STDEV\`, \`STDEV.S\` and most default statistical routines use the sample denominator $n-1$. **If you build the indicator yourself and reach for the default function, you will silently build a different indicator.**

How much different? The ratio of the two is $\\sqrt{n/(n-1)}$. At $n = 20$ that is $\\sqrt{20/19} = 1.0260$. **Your bands come out 2.60% wider than everyone else's, in both directions, every single day.**

Now ask whether 2.60% matters. On the worked example it moves the upper band from 62.6657 to 62.6804 — under one and a half paisa. **On a single day it is nothing. That is exactly why it is dangerous.** Consider what the error does to each downstream reading:

- **%b** is a ratio of distances inside the band, and a uniformly wider band pushes every %b reading toward 0.5. Extremes get compressed. **A close that should read 1.0303 — genuinely outside the band — reads 1.0043 instead**, which most screens round to "at the band" rather than "beyond it."
- **Bandwidth** is inflated by exactly 2.60% on every observation, so the *level* is wrong but comparisons within your own data are still internally consistent — **until you compare against a published bandwidth, a broker's chart, or a threshold you read in a book, at which point the comparison is meaningless.**
- **The squeeze test** is the one that actually breaks. A squeeze is a bandwidth in the low percentile of its own history, and if your bandwidth is uniformly scaled, the percentile ranking is unchanged. **But if you use a fixed threshold — "bandwidth below 2%" is a common one — a uniform 2.60% inflation shifts which days trigger.** The rule fires later, and sometimes not at all.

**The correct answer is to use the population denominator because that is the definition, and to say out loud which one you used.** The wrong answer is to decide it does not matter. The reason it does not matter today is that you are looking at one number; the reason it matters is that you will build a screen on it.

There is also a philosophical point worth ten seconds. The sample denominator exists to correct the bias in estimating an unknown population variance from a sample. **But you are not estimating anything.** The twenty closes are not a sample drawn from some larger population of closes; they are the entire object of interest. You want to describe the scatter of those twenty numbers, full stop. **The population denominator is not merely conventional here — it is conceptually correct.**

### %b: the reading that makes the indicator usable

Price relative to bands is awkward to compare across stocks and across time. %b fixes it:

$$\\%b = \\frac{P - \\text{Lower}}{\\text{Upper} - \\text{Lower}}$$

The scale is intuitive. **0.5 is the centre line. 1.0 is exactly the upper band. 0.0 is exactly the lower band. Above 1.0 means outside the upper band; below 0.0 means outside the lower band.** Unlike RSI or the Stochastic, **%b is unbounded** — it can print 2.36, and in the worked example it does.

That unboundedness is the whole point and the reason %b is more honest than the oscillators of Chapters 36 and 37. RSI saturates: at 88 and at 96 it is telling you "high" in both cases, and it cannot tell you how much higher. **%b keeps counting.** A reading of 2.36 says the close is more than a full band-width outside the upper band, which is genuinely different from 1.02, and no bounded oscillator can say that.

### Bandwidth and the squeeze

$$\\text{Bandwidth} = \\frac{\\text{Upper} - \\text{Lower}}{\\text{Mid}} = \\frac{2k\\sigma}{\\bar{P}}$$

Dividing by the mid makes it a percentage of price, so a 62-taka stock and a 620-taka stock are comparable. **This normalisation is the same move PPO makes on MACD in Chapter 35, for the same reason.**

The **squeeze** is the observation that dispersion is mean-reverting even when price is not. Periods of very low bandwidth tend to be followed by periods of higher bandwidth, and the transition is often a directional move. This is the most genuinely useful thing the indicator does, and the reason is not mystical: **a market that has stopped disagreeing about price has stopped generating new information, and the resolution of that stalemate is an event.**

**But the squeeze must be defined in percentile terms, never in absolute terms.** A bandwidth of 1.82% is a violent squeeze on a name that normally runs 6.42% and a completely ordinary reading on a large, sleepy bank. There is no universal threshold. **Rank the current bandwidth against that same stock's own last six months, and call it a squeeze below roughly the tenth percentile.**

And the squeeze says nothing about direction. **This is where most people lose money on it.** A squeeze is a statement that a move is likely; it is silent on which way. Worse, the first break out of a squeeze is frequently a head-fake in the wrong direction before the real move. **Trading the squeeze means having a directional thesis from somewhere else and using the squeeze for timing — not the reverse.**

### Why the bands are NOT support and resistance

Chapter 30 built a level out of positioned inventory: people who bought at 48, people who missed at 48, stops parked above 48. **That level exists in the order book. Someone is standing there.**

**Nobody is standing at the Bollinger Band.** The upper band is an arithmetic consequence of the last twenty closes. It moves every session. It moved this morning because a close dropped out of the back of the window. **There is no resting inventory at 62.6657, because 62.6657 did not exist as a number until the market computed it, and tomorrow it will be a different number.**

This has three practical consequences, and each one is a rule people break constantly:

**1. "Price touched the upper band, so it is overbought" is wrong, and it is wrong in the most expensive possible way.** In a genuine trend, price *walks the band*: it rides along the upper band for many consecutive sessions while the band itself is being dragged higher by the same closes. **In the worked example, price closes above the upper band on day 21 at %b of 2.3562, and on day 22 it is still outside at 1.3344 after the band has already widened by 87% to catch up.** Selling the first band touch there means selling the first day of the move. Bollinger himself has said this repeatedly and it is still the majority reading in every tip group on the market. **A tag of the upper band is evidence of strength, not of exhaustion.**

**2. Mean reversion to the centre line is a tendency, not a rule, and it is conditional on regime.** Inside a range, price oscillating between the bands and reverting to the mid is a real and tradeable pattern. Inside a trend, the same behaviour disappears entirely. **The indicator does not tell you which regime you are in — bandwidth does, partially, and price structure from Chapters 30 through 33 does, better.** Using the bands for mean reversion without first establishing that you are in a range is not a strategy; it is a bet that today is not a trend day.

**3. The bands cannot be used to set a stop, and this is the most direct link back to Chapter 30.** A stop belongs at the price where your thesis is falsified. A moving arithmetic construct is not a thesis. **If you place your stop at the lower band, then the band widening — which happens precisely when the market gets more dangerous — moves your stop further away at exactly the moment you should be reducing risk.** The centre line is defensible as a trailing reference because it is a trend statement; the bands are not.

### Bands versus ATR: two volatility measures that disagree

**Chapter 39** builds ATR from true range. Set them side by side, because the differences are not cosmetic:

| | Band width ($2k\\sigma$) | ATR |
|---|---|---|
| Input | Closes only | High, low, and previous close |
| Sees gaps | **No** | **Yes** |
| Sees intraday range | **No** | **Yes** |
| Smoothing | Equal-weighted over $n$ | Wilder exponential |
| Reacts to one big day | **Violently** — it is squared | Moderately — it is averaged in |
| Natural use | Is today's close unusual? | How much room does the stock need? |

**The squaring is the difference that matters most.** A single 2.10-taka move enters $\\sigma$ as $2.10^2 = 4.41$ against a pre-existing sum of squares of 1.60 — it triples the dispersion by itself. On the worked example, one breakout close takes bandwidth from 1.8219% to 3.4115%, an **87% jump in a single session**, while ATR over the same session rises from 1.05 to 1.1536 — **9.86%.**

Neither is wrong. They are measuring different things, and the honest statement is: **use $\\sigma$-bands to ask whether a close is unusual; use ATR to size a position or place a stop.** Chapter 49 will use ATR and not band width, and the reason is exactly this table.

### The DSE overlay, where this indicator has a specific and severe problem

Every previous chapter's DSE caveats apply here. But Bollinger Bands have an additional structural vulnerability that RSI and MACD do not share, and it is worth stating precisely.

**1. Circuit limits truncate the exact tails the bands are measuring.** DSE applies percentage price bands per session (Chapter 2). At a reference of 62.10 with a ten-percent band, no close outside 55.89 to 68.31 is possible. **The standard deviation of a censored distribution is smaller than the standard deviation of the underlying distribution, systematically.** So on the very days when dispersion is genuinely exploding, the exchange is preventing the closes that would record it. **The bands under-measure volatility precisely when volatility matters, and they do so silently — there is no flag, no error, just a number that is too small.** If a session closed locked at the band, the close you fed the indicator is not a price; it is the edge of the ruleset.

**2. A floor-price flatline manufactures a permanent fake squeeze, and this is the single worst failure mode of this indicator on our market.** Under the floor-price regime, a share could not trade below an administered level. Names that pinned to the floor printed the same close day after day, sometimes for months. **Run the arithmetic: if all twenty closes are identical, $\\sum(P_i - \\bar{P})^2 = 0$, therefore $\\sigma = 0$, therefore both bands collapse onto the centre line, therefore bandwidth is exactly 0%.**

That is the lowest bandwidth mathematically possible. **Every squeeze screen ever written flags it, in the highest-conviction bucket, permanently.** A percentile-based rule does not save you either — the bandwidth is at the zeroth percentile of its own history and stays there.

And it is worse than a false positive, because %b becomes $0/0$. Undefined. Depending on your implementation you get a divide-by-zero error, a \`NaN\` that propagates through a screen, or — most dangerously — a language that silently returns infinity and ranks that stock first. **A screen run over the DSE across a floor-price window returns, at the top, a list of the most illiquid administratively frozen shares on the exchange, labelled as the highest-conviction breakout candidates available.** There is no signal there at all. There was not even a market.

**Exclude floor-price windows before computing anything**, using the same flag column Chapter 26 established. This is not optional hygiene; it is the difference between a working screen and an inverted one.

**3. Thin liquidity corrupts the closes themselves.** The indicator's only input is a series of closing prices. On the DSE, a close can be set by a handful of shares in the last minutes of a session. **Two hundred shares crossing at a price nobody would transact size at becomes a data point with the same weight as a two-crore day.** Because deviations are squared, one bad close does not slightly distort the bands — it dominates them. A single erroneous or manipulated close, five percent away from the true level, contributes twenty-five times the variance of a one-percent deviation. **Before trusting a $\\sigma$ computed on a DSE name, check that every close in the window traded meaningful value.**

**4. No reliable short side, so half the indicator's textbook uses do not exist here.** The classical playbook has a symmetric structure: fade the upper band in a range, buy the lower, short the failed upper breakout. **On the DSE, retail short selling is not practically available.** Every lower-band signal survives as a possible entry; every upper-band signal collapses into one of two actions and no more — **do not buy, or exit what you hold.** Any material claiming otherwise has been imported without adjustment.

**5. Circuit limits also cap the escape.** Suppose the squeeze resolves upward exactly as you hoped. The move is capped at the daily band, so it plays out over several sessions rather than one, and each of those sessions may open at the upper limit with no size available. **The signal can be correct and untradeable at the same time**, which is a category the classical literature does not contain.

### What to keep

Strip out the mysticism and three things remain, all of them real:

1. **%b is the best normalised measure of "unusual close" available**, it is unbounded where the oscillators saturate, and it is comparable across stocks and across price levels.
2. **Bandwidth percentile is a genuine regime indicator.** Dispersion mean-reverts. Very quiet periods do resolve.
3. **The centre line is a twenty-period SMA and carries Chapter 34's information about trend**, with Chapter 34's lag and Chapter 34's whipsaw behaviour, no more and no less.

Everything else — the 95% claim, the overbought band touch, the bands as support — **is either false or true only inside a regime the indicator cannot itself identify.**

Chapter 39 takes the volatility question and answers it properly, with an input that includes the gaps and the intraday range that this chapter's standard deviation cannot see.`,
      bn: `অধ্যায় ৩৫, ৩৬ ও ৩৭ আপনাকে তিনটি অসিলেটর দিয়েছে। **বলিঞ্জার ব্যান্ড চতুর্থ কোনো অসিলেটর নয়, আর এটিকে অপব্যবহারের সবচেয়ে সাধারণ উপায় হলো একে চতুর্থ অসিলেটর ভেবে নেওয়া।**

MACD, RSI ও স্টোক্যাস্টিক তিনটিই গতির প্রশ্নের উত্তর দেয়: কত দ্রুত, কত টান টান, সাম্প্রতিক পরিসরের কতটুকু পেরিয়ে। **বলিঞ্জার ব্যান্ড সম্পূর্ণ ভিন্ন একটি প্রশ্নের উত্তর দেয়, আর সেটি বিক্ষেপের প্রশ্ন।** এটি জিজ্ঞেস করে: এই শেয়ার সাম্প্রতিককালে যতটা এলোমেলো ঘুরছে তার তুলনায় আজকের ক্লোজ কতটা অস্বাভাবিক?

এটুকুই পুরো ধারণা। বাকি সবই হিসাবরক্ষণ।

### গঠন, আর প্রতিটি অংশ কী করছে

শেষ $n$টি ক্লোজ নিন, সাধারণত কুড়িটি। তাদের সরল মুভিং অ্যাভারেজ বের করুন — **অধ্যায় ৩৪**-এর সেই একই SMA, একই পিছিয়ে থাকা ও একই সমান ওজনসহ। এটিই **কেন্দ্র রেখা**। তারপর ঐ একই কুড়িটি ক্লোজের ঐ একই গড়ের সাপেক্ষে স্ট্যান্ডার্ড ডেভিয়েশন বের করুন, আর একটি ব্যান্ড বসান গড় যোগ $k$ স্ট্যান্ডার্ড ডেভিয়েশনে ও আরেকটি গড় বিয়োগ $k$-তে, যেখানে $k$ সাধারণত দুই।

$$\\text{Mid} = \\bar{P}, \\qquad \\text{Upper} = \\bar{P} + k\\sigma, \\qquad \\text{Lower} = \\bar{P} - k\\sigma$$

**ঐ সংজ্ঞা থেকে সঙ্গে সঙ্গে তিনটি জিনিস আসে, আর প্রতিটিই আপনাকে শেখানো কোনো না কোনো কথার বিরোধিতা করে।**

**প্রথমত, ব্যান্ড গণনা হয় ক্লোজ থেকে এবং কেবল ক্লোজ থেকে।** দিনের হাই এতে ঢোকে না। লো ঢোকে না। রাতের গ্যাপ ক্লোজের ওপর তার প্রভাব ছাড়া ঢোকে না। **এটিই ব্যান্ডের প্রস্থ ও অধ্যায় ৩৯-এর ATR-এর মৌলিক পার্থক্য**, যা true range থেকে গড়া এবং তাই গ্যাপ দেখে, দিনের ভেতরের ঝাঁট দেখে, ও সেশনের পুরো বিস্তার দেখে। দুটি শেয়ার হুবহু একই ব্যান্ড প্রস্থ ছাপতে পারে যেখানে একটি নীরবে প্রতিদিন দুই টাকার ইন্ট্রাডে পরিসর লেনদেন করছে আর অন্যটি সেশনের ভেতরে নড়ছেই না। **দিনের ভেতরে শেয়ারটি আপনাকে কতটা জায়গা দেয় তা জানতে চাইলে ব্যান্ডের প্রস্থ ভুল যন্ত্র।**

**দ্বিতীয়ত, ব্যান্ড নড়ে কারণ $\\sigma$ নড়ে, আর $\\sigma$ একটি ফলাফল, কোনো সেটিং নয়।** নতুনরা "ব্যান্ড চওড়া হচ্ছে" এমনভাবে বলেন যেন ব্যান্ডের সঙ্গে কিছু করা হচ্ছে। কিছুই করা হচ্ছে না। **ব্যান্ড চওড়া হয় কারণ শেষ কুড়িটি ক্লোজ তাদের নিজেদের গড়ের চারপাশে বেশি ছড়িয়ে পড়েছে।** ঘটনাটি এটুকুই। ব্যান্ড হাঁ হয়ে খুলতে দেখলে সঠিক অন্তর্গত বাক্যটি "ভোলাটিলিটি বাড়ছে" নয় — তা কেবল পুনরুক্তি — বরং "শেষ কুড়িটি ক্লোজের বিক্ষেপ বেড়েছে, আর আমার জানা দরকার কোন ক্লোজগুলো তা করল।"

**তৃতীয়ত, আর এটিই টাকা খরচ করায়: ব্যান্ড আত্ম-নির্দেশক।** গড় গণনা হয় ঐ একই কুড়িটি সংখ্যা থেকে যাদের বিক্ষেপ আপনি মাপছেন, আর নতুনতম ক্লোজটি ঐ কুড়িটির একটি। **আজকের বড় নড়াচড়া আজকেই ব্যান্ড চওড়া করে।** ব্যান্ড কোনো স্বাধীন মাপকাঠি নয় যার সাপেক্ষে দাম মাপা হয়; এটি এমন মাপকাঠি যার আংশিক উপাদান যা মাপা হচ্ছে তা-ই। এ কারণেই দাম টানা বহু সেশন উপরের ব্যান্ডের *বাইরে* বসে থাকতে পারে কোনো স্ববিরোধ ছাড়াই: প্রতিটি নতুন উঁচু ক্লোজ গড়কে ওপরে টানে ও $\\sigma$ ফোলায়, আর ব্যান্ডটি দামকে ঢাকনা দেওয়ার বদলে দামের নিচ দিয়ে দৌড়ায়।

### এখানে স্ট্যান্ডার্ড ডেভিয়েশন আসলে কী

$$\\sigma = \\sqrt{\\frac{1}{n}\\sum_{i=1}^{n}\\left(P_i - \\bar{P}\\right)^2}$$

মন দিয়ে পড়ুন। এটি প্রতিটি ক্লোজের গড় ক্লোজ থেকে দূরত্বের বর্গমূল-গড়-বর্গ। **এটি কোনো পূর্বাভাস নয়, সম্ভাব্যতা নয়, আর সিদ্ধান্ত-তাত্ত্বিক কোনো অর্থে ঝুঁকির পরিমাপও নয়।** এটি কুড়িটি সংখ্যা কতটা ছড়ানো ছিল তার বর্ণনামূলক সারসংক্ষেপ।

প্রলোভন — আর এই নির্দেশকের পুরো রহস্যময়তা — হলো এর সঙ্গে একটি নর্মাল বণ্টন জুড়ে দিয়ে সিদ্ধান্তে আসা যে ৯৫.৪৫% ক্লোজ দুই স্ট্যান্ডার্ড ডেভিয়েশনের ভেতরে থাকে। **এটি করবেন না।** তিনটি আলাদা আপত্তি, আর সেগুলো একটির ওপর আরেকটি চাপে:

**১. জানালাটি কুড়িটি পর্যবেক্ষণের, আর গড়ও ঐ একই কুড়িটি থেকেই অনুমিত।** নিখুঁত নর্মালতাতেও, একটি নমুনার কত অংশ তার *নিজের* নমুনা-গড় থেকে দুই *নমুনা* স্ট্যান্ডার্ড ডেভিয়েশনের ভেতরে থাকে তা ৯৫.৪৫% নয়। তা ছোট, আর যান্ত্রিকভাবেই ছোট। কুড়ি-পর্যবেক্ষণের জানালায় প্রায়োগিক ভগ্নাংশ সাধারণত ৮৫% থেকে ৯০%-এর মধ্যে পড়ে। **§৩৮.৩-এর উদাহরণে কুড়িটির আঠারোটি ক্লোজ ব্যান্ডের ভেতরে পড়ে — ঠিক ৯০%, ৯৫.৪৫% নয়।**

**২. আর্থিক রিটার্ন নর্মাল নয়।** এগুলো লেপ্টোকার্টিক: মাঝখানের কাছে বড্ড বেশি পর্যবেক্ষণ জমাট, কাঁধে বড্ড কম, আর চরম প্রান্তে বড্ড বেশি। ব্যবহারিক পরিণতি অসম। **ব্যান্ড সাধারণ দিনগুলোর নর্মাল বণ্টনের পূর্বাভাসের চেয়ে সামান্য বেশি ধারণ করে, আর বিপর্যয়গুলোর নাটকীয়ভাবে কম।** চার-সিগমার দিন প্রায় ষোলো হাজার সেশনে একবার হওয়ার কথা — মোটামুটি চৌষট্টি বছরে একবার। ইকুইটি বাজারে তা কয়েক বছর পরপরই হয়। **যে নড়াচড়া ব্যান্ড ভাঙে তার আকার সম্পর্কে ব্যান্ড আপনাকে কিছুই বলে না।**

**৩. ক্লোজগুলো ক্রমিকভাবে সহসম্পর্কিত, বিশেষত এখানে।** নর্মাল-বণ্টনের যুক্তি নীরবে ধরে নেয় কুড়িটি পর্যবেক্ষণ স্বাধীন নমুনা। তা নয়। একই শেয়ারের পরপর ক্লোজ প্রবলভাবে স্বসহসম্পর্কিত, আর ডিএসই-তে, যেখানে একটি নাম সপ্তাহজুড়ে সামান্য ভলিউমে এক দিকে ভেসে যেতে পারে, কুড়ি-দিনের জানালায় কার্যকর স্বাধীন পর্যবেক্ষণের সংখ্যা পাঁচ বা ছয় হতে পারে। **ক্রমিকভাবে সহসম্পর্কিত ডেটায় গণনা করা স্ট্যান্ডার্ড ডেভিয়েশন ট্রেন্ডে বিক্ষেপ কম দেখায় ও এলোমেলো বাজারে বেশি দেখায়**, যা আপনার যা দরকার ঠিক তার উল্টো।

**এর কোনোটিই নির্দেশকটিকে অকেজো করে না।** এগুলো সম্ভাব্যতাভিত্তিক ব্যাখ্যাটিকে অকেজো করে। ব্যান্ড একটি ভালো *আপেক্ষিক* বক্তব্য হিসেবে টিকে থাকে — এই ক্লোজটি এই শেয়ারের শেষ কুড়িটি ক্লোজের তুলনায় অস্বাভাবিক — আর ঐ বক্তব্যটি রাখার মতো। যেটি ফেলে দিতে হবে তা হলো *পরম* বক্তব্য, যার গায়ে একটি শতাংশ ঝোলানো।

### হর, আর এটি কেন খুঁতখুঁতানি নয়

প্রতিটি পরিসংখ্যানের পাঠ্যবইয়ে দুটি স্ট্যান্ডার্ড ডেভিয়েশন আছে:

$$\\sigma_{\\text{pop}} = \\sqrt{\\frac{\\sum(P_i - \\bar{P})^2}{n}} \\qquad\\text{বনাম}\\qquad s_{\\text{samp}} = \\sqrt{\\frac{\\sum(P_i - \\bar{P})^2}{n-1}}$$

**বলিঞ্জার ব্যান্ড পপুলেশন হর $n$ ব্যবহার করে।** এক্সেলের \`STDEV\`, \`STDEV.S\` ও বেশিরভাগ ডিফল্ট পরিসংখ্যানিক রুটিন স্যাম্পল হর $n-1$ ব্যবহার করে। **নিজে নির্দেশকটি বানাতে গিয়ে ডিফল্ট ফাংশনে হাত দিলে আপনি নীরবে একটি ভিন্ন নির্দেশক বানাবেন।**

কতটা ভিন্ন? দুটির অনুপাত $\\sqrt{n/(n-1)}$। $n = 20$-এ তা $\\sqrt{20/19} = 1.0260$। **আপনার ব্যান্ড সবার চেয়ে ২.৬০% বেশি চওড়া হয়, দুই দিকেই, প্রতিদিন।**

এবার জিজ্ঞেস করুন ২.৬০% গুরুত্বপূর্ণ কি না। উদাহরণে এটি উপরের ব্যান্ডকে ৬২.৬৬৫৭ থেকে ৬২.৬৮০৪-এ নেয় — দেড় পয়সারও কম। **একটি দিনে এটি কিছুই নয়। ঠিক এ কারণেই এটি বিপজ্জনক।** ভুলটি প্রতিটি পরবর্তী পাঠে কী করে দেখুন:

- **%b** ব্যান্ডের ভেতরে দূরত্বের অনুপাত, আর সমানভাবে চওড়া ব্যান্ড প্রতিটি %b পাঠকে ০.৫-এর দিকে ঠেলে। চরম মানগুলো সংকুচিত হয়। **যে ক্লোজের পড়া উচিত ১.০৩০৩ — সত্যিই ব্যান্ডের বাইরে — তা পড়ে ১.০০৪৩**, যা বেশিরভাগ স্ক্রিন "ব্যান্ডের বাইরে" নয়, "ব্যান্ডে" হিসেবে গোল করে।
- **ব্যান্ডউইডথ** প্রতিটি পর্যবেক্ষণে ঠিক ২.৬০% ফুলে যায়, তাই *মাত্রা* ভুল কিন্তু আপনার নিজের ডেটার ভেতরে তুলনা এখনো অভ্যন্তরীণভাবে সঙ্গতিপূর্ণ — **যতক্ষণ না আপনি একটি প্রকাশিত ব্যান্ডউইডথ, একটি ব্রোকারের চার্ট, বা বইয়ে পড়া একটি সীমার সঙ্গে তুলনা করছেন, যে মুহূর্তে তুলনাটি অর্থহীন।**
- **স্কুইজ পরীক্ষাটিই আসলে ভাঙে।** স্কুইজ হলো নিজস্ব ইতিহাসের নিম্ন পার্সেন্টাইলে থাকা ব্যান্ডউইডথ, আর ব্যান্ডউইডথ সমানভাবে মাপ বদলালে পার্সেন্টাইল ক্রম অপরিবর্তিত থাকে। **কিন্তু নির্দিষ্ট সীমা ব্যবহার করলে — "ব্যান্ডউইডথ ২%-এর নিচে" খুব প্রচলিত — সমান ২.৬০% স্ফীতি বদলে দেয় কোন দিনগুলো ট্রিগার করে।** নিয়মটি দেরিতে চালু হয়, আর কখনো কখনো একেবারেই নয়।

**সঠিক উত্তর হলো পপুলেশন হর ব্যবহার করা কারণ সংজ্ঞাটি তাই, আর কোনটি ব্যবহার করলেন তা স্পষ্ট করে বলা।** ভুল উত্তর হলো সিদ্ধান্তে আসা যে এতে কিছু যায় আসে না। আজ কিছু যায় আসে না কারণ আপনি একটি সংখ্যার দিকে তাকাচ্ছেন; যায় আসে কারণ আপনি এর ওপর একটি স্ক্রিন বানাবেন।

দশ সেকেন্ডের মতো একটি দার্শনিক প্রশ্নও আছে। স্যাম্পল হরের অস্তিত্ব একটি নমুনা থেকে অজানা পপুলেশন ভেদাঙ্ক অনুমানের পক্ষপাত সংশোধনের জন্য। **কিন্তু আপনি কিছুই অনুমান করছেন না।** কুড়িটি ক্লোজ ক্লোজের কোনো বৃহত্তর জনগোষ্ঠী থেকে টানা নমুনা নয়; সেগুলোই আগ্রহের গোটা বস্তু। আপনি ঐ কুড়িটি সংখ্যার বিক্ষেপ বর্ণনা করতে চান, ব্যস। **এখানে পপুলেশন হর কেবল প্রথাগত নয় — এটি ধারণাগতভাবে সঠিক।**

### %b: যে পাঠ নির্দেশকটিকে ব্যবহারযোগ্য করে

ব্যান্ডের সাপেক্ষে দাম শেয়ারে শেয়ারে ও সময়ে সময়ে তুলনা করা অস্বস্তিকর। %b তা ঠিক করে:

$$\\%b = \\frac{P - \\text{Lower}}{\\text{Upper} - \\text{Lower}}$$

মাপকাঠিটি সহজবোধ্য। **০.৫ হলো কেন্দ্র রেখা। ১.০ হলো ঠিক উপরের ব্যান্ড। ০.০ হলো ঠিক নিচের ব্যান্ড। ১.০-এর ওপরে মানে উপরের ব্যান্ডের বাইরে; ০.০-এর নিচে মানে নিচের ব্যান্ডের বাইরে।** RSI বা স্টোক্যাস্টিকের বিপরীতে, **%b সীমাহীন** — এটি ২.৩৬ ছাপতে পারে, আর উদাহরণে তা ছাপেও।

ঐ সীমাহীনতাই আসল কথা এবং অধ্যায় ৩৬ ও ৩৭-এর অসিলেটরের চেয়ে %b কেন বেশি সৎ তার কারণ। RSI স্যাচুরেট করে: ৮৮-তে ও ৯৬-তে দুটিতেই এটি "উঁচু" বলছে, আর কতটা উঁচু তা বলতে পারে না। **%b গোনা চালিয়ে যায়।** ২.৩৬ পাঠ বলে ক্লোজটি উপরের ব্যান্ডের বাইরে পুরো এক ব্যান্ড-প্রস্থেরও বেশি, যা ১.০২ থেকে সত্যিই আলাদা, আর কোনো সীমাবদ্ধ অসিলেটর তা বলতে পারে না।

### ব্যান্ডউইডথ ও স্কুইজ

$$\\text{Bandwidth} = \\frac{\\text{Upper} - \\text{Lower}}{\\text{Mid}} = \\frac{2k\\sigma}{\\bar{P}}$$

মিড দিয়ে ভাগ করলে এটি দামের শতাংশ হয়, তাই ৬২ টাকার শেয়ার ও ৬২০ টাকার শেয়ার তুলনীয় হয়। **এই সাধারণীকরণ অধ্যায় ৩৫-এ PPO যা MACD-তে করে তাই, এবং একই কারণে।**

**স্কুইজ** হলো এই পর্যবেক্ষণ যে দাম গড়মুখী না হলেও বিক্ষেপ গড়মুখী। খুব কম ব্যান্ডউইডথের সময়ের পরে সাধারণত বেশি ব্যান্ডউইডথের সময় আসে, আর ঐ পরিবর্তনটি প্রায়ই একটি দিকনির্দিষ্ট চলাচল। এটিই নির্দেশকটির সত্যিকারের সবচেয়ে কাজের দিক, আর কারণটি রহস্যময় নয়: **যে বাজার দাম নিয়ে দ্বিমত করা বন্ধ করেছে সে নতুন তথ্য তৈরি করা বন্ধ করেছে, আর ঐ অচলাবস্থার নিষ্পত্তি একটি ঘটনা।**

**কিন্তু স্কুইজ সবসময় পার্সেন্টাইলে সংজ্ঞায়িত করতে হবে, কখনো পরম মানে নয়।** ১.৮২% ব্যান্ডউইডথ এমন একটি নামে প্রচণ্ড স্কুইজ যা সাধারণত ৬.৪২% চালায়, আর একটি বড়, ঘুমন্ত ব্যাংকে সম্পূর্ণ সাধারণ পাঠ। কোনো সর্বজনীন সীমা নেই। **বর্তমান ব্যান্ডউইডথকে ঐ একই শেয়ারের নিজের শেষ ছয় মাসের সাপেক্ষে ক্রম দিন, আর মোটামুটি দশম পার্সেন্টাইলের নিচে হলে স্কুইজ বলুন।**

আর স্কুইজ দিক সম্পর্কে কিছুই বলে না। **এখানেই বেশিরভাগ মানুষ এতে টাকা হারান।** স্কুইজ একটি বক্তব্য যে চলাচল সম্ভাব্য; কোন দিকে সে বিষয়ে নীরব। আরও খারাপ, স্কুইজ থেকে প্রথম ব্রেকটি প্রায়ই আসল চলাচলের আগে ভুল দিকে একটি ধোঁকা। **স্কুইজ ট্রেড করা মানে অন্য কোথাও থেকে একটি দিকনির্দিষ্ট যুক্তি থাকা এবং সময় নির্ধারণে স্কুইজ ব্যবহার করা — উল্টোটা নয়।**

### ব্যান্ড কেন সাপোর্ট ও রেজিস্ট্যান্স নয়

অধ্যায় ৩০ অবস্থানরত ইনভেন্টরি থেকে একটি লেভেল গড়েছিল: যাঁরা ৪৮-এ কিনেছেন, যাঁরা ৪৮-এ সুযোগ হারিয়েছেন, ৪৮-এর ওপরে পার্ক করা স্টপ। **ঐ লেভেলটি অর্ডার বুকে আছে। কেউ সেখানে দাঁড়িয়ে আছেন।**

**বলিঞ্জার ব্যান্ডে কেউ দাঁড়িয়ে নেই।** উপরের ব্যান্ড শেষ কুড়িটি ক্লোজের একটি পাটিগাণিতিক পরিণতি। এটি প্রতি সেশনে নড়ে। আজ সকালে এটি নড়েছে কারণ জানালার পেছন থেকে একটি ক্লোজ বেরিয়ে গেছে। **৬২.৬৬৫৭-এ কোনো জমা ইনভেন্টরি নেই, কারণ বাজার হিসাব না করা পর্যন্ত ৬২.৬৬৫৭ সংখ্যাটির অস্তিত্বই ছিল না, আর আগামীকাল এটি অন্য একটি সংখ্যা হবে।**

এর তিনটি ব্যবহারিক পরিণতি আছে, আর প্রতিটিই এমন নিয়ম যা মানুষ অবিরত ভাঙেন:

**১. "দাম উপরের ব্যান্ড ছুঁয়েছে, তাই এটি অতিক্রীত" — এটি ভুল, আর সম্ভাব্য সবচেয়ে ব্যয়বহুলভাবে ভুল।** প্রকৃত ট্রেন্ডে দাম *ব্যান্ডের ওপর হাঁটে*: এটি টানা বহু সেশন উপরের ব্যান্ড ধরে চলে যখন ঐ একই ক্লোজগুলোই ব্যান্ডটিকে ওপরে টেনে নিচ্ছে। **উদাহরণে ২১তম দিনে দাম উপরের ব্যান্ডের ওপরে বন্ধ হয় ২.৩৫৬২ %b-তে, আর ২২তম দিনে ব্যান্ড ইতিমধ্যে ৮৭% চওড়া হয়ে ধরার চেষ্টা করার পরেও দাম ১.৩৩৪৪-তে বাইরেই থাকে।** সেখানে প্রথম ব্যান্ড-স্পর্শ বিক্রি করা মানে চলাচলের প্রথম দিনটিই বিক্রি করা। বলিঞ্জার নিজে বারবার এটি বলেছেন আর তবু বাজারের প্রতিটি টিপ গ্রুপে এটিই সংখ্যাগরিষ্ঠ পাঠ। **উপরের ব্যান্ড ছোঁয়া শক্তির প্রমাণ, ক্লান্তির নয়।**

**২. কেন্দ্র রেখায় গড়মুখী ফেরা একটি প্রবণতা, নিয়ম নয়, আর তা রেজিমের ওপর শর্তাধীন।** একটি রেঞ্জের ভেতরে দামের ব্যান্ডের মধ্যে দোলা ও মিডে ফেরা একটি বাস্তব ও লেনদেনযোগ্য ধরন। একটি ট্রেন্ডের ভেতরে ঐ একই আচরণ সম্পূর্ণ উবে যায়। **আপনি কোন রেজিমে আছেন তা নির্দেশকটি বলে না — ব্যান্ডউইডথ আংশিকভাবে বলে, আর অধ্যায় ৩০ থেকে ৩৩-এর দামের কাঠামো আরও ভালোভাবে বলে।** আপনি একটি রেঞ্জে আছেন তা আগে প্রতিষ্ঠা না করে গড়মুখী ফেরার জন্য ব্যান্ড ব্যবহার করা কোনো কৌশল নয়; এটি বাজি যে আজ ট্রেন্ডের দিন নয়।

**৩. ব্যান্ড দিয়ে স্টপ বসানো যায় না, আর এটিই অধ্যায় ৩০-এ ফেরার সবচেয়ে সরাসরি যোগসূত্র।** স্টপের জায়গা সেই দাম যেখানে আপনার যুক্তি মিথ্যা প্রমাণিত হয়। একটি চলমান পাটিগাণিতিক নির্মাণ কোনো যুক্তি নয়। **নিচের ব্যান্ডে স্টপ বসালে ব্যান্ডের চওড়া হওয়া — যা ঠিক তখনই ঘটে যখন বাজার বেশি বিপজ্জনক হয় — আপনার স্টপকে আরও দূরে সরিয়ে দেয় ঠিক সেই মুহূর্তে যখন আপনার ঝুঁকি কমানো উচিত।** কেন্দ্র রেখা একটি ট্রেলিং রেফারেন্স হিসেবে রক্ষণীয় কারণ তা একটি ট্রেন্ড-বক্তব্য; ব্যান্ড নয়।

### ব্যান্ড বনাম ATR: দুটি ভোলাটিলিটি পরিমাপ যারা একমত নয়

**অধ্যায় ৩৯** true range থেকে ATR গড়ে। পাশাপাশি রাখুন, কারণ পার্থক্যগুলো প্রসাধনী নয়:

| | ব্যান্ডের প্রস্থ ($2k\\sigma$) | ATR |
|---|---|---|
| উপাদান | কেবল ক্লোজ | হাই, লো ও আগের ক্লোজ |
| গ্যাপ দেখে | **না** | **হ্যাঁ** |
| ইন্ট্রাডে পরিসর দেখে | **না** | **হ্যাঁ** |
| মসৃণকরণ | $n$-এর ওপর সমান ওজন | ওয়াইল্ডার এক্সপোনেনশিয়াল |
| একটি বড় দিনে প্রতিক্রিয়া | **প্রচণ্ড** — এটি বর্গ করা | মাঝারি — এটি গড়ে ঢোকে |
| স্বাভাবিক ব্যবহার | আজকের ক্লোজ কি অস্বাভাবিক? | শেয়ারটির কতটা জায়গা লাগে? |

**বর্গ করাটিই সবচেয়ে গুরুত্বপূর্ণ পার্থক্য।** একটি ২.১০ টাকার নড়াচড়া $\\sigma$-তে ঢোকে $2.10^2 = 4.41$ হিসেবে, যেখানে আগে থেকে বর্গের যোগফল ১.৬০ — এটি একাই বিক্ষেপ তিন গুণ করে। উদাহরণে একটি ব্রেকআউট ক্লোজ ব্যান্ডউইডথকে ১.৮২১৯% থেকে ৩.৪১১৫%-এ নেয়, **এক সেশনে ৮৭% লাফ**, যেখানে ঐ একই সেশনে ATR ১.০৫ থেকে ১.১৫৩৬-এ ওঠে — **৯.৮৬%।**

কোনোটিই ভুল নয়। তারা ভিন্ন জিনিস মাপছে, আর সৎ বক্তব্যটি হলো: **একটি ক্লোজ অস্বাভাবিক কি না জিজ্ঞেস করতে $\\sigma$-ব্যান্ড ব্যবহার করুন; অবস্থানের আকার ঠিক করতে বা স্টপ বসাতে ATR ব্যবহার করুন।** অধ্যায় ৪৯ ATR ব্যবহার করবে, ব্যান্ডের প্রস্থ নয়, আর কারণটি ঠিক এই ছকটিই।

### ডিএসই আবরণ, যেখানে এই নির্দেশকের একটি নির্দিষ্ট ও গুরুতর সমস্যা আছে

আগের প্রতিটি অধ্যায়ের ডিএসই সতর্কতা এখানেও প্রযোজ্য। কিন্তু বলিঞ্জার ব্যান্ডের একটি বাড়তি কাঠামোগত দুর্বলতা আছে যা RSI ও MACD-র নেই, আর তা নির্ভুলভাবে বলা দরকার।

**১. সার্কিট সীমা ঠিক সেই প্রান্তগুলোই কেটে দেয় যা ব্যান্ড মাপছে।** ডিএসই সেশনপ্রতি শতাংশভিত্তিক দামের ব্যান্ড প্রয়োগ করে (অধ্যায় ২)। ৬২.১০ রেফারেন্সে দশ শতাংশ ব্যান্ডে ৫৫.৮৯ থেকে ৬৮.৩১-এর বাইরে কোনো ক্লোজ সম্ভব নয়। **কর্তিত বণ্টনের স্ট্যান্ডার্ড ডেভিয়েশন অন্তর্নিহিত বণ্টনের চেয়ে ছোট হয়, ব্যবস্থাগতভাবেই।** তাই ঠিক যেসব দিনে বিক্ষেপ সত্যিই বিস্ফোরিত হচ্ছে, এক্সচেঞ্জ সেই ক্লোজগুলোই ঘটতে দিচ্ছে না যা তা লিপিবদ্ধ করত। **ভোলাটিলিটি যখন গুরুত্বপূর্ণ ঠিক তখনই ব্যান্ড তা কম মাপে, আর নীরবে করে — কোনো চিহ্ন নেই, কোনো ভুলবার্তা নেই, কেবল একটি সংখ্যা যা বড্ড ছোট।** কোনো সেশন ব্যান্ডে আটকে বন্ধ হলে আপনি নির্দেশককে যে ক্লোজটি খাইয়েছেন তা কোনো দাম নয়; তা বিধিমালার প্রান্ত।

**২. ফ্লোর-প্রাইসের সমতল রেখা একটি স্থায়ী নকল স্কুইজ তৈরি করে, আর আমাদের বাজারে এটিই এই নির্দেশকের সবচেয়ে খারাপ ব্যর্থতা।** ফ্লোর-প্রাইস ব্যবস্থায় একটি শেয়ার একটি প্রশাসিত স্তরের নিচে লেনদেন করতে পারত না। মেঝেতে আটকে যাওয়া নামগুলো দিনের পর দিন একই ক্লোজ ছেপেছে, কখনো কখনো মাসের পর মাস। **পাটিগণিত চালান: কুড়িটি ক্লোজ অভিন্ন হলে $\\sum(P_i - \\bar{P})^2 = 0$, অতএব $\\sigma = 0$, অতএব দুটি ব্যান্ডই কেন্দ্র রেখার ওপর ভেঙে পড়ে, অতএব ব্যান্ডউইডথ ঠিক ০%।**

গাণিতিকভাবে সম্ভব সর্বনিম্ন ব্যান্ডউইডথ এটিই। **লেখা হয়েছে এমন প্রতিটি স্কুইজ স্ক্রিন একে চিহ্নিত করে, সর্বোচ্চ প্রত্যয়ের বাক্সে, স্থায়ীভাবে।** পার্সেন্টাইল-ভিত্তিক নিয়মও আপনাকে বাঁচায় না — ব্যান্ডউইডথ তার নিজের ইতিহাসের শূন্যতম পার্সেন্টাইলে আছে এবং সেখানেই থাকে।

আর এটি ভুয়া ধনাত্মকের চেয়েও খারাপ, কারণ %b হয়ে যায় $0/0$। অসংজ্ঞায়িত। বাস্তবায়নের ওপর নির্ভর করে আপনি পান শূন্য দিয়ে ভাগের ভুল, একটি \`NaN\` যা স্ক্রিনজুড়ে ছড়ায়, বা — সবচেয়ে বিপজ্জনকভাবে — এমন একটি ভাষা যা নীরবে অসীম ফেরত দেয় ও ঐ শেয়ারটিকে প্রথম স্থান দেয়। **ফ্লোর-প্রাইসের সময়কালজুড়ে ডিএসই-তে চালানো একটি স্ক্রিন শীর্ষে ফেরত দেয় এক্সচেঞ্জের সবচেয়ে অতরল প্রশাসনিকভাবে জমাটবদ্ধ শেয়ারের তালিকা, যাদের গায়ে লেবেল লাগানো "সর্বোচ্চ প্রত্যয়ের ব্রেকআউট প্রার্থী"।** সেখানে কোনো সংকেতই নেই। সেখানে বাজারই ছিল না।

**কিছু গণনার আগে ফ্লোর-প্রাইসের সময়কাল বাদ দিন**, অধ্যায় ২৬-এর প্রতিষ্ঠিত সেই একই চিহ্ন-কলাম ব্যবহার করে। এটি ঐচ্ছিক পরিচ্ছন্নতা নয়; এটি একটি কার্যকর স্ক্রিন ও একটি উল্টে যাওয়া স্ক্রিনের পার্থক্য।

**৩. পাতলা তারল্য ক্লোজগুলোকেই নষ্ট করে।** নির্দেশকটির একমাত্র উপাদান হলো ক্লোজিং দামের একটি ধারা। ডিএসই-তে একটি ক্লোজ সেশনের শেষ মিনিটে হাতে গোনা কয়েকটি শেয়ারে নির্ধারিত হতে পারে। **এমন দামে দুইশো শেয়ারের হাতবদল যে দামে কেউ আকার নিয়ে লেনদেন করত না, তা দুই কোটি টাকার দিনের সমান ওজনের একটি ডেটা বিন্দু হয়ে যায়।** যেহেতু বিচ্যুতি বর্গ করা হয়, একটি খারাপ ক্লোজ ব্যান্ডকে সামান্য বিকৃত করে না — তা ব্যান্ডকে দখল করে নেয়। প্রকৃত স্তর থেকে পাঁচ শতাংশ দূরে একটি ভুল বা কারসাজি করা ক্লোজ এক শতাংশ বিচ্যুতির পঁচিশ গুণ ভেদাঙ্ক যোগ করে। **একটি ডিএসই নামে গণনা করা $\\sigma$-তে ভরসা করার আগে দেখুন জানালার প্রতিটি ক্লোজ অর্থবহ মূল্যে লেনদেন হয়েছে কি না।**

**৪. নির্ভরযোগ্য শর্ট সাইড নেই, তাই নির্দেশকটির পাঠ্যবইয়ের অর্ধেক ব্যবহার এখানে নেই।** ধ্রুপদী পরিকল্পনার একটি প্রতিসম কাঠামো আছে: রেঞ্জে উপরের ব্যান্ডের বিপক্ষে যাওয়া, নিচেরটি কেনা, ব্যর্থ উপরের ব্রেকআউট শর্ট করা। **ডিএসই-তে খুচরা শর্ট সেলিং ব্যবহারিকভাবে নেই।** প্রতিটি নিচের-ব্যান্ড সংকেত একটি সম্ভাব্য প্রবেশ হিসেবে টেকে; প্রতিটি উপরের-ব্যান্ড সংকেত দুটি কাজে গিয়ে দাঁড়ায়, তার বেশি নয় — **কিনবেন না, বা যা ধরে আছেন তা ছেড়ে দিন।** এর বিপরীত বলা যেকোনো উপকরণ সমন্বয় ছাড়াই আমদানি করা।

**৫. সার্কিট সীমা পালানোর পথও আটকায়।** ধরুন স্কুইজ ঠিক আপনার আশা মতোই ওপরের দিকে নিষ্পত্তি হলো। চলাচলটি দৈনিক ব্যান্ডে সীমাবদ্ধ, তাই তা এক সেশনের বদলে কয়েক সেশনে ঘটে, আর ঐ সেশনগুলোর প্রতিটি উপরের সীমায় খুলতে পারে যেখানে কোনো আকার পাওয়া যায় না। **সংকেতটি একই সঙ্গে সঠিক ও অলেনদেনযোগ্য হতে পারে**, আর এই শ্রেণিটি ধ্রুপদী সাহিত্যে নেই।

### যা রাখবেন

রহস্যময়তা ছেঁটে ফেললে তিনটি জিনিস থাকে, তিনটিই বাস্তব:

১. **"অস্বাভাবিক ক্লোজ"-এর সবচেয়ে ভালো সাধারণীকৃত পরিমাপ %b**, অসিলেটররা যেখানে স্যাচুরেট করে সেখানে এটি সীমাহীন, আর এটি শেয়ারে শেয়ারে ও দামের স্তরে স্তরে তুলনীয়।
২. **ব্যান্ডউইডথ পার্সেন্টাইল একটি প্রকৃত রেজিম নির্দেশক।** বিক্ষেপ গড়মুখী। খুব শান্ত সময় সত্যিই নিষ্পত্তি হয়।
৩. **কেন্দ্র রেখা একটি কুড়ি-পর্বের SMA এবং অধ্যায় ৩৪-এর ট্রেন্ড-তথ্য বহন করে**, অধ্যায় ৩৪-এর পিছিয়ে থাকা ও অধ্যায় ৩৪-এর হুইপস আচরণসহ, তার বেশিও নয় কমও নয়।

বাকি সব — ৯৫% দাবি, ব্যান্ড-স্পর্শে অতিক্রীত, সাপোর্ট হিসেবে ব্যান্ড — **হয় মিথ্যা, নয়তো কেবল এমন একটি রেজিমের ভেতরে সত্য যা নির্দেশকটি নিজেই শনাক্ত করতে পারে না।**

অধ্যায় ৩৯ ভোলাটিলিটির প্রশ্নটি নিয়ে তার সঠিক উত্তর দেয়, এমন একটি উপাদান দিয়ে যাতে সেই গ্যাপ ও ইন্ট্রাডে পরিসর অন্তর্ভুক্ত যা এই অধ্যায়ের স্ট্যান্ডার্ড ডেভিয়েশন দেখতে পায় না।`,
    },

    simple: {
      en: `Think about a dog on a long elastic lead, walking with its owner.

The owner walks at a steady pace down the street. The dog runs ahead, drops behind, wanders to the side, but the elastic keeps pulling it back toward the owner. **If you wanted to describe where the dog is, you would not give its address. You would say how far ahead of the owner it is, and whether that is unusual for this dog.**

Bollinger Bands do exactly that. **The owner is the twenty-day average. The elastic is the standard deviation. The bands are the two ends of the elastic.**

### The bands are made of the price, not laid on top of it

Here is the thing that trips everyone up.

The lead is not a fixed length. **On a calm day the dog stays close and the elastic is short. On an exciting day the dog charges around and the elastic stretches.** The band width is not something you set — it is measured from how the dog has been behaving for the last twenty days.

So when you hear someone say "the bands are widening," what actually happened is: **the last twenty closing prices have become more scattered.** Nothing was done to the bands. They reported.

### Why the numbers are just descriptions

Take twenty closing prices. Find their average. Then ask, on average, how far each day's close sat from that average. That distance is the standard deviation.

- If the stock closed at 62.10, 62.00, 62.20, 62.10 every day, the average distance is tiny and the bands hug the line.
- If it closed at 55, 68, 59, 66, the average distance is large and the bands are far apart.

**That is all $\\sigma$ is. It is not a forecast, and it is not a probability.** It describes twenty numbers that have already happened.

### The two readings worth knowing

**%b** answers "where is the close inside the bands?" as a simple fraction:

- **0.5** means dead centre, on the average.
- **1.0** means exactly on the upper band.
- **0.0** means exactly on the lower band.
- **Above 1.0 means outside the upper band** — and yes, it can happen, and in the worked example it prints 2.36.

**Bandwidth** answers "how far apart are the bands, as a percentage of the price?" A small number means a quiet stock right now. A big number means a wild one.

### The mistake that costs the most money

You will hear this everywhere: *price touched the upper band, so it is overbought — sell.*

**That is wrong, and it is wrong in the way that hurts most: it makes you sell on the first day of a big move.**

Go back to the dog. If the dog suddenly starts sprinting, it hits the end of the lead — and then the owner starts running too. **The lead does not stop the dog. The whole system moves.** A stock in a real trend closes above its upper band day after day, because each strong close drags the average up and stretches the elastic. In the example, price closes outside the band on day twenty-one and is *still* outside on day twenty-two even after the bands widen by 87% trying to catch up.

**A close outside the upper band is evidence of strength.** Only inside a sideways range does it mean anything like "stretched" — and the indicator does not tell you which one you are in.

### And the bands are not support and resistance

Chapter 30 said a level exists because real people are standing there with real orders. **Nobody is standing at the Bollinger Band.** It is a number your computer worked out this morning from the last twenty closes, and it will be a different number tomorrow. Do not put your stop on it.

### The Bangladesh problem, and it is a big one

Here is a rule to remember: **if a stock's price does not move at all, the bands collapse to zero width, and every "squeeze scanner" in the world says it is about to explode.**

During the floor-price period, many DSE shares closed at exactly the same price for weeks because they were not allowed to go lower. Twenty identical closes means zero scatter, means zero standard deviation, means **bands with zero width — the tightest squeeze mathematically possible.**

But there was no squeeze. There was no market. **A scanner run over that period hands you a ranked list of the deadest shares on the exchange and calls them your best breakout candidates.**

Two more Bangladesh problems:

- **Circuit limits chop off the big days.** A share can only move so far in one session. So on the days when the market is genuinely going wild, the closing price is not allowed to record it, and the bands come out too narrow.
- **A thin close poisons everything.** Two hundred shares changing hands at a strange price in the last minute counts exactly as much as a huge trading day — and because the maths squares the distances, **one silly close does not nudge the bands, it takes them over.**`,
      bn: `একটি লম্বা ইলাস্টিক দড়িতে বাঁধা কুকুরের কথা ভাবুন, মালিকের সঙ্গে হাঁটছে।

মালিক রাস্তা ধরে সমান গতিতে হাঁটছেন। কুকুরটি সামনে দৌড়ায়, পিছিয়ে পড়ে, পাশে ঘোরে, কিন্তু ইলাস্টিকটি তাকে মালিকের দিকে টেনে আনে। **কুকুরটি কোথায় তা বর্ণনা করতে চাইলে আপনি তার ঠিকানা দেবেন না। বলবেন সে মালিকের কতটা সামনে, আর এই কুকুরের জন্য তা অস্বাভাবিক কি না।**

বলিঞ্জার ব্যান্ড ঠিক তাই করে। **মালিক হলেন কুড়ি-দিনের গড়। ইলাস্টিক হলো স্ট্যান্ডার্ড ডেভিয়েশন। ব্যান্ড দুটি ইলাস্টিকের দুই প্রান্ত।**

### ব্যান্ড দাম দিয়েই তৈরি, দামের ওপর বসানো নয়

এখানেই সবাই হোঁচট খান।

দড়িটির দৈর্ঘ্য নির্দিষ্ট নয়। **শান্ত দিনে কুকুরটি কাছে থাকে ও ইলাস্টিক ছোট। উত্তেজনার দিনে সে ছুটোছুটি করে ও ইলাস্টিক টান টান হয়।** ব্যান্ডের প্রস্থ আপনার ঠিক করা কিছু নয় — এটি মাপা হয় গত কুড়ি দিনে কুকুরটি কেমন আচরণ করেছে তা থেকে।

তাই কেউ যখন বলেন "ব্যান্ড চওড়া হচ্ছে," আসলে যা ঘটেছে তা হলো: **শেষ কুড়িটি ক্লোজিং দাম বেশি ছড়িয়ে পড়েছে।** ব্যান্ডের সঙ্গে কিছুই করা হয়নি। ব্যান্ড কেবল জানিয়েছে।

### সংখ্যাগুলো কেন কেবল বর্ণনা

কুড়িটি ক্লোজিং দাম নিন। তাদের গড় বের করুন। তারপর জিজ্ঞেস করুন, গড়ে, প্রতিদিনের ক্লোজ ঐ গড় থেকে কতটা দূরে ছিল। ঐ দূরত্বই স্ট্যান্ডার্ড ডেভিয়েশন।

- শেয়ারটি প্রতিদিন ৬২.১০, ৬২.০০, ৬২.২০, ৬২.১০-এ বন্ধ হলে গড় দূরত্ব সামান্য আর ব্যান্ড রেখাটিকে জড়িয়ে থাকে।
- ৫৫, ৬৮, ৫৯, ৬৬-তে বন্ধ হলে গড় দূরত্ব বড় আর ব্যান্ড দুটি অনেক দূরে দূরে।

**$\\sigma$ এটুকুই। এটি পূর্বাভাস নয়, সম্ভাব্যতাও নয়।** এটি ইতিমধ্যে ঘটে যাওয়া কুড়িটি সংখ্যার বর্ণনা।

### জানার মতো দুটি পাঠ

**%b** উত্তর দেয় "ব্যান্ডের ভেতরে ক্লোজটি কোথায়?" — একটি সরল ভগ্নাংশে:

- **০.৫** মানে ঠিক মাঝখানে, গড়ের ওপর।
- **১.০** মানে ঠিক উপরের ব্যান্ডে।
- **০.০** মানে ঠিক নিচের ব্যান্ডে।
- **১.০-এর ওপরে মানে উপরের ব্যান্ডের বাইরে** — হ্যাঁ, তা ঘটতে পারে, আর উদাহরণে তা ২.৩৬ ছাপে।

**ব্যান্ডউইডথ** উত্তর দেয় "দামের শতাংশ হিসেবে ব্যান্ড দুটি কতটা দূরে?" ছোট সংখ্যা মানে এখন শেয়ারটি শান্ত। বড় সংখ্যা মানে উত্তাল।

### যে ভুলটি সবচেয়ে বেশি টাকা খায়

সর্বত্র এটি শুনবেন: *দাম উপরের ব্যান্ড ছুঁয়েছে, তাই অতিক্রীত — বিক্রি করুন।*

**এটি ভুল, আর এমনভাবে ভুল যা সবচেয়ে বেশি ব্যথা দেয়: এটি আপনাকে একটি বড় চলাচলের প্রথম দিনেই বিক্রি করায়।**

কুকুরের কাছে ফিরুন। কুকুরটি হঠাৎ ছুটতে শুরু করলে সে দড়ির শেষ প্রান্তে ঠেকে — আর তারপর মালিকও দৌড়াতে শুরু করেন। **দড়ি কুকুরকে থামায় না। গোটা ব্যবস্থাটিই এগিয়ে যায়।** প্রকৃত ট্রেন্ডে থাকা শেয়ার দিনের পর দিন উপরের ব্যান্ডের ওপরে বন্ধ হয়, কারণ প্রতিটি শক্তিশালী ক্লোজ গড়কে ওপরে টানে ও ইলাস্টিক টান টান করে। উদাহরণে একুশতম দিনে দাম ব্যান্ডের বাইরে বন্ধ হয়, আর ব্যান্ড ৮৭% চওড়া হয়ে ধরার চেষ্টা করার পরেও বাইশতম দিনে *এখনো* বাইরে।

**উপরের ব্যান্ডের বাইরে একটি ক্লোজ শক্তির প্রমাণ।** কেবল পাশাপাশি চলা রেঞ্জের ভেতরেই এটি "টান টান" জাতীয় কিছু বোঝায় — আর আপনি কোনটিতে আছেন তা নির্দেশকটি বলে না।

### আর ব্যান্ড সাপোর্ট-রেজিস্ট্যান্স নয়

অধ্যায় ৩০ বলেছিল একটি লেভেলের অস্তিত্ব কারণ সেখানে প্রকৃত মানুষ প্রকৃত অর্ডার নিয়ে দাঁড়িয়ে আছেন। **বলিঞ্জার ব্যান্ডে কেউ দাঁড়িয়ে নেই।** এটি এমন একটি সংখ্যা যা আপনার কম্পিউটার আজ সকালে শেষ কুড়িটি ক্লোজ থেকে বের করেছে, আর আগামীকাল তা অন্য সংখ্যা হবে। এর ওপর স্টপ বসাবেন না।

### বাংলাদেশের সমস্যা, আর তা বড়

মনে রাখার মতো একটি নিয়ম: **শেয়ারের দাম যদি একেবারেই না নড়ে, ব্যান্ডের প্রস্থ শূন্যে নেমে আসে, আর দুনিয়ার প্রতিটি "স্কুইজ স্ক্যানার" বলে এটি এখনই বিস্ফোরিত হবে।**

ফ্লোর-প্রাইসের সময়ে ডিএসই-র বহু শেয়ার সপ্তাহের পর সপ্তাহ ঠিক একই দামে বন্ধ হয়েছে কারণ তাদের নিচে নামার অনুমতি ছিল না। কুড়িটি অভিন্ন ক্লোজ মানে শূন্য বিক্ষেপ, মানে শূন্য স্ট্যান্ডার্ড ডেভিয়েশন, মানে **শূন্য প্রস্থের ব্যান্ড — গাণিতিকভাবে সম্ভব সবচেয়ে আঁটসাঁট স্কুইজ।**

কিন্তু সেখানে কোনো স্কুইজ ছিল না। কোনো বাজারই ছিল না। **ঐ সময়কালজুড়ে চালানো একটি স্ক্যানার আপনাকে এক্সচেঞ্জের সবচেয়ে নিষ্প্রাণ শেয়ারগুলোর ক্রমতালিকা ধরিয়ে দেয় আর সেগুলোকে আপনার সেরা ব্রেকআউট প্রার্থী বলে।**

আরও দুটি বাংলাদেশি সমস্যা:

- **সার্কিট সীমা বড় দিনগুলো কেটে ফেলে।** একটি শেয়ার এক সেশনে নির্দিষ্ট দূরত্বের বেশি নড়তে পারে না। তাই যেসব দিনে বাজার সত্যিই উন্মত্ত, ক্লোজিং দামকে তা লিপিবদ্ধ করতে দেওয়া হয় না, আর ব্যান্ড বড্ড সরু বেরোয়।
- **একটি পাতলা ক্লোজ সবকিছু বিষিয়ে দেয়।** শেষ মিনিটে অদ্ভুত দামে দুইশো শেয়ারের হাতবদল একটি বিশাল লেনদেনের দিনের ঠিক সমান গোনা হয় — আর যেহেতু হিসাবটি দূরত্ব বর্গ করে, **একটি বোকা ক্লোজ ব্যান্ডকে ঠেলা দেয় না, দখল করে নেয়।**`,
    },

    example: {
      en: `### MEGHNAPLY: a squeeze, a break, and everything the tip groups got wrong

MEGHNAPLY is a mid-cap DSE plywood and board manufacturer used illustratively here. **Every figure below is constructed, not historical**, and chosen so the arithmetic is checkable by hand. Twenty-day average volume is 900,000 shares; ATR(14) is BDT 1.05; the price is around BDT 62, so a full day's turnover is roughly **BDT 5.589 crore**.

The last twenty closes, in order:

| Day | Close | $P_i - \\bar{P}$ | $(P_i - \\bar{P})^2$ | %b |
|---|---|---|---|---|
| 1 | 61.80 | −0.30 | 0.09 | 0.2348 |
| 2 | 62.40 | +0.30 | 0.09 | 0.7652 |
| 3 | 61.50 | −0.60 | 0.36 | **−0.0303** |
| 4 | 62.10 | 0.00 | 0.00 | 0.5000 |
| 5 | 62.70 | +0.60 | 0.36 | **1.0303** |
| 6 | 61.90 | −0.20 | 0.04 | 0.3232 |
| 7 | 62.30 | +0.20 | 0.04 | 0.6768 |
| 8 | 62.00 | −0.10 | 0.01 | 0.4116 |
| 9 | 61.70 | −0.40 | 0.16 | 0.1464 |
| 10 | 62.20 | +0.10 | 0.01 | 0.5884 |
| 11 | 62.50 | +0.40 | 0.16 | 0.8536 |
| 12 | 62.10 | 0.00 | 0.00 | 0.5000 |
| 13 | 61.90 | −0.20 | 0.04 | 0.3232 |
| 14 | 62.30 | +0.20 | 0.04 | 0.6768 |
| 15 | 62.00 | −0.10 | 0.01 | 0.4116 |
| 16 | 62.20 | +0.10 | 0.01 | 0.5884 |
| 17 | 61.80 | −0.30 | 0.09 | 0.2348 |
| 18 | 62.10 | 0.00 | 0.00 | 0.5000 |
| 19 | 62.40 | +0.30 | 0.09 | 0.7652 |
| 20 | 62.10 | 0.00 | 0.00 | 0.5000 |
| | **Σ = 1,242.00** | **Σ = 0.00** | **Σ = 1.60** | |

### The bands

$$\\bar{P} = \\frac{1{,}242.00}{20} = 62.10$$

$$\\sigma^2 = \\frac{1.60}{20} = 0.08 \\qquad \\sigma = \\sqrt{0.08} = 0.282843$$

$$\\text{Upper} = 62.10 + 2(0.282843) = 62.6657, \\qquad \\text{Lower} = 62.10 - 2(0.282843) = 61.5343$$

**The band is 1.1314 taka wide, on a 62-taka stock.** That is the entire story of the setup, and the number to hold on to.

### The denominator, priced

Suppose you had built this in Excel and reached for \`STDEV.S\`:

$$s = \\sqrt{\\frac{1.60}{19}} = \\sqrt{0.084211} = 0.290191$$

| | Population ($n$) — correct | Sample ($n-1$) |
|---|---|---|
| $\\sigma$ | 0.282843 | 0.290191 |
| Upper | **62.6657** | 62.6804 |
| Lower | **61.5343** | 61.5196 |
| Bandwidth | **1.8219%** | 1.8692% |
| Day 5 %b | **1.0303** | 1.0043 |

**The band edge moves by under one and a half paisa. The bandwidth is overstated by 2.60%. And day 5's close goes from "outside the band" to "on the band."**

That last row is the one to stare at. **A reading of 1.0303 is a genuine excursion. A reading of 1.0043 rounds to 1.00 on almost every chart package and reads as a touch.** The error is invisible on the price chart and changes the classification of the event.

### Reading the bands honestly

**Count the closes inside the band. Eighteen of twenty — exactly 90%.** Not 95.45%. Day 3 closed at 61.50, below the lower band; day 5 closed at 62.70, above the upper. **Two exceedances in twenty sessions in a stock that is doing absolutely nothing.**

Now notice what happened after each. Day 3 printed %b of −0.0303 — outside the lower band, which every textbook calls oversold. **The next close was 62.10, straight back to the mean.** Day 5 printed 1.0303 — outside the upper band, textbook overbought. **The next close was 61.90, also straight back toward the mean.** Inside this range, the mean-reversion reading worked both times.

**Hold that thought, because it is about to stop working, and nothing in the indicator will warn you.**

### The squeeze

$$\\text{Bandwidth} = \\frac{62.6657 - 61.5343}{62.10} = \\frac{1.1314}{62.10} = 1.8219\\%$$

On its own that number means nothing. **Rank it.** Over MEGHNAPLY's previous 125 sessions the median bandwidth was 6.42%, and 1.8219% sits at roughly the **4th percentile** — well inside the bottom decile.

$$\\frac{1.8219}{6.42} = 0.284$$

**The bands are running at 28% of this stock's own normal width.** That is a genuine squeeze, and it says one thing only: **dispersion is abnormally low, and dispersion mean-reverts.** It does not say up. It does not say when.

Every tip group on the market read the same chart and published the same two conclusions, both wrong: *"tight bands, buy the breakout"* — which is a direction the indicator never gave — and *"it hit the upper band on day 5, take profit"* — which is a regime call the indicator cannot make.

### The break: day 21

| | Value |
|---|---|
| Open | 62.30 |
| High | 64.60 |
| Low | 62.30 |
| **Close** | **64.20** |
| Volume | 2,790,000 (**3.10× ADV**) |

First, measure it against the bands **as they stood before the session**:

$$\\%b = \\frac{64.20 - 61.5343}{62.6657 - 61.5343} = \\frac{2.6657}{1.1314} = 2.3562$$

**A %b of 2.3562 means the close is more than one full band-width beyond the upper band.** Look at what that reading does that no bounded oscillator can. RSI would print somewhere in the nineties on both this day and a mild 62.80 close; it saturates. **%b keeps counting, and 2.3562 against 1.0303 is a genuinely different statement.**

### Now recompute, and watch the bands chase the price

Day 1's close of 61.80 drops out of the window; 64.20 enters.

$$\\bar{P}_{\\text{new}} = 62.22, \\qquad \\sum(P_i - \\bar{P})^2 = 5.632, \\qquad \\sigma_{\\text{new}} = \\sqrt{\\frac{5.632}{20}} = 0.530660$$

$$\\text{Upper} = 63.2813, \\qquad \\text{Lower} = 61.1587, \\qquad \\text{Bandwidth} = 3.4115\\%$$

**The sum of squared deviations went from 1.60 to 5.632 — it more than tripled on one close.** Bandwidth went from 1.8219% to 3.4115%, an expansion of **1.87×, in a single session.**

**This is the self-referential property doing its work in the open.** The move that broke the band also built the new band. And after all that widening, %b against the *new* bands is still:

$$\\%b = \\frac{64.20 - 61.1587}{63.2813 - 61.1587} = \\frac{3.0413}{2.1226} = 1.4328$$

**Still outside.** The band widened by 87% and could not catch the price.

### Compare against ATR over the same session

True range on day 21, with previous close 62.10:

$$TR = \\max(64.60 - 62.30,\\; |64.60 - 62.10|,\\; |62.30 - 62.10|) = \\max(2.30,\\; 2.50,\\; 0.20) = 2.50$$

$$ATR_{\\text{new}} = \\frac{13(1.05) + 2.50}{14} = \\frac{16.15}{14} = 1.1536$$

| Measure | Before | After | Change |
|---|---|---|---|
| Band width (taka) | 1.1314 | 2.1226 | **+87.6%** |
| ATR | 1.05 | 1.1536 | **+9.86%** |

**Same session, same stock, two volatility measures, and one moved nine times as far as the other.** Neither is broken. $\\sigma$ squares deviations and re-weights all twenty of them around a shifted mean; Wilder's ATR folds one true range into a fourteen-period average. **If your position size keys off band width, it just fell by nearly half on a day you got the direction right.** This is why Chapter 49 sizes on ATR.

### Day 22: the walk up the band

Close 65.10. Recompute again:

$$\\bar{P} = 62.355, \\qquad \\sigma = 0.822481, \\qquad \\text{Upper} = 64.0000, \\qquad \\text{Lower} = 60.71$$

$$\\%b = \\frac{65.10 - 60.71}{64.0000 - 60.71} = \\frac{4.39}{3.29} = 1.3344$$

**Two consecutive closes outside the upper band, with bandwidth now at 5.2761% — nearly triple the squeeze reading.**

This is the walk. **Anyone who sold day 21 on "it touched the upper band, it is overbought" sold at 64.20 and watched 65.10 print the next day**, with the indicator they were using still saying "outside the band" the whole way. The signal never changed. The regime did, and the indicator has no field for regime.

### The trade, priced properly

Do not use the bands for the stop. Use the centre line, which is a trend statement:

$$E = 64.20, \\qquad X = 62.22 \\text{ (the 20-SMA)}, \\qquad \\text{Risk} = 1.98$$

Target at the prior swing structure from Chapter 30 at 68.50:

$$\\text{Reward} = 68.50 - 64.20 = 4.30, \\qquad R{:}R = \\frac{4.30}{1.98} = 2.1717$$

$$p^{*} = \\frac{1}{1 + 2.1717} = 0.3153 = 31.53\\%$$

**A 2.17:1 structure needing 31.53% accuracy.** Now price the alternative — waiting one more session for "confirmation" and buying day 22's close at 65.10, with the same 62.22 stop:

| | Buy the break (day 21) | Wait one session (day 22) |
|---|---|---|
| Entry | **64.20** | 65.10 |
| Stop (20-SMA) | 62.22 | 62.22 |
| Risk | **1.98** | 2.88 |
| Reward to 68.50 | **4.30** | 3.40 |
| $R{:}R$ | **2.1717** | 1.1806 |
| Break-even win rate | **31.53%** | **45.86%** |

**One session of hesitation moves the required hit rate from 31.53% to 45.86% on the identical thesis.** Note this is the *opposite* lesson to Chapter 30's, where waiting was the disciplined move. **The difference is where the invalidation sits.** In Chapter 30 the stop was anchored to a structure that did not move, so waiting for a better entry shortened the risk. Here the stop is the SMA, which is dragging *upward* far slower than price is rising, so every session of delay widens the risk. **The rule is not "wait" or "do not wait" — it is "measure the distance to your invalidation before you act."**

### The DSE overlay, without which none of the above is safe

Four checks, in order, before this analysis counts:

| Check | On MEGHNAPLY |
|---|---|
| **Did any of the 20 closes print at a circuit limit?** | At a 62.10 reference with a 10% band, permitted closes run 55.89 to 68.31. If a close was locked at the band, it is the edge of the ruleset, not a price — and $\\sigma$ is understated. |
| **Does the window overlap a floor-price period?** | If closes are identical for a stretch, $\\sum(P_i-\\bar{P})^2 \\to 0$, $\\sigma \\to 0$, bandwidth $\\to 0\\%$ and %b becomes $0/0$. **Delete the window; do not "handle" it.** |
| **Did every close trade meaningful value?** | Deviations are squared. One thin close 5% away contributes 25× the variance of a 1% deviation. At 900,000 ADV the day's turnover is BDT 5.589 crore — check that the *closing* prints, not just the day, carried size. |
| **Is the upper-band signal actionable?** | No. With no reliable retail short side, day 5's 1.0303 reading is a do-not-buy and nothing more. Only lower-band and squeeze-breakout signals survive as entries. |

And a fifth that is specific to the break: **day 21 moved 2.10 taka, or 3.4%, comfortably inside a 10% band.** Had the move been larger, the close would have been capped, %b would have been truncated, and the bands would have under-recorded the very event you were trying to detect. **The squeeze can resolve correctly and remain untradeable**, because a limit-up session with no offers is a signal you cannot fill.`,
      bn: `### MEGHNAPLY: একটি স্কুইজ, একটি ব্রেক, আর টিপ গ্রুপগুলো যা যা ভুল বুঝল

MEGHNAPLY এখানে দৃষ্টান্তমূলকভাবে ব্যবহৃত একটি মাঝারি আকারের ডিএসই প্লাইউড ও বোর্ড প্রস্তুতকারক। **নিচের প্রতিটি সংখ্যা নির্মিত, ঐতিহাসিক নয়**, আর এমনভাবে বাছা যাতে পাটিগণিত হাতে যাচাই করা যায়। কুড়ি-দিনের গড় ভলিউম ৯,০০,০০০ শেয়ার; ATR(১৪) ১.০৫ টাকা; দাম প্রায় ৬২ টাকা, তাই পুরো এক দিনের টার্নওভার মোটামুটি **৫.৫৮৯ কোটি টাকা**।

শেষ কুড়িটি ক্লোজ, ক্রমানুসারে:

| দিন | ক্লোজ | $P_i - \\bar{P}$ | $(P_i - \\bar{P})^2$ | %b |
|---|---|---|---|---|
| ১ | ৬১.৮০ | −০.৩০ | ০.০৯ | ০.২৩৪৮ |
| ২ | ৬২.৪০ | +০.৩০ | ০.০৯ | ০.৭৬৫২ |
| ৩ | ৬১.৫০ | −০.৬০ | ০.৩৬ | **−০.০৩০৩** |
| ৪ | ৬২.১০ | ০.০০ | ০.০০ | ০.৫০০০ |
| ৫ | ৬২.৭০ | +০.৬০ | ০.৩৬ | **১.০৩০৩** |
| ৬ | ৬১.৯০ | −০.২০ | ০.০৪ | ০.৩২৩২ |
| ৭ | ৬২.৩০ | +০.২০ | ০.০৪ | ০.৬৭৬৮ |
| ৮ | ৬২.০০ | −০.১০ | ০.০১ | ০.৪১১৬ |
| ৯ | ৬১.৭০ | −০.৪০ | ০.১৬ | ০.১৪৬৪ |
| ১০ | ৬২.২০ | +০.১০ | ০.০১ | ০.৫৮৮৪ |
| ১১ | ৬২.৫০ | +০.৪০ | ০.১৬ | ০.৮৫৩৬ |
| ১২ | ৬২.১০ | ০.০০ | ০.০০ | ০.৫০০০ |
| ১৩ | ৬১.৯০ | −০.২০ | ০.০৪ | ০.৩২৩২ |
| ১৪ | ৬২.৩০ | +০.২০ | ০.০৪ | ০.৬৭৬৮ |
| ১৫ | ৬২.০০ | −০.১০ | ০.০১ | ০.৪১১৬ |
| ১৬ | ৬২.২০ | +০.১০ | ০.০১ | ০.৫৮৮৪ |
| ১৭ | ৬১.৮০ | −০.৩০ | ০.০৯ | ০.২৩৪৮ |
| ১৮ | ৬২.১০ | ০.০০ | ০.০০ | ০.৫০০০ |
| ১৯ | ৬২.৪০ | +০.৩০ | ০.০৯ | ০.৭৬৫২ |
| ২০ | ৬২.১০ | ০.০০ | ০.০০ | ০.৫০০০ |
| | **Σ = ১,২৪২.০০** | **Σ = ০.০০** | **Σ = ১.৬০** | |

### ব্যান্ড

$$\\bar{P} = \\frac{1{,}242.00}{20} = 62.10$$

$$\\sigma^2 = \\frac{1.60}{20} = 0.08 \\qquad \\sigma = \\sqrt{0.08} = 0.282843$$

$$\\text{Upper} = 62.10 + 2(0.282843) = 62.6657, \\qquad \\text{Lower} = 62.10 - 2(0.282843) = 61.5343$$

**৬২ টাকার একটি শেয়ারে ব্যান্ডটি ১.১৩১৪ টাকা চওড়া।** সেটআপের পুরো গল্পটি এটিই, আর এই সংখ্যাটিই ধরে রাখার।

### হর, দাম ধরে

ধরুন আপনি এটি এক্সেলে বানিয়েছিলেন আর \`STDEV.S\`-এ হাত দিয়েছিলেন:

$$s = \\sqrt{\\frac{1.60}{19}} = \\sqrt{0.084211} = 0.290191$$

| | পপুলেশন ($n$) — সঠিক | স্যাম্পল ($n-1$) |
|---|---|---|
| $\\sigma$ | ০.২৮২৮৪৩ | ০.২৯০১৯১ |
| উপরের | **৬২.৬৬৫৭** | ৬২.৬৮০৪ |
| নিচের | **৬১.৫৩৪৩** | ৬১.৫১৯৬ |
| ব্যান্ডউইডথ | **১.৮২১৯%** | ১.৮৬৯২% |
| ৫ম দিনের %b | **১.০৩০৩** | ১.০০৪৩ |

**ব্যান্ডের প্রান্ত নড়ে দেড় পয়সারও কম। ব্যান্ডউইডথ ২.৬০% বেশি দেখানো হয়। আর ৫ম দিনের ক্লোজ "ব্যান্ডের বাইরে" থেকে "ব্যান্ডের ওপরে" হয়ে যায়।**

শেষ সারিটির দিকেই তাকিয়ে থাকুন। **১.০৩০৩ পাঠ একটি প্রকৃত বহির্গমন। ১.০০৪৩ পাঠ প্রায় প্রতিটি চার্ট প্যাকেজে ১.০০-তে গোল হয় ও একটি স্পর্শ হিসেবে পড়ে।** ভুলটি প্রাইস চার্টে অদৃশ্য আর ঘটনাটির শ্রেণিবিভাজন বদলে দেয়।

### ব্যান্ড সৎভাবে পড়া

**ব্যান্ডের ভেতরের ক্লোজ গুনুন। কুড়িটির আঠারোটি — ঠিক ৯০%।** ৯৫.৪৫% নয়। ৩য় দিন ৬১.৫০-তে বন্ধ হয়েছে, নিচের ব্যান্ডের নিচে; ৫ম দিন ৬২.৭০-তে, উপরের ব্যান্ডের ওপরে। **একেবারেই কিছু না করা একটি শেয়ারে কুড়ি সেশনে দুটি অতিক্রমণ।**

এবার লক্ষ করুন প্রতিটির পরে কী হলো। ৩য় দিনের %b ছিল −০.০৩০৩ — নিচের ব্যান্ডের বাইরে, যাকে প্রতিটি পাঠ্যবই অতিবিক্রীত বলে। **পরের ক্লোজ ছিল ৬২.১০, সোজা গড়ে ফেরত।** ৫ম দিনের %b ছিল ১.০৩০৩ — উপরের ব্যান্ডের বাইরে, পাঠ্যবই মতে অতিক্রীত। **পরের ক্লোজ ছিল ৬১.৯০, তাও সোজা গড়ের দিকে।** এই রেঞ্জের ভেতরে গড়মুখী পাঠটি দুবারই কাজ করেছে।

**কথাটি মনে রাখুন, কারণ এটি এখনই কাজ করা বন্ধ করবে, আর নির্দেশকের কিছুই আপনাকে সতর্ক করবে না।**

### স্কুইজ

$$\\text{Bandwidth} = \\frac{62.6657 - 61.5343}{62.10} = \\frac{1.1314}{62.10} = 1.8219\\%$$

একা এই সংখ্যাটির কোনো মানে নেই। **একে ক্রম দিন।** MEGHNAPLY-র আগের ১২৫টি সেশনে মধ্যক ব্যান্ডউইডথ ছিল ৬.৪২%, আর ১.৮২১৯% বসে আছে মোটামুটি **৪র্থ পার্সেন্টাইলে** — নিচের দশমাংশের ভালোভাবেই ভেতরে।

$$\\frac{1.8219}{6.42} = 0.284$$

**ব্যান্ড চলছে এই শেয়ারের নিজের স্বাভাবিক প্রস্থের ২৮%-এ।** এটি একটি প্রকৃত স্কুইজ, আর এটি একটিই কথা বলে: **বিক্ষেপ অস্বাভাবিকভাবে কম, আর বিক্ষেপ গড়মুখী।** এটি "ওপরে" বলে না। কখন তাও বলে না।

বাজারের প্রতিটি টিপ গ্রুপ একই চার্ট পড়ে একই দুটি সিদ্ধান্ত প্রকাশ করেছে, দুটিই ভুল: *"আঁটসাঁট ব্যান্ড, ব্রেকআউট কিনুন"* — যে দিকটি নির্দেশক কখনো দেয়নি — আর *"৫ম দিনে উপরের ব্যান্ড ছুঁয়েছে, লাভ তুলে নিন"* — যা এমন একটি রেজিম-সিদ্ধান্ত যা নির্দেশক নিতে পারে না।

### ব্রেক: ২১তম দিন

| | মান |
|---|---|
| ওপেন | ৬২.৩০ |
| হাই | ৬৪.৬০ |
| লো | ৬২.৩০ |
| **ক্লোজ** | **৬৪.২০** |
| ভলিউম | ২৭,৯০,০০০ (**৩.১০× ADV**) |

প্রথমে **সেশনের আগে ব্যান্ড যেখানে ছিল** তার সাপেক্ষে মাপুন:

$$\\%b = \\frac{64.20 - 61.5343}{62.6657 - 61.5343} = \\frac{2.6657}{1.1314} = 2.3562$$

**২.৩৫৬২ %b মানে ক্লোজটি উপরের ব্যান্ডের বাইরে পুরো এক ব্যান্ড-প্রস্থেরও বেশি।** দেখুন ঐ পাঠটি এমন কী করছে যা কোনো সীমাবদ্ধ অসিলেটর পারে না। RSI এই দিনে ও একটি মৃদু ৬২.৮০ ক্লোজে দুটিতেই নব্বইয়ের ঘরে কোথাও ছাপত; এটি স্যাচুরেট করে। **%b গোনা চালিয়ে যায়, আর ১.০৩০৩-এর বিপরীতে ২.৩৫৬২ সত্যিই ভিন্ন একটি বক্তব্য।**

### এবার পুনর্গণনা করুন, আর দেখুন ব্যান্ড দামের পিছু ধাওয়া করছে

১ম দিনের ৬১.৮০ ক্লোজ জানালা থেকে বেরিয়ে যায়; ৬৪.২০ ঢোকে।

$$\\bar{P}_{\\text{new}} = 62.22, \\qquad \\sum(P_i - \\bar{P})^2 = 5.632, \\qquad \\sigma_{\\text{new}} = \\sqrt{\\frac{5.632}{20}} = 0.530660$$

$$\\text{Upper} = 63.2813, \\qquad \\text{Lower} = 61.1587, \\qquad \\text{Bandwidth} = 3.4115\\%$$

**বর্গ বিচ্যুতির যোগফল ১.৬০ থেকে ৫.৬৩২ হয়েছে — একটি ক্লোজে তিন গুণেরও বেশি।** ব্যান্ডউইডথ ১.৮২১৯% থেকে ৩.৪১১৫%, অর্থাৎ **এক সেশনে ১.৮৭× বিস্তার।**

**এখানেই আত্ম-নির্দেশক ধর্মটি প্রকাশ্যে কাজ করছে।** যে চলাচল ব্যান্ড ভেঙেছে সেটিই নতুন ব্যান্ড বানিয়েছে। আর এত চওড়া হওয়ার পরেও *নতুন* ব্যান্ডের সাপেক্ষে %b এখনো:

$$\\%b = \\frac{64.20 - 61.1587}{63.2813 - 61.1587} = \\frac{3.0413}{2.1226} = 1.4328$$

**এখনো বাইরে।** ব্যান্ড ৮৭% চওড়া হয়েও দামকে ধরতে পারেনি।

### ঐ একই সেশনে ATR-এর সঙ্গে তুলনা

২১তম দিনের true range, আগের ক্লোজ ৬২.১০ ধরে:

$$TR = \\max(64.60 - 62.30,\\; |64.60 - 62.10|,\\; |62.30 - 62.10|) = \\max(2.30,\\; 2.50,\\; 0.20) = 2.50$$

$$ATR_{\\text{new}} = \\frac{13(1.05) + 2.50}{14} = \\frac{16.15}{14} = 1.1536$$

| পরিমাপ | আগে | পরে | পরিবর্তন |
|---|---|---|---|
| ব্যান্ডের প্রস্থ (টাকা) | ১.১৩১৪ | ২.১২২৬ | **+৮৭.৬%** |
| ATR | ১.০৫ | ১.১৫৩৬ | **+৯.৮৬%** |

**একই সেশন, একই শেয়ার, দুটি ভোলাটিলিটি পরিমাপ, আর একটি অন্যটির নয় গুণ দূরে সরেছে।** কোনোটিই ভাঙা নয়। $\\sigma$ বিচ্যুতি বর্গ করে ও সরে যাওয়া গড়ের চারপাশে কুড়িটিকেই নতুন ওজন দেয়; ওয়াইল্ডারের ATR একটি true range-কে চোদ্দ-পর্বের গড়ে ভাঁজ করে। **আপনার অবস্থানের আকার ব্যান্ডের প্রস্থে বাঁধা থাকলে, যেদিন আপনি দিক ঠিক পেয়েছেন সেদিনই তা প্রায় অর্ধেক হয়ে গেল।** এ কারণেই অধ্যায় ৪৯ ATR-এ আকার নির্ধারণ করে।

### ২২তম দিন: ব্যান্ডের ওপর হাঁটা

ক্লোজ ৬৫.১০। আবার পুনর্গণনা:

$$\\bar{P} = 62.355, \\qquad \\sigma = 0.822481, \\qquad \\text{Upper} = 64.0000, \\qquad \\text{Lower} = 60.71$$

$$\\%b = \\frac{65.10 - 60.71}{64.0000 - 60.71} = \\frac{4.39}{3.29} = 1.3344$$

**পরপর দুটি ক্লোজ উপরের ব্যান্ডের বাইরে, আর ব্যান্ডউইডথ এখন ৫.২৭৬১% — স্কুইজ পাঠের প্রায় তিন গুণ।**

এটিই সেই হাঁটা। **যিনি ২১তম দিনে "উপরের ব্যান্ড ছুঁয়েছে, অতিক্রীত" বলে বিক্রি করেছেন তিনি ৬৪.২০-তে বিক্রি করে পরদিন ৬৫.১০ ছাপতে দেখেছেন**, আর তিনি যে নির্দেশক ব্যবহার করছিলেন তা পুরো পথ ধরে "ব্যান্ডের বাইরে"-ই বলছিল। সংকেত কখনো বদলায়নি। রেজিম বদলেছে, আর নির্দেশকের রেজিমের জন্য কোনো ঘর নেই।

### ট্রেড, ঠিকভাবে দাম ধরে

স্টপের জন্য ব্যান্ড ব্যবহার করবেন না। কেন্দ্র রেখা ব্যবহার করুন, যা একটি ট্রেন্ড-বক্তব্য:

$$E = 64.20, \\qquad X = 62.22 \\text{ (২০-SMA)}, \\qquad \\text{Risk} = 1.98$$

অধ্যায় ৩০-এর পূর্ববর্তী সুইং কাঠামোয় লক্ষ্য ৬৮.৫০:

$$\\text{Reward} = 68.50 - 64.20 = 4.30, \\qquad R{:}R = \\frac{4.30}{1.98} = 2.1717$$

$$p^{*} = \\frac{1}{1 + 2.1717} = 0.3153 = 31.53\\%$$

**২.১৭:১ কাঠামো, দরকার ৩১.৫৩% নির্ভুলতা।** এবার বিকল্পটির দাম ধরুন — "নিশ্চিতকরণের" জন্য আরও এক সেশন অপেক্ষা করে ২২তম দিনের ক্লোজ ৬৫.১০-এ কেনা, একই ৬২.২২ স্টপসহ:

| | ব্রেক কেনা (২১তম দিন) | এক সেশন অপেক্ষা (২২তম দিন) |
|---|---|---|
| প্রবেশ | **৬৪.২০** | ৬৫.১০ |
| স্টপ (২০-SMA) | ৬২.২২ | ৬২.২২ |
| ঝুঁকি | **১.৯৮** | ২.৮৮ |
| ৬৮.৫০ পর্যন্ত পুরস্কার | **৪.৩০** | ৩.৪০ |
| $R{:}R$ | **২.১৭১৭** | ১.১৮০৬ |
| ব্রেক-ইভেন উইন রেট | **৩১.৫৩%** | **৪৫.৮৬%** |

**এক সেশনের দ্বিধা অভিন্ন যুক্তিতে প্রয়োজনীয় হিট রেট ৩১.৫৩% থেকে ৪৫.৮৬%-এ নেয়।** লক্ষ করুন এটি অধ্যায় ৩০-এর *বিপরীত* শিক্ষা, যেখানে অপেক্ষাই ছিল শৃঙ্খলিত পদক্ষেপ। **পার্থক্যটি ইনভ্যালিডেশন কোথায় বসে তাতে।** অধ্যায় ৩০-এ স্টপ এমন একটি কাঠামোয় নোঙর করা ছিল যা নড়েনি, তাই ভালো প্রবেশের অপেক্ষা ঝুঁকি ছোট করেছিল। এখানে স্টপ হলো SMA, যা দাম যত দ্রুত উঠছে তার চেয়ে অনেক ধীরে *ওপরে* টানছে, তাই দেরির প্রতিটি সেশন ঝুঁকি চওড়া করে। **নিয়মটি "অপেক্ষা করুন" বা "করবেন না" নয় — নিয়মটি হলো "কাজ করার আগে আপনার ইনভ্যালিডেশন পর্যন্ত দূরত্ব মাপুন।"**

### ডিএসই আবরণ, যা ছাড়া ওপরের কিছুই নিরাপদ নয়

চারটি যাচাই, ক্রমানুসারে, এই বিশ্লেষণ গণ্য হওয়ার আগে:

| যাচাই | MEGHNAPLY-তে |
|---|---|
| **কুড়িটি ক্লোজের কোনোটি কি সার্কিট সীমায় ছেপেছে?** | ৬২.১০ রেফারেন্সে ১০% ব্যান্ডে অনুমোদিত ক্লোজ ৫৫.৮৯ থেকে ৬৮.৩১। কোনো ক্লোজ ব্যান্ডে আটকে থাকলে তা বিধিমালার প্রান্ত, দাম নয় — আর $\\sigma$ কম দেখানো হয়েছে। |
| **জানালাটি কি ফ্লোর-প্রাইসের সময়কালের সঙ্গে মেশে?** | কিছুকাল ক্লোজ অভিন্ন হলে $\\sum(P_i-\\bar{P})^2 \\to 0$, $\\sigma \\to 0$, ব্যান্ডউইডথ $\\to 0\\%$ আর %b হয় $0/0$। **জানালাটি মুছে দিন; একে "সামলানোর" চেষ্টা করবেন না।** |
| **প্রতিটি ক্লোজ কি অর্থবহ মূল্যে লেনদেন হয়েছে?** | বিচ্যুতি বর্গ করা হয়। ৫% দূরের একটি পাতলা ক্লোজ ১% বিচ্যুতির ২৫× ভেদাঙ্ক যোগ করে। ৯,০০,০০০ ADV-তে দিনের টার্নওভার ৫.৫৮৯ কোটি টাকা — দেখুন কেবল দিনটি নয়, *ক্লোজিং* প্রিন্টগুলোতেও আকার ছিল কি না। |
| **উপরের-ব্যান্ড সংকেত কি কার্যকরযোগ্য?** | না। নির্ভরযোগ্য খুচরা শর্ট সাইড ছাড়া ৫ম দিনের ১.০৩০৩ পাঠ একটি কিনবেন-না, তার বেশি কিছু নয়। কেবল নিচের-ব্যান্ড ও স্কুইজ-ব্রেকআউট সংকেতই প্রবেশ হিসেবে টেকে। |

আর ব্রেকটির জন্য নির্দিষ্ট পঞ্চম একটি: **২১তম দিন ২.১০ টাকা, অর্থাৎ ৩.৪% নড়েছে, ১০% ব্যান্ডের স্বচ্ছন্দ ভেতরে।** চলাচলটি বড় হলে ক্লোজ সীমাবদ্ধ হতো, %b কর্তিত হতো, আর আপনি যে ঘটনাটি শনাক্ত করতে চাইছিলেন ব্যান্ড ঠিক সেটিই কম লিপিবদ্ধ করত। **স্কুইজ সঠিকভাবে নিষ্পত্তি হয়েও অলেনদেনযোগ্য থাকতে পারে**, কারণ অফারবিহীন একটি লিমিট-আপ সেশন এমন সংকেত যা আপনি ফিল করতে পারবেন না।`,
    },

    formula: {
      en: `### 1. The centre line is a simple moving average

$$\\bar{P}_t = \\frac{1}{n}\\sum_{i=0}^{n-1} P_{t-i}, \\qquad n = 20$$

**This is Chapter 34's SMA, unchanged, and it inherits every property Chapter 34 established.** Equal weighting, so a close twenty days old counts exactly as much as today's. Lag of roughly $(n-1)/2 = 9.5$ sessions behind a linear trend. Whipsaw in a range. **The centre line is not a neutral reference — it is a trend estimator with known defects, and those defects are now embedded in the middle of a volatility indicator.**

Note also what the *choice* of $n$ does. It sets both the smoothness of the centre line and the memory of the dispersion estimate, and you cannot tune them separately. **Shortening $n$ to make the bands more responsive also makes the centre line noisier, and there is no parameter that separates the two.**

### 2. The dispersion term, and the denominator

$$\\sigma_t = \\sqrt{\\frac{1}{n}\\sum_{i=0}^{n-1}\\left(P_{t-i} - \\bar{P}_t\\right)^2}$$

**The denominator is $n$, not $n-1$.** This is the population standard deviation, and it is the correct choice for two independent reasons.

**The definitional reason:** Bollinger specified $n$. Anyone reading a bandwidth or %b figure from you assumes $n$. Use $n-1$ and your numbers are not comparable with anyone else's.

**The conceptual reason:** the sample denominator applies Bessel's correction, which removes the downward bias in estimating an unknown *population* variance from a *sample*. **But there is no population here.** The twenty closes are not a sample drawn from some hypothetical urn of closes; they are the complete object being described. **You are computing a descriptive statistic, not an inferential estimate**, and Bessel's correction is a solution to a problem you do not have.

The magnitude of the error:

$$\\frac{s_{\\text{samp}}}{\\sigma_{\\text{pop}}} = \\sqrt{\\frac{n}{n-1}} = \\sqrt{\\frac{20}{19}} = 1.025978$$

**Every band edge, every bandwidth reading, inflated by 2.60%, forever.** On the worked example the upper band moves 62.6657 → 62.6804, about 1.5 paisa. Small, uniform, and invisible — **which is why it survives in production code for years.** The place it bites is any comparison against an external number: a published threshold, a broker's chart, a rule from a book. **Those comparisons become silently wrong and nothing errors.**

### 3. The bands

$$U_t = \\bar{P}_t + k\\sigma_t, \\qquad L_t = \\bar{P}_t - k\\sigma_t, \\qquad k = 2$$

**On $k = 2$ and what it actually contains.** Under an exact normal distribution with known mean and known variance, $\\pm 2\\sigma$ contains 95.45%. **That number does not apply here, for three compounding reasons:**

| Reason | Effect on coverage |
|---|---|
| $\\bar{P}$ and $\\sigma$ estimated from the same 20 points | Coverage falls below 95.45% mechanically — the band is fitted to the data it is scoring |
| Returns are leptokurtic (fat-tailed) | More mass in the centre, far more in the extreme tails; the *count* inside may rise while the *severity* outside explodes |
| Closes are serially correlated | Effective sample size $\\ll 20$; $\\sigma$ understates dispersion in a trend and overstates it in chop |

**The empirical figure for a 20-period window is 85–90%, and the worked example lands at exactly 90% — eighteen of twenty.** Treat $k = 2$ as a convention that produces a usefully rare event, not as a probability statement. **The correct sentence is "roughly one close in ten falls outside," not "there is a 4.55% chance of this."**

Bollinger's own default of $n = 20, k = 2$ is not derived from anything. It is a pair of round numbers that behave reasonably. **Bollinger himself suggests raising $k$ when you lengthen $n$** — around $k = 2.1$ at $n = 50$, $k = 1.9$ at $n = 10$ — precisely because the estimation bias above depends on $n$.

### 4. %b — position within the bands

$$\\%b_t = \\frac{P_t - L_t}{U_t - L_t} = \\frac{P_t - \\bar{P}_t + k\\sigma_t}{2k\\sigma_t} = \\frac{1}{2} + \\frac{P_t - \\bar{P}_t}{2k\\sigma_t}$$

**That second form is worth memorising, because it shows what %b really is: a z-score, rescaled.** The deviation from the mean, divided by $2k\\sigma$, shifted to centre on 0.5. At $k = 2$:

$$\\%b = 0.5 + \\frac{z}{4}, \\qquad z = \\frac{P - \\bar{P}}{\\sigma}$$

Every landmark follows immediately:

| %b | Meaning | $z$ |
|---|---|---|
| 0.5 | On the centre line | 0 |
| 1.0 | Exactly on the upper band | +2 |
| 0.0 | Exactly on the lower band | −2 |
| > 1.0 | **Outside the upper band** | > +2 |
| < 0.0 | **Outside the lower band** | < −2 |

**%b is unbounded, and this is its decisive advantage over RSI (Ch 36) and the Stochastic (Ch 37).** Both of those saturate: RSI at 88 and RSI at 96 both say "high," and neither can say how much higher. **%b reads 2.3562 and means it.**

**The failure mode is $\\sigma \\to 0$.** As dispersion collapses, the denominator goes to zero and %b diverges. At $\\sigma = 0$ exactly — twenty identical closes — **%b is $0/0$, undefined.** This is not hypothetical on the DSE; see §6.

### 5. Bandwidth and the squeeze

$$BW_t = \\frac{U_t - L_t}{\\bar{P}_t} = \\frac{2k\\sigma_t}{\\bar{P}_t}$$

Dividing by the centre line makes the measure scale-free, so a BDT 62 stock and a BDT 620 stock are directly comparable. **This is exactly the normalisation PPO applies to MACD in Chapter 35, for exactly the same reason: a difference in taka is not comparable across price levels; a ratio is.**

**The squeeze must be defined by percentile, not by level:**

$$\\text{Squeeze}_t = \\mathbb{1}\\left[BW_t \\le Q_{0.10}\\left(\\{BW_{t-1}, \\ldots, BW_{t-125}\\}\\right)\\right]$$

That is: bandwidth in the bottom decile of its own trailing six months. **A fixed threshold — "bandwidth below 2%" — is the single most common way to break this indicator, because 2% is a violent squeeze on one name and a normal Tuesday on another.** On the worked example, 1.8219% against a 125-session median of 6.42% is the 4th percentile, running at 28.4% of the stock's own normal width.

**Two properties of the squeeze, both essential:**

**It is directionless.** $BW$ is built from $\\sigma$, which is built from squared deviations. **Squaring destroys sign.** A squeeze cannot contain directional information because the arithmetic discards it before the number is formed. Any strategy that reads direction out of a squeeze is reading it out of something else and crediting the squeeze.

**It is self-defeating on entry.** The break out of a squeeze is itself the largest deviation in the window, so it enters $\\sigma$ squared and inflates the bands immediately. **The squeeze condition therefore turns itself off on the day it resolves** — worked example: $BW$ from 1.8219% to 3.4115%, a factor of 1.87, in one session. Any rule requiring the squeeze to persist while you enter cannot fire.

### 6. Why the bands are not support and resistance

Chapter 30 defined a level as **positioned inventory: identifiable participants with resting orders and unfinished business at a price.** Test the bands against that definition:

| Chapter 30 level | Bollinger Band |
|---|---|
| Fixed until broken | **Recomputed every session** |
| Exists in the order book | **Exists only in your calculation** |
| Formed by transacted volume | Formed by the arithmetic of closes |
| Independent of the current bar | **Contains the current bar** |
| Widens when contested | **Widens when price moves away from it** |

**That last row is the fatal one.** A support level, under pressure, holds or breaks. **A Bollinger Band retreats.** Price approaches the upper band, and the approach itself raises $\\sigma$, which raises the band. It is a target that runs away from the thing chasing it, and no such object can function as resistance.

Formally, the "price touched the upper band, therefore overbought" claim requires:

$$P_t \\ge U_t \\;\\Rightarrow\\; \\mathbb{E}[P_{t+1} - P_t] < 0$$

**This is false in trending regimes and true in ranging regimes, and the indicator cannot tell you which one you are in.** The worked example shows both inside twenty-two sessions: day 5's $\\%b = 1.0303$ reverted to the mean, and day 21's $\\%b = 2.3562$ was followed by day 22 at $\\%b = 1.3344$ — **still outside, after the band had widened 87% trying to catch it.**

**Corollary — never place a stop on a band.** A stop must sit where the thesis is falsified. As risk rises, $\\sigma$ rises, and the lower band falls away. **A band-based stop widens your risk exactly when the market becomes more dangerous.** The centre line is defensible as a trailing reference, because it is a trend statement about the mean, not a dispersion artefact.

### 7. Band width versus ATR

$$\\underbrace{2k\\sigma_t}_{\\text{closes only}} \\qquad\\text{versus}\\qquad \\underbrace{ATR_t = \\frac{(n-1)ATR_{t-1} + TR_t}{n}}_{TR_t = \\max(H_t - L_t,\\, |H_t - C_{t-1}|,\\, |L_t - C_{t-1}|)}$$

**Three structural differences:**

1. **Input set.** $\\sigma$ sees only closes. $TR$ sees high, low, and the previous close — **so ATR sees gaps and intraday range, and $\\sigma$ is blind to both.** A stock that opens with a two-taka gap and closes unchanged contributes nothing to $\\sigma$ and a full two taka to $TR$.
2. **Response function.** $\\sigma$ **squares** deviations; Wilder's ATR averages them linearly. One large day therefore hits band width quadratically and ATR linearly. Worked example: **band width +87.6%, ATR +9.86%, same session.**
3. **Memory.** $\\sigma$ has a hard 20-day window — a large move drops out abruptly on day 21, and the bands snap in for no reason connected to today. ATR decays geometrically and has no cliff.

**Use $\\sigma$-bands to ask whether a close is unusual. Use ATR to size a position or place a stop.** Chapter 49 sizes on ATR and Chapter 30 built its zones on ATR, both for reason 1.

### 8. The DSE corrections, which precede everything above

| Distortion | Mechanism | Effect on the indicator |
|---|---|---|
| **Circuit limits** | Closes censored to $[R(1-c),\\, R(1+c)]$ around reference $R$ | **Censoring shrinks $\\sigma$ systematically.** The bands under-record volatility precisely on the days it spikes, silently and with no error flag |
| **Floor price** | $P_i = F$ for all $i$ | $\\sum(P_i - \\bar{P})^2 = 0 \\Rightarrow \\sigma = 0 \\Rightarrow BW = 0\\%$ and $\\%b = 0/0$. **A permanent maximum-conviction fake squeeze, plus a divide-by-zero that some languages resolve to $\\pm\\infty$ and rank first** |
| **Thin closes** | A close set by trivial size | Deviations are squared: **a 5% bad close contributes 25× the variance of a 1% one.** One print does not distort the bands, it owns them |
| **No short side** | Retail borrow unavailable | Every upper-band signal collapses to *do not buy* or *exit*. **Half the classical playbook does not exist here** |
| **Limit-up escape** | The resolution is capped per session | **The signal can be correct and unfillable** — a category the classical literature has no name for |

**The floor-price row is the one to internalise.** It is not a degradation of the signal; it is an inversion of it. **A squeeze screen run across a floor-price window returns, ranked first, the most administratively frozen and least tradeable shares on the exchange, labelled highest-conviction.** Exclude the window before computing — using Chapter 26's flag column — and never attempt to "handle" it downstream.`,
      bn: `### ১. কেন্দ্র রেখা একটি সরল মুভিং অ্যাভারেজ

$$\\bar{P}_t = \\frac{1}{n}\\sum_{i=0}^{n-1} P_{t-i}, \\qquad n = 20$$

**এটি অধ্যায় ৩৪-এর SMA, অপরিবর্তিত, আর অধ্যায় ৩৪-এর প্রতিষ্ঠিত প্রতিটি ধর্ম এটি উত্তরাধিকারসূত্রে পায়।** সমান ওজন, তাই কুড়ি দিনের পুরোনো একটি ক্লোজ আজকেরটির ঠিক সমান গোনা হয়। একটি রৈখিক ট্রেন্ডের চেয়ে মোটামুটি $(n-1)/2 = 9.5$ সেশন পিছিয়ে। রেঞ্জে হুইপস। **কেন্দ্র রেখা নিরপেক্ষ কোনো রেফারেন্স নয় — এটি জানা ত্রুটিসহ একটি ট্রেন্ড অনুমানক, আর ঐ ত্রুটিগুলো এখন একটি ভোলাটিলিটি নির্দেশকের মাঝখানে গেঁথে আছে।**

$n$-এর *পছন্দ* কী করে তাও লক্ষ করুন। এটি একসঙ্গে কেন্দ্র রেখার মসৃণতা ও বিক্ষেপ অনুমানের স্মৃতি ঠিক করে, আর আপনি দুটিকে আলাদাভাবে টিউন করতে পারবেন না। **ব্যান্ডকে বেশি সাড়া দেওয়ানোর জন্য $n$ ছোট করলে কেন্দ্র রেখাও বেশি কোলাহলপূর্ণ হয়, আর দুটিকে আলাদা করার কোনো প্যারামিটার নেই।**

### ২. বিক্ষেপ পদ, আর হর

$$\\sigma_t = \\sqrt{\\frac{1}{n}\\sum_{i=0}^{n-1}\\left(P_{t-i} - \\bar{P}_t\\right)^2}$$

**হর $n$, $n-1$ নয়।** এটি পপুলেশন স্ট্যান্ডার্ড ডেভিয়েশন, আর দুটি স্বাধীন কারণে এটিই সঠিক পছন্দ।

**সংজ্ঞাগত কারণ:** বলিঞ্জার $n$ নির্দিষ্ট করেছেন। আপনার কাছ থেকে ব্যান্ডউইডথ বা %b পড়া যে কেউ ধরে নেন $n$। $n-1$ ব্যবহার করলে আপনার সংখ্যা আর কারো সঙ্গে তুলনীয় নয়।

**ধারণাগত কারণ:** স্যাম্পল হর বেসেলের সংশোধন প্রয়োগ করে, যা একটি *নমুনা* থেকে অজানা *পপুলেশন* ভেদাঙ্ক অনুমানের নিম্নমুখী পক্ষপাত সরায়। **কিন্তু এখানে কোনো পপুলেশন নেই।** কুড়িটি ক্লোজ ক্লোজের কোনো কাল্পনিক কলস থেকে টানা নমুনা নয়; সেগুলোই বর্ণিত গোটা বস্তু। **আপনি একটি বর্ণনামূলক পরিসংখ্যান গণনা করছেন, কোনো অনুমানগত হিসাব নয়**, আর বেসেলের সংশোধন এমন একটি সমস্যার সমাধান যা আপনার নেই।

ভুলটির মাত্রা:

$$\\frac{s_{\\text{samp}}}{\\sigma_{\\text{pop}}} = \\sqrt{\\frac{n}{n-1}} = \\sqrt{\\frac{20}{19}} = 1.025978$$

**প্রতিটি ব্যান্ডের প্রান্ত, প্রতিটি ব্যান্ডউইডথ পাঠ, ২.৬০% ফোলানো, চিরকাল।** উদাহরণে উপরের ব্যান্ড ৬২.৬৬৫৭ → ৬২.৬৮০৪, প্রায় ১.৫ পয়সা। ছোট, সমান ও অদৃশ্য — **আর এ কারণেই এটি বছরের পর বছর প্রোডাকশন কোডে টিকে থাকে।** এটি কামড়ায় বাইরের কোনো সংখ্যার সঙ্গে তুলনায়: একটি প্রকাশিত সীমা, একটি ব্রোকারের চার্ট, বইয়ের একটি নিয়ম। **ঐ তুলনাগুলো নীরবে ভুল হয়ে যায় আর কোথাও কোনো ভুলবার্তা আসে না।**

### ৩. ব্যান্ড

$$U_t = \\bar{P}_t + k\\sigma_t, \\qquad L_t = \\bar{P}_t - k\\sigma_t, \\qquad k = 2$$

**$k = 2$ এবং এটি আসলে কী ধারণ করে।** জানা গড় ও জানা ভেদাঙ্কসহ একটি হুবহু নর্মাল বণ্টনে $\\pm 2\\sigma$ ধারণ করে ৯৫.৪৫%। **ঐ সংখ্যা এখানে প্রযোজ্য নয়, তিনটি একে অন্যের ওপর চাপা কারণে:**

| কারণ | ধারণক্ষমতায় প্রভাব |
|---|---|
| $\\bar{P}$ ও $\\sigma$ ঐ একই ২০টি বিন্দু থেকেই অনুমিত | ধারণক্ষমতা যান্ত্রিকভাবেই ৯৫.৪৫%-এর নিচে নামে — ব্যান্ড যে ডেটাকে নম্বর দিচ্ছে তার সঙ্গেই ফিট করা |
| রিটার্ন লেপ্টোকার্টিক (মোটা প্রান্তের) | কেন্দ্রে বেশি ভর, চরম প্রান্তে অনেক বেশি; ভেতরের *সংখ্যা* বাড়তে পারে যখন বাইরের *তীব্রতা* বিস্ফোরিত হয় |
| ক্লোজগুলো ক্রমিকভাবে সহসম্পর্কিত | কার্যকর নমুনা আকার $\\ll 20$; $\\sigma$ ট্রেন্ডে বিক্ষেপ কম ও এলোমেলোতে বেশি দেখায় |

**২০-পর্বের জানালায় প্রায়োগিক সংখ্যা ৮৫–৯০%, আর উদাহরণটি ঠিক ৯০%-এ নামে — কুড়িটির আঠারোটি।** $k = 2$-কে একটি প্রথা হিসেবে গণ্য করুন যা কার্যকরভাবে বিরল একটি ঘটনা তৈরি করে, সম্ভাব্যতার বক্তব্য হিসেবে নয়। **সঠিক বাক্যটি হলো "মোটামুটি দশটির একটি ক্লোজ বাইরে পড়ে," "এর ৪.৫৫% সম্ভাবনা আছে" নয়।**

বলিঞ্জারের নিজের ডিফল্ট $n = 20, k = 2$ কোনো কিছু থেকে উদ্ভূত নয়। এগুলো দুটি রাউন্ড সংখ্যা যা যুক্তিসঙ্গত আচরণ করে। **বলিঞ্জার নিজেই $n$ বাড়ালে $k$ বাড়ানোর পরামর্শ দেন** — $n = 50$-এ প্রায় $k = 2.1$, $n = 10$-এ $k = 1.9$ — ঠিক এ কারণেই যে ওপরের অনুমান-পক্ষপাত $n$-এর ওপর নির্ভর করে।

### ৪. %b — ব্যান্ডের ভেতরে অবস্থান

$$\\%b_t = \\frac{P_t - L_t}{U_t - L_t} = \\frac{P_t - \\bar{P}_t + k\\sigma_t}{2k\\sigma_t} = \\frac{1}{2} + \\frac{P_t - \\bar{P}_t}{2k\\sigma_t}$$

**দ্বিতীয় রূপটি মুখস্থ করার মতো, কারণ এটি দেখায় %b আসলে কী: একটি z-স্কোর, নতুন মাপে।** গড় থেকে বিচ্যুতি, $2k\\sigma$ দিয়ে ভাগ, ০.৫-এ কেন্দ্রীভূত করতে সরানো। $k = 2$-তে:

$$\\%b = 0.5 + \\frac{z}{4}, \\qquad z = \\frac{P - \\bar{P}}{\\sigma}$$

প্রতিটি চিহ্ন সঙ্গে সঙ্গে আসে:

| %b | অর্থ | $z$ |
|---|---|---|
| ০.৫ | কেন্দ্র রেখায় | ০ |
| ১.০ | ঠিক উপরের ব্যান্ডে | +২ |
| ০.০ | ঠিক নিচের ব্যান্ডে | −২ |
| > ১.০ | **উপরের ব্যান্ডের বাইরে** | > +২ |
| < ০.০ | **নিচের ব্যান্ডের বাইরে** | < −২ |

**%b সীমাহীন, আর এটিই RSI (অ ৩৬) ও স্টোক্যাস্টিকের (অ ৩৭) ওপর এর নির্ণায়ক সুবিধা।** ওগুলো স্যাচুরেট করে: RSI ৮৮-তে ও RSI ৯৬-তে দুটিই "উঁচু" বলে, আর কোনোটিই বলতে পারে না কতটা উঁচু। **%b পড়ে ২.৩৫৬২ আর তা সত্যিই বোঝায়।**

**ব্যর্থতার ধরন হলো $\\sigma \\to 0$।** বিক্ষেপ ভেঙে পড়লে হর শূন্যে যায় আর %b বিচ্ছুরিত হয়। ঠিক $\\sigma = 0$-তে — কুড়িটি অভিন্ন ক্লোজ — **%b হলো $0/0$, অসংজ্ঞায়িত।** ডিএসই-তে এটি কাল্পনিক নয়; §৬ দেখুন।

### ৫. ব্যান্ডউইডথ ও স্কুইজ

$$BW_t = \\frac{U_t - L_t}{\\bar{P}_t} = \\frac{2k\\sigma_t}{\\bar{P}_t}$$

কেন্দ্র রেখা দিয়ে ভাগ পরিমাপটিকে মাপ-নিরপেক্ষ করে, তাই ৬২ টাকার শেয়ার ও ৬২০ টাকার শেয়ার সরাসরি তুলনীয়। **এটি ঠিক সেই সাধারণীকরণ যা অধ্যায় ৩৫-এ PPO MACD-তে প্রয়োগ করে, ঠিক একই কারণে: টাকার পার্থক্য দামের স্তরে স্তরে তুলনীয় নয়; অনুপাত তুলনীয়।**

**স্কুইজ পার্সেন্টাইলে সংজ্ঞায়িত করতে হবে, মাত্রায় নয়:**

$$\\text{Squeeze}_t = \\mathbb{1}\\left[BW_t \\le Q_{0.10}\\left(\\{BW_{t-1}, \\ldots, BW_{t-125}\\}\\right)\\right]$$

অর্থাৎ: নিজের পেছনের ছয় মাসের নিচের দশমাংশে থাকা ব্যান্ডউইডথ। **নির্দিষ্ট সীমা — "ব্যান্ডউইডথ ২%-এর নিচে" — এই নির্দেশক ভাঙার সবচেয়ে প্রচলিত উপায়, কারণ ২% একটি নামে প্রচণ্ড স্কুইজ আর অন্যটিতে সাধারণ মঙ্গলবার।** উদাহরণে ১২৫-সেশনের মধ্যক ৬.৪২%-এর বিপরীতে ১.৮২১৯% হলো ৪র্থ পার্সেন্টাইল, শেয়ারটির নিজের স্বাভাবিক প্রস্থের ২৮.৪%-এ চলছে।

**স্কুইজের দুটি ধর্ম, দুটিই অপরিহার্য:**

**এটি দিকহীন।** $BW$ গড়া $\\sigma$ থেকে, যা গড়া বর্গ বিচ্যুতি থেকে। **বর্গ করা চিহ্ন ধ্বংস করে।** স্কুইজে দিকনির্দেশক তথ্য থাকতে পারে না কারণ সংখ্যাটি তৈরি হওয়ার আগেই পাটিগণিত তা ফেলে দেয়। যে কৌশল স্কুইজ থেকে দিক পড়ে সে অন্য কিছু থেকে পড়ছে আর কৃতিত্ব স্কুইজকে দিচ্ছে।

**প্রবেশে এটি আত্মঘাতী।** স্কুইজ থেকে ব্রেকটিই জানালার বৃহত্তম বিচ্যুতি, তাই তা বর্গ হয়ে $\\sigma$-তে ঢোকে ও সঙ্গে সঙ্গে ব্যান্ড ফোলায়। **তাই স্কুইজ শর্তটি যেদিন নিষ্পত্তি হয় সেদিনই নিজেকে বন্ধ করে দেয়** — উদাহরণে $BW$ ১.৮২১৯% থেকে ৩.৪১১৫%, এক সেশনে ১.৮৭ গুণ। আপনি ঢোকার সময় স্কুইজ টিকে থাকতে হবে এমন কোনো নিয়ম কখনো চালু হতে পারে না।

### ৬. ব্যান্ড কেন সাপোর্ট ও রেজিস্ট্যান্স নয়

অধ্যায় ৩০ একটি লেভেলকে সংজ্ঞায়িত করেছিল **অবস্থানরত ইনভেন্টরি হিসেবে: শনাক্তযোগ্য অংশগ্রহণকারী, জমা অর্ডার ও এক দামে অসমাপ্ত কাজসহ।** ঐ সংজ্ঞার বিপরীতে ব্যান্ড পরীক্ষা করুন:

| অধ্যায় ৩০-এর লেভেল | বলিঞ্জার ব্যান্ড |
|---|---|
| না ভাঙা পর্যন্ত স্থির | **প্রতি সেশনে পুনর্গণিত** |
| অর্ডার বুকে বিদ্যমান | **কেবল আপনার গণনায় বিদ্যমান** |
| সম্পন্ন ভলিউমে গঠিত | ক্লোজের পাটিগণিতে গঠিত |
| বর্তমান বার থেকে স্বাধীন | **বর্তমান বারকেই ধারণ করে** |
| প্রতিদ্বন্দ্বিতায় চওড়া হয় | **দাম তার থেকে দূরে সরলে চওড়া হয়** |

**শেষ সারিটিই মারাত্মক।** একটি সাপোর্ট লেভেল চাপে পড়ে টেকে বা ভাঙে। **একটি বলিঞ্জার ব্যান্ড পিছিয়ে যায়।** দাম উপরের ব্যান্ডের দিকে এগোয়, আর ঐ এগোনোই $\\sigma$ বাড়ায়, যা ব্যান্ড বাড়ায়। এটি এমন লক্ষ্য যা তার পিছু নেওয়া জিনিসটির কাছ থেকে পালায়, আর এমন কোনো বস্তু রেজিস্ট্যান্স হিসেবে কাজ করতে পারে না।

আনুষ্ঠানিকভাবে, "দাম উপরের ব্যান্ড ছুঁয়েছে, তাই অতিক্রীত" দাবিটির জন্য দরকার:

$$P_t \\ge U_t \\;\\Rightarrow\\; \\mathbb{E}[P_{t+1} - P_t] < 0$$

**এটি ট্রেন্ডিং রেজিমে মিথ্যা ও রেঞ্জিং রেজিমে সত্য, আর আপনি কোনটিতে আছেন তা নির্দেশক বলতে পারে না।** উদাহরণটি বাইশ সেশনের ভেতরেই দুটিই দেখায়: ৫ম দিনের $\\%b = 1.0303$ গড়ে ফিরেছে, আর ২১তম দিনের $\\%b = 2.3562$-এর পরে ২২তম দিন এসেছে $\\%b = 1.3344$-তে — **এখনো বাইরে, ব্যান্ড ধরার চেষ্টায় ৮৭% চওড়া হওয়ার পরেও।**

**উপপাদ্য — কখনো ব্যান্ডে স্টপ বসাবেন না।** স্টপ বসতে হবে যেখানে যুক্তি মিথ্যা প্রমাণিত হয়। ঝুঁকি বাড়লে $\\sigma$ বাড়ে, আর নিচের ব্যান্ড দূরে সরে যায়। **ব্যান্ড-ভিত্তিক স্টপ ঠিক তখনই আপনার ঝুঁকি চওড়া করে যখন বাজার বেশি বিপজ্জনক হয়।** কেন্দ্র রেখা একটি ট্রেলিং রেফারেন্স হিসেবে রক্ষণীয়, কারণ তা গড় সম্পর্কে একটি ট্রেন্ড-বক্তব্য, বিক্ষেপের কৃত্রিম ফল নয়।

### ৭. ব্যান্ডের প্রস্থ বনাম ATR

$$\\underbrace{2k\\sigma_t}_{\\text{কেবল ক্লোজ}} \\qquad\\text{বনাম}\\qquad \\underbrace{ATR_t = \\frac{(n-1)ATR_{t-1} + TR_t}{n}}_{TR_t = \\max(H_t - L_t,\\, |H_t - C_{t-1}|,\\, |L_t - C_{t-1}|)}$$

**তিনটি কাঠামোগত পার্থক্য:**

১. **উপাদানের সেট।** $\\sigma$ কেবল ক্লোজ দেখে। $TR$ দেখে হাই, লো ও আগের ক্লোজ — **তাই ATR গ্যাপ ও ইন্ট্রাডে পরিসর দেখে, আর $\\sigma$ দুটিতেই অন্ধ।** যে শেয়ার দুই টাকার গ্যাপে খুলে অপরিবর্তিত বন্ধ হয় সে $\\sigma$-তে কিছুই যোগ করে না আর $TR$-এ পুরো দুই টাকা যোগ করে।
২. **সাড়া-ফাংশন।** $\\sigma$ বিচ্যুতি **বর্গ** করে; ওয়াইল্ডারের ATR সেগুলো রৈখিকভাবে গড় করে। তাই একটি বড় দিন ব্যান্ডের প্রস্থে দ্বিঘাতভাবে ও ATR-এ রৈখিকভাবে আঘাত করে। উদাহরণ: **ব্যান্ডের প্রস্থ +৮৭.৬%, ATR +৯.৮৬%, একই সেশন।**
৩. **স্মৃতি।** $\\sigma$-র একটি কঠিন ২০-দিনের জানালা আছে — বড় একটি চলাচল ২১তম দিনে হঠাৎ বেরিয়ে যায়, আর ব্যান্ড আজকের সঙ্গে সম্পর্কহীন কারণে সংকুচিত হয়। ATR জ্যামিতিকভাবে ক্ষয় হয় আর তার কোনো খাদ নেই।

**একটি ক্লোজ অস্বাভাবিক কি না জিজ্ঞেস করতে $\\sigma$-ব্যান্ড ব্যবহার করুন। অবস্থানের আকার বা স্টপের জন্য ATR ব্যবহার করুন।** অধ্যায় ৪৯ ATR-এ আকার নেয় ও অধ্যায় ৩০ ATR-এ তার জোন গড়েছিল, দুটিই ১ নং কারণে।

### ৮. ডিএসই সংশোধন, যা ওপরের সবকিছুর আগে আসে

| বিকৃতি | কলকব্জা | নির্দেশকে প্রভাব |
|---|---|---|
| **সার্কিট সীমা** | রেফারেন্স $R$-এর চারপাশে ক্লোজ $[R(1-c),\\, R(1+c)]$-এ কর্তিত | **কর্তন $\\sigma$-কে ব্যবস্থাগতভাবে ছোট করে।** ঠিক যেসব দিনে ভোলাটিলিটি লাফায় সেসব দিনেই ব্যান্ড তা কম লিপিবদ্ধ করে, নীরবে ও কোনো চিহ্ন ছাড়াই |
| **ফ্লোর প্রাইস** | সব $i$-র জন্য $P_i = F$ | $\\sum(P_i - \\bar{P})^2 = 0 \\Rightarrow \\sigma = 0 \\Rightarrow BW = 0\\%$ আর $\\%b = 0/0$। **একটি স্থায়ী সর্বোচ্চ-প্রত্যয়ের নকল স্কুইজ, সঙ্গে শূন্য দিয়ে ভাগ যা কিছু ভাষা $\\pm\\infty$-তে মিটিয়ে প্রথম স্থান দেয়** |
| **পাতলা ক্লোজ** | নগণ্য আকারে নির্ধারিত ক্লোজ | বিচ্যুতি বর্গ হয়: **৫% খারাপ ক্লোজ ১%-এর ২৫× ভেদাঙ্ক যোগ করে।** একটি প্রিন্ট ব্যান্ড বিকৃত করে না, দখল করে |
| **শর্ট সাইড নেই** | খুচরা ধার পাওয়া যায় না | প্রতিটি উপরের-ব্যান্ড সংকেত *কিনবেন না* বা *বেরিয়ে যান*-এ নেমে আসে। **ধ্রুপদী পরিকল্পনার অর্ধেক এখানে নেই** |
| **লিমিট-আপ পলায়ন** | নিষ্পত্তি সেশনপ্রতি সীমাবদ্ধ | **সংকেত সঠিক ও অ-ফিলযোগ্য হতে পারে** — এই শ্রেণির ধ্রুপদী সাহিত্যে কোনো নাম নেই |

**ফ্লোর-প্রাইসের সারিটিই আত্মস্থ করার।** এটি সংকেতের অবনতি নয়; এটি সংকেতের উল্টে যাওয়া। **ফ্লোর-প্রাইসের সময়কালজুড়ে চালানো একটি স্কুইজ স্ক্রিন প্রথম স্থানে ফেরত দেয় এক্সচেঞ্জের সবচেয়ে প্রশাসনিকভাবে জমাটবদ্ধ ও কম লেনদেনযোগ্য শেয়ার, লেবেল থাকে সর্বোচ্চ-প্রত্যয়।** গণনার আগেই জানালাটি বাদ দিন — অধ্যায় ২৬-এর চিহ্ন-কলাম দিয়ে — আর পরে একে "সামলানোর" চেষ্টা কখনো করবেন না।`,
    },

    manual: {
      en: `**Scenario.** MEGHNAPLY from §38.3. Twenty closes, $n = 20$, $k = 2$. ADV(20) = 900,000 shares. ATR(14) = 1.05. Prior 125-session median bandwidth = 6.42%. Do every step by hand; the numbers are chosen so you can.

**Step 1 — Write down the twenty closes and sum them.**
$$\\sum P_i = 61.80 + 62.40 + 61.50 + \\cdots + 62.40 + 62.10 = 1{,}242.00$$

**Step 2 — The centre line.**
$$\\bar{P} = \\frac{1{,}242.00}{20} = 62.10$$

This is Chapter 34's 20-period SMA. **It carries Chapter 34's lag of about 9.5 sessions and Chapter 34's whipsaw. Nothing about wrapping bands around it repairs that.**

**Step 3 — Deviations from the mean.**

$$-0.30,\\; +0.30,\\; -0.60,\\; 0.00,\\; +0.60,\\; -0.20,\\; +0.20,\\; -0.10,\\; -0.40,\\; +0.10,$$
$$+0.40,\\; 0.00,\\; -0.20,\\; +0.20,\\; -0.10,\\; +0.10,\\; -0.30,\\; 0.00,\\; +0.30,\\; 0.00$$

**Check: these must sum to exactly zero.** They do. **If your deviations do not sum to zero, your mean is wrong and everything downstream is wrong — do this check every single time.**

**Step 4 — Square each deviation and sum.**
$$\\sum(P_i - \\bar{P})^2 = 0.09 + 0.09 + 0.36 + 0 + 0.36 + 0.04 + 0.04 + 0.01 + 0.16 + 0.01$$
$$+\\; 0.16 + 0 + 0.04 + 0.04 + 0.01 + 0.01 + 0.09 + 0 + 0.09 + 0 = 1.60$$

**Notice already what squaring does.** The two largest deviations, ±0.60 on days 3 and 5, contribute 0.72 between them — **45% of the entire sum of squares from 2 of 20 observations.** Hold that thought until Step 13.

**Step 5 — Population variance. Divide by $n$, not $n-1$.**
$$\\sigma^2 = \\frac{1.60}{20} = 0.08$$

**Step 6 — Population standard deviation.**
$$\\sigma = \\sqrt{0.08} = 0.282843$$

**Step 7 — Compute the wrong one, so you can see what you avoided.**
$$s^2 = \\frac{1.60}{19} = 0.084211, \\qquad s = \\sqrt{0.084211} = 0.290191$$
$$\\frac{s}{\\sigma} = \\frac{0.290191}{0.282843} = 1.025978$$

**The sample denominator inflates every band by 2.60%.** Not a rounding difference — a systematic, permanent, one-directional scaling of the entire indicator.

**Step 8 — The bands.**
$$U = 62.10 + 2(0.282843) = 62.10 + 0.565685 = 62.6657$$
$$L = 62.10 - 2(0.282843) = 62.10 - 0.565685 = 61.5343$$
$$U - L = 1.1314$$

With the sample denominator you would have had $U = 62.6804$, $L = 61.5196$. **A difference of 1.47 paisa at each edge. Invisible on a chart, and that is exactly the problem — it never announces itself.**

**Step 9 — Bandwidth.**
$$BW = \\frac{1.1314}{62.10} = 0.018219 = 1.8219\\%$$

With $n-1$: $BW = 1.8692\\%$. **A fixed-threshold squeeze rule set at 1.85% fires on one and not the other, on identical data.**

**Step 10 — Rank the bandwidth. This is the step people skip and it is the one that matters.**
$$\\frac{1.8219\\%}{6.42\\%} = 0.284$$

The bands are at **28.4% of this stock's own normal width**, which places 1.8219% at roughly the **4th percentile** of the last 125 sessions — inside the bottom decile.

**Squeeze confirmed. And note carefully what has been confirmed: dispersion is abnormally low. Nothing about direction. Nothing about timing.**

**Step 11 — %b for the current close, 62.10.**
$$\\%b = \\frac{62.10 - 61.5343}{62.6657 - 61.5343} = \\frac{0.5657}{1.1314} = 0.5000$$

Exactly 0.5, because today's close equals the mean. **Use the z-score form as a cross-check:**
$$\\%b = 0.5 + \\frac{z}{4}, \\qquad z = \\frac{62.10 - 62.10}{0.282843} = 0 \\;\\Rightarrow\\; \\%b = 0.5 \\;\\checkmark$$

**Step 12 — Count the exceedances, and stop believing in 95.45%.**

Day 3 closed 61.50 — below $L = 61.5343$. Day 5 closed 62.70 — above $U = 62.6657$.

$$\\text{Inside the bands} = \\frac{18}{20} = 90\\%$$

**Not 95.45%. Two exceedances in twenty sessions, in a stock going nowhere.** Three reasons, all covered in §38.4: the mean and $\\sigma$ are fitted to the same twenty points; returns are fat-tailed; closes are serially correlated. **If you were sizing on a 4.55% tail assumption, you were wrong by a factor of two before the market did anything.**

**Step 13 — %b at the two exceedances, and the denominator's revenge.**
$$\\%b_{\\text{day 5}} = \\frac{62.70 - 61.5343}{1.1314} = \\frac{1.1657}{1.1314} = 1.0303$$
$$\\%b_{\\text{day 3}} = \\frac{61.50 - 61.5343}{1.1314} = \\frac{-0.0343}{1.1314} = -0.0303$$

Now recompute day 5 with the sample bands ($U = 62.6804$, $L = 61.5196$, width 1.1608):
$$\\%b_{\\text{day 5, wrong}} = \\frac{62.70 - 61.5196}{1.1608} = \\frac{1.1804}{1.1608} = 1.0043$$

**1.0303 is unambiguously outside the band. 1.0043 rounds to 1.00 on nearly every platform and reads as "touched the band."** The denominator error changed the classification of the event without changing anything you can see.

**Step 14 — Check what happened after each exceedance, inside this range.**

After day 3 ($\\%b = -0.0303$, "oversold"): next close 62.10, **back to the mean.**
After day 5 ($\\%b = 1.0303$, "overbought"): next close 61.90, **back toward the mean.**

**Mean reversion worked, twice. Write down why: because these twenty sessions are a range.** Nothing in the indicator told you that. **You are about to watch the identical signal fail completely.**

**Step 15 — Day 21 arrives: close 64.20 on 2,790,000 shares.**
$$\\frac{2{,}790{,}000}{900{,}000} = 3.10\\times \\text{ ADV}$$

Measure it against the bands **as they stood before the session**:
$$\\%b = \\frac{64.20 - 61.5343}{1.1314} = \\frac{2.6657}{1.1314} = 2.3562$$

**2.3562 means the close is more than a full band-width beyond the upper band.** Compare with day 5's 1.0303 — **and note that RSI would have printed in the nineties on both.** A bounded oscillator cannot distinguish these two events. %b can.

**Step 16 — Recompute the window. Day 1 drops out, day 21 enters.**
$$\\sum P_i = 1{,}242.00 - 61.80 + 64.20 = 1{,}244.40, \\qquad \\bar{P} = \\frac{1{,}244.40}{20} = 62.22$$
$$\\sum(P_i - \\bar{P})^2 = 5.632, \\qquad \\sigma = \\sqrt{\\frac{5.632}{20}} = \\sqrt{0.2816} = 0.530660$$

**The sum of squared deviations went from 1.60 to 5.632 — it more than tripled on one close.** The new close alone sits $64.20 - 62.22 = 1.98$ from the mean, contributing $1.98^2 = 3.92$, or **70% of the entire new sum of squares.** This is Step 4's observation at full scale: **squaring means one day can own the indicator.**

**Step 17 — The new bands, and the expansion.**
$$U = 62.22 + 2(0.530660) = 63.2813, \\qquad L = 62.22 - 2(0.530660) = 61.1587$$
$$BW = \\frac{2.1226}{62.22} = 0.034115 = 3.4115\\%$$
$$\\frac{3.4115\\%}{1.8219\\%} = 1.87\\times$$

**Bandwidth expanded 87% in a single session.** And this is the squeeze defeating itself: **the condition that generated the setup is switched off by the move that resolved it.** Any rule requiring "squeeze still active at entry" can never fire.

**Step 18 — %b against the NEW bands, and this is the punchline.**
$$\\%b = \\frac{64.20 - 61.1587}{63.2813 - 61.1587} = \\frac{3.0413}{2.1226} = 1.4328$$

**Still outside.** The bands widened by 87% and could not catch the price. **This is the self-referential property visible in one number: the move that broke the band also built the new band, and still lost the race.**

**Step 19 — Compare against ATR over the identical session.** Day 21: high 64.60, low 62.30, previous close 62.10.
$$TR = \\max(64.60 - 62.30,\\; |64.60 - 62.10|,\\; |62.30 - 62.10|) = \\max(2.30,\\; 2.50,\\; 0.20) = 2.50$$
$$ATR = \\frac{13(1.05) + 2.50}{14} = \\frac{13.65 + 2.50}{14} = \\frac{16.15}{14} = 1.1536$$

| | Before | After | Change |
|---|---|---|---|
| Band width | 1.1314 | 2.1226 | **+87.6%** |
| ATR | 1.0500 | 1.1536 | **+9.86%** |

**Same session, two volatility measures, one moved nine times as far as the other.** $\\sigma$ squares and re-centres all twenty observations; ATR folds one true range into a fourteen-period average. **Note also that the true range of 2.50 exceeds the close-to-close move of 2.10 — the 2.30 intraday range and the gap are invisible to $\\sigma$ entirely.**

**Step 20 — Day 22: the walk up the band.** Close 65.10.
$$\\bar{P} = 62.355, \\qquad \\sigma = 0.822481, \\qquad U = 64.0000, \\qquad L = 60.71$$
$$\\%b = \\frac{65.10 - 60.71}{64.0000 - 60.71} = \\frac{4.39}{3.29} = 1.3344, \\qquad BW = \\frac{3.29}{62.355} = 5.2761\\%$$

**Two consecutive closes outside the upper band. Bandwidth now 5.2761% — 2.9× the squeeze reading.** Anyone who sold day 21 on "it tagged the upper band, it is overbought" sold at 64.20 and watched 65.10 print. **The signal never changed. The regime did, and the indicator has no field for regime.**

**Step 21 — Price the trade, and do NOT use a band for the stop.**
$$E = 64.20, \\qquad X = 62.22 \\;(\\text{the 20-SMA}), \\qquad \\text{Risk} = 64.20 - 62.22 = 1.98$$
$$T = 68.50, \\qquad \\text{Reward} = 68.50 - 64.20 = 4.30$$
$$R{:}R = \\frac{4.30}{1.98} = 2.1717, \\qquad p^{*} = \\frac{1}{1 + 2.1717} = 0.3153 = 31.53\\%$$

**Why the SMA and not the lower band?** The lower band was 61.1587 and is falling away as $\\sigma$ rises. **A band-based stop widens exactly when the market gets more dangerous** — the opposite of what a risk control should do. The SMA is a statement about trend, and a close back below it falsifies the thesis.

**Step 22 — Price the hesitation.** Buy day 22's close at 65.10 instead, same stop:

| | Buy day 21 | Wait to day 22 |
|---|---|---|
| Entry | **64.20** | 65.10 |
| Stop | 62.22 | 62.22 |
| Risk | **1.98** | 2.88 |
| Reward to 68.50 | **4.30** | 3.40 |
| $R{:}R$ | **2.1717** | 1.1806 |
| Break-even | **31.53%** | **45.86%** |

**One session of hesitation moves the required accuracy from 31.53% to 45.86%.**

**And notice this is the reverse of Chapter 30's lesson, where waiting for the retest cut the break-even from 43.09% to 23.01%.** The rule is not "wait" or "do not wait." **It is: measure the distance from your entry to your invalidation before you act.** In Chapter 30 the invalidation was a fixed structure, so waiting shortened the risk. Here the invalidation is a rising SMA that climbs far slower than price, so waiting lengthens it. **Same discipline, opposite action, because the geometry is different.**

**Step 23 — Run the DSE checks before any of the above counts.**

- **Circuit limit.** At a 62.10 reference with a 10% band, permitted closes span 55.89 to 68.31. Day 21's move of 2.10 taka is 3.4% — comfortably inside. **Had it been capped, the close would not be a price and $\\sigma$ would be censored downward.**
- **Floor price.** No flat stretch in this window. **If there were — twenty identical closes — then $\\sum(P_i - \\bar{P})^2 = 0$, $\\sigma = 0$, $BW = 0\\%$, and $\\%b = 0/0$.** Not a weak signal: a permanent maximum-conviction fake squeeze and an undefined ratio. Exclude the window with Chapter 26's flag.
- **Thin closes.** At 900,000 ADV and BDT 62.10, a full day is **BDT 5.589 crore**. Check the closing prints carried size, not just the session. **Deviations are squared: a 5% erroneous close contributes 25× the variance of a 1% one.**
- **Short side.** Day 5's 1.0303 is not a short. **It is "do not buy," and nothing more.**

**Step 24 — Write the one-line summary of what you computed.**

> Bandwidth 1.8219% at the 4th percentile of 125 sessions; squeeze confirmed with no directional content. Break on day 21 at %b 2.3562 on 3.10× volume; bandwidth expanded 1.87× to 3.4115% in one session and %b remained 1.4328 against the new bands. Long 64.20, stop 62.22 (20-SMA, not the band), target 68.50, $R{:}R$ 2.1717, break-even 31.53%.

**If you cannot write that sentence, you have not finished the analysis — you have merely drawn the indicator.**`,
      bn: `**পরিস্থিতি।** §৩৮.৩-এর MEGHNAPLY। কুড়িটি ক্লোজ, $n = 20$, $k = 2$। ADV(২০) = ৯,০০,০০০ শেয়ার। ATR(১৪) = ১.০৫। আগের ১২৫-সেশনের মধ্যক ব্যান্ডউইডথ = ৬.৪২%। প্রতিটি ধাপ হাতে করুন; সংখ্যাগুলো এমনভাবে বাছা যাতে আপনি পারেন।

**ধাপ ১ — কুড়িটি ক্লোজ লিখে যোগ করুন।**
$$\\sum P_i = 61.80 + 62.40 + 61.50 + \\cdots + 62.40 + 62.10 = 1{,}242.00$$

**ধাপ ২ — কেন্দ্র রেখা।**
$$\\bar{P} = \\frac{1{,}242.00}{20} = 62.10$$

এটি অধ্যায় ৩৪-এর ২০-পর্বের SMA। **এটি অধ্যায় ৩৪-এর প্রায় ৯.৫ সেশনের পিছিয়ে থাকা ও অধ্যায় ৩৪-এর হুইপস বহন করে। এর চারপাশে ব্যান্ড জড়ানো তা মেরামত করে না।**

**ধাপ ৩ — গড় থেকে বিচ্যুতি।**

$$-0.30,\\; +0.30,\\; -0.60,\\; 0.00,\\; +0.60,\\; -0.20,\\; +0.20,\\; -0.10,\\; -0.40,\\; +0.10,$$
$$+0.40,\\; 0.00,\\; -0.20,\\; +0.20,\\; -0.10,\\; +0.10,\\; -0.30,\\; 0.00,\\; +0.30,\\; 0.00$$

**যাচাই: এগুলোর যোগফল ঠিক শূন্য হতে হবে।** হয়েছে। **আপনার বিচ্যুতির যোগফল শূন্য না হলে আপনার গড় ভুল আর তার পরের সবই ভুল — প্রতিবার এই যাচাইটি করুন।**

**ধাপ ৪ — প্রতিটি বিচ্যুতি বর্গ করে যোগ করুন।**
$$\\sum(P_i - \\bar{P})^2 = 0.09 + 0.09 + 0.36 + 0 + 0.36 + 0.04 + 0.04 + 0.01 + 0.16 + 0.01$$
$$+\\; 0.16 + 0 + 0.04 + 0.04 + 0.01 + 0.01 + 0.09 + 0 + 0.09 + 0 = 1.60$$

**বর্গ করা কী করে তা এখনই লক্ষ করুন।** ৩ ও ৫ নং দিনের সবচেয়ে বড় দুটি বিচ্যুতি ±০.৬০ মিলিতভাবে দেয় ০.৭২ — **কুড়িটির দুটি পর্যবেক্ষণ থেকে গোটা বর্গযোগফলের ৪৫%।** ধাপ ১৩ পর্যন্ত কথাটি ধরে রাখুন।

**ধাপ ৫ — পপুলেশন ভেদাঙ্ক। $n$ দিয়ে ভাগ করুন, $n-1$ নয়।**
$$\\sigma^2 = \\frac{1.60}{20} = 0.08$$

**ধাপ ৬ — পপুলেশন স্ট্যান্ডার্ড ডেভিয়েশন।**
$$\\sigma = \\sqrt{0.08} = 0.282843$$

**ধাপ ৭ — ভুলটিও গণনা করুন, যাতে দেখতে পান কী এড়ালেন।**
$$s^2 = \\frac{1.60}{19} = 0.084211, \\qquad s = \\sqrt{0.084211} = 0.290191$$
$$\\frac{s}{\\sigma} = \\frac{0.290191}{0.282843} = 1.025978$$

**স্যাম্পল হর প্রতিটি ব্যান্ড ২.৬০% ফোলায়।** এটি গোল করার পার্থক্য নয় — এটি গোটা নির্দেশকের একটি ব্যবস্থাগত, স্থায়ী, একমুখী মাপ-পরিবর্তন।

**ধাপ ৮ — ব্যান্ড।**
$$U = 62.10 + 2(0.282843) = 62.10 + 0.565685 = 62.6657$$
$$L = 62.10 - 2(0.282843) = 62.10 - 0.565685 = 61.5343$$
$$U - L = 1.1314$$

স্যাম্পল হরে আপনি পেতেন $U = 62.6804$, $L = 61.5196$। **প্রতিটি প্রান্তে ১.৪৭ পয়সার পার্থক্য। চার্টে অদৃশ্য, আর ঠিক এটিই সমস্যা — এটি কখনো নিজের ঘোষণা দেয় না।**

**ধাপ ৯ — ব্যান্ডউইডথ।**
$$BW = \\frac{1.1314}{62.10} = 0.018219 = 1.8219\\%$$

$n-1$-এ: $BW = 1.8692\\%$। **১.৮৫%-এ বসানো একটি নির্দিষ্ট-সীমার স্কুইজ নিয়ম অভিন্ন ডেটায় একটিতে চালু হয় ও অন্যটিতে নয়।**

**ধাপ ১০ — ব্যান্ডউইডথকে ক্রম দিন। এই ধাপটিই মানুষ বাদ দেন আর এটিই গুরুত্বপূর্ণ।**
$$\\frac{1.8219\\%}{6.42\\%} = 0.284$$

ব্যান্ড আছে **এই শেয়ারের নিজের স্বাভাবিক প্রস্থের ২৮.৪%-এ**, যা ১.৮২১৯%-কে শেষ ১২৫ সেশনের মোটামুটি **৪র্থ পার্সেন্টাইলে** বসায় — নিচের দশমাংশের ভেতরে।

**স্কুইজ নিশ্চিত। আর মন দিয়ে লক্ষ করুন কী নিশ্চিত হলো: বিক্ষেপ অস্বাভাবিকভাবে কম। দিক সম্পর্কে কিছু নয়। সময় সম্পর্কে কিছু নয়।**

**ধাপ ১১ — বর্তমান ক্লোজ ৬২.১০-এর %b।**
$$\\%b = \\frac{62.10 - 61.5343}{62.6657 - 61.5343} = \\frac{0.5657}{1.1314} = 0.5000$$

ঠিক ০.৫, কারণ আজকের ক্লোজ গড়ের সমান। **যাচাই হিসেবে z-স্কোরের রূপটি ব্যবহার করুন:**
$$\\%b = 0.5 + \\frac{z}{4}, \\qquad z = \\frac{62.10 - 62.10}{0.282843} = 0 \\;\\Rightarrow\\; \\%b = 0.5 \\;\\checkmark$$

**ধাপ ১২ — অতিক্রমণ গুনুন, আর ৯৫.৪৫%-এ বিশ্বাস করা বন্ধ করুন।**

৩য় দিন বন্ধ ৬১.৫০ — $L = 61.5343$-এর নিচে। ৫ম দিন বন্ধ ৬২.৭০ — $U = 62.6657$-এর ওপরে।

$$\\text{ব্যান্ডের ভেতরে} = \\frac{18}{20} = 90\\%$$

**৯৫.৪৫% নয়। কোথাও না যাওয়া একটি শেয়ারে কুড়ি সেশনে দুটি অতিক্রমণ।** তিনটি কারণ, সবগুলোই §৩৮.৪-এ: গড় ও $\\sigma$ ঐ একই কুড়িটি বিন্দুতেই ফিট করা; রিটার্নের প্রান্ত মোটা; ক্লোজ ক্রমিকভাবে সহসম্পর্কিত। **আপনি ৪.৫৫% প্রান্ত-অনুমানে আকার নিলে বাজার কিছু করার আগেই আপনি দ্বিগুণ ভুল ছিলেন।**

**ধাপ ১৩ — দুটি অতিক্রমণে %b, আর হরের প্রতিশোধ।**
$$\\%b_{\\text{৫ম দিন}} = \\frac{62.70 - 61.5343}{1.1314} = \\frac{1.1657}{1.1314} = 1.0303$$
$$\\%b_{\\text{৩য় দিন}} = \\frac{61.50 - 61.5343}{1.1314} = \\frac{-0.0343}{1.1314} = -0.0303$$

এবার স্যাম্পল ব্যান্ডে ৫ম দিন পুনর্গণনা করুন ($U = 62.6804$, $L = 61.5196$, প্রস্থ ১.১৬০৮):
$$\\%b_{\\text{৫ম দিন, ভুল}} = \\frac{62.70 - 61.5196}{1.1608} = \\frac{1.1804}{1.1608} = 1.0043$$

**১.০৩০৩ দ্ব্যর্থহীনভাবে ব্যান্ডের বাইরে। ১.০০৪৩ প্রায় প্রতিটি প্ল্যাটফর্মে ১.০০-তে গোল হয় ও "ব্যান্ড ছুঁয়েছে" হিসেবে পড়ে।** হরের ভুল আপনার দেখতে পাওয়া কিছু না বদলেই ঘটনাটির শ্রেণিবিভাজন বদলে দিল।

**ধাপ ১৪ — এই রেঞ্জের ভেতরে প্রতিটি অতিক্রমণের পরে কী হলো দেখুন।**

৩য় দিনের পরে ($\\%b = -0.0303$, "অতিবিক্রীত"): পরের ক্লোজ ৬২.১০, **গড়ে ফেরত।**
৫ম দিনের পরে ($\\%b = 1.0303$, "অতিক্রীত"): পরের ক্লোজ ৬১.৯০, **গড়ের দিকে ফেরত।**

**গড়মুখী ফেরা কাজ করেছে, দুবারই। কেন তা লিখে রাখুন: কারণ এই কুড়িটি সেশন একটি রেঞ্জ।** নির্দেশকের কিছুই আপনাকে তা বলেনি। **আপনি এখনই অভিন্ন সংকেতটিকে সম্পূর্ণ ব্যর্থ হতে দেখবেন।**

**ধাপ ১৫ — ২১তম দিন আসে: ক্লোজ ৬৪.২০, ২৭,৯০,০০০ শেয়ারে।**
$$\\frac{2{,}790{,}000}{900{,}000} = 3.10\\times \\text{ ADV}$$

**সেশনের আগে ব্যান্ড যেখানে ছিল** তার সাপেক্ষে মাপুন:
$$\\%b = \\frac{64.20 - 61.5343}{1.1314} = \\frac{2.6657}{1.1314} = 2.3562$$

**২.৩৫৬২ মানে ক্লোজটি উপরের ব্যান্ডের বাইরে পুরো এক ব্যান্ড-প্রস্থেরও বেশি।** ৫ম দিনের ১.০৩০৩-এর সঙ্গে তুলনা করুন — **আর লক্ষ করুন RSI দুটিতেই নব্বইয়ের ঘরে ছাপত।** একটি সীমাবদ্ধ অসিলেটর এই দুটি ঘটনার পার্থক্য করতে পারে না। %b পারে।

**ধাপ ১৬ — জানালা পুনর্গণনা করুন। ১ম দিন বেরোয়, ২১তম দিন ঢোকে।**
$$\\sum P_i = 1{,}242.00 - 61.80 + 64.20 = 1{,}244.40, \\qquad \\bar{P} = \\frac{1{,}244.40}{20} = 62.22$$
$$\\sum(P_i - \\bar{P})^2 = 5.632, \\qquad \\sigma = \\sqrt{\\frac{5.632}{20}} = \\sqrt{0.2816} = 0.530660$$

**বর্গ বিচ্যুতির যোগফল ১.৬০ থেকে ৫.৬৩২ — একটি ক্লোজে তিন গুণেরও বেশি।** নতুন ক্লোজটি একাই গড় থেকে $64.20 - 62.22 = 1.98$ দূরে, যোগ করছে $1.98^2 = 3.92$, অর্থাৎ **গোটা নতুন বর্গযোগফলের ৭০%।** এটিই ধাপ ৪-এর পর্যবেক্ষণ পূর্ণ মাত্রায়: **বর্গ করা মানে একটি দিনই নির্দেশকটির মালিক হতে পারে।**

**ধাপ ১৭ — নতুন ব্যান্ড, ও বিস্তার।**
$$U = 62.22 + 2(0.530660) = 63.2813, \\qquad L = 62.22 - 2(0.530660) = 61.1587$$
$$BW = \\frac{2.1226}{62.22} = 0.034115 = 3.4115\\%$$
$$\\frac{3.4115\\%}{1.8219\\%} = 1.87\\times$$

**এক সেশনে ব্যান্ডউইডথ ৮৭% বিস্তৃত হলো।** আর এখানেই স্কুইজ নিজেকে হারায়: **যে শর্তটি সেটআপ তৈরি করেছিল, যে চলাচল তা নিষ্পত্তি করল সেটিই তা বন্ধ করে দেয়।** "প্রবেশের সময় স্কুইজ সক্রিয় থাকতে হবে" এমন কোনো নিয়ম কখনো চালু হতে পারে না।

**ধাপ ১৮ — নতুন ব্যান্ডের সাপেক্ষে %b, আর এটিই আসল কথা।**
$$\\%b = \\frac{64.20 - 61.1587}{63.2813 - 61.1587} = \\frac{3.0413}{2.1226} = 1.4328$$

**এখনো বাইরে।** ব্যান্ড ৮৭% চওড়া হয়েও দামকে ধরতে পারেনি। **এটিই একটি সংখ্যায় দৃশ্যমান আত্ম-নির্দেশক ধর্ম: যে চলাচল ব্যান্ড ভেঙেছে সেটিই নতুন ব্যান্ড বানিয়েছে, আর তবু দৌড়ে হেরেছে।**

**ধাপ ১৯ — অভিন্ন সেশনে ATR-এর সঙ্গে তুলনা।** ২১তম দিন: হাই ৬৪.৬০, লো ৬২.৩০, আগের ক্লোজ ৬২.১০।
$$TR = \\max(64.60 - 62.30,\\; |64.60 - 62.10|,\\; |62.30 - 62.10|) = \\max(2.30,\\; 2.50,\\; 0.20) = 2.50$$
$$ATR = \\frac{13(1.05) + 2.50}{14} = \\frac{13.65 + 2.50}{14} = \\frac{16.15}{14} = 1.1536$$

| | আগে | পরে | পরিবর্তন |
|---|---|---|---|
| ব্যান্ডের প্রস্থ | ১.১৩১৪ | ২.১২২৬ | **+৮৭.৬%** |
| ATR | ১.০৫০০ | ১.১৫৩৬ | **+৯.৮৬%** |

**একই সেশন, দুটি ভোলাটিলিটি পরিমাপ, একটি অন্যটির নয় গুণ দূরে সরেছে।** $\\sigma$ কুড়িটি পর্যবেক্ষণকেই বর্গ করে ও নতুন কেন্দ্রে বসায়; ATR একটি true range-কে চোদ্দ-পর্বের গড়ে ভাঁজ করে। **এও লক্ষ করুন ২.৫০ true range ক্লোজ-থেকে-ক্লোজ ২.১০ চলাচলের চেয়ে বড় — ২.৩০ ইন্ট্রাডে পরিসর ও গ্যাপটি $\\sigma$-র কাছে সম্পূর্ণ অদৃশ্য।**

**ধাপ ২০ — ২২তম দিন: ব্যান্ডের ওপর হাঁটা।** ক্লোজ ৬৫.১০।
$$\\bar{P} = 62.355, \\qquad \\sigma = 0.822481, \\qquad U = 64.0000, \\qquad L = 60.71$$
$$\\%b = \\frac{65.10 - 60.71}{64.0000 - 60.71} = \\frac{4.39}{3.29} = 1.3344, \\qquad BW = \\frac{3.29}{62.355} = 5.2761\\%$$

**পরপর দুটি ক্লোজ উপরের ব্যান্ডের বাইরে। ব্যান্ডউইডথ এখন ৫.২৭৬১% — স্কুইজ পাঠের ২.৯×।** যিনি ২১তম দিনে "উপরের ব্যান্ড ছুঁয়েছে, অতিক্রীত" বলে বিক্রি করেছেন তিনি ৬৪.২০-তে বিক্রি করে ৬৫.১০ ছাপতে দেখেছেন। **সংকেত কখনো বদলায়নি। রেজিম বদলেছে, আর নির্দেশকের রেজিমের জন্য কোনো ঘর নেই।**

**ধাপ ২১ — ট্রেডের দাম ধরুন, আর স্টপের জন্য ব্যান্ড ব্যবহার করবেন না।**
$$E = 64.20, \\qquad X = 62.22 \\;(\\text{২০-SMA}), \\qquad \\text{Risk} = 64.20 - 62.22 = 1.98$$
$$T = 68.50, \\qquad \\text{Reward} = 68.50 - 64.20 = 4.30$$
$$R{:}R = \\frac{4.30}{1.98} = 2.1717, \\qquad p^{*} = \\frac{1}{1 + 2.1717} = 0.3153 = 31.53\\%$$

**কেন SMA, নিচের ব্যান্ড নয়?** নিচের ব্যান্ড ছিল ৬১.১৫৮৭ আর $\\sigma$ বাড়ার সঙ্গে তা দূরে সরছে। **ব্যান্ড-ভিত্তিক স্টপ ঠিক তখনই চওড়া হয় যখন বাজার বেশি বিপজ্জনক** — একটি ঝুঁকি নিয়ন্ত্রণের যা করা উচিত তার উল্টো। SMA ট্রেন্ড সম্পর্কে একটি বক্তব্য, আর তার নিচে ফিরে বন্ধ হওয়া যুক্তিটিকে মিথ্যা প্রমাণ করে।

**ধাপ ২২ — দ্বিধার দাম ধরুন।** বদলে ২২তম দিনের ক্লোজ ৬৫.১০-এ কিনুন, একই স্টপে:

| | ২১তম দিনে কেনা | ২২তম দিন পর্যন্ত অপেক্ষা |
|---|---|---|
| প্রবেশ | **৬৪.২০** | ৬৫.১০ |
| স্টপ | ৬২.২২ | ৬২.২২ |
| ঝুঁকি | **১.৯৮** | ২.৮৮ |
| ৬৮.৫০ পর্যন্ত পুরস্কার | **৪.৩০** | ৩.৪০ |
| $R{:}R$ | **২.১৭১৭** | ১.১৮০৬ |
| ব্রেক-ইভেন | **৩১.৫৩%** | **৪৫.৮৬%** |

**এক সেশনের দ্বিধা প্রয়োজনীয় নির্ভুলতা ৩১.৫৩% থেকে ৪৫.৮৬%-এ নেয়।**

**আর লক্ষ করুন এটি অধ্যায় ৩০-এর শিক্ষার উল্টো, যেখানে রিটেস্টের অপেক্ষা ব্রেক-ইভেন ৪৩.০৯% থেকে ২৩.০১%-এ নামিয়েছিল।** নিয়মটি "অপেক্ষা করুন" বা "করবেন না" নয়। **নিয়মটি হলো: কাজ করার আগে আপনার প্রবেশ থেকে ইনভ্যালিডেশন পর্যন্ত দূরত্ব মাপুন।** অধ্যায় ৩০-এ ইনভ্যালিডেশন ছিল একটি স্থির কাঠামো, তাই অপেক্ষা ঝুঁকি ছোট করেছিল। এখানে ইনভ্যালিডেশন একটি উঠতি SMA যা দামের চেয়ে অনেক ধীরে ওঠে, তাই অপেক্ষা তা লম্বা করে। **একই শৃঙ্খলা, বিপরীত পদক্ষেপ, কারণ জ্যামিতি ভিন্ন।**

**ধাপ ২৩ — ওপরের কিছু গণ্য হওয়ার আগে ডিএসই যাচাইগুলো চালান।**

- **সার্কিট সীমা।** ৬২.১০ রেফারেন্সে ১০% ব্যান্ডে অনুমোদিত ক্লোজ ৫৫.৮৯ থেকে ৬৮.৩১। ২১তম দিনের ২.১০ টাকার চলাচল ৩.৪% — স্বচ্ছন্দ ভেতরে। **সীমাবদ্ধ হলে ক্লোজটি কোনো দাম হতো না আর $\\sigma$ নিচের দিকে কর্তিত হতো।**
- **ফ্লোর প্রাইস।** এই জানালায় কোনো সমতল অংশ নেই। **থাকলে — কুড়িটি অভিন্ন ক্লোজ — তখন $\\sum(P_i - \\bar{P})^2 = 0$, $\\sigma = 0$, $BW = 0\\%$, আর $\\%b = 0/0$।** দুর্বল সংকেত নয়: একটি স্থায়ী সর্বোচ্চ-প্রত্যয়ের নকল স্কুইজ ও একটি অসংজ্ঞায়িত অনুপাত। অধ্যায় ২৬-এর চিহ্ন দিয়ে জানালাটি বাদ দিন।
- **পাতলা ক্লোজ।** ৯,০০,০০০ ADV ও ৬২.১০ টাকায় পুরো এক দিন **৫.৫৮৯ কোটি টাকা**। দেখুন কেবল সেশন নয়, ক্লোজিং প্রিন্টেও আকার ছিল কি না। **বিচ্যুতি বর্গ হয়: ৫% ভুল ক্লোজ ১%-এর ২৫× ভেদাঙ্ক যোগ করে।**
- **শর্ট সাইড।** ৫ম দিনের ১.০৩০৩ কোনো শর্ট নয়। **এটি "কিনবেন না", তার বেশি কিছু নয়।**

**ধাপ ২৪ — আপনি যা গণনা করলেন তার এক-লাইনের সারসংক্ষেপ লিখুন।**

> ১২৫ সেশনের ৪র্থ পার্সেন্টাইলে ব্যান্ডউইডথ ১.৮২১৯%; স্কুইজ নিশ্চিত, কোনো দিকনির্দেশক বিষয়বস্তু ছাড়া। ২১তম দিনে ব্রেক, %b ২.৩৫৬২, ৩.১০× ভলিউমে; এক সেশনে ব্যান্ডউইডথ ১.৮৭× বেড়ে ৩.৪১১৫% ও নতুন ব্যান্ডের সাপেক্ষে %b রইল ১.৪৩২৮। লং ৬৪.২০, স্টপ ৬২.২২ (২০-SMA, ব্যান্ড নয়), লক্ষ্য ৬৮.৫০, $R{:}R$ ২.১৭১৭, ব্রেক-ইভেন ৩১.৫৩%।

**এই বাক্যটি লিখতে না পারলে আপনার বিশ্লেষণ শেষ হয়নি — আপনি কেবল নির্দেশকটি এঁকেছেন।**`,
    },

    mistakes: {
      en: `1. **Using the sample standard deviation ($n-1$) instead of the population one ($n$).** At $n = 20$ the ratio is $\\sqrt{20/19} = 1.025978$, so **every band is 2.60% too wide, permanently.** On MEGHNAPLY the upper band goes from 62.6657 to 62.6804 and bandwidth from 1.8219% to 1.8692% — but day 5's %b goes from **1.0303 (outside the band) to 1.0043 (rounds to "on the band")**, which silently reclassifies the event. Excel's \`STDEV\` and \`STDEV.S\` both default to $n-1$; you must use \`STDEV.P\`.
2. **"Price touched the upper band, so it is overbought."** Day 21 closed at %b **2.3562**, and day 22 closed *higher* at %b **1.3344** — still outside, after the bands had already widened **87%** trying to catch up. Selling the band tag means selling at 64.20 and watching 65.10 print. **A tag of the upper band is evidence of strength; mean reversion is a range behaviour and the indicator cannot tell you you are in a range.**
3. **Claiming the bands contain 95.45% of observations.** On the worked window **18 of 20 closes — exactly 90% — fall inside.** Three compounding reasons: the mean and $\\sigma$ are fitted to the same twenty points, returns are fat-tailed, and closes are serially correlated. **If you size on a 4.55% tail you are wrong by a factor of two before the market opens.**
4. **Defining the squeeze by an absolute threshold instead of a percentile.** "Bandwidth below 2%" flags MEGHNAPLY at 1.8219% and would flag a sleepy large-cap bank every single day. **The correct test is 1.8219% against a 125-session median of 6.42% — the 4th percentile, 28.4% of the stock's own normal width.** A threshold that is not relative to the instrument is not a test.
5. **Reading direction out of a squeeze.** $BW$ is built from squared deviations, and **squaring destroys sign** — the directional information is discarded before the number exists. A squeeze says a move is likely, never which way, and the first break is often a head-fake. **Bring the direction from Chapters 30–33; use the squeeze only for timing.**
6. **Placing the stop on the lower band.** As risk rises $\\sigma$ rises and the lower band falls away — **a band stop widens your risk exactly when the market becomes more dangerous.** On the worked trade the band was 61.1587 and moving down; the 20-SMA at **62.22** gives risk of 1.98 and $R{:}R$ of 2.1717. **Use the centre line, which is a trend statement, or ATR from Chapter 39.**
7. **Sizing positions off band width instead of ATR.** On day 21 band width rose **+87.6%** (1.1314 → 2.1226) while ATR rose **+9.86%** (1.05 → 1.1536). **Your position size just halved on a day you got the direction right.** $\\sigma$ squares deviations and sees only closes; ATR averages true range and sees the gap and the 2.30 intraday span. The 2.50 true range exceeded the 2.10 close-to-close move — **$\\sigma$ never saw the difference.**
8. **Running a squeeze screen across a floor-price window.** Twenty identical closes give $\\sum(P_i-\\bar{P})^2 = 0$, so $\\sigma = 0$, $BW = 0\\%$ — **the lowest bandwidth mathematically possible, flagged permanently at maximum conviction** — and $\\%b = 0/0$, which some languages resolve to infinity and rank first. **The screen does not degrade; it inverts, and hands you the most frozen shares on the exchange as your best breakout candidates.** Exclude the window with Chapter 26's flag.
9. **Trusting $\\sigma$ when closes printed at a circuit limit.** Censoring the tails shrinks the standard deviation systematically, **so the bands under-record volatility precisely on the days it spikes** — with no error, no flag, just a number that is too small. At a 62.10 reference and a 10% band, nothing outside 55.89–68.31 can be recorded at all.
10. **Treating the bands as Chapter 30 levels.** A level is positioned inventory in the order book; **nobody is standing at 62.6657, because that number did not exist until this morning's calculation and will be different tomorrow.** A support level under pressure holds or breaks; **a Bollinger Band retreats**, because the approach itself raises $\\sigma$.
11. **Assuming "wait for confirmation" is always the disciplined choice.** Waiting one session to buy 65.10 instead of 64.20 — same stop, same thesis — moves the break-even from **31.53% to 45.86%.** In Chapter 30 waiting *cut* the break-even from 43.09% to 23.01%. **The variable is the distance to your invalidation, not the virtue of patience.**`,
      bn: `১. **পপুলেশন ($n$)-এর বদলে স্যাম্পল স্ট্যান্ডার্ড ডেভিয়েশন ($n-1$) ব্যবহার।** $n = 20$-এ অনুপাত $\\sqrt{20/19} = 1.025978$, তাই **প্রতিটি ব্যান্ড স্থায়ীভাবে ২.৬০% বেশি চওড়া।** MEGHNAPLY-তে উপরের ব্যান্ড ৬২.৬৬৫৭ থেকে ৬২.৬৮০৪ ও ব্যান্ডউইডথ ১.৮২১৯% থেকে ১.৮৬৯২% হয় — কিন্তু ৫ম দিনের %b **১.০৩০৩ (ব্যান্ডের বাইরে) থেকে ১.০০৪৩ ("ব্যান্ডে" গোল হয়)** হয়ে যায়, যা নীরবে ঘটনাটির শ্রেণি বদলে দেয়। এক্সেলের \`STDEV\` ও \`STDEV.S\` দুটিই ডিফল্টে $n-1$; আপনাকে \`STDEV.P\` ব্যবহার করতে হবে।
২. **"দাম উপরের ব্যান্ড ছুঁয়েছে, তাই অতিক্রীত।"** ২১তম দিন বন্ধ হয়েছে %b **২.৩৫৬২**-তে, আর ২২তম দিন বন্ধ হয়েছে আরও *উঁচুতে* %b **১.৩৩৪৪**-তে — ব্যান্ড ধরার চেষ্টায় ইতিমধ্যে **৮৭%** চওড়া হওয়ার পরেও বাইরে। ব্যান্ড-স্পর্শ বিক্রি করা মানে ৬৪.২০-তে বিক্রি করে ৬৫.১০ ছাপতে দেখা। **উপরের ব্যান্ড ছোঁয়া শক্তির প্রমাণ; গড়মুখী ফেরা রেঞ্জের আচরণ আর আপনি রেঞ্জে আছেন কি না নির্দেশক তা বলতে পারে না।**
৩. **দাবি করা যে ব্যান্ড ৯৫.৪৫% পর্যবেক্ষণ ধারণ করে।** উদাহরণের জানালায় **কুড়িটির ১৮টি ক্লোজ — ঠিক ৯০% — ভেতরে পড়ে।** তিনটি চাপাচাপি কারণ: গড় ও $\\sigma$ ঐ একই কুড়িটি বিন্দুতেই ফিট করা, রিটার্নের প্রান্ত মোটা, আর ক্লোজ ক্রমিকভাবে সহসম্পর্কিত। **৪.৫৫% প্রান্তে আকার নিলে বাজার খোলার আগেই আপনি দ্বিগুণ ভুল।**
৪. **পার্সেন্টাইলের বদলে পরম সীমায় স্কুইজ সংজ্ঞায়িত করা।** "ব্যান্ডউইডথ ২%-এর নিচে" MEGHNAPLY-কে ১.৮২১৯%-এ চিহ্নিত করে আর একটি ঘুমন্ত বড় ব্যাংককে প্রতিদিন চিহ্নিত করত। **সঠিক পরীক্ষা হলো ১২৫-সেশনের মধ্যক ৬.৪২%-এর বিপরীতে ১.৮২১৯% — ৪র্থ পার্সেন্টাইল, শেয়ারটির নিজের স্বাভাবিক প্রস্থের ২৮.৪%।** যে সীমা উপকরণসাপেক্ষ নয় তা কোনো পরীক্ষাই নয়।
৫. **স্কুইজ থেকে দিক পড়া।** $BW$ গড়া বর্গ বিচ্যুতি থেকে, আর **বর্গ করা চিহ্ন ধ্বংস করে** — সংখ্যাটির অস্তিত্বের আগেই দিকনির্দেশক তথ্য ফেলে দেওয়া হয়। স্কুইজ বলে চলাচল সম্ভাব্য, কোন দিকে কখনো নয়, আর প্রথম ব্রেকটি প্রায়ই ধোঁকা। **দিক আনুন অধ্যায় ৩০–৩৩ থেকে; স্কুইজ কেবল সময় নির্ধারণে ব্যবহার করুন।**
৬. **নিচের ব্যান্ডে স্টপ বসানো।** ঝুঁকি বাড়লে $\\sigma$ বাড়ে ও নিচের ব্যান্ড দূরে সরে — **ব্যান্ড স্টপ ঠিক তখনই আপনার ঝুঁকি চওড়া করে যখন বাজার বেশি বিপজ্জনক।** উদাহরণের ট্রেডে ব্যান্ড ছিল ৬১.১৫৮৭ ও নিচে নামছিল; **৬২.২২**-এ ২০-SMA দেয় ১.৯৮ ঝুঁকি ও ২.১৭১৭ $R{:}R$। **কেন্দ্র রেখা ব্যবহার করুন, যা একটি ট্রেন্ড-বক্তব্য, বা অধ্যায় ৩৯-এর ATR।**
৭. **ATR-এর বদলে ব্যান্ডের প্রস্থে অবস্থানের আকার নেওয়া।** ২১তম দিনে ব্যান্ডের প্রস্থ বেড়েছে **+৮৭.৬%** (১.১৩১৪ → ২.১২২৬) যেখানে ATR বেড়েছে **+৯.৮৬%** (১.০৫ → ১.১৫৩৬)। **যেদিন আপনি দিক ঠিক পেয়েছেন সেদিনই আপনার অবস্থানের আকার অর্ধেক হয়ে গেল।** $\\sigma$ বিচ্যুতি বর্গ করে ও কেবল ক্লোজ দেখে; ATR true range গড় করে ও গ্যাপ ও ২.৩০ ইন্ট্রাডে বিস্তার দেখে। ২.৫০ true range ২.১০ ক্লোজ-থেকে-ক্লোজ চলাচলের চেয়ে বড় ছিল — **$\\sigma$ পার্থক্যটি কখনো দেখেনি।**
৮. **ফ্লোর-প্রাইসের জানালাজুড়ে স্কুইজ স্ক্রিন চালানো।** কুড়িটি অভিন্ন ক্লোজ দেয় $\\sum(P_i-\\bar{P})^2 = 0$, তাই $\\sigma = 0$, $BW = 0\\%$ — **গাণিতিকভাবে সম্ভব সর্বনিম্ন ব্যান্ডউইডথ, সর্বোচ্চ প্রত্যয়ে স্থায়ীভাবে চিহ্নিত** — আর $\\%b = 0/0$, যা কিছু ভাষা অসীমে মিটিয়ে প্রথম স্থান দেয়। **স্ক্রিনের মান কমে না; তা উল্টে যায়, আর এক্সচেঞ্জের সবচেয়ে জমাটবদ্ধ শেয়ারগুলোকে আপনার সেরা ব্রেকআউট প্রার্থী বলে ধরিয়ে দেয়।** অধ্যায় ২৬-এর চিহ্ন দিয়ে জানালাটি বাদ দিন।
৯. **সার্কিট সীমায় ছাপা ক্লোজে $\\sigma$-তে ভরসা করা।** প্রান্ত কেটে দিলে স্ট্যান্ডার্ড ডেভিয়েশন ব্যবস্থাগতভাবে ছোট হয়, **তাই ভোলাটিলিটি যেসব দিনে লাফায় ঠিক সেসব দিনেই ব্যান্ড তা কম লিপিবদ্ধ করে** — কোনো ভুলবার্তা নেই, কোনো চিহ্ন নেই, কেবল বড্ড ছোট একটি সংখ্যা। ৬২.১০ রেফারেন্স ও ১০% ব্যান্ডে ৫৫.৮৯–৬৮.৩১-এর বাইরে কিছুই লিপিবদ্ধই হতে পারে না।
১০. **ব্যান্ডকে অধ্যায় ৩০-এর লেভেল গণ্য করা।** লেভেল হলো অর্ডার বুকে অবস্থানরত ইনভেন্টরি; **৬২.৬৬৫৭-এ কেউ দাঁড়িয়ে নেই, কারণ আজ সকালের গণনার আগে ঐ সংখ্যাটির অস্তিত্বই ছিল না আর আগামীকাল তা ভিন্ন হবে।** চাপে পড়া সাপোর্ট লেভেল টেকে বা ভাঙে; **বলিঞ্জার ব্যান্ড পিছিয়ে যায়**, কারণ এগিয়ে আসাটাই $\\sigma$ বাড়ায়।
১১. **ধরে নেওয়া যে "নিশ্চিতকরণের অপেক্ষা" সবসময় শৃঙ্খলিত পছন্দ।** ৬৪.২০-এর বদলে ৬৫.১০ কিনতে এক সেশন অপেক্ষা — একই স্টপ, একই যুক্তি — ব্রেক-ইভেন **৩১.৫৩% থেকে ৪৫.৮৬%**-এ নেয়। অধ্যায় ৩০-এ অপেক্ষা ব্রেক-ইভেন ৪৩.০৯% থেকে ২৩.০১%-এ *নামিয়েছিল*। **চলকটি হলো আপনার ইনভ্যালিডেশন পর্যন্ত দূরত্ব, ধৈর্যের গুণ নয়।**`,
    },

    tips: {
      en: `1. **Use \`STDEV.P\`, never \`STDEV\` or \`STDEV.S\`, and write the denominator in the sheet header.** The 2.60% error at $n = 20$ is invisible on a chart and permanent in a screen. **A number you cannot see is a number you will not fix.**
2. **Check that your deviations sum to zero before you square anything.** On MEGHNAPLY they do — exactly. **If they do not, your mean is wrong, and every band, %b and bandwidth figure downstream is wrong.** It is a two-second check that catches a whole class of errors.
3. **Never read bandwidth as a level. Always rank it.** 1.8219% means nothing until you know the 125-session median is 6.42% and this is the 4th percentile at 28.4% of normal width. **Store the trailing bandwidth series alongside the current reading, or you have not computed a squeeze.**
4. **Get direction from price structure and timing from the squeeze — never the reverse.** Squaring destroys sign, so the squeeze is mathematically incapable of containing a direction. Chapters 30 through 33 supply the thesis. **A trader who says "the bands are tight, so I am buying" has skipped the analysis entirely.**
5. **Stop on the centre line or on ATR, never on a band.** The 20-SMA at 62.22 is a trend statement and gives risk 1.98 with $R{:}R$ 2.1717. **The lower band at 61.1587 was falling away as $\\sigma$ rose — a stop that loosens as danger increases is not a risk control.**
6. **Size on ATR, and keep a column showing both measures.** Same session: band width +87.6%, ATR +9.86%. **If your sizing rule keys off $\\sigma$, a correct directional call cuts your position in half. Chapter 49 uses ATR for exactly this reason.**
7. **Treat a close beyond the upper band as strength until price structure says otherwise.** Two consecutive closes outside — 2.3562 then 1.3344 — is a walk, not an extreme. **The mean-reversion reading is valid only inside a confirmed range, and the indicator cannot confirm one.**
8. **Exclude floor-price windows before computing, not after.** $\\sigma = 0$ gives $BW = 0\\%$ and $\\%b = 0/0$. **Do not "handle" the NaN; delete the window.** Any downstream fix leaves you ranking administratively frozen shares as your highest-conviction setups.
9. **Flag any close that printed at a circuit limit as suspect data.** It is the edge of the ruleset, not a price, and it censors the very tail the indicator is measuring. **A $\\sigma$ computed over limit-locked sessions is systematically too small and gives you no warning.**
10. **Verify that every close in the window traded meaningful value.** At 900,000 ADV and BDT 62.10 a full day is BDT 5.589 crore. **Deviations are squared, so one 5% bad close contributes 25× the variance of a 1% one — a single thin print does not distort the bands, it owns them.**
11. **On any upper-band signal, write down which of two actions you are taking: do not buy, or exit.** There is no third. **With no reliable retail short side, importing the classical "fade the upper band" playbook is importing a trade you cannot place.**
12. **Before entering, state the distance from your entry to your invalidation in taka, out loud.** 64.20 against 62.22 is 1.98 and needs 31.53%. One session later 65.10 against 62.22 is 2.88 and needs 45.86%. **Patience is not a virtue in itself; it is a variable whose sign depends on whether your stop is moving toward you or away.**`,
      bn: `১. **\`STDEV.P\` ব্যবহার করুন, কখনো \`STDEV\` বা \`STDEV.S\` নয়, আর শিটের হেডারে হরটি লিখে রাখুন।** $n = 20$-এ ২.৬০% ভুল চার্টে অদৃশ্য ও স্ক্রিনে স্থায়ী। **যে সংখ্যা আপনি দেখতে পান না তা আপনি ঠিকও করবেন না।**
২. **কিছু বর্গ করার আগে যাচাই করুন আপনার বিচ্যুতির যোগফল শূন্য।** MEGHNAPLY-তে তা ঠিক শূন্য। **না হলে আপনার গড় ভুল, আর পরের প্রতিটি ব্যান্ড, %b ও ব্যান্ডউইডথ ভুল।** এটি দুই সেকেন্ডের যাচাই যা গোটা এক শ্রেণির ভুল ধরে।
৩. **ব্যান্ডউইডথকে কখনো মাত্রা হিসেবে পড়বেন না। সবসময় ক্রম দিন।** ১.৮২১৯%-এর কোনো মানে নেই যতক্ষণ না জানেন ১২৫-সেশনের মধ্যক ৬.৪২% আর এটি স্বাভাবিক প্রস্থের ২৮.৪%-এ ৪র্থ পার্সেন্টাইল। **বর্তমান পাঠের পাশে পেছনের ব্যান্ডউইডথ ধারাটি রাখুন, নইলে আপনি স্কুইজ গণনাই করেননি।**
৪. **দিক নিন দামের কাঠামো থেকে ও সময় নিন স্কুইজ থেকে — কখনো উল্টো নয়।** বর্গ করা চিহ্ন ধ্বংস করে, তাই স্কুইজ গাণিতিকভাবেই দিক ধারণ করতে অক্ষম। অধ্যায় ৩০ থেকে ৩৩ যুক্তি জোগায়। **যিনি বলেন "ব্যান্ড আঁটসাঁট, তাই কিনছি" তিনি বিশ্লেষণটিই বাদ দিয়েছেন।**
৫. **কেন্দ্র রেখায় বা ATR-এ স্টপ দিন, কখনো ব্যান্ডে নয়।** ৬২.২২-এ ২০-SMA একটি ট্রেন্ড-বক্তব্য ও দেয় ১.৯৮ ঝুঁকি, ২.১৭১৭ $R{:}R$। **$\\sigma$ বাড়ার সঙ্গে ৬১.১৫৮৭-এর নিচের ব্যান্ড দূরে সরছিল — যে স্টপ বিপদ বাড়লে ঢিলে হয় তা ঝুঁকি নিয়ন্ত্রণ নয়।**
৬. **ATR-এ আকার নিন, আর দুটি পরিমাপই দেখায় এমন একটি কলাম রাখুন।** একই সেশন: ব্যান্ডের প্রস্থ +৮৭.৬%, ATR +৯.৮৬%। **আপনার আকার-নিয়ম $\\sigma$-তে বাঁধা থাকলে একটি সঠিক দিকনির্ণয় আপনার অবস্থান অর্ধেক করে দেয়। অধ্যায় ৪৯ ঠিক এ কারণেই ATR ব্যবহার করে।**
৭. **উপরের ব্যান্ডের বাইরে একটি ক্লোজকে শক্তি গণ্য করুন, যতক্ষণ না দামের কাঠামো অন্য কথা বলে।** পরপর দুটি ক্লোজ বাইরে — ২.৩৫৬২ তারপর ১.৩৩৪৪ — এটি হাঁটা, চরম নয়। **গড়মুখী পাঠ কেবল একটি নিশ্চিত রেঞ্জের ভেতরেই বৈধ, আর নির্দেশক কোনো রেঞ্জ নিশ্চিত করতে পারে না।**
৮. **ফ্লোর-প্রাইসের জানালা গণনার আগে বাদ দিন, পরে নয়।** $\\sigma = 0$ দেয় $BW = 0\\%$ ও $\\%b = 0/0$। **NaN "সামলানোর" চেষ্টা করবেন না; জানালাটি মুছে দিন।** পরে যেকোনো মেরামত আপনাকে প্রশাসনিকভাবে জমাটবদ্ধ শেয়ারকেই সর্বোচ্চ-প্রত্যয়ের সেটআপ হিসেবে ক্রম দিতে রাখে।
৯. **সার্কিট সীমায় ছাপা যেকোনো ক্লোজকে সন্দেহজনক ডেটা হিসেবে চিহ্নিত করুন।** এটি বিধিমালার প্রান্ত, দাম নয়, আর নির্দেশক যে প্রান্তটি মাপছে তা-ই এটি কেটে দেয়। **সীমায় আটকে থাকা সেশনজুড়ে গণনা করা $\\sigma$ ব্যবস্থাগতভাবে বড্ড ছোট আর আপনাকে কোনো সতর্কবার্তা দেয় না।**
১০. **যাচাই করুন জানালার প্রতিটি ক্লোজ অর্থবহ মূল্যে লেনদেন হয়েছে।** ৯,০০,০০০ ADV ও ৬২.১০ টাকায় পুরো এক দিন ৫.৫৮৯ কোটি টাকা। **বিচ্যুতি বর্গ হয়, তাই একটি ৫% খারাপ ক্লোজ ১%-এর ২৫× ভেদাঙ্ক যোগ করে — একটি পাতলা প্রিন্ট ব্যান্ড বিকৃত করে না, দখল করে।**
১১. **যেকোনো উপরের-ব্যান্ড সংকেতে লিখে ফেলুন আপনি দুটির কোন কাজটি করছেন: কিনছেন না, নাকি বেরোচ্ছেন।** তৃতীয় কোনোটি নেই। **নির্ভরযোগ্য খুচরা শর্ট সাইড ছাড়া ধ্রুপদী "উপরের ব্যান্ডের বিপক্ষে যান" পরিকল্পনা আমদানি করা মানে এমন একটি ট্রেড আমদানি করা যা আপনি বসাতেই পারবেন না।**
১২. **ঢোকার আগে আপনার প্রবেশ থেকে ইনভ্যালিডেশন পর্যন্ত দূরত্ব টাকায় স্পষ্ট করে বলুন।** ৬২.২২-এর বিপরীতে ৬৪.২০ হলো ১.৯৮ আর দরকার ৩১.৫৩%। এক সেশন পরে ৬২.২২-এর বিপরীতে ৬৫.১০ হলো ২.৮৮ আর দরকার ৪৫.৮৬%। **ধৈর্য নিজে কোনো গুণ নয়; এটি একটি চলক যার চিহ্ন নির্ভর করে আপনার স্টপ আপনার দিকে আসছে না দূরে যাচ্ছে তার ওপর।**`,
    },

    exercises: {
      en: `1. Reproduce §38.6 by hand. Confirm $\\sum P_i = 1{,}242.00$, $\\bar{P} = 62.10$, $\\sum(P_i - \\bar{P})^2 = 1.60$, $\\sigma = 0.282843$, $U = 62.6657$, $L = 61.5343$, $BW = 1.8219\\%$. **Verify the deviations sum to exactly zero before squaring.**
2. Recompute every figure with the sample denominator. Confirm $s = 0.290191$, the ratio $1.025978$, and that day 5's %b falls from 1.0303 to 1.0043. **How many of your own historical band exceedances would be reclassified as "touches" by this one substitution?**
3. Count the closes inside the bands. You should get 18 of 20 — exactly 90%. **Now do the same on ten DSE names over 250 sessions each. What is your empirical coverage, and how far is it from 95.45%?**
4. Compute %b for all twenty closes and confirm the table in §38.3. Verify each one a second way with $\\%b = 0.5 + z/4$. **Which method would you rather debug at 9 a.m.?**
5. Add day 21's close of 64.20 and recompute. Confirm $\\bar{P} = 62.22$, $\\sum(P_i-\\bar{P})^2 = 5.632$, $\\sigma = 0.530660$, $BW = 3.4115\\%$. **What fraction of the new sum of squares comes from that one close?** (Answer: $1.98^2 = 3.92$, about 70%.)
6. Compute %b for 64.20 against both the old bands (2.3562) and the new bands (1.4328). **Write one sentence explaining how a close can remain outside a band that just widened 87% to contain it.**
7. Build the ATR comparison. From $ATR = 1.05$, high 64.60, low 62.30, previous close 62.10, confirm $TR = 2.50$ and $ATR_{\\text{new}} = 1.1536$. **Tabulate band width +87.6% against ATR +9.86% and state which you would size on and why.**
8. Take one DSE name and compute its trailing 125-session bandwidth series. Find the 10th percentile. **How many squeeze days does a percentile rule give you per year, and how many would a fixed 2% threshold have given?**
9. Construct the pathological case: twenty identical closes at a floor price. Compute $\\sigma$, $BW$ and $\\%b$. **What does your programming language actually return for $\\%b$, and where does that stock rank in a screen sorted ascending by bandwidth?**
10. Find a session in your data where a DSE name closed at its circuit limit. Compute $\\sigma$ over the twenty-day window containing it, then again with that close excluded. **How much did censoring shrink your volatility estimate?**
11. Price both entries on the worked break: 64.20 and 65.10, stop 62.22, target 68.50. Confirm break-evens of 31.53% and 45.86%. **Then compare with Chapter 30, where waiting cut the break-even from 43.09% to 23.01%, and write three sentences on why the same discipline gives opposite answers.**`,
      bn: `১. §৩৮.৬ হাতে পুনরুৎপাদন করুন। নিশ্চিত করুন $\\sum P_i = 1{,}242.00$, $\\bar{P} = 62.10$, $\\sum(P_i - \\bar{P})^2 = 1.60$, $\\sigma = 0.282843$, $U = 62.6657$, $L = 61.5343$, $BW = 1.8219\\%$। **বর্গ করার আগে যাচাই করুন বিচ্যুতির যোগফল ঠিক শূন্য।**
২. স্যাম্পল হর দিয়ে প্রতিটি সংখ্যা পুনর্গণনা করুন। নিশ্চিত করুন $s = 0.290191$, অনুপাত $1.025978$, আর ৫ম দিনের %b ১.০৩০৩ থেকে ১.০০৪৩-এ নামে। **এই একটি বদলে আপনার নিজের কতগুলো ঐতিহাসিক ব্যান্ড-অতিক্রমণ "স্পর্শ" হিসেবে পুনঃশ্রেণিবদ্ধ হয়?**
৩. ব্যান্ডের ভেতরের ক্লোজ গুনুন। কুড়িটির ১৮টি পাওয়ার কথা — ঠিক ৯০%। **এবার দশটি ডিএসই নামে প্রতিটিতে ২৫০ সেশনে একই কাজ করুন। আপনার প্রায়োগিক ধারণক্ষমতা কত, আর তা ৯৫.৪৫% থেকে কতদূর?**
৪. কুড়িটি ক্লোজের সবগুলোর %b গণনা করে §৩৮.৩-এর ছক নিশ্চিত করুন। প্রতিটি দ্বিতীয়বার $\\%b = 0.5 + z/4$ দিয়ে যাচাই করুন। **সকাল ৯টায় কোন পদ্ধতিটি ডিবাগ করতে চাইবেন?**
৫. ২১তম দিনের ৬৪.২০ ক্লোজ যোগ করে পুনর্গণনা করুন। নিশ্চিত করুন $\\bar{P} = 62.22$, $\\sum(P_i-\\bar{P})^2 = 5.632$, $\\sigma = 0.530660$, $BW = 3.4115\\%$। **নতুন বর্গযোগফলের কত ভগ্নাংশ ঐ একটি ক্লোজ থেকে আসে?** (উত্তর: $1.98^2 = 3.92$, প্রায় ৭০%।)
৬. পুরোনো ব্যান্ড (২.৩৫৬২) ও নতুন ব্যান্ড (১.৪৩২৮) — দুটির সাপেক্ষেই ৬৪.২০-এর %b গণনা করুন। **এক বাক্যে লিখুন একটি ক্লোজ কীভাবে এমন একটি ব্যান্ডের বাইরে থাকতে পারে যা তাকে ধরতে সবেমাত্র ৮৭% চওড়া হয়েছে।**
৭. ATR তুলনাটি বানান। $ATR = 1.05$, হাই ৬৪.৬০, লো ৬২.৩০, আগের ক্লোজ ৬২.১০ থেকে নিশ্চিত করুন $TR = 2.50$ ও $ATR_{\\text{new}} = 1.1536$। **ব্যান্ডের প্রস্থ +৮৭.৬% বনাম ATR +৯.৮৬% ছকে তুলুন আর বলুন কোনটিতে আকার নেবেন ও কেন।**
৮. একটি ডিএসই নাম নিয়ে তার পেছনের ১২৫-সেশনের ব্যান্ডউইডথ ধারা গণনা করুন। ১০ম পার্সেন্টাইল বের করুন। **পার্সেন্টাইল নিয়ম আপনাকে বছরে কতগুলো স্কুইজ দিন দেয়, আর নির্দিষ্ট ২% সীমা কতগুলো দিত?**
৯. রোগগ্রস্ত কেসটি নির্মাণ করুন: ফ্লোর প্রাইসে কুড়িটি অভিন্ন ক্লোজ। $\\sigma$, $BW$ ও $\\%b$ গণনা করুন। **আপনার প্রোগ্রামিং ভাষা $\\%b$-র জন্য আসলে কী ফেরত দেয়, আর ব্যান্ডউইডথ অনুসারে ঊর্ধ্বক্রমে সাজানো একটি স্ক্রিনে ঐ শেয়ারটি কোথায় থাকে?**
১০. আপনার ডেটায় এমন একটি সেশন খুঁজুন যেখানে একটি ডিএসই নাম তার সার্কিট সীমায় বন্ধ হয়েছে। তা ধারণকারী কুড়ি-দিনের জানালায় $\\sigma$ গণনা করুন, তারপর ঐ ক্লোজ বাদ দিয়ে আবার করুন। **কর্তন আপনার ভোলাটিলিটি অনুমান কতটা ছোট করল?**
১১. উদাহরণের ব্রেকে দুটি প্রবেশেরই দাম ধরুন: ৬৪.২০ ও ৬৫.১০, স্টপ ৬২.২২, লক্ষ্য ৬৮.৫০। ৩১.৫৩% ও ৪৫.৮৬% ব্রেক-ইভেন নিশ্চিত করুন। **তারপর অধ্যায় ৩০-এর সঙ্গে তুলনা করুন, যেখানে অপেক্ষা ব্রেক-ইভেন ৪৩.০৯% থেকে ২৩.০১%-এ নামিয়েছিল, আর তিন বাক্যে লিখুন কেন একই শৃঙ্খলা বিপরীত উত্তর দেয়।**`,
    },

    summary: {
      en: `- **Bollinger Bands measure dispersion, not momentum.** The centre line is Chapter 34's 20-period SMA — with its 9.5-session lag intact — and the bands sit at $\\bar{P} \\pm 2\\sigma$. On MEGHNAPLY: $\\bar{P} = 62.10$, $\\sigma = 0.282843$, **bands at 61.5343 and 62.6657, a width of 1.1314 taka.**
- **The denominator is $n$, not $n-1$, and the error is invisible.** $\\sqrt{20/19} = 1.025978$, so \`STDEV.S\` inflates every band by **2.60% permanently.** The upper band moves 1.47 paisa — but **day 5's %b falls from 1.0303 (outside the band) to 1.0043 (reads as a touch)**, reclassifying the event without changing anything you can see on a chart.
- **The bands do not contain 95.45% of observations. On this window they contain exactly 90% — 18 of 20.** Three compounding reasons: the mean and $\\sigma$ are fitted to the same twenty points, returns are fat-tailed, and closes are serially correlated. **"Roughly one close in ten falls outside" is the honest sentence.**
- **%b is a rescaled z-score: $\\%b = 0.5 + z/4$, and it is unbounded.** That is its decisive advantage over RSI and the Stochastic, which saturate. **Day 21 printed %b of 2.3562 — more than a full band-width beyond the upper band — where RSI would have read "high" and stopped.**
- **A squeeze is a percentile, never a level.** Bandwidth of **1.8219% against a 125-session median of 6.42%** is the 4th percentile, running at 28.4% of the stock's own normal width. A fixed "below 2%" threshold flags this name and a sleepy bank every day alike. **And the squeeze is directionless — squaring destroys sign before the number exists.**
- **The squeeze switches itself off on the day it resolves.** Day 21's close alone contributed $1.98^2 = 3.92$, **70% of the entire new sum of squares of 5.632.** Bandwidth went 1.8219% → 3.4115%, an expansion of **1.87× in one session.** Any rule requiring the squeeze to persist at entry can never fire.
- **"It touched the upper band, so it is overbought" costs the most money of any error in this chapter.** After the bands widened 87% chasing it, day 21's close was **still at %b 1.4328 against the NEW bands**, and day 22 closed higher again at **%b 1.3344.** Selling the tag means selling 64.20 and watching 65.10. **A band tag is evidence of strength; mean reversion is a range behaviour the indicator cannot identify.**
- **The bands are not Chapter 30 levels and cannot hold a stop.** Nobody is standing at 62.6657 — the number did not exist before this morning's calculation. **A support level under pressure holds or breaks; a Bollinger Band retreats**, because the approach itself raises $\\sigma$. **A band stop widens your risk exactly when the market becomes more dangerous.**
- **Band width and ATR disagree, and the disagreement is structural.** Same session: **band width +87.6% (1.1314 → 2.1226), ATR +9.86% (1.05 → 1.1536).** $\\sigma$ squares deviations and sees only closes; ATR averages true range and sees the gap and the 2.30 intraday span — the 2.50 true range exceeded the 2.10 close-to-close move. **Use $\\sigma$ to ask if a close is unusual; use ATR to size and to stop, as Chapter 39 and Chapter 49 do.**
- **The trade is priced off the centre line, and patience has a sign.** Long 64.20, stop 62.22 (the 20-SMA), target 68.50: risk 1.98, reward 4.30, **$R{:}R$ 2.1717, break-even 31.53%.** Waiting one session to buy 65.10 moves it to **45.86%** — the reverse of Chapter 30, where waiting cut 43.09% to 23.01%. **The variable is the distance to your invalidation, not the virtue of waiting.**
- **On the DSE the indicator can invert, not merely degrade.** Twenty identical floor-price closes give $\\sigma = 0$, $BW = 0\\%$ and $\\%b = 0/0$ — **a permanent maximum-conviction fake squeeze that ranks the exchange's most frozen shares as your best breakouts.** Circuit limits censor the tails and shrink $\\sigma$ exactly when volatility spikes; one thin close 5% off contributes 25× the variance of a 1% one; and with no reliable short side **every upper-band signal reduces to "do not buy" or "exit," and nothing else.**`,
      bn: `- **বলিঞ্জার ব্যান্ড বিক্ষেপ মাপে, গতি নয়।** কেন্দ্র রেখা অধ্যায় ৩৪-এর ২০-পর্বের SMA — তার ৯.৫ সেশনের পিছিয়ে থাকা অক্ষত — আর ব্যান্ড বসে $\\bar{P} \\pm 2\\sigma$-তে। MEGHNAPLY-তে: $\\bar{P} = 62.10$, $\\sigma = 0.282843$, **ব্যান্ড ৬১.৫৩৪৩ ও ৬২.৬৬৫৭-এ, প্রস্থ ১.১৩১৪ টাকা।**
- **হর $n$, $n-1$ নয়, আর ভুলটি অদৃশ্য।** $\\sqrt{20/19} = 1.025978$, তাই \`STDEV.S\` প্রতিটি ব্যান্ড **স্থায়ীভাবে ২.৬০% ফোলায়।** উপরের ব্যান্ড নড়ে ১.৪৭ পয়সা — কিন্তু **৫ম দিনের %b ১.০৩০৩ (ব্যান্ডের বাইরে) থেকে ১.০০৪৩ (স্পর্শ হিসেবে পড়ে)**-এ নামে, চার্টে দেখতে পাওয়া কিছু না বদলেই ঘটনাটির শ্রেণি বদলে দেয়।
- **ব্যান্ড ৯৫.৪৫% পর্যবেক্ষণ ধারণ করে না। এই জানালায় তা ঠিক ৯০% ধারণ করে — কুড়িটির ১৮টি।** তিনটি চাপাচাপি কারণ: গড় ও $\\sigma$ ঐ একই কুড়িটি বিন্দুতেই ফিট করা, রিটার্নের প্রান্ত মোটা, আর ক্লোজ ক্রমিকভাবে সহসম্পর্কিত। **"মোটামুটি দশটির একটি ক্লোজ বাইরে পড়ে" — এটিই সৎ বাক্য।**
- **%b হলো নতুন মাপে বসানো z-স্কোর: $\\%b = 0.5 + z/4$, আর এটি সীমাহীন।** RSI ও স্টোক্যাস্টিকের ওপর এটিই এর নির্ণায়ক সুবিধা, যারা স্যাচুরেট করে। **২১তম দিন %b ছেপেছে ২.৩৫৬২ — উপরের ব্যান্ডের বাইরে পুরো এক ব্যান্ড-প্রস্থেরও বেশি — যেখানে RSI "উঁচু" পড়ে থেমে যেত।**
- **স্কুইজ একটি পার্সেন্টাইল, কখনো একটি মাত্রা নয়।** **১২৫-সেশনের মধ্যক ৬.৪২%-এর বিপরীতে ১.৮২১৯% ব্যান্ডউইডথ** হলো ৪র্থ পার্সেন্টাইল, শেয়ারটির নিজের স্বাভাবিক প্রস্থের ২৮.৪%-এ। নির্দিষ্ট "২%-এর নিচে" সীমা এই নাম ও একটি ঘুমন্ত ব্যাংককে সমানভাবে প্রতিদিন চিহ্নিত করে। **আর স্কুইজ দিকহীন — সংখ্যাটির অস্তিত্বের আগেই বর্গ করা চিহ্ন ধ্বংস করে।**
- **স্কুইজ যেদিন নিষ্পত্তি হয় সেদিনই নিজেকে বন্ধ করে।** ২১তম দিনের ক্লোজ একাই যোগ করেছে $1.98^2 = 3.92$, **৫.৬৩২ নতুন বর্গযোগফলের ৭০%।** ব্যান্ডউইডথ ১.৮২১৯% → ৩.৪১১৫%, **এক সেশনে ১.৮৭× বিস্তার।** প্রবেশের সময় স্কুইজ টিকে থাকার দাবি করা কোনো নিয়ম কখনো চালু হতে পারে না।
- **"উপরের ব্যান্ড ছুঁয়েছে, তাই অতিক্রীত" এই অধ্যায়ের সব ভুলের মধ্যে সবচেয়ে বেশি টাকা খায়।** ব্যান্ড ৮৭% চওড়া হয়ে পিছু ধাওয়ার পরেও ২১তম দিনের ক্লোজ **নতুন ব্যান্ডের সাপেক্ষে এখনো %b ১.৪৩২৮**-এ ছিল, আর ২২তম দিন আবার আরও উঁচুতে বন্ধ হয়েছে **%b ১.৩৩৪৪**-এ। স্পর্শ বিক্রি করা মানে ৬৪.২০ বিক্রি করে ৬৫.১০ দেখা। **ব্যান্ড-স্পর্শ শক্তির প্রমাণ; গড়মুখী ফেরা রেঞ্জের আচরণ যা নির্দেশক শনাক্ত করতে পারে না।**
- **ব্যান্ড অধ্যায় ৩০-এর লেভেল নয় আর স্টপ ধরে রাখতে পারে না।** ৬২.৬৬৫৭-এ কেউ দাঁড়িয়ে নেই — আজ সকালের গণনার আগে সংখ্যাটির অস্তিত্বই ছিল না। **চাপে পড়া সাপোর্ট লেভেল টেকে বা ভাঙে; বলিঞ্জার ব্যান্ড পিছিয়ে যায়**, কারণ এগিয়ে আসাটাই $\\sigma$ বাড়ায়। **ব্যান্ড স্টপ ঠিক তখনই আপনার ঝুঁকি চওড়া করে যখন বাজার বেশি বিপজ্জনক।**
- **ব্যান্ডের প্রস্থ ও ATR একমত নয়, আর অমিলটি কাঠামোগত।** একই সেশন: **ব্যান্ডের প্রস্থ +৮৭.৬% (১.১৩১৪ → ২.১২২৬), ATR +৯.৮৬% (১.০৫ → ১.১৫৩৬)।** $\\sigma$ বিচ্যুতি বর্গ করে ও কেবল ক্লোজ দেখে; ATR true range গড় করে ও গ্যাপ ও ২.৩০ ইন্ট্রাডে বিস্তার দেখে — ২.৫০ true range ২.১০ ক্লোজ-থেকে-ক্লোজ চলাচলের চেয়ে বড় ছিল। **একটি ক্লোজ অস্বাভাবিক কি না জিজ্ঞেস করতে $\\sigma$ ব্যবহার করুন; আকার ও স্টপের জন্য ATR, যেমন অধ্যায় ৩৯ ও ৪৯ করে।**
- **ট্রেডের দাম ধরা হয় কেন্দ্র রেখা থেকে, আর ধৈর্যের একটি চিহ্ন আছে।** লং ৬৪.২০, স্টপ ৬২.২২ (২০-SMA), লক্ষ্য ৬৮.৫০: ঝুঁকি ১.৯৮, পুরস্কার ৪.৩০, **$R{:}R$ ২.১৭১৭, ব্রেক-ইভেন ৩১.৫৩%।** ৬৫.১০ কিনতে এক সেশন অপেক্ষা তা **৪৫.৮৬%**-এ নেয় — অধ্যায় ৩০-এর উল্টো, যেখানে অপেক্ষা ৪৩.০৯%-কে ২৩.০১%-এ নামিয়েছিল। **চলকটি হলো আপনার ইনভ্যালিডেশন পর্যন্ত দূরত্ব, অপেক্ষার গুণ নয়।**
- **ডিএসই-তে নির্দেশকটি কেবল খারাপ হয় না, উল্টে যেতে পারে।** ফ্লোর প্রাইসে কুড়িটি অভিন্ন ক্লোজ দেয় $\\sigma = 0$, $BW = 0\\%$ ও $\\%b = 0/0$ — **একটি স্থায়ী সর্বোচ্চ-প্রত্যয়ের নকল স্কুইজ যা এক্সচেঞ্জের সবচেয়ে জমাটবদ্ধ শেয়ারকেই আপনার সেরা ব্রেকআউট হিসেবে ক্রম দেয়।** সার্কিট সীমা প্রান্ত কেটে দেয় ও ভোলাটিলিটি লাফানোর মুহূর্তেই $\\sigma$ ছোট করে; ৫% দূরের একটি পাতলা ক্লোজ ১%-এর ২৫× ভেদাঙ্ক যোগ করে; আর নির্ভরযোগ্য শর্ট সাইড ছাড়া **প্রতিটি উপরের-ব্যান্ড সংকেত "কিনবেন না" বা "বেরিয়ে যান"-এ নেমে আসে, তার বেশি কিছু নয়।**`,
    },
  },

  interview: [
    {
      q: {
        en: 'Why does the population standard deviation matter here when the difference is under two paisa?',
        bn: 'পার্থক্য দুই পয়সারও কম হলে এখানে পপুলেশন স্ট্যান্ডার্ড ডেভিয়েশন কেন গুরুত্বপূর্ণ?',
      },
      a: {
        en: 'Because the error is invisible, uniform and permanent, which is the worst combination a bug can have. The ratio between the two is the square root of twenty over nineteen, or one point zero two five nine, so every band comes out two point six percent wider than it should, in both directions, on every observation, forever. On the worked example the upper band moves from sixty-two point six six five seven to sixty-two point six eight zero four, about one and a half paisa, and you cannot see that on a chart. But look at what it does downstream. Day five closed at sixty-two point seventy, and with the correct denominator its percent b reads one point zero three zero three, which is unambiguously outside the band. With the sample denominator it reads one point zero zero four three, which rounds to one point zero zero on almost every platform and gets recorded as a touch rather than an excursion. The event has been reclassified and nothing errored. The same thing happens to any fixed squeeze threshold: bandwidth reads one point eight two one nine percent correctly and one point eight six nine two percent incorrectly, so a rule set at one point eight five percent fires on one and not the other, on identical data. There is also a conceptual point I would make. Bessel\'s correction exists to remove bias when you estimate an unknown population variance from a sample, but there is no population here. The twenty closes are the entire object you are describing, not a draw from something larger. So the population denominator is not merely the convention Bollinger specified — it is the conceptually correct statistic, and the sample version is solving a problem you do not have.',
        bn: 'কারণ ভুলটি অদৃশ্য, সমান ও স্থায়ী, আর একটি ত্রুটির পক্ষে এটিই সবচেয়ে খারাপ সমন্বয়। দুটির অনুপাত হলো কুড়ি ভাগ উনিশের বর্গমূল, অর্থাৎ এক দশমিক শূন্য দুই পাঁচ নয়, তাই প্রতিটি ব্যান্ড যা হওয়া উচিত তার চেয়ে দুই দশমিক ছয় শতাংশ বেশি চওড়া বেরোয়, দুই দিকেই, প্রতিটি পর্যবেক্ষণে, চিরকাল। উদাহরণে উপরের ব্যান্ড বাষট্টি দশমিক ছয় ছয় পাঁচ সাত থেকে বাষট্টি দশমিক ছয় আট শূন্য চারে সরে, প্রায় দেড় পয়সা, আর চার্টে আপনি তা দেখতে পাবেন না। কিন্তু দেখুন এটি পরে কী করে। পঞ্চম দিন বন্ধ হয়েছে বাষট্টি দশমিক সত্তরে, আর সঠিক হরে তার পার্সেন্ট বি পড়ে এক দশমিক শূন্য তিন শূন্য তিন, যা দ্ব্যর্থহীনভাবে ব্যান্ডের বাইরে। স্যাম্পল হরে তা পড়ে এক দশমিক শূন্য শূন্য চার তিন, যা প্রায় প্রতিটি প্ল্যাটফর্মে এক দশমিক শূন্য শূন্যতে গোল হয় আর বহির্গমন নয়, স্পর্শ হিসেবে লিপিবদ্ধ হয়। ঘটনাটির শ্রেণি বদলে গেছে আর কোথাও কোনো ভুলবার্তা আসেনি। যেকোনো নির্দিষ্ট স্কুইজ সীমার ক্ষেত্রেও তাই: ব্যান্ডউইডথ সঠিকভাবে পড়ে এক দশমিক আট দুই এক নয় শতাংশ আর ভুলভাবে এক দশমিক আট ছয় নয় দুই শতাংশ, তাই এক দশমিক আট পাঁচ শতাংশে বসানো একটি নিয়ম অভিন্ন ডেটায় একটিতে চালু হয় ও অন্যটিতে নয়। একটি ধারণাগত কথাও বলব। বেসেলের সংশোধনের অস্তিত্ব একটি নমুনা থেকে অজানা পপুলেশন ভেদাঙ্ক অনুমানের পক্ষপাত সরানোর জন্য, কিন্তু এখানে কোনো পপুলেশন নেই। কুড়িটি ক্লোজই আপনার বর্ণিত গোটা বস্তু, বৃহত্তর কিছু থেকে টানা নমুনা নয়। তাই পপুলেশন হর কেবল বলিঞ্জারের নির্দিষ্ট করা প্রথা নয় — এটি ধারণাগতভাবে সঠিক পরিসংখ্যান, আর স্যাম্পল সংস্করণটি এমন একটি সমস্যা সমাধান করছে যা আপনার নেই।',
      },
    },
    {
      q: {
        en: 'Price closed above the upper band. Is the stock overbought?',
        bn: 'দাম উপরের ব্যান্ডের ওপরে বন্ধ হয়েছে। শেয়ারটি কি অতিক্রীত?',
      },
      a: {
        en: 'No, and this is the single most expensive misreading of this indicator because it makes you sell on the first day of a move. The reason is structural rather than empirical. The bands are computed from the same twenty closes whose scatter they are measuring, and today\'s close is one of those twenty, so a large move up drags the mean up and inflates sigma at the same time. The band does not cap the price; it chases it. On the worked example day twenty-one closed at sixty-four twenty on three point one times average volume, and against the bands as they stood before the session that is a percent b of two point three five six two — more than a full band width beyond the upper band. Then I recompute. The sum of squared deviations goes from one point six to five point six three two, bandwidth expands from one point eight two one nine percent to three point four one one five percent, which is one point eight seven times in a single session, and percent b against the new wider bands is still one point four three two eight. The band widened eighty-seven percent and could not catch the price. Day twenty-two closed higher again at sixty-five ten, still outside at one point three three four four. Anyone who sold the tag sold at sixty-four twenty and watched sixty-five ten print with their own indicator saying outside the band the whole way. What I would say instead is that a close beyond the upper band is evidence of strength. The mean-reversion reading is real, but it is a range behaviour — inside the earlier twenty sessions, day three at minus zero point zero three zero three and day five at one point zero three zero three both reverted immediately. The indicator cannot tell you which regime you are in. Price structure from chapters thirty through thirty-three can, and that is where the regime call has to come from.',
        bn: 'না, আর এটিই এই নির্দেশকের সবচেয়ে ব্যয়বহুল ভুল পাঠ কারণ এটি আপনাকে একটি চলাচলের প্রথম দিনেই বিক্রি করায়। কারণটি প্রায়োগিক নয়, কাঠামোগত। ব্যান্ড গণনা হয় ঐ একই কুড়িটি ক্লোজ থেকে যাদের বিক্ষেপ তারা মাপছে, আর আজকের ক্লোজ ঐ কুড়িটির একটি, তাই একটি বড় ঊর্ধ্বমুখী চলাচল একই সঙ্গে গড়কে ওপরে টানে ও সিগমা ফোলায়। ব্যান্ড দামকে ঢাকনা দেয় না; পিছু ধাওয়া করে। উদাহরণে একুশতম দিন বন্ধ হয়েছে চৌষট্টি বিশে, গড়ের তিন দশমিক এক গুণ ভলিউমে, আর সেশনের আগে ব্যান্ড যেখানে ছিল তার সাপেক্ষে তা পার্সেন্ট বি দুই দশমিক তিন পাঁচ ছয় দুই — উপরের ব্যান্ডের বাইরে পুরো এক ব্যান্ড-প্রস্থেরও বেশি। তারপর আমি পুনর্গণনা করি। বর্গ বিচ্যুতির যোগফল এক দশমিক ছয় থেকে পাঁচ দশমিক ছয় তিন দুইয়ে যায়, ব্যান্ডউইডথ এক দশমিক আট দুই এক নয় শতাংশ থেকে তিন দশমিক চার এক এক পাঁচ শতাংশে বিস্তৃত হয়, যা এক সেশনে এক দশমিক আট সাত গুণ, আর নতুন চওড়া ব্যান্ডের সাপেক্ষে পার্সেন্ট বি এখনো এক দশমিক চার তিন দুই আট। ব্যান্ড সাতাশি শতাংশ চওড়া হয়েও দামকে ধরতে পারেনি। বাইশতম দিন আবার আরও উঁচুতে পঁয়ষট্টি দশে বন্ধ হয়েছে, এখনো বাইরে, এক দশমিক তিন তিন চার চারে। যিনি স্পর্শটি বিক্রি করেছেন তিনি চৌষট্টি বিশে বিক্রি করে পঁয়ষট্টি দশ ছাপতে দেখেছেন, আর তাঁর নিজের নির্দেশক পুরো পথ ধরে বলছিল ব্যান্ডের বাইরে। আমি বরং বলব উপরের ব্যান্ডের বাইরে একটি ক্লোজ শক্তির প্রমাণ। গড়মুখী পাঠ বাস্তব, কিন্তু তা রেঞ্জের আচরণ — আগের কুড়ি সেশনের ভেতরে তৃতীয় দিন বিয়োগ শূন্য দশমিক শূন্য তিন শূন্য তিনে ও পঞ্চম দিন এক দশমিক শূন্য তিন শূন্য তিনে দুটিই সঙ্গে সঙ্গে ফিরে এসেছে। আপনি কোন রেজিমে আছেন তা নির্দেশক বলতে পারে না। অধ্যায় ত্রিশ থেকে তেত্রিশের দামের কাঠামো পারে, আর রেজিমের সিদ্ধান্ত সেখান থেকেই আসতে হবে।',
      },
    },
    {
      q: {
        en: 'Your bandwidth is at the fourth percentile. What have you learned, and what have you not?',
        bn: 'আপনার ব্যান্ডউইডথ চতুর্থ পার্সেন্টাইলে। আপনি কী শিখলেন, আর কী শিখলেন না?',
      },
      a: {
        en: 'I have learned one thing, and it is worth having: dispersion is abnormally low for this instrument, and dispersion mean-reverts. On the worked name bandwidth is one point eight two one nine percent against a hundred-and-twenty-five-session median of six point four two percent, so the bands are running at twenty-eight point four percent of the stock\'s own normal width. That is a real regime statement and I would take it seriously, because a market that has stopped disagreeing about price has stopped generating information, and the resolution of that stalemate tends to be an event. What I have not learned is direction, and I want to be precise about why, because this is not a limitation that better data fixes. Bandwidth is built from sigma, sigma is built from squared deviations, and squaring destroys sign. The directional information is discarded by the arithmetic before the number exists. So a squeeze is mathematically incapable of pointing anywhere, and anyone reading direction out of it is reading it out of something else and giving the squeeze the credit. I have also not learned timing, only that a resolution is more likely than usual. And there is a nastier property: the squeeze switches itself off on the day it resolves. Day twenty-one\'s close alone contributed one point nine eight squared, or three point nine two, which is about seventy percent of the entire new sum of squares of five point six three two, and bandwidth nearly doubled in that one session. So any rule that requires the squeeze condition to still be true at the moment you enter can never fire. In practice I bring the direction from price structure — the levels of chapter thirty, the consolidation work of chapter thirty-three — and I use the squeeze only to decide that now is when I want to be watching. Finally I would insist on the percentile rather than a level. One point eight two percent is a violent squeeze on this name and an ordinary Tuesday on a large sleepy bank, so a fixed threshold is not a test at all.',
        bn: 'আমি একটি জিনিস শিখেছি, আর তা রাখার মতো: এই উপকরণের জন্য বিক্ষেপ অস্বাভাবিকভাবে কম, আর বিক্ষেপ গড়মুখী। উদাহরণের নামে ব্যান্ডউইডথ এক দশমিক আট দুই এক নয় শতাংশ, একশো পঁচিশ সেশনের মধ্যক ছয় দশমিক চার দুই শতাংশের বিপরীতে, তাই ব্যান্ড চলছে শেয়ারটির নিজের স্বাভাবিক প্রস্থের আটাশ দশমিক চার শতাংশে। এটি একটি প্রকৃত রেজিম-বক্তব্য আর আমি একে গুরুত্ব দেব, কারণ যে বাজার দাম নিয়ে দ্বিমত করা বন্ধ করেছে সে তথ্য তৈরি করা বন্ধ করেছে, আর ঐ অচলাবস্থার নিষ্পত্তি সাধারণত একটি ঘটনা হয়। যা শিখিনি তা হলো দিক, আর কেন তা নিয়ে আমি নির্ভুল হতে চাই, কারণ এটি এমন সীমাবদ্ধতা নয় যা ভালো ডেটা মেরামত করে। ব্যান্ডউইডথ গড়া সিগমা থেকে, সিগমা গড়া বর্গ বিচ্যুতি থেকে, আর বর্গ করা চিহ্ন ধ্বংস করে। সংখ্যাটির অস্তিত্বের আগেই পাটিগণিত দিকনির্দেশক তথ্য ফেলে দেয়। তাই স্কুইজ গাণিতিকভাবেই কোথাও নির্দেশ করতে অক্ষম, আর যিনি এর থেকে দিক পড়ছেন তিনি অন্য কিছু থেকে পড়ছেন আর কৃতিত্ব স্কুইজকে দিচ্ছেন। সময়ও শিখিনি, কেবল এটুকু যে নিষ্পত্তি স্বাভাবিকের চেয়ে বেশি সম্ভাব্য। আর একটি আরও বিরক্তিকর ধর্ম আছে: স্কুইজ যেদিন নিষ্পত্তি হয় সেদিনই নিজেকে বন্ধ করে দেয়। একুশতম দিনের ক্লোজ একাই যোগ করেছে এক দশমিক নয় আটের বর্গ, অর্থাৎ তিন দশমিক নয় দুই, যা পাঁচ দশমিক ছয় তিন দুইয়ের গোটা নতুন বর্গযোগফলের প্রায় সত্তর শতাংশ, আর ঐ এক সেশনেই ব্যান্ডউইডথ প্রায় দ্বিগুণ হয়েছে। তাই যে নিয়ম দাবি করে আপনি ঢোকার মুহূর্তে স্কুইজ শর্তটি এখনো সত্য থাকতে হবে তা কখনো চালু হতে পারে না। বাস্তবে আমি দিক আনি দামের কাঠামো থেকে — অধ্যায় ত্রিশের লেভেল, অধ্যায় তেত্রিশের কনসোলিডেশনের কাজ — আর স্কুইজ ব্যবহার করি কেবল এটুকু ঠিক করতে যে এখনই আমার নজর রাখার সময়। শেষে আমি মাত্রা নয়, পার্সেন্টাইলেই জোর দেব। এক দশমিক আট দুই শতাংশ এই নামে প্রচণ্ড স্কুইজ আর একটি বড় ঘুমন্ত ব্যাংকে সাধারণ মঙ্গলবার, তাই নির্দিষ্ট সীমা কোনো পরীক্ষাই নয়।',
      },
    },
    {
      q: {
        en: 'Would you put your stop on the lower band? Why or why not?',
        bn: 'আপনি কি নিচের ব্যান্ডে আপনার স্টপ বসাবেন? কেন বা কেন নয়?',
      },
      a: {
        en: 'No, and the reason is that a band-based stop moves in exactly the wrong direction as risk increases. A stop belongs at the price where the thesis is falsified, and that has to be a property of the structure rather than of an arithmetic construct that is recomputed every morning. The lower band is the mean minus two sigma, so when sigma rises — which is precisely when the market has become more dangerous — the lower band falls away and your stop gets further from your entry. A risk control that loosens as danger increases is not a risk control. On the worked trade the lower band after the break was sixty-one point one five eight seven and moving down, whereas the twenty-period simple moving average was sixty-two point two two. I use the moving average, because it is a statement about trend and a close back below it genuinely falsifies the reason I am long. That gives risk of one taka ninety-eight against an entry of sixty-four twenty, a reward of four taka thirty to the next structure at sixty-eight fifty, a ratio of two point one seven one seven and a break-even win rate of thirty-one point five three percent. The broader point is the one from chapter thirty: the bands are not support and resistance at all. A level exists because identifiable people have resting orders and unfinished business at a price, and nobody is standing at sixty-two point six six five seven — that number did not exist until this morning\'s calculation and will be different tomorrow. A support level under pressure either holds or breaks; a Bollinger Band retreats, because the approach itself raises sigma. Something that runs away from what is chasing it cannot function as a level and cannot anchor a stop. If I wanted a volatility-based stop I would use ATR from chapter thirty-nine, which sees the gap and the intraday range that sigma is blind to.',
        bn: 'না, আর কারণ হলো ঝুঁকি বাড়ার সঙ্গে ব্যান্ড-ভিত্তিক স্টপ ঠিক ভুল দিকে সরে। স্টপের জায়গা সেই দাম যেখানে যুক্তি মিথ্যা প্রমাণিত হয়, আর তা প্রতিদিন সকালে পুনর্গণিত একটি পাটিগাণিতিক নির্মাণের নয়, কাঠামোর ধর্ম হতে হবে। নিচের ব্যান্ড হলো গড় বিয়োগ দুই সিগমা, তাই সিগমা বাড়লে — যা ঠিক তখনই ঘটে যখন বাজার বেশি বিপজ্জনক হয়েছে — নিচের ব্যান্ড দূরে সরে যায় আর আপনার স্টপ প্রবেশ থেকে আরও দূরে চলে যায়। যে ঝুঁকি নিয়ন্ত্রণ বিপদ বাড়লে ঢিলে হয় তা ঝুঁকি নিয়ন্ত্রণ নয়। উদাহরণের ট্রেডে ব্রেকের পর নিচের ব্যান্ড ছিল একষট্টি দশমিক এক পাঁচ আট সাত আর নিচে নামছিল, যেখানে কুড়ি-পর্বের সরল মুভিং অ্যাভারেজ ছিল বাষট্টি দশমিক দুই দুই। আমি মুভিং অ্যাভারেজ ব্যবহার করি, কারণ তা ট্রেন্ড সম্পর্কে একটি বক্তব্য আর তার নিচে ফিরে বন্ধ হওয়া সত্যিই আমার লং থাকার কারণটি মিথ্যা প্রমাণ করে। চৌষট্টি বিশের প্রবেশের বিপরীতে তা দেয় এক টাকা আটানব্বই ঝুঁকি, আটষট্টি পঞ্চাশের পরবর্তী কাঠামো পর্যন্ত চার টাকা ত্রিশ পুরস্কার, দুই দশমিক এক সাত এক সাত অনুপাত ও একত্রিশ দশমিক পাঁচ তিন শতাংশ ব্রেক-ইভেন উইন রেট। বৃহত্তর কথাটি অধ্যায় ত্রিশ থেকেই: ব্যান্ড আদৌ সাপোর্ট ও রেজিস্ট্যান্স নয়। একটি লেভেলের অস্তিত্ব কারণ শনাক্তযোগ্য মানুষের এক দামে জমা অর্ডার ও অসমাপ্ত কাজ আছে, আর বাষট্টি দশমিক ছয় ছয় পাঁচ সাতে কেউ দাঁড়িয়ে নেই — আজ সকালের গণনার আগে ঐ সংখ্যাটির অস্তিত্বই ছিল না আর আগামীকাল তা ভিন্ন হবে। চাপে পড়া সাপোর্ট লেভেল হয় টেকে নয় ভাঙে; বলিঞ্জার ব্যান্ড পিছিয়ে যায়, কারণ এগিয়ে আসাটাই সিগমা বাড়ায়। যে জিনিস তার পিছু নেওয়া জিনিসটির কাছ থেকে পালায় তা লেভেল হিসেবে কাজ করতে পারে না ও স্টপ নোঙর করতে পারে না। ভোলাটিলিটি-ভিত্তিক স্টপ চাইলে আমি অধ্যায় ঊনচল্লিশের ATR ব্যবহার করতাম, যা সেই গ্যাপ ও ইন্ট্রাডে পরিসর দেখে যাতে সিগমা অন্ধ।',
      },
    },
    {
      q: {
        en: 'Band width rose eighty-eight percent and ATR rose ten percent on the same session. Which is right?',
        bn: 'একই সেশনে ব্যান্ডের প্রস্থ আটাশি শতাংশ ও ATR দশ শতাংশ বেড়েছে। কোনটি ঠিক?',
      },
      a: {
        en: 'Both, because they are answering different questions, and the honest answer is to say which question you are asking before you pick. On the worked session band width went from one point one three one four to two point one two two six, which is plus eighty-seven point six percent, while ATR went from one point zero five to one point one five three six, which is plus nine point eight six percent. Three structural differences explain the gap. First, the input set: sigma sees only closes, whereas true range sees the high, the low and the previous close, so ATR sees gaps and intraday range and sigma is blind to both. On that very session the true range was two taka fifty while the close-to-close move was only two taka ten — the two point three zero intraday span and the gap simply do not exist as far as sigma is concerned. Second, the response function: sigma squares deviations while Wilder\'s average folds one true range linearly into a fourteen-period smoothing. The new close sat one taka ninety-eight from the mean and contributed one point nine eight squared, or three point nine two, which is about seventy percent of the entire new sum of squares. One day can own a squared measure. Third, memory: sigma has a hard twenty-day window, so a big move drops out abruptly on day twenty-one and the bands snap in for reasons unconnected to today, whereas ATR decays geometrically with no cliff. So my rule is: use the sigma bands to ask whether today\'s close is unusual relative to recent closes, and use ATR to size a position or place a stop. That is not an aesthetic preference. If your sizing keys off band width, a correct directional call just cut your position roughly in half on the day you were right, which is a perverse incentive built into the arithmetic. Chapter forty-nine sizes on ATR and chapter thirty built its zones on ATR for exactly this reason.',
        bn: 'দুটিই, কারণ তারা ভিন্ন প্রশ্নের উত্তর দিচ্ছে, আর সৎ উত্তর হলো বাছার আগে বলা আপনি কোন প্রশ্নটি করছেন। উদাহরণের সেশনে ব্যান্ডের প্রস্থ এক দশমিক এক তিন এক চার থেকে দুই দশমিক এক দুই দুই ছয়ে গেছে, অর্থাৎ যোগ সাতাশি দশমিক ছয় শতাংশ, যেখানে ATR এক দশমিক শূন্য পাঁচ থেকে এক দশমিক এক পাঁচ তিন ছয়ে, অর্থাৎ যোগ নয় দশমিক আট ছয় শতাংশ। তিনটি কাঠামোগত পার্থক্য ফাঁকটি ব্যাখ্যা করে। প্রথমত, উপাদানের সেট: সিগমা কেবল ক্লোজ দেখে, যেখানে true range দেখে হাই, লো ও আগের ক্লোজ, তাই ATR গ্যাপ ও ইন্ট্রাডে পরিসর দেখে আর সিগমা দুটিতেই অন্ধ। ঐ সেশনেই true range ছিল দুই টাকা পঞ্চাশ যেখানে ক্লোজ-থেকে-ক্লোজ চলাচল ছিল মাত্র দুই টাকা দশ — দুই দশমিক তিন শূন্য ইন্ট্রাডে বিস্তার ও গ্যাপটি সিগমার কাছে অস্তিত্বহীন। দ্বিতীয়ত, সাড়া-ফাংশন: সিগমা বিচ্যুতি বর্গ করে যেখানে ওয়াইল্ডারের গড় একটি true range-কে রৈখিকভাবে চোদ্দ-পর্বের মসৃণকরণে ভাঁজ করে। নতুন ক্লোজটি গড় থেকে এক টাকা আটানব্বই দূরে বসেছে আর যোগ করেছে এক দশমিক নয় আটের বর্গ, অর্থাৎ তিন দশমিক নয় দুই, যা গোটা নতুন বর্গযোগফলের প্রায় সত্তর শতাংশ। একটি দিনই একটি বর্গ-পরিমাপের মালিক হতে পারে। তৃতীয়ত, স্মৃতি: সিগমার একটি কঠিন কুড়ি-দিনের জানালা আছে, তাই একটি বড় চলাচল একুশতম দিনে হঠাৎ বেরিয়ে যায় আর ব্যান্ড আজকের সঙ্গে সম্পর্কহীন কারণে সংকুচিত হয়, যেখানে ATR জ্যামিতিকভাবে ক্ষয় হয়, কোনো খাদ ছাড়াই। তাই আমার নিয়ম: আজকের ক্লোজ সাম্প্রতিক ক্লোজের তুলনায় অস্বাভাবিক কি না জিজ্ঞেস করতে সিগমা-ব্যান্ড ব্যবহার করুন, আর অবস্থানের আকার বা স্টপের জন্য ATR। এটি রুচির পছন্দ নয়। আপনার আকার-নির্ধারণ ব্যান্ডের প্রস্থে বাঁধা থাকলে একটি সঠিক দিকনির্ণয় যেদিন আপনি ঠিক ছিলেন সেদিনই আপনার অবস্থান মোটামুটি অর্ধেক করে দিল, আর এটি পাটিগণিতে গেঁথে থাকা একটি বিকৃত প্রণোদনা। অধ্যায় ঊনপঞ্চাশ ATR-এ আকার নেয় ও অধ্যায় ত্রিশ ATR-এ তার জোন গড়েছিল ঠিক এ কারণেই।',
      },
    },
    {
      q: {
        en: 'What happens when you run a Bollinger squeeze screen across the DSE floor-price period?',
        bn: 'ফ্লোর-প্রাইসের সময়কালজুড়ে ডিএসই-তে একটি বলিঞ্জার স্কুইজ স্ক্রিন চালালে কী হয়?',
      },
      a: {
        en: 'It inverts. It does not degrade, it does not get noisy — it hands you a ranked list that is the exact opposite of what you asked for, and it does so with maximum confidence. The arithmetic is trivial and that is what makes it dangerous. Under the floor-price regime a share could not trade below an administered level, so names pinned to the floor printed the same close day after day, sometimes for months. If all twenty closes are identical then the sum of squared deviations is exactly zero, so sigma is zero, so both bands collapse onto the centre line, so bandwidth is exactly zero percent. That is the lowest bandwidth mathematically possible, which means every squeeze screen ever written flags it, permanently, in the highest-conviction bucket. A percentile rule does not save you either, because the reading sits at the zeroth percentile of its own history and stays there. And it gets worse, because percent b becomes zero over zero. Undefined. Depending on the language you get a divide-by-zero, or a not-a-number that propagates silently through the rest of the screen, or — the worst case — infinity, which sorts to the top. So the output is a list of the most illiquid, administratively frozen shares on the exchange, presented to you as the highest-conviction breakout candidates available. There was no squeeze. There was not even a market — the volume in those stretches was often close to nil, which is itself the tell. The fix is not to handle the special case downstream. It is to exclude floor-price windows before you compute anything, using the same flag column chapter twenty-six established. I would add that circuit limits do a quieter version of the same damage: censoring the closes shrinks the standard deviation systematically, so the bands under-record volatility precisely on the days it spikes, with no error and no flag — just a number that is too small.',
        bn: 'এটি উল্টে যায়। এর মান কমে না, এটি কোলাহলপূর্ণ হয় না — এটি আপনাকে এমন একটি ক্রমতালিকা ধরিয়ে দেয় যা আপনার চাওয়ার হুবহু উল্টো, আর তা করে সর্বোচ্চ আত্মবিশ্বাসে। পাটিগণিতটি তুচ্ছ আর তাতেই এটি বিপজ্জনক। ফ্লোর-প্রাইস ব্যবস্থায় একটি শেয়ার একটি প্রশাসিত স্তরের নিচে লেনদেন করতে পারত না, তাই মেঝেতে আটকে যাওয়া নামগুলো দিনের পর দিন একই ক্লোজ ছেপেছে, কখনো মাসের পর মাস। কুড়িটি ক্লোজই অভিন্ন হলে বর্গ বিচ্যুতির যোগফল ঠিক শূন্য, তাই সিগমা শূন্য, তাই দুটি ব্যান্ডই কেন্দ্র রেখার ওপর ভেঙে পড়ে, তাই ব্যান্ডউইডথ ঠিক শূন্য শতাংশ। গাণিতিকভাবে সম্ভব সর্বনিম্ন ব্যান্ডউইডথ এটিই, অর্থাৎ লেখা হয়েছে এমন প্রতিটি স্কুইজ স্ক্রিন একে চিহ্নিত করে, স্থায়ীভাবে, সর্বোচ্চ প্রত্যয়ের বাক্সে। পার্সেন্টাইল নিয়মও বাঁচায় না, কারণ পাঠটি তার নিজের ইতিহাসের শূন্যতম পার্সেন্টাইলে বসে থাকে। আর এটি আরও খারাপ হয়, কারণ পার্সেন্ট বি হয়ে যায় শূন্য ভাগ শূন্য। অসংজ্ঞায়িত। ভাষার ওপর নির্ভর করে আপনি পান শূন্য দিয়ে ভাগ, বা একটি নট-আ-নাম্বার যা নীরবে বাকি স্ক্রিনজুড়ে ছড়ায়, বা — সবচেয়ে খারাপ — অসীম, যা শীর্ষে সাজে। তাই ফলাফল হলো এক্সচেঞ্জের সবচেয়ে অতরল, প্রশাসনিকভাবে জমাটবদ্ধ শেয়ারের একটি তালিকা, যা আপনার সামনে হাজির করা হয় সর্বোচ্চ-প্রত্যয়ের ব্রেকআউট প্রার্থী হিসেবে। কোনো স্কুইজ ছিল না। কোনো বাজারই ছিল না — ঐ সময়গুলোতে ভলিউম প্রায়ই শূন্যের কাছাকাছি ছিল, যা নিজেই সংকেত। সমাধান বিশেষ ক্ষেত্রটিকে পরে সামলানো নয়। সমাধান হলো কিছু গণনার আগেই ফ্লোর-প্রাইসের জানালা বাদ দেওয়া, অধ্যায় ছাব্বিশের প্রতিষ্ঠিত সেই একই চিহ্ন-কলাম দিয়ে। আমি যোগ করব সার্কিট সীমা একই ক্ষতির একটি নিঃশব্দ সংস্করণ করে: ক্লোজ কেটে দিলে স্ট্যান্ডার্ড ডেভিয়েশন ব্যবস্থাগতভাবে ছোট হয়, তাই ভোলাটিলিটি যেসব দিনে লাফায় ঠিক সেসব দিনেই ব্যান্ড তা কম লিপিবদ্ধ করে, কোনো ভুলবার্তা ছাড়া, কোনো চিহ্ন ছাড়া — কেবল বড্ড ছোট একটি সংখ্যা।',
      },
    },
  ],
  quiz: [
    {
      q: {
        en: 'Bollinger Bands are built from:',
        bn: 'বলিঞ্জার ব্যান্ড গড়া হয়:',
      },
      options: {
        en: [
          'A moving average plus and minus a multiple of ATR',
          'A moving average plus and minus a multiple of the standard deviation of closes',
          'The highest high and lowest low of the last 20 sessions',
          'A momentum oscillator scaled to price',
        ],
        bn: [
          'একটি মুভিং অ্যাভারেজ যোগ-বিয়োগ ATR-এর গুণিতক',
          'একটি মুভিং অ্যাভারেজ যোগ-বিয়োগ ক্লোজের স্ট্যান্ডার্ড ডেভিয়েশনের গুণিতক',
          'শেষ ২০ সেশনের সর্বোচ্চ হাই ও সর্বনিম্ন লো',
          'দামে মাপ-বসানো একটি মোমেন্টাম অসিলেটর',
        ],
      },
      answer: 1,
    },
    {
      q: {
        en: 'With $\\sum(P_i-\\bar{P})^2 = 1.60$ over 20 closes, the population standard deviation is:',
        bn: '২০টি ক্লোজে $\\sum(P_i-\\bar{P})^2 = 1.60$ হলে পপুলেশন স্ট্যান্ডার্ড ডেভিয়েশন:',
      },
      options: {
        en: ['0.080000', '0.084211', '0.282843', '0.290191'],
        bn: ['০.০৮০০০০', '০.০৮৪২১১', '০.২৮২৮৪৩', '০.২৯০১৯১'],
      },
      answer: 2,
    },
    {
      q: {
        en: 'Using the sample denominator ($n-1$) at $n = 20$ makes every band:',
        bn: '$n = 20$-এ স্যাম্পল হর ($n-1$) ব্যবহার করলে প্রতিটি ব্যান্ড হয়:',
      },
      options: {
        en: ['2.60% narrower', '2.60% wider', '5.00% wider', 'Unchanged — the effect cancels'],
        bn: ['২.৬০% সরু', '২.৬০% চওড়া', '৫.০০% চওড়া', 'অপরিবর্তিত — প্রভাব বাতিল হয়'],
      },
      answer: 1,
    },
    {
      q: {
        en: 'In the worked 20-session window, how many closes fell inside the bands?',
        bn: 'উদাহরণের ২০-সেশনের জানালায় কতগুলো ক্লোজ ব্যান্ডের ভেতরে পড়েছে?',
      },
      options: {
        en: ['20 of 20 (100%)', '19 of 20 (95%)', '18 of 20 (90%)', '15 of 20 (75%)'],
        bn: ['২০-এর ২০ (১০০%)', '২০-এর ১৯ (৯৫%)', '২০-এর ১৮ (৯০%)', '২০-এর ১৫ (৭৫%)'],
      },
      answer: 2,
    },
    {
      q: {
        en: 'A %b reading of 0.5 means the close is:',
        bn: '০.৫ %b পাঠের অর্থ ক্লোজটি আছে:',
      },
      options: {
        en: ['Halfway to the upper band from today\'s open', 'Exactly on the centre line', 'Exactly on the upper band', 'Outside the lower band'],
        bn: ['আজকের ওপেন থেকে উপরের ব্যান্ডের অর্ধেক পথে', 'ঠিক কেন্দ্র রেখায়', 'ঠিক উপরের ব্যান্ডে', 'নিচের ব্যান্ডের বাইরে'],
      },
      answer: 1,
    },
    {
      q: {
        en: 'A squeeze should be defined as:',
        bn: 'স্কুইজ সংজ্ঞায়িত করা উচিত:',
      },
      options: {
        en: [
          'Bandwidth below a fixed 2% threshold',
          'Bandwidth in the bottom decile of the same stock\'s own trailing history',
          'Price closing inside the bands for 20 straight sessions',
          '%b staying between 0.4 and 0.6',
        ],
        bn: [
          'নির্দিষ্ট ২% সীমার নিচে ব্যান্ডউইডথ',
          'ঐ শেয়ারের নিজের পেছনের ইতিহাসের নিচের দশমাংশে ব্যান্ডউইডথ',
          'টানা ২০ সেশন ব্যান্ডের ভেতরে দামের ক্লোজ',
          '%b ০.৪ ও ০.৬-এর মধ্যে থাকা',
        ],
      },
      answer: 1,
    },
    {
      q: {
        en: 'On the break session, bandwidth went from 1.8219% to 3.4115% while ATR went from 1.05 to 1.1536. This is because:',
        bn: 'ব্রেকের সেশনে ব্যান্ডউইডথ ১.৮২১৯% থেকে ৩.৪১১৫% হয়েছে যেখানে ATR ১.০৫ থেকে ১.১৫৩৬। এর কারণ:',
      },
      options: {
        en: [
          'ATR was computed over a longer window',
          '$\\sigma$ squares deviations and sees only closes, while ATR averages true range',
          'The bandwidth calculation used the wrong denominator',
          'Volume was excluded from the ATR calculation',
        ],
        bn: [
          'ATR দীর্ঘতর জানালায় গণনা করা হয়েছিল',
          '$\\sigma$ বিচ্যুতি বর্গ করে ও কেবল ক্লোজ দেখে, যেখানে ATR true range গড় করে',
          'ব্যান্ডউইডথ গণনায় ভুল হর ব্যবহার হয়েছে',
          'ATR গণনা থেকে ভলিউম বাদ দেওয়া হয়েছিল',
        ],
      },
      answer: 1,
    },
    {
      q: {
        en: 'A stock closes above its upper band on day 21 (%b 2.3562) and again on day 22 (%b 1.3344). The correct reading is:',
        bn: 'একটি শেয়ার ২১তম দিনে (%b ২.৩৫৬২) ও আবার ২২তম দিনে (%b ১.৩৩৪৪) উপরের ব্যান্ডের ওপরে বন্ধ হয়। সঠিক পাঠ:',
      },
      options: {
        en: [
          'Severely overbought — sell immediately',
          'Price is walking the band; this is evidence of strength',
          'The bands were computed incorrectly',
          'A guaranteed reversion to the centre line within two sessions',
        ],
        bn: [
          'তীব্রভাবে অতিক্রীত — এখনই বিক্রি করুন',
          'দাম ব্যান্ডের ওপর হাঁটছে; এটি শক্তির প্রমাণ',
          'ব্যান্ড ভুলভাবে গণনা করা হয়েছে',
          'দুই সেশনের মধ্যে কেন্দ্র রেখায় নিশ্চিত প্রত্যাবর্তন',
        ],
      },
      answer: 1,
    },
    {
      q: {
        en: 'Twenty identical closes at a floor price produce:',
        bn: 'ফ্লোর প্রাইসে কুড়িটি অভিন্ন ক্লোজ তৈরি করে:',
      },
      options: {
        en: [
          'A wide band and %b of 0.5',
          'Bandwidth of exactly 0% and %b of $0/0$ — a permanent fake squeeze',
          'An error message from every charting package',
          'A valid squeeze signal that should be traded',
        ],
        bn: [
          'একটি চওড়া ব্যান্ড ও ০.৫ %b',
          'ঠিক ০% ব্যান্ডউইডথ ও $0/0$ %b — একটি স্থায়ী নকল স্কুইজ',
          'প্রতিটি চার্টিং প্যাকেজ থেকে একটি ভুলবার্তা',
          'একটি বৈধ স্কুইজ সংকেত যা ট্রেড করা উচিত',
        ],
      },
      answer: 1,
    },
    {
      q: {
        en: 'Entering at 64.20 rather than waiting one session to buy 65.10, with the same 62.22 stop and 68.50 target, changes the break-even win rate from 45.86% to:',
        bn: 'একই ৬২.২২ স্টপ ও ৬৮.৫০ লক্ষ্যে, ৬৫.১০ কিনতে এক সেশন অপেক্ষার বদলে ৬৪.২০-তে ঢুকলে ব্রেক-ইভেন উইন রেট ৪৫.৮৬% থেকে হয়:',
      },
      options: {
        en: ['23.01%', '31.53%', '38.20%', '43.09%'],
        bn: ['২৩.০১%', '৩১.৫৩%', '৩৮.২০%', '৪৩.০৯%'],
      },
      answer: 1,
    },
  ],
};
