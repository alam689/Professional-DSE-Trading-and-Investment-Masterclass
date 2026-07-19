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
  },
};
