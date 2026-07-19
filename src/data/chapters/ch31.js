/**
 * Chapter 31 — Trendlines & Channels
 * Part III, Technical Analysis.
 */

export default {
  n: 31,
  tools: [],

  excelSheet: {
    filename: 'ch31-trendline-channel-calculator.xlsx',
    sheetName: 'Trendlines',
    cells: [
      { cell: 'A1', v: '— Trendline Anchors (uptrend: two swing-low CLOSES) —' },
      { cell: 'A2', v: 'Anchor 1 — bar index' }, { cell: 'B2', v: 0 },
      { cell: 'A3', v: 'Anchor 1 — price (BDT)' }, { cell: 'B3', v: 42.1 },
      { cell: 'A4', v: 'Anchor 2 — bar index' }, { cell: 'B4', v: 24 },
      { cell: 'A5', v: 'Anchor 2 — price (BDT)' }, { cell: 'B5', v: 48.4 },
      { cell: 'A6', v: 'Slope (BDT per bar)' }, { cell: 'B6', f: '(B5-B3)/(B4-B2)' },
      { cell: 'A7', v: 'Intercept (line value at bar 0)' }, { cell: 'B7', f: 'B3-B6*B2' },
      { cell: 'A8', v: 'Slope (% of anchor 1 per bar)' }, { cell: 'B8', f: 'B6/B3*100' },

      { cell: 'A10', v: '— Validation: the third touch —' },
      { cell: 'A11', v: 'Third-touch bar index' }, { cell: 'B11', v: 40 },
      { cell: 'A12', v: 'Third-touch price (BDT)' }, { cell: 'B12', v: 52.95 },
      { cell: 'A13', v: 'Line value at that bar' }, { cell: 'B13', f: 'B7+B6*B11' },
      { cell: 'A14', v: 'Deviation (BDT)' }, { cell: 'B14', f: 'B12-B13' },
      { cell: 'A15', v: 'ATR(14)' }, { cell: 'B15', v: 1.1 },
      { cell: 'A16', v: 'Deviation (ATR units)' }, { cell: 'B16', f: 'B14/B15' },
      { cell: 'A17', v: 'Validated?' },
      { cell: 'B17', f: 'IF(ABS(B16)<=0.5,"VALIDATED - three touches","NOT VALIDATED - two points is a guess")' },

      { cell: 'A19', v: '— Slope diagnostic (scale-free) —' },
      { cell: 'A20', v: 'Normalised slope (ATR per bar)' }, { cell: 'B20', f: 'B6/B15' },
      { cell: 'A21', v: 'Slope verdict' },
      { cell: 'B21', f: 'IF(B20>1,"PARABOLIC - blow-off risk",IF(B20>0.5,"STEEP - not sustainable","SUSTAINABLE"))' },

      { cell: 'A23', v: '— Projection and break test —' },
      { cell: 'A24', v: 'Current bar index' }, { cell: 'B24', v: 60 },
      { cell: 'A25', v: 'Current close (BDT)' }, { cell: 'B25', v: 56.3 },
      { cell: 'A26', v: 'Line value at current bar' }, { cell: 'B26', f: 'B7+B6*B24' },
      { cell: 'A27', v: 'Distance price - line (BDT)' }, { cell: 'B27', f: 'B25-B26' },
      { cell: 'A28', v: 'Distance (ATR units)' }, { cell: 'B28', f: 'B27/B15' },
      { cell: 'A29', v: 'Break buffer (ATR)' }, { cell: 'B29', v: 0.5 },
      { cell: 'A30', v: 'Broken?' }, { cell: 'B30', f: 'IF(B28<-B29,"BROKEN","INTACT")' },

      { cell: 'A32', v: '— Parallel channel (return line) —' },
      { cell: 'A33', v: 'Return-line anchor bar' }, { cell: 'B33', v: 12 },
      { cell: 'A34', v: 'Return-line anchor price' }, { cell: 'B34', v: 49.6 },
      { cell: 'A35', v: 'Channel offset (BDT)' }, { cell: 'B35', f: 'B34-(B7+B6*B33)' },
      { cell: 'A36', v: 'Channel width (ATR)' }, { cell: 'B36', f: 'B35/B15' },
      { cell: 'A37', v: 'Return line at current bar' }, { cell: 'B37', f: 'B26+B35' },
      { cell: 'A38', v: 'Position in channel (0=main, 1=return)' }, { cell: 'B38', f: '(B25-B26)/B35' },

      { cell: 'A40', v: '— Regression Channel — last 11 closes (bars 50-60) —' },
      { cell: 'D40', v: 'x' }, { cell: 'E40', v: 'Close' },
      { cell: 'D41', v: 0 }, { cell: 'E41', v: 62.0 },
      { cell: 'D42', v: 1 }, { cell: 'E42', v: 61.8 },
      { cell: 'D43', v: 2 }, { cell: 'E43', v: 60.2 },
      { cell: 'D44', v: 3 }, { cell: 'E44', v: 60.4 },
      { cell: 'D45', v: 4 }, { cell: 'E45', v: 59.5 },
      { cell: 'D46', v: 5 }, { cell: 'E46', v: 59.7 },
      { cell: 'D47', v: 6 }, { cell: 'E47', v: 57.6 },
      { cell: 'D48', v: 7 }, { cell: 'E48', v: 58.0 },
      { cell: 'D49', v: 8 }, { cell: 'E49', v: 57.0 },
      { cell: 'D50', v: 9 }, { cell: 'E50', v: 56.5 },
      { cell: 'D51', v: 10 }, { cell: 'E51', v: 56.3 },

      { cell: 'A53', v: 'Regression slope (BDT per bar)' }, { cell: 'B53', f: 'SLOPE(E41:E51,D41:D51)' },
      { cell: 'A54', v: 'Regression intercept' }, { cell: 'B54', f: 'INTERCEPT(E41:E51,D41:D51)' },
      { cell: 'A55', v: 'Standard error (STEYX)' }, { cell: 'B55', f: 'STEYX(E41:E51,D41:D51)' },
      { cell: 'A56', v: 'Fitted value at x=10' }, { cell: 'B56', f: 'B54+B53*10' },
      { cell: 'A57', v: 'Upper band (+2 sigma)' }, { cell: 'B57', f: 'B56+2*B55' },
      { cell: 'A58', v: 'Lower band (-2 sigma)' }, { cell: 'B58', f: 'B56-2*B55' },
      { cell: 'A59', v: 'Current close' }, { cell: 'B59', f: 'E51' },
      { cell: 'A60', v: 'z-score inside channel' }, { cell: 'B60', f: '(B59-B56)/B55' },
      { cell: 'A61', v: 'Regression verdict' },
      { cell: 'B61', f: 'IF(B60>2,"ABOVE CHANNEL - stretched",IF(B60<-2,"BELOW CHANNEL - stretched","INSIDE CHANNEL - no edge"))' },

      { cell: 'A63', v: 'RECONCILIATION' },
      {
        cell: 'B63',
        f: 'IF(AND(B30="BROKEN",B53<0),"Hand-drawn line broken AND regression slope negative - the trend is over",IF(B30="BROKEN","Line broken but regression slope still positive - wait one more bar","Line intact - do not redraw it"))',
      },
    ],
  },

  objectives: {
    en: [
      'State the two-part price definition of a trend and apply it without exception to a DSE series.',
      'Draw a trendline to a fixed convention — two anchors, a third touch to validate, closes not wicks — and record it in writing before it is tested.',
      'Judge slope with a scale-free measure in ATR units rather than the meaningless 45-degree rule.',
      'Construct parallel channels, read rising and falling wedges as narrowing channels, and place an internal line through messy data.',
      'Replace a subjective line with a linear-regression channel and a z-score that nobody can adjust after the fact.',
    ],
    bn: [
      'ট্রেন্ডের দুই-অংশের মূল্যভিত্তিক সংজ্ঞা বলা এবং কোনো ব্যতিক্রম ছাড়াই একটি ডিএসই সিরিজে প্রয়োগ করা।',
      'একটি নির্দিষ্ট রীতিতে ট্রেন্ডলাইন আঁকা — দুটি অ্যাংকর, বৈধতার জন্য তৃতীয় স্পর্শ, উইক নয় ক্লোজ — এবং পরীক্ষিত হওয়ার আগেই লিখিতভাবে লিপিবদ্ধ করা।',
      'অর্থহীন ৪৫-ডিগ্রি নিয়মের বদলে ATR এককে স্কেল-নিরপেক্ষ পরিমাপ দিয়ে ঢাল বিচার করা।',
      'সমান্তরাল চ্যানেল গঠন করা, রাইজিং ও ফলিং ওয়েজকে সংকীর্ণ হতে থাকা চ্যানেল হিসেবে পড়া, এবং এলোমেলো ডেটায় ইন্টারনাল লাইন বসানো।',
      'একটি ব্যক্তিনিষ্ঠ লাইনের বদলে লিনিয়ার রিগ্রেশন চ্যানেল ও এমন একটি z-score ব্যবহার করা যা কেউ পরে বদলাতে পারে না।',
    ],
  },

  blocks: {
    theory: {
      en: `Chapter 30 gave you horizontal support and resistance: a price level that mattered once and may matter again. **This chapter gives you the same idea with a slope**, and with it a problem that horizontal levels do not have.

A horizontal level is a number. You write down 48.00 and either price trades through 48.00 or it does not. **A trendline is not a number — it is a construction, and you built it.** That single difference is the subject of this chapter.

### A trend is a definition, not an opinion

Say it precisely, because most people do not:

> **An uptrend is a sequence of higher highs *and* higher lows. A downtrend is a sequence of lower highs *and* lower lows.**

Both conditions. Always. A series making higher highs while its lows go nowhere is not an uptrend — it is a range with an expanding ceiling, and it fails differently. A series making higher lows while the highs stall is not an uptrend either; it is compression, which is the wedge discussed below.

The value of the definition is that it is falsifiable. **The moment a swing low prints below the prior swing low, the uptrend is over by definition** — not "weakening", not "under pressure", over. Whether you keep the position is a separate decision about your stop and your thesis. But the classification has changed, and pretending otherwise is the first step down the road this chapter is about.

### Drawing rules

1. **For an uptrend, connect swing lows. For a downtrend, connect swing highs.** You are drawing the *dynamic* boundary that has been holding, not the one that has been breaking.
2. **Two points define the line. Three points validate it.** A line through two lows is arithmetic — any two points define a line, including two meaningless ones. The third touch is the evidence that other participants see the same thing. Until then, treat the line as a hypothesis, not a level.
3. **Bodies or wicks — pick one convention and never switch.** Closing prices ignore intraday noise and are harder to fudge; wicks capture the actual extremes traders experienced. Both are defensible. **Switching between them mid-analysis is not.** In practice, the moment you find yourself saying "well, if I use the wick instead, the line still holds," you have stopped analysing and started negotiating.

This book's convention: **closes for the anchors, closes for the break test.** The reason is specific to the DSE and is set out below.

### Slope is information

Every textbook repeats that a trendline steeper than 45° is unsustainable. **As stated, that rule is meaningless**, because 45° on a chart depends on the aspect ratio of your screen, the price range on the y-axis, and how many bars you have loaded. Stretch the window and a 30° line becomes 60°.

The rule is pointing at something real, so restate it in units that do not move:

$$\\text{Normalised slope} = \\frac{\\text{slope in BDT per bar}}{ATR}$$

**This is scale-free.** It asks how much of a typical day's range the trend demands per bar. A line requiring 0.24 ATR of progress per bar is asking the market for something it can plausibly deliver. A line requiring 1.2 ATR per bar is asking for an entire day's range plus twenty percent, every single day, and no market supplies that for long.

Working bands: **below 0.5 ATR/bar is sustainable; 0.5 to 1.0 is steep and usually a second, accelerated line inside the primary trend; above 1.0 is parabolic and marks a blow-off.** When an accelerated line breaks while the primary line holds, you have received a warning, not a signal — the trend is decelerating, not reversing.

**For long trends, use a log scale.** On an arithmetic scale a stock moving 40 → 60 → 90 draws a curve that curves upward, and any straight line you fit through it will be broken and redrawn repeatedly. On a log scale that same series is a straight line, because each leg is the same *percentage*. Multi-year trendlines drawn on arithmetic scales are one of the most common unforced errors in the craft.

### Channels

A **parallel channel** is the trendline plus a *return line* — the same slope, offset to touch the extremes on the other side. Draw the main line first, from the side the trend is respecting; then copy it to the most extreme point on the opposite side. Never fit both lines independently, because two independently-fitted lines will not be parallel and you will have drawn a shape rather than measured one.

The channel gives you three things a bare trendline does not: an expected upper bound, a width you can express in ATR (channel width divided by ATR — under about 3 ATR the channel is too tight to trade inside), and a *position* measure — where in the channel price currently sits, on a 0-to-1 scale. **Buying at 0.9 of channel width in an uptrend is buying the worst location in the structure.**

**Overthrow matters.** When price exits above the return line of a rising channel and then re-enters, that excursion is frequently the last one. The channel that contained the move for fifty bars did not fail; it was exceeded by exhaustion.

### Wedges are narrowing channels

If the two lines converge rather than run parallel, you have a wedge, and the interpretation flips.

- **Rising wedge** — both lines slope up, the lower line steeper than the upper. Higher lows are being made *faster* than higher highs. Demand is working harder for less. Typically resolves **down**.
- **Falling wedge** — both lines slope down, the upper steeper. Typically resolves **up**.

Read a wedge as a channel whose width is going to zero. **The narrowing itself is the signal**, because it says the two sides are converging on a price at which one of them must give way. A wedge is exhaustion drawn in two lines, and it is the only trendline structure in this chapter whose expected resolution runs *against* its own slope.

### The internal trendline

Real DSE series are messy. A single gap-down on a dividend record date, or one 8% spike on a rumour, will leave an outlier that no clean line can touch without distorting everything else.

The **internal trendline** is drawn through the *body* of the data — accepting that a few extremes sit outside it — so that it represents the majority of the price action rather than its two most extreme prints. It is a legitimate technique and it is also the most abusable one in the chapter, because "through the body of the data" is exactly the phrase a trader uses when justifying a line they wanted anyway. **If you draw an internal line, you must state in advance how many violations you will tolerate.**

### The subjectivity problem

Here is the spine of the chapter.

A horizontal level at 48.00 exists independently of you. A trendline does not. It has an author, and the author has a position.

**The single strongest bias in technical analysis is not seeing patterns that are not there. It is redrawing a line so that it does not break.** It is subtle because every individual redraw is defensible: the wick was a data error; that low was a dividend adjustment; the real low was the close, not the print; the trend obviously accelerated so the earlier anchor no longer applies. Each excuse is plausible. Together they produce a line that has never broken in the entire history of the chart, which is exactly what a line that means nothing looks like.

Notice what has happened. **A trendline is supposed to be a hypothesis that can fail. A redrawn trendline is a hypothesis that cannot.** The moment it cannot fail, it also cannot inform, and you are holding a losing position with a drawing on it.

### The pre-commitment rule

The fix is procedural, and it takes ninety seconds.

Before the line is tested, write down four things: **the two anchor points (date and price), the convention used (closes or wicks), the projected line value at a stated future date, and the break rule you will apply.** Put them in a file, not in your head.

Then never redraw. If the line breaks, it broke. You may draw a *new* line — that is a new hypothesis, dated today, on the record — but the old one is not amended. **A trendline you are permitted to redraw is a trendline that has told you nothing.**

The break rule should also be written and should include a buffer, because a break by one paisa is not a break. This book uses **a close below the line by more than 0.5 ATR.** Chapter 30 used the same buffer logic on horizontal levels for the same reason: the level is approximate, so the test must have a tolerance.

### The objective alternative

If you distrust your own hand — and you should — replace the line entirely.

Fit an ordinary least-squares regression through the closes over a fixed lookback, and place bands at $\\pm 2$ standard errors. **Nobody can fudge a regression.** The slope, intercept, and standard error follow mechanically from the data and the window length. The only discretionary input is the window, and you fix that in advance and apply it to every chart.

You lose something real: a regression line does not respect the swing lows the way a hand-drawn line does, and it has no memory of the specific points where buyers actually appeared. **You gain something more valuable: a line you cannot argue with.** The best practice is to run both and reconcile — when your hand-drawn line has broken and the regression slope has turned negative, the trend is over and there is nothing left to negotiate.

### What the DSE does to all of this

Every rule above was developed on markets that do not behave like ours.

**DSE trends are shorter and more news-driven.** The multi-year trendlines in Western textbooks assume a deep, continuously-traded market where a trend is an aggregation of thousands of independent decisions. Here, a trend is often the visible trace of one policy announcement, one dividend expectation, or one large accumulator. When the driver ends, the trend does not decelerate — it stops. Lines fitted over 200 bars routinely have no informational content at bar 201.

**Low liquidity produces spiky wicks.** On a thinly-traded counter a single small order at a bad moment prints a low three percent below anything anyone actually transacted at in size. Anchor a trendline to that print and you have anchored it to noise. **This is the reason for the closing-price convention** — closes on the DSE are struck in the closing session with far more participation, and they are much harder to produce by accident. A wick-based line on a thin DSE counter will be violated and redrawn so often that the redrawing becomes habitual, which is precisely the failure mode this chapter is trying to prevent.

**The floor-price era must be excluded.** During the period when floors were imposed, a large number of counters printed the same price day after day because they were not permitted to print a lower one. Any trendline spanning that period is fitted partly to an administrative constraint rather than to supply and demand. Chapter 6 made the general point; here it has a specific consequence — **cut the series at the boundary and start a new line on the other side.** A line drawn through the floor period is not a weak line, it is a meaningless one.

**Adjust for dividends before drawing long trendlines.** A DSE series that has not been adjusted for a cash dividend contains a mechanical gap down on the ex-date that has nothing to do with supply and demand. On a 20% cash dividend that gap can be several taka. A trendline drawn across an unadjusted record date is measuring an accounting event. Adjust the series first, or draw the line only within one dividend cycle.

**And circuit breakers truncate the test.** A price that would have closed 6% below your line may close at the limit instead. Your break test then returns "intact" on a day the market was trying to tell you otherwise. Read a limit-down close near a trendline as a break until the next unconstrained session proves otherwise.`,
      bn: `অধ্যায় ৩০ আপনাকে অনুভূমিক সাপোর্ট ও রেজিস্ট্যান্স দিয়েছে: এমন একটি মূল্যস্তর যা একবার গুরুত্বপূর্ণ ছিল এবং আবার হতে পারে। **এই অধ্যায় আপনাকে একই ধারণা ঢালসহ দেয়**, আর তার সঙ্গে এমন একটি সমস্যা যা অনুভূমিক স্তরে নেই।

একটি অনুভূমিক স্তর একটি সংখ্যা। আপনি ৪৮.০০ লিখে রাখেন, আর দাম হয় ৪৮.০০ ভেদ করে নয়তো করে না। **ট্রেন্ডলাইন কোনো সংখ্যা নয় — এটি একটি নির্মাণ, আর আপনিই তা বানিয়েছেন।** এই একটিমাত্র পার্থক্যই এই অধ্যায়ের বিষয়।

### ট্রেন্ড একটি সংজ্ঞা, মতামত নয়

সুনির্দিষ্টভাবে বলুন, কারণ বেশিরভাগ মানুষ বলেন না:

> **আপট্রেন্ড হলো উচ্চতর উচ্চ *এবং* উচ্চতর নিম্নের ধারাবাহিকতা। ডাউনট্রেন্ড হলো নিম্নতর উচ্চ *এবং* নিম্নতর নিম্নের ধারাবাহিকতা।**

দুটি শর্তই। সবসময়। যে সিরিজ উচ্চতর উচ্চ বানাচ্ছে অথচ তার নিম্নগুলো একই জায়গায়, সেটি আপট্রেন্ড নয় — সেটি প্রসারিত ছাদসহ একটি রেঞ্জ, আর তা ভিন্নভাবে ভাঙে। যে সিরিজ উচ্চতর নিম্ন বানাচ্ছে অথচ উচ্চগুলো থেমে আছে, সেটিও আপট্রেন্ড নয়; সেটি সংকোচন, যা নিচে আলোচিত ওয়েজ।

সংজ্ঞাটির মূল্য হলো এটি মিথ্যা প্রমাণযোগ্য। **যে মুহূর্তে একটি সুইং লো আগের সুইং লো-র নিচে ছাপা হয়, সংজ্ঞা অনুযায়ীই আপট্রেন্ড শেষ** — "দুর্বল হচ্ছে" নয়, "চাপে আছে" নয়, শেষ। আপনি পজিশন রাখবেন কি না তা আপনার স্টপ ও থিসিস নিয়ে আলাদা সিদ্ধান্ত। কিন্তু শ্রেণিবিন্যাস বদলে গেছে, আর অন্যরকম ভান করাই সেই পথের প্রথম ধাপ যা নিয়ে এই অধ্যায়।

### আঁকার নিয়ম

১. **আপট্রেন্ডে সুইং লো জোড়া লাগান। ডাউনট্রেন্ডে সুইং হাই জোড়া লাগান।** আপনি সেই *গতিশীল* সীমানা আঁকছেন যা টিকে আছে, যেটি ভাঙছে সেটি নয়।
২. **দুটি বিন্দু লাইন নির্ধারণ করে। তিনটি বিন্দু তাকে বৈধতা দেয়।** দুটি লো দিয়ে টানা লাইন নিছক পাটিগণিত — যেকোনো দুটি বিন্দুই একটি লাইন নির্ধারণ করে, অর্থহীন দুটিও। তৃতীয় স্পর্শই প্রমাণ যে অন্য অংশগ্রহণকারীরাও একই জিনিস দেখছেন। তার আগে লাইনটিকে অনুমান হিসেবে দেখুন, স্তর হিসেবে নয়।
৩. **বডি না উইক — একটি রীতি বাছুন এবং কখনো বদলাবেন না।** ক্লোজিং প্রাইস দিনের ভেতরের গোলমাল উপেক্ষা করে এবং কারচুপি করা কঠিন; উইক ট্রেডাররা যে প্রকৃত চরম দাম দেখেছেন তা ধরে। দুটোই সমর্থনযোগ্য। **বিশ্লেষণের মাঝপথে এদের মধ্যে বদল করা সমর্থনযোগ্য নয়।** বাস্তবে, যে মুহূর্তে আপনি নিজেকে বলতে শোনেন "আচ্ছা, উইক ব্যবহার করলে লাইনটা তো টিকেই আছে," তখন আপনি বিশ্লেষণ থামিয়ে দর-কষাকষি শুরু করেছেন।

এই বইয়ের রীতি: **অ্যাংকরের জন্য ক্লোজ, ভাঙার পরীক্ষার জন্যও ক্লোজ।** কারণটি ডিএসই-নির্দিষ্ট এবং নিচে বলা হয়েছে।

### ঢালই তথ্য

প্রতিটি পাঠ্যবই বলে ৪৫°-এর চেয়ে খাড়া ট্রেন্ডলাইন টেকসই নয়। **যেভাবে বলা হয়, নিয়মটি অর্থহীন**, কারণ চার্টে ৪৫° নির্ভর করে আপনার পর্দার অনুপাত, y-অক্ষের দামের পরিসর এবং কত বার লোড করেছেন তার ওপর। জানালা টেনে বড় করলে ৩০° লাইন ৬০° হয়ে যায়।

নিয়মটি সত্যিকারের কিছু নির্দেশ করে, তাই এমন এককে পুনর্লিখন করুন যা নড়ে না:

$$\\text{স্বাভাবিকীকৃত ঢাল} = \\frac{\\text{প্রতি বারে BDT-তে ঢাল}}{ATR}$$

**এটি স্কেল-নিরপেক্ষ।** এটি জিজ্ঞেস করে ট্রেন্ড প্রতি বারে একটি সাধারণ দিনের পরিসরের কতটা দাবি করছে। যে লাইন প্রতি বারে ০.২৪ ATR অগ্রগতি চায় সে বাজারের কাছে এমন কিছু চাইছে যা বাজার যুক্তিসঙ্গতভাবে দিতে পারে। যে লাইন প্রতি বারে ১.২ ATR চায় সে প্রতিদিন একটি পুরো দিনের পরিসর যোগ বিশ শতাংশ চাইছে, আর কোনো বাজার তা বেশিদিন দেয় না।

কার্যকর ব্যান্ড: **০.৫ ATR/বার-এর নিচে টেকসই; ০.৫ থেকে ১.০ খাড়া এবং সাধারণত প্রাথমিক ট্রেন্ডের ভেতরে দ্বিতীয় ত্বরান্বিত লাইন; ১.০-এর ওপরে প্যারাবলিক ও ব্লো-অফ চিহ্নিত করে।** প্রাথমিক লাইন টিকে থাকা অবস্থায় ত্বরান্বিত লাইন ভাঙলে আপনি সতর্কবার্তা পেয়েছেন, সংকেত নয় — ট্রেন্ড ধীর হচ্ছে, উল্টে যাচ্ছে না।

**দীর্ঘ ট্রেন্ডে লগ স্কেল ব্যবহার করুন।** পাটিগাণিতিক স্কেলে ৪০ → ৬০ → ৯০ যাওয়া শেয়ার এমন একটি বক্ররেখা আঁকে যা উপরের দিকে বাঁকে, আর তার ভেতরে যে সরলরেখাই বসান তা বারবার ভাঙবে ও নতুন করে আঁকতে হবে। লগ স্কেলে ঐ একই সিরিজ সরলরেখা, কারণ প্রতিটি ধাপ একই *শতাংশ*। পাটিগাণিতিক স্কেলে আঁকা বহু-বছরের ট্রেন্ডলাইন এই কারিগরির সবচেয়ে সাধারণ অপ্রয়োজনীয় ভুলগুলোর একটি।

### চ্যানেল

**সমান্তরাল চ্যানেল** হলো ট্রেন্ডলাইন যোগ একটি *রিটার্ন লাইন* — একই ঢাল, অন্য পাশের চরম বিন্দু ছোঁয়ার জন্য সরানো। আগে মূল লাইন আঁকুন, যে পাশ ট্রেন্ড মানছে সেখান থেকে; তারপর তা কপি করে বিপরীত পাশের সবচেয়ে চরম বিন্দুতে বসান। কখনোই দুটি লাইন আলাদাভাবে ফিট করবেন না, কারণ আলাদাভাবে ফিট করা দুটি লাইন সমান্তরাল হবে না এবং আপনি একটি আকৃতি এঁকে ফেলবেন, কিছু মাপবেন না।

চ্যানেল আপনাকে তিনটি জিনিস দেয় যা খালি ট্রেন্ডলাইন দেয় না: একটি প্রত্যাশিত ঊর্ধ্বসীমা, ATR-এ প্রকাশযোগ্য একটি প্রস্থ (চ্যানেল প্রস্থ ভাগ ATR — প্রায় ৩ ATR-এর নিচে চ্যানেলটি ভেতরে ট্রেড করার জন্য বড্ড সরু), এবং একটি *অবস্থান* পরিমাপ — দাম এখন চ্যানেলের কোথায়, ০ থেকে ১ স্কেলে। **আপট্রেন্ডে চ্যানেল প্রস্থের ০.৯-এ কেনা মানে কাঠামোর সবচেয়ে খারাপ জায়গায় কেনা।**

**ওভারথ্রো গুরুত্বপূর্ণ।** দাম যখন ঊর্ধ্বমুখী চ্যানেলের রিটার্ন লাইনের ওপরে বেরিয়ে গিয়ে আবার ভেতরে ফেরে, ঐ ভ্রমণটিই প্রায়শই শেষ ভ্রমণ। যে চ্যানেল পঞ্চাশ বার ধরে গতিটিকে ধরে রেখেছিল তা ব্যর্থ হয়নি; ক্লান্তি তাকে ছাড়িয়ে গেছে।

### ওয়েজ হলো সংকীর্ণ হতে থাকা চ্যানেল

দুটি লাইন সমান্তরাল না চলে যদি অভিসারী হয়, তবে আপনার কাছে একটি ওয়েজ আছে, আর ব্যাখ্যা উল্টে যায়।

- **রাইজিং ওয়েজ** — দুটি লাইনই ওপরে ঢালু, নিচেরটি ওপরেরটির চেয়ে খাড়া। উচ্চতর উচ্চের চেয়ে উচ্চতর নিম্ন *দ্রুত* তৈরি হচ্ছে। চাহিদা কম ফলের জন্য বেশি খাটছে। সাধারণত **নিচের দিকে** নিষ্পত্তি হয়।
- **ফলিং ওয়েজ** — দুটি লাইনই নিচে ঢালু, ওপরেরটি খাড়া। সাধারণত **ওপরের দিকে** নিষ্পত্তি হয়।

ওয়েজকে এমন চ্যানেল হিসেবে পড়ুন যার প্রস্থ শূন্যের দিকে যাচ্ছে। **সংকোচনটিই সংকেত**, কারণ এটি বলে দুই পক্ষ এমন একটি দামে অভিসারী হচ্ছে যেখানে একজনকে হার মানতেই হবে। ওয়েজ হলো দুই লাইনে আঁকা ক্লান্তি, আর এই অধ্যায়ের এটিই একমাত্র ট্রেন্ডলাইন কাঠামো যার প্রত্যাশিত নিষ্পত্তি নিজের ঢালের *বিপরীতে* চলে।

### ইন্টারনাল ট্রেন্ডলাইন

প্রকৃত ডিএসই সিরিজ এলোমেলো। লভ্যাংশের রেকর্ড তারিখে একটি গ্যাপ-ডাউন, কিংবা গুজবে একটি ৮% লাফ, এমন একটি বহির্মুখী বিন্দু রেখে যায় যা কোনো পরিচ্ছন্ন লাইন বাকি সব বিকৃত না করে ছুঁতে পারে না।

**ইন্টারনাল ট্রেন্ডলাইন** ডেটার *দেহের* ভেতর দিয়ে আঁকা হয় — কয়েকটি চরম বিন্দু বাইরে থাকবে তা মেনে নিয়ে — যাতে এটি দুটি চরম ছাপ নয়, বরং অধিকাংশ মূল্য আচরণের প্রতিনিধিত্ব করে। এটি একটি বৈধ কৌশল এবং একইসঙ্গে এই অধ্যায়ের সবচেয়ে অপব্যবহারযোগ্য কৌশল, কারণ "ডেটার দেহের ভেতর দিয়ে" ঠিক সেই বাক্যাংশ যা একজন ট্রেডার ব্যবহার করেন আগে থেকেই চাওয়া একটি লাইনকে সমর্থন করতে। **ইন্টারনাল লাইন আঁকলে আপনাকে আগেই বলতে হবে কতগুলো লঙ্ঘন আপনি সহ্য করবেন।**

### ব্যক্তিনিষ্ঠতার সমস্যা

এখানেই অধ্যায়ের মেরুদণ্ড।

৪৮.০০-এ একটি অনুভূমিক স্তর আপনার থেকে স্বাধীনভাবে বিদ্যমান। ট্রেন্ডলাইন নয়। এর একজন রচয়িতা আছে, আর রচয়িতার একটি পজিশন আছে।

**টেকনিক্যাল অ্যানালাইসিসে সবচেয়ে শক্তিশালী পক্ষপাত নেই এমন প্যাটার্ন দেখা নয়। এটি হলো লাইনটিকে নতুন করে আঁকা যাতে তা না ভাঙে।** এটি সূক্ষ্ম কারণ প্রতিটি পুনরাঙ্কন আলাদাভাবে সমর্থনযোগ্য: উইকটি ডেটার ভুল ছিল; ঐ লো লভ্যাংশ সমন্বয় ছিল; আসল লো ছিল ক্লোজ, ছাপা দাম নয়; ট্রেন্ড স্পষ্টতই ত্বরান্বিত হয়েছে তাই আগের অ্যাংকর আর প্রযোজ্য নয়। প্রতিটি অজুহাত যুক্তিসঙ্গত। একসঙ্গে এরা এমন একটি লাইন তৈরি করে যা চার্টের পুরো ইতিহাসে কখনো ভাঙেনি, আর অর্থহীন লাইন ঠিক এরকমই দেখায়।

লক্ষ করুন কী ঘটল। **ট্রেন্ডলাইন এমন একটি অনুমান হওয়ার কথা যা ব্যর্থ হতে পারে। পুনরাঙ্কিত ট্রেন্ডলাইন এমন একটি অনুমান যা ব্যর্থ হতে পারে না।** যে মুহূর্তে এটি ব্যর্থ হতে পারে না, সে মুহূর্তে এটি তথ্যও দিতে পারে না, আর আপনার হাতে থাকে একটি লোকসানি পজিশন যার ওপর একটি আঁকিবুঁকি বসানো।

### পূর্ব-অঙ্গীকারের নিয়ম

সমাধানটি পদ্ধতিগত, আর এতে নব্বই সেকেন্ড লাগে।

লাইনটি পরীক্ষিত হওয়ার আগে চারটি জিনিস লিখে রাখুন: **দুটি অ্যাংকর বিন্দু (তারিখ ও দাম), ব্যবহৃত রীতি (ক্লোজ না উইক), একটি নির্দিষ্ট ভবিষ্যৎ তারিখে লাইনের প্রক্ষেপিত মান, এবং আপনি যে ভাঙার নিয়ম প্রয়োগ করবেন।** এগুলো একটি ফাইলে রাখুন, মাথায় নয়।

তারপর কখনো নতুন করে আঁকবেন না। লাইন ভাঙলে, ভেঙেছে। আপনি একটি *নতুন* লাইন আঁকতে পারেন — সেটি আজকের তারিখের, নথিভুক্ত, একটি নতুন অনুমান — কিন্তু পুরোনোটি সংশোধিত হয় না। **যে ট্রেন্ডলাইন নতুন করে আঁকার অনুমতি আপনার আছে, সেই ট্রেন্ডলাইন আপনাকে কিছুই বলেনি।**

ভাঙার নিয়মও লিখিত হওয়া উচিত এবং তাতে একটি বাফার থাকা উচিত, কারণ এক পয়সার ভাঙন ভাঙন নয়। এই বই ব্যবহার করে **লাইনের ০.৫ ATR-এর বেশি নিচে একটি ক্লোজ।** অধ্যায় ৩০ একই কারণে অনুভূমিক স্তরে একই বাফার যুক্তি ব্যবহার করেছে: স্তরটি আনুমানিক, তাই পরীক্ষারও সহনশীলতা থাকতে হবে।

### বস্তুনিষ্ঠ বিকল্প

নিজের হাতে অবিশ্বাস থাকলে — আর থাকা উচিত — লাইনটি পুরোপুরি বদলে ফেলুন।

একটি নির্দিষ্ট লুকব্যাকে ক্লোজগুলোর ভেতর দিয়ে সাধারণ ন্যূনতম বর্গ (OLS) রিগ্রেশন ফিট করুন, এবং $\\pm 2$ স্ট্যান্ডার্ড এররে ব্যান্ড বসান। **রিগ্রেশনে কেউ কারচুপি করতে পারে না।** ঢাল, ইন্টারসেপ্ট ও স্ট্যান্ডার্ড এরর যান্ত্রিকভাবে ডেটা ও জানালার দৈর্ঘ্য থেকে আসে। একমাত্র বিবেচনাধীন ইনপুট হলো জানালা, আর সেটি আপনি আগেই ঠিক করে প্রতিটি চার্টে প্রয়োগ করেন।

আপনি সত্যিকারের কিছু হারান: রিগ্রেশন লাইন হাতে আঁকা লাইনের মতো সুইং লো-দের সম্মান করে না, আর ক্রেতারা ঠিক কোথায় হাজির হয়েছিলেন তার স্মৃতি এর নেই। **আপনি আরও মূল্যবান কিছু পান: এমন একটি লাইন যার সঙ্গে আপনি তর্ক করতে পারবেন না।** সবচেয়ে ভালো অভ্যাস হলো দুটোই চালানো ও মিলিয়ে দেখা — যখন আপনার হাতে আঁকা লাইন ভেঙেছে এবং রিগ্রেশনের ঢালও ঋণাত্মক হয়েছে, তখন ট্রেন্ড শেষ এবং দর-কষাকষির কিছু বাকি নেই।

### এসবের সঙ্গে ডিএসই কী করে

ওপরের প্রতিটি নিয়ম এমন বাজারে তৈরি হয়েছে যা আমাদের মতো আচরণ করে না।

**ডিএসই-র ট্রেন্ড ছোট এবং বেশি সংবাদচালিত।** পশ্চিমা পাঠ্যবইয়ের বহু-বছরের ট্রেন্ডলাইন এমন একটি গভীর, ধারাবাহিকভাবে লেনদেন হওয়া বাজার ধরে নেয় যেখানে ট্রেন্ড হাজারো স্বাধীন সিদ্ধান্তের সমষ্টি। এখানে ট্রেন্ড প্রায়ই একটি নীতি ঘোষণা, একটি লভ্যাংশ প্রত্যাশা বা একজন বড় সংগ্রাহকের দৃশ্যমান ছাপ। চালিকাশক্তি শেষ হলে ট্রেন্ড ধীর হয় না — থেমে যায়। ২০০ বারে ফিট করা লাইনের ২০১তম বারে প্রায়ই কোনো তথ্যমূল্য থাকে না।

**কম তারল্য কাঁটাযুক্ত উইক তৈরি করে।** পাতলা লেনদেনের কাউন্টারে খারাপ মুহূর্তে একটি ছোট অর্ডার এমন একটি লো ছাপে যা পরিমাণে কেউ যে দামে লেনদেন করেছে তার তিন শতাংশ নিচে। ঐ ছাপে ট্রেন্ডলাইন অ্যাংকর করলে আপনি গোলমালে অ্যাংকর করলেন। **এ কারণেই ক্লোজিং-প্রাইস রীতি** — ডিএসই-তে ক্লোজ অনেক বেশি অংশগ্রহণসহ ক্লোজিং সেশনে নির্ধারিত হয়, আর দুর্ঘটনাক্রমে তা তৈরি করা অনেক কঠিন। পাতলা ডিএসই কাউন্টারে উইক-ভিত্তিক লাইন এত ঘন ঘন লঙ্ঘিত ও পুনরাঙ্কিত হবে যে পুনরাঙ্কন অভ্যাসে পরিণত হবে — আর এই অধ্যায় ঠিক সেই ব্যর্থতাই ঠেকাতে চাইছে।

**ফ্লোর-প্রাইস যুগ বাদ দিতেই হবে।** যে সময়ে ফ্লোর আরোপিত ছিল, বহু কাউন্টার দিনের পর দিন একই দাম ছেপেছে কারণ তাদের নিচু দাম ছাপার অনুমতি ছিল না। ঐ সময় বিস্তৃত যেকোনো ট্রেন্ডলাইন আংশিকভাবে চাহিদা-সরবরাহ নয়, একটি প্রশাসনিক বাধ্যবাধকতায় ফিট করা। অধ্যায় ৬ সাধারণ কথাটি বলেছে; এখানে তার একটি নির্দিষ্ট পরিণতি আছে — **সীমানায় সিরিজটি কেটে দিন এবং অন্য পাশে নতুন লাইন শুরু করুন।** ফ্লোর-কাল ভেদ করে আঁকা লাইন দুর্বল লাইন নয়, অর্থহীন লাইন।

**দীর্ঘ ট্রেন্ডলাইন আঁকার আগে লভ্যাংশ সমন্বয় করুন।** নগদ লভ্যাংশের জন্য অসমন্বিত ডিএসই সিরিজে এক্স-তারিখে একটি যান্ত্রিক গ্যাপ-ডাউন থাকে যার সঙ্গে চাহিদা-সরবরাহের সম্পর্ক নেই। ২০% নগদ লভ্যাংশে ঐ গ্যাপ কয়েক টাকা হতে পারে। অসমন্বিত রেকর্ড তারিখ পেরিয়ে আঁকা ট্রেন্ডলাইন একটি হিসাবরক্ষণ ঘটনা মাপছে। আগে সিরিজ সমন্বয় করুন, নয়তো একটি লভ্যাংশ চক্রের ভেতরেই লাইন আঁকুন।

**আর সার্কিট ব্রেকার পরীক্ষাটিকেই কেটে দেয়।** যে দাম আপনার লাইনের ৬% নিচে ক্লোজ করত, সেটি বদলে সীমায় ক্লোজ করতে পারে। তখন আপনার ভাঙার পরীক্ষা এমন দিনে "অক্ষত" দেখাবে যেদিন বাজার উল্টো কথা বলার চেষ্টা করছিল। ট্রেন্ডলাইনের কাছে লিমিট-ডাউন ক্লোজকে ভাঙন হিসেবেই পড়ুন, যতক্ষণ না পরের অবাধ সেশন উল্টোটা প্রমাণ করে।`,
    },

    simple: {
      en: `Chapter 30 was about flat lines. This one is about sloped lines. That sounds like a small change. It is not.

### The everyday version

Imagine you are tracking a child's height on a doorframe. Every six months you make a mark. After four marks you can hold a ruler against them and see a straight line going up. You can then slide the ruler forward and say: *if this continues, she will be this tall next year.*

That is a trendline. Two marks let you place the ruler. A third mark that lands on the ruler tells you the ruler is right.

**Now imagine the fifth mark comes in below the ruler.** You have two choices. You can say "the growth rate has changed" — which is honest. Or you can tilt the ruler slightly so the new mark is back on the line, and tell yourself nothing happened.

**Everyone who loses money on trendlines chooses the second option.** Not once — repeatedly, a little at a time, each tilt too small to feel dishonest.

### What a trend actually is

People say "the stock is in an uptrend" when they mean "it has gone up." Those are different.

An uptrend needs **two** things at the same time:
- each peak higher than the last peak, **and**
- each dip higher than the last dip.

If the peaks are rising but the dips are not, that is not an uptrend. It is a stock bumping against a ceiling that keeps moving while its floor stays put — and that ends badly, differently, and usually faster.

The reason to be strict about the definition is simple: **it lets you be wrong.** The moment a dip goes below the previous dip, the uptrend is finished. Not by your judgement — by definition. You cannot argue with it, which is exactly what makes it useful.

### The rules, in plain terms

- To draw an uptrend line, connect the **low points**. To draw a downtrend line, connect the **high points**.
- **Two points let you draw. Three points let you believe.** Any two dots make a straight line, including two dots that mean nothing.
- Decide once whether you use the **closing price** or the **daily low**, and then stick with it forever. In this book we use closing prices, because on a thinly-traded DSE share one small careless order can print a low that nobody really traded at.

### The rule that will save you money

Before the line is tested, **write it down.** On paper or in a file: the two dates and prices you used, and what the line will be worth on a specific future date.

Then never change it.

If the price closes below that line by a meaningful amount, **the line broke.** You are allowed to draw a fresh line tomorrow and date it tomorrow. You are not allowed to go back and adjust yesterday's.

This feels excessive until you have watched yourself do it. Then it feels like the only thing standing between you and a slowly-emptying account.

### The version that cannot be cheated

There is a way to remove yourself from the process entirely.

Instead of drawing a line by eye, let arithmetic draw it: fit the single straight line that sits closest to all the recent closing prices at once — a **regression line** — and put two bands around it showing how much prices normally scatter either side.

Excel does this in three functions. It takes ten seconds, it uses every price rather than the two you liked, and **nobody, including you, can nudge it.**

It is less intuitive than a hand-drawn line. That is the point.`,
      bn: `অধ্যায় ৩০ ছিল সমতল রেখা নিয়ে। এটি ঢালু রেখা নিয়ে। শুনতে ছোট পরিবর্তন মনে হয়। তা নয়।

### প্রতিদিনের সংস্করণ

কল্পনা করুন আপনি দরজার চৌকাঠে একটি শিশুর উচ্চতা মাপছেন। প্রতি ছয় মাসে একটি দাগ দেন। চারটি দাগের পর আপনি একটি স্কেল ধরে দেখতে পান ওপরের দিকে একটি সরলরেখা যাচ্ছে। তারপর স্কেলটি সামনে বাড়িয়ে বলতে পারেন: *এটি চলতে থাকলে আগামী বছর সে এতটা লম্বা হবে।*

সেটিই ট্রেন্ডলাইন। দুটি দাগ আপনাকে স্কেল বসাতে দেয়। তৃতীয় দাগ যদি স্কেলের ওপর পড়ে, তবে সেটি বলে স্কেলটি ঠিক আছে।

**এবার কল্পনা করুন পঞ্চম দাগটি স্কেলের নিচে পড়ল।** আপনার দুটি পথ। আপনি বলতে পারেন "বৃদ্ধির হার বদলেছে" — যা সৎ। অথবা আপনি স্কেলটি সামান্য কাত করে নতুন দাগটিকে আবার লাইনে এনে নিজেকে বলতে পারেন কিছুই হয়নি।

**ট্রেন্ডলাইনে যাঁরা টাকা হারান তাঁরা সবাই দ্বিতীয় পথটি বাছেন।** একবার নয় — বারবার, একটু একটু করে, প্রতিটি কাত এত ছোট যে অসৎ মনে হয় না।

### ট্রেন্ড আসলে কী

মানুষ বলে "শেয়ারটি আপট্রেন্ডে আছে" যখন তারা বোঝাতে চায় "এটি বেড়েছে"। এ দুটি আলাদা।

আপট্রেন্ডে একসঙ্গে **দুটি** জিনিস লাগে:
- প্রতিটি চূড়া আগের চূড়ার চেয়ে উঁচু, **এবং**
- প্রতিটি খাদ আগের খাদের চেয়ে উঁচু।

চূড়াগুলো উঠলেও খাদগুলো না উঠলে সেটি আপট্রেন্ড নয়। সেটি এমন একটি শেয়ার যা ক্রমাগত সরতে থাকা ছাদে ধাক্কা খাচ্ছে অথচ মেঝে একই জায়গায় — আর তা খারাপভাবে, ভিন্নভাবে ও সাধারণত দ্রুত শেষ হয়।

সংজ্ঞা নিয়ে কড়া হওয়ার কারণ সহজ: **এটি আপনাকে ভুল হতে দেয়।** যে মুহূর্তে একটি খাদ আগের খাদের নিচে যায়, আপট্রেন্ড শেষ। আপনার বিচারে নয় — সংজ্ঞা অনুযায়ী। এর সঙ্গে তর্ক করা যায় না, আর ঠিক এ কারণেই এটি কাজে লাগে।

### সহজ ভাষায় নিয়মগুলো

- আপট্রেন্ড লাইন আঁকতে **নিম্ন বিন্দুগুলো** জোড়া লাগান। ডাউনট্রেন্ড লাইনে **উচ্চ বিন্দুগুলো**।
- **দুটি বিন্দু আঁকতে দেয়। তিনটি বিন্দু বিশ্বাস করতে দেয়।** যেকোনো দুটি বিন্দুই সরলরেখা বানায়, অর্থহীন দুটিও।
- একবারই ঠিক করুন আপনি **ক্লোজিং প্রাইস** নাকি **দিনের লো** ব্যবহার করবেন, তারপর চিরকাল তাতেই থাকুন। এই বইয়ে আমরা ক্লোজিং প্রাইস ব্যবহার করি, কারণ পাতলা লেনদেনের ডিএসই শেয়ারে একটি ছোট অসাবধান অর্ডার এমন একটি লো ছাপতে পারে যেখানে সত্যিকারে কেউ লেনদেন করেনি।

### যে নিয়ম আপনার টাকা বাঁচাবে

লাইনটি পরীক্ষিত হওয়ার আগে **লিখে রাখুন।** কাগজে বা ফাইলে: যে দুটি তারিখ ও দাম ব্যবহার করেছেন, এবং একটি নির্দিষ্ট ভবিষ্যৎ তারিখে লাইনটির মান কত হবে।

তারপর কখনো বদলাবেন না।

দাম যদি ঐ লাইনের অর্থবহ পরিমাণ নিচে ক্লোজ করে, **লাইনটি ভেঙেছে।** আগামীকাল নতুন লাইন এঁকে আগামীকালের তারিখ দিতে আপনার অনুমতি আছে। ফিরে গিয়ে গতকালেরটি সমন্বয় করার অনুমতি নেই।

নিজেকে এটি করতে না দেখা পর্যন্ত নিয়মটি বাড়াবাড়ি মনে হয়। দেখার পর মনে হয় এটিই একমাত্র জিনিস যা আপনার আর ধীরে ধীরে খালি হতে থাকা অ্যাকাউন্টের মাঝখানে দাঁড়িয়ে আছে।

### যে সংস্করণে ফাঁকি দেওয়া যায় না

প্রক্রিয়া থেকে নিজেকে সম্পূর্ণ সরিয়ে নেওয়ার একটি উপায় আছে।

চোখে দেখে লাইন আঁকার বদলে পাটিগণিতকে আঁকতে দিন: এমন একটিমাত্র সরলরেখা বসান যা একসঙ্গে সব সাম্প্রতিক ক্লোজিং প্রাইসের সবচেয়ে কাছে থাকে — একটি **রিগ্রেশন লাইন** — আর তার চারপাশে দুটি ব্যান্ড দিন যা দেখায় দাম সাধারণত দুই পাশে কতটা ছড়ায়।

এক্সেল তিনটি ফাংশনেই এটি করে। দশ সেকেন্ড লাগে, আপনার পছন্দের দুটি নয় বরং প্রতিটি দাম ব্যবহার করে, আর **আপনিসহ কেউ একে ঠেলে সরাতে পারে না।**

হাতে আঁকা লাইনের চেয়ে এটি কম স্বজ্ঞাত। সেটাই এর উদ্দেশ্য।`,
    },

    example: {
      en: `### One line, sixty bars, and the temptation to move it

A DSE mid-cap — call it **ASIACERAM**, an illustrative counter with real-shaped numbers — puts in a swing low and starts climbing. All prices are closes. ATR(14) sits at **BDT 1.10** throughout.

| Bar | Event | Close |
|---|---|---|
| 0 | Swing low — **anchor 1** | 42.10 |
| 12 | Swing high inside the move | 49.60 |
| 24 | Swing low — **anchor 2** | 48.40 |
| 40 | Swing low — **third touch** | 52.95 |
| 50 | Peak | 62.00 |
| 60 | Today | 56.30 |

**Step one: draw the line and record it.**

$$\\text{slope} = \\frac{48.40 - 42.10}{24 - 0} = \\frac{6.30}{24} = 0.2625 \\text{ BDT/bar}$$

The intercept is the anchor-1 price itself, 42.10, since anchor 1 sits at bar 0.

Written into the log on the evening of bar 24: *anchors (0, 42.10) and (24, 48.40), closing-price convention, projected value at bar 60 = 57.85, break rule = close more than 0.5 ATR below the line.* Four lines of text, thirty seconds. **That record is the entire discipline of this chapter.**

### The third touch validates it

At bar 40 the stock pulls back to 52.95. The line says:

$$42.10 + 0.2625 \\times 40 = 52.60$$

Deviation of **+0.35 BDT**, which is **0.32 ATR** — comfortably inside the 0.5 ATR tolerance. Three touches. **The line is now evidence rather than arithmetic.**

### Is the slope sustainable?

$$\\text{Normalised slope} = \\frac{0.2625}{1.10} = 0.24 \\text{ ATR per bar}$$

Under 0.5, so sustainable. Note that on a phone screen this same line might *look* almost vertical, and on a wide monitor almost flat. **The 45-degree rule would have given you two different answers on the same data.** 0.24 ATR/bar is the same number on every device.

### The channel

The highest close between the anchors is 49.60 at bar 12. The line there reads $42.10 + 0.2625 \\times 12 = 45.25$, so the channel offset is:

$$49.60 - 45.25 = 4.35 \\text{ BDT} = 3.95 \\text{ ATR}$$

Just under 4 ATR wide — tradeable. The return line at bar 60 would sit at $57.85 + 4.35 = 62.20$.

### Where it went wrong, and the warning that came first

Between bars 40 and 46 the stock accelerates. A second line off (40, 52.95) and (46, 57.15) has slope:

$$\\frac{57.15 - 52.95}{6} = 0.70 \\text{ BDT/bar} = 0.64 \\text{ ATR per bar}$$

**Steep.** Above 0.5, below 1.0 — an accelerated line inside the primary trend, not a parabola, but not something the market sustains.

At bar 50 the close of 62.00 sits **above the return line** ($55.23 + 4.35 = 59.58$). That is an overthrow — the channel that had contained fifty bars of trend was exceeded. Not a sell signal on its own. A note in the log.

**Bar 52.** Close 60.20. The accelerated line reads $52.95 + 0.70 \\times 12 = 61.35$. Price is 1.15 below it, or **1.05 ATR** — the accelerated line has broken. The primary line at bar 52 is only at 55.75, still far below price. **This is the warning: deceleration, not reversal.**

**Bar 59.** Close 56.50. The primary line reads $42.10 + 0.2625 \\times 59 = 57.59$. Break threshold is $57.59 - 0.55 = 57.04$. Price closes below it. **The primary line is broken.**

### The moment of temptation

Here is what happens in most people's heads at bar 59, holding a position bought around 54.

*The bar-24 anchor is stale. The trend clearly accelerated at bar 40. If I re-anchor from (40, 52.95) using the primary slope, the line at bar 59 is 57.94 — no wait, that's worse. What if I use the wick lows instead of closes? The bar-0 wick was 41.40, the bar-24 wick was 48.10. That gives a slope of 0.2792 and a line at 58.87 — worse again. What if I use bar 0 and bar 40 as the anchors? Slope 0.2713, line at 58.10. Also worse.*

**Notice something important: the redraws are not helping.** That is not luck. When a trend genuinely ends, *most* re-anchorings also break, because the price has fallen away from the whole structure rather than from one particular line.

**But the search itself is the disease.** In a case where price had closed at 57.20 — one paisa the wrong side of the line — one of those four alternatives would have "saved" it, and the position would have been held on the authority of a line invented after the fact. The pre-commitment rule exists so that this search never begins.

### The objective cross-check

Regression through the eleven closes from bar 50 to bar 60, re-indexed $x = 0 \\ldots 10$:

| x | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Close | 62.00 | 61.80 | 60.20 | 60.40 | 59.50 | 59.70 | 57.60 | 58.00 | 57.00 | 56.50 | 56.30 |

Slope **−0.60 BDT/bar**, intercept **62.00**, standard error **0.4570**. Fitted value at $x=10$ is 56.00; the close of 56.30 gives a z-score of **+0.66** — well inside the channel, no stretch either way.

**Read the two together and the conclusion is not close.** The hand-drawn line is broken and the regression slope over the most recent eleven bars is negative. Higher lows have stopped. The definition is no longer satisfied. **The uptrend is over — not weakening, over — and there is nothing on the chart to argue with.**

### What it cost

Someone who bought at 54 near bar 43 and exited on the bar-59 close at 56.50 made 4.6%. Someone who redrew the line three times and exited when it "finally really broke" at, say, 51.80, lost 4.1% — on the same chart, the same stock, the same entry. **The difference between the two is a text file written thirty-five bars earlier.**`,
      bn: `### একটি লাইন, ষাটটি বার, এবং তা সরানোর প্রলোভন

একটি ডিএসই মিড-ক্যাপ — বলা যাক **ASIACERAM**, বাস্তব-আকৃতির সংখ্যাসহ একটি দৃষ্টান্তমূলক কাউন্টার — একটি সুইং লো তৈরি করে ওঠা শুরু করে। সব দামই ক্লোজ। ATR(14) পুরো সময় **১.১০ টাকা**।

| বার | ঘটনা | ক্লোজ |
|---|---|---|
| ০ | সুইং লো — **অ্যাংকর ১** | ৪২.১০ |
| ১২ | গতির ভেতরের সুইং হাই | ৪৯.৬০ |
| ২৪ | সুইং লো — **অ্যাংকর ২** | ৪৮.৪০ |
| ৪০ | সুইং লো — **তৃতীয় স্পর্শ** | ৫২.৯৫ |
| ৫০ | চূড়া | ৬২.০০ |
| ৬০ | আজ | ৫৬.৩০ |

**প্রথম ধাপ: লাইনটি আঁকুন ও লিপিবদ্ধ করুন।**

$$\\text{ঢাল} = \\frac{48.40 - 42.10}{24 - 0} = \\frac{6.30}{24} = 0.2625 \\text{ BDT/bar}$$

ইন্টারসেপ্ট অ্যাংকর-১-এর দামই, ৪২.১০, যেহেতু অ্যাংকর ১ বার ০-তে।

বার ২৪-এর সন্ধ্যায় লগে লেখা: *অ্যাংকর (0, 42.10) ও (24, 48.40), ক্লোজিং-প্রাইস রীতি, বার ৬০-এ প্রক্ষেপিত মান = ৫৭.৮৫, ভাঙার নিয়ম = লাইনের ০.৫ ATR-এর বেশি নিচে ক্লোজ।* চার লাইন লেখা, ত্রিশ সেকেন্ড। **ঐ নথিটিই এই অধ্যায়ের সম্পূর্ণ শৃঙ্খলা।**

### তৃতীয় স্পর্শ একে বৈধতা দেয়

বার ৪০-এ শেয়ারটি ৫২.৯৫-এ ফিরে আসে। লাইন বলে:

$$42.10 + 0.2625 \\times 40 = 52.60$$

বিচ্যুতি **+০.৩৫ টাকা**, অর্থাৎ **০.৩২ ATR** — ০.৫ ATR সহনশীলতার স্বচ্ছন্দে ভেতরে। তিনটি স্পর্শ। **লাইনটি এখন পাটিগণিত নয়, প্রমাণ।**

### ঢাল কি টেকসই?

$$\\text{স্বাভাবিকীকৃত ঢাল} = \\frac{0.2625}{1.10} = 0.24 \\text{ ATR প্রতি বার}$$

০.৫-এর নিচে, তাই টেকসই। লক্ষ করুন, ফোনের পর্দায় এই একই লাইন প্রায় খাড়া *দেখাতে* পারে, আর চওড়া মনিটরে প্রায় সমতল। **৪৫-ডিগ্রির নিয়ম একই ডেটায় আপনাকে দুটি ভিন্ন উত্তর দিত।** ০.২৪ ATR/বার প্রতিটি যন্ত্রে একই সংখ্যা।

### চ্যানেল

অ্যাংকর দুটির মাঝে সর্বোচ্চ ক্লোজ বার ১২-তে ৪৯.৬০। সেখানে লাইন পড়ে $42.10 + 0.2625 \\times 12 = 45.25$, তাই চ্যানেল অফসেট:

$$49.60 - 45.25 = 4.35 \\text{ BDT} = 3.95 \\text{ ATR}$$

৪ ATR-এর সামান্য নিচে প্রশস্ত — ট্রেডযোগ্য। বার ৬০-এ রিটার্ন লাইন থাকবে $57.85 + 4.35 = 62.20$-এ।

### কোথায় ভুল হলো, আর কোন সতর্কবার্তা আগে এসেছিল

বার ৪০ ও ৪৬-এর মাঝে শেয়ারটি ত্বরান্বিত হয়। (40, 52.95) ও (46, 57.15) দিয়ে টানা দ্বিতীয় লাইনের ঢাল:

$$\\frac{57.15 - 52.95}{6} = 0.70 \\text{ BDT/bar} = 0.64 \\text{ ATR প্রতি বার}$$

**খাড়া।** ০.৫-এর ওপরে, ১.০-এর নিচে — প্রাথমিক ট্রেন্ডের ভেতরে একটি ত্বরান্বিত লাইন, প্যারাবোলা নয়, কিন্তু বাজার যা ধরে রাখে তেমনও নয়।

বার ৫০-এ ৬২.০০ ক্লোজ **রিটার্ন লাইনের ওপরে** ($55.23 + 4.35 = 59.58$)। এটি একটি ওভারথ্রো — যে চ্যানেল পঞ্চাশ বার ট্রেন্ড ধরে রেখেছিল তা অতিক্রান্ত হলো। একা এটি বিক্রয় সংকেত নয়। লগে একটি নোট।

**বার ৫২।** ক্লোজ ৬০.২০। ত্বরান্বিত লাইন পড়ে $52.95 + 0.70 \\times 12 = 61.35$। দাম তার ১.১৫ নিচে, অর্থাৎ **১.০৫ ATR** — ত্বরান্বিত লাইন ভেঙেছে। বার ৫২-এ প্রাথমিক লাইন কেবল ৫৫.৭৫-এ, এখনো দামের অনেক নিচে। **এটিই সতর্কবার্তা: মন্দগতি, উল্টে যাওয়া নয়।**

**বার ৫৯।** ক্লোজ ৫৬.৫০। প্রাথমিক লাইন পড়ে $42.10 + 0.2625 \\times 59 = 57.59$। ভাঙার সীমা $57.59 - 0.55 = 57.04$। দাম তার নিচে ক্লোজ করে। **প্রাথমিক লাইন ভেঙেছে।**

### প্রলোভনের মুহূর্ত

৫৪-এর কাছাকাছি কেনা পজিশন নিয়ে বার ৫৯-এ বেশিরভাগ মানুষের মাথায় যা চলে:

*বার ২৪-এর অ্যাংকর পুরোনো হয়ে গেছে। বার ৪০-এ ট্রেন্ড স্পষ্টতই ত্বরান্বিত হয়েছিল। প্রাথমিক ঢাল দিয়ে (40, 52.95) থেকে নতুন অ্যাংকর করলে বার ৫৯-এ লাইন ৫৭.৯৪ — না দাঁড়ান, ওটা আরও খারাপ। ক্লোজের বদলে উইক লো ব্যবহার করলে? বার ০-এর উইক ৪১.৪০, বার ২৪-এর উইক ৪৮.১০। তাতে ঢাল ০.২৭৯২ আর লাইন ৫৮.৮৭ — আবারও খারাপ। বার ০ ও বার ৪০-কে অ্যাংকর করলে? ঢাল ০.২৭১৩, লাইন ৫৮.১০। এটিও খারাপ।*

**একটি গুরুত্বপূর্ণ জিনিস লক্ষ করুন: পুনরাঙ্কনগুলো সাহায্য করছে না।** এটি ভাগ্য নয়। ট্রেন্ড যখন সত্যিই শেষ হয়, *অধিকাংশ* নতুন অ্যাংকরও ভাঙে, কারণ দাম কোনো একটি নির্দিষ্ট লাইন নয়, পুরো কাঠামো থেকেই সরে গেছে।

**কিন্তু খোঁজাটাই রোগ।** যদি দাম ৫৭.২০-তে ক্লোজ করত — লাইনের ভুল পাশে এক পয়সা — তবে ঐ চারটি বিকল্পের একটি একে "বাঁচাত", আর পজিশনটি ধরে রাখা হতো ঘটনার পরে বানানো একটি লাইনের কর্তৃত্বে। পূর্ব-অঙ্গীকারের নিয়ম আছে যাতে এই খোঁজা কখনো শুরুই না হয়।

### বস্তুনিষ্ঠ পাল্টা-যাচাই

বার ৫০ থেকে ৬০ পর্যন্ত এগারোটি ক্লোজে রিগ্রেশন, $x = 0 \\ldots 10$ হিসেবে পুনঃসূচিত:

| x | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| ক্লোজ | ৬২.০০ | ৬১.৮০ | ৬০.২০ | ৬০.৪০ | ৫৯.৫০ | ৫৯.৭০ | ৫৭.৬০ | ৫৮.০০ | ৫৭.০০ | ৫৬.৫০ | ৫৬.৩০ |

ঢাল **−০.৬০ BDT/বার**, ইন্টারসেপ্ট **৬২.০০**, স্ট্যান্ডার্ড এরর **০.৪৫৭০**। $x=10$-এ ফিটেড মান ৫৬.০০; ৫৬.৩০ ক্লোজ দেয় **+০.৬৬** z-score — চ্যানেলের বেশ ভেতরে, কোনো দিকেই টান নেই।

**দুটো একসঙ্গে পড়ুন, উপসংহার কাছাকাছিও নয়।** হাতে আঁকা লাইন ভেঙেছে এবং সাম্প্রতিকতম এগারো বারে রিগ্রেশনের ঢাল ঋণাত্মক। উচ্চতর নিম্ন তৈরি হওয়া থেমেছে। সংজ্ঞা আর পূরণ হচ্ছে না। **আপট্রেন্ড শেষ — দুর্বল হচ্ছে না, শেষ — আর চার্টে তর্ক করার মতো কিছু নেই।**

### খরচটা কত হলো

যিনি বার ৪৩-এর কাছে ৫৪-এ কিনে বার ৫৯-এর ৫৬.৫০ ক্লোজে বেরিয়েছেন তিনি ৪.৬% পেয়েছেন। যিনি তিনবার লাইন নতুন করে এঁকে "শেষমেশ সত্যিই ভাঙার পর" ধরুন ৫১.৮০-তে বেরিয়েছেন তিনি ৪.১% হারিয়েছেন — একই চার্টে, একই শেয়ারে, একই এন্ট্রিতে। **দুজনের পার্থক্য পঁয়ত্রিশ বার আগে লেখা একটি টেক্সট ফাইল।**`,
    },
  },
};
