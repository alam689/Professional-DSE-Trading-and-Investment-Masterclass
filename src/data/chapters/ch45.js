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

    simple: {
      en: `Imagine you are buying a used car and you want a second opinion.

You take it to a mechanic. He says the engine is sound. Then you take it to his brother, in the next workshop, using the same tools, who was trained by the same man. He also says the engine is sound.

**How many opinions do you now have?** You paid for two. You received one, twice.

Now imagine instead that you asked the mechanic about the engine, a body shop about the rust, an accountant about the resale value, and the previous owner's neighbour about how it was driven. **Four opinions, four sources, four different ways of being wrong.** If all four say buy, you have learned something.

That is the entire chapter. **RSI, MACD, Stochastic and rate-of-change are brothers in the same workshop.** They all take the closing price, they all measure roughly the same thing, and on a stock that has been rising for three weeks they will all agree — not because they have independently checked, but because they were built from the same number.

### What "different workshops" means on a chart

There are only a handful of genuinely different things you can look at:

- **Which way the market is organised.** Higher highs, higher lows, the slope of a moving average. (Ch 31, 34, 42)
- **Where price is standing.** A support level, a trendline, a retracement. (Ch 30, 31, 41)
- **How fast it is moving.** Any *one* momentum tool. (Ch 35, 36, 37)
- **How wide it swings.** ATR — which tells you what a stop costs. (Ch 38, 39)
- **Whether anyone is actually trading.** Volume. (Ch 40)
- **Whether the company deserves your money at all.** (Ch 25)

**Volume is the only one on that list that is not made out of price.** Everything else is the closing price with a different haircut. That is why the volume line matters more than its position on the list suggests, and why it is the line people skip.

### The trap of the perfect score

Here is what happens to almost everyone who builds a checklist.

You start with three conditions. You get thirty trades a year and win about half. So you add a fourth condition, and now only the good trades qualify — twenty trades, sixty percent wins. Wonderful. You add a fifth and a sixth. Now you have **four trades a year and you won three of them.**

Seventy-five percent! Except: **flip a coin four times and you will get three heads about a third of the time.** Three wins out of four is not evidence. It is a coin that happened to land nicely, dressed up as a system.

**Every indicator you add makes the past look better and makes the future harder to measure.** Chapter 55 is about how to tell the difference. For now, hold the suspicion.

### The rule that cannot be outvoted

The last idea is the hardest to accept, and it is the one this whole book keeps returning to.

Suppose your stock scores brilliantly on every count — perfect trend, perfect location, perfect momentum — but it trades BDT 12 lakh a day and you want to put BDT 4 lakh into it. **You cannot get out.** Not "it will be difficult". You cannot get out at a price you would accept.

Does a wonderful score fix that? No. **Nothing fixes it.** So the liquidity check cannot be worth points that a good score can make up for. It has to be a gate: pass, or the whole thing is void.

The moment you let a total outvote a constraint, **you have stopped having a constraint and started having a preference.**`,
      bn: `কল্পনা করুন আপনি একটি ব্যবহৃত গাড়ি কিনছেন এবং দ্বিতীয় একটি মতামত চান।

আপনি একজন মিস্ত্রির কাছে নিয়ে গেলেন। তিনি বললেন ইঞ্জিন ভালো। তারপর নিয়ে গেলেন পাশের ওয়ার্কশপে তাঁর ভাইয়ের কাছে, যিনি একই যন্ত্রপাতি ব্যবহার করেন এবং একই লোকের কাছে শিখেছেন। তিনিও বললেন ইঞ্জিন ভালো।

**আপনার হাতে এখন কয়টি মতামত?** আপনি দুটির দাম দিয়েছেন। পেয়েছেন একটিই, দুবার।

এবার বদলে কল্পনা করুন আপনি ইঞ্জিন নিয়ে মিস্ত্রিকে, মরিচা নিয়ে বডি শপকে, পুনর্বিক্রয় মূল্য নিয়ে হিসাবরক্ষককে, আর গাড়িটি কীভাবে চালানো হয়েছে তা নিয়ে আগের মালিকের প্রতিবেশীকে জিজ্ঞেস করলেন। **চারটি মতামত, চারটি উৎস, ভুল হওয়ার চারটি ভিন্ন পথ।** চারজনই কিনতে বললে আপনি সত্যিই কিছু জেনেছেন।

গোটা অধ্যায়টি এটুকুই। **RSI, MACD, Stochastic ও rate-of-change একই ওয়ার্কশপের ভাই।** সবাই ক্লোজিং দাম নেয়, সবাই মোটামুটি একই জিনিস মাপে, আর তিন সপ্তাহ ধরে বাড়তে থাকা শেয়ারে সবাই একমত হবে — স্বাধীনভাবে যাচাই করেছে বলে নয়, বরং সবাই একই সংখ্যা থেকে গড়া বলে।

### চার্টে "ভিন্ন ওয়ার্কশপ" বলতে যা বোঝায়

সত্যিকারের ভিন্ন জিনিস দেখার সুযোগ হাতে গোনা কয়েকটি:

- **বাজার কোন দিকে সংগঠিত।** উচ্চতর উচ্চ, উচ্চতর নিম্ন, মুভিং অ্যাভারেজের ঢাল। (অধ্যায় ৩১, ৩৪, ৪২)
- **দাম কোথায় দাঁড়িয়ে।** একটি সাপোর্ট লেভেল, ট্রেন্ডলাইন, রিট্রেসমেন্ট। (অধ্যায় ৩০, ৩১, ৪১)
- **কত দ্রুত নড়ছে।** যেকোনো *একটি* মোমেন্টাম হাতিয়ার। (অধ্যায় ৩৫, ৩৬, ৩৭)
- **কত চওড়া দোলে।** ATR — যা বলে একটি স্টপের খরচ কত। (অধ্যায় ৩৮, ৩৯)
- **আদৌ কেউ লেনদেন করছে কি না।** ভলিউম। (অধ্যায় ৪০)
- **কোম্পানিটি আদৌ আপনার টাকা পাওয়ার যোগ্য কি না।** (অধ্যায় ২৫)

**ঐ তালিকায় একমাত্র ভলিউমই দাম দিয়ে তৈরি নয়।** বাকি সবই ভিন্ন ছাঁটের ক্লোজিং দাম। এ কারণেই তালিকায় ভলিউমের অবস্থান যা বোঝায় তার চেয়ে ঐ লাইনটি বেশি গুরুত্বপূর্ণ, আর এ কারণেই ঐ লাইনটিই মানুষ বাদ দেন।

### নিখুঁত স্কোরের ফাঁদ

যাঁরা চেকলিস্ট বানান তাঁদের প্রায় সবার সঙ্গে যা ঘটে তা এই।

আপনি তিনটি শর্ত দিয়ে শুরু করলেন। বছরে ত্রিশটি ট্রেড পেলেন, প্রায় অর্ধেকে জিতলেন। তাই একটি চতুর্থ শর্ত যোগ করলেন, আর এখন কেবল ভালো ট্রেডগুলোই যোগ্য হয় — কুড়িটি ট্রেড, ষাট শতাংশ জয়। চমৎকার। পঞ্চম ও ষষ্ঠ শর্ত যোগ করলেন। এখন আপনার হাতে **বছরে চারটি ট্রেড আর তার তিনটিতে আপনি জিতেছেন।**

পঁচাত্তর শতাংশ! কেবল একটি সমস্যা: **একটি মুদ্রা চারবার ছুড়লে প্রায় এক-তৃতীয়াংশ সময় তিনবার হেড পড়বে।** চারটির মধ্যে তিনটি জয় প্রমাণ নয়। এটি একটি মুদ্রা যা সুন্দরভাবে পড়েছে, ব্যবস্থার পোশাক পরে।

**আপনি যত নির্দেশক যোগ করবেন, অতীত তত সুন্দর দেখাবে আর ভবিষ্যৎ মাপা তত কঠিন হবে।** অধ্যায় ৫৫ ঠিক এই পার্থক্য চেনানোর অধ্যায়। আপাতত সন্দেহটুকু ধরে রাখুন।

### যে নিয়মকে ভোটে হারানো যায় না

শেষ ধারণাটি মেনে নেওয়া সবচেয়ে কঠিন, আর এই বইটি বারবার এখানেই ফিরে আসে।

ধরুন আপনার শেয়ারটি প্রতিটি মাপকাঠিতে দুর্দান্ত স্কোর করেছে — নিখুঁত প্রবণতা, নিখুঁত অবস্থান, নিখুঁত মোমেন্টাম — কিন্তু এটি দিনে ১২ লক্ষ টাকা লেনদেন হয় আর আপনি এতে ৪ লক্ষ টাকা ঢালতে চান। **আপনি বেরোতে পারবেন না।** "কঠিন হবে" নয়। আপনি মেনে নেবেন এমন দামে বেরোতে পারবেন না।

একটি চমৎকার স্কোর কি তা ঠিক করে দেয়? না। **কিছুই তা ঠিক করে না।** তাই তারল্য যাচাইটি এমন কোনো নম্বরের যোগ্য হতে পারে না যা একটি ভালো স্কোর পুষিয়ে দিতে পারে। এটিকে একটি গেট হতে হবে: পাস করুন, নয়তো গোটা জিনিসটাই বাতিল।

যে মুহূর্তে আপনি একটি মোট যোগফলকে একটি সীমাবদ্ধতার ওপর ভোট দিতে দিলেন, **সেই মুহূর্তে আপনার আর কোনো সীমাবদ্ধতা রইল না, রইল কেবল একটি পছন্দ।**`,
    },

    example: {
      en: `### TITASCERAM: a setup that scores 73.33 and gets half size

TITASCERAM is a mid-cap DSE ceramics name used illustratively here; **every figure below is constructed, not historical.** It is a worked case, not a claim about any listed company, and it is the same counter that appears cell for cell in the §45.6 scorecard.

The market context: a five-month advance from BDT 54.00 to BDT 70.00, followed by a three-week pullback. Price today is **BDT 62.40**. ATR(14) is **BDT 1.95**. Twenty-day average daily turnover is **BDT 96 lakh**.

### Step zero: what the screen looks like to everybody else

Before scoring anything, look at what a conventional indicator stack reports on this exact chart today:

| Indicator | Reading | Verdict |
|---|---|---|
| RSI(14) | 47.6, turning up from 41.2 | Bullish |
| MACD(12,26,9) histogram | +0.08, contracting negative | Bullish |
| Stochastic %K(14) | 38, crossing %D up | Bullish |
| Rate of change (10) | −2.1%, rising | Bullish |
| Price vs 20-day MA | −1.4%, MA still rising | Bullish |
| Williams %R(14) | −62, off the low | Bullish |

**Six for six.** The screen prints a perfect score, and a trader reading it concludes he has six independent confirmations.

He has one. Every row in that table is a transformation of the same closing series. Their average pairwise correlation on a DSE large-cap runs around 0.85, which by the formula in §45.1 gives:

$$n_{\\text{eff}} = \\frac{6}{1 + 5(0.85)} = \\frac{6}{5.25} = 1.14$$

**One point one four independent observations, reported as six.** The rest of this example scores the same stock properly.

### The six categories, one signal each

| # | Category | Signal used | Evidence | Score (0/1/2) | Weight | Weighted |
|---|---|---|---|---|---|---|
| 1 | Trend / structure | Weekly higher highs & higher lows; 20-week MA rising | Five months of clean structure, no lower low since February | **2** | 3 | **6** |
| 2 | Location | Fibonacci retracement of the 54.00 → 70.00 leg (Ch 41) | 62.40 is a 47.5% retracement — near the 50% at 62.00, not on it | **1** | 3 | **3** |
| 3 | Momentum — **one only** | RSI(14) (chosen per Ch 35 for a trending regime) | 47.6, turned up from 41.2, has **not** reclaimed 50 | **1** | 2 | **2** |
| 4 | Volatility / risk | ATR(14) = 1.95 = 3.125% of price (Ch 38, 39) | Below the 3.4% twenty-day median; a 2-ATR stop is affordable | **2** | 2 | **4** |
| 5 | Volume / liquidity | Relative volume (Ch 40) | Pullback volume 0.72× (good) but the last up-session was 1.15×, under the 1.5× bar | **1** | 3 | **3** |
| 6 | Fundamental gate | Chapter 25 scorecard | 78/100, inside the BUY band, governance severity 9% | **2** | 2 | **4** |
| | **TOTAL** | | | | **15** | **22** |

Maximum possible is $2 \\times 15 = 30$.

$$\\text{Score \\%} = \\frac{22}{30} \\times 100 = 73.33\\%$$

**MACD, Stochastic, rate-of-change and Williams %R do not appear anywhere in that table.** They were not judged inferior. They were judged to be Category 3, and Category 3 already voted.

### Why 47.5% is a 1 and not a 2

The retracement arithmetic, worked from Chapter 41:

$$\\text{Retracement} = \\frac{70.00 - 62.40}{70.00 - 54.00} = \\frac{7.60}{16.00} = 0.475$$

| Level | Price |
|---|---|
| 38.2% | 63.888 |
| **50.0%** | **62.000** |
| 61.8% | 60.112 |

Price at 62.40 sits BDT 0.40 above the 50% line — **0.21 ATR away.** That is close, and it is not *at* the level. The honest score is 1. A trader who writes 2 here is not measuring; he is rounding in the direction he already wants to go, and **the whole purpose of writing the criterion down before the session is to make that rounding visible.**

### The gates, which are checked before any of this counts

| Gate | Value | Threshold | Pass |
|---|---|---|---|
| ADTV, 20-day | BDT 96 lakh | ≥ 50 | ✓ |
| Governance severity (Ch 24) | 9% | ≤ 25% | ✓ |
| Limit-locked sessions in last 20 | 0 | = 0 | ✓ |
| **Gates passed** | **3** | need 3 | ✓ |

Three of three. Note the ordering: **had any one of these failed, the 73.33% would never have been computed at all.** The score is not a thing that gates modify. It is a thing that gates permit.

### From verdict to shares

73.33% clears the 70% TAKE threshold and falls short of the 85% full-size threshold, so:

**Verdict: TAKE. Size multiplier: 0.5.**

$$\\text{Stop} = 62.40 - 2 \\times 1.95 = 58.50, \\qquad \\text{Stop distance} = 3.90$$
$$\\text{Risk budget} = 1{,}200{,}000 \\times 1\\% = 12{,}000$$
$$\\text{Raw shares} = \\frac{12{,}000}{3.90} = 3076.92 \\;\\Rightarrow\\; 3{,}076$$
$$\\text{Final shares} = \\lfloor 3{,}076 \\times 0.5 \\rfloor = 1{,}538, \\qquad \\text{Final risk} = 1{,}538 \\times 3.90 = 5{,}998.20$$

**A 73.33% setup risks BDT 5,998.20 — half a percent of a BDT 12 lakh account.** That is what a merely-good score is worth in taka, and stating it in taka is the point.

### The reward side, with costs

$$R = \\frac{74.00 - 62.40}{3.90} = \\frac{11.60}{3.90} = 2.974$$

Round-trip cost at 0.8% of a full-size position value of BDT 191,942.40 is BDT 1,535.54, which is **12.80% of the 12,000 risk budget**:

$$R_{\\text{net}} = 2.974 - 0.128 = 2.846$$

Break-even win rate moves from $1/3.974 = 25.16\\%$ to $1/3.846 = 26.00\\%$. **Costs are not a rounding error; they are 84 basis points of required accuracy on a trade with a wide stop.** On a tighter stop they would be far worse — Chapter 2's arithmetic, arriving where it always arrives.

### Now three ways this setup dies

**Case A — the independent contradiction.** Suppose instead that price today is breaking the 70.00 high rather than retracing to it. Rescore: trend 2, location 2, momentum 2, volatility 2, volume 1, fundamental 2.

$$\\text{Weighted} = 6 + 6 + 4 + 4 + 3 + 4 = 27, \\qquad \\frac{27}{30} = 90.00\\%$$

Ninety percent. Full size. Except the breakout session traded **0.58× its twenty-day average turnover**. Categories 1 and 2 are shouting; Category 5 says nobody bought it. Volume is not a price transform, so this is genuine contrary evidence.

**Verdict: REJECT — independent signal contradicts. Size multiplier 0. Final shares 0.**

**A ninety-percent score buys nothing.** That is the design, and it is the same design as Chapter 30's exhaustion override and Chapter 25's quality floor.

**Case B — the duplicate.** Suppose the analyst, pleased that MACD also looks constructive, enters it as a seventh row and gives Category 3 two entries. The sheet returns **INVALID — two signals from one category**, and it does so *before* looking at the total. The reason is not pedantry. It is that the duplicate would have raised the score while adding, by the §45.1 arithmetic, roughly 0.07 bits of information.

**Case C — the liquidity failure.** Same 73.33% score, but ADTV is BDT 38 lakh instead of 96.

$$\\text{Gates passed} = 0 + 1 + 1 = 2 < 3 \\;\\Rightarrow\\; \\textbf{REJECT — hard gate failed}$$

At 38 lakh a day, the full-size position of BDT 191,942 is 5.1% of a single day's entire turnover in the name, and the half-size position is 2.5%. Chapter 40's constraint bites long before the chart does. **The technical picture is describing a market you cannot leave.**

### What the example is really showing

Three different failure modes, three different mechanisms, and **none of them is a deduction from the total.** Each one zeroes the verdict outright.

That is the thesis of the chapter stated in arithmetic: **a constraint that a good-looking total can outvote is not a constraint.**`,
      bn: `### TITASCERAM: যে সেটআপ ৭৩.৩৩ স্কোর করে আর অর্ধেক আকার পায়

TITASCERAM এখানে দৃষ্টান্তমূলকভাবে ব্যবহৃত একটি মাঝারি আকারের ডিএসই সিরামিকস নাম; **নিচের প্রতিটি সংখ্যা নির্মিত, ঐতিহাসিক নয়।** এটি একটি কষে দেখানো ঘটনা, কোনো তালিকাভুক্ত কোম্পানি সম্পর্কে দাবি নয়, আর §৪৫.৬-এর স্কোরকার্ডে ঘরে ঘরে এই একই কাউন্টারই আসে।

বাজারের প্রেক্ষাপট: ৫৪.০০ টাকা থেকে ৭০.০০ টাকায় পাঁচ মাসের উত্থান, তারপর তিন সপ্তাহের পুলব্যাক। আজকের দাম **৬২.৪০ টাকা**। ATR(১৪) **১.৯৫ টাকা**। কুড়ি দিনের গড় দৈনিক টার্নওভার **৯৬ লক্ষ টাকা**।

### শূন্য ধাপ: পর্দাটি বাকি সবার কাছে যেমন দেখায়

কিছু স্কোর করার আগে দেখুন প্রচলিত নির্দেশকের স্তূপ ঠিক এই চার্টে আজ কী জানায়:

| নির্দেশক | পাঠ | রায় |
|---|---|---|
| RSI(১৪) | ৪৭.৬, ৪১.২ থেকে ঘুরে উঠছে | তেজি |
| MACD(১২,২৬,৯) হিস্টোগ্রাম | +০.০৮, ঋণাত্মক দিক সংকুচিত | তেজি |
| Stochastic %K(১৪) | ৩৮, %D-কে ওপরে ক্রস করছে | তেজি |
| Rate of change (১০) | −২.১%, বাড়ছে | তেজি |
| দাম বনাম ২০-দিনের MA | −১.৪%, MA এখনো বাড়ছে | তেজি |
| Williams %R(১৪) | −৬২, তলা ছেড়েছে | তেজি |

**ছয়ে ছয়।** পর্দা নিখুঁত স্কোর ছাপে, আর তা পড়ে ট্রেডার সিদ্ধান্তে আসেন তাঁর ছয়টি স্বাধীন নিশ্চিতকরণ আছে।

তাঁর আছে একটি। ঐ টেবিলের প্রতিটি সারি একই ক্লোজিং ধারার রূপান্তর। ডিএসই-র বড় মূলধনী শেয়ারে এদের গড় জোড়া-সহসম্পর্ক প্রায় ০.৮৫, যা §৪৫.১-এর সূত্রে দেয়:

$$n_{\\text{eff}} = \\frac{6}{1 + 5(0.85)} = \\frac{6}{5.25} = 1.14$$

**এক দশমিক এক চারটি স্বাধীন পর্যবেক্ষণ, ছয়টি হিসেবে প্রতিবেদিত।** এই উদাহরণের বাকি অংশ একই শেয়ারকে সঠিকভাবে স্কোর করে।

### ছয়টি শ্রেণি, প্রতিটিতে একটি করে সংকেত

| # | শ্রেণি | ব্যবহৃত সংকেত | প্রমাণ | স্কোর (০/১/২) | ওজন | ভারিত |
|---|---|---|---|---|---|---|
| ১ | প্রবণতা / কাঠামো | সাপ্তাহিক উচ্চতর উচ্চ ও উচ্চতর নিম্ন; ২০-সপ্তাহের MA বাড়ছে | পাঁচ মাসের পরিচ্ছন্ন কাঠামো, ফেব্রুয়ারির পর কোনো নিম্নতর নিম্ন নেই | **২** | ৩ | **৬** |
| ২ | অবস্থান | ৫৪.০০ → ৭০.০০ পায়ের Fibonacci রিট্রেসমেন্ট (অধ্যায় ৪১) | ৬২.৪০ হলো ৪৭.৫% রিট্রেসমেন্ট — ৬২.০০-এর ৫০%-এর কাছে, তার ওপরে নয় | **১** | ৩ | **৩** |
| ৩ | মোমেন্টাম — **একটিই** | RSI(১৪) (প্রবণতাযুক্ত পরিবেশে অধ্যায় ৩৫ অনুযায়ী বাছা) | ৪৭.৬, ৪১.২ থেকে ঘুরেছে, ৫০ **পুনর্দখল করেনি** | **১** | ২ | **২** |
| ৪ | অস্থিরতা / ঝুঁকি | ATR(১৪) = ১.৯৫ = দামের ৩.১২৫% (অধ্যায় ৩৮, ৩৯) | ৩.৪% কুড়ি-দিনের মধ্যকের নিচে; ২-ATR স্টপ সামর্থ্যের মধ্যে | **২** | ২ | **৪** |
| ৫ | ভলিউম / তারল্য | আপেক্ষিক ভলিউম (অধ্যায় ৪০) | পুলব্যাকের ভলিউম ০.৭২× (ভালো) কিন্তু শেষ ঊর্ধ্ব-সেশন ১.১৫×, ১.৫× সীমার নিচে | **১** | ৩ | **৩** |
| ৬ | ফান্ডামেন্টাল গেট | অধ্যায় ২৫-এর স্কোরকার্ড | ১০০-তে ৭৮, BUY ব্যান্ডের ভেতরে, গভর্ন্যান্স তীব্রতা ৯% | **২** | ২ | **৪** |
| | **মোট** | | | | **১৫** | **২২** |

সর্বোচ্চ সম্ভব $2 \\times 15 = 30$।

$$\\text{Score \\%} = \\frac{22}{30} \\times 100 = 73.33\\%$$

**MACD, Stochastic, rate-of-change ও Williams %R ঐ টেবিলের কোথাও নেই।** এদের নিকৃষ্ট বিবেচনা করা হয়নি। এদের বিবেচনা করা হয়েছে তৃতীয় শ্রেণি হিসেবে, আর তৃতীয় শ্রেণি ইতিমধ্যেই ভোট দিয়ে ফেলেছে।

### ৪৭.৫% কেন ১, ২ নয়

অধ্যায় ৪১ থেকে রিট্রেসমেন্টের পাটিগণিত:

$$\\text{Retracement} = \\frac{70.00 - 62.40}{70.00 - 54.00} = \\frac{7.60}{16.00} = 0.475$$

| স্তর | দাম |
|---|---|
| ৩৮.২% | ৬৩.৮৮৮ |
| **৫০.০%** | **৬২.০০০** |
| ৬১.৮% | ৬০.১১২ |

৬২.৪০-এ দাম ৫০% রেখার ০.৪০ টাকা ওপরে — **০.২১ ATR দূরে।** এটি কাছে, আর এটি লেভেলের *ওপরে* নয়। সৎ স্কোর ১। যিনি এখানে ২ লেখেন তিনি মাপছেন না; তিনি আগে থেকেই যেদিকে যেতে চান সেদিকে গোল করছেন, আর **সেশনের আগে মানদণ্ডটি লিখে রাখার পুরো উদ্দেশ্যই ঐ গোল করাটিকে দৃশ্যমান করা।**

### গেটগুলো, যা ওপরের কিছু গণ্য হওয়ার আগেই যাচাই হয়

| গেট | মান | সীমা | পাস |
|---|---|---|---|
| ADTV, ২০-দিন | ৯৬ লক্ষ টাকা | ≥ ৫০ | ✓ |
| গভর্ন্যান্স তীব্রতা (অধ্যায় ২৪) | ৯% | ≤ ২৫% | ✓ |
| শেষ ২০-এ লিমিট-লক সেশন | ০ | = ০ | ✓ |
| **উত্তীর্ণ গেট** | **৩** | দরকার ৩ | ✓ |

তিনে তিন। ক্রমটি লক্ষ করুন: **এদের একটিও ব্যর্থ হলে ৭৩.৩৩% কখনো গণনাই হতো না।** স্কোর এমন কিছু নয় যা গেট সংশোধন করে। স্কোর এমন কিছু যা গেট অনুমোদন করে।

### রায় থেকে শেয়ার সংখ্যায়

৭৩.৩৩% ৭০% TAKE সীমা পার করে আর ৮৫% পূর্ণ-আকার সীমার নিচে থাকে, তাই:

**রায়: TAKE। আকার গুণক: ০.৫।**

$$\\text{Stop} = 62.40 - 2 \\times 1.95 = 58.50, \\qquad \\text{Stop distance} = 3.90$$
$$\\text{Risk budget} = 1{,}200{,}000 \\times 1\\% = 12{,}000$$
$$\\text{Raw shares} = \\frac{12{,}000}{3.90} = 3076.92 \\;\\Rightarrow\\; 3{,}076$$
$$\\text{Final shares} = \\lfloor 3{,}076 \\times 0.5 \\rfloor = 1{,}538, \\qquad \\text{Final risk} = 1{,}538 \\times 3.90 = 5{,}998.20$$

**একটি ৭৩.৩৩% সেটআপ ৫,৯৯৮.২০ টাকা ঝুঁকিতে ফেলে — ১২ লক্ষ টাকার হিসাবের অর্ধেক শতাংশ।** নিছক-ভালো একটি স্কোরের টাকায় মূল্য এটুকুই, আর টাকায় বলাটাই আসল কথা।

### পুরস্কারের দিক, খরচসহ

$$R = \\frac{74.00 - 62.40}{3.90} = \\frac{11.60}{3.90} = 2.974$$

১,৯১,৯৪২.৪০ টাকার পূর্ণ-আকার পজিশন মূল্যের ০.৮% রাউন্ড-ট্রিপ খরচ ১,৫৩৫.৫৪ টাকা, যা **১২,০০০ ঝুঁকি-বাজেটের ১২.৮০%**:

$$R_{\\text{net}} = 2.974 - 0.128 = 2.846$$

ব্রেক-ইভেন উইন রেট $1/3.974 = 25.16\\%$ থেকে $1/3.846 = 26.00\\%$-এ যায়। **খরচ কোনো গোল করার ত্রুটি নয়; চওড়া স্টপের একটি ট্রেডে এটি প্রয়োজনীয় নির্ভুলতার ৮৪ বেসিস পয়েন্ট।** আঁটসাঁট স্টপে তা আরও অনেক খারাপ হতো — অধ্যায় ২-এর পাটিগণিত, যেখানে সবসময় পৌঁছায় সেখানেই পৌঁছেছে।

### এবার এই সেটআপ মরার তিনটি পথ

**ঘটনা ক — স্বাধীন বিরোধিতা।** ধরুন আজ দাম ৭০.০০-এ ফিরে না এসে বরং ঐ উচ্চটি ভাঙছে। পুনঃস্কোর: প্রবণতা ২, অবস্থান ২, মোমেন্টাম ২, অস্থিরতা ২, ভলিউম ১, ফান্ডামেন্টাল ২।

$$\\text{Weighted} = 6 + 6 + 4 + 4 + 3 + 4 = 27, \\qquad \\frac{27}{30} = 90.00\\%$$

নব্বই শতাংশ। পূর্ণ আকার। কেবল ব্রেকআউটের সেশনটি লেনদেন করেছে তার কুড়ি-দিনের গড় টার্নওভারের **০.৫৮×**। ১ ও ২ নম্বর শ্রেণি চিৎকার করছে; ৫ নম্বর বলছে কেউ কেনেনি। ভলিউম দামের রূপান্তর নয়, তাই এটি প্রকৃত বিপরীত প্রমাণ।

**রায়: REJECT — স্বাধীন সংকেত বিরোধিতা করছে। আকার গুণক ০। চূড়ান্ত শেয়ার ০।**

**নব্বই শতাংশ স্কোর কিছুই কেনে না।** নকশাটি এমনই, আর এটি অধ্যায় ৩০-এর এক্সহসশন অগ্রাহ্যকরণ ও অধ্যায় ২৫-এর গুণমান-মেঝের অভিন্ন নকশা।

**ঘটনা খ — অনুলিপি।** ধরুন বিশ্লেষক, MACD-ও গঠনমূলক দেখছে বলে খুশি হয়ে, একে সপ্তম সারি হিসেবে বসালেন আর তৃতীয় শ্রেণিকে দুটি এন্ট্রি দিলেন। শিট ফেরত দেয় **INVALID — এক শ্রেণি থেকে দুটি সংকেত**, আর তা করে মোট যোগফল দেখার *আগেই*। কারণটি পাণ্ডিত্য নয়। কারণ হলো অনুলিপিটি স্কোর বাড়াত আর §৪৫.১-এর পাটিগণিতে তথ্য যোগ করত প্রায় ০.০৭ বিট।

**ঘটনা গ — তারল্য ব্যর্থতা।** একই ৭৩.৩৩% স্কোর, কিন্তু ADTV ৯৬-এর বদলে ৩৮ লক্ষ টাকা।

$$\\text{Gates passed} = 0 + 1 + 1 = 2 < 3 \\;\\Rightarrow\\; \\textbf{REJECT — hard gate failed}$$

দিনে ৩৮ লক্ষে, ১,৯১,৯৪২ টাকার পূর্ণ-আকার পজিশন ঐ নামের একটি দিনের গোটা টার্নওভারের ৫.১%, আর অর্ধ-আকার পজিশন ২.৫%। চার্ট কামড়ানোর অনেক আগেই অধ্যায় ৪০-এর সীমাবদ্ধতা কামড়ায়। **টেকনিক্যাল ছবিটি এমন একটি বাজারের বর্ণনা যা আপনি ছাড়তে পারবেন না।**

### উদাহরণটি আসলে যা দেখাচ্ছে

তিনটি ভিন্ন ব্যর্থতার ধরন, তিনটি ভিন্ন কলকব্জা, আর **এদের একটিও মোট যোগফল থেকে বিয়োগ নয়।** প্রতিটিই রায়কে সরাসরি শূন্য করে।

পাটিগণিতে বলা অধ্যায়ের মূল প্রতিপাদ্য এটিই: **যে সীমাবদ্ধতাকে একটি সুন্দর-দেখতে মোট ভোটে হারাতে পারে তা সীমাবদ্ধতা নয়।**`,
    },

    formula: {
      en: `### 1. The correlation problem, which comes before the score

This is the intellectual core of the chapter, so it goes first.

Let $s_1, \\dots, s_n$ be signals with average pairwise correlation $\\rho$. The number of **effectively independent** observations is:

$$n_{\\text{eff}} = \\frac{n}{1 + (n-1)\\rho}$$

| Screen | $n$ | $\\rho$ | $n_{\\text{eff}}$ | What the trader believes |
|---|---|---|---|---|
| Six momentum oscillators | 6 | 0.85 | **1.14** | 6 |
| One signal per category | 6 | 0.20 | **3.00** | 6 |
| Three oscillators + volume | 4 | 0.65 | 1.63 | 4 |

**The stacked screen delivers 1.14 independent observations and reports six.** Since the standard error of any estimate built from them scales as $1/\\sqrt{n_{\\text{eff}}}$, the confidence you are entitled to differs by $\\sqrt{3.00/1.14} = 1.62$ — and the trader with the oscillator stack believes his advantage is $\\sqrt{6} = 2.45$.

**Now the sharper version, in information terms.** Define the marginal information a filter contributes, given that everything else already passed:

$$I_i = -\\log_2 P\\big(s_i \\text{ passes} \\mid \\text{all others passed}\\big)$$

- A seventh oscillator, given six bullish oscillators, passes with probability ≈ 0.95: $I = -\\log_2 0.95 = 0.074$ bits.
- A volume filter, given a bullish price picture, passes with probability ≈ 0.55: $I = -\\log_2 0.55 = 0.863$ bits.

**The volume filter carries roughly twelve times the information of the redundant oscillator**, and this is not a matter of taste — it is a consequence of volume not being a function of the closing price.

**The operational rule, and it has an exact test:**

$$\\text{A filter earns its place only if it reduces your trade count.}$$

A perfectly correlated filter costs you nothing in candidates, because it never disagrees. **The trades a filter removes are the measure of the information it adds.** If adding an indicator changed neither your entries nor your count, you did not add an indicator; you added a decoration.

Hence the structural rule: **at most one representative from each information class.**

| Class | Independent observable | Chapters | Representatives (pick one) |
|---|---|---|---|
| Structure | Sequence of highs and lows | 31, 34, 42 | Dow state, MA slope, pattern |
| Location | Distance to a reference price | 30, 31, 41 | S/R zone, trendline, Fib level |
| Momentum | Rate of change of price | 35, 36, 37, 44 | RSI *or* MACD *or* Stochastic *or* divergence |
| Volatility | Dispersion of price | 38, 39 | ATR, bandwidth |
| **Volume** | **Quantity transacted — not a price transform** | 40 | Relative volume, turnover |
| Fundamental | Accounts and governance | 24, 25 | Ch 25 composite |

### 2. The weighted confluence score

Score each category $c_i \\in \\{0, 1, 2\\}$ against a **written** criterion, with weight $w_i$:

$$W = \\sum_{i=1}^{6} c_i w_i, \\qquad W_{\\max} = 2\\sum_{i=1}^{6} w_i, \\qquad S = \\frac{W}{W_{\\max}} \\times 100$$

With $w = (3, 3, 2, 2, 3, 2)$, $\\sum w_i = 15$ and $W_{\\max} = 30$.

$$\\text{Band} = \\begin{cases} \\text{TAKE, full size} & S \\ge 85 \\\\ \\text{TAKE, half size} & 70 \\le S < 85 \\\\ \\text{WATCH, no position} & 50 \\le S < 70 \\\\ \\text{REJECT} & S < 50 \\end{cases}$$

**The candour required here is the same Chapter 25 demanded.** The weights are judgement: 3 for trend, location and volume because DSE trades are won and lost on where you entered and whether you can leave. That is defensible. It is not measured. **A threshold chosen before looking at outcomes is worth more than an optimised threshold chosen after**, and §45.4 says why in arithmetic.

### 3. Hard gates, which override the total

$$G = \\mathbb{1}[\\text{ADTV} \\ge 50\\text{ lakh}] \\cdot \\mathbb{1}[\\text{gov. severity} \\le 25\\%] \\cdot \\mathbb{1}[\\text{limit-locks} = 0]$$

$$V = \\mathbb{1}[\\text{no duplicate category}] \\cdot \\mathbb{1}[\\text{no independent contradiction}]$$

$$\\text{Verdict} = \\begin{cases} \\text{INVALID} & \\text{duplicate category} \\\\ \\text{REJECT} & G = 0 \\;\\lor\\; V = 0 \\\\ \\text{Band}(S) & \\text{otherwise} \\end{cases}$$

$$m = \\begin{cases} 0 & G \\cdot V = 0 \\\\ 1 & S \\ge 85 \\\\ 0.5 & 70 \\le S < 85 \\\\ 0 & S < 70 \\end{cases} \\qquad q_{\\text{final}} = \\lfloor q_{\\text{raw}} \\cdot m \\rfloor$$

**Gates are tested first and are not terms in $W$.** Here is exactly why, in numbers.

The maximum a single category can contribute is $2w_i$, so zeroing one category costs at most $2w_i / 30$:

| Category zeroed | Score falls to | Band |
|---|---|---|
| Volume ($w = 3$) | $24/30 = 80.00\\%$ | **TAKE, half size** |
| Location ($w = 3$) | $24/30 = 80.00\\%$ | **TAKE, half size** |
| Momentum ($w = 2$) | $26/30 = 86.67\\%$ | **TAKE, FULL size** |
| Volatility ($w = 2$) | $26/30 = 86.67\\%$ | **TAKE, FULL size** |

**Read the third row again.** A setup with *zero* momentum evidence, scored inside the weighted system, still qualifies for a full-size position. **No weight you can defend is large enough to let a category function as a veto**, because a weight that large would dominate every other decision the sheet makes.

This is Chapter 30's exhaustion override and Chapter 25's quality floor arriving for the third time, and the general statement is worth memorising: **a constraint that a good-looking total can outvote is not a constraint. It is a penalty.**

### 4. The overfitting problem

Every filter you add raises the in-sample hit rate and lowers the trade count. Both effects are mechanical, and only one of them is evidence.

$$N_{\\text{trades}} = N_{\\text{candidates}} \\prod_{i=1}^{k} p_i \\quad \\text{(independent filters)}$$

With 240 candidate sessions a year and six independent filters at $p_i = 0.55$:

$$N = 240 \\times 0.55^{6} = 240 \\times 0.0277 = 6.6 \\text{ trades a year}$$

Backtest that over two years: **13 trades, of which 9 were winners — a 69% hit rate.** Now ask what a coin would have done. Under $p = 0.5$:

$$P(X \\ge 9 \\mid n = 13) = \\frac{1}{2^{13}}\\sum_{k=9}^{13}\\binom{13}{k} = \\frac{715 + 286 + 78 + 13 + 1}{8192} = \\frac{1093}{8192} = 13.34\\%$$

**A fair coin produces that record or better one time in seven and a half.** The standard error on the hit rate is:

$$SE = \\sqrt{\\frac{0.69 \\times 0.31}{13}} = \\sqrt{0.016454} = 0.1283 = 12.83\\text{ pp}$$

giving a rough 95% interval of **44% to 94%**. You have not measured an edge. You have measured a very wide interval that happens to contain one.

**The asymmetry that traps people:** the filter that costs you the fewest trades is the one adding the least information (§45.1), so the system that stays comfortable to trade is precisely the system that learned nothing. **Comfort and information are in direct opposition here.**

Two defences, both due in Chapter 55:

1. **Fix the rules before you look at outcomes.** A 70% threshold chosen in advance beats an optimised 63% threshold chosen afterwards, because the second one has spent its degrees of freedom.
2. **Require a minimum trade count before believing any hit rate.** Below roughly 30 completed trades, the interval is wider than any edge you are likely to have.

### 5. Handling contradiction

Let $\\rho_{ij}$ be the correlation between the contradicting signal and the ones it contradicts.

$$\\text{Contradiction} = \\begin{cases} \\text{Noise — record, do not act} & \\rho > 0.6 \\\\ \\text{VETO — zero the verdict} & \\rho < 0.3 \\end{cases}$$

- RSI at 58 against Stochastic at 46: $\\rho \\approx 0.85$. **They have disagreed about a lookback parameter, not about the market.**
- A price breakout against turnover at 0.58× ADV: $\\rho \\approx 0.1$. **Genuine contrary evidence, and it vetoes.**

**A signal you are willing to discard when it says no was never evidence.** The veto belongs in the verdict function, not as a deduction, for the arithmetic reason given in §45.3.

### 6. Sizing, and the cost that closes the loop

$$X = P_{\\text{entry}} - k\\,ATR, \\qquad d = P_{\\text{entry}} - X = k\\,ATR$$
$$B = E \\cdot r, \\qquad q_{\\text{raw}} = \\left\\lfloor \\frac{B}{d} \\right\\rfloor, \\qquad q_{\\text{final}} = \\lfloor q_{\\text{raw}} \\cdot m \\rfloor$$
$$R = \\frac{T - P_{\\text{entry}}}{d}, \\qquad R_{\\text{net}} = R - \\frac{c \\cdot q_{\\text{raw}} P_{\\text{entry}}}{B}, \\qquad p^{*} = \\frac{1}{1 + R_{\\text{net}}}$$

**Note that the cost term is expressed as a fraction of the risk budget, not of the position.** That is deliberate: it makes the cost commensurate with $R$, so you can subtract it. On the worked case $c = 0.8\\%$ consumes 12.80% of one R, moving the break-even from 25.16% to 26.00%.

### 7. The DSE constraints that precede all of it

| Constraint | Effect on the score | Source |
|---|---|---|
| ADTV below BDT 50 lakh | Hard gate. **No score is valid on a name you cannot exit.** | Ch 2, 40 |
| Any limit-locked session in the window | Hard gate. The bar's high or low is administrative, so MA, ATR, RSI and Fibonacci levels computed across it are artefacts. | Ch 2, 41 |
| Floor-price data in the lookback | Exclude the window entirely. Flat quotes with no trades corrupt every category at once. | Ch 6, 26 |
| Unadjusted record-date gap | Fabricates support, resistance and divergence. Adjust before scoring. | Ch 30, 44 |
| No reliable short side | Every bearish confluence is an exit or an abstention. **Categories 1–5 flipping bearish sizes you out, never in.** | Ch 26 |
| Round-trip cost against 1R | On a 2-ATR stop it is 12.80% of R here. On a 1-ATR stop it would be 25.6%. | Ch 2 |`,
      bn: `### ১. সহসম্পর্কের সমস্যা, যা স্কোরের আগে আসে

এটিই অধ্যায়ের বৌদ্ধিক কেন্দ্র, তাই এটিই প্রথমে।

ধরুন $s_1, \\dots, s_n$ সংকেতগুলোর গড় জোড়া-সহসম্পর্ক $\\rho$। **কার্যকরভাবে স্বাধীন** পর্যবেক্ষণের সংখ্যা:

$$n_{\\text{eff}} = \\frac{n}{1 + (n-1)\\rho}$$

| পর্দা | $n$ | $\\rho$ | $n_{\\text{eff}}$ | ট্রেডার যা বিশ্বাস করেন |
|---|---|---|---|---|
| ছয়টি মোমেন্টাম অসিলেটর | ৬ | ০.৮৫ | **১.১৪** | ৬ |
| প্রতি শ্রেণিতে একটি সংকেত | ৬ | ০.২০ | **৩.০০** | ৬ |
| তিনটি অসিলেটর + ভলিউম | ৪ | ০.৬৫ | ১.৬৩ | ৪ |

**স্তূপীকৃত পর্দা ১.১৪টি স্বাধীন পর্যবেক্ষণ দেয় আর ছয়টি বলে জানায়।** যেহেতু এদের থেকে গড়া যেকোনো অনুমানের আদর্শ ত্রুটি $1/\\sqrt{n_{\\text{eff}}}$ অনুপাতে চলে, আপনি যতটুকু আত্মবিশ্বাসের অধিকারী তার পার্থক্য $\\sqrt{3.00/1.14} = 1.62$ — আর অসিলেটরের স্তূপওয়ালা ট্রেডার ভাবছেন তাঁর সুবিধা $\\sqrt{6} = 2.45$।

**এবার আরও ধারালো সংস্করণ, তথ্যের ভাষায়।** বাকি সবকিছু ইতিমধ্যে পাস করেছে ধরে নিয়ে একটি ফিল্টারের প্রান্তিক তথ্য-অবদান সংজ্ঞায়িত করুন:

$$I_i = -\\log_2 P\\big(s_i \\text{ passes} \\mid \\text{all others passed}\\big)$$

- ছয়টি তেজি অসিলেটর থাকলে সপ্তম অসিলেটরটি প্রায় ০.৯৫ সম্ভাবনায় পাস করে: $I = -\\log_2 0.95 = 0.074$ বিট।
- তেজি দামের ছবি থাকলে একটি ভলিউম ফিল্টার প্রায় ০.৫৫ সম্ভাবনায় পাস করে: $I = -\\log_2 0.55 = 0.863$ বিট।

**ভলিউম ফিল্টারটি অপ্রয়োজনীয় অসিলেটরের প্রায় বারো গুণ তথ্য বহন করে**, আর এটি রুচির ব্যাপার নয় — এটি ভলিউম ক্লোজিং দামের অপেক্ষক না হওয়ার পরিণতি।

**পরিচালনগত নিয়ম, আর এর একটি নিখুঁত পরীক্ষা আছে:**

$$\\text{একটি ফিল্টার তখনই জায়গা পায় যখন তা আপনার ট্রেডসংখ্যা কমায়।}$$

সম্পূর্ণ সহসম্পর্কিত ফিল্টার প্রার্থীতে আপনার কিছুই খরচ করে না, কারণ সে কখনো দ্বিমত করে না। **একটি ফিল্টার যে ট্রেডগুলো বাদ দেয় সেগুলোই তার যোগ করা তথ্যের মাপ।** কোনো নির্দেশক যোগ করে আপনার প্রবেশ বা সংখ্যা কোনোটাই না বদলালে আপনি নির্দেশক যোগ করেননি; সাজসজ্জা যোগ করেছেন।

তাই কাঠামোগত নিয়ম: **প্রতিটি তথ্য-শ্রেণি থেকে সর্বোচ্চ একজন প্রতিনিধি।**

| শ্রেণি | স্বাধীন পর্যবেক্ষণযোগ্য রাশি | অধ্যায় | প্রতিনিধি (একটি বাছুন) |
|---|---|---|---|
| কাঠামো | উচ্চ ও নিম্নের ক্রম | ৩১, ৩৪, ৪২ | ডাও অবস্থা, MA ঢাল, প্যাটার্ন |
| অবস্থান | একটি রেফারেন্স দাম থেকে দূরত্ব | ৩০, ৩১, ৪১ | S/R জোন, ট্রেন্ডলাইন, Fib স্তর |
| মোমেন্টাম | দামের পরিবর্তনের হার | ৩৫, ৩৬, ৩৭, ৪৪ | RSI *অথবা* MACD *অথবা* Stochastic *অথবা* ডাইভারজেন্স |
| অস্থিরতা | দামের বিস্তার | ৩৮, ৩৯ | ATR, ব্যান্ডউইথ |
| **ভলিউম** | **লেনদেনকৃত পরিমাণ — দামের রূপান্তর নয়** | ৪০ | আপেক্ষিক ভলিউম, টার্নওভার |
| ফান্ডামেন্টাল | হিসাব ও সুশাসন | ২৪, ২৫ | অধ্যায় ২৫-এর কম্পোজিট |

### ২. ভারিত সমন্বয় স্কোর

প্রতিটি শ্রেণিকে একটি **লিখিত** মানদণ্ডের বিপরীতে $c_i \\in \\{0, 1, 2\\}$ স্কোর দিন, ওজন $w_i$ সহ:

$$W = \\sum_{i=1}^{6} c_i w_i, \\qquad W_{\\max} = 2\\sum_{i=1}^{6} w_i, \\qquad S = \\frac{W}{W_{\\max}} \\times 100$$

$w = (3, 3, 2, 2, 3, 2)$ হলে $\\sum w_i = 15$ ও $W_{\\max} = 30$।

$$\\text{Band} = \\begin{cases} \\text{TAKE, full size} & S \\ge 85 \\\\ \\text{TAKE, half size} & 70 \\le S < 85 \\\\ \\text{WATCH, no position} & 50 \\le S < 70 \\\\ \\text{REJECT} & S < 50 \\end{cases}$$

**এখানে যে সততা দরকার তা অধ্যায় ২৫-ও দাবি করেছিল।** ওজনগুলো বিচারবুদ্ধি: প্রবণতা, অবস্থান ও ভলিউমে ৩, কারণ ডিএসই-র ট্রেড জেতা-হারা হয় আপনি কোথায় ঢুকলেন আর বেরোতে পারবেন কি না তার ওপর। এটি সমর্থনযোগ্য। এটি মাপা নয়। **ফলাফল দেখার আগে বাছা একটি সীমা, ফলাফল দেখার পরে অপ্টিমাইজ করা সীমার চেয়ে বেশি মূল্যবান**, আর §৪৫.৪ পাটিগণিতে বলে কেন।

### ৩. কঠোর গেট, যা মোট যোগফলকে অগ্রাহ্য করে

$$G = \\mathbb{1}[\\text{ADTV} \\ge 50\\text{ lakh}] \\cdot \\mathbb{1}[\\text{gov. severity} \\le 25\\%] \\cdot \\mathbb{1}[\\text{limit-locks} = 0]$$

$$V = \\mathbb{1}[\\text{no duplicate category}] \\cdot \\mathbb{1}[\\text{no independent contradiction}]$$

$$\\text{Verdict} = \\begin{cases} \\text{INVALID} & \\text{duplicate category} \\\\ \\text{REJECT} & G = 0 \\;\\lor\\; V = 0 \\\\ \\text{Band}(S) & \\text{otherwise} \\end{cases}$$

$$m = \\begin{cases} 0 & G \\cdot V = 0 \\\\ 1 & S \\ge 85 \\\\ 0.5 & 70 \\le S < 85 \\\\ 0 & S < 70 \\end{cases} \\qquad q_{\\text{final}} = \\lfloor q_{\\text{raw}} \\cdot m \\rfloor$$

**গেটগুলো প্রথমে পরীক্ষিত হয় ও $W$-এর কোনো পদ নয়।** ঠিক কেন, সংখ্যায়।

একটি শ্রেণির সর্বোচ্চ অবদান $2w_i$, তাই একটি শ্রেণিকে শূন্য করলে খরচ সর্বোচ্চ $2w_i / 30$:

| যে শ্রেণি শূন্য | স্কোর নামে | ব্যান্ড |
|---|---|---|
| ভলিউম ($w = 3$) | $24/30 = 80.00\\%$ | **TAKE, অর্ধ আকার** |
| অবস্থান ($w = 3$) | $24/30 = 80.00\\%$ | **TAKE, অর্ধ আকার** |
| মোমেন্টাম ($w = 2$) | $26/30 = 86.67\\%$ | **TAKE, পূর্ণ আকার** |
| অস্থিরতা ($w = 2$) | $26/30 = 86.67\\%$ | **TAKE, পূর্ণ আকার** |

**তৃতীয় সারিটি আবার পড়ুন।** *শূন্য* মোমেন্টাম প্রমাণসহ একটি সেটআপ, ভারিত ব্যবস্থার ভেতরে স্কোর করা হলে, তবু পূর্ণ-আকার পজিশনের যোগ্য হয়। **আপনি সমর্থন করতে পারেন এমন কোনো ওজনই এত বড় নয় যে একটি শ্রেণি ভেটো হিসেবে কাজ করতে পারে**, কারণ অত বড় ওজন শিটের প্রতিটি সিদ্ধান্তকেই কুক্ষিগত করত।

এটি অধ্যায় ৩০-এর এক্সহসশন অগ্রাহ্যকরণ ও অধ্যায় ২৫-এর গুণমান-মেঝের তৃতীয়বার আগমন, আর সাধারণ বিবৃতিটি মুখস্থ রাখার মতো: **যে সীমাবদ্ধতাকে একটি সুন্দর-দেখতে মোট ভোটে হারাতে পারে তা সীমাবদ্ধতা নয়। তা একটি জরিমানা।**

### ৪. অতিরিক্ত-সংস্থাপনের সমস্যা

আপনি যত ফিল্টার যোগ করবেন, নমুনার ভেতরের হিট রেট তত বাড়বে আর ট্রেডসংখ্যা তত কমবে। দুটি প্রভাবই যান্ত্রিক, আর তার একটিই কেবল প্রমাণ।

$$N_{\\text{trades}} = N_{\\text{candidates}} \\prod_{i=1}^{k} p_i \\quad \\text{(independent filters)}$$

বছরে ২৪০টি প্রার্থী সেশন ও $p_i = 0.55$-এ ছয়টি স্বাধীন ফিল্টার হলে:

$$N = 240 \\times 0.55^{6} = 240 \\times 0.0277 = 6.6 \\text{ trades a year}$$

দুই বছরে ব্যাকটেস্ট করুন: **১৩টি ট্রেড, যার ৯টি বিজয়ী — ৬৯% হিট রেট।** এবার জিজ্ঞেস করুন একটি মুদ্রা কী করত। $p = 0.5$-এ:

$$P(X \\ge 9 \\mid n = 13) = \\frac{1}{2^{13}}\\sum_{k=9}^{13}\\binom{13}{k} = \\frac{715 + 286 + 78 + 13 + 1}{8192} = \\frac{1093}{8192} = 13.34\\%$$

**একটি নিরপেক্ষ মুদ্রা ঐ রেকর্ড বা তার চেয়ে ভালো ফল দেয় সাড়ে সাতবারে একবার।** হিট রেটের আদর্শ ত্রুটি:

$$SE = \\sqrt{\\frac{0.69 \\times 0.31}{13}} = \\sqrt{0.016454} = 0.1283 = 12.83\\text{ pp}$$

অর্থাৎ মোটামুটি ৯৫% ব্যবধান **৪৪% থেকে ৯৪%**। আপনি কোনো প্রান্ত-সুবিধা মাপেননি। আপনি একটি অত্যন্ত চওড়া ব্যবধান মেপেছেন যার ভেতরে কাকতালীয়ভাবে একটি সুবিধা পড়ে।

**যে অসমতা মানুষকে ফাঁদে ফেলে:** যে ফিল্টার আপনার সবচেয়ে কম ট্রেড কাড়ে সেটিই সবচেয়ে কম তথ্য যোগ করে (§৪৫.১), তাই যে ব্যবস্থা ট্রেড করতে আরামদায়ক থাকে ঠিক সেই ব্যবস্থাই কিছু শেখেনি। **এখানে আরাম ও তথ্য সরাসরি পরস্পরবিরোধী।**

দুটি প্রতিরক্ষা, দুটিই অধ্যায় ৫৫-এর পাওনা:

১. **ফলাফল দেখার আগে নিয়ম স্থির করুন।** আগে বাছা ৭০% সীমা পরে অপ্টিমাইজ করা ৬৩% সীমাকে হারায়, কারণ দ্বিতীয়টি তার স্বাধীনতার মাত্রা খরচ করে ফেলেছে।
২. **কোনো হিট রেট বিশ্বাস করার আগে একটি ন্যূনতম ট্রেডসংখ্যা দাবি করুন।** মোটামুটি ৩০টি সম্পন্ন ট্রেডের নিচে ব্যবধানটি আপনার সম্ভাব্য যেকোনো সুবিধার চেয়ে চওড়া।

### ৫. বিরোধিতা সামলানো

ধরুন $\\rho_{ij}$ হলো বিরোধী সংকেত ও যাদের সে বিরোধিতা করছে তাদের মধ্যে সহসম্পর্ক।

$$\\text{Contradiction} = \\begin{cases} \\text{Noise — record, do not act} & \\rho > 0.6 \\\\ \\text{VETO — zero the verdict} & \\rho < 0.3 \\end{cases}$$

- RSI ৫৮ বনাম Stochastic ৪৬: $\\rho \\approx 0.85$। **এরা একটি লুকব্যাক প্যারামিটার নিয়ে দ্বিমত করেছে, বাজার নিয়ে নয়।**
- দামের ব্রেকআউট বনাম ০.৫৮× ADV টার্নওভার: $\\rho \\approx 0.1$। **প্রকৃত বিপরীত প্রমাণ, আর এটি ভেটো দেয়।**

**যে সংকেতকে "না" বলার সময় আপনি ফেলে দিতে রাজি, তা কখনোই প্রমাণ ছিল না।** §৪৫.৩-এর পাটিগাণিতিক কারণে ভেটোর স্থান রায় ফাংশনে, কোনো বিয়োগ হিসেবে নয়।

### ৬. আকার নির্ধারণ, আর যে খরচ চক্রটি বন্ধ করে

$$X = P_{\\text{entry}} - k\\,ATR, \\qquad d = P_{\\text{entry}} - X = k\\,ATR$$
$$B = E \\cdot r, \\qquad q_{\\text{raw}} = \\left\\lfloor \\frac{B}{d} \\right\\rfloor, \\qquad q_{\\text{final}} = \\lfloor q_{\\text{raw}} \\cdot m \\rfloor$$
$$R = \\frac{T - P_{\\text{entry}}}{d}, \\qquad R_{\\text{net}} = R - \\frac{c \\cdot q_{\\text{raw}} P_{\\text{entry}}}{B}, \\qquad p^{*} = \\frac{1}{1 + R_{\\text{net}}}$$

**লক্ষ করুন খরচের পদটি পজিশনের নয়, ঝুঁকি-বাজেটের ভগ্নাংশ হিসেবে প্রকাশিত।** এটি ইচ্ছাকৃত: এতে খরচ $R$-এর সঙ্গে তুলনীয় হয়, ফলে আপনি বিয়োগ করতে পারেন। কষে দেখানো ঘটনায় $c = 0.8\\%$ এক R-এর ১২.৮০% খেয়ে ফেলে, ব্রেক-ইভেনকে ২৫.১৬% থেকে ২৬.০০%-এ নেয়।

### ৭. ডিএসই-র সীমাবদ্ধতা, যা সবকিছুর আগে

| সীমাবদ্ধতা | স্কোরে প্রভাব | উৎস |
|---|---|---|
| ADTV ৫০ লক্ষ টাকার নিচে | কঠোর গেট। **যে নাম থেকে বেরোতে পারবেন না তাতে কোনো স্কোর বৈধ নয়।** | অধ্যায় ২, ৪০ |
| জানালায় কোনো লিমিট-লক সেশন | কঠোর গেট। বারের উচ্চ বা নিম্ন প্রশাসনিক, তাই তার ওপর গণনা করা MA, ATR, RSI ও Fibonacci স্তর কৃত্রিম বস্তু। | অধ্যায় ২, ৪১ |
| লুকব্যাকে ফ্লোর-প্রাইসের উপাত্ত | পুরো জানালাটি বাদ দিন। লেনদেনহীন সমতল দর একসঙ্গে প্রতিটি শ্রেণি নষ্ট করে। | অধ্যায় ৬, ২৬ |
| অসমন্বিত রেকর্ড-ডেট গ্যাপ | সাপোর্ট, রেজিস্ট্যান্স ও ডাইভারজেন্স বানিয়ে ফেলে। স্কোর করার আগে সমন্বয় করুন। | অধ্যায় ৩০, ৪৪ |
| নির্ভরযোগ্য শর্ট সাইড নেই | প্রতিটি মন্দা সমন্বয় একটি প্রস্থান বা বিরতি। **১–৫ শ্রেণি মন্দায় ঘুরলে তা আপনাকে বাইরে আকার দেয়, ভেতরে কখনো নয়।** | অধ্যায় ২৬ |
| ১R-এর বিপরীতে রাউন্ড-ট্রিপ খরচ | ২-ATR স্টপে এখানে তা R-এর ১২.৮০%। ১-ATR স্টপে হতো ২৫.৬%। | অধ্যায় ২ |`,
    },

    manual: {
      en: `**Scenario.** TITASCERAM from §45.3. Every number below reconciles cell for cell with the §45.6 scorecard. Inputs: ADTV(20) = BDT 96 lakh; governance severity 9%; 0 limit-locked sessions in the last 20; entry BDT 62.40; ATR(14) BDT 1.95; account equity BDT 12,00,000; risk 1% per trade; target BDT 74.00; round-trip cost 0.8%.

### Part 1 — The gates, which are computed first

**Step 1 — Liquidity gate (B2, B3).**
$$\\text{ADTV} = 96 \\ge 50 \\;\\Rightarrow\\; \\textbf{B3} = 1$$

**Step 2 — Governance gate (B4, B5).** Chapter 24's severity index:
$$9\\% \\le 25\\% \\;\\Rightarrow\\; \\textbf{B5} = 1$$

**Step 3 — Limit-lock gate (B6, B7).**
$$0 = 0 \\;\\Rightarrow\\; \\textbf{B7} = 1$$

**Step 4 — Gates passed (B8).**
$$\\textbf{B8} = 1 + 1 + 1 = 3$$

**Three of three, so the scorecard is permitted to run.** Note what this means procedurally: **if B8 had come back 2, nothing below this line would have been computed at all.** Not computed and then overridden — not computed. That is what "hard gate" means, and it is why B8 sits at the top of the sheet rather than the bottom.

### Part 2 — The six category scores

**Step 5 — Trend / structure (B12 = 2, C12 = 3, D12).** Weekly higher highs and higher lows for five months, 20-week MA rising. Unambiguous.
$$\\textbf{D12} = 2 \\times 3 = 6$$

**Step 6 — Location (B13 = 1, C13 = 3, D13).** Retracement of the 54.00 → 70.00 leg:
$$\\frac{70.00 - 62.40}{70.00 - 54.00} = \\frac{7.60}{16.00} = 0.475$$

The 50% level is at 62.00 and price is at 62.40 — **BDT 0.40 above it, which is 0.21 ATR.** Close, not there.
$$\\textbf{D13} = 1 \\times 3 = 3$$

**Score this a 2 and you have not measured anything; you have rounded toward the trade you already want.**

**Step 7 — Momentum (B14 = 1, C14 = 2, D14). One signal only.** RSI(14) is chosen because Chapter 35 argued RSI suits trending regimes; the reading is 47.6, up from 41.2, and **has not reclaimed 50.**
$$\\textbf{D14} = 1 \\times 2 = 2$$

MACD histogram, Stochastic %K, rate-of-change and Williams %R are all bullish on the same chart and **none of them is entered.** They are Category 3, Category 3 has voted, and by §45.1 a seventh oscillator would have contributed about 0.074 bits.

**Step 8 — Volatility / risk (B15 = 2, C15 = 2, D15).**
$$\\textbf{B30} = \\frac{1.95}{62.40} \\times 100 = 3.125\\%$$
Below the 3.4% twenty-day median, and a 2-ATR stop is affordable at 1% risk.
$$\\textbf{D15} = 2 \\times 2 = 4$$

**Step 9 — Volume / liquidity (B16 = 1, C16 = 3, D16).** Pullback volume at 0.72× average is constructive — supply is not rushing out. But the last up-session traded 1.15× average, **below Chapter 40's 1.5× confirmation bar.**
$$\\textbf{D16} = 1 \\times 3 = 3$$

**Step 10 — Fundamental gate (B17 = 2, C17 = 2, D17).** Chapter 25's composite is 78/100, inside the BUY band.
$$\\textbf{D17} = 2 \\times 2 = 4$$

### Part 3 — The score

**Step 11 — Total weighted (D18).**
$$\\textbf{D18} = 6 + 3 + 2 + 4 + 3 + 4 = 22$$

**Step 12 — Maximum possible (D19).**
$$\\textbf{D19} = 2 \\times (3 + 3 + 2 + 2 + 3 + 2) = 2 \\times 15 = 30$$

**Step 13 — Score percentage (D20).**
$$\\textbf{D20} = \\frac{22}{30} \\times 100 = 73.3333\\% \\approx 73.33\\%$$

**Step 14 — Validity checks (B23, B24, B25).** One signal per category, so no duplicates: $\\textbf{B23} = 0$. No independent category contradicts the others: $\\textbf{B24} = 0$, therefore $\\textbf{B25} = 1$.

### Part 4 — Position sizing

**Step 15 — Stop, from ATR not from a percentage (B31, B32, B33).**
$$\\textbf{B32} = 62.40 - 2 \\times 1.95 = 62.40 - 3.90 = 58.50$$
$$\\textbf{B33} = 62.40 - 58.50 = 3.90$$

**Step 16 — Risk budget (B34, B35, B36).**
$$\\textbf{B36} = 1{,}200{,}000 \\times \\frac{1}{100} = 12{,}000$$

**Step 17 — Raw shares (B37, B38).**
$$\\textbf{B37} = \\frac{12{,}000}{3.90} = 3076.923\\ldots$$
$$\\textbf{B38} = \\lfloor 3076.923 \\rfloor = 3{,}076$$

**Step 18 — Position value and concentration (B39, B40).**
$$\\textbf{B39} = 3{,}076 \\times 62.40 = 191{,}942.40$$
$$\\textbf{B40} = \\frac{191{,}942.40}{1{,}200{,}000} \\times 100 = 15.9952\\%$$

**Stop here and look at that number.** A 1% risk budget has produced a **15.9952% position**. The two are not the same thing and the gap is entirely a function of the stop width: a wide stop buys few shares, a narrow stop buys many, and the concentration follows the stop rather than the conviction. **Chapter 49 will insist on a second cap on concentration for exactly this reason** — 1% risk in sixteen names is 100% of the account.

Also check it against the liquidity: BDT 191,942 against BDT 96 lakh ADTV is **2.00% of a day's turnover**, which is comfortable. At the 38-lakh ADTV of Case C in §45.3 it would be 5.1%, and Chapter 40's rule of thumb starts to bind.

### Part 5 — Reward, cost, and the honest R

**Step 19 — Reward (B43, B44).**
$$\\textbf{B44} = 74.00 - 62.40 = 11.60$$

**Step 20 — Gross reward-to-risk (B45).**
$$\\textbf{B45} = \\frac{11.60}{3.90} = 2.9744$$

**Step 21 — Round-trip cost in taka (B46, B47).**
$$\\textbf{B47} = 191{,}942.40 \\times \\frac{0.8}{100} = 1{,}535.5392$$

**Step 22 — Cost as a fraction of 1R (B48).**
$$\\textbf{B48} = \\frac{1{,}535.5392}{12{,}000} = 0.12796$$

**Costs consume 12.80% of the risk budget before the trade has done anything.** This is the single most under-modelled number in retail trading, and the reason it must be expressed against R rather than against the position is that R is the unit everything else is measured in.

**Step 23 — Net R (B49).**
$$\\textbf{B49} = 2.9744 - 0.1280 = 2.8464$$

Break-even win rate, gross and net:
$$p^{*}_{\\text{gross}} = \\frac{1}{1 + 2.9744} = 0.2516 = 25.16\\%$$
$$p^{*}_{\\text{net}} = \\frac{1}{1 + 2.8464} = 0.2600 = 26.00\\%$$

**Costs added 84 basis points to the accuracy you need**, on a trade with a comfortably wide 2-ATR stop. Halve the stop to 1 ATR and the cost fraction doubles to 25.6% of R — Chapter 2's arithmetic arriving exactly where it always arrives.

### Part 6 — The verdict, and what it is allowed to depend on

**Step 24 — Verdict (B51).** The nesting is:

$$\\text{B23} = 0 \\;\\checkmark \\;\\to\\; \\text{B8} = 3 \\not< 3 \\;\\checkmark \\;\\to\\; \\text{B25} = 1 \\;\\checkmark \\;\\to\\; \\text{D20} = 73.33 \\ge 70$$

$$\\textbf{B51} = \\textbf{TAKE}$$

**Step 25 — Size multiplier (B52).** $73.33 < 85$, so:
$$\\textbf{B52} = 0.5$$

**Step 26 — Final shares and final risk (B53, B54).**
$$\\textbf{B53} = \\lfloor 3{,}076 \\times 0.5 \\rfloor = \\lfloor 1538 \\rfloor = 1{,}538$$
$$\\textbf{B54} = 1{,}538 \\times 3.90 = 5{,}998.20$$

Final position value is $1{,}538 \\times 62.40 = \\text{BDT } 95{,}971.20$, or **8.00% of equity**, risking **0.4998% of equity**. **A good-but-not-excellent setup gets half a percent of the account at risk, and that is the whole translation from "the chart looks nice" into a number.**

### Part 7 — Break the sheet three ways, because that is where the argument lives

**Step 27 — Zero the volume category and watch what does *not* happen.** Set B16 = 0 with every other category at 2:
$$W = 6 + 6 + 4 + 4 + 0 + 4 = 24, \\qquad S = \\frac{24}{30} = 80.00\\%$$

**Eighty percent. Verdict TAKE, half size.** A setup on which *nobody is transacting* is approved by the weighted total. Now zero momentum instead:
$$W = 6 + 6 + 0 + 4 + 6 + 4 = 26, \\qquad S = \\frac{26}{30} = 86.67\\%$$

**Eighty-six point six seven percent — TAKE AT FULL SIZE, with zero momentum evidence.**

**This is the proof, and it is arithmetic rather than opinion.** No weight you could defend is large enough to make a category behave as a veto, because a weight that large would dominate every other decision the sheet makes. **The veto has to live outside the sum.** That is Chapter 30's exhaustion override and Chapter 25's quality floor, restated for the third time in the book: **a constraint a good-looking total can outvote is not a constraint.**

**Step 28 — Fire the conflict veto.** Take the breakout variant: B12=2, B13=2, B14=2, B15=2, B16=1, B17=2.
$$W = 6 + 6 + 4 + 4 + 3 + 4 = 27, \\qquad S = \\frac{27}{30} = 90.00\\%$$

Set B24 = 1 because the breakout session traded 0.58× ADV.
$$\\text{B25} = 0 \\;\\Rightarrow\\; \\textbf{B51} = \\textbf{REJECT — independent signal contradicts}$$
$$\\textbf{B52} = 0, \\qquad \\textbf{B53} = 0, \\qquad \\textbf{B54} = 0$$

**A 90.00% score buys zero shares.** Note the discrimination the sheet makes: had the contradiction been RSI at 58 against Stochastic at 46 — correlation about 0.85 — B24 stays 0 and the trade proceeds. **The veto is reserved for contradictions from an independent information class, because only those carry information.**

**Step 29 — Fail a hard gate.** Set B2 = 38 with the original 73.33% intact.
$$\\text{B3} = 0 \\;\\Rightarrow\\; \\text{B8} = 2 < 3 \\;\\Rightarrow\\; \\textbf{B51} = \\textbf{REJECT — hard gate failed}, \\quad \\textbf{B53} = 0$$

**Step 30 — State what the sheet cannot see, and keep the statement with the sheet.**

It cannot see that the weights are guesses. It cannot see whether the 70% threshold was chosen before or after you looked at last year's winners. It cannot see that a six-filter system firing 6.6 times a year gives you 13 trades in two years, where 9 wins has a 13.34% probability under a coin. And it cannot see tomorrow's price-sensitive announcement, which will overrule all thirty points of it. **The sheet is a device for preventing self-deception, not for producing confidence** — and Chapter 55 exists because that distinction is the difference between a system and a story.`,
      bn: `**পরিস্থিতি।** §৪৫.৩-এর TITASCERAM। নিচের প্রতিটি সংখ্যা §৪৫.৬-এর স্কোরকার্ডের সঙ্গে ঘরে ঘরে মেলে। উপাদান: ADTV(২০) = ৯৬ লক্ষ টাকা; গভর্ন্যান্স তীব্রতা ৯%; শেষ ২০-এ ০টি লিমিট-লক সেশন; প্রবেশ ৬২.৪০ টাকা; ATR(১৪) ১.৯৫ টাকা; হিসাবের মূলধন ১২,০০,০০০ টাকা; প্রতি ট্রেডে ঝুঁকি ১%; লক্ষ্য ৭৪.০০ টাকা; রাউন্ড-ট্রিপ খরচ ০.৮%।

### অংশ ১ — গেট, যা সবার আগে গণনা হয়

**ধাপ ১ — তারল্য গেট (B2, B3)।**
$$\\text{ADTV} = 96 \\ge 50 \\;\\Rightarrow\\; \\textbf{B3} = 1$$

**ধাপ ২ — গভর্ন্যান্স গেট (B4, B5)।** অধ্যায় ২৪-এর তীব্রতা সূচক:
$$9\\% \\le 25\\% \\;\\Rightarrow\\; \\textbf{B5} = 1$$

**ধাপ ৩ — লিমিট-লক গেট (B6, B7)।**
$$0 = 0 \\;\\Rightarrow\\; \\textbf{B7} = 1$$

**ধাপ ৪ — উত্তীর্ণ গেট (B8)।**
$$\\textbf{B8} = 1 + 1 + 1 = 3$$

**তিনে তিন, তাই স্কোরকার্ড চালানোর অনুমতি মিলল।** পদ্ধতিগতভাবে এর অর্থ লক্ষ করুন: **B8 যদি ২ ফিরত, এই রেখার নিচের কিছুই গণনা হতো না।** গণনা করে তারপর অগ্রাহ্য করা নয় — গণনাই হতো না। "কঠোর গেট" বলতে এটিই বোঝায়, আর এ কারণেই B8 শিটের তলায় নয়, মাথায় বসে।

### অংশ ২ — ছয়টি শ্রেণি-স্কোর

**ধাপ ৫ — প্রবণতা / কাঠামো (B12 = ২, C12 = ৩, D12)।** পাঁচ মাস ধরে সাপ্তাহিক উচ্চতর উচ্চ ও উচ্চতর নিম্ন, ২০-সপ্তাহের MA বাড়ছে। দ্ব্যর্থহীন।
$$\\textbf{D12} = 2 \\times 3 = 6$$

**ধাপ ৬ — অবস্থান (B13 = ১, C13 = ৩, D13)।** ৫৪.০০ → ৭০.০০ পায়ের রিট্রেসমেন্ট:
$$\\frac{70.00 - 62.40}{70.00 - 54.00} = \\frac{7.60}{16.00} = 0.475$$

৫০% স্তর ৬২.০০-তে আর দাম ৬২.৪০-এ — **তার ০.৪০ টাকা ওপরে, যা ০.২১ ATR।** কাছে, পৌঁছায়নি।
$$\\textbf{D13} = 1 \\times 3 = 3$$

**এখানে ২ দিলে আপনি কিছুই মাপেননি; আপনি আগে থেকেই চাওয়া ট্রেডটির দিকে গোল করেছেন।**

**ধাপ ৭ — মোমেন্টাম (B14 = ১, C14 = ২, D14)। একটিই সংকেত।** RSI(১৪) বাছা হয়েছে কারণ অধ্যায় ৩৫ যুক্তি দিয়েছে RSI প্রবণতাযুক্ত পরিবেশে মানানসই; পাঠ ৪৭.৬, ৪১.২ থেকে উঠে, আর **৫০ পুনর্দখল করেনি।**
$$\\textbf{D14} = 1 \\times 2 = 2$$

MACD হিস্টোগ্রাম, Stochastic %K, rate-of-change ও Williams %R সবই একই চার্টে তেজি আর **এদের একটিও বসানো হয়নি।** এরা তৃতীয় শ্রেণি, তৃতীয় শ্রেণি ভোট দিয়ে ফেলেছে, আর §৪৫.১ অনুযায়ী সপ্তম একটি অসিলেটর যোগ করত প্রায় ০.০৭৪ বিট।

**ধাপ ৮ — অস্থিরতা / ঝুঁকি (B15 = ২, C15 = ২, D15)।**
$$\\textbf{B30} = \\frac{1.95}{62.40} \\times 100 = 3.125\\%$$
৩.৪% কুড়ি-দিনের মধ্যকের নিচে, আর ১% ঝুঁকিতে ২-ATR স্টপ সামর্থ্যের মধ্যে।
$$\\textbf{D15} = 2 \\times 2 = 4$$

**ধাপ ৯ — ভলিউম / তারল্য (B16 = ১, C16 = ৩, D16)।** পুলব্যাকে গড়ের ০.৭২× ভলিউম গঠনমূলক — সরবরাহ হুড়মুড় করে বেরোচ্ছে না। কিন্তু শেষ ঊর্ধ্ব-সেশন গড়ের ১.১৫× লেনদেন করেছে, **অধ্যায় ৪০-এর ১.৫× নিশ্চিতকরণ সীমার নিচে।**
$$\\textbf{D16} = 1 \\times 3 = 3$$

**ধাপ ১০ — ফান্ডামেন্টাল গেট (B17 = ২, C17 = ২, D17)।** অধ্যায় ২৫-এর কম্পোজিট ১০০-তে ৭৮, BUY ব্যান্ডের ভেতরে।
$$\\textbf{D17} = 2 \\times 2 = 4$$

### অংশ ৩ — স্কোর

**ধাপ ১১ — মোট ভারিত (D18)।**
$$\\textbf{D18} = 6 + 3 + 2 + 4 + 3 + 4 = 22$$

**ধাপ ১২ — সর্বোচ্চ সম্ভব (D19)।**
$$\\textbf{D19} = 2 \\times (3 + 3 + 2 + 2 + 3 + 2) = 2 \\times 15 = 30$$

**ধাপ ১৩ — স্কোর শতাংশ (D20)।**
$$\\textbf{D20} = \\frac{22}{30} \\times 100 = 73.3333\\% \\approx 73.33\\%$$

**ধাপ ১৪ — বৈধতা যাচাই (B23, B24, B25)।** প্রতি শ্রেণিতে একটি সংকেত, তাই কোনো অনুলিপি নেই: $\\textbf{B23} = 0$। কোনো স্বাধীন শ্রেণি অন্যদের বিরোধিতা করছে না: $\\textbf{B24} = 0$, অতএব $\\textbf{B25} = 1$।

### অংশ ৪ — পজিশনের আকার

**ধাপ ১৫ — স্টপ, শতাংশ নয় ATR থেকে (B31, B32, B33)।**
$$\\textbf{B32} = 62.40 - 2 \\times 1.95 = 62.40 - 3.90 = 58.50$$
$$\\textbf{B33} = 62.40 - 58.50 = 3.90$$

**ধাপ ১৬ — ঝুঁকি-বাজেট (B34, B35, B36)।**
$$\\textbf{B36} = 1{,}200{,}000 \\times \\frac{1}{100} = 12{,}000$$

**ধাপ ১৭ — কাঁচা শেয়ার (B37, B38)।**
$$\\textbf{B37} = \\frac{12{,}000}{3.90} = 3076.923\\ldots$$
$$\\textbf{B38} = \\lfloor 3076.923 \\rfloor = 3{,}076$$

**ধাপ ১৮ — পজিশন মূল্য ও ঘনত্ব (B39, B40)।**
$$\\textbf{B39} = 3{,}076 \\times 62.40 = 191{,}942.40$$
$$\\textbf{B40} = \\frac{191{,}942.40}{1{,}200{,}000} \\times 100 = 15.9952\\%$$

**এখানে থামুন আর সংখ্যাটির দিকে তাকান।** ১% ঝুঁকি-বাজেট তৈরি করেছে একটি **১৫.৯৯৫২% পজিশন**। দুটি এক জিনিস নয়, আর ব্যবধানটি পুরোপুরি স্টপের প্রস্থের অপেক্ষক: চওড়া স্টপ কম শেয়ার কেনে, সরু স্টপ বেশি, আর ঘনত্ব প্রত্যয় নয়, স্টপকে অনুসরণ করে। **ঠিক এ কারণেই অধ্যায় ৪৯ ঘনত্বের ওপর দ্বিতীয় একটি সীমা দাবি করবে** — ষোলোটি নামে ১% ঝুঁকি মানে হিসাবের ১০০%।

তারল্যের বিপরীতেও যাচাই করুন: ৯৬ লক্ষ টাকা ADTV-র বিপরীতে ১,৯১,৯৪২ টাকা হলো **এক দিনের টার্নওভারের ২.০০%**, যা স্বস্তিদায়ক। §৪৫.৩-এর ঘটনা গ-এর ৩৮ লক্ষ ADTV-তে তা হতো ৫.১%, আর অধ্যায় ৪০-এর নিয়ম কামড়াতে শুরু করে।

### অংশ ৫ — পুরস্কার, খরচ ও সৎ R

**ধাপ ১৯ — পুরস্কার (B43, B44)।**
$$\\textbf{B44} = 74.00 - 62.40 = 11.60$$

**ধাপ ২০ — মোট পুরস্কার-ঝুঁকি (B45)।**
$$\\textbf{B45} = \\frac{11.60}{3.90} = 2.9744$$

**ধাপ ২১ — টাকায় রাউন্ড-ট্রিপ খরচ (B46, B47)।**
$$\\textbf{B47} = 191{,}942.40 \\times \\frac{0.8}{100} = 1{,}535.5392$$

**ধাপ ২২ — ১R-এর ভগ্নাংশ হিসেবে খরচ (B48)।**
$$\\textbf{B48} = \\frac{1{,}535.5392}{12{,}000} = 0.12796$$

**ট্রেডটি কিছু করার আগেই খরচ ঝুঁকি-বাজেটের ১২.৮০% খেয়ে ফেলে।** খুচরা ট্রেডিংয়ে এটিই সবচেয়ে কম হিসাবে ধরা সংখ্যা, আর একে পজিশনের নয় R-এর বিপরীতে প্রকাশ করতে হয় কারণ R-ই সেই একক যাতে বাকি সবকিছু মাপা হয়।

**ধাপ ২৩ — নিট R (B49)।**
$$\\textbf{B49} = 2.9744 - 0.1280 = 2.8464$$

ব্রেক-ইভেন উইন রেট, মোট ও নিট:
$$p^{*}_{\\text{gross}} = \\frac{1}{1 + 2.9744} = 0.2516 = 25.16\\%$$
$$p^{*}_{\\text{net}} = \\frac{1}{1 + 2.8464} = 0.2600 = 26.00\\%$$

**খরচ প্রয়োজনীয় নির্ভুলতায় ৮৪ বেসিস পয়েন্ট যোগ করেছে**, আরামদায়কভাবে চওড়া একটি ২-ATR স্টপের ট্রেডে। স্টপ অর্ধেক করে ১ ATR করুন আর খরচের ভগ্নাংশ দ্বিগুণ হয়ে R-এর ২৫.৬% — অধ্যায় ২-এর পাটিগণিত, যেখানে সবসময় পৌঁছায় ঠিক সেখানেই।

### অংশ ৬ — রায়, আর তা যার ওপর নির্ভর করার অনুমতি পায়

**ধাপ ২৪ — রায় (B51)।** নেস্টিং:

$$\\text{B23} = 0 \\;\\checkmark \\;\\to\\; \\text{B8} = 3 \\not< 3 \\;\\checkmark \\;\\to\\; \\text{B25} = 1 \\;\\checkmark \\;\\to\\; \\text{D20} = 73.33 \\ge 70$$

$$\\textbf{B51} = \\textbf{TAKE}$$

**ধাপ ২৫ — আকার গুণক (B52)।** $73.33 < 85$, তাই:
$$\\textbf{B52} = 0.5$$

**ধাপ ২৬ — চূড়ান্ত শেয়ার ও চূড়ান্ত ঝুঁকি (B53, B54)।**
$$\\textbf{B53} = \\lfloor 3{,}076 \\times 0.5 \\rfloor = \\lfloor 1538 \\rfloor = 1{,}538$$
$$\\textbf{B54} = 1{,}538 \\times 3.90 = 5{,}998.20$$

চূড়ান্ত পজিশন মূল্য $1{,}538 \\times 62.40 = ৯৫{,}৯৭১.২০$ টাকা, অর্থাৎ মূলধনের **৮.০০%**, ঝুঁকিতে মূলধনের **০.৪৯৯৮%**। **ভালো-কিন্তু-অসাধারণ-নয় একটি সেটআপ হিসাবের অর্ধ শতাংশ ঝুঁকিতে ফেলে, আর "চার্টটি সুন্দর দেখাচ্ছে" থেকে একটি সংখ্যায় অনুবাদ বলতে এটুকুই।**

### অংশ ৭ — শিটটিকে তিনভাবে ভাঙুন, কারণ যুক্তিটি সেখানেই থাকে

**ধাপ ২৭ — ভলিউম শ্রেণিকে শূন্য করুন আর দেখুন কী *ঘটে না*।** বাকি প্রতিটি শ্রেণি ২ রেখে B16 = ০ করুন:
$$W = 6 + 6 + 4 + 4 + 0 + 4 = 24, \\qquad S = \\frac{24}{30} = 80.00\\%$$

**আশি শতাংশ। রায় TAKE, অর্ধ আকার।** যে সেটআপে *কেউ লেনদেন করছে না* তা ভারিত মোট যোগফলে অনুমোদিত। এবার বদলে মোমেন্টাম শূন্য করুন:
$$W = 6 + 6 + 0 + 4 + 6 + 4 = 26, \\qquad S = \\frac{26}{30} = 86.67\\%$$

**ছিয়াশি দশমিক ছয় সাত শতাংশ — শূন্য মোমেন্টাম প্রমাণসহ পূর্ণ আকারে TAKE।**

**এটিই প্রমাণ, আর এটি মতামত নয়, পাটিগণিত।** আপনার সমর্থনযোগ্য কোনো ওজনই এত বড় নয় যে একটি শ্রেণি ভেটোর মতো আচরণ করতে পারে, কারণ অত বড় ওজন শিটের প্রতিটি সিদ্ধান্তকেই কুক্ষিগত করত। **ভেটোকে যোগফলের বাইরে থাকতে হবে।** এটি অধ্যায় ৩০-এর এক্সহসশন অগ্রাহ্যকরণ ও অধ্যায় ২৫-এর গুণমান-মেঝে, বইয়ে তৃতীয়বার পুনরুক্ত: **যে সীমাবদ্ধতাকে একটি সুন্দর-দেখতে মোট ভোটে হারাতে পারে তা সীমাবদ্ধতা নয়।**

**ধাপ ২৮ — কনফ্লিক্ট ভেটো চালান।** ব্রেকআউট সংস্করণটি নিন: B12=২, B13=২, B14=২, B15=২, B16=১, B17=২।
$$W = 6 + 6 + 4 + 4 + 3 + 4 = 27, \\qquad S = \\frac{27}{30} = 90.00\\%$$

ব্রেকআউট সেশনটি ০.৫৮× ADV লেনদেন করেছে বলে B24 = ১ বসান।
$$\\text{B25} = 0 \\;\\Rightarrow\\; \\textbf{B51} = \\textbf{REJECT — independent signal contradicts}$$
$$\\textbf{B52} = 0, \\qquad \\textbf{B53} = 0, \\qquad \\textbf{B54} = 0$$

**৯০.০০% স্কোর শূন্য শেয়ার কেনে।** শিটটি যে পার্থক্য করে তা লক্ষ করুন: বিরোধিতাটি যদি হতো RSI ৫৮ বনাম Stochastic ৪৬ — সহসম্পর্ক প্রায় ০.৮৫ — তবে B24 ০-ই থাকত আর ট্রেডটি এগোত। **ভেটো সংরক্ষিত একটি স্বাধীন তথ্য-শ্রেণি থেকে আসা বিরোধিতার জন্য, কারণ কেবল সেগুলোই তথ্য বহন করে।**

**ধাপ ২৯ — একটি কঠোর গেট ব্যর্থ করুন।** মূল ৭৩.৩৩% অক্ষত রেখে B2 = ৩৮ বসান।
$$\\text{B3} = 0 \\;\\Rightarrow\\; \\text{B8} = 2 < 3 \\;\\Rightarrow\\; \\textbf{B51} = \\textbf{REJECT — hard gate failed}, \\quad \\textbf{B53} = 0$$

**ধাপ ৩০ — শিটটি যা দেখতে পায় না তা বলুন, আর বিবৃতিটি শিটের সঙ্গে রাখুন।**

এটি দেখতে পায় না যে ওজনগুলো অনুমান। এটি দেখতে পায় না ৭০% সীমাটি গত বছরের বিজয়ীদের দেখার আগে না পরে বাছা হয়েছিল। এটি দেখতে পায় না যে বছরে ৬.৬ বার চালু হওয়া ছয়-ফিল্টারের ব্যবস্থা দুই বছরে ১৩টি ট্রেড দেয়, যেখানে ৯টি জয়ের সম্ভাবনা একটি মুদ্রার অধীনে ১৩.৩৪%। আর এটি দেখতে পায় না আগামীকালের মূল্য-সংবেদনশীল ঘোষণা, যা এর ত্রিশটি পয়েন্টকেই অগ্রাহ্য করবে। **শিটটি আত্মপ্রবঞ্চনা ঠেকানোর যন্ত্র, আত্মবিশ্বাস উৎপাদনের নয়** — আর অধ্যায় ৫৫-এর অস্তিত্ব এ কারণেই যে ঐ পার্থক্যটিই একটি ব্যবস্থা ও একটি গল্পের মধ্যেকার পার্থক্য।`,
    },

    mistakes: {
      en: `1. **Counting correlated indicators as independent votes.** Six oscillators at $\\rho = 0.85$ give $n_{\\text{eff}} = 6/5.25 = 1.14$, not 6. The trader believes his sampling advantage is $\\sqrt{6} = 2.45$ when it is $\\sqrt{1.14} = 1.07$. **This is not a small overstatement; it is more than double.**
2. **Letting a high total outvote a hard gate.** Zero the volume category and the score is still $24/30 = 80.00\\%$ — TAKE. Zero momentum and it is $26/30 = 86.67\\%$ — **TAKE AT FULL SIZE with no momentum evidence at all.** No defensible weight is large enough to make a category act as a veto, which is exactly why gates sit outside the sum.
3. **Scoring MACD in Category 3 and then scoring a 12/26 MA crossover in Category 1.** The MACD line *is* the 12/26 EMA spread. That is not two categories agreeing; it is one number entered twice, and it inflates D18 from 22 to something meaningless.
4. **Rounding a marginal criterion upward.** TITASCERAM at 62.40 is a 47.5% retracement, BDT 0.40 above the 50% level at 62.00. Writing 2 instead of 1 in B13 moves D18 from 22 to 25 and D20 from 73.33% to 83.33% — **still not 85, but one more such rounding elsewhere and a half-size trade becomes a full-size trade on nothing.**
5. **Treating every disagreement as a veto.** RSI at 58 against Stochastic at 46 is a $\\rho \\approx 0.85$ argument about a lookback parameter. Setting B24 = 1 there kills good setups for no informational reason. **The veto is for independent classes only** — a breakout on 0.58× turnover, not two oscillators quarrelling.
6. **Believing a hit rate built on 13 trades.** A six-filter system firing 6.6 times a year gives 13 trades in two years; 9 wins is a 69% rate whose standard error is 12.83 pp, and **a fair coin produces that record or better 13.34% of the time.** Every filter you added raised the in-sample rate and cut the sample that could test it.
7. **Adding a filter that costs you no trades and calling it confirmation.** If the trade count did not fall, the filter never disagreed, which means it added roughly $-\\log_2 0.95 = 0.074$ bits. **The trades a filter removes are the measure of the information it adds.**
8. **Confusing the 1% risk budget with a 1% position.** B36 is 12,000 but B39 is 191,942.40 — **15.9952% of equity.** The concentration follows the stop width, not your conviction, and 1% risk in sixteen names is the entire account.
9. **Ignoring the round-trip cost against R.** BDT 1,535.54 on a BDT 12,000 budget is 12.80% of one R, moving break-even from 25.16% to 26.00%. **Halve the stop to 1 ATR and it doubles to 25.6%** — the trades that feel tightest are the ones costs eat.
10. **Scoring a chart that contains a limit-locked or floor-price session.** The bar's high or low is administrative. Every category is then computed on an artefact — MA, ATR, RSI and the Fibonacci legs alike — and B7 exists precisely so the sheet refuses to run.
11. **Reading a bearish confluence as a short.** On the DSE there is no reliable retail short side. **Categories 1 through 5 turning bearish sizes you out, never in**, and importing the textbook conclusion here is importing a market that does not exist.`,
      bn: `১. **সহসম্পর্কিত নির্দেশককে স্বাধীন ভোট হিসেবে গোনা।** $\\rho = 0.85$-এ ছয়টি অসিলেটর দেয় $n_{\\text{eff}} = 6/5.25 = 1.14$, ৬ নয়। ট্রেডার ভাবেন তাঁর নমুনা-সুবিধা $\\sqrt{6} = 2.45$, যেখানে তা $\\sqrt{1.14} = 1.07$। **এটি সামান্য অতিরঞ্জন নয়; এটি দ্বিগুণেরও বেশি।**
২. **উঁচু মোট যোগফলকে একটি কঠোর গেটের ওপর ভোট দিতে দেওয়া।** ভলিউম শ্রেণি শূন্য করলেও স্কোর $24/30 = 80.00\\%$ — TAKE। মোমেন্টাম শূন্য করলে $26/30 = 86.67\\%$ — **কোনো মোমেন্টাম প্রমাণ ছাড়াই পূর্ণ আকারে TAKE।** সমর্থনযোগ্য কোনো ওজনই এত বড় নয় যে একটি শ্রেণি ভেটোর মতো কাজ করবে, আর ঠিক এ কারণেই গেটগুলো যোগফলের বাইরে বসে।
৩. **MACD-কে তৃতীয় শ্রেণিতে স্কোর করে তারপর ১২/২৬ MA ক্রসওভারকে প্রথম শ্রেণিতে স্কোর করা।** MACD লাইনটিই ১২/২৬ EMA-র ব্যবধান। এটি দুটি শ্রেণির একমত হওয়া নয়; এটি একটি সংখ্যা দুবার বসানো, আর তা D18-কে ২২ থেকে অর্থহীন কিছুতে ফুলিয়ে দেয়।
৪. **প্রান্তিক মানদণ্ড ওপরের দিকে গোল করা।** ৬২.৪০-এ TITASCERAM একটি ৪৭.৫% রিট্রেসমেন্ট, ৬২.০০-এর ৫০% স্তরের ০.৪০ টাকা ওপরে। B13-তে ১-এর বদলে ২ লিখলে D18 ২২ থেকে ২৫ আর D20 ৭৩.৩৩% থেকে ৮৩.৩৩% হয় — **এখনো ৮৫ নয়, কিন্তু অন্য কোথাও আরেকটি এমন গোল করলেই অর্ধ-আকারের ট্রেড কিছুই না বদলে পূর্ণ-আকারের হয়ে যায়।**
৫. **প্রতিটি দ্বিমতকে ভেটো গণ্য করা।** RSI ৫৮ বনাম Stochastic ৪৬ হলো একটি লুকব্যাক প্যারামিটার নিয়ে $\\rho \\approx 0.85$ তর্ক। সেখানে B24 = ১ বসালে কোনো তথ্যগত কারণ ছাড়াই ভালো সেটআপ মারা যায়। **ভেটো কেবল স্বাধীন শ্রেণির জন্য** — ০.৫৮× টার্নওভারে একটি ব্রেকআউট, দুটি অসিলেটরের ঝগড়া নয়।
৬. **১৩টি ট্রেডের ওপর গড়া হিট রেট বিশ্বাস করা।** বছরে ৬.৬ বার চালু হওয়া ছয়-ফিল্টারের ব্যবস্থা দুই বছরে ১৩টি ট্রেড দেয়; ৯টি জয় মানে ৬৯% হার, যার আদর্শ ত্রুটি ১২.৮৩ পয়েন্ট, আর **একটি নিরপেক্ষ মুদ্রা ঐ রেকর্ড বা তার চেয়ে ভালো দেয় ১৩.৩৪% সময়।** আপনার যোগ করা প্রতিটি ফিল্টার নমুনার ভেতরের হার বাড়িয়েছে আর যে নমুনা তা পরীক্ষা করতে পারত তাকে কেটেছে।
৭. **এমন ফিল্টার যোগ করা যা আপনার কোনো ট্রেড কাড়ে না, আর তাকে নিশ্চিতকরণ বলা।** ট্রেডসংখ্যা না কমলে ফিল্টারটি কখনো দ্বিমত করেনি, অর্থাৎ তা যোগ করেছে প্রায় $-\\log_2 0.95 = 0.074$ বিট। **একটি ফিল্টার যে ট্রেডগুলো বাদ দেয় সেগুলোই তার যোগ করা তথ্যের মাপ।**
৮. **১% ঝুঁকি-বাজেটকে ১% পজিশনের সঙ্গে গুলিয়ে ফেলা।** B36 ১২,০০০ কিন্তু B39 ১,৯১,৯৪২.৪০ — **মূলধনের ১৫.৯৯৫২%।** ঘনত্ব আপনার প্রত্যয় নয়, স্টপের প্রস্থ অনুসরণ করে, আর ষোলোটি নামে ১% ঝুঁকি মানে গোটা হিসাবটাই।
৯. **R-এর বিপরীতে রাউন্ড-ট্রিপ খরচ উপেক্ষা করা।** ১২,০০০ টাকার বাজেটে ১,৫৩৫.৫৪ টাকা হলো এক R-এর ১২.৮০%, যা ব্রেক-ইভেনকে ২৫.১৬% থেকে ২৬.০০%-এ নেয়। **স্টপ অর্ধেক করে ১ ATR করলে তা দ্বিগুণ হয়ে ২৫.৬%** — যে ট্রেডগুলো সবচেয়ে আঁটসাঁট মনে হয় খরচ সেগুলোই খায়।
১০. **এমন চার্ট স্কোর করা যাতে লিমিট-লক বা ফ্লোর-প্রাইসের সেশন আছে।** বারের উচ্চ বা নিম্ন প্রশাসনিক। তখন প্রতিটি শ্রেণিই একটি কৃত্রিম বস্তুর ওপর গণনা হয় — MA, ATR, RSI ও Fibonacci পা সবই — আর B7-এর অস্তিত্ব ঠিক এ কারণেই যে শিটটি যেন চলতে অস্বীকার করে।
১১. **মন্দা সমন্বয়কে শর্ট হিসেবে পড়া।** ডিএসই-তে নির্ভরযোগ্য খুচরা শর্ট সাইড নেই। **১ থেকে ৫ শ্রেণি মন্দায় ঘুরলে তা আপনাকে বাইরে আকার দেয়, ভেতরে কখনো নয়**, আর এখানে পাঠ্যবইয়ের উপসংহার আমদানি করা মানে এমন একটি বাজার আমদানি করা যার অস্তিত্ব নেই।`,
    },

    tips: {
      en: `1. **Classify before you count.** Write the six categories down the left of a page, then assign each tool you use to exactly one row. Any tool you cannot place is a tool you do not understand well enough to trade.
2. **Choose your Category 3 representative once, in advance, and never during a session.** Chapter 35 argues RSI for trending regimes and Chapter 37 argues Stochastic for ranges. That is a decision about regime, not a licence to run both.
3. **Write the 0/1/2 criterion for every category before the market opens.** "Price at a Fibonacci level" is not a criterion. "Within 0.25 ATR of the 50% or 61.8% level" is. TITASCERAM at 0.21 ATR scores 1, and you can only know that if the rule pre-exists the chart.
4. **Score the volume category last and read it hardest.** It is the only line on the sheet that is not a function of the closing price, which makes it the only line capable of telling you something the other five cannot.
5. **Audit your filters by trade count, not by hit rate.** Add a condition, count the trades it removes. If the count did not move, remove the condition — you have added correlation, not information.
6. **Refuse to believe any hit rate below 30 completed trades.** Below that the standard error is wider than any edge you plausibly have; on 13 trades a 69% record has a 13.34% chance of being a coin.
7. **Fix your threshold before you look at outcomes, and write the date you fixed it.** A 70% cut-off chosen in advance beats an optimised 63% chosen after, and the date stamp is the only thing that later distinguishes the two.
8. **Run the gates first, physically first, on the top of the sheet.** If a gate fails, do not compute the score at all. Computing it and then discarding it trains you to remember the number.
9. **Express costs against R, never against the position.** BDT 1,535.54 sounds trivial. **12.80% of your risk budget** does not, and the second framing is the true one.
10. **Cap concentration separately from risk.** A 1% risk budget produced a 15.9952% position here. Chapter 49 will give you the second constraint; until then, use your own and write it down.
11. **Re-run the sheet at the close, not intraday.** Intraday readings on a thin DSE name are provisional, and Chapter 40's argument about five-minute bars applies to indicator values computed from them.
12. **Keep a one-paragraph note of what the sheet cannot see, stapled to the sheet.** The weights are guesses, the threshold is a choice, and tomorrow's disclosure overrules all thirty points.`,
      bn: `১. **গোনার আগে শ্রেণিবদ্ধ করুন।** একটি পাতার বাঁ দিকে ছয়টি শ্রেণি লিখুন, তারপর আপনার ব্যবহৃত প্রতিটি হাতিয়ারকে ঠিক একটি সারিতে বসান। যে হাতিয়ার আপনি বসাতে পারছেন না, সেটি আপনি ট্রেড করার মতো বোঝেন না।
২. **আপনার তৃতীয় শ্রেণির প্রতিনিধি একবারই, আগেভাগে বাছুন, কখনো সেশনের মাঝে নয়।** অধ্যায় ৩৫ প্রবণতাযুক্ত পরিবেশে RSI-র পক্ষে আর অধ্যায় ৩৭ পরিসরে Stochastic-এর পক্ষে যুক্তি দেয়। এটি পরিবেশ নিয়ে একটি সিদ্ধান্ত, দুটোই চালানোর অনুমতি নয়।
৩. **বাজার খোলার আগে প্রতিটি শ্রেণির ০/১/২ মানদণ্ড লিখুন।** "দাম একটি Fibonacci স্তরে" কোনো মানদণ্ড নয়। "৫০% বা ৬১.৮% স্তরের ০.২৫ ATR-এর মধ্যে" মানদণ্ড। ০.২১ ATR-এ TITASCERAM ১ পায়, আর নিয়মটি চার্টের আগে থাকলেই কেবল আপনি তা জানতে পারেন।
৪. **ভলিউম শ্রেণিটি সবার শেষে স্কোর করুন আর সবচেয়ে কঠোরভাবে পড়ুন।** শিটের একমাত্র এই লাইনটিই ক্লোজিং দামের অপেক্ষক নয়, আর তাই একমাত্র এটিই এমন কিছু বলতে পারে যা বাকি পাঁচটি পারে না।
৫. **আপনার ফিল্টারগুলোর নিরীক্ষা করুন ট্রেডসংখ্যা দিয়ে, হিট রেট দিয়ে নয়।** একটি শর্ত যোগ করুন, গুনুন তা কতগুলো ট্রেড সরায়। সংখ্যা না নড়লে শর্তটি সরিয়ে দিন — আপনি তথ্য নয়, সহসম্পর্ক যোগ করেছেন।
৬. **৩০টি সম্পন্ন ট্রেডের নিচে কোনো হিট রেট বিশ্বাস করতে অস্বীকার করুন।** তার নিচে আদর্শ ত্রুটি আপনার সম্ভাব্য যেকোনো সুবিধার চেয়ে চওড়া; ১৩টি ট্রেডে ৬৯% রেকর্ডের মুদ্রা হওয়ার সম্ভাবনা ১৩.৩৪%।
৭. **ফলাফল দেখার আগে আপনার সীমা স্থির করুন, আর যেদিন স্থির করলেন সেই তারিখ লিখে রাখুন।** আগে বাছা ৭০% কাট-অফ পরে অপ্টিমাইজ করা ৬৩%-কে হারায়, আর তারিখের ছাপটিই পরে দুটির পার্থক্য বলার একমাত্র উপায়।
৮. **গেটগুলো আগে চালান, আক্ষরিক অর্থেই শিটের মাথায়।** কোনো গেট ব্যর্থ হলে স্কোর গণনাই করবেন না। গণনা করে তারপর ফেলে দেওয়া আপনাকে সংখ্যাটি মনে রাখতে শেখায়।
৯. **খরচ R-এর বিপরীতে প্রকাশ করুন, কখনো পজিশনের বিপরীতে নয়।** ১,৫৩৫.৫৪ টাকা তুচ্ছ শোনায়। **আপনার ঝুঁকি-বাজেটের ১২.৮০%** শোনায় না, আর দ্বিতীয় ভাষ্যটিই সত্য।
১০. **ঘনত্বের সীমা ঝুঁকির সীমা থেকে আলাদাভাবে বসান।** এখানে ১% ঝুঁকি-বাজেট তৈরি করেছে ১৫.৯৯৫২% পজিশন। অধ্যায় ৪৯ আপনাকে দ্বিতীয় সীমাবদ্ধতাটি দেবে; ততক্ষণ নিজেরটি ব্যবহার করুন ও লিখে রাখুন।
১১. **শিটটি ক্লোজে পুনরায় চালান, ইন্ট্রাডে নয়।** পাতলা ডিএসই নামে ইন্ট্রাডে পাঠ অস্থায়ী, আর পাঁচ মিনিটের বার নিয়ে অধ্যায় ৪০-এর যুক্তি তাদের থেকে গণনা করা নির্দেশকের মানেও খাটে।
১২. **শিটটি কী দেখতে পায় না তার এক-অনুচ্ছেদের একটি নোট শিটের সঙ্গে গেঁথে রাখুন।** ওজনগুলো অনুমান, সীমাটি একটি পছন্দ, আর আগামীকালের প্রকাশনা ত্রিশটি পয়েন্টকেই অগ্রাহ্য করে।`,
    },

    exercises: {
      en: `1. Build the §45.6 sheet from the cell list. Confirm B8 = 3, D18 = 22, D19 = 30, D20 = 73.33, B51 = TAKE, B52 = 0.5, B53 = 1,538 and B54 = 5,998.20.
2. Set B16 = 0, leaving every other category at 2. Report D20. Does the verdict still read TAKE? Write one sentence explaining why this single result is the argument for hard gates.
3. Set B14 = 0 with every other category at 2 and report D20 and B52. A setup with zero momentum evidence gets what size?
4. Set B24 = 1 on the 90.00% breakout variant of §45.3. Report B51, B52, B53 and B54. How many taka of a 90% score survive?
5. Change B2 from 96 to 38. Report B8 and B51. Then compute the full-size position B39 as a percentage of one day's turnover at 38 lakh, and say whether Chapter 40 would allow it.
6. Take your last ten trades. Assign every indicator you consulted to one of the six categories. How many categories were genuinely represented, and what was $n_{\\text{eff}}$ at $\\rho = 0.85$ within any over-represented category?
7. Add a seventh filter to a system you already run and count how many of last year's trades it removes. If the answer is zero or one, compute $-\\log_2 p$ for its conditional pass rate and state what you actually gained.
8. Change B31 from 2 to 1 so the stop is one ATR. Recompute B33, B37, B38, B39, B47, B48 and B49. By how many percentage points does the break-even win rate move, and why?
9. Write the 0/1/2 criterion for each of the six categories in one sentence each, without looking at a chart. Date the page. Do not change it for one month.
10. Rescore B13 as 2 instead of 1 on the retracement. Report the new D18 and D20. How many such "small" upward roundings are needed to turn the half-size verdict into a full-size one?
11. A system fires 13 times in two years and wins 9. Compute the binomial probability of that record or better under a fair coin, and the standard error of the hit rate. Write down the minimum trade count you will require before believing your own results, and keep it with the sheet.`,
      bn: `১. ঘরের তালিকা থেকে §৪৫.৬-এর শিট তৈরি করুন। নিশ্চিত করুন B8 = ৩, D18 = ২২, D19 = ৩০, D20 = ৭৩.৩৩, B51 = TAKE, B52 = ০.৫, B53 = ১,৫৩৮ ও B54 = ৫,৯৯৮.২০।
২. বাকি প্রতিটি শ্রেণি ২ রেখে B16 = ০ বসান। D20 জানান। রায় কি এখনো TAKE পড়ে? এক বাক্যে লিখুন কেন এই একটি ফলাফলই কঠোর গেটের পক্ষে যুক্তি।
৩. বাকি প্রতিটি শ্রেণি ২ রেখে B14 = ০ বসান আর D20 ও B52 জানান। শূন্য মোমেন্টাম প্রমাণসহ একটি সেটআপ কত আকার পায়?
৪. §৪৫.৩-এর ৯০.০০% ব্রেকআউট সংস্করণে B24 = ১ বসান। B51, B52, B53 ও B54 জানান। ৯০% স্কোরের কত টাকা টিকে থাকে?
৫. B2 ৯৬ থেকে ৩৮ করুন। B8 ও B51 জানান। তারপর ৩৮ লক্ষে এক দিনের টার্নওভারের শতাংশ হিসেবে পূর্ণ-আকার পজিশন B39 গণনা করুন, আর বলুন অধ্যায় ৪০ তা অনুমোদন করত কি না।
৬. আপনার শেষ দশটি ট্রেড নিন। আপনি যে নির্দেশকগুলো দেখেছেন তাদের প্রত্যেককে ছয়টি শ্রেণির একটিতে বসান। কতগুলো শ্রেণি সত্যিই প্রতিনিধিত্ব পেয়েছে, আর অতিরিক্ত-প্রতিনিধিত্বপ্রাপ্ত কোনো শ্রেণির ভেতরে $\\rho = 0.85$-এ $n_{\\text{eff}}$ কত ছিল?
৭. আপনি ইতিমধ্যে চালান এমন একটি ব্যবস্থায় সপ্তম একটি ফিল্টার যোগ করুন আর গুনুন তা গত বছরের কতগুলো ট্রেড সরায়। উত্তর শূন্য বা এক হলে তার শর্তসাপেক্ষ পাস হারের জন্য $-\\log_2 p$ গণনা করুন আর বলুন আপনি আসলে কী পেলেন।
৮. B31 ২ থেকে ১ করুন যাতে স্টপ এক ATR হয়। B33, B37, B38, B39, B47, B48 ও B49 পুনর্গণনা করুন। ব্রেক-ইভেন উইন রেট কত শতাংশ-পয়েন্ট নড়ে, আর কেন?
৯. কোনো চার্ট না দেখে ছয়টি শ্রেণির প্রতিটির ০/১/২ মানদণ্ড এক বাক্যে লিখুন। পাতাটিতে তারিখ দিন। এক মাস তা বদলাবেন না।
১০. রিট্রেসমেন্টে B13-কে ১-এর বদলে ২ স্কোর করুন। নতুন D18 ও D20 জানান। অর্ধ-আকারের রায়কে পূর্ণ-আকারে বদলাতে এমন কতগুলো "ছোট" ঊর্ধ্বমুখী গোল করা লাগে?
১১. একটি ব্যবস্থা দুই বছরে ১৩ বার চালু হয়ে ৯ বার জেতে। একটি নিরপেক্ষ মুদ্রার অধীনে ঐ রেকর্ড বা তার চেয়ে ভালোর দ্বিপদ সম্ভাবনা ও হিট রেটের আদর্শ ত্রুটি গণনা করুন। নিজের ফলাফল বিশ্বাস করার আগে আপনি যে ন্যূনতম ট্রেডসংখ্যা দাবি করবেন তা লিখুন, আর শিটের সঙ্গে রাখুন।`,
    },

    summary: {
      en: `- **Six indicators built from the closing price are one observation reported six times.** At $\\rho = 0.85$, $n_{\\text{eff}} = 6/5.25 = 1.14$; across independent categories at $\\rho = 0.20$ it is 3.00. **The trader with the oscillator stack believes his advantage is $\\sqrt{6} = 2.45$ when it is 1.07.**
- **Confluence is only meaningful across different information classes** — structure (Ch 31, 34, 42), location (Ch 30, 31, 41), momentum (Ch 35–37, 44), volatility (Ch 38, 39), volume (Ch 40) and the fundamental gate (Ch 25) — **with at most one representative from each.** Category 3 is where the rule bites: RSI *or* MACD *or* Stochastic, never two.
- **Volume is the only category that is not a function of price.** That is why it carries roughly twelve times the information of a redundant seventh oscillator: $-\\log_2 0.55 = 0.863$ bits against $-\\log_2 0.95 = 0.074$.
- **A filter earns its place only by removing trades.** If adding it changed neither your entries nor your count, it never disagreed, and a filter that never disagrees has told you nothing.
- **Hard gates sit outside the sum, and the arithmetic proves they must.** Zero the volume category and TITASCERAM still scores $24/30 = 80.00\\%$ — TAKE. Zero momentum and it scores $26/30 = 86.67\\%$ — **full size, with no momentum evidence.** **A constraint a good-looking total can outvote is not a constraint**, for the third time in this book, after Ch 25's quality floor and Ch 30's exhaustion override.
- **The worked case scores 73.33% and gets half size:** weighted 22 of a possible 30, three of three gates passed, no duplicates, no contradiction. Entry 62.40, ATR 1.95, stop 58.50, stop distance 3.90, raw shares 3,076, **final shares 1,538 risking BDT 5,998.20 — 0.4998% of a BDT 12 lakh account.**
- **A 90.00% score can buy zero shares.** The breakout variant scores 27 of 30, then breaks on 0.58× turnover; B24 fires and the verdict is REJECT with a size multiplier of 0. **The veto is reserved for independent classes** — RSI at 58 against Stochastic at 46 is a quarrel about a lookback, not evidence.
- **Costs are 12.80% of one R here**, BDT 1,535.54 against a BDT 12,000 budget, moving break-even from 25.16% to 26.00%. **Halve the stop to 1 ATR and it doubles to 25.6%.** A 1% risk budget also produced a **15.9952% position** — concentration follows the stop, not the conviction.
- **Every added indicator raises the in-sample hit rate and shrinks the sample that could test it.** Six filters at 0.55 fire 6.6 times a year: 13 trades in two years, 9 wins, 69% — and **a fair coin does that or better 13.34% of the time**, with a standard error of 12.83 pp and a rough interval of 44% to 94%. Chapter 55 is where this gets settled.
- **DSE constraints precede everything:** ADTV below BDT 50 lakh is a hard gate because a setup you cannot exit is not a setup; a limit-locked bar is an administrative price that corrupts MA, ATR, RSI and Fibonacci alike; floor-price windows must be excluded whole; record-date gaps must be adjusted; and **with no reliable short side, a bearish confluence sizes you out, never in.**
- **Part III ends here, and it cannot make money on its own.** Confluence identifies a candidate. Chapter 46 writes the plan, Chapter 48 defines the exit, Chapter 49 sizes it and Chapter 50 asks whether the whole thing has positive expectancy. **A setup without a size and an invalidation price is an opinion with a ticker attached.**`,
      bn: `- **ক্লোজিং দাম থেকে গড়া ছয়টি নির্দেশক একটিই পর্যবেক্ষণ, ছয়বার প্রতিবেদিত।** $\\rho = 0.85$-এ $n_{\\text{eff}} = 6/5.25 = 1.14$; $\\rho = 0.20$-তে স্বাধীন শ্রেণিজুড়ে তা ৩.০০। **অসিলেটরের স্তূপওয়ালা ট্রেডার ভাবেন তাঁর সুবিধা $\\sqrt{6} = 2.45$, যেখানে তা ১.০৭।**
- **সমন্বয় কেবল ভিন্ন তথ্য-শ্রেণির মধ্যেই অর্থবহ** — কাঠামো (অধ্যায় ৩১, ৩৪, ৪২), অবস্থান (অধ্যায় ৩০, ৩১, ৪১), মোমেন্টাম (অধ্যায় ৩৫–৩৭, ৪৪), অস্থিরতা (অধ্যায় ৩৮, ৩৯), ভলিউম (অধ্যায় ৪০) ও ফান্ডামেন্টাল গেট (অধ্যায় ২৫) — **প্রতিটি থেকে সর্বোচ্চ একজন প্রতিনিধিসহ।** তৃতীয় শ্রেণিতেই নিয়মটি কামড়ায়: RSI *অথবা* MACD *অথবা* Stochastic, কখনো দুটি নয়।
- **ভলিউমই একমাত্র শ্রেণি যা দামের অপেক্ষক নয়।** এ কারণেই এটি অপ্রয়োজনীয় সপ্তম অসিলেটরের প্রায় বারো গুণ তথ্য বহন করে: $-\\log_2 0.55 = 0.863$ বিট বনাম $-\\log_2 0.95 = 0.074$।
- **একটি ফিল্টার কেবল ট্রেড সরিয়েই তার জায়গা অর্জন করে।** যোগ করে আপনার প্রবেশ বা সংখ্যা কোনোটাই না বদলালে সে কখনো দ্বিমত করেনি, আর যে ফিল্টার কখনো দ্বিমত করে না সে আপনাকে কিছুই বলেনি।
- **কঠোর গেট যোগফলের বাইরে বসে, আর পাটিগণিত প্রমাণ করে তা বসতেই হবে।** ভলিউম শ্রেণি শূন্য করলেও TITASCERAM পায় $24/30 = 80.00\\%$ — TAKE। মোমেন্টাম শূন্য করলে পায় $26/30 = 86.67\\%$ — **পূর্ণ আকার, কোনো মোমেন্টাম প্রমাণ ছাড়াই।** অধ্যায় ২৫-এর গুণমান-মেঝে ও অধ্যায় ৩০-এর এক্সহসশন অগ্রাহ্যকরণের পর এই বইয়ে তৃতীয়বার: **যে সীমাবদ্ধতাকে একটি সুন্দর-দেখতে মোট ভোটে হারাতে পারে তা সীমাবদ্ধতা নয়।**
- **কষে দেখানো ঘটনাটি ৭৩.৩৩% স্কোর করে ও অর্ধ আকার পায়:** সম্ভাব্য ৩০-এর মধ্যে ভারিত ২২, তিনে তিন গেট উত্তীর্ণ, কোনো অনুলিপি নেই, কোনো বিরোধিতা নেই। প্রবেশ ৬২.৪০, ATR ১.৯৫, স্টপ ৫৮.৫০, স্টপ দূরত্ব ৩.৯০, কাঁচা শেয়ার ৩,০৭৬, **চূড়ান্ত শেয়ার ১,৫৩৮ যা ৫,৯৯৮.২০ টাকা ঝুঁকিতে ফেলে — ১২ লক্ষ টাকার হিসাবের ০.৪৯৯৮%।**
- **৯০.০০% স্কোর শূন্য শেয়ার কিনতে পারে।** ব্রেকআউট সংস্করণ ৩০-এ ২৭ পায়, তারপর ০.৫৮× টার্নওভারে ভাঙে; B24 চালু হয় আর রায় REJECT, আকার গুণক ০। **ভেটো সংরক্ষিত স্বাধীন শ্রেণির জন্য** — RSI ৫৮ বনাম Stochastic ৪৬ একটি লুকব্যাক নিয়ে ঝগড়া, প্রমাণ নয়।
- **এখানে খরচ এক R-এর ১২.৮০%**, ১২,০০০ টাকার বাজেটের বিপরীতে ১,৫৩৫.৫৪ টাকা, যা ব্রেক-ইভেনকে ২৫.১৬% থেকে ২৬.০০%-এ নেয়। **স্টপ অর্ধেক করে ১ ATR করলে তা দ্বিগুণ হয়ে ২৫.৬%।** ১% ঝুঁকি-বাজেট আবার তৈরি করেছে **১৫.৯৯৫২% পজিশন** — ঘনত্ব প্রত্যয় নয়, স্টপ অনুসরণ করে।
- **প্রতিটি যোগ করা নির্দেশক নমুনার ভেতরের হিট রেট বাড়ায় আর যে নমুনা তা পরীক্ষা করতে পারত তাকে ছোট করে।** ০.৫৫-এ ছয়টি ফিল্টার বছরে ৬.৬ বার চালু হয়: দুই বছরে ১৩টি ট্রেড, ৯টি জয়, ৬৯% — আর **একটি নিরপেক্ষ মুদ্রা তা বা তার চেয়ে ভালো করে ১৩.৩৪% সময়**, আদর্শ ত্রুটি ১২.৮৩ পয়েন্ট ও মোটামুটি ব্যবধান ৪৪% থেকে ৯৪%। অধ্যায় ৫৫-তেই এর নিষ্পত্তি।
- **ডিএসই-র সীমাবদ্ধতা সবকিছুর আগে:** ৫০ লক্ষ টাকার নিচে ADTV একটি কঠোর গেট, কারণ যে সেটআপ থেকে বেরোনো যায় না তা সেটআপ নয়; লিমিট-লক বার একটি প্রশাসনিক দাম যা MA, ATR, RSI ও Fibonacci সবই নষ্ট করে; ফ্লোর-প্রাইসের জানালা পুরোপুরি বাদ দিতে হবে; রেকর্ড-ডেটের গ্যাপ সমন্বয় করতে হবে; আর **নির্ভরযোগ্য শর্ট সাইড না থাকায় মন্দা সমন্বয় আপনাকে বাইরে আকার দেয়, ভেতরে কখনো নয়।**
- **পর্ব ৩ এখানেই শেষ, আর এটি একা টাকা বানাতে পারে না।** সমন্বয় একটি প্রার্থী চিহ্নিত করে। অধ্যায় ৪৬ পরিকল্পনা লেখে, অধ্যায় ৪৮ প্রস্থান সংজ্ঞায়িত করে, অধ্যায় ৪৯ আকার ঠিক করে আর অধ্যায় ৫০ জিজ্ঞেস করে গোটা জিনিসটির প্রত্যাশা-মূল্য ধনাত্মক কি না। **আকার ও অকার্যকরণ মূল্য ছাড়া একটি সেটআপ টিকার লাগানো একটি মতামত।**`,
    },
  },

  interview: [
    {
      q: {
        en: 'You have RSI, MACD and Stochastic all bullish on the same chart. How many confirmations is that?',
        bn: 'একই চার্টে আপনার RSI, MACD ও Stochastic সবই তেজি। এটি কয়টি নিশ্চিতকরণ?',
      },
      a: {
        en: 'Close to one, and I would say so plainly because the arithmetic is not really disputable. All three are deterministic transformations of the same closing series, and on a Dhaka large-cap their daily readings correlate at around zero point eight five. If I feed that into the effective sample size formula — n divided by one plus n minus one times rho — six such oscillators give six over five point two five, which is one point one four independent observations. Three of them give something a little under two. The trader looking at that screen believes his sampling advantage is the square root of six, which is two point four five; it is actually the square root of one point one four, which is one point zero seven. That is not a small overstatement, it is more than double. And it gets worse when you look at what the tools actually are: the MACD line is the spread between a twelve-period and a twenty-six-period exponential average, so it is literally the moving-average distance from chapter thirty-four wearing momentum clothes. Reading MACD next to a twelve twenty-six crossover system and calling it confirmation is reading the same number twice. My rule is one signal per information class, and momentum is one class, so I pick RSI for a trending regime or Stochastic for a range, score it, and discard the rest — not because the others are bad, but because they add correlation without adding information.',
        bn: 'প্রায় একটি, আর আমি তা স্পষ্ট করেই বলব কারণ পাটিগণিতটি সত্যিই বিতর্কযোগ্য নয়। তিনটিই একই ক্লোজিং ধারার নির্ধারিত রূপান্তর, আর ঢাকার একটি বড় মূলধনী শেয়ারে তাদের দৈনিক পাঠ প্রায় শূন্য দশমিক আট পাঁচে সহসম্পর্কিত। আমি তা কার্যকর নমুনা-আকারের সূত্রে বসালে — n ভাগ এক যোগ n বিয়োগ এক গুণ রো — এমন ছয়টি অসিলেটর দেয় ছয় ভাগ পাঁচ দশমিক দুই পাঁচ, অর্থাৎ এক দশমিক এক চারটি স্বাধীন পর্যবেক্ষণ। তিনটি দেয় দুইয়ের সামান্য কম। ঐ পর্দার দিকে তাকিয়ে ট্রেডার ভাবেন তাঁর নমুনা-সুবিধা ছয়ের বর্গমূল, অর্থাৎ দুই দশমিক চার পাঁচ; আসলে তা এক দশমিক এক চারের বর্গমূল, অর্থাৎ এক দশমিক শূন্য সাত। এটি সামান্য অতিরঞ্জন নয়, দ্বিগুণেরও বেশি। আর হাতিয়ারগুলো আসলে কী তা দেখলে আরও খারাপ: MACD লাইন হলো বারো ও ছাব্বিশ পর্যায়ের সূচকীয় গড়ের ব্যবধান, অর্থাৎ আক্ষরিক অর্থেই চৌত্রিশ অধ্যায়ের মুভিং অ্যাভারেজ দূরত্ব, মোমেন্টামের পোশাক পরে। বারো ছাব্বিশ ক্রসওভার ব্যবস্থার পাশে MACD পড়ে তাকে নিশ্চিতকরণ বলা মানে একই সংখ্যা দুবার পড়া। আমার নিয়ম প্রতি তথ্য-শ্রেণিতে একটি সংকেত, আর মোমেন্টাম একটি শ্রেণি, তাই আমি প্রবণতাযুক্ত পরিবেশে RSI বা পরিসরে Stochastic বাছি, তাকে স্কোর করি, বাকিগুলো বাদ দিই — অন্যগুলো খারাপ বলে নয়, বরং তারা তথ্য না বাড়িয়ে সহসম্পর্ক বাড়ায় বলে।',
      },
    },
    {
      q: {
        en: 'Why not simply give the liquidity check a very heavy weight instead of making it a gate?',
        bn: 'তারল্য যাচাইকে গেট না বানিয়ে কেবল খুব ভারী একটি ওজন দিলেই তো হয়?',
      },
      a: {
        en: 'Because I can show you with the sheet\'s own arithmetic that no weight you could defend is heavy enough. My weights are three, three, two, two, three, two, so the maximum weighted total is thirty. Volume carries a weight of three, which means it can contribute at most six points. Now take a setup that is perfect on everything else and score volume zero — nobody is transacting at all — and the total is twenty-four out of thirty, which is eighty percent, which clears my seventy percent threshold and takes the trade at half size. Do the same to momentum, which carries a weight of two, and you get twenty-six out of thirty, eighty-six point six seven percent, which is above my eighty-five percent threshold and takes a full-size position with literally zero momentum evidence. So the weighted system approves setups it should refuse. Could I fix it by giving volume a weight of, say, ten? Then volume alone is twenty of the fifty available points and it dominates every other decision the sheet makes; I would no longer have a scorecard, I would have a volume filter with decorations. The honest conclusion is that a veto cannot be expressed as a number in a sum. It has to live outside the sum, as a gate that returns invalid. This is the third time the book has arrived at this, after the quality floor in the fundamental scorecard and the exhaustion override in the support and resistance chapter, and the general statement is the one I would want remembered: a constraint that a good-looking total can outvote is not a constraint, it is a penalty.',
        bn: 'কারণ আমি শিটের নিজের পাটিগণিত দিয়েই দেখাতে পারি যে আপনার সমর্থনযোগ্য কোনো ওজনই যথেষ্ট ভারী নয়। আমার ওজন তিন, তিন, দুই, দুই, তিন, দুই, তাই সর্বোচ্চ ভারিত মোট ত্রিশ। ভলিউমের ওজন তিন, অর্থাৎ সে সর্বোচ্চ ছয় পয়েন্ট দিতে পারে। এবার এমন একটি সেটআপ নিন যা বাকি সবকিছুতে নিখুঁত আর ভলিউমে শূন্য — কেউ আদৌ লেনদেন করছে না — মোট দাঁড়ায় ত্রিশে চব্বিশ, অর্থাৎ আশি শতাংশ, যা আমার সত্তর শতাংশ সীমা পার করে ও অর্ধ আকারে ট্রেডটি নেয়। মোমেন্টামে একই করুন, যার ওজন দুই, আর আপনি পান ত্রিশে ছাব্বিশ, ছিয়াশি দশমিক ছয় সাত শতাংশ, যা আমার পঁচাশি শতাংশ সীমার ওপরে আর আক্ষরিক অর্থেই শূন্য মোমেন্টাম প্রমাণ নিয়ে পূর্ণ-আকার পজিশন নেয়। অর্থাৎ ভারিত ব্যবস্থাটি এমন সেটআপ অনুমোদন করে যা তার প্রত্যাখ্যান করার কথা। ভলিউমকে ধরুন দশ ওজন দিয়ে কি ঠিক করা যেত? তাহলে একা ভলিউমই পঞ্চাশটি প্রাপ্য পয়েন্টের কুড়িটি আর সে শিটের প্রতিটি সিদ্ধান্ত কুক্ষিগত করে; আমার আর কোনো স্কোরকার্ড থাকত না, থাকত সাজসজ্জাসহ একটি ভলিউম ফিল্টার। সৎ উপসংহার হলো একটি ভেটোকে যোগফলের ভেতরে একটি সংখ্যা হিসেবে প্রকাশ করা যায় না। তাকে যোগফলের বাইরে থাকতে হয়, এমন একটি গেট হিসেবে যা অবৈধ ফেরত দেয়। ফান্ডামেন্টাল স্কোরকার্ডের গুণমান-মেঝে ও সাপোর্ট-রেজিস্ট্যান্স অধ্যায়ের এক্সহসশন অগ্রাহ্যকরণের পর বইটি এই তৃতীয়বার এখানে পৌঁছাল, আর সাধারণ বিবৃতিটিই আমি মনে রাখাতে চাইব: যে সীমাবদ্ধতাকে একটি সুন্দর-দেখতে মোট ভোটে হারাতে পারে তা সীমাবদ্ধতা নয়, তা একটি জরিমানা।',
      },
    },
    {
      q: {
        en: 'Your six-filter system won three of its last four trades. What do you conclude?',
        bn: 'আপনার ছয়-ফিল্টারের ব্যবস্থা শেষ চারটি ট্রেডের তিনটিতে জিতেছে। আপনি কী সিদ্ধান্তে আসবেন?',
      },
      a: {
        en: 'Almost nothing, and I would want to say why in numbers rather than as a general caution. Flip a fair coin four times and you get three or more heads five times in sixteen, which is thirty-one point two five percent. So a coin reproduces that record roughly one attempt in three. Widen it out to the case I usually work through: six independent filters each passing about fifty-five percent of the time, applied to two hundred and forty candidate sessions a year, give you two hundred and forty times zero point five five to the sixth, which is six point six trades a year. Backtest two years and you have thirteen trades. Suppose nine were winners, a sixty-nine percent hit rate, which looks excellent. Under a fair coin the probability of nine or more out of thirteen is one thousand and ninety-three over eight thousand one hundred and ninety-two, which is thirteen point three four percent. The standard error on the hit rate is twelve point eight three percentage points, so a rough ninety-five percent interval runs from about forty-four percent to about ninety-four percent. I have not measured an edge; I have measured an interval so wide that it contains almost every hypothesis I might have had. And the mechanism is the trap: every filter I added raised the in-sample hit rate and simultaneously destroyed the sample that could have tested it. Worse, the filters that cost me the fewest trades are the ones adding the least information, so the system that stays comfortable to trade is precisely the system that learned nothing. My working rules are to fix the thresholds and date them before looking at outcomes, and to refuse to believe any hit rate built on fewer than about thirty completed trades. Chapter fifty-five is where I would take this properly.',
        bn: 'প্রায় কিছুই নয়, আর আমি কেন তা সাধারণ সতর্কতা হিসেবে নয়, সংখ্যায় বলতে চাইব। একটি নিরপেক্ষ মুদ্রা চারবার ছুড়লে ষোলোবারের পাঁচবার তিন বা তার বেশি হেড পড়ে, অর্থাৎ একত্রিশ দশমিক দুই পাঁচ শতাংশ। তাই একটি মুদ্রাই ঐ রেকর্ড মোটামুটি তিনবারের একবার পুনরুৎপাদন করে। আমি সাধারণত যে ঘটনাটি কষে দেখাই সেখানে ছড়িয়ে দিন: ছয়টি স্বাধীন ফিল্টার, প্রতিটি প্রায় পঞ্চান্ন শতাংশ সময় পাস করে, বছরে দুইশ চল্লিশটি প্রার্থী সেশনে প্রয়োগ করলে পাওয়া যায় দুইশ চল্লিশ গুণ শূন্য দশমিক পঞ্চান্নের ষষ্ঠ ঘাত, অর্থাৎ বছরে ছয় দশমিক ছয়টি ট্রেড। দুই বছর ব্যাকটেস্ট করলে আপনার হাতে তেরোটি ট্রেড। ধরুন নয়টি বিজয়ী, ঊনসত্তর শতাংশ হিট রেট, যা চমৎকার দেখায়। নিরপেক্ষ মুদ্রার অধীনে তেরোর মধ্যে নয় বা তার বেশির সম্ভাবনা আট হাজার একশ বিরানব্বইয়ের মধ্যে এক হাজার তিরানব্বই, অর্থাৎ তেরো দশমিক তিন চার শতাংশ। হিট রেটের আদর্শ ত্রুটি বারো দশমিক আট তিন শতাংশ-পয়েন্ট, তাই মোটামুটি পঁচানব্বই শতাংশ ব্যবধান চলে প্রায় চুয়াল্লিশ শতাংশ থেকে প্রায় চুরানব্বই শতাংশ পর্যন্ত। আমি কোনো প্রান্ত-সুবিধা মাপিনি; আমি এত চওড়া একটি ব্যবধান মেপেছি যে তাতে আমার প্রায় প্রতিটি অনুমানই ধরে যায়। আর কলকব্জাটিই ফাঁদ: আমার যোগ করা প্রতিটি ফিল্টার নমুনার ভেতরের হিট রেট বাড়িয়েছে আর একই সঙ্গে যে নমুনা তা পরীক্ষা করতে পারত তাকে ধ্বংস করেছে। আরও খারাপ, যে ফিল্টারগুলো আমার সবচেয়ে কম ট্রেড কেড়েছে সেগুলোই সবচেয়ে কম তথ্য যোগ করেছে, তাই যে ব্যবস্থা ট্রেড করতে আরামদায়ক থাকে ঠিক সেই ব্যবস্থাই কিছু শেখেনি। আমার কার্যকর নিয়ম হলো ফলাফল দেখার আগে সীমাগুলো স্থির করে তারিখ দিয়ে রাখা, আর প্রায় ত্রিশটি সম্পন্ন ট্রেডের কম কিছুর ওপর গড়া কোনো হিট রেট বিশ্বাস করতে অস্বীকার করা। পঞ্চান্ন অধ্যায়েই আমি এটিকে যথাযথভাবে নিয়ে যাব।',
      },
    },
    {
      q: {
        en: 'Five categories agree and the sixth disagrees. Walk me through what you do.',
        bn: 'পাঁচটি শ্রেণি একমত আর ষষ্ঠটি দ্বিমত। আপনি কী করবেন, বলুন।',
      },
      a: {
        en: 'The first thing I do is not drop the one that disagrees, because a signal I am willing to discard when it says no was never evidence, it was decoration. What I actually do is ask whether the contradiction is independent, and that is a question about correlation rather than about strength. Take the easy case first. My RSI reads fifty-eight and my Stochastic reads forty-six. Those correlate at about zero point eight five; they measure the same thing on different lookbacks, so they have disagreed about a parameter, not about the market. I record it and I do not act on it, and my sheet keeps the conflict flag at zero. Now the hard case. Price breaks a six-month resistance and the breakout session trades zero point five eight times its twenty-day average turnover. Structure and location are shouting; volume is saying nobody bought it. Volume is not a transformation of the closing price, so the correlation there is close to zero point one and this is genuine contrary evidence. On our market it is also a familiar failure mode, because a thin book means a handful of trades can move price through a level with no participation behind it. So the flag goes to one and the verdict function returns reject regardless of score. In the case I work through, that setup scores twenty-seven out of thirty, which is ninety percent and would otherwise be a full-size position, and it buys zero shares. That is deliberate. If I let a ninety percent total absorb the veto as a deduction, the veto would never bind, and I would be back to having a preference rather than a constraint.',
        bn: 'প্রথমেই আমি যা করি না তা হলো যে দ্বিমত করছে তাকে বাদ দেওয়া, কারণ যে সংকেতকে "না" বলার সময় আমি ফেলে দিতে রাজি, তা কখনোই প্রমাণ ছিল না, ছিল সাজসজ্জা। আমি আসলে যা করি তা হলো জিজ্ঞেস করা বিরোধিতাটি স্বাধীন কি না, আর সেটি শক্তির নয়, সহসম্পর্কের প্রশ্ন। সহজ ঘটনাটি আগে নিন। আমার RSI দেখাচ্ছে আটান্ন আর Stochastic ছেচল্লিশ। এরা প্রায় শূন্য দশমিক আট পাঁচে সহসম্পর্কিত; এরা ভিন্ন লুকব্যাকে একই জিনিস মাপে, তাই এরা একটি প্যারামিটার নিয়ে দ্বিমত করেছে, বাজার নিয়ে নয়। আমি লিখে রাখি আর কাজ করি না, আর আমার শিটে কনফ্লিক্ট চিহ্নটি শূন্যই থাকে। এবার কঠিন ঘটনা। দাম ছয় মাসের রেজিস্ট্যান্স ভাঙে আর ব্রেকআউটের সেশনটি লেনদেন করে তার কুড়ি-দিনের গড় টার্নওভারের শূন্য দশমিক পাঁচ আট গুণ। কাঠামো ও অবস্থান চিৎকার করছে; ভলিউম বলছে কেউ কেনেনি। ভলিউম ক্লোজিং দামের রূপান্তর নয়, তাই সেখানে সহসম্পর্ক প্রায় শূন্য দশমিক এক আর এটি প্রকৃত বিপরীত প্রমাণ। আমাদের বাজারে এটি একটি পরিচিত ব্যর্থতার ধরনও, কারণ পাতলা বই মানে হাতে গোনা কয়েকটি ট্রেডই পেছনে কোনো অংশগ্রহণ ছাড়াই দামকে একটি স্তরের ওপারে নিয়ে যেতে পারে। তাই চিহ্নটি এক হয় আর রায় ফাংশন স্কোর যা-ই হোক প্রত্যাখ্যান ফেরত দেয়। আমি যে ঘটনাটি কষে দেখাই সেখানে ঐ সেটআপ ত্রিশে সাতাশ পায়, অর্থাৎ নব্বই শতাংশ, যা নইলে পূর্ণ-আকার পজিশন হতো, আর তা শূন্যটি শেয়ার কেনে। এটি ইচ্ছাকৃত। নব্বই শতাংশ মোটকে যদি আমি ভেটোটিকে একটি বিয়োগ হিসেবে শুষে নিতে দিই, তবে ভেটো কখনো কার্যকর হবে না, আর আমি আবার একটি সীমাবদ্ধতা নয়, একটি পছন্দে ফিরে যাব।',
      },
    },
    {
      q: {
        en: 'What does the Dhaka Stock Exchange change about all of this?',
        bn: 'ঢাকা স্টক এক্সচেঞ্জ এসব কিছুর কী বদলায়?',
      },
      a: {
        en: 'Four things, and each of them binds before the chart does. The first is liquidity, and it is the one that reorders everything. I require average daily turnover of at least fifty lakh taka as a hard gate, which means a name can score twenty-eight out of thirty and still be rejected, because a setup you cannot exit is not a setup. In the case I work through, the full-size position is one lakh ninety-one thousand nine hundred and forty-two taka against ninety-six lakh of daily turnover, which is two percent of a day and comfortable; drop the turnover to thirty-eight lakh and the same position is five point one percent of a day, and the exit becomes the trade. The second is circuit limits. A limit-locked session prints a high or a low that is an administrative boundary rather than a price at which anybody could transact, and every category is then computed on an artefact — the moving average, the average true range, the RSI, and the Fibonacci legs measured off that bar. So a limit lock in the window is also a hard gate. The third is the floor-price era. Flat quotes with no trades behind them poison the same four calculations, and the fix is to exclude the whole window rather than to adjust around it. The fourth is that there is no reliable retail short side, which means every bearish confluence resolves to an exit or an abstention. Categories one through five turning bearish sizes me out, never in. That last point matters more than it sounds, because a great deal of the classical literature quietly assumes a short side we do not have, and importing its conclusions imports a market that does not exist here.',
        bn: 'চারটি জিনিস, আর প্রতিটিই চার্টের আগে কার্যকর হয়। প্রথমটি তারল্য, আর সেটিই সব কিছুর ক্রম বদলে দেয়। আমি কঠোর গেট হিসেবে অন্তত পঞ্চাশ লক্ষ টাকার গড় দৈনিক টার্নওভার দাবি করি, অর্থাৎ একটি নাম ত্রিশে আটাশ পেয়েও প্রত্যাখ্যাত হতে পারে, কারণ যে সেটআপ থেকে বেরোনো যায় না তা সেটআপ নয়। আমি যে ঘটনাটি কষে দেখাই সেখানে পূর্ণ-আকার পজিশন এক লক্ষ একানব্বই হাজার নয়শ বিয়াল্লিশ টাকা, ছিয়ানব্বই লক্ষ দৈনিক টার্নওভারের বিপরীতে, অর্থাৎ এক দিনের দুই শতাংশ, যা স্বস্তিদায়ক; টার্নওভার আটত্রিশ লক্ষে নামান আর একই পজিশন এক দিনের পাঁচ দশমিক এক শতাংশ, আর প্রস্থানটিই ট্রেড হয়ে দাঁড়ায়। দ্বিতীয়টি সার্কিট সীমা। লিমিটে আটকে যাওয়া সেশন এমন একটি উচ্চ বা নিম্ন ছাপে যা প্রশাসনিক সীমানা, এমন দাম নয় যাতে কেউ লেনদেন করতে পারত, আর তখন প্রতিটি শ্রেণিই একটি কৃত্রিম বস্তুর ওপর গণনা হয় — মুভিং অ্যাভারেজ, গড় true range, RSI, আর ঐ বার থেকে মাপা Fibonacci পা। তাই জানালার ভেতরে একটি লিমিট লকও একটি কঠোর গেট। তৃতীয়টি ফ্লোর-প্রাইসের যুগ। পেছনে লেনদেনহীন সমতল দর ঐ একই চারটি হিসাব বিষিয়ে দেয়, আর সমাধান হলো তার চারপাশে সমন্বয় নয়, গোটা জানালাটিই বাদ দেওয়া। চতুর্থটি হলো নির্ভরযোগ্য খুচরা শর্ট সাইড নেই, অর্থাৎ প্রতিটি মন্দা সমন্বয় একটি প্রস্থান বা বিরতিতে গিয়ে দাঁড়ায়। এক থেকে পাঁচ শ্রেণি মন্দায় ঘুরলে তা আমাকে বাইরে আকার দেয়, ভেতরে কখনো নয়। শেষ কথাটি শোনার চেয়ে বেশি গুরুত্বপূর্ণ, কারণ ধ্রুপদী সাহিত্যের বিরাট অংশ নীরবে এমন একটি শর্ট সাইড ধরে নেয় যা আমাদের নেই, আর তার উপসংহার আমদানি করা মানে এমন একটি বাজার আমদানি করা যার এখানে অস্তিত্ব নেই।',
      },
    },
    {
      q: {
        en: 'Your scorecard says take at half size. What has it actually told you, and what has it not?',
        bn: 'আপনার স্কোরকার্ড বলছে অর্ধ আকারে নিন। এটি আসলে আপনাকে কী বলল, আর কী বলল না?',
      },
      a: {
        en: 'It has told me that a candidate survived every gate and scored seventy-three point three three percent, which is twenty-two weighted points out of a possible thirty, and that on my pre-committed banding that earns half of the size I would otherwise take. In taka, with a twelve lakh account and one percent risk, an entry at sixty-two forty and an average true range of one ninety-five, the two-ATR stop sits at fifty-eight fifty, the raw share count is three thousand and seventy-six, the half-size count is one thousand five hundred and thirty-eight, and the money at risk is five thousand nine hundred and ninety-eight taka and twenty paisa, which is a shade under half a percent of the account. That translation from a chart into a taka figure is genuinely the whole product. What it has not told me is more interesting. It has not told me the weights are right — they are my judgement that location and liquidity are where Dhaka trades are won and lost, which is defensible but not measured. It has not told me the seventy percent threshold is right, and if I ever tune that threshold until it catches last year\'s winners I have curve-fitted it. It cannot see depth beyond the liquidity gate, it cannot see tomorrow\'s price-sensitive announcement which will overrule all thirty points, and it cannot see a governance problem that has not reached the accounts yet. Above all it has not identified a trade. It has identified a candidate. Chapter forty-six turns that into a written plan with a trigger and an invalidation, chapter forty-eight defines the exit, chapter forty-nine sizes it, and chapter fifty asks whether the whole system has positive expectancy — which is the only question that decides whether any of this was worth doing. A setup without a size and an invalidation price is an opinion with a ticker attached.',
        bn: 'এটি আমাকে বলেছে যে একটি প্রার্থী প্রতিটি গেট টিকে গেছে ও তিয়াত্তর দশমিক তিন তিন শতাংশ স্কোর করেছে, অর্থাৎ সম্ভাব্য ত্রিশের মধ্যে বাইশটি ভারিত পয়েন্ট, আর আমার আগে থেকে প্রতিশ্রুত ব্যান্ডিংয়ে তা নইলে যত আকার নিতাম তার অর্ধেক অর্জন করে। টাকায়, বারো লক্ষের হিসাব ও এক শতাংশ ঝুঁকিতে, বাষট্টি চল্লিশে প্রবেশ ও এক দশমিক নয় পাঁচ গড় true range নিয়ে, দুই-ATR স্টপ বসে আটান্ন পঞ্চাশে, কাঁচা শেয়ারসংখ্যা তিন হাজার ছিয়াত্তর, অর্ধ-আকারের সংখ্যা এক হাজার পাঁচশ আটত্রিশ, আর ঝুঁকিতে থাকা টাকা পাঁচ হাজার নয়শ আটানব্বই টাকা কুড়ি পয়সা, যা হিসাবের অর্ধ শতাংশের সামান্য কম। চার্ট থেকে একটি টাকার অঙ্কে এই অনুবাদটিই সত্যিকারের গোটা পণ্য। এটি আমাকে যা বলেনি তা আরও কৌতূহলোদ্দীপক। এটি বলেনি ওজনগুলো ঠিক — ওগুলো আমার বিচারবুদ্ধি যে ঢাকার ট্রেড অবস্থান ও তারল্যেই জেতা-হারা হয়, যা সমর্থনযোগ্য কিন্তু মাপা নয়। এটি বলেনি সত্তর শতাংশ সীমাটি ঠিক, আর আমি যদি কখনো ঐ সীমা গত বছরের বিজয়ীদের ধরা পর্যন্ত সুর মিলিয়ে নিই তবে আমি তা কার্ভ-ফিট করেছি। তারল্য গেটের বাইরে এটি গভীরতা দেখতে পায় না, আগামীকালের মূল্য-সংবেদনশীল ঘোষণা দেখতে পায় না যা ত্রিশটি পয়েন্টকেই অগ্রাহ্য করবে, আর এমন সুশাসনের সমস্যা দেখতে পায় না যা এখনো হিসাবে পৌঁছায়নি। সবচেয়ে বড় কথা, এটি কোনো ট্রেড চিহ্নিত করেনি। এটি একটি প্রার্থী চিহ্নিত করেছে। ছেচল্লিশ অধ্যায় তাকে ট্রিগার ও অকার্যকরণসহ একটি লিখিত পরিকল্পনায় পরিণত করে, আটচল্লিশ অধ্যায় প্রস্থান সংজ্ঞায়িত করে, ঊনপঞ্চাশ অধ্যায় আকার ঠিক করে, আর পঞ্চাশ অধ্যায় জিজ্ঞেস করে গোটা ব্যবস্থাটির প্রত্যাশা-মূল্য ধনাত্মক কি না — একমাত্র যে প্রশ্ন ঠিক করে এসবের কিছু আদৌ করার মতো ছিল কি না। আকার ও অকার্যকরণ মূল্য ছাড়া একটি সেটআপ টিকার লাগানো একটি মতামত।',
      },
    },
  ],

  quiz: [
    {
      q: {
        en: 'Six momentum oscillators with average pairwise correlation 0.85 give an effective independent signal count of:',
        bn: '০.৮৫ গড় জোড়া-সহসম্পর্কযুক্ত ছয়টি মোমেন্টাম অসিলেটর কার্যকর স্বাধীন সংকেতসংখ্যা দেয়:',
      },
      options: {
        en: ['6.00', '3.00', '1.14', '0.85'],
        bn: ['৬.০০', '৩.০০', '১.১৪', '০.৮৫'],
      },
      answer: 2,
    },
    {
      q: {
        en: 'The MACD line is, mechanically, identical to:',
        bn: 'MACD লাইন যান্ত্রিকভাবে অভিন্ন:',
      },
      options: {
        en: [
          'The distance between a 12- and a 26-period EMA',
          'The position of the close within its recent range',
          'The average true range over 14 sessions',
          'Turnover divided by shares outstanding',
        ],
        bn: [
          'একটি ১২ ও একটি ২৬ পর্যায়ের EMA-র দূরত্বের সঙ্গে',
          'সাম্প্রতিক পরিসরে ক্লোজের অবস্থানের সঙ্গে',
          '১৪ সেশনের গড় true range-এর সঙ্গে',
          'বকেয়া শেয়ার দিয়ে ভাগ করা টার্নওভারের সঙ্গে',
        ],
      },
      answer: 0,
    },
    {
      q: {
        en: 'Which category is the only one on the scorecard that is not a transformation of price?',
        bn: 'স্কোরকার্ডে কোন শ্রেণিটিই একমাত্র যা দামের রূপান্তর নয়?',
      },
      options: {
        en: ['Momentum', 'Volatility', 'Volume / liquidity', 'Location'],
        bn: ['মোমেন্টাম', 'অস্থিরতা', 'ভলিউম / তারল্য', 'অবস্থান'],
      },
      answer: 2,
    },
    {
      q: {
        en: 'TITASCERAM scores 22 weighted points out of a maximum 30. The score percentage is:',
        bn: 'TITASCERAM সর্বোচ্চ ৩০-এর মধ্যে ২২টি ভারিত পয়েন্ট পায়। স্কোর শতাংশ:',
      },
      options: {
        en: ['66.67%', '73.33%', '80.00%', '86.67%'],
        bn: ['৬৬.৬৭%', '৭৩.৩৩%', '৮০.০০%', '৮৬.৬৭%'],
      },
      answer: 1,
    },
    {
      q: {
        en: 'With every other category at 2 and momentum scored 0, the weighted total gives 26/30 = 86.67%, which the sheet bands as:',
        bn: 'বাকি প্রতিটি শ্রেণি ২ আর মোমেন্টাম ০ হলে ভারিত মোট দেয় ২৬/৩০ = ৮৬.৬৭%, যা শিট ব্যান্ড করে:',
      },
      options: {
        en: [
          'REJECT — insufficient confluence',
          'WATCH, no position',
          'TAKE, half size',
          'TAKE, full size',
        ],
        bn: [
          'REJECT — অপর্যাপ্ত সমন্বয়',
          'WATCH, কোনো পজিশন নয়',
          'TAKE, অর্ধ আকার',
          'TAKE, পূর্ণ আকার',
        ],
      },
      answer: 3,
    },
    {
      q: {
        en: 'That result is the chapter\'s argument for:',
        bn: 'ঐ ফলাফলটি অধ্যায়ের যে বিষয়ের পক্ষে যুক্তি:',
      },
      options: {
        en: [
          'Increasing the momentum weight to 10',
          'Placing hard gates outside the weighted sum',
          'Lowering the TAKE threshold to 60%',
          'Adding a seventh momentum indicator',
        ],
        bn: [
          'মোমেন্টামের ওজন ১০-এ বাড়ানো',
          'কঠোর গেটকে ভারিত যোগফলের বাইরে রাখা',
          'TAKE সীমা ৬০%-এ নামানো',
          'সপ্তম একটি মোমেন্টাম নির্দেশক যোগ করা',
        ],
      },
      answer: 1,
    },
    {
      q: {
        en: 'A filter that removes none of your historical trades has:',
        bn: 'যে ফিল্টার আপনার ঐতিহাসিক ট্রেডের একটিও সরায় না, সেটি:',
      },
      options: {
        en: [
          'Confirmed your other signals independently',
          'Added essentially no information',
          'Improved your risk-adjusted return',
          'Reduced your correlation to the index',
        ],
        bn: [
          'আপনার অন্য সংকেতগুলো স্বাধীনভাবে নিশ্চিত করেছে',
          'কার্যত কোনো তথ্যই যোগ করেনি',
          'আপনার ঝুঁকি-সমন্বিত রিটার্ন উন্নত করেছে',
          'সূচকের সঙ্গে আপনার সহসম্পর্ক কমিয়েছে',
        ],
      },
      answer: 1,
    },
    {
      q: {
        en: 'A system produces 13 trades in two years and wins 9. Under a fair coin, the probability of that record or better is:',
        bn: 'একটি ব্যবস্থা দুই বছরে ১৩টি ট্রেড দেয় ও ৯টিতে জেতে। নিরপেক্ষ মুদ্রার অধীনে ঐ রেকর্ড বা তার চেয়ে ভালোর সম্ভাবনা:',
      },
      options: {
        en: ['0.13%', '1.34%', '13.34%', '69.00%'],
        bn: ['০.১৩%', '১.৩৪%', '১৩.৩৪%', '৬৯.০০%'],
      },
      answer: 2,
    },
    {
      q: {
        en: 'The breakout variant scores 27/30 = 90.00% but the breakout session trades 0.58× ADV. The verdict is:',
        bn: 'ব্রেকআউট সংস্করণ ২৭/৩০ = ৯০.০০% পায় কিন্তু ব্রেকআউট সেশনটি ০.৫৮× ADV লেনদেন করে। রায়:',
      },
      options: {
        en: [
          'TAKE, full size — the score clears 85%',
          'TAKE, half size — a penalty is deducted',
          'REJECT — an independent signal contradicts',
          'WATCH — recheck after one session',
        ],
        bn: [
          'TAKE, পূর্ণ আকার — স্কোর ৮৫% পার করে',
          'TAKE, অর্ধ আকার — একটি জরিমানা কাটা হয়',
          'REJECT — একটি স্বাধীন সংকেত বিরোধিতা করছে',
          'WATCH — এক সেশন পরে আবার দেখুন',
        ],
      },
      answer: 2,
    },
    {
      q: {
        en: 'With entry 62.40, ATR 1.95, a 2-ATR stop, BDT 12,00,000 equity and 1% risk, the half-size final position risks:',
        bn: 'প্রবেশ ৬২.৪০, ATR ১.৯৫, ২-ATR স্টপ, ১২,০০,০০০ টাকা মূলধন ও ১% ঝুঁকিতে অর্ধ-আকারের চূড়ান্ত পজিশন ঝুঁকিতে ফেলে:',
      },
      options: {
        en: ['BDT 12,000.00', 'BDT 5,998.20', 'BDT 3,076.00', 'BDT 1,535.54'],
        bn: ['১২,০০০.০০ টাকা', '৫,৯৯৮.২০ টাকা', '৩,০৭৬.০০ টাকা', '১,৫৩৫.৫৪ টাকা'],
      },
      answer: 1,
    },
  ],
};
