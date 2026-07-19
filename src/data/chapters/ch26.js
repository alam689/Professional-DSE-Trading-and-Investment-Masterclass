/**
 * Chapter 26 — Charting Foundations
 * Part III, Technical Analysis. Opens the Part.
 */

export default {
  n: 26,
  tools: [],

  excelSheet: {
    filename: 'ch26-chart-data-preparation.xlsx',
    sheetName: 'Chart Prep',
    cells: [
      { cell: 'A1', v: '— Chart Data Preparation: 10 Sessions, Tick 0.10, Band ±10% —' },

      { cell: 'A2', v: 'Day' },
      { cell: 'B2', v: 'Open' },
      { cell: 'C2', v: 'High' },
      { cell: 'D2', v: 'Low' },
      { cell: 'E2', v: 'Close' },
      { cell: 'F2', v: 'Volume' },
      { cell: 'G2', v: 'PrevClose' },
      { cell: 'H2', v: 'LimitUp' },
      { cell: 'I2', v: 'LimitDn' },
      { cell: 'J2', v: 'TrueRange' },
      { cell: 'K2', v: 'LogRet%' },
      { cell: 'L2', v: 'Flag' },
      { cell: 'M2', v: 'CleanRet' },

      { cell: 'A3', v: 1 }, { cell: 'B3', v: 48.5 }, { cell: 'C3', v: 49.8 }, { cell: 'D3', v: 48.1 }, { cell: 'E3', v: 49.6 }, { cell: 'F3', v: 412000 }, { cell: 'G3', v: 48.2 },
      { cell: 'A4', v: 2 }, { cell: 'B4', v: 50.0 }, { cell: 'C4', v: 54.5 }, { cell: 'D4', v: 49.9 }, { cell: 'E4', v: 54.5 }, { cell: 'F4', v: 1180000 }, { cell: 'G4', f: 'E3' },
      { cell: 'A5', v: 3 }, { cell: 'B5', v: 59.9 }, { cell: 'C5', v: 59.9 }, { cell: 'D5', v: 59.9 }, { cell: 'E5', v: 59.9 }, { cell: 'F5', v: 42000 }, { cell: 'G5', f: 'E4' },
      { cell: 'A6', v: 4 }, { cell: 'B6', v: 59.0 }, { cell: 'C6', v: 59.5 }, { cell: 'D6', v: 54.1 }, { cell: 'E6', v: 55.2 }, { cell: 'F6', v: 1540000 }, { cell: 'G6', f: 'E5' },
      { cell: 'A7', v: 5 }, { cell: 'B7', v: 54.0 }, { cell: 'C7', v: 54.2 }, { cell: 'D7', v: 49.7 }, { cell: 'E7', v: 49.7 }, { cell: 'F7', v: 980000 }, { cell: 'G7', f: 'E6' },
      { cell: 'A8', v: 6 }, { cell: 'B8', v: 50.1 }, { cell: 'C8', v: 51.0 }, { cell: 'D8', v: 49.2 }, { cell: 'E8', v: 50.4 }, { cell: 'F8', v: 620000 }, { cell: 'G8', f: 'E7' },
      { cell: 'A9', v: 7 }, { cell: 'B9', v: 50.5 }, { cell: 'C9', v: 50.9 }, { cell: 'D9', v: 50.0 }, { cell: 'E9', v: 50.2 }, { cell: 'F9', v: 95000 }, { cell: 'G9', f: 'E8' },
      { cell: 'A10', v: 8 }, { cell: 'B10', v: 50.2 }, { cell: 'C10', v: 50.2 }, { cell: 'D10', v: 50.2 }, { cell: 'E10', v: 50.2 }, { cell: 'F10', v: 3000 }, { cell: 'G10', f: 'E9' },
      { cell: 'A11', v: 9 }, { cell: 'B11', v: 50.3 }, { cell: 'C11', v: 51.6 }, { cell: 'D11', v: 50.1 }, { cell: 'E11', v: 51.3 }, { cell: 'F11', v: 430000 }, { cell: 'G11', f: 'E10' },
      { cell: 'A12', v: 10 }, { cell: 'B12', v: 51.4 }, { cell: 'C12', v: 52.3 }, { cell: 'D12', v: 50.8 }, { cell: 'E12', v: 51.0 }, { cell: 'F12', v: 380000 }, { cell: 'G12', f: 'E11' },

      { cell: 'H3', f: 'FLOOR(G3*1.1,0.1)' }, { cell: 'I3', f: 'CEILING(G3*0.9,0.1)' }, { cell: 'J3', f: 'MAX(C3-D3,ABS(C3-G3),ABS(D3-G3))' }, { cell: 'K3', f: 'LN(E3/G3)*100' }, { cell: 'L3', f: 'IF(OR(E3>=H3,E3<=I3,C3-D3=0),"EXCLUDE","OK")' }, { cell: 'M3', f: 'IF(L3="OK",K3,"")' },
      { cell: 'H4', f: 'FLOOR(G4*1.1,0.1)' }, { cell: 'I4', f: 'CEILING(G4*0.9,0.1)' }, { cell: 'J4', f: 'MAX(C4-D4,ABS(C4-G4),ABS(D4-G4))' }, { cell: 'K4', f: 'LN(E4/G4)*100' }, { cell: 'L4', f: 'IF(OR(E4>=H4,E4<=I4,C4-D4=0),"EXCLUDE","OK")' }, { cell: 'M4', f: 'IF(L4="OK",K4,"")' },
      { cell: 'H5', f: 'FLOOR(G5*1.1,0.1)' }, { cell: 'I5', f: 'CEILING(G5*0.9,0.1)' }, { cell: 'J5', f: 'MAX(C5-D5,ABS(C5-G5),ABS(D5-G5))' }, { cell: 'K5', f: 'LN(E5/G5)*100' }, { cell: 'L5', f: 'IF(OR(E5>=H5,E5<=I5,C5-D5=0),"EXCLUDE","OK")' }, { cell: 'M5', f: 'IF(L5="OK",K5,"")' },
      { cell: 'H6', f: 'FLOOR(G6*1.1,0.1)' }, { cell: 'I6', f: 'CEILING(G6*0.9,0.1)' }, { cell: 'J6', f: 'MAX(C6-D6,ABS(C6-G6),ABS(D6-G6))' }, { cell: 'K6', f: 'LN(E6/G6)*100' }, { cell: 'L6', f: 'IF(OR(E6>=H6,E6<=I6,C6-D6=0),"EXCLUDE","OK")' }, { cell: 'M6', f: 'IF(L6="OK",K6,"")' },
      { cell: 'H7', f: 'FLOOR(G7*1.1,0.1)' }, { cell: 'I7', f: 'CEILING(G7*0.9,0.1)' }, { cell: 'J7', f: 'MAX(C7-D7,ABS(C7-G7),ABS(D7-G7))' }, { cell: 'K7', f: 'LN(E7/G7)*100' }, { cell: 'L7', f: 'IF(OR(E7>=H7,E7<=I7,C7-D7=0),"EXCLUDE","OK")' }, { cell: 'M7', f: 'IF(L7="OK",K7,"")' },
      { cell: 'H8', f: 'FLOOR(G8*1.1,0.1)' }, { cell: 'I8', f: 'CEILING(G8*0.9,0.1)' }, { cell: 'J8', f: 'MAX(C8-D8,ABS(C8-G8),ABS(D8-G8))' }, { cell: 'K8', f: 'LN(E8/G8)*100' }, { cell: 'L8', f: 'IF(OR(E8>=H8,E8<=I8,C8-D8=0),"EXCLUDE","OK")' }, { cell: 'M8', f: 'IF(L8="OK",K8,"")' },
      { cell: 'H9', f: 'FLOOR(G9*1.1,0.1)' }, { cell: 'I9', f: 'CEILING(G9*0.9,0.1)' }, { cell: 'J9', f: 'MAX(C9-D9,ABS(C9-G9),ABS(D9-G9))' }, { cell: 'K9', f: 'LN(E9/G9)*100' }, { cell: 'L9', f: 'IF(OR(E9>=H9,E9<=I9,C9-D9=0),"EXCLUDE","OK")' }, { cell: 'M9', f: 'IF(L9="OK",K9,"")' },
      { cell: 'H10', f: 'FLOOR(G10*1.1,0.1)' }, { cell: 'I10', f: 'CEILING(G10*0.9,0.1)' }, { cell: 'J10', f: 'MAX(C10-D10,ABS(C10-G10),ABS(D10-G10))' }, { cell: 'K10', f: 'LN(E10/G10)*100' }, { cell: 'L10', f: 'IF(OR(E10>=H10,E10<=I10,C10-D10=0),"EXCLUDE","OK")' }, { cell: 'M10', f: 'IF(L10="OK",K10,"")' },
      { cell: 'H11', f: 'FLOOR(G11*1.1,0.1)' }, { cell: 'I11', f: 'CEILING(G11*0.9,0.1)' }, { cell: 'J11', f: 'MAX(C11-D11,ABS(C11-G11),ABS(D11-G11))' }, { cell: 'K11', f: 'LN(E11/G11)*100' }, { cell: 'L11', f: 'IF(OR(E11>=H11,E11<=I11,C11-D11=0),"EXCLUDE","OK")' }, { cell: 'M11', f: 'IF(L11="OK",K11,"")' },
      { cell: 'H12', f: 'FLOOR(G12*1.1,0.1)' }, { cell: 'I12', f: 'CEILING(G12*0.9,0.1)' }, { cell: 'J12', f: 'MAX(C12-D12,ABS(C12-G12),ABS(D12-G12))' }, { cell: 'K12', f: 'LN(E12/G12)*100' }, { cell: 'L12', f: 'IF(OR(E12>=H12,E12<=I12,C12-D12=0),"EXCLUDE","OK")' }, { cell: 'M12', f: 'IF(L12="OK",K12,"")' },

      { cell: 'A14', v: '— Sample Quality —' },
      { cell: 'A15', v: 'Sessions in sample' }, { cell: 'B15', f: 'COUNT(E3:E12)' },
      { cell: 'A16', v: 'Sessions flagged EXCLUDE' }, { cell: 'B16', f: 'COUNTIF(L3:L12,"EXCLUDE")' },
      { cell: 'A17', v: 'Unusable fraction (%)' }, { cell: 'B17', f: 'B16/B15*100' },
      { cell: 'A18', v: 'ATR(10), all sessions' }, { cell: 'B18', f: 'AVERAGE(J3:J12)' },
      { cell: 'A19', v: 'ATR, clean sessions only' }, { cell: 'B19', f: 'AVERAGEIF(L3:L12,"OK",J3:J12)' },
      { cell: 'A20', v: 'ATR overstatement (x)' }, { cell: 'B20', f: 'B18/B19' },
      { cell: 'A21', v: 'Daily sigma, all (%)' }, { cell: 'B21', f: 'STDEV(K3:K12)' },
      { cell: 'A22', v: 'Daily sigma, clean (%)' }, { cell: 'B22', f: 'STDEV(M3:M12)' },
      { cell: 'A23', v: 'Annualised vol, all (%)' }, { cell: 'B23', f: 'B21*SQRT(250)' },
      { cell: 'A24', v: 'Annualised vol, clean (%)' }, { cell: 'B24', f: 'B22*SQRT(250)' },
      { cell: 'A25', v: 'Cumulative log return (%)' }, { cell: 'B25', f: 'SUM(K3:K12)' },
      { cell: 'A26', v: 'Check: LN(last/first prev)' }, { cell: 'B26', f: 'LN(E12/G3)*100' },

      { cell: 'A28', v: 'VERDICT' },
      {
        cell: 'B28',
        f: 'IF(B17>=30,"Sample unfit as indicator input - too many administered or illiquid prints",IF(B17>=10,"Usable, but state the exclusion count alongside any signal","Sample is clean enough to indicate on"))',
      },
    ],
  },

  objectives: {
    en: [
      'State what a price chart is — a record of transacted consensus — and what it is not.',
      'Choose between line, bar, candlestick and point-and-figure representations and justify the choice.',
      'Explain when a logarithmic scale is mandatory and what an arithmetic scale hides in a multi-year DSE compounder.',
      'Select a timeframe deliberately, and say why intraday data on a thin DSE name is close to unusable.',
      'Flag and exclude limit-locked and zero-liquidity sessions before any indicator is computed on DSE data.',
    ],
    bn: [
      'একটি প্রাইস চার্ট কী — সম্পন্ন লেনদেনের ঐকমত্যের রেকর্ড — এবং কী নয়, তা বলা।',
      'লাইন, বার, ক্যান্ডেলস্টিক ও পয়েন্ট-অ্যান্ড-ফিগার উপস্থাপনার মধ্যে বাছাই করা এবং বাছাইটির যুক্তি দেওয়া।',
      'কখন লগারিদমিক স্কেল বাধ্যতামূলক এবং বহু-বছরের ডিএসই কম্পাউন্ডারে অ্যারিথমেটিক স্কেল কী আড়াল করে তা ব্যাখ্যা করা।',
      'সচেতনভাবে টাইমফ্রেম বাছাই করা, এবং পাতলা ডিএসই শেয়ারে ইন্ট্রাডে ডেটা কেন প্রায় অব্যবহার্য তা বলা।',
      'ডিএসই ডেটায় কোনো ইন্ডিকেটর গণনার আগে limit-locked ও শূন্য-তারল্যের সেশন চিহ্নিত করে বাদ দেওয়া।',
    ],
  },

  blocks: {
    theory: {
      en: `Seventeen chapters of Part II asked one question: **what is this business worth?** Part III asks a different one, and it is important to say at the outset that it is a *smaller* question. Not an easier one — a smaller one.

### What a price chart actually is

A price chart is a record. Nothing more.

Each point on it is a price at which a buyer and a seller actually agreed, in size, at a moment in time. It is **transacted consensus** — the settled output of every fundamental opinion, every rumour, every forced margin liquidation, and every sponsor's quiet accumulation, compressed into one number per session.

That is a genuinely valuable object. It is the only dataset in the market that is complete, timestamped, unrevised, and free of management discretion. **Chapter 24 spent its length on the ways an annual report can mislead you. A chart cannot mislead you about what was traded** — only about what it means.

But note what a chart is *not*. It is not a forecast. It contains no information about the future that is not already contained in the past. Anyone who tells you a chart "predicts" is either selling something or has not thought about it. The honest claim is narrower and much more useful:

**Given that the price history now looks like this, historically, what happened next — and how often?**

That is conditional probability over a sample. It is a legitimate statistical question. It is also a question with an error rate, a sample-size problem, and a survivorship problem, and Part III will keep naming all three.

### Why this comes after Part II and not before

Chapter 25 built a fundamental scorecard: hard gates, weighted factors, a ranked list of businesses you would be willing to own. That scorecard answers **WHAT**.

It does not answer **WHEN**. A company that passes every gate in Chapter 25 can still be 40% above any price at which owning it is sensible, and can stay there for two years. Conversely a scorecard reject can rally 300% on a rumour, and no amount of correct fundamental work will tell you when that rally exhausts.

**Technical analysis answers WHEN. Fundamental analysis answers WHAT. Neither substitutes for the other, and the failure modes of substituting are symmetrical:**

| Substitution | Failure mode |
|---|---|
| Charts without fundamentals | You buy a breakout in a company whose auditor issued a disclaimer. The pattern was real; the company was not. |
| Fundamentals without charts | You are right about the business and wrong about the entry, and you sit through a 55% drawdown that a stop would have avoided. |

The correct sequence in this book is: **Chapter 25 decides the universe. Part III decides the timing within that universe.** A chart is never permitted to add a name that the scorecard rejected.

### Four ways to draw the same data

The underlying data is always the same five numbers per session: open, high, low, close, volume. The representations differ in what they discard.

**Line chart** — plots closes only. Discards intraday range entirely. This is a feature, not a defect: the close is the price at which the market's opinion settled after the day's noise, and on a thin DSE name the intraday prints are mostly noise. **For a five-year view of a DSE stock, a line chart of weekly closes is often the most honest picture available.**

**Bar chart (OHLC)** — a vertical bar from low to high, with tick marks for open and close. Keeps everything. Visually dense; hard to read patterns across fifty bars.

**Candlestick** — same four numbers, drawn as a body (open-to-close) and wicks (to high and low), coloured by direction. The information is identical to the OHLC bar; the *encoding* is better, because the eye reads a filled body faster than two tick marks. Candlesticks are the default in Chapters 27–29.

**Point-and-figure** — discards time entirely and plots only price movements above a set box size, reversing columns after a set reversal threshold. Because it has no time axis, it cannot be distorted by a run of zero-volume sessions. **On illiquid DSE names this is a real advantage and P&F is badly under-used here.**

### Arithmetic versus logarithmic scale

On an arithmetic scale, equal vertical distances represent equal taka amounts. On a logarithmic scale, equal vertical distances represent equal *percentage* changes.

For a stock that has gone from BDT 20 to BDT 200 over eight years, the arithmetic chart is close to useless. The first double — 20 to 40, a 100% gain — occupies a sliver of the axis. The last leg, 180 to 200, is a 11% gain and occupies the same vertical space. **The arithmetic chart makes early compounding invisible and late moves look dramatic. It systematically misrepresents the return you would actually have earned.**

$$r_{\\log} = \\ln\\!\\left(\\frac{P_t}{P_{t-1}}\\right)$$

Log returns also add: the sum of daily log returns over a period equals the log return of the whole period, which simple percentage returns do not do. That single property is why every serious volatility and trend calculation in Part III runs on log returns rather than percentage changes.

**Rule: any chart spanning more than about eighteen months, or covering more than a 100% move, is plotted on a log scale. Below that it does not matter much.** A trendline drawn on an arithmetic multi-year chart is drawn on a distorted axis and is not the trendline you think it is.

### Timeframe

**Daily is the default.** One bar per session, one decision per session. It is the shortest timeframe on which DSE data is reliable and the longest on which most retail participants can actually act.

**Weekly is for trend.** Fifty-two bars a year removes most of the noise that generates false signals on the daily. If the weekly and the daily disagree, the weekly is usually the one to trust and the daily is the one to time with.

**Intraday is a trap on the DSE, and the reason is structural, not preferential.** A name that trades 95,000 shares in a session does not produce 300 meaningful five-minute bars — it produces perhaps twenty bars containing a trade and 280 that repeat the last print. Any indicator computed on that series is measuring the absence of trading, not the presence of a pattern. Reserve intraday for the handful of genuinely liquid names, and even then treat it with suspicion.

### What volume adds

Price tells you where consensus settled. **Volume tells you how many people were involved in settling it.**

A 9.9% advance on 42,000 shares and a 9.9% advance on 1,180,000 shares are the same line on a price chart and completely different events. The first can be produced by a handful of participants trading among themselves in a thin book. The second required real capital to change its mind.

Volume is therefore a *confirmation* variable, never a signal on its own. Chapter 30 develops this properly. For now: **any price move you cannot corroborate with volume is a move you have not verified.**

### The four DSE constraints that Part III inherits

These are not caveats appended at the end. They are the operating conditions, and every remaining chapter of Part III is written under them.

**1. Circuit breakers truncate the true range.** A session that closes locked at the limit did not finish discovering its price. The candle it produces is an artefact of the band, not of supply and demand: a lock at the open produces a body of zero — an artificial doji on the most violent day of the sample — and a run into the limit produces an artificial marubozu. Any pattern vocabulary imported from a US textbook assumes prices could have gone further and chose not to. On a DSE limit day, they could not.

**2. The floor-price episodes did not produce price data.** During the periods when administrative floors were in force, a large share of listed names printed the same price for weeks with negligible volume. Those flat lines are the record of a rule, not of a market. **They must be excluded from any indicator lookback**, because a moving average, an ATR or an RSI computed across them returns a number that describes the regulation. This is the same lesson as Chapter 6, arriving now as a data-hygiene problem.

**3. Thin free float distorts patterns.** Chapter 8's effective-names test applies again. Where the tradable float is small, ordinary order flow creates gaps, single-print sessions, and "breakouts" on volume that would not move a liquid stock by a tick. Patterns require participants; a chart of a stock with fifty active holders is not a chart of a crowd.

**4. There is no reliable short side.** Without a functioning securities-borrowing market, a bearish pattern cannot be traded as an entry. **On the DSE, bearish technical signals are exit and position-sizing information, not trade ideas.** This halves the practical utility of a large part of the classical pattern literature, and any chapter that pretends otherwise is teaching you a market you do not have access to.

Hold those four in mind through everything that follows. **The tools in Part III are sound; the data they run on is not automatically sound, and the first job of a DSE technician is to prepare the series before indicating on it.**`,
      bn: `দ্বিতীয় খণ্ডের সতেরোটি অধ্যায় একটি প্রশ্ন করেছে: **এই ব্যবসার মূল্য কত?** তৃতীয় খণ্ড ভিন্ন একটি প্রশ্ন করে, আর শুরুতেই বলা দরকার যে এটি একটি *ছোট* প্রশ্ন। সহজ নয় — ছোট।

### একটি প্রাইস চার্ট আসলে কী

প্রাইস চার্ট একটি রেকর্ড। এর বেশি কিছু নয়।

এর প্রতিটি বিন্দু এমন একটি দাম যেখানে একজন ক্রেতা ও একজন বিক্রেতা সত্যিই, পরিমাণসহ, একটি নির্দিষ্ট মুহূর্তে সম্মত হয়েছেন। এটি **সম্পন্ন লেনদেনের ঐকমত্য** — প্রতিটি মৌলিক মতামত, প্রতিটি গুজব, প্রতিটি বাধ্যতামূলক মার্জিন লিকুইডেশন ও প্রতিটি স্পনসরের নিঃশব্দ সঞ্চয়ের নিষ্পন্ন ফলাফল, প্রতি সেশনে একটি সংখ্যায় সংকুচিত।

এটি সত্যিই একটি মূল্যবান বস্তু। বাজারে এটিই একমাত্র ডেটাসেট যা সম্পূর্ণ, সময়-চিহ্নিত, অসংশোধিত এবং ব্যবস্থাপনার বিবেচনামুক্ত। **অধ্যায় ২৪ পুরোটা সময় ব্যয় করেছে বার্ষিক প্রতিবেদন কীভাবে বিভ্রান্ত করতে পারে তা নিয়ে। চার্ট কী লেনদেন হয়েছে সে বিষয়ে আপনাকে বিভ্রান্ত করতে পারে না** — কেবল তার অর্থ নিয়ে পারে।

কিন্তু চার্ট যা *নয়* তা লক্ষ করুন। এটি পূর্বাভাস নয়। অতীতে ইতিমধ্যেই নেই এমন কোনো ভবিষ্যৎ তথ্য এতে নেই। যিনি বলেন চার্ট "ভবিষ্যদ্বাণী করে", তিনি হয় কিছু বিক্রি করছেন, নয়তো বিষয়টি নিয়ে ভাবেননি। সৎ দাবিটি সংকীর্ণতর এবং অনেক বেশি কার্যকর:

**দামের ইতিহাস এখন যেমন দেখাচ্ছে, ঐতিহাসিকভাবে তার পর কী ঘটেছে — এবং কত বার?**

এটি একটি নমুনার ওপর শর্তাধীন সম্ভাব্যতা। এটি বৈধ পরিসংখ্যানিক প্রশ্ন। এটি এমন একটি প্রশ্নও যার ভুলের হার আছে, নমুনা-আকারের সমস্যা আছে ও সারভাইভারশিপ সমস্যা আছে, আর তৃতীয় খণ্ড এই তিনটিকেই বারবার নাম ধরে ডাকবে।

### কেন এটি দ্বিতীয় খণ্ডের পরে আসে, আগে নয়

অধ্যায় ২৫ একটি মৌলিক স্কোরকার্ড গড়েছে: কঠিন গেট, ভারিত ফ্যাক্টর, আর আপনি যে ব্যবসাগুলোর মালিক হতে রাজি তার ক্রমতালিকা। ঐ স্কোরকার্ড **কী** প্রশ্নের উত্তর দেয়।

এটি **কখন** প্রশ্নের উত্তর দেয় না। অধ্যায় ২৫-এর প্রতিটি গেট উত্তীর্ণ একটি কোম্পানি তবুও এমন যেকোনো দামের ৪০% ওপরে থাকতে পারে যেখানে তার মালিক হওয়া যুক্তিসঙ্গত, আর দুই বছর সেখানেই থাকতে পারে। উল্টোদিকে স্কোরকার্ডে বাতিল একটি নাম গুজবে ৩০০% বাড়তে পারে, আর যত সঠিক মৌলিক কাজই করুন তা আপনাকে বলবে না ঐ উত্থান কখন নিঃশেষ হবে।

**টেকনিক্যাল অ্যানালাইসিস উত্তর দেয় কখন। ফান্ডামেন্টাল অ্যানালাইসিস উত্তর দেয় কী। কোনোটি অন্যটির বিকল্প নয়, আর বিকল্প বানানোর ব্যর্থতাগুলো প্রতিসম:**

| প্রতিস্থাপন | ব্যর্থতার ধরন |
|---|---|
| মৌলিক বিশ্লেষণ ছাড়া চার্ট | আপনি এমন কোম্পানির ব্রেকআউট কিনলেন যার নিরীক্ষক ডিসক্লেইমার দিয়েছেন। প্যাটার্নটি সত্য ছিল; কোম্পানিটি নয়। |
| চার্ট ছাড়া মৌলিক বিশ্লেষণ | ব্যবসা নিয়ে আপনি ঠিক, প্রবেশ নিয়ে ভুল, আর আপনি এমন ৫৫% ড্রডাউন সহ্য করলেন যা একটি স্টপ এড়াতে পারত। |

এই বইয়ের সঠিক ক্রম: **অধ্যায় ২৫ ইউনিভার্স নির্ধারণ করে। তৃতীয় খণ্ড ঐ ইউনিভার্সের ভেতরে সময় নির্ধারণ করে।** স্কোরকার্ড যে নাম বাতিল করেছে চার্টকে কখনো তা যোগ করার অনুমতি দেওয়া হয় না।

### একই ডেটা আঁকার চারটি উপায়

অন্তর্নিহিত ডেটা সবসময় প্রতি সেশনে একই পাঁচটি সংখ্যা: open, high, low, close, volume। উপস্থাপনাগুলো আলাদা হয় কী বাদ দেয় তাতে।

**লাইন চার্ট** — কেবল ক্লোজ আঁকে। ইন্ট্রাডে রেঞ্জ সম্পূর্ণ বাদ দেয়। এটি ত্রুটি নয়, বৈশিষ্ট্য: ক্লোজ হলো দিনের হইচইয়ের পর বাজারের মতামত যেখানে থিতু হলো, আর পাতলা ডিএসই শেয়ারে ইন্ট্রাডে প্রিন্টগুলো বেশিরভাগই হইচই। **ডিএসই শেয়ারের পাঁচ বছরের দৃশ্যে সাপ্তাহিক ক্লোজের লাইন চার্ট প্রায়ই সবচেয়ে সৎ ছবি।**

**বার চার্ট (OHLC)** — লো থেকে হাই পর্যন্ত একটি উল্লম্ব দণ্ড, ওপেন ও ক্লোজের জন্য টিক চিহ্নসহ। সবকিছু রাখে। দৃশ্যত ঘন; পঞ্চাশটি বারজুড়ে প্যাটার্ন পড়া কঠিন।

**ক্যান্ডেলস্টিক** — একই চারটি সংখ্যা, একটি বডি (ওপেন-থেকে-ক্লোজ) ও উইক (হাই ও লো পর্যন্ত) হিসেবে আঁকা, দিক অনুযায়ী রঙিন। তথ্য OHLC বারের অভিন্ন; *এনকোডিং* উন্নততর, কারণ চোখ দুটি টিক চিহ্নের চেয়ে একটি ভরাট বডি দ্রুত পড়ে। অধ্যায় ২৭–২৯-এ ক্যান্ডেলস্টিকই ডিফল্ট।

**পয়েন্ট-অ্যান্ড-ফিগার** — সময় সম্পূর্ণ বাদ দেয় এবং কেবল নির্দিষ্ট বক্স আকারের ওপরের দাম চলাচল আঁকে, নির্দিষ্ট রিভার্সাল সীমার পর কলাম বদলায়। সময় অক্ষ না থাকায় শূন্য-ভলিউমের ধারাবাহিক সেশন একে বিকৃত করতে পারে না। **অতরল ডিএসই নামে এটি সত্যিকারের সুবিধা, আর এখানে P&F মারাত্মকভাবে কম ব্যবহৃত।**

### অ্যারিথমেটিক বনাম লগারিদমিক স্কেল

অ্যারিথমেটিক স্কেলে সমান উল্লম্ব দূরত্ব সমান টাকার অঙ্ক বোঝায়। লগারিদমিক স্কেলে সমান উল্লম্ব দূরত্ব সমান *শতাংশ* পরিবর্তন বোঝায়।

যে শেয়ার আট বছরে ২০ টাকা থেকে ২০০ টাকায় গেছে, তার অ্যারিথমেটিক চার্ট প্রায় অকেজো। প্রথম দ্বিগুণ — ২০ থেকে ৪০, ১০০% লাভ — অক্ষের এক চিলতে জায়গা নেয়। শেষ ধাপ, ১৮০ থেকে ২০০, ১১% লাভ, আর একই উল্লম্ব জায়গা নেয়। **অ্যারিথমেটিক চার্ট প্রাথমিক কম্পাউন্ডিংকে অদৃশ্য করে আর শেষের চলাচলকে নাটকীয় দেখায়। এটি ব্যবস্থাগতভাবে আপনার প্রকৃত অর্জিত রিটার্নকে ভুলভাবে দেখায়।**

$$r_{\\log} = \\ln\\!\\left(\\frac{P_t}{P_{t-1}}\\right)$$

লগ রিটার্ন যোগও হয়: একটি সময়কালের দৈনিক লগ রিটার্নের যোগফল পুরো সময়কালের লগ রিটার্নের সমান, যা সরল শতাংশ রিটার্ন করে না। ঐ একটি ধর্মের কারণেই তৃতীয় খণ্ডের প্রতিটি গুরুতর ভোলাটিলিটি ও ট্রেন্ড গণনা শতাংশ পরিবর্তনের বদলে লগ রিটার্নে চলে।

**নিয়ম: প্রায় আঠারো মাসের বেশি বিস্তৃত, বা ১০০%-এর বেশি চলাচল ঢাকা যেকোনো চার্ট লগ স্কেলে আঁকা হয়। তার নিচে খুব একটা যায় আসে না।** অ্যারিথমেটিক বহু-বছরের চার্টে আঁকা ট্রেন্ডলাইন একটি বিকৃত অক্ষের ওপর আঁকা এবং আপনি যে ট্রেন্ডলাইন ভাবছেন সেটি নয়।

### টাইমফ্রেম

**ডেইলিই ডিফল্ট।** প্রতি সেশনে একটি বার, প্রতি সেশনে একটি সিদ্ধান্ত। ডিএসই ডেটা যে সবচেয়ে ছোট টাইমফ্রেমে নির্ভরযোগ্য এটি তাই, আর বেশিরভাগ খুচরা অংশগ্রহণকারী যে সবচেয়ে বড় টাইমফ্রেমে সত্যিই কাজ করতে পারেন তাও এটি।

**উইকলি ট্রেন্ডের জন্য।** বছরে বায়ান্নটি বার ডেইলিতে ভুয়া সংকেত তৈরি করা বেশিরভাগ হইচই সরিয়ে দেয়। উইকলি ও ডেইলি অমিল হলে সাধারণত উইকলিকেই বিশ্বাস করতে হয় আর ডেইলি দিয়ে সময় ঠিক করতে হয়।

**ডিএসই-তে ইন্ট্রাডে একটি ফাঁদ, আর কারণটি কাঠামোগত, পছন্দের নয়।** যে নাম এক সেশনে ৯৫,০০০ শেয়ার লেনদেন করে তা ৩০০টি অর্থবহ পাঁচ-মিনিটের বার তৈরি করে না — সম্ভবত কুড়িটি বারে লেনদেন থাকে আর ২৮০টি শেষ প্রিন্টের পুনরাবৃত্তি করে। ঐ সিরিজে গণিত যেকোনো ইন্ডিকেটর প্যাটার্নের উপস্থিতি নয়, লেনদেনের অনুপস্থিতি মাপছে। ইন্ট্রাডে গুটিকয়েক সত্যিকারের তরল নামের জন্য রাখুন, আর তখনও সন্দেহ নিয়ে দেখুন।

### ভলিউম কী যোগ করে

দাম বলে ঐকমত্য কোথায় থিতু হলো। **ভলিউম বলে তা থিতু করতে কতজন জড়িত ছিলেন।**

৪২,০০০ শেয়ারে ৯.৯% অগ্রগতি আর ১১,৮০,০০০ শেয়ারে ৯.৯% অগ্রগতি প্রাইস চার্টে একই রেখা এবং সম্পূর্ণ আলাদা ঘটনা। প্রথমটি পাতলা বইয়ে গুটিকয়েক অংশগ্রহণকারীর নিজেদের মধ্যে লেনদেন করেই তৈরি হতে পারে। দ্বিতীয়টির জন্য প্রকৃত পুঁজিকে মত বদলাতে হয়েছে।

তাই ভলিউম একটি *নিশ্চিতকরণ* চলক, কখনো একা সংকেত নয়। অধ্যায় ৩০ এটি যথাযথভাবে গড়ে তোলে। আপাতত: **ভলিউম দিয়ে সমর্থন করতে পারেন না এমন যেকোনো দাম চলাচল আপনি যাচাই করেননি।**

### তৃতীয় খণ্ড যে চারটি ডিএসই সীমাবদ্ধতা উত্তরাধিকারসূত্রে পায়

এগুলো শেষে জোড়া সতর্কবাণী নয়। এগুলো পরিচালন শর্ত, আর তৃতীয় খণ্ডের বাকি প্রতিটি অধ্যায় এদের অধীনে লেখা।

**১. সার্কিট ব্রেকার প্রকৃত রেঞ্জ কেটে দেয়।** যে সেশন সীমায় আটকে বন্ধ হয় সে তার দাম আবিষ্কার শেষ করেনি। এটি যে ক্যান্ডেল তৈরি করে তা চাহিদা-সরবরাহের নয়, ব্যান্ডের কৃত্রিম ফল: ওপেনেই লক হলে বডি শূন্য হয় — নমুনার সবচেয়ে হিংস্র দিনে একটি কৃত্রিম doji — আর সীমার দিকে ছুটলে কৃত্রিম marubozu হয়। মার্কিন পাঠ্যবই থেকে আমদানি করা যেকোনো প্যাটার্ন শব্দভাণ্ডার ধরে নেয় দাম আরও যেতে *পারত* কিন্তু যায়নি। ডিএসই-র সীমা-দিনে পারত না।

**২. ফ্লোর-প্রাইস পর্বগুলো প্রাইস ডেটা তৈরি করেনি।** যে সময়ে প্রশাসনিক ফ্লোর কার্যকর ছিল, তালিকাভুক্ত নামের বড় অংশ সপ্তাহের পর সপ্তাহ নগণ্য ভলিউমে একই দাম প্রিন্ট করেছে। ঐ সমতল রেখা একটি বিধির রেকর্ড, বাজারের নয়। **যেকোনো ইন্ডিকেটর লুকব্যাক থেকে এগুলো বাদ দিতে হবে**, কারণ এদের ওপর গণিত মুভিং অ্যাভারেজ, ATR বা RSI এমন একটি সংখ্যা দেয় যা নিয়ন্ত্রণকে বর্ণনা করে। এটি অধ্যায় ৬-এরই শিক্ষা, এবার ডেটা-পরিচ্ছন্নতার সমস্যা হিসেবে আসছে।

**৩. পাতলা ফ্রি ফ্লোট প্যাটার্ন বিকৃত করে।** অধ্যায় ৮-এর কার্যকর-নামের পরীক্ষা আবার প্রযোজ্য। যেখানে লেনদেনযোগ্য ফ্লোট ছোট, সেখানে সাধারণ অর্ডার প্রবাহই গ্যাপ, একক-প্রিন্ট সেশন এবং এমন ভলিউমে "ব্রেকআউট" তৈরি করে যা তরল শেয়ারকে এক টিকও নড়াত না। প্যাটার্নের জন্য অংশগ্রহণকারী লাগে; পঞ্চাশজন সক্রিয় ধারকের শেয়ারের চার্ট কোনো জনতার চার্ট নয়।

**৪. নির্ভরযোগ্য শর্ট সাইড নেই।** কার্যকর সিকিউরিটিজ-ধার বাজার ছাড়া কোনো বিয়ারিশ প্যাটার্নকে প্রবেশ হিসেবে ট্রেড করা যায় না। **ডিএসই-তে বিয়ারিশ টেকনিক্যাল সংকেত প্রস্থান ও পজিশন-সাইজিংয়ের তথ্য, ট্রেড আইডিয়া নয়।** এটি ধ্রুপদী প্যাটার্ন সাহিত্যের বড় অংশের ব্যবহারিক উপযোগিতা অর্ধেক করে দেয়, আর যে অধ্যায় এর উল্টো ভান করে তা আপনাকে এমন বাজার শেখাচ্ছে যেখানে আপনার প্রবেশাধিকার নেই।

পরবর্তী সবকিছুর মধ্যে এই চারটি মনে রাখুন। **তৃতীয় খণ্ডের হাতিয়ারগুলো সঠিক; এরা যে ডেটায় চলে তা স্বয়ংক্রিয়ভাবে সঠিক নয়, আর একজন ডিএসই টেকনিশিয়ানের প্রথম কাজ ইন্ডিকেট করার আগে সিরিজটি প্রস্তুত করা।**`,
    },

    simple: {
      en: `Think of a chart the way you think of a shop's sales register.

The register does not tell you what tomorrow's sales will be. It tells you, exactly and without argument, what was actually sold and at what price. That is all a price chart is: a register of completed trades.

**Nobody wrote it. Nobody can revise it.** The annual report is written by the company. The newspaper article is written by a journalist. The chart is written by the market itself, one transaction at a time, and it cannot be edited afterwards.

### What each session records

For every trading day the exchange records five things: the first price (open), the highest price, the lowest price, the last price (close), and how many shares changed hands (volume).

Draw those five numbers as a small vertical figure — a candle — and you can see the whole day at a glance: where it started, where it ended, and how far it swung in between. Put 200 of those side by side and you have a chart.

### The one thing beginners get backwards

Most people come to charts hoping for a machine that says "this will go up."

There is no such machine. What charts can honestly do is much smaller: **look at what the price has done, find times in the past when it looked similar, and report what tended to happen afterwards — and how often it was wrong.**

That last part is the whole discipline. A pattern that works six times out of ten is a good pattern. Anyone who tells you a pattern works nine times out of ten has not counted the failures.

### Why we did seventeen chapters of company analysis first

Because a chart tells you nothing about whether a business is real.

Part II taught you to check the accounts, the auditor, the sponsor holding, the debt. That work answers **which companies are worth owning at all**. A chart answers **when to buy one of them**. If you skip the first question, the chart will happily give you a beautiful entry signal on a company that is quietly insolvent.

Both jobs, in that order. Never one instead of the other.

### Three things about our market you must accept early

**Prices are not allowed to move more than a set percentage in one day.** When a stock hits that wall, trading stops moving the price. The candle it draws is a picture of the rule, not of the buyers and sellers. Sometimes the flattest-looking day is the most violent one.

**Some stocks barely trade.** If a share changes hands 3,000 times in a whole session, the chart is drawing a line through almost nothing. Patterns need crowds. A chart of a stock with almost no participants is not a picture of a crowd's behaviour.

**You cannot bet on prices falling here.** In markets with short selling, a bearish pattern is a trade. On the DSE it is not — there is no reliable way to profit from a decline. So when a chart turns bearish, the correct response is *sell what you own or take less risk*, never *go short*. Keep that straight and half the imported chart literature stops misleading you.`,
      bn: `চার্টকে ভাবুন একটি দোকানের বিক্রয় খাতার মতো।

খাতা আপনাকে বলে না আগামীকাল কত বিক্রি হবে। এটি হুবহু এবং তর্কাতীতভাবে বলে কী সত্যিই বিক্রি হয়েছে ও কত দামে। প্রাইস চার্ট ঠিক এটুকুই: সম্পন্ন লেনদেনের খাতা।

**কেউ এটি লেখেনি। কেউ এটি সংশোধন করতে পারে না।** বার্ষিক প্রতিবেদন কোম্পানি লেখে। সংবাদপত্রের নিবন্ধ সাংবাদিক লেখেন। চার্ট লেখে বাজার নিজেই, একটি করে লেনদেনে, আর পরে তা সম্পাদনা করা যায় না।

### প্রতিটি সেশন কী লিপিবদ্ধ করে

প্রতি লেনদেন দিবসে এক্সচেঞ্জ পাঁচটি জিনিস রাখে: প্রথম দাম (open), সর্বোচ্চ দাম, সর্বনিম্ন দাম, শেষ দাম (close), আর কত শেয়ার হাতবদল হলো (volume)।

ঐ পাঁচটি সংখ্যা একটি ছোট উল্লম্ব আকৃতিতে আঁকুন — একটি ক্যান্ডেল — আর আপনি এক নজরে পুরো দিনটি দেখতে পাবেন: কোথায় শুরু, কোথায় শেষ, আর মাঝে কতটা দুলল। এমন ২০০টি পাশাপাশি রাখলে একটি চার্ট হয়।

### নতুনরা যে একটি জিনিস উল্টো বোঝেন

বেশিরভাগ মানুষ চার্টে আসেন এমন একটি যন্ত্রের আশায় যা বলবে "এটি বাড়বে।"

এমন কোনো যন্ত্র নেই। চার্ট সৎভাবে যা করতে পারে তা অনেক ছোট: **দাম কী করেছে দেখা, অতীতে যখন একই রকম দেখাত সেই সময়গুলো বের করা, এবং জানানো তারপর সাধারণত কী ঘটত — আর কতবার তা ভুল হয়েছে।**

শেষ অংশটিই পুরো শৃঙ্খলা। যে প্যাটার্ন দশবারে ছয়বার কাজ করে তা ভালো প্যাটার্ন। যিনি বলেন কোনো প্যাটার্ন দশবারে নয়বার কাজ করে, তিনি ব্যর্থতাগুলো গোনেননি।

### কেন আগে সতেরো অধ্যায় কোম্পানি বিশ্লেষণ করলাম

কারণ চার্ট আপনাকে বলে না ব্যবসাটি আসল কি না।

দ্বিতীয় খণ্ড শিখিয়েছে হিসাব, নিরীক্ষক, স্পনসরের ধারণ, ঋণ যাচাই করতে। ঐ কাজ উত্তর দেয় **কোন কোম্পানিগুলোর আদৌ মালিক হওয়ার যোগ্য**। চার্ট উত্তর দেয় **তাদের একটি কখন কিনতে হবে**। প্রথম প্রশ্নটি এড়ালে চার্ট আনন্দের সঙ্গেই আপনাকে এমন কোম্পানিতে সুন্দর প্রবেশ সংকেত দেবে যা নিঃশব্দে দেউলিয়া।

দুটো কাজই, ঐ ক্রমে। কখনো একটির বদলে অন্যটি নয়।

### আমাদের বাজার সম্পর্কে তিনটি জিনিস তাড়াতাড়ি মেনে নিন

**দাম একদিনে নির্দিষ্ট শতাংশের বেশি নড়তে পারে না।** কোনো শেয়ার ঐ দেয়ালে ঠেকলে লেনদেন আর দাম নড়ায় না। এটি যে ক্যান্ডেল আঁকে তা নিয়মের ছবি, ক্রেতা-বিক্রেতার নয়। কখনো সবচেয়ে সমতল দেখতে দিনটিই সবচেয়ে হিংস্র।

**কিছু শেয়ার প্রায় লেনদেনই হয় না।** একটি শেয়ার যদি পুরো সেশনে ৩,০০০ বার হাতবদল হয়, চার্ট প্রায় কিছুই না থাকার মধ্য দিয়ে রেখা টানছে। প্যাটার্নের জন্য জনতা লাগে। প্রায় অংশগ্রহণকারীহীন শেয়ারের চার্ট কোনো জনতার আচরণের ছবি নয়।

**এখানে দাম পড়ার ওপর বাজি ধরা যায় না।** শর্ট সেলিং আছে এমন বাজারে বিয়ারিশ প্যাটার্ন একটি ট্রেড। ডিএসই-তে নয় — পতন থেকে মুনাফা করার নির্ভরযোগ্য উপায় নেই। তাই চার্ট বিয়ারিশ হলে সঠিক প্রতিক্রিয়া হলো *যা আছে বিক্রি করা বা কম ঝুঁকি নেওয়া*, কখনোই *শর্ট করা* নয়। এটি পরিষ্কার রাখলে আমদানি করা চার্ট সাহিত্যের অর্ধেক আপনাকে আর বিভ্রান্ত করবে না।`,
    },

    example: {
      en: `### Ten sessions of a mid-cap DSE name

A stock we will call **MIDCO** — a genuine DSE-listed mid-cap profile, figures illustrative. Prior close before Day 1 was BDT 48.20. Assume a ±10% daily band and a BDT 0.10 tick.

| Day | Open | High | Low | Close | Volume | PrevC | LimitUp | LimitDn |
|---|---|---|---|---|---|---|---|---|
| 1 | 48.50 | 49.80 | 48.10 | 49.60 | 412,000 | 48.20 | 53.00 | 43.40 |
| 2 | 50.00 | 54.50 | 49.90 | **54.50** | 1,180,000 | 49.60 | **54.50** | 44.70 |
| 3 | 59.90 | 59.90 | 59.90 | **59.90** | 42,000 | 54.50 | **59.90** | 49.10 |
| 4 | 59.00 | 59.50 | 54.10 | 55.20 | 1,540,000 | 59.90 | 65.80 | 54.00 |
| 5 | 54.00 | 54.20 | 49.70 | **49.70** | 980,000 | 55.20 | 60.70 | **49.70** |
| 6 | 50.10 | 51.00 | 49.20 | 50.40 | 620,000 | 49.70 | 54.60 | 44.80 |
| 7 | 50.50 | 50.90 | 50.00 | 50.20 | 95,000 | 50.40 | 55.40 | 45.40 |
| 8 | 50.20 | 50.20 | 50.20 | 50.20 | **3,000** | 50.20 | 55.20 | 45.20 |
| 9 | 50.30 | 51.60 | 50.10 | 51.30 | 430,000 | 50.20 | 55.20 | 45.20 |
| 10 | 51.40 | 52.30 | 50.80 | 51.00 | 380,000 | 51.30 | 56.40 | 46.10 |

Ten sessions. The stock went from 48.20 to 51.00 — a 5.6% gain that a line chart would render as a modest upward drift. **Four of these ten sessions are not price data in any useful sense.**

### Session 3 is the one to look at

Open 59.90. High 59.90. Low 59.90. Close 59.90. Volume 42,000.

Drawn as a candlestick, Day 3 is a **perfect doji with no wicks** — the textbook symbol of indecision, of buyers and sellers in exact balance.

It is nothing of the sort. Day 3 was a **+9.9% move**. The stock gapped straight to its upper circuit at the open and never traded anywhere else. There was no indecision; there was a queue of buyers and no sellers, and the exchange's band stopped the price from going where it was heading.

**The naive daily range on the most violent session of the sample is zero.** That is the single most important sentence in this chapter.

$$\\text{Range}_3 = 59.90 - 59.90 = 0.00, \\qquad TR_3 = |59.90 - 54.50| = 5.40$$

True range, which incorporates the gap from the previous close, recovers the move. The high-minus-low definition does not. **Every volatility measure in Part III uses true range, and this is why.**

### And session 8 is the opposite failure

Day 8: also open = high = low = close, also a zero-range doji. But volume was 3,000 shares, and the price is nowhere near either circuit.

This is not indecision either. **It is one trade.** Somebody sold 3,000 shares at the previous close and nobody else did anything all day. The candle is drawing a picture of an empty room.

Both Day 3 and Day 8 produce identical-looking candles. One is a violent move truncated by a rule; the other is the absence of a market. **A pattern-recognition routine that does not separate them will find "indecision" in both and be wrong twice.**

### What volume tells you that price does not

Compare Day 2 and Day 3. Both closed at the upper limit. Both look like the same event on a price chart.

| | Day 2 | Day 3 |
|---|---|---|
| Close | limit up | limit up |
| Log return | +9.42% | +9.45% |
| Volume | 1,180,000 | 42,000 |
| Volume vs Day 2 | — | **3.6%** |

Day 2's limit-up absorbed 1,180,000 shares. Real capital moved. Day 3's limit-up moved the price by the same amount on **3.6% of that volume** — a handful of lots hitting a book that had no offers in it.

Then Day 4 arrives: 1,540,000 shares, the highest volume of the sample, and the stock falls 8.2% from 59.90 to 55.20. **The Day 3 advance was not accumulation; it was an air pocket, and Day 4 is what filling it looks like.** Volume is the only variable in the table that told you which of Day 2 and Day 3 was real.

### The cost of not preparing the data

Suppose you compute a 10-day ATR on this series without flagging anything, and use it to size a position at 2% risk per trade.

| Measure | All 10 sessions | Clean 6 sessions |
|---|---|---|
| Average true range | **2.90** | **2.20** |
| Daily σ of log returns | 6.39% | 4.02% |
| Annualised volatility | **~101%** | **~64%** |

The contaminated ATR is **1.32× the clean one — 32% higher**. Size a position off 2.90 when the stock's undisturbed range is 2.20 and you will set a stop 32% wider than the stock's actual behaviour warrants, and take a correspondingly smaller position. Over a year of trades that is a material drag, produced entirely by a data-hygiene failure.

**Be honest about the other direction too.** Excluding limit days also removes genuine information — a limit-up *is* a large move, and a system that never sees them will underestimate tail risk. Neither number is "the truth." The full-sample figure measures the exchange's band as much as the stock; the clean figure estimates what the stock does when it is permitted to move.

**The discipline is not to pick one. It is to compute both, know which you are using, and say so.** On this sample, 40% of the sessions were unusable as indicator input — and that fraction is itself the most useful thing the preparation step produced.`,
      bn: `### একটি মিড-ক্যাপ ডিএসই নামের দশটি সেশন

যে শেয়ারটিকে আমরা **MIDCO** বলব — একটি প্রকৃত ডিএসই মিড-ক্যাপ প্রোফাইল, সংখ্যাগুলো দৃষ্টান্তমূলক। দিন ১-এর আগের ক্লোজ ছিল ৪৮.২০ টাকা। ±১০% দৈনিক ব্যান্ড ও ০.১০ টাকা টিক ধরুন।

| দিন | Open | High | Low | Close | Volume | PrevC | LimitUp | LimitDn |
|---|---|---|---|---|---|---|---|---|
| ১ | ৪৮.৫০ | ৪৯.৮০ | ৪৮.১০ | ৪৯.৬০ | ৪,১২,০০০ | ৪৮.২০ | ৫৩.০০ | ৪৩.৪০ |
| ২ | ৫০.০০ | ৫৪.৫০ | ৪৯.৯০ | **৫৪.৫০** | ১১,৮০,০০০ | ৪৯.৬০ | **৫৪.৫০** | ৪৪.৭০ |
| ৩ | ৫৯.৯০ | ৫৯.৯০ | ৫৯.৯০ | **৫৯.৯০** | ৪২,০০০ | ৫৪.৫০ | **৫৯.৯০** | ৪৯.১০ |
| ৪ | ৫৯.০০ | ৫৯.৫০ | ৫৪.১০ | ৫৫.২০ | ১৫,৪০,০০০ | ৫৯.৯০ | ৬৫.৮০ | ৫৪.০০ |
| ৫ | ৫৪.০০ | ৫৪.২০ | ৪৯.৭০ | **৪৯.৭০** | ৯,৮০,০০০ | ৫৫.২০ | ৬০.৭০ | **৪৯.৭০** |
| ৬ | ৫০.১০ | ৫১.০০ | ৪৯.২০ | ৫০.৪০ | ৬,২০,০০০ | ৪৯.৭০ | ৫৪.৬০ | ৪৪.৮০ |
| ৭ | ৫০.৫০ | ৫০.৯০ | ৫০.০০ | ৫০.২০ | ৯৫,০০০ | ৫০.৪০ | ৫৫.৪০ | ৪৫.৪০ |
| ৮ | ৫০.২০ | ৫০.২০ | ৫০.২০ | ৫০.২০ | **৩,০০০** | ৫০.২০ | ৫৫.২০ | ৪৫.২০ |
| ৯ | ৫০.৩০ | ৫১.৬০ | ৫০.১০ | ৫১.৩০ | ৪,৩০,০০০ | ৫০.২০ | ৫৫.২০ | ৪৫.২০ |
| ১০ | ৫১.৪০ | ৫২.৩০ | ৫০.৮০ | ৫১.০০ | ৩,৮০,০০০ | ৫১.৩০ | ৫৬.৪০ | ৪৬.১০ |

দশটি সেশন। শেয়ারটি ৪৮.২০ থেকে ৫১.০০-তে গেল — ৫.৬% লাভ, যা লাইন চার্টে একটি মৃদু ঊর্ধ্বমুখী প্রবাহ হিসেবে দেখাত। **এই দশটির চারটি সেশন কোনো কার্যকর অর্থেই প্রাইস ডেটা নয়।**

### সেশন ৩-ই দেখার মতো

Open ৫৯.৯০। High ৫৯.৯০। Low ৫৯.৯০। Close ৫৯.৯০। Volume ৪২,০০০।

ক্যান্ডেলস্টিক হিসেবে আঁকলে দিন ৩ একটি **উইকহীন নিখুঁত doji** — দ্বিধার পাঠ্যপুস্তকীয় প্রতীক, ক্রেতা-বিক্রেতার হুবহু ভারসাম্য।

এটি মোটেও তা নয়। দিন ৩ ছিল **+৯.৯% চলাচল**। শেয়ারটি ওপেনেই সরাসরি তার ঊর্ধ্ব সার্কিটে গ্যাপ করে আর কোথাও লেনদেন হয়নি। কোনো দ্বিধা ছিল না; ছিল ক্রেতাদের সারি আর কোনো বিক্রেতা নেই, আর এক্সচেঞ্জের ব্যান্ড দামকে তার গন্তব্যে যেতে দেয়নি।

**নমুনার সবচেয়ে হিংস্র সেশনে সরল দৈনিক রেঞ্জ শূন্য।** এই অধ্যায়ের সবচেয়ে গুরুত্বপূর্ণ বাক্য এটিই।

$$\\text{Range}_3 = 59.90 - 59.90 = 0.00, \\qquad TR_3 = |59.90 - 54.50| = 5.40$$

True range, যা আগের ক্লোজ থেকে গ্যাপকে ধরে, চলাচলটি পুনরুদ্ধার করে। high-বিয়োগ-low সংজ্ঞা করে না। **তৃতীয় খণ্ডের প্রতিটি ভোলাটিলিটি পরিমাপ true range ব্যবহার করে, আর কারণ এটিই।**

### আর সেশন ৮ বিপরীত ব্যর্থতা

দিন ৮: এখানেও open = high = low = close, এখানেও শূন্য-রেঞ্জের doji। কিন্তু ভলিউম ছিল ৩,০০০ শেয়ার, আর দাম কোনো সার্কিটের ধারেকাছেও নেই।

এটিও দ্বিধা নয়। **এটি একটি লেনদেন।** কেউ আগের ক্লোজে ৩,০০০ শেয়ার বিক্রি করেছেন আর সারাদিন আর কেউ কিছু করেননি। ক্যান্ডেলটি একটি খালি ঘরের ছবি আঁকছে।

দিন ৩ ও দিন ৮ দুটোই অভিন্ন দেখতে ক্যান্ডেল তৈরি করে। একটি নিয়মে কাটা পড়া হিংস্র চলাচল; অন্যটি বাজারের অনুপস্থিতি। **যে প্যাটার্ন-শনাক্তকরণ রুটিন এদের আলাদা করে না, সে দুটোতেই "দ্বিধা" পাবে এবং দুবারই ভুল হবে।**

### ভলিউম যা বলে, দাম যা বলে না

দিন ২ ও দিন ৩ তুলনা করুন। দুটোই ঊর্ধ্বসীমায় বন্ধ হয়েছে। প্রাইস চার্টে দুটোকেই একই ঘটনা দেখায়।

| | দিন ২ | দিন ৩ |
|---|---|---|
| ক্লোজ | limit up | limit up |
| লগ রিটার্ন | +৯.৪২% | +৯.৪৫% |
| ভলিউম | ১১,৮০,০০০ | ৪২,০০০ |
| দিন ২-এর তুলনায় ভলিউম | — | **৩.৬%** |

দিন ২-এর limit-up ১১,৮০,০০০ শেয়ার শোষণ করেছে। প্রকৃত পুঁজি নড়েছে। দিন ৩-এর limit-up একই পরিমাণ দাম নড়িয়েছে **ঐ ভলিউমের ৩.৬%**-এ — গুটিকয়েক লট এমন একটি বইয়ে ঠেকেছে যাতে কোনো অফার ছিল না।

তারপর দিন ৪ আসে: ১৫,৪০,০০০ শেয়ার, নমুনার সর্বোচ্চ ভলিউম, আর শেয়ারটি ৫৯.৯০ থেকে ৫৫.২০-তে ৮.২% পড়ে। **দিন ৩-এর অগ্রগতি সঞ্চয় ছিল না; ছিল একটি বায়ুশূন্যতা, আর দিন ৪ হলো তা ভরাট হওয়ার চেহারা।** টেবিলের একমাত্র চলক যা বলেছিল দিন ২ ও দিন ৩-এর কোনটি আসল, তা ভলিউম।

### ডেটা প্রস্তুত না করার খরচ

ধরুন আপনি কিছু চিহ্নিত না করেই এই সিরিজে ১০-দিনের ATR গণনা করলেন এবং প্রতি ট্রেডে ২% ঝুঁকিতে পজিশন সাইজ করতে তা ব্যবহার করলেন।

| পরিমাপ | সব ১০ সেশন | পরিচ্ছন্ন ৬ সেশন |
|---|---|---|
| গড় true range | **২.৯০** | **২.২০** |
| লগ রিটার্নের দৈনিক σ | ৬.৩৯% | ৪.০২% |
| বার্ষিকীকৃত ভোলাটিলিটি | **~১০১%** | **~৬৪%** |

দূষিত ATR পরিচ্ছন্নটির **১.৩২ গুণ — ৩২% বেশি**। শেয়ারের অবিচলিত রেঞ্জ ২.২০ হওয়া সত্ত্বেও ২.৯০ থেকে পজিশন সাইজ করলে আপনি শেয়ারের প্রকৃত আচরণের প্রয়োজনের চেয়ে ৩২% চওড়া স্টপ বসাবেন, আর সেই অনুপাতে ছোট পজিশন নেবেন। এক বছরের ট্রেডে এটি উল্লেখযোগ্য টান, সম্পূর্ণভাবে একটি ডেটা-পরিচ্ছন্নতার ব্যর্থতায় তৈরি।

**উল্টো দিকটাও সৎভাবে বলুন।** সীমা-দিন বাদ দিলে প্রকৃত তথ্যও বাদ পড়ে — একটি limit-up সত্যিই একটি বড় চলাচল, আর যে সিস্টেম কখনো এগুলো দেখে না সে টেইল ঝুঁকি কম আঁচ করবে। কোনো সংখ্যাই "সত্য" নয়। পূর্ণ-নমুনার সংখ্যা শেয়ারের মতোই এক্সচেঞ্জের ব্যান্ড মাপে; পরিচ্ছন্ন সংখ্যা আঁচ করে শেয়ারটি নড়ার অনুমতি পেলে কী করে।

**শৃঙ্খলা একটি বেছে নেওয়া নয়। শৃঙ্খলা দুটোই গণনা করা, কোনটি ব্যবহার করছেন জানা, এবং তা বলা।** এই নমুনায় ৪০% সেশন ইন্ডিকেটরের উপাদান হিসেবে অব্যবহার্য ছিল — আর ঐ ভগ্নাংশটিই প্রস্তুতি ধাপের সবচেয়ে কার্যকর উৎপাদন।`,
    },

    formula: {
      en: `Six formulas. None is difficult; the discipline is in applying them **in order**, and in refusing to compute anything below line 4 on a session that line 3 has flagged.

### 1. Log return

$$r_t = \\ln\\!\\left(\\frac{C_t}{C_{t-1}}\\right)$$

Used throughout Part III in preference to the simple return $(C_t - C_{t-1})/C_{t-1}$ for one reason:

$$\\sum_{t=1}^{n} r_t = \\ln\\!\\left(\\frac{C_n}{C_0}\\right)$$

**Log returns add; percentage returns do not.** A +50% followed by a −50% is not zero, it is −25%. The log equivalents are $+0.4055$ and $-0.6931$, and they sum correctly to $-0.2877 = \\ln(0.75)$. Every volatility, trend and drawdown calculation that follows depends on this property.

### 2. True range

$$TR_t = \\max\\big(H_t - L_t,\\; |H_t - C_{t-1}|,\\; |L_t - C_{t-1}|\\big)$$

The three arguments exist to cover three cases. The first is an ordinary session. The second is a gap up — the day's low may sit far above yesterday's close and $H-L$ misses the whole jump. The third is a gap down.

**On the DSE the second and third terms are not edge cases.** A session that gaps to its limit at the open has $H - L = 0$ and a true range equal to the entire move. Chapter 39 builds ATR on top of this; it is defined here because the preparation step needs it.

### 3. Circuit bands, rounded to the tick

$$P_{up} = \\left\\lfloor \\frac{C_{t-1}(1+L)}{\\tau} \\right\\rfloor \\tau, \\qquad P_{dn} = \\left\\lceil \\frac{C_{t-1}(1-L)}{\\tau} \\right\\rceil \\tau$$

where $L$ is the slab limit from Chapter 2 and $\\tau$ is the tick size (BDT 0.10 in the sample).

**Note the rounding directions and do not reverse them.** The ceiling is rounded *down* to a tradable tick and the floor is rounded *up*, because a price between ticks cannot be quoted. Round the wrong way and your detector will miss every locked session by exactly one tick — the most common bug in DSE data-preparation code.

### 4. The exclusion flag

$$\\Phi_t = \\begin{cases} \\text{EXCLUDE} & \\text{if } C_t \\ge P_{up} \\;\\lor\\; C_t \\le P_{dn} \\;\\lor\\; H_t - L_t = 0 \\\\[4pt] \\text{OK} & \\text{otherwise} \\end{cases}$$

Three conditions, two distinct failures. The first two catch **administered prices** — the session ended where the rule stopped it, not where supply met demand. The third catches **absent markets** — a session with no range at all, which on the DSE is usually one trade or none.

Both produce a zero-body candle, and §26.3 showed that they mean opposite things. The flag does not attempt to distinguish them; it only refuses to feed either into an indicator.

### 5. Clean-sample statistics

$$\\text{ATR}^{\\text{clean}}_n = \\frac{1}{|\\mathcal{K}|}\\sum_{t \\in \\mathcal{K}} TR_t, \\qquad \\mathcal{K} = \\{t : \\Phi_t = \\text{OK}\\}$$

$$\\sigma^{\\text{clean}}_{\\text{daily}} = \\sqrt{\\frac{1}{|\\mathcal{K}|-1}\\sum_{t \\in \\mathcal{K}} (r_t - \\bar{r}_{\\mathcal{K}})^2}, \\qquad \\sigma_{\\text{ann}} = \\sigma_{\\text{daily}}\\sqrt{250}$$

The $\\sqrt{250}$ is the square-root-of-time rule and it assumes returns are independent. They are not, quite — but the alternative is an unannualised number nobody can compare, so use it and remember it is an approximation.

### 6. The two numbers that decide whether to proceed

$$\\Psi = \\frac{|\\{t : \\Phi_t = \\text{EXCLUDE}\\}|}{n} \\times 100 \\qquad \\text{(unusable fraction, \\%)}$$

$$\\Omega = \\frac{\\text{ATR}^{\\text{all}}}{\\text{ATR}^{\\text{clean}}} \\qquad \\text{(overstatement factor)}$$

$\\Psi$ answers *how much of this series is not price data*. $\\Omega$ answers *how wrong my volatility estimate would have been had I not asked*.

**Reporting thresholds, set once and applied without exception:**

| $\\Psi$ | Reading |
|---|---|
| below 10% | Sample clean enough to indicate on |
| 10% – 30% | Usable, but state the exclusion count alongside any signal |
| 30% and above | Unfit as indicator input |

Those cut-offs are conventions, not discoveries. **What matters is that they are written down before you look at a chart you want to trade** — the same discipline Chapter 25 applied to the quality floor.`,
      bn: `ছয়টি সূত্র। কোনোটিই কঠিন নয়; শৃঙ্খলা হলো এগুলো **ক্রমানুসারে** প্রয়োগ করা, এবং লাইন ৩ যে সেশনকে চিহ্নিত করেছে তাতে লাইন ৪-এর নিচের কিছুই গণনা করতে অস্বীকার করা।

### ১. লগ রিটার্ন

$$r_t = \\ln\\!\\left(\\frac{C_t}{C_{t-1}}\\right)$$

তৃতীয় খণ্ডজুড়ে সরল রিটার্ন $(C_t - C_{t-1})/C_{t-1}$-এর বদলে এটিই ব্যবহৃত, একটি কারণে:

$$\\sum_{t=1}^{n} r_t = \\ln\\!\\left(\\frac{C_n}{C_0}\\right)$$

**লগ রিটার্ন যোগ হয়; শতাংশ রিটার্ন হয় না।** +৫০%-এর পর −৫০% শূন্য নয়, তা −২৫%। এদের লগ সমতুল্য $+0.4055$ ও $-0.6931$, আর তারা সঠিকভাবে $-0.2877 = \\ln(0.75)$-এ যোগ হয়। পরবর্তী প্রতিটি ভোলাটিলিটি, ট্রেন্ড ও ড্রডাউন গণনা এই ধর্মের ওপর নির্ভরশীল।

### ২. True range

$$TR_t = \\max\\big(H_t - L_t,\\; |H_t - C_{t-1}|,\\; |L_t - C_{t-1}|\\big)$$

তিনটি আর্গুমেন্ট তিনটি পরিস্থিতি ঢাকতে আছে। প্রথমটি সাধারণ সেশন। দ্বিতীয়টি ঊর্ধ্বমুখী গ্যাপ — দিনের লো গতকালের ক্লোজের অনেক ওপরে থাকতে পারে আর $H-L$ পুরো লাফটাই মিস করে। তৃতীয়টি নিম্নমুখী গ্যাপ।

**ডিএসই-তে দ্বিতীয় ও তৃতীয় পদ কোনো প্রান্তিক ক্ষেত্র নয়।** যে সেশন ওপেনেই সীমায় গ্যাপ করে তার $H - L = 0$ আর true range পুরো চলাচলের সমান। অধ্যায় ৩৯ এর ওপরেই ATR গড়ে; এখানে সংজ্ঞায়িত কারণ প্রস্তুতি ধাপের এটি দরকার।

### ৩. সার্কিট ব্যান্ড, টিকে গোল করা

$$P_{up} = \\left\\lfloor \\frac{C_{t-1}(1+L)}{\\tau} \\right\\rfloor \\tau, \\qquad P_{dn} = \\left\\lceil \\frac{C_{t-1}(1-L)}{\\tau} \\right\\rceil \\tau$$

যেখানে $L$ অধ্যায় ২-এর স্ল্যাব সীমা এবং $\\tau$ টিক আকার (নমুনায় ০.১০ টাকা)।

**গোল করার দিক লক্ষ করুন এবং উল্টাবেন না।** ছাদ *নিচের* দিকে ও মেঝে *ওপরের* দিকে লেনদেনযোগ্য টিকে গোল করা হয়, কারণ দুই টিকের মাঝের দাম কোট করা যায় না। ভুল দিকে গোল করলে আপনার ডিটেক্টর প্রতিটি লক হওয়া সেশন ঠিক এক টিকের ব্যবধানে মিস করবে — ডিএসই ডেটা-প্রস্তুতির কোডে এটিই সবচেয়ে সাধারণ বাগ।

### ৪. বর্জন চিহ্ন

$$\\Phi_t = \\begin{cases} \\text{EXCLUDE} & \\text{যদি } C_t \\ge P_{up} \\;\\lor\\; C_t \\le P_{dn} \\;\\lor\\; H_t - L_t = 0 \\\\[4pt] \\text{OK} & \\text{অন্যথায়} \\end{cases}$$

তিনটি শর্ত, দুটি স্বতন্ত্র ব্যর্থতা। প্রথম দুটি ধরে **প্রশাসিত দাম** — সেশনটি যেখানে চাহিদা সরবরাহের সঙ্গে মিলেছে সেখানে নয়, যেখানে নিয়ম তাকে থামিয়েছে সেখানে শেষ হয়েছে। তৃতীয়টি ধরে **অনুপস্থিত বাজার** — রেঞ্জহীন সেশন, যা ডিএসই-তে সাধারণত একটি লেনদেন বা কোনোটিই নয়।

দুটোই শূন্য-বডির ক্যান্ডেল তৈরি করে, আর §২৬.৩ দেখিয়েছে তাদের অর্থ বিপরীত। চিহ্নটি এদের আলাদা করার চেষ্টা করে না; এটি কেবল কোনোটিকেই ইন্ডিকেটরে ঢোকাতে অস্বীকার করে।

### ৫. পরিচ্ছন্ন-নমুনার পরিসংখ্যান

$$\\text{ATR}^{\\text{clean}}_n = \\frac{1}{|\\mathcal{K}|}\\sum_{t \\in \\mathcal{K}} TR_t, \\qquad \\mathcal{K} = \\{t : \\Phi_t = \\text{OK}\\}$$

$$\\sigma^{\\text{clean}}_{\\text{daily}} = \\sqrt{\\frac{1}{|\\mathcal{K}|-1}\\sum_{t \\in \\mathcal{K}} (r_t - \\bar{r}_{\\mathcal{K}})^2}, \\qquad \\sigma_{\\text{ann}} = \\sigma_{\\text{daily}}\\sqrt{250}$$

$\\sqrt{250}$ হলো বর্গমূল-সময় নিয়ম আর তা ধরে নেয় রিটার্নগুলো স্বাধীন। ঠিক তা নয় — কিন্তু বিকল্প হলো এমন একটি অবার্ষিকীকৃত সংখ্যা যা কেউ তুলনা করতে পারে না, তাই ব্যবহার করুন এবং মনে রাখুন এটি একটি আসন্নীকরণ।

### ৬. যে দুটি সংখ্যা এগোনো হবে কি না ঠিক করে

$$\\Psi = \\frac{|\\{t : \\Phi_t = \\text{EXCLUDE}\\}|}{n} \\times 100 \\qquad \\text{(অব্যবহার্য ভগ্নাংশ, \\%)}$$

$$\\Omega = \\frac{\\text{ATR}^{\\text{all}}}{\\text{ATR}^{\\text{clean}}} \\qquad \\text{(অতিকথন গুণক)}$$

$\\Psi$ উত্তর দেয় *এই সিরিজের কতটা প্রাইস ডেটা নয়*। $\\Omega$ উত্তর দেয় *না জিজ্ঞেস করলে আমার ভোলাটিলিটি আঁচ কতটা ভুল হতো*।

**প্রতিবেদনের সীমা, একবার নির্ধারিত ও ব্যতিক্রমহীনভাবে প্রযোজ্য:**

| $\\Psi$ | পাঠ |
|---|---|
| ১০%-এর নিচে | নমুনা ইন্ডিকেট করার মতো যথেষ্ট পরিচ্ছন্ন |
| ১০% – ৩০% | ব্যবহারযোগ্য, তবে যেকোনো সংকেতের পাশে বর্জিত সেশনের সংখ্যা বলুন |
| ৩০% ও তার ওপরে | ইন্ডিকেটরের উপাদান হিসেবে অনুপযুক্ত |

এই কাটঅফগুলো প্রথা, আবিষ্কার নয়। **গুরুত্বপূর্ণ হলো আপনি যে চার্ট ট্রেড করতে চান তা দেখার আগেই এগুলো লিখে রাখা** — অধ্যায় ২৫ গুণমান-মেঝেতে যে শৃঙ্খলা প্রয়োগ করেছিল সেটিই।`,
    },

    manual: {
      en: `**Scenario.** The ten MIDCO sessions from §26.3. Prior close before Day 1 is BDT 48.20, tick BDT 0.10, band ±10%, and we will annualise on 250 sessions.

**Step 1 — Compute the bands for Day 3 and confirm the rounding.**

$$P_{up} = \\left\\lfloor \\frac{54.50 \\times 1.10}{0.10} \\right\\rfloor 0.10 = \\left\\lfloor \\frac{59.95}{0.10} \\right\\rfloor 0.10 = 599 \\times 0.10 = 59.90$$

The unrounded ceiling is 59.95, which is not a quotable price. Rounded **down** to the tick it becomes 59.90 — and Day 3 closed at exactly 59.90. **Round up instead and 59.90 < 60.00 tests as unlocked, and the most violent session in the sample passes straight into your ATR.**

**Step 2 — Flag every session.** Applying $\\Phi_t$ across the table:

| Day | Close | $P_{up}$ | $P_{dn}$ | $H-L$ | Flag | Reason |
|---|---|---|---|---|---|---|
| 1 | 49.60 | 53.00 | 43.40 | 1.70 | OK | — |
| 2 | 54.50 | **54.50** | 44.70 | 4.60 | **EXCLUDE** | limit up |
| 3 | 59.90 | **59.90** | 49.10 | **0.00** | **EXCLUDE** | limit up + zero range |
| 4 | 55.20 | 65.80 | 54.00 | 5.40 | OK | — |
| 5 | 49.70 | 60.70 | **49.70** | 4.50 | **EXCLUDE** | limit down |
| 6 | 50.40 | 54.60 | 44.80 | 1.80 | OK | — |
| 7 | 50.20 | 55.40 | 45.40 | 0.90 | OK | — |
| 8 | 50.20 | 55.20 | 45.20 | **0.00** | **EXCLUDE** | zero range, 3,000 shares |
| 9 | 51.30 | 55.20 | 45.20 | 1.50 | OK | — |
| 10 | 51.00 | 56.40 | 46.20 | 1.50 | OK | — |

$$\\Psi = \\frac{4}{10} \\times 100 = 40\\%$$

**Two of the four exclusions are administered prices and two are zero-range sessions, and Day 3 is both.** Note that Day 3 and Day 8 draw the identical candle and are excluded for opposite reasons.

**Step 3 — True range, all ten sessions.** The middle term does the work on gap days:

$$TR_3 = \\max(0.00,\\; |59.90-54.50|,\\; |59.90-54.50|) = 5.40$$
$$TR_4 = \\max(5.40,\\; |59.50-59.90|,\\; |54.10-59.90|) = \\max(5.40,\\, 0.40,\\, 5.80) = 5.80$$
$$TR_8 = \\max(0.00,\\; 0.00,\\; 0.00) = 0.00$$

The full series: $1.70,\\ 4.90,\\ 5.40,\\ 5.80,\\ 5.50,\\ 1.80,\\ 0.90,\\ 0.00,\\ 1.50,\\ 1.50$

**Step 4 — ATR on everything:**

$$\\text{ATR}^{\\text{all}} = \\frac{29.00}{10} = 2.90$$

**Step 5 — ATR on the clean six** (Days 1, 4, 6, 7, 9, 10):

$$\\text{ATR}^{\\text{clean}} = \\frac{1.70+5.80+1.80+0.90+1.50+1.50}{6} = \\frac{13.20}{6} = 2.20$$

**Step 6 — The overstatement factor:**

$$\\Omega = \\frac{2.90}{2.20} = 1.3182 \\approx 1.32\\times$$

**Step 7 — Log returns.** Two worth writing out:

$$r_2 = \\ln\\!\\left(\\frac{54.50}{49.60}\\right) = \\ln(1.09879) = 0.09421 \\Rightarrow +9.42\\%$$
$$r_5 = \\ln\\!\\left(\\frac{49.70}{55.20}\\right) = \\ln(0.90036) = -0.10496 \\Rightarrow -10.50\\%$$

The full series, in percent: $+2.86,\\ +9.42,\\ +9.45,\\ -8.17,\\ -10.50,\\ +1.40,\\ -0.40,\\ 0.00,\\ +2.17,\\ -0.59$

**Step 8 — Verify additivity before trusting anything downstream.**

$$\\sum r_t = +5.65\\%, \\qquad \\ln\\!\\left(\\frac{51.00}{48.20}\\right) \\times 100 = +5.65\\% \\quad \\checkmark$$

**This check costs one cell and catches a misaligned previous-close column instantly.** Run it every time you build a series.

**Step 9 — Daily volatility, all ten.** Mean $\\bar{r} = 5.6451/10 = 0.5645\\%$, sum of squared deviations $= 367.11$:

$$\\sigma^{\\text{all}} = \\sqrt{\\frac{367.11}{9}} = \\sqrt{40.79} = 6.39\\%$$

**Step 10 — Daily volatility, clean six.** Mean $\\bar{r}_{\\mathcal{K}} = -2.727/6 = -0.4545\\%$, sum of squared deviations $= 80.90$:

$$\\sigma^{\\text{clean}} = \\sqrt{\\frac{80.90}{5}} = \\sqrt{16.18} = 4.02\\%$$

**Step 11 — Annualise both:**

$$\\sigma^{\\text{all}}_{\\text{ann}} = 6.39 \\times \\sqrt{250} = 6.39 \\times 15.811 = 100.98\\%$$
$$\\sigma^{\\text{clean}}_{\\text{ann}} = 4.02 \\times 15.811 = 63.60\\%$$

**Step 12 — Now price the error, because a ratio is not yet a consequence.** Capital BDT 10,00,000, risk 2% per trade (BDT 20,000), stop at $2 \\times \\text{ATR}$ below a BDT 51.00 entry:

| | Contaminated | Clean |
|---|---|---|
| ATR | 2.90 | 2.20 |
| Stop distance ($2\\times$) | 5.80 | 4.40 |
| Shares $= 20{,}000 / \\text{stop}$ | 3,448 | 4,545 |
| Position value at 51.00 | BDT 1,75,848 | BDT 2,31,795 |

$$\\frac{4{,}545}{3{,}448} = 1.318$$

**The contaminated series produces a position 32% smaller than the stock's actual behaviour warrants, and a stop 32% further away.** You are simultaneously risking less capital than intended and giving the trade more room than it needs — an unambiguous drag on expectancy, and none of it visible on the chart.

**Step 13 — Read the verdict.** $\\Psi = 40\\% \\ge 30\\%$:

> **Sample unfit as indicator input — too many administered or illiquid prints.**

**Step 14 — State what this verdict does and does not mean.** It does not mean MIDCO is untradeable, and it does not mean the 5.6% gain was fake. It means **this particular ten-session window cannot support an indicator**, because four of its observations were produced by the exchange's rule book or by an empty order book rather than by supply and demand.

The correct responses are to lengthen the window until enough clean sessions accumulate, to move to weekly bars where a single limit day is absorbed into a five-session bar, or to accept that this name does not currently produce analysable data. **The one incorrect response is to compute the indicator anyway and not mention it.**`,
      bn: `**পরিস্থিতি।** §২৬.৩-এর দশটি MIDCO সেশন। দিন ১-এর আগের ক্লোজ ৪৮.২০ টাকা, টিক ০.১০ টাকা, ব্যান্ড ±১০%, আর আমরা ২৫০ সেশনে বার্ষিকীকরণ করব।

**ধাপ ১ — দিন ৩-এর ব্যান্ড গণনা করুন ও গোল করা নিশ্চিত করুন।**

$$P_{up} = \\left\\lfloor \\frac{54.50 \\times 1.10}{0.10} \\right\\rfloor 0.10 = \\left\\lfloor \\frac{59.95}{0.10} \\right\\rfloor 0.10 = 599 \\times 0.10 = 59.90$$

অগোলাকৃত ছাদ ৫৯.৯৫, যা কোটযোগ্য দাম নয়। টিকে **নিচের দিকে** গোল করলে তা ৫৯.৯০ হয় — আর দিন ৩ ঠিক ৫৯.৯০-তেই বন্ধ হয়েছে। **বদলে ওপরের দিকে গোল করলে ৫৯.৯০ < ৬০.০০ অলক হিসেবে পরীক্ষিত হয়, আর নমুনার সবচেয়ে হিংস্র সেশনটি সোজা আপনার ATR-এ ঢুকে যায়।**

**ধাপ ২ — প্রতিটি সেশন চিহ্নিত করুন।** টেবিলজুড়ে $\\Phi_t$ প্রয়োগ করে:

| দিন | ক্লোজ | $P_{up}$ | $P_{dn}$ | $H-L$ | চিহ্ন | কারণ |
|---|---|---|---|---|---|---|
| ১ | ৪৯.৬০ | ৫৩.০০ | ৪৩.৪০ | ১.৭০ | OK | — |
| ২ | ৫৪.৫০ | **৫৪.৫০** | ৪৪.৭০ | ৪.৬০ | **EXCLUDE** | limit up |
| ৩ | ৫৯.৯০ | **৫৯.৯০** | ৪৯.১০ | **০.০০** | **EXCLUDE** | limit up + শূন্য রেঞ্জ |
| ৪ | ৫৫.২০ | ৬৫.৮০ | ৫৪.০০ | ৫.৪০ | OK | — |
| ৫ | ৪৯.৭০ | ৬০.৭০ | **৪৯.৭০** | ৪.৫০ | **EXCLUDE** | limit down |
| ৬ | ৫০.৪০ | ৫৪.৬০ | ৪৪.৮০ | ১.৮০ | OK | — |
| ৭ | ৫০.২০ | ৫৫.৪০ | ৪৫.৪০ | ০.৯০ | OK | — |
| ৮ | ৫০.২০ | ৫৫.২০ | ৪৫.২০ | **০.০০** | **EXCLUDE** | শূন্য রেঞ্জ, ৩,০০০ শেয়ার |
| ৯ | ৫১.৩০ | ৫৫.২০ | ৪৫.২০ | ১.৫০ | OK | — |
| ১০ | ৫১.০০ | ৫৬.৪০ | ৪৬.২০ | ১.৫০ | OK | — |

$$\\Psi = \\frac{4}{10} \\times 100 = 40\\%$$

**চারটি বর্জনের দুটি প্রশাসিত দাম ও দুটি শূন্য-রেঞ্জ সেশন, আর দিন ৩ দুটোই।** লক্ষ করুন দিন ৩ ও দিন ৮ অভিন্ন ক্যান্ডেল আঁকে এবং বিপরীত কারণে বর্জিত হয়।

**ধাপ ৩ — True range, দশটি সেশনেই।** গ্যাপের দিনে মাঝের পদটিই কাজ করে:

$$TR_3 = \\max(0.00,\\; |59.90-54.50|,\\; |59.90-54.50|) = 5.40$$
$$TR_4 = \\max(5.40,\\; |59.50-59.90|,\\; |54.10-59.90|) = \\max(5.40,\\, 0.40,\\, 5.80) = 5.80$$
$$TR_8 = \\max(0.00,\\; 0.00,\\; 0.00) = 0.00$$

পূর্ণ সিরিজ: $1.70,\\ 4.90,\\ 5.40,\\ 5.80,\\ 5.50,\\ 1.80,\\ 0.90,\\ 0.00,\\ 1.50,\\ 1.50$

**ধাপ ৪ — সবকিছুর ওপর ATR:**

$$\\text{ATR}^{\\text{all}} = \\frac{29.00}{10} = 2.90$$

**ধাপ ৫ — পরিচ্ছন্ন ছয়টির ওপর ATR** (দিন ১, ৪, ৬, ৭, ৯, ১০):

$$\\text{ATR}^{\\text{clean}} = \\frac{1.70+5.80+1.80+0.90+1.50+1.50}{6} = \\frac{13.20}{6} = 2.20$$

**ধাপ ৬ — অতিকথন গুণক:**

$$\\Omega = \\frac{2.90}{2.20} = 1.3182 \\approx 1.32\\times$$

**ধাপ ৭ — লগ রিটার্ন।** দুটি লিখে দেখানোর মতো:

$$r_2 = \\ln\\!\\left(\\frac{54.50}{49.60}\\right) = \\ln(1.09879) = 0.09421 \\Rightarrow +9.42\\%$$
$$r_5 = \\ln\\!\\left(\\frac{49.70}{55.20}\\right) = \\ln(0.90036) = -0.10496 \\Rightarrow -10.50\\%$$

পূর্ণ সিরিজ, শতাংশে: $+2.86,\\ +9.42,\\ +9.45,\\ -8.17,\\ -10.50,\\ +1.40,\\ -0.40,\\ 0.00,\\ +2.17,\\ -0.59$

**ধাপ ৮ — নিচের কিছু বিশ্বাস করার আগে যোগশীলতা যাচাই করুন।**

$$\\sum r_t = +5.65\\%, \\qquad \\ln\\!\\left(\\frac{51.00}{48.20}\\right) \\times 100 = +5.65\\% \\quad \\checkmark$$

**এই যাচাইয়ের খরচ একটি সেল আর তা তৎক্ষণাৎ একটি অসংগত আগের-ক্লোজ কলাম ধরে ফেলে।** সিরিজ তৈরির প্রতিবার এটি চালান।

**ধাপ ৯ — দৈনিক ভোলাটিলিটি, দশটিই।** গড় $\\bar{r} = 5.6451/10 = 0.5645\\%$, বর্গ বিচ্যুতির যোগফল $= 367.11$:

$$\\sigma^{\\text{all}} = \\sqrt{\\frac{367.11}{9}} = \\sqrt{40.79} = 6.39\\%$$

**ধাপ ১০ — দৈনিক ভোলাটিলিটি, পরিচ্ছন্ন ছয়।** গড় $\\bar{r}_{\\mathcal{K}} = -2.727/6 = -0.4545\\%$, বর্গ বিচ্যুতির যোগফল $= 80.90$:

$$\\sigma^{\\text{clean}} = \\sqrt{\\frac{80.90}{5}} = \\sqrt{16.18} = 4.02\\%$$

**ধাপ ১১ — দুটোই বার্ষিকীকরণ করুন:**

$$\\sigma^{\\text{all}}_{\\text{ann}} = 6.39 \\times \\sqrt{250} = 6.39 \\times 15.811 = 100.98\\%$$
$$\\sigma^{\\text{clean}}_{\\text{ann}} = 4.02 \\times 15.811 = 63.60\\%$$

**ধাপ ১২ — এবার ভুলটির দাম হিসাব করুন, কারণ একটি অনুপাত এখনো পরিণতি নয়।** মূলধন ১০,০০,০০০ টাকা, প্রতি ট্রেডে ২% ঝুঁকি (২০,০০০ টাকা), ৫১.০০ টাকা প্রবেশের নিচে $2 \\times \\text{ATR}$ স্টপ:

| | দূষিত | পরিচ্ছন্ন |
|---|---|---|
| ATR | ২.৯০ | ২.২০ |
| স্টপ দূরত্ব ($2\\times$) | ৫.৮০ | ৪.৪০ |
| শেয়ার $= 20{,}000 / \\text{স্টপ}$ | ৩,৪৪৮ | ৪,৫৪৫ |
| ৫১.০০-তে পজিশনের মূল্য | ১,৭৫,৮৪৮ টাকা | ২,৩১,৭৯৫ টাকা |

$$\\frac{4{,}545}{3{,}448} = 1.318$$

**দূষিত সিরিজ শেয়ারের প্রকৃত আচরণের প্রয়োজনের চেয়ে ৩২% ছোট পজিশন ও ৩২% দূরের স্টপ তৈরি করে।** আপনি একইসঙ্গে ইচ্ছার চেয়ে কম পুঁজি ঝুঁকিতে ফেলছেন ও ট্রেডটিকে প্রয়োজনের চেয়ে বেশি জায়গা দিচ্ছেন — প্রত্যাশার ওপর দ্ব্যর্থহীন টান, আর এর কিছুই চার্টে দেখা যায় না।

**ধাপ ১৩ — রায় পড়ুন।** $\\Psi = 40\\% \\ge 30\\%$:

> **নমুনা ইন্ডিকেটরের উপাদান হিসেবে অনুপযুক্ত — অতিরিক্ত প্রশাসিত বা অতরল প্রিন্ট।**

**ধাপ ১৪ — এই রায় কী বোঝায় ও কী বোঝায় না তা বলুন।** এর অর্থ MIDCO অট্রেডযোগ্য নয়, আর ৫.৬% লাভটি ভুয়া ছিল তাও নয়। এর অর্থ **এই নির্দিষ্ট দশ-সেশনের জানালাটি কোনো ইন্ডিকেটর বহন করতে পারে না**, কারণ এর চারটি পর্যবেক্ষণ চাহিদা-সরবরাহের বদলে এক্সচেঞ্জের বিধি বা একটি খালি অর্ডার বই তৈরি করেছে।

সঠিক প্রতিক্রিয়া হলো যথেষ্ট পরিচ্ছন্ন সেশন জমা না হওয়া পর্যন্ত জানালা লম্বা করা, সাপ্তাহিক বারে যাওয়া যেখানে একটি সীমা-দিন পাঁচ-সেশনের বারে শোষিত হয়, অথবা মেনে নেওয়া যে এই নামটি বর্তমানে বিশ্লেষণযোগ্য ডেটা তৈরি করছে না। **একমাত্র ভুল প্রতিক্রিয়া হলো তবুও ইন্ডিকেটরটি গণনা করা এবং তা উল্লেখ না করা।**`,
    },

    excel: {
      en: `\`\`\`
A1: — Chart Data Preparation: 10 Sessions, Tick 0.10, Band ±10% —

A2:M2  Day | Open | High | Low | Close | Volume | PrevClose | LimitUp | LimitDn |
       TrueRange | LogRet% | Flag | CleanRet

A3:F12   the ten OHLCV rows from §26.3
G3: 48.20                          (the one hard-keyed previous close)
G4: =E3                            (fill G4:G12 — each day's prev close is yesterday's close)

Row 3, then fill down to row 12:
H3: =FLOOR(G3*1.1,0.1)                                  upper circuit, rounded DOWN to tick
I3: =CEILING(G3*0.9,0.1)                                lower circuit, rounded UP to tick
J3: =MAX(C3-D3,ABS(C3-G3),ABS(D3-G3))                   true range
K3: =LN(E3/G3)*100                                      log return %
L3: =IF(OR(E3>=H3,E3<=I3,C3-D3=0),"EXCLUDE","OK")       the flag
M3: =IF(L3="OK",K3,"")                                  clean-only return column

A14: — Sample Quality —
A15: Sessions in sample            B15: =COUNT(E3:E12)
A16: Sessions flagged EXCLUDE      B16: =COUNTIF(L3:L12,"EXCLUDE")
A17: Unusable fraction (%)         B17: =B16/B15*100
A18: ATR(10), all sessions         B18: =AVERAGE(J3:J12)
A19: ATR, clean sessions only      B19: =AVERAGEIF(L3:L12,"OK",J3:J12)
A20: ATR overstatement (x)         B20: =B18/B19
A21: Daily sigma, all (%)          B21: =STDEV(K3:K12)
A22: Daily sigma, clean (%)        B22: =STDEV(M3:M12)
A23: Annualised vol, all (%)       B23: =B21*SQRT(250)
A24: Annualised vol, clean (%)     B24: =B22*SQRT(250)
A25: Cumulative log return (%)     B25: =SUM(K3:K12)
A26: Check: LN(last/first prev)    B26: =LN(E12/G3)*100

A28: VERDICT
B28: =IF(B17>=30,"Sample unfit as indicator input - too many administered or illiquid prints",
      IF(B17>=10,"Usable, but state the exclusion count alongside any signal",
      "Sample is clean enough to indicate on"))
\`\`\`

**Five things about this sheet, and they are the design.**

**H3 and I3 round in opposite directions, and this is not a stylistic choice.** \`FLOOR(...,0.1)\` on the ceiling and \`CEILING(...,0.1)\` on the floor produce the nearest *tradable* band. Day 3's raw ceiling of 59.95 rounds to 59.90, which is exactly where the session closed. Use \`ROUND()\` on both and 59.95 → 60.00, the test \`E5>=H5\` fails, and the sample's most violent day silently enters your ATR. **This one-tick error is the most common defect in DSE preparation sheets and it is completely invisible in the output.**

**Column M is the reason \`STDEV\` in B22 works.** \`M3\` returns \`""\` — an empty *string*, not a zero — for excluded sessions, and Excel's \`STDEV\` ignores text while \`STDEVA\` would treat it as zero. Substitute \`STDEVA\` and the clean sigma collapses towards the contaminated one, which is precisely backwards. **If you prefer explicitness, use \`=STDEV(IF(L3:L12="OK",K3:K12))\` entered as an array formula and drop column M entirely.**

**B19 uses \`AVERAGEIF\` rather than a helper column** because the true range in J is a number on every row, including excluded ones, so the conditional has to live in the aggregation. There is no equivalent single-function \`STDEVIF\`, which is why volatility needs column M and ATR does not.

**B25 and B26 must agree, and that is the entire point of having both.** \`SUM(K3:K12)\` and \`LN(E12/G3)*100\` both return 5.65% because log returns telescope. If they disagree, your PrevClose column is misaligned — usually because a row was inserted and G4 no longer points at E3. **This is a two-cell audit for the single most damaging spreadsheet error in time-series work, and it costs nothing to leave in.**

**B28 reads B17 only.** The verdict deliberately ignores B20, the overstatement factor. A sample can have a modest $\\Omega$ and still be unfit — if the excluded days happened to be quiet ones, the ATR barely moves while the series remains 40% administered. **The fraction of the sample that is not price data is the governing question; the size of the resulting error is a consequence, not a criterion.**`,
      bn: `\`\`\`
A1: — Chart Data Preparation: 10 Sessions, Tick 0.10, Band ±10% —

A2:M2  Day | Open | High | Low | Close | Volume | PrevClose | LimitUp | LimitDn |
       TrueRange | LogRet% | Flag | CleanRet

A3:F12   §২৬.৩-এর দশটি OHLCV সারি
G3: 48.20                          (একমাত্র হাতে বসানো আগের ক্লোজ)
G4: =E3                            (G4:G12 পূরণ করুন — প্রতিদিনের prev close গতকালের ক্লোজ)

সারি ৩, তারপর সারি ১২ পর্যন্ত পূরণ:
H3: =FLOOR(G3*1.1,0.1)                                  ঊর্ধ্ব সার্কিট, টিকে নিচের দিকে গোল
I3: =CEILING(G3*0.9,0.1)                                নিম্ন সার্কিট, টিকে ওপরের দিকে গোল
J3: =MAX(C3-D3,ABS(C3-G3),ABS(D3-G3))                   true range
K3: =LN(E3/G3)*100                                      লগ রিটার্ন %
L3: =IF(OR(E3>=H3,E3<=I3,C3-D3=0),"EXCLUDE","OK")       চিহ্ন
M3: =IF(L3="OK",K3,"")                                  কেবল-পরিচ্ছন্ন রিটার্ন কলাম

A14: — Sample Quality —
A15: Sessions in sample            B15: =COUNT(E3:E12)
A16: Sessions flagged EXCLUDE      B16: =COUNTIF(L3:L12,"EXCLUDE")
A17: Unusable fraction (%)         B17: =B16/B15*100
A18: ATR(10), all sessions         B18: =AVERAGE(J3:J12)
A19: ATR, clean sessions only      B19: =AVERAGEIF(L3:L12,"OK",J3:J12)
A20: ATR overstatement (x)         B20: =B18/B19
A21: Daily sigma, all (%)          B21: =STDEV(K3:K12)
A22: Daily sigma, clean (%)        B22: =STDEV(M3:M12)
A23: Annualised vol, all (%)       B23: =B21*SQRT(250)
A24: Annualised vol, clean (%)     B24: =B22*SQRT(250)
A25: Cumulative log return (%)     B25: =SUM(K3:K12)
A26: Check: LN(last/first prev)    B26: =LN(E12/G3)*100

A28: VERDICT
B28: =IF(B17>=30,"Sample unfit as indicator input - too many administered or illiquid prints",
      IF(B17>=10,"Usable, but state the exclusion count alongside any signal",
      "Sample is clean enough to indicate on"))
\`\`\`

**এই শিট সম্পর্কে পাঁচটি কথা, আর এগুলোই নকশা।**

**H3 ও I3 বিপরীত দিকে গোল করে, আর এটি রুচির বিষয় নয়।** ছাদে \`FLOOR(...,0.1)\` ও মেঝেতে \`CEILING(...,0.1)\` নিকটতম *লেনদেনযোগ্য* ব্যান্ড তৈরি করে। দিন ৩-এর কাঁচা ছাদ ৫৯.৯৫ গোল হয়ে ৫৯.৯০ হয়, ঠিক যেখানে সেশনটি বন্ধ হয়েছে। দুটোতেই \`ROUND()\` ব্যবহার করলে ৫৯.৯৫ → ৬০.০০, \`E5>=H5\` পরীক্ষা ব্যর্থ হয়, আর নমুনার সবচেয়ে হিংস্র দিনটি নিঃশব্দে আপনার ATR-এ ঢোকে। **এই এক-টিকের ভুলটিই ডিএসই প্রস্তুতি শিটের সবচেয়ে সাধারণ ত্রুটি এবং ফলাফলে তা সম্পূর্ণ অদৃশ্য।**

**কলাম M-ই B22-এর \`STDEV\` কাজ করার কারণ।** বর্জিত সেশনে \`M3\` ফেরত দেয় \`""\` — একটি খালি *স্ট্রিং*, শূন্য নয় — আর এক্সেলের \`STDEV\` টেক্সট উপেক্ষা করে যেখানে \`STDEVA\` একে শূন্য ধরত। \`STDEVA\` বসালে পরিচ্ছন্ন সিগমা দূষিতটির দিকে ধসে পড়ে, যা ঠিক উল্টো। **স্পষ্টতা পছন্দ করলে অ্যারে ফর্মুলা হিসেবে \`=STDEV(IF(L3:L12="OK",K3:K12))\` দিন এবং কলাম M পুরোপুরি বাদ দিন।**

**B19 সহায়ক কলামের বদলে \`AVERAGEIF\` ব্যবহার করে** কারণ J-এর true range বর্জিতসহ প্রতিটি সারিতেই একটি সংখ্যা, তাই শর্তটিকে সমষ্টিকরণেই থাকতে হয়। সমতুল্য কোনো একক-ফাংশন \`STDEVIF\` নেই, আর সেজন্যই ভোলাটিলিটির কলাম M লাগে, ATR-এর লাগে না।

**B25 ও B26-কে মিলতে হবে, আর দুটো রাখারই পুরো উদ্দেশ্য এটি।** \`SUM(K3:K12)\` ও \`LN(E12/G3)*100\` দুটোই ৫.৬৫% ফেরত দেয় কারণ লগ রিটার্ন টেলিস্কোপ করে। না মিললে আপনার PrevClose কলাম অসংগত — সাধারণত কারণ একটি সারি ঢোকানো হয়েছে ও G4 আর E3-তে নির্দেশ করছে না। **টাইম-সিরিজ কাজের সবচেয়ে ক্ষতিকর স্প্রেডশিট ভুলটির জন্য এটি দুই-সেলের নিরীক্ষা, আর রেখে দিতে কিছুই খরচ হয় না।**

**B28 কেবল B17 পড়ে।** রায়টি ইচ্ছাকৃতভাবে B20, অতিকথন গুণক, উপেক্ষা করে। একটি নমুনার $\\Omega$ মৃদু হয়েও তা অনুপযুক্ত হতে পারে — বর্জিত দিনগুলো যদি শান্ত হয়ে থাকে, ATR সামান্যই নড়ে অথচ সিরিজটি ৪০% প্রশাসিতই থাকে। **নমুনার কত অংশ প্রাইস ডেটা নয় সেটিই নির্ধারক প্রশ্ন; ফলস্বরূপ ভুলের আকার একটি পরিণতি, মানদণ্ড নয়।**`,
    },

    python: {
      en: `\`\`\`python
"""
Chapter 26 — Chart data preparation for DSE series.

Flags administered and illiquid sessions BEFORE any indicator is computed,
then reports every statistic twice: contaminated and clean.
Educational. Figures illustrative.
"""
from dataclasses import dataclass
from math import ceil, floor, log, sqrt
from statistics import mean, stdev

TICK = 0.10          # BDT
BAND = 0.10          # ±10% slab (Chapter 2)
TRADING_DAYS = 250
EPS = 1e-9


def floor_tick(price: float, tick: float = TICK) -> float:
    """Round DOWN to a quotable tick — used for the upper circuit."""
    return round(floor(price / tick + EPS) * tick, 2)


def ceil_tick(price: float, tick: float = TICK) -> float:
    """Round UP to a quotable tick — used for the lower circuit."""
    return round(ceil(price / tick - EPS) * tick, 2)


@dataclass
class Session:
    """One trading session, plus the previous close it must be judged against."""
    day: int
    o: float
    h: float
    l: float
    c: float
    volume: int
    prev_close: float

    @property
    def limit_up(self) -> float:
        return floor_tick(self.prev_close * (1 + BAND))

    @property
    def limit_dn(self) -> float:
        return ceil_tick(self.prev_close * (1 - BAND))

    @property
    def rng(self) -> float:
        return round(self.h - self.l, 2)

    @property
    def true_range(self) -> float:
        """Covers ordinary sessions, gap-ups and gap-downs alike."""
        return round(max(self.h - self.l,
                         abs(self.h - self.prev_close),
                         abs(self.l - self.prev_close)), 2)

    @property
    def log_return_pct(self) -> float:
        return log(self.c / self.prev_close) * 100

    @property
    def reasons(self) -> list[str]:
        """Every reason this session fails, not just the first."""
        out = []
        if self.c >= self.limit_up:
            out.append("limit up")
        if self.c <= self.limit_dn:
            out.append("limit down")
        if self.rng == 0:
            out.append("zero range")
        return out

    @property
    def usable(self) -> bool:
        return not self.reasons

    @property
    def flag(self) -> str:
        return "OK" if self.usable else "EXCLUDE"


def prepare(series: list[Session], days: int = TRADING_DAYS) -> dict:
    """Compute every statistic twice — on everything, and on the clean subset."""
    clean = [s for s in series if s.usable]
    n, k = len(series), len(clean)

    atr_all = mean(s.true_range for s in series)
    atr_clean = mean(s.true_range for s in clean) if k else float("nan")

    sig_all = stdev(s.log_return_pct for s in series) if n > 1 else float("nan")
    sig_clean = stdev(s.log_return_pct for s in clean) if k > 1 else float("nan")

    cum = sum(s.log_return_pct for s in series)
    check = log(series[-1].c / series[0].prev_close) * 100

    unusable_pct = (n - k) / n * 100

    if unusable_pct >= 30:
        verdict = "Sample unfit as indicator input - too many administered or illiquid prints"
    elif unusable_pct >= 10:
        verdict = "Usable, but state the exclusion count alongside any signal"
    else:
        verdict = "Sample is clean enough to indicate on"

    return {
        "n": n, "clean": k, "unusable_pct": unusable_pct,
        "atr_all": atr_all, "atr_clean": atr_clean,
        "overstatement": atr_all / atr_clean,
        "sigma_all": sig_all, "sigma_clean": sig_clean,
        "ann_all": sig_all * sqrt(days), "ann_clean": sig_clean * sqrt(days),
        "cum_log_return": cum, "additivity_check": check,
        "verdict": verdict,
    }


def size_position(entry: float, atr: float, capital: float,
                  risk_pct: float = 2.0, atr_mult: float = 2.0) -> dict:
    """Translate an ATR into shares, which is where a bad ATR does its damage."""
    risk_bdt = capital * risk_pct / 100
    stop = atr * atr_mult
    shares = int(risk_bdt / stop)
    return {"stop": stop, "shares": shares, "value": shares * entry}


def build(rows: list[tuple], first_prev_close: float) -> list[Session]:
    """Chain each session's prev_close to the previous session's close."""
    out, prev = [], first_prev_close
    for day, o, h, l, c, v in rows:
        out.append(Session(day, o, h, l, c, v, prev))
        prev = c
    return out


if __name__ == "__main__":
    ROWS = [
        (1,  48.50, 49.80, 48.10, 49.60,  412_000),
        (2,  50.00, 54.50, 49.90, 54.50, 1_180_000),
        (3,  59.90, 59.90, 59.90, 59.90,   42_000),
        (4,  59.00, 59.50, 54.10, 55.20, 1_540_000),
        (5,  54.00, 54.20, 49.70, 49.70,  980_000),
        (6,  50.10, 51.00, 49.20, 50.40,  620_000),
        (7,  50.50, 50.90, 50.00, 50.20,   95_000),
        (8,  50.20, 50.20, 50.20, 50.20,    3_000),
        (9,  50.30, 51.60, 50.10, 51.30,  430_000),
        (10, 51.40, 52.30, 50.80, 51.00,  380_000),
    ]
    midco = build(ROWS, first_prev_close=48.20)

    print(f"{'Day':>3} {'Close':>7} {'Volume':>10} {'TR':>6} {'LogRet%':>9}  Flag")
    print("-" * 62)
    for s in midco:
        note = f"  ({', '.join(s.reasons)})" if s.reasons else ""
        print(f"{s.day:>3} {s.c:>7.2f} {s.volume:>10,} {s.true_range:>6.2f} "
              f"{s.log_return_pct:>+9.2f}  {s.flag}{note}")

    r = prepare(midco)
    print()
    print(f"Sessions / clean        : {r['n']} / {r['clean']}")
    print(f"Unusable fraction       : {r['unusable_pct']:.1f}%")
    print(f"ATR  all / clean        : {r['atr_all']:.2f} / {r['atr_clean']:.2f}"
          f"   ({r['overstatement']:.2f}x overstated)")
    print(f"Daily sigma all / clean : {r['sigma_all']:.2f}% / {r['sigma_clean']:.2f}%")
    print(f"Annualised all / clean  : {r['ann_all']:.2f}% / {r['ann_clean']:.2f}%")
    print(f"Cumulative log return   : {r['cum_log_return']:.2f}%")
    print(f"Additivity check        : {r['additivity_check']:.2f}%  "
          f"{'OK' if abs(r['cum_log_return'] - r['additivity_check']) < 1e-6 else 'MISMATCH'}")
    print(f"VERDICT                 : {r['verdict']}")

    print()
    print("=== What the contamination costs, in shares ===")
    for label, atr in (("contaminated", r["atr_all"]), ("clean", r["atr_clean"])):
        p = size_position(entry=51.00, atr=atr, capital=10_00_000)
        print(f"  {label:<13} ATR {atr:.2f}  stop {p['stop']:.2f}  "
              f"{p['shares']:>5,} shares  BDT {p['value']:>10,.0f}")
\`\`\`

**Expected output:**
\`\`\`
Day   Close     Volume     TR   LogRet%  Flag
--------------------------------------------------------------
  1   49.60    412,000   1.70     +2.86  OK
  2   54.50  1,180,000   4.90     +9.42  EXCLUDE  (limit up)
  3   59.90     42,000   5.40     +9.45  EXCLUDE  (limit up, zero range)
  4   55.20  1,540,000   5.80     -8.17  OK
  5   49.70    980,000   5.50    -10.50  EXCLUDE  (limit down)
  6   50.40    620,000   1.80     +1.40  OK
  7   50.20     95,000   0.90     -0.40  OK
  8   50.20      3,000   0.00     +0.00  EXCLUDE  (zero range)
  9   51.30    430,000   1.50     +2.17  OK
 10   51.00    380,000   1.50     -0.59  OK

Sessions / clean        : 10 / 6
Unusable fraction       : 40.0%
ATR  all / clean        : 2.90 / 2.20   (1.32x overstated)
Daily sigma all / clean : 6.39% / 4.02%
Annualised all / clean  : 100.98% / 63.60%
Cumulative log return   : 5.65%
Additivity check        : 5.65%  OK
VERDICT                 : Sample unfit as indicator input - too many administered or illiquid prints

=== What the contamination costs, in shares ===
  contaminated  ATR 2.90  stop 5.80  3,448 shares  BDT    175,848
  clean         ATR 2.20  stop 4.40  4,545 shares  BDT    231,795
\`\`\`

**Four things in this code are load-bearing.**

**\`reasons\` returns a list, not the first failure.** Day 3 is both limit-locked and zero-range, and those are two different diagnoses that happen to coincide. A function returning \`"limit up"\` and stopping would hide that the session also had no internal range at all. **When you audit a rejected series later, the reason list is the only record of why each session went, and you will want all of it.**

**\`floor_tick\` and \`ceil_tick\` carry an \`EPS\` term, and removing it will cost you.** \`59.95 / 0.10\` evaluates to \`599.4999...\` in binary floating point, and \`floor\` on that is 599 — correct here by luck. Other prices land the other side: \`0.30 / 0.10\` is \`2.9999...\`, and flooring gives 2 instead of 3. **The epsilon is not decoration; without it the detector fails on a data-dependent subset of prices, which is the worst kind of bug because it works on your test case.**

**\`prev_close\` is chained in \`build()\`, never recomputed inside \`Session\`.** A session cannot know its own history. Making the previous close an explicit constructor argument means a misaligned series fails the additivity check loudly rather than producing plausible wrong numbers — which is exactly what the \`MISMATCH\` branch of the report exists to catch.

**\`size_position\` is in this file on purpose.** A 1.32× overstatement is an abstraction; **3,448 shares instead of 4,545 is a decision you actually made.** Every diagnostic in Part III should terminate in a number you can act on, or it will be read once and ignored.`,
      bn: `\`\`\`python
"""
অধ্যায় ২৬ — ডিএসই সিরিজের জন্য চার্ট ডেটা প্রস্তুতি।

কোনো ইন্ডিকেটর গণনার আগেই প্রশাসিত ও অতরল সেশন চিহ্নিত করে,
তারপর প্রতিটি পরিসংখ্যান দুবার জানায়: দূষিত ও পরিচ্ছন্ন।
শিক্ষামূলক। সংখ্যা দৃষ্টান্তমূলক।
"""
from dataclasses import dataclass
from math import ceil, floor, log, sqrt
from statistics import mean, stdev

TICK = 0.10          # টাকা
BAND = 0.10          # ±১০% স্ল্যাব (অধ্যায় ২)
TRADING_DAYS = 250
EPS = 1e-9


def floor_tick(price: float, tick: float = TICK) -> float:
    """কোটযোগ্য টিকে নিচের দিকে গোল — ঊর্ধ্ব সার্কিটের জন্য।"""
    return round(floor(price / tick + EPS) * tick, 2)


def ceil_tick(price: float, tick: float = TICK) -> float:
    """কোটযোগ্য টিকে ওপরের দিকে গোল — নিম্ন সার্কিটের জন্য।"""
    return round(ceil(price / tick - EPS) * tick, 2)


@dataclass
class Session:
    """একটি লেনদেন সেশন, এবং যে আগের ক্লোজের বিপরীতে একে বিচার করতে হবে।"""
    day: int
    o: float
    h: float
    l: float
    c: float
    volume: int
    prev_close: float

    @property
    def limit_up(self) -> float:
        return floor_tick(self.prev_close * (1 + BAND))

    @property
    def limit_dn(self) -> float:
        return ceil_tick(self.prev_close * (1 - BAND))

    @property
    def rng(self) -> float:
        return round(self.h - self.l, 2)

    @property
    def true_range(self) -> float:
        """সাধারণ সেশন, ঊর্ধ্ব-গ্যাপ ও নিম্ন-গ্যাপ সবই ঢাকে।"""
        return round(max(self.h - self.l,
                         abs(self.h - self.prev_close),
                         abs(self.l - self.prev_close)), 2)

    @property
    def log_return_pct(self) -> float:
        return log(self.c / self.prev_close) * 100

    @property
    def reasons(self) -> list[str]:
        """এই সেশন যত কারণে ব্যর্থ, সবগুলো — কেবল প্রথমটি নয়।"""
        out = []
        if self.c >= self.limit_up:
            out.append("limit up")
        if self.c <= self.limit_dn:
            out.append("limit down")
        if self.rng == 0:
            out.append("zero range")
        return out

    @property
    def usable(self) -> bool:
        return not self.reasons

    @property
    def flag(self) -> str:
        return "OK" if self.usable else "EXCLUDE"


def prepare(series: list[Session], days: int = TRADING_DAYS) -> dict:
    """প্রতিটি পরিসংখ্যান দুবার গণনা করুন — সবকিছুতে, ও পরিচ্ছন্ন উপসেটে।"""
    clean = [s for s in series if s.usable]
    n, k = len(series), len(clean)

    atr_all = mean(s.true_range for s in series)
    atr_clean = mean(s.true_range for s in clean) if k else float("nan")

    sig_all = stdev(s.log_return_pct for s in series) if n > 1 else float("nan")
    sig_clean = stdev(s.log_return_pct for s in clean) if k > 1 else float("nan")

    cum = sum(s.log_return_pct for s in series)
    check = log(series[-1].c / series[0].prev_close) * 100

    unusable_pct = (n - k) / n * 100

    if unusable_pct >= 30:
        verdict = "Sample unfit as indicator input - too many administered or illiquid prints"
    elif unusable_pct >= 10:
        verdict = "Usable, but state the exclusion count alongside any signal"
    else:
        verdict = "Sample is clean enough to indicate on"

    return {
        "n": n, "clean": k, "unusable_pct": unusable_pct,
        "atr_all": atr_all, "atr_clean": atr_clean,
        "overstatement": atr_all / atr_clean,
        "sigma_all": sig_all, "sigma_clean": sig_clean,
        "ann_all": sig_all * sqrt(days), "ann_clean": sig_clean * sqrt(days),
        "cum_log_return": cum, "additivity_check": check,
        "verdict": verdict,
    }


def size_position(entry: float, atr: float, capital: float,
                  risk_pct: float = 2.0, atr_mult: float = 2.0) -> dict:
    """ATR-কে শেয়ারে রূপান্তর — খারাপ ATR ঠিক এখানেই ক্ষতি করে।"""
    risk_bdt = capital * risk_pct / 100
    stop = atr * atr_mult
    shares = int(risk_bdt / stop)
    return {"stop": stop, "shares": shares, "value": shares * entry}


def build(rows: list[tuple], first_prev_close: float) -> list[Session]:
    """প্রতিটি সেশনের prev_close আগের সেশনের ক্লোজের সঙ্গে শৃঙ্খলিত করুন।"""
    out, prev = [], first_prev_close
    for day, o, h, l, c, v in rows:
        out.append(Session(day, o, h, l, c, v, prev))
        prev = c
    return out


if __name__ == "__main__":
    ROWS = [
        (1,  48.50, 49.80, 48.10, 49.60,  412_000),
        (2,  50.00, 54.50, 49.90, 54.50, 1_180_000),
        (3,  59.90, 59.90, 59.90, 59.90,   42_000),
        (4,  59.00, 59.50, 54.10, 55.20, 1_540_000),
        (5,  54.00, 54.20, 49.70, 49.70,  980_000),
        (6,  50.10, 51.00, 49.20, 50.40,  620_000),
        (7,  50.50, 50.90, 50.00, 50.20,   95_000),
        (8,  50.20, 50.20, 50.20, 50.20,    3_000),
        (9,  50.30, 51.60, 50.10, 51.30,  430_000),
        (10, 51.40, 52.30, 50.80, 51.00,  380_000),
    ]
    midco = build(ROWS, first_prev_close=48.20)

    print(f"{'Day':>3} {'Close':>7} {'Volume':>10} {'TR':>6} {'LogRet%':>9}  Flag")
    print("-" * 62)
    for s in midco:
        note = f"  ({', '.join(s.reasons)})" if s.reasons else ""
        print(f"{s.day:>3} {s.c:>7.2f} {s.volume:>10,} {s.true_range:>6.2f} "
              f"{s.log_return_pct:>+9.2f}  {s.flag}{note}")

    r = prepare(midco)
    print()
    print(f"Sessions / clean        : {r['n']} / {r['clean']}")
    print(f"Unusable fraction       : {r['unusable_pct']:.1f}%")
    print(f"ATR  all / clean        : {r['atr_all']:.2f} / {r['atr_clean']:.2f}"
          f"   ({r['overstatement']:.2f}x overstated)")
    print(f"Daily sigma all / clean : {r['sigma_all']:.2f}% / {r['sigma_clean']:.2f}%")
    print(f"Annualised all / clean  : {r['ann_all']:.2f}% / {r['ann_clean']:.2f}%")
    print(f"Cumulative log return   : {r['cum_log_return']:.2f}%")
    print(f"Additivity check        : {r['additivity_check']:.2f}%  "
          f"{'OK' if abs(r['cum_log_return'] - r['additivity_check']) < 1e-6 else 'MISMATCH'}")
    print(f"VERDICT                 : {r['verdict']}")

    print()
    print("=== What the contamination costs, in shares ===")
    for label, atr in (("contaminated", r["atr_all"]), ("clean", r["atr_clean"])):
        p = size_position(entry=51.00, atr=atr, capital=10_00_000)
        print(f"  {label:<13} ATR {atr:.2f}  stop {p['stop']:.2f}  "
              f"{p['shares']:>5,} shares  BDT {p['value']:>10,.0f}")
\`\`\`

**প্রত্যাশিত আউটপুট:**
\`\`\`
Day   Close     Volume     TR   LogRet%  Flag
--------------------------------------------------------------
  1   49.60    412,000   1.70     +2.86  OK
  2   54.50  1,180,000   4.90     +9.42  EXCLUDE  (limit up)
  3   59.90     42,000   5.40     +9.45  EXCLUDE  (limit up, zero range)
  4   55.20  1,540,000   5.80     -8.17  OK
  5   49.70    980,000   5.50    -10.50  EXCLUDE  (limit down)
  6   50.40    620,000   1.80     +1.40  OK
  7   50.20     95,000   0.90     -0.40  OK
  8   50.20      3,000   0.00     +0.00  EXCLUDE  (zero range)
  9   51.30    430,000   1.50     +2.17  OK
 10   51.00    380,000   1.50     -0.59  OK

Sessions / clean        : 10 / 6
Unusable fraction       : 40.0%
ATR  all / clean        : 2.90 / 2.20   (1.32x overstated)
Daily sigma all / clean : 6.39% / 4.02%
Annualised all / clean  : 100.98% / 63.60%
Cumulative log return   : 5.65%
Additivity check        : 5.65%  OK
VERDICT                 : Sample unfit as indicator input - too many administered or illiquid prints

=== What the contamination costs, in shares ===
  contaminated  ATR 2.90  stop 5.80  3,448 shares  BDT    175,848
  clean         ATR 2.20  stop 4.40  4,545 shares  BDT    231,795
\`\`\`

**এই কোডের চারটি জিনিস ভারবাহী।**

**\`reasons\` প্রথম ব্যর্থতা নয়, একটি তালিকা ফেরত দেয়।** দিন ৩ একইসঙ্গে সীমা-লক ও শূন্য-রেঞ্জ, আর এ দুটি ভিন্ন নির্ণয় যা কাকতালীয়ভাবে একসঙ্গে ঘটেছে। \`"limit up"\` ফেরত দিয়ে থেমে যাওয়া ফাংশন আড়াল করত যে সেশনটির কোনো অভ্যন্তরীণ রেঞ্জও ছিল না। **পরে বাতিল সিরিজ নিরীক্ষা করার সময় কারণ-তালিকাই প্রতিটি সেশন কেন গেল তার একমাত্র নথি, আর আপনি পুরোটাই চাইবেন।**

**\`floor_tick\` ও \`ceil_tick\`-এ একটি \`EPS\` পদ আছে, আর তা সরালে মূল্য দিতে হবে।** বাইনারি ফ্লোটিং পয়েন্টে \`59.95 / 0.10\` দাঁড়ায় \`599.4999...\`, আর তাতে \`floor\` দেয় ৫৯৯ — এখানে সৌভাগ্যক্রমে সঠিক। অন্য দাম উল্টো দিকে পড়ে: \`0.30 / 0.10\` হলো \`2.9999...\`, আর floor দেয় ৩-এর বদলে ২। **এপসিলন অলংকার নয়; এটি ছাড়া ডিটেক্টর দামের একটি ডেটা-নির্ভর উপসেটে ব্যর্থ হয়, যা সবচেয়ে খারাপ ধরনের বাগ কারণ আপনার পরীক্ষার ক্ষেত্রে তা কাজ করে।**

**\`prev_close\` \`build()\`-এ শৃঙ্খলিত হয়, \`Session\`-এর ভেতরে কখনো পুনর্গণিত নয়।** একটি সেশন নিজের ইতিহাস জানতে পারে না। আগের ক্লোজকে স্পষ্ট কনস্ট্রাক্টর আর্গুমেন্ট করার অর্থ অসংগত সিরিজ প্রশ্নবিদ্ধ সঠিক-দেখতে সংখ্যা তৈরি না করে যোগশীলতা যাচাইয়ে সশব্দে ব্যর্থ হয় — প্রতিবেদনের \`MISMATCH\` শাখাটি ঠিক এটিই ধরতে আছে।

**\`size_position\` এই ফাইলে ইচ্ছাকৃতভাবে আছে।** ১.৩২× অতিকথন একটি বিমূর্ততা; **৪,৫৪৫-এর বদলে ৩,৪৪৮ শেয়ার হলো আপনার সত্যিই নেওয়া একটি সিদ্ধান্ত।** তৃতীয় খণ্ডের প্রতিটি নির্ণায়ক এমন একটি সংখ্যায় শেষ হওয়া উচিত যাতে আপনি কাজ করতে পারেন, নইলে তা একবার পড়া হয়ে উপেক্ষিত হবে।`,
    },

    mistakes: {
      en: `1. **Computing an indicator before flagging the series.** The single failure this chapter exists to prevent. Every moving average, RSI and ATR in Chapters 33–40 inherits whatever contamination you leave in, and none of them will warn you.
2. **Rounding both circuit bands the same way.** The ceiling rounds down to the tick and the floor rounds up. Use \`ROUND()\` on both and Day 3's 59.95 becomes 60.00, the lock test fails by one tick, and the most violent session in the sample enters your ATR silently.
3. **Treating every zero-range candle as a doji.** Day 3 and Day 8 draw the identical figure. One is a +9.9% move truncated by the band; the other is 3,000 shares in an empty book. A pattern routine that calls both "indecision" is wrong twice, in opposite directions.
4. **Using high-minus-low as the range on a gap day.** $H-L$ on Day 3 is exactly zero on a session that moved 5.40. True range exists for this case and there is no situation in DSE work where the naive range is preferable.
5. **Plotting a multi-year chart on an arithmetic scale.** A stock going 20 → 200 gives its first 100% gain a sliver of the axis and its last 11% the same vertical space. Any trendline drawn on that axis is a trendline through a distortion.
6. **Using simple percentage returns for volatility.** They do not add, so your ten daily returns will not reconcile to the period return and you lose the two-cell audit that catches a misaligned previous-close column.
7. **Running indicators through the floor-price episodes.** Those flat weeks are the record of a regulation, not of a market. A 200-day average spanning them is reporting on BSEC, not on the stock.
8. **Reaching for intraday data on a name that trades 95,000 shares.** You will get perhaps twenty bars containing a trade and 280 repeating the last print, and every indicator computed on that series measures the absence of trading.
9. **Reporting only the clean number.** Excluding limit days removes genuine information — a limit-up *is* a large move, and a system that never sees one will underestimate tail risk. Compute both, and say which you are using.
10. **Letting the chart add a name the scorecard rejected.** Chapter 25 decides the universe; Part III decides timing within it. A breakout on a company whose auditor issued a disclaimer is a real pattern on an unreal company.`,
      bn: `১. **সিরিজ চিহ্নিত করার আগে ইন্ডিকেটর গণনা করা।** এই একটি ব্যর্থতা ঠেকাতেই অধ্যায়টির অস্তিত্ব। অধ্যায় ৩৩–৪০-এর প্রতিটি মুভিং অ্যাভারেজ, RSI ও ATR আপনি যে দূষণ রেখে যাবেন তা উত্তরাধিকারসূত্রে পায়, আর কোনোটিই আপনাকে সতর্ক করবে না।
২. **দুটি সার্কিট ব্যান্ড একইভাবে গোল করা।** ছাদ টিকে নিচের দিকে ও মেঝে ওপরের দিকে গোল হয়। দুটোতেই \`ROUND()\` দিলে দিন ৩-এর ৫৯.৯৫ হয় ৬০.০০, লক পরীক্ষা এক টিকে ব্যর্থ হয়, আর নমুনার সবচেয়ে হিংস্র সেশন নিঃশব্দে আপনার ATR-এ ঢোকে।
৩. **প্রতিটি শূন্য-রেঞ্জ ক্যান্ডেলকে doji ভাবা।** দিন ৩ ও দিন ৮ অভিন্ন আকৃতি আঁকে। একটি ব্যান্ডে কাটা +৯.৯% চলাচল; অন্যটি খালি বইয়ে ৩,০০০ শেয়ার। যে প্যাটার্ন রুটিন দুটোকেই "দ্বিধা" বলে সে বিপরীত দিকে দুবার ভুল করে।
৪. **গ্যাপের দিনে রেঞ্জ হিসেবে high-বিয়োগ-low ব্যবহার।** ৫.৪০ নড়া একটি সেশনে দিন ৩-এর $H-L$ ঠিক শূন্য। এই ক্ষেত্রের জন্যই true range আছে আর ডিএসই কাজে এমন কোনো পরিস্থিতি নেই যেখানে সরল রেঞ্জ শ্রেয়।
৫. **বহু-বছরের চার্ট অ্যারিথমেটিক স্কেলে আঁকা।** ২০ → ২০০ যাওয়া শেয়ারের প্রথম ১০০% লাভ অক্ষের এক চিলতে পায় আর শেষ ১১% পায় একই উল্লম্ব জায়গা। ঐ অক্ষে আঁকা যেকোনো ট্রেন্ডলাইন একটি বিকৃতির মধ্য দিয়ে টানা।
৬. **ভোলাটিলিটির জন্য সরল শতাংশ রিটার্ন ব্যবহার।** এরা যোগ হয় না, তাই আপনার দশটি দৈনিক রিটার্ন সময়কালের রিটার্নের সঙ্গে মিলবে না আর আপনি সেই দুই-সেলের নিরীক্ষা হারাবেন যা অসংগত আগের-ক্লোজ কলাম ধরে।
৭. **ফ্লোর-প্রাইস পর্বের মধ্য দিয়ে ইন্ডিকেটর চালানো।** ঐ সমতল সপ্তাহগুলো একটি বিধির নথি, বাজারের নয়। এগুলোজুড়ে বিস্তৃত ২০০-দিনের গড় শেয়ার নয়, বিএসইসি সম্পর্কে প্রতিবেদন করছে।
৮. **৯৫,০০০ শেয়ার লেনদেন করা নামে ইন্ট্রাডে ডেটার দিকে হাত বাড়ানো।** আপনি সম্ভবত কুড়িটি লেনদেনযুক্ত বার ও ২৮০টি শেষ প্রিন্টের পুনরাবৃত্তি পাবেন, আর ঐ সিরিজে গণিত প্রতিটি ইন্ডিকেটর লেনদেনের অনুপস্থিতি মাপে।
৯. **কেবল পরিচ্ছন্ন সংখ্যাটি জানানো।** সীমা-দিন বাদ দিলে প্রকৃত তথ্যও বাদ পড়ে — limit-up সত্যিই একটি বড় চলাচল, আর যে সিস্টেম কখনো তা দেখে না সে টেইল ঝুঁকি কম আঁচ করবে। দুটোই গণনা করুন, আর কোনটি ব্যবহার করছেন বলুন।
১০. **স্কোরকার্ডে বাতিল নাম চার্টকে যোগ করতে দেওয়া।** অধ্যায় ২৫ ইউনিভার্স ঠিক করে; তৃতীয় খণ্ড তার ভেতরে সময়। যে কোম্পানির নিরীক্ষক ডিসক্লেইমার দিয়েছেন তার ব্রেকআউট একটি অবাস্তব কোম্পানির ওপর একটি বাস্তব প্যাটার্ন।`,
    },

    tips: {
      en: `- **Make the flag column the first thing you build, before any indicator, every time.** It costs four formulas and it is the difference between a volatility estimate and a description of the exchange's rule book.
- **Report $\\Psi$ next to every signal you act on.** "Breakout confirmed" and "breakout confirmed, 4 of the last 10 sessions excluded" are different claims, and only the second one is honest.
- **Keep the additivity check in the sheet permanently.** \`SUM(LogRet)\` must equal \`LN(last/first_prev)\`. It is two cells and it catches the misaligned previous-close column, which is the most damaging and least visible error in time-series work.
- **When a daily series is too contaminated, go to weekly before you go to a different stock.** A single limit day is absorbed into a five-session bar. Weekly bars on a thin name are often analysable where the daily is not — and you were told in §26.1 that weekly is where trend lives anyway.
- **Default to log scale on anything over eighteen months or 100% of movement.** Set it once in your charting package and stop thinking about it.
- **Treat a zero-range candle as a question, never as a doji.** Look at volume and at the circuit bands before you name it. Two seconds of checking separates a truncated 9.9% move from an empty room.
- **Build the exclusion thresholds before you look at a chart you want to trade.** 10% and 30% are conventions; what matters is that they were written down in advance, exactly as Chapter 25 required of the quality floor.
- **Keep the point-and-figure chart in your toolkit for illiquid names.** It has no time axis, so a run of zero-volume sessions cannot distort it. It is badly under-used on the DSE and it is the one representation that is structurally immune to the thinness problem.
- **Never let a bearish pattern become a trade idea.** Without a securities-borrowing market it can only be an exit or a sizing input. Half the imported chart literature assumes a short side you do not have.`,
      bn: `- **চিহ্ন কলামটিই প্রথমে তৈরি করুন, যেকোনো ইন্ডিকেটরের আগে, প্রতিবার।** এর খরচ চারটি ফর্মুলা আর এটিই একটি ভোলাটিলিটি আঁচ ও এক্সচেঞ্জের বিধির বর্ণনার মধ্যে পার্থক্য।
- **আপনি যে প্রতিটি সংকেতে কাজ করেন তার পাশে $\\Psi$ জানান।** "ব্রেকআউট নিশ্চিত" আর "ব্রেকআউট নিশ্চিত, শেষ ১০ সেশনের ৪টি বর্জিত" ভিন্ন দাবি, আর কেবল দ্বিতীয়টিই সৎ।
- **যোগশীলতা যাচাই শিটে স্থায়ীভাবে রাখুন।** \`SUM(LogRet)\` অবশ্যই \`LN(last/first_prev)\`-এর সমান হবে। এটি দুটি সেল আর এটি অসংগত আগের-ক্লোজ কলাম ধরে, যা টাইম-সিরিজ কাজের সবচেয়ে ক্ষতিকর ও সবচেয়ে কম দৃশ্যমান ভুল।
- **দৈনিক সিরিজ বেশি দূষিত হলে অন্য শেয়ারে যাওয়ার আগে সাপ্তাহিকে যান।** একটি সীমা-দিন পাঁচ-সেশনের বারে শোষিত হয়। পাতলা নামে সাপ্তাহিক বার প্রায়ই বিশ্লেষণযোগ্য যেখানে দৈনিক নয় — আর §২৬.১-এ বলাই হয়েছে ট্রেন্ড এমনিতেই সাপ্তাহিকে থাকে।
- **আঠারো মাস বা ১০০% চলাচলের বেশি যেকোনো কিছুতে ডিফল্ট লগ স্কেল।** আপনার চার্টিং প্যাকেজে একবার সেট করে বিষয়টি নিয়ে ভাবা বন্ধ করুন।
- **শূন্য-রেঞ্জ ক্যান্ডেলকে একটি প্রশ্ন ভাবুন, কখনো doji নয়।** নাম দেওয়ার আগে ভলিউম ও সার্কিট ব্যান্ড দেখুন। দুই সেকেন্ডের যাচাই একটি কাটা ৯.৯% চলাচলকে একটি খালি ঘর থেকে আলাদা করে।
- **যে চার্ট ট্রেড করতে চান তা দেখার আগেই বর্জন সীমা তৈরি করুন।** ১০% ও ৩০% প্রথা; গুরুত্বপূর্ণ হলো সেগুলো আগেই লেখা হয়েছিল, ঠিক যেমন অধ্যায় ২৫ গুণমান-মেঝের ক্ষেত্রে দাবি করেছিল।
- **অতরল নামের জন্য পয়েন্ট-অ্যান্ড-ফিগার চার্ট হাতিয়ারে রাখুন।** এর সময় অক্ষ নেই, তাই ধারাবাহিক শূন্য-ভলিউম সেশন একে বিকৃত করতে পারে না। ডিএসই-তে এটি মারাত্মকভাবে কম ব্যবহৃত আর এটিই একমাত্র উপস্থাপনা যা পাতলা হওয়ার সমস্যায় কাঠামোগতভাবে অনাক্রম্য।
- **বিয়ারিশ প্যাটার্নকে কখনো ট্রেড আইডিয়া হতে দেবেন না।** সিকিউরিটিজ-ধার বাজার ছাড়া তা কেবল একটি প্রস্থান বা সাইজিং উপাদান হতে পারে। আমদানি করা চার্ট সাহিত্যের অর্ধেক এমন একটি শর্ট সাইড ধরে নেয় যা আপনার নেই।`,
    },

    exercises: {
      en: `1. Pull 60 sessions of daily OHLCV for any DSE name from dsebd.org. Build the flag column from §26.10. What is $\\Psi$? Which of the three exclusion conditions fired most often?
2. Compute ATR(14) on the full 60 sessions and on the clean subset. Report $\\Omega$. Now convert both into a position size at 2% risk on a BDT 10 lakh account and state the difference in shares.
3. Repeat exercises 1 and 2 for a top-10 turnover name and for a name outside the top 200. Compare the two $\\Psi$ values. What does the gap tell you about which names Part III's tools can be applied to at all?
4. Take your 60-session series and verify that $\\sum r_t = \\ln(C_{60}/C_0)$. Now deliberately delete one row from the middle without fixing the previous-close column, and confirm the check fails.
5. Find a session in your data where $H = L$. Look up its volume and its circuit bands. Classify it as a truncated move or an empty market, and write down which evidence decided it.
6. Chart the same name twice over five years, once arithmetic and once logarithmic. Draw what looks like the obvious trendline on each. Where do the two lines sit relative to each other at the left edge?
7. Take a name that was subject to a floor price. Compute a 50-day moving average that spans the floor period. Then compute it excluding those sessions. Which number would you have quoted to a client, and why?
8. Resample your daily series to weekly bars. Recompute $\\Psi$ on the weekly series. By how much does the unusable fraction fall, and does the series cross from "unfit" into "usable"?
9. Change the tick rounding in your sheet from \`FLOOR\`/\`CEILING\` to \`ROUND\` on both bands. How many limit-locked sessions does your detector now miss?
10. Build a point-and-figure chart by hand for the illiquid name from exercise 3, using a box size of 2% and a three-box reversal. How many columns does it produce from 60 sessions, and what happened to the zero-volume days?
11. In three sentences, write down what your prepared series still cannot tell you. Keep it with the sheet.`,
      bn: `১. dsebd.org থেকে যেকোনো ডিএসই নামের ৬০টি সেশনের দৈনিক OHLCV নিন। §২৬.১০-এর চিহ্ন কলাম তৈরি করুন। $\\Psi$ কত? তিনটি বর্জন শর্তের কোনটি সবচেয়ে বেশি বার সক্রিয় হলো?
২. পূর্ণ ৬০ সেশনে ও পরিচ্ছন্ন উপসেটে ATR(১৪) গণনা করুন। $\\Omega$ জানান। এবার ১০ লক্ষ টাকার হিসাবে ২% ঝুঁকিতে দুটোকেই পজিশন আকারে রূপান্তর করুন ও শেয়ারের পার্থক্য বলুন।
৩. একটি শীর্ষ-১০ টার্নওভার নাম ও শীর্ষ ২০০-র বাইরের একটি নামের জন্য অনুশীলন ১ ও ২ পুনরাবৃত্তি করুন। দুটি $\\Psi$ তুলনা করুন। ব্যবধানটি বলে তৃতীয় খণ্ডের হাতিয়ার আদৌ কোন নামে প্রয়োগ করা যায়?
৪. আপনার ৬০-সেশনের সিরিজে যাচাই করুন $\\sum r_t = \\ln(C_{60}/C_0)$। এবার আগের-ক্লোজ কলাম না ঠিক করে ইচ্ছাকৃতভাবে মাঝ থেকে একটি সারি মুছুন, ও নিশ্চিত করুন যাচাইটি ব্যর্থ হয়।
৫. আপনার ডেটায় এমন একটি সেশন খুঁজুন যেখানে $H = L$। এর ভলিউম ও সার্কিট ব্যান্ড দেখুন। একে কাটা চলাচল না খালি বাজার হিসেবে শ্রেণিবদ্ধ করুন, আর কোন প্রমাণে সিদ্ধান্ত নিলেন লিখুন।
৬. একই নাম পাঁচ বছরে দুবার আঁকুন, একবার অ্যারিথমেটিক একবার লগারিদমিক। প্রতিটিতে যা স্পষ্ট ট্রেন্ডলাইন মনে হয় তা আঁকুন। বাম প্রান্তে দুটি রেখা পরস্পরের তুলনায় কোথায় বসে?
৭. ফ্লোর প্রাইসের আওতায় ছিল এমন একটি নাম নিন। ফ্লোর সময়কালজুড়ে বিস্তৃত ৫০-দিনের মুভিং অ্যাভারেজ গণনা করুন। তারপর ঐ সেশনগুলো বাদ দিয়ে গণনা করুন। কোন সংখ্যাটি ক্লায়েন্টকে বলতেন, এবং কেন?
৮. আপনার দৈনিক সিরিজ সাপ্তাহিক বারে রূপান্তর করুন। সাপ্তাহিক সিরিজে $\\Psi$ পুনর্গণনা করুন। অব্যবহার্য ভগ্নাংশ কতটা কমল, আর সিরিজটি কি "অনুপযুক্ত" থেকে "ব্যবহারযোগ্য"-এ যায়?
৯. আপনার শিটে দুটি ব্যান্ডেই টিক গোল করা \`FLOOR\`/\`CEILING\` থেকে \`ROUND\`-এ বদলান। আপনার ডিটেক্টর এখন কতগুলো সীমা-লক সেশন মিস করে?
১০. অনুশীলন ৩-এর অতরল নামটির জন্য হাতে একটি পয়েন্ট-অ্যান্ড-ফিগার চার্ট তৈরি করুন, ২% বক্স আকার ও তিন-বক্স রিভার্সাল ব্যবহার করে। ৬০ সেশন থেকে কতগুলো কলাম হয়, আর শূন্য-ভলিউমের দিনগুলোর কী হলো?
১১. তিন বাক্যে লিখুন আপনার প্রস্তুত সিরিজ এখনো আপনাকে কী বলতে পারে না। শিটের সঙ্গে রেখে দিন।`,
    },

    summary: {
      en: `- A price chart is a **record of transacted consensus** — complete, timestamped, unrevised, and free of management discretion. It is not a forecast. The honest question it answers is conditional: *given that the history looks like this, what happened next, and how often was that wrong?*
- **Part II answers WHAT, Part III answers WHEN**, and neither substitutes for the other. Chapter 25 decides the universe; a chart is never permitted to add a name the scorecard rejected.
- Four representations discard different things. **Line** keeps only the close and is often the most honest five-year view of a thin name; **OHLC** and **candlestick** carry identical information with different encoding; **point-and-figure** discards time entirely and is structurally immune to zero-volume sessions — badly under-used on the DSE.
- **Log scale above eighteen months or 100% of movement**, without exception. Log returns are used throughout because they add: $\\sum r_t = \\ln(C_n/C_0)$, which gives you a two-cell audit for the misaligned previous-close column.
- **Daily is the default, weekly is for trend, intraday on a thin DSE name measures the absence of trading** — twenty bars with a trade and 280 repeating the last print.
- **Part III inherits four DSE constraints:** circuit breakers truncate the true range, floor-price episodes are not price data, thin float distorts patterns, and there is no reliable short side — so bearish signals are exits and sizing inputs, never trade ideas.
- The worked case: **four of ten MIDCO sessions are not price data.** Day 3 is a +9.9% limit-locked move that draws a perfect zero-range doji; Day 8 draws the identical candle on 3,000 shares in an empty book. **A routine that cannot separate them finds "indecision" in both and is wrong twice, in opposite directions.**
- Preparation changes the numbers materially: **ATR 2.90 contaminated against 2.20 clean, a 1.32× overstatement**; annualised volatility 101% against 64%. Priced in shares at 2% risk, that is **3,448 shares instead of 4,545 — a position 32% smaller than warranted, with a stop 32% too wide.**
- **Neither number is "the truth."** The full-sample figure measures the exchange's band as much as the stock; the clean figure estimates what the stock does when permitted to move. **Compute both, know which you are using, and say so.**
- **Discipline established:** build the flag column before any indicator, report $\\Psi$ alongside every signal, keep the additivity check permanently in the sheet, and set the exclusion thresholds in writing before you look at a chart you want to trade.`,
      bn: `- প্রাইস চার্ট **সম্পন্ন লেনদেনের ঐকমত্যের রেকর্ড** — সম্পূর্ণ, সময়-চিহ্নিত, অসংশোধিত ও ব্যবস্থাপনার বিবেচনামুক্ত। এটি পূর্বাভাস নয়। এটি যে সৎ প্রশ্নের উত্তর দেয় তা শর্তাধীন: *ইতিহাস এমন দেখালে তারপর কী ঘটেছে, আর কতবার তা ভুল হয়েছে?*
- **দ্বিতীয় খণ্ড উত্তর দেয় কী, তৃতীয় খণ্ড উত্তর দেয় কখন**, আর কোনোটি অন্যটির বিকল্প নয়। অধ্যায় ২৫ ইউনিভার্স ঠিক করে; স্কোরকার্ডে বাতিল নাম চার্টকে কখনো যোগ করতে দেওয়া হয় না।
- চারটি উপস্থাপনা ভিন্ন জিনিস বাদ দেয়। **লাইন** কেবল ক্লোজ রাখে ও পাতলা নামের পাঁচ বছরের সবচেয়ে সৎ দৃশ্য প্রায়ই এটিই; **OHLC** ও **ক্যান্ডেলস্টিক** ভিন্ন এনকোডিংয়ে অভিন্ন তথ্য বহন করে; **পয়েন্ট-অ্যান্ড-ফিগার** সময় সম্পূর্ণ বাদ দেয় ও শূন্য-ভলিউম সেশনে কাঠামোগতভাবে অনাক্রম্য — ডিএসই-তে মারাত্মকভাবে কম ব্যবহৃত।
- **আঠারো মাস বা ১০০% চলাচলের ওপরে লগ স্কেল**, ব্যতিক্রমহীনভাবে। লগ রিটার্ন সর্বত্র ব্যবহৃত কারণ তারা যোগ হয়: $\\sum r_t = \\ln(C_n/C_0)$, যা আপনাকে অসংগত আগের-ক্লোজ কলামের জন্য দুই-সেলের নিরীক্ষা দেয়।
- **ডেইলি ডিফল্ট, উইকলি ট্রেন্ডের জন্য, আর পাতলা ডিএসই নামে ইন্ট্রাডে লেনদেনের অনুপস্থিতি মাপে** — কুড়িটি লেনদেনযুক্ত বার আর ২৮০টি শেষ প্রিন্টের পুনরাবৃত্তি।
- **তৃতীয় খণ্ড চারটি ডিএসই সীমাবদ্ধতা উত্তরাধিকারসূত্রে পায়:** সার্কিট ব্রেকার true range কেটে দেয়, ফ্লোর-প্রাইস পর্ব প্রাইস ডেটা নয়, পাতলা ফ্লোট প্যাটার্ন বিকৃত করে, আর নির্ভরযোগ্য শর্ট সাইড নেই — তাই বিয়ারিশ সংকেত প্রস্থান ও সাইজিংয়ের উপাদান, কখনো ট্রেড আইডিয়া নয়।
- উদাহরণ: **দশটি MIDCO সেশনের চারটি প্রাইস ডেটা নয়।** দিন ৩ একটি +৯.৯% সীমা-লক চলাচল যা নিখুঁত শূন্য-রেঞ্জ doji আঁকে; দিন ৮ খালি বইয়ে ৩,০০০ শেয়ারে অভিন্ন ক্যান্ডেল আঁকে। **যে রুটিন এদের আলাদা করতে পারে না সে দুটোতেই "দ্বিধা" পায় ও বিপরীত দিকে দুবার ভুল করে।**
- প্রস্তুতি সংখ্যাগুলো উল্লেখযোগ্যভাবে বদলায়: **দূষিত ATR ২.৯০ বনাম পরিচ্ছন্ন ২.২০, ১.৩২× অতিকথন**; বার্ষিকীকৃত ভোলাটিলিটি ১০১% বনাম ৬৪%। ২% ঝুঁকিতে শেয়ারে হিসাব করলে তা **৪,৫৪৫-এর বদলে ৩,৪৪৮ শেয়ার — প্রয়োজনের চেয়ে ৩২% ছোট পজিশন, ৩২% বেশি চওড়া স্টপসহ।**
- **কোনো সংখ্যাই "সত্য" নয়।** পূর্ণ-নমুনার সংখ্যা শেয়ারের মতোই এক্সচেঞ্জের ব্যান্ড মাপে; পরিচ্ছন্ন সংখ্যা আঁচ করে শেয়ারটি নড়ার অনুমতি পেলে কী করে। **দুটোই গণনা করুন, কোনটি ব্যবহার করছেন জানুন, এবং তা বলুন।**
- **প্রতিষ্ঠিত শৃঙ্খলা:** যেকোনো ইন্ডিকেটরের আগে চিহ্ন কলাম তৈরি করুন, প্রতিটি সংকেতের পাশে $\\Psi$ জানান, যোগশীলতা যাচাই শিটে স্থায়ীভাবে রাখুন, আর যে চার্ট ট্রেড করতে চান তা দেখার আগেই বর্জন সীমা লিখিতভাবে নির্ধারণ করুন।`,
    },
  },

  interview: [
    {
      q: {
        en: 'A DSE session shows open, high, low and close all equal. Is that a doji?',
        bn: 'একটি ডিএসই সেশনে open, high, low ও close সবই সমান। এটি কি একটি doji?',
      },
      a: {
        en: 'Not until I have looked at two other numbers, because that candle has two completely different causes on this exchange. If the close sits at the circuit band computed from the previous close, it is a limit-locked session — the price gapped to the ceiling at the open and was never permitted to trade anywhere else. That is the most violent kind of day, not indecision, and its true range equals the entire gap even though high minus low is zero. If instead the close is nowhere near either band and the volume is a few thousand shares, it is the opposite failure: one trade in an empty book, a picture of an absent market. In the worked sample Day 3 and Day 8 draw the identical figure for these opposite reasons. So the answer is that the shape alone is not diagnostic, and the two numbers that settle it are volume and the band derived from the previous close.',
        bn: 'আরও দুটি সংখ্যা না দেখা পর্যন্ত নয়, কারণ এই এক্সচেঞ্জে ঐ ক্যান্ডেলের সম্পূর্ণ ভিন্ন দুটি কারণ আছে। ক্লোজ যদি আগের ক্লোজ থেকে গণিত সার্কিট ব্যান্ডে বসে, তবে এটি সীমা-লক সেশন — দাম ওপেনেই ছাদে গ্যাপ করেছে ও অন্য কোথাও লেনদেনের অনুমতি পায়নি। এটি সবচেয়ে হিংস্র ধরনের দিন, দ্বিধা নয়, আর high বিয়োগ low শূন্য হলেও এর true range পুরো গ্যাপের সমান। বদলে ক্লোজ যদি কোনো ব্যান্ডের ধারেকাছেও না থাকে ও ভলিউম কয়েক হাজার শেয়ার হয়, তবে এটি বিপরীত ব্যর্থতা: খালি বইয়ে একটি লেনদেন, একটি অনুপস্থিত বাজারের ছবি। উদাহরণ নমুনায় দিন ৩ ও দিন ৮ এই বিপরীত কারণে অভিন্ন আকৃতি আঁকে। তাই উত্তর হলো আকৃতি একাই নির্ণায়ক নয়, আর যে দুটি সংখ্যা বিষয়টি মীমাংসা করে তা হলো ভলিউম ও আগের ক্লোজ থেকে পাওয়া ব্যান্ড।',
      },
    },
    {
      q: {
        en: 'Why does Part III use log returns rather than percentage returns?',
        bn: 'তৃতীয় খণ্ড শতাংশ রিটার্নের বদলে লগ রিটার্ন কেন ব্যবহার করে?',
      },
      a: {
        en: 'Principally because they add. The sum of the daily log returns over a window equals the log return of the whole window, which simple percentage changes do not satisfy — a plus fifty percent followed by a minus fifty percent is minus twenty-five percent, not zero, whereas the log equivalents sum correctly. That property has two practical consequences. It makes volatility aggregation coherent, so the square-root-of-time scaling to an annual figure is defensible rather than arbitrary. And it gives you a free audit: in the preparation sheet, the sum of the log return column must equal the log of the last close over the first previous close, and if those two cells disagree your previous-close column is misaligned. On the worked sample both read five point six five percent. That is a two-cell check for the most damaging and least visible error in time-series work, which is why it stays in the sheet permanently.',
        bn: 'মূলত কারণ তারা যোগ হয়। একটি জানালার দৈনিক লগ রিটার্নের যোগফল পুরো জানালার লগ রিটার্নের সমান, যা সরল শতাংশ পরিবর্তন পূরণ করে না — যোগ পঞ্চাশ শতাংশের পর বিয়োগ পঞ্চাশ শতাংশ শূন্য নয়, বিয়োগ পঁচিশ শতাংশ, অথচ লগ সমতুল্যগুলো সঠিকভাবে যোগ হয়। এই ধর্মের দুটি ব্যবহারিক পরিণতি। এটি ভোলাটিলিটি সমষ্টিকরণকে সুসংগত করে, তাই বার্ষিক সংখ্যায় বর্গমূল-সময় মাপন যথেচ্ছ না হয়ে সমর্থনযোগ্য হয়। আর এটি একটি বিনামূল্যের নিরীক্ষা দেয়: প্রস্তুতি শিটে লগ রিটার্ন কলামের যোগফল অবশ্যই শেষ ক্লোজ ভাগ প্রথম আগের-ক্লোজের লগের সমান হবে, আর ঐ দুটি সেল না মিললে আপনার আগের-ক্লোজ কলাম অসংগত। উদাহরণ নমুনায় দুটোই পাঁচ দশমিক ছয় পাঁচ শতাংশ পড়ে। এটি টাইম-সিরিজ কাজের সবচেয়ে ক্ষতিকর ও সবচেয়ে কম দৃশ্যমান ভুলের জন্য দুই-সেলের যাচাই, আর সেজন্যই এটি স্থায়ীভাবে শিটে থাকে।',
      },
    },
    {
      q: {
        en: 'You exclude limit-locked sessions from your volatility estimate. Are you not discarding real information?',
        bn: 'আপনি ভোলাটিলিটি আঁচ থেকে সীমা-লক সেশন বাদ দেন। আপনি কি প্রকৃত তথ্য ফেলে দিচ্ছেন না?',
      },
      a: {
        en: 'Yes, and I would not defend the exclusion as costless. A limit-up genuinely is a large move, and a system that never observes one will understate tail risk — that is a real objection and I would state it to a client rather than let them discover it. The position I actually hold is not that the clean number is the truth. It is that neither number is. The full-sample figure measures the exchange band as much as it measures the stock, because on a locked session the price stopped where the rule stopped it rather than where supply met demand; the clean figure estimates what the stock does when it is permitted to move. On the worked sample those are one hundred and one percent and sixty-four percent annualised, and the gap is entirely a modelling choice rather than a fact about the company. So I compute both, I report which one is feeding a given decision, and I quote the unusable fraction alongside — forty percent, in that sample — so the person reading the signal can discount it themselves.',
        bn: 'হ্যাঁ, আর আমি বর্জনটিকে খরচহীন বলে সমর্থন করব না। limit-up সত্যিই একটি বড় চলাচল, আর যে সিস্টেম কখনো তা দেখে না সে টেইল ঝুঁকি কম বলবে — এটি একটি প্রকৃত আপত্তি আর আমি ক্লায়েন্টকে নিজেই তা বলব, তাঁকে আবিষ্কার করতে দেব না। আমার প্রকৃত অবস্থান এই নয় যে পরিচ্ছন্ন সংখ্যাটি সত্য। বরং কোনোটিই নয়। পূর্ণ-নমুনার সংখ্যা শেয়ারের মতোই এক্সচেঞ্জ ব্যান্ড মাপে, কারণ লক হওয়া সেশনে দাম যেখানে চাহিদা সরবরাহের সঙ্গে মিলেছে সেখানে নয়, যেখানে নিয়ম থামিয়েছে সেখানে থেমেছে; পরিচ্ছন্ন সংখ্যা আঁচ করে শেয়ারটি নড়ার অনুমতি পেলে কী করে। উদাহরণ নমুনায় সেগুলো বার্ষিকীকৃত একশো এক শতাংশ ও চৌষট্টি শতাংশ, আর ব্যবধানটি কোম্পানি সম্পর্কে তথ্য নয়, সম্পূর্ণভাবে একটি মডেলিং পছন্দ। তাই আমি দুটোই গণনা করি, কোনটি একটি নির্দিষ্ট সিদ্ধান্তে যাচ্ছে তা জানাই, আর পাশে অব্যবহার্য ভগ্নাংশ বলি — ঐ নমুনায় চল্লিশ শতাংশ — যাতে সংকেত পড়া ব্যক্তি নিজেই তা ছাড় দিতে পারেন।',
      },
    },
    {
      q: {
        en: 'What is the practical cost of computing an indicator on an unprepared DSE series?',
        bn: 'অপ্রস্তুত ডিএসই সিরিজে ইন্ডিকেটর গণনার ব্যবহারিক খরচ কী?',
      },
      a: {
        en: 'It shows up in position size, which is where I would always take the argument, because a ratio persuades nobody. On the ten-session sample the average true range on everything is two point nine zero against two point two zero on the six clean sessions — a thirty-two percent overstatement. Feed that into a standard two-percent risk rule with a two-ATR stop on a ten lakh account and the contaminated series buys three thousand four hundred and forty-eight shares where the clean one buys four thousand five hundred and forty-five. So you take a position roughly a third smaller than the stock actually warrants, and simultaneously place your stop a third further away than its behaviour requires. Both errors point the same direction: less capital at work, more room given away, lower expectancy. And none of it is visible on the chart — the series looks perfectly ordinary, which is precisely why the flag column has to be built before the indicator rather than after a result looks wrong.',
        bn: 'এটি পজিশনের আকারে দেখা যায়, আর আমি তর্কটি সবসময় সেখানেই নিয়ে যাব, কারণ অনুপাত কাউকে বোঝায় না। দশ-সেশনের নমুনায় সবকিছুর ওপর গড় true range দুই দশমিক নয় শূন্য বনাম ছয়টি পরিচ্ছন্ন সেশনে দুই দশমিক দুই শূন্য — বত্রিশ শতাংশ অতিকথন। দশ লক্ষের হিসাবে দুই-ATR স্টপসহ প্রমিত দুই-শতাংশ ঝুঁকি নিয়মে তা ঢোকালে দূষিত সিরিজ তিন হাজার চারশো আটচল্লিশ শেয়ার কেনে যেখানে পরিচ্ছন্নটি কেনে চার হাজার পাঁচশো পঁয়তাল্লিশ। অর্থাৎ শেয়ারের প্রকৃত প্রয়োজনের চেয়ে প্রায় এক-তৃতীয়াংশ ছোট পজিশন নিচ্ছেন, আর একইসঙ্গে তার আচরণের প্রয়োজনের চেয়ে এক-তৃতীয়াংশ দূরে স্টপ বসাচ্ছেন। দুটি ভুলই একই দিকে নির্দেশ করে: কম পুঁজি কাজে, বেশি জায়গা ছাড়, কম প্রত্যাশা। আর এর কিছুই চার্টে দেখা যায় না — সিরিজটি নিখুঁত সাধারণ দেখায়, আর ঠিক সেজন্যই চিহ্ন কলামটি ফলাফল ভুল দেখানোর পরে নয়, ইন্ডিকেটরের আগেই তৈরি করতে হয়।',
      },
    },
    {
      q: {
        en: 'When must a chart be plotted on a logarithmic scale, and what does an arithmetic scale hide?',
        bn: 'কখন একটি চার্ট লগারিদমিক স্কেলে আঁকতে হবে, আর অ্যারিথমেটিক স্কেল কী আড়াল করে?',
      },
      a: {
        en: 'My rule is anything spanning more than about eighteen months, or covering more than a hundred percent of movement, goes on a log scale, and below that it rarely matters. The reason is that an arithmetic axis gives equal vertical space to equal taka amounts rather than equal percentage changes. Take a stock that ran from twenty to two hundred over eight years. The first double, twenty to forty, is a hundred percent gain and occupies a sliver of the axis; the final leg from a hundred and eighty to two hundred is eleven percent and occupies the same vertical distance. So the chart makes the early compounding — which is where nearly all the return was actually earned — visually invisible, and makes the late moves look dramatic. The consequence that matters for Part III is that a trendline drawn on that axis is drawn through a distortion. It is not the trendline you think you have drawn, and any support or resistance level you derive from it inherits the same error.',
        bn: 'আমার নিয়ম হলো প্রায় আঠারো মাসের বেশি বিস্তৃত, বা একশো শতাংশের বেশি চলাচল ঢাকা যেকোনো কিছু লগ স্কেলে যায়, আর তার নিচে খুব একটা যায় আসে না। কারণ অ্যারিথমেটিক অক্ষ সমান শতাংশ পরিবর্তনের বদলে সমান টাকার অঙ্ককে সমান উল্লম্ব জায়গা দেয়। আট বছরে কুড়ি থেকে দুইশোতে যাওয়া একটি শেয়ার ধরুন। প্রথম দ্বিগুণ, কুড়ি থেকে চল্লিশ, একশো শতাংশ লাভ আর অক্ষের এক চিলতে জায়গা নেয়; একশো আশি থেকে দুইশোর শেষ ধাপ এগারো শতাংশ আর একই উল্লম্ব দূরত্ব নেয়। তাই চার্টটি প্রাথমিক কম্পাউন্ডিং — যেখানে প্রায় পুরো রিটার্নই সত্যিই অর্জিত হয়েছে — দৃশ্যত অদৃশ্য করে, আর শেষের চলাচলকে নাটকীয় দেখায়। তৃতীয় খণ্ডের জন্য যে পরিণতি গুরুত্বপূর্ণ তা হলো ঐ অক্ষে আঁকা ট্রেন্ডলাইন একটি বিকৃতির মধ্য দিয়ে আঁকা। আপনি যে ট্রেন্ডলাইন এঁকেছেন ভাবছেন এটি সেটি নয়, আর তা থেকে বের করা যেকোনো সাপোর্ট বা রেজিস্ট্যান্স স্তর একই ভুল উত্তরাধিকারসূত্রে পায়।',
      },
    },
    {
      q: {
        en: 'Your chart gives a clean bullish breakout on a company that Chapter 25 rejected. What do you do?',
        bn: 'অধ্যায় ২৫ যে কোম্পানি বাতিল করেছে তাতে আপনার চার্ট একটি পরিচ্ছন্ন বুলিশ ব্রেকআউট দেয়। আপনি কী করবেন?',
      },
      a: {
        en: 'Nothing, and the reason is structural rather than a matter of caution. The two disciplines answer different questions and the ordering between them is fixed: the scorecard decides which companies are ownable at all, and the chart decides when to act within that list. A chart is never permitted to add a name to the universe. If it were, the gates would be weights again — outvotable by a pattern — which is exactly the failure Chapter 25 was built to prevent, only arriving from a new direction. I would also be clear about what I am not claiming. I am not saying the breakout is fake; it may well run, and it may run a long way. I am saying the pattern is a real pattern on a company whose auditor issued a disclaimer, or whose accounts were never filed, and that the reason those gates are terminal is that they make every other number unreliable. Trading it would mean betting on price action in a company where I have no basis for believing the reported figures, which is not a technical position, it is a rumour position.',
        bn: 'কিছুই না, আর কারণটি সতর্কতার বিষয় নয়, কাঠামোগত। দুটি শৃঙ্খলা ভিন্ন প্রশ্নের উত্তর দেয় আর তাদের মধ্যে ক্রমটি স্থির: স্কোরকার্ড ঠিক করে কোন কোম্পানিগুলো আদৌ মালিকানাযোগ্য, আর চার্ট ঠিক করে ঐ তালিকার ভেতরে কখন কাজ করতে হবে। চার্টকে কখনো ইউনিভার্সে নাম যোগ করার অনুমতি দেওয়া হয় না। দিলে গেটগুলো আবার ওজন হয়ে যেত — একটি প্যাটার্ন দিয়ে ভোটে হারানো যায় এমন — আর ঠিক এই ব্যর্থতা ঠেকাতেই অধ্যায় ২৫ গড়া হয়েছিল, কেবল এবার নতুন দিক থেকে আসছে। আমি কী দাবি করছি না তাও পরিষ্কার করব। আমি বলছি না ব্রেকআউটটি ভুয়া; তা ভালোভাবেই চলতে পারে, অনেক দূরও যেতে পারে। আমি বলছি প্যাটার্নটি এমন একটি কোম্পানির ওপর একটি প্রকৃত প্যাটার্ন যার নিরীক্ষক ডিসক্লেইমার দিয়েছেন, বা যার হিসাব কখনো দাখিল হয়নি, আর ঐ গেটগুলো চূড়ান্ত কারণ তারা বাকি প্রতিটি সংখ্যাকে অনির্ভরযোগ্য করে দেয়। এটি ট্রেড করার অর্থ এমন একটি কোম্পানিতে দামের চলাচলের ওপর বাজি ধরা যেখানে প্রতিবেদিত সংখ্যা বিশ্বাস করার আমার কোনো ভিত্তি নেই, যা একটি টেকনিক্যাল অবস্থান নয়, একটি গুজব অবস্থান।',
      },
    },
  ],

  quiz: [
    {
      q: {
        en: 'A price chart is best described as:',
        bn: 'একটি প্রাইস চার্টের সর্বোত্তম বর্ণনা:',
      },
      options: {
        en: [
          'A forecast of future prices',
          'A record of transacted consensus',
          'A measure of a company\'s value',
          'An indicator of management quality',
        ],
        bn: [
          'ভবিষ্যৎ দামের পূর্বাভাস',
          'সম্পন্ন লেনদেনের ঐকমত্যের রেকর্ড',
          'একটি কোম্পানির মূল্যের পরিমাপ',
          'ব্যবস্থাপনার গুণমানের সূচক',
        ],
      },
      answer: 1,
    },
    {
      q: {
        en: 'On Day 3 of the MIDCO sample, high minus low is zero but true range is:',
        bn: 'MIDCO নমুনার দিন ৩-এ high বিয়োগ low শূন্য, কিন্তু true range:',
      },
      options: {
        en: ['0.00', '2.20', '5.40', '9.45'],
        bn: ['০.০০', '২.২০', '৫.৪০', '৯.৪৫'],
      },
      answer: 2,
    },
    {
      q: {
        en: 'The upper circuit band is rounded to the tick using:',
        bn: 'ঊর্ধ্ব সার্কিট ব্যান্ড টিকে গোল করা হয়:',
      },
      options: {
        en: ['CEILING — round up', 'FLOOR — round down', 'ROUND — nearest', 'No rounding is needed'],
        bn: ['CEILING — ওপরের দিকে', 'FLOOR — নিচের দিকে', 'ROUND — নিকটতম', 'গোল করার দরকার নেই'],
      },
      answer: 1,
    },
    {
      q: {
        en: 'Log returns are preferred to percentage returns mainly because:',
        bn: 'শতাংশ রিটার্নের চেয়ে লগ রিটার্ন প্রধানত পছন্দনীয় কারণ:',
      },
      options: {
        en: [
          'They are easier to calculate',
          'They add across time',
          'They are always positive',
          'They ignore dividends',
        ],
        bn: [
          'গণনা করা সহজ',
          'সময়জুড়ে যোগ হয়',
          'সবসময় ধনাত্মক',
          'লভ্যাংশ উপেক্ষা করে',
        ],
      },
      answer: 1,
    },
    {
      q: {
        en: 'In the MIDCO sample, the unusable fraction Ψ is:',
        bn: 'MIDCO নমুনায় অব্যবহার্য ভগ্নাংশ Ψ:',
      },
      options: {
        en: ['10%', '20%', '30%', '40%'],
        bn: ['১০%', '২০%', '৩০%', '৪০%'],
      },
      answer: 3,
    },
    {
      q: {
        en: 'Contaminated ATR 2.90 versus clean ATR 2.20 produces a position that is:',
        bn: 'দূষিত ATR ২.৯০ বনাম পরিচ্ছন্ন ATR ২.২০ এমন পজিশন তৈরি করে যা:',
      },
      options: {
        en: [
          '32% larger than warranted',
          '32% smaller than warranted',
          'Unchanged in size',
          'Exactly double',
        ],
        bn: [
          'প্রয়োজনের চেয়ে ৩২% বড়',
          'প্রয়োজনের চেয়ে ৩২% ছোট',
          'আকারে অপরিবর্তিত',
          'ঠিক দ্বিগুণ',
        ],
      },
      answer: 1,
    },
    {
      q: {
        en: 'A chart should be plotted on a logarithmic scale when it spans more than about:',
        bn: 'একটি চার্ট লগারিদমিক স্কেলে আঁকা উচিত যখন তা বিস্তৃত হয় প্রায়:',
      },
      options: {
        en: ['One week', 'Three months', 'Eighteen months or a 100% move', 'Twenty years only'],
        bn: ['এক সপ্তাহ', 'তিন মাস', 'আঠারো মাস বা ১০০% চলাচল', 'কেবল কুড়ি বছর'],
      },
      answer: 2,
    },
    {
      q: {
        en: 'On the DSE, a bearish technical signal is best treated as:',
        bn: 'ডিএসই-তে একটি বিয়ারিশ টেকনিক্যাল সংকেতকে সর্বোত্তমভাবে গণ্য করা হয়:',
      },
      options: {
        en: [
          'A short-selling entry',
          'An exit and position-sizing input',
          'A reason to average down',
          'Irrelevant information',
        ],
        bn: [
          'শর্ট-সেলিং প্রবেশ',
          'প্রস্থান ও পজিশন-সাইজিংয়ের উপাদান',
          'গড় কমানোর কারণ',
          'অপ্রাসঙ্গিক তথ্য',
        ],
      },
      answer: 1,
    },
    {
      q: {
        en: 'Which representation discards the time axis entirely, making it immune to zero-volume sessions?',
        bn: 'কোন উপস্থাপনা সময় অক্ষ সম্পূর্ণ বাদ দেয়, ফলে শূন্য-ভলিউম সেশনে অনাক্রম্য?',
      },
      options: {
        en: ['Line chart', 'OHLC bar', 'Candlestick', 'Point-and-figure'],
        bn: ['লাইন চার্ট', 'OHLC বার', 'ক্যান্ডেলস্টিক', 'পয়েন্ট-অ্যান্ড-ফিগার'],
      },
      answer: 3,
    },
    {
      q: {
        en: 'A chart gives a clean breakout on a name the Chapter 25 scorecard rejected. The correct action is:',
        bn: 'অধ্যায় ২৫-এর স্কোরকার্ডে বাতিল একটি নামে চার্ট পরিচ্ছন্ন ব্রেকআউট দেয়। সঠিক পদক্ষেপ:',
      },
      options: {
        en: [
          'Take a half-sized position',
          'Take nothing — the chart cannot add to the universe',
          'Re-score the company with lighter gates',
          'Buy and set a tight stop',
        ],
        bn: [
          'অর্ধেক আকারের পজিশন নেওয়া',
          'কিছুই না নেওয়া — চার্ট ইউনিভার্সে যোগ করতে পারে না',
          'হালকা গেট দিয়ে কোম্পানিটি পুনরায় স্কোর করা',
          'কিনে একটি আঁটসাঁট স্টপ বসানো',
        ],
      },
      answer: 1,
    },
  ],
};
