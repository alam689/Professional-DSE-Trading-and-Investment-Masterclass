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

    simple: {
      en: `Think about a man trying to lift a heavy sack onto a shelf.

First attempt: he heaves it up to shoulder height and it slips back down. Second attempt: he grits his teeth, gets it *higher* than the first time — but he is already tired, and it comes down again. Third attempt: he cannot even match the second height. He gets it barely past the first attempt and drops it.

Now watch what happens next. **He does not try a fourth time. He puts the sack down and walks away.**

That is a head and shoulders top. Three lifts, the middle one highest, each one costing more effort than the last, and then the man gives up.

### Where the "effort" shows up on the chart

Effort is volume. The number of shares that had to change hands to get the price up there.

Here is the whole tell, and almost nobody looks at it:

- **Left shoulder:** the crowd is enthusiastic. Big volume, price goes up.
- **Head:** price makes a *new high* — but on **less** volume than the left shoulder. Fewer people were needed to push it higher. That sounds good. **It is not.** It means the crowd is thinner. The push worked because nobody was selling, not because lots of people were buying.
- **Right shoulder:** less volume still, and a lower high. The man cannot get the sack up any more.

**A new price high on falling volume is the single most useful warning in technical analysis.** The price chart is saying *strong*. The volume chart is saying *empty room*.

### What the neckline is

Draw a line under the two dips between the three peaks. That line is where buyers stepped in each time the price fell.

While price stays above that line, the buyers are still there. When price closes below it, **the buyers who were catching the falls have stopped catching.** That is the moment the pattern stops being a story and becomes an event.

### Why you should not act on "it looks like one"

Here is the trap, and it catches everyone at least once.

Your brain is a pattern machine. Show it a random squiggle and it will find a face in it. Show it eight months of a stock price and it will find a head and shoulders — because in eight months of noise there is *always* something with three bumps.

The fix is boring and it works: **write down the rules before you look at the chart.** How much higher must the head be? How unequal can the shoulders be? What must the volume do? Once you have written those down, "I see a head and shoulders" becomes something that can be **wrong** — and a claim that can be wrong is worth something. A claim that cannot be wrong is worth nothing.

### The single most useful piece of advice in this chapter

When the price finally breaks the neckline, **do not act on that bar.**

Very often price falls through, then bounces back up to the neckline one more time — like the man briefly picking the sack back up before finally giving up on it. That bounce is called the throwback.

If you sell into the throwback instead of into the break, you sell at a better price and you know exactly where you were wrong: just above the bounce. In the worked case in this chapter, that one decision moves the reward-to-risk from **1.14 to 4.46**. Same stock. Same pattern. Same idea. **You did not get smarter. You just waited three days.**

### Two Bangladeshi warnings

**One.** A head and shoulders is supposed to be the collective behaviour of thousands of people. On a thinly traded DSE scrip, the whole picture can be *one person* buying for two months and selling for two months. It is not a crowd, it is a footprint. If the stock does not trade at least a couple of crore taka a day, do not read anything into the shape at all.

**Two.** In most markets, a head and shoulders top is a signal to sell short — to bet on the fall. **Here, you cannot.** There is no reliable way for an ordinary DSE investor to profit from a fall. So a top means exactly one thing: **if you own it, get out.** If you do not own it, it is interesting and nothing more. That is why the *bottom* patterns in this chapter — the upside-down versions — deserve more of your attention. Those you can actually trade.`,
      bn: `একজন লোক একটি ভারী বস্তা তাকের ওপর তোলার চেষ্টা করছেন, এই দৃশ্যটি ভাবুন।

প্রথম চেষ্টা: তিনি বস্তাটি কাঁধ পর্যন্ত টেনে তোলেন, আর তা পিছলে নেমে যায়। দ্বিতীয় চেষ্টা: দাঁতে দাঁত চেপে তিনি প্রথমবারের চেয়েও *উঁচুতে* তোলেন — কিন্তু ততক্ষণে তিনি ক্লান্ত, আর বস্তাটি আবার নেমে আসে। তৃতীয় চেষ্টা: দ্বিতীয়বারের উচ্চতার ধারেকাছেও যেতে পারেন না। কোনোমতে প্রথম চেষ্টাটুকু ছাড়িয়ে ফেলে দেন।

এবার দেখুন পরে কী হয়। **তিনি চতুর্থবার চেষ্টা করেন না। বস্তা নামিয়ে রেখে চলে যান।**

এটিই হেড অ্যান্ড শোল্ডারস টপ। তিনটি তোলা, মাঝেরটি সর্বোচ্চ, প্রতিটিতে আগেরটির চেয়ে বেশি পরিশ্রম, তারপর লোকটি হাল ছেড়ে দেন।

### "পরিশ্রম" চার্টে কোথায় দেখা যায়

পরিশ্রম মানে ভলিউম। দামটিকে ওপরে তুলতে যত শেয়ার হাতবদল করতে হয়েছে।

পুরো সংকেতটি এখানেই, আর প্রায় কেউ এটি দেখেন না:

- **বাম শোল্ডার:** ভিড় উৎসাহী। বড় ভলিউম, দাম ওঠে।
- **হেড:** দাম *নতুন উচ্চতা* বানায় — কিন্তু বাম শোল্ডারের চেয়ে **কম** ভলিউমে। ওপরে ঠেলতে কম মানুষ লেগেছে। শুনতে ভালো লাগে। **ভালো নয়।** এর মানে ভিড়টি পাতলা হয়ে গেছে। ঠেলাটি কাজ করেছে কারণ কেউ বিক্রি করছিল না, বহু মানুষ কিনছিল বলে নয়।
- **ডান শোল্ডার:** ভলিউম আরও কম, আর উচ্চতাও নিচু। লোকটি বস্তাটি আর তুলতে পারছেন না।

**কমতে থাকা ভলিউমে নতুন দামের উচ্চতা কারিগরি বিশ্লেষণের একক সবচেয়ে কার্যকর সতর্কবার্তা।** প্রাইস চার্ট বলছে *শক্তিশালী*। ভলিউম চার্ট বলছে *ঘর খালি*।

### নেকলাইন জিনিসটা কী

তিনটি চূড়ার মধ্যবর্তী দুটি খাদের নিচে একটি রেখা টানুন। ঐ রেখাটিই সেই জায়গা যেখানে প্রতিবার দাম পড়লে ক্রেতারা এগিয়ে এসেছেন।

যতক্ষণ দাম ঐ রেখার ওপরে থাকে, ক্রেতারা এখনো আছেন। যখন দাম তার নিচে ক্লোজ করে, **যাঁরা পতনগুলো ধরছিলেন তাঁরা ধরা বন্ধ করেছেন।** ঠিক ঐ মুহূর্তে প্যাটার্নটি গল্প থাকা বন্ধ করে ঘটনা হয়ে ওঠে।

### "দেখতে একটার মতো লাগছে" বলে কাজ করবেন না কেন

এখানেই ফাঁদ, আর এটি প্রত্যেককে অন্তত একবার ধরে।

আপনার মস্তিষ্ক একটি প্যাটার্ন-যন্ত্র। এলোমেলো একটি আঁকিবুঁকি দেখান, তা তাতে একটি মুখ খুঁজে পাবে। একটি শেয়ারের আট মাসের দাম দেখান, তা একটি হেড অ্যান্ড শোল্ডারস খুঁজে পাবে — কারণ আট মাসের গোলমালে তিনটি ঢিবিওয়ালা কিছু *সবসময়ই* থাকে।

সমাধানটি নীরস আর কার্যকর: **চার্ট দেখার আগেই নিয়মগুলো লিখে ফেলুন।** হেডকে কতটা উঁচু হতে হবে? শোল্ডার দুটি কতটা অসমান হতে পারে? ভলিউমকে কী করতে হবে? এগুলো লিখে ফেললে "আমি একটি হেড অ্যান্ড শোল্ডারস দেখছি" এমন কিছু হয়ে যায় যা **ভুল হতে পারে** — আর যে দাবি ভুল হতে পারে তার মূল্য আছে। যে দাবি ভুল হতেই পারে না তার কোনো মূল্য নেই।

### এই অধ্যায়ের একক সবচেয়ে কার্যকর পরামর্শ

দাম যখন শেষমেশ নেকলাইন ভাঙে, **ঐ বারে কাজ করবেন না।**

খুব প্রায়ই দাম ভেদ করে নামে, তারপর আরও একবার নেকলাইনে ফিরে ওঠে — যেন লোকটি চূড়ান্তভাবে হাল ছাড়ার আগে বস্তাটি ক্ষণিকের জন্য আবার তুলছেন। ঐ ফিরে ওঠাকে বলে থ্রোব্যাক।

ভাঙনে না বেচে থ্রোব্যাকে বেচলে আপনি ভালো দামে বেচেন এবং ঠিক জানেন কোথায় আপনি ভুল ছিলেন: ফিরে ওঠার সামান্য ওপরে। এই অধ্যায়ের বিশ্লেষিত ঘটনায় ঐ একটি সিদ্ধান্ত পুরস্কার-থেকে-ঝুঁকিকে **১.১৪ থেকে ৪.৪৬**-এ নিয়ে যায়। একই শেয়ার। একই প্যাটার্ন। একই ধারণা। **আপনি বুদ্ধিমান হননি। আপনি কেবল তিন দিন অপেক্ষা করেছেন।**

### দুটি বাংলাদেশি সতর্কতা

**এক।** হেড অ্যান্ড শোল্ডারসের কথা হাজার হাজার মানুষের সমষ্টিগত আচরণ হওয়ার। পাতলা লেনদেনের ডিএসই স্ক্রিপে গোটা ছবিটাই *একজন মানুষের* দুই মাস কেনা আর দুই মাস বেচা হতে পারে। এটি ভিড় নয়, পদচিহ্ন। শেয়ারটি দিনে অন্তত কয়েক কোটি টাকার লেনদেন না করলে আকৃতিটি থেকে কিছুই পড়বেন না।

**দুই।** বেশিরভাগ বাজারে হেড অ্যান্ড শোল্ডারস টপ শর্ট বেচার সংকেত — পতনের ওপর বাজি। **এখানে আপনি তা পারবেন না।** সাধারণ ডিএসই বিনিয়োগকারীর পতন থেকে লাভ করার নির্ভরযোগ্য কোনো উপায় নেই। তাই টপের অর্থ ঠিক একটিই: **মালিক হলে বেরিয়ে আসুন।** মালিক না হলে এটি কৌতূহলোদ্দীপক, তার বেশি কিছু নয়। এ কারণেই এই অধ্যায়ের *বটম* প্যাটার্নগুলো — উল্টো করা রূপগুলো — আপনার বেশি মনোযোগ পাওয়ার যোগ্য। ওগুলোতেই আপনি সত্যিই লেনদেন করতে পারেন।`,
    },

    example: {
      en: `### RUPALICEM: a textbook top on an untradeable side

RUPALICEM is a mid-cap DSE cement name used illustratively here; **every figure below is constructed, not historical.** It is a worked case, not a claim about any listed company.

Setting: the stock rose from roughly BDT 52 to BDT 89 over the preceding five months on a sector re-rating. ATR(14) is BDT 1.85, twenty-day average volume is 980,000 shares, and average daily turnover across the pattern window is BDT 4.8 crore. Bar 0 is the first session of January; the market trades five sessions a week, so 34 bars is roughly seven trading weeks.

### The five pivots

| Point | Bar | Approx. date | Price (BDT) | Volume |
|---|---|---|---|---|
| Left shoulder | 12 | mid-Jan | 82.50 | 1,450,000 |
| Trough 1 | 21 | early Feb | 74.00 | — |
| **Head** | **30** | **mid-Feb** | **89.00** | **1,180,000** |
| Trough 2 | 39 | late Feb | 72.20 | — |
| Right shoulder | 46 | early Mar | 83.10 | 720,000 |
| Neckline break | 56 | mid-Mar | close 69.80 | 2,650,000 |

Read the volume column before the price column. **The head made a new high on 81.38% of the left shoulder's volume, and the right shoulder needed only 49.66%.** Price was making its most impressive move of the entire advance while participation was collapsing. That is the whole pattern in one sentence.

### Step zero: the liquidity gate, which runs before any geometry

$$\\text{Avg daily turnover} = \\text{BDT }4.8\\text{ crore} \\;\\ge\\; \\text{BDT }2\\text{ crore} \\;\\Rightarrow\\; \\textbf{PASS}$$

**This test comes first and it is not a formality.** Had turnover been BDT 0.6 crore, the correct action would be to stop reading the chart entirely — not to grade the pattern as "weak", but to refuse to interpret it. A seven-week formation on BDT 60 lakh a day is one account's accumulation and distribution wearing the costume of a crowd. Note also that BDT 4.8 crore at these prices is roughly 650,000 shares a day averaged over the whole window, against a 980,000-share twenty-day average near the break: **volume was concentrated at the end, which is itself informative.**

### Building the neckline

The neckline is fixed by the two troughs, and it is a line, not a level:

$$m = \\frac{72.20 - 74.00}{39 - 21} = \\frac{-1.80}{18} = -0.10 \\text{ BDT/bar}$$

$$N(b) = 74.00 - 0.10\\,(b - 21)$$

Two evaluations matter. Under the head, for the height measurement:

$$N(30) = 74.00 - 0.10 \\times 9 = 73.10$$

And at the breakout bar, for the trigger and the target:

$$N(56) = 74.00 - 0.10 \\times 35 = 70.50$$

Is the slope acceptable? Expressed as a fraction of the head price per bar:

$$\\frac{|{-0.10}|}{89.00} \\times 100 = 0.1124\\% \\;\\le\\; 0.25\\% \\;\\checkmark$$

**A gently down-sloping neckline is the good case, not a defect.** It encodes buyers stepping in a little lower each time. A neckline sloping *up* steeply on a top is a warning that you are fitting a pattern to what is still an uptrend.

### The four structure tests

| Test | Computation | Result | Threshold | Verdict |
|---|---|---|---|---|
| Head prominence | $(89.00 - 83.10)/83.10$ | **7.10%** | ≥ 5% | ✓ |
| Pattern height | $89.00 - 73.10$ | **15.90** | — | — |
| Shoulder asymmetry | $|82.50 - 83.10| / 15.90$ | **3.77%** | ≤ 15% | ✓ |
| Time asymmetry | $|18 - 16| / 17$ | **11.76%** | ≤ 40% | ✓ |
| Duration | $46 - 12$ | **34 bars** | ≥ 25 | ✓ |

Note how the height is measured: **from the head down to the neckline directly beneath the head at 73.10, not to the nearer trough at 74.00 and not to the deeper trough at 72.20.** Use trough 1 and the height reads 15.00; use trough 2 and it reads 16.80. Those are 5.7% and 5.7% errors in opposite directions, and they propagate straight into the target.

Note also that the shoulders are *remarkably* symmetric — 60 paisa apart on a 15.90 pattern. Asymmetry is expressed as a fraction of pattern height rather than of price, because a 60-paisa shoulder gap means something entirely different on a 15.90 formation than on a 3.00 one.

### The volume signature

| Ratio | Computation | Result | Requirement |
|---|---|---|---|
| Head ÷ left shoulder | $1{,}180{,}000 / 1{,}450{,}000$ | **81.38%** | < 100% ✓ |
| Right shoulder ÷ left shoulder | $720{,}000 / 1{,}450{,}000$ | **49.66%** | < head ✓ |
| Breakout ÷ ADV(20) | $2{,}650{,}000 / 980{,}000$ | **2.70×** | ≥ 1.5× ✓ |

**The right shoulder transacted less than half the left shoulder's volume.** Translate that into people: the buyers who were willing to chase this stock at 82 in January had, by early March, largely finished buying. The 83.10 print was made by a much smaller group, and a smaller group cannot defend a level.

Then the break arrived on **2.70× average volume**, which is the mirror image: the participation that vanished on the way up reappeared instantly on the way down. That asymmetry — thin on the highs, heavy on the break — is the signature that separates a distribution top from a routine pullback.

### The verdict, and then the hard part

Every gate passes. Liquidity PASS, prominence 7.10% ≥ 5, asymmetry 3.77% ≤ 15, duration 34 ≥ 25, volume declining into the right shoulder, breakout confirmed at 2.70×. The sheet returns:

> **VALID — trade the throwback, scale at half-target.**

And here is where a Bangladeshi reader must part company with the textbook. **This is a top. There is no reliable short side on the DSE.** So "trade" means precisely one of two things:

1. **If you own RUPALICEM:** this is a sell instruction, and it was arguably a sell instruction at the right shoulder, before the break.
2. **If you do not own it:** it is information. It tells you not to buy the dip, and it tells you what a distribution top looks like on a chart you will see again. It is not a trade.

The reward-to-risk arithmetic below is still worth doing in full, because the *identical* arithmetic governs the inverse head and shoulders — the bottom — which you can act on. **Learn the mechanics on the top; deploy the capital on the bottom.**

### Why the breakout bar is the wrong exit price

Suppose you did act at the break. Close 69.80, and the only structurally honest invalidation is the right shoulder high at 83.10:

$$\\text{Target} = N(56) - h = 70.50 - 15.90 = 54.60$$
$$\\text{Reward} = 69.80 - 54.60 = 15.20, \\qquad \\text{Risk} = 83.10 - 69.80 = 13.30$$
$$R{:}R = \\frac{15.20}{13.30} = \\mathbf{1.14}, \\qquad p^{*} = \\frac{1}{1 + 1.14} = 46.67\\%$$

**You need to be right about 47% of the time on a pattern whose full target is hit substantially less often than that.** The position is not merely mediocre; on any honest estimate of measured-move hit rates it is negative before commissions.

### The throwback

Bars 60–62: price rallies back to the broken neckline, which is now resistance — Chapter 30's polarity principle, applied to a sloping line rather than a horizontal one. It prints a high of 71.60 and stalls.

$$E = 70.00, \\qquad X = 71.60 + 1.85 = 73.45$$
$$\\text{Reward} = 70.00 - 54.60 = 15.40, \\qquad \\text{Risk} = 73.45 - 70.00 = 3.45$$
$$R{:}R = \\frac{15.40}{3.45} = \\mathbf{4.46}, \\qquad p^{*} = \\frac{1}{1 + 4.46} = 18.30\\%$$

| | Act on the break | Wait for the throwback |
|---|---|---|
| Entry | 69.80 | **70.00** |
| Invalidation | 83.10 | **73.45** |
| Risk per share | 13.30 | **3.45** |
| Reward to 54.60 | 15.20 | **15.40** |
| $R{:}R$ | 1.14 | **4.46** |
| Break-even hit rate | **46.67%** | **18.30%** |

**The entry price barely moved — 69.80 against 70.00 — and the required accuracy fell by more than half.** Nothing about the forecast improved. What improved is that the throwback supplies a *nearby* structure to be wrong against: the neckline it just failed at, plus one ATR. Before the throwback exists, the nearest honest invalidation is 13.30 taka away.

**This is the single most important arithmetic in the chapter, and it generalises.** Chapter 30 found the same result on a horizontal level (23.01% against 43.09%); Chapter 29 found it on a continuation retest. Entries close to a structural invalidation are cheap; entries far from one are expensive. The pattern is not about patterns.

### Scaling, because the full target is not a promise

Take half the position off at the half-target:

$$\\text{Half-target} = 70.50 - \\frac{15.90}{2} = 62.55$$

From the throwback entry that is 7.45 taka, against 15.40 to the full target. Now consider the case where the half-target fills and price then reverses into a breakeven stop on the remainder:

$$\\text{Outcome} = 0.5 \\times 7.45 + 0.5 \\times 0 = 3.725 \\text{ per share} \\;\\Rightarrow\\; \\frac{3.725}{3.45} = +1.08R$$

**A trade that "failed" — never reached target, stopped out on the balance — still returns just over one unit of risk.** That is what scaling buys you, and it is why the measured move should be treated as a place to *begin* exiting rather than a place to exit. If both targets fill, the blended gain is $(7.45 + 15.40)/2 = 11.425$, or **+3.31R**.

### The DSE overlay: circuit limits make this a multi-week trade

The full target is a long way down:

$$\\frac{15.90}{70.50} \\times 100 = 22.55\\%$$

At a 10% daily band (verify the current tiered DSE rule), the fastest possible path is:

$$70.50 \\to 63.45 \\to 57.11 \\to 51.39$$

**Three limit-down sessions minimum, and that is a fiction — real declines do not travel at the band every day.** Realistically this is a three-to-six week hold. The half-target at 62.55 is an 11.28% decline, so **two sessions minimum**.

Three consequences follow, and none of them are optional:

1. **Your stop must be sized for gap risk, not for intraday noise.** A limit-down open can print through 73.45 in the other direction too, on a failed pattern.
2. **The throwback may not be a clean three-day affair.** With bands compressing daily ranges, the return to the neckline can take two weeks.
3. **A failed pattern here is expensive to exit.** If RUPALICEM closes back above 83.10, everyone positioned for the top is offside at once — and in a market that can lock limit-up, "I will just get out" is not a plan.

### The counterfactual: what would have disqualified this

Change one number and the verdict flips. Suppose the right shoulder had printed on 1,520,000 shares instead of 720,000:

$$\\frac{1{,}520{,}000}{1{,}180{,}000} = 128.8\\% \\;>\\; 100\\% \\;\\Rightarrow\\; \\textbf{VOLUME FAILS}$$

The geometry would be untouched — same prominence, same symmetry, same duration, same beautiful shape. **And it would not be a head and shoulders.** Rising volume into the right shoulder says buyers are arriving, not leaving, and the three-peak shape is then just a shape.

Similarly, had the head printed at 86.00 instead of 89.00:

$$\\frac{86.00 - 83.10}{83.10} \\times 100 = 3.49\\% \\;<\\; 5\\% \\;\\Rightarrow\\; \\textbf{INVALID — head not prominent}$$

**Three peaks of nearly equal height are a triple top or a range, not a head and shoulders**, and they carry a different trigger and a different measured move. Calling it the wrong thing gets you the wrong target.`,
      bn: `### RUPALICEM: অলেনদেনযোগ্য দিকে একটি পাঠ্যবই-সুলভ টপ

RUPALICEM এখানে দৃষ্টান্তমূলকভাবে ব্যবহৃত একটি মাঝারি আকারের ডিএসই সিমেন্ট নাম; **নিচের প্রতিটি সংখ্যা নির্মিত, ঐতিহাসিক নয়।** এটি একটি বিশ্লেষিত ঘটনা, কোনো তালিকাভুক্ত কোম্পানি সম্পর্কে দাবি নয়।

প্রেক্ষাপট: খাতের পুনর্মূল্যায়নে শেয়ারটি আগের পাঁচ মাসে প্রায় ৫২ টাকা থেকে ৮৯ টাকায় উঠেছে। ATR(১৪) ১.৮৫ টাকা, কুড়ি দিনের গড় ভলিউম ৯,৮০,০০০ শেয়ার, আর প্যাটার্ন উইন্ডোজুড়ে গড় দৈনিক লেনদেন ৪.৮ কোটি টাকা। বার ০ জানুয়ারির প্রথম সেশন; বাজার সপ্তাহে পাঁচ সেশন চলে, তাই ৩৪ বার মোটামুটি সাত লেনদেন-সপ্তাহ।

### পাঁচটি পিভট

| বিন্দু | বার | আনুমানিক তারিখ | দাম (টাকা) | ভলিউম |
|---|---|---|---|---|
| বাম শোল্ডার | ১২ | জানুয়ারির মাঝামাঝি | ৮২.৫০ | ১৪,৫০,০০০ |
| খাদ ১ | ২১ | ফেব্রুয়ারির শুরু | ৭৪.০০ | — |
| **হেড** | **৩০** | **ফেব্রুয়ারির মাঝামাঝি** | **৮৯.০০** | **১১,৮০,০০০** |
| খাদ ২ | ৩৯ | ফেব্রুয়ারির শেষ | ৭২.২০ | — |
| ডান শোল্ডার | ৪৬ | মার্চের শুরু | ৮৩.১০ | ৭,২০,০০০ |
| নেকলাইন ভাঙন | ৫৬ | মার্চের মাঝামাঝি | ক্লোজ ৬৯.৮০ | ২৬,৫০,০০০ |

দামের কলামের আগে ভলিউমের কলাম পড়ুন। **হেড বাম শোল্ডারের ৮১.৩৮% ভলিউমে নতুন উচ্চতা বানিয়েছে, আর ডান শোল্ডারের লেগেছে মাত্র ৪৯.৬৬%।** পুরো উত্থানের সবচেয়ে চিত্তাকর্ষক চলনটি দাম করছিল যখন অংশগ্রহণ ভেঙে পড়ছিল। এক বাক্যে পুরো প্যাটার্নটি এটাই।

### শূন্য ধাপ: তারল্য গেট, যা যেকোনো জ্যামিতির আগে চলে

$$\\text{গড় দৈনিক লেনদেন} = ৪.৮\\text{ কোটি টাকা} \\;\\ge\\; ২\\text{ কোটি টাকা} \\;\\Rightarrow\\; \\textbf{PASS}$$

**এই পরীক্ষাটি প্রথমে আসে এবং এটি নিছক আনুষ্ঠানিকতা নয়।** লেনদেন ০.৬ কোটি টাকা হলে সঠিক পদক্ষেপ হতো চার্ট পড়া পুরোপুরি বন্ধ করা — প্যাটার্নটিকে "দুর্বল" নম্বর দেওয়া নয়, বরং ব্যাখ্যা করতেই অস্বীকার করা। দিনে ৬০ লক্ষ টাকায় সাত সপ্তাহের একটি গঠন হলো ভিড়ের পোশাক পরা একটি অ্যাকাউন্টের সঞ্চয় ও বিতরণ। আরও লক্ষ করুন, এই দামে ৪.৮ কোটি টাকা মানে পুরো উইন্ডোজুড়ে দিনে গড়ে প্রায় ৬,৫০,০০০ শেয়ার, অথচ ভাঙনের কাছে কুড়ি-দিনের গড় ৯,৮০,০০০: **ভলিউম শেষ দিকে ঘনীভূত ছিল, যা নিজেই তথ্যবহ।**

### নেকলাইন গড়া

নেকলাইন দুটি খাদ দিয়ে নির্ধারিত, আর এটি একটি রেখা, স্তর নয়:

$$m = \\frac{72.20 - 74.00}{39 - 21} = \\frac{-1.80}{18} = -0.10 \\text{ টাকা/বার}$$

$$N(b) = 74.00 - 0.10\\,(b - 21)$$

দুটি মান গুরুত্বপূর্ণ। উচ্চতা মাপার জন্য হেডের নিচে:

$$N(30) = 74.00 - 0.10 \\times 9 = 73.10$$

আর ট্রিগার ও টার্গেটের জন্য ব্রেকআউট বারে:

$$N(56) = 74.00 - 0.10 \\times 35 = 70.50$$

ঢালটি কি গ্রহণযোগ্য? প্রতি বারে হেডের দামের ভগ্নাংশ হিসেবে প্রকাশ করলে:

$$\\frac{|{-0.10}|}{89.00} \\times 100 = 0.1124\\% \\;\\le\\; 0.25\\% \\;\\checkmark$$

**মৃদু নিম্নমুখী ঢালের নেকলাইন ভালো ঘটনা, ত্রুটি নয়।** এটি ধারণ করে যে ক্রেতারা প্রতিবার একটু নিচে এগিয়ে আসছেন। টপে খাড়াভাবে *ঊর্ধ্বমুখী* ঢালের নেকলাইন একটি সতর্কবার্তা যে আপনি এখনো চলমান একটি ঊর্ধ্বপ্রবণতার ওপর প্যাটার্ন বসাচ্ছেন।

### চারটি কাঠামো পরীক্ষা

| পরীক্ষা | গণনা | ফলাফল | সীমা | রায় |
|---|---|---|---|---|
| হেড প্রাধান্য | $(89.00 - 83.10)/83.10$ | **৭.১০%** | ≥ ৫% | ✓ |
| প্যাটার্ন উচ্চতা | $89.00 - 73.10$ | **১৫.৯০** | — | — |
| শোল্ডার অসমতা | $|82.50 - 83.10| / 15.90$ | **৩.৭৭%** | ≤ ১৫% | ✓ |
| সময় অসমতা | $|18 - 16| / 17$ | **১১.৭৬%** | ≤ ৪০% | ✓ |
| স্থিতিকাল | $46 - 12$ | **৩৪ বার** | ≥ ২৫ | ✓ |

উচ্চতা কীভাবে মাপা হলো লক্ষ করুন: **হেড থেকে ঠিক হেডের নিচে ৭৩.১০-এ নেকলাইন পর্যন্ত, নিকটতর খাদ ৭৪.০০ পর্যন্ত নয় এবং গভীরতর খাদ ৭২.২০ পর্যন্তও নয়।** খাদ ১ ব্যবহার করলে উচ্চতা পড়ে ১৫.০০; খাদ ২ ব্যবহার করলে ১৬.৮০। ওগুলো বিপরীত দিকে ৫.৭% ও ৫.৭% ভুল, আর তা সরাসরি টার্গেটে গিয়ে পৌঁছায়।

আরও লক্ষ করুন শোল্ডার দুটি *উল্লেখযোগ্যভাবে* প্রতিসম — ১৫.৯০ প্যাটার্নে ৬০ পয়সার ব্যবধান। অসমতা দামের নয়, প্যাটার্নের উচ্চতার ভগ্নাংশ হিসেবে প্রকাশ করা হয়, কারণ ১৫.৯০ গঠনে ৬০ পয়সার শোল্ডার ব্যবধান ৩.০০ গঠনের চেয়ে সম্পূর্ণ ভিন্ন অর্থ বহন করে।

### ভলিউম স্বাক্ষর

| অনুপাত | গণনা | ফলাফল | প্রয়োজন |
|---|---|---|---|
| হেড ÷ বাম শোল্ডার | $1{,}180{,}000 / 1{,}450{,}000$ | **৮১.৩৮%** | < ১০০% ✓ |
| ডান শোল্ডার ÷ বাম শোল্ডার | $720{,}000 / 1{,}450{,}000$ | **৪৯.৬৬%** | < হেড ✓ |
| ব্রেকআউট ÷ ADV(২০) | $2{,}650{,}000 / 980{,}000$ | **২.৭০×** | ≥ ১.৫× ✓ |

**ডান শোল্ডারে বাম শোল্ডারের অর্ধেকেরও কম ভলিউম লেনদেন হয়েছে।** একে মানুষে অনুবাদ করুন: জানুয়ারিতে যাঁরা ৮২ টাকায় এই শেয়ারের পিছু নিতে রাজি ছিলেন, মার্চের শুরু নাগাদ তাঁদের কেনা মূলত শেষ। ৮৩.১০ প্রিন্টটি অনেক ছোট একটি দল বানিয়েছে, আর ছোট দল কোনো স্তর রক্ষা করতে পারে না।

তারপর ভাঙনটি এলো **গড়ের ২.৭০ গুণ ভলিউমে**, যা ঠিক আয়না-প্রতিচ্ছবি: ওঠার পথে যে অংশগ্রহণ উবে গিয়েছিল তা নামার পথে তৎক্ষণাৎ ফিরে এলো। ঐ অসামঞ্জস্য — উচ্চতায় পাতলা, ভাঙনে ভারী — একটি বিতরণ টপকে সাধারণ পুলব্যাক থেকে আলাদা করা স্বাক্ষর।

### রায়, আর তারপর কঠিন অংশ

প্রতিটি গেট পাস করে। তারল্য PASS, প্রাধান্য ৭.১০% ≥ ৫, অসমতা ৩.৭৭% ≤ ১৫, স্থিতিকাল ৩৪ ≥ ২৫, ডান শোল্ডারে ভলিউম কমছে, ব্রেকআউট ২.৭০×-এ নিশ্চিত। শিট ফেরত দেয়:

> **VALID — থ্রোব্যাক ট্রেড করুন, অর্ধ-টার্গেটে কিস্তিতে বেরোন।**

আর এখানেই বাংলাদেশি পাঠককে পাঠ্যবইয়ের সঙ্গে পথ আলাদা করতে হবে। **এটি একটি টপ। ডিএসই-তে নির্ভরযোগ্য শর্ট সাইড নেই।** তাই "ট্রেড" মানে ঠিক দুটির একটি:

১. **আপনি RUPALICEM-এর মালিক হলে:** এটি বিক্রির নির্দেশ, আর যুক্তিসঙ্গতভাবে তা ভাঙনের আগে ডান শোল্ডারেই বিক্রির নির্দেশ ছিল।
২. **মালিক না হলে:** এটি তথ্য। এটি বলে ডিপ কিনবেন না, আর বলে একটি বিতরণ টপ চার্টে দেখতে কেমন — যে চার্ট আপনি আবার দেখবেন। এটি কোনো ট্রেড নয়।

নিচের পুরস্কার-থেকে-ঝুঁকির পাটিগণিতটি তবু পুরোটা করার মতো, কারণ *অভিন্ন* পাটিগণিতই ইনভার্স হেড অ্যান্ড শোল্ডারস — বটম — নিয়ন্ত্রণ করে, আর সেখানে আপনি কাজ করতে পারেন। **টপে যন্ত্রকৌশল শিখুন; পুঁজি নামান বটমে।**

### ব্রেকআউট বার কেন ভুল প্রস্থান দাম

ধরুন আপনি ভাঙনেই কাজ করেছিলেন। ক্লোজ ৬৯.৮০, আর একমাত্র কাঠামোগতভাবে সৎ ইনভ্যালিডেশন ডান শোল্ডারের উচ্চতা ৮৩.১০:

$$\\text{টার্গেট} = N(56) - h = 70.50 - 15.90 = 54.60$$
$$\\text{পুরস্কার} = 69.80 - 54.60 = 15.20, \\qquad \\text{ঝুঁকি} = 83.10 - 69.80 = 13.30$$
$$R{:}R = \\frac{15.20}{13.30} = \\mathbf{1.14}, \\qquad p^{*} = \\frac{1}{1 + 1.14} = 46.67\\%$$

**এমন একটি প্যাটার্নে আপনাকে প্রায় ৪৭% ক্ষেত্রে ঠিক হতে হবে যার পূর্ণ টার্গেট তার চেয়ে যথেষ্ট কম বার স্পর্শিত হয়।** পজিশনটি কেবল মাঝারি নয়; মেজার্ড-মুভ সাফল্যের হারের যেকোনো সৎ অনুমানে এটি কমিশনের আগেই ঋণাত্মক।

### থ্রোব্যাক

বার ৬০–৬২: দাম ভাঙা নেকলাইনে ফিরে ওঠে, যা এখন রেজিস্ট্যান্স — অধ্যায় ৩০-এর মেরুতা নীতি, অনুভূমিক নয়, ঢালু রেখায় প্রয়োগ করা। এটি ৭১.৬০ উচ্চতা ছেপে থেমে যায়।

$$E = 70.00, \\qquad X = 71.60 + 1.85 = 73.45$$
$$\\text{পুরস্কার} = 70.00 - 54.60 = 15.40, \\qquad \\text{ঝুঁকি} = 73.45 - 70.00 = 3.45$$
$$R{:}R = \\frac{15.40}{3.45} = \\mathbf{4.46}, \\qquad p^{*} = \\frac{1}{1 + 4.46} = 18.30\\%$$

| | ভাঙনে কাজ | থ্রোব্যাকের অপেক্ষা |
|---|---|---|
| প্রবেশ | ৬৯.৮০ | **৭০.০০** |
| ইনভ্যালিডেশন | ৮৩.১০ | **৭৩.৪৫** |
| শেয়ারপ্রতি ঝুঁকি | ১৩.৩০ | **৩.৪৫** |
| ৫৪.৬০ পর্যন্ত পুরস্কার | ১৫.২০ | **১৫.৪০** |
| $R{:}R$ | ১.১৪ | **৪.৪৬** |
| ব্রেক-ইভেন হিট রেট | **৪৬.৬৭%** | **১৮.৩০%** |

**প্রবেশের দাম প্রায় নড়েইনি — ৬৯.৮০ বনাম ৭০.০০ — আর প্রয়োজনীয় নির্ভুলতা অর্ধেকেরও বেশি কমেছে।** পূর্বাভাসের কিছুই উন্নত হয়নি। যা উন্নত হয়েছে তা হলো থ্রোব্যাক একটি *কাছের* কাঠামো জোগায় যার বিপরীতে ভুল হওয়া যায়: যে নেকলাইনে সে সবেমাত্র ব্যর্থ হলো, প্লাস এক ATR। থ্রোব্যাক তৈরি হওয়ার আগে নিকটতম সৎ ইনভ্যালিডেশন ১৩.৩০ টাকা দূরে।

**এটি এই অধ্যায়ের একক সবচেয়ে গুরুত্বপূর্ণ পাটিগণিত, আর এটি সাধারণীকৃত হয়।** অধ্যায় ৩০ অনুভূমিক লেভেলে একই ফল পেয়েছে (২৩.০১% বনাম ৪৩.০৯%); অধ্যায় ২৯ পেয়েছে কন্টিনিউয়েশন রিটেস্টে। কাঠামোগত ইনভ্যালিডেশনের কাছের প্রবেশ সস্তা; দূরের প্রবেশ ব্যয়বহুল। বিষয়টি প্যাটার্ন নিয়ে নয়।

### কিস্তিতে বেরোনো, কারণ পূর্ণ টার্গেট প্রতিশ্রুতি নয়

অর্ধ-টার্গেটে অর্ধেক পজিশন সরিয়ে নিন:

$$\\text{অর্ধ-টার্গেট} = 70.50 - \\frac{15.90}{2} = 62.55$$

থ্রোব্যাক প্রবেশ থেকে তা ৭.৪৫ টাকা, পূর্ণ টার্গেট পর্যন্ত ১৫.৪০-এর বিপরীতে। এবার সেই ক্ষেত্রটি ভাবুন যেখানে অর্ধ-টার্গেট পূরণ হয় ও দাম তারপর ঘুরে বাকিটাকে ব্রেকইভেন স্টপে ফেলে:

$$\\text{ফলাফল} = 0.5 \\times 7.45 + 0.5 \\times 0 = 3.725 \\text{ প্রতি শেয়ার} \\;\\Rightarrow\\; \\frac{3.725}{3.45} = +1.08R$$

**যে ট্রেড "ব্যর্থ" — টার্গেটে কখনো পৌঁছায়নি, বাকিটা স্টপ আউট — তাও এক এককের সামান্য বেশি ঝুঁকি ফেরত দেয়।** কিস্তিতে বেরোনো এটিই কিনে দেয়, আর এ কারণেই মেজার্ড মুভকে বেরোনো *শুরু* করার জায়গা গণ্য করা উচিত, বেরিয়ে যাওয়ার জায়গা নয়। দুটি টার্গেটই পূরণ হলে মিশ্র লাভ $(7.45 + 15.40)/2 = 11.425$, অর্থাৎ **+৩.৩১R**।

### ডিএসই স্তর: সার্কিট সীমা একে বহু-সপ্তাহের ট্রেড বানায়

পূর্ণ টার্গেট অনেক নিচে:

$$\\frac{15.90}{70.50} \\times 100 = 22.55\\%$$

১০% দৈনিক ব্যান্ডে (বর্তমান স্তরভিত্তিক ডিএসই নিয়ম যাচাই করুন) দ্রুততম সম্ভাব্য পথ:

$$70.50 \\to 63.45 \\to 57.11 \\to 51.39$$

**ন্যূনতম তিনটি লিমিট-ডাউন সেশন, আর তা একটি কল্পনা — প্রকৃত পতন প্রতিদিন ব্যান্ডে চলে না।** বাস্তবে এটি তিন থেকে ছয় সপ্তাহের ধারণ। ৬২.৫৫-এ অর্ধ-টার্গেট ১১.২৮% পতন, তাই **ন্যূনতম দুই সেশন**।

তিনটি পরিণতি আসে, আর একটিও ঐচ্ছিক নয়:

১. **আপনার স্টপ ইন্ট্রাডে হইচইয়ের নয়, গ্যাপ ঝুঁকির মাপে হতে হবে।** ব্যর্থ প্যাটার্নে একটি লিমিট-আপ ওপেন উল্টো দিকেও ৭৩.৪৫ পেরিয়ে ছাপতে পারে।
২. **থ্রোব্যাক পরিচ্ছন্ন তিন দিনের ব্যাপার না-ও হতে পারে।** ব্যান্ড দৈনিক পরিসর সংকুচিত করায় নেকলাইনে ফেরা দুই সপ্তাহ নিতে পারে।
৩. **এখানে ব্যর্থ প্যাটার্ন থেকে বেরোনো ব্যয়বহুল।** RUPALICEM ৮৩.১০-এর ওপরে ক্লোজ করলে টপের জন্য অবস্থান নেওয়া সবাই একসঙ্গে ভুল দিকে — আর যে বাজার লিমিট-আপে আটকে যেতে পারে সেখানে "আমি বেরিয়ে যাব" কোনো পরিকল্পনা নয়।

### বিপরীত ঘটনা: কী এটিকে অযোগ্য করত

একটি সংখ্যা বদলান, রায় উল্টে যায়। ধরুন ডান শোল্ডার ৭,২০,০০০-এর বদলে ১৫,২০,০০০ শেয়ারে ছাপত:

$$\\frac{1{,}520{,}000}{1{,}180{,}000} = 128.8\\% \\;>\\; 100\\% \\;\\Rightarrow\\; \\textbf{VOLUME FAILS}$$

জ্যামিতি অক্ষত থাকত — একই প্রাধান্য, একই প্রতিসাম্য, একই স্থিতিকাল, একই সুন্দর আকৃতি। **আর সেটি হেড অ্যান্ড শোল্ডারস হতো না।** ডান শোল্ডারে বাড়তে থাকা ভলিউম বলে ক্রেতারা আসছেন, যাচ্ছেন না, আর তিন-চূড়ার আকৃতিটি তখন নিছক একটি আকৃতি।

একইভাবে, হেড ৮৯.০০-র বদলে ৮৬.০০-তে ছাপলে:

$$\\frac{86.00 - 83.10}{83.10} \\times 100 = 3.49\\% \\;<\\; 5\\% \\;\\Rightarrow\\; \\textbf{INVALID — হেড যথেষ্ট প্রধান নয়}$$

**প্রায় সমান উচ্চতার তিনটি চূড়া হলো ট্রিপল টপ বা একটি রেঞ্জ, হেড অ্যান্ড শোল্ডারস নয়**, আর সেগুলো ভিন্ন ট্রিগার ও ভিন্ন মেজার্ড মুভ বহন করে। ভুল নামে ডাকলে ভুল টার্গেট পাবেন।`,
    },

    formula: {
      en: `Every formula below is written so that it can be evaluated *before* the outcome is known. That constraint — not elegance — is what selects the functional forms.

### 1. The liquidity gate, which is a precondition and not a score

$$\\Lambda = \\frac{1}{T}\\sum_{b=1}^{T} P_b V_b, \\qquad \\text{Proceed} \\iff \\Lambda \\ge \\Lambda_{\\min}$$

with $\\Lambda_{\\min} = $ BDT 2 crore over the pattern window of $T$ bars.

**This is a gate, not a term.** It returns "do not interpret", not "interpret with a discount". The distinction is Chapter 25's quality floor and Chapter 30's exhaustion override arriving in a third domain: **a condition that a good-looking total can outvote is not a condition.** On a scrip trading BDT 40 lakh a day, a seven-week three-peak shape is one account's inventory schedule, and there is no weighting scheme that fixes that — the geometry is measuring the wrong object.

On RUPALICEM $\\Lambda = 4.8$ crore, so the gate opens and everything below is licensed.

### 2. The neckline is a line, so it needs a slope and an evaluation rule

$$m = \\frac{P_{T_2} - P_{T_1}}{b_{T_2} - b_{T_1}}, \\qquad N(b) = P_{T_1} + m\\,(b - b_{T_1})$$

**Two troughs define the line; do not fit a regression through more points.** A regression would incorporate bars that are not structural pivots, and the neckline's entire meaning is "where buyers stepped in", which is a statement about the two specific lows and nothing else.

The slope is then normalised before it is judged:

$$\\sigma = \\frac{|m|}{P_H} \\times 100 \\;\\le\\; 0.25\\%\\text{ per bar}$$

**Normalising by the head price rather than leaving the slope in taka is what makes the threshold portable.** A slope of 0.10 taka per bar is gentle on an 89-taka stock and violent on a 4-taka one. Leave it in taka and your 0.25% rule silently becomes a different rule on every instrument you screen.

Why cap the slope at all? Because a steeply sloping neckline means the two troughs are far apart in price, and the "line" is then just a segment connecting two unrelated lows. **At extreme slopes the head-and-shoulders reading and the ordinary-downtrend reading become the same chart, and the pattern adds nothing.**

### 3. Pattern height, and the choice that most people get wrong

$$h = P_H - N(b_H)$$

**The height is measured from the head to the neckline evaluated at the head's bar, not to either trough.** This is the single most common arithmetic error in the chapter, and it is worth seeing why the alternative is wrong rather than merely being told.

The neckline is a moving estimate of where demand sits. At bar 30, demand did not sit at trough 1's price of 74.00 (that was nine bars earlier) nor at trough 2's 72.20 (nine bars later). It sat at the interpolated 73.10. The pattern height is the distance price travelled *above the prevailing demand level*, so the demand level must be evaluated at the same moment as the peak.

Using the wrong anchor on RUPALICEM:

| Anchor | Height | Target from 70.50 | Error vs correct |
|---|---|---|---|
| Trough 1 (74.00) | 15.00 | 55.50 | +0.90 |
| **Neckline at head (73.10)** | **15.90** | **54.60** | — |
| Trough 2 (72.20) | 16.80 | 53.70 | −0.90 |

A 1.80-taka spread in target on a 15.90-taka move. **That is 11% of the entire expected gain, decided by which of three lines you happened to click.**

### 4. Structure tests, and why each denominator is what it is

$$\\rho = \\frac{P_H - \\max(P_{LS}, P_{RS})}{\\max(P_{LS}, P_{RS})} \\times 100 \\;\\ge\\; 5\\%$$

Prominence is measured against the **higher** shoulder, not the mean. If the head only clears the lower shoulder, the shape is a triple top with an irregularity, and the max is the strict reading.

$$\\alpha = \\frac{|P_{LS} - P_{RS}|}{h} \\times 100 \\;\\le\\; 15\\%$$

**Shoulder asymmetry is divided by pattern height, not by price.** This is deliberate and it is the choice most published definitions get wrong. A 60-paisa shoulder gap is trivial on a 15.90-taka formation ($\\alpha = 3.77\\%$) and disqualifying on a 3.00-taka one ($\\alpha = 20\\%$). Divide by price instead and both read 0.7%, which tells you nothing about whether the two shoulders are the *same feature*.

$$\\tau = \\frac{|(b_H - b_{LS}) - (b_{RS} - b_H)|}{\\tfrac{1}{2}\\big[(b_H - b_{LS}) + (b_{RS} - b_H)\\big]} \\times 100 \\;\\le\\; 40\\%$$

Time asymmetry uses the **mean** of the two spans as the denominator rather than either span, so the measure is symmetric: swapping left and right must not change the answer. Divide by the left span alone and an 18/16 pattern scores differently from a 16/18 pattern, which is indefensible.

The 40% tolerance is far looser than the 15% on price, and that is intentional. **Time is the noisier axis.** Markets compress and stretch the calendar; they are much less willing to move price arbitrarily.

$$D = b_{RS} - b_{LS} \\;\\ge\\; 25 \\text{ bars}$$

**The duration floor is what stops you finding head and shoulders in three days of intraday chop.** A reversal pattern claims a change in the balance of a multi-week accumulation. A five-bar shape has not had time to redistribute anything.

### 5. The volume signature, expressed as strict inequalities

$$V_H < V_{LS}, \\qquad V_{RS} < V_H, \\qquad \\frac{V_{\\text{break}}}{\\overline{ADV}_{20}} \\ge 1.5$$

**These are the conditions that carry the causal story, and they are the ones most often waived.** The geometry describes what price did; the volume describes whether anyone was there. A new high on falling volume means the advance is being sustained by an absence of sellers rather than a presence of buyers, which is a fundamentally unstable state.

Report them as ratios, because a ratio survives being compared across stocks:

$$\\phi_1 = \\frac{V_H}{V_{LS}}, \\qquad \\phi_2 = \\frac{V_{RS}}{V_{LS}}$$

On RUPALICEM, $\\phi_1 = 81.38\\%$ and $\\phi_2 = 49.66\\%$ — a clean monotone decline. **If either ratio exceeds 100%, the formation is rejected outright.** Not downgraded. Rejected. A three-peak shape with rising volume into the right shoulder is a shape.

### 6. The trigger, the target, and the invalidation

$$\\text{Trigger}: \\; C_{b^{*}} < N(b^{*}) \\;\\land\\; \\frac{V_{b^{*}}}{\\overline{ADV}_{20}} \\ge 1.5$$

$$\\text{Target}: \\; T = N(b^{*}) - h, \\qquad \\text{Half-target}: \\; T_{1/2} = N(b^{*}) - \\frac{h}{2}$$

$$\\text{Invalidation}: \\; X_0 = P_{RS}$$

**Note that the target projects from $N(b^{*})$ — the neckline at the breakout bar — and not from the closing price.** The measured move is a property of the structure, so its origin must be a structural point. Anchor it to your fill and two traders with the same pattern get two different targets, which means the target was never about the pattern.

### 7. Entry economics, and the result that generalises across three chapters

$$R{:}R = \\frac{E - T}{X - E}, \\qquad p^{*} = \\frac{1}{1 + R{:}R}$$

The two candidate entries differ only in $X$:

$$R{:}R_{\\text{break}} = \\frac{C_{b^{*}} - T}{P_{RS} - C_{b^{*}}}, \\qquad R{:}R_{\\text{throwback}} = \\frac{E_{tb} - T}{\\big(H_{tb} + ATR_{14}\\big) - E_{tb}}$$

**The numerators are almost identical; the denominators differ by a factor of nearly four.** On RUPALICEM the break gives 1.14 and the throwback 4.46, entries 20 paisa apart. Nothing about the forecast changed. **What changed is that the throwback created a nearby structure to be wrong against.**

Why $H_{tb} + ATR_{14}$ rather than $H_{tb}$ exactly? Because a stop resting exactly at the throwback high will be taken out by ordinary noise on a bar that does not invalidate anything. **One ATR is the smallest buffer that says "this exceeded a normal day", which is the least you should require before conceding the thesis.**

### 8. Scaling, because the measured move is a reference and not a promise

Let $q$ be the fraction taken at the half-target and suppose the remainder is stopped at breakeven:

$$\\text{Outcome}_R = \\frac{q\\,(E - T_{1/2})}{X - E}$$

With $q = 0.5$ on RUPALICEM: $0.5 \\times 7.45 / 3.45 = +1.08R$ on a trade that never reached its target. **Scaling converts the modal outcome — "it moved most of the way and then turned" — from a scratch into a win.** If both fill, the blended result is $+3.31R$.

The general point: **you should never design a plan whose only non-negative outcome requires the full measured move.** The distribution of pattern outcomes has far more mass in "went halfway" than in "went all the way", and the plan should be shaped like the distribution.

### 9. The other formations, specified

| Pattern | Trigger | Height $h$ | Invalidation | Extra condition |
|---|---|---|---|---|
| Head & shoulders top | close $< N(b^{*})$ | $P_H - N(b_H)$ | $P_{RS}$ | $V_H<V_{LS}$, $V_{RS}<V_H$ |
| Inverse H&S | close $> N(b^{*})$ | $N(b_H) - P_H$ | $P_{RS}$ | breakout volume surge; rising $V_{RS}$ is *positive* |
| Double top | close $< P_{\\text{trough}}$ | $\\max(P_1,P_2) - P_{\\text{trough}}$ | $\\max(P_1,P_2)$ | $\\frac{|P_1-P_2|}{\\max} \\le 3\\%$; $b_2-b_1 \\ge 20$; trough $\\ge 10\\%$ below peaks |
| Triple top | close $< \\min(\\text{troughs})$ | $\\max(P_i) - \\min(\\text{troughs})$ | $\\max(P_i)$ | failure is a strong continuation signal |
| Rounding bottom | close $>$ left-rim high | rim-to-base depth | base low | volume bowl: heavy at rims, light at centre |
| V-reversal | — | — | — | **undefined by construction** |
| Broadening top | — | — | — | risk-reduction signal only |

**The V-reversal row is empty and that is the correct entry, not an omission.** Every other row has a trigger because every other pattern has a right side that forms after the extreme. A V does not. Any formula you write for it must reference the extreme itself, and the extreme is only identifiable in hindsight. **A backtest that trades V-reversals profitably has used the low as an input; that is look-ahead bias, and no amount of parameter tuning removes it.**

### 10. The DSE corrections, applied to the outputs above

$$n_{\\min} = \\left\\lceil \\frac{\\ln\\!\\big(T / N(b^{*})\\big)}{\\ln(1 - \\delta)} \\right\\rceil$$

where $\\delta$ is the daily circuit band. With $\\delta = 0.10$, $T = 54.60$ and $N(b^{*}) = 70.50$:

$$n_{\\min} = \\left\\lceil \\frac{\\ln(0.7745)}{\\ln(0.90)} \\right\\rceil = \\left\\lceil \\frac{-0.2555}{-0.1054} \\right\\rceil = \\lceil 2.42 \\rceil = 3$$

**Three sessions is the theoretical floor, achieved only by three consecutive limit-down closes, which essentially never happens.** Budget three to six weeks. The practical consequences:

| DSE reality | Effect on the formulas above |
|---|---|
| Circuit bands | Stretch the breakout across sessions; the "breakout day" is a breakout week. Size the stop for gap risk. |
| Floor-price windows | Any trough that sat on an administered floor is not a trough — no demand was expressed there. Exclude it per Chapter 26 before fitting the neckline. |
| Thin free float | $\\Lambda \\ge 2$ crore is a floor, not a target. Below it, refuse to interpret. |
| **No short side** | Every top formula computes a number you cannot trade. **Use them to learn the mechanics and to time exits; deploy capital on the inverse forms.** |`,
      bn: `নিচের প্রতিটি সূত্র এমনভাবে লেখা যাতে ফলাফল জানার *আগেই* তা মূল্যায়ন করা যায়। ঐ সীমাবদ্ধতাই — কমনীয়তা নয় — ফাংশনের রূপগুলো বাছাই করে।

### ১. তারল্য গেট, যা একটি পূর্বশর্ত, স্কোর নয়

$$\\Lambda = \\frac{1}{T}\\sum_{b=1}^{T} P_b V_b, \\qquad \\text{এগোন} \\iff \\Lambda \\ge \\Lambda_{\\min}$$

যেখানে $T$ বারের প্যাটার্ন উইন্ডোজুড়ে $\\Lambda_{\\min} = $ ২ কোটি টাকা।

**এটি একটি গেট, কোনো পদ নয়।** এটি ফেরত দেয় "ব্যাখ্যা করবেন না", "ছাড় দিয়ে ব্যাখ্যা করুন" নয়। পার্থক্যটি অধ্যায় ২৫-এর গুণমান-মেঝে ও অধ্যায় ৩০-এর এক্সহসশন অগ্রাহ্যকারী তৃতীয় ক্ষেত্রে আসছে: **যে শর্তকে একটি সুন্দর-দেখতে মোট ভোটে হারাতে পারে তা শর্ত নয়।** দিনে ৪০ লক্ষ টাকা লেনদেনের স্ক্রিপে সাত সপ্তাহের তিন-চূড়া আকৃতি একটি অ্যাকাউন্টের ইনভেন্টরি সূচি, আর কোনো ভারায়ন পদ্ধতি তা সারায় না — জ্যামিতিটি ভুল বস্তু মাপছে।

RUPALICEM-এ $\\Lambda = ৪.৮$ কোটি, তাই গেট খোলে আর নিচের সবকিছু অনুমোদিত।

### ২. নেকলাইন একটি রেখা, তাই তার ঢাল ও মূল্যায়ন নিয়ম লাগে

$$m = \\frac{P_{T_2} - P_{T_1}}{b_{T_2} - b_{T_1}}, \\qquad N(b) = P_{T_1} + m\\,(b - b_{T_1})$$

**দুটি খাদ রেখাটি সংজ্ঞায়িত করে; আরও বিন্দুর মধ্য দিয়ে রিগ্রেশন বসাবেন না।** রিগ্রেশন এমন বার ঢোকাত যেগুলো কাঠামোগত পিভট নয়, আর নেকলাইনের পুরো অর্থই হলো "ক্রেতারা কোথায় এগিয়ে এসেছিলেন", যা ঐ নির্দিষ্ট দুটি নিম্নবিন্দু নিয়ে বক্তব্য, আর কিছু নয়।

ঢালটি বিচারের আগে স্বাভাবিকীকৃত হয়:

$$\\sigma = \\frac{|m|}{P_H} \\times 100 \\;\\le\\; ০.২৫\\%\\text{ প্রতি বার}$$

**ঢালকে টাকায় না রেখে হেডের দামে স্বাভাবিকীকরণই সীমাটিকে বহনযোগ্য করে।** প্রতি বারে ০.১০ টাকা ঢাল ৮৯ টাকার শেয়ারে মৃদু আর ৪ টাকার শেয়ারে হিংস্র। টাকায় রেখে দিন, আর আপনার ০.২৫% নিয়ম নীরবে প্রতিটি স্ক্রিন করা উপকরণে ভিন্ন নিয়ম হয়ে যাবে।

ঢালে সীমা টানব কেন? কারণ খাড়া ঢালু নেকলাইন মানে দুটি খাদ দামে অনেক দূরে, আর "রেখা"-টি তখন কেবল দুটি সম্পর্কহীন নিম্নবিন্দু জোড়া দেওয়া একটি রেখাংশ। **চরম ঢালে হেড-অ্যান্ড-শোল্ডারস পাঠ ও সাধারণ নিম্নপ্রবণতার পাঠ একই চার্ট হয়ে যায়, আর প্যাটার্নটি কিছুই যোগ করে না।**

### ৩. প্যাটার্নের উচ্চতা, আর যে পছন্দটি বেশিরভাগ মানুষ ভুল করেন

$$h = P_H - N(b_H)$$

**উচ্চতা মাপা হয় হেড থেকে হেডের বারে মূল্যায়িত নেকলাইন পর্যন্ত, কোনো খাদ পর্যন্ত নয়।** এটি অধ্যায়ের সবচেয়ে সাধারণ পাটিগণিতের ভুল, আর কেবল শুনে নেওয়ার বদলে বিকল্পটি কেন ভুল তা দেখা মূল্যবান।

নেকলাইন হলো চাহিদা কোথায় বসে তার একটি চলমান অনুমান। বার ৩০-এ চাহিদা খাদ ১-এর ৭৪.০০ দামে বসেনি (তা ছিল নয় বার আগে), খাদ ২-এর ৭২.২০-তেও নয় (নয় বার পরে)। তা বসেছিল অন্তর্বেশিত ৭৩.১০-এ। প্যাটার্নের উচ্চতা হলো *বিরাজমান চাহিদা স্তরের ওপরে* দাম যতদূর গেছে, তাই চাহিদা স্তরটি চূড়ার সঙ্গে একই মুহূর্তে মূল্যায়িত হতে হবে।

RUPALICEM-এ ভুল নোঙর ব্যবহার করলে:

| নোঙর | উচ্চতা | ৭০.৫০ থেকে টার্গেট | সঠিকের তুলনায় ভুল |
|---|---|---|---|
| খাদ ১ (৭৪.০০) | ১৫.০০ | ৫৫.৫০ | +০.৯০ |
| **হেডে নেকলাইন (৭৩.১০)** | **১৫.৯০** | **৫৪.৬০** | — |
| খাদ ২ (৭২.২০) | ১৬.৮০ | ৫৩.৭০ | −০.৯০ |

১৫.৯০ টাকার চলনে টার্গেটে ১.৮০ টাকার বিস্তার। **অর্থাৎ পুরো প্রত্যাশিত লাভের ১১%, যা ঠিক হয় তিনটি রেখার কোনটিতে আপনি ক্লিক করেছেন তা দিয়ে।**

### ৪. কাঠামো পরীক্ষা, আর প্রতিটি হর কেন যা তা

$$\\rho = \\frac{P_H - \\max(P_{LS}, P_{RS})}{\\max(P_{LS}, P_{RS})} \\times 100 \\;\\ge\\; ৫\\%$$

প্রাধান্য মাপা হয় **উঁচু** শোল্ডারের বিপরীতে, গড়ের নয়। হেড কেবল নিচু শোল্ডারটি ছাড়ালে আকৃতিটি একটি অনিয়মসহ ট্রিপল টপ, আর সর্বোচ্চ ব্যবহারই কঠোর পাঠ।

$$\\alpha = \\frac{|P_{LS} - P_{RS}|}{h} \\times 100 \\;\\le\\; ১৫\\%$$

**শোল্ডার অসমতা প্যাটার্নের উচ্চতা দিয়ে ভাগ করা হয়, দাম দিয়ে নয়।** এটি ইচ্ছাকৃত এবং প্রকাশিত বেশিরভাগ সংজ্ঞা এই পছন্দটিই ভুল করে। ১৫.৯০ টাকার গঠনে ৬০ পয়সার শোল্ডার ব্যবধান তুচ্ছ ($\\alpha = ৩.৭৭\\%$) আর ৩.০০ টাকার গঠনে অযোগ্যতাসূচক ($\\alpha = ২০\\%$)। বদলে দাম দিয়ে ভাগ করুন, দুটিই ০.৭% পড়ে, যা শোল্ডার দুটি *একই বৈশিষ্ট্য* কি না সে বিষয়ে কিছুই বলে না।

$$\\tau = \\frac{|(b_H - b_{LS}) - (b_{RS} - b_H)|}{\\tfrac{1}{2}\\big[(b_H - b_{LS}) + (b_{RS} - b_H)\\big]} \\times 100 \\;\\le\\; ৪০\\%$$

সময় অসমতা হর হিসেবে দুটি ব্যাপ্তির **গড়** ব্যবহার করে, কোনো একটি ব্যাপ্তি নয়, যাতে পরিমাপটি প্রতিসম হয়: বাম-ডান অদলবদল করলে উত্তর বদলানো চলবে না। কেবল বাম ব্যাপ্তি দিয়ে ভাগ করুন, আর ১৮/১৬ প্যাটার্ন ১৬/১৮ প্যাটার্নের চেয়ে আলাদা স্কোর পায়, যা অসমর্থনযোগ্য।

৪০% সহনশীলতা দামের ১৫%-এর চেয়ে অনেক শিথিল, আর তা ইচ্ছাকৃত। **সময়ই বেশি গোলমেলে অক্ষ।** বাজার পঞ্জিকাকে সংকুচিত ও প্রসারিত করে; দাম নিয়ে ইচ্ছেমতো নড়াচড়ায় তারা অনেক কম রাজি।

$$D = b_{RS} - b_{LS} \\;\\ge\\; ২৫ \\text{ বার}$$

**স্থিতিকালের মেঝেই আপনাকে তিন দিনের ইন্ট্রাডে হইচইয়ে হেড অ্যান্ড শোল্ডারস খুঁজে পাওয়া থেকে থামায়।** রিভার্সাল প্যাটার্ন বহু-সপ্তাহের সঞ্চয়ের ভারসাম্যে পরিবর্তনের দাবি করে। পাঁচ বারের আকৃতি কিছু পুনর্বণ্টনের সময়ই পায়নি।

### ৫. ভলিউম স্বাক্ষর, কঠোর অসমতা হিসেবে প্রকাশিত

$$V_H < V_{LS}, \\qquad V_{RS} < V_H, \\qquad \\frac{V_{\\text{break}}}{\\overline{ADV}_{20}} \\ge 1.5$$

**এগুলোই কার্যকারণের গল্প বহন করে, আর এগুলোই সবচেয়ে বেশি মওকুফ করা হয়।** জ্যামিতি বর্ণনা করে দাম কী করেছে; ভলিউম বর্ণনা করে সেখানে কেউ ছিল কি না। কমতে থাকা ভলিউমে নতুন উচ্চতা মানে উত্থানটি ক্রেতার উপস্থিতিতে নয়, বিক্রেতার অনুপস্থিতিতে টিকে আছে, যা মৌলিকভাবে অস্থিতিশীল একটি অবস্থা।

এগুলোকে অনুপাত হিসেবে জানান, কারণ অনুপাত বিভিন্ন শেয়ারে তুলনায় টিকে থাকে:

$$\\phi_1 = \\frac{V_H}{V_{LS}}, \\qquad \\phi_2 = \\frac{V_{RS}}{V_{LS}}$$

RUPALICEM-এ $\\phi_1 = ৮১.৩৮\\%$ ও $\\phi_2 = ৪৯.৬৬\\%$ — পরিচ্ছন্ন একমুখী হ্রাস। **কোনো একটি অনুপাত ১০০% ছাড়ালে গঠনটি সরাসরি বাতিল।** অবনমিত নয়। বাতিল। ডান শোল্ডারে বাড়তে থাকা ভলিউমসহ তিন-চূড়ার আকৃতি নিছক একটি আকৃতি।

### ৬. ট্রিগার, টার্গেট ও ইনভ্যালিডেশন

$$\\text{ট্রিগার}: \\; C_{b^{*}} < N(b^{*}) \\;\\land\\; \\frac{V_{b^{*}}}{\\overline{ADV}_{20}} \\ge 1.5$$

$$\\text{টার্গেট}: \\; T = N(b^{*}) - h, \\qquad \\text{অর্ধ-টার্গেট}: \\; T_{1/2} = N(b^{*}) - \\frac{h}{2}$$

$$\\text{ইনভ্যালিডেশন}: \\; X_0 = P_{RS}$$

**লক্ষ করুন টার্গেট $N(b^{*})$ — ব্রেকআউট বারে নেকলাইন — থেকে প্রক্ষেপিত, ক্লোজিং দাম থেকে নয়।** মেজার্ড মুভ কাঠামোর একটি ধর্ম, তাই তার উৎসও একটি কাঠামোগত বিন্দু হতে হবে। একে আপনার ফিলে নোঙর করুন, আর একই প্যাটার্নে দুজন ট্রেডার দুটি ভিন্ন টার্গেট পাবেন, যার মানে টার্গেটটি কখনোই প্যাটার্ন নিয়ে ছিল না।

### ৭. প্রবেশের অর্থনীতি, আর যে ফল তিনটি অধ্যায়জুড়ে সাধারণীকৃত হয়

$$R{:}R = \\frac{E - T}{X - E}, \\qquad p^{*} = \\frac{1}{1 + R{:}R}$$

দুটি সম্ভাব্য প্রবেশ কেবল $X$-এ আলাদা:

$$R{:}R_{\\text{ভাঙন}} = \\frac{C_{b^{*}} - T}{P_{RS} - C_{b^{*}}}, \\qquad R{:}R_{\\text{থ্রোব্যাক}} = \\frac{E_{tb} - T}{\\big(H_{tb} + ATR_{14}\\big) - E_{tb}}$$

**লবগুলো প্রায় অভিন্ন; হরগুলোর পার্থক্য প্রায় চার গুণ।** RUPALICEM-এ ভাঙন দেয় ১.১৪ আর থ্রোব্যাক ৪.৪৬, প্রবেশ দুটি ২০ পয়সার ব্যবধানে। পূর্বাভাসের কিছুই বদলায়নি। **যা বদলেছে তা হলো থ্রোব্যাক একটি কাছের কাঠামো তৈরি করেছে যার বিপরীতে ভুল হওয়া যায়।**

ঠিক $H_{tb}$-র বদলে $H_{tb} + ATR_{14}$ কেন? কারণ থ্রোব্যাক উচ্চতায় ঠিক বসানো স্টপ এমন একটি বারে সাধারণ হইচইয়েই কেটে যাবে যা কিছুই বাতিল করে না। **এক ATR হলো ক্ষুদ্রতম বাফার যা বলে "এটি একটি স্বাভাবিক দিনকে ছাড়িয়েছে", আর যুক্তিটি ছাড়ার আগে অন্তত এটুকু দাবি করা উচিত।**

### ৮. কিস্তিতে বেরোনো, কারণ মেজার্ড মুভ নির্দেশক, প্রতিশ্রুতি নয়

$q$ হোক অর্ধ-টার্গেটে নেওয়া ভগ্নাংশ, আর ধরুন বাকিটা ব্রেকইভেনে স্টপ হয়:

$$\\text{ফলাফল}_R = \\frac{q\\,(E - T_{1/2})}{X - E}$$

RUPALICEM-এ $q = 0.5$ দিয়ে: $0.5 \\times 7.45 / 3.45 = +১.০৮R$, এমন এক ট্রেডে যা কখনো টার্গেটে পৌঁছায়নি। **কিস্তিতে বেরোনো সবচেয়ে সম্ভাব্য ফলাফলটিকে — "বেশিরভাগ পথ গিয়ে তারপর ঘুরে গেল" — শূন্য থেকে জয়ে বদলে দেয়।** দুটিই পূরণ হলে মিশ্র ফল $+৩.৩১R$।

সাধারণ কথাটি: **কখনো এমন পরিকল্পনা বানাবেন না যার একমাত্র অ-ঋণাত্মক ফলাফলের জন্য পূর্ণ মেজার্ড মুভ লাগে।** প্যাটার্নের ফলাফল-বণ্টনে "পুরো পথ গেল"-এর চেয়ে "অর্ধেক পথ গেল"-এ অনেক বেশি ভর আছে, আর পরিকল্পনাটি বণ্টনের আকারেই হওয়া উচিত।

### ৯. অন্য গঠনগুলো, নির্দিষ্ট করা

| প্যাটার্ন | ট্রিগার | উচ্চতা $h$ | ইনভ্যালিডেশন | অতিরিক্ত শর্ত |
|---|---|---|---|---|
| হেড অ্যান্ড শোল্ডারস টপ | ক্লোজ $< N(b^{*})$ | $P_H - N(b_H)$ | $P_{RS}$ | $V_H<V_{LS}$, $V_{RS}<V_H$ |
| ইনভার্স H&S | ক্লোজ $> N(b^{*})$ | $N(b_H) - P_H$ | $P_{RS}$ | ব্রেকআউটে ভলিউম উল্লম্ফন; বাড়তি $V_{RS}$ *ইতিবাচক* |
| ডাবল টপ | ক্লোজ $< P_{\\text{খাদ}}$ | $\\max(P_1,P_2) - P_{\\text{খাদ}}$ | $\\max(P_1,P_2)$ | $\\frac{|P_1-P_2|}{\\max} \\le ৩\\%$; $b_2-b_1 \\ge ২০$; খাদ চূড়ার $\\ge ১০\\%$ নিচে |
| ট্রিপল টপ | ক্লোজ $< \\min(\\text{খাদসমূহ})$ | $\\max(P_i) - \\min(\\text{খাদসমূহ})$ | $\\max(P_i)$ | ব্যর্থতা একটি শক্তিশালী ধারাবাহিকতা সংকেত |
| রাউন্ডিং বটম | ক্লোজ $>$ বাম কিনারার উচ্চতা | কিনারা-থেকে-ভিত্তি গভীরতা | ভিত্তির নিম্নবিন্দু | ভলিউম বাটি: কিনারায় ভারী, কেন্দ্রে হালকা |
| V-রিভার্সাল | — | — | — | **গঠনগতভাবেই অসংজ্ঞায়িত** |
| ব্রডেনিং টপ | — | — | — | কেবল ঝুঁকি-হ্রাস সংকেত |

**V-রিভার্সালের সারিটি খালি আর সেটিই সঠিক এন্ট্রি, বাদ পড়া নয়।** অন্য প্রতিটি সারির ট্রিগার আছে কারণ অন্য প্রতিটি প্যাটার্নের একটি ডান পাশ আছে যা চরম বিন্দুর পরে গঠিত হয়। V-র নেই। এর জন্য লেখা যেকোনো সূত্রকে চরম বিন্দুটিকেই উল্লেখ করতে হবে, আর চরম বিন্দু কেবল পশ্চাদ্দৃষ্টিতেই শনাক্তযোগ্য। **যে ব্যাকটেস্ট V-রিভার্সালে লাভজনক লেনদেন করে তা নিম্নবিন্দুটিকে ইনপুট হিসেবে ব্যবহার করেছে; তা লুক-অ্যাহেড বায়াস, আর কোনো পরিমাণ প্যারামিটার টিউনিং তা সরায় না।**

### ১০. ডিএসই সংশোধনী, ওপরের আউটপুটে প্রয়োগ করা

$$n_{\\min} = \\left\\lceil \\frac{\\ln\\!\\big(T / N(b^{*})\\big)}{\\ln(1 - \\delta)} \\right\\rceil$$

যেখানে $\\delta$ দৈনিক সার্কিট ব্যান্ড। $\\delta = 0.10$, $T = 54.60$ ও $N(b^{*}) = 70.50$ দিয়ে:

$$n_{\\min} = \\left\\lceil \\frac{\\ln(0.7745)}{\\ln(0.90)} \\right\\rceil = \\left\\lceil \\frac{-0.2555}{-0.1054} \\right\\rceil = \\lceil 2.42 \\rceil = 3$$

**তিন সেশন তাত্ত্বিক মেঝে, যা কেবল পরপর তিনটি লিমিট-ডাউন ক্লোজে অর্জিত হয়, আর তা কার্যত কখনো ঘটে না।** তিন থেকে ছয় সপ্তাহ ধরে রাখার হিসাব করুন। ব্যবহারিক পরিণতি:

| ডিএসই বাস্তবতা | ওপরের সূত্রে প্রভাব |
|---|---|
| সার্কিট ব্যান্ড | ব্রেকআউটকে একাধিক সেশনে টেনে লম্বা করে; "ব্রেকআউট দিন" এখানে ব্রেকআউট সপ্তাহ। স্টপ গ্যাপ ঝুঁকির মাপে নিন। |
| ফ্লোর-প্রাইস উইন্ডো | প্রশাসিত মেঝেতে বসে থাকা কোনো খাদ আসলে খাদ নয় — সেখানে কোনো চাহিদা প্রকাশিত হয়নি। নেকলাইন বসানোর আগে অধ্যায় ২৬ অনুযায়ী বাদ দিন। |
| পাতলা ফ্রি ফ্লোট | $\\Lambda \\ge ২$ কোটি একটি মেঝে, লক্ষ্য নয়। তার নিচে ব্যাখ্যা করতে অস্বীকার করুন। |
| **শর্ট সাইড নেই** | প্রতিটি টপ-সূত্র এমন একটি সংখ্যা গণনা করে যা আপনি ট্রেড করতে পারবেন না। **যন্ত্রকৌশল শিখতে ও প্রস্থানের সময় ঠিক করতে ব্যবহার করুন; পুঁজি নামান ইনভার্স রূপগুলোতে।** |`,
    },

    manual: {
      en: `**Scenario.** RUPALICEM from §32.3, computed by hand. Every figure below reconciles exactly with the validator sheet, and the cell references are given so you can check them one at a time.

**Inputs.** Left shoulder 82.50 at bar 12; head 89.00 at bar 30; right shoulder 83.10 at bar 46; trough 1 74.00 at bar 21; trough 2 72.20 at bar 39; breakout bar 56. Volumes 1,450,000 / 1,180,000 / 720,000, breakout 2,650,000, ADV(20) 980,000. ATR(14) = 1.85. Average daily turnover over the window BDT 4.8 crore.

---

**Step 1 — Run the liquidity gate first, before you draw anything.** (B40, B41, B42)

$$\\Lambda = 4.8 \\text{ crore} \\;\\ge\\; 2.0 \\text{ crore} \\;\\Rightarrow\\; \\textbf{PASS}$$

**Do this first or you will waste an hour measuring the footprint of a single account.** Had this read BDT 0.9 crore, the correct output is not "weak pattern" — it is *stop*. The sheet is built so B42 short-circuits the whole verdict, and B56 reports "TOO THIN — the pattern is one account's footprint" regardless of how perfect the geometry is.

**Step 2 — Neckline slope.** (B14)

$$m = \\frac{B10 - B8}{B11 - B9} = \\frac{72.20 - 74.00}{39 - 21} = \\frac{-1.80}{18} = \\mathbf{-0.10} \\text{ BDT/bar}$$

Negative, so the neckline slopes gently down. **On a top, that is the favourable case** — buyers stepped in ten paisa lower per bar, which is weakening demand already visible before the break.

**Step 3 — Neckline under the head.** (B15)

$$N(30) = 74.00 + (-0.10)(30 - 21) = 74.00 - 0.90 = \\mathbf{73.10}$$

**This is the number that anchors the entire target, and it is not any of the prices on the chart.** It is an interpolation. If you skip this step and use trough 1 at 74.00 because it is visible and 73.10 is not, your target moves 90 paisa.

**Step 4 — Neckline at the breakout bar.** (B17)

$$N(56) = 74.00 + (-0.10)(56 - 21) = 74.00 - 3.50 = \\mathbf{70.50}$$

Note that these are two different numbers from the same line — 73.10 and 70.50 — used for two different purposes. **The height uses the neckline under the head; the target projects from the neckline at the break.** Confusing them is the second most common error in this chapter.

**Step 5 — Is the slope shallow enough to call it a neckline?** (B18)

$$\\sigma = \\frac{|-0.10|}{89.00} \\times 100 = \\mathbf{0.1124\\%} \\text{ per bar} \\;\\le\\; 0.25\\% \\;\\checkmark$$

**Step 6 — Head prominence.** (B21)

$$\\rho = \\frac{89.00 - \\max(82.50,\\, 83.10)}{\\max(82.50,\\, 83.10)} \\times 100 = \\frac{89.00 - 83.10}{83.10} \\times 100 = \\frac{5.90}{83.10} \\times 100 = \\mathbf{7.10\\%}$$

$7.10\\% \\ge 5\\%$ ✓. **Measured against the higher shoulder, 83.10, not the average of 82.80.** Using the average would give 7.49% — flattering, and wrong in exactly the direction that lets marginal patterns through.

**Step 7 — Pattern height.** (B22)

$$h = 89.00 - 73.10 = \\mathbf{15.90}$$

**Step 8 — Shoulder asymmetry, divided by height and not by price.** (B23)

$$\\alpha = \\frac{|82.50 - 83.10|}{15.90} \\times 100 = \\frac{0.60}{15.90} \\times 100 = \\mathbf{3.77\\%}$$

$3.77\\% \\le 15\\%$ ✓, comfortably. **Divide the same 0.60 gap by the price of 83.10 instead and you get 0.72%, which would pass on any formation whatsoever and therefore tests nothing.**

**Step 9 — Spans and time asymmetry.** (B24, B25, B26)

$$\\text{Left} = 30 - 12 = 18, \\qquad \\text{Right} = 46 - 30 = 16$$
$$\\tau = \\frac{|18 - 16|}{(18 + 16)/2} \\times 100 = \\frac{2}{17} \\times 100 = \\mathbf{11.76\\%}$$

$11.76\\% \\le 40\\%$ ✓. The right side formed two bars faster than the left, which is typical: **tops complete more quickly than they build.**

**Step 10 — Total duration.** (B27)

$$D = 46 - 12 = \\mathbf{34} \\text{ bars} \\;\\ge\\; 25 \\;\\checkmark$$

Roughly seven trading weeks. **This is a claim about a multi-week shift in ownership, and 34 bars is long enough for that claim to be about something.**

**Step 11 — Volume ratios. Read these before you get attached to the geometry.** (B33, B34)

$$\\phi_1 = \\frac{1{,}180{,}000}{1{,}450{,}000} \\times 100 = \\mathbf{81.38\\%}$$
$$\\phi_2 = \\frac{720{,}000}{1{,}450{,}000} \\times 100 = \\mathbf{49.66\\%}$$

**The head made the highest price of the entire five-month advance on 81% of the left shoulder's volume, and the right shoulder needed half.** This is the causal claim of the whole pattern. Price up, participation down.

Both required inequalities hold: $1{,}180{,}000 < 1{,}450{,}000$ and $720{,}000 < 1{,}180{,}000$ ✓

**Step 12 — Breakout volume.** (B37)

$$v = \\frac{2{,}650{,}000}{980{,}000} = \\mathbf{2.70\\times} \\;\\ge\\; 1.5 \\;\\checkmark$$

**Now put steps 11 and 12 side by side, because together they are the entire argument.** The advance to 89.00 was made on 1.18 million shares. The break of the neckline was made on 2.65 million — **more than twice the volume that made the high.** The people who were absent while price was going up arrived all at once when it started coming down. That asymmetry, and not the shape, is what makes this a distribution top.

**Step 13 — The verdict.** (B56)

Walking the nested conditions in order: liquidity 4.8 ≥ 2 so not TOO THIN; prominence 7.10 ≥ 5 so not INVALID; asymmetry 3.77 ≤ 15 so not ASYMMETRIC; duration 34 ≥ 25 so not TOO SHORT; volume $1{,}180{,}000 < 1{,}450{,}000$ and $720{,}000 < 1{,}180{,}000$ so volume does not fail. Therefore:

> **VALID — trade the throwback, scale at half-target.**

**Step 14 — Targets.** (B45, B46)

$$T = N(56) - h = 70.50 - 15.90 = \\mathbf{54.60}$$
$$T_{1/2} = 70.50 - \\frac{15.90}{2} = 70.50 - 7.95 = \\mathbf{62.55}$$

**Both project from 70.50, the neckline at the breakout bar — not from the 69.80 close.** Anchor to the close and every trader who filled at a different price computes a different "measured move", which would make the measured move a fact about traders rather than about the pattern.

**Step 15 — The breakout-bar entry, priced honestly.** (B47, B48, B49)

$$E = 69.80, \\qquad X_0 = P_{RS} = 83.10$$
$$\\text{Reward} = 69.80 - 54.60 = 15.20, \\qquad \\text{Risk} = 83.10 - 69.80 = 13.30$$
$$R{:}R = \\frac{15.20}{13.30} = \\mathbf{1.14}, \\qquad p^{*} = \\frac{1}{1 + 1.14} = \\mathbf{46.67\\%}$$

**Stop and look at 46.67%.** That is the hit rate you must achieve, before commissions, on a pattern whose full measured move is reached materially less often than that. **The trade is not marginal. On any honest prior it is negative.** And notice that nothing is wrong with the pattern — the pattern passed every test. What is wrong is the *entry*, because at the moment of the break the nearest structurally honest invalidation is 13.30 taka overhead.

**Step 16 — The throwback entry.** (B50, B51, B52, B53, B54)

Bars 60–62 rally back to the broken neckline, now acting as resistance, and stall at a high of 71.60.

$$X = H_{tb} + ATR_{14} = 71.60 + 1.85 = \\mathbf{73.45}$$
$$E = 70.00$$
$$\\text{Reward} = 70.00 - 54.60 = 15.40, \\qquad \\text{Risk} = 73.45 - 70.00 = 3.45$$
$$R{:}R = \\frac{15.40}{3.45} = \\mathbf{4.46}, \\qquad p^{*} = \\frac{1}{1 + 4.46} = \\mathbf{18.30\\%}$$

**Step 17 — Put the two entries in one table, because this is the chapter's central result.**

| | Act on the break | Wait for the throwback | Change |
|---|---|---|---|
| Entry | 69.80 | 70.00 | +0.20 |
| Invalidation | 83.10 | **73.45** | −9.65 |
| Risk per share | 13.30 | **3.45** | **−74%** |
| Reward to 54.60 | 15.20 | 15.40 | +0.20 |
| $R{:}R$ | 1.14 | **4.46** | **×3.9** |
| Break-even hit rate | 46.67% | **18.30%** | **−28.4 pts** |

**The entry price improved by twenty paisa. The required accuracy fell by twenty-eight percentage points.** Every bit of that came from the stop, and the stop improved because the throwback manufactured a nearby thing to be wrong against. **You did not become a better forecaster. You waited for the market to hand you a cheaper way of being wrong.**

**Step 18 — Price the scaling rule, because "scale out" is otherwise just advice.**

Case A — half-target fills, the rest is stopped at breakeven:
$$0.5 \\times (70.00 - 62.55) + 0.5 \\times 0 = 0.5 \\times 7.45 = 3.725$$
$$\\frac{3.725}{3.45} = \\mathbf{+1.08R}$$

Case B — both targets fill:
$$\\frac{0.5 \\times 7.45 + 0.5 \\times 15.40}{3.45} = \\frac{3.725 + 7.70}{3.45} = \\frac{11.425}{3.45} = \\mathbf{+3.31R}$$

Case C — no scaling, price turns at 62.55 and runs to the stop:
$$\\mathbf{-1.00R}$$

**Compare Case A and Case C. They are the same price path.** Price fell to 62.55 and reversed. One plan books +1.08R and the other books −1.00R, a swing of 2.08R decided entirely by whether you had written down a half-target in advance. **This is the strongest argument in the chapter for treating the measured move as a scale-out reference rather than an exit.**

**Step 19 — Convert the target into DSE sessions, because the textbook assumes it can be reached tomorrow.**

$$\\frac{15.90}{70.50} \\times 100 = \\mathbf{22.55\\%}$$

At a 10% daily band, the fastest theoretical path is $70.50 \\to 63.45 \\to 57.11 \\to 51.39$:

$$n_{\\min} = \\left\\lceil \\frac{\\ln(54.60 / 70.50)}{\\ln 0.90} \\right\\rceil = \\lceil 2.42 \\rceil = \\mathbf{3 \\text{ sessions}}$$

**Three sessions is the floor and it requires three consecutive limit-down closes.** Real declines do not travel at the band. Budget three to six weeks, and note what that does to the trade: your capital is committed for a month, the stop must survive gap risk in both directions, and the throwback itself may take two weeks to form rather than three days.

The half-target is 11.28% below the neckline, so **two sessions minimum** — which is one practical reason to take the first tranche there.

**Step 20 — Now state what the sheet computed and cannot act on.**

Every number above is correct and the pattern is genuinely valid. **And on the DSE you cannot short it.**

So the output resolves to two instructions and no others:

1. **If you hold RUPALICEM:** sell. Arguably you should have sold at the right shoulder — 720,000 shares against 1,450,000 was visible at bar 46, ten bars before the break, at 83.10 rather than 69.80. **The volume signature is an early warning that the price signature confirms too late to be worth much.** Selling the right shoulder rather than the break is worth 13.30 taka a share here, which is more than the entire measured move from the break.
2. **If you do not hold it:** it is information. Do not buy the dip; do not treat 74.00 or 72.20 as support once they have failed; and file the shape.

**Step 21 — Note where the same arithmetic pays.** Invert every sign and this is an inverse head and shoulders — a bottom. Same neckline construction, same height rule, same throwback logic, same 4.46 against 1.14 improvement, and **a side of the market you can actually take.** Bottoms take longer to form and are less violent, and the volume requirement flips: a surge on the breakout above the neckline is required, and rising volume through the right shoulder is a positive rather than a disqualifier.

**Learn the mechanics on the tops because they are cleaner to see. Put the money on the bottoms because they are the only ones you can trade.**

**Step 22 — The check the sheet cannot perform.** At BDT 4.8 crore of daily turnover, a single BDT 5 crore institutional order is roughly one full day of volume. **A pattern that one ticket can distort in a session is a pattern about one ticket.** The sheet passes it on the 2-crore floor, which is the right call — but "passes the floor" and "is a robust multi-participant structure" are different statements, and Chapter 30's depth arithmetic belongs alongside every verdict this sheet produces.`,
      bn: `**পরিস্থিতি।** §৩২.৩-এর RUPALICEM, হাতে গণনা করা। নিচের প্রতিটি সংখ্যা ভ্যালিডেটর শিটের সঙ্গে হুবহু মেলে, আর সেল রেফারেন্স দেওয়া আছে যাতে আপনি একটি একটি করে যাচাই করতে পারেন।

**ইনপুট।** বাম শোল্ডার ৮২.৫০ বার ১২-তে; হেড ৮৯.০০ বার ৩০-এ; ডান শোল্ডার ৮৩.১০ বার ৪৬-এ; খাদ ১ ৭৪.০০ বার ২১-এ; খাদ ২ ৭২.২০ বার ৩৯-এ; ব্রেকআউট বার ৫৬। ভলিউম ১৪,৫০,০০০ / ১১,৮০,০০০ / ৭,২০,০০০, ব্রেকআউট ২৬,৫০,০০০, ADV(২০) ৯,৮০,০০০। ATR(১৪) = ১.৮৫। উইন্ডোজুড়ে গড় দৈনিক লেনদেন ৪.৮ কোটি টাকা।

---

**ধাপ ১ — কিছু আঁকার আগে প্রথমে তারল্য গেট চালান।** (B40, B41, B42)

$$\\Lambda = ৪.৮ \\text{ কোটি} \\;\\ge\\; ২.০ \\text{ কোটি} \\;\\Rightarrow\\; \\textbf{PASS}$$

**এটি আগে করুন, নইলে একটি অ্যাকাউন্টের পদচিহ্ন মাপতে এক ঘণ্টা নষ্ট করবেন।** এটি ০.৯ কোটি টাকা পড়লে সঠিক আউটপুট "দুর্বল প্যাটার্ন" নয় — *থামুন*। শিটটি এমনভাবে গড়া যে B42 পুরো রায়টিকে সংক্ষিপ্ত করে দেয়, আর জ্যামিতি যত নিখুঁতই হোক B56 জানায় "TOO THIN — প্যাটার্নটি একটি অ্যাকাউন্টের পদচিহ্ন"।

**ধাপ ২ — নেকলাইনের ঢাল।** (B14)

$$m = \\frac{B10 - B8}{B11 - B9} = \\frac{72.20 - 74.00}{39 - 21} = \\frac{-1.80}{18} = \\mathbf{-0.10} \\text{ টাকা/বার}$$

ঋণাত্মক, তাই নেকলাইন মৃদুভাবে নিচের দিকে ঢালু। **টপে এটিই অনুকূল ঘটনা** — ক্রেতারা প্রতি বারে দশ পয়সা নিচে এগিয়ে এসেছেন, যা ভাঙনের আগেই দৃশ্যমান দুর্বল হতে থাকা চাহিদা।

**ধাপ ৩ — হেডের নিচে নেকলাইন।** (B15)

$$N(30) = 74.00 + (-0.10)(30 - 21) = 74.00 - 0.90 = \\mathbf{73.10}$$

**এই সংখ্যাটিই পুরো টার্গেটকে নোঙর করে, আর এটি চার্টের কোনো দামই নয়।** এটি একটি অন্তর্বেশন। এই ধাপটি এড়িয়ে ৭৪.০০-এ খাদ ১ ব্যবহার করলে — কারণ তা দৃশ্যমান আর ৭৩.১০ নয় — আপনার টার্গেট ৯০ পয়সা সরে যায়।

**ধাপ ৪ — ব্রেকআউট বারে নেকলাইন।** (B17)

$$N(56) = 74.00 + (-0.10)(56 - 21) = 74.00 - 3.50 = \\mathbf{70.50}$$

লক্ষ করুন এগুলো একই রেখা থেকে দুটি ভিন্ন সংখ্যা — ৭৩.১০ ও ৭০.৫০ — দুটি ভিন্ন কাজে ব্যবহৃত। **উচ্চতা ব্যবহার করে হেডের নিচের নেকলাইন; টার্গেট প্রক্ষেপিত হয় ভাঙনের নেকলাইন থেকে।** এ দুটি গুলিয়ে ফেলা এই অধ্যায়ের দ্বিতীয় সবচেয়ে সাধারণ ভুল।

**ধাপ ৫ — ঢালটি কি একে নেকলাইন বলার মতো যথেষ্ট অগভীর?** (B18)

$$\\sigma = \\frac{|-0.10|}{89.00} \\times 100 = \\mathbf{০.১১২৪\\%} \\text{ প্রতি বার} \\;\\le\\; ০.২৫\\% \\;\\checkmark$$

**ধাপ ৬ — হেড প্রাধান্য।** (B21)

$$\\rho = \\frac{89.00 - \\max(82.50,\\, 83.10)}{\\max(82.50,\\, 83.10)} \\times 100 = \\frac{89.00 - 83.10}{83.10} \\times 100 = \\frac{5.90}{83.10} \\times 100 = \\mathbf{৭.১০\\%}$$

$৭.১০\\% \\ge ৫\\%$ ✓। **উঁচু শোল্ডার ৮৩.১০-এর বিপরীতে মাপা, ৮২.৮০ গড়ের বিপরীতে নয়।** গড় ব্যবহার করলে পাওয়া যেত ৭.৪৯% — চাটুকার, আর ঠিক সেই দিকে ভুল যা প্রান্তিক প্যাটার্নগুলোকে ঢুকতে দেয়।

**ধাপ ৭ — প্যাটার্নের উচ্চতা।** (B22)

$$h = 89.00 - 73.10 = \\mathbf{15.90}$$

**ধাপ ৮ — শোল্ডার অসমতা, উচ্চতা দিয়ে ভাগ, দাম দিয়ে নয়।** (B23)

$$\\alpha = \\frac{|82.50 - 83.10|}{15.90} \\times 100 = \\frac{0.60}{15.90} \\times 100 = \\mathbf{৩.৭৭\\%}$$

$৩.৭৭\\% \\le ১৫\\%$ ✓, স্বচ্ছন্দে। **একই ০.৬০ ব্যবধানকে বদলে ৮৩.১০ দাম দিয়ে ভাগ করুন, পাবেন ০.৭২%, যা যেকোনো গঠনেই পাস করত আর তাই কিছুই পরীক্ষা করে না।**

**ধাপ ৯ — ব্যাপ্তি ও সময় অসমতা।** (B24, B25, B26)

$$\\text{বাম} = 30 - 12 = 18, \\qquad \\text{ডান} = 46 - 30 = 16$$
$$\\tau = \\frac{|18 - 16|}{(18 + 16)/2} \\times 100 = \\frac{2}{17} \\times 100 = \\mathbf{১১.৭৬\\%}$$

$১১.৭৬\\% \\le ৪০\\%$ ✓। ডান পাশ বাম পাশের চেয়ে দুই বার দ্রুত গঠিত হয়েছে, যা স্বাভাবিক: **টপ গড়ে ওঠার চেয়ে দ্রুত সম্পন্ন হয়।**

**ধাপ ১০ — মোট স্থিতিকাল।** (B27)

$$D = 46 - 12 = \\mathbf{৩৪} \\text{ বার} \\;\\ge\\; ২৫ \\;\\checkmark$$

মোটামুটি সাত লেনদেন-সপ্তাহ। **এটি মালিকানায় বহু-সপ্তাহের পরিবর্তনের দাবি, আর ৩৪ বার ঐ দাবিটি কিছু একটা নিয়ে হওয়ার মতো যথেষ্ট দীর্ঘ।**

**ধাপ ১১ — ভলিউম অনুপাত। জ্যামিতির প্রতি আসক্ত হওয়ার আগে এগুলো পড়ুন।** (B33, B34)

$$\\phi_1 = \\frac{1{,}180{,}000}{1{,}450{,}000} \\times 100 = \\mathbf{৮১.৩৮\\%}$$
$$\\phi_2 = \\frac{720{,}000}{1{,}450{,}000} \\times 100 = \\mathbf{৪৯.৬৬\\%}$$

**হেড পুরো পাঁচ মাসের উত্থানের সর্বোচ্চ দামটি বানিয়েছে বাম শোল্ডারের ৮১% ভলিউমে, আর ডান শোল্ডারের লেগেছে অর্ধেক।** এটিই পুরো প্যাটার্নের কার্যকারণ দাবি। দাম ওপরে, অংশগ্রহণ নিচে।

দুটি আবশ্যক অসমতাই টেকে: $১১,৮০,০০০ < ১৪,৫০,০০০$ ও $৭,২০,০০০ < ১১,৮০,০০০$ ✓

**ধাপ ১২ — ব্রেকআউট ভলিউম।** (B37)

$$v = \\frac{2{,}650{,}000}{980{,}000} = \\mathbf{২.৭০\\times} \\;\\ge\\; ১.৫ \\;\\checkmark$$

**এবার ধাপ ১১ ও ১২ পাশাপাশি রাখুন, কারণ একসঙ্গে ওগুলোই পুরো যুক্তি।** ৮৯.০০-তে উত্থান হয়েছে ১১.৮ লক্ষ শেয়ারে। নেকলাইনের ভাঙন হয়েছে ২৬.৫ লক্ষে — **যে ভলিউম উচ্চতাটি বানিয়েছে তার দ্বিগুণেরও বেশি।** দাম ওঠার সময় যাঁরা অনুপস্থিত ছিলেন, নামা শুরু হতেই তাঁরা সবাই একসঙ্গে হাজির। ঐ অসামঞ্জস্যই, আকৃতি নয়, একে একটি বিতরণ টপ বানায়।

**ধাপ ১৩ — রায়।** (B56)

নেস্টেড শর্তগুলো ক্রমে হাঁটলে: তারল্য ৪.৮ ≥ ২ তাই TOO THIN নয়; প্রাধান্য ৭.১০ ≥ ৫ তাই INVALID নয়; অসমতা ৩.৭৭ ≤ ১৫ তাই ASYMMETRIC নয়; স্থিতিকাল ৩৪ ≥ ২৫ তাই TOO SHORT নয়; ভলিউমে $১১,৮০,০০০ < ১৪,৫০,০০০$ ও $৭,২০,০০০ < ১১,৮০,০০০$ তাই ভলিউম ব্যর্থ হয় না। অতএব:

> **VALID — থ্রোব্যাক ট্রেড করুন, অর্ধ-টার্গেটে কিস্তিতে বেরোন।**

**ধাপ ১৪ — টার্গেট।** (B45, B46)

$$T = N(56) - h = 70.50 - 15.90 = \\mathbf{54.60}$$
$$T_{1/2} = 70.50 - \\frac{15.90}{2} = 70.50 - 7.95 = \\mathbf{62.55}$$

**দুটিই প্রক্ষেপিত ৭০.৫০ থেকে, ব্রেকআউট বারে নেকলাইন — ৬৯.৮০ ক্লোজ থেকে নয়।** ক্লোজে নোঙর করুন, আর ভিন্ন দামে ফিল পাওয়া প্রতিটি ট্রেডার ভিন্ন "মেজার্ড মুভ" হিসাব করবেন, যা মেজার্ড মুভকে প্যাটার্ন নিয়ে নয়, ট্রেডারদের নিয়ে একটি তথ্য বানিয়ে দেবে।

**ধাপ ১৫ — ব্রেকআউট-বার প্রবেশ, সৎভাবে মূল্যায়িত।** (B47, B48, B49)

$$E = 69.80, \\qquad X_0 = P_{RS} = 83.10$$
$$\\text{পুরস্কার} = 69.80 - 54.60 = 15.20, \\qquad \\text{ঝুঁকি} = 83.10 - 69.80 = 13.30$$
$$R{:}R = \\frac{15.20}{13.30} = \\mathbf{1.14}, \\qquad p^{*} = \\frac{1}{1 + 1.14} = \\mathbf{৪৬.৬৭\\%}$$

**থামুন এবং ৪৬.৬৭%-এর দিকে তাকান।** কমিশনের আগে এই হিট রেট আপনাকে অর্জন করতে হবে, এমন এক প্যাটার্নে যার পূর্ণ মেজার্ড মুভ তার চেয়ে উল্লেখযোগ্যভাবে কম বার স্পর্শিত হয়। **ট্রেডটি প্রান্তিক নয়। যেকোনো সৎ পূর্বধারণায় এটি ঋণাত্মক।** আর লক্ষ করুন প্যাটার্নে কিছুই ভুল নয় — প্যাটার্নটি প্রতিটি পরীক্ষায় পাস করেছে। ভুল হলো *প্রবেশ*, কারণ ভাঙনের মুহূর্তে নিকটতম কাঠামোগতভাবে সৎ ইনভ্যালিডেশন ১৩.৩০ টাকা মাথার ওপরে।

**ধাপ ১৬ — থ্রোব্যাক প্রবেশ।** (B50, B51, B52, B53, B54)

বার ৬০–৬২ ভাঙা নেকলাইনে ফিরে ওঠে, যা এখন রেজিস্ট্যান্স হিসেবে কাজ করছে, আর ৭১.৬০ উচ্চতায় থেমে যায়।

$$X = H_{tb} + ATR_{14} = 71.60 + 1.85 = \\mathbf{73.45}$$
$$E = 70.00$$
$$\\text{পুরস্কার} = 70.00 - 54.60 = 15.40, \\qquad \\text{ঝুঁকি} = 73.45 - 70.00 = 3.45$$
$$R{:}R = \\frac{15.40}{3.45} = \\mathbf{4.46}, \\qquad p^{*} = \\frac{1}{1 + 4.46} = \\mathbf{১৮.৩০\\%}$$

**ধাপ ১৭ — দুটি প্রবেশ এক টেবিলে রাখুন, কারণ এটিই অধ্যায়ের কেন্দ্রীয় ফল।**

| | ভাঙনে কাজ | থ্রোব্যাকের অপেক্ষা | পরিবর্তন |
|---|---|---|---|
| প্রবেশ | ৬৯.৮০ | ৭০.০০ | +০.২০ |
| ইনভ্যালিডেশন | ৮৩.১০ | **৭৩.৪৫** | −৯.৬৫ |
| শেয়ারপ্রতি ঝুঁকি | ১৩.৩০ | **৩.৪৫** | **−৭৪%** |
| ৫৪.৬০ পর্যন্ত পুরস্কার | ১৫.২০ | ১৫.৪০ | +০.২০ |
| $R{:}R$ | ১.১৪ | **৪.৪৬** | **×৩.৯** |
| ব্রেক-ইভেন হিট রেট | ৪৬.৬৭% | **১৮.৩০%** | **−২৮.৪ পয়েন্ট** |

**প্রবেশের দাম বিশ পয়সা উন্নত হয়েছে। প্রয়োজনীয় নির্ভুলতা আটাশ শতাংশ বিন্দু কমেছে।** তার পুরোটাই এসেছে স্টপ থেকে, আর স্টপ উন্নত হয়েছে কারণ থ্রোব্যাক একটি কাছের বস্তু তৈরি করেছে যার বিপরীতে ভুল হওয়া যায়। **আপনি ভালো পূর্বাভাসদাতা হননি। আপনি অপেক্ষা করেছেন যতক্ষণ না বাজার আপনাকে ভুল হওয়ার একটি সস্তা উপায় হাতে তুলে দেয়।**

**ধাপ ১৮ — কিস্তির নিয়মটির দাম হিসাব করুন, কারণ নইলে "কিস্তিতে বেরোন" নিছক উপদেশ।**

ক্ষেত্র ক — অর্ধ-টার্গেট পূরণ, বাকিটা ব্রেকইভেনে স্টপ:
$$0.5 \\times (70.00 - 62.55) + 0.5 \\times 0 = 0.5 \\times 7.45 = 3.725$$
$$\\frac{3.725}{3.45} = \\mathbf{+১.০৮R}$$

ক্ষেত্র খ — দুটি টার্গেটই পূরণ:
$$\\frac{0.5 \\times 7.45 + 0.5 \\times 15.40}{3.45} = \\frac{3.725 + 7.70}{3.45} = \\frac{11.425}{3.45} = \\mathbf{+৩.৩১R}$$

ক্ষেত্র গ — কোনো কিস্তি নেই, দাম ৬২.৫৫-এ ঘুরে স্টপ পর্যন্ত যায়:
$$\\mathbf{-১.০০R}$$

**ক্ষেত্র ক ও ক্ষেত্র গ তুলনা করুন। দুটি একই দাম-পথ।** দাম ৬২.৫৫-এ নেমে ঘুরে গেছে। এক পরিকল্পনা +১.০৮R লেখে, অন্যটি −১.০০R, ২.০৮R-এর দোলন যা সম্পূর্ণভাবে ঠিক হয় আপনি আগেভাগে একটি অর্ধ-টার্গেট লিখে রেখেছিলেন কি না তা দিয়ে। **মেজার্ড মুভকে প্রস্থান নয়, কিস্তিতে বেরোনোর নির্দেশক গণ্য করার পক্ষে এটিই অধ্যায়ের সবচেয়ে শক্তিশালী যুক্তি।**

**ধাপ ১৯ — টার্গেটকে ডিএসই সেশনে রূপান্তর করুন, কারণ পাঠ্যবই ধরে নেয় তা কাল পৌঁছানো যাবে।**

$$\\frac{15.90}{70.50} \\times 100 = \\mathbf{২২.৫৫\\%}$$

১০% দৈনিক ব্যান্ডে দ্রুততম তাত্ত্বিক পথ $70.50 \\to 63.45 \\to 57.11 \\to 51.39$:

$$n_{\\min} = \\left\\lceil \\frac{\\ln(54.60 / 70.50)}{\\ln 0.90} \\right\\rceil = \\lceil 2.42 \\rceil = \\mathbf{৩ \\text{ সেশন}}$$

**তিন সেশন মেঝে আর তার জন্য পরপর তিনটি লিমিট-ডাউন ক্লোজ লাগে।** প্রকৃত পতন ব্যান্ডে চলে না। তিন থেকে ছয় সপ্তাহের হিসাব করুন, আর লক্ষ করুন তা ট্রেডটির কী করে: আপনার পুঁজি এক মাসের জন্য আবদ্ধ, স্টপকে দুই দিকেই গ্যাপ ঝুঁকিতে টিকতে হবে, আর থ্রোব্যাক নিজেই তিন দিনের বদলে দুই সপ্তাহ নিতে পারে।

অর্ধ-টার্গেট নেকলাইনের ১১.২৮% নিচে, তাই **ন্যূনতম দুই সেশন** — যা ওখানে প্রথম কিস্তি নেওয়ার একটি ব্যবহারিক কারণ।

**ধাপ ২০ — এবার বলুন শিট কী গণনা করল আর কীসে কাজ করতে পারে না।**

ওপরের প্রতিটি সংখ্যা সঠিক আর প্যাটার্নটি সত্যিই বৈধ। **আর ডিএসই-তে আপনি একে শর্ট করতে পারবেন না।**

তাই আউটপুটটি দুটি নির্দেশে গিয়ে দাঁড়ায়, তার বেশি নয়:

১. **আপনি RUPALICEM ধরে থাকলে:** বেচুন। যুক্তিসঙ্গতভাবে ডান শোল্ডারেই বেচা উচিত ছিল — ১৪,৫০,০০০-এর বিপরীতে ৭,২০,০০০ শেয়ার বার ৪৬-এ দৃশ্যমান ছিল, ভাঙনের দশ বার আগে, ৬৯.৮০ নয় ৮৩.১০-এ। **ভলিউম স্বাক্ষর একটি আগাম সতর্কতা, যা দামের স্বাক্ষর নিশ্চিত করে অনেক দেরিতে, বেশি কাজে লাগার মতো নয়।** ভাঙনের বদলে ডান শোল্ডার বেচার মূল্য এখানে শেয়ারপ্রতি ১৩.৩০ টাকা, যা ভাঙন থেকে পুরো মেজার্ড মুভের চেয়েও বেশি।
২. **না ধরে থাকলে:** এটি তথ্য। ডিপ কিনবেন না; ৭৪.০০ বা ৭২.২০ ব্যর্থ হওয়ার পর সেগুলোকে সাপোর্ট গণ্য করবেন না; আর আকৃতিটি মনে রাখুন।

**ধাপ ২১ — কোথায় একই পাটিগণিত টাকা আনে তা লক্ষ করুন।** প্রতিটি চিহ্ন উল্টান, আর এটি একটি ইনভার্স হেড অ্যান্ড শোল্ডারস — একটি বটম। একই নেকলাইন নির্মাণ, একই উচ্চতার নিয়ম, একই থ্রোব্যাক যুক্তি, একই ১.১৪-এর বিপরীতে ৪.৪৬ উন্নতি, আর **বাজারের এমন একটি দিক যা আপনি সত্যিই নিতে পারেন।** বটম গঠিত হতে বেশি সময় নেয় ও কম হিংস্র হয়, আর ভলিউমের প্রয়োজন উল্টে যায়: নেকলাইনের ওপরে ব্রেকআউটে উল্লম্ফন আবশ্যক, আর ডান শোল্ডার জুড়ে বাড়তে থাকা ভলিউম অযোগ্যতা নয়, ইতিবাচক।

**টপে যন্ত্রকৌশল শিখুন কারণ ওগুলো দেখতে পরিষ্কার। টাকা লাগান বটমে কারণ কেবল ওগুলোই আপনি ট্রেড করতে পারেন।**

**ধাপ ২২ — যে যাচাইটি শিট করতে পারে না।** ৪.৮ কোটি টাকার দৈনিক লেনদেনে একটি একক ৫ কোটি টাকার প্রাতিষ্ঠানিক অর্ডার মোটামুটি এক পূর্ণ দিনের ভলিউম। **যে প্যাটার্ন একটি টিকিট এক সেশনে বিকৃত করতে পারে তা একটি টিকিট সম্পর্কেই প্যাটার্ন।** শিট ২-কোটির মেঝেতে একে পাস করায়, যা সঠিক সিদ্ধান্ত — কিন্তু "মেঝে পার করে" আর "একটি দৃঢ় বহু-অংশগ্রহণকারী কাঠামো" ভিন্ন বক্তব্য, আর এই শিটের প্রতিটি রায়ের পাশে অধ্যায় ৩০-এর গভীরতার পাটিগণিতেরও জায়গা আছে।`,
    },

    mistakes: {
      en: `1. **Measuring pattern height from a trough instead of from the neckline under the head.** RUPALICEM's correct height is $89.00 - 73.10 = 15.90$. Use trough 1 at 74.00 and you get 15.00; use trough 2 at 72.20 and you get 16.80. **That is a 1.80-taka spread in the target — 55.50 versus 53.70 — on a move of 15.90, decided by which visible low you happened to click.** The neckline at the head's own bar is an interpolated 73.10 and appears nowhere on the price series, which is exactly why people skip it.
2. **Confusing the neckline at the head with the neckline at the breakout.** They are 73.10 and 70.50 — the same line, evaluated at bars 30 and 56. The height needs the first; the target projects from the second. Swap them and the target becomes $73.10 - 15.90 = 57.20$ instead of 54.60, **a 2.60-taka error that flatters the trade by 17%.**
3. **Dividing shoulder asymmetry by price instead of by pattern height.** The 60-paisa gap between 82.50 and 83.10 is 3.77% of the 15.90 height and 0.72% of the price. **The price version passes literally every formation ever drawn and therefore tests nothing** — the same 60 paisa on a 3.00-taka pattern is a 20% asymmetry and should be rejected.
4. **Waiving the volume conditions because the shape is beautiful.** Had the right shoulder printed 1,520,000 instead of 720,000, $\\phi = 128.8\\%$ and the formation is **rejected outright, not downgraded.** The geometry would be identical: 7.10% prominence, 3.77% asymmetry, 34 bars. **A three-peak shape with rising volume into the right shoulder is a shape, and the sheet says VOLUME FAILS for a reason.**
5. **Acting on the breakout bar.** Entering at 69.80 with the only honest stop at the right shoulder high of 83.10 gives $R{:}R = 1.14$ and a break-even hit rate of **46.67%** — on a pattern whose full measured move is reached far less often than that. The throwback at 70.00 with a stop at 73.45 gives 4.46 and **18.30%.** Twenty paisa of entry price; twenty-eight percentage points of required accuracy.
6. **Placing the throwback stop exactly at the throwback high.** The high was 71.60; the stop belongs at $71.60 + 1.85 = 73.45$. **A stop resting on the high is removed by an ordinary day that invalidates nothing** — and on the DSE, by a single limit-up open.
7. **Treating the measured move as an exit rather than a scale-out point.** Price reaching 62.55 and reversing to the stop is $-1.00R$ with no plan and $+1.08R$ with a half-target — **the identical price path, a 2.08R swing, decided entirely by whether the tranche was written down in advance.**
8. **Reading a head-and-shoulders top on the DSE as a short setup.** There is no reliable retail short side here. The correct outputs are exactly two: sell if you hold, and do not buy if you do not. **Every number in §32.5 is correct and none of them is a short entry.**
9. **Skipping the liquidity gate and grading a thin scrip's pattern as "weak" rather than refusing it.** At BDT 0.9 crore of daily turnover, the seven-week three-peak shape is one account's schedule. **The gate returns "do not interpret", not "interpret with a discount"** — that is Chapter 25's quality floor and Chapter 30's exhaustion override in a third domain.
10. **Assuming the target can be reached quickly.** 54.60 is 22.55% below the 70.50 neckline, which at a 10% band requires **three consecutive limit-down closes as an absolute theoretical floor.** Budget three to six weeks, and size the stop for gap risk in both directions rather than for intraday noise.
11. **Believing you have found a tradeable V-reversal.** Any rule for it must reference the extreme, and the extreme is only known afterwards. **A backtest showing profitable V-trades has used the low as an input; that is look-ahead bias, and no parameter tuning removes it.**
12. **Trading a broadening top directionally.** Expanding range on rising volume is a loss-of-control signal with no clean measured move and no clean invalidation. **Its only correct use is to reduce size and stop adding** — trading it is how people lose money in exactly the environment telling them to hold less.`,
      bn: `১. **হেডের নিচের নেকলাইনের বদলে একটি খাদ থেকে প্যাটার্নের উচ্চতা মাপা।** RUPALICEM-এর সঠিক উচ্চতা $89.00 - 73.10 = 15.90$। ৭৪.০০-এ খাদ ১ ব্যবহার করলে পাবেন ১৫.০০; ৭২.২০-তে খাদ ২ ব্যবহার করলে ১৬.৮০। **অর্থাৎ টার্গেটে ১.৮০ টাকার বিস্তার — ৫৫.৫০ বনাম ৫৩.৭০ — ১৫.৯০-এর একটি চলনে, যা ঠিক হয় আপনি কোন দৃশ্যমান নিম্নবিন্দুতে ক্লিক করেছেন তা দিয়ে।** হেডের নিজের বারে নেকলাইন একটি অন্তর্বেশিত ৭৩.১০ আর দাম-ধারার কোথাও তা নেই, আর ঠিক এ কারণেই মানুষ এটি এড়িয়ে যান।
২. **হেডে নেকলাইন ও ব্রেকআউটে নেকলাইন গুলিয়ে ফেলা।** ওগুলো ৭৩.১০ ও ৭০.৫০ — একই রেখা, বার ৩০ ও ৫৬-তে মূল্যায়িত। উচ্চতার জন্য প্রথমটি লাগে; টার্গেট প্রক্ষেপিত হয় দ্বিতীয়টি থেকে। অদলবদল করলে টার্গেট ৫৪.৬০-এর বদলে $73.10 - 15.90 = 57.20$ হয়, **২.৬০ টাকার ভুল যা ট্রেডটিকে ১৭% চাটুকারিতা করে।**
৩. **শোল্ডার অসমতাকে প্যাটার্নের উচ্চতার বদলে দাম দিয়ে ভাগ করা।** ৮২.৫০ ও ৮৩.১০-এর মধ্যে ৬০ পয়সার ব্যবধান ১৫.৯০ উচ্চতার ৩.৭৭% আর দামের ০.৭২%। **দাম-সংস্করণটি আজ পর্যন্ত আঁকা আক্ষরিক অর্থে প্রতিটি গঠনেই পাস করে আর তাই কিছুই পরীক্ষা করে না** — ৩.০০ টাকার প্যাটার্নে একই ৬০ পয়সা ২০% অসমতা আর তা বাতিল হওয়া উচিত।
৪. **আকৃতি সুন্দর বলে ভলিউমের শর্ত মওকুফ করা।** ডান শোল্ডার ৭,২০,০০০-এর বদলে ১৫,২০,০০০ ছাপলে $\\phi = ১২৮.৮\\%$ আর গঠনটি **সরাসরি বাতিল, অবনমিত নয়।** জ্যামিতি অভিন্ন থাকত: ৭.১০% প্রাধান্য, ৩.৭৭% অসমতা, ৩৪ বার। **ডান শোল্ডারে বাড়তে থাকা ভলিউমসহ তিন-চূড়ার আকৃতি নিছক একটি আকৃতি, আর শিট কারণেই VOLUME FAILS বলে।**
৫. **ব্রেকআউট বারে কাজ করা।** ৬৯.৮০-তে প্রবেশ, একমাত্র সৎ স্টপ ডান শোল্ডারের ৮৩.১০-এ, দেয় $R{:}R = ১.১৪$ ও **৪৬.৬৭%** ব্রেক-ইভেন হিট রেট — এমন প্যাটার্নে যার পূর্ণ মেজার্ড মুভ তার চেয়ে অনেক কম বার পৌঁছায়। ৭০.০০-তে থ্রোব্যাক, ৭৩.৪৫-এ স্টপ, দেয় ৪.৪৬ ও **১৮.৩০%।** প্রবেশ দামে বিশ পয়সা; প্রয়োজনীয় নির্ভুলতায় আটাশ শতাংশ বিন্দু।
৬. **থ্রোব্যাকের স্টপ ঠিক থ্রোব্যাক উচ্চতায় বসানো।** উচ্চতা ছিল ৭১.৬০; স্টপের জায়গা $71.60 + 1.85 = 73.45$। **উচ্চতায় বসানো স্টপ এমন একটি সাধারণ দিনেই সরে যায় যা কিছুই বাতিল করে না** — আর ডিএসই-তে একটিমাত্র লিমিট-আপ ওপেনেই।
৭. **মেজার্ড মুভকে কিস্তির বিন্দু নয়, প্রস্থান গণ্য করা।** দাম ৬২.৫৫-এ পৌঁছে স্টপে ফিরে গেলে পরিকল্পনা ছাড়া তা $-১.০০R$ আর অর্ধ-টার্গেটসহ $+১.০৮R$ — **অভিন্ন দাম-পথ, ২.০৮R-এর দোলন, যা সম্পূর্ণভাবে ঠিক হয় কিস্তিটি আগেভাগে লেখা ছিল কি না তা দিয়ে।**
৮. **ডিএসই-তে হেড-অ্যান্ড-শোল্ডারস টপকে শর্ট সেটআপ হিসেবে পড়া।** এখানে নির্ভরযোগ্য খুচরা শর্ট সাইড নেই। সঠিক আউটপুট ঠিক দুটি: ধরে থাকলে বেচুন, না থাকলে কিনবেন না। **§৩২.৫-এর প্রতিটি সংখ্যা সঠিক আর তার একটিও শর্ট প্রবেশ নয়।**
৯. **তারল্য গেট এড়িয়ে পাতলা স্ক্রিপের প্যাটার্নকে অস্বীকার না করে "দুর্বল" নম্বর দেওয়া।** দিনে ০.৯ কোটি টাকার লেনদেনে সাত সপ্তাহের তিন-চূড়া আকৃতি একটি অ্যাকাউন্টের সূচি। **গেট ফেরত দেয় "ব্যাখ্যা করবেন না", "ছাড় দিয়ে ব্যাখ্যা করুন" নয়** — এটি তৃতীয় ক্ষেত্রে অধ্যায় ২৫-এর গুণমান-মেঝে ও অধ্যায় ৩০-এর এক্সহসশন অগ্রাহ্যকারী।
১০. **ধরে নেওয়া যে টার্গেটে দ্রুত পৌঁছানো যাবে।** ৫৪.৬০ হলো ৭০.৫০ নেকলাইনের ২২.৫৫% নিচে, যা ১০% ব্যান্ডে **নিখুঁত তাত্ত্বিক মেঝে হিসেবেই পরপর তিনটি লিমিট-ডাউন ক্লোজ দাবি করে।** তিন থেকে ছয় সপ্তাহের হিসাব করুন, আর স্টপকে ইন্ট্রাডে হইচইয়ের নয়, দুই দিকের গ্যাপ ঝুঁকির মাপে নিন।
১১. **বিশ্বাস করা যে আপনি একটি লেনদেনযোগ্য V-রিভার্সাল পেয়েছেন।** এর যেকোনো নিয়মকে চরম বিন্দুটিকে উল্লেখ করতে হবে, আর চরম বিন্দু কেবল পরেই জানা যায়। **যে ব্যাকটেস্ট লাভজনক V-ট্রেড দেখায় তা নিম্নবিন্দুটিকে ইনপুট হিসেবে ব্যবহার করেছে; তা লুক-অ্যাহেড বায়াস, আর কোনো প্যারামিটার টিউনিং তা সরায় না।**
১২. **ব্রডেনিং টপে দিকনির্দেশক লেনদেন করা।** বাড়তে থাকা ভলিউমে প্রসারমান রেঞ্জ একটি নিয়ন্ত্রণ-হারানোর সংকেত, যাতে পরিষ্কার মেজার্ড মুভও নেই, পরিষ্কার ইনভ্যালিডেশনও নেই। **এর একমাত্র সঠিক ব্যবহার আকার কমানো ও যোগ করা বন্ধ করা** — ঠিক যে পরিবেশ কম ধরে রাখতে বলছে সেখানেই এটি ট্রেড করা মানুষের টাকা হারানোর পদ্ধতি।`,
    },

    tips: {
      en: `1. **Write the numeric definition before you open a chart, and keep it in the same file as the sheet.** Prominence ≥ 5%, asymmetry ≤ 15% of height, time asymmetry ≤ 40%, duration ≥ 25 bars, slope ≤ 0.25% of head price per bar, strict volume decline, breakout ≥ 1.5× ADV. **Once written, "I see a head and shoulders" is a claim that can be wrong — and that is the entire upgrade over eyeballing.**
2. **Run the liquidity gate before you draw the neckline, not after.** BDT 2 crore average daily turnover across the pattern window is a defensible floor. RUPALICEM's 4.8 crore passes; a 0.9-crore scrip is refused outright, not marked down. **Save yourself the hour.**
3. **Read the volume column before the price column.** On RUPALICEM the head made the highest price of a five-month advance on 81.38% of the left shoulder's volume and the right shoulder needed 49.66%. **A new high on falling volume is the earliest reliable warning you will get, and it was visible at bar 46 — ten bars and 13.30 taka before the break.**
4. **Evaluate the neckline twice and label the two numbers.** $N(30) = 73.10$ for the height; $N(56) = 70.50$ for the target. Write both into the sheet with their bar numbers attached. **The most expensive errors in this chapter are bookkeeping errors, not analytical ones.**
5. **Always express asymmetry as a fraction of pattern height.** It is the only denominator that makes the threshold mean the same thing on a 15.90-taka formation and a 3.00-taka one.
6. **Wait for the throwback, and know precisely what the waiting is worth.** On RUPALICEM it is 4.46 against 1.14, or 18.30% against 46.67%. **Not every break offers one, so measure on your own names how often the throwback actually appears before you make it mandatory** — the discipline has a real cost in missed setups and you should know its size.
7. **Buffer the throwback stop by one ATR and never less.** 71.60 + 1.85 = 73.45. One ATR is the smallest amount that distinguishes "this exceeded a normal day" from "this was a normal day", and conceding the thesis to a normal day is not a decision, it is an accident.
8. **Write the half-target into the order before you enter.** 62.55 on RUPALICEM. It converts the modal outcome — most of the way, then a reversal — from $-1.00R$ into $+1.08R$. **Decide it in advance, because at 62.55 with the trade working you will not want to sell anything.**
9. **Convert every target into a minimum session count under the circuit band before you commit capital.** 22.55% at a 10% band is three sessions minimum and realistically three to six weeks. **A target you cannot reach this month is a position you must be able to hold this month.**
10. **On tops, act at the right shoulder, not at the neckline.** The volume signature at bar 46 said the same thing the break said at bar 56, at 83.10 instead of 69.80. **The price confirmation arrives too late to be worth much on a market where you can only sell what you own.**
11. **Spend your screening time on bottoms.** Inverse head and shoulders, double bottoms, rounding bottoms — identical arithmetic, and the only side of the market a DSE retail investor can actually take. **Learn the mechanics on tops because they are cleaner to see; deploy capital on bottoms because they are the only ones that pay.**
12. **Treat a broadening top as an instruction to hold less, and treat a failed pattern as a live signal in the opposite direction.** A close back above 83.10 does not merely mean the top was wrong; it means everyone positioned for it is offside at once, and that is fuel.
13. **Exclude floor-price sessions before fitting the neckline, using Chapter 26's flag.** A trough that sat on an administered floor expressed no demand and is not a trough. Fitting a neckline through it produces a line that describes a regulation.`,
      bn: `১. **চার্ট খোলার আগে সাংখ্যিক সংজ্ঞাটি লিখে ফেলুন, আর শিটের একই ফাইলে রাখুন।** প্রাধান্য ≥ ৫%, অসমতা ≤ উচ্চতার ১৫%, সময় অসমতা ≤ ৪০%, স্থিতিকাল ≥ ২৫ বার, ঢাল ≤ প্রতি বারে হেড দামের ০.২৫%, কঠোর ভলিউম হ্রাস, ব্রেকআউট ≥ ১.৫× ADV। **একবার লিখে ফেললে "আমি একটি হেড অ্যান্ড শোল্ডারস দেখছি" এমন একটি দাবি হয় যা ভুল হতে পারে — আর চোখে দেখার তুলনায় এটিই সম্পূর্ণ উন্নয়ন।**
২. **নেকলাইন আঁকার আগে তারল্য গেট চালান, পরে নয়।** প্যাটার্ন উইন্ডোজুড়ে ২ কোটি টাকা গড় দৈনিক লেনদেন একটি সমর্থনযোগ্য মেঝে। RUPALICEM-এর ৪.৮ কোটি পাস করে; ০.৯ কোটির স্ক্রিপ সরাসরি প্রত্যাখ্যাত, নম্বর কমানো নয়। **এক ঘণ্টা বাঁচান।**
৩. **দামের কলামের আগে ভলিউমের কলাম পড়ুন।** RUPALICEM-এ হেড পাঁচ মাসের উত্থানের সর্বোচ্চ দামটি বানিয়েছে বাম শোল্ডারের ৮১.৩৮% ভলিউমে, আর ডান শোল্ডারের লেগেছে ৪৯.৬৬%। **কমতে থাকা ভলিউমে নতুন উচ্চতা আপনার পাওয়া প্রাচীনতম নির্ভরযোগ্য সতর্কতা, আর তা বার ৪৬-এ দৃশ্যমান ছিল — ভাঙনের দশ বার ও ১৩.৩০ টাকা আগে।**
৪. **নেকলাইন দুবার মূল্যায়ন করুন ও দুটি সংখ্যাকে নাম দিন।** উচ্চতার জন্য $N(30) = 73.10$; টার্গেটের জন্য $N(56) = 70.50$। বার নম্বরসহ দুটিই শিটে লিখুন। **এই অধ্যায়ের সবচেয়ে ব্যয়বহুল ভুলগুলো বিশ্লেষণের নয়, হিসাবরক্ষণের।**
৫. **অসমতা সবসময় প্যাটার্নের উচ্চতার ভগ্নাংশে প্রকাশ করুন।** এটিই একমাত্র হর যা সীমাটিকে ১৫.৯০ টাকার গঠনে ও ৩.০০ টাকার গঠনে একই অর্থ দেয়।
৬. **থ্রোব্যাকের অপেক্ষা করুন, আর ঠিক জানুন অপেক্ষার মূল্য কত।** RUPALICEM-এ তা ১.১৪-এর বিপরীতে ৪.৪৬, বা ৪৬.৬৭%-এর বিপরীতে ১৮.৩০%। **প্রতিটি ভাঙন একটি দেয় না, তাই একে বাধ্যতামূলক করার আগে নিজের নামগুলোতে মাপুন থ্রোব্যাক আসলে কত বার আসে** — শৃঙ্খলাটির হাতছাড়া সেটআপে একটি প্রকৃত খরচ আছে আর তার আকার আপনার জানা উচিত।
৭. **থ্রোব্যাকের স্টপে এক ATR বাফার দিন, কখনো কম নয়।** ৭১.৬০ + ১.৮৫ = ৭৩.৪৫। এক ATR হলো ক্ষুদ্রতম পরিমাণ যা "এটি একটি স্বাভাবিক দিনকে ছাড়িয়েছে"-কে "এটি একটি স্বাভাবিক দিন ছিল" থেকে আলাদা করে, আর একটি স্বাভাবিক দিনে যুক্তি ছেড়ে দেওয়া সিদ্ধান্ত নয়, দুর্ঘটনা।
৮. **প্রবেশের আগেই অর্ধ-টার্গেট অর্ডারে লিখে ফেলুন।** RUPALICEM-এ ৬২.৫৫। এটি সবচেয়ে সম্ভাব্য ফলাফল — বেশিরভাগ পথ, তারপর ঘুরে যাওয়া — $-১.০০R$ থেকে $+১.০৮R$-এ বদলে দেয়। **আগেই ঠিক করুন, কারণ ৬২.৫৫-তে ট্রেড কাজ করতে থাকলে আপনি কিছুই বেচতে চাইবেন না।**
৯. **পুঁজি নামানোর আগে প্রতিটি টার্গেটকে সার্কিট ব্যান্ডের অধীনে ন্যূনতম সেশন সংখ্যায় রূপান্তর করুন।** ১০% ব্যান্ডে ২২.৫৫% মানে ন্যূনতম তিন সেশন আর বাস্তবে তিন থেকে ছয় সপ্তাহ। **এই মাসে যে টার্গেটে পৌঁছানো যাবে না তা এমন একটি পজিশন যা এই মাসজুড়ে ধরে রাখতে পারতে হবে।**
১০. **টপে নেকলাইনে নয়, ডান শোল্ডারে কাজ করুন।** বার ৪৬-এ ভলিউম স্বাক্ষর ঠিক সেই কথাই বলেছে যা বার ৫৬-এ ভাঙন বলেছে, ৬৯.৮০-র বদলে ৮৩.১০-এ। **যে বাজারে আপনি কেবল নিজের মালিকানার জিনিসই বেচতে পারেন সেখানে দামের নিশ্চিতকরণ কাজে লাগার মতো সময়ে আসে না।**
১১. **স্ক্রিনিংয়ের সময় বটমে ব্যয় করুন।** ইনভার্স হেড অ্যান্ড শোল্ডারস, ডাবল বটম, রাউন্ডিং বটম — অভিন্ন পাটিগণিত, আর বাজারের একমাত্র দিক যা একজন ডিএসই খুচরা বিনিয়োগকারী সত্যিই নিতে পারেন। **টপে যন্ত্রকৌশল শিখুন কারণ ওগুলো দেখতে পরিষ্কার; পুঁজি নামান বটমে কারণ কেবল ওগুলোই টাকা দেয়।**
১২. **ব্রডেনিং টপকে কম ধরে রাখার নির্দেশ গণ্য করুন, আর ব্যর্থ প্যাটার্নকে বিপরীত দিকের একটি জীবন্ত সংকেত গণ্য করুন।** ৮৩.১০-এর ওপরে ফিরে ক্লোজ কেবল বলে না যে টপটি ভুল ছিল; এটি বলে টপের জন্য অবস্থান নেওয়া সবাই একসঙ্গে ভুল দিকে, আর তা-ই জ্বালানি।
১৩. **নেকলাইন বসানোর আগে অধ্যায় ২৬-এর চিহ্ন ব্যবহার করে ফ্লোর-প্রাইসের সেশন বাদ দিন।** প্রশাসিত মেঝেতে বসে থাকা খাদ কোনো চাহিদা প্রকাশ করেনি ও তা খাদ নয়। তার মধ্য দিয়ে নেকলাইন বসালে যে রেখা পাবেন তা একটি বিধিকে বর্ণনা করে।`,
    },

    exercises: {
      en: `1. Build the §32.6 validator. Enter RUPALICEM's five pivots and confirm B14 = −0.10, B15 = 73.10, B17 = 70.50, B21 = 7.10, B22 = 15.90, B23 = 3.77, B26 = 11.76, B37 = 2.70, B45 = 54.60, B49 = 1.14, B54 = 4.46 and the VALID verdict.
2. Change B15 so the height is measured from trough 1 at 74.00 instead of the interpolated neckline. Recompute B22, B45 and B49. **How much of the trade's apparent edge came from the anchor you chose rather than from the market?**
3. Set B32 (right-shoulder volume) to 1,520,000. Nothing about the geometry changes. What does B56 return, and write two sentences on why the sheet is right to reject rather than downgrade.
4. Set B4 (head price) to 86.00. Recompute B21 and read B56. At what head price exactly does the prominence test start to pass, and what would you call the formation just below that price?
5. Change B23's denominator from B22 to B4 — asymmetry as a fraction of head price rather than pattern height. Construct a formation with a 3.00-taka height that the new test wrongly accepts.
6. Set B40 to 0.9. Confirm B56 short-circuits regardless of every other input. Then argue, in three sentences, why this is a gate rather than a weighted penalty, referencing Chapter 25 and Chapter 30.
7. Take the throwback stop from 73.45 down to 71.60 — no ATR buffer. Recompute B54. How much does the reward-to-risk improve on paper, and what fraction of ordinary sessions on a stock with ATR 1.85 would remove that stop for no reason?
8. Compute the scaling outcome for $q = 0.33$, $q = 0.50$ and $q = 0.75$ under the assumption that the half-target fills and the balance is stopped at breakeven. Plot the three results. **At what $q$ does the "failed" trade become exactly breakeven?**
9. Using the circuit-band formula, compute the minimum session count to the half-target at 62.55 and to the full target at 54.60 for daily bands of 10%, 5% and 2%. Which band makes this pattern effectively untradeable on a monthly horizon?
10. Pick a real DSE name with average daily turnover above BDT 2 crore. Screen twelve months of daily bars for formations meeting **all seven** of the chapter's conditions. How many do you find, and how many did you *think* you saw before applying the volume tests?
11. For the same name, find a three-peak shape that fails only on volume. Chart what happened next. Did it behave like a top or like a continuation pattern?
12. Take the RUPALICEM inputs, invert every price around the neckline, and rebuild the sheet as an inverse head and shoulders. Confirm the reward-to-risk arithmetic is unchanged, then write down what changes about the *volume* requirement and why.
13. In three sentences, write down what the validator cannot see. Include the depth calculation — at BDT 4.8 crore of daily turnover, how many days of volume is one BDT 5 crore ticket? Keep it with the sheet.`,
      bn: `১. §৩২.৬-এর ভ্যালিডেটর তৈরি করুন। RUPALICEM-এর পাঁচটি পিভট বসান ও নিশ্চিত করুন B14 = −০.১০, B15 = ৭৩.১০, B17 = ৭০.৫০, B21 = ৭.১০, B22 = ১৫.৯০, B23 = ৩.৭৭, B26 = ১১.৭৬, B37 = ২.৭০, B45 = ৫৪.৬০, B49 = ১.১৪, B54 = ৪.৪৬ ও VALID রায়।
২. B15 বদলে উচ্চতা অন্তর্বেশিত নেকলাইনের বদলে ৭৪.০০-এ খাদ ১ থেকে মাপুন। B22, B45 ও B49 পুনর্গণনা করুন। **ট্রেডটির আপাত সুবিধার কতটা বাজার থেকে নয়, আপনার বেছে নেওয়া নোঙর থেকে এসেছিল?**
৩. B32 (ডান শোল্ডারের ভলিউম) ১৫,২০,০০০ করুন। জ্যামিতির কিছুই বদলায় না। B56 কী ফেরত দেয়, আর দুই বাক্যে লিখুন শিট কেন অবনমন না করে বাতিল করাই সঠিক।
৪. B4 (হেডের দাম) ৮৬.০০ করুন। B21 পুনর্গণনা করে B56 পড়ুন। ঠিক কোন হেড দামে প্রাধান্য পরীক্ষা পাস করতে শুরু করে, আর তার সামান্য নিচের গঠনটিকে আপনি কী বলবেন?
৫. B23-এর হর B22 থেকে B4 করুন — অসমতা প্যাটার্নের উচ্চতার বদলে হেড দামের ভগ্নাংশ হিসেবে। ৩.০০ টাকার উচ্চতার এমন একটি গঠন বানান যা নতুন পরীক্ষা ভুলভাবে গ্রহণ করে।
৬. B40 ০.৯ করুন। নিশ্চিত করুন B56 অন্য সব ইনপুট নির্বিশেষে সংক্ষিপ্ত হয়ে যায়। তারপর তিন বাক্যে যুক্তি দিন এটি কেন একটি ভারিত জরিমানা নয়, একটি গেট, অধ্যায় ২৫ ও অধ্যায় ৩০ উল্লেখ করে।
৭. থ্রোব্যাকের স্টপ ৭৩.৪৫ থেকে ৭১.৬০-এ নামান — কোনো ATR বাফার নেই। B54 পুনর্গণনা করুন। কাগজে পুরস্কার-থেকে-ঝুঁকি কতটা উন্নত হয়, আর ATR ১.৮৫-এর শেয়ারে সাধারণ সেশনের কত ভগ্নাংশ ঐ স্টপটিকে অকারণে সরিয়ে দিত?
৮. অর্ধ-টার্গেট পূরণ ও বাকিটা ব্রেকইভেনে স্টপ — এই ধারণায় $q = ০.৩৩$, $q = ০.৫০$ ও $q = ০.৭৫$-এ কিস্তির ফলাফল গণনা করুন। তিনটি ফল আঁকুন। **কোন $q$-তে "ব্যর্থ" ট্রেডটি ঠিক ব্রেকইভেন হয়?**
৯. সার্কিট-ব্যান্ড সূত্র ব্যবহার করে ১০%, ৫% ও ২% দৈনিক ব্যান্ডে ৬২.৫৫-এ অর্ধ-টার্গেট ও ৫৪.৬০-এ পূর্ণ টার্গেট পর্যন্ত ন্যূনতম সেশন সংখ্যা গণনা করুন। কোন ব্যান্ড এই প্যাটার্নটিকে মাসিক দিগন্তে কার্যত অলেনদেনযোগ্য করে?
১০. ২ কোটি টাকার বেশি গড় দৈনিক লেনদেনের একটি প্রকৃত ডিএসই নাম বাছুন। অধ্যায়ের **সাতটি শর্তই** পূরণ করা গঠনের জন্য বারো মাসের দৈনিক বার স্ক্রিন করুন। কতগুলো পান, আর ভলিউম পরীক্ষা প্রয়োগের আগে কতগুলো দেখেছেন বলে *ভেবেছিলেন*?
১১. একই নামে এমন একটি তিন-চূড়ার আকৃতি খুঁজুন যা কেবল ভলিউমে ব্যর্থ হয়। পরে কী হলো চার্টে দেখুন। এটি কি টপের মতো আচরণ করেছে না ধারাবাহিকতা প্যাটার্নের মতো?
১২. RUPALICEM-এর ইনপুট নিয়ে নেকলাইনের চারপাশে প্রতিটি দাম উল্টান, আর শিটটি একটি ইনভার্স হেড অ্যান্ড শোল্ডারস হিসেবে পুনর্নির্মাণ করুন। নিশ্চিত করুন পুরস্কার-থেকে-ঝুঁকির পাটিগণিত অপরিবর্তিত, তারপর লিখুন *ভলিউম* প্রয়োজনের কী বদলায় ও কেন।
১৩. তিন বাক্যে লিখুন ভ্যালিডেটর কী দেখতে পায় না। গভীরতার হিসাবটি রাখুন — ৪.৮ কোটি টাকার দৈনিক লেনদেনে ৫ কোটি টাকার একটি টিকিট কত দিনের ভলিউম? শিটের সঙ্গে রেখে দিন।`,
    },

    summary: {
      en: `- **A chart pattern is a narrative fitted to noise unless you define it numerically before you see the outcome.** The seven conditions — prominence ≥ 5%, asymmetry ≤ 15% of height, time asymmetry ≤ 40%, duration ≥ 25 bars, slope ≤ 0.25% per bar, strict volume decline, breakout ≥ 1.5× ADV — turn "I see a head and shoulders" into a claim that can be **wrong**, and that is the entire upgrade.
- **The liquidity gate runs before any geometry and returns "do not interpret", not "interpret with a discount".** RUPALICEM's **BDT 4.8 crore** clears the 2-crore floor. Below it, a seven-week three-peak shape is one account's inventory schedule, and no weighting scheme fixes that — this is Chapter 25's quality floor and Chapter 30's exhaustion override arriving in a third domain.
- **The neckline is a line and must be evaluated twice.** Slope $-0.10$ BDT/bar from the two troughs gives $N(30) = 73.10$ for the height and $N(56) = 70.50$ for the target. **Height is $89.00 - 73.10 = 15.90$ — not 15.00 from trough 1, not 16.80 from trough 2.** That anchor choice alone moves the target by 1.80 taka on a 15.90 move.
- **Asymmetry is divided by pattern height, never by price.** The 60-paisa shoulder gap is **3.77%** of the 15.90 height and passes; divided by the 83.10 price it reads 0.72% and would pass on any formation ever drawn, which means it tests nothing.
- **The volume signature carries the causal claim and the geometry does not.** The head made the highest price of a five-month advance on **81.38%** of the left shoulder's volume; the right shoulder needed **49.66%**; the break came on **2.70× ADV.** Price up, participation down, then participation returning all at once on the way down. **Raise the right-shoulder volume to 1,520,000 and the formation is rejected outright with the geometry untouched.**
- **The measured move is a reference, not a promise: 70.50 − 15.90 = 54.60, with a half-target at 62.55.** Both project from the neckline at the breakout bar, never from your fill — anchor to the fill and the target becomes a fact about traders rather than about the pattern.
- **The breakout bar is the wrong entry and the arithmetic is decisive.** Entry 69.80 with the only honest stop at the 83.10 right shoulder gives $R{:}R = 1.14$ and a break-even hit rate of **46.67%**. The throwback at 70.00 with a stop at $71.60 + 1.85 = 73.45$ gives **4.46 and 18.30%.** **Twenty paisa of entry price bought twenty-eight percentage points of required accuracy — you did not forecast better, you found a cheaper way to be wrong.**
- **Scaling converts the modal outcome from a loss into a win.** Price reaching 62.55 and reversing to the stop is $-1.00R$ unplanned and **$+1.08R$** with the half-target written down in advance — the identical price path and a **2.08R** swing. Both targets filling gives **+3.31R**.
- **Circuit limits make this a multi-week position:** 54.60 is **22.55%** below the neckline, requiring **three consecutive limit-down closes** as an absolute theoretical floor and realistically three to six weeks. Size the stop for gap risk in both directions, and expect the throwback itself to take two weeks rather than three days.
- **There is no reliable short side on the DSE, so every top resolves to two instructions: sell if you hold, do not buy if you do not.** The volume signature was readable at the right shoulder — bar 46, price 83.10 — **ten bars and 13.30 taka before the break confirmed it, which is more than the entire measured move from the breakout.**
- **Bottoms are where the money is, and they use identical arithmetic.** Inverse head and shoulders, double bottoms and rounding bottoms invert every sign and preserve the 4.46-against-1.14 result, with one flip: **rising volume through the right shoulder is a positive rather than a disqualifier.** Learn the mechanics on tops because they are cleaner to see; deploy capital on bottoms because they are the only side you can take.
- **Two formations are honestly untradeable and the chapter says so.** The **V-reversal has no right side**, so any rule for it must reference the extreme — a backtest that trades it profitably has used the low as an input, which is look-ahead bias in its purest form. The **broadening top** has no clean measured move and no clean invalidation; its only correct use is to reduce size and stop adding. Ch 33 takes the same discipline to continuation patterns, where the base rate is friendlier and the DSE's one-sided market is far less of a handicap.`,
      bn: `- **ফলাফল দেখার আগে সাংখ্যিকভাবে সংজ্ঞায়িত না করলে চার্ট প্যাটার্ন হলো গোলমালের ওপর বসানো আখ্যান।** সাতটি শর্ত — প্রাধান্য ≥ ৫%, অসমতা ≤ উচ্চতার ১৫%, সময় অসমতা ≤ ৪০%, স্থিতিকাল ≥ ২৫ বার, ঢাল ≤ প্রতি বারে ০.২৫%, কঠোর ভলিউম হ্রাস, ব্রেকআউট ≥ ১.৫× ADV — "আমি একটি হেড অ্যান্ড শোল্ডারস দেখছি"-কে এমন দাবিতে বদলায় যা **ভুল হতে পারে**, আর সেটিই সম্পূর্ণ উন্নয়ন।
- **তারল্য গেট যেকোনো জ্যামিতির আগে চলে ও ফেরত দেয় "ব্যাখ্যা করবেন না", "ছাড় দিয়ে ব্যাখ্যা করুন" নয়।** RUPALICEM-এর **৪.৮ কোটি টাকা** ২-কোটির মেঝে পার করে। তার নিচে সাত সপ্তাহের তিন-চূড়া আকৃতি একটি অ্যাকাউন্টের ইনভেন্টরি সূচি, আর কোনো ভারায়ন পদ্ধতি তা সারায় না — এটি তৃতীয় ক্ষেত্রে অধ্যায় ২৫-এর গুণমান-মেঝে ও অধ্যায় ৩০-এর এক্সহসশন অগ্রাহ্যকারী।
- **নেকলাইন একটি রেখা আর তা দুবার মূল্যায়ন করতে হবে।** দুটি খাদ থেকে ঢাল $-০.১০$ টাকা/বার দেয় উচ্চতার জন্য $N(30) = 73.10$ ও টার্গেটের জন্য $N(56) = 70.50$। **উচ্চতা $89.00 - 73.10 = 15.90$ — খাদ ১ থেকে ১৫.০০ নয়, খাদ ২ থেকে ১৬.৮০ নয়।** কেবল ঐ নোঙরের পছন্দই ১৫.৯০-এর চলনে টার্গেট ১.৮০ টাকা সরায়।
- **অসমতা প্যাটার্নের উচ্চতা দিয়ে ভাগ করা হয়, কখনো দাম দিয়ে নয়।** ৬০ পয়সার শোল্ডার ব্যবধান ১৫.৯০ উচ্চতার **৩.৭৭%** ও পাস করে; ৮৩.১০ দাম দিয়ে ভাগ করলে তা ০.৭২% পড়ে আর আজ পর্যন্ত আঁকা যেকোনো গঠনেই পাস করত, অর্থাৎ তা কিছুই পরীক্ষা করে না।
- **ভলিউম স্বাক্ষরই কার্যকারণের দাবি বহন করে, জ্যামিতি নয়।** হেড পাঁচ মাসের উত্থানের সর্বোচ্চ দামটি বানিয়েছে বাম শোল্ডারের **৮১.৩৮%** ভলিউমে; ডান শোল্ডারের লেগেছে **৪৯.৬৬%**; ভাঙন এসেছে **২.৭০× ADV**-তে। দাম ওপরে, অংশগ্রহণ নিচে, তারপর নামার পথে অংশগ্রহণ একসঙ্গে ফিরে আসা। **ডান শোল্ডারের ভলিউম ১৫,২০,০০০ করুন আর জ্যামিতি অক্ষত রেখেই গঠনটি সরাসরি বাতিল।**
- **মেজার্ড মুভ একটি নির্দেশক, প্রতিশ্রুতি নয়: ৭০.৫০ − ১৫.৯০ = ৫৪.৬০, অর্ধ-টার্গেট ৬২.৫৫-এ।** দুটিই প্রক্ষেপিত ব্রেকআউট বারে নেকলাইন থেকে, কখনো আপনার ফিল থেকে নয় — ফিলে নোঙর করলে টার্গেট প্যাটার্ন নয়, ট্রেডারদের নিয়ে একটি তথ্য হয়ে যায়।
- **ব্রেকআউট বার ভুল প্রবেশ আর পাটিগণিতই নির্ণায়ক।** ৬৯.৮০-তে প্রবেশ, একমাত্র সৎ স্টপ ৮৩.১০ ডান শোল্ডারে, দেয় $R{:}R = ১.১৪$ ও **৪৬.৬৭%** ব্রেক-ইভেন হিট রেট। ৭০.০০-তে থ্রোব্যাক, $71.60 + 1.85 = 73.45$-এ স্টপ, দেয় **৪.৪৬ ও ১৮.৩০%।** **প্রবেশ দামে বিশ পয়সা কিনে দিয়েছে প্রয়োজনীয় নির্ভুলতায় আটাশ শতাংশ বিন্দু — আপনি ভালো পূর্বাভাস দেননি, ভুল হওয়ার একটি সস্তা উপায় পেয়েছেন।**
- **কিস্তিতে বেরোনো সবচেয়ে সম্ভাব্য ফলাফলকে ক্ষতি থেকে জয়ে বদলায়।** দাম ৬২.৫৫-এ পৌঁছে স্টপে ফিরে গেলে পরিকল্পনাহীনভাবে তা $-১.০০R$ আর আগেভাগে লেখা অর্ধ-টার্গেটসহ **$+১.০৮R$** — অভিন্ন দাম-পথ আর **২.০৮R**-এর দোলন। দুটি টার্গেটই পূরণ হলে **+৩.৩১R**।
- **সার্কিট সীমা একে বহু-সপ্তাহের পজিশন বানায়:** ৫৪.৬০ নেকলাইনের **২২.৫৫%** নিচে, যার জন্য নিখুঁত তাত্ত্বিক মেঝে হিসেবেই **পরপর তিনটি লিমিট-ডাউন ক্লোজ** লাগে আর বাস্তবে তিন থেকে ছয় সপ্তাহ। স্টপ দুই দিকের গ্যাপ ঝুঁকির মাপে নিন, আর থ্রোব্যাক নিজেই তিন দিনের বদলে দুই সপ্তাহ নেবে ধরে নিন।
- **ডিএসই-তে নির্ভরযোগ্য শর্ট সাইড নেই, তাই প্রতিটি টপ দুটি নির্দেশে গিয়ে দাঁড়ায়: ধরে থাকলে বেচুন, না থাকলে কিনবেন না।** ভলিউম স্বাক্ষর ডান শোল্ডারেই পড়া যেত — বার ৪৬, দাম ৮৩.১০ — **ভাঙন তা নিশ্চিত করার দশ বার ও ১৩.৩০ টাকা আগে, যা ব্রেকআউট থেকে পুরো মেজার্ড মুভের চেয়েও বেশি।**
- **টাকা আছে বটমে, আর সেগুলো অভিন্ন পাটিগণিত ব্যবহার করে।** ইনভার্স হেড অ্যান্ড শোল্ডারস, ডাবল বটম ও রাউন্ডিং বটম প্রতিটি চিহ্ন উল্টায় আর ১.১৪-এর বিপরীতে ৪.৪৬ ফলটি ধরে রাখে, একটি উল্টানোসহ: **ডান শোল্ডার জুড়ে বাড়তে থাকা ভলিউম অযোগ্যতা নয়, ইতিবাচক।** টপে যন্ত্রকৌশল শিখুন কারণ ওগুলো দেখতে পরিষ্কার; পুঁজি নামান বটমে কারণ কেবল ঐ দিকটিই আপনি নিতে পারেন।
- **দুটি গঠন সৎভাবেই অলেনদেনযোগ্য আর অধ্যায়টি তা বলে।** **V-রিভার্সালের কোনো ডান পাশ নেই**, তাই এর যেকোনো নিয়মকে চরম বিন্দুটিকে উল্লেখ করতে হবে — যে ব্যাকটেস্ট একে লাভজনকভাবে ট্রেড করে তা নিম্নবিন্দুটিকে ইনপুট হিসেবে ব্যবহার করেছে, যা বিশুদ্ধতম রূপে লুক-অ্যাহেড বায়াস। **ব্রডেনিং টপে** পরিষ্কার মেজার্ড মুভও নেই, পরিষ্কার ইনভ্যালিডেশনও নেই; এর একমাত্র সঠিক ব্যবহার আকার কমানো ও যোগ করা বন্ধ করা। অধ্যায় ৩৩ একই শৃঙ্খলা নিয়ে যায় ধারাবাহিকতা প্যাটার্নে, যেখানে ভিত্তি-হার বন্ধুত্বপূর্ণ আর ডিএসই-র একমুখী বাজার অনেক কম প্রতিবন্ধকতা।`,
    },
  },

  interview: [
    {
      q: {
        en: 'How do you stop yourself from seeing head and shoulders patterns that are not there?',
        bn: 'যে হেড অ্যান্ড শোল্ডারস নেই তা দেখা থেকে আপনি নিজেকে কীভাবে থামান?',
      },
      a: {
        en: 'By writing the definition down as numbers before I open a chart, and then applying it mechanically rather than judging it. The problem is real and it is not a discipline failure, it is how perception works — in eight months of noisy prices there is always something with three bumps, and the mental template I match against has elastic boundaries that quietly adjust to whatever happened next. So the template goes in a file: the head must exceed the higher shoulder by at least five percent, the shoulder price gap divided by pattern height must be at most fifteen percent, the time asymmetry at most forty percent, left shoulder to right shoulder at least twenty-five bars, the neckline slope at most a quarter of one percent of the head price per bar, volume must decline strictly from left shoulder to head to right shoulder, and the breakout must print at least one and a half times average volume. On the worked case those come out at seven point one zero percent prominence, three point seven seven percent asymmetry, eleven point seven six percent time asymmetry, thirty-four bars, zero point one one two four percent slope, and volume ratios of eighty-one and forty-nine percent with a two point seven zero times breakout. Every one passes, so I am willing to call it a head and shoulders. The whole point is that "I see a head and shoulders" is now a statement that can be wrong, and a claim that cannot be wrong is worth nothing.',
        bn: 'চার্ট খোলার আগে সংজ্ঞাটি সংখ্যায় লিখে ফেলে, তারপর তা বিচার না করে যান্ত্রিকভাবে প্রয়োগ করে। সমস্যাটি বাস্তব আর তা শৃঙ্খলার ব্যর্থতা নয়, উপলব্ধি এভাবেই কাজ করে — আট মাসের গোলমেলে দামে তিনটি ঢিবিওয়ালা কিছু সবসময়ই থাকে, আর আমি যে মানসিক ছাঁচের সঙ্গে মেলাই তার সীমানা স্থিতিস্থাপক এবং তা নীরবে পরে যা ঘটেছে তার সঙ্গে সমন্বয় করে নেয়। তাই ছাঁচটি একটি ফাইলে যায়: হেডকে উঁচু শোল্ডারকে অন্তত পাঁচ শতাংশে ছাড়াতে হবে, শোল্ডারের দামের ব্যবধান প্যাটার্নের উচ্চতা দিয়ে ভাগ করলে বড়জোর পনেরো শতাংশ, সময় অসমতা বড়জোর চল্লিশ শতাংশ, বাম শোল্ডার থেকে ডান শোল্ডার অন্তত পঁচিশ বার, নেকলাইনের ঢাল প্রতি বারে হেডের দামের বড়জোর সিকি শতাংশ, ভলিউমকে বাম শোল্ডার থেকে হেড থেকে ডান শোল্ডার পর্যন্ত কঠোরভাবে কমতে হবে, আর ব্রেকআউটকে অন্তত গড়ের দেড় গুণ ছাপতে হবে। বিশ্লেষিত ঘটনায় ওগুলো দাঁড়ায় সাত দশমিক এক শূন্য শতাংশ প্রাধান্য, তিন দশমিক সাত সাত শতাংশ অসমতা, এগারো দশমিক সাত ছয় শতাংশ সময় অসমতা, চৌত্রিশ বার, শূন্য দশমিক এক এক দুই চার শতাংশ ঢাল, আর একাশি ও ঊনপঞ্চাশ শতাংশ ভলিউম অনুপাত সঙ্গে দুই দশমিক সাত শূন্য গুণ ব্রেকআউট। প্রতিটি পাস করে, তাই আমি একে হেড অ্যান্ড শোল্ডারস বলতে রাজি। পুরো কথাটাই হলো "আমি একটি হেড অ্যান্ড শোল্ডারস দেখছি" এখন এমন একটি বক্তব্য যা ভুল হতে পারে, আর যে দাবি ভুল হতেই পারে না তার কোনো মূল্য নেই।',
      },
    },
    {
      q: {
        en: 'Where exactly do you measure the pattern height from, and why does it matter?',
        bn: 'প্যাটার্নের উচ্চতা আপনি ঠিক কোথা থেকে মাপেন, আর তা গুরুত্বপূর্ণ কেন?',
      },
      a: {
        en: 'From the head down to the neckline evaluated at the head\'s own bar, which is an interpolated price that appears nowhere on the chart, and that is precisely why people get it wrong. On the worked case the two troughs are seventy-four flat at bar twenty-one and seventy-two point two zero at bar thirty-nine, giving a slope of minus ten paisa a bar, so the neckline under the head at bar thirty sits at seventy-three point one zero. Head at eighty-nine gives a height of fifteen point nine zero. The temptation is to use one of the troughs because you can see it: trough one gives fifteen flat, trough two gives sixteen point eight zero. Those are wrong in opposite directions and they propagate straight into the target, which comes out at fifty-five fifty, fifty-four sixty, or fifty-three seventy depending on which line you happened to click. That is a one point eight zero spread on a fifteen point nine zero move — about eleven percent of the entire expected gain decided by a bookkeeping choice. The conceptual reason is that the neckline is a moving estimate of where demand is sitting, and at bar thirty demand was not at trough one\'s price from nine bars earlier nor trough two\'s from nine bars later. The height is how far price travelled above the prevailing demand level, so the demand level has to be evaluated at the same moment as the peak. The related trap is that the same line gives a second number, seventy point five zero at the breakout bar, and that is the one the target projects from — height uses the first, target uses the second, and swapping them costs another two sixty.',
        bn: 'হেড থেকে হেডের নিজের বারে মূল্যায়িত নেকলাইন পর্যন্ত, যা একটি অন্তর্বেশিত দাম আর চার্টের কোথাও তা নেই, আর ঠিক এ কারণেই মানুষ ভুল করেন। বিশ্লেষিত ঘটনায় দুটি খাদ বার একুশে সাতাত্তর নয়, চুয়াত্তর, আর বার ঊনচল্লিশে বাহাত্তর দশমিক দুই শূন্য, যা দেয় প্রতি বারে বিয়োগ দশ পয়সা ঢাল, তাই বার ত্রিশে হেডের নিচে নেকলাইন বসে তিয়াত্তর দশমিক এক শূন্যে। হেড ঊননব্বইয়ে হলে উচ্চতা পনেরো দশমিক নয় শূন্য। প্রলোভন হলো কোনো একটি খাদ ব্যবহার করা কারণ তা চোখে দেখা যায়: খাদ এক দেয় ঠিক পনেরো, খাদ দুই দেয় ষোলো দশমিক আট শূন্য। ওগুলো বিপরীত দিকে ভুল আর সরাসরি টার্গেটে গিয়ে পৌঁছায়, যা আপনি কোন রেখায় ক্লিক করেছেন তার ওপর নির্ভর করে দাঁড়ায় পঞ্চান্ন পঞ্চাশ, চুয়ান্ন ষাট, বা তিপ্পান্ন সত্তর। পনেরো দশমিক নয় শূন্যের চলনে এটি এক দশমিক আট শূন্যের বিস্তার — পুরো প্রত্যাশিত লাভের প্রায় এগারো শতাংশ, যা ঠিক হয় একটি হিসাবরক্ষণের পছন্দ দিয়ে। ধারণাগত কারণটি হলো নেকলাইন চাহিদা কোথায় বসে তার একটি চলমান অনুমান, আর বার ত্রিশে চাহিদা নয় বার আগের খাদ একের দামে ছিল না, নয় বার পরের খাদ দুইয়ের দামেও নয়। উচ্চতা মানে বিরাজমান চাহিদা স্তরের ওপরে দাম কতদূর গেছে, তাই চাহিদা স্তরটি চূড়ার সঙ্গে একই মুহূর্তে মূল্যায়ন করতে হবে। সংশ্লিষ্ট ফাঁদটি হলো একই রেখা দ্বিতীয় একটি সংখ্যাও দেয়, ব্রেকআউট বারে সত্তর দশমিক পাঁচ শূন্য, আর টার্গেট ওটা থেকেই প্রক্ষেপিত — উচ্চতা প্রথমটি ব্যবহার করে, টার্গেট দ্বিতীয়টি, আর অদলবদল করলে আরও দুই ষাট খরচ।',
      },
    },
    {
      q: {
        en: 'Your pattern is geometrically perfect but the right shoulder printed on rising volume. What do you do?',
        bn: 'আপনার প্যাটার্ন জ্যামিতিকভাবে নিখুঁত কিন্তু ডান শোল্ডার বাড়তি ভলিউমে ছেপেছে। আপনি কী করবেন?',
      },
      a: {
        en: 'I reject it outright. Not downgrade it, not trade it smaller — reject it, because it is not a head and shoulders. The volume signature is where the causal story lives and the geometry is only the shadow the story casts. On the worked case the left shoulder traded one point four five million shares, the head one point one eight million, and the right shoulder seven hundred and twenty thousand, so the head made the highest price of a five-month advance on eighty-one percent of the left shoulder\'s volume and the right shoulder needed under half. That says the advance was being sustained by an absence of sellers rather than a presence of buyers, which is a fundamentally unstable state, and it says the crowd willing to chase this stock had finished buying. Now suppose instead the right shoulder had printed one point five two million shares. Prominence is still seven point one zero percent, asymmetry still three point seven seven, duration still thirty-four bars, and it still looks beautiful. But volume rising into the right shoulder says buyers are arriving, not leaving, and the three-peak shape is then just a shape. The reason I insist on rejection rather than a discount is architectural and it is the same argument as the liquidity gate and as the exhaustion override in the support and resistance chapter: a condition that a good-looking total can outvote is not a condition. If I make the volume test one weighted component among seven, a formation with spectacular geometry buys past it, and I have rebuilt exactly the error the test existed to prevent.',
        bn: 'আমি একে সরাসরি বাতিল করি। অবনমন নয়, ছোট আকারে ট্রেড নয় — বাতিল, কারণ এটি হেড অ্যান্ড শোল্ডারস নয়। ভলিউম স্বাক্ষরেই কার্যকারণের গল্পটি বাস করে আর জ্যামিতি কেবল ঐ গল্পের ফেলা ছায়া। বিশ্লেষিত ঘটনায় বাম শোল্ডারে লেনদেন হয়েছে চৌদ্দ লক্ষ পঞ্চাশ হাজার শেয়ার, হেডে এগারো লক্ষ আশি হাজার, আর ডান শোল্ডারে সাত লক্ষ কুড়ি হাজার, অর্থাৎ হেড পাঁচ মাসের উত্থানের সর্বোচ্চ দামটি বানিয়েছে বাম শোল্ডারের একাশি শতাংশ ভলিউমে আর ডান শোল্ডারের লেগেছে অর্ধেকেরও কম। এটি বলে উত্থানটি ক্রেতার উপস্থিতিতে নয়, বিক্রেতার অনুপস্থিতিতে টিকে ছিল, যা মৌলিকভাবে অস্থিতিশীল একটি অবস্থা, আর এটি বলে যে ভিড় এই শেয়ারের পিছু নিতে রাজি ছিল তাদের কেনা শেষ। এবার ধরুন বদলে ডান শোল্ডার পনেরো লক্ষ কুড়ি হাজার শেয়ারে ছেপেছে। প্রাধান্য এখনো সাত দশমিক এক শূন্য শতাংশ, অসমতা এখনো তিন দশমিক সাত সাত, স্থিতিকাল এখনো চৌত্রিশ বার, আর দেখতে এখনো সুন্দর। কিন্তু ডান শোল্ডারে বাড়তে থাকা ভলিউম বলে ক্রেতারা আসছেন, যাচ্ছেন না, আর তিন-চূড়ার আকৃতিটি তখন নিছক একটি আকৃতি। ছাড়ের বদলে বাতিলে আমি জোর দিই স্থাপত্যগত কারণে আর যুক্তিটি তারল্য গেটের ও সাপোর্ট-রেজিস্ট্যান্স অধ্যায়ের এক্সহসশন অগ্রাহ্যকারীর যুক্তিই: যে শর্তকে একটি সুন্দর-দেখতে মোট ভোটে হারাতে পারে তা শর্ত নয়। ভলিউম পরীক্ষাকে সাতটির মধ্যে একটি ভারিত উপাদান বানালে চমৎকার জ্যামিতির একটি গঠন তা কিনে পার হয়, আর যে ভুল ঠেকাতে পরীক্ষাটির অস্তিত্ব ছিল আমি ঠিক তাই পুনর্নির্মাণ করলাম।',
      },
    },
    {
      q: {
        en: 'The neckline breaks on heavy volume. Why not act on that bar?',
        bn: 'নেকলাইন ভারী ভলিউমে ভাঙে। ঐ বারে কাজ করবেন না কেন?',
      },
      a: {
        en: 'Because at the moment of the break the only structurally honest invalidation is a long way overhead, and that one fact decides the economics. On the worked case the break closes at sixty-nine point eight zero, the target is fifty-four point six zero, and the only price at which I would genuinely concede the thesis is the right shoulder high at eighty-three point one zero. That is reward of fifteen twenty against risk of thirteen thirty, a ratio of one point one four, and a break-even hit rate of forty-six point six seven percent — on a pattern whose full measured move is reached materially less often than that. So the trade is not marginal, it is negative on any honest prior, and notice that nothing is wrong with the pattern. The pattern passed every test. What is wrong is the entry. Now wait for the throwback, the rally back to the broken neckline which is now resistance. It stalls at seventy-one point six zero, so my stop is that high plus one average true range of one eighty-five, which is seventy-three point four five, and I act at seventy. Reward of fifteen forty against risk of three forty-five is four point four six, and the break-even falls to eighteen point three zero percent. The entry price moved twenty paisa and the required accuracy fell by twenty-eight percentage points. I want to be clear about what happened there, because it is easy to mistake for a forecasting improvement: my read of the stock did not change at all. What changed is that the throwback manufactured a nearby structure to be wrong against. The honest cost is that not every break offers a throwback, so I would measure on my own universe how often it actually appears before making the rule absolute.',
        bn: 'কারণ ভাঙনের মুহূর্তে একমাত্র কাঠামোগতভাবে সৎ ইনভ্যালিডেশনটি অনেক ওপরে, আর ঐ একটি তথ্যই অর্থনীতিটি ঠিক করে দেয়। বিশ্লেষিত ঘটনায় ভাঙন ক্লোজ হয় ঊনসত্তর দশমিক আট শূন্যে, টার্গেট চুয়ান্ন দশমিক ছয় শূন্য, আর যে দামে আমি সত্যিই যুক্তিটি ছেড়ে দেব তা ডান শোল্ডারের উচ্চতা তিরাশি দশমিক এক শূন্য। অর্থাৎ তেরো ত্রিশ ঝুঁকির বিপরীতে পনেরো কুড়ি পুরস্কার, এক দশমিক এক চার অনুপাত, আর ছেচল্লিশ দশমিক ছয় সাত শতাংশ ব্রেক-ইভেন হিট রেট — এমন প্যাটার্নে যার পূর্ণ মেজার্ড মুভ তার চেয়ে উল্লেখযোগ্যভাবে কম বার পৌঁছায়। তাই ট্রেডটি প্রান্তিক নয়, যেকোনো সৎ পূর্বধারণায় ঋণাত্মক, আর লক্ষ করুন প্যাটার্নে কিছুই ভুল নয়। প্যাটার্নটি প্রতিটি পরীক্ষায় পাস করেছে। ভুল হলো প্রবেশ। এবার থ্রোব্যাকের অপেক্ষা করুন, ভাঙা নেকলাইনে ফিরে আসা র‍্যালি, যা এখন রেজিস্ট্যান্স। এটি একাত্তর দশমিক ছয় শূন্যে থেমে যায়, তাই আমার স্টপ ঐ উচ্চতা প্লাস এক গড় true range এক পঁচাশি, অর্থাৎ তিয়াত্তর দশমিক চার পাঁচ, আর আমি কাজ করি সত্তরে। তিন পঁয়তাল্লিশ ঝুঁকির বিপরীতে পনেরো চল্লিশ পুরস্কার মানে চার দশমিক চার ছয়, আর ব্রেক-ইভেন নেমে আঠারো দশমিক তিন শূন্য শতাংশ। প্রবেশের দাম বিশ পয়সা সরেছে আর প্রয়োজনীয় নির্ভুলতা আটাশ শতাংশ বিন্দু কমেছে। ওখানে কী ঘটল তা নিয়ে আমি স্পষ্ট থাকতে চাই, কারণ একে পূর্বাভাসের উন্নতি ভাবা সহজ: শেয়ারটি সম্পর্কে আমার পাঠ একটুও বদলায়নি। যা বদলেছে তা হলো থ্রোব্যাক একটি কাছের কাঠামো তৈরি করেছে যার বিপরীতে ভুল হওয়া যায়। সৎ খরচটি হলো প্রতিটি ভাঙন থ্রোব্যাক দেয় না, তাই নিয়মটিকে চূড়ান্ত করার আগে আমি নিজের নামের জগতে মাপব তা আসলে কত বার আসে।',
      },
    },
    {
      q: {
        en: 'You identify a valid head and shoulders top on a DSE stock you do not own. What is the trade?',
        bn: 'আপনার মালিকানাহীন একটি ডিএসই শেয়ারে আপনি একটি বৈধ হেড অ্যান্ড শোল্ডারস টপ শনাক্ত করলেন। ট্রেডটি কী?',
      },
      a: {
        en: 'There is no trade, and I think being blunt about that is more useful than pretending otherwise. There is no reliable retail short side on our market, so a top on a stock I do not own is information and nothing more. It tells me not to buy the dip, it tells me not to treat the failed troughs as support any longer, and it gives me a clean example of what distribution looks like on a chart I will see again. It does not give me a position. Half the classical pattern literature quietly assumes a functioning borrow, and importing its conclusions without noticing that is how people end up computing beautiful reward-to-risk numbers they cannot act on. Where the analysis does pay is in two places. First, if I do own the stock, the same pattern is a sell instruction — and importantly, it was a sell instruction at the right shoulder rather than at the neckline. On the worked case the volume signature was readable at bar forty-six, price eighty-three point one zero, ten bars and thirteen taka thirty before the break confirmed it at sixty-nine eighty. That is more than the entire measured move from the breakout, so acting on the volume rather than waiting for the price confirmation is worth more than the whole textbook trade. Second, the inverse pattern is a bottom, it uses identical arithmetic, and it is a side I can actually take. So my working rule is to learn the mechanics on tops because they are cleaner to see, and to spend my screening time and my capital on bottoms because they are the only ones that pay.',
        bn: 'কোনো ট্রেড নেই, আর আমার মনে হয় এ নিয়ে স্পষ্ট থাকা ভান করার চেয়ে বেশি কাজের। আমাদের বাজারে নির্ভরযোগ্য খুচরা শর্ট সাইড নেই, তাই আমার মালিকানাহীন শেয়ারে একটি টপ কেবল তথ্য, তার বেশি কিছু নয়। এটি বলে ডিপ কিনবেন না, বলে ব্যর্থ খাদগুলোকে আর সাপোর্ট গণ্য করবেন না, আর আমাকে একটি পরিষ্কার উদাহরণ দেয় যে বিতরণ চার্টে দেখতে কেমন — যে চার্ট আমি আবার দেখব। এটি আমাকে কোনো পজিশন দেয় না। ধ্রুপদী প্যাটার্ন সাহিত্যের অর্ধেক নীরবে একটি কার্যকর ধার-ব্যবস্থা ধরে নেয়, আর তা লক্ষ না করে তার উপসংহার আমদানি করাই মানুষকে এমন সুন্দর পুরস্কার-থেকে-ঝুঁকির সংখ্যা গণনা করায় যেগুলোতে তারা কাজ করতে পারে না। বিশ্লেষণটি টাকা আনে দুই জায়গায়। প্রথমত, শেয়ারটি আমার থাকলে একই প্যাটার্ন একটি বিক্রয় নির্দেশ — আর গুরুত্বপূর্ণভাবে, তা নেকলাইনে নয়, ডান শোল্ডারেই বিক্রয় নির্দেশ ছিল। বিশ্লেষিত ঘটনায় ভলিউম স্বাক্ষর বার ছেচল্লিশে পড়া যেত, দাম তিরাশি দশমিক এক শূন্য, ভাঙন ঊনসত্তর আশিতে তা নিশ্চিত করার দশ বার ও তেরো টাকা ত্রিশ আগে। তা ব্রেকআউট থেকে পুরো মেজার্ড মুভের চেয়েও বেশি, তাই দামের নিশ্চিতকরণের অপেক্ষা না করে ভলিউমে কাজ করা গোটা পাঠ্যবই-ট্রেডটির চেয়ে বেশি মূল্যবান। দ্বিতীয়ত, উল্টো প্যাটার্নটি একটি বটম, তা অভিন্ন পাটিগণিত ব্যবহার করে, আর সেটি এমন একটি দিক যা আমি সত্যিই নিতে পারি। তাই আমার কার্যকর নিয়ম হলো টপে যন্ত্রকৌশল শেখা কারণ ওগুলো দেখতে পরিষ্কার, আর স্ক্রিনিংয়ের সময় ও পুঁজি বটমে ব্যয় করা কারণ কেবল ওগুলোই টাকা দেয়।',
      },
    },
    {
      q: {
        en: 'Why do you treat the measured-move target as a scale-out point rather than an exit?',
        bn: 'মেজার্ড-মুভ টার্গেটকে আপনি প্রস্থান নয়, কিস্তিতে বেরোনোর বিন্দু গণ্য করেন কেন?',
      },
      a: {
        en: 'Because the distribution of outcomes has far more mass in "went most of the way and then turned" than in "went all the way", and the plan should be shaped like the distribution rather than like the textbook. The measured move is a rule of thumb dressed up as a projection — pattern books quote it as though the market owes you the distance, and it does not. It is hit considerably less often than the literature implies, and the hit rate varies with regime, with holding period, and critically with how strictly the pattern was defined in the first place, which is another reason the tolerance table is not bureaucracy. So on the worked case I have a full target at fifty-four point six zero and a half-target at sixty-two point five five, and I take half the position off at the half-target with the stop then moved to breakeven on the balance. Here is the arithmetic that convinced me. Suppose price falls to sixty-two fifty-five, reverses, and runs back to the stop. With no scaling that is minus one R. With the half-target it is half of seven forty-five over three forty-five, which is plus one point zero eight R. Identical price path, a swing of two point zero eight R, decided entirely by whether the tranche was written down before I entered. And if both fill, the blended result is plus three point three one R, so I have not given up much of the upside. The general principle I would state is that you should never design a plan whose only non-negative outcome requires the full measured move, because that makes you dependent on the least reliable number in the analysis.',
        bn: 'কারণ ফলাফলের বণ্টনে "পুরো পথ গেল"-এর চেয়ে "বেশিরভাগ পথ গিয়ে তারপর ঘুরে গেল"-এ অনেক বেশি ভর আছে, আর পরিকল্পনাটি পাঠ্যবইয়ের নয়, বণ্টনের আকারে হওয়া উচিত। মেজার্ড মুভ প্রক্ষেপণের পোশাক পরা একটি আন্দাজ — প্যাটার্ন-বই একে এমনভাবে উদ্ধৃত করে যেন বাজার আপনাকে ঐ দূরত্বটুকু পাওনা, আর তা নয়। সাহিত্য যা ইঙ্গিত দেয় তার চেয়ে যথেষ্ট কম বার এটি স্পর্শিত হয়, আর সাফল্যের হার বাজারের অবস্থা, ধারণকাল এবং গুরুত্বপূর্ণভাবে প্যাটার্নটি প্রথমে কতটা কঠোরভাবে সংজ্ঞায়িত হয়েছিল তার সঙ্গে বদলায়, যা সহনশীলতার টেবিলটি আমলাতন্ত্র নয় হওয়ার আরেকটি কারণ। তাই বিশ্লেষিত ঘটনায় আমার পূর্ণ টার্গেট চুয়ান্ন দশমিক ছয় শূন্যে ও অর্ধ-টার্গেট বাষট্টি দশমিক পাঁচ পাঁচে, আর আমি অর্ধ-টার্গেটে অর্ধেক পজিশন সরিয়ে নিই, তারপর বাকিটার স্টপ ব্রেকইভেনে সরাই। যে পাটিগণিতটি আমাকে বিশ্বাস করিয়েছে তা এই। ধরুন দাম বাষট্টি পঞ্চান্নে নামে, ঘুরে যায়, আর স্টপ পর্যন্ত ফিরে আসে। কিস্তি ছাড়া তা বিয়োগ এক R। অর্ধ-টার্গেটসহ তা সাত পঁয়তাল্লিশের অর্ধেক ভাগ তিন পঁয়তাল্লিশ, অর্থাৎ যোগ এক দশমিক শূন্য আট R। অভিন্ন দাম-পথ, দুই দশমিক শূন্য আট R-এর দোলন, যা সম্পূর্ণভাবে ঠিক হয় প্রবেশের আগে কিস্তিটি লেখা ছিল কি না তা দিয়ে। আর দুটিই পূরণ হলে মিশ্র ফল যোগ তিন দশমিক তিন এক R, তাই ঊর্ধ্বমুখী সম্ভাবনার খুব বেশি ছাড়িনি। সাধারণ নীতি হিসেবে আমি বলব, কখনো এমন পরিকল্পনা বানাবেন না যার একমাত্র অ-ঋণাত্মক ফলাফলের জন্য পূর্ণ মেজার্ড মুভ লাগে, কারণ তা আপনাকে বিশ্লেষণের সবচেয়ে কম নির্ভরযোগ্য সংখ্যাটির ওপর নির্ভরশীল করে তোলে।',
      },
    },
  ],

  quiz: [
    {
      q: {
        en: 'A head-and-shoulders pattern height is correctly measured from the head down to:',
        bn: 'হেড-অ্যান্ড-শোল্ডারস প্যাটার্নের উচ্চতা সঠিকভাবে মাপা হয় হেড থেকে নিচে:',
      },
      options: {
        en: [
          'The nearer of the two troughs',
          'The deeper of the two troughs',
          'The neckline evaluated at the head\'s own bar',
          'The breakout close',
        ],
        bn: [
          'দুটি খাদের নিকটতরটি পর্যন্ত',
          'দুটি খাদের গভীরতরটি পর্যন্ত',
          'হেডের নিজের বারে মূল্যায়িত নেকলাইন পর্যন্ত',
          'ব্রেকআউট ক্লোজ পর্যন্ত',
        ],
      },
      answer: 2,
    },
    {
      q: {
        en: 'With troughs at 74.00 (bar 21) and 72.20 (bar 39), the neckline at the breakout bar 56 is:',
        bn: 'খাদ ৭৪.০০ (বার ২১) ও ৭২.২০ (বার ৩৯) হলে ব্রেকআউট বার ৫৬-এ নেকলাইন:',
      },
      options: {
        en: ['72.20', '70.50', '73.10', '69.80'],
        bn: ['৭২.২০', '৭০.৫০', '৭৩.১০', '৬৯.৮০'],
      },
      answer: 1,
    },
    {
      q: {
        en: 'Shoulder asymmetry is expressed as a fraction of pattern height rather than of price because:',
        bn: 'শোল্ডার অসমতা দামের নয়, প্যাটার্নের উচ্চতার ভগ্নাংশে প্রকাশ করা হয় কারণ:',
      },
      options: {
        en: [
          'Height is always the larger number',
          'Dividing by price passes essentially every formation and therefore tests nothing',
          'It makes the arithmetic simpler',
          'Exchange rules require it',
        ],
        bn: [
          'উচ্চতা সবসময়ই বড় সংখ্যা',
          'দাম দিয়ে ভাগ করলে কার্যত প্রতিটি গঠনই পাস করে আর তাই তা কিছুই পরীক্ষা করে না',
          'এতে পাটিগণিত সহজ হয়',
          'এক্সচেঞ্জের নিয়ম তা দাবি করে',
        ],
      },
      answer: 1,
    },
    {
      q: {
        en: 'The head made a new high on 81.38% of the left shoulder\'s volume. This indicates:',
        bn: 'হেড বাম শোল্ডারের ৮১.৩৮% ভলিউমে নতুন উচ্চতা বানিয়েছে। এটি নির্দেশ করে:',
      },
      options: {
        en: [
          'Efficient buying by informed institutions',
          'The advance is sustained by an absence of sellers, not a presence of buyers',
          'The pattern should be rejected on prominence',
          'A data error in the volume series',
        ],
        bn: [
          'অবহিত প্রতিষ্ঠানের দক্ষ ক্রয়',
          'উত্থানটি ক্রেতার উপস্থিতিতে নয়, বিক্রেতার অনুপস্থিতিতে টিকে আছে',
          'প্রাধান্যের ভিত্তিতে প্যাটার্নটি বাতিল করা উচিত',
          'ভলিউম ধারায় একটি ডেটা ভুল',
        ],
      },
      answer: 1,
    },
    {
      q: {
        en: 'If the right shoulder printed on higher volume than the head, the correct action is to:',
        bn: 'ডান শোল্ডার হেডের চেয়ে বেশি ভলিউমে ছাপলে সঠিক পদক্ষেপ:',
      },
      options: {
        en: [
          'Reduce position size and trade it anyway',
          'Reject the formation outright — it is not a head and shoulders',
          'Widen the stop to compensate',
          'Average the two volumes and re-test',
        ],
        bn: [
          'পজিশনের আকার কমিয়ে তবু ট্রেড করা',
          'গঠনটি সরাসরি বাতিল করা — এটি হেড অ্যান্ড শোল্ডারস নয়',
          'ক্ষতিপূরণে স্টপ চওড়া করা',
          'দুটি ভলিউমের গড় নিয়ে পুনঃপরীক্ষা করা',
        ],
      },
      answer: 1,
    },
    {
      q: {
        en: 'Acting at the break (69.80, stop 83.10) versus the throwback (70.00, stop 73.45) changes the break-even hit rate from 46.67% to:',
        bn: 'ভাঙনে (৬৯.৮০, স্টপ ৮৩.১০) বনাম থ্রোব্যাকে (৭০.০০, স্টপ ৭৩.৪৫) কাজ করলে ব্রেক-ইভেন হিট রেট ৪৬.৬৭% থেকে হয়:',
      },
      options: {
        en: ['18.30%', '23.01%', '26.57%', '38.10%'],
        bn: ['১৮.৩০%', '২৩.০১%', '২৬.৫৭%', '৩৮.১০%'],
      },
      answer: 0,
    },
    {
      q: {
        en: 'The throwback stop is set one ATR above the throwback high because:',
        bn: 'থ্রোব্যাকের স্টপ থ্রোব্যাক উচ্চতার এক ATR ওপরে বসানো হয় কারণ:',
      },
      options: {
        en: [
          'One ATR is the smallest buffer that distinguishes an abnormal day from a normal one',
          'It guarantees the stop will never be hit',
          'Exchange tick rules require a round buffer',
          'It makes the reward-to-risk look better on paper',
        ],
        bn: [
          'এক ATR হলো ক্ষুদ্রতম বাফার যা অস্বাভাবিক দিনকে স্বাভাবিক দিন থেকে আলাদা করে',
          'এটি নিশ্চিত করে স্টপ কখনো লাগবে না',
          'এক্সচেঞ্জের টিক নিয়মে একটি রাউন্ড বাফার লাগে',
          'এতে কাগজে পুরস্কার-থেকে-ঝুঁকি ভালো দেখায়',
        ],
      },
      answer: 0,
    },
    {
      q: {
        en: 'Price reaches the half-target at 62.55 then reverses to the stop. With a 50% scale-out versus no plan, the outcomes are:',
        bn: 'দাম ৬২.৫৫-এ অর্ধ-টার্গেটে পৌঁছে স্টপে ফিরে যায়। ৫০% কিস্তি বনাম কোনো পরিকল্পনা না থাকলে ফলাফল:',
      },
      options: {
        en: [
          '+1.08R versus −1.00R',
          '+3.31R versus +1.08R',
          '−0.50R versus −1.00R',
          'Identical, because the price path is the same',
        ],
        bn: [
          '+১.০৮R বনাম −১.০০R',
          '+৩.৩১R বনাম +১.০৮R',
          '−০.৫০R বনাম −১.০০R',
          'অভিন্ন, কারণ দাম-পথ একই',
        ],
      },
      answer: 0,
    },
    {
      q: {
        en: 'The V-reversal has no trigger formula in this chapter because:',
        bn: 'এই অধ্যায়ে V-রিভার্সালের কোনো ট্রিগার সূত্র নেই কারণ:',
      },
      options: {
        en: [
          'It is too rare to be worth specifying',
          'It has no right side, so any rule must reference the extreme — which is only known in hindsight',
          'Its measured move is undefined on the DSE only',
          'Circuit limits prevent it from forming',
        ],
        bn: [
          'এটি নির্দিষ্ট করার মতো যথেষ্ট বিরল নয়',
          'এর কোনো ডান পাশ নেই, তাই যেকোনো নিয়মকে চরম বিন্দু উল্লেখ করতে হবে — যা কেবল পশ্চাদ্দৃষ্টিতেই জানা যায়',
          'কেবল ডিএসই-তে এর মেজার্ড মুভ অসংজ্ঞায়িত',
          'সার্কিট সীমা একে গঠিত হতে দেয় না',
        ],
      },
      answer: 1,
    },
    {
      q: {
        en: 'A valid head-and-shoulders top on a DSE stock you do not own is:',
        bn: 'আপনার মালিকানাহীন একটি ডিএসই শেয়ারে একটি বৈধ হেড-অ্যান্ড-শোল্ডারস টপ হলো:',
      },
      options: {
        en: [
          'A short entry with a stop above the right shoulder',
          'Information only — there is no reliable short side, so tops are exit signals',
          'A signal to buy the measured-move target as a limit order',
          'Proof the company\'s fundamentals have deteriorated',
        ],
        bn: [
          'ডান শোল্ডারের ওপরে স্টপসহ একটি শর্ট প্রবেশ',
          'কেবল তথ্য — নির্ভরযোগ্য শর্ট সাইড নেই, তাই টপ হলো প্রস্থান সংকেত',
          'মেজার্ড-মুভ টার্গেটে লিমিট অর্ডারে কেনার সংকেত',
          'কোম্পানির মৌলভিত্তি অবনতির প্রমাণ',
        ],
      },
      answer: 1,
    },
  ],
};
