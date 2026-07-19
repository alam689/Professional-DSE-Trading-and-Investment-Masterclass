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

*The bar-24 anchor is stale. The trend clearly accelerated at bar 40. If I re-anchor from (40, 52.95) using the primary slope, the line at bar 59 is 57.94 — no wait, that's worse. What if I use the wick lows instead of closes? The bar-0 wick was 41.40, the bar-24 wick was 48.10. That gives a slope of 0.2792 and a line at 57.87 — still above price. What if I use bar 0 and bar 40 as the anchors? Slope 0.2713, line at 58.10. Also worse.*

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

*বার ২৪-এর অ্যাংকর পুরোনো হয়ে গেছে। বার ৪০-এ ট্রেন্ড স্পষ্টতই ত্বরান্বিত হয়েছিল। প্রাথমিক ঢাল দিয়ে (40, 52.95) থেকে নতুন অ্যাংকর করলে বার ৫৯-এ লাইন ৫৭.৯৪ — না দাঁড়ান, ওটা আরও খারাপ। ক্লোজের বদলে উইক লো ব্যবহার করলে? বার ০-এর উইক ৪১.৪০, বার ২৪-এর উইক ৪৮.১০। তাতে ঢাল ০.২৭৯২ আর লাইন ৫৭.৮৭ — এখনো দামের ওপরে। বার ০ ও বার ৪০-কে অ্যাংকর করলে? ঢাল ০.২৭১৩, লাইন ৫৮.১০। এটিও খারাপ।*

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

    formula: {
      en: `### 1. The trend as a predicate, not an adjective

$$\\text{Uptrend}(t) \\;=\\; \\big[H_k > H_{k-1}\\big] \\;\\wedge\\; \\big[L_k > L_{k-1}\\big]$$

over consecutive swing pairs. **The conjunction is the whole content of the definition.** Drop either term and you have a statement that is almost always true of something and therefore informative about nothing. Higher highs alone describe a range with a rising ceiling; higher lows alone describe compression. Only the pair describes a trend, and only the pair can be falsified by a single print.

The practical form is the negation, because that is what you act on:

$$\\text{Trend ends at the first } k \\text{ such that } L_k \\le L_{k-1}$$

**This is a classification rule, not a trading rule.** It tells you what the series is; your stop tells you what to do about it. Conflating the two is how people end up arguing that a broken trend is still a trend because they have not sold yet.

### 2. The two-point line, and why the x-axis is bar index

Given anchors $(t_1, P_1)$ and $(t_2, P_2)$:

$$m = \\frac{P_2 - P_1}{t_2 - t_1}, \\qquad b = P_1 - m\\,t_1, \\qquad \\hat{L}(t) = b + m\\,t$$

**Use bar index, not calendar date.** The DSE trades roughly five days a week and closes for a long list of public holidays and both Eids. If you regress against calendar dates, a nine-day Eid gap injects nine units of x against zero units of price action, and the line drifts below the series for no reason that has anything to do with supply and demand. Bar index counts only sessions in which the market had an opinion.

In the worked case anchor 1 sits at $t=0$, which is a convenience worth engineering deliberately: re-index your window so the first anchor is bar zero and the intercept becomes the anchor price itself.

$$m = \\frac{48.40 - 42.10}{24 - 0} = 0.2625, \\qquad b = 42.10 - 0.2625 \\times 0 = 42.10$$

A scale-relative version of the slope is also worth keeping:

$$m_{\\%} = \\frac{m}{P_1} \\times 100 = \\frac{0.2625}{42.10} \\times 100 = 0.6235\\%\\ \\text{per bar}$$

**This is the number to compare across price levels; it is not the number to compare across volatilities.** A 0.62%-per-bar demand is trivial for a counter that swings 3% a day and brutal for one that swings 0.4%. That is what §4 fixes.

### 3. Validation — the third touch, with a tolerance

$$d_3 = P_3 - \\hat{L}(t_3), \\qquad \\delta_3 = \\frac{d_3}{ATR}, \\qquad \\text{Validated} \\iff |\\delta_3| \\le 0.5$$

Two decisions are embedded here and both matter.

**First, the deviation is signed but the test is on the absolute value.** A third touch 0.4 ATR *above* the line is as much a validation as one 0.4 ATR below — in both cases price arrived at the line's neighbourhood and turned. Testing only the negative side would reject every touch that respected the line early.

**Second, the tolerance is in ATR and not in taka.** A 0.35 taka miss is a rounding error on a stock with ATR 1.10 and a catastrophe on one with ATR 0.12. Expressed in ATR:

$$\\delta_3 = \\frac{52.95 - 52.60}{1.10} = \\frac{0.35}{1.10} = 0.3182$$

Comfortably inside tolerance. **Before this test the line is arithmetic; after it, the line is evidence.** Any two points define a line, including two produced by noise, so the third touch is doing the entire epistemic job.

### 4. Normalised slope — killing the 45-degree rule

$$\\sigma = \\frac{m}{ATR}$$

$$\\text{Verdict} = \\begin{cases} \\text{PARABOLIC — blow-off risk} & \\sigma > 1.0 \\\\ \\text{STEEP — not sustainable} & 0.5 < \\sigma \\le 1.0 \\\\ \\text{SUSTAINABLE} & \\sigma \\le 0.5 \\end{cases}$$

**The denominator is doing something specific: it converts "taka per bar" into "typical daily ranges per bar."** That reframes the slope as a demand made of the market. A line at $\\sigma = 0.24$ asks the market to deliver a quarter of one day's range, every day, in one direction. A line at $\\sigma = 1.2$ asks for a full day's range plus twenty percent, every day, net of all the days it goes the wrong way. **Markets supply the first for months and the second for weeks.**

$$\\sigma = \\frac{0.2625}{1.10} = 0.2386 \\;\\Rightarrow\\; \\text{SUSTAINABLE}$$

The 45-degree rule is trying to say this and cannot, because degrees are a property of your monitor. **Two analysts looking at the same series on a phone and on a widescreen get different angles and the same $\\sigma$.** That is the entire argument for the substitution.

### 5. The break test, with the buffer that makes it a test

$$\\Delta(t) = C_t - \\hat{L}(t), \\qquad \\beta = \\frac{\\Delta}{ATR}, \\qquad \\text{Broken} \\iff \\beta < -\\beta_0$$

with $\\beta_0 = 0.5$ as the working buffer.

**The buffer is not timidity, it is a statement about measurement error.** The line's position at bar 60 inherits the error in both anchors amplified by the extrapolation distance. A hand-placed anchor is good to perhaps a few paisa; projected 36 bars forward at a slope you also estimated, the uncertainty on $\\hat{L}(60)$ is easily a fifth of an ATR. **A test with no tolerance is a test that fires on its own noise.**

$$\\hat{L}(60) = 42.10 + 0.2625 \\times 60 = 57.85$$
$$\\Delta = 56.30 - 57.85 = -1.55, \\qquad \\beta = \\frac{-1.55}{1.10} = -1.4091 \\;<\\; -0.5$$

**BROKEN**, and not marginally — the close is nearly one and a half ATR below the line, which is almost three times the buffer. This is the case where the buffer changes nothing, and that is exactly when you want to have set it in advance: a buffer chosen after seeing the price is not a buffer, it is a rationalisation with a Greek letter.

### 6. The parallel channel — offset, width, position

Take the extreme close on the opposite side, $(t_r, P_r)$, and offset the *same* slope:

$$c = P_r - \\hat{L}(t_r), \\qquad \\hat{R}(t) = \\hat{L}(t) + c$$

$$W = \\frac{c}{ATR}, \\qquad \\rho(t) = \\frac{C_t - \\hat{L}(t)}{c}$$

**Never fit the return line independently.** Two separately-fitted lines are not parallel, and a non-parallel "channel" has a width that changes for reasons you did not measure — you have drawn a shape and then read meaning out of your own drawing. Copying the slope guarantees that every change in $\\rho$ is a change in price and nothing else.

$$c = 49.60 - (42.10 + 0.2625 \\times 12) = 49.60 - 45.25 = 4.35$$
$$W = \\frac{4.35}{1.10} = 3.9545\\ ATR, \\qquad \\hat{R}(60) = 57.85 + 4.35 = 62.20$$

**The width test comes before any trade inside the channel.** Below roughly 3 ATR the channel is narrower than the round-trip cost of noise: your entry at $\\rho = 0.1$ and your exit at $\\rho = 0.9$ are separated by less than three average daily ranges, and slippage plus the DSE's commission and 0.05% turnover levy eat the difference. **At 3.95 ATR this channel is tradeable — just.**

The position measure is the one that changes behaviour:

$$\\rho(60) = \\frac{56.30 - 57.85}{4.35} = -0.3563$$

**Negative $\\rho$ means price is outside the channel on the trendline side, which is the same fact as the break — expressed as a location rather than as a verdict.** Two constructions agreeing is worth more than either alone.

### 7. Wedges as channels with a convergence date

A wedge has two slopes, $m_L$ and $m_U$, and a width that is a function of time:

$$c(t) = \\big(b_U - b_L\\big) + \\big(m_U - m_L\\big)t$$

$$t^{*} = \\frac{b_L - b_U}{m_U - m_L}$$

$t^{*}$ is the apex — the bar at which the two lines meet and the structure must resolve. **Compute it, because it converts a shape into a deadline.** A rising wedge ($m_L > m_U > 0$) has $c'(t) < 0$: the higher lows are arriving faster than the higher highs, demand is working harder for less, and the expected resolution is *down* — against the slope of both lines.

**This is the only structure in the chapter whose expected resolution runs opposite to its own direction**, which is why wedges are misread more often than any other trendline construction. A trader who has internalised "the trend is your friend" sees two up-sloping lines and buys.

Two cautions specific to us. **Resolve wedges well before $t^{*}$** — price rarely reaches the apex, and a structure traded in its last few bars has no room left for a stop. And **a DSE wedge that narrows into a circuit-limit day is not a wedge**, because the constrained close is not where supply met demand; it is where the exchange stopped the argument.

### 8. The regression channel — the line nobody can move

Ordinary least squares over the last $n$ closes, re-indexed $x = 0 \\ldots n-1$:

$$\\hat{m} = \\frac{\\sum (x_i - \\bar{x})(y_i - \\bar{y})}{\\sum (x_i - \\bar{x})^2}, \\qquad \\hat{b} = \\bar{y} - \\hat{m}\\bar{x}$$

$$s_e = \\sqrt{\\frac{\\sum \\big(y_i - \\hat{y}_i\\big)^2}{n - 2}}, \\qquad \\text{bands} = \\hat{y}(x) \\pm 2 s_e, \\qquad z = \\frac{y_{\\text{last}} - \\hat{y}_{\\text{last}}}{s_e}$$

**Note the $n-2$ in the denominator, not $n$.** Two degrees of freedom were spent estimating the slope and the intercept, and dividing by $n$ instead flatters the fit — it reports a tighter channel than the data supports and therefore produces more "stretched" readings than it should. On eleven bars the difference is $\\sqrt{11/9} = 1.106$, an eleven percent understatement of the band width. **Small, systematic, and always in the direction of overtrading.**

Every input is mechanical. **The only discretionary choice is $n$, and you fix it in advance and apply it to every chart** — which is precisely the discipline a hand-drawn line cannot enforce, because the hand-drawn line's anchors are chosen after you have seen where they need to be.

On bars 50–60:

$$\\hat{m} = \\frac{-66.0}{110} = -0.60, \\qquad \\hat{b} = 59.00 - (-0.60)(5) = 62.00$$
$$s_e = \\sqrt{\\frac{1.88}{9}} = 0.4570, \\qquad \\hat{y}(10) = 56.00, \\qquad z = \\frac{56.30 - 56.00}{0.4570} = 0.6564$$

**A $z$ of 0.66 says the last close is unremarkable *within* a falling channel.** Read that carefully: the channel is not the trend. Price sitting mid-channel tells you there is no mean-reversion edge; the slope tells you which way the channel is going. **Confusing "inside the channel" with "healthy" is the single most common misreading of a regression channel.**

### 9. Reconciliation — the two constructions voting

$$\\text{Verdict} = \\begin{cases} \\text{Trend over} & \\text{Broken} \\;\\wedge\\; \\hat{m} < 0 \\\\ \\text{Wait one bar} & \\text{Broken} \\;\\wedge\\; \\hat{m} \\ge 0 \\\\ \\text{Do not redraw} & \\neg\\,\\text{Broken} \\end{cases}$$

**The third branch is the important one and it is phrased as an instruction rather than a description on purpose.** An intact line requires no action, and the failure mode this chapter exists to prevent is action taken on an intact line — specifically, the pre-emptive redraw that "improves" the fit while price is still above it. The sheet's job at that moment is to say nothing except *leave it alone*.

The first branch requires both conditions because they fail differently. A hand-drawn line can break on a single news candle that the regression, using all eleven closes, correctly treats as one observation. A regression slope can turn negative on a lookback that happens to start at a spike while the multi-month structure is untouched. **Requiring agreement costs you a bar of lateness and buys you most of the false positives.**`,
      bn: `### ১. ট্রেন্ড একটি প্রেডিকেট, বিশেষণ নয়

$$\\text{আপট্রেন্ড}(t) \\;=\\; \\big[H_k > H_{k-1}\\big] \\;\\wedge\\; \\big[L_k > L_{k-1}\\big]$$

পরপর সুইং জোড়ার ওপরে। **সংযোজকটিই সংজ্ঞার সমগ্র বিষয়বস্তু।** যেকোনো একটি পদ বাদ দিন আর আপনার হাতে থাকবে এমন একটি বিবৃতি যা প্রায় সবসময়ই কোনো-না-কোনো কিছুর জন্য সত্য এবং তাই কোনো কিছু সম্পর্কেই তথ্যপূর্ণ নয়। কেবল উচ্চতর উচ্চ বর্ণনা করে ওঠা ছাদসহ একটি রেঞ্জ; কেবল উচ্চতর নিম্ন বর্ণনা করে সংকোচন। কেবল জোড়াটিই ট্রেন্ড বর্ণনা করে, আর কেবল জোড়াটিই একটিমাত্র প্রিন্টে মিথ্যা প্রমাণিত হতে পারে।

ব্যবহারিক রূপ হলো নেতিকরণ, কারণ আপনি তাতেই কাজ করেন:

$$\\text{প্রথম } k \\text{-তে ট্রেন্ড শেষ যেখানে } L_k \\le L_{k-1}$$

**এটি একটি শ্রেণিবিন্যাসের নিয়ম, ট্রেডিংয়ের নিয়ম নয়।** এটি বলে সিরিজটি কী; আপনার স্টপ বলে তা নিয়ে কী করতে হবে। দুটিকে গুলিয়ে ফেলাই সেই পথ যেখানে মানুষ যুক্তি দেন একটি ভাঙা ট্রেন্ড এখনো ট্রেন্ড কারণ তাঁরা এখনো বিক্রি করেননি।

### ২. দুই-বিন্দুর লাইন, আর x-অক্ষ কেন বার সূচক

অ্যাংকর $(t_1, P_1)$ ও $(t_2, P_2)$ দিলে:

$$m = \\frac{P_2 - P_1}{t_2 - t_1}, \\qquad b = P_1 - m\\,t_1, \\qquad \\hat{L}(t) = b + m\\,t$$

**বার সূচক ব্যবহার করুন, পঞ্জিকার তারিখ নয়।** ডিএসই সপ্তাহে মোটামুটি পাঁচ দিন লেনদেন করে এবং সরকারি ছুটির লম্বা তালিকা ও দুই ঈদে বন্ধ থাকে। পঞ্জিকার তারিখের বিপরীতে রিগ্রেশন করলে নয় দিনের ঈদের ফাঁক শূন্য একক মূল্য-আচরণের বিপরীতে নয় একক x ঢুকিয়ে দেয়, আর লাইনটি সিরিজের নিচে সরে যায় এমন কারণে যার সঙ্গে চাহিদা-সরবরাহের কোনো সম্পর্ক নেই। বার সূচক কেবল সেই সেশনগুলোই গোনে যেখানে বাজারের একটি মত ছিল।

উদাহরণে অ্যাংকর ১ বসে $t=0$-তে, আর এটি ইচ্ছাকৃতভাবে সাজানোর মতো একটি সুবিধা: আপনার জানালাটি পুনঃসূচিত করুন যাতে প্রথম অ্যাংকর বার শূন্য হয় ও ইন্টারসেপ্ট অ্যাংকরের দামই হয়ে যায়।

$$m = \\frac{48.40 - 42.10}{24 - 0} = 0.2625, \\qquad b = 42.10 - 0.2625 \\times 0 = 42.10$$

ঢালের একটি স্কেল-সাপেক্ষ সংস্করণও রাখার মতো:

$$m_{\\%} = \\frac{m}{P_1} \\times 100 = \\frac{0.2625}{42.10} \\times 100 = 0.6235\\%\\ \\text{প্রতি বার}$$

**এটি বিভিন্ন মূল্যস্তরে তুলনা করার সংখ্যা; বিভিন্ন ভোলাটিলিটিতে তুলনা করার সংখ্যা নয়।** যে কাউন্টার দিনে ৩% দোলে তার জন্য প্রতি বারে ০.৬২% দাবি তুচ্ছ, আর যেটি ০.৪% দোলে তার জন্য নিষ্ঠুর। §৪ সেটিই ঠিক করে।

### ৩. বৈধতা — তৃতীয় স্পর্শ, একটি সহনশীলতাসহ

$$d_3 = P_3 - \\hat{L}(t_3), \\qquad \\delta_3 = \\frac{d_3}{ATR}, \\qquad \\text{বৈধ} \\iff |\\delta_3| \\le 0.5$$

এখানে দুটি সিদ্ধান্ত নিহিত আর দুটিই গুরুত্বপূর্ণ।

**প্রথমত, বিচ্যুতি চিহ্নযুক্ত কিন্তু পরীক্ষা পরম মানের ওপর।** লাইনের ০.৪ ATR *ওপরে* একটি তৃতীয় স্পর্শ ০.৪ ATR নিচের স্পর্শের মতোই বৈধতা — দুই ক্ষেত্রেই দাম লাইনের প্রতিবেশে এসে ঘুরেছে। কেবল ঋণাত্মক দিকটি পরীক্ষা করলে যে প্রতিটি স্পর্শ লাইনকে আগেভাগে সম্মান করেছে তাকেই বাতিল করা হতো।

**দ্বিতীয়ত, সহনশীলতা ATR-এ, টাকায় নয়।** ১.১০ ATR-এর শেয়ারে ০.৩৫ টাকার ফাঁক একটি রাউন্ডিং ত্রুটি আর ০.১২ ATR-এর শেয়ারে একটি বিপর্যয়। ATR-এ প্রকাশ করলে:

$$\\delta_3 = \\frac{52.95 - 52.60}{1.10} = \\frac{0.35}{1.10} = 0.3182$$

সহনশীলতার স্বচ্ছন্দে ভেতরে। **এই পরীক্ষার আগে লাইনটি পাটিগণিত; পরে লাইনটি প্রমাণ।** যেকোনো দুটি বিন্দুই একটি লাইন নির্ধারণ করে, গোলমাল থেকে তৈরি দুটিও, তাই তৃতীয় স্পর্শই পুরো জ্ঞানতাত্ত্বিক কাজটি করছে।

### ৪. স্বাভাবিকীকৃত ঢাল — ৪৫-ডিগ্রির নিয়মকে হত্যা

$$\\sigma = \\frac{m}{ATR}$$

$$\\text{রায়} = \\begin{cases} \\text{PARABOLIC — ব্লো-অফ ঝুঁকি} & \\sigma > 1.0 \\\\ \\text{STEEP — টেকসই নয়} & 0.5 < \\sigma \\le 1.0 \\\\ \\text{SUSTAINABLE} & \\sigma \\le 0.5 \\end{cases}$$

**হরটি একটি নির্দিষ্ট কাজ করছে: এটি "প্রতি বারে টাকা"-কে "প্রতি বারে সাধারণ দৈনিক পরিসর"-এ রূপান্তর করে।** এতে ঢাল বাজারের কাছে করা একটি দাবি হিসেবে পুনর্গঠিত হয়। $\\sigma = 0.24$-এর একটি লাইন বাজারকে বলে প্রতিদিন এক দিনের পরিসরের সিকি অংশ, এক দিকে, দিতে। $\\sigma = 1.2$-এর লাইন চায় প্রতিদিন একটি পূর্ণ দিনের পরিসর যোগ বিশ শতাংশ, যেসব দিন উল্টো দিকে যায় সেগুলো বাদ দিয়েও। **বাজার প্রথমটি মাসের পর মাস দেয়, দ্বিতীয়টি কয়েক সপ্তাহ।**

$$\\sigma = \\frac{0.2625}{1.10} = 0.2386 \\;\\Rightarrow\\; \\text{SUSTAINABLE}$$

৪৫-ডিগ্রির নিয়ম এটিই বলার চেষ্টা করে এবং পারে না, কারণ ডিগ্রি আপনার মনিটরের একটি ধর্ম। **একই সিরিজ ফোনে ও ওয়াইডস্ক্রিনে দেখা দুজন বিশ্লেষক ভিন্ন কোণ পান এবং একই $\\sigma$ পান।** প্রতিস্থাপনের পুরো যুক্তি এটিই।

### ৫. ভাঙার পরীক্ষা, আর যে বাফার একে পরীক্ষা বানায়

$$\\Delta(t) = C_t - \\hat{L}(t), \\qquad \\beta = \\frac{\\Delta}{ATR}, \\qquad \\text{ভাঙা} \\iff \\beta < -\\beta_0$$

কার্যকর বাফার হিসেবে $\\beta_0 = 0.5$।

**বাফারটি ভীরুতা নয়, এটি পরিমাপ-ত্রুটি সম্পর্কে একটি বিবৃতি।** বার ৬০-এ লাইনের অবস্থান দুটি অ্যাংকরেরই ত্রুটি উত্তরাধিকার সূত্রে পায়, আর প্রক্ষেপণের দূরত্ব তা বাড়িয়ে দেয়। হাতে বসানো অ্যাংকর হয়তো কয়েক পয়সা পর্যন্ত নির্ভুল; আপনি নিজেই আন্দাজ করা একটি ঢালে ৩৬ বার সামনে প্রক্ষিপ্ত করলে $\\hat{L}(60)$-এর অনিশ্চয়তা সহজেই এক ATR-এর পঞ্চমাংশ। **সহনশীলতাহীন পরীক্ষা নিজের গোলমালেই বেজে ওঠে।**

$$\\hat{L}(60) = 42.10 + 0.2625 \\times 60 = 57.85$$
$$\\Delta = 56.30 - 57.85 = -1.55, \\qquad \\beta = \\frac{-1.55}{1.10} = -1.4091 \\;<\\; -0.5$$

**BROKEN**, আর সামান্য ব্যবধানে নয় — ক্লোজটি লাইনের প্রায় দেড় ATR নিচে, যা বাফারের প্রায় তিন গুণ। এটি সেই ক্ষেত্র যেখানে বাফার কিছুই বদলায় না, আর ঠিক তখনই আপনি চান যে এটি আগে থেকেই ঠিক করা থাকুক: দাম দেখার পরে বেছে নেওয়া বাফার কোনো বাফার নয়, তা গ্রিক অক্ষরসহ একটি অজুহাত।

### ৬. সমান্তরাল চ্যানেল — অফসেট, প্রস্থ, অবস্থান

বিপরীত পাশের চরম ক্লোজ $(t_r, P_r)$ নিন এবং *একই* ঢাল সরান:

$$c = P_r - \\hat{L}(t_r), \\qquad \\hat{R}(t) = \\hat{L}(t) + c$$

$$W = \\frac{c}{ATR}, \\qquad \\rho(t) = \\frac{C_t - \\hat{L}(t)}{c}$$

**কখনো রিটার্ন লাইন আলাদাভাবে ফিট করবেন না।** আলাদাভাবে ফিট করা দুটি লাইন সমান্তরাল নয়, আর অ-সমান্তরাল "চ্যানেল"-এর প্রস্থ এমন কারণে বদলায় যা আপনি মাপেননি — আপনি একটি আকৃতি এঁকেছেন এবং তারপর নিজের আঁকা থেকে অর্থ পড়ছেন। ঢাল কপি করলে নিশ্চিত হয় যে $\\rho$-এর প্রতিটি পরিবর্তন দামের পরিবর্তন, আর কিছু নয়।

$$c = 49.60 - (42.10 + 0.2625 \\times 12) = 49.60 - 45.25 = 4.35$$
$$W = \\frac{4.35}{1.10} = 3.9545\\ ATR, \\qquad \\hat{R}(60) = 57.85 + 4.35 = 62.20$$

**চ্যানেলের ভেতরে যেকোনো ট্রেডের আগে প্রস্থের পরীক্ষা আসে।** মোটামুটি ৩ ATR-এর নিচে চ্যানেলটি গোলমালের যাওয়া-আসার খরচের চেয়েও সরু: $\\rho = 0.1$-এ আপনার প্রবেশ ও $\\rho = 0.9$-এ প্রস্থান তিনটি গড় দৈনিক পরিসরেরও কম দূরে, আর স্লিপেজ যোগ ডিএসই-র কমিশন ও ০.০৫% টার্নওভার লেভি পার্থক্যটুকু খেয়ে ফেলে। **৩.৯৫ ATR-এ এই চ্যানেল ট্রেডযোগ্য — কোনোমতে।**

অবস্থানের পরিমাপটিই আচরণ বদলায়:

$$\\rho(60) = \\frac{56.30 - 57.85}{4.35} = -0.3563$$

**ঋণাত্মক $\\rho$ মানে দাম ট্রেন্ডলাইনের পাশে চ্যানেলের বাইরে, যা ভাঙারই একই তথ্য — রায় নয়, অবস্থান হিসেবে প্রকাশিত।** দুটি নির্মাণের একমত হওয়া যেকোনো একটির চেয়ে বেশি মূল্যবান।

### ৭. ওয়েজ — একটি অভিসারী তারিখসহ চ্যানেল

ওয়েজের দুটি ঢাল, $m_L$ ও $m_U$, আর প্রস্থ সময়ের একটি ফাংশন:

$$c(t) = \\big(b_U - b_L\\big) + \\big(m_U - m_L\\big)t$$

$$t^{*} = \\frac{b_L - b_U}{m_U - m_L}$$

$t^{*}$ হলো শীর্ষবিন্দু — যে বারে দুটি লাইন মেলে ও কাঠামোটিকে নিষ্পত্তি হতেই হয়। **এটি গণনা করুন, কারণ এটি একটি আকৃতিকে একটি সময়সীমায় রূপান্তর করে।** রাইজিং ওয়েজে ($m_L > m_U > 0$) $c'(t) < 0$: উচ্চতর উচ্চের চেয়ে উচ্চতর নিম্ন দ্রুত আসছে, চাহিদা কম ফলের জন্য বেশি খাটছে, আর প্রত্যাশিত নিষ্পত্তি *নিচের* দিকে — দুটি লাইনেরই ঢালের বিপরীতে।

**এই অধ্যায়ে এটিই একমাত্র কাঠামো যার প্রত্যাশিত নিষ্পত্তি নিজের দিকের বিপরীতে চলে**, আর সেজন্যই অন্য যেকোনো ট্রেন্ডলাইন নির্মাণের চেয়ে ওয়েজ বেশি ভুল পড়া হয়। যিনি "ট্রেন্ডই বন্ধু" আত্মস্থ করেছেন তিনি দুটি ঊর্ধ্বমুখী লাইন দেখে কেনেন।

আমাদের জন্য দুটি বিশেষ সতর্কতা। **ওয়েজ $t^{*}$-এর অনেক আগেই নিষ্পত্তি করুন** — দাম কদাচিৎ শীর্ষবিন্দুতে পৌঁছায়, আর শেষ কয়েক বারে ট্রেড করা কাঠামোয় স্টপের জায়গা থাকে না। আর **যে ডিএসই ওয়েজ একটি সার্কিট-সীমার দিনে সংকুচিত হয় তা ওয়েজ নয়**, কারণ সীমাবদ্ধ ক্লোজটি সেই জায়গা নয় যেখানে চাহিদা সরবরাহের সঙ্গে মিলেছে; সেটি সেই জায়গা যেখানে এক্সচেঞ্জ তর্কটি থামিয়ে দিয়েছে।

### ৮. রিগ্রেশন চ্যানেল — যে লাইন কেউ নাড়াতে পারে না

শেষ $n$ ক্লোজে সাধারণ ন্যূনতম বর্গ, $x = 0 \\ldots n-1$ হিসেবে পুনঃসূচিত:

$$\\hat{m} = \\frac{\\sum (x_i - \\bar{x})(y_i - \\bar{y})}{\\sum (x_i - \\bar{x})^2}, \\qquad \\hat{b} = \\bar{y} - \\hat{m}\\bar{x}$$

$$s_e = \\sqrt{\\frac{\\sum \\big(y_i - \\hat{y}_i\\big)^2}{n - 2}}, \\qquad \\text{ব্যান্ড} = \\hat{y}(x) \\pm 2 s_e, \\qquad z = \\frac{y_{\\text{শেষ}} - \\hat{y}_{\\text{শেষ}}}{s_e}$$

**লক্ষ করুন হরে $n-2$, $n$ নয়।** ঢাল ও ইন্টারসেপ্ট আন্দাজ করতে দুটি স্বাধীনতার মাত্রা খরচ হয়েছে, আর $n$ দিয়ে ভাগ করলে ফিটটিকে বাড়িয়ে দেখানো হয় — এটি ডেটা যা সমর্থন করে তার চেয়ে সরু চ্যানেল জানায় ও তাই প্রয়োজনের চেয়ে বেশি "টানটান" পাঠ তৈরি করে। এগারো বারে পার্থক্য $\\sqrt{11/9} = 1.106$, অর্থাৎ ব্যান্ড প্রস্থের এগারো শতাংশ কম বলা। **ছোট, নিয়মতান্ত্রিক, আর সবসময়ই অতিরিক্ত ট্রেডিংয়ের দিকে।**

প্রতিটি উপাদান যান্ত্রিক। **একমাত্র বিবেচনাধীন পছন্দ $n$, আর সেটি আপনি আগেই ঠিক করে প্রতিটি চার্টে প্রয়োগ করেন** — যা ঠিক সেই শৃঙ্খলা যা হাতে আঁকা লাইন প্রয়োগ করতে পারে না, কারণ হাতে আঁকা লাইনের অ্যাংকর বাছা হয় সেগুলো কোথায় দরকার তা দেখার পরে।

বার ৫০–৬০-এ:

$$\\hat{m} = \\frac{-66.0}{110} = -0.60, \\qquad \\hat{b} = 59.00 - (-0.60)(5) = 62.00$$
$$s_e = \\sqrt{\\frac{1.88}{9}} = 0.4570, \\qquad \\hat{y}(10) = 56.00, \\qquad z = \\frac{56.30 - 56.00}{0.4570} = 0.6564$$

**০.৬৬-এর একটি $z$ বলে শেষ ক্লোজটি একটি পতনশীল চ্যানেলের *ভেতরে* অসাধারণ কিছু নয়।** মন দিয়ে পড়ুন: চ্যানেলই ট্রেন্ড নয়। দাম চ্যানেলের মাঝখানে বসে থাকা বলে কোনো মিন-রিভার্শন প্রান্ত নেই; ঢাল বলে চ্যানেলটি কোন দিকে যাচ্ছে। **"চ্যানেলের ভেতরে"-কে "সুস্থ" ভাবাই রিগ্রেশন চ্যানেলের সবচেয়ে সাধারণ ভুল পাঠ।**

### ৯. মিলকরণ — দুটি নির্মাণের ভোট

$$\\text{রায} = \\begin{cases} \\text{ট্রেন্ড শেষ} & \\text{ভাঙা} \\;\\wedge\\; \\hat{m} < 0 \\\\ \\text{এক বার অপেক্ষা} & \\text{ভাঙা} \\;\\wedge\\; \\hat{m} \\ge 0 \\\\ \\text{নতুন করে আঁকবেন না} & \\neg\\,\\text{ভাঙা} \\end{cases}$$

**তৃতীয় শাখাটিই গুরুত্বপূর্ণ আর একে ইচ্ছাকৃতভাবেই বর্ণনা নয়, নির্দেশ হিসেবে লেখা হয়েছে।** অক্ষত লাইনে কোনো পদক্ষেপ দরকার নেই, আর এই অধ্যায় যে ব্যর্থতা ঠেকাতে আছে তা হলো অক্ষত লাইনে নেওয়া পদক্ষেপ — বিশেষত সেই আগাম পুনরাঙ্কন যা দাম এখনো ওপরে থাকতেই ফিটটি "উন্নত" করে। ঐ মুহূর্তে শিটের কাজ *ওটাকে ছেড়ে দিন* ছাড়া আর কিছুই না বলা।

প্রথম শাখা দুটি শর্তই দাবি করে কারণ তারা ভিন্নভাবে ব্যর্থ হয়। হাতে আঁকা লাইন একটিমাত্র সংবাদ-ক্যান্ডেলে ভাঙতে পারে যাকে রিগ্রেশন, এগারোটি ক্লোজ ব্যবহার করে, যথার্থভাবেই একটি পর্যবেক্ষণ হিসেবে গণ্য করে। রিগ্রেশনের ঢাল এমন একটি লুকব্যাকে ঋণাত্মক হতে পারে যা কাকতালীয়ভাবে একটি স্পাইক থেকে শুরু, অথচ বহু-মাসের কাঠামো অক্ষত। **একমত হওয়া দাবি করলে এক বার দেরি হয় আর অধিকাংশ ভুয়া ধনাত্মক এড়ানো যায়।**`,
    },

    manual: {
      en: `**Scenario.** ASIACERAM from §31.3. ATR(14) = 1.10 throughout. Closes only. Anchor 1 at bar 0 = 42.10, anchor 2 at bar 24 = 48.40, third touch at bar 40 = 52.95, opposite extreme at bar 12 = 49.60, today is bar 60 with a close of 56.30.

Every number below reconciles to a cell in the §31.6 sheet. **Compute them by hand once; after that the sheet is a calculator rather than an oracle.**

**Step 1 — Slope from the two anchors (B6).**
$$m = \\frac{B5 - B3}{B4 - B2} = \\frac{48.40 - 42.10}{24 - 0} = \\frac{6.30}{24} = 0.2625\\ \\text{BDT/bar}$$

**Step 2 — Intercept (B7).**
$$b = B3 - m \\times B2 = 42.10 - 0.2625 \\times 0 = 42.10$$

Anchor 1 sits at bar zero by construction, so the intercept *is* the anchor price. **Re-index every window this way** — it removes an entire class of arithmetic slip, and it makes the projected value legible at a glance.

**Step 3 — Slope as a percentage of the anchor (B8).**
$$m_{\\%} = \\frac{0.2625}{42.10} \\times 100 = 0.6235\\%\\ \\text{per bar}$$

Useful for comparing this trend against one on a 400-taka counter. **Useless for comparing it against a more volatile counter at the same price**, which is why it is not the diagnostic.

**Step 4 — Project the line to the third touch (B13).**
$$\\hat{L}(40) = 42.10 + 0.2625 \\times 40 = 42.10 + 10.50 = 52.60$$

**Step 5 — Deviation, in taka and then in ATR (B14, B16).**
$$d_3 = 52.95 - 52.60 = +0.35\\ \\text{BDT}$$
$$\\delta_3 = \\frac{0.35}{1.10} = 0.3182\\ ATR$$

**Step 6 — The validation verdict (B17).**
$$|0.3182| \\le 0.50 \\;\\Rightarrow\\; \\textbf{VALIDATED — three touches}$$

**This is the bar the line had to clear to become usable.** Before bar 40 you had two points and a hypothesis. After bar 40 you have evidence that other participants are transacting off the same construction. Note how narrow the margin of the *concept* is, though: had the third touch printed at 52.10, the deviation would be $-0.4545$ ATR — still validated, but only just, and a fourth data point would be worth waiting for.

**Step 7 — Normalised slope, the scale-free diagnostic (B20).**
$$\\sigma = \\frac{0.2625}{1.10} = 0.2386\\ ATR\\ \\text{per bar}$$

**Step 8 — Slope verdict (B21).**
$$0.2386 \\le 0.5 \\;\\Rightarrow\\; \\textbf{SUSTAINABLE}$$

The trend is asking the market for under a quarter of a typical day's range per session. **That is a demand a market can meet for months.** Now do the thing the 45-degree rule cannot: note that this same line, plotted on a phone with three months loaded, appears near-vertical, and on a widescreen with three years loaded appears nearly flat. **The number 0.2386 does not change on either device.**

**Step 9 — Project to today and measure the gap (B26, B27, B28).**
$$\\hat{L}(60) = 42.10 + 0.2625 \\times 60 = 42.10 + 15.75 = 57.85$$
$$\\Delta = 56.30 - 57.85 = -1.55\\ \\text{BDT}$$
$$\\beta = \\frac{-1.55}{1.10} = -1.4091\\ ATR$$

**Step 10 — Apply the break rule, buffer and all (B29, B30).**
$$\\beta = -1.4091 \\;<\\; -0.50 \\;\\Rightarrow\\; \\textbf{BROKEN}$$

**The close is 1.41 ATR below the line against a 0.50 ATR buffer — a break by nearly three times the tolerance.** This is the comfortable case. The uncomfortable case is a $\\beta$ of $-0.48$, and the reason you write the buffer down before the test is that $-0.48$ is exactly where the arguments start.

**Step 11 — Build the channel offset (B35).** The extreme close on the opposite side is 49.60 at bar 12.
$$\\hat{L}(12) = 42.10 + 0.2625 \\times 12 = 42.10 + 3.15 = 45.25$$
$$c = 49.60 - 45.25 = 4.35\\ \\text{BDT}$$

**Step 12 — Channel width, in ATR (B36).**
$$W = \\frac{4.35}{1.10} = 3.9545\\ ATR$$

**Just under four ATR — tradeable, and only just.** Below about 3 ATR the round trip from the lower edge to the upper edge does not clear costs on the DSE, and a trader working such a channel is paying commission and the 0.05% turnover levy for the privilege of being right about geometry.

**Step 13 — The return line today (B37).**
$$\\hat{R}(60) = 57.85 + 4.35 = 62.20$$

**Step 14 — Position in the channel (B38).**
$$\\rho = \\frac{56.30 - 57.85}{4.35} = \\frac{-1.55}{4.35} = -0.3563$$

**Read this next to Step 10 and notice they are the same fact in two languages.** $\\rho < 0$ means price has left the channel through the floor. The break test returns a verdict; $\\rho$ returns a location and a magnitude. **Having two independent constructions say the same thing is worth more than either saying it twice.**

**Step 15 — Regression slope over bars 50–60, computed by hand (B53).** Re-index $x = 0 \\ldots 10$; closes 62.00, 61.80, 60.20, 60.40, 59.50, 59.70, 57.60, 58.00, 57.00, 56.50, 56.30.

$$\\bar{x} = 5, \\qquad \\bar{y} = \\frac{649.00}{11} = 59.00$$
$$\\sum (x_i - \\bar{x})^2 = 2(25 + 16 + 9 + 4 + 1) = 110$$
$$\\sum (x_i - \\bar{x})(y_i - \\bar{y}) = -66.00$$
$$\\hat{m} = \\frac{-66.00}{110} = -0.60\\ \\text{BDT/bar}$$

**Step 16 — Regression intercept (B54).**
$$\\hat{b} = 59.00 - (-0.60 \\times 5) = 59.00 + 3.00 = 62.00$$

**Step 17 — Standard error, and mind the degrees of freedom (B55).** Residuals against $\\hat{y} = 62.00 - 0.60x$:

| $x$ | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Fitted | 62.00 | 61.40 | 60.80 | 60.20 | 59.60 | 59.00 | 58.40 | 57.80 | 57.20 | 56.60 | 56.00 |
| Residual | 0.00 | +0.40 | −0.60 | +0.20 | −0.10 | +0.70 | −0.80 | +0.20 | −0.20 | −0.10 | +0.30 |

$$\\sum e_i^2 = 1.88, \\qquad s_e = \\sqrt{\\frac{1.88}{11 - 2}} = \\sqrt{0.20889} = 0.4570$$

**Divide by 11 instead of 9 and you get 0.4133** — an 11% understatement of the band width that would push borderline closes outside the channel and manufacture signals. **The $n-2$ is not pedantry; it is the difference between a channel that reports what the data supports and one that flatters your fit.**

**Step 18 — Fitted value and bands at $x=10$ (B56, B57, B58).**
$$\\hat{y}(10) = 62.00 - 0.60 \\times 10 = 56.00$$
$$\\text{Upper} = 56.00 + 2(0.4570) = 56.9141, \\qquad \\text{Lower} = 56.00 - 2(0.4570) = 55.0859$$

**Step 19 — The z-score (B59, B60).**
$$z = \\frac{56.30 - 56.00}{0.4570} = \\frac{0.30}{0.4570} = 0.6564$$

**Step 20 — Regression verdict (B61).**
$$|0.6564| < 2 \\;\\Rightarrow\\; \\textbf{INSIDE CHANNEL — no edge}$$

**Here is where most readers make the error this chapter is built to stop.** "Inside the channel" feels reassuring. It is not a comment on health at all — it says only that price sits where price usually sits *relative to a channel that is falling at 0.60 taka a bar*. **The channel is descending at more than twice the rate the primary uptrend was ascending.** A comfortable position inside a falling channel is still a falling position.

**Step 21 — Reconcile the hand-drawn and the mechanical (B63).**
$$B30 = \\text{BROKEN} \\;\\wedge\\; B53 = -0.60 < 0$$
$$\\Rightarrow\\; \\textbf{Hand-drawn line broken AND regression slope negative — the trend is over}$$

**Two constructions with nothing in common except the data, and they agree.** The trendline is a discretionary object built from three points you selected; the regression uses all eleven closes and no judgement at all. When those two disagree you have a genuine question. When they agree there is nothing to discuss, and the ninety seconds you spent writing the anchors down at bar 24 has just paid for itself.

**Step 22 — Price the discipline, because "do not redraw" is otherwise just advice.**

| | Held the written line | Redrew three times |
|---|---|---|
| Entry (bar 43) | 54.00 | 54.00 |
| Exit trigger | bar 59 break, **56.50** | "finally really broke", 51.80 |
| Result | **+4.63%** | **−4.07%** |
| Difference | | **8.70 percentage points** |

**Same chart, same stock, same entry, same information available at every moment.** The entire gap is produced by a text file written thirty-five bars earlier containing four lines: two anchors, the convention, the projected value at bar 60, and the break rule. **That file is the deliverable of this chapter; everything else is the argument for writing it.**

**Step 23 — State the DSE caveats the sheet cannot see.**

The sheet will happily compute a slope across a nine-day Eid closure, across an ex-dividend gap, and across a floor-price stretch where the counter printed the same number for six weeks. **None of those bars carry information about supply and demand, and the sheet has no column that knows it.**

Three specific checks before you trust any output above:

1. **Does the window straddle a floor-price period?** If so, cut it at the boundary and start a new line. Per Chapter 26, the exclusion flag does this mechanically.
2. **Does it straddle an unadjusted record date?** A 20% cash dividend on a 50-taka share is a mechanical 2-taka gap — more than 1.8 ATR here — and it will corrupt both the hand-drawn slope and the regression.
3. **Did any close in the window print at a circuit limit?** A limit-down close near a trendline should be read as a break until an unconstrained session proves otherwise. **The break test returned "intact" is not the same claim as "the market did not try to break it."**`,
      bn: `**পরিস্থিতি।** §৩১.৩-এর ASIACERAM। ATR(১৪) = ১.১০ পুরো সময়। কেবল ক্লোজ। বার ০-তে অ্যাংকর ১ = ৪২.১০, বার ২৪-এ অ্যাংকর ২ = ৪৮.৪০, বার ৪০-এ তৃতীয় স্পর্শ = ৫২.৯৫, বার ১২-তে বিপরীত চরম = ৪৯.৬০, আজ বার ৬০ আর ক্লোজ ৫৬.৩০।

নিচের প্রতিটি সংখ্যা §৩১.৬ শিটের একটি ঘরের সঙ্গে মেলে। **একবার হাতে গণনা করুন; তারপর শিটটি ভবিষ্যদ্বক্তা নয়, একটি ক্যালকুলেটর।**

**ধাপ ১ — দুটি অ্যাংকর থেকে ঢাল (B6)।**
$$m = \\frac{B5 - B3}{B4 - B2} = \\frac{48.40 - 42.10}{24 - 0} = \\frac{6.30}{24} = 0.2625\\ \\text{BDT/bar}$$

**ধাপ ২ — ইন্টারসেপ্ট (B7)।**
$$b = B3 - m \\times B2 = 42.10 - 0.2625 \\times 0 = 42.10$$

গঠনগতভাবেই অ্যাংকর ১ বার শূন্যে, তাই ইন্টারসেপ্ট অ্যাংকরের দামই। **প্রতিটি জানালা এভাবেই পুনঃসূচিত করুন** — এটি একটি গোটা শ্রেণির পাটিগাণিতিক ভুল সরিয়ে দেয়, আর প্রক্ষেপিত মানটিকে এক নজরে পাঠযোগ্য করে।

**ধাপ ৩ — অ্যাংকরের শতাংশ হিসেবে ঢাল (B8)।**
$$m_{\\%} = \\frac{0.2625}{42.10} \\times 100 = 0.6235\\%\\ \\text{প্রতি বার}$$

৪০০ টাকার কাউন্টারের একটি ট্রেন্ডের সঙ্গে তুলনায় কাজে লাগে। **একই দামে বেশি ভোলাটাইল কাউন্টারের সঙ্গে তুলনায় অকেজো**, আর সেজন্যই এটি নির্ণায়ক নয়।

**ধাপ ৪ — তৃতীয় স্পর্শে লাইন প্রক্ষেপণ (B13)।**
$$\\hat{L}(40) = 42.10 + 0.2625 \\times 40 = 42.10 + 10.50 = 52.60$$

**ধাপ ৫ — বিচ্যুতি, টাকায় ও তারপর ATR-এ (B14, B16)।**
$$d_3 = 52.95 - 52.60 = +0.35\\ \\text{BDT}$$
$$\\delta_3 = \\frac{0.35}{1.10} = 0.3182\\ ATR$$

**ধাপ ৬ — বৈধতার রায় (B17)।**
$$|0.3182| \\le 0.50 \\;\\Rightarrow\\; \\textbf{VALIDATED — তিনটি স্পর্শ}$$

**ব্যবহারযোগ্য হতে লাইনটিকে এই বাধাটিই পেরোতে হয়েছিল।** বার ৪০-এর আগে আপনার ছিল দুটি বিন্দু ও একটি অনুমান। বার ৪০-এর পরে আপনার কাছে প্রমাণ যে অন্য অংশগ্রহণকারীরাও একই নির্মাণ থেকে লেনদেন করছেন। তবে লক্ষ করুন *ধারণাটির* ব্যবধান কত সরু: তৃতীয় স্পর্শ ৫২.১০-এ ছাপলে বিচ্যুতি হতো $-0.4545$ ATR — তখনো বৈধ, কিন্তু কোনোমতে, আর একটি চতুর্থ বিন্দুর জন্য অপেক্ষা করা মূল্যবান হতো।

**ধাপ ৭ — স্বাভাবিকীকৃত ঢাল, স্কেল-নিরপেক্ষ নির্ণায়ক (B20)।**
$$\\sigma = \\frac{0.2625}{1.10} = 0.2386\\ ATR\\ \\text{প্রতি বার}$$

**ধাপ ৮ — ঢালের রায় (B21)।**
$$0.2386 \\le 0.5 \\;\\Rightarrow\\; \\textbf{SUSTAINABLE}$$

ট্রেন্ড প্রতি সেশনে বাজারের কাছে একটি সাধারণ দিনের পরিসরের সিকিরও কম চাইছে। **এমন দাবি বাজার মাসের পর মাস মেটাতে পারে।** এবার সেটিই করুন যা ৪৫-ডিগ্রির নিয়ম পারে না: লক্ষ করুন এই একই লাইন তিন মাস লোড করা ফোনে প্রায় খাড়া দেখায়, আর তিন বছর লোড করা ওয়াইডস্ক্রিনে প্রায় সমতল। **০.২৩৮৬ সংখ্যাটি কোনো যন্ত্রেই বদলায় না।**

**ধাপ ৯ — আজ পর্যন্ত প্রক্ষেপণ ও ফাঁক মাপা (B26, B27, B28)।**
$$\\hat{L}(60) = 42.10 + 0.2625 \\times 60 = 42.10 + 15.75 = 57.85$$
$$\\Delta = 56.30 - 57.85 = -1.55\\ \\text{BDT}$$
$$\\beta = \\frac{-1.55}{1.10} = -1.4091\\ ATR$$

**ধাপ ১০ — ভাঙার নিয়ম প্রয়োগ, বাফারসহ (B29, B30)।**
$$\\beta = -1.4091 \\;<\\; -0.50 \\;\\Rightarrow\\; \\textbf{BROKEN}$$

**ক্লোজটি লাইনের ১.৪১ ATR নিচে, বাফার ০.৫০ ATR-এর বিপরীতে — সহনশীলতার প্রায় তিন গুণ ভাঙন।** এটি আরামদায়ক ক্ষেত্র। অস্বস্তিকর ক্ষেত্র হলো $-0.48$-এর $\\beta$, আর পরীক্ষার আগেই বাফার লিখে রাখার কারণ হলো তর্ক ঠিক $-0.48$-এই শুরু হয়।

**ধাপ ১১ — চ্যানেল অফসেট গঠন (B35)।** বিপরীত পাশের চরম ক্লোজ বার ১২-তে ৪৯.৬০।
$$\\hat{L}(12) = 42.10 + 0.2625 \\times 12 = 42.10 + 3.15 = 45.25$$
$$c = 49.60 - 45.25 = 4.35\\ \\text{BDT}$$

**ধাপ ১২ — চ্যানেলের প্রস্থ, ATR-এ (B36)।**
$$W = \\frac{4.35}{1.10} = 3.9545\\ ATR$$

**চার ATR-এর সামান্য নিচে — ট্রেডযোগ্য, আর কোনোমতে।** প্রায় ৩ ATR-এর নিচে নিচের প্রান্ত থেকে ওপরের প্রান্তে যাওয়া-আসা ডিএসই-তে খরচ পোষায় না, আর এমন চ্যানেলে কাজ করা ট্রেডার জ্যামিতি নিয়ে ঠিক থাকার সুযোগের জন্য কমিশন ও ০.০৫% টার্নওভার লেভি দিচ্ছেন।

**ধাপ ১৩ — আজ রিটার্ন লাইন (B37)।**
$$\\hat{R}(60) = 57.85 + 4.35 = 62.20$$

**ধাপ ১৪ — চ্যানেলে অবস্থান (B38)।**
$$\\rho = \\frac{56.30 - 57.85}{4.35} = \\frac{-1.55}{4.35} = -0.3563$$

**এটি ধাপ ১০-এর পাশে পড়ুন আর লক্ষ করুন এরা দুই ভাষায় একই তথ্য।** $\\rho < 0$ মানে দাম মেঝে দিয়ে চ্যানেল ছেড়ে গেছে। ভাঙার পরীক্ষা একটি রায় দেয়; $\\rho$ দেয় একটি অবস্থান ও একটি মাত্রা। **দুটি স্বাধীন নির্মাণের একই কথা বলা যেকোনো একটির দুবার বলার চেয়ে মূল্যবান।**

**ধাপ ১৫ — বার ৫০–৬০-এ রিগ্রেশনের ঢাল, হাতে গণনা (B53)।** $x = 0 \\ldots 10$ পুনঃসূচিত; ক্লোজ ৬২.০০, ৬১.৮০, ৬০.২০, ৬০.৪০, ৫৯.৫০, ৫৯.৭০, ৫৭.৬০, ৫৮.০০, ৫৭.০০, ৫৬.৫০, ৫৬.৩০।

$$\\bar{x} = 5, \\qquad \\bar{y} = \\frac{649.00}{11} = 59.00$$
$$\\sum (x_i - \\bar{x})^2 = 2(25 + 16 + 9 + 4 + 1) = 110$$
$$\\sum (x_i - \\bar{x})(y_i - \\bar{y}) = -66.00$$
$$\\hat{m} = \\frac{-66.00}{110} = -0.60\\ \\text{BDT/bar}$$

**ধাপ ১৬ — রিগ্রেশনের ইন্টারসেপ্ট (B54)।**
$$\\hat{b} = 59.00 - (-0.60 \\times 5) = 59.00 + 3.00 = 62.00$$

**ধাপ ১৭ — স্ট্যান্ডার্ড এরর, আর স্বাধীনতার মাত্রায় খেয়াল রাখুন (B55)।** $\\hat{y} = 62.00 - 0.60x$-এর বিপরীতে অবশেষ:

| $x$ | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| ফিটেড | ৬২.০০ | ৬১.৪০ | ৬০.৮০ | ৬০.২০ | ৫৯.৬০ | ৫৯.০০ | ৫৮.৪০ | ৫৭.৮০ | ৫৭.২০ | ৫৬.৬০ | ৫৬.০০ |
| অবশেষ | ০.০০ | +০.৪০ | −০.৬০ | +০.২০ | −০.১০ | +০.৭০ | −০.৮০ | +০.২০ | −০.২০ | −০.১০ | +০.৩০ |

$$\\sum e_i^2 = 1.88, \\qquad s_e = \\sqrt{\\frac{1.88}{11 - 2}} = \\sqrt{0.20889} = 0.4570$$

**৯-এর বদলে ১১ দিয়ে ভাগ করলে পাবেন ০.৪১৩৩** — ব্যান্ড প্রস্থের ১১% কম বলা, যা সীমান্তবর্তী ক্লোজগুলোকে চ্যানেলের বাইরে ঠেলে দিয়ে সংকেত বানাত। **$n-2$ পণ্ডিতি নয়; এটি এমন একটি চ্যানেল যা ডেটা যা সমর্থন করে তা জানায়, আর এমন একটি চ্যানেল যা আপনার ফিটকে বাড়িয়ে দেখায় — এদের পার্থক্য।**

**ধাপ ১৮ — $x=10$-এ ফিটেড মান ও ব্যান্ড (B56, B57, B58)।**
$$\\hat{y}(10) = 62.00 - 0.60 \\times 10 = 56.00$$
$$\\text{ঊর্ধ্ব} = 56.00 + 2(0.4570) = 56.9141, \\qquad \\text{নিম্ন} = 56.00 - 2(0.4570) = 55.0859$$

**ধাপ ১৯ — z-score (B59, B60)।**
$$z = \\frac{56.30 - 56.00}{0.4570} = \\frac{0.30}{0.4570} = 0.6564$$

**ধাপ ২০ — রিগ্রেশনের রায় (B61)।**
$$|0.6564| < 2 \\;\\Rightarrow\\; \\textbf{INSIDE CHANNEL — কোনো প্রান্ত নেই}$$

**এখানেই বেশিরভাগ পাঠক সেই ভুলটি করেন যা ঠেকাতে এই অধ্যায় গড়া।** "চ্যানেলের ভেতরে" আশ্বস্ত লাগে। এটি স্বাস্থ্য নিয়ে কোনো মন্তব্যই নয় — এটি কেবল বলে দাম সেখানেই আছে যেখানে দাম সাধারণত থাকে, *এমন একটি চ্যানেলের সাপেক্ষে যা প্রতি বারে ০.৬০ টাকা করে নামছে*। **প্রাথমিক আপট্রেন্ড যে হারে উঠছিল, চ্যানেলটি তার দ্বিগুণেরও বেশি হারে নামছে।** পতনশীল চ্যানেলের ভেতরে আরামদায়ক অবস্থানও একটি পতনশীল অবস্থান।

**ধাপ ২১ — হাতে আঁকা ও যান্ত্রিকটি মেলান (B63)।**
$$B30 = \\text{BROKEN} \\;\\wedge\\; B53 = -0.60 < 0$$
$$\\Rightarrow\\; \\textbf{হাতে আঁকা লাইন ভাঙা এবং রিগ্রেশনের ঢাল ঋণাত্মক — ট্রেন্ড শেষ}$$

**ডেটা ছাড়া আর কোনো মিল নেই এমন দুটি নির্মাণ, আর তারা একমত।** ট্রেন্ডলাইন আপনার বাছা তিনটি বিন্দু থেকে গড়া একটি বিবেচনাধীন বস্তু; রিগ্রেশন এগারোটি ক্লোজ ব্যবহার করে ও কোনো বিচারই নয়। এরা অমত হলে আপনার সামনে একটি প্রকৃত প্রশ্ন। একমত হলে আলোচনার কিছু নেই, আর বার ২৪-এ অ্যাংকর লিখে রাখতে খরচ করা নব্বই সেকেন্ড এইমাত্র নিজের দাম তুলে নিল।

**ধাপ ২২ — শৃঙ্খলার দাম হিসাব করুন, কারণ নইলে "নতুন করে আঁকবেন না" নিছক উপদেশ।**

| | লিখিত লাইন ধরে রাখা | তিনবার নতুন করে আঁকা |
|---|---|---|
| প্রবেশ (বার ৪৩) | ৫৪.০০ | ৫৪.০০ |
| প্রস্থানের ট্রিগার | বার ৫৯-এর ভাঙন, **৫৬.৫০** | "শেষমেশ সত্যিই ভাঙল", ৫১.৮০ |
| ফল | **+৪.৬৩%** | **−৪.০৭%** |
| পার্থক্য | | **৮.৭০ শতাংশ বিন্দু** |

**একই চার্ট, একই শেয়ার, একই প্রবেশ, প্রতিটি মুহূর্তে একই তথ্য উপলব্ধ।** পুরো ব্যবধানটি তৈরি করেছে পঁয়ত্রিশ বার আগে লেখা একটি টেক্সট ফাইল, যাতে চারটি লাইন: দুটি অ্যাংকর, রীতি, বার ৬০-এ প্রক্ষেপিত মান, ও ভাঙার নিয়ম। **ঐ ফাইলটিই এই অধ্যায়ের ফলপ্রসূ ফসল; বাকি সবই তা লেখার পক্ষে যুক্তি।**

**ধাপ ২৩ — শিট যে ডিএসই সতর্কতাগুলো দেখতে পায় না তা বলুন।**

শিটটি খুশিমনে নয় দিনের ঈদের বন্ধ পেরিয়ে, একটি এক্স-লভ্যাংশ ফাঁক পেরিয়ে, আর এমন একটি ফ্লোর-প্রাইসের টানা সময় পেরিয়ে ঢাল গণনা করবে যেখানে কাউন্টারটি ছয় সপ্তাহ একই সংখ্যা ছেপেছে। **ঐ বারগুলোর কোনোটিই চাহিদা-সরবরাহ সম্পর্কে তথ্য বহন করে না, আর শিটের এমন কোনো কলাম নেই যা তা জানে।**

ওপরের কোনো ফলাফলে ভরসা করার আগে তিনটি নির্দিষ্ট যাচাই:

১. **জানালাটি কি একটি ফ্লোর-প্রাইসের সময়কাল ছুঁয়ে যায়?** তাহলে সীমানায় কেটে নতুন লাইন শুরু করুন। অধ্যায় ২৬ অনুযায়ী বর্জন চিহ্নটি এটি যান্ত্রিকভাবে করে।
২. **এটি কি একটি অসমন্বিত রেকর্ড তারিখ ছুঁয়ে যায়?** ৫০ টাকার শেয়ারে ২০% নগদ লভ্যাংশ মানে যান্ত্রিক ২ টাকার ফাঁক — এখানে ১.৮ ATR-এরও বেশি — আর তা হাতে আঁকা ঢাল ও রিগ্রেশন দুটোকেই কলুষিত করবে।
৩. **জানালার কোনো ক্লোজ কি সার্কিট সীমায় ছাপা হয়েছে?** ট্রেন্ডলাইনের কাছে লিমিট-ডাউন ক্লোজকে ভাঙন হিসেবেই পড়া উচিত, যতক্ষণ না একটি অবাধ সেশন উল্টোটা প্রমাণ করে। **ভাঙার পরীক্ষা "অক্ষত" ফেরত দেওয়া আর "বাজার একে ভাঙার চেষ্টা করেনি" — এই দুটি একই দাবি নয়।**`,
    },

    mistakes: {
      en: `1. **Redrawing the line so it does not break.** At bar 59 the four available re-anchorings give 57.94, 58.10 and worse — every one of them still broken. **The redraws did not help, and that is typical: when a trend genuinely ends, most re-anchorings break too.** The disease is not the particular redraw, it is that the search began at all. A line you are permitted to redraw has told you nothing.
2. **Switching from closes to wicks mid-analysis.** Our convention gives anchors 42.10 and 48.40 and a slope of 0.2625. Switch to wick lows and both the slope and every projected value change — and you will only ever notice the switch is available on the day the closing-price line has broken. **The moment you say "if I use the wick instead, it still holds," you have stopped analysing.**
3. **Judging slope by the angle on screen.** This trend is 0.2386 ATR per bar, comfortably sustainable, and it can be made to look near-vertical on a phone or nearly flat on a widescreen. **The 45-degree rule returns two different verdicts on identical data**; $\\sigma$ returns 0.2386 on every device.
4. **Testing the break with no buffer.** At bar 59 the line reads 57.59 and the threshold is 57.04. Drop the 0.5 ATR buffer and every close between those two numbers — a 0.55-taka window that ordinary noise crosses constantly — fires a false break. **A test with no tolerance fires on its own measurement error.**
5. **Fitting the return line independently of the trendline.** The channel offset here is exactly 4.35, derived by copying the 0.2625 slope up to bar 12's close of 49.60. Fit a second line by eye and it will have some other slope, the width will vary for reasons you never measured, and $\\rho$ becomes uninterpretable. **You have drawn a shape and then read meaning out of your own drawing.**
6. **Dividing the regression residuals by $n$ instead of $n-2$.** Here that turns $s_e = 0.4570$ into 0.4133 and narrows the $\\pm 2\\sigma$ band by 11%. **Every error runs the same direction — more closes appear "outside the channel," more signals get manufactured** — and nothing in the output looks wrong.
7. **Reading "inside the channel" as healthy.** The bar-60 $z$ of 0.6564 sits calmly inside a channel whose slope is **−0.60 taka per bar**, more than double the rate at which the primary uptrend was rising. **The channel is not the trend.** $z$ tells you whether there is a mean-reversion edge; only the slope tells you which way you are going.
8. **Drawing a trendline across a floor-price stretch or an unadjusted ex-dividend date.** Both inject price movement that no buyer or seller chose. A 20% cash dividend on a 50-taka counter is a mechanical 2-taka gap — over 1.8 ATR on this stock. **The resulting line is not weak; it is measuring an administrative event.**
9. **Accepting "intact" from a limit-down session.** A close that wanted to be 6% below the line closes at the band instead, and the break test returns INTACT on the day the market was trying hardest to tell you otherwise. **Read a limit-down close near a trendline as a break until an unconstrained session says otherwise.**
10. **Treating a broken accelerated line as a reversal.** At bar 52 the accelerated line broke by 1.05 ATR while the primary line sat at 55.75, nearly five taka below price. **That was deceleration, not reversal** — a note in the log, not an exit. Confusing the two costs you the best part of every trend.
11. **Buying near the top of the channel.** At $\\rho = 0.9$ in a rising channel you are paying for the worst location in the structure: minimum distance to the return line, maximum distance to the invalidation. **The channel exists to tell you where you are, and most people use it only to confirm that they are in one.**`,
      bn: `১. **লাইনটি নতুন করে আঁকা যাতে তা না ভাঙে।** বার ৫৯-এ উপলব্ধ চারটি পুনঃঅ্যাংকরিং দেয় ৫৭.৯৪, ৫৮.১০ ও তার চেয়েও খারাপ — প্রতিটিই এখনো ভাঙা। **পুনরাঙ্কনগুলো সাহায্য করেনি, আর এটিই স্বাভাবিক: ট্রেন্ড সত্যিই শেষ হলে অধিকাংশ পুনঃঅ্যাংকরিংও ভাঙে।** রোগ কোনো নির্দিষ্ট পুনরাঙ্কন নয়, রোগ হলো খোঁজাটা শুরু হওয়াই। যে লাইন নতুন করে আঁকার অনুমতি আপনার আছে সে আপনাকে কিছুই বলেনি।
২. **বিশ্লেষণের মাঝপথে ক্লোজ থেকে উইকে বদলানো।** আমাদের রীতি দেয় অ্যাংকর ৪২.১০ ও ৪৮.৪০ এবং ঢাল ০.২৬২৫। উইক লো-তে বদলান আর ঢাল ও প্রতিটি প্রক্ষেপিত মান বদলে যায় — আর আপনি কেবল সেদিনই খেয়াল করবেন যে বদলটি সম্ভব, যেদিন ক্লোজিং-প্রাইসের লাইন ভেঙেছে। **যে মুহূর্তে আপনি বলেন "উইক ব্যবহার করলে তো টিকেই আছে," সে মুহূর্তে আপনি বিশ্লেষণ থামিয়েছেন।**
৩. **পর্দায় কোণ দেখে ঢাল বিচার করা।** এই ট্রেন্ড প্রতি বারে ০.২৩৮৬ ATR, স্বচ্ছন্দে টেকসই, আর একে ফোনে প্রায় খাড়া বা ওয়াইডস্ক্রিনে প্রায় সমতল দেখানো যায়। **৪৫-ডিগ্রির নিয়ম অভিন্ন ডেটায় দুটি ভিন্ন রায় দেয়**; $\\sigma$ প্রতিটি যন্ত্রে ০.২৩৮৬ দেয়।
৪. **বাফার ছাড়া ভাঙার পরীক্ষা করা।** বার ৫৯-এ লাইন পড়ে ৫৭.৫৯ আর সীমা ৫৭.০৪। ০.৫ ATR বাফার বাদ দিন আর ঐ দুই সংখ্যার মাঝের প্রতিটি ক্লোজ — ০.৫৫ টাকার একটি জানালা যা সাধারণ গোলমাল অনবরত পেরোয় — একটি ভুয়া ভাঙন বাজায়। **সহনশীলতাহীন পরীক্ষা নিজের পরিমাপ-ত্রুটিতেই বেজে ওঠে।**
৫. **ট্রেন্ডলাইন থেকে স্বাধীনভাবে রিটার্ন লাইন ফিট করা।** এখানে চ্যানেল অফসেট ঠিক ৪.৩৫, যা ০.২৬২৫ ঢালটি বার ১২-র ৪৯.৬০ ক্লোজে কপি করে পাওয়া। চোখে দেখে দ্বিতীয় লাইন বসান আর তার ঢাল হবে অন্য কিছু, প্রস্থ বদলাবে এমন কারণে যা আপনি কখনো মাপেননি, আর $\\rho$ ব্যাখ্যার অযোগ্য হয়ে যাবে। **আপনি একটি আকৃতি এঁকে তারপর নিজের আঁকা থেকে অর্থ পড়ছেন।**
৬. **রিগ্রেশনের অবশেষকে $n-2$-এর বদলে $n$ দিয়ে ভাগ করা।** এখানে তা $s_e = 0.4570$-কে ০.৪১৩৩ বানায় ও $\\pm 2\\sigma$ ব্যান্ড ১১% সরু করে। **প্রতিটি ভুল একই দিকে চলে — আরও ক্লোজ "চ্যানেলের বাইরে" দেখায়, আরও সংকেত বানানো হয়** — আর ফলাফলের কিছুই ভুল দেখায় না।
৭. **"চ্যানেলের ভেতরে"-কে সুস্থ হিসেবে পড়া।** বার ৬০-এর ০.৬৫৬৪ $z$ শান্তভাবে এমন একটি চ্যানেলের ভেতরে বসে যার ঢাল **প্রতি বারে −০.৬০ টাকা**, প্রাথমিক আপট্রেন্ড যে হারে উঠছিল তার দ্বিগুণেরও বেশি। **চ্যানেলই ট্রেন্ড নয়।** $z$ বলে মিন-রিভার্শনের প্রান্ত আছে কি না; কোন দিকে যাচ্ছেন তা কেবল ঢালই বলে।
৮. **ফ্লোর-প্রাইসের টানা সময় বা অসমন্বিত এক্স-লভ্যাংশ তারিখ পেরিয়ে ট্রেন্ডলাইন আঁকা।** দুটোই এমন মূল্য-চলাচল ঢোকায় যা কোনো ক্রেতা বা বিক্রেতা বেছে নেননি। ৫০ টাকার কাউন্টারে ২০% নগদ লভ্যাংশ মানে যান্ত্রিক ২ টাকার ফাঁক — এই শেয়ারে ১.৮ ATR-এরও বেশি। **ফলস্বরূপ লাইনটি দুর্বল নয়; এটি একটি প্রশাসনিক ঘটনা মাপছে।**
৯. **লিমিট-ডাউন সেশন থেকে "অক্ষত" মেনে নেওয়া।** যে ক্লোজ লাইনের ৬% নিচে যেতে চেয়েছিল তা বদলে ব্যান্ডে বন্ধ হয়, আর ভাঙার পরীক্ষা ঠিক সেদিনই INTACT ফেরত দেয় যেদিন বাজার সবচেয়ে জোরে উল্টো কথা বলার চেষ্টা করছিল। **ট্রেন্ডলাইনের কাছে লিমিট-ডাউন ক্লোজকে ভাঙন হিসেবেই পড়ুন, যতক্ষণ না একটি অবাধ সেশন উল্টো বলে।**
১০. **ভাঙা ত্বরান্বিত লাইনকে উল্টে যাওয়া গণ্য করা।** বার ৫২-এ ত্বরান্বিত লাইন ১.০৫ ATR ভেঙেছিল যখন প্রাথমিক লাইন ছিল ৫৫.৭৫-এ, দামের প্রায় পাঁচ টাকা নিচে। **ওটা ছিল মন্দগতি, উল্টে যাওয়া নয়** — লগে একটি নোট, প্রস্থান নয়। দুটি গুলিয়ে ফেললে প্রতিটি ট্রেন্ডের সেরা অংশটি হারাবেন।
১১. **চ্যানেলের শীর্ষের কাছে কেনা।** ঊর্ধ্বমুখী চ্যানেলে $\\rho = 0.9$-এ আপনি কাঠামোর সবচেয়ে খারাপ জায়গার দাম দিচ্ছেন: রিটার্ন লাইনে সর্বনিম্ন দূরত্ব, ইনভ্যালিডেশনে সর্বোচ্চ দূরত্ব। **চ্যানেল আছে আপনাকে বলতে আপনি কোথায়, আর বেশিরভাগ মানুষ এটি ব্যবহার করেন কেবল নিশ্চিত হতে যে তাঁরা একটির ভেতরে আছেন।**`,
    },

    tips: {
      en: `1. **Write the line down before it is tested — four lines, ninety seconds.** Anchors with dates and prices, the convention, the projected value at a named future bar, and the break rule. On ASIACERAM that file said *(0, 42.10), (24, 48.40), closes, 57.85 at bar 60, break = close more than 0.5 ATR below.* **It is worth 8.70 percentage points on this one trade.**
2. **Re-index every window so the first anchor sits at bar zero.** The intercept then equals the anchor price — 42.10 here — and a whole class of arithmetic slip disappears.
3. **Use bar index, never calendar date.** A nine-day Eid closure adds nine units of $x$ against zero units of price action and drags the line below the series for administrative reasons.
4. **Never draw before the third touch.** Two points are arithmetic; any two points define a line. Bar 40's deviation of 0.3182 ATR is what turned this construction from a hypothesis into evidence.
5. **Judge slope only in ATR units.** Below 0.5 sustainable, 0.5–1.0 an accelerated line inside the primary trend, above 1.0 parabolic. **Delete the 45-degree rule from your vocabulary** — it is a statement about your monitor.
6. **Run two lines whenever a trend accelerates.** The bar-40 acceleration to 0.64 ATR/bar broke at bar 52 while the primary line still sat five taka below price. **That is a warning to write down and tighten on, not an exit.**
7. **Check channel width in ATR before trading inside it.** Under about 3 ATR the round trip does not clear commission and the 0.05% turnover levy. This channel at 3.9545 ATR qualifies, barely.
8. **Copy the slope for the return line; never fit it separately.** Then every change in $\\rho$ is a change in price rather than a change in your drawing.
9. **Run the regression channel alongside the hand-drawn line on every chart, and fix $n$ in advance.** The one discretionary input is the lookback; fix it and the rest is arithmetic nobody can move, including you.
10. **Act only when the two agree.** Broken line plus negative regression slope is the end of a trend. Broken line plus positive slope is a reason to wait one bar. **Agreement costs a bar of lateness and removes most of the false positives.**
11. **Cut the series at every floor-price boundary and every unadjusted record date, and start a fresh line.** A line drawn across either is not a weak line — it is measuring an administrative event.
12. **Read a limit-down close near your line as a break.** The circuit truncated the test; the sheet cannot see that, and "intact" is not the same claim as "the market did not try."
13. **Log an overthrow when you see one.** Bar 50's close of 62.00 sat above the 59.58 return line. Not a sell signal on its own — but the excursion that exceeds a fifty-bar channel is frequently the last one.
14. **If you must use an internal trendline, state the tolerated violation count in advance.** "Through the body of the data" is otherwise the exact phrase used to justify a line you already wanted.`,
      bn: `১. **লাইনটি পরীক্ষিত হওয়ার আগেই লিখে রাখুন — চার লাইন, নব্বই সেকেন্ড।** তারিখ ও দামসহ অ্যাংকর, রীতি, একটি নির্দিষ্ট ভবিষ্যৎ বারে প্রক্ষেপিত মান, ও ভাঙার নিয়ম। ASIACERAM-এ ঐ ফাইলটি বলেছিল *(0, 42.10), (24, 48.40), ক্লোজ, বার ৬০-এ ৫৭.৮৫, ভাঙন = ০.৫ ATR-এর বেশি নিচে ক্লোজ।* **এই একটি ট্রেডেই তার দাম ৮.৭০ শতাংশ বিন্দু।**
২. **প্রতিটি জানালা পুনঃসূচিত করুন যাতে প্রথম অ্যাংকর বার শূন্যে বসে।** তখন ইন্টারসেপ্ট অ্যাংকরের দামেরই সমান — এখানে ৪২.১০ — আর একটি গোটা শ্রেণির পাটিগাণিতিক ভুল উধাও হয়।
৩. **বার সূচক ব্যবহার করুন, কখনো পঞ্জিকার তারিখ নয়।** নয় দিনের ঈদের বন্ধ শূন্য একক মূল্য-আচরণের বিপরীতে নয় একক $x$ যোগ করে ও প্রশাসনিক কারণে লাইনটিকে সিরিজের নিচে টেনে নামায়।
৪. **তৃতীয় স্পর্শের আগে কখনো আঁকবেন না।** দুটি বিন্দু পাটিগণিত; যেকোনো দুটি বিন্দুই একটি লাইন নির্ধারণ করে। বার ৪০-এর ০.৩১৮২ ATR বিচ্যুতিই এই নির্মাণকে অনুমান থেকে প্রমাণে বদলেছে।
৫. **ঢাল কেবল ATR এককেই বিচার করুন।** ০.৫-এর নিচে টেকসই, ০.৫–১.০ প্রাথমিক ট্রেন্ডের ভেতরে একটি ত্বরান্বিত লাইন, ১.০-এর ওপরে প্যারাবলিক। **আপনার শব্দভাণ্ডার থেকে ৪৫-ডিগ্রির নিয়ম মুছে দিন** — এটি আপনার মনিটর সম্পর্কে একটি বিবৃতি।
৬. **ট্রেন্ড ত্বরান্বিত হলেই দুটি লাইন চালান।** বার ৪০-এর ত্বরণ প্রতি বারে ০.৬৪ ATR-এ পৌঁছে বার ৫২-এ ভেঙেছিল, তখনো প্রাথমিক লাইন দামের পাঁচ টাকা নিচে। **ওটি লিখে রেখে স্টপ শক্ত করার সতর্কবার্তা, প্রস্থান নয়।**
৭. **ভেতরে ট্রেড করার আগে চ্যানেলের প্রস্থ ATR-এ যাচাই করুন।** প্রায় ৩ ATR-এর নিচে যাওয়া-আসা কমিশন ও ০.০৫% টার্নওভার লেভি পোষায় না। ৩.৯৫৪৫ ATR-এ এই চ্যানেল কোনোমতে যোগ্য।
৮. **রিটার্ন লাইনের জন্য ঢাল কপি করুন; কখনো আলাদাভাবে ফিট করবেন না।** তাহলে $\\rho$-এর প্রতিটি পরিবর্তন আপনার আঁকার নয়, দামের পরিবর্তন।
৯. **প্রতিটি চার্টে হাতে আঁকা লাইনের পাশে রিগ্রেশন চ্যানেল চালান, আর $n$ আগেই ঠিক করুন।** একমাত্র বিবেচনাধীন উপাদান লুকব্যাক; সেটি ঠিক করলে বাকিটা এমন পাটিগণিত যা আপনিসহ কেউ নাড়াতে পারে না।
১০. **দুটি একমত হলেই কাজ করুন।** ভাঙা লাইন যোগ ঋণাত্মক রিগ্রেশন ঢাল মানে ট্রেন্ডের শেষ। ভাঙা লাইন যোগ ধনাত্মক ঢাল মানে এক বার অপেক্ষার কারণ। **একমত হওয়া এক বার দেরি করায় আর অধিকাংশ ভুয়া ধনাত্মক সরিয়ে দেয়।**
১১. **প্রতিটি ফ্লোর-প্রাইস সীমানা ও প্রতিটি অসমন্বিত রেকর্ড তারিখে সিরিজ কেটে নতুন লাইন শুরু করুন।** এদের যেকোনোটি পেরিয়ে আঁকা লাইন দুর্বল লাইন নয় — তা একটি প্রশাসনিক ঘটনা মাপছে।
১২. **আপনার লাইনের কাছে লিমিট-ডাউন ক্লোজকে ভাঙন হিসেবে পড়ুন।** সার্কিট পরীক্ষাটিকেই কেটে দিয়েছে; শিট তা দেখতে পায় না, আর "অক্ষত" আর "বাজার চেষ্টা করেনি" একই দাবি নয়।
১৩. **ওভারথ্রো দেখলে লগ করুন।** বার ৫০-এর ৬২.০০ ক্লোজ ৫৯.৫৮ রিটার্ন লাইনের ওপরে বসেছিল। একা এটি বিক্রয় সংকেত নয় — কিন্তু যে ভ্রমণ পঞ্চাশ-বারের চ্যানেল ছাড়িয়ে যায় তা প্রায়শই শেষ ভ্রমণ।
১৪. **ইন্টারনাল ট্রেন্ডলাইন ব্যবহার করতেই হলে সহ্য করা লঙ্ঘনের সংখ্যা আগেই বলুন।** নইলে "ডেটার দেহের ভেতর দিয়ে" ঠিক সেই বাক্যাংশ যা আগে থেকেই চাওয়া একটি লাইনকে সমর্থন করতে ব্যবহৃত হয়।`,
    },

    exercises: {
      en: `1. Build the §31.6 sheet. Enter the anchors and confirm B6 = 0.2625, B7 = 42.10, B13 = 52.60, B16 = 0.3182, B17 = VALIDATED, B20 = 0.2386, B26 = 57.85, B28 = −1.4091 and B30 = BROKEN.
2. Change B29 from 0.5 to 0. At what current close does B30 now flip to BROKEN, and how many taka wide is the window of closes that a zero-buffer test reclassifies as breaks?
3. Change B15 from 1.10 to 2.20 without touching any price. Report the new B16, B20, B28 and B36, and state which verdicts change. **What does that tell you about how much of this analysis is about volatility rather than about price?**
4. Set B12 to 52.10 instead of 52.95. Recompute B14 and B16. Does B17 still read VALIDATED, and would you personally trade a line validated at that margin?
5. Confirm B35 = 4.35 and B36 = 3.9545 by hand. Then change B34 from 49.60 to 47.50. What happens to the channel width, and does the channel remain tradeable under the 3-ATR rule?
6. Compute B38 for closes of 45.25, 50.00 and 62.20 at bar 60. Interpret each value of $\\rho$ in one sentence without using the words "high" or "low".
7. Reproduce B53, B54 and B55 by hand from the eleven closes in D41:E51 — slope −0.60, intercept 62.00, standard error 0.4570. Then recompute $s_e$ dividing by 11 rather than 9 and report the percentage change in the band width.
8. Delete rows for $x = 0$ and $x = 1$ so the regression runs on nine bars. Does B53 stay negative? Does B60 stay inside $\\pm 2$? **What does the sensitivity tell you about picking a lookback after seeing the chart?**
9. Take a real DSE counter and draw a trendline to this book's convention. Write the four-line pre-commitment record before you look at another bar. Come back after fifteen sessions and report whether the line held, whether you were tempted to redraw, and what the redraw would have said.
10. On the same counter, find a stretch that crosses a floor-price period or an unadjusted ex-dividend date. Fit one line across it and one on each side. **Report the three slopes and say which of them, if any, means anything.**
11. Find a session on any DSE name where the close printed at the circuit limit within 1 ATR of a trendline you had drawn. What did the break test say that day, and what did the next unconstrained session say?
12. Find a rising wedge on a DSE chart. Compute $t^{*}$, the apex bar. How many bars before $t^{*}$ did price actually resolve, and which way?
13. In three sentences, write what your hand-drawn line can see that the regression cannot, and what the regression can see that you cannot. Keep it with the sheet.`,
      bn: `১. §৩১.৬-এর শিট তৈরি করুন। অ্যাংকর বসিয়ে নিশ্চিত করুন B6 = ০.২৬২৫, B7 = ৪২.১০, B13 = ৫২.৬০, B16 = ০.৩১৮২, B17 = VALIDATED, B20 = ০.২৩৮৬, B26 = ৫৭.৮৫, B28 = −১.৪০৯১ ও B30 = BROKEN।
২. B29 ০.৫ থেকে ০ করুন। এখন কোন বর্তমান ক্লোজে B30 BROKEN-এ বদলায়, আর শূন্য-বাফারের পরীক্ষা যে ক্লোজগুলোকে ভাঙন হিসেবে পুনঃশ্রেণিবদ্ধ করে তার জানালা কত টাকা চওড়া?
৩. কোনো দাম না ছুঁয়ে B15 ১.১০ থেকে ২.২০ করুন। নতুন B16, B20, B28 ও B36 জানান, আর বলুন কোন রায়গুলো বদলায়। **এই বিশ্লেষণের কতটা দাম নয় বরং ভোলাটিলিটি নিয়ে, তা এটি আপনাকে কী বলে?**
৪. B12-তে ৫২.৯৫-এর বদলে ৫২.১০ বসান। B14 ও B16 পুনর্গণনা করুন। B17 কি এখনো VALIDATED পড়ে, আর আপনি নিজে কি ঐ ব্যবধানে বৈধ হওয়া একটি লাইন ট্রেড করতেন?
৫. হাতে নিশ্চিত করুন B35 = ৪.৩৫ ও B36 = ৩.৯৫৪৫। তারপর B34 ৪৯.৬০ থেকে ৪৭.৫০ করুন। চ্যানেলের প্রস্থের কী হয়, আর ৩-ATR নিয়মে চ্যানেলটি কি ট্রেডযোগ্য থাকে?
৬. বার ৬০-এ ৪৫.২৫, ৫০.০০ ও ৬২.২০ ক্লোজের জন্য B38 গণনা করুন। "উঁচু" বা "নিচু" শব্দ ব্যবহার না করে $\\rho$-এর প্রতিটি মান এক বাক্যে ব্যাখ্যা করুন।
৭. D41:E51-এর এগারোটি ক্লোজ থেকে হাতে B53, B54 ও B55 পুনরুৎপাদন করুন — ঢাল −০.৬০, ইন্টারসেপ্ট ৬২.০০, স্ট্যান্ডার্ড এরর ০.৪৫৭০। তারপর ৯-এর বদলে ১১ দিয়ে ভাগ করে $s_e$ পুনর্গণনা করুন ও ব্যান্ড প্রস্থের শতাংশ পরিবর্তন জানান।
৮. $x = 0$ ও $x = 1$-এর সারি মুছে নয় বারে রিগ্রেশন চালান। B53 কি ঋণাত্মক থাকে? B60 কি $\\pm 2$-এর ভেতরে থাকে? **চার্ট দেখার পরে লুকব্যাক বাছা নিয়ে এই সংবেদনশীলতা আপনাকে কী বলে?**
৯. একটি প্রকৃত ডিএসই কাউন্টার নিয়ে এই বইয়ের রীতিতে ট্রেন্ডলাইন আঁকুন। আরেকটি বার দেখার আগেই চার-লাইনের পূর্ব-অঙ্গীকার নথিটি লিখুন। পনেরো সেশন পরে ফিরে এসে জানান লাইনটি টিকেছিল কি না, নতুন করে আঁকার প্রলোভন হয়েছিল কি না, আর পুনরাঙ্কনটি কী বলত।
১০. একই কাউন্টারে এমন একটি অংশ খুঁজুন যা একটি ফ্লোর-প্রাইসের সময়কাল বা একটি অসমন্বিত এক্স-লভ্যাংশ তারিখ পেরোয়। তার ওপর দিয়ে একটি লাইন ও দুই পাশে একটি করে লাইন বসান। **তিনটি ঢাল জানান আর বলুন এদের কোনটির, যদি থাকে, কোনো অর্থ আছে।**
১১. যেকোনো ডিএসই নামে এমন একটি সেশন খুঁজুন যেখানে ক্লোজ সার্কিট সীমায় ছাপা হয়েছে এবং আপনার আঁকা একটি ট্রেন্ডলাইনের ১ ATR-এর মধ্যে। সেদিন ভাঙার পরীক্ষা কী বলেছিল, আর পরের অবাধ সেশন কী বলল?
১২. একটি ডিএসই চার্টে একটি রাইজিং ওয়েজ খুঁজুন। শীর্ষবিন্দুর বার $t^{*}$ গণনা করুন। $t^{*}$-এর কত বার আগে দাম সত্যিই নিষ্পত্তি হলো, আর কোন দিকে?
১৩. তিন বাক্যে লিখুন আপনার হাতে আঁকা লাইন কী দেখতে পায় যা রিগ্রেশন পায় না, আর রিগ্রেশন কী দেখতে পায় যা আপনি পান না। শিটের সঙ্গে রেখে দিন।`,
    },

    summary: {
      en: `- **A trendline is not a number, it is a construction — and you built it.** Chapter 30's horizontal level at 48.00 exists whether or not you drew it. A trendline has an author, and the author has a position. Every difficulty in this chapter follows from that one asymmetry.
- **A trend is a conjunction and therefore falsifiable:** higher highs **and** higher lows. The moment a swing low prints below the prior swing low the uptrend is over by definition — not weakening, over. **The classification is separate from the decision about your stop, and conflating them is the first step down the road.**
- **Two points define a line; three validate it.** ASIACERAM's anchors at (0, 42.10) and (24, 48.40) give a slope of **0.2625 BDT/bar** and an intercept of 42.10. The bar-40 touch at 52.95 against a projected 52.60 is a deviation of 0.35 taka, or **0.3182 ATR — inside the 0.5 tolerance, and the moment the line stopped being arithmetic.**
- **Judge slope in ATR units, never in degrees.** $\\sigma = 0.2625 / 1.10 = \\textbf{0.2386 ATR per bar}$ — sustainable. **The 45-degree rule returns different verdicts on a phone and a widescreen from identical data**; $\\sigma$ returns 0.2386 on both.
- **The break test needs a buffer or it fires on its own measurement error.** At bar 60 the line reads 57.85, the close is 56.30, and $\\beta = \\textbf{−1.4091 ATR}$ against a 0.5 ATR buffer — **broken by nearly three times the tolerance.**
- **The channel is the same slope offset to the opposite extreme, never a second fitted line.** Offset **4.35 taka**, width **3.9545 ATR** — tradeable, barely — return line at 62.20, and $\\rho = \\textbf{−0.3563}$, which says price has left the channel through the floor. **The break verdict and the channel position are the same fact in two languages.**
- **Wedges invert the reading.** Two converging lines have a computable apex $t^{*}$, which turns a shape into a deadline. **A rising wedge is the only structure in this chapter whose expected resolution runs against its own slope** — which is why traders who have internalised "the trend is your friend" buy them.
- **The regression channel is the line nobody can move.** Over bars 50–60: slope **−0.60 BDT/bar**, intercept 62.00, $s_e = \\textbf{0.4570}$ using $n-2$, and $z = \\textbf{0.6564}$. Dividing by $n$ instead narrows the band 11% — small, systematic, always toward overtrading.
- **"Inside the channel" is not "healthy."** A $z$ of 0.66 sits calmly inside a channel falling at 0.60 taka per bar, **more than double the rate the primary uptrend was rising.** The $z$ tells you about mean reversion; only the slope tells you where you are going.
- **Act when the two constructions agree.** Hand-drawn line BROKEN plus regression slope negative: **the trend is over and there is nothing left on the chart to negotiate with.** Broken plus positive slope buys one bar of waiting and most of the false positives.
- **The whole discipline is a text file written before the test:** two anchors, the convention, the projected value at a named bar, the break rule. On this chart it is worth **8.70 percentage points** — +4.63% for the trader who held the written line against −4.07% for the one who redrew it three times, on the same stock, the same entry, the same information.
- **Four DSE realities come before any of the above:** trends here are short and news-driven, so a line fitted over 200 bars often has no content at bar 201; thin liquidity makes wick anchors noise, which is why this book uses closes; **floor-price stretches and unadjusted ex-dividend dates make a line measure an administrative event rather than supply and demand**; and a limit-down close near your line truncates the test — read it as a break until an unconstrained session says otherwise.`,
      bn: `- **ট্রেন্ডলাইন কোনো সংখ্যা নয়, এটি একটি নির্মাণ — আর আপনিই তা বানিয়েছেন।** অধ্যায় ৩০-এর ৪৮.০০-এ অনুভূমিক স্তর আপনি আঁকুন বা না আঁকুন বিদ্যমান। ট্রেন্ডলাইনের একজন রচয়িতা আছে, আর রচয়িতার একটি পজিশন আছে। এই অধ্যায়ের প্রতিটি জটিলতা ঐ একটি অসমতা থেকে আসে।
- **ট্রেন্ড একটি সংযোজন এবং তাই মিথ্যা প্রমাণযোগ্য:** উচ্চতর উচ্চ **এবং** উচ্চতর নিম্ন। যে মুহূর্তে একটি সুইং লো আগের সুইং লো-র নিচে ছাপা হয়, সংজ্ঞা অনুযায়ীই আপট্রেন্ড শেষ — দুর্বল হচ্ছে না, শেষ। **শ্রেণিবিন্যাস আপনার স্টপ নিয়ে সিদ্ধান্ত থেকে আলাদা, আর দুটি গুলিয়ে ফেলাই সেই পথের প্রথম ধাপ।**
- **দুটি বিন্দু লাইন নির্ধারণ করে; তিনটি বৈধতা দেয়।** ASIACERAM-এর (0, 42.10) ও (24, 48.40) অ্যাংকর দেয় ঢাল **০.২৬২৫ টাকা/বার** ও ইন্টারসেপ্ট ৪২.১০। প্রক্ষেপিত ৫২.৬০-এর বিপরীতে বার ৪০-এ ৫২.৯৫-এর স্পর্শ মানে ০.৩৫ টাকা বিচ্যুতি, অর্থাৎ **০.৩১৮২ ATR — ০.৫ সহনশীলতার ভেতরে, আর সেই মুহূর্তেই লাইনটি পাটিগণিত হওয়া থামল।**
- **ঢাল ATR এককে বিচার করুন, কখনো ডিগ্রিতে নয়।** $\\sigma = 0.2625 / 1.10 = \\textbf{প্রতি বারে ০.২৩৮৬ ATR}$ — টেকসই। **৪৫-ডিগ্রির নিয়ম অভিন্ন ডেটা থেকে ফোনে ও ওয়াইডস্ক্রিনে ভিন্ন রায় দেয়**; $\\sigma$ দুটিতেই ০.২৩৮৬ দেয়।
- **ভাঙার পরীক্ষায় বাফার লাগে, নইলে তা নিজের পরিমাপ-ত্রুটিতেই বাজে।** বার ৬০-এ লাইন পড়ে ৫৭.৮৫, ক্লোজ ৫৬.৩০, আর ০.৫ ATR বাফারের বিপরীতে $\\beta = \\textbf{−১.৪০৯১ ATR}$ — **সহনশীলতার প্রায় তিন গুণ ভাঙন।**
- **চ্যানেল হলো একই ঢাল বিপরীত চরমে সরানো, কখনোই দ্বিতীয় একটি ফিট করা লাইন নয়।** অফসেট **৪.৩৫ টাকা**, প্রস্থ **৩.৯৫৪৫ ATR** — কোনোমতে ট্রেডযোগ্য — রিটার্ন লাইন ৬২.২০-এ, আর $\\rho = \\textbf{−০.৩৫৬৩}$, যা বলে দাম মেঝে দিয়ে চ্যানেল ছেড়ে গেছে। **ভাঙার রায় ও চ্যানেলের অবস্থান দুই ভাষায় একই তথ্য।**
- **ওয়েজ পাঠটি উল্টে দেয়।** দুটি অভিসারী লাইনের একটি গণনাযোগ্য শীর্ষবিন্দু $t^{*}$ আছে, যা একটি আকৃতিকে সময়সীমায় বদলায়। **এই অধ্যায়ে রাইজিং ওয়েজই একমাত্র কাঠামো যার প্রত্যাশিত নিষ্পত্তি নিজের ঢালের বিপরীতে চলে** — সেজন্যই যাঁরা "ট্রেন্ডই বন্ধু" আত্মস্থ করেছেন তাঁরা এগুলো কেনেন।
- **রিগ্রেশন চ্যানেল হলো সেই লাইন যা কেউ নাড়াতে পারে না।** বার ৫০–৬০-এ: ঢাল **−০.৬০ টাকা/বার**, ইন্টারসেপ্ট ৬২.০০, $n-2$ ব্যবহার করে $s_e = \\textbf{০.৪৫৭০}$, ও $z = \\textbf{০.৬৫৬৪}$। বদলে $n$ দিয়ে ভাগ করলে ব্যান্ড ১১% সরু হয় — ছোট, নিয়মতান্ত্রিক, সবসময় অতিরিক্ত ট্রেডিংয়ের দিকে।
- **"চ্যানেলের ভেতরে" মানে "সুস্থ" নয়।** ০.৬৬-এর একটি $z$ শান্তভাবে এমন চ্যানেলের ভেতরে বসে যা প্রতি বারে ০.৬০ টাকা নামছে, **প্রাথমিক আপট্রেন্ড যে হারে উঠছিল তার দ্বিগুণেরও বেশি।** $z$ বলে মিন-রিভার্শন নিয়ে; কোথায় যাচ্ছেন তা কেবল ঢালই বলে।
- **দুটি নির্মাণ একমত হলে কাজ করুন।** হাতে আঁকা লাইন BROKEN যোগ রিগ্রেশনের ঢাল ঋণাত্মক: **ট্রেন্ড শেষ আর চার্টে দর-কষাকষির কিছু বাকি নেই।** ভাঙা যোগ ধনাত্মক ঢাল এক বারের অপেক্ষা ও অধিকাংশ ভুয়া ধনাত্মক কিনে দেয়।
- **সমগ্র শৃঙ্খলাটি পরীক্ষার আগে লেখা একটি টেক্সট ফাইল:** দুটি অ্যাংকর, রীতি, একটি নির্দিষ্ট বারে প্রক্ষেপিত মান, ভাঙার নিয়ম। এই চার্টে তার দাম **৮.৭০ শতাংশ বিন্দু** — যিনি লিখিত লাইন ধরে রেখেছেন তাঁর +৪.৬৩% বনাম যিনি তিনবার নতুন করে এঁকেছেন তাঁর −৪.০৭%, একই শেয়ারে, একই প্রবেশে, একই তথ্যে।
- **ওপরের সবকিছুর আগে চারটি ডিএসই বাস্তবতা আসে:** এখানে ট্রেন্ড ছোট ও সংবাদচালিত, তাই ২০০ বারে ফিট করা লাইনের ২০১তম বারে প্রায়ই কোনো বিষয়বস্তু থাকে না; পাতলা তারল্য উইক অ্যাংকরকে গোলমাল বানায়, সেজন্যই এই বই ক্লোজ ব্যবহার করে; **ফ্লোর-প্রাইসের টানা সময় ও অসমন্বিত এক্স-লভ্যাংশ তারিখ একটি লাইনকে চাহিদা-সরবরাহ নয়, একটি প্রশাসনিক ঘটনা মাপায়**; আর আপনার লাইনের কাছে লিমিট-ডাউন ক্লোজ পরীক্ষাটিকেই কেটে দেয় — একটি অবাধ সেশন উল্টো না বলা পর্যন্ত একে ভাঙন হিসেবেই পড়ুন।`,
    },
  },

  interview: [
    {
      q: {
        en: 'A horizontal support level and a trendline both give you a price. Why do you treat them so differently?',
        bn: 'একটি অনুভূমিক সাপোর্ট লেভেল ও একটি ট্রেন্ডলাইন দুটোই আপনাকে একটি দাম দেয়। আপনি এদের এত ভিন্নভাবে দেখেন কেন?',
      },
      a: {
        en: 'Because one of them exists without me and the other does not. A horizontal level at forty-eight taka is a number — people bought and sold there, the inventory is real, and if I had never opened the chart the level would still be there. A trendline is a construction, and I built it. I chose the two anchors, I chose whether to use closes or wicks, and I chose the window. That means it carries my position in a way the horizontal level cannot, and the consequence is a specific and very powerful bias. The strongest bias in technical analysis is not seeing patterns that are not there — it is quietly redrawing a line so that it does not break. On the worked example that temptation arrives at bar fifty-nine, with the line at fifty-seven point five nine and the close at fifty-six fifty. Every available redraw is individually defensible: the earlier anchor is stale, the trend accelerated, the wick was a data error. Together they produce a line that has never broken in the entire history of the chart, which is exactly what a line that means nothing looks like. So a trendline is supposed to be a hypothesis that can fail, and a redrawn trendline is a hypothesis that cannot. The moment it cannot fail it also cannot inform, and I am just holding a losing position with a drawing on it.',
        bn: 'কারণ এদের একটি আমাকে ছাড়াই বিদ্যমান আর অন্যটি নয়। আটচল্লিশ টাকায় একটি অনুভূমিক লেভেল একটি সংখ্যা — মানুষ সেখানে কিনেছেন ও বিক্রি করেছেন, ইনভেন্টরি বাস্তব, আর আমি চার্টটি কখনো না খুললেও লেভেলটি সেখানেই থাকত। ট্রেন্ডলাইন একটি নির্মাণ, আর আমি তা বানিয়েছি। আমি দুটি অ্যাংকর বেছেছি, ক্লোজ না উইক তা বেছেছি, আর জানালাটি বেছেছি। এর মানে এটি আমার পজিশন এমনভাবে বহন করে যা অনুভূমিক লেভেল পারে না, আর তার পরিণতি একটি নির্দিষ্ট ও অত্যন্ত শক্তিশালী পক্ষপাত। টেকনিক্যাল অ্যানালাইসিসে সবচেয়ে শক্তিশালী পক্ষপাত নেই এমন প্যাটার্ন দেখা নয় — এটি নীরবে একটি লাইন নতুন করে আঁকা যাতে তা না ভাঙে। উদাহরণে ঐ প্রলোভন আসে বার ঊনষাটে, লাইন সাতান্ন দশমিক পাঁচ নয়-এ আর ক্লোজ ছাপ্পান্ন পঞ্চাশে। প্রতিটি উপলব্ধ পুনরাঙ্কন আলাদাভাবে সমর্থনযোগ্য: আগের অ্যাংকর পুরোনো, ট্রেন্ড ত্বরান্বিত হয়েছে, উইকটি ডেটার ভুল ছিল। একসঙ্গে এরা এমন একটি লাইন তৈরি করে যা চার্টের পুরো ইতিহাসে কখনো ভাঙেনি, আর অর্থহীন লাইন ঠিক এরকমই দেখায়। তাই ট্রেন্ডলাইন এমন একটি অনুমান হওয়ার কথা যা ব্যর্থ হতে পারে, আর পুনরাঙ্কিত ট্রেন্ডলাইন এমন একটি অনুমান যা ব্যর্থ হতে পারে না। যে মুহূর্তে এটি ব্যর্থ হতে পারে না সে মুহূর্তে এটি তথ্যও দিতে পারে না, আর আমার হাতে কেবল একটি লোকসানি পজিশন থাকে যার ওপর একটি আঁকিবুঁকি বসানো।',
      },
    },
    {
      q: {
        en: 'Every textbook says a trendline steeper than forty-five degrees is unsustainable. Do you use that rule?',
        bn: 'প্রতিটি পাঠ্যবই বলে পঁয়তাল্লিশ ডিগ্রির চেয়ে খাড়া ট্রেন্ডলাইন টেকসই নয়। আপনি কি ঐ নিয়ম ব্যবহার করেন?',
      },
      a: {
        en: 'No, because as stated it is meaningless — it is a statement about my monitor rather than about the stock. Forty-five degrees on a chart depends on the aspect ratio of the screen, the price range on the y-axis, and how many bars I have loaded. I can take one line and make it look near-vertical on a phone with three months loaded and nearly flat on a widescreen with three years loaded, and nothing about the underlying series has changed. But the rule is pointing at something real, so I restate it in units that do not move: slope in taka per bar divided by average true range. On the worked example that is zero point two six two five divided by one point one zero, which is zero point two three eight six average true ranges per bar, and that number is the same on every device. Now the rule says something meaningful — it asks how much of a typical day\'s range the trend is demanding from the market every single session. My working bands are that below zero point five is sustainable, zero point five to one is steep and usually an accelerated line inside the primary trend, and above one is parabolic and marks a blow-off. On this chart the primary line asks for a quarter of a day\'s range, which markets supply for months. The accelerated line that formed at bar forty asked for zero point six four, and it broke twelve bars later while the primary line was still five taka below price. That is a warning about deceleration, not a reversal signal, and telling those two apart is worth a lot.',
        bn: 'না, কারণ যেভাবে বলা হয় তা অর্থহীন — এটি শেয়ার নয়, আমার মনিটর সম্পর্কে একটি বিবৃতি। চার্টে পঁয়তাল্লিশ ডিগ্রি নির্ভর করে পর্দার অনুপাত, y-অক্ষের দামের পরিসর আর আমি কত বার লোড করেছি তার ওপর। আমি একটি লাইন নিয়ে তিন মাস লোড করা ফোনে প্রায় খাড়া আর তিন বছর লোড করা ওয়াইডস্ক্রিনে প্রায় সমতল দেখাতে পারি, অথচ অন্তর্নিহিত সিরিজের কিছুই বদলায়নি। কিন্তু নিয়মটি সত্যিকারের কিছু নির্দেশ করে, তাই আমি একে এমন এককে পুনর্লিখন করি যা নড়ে না: প্রতি বারে টাকায় ঢাল ভাগ গড় true range। উদাহরণে তা শূন্য দশমিক দুই ছয় দুই পাঁচ ভাগ এক দশমিক এক শূন্য, অর্থাৎ প্রতি বারে শূন্য দশমিক দুই তিন আট ছয় গড় true range, আর ঐ সংখ্যা প্রতিটি যন্ত্রে একই। এবার নিয়মটি অর্থপূর্ণ কিছু বলে — এটি জিজ্ঞেস করে ট্রেন্ড প্রতিটি সেশনে বাজারের কাছে একটি সাধারণ দিনের পরিসরের কতটা দাবি করছে। আমার কার্যকর ব্যান্ড হলো শূন্য দশমিক পাঁচের নিচে টেকসই, শূন্য দশমিক পাঁচ থেকে এক খাড়া ও সাধারণত প্রাথমিক ট্রেন্ডের ভেতরে একটি ত্বরান্বিত লাইন, আর একের ওপরে প্যারাবলিক ও ব্লো-অফ চিহ্নিত করে। এই চার্টে প্রাথমিক লাইন একটি দিনের পরিসরের সিকি চায়, যা বাজার মাসের পর মাস দেয়। বার চল্লিশে গড়ে ওঠা ত্বরান্বিত লাইন চেয়েছিল শূন্য দশমিক ছয় চার, আর তা বারো বার পরে ভেঙেছিল যখন প্রাথমিক লাইন তখনো দামের পাঁচ টাকা নিচে। ওটি মন্দগতির সতর্কবার্তা, উল্টে যাওয়ার সংকেত নয়, আর এ দুটির পার্থক্য বোঝার দাম অনেক।',
      },
    },
    {
      q: {
        en: 'Why do you use closing prices for your anchors rather than the actual highs and lows?',
        bn: 'অ্যাংকরের জন্য আপনি প্রকৃত উচ্চ-নিম্নের বদলে ক্লোজিং প্রাইস ব্যবহার করেন কেন?',
      },
      a: {
        en: 'Two reasons, and the second is specific to our market. The first is that either convention is defensible in principle — closes ignore intraday noise and are harder to fudge, wicks capture the actual extremes traders experienced — but switching between them mid-analysis is not defensible at all. The moment I find myself saying "well, if I use the wick instead, the line still holds," I have stopped analysing and started negotiating, and I will only ever notice that the switch is available on the day the line has broken. So the convention has to be fixed in advance, in writing, whichever one I pick. The second reason is why I pick closes on the Dhaka exchange specifically. On a thinly traded counter a single small order at a bad moment prints a low three percent below anything anyone actually transacted at in size. If I anchor a trendline to that print I have anchored it to noise. Closes here are struck in the closing session with far more participation, and they are much harder to produce by accident. The practical consequence is the one that matters: a wick-based line on a thin counter will be violated and redrawn so often that the redrawing becomes habitual — and the habit of redrawing is precisely the failure mode I am trying to prevent. I would add one honest caveat. Closes are not immune either. A close printed at the circuit limit is not a price where supply met demand, so I flag those separately regardless of the convention.',
        bn: 'দুটি কারণ, আর দ্বিতীয়টি আমাদের বাজারের জন্য নির্দিষ্ট। প্রথমটি হলো নীতিগতভাবে দুটি রীতিই সমর্থনযোগ্য — ক্লোজ দিনের ভেতরের গোলমাল উপেক্ষা করে ও কারচুপি করা কঠিন, উইক ট্রেডাররা যে প্রকৃত চরম দাম দেখেছেন তা ধরে — কিন্তু বিশ্লেষণের মাঝপথে এদের মধ্যে বদল করা মোটেই সমর্থনযোগ্য নয়। যে মুহূর্তে আমি নিজেকে বলতে শুনি "আচ্ছা, উইক ব্যবহার করলে লাইনটা তো টিকেই আছে," তখন আমি বিশ্লেষণ থামিয়ে দর-কষাকষি শুরু করেছি, আর আমি কেবল সেদিনই খেয়াল করব যে বদলটি সম্ভব, যেদিন লাইনটি ভেঙেছে। তাই রীতিটি যেটিই বাছি, আগেই লিখিতভাবে স্থির করতে হবে। দ্বিতীয় কারণ হলো ঢাকা এক্সচেঞ্জে আমি বিশেষভাবে ক্লোজ কেন বাছি। পাতলা লেনদেনের কাউন্টারে খারাপ মুহূর্তে একটি ছোট অর্ডার এমন একটি লো ছাপে যা পরিমাণে কেউ যে দামে লেনদেন করেছে তার তিন শতাংশ নিচে। ঐ ছাপে ট্রেন্ডলাইন অ্যাংকর করলে আমি গোলমালে অ্যাংকর করলাম। এখানে ক্লোজ অনেক বেশি অংশগ্রহণসহ ক্লোজিং সেশনে নির্ধারিত হয়, আর দুর্ঘটনাক্রমে তা তৈরি করা অনেক কঠিন। ব্যবহারিক পরিণতিটিই গুরুত্বপূর্ণ: পাতলা কাউন্টারে উইক-ভিত্তিক লাইন এত ঘন ঘন লঙ্ঘিত ও পুনরাঙ্কিত হবে যে পুনরাঙ্কন অভ্যাসে পরিণত হবে — আর পুনরাঙ্কনের অভ্যাসই ঠিক সেই ব্যর্থতা যা আমি ঠেকাতে চাইছি। একটি সৎ সতর্কতা যোগ করব। ক্লোজও নিরাপদ নয়। সার্কিট সীমায় ছাপা ক্লোজ এমন দাম নয় যেখানে চাহিদা সরবরাহের সঙ্গে মিলেছে, তাই রীতি যাই হোক আমি সেগুলো আলাদাভাবে চিহ্নিত করি।',
      },
    },
    {
      q: {
        en: 'You run a hand-drawn trendline and a regression channel on the same chart. Why both?',
        bn: 'আপনি একই চার্টে একটি হাতে আঁকা ট্রেন্ডলাইন ও একটি রিগ্রেশন চ্যানেল চালান। দুটোই কেন?',
      },
      a: {
        en: 'Because they fail in different ways, so agreement between them is genuinely informative. The hand-drawn line has one real virtue: it respects the specific swing lows where buyers actually appeared, and it remembers those points. Its vice is that its anchors are chosen by me, after I have seen where they would need to be. The regression has the opposite profile. It uses every close in the window and no judgement at all — slope, intercept and standard error follow mechanically from the data — so nobody can fudge it, including me. Its vice is that it has no memory of where buyers appeared and no respect for structure. The only discretionary input is the lookback length, and I fix that in advance and apply it to every chart. On the worked example the reconciliation is decisive. The hand-drawn line projects to fifty-seven eighty-five at bar sixty against a close of fifty-six thirty, which is one point four one average true ranges below it, comfortably past my zero point five buffer, so it is broken. Independently, the regression over the last eleven closes returns a slope of minus zero point six taka per bar. Two constructions with nothing in common except the data, and they agree. That is when there is nothing left to discuss. The rule I actually run is that a broken line with a negative regression slope means the trend is over; a broken line with a still-positive slope means wait one more bar. Requiring agreement costs me a bar of lateness and removes most of the false positives.',
        bn: 'কারণ তারা ভিন্নভাবে ব্যর্থ হয়, তাই তাদের একমত হওয়া সত্যিই তথ্যপূর্ণ। হাতে আঁকা লাইনের একটি প্রকৃত গুণ আছে: এটি ঠিক সেই সুইং লো-দের সম্মান করে যেখানে ক্রেতারা সত্যিই হাজির হয়েছিলেন, আর ঐ বিন্দুগুলো মনে রাখে। এর দোষ হলো এর অ্যাংকর আমিই বাছি, সেগুলো কোথায় দরকার তা দেখার পরে। রিগ্রেশনের চরিত্র উল্টো। এটি জানালার প্রতিটি ক্লোজ ব্যবহার করে ও কোনো বিচারই নয় — ঢাল, ইন্টারসেপ্ট ও স্ট্যান্ডার্ড এরর যান্ত্রিকভাবে ডেটা থেকে আসে — তাই আমিসহ কেউ এতে কারচুপি করতে পারে না। এর দোষ হলো ক্রেতারা কোথায় হাজির হয়েছিলেন তার স্মৃতি এর নেই এবং কাঠামোর প্রতি কোনো সম্মানও নেই। একমাত্র বিবেচনাধীন উপাদান লুকব্যাকের দৈর্ঘ্য, আর সেটি আমি আগেই ঠিক করে প্রতিটি চার্টে প্রয়োগ করি। উদাহরণে মিলকরণটি চূড়ান্ত। হাতে আঁকা লাইন বার ষাটে সাতান্ন পঁচাশিতে প্রক্ষিপ্ত হয়, ক্লোজ ছাপ্পান্ন ত্রিশের বিপরীতে, যা তার এক দশমিক চার এক গড় true range নিচে, আমার শূন্য দশমিক পাঁচ বাফার স্বচ্ছন্দে পেরিয়ে, তাই এটি ভাঙা। স্বাধীনভাবে, শেষ এগারোটি ক্লোজে রিগ্রেশন ফেরত দেয় প্রতি বারে ঋণাত্মক শূন্য দশমিক ছয় টাকার ঢাল। ডেটা ছাড়া আর কোনো মিল নেই এমন দুটি নির্মাণ, আর তারা একমত। তখনই আলোচনার কিছু বাকি থাকে না। আমি আসলে যে নিয়ম চালাই তা হলো ভাঙা লাইন সঙ্গে ঋণাত্মক রিগ্রেশন ঢাল মানে ট্রেন্ড শেষ; ভাঙা লাইন সঙ্গে এখনো ধনাত্মক ঢাল মানে আরও এক বার অপেক্ষা। একমত হওয়া দাবি করলে আমার এক বার দেরি হয় আর অধিকাংশ ভুয়া ধনাত্মক সরে যায়।',
      },
    },
    {
      q: {
        en: 'Your regression channel says the last close is inside the channel. Is that a reassuring reading?',
        bn: 'আপনার রিগ্রেশন চ্যানেল বলে শেষ ক্লোজটি চ্যানেলের ভেতরে। এটি কি আশ্বস্তকর পাঠ?',
      },
      a: {
        en: 'No, and this is the single most common misreading of a regression channel. Inside the channel means only that price is sitting where price usually sits relative to the fitted line — it is a statement about dispersion, not about direction. On the worked example the z-score at the last bar is zero point six six, comfortably inside the plus or minus two band, and it is telling me there is no mean-reversion edge in either direction right now. What it is emphatically not telling me is that the position is healthy, because the channel that price is sitting comfortably inside is falling at zero point six taka per bar. That is more than double the rate at which the primary uptrend was rising, which was zero point two six two five. A comfortable position inside a falling channel is still a falling position. So I read the two outputs as answering two different questions. The slope answers where am I going. The z-score answers is this a good place to enter or exit relative to the channel. Confusing them is how a trader ends up describing a stock in a clean downtrend as consolidating. I would add one technical point on the band itself: the standard error must divide the sum of squared residuals by n minus two, not by n, because two degrees of freedom went into estimating the slope and the intercept. On eleven bars, dividing by n narrows the band by about eleven percent, and every consequence of that error runs in the direction of manufacturing signals that are not there.',
        bn: 'না, আর এটিই রিগ্রেশন চ্যানেলের সবচেয়ে সাধারণ ভুল পাঠ। চ্যানেলের ভেতরে মানে কেবল এই যে ফিট করা লাইনের সাপেক্ষে দাম সেখানেই বসে আছে যেখানে দাম সাধারণত বসে — এটি বিচ্ছুরণ নিয়ে একটি বিবৃতি, দিক নিয়ে নয়। উদাহরণে শেষ বারে z-score শূন্য দশমিক ছয় ছয়, যোগ-বিয়োগ দুইয়ের ব্যান্ডের স্বচ্ছন্দে ভেতরে, আর তা আমাকে বলছে এই মুহূর্তে কোনো দিকেই মিন-রিভার্শনের প্রান্ত নেই। এটি জোর দিয়ে যা বলছে না তা হলো পজিশনটি সুস্থ, কারণ দাম যে চ্যানেলের ভেতরে আরামে বসে আছে সেটি প্রতি বারে শূন্য দশমিক ছয় টাকা করে নামছে। প্রাথমিক আপট্রেন্ড যে হারে উঠছিল, শূন্য দশমিক দুই ছয় দুই পাঁচ, এটি তার দ্বিগুণেরও বেশি। পতনশীল চ্যানেলের ভেতরে আরামদায়ক অবস্থানও একটি পতনশীল অবস্থান। তাই আমি দুটি ফলাফলকে দুটি ভিন্ন প্রশ্নের উত্তর হিসেবে পড়ি। ঢাল উত্তর দেয় আমি কোথায় যাচ্ছি। z-score উত্তর দেয় চ্যানেলের সাপেক্ষে এটি প্রবেশ বা প্রস্থানের ভালো জায়গা কি না। এদের গুলিয়ে ফেলেই একজন ট্রেডার পরিষ্কার ডাউনট্রেন্ডে থাকা শেয়ারকে কনসোলিডেটিং বলে বর্ণনা করেন। ব্যান্ড নিয়ে একটি কারিগরি কথা যোগ করব: স্ট্যান্ডার্ড এররে অবশেষের বর্গের যোগফলকে n বিয়োগ দুই দিয়ে ভাগ করতে হবে, n দিয়ে নয়, কারণ ঢাল ও ইন্টারসেপ্ট আন্দাজ করতে দুটি স্বাধীনতার মাত্রা গেছে। এগারো বারে n দিয়ে ভাগ করলে ব্যান্ড প্রায় এগারো শতাংশ সরু হয়, আর ঐ ভুলের প্রতিটি পরিণতি এমন সংকেত বানানোর দিকে চলে যা আসলে নেই।',
      },
    },
    {
      q: {
        en: 'What does the Dhaka market do to the classical trendline rules you were taught?',
        bn: 'আপনাকে শেখানো ধ্রুপদী ট্রেন্ডলাইনের নিয়মগুলোর সঙ্গে ঢাকার বাজার কী করে?',
      },
      a: {
        en: 'Four things, and each of them changes what I actually do rather than just adding a caveat. First, trends here are shorter and far more news-driven. The multi-year trendlines in Western textbooks assume a deep continuously-traded market where a trend is the aggregate of thousands of independent decisions. Here a trend is often the visible trace of one policy announcement, one dividend expectation, or one large accumulator, and when the driver ends the trend does not decelerate — it stops. A line fitted over two hundred bars routinely has no informational content at bar two hundred and one. Second, low liquidity produces spiky wicks that are not prices anyone traded in size, which is why I anchor on closes rather than on the printed extremes. Third, the floor-price era has to be excluded outright. During that period a large number of counters printed the same price day after day because they were not permitted to print a lower one, so any trendline spanning it is fitted partly to an administrative constraint rather than to supply and demand. I cut the series at the boundary and start a new line on the other side — a line drawn through the floor period is not a weak line, it is a meaningless one. The same logic applies to unadjusted cash dividends, where a twenty percent payout on a fifty-taka share is a mechanical two-taka gap. Fourth, circuit breakers truncate my break test. A price that would have closed six percent below my line may close at the limit instead, and the test then returns intact on the day the market was trying hardest to tell me otherwise. So I read a limit-down close near a trendline as a break until the next unconstrained session proves otherwise.',
        bn: 'চারটি জিনিস, আর প্রতিটিই নিছক একটি সতর্কতা যোগ না করে আমি আসলে কী করি তা বদলে দেয়। প্রথমত, এখানে ট্রেন্ড ছোট ও অনেক বেশি সংবাদচালিত। পশ্চিমা পাঠ্যবইয়ের বহু-বছরের ট্রেন্ডলাইন এমন একটি গভীর, ধারাবাহিকভাবে লেনদেন হওয়া বাজার ধরে নেয় যেখানে ট্রেন্ড হাজারো স্বাধীন সিদ্ধান্তের সমষ্টি। এখানে ট্রেন্ড প্রায়ই একটি নীতি ঘোষণা, একটি লভ্যাংশ প্রত্যাশা বা একজন বড় সংগ্রাহকের দৃশ্যমান ছাপ, আর চালিকাশক্তি শেষ হলে ট্রেন্ড ধীর হয় না — থেমে যায়। দুইশ বারে ফিট করা লাইনের দুইশ একতম বারে প্রায়ই কোনো তথ্যমূল্য থাকে না। দ্বিতীয়ত, কম তারল্য এমন কাঁটাযুক্ত উইক তৈরি করে যা পরিমাণে কারো লেনদেন করা দাম নয়, সেজন্যই আমি ছাপা চরম মানের বদলে ক্লোজে অ্যাংকর করি। তৃতীয়ত, ফ্লোর-প্রাইসের যুগ পুরোপুরি বাদ দিতে হবে। ঐ সময়ে বহু কাউন্টার দিনের পর দিন একই দাম ছেপেছে কারণ তাদের নিচু দাম ছাপার অনুমতি ছিল না, তাই ঐ সময় বিস্তৃত যেকোনো ট্রেন্ডলাইন আংশিকভাবে চাহিদা-সরবরাহ নয়, একটি প্রশাসনিক বাধ্যবাধকতায় ফিট করা। আমি সীমানায় সিরিজ কেটে অন্য পাশে নতুন লাইন শুরু করি — ফ্লোর-কাল ভেদ করে আঁকা লাইন দুর্বল লাইন নয়, অর্থহীন লাইন। একই যুক্তি অসমন্বিত নগদ লভ্যাংশে প্রযোজ্য, যেখানে পঞ্চাশ টাকার শেয়ারে বিশ শতাংশ পরিশোধ মানে যান্ত্রিক দুই টাকার ফাঁক। চতুর্থত, সার্কিট ব্রেকার আমার ভাঙার পরীক্ষাকেই কেটে দেয়। যে দাম আমার লাইনের ছয় শতাংশ নিচে ক্লোজ করত তা বদলে সীমায় ক্লোজ করতে পারে, আর পরীক্ষাটি তখন ঠিক সেদিনই অক্ষত ফেরত দেয় যেদিন বাজার সবচেয়ে জোরে উল্টো কথা বলার চেষ্টা করছিল। তাই আমি ট্রেন্ডলাইনের কাছে লিমিট-ডাউন ক্লোজকে ভাঙন হিসেবেই পড়ি, যতক্ষণ না পরের অবাধ সেশন উল্টোটা প্রমাণ করে।',
      },
    },
  ],

  quiz: [
    {
      q: {
        en: 'An uptrend is defined as:',
        bn: 'আপট্রেন্ডের সংজ্ঞা:',
      },
      options: {
        en: [
          'A series of higher highs',
          'A series of higher highs and higher lows',
          'Price above a rising moving average',
          'Any series that has gained over the period',
        ],
        bn: [
          'উচ্চতর উচ্চের একটি ধারাবাহিকতা',
          'উচ্চতর উচ্চ ও উচ্চতর নিম্নের একটি ধারাবাহিকতা',
          'একটি ঊর্ধ্বমুখী মুভিং অ্যাভারেজের ওপরে দাম',
          'সময়কালে বেড়েছে এমন যেকোনো সিরিজ',
        ],
      },
      answer: 1,
    },
    {
      q: {
        en: 'With anchors at (0, 42.10) and (24, 48.40), the slope of the trendline is:',
        bn: '(0, 42.10) ও (24, 48.40) অ্যাংকরে ট্রেন্ডলাইনের ঢাল:',
      },
      options: {
        en: ['0.2625 BDT per bar', '0.6300 BDT per bar', '0.2386 BDT per bar', '6.30 BDT per bar'],
        bn: ['প্রতি বারে ০.২৬২৫ টাকা', 'প্রতি বারে ০.৬৩০০ টাকা', 'প্রতি বারে ০.২৩৮৬ টাকা', 'প্রতি বারে ৬.৩০ টাকা'],
      },
      answer: 0,
    },
    {
      q: {
        en: 'The normalised slope of that line, with ATR = 1.10, is 0.2386. The correct verdict is:',
        bn: 'ATR = ১.১০ ধরে ঐ লাইনের স্বাভাবিকীকৃত ঢাল ০.২৩৮৬। সঠিক রায়:',
      },
      options: {
        en: [
          'Parabolic — blow-off risk',
          'Steep — not sustainable',
          'Sustainable',
          'Cannot be judged without the chart angle',
        ],
        bn: [
          'প্যারাবলিক — ব্লো-অফ ঝুঁকি',
          'খাড়া — টেকসই নয়',
          'টেকসই',
          'চার্টের কোণ ছাড়া বিচার করা যায় না',
        ],
      },
      answer: 2,
    },
    {
      q: {
        en: 'Why does this book reject the "steeper than 45 degrees is unsustainable" rule?',
        bn: 'এই বই "৪৫ ডিগ্রির চেয়ে খাড়া হলে টেকসই নয়" নিয়মটি বাতিল করে কেন?',
      },
      options: {
        en: [
          'Because trends are never that steep on the DSE',
          'Because the angle depends on screen aspect ratio, y-axis range and bars loaded',
          'Because 45 degrees is too conservative a threshold',
          'Because it only applies to downtrends',
        ],
        bn: [
          'কারণ ডিএসই-তে ট্রেন্ড কখনো এত খাড়া হয় না',
          'কারণ কোণ নির্ভর করে পর্দার অনুপাত, y-অক্ষের পরিসর ও লোড করা বারের ওপর',
          'কারণ ৪৫ ডিগ্রি সীমা হিসেবে বড্ড রক্ষণশীল',
          'কারণ এটি কেবল ডাউনট্রেন্ডে প্রযোজ্য',
        ],
      },
      answer: 1,
    },
    {
      q: {
        en: 'At bar 60 the line projects to 57.85, the close is 56.30 and ATR is 1.10. With a 0.5 ATR buffer, the break test returns:',
        bn: 'বার ৬০-এ লাইন ৫৭.৮৫-এ প্রক্ষিপ্ত, ক্লোজ ৫৬.৩০, ATR ১.১০। ০.৫ ATR বাফারে ভাঙার পরীক্ষা ফেরত দেয়:',
      },
      options: {
        en: [
          'Intact — the miss is inside the buffer',
          'Broken — the close is 1.4091 ATR below the line',
          'Intact — a close cannot break a projected line',
          'Undetermined without volume',
        ],
        bn: [
          'অক্ষত — ফাঁকটি বাফারের ভেতরে',
          'ভাঙা — ক্লোজটি লাইনের ১.৪০৯১ ATR নিচে',
          'অক্ষত — ক্লোজ একটি প্রক্ষেপিত লাইন ভাঙতে পারে না',
          'ভলিউম ছাড়া নির্ধারণ করা যায় না',
        ],
      },
      answer: 1,
    },
    {
      q: {
        en: 'The correct way to construct the return line of a parallel channel is to:',
        bn: 'একটি সমান্তরাল চ্যানেলের রিটার্ন লাইন গঠনের সঠিক উপায়:',
      },
      options: {
        en: [
          'Fit a separate best-fit line through the opposite extremes',
          'Copy the trendline slope and offset it to the extreme close on the opposite side',
          'Place it a fixed percentage above the trendline',
          'Use the previous swing high as a horizontal cap',
        ],
        bn: [
          'বিপরীত চরম বিন্দুগুলোর ভেতর দিয়ে আলাদা একটি সেরা-ফিট লাইন বসানো',
          'ট্রেন্ডলাইনের ঢাল কপি করে বিপরীত পাশের চরম ক্লোজে সরানো',
          'ট্রেন্ডলাইনের একটি নির্দিষ্ট শতাংশ ওপরে বসানো',
          'আগের সুইং হাই-কে অনুভূমিক ছাদ হিসেবে ব্যবহার করা',
        ],
      },
      answer: 1,
    },
    {
      q: {
        en: 'A rising wedge — both lines up-sloping, the lower steeper — typically resolves:',
        bn: 'একটি রাইজিং ওয়েজ — দুটি লাইনই ঊর্ধ্বমুখী, নিচেরটি খাড়া — সাধারণত নিষ্পত্তি হয়:',
      },
      options: {
        en: ['Upward, in the direction of both slopes', 'Downward', 'Sideways into a range', 'It has no directional bias'],
        bn: ['ওপরের দিকে, দুটি ঢালেরই দিকে', 'নিচের দিকে', 'পাশাপাশি একটি রেঞ্জে', 'এর কোনো দিকগত পক্ষপাত নেই'],
      },
      answer: 1,
    },
    {
      q: {
        en: 'In the regression channel, the standard error divides the sum of squared residuals by:',
        bn: 'রিগ্রেশন চ্যানেলে স্ট্যান্ডার্ড এরর অবশেষের বর্গের যোগফলকে ভাগ করে:',
      },
      options: {
        en: [
          '$n$, the number of observations',
          '$n-1$, as for a sample standard deviation',
          '$n-2$, because slope and intercept were both estimated',
          '$n-3$, to be conservative',
        ],
        bn: [
          '$n$, পর্যবেক্ষণের সংখ্যা দিয়ে',
          '$n-1$, নমুনা স্ট্যান্ডার্ড ডেভিয়েশনের মতো',
          '$n-2$, কারণ ঢাল ও ইন্টারসেপ্ট দুটোই আন্দাজ করা হয়েছে',
          '$n-3$, রক্ষণশীল হওয়ার জন্য',
        ],
      },
      answer: 2,
    },
    {
      q: {
        en: 'The regression over bars 50–60 gives slope −0.60 and a z-score of 0.6564 at the last close. The correct reading is:',
        bn: 'বার ৫০–৬০-এ রিগ্রেশন দেয় ঢাল −০.৬০ ও শেষ ক্লোজে z-score ০.৬৫৬৪। সঠিক পাঠ:',
      },
      options: {
        en: [
          'Price is inside the channel, so the position is healthy',
          'Price is inside a falling channel — no mean-reversion edge, and the direction is down',
          'Price is stretched above the channel and should be sold',
          'The z-score overrides the slope',
        ],
        bn: [
          'দাম চ্যানেলের ভেতরে, তাই পজিশনটি সুস্থ',
          'দাম একটি পতনশীল চ্যানেলের ভেতরে — কোনো মিন-রিভার্শন প্রান্ত নেই, আর দিক নিচের দিকে',
          'দাম চ্যানেলের ওপরে টানটান ও বিক্রি করা উচিত',
          'z-score ঢালকে অগ্রাহ্য করে',
        ],
      },
      answer: 1,
    },
    {
      q: {
        en: 'A DSE counter closes at the lower circuit limit on a day price would otherwise have closed well below your trendline. You should:',
        bn: 'একটি ডিএসই কাউন্টার এমন দিনে নিম্ন সার্কিট সীমায় ক্লোজ করে যেদিন নইলে দাম আপনার ট্রেন্ডলাইনের অনেক নিচে ক্লোজ করত। আপনার করা উচিত:',
      },
      options: {
        en: [
          'Record the line as intact, since the close did not breach it',
          'Read it as a break until the next unconstrained session proves otherwise',
          'Redraw the line through the limit close',
          'Ignore the session entirely and skip the bar',
        ],
        bn: [
          'লাইনটি অক্ষত হিসেবে লিপিবদ্ধ করা, যেহেতু ক্লোজ তা ভাঙেনি',
          'পরের অবাধ সেশন উল্টো না বলা পর্যন্ত একে ভাঙন হিসেবে পড়া',
          'সীমার ক্লোজ দিয়ে লাইনটি নতুন করে আঁকা',
          'সেশনটি পুরোপুরি উপেক্ষা করে বারটি বাদ দেওয়া',
        ],
      },
      answer: 1,
    },
  ],
};
