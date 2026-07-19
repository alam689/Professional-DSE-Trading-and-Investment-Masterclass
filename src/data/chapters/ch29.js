/**
 * Chapter 29 — Candlestick Continuation Patterns
 * Part III, Technical Analysis. Builds on Ch 27 (single-candle anatomy),
 * Ch 28 (reversal patterns), Ch 2 (circuit breakers), Ch 5 (ask what moved the number).
 * Leads into Ch 30 (support & resistance).
 */

export default {
  n: 29,
  tools: [],

  excelSheet: {
    filename: 'ch29-continuation-tracker.xlsx',
    sheetName: 'Continuation Tracker',
    cells: [
      { cell: 'A1', v: '— Impulse Leg —' },
      { cell: 'A2', v: 'Impulse Start (Low)' }, { cell: 'B2', v: 42 },
      { cell: 'A3', v: 'Impulse End (High)' }, { cell: 'B3', v: 52 },
      { cell: 'A4', v: 'Impulse Height (BDT)' }, { cell: 'B4', f: 'B3-B2' },
      { cell: 'A5', v: 'Impulse Avg Volume (000)' }, { cell: 'B5', v: 2400 },

      { cell: 'A7', v: '— Consolidation Bars —' },
      { cell: 'A8', v: 'Bar' }, { cell: 'B8', v: 'Open' }, { cell: 'C8', v: 'High' },
      { cell: 'D8', v: 'Low' }, { cell: 'E8', v: 'Close' }, { cell: 'F8', v: 'Volume' },
      { cell: 'G8', v: 'Dir' },

      { cell: 'A9', v: 1 }, { cell: 'B9', v: 51.6 }, { cell: 'C9', v: 51.9 },
      { cell: 'D9', v: 50.4 }, { cell: 'E9', v: 50.6 }, { cell: 'F9', v: 1850 },
      { cell: 'G9', f: 'IF(E9<B9,-1,1)' },

      { cell: 'A10', v: 2 }, { cell: 'B10', v: 50.5 }, { cell: 'C10', v: 50.8 },
      { cell: 'D10', v: 49.3 }, { cell: 'E10', v: 49.6 }, { cell: 'F10', v: 1400 },
      { cell: 'G10', f: 'IF(E10<B10,-1,1)' },

      { cell: 'A11', v: 3 }, { cell: 'B11', v: 49.7 }, { cell: 'C11', v: 50.1 },
      { cell: 'D11', v: 48.8 }, { cell: 'E11', v: 49.1 }, { cell: 'F11', v: 1150 },
      { cell: 'G11', f: 'IF(E11<B11,-1,1)' },

      { cell: 'A12', v: 4 }, { cell: 'B12', v: 49.2 }, { cell: 'C12', v: 49.6 },
      { cell: 'D12', v: 48.7 }, { cell: 'E12', v: 49.4 }, { cell: 'F12', v: 900 },
      { cell: 'G12', f: 'IF(E12<B12,-1,1)' },

      { cell: 'A13', v: 5 }, { cell: 'B13', v: 49.5 }, { cell: 'C13', v: 50.3 },
      { cell: 'D13', v: 49.2 }, { cell: 'E13', v: 50.1 }, { cell: 'F13', v: 1100 },
      { cell: 'G13', f: 'IF(E13<B13,-1,1)' },

      { cell: 'A15', v: '— Pattern Geometry —' },
      { cell: 'A16', v: 'Consolidation Low' }, { cell: 'B16', f: 'MIN(D9:D13)' },
      { cell: 'A17', v: 'Consolidation High' }, { cell: 'B17', f: 'MAX(C9:C13)' },
      { cell: 'A18', v: 'Retracement Depth (%)' }, { cell: 'B18', f: '(B3-B16)/B4*100' },
      { cell: 'A19', v: '38.2% Retrace Level' }, { cell: 'B19', f: 'B3-0.382*B4' },
      { cell: 'A20', v: '50% Retrace Level' }, { cell: 'B20', f: 'B3-0.5*B4' },
      { cell: 'A21', v: '61.8% Retrace Level' }, { cell: 'B21', f: 'B3-0.618*B4' },

      { cell: 'A23', v: '— Volume Behaviour —' },
      { cell: 'A24', v: 'Avg Consolidation Volume' }, { cell: 'B24', f: 'AVERAGE(F9:F13)' },
      { cell: 'A25', v: 'Pause vs Impulse (x)' }, { cell: 'B25', f: 'B24/B5' },
      { cell: 'A26', v: 'Volume Slope (per bar)' }, { cell: 'B26', f: 'SLOPE(F9:F13,A9:A13)' },
      { cell: 'A27', v: 'Slope Normalised (%/bar)' }, { cell: 'B27', f: 'B26/B24*100' },
      { cell: 'A28', v: 'Avg Vol on Down Bars' }, { cell: 'B28', f: 'SUMIF(G9:G13,-1,F9:F13)/COUNTIF(G9:G13,-1)' },
      { cell: 'A29', v: 'Avg Vol on Up Bars' }, { cell: 'B29', f: 'SUMIF(G9:G13,1,F9:F13)/COUNTIF(G9:G13,1)' },
      { cell: 'A30', v: 'Down/Up Volume Ratio' }, { cell: 'B30', f: 'B28/B29' },

      { cell: 'A32', v: '— Invalidation & Trade —' },
      { cell: 'A33', v: 'Stop Buffer (BDT)' }, { cell: 'B33', v: 0.25 },
      { cell: 'A34', v: 'INVALIDATION PRICE' }, { cell: 'B34', f: 'B16-B33' },
      { cell: 'A35', v: 'Pattern Still Valid?' }, { cell: 'B35', f: 'IF(B16<B21,"NO - retrace beyond 61.8%","YES")' },
      { cell: 'A36', v: 'Entry (breakout stop)' }, { cell: 'B36', f: 'MAX(B3,B17)+0.05' },
      { cell: 'A37', v: 'Risk per Share' }, { cell: 'B37', f: 'B36-B34' },
      { cell: 'A38', v: 'Measured-move Target' }, { cell: 'B38', f: 'MAX(B3,B17)+B4' },
      { cell: 'A39', v: 'Reward per Share' }, { cell: 'B39', f: 'B38-B36' },
      { cell: 'A40', v: 'Reward : Risk' }, { cell: 'B40', f: 'B39/B37' },

      { cell: 'A42', v: '— Position Sizing —' },
      { cell: 'A43', v: 'Account Equity (BDT)' }, { cell: 'B43', v: 500000 },
      { cell: 'A44', v: 'Risk per Trade (%)' }, { cell: 'B44', v: 1 },
      { cell: 'A45', v: 'Taka at Risk' }, { cell: 'B45', f: 'B43*B44/100' },
      { cell: 'A46', v: 'Shares' }, { cell: 'B46', f: 'INT(B45/B37)' },
      { cell: 'A47', v: 'Capital Committed' }, { cell: 'B47', f: 'B46*B36' },

      { cell: 'A49', v: '— Record-date Check (DSE) —' },
      { cell: 'A50', v: 'Record Date in Window? (1=yes)' }, { cell: 'B50', v: 0 },
      { cell: 'A51', v: 'Gap Reading' }, { cell: 'B51', f: 'IF(B50=1,"MECHANICAL - adjust prices before reading any gap","Gap is tradeable information")' },

      { cell: 'A53', v: 'VERDICT' },
      {
        cell: 'B53',
        f: 'IF(B50=1,"SUSPEND - re-read the chart on adjusted prices",IF(B16<B21,"EXIT - retracement voids the continuation",IF(AND(B18<=38.2,B26<0),"HOLD - healthy pause, stop at invalidation","REDUCE - pattern intact but depth or volume is warning")))',
      },
    ],
  },

  objectives: {
    en: [
      'Distinguish a continuation pattern from a failed rally using retracement depth and volume behaviour during the pause.',
      'Identify rising and falling three methods, tasuki gaps, separating lines, side-by-side white lines, and the mat hold.',
      'Classify a gap as breakaway, runaway, or exhaustion, and state honestly what can and cannot be known in real time.',
      'Compute a pattern invalidation level and use it as the stop, replacing opinion with a falsifiable price.',
      'Check the DSE record-date calendar and circuit-limit history before reading any gap or consolidation as information.',
    ],
    bn: [
      'বিরতির সময় রিট্রেসমেন্টের গভীরতা ও ভলিউমের আচরণ দেখে কন্টিনিউয়েশন প্যাটার্নকে ব্যর্থ র‍্যালি থেকে আলাদা করা।',
      'রাইজিং ও ফলিং থ্রি মেথডস, তাসুকি গ্যাপ, সেপারেটিং লাইনস, সাইড-বাই-সাইড হোয়াইট লাইনস এবং ম্যাট হোল্ড চিহ্নিত করা।',
      'একটি গ্যাপকে ব্রেকঅ্যাওয়ে, রানঅ্যাওয়ে বা এগজশন হিসেবে শ্রেণিবদ্ধ করা, এবং রিয়েল টাইমে কী জানা যায় ও কী যায় না তা সৎভাবে বলা।',
      'প্যাটার্ন ইনভ্যালিডেশন লেভেল গণনা করা এবং মতামতের বদলে একটি খণ্ডনযোগ্য দামকে স্টপ হিসেবে ব্যবহার করা।',
      'কোনো গ্যাপ বা কনসলিডেশনকে তথ্য হিসেবে পড়ার আগে ডিএসই-র রেকর্ড ডেট ক্যালেন্ডার ও সার্কিট-লিমিটের ইতিহাস যাচাই করা।',
    ],
  },

  blocks: {
    theory: {
      en: `Chapter 28 taught you to read a candle formation as a claim that the trend is over. This chapter teaches the opposite claim — that the trend is not over, and what you are looking at is a pause. **The two claims are made by structures that look almost identical for the first three candles.** That is the whole difficulty, and pretending otherwise is how books sell patterns.

### The one question this chapter exists to answer

You are long. The stock has run. It stops running and starts drifting down. Three red candles in a row.

Is this a bull flag you should hold through, or is it the start of the decline that takes back everything?

**A consolidation is a continuation pattern until it isn't.** There is no candle that tells you which one you are in while you are in it. What there is — and this is the operational answer the chapter builds toward — is **a price that falsifies the continuation reading.** Above it, the pattern is alive. Below it, the pattern is dead, and it is dead whether or not you have changed your mind.

That price is called the **pattern invalidation level**, and it is your stop. Not your opinion about the sector. Not the chairman's guidance. A price.

### The classical continuation formations

**Rising three methods.** A long white candle. Then three (occasionally two or four) small candles, usually black, drifting lower but **staying inside the range of the first white candle.** Then a long white candle that closes above the first candle's high. The reading: sellers took three sessions to accomplish nothing, and buyers reasserted.

**Falling three methods** is the mirror — long black candle, small counter-trend candles contained within its range, then a long black candle closing below the first candle's low.

Note the containment requirement carefully. **If the small candles break the range of the impulse candle, the pattern is not a three methods.** It is something else, and the something else is usually a reversal in progress.

**Upside tasuki gap.** In an uptrend: a white candle, then a second white candle that gaps up above it, then a black candle that opens inside the second white body and closes inside the gap **without filling it.** The unfilled gap is the point — the market probed the gap, failed to close it, and the trend structure survives.

**Downside tasuki gap** is the mirror in a downtrend.

**Separating lines.** Two candles of opposite colour that share the same opening price. In an uptrend: a black candle, then a white candle opening at the same level and closing higher. The reading is that the counter-trend session was completely undone at the open. It is a weak signal on its own and I would not act on it alone.

**Side-by-side white lines.** In an uptrend, two white candles of similar size that gap up together and open at roughly the same level. Strong when it occurs, uncommon in practice, and **almost never clean on the DSE** because our gaps are usually mechanical rather than informational — more on that below.

**Mat hold.** A stronger cousin of rising three methods: a long white candle, a gap up, then a short cluster of small candles that drift back but hold above the first candle's midpoint, then a decisive white candle. **The distinguishing feature is that the pullback stays shallow.** That is not a coincidence — depth is the variable that separates continuation from reversal across every pattern in this chapter.

### Gaps: breakaway, runaway, exhaustion

A gap is a price range in which no trading occurred. Textbooks give you three types:

| Type | Where it occurs | What it means |
|---|---|---|
| **Breakaway** | At the start of a move, out of a base | New information; trend beginning |
| **Runaway (measuring)** | Mid-trend | Trend accelerating; often near the midpoint of the total move |
| **Exhaustion** | Late in a move | Last buyers/sellers capitulating; reversal near |

**Now the honest part.** A breakaway gap and an exhaustion gap look identical on the day they occur. Both are a gap. Both come with elevated volume. The classification is retrospective — you learn which one it was from what happens afterwards.

There is one real-time tell, and it is partial. **Volume relative to the preceding move.** A gap out of a quiet base on volume several times the recent average is more likely a breakaway. A gap in the third month of an established trend on the highest volume of the entire move is more likely exhaustion, because it means the marginal buyer has finally arrived — and when everyone has bought, there is nobody left to buy. But "more likely" is the correct strength. Anyone who tells you they classify gaps live with confidence is describing a memory of the trades that worked.

The runaway gap has one usable property: **it tends to occur near the midpoint of the total move**, which gives a rough projection. Treat it as a rough projection, not a target.

### Continuation versus reversal — the decision rule

This is where Chapter 28 and Chapter 29 meet. **The same three-candle pullback is a bull flag or a failed rally depending on two measurements.**

**Measurement one: retracement depth.** Take the impulse leg from its start to its end. Measure how far the pause has given back.

- **Give-back under 38.2%** — shallow. Consistent with continuation. Holders are not selling; the drift is absence of buying, not presence of selling.
- **38.2% to 61.8%** — ambiguous. Neither reading is falsified. Reduce, do not decide.
- **Beyond 61.8%** — the continuation reading is void. A move that gives back two-thirds of its impulse has not paused, it has been rejected. **Whatever it becomes next, it is no longer the pattern you entered.**

**Measurement two: volume behaviour through the pause.**

- **Declining volume** through the consolidation is the signature of a healthy pause. Nobody is transacting because nobody is being forced to. Supply has dried up rather than arrived.
- **Rising volume on down candles** is distribution. Someone with size is using the pause to leave. **The pattern may still complete, but you are now buying from an informed seller.**

The reliable metric is **the slope of volume across the pause**, not the ratio of down-bar to up-bar volume. That ratio sounds intuitive and performs badly — §29.7 shows a failing pattern where it reads healthy while the slope screams. Use the slope.

### The DSE caveat, which is not a footnote here

Continuation patterns require a trend to continue. **Three specific features of our market interrupt trends for reasons that have nothing to do with supply and demand.**

**1. Record dates create mechanical gaps.** When a stock goes ex-dividend or ex-bonus, the price adjusts downward by construction. A 20% stock dividend produces something that looks exactly like a breakaway gap to the downside and means precisely nothing about sentiment. **Check the record-date calendar before you read any gap on the DSE.** This single habit will save you more money than any pattern in this chapter will make you.

**2. Circuit limits truncate patterns.** A stock that would have gapped and run instead prints a limit move and sits there. The candle you get is not the candle the market wanted to make. Chapter 2's point applies: a price limit does not remove pressure, it defers it — and the deferred pressure arrives as the next session's open, producing a gap that is an artefact of the limit rather than of new information.

**3. Regulatory announcements reset trends without warning.** Floor prices, lock-in changes, margin-rule revisions, sector-specific directives. **A continuation pattern is a bet on the persistence of a process, and our regulator can end the process between sessions.** Size accordingly.

None of this makes candlestick continuation patterns useless on the DSE. It makes them conditional. The pattern gives you a structure and an invalidation price; the calendar tells you whether the structure is even readable this week.`,
      bn: `অধ্যায় ২৮ আপনাকে শিখিয়েছে একটি ক্যান্ডেল গঠনকে "ট্রেন্ড শেষ" — এই দাবি হিসেবে পড়তে। এই অধ্যায় শেখায় উল্টো দাবিটি — যে ট্রেন্ড শেষ হয়নি, আর আপনি যা দেখছেন তা একটি বিরতি। **প্রথম তিনটি ক্যান্ডেলে দাবি দুটির গঠন প্রায় অভিন্ন দেখায়।** এটিই পুরো অসুবিধা, আর তা না মানাই বইয়ে প্যাটার্ন বিক্রির উপায়।

### এই অধ্যায় যে একটিমাত্র প্রশ্নের জন্য বিদ্যমান

আপনি লং আছেন। শেয়ারটি ছুটেছে। ছোটা থামিয়ে নিচের দিকে গড়াতে শুরু করেছে। পরপর তিনটি লাল ক্যান্ডেল।

এটি কি একটি বুল ফ্ল্যাগ যার ভেতর দিয়ে ধরে রাখা উচিত, নাকি সেই পতনের শুরু যা সব ফিরিয়ে নেয়?

**একটি কনসলিডেশন কন্টিনিউয়েশন প্যাটার্নই — যতক্ষণ না তা আর থাকে না।** ভেতরে থাকা অবস্থায় আপনি কোনটিতে আছেন তা বলে দেওয়ার মতো কোনো ক্যান্ডেল নেই। যা আছে — এবং অধ্যায়টি এই কার্যকর উত্তরের দিকেই এগোয় — তা হলো **এমন একটি দাম যা কন্টিনিউয়েশন পাঠটিকে মিথ্যা প্রমাণ করে।** এর ওপরে প্যাটার্ন জীবিত। নিচে প্যাটার্ন মৃত, এবং আপনি মত বদলান বা না বদলান, মৃতই।

ঐ দামের নাম **প্যাটার্ন ইনভ্যালিডেশন লেভেল**, আর সেটিই আপনার স্টপ। খাত নিয়ে আপনার মতামত নয়। চেয়ারম্যানের বক্তব্য নয়। একটি দাম।

### ধ্রুপদী কন্টিনিউয়েশন গঠনগুলো

**রাইজিং থ্রি মেথডস।** একটি লম্বা সাদা ক্যান্ডেল। তারপর তিনটি (কখনো দুই বা চারটি) ছোট ক্যান্ডেল, সাধারণত কালো, নিচের দিকে গড়ায় কিন্তু **প্রথম সাদা ক্যান্ডেলের রেঞ্জের ভেতরেই থাকে।** তারপর একটি লম্বা সাদা ক্যান্ডেল যা প্রথম ক্যান্ডেলের উঁচু দামের ওপরে বন্ধ হয়। পাঠ: বিক্রেতারা তিন সেশন নিয়ে কিছুই করতে পারেনি, আর ক্রেতারা আবার নিয়ন্ত্রণ নিয়েছে।

**ফলিং থ্রি মেথডস** এর আয়না — লম্বা কালো ক্যান্ডেল, তার রেঞ্জের ভেতরে সীমিত ছোট বিপরীতমুখী ক্যান্ডেল, তারপর একটি লম্বা কালো ক্যান্ডেল যা প্রথম ক্যান্ডেলের নিচু দামের নিচে বন্ধ হয়।

সীমাবদ্ধতার শর্তটি মনোযোগ দিয়ে লক্ষ করুন। **ছোট ক্যান্ডেলগুলো যদি ইমপালস ক্যান্ডেলের রেঞ্জ ভাঙে, তবে গঠনটি থ্রি মেথডস নয়।** এটি অন্য কিছু, আর সেই অন্য কিছু সাধারণত চলমান একটি রিভার্সাল।

**আপসাইড তাসুকি গ্যাপ।** ঊর্ধ্বমুখী ট্রেন্ডে: একটি সাদা ক্যান্ডেল, তারপর দ্বিতীয় একটি সাদা ক্যান্ডেল যা তার ওপরে গ্যাপ দিয়ে খোলে, তারপর একটি কালো ক্যান্ডেল যা দ্বিতীয় সাদা বডির ভেতরে খুলে গ্যাপের ভেতরে বন্ধ হয় **কিন্তু গ্যাপটি পূরণ করে না।** অপূর্ণ গ্যাপটিই মূল কথা — বাজার গ্যাপে হাত দিয়েছে, বন্ধ করতে পারেনি, আর ট্রেন্ডের কাঠামো টিকে গেছে।

**ডাউনসাইড তাসুকি গ্যাপ** নিম্নমুখী ট্রেন্ডে এর আয়না।

**সেপারেটিং লাইনস।** বিপরীত রঙের দুটি ক্যান্ডেল যাদের ওপেনিং দাম এক। ঊর্ধ্বমুখী ট্রেন্ডে: একটি কালো ক্যান্ডেল, তারপর একই স্তরে খোলা একটি সাদা ক্যান্ডেল যা উঁচুতে বন্ধ হয়। পাঠ হলো বিপরীতমুখী সেশনটি ওপেনেই সম্পূর্ণ বাতিল হয়ে গেছে। একা এটি দুর্বল সংকেত এবং আমি এর ভিত্তিতে একা কাজ করব না।

**সাইড-বাই-সাইড হোয়াইট লাইনস।** ঊর্ধ্বমুখী ট্রেন্ডে কাছাকাছি আকারের দুটি সাদা ক্যান্ডেল যারা একসঙ্গে গ্যাপ দিয়ে ওপরে ওঠে এবং প্রায় একই স্তরে খোলে। ঘটলে শক্তিশালী, বাস্তবে অস্বাভাবিক, এবং **ডিএসই-তে প্রায় কখনোই পরিষ্কার নয়** — কারণ আমাদের গ্যাপ সাধারণত তথ্যভিত্তিক নয়, যান্ত্রিক। এ নিয়ে নিচে আরও আছে।

**ম্যাট হোল্ড।** রাইজিং থ্রি মেথডসের শক্তিশালী তুতো ভাই: একটি লম্বা সাদা ক্যান্ডেল, একটি গ্যাপ আপ, তারপর ছোট ক্যান্ডেলের একটি ছোট গুচ্ছ যা পিছিয়ে আসে কিন্তু প্রথম ক্যান্ডেলের মধ্যবিন্দুর ওপরে থাকে, তারপর একটি নির্ণায়ক সাদা ক্যান্ডেল। **পার্থক্যকারী বৈশিষ্ট্য হলো পুলব্যাকটি অগভীর থাকে।** এটি কাকতালীয় নয় — এই অধ্যায়ের প্রতিটি প্যাটার্নে গভীরতাই সেই চলক যা কন্টিনিউয়েশনকে রিভার্সাল থেকে আলাদা করে।

### গ্যাপ: ব্রেকঅ্যাওয়ে, রানঅ্যাওয়ে, এগজশন

গ্যাপ হলো এমন একটি দামের পরিসর যেখানে কোনো লেনদেন হয়নি। পাঠ্যবই তিন ধরনের কথা বলে:

| ধরন | কোথায় ঘটে | কী বোঝায় |
|---|---|---|
| **ব্রেকঅ্যাওয়ে** | একটি বেস থেকে বেরিয়ে, চলনের শুরুতে | নতুন তথ্য; ট্রেন্ড শুরু |
| **রানঅ্যাওয়ে (মেজারিং)** | ট্রেন্ডের মাঝখানে | ট্রেন্ড ত্বরান্বিত; প্রায়ই মোট চলনের মধ্যবিন্দুর কাছে |
| **এগজশন** | চলনের শেষভাগে | শেষ ক্রেতা/বিক্রেতার আত্মসমর্পণ; রিভার্সাল নিকটে |

**এবার সৎ অংশটি।** যেদিন ঘটে সেদিন ব্রেকঅ্যাওয়ে ও এগজশন গ্যাপ অভিন্ন দেখায়। দুটোই গ্যাপ। দুটোতেই ভলিউম বেশি। শ্রেণিবিন্যাসটি পশ্চাদ্দৃষ্টির — পরে কী ঘটে তা থেকেই আপনি জানেন কোনটি ছিল।

একটি রিয়েল-টাইম ইঙ্গিত আছে, এবং তা আংশিক। **আগের চলনের তুলনায় ভলিউম।** একটি শান্ত বেস থেকে সাম্প্রতিক গড়ের কয়েক গুণ ভলিউমে বেরোনো গ্যাপ ব্রেকঅ্যাওয়ে হওয়ার সম্ভাবনা বেশি। প্রতিষ্ঠিত একটি ট্রেন্ডের তৃতীয় মাসে পুরো চলনের সর্বোচ্চ ভলিউমে ঘটা গ্যাপ এগজশন হওয়ার সম্ভাবনা বেশি, কারণ এর অর্থ প্রান্তিক ক্রেতা অবশেষে এসে গেছেন — আর সবাই কিনে ফেললে কেনার আর কেউ থাকে না। কিন্তু "সম্ভাবনা বেশি"-ই সঠিক জোর। যিনি বলেন তিনি আত্মবিশ্বাসের সঙ্গে সরাসরি গ্যাপ শ্রেণিবদ্ধ করেন, তিনি আসলে যেসব ট্রেড কাজ করেছিল তার স্মৃতি বর্ণনা করছেন।

রানঅ্যাওয়ে গ্যাপের একটি ব্যবহারযোগ্য বৈশিষ্ট্য আছে: **এটি মোট চলনের মধ্যবিন্দুর কাছে ঘটার প্রবণতা রাখে**, যা একটি মোটা প্রক্ষেপণ দেয়। একে মোটা প্রক্ষেপণই ধরুন, লক্ষ্য নয়।

### কন্টিনিউয়েশন বনাম রিভার্সাল — সিদ্ধান্তের নিয়ম

এখানেই অধ্যায় ২৮ ও ২৯ মেলে। **একই তিন-ক্যান্ডেলের পুলব্যাক দুটি পরিমাপের ওপর নির্ভর করে বুল ফ্ল্যাগ বা ব্যর্থ র‍্যালি হয়।**

**পরিমাপ এক: রিট্রেসমেন্টের গভীরতা।** ইমপালস লেগটি তার শুরু থেকে শেষ পর্যন্ত নিন। মাপুন বিরতিটি কতটা ফিরিয়ে দিয়েছে।

- **৩৮.২%-এর কম ফেরত** — অগভীর। কন্টিনিউয়েশনের সঙ্গে সামঞ্জস্যপূর্ণ। ধারকরা বিক্রি করছেন না; গড়ানোটি বিক্রির উপস্থিতি নয়, কেনার অনুপস্থিতি।
- **৩৮.২% থেকে ৬১.৮%** — অস্পষ্ট। কোনো পাঠই মিথ্যা প্রমাণিত হয়নি। কমান, সিদ্ধান্ত নেবেন না।
- **৬১.৮%-এর বেশি** — কন্টিনিউয়েশন পাঠটি বাতিল। যে চলন তার ইমপালসের দুই-তৃতীয়াংশ ফিরিয়ে দেয় সে বিরতি নেয়নি, প্রত্যাখ্যাত হয়েছে। **এরপর যা-ই হোক, আপনি যে প্যাটার্নে ঢুকেছিলেন এটি আর তা নয়।**

**পরিমাপ দুই: বিরতিজুড়ে ভলিউমের আচরণ।**

- কনসলিডেশনজুড়ে **কমতে থাকা ভলিউম** সুস্থ বিরতির স্বাক্ষর। কেউ লেনদেন করছে না কারণ কেউ বাধ্য হচ্ছে না। সরবরাহ এসে পড়েনি, শুকিয়ে গেছে।
- **নিচের ক্যান্ডেলে বাড়তে থাকা ভলিউম** হলো ডিস্ট্রিবিউশন। বড় পজিশনের কেউ বিরতিটি ব্যবহার করে বেরিয়ে যাচ্ছেন। **প্যাটার্নটি তবুও সম্পূর্ণ হতে পারে, কিন্তু আপনি এখন একজন অবহিত বিক্রেতার কাছ থেকে কিনছেন।**

নির্ভরযোগ্য মেট্রিক হলো **বিরতিজুড়ে ভলিউমের ঢাল (slope)**, নিচের-বার বনাম উপরের-বার ভলিউমের অনুপাত নয়। ঐ অনুপাতটি স্বজ্ঞাত শোনায় এবং খারাপ কাজ করে — §২৯.৭ এমন একটি ব্যর্থ প্যাটার্ন দেখায় যেখানে অনুপাত সুস্থ পড়ে অথচ ঢাল চিৎকার করে। ঢাল ব্যবহার করুন।

### ডিএসই সতর্কতা, যা এখানে পাদটীকা নয়

কন্টিনিউয়েশন প্যাটার্নের জন্য চালিয়ে যাওয়ার মতো একটি ট্রেন্ড লাগে। **আমাদের বাজারের তিনটি নির্দিষ্ট বৈশিষ্ট্য এমন কারণে ট্রেন্ড ভাঙে যার সঙ্গে চাহিদা-সরবরাহের কোনো সম্পর্ক নেই।**

**১. রেকর্ড ডেট যান্ত্রিক গ্যাপ তৈরি করে।** কোনো শেয়ার এক্স-ডিভিডেন্ড বা এক্স-বোনাস হলে দাম গঠনগতভাবেই নিচে সমন্বিত হয়। ২০% স্টক ডিভিডেন্ড এমন কিছু তৈরি করে যা হুবহু নিম্নমুখী ব্রেকঅ্যাওয়ে গ্যাপের মতো দেখায় এবং মনোভাব সম্পর্কে ঠিক কিছুই বোঝায় না। **ডিএসই-তে কোনো গ্যাপ পড়ার আগে রেকর্ড-ডেট ক্যালেন্ডার দেখুন।** এই একটি অভ্যাস এই অধ্যায়ের যেকোনো প্যাটার্ন আপনাকে যা আয় করাবে তার চেয়ে বেশি টাকা বাঁচাবে।

**২. সার্কিট লিমিট প্যাটার্ন কেটে দেয়।** যে শেয়ার গ্যাপ দিয়ে ছুটত সেটি বদলে একটি লিমিট মুভ ছাপিয়ে বসে থাকে। আপনি যে ক্যান্ডেল পান তা বাজার যে ক্যান্ডেল বানাতে চেয়েছিল তা নয়। অধ্যায় ২-এর কথাটি প্রযোজ্য: দামের সীমা চাপ দূর করে না, পিছিয়ে দেয় — আর পিছিয়ে যাওয়া চাপ পরের সেশনের ওপেন হিসেবে আসে, এমন গ্যাপ তৈরি করে যা নতুন তথ্যের নয়, সীমার কৃৎকৌশল।

**৩. নিয়ন্ত্রক ঘোষণা বিনা নোটিশে ট্রেন্ড রিসেট করে।** ফ্লোর প্রাইস, লক-ইন পরিবর্তন, মার্জিন-বিধি সংশোধন, খাতভিত্তিক নির্দেশনা। **কন্টিনিউয়েশন প্যাটার্ন একটি প্রক্রিয়ার স্থায়িত্বের ওপর বাজি, আর আমাদের নিয়ন্ত্রক দুই সেশনের মাঝে প্রক্রিয়াটি শেষ করে দিতে পারেন।** সেই অনুযায়ী আকার নির্ধারণ করুন।

এর কোনোটিই ডিএসই-তে ক্যান্ডেলস্টিক কন্টিনিউয়েশন প্যাটার্নকে অকেজো করে না। এগুলো একে শর্তসাপেক্ষ করে। প্যাটার্ন আপনাকে একটি কাঠামো ও একটি ইনভ্যালিডেশন দাম দেয়; ক্যালেন্ডার বলে দেয় এই সপ্তাহে কাঠামোটি আদৌ পাঠযোগ্য কি না।`,
    },

    simple: {
      en: `Imagine someone running up a hill.

They run hard for a while. Then they slow down, hands on knees, breathing. Then they either start running again — or they sit down and walk back to the bottom.

**While they are bent over catching their breath, you cannot tell which one is about to happen.** That is the entire problem of this chapter, and no candlestick book will admit it as plainly as that.

### What you can actually see

You cannot read their mind. But you can watch two things.

**First — how far back down the hill did they slip while resting?**

If they slipped a couple of steps, they are resting. If they slid two-thirds of the way back down, they are not resting. They are finished, whatever they are telling themselves.

**Second — how hard are they still working while "resting"?**

Someone genuinely catching their breath goes quiet. Someone still gasping and struggling on flat ground is not recovering; they are failing slowly.

On a chart, "how hard are they working" is **volume**. A healthy pause is quiet — fewer and fewer shares change hands each day. An unhealthy pause is loud — heavy volume on the down days, which means somebody big is using the calm to sell you their stock.

### The patterns have names

There are formal names for these pauses. Rising three methods. Falling three methods. Tasuki gap. Separating lines. Side-by-side white lines. Mat hold.

Learn them, because other traders use the words. But **understand that every one of them is the same idea wearing a different hat**: a strong move, then a small quiet drift that does not go too far back, then the move resuming.

### The one thing you must do

Here is the part that turns this from trivia into a method.

**Before you hold through the pause, write down the price at which you will admit you were wrong.**

Usually that is just below the lowest point the pause reached. Say the pause dipped to BDT 48.70. Your line is BDT 48.45 — a quarter-taka below.

Above BDT 48.45, you are in a pause and you hold. Below it, you are in something else and you leave. **You decided this before the money was on the line, which is the only time anybody decides anything sensibly.**

That number has a name: the **pattern invalidation level**. It is not a prediction. It is a definition. It says: *this thing I think I am looking at — here is the price that proves I am not.*

### And one thing that is special to Dhaka

Before you read any gap in a DSE chart — that jump where the price opens far away from yesterday's close — **check whether the stock just went ex-dividend or ex-bonus.**

If it did, the gap is arithmetic, not opinion. The exchange adjusted the price because shareholders received something. It looks exactly like a dramatic breakdown and means nothing at all.

Checking the record-date calendar takes thirty seconds. Not checking it has cost people a great deal.`,
      bn: `কল্পনা করুন কেউ একটি পাহাড়ে দৌড়ে উঠছেন।

তিনি কিছুক্ষণ জোরে দৌড়ান। তারপর ধীর হয়ে যান, হাঁটুতে হাত রেখে হাঁপান। তারপর হয় আবার দৌড়াতে শুরু করেন — নয়তো বসে পড়েন এবং হেঁটে নিচে নেমে যান।

**তিনি যখন ঝুঁকে দম নিচ্ছেন, তখন কোনটি ঘটতে যাচ্ছে আপনি বলতে পারবেন না।** এটিই এই অধ্যায়ের পুরো সমস্যা, আর কোনো ক্যান্ডেলস্টিক বই এত স্পষ্টভাবে তা স্বীকার করবে না।

### আপনি আসলে কী দেখতে পান

আপনি তাঁর মন পড়তে পারেন না। কিন্তু দুটি জিনিস দেখতে পারেন।

**এক — বিশ্রামের সময় তিনি পাহাড়ে কতটা নিচে পিছলে গেলেন?**

দুই ধাপ পিছলালে তিনি বিশ্রাম নিচ্ছেন। দুই-তৃতীয়াংশ পথ নিচে নেমে গেলে তিনি বিশ্রাম নিচ্ছেন না। তিনি শেষ, নিজেকে যা-ই বলুন।

**দুই — "বিশ্রামের" সময়ও তিনি কতটা পরিশ্রম করছেন?**

যিনি সত্যিই দম নিচ্ছেন তিনি শান্ত হয়ে যান। যিনি সমতল জমিতেও হাঁপাচ্ছেন ও লড়ছেন তিনি সুস্থ হচ্ছেন না; ধীরে ধীরে ব্যর্থ হচ্ছেন।

চার্টে "কতটা পরিশ্রম করছেন" মানে **ভলিউম**। সুস্থ বিরতি শান্ত — প্রতিদিন কম কম শেয়ার হাতবদল হয়। অসুস্থ বিরতি শোরগোলপূর্ণ — পতনের দিনগুলোতে ভারী ভলিউম, যার মানে বড় কেউ শান্ত সময়টা ব্যবহার করে আপনাকে তাঁর শেয়ার বেচছেন।

### এই বিরতিগুলোর নাম আছে

এসব বিরতির আনুষ্ঠানিক নাম আছে। রাইজিং থ্রি মেথডস। ফলিং থ্রি মেথডস। তাসুকি গ্যাপ। সেপারেটিং লাইনস। সাইড-বাই-সাইড হোয়াইট লাইনস। ম্যাট হোল্ড।

নামগুলো শিখুন, কারণ অন্য ট্রেডাররা শব্দগুলো ব্যবহার করেন। কিন্তু **বুঝে নিন প্রতিটিই একই ধারণা ভিন্ন টুপি পরে আছে**: একটি শক্তিশালী চলন, তারপর একটি ছোট শান্ত গড়ান যা বেশি দূর পিছিয়ে যায় না, তারপর চলনটি আবার শুরু।

### যে একটি কাজ আপনাকে করতেই হবে

এই অংশটিই বিষয়টিকে কৌতূহল থেকে পদ্ধতিতে রূপান্তরিত করে।

**বিরতির ভেতর দিয়ে ধরে রাখার আগে লিখে ফেলুন কোন দামে আপনি স্বীকার করবেন যে আপনি ভুল ছিলেন।**

সাধারণত তা বিরতিটি যত নিচে নেমেছিল তার একটু নিচে। ধরুন বিরতিটি ৪৮.৭০ টাকায় নেমেছিল। আপনার রেখা ৪৮.৪৫ টাকা — সিকি টাকা নিচে।

৪৮.৪৫ টাকার ওপরে আপনি একটি বিরতিতে আছেন এবং ধরে রাখেন। নিচে আপনি অন্য কিছুতে আছেন এবং বেরিয়ে যান। **টাকা ঝুঁকিতে পড়ার আগেই আপনি এটি ঠিক করেছেন, আর কেবল তখনই যে কেউ কোনো কিছু বিবেচনা করে ঠিক করতে পারে।**

ঐ সংখ্যার একটি নাম আছে: **প্যাটার্ন ইনভ্যালিডেশন লেভেল**। এটি ভবিষ্যদ্বাণী নয়। এটি একটি সংজ্ঞা। এটি বলে: *আমি যা দেখছি বলে ভাবছি — এই দামটি প্রমাণ করে যে আমি তা দেখছি না।*

### আর একটি বিষয় ঢাকার জন্য বিশেষ

ডিএসই চার্টের কোনো গ্যাপ পড়ার আগে — সেই লাফ যেখানে দাম গতকালের ক্লোজ থেকে অনেক দূরে খোলে — **দেখে নিন শেয়ারটি সদ্য এক্স-ডিভিডেন্ড বা এক্স-বোনাস হয়েছে কি না।**

হয়ে থাকলে গ্যাপটি পাটিগণিত, মতামত নয়। শেয়ারহোল্ডাররা কিছু পেয়েছেন বলে এক্সচেঞ্জ দাম সমন্বয় করেছে। এটি হুবহু নাটকীয় ভাঙনের মতো দেখায় আর কিছুই বোঝায় না।

রেকর্ড-ডেট ক্যালেন্ডার দেখতে ত্রিশ সেকেন্ড লাগে। না দেখা মানুষের অনেক টাকা খেয়েছে।`,
    },

    example: {
      en: `### A rising three methods, in formation, on a DSE mid-cap

Take a liquid DSE industrial — call it **NOVOTEX**, a generic textile mid-cap, so nobody mistakes an illustration for a recommendation. All figures are illustrative and shaped to be realistic, not historical.

**The impulse leg.** Over roughly two weeks the stock moves from BDT 42.00 to BDT 52.00. The final session of the advance is a long white candle: open 46.00, high 52.00, low 45.80, close 51.80, on about 2.4 million shares — several times the stock's quiet-period average.

$$\\text{Impulse height} = 52.00 - 42.00 = \\text{BDT } 10.00$$

**Then it stops.** Five sessions of drift:

| Bar | Open | High | Low | Close | Volume (000) | Dir |
|---|---|---|---|---|---|---|
| 1 | 51.60 | 51.90 | 50.40 | 50.60 | 1,850 | ▼ |
| 2 | 50.50 | 50.80 | 49.30 | 49.60 | 1,400 | ▼ |
| 3 | 49.70 | 50.10 | 48.80 | 49.10 | 1,150 | ▼ |
| 4 | 49.20 | 49.60 | 48.70 | 49.40 | 900 | ▲ |
| 5 | 49.50 | 50.30 | 49.20 | 50.10 | 1,100 | ▲ |

Three black candles, then two small white ones. Every bar sits inside the impulse candle's 45.80–52.00 range. **Structurally this is a rising three methods in formation** — and note what "in formation" means: the confirming long white candle that completes the textbook pattern has not happened yet.

**That is not a defect of the example. That is the situation you are always in.** By the time the confirming candle exists, the move it confirms has already begun without you.

### Reading the pause

**Depth.** The deepest point of the consolidation is bar 4's low of 48.70.

$$\\text{Retracement} = \\frac{52.00 - 48.70}{10.00} \\times 100 = 33.0\\%$$

Against the reference levels — 38.2% sits at 48.18, 50% at 47.00, 61.8% at 45.82 — the pause has not even reached the shallowest of them. **This is a shallow give-back and it is consistent with continuation.**

**Volume.** Average volume across the five bars is 1,280 thousand against 2,400 thousand on the impulse day — the pause is transacting at **0.53× the impulse.** The fitted slope across the five bars is **−200 thousand shares per bar**, or −15.6% of the mean per bar.

Volume is falling steadily through the drift. Supply dried up; it did not arrive.

### The number that matters

The pattern's lowest point is 48.70. Put the line a quarter-taka below it:

$$\\text{Invalidation} = 48.70 - 0.25 = \\text{BDT } 48.45$$

**Everything else in this trade is downstream of that number.**

Entry is a buy-stop above the structure. The structure's ceiling is the impulse high of 52.00 (higher than the consolidation high of 51.90), so the trigger is 52.05.

| Item | Value |
|---|---|
| Entry (buy-stop) | BDT 52.05 |
| Invalidation / stop | BDT 48.45 |
| **Risk per share** | **BDT 3.60** |
| Measured-move target (52.00 + 10.00) | BDT 62.00 |
| Reward per share | BDT 9.95 |
| **Reward : Risk** | **2.76 : 1** |

On a BDT 500,000 account risking 1% — BDT 5,000 — the size is $\\lfloor 5{,}000 / 3.60 \\rfloor = 1{,}388$ shares, committing BDT 72,245 of capital.

**Notice that the pattern did not tell you how much to buy. The invalidation level did.** That is the practical reason to compute it first: it is the only input that converts a chart opinion into a position size.

### Now change one thing

Same impulse, same 42.00 → 52.00 leg. Different pause:

| Bar | Open | High | Low | Close | Volume (000) | Dir |
|---|---|---|---|---|---|---|
| 1 | 51.60 | 51.80 | 50.10 | 50.20 | 2,100 | ▼ |
| 2 | 50.10 | 50.40 | 48.20 | 48.40 | 2,600 | ▼ |
| 3 | 48.50 | 48.90 | 46.60 | 46.80 | 3,050 | ▼ |
| 4 | 46.90 | 47.30 | 45.40 | 45.60 | 3,400 | ▼ |
| 5 | 44.90 | 46.10 | 44.80 | 45.40 | 3,100 | ▲ |

$$\\text{Retracement} = \\frac{52.00 - 44.80}{10.00} \\times 100 = 72.0\\%$$

Past 61.8%. **The continuation reading is void.** Volume slope is **+280 thousand per bar** — rising, not falling. The market is doing more work, not less.

**And here is the trap.** Compute the intuitive metric — average volume on down bars divided by average volume on up bars:

$$\\frac{(2{,}100 + 2{,}600 + 3{,}050 + 3{,}400)/4}{3{,}100} = \\frac{2{,}787.5}{3{,}100} = 0.90$$

That ratio is **below 1**. Read naively, it says "up bars carry more volume — healthy." It is wrong. The single up bar is a heavy-volume failed bounce, which is the opposite of reassuring.

**The down/up volume ratio is a bad metric and this is why.** The slope is the one that works, because it measures whether the market is calming down or heating up, which is the actual question.

### What the DSE would add

Before either reading is worth anything, two checks.

**Record date.** If NOVOTEX went ex-bonus during those five sessions, the drift is partly mechanical and the retracement percentage is meaningless until you use adjusted prices. A 10% stock dividend alone would account for roughly a 9% price adjustment — most of a 33% retracement on a BDT 10 leg.

**Circuit limits.** If bar 3 or bar 4 printed at the daily limit, the low you are measuring is not where sellers stopped. It is where the exchange stopped them. Your invalidation level is then sitting under an artificial floor, and it will be violated on the open of whatever session the pressure finally clears.

Neither check tells you what to do. Both tell you whether the chart in front of you is the chart the market actually drew.`,
      bn: `### ডিএসই-র একটি মিড-ক্যাপে গঠনরত রাইজিং থ্রি মেথডস

ডিএসই-র একটি তরল শিল্প শেয়ার নিন — একে বলি **NOVOTEX**, একটি সাধারণ টেক্সটাইল মিড-ক্যাপ, যাতে কেউ উদাহরণকে সুপারিশ ভেবে না বসেন। সব সংখ্যা উদাহরণমূলক ও বাস্তবসম্মত আকারে সাজানো, ঐতিহাসিক নয়।

**ইমপালস লেগ।** প্রায় দুই সপ্তাহে শেয়ারটি ৪২.০০ টাকা থেকে ৫২.০০ টাকায় ওঠে। উত্থানের শেষ সেশনটি একটি লম্বা সাদা ক্যান্ডেল: ওপেন ৪৬.০০, হাই ৫২.০০, লো ৪৫.৮০, ক্লোজ ৫১.৮০, প্রায় ২৪ লাখ শেয়ারে — শেয়ারটির শান্ত সময়ের গড়ের কয়েক গুণ।

$$\\text{ইমপালস উচ্চতা} = 52.00 - 42.00 = \\text{BDT } 10.00$$

**তারপর থেমে যায়।** পাঁচ সেশনের গড়ান:

| বার | ওপেন | হাই | লো | ক্লোজ | ভলিউম (হাজার) | দিক |
|---|---|---|---|---|---|---|
| ১ | ৫১.৬০ | ৫১.৯০ | ৫০.৪০ | ৫০.৬০ | ১,৮৫০ | ▼ |
| ২ | ৫০.৫০ | ৫০.৮০ | ৪৯.৩০ | ৪৯.৬০ | ১,৪০০ | ▼ |
| ৩ | ৪৯.৭০ | ৫০.১০ | ৪৮.৮০ | ৪৯.১০ | ১,১৫০ | ▼ |
| ৪ | ৪৯.২০ | ৪৯.৬০ | ৪৮.৭০ | ৪৯.৪০ | ৯০০ | ▲ |
| ৫ | ৪৯.৫০ | ৫০.৩০ | ৪৯.২০ | ৫০.১০ | ১,১০০ | ▲ |

তিনটি কালো ক্যান্ডেল, তারপর দুটি ছোট সাদা। প্রতিটি বার ইমপালস ক্যান্ডেলের ৪৫.৮০–৫২.০০ রেঞ্জের ভেতরে। **কাঠামোগতভাবে এটি গঠনরত একটি রাইজিং থ্রি মেথডস** — আর "গঠনরত" মানে কী তা লক্ষ করুন: পাঠ্যবইয়ের প্যাটার্ন সম্পূর্ণ করা নিশ্চিতকারী লম্বা সাদা ক্যান্ডেলটি এখনো ঘটেনি।

**এটি উদাহরণের ত্রুটি নয়। এটিই সেই পরিস্থিতি যেখানে আপনি সবসময় থাকেন।** নিশ্চিতকারী ক্যান্ডেল যখন হাজির হয়, ততক্ষণে সে যে চলন নিশ্চিত করছে তা আপনাকে ছাড়াই শুরু হয়ে গেছে।

### বিরতিটি পড়া

**গভীরতা।** কনসলিডেশনের গভীরতম বিন্দু বার ৪-এর লো ৪৮.৭০।

$$\\text{রিট্রেসমেন্ট} = \\frac{52.00 - 48.70}{10.00} \\times 100 = 33.0\\%$$

রেফারেন্স স্তরগুলোর বিপরীতে — ৩৮.২% আছে ৪৮.১৮-এ, ৫০% ৪৭.০০-এ, ৬১.৮% ৪৫.৮২-এ — বিরতিটি এদের সবচেয়ে অগভীরটিতেও পৌঁছায়নি। **এটি একটি অগভীর ফেরত এবং কন্টিনিউয়েশনের সঙ্গে সামঞ্জস্যপূর্ণ।**

**ভলিউম।** পাঁচ বারের গড় ভলিউম ১,২৮০ হাজার, ইমপালস দিনের ২,৪০০ হাজারের বিপরীতে — বিরতিটি লেনদেন করছে **ইমপালসের ০.৫৩ গুণে।** পাঁচ বারজুড়ে ফিট করা ঢাল **বারপ্রতি −২০০ হাজার শেয়ার**, বা গড়ের বারপ্রতি −১৫.৬%।

গড়ানের ভেতর দিয়ে ভলিউম ধারাবাহিকভাবে কমছে। সরবরাহ শুকিয়েছে; আসেনি।

### যে সংখ্যাটি গুরুত্বপূর্ণ

প্যাটার্নের সর্বনিম্ন বিন্দু ৪৮.৭০। তার সিকি টাকা নিচে রেখাটি টানুন:

$$\\text{ইনভ্যালিডেশন} = 48.70 - 0.25 = \\text{BDT } 48.45$$

**এই ট্রেডের বাকি সবকিছু ঐ সংখ্যার অধীন।**

এন্ট্রি হলো কাঠামোর ওপরে একটি বাই-স্টপ। কাঠামোর ছাদ ইমপালস হাই ৫২.০০ (কনসলিডেশন হাই ৫১.৯০-এর চেয়ে উঁচু), তাই ট্রিগার ৫২.০৫।

| বিষয় | মান |
|---|---|
| এন্ট্রি (বাই-স্টপ) | ৫২.০৫ টাকা |
| ইনভ্যালিডেশন / স্টপ | ৪৮.৪৫ টাকা |
| **শেয়ারপ্রতি ঝুঁকি** | **৩.৬০ টাকা** |
| মেজার্ড-মুভ লক্ষ্য (৫২.০০ + ১০.০০) | ৬২.০০ টাকা |
| শেয়ারপ্রতি পুরস্কার | ৯.৯৫ টাকা |
| **পুরস্কার : ঝুঁকি** | **২.৭৬ : ১** |

৫,০০,০০০ টাকার হিসাবে ১% — ৫,০০০ টাকা — ঝুঁকি নিলে আকার হয় $\\lfloor 5{,}000 / 3.60 \\rfloor = 1{,}388$ শেয়ার, যাতে ৭২,২৪৫ টাকা মূলধন নিয়োজিত হয়।

**লক্ষ করুন প্যাটার্ন আপনাকে বলেনি কত কিনতে হবে। ইনভ্যালিডেশন লেভেল বলেছে।** এটিই আগে গণনা করার ব্যবহারিক কারণ: এটিই একমাত্র উপাদান যা একটি চার্ট-মতামতকে পজিশনের আকারে রূপান্তরিত করে।

### এবার একটি জিনিস বদলান

একই ইমপালস, একই ৪২.০০ → ৫২.০০ লেগ। ভিন্ন বিরতি:

| বার | ওপেন | হাই | লো | ক্লোজ | ভলিউম (হাজার) | দিক |
|---|---|---|---|---|---|---|
| ১ | ৫১.৬০ | ৫১.৮০ | ৫০.১০ | ৫০.২০ | ২,১০০ | ▼ |
| ২ | ৫০.১০ | ৫০.৪০ | ৪৮.২০ | ৪৮.৪০ | ২,৬০০ | ▼ |
| ৩ | ৪৮.৫০ | ৪৮.৯০ | ৪৬.৬০ | ৪৬.৮০ | ৩,০৫০ | ▼ |
| ৪ | ৪৬.৯০ | ৪৭.৩০ | ৪৫.৪০ | ৪৫.৬০ | ৩,৪০০ | ▼ |
| ৫ | ৪৪.৯০ | ৪৬.১০ | ৪৪.৮০ | ৪৫.৪০ | ৩,১০০ | ▲ |

$$\\text{রিট্রেসমেন্ট} = \\frac{52.00 - 44.80}{10.00} \\times 100 = 72.0\\%$$

৬১.৮% ছাড়িয়ে। **কন্টিনিউয়েশন পাঠটি বাতিল।** ভলিউমের ঢাল **বারপ্রতি +২৮০ হাজার** — বাড়ছে, কমছে না। বাজার কম নয়, বেশি পরিশ্রম করছে।

**আর এখানেই ফাঁদ।** স্বজ্ঞাত মেট্রিকটি গণনা করুন — নিচের বারের গড় ভলিউম ভাগ উপরের বারের গড় ভলিউম:

$$\\frac{(2{,}100 + 2{,}600 + 3{,}050 + 3{,}400)/4}{3{,}100} = \\frac{2{,}787.5}{3{,}100} = 0.90$$

অনুপাতটি **১-এর নিচে**। সরলভাবে পড়লে বলে "উপরের বারে বেশি ভলিউম — সুস্থ।" এটি ভুল। একমাত্র উপরের বারটি ভারী ভলিউমের একটি ব্যর্থ বাউন্স, যা আশ্বস্ত হওয়ার ঠিক উল্টো।

**নিচ/উপর ভলিউম অনুপাত একটি খারাপ মেট্রিক, আর এ কারণেই।** ঢালটিই কাজ করে, কারণ তা মাপে বাজার শান্ত হচ্ছে না উত্তপ্ত হচ্ছে — যা আসল প্রশ্ন।

### ডিএসই যা যোগ করবে

কোনো পাঠের কিছু মূল্য পাওয়ার আগে দুটি যাচাই।

**রেকর্ড ডেট।** ঐ পাঁচ সেশনে NOVOTEX এক্স-বোনাস হয়ে থাকলে গড়ানটি আংশিকভাবে যান্ত্রিক এবং সমন্বিত দাম ব্যবহার না করা পর্যন্ত রিট্রেসমেন্ট শতাংশটি অর্থহীন। কেবল ১০% স্টক ডিভিডেন্ডই প্রায় ৯% দাম সমন্বয়ের কারণ হবে — ১০ টাকার লেগে ৩৩% রিট্রেসমেন্টের বেশিরভাগ।

**সার্কিট লিমিট।** বার ৩ বা বার ৪ যদি দৈনিক সীমায় ছাপা হয়ে থাকে, আপনি যে লো মাপছেন তা বিক্রেতারা যেখানে থেমেছেন তা নয়। তা যেখানে এক্সচেঞ্জ তাঁদের থামিয়েছে। তখন আপনার ইনভ্যালিডেশন লেভেল একটি কৃত্রিম মেঝের নিচে বসে আছে, আর চাপ যে সেশনে অবশেষে ছাড়া পাবে তার ওপেনেই তা লঙ্ঘিত হবে।

কোনো যাচাই আপনাকে কী করতে হবে বলে না। দুটোই বলে আপনার সামনের চার্টটি বাজার যে চার্ট এঁকেছে সেটিই কি না।`,
    },

    formula: {
      en: `A continuation pattern is defined by **two measurements of the pause and one price that voids it.** Everything else is naming.

### 1. Impulse and retracement

$$\\text{Impulse height} \\quad I = P_{\\text{end}} - P_{\\text{start}}$$

$$\\text{Retracement depth} \\quad \\delta = \\frac{P_{\\text{end}} - L_{\\text{pause}}}{I} \\times 100$$

where $L_{\\text{pause}} = \\min(L_1 \\ldots L_n)$ across the consolidation bars.

**Reference levels**, in the order they matter:

$$R_{38.2} = P_{\\text{end}} - 0.382\\,I, \\qquad R_{50} = P_{\\text{end}} - 0.5\\,I, \\qquad R_{61.8} = P_{\\text{end}} - 0.618\\,I$$

**Read $\\delta$ as a band, not a level.** Below 38.2% is a shallow give-back consistent with continuation. Between 38.2% and 61.8% the pattern is intact but unremarkable. **Beyond 61.8% the continuation reading is void** — not weakened, void — because a move that surrenders nearly two-thirds of its gain was not pausing.

I should be honest that these three numbers have no theoretical standing. They are conventions, widely enough used that other participants act on them, which is a self-fulfilling justification rather than a mathematical one. **Their value is that they are fixed in advance and identical for everybody, not that 0.618 is special.**

### 2. Volume behaviour — the slope, not the ratio

Fit an ordinary least-squares line to volume against bar number:

$$\\beta = \\frac{\\sum_{t=1}^{n}(t - \\bar{t})(V_t - \\bar{V})}{\\sum_{t=1}^{n}(t - \\bar{t})^2}, \\qquad \\beta^{*} = \\frac{\\beta}{\\bar{V}} \\times 100 \\;\\;(\\%\\text{ per bar})$$

$$\\text{Pause ratio} \\quad \\phi = \\frac{\\bar{V}_{\\text{pause}}}{\\bar{V}_{\\text{impulse}}}$$

**A healthy pause has $\\beta < 0$ and $\\phi$ below roughly 0.6.** Supply dried up rather than arrived. A rising $\\beta$ during a "consolidation" means the market is doing *more* work while going nowhere, which is distribution wearing the costume of a pause.

**And the metric to avoid:**

$$\\text{Down/Up ratio} \\quad \\omega = \\frac{\\bar{V}_{\\text{down bars}}}{\\bar{V}_{\\text{up bars}}}$$

$\\omega$ is intuitive and it does not work. **It is confounded with time order**: in a typical pause the down bars come first, and since volume decays through the drift, $\\omega$ ends up measuring *when* the bars occurred rather than *who* was transacting. §29.5 shows it returning the wrong sign on both the healthy and the failed case. Compute it if you like, but do not let it vote.

### 3. The invalidation price, and everything downstream of it

$$X = L_{\\text{pause}} - \\text{buffer}$$

$$E = \\max(P_{\\text{end}},\\, H_{\\text{pause}}) + \\text{tick}, \\qquad T = \\max(P_{\\text{end}},\\, H_{\\text{pause}}) + I$$

$T$ is the **measured move**: the assumption that the second leg travels the same distance as the first. It is an assumption, not a projection, and it is the weakest link in the chain — but it is at least a stated one, which is more than "sell into strength" offers.

$$R{:}R = \\frac{T - E}{E - X}, \\qquad p^{*} = \\frac{1}{1 + R{:}R}, \\qquad N = \\left\\lfloor \\frac{\\text{Equity} \\times r}{E - X} \\right\\rfloor$$

**Note the ordering, because it is the chapter's practical claim.** The invalidation level is computed first and the position size falls out of it. **The pattern never tells you how much to buy; the price at which you would be wrong does.**

### 4. Gap classification — and what cannot be known in real time

| Gap | Where it sits | What it implies |
|---|---|---|
| Breakaway | At the start, out of a base | New information; trend beginning |
| Runaway (measuring) | Mid-trend, roughly halfway | Continuation; target $\\approx$ gap price $+$ distance travelled so far |
| Exhaustion | Late, after an extended run | Trend ending |

**A runaway gap and an exhaustion gap are identical on the day they print.** Anyone who tells you they distinguished them in real time is describing a memory, not a method. The only honest procedure is to treat every mid-trend gap as a runaway, place the invalidation below it, and let the subsequent sessions reclassify it for you.

### 5. The DSE adjustment that must precede all of the above

$$P_{\\text{adj}} = \\frac{P - D_{\\text{cash}}}{1 + b}$$

where $D_{\\text{cash}}$ is the cash dividend per share and $b$ the bonus ratio.

**A 10% stock dividend mechanically reduces the price by $1 - 1/1.1 = 9.09\\%$ and has nothing to do with sentiment.** On a BDT 10 impulse leg that is most of a 33% retracement manufactured by the registrar. **Check the record-date calendar before computing $\\delta$ on anything** — the retracement percentage is meaningless until the prices are adjusted, and this single habit will save more money than any pattern in this chapter earns.`,
      bn: `একটি কন্টিনিউয়েশন প্যাটার্ন সংজ্ঞায়িত হয় **বিরতির দুটি পরিমাপ ও একটি দাম দিয়ে যা একে বাতিল করে।** বাকি সব নামকরণ।

### ১. ইমপালস ও রিট্রেসমেন্ট

$$\\text{ইমপালস উচ্চতা} \\quad I = P_{\\text{end}} - P_{\\text{start}}$$

$$\\text{রিট্রেসমেন্ট গভীরতা} \\quad \\delta = \\frac{P_{\\text{end}} - L_{\\text{pause}}}{I} \\times 100$$

যেখানে কনসলিডেশন বারজুড়ে $L_{\\text{pause}} = \\min(L_1 \\ldots L_n)$।

**রেফারেন্স স্তর**, গুরুত্বের ক্রমে:

$$R_{38.2} = P_{\\text{end}} - 0.382\\,I, \\qquad R_{50} = P_{\\text{end}} - 0.5\\,I, \\qquad R_{61.8} = P_{\\text{end}} - 0.618\\,I$$

**$\\delta$-কে একটি স্তর নয়, একটি ব্যান্ড হিসেবে পড়ুন।** ৩৮.২%-এর নিচে একটি অগভীর ফেরত, যা ধারাবাহিকতার সঙ্গে সঙ্গতিপূর্ণ। ৩৮.২% ও ৬১.৮%-এর মাঝে প্যাটার্ন অক্ষত কিন্তু উল্লেখযোগ্য নয়। **৬১.৮%-এর পরে ধারাবাহিকতার পাঠ বাতিল** — দুর্বল নয়, বাতিল — কারণ যে চলাচল তার লাভের প্রায় দুই-তৃতীয়াংশ ছেড়ে দেয় সে বিরতি নিচ্ছিল না।

সৎভাবে বলা উচিত এই তিনটি সংখ্যার কোনো তাত্ত্বিক ভিত্তি নেই। এগুলো প্রথা, যথেষ্ট ব্যাপকভাবে ব্যবহৃত যে অন্য অংশগ্রহণকারীরা এতে কাজ করেন, যা গাণিতিক নয় বরং স্ব-পূরণকারী যুক্তি। **এদের মূল্য এই যে এগুলো আগেই স্থির ও সবার জন্য অভিন্ন, ০.৬১৮ বিশেষ কিছু বলে নয়।**

### ২. ভলিউমের আচরণ — ঢাল, অনুপাত নয়

বার নম্বরের বিপরীতে ভলিউমে একটি সাধারণ ন্যূনতম-বর্গ রেখা বসান:

$$\\beta = \\frac{\\sum_{t=1}^{n}(t - \\bar{t})(V_t - \\bar{V})}{\\sum_{t=1}^{n}(t - \\bar{t})^2}, \\qquad \\beta^{*} = \\frac{\\beta}{\\bar{V}} \\times 100 \\;\\;(\\%\\text{ প্রতি বার})$$

$$\\text{বিরতি অনুপাত} \\quad \\phi = \\frac{\\bar{V}_{\\text{pause}}}{\\bar{V}_{\\text{impulse}}}$$

**একটি সুস্থ বিরতিতে $\\beta < 0$ এবং $\\phi$ মোটামুটি ০.৬-এর নিচে।** সরবরাহ শুকিয়েছে, আসেনি। "কনসলিডেশন"-এর সময় বাড়ন্ত $\\beta$ মানে বাজার কোথাও না গিয়ে *বেশি* কাজ করছে, যা বিরতির পোশাক পরা বিতরণ।

**আর যে পরিমাপটি এড়াতে হবে:**

$$\\text{নিচ/উপর অনুপাত} \\quad \\omega = \\frac{\\bar{V}_{\\text{নিচের বার}}}{\\bar{V}_{\\text{উপরের বার}}}$$

$\\omega$ স্বজ্ঞাত আর তা কাজ করে না। **এটি সময়ক্রমের সঙ্গে জড়িয়ে যায়**: সাধারণ বিরতিতে নিচের বারগুলো আগে আসে, আর যেহেতু গড়ানের মধ্যে ভলিউম ক্ষয় হয়, $\\omega$ শেষ পর্যন্ত *কে* লেনদেন করছিলেন তা নয়, বারগুলো *কখন* ঘটেছে তা মাপে। §২৯.৫ দেখায় এটি সুস্থ ও ব্যর্থ দুটি ক্ষেত্রেই ভুল চিহ্ন ফেরত দিচ্ছে। ইচ্ছা হলে গণনা করুন, কিন্তু একে ভোট দিতে দেবেন না।

### ৩. ইনভ্যালিডেশন দাম, ও তার নিচের সবকিছু

$$X = L_{\\text{pause}} - \\text{বাফার}$$

$$E = \\max(P_{\\text{end}},\\, H_{\\text{pause}}) + \\text{টিক}, \\qquad T = \\max(P_{\\text{end}},\\, H_{\\text{pause}}) + I$$

$T$ হলো **মেজার্ড মুভ**: এই অনুমান যে দ্বিতীয় ধাপটি প্রথমটির সমান দূরত্ব যাবে। এটি একটি অনুমান, প্রক্ষেপণ নয়, আর শৃঙ্খলের এটিই দুর্বলতম কড়ি — কিন্তু অন্তত এটি একটি ঘোষিত অনুমান, যা "শক্তিতে বিক্রি করুন"-এর চেয়ে বেশি।

$$R{:}R = \\frac{T - E}{E - X}, \\qquad p^{*} = \\frac{1}{1 + R{:}R}, \\qquad N = \\left\\lfloor \\frac{\\text{ইকুইটি} \\times r}{E - X} \\right\\rfloor$$

**ক্রমটি লক্ষ করুন, কারণ এটিই অধ্যায়ের ব্যবহারিক দাবি।** ইনভ্যালিডেশন স্তর আগে গণিত হয় আর পজিশনের আকার তা থেকে বেরিয়ে আসে। **প্যাটার্ন কখনো বলে না কত কিনতে হবে; যে দামে আপনি ভুল হতেন সেটিই বলে।**

### ৪. গ্যাপ শ্রেণিবিভাজন — আর বাস্তব সময়ে যা জানা যায় না

| গ্যাপ | কোথায় বসে | কী বোঝায় |
|---|---|---|
| ব্রেকঅ্যাওয়ে | শুরুতে, একটি ভিত্তি থেকে | নতুন তথ্য; ট্রেন্ডের সূচনা |
| রানঅ্যাওয়ে (মেজারিং) | ট্রেন্ডের মাঝে, মোটামুটি অর্ধেকে | ধারাবাহিকতা; লক্ষ্য $\\approx$ গ্যাপ দাম $+$ এ পর্যন্ত অতিক্রান্ত দূরত্ব |
| এক্সহসশন | শেষে, একটি দীর্ঘ দৌড়ের পর | ট্রেন্ডের সমাপ্তি |

**যেদিন ছাপা হয় সেদিন রানঅ্যাওয়ে ও এক্সহসশন গ্যাপ অভিন্ন।** যিনি বলেন তিনি বাস্তব সময়ে এদের আলাদা করেছেন, তিনি একটি পদ্ধতি নয়, একটি স্মৃতি বর্ণনা করছেন। একমাত্র সৎ প্রক্রিয়া হলো ট্রেন্ড-মধ্যবর্তী প্রতিটি গ্যাপকে রানঅ্যাওয়ে ধরা, তার নিচে ইনভ্যালিডেশন বসানো, আর পরবর্তী সেশনগুলোকে আপনার হয়ে একে পুনঃশ্রেণিবদ্ধ করতে দেওয়া।

### ৫. যে ডিএসই সমন্বয় ওপরের সবকিছুর আগে আসতে হবে

$$P_{\\text{adj}} = \\frac{P - D_{\\text{cash}}}{1 + b}$$

যেখানে $D_{\\text{cash}}$ শেয়ারপ্রতি নগদ লভ্যাংশ ও $b$ বোনাস অনুপাত।

**১০% স্টক ডিভিডেন্ড যান্ত্রিকভাবে দাম $1 - 1/1.1 = 9.09\\%$ কমায় এবং মনোভাবের সঙ্গে এর কোনো সম্পর্ক নেই।** ১০ টাকার একটি ইমপালস লেগে তা রেজিস্ট্রারের তৈরি ৩৩% রিট্রেসমেন্টের বেশিরভাগ। **যেকোনো কিছুতে $\\delta$ গণনার আগে রেকর্ড-ডেট ক্যালেন্ডার দেখুন** — দাম সমন্বিত না হওয়া পর্যন্ত রিট্রেসমেন্ট শতাংশ অর্থহীন, আর এই একটি অভ্যাস এই অধ্যায়ের যেকোনো প্যাটার্ন যা আয় করাবে তার চেয়ে বেশি টাকা বাঁচাবে।`,
    },

    manual: {
      en: `**Scenario.** The NOVOTEX rising three methods from §29.5. Impulse 42.00 → 52.00, five consolidation bars, BDT 500,000 account, 1% risk per trade, BDT 0.25 stop buffer.

**Step 0 — Check the record-date calendar. Before anything else.**

If NOVOTEX went ex-bonus during the five sessions, every number below is wrong. A 10% stock dividend alone adjusts the price by

$$1 - \\frac{1}{1.10} = 9.09\\%$$

which on a BDT 52 share is BDT 4.73 — **more than the entire 3.30 taka drift you are about to interpret as a retracement.** For this worked example there is no record date in the window, so the drift is tradeable information. **Confirm that before Step 1, every time.**

**Step 1 — Impulse height.**
$$I = 52.00 - 42.00 = 10.00$$

**Step 2 — The consolidation extremes.**
$$L_{\\text{pause}} = \\min(50.40,\\, 49.30,\\, 48.80,\\, 48.70,\\, 49.20) = 48.70$$
$$H_{\\text{pause}} = \\max(51.90,\\, 50.80,\\, 50.10,\\, 49.60,\\, 50.30) = 51.90$$

Note $H_{\\text{pause}} = 51.90$ is **below** the impulse high of 52.00. The structure's true ceiling is the impulse high, and Step 8 uses the larger of the two.

**Step 3 — Retracement depth.**
$$\\delta = \\frac{52.00 - 48.70}{10.00} \\times 100 = 33.0\\%$$

**Step 4 — Compare against the reference levels.**
$$R_{38.2} = 52.00 - 3.82 = 48.18 \\qquad R_{50} = 47.00 \\qquad R_{61.8} = 45.82$$

$$48.70 > 48.18 \\;\\Rightarrow\\; \\text{the pause has not reached even the shallowest level}$$

**Shallow give-back. Consistent with continuation.**

**Step 5 — Volume level.**
$$\\bar{V}_{\\text{pause}} = \\frac{1{,}850 + 1{,}400 + 1{,}150 + 900 + 1{,}100}{5} = \\frac{6{,}400}{5} = 1{,}280$$
$$\\phi = \\frac{1{,}280}{2{,}400} = 0.533$$

**Step 6 — Volume slope, which is the test that matters.** With $\\bar{t} = 3$ and $\\bar{V} = 1{,}280$:

$$\\sum (t-\\bar{t})(V_t-\\bar{V}) = (-2)(570) + (-1)(120) + (0)(-130) + (1)(-380) + (2)(-180) = -2{,}000$$
$$\\sum (t-\\bar{t})^2 = 4+1+0+1+4 = 10$$
$$\\beta = \\frac{-2{,}000}{10} = -200 \\text{ thousand shares per bar}, \\qquad \\beta^{*} = \\frac{-200}{1{,}280} \\times 100 = -15.6\\%$$

**Negative and steep. Supply dried up; it did not arrive.**

**Step 7 — Now compute the metric you are being warned about, so you can see it fail.**

$$\\omega = \\frac{(1{,}850 + 1{,}400 + 1{,}150)/3}{(900 + 1{,}100)/2} = \\frac{1{,}466.7}{1{,}000} = 1.47$$

**Read naively, $\\omega = 1.47$ says down bars carried half again the volume of up bars — a distribution warning.** That reading is wrong, and the slope tells you why: the down bars came *first*, when volume was still elevated from the impulse. **$\\omega$ has measured the passage of time and mislabelled it as selling pressure.**

Hold that result. Step 12 returns to it.

**Step 8 — The invalidation price. Compute this before the entry, not after.**
$$X = 48.70 - 0.25 = 48.45$$

**Step 9 — Entry and target.**
$$E = \\max(52.00,\\, 51.90) + 0.05 = 52.05$$
$$T = 52.00 + 10.00 = 62.00$$

**Step 10 — The arithmetic.**
$$\\text{Risk} = 52.05 - 48.45 = 3.60 \\qquad \\text{Reward} = 62.00 - 52.05 = 9.95$$
$$R{:}R = \\frac{9.95}{3.60} = 2.764 \\qquad p^{*} = \\frac{1}{1 + 2.764} = 0.2657 = 26.57\\%$$

**Compare that with Chapter 28's fully confirmed morning star, which demanded 43.75%.** The difference is structural, not luck: **a continuation pattern's invalidation sits close to the entry** — the pause low is a few taka below the breakout — whereas a reversal pattern's invalidation is two or three sessions behind it. **Continuation setups are arithmetically cheaper to be wrong about, and that is the strongest argument for trading them.**

**Step 11 — Position size, which falls out of the stop and nothing else.**
$$\\text{Risk budget} = 500{,}000 \\times 1\\% = 5{,}000$$
$$N = \\left\\lfloor \\frac{5{,}000}{3.60} \\right\\rfloor = 1{,}388 \\text{ shares}$$
$$\\text{Capital committed} = 1{,}388 \\times 52.05 = \\text{BDT } 72{,}245$$

**Risking 1% of equity commits 14.4% of it.** Those are different numbers and conflating them is how accounts get quietly over-concentrated.

**Step 12 — Run the failed pause through the same steps, and watch $\\omega$ invert.**

$$\\delta = \\frac{52.00 - 44.80}{10.00} \\times 100 = 72.0\\% \\;>\\; 61.8\\% \\;\\Rightarrow\\; \\textbf{void}$$
$$\\beta = +280 \\text{ per bar} \\;\\Rightarrow\\; \\text{the market is doing more work, not less}$$
$$\\omega = \\frac{(2{,}100+2{,}600+3{,}050+3{,}400)/4}{3{,}100} = \\frac{2{,}787.5}{3{,}100} = 0.90$$

| | Healthy pause | Failed pause |
|---|---|---|
| $\\delta$ | 33.0% — shallow | 72.0% — void |
| $\\beta$ | **−200** (calming) | **+280** (heating) |
| $\\omega$ | **1.47** — reads *unhealthy* | **0.90** — reads *healthy* |
| Truth | Continuation | Failure |

**$\\omega$ returned the wrong sign on both cases.** Two examples are an illustration and not evidence, and I would not claim otherwise — but the mechanism is clear enough to act on: **the ratio is confounded with bar ordering, while the slope measures the thing you actually want, which is whether the market is calming down or heating up.**

**Step 13 — The verdict, and what it is not.**

$$\\delta = 33.0\\% \\le 38.2\\% \\;\\land\\; \\beta < 0 \\;\\Rightarrow\\; \\textbf{HOLD — healthy pause, stop at invalidation}$$

**This is not a forecast that the stock will reach 62.00.** It is three separate statements: the pause is shallow, the pause is quiet, and below 48.45 I am wrong and will be out for a known loss of BDT 5,000. **The confirming long white candle that completes the textbook pattern has not happened, and by the time it does the move will have started without you** — which is the permanent condition of continuation trading and the reason the invalidation level, rather than the pattern, is what you actually own.`,
      bn: `**পরিস্থিতি।** §২৯.৫-এর NOVOTEX রাইজিং থ্রি মেথডস। ইমপালস ৪২.০০ → ৫২.০০, পাঁচটি কনসলিডেশন বার, ৫,০০,০০০ টাকার হিসাব, প্রতি ট্রেডে ১% ঝুঁকি, ০.২৫ টাকা স্টপ বাফার।

**ধাপ ০ — রেকর্ড-ডেট ক্যালেন্ডার দেখুন। সবকিছুর আগে।**

পাঁচটি সেশনের মধ্যে NOVOTEX এক্স-বোনাস হয়ে থাকলে নিচের প্রতিটি সংখ্যা ভুল। কেবল একটি ১০% স্টক ডিভিডেন্ডই দাম সমন্বয় করে

$$1 - \\frac{1}{1.10} = 9.09\\%$$

যা ৫২ টাকার শেয়ারে ৪.৭৩ টাকা — **আপনি যে ৩.৩০ টাকার পুরো গড়ানটিকে রিট্রেসমেন্ট হিসেবে ব্যাখ্যা করতে যাচ্ছেন তার চেয়েও বেশি।** এই উদাহরণে জানালার মধ্যে কোনো রেকর্ড ডেট নেই, তাই গড়ানটি ট্রেডযোগ্য তথ্য। **প্রতিবার ধাপ ১-এর আগে এটি নিশ্চিত করুন।**

**ধাপ ১ — ইমপালস উচ্চতা।**
$$I = 52.00 - 42.00 = 10.00$$

**ধাপ ২ — কনসলিডেশনের চরম বিন্দু।**
$$L_{\\text{pause}} = \\min(50.40,\\, 49.30,\\, 48.80,\\, 48.70,\\, 49.20) = 48.70$$
$$H_{\\text{pause}} = \\max(51.90,\\, 50.80,\\, 50.10,\\, 49.60,\\, 50.30) = 51.90$$

লক্ষ করুন $H_{\\text{pause}} = 51.90$ ইমপালস হাই ৫২.০০-এর **নিচে**। কাঠামোর প্রকৃত ছাদ ইমপালস হাই, আর ধাপ ৮ দুটির বড়টি ব্যবহার করে।

**ধাপ ৩ — রিট্রেসমেন্ট গভীরতা।**
$$\\delta = \\frac{52.00 - 48.70}{10.00} \\times 100 = 33.0\\%$$

**ধাপ ৪ — রেফারেন্স স্তরের সঙ্গে তুলনা।**
$$R_{38.2} = 52.00 - 3.82 = 48.18 \\qquad R_{50} = 47.00 \\qquad R_{61.8} = 45.82$$

$$48.70 > 48.18 \\;\\Rightarrow\\; \\text{বিরতিটি সবচেয়ে অগভীর স্তরেও পৌঁছায়নি}$$

**অগভীর ফেরত। ধারাবাহিকতার সঙ্গে সঙ্গতিপূর্ণ।**

**ধাপ ৫ — ভলিউমের মাত্রা।**
$$\\bar{V}_{\\text{pause}} = \\frac{1{,}850 + 1{,}400 + 1{,}150 + 900 + 1{,}100}{5} = \\frac{6{,}400}{5} = 1{,}280$$
$$\\phi = \\frac{1{,}280}{2{,}400} = 0.533$$

**ধাপ ৬ — ভলিউমের ঢাল, আর এটিই গুরুত্বপূর্ণ পরীক্ষা।** $\\bar{t} = 3$ ও $\\bar{V} = 1{,}280$ নিয়ে:

$$\\sum (t-\\bar{t})(V_t-\\bar{V}) = (-2)(570) + (-1)(120) + (0)(-130) + (1)(-380) + (2)(-180) = -2{,}000$$
$$\\sum (t-\\bar{t})^2 = 4+1+0+1+4 = 10$$
$$\\beta = \\frac{-2{,}000}{10} = -200 \\text{ হাজার শেয়ার প্রতি বার}, \\qquad \\beta^{*} = \\frac{-200}{1{,}280} \\times 100 = -15.6\\%$$

**ঋণাত্মক ও খাড়া। সরবরাহ শুকিয়েছে; আসেনি।**

**ধাপ ৭ — এবার যে পরিমাপ সম্পর্কে সতর্ক করা হচ্ছে তা গণনা করুন, যাতে একে ব্যর্থ হতে দেখেন।**

$$\\omega = \\frac{(1{,}850 + 1{,}400 + 1{,}150)/3}{(900 + 1{,}100)/2} = \\frac{1{,}466.7}{1{,}000} = 1.47$$

**সরলভাবে পড়লে $\\omega = 1.47$ বলে নিচের বারগুলো উপরের বারের দেড় গুণ ভলিউম বহন করেছে — একটি বিতরণের সতর্কতা।** ঐ পাঠ ভুল, আর ঢাল বলে কেন: নিচের বারগুলো এসেছে *আগে*, যখন ভলিউম তখনো ইমপালস থেকে উঁচু। **$\\omega$ সময়ের অতিবাহন মেপে তাকে বিক্রয়চাপ বলে ভুল নাম দিয়েছে।**

ফলাফলটি ধরে রাখুন। ধাপ ১২ এতে ফিরবে।

**ধাপ ৮ — ইনভ্যালিডেশন দাম। প্রবেশের পরে নয়, আগে এটি গণনা করুন।**
$$X = 48.70 - 0.25 = 48.45$$

**ধাপ ৯ — প্রবেশ ও লক্ষ্য।**
$$E = \\max(52.00,\\, 51.90) + 0.05 = 52.05$$
$$T = 52.00 + 10.00 = 62.00$$

**ধাপ ১০ — পাটিগণিত।**
$$\\text{ঝুঁকি} = 52.05 - 48.45 = 3.60 \\qquad \\text{পুরস্কার} = 62.00 - 52.05 = 9.95$$
$$R{:}R = \\frac{9.95}{3.60} = 2.764 \\qquad p^{*} = \\frac{1}{1 + 2.764} = 0.2657 = 26.57\\%$$

**অধ্যায় ২৮-এর সম্পূর্ণ নিশ্চিত মর্নিং স্টারের সঙ্গে তুলনা করুন, যা ৪৩.৭৫% দাবি করেছিল।** পার্থক্যটি সৌভাগ্য নয়, কাঠামোগত: **কন্টিনিউয়েশন প্যাটার্নের ইনভ্যালিডেশন প্রবেশের কাছে বসে** — বিরতির লো ব্রেকআউটের কয়েক টাকা নিচে — যেখানে রিভার্সাল প্যাটার্নের ইনভ্যালিডেশন তার দুই বা তিন সেশন পেছনে। **কন্টিনিউয়েশন সেটআপে ভুল হওয়া পাটিগাণিতিকভাবে সস্তা, আর এগুলো ট্রেড করার সবচেয়ে শক্ত যুক্তি এটিই।**

**ধাপ ১১ — পজিশনের আকার, যা কেবল স্টপ থেকেই বেরোয়।**
$$\\text{ঝুঁকি বাজেট} = 500{,}000 \\times 1\\% = 5{,}000$$
$$N = \\left\\lfloor \\frac{5{,}000}{3.60} \\right\\rfloor = 1{,}388 \\text{ শেয়ার}$$
$$\\text{নিয়োজিত পুঁজি} = 1{,}388 \\times 52.05 = \\text{BDT } 72{,}245$$

**ইকুইটির ১% ঝুঁকি নিতে তার ১৪.৪% নিয়োজিত হচ্ছে।** এ দুটি ভিন্ন সংখ্যা আর এদের মিলিয়ে ফেলাই হিসাবগুলো নীরবে অতিকেন্দ্রীভূত হওয়ার পথ।

**ধাপ ১২ — ব্যর্থ বিরতিটি একই ধাপে চালান, আর $\\omega$-কে উল্টে যেতে দেখুন।**

$$\\delta = \\frac{52.00 - 44.80}{10.00} \\times 100 = 72.0\\% \\;>\\; 61.8\\% \\;\\Rightarrow\\; \\textbf{বাতিল}$$
$$\\beta = +280 \\text{ প্রতি বার} \\;\\Rightarrow\\; \\text{বাজার কম নয়, বেশি কাজ করছে}$$
$$\\omega = \\frac{(2{,}100+2{,}600+3{,}050+3{,}400)/4}{3{,}100} = \\frac{2{,}787.5}{3{,}100} = 0.90$$

| | সুস্থ বিরতি | ব্যর্থ বিরতি |
|---|---|---|
| $\\delta$ | ৩৩.০% — অগভীর | ৭২.০% — বাতিল |
| $\\beta$ | **−২০০** (শান্ত হচ্ছে) | **+২৮০** (উত্তপ্ত হচ্ছে) |
| $\\omega$ | **১.৪৭** — *অসুস্থ* পড়ে | **০.৯০** — *সুস্থ* পড়ে |
| সত্য | ধারাবাহিকতা | ব্যর্থতা |

**$\\omega$ দুটি ক্ষেত্রেই ভুল চিহ্ন ফেরত দিয়েছে।** দুটি উদাহরণ একটি দৃষ্টান্ত, প্রমাণ নয়, আর আমি অন্য দাবি করব না — কিন্তু প্রক্রিয়াটি কাজ করার মতো যথেষ্ট স্পষ্ট: **অনুপাতটি বারের ক্রমের সঙ্গে জড়িয়ে যায়, যেখানে ঢাল আপনি যা সত্যিই চান তা মাপে, অর্থাৎ বাজার শান্ত হচ্ছে না উত্তপ্ত।**

**ধাপ ১৩ — রায়, এবং তা যা নয়।**

$$\\delta = 33.0\\% \\le 38.2\\% \\;\\land\\; \\beta < 0 \\;\\Rightarrow\\; \\textbf{HOLD — সুস্থ বিরতি, ইনভ্যালিডেশনে স্টপ}$$

**এটি শেয়ারটি ৬২.০০-তে পৌঁছাবে এমন পূর্বাভাস নয়।** এটি তিনটি পৃথক বিবৃতি: বিরতিটি অগভীর, বিরতিটি শান্ত, আর ৪৮.৪৫-এর নিচে আমি ভুল ও ৫,০০০ টাকার একটি জ্ঞাত ক্ষতিতে বেরিয়ে যাব। **পাঠ্যবইয়ের প্যাটার্ন সম্পূর্ণ করা নিশ্চিতকারী লম্বা সাদা ক্যান্ডেলটি ঘটেনি, আর যখন ঘটবে ততক্ষণে চলাচলটি আপনাকে ছাড়াই শুরু হয়ে যাবে** — যা কন্টিনিউয়েশন ট্রেডিংয়ের স্থায়ী অবস্থা এবং যে কারণে প্যাটার্ন নয়, ইনভ্যালিডেশন স্তরটিই আপনার প্রকৃত সম্পদ।`,
    },

    excel: {
      en: `\`\`\`
A1:  — Impulse Leg —
A2:  Impulse Start (Low)          B2:  42
A3:  Impulse End (High)           B3:  52
A4:  Impulse Height (BDT)         B4:  =B3-B2
A5:  Impulse Avg Volume (000)     B5:  2400

A7:  — Consolidation Bars —
A8:G8   Bar | Open | High | Low | Close | Volume | Dir
Rows 9-13 hold the five bars.
G9:  =IF(E9<B9,-1,1)                     direction, filled down to G13

A15: — Pattern Geometry —
A16: Consolidation Low            B16: =MIN(D9:D13)
A17: Consolidation High           B17: =MAX(C9:C13)
A18: Retracement Depth (%)        B18: =(B3-B16)/B4*100
A19: 38.2% Retrace Level          B19: =B3-0.382*B4
A20: 50% Retrace Level            B20: =B3-0.5*B4
A21: 61.8% Retrace Level          B21: =B3-0.618*B4

A23: — Volume Behaviour —
A24: Avg Consolidation Volume     B24: =AVERAGE(F9:F13)
A25: Pause vs Impulse (x)         B25: =B24/B5
A26: Volume Slope (per bar)       B26: =SLOPE(F9:F13,A9:A13)
A27: Slope Normalised (%/bar)     B27: =B26/B24*100
A28: Avg Vol on Down Bars         B28: =SUMIF(G9:G13,-1,F9:F13)/COUNTIF(G9:G13,-1)
A29: Avg Vol on Up Bars           B29: =SUMIF(G9:G13,1,F9:F13)/COUNTIF(G9:G13,1)
A30: Down/Up Volume Ratio         B30: =B28/B29

A32: — Invalidation & Trade —
A33: Stop Buffer (BDT)            B33: 0.25
A34: INVALIDATION PRICE           B34: =B16-B33
A35: Pattern Still Valid?         B35: =IF(B16<B21,"NO - retrace beyond 61.8%","YES")
A36: Entry (breakout stop)        B36: =MAX(B3,B17)+0.05
A37: Risk per Share               B37: =B36-B34
A38: Measured-move Target         B38: =MAX(B3,B17)+B4
A39: Reward per Share             B39: =B38-B36
A40: Reward : Risk                B40: =B39/B37

A42: — Position Sizing —
A43: Account Equity (BDT)         B43: 500000
A44: Risk per Trade (%)           B44: 1
A45: Taka at Risk                 B45: =B43*B44/100
A46: Shares                       B46: =INT(B45/B37)
A47: Capital Committed            B47: =B46*B36

A49: — Record-date Check (DSE) —
A50: Record Date in Window? (1=yes)  B50: 0
A51: Gap Reading                  B51: =IF(B50=1,"MECHANICAL - adjust prices before
                                       reading any gap","Gap is tradeable information")

A53: VERDICT
B53: =IF(B50=1,"SUSPEND - re-read the chart on adjusted prices",
     IF(B16<B21,"EXIT - retracement voids the continuation",
     IF(AND(B18<=38.2,B26<0),"HOLD - healthy pause, stop at invalidation",
     "REDUCE - pattern intact but depth or volume is warning")))
\`\`\`

**On the healthy pause this returns B18 = 33.0, B25 = 0.53, B26 = −200, B30 = 1.47, B34 = 48.45, B37 = 3.60, B40 = 2.76, B46 = 1,388 shares and the HOLD verdict.**

**Five notes.**

**B50 is checked first in B53 and it overrides everything, including a perfect pattern.** If a record date fell inside the window, the drift is partly the registrar's arithmetic and not the market's opinion — a 10% bonus alone moves the price 9.09%, which on this BDT 10 leg would manufacture most of the 33% retracement. **The sheet refuses to read the chart rather than reading it wrongly**, which is the same architecture as Chapter 26's exclusion flag and Chapter 25's hard gates.

**B34 is computed before B36, and the ordering is the point.** The invalidation price is an input to everything downstream — risk per share, reward-to-risk, and ultimately B46, the number of shares. **The pattern never sizes the position; the price at which the pattern is wrong does.** Build the sheet in the other order and you will find yourself choosing a size and then looking for a stop that justifies it.

**B26 uses \`SLOPE\` against the bar numbers in column A, not against dates.** Using dates would weight the gap across a weekend or a holiday as though volume had been decaying through it. Bar number is the correct independent variable because the question is about sequence, not calendar time.

**B30 is computed and then deliberately excluded from B53.** This is unusual and intentional. The down/up ratio is reported because readers will ask for it and because seeing it fail is instructive — it reads 1.47 here (apparently unhealthy) on a pattern that is healthy, and 0.90 (apparently healthy) on the failed case in §29.5. **A metric that inverts on both worked examples is displayed for education and given no vote.**

**B35 and B53 test \`B16<B21\` independently, which is deliberate redundancy.** B35 answers the analytical question — is this still a continuation pattern — and B53 answers the operational one. Keeping them separate means you can see *why* the verdict says EXIT rather than only that it does, and when you later widen the buffer in B33 or change the retracement convention, you will find out immediately whether the two answers have drifted apart.`,
      bn: `\`\`\`
A1:  — Impulse Leg —
A2:  Impulse Start (Low)          B2:  42
A3:  Impulse End (High)           B3:  52
A4:  Impulse Height (BDT)         B4:  =B3-B2
A5:  Impulse Avg Volume (000)     B5:  2400

A7:  — Consolidation Bars —
A8:G8   Bar | Open | High | Low | Close | Volume | Dir
সারি ৯-১৩-এ পাঁচটি বার।
G9:  =IF(E9<B9,-1,1)                     দিক, G13 পর্যন্ত পূরণ

A15: — Pattern Geometry —
A16: Consolidation Low            B16: =MIN(D9:D13)
A17: Consolidation High           B17: =MAX(C9:C13)
A18: Retracement Depth (%)        B18: =(B3-B16)/B4*100
A19: 38.2% Retrace Level          B19: =B3-0.382*B4
A20: 50% Retrace Level            B20: =B3-0.5*B4
A21: 61.8% Retrace Level          B21: =B3-0.618*B4

A23: — Volume Behaviour —
A24: Avg Consolidation Volume     B24: =AVERAGE(F9:F13)
A25: Pause vs Impulse (x)         B25: =B24/B5
A26: Volume Slope (per bar)       B26: =SLOPE(F9:F13,A9:A13)
A27: Slope Normalised (%/bar)     B27: =B26/B24*100
A28: Avg Vol on Down Bars         B28: =SUMIF(G9:G13,-1,F9:F13)/COUNTIF(G9:G13,-1)
A29: Avg Vol on Up Bars           B29: =SUMIF(G9:G13,1,F9:F13)/COUNTIF(G9:G13,1)
A30: Down/Up Volume Ratio         B30: =B28/B29

A32: — Invalidation & Trade —
A33: Stop Buffer (BDT)            B33: 0.25
A34: INVALIDATION PRICE           B34: =B16-B33
A35: Pattern Still Valid?         B35: =IF(B16<B21,"NO - retrace beyond 61.8%","YES")
A36: Entry (breakout stop)        B36: =MAX(B3,B17)+0.05
A37: Risk per Share               B37: =B36-B34
A38: Measured-move Target         B38: =MAX(B3,B17)+B4
A39: Reward per Share             B39: =B38-B36
A40: Reward : Risk                B40: =B39/B37

A42: — Position Sizing —
A43: Account Equity (BDT)         B43: 500000
A44: Risk per Trade (%)           B44: 1
A45: Taka at Risk                 B45: =B43*B44/100
A46: Shares                       B46: =INT(B45/B37)
A47: Capital Committed            B47: =B46*B36

A49: — Record-date Check (DSE) —
A50: Record Date in Window? (1=yes)  B50: 0
A51: Gap Reading                  B51: =IF(B50=1,"MECHANICAL - adjust prices before
                                       reading any gap","Gap is tradeable information")

A53: VERDICT
B53: =IF(B50=1,"SUSPEND - re-read the chart on adjusted prices",
     IF(B16<B21,"EXIT - retracement voids the continuation",
     IF(AND(B18<=38.2,B26<0),"HOLD - healthy pause, stop at invalidation",
     "REDUCE - pattern intact but depth or volume is warning")))
\`\`\`

**সুস্থ বিরতিতে এটি ফেরত দেয় B18 = ৩৩.০, B25 = ০.৫৩, B26 = −২০০, B30 = ১.৪৭, B34 = ৪৮.৪৫, B37 = ৩.৬০, B40 = ২.৭৬, B46 = ১,৩৮৮ শেয়ার ও HOLD রায়।**

**পাঁচটি টীকা।**

**B53-এ B50 প্রথমে যাচাই হয় ও তা সবকিছু, এমনকি একটি নিখুঁত প্যাটার্নকেও, অগ্রাহ্য করে।** জানালার ভেতরে রেকর্ড ডেট পড়লে গড়ানটি আংশিকভাবে রেজিস্ট্রারের পাটিগণিত, বাজারের মতামত নয় — কেবল ১০% বোনাসই দাম ৯.০৯% সরায়, যা এই ১০ টাকার লেগে ৩৩% রিট্রেসমেন্টের বেশিরভাগ তৈরি করত। **শিটটি চার্ট ভুলভাবে পড়ার বদলে পড়তেই অস্বীকার করে**, যা অধ্যায় ২৬-এর বর্জন চিহ্ন ও অধ্যায় ২৫-এর কঠোর গেটেরই স্থাপত্য।

**B36-এর আগে B34 গণিত হয়, আর ক্রমটাই মূল কথা।** ইনভ্যালিডেশন দাম নিচের সবকিছুর একটি উপাদান — শেয়ারপ্রতি ঝুঁকি, পুরস্কার-ঝুঁকি, এবং শেষে B46, শেয়ারের সংখ্যা। **প্যাটার্ন কখনো পজিশনের আকার ঠিক করে না; প্যাটার্নটি যে দামে ভুল সেটিই করে।** উল্টো ক্রমে শিট গড়ুন আর দেখবেন আপনি একটি আকার বেছে নিয়ে তারপর তাকে সমর্থন করে এমন স্টপ খুঁজছেন।

**B26 তারিখের বিপরীতে নয়, A কলামের বার নম্বরের বিপরীতে \`SLOPE\` ব্যবহার করে।** তারিখ ব্যবহার করলে সাপ্তাহিক ছুটি বা সরকারি ছুটির ফাঁককে এমনভাবে ওজন দেওয়া হতো যেন তার মধ্য দিয়ে ভলিউম ক্ষয় হচ্ছিল। বার নম্বরই সঠিক স্বাধীন চলক কারণ প্রশ্নটি ক্রম নিয়ে, পঞ্জিকা-সময় নিয়ে নয়।

**B30 গণনা করা হয় ও তারপর ইচ্ছাকৃতভাবে B53 থেকে বাদ দেওয়া হয়।** এটি অস্বাভাবিক ও উদ্দেশ্যমূলক। নিচ/উপর অনুপাত জানানো হয় কারণ পাঠকরা তা চাইবেন এবং একে ব্যর্থ হতে দেখা শিক্ষণীয় — এখানে এটি একটি সুস্থ প্যাটার্নে ১.৪৭ পড়ে (আপাতদৃষ্টিতে অসুস্থ), আর §২৯.৫-এর ব্যর্থ ক্ষেত্রে ০.৯০ (আপাতদৃষ্টিতে সুস্থ)। **যে পরিমাপ দুটি উদাহরণেই উল্টে যায় তা শিক্ষার জন্য দেখানো হয় ও কোনো ভোট দেওয়া হয় না।**

**B35 ও B53 স্বাধীনভাবে \`B16<B21\` পরীক্ষা করে, আর এই পুনরুক্তি ইচ্ছাকৃত।** B35 বিশ্লেষণী প্রশ্নের উত্তর দেয় — এটি কি এখনো একটি কন্টিনিউয়েশন প্যাটার্ন — আর B53 পরিচালনগত প্রশ্নের। আলাদা রাখার অর্থ রায় কেবল EXIT বলছে তা নয়, *কেন* বলছে তাও দেখতে পান, আর পরে B33-এ বাফার চওড়া করলে বা রিট্রেসমেন্টের প্রথা বদলালে তৎক্ষণাৎ জানবেন দুটি উত্তর পরস্পর থেকে সরে গেছে কি না।`,
    },

    python: {
      en: `\`\`\`python
"""
Chapter 29 — Continuation pattern tracker for DSE data.

Measures the pause two ways (depth and volume slope), computes the
invalidation price first, and derives position size from it.
Educational. Figures illustrative.
"""
from dataclasses import dataclass, field

FIB = (0.382, 0.500, 0.618)
SHALLOW = 38.2        # % retracement consistent with continuation
VOID = 61.8           # % beyond which the continuation reading is void
QUIET_PAUSE = 0.60    # pause volume as a fraction of impulse volume


@dataclass
class Bar:
    n: int
    o: float
    h: float
    l: float
    c: float
    volume: float     # thousands

    @property
    def d(self) -> int:
        return -1 if self.c < self.o else 1


def slope(xs: list[float], ys: list[float]) -> float:
    """OLS slope. x is bar NUMBER, never calendar date — the question is
    about sequence, and dates would weight weekends as volume decay."""
    n = len(xs)
    mx, my = sum(xs) / n, sum(ys) / n
    sxy = sum((x - mx) * (y - my) for x, y in zip(xs, ys))
    sxx = sum((x - mx) ** 2 for x in xs)
    return sxy / sxx


@dataclass
class Continuation:
    label: str
    impulse_start: float
    impulse_end: float
    impulse_volume: float
    bars: list[Bar]
    record_date_in_window: bool = False
    stop_buffer: float = 0.25
    tick: float = 0.05
    equity: float = 500_000
    risk_pct: float = 1.0
    _: dict = field(default_factory=dict, repr=False)

    # --- geometry ------------------------------------------------------
    @property
    def impulse(self) -> float:
        return round(self.impulse_end - self.impulse_start, 2)

    @property
    def pause_low(self) -> float:
        return min(b.l for b in self.bars)

    @property
    def pause_high(self) -> float:
        return max(b.h for b in self.bars)

    @property
    def depth_pct(self) -> float:
        return (self.impulse_end - self.pause_low) / self.impulse * 100

    @property
    def fib_levels(self) -> dict[str, float]:
        return {f"{f*100:.1f}%": round(self.impulse_end - f * self.impulse, 2)
                for f in FIB}

    # --- volume --------------------------------------------------------
    @property
    def avg_volume(self) -> float:
        return sum(b.volume for b in self.bars) / len(self.bars)

    @property
    def phi(self) -> float:
        return self.avg_volume / self.impulse_volume

    @property
    def beta(self) -> float:
        return slope([b.n for b in self.bars], [b.volume for b in self.bars])

    @property
    def beta_norm(self) -> float:
        return self.beta / self.avg_volume * 100

    @property
    def omega(self) -> float:
        """Down/up volume ratio. Computed for teaching; given no vote.
        It is confounded with bar ordering and inverts on both worked cases."""
        down = [b.volume for b in self.bars if b.d == -1]
        up = [b.volume for b in self.bars if b.d == 1]
        if not down or not up:
            return float("nan")
        return (sum(down) / len(down)) / (sum(up) / len(up))

    # --- the invalidation price, and everything downstream -------------
    @property
    def invalidation(self) -> float:
        return round(self.pause_low - self.stop_buffer, 2)

    @property
    def entry(self) -> float:
        return round(max(self.impulse_end, self.pause_high) + self.tick, 2)

    @property
    def target(self) -> float:
        return round(max(self.impulse_end, self.pause_high) + self.impulse, 2)

    @property
    def risk(self) -> float:
        return round(self.entry - self.invalidation, 2)

    @property
    def rr(self) -> float:
        return (self.target - self.entry) / self.risk

    @property
    def breakeven_win_rate(self) -> float:
        return 1 / (1 + self.rr) * 100

    @property
    def shares(self) -> int:
        return int(self.equity * self.risk_pct / 100 / self.risk)

    @property
    def capital(self) -> float:
        return self.shares * self.entry

    @property
    def verdict(self) -> str:
        if self.record_date_in_window:
            return "SUSPEND - re-read the chart on adjusted prices"
        if self.depth_pct > VOID:
            return "EXIT - retracement voids the continuation"
        if self.depth_pct <= SHALLOW and self.beta < 0:
            return "HOLD - healthy pause, stop at invalidation"
        return "REDUCE - pattern intact but depth or volume is warning"


def report(c: Continuation) -> None:
    print(f"=== {c.label} ===")
    print(f"  Impulse            : {c.impulse_start:.2f} -> {c.impulse_end:.2f} "
          f"= {c.impulse:.2f}")
    print(f"  Pause low / high   : {c.pause_low:.2f} / {c.pause_high:.2f}")
    print(f"  Retracement depth  : {c.depth_pct:.1f}%   "
          f"(levels {', '.join(f'{k} @ {v}' for k, v in c.fib_levels.items())})")
    print(f"  Pause vs impulse   : {c.phi:.2f}x")
    print(f"  Volume slope beta  : {c.beta:+.0f} per bar ({c.beta_norm:+.1f}%/bar)")
    print(f"  Down/up ratio omega: {c.omega:.2f}  <- reported, not voted on")
    print(f"  INVALIDATION       : {c.invalidation:.2f}")
    print(f"  Entry / target     : {c.entry:.2f} / {c.target:.2f}")
    print(f"  Risk / R:R         : {c.risk:.2f} / {c.rr:.2f}")
    print(f"  Break-even win rate: {c.breakeven_win_rate:.2f}%")
    print(f"  Shares / capital   : {c.shares:,} / BDT {c.capital:,.0f}")
    print(f"  VERDICT            : {c.verdict}")
    print()


if __name__ == "__main__":
    healthy = Continuation(
        label="NOVOTEX - healthy pause",
        impulse_start=42.00, impulse_end=52.00, impulse_volume=2400,
        bars=[
            Bar(1, 51.60, 51.90, 50.40, 50.60, 1850),
            Bar(2, 50.50, 50.80, 49.30, 49.60, 1400),
            Bar(3, 49.70, 50.10, 48.80, 49.10, 1150),
            Bar(4, 49.20, 49.60, 48.70, 49.40,  900),
            Bar(5, 49.50, 50.30, 49.20, 50.10, 1100),
        ],
    )
    failed = Continuation(
        label="NOVOTEX - failed pause",
        impulse_start=42.00, impulse_end=52.00, impulse_volume=2400,
        bars=[
            Bar(1, 51.60, 51.80, 50.10, 50.20, 2100),
            Bar(2, 50.10, 50.40, 48.20, 48.40, 2600),
            Bar(3, 48.50, 48.90, 46.60, 46.80, 3050),
            Bar(4, 46.90, 47.30, 45.40, 45.60, 3400),
            Bar(5, 44.90, 46.10, 44.80, 45.40, 3100),
        ],
    )

    for c in (healthy, failed):
        report(c)

    print("=== Why omega gets no vote ===")
    print(f"{'Case':<24} {'depth':>7} {'beta':>7} {'omega':>7}  omega reads")
    for c in (healthy, failed):
        reads = "healthy" if c.omega < 1 else "unhealthy"
        print(f"{c.label:<24} {c.depth_pct:>6.1f}% {c.beta:>+7.0f} "
              f"{c.omega:>7.2f}  {reads}")
    print("The ratio returns the wrong sign on both. The slope does not.")
\`\`\`

**Expected output:**
\`\`\`
=== NOVOTEX - healthy pause ===
  Impulse            : 42.00 -> 52.00 = 10.00
  Pause low / high   : 48.70 / 51.90
  Retracement depth  : 33.0%   (levels 38.2% @ 48.18, 50.0% @ 47.0, 61.8% @ 45.82)
  Pause vs impulse   : 0.53x
  Volume slope beta  : -200 per bar (-15.6%/bar)
  Down/up ratio omega: 1.47  <- reported, not voted on
  INVALIDATION       : 48.45
  Entry / target     : 52.05 / 62.00
  Risk / R:R         : 3.60 / 2.76
  Break-even win rate: 26.57%
  Shares / capital   : 1,388 / BDT 72,245
  VERDICT            : HOLD - healthy pause, stop at invalidation

=== NOVOTEX - failed pause ===
  Impulse            : 42.00 -> 52.00 = 10.00
  Pause low / high   : 44.80 / 51.80
  Retracement depth  : 72.0%   (levels 38.2% @ 48.18, 50.0% @ 47.0, 61.8% @ 45.82)
  Pause vs impulse   : 1.35x
  Volume slope beta  : +280 per bar (+9.8%/bar)
  Down/up ratio omega: 0.90  <- reported, not voted on
  INVALIDATION       : 44.55
  Entry / target     : 52.05 / 62.00
  Risk / R:R         : 7.50 / 1.33
  Break-even win rate: 42.93%
  Shares / capital   : 666 / BDT 34,665
  VERDICT            : EXIT - retracement voids the continuation

=== Why omega gets no vote ===
Case                       depth    beta   omega  omega reads
NOVOTEX - healthy pause     33.0%    -200    1.47  unhealthy
NOVOTEX - failed pause      72.0%    +280    0.90  healthy
The ratio returns the wrong sign on both. The slope does not.
\`\`\`

**Look at the failed case's risk figure before anything else.** Because the pause fell to 44.80, the invalidation drops to 44.55 and the risk per share more than doubles, from 3.60 to 7.50 — **so the same target produces a break-even requirement of 42.93% instead of 26.57%.** The setup degraded arithmetically long before the verdict said EXIT, and a trader watching only the pattern's shape would have seen none of it.

**Three implementation notes.**

**\`omega\` is computed, printed, labelled, and never consulted.** That is a deliberate design choice rather than an oversight. Readers will ask for the down/up ratio because it is intuitive, so the honest move is to show it alongside the metric that works and let it discredit itself. **A property that exists purely to be demonstrated wrong is legitimate teaching code and would be a defect in production code** — in a real system it belongs in a notebook, not in the class.

**\`slope\` takes bar numbers, and the docstring says why.** Passing dates would treat a weekend as a period over which volume decayed, which is not what "the pause is getting quieter" means. **This is the kind of substitution that produces a plausible number and a wrong answer, and it survives review precisely because nothing crashes.**

**\`invalidation\` is a property of the pattern and \`shares\` depends on it, never the reverse.** The dependency direction is the chapter's practical claim expressed in code: you cannot compute a position size without first committing to the price at which you are wrong. **Any refactor that lets \`shares\` be set directly should be rejected**, because it would permit the one workflow this chapter exists to prevent — choosing a size and then hunting for a stop that justifies it.`,
      bn: `\`\`\`python
"""
অধ্যায় ২৯ — ডিএসই ডেটার জন্য কন্টিনিউয়েশন প্যাটার্ন ট্র্যাকার।

বিরতিকে দুইভাবে মাপে (গভীরতা ও ভলিউমের ঢাল), ইনভ্যালিডেশন দাম আগে
গণনা করে, আর তা থেকে পজিশনের আকার বের করে।
শিক্ষামূলক। সংখ্যা দৃষ্টান্তমূলক।
"""
from dataclasses import dataclass, field

FIB = (0.382, 0.500, 0.618)
SHALLOW = 38.2        # % রিট্রেসমেন্ট, ধারাবাহিকতার সঙ্গে সঙ্গতিপূর্ণ
VOID = 61.8           # % — এর পরে ধারাবাহিকতার পাঠ বাতিল
QUIET_PAUSE = 0.60    # ইমপালস ভলিউমের ভগ্নাংশ হিসেবে বিরতির ভলিউম


@dataclass
class Bar:
    n: int
    o: float
    h: float
    l: float
    c: float
    volume: float     # হাজারে

    @property
    def d(self) -> int:
        return -1 if self.c < self.o else 1


def slope(xs: list[float], ys: list[float]) -> float:
    """OLS ঢাল। x হলো বার নম্বর, কখনো পঞ্জিকা তারিখ নয় — প্রশ্নটি ক্রম নিয়ে,
    আর তারিখ সাপ্তাহিক ছুটিকে ভলিউম ক্ষয় হিসেবে ওজন দিত।"""
    n = len(xs)
    mx, my = sum(xs) / n, sum(ys) / n
    sxy = sum((x - mx) * (y - my) for x, y in zip(xs, ys))
    sxx = sum((x - mx) ** 2 for x in xs)
    return sxy / sxx


@dataclass
class Continuation:
    label: str
    impulse_start: float
    impulse_end: float
    impulse_volume: float
    bars: list[Bar]
    record_date_in_window: bool = False
    stop_buffer: float = 0.25
    tick: float = 0.05
    equity: float = 500_000
    risk_pct: float = 1.0
    _: dict = field(default_factory=dict, repr=False)

    # --- জ্যামিতি ------------------------------------------------------
    @property
    def impulse(self) -> float:
        return round(self.impulse_end - self.impulse_start, 2)

    @property
    def pause_low(self) -> float:
        return min(b.l for b in self.bars)

    @property
    def pause_high(self) -> float:
        return max(b.h for b in self.bars)

    @property
    def depth_pct(self) -> float:
        return (self.impulse_end - self.pause_low) / self.impulse * 100

    @property
    def fib_levels(self) -> dict[str, float]:
        return {f"{f*100:.1f}%": round(self.impulse_end - f * self.impulse, 2)
                for f in FIB}

    # --- ভলিউম --------------------------------------------------------
    @property
    def avg_volume(self) -> float:
        return sum(b.volume for b in self.bars) / len(self.bars)

    @property
    def phi(self) -> float:
        return self.avg_volume / self.impulse_volume

    @property
    def beta(self) -> float:
        return slope([b.n for b in self.bars], [b.volume for b in self.bars])

    @property
    def beta_norm(self) -> float:
        return self.beta / self.avg_volume * 100

    @property
    def omega(self) -> float:
        """নিচ/উপর ভলিউম অনুপাত। শিক্ষার জন্য গণিত; কোনো ভোট নেই।
        এটি বারের ক্রমের সঙ্গে জড়িয়ে যায় ও দুটি উদাহরণেই উল্টে যায়।"""
        down = [b.volume for b in self.bars if b.d == -1]
        up = [b.volume for b in self.bars if b.d == 1]
        if not down or not up:
            return float("nan")
        return (sum(down) / len(down)) / (sum(up) / len(up))

    # --- ইনভ্যালিডেশন দাম, ও তার নিচের সবকিছু -------------------------
    @property
    def invalidation(self) -> float:
        return round(self.pause_low - self.stop_buffer, 2)

    @property
    def entry(self) -> float:
        return round(max(self.impulse_end, self.pause_high) + self.tick, 2)

    @property
    def target(self) -> float:
        return round(max(self.impulse_end, self.pause_high) + self.impulse, 2)

    @property
    def risk(self) -> float:
        return round(self.entry - self.invalidation, 2)

    @property
    def rr(self) -> float:
        return (self.target - self.entry) / self.risk

    @property
    def breakeven_win_rate(self) -> float:
        return 1 / (1 + self.rr) * 100

    @property
    def shares(self) -> int:
        return int(self.equity * self.risk_pct / 100 / self.risk)

    @property
    def capital(self) -> float:
        return self.shares * self.entry

    @property
    def verdict(self) -> str:
        if self.record_date_in_window:
            return "SUSPEND - re-read the chart on adjusted prices"
        if self.depth_pct > VOID:
            return "EXIT - retracement voids the continuation"
        if self.depth_pct <= SHALLOW and self.beta < 0:
            return "HOLD - healthy pause, stop at invalidation"
        return "REDUCE - pattern intact but depth or volume is warning"


def report(c: Continuation) -> None:
    print(f"=== {c.label} ===")
    print(f"  Impulse            : {c.impulse_start:.2f} -> {c.impulse_end:.2f} "
          f"= {c.impulse:.2f}")
    print(f"  Pause low / high   : {c.pause_low:.2f} / {c.pause_high:.2f}")
    print(f"  Retracement depth  : {c.depth_pct:.1f}%   "
          f"(levels {', '.join(f'{k} @ {v}' for k, v in c.fib_levels.items())})")
    print(f"  Pause vs impulse   : {c.phi:.2f}x")
    print(f"  Volume slope beta  : {c.beta:+.0f} per bar ({c.beta_norm:+.1f}%/bar)")
    print(f"  Down/up ratio omega: {c.omega:.2f}  <- reported, not voted on")
    print(f"  INVALIDATION       : {c.invalidation:.2f}")
    print(f"  Entry / target     : {c.entry:.2f} / {c.target:.2f}")
    print(f"  Risk / R:R         : {c.risk:.2f} / {c.rr:.2f}")
    print(f"  Break-even win rate: {c.breakeven_win_rate:.2f}%")
    print(f"  Shares / capital   : {c.shares:,} / BDT {c.capital:,.0f}")
    print(f"  VERDICT            : {c.verdict}")
    print()


if __name__ == "__main__":
    healthy = Continuation(
        label="NOVOTEX - healthy pause",
        impulse_start=42.00, impulse_end=52.00, impulse_volume=2400,
        bars=[
            Bar(1, 51.60, 51.90, 50.40, 50.60, 1850),
            Bar(2, 50.50, 50.80, 49.30, 49.60, 1400),
            Bar(3, 49.70, 50.10, 48.80, 49.10, 1150),
            Bar(4, 49.20, 49.60, 48.70, 49.40,  900),
            Bar(5, 49.50, 50.30, 49.20, 50.10, 1100),
        ],
    )
    failed = Continuation(
        label="NOVOTEX - failed pause",
        impulse_start=42.00, impulse_end=52.00, impulse_volume=2400,
        bars=[
            Bar(1, 51.60, 51.80, 50.10, 50.20, 2100),
            Bar(2, 50.10, 50.40, 48.20, 48.40, 2600),
            Bar(3, 48.50, 48.90, 46.60, 46.80, 3050),
            Bar(4, 46.90, 47.30, 45.40, 45.60, 3400),
            Bar(5, 44.90, 46.10, 44.80, 45.40, 3100),
        ],
    )

    for c in (healthy, failed):
        report(c)

    print("=== Why omega gets no vote ===")
    print(f"{'Case':<24} {'depth':>7} {'beta':>7} {'omega':>7}  omega reads")
    for c in (healthy, failed):
        reads = "healthy" if c.omega < 1 else "unhealthy"
        print(f"{c.label:<24} {c.depth_pct:>6.1f}% {c.beta:>+7.0f} "
              f"{c.omega:>7.2f}  {reads}")
    print("The ratio returns the wrong sign on both. The slope does not.")
\`\`\`

**প্রত্যাশিত আউটপুট:**
\`\`\`
=== NOVOTEX - healthy pause ===
  Impulse            : 42.00 -> 52.00 = 10.00
  Pause low / high   : 48.70 / 51.90
  Retracement depth  : 33.0%   (levels 38.2% @ 48.18, 50.0% @ 47.0, 61.8% @ 45.82)
  Pause vs impulse   : 0.53x
  Volume slope beta  : -200 per bar (-15.6%/bar)
  Down/up ratio omega: 1.47  <- reported, not voted on
  INVALIDATION       : 48.45
  Entry / target     : 52.05 / 62.00
  Risk / R:R         : 3.60 / 2.76
  Break-even win rate: 26.57%
  Shares / capital   : 1,388 / BDT 72,245
  VERDICT            : HOLD - healthy pause, stop at invalidation

=== NOVOTEX - failed pause ===
  Impulse            : 42.00 -> 52.00 = 10.00
  Pause low / high   : 44.80 / 51.80
  Retracement depth  : 72.0%   (levels 38.2% @ 48.18, 50.0% @ 47.0, 61.8% @ 45.82)
  Pause vs impulse   : 1.35x
  Volume slope beta  : +280 per bar (+9.8%/bar)
  Down/up ratio omega: 0.90  <- reported, not voted on
  INVALIDATION       : 44.55
  Entry / target     : 52.05 / 62.00
  Risk / R:R         : 7.50 / 1.33
  Break-even win rate: 42.93%
  Shares / capital   : 666 / BDT 34,665
  VERDICT            : EXIT - retracement voids the continuation

=== Why omega gets no vote ===
Case                       depth    beta   omega  omega reads
NOVOTEX - healthy pause     33.0%    -200    1.47  unhealthy
NOVOTEX - failed pause      72.0%    +280    0.90  healthy
The ratio returns the wrong sign on both. The slope does not.
\`\`\`

**সবকিছুর আগে ব্যর্থ ক্ষেত্রের ঝুঁকির সংখ্যাটি দেখুন।** বিরতিটি ৪৪.৮০-তে নামায় ইনভ্যালিডেশন ৪৪.৫৫-এ নেমে আসে আর শেয়ারপ্রতি ঝুঁকি দ্বিগুণেরও বেশি হয়, ৩.৬০ থেকে ৭.৫০ — **তাই একই লক্ষ্য ২৬.৫৭%-এর বদলে ৪২.৯৩% ব্রেক-ইভেন প্রয়োজন তৈরি করে।** রায় EXIT বলার অনেক আগেই সেটআপটি পাটিগাণিতিকভাবে ক্ষয়ে গিয়েছিল, আর কেবল প্যাটার্নের আকৃতি দেখা ট্রেডার এর কিছুই দেখতেন না।

**তিনটি বাস্তবায়ন টীকা।**

**\`omega\` গণিত হয়, ছাপা হয়, লেবেল পায়, আর কখনো পরামর্শ নেওয়া হয় না।** এটি অবহেলা নয়, একটি সচেতন নকশাগত পছন্দ। পাঠকরা নিচ/উপর অনুপাত চাইবেন কারণ তা স্বজ্ঞাত, তাই সৎ পদক্ষেপ হলো কার্যকর পরিমাপটির পাশে তা দেখানো এবং একে নিজেকেই অসম্মানিত করতে দেওয়া। **যে প্রপার্টির অস্তিত্ব কেবল ভুল প্রমাণিত হওয়ার জন্য তা বৈধ শিক্ষণ কোড আর উৎপাদন কোডে তা একটি ত্রুটি** — প্রকৃত সিস্টেমে এর জায়গা ক্লাসে নয়, একটি নোটবুকে।

**\`slope\` বার নম্বর নেয়, আর ডকস্ট্রিং বলে কেন।** তারিখ পাঠালে সাপ্তাহিক ছুটিকে এমন একটি সময়কাল ধরা হতো যার মধ্য দিয়ে ভলিউম ক্ষয় হয়েছে, যা "বিরতিটি শান্ত হচ্ছে"-র অর্থ নয়। **এটি সেই ধরনের প্রতিস্থাপন যা একটি বিশ্বাসযোগ্য সংখ্যা ও একটি ভুল উত্তর তৈরি করে, আর তা পর্যালোচনা টিকে যায় ঠিক এই কারণেই যে কিছু ভাঙে না।**

**\`invalidation\` প্যাটার্নের একটি ধর্ম আর \`shares\` তার ওপর নির্ভরশীল, কখনো উল্টো নয়।** নির্ভরতার দিকটিই অধ্যায়ের ব্যবহারিক দাবিকে কোডে প্রকাশ করে: আপনি যে দামে ভুল সেটিতে অঙ্গীকার না করে পজিশনের আকার গণনা করতে পারেন না। **যে রিফ্যাক্টর \`shares\`-কে সরাসরি নির্ধারণ করতে দেয় তা বাতিল করা উচিত**, কারণ তা ঠিক সেই একটি কর্মপ্রবাহের অনুমতি দিত যা ঠেকাতে এই অধ্যায়ের অস্তিত্ব — একটি আকার বেছে নিয়ে তারপর তাকে সমর্থন করে এমন স্টপ খোঁজা।`,
    },

    mistakes: {
      en: `1. **Reading a gap before checking the record-date calendar.** A 10% stock dividend moves the price 9.09% mechanically. On a BDT 10 impulse leg that manufactures most of a 33% retracement out of nothing. **This single omission will cost more than any pattern in this chapter earns.**
2. **Using the down/up volume ratio.** It is intuitive and it is confounded with bar ordering, since the down bars usually come first while volume is still elevated. It read 1.47 (apparently unhealthy) on the healthy case and 0.90 (apparently healthy) on the failed one — **the wrong sign both times.** Use the slope.
3. **Sizing the position before computing the invalidation price.** Do it in that order and you will find yourself hunting for a stop that justifies a size you already chose. The invalidation is an input to the size, never the reverse.
4. **Treating a retracement beyond 61.8% as a weakened pattern.** It is not weakened, it is void. A move that surrenders two-thirds of its gain was not pausing.
5. **Confusing capital committed with capital at risk.** The worked trade risks 1% of equity — BDT 5,000 — while committing 14.4% of it. Conflating those two numbers is how accounts become quietly over-concentrated in three positions.
6. **Claiming to distinguish a runaway gap from an exhaustion gap in real time.** They are identical on the day they print. Anyone describing how they told them apart is describing a memory. Treat every mid-trend gap as a runaway, put the invalidation below it, and let subsequent sessions reclassify it.
7. **Waiting for the textbook confirming candle.** By the time the long white candle that completes a rising three methods exists, the move has already started without you. **"In formation" is the permanent condition; the confirmed pattern is a historical artefact.**
8. **Fitting the volume slope against dates instead of bar numbers.** A weekend then registers as a period of volume decay. It produces a plausible number and a wrong answer, and nothing crashes.
9. **Measuring the pause low on a circuit-limited session.** If a bar printed at the daily limit, the low is where the exchange stopped sellers, not where sellers stopped. Your invalidation then sits under an artificial floor and gets violated on the open when pressure clears.
10. **Treating the measured move as a projection.** It is an assumption — that the second leg travels as far as the first — and it is the weakest link in the chain. Its virtue is being stated, not being right.
11. **Trading a continuation pattern in a market where the regulator can reset the trend.** Floor prices, margin-rule amendments and sectoral directives end processes between sessions. A continuation is a bet on a process persisting; size accordingly.`,
      bn: `১. **রেকর্ড-ডেট ক্যালেন্ডার না দেখে একটি গ্যাপ পড়া।** ১০% স্টক ডিভিডেন্ড দাম যান্ত্রিকভাবে ৯.০৯% সরায়। ১০ টাকার ইমপালস লেগে তা শূন্য থেকে ৩৩% রিট্রেসমেন্টের বেশিরভাগ তৈরি করে। **এই একটি বাদ পড়া এই অধ্যায়ের যেকোনো প্যাটার্ন যা আয় করাবে তার চেয়ে বেশি খরচ করাবে।**
২. **নিচ/উপর ভলিউম অনুপাত ব্যবহার করা।** এটি স্বজ্ঞাত ও বারের ক্রমের সঙ্গে জড়িয়ে যায়, যেহেতু নিচের বারগুলো সাধারণত আগে আসে যখন ভলিউম তখনো উঁচু। এটি সুস্থ ক্ষেত্রে ১.৪৭ (আপাতদৃষ্টিতে অসুস্থ) আর ব্যর্থ ক্ষেত্রে ০.৯০ (আপাতদৃষ্টিতে সুস্থ) পড়েছে — **দুবারই ভুল চিহ্ন।** ঢাল ব্যবহার করুন।
৩. **ইনভ্যালিডেশন দাম গণনার আগে পজিশনের আকার ঠিক করা।** ঐ ক্রমে করুন আর দেখবেন আপনি ইতিমধ্যে বেছে নেওয়া একটি আকারকে সমর্থন করে এমন স্টপ খুঁজছেন। ইনভ্যালিডেশন আকারের একটি উপাদান, কখনো উল্টো নয়।
৪. **৬১.৮%-এর বেশি রিট্রেসমেন্টকে দুর্বল প্যাটার্ন গণ্য করা।** এটি দুর্বল নয়, বাতিল। যে চলাচল তার লাভের দুই-তৃতীয়াংশ ছেড়ে দেয় সে বিরতি নিচ্ছিল না।
৫. **নিয়োজিত পুঁজিকে ঝুঁকিতে থাকা পুঁজির সঙ্গে গুলিয়ে ফেলা।** উদাহরণের ট্রেডে ইকুইটির ১% ঝুঁকি — ৫,০০০ টাকা — অথচ নিয়োজিত ১৪.৪%। এ দুটি সংখ্যা মিলিয়ে ফেলাই হিসাব তিনটি পজিশনে নীরবে অতিকেন্দ্রীভূত হওয়ার পথ।
৬. **বাস্তব সময়ে রানঅ্যাওয়ে ও এক্সহসশন গ্যাপ আলাদা করার দাবি করা।** যেদিন ছাপা হয় সেদিন এরা অভিন্ন। যিনি বর্ণনা করছেন কীভাবে আলাদা করলেন, তিনি একটি স্মৃতি বর্ণনা করছেন। ট্রেন্ড-মধ্যবর্তী প্রতিটি গ্যাপকে রানঅ্যাওয়ে ধরুন, তার নিচে ইনভ্যালিডেশন বসান, আর পরবর্তী সেশনগুলোকে পুনঃশ্রেণিবদ্ধ করতে দিন।
৭. **পাঠ্যবইয়ের নিশ্চিতকারী ক্যান্ডেলের অপেক্ষা করা।** রাইজিং থ্রি মেথডস সম্পূর্ণ করা লম্বা সাদা ক্যান্ডেলটি যখন অস্তিত্বে আসে ততক্ষণে চলাচল আপনাকে ছাড়াই শুরু হয়ে গেছে। **"গঠনরত"-ই স্থায়ী অবস্থা; নিশ্চিত প্যাটার্ন একটি ঐতিহাসিক নিদর্শন।**
৮. **বার নম্বরের বদলে তারিখের বিপরীতে ভলিউমের ঢাল বসানো।** তখন সাপ্তাহিক ছুটি ভলিউম ক্ষয়ের একটি সময়কাল হিসেবে গণ্য হয়। এটি একটি বিশ্বাসযোগ্য সংখ্যা ও একটি ভুল উত্তর তৈরি করে, আর কিছুই ভাঙে না।
৯. **সার্কিট-সীমিত সেশনে বিরতির লো মাপা।** কোনো বার দৈনিক সীমায় ছাপা হলে লো হলো যেখানে এক্সচেঞ্জ বিক্রেতাদের থামিয়েছে, বিক্রেতারা যেখানে থেমেছেন তা নয়। তখন আপনার ইনভ্যালিডেশন একটি কৃত্রিম মেঝের নিচে বসে ও চাপ ছাড়া পাওয়ার সেশনের ওপেনেই লঙ্ঘিত হয়।
১০. **মেজার্ড মুভকে প্রক্ষেপণ ভাবা।** এটি একটি অনুমান — দ্বিতীয় ধাপ প্রথমটির সমান দূরত্ব যাবে — আর শৃঙ্খলের এটিই দুর্বলতম কড়ি। এর গুণ হলো এটি ঘোষিত, সঠিক নয়।
১১. **এমন বাজারে কন্টিনিউয়েশন প্যাটার্ন ট্রেড করা যেখানে নিয়ন্ত্রক ট্রেন্ড রিসেট করতে পারেন।** ফ্লোর প্রাইস, মার্জিন-বিধি সংশোধন ও খাতভিত্তিক নির্দেশনা দুই সেশনের মাঝে প্রক্রিয়া শেষ করে দেয়। কন্টিনিউয়েশন একটি প্রক্রিয়ার স্থায়িত্বের ওপর বাজি; সেই অনুযায়ী আকার নিন।`,
    },

    tips: {
      en: `- **Make the record-date check step zero, ahead of every other calculation.** It takes thirty seconds on the DSE announcements page and it is the only step in this chapter that can invalidate all the others at once.
- **Compute the invalidation price before you compute anything else about the trade.** Entry, reward-to-risk and share count all descend from it. Doing it last means reverse-engineering a stop to fit a size you already wanted.
- **Watch the slope, report the ratio, and let it embarrass itself.** Showing the down/up ratio next to the slope on both a working and a failing pattern teaches the point faster than any warning does.
- **Prefer continuation setups to reversal setups on arithmetic grounds.** The worked continuation needs a 26.57% hit rate; Chapter 28's fully confirmed morning star needed 43.75%. **The difference is structural — the pause low sits close to the breakout, while a reversal's invalidation is two or three sessions behind the entry.**
- **Write down capital committed alongside capital at risk, every time.** BDT 5,000 at risk and BDT 72,245 committed are both true and only one of them is what shows up in your concentration.
- **Accept "in formation" as the normal state and stop waiting for the textbook completion.** The confirming candle is where the move begins, not where it is announced. Trade the structure with an invalidation, or do not trade it.
- **Treat every mid-trend gap as a runaway until proven otherwise.** You cannot tell it from an exhaustion gap on the day, so the honest procedure is to assume continuation, place the stop below the gap, and let the market reclassify it.
- **Check whether any consolidation bar printed at the circuit limit before trusting the pause low.** If one did, your invalidation is sitting under an administered floor and is not a real level. Chapter 26's flag column is the tool.
- **Halve your size when the trend depends on a regulatory status quo.** Floor-price regimes, margin-rule changes and sectoral directives end trends between sessions, and no chart gives notice of them.`,
      bn: `- **রেকর্ড-ডেট যাচাইকে ধাপ শূন্য করুন, বাকি প্রতিটি গণনার আগে।** ডিএসই ঘোষণার পাতায় ত্রিশ সেকেন্ড লাগে আর এই অধ্যায়ের এটিই একমাত্র ধাপ যা বাকি সবগুলোকে একসঙ্গে বাতিল করতে পারে।
- **ট্রেড সম্পর্কে অন্য কিছু গণনার আগে ইনভ্যালিডেশন দাম গণনা করুন।** প্রবেশ, পুরস্কার-ঝুঁকি ও শেয়ার সংখ্যা সবই তা থেকে নামে। শেষে করার অর্থ ইতিমধ্যে চাওয়া একটি আকারে মেলাতে একটি স্টপ উল্টো-প্রকৌশল করা।
- **ঢাল দেখুন, অনুপাত জানান, আর একে নিজেকেই বিব্রত করতে দিন।** একটি কার্যকর ও একটি ব্যর্থ প্যাটার্ন দুটিতেই ঢালের পাশে নিচ/উপর অনুপাত দেখানো যেকোনো সতর্কবার্তার চেয়ে দ্রুত কথাটি শেখায়।
- **পাটিগাণিতিক কারণে রিভার্সাল সেটআপের চেয়ে কন্টিনিউয়েশন সেটআপ পছন্দ করুন।** উদাহরণের কন্টিনিউয়েশনে ২৬.৫৭% হিট রেট দরকার; অধ্যায় ২৮-এর সম্পূর্ণ নিশ্চিত মর্নিং স্টারে দরকার ছিল ৪৩.৭৫%। **পার্থক্যটি কাঠামোগত — বিরতির লো ব্রেকআউটের কাছে বসে, যেখানে রিভার্সালের ইনভ্যালিডেশন প্রবেশের দুই বা তিন সেশন পেছনে।**
- **প্রতিবার ঝুঁকিতে থাকা পুঁজির পাশে নিয়োজিত পুঁজি লিখুন।** ৫,০০০ টাকা ঝুঁকিতে ও ৭২,২৪৫ টাকা নিয়োজিত — দুটোই সত্য আর কেবল একটিই আপনার কেন্দ্রীভবনে দেখা যায়।
- **"গঠনরত"-কে স্বাভাবিক অবস্থা হিসেবে মেনে নিন ও পাঠ্যবইয়ের সমাপ্তির অপেক্ষা বন্ধ করুন।** নিশ্চিতকারী ক্যান্ডেল যেখানে চলাচল শুরু হয়, ঘোষিত হয় সেখানে নয়। একটি ইনভ্যালিডেশনসহ কাঠামোটি ট্রেড করুন, নয়তো করবেন না।
- **প্রমাণ না হওয়া পর্যন্ত ট্রেন্ড-মধ্যবর্তী প্রতিটি গ্যাপকে রানঅ্যাওয়ে ধরুন।** ঐ দিনে আপনি একে এক্সহসশন গ্যাপ থেকে আলাদা করতে পারবেন না, তাই সৎ প্রক্রিয়া হলো ধারাবাহিকতা ধরে নেওয়া, গ্যাপের নিচে স্টপ বসানো, আর বাজারকে পুনঃশ্রেণিবদ্ধ করতে দেওয়া।
- **বিরতির লো বিশ্বাস করার আগে দেখুন কোনো কনসলিডেশন বার সার্কিট সীমায় ছাপা হয়েছে কি না।** হয়ে থাকলে আপনার ইনভ্যালিডেশন একটি প্রশাসিত মেঝের নিচে বসে আছে ও তা প্রকৃত স্তর নয়। অধ্যায় ২৬-এর চিহ্ন কলামই হাতিয়ার।
- **ট্রেন্ড যখন একটি নিয়ন্ত্রক স্থিতাবস্থার ওপর নির্ভরশীল তখন আকার অর্ধেক করুন।** ফ্লোর-প্রাইস ব্যবস্থা, মার্জিন-বিধি পরিবর্তন ও খাতভিত্তিক নির্দেশনা দুই সেশনের মাঝে ট্রেন্ড শেষ করে, আর কোনো চার্ট তার নোটিশ দেয় না।`,
    },

    exercises: {
      en: `1. Build the §29.6 sheet. Enter the healthy pause and confirm B18 = 33.0, B26 = −200, B30 = 1.47, B34 = 48.45, B40 = 2.76 and B46 = 1,388.
2. Enter the failed pause from §29.5 into the same sheet. Confirm the verdict flips to EXIT, and record how much the risk per share and the break-even win rate changed.
3. Set B50 to 1 on the healthy pause. What does the verdict become, and why does it override a pattern that passes every other test?
4. Find a DSE name that went ex-bonus in the last year. Chart the sessions around the record date on unadjusted prices, then on adjusted prices. How large is the gap that disappears?
5. Pull 250 sessions of a trending DSE name. Identify every pause of three to seven bars following a move of at least 8%. For each, compute δ and β. How many have δ ≤ 38.2% and β < 0?
6. For each pause in exercise 5, record whether the trend resumed or the pause low was breached. What fraction of the shallow-and-quiet pauses continued? Compare it to 26.57%.
7. Compute ω for every pause in exercise 5. How often does ω agree with β on the direction of the verdict? Report the disagreement rate.
8. Take one pause and recompute β using calendar dates instead of bar numbers. How much does the slope change across a window containing a weekend and a public holiday?
9. For the healthy setup, recompute the position size at a 0.5%, 1% and 2% risk budget. At which level does capital committed exceed 25% of equity, and is that acceptable to you?
10. Find a mid-trend gap in your data. Classify it in real time using only information available on the day, then look at what followed. Were you right, and could you have been?
11. In three sentences, write down what the measured-move target assumes and why you accept it. Keep it with the sheet.`,
      bn: `১. §২৯.৬-এর শিট তৈরি করুন। সুস্থ বিরতিটি বসান ও নিশ্চিত করুন B18 = ৩৩.০, B26 = −২০০, B30 = ১.৪৭, B34 = ৪৮.৪৫, B40 = ২.৭৬ ও B46 = ১,৩৮৮।
২. একই শিটে §২৯.৫-এর ব্যর্থ বিরতিটি বসান। রায় EXIT-এ উল্টে যায় তা নিশ্চিত করুন, আর শেয়ারপ্রতি ঝুঁকি ও ব্রেক-ইভেন উইন রেট কতটা বদলাল লিপিবদ্ধ করুন।
৩. সুস্থ বিরতিতে B50 = ১ করুন। রায় কী হয়, আর যে প্যাটার্ন বাকি প্রতিটি পরীক্ষা পার করে তাকে এটি কেন অগ্রাহ্য করে?
৪. গত বছরে এক্স-বোনাস হয়েছে এমন একটি ডিএসই নাম খুঁজুন। রেকর্ড ডেটের আশপাশের সেশনগুলো অসমন্বিত দামে, তারপর সমন্বিত দামে আঁকুন। যে গ্যাপটি অদৃশ্য হয় তা কত বড়?
৫. একটি ট্রেন্ডরত ডিএসই নামের ২৫০টি সেশন নিন। অন্তত ৮% চলাচলের পরের তিন থেকে সাত বারের প্রতিটি বিরতি শনাক্ত করুন। প্রতিটির জন্য δ ও β গণনা করুন। কতগুলোর δ ≤ ৩৮.২% ও β < ০?
৬. অনুশীলন ৫-এর প্রতিটি বিরতির জন্য লিপিবদ্ধ করুন ট্রেন্ড পুনরায় শুরু হয়েছিল না বিরতির লো ভেঙেছিল। অগভীর-ও-শান্ত বিরতিগুলোর কত ভগ্নাংশ চলমান থেকেছে? ২৬.৫৭%-এর সঙ্গে তুলনা করুন।
৭. অনুশীলন ৫-এর প্রতিটি বিরতির জন্য ω গণনা করুন। রায়ের দিক নিয়ে ω কতবার β-র সঙ্গে একমত হয়? অমতের হার জানান।
৮. একটি বিরতি নিয়ে বার নম্বরের বদলে পঞ্জিকা তারিখ দিয়ে β পুনর্গণনা করুন। একটি সাপ্তাহিক ছুটি ও একটি সরকারি ছুটিসহ জানালায় ঢাল কতটা বদলায়?
৯. সুস্থ সেটআপের জন্য ০.৫%, ১% ও ২% ঝুঁকি বাজেটে পজিশনের আকার পুনর্গণনা করুন। কোন স্তরে নিয়োজিত পুঁজি ইকুইটির ২৫% ছাড়ায়, আর তা কি আপনার কাছে গ্রহণযোগ্য?
১০. আপনার ডেটায় একটি ট্রেন্ড-মধ্যবর্তী গ্যাপ খুঁজুন। কেবল ঐ দিনে উপলব্ধ তথ্য দিয়ে বাস্তব সময়ে একে শ্রেণিবদ্ধ করুন, তারপর দেখুন পরে কী হলো। আপনি কি ঠিক ছিলেন, আর আদৌ হতে পারতেন কি?
১১. তিন বাক্যে লিখুন মেজার্ড-মুভ লক্ষ্য কী ধরে নেয় ও কেন আপনি তা মানেন। শিটের সঙ্গে রেখে দিন।`,
    },

    summary: {
      en: `- **A continuation pattern is a bet that a process persists.** The named forms — rising and falling three methods, tasuki gaps, separating lines, side-by-side white lines, mat hold — are one idea in different hats: a strong move, a small quiet drift that does not go too far back, then resumption.
- **Two measurements of the pause, and one price that voids it.** Depth $\\delta$ against the 38.2/50/61.8 reference levels, volume slope $\\beta$ across the drift, and the invalidation price below the pause low. Everything else is naming.
- **Beyond 61.8% retracement the continuation reading is void, not weakened.** A move that surrenders two-thirds of its gain was not pausing. The Fibonacci levels have no theoretical standing — their value is that they are fixed in advance and identical for everybody.
- **Use the slope, not the down/up volume ratio.** $\\omega$ is intuitive and confounded with bar ordering, since the down bars usually come first while volume is still elevated. **It read 1.47 — apparently unhealthy — on the healthy case and 0.90 — apparently healthy — on the failed one. Wrong sign both times.**
- The worked case: impulse 42 → 52, five-bar pause to 48.70, so **$\\delta = 33.0\\%$ (shallow), $\\phi = 0.53\\times$, $\\beta = -200$ per bar (calming).** Verdict HOLD.
- **The invalidation price is computed first and everything descends from it.** $X = 48.45$, entry 52.05, risk BDT 3.60, measured-move target 62.00, **$R{:}R = 2.76$ and a break-even win rate of 26.57%.** At 1% risk on BDT 500,000 that is 1,388 shares — **committing 14.4% of equity to risk 1% of it, and those are different numbers.**
- **Continuation setups are arithmetically cheaper than reversals.** 26.57% here against Chapter 28's 43.75% for a fully confirmed morning star. The reason is structural: the pause low sits close to the breakout, while a reversal's invalidation is two or three sessions behind the entry.
- **"In formation" is the permanent condition.** By the time the confirming long white candle exists, the move has started without you. You never own the completed pattern; you own the invalidation level.
- **A runaway gap and an exhaustion gap are identical on the day they print.** Treat every mid-trend gap as a runaway, place the stop below it, and let subsequent sessions reclassify it. Anyone claiming to have distinguished them live is describing a memory.
- **Three DSE realities come before the analysis, not after it.** Record dates create mechanical gaps — a 10% bonus moves price 9.09%, most of a 33% retracement on a BDT 10 leg. Circuit limits mean a pause low may be where the exchange stopped sellers rather than where sellers stopped. And regulatory announcements end trends between sessions.
- **Discipline established:** check the record-date calendar as step zero, compute the invalidation before the entry, size from the stop and never the reverse, report the ratio but let only the slope vote, and record capital committed beside capital at risk.`,
      bn: `- **কন্টিনিউয়েশন প্যাটার্ন একটি প্রক্রিয়ার স্থায়িত্বের ওপর বাজি।** নামযুক্ত রূপগুলো — রাইজিং ও ফলিং থ্রি মেথডস, তাসুকি গ্যাপ, সেপারেটিং লাইনস, সাইড-বাই-সাইড হোয়াইট লাইনস, ম্যাট হোল্ড — ভিন্ন পোশাকে একটিই ধারণা: একটি শক্তিশালী চলাচল, একটি ছোট শান্ত গড়ান যা বেশি পিছিয়ে যায় না, তারপর পুনরায় শুরু।
- **বিরতির দুটি পরিমাপ, আর একটি দাম যা একে বাতিল করে।** ৩৮.২/৫০/৬১.৮ রেফারেন্স স্তরের বিপরীতে গভীরতা $\\delta$, গড়ানজুড়ে ভলিউমের ঢাল $\\beta$, আর বিরতির লো-র নিচে ইনভ্যালিডেশন দাম। বাকি সব নামকরণ।
- **৬১.৮% রিট্রেসমেন্টের পরে ধারাবাহিকতার পাঠ বাতিল, দুর্বল নয়।** যে চলাচল তার লাভের দুই-তৃতীয়াংশ ছেড়ে দেয় সে বিরতি নিচ্ছিল না। ফিবোনাচি স্তরগুলোর কোনো তাত্ত্বিক ভিত্তি নেই — এদের মূল্য এই যে এগুলো আগেই স্থির ও সবার জন্য অভিন্ন।
- **ঢাল ব্যবহার করুন, নিচ/উপর ভলিউম অনুপাত নয়।** $\\omega$ স্বজ্ঞাত ও বারের ক্রমের সঙ্গে জড়িয়ে যায়, যেহেতু নিচের বারগুলো সাধারণত আগে আসে যখন ভলিউম তখনো উঁচু। **সুস্থ ক্ষেত্রে এটি ১.৪৭ — আপাতদৃষ্টিতে অসুস্থ — আর ব্যর্থ ক্ষেত্রে ০.৯০ — আপাতদৃষ্টিতে সুস্থ — পড়েছে। দুবারই ভুল চিহ্ন।**
- উদাহরণ: ইমপালস ৪২ → ৫২, পাঁচ-বারের বিরতি ৪৮.৭০ পর্যন্ত, অর্থাৎ **$\\delta = 33.0\\%$ (অগভীর), $\\phi = 0.53\\times$, $\\beta = -200$ প্রতি বার (শান্ত হচ্ছে)।** রায় HOLD।
- **ইনভ্যালিডেশন দাম আগে গণিত হয় আর সবকিছু তা থেকে নামে।** $X = 48.45$, প্রবেশ ৫২.০৫, ঝুঁকি ৩.৬০ টাকা, মেজার্ড-মুভ লক্ষ্য ৬২.০০, **$R{:}R = 2.76$ ও ২৬.৫৭% ব্রেক-ইভেন উইন রেট।** ৫,০০,০০০ টাকায় ১% ঝুঁকিতে তা ১,৩৮৮ শেয়ার — **১% ঝুঁকি নিতে ইকুইটির ১৪.৪% নিয়োজিত, আর এ দুটি ভিন্ন সংখ্যা।**
- **কন্টিনিউয়েশন সেটআপ রিভার্সালের চেয়ে পাটিগাণিতিকভাবে সস্তা।** এখানে ২৬.৫৭%, অধ্যায় ২৮-এর সম্পূর্ণ নিশ্চিত মর্নিং স্টারের ৪৩.৭৫%-এর বিপরীতে। কারণটি কাঠামোগত: বিরতির লো ব্রেকআউটের কাছে বসে, যেখানে রিভার্সালের ইনভ্যালিডেশন প্রবেশের দুই বা তিন সেশন পেছনে।
- **"গঠনরত"-ই স্থায়ী অবস্থা।** নিশ্চিতকারী লম্বা সাদা ক্যান্ডেলটি যখন অস্তিত্বে আসে ততক্ষণে চলাচল আপনাকে ছাড়াই শুরু হয়ে গেছে। আপনি কখনো সম্পূর্ণ প্যাটার্নের মালিক হন না; আপনি ইনভ্যালিডেশন স্তরের মালিক।
- **যেদিন ছাপা হয় সেদিন রানঅ্যাওয়ে ও এক্সহসশন গ্যাপ অভিন্ন।** ট্রেন্ড-মধ্যবর্তী প্রতিটি গ্যাপকে রানঅ্যাওয়ে ধরুন, তার নিচে স্টপ বসান, আর পরবর্তী সেশনগুলোকে পুনঃশ্রেণিবদ্ধ করতে দিন। যিনি বাস্তব সময়ে আলাদা করার দাবি করেন তিনি একটি স্মৃতি বর্ণনা করছেন।
- **তিনটি ডিএসই বাস্তবতা বিশ্লেষণের পরে নয়, আগে আসে।** রেকর্ড ডেট যান্ত্রিক গ্যাপ তৈরি করে — ১০% বোনাস দাম ৯.০৯% সরায়, ১০ টাকার লেগে ৩৩% রিট্রেসমেন্টের বেশিরভাগ। সার্কিট সীমার অর্থ বিরতির লো হতে পারে যেখানে এক্সচেঞ্জ বিক্রেতাদের থামিয়েছে, বিক্রেতারা যেখানে থেমেছেন তা নয়। আর নিয়ন্ত্রক ঘোষণা দুই সেশনের মাঝে ট্রেন্ড শেষ করে।
- **প্রতিষ্ঠিত শৃঙ্খলা:** ধাপ শূন্য হিসেবে রেকর্ড-ডেট ক্যালেন্ডার দেখুন, প্রবেশের আগে ইনভ্যালিডেশন গণনা করুন, স্টপ থেকে আকার নিন কখনো উল্টো নয়, অনুপাত জানান কিন্তু কেবল ঢালকে ভোট দিতে দিন, আর ঝুঁকিতে থাকা পুঁজির পাশে নিয়োজিত পুঁজি লিপিবদ্ধ করুন।`,
    },
  },

  interview: [
    {
      q: {
        en: 'How do you tell a healthy consolidation from a failing rally while it is happening?',
        bn: 'একটি সুস্থ কনসলিডেশন ও একটি ব্যর্থ হতে থাকা উত্থান ঘটতে থাকা অবস্থায় আপনি কীভাবে আলাদা করবেন?',
      },
      a: {
        en: 'With two measurements, and I would be upfront that neither is a forecast. The first is depth: how much of the impulse leg has been given back, measured against the thirty-eight point two, fifty and sixty-one point eight levels. Below thirty-eight point two is a shallow give-back consistent with a pause; beyond sixty-one point eight the continuation reading is void rather than merely weak, because a move that surrenders two-thirds of its gain was not resting. The second is the volume slope through the drift — an ordinary least squares fit of volume against bar number. A healthy pause gets quieter, so the slope is negative; supply dried up rather than arrived. A pause where volume is climbing means the market is doing more work while going nowhere, which is distribution wearing the costume of consolidation. On the worked example those read thirty-three percent and minus two hundred thousand shares per bar, against a failed case at seventy-two percent and plus two hundred and eighty. What I would stress is that neither number predicts anything. They describe the pause, and the actual decision is carried by the invalidation price — a quarter-taka below the pause low — which is the level at which I stop believing my own reading.',
        bn: 'দুটি পরিমাপ দিয়ে, আর আমি সরাসরি বলব কোনোটিই পূর্বাভাস নয়। প্রথমটি গভীরতা: ইমপালস লেগের কতটা ফিরিয়ে দেওয়া হয়েছে, আটত্রিশ দশমিক দুই, পঞ্চাশ ও একষট্টি দশমিক আট স্তরের বিপরীতে মাপা। আটত্রিশ দশমিক দুইয়ের নিচে একটি অগভীর ফেরত যা বিরতির সঙ্গে সঙ্গতিপূর্ণ; একষট্টি দশমিক আটের পরে ধারাবাহিকতার পাঠ কেবল দুর্বল নয়, বাতিল, কারণ যে চলাচল তার লাভের দুই-তৃতীয়াংশ ছেড়ে দেয় সে বিশ্রাম নিচ্ছিল না। দ্বিতীয়টি গড়ানজুড়ে ভলিউমের ঢাল — বার নম্বরের বিপরীতে ভলিউমের একটি সাধারণ ন্যূনতম-বর্গ সন্নিবেশ। সুস্থ বিরতি শান্ত হয়, তাই ঢাল ঋণাত্মক; সরবরাহ শুকিয়েছে, আসেনি। যে বিরতিতে ভলিউম বাড়ছে সেখানে বাজার কোথাও না গিয়ে বেশি কাজ করছে, যা কনসলিডেশনের পোশাক পরা বিতরণ। উদাহরণে সেগুলো পড়েছে তেত্রিশ শতাংশ ও প্রতি বারে বিয়োগ দুই লাখ শেয়ার, আর ব্যর্থ ক্ষেত্রে বাহাত্তর শতাংশ ও যোগ দুই লাখ আশি হাজার। আমি জোর দেব যে কোনো সংখ্যাই কিছু ভবিষ্যদ্বাণী করে না। এরা বিরতিটি বর্ণনা করে, আর প্রকৃত সিদ্ধান্ত বহন করে ইনভ্যালিডেশন দাম — বিরতির লো-র সিকি টাকা নিচে — যে স্তরে আমি নিজের পাঠে বিশ্বাস রাখা বন্ধ করি।',
      },
    },
    {
      q: {
        en: 'Why do you reject the down-bar versus up-bar volume ratio?',
        bn: 'নিচের-বার বনাম উপরের-বার ভলিউম অনুপাত আপনি কেন বাতিল করেন?',
      },
      a: {
        en: 'Because it is confounded with the ordering of the bars rather than measuring who was transacting, and on both of my worked examples it returns the wrong sign. In a typical pause the down bars come first, while volume is still elevated from the impulse, and the up bars come later once the drift has quietened. So the ratio ends up encoding when the bars happened rather than what they meant. On the healthy pause it reads one point four seven, which naively says down bars carried half again the volume of up bars — a distribution warning — on a pattern that was in fact continuing. On the failed pause it reads zero point nine zero, which naively reads as healthy, except the single up bar was a heavy-volume failed bounce, which is the opposite of reassuring. Two cases are an illustration and not evidence, and I would not overclaim from them, but the mechanism is clear enough to act on. The slope does not have this problem because it asks the right question directly: is the market calming down or heating up across the pause. So I still compute the ratio and display it, because people ask for it and because watching it fail alongside the slope teaches the point faster than a warning does, but I give it no vote in the verdict.',
        bn: 'কারণ এটি কে লেনদেন করছিলেন তা না মেপে বারের ক্রমের সঙ্গে জড়িয়ে যায়, আর আমার দুটি উদাহরণেই এটি ভুল চিহ্ন ফেরত দেয়। সাধারণ বিরতিতে নিচের বারগুলো আগে আসে, যখন ভলিউম তখনো ইমপালস থেকে উঁচু, আর উপরের বারগুলো পরে আসে যখন গড়ান শান্ত হয়েছে। তাই অনুপাতটি শেষ পর্যন্ত বারগুলোর অর্থ নয়, সেগুলো কখন ঘটেছে তা সংকেতবদ্ধ করে। সুস্থ বিরতিতে এটি এক দশমিক চার সাত পড়ে, যা সরলভাবে বলে নিচের বারগুলো উপরের বারের দেড় গুণ ভলিউম বহন করেছে — একটি বিতরণের সতর্কতা — এমন একটি প্যাটার্নে যা আসলে চলমান ছিল। ব্যর্থ বিরতিতে এটি শূন্য দশমিক নয় শূন্য পড়ে, যা সরলভাবে সুস্থ পড়া হয়, কেবল একমাত্র উপরের বারটি ছিল একটি ভারী-ভলিউমের ব্যর্থ লাফ, যা আশ্বস্তকরের বিপরীত। দুটি ক্ষেত্র একটি দৃষ্টান্ত, প্রমাণ নয়, আর আমি এ থেকে বাড়তি দাবি করব না, কিন্তু প্রক্রিয়াটি কাজ করার মতো যথেষ্ট স্পষ্ট। ঢালের এই সমস্যা নেই কারণ তা সরাসরি সঠিক প্রশ্নটি করে: বিরতিজুড়ে বাজার শান্ত হচ্ছে না উত্তপ্ত হচ্ছে। তাই আমি অনুপাতটি এখনো গণনা ও প্রদর্শন করি, কারণ মানুষ তা চান এবং ঢালের পাশে একে ব্যর্থ হতে দেখা সতর্কবার্তার চেয়ে দ্রুত কথাটি শেখায়, কিন্তু রায়ে আমি একে কোনো ভোট দিই না।',
      },
    },
    {
      q: {
        en: 'Why compute the invalidation price before the entry?',
        bn: 'প্রবেশের আগে ইনভ্যালিডেশন দাম কেন গণনা করবেন?',
      },
      a: {
        en: 'Because everything else in the trade descends from it, including the only decision that actually commits capital. The invalidation is a quarter-taka below the pause low, forty-eight forty-five in the worked case. Subtract it from the entry at fifty-two oh five and you have three taka sixty of risk per share. Divide the risk budget — one percent of five lakh, so five thousand taka — by that, and you get one thousand three hundred and eighty-eight shares. The pattern never told me how much to buy; the price at which the pattern is wrong did. If I reverse the order and pick a size first, what happens in practice is that I go looking for a stop that justifies the size I already wanted, and the stop ends up wherever it needs to be rather than where the structure says. That is the single most common way a disciplined-looking process becomes an undisciplined one, and it is invisible afterwards because the spreadsheet still has a stop in it. I would add one thing people miss: risking one percent of equity here commits fourteen point four percent of it. Those are different numbers, and only the second one shows up in your concentration when three positions go wrong together.',
        bn: 'কারণ ট্রেডের বাকি সবকিছু তা থেকে নামে, যার মধ্যে সেই একমাত্র সিদ্ধান্ত যা সত্যিই পুঁজি নিয়োগ করে। ইনভ্যালিডেশন বিরতির লো-র সিকি টাকা নিচে, উদাহরণে আটচল্লিশ পঁয়তাল্লিশ। বায়ান্ন শূন্য পাঁচের প্রবেশ থেকে তা বিয়োগ করুন আর শেয়ারপ্রতি তিন টাকা ষাট ঝুঁকি পাবেন। ঝুঁকি বাজেট — পাঁচ লাখের এক শতাংশ, অর্থাৎ পাঁচ হাজার টাকা — একে দিয়ে ভাগ করুন, পাবেন এক হাজার তিনশো আটাশি শেয়ার। প্যাটার্ন কখনো বলেনি কত কিনতে হবে; প্যাটার্নটি যে দামে ভুল সেটিই বলেছে। ক্রম উল্টে আগে একটি আকার বেছে নিলে বাস্তবে যা হয় তা হলো আমি ইতিমধ্যে চাওয়া আকারকে সমর্থন করে এমন স্টপ খুঁজতে যাই, আর স্টপটি কাঠামো যেখানে বলে সেখানে নয়, যেখানে দরকার সেখানেই গিয়ে বসে। সুশৃঙ্খল-দেখতে একটি প্রক্রিয়ার অসুশৃঙ্খল হয়ে ওঠার সবচেয়ে সাধারণ পথ এটিই, আর পরে তা অদৃশ্য কারণ স্প্রেডশিটে তখনো একটি স্টপ আছে। একটি কথা যোগ করব যা মানুষ বাদ দেন: এখানে ইকুইটির এক শতাংশ ঝুঁকি নিতে তার চোদ্দ দশমিক চার শতাংশ নিয়োজিত হয়। এ দুটি ভিন্ন সংখ্যা, আর তিনটি পজিশন একসঙ্গে খারাপ হলে কেবল দ্বিতীয়টিই আপনার কেন্দ্রীভবনে দেখা যায়।',
      },
    },
    {
      q: {
        en: 'Your continuation setup needs a 26.57% win rate and the previous chapter\'s reversal needed 43.75%. Why the difference?',
        bn: 'আপনার কন্টিনিউয়েশন সেটআপে ২৬.৫৭% উইন রেট দরকার আর আগের অধ্যায়ের রিভার্সালে দরকার ছিল ৪৩.৭৫%। পার্থক্য কেন?',
      },
      a: {
        en: 'It is structural rather than a property of the particular examples, and it is the strongest practical argument for preferring continuation setups. The break-even win rate is one over one plus the reward-to-risk ratio, so it is driven almost entirely by how far the stop sits from the entry. In a continuation pattern the invalidation is the pause low, and the pause by definition happens immediately before the breakout you are entering on — three taka sixty away in the worked case. In a reversal pattern the invalidation is the extreme of the pattern itself, which on a three-candle star sits two or three sessions behind the confirming close you entered on, so the stop is four taka twenty and the risk is nearly eight percent of the entry price. Same target logic, very different denominator. What that means in practice is that reversal setups have to be right substantially more often to earn the same money, and a trader who does not compute the break-even rate will never see this, because both setups look equally convincing on the chart. I would add the caveat that this comparison holds for these two specific target choices — a measured move against a prior swing high — and changing the target changes the ranking, which is exactly why the number should be computed per setup rather than assumed by pattern family.',
        bn: 'এটি নির্দিষ্ট উদাহরণগুলোর ধর্ম নয়, কাঠামোগত, আর কন্টিনিউয়েশন সেটআপ পছন্দ করার সবচেয়ে শক্ত ব্যবহারিক যুক্তি এটিই। ব্রেক-ইভেন উইন রেট হলো এক ভাগ এক যোগ পুরস্কার-ঝুঁকি অনুপাত, তাই এটি প্রায় সম্পূর্ণভাবে নির্ধারিত হয় স্টপ প্রবেশ থেকে কত দূরে বসে তা দিয়ে। কন্টিনিউয়েশন প্যাটার্নে ইনভ্যালিডেশন হলো বিরতির লো, আর বিরতিটি সংজ্ঞানুসারেই আপনি যে ব্রেকআউটে ঢুকছেন তার ঠিক আগে ঘটে — উদাহরণে তিন টাকা ষাট দূরে। রিভার্সাল প্যাটার্নে ইনভ্যালিডেশন প্যাটার্নটিরই চরম বিন্দু, যা তিন-ক্যান্ডেলের স্টারে আপনি যে নিশ্চিতকারী ক্লোজে ঢুকেছেন তার দুই বা তিন সেশন পেছনে বসে, তাই স্টপ চার টাকা কুড়ি আর ঝুঁকি প্রবেশ দামের প্রায় আট শতাংশ। একই লক্ষ্য-যুক্তি, খুব ভিন্ন হর। বাস্তবে এর অর্থ রিভার্সাল সেটআপকে একই টাকা আয় করতে উল্লেখযোগ্যভাবে বেশিবার ঠিক হতে হয়, আর যে ট্রেডার ব্রেক-ইভেন হার গণনা করেন না তিনি এটি কখনো দেখবেন না, কারণ চার্টে দুটি সেটআপই সমান বিশ্বাসযোগ্য দেখায়। একটি সতর্কতা যোগ করব যে এই তুলনা এই দুটি নির্দিষ্ট লক্ষ্য-পছন্দের জন্য টেকে — একটি মেজার্ড মুভ বনাম একটি আগের সুইং হাই — আর লক্ষ্য বদলালে ক্রম বদলায়, আর ঠিক সেজন্যই সংখ্যাটি প্যাটার্ন-পরিবার ধরে অনুমান না করে প্রতিটি সেটআপে গণনা করা উচিত।',
      },
    },
    {
      q: {
        en: 'You see a gap in the middle of a trend. Is it a runaway or an exhaustion gap?',
        bn: 'একটি ট্রেন্ডের মাঝে আপনি একটি গ্যাপ দেখলেন। এটি কি রানঅ্যাওয়ে না এক্সহসশন গ্যাপ?',
      },
      a: {
        en: 'On the day it prints, I cannot tell, and I would treat anybody who says otherwise as describing a memory rather than a method. The two are geometrically identical — a gap in the direction of the trend, after the trend has been running — and the only thing that distinguishes them is what happens next, which by definition is not available yet. The names are assigned retrospectively and then the retrospective assignment is presented as though it had been a real-time judgement. What I actually do is treat every mid-trend gap as a runaway, because that is the assumption that produces a usable plan: I place the invalidation below the gap, take the position, and let the subsequent sessions reclassify it for me. If the gap holds, it was a runaway and I am in a trend with a defined stop. If price closes back through it, it was an exhaustion gap, I am out at a known loss, and I learned the classification the only way it can honestly be learned. On the DSE I would add a prior step: before reading the gap as anything at all, check the record-date calendar, because a ten percent stock dividend produces a nine percent downward gap that has nothing whatever to do with sentiment and looks exactly like a breakaway.',
        bn: 'যেদিন এটি ছাপা হয় সেদিন আমি বলতে পারি না, আর যিনি অন্য কিছু বলেন তাঁকে আমি একটি পদ্ধতি নয়, একটি স্মৃতি বর্ণনাকারী ধরব। দুটি জ্যামিতিকভাবে অভিন্ন — ট্রেন্ডের দিকে একটি গ্যাপ, ট্রেন্ড কিছুদিন চলার পর — আর একমাত্র যা এদের আলাদা করে তা হলো এর পরে কী হয়, যা সংজ্ঞানুসারেই এখনো উপলব্ধ নয়। নামগুলো পরে আরোপিত হয় আর তারপর ঐ পরবর্তী আরোপণকে এমনভাবে উপস্থাপন করা হয় যেন তা বাস্তব সময়ের বিচার ছিল। আমি আসলে যা করি তা হলো ট্রেন্ড-মধ্যবর্তী প্রতিটি গ্যাপকে রানঅ্যাওয়ে ধরি, কারণ ঐ অনুমানটিই একটি ব্যবহারযোগ্য পরিকল্পনা তৈরি করে: আমি গ্যাপের নিচে ইনভ্যালিডেশন বসাই, পজিশন নিই, আর পরবর্তী সেশনগুলোকে আমার হয়ে একে পুনঃশ্রেণিবদ্ধ করতে দিই। গ্যাপটি টিকলে তা রানঅ্যাওয়ে ছিল আর আমি একটি সংজ্ঞায়িত স্টপসহ ট্রেন্ডে আছি। দাম ফিরে এসে তা ভেদ করে বন্ধ হলে তা এক্সহসশন গ্যাপ ছিল, আমি একটি জ্ঞাত ক্ষতিতে বাইরে, আর শ্রেণিবিভাজনটি আমি সেই একমাত্র উপায়েই শিখলাম যেভাবে সৎভাবে শেখা যায়। ডিএসই-তে আমি একটি পূর্ববর্তী ধাপ যোগ করব: গ্যাপটিকে আদৌ কিছু হিসেবে পড়ার আগে রেকর্ড-ডেট ক্যালেন্ডার দেখুন, কারণ দশ শতাংশ স্টক ডিভিডেন্ড নয় শতাংশের একটি নিম্নমুখী গ্যাপ তৈরি করে যার সঙ্গে মনোভাবের কোনো সম্পর্কই নেই আর যা হুবহু একটি ব্রেকঅ্যাওয়ের মতো দেখায়।',
      },
    },
    {
      q: {
        en: 'What is the weakest assumption in your continuation trade?',
        bn: 'আপনার কন্টিনিউয়েশন ট্রেডের দুর্বলতম অনুমান কোনটি?',
      },
      a: {
        en: 'The measured-move target, without much competition. It says the second leg will travel the same distance as the first — ten taka in the worked case, so a target of sixty-two from an entry at fifty-two oh five — and there is no mechanism that makes that true. It is a convention. The depth and volume tests at least measure something that happened; the target is a projection of something that has not. I would defend keeping it anyway, on two grounds. First, it is stated, which means it can be tested: after fifty logged trades I can ask what fraction of my continuations actually reached one times the impulse, and adjust the multiple if the answer is consistently below it. A vague instruction to sell into strength cannot be tested at all. Second, it is only one of three inputs to the break-even calculation, and it happens to be the one I can vary deliberately — shortening the target to raise the hit rate is a legitimate design choice, provided I recompute the break-even rate rather than pretending the trade improved. The honest summary is that the invalidation price is measured, the depth and slope are measured, and the target is assumed, so I hold the first three with confidence and the fourth with my hand on the exit.',
        bn: 'মেজার্ড-মুভ লক্ষ্য, খুব বেশি প্রতিদ্বন্দ্বিতা ছাড়াই। এটি বলে দ্বিতীয় ধাপ প্রথমটির সমান দূরত্ব যাবে — উদাহরণে দশ টাকা, তাই বায়ান্ন শূন্য পাঁচের প্রবেশ থেকে বাষট্টির লক্ষ্য — আর এমন কোনো প্রক্রিয়া নেই যা তা সত্য করে। এটি একটি প্রথা। গভীরতা ও ভলিউম পরীক্ষা অন্তত ঘটে যাওয়া কিছু মাপে; লক্ষ্যটি এমন কিছুর প্রক্ষেপণ যা ঘটেনি। তবুও একে রাখার পক্ষে আমি দুটি যুক্তি দেব। প্রথমত, এটি ঘোষিত, যার অর্থ একে পরীক্ষা করা যায়: পঞ্চাশটি লিপিবদ্ধ ট্রেডের পর আমি জিজ্ঞেস করতে পারি আমার কন্টিনিউয়েশনগুলোর কত ভগ্নাংশ সত্যিই ইমপালসের এক গুণে পৌঁছেছে, আর উত্তর ধারাবাহিকভাবে কম হলে গুণকটি সমন্বয় করতে পারি। "শক্তিতে বিক্রি করুন" — এই অস্পষ্ট নির্দেশ আদৌ পরীক্ষা করা যায় না। দ্বিতীয়ত, এটি ব্রেক-ইভেন গণনার তিনটি উপাদানের কেবল একটি, আর কাকতালীয়ভাবে এটিই আমি সচেতনভাবে বদলাতে পারি — হিট রেট বাড়াতে লক্ষ্য ছোট করা একটি বৈধ নকশাগত পছন্দ, যদি আমি ট্রেডটি উন্নত হয়েছে ভান না করে ব্রেক-ইভেন হার পুনর্গণনা করি। সৎ সারসংক্ষেপ হলো ইনভ্যালিডেশন দাম মাপা, গভীরতা ও ঢাল মাপা, আর লক্ষ্যটি অনুমিত, তাই প্রথম তিনটি আমি আত্মবিশ্বাসের সঙ্গে ধরি আর চতুর্থটি প্রস্থানে হাত রেখে।',
      },
    },
  ],

  quiz: [
    {
      q: {
        en: 'A retracement beyond 61.8% of the impulse leg means the continuation reading is:',
        bn: 'ইমপালস লেগের ৬১.৮%-এর বেশি রিট্রেসমেন্ট মানে ধারাবাহিকতার পাঠ:',
      },
      options: {
        en: ['Slightly weakened', 'Void', 'Unchanged', 'Strengthened'],
        bn: ['কিছুটা দুর্বল', 'বাতিল', 'অপরিবর্তিত', 'শক্তিশালী'],
      },
      answer: 1,
    },
    {
      q: {
        en: 'A healthy pause shows a volume slope that is:',
        bn: 'একটি সুস্থ বিরতিতে ভলিউমের ঢাল থাকে:',
      },
      options: {
        en: ['Positive and steep', 'Negative', 'Exactly zero', 'Irrelevant'],
        bn: ['ধনাত্মক ও খাড়া', 'ঋণাত্মক', 'ঠিক শূন্য', 'অপ্রাসঙ্গিক'],
      },
      answer: 1,
    },
    {
      q: {
        en: 'The down/up volume ratio is rejected because it is confounded with:',
        bn: 'নিচ/উপর ভলিউম অনুপাত বাতিল কারণ তা জড়িয়ে যায়:',
      },
      options: {
        en: ['Price level', 'Bar ordering', 'Market capitalisation', 'The tick size'],
        bn: ['দামের স্তর', 'বারের ক্রম', 'বাজার মূলধন', 'টিক আকার'],
      },
      answer: 1,
    },
    {
      q: {
        en: 'On the NOVOTEX healthy pause, the retracement depth is:',
        bn: 'NOVOTEX-এর সুস্থ বিরতিতে রিট্রেসমেন্ট গভীরতা:',
      },
      options: {
        en: ['26.6%', '33.0%', '53.3%', '72.0%'],
        bn: ['২৬.৬%', '৩৩.০%', '৫৩.৩%', '৭২.০%'],
      },
      answer: 1,
    },
    {
      q: {
        en: 'The position size in a continuation trade is derived from:',
        bn: 'একটি কন্টিনিউয়েশন ট্রেডে পজিশনের আকার নির্ধারিত হয়:',
      },
      options: {
        en: [
          'The pattern name',
          'The invalidation price',
          'The measured-move target',
          'The impulse volume',
        ],
        bn: [
          'প্যাটার্নের নাম থেকে',
          'ইনভ্যালিডেশন দাম থেকে',
          'মেজার্ড-মুভ লক্ষ্য থেকে',
          'ইমপালস ভলিউম থেকে',
        ],
      },
      answer: 1,
    },
    {
      q: {
        en: 'The worked continuation setup has a break-even win rate of:',
        bn: 'উদাহরণের কন্টিনিউয়েশন সেটআপের ব্রেক-ইভেন উইন রেট:',
      },
      options: {
        en: ['26.57%', '33.00%', '42.93%', '43.75%'],
        bn: ['২৬.৫৭%', '৩৩.০০%', '৪২.৯৩%', '৪৩.৭৫%'],
      },
      answer: 0,
    },
    {
      q: {
        en: 'Continuation setups typically demand a lower win rate than reversals because:',
        bn: 'কন্টিনিউয়েশন সেটআপ সাধারণত রিভার্সালের চেয়ে কম উইন রেট দাবি করে কারণ:',
      },
      options: {
        en: [
          'They occur more often',
          'The invalidation sits close to the entry',
          'They have larger targets',
          'Volume is always higher',
        ],
        bn: [
          'এগুলো বেশি ঘটে',
          'ইনভ্যালিডেশন প্রবেশের কাছে বসে',
          'এদের লক্ষ্য বড়',
          'ভলিউম সবসময় বেশি',
        ],
      },
      answer: 1,
    },
    {
      q: {
        en: 'A 10% stock dividend adjusts the share price downward by approximately:',
        bn: 'একটি ১০% স্টক ডিভিডেন্ড শেয়ারের দাম নিচের দিকে সমন্বয় করে প্রায়:',
      },
      options: {
        en: ['5.00%', '9.09%', '10.00%', '11.11%'],
        bn: ['৫.০০%', '৯.০৯%', '১০.০০%', '১১.১১%'],
      },
      answer: 1,
    },
    {
      q: {
        en: 'A runaway gap and an exhaustion gap can be distinguished:',
        bn: 'রানঅ্যাওয়ে ও এক্সহসশন গ্যাপ আলাদা করা যায়:',
      },
      options: {
        en: [
          'By volume on the gap day',
          'Only afterwards, by what follows',
          'By the size of the gap',
          'By the time of day they open',
        ],
        bn: [
          'গ্যাপের দিনের ভলিউম দিয়ে',
          'কেবল পরে, এরপর যা ঘটে তা দিয়ে',
          'গ্যাপের আকার দিয়ে',
          'দিনের কোন সময়ে খোলে তা দিয়ে',
        ],
      },
      answer: 1,
    },
    {
      q: {
        en: 'Risking 1% of a BDT 500,000 account on the worked setup commits capital of about:',
        bn: 'উদাহরণের সেটআপে ৫,০০,০০০ টাকার হিসাবের ১% ঝুঁকি নিতে নিয়োজিত পুঁজি প্রায়:',
      },
      options: {
        en: ['BDT 5,000 (1%)', 'BDT 72,245 (14.4%)', 'BDT 250,000 (50%)', 'BDT 500,000 (100%)'],
        bn: ['৫,০০০ টাকা (১%)', '৭২,২৪৫ টাকা (১৪.৪%)', '২,৫০,০০০ টাকা (৫০%)', '৫,০০,০০০ টাকা (১০০%)'],
      },
      answer: 1,
    },
  ],
};
