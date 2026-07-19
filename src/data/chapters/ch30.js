/**
 * Chapter 30 — Support & Resistance
 * Part III, Technical Analysis. Builds on Ch 26–29 (charts, candlesticks),
 * Ch 2 (circuit breakers), Ch 6 (floor price), Ch 5 (ask what moved the number).
 * Forward-references Ch 31 (trendlines) and Ch 39 (ATR).
 */

export default {
  n: 30,
  tools: [],

  excelSheet: {
    filename: 'ch30-level-strength-score.xlsx',
    sheetName: 'Level Score',
    cells: [
      { cell: 'A1', v: '— Instrument —' },
      { cell: 'A2', v: 'Ticker' }, { cell: 'B2', v: 'BEACONTEX' },
      { cell: 'A3', v: 'ATR(14)' }, { cell: 'B3', v: 1.6 },
      { cell: 'A4', v: 'Avg Daily Volume (20d)' }, { cell: 'B4', v: 700000 },

      { cell: 'A6', v: '— Touch Log —' },
      { cell: 'A7', v: 'Touch' }, { cell: 'B7', v: 'Price' }, { cell: 'C7', v: 'Volume' }, { cell: 'D7', v: 'Vol / ADV' },
      { cell: 'A8', v: 1 }, { cell: 'B8', v: 48.1 }, { cell: 'C8', v: 1850000 }, { cell: 'D8', f: 'C8/$B$4' },
      { cell: 'A9', v: 2 }, { cell: 'B9', v: 48.45 }, { cell: 'C9', v: 1420000 }, { cell: 'D9', f: 'C9/$B$4' },
      { cell: 'A10', v: 3 }, { cell: 'B10', v: 48 }, { cell: 'C10', v: 960000 }, { cell: 'D10', f: 'C10/$B$4' },
      { cell: 'A11', v: 4 }, { cell: 'B11', v: 48.35 }, { cell: 'C11', v: 540000 }, { cell: 'D11', f: 'C11/$B$4' },

      { cell: 'A13', v: '— Zone Construction —' },
      { cell: 'A14', v: 'Touch Count' }, { cell: 'B14', f: 'COUNT(B8:B11)' },
      { cell: 'A15', v: 'Zone Centre' }, { cell: 'B15', f: 'AVERAGE(B8:B11)' },
      { cell: 'A16', v: 'Zone Width Factor k' }, { cell: 'B16', v: 0.5 },
      { cell: 'A17', v: 'Zone Half-Width' }, { cell: 'B17', f: 'B16*B3/2' },
      { cell: 'A18', v: 'Zone Lower' }, { cell: 'B18', f: 'B15-B17' },
      { cell: 'A19', v: 'Zone Upper' }, { cell: 'B19', f: 'B15+B17' },

      { cell: 'A21', v: '— Strength Inputs —' },
      { cell: 'A22', v: 'Sessions Traded Inside Zone' }, { cell: 'B22', v: 9 },
      { cell: 'A23', v: 'Days Since Last Touch' }, { cell: 'B23', v: 37 },
      { cell: 'A24', v: 'Total Volume at Touches' }, { cell: 'B24', f: 'SUM(C8:C11)' },
      { cell: 'A25', v: 'Mean Vol Ratio at Touches' }, { cell: 'B25', f: 'B24/(B14*B4)' },
      { cell: 'A26', v: 'Exhaustion Ratio (last/first)' }, { cell: 'B26', f: 'C11/C8' },

      { cell: 'A28', v: '— Component Scores —' },
      { cell: 'A29', v: 'Touch Score (peaks at 3)' }, { cell: 'B29', f: 'CHOOSE(MIN(B14,6),12,25,30,24,16,8)' },
      { cell: 'A30', v: 'Volume Score' }, { cell: 'B30', f: 'MIN(30,15*B25)' },
      { cell: 'A31', v: 'Recency Score' }, { cell: 'B31', f: 'MAX(0,25-0.15*B23)' },
      { cell: 'A32', v: 'Duration Score' }, { cell: 'B32', f: 'MIN(15,1.5*B22)' },
      { cell: 'A33', v: 'Raw Score' }, { cell: 'B33', f: 'B29+B30+B31+B32' },
      { cell: 'A34', v: 'Exhaustion Penalty' }, { cell: 'B34', f: 'IF(AND(B26<0.5,B14>=4),12,0)' },
      { cell: 'A35', v: 'COMPOSITE STRENGTH' }, { cell: 'B35', f: 'B33-B34' },

      { cell: 'A37', v: 'VERDICT' },
      {
        cell: 'B37',
        f: 'IF(AND(B26<0.5,B14>=4),"WEAKENING - inventory consumed, favour the break",IF(B35>=70,"STRONG - trade the level",IF(B35>=50,"MODERATE - need confirmation","WEAK - ignore")))',
      },

      { cell: 'A39', v: '— Break Test —' },
      { cell: 'A40', v: 'Break Candle Close' }, { cell: 'B40', v: 49.6 },
      { cell: 'A41', v: 'Break Candle Volume' }, { cell: 'B41', v: 2240000 },
      { cell: 'A42', v: 'Penetration (BDT)' }, { cell: 'B42', f: 'B40-B19' },
      { cell: 'A43', v: 'Penetration (ATR)' }, { cell: 'B43', f: 'B42/B3' },
      { cell: 'A44', v: 'Volume Expansion (x)' }, { cell: 'B44', f: 'B41/B4' },
      { cell: 'A45', v: 'Follow-through Close' }, { cell: 'B45', v: 50.15 },
      { cell: 'A46', v: 'BREAK CLASSIFICATION' },
      {
        cell: 'B46',
        f: 'IF(AND(B43>=0.5,B44>=1.5,B45>B19),"CLEAN BREAK",IF(AND(B40<B19,B40>B18),"FALSE BREAK / STOP RUN","TEST"))',
      },

      { cell: 'A48', v: '— Post-Break Trade (polarity) —' },
      { cell: 'A49', v: 'Retest Entry' }, { cell: 'B49', v: 48.4 },
      { cell: 'A50', v: 'Stop (zone low - 0.5 ATR)' }, { cell: 'B50', f: 'B18-0.5*B3' },
      { cell: 'A51', v: 'Risk per Share' }, { cell: 'B51', f: 'B49-B50' },
      { cell: 'A52', v: 'Next Level Above (target)' }, { cell: 'B52', v: 53 },
      { cell: 'A53', v: 'Reward per Share' }, { cell: 'B53', f: 'B52-B49' },
      { cell: 'A54', v: 'Reward : Risk' }, { cell: 'B54', f: 'B53/B51' },
      { cell: 'A55', v: 'TRADE VERDICT' },
      {
        cell: 'B55',
        f: 'IF(B54>=3,"Take it - structure pays 3x or better",IF(B54>=2,"Acceptable - size down","Reject - the level is not worth the stop"))',
      },
    ],
  },

  objectives: {
    en: [
      'Explain support and resistance mechanically as positioned inventory rather than as a mystical property of a price.',
      'Construct a level as an ATR-scaled zone, not a line, and locate it from swing highs, prior consolidation, gap edges, round numbers, and the IPO price.',
      'Score a level on touches, time, volume and recency, and explain why repeated testing weakens a level rather than strengthening it.',
      'Apply a quantitative break rule — penetration in ATR units, volume expansion, and follow-through — and distinguish a clean break from a stop-run.',
      'State how the floor-price era, circuit limits, round taka figures and thin float distort every level drawn on a DSE chart.',
    ],
    bn: [
      'সাপোর্ট ও রেজিস্ট্যান্সকে দামের কোনো রহস্যময় বৈশিষ্ট্য নয়, বরং অবস্থানরত ইনভেন্টরি হিসেবে যান্ত্রিকভাবে ব্যাখ্যা করা।',
      'একটি লেভেলকে রেখা নয়, ATR-মাপা জোন হিসেবে গড়া, এবং সুইং হাই, পূর্ববর্তী কনসোলিডেশন, গ্যাপের প্রান্ত, রাউন্ড সংখ্যা ও IPO দাম থেকে তা খুঁজে বের করা।',
      'টাচ, সময়, ভলিউম ও সাম্প্রতিকতার ভিত্তিতে লেভেল স্কোর করা, এবং কেন বারবার পরীক্ষা লেভেলকে শক্তিশালী নয় দুর্বল করে তা ব্যাখ্যা করা।',
      'একটি পরিমাণগত ব্রেক নিয়ম প্রয়োগ করা — ATR এককে অনুপ্রবেশ, ভলিউম বিস্তার ও ফলো-থ্রু — এবং ক্লিন ব্রেককে স্টপ-রান থেকে আলাদা করা।',
      'ফ্লোর প্রাইসের যুগ, সার্কিট সীমা, রাউন্ড টাকার অঙ্ক ও পাতলা ফ্লোট ডিএসই চার্টে আঁকা প্রতিটি লেভেলকে কীভাবে বিকৃত করে তা বলা।',
    ],
  },

  blocks: {
    theory: {
      en: `Chapters 26 through 29 taught you to read a chart and a candle. **This chapter is about the horizontal lines people draw on it — the most useful idea in technical analysis and the most abused.**

The abuse comes from teaching it mystically. Levels are not memories held by a price. A price has no memory. **What has memory is inventory, and inventory is held by people.**

### A level is a population of positions

Consider a stock that stalled at BDT 48 three months ago and is now approaching 48 again. Three distinct groups are waiting there, and each one has a reason to act:

**1. Traders who bought at 48 and are now flat or underwater.** They have spent three months watching a losing position. When price returns to their entry, the dominant impulse is to exit at break-even. **That is supply, and it arrives without any view on the company.**

**2. Traders who wanted in below 48 and missed.** They watched the stock stall there, decided it was expensive, and the stock fell. If it comes back to 48 and looks like breaking through, they buy — not because 48 is cheap, but because they have decided the level is now beaten. **That is demand, and it arrives only after the level breaks.**

**3. Stops clustered just beyond.** Everyone short from 48 has a stop above it. Everyone long from below has a stop under the corresponding support. **A cluster of resting stop orders is a pool of guaranteed market orders**, waiting to be triggered by anyone who can push price the last few paisa.

That is the entire mechanism. **Support and resistance is not a property of the price; it is a description of where unfilled intentions are parked.** Every claim in the rest of this chapter follows from that sentence, and any claim that does not follow from it is decoration.

### Where levels come from

Levels form wherever a large amount of positioning happened at a similar price:

| Origin | Why inventory sits there |
|---|---|
| **Swing highs / lows** | The turning point is where the last buyer bought and the first seller sold |
| **Prior consolidation range** | Weeks of two-way trade means a large, diverse position book at one price |
| **Gap edges** | Everyone who wanted to trade inside the gap never got to; the unfilled intention persists |
| **Round taka figures** | Orders cluster at 50, 100, 500 because humans place them there |
| **The IPO price** | A whole cohort bought at exactly one number on one day |
| **Prior year's high / low** | Reported in the press, watched by everyone, and an anniversary of positioning |

Notice that all six are the same fact wearing different clothes: **a lot of people transacted, or wanted to transact, at approximately one number.**

### A level is a band, not a line

The single most common beginner error is drawing a level to two decimal places and then being surprised when price trades through it by four paisa and reverses.

**Inventory is not stacked at one price. It is smeared across a range.** People bought at 47.90 and 48.30 and 48.05. Your level must be a zone wide enough to contain that smear.

The correct width is not a fixed number of taka. It scales with the stock's own volatility, because a stock that moves BDT 3 a day smears its inventory over a wider band than one that moves BDT 0.40. Use ATR — the Average True Range of **Chapter 39**:

$$\\text{Zone Half-Width} = \\frac{k \\times ATR}{2}, \\qquad k \\approx 0.5$$

For a stock with ATR of BDT 1.60, that is a zone 0.80 wide — 0.40 either side of centre. **A move of 0.30 through your line is not a break. It is inside the level.**

### Polarity: why broken resistance becomes support

This is usually taught as a rule to memorise. It is not a rule; it is an arithmetic consequence of the inventory story.

Take the three groups above and run them forward through a clean break above 48:

- Group 1, the trapped longs, **got their break-even exit during the break.** Their supply is gone.
- Group 2, the ones who missed, **bought the break.** They are now long from just above 48, and *their* break-even is now the level.
- Group 3's stops **were triggered by the break**, and those short-covering buys are what powered it.

So after the break, the population at 48 has inverted. The people who were sellers there are gone; the people who are now there are buyers with a fresh entry to defend. **Resistance did not "become" support by some law of markets. The inventory changed sides.**

The same logic tells you when polarity will *fail*: if the break happened on thin volume, group 2 never showed up in size, and there is no new inventory at the level to defend it. **Polarity is only as reliable as the volume that produced the break.**

### Strength — and the point where the popular teaching is wrong

Four inputs govern how much resting inventory a level holds:

1. **Number of touches** — how many times price has reacted there.
2. **Time spent at the level** — sessions of trade inside the zone, not just wicks into it.
3. **Volume transacted there** — the actual size of the position book.
4. **Recency** — old inventory has been liquidated by other events; it is no longer waiting.

Now the important part. **You will be taught that a level tested many times is stronger. That is backwards.**

Run the inventory logic. Each test lets some of the trapped longs exit at break-even. Each test lets some of the group-2 buyers give up and buy elsewhere. **Every test consumes resting inventory.** A level touched once may be untouched supply. A level touched five times, with visibly declining volume at each touch, is a shelf that has been almost cleared out.

The diagnostic is volume across touches, not the count of touches:

$$\\text{Exhaustion Ratio} = \\frac{\\text{Volume at last touch}}{\\text{Volume at first touch}}$$

**An exhaustion ratio below 0.5 across four or more touches says the level is about to fail.** The chart looks like a fortress. The order book says the garrison has left. That is why the scoring sheet in §30.6 peaks its touch score at three touches and decays after.

### Break versus false break

"It broke the level" is not a statement of fact until you define the break. Use three conditions and require all three:

1. **A close beyond the zone edge by at least $0.5 \\times ATR$.** Not a wick — a close. Intraday penetration is exactly what a stop-run looks like.
2. **Volume at least 1.5× the twenty-day average.** A break is a transfer of inventory. Transfers show up in volume.
3. **A follow-through session that also closes beyond.** This is the condition most people skip, and it is the one that filters the majority of failures.

A move that pierces the zone intraday and closes back inside it is a **false break** — and it is not a failure to be sad about. It is a tradeable event in its own right. Someone pushed price into the stop cluster, the stops fired, and price came back. **The traders who bought that breakout are now trapped above a level that has just proven itself**, which makes them tomorrow's supply. A false break at resistance is often the highest-quality short signal the chart produces, and its mirror at support is often the highest-quality long.

### The DSE caveat — and here it is substantial

Almost everything above is imported from markets with continuous two-way trading and a deep float. **Bangladesh has neither, and four specific distortions break the analysis if you do not adjust for them.**

**1. The floor-price era created support that was not support.** For an extended period the regulator set a floor beneath which shares could not trade. On a chart this renders as a perfectly flat, perfectly respected level held for months — visually the strongest support you will ever see. **It was not support. It was a rule.** There was no positioned inventory defending it; there was an instruction. When floors were lifted, many of those "levels" gave way immediately, because there had never been buyers there — only an absence of permitted sellers. **Any level drawn across a floor-price period must be deleted from your chart.** The volume during those stretches was often close to nil, which is itself the tell: a level with no volume has no inventory, and a level with no inventory has no power.

**2. Circuit limits create artificial daily levels that dissolve overnight.** DSE applies percentage price bands per session (see Chapter 2). A stock locked at its upper band all day prints a flat top on the chart that looks exactly like resistance. It is not. It is the arithmetic edge of the day's permitted range, and tomorrow the band recomputes from a new reference. **A level that exists only because the session ran out of permitted range is not a level — it is a boundary of the ruleset.** Check whether a flat top or bottom coincides with the circuit limit before you draw anything on it.

**3. The psychologically dominant levels on DSE are the IPO price and round taka figures.** In deeper markets, prior swing structure dominates. Here, retail participation is high and the two numbers everyone actually remembers are the offer price and the round figure. **The IPO price in particular behaves as a durable level for years** — a large, identifiable cohort bought at exactly that number on exactly one day, and many of them are still holding and still waiting to get out flat. Treat the IPO price as a level even when nothing on the chart marks it.

**4. Thin float means one order can erase a level.** Chapter 1's concentration problem returns here. When free float is small, the "population of positioned traders" defending a level may be a handful of accounts. **A single institutional or sponsor-linked order can absorb the entire resting supply at a level in one print**, and the level that took eight months to build disappears in ninety seconds without any of the inventory logic playing out. Before you trust a level, ask how many taka of volume it would take to clear it. If that number is small relative to a single institutional ticket, the level is decorative.

**None of this makes levels useless on DSE.** It makes them conditional. A level formed by genuine two-way volume, in a stock with real float, outside a floor-price window and away from a circuit lock, is as informative here as anywhere. A level formed by any of the other four mechanisms is an artefact of the rulebook. **Your first job on a DSE chart is to tell them apart.**

Chapter 31 takes the same inventory argument and tilts it: trendlines and channels are this chapter's idea with a slope on it, and every caveat here applies there with one extra degree of freedom to be wrong about.`,
      bn: `অধ্যায় ২৬ থেকে ২৯ আপনাকে চার্ট ও ক্যান্ডেল পড়তে শিখিয়েছে। **এই অধ্যায় তার ওপর আঁকা অনুভূমিক রেখাগুলো নিয়ে — টেকনিক্যাল অ্যানালাইসিসের সবচেয়ে কার্যকর ধারণা এবং সবচেয়ে অপব্যবহৃত ধারণা।**

অপব্যবহারটি আসে রহস্যময়ভাবে শেখানো থেকে। লেভেল দামের ধরে রাখা কোনো স্মৃতি নয়। দামের স্মৃতি নেই। **যার স্মৃতি আছে তা হলো ইনভেন্টরি, আর ইনভেন্টরি ধরে রাখে মানুষ।**

### লেভেল হলো অবস্থানের একটি জনগোষ্ঠী

ধরুন একটি শেয়ার তিন মাস আগে ৪৮ টাকায় থেমেছিল এবং এখন আবার ৪৮-এর দিকে আসছে। সেখানে তিনটি আলাদা দল অপেক্ষা করছে, আর প্রত্যেকের কাজ করার কারণ আছে:

**১. যাঁরা ৪৮-এ কিনেছিলেন এবং এখন সমান বা লোকসানে।** তাঁরা তিন মাস ধরে একটি লোকসানি অবস্থান দেখেছেন। দাম তাঁদের এন্ট্রিতে ফিরলে প্রধান তাড়না হয় সমান-সমানে বেরিয়ে যাওয়া। **এটিই সরবরাহ, আর তা কোম্পানি সম্পর্কে কোনো মত ছাড়াই আসে।**

**২. যাঁরা ৪৮-এর নিচে ঢুকতে চেয়েছিলেন কিন্তু পারেননি।** তাঁরা দেখলেন শেয়ারটি সেখানে থেমেছে, ভাবলেন এটি দামি, আর শেয়ারটি পড়ে গেল। এটি ৪৮-এ ফিরে এসে ভাঙার মতো দেখালে তাঁরা কেনেন — ৪৮ সস্তা বলে নয়, বরং তাঁরা ঠিক করেছেন লেভেলটি এখন পরাজিত। **এটিই চাহিদা, আর তা লেভেল ভাঙার পরেই আসে।**

**৩. ঠিক ওপাশে জমা স্টপ।** ৪৮ থেকে শর্ট করা প্রত্যেকের স্টপ তার ওপরে। নিচ থেকে লং করা প্রত্যেকের স্টপ সংশ্লিষ্ট সাপোর্টের নিচে। **জমে থাকা স্টপ অর্ডারের গুচ্ছ হলো নিশ্চিত মার্কেট অর্ডারের একটি পুকুর**, যা কেউ শেষ কয়েক পয়সা ঠেলে দিলেই চালু হয়ে যাবে।

এটিই পুরো কলকব্জা। **সাপোর্ট ও রেজিস্ট্যান্স দামের কোনো বৈশিষ্ট্য নয়; এটি অপূর্ণ অভিপ্রায় কোথায় পার্ক করা আছে তার বর্ণনা।** এই অধ্যায়ের বাকি প্রতিটি দাবি ঐ বাক্য থেকে আসে, আর যে দাবি তা থেকে আসে না তা সাজসজ্জা।

### লেভেল কোথা থেকে আসে

যেখানে কাছাকাছি দামে বড় পরিমাণ অবস্থান তৈরি হয়েছে, সেখানেই লেভেল জন্মায়:

| উৎস | কেন সেখানে ইনভেন্টরি বসে |
|---|---|
| **সুইং হাই / লো** | মোড়ের বিন্দুতেই শেষ ক্রেতা কিনেছেন ও প্রথম বিক্রেতা বেচেছেন |
| **পূর্ববর্তী কনসোলিডেশন রেঞ্জ** | সপ্তাহজুড়ে দ্বিমুখী লেনদেন মানে এক দামে বড় ও বৈচিত্র্যময় অবস্থানের খাতা |
| **গ্যাপের প্রান্ত** | গ্যাপের ভেতরে যাঁরা লেনদেন করতে চেয়েছিলেন কেউ পারেননি; অপূর্ণ অভিপ্রায় থেকে যায় |
| **রাউন্ড টাকার অঙ্ক** | ৫০, ১০০, ৫০০-তে অর্ডার জমে কারণ মানুষ সেখানেই বসায় |
| **IPO দাম** | একটি গোটা দল ঠিক একটি সংখ্যায় একটি দিনে কিনেছিল |
| **আগের বছরের হাই / লো** | সংবাদপত্রে ছাপা, সবাই দেখে, আর অবস্থান তৈরির বার্ষিকী |

লক্ষ করুন ছয়টিই একই ঘটনা ভিন্ন পোশাকে: **অনেক মানুষ প্রায় একটি সংখ্যায় লেনদেন করেছেন, বা করতে চেয়েছেন।**

### লেভেল একটি ব্যান্ড, রেখা নয়

নতুনদের সবচেয়ে সাধারণ ভুল হলো দুই দশমিক পর্যন্ত লেভেল আঁকা এবং তারপর অবাক হওয়া যখন দাম চার পয়সা পেরিয়ে গিয়ে ঘুরে দাঁড়ায়।

**ইনভেন্টরি এক দামে স্তূপ হয় না। এটি একটি পরিসরজুড়ে ছড়িয়ে থাকে।** কেউ কিনেছেন ৪৭.৯০-তে, কেউ ৪৮.৩০-তে, কেউ ৪৮.০৫-তে। আপনার লেভেলকে এই ছড়ানো ধারণ করার মতো চওড়া জোন হতে হবে।

সঠিক প্রস্থ কোনো নির্দিষ্ট টাকার অঙ্ক নয়। এটি শেয়ারের নিজস্ব অস্থিরতার সঙ্গে মাপ বদলায়, কারণ দিনে ৩ টাকা নড়া শেয়ার দিনে ০.৪০ টাকা নড়া শেয়ারের চেয়ে চওড়া ব্যান্ডে ইনভেন্টরি ছড়ায়। **অধ্যায় ৩৯**-এর ATR ব্যবহার করুন:

$$\\text{Zone Half-Width} = \\frac{k \\times ATR}{2}, \\qquad k \\approx 0.5$$

ATR ১.৬০ টাকার একটি শেয়ারে এটি ০.৮০ চওড়া জোন — কেন্দ্রের দুই পাশে ০.৪০। **আপনার রেখা ভেদ করে ০.৩০ নড়া ব্রেক নয়। এটি লেভেলের ভেতরেই।**

### পোলারিটি: ভাঙা রেজিস্ট্যান্স কেন সাপোর্ট হয়

এটি সাধারণত মুখস্থ করার নিয়ম হিসেবে শেখানো হয়। এটি নিয়ম নয়; এটি ইনভেন্টরি গল্পের পাটিগাণিতিক পরিণতি।

ওপরের তিনটি দলকে নিয়ে ৪৮-এর ওপরে একটি ক্লিন ব্রেকের ভেতর দিয়ে চালান:

- দল ১, আটকে পড়া লং-রা, **ব্রেকের সময়েই তাঁদের সমান-সমান প্রস্থান পেয়ে গেছেন।** তাঁদের সরবরাহ শেষ।
- দল ২, যাঁরা সুযোগ হারিয়েছিলেন, **ব্রেকটি কিনেছেন।** তাঁরা এখন ৪৮-এর সামান্য ওপর থেকে লং, আর *তাঁদের* সমান-সমান বিন্দু এখন ঐ লেভেল।
- দল ৩-এর স্টপ **ব্রেকে চালু হয়ে গেছে**, আর ঐ শর্ট-কভারিং কেনাই ব্রেকটিকে শক্তি দিয়েছে।

তাই ব্রেকের পর ৪৮-এর জনগোষ্ঠী উল্টে গেছে। যাঁরা সেখানে বিক্রেতা ছিলেন তাঁরা নেই; যাঁরা এখন সেখানে আছেন তাঁরা ক্রেতা, নতুন এন্ট্রি রক্ষা করার তাগিদসহ। **বাজারের কোনো সূত্রে রেজিস্ট্যান্স সাপোর্টে "পরিণত হয়" না। ইনভেন্টরি পক্ষ বদলেছে।**

একই যুক্তি বলে দেয় পোলারিটি কখন *ব্যর্থ* হবে: ব্রেকটি পাতলা ভলিউমে হলে দল ২ বড় আকারে হাজিরই হয়নি, আর লেভেলটি রক্ষা করার মতো নতুন কোনো ইনভেন্টরি সেখানে নেই। **ব্রেকটি যে ভলিউমে হয়েছে পোলারিটি ঠিক ততটাই নির্ভরযোগ্য।**

### শক্তি — এবং যেখানে প্রচলিত শিক্ষা ভুল

একটি লেভেল কতটা জমা ইনভেন্টরি ধরে তা চারটি উপাদান নিয়ন্ত্রণ করে:

১. **টাচের সংখ্যা** — দাম সেখানে কতবার প্রতিক্রিয়া দেখিয়েছে।
২. **লেভেলে কাটানো সময়** — জোনের ভেতরে লেনদেনের সেশন, কেবল উঁকি দেওয়া উইক নয়।
৩. **সেখানে লেনদেন হওয়া ভলিউম** — অবস্থানের খাতার প্রকৃত আকার।
৪. **সাম্প্রতিকতা** — পুরোনো ইনভেন্টরি অন্য ঘটনায় নিষ্পত্তি হয়ে গেছে; তা আর অপেক্ষা করছে না।

এবার গুরুত্বপূর্ণ অংশ। **আপনাকে শেখানো হবে বহুবার পরীক্ষিত লেভেল বেশি শক্তিশালী। এটি উল্টো।**

ইনভেন্টরির যুক্তি চালান। প্রতিটি পরীক্ষা কিছু আটকে পড়া লং-কে সমান-সমানে বেরিয়ে যেতে দেয়। প্রতিটি পরীক্ষা দল ২-এর কিছু ক্রেতাকে হাল ছেড়ে অন্যত্র কিনতে দেয়। **প্রতিটি পরীক্ষা জমা ইনভেন্টরি খেয়ে ফেলে।** একবার ছোঁয়া লেভেল হতে পারে অস্পৃষ্ট সরবরাহ। পাঁচবার ছোঁয়া লেভেল, যেখানে প্রতিটি টাচে ভলিউম স্পষ্ট কমেছে, তা প্রায় খালি হয়ে যাওয়া একটি তাক।

নির্ণায়ক হলো টাচজুড়ে ভলিউম, টাচের সংখ্যা নয়:

$$\\text{Exhaustion Ratio} = \\frac{\\text{Volume at last touch}}{\\text{Volume at first touch}}$$

**চার বা তার বেশি টাচে ০.৫-এর নিচে এক্সহশন রেশিও বলে লেভেলটি ভাঙতে চলেছে।** চার্টে দেখায় দুর্গ। অর্ডার বুক বলে সৈন্যরা চলে গেছে। এ কারণেই §৩০.৬-এর স্কোরিং শিটে টাচ স্কোর তিন টাচে সর্বোচ্চ হয়ে তারপর কমে।

### ব্রেক বনাম ফলস ব্রেক

"এটি লেভেল ভেঙেছে" ব্রেকের সংজ্ঞা না দেওয়া পর্যন্ত তথ্যগত বক্তব্য নয়। তিনটি শর্ত ব্যবহার করুন এবং তিনটিই দাবি করুন:

১. **জোনের প্রান্ত ছাড়িয়ে অন্তত $0.5 \\times ATR$ দূরে একটি ক্লোজ।** উইক নয় — ক্লোজ। দিনের ভেতরের অনুপ্রবেশ ঠিক এমনই দেখায় যেমন স্টপ-রান দেখায়।
২. **কুড়ি দিনের গড়ের অন্তত ১.৫ গুণ ভলিউম।** ব্রেক হলো ইনভেন্টরির হস্তান্তর। হস্তান্তর ভলিউমে দেখা যায়।
৩. **একটি ফলো-থ্রু সেশন যা ওপাশেই ক্লোজ করে।** এই শর্তটিই বেশিরভাগ মানুষ বাদ দেন, আর এটিই বেশিরভাগ ব্যর্থতা ছেঁকে ফেলে।

যে নড়াচড়া দিনের ভেতরে জোন ভেদ করে কিন্তু জোনের ভেতরে ফিরে ক্লোজ করে তা **ফলস ব্রেক** — আর এটি দুঃখ করার মতো ব্যর্থতা নয়। এটি নিজেই একটি লেনদেনযোগ্য ঘটনা। কেউ দামকে স্টপের গুচ্ছে ঠেলে দিল, স্টপ চালু হলো, দাম ফিরে এল। **যাঁরা ঐ ব্রেকআউট কিনেছিলেন তাঁরা এখন এমন এক লেভেলের ওপরে আটকা যা সবেমাত্র নিজেকে প্রমাণ করেছে**, ফলে তাঁরাই আগামীকালের সরবরাহ। রেজিস্ট্যান্সে ফলস ব্রেক প্রায়ই চার্টের তৈরি সেরা মানের শর্ট সংকেত, আর সাপোর্টে তার আয়না প্রায়ই সেরা মানের লং।

### ডিএসই সতর্কতা — আর এখানে তা বিস্তৃত

ওপরের প্রায় সবকিছুই এসেছে ধারাবাহিক দ্বিমুখী লেনদেন ও গভীর ফ্লোটের বাজার থেকে। **বাংলাদেশে দুটোর কোনোটিই নেই, আর চারটি নির্দিষ্ট বিকৃতি সমন্বয় না করলে বিশ্লেষণটি ভেঙে দেয়।**

**১. ফ্লোর প্রাইসের যুগ এমন সাপোর্ট তৈরি করেছিল যা সাপোর্ট ছিল না।** দীর্ঘ সময় ধরে নিয়ন্ত্রক এমন একটি মেঝে ঠিক করেছিল যার নিচে শেয়ার লেনদেন হতে পারত না। চার্টে এটি দেখায় নিখুঁত সমতল, নিখুঁতভাবে সম্মানিত, মাসের পর মাস টিকে থাকা লেভেল হিসেবে — দৃশ্যত আপনার দেখা সবচেয়ে শক্তিশালী সাপোর্ট। **এটি সাপোর্ট ছিল না। এটি একটি বিধি ছিল।** সেখানে কোনো অবস্থানরত ইনভেন্টরি রক্ষা করছিল না; ছিল একটি নির্দেশ। মেঝে তুলে নেওয়ার পর ঐসব "লেভেল"-এর অনেকগুলো সঙ্গে সঙ্গে ভেঙে পড়ে, কারণ সেখানে কখনো ক্রেতা ছিলই না — কেবল অনুমোদিত বিক্রেতার অনুপস্থিতি ছিল। **ফ্লোর প্রাইসের সময়কালজুড়ে আঁকা যেকোনো লেভেল আপনার চার্ট থেকে মুছে ফেলুন।** ঐ সময়ের ভলিউম প্রায়ই শূন্যের কাছাকাছি ছিল, যা নিজেই সংকেত: যে লেভেলে ভলিউম নেই তাতে ইনভেন্টরি নেই, আর যে লেভেলে ইনভেন্টরি নেই তার কোনো শক্তি নেই।

**২. সার্কিট সীমা দৈনিক কৃত্রিম লেভেল তৈরি করে যা রাতারাতি মিলিয়ে যায়।** ডিএসই সেশনপ্রতি শতাংশভিত্তিক দামের ব্যান্ড প্রয়োগ করে (অধ্যায় ২ দেখুন)। সারাদিন উপরের ব্যান্ডে আটকে থাকা শেয়ার চার্টে একটি সমতল শীর্ষ আঁকে যা হুবহু রেজিস্ট্যান্সের মতো দেখায়। এটি তা নয়। এটি দিনের অনুমোদিত পরিসরের পাটিগাণিতিক প্রান্ত, আর আগামীকাল ব্যান্ডটি নতুন রেফারেন্স থেকে আবার হিসাব হবে। **যে লেভেল কেবল এ কারণে আছে যে সেশনের অনুমোদিত পরিসর ফুরিয়ে গিয়েছিল, তা লেভেল নয় — তা বিধিমালার সীমানা।** সমতল শীর্ষ বা তলা সার্কিট সীমার সঙ্গে মেলে কি না দেখে নিন তার ওপর কিছু আঁকার আগে।

**৩. ডিএসই-তে মনস্তাত্ত্বিকভাবে প্রভাবশালী লেভেল হলো IPO দাম ও রাউন্ড টাকার অঙ্ক।** গভীরতর বাজারে পূর্ববর্তী সুইং কাঠামো প্রাধান্য পায়। এখানে খুচরা অংশগ্রহণ বেশি, আর সবাই যে দুটি সংখ্যা সত্যিই মনে রাখেন তা হলো অফার দাম ও রাউন্ড অঙ্ক। **বিশেষত IPO দাম বছরের পর বছর একটি টেকসই লেভেল হিসেবে আচরণ করে** — একটি বড়, শনাক্তযোগ্য দল ঠিক ঐ সংখ্যায় ঠিক একটি দিনে কিনেছিল, আর তাঁদের অনেকে এখনো ধরে আছেন এবং এখনো সমান-সমানে বেরোনোর অপেক্ষায়। চার্টে কিছু চিহ্নিত না থাকলেও IPO দামকে লেভেল হিসেবে গণ্য করুন।

**৪. পাতলা ফ্লোট মানে একটি অর্ডারই একটি লেভেল মুছে দিতে পারে।** অধ্যায় ১-এর কেন্দ্রীভবন সমস্যা এখানে ফিরে আসে। ফ্রি ফ্লোট ছোট হলে একটি লেভেল রক্ষাকারী "অবস্থানরত ব্যবসায়ীদের জনগোষ্ঠী" হতে পারে হাতে গোনা কয়েকটি হিসাব। **একটি প্রাতিষ্ঠানিক বা স্পনসর-সংশ্লিষ্ট অর্ডার একটি লেভেলের পুরো জমা সরবরাহ এক প্রিন্টেই শুষে নিতে পারে**, আর আট মাসে গড়ে ওঠা লেভেলটি ইনভেন্টরির যুক্তি ঘটার সুযোগ না পেয়েই নব্বই সেকেন্ডে উবে যায়। একটি লেভেলে ভরসা করার আগে জিজ্ঞেস করুন তা পরিষ্কার করতে কত টাকার ভলিউম লাগবে। ঐ সংখ্যা যদি একটি প্রাতিষ্ঠানিক টিকিটের তুলনায় ছোট হয়, লেভেলটি সাজসজ্জা।

**এর কোনোটিই ডিএসই-তে লেভেলকে অকেজো করে না।** এগুলো লেভেলকে শর্তসাপেক্ষ করে। প্রকৃত দ্বিমুখী ভলিউমে গড়া, বাস্তব ফ্লোটের শেয়ারে, ফ্লোর-প্রাইসের সময়ের বাইরে ও সার্কিট লকের দূরে থাকা একটি লেভেল এখানে অন্য যেকোনো জায়গার মতোই তথ্যবহুল। বাকি চারটি কলকব্জার যেকোনোটিতে গড়া লেভেল বিধিমালার তৈরি কৃত্রিম বস্তু। **ডিএসই চার্টে আপনার প্রথম কাজ হলো দুটোকে আলাদা করা।**

অধ্যায় ৩১ একই ইনভেন্টরি যুক্তিকে হেলিয়ে দেয়: ট্রেন্ডলাইন ও চ্যানেল হলো এই অধ্যায়ের ধারণাই ঢাল সহ, আর এখানকার প্রতিটি সতর্কতা সেখানে প্রযোজ্য — ভুল হওয়ার একটি বাড়তি স্বাধীনতাসহ।`,
    },

    simple: {
      en: `Think about a crowded lift in an office tower.

On the fourth floor, twelve people got in. Now the lift is going back down and stops at the fourth floor again. What happens? **A lot of people get out.** Not because the fourth floor is special, but because that is where they came from and where they were trying to go.

A price level works the same way. **A stock stalls at BDT 48 because a crowd of people did something at BDT 48**, and when it comes back there, they act on it.

### Who is standing at the level

Three groups:

- **People who bought at 48 and lost money.** They have been staring at a red number for months. If price comes back to 48, they sell and feel relieved. Nothing to do with the company — they just want out at break-even.
- **People who wanted to buy below 48 and never got the chance.** They are watching. If the stock finally pushes above 48 and stays there, they buy.
- **People with stop orders just above 48.** These fire automatically. They are a pile of pre-committed buy orders sitting there like dry grass.

That is all "resistance" means. **It is not magic. It is a queue of people with unfinished business at one price.**

### Why the level is a band, not a line

Beginners draw the level at exactly 48.00 and then get confused when the stock trades at 48.15 and falls back.

But people did not all buy at exactly 48.00. Some bought at 47.90, some at 48.30. **The crowd is spread out, so your level has to be spread out too.**

How wide? It depends on how much the stock normally moves in a day. A stock that swings BDT 1.60 a day needs a wider band than one that swings BDT 0.30. Roughly, take half the daily range and put half of it on each side.

### Why broken resistance turns into support

Once the stock finally pushes through 48 on real volume, look at who is left standing there:

- The trapped losers already got out during the push.
- The people who missed have now bought — just above 48.
- The stops already fired.

**The crowd at 48 has swapped sides.** It used to be full of sellers. Now it is full of buyers who just bought and do not want to be wrong. So if price drifts back to 48, they defend it.

That is the whole reason "old resistance becomes support." It is not a law. **The people changed.**

### The part most courses get backwards

You will hear: *the more times a level is tested, the stronger it is.*

Think about the lift again. Every time it stops on the fourth floor, some of those twelve people get out. **After four or five stops, hardly anyone is left.** The level looks impressive on the chart and is actually almost empty.

The tell is volume. If the stock touches 48 four times and the volume gets smaller each time — big, then medium, then small, then tiny — **the sellers are running out.** That level is about to break, not about to hold.

### And on the DSE, be extra careful

Some of the flattest, most convincing "levels" on a Bangladeshi chart were never levels at all. During the floor-price period, shares simply were not allowed to trade lower. That flat line is a rule, not a crowd. **A level with almost no volume behind it has nobody standing at it.**

Same with a stock that hits its daily circuit limit — the flat top is just where the day ran out of permitted room, and tomorrow the limit moves.

And because free float here is often small, **one big institutional order can eat the whole level in a minute.** Before you trust a line, ask how much money it would take to erase it.`,
      bn: `একটি অফিস ভবনের ভিড়ে ঠাসা লিফটের কথা ভাবুন।

চার তলায় বারোজন উঠলেন। এখন লিফট নিচে নামছে এবং আবার চার তলায় থামল। কী হয়? **অনেকে নেমে যান।** চার তলা বিশেষ কিছু বলে নয়, বরং তাঁরা ওখান থেকেই এসেছিলেন এবং ওখানেই যেতে চাইছিলেন।

দামের লেভেল একইভাবে কাজ করে। **একটি শেয়ার ৪৮ টাকায় থামে কারণ একদল মানুষ ৪৮ টাকায় কিছু একটা করেছিলেন**, আর দাম সেখানে ফিরলে তাঁরা তার ভিত্তিতে কাজ করেন।

### লেভেলে কে দাঁড়িয়ে আছেন

তিনটি দল:

- **যাঁরা ৪৮-এ কিনে টাকা হারিয়েছেন।** তাঁরা মাসের পর মাস একটি লাল সংখ্যার দিকে তাকিয়ে আছেন। দাম ৪৮-এ ফিরলে তাঁরা বিক্রি করে স্বস্তি পান। কোম্পানির সঙ্গে সম্পর্ক নেই — তাঁরা কেবল সমান-সমানে বেরোতে চান।
- **যাঁরা ৪৮-এর নিচে কিনতে চেয়েছিলেন কিন্তু সুযোগ পাননি।** তাঁরা তাকিয়ে আছেন। শেয়ারটি শেষমেশ ৪৮-এর ওপরে উঠে টিকে থাকলে তাঁরা কেনেন।
- **যাঁদের স্টপ অর্ডার ৪৮-এর ঠিক ওপরে।** এগুলো স্বয়ংক্রিয়ভাবে চালু হয়। এগুলো আগেই প্রতিশ্রুত ক্রয় আদেশের স্তূপ, শুকনো ঘাসের মতো পড়ে আছে।

"রেজিস্ট্যান্স" বলতে এটুকুই। **এটি জাদু নয়। এটি এক দামে অসমাপ্ত কাজ নিয়ে দাঁড়িয়ে থাকা মানুষের সারি।**

### লেভেল কেন ব্যান্ড, রেখা নয়

নতুনরা ঠিক ৪৮.০০-তে লেভেল আঁকেন, তারপর বিভ্রান্ত হন যখন শেয়ার ৪৮.১৫-তে লেনদেন হয়ে ফিরে আসে।

কিন্তু সবাই ঠিক ৪৮.০০-তে কেনেননি। কেউ ৪৭.৯০-তে, কেউ ৪৮.৩০-তে। **ভিড়টি ছড়ানো, তাই আপনার লেভেলকেও ছড়ানো হতে হবে।**

কতটা চওড়া? নির্ভর করে শেয়ারটি সাধারণত দিনে কতটা নড়ে তার ওপর। দিনে ১.৬০ টাকা দুলতে থাকা শেয়ারের ০.৩০ টাকা দুলতে থাকা শেয়ারের চেয়ে চওড়া ব্যান্ড লাগে। মোটামুটি, দৈনিক পরিসরের অর্ধেক নিন এবং তার অর্ধেক করে দুই পাশে বসান।

### ভাঙা রেজিস্ট্যান্স কেন সাপোর্ট হয়ে যায়

শেয়ারটি শেষমেশ প্রকৃত ভলিউমে ৪৮ পেরিয়ে গেলে দেখুন সেখানে কে দাঁড়িয়ে আছেন:

- আটকে পড়া ক্ষতিগ্রস্তরা ধাক্কার সময়েই বেরিয়ে গেছেন।
- যাঁরা সুযোগ হারিয়েছিলেন তাঁরা এখন কিনেছেন — ৪৮-এর সামান্য ওপরে।
- স্টপগুলো আগেই চালু হয়ে গেছে।

**৪৮-এর ভিড়টি পক্ষ বদলে ফেলেছে।** আগে ছিল বিক্রেতায় ভরা। এখন ভরা ক্রেতায়, যাঁরা সবেমাত্র কিনেছেন এবং ভুল প্রমাণিত হতে চান না। তাই দাম ৪৮-এ ফিরলে তাঁরা তা রক্ষা করেন।

"পুরোনো রেজিস্ট্যান্স সাপোর্ট হয়" — এর পুরো কারণ এটিই। এটি কোনো সূত্র নয়। **মানুষগুলো বদলে গেছে।**

### যে অংশটি বেশিরভাগ কোর্স উল্টো শেখায়

আপনি শুনবেন: *যত বেশিবার লেভেল পরীক্ষিত হয়, তত শক্তিশালী।*

আবার লিফটের কথা ভাবুন। প্রতিবার চার তলায় থামলে ঐ বারোজনের কয়েকজন নেমে যান। **চার-পাঁচবার থামার পর প্রায় কেউ থাকে না।** লেভেলটি চার্টে চমৎকার দেখায় আর আসলে প্রায় খালি।

সংকেতটি হলো ভলিউম। শেয়ারটি চারবার ৪৮ ছুঁলে এবং প্রতিবার ভলিউম কমতে থাকলে — বড়, তারপর মাঝারি, তারপর ছোট, তারপর সামান্য — **বিক্রেতারা ফুরিয়ে আসছেন।** ঐ লেভেলটি ধরে রাখতে নয়, ভাঙতে চলেছে।

### আর ডিএসই-তে বাড়তি সাবধান

বাংলাদেশি চার্টের কিছু সবচেয়ে সমতল, সবচেয়ে বিশ্বাসযোগ্য "লেভেল" আসলে কখনো লেভেলই ছিল না। ফ্লোর প্রাইসের সময়ে শেয়ার কেবল নিচে লেনদেন করার অনুমতিই পেত না। ঐ সমতল রেখা একটি বিধি, ভিড় নয়। **যে লেভেলের পেছনে প্রায় কোনো ভলিউম নেই, সেখানে কেউ দাঁড়িয়ে নেই।**

দৈনিক সার্কিট সীমায় আটকে যাওয়া শেয়ারের ক্ষেত্রেও একই — সমতল শীর্ষটি কেবল সেই জায়গা যেখানে দিনের অনুমোদিত জায়গা ফুরিয়েছে, আর আগামীকাল সীমাটি সরে যাবে।

আর এখানে ফ্রি ফ্লোট প্রায়ই ছোট বলে **একটি বড় প্রাতিষ্ঠানিক অর্ডার এক মিনিটে গোটা লেভেল খেয়ে ফেলতে পারে।** কোনো রেখায় ভরসা করার আগে জিজ্ঞেস করুন তা মুছতে কত টাকা লাগবে।`,
    },

    example: {
      en: `### BEACONTEX: a level that looked like a wall

BEACONTEX is a mid-cap DSE textile name used illustratively here; every figure below is constructed, not historical. Over roughly eight months it reacted four times at approximately BDT 48. ATR(14) is BDT 1.60 and twenty-day average volume is 700,000 shares.

The four touches, in order:

| # | Date | Swing high | Volume | Vol / ADV |
|---|---|---|---|---|
| 1 | mid-Jan | 48.10 | 1,850,000 | 2.64× |
| 2 | early Mar | 48.45 | 1,420,000 | 2.03× |
| 3 | late May | 48.00 | 960,000 | 1.37× |
| 4 | early Jul | 48.35 | 540,000 | 0.77× |

Every stock-tip group on the market drew a line at 48 and called it "strong resistance, four times rejected." **They read the count. They did not read the volume.**

### First, build the zone

Centre is the mean of the four touches:

$$\\frac{48.10 + 48.45 + 48.00 + 48.35}{4} = \\frac{192.90}{4} = 48.225$$

Half-width at $k = 0.5$:

$$\\frac{0.5 \\times 1.60}{2} = 0.400$$

**The level is the band 47.825 to 48.625.** Not the line 48.00. A print at 48.50 is not a break; it is the level doing its job.

### Now read the volume across the touches

$$\\text{Exhaustion Ratio} = \\frac{540{,}000}{1{,}850{,}000} = 0.292$$

**The fourth test transacted 29% of the volume of the first.** Translate that back into inventory: the crowd that was trapped at 48 in January has been leaving in instalments. By July there was barely anyone left to sell.

This is the single most important line in the example. The chart said *fortress*. The volume said *the garrison has left*.

The composite score in §30.6 lands at **70.50**, which on the raw thresholds reads "strong." The exhaustion flag overrides it and returns **WEAKENING — inventory consumed, favour the break.** Two signals, opposite conclusions, and the sheet is built so the inventory signal wins.

### The break

Mid-August, one session:

| | Value |
|---|---|
| Open | 48.40 |
| High | 49.90 |
| Low | 48.20 |
| **Close** | **49.60** |
| Volume | 2,240,000 |

Run the three conditions:

$$\\text{Penetration} = 49.60 - 48.625 = 0.975 \\;\\Rightarrow\\; \\frac{0.975}{1.60} = 0.61\\,ATR \\;\\; (\\geq 0.50 \\;\\checkmark)$$

$$\\text{Volume} = \\frac{2{,}240{,}000}{700{,}000} = 3.20\\times \\;\\; (\\geq 1.5 \\;\\checkmark)$$

Next session closed at 50.15, above 48.625 — **follow-through ✓**.

**All three conditions met: CLEAN BREAK.** Note the volume: 3.2× average is a genuine transfer of inventory, not a drift.

### Trading the polarity retest

Do not chase 49.60. The disciplined entry is the retest of the zone that is now support.

Ten sessions later price pulled back into 48.40 and held. Entry 48.40. Stop half an ATR below the zone floor:

$$\\text{Stop} = 47.825 - (0.5 \\times 1.60) = 47.025$$
$$\\text{Risk} = 48.40 - 47.025 = 1.375$$

Next resistance above sits at the round figure 53.00:

$$\\text{Reward} = 53.00 - 48.40 = 4.60, \\qquad R:R = \\frac{4.60}{1.375} = 3.35$$

**A 3.35:1 structure with a defined invalidation.** The stop is not a percentage picked from the air — it is the price at which the inventory story is proven wrong, because a close back below 47.825 means the buyers who took the break have themselves become trapped.

### The counterfactual: what a false break would have looked like

Suppose instead the mid-August session had printed:

| | Value |
|---|---|
| High | 49.20 |
| **Close** | **47.95** |
| Volume | 1,120,000 |

The high pierced 48.625, so every stop resting above the zone fired. But the close at 47.95 is **back inside the band**, and volume at 1.60× is unimpressive for a genuine break.

**Classification: FALSE BREAK / STOP RUN.** And it is not a non-event. It tells you three things at once:

1. Someone had the size to push price through the zone and it did not stick.
2. The stop cluster above 48.625 has now been cleared out — that fuel is spent.
3. **Everyone who bought the 49.20 print is trapped**, and they are now supply on any move back toward 48.

A trader who understands the inventory argument shorts that close, with a stop above 49.20, and treats the trapped breakout buyers as the source of the move. **The false break is a signal, not a disappointment.**

### The DSE overlay you must check before any of this counts

Before acting on the whole analysis above, four checks:

| Check | On BEACONTEX |
|---|---|
| Did any touch fall inside a floor-price window? | If yes, delete that touch — it is a rule, not inventory |
| Does the flat top coincide with a circuit-limit lock? | A band-locked session prints a fake high |
| Is 48 near the IPO price or a round figure? | If it is, expect the level to be stickier than the volume suggests |
| How much free-float value sits at the level? | At ~700k ADV and BDT 48, one BDT 5 crore institutional ticket is roughly 1.5 days of volume |

That last row is the one that should worry you. **A level that a single institutional order can clear in a day and a half is not a structure — it is a suggestion.** The analysis is still worth doing; it just does not carry the weight it would carry in a market with real depth.`,
      bn: `### BEACONTEX: যে লেভেল দেয়ালের মতো দেখাচ্ছিল

BEACONTEX এখানে দৃষ্টান্তমূলকভাবে ব্যবহৃত একটি মাঝারি আকারের ডিএসই টেক্সটাইল নাম; নিচের প্রতিটি সংখ্যা নির্মিত, ঐতিহাসিক নয়। প্রায় আট মাসে এটি প্রায় ৪৮ টাকায় চারবার প্রতিক্রিয়া দেখিয়েছে। ATR(14) ১.৬০ টাকা এবং কুড়ি দিনের গড় ভলিউম ৭,০০,০০০ শেয়ার।

চারটি টাচ, ক্রমানুসারে:

| # | তারিখ | সুইং হাই | ভলিউম | ভলিউম / ADV |
|---|---|---|---|---|
| ১ | জানুয়ারির মাঝামাঝি | ৪৮.১০ | ১৮,৫০,০০০ | ২.৬৪× |
| ২ | মার্চের শুরু | ৪৮.৪৫ | ১৪,২০,০০০ | ২.০৩× |
| ৩ | মে-র শেষ | ৪৮.০০ | ৯,৬০,০০০ | ১.৩৭× |
| ৪ | জুলাইয়ের শুরু | ৪৮.৩৫ | ৫,৪০,০০০ | ০.৭৭× |

বাজারের প্রতিটি স্টক-টিপ গ্রুপ ৪৮-এ একটি রেখা টেনে বলল "শক্তিশালী রেজিস্ট্যান্স, চারবার প্রত্যাখ্যাত।" **তাঁরা সংখ্যাটি পড়েছেন। ভলিউম পড়েননি।**

### প্রথমে জোনটি গড়ুন

কেন্দ্র হলো চারটি টাচের গড়:

$$\\frac{48.10 + 48.45 + 48.00 + 48.35}{4} = \\frac{192.90}{4} = 48.225$$

$k = 0.5$-এ অর্ধ-প্রস্থ:

$$\\frac{0.5 \\times 1.60}{2} = 0.400$$

**লেভেলটি হলো ৪৭.৮২৫ থেকে ৪৮.৬২৫ ব্যান্ড।** ৪৮.০০ রেখা নয়। ৪৮.৫০-এ একটি প্রিন্ট ব্রেক নয়; এটি লেভেলের নিজের কাজ করা।

### এবার টাচজুড়ে ভলিউম পড়ুন

$$\\text{Exhaustion Ratio} = \\frac{540{,}000}{1{,}850{,}000} = 0.292$$

**চতুর্থ পরীক্ষায় প্রথমটির ২৯% ভলিউম লেনদেন হয়েছে।** একে ইনভেন্টরিতে অনুবাদ করুন: জানুয়ারিতে ৪৮-এ আটকে পড়া ভিড় কিস্তিতে কিস্তিতে বেরিয়ে গেছে। জুলাই নাগাদ বিক্রি করার মতো প্রায় কেউ ছিল না।

উদাহরণের সবচেয়ে গুরুত্বপূর্ণ লাইন এটিই। চার্ট বলল *দুর্গ*। ভলিউম বলল *সৈন্যরা চলে গেছে*।

§৩০.৬-এর যৌগিক স্কোর দাঁড়ায় **৭০.৫০**, যা কাঁচা সীমায় পড়লে "শক্তিশালী"। এক্সহশন ফ্ল্যাগ তা অগ্রাহ্য করে ফেরত দেয় **WEAKENING — ইনভেন্টরি নিঃশেষ, ব্রেকের পক্ষে থাকুন।** দুটি সংকেত, বিপরীত সিদ্ধান্ত, আর শিটটি এমনভাবে গড়া যে ইনভেন্টরি সংকেত জেতে।

### ব্রেক

অগাস্টের মাঝামাঝি, একটি সেশন:

| | মান |
|---|---|
| ওপেন | ৪৮.৪০ |
| হাই | ৪৯.৯০ |
| লো | ৪৮.২০ |
| **ক্লোজ** | **৪৯.৬০** |
| ভলিউম | ২২,৪০,০০০ |

তিনটি শর্ত চালান:

$$\\text{Penetration} = 49.60 - 48.625 = 0.975 \\;\\Rightarrow\\; \\frac{0.975}{1.60} = 0.61\\,ATR \\;\\; (\\geq 0.50 \\;\\checkmark)$$

$$\\text{Volume} = \\frac{2{,}240{,}000}{700{,}000} = 3.20\\times \\;\\; (\\geq 1.5 \\;\\checkmark)$$

পরের সেশন ক্লোজ করল ৫০.১৫-তে, ৪৮.৬২৫-এর ওপরে — **ফলো-থ্রু ✓**।

**তিনটি শর্তই পূর্ণ: ক্লিন ব্রেক।** ভলিউমটি লক্ষ করুন: গড়ের ৩.২ গুণ প্রকৃত ইনভেন্টরি হস্তান্তর, নিছক ভেসে যাওয়া নয়।

### পোলারিটি রিটেস্টে লেনদেন

৪৯.৬০ ধাওয়া করবেন না। শৃঙ্খলাবদ্ধ এন্ট্রি হলো এখন সাপোর্টে পরিণত জোনটির রিটেস্ট।

দশ সেশন পর দাম ৪৮.৪০-এ নেমে ধরে রাখল। এন্ট্রি ৪৮.৪০। জোনের তলার আধা ATR নিচে স্টপ:

$$\\text{Stop} = 47.825 - (0.5 \\times 1.60) = 47.025$$
$$\\text{Risk} = 48.40 - 47.025 = 1.375$$

ওপরের পরবর্তী রেজিস্ট্যান্স রাউন্ড অঙ্ক ৫৩.০০-তে:

$$\\text{Reward} = 53.00 - 48.40 = 4.60, \\qquad R:R = \\frac{4.60}{1.375} = 3.35$$

**সংজ্ঞায়িত বাতিলকরণসহ ৩.৩৫:১ কাঠামো।** স্টপটি হাওয়া থেকে তোলা কোনো শতাংশ নয় — এটি সেই দাম যেখানে ইনভেন্টরির গল্পটি ভুল প্রমাণিত হয়, কারণ ৪৭.৮২৫-এর নিচে ক্লোজ মানে যাঁরা ব্রেক কিনেছিলেন তাঁরা নিজেরাই আটকে গেছেন।

### বিপরীত ঘটনা: ফলস ব্রেক দেখতে কেমন হতো

ধরুন অগাস্টের মাঝামাঝি সেশনটি বরং ছাপত:

| | মান |
|---|---|
| হাই | ৪৯.২০ |
| **ক্লোজ** | **৪৭.৯৫** |
| ভলিউম | ১১,২০,০০০ |

হাই ৪৮.৬২৫ ভেদ করেছে, তাই জোনের ওপরে জমা প্রতিটি স্টপ চালু হয়েছে। কিন্তু ৪৭.৯৫-এ ক্লোজ **ব্যান্ডের ভেতরে ফিরে গেছে**, আর প্রকৃত ব্রেকের জন্য ১.৬০ গুণ ভলিউম দুর্বল।

**শ্রেণিবিন্যাস: ফলস ব্রেক / স্টপ রান।** আর এটি নিছক ঘটনাহীনতা নয়। এটি একসঙ্গে তিনটি জিনিস বলে:

১. কারও কাছে জোন ভেদ করে দাম ঠেলার আকার ছিল আর তা টেকেনি।
২. ৪৮.৬২৫-এর ওপরের স্টপের গুচ্ছ এখন পরিষ্কার হয়ে গেছে — ঐ জ্বালানি খরচ হয়ে গেছে।
৩. **যাঁরা ৪৯.২০ প্রিন্টে কিনেছেন তাঁরা আটকা**, আর ৪৮-এর দিকে যেকোনো ফেরার নড়াচড়ায় তাঁরাই সরবরাহ।

যিনি ইনভেন্টরির যুক্তি বোঝেন তিনি ঐ ক্লোজে শর্ট করেন, ৪৯.২০-এর ওপরে স্টপ রেখে, আর আটকে পড়া ব্রেকআউট ক্রেতাদেরই নড়াচড়ার উৎস ধরেন। **ফলস ব্রেক একটি সংকেত, হতাশা নয়।**

### ডিএসই স্তর যা যাচাই না করলে ওপরের কিছুই গণ্য নয়

ওপরের পুরো বিশ্লেষণে কাজ করার আগে চারটি যাচাই:

| যাচাই | BEACONTEX-এ |
|---|---|
| কোনো টাচ কি ফ্লোর-প্রাইসের সময়ে পড়েছে? | পড়লে ঐ টাচ মুছুন — তা বিধি, ইনভেন্টরি নয় |
| সমতল শীর্ষ কি সার্কিট-সীমার লকের সঙ্গে মেলে? | ব্যান্ড-লক সেশন নকল হাই ছাপে |
| ৪৮ কি IPO দাম বা রাউন্ড অঙ্কের কাছে? | হলে ভলিউম যা বলছে তার চেয়ে লেভেল বেশি আঠালো হবে |
| লেভেলে কত ফ্রি-ফ্লোট মূল্য বসে আছে? | ~৭ লক্ষ ADV ও ৪৮ টাকায় একটি ৫ কোটি টাকার প্রাতিষ্ঠানিক টিকিট প্রায় দেড় দিনের ভলিউম |

শেষ সারিটিই আপনাকে চিন্তায় ফেলবে। **যে লেভেল একটি প্রাতিষ্ঠানিক অর্ডার দেড় দিনে পরিষ্কার করতে পারে তা কাঠামো নয় — তা একটি প্রস্তাব।** বিশ্লেষণটি তবু করার মতো; এটি কেবল প্রকৃত গভীরতার বাজারে যে ওজন বহন করত তা বহন করে না।`,
    },
  },
};
