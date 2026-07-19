/**
 * Chapter 32 — Chart Patterns: Reversal
 * Part III, Technical Analysis.
 */

export default {
  n: 32,
  tools: [],

  excelSheet: {
    filename: 'ch32-head-and-shoulders-validator.xlsx',
    sheetName: 'H&S Validator',
    cells: [
      { cell: 'A1', v: '— Pattern Points (price, bar index) —' },
      { cell: 'A2', v: 'Left Shoulder Price' }, { cell: 'B2', v: 82.5 },
      { cell: 'A3', v: 'Left Shoulder Bar' }, { cell: 'B3', v: 12 },
      { cell: 'A4', v: 'Head Price' }, { cell: 'B4', v: 89.0 },
      { cell: 'A5', v: 'Head Bar' }, { cell: 'B5', v: 30 },
      { cell: 'A6', v: 'Right Shoulder Price' }, { cell: 'B6', v: 83.1 },
      { cell: 'A7', v: 'Right Shoulder Bar' }, { cell: 'B7', v: 46 },
      { cell: 'A8', v: 'Trough 1 Price' }, { cell: 'B8', v: 74.0 },
      { cell: 'A9', v: 'Trough 1 Bar' }, { cell: 'B9', v: 21 },
      { cell: 'A10', v: 'Trough 2 Price' }, { cell: 'B10', v: 72.2 },
      { cell: 'A11', v: 'Trough 2 Bar' }, { cell: 'B11', v: 39 },

      { cell: 'A13', v: '— Neckline —' },
      { cell: 'A14', v: 'Slope (BDT/bar)' }, { cell: 'B14', f: '(B10-B8)/(B11-B9)' },
      { cell: 'A15', v: 'Neckline at Head Bar' }, { cell: 'B15', f: 'B8+B14*(B5-B9)' },
      { cell: 'A16', v: 'Breakout Bar' }, { cell: 'B16', v: 56 },
      { cell: 'A17', v: 'Neckline at Breakout' }, { cell: 'B17', f: 'B8+B14*(B16-B9)' },
      { cell: 'A18', v: 'Slope per Bar (% of Head)' }, { cell: 'B18', f: 'ABS(B14)/B4*100' },

      { cell: 'A20', v: '— Structure Tests —' },
      { cell: 'A21', v: 'Head Prominence (%)' }, { cell: 'B21', f: '(B4-MAX(B2,B6))/MAX(B2,B6)*100' },
      { cell: 'A22', v: 'Pattern Height' }, { cell: 'B22', f: 'B4-B15' },
      { cell: 'A23', v: 'Shoulder Asymmetry (%)' }, { cell: 'B23', f: 'ABS(B2-B6)/B22*100' },
      { cell: 'A24', v: 'Left Span (bars)' }, { cell: 'B24', f: 'B5-B3' },
      { cell: 'A25', v: 'Right Span (bars)' }, { cell: 'B25', f: 'B7-B5' },
      { cell: 'A26', v: 'Time Asymmetry (%)' }, { cell: 'B26', f: 'ABS(B24-B25)/((B24+B25)/2)*100' },
      { cell: 'A27', v: 'Total Duration (bars)' }, { cell: 'B27', f: 'B7-B3' },

      { cell: 'A29', v: '— Volume Signature —' },
      { cell: 'A30', v: 'Left Shoulder Volume' }, { cell: 'B30', v: 1450000 },
      { cell: 'A31', v: 'Head Volume' }, { cell: 'B31', v: 1180000 },
      { cell: 'A32', v: 'Right Shoulder Volume' }, { cell: 'B32', v: 720000 },
      { cell: 'A33', v: 'Head / Left Shoulder (%)' }, { cell: 'B33', f: 'B31/B30*100' },
      { cell: 'A34', v: 'Right / Left Shoulder (%)' }, { cell: 'B34', f: 'B32/B30*100' },
      { cell: 'A35', v: 'Breakout Volume' }, { cell: 'B35', v: 2650000 },
      { cell: 'A36', v: '20-day Average Volume' }, { cell: 'B36', v: 980000 },
      { cell: 'A37', v: 'Breakout Volume (x avg)' }, { cell: 'B37', f: 'B35/B36' },

      { cell: 'A39', v: '— DSE Liquidity Gate —' },
      { cell: 'A40', v: 'Avg Daily Turnover (BDT crore)' }, { cell: 'B40', v: 4.8 },
      { cell: 'A41', v: 'Minimum Required (crore)' }, { cell: 'B41', v: 2 },
      { cell: 'A42', v: 'Liquidity Check' }, { cell: 'B42', f: 'IF(B40>=B41,"PASS","TOO THIN - IGNORE PATTERN")' },

      { cell: 'A44', v: '— Trade Levels —' },
      { cell: 'A45', v: 'Measured Move Target' }, { cell: 'B45', f: 'B17-B22' },
      { cell: 'A46', v: 'Half-Target (scale out)' }, { cell: 'B46', f: 'B17-B22/2' },
      { cell: 'A47', v: 'Invalidation (RS High)' }, { cell: 'B47', f: 'B6' },
      { cell: 'A48', v: 'Breakout-Day Entry' }, { cell: 'B48', v: 69.8 },
      { cell: 'A49', v: 'Breakout R:R' }, { cell: 'B49', f: '(B48-B45)/(B47-B48)' },
      { cell: 'A50', v: 'Throwback Entry (neckline)' }, { cell: 'B50', v: 70.0 },
      { cell: 'A51', v: 'Throwback High' }, { cell: 'B51', v: 71.6 },
      { cell: 'A52', v: 'ATR(14)' }, { cell: 'B52', v: 1.85 },
      { cell: 'A53', v: 'Throwback Stop' }, { cell: 'B53', f: 'B51+B52' },
      { cell: 'A54', v: 'Throwback R:R' }, { cell: 'B54', f: '(B50-B45)/(B53-B50)' },

      { cell: 'A56', v: 'VERDICT' },
      {
        cell: 'B56',
        f: 'IF(B40<B41,"TOO THIN - the pattern is one account\'s footprint",IF(B21<5,"INVALID - head not prominent enough",IF(B23>15,"ASYMMETRIC - shoulders too unequal",IF(B27<25,"TOO SHORT - not a multi-week formation",IF(OR(B31>=B30,B32>=B31),"VOLUME FAILS - no decline into the right shoulder","VALID - trade the throwback, scale at half-target")))))',
      },
    ],
  },

  objectives: {
    en: [
      'Specify head and shoulders, double/triple tops and bottoms, rounding formations, the V-reversal and the broadening top as testable conditions defined before the outcome is known.',
      'Locate the neckline or trigger level for each pattern, compute the measured-move target, and state the exact invalidation price.',
      'Read the volume signature that must accompany a genuine reversal, and reject formations whose volume contradicts the structure.',
      'Prefer the throwback to the neckline over the breakout bar, and quantify why the risk-reward improves from 1.14 to 4.46.',
      'Apply the DSE liquidity gate, circuit-limit stretching and the absent short side before acting on any multi-week pattern.',
    ],
    bn: [
      'হেড অ্যান্ড শোল্ডারস, ডাবল/ট্রিপল টপ ও বটম, রাউন্ডিং গঠন, V-রিভার্সাল ও ব্রডেনিং টপকে ফলাফল জানার আগেই পরীক্ষণযোগ্য শর্ত হিসেবে নির্দিষ্ট করা।',
      'প্রতিটি প্যাটার্নের নেকলাইন বা ট্রিগার স্তর বের করা, মেজার্ড-মুভ টার্গেট গণনা করা, এবং সঠিক ইনভ্যালিডেশন দাম বলা।',
      'একটি প্রকৃত রিভার্সালের সঙ্গে যে ভলিউম স্বাক্ষর থাকতেই হবে তা পড়া, এবং যে গঠনের ভলিউম কাঠামোর বিরুদ্ধে যায় তা বাতিল করা।',
      'ব্রেকআউট বারের বদলে নেকলাইনে থ্রোব্যাককে অগ্রাধিকার দেওয়া, এবং কেন ঝুঁকি-পুরস্কার ১.১৪ থেকে ৪.৪৬-এ উন্নত হয় তা পরিমাপ করা।',
      'যেকোনো বহু-সপ্তাহের প্যাটার্নে কাজ করার আগে ডিএসই তারল্য গেট, সার্কিট সীমার প্রসারণ ও অনুপস্থিত শর্ট সাইড প্রয়োগ করা।',
    ],
  },

  blocks: {
    theory: {
      en: `Chapter 30 gave you horizontal support and resistance. Chapter 31 gave you the sloping trendline and the tests that decide whether a line is real or drawn. **This chapter combines them into named multi-week formations that claim to mark the end of a trend.** It also tells you the uncomfortable truth about them, which most pattern books do not.

### What a reversal pattern actually claims

A reversal pattern is a compressed story about supply and demand. In a head and shoulders top, the story is: buyers made a new high, could not hold it, made a lower high on weaker participation, and then lost the level that had been holding price up. That story is *plausible*. It is also **exactly the kind of story a human brain generates automatically from any sufficiently noisy price series.**

Here is the honest core of the chapter, stated once and then defended for the rest of it:

**Chart patterns are narratives fitted to noise unless you define them before you see the outcome.**

If you scan a chart and say "that looks like a head and shoulders," you have made an unfalsifiable statement. You are pattern-matching against a mental template with elastic boundaries, and the elasticity silently adjusts to whatever happened next. The remedy is not to abandon patterns. It is to **write the pattern down as a set of numeric conditions before you look at a single chart**, then apply them mechanically.

### Specification before recognition

A usable head-and-shoulders definition looks like this — and every number in it is an argument you must be willing to defend:

| Condition | Test | Example tolerance |
|---|---|---|
| Head prominence | Head exceeds the higher shoulder | ≥ 5% |
| Shoulder symmetry | Shoulder price gap ÷ pattern height | ≤ 15% |
| Time symmetry | Span difference ÷ mean span | ≤ 40% |
| Duration | Left shoulder to right shoulder | ≥ 25 bars |
| Neckline slope | Absolute slope per bar ÷ head price | ≤ 0.25% |
| Volume decline | Head volume < left, right < head | strict |
| Breakout confirmation | Breakout volume ÷ 20-day average | ≥ 1.5× |

Now "I see a head and shoulders" becomes a claim that can be **wrong**. That is the entire upgrade. A pattern that fails the volume test is not a weak head and shoulders; **it is not a head and shoulders.** Discipline here is the same discipline as Chapter 31's trendline tests: the line, or the pattern, must survive rules you fixed in advance.

### The formations

**Head and shoulders (top).** Three peaks; the middle one highest; the two troughs between them define the neckline. The neckline is a *line*, not a level — it usually slopes, and a down-sloping neckline on a top is the more reliable variant because it already encodes weakening demand. Trigger is a close below the neckline extended to the breakout bar. Height is measured from the head down to the neckline *directly beneath the head*, not to the nearest trough. Target is that height projected down from the breakout point. Invalidation is a close back above the right shoulder high.

**Inverse head and shoulders (bottom).** The mirror image, with one asymmetry that matters: **bottoms take longer and are less violent than tops.** Volume behaves differently too — the required signature is a volume *surge* on the breakout above the neckline, and rising volume through the right shoulder is a positive rather than a disqualifier.

**Double top / double bottom.** Two peaks within a tight price tolerance — 3% of the higher peak is a reasonable ceiling — separated by enough time (20+ bars) that they are two distinct attempts rather than one choppy top. The intervening trough must be meaningful: at least 10% below the peaks, or the "double top" is just a level being tested twice inside one range. Trigger is the trough. Height is higher peak minus trough. Volume should be materially lower on the second peak.

**Triple top / bottom.** Same logic with three attempts. Rarer, and here is the useful thing: **a triple top that fails becomes one of the strongest continuation signals on the chart**, because three failed rejections that finally break through mean the supply at that level has been fully absorbed.

**Rounding top / bottom (saucer).** No sharp pivots at all — a gradual curvature of price with volume typically forming its own bowl, heaviest at the edges and lightest at the centre. Rounding bottoms are the most reliable formations in this chapter and the least tradeable in the short term, because they take months and have no crisp trigger. The pragmatic trigger is a break above the highest point of the left rim.

**The V-reversal.** Price falls hard, turns on a single bar, and rallies hard. **It is untradeable by construction, and this is a definitional statement, not a difficulty rating.** Every other pattern in this chapter has a right side — a right shoulder, a second peak, a right rim — that forms *after* the extreme and gives you time to recognise the structure. A V has no right side. By the time you can identify it, the move you would have traded is already behind you. Any backtest that appears to trade V-reversals profitably is using the low as an input, which is look-ahead bias in its purest form.

**The broadening top.** Higher highs and lower lows — expanding volatility, widening range, usually on rising volume. It signals disagreement and loss of control rather than an orderly distribution. It has no clean measured move and no clean invalidation, and its practical value is almost entirely as a **risk-reduction signal**: reduce size, widen or abandon stops, stop adding. Trading it directionally is how people lose money in an environment that is telling them to hold less.

### The measured move, honestly

The measured move is a rule of thumb dressed as a projection. Pattern books quote it as though the market owes you the distance.

**It does not.** Treat the target as a *probabilistic reference*, not a promise. It is hit far less often than the books imply; a large share of successful breakouts stall well short of it, and the fraction that reach it varies with market regime, holding period, and — critically — with how strictly you defined the pattern in the first place. A loosely-defined pattern set will show a worse hit rate than a strict one, which is another reason the tolerance table above is not bureaucracy.

The correct use is therefore: **the measured move is a place to scale out, not a place to exit.** Take a first tranche at half the projected distance, where the strike rate is far higher, and let the remainder run toward the full target with the stop moved to breakeven. This is the position-management discipline of Chapter 27 applied to a pattern rather than an indicator.

### The throwback is the better entry

The breakout bar is the worst place to enter, and the arithmetic in §32.5 proves it. Entering on the break, with a stop above the right shoulder — the only structurally honest stop at that moment — produces a reward-to-risk near **1.14**. That is a coin flip with commissions.

Wait for the **throwback**: the rally back to the broken neckline, which now acts as resistance (Chapter 30's polarity principle). It does not always come, and you will miss some moves. But when it does, the neckline plus a small volatility buffer gives you a *structurally defined* stop only a fraction of the distance away, and the same trade prints a reward-to-risk near **4.46**. **You are not improving your forecast. You are improving your stop.**

### The failed pattern is a signal

**A head and shoulders top that breaks the neckline and then closes back above the right shoulder is a strong bullish signal, not a neutral one.** Everyone short is offside simultaneously, and their covering supplies the fuel. The same holds in reverse for a failed inverse pattern. This is why the invalidation price deserves as much care as the target: it is not merely where you are wrong, it is where the opposite trade begins.

### The DSE constraints

Three, and they are decisive.

**Multi-week patterns require multi-week liquidity.** A head and shoulders is a claim about the collective behaviour of many participants. On a thin DSE scrip, the entire formation can be the footprint of one or two accounts accumulating and distributing. **Impose a minimum average daily turnover over the pattern window — BDT 2 crore is a defensible floor — and refuse to interpret anything below it.** This gate should run before any of the geometry.

**Circuit limits stretch the breakout across sessions.** With a daily price band around 10% for most scrips (verify the current DSE rule; the bands are tiered and have changed), a target 22.6% below the breakout cannot be reached in fewer than three sessions even in a straight line. The "breakout day" of the textbooks is a breakout *week* here. Your stop and your patience must both be sized for that.

**There is no short side.** Tops are exit patterns only. A head and shoulders top on a DSE stock you own is an instruction to sell; a head and shoulders top on a stock you do not own is information, and nothing more. This asymmetry means bottoms — inverse head and shoulders, double bottoms, rounding bottoms — deserve most of your attention, because they are the ones you can actually act on.`,
      bn: `অধ্যায় ৩০ আপনাকে অনুভূমিক সাপোর্ট ও রেজিস্ট্যান্স দিয়েছে। অধ্যায় ৩১ দিয়েছে ঢালু ট্রেন্ডলাইন এবং যে পরীক্ষাগুলো ঠিক করে একটি রেখা প্রকৃত না কেবল আঁকা। **এই অধ্যায় সেগুলোকে মিলিয়ে নামধারী বহু-সপ্তাহের গঠনে পরিণত করে, যেগুলো একটি প্রবণতার সমাপ্তি চিহ্নিত করার দাবি করে।** এটি সেগুলো সম্পর্কে অস্বস্তিকর সত্যটিও বলে, যা বেশিরভাগ প্যাটার্ন-বই বলে না।

### একটি রিভার্সাল প্যাটার্ন আসলে কী দাবি করে

রিভার্সাল প্যাটার্ন হলো সরবরাহ ও চাহিদা নিয়ে একটি সংকুচিত গল্প। হেড অ্যান্ড শোল্ডারস টপে গল্পটি: ক্রেতারা নতুন উচ্চতা বানাল, ধরে রাখতে পারল না, দুর্বলতর অংশগ্রহণে একটি নিচু উচ্চতা বানাল, তারপর যে স্তরটি দামকে ধরে রাখছিল তা হারাল। গল্পটি *যুক্তিসঙ্গত*। এটি আবার **ঠিক সেই ধরনের গল্প যা মানুষের মস্তিষ্ক যথেষ্ট গোলমেলে যেকোনো দাম-ধারা থেকে স্বয়ংক্রিয়ভাবে তৈরি করে।**

এখানেই অধ্যায়ের সৎ মূলটি, একবার বলা হচ্ছে এবং বাকিটা জুড়ে সমর্থন করা হবে:

**ফলাফল দেখার আগে সংজ্ঞায়িত না করলে চার্ট প্যাটার্ন হলো গোলমালের ওপর বসানো আখ্যান।**

আপনি চার্ট দেখে যদি বলেন "ওটা হেড অ্যান্ড শোল্ডারসের মতো লাগছে," আপনি একটি অখণ্ডনযোগ্য বক্তব্য দিয়েছেন। আপনি স্থিতিস্থাপক সীমানাযুক্ত একটি মানসিক ছাঁচের সঙ্গে মেলাচ্ছেন, আর ঐ স্থিতিস্থাপকতা নীরবে পরে যা ঘটেছে তার সঙ্গে সমন্বয় করে নেয়। প্রতিকার প্যাটার্ন ত্যাগ করা নয়। প্রতিকার হলো **একটি চার্ট দেখার আগেই প্যাটার্নটিকে সাংখ্যিক শর্তের সেট হিসেবে লিখে ফেলা**, তারপর যান্ত্রিকভাবে প্রয়োগ করা।

### চেনার আগে নির্দিষ্টকরণ

ব্যবহারযোগ্য একটি হেড-অ্যান্ড-শোল্ডারস সংজ্ঞা এমন দেখায় — আর এর প্রতিটি সংখ্যা এমন একটি যুক্তি যা সমর্থন করতে আপনাকে প্রস্তুত থাকতে হবে:

| শর্ত | পরীক্ষা | উদাহরণ সহনশীলতা |
|---|---|---|
| হেড প্রাধান্য | হেড উঁচু শোল্ডারকে ছাড়ায় | ≥ ৫% |
| শোল্ডার প্রতিসাম্য | শোল্ডার দামের ব্যবধান ÷ প্যাটার্ন উচ্চতা | ≤ ১৫% |
| সময় প্রতিসাম্য | ব্যাপ্তির পার্থক্য ÷ গড় ব্যাপ্তি | ≤ ৪০% |
| স্থিতিকাল | বাম শোল্ডার থেকে ডান শোল্ডার | ≥ ২৫ বার |
| নেকলাইন ঢাল | প্রতি বারে পরম ঢাল ÷ হেড দাম | ≤ ০.২৫% |
| ভলিউম হ্রাস | হেড ভলিউম < বাম, ডান < হেড | কঠোর |
| ব্রেকআউট নিশ্চিতকরণ | ব্রেকআউট ভলিউম ÷ ২০-দিনের গড় | ≥ ১.৫× |

এখন "আমি একটি হেড অ্যান্ড শোল্ডারস দেখছি" এমন একটি দাবি হয়ে যায় যা **ভুল হতে পারে**। এটিই সম্পূর্ণ উন্নয়ন। যে প্যাটার্ন ভলিউম পরীক্ষায় ব্যর্থ হয় তা দুর্বল হেড অ্যান্ড শোল্ডারস নয়; **সেটি হেড অ্যান্ড শোল্ডারসই নয়।** এখানকার শৃঙ্খলা অধ্যায় ৩১-এর ট্রেন্ডলাইন পরীক্ষার শৃঙ্খলাই: রেখা বা প্যাটার্নকে আগে থেকে ঠিক করা নিয়মে টিকে থাকতে হবে।

### গঠনগুলো

**হেড অ্যান্ড শোল্ডারস (টপ)।** তিনটি চূড়া; মাঝেরটি সর্বোচ্চ; তাদের মধ্যবর্তী দুটি খাদ নেকলাইন সংজ্ঞায়িত করে। নেকলাইন একটি *রেখা*, স্তর নয় — সাধারণত ঢালু হয়, আর টপে নিম্নমুখী ঢালু নেকলাইন বেশি নির্ভরযোগ্য রূপ, কারণ তা ইতিমধ্যেই দুর্বল হতে থাকা চাহিদা ধারণ করে। ট্রিগার হলো ব্রেকআউট বার পর্যন্ত বর্ধিত নেকলাইনের নিচে ক্লোজ। উচ্চতা মাপা হয় হেড থেকে *ঠিক হেডের নিচের* নেকলাইন পর্যন্ত, নিকটতম খাদ পর্যন্ত নয়। টার্গেট হলো ঐ উচ্চতা ব্রেকআউট বিন্দু থেকে নিচে প্রক্ষেপণ। ইনভ্যালিডেশন হলো ডান শোল্ডারের উচ্চতার ওপরে ফিরে ক্লোজ।

**ইনভার্স হেড অ্যান্ড শোল্ডারস (বটম)।** আয়না প্রতিচ্ছবি, একটি গুরুত্বপূর্ণ অসামঞ্জস্যসহ: **বটম টপের চেয়ে বেশি সময় নেয় এবং কম হিংস্র হয়।** ভলিউমও আলাদা আচরণ করে — প্রয়োজনীয় স্বাক্ষর হলো নেকলাইনের ওপরে ব্রেকআউটে ভলিউমের *উল্লম্ফন*, আর ডান শোল্ডার জুড়ে বাড়তে থাকা ভলিউম অযোগ্যতা নয়, ইতিবাচক।

**ডাবল টপ / ডাবল বটম।** সংকীর্ণ দাম সহনশীলতার মধ্যে দুটি চূড়া — উঁচু চূড়ার ৩% একটি যুক্তিসঙ্গত সীমা — যথেষ্ট সময়ের ব্যবধানে (২০+ বার) যাতে সেগুলো একটি এলোমেলো শীর্ষ নয়, দুটি স্বতন্ত্র প্রচেষ্টা হয়। মধ্যবর্তী খাদটি অর্থবহ হতে হবে: চূড়াগুলোর অন্তত ১০% নিচে, নাহলে "ডাবল টপ" কেবল একই রেঞ্জের ভেতরে দুবার পরীক্ষিত একটি স্তর। ট্রিগার হলো খাদ। উচ্চতা হলো উঁচু চূড়া বিয়োগ খাদ। দ্বিতীয় চূড়ায় ভলিউম উল্লেখযোগ্যভাবে কম হওয়া উচিত।

**ট্রিপল টপ / বটম।** একই যুক্তি, তিনটি প্রচেষ্টায়। বিরল, আর এখানে কার্যকর বিষয়টি হলো: **ব্যর্থ ট্রিপল টপ চার্টের অন্যতম শক্তিশালী ধারাবাহিকতা সংকেতে পরিণত হয়**, কারণ তিনবার ব্যর্থ প্রত্যাখ্যানের পর অবশেষে ভেদ করা মানে ঐ স্তরের সরবরাহ সম্পূর্ণ শোষিত হয়ে গেছে।

**রাউন্ডিং টপ / বটম (সসার)।** কোনো ধারালো পিভট নেই — দামের ক্রমশ বক্রতা, আর ভলিউম সাধারণত নিজস্ব বাটি তৈরি করে, প্রান্তে সবচেয়ে ভারী ও কেন্দ্রে সবচেয়ে হালকা। রাউন্ডিং বটম এই অধ্যায়ের সবচেয়ে নির্ভরযোগ্য গঠন এবং স্বল্পমেয়াদে সবচেয়ে কম লেনদেনযোগ্য, কারণ এতে মাস লাগে এবং কোনো ধারালো ট্রিগার নেই। বাস্তবসম্মত ট্রিগার হলো বাম কিনারার সর্বোচ্চ বিন্দুর ওপরে ভেদ।

**V-রিভার্সাল।** দাম জোরে পড়ে, একটি মাত্র বারে ঘোরে, এবং জোরে ওঠে। **এটি গঠনগতভাবেই অলেনদেনযোগ্য, আর এটি একটি সাংজ্ঞিক বক্তব্য, কঠিনতার রেটিং নয়।** এই অধ্যায়ের অন্য প্রতিটি প্যাটার্নের একটি ডান পাশ আছে — ডান শোল্ডার, দ্বিতীয় চূড়া, ডান কিনারা — যা চরম বিন্দুর *পরে* গঠিত হয় এবং কাঠামোটি চেনার সময় দেয়। V-র কোনো ডান পাশ নেই। যখন আপনি একে শনাক্ত করতে পারবেন, যে চলনটি আপনি ধরতেন তা ইতিমধ্যেই পেছনে। যে ব্যাকটেস্ট V-রিভার্সালে লাভজনক লেনদেন দেখায় তা নিম্নবিন্দুটিকেই ইনপুট হিসেবে ব্যবহার করছে, যা বিশুদ্ধতম রূপে লুক-অ্যাহেড বায়াস।

**ব্রডেনিং টপ।** উঁচুতর উচ্চতা ও নিচুতর নিম্নতা — প্রসারমান অস্থিরতা, চওড়া হতে থাকা রেঞ্জ, সাধারণত বাড়তে থাকা ভলিউমে। এটি সুশৃঙ্খল বিতরণ নয়, বরং মতভেদ ও নিয়ন্ত্রণ হারানোর সংকেত দেয়। এর কোনো পরিষ্কার মেজার্ড মুভ নেই, পরিষ্কার ইনভ্যালিডেশনও নেই, আর এর ব্যবহারিক মূল্য প্রায় সম্পূর্ণভাবে একটি **ঝুঁকি-হ্রাস সংকেত** হিসেবে: আকার কমান, স্টপ চওড়া করুন বা বাদ দিন, যোগ করা বন্ধ করুন। যে পরিবেশ আপনাকে কম ধরে রাখতে বলছে সেখানে দিকনির্দেশক লেনদেন করাই মানুষের টাকা হারানোর পদ্ধতি।

### মেজার্ড মুভ, সৎভাবে

মেজার্ড মুভ হলো প্রক্ষেপণের পোশাক পরা একটি আন্দাজ। প্যাটার্ন-বই একে এমনভাবে উদ্ধৃত করে যেন বাজার আপনাকে ঐ দূরত্বটুকু পাওনা।

**তা নয়।** টার্গেটকে *সম্ভাব্যতাভিত্তিক নির্দেশক* হিসেবে দেখুন, প্রতিশ্রুতি হিসেবে নয়। বই যা ইঙ্গিত দেয় তার চেয়ে অনেক কম বার এটি স্পর্শিত হয়; সফল ব্রেকআউটের একটি বড় অংশ অনেক আগেই থেমে যায়, আর যে ভগ্নাংশ পৌঁছায় তা বাজারের অবস্থা, ধারণকাল এবং — গুরুত্বপূর্ণভাবে — আপনি প্যাটার্নটিকে প্রথমে কতটা কঠোরভাবে সংজ্ঞায়িত করেছিলেন তার সঙ্গে বদলায়। শিথিলভাবে সংজ্ঞায়িত প্যাটার্ন-সেট কঠোরটির চেয়ে খারাপ সাফল্যের হার দেখাবে, যা উপরের সহনশীলতা টেবিলটি আমলাতন্ত্র নয় হওয়ার আরেকটি কারণ।

তাই সঠিক ব্যবহার হলো: **মেজার্ড মুভ বেরিয়ে আসা শুরু করার জায়গা, বেরিয়ে যাওয়ার জায়গা নয়।** প্রক্ষেপিত দূরত্বের অর্ধেকে প্রথম কিস্তি নিন, যেখানে সাফল্যের হার অনেক বেশি, আর বাকিটা স্টপ ব্রেকইভেনে সরিয়ে পূর্ণ টার্গেটের দিকে চলতে দিন। এটি অধ্যায় ২৭-এর পজিশন-ব্যবস্থাপনার শৃঙ্খলা, ইন্ডিকেটরের বদলে প্যাটার্নে প্রয়োগ করা।

### থ্রোব্যাকই উন্নততর প্রবেশ

ব্রেকআউট বার প্রবেশের সবচেয়ে খারাপ জায়গা, আর §৩২.৫-এর পাটিগণিত তা প্রমাণ করে। ভাঙনে প্রবেশ, ডান শোল্ডারের ওপরে স্টপসহ — ঐ মুহূর্তে একমাত্র কাঠামোগতভাবে সৎ স্টপ — পুরস্কার-থেকে-ঝুঁকি দেয় প্রায় **১.১৪**। কমিশনসহ ওটা টস।

**থ্রোব্যাকের** জন্য অপেক্ষা করুন: ভাঙা নেকলাইনে ফিরে আসা র‍্যালি, যা এখন রেজিস্ট্যান্স হিসেবে কাজ করে (অধ্যায় ৩০-এর মেরুতা নীতি)। এটি সবসময় আসে না, আর আপনি কিছু চলন হারাবেন। কিন্তু যখন আসে, নেকলাইন ও ছোট একটি অস্থিরতা বাফার আপনাকে দূরত্বের ভগ্নাংশ মাত্র দূরে একটি *কাঠামোগতভাবে সংজ্ঞায়িত* স্টপ দেয়, আর একই লেনদেন পুরস্কার-থেকে-ঝুঁকি দেখায় প্রায় **৪.৪৬**। **আপনি আপনার পূর্বাভাস উন্নত করছেন না। আপনি আপনার স্টপ উন্নত করছেন।**

### ব্যর্থ প্যাটার্ন নিজেই একটি সংকেত

**যে হেড অ্যান্ড শোল্ডারস টপ নেকলাইন ভাঙে এবং তারপর ডান শোল্ডারের ওপরে ফিরে ক্লোজ করে, তা নিরপেক্ষ নয় — একটি শক্তিশালী তেজি সংকেত।** যারা শর্ট তারা সবাই একসঙ্গে ভুল দিকে, আর তাদের কভারিংই জ্বালানি জোগায়। ব্যর্থ ইনভার্স প্যাটার্নে উল্টোটা সত্য। এ কারণেই ইনভ্যালিডেশন দাম টার্গেটের মতোই যত্ন দাবি করে: এটি কেবল আপনি কোথায় ভুল তা নয়, এটি যেখানে বিপরীত লেনদেনটি শুরু হয়।

### ডিএসই-র সীমাবদ্ধতা

তিনটি, এবং সেগুলো নির্ণায়ক।

**বহু-সপ্তাহের প্যাটার্নে বহু-সপ্তাহের তারল্য লাগে।** হেড অ্যান্ড শোল্ডারস বহু অংশগ্রহণকারীর সমষ্টিগত আচরণ সম্পর্কে একটি দাবি। পাতলা ডিএসই স্ক্রিপে পুরো গঠনটাই এক বা দুটি অ্যাকাউন্টের সঞ্চয় ও বিতরণের পদচিহ্ন হতে পারে। **প্যাটার্ন উইন্ডোজুড়ে একটি ন্যূনতম গড় দৈনিক লেনদেন আরোপ করুন — ২ কোটি টাকা একটি সমর্থনযোগ্য মেঝে — আর তার নিচের কিছু ব্যাখ্যা করতে অস্বীকার করুন।** এই গেটটি জ্যামিতির যেকোনো কিছুর আগে চালানো উচিত।

**সার্কিট সীমা ব্রেকআউটকে একাধিক সেশনে টেনে লম্বা করে।** বেশিরভাগ স্ক্রিপে প্রায় ১০% দৈনিক দাম-ব্যান্ড ধরলে (বর্তমান ডিএসই নিয়ম যাচাই করুন; ব্যান্ডগুলো স্তরভিত্তিক ও বদলেছে), ব্রেকআউটের ২২.৬% নিচের একটি টার্গেট সরলরেখায়ও তিন সেশনের কমে পৌঁছানো যায় না। পাঠ্যবইয়ের "ব্রেকআউট দিন" এখানে ব্রেকআউট *সপ্তাহ*। আপনার স্টপ ও ধৈর্য দুটোকেই সেই মাপে হতে হবে।

**কোনো শর্ট সাইড নেই।** টপ কেবল বেরিয়ে আসার প্যাটার্ন। আপনার মালিকানাধীন ডিএসই শেয়ারে হেড অ্যান্ড শোল্ডারস টপ হলো বিক্রির নির্দেশ; আপনার মালিকানাহীন শেয়ারে হেড অ্যান্ড শোল্ডারস টপ কেবল তথ্য, আর কিছু নয়। এই অসামঞ্জস্যের মানে বটমগুলো — ইনভার্স হেড অ্যান্ড শোল্ডারস, ডাবল বটম, রাউন্ডিং বটম — আপনার বেশিরভাগ মনোযোগ পাওয়ার যোগ্য, কারণ ওগুলোতেই আপনি সত্যিই কাজ করতে পারেন।`,
    },
  },
};
