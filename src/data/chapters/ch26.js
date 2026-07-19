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
  },
};
