/**
 * Chapter 45 — Multi-Indicator Confluence
 * Part III, Technical Analysis. Closes the Part.
 */

export default {
  n: 45,
  tools: [],

  excelSheet: {
    filename: 'ch45-technical-setup-scorecard.xlsx',
    sheetName: 'Confluence',
    cells: [
      { cell: 'A1', v: '— HARD GATES (Ch 2, 24, 40) — any FAIL zeroes the verdict —' },
      { cell: 'A2', v: 'ADTV, 20-day (BDT lakh)' }, { cell: 'B2', v: 96 },
      { cell: 'A3', v: 'Liquidity gate (>= 50)' }, { cell: 'B3', f: 'IF(B2>=50,1,0)' },
      { cell: 'A4', v: 'Governance severity % (Ch 24)' }, { cell: 'B4', v: 9 },
      { cell: 'A5', v: 'Governance gate (<= 25)' }, { cell: 'B5', f: 'IF(B4<=25,1,0)' },
      { cell: 'A6', v: 'Sessions limit-locked in last 20' }, { cell: 'B6', v: 0 },
      { cell: 'A7', v: 'Limit-lock gate (= 0)' }, { cell: 'B7', f: 'IF(B6=0,1,0)' },
      { cell: 'A8', v: 'GATES PASSED (need 3)' }, { cell: 'B8', f: 'B3+B5+B7' },

      { cell: 'A10', v: '— CATEGORY SCORES: ONE signal per category, 0/1/2 —' },
      { cell: 'A11', v: 'Category' }, { cell: 'B11', v: 'Score' }, { cell: 'C11', v: 'Weight' }, { cell: 'D11', v: 'Weighted' },
      { cell: 'A12', v: '1 Trend / structure (Ch 31, 34, 42)' }, { cell: 'B12', v: 2 }, { cell: 'C12', v: 3 }, { cell: 'D12', f: 'B12*C12' },
      { cell: 'A13', v: '2 Location (Ch 30, 31, 41)' }, { cell: 'B13', v: 1 }, { cell: 'C13', v: 3 }, { cell: 'D13', f: 'B13*C13' },
      { cell: 'A14', v: '3 Momentum — ONE only (Ch 35, 36, 37, 44)' }, { cell: 'B14', v: 1 }, { cell: 'C14', v: 2 }, { cell: 'D14', f: 'B14*C14' },
      { cell: 'A15', v: '4 Volatility / risk (Ch 38, 39)' }, { cell: 'B15', v: 2 }, { cell: 'C15', v: 2 }, { cell: 'D15', f: 'B15*C15' },
      { cell: 'A16', v: '5 Volume / liquidity (Ch 40)' }, { cell: 'B16', v: 1 }, { cell: 'C16', v: 3 }, { cell: 'D16', f: 'B16*C16' },
      { cell: 'A17', v: '6 Fundamental gate (Ch 25)' }, { cell: 'B17', v: 2 }, { cell: 'C17', v: 2 }, { cell: 'D17', f: 'B17*C17' },
      { cell: 'A18', v: 'TOTAL WEIGHTED' }, { cell: 'D18', f: 'SUM(D12:D17)' },
      { cell: 'A19', v: 'MAXIMUM POSSIBLE' }, { cell: 'D19', f: '2*SUM(C12:C17)' },
      { cell: 'A20', v: 'SCORE %' }, { cell: 'D20', f: 'D18/D19*100' },

      { cell: 'A22', v: '— VALIDITY & CONFLICT —' },
      { cell: 'A23', v: 'Duplicate-category signals (0 = valid)' }, { cell: 'B23', v: 0 },
      { cell: 'A24', v: 'Independent contradiction? (1 = yes)' }, { cell: 'B24', v: 0 },
      { cell: 'A25', v: 'Conflict veto passed' }, { cell: 'B25', f: 'IF(B24=0,1,0)' },

      { cell: 'A27', v: '— ATR POSITION SIZING (Ch 38, 39) —' },
      { cell: 'A28', v: 'Entry price (BDT)' }, { cell: 'B28', v: 62.4 },
      { cell: 'A29', v: 'ATR(14) (BDT)' }, { cell: 'B29', v: 1.95 },
      { cell: 'A30', v: 'ATR as % of price' }, { cell: 'B30', f: 'B29/B28*100' },
      { cell: 'A31', v: 'ATR stop multiple' }, { cell: 'B31', v: 2 },
      { cell: 'A32', v: 'Stop price (invalidation)' }, { cell: 'B32', f: 'B28-B31*B29' },
      { cell: 'A33', v: 'Stop distance (BDT)' }, { cell: 'B33', f: 'B28-B32' },
      { cell: 'A34', v: 'Account equity (BDT)' }, { cell: 'B34', v: 1200000 },
      { cell: 'A35', v: 'Risk per trade (%)' }, { cell: 'B35', v: 1 },
      { cell: 'A36', v: 'Risk budget (BDT)' }, { cell: 'B36', f: 'B34*B35/100' },
      { cell: 'A37', v: 'Raw shares' }, { cell: 'B37', f: 'B36/B33' },
      { cell: 'A38', v: 'Shares (rounded down)' }, { cell: 'B38', f: 'FLOOR(B37,1)' },
      { cell: 'A39', v: 'Position value (BDT)' }, { cell: 'B39', f: 'B38*B28' },
      { cell: 'A40', v: 'Position as % of equity' }, { cell: 'B40', f: 'B39/B34*100' },

      { cell: 'A42', v: '— REWARD & COST (Ch 48, 50) —' },
      { cell: 'A43', v: 'Target (prior swing high, BDT)' }, { cell: 'B43', v: 74 },
      { cell: 'A44', v: 'Reward (BDT)' }, { cell: 'B44', f: 'B43-B28' },
      { cell: 'A45', v: 'Reward-to-risk (R)' }, { cell: 'B45', f: 'B44/B33' },
      { cell: 'A46', v: 'Round-trip cost (%)' }, { cell: 'B46', v: 0.8 },
      { cell: 'A47', v: 'Round-trip cost (BDT)' }, { cell: 'B47', f: 'B39*B46/100' },
      { cell: 'A48', v: 'Cost as fraction of 1R' }, { cell: 'B48', f: 'B47/B36' },
      { cell: 'A49', v: 'Net R after costs' }, { cell: 'B49', f: 'B45-B48' },

      { cell: 'A51', v: 'VERDICT' },
      {
        cell: 'B51',
        f: 'IF(B23>0,"INVALID - two signals from one category",IF(B8<3,"REJECT - hard gate failed",IF(B25=0,"REJECT - independent signal contradicts",IF(D20>=70,"TAKE",IF(D20>=50,"WATCH","REJECT - insufficient confluence")))))',
      },
      { cell: 'A52', v: 'SIZE MULTIPLIER' },
      { cell: 'B52', f: 'IF(OR(B23>0,B8<3,B25=0),0,IF(D20>=85,1,IF(D20>=70,0.5,0)))' },
      { cell: 'A53', v: 'FINAL SHARES' }, { cell: 'B53', f: 'FLOOR(B38*B52,1)' },
      { cell: 'A54', v: 'FINAL RISK (BDT)' }, { cell: 'B54', f: 'B53*B33' },
    ],
  },

  objectives: {
    en: [
      'Explain why six indicators derived from the same close price constitute one piece of evidence, not six.',
      'Classify every tool from Chapters 26–44 into six independent categories and apply the one-signal-per-category rule.',
      'Build and score a weighted Technical Setup Scorecard with hard gates, a threshold, and an honest account of what the weights are worth.',
      'Run top-down multi-timeframe analysis and handle a genuinely contradictory signal as a veto rather than a nuisance.',
      'State what confluence cannot do, and hand the candidate off to the plan, exit, size and expectancy work of Part IV.',
    ],
    bn: [
      'কেন একই ক্লোজিং দাম থেকে উদ্ভূত ছয়টি নির্দেশক ছয়টি নয়, একটিই প্রমাণ — তা ব্যাখ্যা করা।',
      'অধ্যায় ২৬–৪৪-এর প্রতিটি হাতিয়ারকে ছয়টি স্বাধীন শ্রেণিতে সাজানো এবং প্রতি শ্রেণিতে এক-সংকেত নিয়ম প্রয়োগ করা।',
      'কঠোর গেট, একটি সীমা এবং ওজনগুলোর প্রকৃত মূল্য সম্পর্কে সৎ স্বীকারোক্তিসহ একটি ভারিত টেকনিক্যাল সেটআপ স্কোরকার্ড তৈরি ও স্কোর করা।',
      'উপর-থেকে-নিচ বহু-সময়সীমা বিশ্লেষণ চালানো এবং প্রকৃত বিরোধী সংকেতকে উপদ্রব নয়, ভেটো হিসেবে সামলানো।',
      'সমন্বয় যা করতে পারে না তা বলা, এবং প্রার্থীটিকে পর্ব ৪-এর পরিকল্পনা, প্রস্থান, আকার ও প্রত্যাশা-মূল্যের কাজে হস্তান্তর করা।',
    ],
  },

  blocks: {
    theory: {
      en: `Nineteen chapters have each produced a signal. This chapter decides which of them are allowed to speak at the same time.

**This is the technical counterpart of Chapter 25.** That chapter arranged sixteen fundamental tests into gates, pillars and a threshold, and argued that the arrangement was the entire contribution. The same claim holds here, with one addition that makes the technical problem harder: **fundamental tests are mostly independent of each other, and technical indicators mostly are not.**

### Six indicators, one piece of evidence

Open any charting package and stack RSI, MACD, Stochastic, a 20-day moving average, Bollinger %B and a rate-of-change oscillator. On a stock that has risen for three weeks, all six will be bullish. The trader reads this as six confirmations.

It is not six confirmations. **It is one observation reported six times.**

Every one of those indicators is a deterministic transformation of the same input series — the daily close. They cannot disagree in a trending market, because a trend is precisely the condition under which each of them, by construction, turns positive.

Some of the relationships are not merely correlated but identical:

| Indicator | What it actually is |
|---|---|
| MACD line | The spread between a 12-period and a 26-period EMA — **exactly** the moving-average distance of Chapter 34 |
| Bollinger %B | Position within a band centred on the 20-day MA — the MA distance, scaled by standard deviation (Ch 38) |
| Rate of change | Close today divided by close *n* days ago — the raw slope |
| Stochastic %K | Position of the close within its recent range |

Chapter 36 introduced MACD as a momentum tool. **It is a moving-average tool wearing momentum clothes.** Reading MACD alongside a 12/26 crossover system and calling it confirmation is reading the same number twice.

### The arithmetic of redundancy

Redundancy is measurable. If you hold $n$ signals whose average pairwise correlation is $\\rho$, the number of *effectively independent* observations you actually have is approximately:

$$n_{\\text{eff}} = \\frac{n}{1 + (n-1)\\rho}$$

Feed it the two cases.

**Six momentum oscillators**, whose daily readings on a DSE large-cap typically correlate around 0.85:

$$n_{\\text{eff}} = \\frac{6}{1 + 5(0.85)} = \\frac{6}{5.25} = 1.14$$

**Six signals drawn one each from independent categories**, averaging perhaps 0.20:

$$n_{\\text{eff}} = \\frac{6}{1 + 5(0.20)} = \\frac{6}{2.00} = 3.00$$

**The stacked oscillator screen gives you 1.14 independent observations. The disciplined screen gives you 3.00.** Since sampling error falls with $\\sqrt{n_{\\text{eff}}}$, the difference in the confidence you are entitled to is a factor of $\\sqrt{3.00/1.14} = 1.62$ — and the trader with the six oscillators believes he has $\\sqrt{6}$.

**Confirmation from a correlated source is not confirmation. It is amplification of whatever error was already in the signal.**

### Six categories, and the rule

The fix is structural: classify before you count.

| # | Category | What it answers | Chapters |
|---|---|---|---|
| 1 | **Trend / structure** | Which way is the market organised? Higher highs and higher lows, MA slope, Dow state | 31, 34, 42 |
| 2 | **Location** | Is price at a level where risk is definable? Support/resistance, trendline, Fibonacci retracement | 30, 31, 41 |
| 3 | **Momentum** | Is the move accelerating or tiring? RSI, MACD, Stochastic, divergence | 35, 36, 37, 44 |
| 4 | **Volatility / risk** | How wide must the stop be, and can you afford it? ATR, Bollinger bandwidth | 38, 39 |
| 5 | **Volume / liquidity** | Is anyone actually transacting? Relative volume, turnover, the liquidity screen | 40 |
| 6 | **Fundamental gate** | Should this instrument be owned at all? The Chapter 25 scorecard | 25 |

**The rule: one signal per category, and a setup requires agreement across categories, not within one.**

Category 3 is where the rule bites hardest. RSI, MACD, Stochastic and rate-of-change are near-relatives. **Pick one, score it, and discard the rest** — not because the others are bad, but because they add correlation without adding information. Chapter 37 argued Stochastic suits ranges and Chapter 35 that RSI suits trends; that is a choice between them, not a licence to run both.

Category 5 is the only genuinely independent input on the sheet. **Volume is not derived from price.** It is a separate observable, and that is what makes it the most valuable line in the table and the one most often ignored.

Category 6 is a *precondition*, not a timing input. Chapter 25's scorecard tells you whether the instrument deserves capital. It says nothing about when. A failing fundamental gate should stop you before a chart is opened.

### The scorecard, and what its weights are worth

Score each category 0, 1 or 2 against a written criterion. Multiply by a weight. Sum. Compare to a threshold. That is the machinery, and §45.6 works it through.

Now the candour that Chapter 25 also demanded.

**The weights are judgement.** I weight trend, location and volume at 3 and momentum, volatility and the fundamental gate at 2 because location and liquidity are where DSE trades are actually won and lost. That is a defensible view. It is not a measured one.

**The threshold is worse.** Any cut-off tuned until it would have caught last year's winners is curve-fitted, and Chapter 55 will show exactly how that fails out of sample. **A 70% threshold that was chosen before looking at outcomes is worth more than an optimised 63% threshold that was chosen after.**

So what is the scorecard for? The same three things Chapter 25 claimed, and no more:

- It forces you through every category rather than the ones that agree with you.
- It makes the weights explicit, so a disagreement is about a number instead of a feeling.
- **It prevents post-hoc rationalisation.** Filling the sheet *before* entering removes the option of discovering, after the fact, that you were always watching the 200-day MA.

### Top-down, and where to stop

Run two timeframes, in order.

**Weekly for trend.** Categories 1 and 6 are decided here. A weekly chart on the DSE contains roughly five sessions of information per bar, which smooths through the single-session distortions — a record-date gap, a limit-locked day, a block trade — that dominate daily bars on thin names.

**Daily for setup.** Categories 2, 3, 4 and 5 are scored here: the retracement into support, the momentum reading, the ATR, the volume confirmation.

**And then stop.** Chapter 40 established why intraday data on the DSE is not a finer view of the same truth. On a stock trading 45,000 shares a day, a five-minute bar may contain two trades. Its high, low and close are artefacts of who happened to press a button. **Lower timeframes on illiquid DSE names do not add resolution; they add noise with a chart around it.**

The order matters as much as the content. **Trend first means you never talk yourself into a long in a weekly downtrend because the daily RSI looked oversold** — which is the single most reliable way to lose money with an indicator.

### The conflicting signal

Five categories agree. The sixth does not. What now?

The wrong answer is the common one: drop the indicator that disagrees, or find a parameter under which it agrees. **A signal you are willing to discard when it says no was never evidence — it was decoration.**

The right answer depends on whether the contradiction is independent.

- **A correlated contradiction is weak information.** Your RSI reads 58 and your Stochastic reads 46. They measure the same thing on different lookbacks and they have merely disagreed about a parameter. Note it; do not act on it.
- **An independent contradiction is a veto.** Price breaks a six-month resistance on turnover *below* its 20-day average. Category 1 and Category 2 are shouting; Category 5 is saying nobody bought. Volume is not a price transform, so this is genuine contrary evidence, and on the DSE a breakout on collapsing turnover is very often a small number of trades against a thin book.

**A veto from an independent category ends the setup, regardless of score.** That is why the scorecard has a conflict cell that zeroes the verdict and not a penalty that the total can absorb. Chapter 25's argument applies unchanged: a finding that can be outvoted is not a constraint.

### When the chart is overruled entirely

Technical analysis reads the behaviour of participants. It cannot read what participants do not yet know.

**A governance red flag from Chapter 24 beats any chart.** An adverse or disclaimer audit opinion, sponsor holding below the statutory floor, undisclosed related-party lending — these are not inputs to a score. They are reasons the score should not have been computed.

**A disclosure event beats any chart.** Price-sensitive announcements, a suspension pending clarification, a regulatory referral — the chart before the announcement described a market that did not have the information. It is not predictive of a market that does.

**A limit-locked session invalidates the bar.** Chapter 2's circuit limits mean the printed high or low may be an administrative boundary rather than a price at which anyone could transact. Chapter 41's Fibonacci levels measured off such a bar are geometry applied to an artefact.

### The DSE standing checklist

Every setup from this Part carries the constraints the Part established. Run them as a pre-trade list, every time:

| Check | Why | Source |
|---|---|---|
| ADTV above BDT 50 lakh | An untradeable name has no valid setup at any score | Ch 2, 40 |
| No limit-locked session in the window | Limit bars are administrative, not transactional | Ch 2 |
| No floor-price-era data in the lookback | Flat quotes with no trades poison MA, ATR and RSI alike | Ch 6, 38 |
| Free float sufficient for the position | Chapter 40's rule of thumb: stay under a small share of ADTV | Ch 40 |
| Record-date gaps adjusted | An unadjusted dividend gap fabricates support, resistance and divergence | Ch 30, 44 |
| Round-trip cost against 1R | On a tight stop, costs can consume a fifth of the risk budget | Ch 2 |
| No short side | Every bearish signal in Part III is an exit or an abstention, never a trade | Ch 26 |

**The liquidity gate is hard.** Note what it means: a name can score 28 out of 30 on the sheet and still be rejected, because the technical picture describes a market you cannot get out of. **A setup you cannot exit is not a setup.**

### The handoff

Confluence identifies a *candidate*. That is all it does, and Part III ends here.

- **Chapter 46** turns the candidate into a written plan with an entry trigger, an invalidation and a target.
- **Chapter 48** defines the exit, which determines more of your result than the entry does.
- **Chapter 49** sizes the position using Chapter 39's ATR, so that being wrong costs a known amount.
- **Chapter 50** tells you whether the whole system has positive expectancy — the only question that decides whether any of this was worth doing.

**A setup without a position size and an invalidation price is not a trade. It is an opinion with a ticker attached.**

Say plainly what Part III cannot do: **it cannot make money on its own.** It can tell you where risk is definable and where the odds are not obviously against you. Converting that into a return requires the sizing, the exits and the record-keeping of Part IV, and a trader who has finished this Part and stops here has learned to find setups without learning to trade them.`,
      bn: `উনিশটি অধ্যায়ের প্রতিটি একটি করে সংকেত তৈরি করেছে। এই অধ্যায় ঠিক করে তাদের মধ্যে কোনগুলোকে একসঙ্গে কথা বলার অনুমতি দেওয়া হবে।

**এটি অধ্যায় ২৫-এর টেকনিক্যাল প্রতিরূপ।** ঐ অধ্যায় ষোলোটি ফান্ডামেন্টাল পরীক্ষাকে গেট, স্তম্ভ ও একটি সীমায় সাজিয়েছিল, এবং যুক্তি দিয়েছিল সাজানোটাই সম্পূর্ণ অবদান। এখানেও একই দাবি খাটে, সঙ্গে একটি সংযোজন যা টেকনিক্যাল সমস্যাটিকে কঠিনতর করে: **ফান্ডামেন্টাল পরীক্ষাগুলো বেশিরভাগই পরস্পর-স্বাধীন, আর টেকনিক্যাল নির্দেশকগুলো বেশিরভাগই নয়।**

### ছয়টি নির্দেশক, একটিই প্রমাণ

যেকোনো চার্টিং সফটওয়্যার খুলে RSI, MACD, Stochastic, ২০-দিনের মুভিং অ্যাভারেজ, Bollinger %B ও একটি rate-of-change অসিলেটর একসঙ্গে বসান। তিন সপ্তাহ ধরে বেড়ে চলা একটি শেয়ারে ছয়টিই তেজি দেখাবে। ট্রেডার এটিকে ছয়টি নিশ্চিতকরণ হিসেবে পড়েন।

এটি ছয়টি নিশ্চিতকরণ নয়। **এটি একটিই পর্যবেক্ষণ, ছয়বার প্রতিবেদিত।**

ঐ নির্দেশকগুলোর প্রতিটিই একই উপাদান-ধারার — দৈনিক ক্লোজিং দামের — একটি নির্ধারিত রূপান্তর। প্রবণতাযুক্ত বাজারে এরা দ্বিমত হতে *পারে না*, কারণ প্রবণতা ঠিক সেই অবস্থা যেখানে গঠনগত কারণেই এদের প্রতিটি ইতিবাচক হয়ে ওঠে।

কিছু সম্পর্ক কেবল সহসম্পর্কিত নয়, অভিন্ন:

| নির্দেশক | এটি আসলে যা |
|---|---|
| MACD লাইন | ১২ ও ২৬ পর্যায়ের EMA-র ব্যবধান — **হুবহু** অধ্যায় ৩৪-এর মুভিং অ্যাভারেজ দূরত্ব |
| Bollinger %B | ২০-দিনের MA-কেন্দ্রিক ব্যান্ডের ভেতরে অবস্থান — অর্থাৎ MA দূরত্ব, পরিমিত বিচ্যুতি দিয়ে মাপা (অধ্যায় ৩৮) |
| Rate of change | আজকের ক্লোজ ভাগ *n* দিন আগের ক্লোজ — কাঁচা ঢাল |
| Stochastic %K | সাম্প্রতিক পরিসরের ভেতরে ক্লোজের অবস্থান |

অধ্যায় ৩৬ MACD-কে মোমেন্টাম হাতিয়ার হিসেবে পরিচয় করিয়েছে। **এটি মোমেন্টামের পোশাক পরা একটি মুভিং অ্যাভারেজ হাতিয়ার।** ১২/২৬ ক্রসওভার ব্যবস্থার পাশে MACD পড়ে তাকে নিশ্চিতকরণ বলা মানে একই সংখ্যা দুবার পড়া।

### অপ্রয়োজনীয় পুনরাবৃত্তির পাটিগণিত

পুনরাবৃত্তি মাপা যায়। আপনার হাতে $n$টি সংকেত থাকলে, যাদের গড় জোড়া-সহসম্পর্ক $\\rho$, আপনার প্রকৃতপক্ষে থাকা *কার্যকরভাবে স্বাধীন* পর্যবেক্ষণের সংখ্যা প্রায়:

$$n_{\\text{eff}} = \\frac{n}{1 + (n-1)\\rho}$$

দুটি ক্ষেত্র বসান।

**ছয়টি মোমেন্টাম অসিলেটর**, ডিএসই-র একটি বড় মূলধনী শেয়ারে যাদের দৈনিক পাঠ সাধারণত ০.৮৫-এর কাছাকাছি সহসম্পর্কিত:

$$n_{\\text{eff}} = \\frac{6}{1 + 5(0.85)} = \\frac{6}{5.25} = 1.14$$

**স্বাধীন শ্রেণি থেকে একটি করে নেওয়া ছয়টি সংকেত**, গড় সহসম্পর্ক ধরুন ০.২০:

$$n_{\\text{eff}} = \\frac{6}{1 + 5(0.20)} = \\frac{6}{2.00} = 3.00$$

**স্তূপীকৃত অসিলেটরের পর্দা আপনাকে ১.১৪টি স্বাধীন পর্যবেক্ষণ দেয়। শৃঙ্খলাবদ্ধ পর্দা দেয় ৩.০০টি।** যেহেতু নমুনাজনিত ত্রুটি $\\sqrt{n_{\\text{eff}}}$ অনুপাতে কমে, আপনি যতটুকু আত্মবিশ্বাসের অধিকারী তার পার্থক্য $\\sqrt{3.00/1.14} = 1.62$ গুণ — আর ছয় অসিলেটরের ট্রেডার ভাবছেন তাঁর $\\sqrt{6}$ আছে।

**সহসম্পর্কিত উৎস থেকে আসা নিশ্চিতকরণ নিশ্চিতকরণ নয়। সংকেতে আগে থেকেই যে ত্রুটি ছিল, এটি তারই বিবর্ধন।**

### ছয়টি শ্রেণি, এবং নিয়মটি

সমাধানটি কাঠামোগত: গোনার আগে শ্রেণিবদ্ধ করুন।

| # | শ্রেণি | কী উত্তর দেয় | অধ্যায় |
|---|---|---|---|
| ১ | **প্রবণতা / কাঠামো** | বাজার কোন দিকে সংগঠিত? উচ্চতর উচ্চ ও উচ্চতর নিম্ন, MA-র ঢাল, ডাও অবস্থা | ৩১, ৩৪, ৪২ |
| ২ | **অবস্থান** | দাম কি এমন স্তরে যেখানে ঝুঁকি সংজ্ঞায়িত করা যায়? সাপোর্ট/রেজিস্ট্যান্স, ট্রেন্ডলাইন, Fibonacci রিট্রেসমেন্ট | ৩০, ৩১, ৪১ |
| ৩ | **মোমেন্টাম** | গতি কি বাড়ছে না ক্লান্ত? RSI, MACD, Stochastic, ডাইভারজেন্স | ৩৫, ৩৬, ৩৭, ৪৪ |
| ৪ | **অস্থিরতা / ঝুঁকি** | স্টপ কত চওড়া হতে হবে, আর তা কি সামর্থ্যের মধ্যে? ATR, Bollinger ব্যান্ডউইথ | ৩৮, ৩৯ |
| ৫ | **ভলিউম / তারল্য** | আদৌ কি কেউ লেনদেন করছে? আপেক্ষিক ভলিউম, টার্নওভার, তারল্য পর্দা | ৪০ |
| ৬ | **ফান্ডামেন্টাল গেট** | এই উপকরণটির মালিক আদৌ হওয়া উচিত? অধ্যায় ২৫-এর স্কোরকার্ড | ২৫ |

**নিয়ম: প্রতি শ্রেণিতে একটি সংকেত, এবং একটি সেটআপের জন্য শ্রেণির *ভেতরে* নয়, শ্রেণিগুলোর *মধ্যে* মিল লাগে।**

তৃতীয় শ্রেণিতেই নিয়মটি সবচেয়ে জোরে কামড়ায়। RSI, MACD, Stochastic ও rate-of-change নিকটাত্মীয়। **একটি বাছুন, তাকে স্কোর করুন, বাকিগুলো বাদ দিন** — অন্যগুলো খারাপ বলে নয়, বরং তারা তথ্য না বাড়িয়ে সহসম্পর্ক বাড়ায় বলে। অধ্যায় ৩৭ বলেছে Stochastic পরিসরে মানানসই আর অধ্যায় ৩৫ বলেছে RSI প্রবণতায়; সেটি তাদের মধ্যে একটি বাছাই, দুটোই চালানোর অনুমতি নয়।

পঞ্চম শ্রেণিই শিটের একমাত্র প্রকৃত স্বাধীন উপাদান। **ভলিউম দাম থেকে উদ্ভূত নয়।** এটি একটি পৃথক পর্যবেক্ষণযোগ্য রাশি, আর এ কারণেই এটি টেবিলের সবচেয়ে মূল্যবান লাইন এবং সবচেয়ে বেশিবার উপেক্ষিত লাইন।

ষষ্ঠ শ্রেণি একটি *পূর্বশর্ত*, সময় নির্ধারণের উপাদান নয়। অধ্যায় ২৫-এর স্কোরকার্ড বলে উপকরণটি মূলধন পাওয়ার যোগ্য কি না। কখন — তা নিয়ে কিছুই বলে না। ফান্ডামেন্টাল গেট ব্যর্থ হলে চার্ট খোলার আগেই আপনার থেমে যাওয়া উচিত।

### স্কোরকার্ড, এবং এর ওজনগুলোর প্রকৃত মূল্য

প্রতিটি শ্রেণিকে একটি লিখিত মানদণ্ডের বিপরীতে ০, ১ বা ২ স্কোর দিন। ওজন দিয়ে গুণ করুন। যোগ করুন। সীমার সঙ্গে তুলনা করুন। এটিই যন্ত্রপাতি, আর §৪৫.৬ ধাপে ধাপে তা চালায়।

এবার সেই সততা যা অধ্যায় ২৫-ও দাবি করেছিল।

**ওজনগুলো বিচারবুদ্ধি।** আমি প্রবণতা, অবস্থান ও ভলিউমকে ৩ আর মোমেন্টাম, অস্থিরতা ও ফান্ডামেন্টাল গেটকে ২ ওজন দিই, কারণ ডিএসই-র ট্রেড আসলে অবস্থান ও তারল্যেই জেতা বা হারা হয়। এটি একটি সমর্থনযোগ্য মত। এটি মাপা কিছু নয়।

**সীমাটি আরও খারাপ।** গত বছরের বিজয়ীদের ধরত এমন হওয়া পর্যন্ত সুর মিলিয়ে নেওয়া যেকোনো কাট-অফ কার্ভ-ফিটেড, আর অধ্যায় ৫৫ দেখাবে ঠিক কীভাবে তা নমুনার বাইরে ব্যর্থ হয়। **ফলাফল দেখার আগে বাছা ৭০% সীমা, ফলাফল দেখার পরে অপ্টিমাইজ করা ৬৩% সীমার চেয়ে বেশি মূল্যবান।**

তাহলে স্কোরকার্ড কীসের জন্য? অধ্যায় ২৫ যে তিনটি দাবি করেছিল ঠিক সেগুলোই, তার বেশি নয়:

- আপনার সঙ্গে একমত শ্রেণিগুলো নয়, প্রতিটি শ্রেণির মধ্য দিয়ে এটি আপনাকে নিয়ে যায়।
- এটি ওজনগুলো স্পষ্ট করে, তাই মতভেদ অনুভূতি নয় একটি সংখ্যা নিয়ে হয়।
- **এটি ঘটনা-পরবর্তী যুক্তি সাজানো ঠেকায়।** ঢোকার *আগে* শিটটি পূরণ করলে পরে আবিষ্কার করার সুযোগ থাকে না যে আপনি নাকি বরাবরই ২০০-দিনের MA দেখছিলেন।

### উপর থেকে নিচে, এবং কোথায় থামবেন

দুটি সময়সীমা চালান, এই ক্রমে।

**প্রবণতার জন্য সাপ্তাহিক।** ১ ও ৬ নম্বর শ্রেণি এখানেই নিষ্পন্ন হয়। ডিএসই-র সাপ্তাহিক চার্টে প্রতি বারে প্রায় পাঁচ সেশনের তথ্য থাকে, যা একক-সেশনের বিকৃতি — রেকর্ড ডেটের গ্যাপ, লিমিটে আটকে যাওয়া দিন, একটি ব্লক ট্রেড — মসৃণ করে দেয়, যেগুলো পাতলা শেয়ারে দৈনিক বারকে দখল করে বসে।

**সেটআপের জন্য দৈনিক।** ২, ৩, ৪ ও ৫ নম্বর শ্রেণি এখানে স্কোর হয়: সাপোর্টে ফিরে আসা রিট্রেসমেন্ট, মোমেন্টামের পাঠ, ATR, ভলিউমের নিশ্চিতকরণ।

**এবং তারপর থামুন।** অধ্যায় ৪০ প্রতিষ্ঠা করেছে কেন ডিএসই-তে ইন্ট্রাডে উপাত্ত একই সত্যের সূক্ষ্মতর দৃশ্য নয়। দিনে ৪৫,০০০ শেয়ার লেনদেন হওয়া একটি শেয়ারে পাঁচ মিনিটের একটি বারে দুটি ট্রেড থাকতে পারে। এর উচ্চ, নিম্ন ও ক্লোজ কে কখন বোতাম চেপেছেন তার কৃত্রিম ফল। **ডিএসই-র তারল্যহীন শেয়ারে নিচের সময়সীমা রেজোলিউশন বাড়ায় না; চারপাশে চার্ট আঁকা নয়েজ বাড়ায়।**

বিষয়বস্তুর মতোই ক্রমটিও গুরুত্বপূর্ণ। **প্রবণতা আগে মানে দৈনিক RSI অতিবিক্রীত দেখাচ্ছে বলে আপনি কখনো সাপ্তাহিক নিম্নমুখী প্রবণতায় লং নিতে নিজেকে রাজি করাবেন না** — যা নির্দেশক দিয়ে টাকা হারানোর সবচেয়ে নির্ভরযোগ্য একক উপায়।

### বিরোধী সংকেত

পাঁচটি শ্রেণি একমত। ষষ্ঠটি নয়। এখন কী?

ভুল উত্তরটিই সবচেয়ে প্রচলিত: যে নির্দেশকটি দ্বিমত, তাকে বাদ দিন, নয়তো এমন প্যারামিটার খুঁজুন যাতে সে একমত হয়। **যে সংকেতকে "না" বলার সময় আপনি ফেলে দিতে রাজি, তা কখনোই প্রমাণ ছিল না — সাজসজ্জা ছিল।**

সঠিক উত্তর নির্ভর করে বিরোধিতাটি স্বাধীন কি না তার ওপর।

- **সহসম্পর্কিত বিরোধিতা দুর্বল তথ্য।** আপনার RSI দেখাচ্ছে ৫৮ আর Stochastic ৪৬। এরা ভিন্ন লুকব্যাকে একই জিনিস মাপে এবং কেবল একটি প্যারামিটার নিয়ে দ্বিমত করেছে। লিখে রাখুন; এর ওপর কাজ করবেন না।
- **স্বাধীন বিরোধিতা একটি ভেটো।** দাম ছয় মাসের রেজিস্ট্যান্স ভাঙছে, কিন্তু টার্নওভার ২০-দিনের গড়ের *নিচে*। ১ ও ২ নম্বর শ্রেণি চিৎকার করছে; ৫ নম্বর বলছে কেউ কেনেনি। ভলিউম দামের রূপান্তর নয়, তাই এটি প্রকৃত বিপরীত প্রমাণ — আর ডিএসই-তে টার্নওভার ধসে পড়া অবস্থায় ব্রেকআউট প্রায়ই পাতলা বইয়ের বিপরীতে অল্প কয়েকটি ট্রেড।

**স্বাধীন শ্রেণি থেকে আসা ভেটো স্কোর যা-ই হোক সেটআপটি শেষ করে দেয়।** এ কারণেই স্কোরকার্ডে একটি কনফ্লিক্ট ঘর আছে যা রায়কে শূন্য করে, মোট যোগফল শুষে নিতে পারে এমন কোনো জরিমানা নয়। অধ্যায় ২৫-এর যুক্তি অবিকল খাটে: যে ফলাফলকে ভোটে হারানো যায় তা কোনো সীমাবদ্ধতা নয়।

### চার্ট কখন সম্পূর্ণ অগ্রাহ্য হয়

টেকনিক্যাল বিশ্লেষণ অংশগ্রহণকারীদের আচরণ পড়ে। অংশগ্রহণকারীরা যা এখনো জানেন না তা এটি পড়তে পারে না।

**অধ্যায় ২৪-এর একটি গভর্ন্যান্স লাল সংকেত যেকোনো চার্টকে হারিয়ে দেয়।** বিরূপ বা দাবিত্যাগ নিরীক্ষা মতামত, আইনি ন্যূনতমের নিচে উদ্যোক্তা মালিকানা, অপ্রকাশিত সম্পর্কিত-পক্ষ ঋণ — এগুলো কোনো স্কোরের উপাদান নয়। এগুলো এমন কারণ যার জন্য স্কোরটি গণনা করাই উচিত ছিল না।

**একটি প্রকাশনা-ঘটনা যেকোনো চার্টকে হারিয়ে দেয়।** মূল্য-সংবেদনশীল ঘোষণা, ব্যাখ্যা চেয়ে স্থগিতাদেশ, নিয়ন্ত্রক সংস্থায় প্রেরণ — ঘোষণার আগের চার্ট এমন একটি বাজারের বর্ণনা যার কাছে তথ্যটি ছিল না। যে বাজারের কাছে তথ্য আছে, তার জন্য এটি ভবিষ্যদ্বাচক নয়।

**লিমিটে আটকে যাওয়া সেশন বারটিকে অকার্যকর করে।** অধ্যায় ২-এর সার্কিট সীমার অর্থ হলো ছাপা উচ্চ বা নিম্ন এমন প্রশাসনিক সীমানা হতে পারে যাতে কেউ আদৌ লেনদেন করতে পারেনি। ঐ বার থেকে মাপা অধ্যায় ৪১-এর Fibonacci স্তর একটি কৃত্রিম বস্তুতে প্রয়োগ করা জ্যামিতি।

### ডিএসই-র স্থায়ী চেকলিস্ট

এই পর্বের প্রতিটি সেটআপ পর্বটির প্রতিষ্ঠিত সীমাবদ্ধতা বয়ে বেড়ায়। প্রতিবার ট্রেডের আগে এগুলো তালিকা হিসেবে চালান:

| যাচাই | কেন | উৎস |
|---|---|---|
| ADTV ৫০ লক্ষ টাকার ওপরে | যে নামে লেনদেন করা যায় না, স্কোর যা-ই হোক তার বৈধ সেটআপ নেই | অধ্যায় ২, ৪০ |
| জানালার ভেতরে লিমিটে আটকানো সেশন নেই | লিমিট বার প্রশাসনিক, লেনদেনভিত্তিক নয় | অধ্যায় ২ |
| লুকব্যাকে ফ্লোর-প্রাইস যুগের উপাত্ত নেই | লেনদেনহীন সমতল দর MA, ATR ও RSI সবই বিষিয়ে দেয় | অধ্যায় ৬, ৩৮ |
| পজিশনের জন্য যথেষ্ট ফ্রি ফ্লোট | অধ্যায় ৪০-এর নিয়ম: ADTV-র ছোট অংশের নিচে থাকুন | অধ্যায় ৪০ |
| রেকর্ড ডেটের গ্যাপ সমন্বিত | অসমন্বিত লভ্যাংশ গ্যাপ সাপোর্ট, রেজিস্ট্যান্স ও ডাইভারজেন্স বানিয়ে ফেলে | অধ্যায় ৩০, ৪৪ |
| ১R-এর বিপরীতে রাউন্ড-ট্রিপ খরচ | আঁটসাঁট স্টপে খরচ ঝুঁকি-বাজেটের পাঁচভাগের এক ভাগ খেয়ে ফেলতে পারে | অধ্যায় ২ |
| শর্ট দিক নেই | পর্ব ৩-এর প্রতিটি মন্দা সংকেত একটি প্রস্থান বা বিরতি, কখনো ট্রেড নয় | অধ্যায় ২৬ |

**তারল্য গেটটি কঠোর।** এর অর্থ লক্ষ করুন: একটি নাম শিটে ৩০-এর মধ্যে ২৮ পেয়েও প্রত্যাখ্যাত হতে পারে, কারণ টেকনিক্যাল ছবিটি এমন একটি বাজারের বর্ণনা যেখান থেকে আপনি বেরোতে পারবেন না। **যে সেটআপ থেকে বেরোনো যায় না তা সেটআপ নয়।**

### হস্তান্তর

সমন্বয় একটি *প্রার্থী* চিহ্নিত করে। এটুকুই এর কাজ, আর পর্ব ৩ এখানেই শেষ।

- **অধ্যায় ৪৬** প্রার্থীটিকে প্রবেশ ট্রিগার, অকার্যকরণ মূল্য ও লক্ষ্যসহ একটি লিখিত পরিকল্পনায় পরিণত করে।
- **অধ্যায় ৪৮** প্রস্থান সংজ্ঞায়িত করে, যা প্রবেশের চেয়ে আপনার ফলাফলের বেশি অংশ নির্ধারণ করে।
- **অধ্যায় ৪৯** অধ্যায় ৩৯-এর ATR ব্যবহার করে পজিশনের আকার ঠিক করে, যাতে ভুল হওয়ার খরচ জানা থাকে।
- **অধ্যায় ৫০** বলে সম্পূর্ণ ব্যবস্থাটির প্রত্যাশা-মূল্য ধনাত্মক কি না — একমাত্র যে প্রশ্ন ঠিক করে এসবের কিছু আদৌ করার মতো ছিল কি না।

**পজিশনের আকার ও অকার্যকরণ মূল্য ছাড়া কোনো সেটআপ ট্রেড নয়। এটি টিকার লাগানো একটি মতামত।**

স্পষ্ট করে বলুন পর্ব ৩ কী পারে না: **এটি একা টাকা বানাতে পারে না।** এটি বলতে পারে ঝুঁকি কোথায় সংজ্ঞায়িত করা যায় এবং কোথায় সম্ভাবনা স্পষ্টভাবে বিপক্ষে নয়। তাকে মুনাফায় রূপান্তরিত করতে লাগে পর্ব ৪-এর আকার নির্ধারণ, প্রস্থান ও নথিভুক্তি; আর যে ট্রেডার এই পর্ব শেষ করে এখানেই থেমে যান, তিনি সেটআপ খুঁজতে শিখেছেন, ট্রেড করতে শেখেননি।`,
    },
  },
};
