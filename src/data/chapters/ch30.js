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

    formula: {
      en: `### 1. The level is a zone, and its width comes from volatility

$$\\bar{P} = \\frac{1}{n}\\sum_{i=1}^{n} P_i, \\qquad w = \\frac{k \\cdot ATR}{2}, \\qquad Z = [\\bar{P} - w,\\; \\bar{P} + w]$$

with $k = 0.5$ as the working default.

**Scaling the width to ATR rather than to a fixed percentage is the whole reason this works across instruments.** A BDT 0.40 band is generous on a stock that moves BDT 0.30 a day and meaningless on one that moves BDT 4.00. Fix the band in taka or in percent and you will be running two different tests on two different stocks while believing you are running one.

### 2. Component scores

$$S_{\\text{touch}} = \\begin{cases} 12 & n=1 \\\\ 25 & n=2 \\\\ 30 & n=3 \\\\ 24 & n=4 \\\\ 16 & n=5 \\\\ 8 & n\\ge 6 \\end{cases}$$

**Read that curve carefully, because it inverts the folk wisdom.** It peaks at three touches and *declines* thereafter. A level tested six times is not six times as strong; it is a level whose inventory has been six times consumed. "Four times rejected" is a description of supply being worked off, not of a wall being reinforced.

$$S_{\\text{vol}} = \\min\\!\\left(30,\\; 15 \\cdot \\frac{\\sum V_i}{n \\cdot \\overline{ADV}}\\right), \\qquad S_{\\text{rec}} = \\max(0,\\; 25 - 0.15 D), \\qquad S_{\\text{dur}} = \\min(15,\\; 1.5 T)$$

where $D$ is days since the last touch and $T$ is sessions traded inside the zone. **Recency decays at 0.15 points a day, so a level goes from full marks to zero in about 167 sessions.** Positioned inventory is not permanent; the people trapped there sell, retire, or give up.

### 3. The exhaustion ratio, which overrides the score

$$\\chi = \\frac{V_{\\text{last touch}}}{V_{\\text{first touch}}}$$

$$\\text{Composite} = \\big(S_{\\text{touch}} + S_{\\text{vol}} + S_{\\text{rec}} + S_{\\text{dur}}\\big) - 12 \\cdot \\mathbb{1}\\big[\\chi < 0.5 \\;\\land\\; n \\ge 4\\big]$$

$$\\text{Verdict} = \\begin{cases} \\text{WEAKENING — favour the break} & \\chi < 0.5 \\land n \\ge 4 \\\\ \\text{STRONG} & \\text{Composite} \\ge 70 \\\\ \\text{MODERATE} & \\text{Composite} \\ge 50 \\\\ \\text{WEAK} & \\text{otherwise} \\end{cases}$$

**The exhaustion condition is tested first and is not a term in the sum.** This is Chapter 25's quality floor arriving in a new domain: a finding that can be outvoted by a good-looking total is not a constraint. **A level can score 70 and still be told to stand aside**, and in the worked case it does exactly that.

### 4. The break test — three conditions, all required

$$\\pi = \\frac{C_{\\text{break}} - Z_{\\text{upper}}}{ATR} \\ge 0.5, \\qquad v = \\frac{V_{\\text{break}}}{\\overline{ADV}} \\ge 1.5, \\qquad C_{\\text{next}} > Z_{\\text{upper}}$$

**Penetration is measured in ATR units and from the zone edge, not from the line.** Both choices matter: a fixed-taka threshold is not comparable across stocks, and measuring from the centre would count the zone's own width as penetration.

$$\\text{Classification} = \\begin{cases} \\text{CLEAN BREAK} & \\text{all three hold} \\\\ \\text{FALSE BREAK / STOP RUN} & H > Z_{\\text{upper}} \\;\\land\\; Z_{\\text{lower}} < C < Z_{\\text{upper}} \\\\ \\text{TEST} & \\text{otherwise} \\end{cases}$$

### 5. Polarity and the trade that follows

A broken level reverses role: former resistance becomes support, because the inventory that was trapped above is now positioned below.

$$E = \\text{retest price}, \\qquad X = Z_{\\text{lower}} - 0.5\\,ATR, \\qquad R{:}R = \\frac{T - E}{E - X}, \\qquad p^{*} = \\frac{1}{1 + R{:}R}$$

**The stop is not a percentage chosen for comfort. It is the price at which the inventory story is proven false**, because a close back below the zone floor means the buyers who took the break have themselves become trapped — which is precisely the condition that created the level in the first place.

### 6. The DSE distortions, which precede all of the above

| Distortion | What it does to a level |
|---|---|
| Floor-price era | Prices sat at an administered floor with negligible volume. **Those are not touches** — no inventory was positioned. Exclude the period, per Chapter 26. |
| Circuit limits | A touch printed at the daily band is where the exchange stopped the move, not where supply met demand. |
| Round taka figures | 50, 100, 500 attract orders for psychological rather than structural reasons. They are real, but they are weaker than a level built from actual transacted inventory. |
| Thin free float | A level that a single institutional ticket can clear in a day and a half is a proposal, not a structure. **Compute the taka value resting at the level, not just its score.** |`,
      bn: `### ১. লেভেল একটি জোন, আর তার প্রস্থ আসে ভোলাটিলিটি থেকে

$$\\bar{P} = \\frac{1}{n}\\sum_{i=1}^{n} P_i, \\qquad w = \\frac{k \\cdot ATR}{2}, \\qquad Z = [\\bar{P} - w,\\; \\bar{P} + w]$$

কার্যকর ডিফল্ট হিসেবে $k = 0.5$।

**নির্দিষ্ট শতাংশের বদলে ATR-এ প্রস্থ মাপাই একে বিভিন্ন উপকরণজুড়ে কার্যকর করে।** যে শেয়ার দিনে ০.৩০ টাকা নড়ে তাতে ০.৪০ টাকার ব্যান্ড উদার আর যে ৪.০০ টাকা নড়ে তাতে অর্থহীন। ব্যান্ড টাকায় বা শতাংশে স্থির করুন, আর আপনি একটিই পরীক্ষা চালাচ্ছেন ভেবে দুটি ভিন্ন শেয়ারে দুটি ভিন্ন পরীক্ষা চালাবেন।

### ২. উপাদান স্কোর

$$S_{\\text{touch}} = \\begin{cases} 12 & n=1 \\\\ 25 & n=2 \\\\ 30 & n=3 \\\\ 24 & n=4 \\\\ 16 & n=5 \\\\ 8 & n\\ge 6 \\end{cases}$$

**এই বক্ররেখাটি মন দিয়ে পড়ুন, কারণ এটি প্রচলিত জ্ঞান উল্টে দেয়।** এটি তিনটি টাচে শীর্ষে ওঠে আর তারপর *নামে*। ছয়বার পরীক্ষিত লেভেল ছয় গুণ শক্তিশালী নয়; এটি এমন লেভেল যার ইনভেন্টরি ছয়বার নিঃশেষ হয়েছে। "চারবার প্রত্যাখ্যাত" দেয়াল শক্ত হওয়ার নয়, সরবরাহ ক্ষয়ে যাওয়ার বর্ণনা।

$$S_{\\text{vol}} = \\min\\!\\left(30,\\; 15 \\cdot \\frac{\\sum V_i}{n \\cdot \\overline{ADV}}\\right), \\qquad S_{\\text{rec}} = \\max(0,\\; 25 - 0.15 D), \\qquad S_{\\text{dur}} = \\min(15,\\; 1.5 T)$$

যেখানে $D$ শেষ টাচ থেকে দিনের সংখ্যা ও $T$ জোনের ভেতরে লেনদেন হওয়া সেশন। **সাম্প্রতিকতা দিনে ০.১৫ পয়েন্ট হারে ক্ষয় হয়, তাই একটি লেভেল পূর্ণ নম্বর থেকে শূন্যে যায় প্রায় ১৬৭ সেশনে।** অবস্থানরত ইনভেন্টরি স্থায়ী নয়; সেখানে আটকে পড়া মানুষ বিক্রি করেন, অবসর নেন, বা হাল ছাড়েন।

### ৩. এক্সহসশন অনুপাত, যা স্কোরকে অগ্রাহ্য করে

$$\\chi = \\frac{V_{\\text{শেষ টাচ}}}{V_{\\text{প্রথম টাচ}}}$$

$$\\text{Composite} = \\big(S_{\\text{touch}} + S_{\\text{vol}} + S_{\\text{rec}} + S_{\\text{dur}}\\big) - 12 \\cdot \\mathbb{1}\\big[\\chi < 0.5 \\;\\land\\; n \\ge 4\\big]$$

$$\\text{রায়} = \\begin{cases} \\text{WEAKENING — ব্রেকের পক্ষে} & \\chi < 0.5 \\land n \\ge 4 \\\\ \\text{STRONG} & \\text{Composite} \\ge 70 \\\\ \\text{MODERATE} & \\text{Composite} \\ge 50 \\\\ \\text{WEAK} & \\text{অন্যথায়} \\end{cases}$$

**এক্সহসশন শর্তটি প্রথমে পরীক্ষিত হয় ও যোগফলের কোনো পদ নয়।** এটি অধ্যায় ২৫-এর গুণমান-মেঝে নতুন ক্ষেত্রে আসছে: যে ফলাফলকে একটি সুন্দর-দেখতে মোট ভোটে হারাতে পারে তা কোনো সীমাবদ্ধতা নয়। **একটি লেভেল ৭০ স্কোর করেও সরে দাঁড়ানোর নির্দেশ পেতে পারে**, আর উদাহরণে ঠিক তাই হয়।

### ৪. ব্রেক পরীক্ষা — তিনটি শর্ত, সবগুলোই আবশ্যক

$$\\pi = \\frac{C_{\\text{break}} - Z_{\\text{upper}}}{ATR} \\ge 0.5, \\qquad v = \\frac{V_{\\text{break}}}{\\overline{ADV}} \\ge 1.5, \\qquad C_{\\text{next}} > Z_{\\text{upper}}$$

**অনুপ্রবেশ ATR এককে ও জোনের প্রান্ত থেকে মাপা হয়, রেখা থেকে নয়।** দুটি পছন্দই গুরুত্বপূর্ণ: নির্দিষ্ট-টাকার সীমা বিভিন্ন শেয়ারে তুলনীয় নয়, আর কেন্দ্র থেকে মাপলে জোনের নিজের প্রস্থই অনুপ্রবেশ হিসেবে গোনা হতো।

$$\\text{শ্রেণিবিভাজন} = \\begin{cases} \\text{CLEAN BREAK} & \\text{তিনটিই টেকে} \\\\ \\text{FALSE BREAK / STOP RUN} & H > Z_{\\text{upper}} \\;\\land\\; Z_{\\text{lower}} < C < Z_{\\text{upper}} \\\\ \\text{TEST} & \\text{অন্যথায়} \\end{cases}$$

### ৫. পোলারিটি ও তারপরের ট্রেড

ভাঙা লেভেল ভূমিকা বদলায়: সাবেক রেজিস্ট্যান্স সাপোর্ট হয়, কারণ যে ইনভেন্টরি ওপরে আটকা ছিল তা এখন নিচে অবস্থান নিয়েছে।

$$E = \\text{রিটেস্ট দাম}, \\qquad X = Z_{\\text{lower}} - 0.5\\,ATR, \\qquad R{:}R = \\frac{T - E}{E - X}, \\qquad p^{*} = \\frac{1}{1 + R{:}R}$$

**স্টপ স্বাচ্ছন্দ্যের জন্য বেছে নেওয়া একটি শতাংশ নয়। এটি সেই দাম যেখানে ইনভেন্টরির গল্পটি মিথ্যা প্রমাণিত হয়**, কারণ জোনের মেঝের নিচে ফিরে বন্ধ হওয়া মানে যে ক্রেতারা ব্রেকটি নিয়েছিলেন তাঁরা নিজেরাই আটকে গেছেন — আর ঠিক এই অবস্থাই প্রথমে লেভেলটি তৈরি করেছিল।

### ৬. ডিএসই বিকৃতি, যা ওপরের সবকিছুর আগে আসে

| বিকৃতি | লেভেলের কী করে |
|---|---|
| ফ্লোর-প্রাইসের যুগ | দাম নগণ্য ভলিউমে একটি প্রশাসিত মেঝেতে বসে ছিল। **ওগুলো টাচ নয়** — কোনো ইনভেন্টরি অবস্থান নেয়নি। অধ্যায় ২৬ অনুযায়ী সময়কালটি বাদ দিন। |
| সার্কিট সীমা | দৈনিক ব্যান্ডে ছাপা টাচ হলো যেখানে এক্সচেঞ্জ চলাচল থামিয়েছে, চাহিদা সরবরাহের সঙ্গে যেখানে মিলেছে তা নয়। |
| রাউন্ড টাকার অঙ্ক | ৫০, ১০০, ৫০০ কাঠামোগত নয়, মনস্তাত্ত্বিক কারণে অর্ডার টানে। এগুলো বাস্তব, কিন্তু প্রকৃত সম্পন্ন ইনভেন্টরি থেকে গড়া লেভেলের চেয়ে দুর্বল। |
| পাতলা ফ্রি ফ্লোট | যে লেভেল একটি প্রাতিষ্ঠানিক টিকিট দেড় দিনে পরিষ্কার করতে পারে তা একটি প্রস্তাব, কাঠামো নয়। **কেবল স্কোর নয়, লেভেলে বসে থাকা টাকার মূল্য গণনা করুন।** |`,
    },

    manual: {
      en: `**Scenario.** BEACONTEX from §30.3. ATR(14) = 1.60, ADV(20) = 700,000. Four touches at 48.10, 48.45, 48.00, 48.35 on volumes of 1,850,000 / 1,420,000 / 960,000 / 540,000. Nine sessions traded inside the zone; 37 days since the last touch.

**Step 1 — Zone centre.**
$$\\bar{P} = \\frac{48.10 + 48.45 + 48.00 + 48.35}{4} = \\frac{192.90}{4} = 48.225$$

**Step 2 — Zone half-width, scaled to volatility.**
$$w = \\frac{0.5 \\times 1.60}{2} = 0.400$$

**Step 3 — The zone.**
$$Z = [48.225 - 0.400,\\; 48.225 + 0.400] = [47.825,\\; 48.625]$$

**The level is a band, not the line at 48.00.** A print at 48.50 is inside the zone — that is the level working, not failing. **Draw it as a line and you will call every one of those prints a break.**

**Step 4 — Volume ratio at each touch.**
$$2.64\\times,\\quad 2.03\\times,\\quad 1.37\\times,\\quad 0.77\\times$$

**Step 5 — The exhaustion ratio, and read it before you compute anything else.**
$$\\chi = \\frac{540{,}000}{1{,}850{,}000} = 0.292$$

**The fourth test transacted 29% of the volume of the first.** In inventory terms: the crowd trapped at 48 in January has been leaving in instalments, and by July there was barely anyone left to sell. **The chart says fortress. The volume says the garrison has left.**

**Step 6 — Touch score.** Four touches:
$$S_{\\text{touch}} = 24$$

Note this is **below** the 30 awarded at three touches. The scoring curve already encodes the argument: the fourth test subtracted from the level rather than adding to it.

**Step 7 — Volume score.**
$$\\frac{\\sum V_i}{n \\cdot \\overline{ADV}} = \\frac{4{,}770{,}000}{4 \\times 700{,}000} = \\frac{4{,}770{,}000}{2{,}800{,}000} = 1.7036$$
$$S_{\\text{vol}} = \\min(30,\\; 15 \\times 1.7036) = \\min(30,\\; 25.55) = 25.55$$

**Step 8 — Recency score.**
$$S_{\\text{rec}} = \\max(0,\\; 25 - 0.15 \\times 37) = 25 - 5.55 = 19.45$$

**Step 9 — Duration score.**
$$S_{\\text{dur}} = \\min(15,\\; 1.5 \\times 9) = \\min(15,\\; 13.50) = 13.50$$

**Step 10 — Raw score.**
$$24 + 25.55 + 19.45 + 13.50 = 82.50$$

**Step 11 — Apply the exhaustion penalty.**
$$\\chi = 0.292 < 0.5 \\;\\land\\; n = 4 \\ge 4 \\;\\Rightarrow\\; \\text{penalty} = 12$$
$$\\text{Composite} = 82.50 - 12 = 70.50$$

**Step 12 — Read the verdict, and notice that the composite does not decide it.**

A composite of 70.50 clears the "STRONG — trade the level" threshold. **It is overruled.** The exhaustion condition is tested first and returns:

> **WEAKENING — inventory consumed, favour the break.**

**Two signals, opposite conclusions, and the sheet is built so the inventory signal wins.** This is Chapter 25's quality floor in a new domain: a finding that a good-looking total can outvote is not a constraint. **Fold the exhaustion ratio into the sum as a weighted term and this level reads STRONG — which is the reading every tip group on the market had.**

**Step 13 — The break, tested against three conditions.** Mid-August: close 49.60 on 2,240,000 shares.

$$\\pi = \\frac{49.60 - 48.625}{1.60} = \\frac{0.975}{1.60} = 0.61\\,ATR \\;\\ge\\; 0.50 \\;\\checkmark$$
$$v = \\frac{2{,}240{,}000}{700{,}000} = 3.20\\times \\;\\ge\\; 1.5 \\;\\checkmark$$
$$C_{\\text{next}} = 50.15 > 48.625 \\;\\checkmark$$

**CLEAN BREAK.** Note that penetration is measured **from the zone edge at 48.625**, not from the centre. Measure from 48.225 and you would credit the zone's own half-width as penetration, inflating $\\pi$ to 0.86 ATR and passing breaks that never left the band.

**Step 14 — The polarity trade. Do not chase 49.60.**

Ten sessions later price pulls back into the zone, now acting as support, and holds at 48.40.

$$E = 48.40, \\qquad X = 47.825 - (0.5 \\times 1.60) = 47.025$$
$$\\text{Risk} = 48.40 - 47.025 = 1.375$$
$$T = 53.00, \\qquad \\text{Reward} = 53.00 - 48.40 = 4.60$$
$$R{:}R = \\frac{4.60}{1.375} = 3.35 \\qquad p^{*} = \\frac{1}{1 + 3.35} = 0.2301 = 23.01\\%$$

**Step 15 — Price the discipline, because "do not chase" is otherwise just advice.** Suppose you had bought the break candle's close instead:

| | Chase the break | Wait for the retest |
|---|---|---|
| Entry | 49.60 | **48.40** |
| Stop | 47.025 | 47.025 |
| Risk per share | 2.575 | **1.375** |
| Reward to 53.00 | 3.40 | **4.60** |
| $R{:}R$ | 1.32 | **3.35** |
| Break-even win rate | **43.09%** | **23.01%** |

**Chasing the break nearly doubles the hit rate you need — 43.09% against 23.01% — for the identical thesis on the identical stock.** The stop does not move, because the invalidation is a property of the structure and not of your entry. Everything that changes is the price you paid.

**Step 16 — Compare across the three chapters, because the pattern is now visible.**

| Setup | $R{:}R$ | Break-even |
|---|---|---|
| Ch 28 — confirmed morning star | 1.29 | 43.75% |
| Ch 29 — continuation retest | 2.76 | 26.57% |
| Ch 30 — polarity retest | **3.35** | **23.01%** |

**The trend is not that levels are better than candles. It is that entries close to a structural invalidation are cheap and entries far from one are expensive**, and the three chapters happen to be ordered by how close their invalidation sits.

**Step 17 — State the DSE caveat that the score cannot see.** At a 700,000 ADV and BDT 48, a BDT 5 crore institutional order is roughly a day and a half of volume.

**A level that one ticket can clear in a day and a half is a proposal, not a structure.** The composite score of 70.50 has no way of knowing that, because it measures history rather than depth. **Compute the taka value resting at the level alongside the score, every time** — and size on the smaller of what the two suggest.`,
      bn: `**পরিস্থিতি।** §৩০.৩-এর BEACONTEX। ATR(১৪) = ১.৬০, ADV(২০) = ৭,০০,০০০। ৪৮.১০, ৪৮.৪৫, ৪৮.০০, ৪৮.৩৫-এ চারটি টাচ, ভলিউম ১৮,৫০,০০০ / ১৪,২০,০০০ / ৯,৬০,০০০ / ৫,৪০,০০০। জোনের ভেতরে নয়টি সেশন লেনদেন; শেষ টাচ থেকে ৩৭ দিন।

**ধাপ ১ — জোনের কেন্দ্র।**
$$\\bar{P} = \\frac{48.10 + 48.45 + 48.00 + 48.35}{4} = \\frac{192.90}{4} = 48.225$$

**ধাপ ২ — জোনের অর্ধ-প্রস্থ, ভোলাটিলিটিতে মাপা।**
$$w = \\frac{0.5 \\times 1.60}{2} = 0.400$$

**ধাপ ৩ — জোন।**
$$Z = [48.225 - 0.400,\\; 48.225 + 0.400] = [47.825,\\; 48.625]$$

**লেভেলটি একটি ব্যান্ড, ৪৮.০০-এর রেখা নয়।** ৪৮.৫০-এর একটি প্রিন্ট জোনের ভেতরে — তা লেভেলের কাজ করা, ব্যর্থ হওয়া নয়। **একে রেখা হিসেবে আঁকুন আর ঐ প্রতিটি প্রিন্টকেই ব্রেক বলবেন।**

**ধাপ ৪ — প্রতিটি টাচে ভলিউম অনুপাত।**
$$2.64\\times,\\quad 2.03\\times,\\quad 1.37\\times,\\quad 0.77\\times$$

**ধাপ ৫ — এক্সহসশন অনুপাত, আর অন্য কিছু গণনার আগে এটি পড়ুন।**
$$\\chi = \\frac{540{,}000}{1{,}850{,}000} = 0.292$$

**চতুর্থ পরীক্ষা প্রথমটির ২৯% ভলিউম লেনদেন করেছে।** ইনভেন্টরির ভাষায়: জানুয়ারিতে ৪৮-এ আটকে পড়া ভিড় কিস্তিতে বেরিয়ে যাচ্ছিল, আর জুলাই নাগাদ বিক্রি করার মতো প্রায় কেউ ছিল না। **চার্ট বলে দুর্গ। ভলিউম বলে সৈন্যরা চলে গেছে।**

**ধাপ ৬ — টাচ স্কোর।** চারটি টাচ:
$$S_{\\text{touch}} = 24$$

লক্ষ করুন এটি তিনটি টাচে দেওয়া ৩০-এর **নিচে**। স্কোরিং বক্ররেখাটি ইতিমধ্যেই যুক্তিটি সংকেতবদ্ধ করে: চতুর্থ পরীক্ষা লেভেলে যোগ না করে বিয়োগ করেছে।

**ধাপ ৭ — ভলিউম স্কোর।**
$$\\frac{\\sum V_i}{n \\cdot \\overline{ADV}} = \\frac{4{,}770{,}000}{4 \\times 700{,}000} = \\frac{4{,}770{,}000}{2{,}800{,}000} = 1.7036$$
$$S_{\\text{vol}} = \\min(30,\\; 15 \\times 1.7036) = \\min(30,\\; 25.55) = 25.55$$

**ধাপ ৮ — সাম্প্রতিকতা স্কোর।**
$$S_{\\text{rec}} = \\max(0,\\; 25 - 0.15 \\times 37) = 25 - 5.55 = 19.45$$

**ধাপ ৯ — স্থায়িত্ব স্কোর।**
$$S_{\\text{dur}} = \\min(15,\\; 1.5 \\times 9) = \\min(15,\\; 13.50) = 13.50$$

**ধাপ ১০ — কাঁচা স্কোর।**
$$24 + 25.55 + 19.45 + 13.50 = 82.50$$

**ধাপ ১১ — এক্সহসশন জরিমানা প্রয়োগ করুন।**
$$\\chi = 0.292 < 0.5 \\;\\land\\; n = 4 \\ge 4 \\;\\Rightarrow\\; \\text{জরিমানা} = 12$$
$$\\text{Composite} = 82.50 - 12 = 70.50$$

**ধাপ ১২ — রায় পড়ুন, আর লক্ষ করুন কম্পোজিটই তা ঠিক করে না।**

৭০.৫০ কম্পোজিট "STRONG — লেভেলটি ট্রেড করুন" সীমা পার করে। **এটি অগ্রাহ্য হয়।** এক্সহসশন শর্তটি প্রথমে পরীক্ষিত হয় ও ফেরত দেয়:

> **WEAKENING — ইনভেন্টরি নিঃশেষ, ব্রেকের পক্ষে।**

**দুটি সংকেত, বিপরীত সিদ্ধান্ত, আর শিটটি এমনভাবে গড়া যাতে ইনভেন্টরির সংকেত জেতে।** এটি নতুন ক্ষেত্রে অধ্যায় ২৫-এর গুণমান-মেঝে: যে ফলাফলকে একটি সুন্দর-দেখতে মোট ভোটে হারাতে পারে তা সীমাবদ্ধতা নয়। **এক্সহসশন অনুপাতকে একটি ভারিত পদ হিসেবে যোগফলে ঢোকান আর এই লেভেল STRONG পড়ে — যা বাজারের প্রতিটি টিপ গ্রুপের পাঠ ছিল।**

**ধাপ ১৩ — ব্রেক, তিনটি শর্তের বিপরীতে পরীক্ষিত।** আগস্টের মাঝামাঝি: ২২,৪০,০০০ শেয়ারে ক্লোজ ৪৯.৬০।

$$\\pi = \\frac{49.60 - 48.625}{1.60} = \\frac{0.975}{1.60} = 0.61\\,ATR \\;\\ge\\; 0.50 \\;\\checkmark$$
$$v = \\frac{2{,}240{,}000}{700{,}000} = 3.20\\times \\;\\ge\\; 1.5 \\;\\checkmark$$
$$C_{\\text{next}} = 50.15 > 48.625 \\;\\checkmark$$

**CLEAN BREAK।** লক্ষ করুন অনুপ্রবেশ মাপা হয়েছে **৪৮.৬২৫-এ জোনের প্রান্ত থেকে**, কেন্দ্র থেকে নয়। ৪৮.২২৫ থেকে মাপলে জোনের নিজের অর্ধ-প্রস্থই অনুপ্রবেশ হিসেবে জমা হতো, $\\pi$-কে ০.৮৬ ATR-এ ফুলিয়ে এমন ব্রেক পাস করাত যা ব্যান্ড ছাড়েইনি।

**ধাপ ১৪ — পোলারিটি ট্রেড। ৪৯.৬০-এর পিছু নেবেন না।**

দশ সেশন পরে দাম জোনে ফিরে আসে, যা এখন সাপোর্ট হিসেবে কাজ করছে, আর ৪৮.৪০-এ ধরে রাখে।

$$E = 48.40, \\qquad X = 47.825 - (0.5 \\times 1.60) = 47.025$$
$$\\text{ঝুঁকি} = 48.40 - 47.025 = 1.375$$
$$T = 53.00, \\qquad \\text{পুরস্কার} = 53.00 - 48.40 = 4.60$$
$$R{:}R = \\frac{4.60}{1.375} = 3.35 \\qquad p^{*} = \\frac{1}{1 + 3.35} = 0.2301 = 23.01\\%$$

**ধাপ ১৫ — শৃঙ্খলার দাম হিসাব করুন, কারণ নইলে "পিছু নেবেন না" নিছক উপদেশ।** ধরুন বদলে আপনি ব্রেক ক্যান্ডেলের ক্লোজ কিনেছিলেন:

| | ব্রেকের পিছু নেওয়া | রিটেস্টের অপেক্ষা |
|---|---|---|
| প্রবেশ | ৪৯.৬০ | **৪৮.৪০** |
| স্টপ | ৪৭.০২৫ | ৪৭.০২৫ |
| শেয়ারপ্রতি ঝুঁকি | ২.৫৭৫ | **১.৩৭৫** |
| ৫৩.০০ পর্যন্ত পুরস্কার | ৩.৪০ | **৪.৬০** |
| $R{:}R$ | ১.৩২ | **৩.৩৫** |
| ব্রেক-ইভেন উইন রেট | **৪৩.০৯%** | **২৩.০১%** |

**ব্রেকের পিছু নিলে প্রয়োজনীয় হিট রেট প্রায় দ্বিগুণ হয় — ৪৩.০৯% বনাম ২৩.০১% — অভিন্ন শেয়ারে অভিন্ন যুক্তির জন্য।** স্টপ নড়ে না, কারণ ইনভ্যালিডেশন কাঠামোর একটি ধর্ম, আপনার প্রবেশের নয়। যা বদলায় তা কেবল আপনার দেওয়া দাম।

**ধাপ ১৬ — তিনটি অধ্যায়জুড়ে তুলনা করুন, কারণ ধরনটি এখন দৃশ্যমান।**

| সেটআপ | $R{:}R$ | ব্রেক-ইভেন |
|---|---|---|
| অ ২৮ — নিশ্চিত মর্নিং স্টার | ১.২৯ | ৪৩.৭৫% |
| অ ২৯ — কন্টিনিউয়েশন রিটেস্ট | ২.৭৬ | ২৬.৫৭% |
| অ ৩০ — পোলারিটি রিটেস্ট | **৩.৩৫** | **২৩.০১%** |

**ধরনটি এই নয় যে লেভেল ক্যান্ডেলের চেয়ে ভালো। ধরনটি হলো একটি কাঠামোগত ইনভ্যালিডেশনের কাছের প্রবেশ সস্তা আর দূরের প্রবেশ ব্যয়বহুল**, আর তিনটি অধ্যায় কাকতালীয়ভাবে তাদের ইনভ্যালিডেশন কত কাছে বসে সেই ক্রমেই সাজানো।

**ধাপ ১৭ — যে ডিএসই সতর্কতা স্কোর দেখতে পায় না তা বলুন।** ৭,০০,০০০ ADV ও ৪৮ টাকায় একটি ৫ কোটি টাকার প্রাতিষ্ঠানিক অর্ডার মোটামুটি দেড় দিনের ভলিউম।

**যে লেভেল একটি টিকিট দেড় দিনে পরিষ্কার করতে পারে তা কাঠামো নয়, একটি প্রস্তাব।** ৭০.৫০ কম্পোজিট স্কোরের তা জানার কোনো উপায় নেই, কারণ তা গভীরতা নয়, ইতিহাস মাপে। **প্রতিবার স্কোরের পাশে লেভেলে বসে থাকা টাকার মূল্য গণনা করুন** — আর দুটি যা বলে তার ছোটটিতে আকার নিন।`,
    },

    excel: {
      en: `\`\`\`
A1:  — Instrument —
A2:  Ticker                      B2:  BEACONTEX
A3:  ATR(14)                     B3:  1.6
A4:  Avg Daily Volume (20d)      B4:  700000

A6:  — Touch Log —
A7:D7   Touch | Price | Volume | Vol / ADV
A8:  1   B8:  48.10   C8:  1850000   D8: =C8/$B$4
A9:  2   B9:  48.45   C9:  1420000   D9: =C9/$B$4
A10: 3   B10: 48.00   C10:  960000   D10:=C10/$B$4
A11: 4   B11: 48.35   C11:  540000   D11:=C11/$B$4

A13: — Zone Construction —
A14: Touch Count                 B14: =COUNT(B8:B11)
A15: Zone Centre                 B15: =AVERAGE(B8:B11)
A16: Zone Width Factor k         B16: 0.5
A17: Zone Half-Width             B17: =B16*B3/2
A18: Zone Lower                  B18: =B15-B17
A19: Zone Upper                  B19: =B15+B17

A21: — Strength Inputs —
A22: Sessions Traded Inside Zone B22: 9
A23: Days Since Last Touch       B23: 37
A24: Total Volume at Touches     B24: =SUM(C8:C11)
A25: Mean Vol Ratio at Touches   B25: =B24/(B14*B4)
A26: Exhaustion Ratio (last/first) B26: =C11/C8

A28: — Component Scores —
A29: Touch Score (peaks at 3)    B29: =CHOOSE(MIN(B14,6),12,25,30,24,16,8)
A30: Volume Score                B30: =MIN(30,15*B25)
A31: Recency Score               B31: =MAX(0,25-0.15*B23)
A32: Duration Score              B32: =MIN(15,1.5*B22)
A33: Raw Score                   B33: =B29+B30+B31+B32
A34: Exhaustion Penalty          B34: =IF(AND(B26<0.5,B14>=4),12,0)
A35: COMPOSITE STRENGTH          B35: =B33-B34

A37: VERDICT
B37: =IF(AND(B26<0.5,B14>=4),"WEAKENING - inventory consumed, favour the break",
     IF(B35>=70,"STRONG - trade the level",
     IF(B35>=50,"MODERATE - need confirmation","WEAK - ignore")))

A39: — Break Test —
A40: Break Candle Close          B40: 49.6
A41: Break Candle Volume         B41: 2240000
A42: Penetration (BDT)           B42: =B40-B19
A43: Penetration (ATR)           B43: =B42/B3
A44: Volume Expansion (x)        B44: =B41/B4
A45: Follow-through Close        B45: 50.15
A46: BREAK CLASSIFICATION
B46: =IF(AND(B43>=0.5,B44>=1.5,B45>B19),"CLEAN BREAK",
     IF(AND(B40<B19,B40>B18),"FALSE BREAK / STOP RUN","TEST"))

A48: — Post-Break Trade (polarity) —
A49: Retest Entry                B49: 48.4
A50: Stop (zone low - 0.5 ATR)   B50: =B18-0.5*B3
A51: Risk per Share              B51: =B49-B50
A52: Next Level Above (target)   B52: 53
A53: Reward per Share            B53: =B52-B49
A54: Reward : Risk               B54: =B53/B51
A55: TRADE VERDICT
B55: =IF(B54>=3,"Take it - structure pays 3x or better",
     IF(B54>=2,"Acceptable - size down",
     "Reject - the level is not worth the stop"))
\`\`\`

**This returns B15 = 48.225, B18:B19 = 47.825 to 48.625, B26 = 0.292, B33 = 82.50, B35 = 70.50 and the WEAKENING verdict — then B43 = 0.61, B44 = 3.20, CLEAN BREAK, and B54 = 3.35 with "Take it".**

**Five notes.**

**B37 tests the exhaustion condition before it reads B35, and this is the sheet's central design decision.** The composite is 70.50, comfortably over the 70 threshold that would print "STRONG - trade the level." **It never gets there.** The exhaustion flag fires first and returns WEAKENING, which is the opposite instruction. **Restructure this as a single weighted total — the natural thing to do — and the sheet tells you to trade a level whose inventory has been consumed**, which was exactly the market's consensus reading and exactly wrong.

**B29 uses \`CHOOSE\` rather than a formula because the relationship is not monotonic.** The score rises to 30 at three touches and then falls: 24, 16, 8. No simple expression produces that shape, and more importantly, writing it as a lookup makes the claim visible and arguable. **A reader who disagrees can see precisely where the peak sits and change it**, which they could not do with a fitted curve.

**B17 divides by 2, and forgetting that doubles your zone.** \`B16*B3\` is the full width; the half-width is \`B16*B3/2\`. With $k = 0.5$ and ATR 1.60, the band is 0.80 wide and 0.40 either side of centre. **The commonest error in building this sheet is a zone twice as wide as intended, which then absorbs genuine breaks and reports them as tests.**

**B42 subtracts B19, the zone upper bound, not B15, the centre.** Measuring penetration from the centre would credit the zone's own half-width as though price had travelled through it: $\\pi$ would read 0.86 ATR instead of 0.61, and breaks that never left the band would pass the 0.50 threshold. **The zone edge is where the level ends, so it is where penetration starts.**

**B50 references B18 and the ATR, never B49.** The stop is anchored to the structure, not to the entry. That is what makes the comparison in §30.5 possible: entering at 49.60 instead of 48.40 changes the risk from 1.375 to 2.575 and the break-even rate from 23.01% to 43.09%, **while the stop stays where it was, because the price at which the thesis is wrong has nothing to do with what you paid.**`,
      bn: `\`\`\`
A1:  — Instrument —
A2:  Ticker                      B2:  BEACONTEX
A3:  ATR(14)                     B3:  1.6
A4:  Avg Daily Volume (20d)      B4:  700000

A6:  — Touch Log —
A7:D7   Touch | Price | Volume | Vol / ADV
A8:  1   B8:  48.10   C8:  1850000   D8: =C8/$B$4
A9:  2   B9:  48.45   C9:  1420000   D9: =C9/$B$4
A10: 3   B10: 48.00   C10:  960000   D10:=C10/$B$4
A11: 4   B11: 48.35   C11:  540000   D11:=C11/$B$4

A13: — Zone Construction —
A14: Touch Count                 B14: =COUNT(B8:B11)
A15: Zone Centre                 B15: =AVERAGE(B8:B11)
A16: Zone Width Factor k         B16: 0.5
A17: Zone Half-Width             B17: =B16*B3/2
A18: Zone Lower                  B18: =B15-B17
A19: Zone Upper                  B19: =B15+B17

A21: — Strength Inputs —
A22: Sessions Traded Inside Zone B22: 9
A23: Days Since Last Touch       B23: 37
A24: Total Volume at Touches     B24: =SUM(C8:C11)
A25: Mean Vol Ratio at Touches   B25: =B24/(B14*B4)
A26: Exhaustion Ratio (last/first) B26: =C11/C8

A28: — Component Scores —
A29: Touch Score (peaks at 3)    B29: =CHOOSE(MIN(B14,6),12,25,30,24,16,8)
A30: Volume Score                B30: =MIN(30,15*B25)
A31: Recency Score               B31: =MAX(0,25-0.15*B23)
A32: Duration Score              B32: =MIN(15,1.5*B22)
A33: Raw Score                   B33: =B29+B30+B31+B32
A34: Exhaustion Penalty          B34: =IF(AND(B26<0.5,B14>=4),12,0)
A35: COMPOSITE STRENGTH          B35: =B33-B34

A37: VERDICT
B37: =IF(AND(B26<0.5,B14>=4),"WEAKENING - inventory consumed, favour the break",
     IF(B35>=70,"STRONG - trade the level",
     IF(B35>=50,"MODERATE - need confirmation","WEAK - ignore")))

A39: — Break Test —
A40: Break Candle Close          B40: 49.6
A41: Break Candle Volume         B41: 2240000
A42: Penetration (BDT)           B42: =B40-B19
A43: Penetration (ATR)           B43: =B42/B3
A44: Volume Expansion (x)        B44: =B41/B4
A45: Follow-through Close        B45: 50.15
A46: BREAK CLASSIFICATION
B46: =IF(AND(B43>=0.5,B44>=1.5,B45>B19),"CLEAN BREAK",
     IF(AND(B40<B19,B40>B18),"FALSE BREAK / STOP RUN","TEST"))

A48: — Post-Break Trade (polarity) —
A49: Retest Entry                B49: 48.4
A50: Stop (zone low - 0.5 ATR)   B50: =B18-0.5*B3
A51: Risk per Share              B51: =B49-B50
A52: Next Level Above (target)   B52: 53
A53: Reward per Share            B53: =B52-B49
A54: Reward : Risk               B54: =B53/B51
A55: TRADE VERDICT
B55: =IF(B54>=3,"Take it - structure pays 3x or better",
     IF(B54>=2,"Acceptable - size down",
     "Reject - the level is not worth the stop"))
\`\`\`

**এটি ফেরত দেয় B15 = ৪৮.২২৫, B18:B19 = ৪৭.৮২৫ থেকে ৪৮.৬২৫, B26 = ০.২৯২, B33 = ৮২.৫০, B35 = ৭০.৫০ ও WEAKENING রায় — তারপর B43 = ০.৬১, B44 = ৩.২০, CLEAN BREAK, ও B54 = ৩.৩৫ সঙ্গে "Take it"।**

**পাঁচটি টীকা।**

**B37 B35 পড়ার আগে এক্সহসশন শর্ত পরীক্ষা করে, আর এটিই শিটের কেন্দ্রীয় নকশাগত সিদ্ধান্ত।** কম্পোজিট ৭০.৫০, "STRONG - trade the level" ছাপানো ৭০ সীমার স্বাচ্ছন্দ্যে ওপরে। **সেখানে কখনো পৌঁছায় না।** এক্সহসশন চিহ্ন আগে সক্রিয় হয়ে WEAKENING ফেরত দেয়, যা বিপরীত নির্দেশ। **একে একটি একক ভারিত মোট হিসেবে পুনর্গঠন করুন — যা করাই স্বাভাবিক — আর শিটটি আপনাকে এমন লেভেল ট্রেড করতে বলে যার ইনভেন্টরি নিঃশেষ হয়েছে**, যা ঠিক বাজারের ঐকমত্যের পাঠ ছিল এবং ঠিক ভুল ছিল।

**B29 একটি ফর্মুলার বদলে \`CHOOSE\` ব্যবহার করে কারণ সম্পর্কটি একমুখী নয়।** স্কোর তিনটি টাচে ৩০-এ ওঠে ও তারপর পড়ে: ২৪, ১৬, ৮। কোনো সরল রাশি ঐ আকৃতি তৈরি করে না, আর আরও গুরুত্বপূর্ণ, একে লুকআপ হিসেবে লেখা দাবিটিকে দৃশ্যমান ও তর্কযোগ্য করে। **যে পাঠক দ্বিমত করেন তিনি ঠিক কোথায় শীর্ষ বসে তা দেখে বদলাতে পারেন**, যা একটি সন্নিবেশিত বক্ররেখায় পারতেন না।

**B17 ২ দিয়ে ভাগ করে, আর তা ভুলে গেলে আপনার জোন দ্বিগুণ হয়।** \`B16*B3\` পূর্ণ প্রস্থ; অর্ধ-প্রস্থ \`B16*B3/2\`। $k = 0.5$ ও ATR ১.৬০-এ ব্যান্ড ০.৮০ চওড়া ও কেন্দ্রের দুই পাশে ০.৪০। **এই শিট গড়ার সবচেয়ে সাধারণ ভুল হলো উদ্দেশ্যের দ্বিগুণ চওড়া একটি জোন, যা তারপর প্রকৃত ব্রেক শুষে নিয়ে সেগুলোকে টেস্ট হিসেবে জানায়।**

**B42 B19, জোনের ঊর্ধ্বসীমা, বিয়োগ করে, B15, কেন্দ্র, নয়।** কেন্দ্র থেকে অনুপ্রবেশ মাপলে জোনের নিজের অর্ধ-প্রস্থকে এমনভাবে জমা দেওয়া হতো যেন দাম তার মধ্য দিয়ে গেছে: $\\pi$ ০.৬১-এর বদলে ০.৮৬ ATR পড়ত, আর যে ব্রেক ব্যান্ড ছাড়েইনি তা ০.৫০ সীমা পার করত। **জোনের প্রান্তেই লেভেল শেষ, তাই সেখান থেকেই অনুপ্রবেশ শুরু।**

**B50 B18 ও ATR-কে নির্দেশ করে, কখনো B49-কে নয়।** স্টপ কাঠামোতে নোঙর করা, প্রবেশে নয়। §৩০.৫-এর তুলনাটি এ কারণেই সম্ভব: ৪৮.৪০-এর বদলে ৪৯.৬০-এ ঢুকলে ঝুঁকি ১.৩৭৫ থেকে ২.৫৭৫ ও ব্রেক-ইভেন হার ২৩.০১% থেকে ৪৩.০৯% হয়, **অথচ স্টপ যেখানে ছিল সেখানেই থাকে, কারণ যে দামে যুক্তিটি ভুল তার সঙ্গে আপনার দেওয়া দামের কোনো সম্পর্ক নেই।**`,
    },

    python: {
      en: `\`\`\`python
"""
Chapter 30 — Support and resistance as positioned inventory.

Builds an ATR-scaled zone, scores it, lets the exhaustion ratio override
the score, classifies the break, and prices the polarity retest.
Educational. Figures illustrative.
"""
from dataclasses import dataclass

K_WIDTH = 0.5          # zone width factor, in ATR
TOUCH_CURVE = {1: 12, 2: 25, 3: 30, 4: 24, 5: 16}   # peaks at 3, then declines
TOUCH_FLOOR = 8        # 6 or more touches
EXHAUSTION_CUT = 0.5
BREAK_PENETRATION = 0.5   # in ATR
BREAK_VOLUME = 1.5        # x ADV


@dataclass
class Touch:
    price: float
    volume: int


@dataclass
class Level:
    ticker: str
    atr: float
    adv: float
    touches: list[Touch]
    sessions_inside: int
    days_since_last: int

    # --- zone ----------------------------------------------------------
    @property
    def n(self) -> int:
        return len(self.touches)

    @property
    def centre(self) -> float:
        return sum(t.price for t in self.touches) / self.n

    @property
    def half_width(self) -> float:
        """K_WIDTH is the FULL width in ATR; halve it for either side."""
        return K_WIDTH * self.atr / 2

    @property
    def lower(self) -> float:
        return round(self.centre - self.half_width, 3)

    @property
    def upper(self) -> float:
        return round(self.centre + self.half_width, 3)

    def contains(self, price: float) -> bool:
        return self.lower <= price <= self.upper

    # --- component scores ----------------------------------------------
    @property
    def mean_vol_ratio(self) -> float:
        return sum(t.volume for t in self.touches) / (self.n * self.adv)

    @property
    def s_touch(self) -> float:
        return TOUCH_CURVE.get(self.n, TOUCH_FLOOR)

    @property
    def s_volume(self) -> float:
        return min(30.0, 15 * self.mean_vol_ratio)

    @property
    def s_recency(self) -> float:
        return max(0.0, 25 - 0.15 * self.days_since_last)

    @property
    def s_duration(self) -> float:
        return min(15.0, 1.5 * self.sessions_inside)

    @property
    def raw_score(self) -> float:
        return self.s_touch + self.s_volume + self.s_recency + self.s_duration

    # --- the override ---------------------------------------------------
    @property
    def exhaustion(self) -> float:
        """Volume at the last touch relative to the first."""
        return self.touches[-1].volume / self.touches[0].volume

    @property
    def exhausted(self) -> bool:
        return self.exhaustion < EXHAUSTION_CUT and self.n >= 4

    @property
    def composite(self) -> float:
        return self.raw_score - (12 if self.exhausted else 0)

    @property
    def verdict(self) -> str:
        # Tested BEFORE the composite. Not a term in the sum.
        if self.exhausted:
            return "WEAKENING - inventory consumed, favour the break"
        if self.composite >= 70:
            return "STRONG - trade the level"
        if self.composite >= 50:
            return "MODERATE - need confirmation"
        return "WEAK - ignore"

    # --- break test ------------------------------------------------------
    def classify_break(self, close: float, volume: int,
                       high: float, next_close: float | None) -> dict:
        penetration = (close - self.upper) / self.atr
        vol_x = volume / self.adv
        follow = next_close is not None and next_close > self.upper

        if penetration >= BREAK_PENETRATION and vol_x >= BREAK_VOLUME and follow:
            label = "CLEAN BREAK"
        elif high > self.upper and self.contains(close):
            label = "FALSE BREAK / STOP RUN"
        else:
            label = "TEST"
        return {"penetration_atr": penetration, "volume_x": vol_x,
                "follow_through": follow, "label": label}

    # --- polarity trade --------------------------------------------------
    def polarity_trade(self, entry: float, target: float) -> dict:
        stop = round(self.lower - 0.5 * self.atr, 3)
        risk = round(entry - stop, 3)
        rr = (target - entry) / risk
        return {"entry": entry, "stop": stop, "risk": risk, "target": target,
                "rr": rr, "breakeven_pct": 1 / (1 + rr) * 100}


if __name__ == "__main__":
    beacontex = Level(
        ticker="BEACONTEX", atr=1.60, adv=700_000,
        touches=[Touch(48.10, 1_850_000), Touch(48.45, 1_420_000),
                 Touch(48.00,   960_000), Touch(48.35,   540_000)],
        sessions_inside=9, days_since_last=37,
    )

    print(f"=== {beacontex.ticker} ===")
    print(f"  Zone            : {beacontex.lower:.3f} - {beacontex.upper:.3f} "
          f"(centre {beacontex.centre:.3f})")
    print(f"  Touch volumes   : "
          f"{', '.join(f'{t.volume/beacontex.adv:.2f}x' for t in beacontex.touches)}")
    print(f"  Exhaustion ratio: {beacontex.exhaustion:.3f}"
          f"{'   <-- OVERRIDE' if beacontex.exhausted else ''}")
    print()
    print(f"  Touch score     : {beacontex.s_touch:6.2f}   (peaks at 3 touches)")
    print(f"  Volume score    : {beacontex.s_volume:6.2f}")
    print(f"  Recency score   : {beacontex.s_recency:6.2f}")
    print(f"  Duration score  : {beacontex.s_duration:6.2f}")
    print(f"  RAW SCORE       : {beacontex.raw_score:6.2f}")
    print(f"  COMPOSITE       : {beacontex.composite:6.2f}"
          f"   ({'would read STRONG' if beacontex.composite >= 70 else 'below 70'})")
    print(f"  VERDICT         : {beacontex.verdict}")

    print()
    brk = beacontex.classify_break(close=49.60, volume=2_240_000,
                                   high=49.90, next_close=50.15)
    print("=== The break ===")
    print(f"  Penetration     : {brk['penetration_atr']:.2f} ATR "
          f"(need {BREAK_PENETRATION})")
    print(f"  Volume          : {brk['volume_x']:.2f}x (need {BREAK_VOLUME})")
    print(f"  Follow-through  : {brk['follow_through']}")
    print(f"  CLASSIFICATION  : {brk['label']}")

    false_brk = beacontex.classify_break(close=47.95, volume=1_120_000,
                                         high=49.20, next_close=None)
    print(f"  Counterfactual  : {false_brk['label']} "
          f"(close 47.95 back inside the zone on {false_brk['volume_x']:.2f}x)")

    print()
    print("=== What chasing the break costs ===")
    print(f"{'Entry at':<20} {'Entry':>7} {'Stop':>7} {'Risk':>7} "
          f"{'R:R':>6} {'Break-even':>11}")
    for label, e in (("break close", 49.60), ("polarity retest", 48.40)):
        t = beacontex.polarity_trade(entry=e, target=53.00)
        print(f"{label:<20} {t['entry']:>7.2f} {t['stop']:>7.3f} "
              f"{t['risk']:>7.3f} {t['rr']:>6.2f} {t['breakeven_pct']:>10.2f}%")

    print()
    ticket = 5_00_00_000  # BDT 5 crore institutional order
    days = ticket / (beacontex.adv * beacontex.centre)
    print(f"Depth check: a BDT {ticket:,} order is {days:.1f} days of volume "
          f"at {beacontex.adv:,} ADV and BDT {beacontex.centre:.2f}.")
\`\`\`

**Expected output:**
\`\`\`
=== BEACONTEX ===
  Zone            : 47.825 - 48.625 (centre 48.225)
  Touch volumes   : 2.64x, 2.03x, 1.37x, 0.77x
  Exhaustion ratio: 0.292   <-- OVERRIDE

  Touch score     :  24.00   (peaks at 3 touches)
  Volume score    :  25.55
  Recency score   :  19.45
  Duration score  :  13.50
  RAW SCORE       :  82.50
  COMPOSITE       :  70.50   (would read STRONG)
  VERDICT         : WEAKENING - inventory consumed, favour the break

=== The break ===
  Penetration     : 0.61 ATR (need 0.5)
  Volume          : 3.20x (need 1.5)
  Follow-through  : True
  CLASSIFICATION  : CLEAN BREAK
  Counterfactual  : FALSE BREAK / STOP RUN (close 47.95 back inside the zone on 1.60x)

=== What chasing the break costs ===
Entry at               Entry    Stop    Risk    R:R  Break-even
break close            49.60  47.025   2.575   1.32      43.09%
polarity retest        48.40  47.025   1.375   3.35      23.01%

Depth check: a BDT 50,000,000 order is 1.5 days of volume at 700,000 ADV and BDT 48.23.
\`\`\`

**The line to read twice is \`COMPOSITE : 70.50 (would read STRONG)\` sitting directly above \`VERDICT : WEAKENING\`.** The printout is deliberately arranged so the contradiction is visible: **a level that scores above the strong threshold is told to stand aside, because the volume across its four touches fell to 29% of the first.** The score measures how impressive the history looks. The exhaustion ratio measures whether anyone is still there.

**Three implementation notes.**

**\`verdict\` checks \`exhausted\` before it reads \`composite\`, and the comment in the code says so.** This is the same short-circuit as Chapter 25's hard gates and Chapter 29's record-date check. **Refactoring it into a single weighted total is the obvious tidy-up and it would destroy the chapter's finding** — a constraint that a good-looking sum can outvote is not a constraint.

**\`half_width\` divides \`K_WIDTH * atr\` by two and the docstring explains why.** \`K_WIDTH\` is the full width in ATR units; each side gets half. **Omitting the division silently doubles every zone, which then swallows genuine breaks and reports them as tests** — a failure that produces no error and looks like a conservative system.

**\`polarity_trade\` computes the stop from \`self.lower\` and never from \`entry\`.** That is what makes the comparison at the bottom meaningful: both rows share a stop of 47.025 because **the invalidation is a property of the structure, not of the price you happened to pay.** Any version where the stop is a percentage below the entry would show the two entries as equally good, which is precisely the error the table exists to expose.`,
      bn: `\`\`\`python
"""
অধ্যায় ৩০ — অবস্থানরত ইনভেন্টরি হিসেবে সাপোর্ট ও রেজিস্ট্যান্স।

একটি ATR-মাপা জোন গড়ে, স্কোর করে, এক্সহসশন অনুপাতকে স্কোর অগ্রাহ্য করতে
দেয়, ব্রেক শ্রেণিবদ্ধ করে, আর পোলারিটি রিটেস্টের দাম হিসাব করে।
শিক্ষামূলক। সংখ্যা দৃষ্টান্তমূলক।
"""
from dataclasses import dataclass

K_WIDTH = 0.5          # জোন প্রস্থ গুণক, ATR-এ
TOUCH_CURVE = {1: 12, 2: 25, 3: 30, 4: 24, 5: 16}   # ৩-এ শীর্ষ, তারপর নামে
TOUCH_FLOOR = 8        # ৬ বা তার বেশি টাচ
EXHAUSTION_CUT = 0.5
BREAK_PENETRATION = 0.5   # ATR-এ
BREAK_VOLUME = 1.5        # ADV-র গুণ


@dataclass
class Touch:
    price: float
    volume: int


@dataclass
class Level:
    ticker: str
    atr: float
    adv: float
    touches: list[Touch]
    sessions_inside: int
    days_since_last: int

    # --- জোন ----------------------------------------------------------
    @property
    def n(self) -> int:
        return len(self.touches)

    @property
    def centre(self) -> float:
        return sum(t.price for t in self.touches) / self.n

    @property
    def half_width(self) -> float:
        """K_WIDTH হলো ATR এককে পূর্ণ প্রস্থ; প্রতি পাশের জন্য অর্ধেক করুন।"""
        return K_WIDTH * self.atr / 2

    @property
    def lower(self) -> float:
        return round(self.centre - self.half_width, 3)

    @property
    def upper(self) -> float:
        return round(self.centre + self.half_width, 3)

    def contains(self, price: float) -> bool:
        return self.lower <= price <= self.upper

    # --- উপাদান স্কোর ----------------------------------------------------
    @property
    def mean_vol_ratio(self) -> float:
        return sum(t.volume for t in self.touches) / (self.n * self.adv)

    @property
    def s_touch(self) -> float:
        return TOUCH_CURVE.get(self.n, TOUCH_FLOOR)

    @property
    def s_volume(self) -> float:
        return min(30.0, 15 * self.mean_vol_ratio)

    @property
    def s_recency(self) -> float:
        return max(0.0, 25 - 0.15 * self.days_since_last)

    @property
    def s_duration(self) -> float:
        return min(15.0, 1.5 * self.sessions_inside)

    @property
    def raw_score(self) -> float:
        return self.s_touch + self.s_volume + self.s_recency + self.s_duration

    # --- অগ্রাহ্যকারী শর্ত -----------------------------------------------
    @property
    def exhaustion(self) -> float:
        """প্রথম টাচের সাপেক্ষে শেষ টাচের ভলিউম।"""
        return self.touches[-1].volume / self.touches[0].volume

    @property
    def exhausted(self) -> bool:
        return self.exhaustion < EXHAUSTION_CUT and self.n >= 4

    @property
    def composite(self) -> float:
        return self.raw_score - (12 if self.exhausted else 0)

    @property
    def verdict(self) -> str:
        # কম্পোজিটের আগে পরীক্ষিত। যোগফলের কোনো পদ নয়।
        if self.exhausted:
            return "WEAKENING - inventory consumed, favour the break"
        if self.composite >= 70:
            return "STRONG - trade the level"
        if self.composite >= 50:
            return "MODERATE - need confirmation"
        return "WEAK - ignore"

    # --- ব্রেক পরীক্ষা ----------------------------------------------------
    def classify_break(self, close: float, volume: int,
                       high: float, next_close: float | None) -> dict:
        penetration = (close - self.upper) / self.atr
        vol_x = volume / self.adv
        follow = next_close is not None and next_close > self.upper

        if penetration >= BREAK_PENETRATION and vol_x >= BREAK_VOLUME and follow:
            label = "CLEAN BREAK"
        elif high > self.upper and self.contains(close):
            label = "FALSE BREAK / STOP RUN"
        else:
            label = "TEST"
        return {"penetration_atr": penetration, "volume_x": vol_x,
                "follow_through": follow, "label": label}

    # --- পোলারিটি ট্রেড ----------------------------------------------------
    def polarity_trade(self, entry: float, target: float) -> dict:
        stop = round(self.lower - 0.5 * self.atr, 3)
        risk = round(entry - stop, 3)
        rr = (target - entry) / risk
        return {"entry": entry, "stop": stop, "risk": risk, "target": target,
                "rr": rr, "breakeven_pct": 1 / (1 + rr) * 100}


if __name__ == "__main__":
    beacontex = Level(
        ticker="BEACONTEX", atr=1.60, adv=700_000,
        touches=[Touch(48.10, 1_850_000), Touch(48.45, 1_420_000),
                 Touch(48.00,   960_000), Touch(48.35,   540_000)],
        sessions_inside=9, days_since_last=37,
    )

    print(f"=== {beacontex.ticker} ===")
    print(f"  Zone            : {beacontex.lower:.3f} - {beacontex.upper:.3f} "
          f"(centre {beacontex.centre:.3f})")
    print(f"  Touch volumes   : "
          f"{', '.join(f'{t.volume/beacontex.adv:.2f}x' for t in beacontex.touches)}")
    print(f"  Exhaustion ratio: {beacontex.exhaustion:.3f}"
          f"{'   <-- OVERRIDE' if beacontex.exhausted else ''}")
    print()
    print(f"  Touch score     : {beacontex.s_touch:6.2f}   (peaks at 3 touches)")
    print(f"  Volume score    : {beacontex.s_volume:6.2f}")
    print(f"  Recency score   : {beacontex.s_recency:6.2f}")
    print(f"  Duration score  : {beacontex.s_duration:6.2f}")
    print(f"  RAW SCORE       : {beacontex.raw_score:6.2f}")
    print(f"  COMPOSITE       : {beacontex.composite:6.2f}"
          f"   ({'would read STRONG' if beacontex.composite >= 70 else 'below 70'})")
    print(f"  VERDICT         : {beacontex.verdict}")

    print()
    brk = beacontex.classify_break(close=49.60, volume=2_240_000,
                                   high=49.90, next_close=50.15)
    print("=== The break ===")
    print(f"  Penetration     : {brk['penetration_atr']:.2f} ATR "
          f"(need {BREAK_PENETRATION})")
    print(f"  Volume          : {brk['volume_x']:.2f}x (need {BREAK_VOLUME})")
    print(f"  Follow-through  : {brk['follow_through']}")
    print(f"  CLASSIFICATION  : {brk['label']}")

    false_brk = beacontex.classify_break(close=47.95, volume=1_120_000,
                                         high=49.20, next_close=None)
    print(f"  Counterfactual  : {false_brk['label']} "
          f"(close 47.95 back inside the zone on {false_brk['volume_x']:.2f}x)")

    print()
    print("=== What chasing the break costs ===")
    print(f"{'Entry at':<20} {'Entry':>7} {'Stop':>7} {'Risk':>7} "
          f"{'R:R':>6} {'Break-even':>11}")
    for label, e in (("break close", 49.60), ("polarity retest", 48.40)):
        t = beacontex.polarity_trade(entry=e, target=53.00)
        print(f"{label:<20} {t['entry']:>7.2f} {t['stop']:>7.3f} "
              f"{t['risk']:>7.3f} {t['rr']:>6.2f} {t['breakeven_pct']:>10.2f}%")

    print()
    ticket = 5_00_00_000  # ৫ কোটি টাকার প্রাতিষ্ঠানিক অর্ডার
    days = ticket / (beacontex.adv * beacontex.centre)
    print(f"Depth check: a BDT {ticket:,} order is {days:.1f} days of volume "
          f"at {beacontex.adv:,} ADV and BDT {beacontex.centre:.2f}.")
\`\`\`

**প্রত্যাশিত আউটপুট:**
\`\`\`
=== BEACONTEX ===
  Zone            : 47.825 - 48.625 (centre 48.225)
  Touch volumes   : 2.64x, 2.03x, 1.37x, 0.77x
  Exhaustion ratio: 0.292   <-- OVERRIDE

  Touch score     :  24.00   (peaks at 3 touches)
  Volume score    :  25.55
  Recency score   :  19.45
  Duration score  :  13.50
  RAW SCORE       :  82.50
  COMPOSITE       :  70.50   (would read STRONG)
  VERDICT         : WEAKENING - inventory consumed, favour the break

=== The break ===
  Penetration     : 0.61 ATR (need 0.5)
  Volume          : 3.20x (need 1.5)
  Follow-through  : True
  CLASSIFICATION  : CLEAN BREAK
  Counterfactual  : FALSE BREAK / STOP RUN (close 47.95 back inside the zone on 1.60x)

=== What chasing the break costs ===
Entry at               Entry    Stop    Risk    R:R  Break-even
break close            49.60  47.025   2.575   1.32      43.09%
polarity retest        48.40  47.025   1.375   3.35      23.01%

Depth check: a BDT 50,000,000 order is 1.5 days of volume at 700,000 ADV and BDT 48.23.
\`\`\`

**দুবার পড়ার মতো লাইনটি হলো \`VERDICT : WEAKENING\`-এর ঠিক ওপরে বসা \`COMPOSITE : 70.50 (would read STRONG)\`।** ছাপাটি ইচ্ছাকৃতভাবে এমনভাবে সাজানো যাতে দ্বন্দ্বটি দৃশ্যমান হয়: **যে লেভেল শক্তিশালী সীমার ওপরে স্কোর করে তাকে সরে দাঁড়াতে বলা হচ্ছে, কারণ তার চারটি টাচজুড়ে ভলিউম প্রথমটির ২৯%-এ নেমেছে।** স্কোর মাপে ইতিহাসটি কত চিত্তাকর্ষক দেখায়। এক্সহসশন অনুপাত মাপে সেখানে এখনো কেউ আছেন কি না।

**তিনটি বাস্তবায়ন টীকা।**

**\`verdict\` \`composite\` পড়ার আগে \`exhausted\` যাচাই করে, আর কোডের মন্তব্য তা বলে।** এটি অধ্যায় ২৫-এর কঠোর গেট ও অধ্যায় ২৯-এর রেকর্ড-ডেট যাচাইয়েরই সংক্ষিপ্তকরণ। **একে একটি একক ভারিত মোটে রিফ্যাক্টর করা সুস্পষ্ট পরিচ্ছন্নতা আর তা অধ্যায়ের ফলাফলটিই ধ্বংস করত** — যে সীমাবদ্ধতাকে একটি সুন্দর-দেখতে যোগফল ভোটে হারাতে পারে তা সীমাবদ্ধতা নয়।

**\`half_width\` \`K_WIDTH * atr\`-কে দুই দিয়ে ভাগ করে আর ডকস্ট্রিং কেন তা বলে।** \`K_WIDTH\` হলো ATR এককে পূর্ণ প্রস্থ; প্রতি পাশ পায় অর্ধেক। **ভাগটি বাদ দিলে প্রতিটি জোন নীরবে দ্বিগুণ হয়, যা তারপর প্রকৃত ব্রেক গিলে ফেলে সেগুলোকে টেস্ট হিসেবে জানায়** — এমন একটি ব্যর্থতা যা কোনো ভুল তৈরি করে না ও একটি রক্ষণশীল ব্যবস্থার মতো দেখায়।

**\`polarity_trade\` স্টপ গণনা করে \`self.lower\` থেকে, কখনো \`entry\` থেকে নয়।** নিচের তুলনাটি এ কারণেই অর্থবহ: দুটি সারিই ৪৭.০২৫ স্টপ ভাগ করে কারণ **ইনভ্যালিডেশন কাঠামোর একটি ধর্ম, আপনি কাকতালীয়ভাবে যে দাম দিয়েছেন তার নয়।** যে সংস্করণে স্টপ প্রবেশের একটি শতাংশ নিচে, তা দুটি প্রবেশকেই সমান ভালো দেখাত, আর ঠিক এই ভুলটি উন্মোচন করতেই টেবিলটির অস্তিত্ব।`,
    },

    mistakes: {
      en: `1. **Drawing the level as a line.** BEACONTEX's touches ranged 48.00 to 48.45 — a line at 48.00 calls three of the four touches "breaks". The level is the band 47.825 to 48.625, and a print at 48.50 is the level working, not failing.
2. **Fixing the zone width in taka or percent instead of ATR.** A BDT 0.40 band is generous on a stock that moves BDT 0.30 a day and meaningless on one that moves BDT 4.00. Scale to volatility or you are running two different tests while believing you are running one.
3. **Forgetting to halve the width factor.** $k \\cdot ATR$ is the full width; the half-width is $k \\cdot ATR / 2$. Omitting the division doubles every zone, which then swallows genuine breaks and reports them as tests — **a failure that produces no error and looks conservative.**
4. **Reading "four times rejected" as strength.** The touch score peaks at three and declines afterwards. **A level tested repeatedly is one whose inventory has been repeatedly consumed**, and the market's consensus reading of BEACONTEX was exactly this error.
5. **Folding the exhaustion ratio into the weighted total.** It is tested first and overrides. Make it a term in the sum and the composite of 70.50 reads STRONG, which is Chapter 25's lesson arriving in a new domain: a constraint a good-looking total can outvote is not a constraint.
6. **Measuring break penetration from the zone centre.** It credits the zone's own half-width as travel — $\\pi$ reads 0.86 ATR instead of 0.61 — and passes breaks that never left the band. Measure from the edge.
7. **Chasing the break candle.** Buying 49.60 instead of the 48.40 retest raises the required win rate from 23.01% to 43.09% **on the identical thesis, with the identical stop.** The only thing that changed is the price you paid.
8. **Anchoring the stop to the entry rather than to the structure.** A percentage-below-entry stop makes both entries above look equally good, which is precisely the comparison you need to be able to see.
9. **Counting floor-price sessions as touches.** Prices sat at an administered level on negligible volume; no inventory was positioned there. Those are not touches, and Chapter 26's exclusion flag is the tool.
10. **Treating a false break as a disappointment.** It clears the stop cluster above the zone and traps everyone who bought the spike. **On the DSE, with no reliable short side, that reads as a do-not-buy signal and an exit trigger for existing holdings — not as a short entry.**
11. **Trusting the score without checking depth.** A BDT 5 crore ticket clears this level in a day and a half. **The composite measures history; it cannot see that one order can erase the structure.**`,
      bn: `১. **লেভেলটি রেখা হিসেবে আঁকা।** BEACONTEX-এর টাচগুলো ৪৮.০০ থেকে ৪৮.৪৫ পর্যন্ত — ৪৮.০০-এ একটি রেখা চারটির তিনটি টাচকেই "ব্রেক" বলে। লেভেলটি ৪৭.৮২৫ থেকে ৪৮.৬২৫ ব্যান্ড, আর ৪৮.৫০-এর প্রিন্ট লেভেলের কাজ করা, ব্যর্থ হওয়া নয়।
২. **জোনের প্রস্থ ATR-এর বদলে টাকায় বা শতাংশে স্থির করা।** যে শেয়ার দিনে ০.৩০ টাকা নড়ে তাতে ০.৪০ টাকার ব্যান্ড উদার আর যে ৪.০০ টাকা নড়ে তাতে অর্থহীন। ভোলাটিলিটিতে মাপুন, নইলে একটিই পরীক্ষা চালাচ্ছেন ভেবে দুটি ভিন্ন পরীক্ষা চালাবেন।
৩. **প্রস্থ গুণকটি অর্ধেক করতে ভুলে যাওয়া।** $k \\cdot ATR$ পূর্ণ প্রস্থ; অর্ধ-প্রস্থ $k \\cdot ATR / 2$। ভাগটি বাদ দিলে প্রতিটি জোন দ্বিগুণ হয়, যা তারপর প্রকৃত ব্রেক গিলে সেগুলোকে টেস্ট হিসেবে জানায় — **এমন ব্যর্থতা যা কোনো ভুল তৈরি করে না ও রক্ষণশীল দেখায়।**
৪. **"চারবার প্রত্যাখ্যাত"-কে শক্তি হিসেবে পড়া।** টাচ স্কোর তিনটিতে শীর্ষে ওঠে ও তারপর নামে। **বারবার পরীক্ষিত লেভেল সেটিই যার ইনভেন্টরি বারবার নিঃশেষ হয়েছে**, আর BEACONTEX সম্পর্কে বাজারের ঐকমত্যের পাঠ ঠিক এই ভুলটিই ছিল।
৫. **এক্সহসশন অনুপাতকে ভারিত মোটে ঢোকানো।** এটি প্রথমে পরীক্ষিত হয় ও অগ্রাহ্য করে। একে যোগফলের একটি পদ বানান আর ৭০.৫০ কম্পোজিট STRONG পড়ে, যা নতুন ক্ষেত্রে অধ্যায় ২৫-এর শিক্ষা: যে সীমাবদ্ধতাকে একটি সুন্দর-দেখতে মোট ভোটে হারাতে পারে তা সীমাবদ্ধতা নয়।
৬. **জোনের কেন্দ্র থেকে ব্রেকের অনুপ্রবেশ মাপা।** এটি জোনের নিজের অর্ধ-প্রস্থকে চলাচল হিসেবে জমা দেয় — $\\pi$ ০.৬১-এর বদলে ০.৮৬ ATR পড়ে — আর যে ব্রেক ব্যান্ড ছাড়েইনি তা পাস করে। প্রান্ত থেকে মাপুন।
৭. **ব্রেক ক্যান্ডেলের পিছু নেওয়া।** ৪৮.৪০-এর রিটেস্টের বদলে ৪৯.৬০ কিনলে প্রয়োজনীয় উইন রেট ২৩.০১% থেকে ৪৩.০৯% হয় **অভিন্ন যুক্তিতে, অভিন্ন স্টপে।** কেবল আপনার দেওয়া দামটিই বদলেছে।
৮. **স্টপকে কাঠামোর বদলে প্রবেশে নোঙর করা।** প্রবেশের-শতাংশ-নিচে স্টপ ওপরের দুটি প্রবেশকেই সমান ভালো দেখায়, আর ঠিক এই তুলনাটিই আপনার দেখতে পাওয়া দরকার।
৯. **ফ্লোর-প্রাইসের সেশনগুলোকে টাচ হিসেবে গোনা।** দাম নগণ্য ভলিউমে একটি প্রশাসিত স্তরে বসে ছিল; সেখানে কোনো ইনভেন্টরি অবস্থান নেয়নি। ওগুলো টাচ নয়, আর অধ্যায় ২৬-এর বর্জন চিহ্নই হাতিয়ার।
১০. **ভুয়া ব্রেককে হতাশা গণ্য করা।** এটি জোনের ওপরের স্টপ গুচ্ছ পরিষ্কার করে ও যাঁরা স্পাইকটি কিনেছেন সবাইকে আটকে ফেলে। **ডিএসই-তে, নির্ভরযোগ্য শর্ট সাইড ছাড়া, এটি একটি কিনবেন-না সংকেত ও বিদ্যমান হোল্ডিংয়ের প্রস্থান ট্রিগার হিসেবে পড়া হয় — শর্ট প্রবেশ হিসেবে নয়।**
১১. **গভীরতা না দেখে স্কোরে ভরসা করা।** ৫ কোটি টাকার একটি টিকিট এই লেভেল দেড় দিনে পরিষ্কার করে। **কম্পোজিট ইতিহাস মাপে; এটি দেখতে পায় না যে একটি অর্ডারই কাঠামোটি মুছে দিতে পারে।**`,
    },

    tips: {
      en: `- **Log the volume at every touch, not just the price.** The price tells you where the level is; the volume tells you whether anyone is still standing there. BEACONTEX's four touches ran 2.64×, 2.03×, 1.37×, 0.77× — the whole story is in that sequence and none of it is on a price chart.
- **Compute the exhaustion ratio before you compute the score.** If it is below 0.5 on four or more touches, the score is decoration. Reading it first stops you from becoming attached to an 82.50 raw number.
- **Draw zones on the weekend, from swing highs, prior consolidation, gap edges, round figures and the IPO price** — and never during a session when a level would be convenient. Chapter 28's discipline applies identically here.
- **Wait for the polarity retest instead of the break candle, and know what the waiting is worth.** On BEACONTEX it is the difference between needing 23.01% and needing 43.09%. That is not caution; it is arithmetic.
- **Anchor every stop to the zone, never to your entry.** Half an ATR below the zone floor is the price at which the inventory story is falsified. A percentage below your fill is a number about you, not about the stock.
- **Treat a false break as information, and on the DSE specifically as an exit trigger.** It proves someone had size, it proves the push did not stick, and it clears the stops above. Without a reliable short side you cannot trade it directly — but it is a strong reason not to buy and a good reason to reduce.
- **Exclude floor-price sessions before counting touches**, using Chapter 26's flag column. A price that sat at an administered level on negligible volume positioned no inventory and is not a touch.
- **Compute the taka value that clears the level alongside the score.** At 700,000 ADV and BDT 48, one BDT 5 crore order is a day and a half of volume. **Size on the smaller of what the score and the depth suggest.**
- **Respect round taka figures but rank them below transacted levels.** 50, 100 and 500 attract orders for psychological reasons, which is real but weaker than a level built from inventory people actually hold.`,
      bn: `- **প্রতিটি টাচে কেবল দাম নয়, ভলিউম লিপিবদ্ধ করুন।** দাম বলে লেভেলটি কোথায়; ভলিউম বলে সেখানে এখনো কেউ দাঁড়িয়ে আছেন কি না। BEACONTEX-এর চারটি টাচ ছিল ২.৬৪×, ২.০৩×, ১.৩৭×, ০.৭৭× — পুরো গল্পটি ঐ ক্রমে, আর তার কিছুই প্রাইস চার্টে নেই।
- **স্কোর গণনার আগে এক্সহসশন অনুপাত গণনা করুন।** চার বা তার বেশি টাচে তা ০.৫-এর নিচে হলে স্কোর অলংকার মাত্র। আগে পড়লে ৮২.৫০ কাঁচা সংখ্যার প্রতি আসক্ত হওয়া থামে।
- **সপ্তাহান্তে জোন আঁকুন, সুইং হাই, পূর্ববর্তী কনসোলিডেশন, গ্যাপের প্রান্ত, রাউন্ড সংখ্যা ও IPO দাম থেকে** — আর কখনো সেশনের মাঝে নয় যখন একটি লেভেল সুবিধাজনক হতো। অধ্যায় ২৮-এর শৃঙ্খলা এখানে হুবহু প্রযোজ্য।
- **ব্রেক ক্যান্ডেলের বদলে পোলারিটি রিটেস্টের অপেক্ষা করুন, আর জানুন অপেক্ষার মূল্য কত।** BEACONTEX-এ তা ২৩.০১% বনাম ৪৩.০৯% প্রয়োজনের পার্থক্য। এটি সতর্কতা নয়; পাটিগণিত।
- **প্রতিটি স্টপ জোনে নোঙর করুন, কখনো আপনার প্রবেশে নয়।** জোনের মেঝের অর্ধ ATR নিচে হলো সেই দাম যেখানে ইনভেন্টরির গল্পটি মিথ্যা প্রমাণিত হয়। আপনার ফিলের একটি শতাংশ নিচে একটি সংখ্যা যা আপনাকে নিয়ে, শেয়ারটিকে নিয়ে নয়।
- **ভুয়া ব্রেককে তথ্য গণ্য করুন, আর ডিএসই-তে বিশেষভাবে একটি প্রস্থান ট্রিগার হিসেবে।** এটি প্রমাণ করে কারো আকার ছিল, প্রমাণ করে ঠেলাটি টেকেনি, আর ওপরের স্টপগুলো পরিষ্কার করে। নির্ভরযোগ্য শর্ট সাইড ছাড়া আপনি সরাসরি এটি ট্রেড করতে পারবেন না — কিন্তু এটি না কেনার শক্ত কারণ ও কমানোর ভালো কারণ।
- **টাচ গোনার আগে ফ্লোর-প্রাইসের সেশন বাদ দিন**, অধ্যায় ২৬-এর চিহ্ন কলাম ব্যবহার করে। নগণ্য ভলিউমে একটি প্রশাসিত স্তরে বসে থাকা দাম কোনো ইনভেন্টরি অবস্থান নেয়নি ও তা টাচ নয়।
- **স্কোরের পাশে লেভেলটি পরিষ্কার করা টাকার মূল্য গণনা করুন।** ৭,০০,০০০ ADV ও ৪৮ টাকায় একটি ৫ কোটি টাকার অর্ডার দেড় দিনের ভলিউম। **স্কোর ও গভীরতা যা বলে তার ছোটটিতে আকার নিন।**
- **রাউন্ড টাকার অঙ্ককে সম্মান করুন কিন্তু সম্পন্ন লেনদেনের লেভেলের নিচে রাখুন।** ৫০, ১০০ ও ৫০০ মনস্তাত্ত্বিক কারণে অর্ডার টানে, যা বাস্তব কিন্তু মানুষ সত্যিই যে ইনভেন্টরি ধরে আছেন তা থেকে গড়া লেভেলের চেয়ে দুর্বল।`,
    },

    exercises: {
      en: `1. Build the §30.6 sheet. Enter the four BEACONTEX touches and confirm B15 = 48.225, B18:B19 = 47.825/48.625, B26 = 0.292, B33 = 82.50, B35 = 70.50 and the WEAKENING verdict.
2. Remove the exhaustion override from B37 so the verdict reads only B35. What does it now say, and how many taka would that instruction have cost on the break?
3. Change B16 from 0.5 to 1.0. How much wider is the zone, and does the mid-August close of 49.60 still qualify as a clean break?
4. Delete the \`/2\` in B17. Recompute the penetration. How many of your historical breaks are now reclassified as tests?
5. Pick a DSE name and identify a level with at least four touches over the past year. Log price *and* volume at each. Compute the exhaustion ratio. What does it say that the touch count does not?
6. For the same name, compute the composite score. Then check whether any touch printed at a circuit limit or during a floor-price period. How many of your touches survive?
7. Compute penetration from the zone centre instead of the zone edge across ten historical breaks. How many false positives does the centre-based measure produce?
8. Find a false break in your data — a high above the zone with a close back inside. What happened over the next ten sessions? Would treating it as an exit signal have helped?
9. For a level you rate STRONG, compute the taka value of one day's ADV at that price. What size of single order would clear it? Is the level a structure or a proposal?
10. Take one clean break and price both entries: the break close and the polarity retest. Report both break-even win rates. How often, historically, did that name actually offer a retest?
11. In three sentences, write down what the composite score cannot see. Keep it with the sheet.`,
      bn: `১. §৩০.৬-এর শিট তৈরি করুন। BEACONTEX-এর চারটি টাচ বসান ও নিশ্চিত করুন B15 = ৪৮.২২৫, B18:B19 = ৪৭.৮২৫/৪৮.৬২৫, B26 = ০.২৯২, B33 = ৮২.৫০, B35 = ৭০.৫০ ও WEAKENING রায়।
২. B37 থেকে এক্সহসশন অগ্রাহ্যকারী শর্তটি সরান যাতে রায় কেবল B35 পড়ে। এখন এটি কী বলে, আর ব্রেকে ঐ নির্দেশ কত টাকা খরচ করাত?
৩. B16 ০.৫ থেকে ১.০ করুন। জোন কতটা চওড়া হয়, আর আগস্টের মাঝামাঝির ৪৯.৬০ ক্লোজ কি এখনো ক্লিন ব্রেক হিসেবে যোগ্য?
৪. B17-এর \`/2\` মুছুন। অনুপ্রবেশ পুনর্গণনা করুন। আপনার ঐতিহাসিক ব্রেকগুলোর কতগুলো এখন টেস্ট হিসেবে পুনঃশ্রেণিবদ্ধ হয়?
৫. একটি ডিএসই নাম বাছুন ও গত বছরে অন্তত চারটি টাচসহ একটি লেভেল শনাক্ত করুন। প্রতিটিতে দাম *ও* ভলিউম লিপিবদ্ধ করুন। এক্সহসশন অনুপাত গণনা করুন। টাচের সংখ্যা যা বলে না তা এটি কী বলে?
৬. একই নামের জন্য কম্পোজিট স্কোর গণনা করুন। তারপর দেখুন কোনো টাচ সার্কিট সীমায় বা ফ্লোর-প্রাইসের সময়কালে ছাপা হয়েছে কি না। আপনার কতগুলো টাচ টেকে?
৭. দশটি ঐতিহাসিক ব্রেকে জোনের প্রান্তের বদলে কেন্দ্র থেকে অনুপ্রবেশ গণনা করুন। কেন্দ্র-ভিত্তিক পরিমাপ কতগুলো ভুয়া ধনাত্মক তৈরি করে?
৮. আপনার ডেটায় একটি ভুয়া ব্রেক খুঁজুন — জোনের ওপরে একটি হাই ও ভেতরে ফিরে আসা ক্লোজ। পরের দশ সেশনে কী হলো? একে প্রস্থান সংকেত গণ্য করলে কি সাহায্য হতো?
৯. আপনি STRONG রেটিং দেন এমন একটি লেভেলের জন্য ঐ দামে এক দিনের ADV-র টাকার মূল্য গণনা করুন। কত আকারের একটি একক অর্ডার একে পরিষ্কার করত? লেভেলটি কি কাঠামো না প্রস্তাব?
১০. একটি ক্লিন ব্রেক নিয়ে দুটি প্রবেশেরই দাম হিসাব করুন: ব্রেক ক্লোজ ও পোলারিটি রিটেস্ট। দুটি ব্রেক-ইভেন উইন রেটই জানান। ঐতিহাসিকভাবে ঐ নামটি কতবার সত্যিই একটি রিটেস্ট দিয়েছে?
১১. তিন বাক্যে লিখুন কম্পোজিট স্কোর কী দেখতে পায় না। শিটের সঙ্গে রেখে দিন।`,
    },

    summary: {
      en: `- **Support and resistance are positioned inventory, not a mystical property of a price.** A level exists because people bought or sold there and are still holding the consequences. Everything in this chapter follows from that one mechanical claim.
- **A level is a zone, and its width comes from volatility:** centre $\\pm\\, k\\,ATR/2$, with $k = 0.5$. BEACONTEX's four touches spanned 48.00 to 48.45, so the level is **47.825–48.625, not the line at 48.00.** A print at 48.50 is the level working, not failing.
- **Repeated testing weakens a level.** The touch score peaks at three and declines: 30, then 24, 16, 8. "Four times rejected" describes supply being worked off, not a wall being reinforced.
- **The exhaustion ratio overrides the score, and is tested before it.** BEACONTEX's fourth test traded 29% of the first — **the chart said fortress, the volume said the garrison has left.** The raw score of 82.50 becomes a composite of 70.50, which would read STRONG, **and is overruled to WEAKENING.** Fold exhaustion into the weighted sum and you rebuild the market's consensus error.
- **The break test is three conditions, all required:** penetration $\\ge 0.5$ ATR **measured from the zone edge**, volume $\\ge 1.5\\times$ ADV, and a follow-through close beyond the zone. BEACONTEX printed 0.61 ATR on 3.20× with follow-through at 50.15 — **CLEAN BREAK.**
- **Polarity: a broken level reverses role**, because the trapped inventory is now positioned below. The retest at 48.40 with a stop half an ATR below the zone floor at 47.025 gives risk 1.375, reward 4.60 to the 53.00 level, **$R{:}R = 3.35$ and a break-even win rate of 23.01%.**
- **Chasing the break costs almost exactly double.** Entering at 49.60 instead of 48.40 — identical thesis, identical stop — moves the required hit rate from 23.01% to **43.09%.** The stop does not move because the invalidation belongs to the structure, not to your fill.
- **Across three chapters the pattern is now visible:** Ch 28's confirmed morning star needed 43.75%, Ch 29's continuation retest 26.57%, Ch 30's polarity retest 23.01%. **The lesson is not that levels beat candles — it is that entries close to a structural invalidation are cheap and entries far from one are expensive.**
- **A false break is information, not a disappointment.** It proves someone had size, proves the push did not stick, and clears the stops above the zone. **On the DSE, with no reliable short side, it is a do-not-buy signal and an exit trigger — not a short entry.**
- **Four DSE distortions come first:** floor-price sessions positioned no inventory and are not touches; a touch printed at a circuit limit is where the exchange stopped the move; round taka figures are real but weaker than transacted levels; and **a level one BDT 5 crore ticket clears in a day and a half is a proposal, not a structure.**
- **Discipline established:** log volume at every touch, read the exhaustion ratio before the score, draw zones at the weekend, wait for the retest and know what the waiting is worth, anchor the stop to the zone and never to your entry, and compute depth alongside strength.`,
      bn: `- **সাপোর্ট ও রেজিস্ট্যান্স হলো অবস্থানরত ইনভেন্টরি, দামের কোনো রহস্যময় বৈশিষ্ট্য নয়।** একটি লেভেলের অস্তিত্ব কারণ মানুষ সেখানে কিনেছেন বা বিক্রি করেছেন এবং এখনো তার পরিণতি বইছেন। এই অধ্যায়ের সবকিছু ঐ একটি যান্ত্রিক দাবি থেকে আসে।
- **লেভেল একটি জোন, আর তার প্রস্থ আসে ভোলাটিলিটি থেকে:** কেন্দ্র $\\pm\\, k\\,ATR/2$, $k = 0.5$ সহ। BEACONTEX-এর চারটি টাচ ৪৮.০০ থেকে ৪৮.৪৫ বিস্তৃত, তাই লেভেলটি **৪৭.৮২৫–৪৮.৬২৫, ৪৮.০০-এর রেখা নয়।** ৪৮.৫০-এর প্রিন্ট লেভেলের কাজ করা, ব্যর্থ হওয়া নয়।
- **বারবার পরীক্ষা লেভেল দুর্বল করে।** টাচ স্কোর তিনটিতে শীর্ষে ওঠে ও নামে: ৩০, তারপর ২৪, ১৬, ৮। "চারবার প্রত্যাখ্যাত" দেয়াল শক্ত হওয়ার নয়, সরবরাহ ক্ষয়ে যাওয়ার বর্ণনা।
- **এক্সহসশন অনুপাত স্কোরকে অগ্রাহ্য করে, ও তার আগে পরীক্ষিত হয়।** BEACONTEX-এর চতুর্থ পরীক্ষা প্রথমটির ২৯% লেনদেন করেছে — **চার্ট বলেছে দুর্গ, ভলিউম বলেছে সৈন্যরা চলে গেছে।** ৮২.৫০ কাঁচা স্কোর ৭০.৫০ কম্পোজিট হয়, যা STRONG পড়ত, **আর তা WEAKENING-এ অগ্রাহ্য হয়।** এক্সহসশনকে ভারিত যোগফলে ঢোকান আর আপনি বাজারের ঐকমত্যের ভুলটিই পুনর্নির্মাণ করলেন।
- **ব্রেক পরীক্ষা তিনটি শর্ত, সবগুলোই আবশ্যক:** **জোনের প্রান্ত থেকে মাপা** অনুপ্রবেশ $\\ge 0.5$ ATR, ভলিউম $\\ge 1.5\\times$ ADV, ও জোনের বাইরে একটি ফলো-থ্রু ক্লোজ। BEACONTEX ৩.২০×-এ ০.৬১ ATR ছেপেছে সঙ্গে ৫০.১৫-এ ফলো-থ্রু — **CLEAN BREAK।**
- **পোলারিটি: ভাঙা লেভেল ভূমিকা বদলায়**, কারণ আটকে পড়া ইনভেন্টরি এখন নিচে অবস্থান নিয়েছে। ৪৮.৪০-এ রিটেস্ট, জোনের মেঝের অর্ধ ATR নিচে ৪৭.০২৫-এ স্টপ, দেয় ঝুঁকি ১.৩৭৫, ৫৩.০০ লেভেল পর্যন্ত পুরস্কার ৪.৬০, **$R{:}R = 3.35$ ও ২৩.০১% ব্রেক-ইভেন উইন রেট।**
- **ব্রেকের পিছু নেওয়ার খরচ প্রায় হুবহু দ্বিগুণ।** ৪৮.৪০-এর বদলে ৪৯.৬০-এ ঢোকা — অভিন্ন যুক্তি, অভিন্ন স্টপ — প্রয়োজনীয় হিট রেট ২৩.০১% থেকে **৪৩.০৯%**-এ নেয়। স্টপ নড়ে না কারণ ইনভ্যালিডেশন কাঠামোর, আপনার ফিলের নয়।
- **তিনটি অধ্যায়জুড়ে ধরনটি এখন দৃশ্যমান:** অ ২৮-এর নিশ্চিত মর্নিং স্টারে দরকার ছিল ৪৩.৭৫%, অ ২৯-এর কন্টিনিউয়েশন রিটেস্টে ২৬.৫৭%, অ ৩০-এর পোলারিটি রিটেস্টে ২৩.০১%। **শিক্ষাটি এই নয় যে লেভেল ক্যান্ডেলকে হারায় — শিক্ষাটি হলো একটি কাঠামোগত ইনভ্যালিডেশনের কাছের প্রবেশ সস্তা আর দূরের প্রবেশ ব্যয়বহুল।**
- **ভুয়া ব্রেক তথ্য, হতাশা নয়।** এটি প্রমাণ করে কারো আকার ছিল, প্রমাণ করে ঠেলাটি টেকেনি, আর জোনের ওপরের স্টপ পরিষ্কার করে। **ডিএসই-তে, নির্ভরযোগ্য শর্ট সাইড ছাড়া, এটি একটি কিনবেন-না সংকেত ও প্রস্থান ট্রিগার — শর্ট প্রবেশ নয়।**
- **চারটি ডিএসই বিকৃতি আগে আসে:** ফ্লোর-প্রাইসের সেশন কোনো ইনভেন্টরি অবস্থান নেয়নি ও তা টাচ নয়; সার্কিট সীমায় ছাপা টাচ হলো যেখানে এক্সচেঞ্জ চলাচল থামিয়েছে; রাউন্ড টাকার অঙ্ক বাস্তব কিন্তু সম্পন্ন লেনদেনের লেভেলের চেয়ে দুর্বল; আর **যে লেভেল ৫ কোটি টাকার একটি টিকিট দেড় দিনে পরিষ্কার করে তা প্রস্তাব, কাঠামো নয়।**
- **প্রতিষ্ঠিত শৃঙ্খলা:** প্রতিটি টাচে ভলিউম লিপিবদ্ধ করুন, স্কোরের আগে এক্সহসশন অনুপাত পড়ুন, সপ্তাহান্তে জোন আঁকুন, রিটেস্টের অপেক্ষা করুন ও অপেক্ষার মূল্য জানুন, স্টপ জোনে নোঙর করুন কখনো প্রবেশে নয়, আর শক্তির পাশে গভীরতা গণনা করুন।`,
    },
  },

  interview: [
    {
      q: {
        en: 'Why is a level tested four times weaker than one tested twice?',
        bn: 'চারবার পরীক্ষিত একটি লেভেল দুবার পরীক্ষিত লেভেলের চেয়ে দুর্বল কেন?',
      },
      a: {
        en: 'Because a level is positioned inventory, and every test consumes some of it. The people who are defending forty-eight are people who sold there, or who are waiting to sell there, and each time price returns some of them get their fill and leave. After four tests a meaningful part of that supply has been transferred to whoever was buying. The evidence is in the volume rather than the count: on the worked example the four touches transacted two point six four times average volume, then two point zero three, then one point three seven, then zero point seven seven. The fourth test traded twenty-nine percent of the first. That is not a wall being reinforced; that is a queue being served. My scoring curve encodes this directly — it peaks at three touches and then declines, twenty-four at four, sixteen at five, eight at six or more — which is deliberately the opposite of the folk reading that more rejections mean more strength. And the practical consequence is the one that matters: when a level looks strong by count but its touch volumes are decaying, the correct posture is to favour the break rather than to fade the level, which is exactly what happened on the mid-August session.',
        bn: 'কারণ একটি লেভেল হলো অবস্থানরত ইনভেন্টরি, আর প্রতিটি পরীক্ষা তার কিছুটা নিঃশেষ করে। যাঁরা আটচল্লিশ রক্ষা করছেন তাঁরা সেখানে বিক্রি করেছেন, বা সেখানে বিক্রির অপেক্ষায় আছেন, আর প্রতিবার দাম ফিরে এলে তাঁদের কেউ কেউ ফিল পেয়ে চলে যান। চারটি পরীক্ষার পর ঐ সরবরাহের উল্লেখযোগ্য অংশ যিনি কিনছিলেন তাঁর কাছে হস্তান্তরিত হয়েছে। প্রমাণ সংখ্যায় নয়, ভলিউমে: উদাহরণে চারটি টাচ লেনদেন করেছে গড়ের দুই দশমিক ছয় চার গুণ, তারপর দুই দশমিক শূন্য তিন, তারপর এক দশমিক তিন সাত, তারপর শূন্য দশমিক সাত সাত। চতুর্থ পরীক্ষা প্রথমটির উনত্রিশ শতাংশ লেনদেন করেছে। এটি দেয়াল শক্ত হওয়া নয়; এটি একটি সারিতে সেবা দেওয়া। আমার স্কোরিং বক্ররেখা এটি সরাসরি সংকেতবদ্ধ করে — তিনটি টাচে শীর্ষে ওঠে ও তারপর নামে, চারে চব্বিশ, পাঁচে ষোলো, ছয় বা তার বেশিতে আট — যা ইচ্ছাকৃতভাবেই এই প্রচলিত পাঠের বিপরীত যে বেশি প্রত্যাখ্যান মানে বেশি শক্তি। আর ব্যবহারিক পরিণতিটিই গুরুত্বপূর্ণ: যখন একটি লেভেল সংখ্যায় শক্তিশালী দেখায় কিন্তু তার টাচ ভলিউম ক্ষয় হচ্ছে, তখন সঠিক অবস্থান লেভেলের বিরুদ্ধে যাওয়া নয়, ব্রেকের পক্ষে থাকা, আর আগস্টের মাঝামাঝির সেশনে ঠিক তাই ঘটেছে।',
      },
    },
    {
      q: {
        en: 'Your level scores 70.50, above your "strong" threshold, and your sheet still says stand aside. Explain.',
        bn: 'আপনার লেভেল ৭০.৫০ স্কোর করে, আপনার "শক্তিশালী" সীমার ওপরে, তবু আপনার শিট বলে সরে দাঁড়ান। ব্যাখ্যা করুন।',
      },
      a: {
        en: 'Because the exhaustion ratio is tested before the composite is read, and it is not a term in the sum. The raw score comes to eighty-two point five, the exhaustion penalty takes twelve off it, and seventy point five would indeed print strong on the thresholds. It never gets there. The verdict function checks whether the last touch traded below half the volume of the first on four or more touches, which here is zero point two nine two, and returns weakening — favour the break. The reasoning is that the score and the ratio measure different things. The score measures how impressive the level\'s history looks: how many touches, how much volume across them, how recently, how long price spent inside the zone. The ratio measures whether anybody is still standing there. A level can have an extremely impressive history precisely because it has been thoroughly worked off. This is the same architecture as the quality floor in the fundamental scorecard — if I fold the ratio into the weighted total as one more component, a high enough score on the other four buys past it, and the sheet then recommends trading a level whose inventory has been consumed. That was the market\'s consensus reading of this exact chart, and it was wrong.',
        bn: 'কারণ কম্পোজিট পড়ার আগে এক্সহসশন অনুপাত পরীক্ষিত হয়, আর এটি যোগফলের কোনো পদ নয়। কাঁচা স্কোর দাঁড়ায় বিরাশি দশমিক পাঁচ, এক্সহসশন জরিমানা তা থেকে বারো কাটে, আর সত্তর দশমিক পাঁচ সীমায় সত্যিই শক্তিশালী ছাপত। সেখানে কখনো পৌঁছায় না। রায় ফাংশন যাচাই করে চার বা তার বেশি টাচে শেষ টাচ প্রথমটির অর্ধেকের কম ভলিউম লেনদেন করেছে কি না, যা এখানে শূন্য দশমিক দুই নয় দুই, আর ফেরত দেয় দুর্বল হচ্ছে — ব্রেকের পক্ষে। যুক্তি হলো স্কোর ও অনুপাত ভিন্ন জিনিস মাপে। স্কোর মাপে লেভেলটির ইতিহাস কত চিত্তাকর্ষক দেখায়: কতগুলো টাচ, তাদের জুড়ে কত ভলিউম, কত সাম্প্রতিক, জোনের ভেতরে দাম কত সময় কাটিয়েছে। অনুপাত মাপে সেখানে এখনো কেউ দাঁড়িয়ে আছেন কি না। একটি লেভেলের অত্যন্ত চিত্তাকর্ষক ইতিহাস থাকতে পারে ঠিক এই কারণেই যে তা পুঙ্খানুপুঙ্খভাবে ক্ষয়ে গেছে। এটি ফান্ডামেন্টাল স্কোরকার্ডের গুণমান-মেঝেরই স্থাপত্য — অনুপাতটিকে আরেকটি উপাদান হিসেবে ভারিত মোটে ঢোকালে বাকি চারটিতে যথেষ্ট উঁচু স্কোর তা কিনে পার হয়, আর শিট তখন এমন লেভেল ট্রেড করতে বলে যার ইনভেন্টরি নিঃশেষ হয়েছে। এই একই চার্ট সম্পর্কে বাজারের ঐকমত্যের পাঠ তাই ছিল, আর তা ভুল ছিল।',
      },
    },
    {
      q: {
        en: 'Why measure the zone width in ATR rather than as a percentage of price?',
        bn: 'জোনের প্রস্থ দামের শতাংশে না মেপে ATR-এ কেন মাপবেন?',
      },
      a: {
        en: 'Because the question the zone answers is how far price routinely moves without meaning anything, and that is a volatility question, not a price-level question. Two stocks can both trade at forty-eight taka while one has an average true range of thirty paisa and the other of four taka. A one percent band is forty-eight paisa on both: generous enough on the first to swallow real breaks, tight enough on the second that ordinary intraday noise looks like a violation. Scaling to ATR makes the band mean the same thing on both — half an ATR wide, so a quarter of an ATR either side of centre at my default k of zero point five. On the worked example that gives a band of forty-seven point eight two five to forty-eight point six two five, and it matters immediately: the four touches themselves ranged from forty-eight flat to forty-eight forty-five, so a line drawn at forty-eight would have called three of the four touches breaks. I would add the same reasoning applies to the break threshold, which is why penetration is expressed in ATR units too. A fixed taka or percentage threshold is not comparable across instruments, and the moment you screen more than one stock you are silently running different tests and believing they are the same test.',
        bn: 'কারণ জোনটি যে প্রশ্নের উত্তর দেয় তা হলো দাম নিয়মিতভাবে কতদূর নড়ে কিছু না বুঝিয়ে, আর তা একটি ভোলাটিলিটির প্রশ্ন, দামের স্তরের নয়। দুটি শেয়ারই আটচল্লিশ টাকায় লেনদেন হতে পারে যেখানে একটির গড় true range ত্রিশ পয়সা ও অন্যটির চার টাকা। এক শতাংশের ব্যান্ড দুটিতেই আটচল্লিশ পয়সা: প্রথমটিতে প্রকৃত ব্রেক গিলে ফেলার মতো উদার, দ্বিতীয়টিতে এত আঁটসাঁট যে সাধারণ ইন্ট্রাডে হইচইকেই লঙ্ঘন মনে হয়। ATR-এ মাপলে ব্যান্ডটি দুটিতেই একই জিনিস বোঝায় — অর্ধ ATR চওড়া, অর্থাৎ আমার শূন্য দশমিক পাঁচ ডিফল্ট k-তে কেন্দ্রের দুই পাশে সিকি ATR। উদাহরণে তা দেয় সাতচল্লিশ দশমিক আট দুই পাঁচ থেকে আটচল্লিশ দশমিক ছয় দুই পাঁচের একটি ব্যান্ড, আর তা তৎক্ষণাৎ গুরুত্বপূর্ণ: চারটি টাচ নিজেরাই আটচল্লিশ থেকে আটচল্লিশ পঁয়তাল্লিশ পর্যন্ত বিস্তৃত ছিল, তাই আটচল্লিশে আঁকা একটি রেখা চারটির তিনটি টাচকেই ব্রেক বলত। আমি যোগ করব একই যুক্তি ব্রেক সীমাতেও প্রযোজ্য, আর সেজন্যই অনুপ্রবেশও ATR এককে প্রকাশ করা। নির্দিষ্ট টাকা বা শতাংশের সীমা বিভিন্ন উপকরণে তুলনীয় নয়, আর যে মুহূর্তে একাধিক শেয়ার স্ক্রিন করছেন সেই মুহূর্তে আপনি নীরবে ভিন্ন পরীক্ষা চালাচ্ছেন আর ভাবছেন সেগুলো একই পরীক্ষা।',
      },
    },
    {
      q: {
        en: 'A level breaks cleanly. Why not buy the break candle?',
        bn: 'একটি লেভেল পরিচ্ছন্নভাবে ভাঙে। ব্রেক ক্যান্ডেলটি কেন কিনবেন না?',
      },
      a: {
        en: 'Because the stop does not move but the entry does, so chasing roughly doubles the win rate you need for the same idea. On the worked example the invalidation is half an ATR below the zone floor, forty-seven point zero two five, and that is a property of the structure rather than of my fill — a close back below the zone means the buyers who took the break have themselves become trapped, which is the exact condition that created the level in the first place. Buying the break close at forty-nine sixty gives risk of two taka fifty-seven and a reward of three taka forty to the next level at fifty-three, so a ratio of one point three two and a break-even win rate of forty-three point zero nine percent. Waiting for the polarity retest at forty-eight forty gives risk of one taka thirty-seven, reward of four taka sixty, a ratio of three point three five, and a break-even of twenty-three point zero one percent. Same thesis, same stock, same stop, and nearly half the required accuracy. The honest counter-argument is that not every break offers a retest, so the discipline has a real cost in missed trades, and I would want to measure that on my own names rather than assume it. But the trade I do take should be the one where I am paying least for the same invalidation.',
        bn: 'কারণ স্টপ নড়ে না কিন্তু প্রবেশ নড়ে, তাই পিছু নিলে একই ধারণার জন্য প্রয়োজনীয় উইন রেট মোটামুটি দ্বিগুণ হয়। উদাহরণে ইনভ্যালিডেশন জোনের মেঝের অর্ধ ATR নিচে, সাতচল্লিশ দশমিক শূন্য দুই পাঁচ, আর তা আমার ফিলের নয়, কাঠামোর একটি ধর্ম — জোনের নিচে ফিরে বন্ধ হওয়া মানে যে ক্রেতারা ব্রেকটি নিয়েছিলেন তাঁরা নিজেরাই আটকে গেছেন, আর ঠিক এই অবস্থাই প্রথমে লেভেলটি তৈরি করেছিল। ঊনপঞ্চাশ ষাটে ব্রেক ক্লোজ কিনলে ঝুঁকি দুই টাকা সাতান্ন আর তিপ্পান্নের পরবর্তী লেভেল পর্যন্ত পুরস্কার তিন টাকা চল্লিশ, অর্থাৎ এক দশমিক তিন দুই অনুপাত ও তেতাল্লিশ দশমিক শূন্য নয় শতাংশ ব্রেক-ইভেন উইন রেট। আটচল্লিশ চল্লিশে পোলারিটি রিটেস্টের অপেক্ষা করলে ঝুঁকি এক টাকা সাঁইত্রিশ, পুরস্কার চার টাকা ষাট, অনুপাত তিন দশমিক তিন পাঁচ, ও ব্রেক-ইভেন তেইশ দশমিক শূন্য এক শতাংশ। একই যুক্তি, একই শেয়ার, একই স্টপ, আর প্রায় অর্ধেক প্রয়োজনীয় নির্ভুলতা। সৎ পাল্টা যুক্তি হলো প্রতিটি ব্রেক রিটেস্ট দেয় না, তাই শৃঙ্খলাটির হাতছাড়া ট্রেডে একটি প্রকৃত খরচ আছে, আর আমি তা অনুমান না করে নিজের নামগুলোতে মাপতে চাইব। কিন্তু আমি যে ট্রেডটি নিই তা এমন হওয়া উচিত যেখানে একই ইনভ্যালিডেশনের জন্য আমি সবচেয়ে কম দিচ্ছি।',
      },
    },
    {
      q: {
        en: 'Price spikes above your resistance zone and closes back inside it. What have you learned?',
        bn: 'দাম আপনার রেজিস্ট্যান্স জোনের ওপরে লাফায় ও ভেতরে ফিরে বন্ধ হয়। আপনি কী শিখলেন?',
      },
      a: {
        en: 'Three things at once, and I would treat it as a signal rather than as a disappointment. First, somebody had enough size to push price through the zone, so the level is being actively contested rather than ignored. Second, it did not stick, which means whatever supply is sitting there absorbed the push — the level did its job. Third, and most usefully, the stop cluster resting above the zone has now been triggered and cleared, so that fuel is spent, and everybody who bought the spike is holding at a price above the current one. Those buyers are new supply on any move back toward the level. Where I would be careful is on what to do about it. In a market with a functioning borrow, that close is a short with a stop above the spike high, and the trapped breakout buyers are the source of the move. On the DSE there is no reliable retail short side, so the same reading resolves to two actions and no more: do not buy, and if I am already long, this is an exit trigger or at least a reason to tighten the stop. It is worth being explicit about that constraint rather than importing the textbook conclusion, because half the classical literature assumes a short side we do not have.',
        bn: 'একসঙ্গে তিনটি জিনিস, আর আমি একে হতাশা নয়, একটি সংকেত গণ্য করব। প্রথমত, কারো দাম জোনের মধ্য দিয়ে ঠেলার মতো যথেষ্ট আকার ছিল, তাই লেভেলটি উপেক্ষিত নয়, সক্রিয়ভাবে প্রতিদ্বন্দ্বিতার মুখে। দ্বিতীয়ত, তা টেকেনি, অর্থাৎ সেখানে যে সরবরাহ বসে আছে তা ঠেলাটি শুষে নিয়েছে — লেভেলটি তার কাজ করেছে। তৃতীয়ত, এবং সবচেয়ে কার্যকরভাবে, জোনের ওপরে বসে থাকা স্টপ গুচ্ছ এখন সক্রিয় হয়ে পরিষ্কার হয়ে গেছে, তাই ঐ জ্বালানি খরচ হয়ে গেছে, আর যাঁরা স্পাইকটি কিনেছেন সবাই বর্তমান দামের ওপরে ধরে আছেন। ঐ ক্রেতারাই লেভেলের দিকে যেকোনো ফেরার চলাচলে নতুন সরবরাহ। আমি সতর্ক হব এ নিয়ে কী করা উচিত তাতে। কার্যকর ধার-ব্যবস্থার বাজারে ঐ ক্লোজ একটি শর্ট, স্পাইক হাই-র ওপরে স্টপসহ, আর আটকে পড়া ব্রেকআউট ক্রেতারাই চলাচলের উৎস। ডিএসই-তে নির্ভরযোগ্য খুচরা শর্ট সাইড নেই, তাই একই পাঠ দুটি কাজে গিয়ে দাঁড়ায়, তার বেশি নয়: কিনবেন না, আর ইতিমধ্যে লং থাকলে এটি একটি প্রস্থান ট্রিগার বা অন্তত স্টপ শক্ত করার কারণ। পাঠ্যবইয়ের উপসংহার আমদানি না করে ঐ সীমাবদ্ধতাটি স্পষ্ট করে বলা মূল্যবান, কারণ ধ্রুপদী সাহিত্যের অর্ধেক এমন একটি শর্ট সাইড ধরে নেয় যা আমাদের নেই।',
      },
    },
    {
      q: {
        en: 'What can your composite strength score not see?',
        bn: 'আপনার কম্পোজিট শক্তির স্কোর কী দেখতে পায় না?',
      },
      a: {
        en: 'Depth, which on our market is often the thing that decides whether a level is real. Every input to the score is historical — how many touches, what volume across them, how recently, how long price sat inside the zone. None of it asks how much taka is actually resting at the level right now. On the worked example, twenty-day average volume is seven hundred thousand shares at around forty-eight taka, so a single institutional order of five crore taka is about a day and a half of total volume. A level that one ticket can clear in a day and a half is a proposal, not a structure, and a composite of seventy point five has no way of expressing that. There are three other blind spots I would name. It cannot tell a genuine touch from a session that printed at the circuit limit, where the exchange stopped the move rather than supply meeting demand. It counts floor-price sessions as touches unless I exclude them first, and those positioned no inventory at all. And it treats a round taka figure like fifty as equivalent to a level built from actual transacted volume, when the first attracts orders for psychological reasons and is genuinely weaker. So my practice is to compute the taka value that clears the level alongside the score, and to size on the smaller of what the two suggest.',
        bn: 'গভীরতা, যা আমাদের বাজারে প্রায়ই ঠিক করে একটি লেভেল বাস্তব কি না। স্কোরের প্রতিটি উপাদান ঐতিহাসিক — কতগুলো টাচ, তাদের জুড়ে কত ভলিউম, কত সাম্প্রতিক, জোনের ভেতরে দাম কত সময় বসেছিল। কোনোটিই জিজ্ঞেস করে না এই মুহূর্তে লেভেলে আসলে কত টাকা বসে আছে। উদাহরণে কুড়ি-দিনের গড় ভলিউম প্রায় আটচল্লিশ টাকায় সাত লক্ষ শেয়ার, তাই পাঁচ কোটি টাকার একটি একক প্রাতিষ্ঠানিক অর্ডার মোট ভলিউমের প্রায় দেড় দিন। যে লেভেল একটি টিকিট দেড় দিনে পরিষ্কার করতে পারে তা কাঠামো নয়, একটি প্রস্তাব, আর সত্তর দশমিক পাঁচ কম্পোজিটের তা প্রকাশ করার কোনো উপায় নেই। আরও তিনটি অন্ধ বিন্দুর নাম করব। এটি একটি প্রকৃত টাচ ও সার্কিট সীমায় ছাপা একটি সেশনের পার্থক্য বলতে পারে না, যেখানে চাহিদা সরবরাহের সঙ্গে মেলেনি, এক্সচেঞ্জ চলাচল থামিয়েছে। আমি আগে বাদ না দিলে এটি ফ্লোর-প্রাইসের সেশনকে টাচ হিসেবে গোনে, আর সেগুলো কোনো ইনভেন্টরিই অবস্থান নেয়নি। আর এটি পঞ্চাশের মতো একটি রাউন্ড টাকার অঙ্ককে প্রকৃত সম্পন্ন ভলিউম থেকে গড়া লেভেলের সমতুল্য গণ্য করে, যেখানে প্রথমটি মনস্তাত্ত্বিক কারণে অর্ডার টানে ও সত্যিই দুর্বল। তাই আমার চর্চা হলো স্কোরের পাশে লেভেলটি পরিষ্কার করা টাকার মূল্য গণনা করা, আর দুটি যা বলে তার ছোটটিতে আকার নেওয়া।',
      },
    },
  ],

  quiz: [
    {
      q: {
        en: 'Support and resistance are best explained mechanically as:',
        bn: 'সাপোর্ট ও রেজিস্ট্যান্সের সর্বোত্তম যান্ত্রিক ব্যাখ্যা:',
      },
      options: {
        en: [
          'A psychological property of round numbers',
          'Positioned inventory held by real participants',
          'A mathematical property of moving averages',
          'A regulatory price band',
        ],
        bn: [
          'রাউন্ড সংখ্যার একটি মনস্তাত্ত্বিক ধর্ম',
          'প্রকৃত অংশগ্রহণকারীদের ধরে থাকা অবস্থানরত ইনভেন্টরি',
          'মুভিং অ্যাভারেজের একটি গাণিতিক ধর্ম',
          'একটি নিয়ন্ত্রক মূল্য ব্যান্ড',
        ],
      },
      answer: 1,
    },
    {
      q: {
        en: 'With ATR 1.60 and k = 0.5, the zone half-width is:',
        bn: 'ATR ১.৬০ ও k = ০.৫-এ জোনের অর্ধ-প্রস্থ:',
      },
      options: {
        en: ['0.40', '0.80', '1.60', '3.20'],
        bn: ['০.৪০', '০.৮০', '১.৬০', '৩.২০'],
      },
      answer: 0,
    },
    {
      q: {
        en: 'The touch score in this chapter peaks at:',
        bn: 'এই অধ্যায়ের টাচ স্কোর শীর্ষে ওঠে:',
      },
      options: {
        en: ['1 touch', '2 touches', '3 touches', '6 or more touches'],
        bn: ['১ টাচে', '২ টাচে', '৩ টাচে', '৬ বা তার বেশি টাচে'],
      },
      answer: 2,
    },
    {
      q: {
        en: 'BEACONTEX\'s exhaustion ratio of 0.292 means:',
        bn: 'BEACONTEX-এর ০.২৯২ এক্সহসশন অনুপাতের অর্থ:',
      },
      options: {
        en: [
          'The level is 29% stronger than average',
          'The last touch traded 29% of the first touch\'s volume',
          'Price fell 29% from the level',
          'The zone is 29% of an ATR wide',
        ],
        bn: [
          'লেভেলটি গড়ের চেয়ে ২৯% শক্তিশালী',
          'শেষ টাচ প্রথম টাচের ২৯% ভলিউম লেনদেন করেছে',
          'দাম লেভেল থেকে ২৯% পড়েছে',
          'জোনটি এক ATR-এর ২৯% চওড়া',
        ],
      },
      answer: 1,
    },
    {
      q: {
        en: 'The composite score of 70.50 is overruled because the exhaustion condition is:',
        bn: '৭০.৫০ কম্পোজিট স্কোর অগ্রাহ্য হয় কারণ এক্সহসশন শর্তটি:',
      },
      options: {
        en: [
          'A heavily weighted term in the sum',
          'Tested before the composite is read',
          'Averaged with the touch score',
          'Applied only when the score is below 50',
        ],
        bn: [
          'যোগফলের একটি ভারী ভারিত পদ',
          'কম্পোজিট পড়ার আগে পরীক্ষিত',
          'টাচ স্কোরের সঙ্গে গড় করা',
          'কেবল স্কোর ৫০-এর নিচে হলে প্রযোজ্য',
        ],
      },
      answer: 1,
    },
    {
      q: {
        en: 'Break penetration must be measured from:',
        bn: 'ব্রেকের অনুপ্রবেশ মাপতে হবে:',
      },
      options: {
        en: ['The zone centre', 'The zone edge', 'The most recent touch', 'The previous close'],
        bn: ['জোনের কেন্দ্র থেকে', 'জোনের প্রান্ত থেকে', 'সাম্প্রতিকতম টাচ থেকে', 'আগের ক্লোজ থেকে'],
      },
      answer: 1,
    },
    {
      q: {
        en: 'The three conditions for a clean break are penetration ≥ 0.5 ATR, volume ≥ 1.5× ADV, and:',
        bn: 'ক্লিন ব্রেকের তিনটি শর্ত হলো অনুপ্রবেশ ≥ ০.৫ ATR, ভলিউম ≥ ১.৫× ADV, এবং:',
      },
      options: {
        en: [
          'A gap on the break candle',
          'A follow-through close beyond the zone',
          'A doji the next session',
          'Four or more prior touches',
        ],
        bn: [
          'ব্রেক ক্যান্ডেলে একটি গ্যাপ',
          'জোনের বাইরে একটি ফলো-থ্রু ক্লোজ',
          'পরের সেশনে একটি doji',
          'চার বা তার বেশি পূর্ববর্তী টাচ',
        ],
      },
      answer: 1,
    },
    {
      q: {
        en: 'Entering at the break close (49.60) rather than the polarity retest (48.40) changes the break-even win rate from 23.01% to:',
        bn: 'পোলারিটি রিটেস্টের (৪৮.৪০) বদলে ব্রেক ক্লোজে (৪৯.৬০) ঢুকলে ব্রেক-ইভেন উইন রেট ২৩.০১% থেকে হয়:',
      },
      options: {
        en: ['26.57%', '33.00%', '43.09%', '50.00%'],
        bn: ['২৬.৫৭%', '৩৩.০০%', '৪৩.০৯%', '৫০.০০%'],
      },
      answer: 2,
    },
    {
      q: {
        en: 'On the DSE, a false break with the close back inside the zone should be treated as:',
        bn: 'ডিএসই-তে জোনের ভেতরে ফিরে আসা ক্লোজসহ একটি ভুয়া ব্রেক গণ্য করা উচিত:',
      },
      options: {
        en: [
          'A short entry with a stop above the spike',
          'A do-not-buy signal and an exit trigger',
          'Confirmation the level will never break',
          'A meaningless data artefact',
        ],
        bn: [
          'স্পাইকের ওপরে স্টপসহ একটি শর্ট প্রবেশ',
          'একটি কিনবেন-না সংকেত ও প্রস্থান ট্রিগার',
          'লেভেলটি কখনো ভাঙবে না তার নিশ্চিতকরণ',
          'একটি অর্থহীন ডেটা কৃত্রিম ফল',
        ],
      },
      answer: 1,
    },
    {
      q: {
        en: 'A level with 700,000 ADV at BDT 48 that one BDT 5 crore order clears in 1.5 days is best described as:',
        bn: '৪৮ টাকায় ৭,০০,০০০ ADV-র যে লেভেল ৫ কোটি টাকার একটি অর্ডার দেড় দিনে পরিষ্কার করে তার সর্বোত্তম বর্ণনা:',
      },
      options: {
        en: ['A fortress', 'A proposal, not a structure', 'An institutional accumulation zone', 'A guaranteed reversal point'],
        bn: ['একটি দুর্গ', 'একটি প্রস্তাব, কাঠামো নয়', 'একটি প্রাতিষ্ঠানিক সঞ্চয় জোন', 'একটি নিশ্চিত রিভার্সাল বিন্দু'],
      },
      answer: 1,
    },
  ],
};
