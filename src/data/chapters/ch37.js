/**
 * Chapter 37 — Stochastic Oscillator
 * Part III, Technical Analysis.
 */

export default {
  n: 37,
  tools: [],

  excelSheet: {
    filename: 'ch37-stochastic-oscillator.xlsx',
    sheetName: 'Stochastic',
    cells: [
      { cell: 'A1', v: '— Parameters —' },
      { cell: 'A2', v: 'n (lookback)' }, { cell: 'B2', v: 10 },
      { cell: 'A3', v: 'K smoothing' }, { cell: 'B3', v: 3 },
      { cell: 'A4', v: 'D periods' }, { cell: 'B4', v: 3 },
      { cell: 'C2', v: 'ATR proxy (BDT)' }, { cell: 'D2', v: 1.56 },
      { cell: 'C3', v: 'Guard multiple' }, { cell: 'D3', v: 2 },
      { cell: 'C4', v: 'Min usable range' }, { cell: 'D4', f: 'D2*D3' },

      { cell: 'A6', v: 'Bar' }, { cell: 'B6', v: 'High' }, { cell: 'C6', v: 'Low' },
      { cell: 'D6', v: 'Close' }, { cell: 'E6', v: 'n-High' }, { cell: 'F6', v: 'n-Low' },
      { cell: 'G6', v: 'Range' }, { cell: 'H6', v: 'Guard' }, { cell: 'I6', v: 'Raw %K' },
      { cell: 'J6', v: 'Slow %K' }, { cell: 'K6', v: '%D' }, { cell: 'L6', v: 'Zone' },

      { cell: 'A7', v: 1 }, { cell: 'B7', v: 47.9 }, { cell: 'C7', v: 46.8 }, { cell: 'D7', v: 47.2 },
      { cell: 'A8', v: 2 }, { cell: 'B8', v: 48.3 }, { cell: 'C8', v: 47.0 }, { cell: 'D8', v: 48.1 },
      { cell: 'A9', v: 3 }, { cell: 'B9', v: 48.6 }, { cell: 'C9', v: 47.6 }, { cell: 'D9', v: 47.8 },
      { cell: 'A10', v: 4 }, { cell: 'B10', v: 48.2 }, { cell: 'C10', v: 46.9 }, { cell: 'D10', v: 47.1 },
      { cell: 'A11', v: 5 }, { cell: 'B11', v: 47.6 }, { cell: 'C11', v: 46.5 }, { cell: 'D11', v: 46.8 },
      { cell: 'A12', v: 6 }, { cell: 'B12', v: 48.4 }, { cell: 'C12', v: 46.7 }, { cell: 'D12', v: 48.2 },
      { cell: 'A13', v: 7 }, { cell: 'B13', v: 49.3 }, { cell: 'C13', v: 48.0 }, { cell: 'D13', v: 49.1 },
      { cell: 'A14', v: 8 }, { cell: 'B14', v: 50.2 }, { cell: 'C14', v: 48.8 }, { cell: 'D14', v: 50.0 },
      { cell: 'A15', v: 9 }, { cell: 'B15', v: 51.4 }, { cell: 'C15', v: 49.7 }, { cell: 'D15', v: 51.2 },

      { cell: 'A16', v: 10 }, { cell: 'B16', v: 52.0 }, { cell: 'C16', v: 50.6 }, { cell: 'D16', v: 51.0 },
      { cell: 'E16', f: 'MAX(B7:B16)' }, { cell: 'F16', f: 'MIN(C7:C16)' }, { cell: 'G16', f: 'E16-F16' },
      { cell: 'H16', f: 'IF(G16>=$D$4,"OK","TOO NARROW")' },
      { cell: 'I16', f: 'IF(H16="OK",(D16-F16)/G16*100,"")' },

      { cell: 'A17', v: 11 }, { cell: 'B17', v: 51.8 }, { cell: 'C17', v: 50.1 }, { cell: 'D17', v: 50.4 },
      { cell: 'E17', f: 'MAX(B8:B17)' }, { cell: 'F17', f: 'MIN(C8:C17)' }, { cell: 'G17', f: 'E17-F17' },
      { cell: 'H17', f: 'IF(G17>=$D$4,"OK","TOO NARROW")' },
      { cell: 'I17', f: 'IF(H17="OK",(D17-F17)/G17*100,"")' },

      { cell: 'A18', v: 12 }, { cell: 'B18', v: 52.6 }, { cell: 'C18', v: 50.3 }, { cell: 'D18', v: 52.4 },
      { cell: 'E18', f: 'MAX(B9:B18)' }, { cell: 'F18', f: 'MIN(C9:C18)' }, { cell: 'G18', f: 'E18-F18' },
      { cell: 'H18', f: 'IF(G18>=$D$4,"OK","TOO NARROW")' },
      { cell: 'I18', f: 'IF(H18="OK",(D18-F18)/G18*100,"")' },
      { cell: 'J18', f: 'IF(COUNT(I16:I18)=3,AVERAGE(I16:I18),"")' },

      { cell: 'A19', v: 13 }, { cell: 'B19', v: 53.9 }, { cell: 'C19', v: 52.2 }, { cell: 'D19', v: 53.7 },
      { cell: 'E19', f: 'MAX(B10:B19)' }, { cell: 'F19', f: 'MIN(C10:C19)' }, { cell: 'G19', f: 'E19-F19' },
      { cell: 'H19', f: 'IF(G19>=$D$4,"OK","TOO NARROW")' },
      { cell: 'I19', f: 'IF(H19="OK",(D19-F19)/G19*100,"")' },
      { cell: 'J19', f: 'IF(COUNT(I17:I19)=3,AVERAGE(I17:I19),"")' },

      { cell: 'A20', v: 14 }, { cell: 'B20', v: 54.8 }, { cell: 'C20', v: 53.1 }, { cell: 'D20', v: 54.5 },
      { cell: 'E20', f: 'MAX(B11:B20)' }, { cell: 'F20', f: 'MIN(C11:C20)' }, { cell: 'G20', f: 'E20-F20' },
      { cell: 'H20', f: 'IF(G20>=$D$4,"OK","TOO NARROW")' },
      { cell: 'I20', f: 'IF(H20="OK",(D20-F20)/G20*100,"")' },
      { cell: 'J20', f: 'IF(COUNT(I18:I20)=3,AVERAGE(I18:I20),"")' },
      { cell: 'K20', f: 'IF(COUNT(J18:J20)=3,AVERAGE(J18:J20),"")' },
      { cell: 'L20', f: 'IF(K20="","",IF(J20>=80,"OVERBOUGHT ZONE",IF(J20<=20,"OVERSOLD ZONE","MID-RANGE")))' },

      { cell: 'A21', v: 15 }, { cell: 'B21', v: 55.6 }, { cell: 'C21', v: 54.0 }, { cell: 'D21', v: 55.4 },
      { cell: 'E21', f: 'MAX(B12:B21)' }, { cell: 'F21', f: 'MIN(C12:C21)' }, { cell: 'G21', f: 'E21-F21' },
      { cell: 'H21', f: 'IF(G21>=$D$4,"OK","TOO NARROW")' },
      { cell: 'I21', f: 'IF(H21="OK",(D21-F21)/G21*100,"")' },
      { cell: 'J21', f: 'IF(COUNT(I19:I21)=3,AVERAGE(I19:I21),"")' },
      { cell: 'K21', f: 'IF(COUNT(J19:J21)=3,AVERAGE(J19:J21),"")' },
      { cell: 'L21', f: 'IF(K21="","",IF(J21>=80,"OVERBOUGHT ZONE",IF(J21<=20,"OVERSOLD ZONE","MID-RANGE")))' },

      { cell: 'A22', v: 16 }, { cell: 'B22', v: 56.2 }, { cell: 'C22', v: 54.9 }, { cell: 'D22', v: 55.1 },
      { cell: 'E22', f: 'MAX(B13:B22)' }, { cell: 'F22', f: 'MIN(C13:C22)' }, { cell: 'G22', f: 'E22-F22' },
      { cell: 'H22', f: 'IF(G22>=$D$4,"OK","TOO NARROW")' },
      { cell: 'I22', f: 'IF(H22="OK",(D22-F22)/G22*100,"")' },
      { cell: 'J22', f: 'IF(COUNT(I20:I22)=3,AVERAGE(I20:I22),"")' },
      { cell: 'K22', f: 'IF(COUNT(J20:J22)=3,AVERAGE(J20:J22),"")' },
      { cell: 'L22', f: 'IF(K22="","",IF(J22>=80,"OVERBOUGHT ZONE",IF(J22<=20,"OVERSOLD ZONE","MID-RANGE")))' },

      { cell: 'A23', v: 17 }, { cell: 'B23', v: 55.8 }, { cell: 'C23', v: 53.7 }, { cell: 'D23', v: 54.0 },
      { cell: 'E23', f: 'MAX(B14:B23)' }, { cell: 'F23', f: 'MIN(C14:C23)' }, { cell: 'G23', f: 'E23-F23' },
      { cell: 'H23', f: 'IF(G23>=$D$4,"OK","TOO NARROW")' },
      { cell: 'I23', f: 'IF(H23="OK",(D23-F23)/G23*100,"")' },
      { cell: 'J23', f: 'IF(COUNT(I21:I23)=3,AVERAGE(I21:I23),"")' },
      { cell: 'K23', f: 'IF(COUNT(J21:J23)=3,AVERAGE(J21:J23),"")' },
      { cell: 'L23', f: 'IF(K23="","",IF(J23>=80,"OVERBOUGHT ZONE",IF(J23<=20,"OVERSOLD ZONE","MID-RANGE")))' },

      { cell: 'A24', v: 18 }, { cell: 'B24', v: 55.0 }, { cell: 'C24', v: 52.8 }, { cell: 'D24', v: 53.2 },
      { cell: 'E24', f: 'MAX(B15:B24)' }, { cell: 'F24', f: 'MIN(C15:C24)' }, { cell: 'G24', f: 'E24-F24' },
      { cell: 'H24', f: 'IF(G24>=$D$4,"OK","TOO NARROW")' },
      { cell: 'I24', f: 'IF(H24="OK",(D24-F24)/G24*100,"")' },
      { cell: 'J24', f: 'IF(COUNT(I22:I24)=3,AVERAGE(I22:I24),"")' },
      { cell: 'K24', f: 'IF(COUNT(J22:J24)=3,AVERAGE(J22:J24),"")' },
      { cell: 'L24', f: 'IF(K24="","",IF(J24>=80,"OVERBOUGHT ZONE",IF(J24<=20,"OVERSOLD ZONE","MID-RANGE")))' },

      { cell: 'A25', v: 19 }, { cell: 'B25', v: 54.1 }, { cell: 'C25', v: 52.4 }, { cell: 'D25', v: 53.9 },
      { cell: 'E25', f: 'MAX(B16:B25)' }, { cell: 'F25', f: 'MIN(C16:C25)' }, { cell: 'G25', f: 'E25-F25' },
      { cell: 'H25', f: 'IF(G25>=$D$4,"OK","TOO NARROW")' },
      { cell: 'I25', f: 'IF(H25="OK",(D25-F25)/G25*100,"")' },
      { cell: 'J25', f: 'IF(COUNT(I23:I25)=3,AVERAGE(I23:I25),"")' },
      { cell: 'K25', f: 'IF(COUNT(J23:J25)=3,AVERAGE(J23:J25),"")' },
      { cell: 'L25', f: 'IF(K25="","",IF(J25>=80,"OVERBOUGHT ZONE",IF(J25<=20,"OVERSOLD ZONE","MID-RANGE")))' },

      { cell: 'A26', v: 20 }, { cell: 'B26', v: 54.6 }, { cell: 'C26', v: 53.0 }, { cell: 'D26', v: 53.4 },
      { cell: 'E26', f: 'MAX(B17:B26)' }, { cell: 'F26', f: 'MIN(C17:C26)' }, { cell: 'G26', f: 'E26-F26' },
      { cell: 'H26', f: 'IF(G26>=$D$4,"OK","TOO NARROW")' },
      { cell: 'I26', f: 'IF(H26="OK",(D26-F26)/G26*100,"")' },
      { cell: 'J26', f: 'IF(COUNT(I24:I26)=3,AVERAGE(I24:I26),"")' },
      { cell: 'K26', f: 'IF(COUNT(J24:J26)=3,AVERAGE(J24:J26),"")' },
      { cell: 'L26', f: 'IF(K26="","",IF(J26>=80,"OVERBOUGHT ZONE",IF(J26<=20,"OVERSOLD ZONE","MID-RANGE")))' },

      { cell: 'A28', v: '— Diagnostics on the last bar —' },
      { cell: 'A29', v: 'Range / ATR' }, { cell: 'B29', f: 'G26/$D$2' },
      { cell: 'A30', v: '%K points per BDT 1' }, { cell: 'B30', f: '100/G26' },
      { cell: 'A31', v: '%K points per tick (0.10)' }, { cell: 'B31', f: 'B30*0.1' },
      { cell: 'A32', v: 'Bars blocked by guard' }, { cell: 'B32', f: 'COUNTIF(H16:H26,"TOO NARROW")' },
      { cell: 'A33', v: 'Signal state' },
      {
        cell: 'B33',
        f: 'IF(OR(J26="",K26=""),"INSUFFICIENT DATA",IF(J26>K26,"%K above %D","%K below %D"))',
      },
    ],
  },

  objectives: {
    en: [
      'Derive %K as the position of the close within the n-period range, and %D as its 3-period average.',
      'Distinguish fast, slow and full stochastic precisely, and state why slow %K equals fast %D.',
      'Explain why stochastic and RSI disagree, and treat the disagreement as information rather than error.',
      'Read the 20/80 zones as range context, and recognise the pinned oscillator of an embedded trend.',
      'Apply a minimum-range guard so that a collapsing denominator never produces a tradeable signal.',
    ],
    bn: [
      'n-পর্বের রেঞ্জের ভেতরে ক্লোজের অবস্থান হিসেবে %K এবং তার ৩-পর্বের গড় হিসেবে %D উদ্ভাবন করা।',
      'ফাস্ট, স্লো ও ফুল স্টোক্যাস্টিক সুনির্দিষ্টভাবে আলাদা করা, এবং কেন স্লো %K ফাস্ট %D-এর সমান তা বলা।',
      'কেন স্টোক্যাস্টিক ও RSI অমিল দেখায় তা ব্যাখ্যা করা, এবং ঐ অমিলকে ভুল নয় বরং তথ্য হিসেবে গণ্য করা।',
      '২০/৮০ অঞ্চলকে রেঞ্জ-প্রেক্ষাপট হিসেবে পড়া, এবং এমবেডেড ট্রেন্ডে আটকে থাকা অসিলেটর চিনতে পারা।',
      'একটি ন্যূনতম-রেঞ্জ গার্ড প্রয়োগ করা যাতে ভেঙে পড়া হর কখনো লেনদেনযোগ্য সংকেত তৈরি না করে।',
    ],
  },

  blocks: {
    theory: {
      en: `Chapter 36 built an oscillator out of the **magnitude** of price changes. This chapter builds one out of the **location** of the close. They are not two versions of the same measurement, and the most useful thing you will learn here is what to do when they disagree.

### The question Lane's oscillator asks

George Lane's stochastic answers one question and only one:

**Where did today's close land inside the recent trading range?**

Not how far price moved. Not how fast. Simply: of the distance between the lowest low and the highest high of the last $n$ sessions, what fraction of it sits below today's close?

The premise underneath is a claim about who controls the end of the session. In a genuine uptrend, buyers are willing to pay up into the close, so closes cluster near the top of the range. In a downtrend, sellers press into the close and closes cluster near the bottom. **The oscillator is therefore a crude measure of end-of-session control**, and that is why it is computed on the close rather than on any intraday statistic.

This premise is defensible but not universal. On the DSE it is weakest exactly where it matters — see below.

### Building %K

Take the last $n$ bars. Find the highest high $H_n$ and the lowest low $L_n$ across those bars, including today. Then:

$$\\%K = \\frac{C - L_n}{H_n - L_n} \\times 100$$

The output is bounded to $[0, 100]$ by construction, because $C$ is itself one of the closes inside a window whose extremes are $H_n$ and $L_n$. A print of 100 means today closed at the top of the entire $n$-period range. A print of 0 means it closed at the very bottom. **Both are statements about position, not about strength.**

Note what does *not* appear in that expression: yesterday's close, the size of any move, or any measure of volatility. The formula does not care whether the range was built in one violent session or twenty quiet ones.

### %D, and why there are three stochastics

Raw %K is unusable as-is. It jumps around because a single new high or low can shift the denominator by a large fraction. So Lane smoothed it:

$$\\%D = \\text{SMA}_3(\\%K)$$

That smoothing step is the source of all the naming confusion, and it is worth stating exactly:

| Variant | %K plotted | %D plotted |
|---|---|---|
| **Fast** | raw %K | $\\text{SMA}_3(\\text{raw }\\%K)$ |
| **Slow** | $\\text{SMA}_3(\\text{raw }\\%K)$ | $\\text{SMA}_3(\\text{SMA}_3(\\text{raw }\\%K))$ |
| **Full** $(n, s, d)$ | $\\text{SMA}_s(\\text{raw }\\%K)$ | $\\text{SMA}_d(\\text{slow }\\%K)$ |

**Slow %K is exactly fast %D.** The slow variant is nothing more than the fast variant with the plot shifted one smoothing step to the right and a fresh average drawn on top. Full stochastic simply exposes all three parameters — lookback $n$, %K smoothing $s$, and %D periods $d$ — instead of hard-coding $s = d = 3$. The common "14, 3, 3" is a full stochastic that happens to reproduce the slow variant.

**Almost every chart platform defaults to slow, and almost every beginner believes they are looking at fast.** That mismatch alone explains a large share of "the indicator gave a different signal on my screen" arguments.

### Where it disagrees with RSI

Both indicators run 0–100 and both have conventional zones, which invites the mistake of treating them as interchangeable. They are built from different raw material:

- **RSI** (Chapter 36) is a ratio of average gain to average loss. It is a statement about the *magnitude* of moves.
- **Stochastic** is a position within a range. It is a statement about *where the close sits*.

Consider a stock that grinds upward in a long series of small gains and then has one flat session that closes mid-range. RSI stays elevated — the gains were persistent and the losses small. Stochastic drops sharply — the close is no longer near the top of the window. Neither is wrong. They are measuring different things.

The reverse case is more instructive. A stock falls hard for three sessions, then puts in one session that closes at the high of that three-day collapse. RSI is still depressed, because the average loss over the lookback is large. Stochastic snaps toward 100, because the close is at the top of the range. **The stochastic has detected a change in who controls the close before RSI can register a change in magnitude.** Sometimes that is early. Often it is noise.

Treat the disagreement as information about *which kind* of move is happening, not as a defect to be resolved by picking a favourite.

### 20 and 80 are range context, not instructions

The single most common error, and it is the same error Chapter 36 flagged for RSI's 30/70: reading **80 as "sell" and 20 as "buy."**

What the print actually says is: *closes have been landing near the top (or bottom) of the recent range.* In a sideways market that is genuinely useful — it says price is at the edge of a range that has been holding, and the odds of mean reversion inside that range are reasonable. In a trending market it says the trend is doing exactly what a trend does.

**Reading 80 as a sell instruction in a trend is a systematic way to exit winners early.** The worked example in §37.3 puts a price on it.

### The embedded trend, again

Stochastic saturates. In a strong uptrend the close lands near the top of the range day after day, and %K sits at 90-plus for extended stretches. This is the same embedded-trend problem RSI has, with one difference that matters: **RSI compresses toward its extremes but rarely touches them; stochastic can and does sit at exactly 100.**

When %K prints 100 on consecutive sessions, the indicator has stopped carrying information. The close is at the top of the range, which you already knew from the chart. It cannot go higher. Any further strength is invisible to the oscillator.

The lesson usually drawn from this — "so use a longer lookback" — is only half right. A longer lookback saturates less often but responds later, and on a thin market the later response is often the whole move. The honest response is to **suspend the 20/80 reading entirely while a trend is confirmed by the tools of Chapter 34**, and read only crossovers.

### Divergence

When price makes a higher high and %K makes a lower high, the close is no longer reaching as far into its range as it did at the previous peak. That is a real observation and a legitimate use of the tool. It is also the single most over-claimed signal in technical analysis, and the failure rates deserve their own treatment — **Chapter 44**.

### The denominator, which is a numerical hazard rather than a nuance

Return to the formula and look at $H_n - L_n$ in the denominator. Nothing constrains it to be large. In a quiet market it can be a few ticks. In a locked market it can be zero.

Two consequences follow immediately:

**The sensitivity of %K is inversely proportional to the range.** Differentiate: a one-taka change in the close moves %K by $100 / (H_n - L_n)$ points. On a range of 6.10 that is 16.4 points per taka. On a range of 0.20 it is **500 points per taka** — a single minimum tick swings the oscillator by 50 points.

**At zero range, %K is undefined.** Software either returns an error, silently substitutes 50, or propagates a division-by-zero that reappears three columns later as a plausible-looking number. All three outcomes are worse than no reading at all.

### DSE: the denominator breaks here more than anywhere

This is the DSE-specific caveat of this chapter, and it is not a footnote.

**On illiquid DSE counters, the $n$-period high–low range is frequently a handful of ticks.** A stock that trades in a 20-paisa band for ten sessions produces a stochastic that flips between 0 and 100 on single-tick prints, and a smoothed %D that looks like a tradeable oscillation. It is not an oscillation. It is quantisation noise in a stock that has not moved.

**During the floor-price era the range was routinely exactly zero.** With a hard floor and no bids above it, high, low, and close were the same number for weeks. %K was mathematically undefined. Any platform that printed a value for those bars printed a fiction.

**Circuit limits compress the range in the other direction.** A stock locked limit-up closes at its high, so %K prints 100 by construction — not because buyers pressed into the close, but because the exchange did not permit a higher print. The oscillator saturates for reasons that have nothing to do with Lane's premise.

The rule follows directly, and you should implement it before you implement the indicator:

**Require $H_n - L_n \\geq g \\times \\text{ATR}$ (with $g \\approx 2$), or a minimum tick count, whichever is larger. If the range fails the guard, the oscillator returns nothing — not 50, not the last value, nothing.** Chapter 39 supplies ATR properly. Until then, the average daily high–low is an adequate proxy.

This is the discipline of Chapter 5 applied to an indicator instead of an earnings number: before you read the output, ask what would have to be true for the input to be meaningful.`,
      bn: `অধ্যায় ৩৬ দামের পরিবর্তনের **মাত্রা** থেকে একটি অসিলেটর তৈরি করেছে। এই অধ্যায় ক্লোজের **অবস্থান** থেকে একটি তৈরি করে। এরা একই পরিমাপের দুটি সংস্করণ নয়, আর এখানে আপনি যা শিখবেন তার সবচেয়ে কার্যকর অংশ হলো — এরা যখন অমিল দেখায় তখন কী করতে হবে।

### লেনের অসিলেটর যে প্রশ্ন করে

জর্জ লেনের স্টোক্যাস্টিক একটি প্রশ্নেরই উত্তর দেয়, কেবল একটিরই:

**সাম্প্রতিক লেনদেন রেঞ্জের ভেতরে আজকের ক্লোজ কোথায় পড়ল?**

দাম কতদূর গেল তা নয়। কত দ্রুত গেল তাও নয়। কেবল: শেষ $n$ সেশনের সর্বনিম্ন লো ও সর্বোচ্চ হাই-এর মধ্যকার দূরত্বের কত ভগ্নাংশ আজকের ক্লোজের নিচে আছে?

এর নিচের ধারণাটি সেশনের শেষটা কে নিয়ন্ত্রণ করে সে সম্পর্কে একটি দাবি। প্রকৃত ঊর্ধ্বমুখী প্রবণতায় ক্রেতারা ক্লোজ পর্যন্ত বাড়তি দাম দিতে রাজি থাকেন, তাই ক্লোজগুলো রেঞ্জের ওপরের দিকে জড়ো হয়। নিম্নমুখী প্রবণতায় বিক্রেতারা ক্লোজ পর্যন্ত চাপ দেন এবং ক্লোজগুলো নিচের দিকে জড়ো হয়। **তাই অসিলেটরটি সেশন-শেষের নিয়ন্ত্রণের একটি স্থূল পরিমাপ**, আর এ কারণেই এটি কোনো ইন্ট্রাডে পরিসংখ্যানে নয়, ক্লোজে গণিত হয়।

ধারণাটি সমর্থনযোগ্য কিন্তু সর্বজনীন নয়। ডিএসই-তে এটি ঠিক সেখানেই সবচেয়ে দুর্বল যেখানে এর গুরুত্ব সবচেয়ে বেশি — নিচে দেখুন।

### %K তৈরি করা

শেষ $n$টি বার নিন। ঐ বারগুলোর মধ্যে, আজকেরটিসহ, সর্বোচ্চ হাই $H_n$ ও সর্বনিম্ন লো $L_n$ বের করুন। তারপর:

$$\\%K = \\frac{C - L_n}{H_n - L_n} \\times 100$$

গঠনগতভাবেই ফলাফল $[0, 100]$-এ সীমাবদ্ধ, কারণ $C$ নিজেই এমন একটি জানালার ভেতরের একটি ক্লোজ যার প্রান্ত $H_n$ ও $L_n$। ১০০ মানে আজ সম্পূর্ণ $n$-পর্ব রেঞ্জের চূড়ায় ক্লোজ হয়েছে। ০ মানে একেবারে তলায়। **দুটোই অবস্থান সম্পর্কে বক্তব্য, শক্তি সম্পর্কে নয়।**

লক্ষ করুন ঐ প্রকাশে কী *নেই*: গতকালের ক্লোজ, কোনো নড়াচড়ার আকার, বা অস্থিরতার কোনো পরিমাপ। রেঞ্জটি একটি হিংস্র সেশনে তৈরি হয়েছে না বিশটি শান্ত সেশনে — সূত্রটি তা নিয়ে ভাবে না।

### %D, এবং কেন তিনটি স্টোক্যাস্টিক আছে

কাঁচা %K যেমন আছে তেমন ব্যবহারযোগ্য নয়। এটি লাফায়, কারণ একটিমাত্র নতুন হাই বা লো হরকে বড় ভগ্নাংশে সরিয়ে দিতে পারে। তাই লেন একে মসৃণ করলেন:

$$\\%D = \\text{SMA}_3(\\%K)$$

ঐ মসৃণকরণের ধাপটিই নামকরণের সমস্ত বিভ্রান্তির উৎস, আর তা সুনির্দিষ্টভাবে বলা দরকার:

| ধরন | আঁকা %K | আঁকা %D |
|---|---|---|
| **ফাস্ট** | কাঁচা %K | $\\text{SMA}_3(\\text{raw }\\%K)$ |
| **স্লো** | $\\text{SMA}_3(\\text{raw }\\%K)$ | $\\text{SMA}_3(\\text{SMA}_3(\\text{raw }\\%K))$ |
| **ফুল** $(n, s, d)$ | $\\text{SMA}_s(\\text{raw }\\%K)$ | $\\text{SMA}_d(\\text{slow }\\%K)$ |

**স্লো %K হুবহু ফাস্ট %D।** স্লো ধরনটি ফাস্ট ধরনেরই রূপ, যেখানে প্লটটি একটি মসৃণকরণ ধাপ ডানে সরানো এবং তার ওপর একটি নতুন গড় আঁকা। ফুল স্টোক্যাস্টিক কেবল তিনটি প্যারামিটারই খুলে দেয় — লুকব্যাক $n$, %K মসৃণকরণ $s$, ও %D পর্ব $d$ — $s = d = 3$ বেঁধে দেওয়ার বদলে। প্রচলিত "১৪, ৩, ৩" একটি ফুল স্টোক্যাস্টিক যা কাকতালীয়ভাবে স্লো ধরনটিই পুনরুৎপাদন করে।

**প্রায় প্রতিটি চার্ট প্ল্যাটফর্ম ডিফল্টে স্লো দেখায়, আর প্রায় প্রতিটি নতুন ব্যবহারকারী বিশ্বাস করেন তিনি ফাস্ট দেখছেন।** কেবল ঐ অমিলটিই "আমার স্ক্রিনে নির্দেশকটি অন্য সংকেত দিয়েছে" জাতীয় তর্কের একটি বড় অংশ ব্যাখ্যা করে।

### কোথায় এটি RSI-এর সঙ্গে অমিল দেখায়

দুটো নির্দেশকই ০–১০০-এ চলে ও দুটোরই প্রচলিত অঞ্চল আছে, যা এদের বিনিময়যোগ্য ভাবার ভুলটি ডেকে আনে। এরা ভিন্ন কাঁচামাল থেকে তৈরি:

- **RSI** (অধ্যায় ৩৬) হলো গড় লাভের সঙ্গে গড় ক্ষতির অনুপাত। এটি নড়াচড়ার *মাত্রা* সম্পর্কে বক্তব্য।
- **স্টোক্যাস্টিক** হলো একটি রেঞ্জের ভেতরের অবস্থান। এটি *ক্লোজ কোথায় বসে* সে সম্পর্কে বক্তব্য।

এমন একটি শেয়ার ভাবুন যা ছোট ছোট লাভের দীর্ঘ ধারায় উঠছে, তারপর একটি সমতল সেশনে রেঞ্জের মাঝখানে ক্লোজ করল। RSI উঁচুতেই থাকে — লাভগুলো ধারাবাহিক ছিল আর ক্ষতি ছোট। স্টোক্যাস্টিক তীব্রভাবে নামে — ক্লোজটি আর জানালার চূড়ার কাছে নেই। কোনোটিই ভুল নয়। এরা ভিন্ন জিনিস মাপছে।

উল্টো ক্ষেত্রটি আরও শিক্ষণীয়। একটি শেয়ার তিন সেশন জোরে পড়ল, তারপর একটি সেশনে ঐ তিন দিনের পতনের হাই-তে ক্লোজ করল। RSI এখনো নিচে, কারণ লুকব্যাকজুড়ে গড় ক্ষতি বড়। স্টোক্যাস্টিক ১০০-র দিকে ছিটকে ওঠে, কারণ ক্লোজ রেঞ্জের চূড়ায়। **RSI মাত্রার পরিবর্তন নিবন্ধন করার আগেই স্টোক্যাস্টিক ধরে ফেলেছে যে ক্লোজের নিয়ন্ত্রণ কার হাতে তা বদলেছে।** কখনো এটি আগাম। প্রায়ই এটি শব্দমাত্র।

অমিলটিকে *কোন ধরনের* নড়াচড়া ঘটছে সে সম্পর্কে তথ্য হিসেবে দেখুন, পছন্দের একটি বেছে নিয়ে মিটিয়ে ফেলার মতো ত্রুটি হিসেবে নয়।

### ২০ ও ৮০ রেঞ্জ-প্রেক্ষাপট, নির্দেশ নয়

সবচেয়ে প্রচলিত ভুল, আর এটি ঠিক সেই ভুল যা অধ্যায় ৩৬ RSI-এর ৩০/৭০-এর জন্য চিহ্নিত করেছে: **৮০-কে "বিক্রি" আর ২০-কে "কেনা" পড়া।**

সংখ্যাটি আসলে যা বলে তা হলো: *ক্লোজগুলো সাম্প্রতিক রেঞ্জের ওপরের (বা নিচের) দিকে পড়ছে।* পাশাপাশি চলা বাজারে এটি সত্যিই কাজের — এটি বলে দাম এমন একটি রেঞ্জের প্রান্তে যা টিকে আছে, আর ঐ রেঞ্জের ভেতরে গড়ে ফেরার সম্ভাবনা যুক্তিসঙ্গত। প্রবণতাযুক্ত বাজারে এটি বলে প্রবণতা ঠিক তা-ই করছে যা প্রবণতা করে।

**প্রবণতায় ৮০-কে বিক্রির নির্দেশ পড়া হলো লাভজনক অবস্থান থেকে আগেভাগে বেরিয়ে যাওয়ার একটি নিয়মতান্ত্রিক উপায়।** §৩৭.৩-এর উদাহরণ তার দাম বসিয়ে দেয়।

### আবার সেই এমবেডেড ট্রেন্ড

স্টোক্যাস্টিক পরিপৃক্ত হয়। শক্তিশালী ঊর্ধ্বমুখী প্রবণতায় ক্লোজ দিনের পর দিন রেঞ্জের চূড়ার কাছে পড়ে, আর %K দীর্ঘ সময় ৯০-এর ওপরে বসে থাকে। এটি RSI-এরই এমবেডেড-ট্রেন্ড সমস্যা, একটি গুরুত্বপূর্ণ পার্থক্যসহ: **RSI তার প্রান্তের দিকে সংকুচিত হয় কিন্তু কদাচিৎ স্পর্শ করে; স্টোক্যাস্টিক ঠিক ১০০-তে বসে থাকতে পারে এবং থাকেও।**

পরপর সেশনে %K যখন ১০০ দেখায়, নির্দেশকটি তথ্য বহন করা বন্ধ করে দিয়েছে। ক্লোজ রেঞ্জের চূড়ায়, যা আপনি চার্ট দেখেই জানতেন। এটি আর ওপরে যেতে পারে না। এরপরের যেকোনো শক্তি অসিলেটরের কাছে অদৃশ্য।

এ থেকে সাধারণত যে শিক্ষা নেওয়া হয় — "তাহলে লম্বা লুকব্যাক ব্যবহার করুন" — তা অর্ধেক ঠিক। লম্বা লুকব্যাক কম পরিপৃক্ত হয় কিন্তু দেরিতে সাড়া দেয়, আর পাতলা বাজারে ঐ দেরির মধ্যেই প্রায়ই পুরো নড়াচড়াটা থাকে। সৎ প্রতিক্রিয়া হলো **অধ্যায় ৩৪-এর হাতিয়ার দিয়ে প্রবণতা নিশ্চিত হওয়া পর্যন্ত ২০/৮০ পড়াই সম্পূর্ণ স্থগিত রাখা**, এবং কেবল ক্রসওভার পড়া।

### ডাইভারজেন্স

দাম যখন উঁচু হাই করে আর %K নিচু হাই করে, তখন ক্লোজ আগের চূড়ার মতো তার রেঞ্জের ভেতরে দূর পর্যন্ত পৌঁছাচ্ছে না। এটি একটি প্রকৃত পর্যবেক্ষণ ও টুলটির একটি বৈধ ব্যবহার। এটি আবার কারিগরি বিশ্লেষণের সবচেয়ে অতিরঞ্জিত সংকেতও, আর এর ব্যর্থতার হার নিজস্ব আলোচনার দাবি রাখে — **অধ্যায় ৪৪**।

### হর, যা সূক্ষ্মতা নয় বরং একটি সাংখ্যিক বিপদ

সূত্রে ফিরুন এবং হরের $H_n - L_n$-এর দিকে তাকান। কোনো কিছুই একে বড় হতে বাধ্য করে না। শান্ত বাজারে এটি কয়েকটি টিক হতে পারে। আটকে যাওয়া বাজারে এটি শূন্য হতে পারে।

সঙ্গে সঙ্গে দুটি পরিণতি আসে:

**%K-এর সংবেদনশীলতা রেঞ্জের ব্যস্তানুপাতিক।** অন্তরকলন করুন: ক্লোজে এক টাকার পরিবর্তন %K-কে $100 / (H_n - L_n)$ পয়েন্ট সরায়। ৬.১০ রেঞ্জে তা টাকাপ্রতি ১৬.৪ পয়েন্ট। ০.২০ রেঞ্জে তা **টাকাপ্রতি ৫০০ পয়েন্ট** — একটিমাত্র সর্বনিম্ন টিক অসিলেটরকে ৫০ পয়েন্ট দোলায়।

**শূন্য রেঞ্জে %K অসংজ্ঞায়িত।** সফটওয়্যার হয় একটি ত্রুটি দেয়, নীরবে ৫০ বসিয়ে দেয়, নয়তো শূন্য দিয়ে ভাগকে এমনভাবে বয়ে নিয়ে যায় যে তিন কলাম পরে তা বিশ্বাসযোগ্য দেখতে একটি সংখ্যা হয়ে ফিরে আসে। তিনটি ফলাফলই কোনো রিডিং না থাকার চেয়ে খারাপ।

### ডিএসই: হর এখানেই সবচেয়ে বেশি ভাঙে

এটি এই অধ্যায়ের ডিএসই-নির্দিষ্ট সতর্কতা, আর এটি পাদটীকা নয়।

**ডিএসই-র তারল্যহীন কাউন্টারে $n$-পর্বের হাই–লো রেঞ্জ প্রায়ই মুষ্টিমেয় কয়েকটি টিক।** যে শেয়ার দশ সেশন ধরে ২০ পয়সার ব্যান্ডে লেনদেন হয় তা এমন একটি স্টোক্যাস্টিক তৈরি করে যা একক-টিক প্রিন্টে ০ ও ১০০-এর মধ্যে উল্টাপাল্টা করে, আর একটি মসৃণ %D যা দেখতে লেনদেনযোগ্য দোলনের মতো। এটি দোলন নয়। এটি এমন একটি শেয়ারে কোয়ান্টাইজেশন শব্দ যা আসলে নড়েইনি।

**ফ্লোর প্রাইসের সময়ে রেঞ্জ নিয়মিতভাবে ঠিক শূন্য ছিল।** কঠিন মেঝে ও তার ওপরে কোনো বিড না থাকায় হাই, লো ও ক্লোজ সপ্তাহের পর সপ্তাহ একই সংখ্যা ছিল। %K গাণিতিকভাবে অসংজ্ঞায়িত ছিল। যে প্ল্যাটফর্ম ঐ বারগুলোর জন্য একটি মান ছেপেছে, সে একটি কল্পকাহিনি ছেপেছে।

**সার্কিট সীমা রেঞ্জকে উল্টোদিক থেকে সংকুচিত করে।** লিমিট-আপে আটকে যাওয়া শেয়ার তার হাই-তেই ক্লোজ করে, তাই %K গঠনগতভাবেই ১০০ দেখায় — ক্রেতারা ক্লোজ পর্যন্ত চাপ দিয়েছেন বলে নয়, বরং এক্সচেঞ্জ উঁচু প্রিন্ট অনুমোদন করেনি বলে। অসিলেটর এমন কারণে পরিপৃক্ত হয় যার সঙ্গে লেনের ধারণার কোনো সম্পর্ক নেই।

নিয়মটি সরাসরি আসে, আর নির্দেশকটি বসানোর আগেই এটি বসানো উচিত:

**দাবি করুন $H_n - L_n \\geq g \\times \\text{ATR}$ (যেখানে $g \\approx 2$), অথবা একটি ন্যূনতম টিক সংখ্যা — এদের মধ্যে যেটি বড়। রেঞ্জ গার্ডে উত্তীর্ণ না হলে অসিলেটর কিছুই ফেরত দেবে না — ৫০ নয়, আগের মান নয়, কিছুই নয়।** অধ্যায় ৩৯ ATR যথাযথভাবে দেয়। ততক্ষণ পর্যন্ত গড় দৈনিক হাই–লো যথেষ্ট বিকল্প।

এটি অধ্যায় ৫-এর শৃঙ্খলা, আয়ের সংখ্যার বদলে একটি নির্দেশকে প্রয়োগ করা: আউটপুট পড়ার আগে জিজ্ঞেস করুন ইনপুটটি অর্থবহ হতে কী সত্য হতে হবে।`,
    },

    simple: {
      en: `Think about a cricket ball inside a net practice cage.

The cage has a floor and a roof. Whatever the batsman does, the ball ends up somewhere between them. **The only question the stochastic asks is: at the end of the over, how high inside the cage did the ball finish?**

Near the roof means the batsman is on top. Near the floor means the bowler is. That is genuinely all there is to it.

### The cage is the last ten days

Take the last ten sessions. Find the highest price anyone paid in those ten days, and the lowest. That is your cage: a roof and a floor.

Now look at today's closing price. Where does it sit between them?

- Closing right at the roof → **100**
- Closing right at the floor → **0**
- Closing exactly halfway → **50**

That is the whole formula. **You are not measuring how far the stock moved. You are measuring where in its recent range it decided to stop.**

### Why the close and not anything else

The closing price is the only price of the day where everybody has to commit. During the session people can push price anywhere. At the close, real money changes hands and stays changed overnight.

So if closes keep landing near the roof day after day, buyers are willing to pay up right at the moment it costs them to be wrong. **That is a small piece of genuine information about who is winning.**

### The second line

One number that jumps every day is annoying. So we take a three-day average of it and draw that too. The jumpy line is called **%K** and the smoothed one is **%D**.

When the fast line crosses above the slow line, closes have started landing higher inside the cage than they were. When it crosses below, they have started landing lower. **The cross is the signal. The level is only the context.**

You will hear people say "above 80 means sell." Be careful. It means the ball keeps finishing near the roof — which, if the batsman is genuinely in form, is exactly what should keep happening. In the worked example in §37.3 the oscillator sat above 80 for **six sessions in a row** while the stock went from 52.40 to 55.40. Selling on the first print at 80 handed away 2.70 taka a share.

### Now the part that will actually cost you money on the DSE

**Look at the cage again. What if the roof and the floor are almost touching?**

Suppose a small stock has traded between 20.10 and 20.30 for ten days. That is a cage twenty paisa tall. One minimum tick — ten paisa — moves the ball **halfway up the cage**. The indicator will swing from 0 to 50 to 100 and back, drawing beautiful waves, and the stock has not moved at all.

That is not a signal. **That is a measuring tape so short that your own thumb covers half of it.**

And during the floor-price years it got worse. High, low, and close were the same number for weeks. The cage had zero height. There is no "where in the range" when there is no range — the sum divides by zero. Any platform that still printed a number for those weeks printed something it made up.

So we build one rule in before anything else: **if the cage is not at least twice the stock's normal daily swing tall, the indicator returns nothing at all.** Not 50. Not yesterday's value. Nothing. In the sheet that is column H, and it says **TOO NARROW** in plain words so you cannot miss it.

### And one more DSE trap

A stock locked at its upper circuit closes at the highest price it was legally allowed to reach. So it closes at the roof. So the stochastic prints 100.

**But nobody was "buying into the close." The exchange simply switched the lights off.** The 100 is manufactured by a rule, not by demand. Read circuit-limit sessions as suspect input, exactly as Chapter 26 taught you to read them as suspect candles.`,
      bn: `নেট প্র্যাকটিসের খাঁচার ভেতরে একটি ক্রিকেট বলের কথা ভাবুন।

খাঁচার একটি মেঝে আছে, একটি ছাদ আছে। ব্যাটসম্যান যা-ই করুন, বল শেষ পর্যন্ত ঐ দুটির মাঝেই থাকে। **স্টোক্যাস্টিক কেবল একটি প্রশ্নই করে: ওভারের শেষে বলটি খাঁচার ভেতরে কতটা উঁচুতে থামল?**

ছাদের কাছে মানে ব্যাটসম্যান এগিয়ে। মেঝের কাছে মানে বোলার। সত্যিই এটুকুই।

### খাঁচাটি হলো শেষ দশ দিন

শেষ দশটি সেশন নিন। ঐ দশ দিনে কেউ যত সর্বোচ্চ দাম দিয়েছেন তা বের করুন, আর সর্বনিম্নটিও। এটিই আপনার খাঁচা: একটি ছাদ ও একটি মেঝে।

এবার আজকের ক্লোজিং দাম দেখুন। তা ঐ দুটির মাঝে কোথায় বসে?

- ঠিক ছাদে ক্লোজ → **১০০**
- ঠিক মেঝেতে ক্লোজ → **০**
- ঠিক মাঝখানে ক্লোজ → **৫০**

পুরো সূত্রটাই এই। **আপনি মাপছেন না শেয়ারটি কতদূর গেল। আপনি মাপছেন তার সাম্প্রতিক রেঞ্জের কোথায় সে থামতে ঠিক করল।**

### কেন ক্লোজ, আর কেন অন্য কিছু নয়

ক্লোজিং দামই দিনের একমাত্র দাম যেখানে সবাইকে প্রতিশ্রুতিবদ্ধ হতেই হয়। সেশনের মাঝে মানুষ দামকে যেখানে খুশি ঠেলতে পারেন। ক্লোজে প্রকৃত টাকা হাতবদল হয় এবং রাতভর বদলানোই থাকে।

তাই ক্লোজগুলো যদি দিনের পর দিন ছাদের কাছে পড়তে থাকে, তার মানে ঠিক যে মুহূর্তে ভুল হলে দাম দিতে হয় সেই মুহূর্তেই ক্রেতারা বাড়তি দাম দিতে রাজি। **কে জিতছে সে সম্পর্কে এটি ছোট কিন্তু প্রকৃত একটি তথ্য।**

### দ্বিতীয় রেখা

প্রতিদিন লাফাতে থাকা একটিমাত্র সংখ্যা বিরক্তিকর। তাই আমরা তার তিন দিনের গড় নিই ও সেটিও আঁকি। লাফানো রেখাটির নাম **%K**, মসৃণটির নাম **%D**।

দ্রুত রেখা ধীর রেখার ওপরে পার হলে বোঝা যায় ক্লোজগুলো খাঁচার ভেতরে আগের চেয়ে উঁচুতে পড়তে শুরু করেছে। নিচে পার হলে নিচুতে। **ক্রসটিই সংকেত। লেভেলটি কেবল প্রেক্ষাপট।**

আপনি শুনবেন "৮০-এর ওপরে মানে বিক্রি।" সাবধান। এর মানে বলটি বারবার ছাদের কাছে থামছে — আর ব্যাটসম্যান সত্যিই ফর্মে থাকলে ঠিক তা-ই ঘটতে থাকার কথা। §৩৭.৩-এর উদাহরণে অসিলেটর **পরপর ছয় সেশন** ৮০-এর ওপরে বসে ছিল আর শেয়ারটি ৫২.৪০ থেকে ৫৫.৪০-এ গেছে। ৮০-এর প্রথম প্রিন্টে বিক্রি করলে শেয়ারপ্রতি ২.৭০ টাকা হাতছাড়া হতো।

### এবার সেই অংশ যা ডিএসই-তে সত্যিই আপনার টাকা খাবে

**আবার খাঁচাটির দিকে তাকান। ছাদ ও মেঝে যদি প্রায় ছুঁয়ে থাকে?**

ধরুন একটি ছোট শেয়ার দশ দিন ধরে ২০.১০ ও ২০.৩০-এর মধ্যে লেনদেন হয়েছে। এটি বিশ পয়সা উঁচু একটি খাঁচা। একটিমাত্র সর্বনিম্ন টিক — দশ পয়সা — বলটিকে **খাঁচার অর্ধেক উচ্চতা** সরিয়ে দেয়। নির্দেশকটি ০ থেকে ৫০ থেকে ১০০-তে দুলবে ও ফিরে আসবে, সুন্দর ঢেউ আঁকবে, আর শেয়ারটি আদৌ নড়েনি।

এটি সংকেত নয়। **এটি এত ছোট একটি মাপার ফিতা যে আপনার নিজের বুড়ো আঙুলই তার অর্ধেক ঢেকে ফেলে।**

আর ফ্লোর প্রাইসের বছরগুলোতে তা আরও খারাপ ছিল। হাই, লো ও ক্লোজ সপ্তাহের পর সপ্তাহ একই সংখ্যা। খাঁচার উচ্চতা শূন্য। যেখানে রেঞ্জই নেই সেখানে "রেঞ্জের কোথায়" বলে কিছু নেই — সূত্রটি শূন্য দিয়ে ভাগ করে। যে প্ল্যাটফর্ম ঐ সপ্তাহগুলোর জন্য তবু একটি সংখ্যা ছেপেছে, সে নিজের বানানো কিছু ছেপেছে।

তাই আমরা সবকিছুর আগে একটি নিয়ম বসিয়ে দিই: **খাঁচাটি যদি শেয়ারটির স্বাভাবিক দৈনিক দোলনের অন্তত দ্বিগুণ উঁচু না হয়, নির্দেশক কিছুই ফেরত দেবে না।** ৫০ নয়। গতকালের মান নয়। কিছুই নয়। শিটে সেটি H কলাম, আর সেখানে স্পষ্ট ভাষায় **TOO NARROW** লেখা থাকে যাতে আপনার চোখ এড়ানো অসম্ভব।

### আর একটি ডিএসই ফাঁদ

উপরের সার্কিটে আটকে যাওয়া শেয়ার আইনত যতটা ওপরে যেতে পারত ঠিক সেখানেই ক্লোজ করে। অর্থাৎ ছাদে ক্লোজ করে। অর্থাৎ স্টোক্যাস্টিক ১০০ দেখায়।

**কিন্তু কেউ "ক্লোজ পর্যন্ত কিনছিলেন" না। এক্সচেঞ্জ কেবল বাতি নিভিয়ে দিয়েছে।** ১০০-টি চাহিদা নয়, একটি বিধি তৈরি করেছে। সার্কিট-সীমার সেশনকে সন্দেহজনক ইনপুট হিসেবে পড়ুন, ঠিক যেভাবে অধ্যায় ২৬ সেগুলোকে সন্দেহজনক ক্যান্ডেল হিসেবে পড়তে শিখিয়েছে।`,
    },

    example: {
      en: `### NAVANACNG: twenty sessions in which "overbought" was never once a sell

NAVANACNG is a mid-cap DSE name used illustratively here; **every figure below is constructed, not historical.** The stock breaks out of a five-session base and runs. We compute a full stochastic with $n = 10$, %K smoothing 3, %D periods 3 — the "10, 3, 3" that most DSE charting packages will label *slow stochastic*. The average daily high–low over the sample is BDT 1.56, which we use as the ATR proxy of Chapter 39 until that chapter supplies the real thing.

The twenty sessions:

| Bar | High | Low | Close | 10-High | 10-Low | Range | Raw %K | Slow %K | %D |
|---|---|---|---|---|---|---|---|---|---|
| 1 | 47.90 | 46.80 | 47.20 | — | — | — | — | — | — |
| 2 | 48.30 | 47.00 | 48.10 | — | — | — | — | — | — |
| 3 | 48.60 | 47.60 | 47.80 | — | — | — | — | — | — |
| 4 | 48.20 | 46.90 | 47.10 | — | — | — | — | — | — |
| 5 | 47.60 | 46.50 | 46.80 | — | — | — | — | — | — |
| 6 | 48.40 | 46.70 | 48.20 | — | — | — | — | — | — |
| 7 | 49.30 | 48.00 | 49.10 | — | — | — | — | — | — |
| 8 | 50.20 | 48.80 | 50.00 | — | — | — | — | — | — |
| 9 | 51.40 | 49.70 | 51.20 | — | — | — | — | — | — |
| 10 | 52.00 | 50.60 | 51.00 | 52.00 | 46.50 | 5.50 | 81.8182 | — | — |
| 11 | 51.80 | 50.10 | 50.40 | 52.00 | 46.50 | 5.50 | 70.9091 | — | — |
| 12 | 52.60 | 50.30 | 52.40 | 52.60 | 46.50 | 6.10 | 96.7213 | 83.1495 | — |
| 13 | 53.90 | 52.20 | 53.70 | 53.90 | 46.50 | 7.40 | 97.2973 | 88.3092 | — |
| 14 | 54.80 | 53.10 | 54.50 | 54.80 | 46.50 | 8.30 | 96.3855 | 96.8014 | 89.4200 |
| 15 | 55.60 | 54.00 | 55.40 | 55.60 | 46.70 | 8.90 | 97.7528 | 97.1452 | 94.0853 |
| 16 | 56.20 | 54.90 | 55.10 | 56.20 | 48.00 | 8.20 | 86.5854 | 93.5746 | 95.8404 |
| 17 | 55.80 | 53.70 | 54.00 | 56.20 | 48.80 | 7.40 | 70.2703 | 84.8695 | 91.8631 |
| 18 | 55.00 | 52.80 | 53.20 | 56.20 | 49.70 | 6.50 | 53.8462 | 70.2339 | 82.8927 |
| 19 | 54.10 | 52.40 | 53.90 | 56.20 | 50.10 | 6.10 | 62.2951 | 62.1372 | 72.4135 |
| 20 | 54.60 | 53.00 | 53.40 | 56.20 | 50.10 | 6.10 | 54.0984 | 56.7465 | 63.0392 |

Nine bars have no reading at all. **That is not a defect; it is honesty.** A ten-period range needs ten periods, and a three-period smoothing of it needs two more, and a three-period average of *that* needs two more again. First raw %K on bar 10, first slow %K on bar 12, first %D on bar 14. Warm-up is five bars longer than the lookback, and any platform that shows you a value on bar 3 is showing you a shrinking window dressed as a fixed one.

### The first thing to check is the denominator, not the signal

Before reading a single %K value, look at the Range column. The narrowest window range in the whole sample is **5.50**, at bar 10. The guard threshold is

$$2 \\times 1.56 = 3.12$$

so every bar clears it comfortably. **Cell B32 in the sheet counts zero blocked bars.** Say that out loud, because it is the reason the rest of this example is worth reading: on this name, in this stretch, the oscillator is measuring something real.

The diagnostic that makes it concrete is B30:

$$\\frac{100}{6.10} = 16.3934 \\text{ %K points per BDT 1}$$

and therefore **1.6393 %K points per minimum tick** (B31). A one-tick print moves the oscillator by a point and a half. That is a usable resolution.

Hold that number. We will come back to it with a stock where the same calculation returns 500.

### Where the folklore says sell

Slow %K crosses 80 on **bar 12**, printing 83.1495 at a close of 52.40.

Every stochastic tutorial ever written says the same thing about that bar: overbought, take profits.

Here is what happened next:

| Bar | Close | Slow %K | The folklore says |
|---|---|---|---|
| 12 | 52.40 | 83.1495 | sell |
| 13 | 53.70 | 88.3092 | sell harder |
| 14 | 54.50 | 96.8014 | very overbought |
| 15 | **55.40** | 97.1452 | extremely overbought |
| 16 | 55.10 | 93.5746 | still overbought |
| 17 | 54.00 | 84.8695 | still overbought |

**Six consecutive sessions above 80, and price rose 3.00 taka across the first four of them.** The oscillator was not wrong — closes really were landing at the very top of the ten-day range, day after day. That is precisely what an uptrend *is*. The error was not in the indicator. **The error was in reading a description as an instruction.**

### What the crossover said instead

Slow %K crosses below %D on **bar 16**: 93.5746 against 95.8404. Close 55.10.

Price the difference on one share:

| Exit rule | Bar | Exit price | Gain from the 48.20 breakout close |
|---|---|---|---|
| "%K ≥ 80 → sell" | 12 | 52.40 | **4.20** (8.71%) |
| "%K crosses below %D" | 16 | **55.10** | **6.90** (14.32%) |

$$\\frac{4.20}{6.90} = 0.6087$$

**The overbought rule captured 60.87% of what the crossover rule captured, on the identical position in the identical stock.** The 2.70 taka a share it gave away is the entire content of the phrase "20 and 80 are context, not instructions." It is not a philosophical point. It has a price and this is the price.

### Fast versus slow, priced

Run the same twenty bars as a *fast* stochastic — raw %K plotted against SMA₃(raw %K), which is the same series as our slow %K. Fast %K crosses below its signal line on **bar 14**, at a close of 54.50, because raw %K (96.3855) dips fractionally under 96.8014 while the smoothed version is still rising.

| Variant | Cross bar | Exit close | Gain from 48.20 |
|---|---|---|---|
| Fast | 14 | 54.50 | 6.30 |
| Slow | **16** | **55.10** | **6.90** |

**Fast was two sessions earlier and 0.60 a share worse.** Do not over-read that: in a genuine top, being two sessions earlier is worth a great deal, and this sample simply did not top out at bar 14. What the comparison actually establishes is the thing beginners never check — **fast and slow give different signals on the same data on the same day**, and if you do not know which one your platform is drawing you do not know what you are looking at.

### The reversal, when it finally came

Bars 17 to 20 are the real turn. Watch the three columns move at different speeds:

| Bar | Close | Raw %K | Slow %K | %D | Column L verdict |
|---|---|---|---|---|---|
| 16 | 55.10 | 86.5854 | 93.5746 | 95.8404 | OVERBOUGHT ZONE |
| 17 | 54.00 | 70.2703 | 84.8695 | 91.8631 | OVERBOUGHT ZONE |
| 18 | 53.20 | 53.8462 | 70.2339 | 82.8927 | MID-RANGE |
| 19 | 53.90 | 62.2951 | 62.1372 | 72.4135 | MID-RANGE |
| 20 | 53.40 | 54.0984 | 56.7465 | 63.0392 | MID-RANGE |

**Raw %K falls 42.5 points between bar 15 and bar 18 on a price move of only 2.20 taka.** That is the leverage of a narrowing numerator against a shrinking denominator — the close is falling *and* the ten-day low is rising as old bars drop out of the window, so both ends of the fraction work against the reading at once. The 10-Low goes 46.50 → 46.70 → 48.00 → 48.80 → 49.70 → 50.10 in five sessions. The window is climbing out from under the price.

**This is the single most under-appreciated mechanical fact about stochastic**: a falling %K does not always mean price fell. It can mean the window's floor rose. On bar 19 price actually *rose* 0.70 and raw %K rose with it, but %D kept falling, because %D is looking at a window that has already moved.

### The reading that column L will not give you

Notice that the sheet's zone column stays silent until bar 14 and then reports on **slow %K**, not on %D — \`L20\` tests \`J20\` while gating on \`K20\` being present. That is a deliberate choice and you should know why: %D is smoothed twice and reaches its extremes late and leaves them late. **A zone label built on %D will still say OVERBOUGHT on bar 17 when the crossover already fired on bar 16.** Label the zone off the faster of the two lines you actually trade.

### Now the counterfactual that matters more than any of this

Everything above assumed a stock with a 6.10 ten-day range and 16.3934 %K points per taka. Replace it with a genuinely thin DSE counter — say a small-cap trading between 20.10 and 20.30 for ten sessions:

$$\\text{Range} = 0.20, \\qquad \\frac{100}{0.20} = 500 \\text{ %K points per BDT 1}$$

$$500 \\times 0.10 = 50 \\text{ %K points per minimum tick}$$

**One tick moves that oscillator fifty points.** A close at 20.20 prints 50, a close at 20.30 prints 100, a close at 20.10 prints 0, and the smoothed %D traces a graceful wave through the middle of all of it. Plot it and it is indistinguishable from the NAVANACNG chart above. **It is quantisation noise on a stock that has not moved twenty paisa in a fortnight.**

Run it through the guard: $0.20 < 3.12$, cell H returns **TOO NARROW**, cell I returns blank, and the entire downstream chain — slow %K, %D, zone, signal state — returns blank with it. That is the correct output. **The indicator's most valuable behaviour on the DSE is refusing to produce one.**

### What the last bar actually says

The sheet's final diagnostic, B33, reads **"%K below %D"** — 56.7465 against 63.0392 — and B29 reports the range at 3.9103 ATRs, comfortably measurable.

So: a valid denominator, a bearish cross that fired four sessions ago, an oscillator that has fallen from the high nineties to the mid fifties, and price back at 53.40 from a 55.40 peak. **That is an exited long, not a short.** There is no reliable borrow on the DSE and the overbought reading was never a short signal in the first place — it was a hold-off signal and then, at the crossover, an exit signal. Chapter 35's MACD already read the same turn from momentum rather than position, and the two together are worth more than either alone; Chapter 38's Bollinger Bands then put the same range question in volatility terms.`,
      bn: `### NAVANACNG: বিশটি সেশন, যেখানে "ওভারবট" একবারও বিক্রির সংকেত ছিল না

NAVANACNG এখানে দৃষ্টান্ত হিসেবে ব্যবহৃত একটি মিড-ক্যাপ ডিএসই নাম; **নিচের প্রতিটি সংখ্যা নির্মিত, ঐতিহাসিক নয়।** শেয়ারটি পাঁচ সেশনের একটি বেস থেকে ব্রেকআউট করে ছোটে। আমরা একটি ফুল স্টোক্যাস্টিক গণনা করি $n = 10$, %K মসৃণকরণ ৩, %D পর্ব ৩ — অর্থাৎ সেই "১০, ৩, ৩" যাকে বেশিরভাগ ডিএসই চার্টিং প্যাকেজ *স্লো স্টোক্যাস্টিক* নামে দেখাবে। নমুনাজুড়ে গড় দৈনিক হাই–লো ১.৫৬ টাকা, যা আমরা অধ্যায় ৩৯-এর ATR-এর বিকল্প হিসেবে ব্যবহার করি যতক্ষণ না ঐ অধ্যায় আসল জিনিসটি দেয়।

বিশটি সেশন:

| বার | হাই | লো | ক্লোজ | ১০-হাই | ১০-লো | রেঞ্জ | কাঁচা %K | স্লো %K | %D |
|---|---|---|---|---|---|---|---|---|---|
| ১ | ৪৭.৯০ | ৪৬.৮০ | ৪৭.২০ | — | — | — | — | — | — |
| ২ | ৪৮.৩০ | ৪৭.০০ | ৪৮.১০ | — | — | — | — | — | — |
| ৩ | ৪৮.৬০ | ৪৭.৬০ | ৪৭.৮০ | — | — | — | — | — | — |
| ৪ | ৪৮.২০ | ৪৬.৯০ | ৪৭.১০ | — | — | — | — | — | — |
| ৫ | ৪৭.৬০ | ৪৬.৫০ | ৪৬.৮০ | — | — | — | — | — | — |
| ৬ | ৪৮.৪০ | ৪৬.৭০ | ৪৮.২০ | — | — | — | — | — | — |
| ৭ | ৪৯.৩০ | ৪৮.০০ | ৪৯.১০ | — | — | — | — | — | — |
| ৮ | ৫০.২০ | ৪৮.৮০ | ৫০.০০ | — | — | — | — | — | — |
| ৯ | ৫১.৪০ | ৪৯.৭০ | ৫১.২০ | — | — | — | — | — | — |
| ১০ | ৫২.০০ | ৫০.৬০ | ৫১.০০ | ৫২.০০ | ৪৬.৫০ | ৫.৫০ | ৮১.৮১৮২ | — | — |
| ১১ | ৫১.৮০ | ৫০.১০ | ৫০.৪০ | ৫২.০০ | ৪৬.৫০ | ৫.৫০ | ৭০.৯০৯১ | — | — |
| ১২ | ৫২.৬০ | ৫০.৩০ | ৫২.৪০ | ৫২.৬০ | ৪৬.৫০ | ৬.১০ | ৯৬.৭২১৩ | ৮৩.১৪৯৫ | — |
| ১৩ | ৫৩.৯০ | ৫২.২০ | ৫৩.৭০ | ৫৩.৯০ | ৪৬.৫০ | ৭.৪০ | ৯৭.২৯৭৩ | ৮৮.৩০৯২ | — |
| ১৪ | ৫৪.৮০ | ৫৩.১০ | ৫৪.৫০ | ৫৪.৮০ | ৪৬.৫০ | ৮.৩০ | ৯৬.৩৮৫৫ | ৯৬.৮০১৪ | ৮৯.৪২০০ |
| ১৫ | ৫৫.৬০ | ৫৪.০০ | ৫৫.৪০ | ৫৫.৬০ | ৪৬.৭০ | ৮.৯০ | ৯৭.৭৫২৮ | ৯৭.১৪৫২ | ৯৪.০৮৫৩ |
| ১৬ | ৫৬.২০ | ৫৪.৯০ | ৫৫.১০ | ৫৬.২০ | ৪৮.০০ | ৮.২০ | ৮৬.৫৮৫৪ | ৯৩.৫৭৪৬ | ৯৫.৮৪০৪ |
| ১৭ | ৫৫.৮০ | ৫৩.৭০ | ৫৪.০০ | ৫৬.২০ | ৪৮.৮০ | ৭.৪০ | ৭০.২৭০৩ | ৮৪.৮৬৯৫ | ৯১.৮৬৩১ |
| ১৮ | ৫৫.০০ | ৫২.৮০ | ৫৩.২০ | ৫৬.২০ | ৪৯.৭০ | ৬.৫০ | ৫৩.৮৪৬২ | ৭০.২৩৩৯ | ৮২.৮৯২৭ |
| ১৯ | ৫৪.১০ | ৫২.৪০ | ৫৩.৯০ | ৫৬.২০ | ৫০.১০ | ৬.১০ | ৬২.২৯৫১ | ৬২.১৩৭২ | ৭২.৪১৩৫ |
| ২০ | ৫৪.৬০ | ৫৩.০০ | ৫৩.৪০ | ৫৬.২০ | ৫০.১০ | ৬.১০ | ৫৪.০৯৮৪ | ৫৬.৭৪৬৫ | ৬৩.০৩৯২ |

নয়টি বারে কোনো রিডিংই নেই। **এটি ত্রুটি নয়; এটি সততা।** দশ-পর্বের রেঞ্জের জন্য দশটি পর্ব লাগে, তার তিন-পর্বের মসৃণকরণের জন্য আরও দুটি, আর *তার* তিন-পর্বের গড়ের জন্য আরও দুটি। প্রথম কাঁচা %K বার ১০-এ, প্রথম স্লো %K বার ১২-এ, প্রথম %D বার ১৪-এ। ওয়ার্ম-আপ লুকব্যাকের চেয়ে পাঁচ বার লম্বা, আর যে প্ল্যাটফর্ম আপনাকে বার ৩-এ একটি মান দেখায় সে একটি সংকুচিত জানালাকে স্থির জানালার পোশাকে দেখাচ্ছে।

### প্রথম যাচাই সংকেত নয়, হর

একটিও %K মান পড়ার আগে রেঞ্জ কলামটি দেখুন। পুরো নমুনার সংকীর্ণতম জানালা-রেঞ্জ **৫.৫০**, বার ১০-এ। গার্ডের সীমা

$$2 \\times 1.56 = 3.12$$

তাই প্রতিটি বারই স্বচ্ছন্দে উত্তীর্ণ। **শিটের B32 ঘর শূন্যটি বাধাপ্রাপ্ত বার গোনে।** এটি জোরে বলুন, কারণ এ কারণেই এই উদাহরণের বাকি অংশ পড়ার যোগ্য: এই নামে, এই পর্বে, অসিলেটর প্রকৃত কিছু মাপছে।

যে ডায়াগনস্টিক একে বাস্তব করে তা হলো B30:

$$\\frac{100}{6.10} = 16.3934 \\text{ %K পয়েন্ট প্রতি ১ টাকায়}$$

আর তাই **প্রতি সর্বনিম্ন টিকে ১.৬৩৯৩ %K পয়েন্ট** (B31)। এক-টিকের প্রিন্ট অসিলেটরকে দেড় পয়েন্ট সরায়। এটি ব্যবহারযোগ্য রেজোলিউশন।

সংখ্যাটি মনে রাখুন। এমন একটি শেয়ার নিয়ে ফিরব যেখানে একই হিসাব ৫০০ ফেরত দেয়।

### লোককথা যেখানে বিক্রি বলে

স্লো %K ৮০ পার করে **বার ১২**-তে, ৫২.৪০ ক্লোজে ৮৩.১৪৯৫ দেখিয়ে।

লেখা হওয়া প্রতিটি স্টোক্যাস্টিক টিউটোরিয়াল ঐ বার সম্পর্কে একই কথা বলে: ওভারবট, মুনাফা তুলে নিন।

এরপর যা ঘটল:

| বার | ক্লোজ | স্লো %K | লোককথা বলে |
|---|---|---|---|
| ১২ | ৫২.৪০ | ৮৩.১৪৯৫ | বিক্রি |
| ১৩ | ৫৩.৭০ | ৮৮.৩০৯২ | আরও জোরে বিক্রি |
| ১৪ | ৫৪.৫০ | ৯৬.৮০১৪ | খুব ওভারবট |
| ১৫ | **৫৫.৪০** | ৯৭.১৪৫২ | অত্যন্ত ওভারবট |
| ১৬ | ৫৫.১০ | ৯৩.৫৭৪৬ | এখনো ওভারবট |
| ১৭ | ৫৪.০০ | ৮৪.৮৬৯৫ | এখনো ওভারবট |

**পরপর ছয় সেশন ৮০-এর ওপরে, আর তার প্রথম চারটিতে দাম ৩.০০ টাকা বেড়েছে।** অসিলেটর ভুল ছিল না — ক্লোজগুলো সত্যিই দিনের পর দিন দশ দিনের রেঞ্জের একদম চূড়ায় পড়ছিল। ঊর্ধ্বমুখী প্রবণতা বলতে ঠিক এটাই বোঝায়। ভুলটি নির্দেশকে ছিল না। **ভুলটি ছিল একটি বর্ণনাকে নির্দেশ হিসেবে পড়ায়।**

### ক্রসওভার বদলে যা বলেছিল

স্লো %K %D-এর নিচে নামে **বার ১৬**-তে: ৯৩.৫৭৪৬ বনাম ৯৫.৮৪০৪। ক্লোজ ৫৫.১০।

একটি শেয়ারে পার্থক্যটির দাম বসান:

| প্রস্থান নিয়ম | বার | প্রস্থান দাম | ৪৮.২০ ব্রেকআউট ক্লোজ থেকে লাভ |
|---|---|---|---|
| "%K ≥ ৮০ → বিক্রি" | ১২ | ৫২.৪০ | **৪.২০** (৮.৭১%) |
| "%K %D-এর নিচে পার" | ১৬ | **৫৫.১০** | **৬.৯০** (১৪.৩২%) |

$$\\frac{4.20}{6.90} = 0.6087$$

**অভিন্ন শেয়ারে অভিন্ন পজিশনে ওভারবট নিয়মটি ক্রসওভার নিয়মের ৬০.৮৭% ধরতে পেরেছে।** শেয়ারপ্রতি যে ২.৭০ টাকা তা ছেড়ে দিয়েছে, সেটিই "২০ ও ৮০ প্রেক্ষাপট, নির্দেশ নয়" বাক্যটির পুরো বিষয়বস্তু। এটি দার্শনিক কথা নয়। এর একটি দাম আছে আর দামটি এই।

### ফাস্ট বনাম স্লো, দাম বসিয়ে

একই বিশটি বার একটি *ফাস্ট* স্টোক্যাস্টিক হিসেবে চালান — কাঁচা %K-এর বিপরীতে SMA₃(কাঁচা %K), যা আমাদের স্লো %K সিরিজটিই। ফাস্ট %K তার সিগন্যাল রেখার নিচে নামে **বার ১৪**-তে, ৫৪.৫০ ক্লোজে, কারণ কাঁচা %K (৯৬.৩৮৫৫) সামান্য ব্যবধানে ৯৬.৮০১৪-এর নিচে পড়ে যখন মসৃণ সংস্করণটি তখনো উঠছে।

| ধরন | ক্রস বার | প্রস্থান ক্লোজ | ৪৮.২০ থেকে লাভ |
|---|---|---|---|
| ফাস্ট | ১৪ | ৫৪.৫০ | ৬.৩০ |
| স্লো | **১৬** | **৫৫.১০** | **৬.৯০** |

**ফাস্ট দুই সেশন আগে এসেছে আর শেয়ারপ্রতি ০.৬০ খারাপ করেছে।** এটি বেশি টানবেন না: প্রকৃত শীর্ষে দুই সেশন আগে আসার মূল্য বিরাট, আর এই নমুনাটি বার ১৪-তে শীর্ষে ওঠেনি, এই যা। তুলনাটি আসলে যা প্রতিষ্ঠা করে তা হলো সেই জিনিস যা নতুনরা কখনো যাচাই করেন না — **একই ডেটায় একই দিনে ফাস্ট ও স্লো ভিন্ন সংকেত দেয়**, আর আপনার প্ল্যাটফর্ম কোনটি আঁকছে তা না জানলে আপনি কী দেখছেন তা-ই জানেন না।

### উল্টে যাওয়া, যখন তা শেষে এল

বার ১৭ থেকে ২০ আসল মোড়। তিনটি কলামকে ভিন্ন গতিতে নড়তে দেখুন:

| বার | ক্লোজ | কাঁচা %K | স্লো %K | %D | L কলামের রায় |
|---|---|---|---|---|---|
| ১৬ | ৫৫.১০ | ৮৬.৫৮৫৪ | ৯৩.৫৭৪৬ | ৯৫.৮৪০৪ | OVERBOUGHT ZONE |
| ১৭ | ৫৪.০০ | ৭০.২৭০৩ | ৮৪.৮৬৯৫ | ৯১.৮৬৩১ | OVERBOUGHT ZONE |
| ১৮ | ৫৩.২০ | ৫৩.৮৪৬২ | ৭০.২৩৩৯ | ৮২.৮৯২৭ | MID-RANGE |
| ১৯ | ৫৩.৯০ | ৬২.২৯৫১ | ৬২.১৩৭২ | ৭২.৪১৩৫ | MID-RANGE |
| ২০ | ৫৩.৪০ | ৫৪.০৯৮৪ | ৫৬.৭৪৬৫ | ৬৩.০৩৯২ | MID-RANGE |

**বার ১৫ থেকে বার ১৮-এর মধ্যে কাঁচা %K ৪২.৫ পয়েন্ট পড়েছে, অথচ দাম নড়েছে মাত্র ২.২০ টাকা।** এটি সংকুচিত হরের বিপরীতে সংকুচিত লবের লিভারেজ — ক্লোজ পড়ছে *এবং* পুরোনো বার জানালা থেকে বেরিয়ে যাওয়ায় দশ দিনের লো উঠছে, তাই ভগ্নাংশের দুই প্রান্তই একসঙ্গে রিডিংয়ের বিরুদ্ধে কাজ করছে। ১০-লো পাঁচ সেশনে যায় ৪৬.৫০ → ৪৬.৭০ → ৪৮.০০ → ৪৮.৮০ → ৪৯.৭০ → ৫০.১০। জানালাটি দামের নিচ থেকে উঠে আসছে।

**স্টোক্যাস্টিক সম্পর্কে এটিই সবচেয়ে কম মূল্যায়িত যান্ত্রিক তথ্য**: পড়তে থাকা %K সবসময় বোঝায় না দাম পড়েছে। এটি বোঝাতে পারে জানালার মেঝে উঠেছে। বার ১৯-এ দাম আসলে ০.৭০ *বেড়েছে* এবং কাঁচা %K তার সঙ্গে বেড়েছে, কিন্তু %D পড়েই গেছে, কারণ %D এমন একটি জানালার দিকে তাকিয়ে যা ইতিমধ্যে সরে গেছে।

### যে পাঠটি L কলাম আপনাকে দেবে না

লক্ষ করুন শিটের জোন কলাম বার ১৪ পর্যন্ত নীরব থাকে ও তারপর **স্লো %K**-এর ওপর রিপোর্ট করে, %D-এর ওপর নয় — \`L20\` পরীক্ষা করে \`J20\`, আর গেট করে \`K20\` উপস্থিত আছে কি না তার ওপর। এটি ইচ্ছাকৃত পছন্দ আর কেন তা জানা দরকার: %D দুবার মসৃণ, দেরিতে তার প্রান্তে পৌঁছায় ও দেরিতে ছাড়ে। **%D-এর ওপর গড়া জোন লেবেল বার ১৭-তেও OVERBOUGHT বলবে যখন ক্রসওভার বার ১৬-তেই হয়ে গেছে।** আপনি যে দুটি রেখা সত্যিই ট্রেড করেন তার দ্রুততরটির ওপর জোন লেবেল করুন।

### এবার সেই পাল্টা-হিসাব যা এসবের যেকোনোটির চেয়ে বেশি গুরুত্বপূর্ণ

ওপরের সবকিছু ধরে নিয়েছে ৬.১০ দশ-দিনের রেঞ্জ ও টাকাপ্রতি ১৬.৩৯৩৪ %K পয়েন্টের একটি শেয়ার। একে বদলে সত্যিকারের পাতলা একটি ডিএসই কাউন্টার বসান — ধরুন দশ সেশন ধরে ২০.১০ ও ২০.৩০-এর মধ্যে লেনদেন হওয়া একটি স্মল-ক্যাপ:

$$\\text{রেঞ্জ} = 0.20, \\qquad \\frac{100}{0.20} = 500 \\text{ %K পয়েন্ট প্রতি ১ টাকায়}$$

$$500 \\times 0.10 = 50 \\text{ %K পয়েন্ট প্রতি সর্বনিম্ন টিকে}$$

**একটি টিক ঐ অসিলেটরকে পঞ্চাশ পয়েন্ট সরায়।** ২০.২০-তে ক্লোজ দেখায় ৫০, ২০.৩০-তে ১০০, ২০.১০-তে ০, আর মসৃণ %D এসবের মাঝখান দিয়ে একটি মনোরম ঢেউ আঁকে। এঁকে দেখুন — ওপরের NAVANACNG চার্ট থেকে আলাদা করা যাবে না। **এটি এমন একটি শেয়ারে কোয়ান্টাইজেশন শব্দ যা পনেরো দিনে বিশ পয়সাও নড়েনি।**

গার্ডের ভেতর দিয়ে চালান: $0.20 < 3.12$, H ঘর ফেরত দেয় **TOO NARROW**, I ঘর ফাঁকা, আর গোটা পরবর্তী শৃঙ্খল — স্লো %K, %D, জোন, সিগন্যাল স্টেট — তার সঙ্গে ফাঁকা ফেরত দেয়। এটিই সঠিক আউটপুট। **ডিএসই-তে নির্দেশকটির সবচেয়ে মূল্যবান আচরণ হলো কোনো আউটপুট দিতে অস্বীকার করা।**

### শেষ বারটি আসলে কী বলে

শিটের চূড়ান্ত ডায়াগনস্টিক B33 পড়ে **"%K below %D"** — ৫৬.৭৪৬৫ বনাম ৬৩.০৩৯২ — আর B29 রেঞ্জকে ৩.৯১০৩ ATR জানায়, স্বচ্ছন্দে মাপযোগ্য।

সুতরাং: একটি বৈধ হর, চার সেশন আগে ঘটে যাওয়া একটি মন্দাসূচক ক্রস, নব্বইয়ের ঘর থেকে পঞ্চাশের মাঝামাঝিতে নেমে আসা একটি অসিলেটর, আর ৫৫.৪০ শীর্ষ থেকে ৫৩.৪০-এ ফিরে আসা দাম। **এটি একটি ছেড়ে দেওয়া লং, শর্ট নয়।** ডিএসই-তে নির্ভরযোগ্য ধার নেই আর ওভারবট রিডিং প্রথম থেকেই শর্ট সংকেত ছিল না — এটি ছিল অপেক্ষার সংকেত, তারপর ক্রসওভারে প্রস্থানের সংকেত। অধ্যায় ৩৫-এর MACD একই মোড় অবস্থান থেকে নয়, মোমেন্টাম থেকে পড়েছে, আর দুটি একসঙ্গে যেকোনো একটির চেয়ে বেশি মূল্যবান; অধ্যায় ৩৮-এর বলিঞ্জার ব্যান্ড এরপর একই রেঞ্জ-প্রশ্নটি অস্থিরতার ভাষায় রাখে।`,
    },

    formula: {
      en: `### 1. %K is a min–max normalisation, and that is the whole idea

$$\\%K_t = \\frac{C_t - L_n}{H_n - L_n} \\times 100, \\qquad H_n = \\max_{i=0}^{n-1} H_{t-i}, \\quad L_n = \\min_{i=0}^{n-1} L_{t-i}$$

Strip away the trading language and this is the standard min–max rescaling of statistics: take a value, subtract the sample minimum, divide by the sample spread. **The result is a pure position, dimensionless, with the taka cancelling out of numerator and denominator.**

Two properties follow at once, and both matter:

**It is bounded to $[0, 100]$ by construction, not by clipping.** Since $L_n \\le C_t \\le H_n$ — the close of bar $t$ is a price traded inside bar $t$, and bar $t$ is inside the window — the ratio cannot escape $[0,1]$. Compare this with RSI, which is bounded by an algebraic identity on the ratio of averages and approaches its limits asymptotically. **RSI 100 requires that not one down-close occurred in the lookback. %K 100 requires only that today closed on its window high, which happens routinely.** That difference is why stochastic saturates and RSI merely compresses.

**It is scale-free across instruments.** A 40-taka stock and a 400-taka stock with identical relative behaviour produce identical %K. That is what makes 20 and 80 comparable across a watchlist at all — and it is also what strips out the one piece of information you most need on the DSE, namely whether the range is big enough to be worth dividing by. **The normalisation that makes the indicator portable is exactly the normalisation that hides its own failure mode.** Section 6 puts it back.

### 2. Why the close, and why the window includes today

Lane could have used the midpoint, the VWAP, or the open. He used the close, and the choice is a claim rather than a convention:

$$\\text{position of } C_t \\;\\Rightarrow\\; \\text{who was willing to hold overnight}$$

The close is the only price of the session at which every participant is forced to commit capital across the gap risk. Intraday prints can be pushed; the close is paid for. **%K is therefore a measure of end-of-session control, and every interpretation in this chapter inherits that premise — including its failures.**

The window includes today's high and low. This is not optional bookkeeping: excluding today would allow $C_t > H_n$ and break the bound, producing readings above 100. **If your implementation ever prints 104, you have excluded the current bar from the extremes.**

### 3. %D, the three variants, and the algebra that collapses them

$$\\%D_t = \\frac{1}{d}\\sum_{i=0}^{d-1} \\%K_{t-i}$$

Write $R_t$ for raw %K. Then:

| Variant | Plotted %K | Plotted %D |
|---|---|---|
| **Fast** | $R_t$ | $\\text{SMA}_3(R)_t$ |
| **Slow** | $\\text{SMA}_3(R)_t$ | $\\text{SMA}_3(\\text{SMA}_3(R))_t$ |
| **Full** $(n,s,d)$ | $\\text{SMA}_s(R)_t$ | $\\text{SMA}_d(\\text{SMA}_s(R))_t$ |

$$\\boxed{\\;\\text{slow }\\%K \\;\\equiv\\; \\text{fast }\\%D\\;}$$

**The slow variant is the fast variant with both lines shifted one smoothing stage down the chain.** It is not a different indicator, a different premise, or a different timeframe. Full stochastic $(n, s, d)$ merely exposes $s$ and $d$ instead of freezing them at 3; setting $(n, 1, 3)$ recovers fast, $(n, 3, 3)$ recovers slow. **The universal default of "14, 3, 3" is a full stochastic that reproduces the slow variant, which is why almost nobody who says "I use fast stochastic" is actually looking at one.**

Two smoothings of an SMA₃ are not the same as one SMA₅, incidentally — the composite weights are $\\tfrac{1}{9}(1,2,3,2,1)$, a triangular kernel, not a rectangular one. **The double-smoothed line is centre-weighted, which is why it turns later and turns more smoothly.**

### 4. Warm-up, which is longer than everyone assumes

$$t_{\\text{first raw}} = n, \\qquad t_{\\text{first slow}} = n + s - 1, \\qquad t_{\\text{first }\\%D} = n + s + d - 2$$

For $(10, 3, 3)$: bar 10, bar 12, **bar 14**. Five bars of warm-up beyond the lookback itself.

**A platform that shows you a %D value on bar 5 is computing extremes over a growing window and calling it a fixed one.** The early values are not merely imprecise, they are a different statistic. The sheet enforces this with \`COUNT(...)=3\` guards on J and K rather than letting \`AVERAGE\` silently average two cells.

### 5. Sensitivity: two derivatives, and the second one surprises people

Treat $C$, $H_n$, $L_n$ as independent for a moment and differentiate. Let $R = H_n - L_n$.

$$\\frac{\\partial \\%K}{\\partial C} = \\frac{100}{R}, \\qquad \\frac{\\partial \\%K}{\\partial L_n} = -\\frac{100\\,(H_n - C)}{R^{2}}, \\qquad \\frac{\\partial \\%K}{\\partial H_n} = -\\frac{100\\,(C - L_n)}{R^{2}}$$

The first is the one everybody knows: **%K sensitivity is inversely proportional to the range.** At $R = 6.10$ that is 16.3934 points per taka, or 1.6393 points per minimum tick. At $R = 0.20$ it is **500 points per taka and 50 points per tick.**

The second derivative is the one that causes silent misreadings. **%K can fall while price rises, purely because the window's low is climbing as old bars age out.** In §37.5 the ten-day low moves 48.80 → 49.70 in one session; with $H_n = 56.20$, $C = 53.20$, $R = 6.50$ that contributes

$$-\\frac{100 \\times 3.00}{6.50^{2}} \\times 0.90 = -6.39 \\text{ points}$$

against $-12.31$ points from the 0.80 fall in the close. **Roughly a third of that day's decline in %K had nothing to do with what price did that day.**

This is a structural property of any windowed extreme statistic and it has no fix. It is the reason %K is jumpy in ways that momentum indicators are not: **RSI's inputs age out smoothly through Wilder's recursion; stochastic's extremes age out in discrete cliffs.**

### 6. The guard, which must sit upstream of everything

$$\\text{valid}_t = \\mathbb{1}\\Big[\\,R_t \\ge \\max\\big(g \\cdot ATR_t,\\; m \\cdot \\delta\\big)\\Big], \\qquad g \\approx 2,\\; \\delta = \\text{tick size}$$

$$\\%K_t = \\begin{cases} \\dfrac{C_t - L_n}{R_t}\\times 100 & \\text{valid}_t \\\\[6pt] \\varnothing & \\text{otherwise} \\end{cases}$$

**The return value on failure is the empty set, not 50, not the previous value, not zero.** Each of those three substitutions is worse than silence:

- **Returning 50** manufactures a mid-range reading, which is the one value that looks most reasonable and is most likely to be believed.
- **Carrying the previous value** manufactures a flat line, which downstream code reads as a stable oscillator rather than as missing data.
- **Returning zero** manufactures a maximally oversold print on a stock that is not moving, which is precisely the input that generates a buy signal in someone's screener.

In the sheet this is columns H and I: \`H16\` returns \`"OK"\` or \`"TOO NARROW"\`, and \`I16\` returns \`""\` when the guard fails. **The blank propagates**, because \`J\` and \`K\` require \`COUNT(...)=3\` and a blank breaks the count. One guard at the top of the chain kills the entire downstream computation for that bar, which is the correct architecture and the one thing you cannot bolt on later.

With $ATR \\approx 1.56$ and $g = 2$ the threshold is $D4 = 3.12$, and on the worked sample zero bars are blocked. **A guard that never fires on a liquid name and always fires on a locked one is a guard that is calibrated correctly.**

### 7. The signal set, ranked by how much you should trust it

$$\\text{cross}^{+}_t = \\mathbb{1}[\\%K_t > \\%D_t \\;\\land\\; \\%K_{t-1} \\le \\%D_{t-1}], \\qquad \\text{cross}^{-}_t = \\mathbb{1}[\\%K_t < \\%D_t \\;\\land\\; \\%K_{t-1} \\ge \\%D_{t-1}]$$

| Rank | Signal | What it actually asserts | DSE action |
|---|---|---|---|
| 1 | **Crossover with the trend of Ch 34** | closes have started landing higher/lower inside the window | entry or exit |
| 2 | **Crossover against the trend** | a counter-move inside a trend | exit only, never a reversal entry |
| 3 | **Exit from a zone** ($\\%K$ crossing back under 80 or over 20) | the extreme has stopped renewing | tighten or trail |
| 4 | **Zone occupancy** (%K ≥ 80) | closes are near the top of the range | **context only — never an instruction** |
| 5 | **Divergence** | the close is reaching less far into its range than at the prior peak | see Chapter 44; failure rates are high |

**Ranks 1 to 3 are events; rank 4 is a state.** Trading a state means holding a position that generates the same instruction every day for six sessions, which is how the §37.3 trade gave away 2.70 a share.

And rank 4 has no short-side counterpart here. **On the DSE, overbought is an exit-or-hold-off condition and nothing else** — there is no reliable borrow, no functioning short market for retail, and a stochastic pinned at 95 in a trend is a description of strength, not an invitation to fight it.

### 8. The DSE distortions, which precede all of the above

| Distortion | What it does to the arithmetic | Handling |
|---|---|---|
| **Floor price** | $H_n = L_n$, so $R = 0$ and %K is undefined — a division by zero, not a small number | Guard blocks the bar; exclude the whole administered period per Chapter 26 |
| **Circuit limit up** | $C_t = H_t = H_n$ mechanically, so %K prints 100 by regulation rather than by demand | Flag the bar; a 100 that coincides with a limit lock carries no information |
| **Circuit limit down** | Symmetrically, %K prints 0 | Same flag; do not read it as capitulation |
| **Thin float / wide spread** | $R$ of a few ticks gives 50 %K points per tick; %D draws a smooth wave out of pure quantisation | Guard blocks it; if it does not, your $g$ is too small |
| **Long halts and record dates** | The window silently spans a longer calendar period than $n$ sessions | Count sessions, never calendar days, and mark the gap |
| **Block trades printed off-market** | Can set $H_n$ or $L_n$ at a price no continuous order ever met | Use the continuous-session high and low, per Chapter 26 |

**Every row of that table is a way for the denominator to become something other than what the formula assumes it is.** The formula is trivial. Deciding when you are allowed to apply it is the whole job.`,
      bn: `### ১. %K একটি মিন–ম্যাক্স নর্মালাইজেশন, আর ধারণাটি এটুকুই

$$\\%K_t = \\frac{C_t - L_n}{H_n - L_n} \\times 100, \\qquad H_n = \\max_{i=0}^{n-1} H_{t-i}, \\quad L_n = \\min_{i=0}^{n-1} L_{t-i}$$

লেনদেনের পরিভাষা সরিয়ে দিলে এটি পরিসংখ্যানের প্রমিত মিন–ম্যাক্স পুনর্মাপন: একটি মান নিন, নমুনার সর্বনিম্ন বিয়োগ করুন, নমুনার বিস্তার দিয়ে ভাগ করুন। **ফলাফল একটি বিশুদ্ধ অবস্থান, মাত্রাহীন, যেখানে লব ও হর থেকে টাকা কেটে যায়।**

সঙ্গে সঙ্গে দুটি ধর্ম আসে, দুটোই গুরুত্বপূর্ণ:

**এটি ছেঁটে নয়, গঠনগতভাবেই $[0, 100]$-এ সীমাবদ্ধ।** যেহেতু $L_n \\le C_t \\le H_n$ — বার $t$-এর ক্লোজ বার $t$-এর ভেতরে লেনদেন হওয়া একটি দাম, আর বার $t$ জানালার ভেতরে — অনুপাতটি $[0,1]$ ছাড়াতে পারে না। RSI-এর সঙ্গে তুলনা করুন, যা গড়ের অনুপাতের ওপর একটি বীজগাণিতিক অভেদ দ্বারা সীমাবদ্ধ ও তার সীমার দিকে অসীমতটীয়ভাবে এগোয়। **RSI ১০০ হতে হলে লুকব্যাকে একটিও নিম্নমুখী ক্লোজ থাকা চলবে না। %K ১০০ হতে হলে কেবল আজ তার জানালার হাই-তে ক্লোজ হলেই চলে, যা নিয়মিত ঘটে।** এই পার্থক্যেই স্টোক্যাস্টিক পরিপৃক্ত হয় আর RSI কেবল সংকুচিত হয়।

**এটি উপকরণজুড়ে মাপ-নিরপেক্ষ।** অভিন্ন আপেক্ষিক আচরণসম্পন্ন ৪০ টাকার শেয়ার ও ৪০০ টাকার শেয়ার অভিন্ন %K দেয়। এ কারণেই ২০ ও ৮০ একটি ওয়াচলিস্টজুড়ে আদৌ তুলনীয় — আর এ কারণেই ডিএসই-তে আপনার সবচেয়ে দরকারি তথ্যটিই ছেঁকে বাদ পড়ে যায়, অর্থাৎ রেঞ্জটি আদৌ ভাগ করার মতো বড় কি না। **যে নর্মালাইজেশন নির্দেশকটিকে বহনযোগ্য করে, ঠিক সেই নর্মালাইজেশনই তার নিজের ব্যর্থতার ধরনটি লুকিয়ে ফেলে।** ৬ নম্বর অনুচ্ছেদ সেটি ফিরিয়ে আনে।

### ২. কেন ক্লোজ, আর কেন জানালায় আজকের বারও থাকে

লেন মধ্যবিন্দু, VWAP বা ওপেন ব্যবহার করতে পারতেন। তিনি ক্লোজ ব্যবহার করেছেন, আর পছন্দটি প্রথা নয়, একটি দাবি:

$$C_t\\text{-এর অবস্থান} \\;\\Rightarrow\\; \\text{রাতভর ধরে রাখতে কে রাজি ছিলেন}$$

ক্লোজই সেশনের একমাত্র দাম যেখানে প্রত্যেক অংশগ্রহণকারীকে গ্যাপ ঝুঁকির ওপারে পুঁজি প্রতিশ্রুত করতে বাধ্য হতে হয়। ইন্ট্রাডে প্রিন্ট ঠেলে সরানো যায়; ক্লোজের দাম দিতে হয়। **তাই %K সেশন-শেষের নিয়ন্ত্রণের পরিমাপ, আর এই অধ্যায়ের প্রতিটি ব্যাখ্যা ঐ ধারণাটির উত্তরাধিকারী — তার ব্যর্থতাগুলোসহ।**

জানালায় আজকের হাই ও লো থাকে। এটি ঐচ্ছিক হিসাবরক্ষণ নয়: আজকেরটি বাদ দিলে $C_t > H_n$ সম্ভব হতো ও সীমাটি ভাঙত, ১০০-এর ওপরে রিডিং তৈরি হতো। **আপনার বাস্তবায়ন কখনো ১০৪ ছাপলে বুঝবেন আপনি চলতি বারটিকে প্রান্ত থেকে বাদ দিয়েছেন।**

### ৩. %D, তিনটি ধরন, ও যে বীজগণিত এদের এক করে দেয়

$$\\%D_t = \\frac{1}{d}\\sum_{i=0}^{d-1} \\%K_{t-i}$$

কাঁচা %K-কে $R_t$ লিখুন। তাহলে:

| ধরন | আঁকা %K | আঁকা %D |
|---|---|---|
| **ফাস্ট** | $R_t$ | $\\text{SMA}_3(R)_t$ |
| **স্লো** | $\\text{SMA}_3(R)_t$ | $\\text{SMA}_3(\\text{SMA}_3(R))_t$ |
| **ফুল** $(n,s,d)$ | $\\text{SMA}_s(R)_t$ | $\\text{SMA}_d(\\text{SMA}_s(R))_t$ |

$$\\boxed{\\;\\text{স্লো }\\%K \\;\\equiv\\; \\text{ফাস্ট }\\%D\\;}$$

**স্লো ধরনটি ফাস্ট ধরনই, যেখানে দুটি রেখাই শৃঙ্খলে এক ধাপ নিচে সরানো।** এটি ভিন্ন নির্দেশক নয়, ভিন্ন ধারণা নয়, ভিন্ন টাইমফ্রেমও নয়। ফুল স্টোক্যাস্টিক $(n, s, d)$ কেবল $s$ ও $d$-কে ৩-এ জমিয়ে না রেখে খুলে দেয়; $(n, 1, 3)$ বসালে ফাস্ট, $(n, 3, 3)$ বসালে স্লো ফিরে আসে। **সর্বজনীন ডিফল্ট "১৪, ৩, ৩" একটি ফুল স্টোক্যাস্টিক যা স্লো ধরনটিই পুনরুৎপাদন করে, আর এ কারণেই যাঁরা বলেন "আমি ফাস্ট স্টোক্যাস্টিক ব্যবহার করি" তাঁদের প্রায় কেউই আসলে সেটি দেখছেন না।**

প্রসঙ্গত, SMA₃-এর দুবার মসৃণকরণ একটি SMA₅-এর সমান নয় — যৌগিক ওজনগুলো $\\tfrac{1}{9}(1,2,3,2,1)$, একটি ত্রিভুজাকার কার্নেল, আয়তাকার নয়। **দ্বিগুণ-মসৃণ রেখাটি কেন্দ্র-ভারিত, আর এ কারণেই তা দেরিতে ও মসৃণভাবে ঘোরে।**

### ৪. ওয়ার্ম-আপ, যা সবার ধারণার চেয়ে লম্বা

$$t_{\\text{প্রথম কাঁচা}} = n, \\qquad t_{\\text{প্রথম স্লো}} = n + s - 1, \\qquad t_{\\text{প্রথম }\\%D} = n + s + d - 2$$

$(10, 3, 3)$-এর জন্য: বার ১০, বার ১২, **বার ১৪**। লুকব্যাকের বাইরেও পাঁচ বার ওয়ার্ম-আপ।

**যে প্ল্যাটফর্ম আপনাকে বার ৫-এ একটি %D মান দেখায় সে একটি বাড়তে থাকা জানালায় প্রান্ত গণনা করে তাকে স্থির জানালা বলছে।** প্রাথমিক মানগুলো কেবল অসূক্ষ্ম নয়, ওগুলো ভিন্ন একটি পরিসংখ্যান। শিটটি J ও K-তে \`AVERAGE\`-কে নীরবে দুটি ঘরের গড় নিতে না দিয়ে \`COUNT(...)=3\` গার্ড দিয়ে এটি প্রয়োগ করে।

### ৫. সংবেদনশীলতা: দুটি অন্তরজ, আর দ্বিতীয়টি মানুষকে চমকে দেয়

এক মুহূর্তের জন্য $C$, $H_n$, $L_n$-কে স্বাধীন ধরে অন্তরকলন করুন। ধরুন $R = H_n - L_n$।

$$\\frac{\\partial \\%K}{\\partial C} = \\frac{100}{R}, \\qquad \\frac{\\partial \\%K}{\\partial L_n} = -\\frac{100\\,(H_n - C)}{R^{2}}, \\qquad \\frac{\\partial \\%K}{\\partial H_n} = -\\frac{100\\,(C - L_n)}{R^{2}}$$

প্রথমটি সবাই জানেন: **%K-এর সংবেদনশীলতা রেঞ্জের ব্যস্তানুপাতিক।** $R = 6.10$-এ তা টাকাপ্রতি ১৬.৩৯৩৪ পয়েন্ট, অর্থাৎ সর্বনিম্ন টিকপ্রতি ১.৬৩৯৩ পয়েন্ট। $R = 0.20$-এ তা **টাকাপ্রতি ৫০০ পয়েন্ট ও টিকপ্রতি ৫০ পয়েন্ট।**

দ্বিতীয় অন্তরজটিই নীরব ভুল পাঠ তৈরি করে। **দাম বাড়তে থাকা অবস্থাতেও %K পড়তে পারে, কেবল এ কারণে যে পুরোনো বার বুড়ো হয়ে বেরিয়ে যাওয়ায় জানালার লো উঠছে।** §৩৭.৫-এ দশ দিনের লো এক সেশনে ৪৮.৮০ → ৪৯.৭০ যায়; $H_n = 56.20$, $C = 53.20$, $R = 6.50$ ধরে তার অবদান

$$-\\frac{100 \\times 3.00}{6.50^{2}} \\times 0.90 = -6.39 \\text{ পয়েন্ট}$$

আর ক্লোজের ০.৮০ পতন থেকে আসে $-12.31$ পয়েন্ট। **ঐ দিনের %K পতনের মোটামুটি এক-তৃতীয়াংশের সঙ্গে ঐ দিন দাম কী করেছে তার কোনো সম্পর্ক ছিল না।**

এটি যেকোনো জানালাভিত্তিক চরম-মান পরিসংখ্যানের কাঠামোগত ধর্ম আর এর কোনো প্রতিকার নেই। এ কারণেই %K এমনভাবে লাফায় যেভাবে মোমেন্টাম নির্দেশকরা লাফায় না: **RSI-এর ইনপুট উইল্ডারের পুনরাবৃত্তির ভেতর দিয়ে মসৃণভাবে পুরোনো হয়; স্টোক্যাস্টিকের প্রান্তগুলো বিচ্ছিন্ন খাদে পুরোনো হয়।**

### ৬. গার্ড, যা সবকিছুর উজানে বসতেই হবে

$$\\text{বৈধ}_t = \\mathbb{1}\\Big[\\,R_t \\ge \\max\\big(g \\cdot ATR_t,\\; m \\cdot \\delta\\big)\\Big], \\qquad g \\approx 2,\\; \\delta = \\text{টিক সাইজ}$$

$$\\%K_t = \\begin{cases} \\dfrac{C_t - L_n}{R_t}\\times 100 & \\text{বৈধ}_t \\\\[6pt] \\varnothing & \\text{অন্যথায়} \\end{cases}$$

**ব্যর্থতায় ফেরত মান হলো ফাঁকা সেট, ৫০ নয়, আগের মান নয়, শূন্যও নয়।** এই তিনটি বিকল্পের প্রতিটিই নীরবতার চেয়ে খারাপ:

- **৫০ ফেরত দিলে** একটি মধ্য-রেঞ্জ রিডিং তৈরি হয়, যা দেখতে সবচেয়ে যুক্তিসঙ্গত ও সবচেয়ে বেশি বিশ্বাসযোগ্য।
- **আগের মান বয়ে নিলে** একটি সমতল রেখা তৈরি হয়, যাকে পরবর্তী কোড অনুপস্থিত ডেটা নয়, স্থিতিশীল অসিলেটর হিসেবে পড়ে।
- **শূন্য ফেরত দিলে** নড়াচড়াহীন একটি শেয়ারে সর্বোচ্চ ওভারসোল্ড প্রিন্ট তৈরি হয়, আর ঠিক এই ইনপুটই কারো স্ক্রিনারে একটি কেনার সংকেত জন্ম দেয়।

শিটে এটি H ও I কলাম: \`H16\` ফেরত দেয় \`"OK"\` বা \`"TOO NARROW"\`, আর গার্ড ব্যর্থ হলে \`I16\` ফেরত দেয় \`""\`। **ফাঁকাটি ছড়িয়ে পড়ে**, কারণ \`J\` ও \`K\` চায় \`COUNT(...)=3\` আর একটি ফাঁকা সেই গণনা ভেঙে দেয়। শৃঙ্খলের মাথায় একটি গার্ড ঐ বারের গোটা পরবর্তী গণনা মেরে ফেলে, যা সঠিক স্থাপত্য এবং সেই একটি জিনিস যা পরে জুড়ে দেওয়া যায় না।

$ATR \\approx 1.56$ ও $g = 2$ হলে সীমা $D4 = 3.12$, আর কাজে-লাগানো নমুনায় শূন্যটি বার বাধা পায়। **যে গার্ড তরল নামে কখনো জ্বলে না আর আটকে যাওয়া নামে সবসময় জ্বলে, সেই গার্ডই ঠিকভাবে ক্রমাঙ্কিত।**

### ৭. সংকেতের সেট, কতটা ভরসা করা উচিত সেই ক্রমে

$$\\text{ক্রস}^{+}_t = \\mathbb{1}[\\%K_t > \\%D_t \\;\\land\\; \\%K_{t-1} \\le \\%D_{t-1}], \\qquad \\text{ক্রস}^{-}_t = \\mathbb{1}[\\%K_t < \\%D_t \\;\\land\\; \\%K_{t-1} \\ge \\%D_{t-1}]$$

| ক্রম | সংকেত | আসলে যা দাবি করে | ডিএসই পদক্ষেপ |
|---|---|---|---|
| ১ | **অধ্যায় ৩৪-এর প্রবণতার অনুকূলে ক্রসওভার** | ক্লোজ জানালার ভেতরে উঁচুতে/নিচুতে পড়তে শুরু করেছে | প্রবেশ বা প্রস্থান |
| ২ | **প্রবণতার বিপরীতে ক্রসওভার** | প্রবণতার ভেতরে একটি পাল্টা-চলন | কেবল প্রস্থান, কখনো উল্টো প্রবেশ নয় |
| ৩ | **অঞ্চল থেকে বেরোনো** (%K ৮০-এর নিচে বা ২০-এর ওপরে ফেরা) | চরম অবস্থা আর নবায়িত হচ্ছে না | স্টপ শক্ত বা ট্রেইল করুন |
| ৪ | **অঞ্চলে অবস্থান** (%K ≥ ৮০) | ক্লোজগুলো রেঞ্জের ওপরের দিকে | **কেবল প্রেক্ষাপট — কখনো নির্দেশ নয়** |
| ৫ | **ডাইভারজেন্স** | ক্লোজ আগের চূড়ার মতো রেঞ্জের ভেতরে দূর পৌঁছাচ্ছে না | অধ্যায় ৪৪ দেখুন; ব্যর্থতার হার বেশি |

**১ থেকে ৩ ক্রম ঘটনা; ৪ ক্রম একটি অবস্থা।** একটি অবস্থা ট্রেড করা মানে এমন পজিশন ধরে রাখা যা ছয় সেশন ধরে প্রতিদিন একই নির্দেশ দেয়, আর এভাবেই §৩৭.৩-এর ট্রেড শেয়ারপ্রতি ২.৭০ ছেড়ে দিয়েছে।

আর ৪ ক্রমের এখানে কোনো শর্ট-সাইড প্রতিরূপ নেই। **ডিএসই-তে ওভারবট একটি প্রস্থান-বা-অপেক্ষার অবস্থা, তার বেশি কিছু নয়** — নির্ভরযোগ্য ধার নেই, খুচরা বিনিয়োগকারীর জন্য কার্যকর শর্ট বাজার নেই, আর প্রবণতায় ৯৫-এ আটকে থাকা স্টোক্যাস্টিক শক্তির বর্ণনা, তার সঙ্গে লড়াইয়ের আমন্ত্রণ নয়।

### ৮. ডিএসই বিকৃতি, যা ওপরের সবকিছুর আগে আসে

| বিকৃতি | পাটিগণিতের কী করে | সামলানো |
|---|---|---|
| **ফ্লোর প্রাইস** | $H_n = L_n$, তাই $R = 0$ ও %K অসংজ্ঞায়িত — ছোট সংখ্যা নয়, শূন্য দিয়ে ভাগ | গার্ড বারটি আটকায়; অধ্যায় ২৬ অনুযায়ী গোটা প্রশাসিত সময়কাল বাদ দিন |
| **আপার সার্কিট** | যান্ত্রিকভাবে $C_t = H_t = H_n$, তাই %K চাহিদা নয়, বিধির কারণে ১০০ দেখায় | বারটি চিহ্নিত করুন; লিমিট লকের সঙ্গে মেলা ১০০ কোনো তথ্য বহন করে না |
| **লোয়ার সার্কিট** | প্রতিসমভাবে %K ০ দেখায় | একই চিহ্ন; একে আত্মসমর্পণ হিসেবে পড়বেন না |
| **পাতলা ফ্লোট / চওড়া স্প্রেড** | কয়েক টিকের $R$ টিকপ্রতি ৫০ %K পয়েন্ট দেয়; %D বিশুদ্ধ কোয়ান্টাইজেশন থেকে মসৃণ ঢেউ আঁকে | গার্ড আটকায়; না আটকালে আপনার $g$ খুব ছোট |
| **দীর্ঘ হল্ট ও রেকর্ড ডেট** | জানালা নীরবে $n$ সেশনের চেয়ে লম্বা পঞ্জিকা-সময় ঢেকে ফেলে | সেশন গুনুন, কখনো পঞ্জিকা-দিন নয়, আর ফাঁকটি চিহ্নিত করুন |
| **বাজারের বাইরে ছাপা ব্লক ট্রেড** | এমন দামে $H_n$ বা $L_n$ বসাতে পারে যেখানে কোনো ধারাবাহিক অর্ডার কখনো মেলেনি | অধ্যায় ২৬ অনুযায়ী ধারাবাহিক-সেশনের হাই ও লো ব্যবহার করুন |

**ঐ ছকের প্রতিটি সারি হলো হরের এমন কিছু হয়ে ওঠার একটি পথ যা সূত্রটি ধরে নেয় না।** সূত্রটি তুচ্ছ। কখন তা প্রয়োগের অনুমতি আপনার আছে সেটি ঠিক করাই পুরো কাজ।`,
    },

    manual: {
      en: `**Scenario.** NAVANACNG from §37.3, twenty sessions, full stochastic $(n, s, d) = (10, 3, 3)$. ATR proxy = BDT 1.56, guard multiple $g = 2$, tick 0.10. Every figure below reconciles cell-for-cell with the sheet in §37.6; recompute them yourself and check the cell references as you go.

**Step 1 — Set the parameters and derive the guard threshold before anything else.**

$$B2 = 10, \\quad B3 = 3, \\quad B4 = 3, \\quad D2 = 1.56, \\quad D3 = 2$$
$$D4 = D2 \\times D3 = 1.56 \\times 2 = 3.12$$

**This cell is computed first and referenced by every bar.** It is the minimum ten-day range at which a %K reading is allowed to exist at all. Not a preference; a precondition.

**Step 2 — Build the first window. Bar 10, sheet row 16.**

The window is bars 1–10, so \`E16 = MAX(B7:B16)\` and \`F16 = MIN(C7:C16)\`:

$$H_{10} = \\max(47.90,\\,48.30,\\,48.60,\\,48.20,\\,47.60,\\,48.40,\\,49.30,\\,50.20,\\,51.40,\\,52.00) = 52.00$$
$$L_{10} = \\min(46.80,\\,47.00,\\,47.60,\\,46.90,\\,46.50,\\,46.70,\\,48.00,\\,48.80,\\,49.70,\\,50.60) = 46.50$$
$$G16 = 52.00 - 46.50 = 5.50$$

Note that the high comes from bar 10 and the low from bar 5. **The window's extremes are almost never on the same bar, and neither is usually today.**

**Step 3 — Run the guard.**

$$5.50 \\ge 3.12 \\;\\Rightarrow\\; H16 = \\text{"OK"}$$

**Step 4 — First raw %K.**

$$I16 = \\frac{51.00 - 46.50}{5.50} \\times 100 = \\frac{4.50}{5.50} \\times 100 = 81.8182$$

**Step 5 — Bar 11, row 17, and the thing everyone gets wrong about rolling windows.**

Bar 1 drops out, bar 11 enters. Bar 1 was (47.90, 46.80); bar 11 is (51.80, 50.10). Neither was an extreme, so:

$$E17 = 52.00, \\qquad F17 = 46.50, \\qquad G17 = 5.50 \\quad \\text{— unchanged}$$
$$I17 = \\frac{50.40 - 46.50}{5.50} \\times 100 = \\frac{3.90}{5.50} \\times 100 = 70.9091$$

**The window rolled and the denominator did not move.** Raw %K fell 10.9 points purely on the close. This is the clean case; Step 14 is the dirty one.

**Step 6 — Bar 12, row 18. The denominator moves for the first time.**

Bar 2 (48.30 / 47.00) leaves, bar 12 (52.60 / 50.30) enters and sets a new high:

$$E18 = 52.60, \\qquad F18 = 46.50, \\qquad G18 = 6.10$$
$$I18 = \\frac{52.40 - 46.50}{6.10} \\times 100 = \\frac{5.90}{6.10} \\times 100 = 96.7213$$

**Step 7 — The first slow %K. Sheet cell J18.**

$$J18 = \\frac{81.8182 + 70.9091 + 96.7213}{3} = \\frac{249.4486}{3} = 83.1495$$

**This is bar 12, and it is the first reading the sheet is willing to show for the line you actually trade.** The formula is guarded by \`COUNT(I16:I18)=3\` for exactly this reason — an unguarded \`AVERAGE\` would have printed a two-cell average on bar 11 and a one-cell "average" on bar 10, and both would have looked like data.

**Step 8 — Bars 13 and 14, and hold your nose past the folklore.**

$$I19 = \\frac{53.70 - 46.50}{7.40} \\times 100 = \\frac{7.20}{7.40} \\times 100 = 97.2973$$
$$J19 = \\frac{70.9091 + 96.7213 + 97.2973}{3} = \\frac{264.9277}{3} = 88.3092$$
$$I20 = \\frac{54.50 - 46.50}{8.30} \\times 100 = \\frac{8.00}{8.30} \\times 100 = 96.3855$$
$$J20 = \\frac{96.7213 + 97.2973 + 96.3855}{3} = \\frac{290.4041}{3} = 96.8014$$

Slow %K crossed 80 on bar 12 at a close of 52.40. **Two sessions later it is 96.8014 and the close is 54.50.** Anyone who sold the first overbought print has now watched 2.10 a share go past.

**Step 9 — The first %D. Sheet cell K20.**

$$K20 = \\frac{83.1495 + 88.3092 + 96.8014}{3} = \\frac{268.2601}{3} = 89.4200$$

**Bar 14. Five bars after the lookback was satisfied.** $n + s + d - 2 = 10 + 3 + 3 - 2 = 14$, exactly as the warm-up formula in §37.4 says.

**Step 10 — The zone label, and read the formula rather than the output.**

\`L20\` gates on \`K20\` being present but tests \`J20\`:

$$J20 = 96.8014 \\ge 80 \\;\\Rightarrow\\; L20 = \\text{"OVERBOUGHT ZONE"}$$

**The zone is labelled off slow %K, not off %D, deliberately.** %D is smoothed twice and would keep saying OVERBOUGHT for two sessions after the crossover had already fired.

**Step 11 — Bar 15, row 21. Watch the low move.**

Bar 5 leaves the window, taking the 46.50 low with it. The new minimum is bar 6's 46.70:

$$E21 = 55.60, \\qquad F21 = 46.70, \\qquad G21 = 8.90$$
$$I21 = \\frac{55.40 - 46.70}{8.90} \\times 100 = \\frac{8.70}{8.90} \\times 100 = 97.7528$$
$$J21 = \\frac{97.2973 + 96.3855 + 97.7528}{3} = \\frac{291.4356}{3} = 97.1452$$
$$K21 = \\frac{88.3092 + 96.8014 + 97.1452}{3} = \\frac{282.2558}{3} = 94.0853$$

**This is the high-water mark: 55.40 close, 97.1452 slow %K, and %K still above %D.** No exit signal has fired. The folklore has been screaming sell for four sessions.

**Step 12 — Bar 16, row 22. The crossover.**

Bar 6 leaves; the window is bars 7–16 and the minimum jumps to bar 7's 48.00:

$$E22 = 56.20, \\qquad F22 = 48.00, \\qquad G22 = 8.20$$
$$I22 = \\frac{55.10 - 48.00}{8.20} \\times 100 = \\frac{7.10}{8.20} \\times 100 = 86.5854$$
$$J22 = \\frac{96.3855 + 97.7528 + 86.5854}{3} = \\frac{280.7237}{3} = 93.5746$$
$$K22 = \\frac{96.8014 + 97.1452 + 93.5746}{3} = \\frac{287.5212}{3} = 95.8404$$

$$J22 = 93.5746 \\;<\\; K22 = 95.8404$$

**First bearish crossover. Close 55.10.** Note that \`L22\` still says OVERBOUGHT ZONE, because 93.5746 ≥ 80. **The zone label and the signal disagree on the same row, and the signal is the one you act on.**

**Step 13 — Bars 17 to 20, tabulated, because the arithmetic is now routine.**

| Bar | Row | $H_n$ | $L_n$ | $R$ | Raw %K | Slow %K | %D |
|---|---|---|---|---|---|---|---|
| 17 | 23 | 56.20 | 48.80 | 7.40 | 70.2703 | 84.8695 | 91.8631 |
| 18 | 24 | 56.20 | 49.70 | 6.50 | 53.8462 | 70.2339 | 82.8927 |
| 19 | 25 | 56.20 | 50.10 | 6.10 | 62.2951 | 62.1372 | 72.4135 |
| 20 | 26 | 56.20 | 50.10 | 6.10 | 54.0984 | 56.7465 | 63.0392 |

Check one of them by hand so the table is not taken on faith — bar 18:

$$I24 = \\frac{53.20 - 49.70}{6.50} \\times 100 = \\frac{3.50}{6.50} \\times 100 = 53.8462$$
$$J24 = \\frac{86.5854 + 70.2703 + 53.8462}{3} = \\frac{210.7019}{3} = 70.2339$$
$$K24 = \\frac{93.5746 + 84.8695 + 70.2339}{3} = \\frac{248.6780}{3} = 82.8927$$

**Step 14 — Decompose the bar-17-to-18 fall, because a third of it is not about price.**

Raw %K fell $70.2703 \\to 53.8462$, a drop of 16.42 points. The close fell 0.80, from 54.00 to 53.20. But the window low rose 0.90, from 48.80 to 49.70, as bar 8 aged out.

Using the bar-18 derivatives with $H_n = 56.20$, $C = 53.20$, $R = 6.50$:

$$\\text{from the close: } \\frac{100}{6.50} \\times (-0.80) = -12.31 \\text{ points}$$
$$\\text{from the rising low: } -\\frac{100 \\times 3.00}{6.50^{2}} \\times 0.90 = -6.39 \\text{ points}$$

First-order total $-18.70$ against an actual $-16.42$; the 2.28-point gap is second-order curvature, since both inputs moved at once.

**Roughly one third of that session's decline in %K was the window climbing, not the stock falling.** Nothing on a price chart shows you this. It is a property of windowed extremes and there is no version of the indicator that does not have it.

**Step 15 — The diagnostics block, rows 29 to 33.**

$$B29 = \\frac{G26}{D2} = \\frac{6.10}{1.56} = 3.9103 \\;\\text{ATRs of range}$$
$$B30 = \\frac{100}{G26} = \\frac{100}{6.10} = 16.3934 \\;\\text{%K points per BDT 1}$$
$$B31 = B30 \\times 0.10 = 1.6393 \\;\\text{%K points per tick}$$
$$B32 = \\text{COUNTIF}(H16{:}H26, \\text{"TOO NARROW"}) = 0$$
$$B33: \\; J26 = 56.7465 < K26 = 63.0392 \\;\\Rightarrow\\; \\text{"\\%K below \\%D"}$$

**Read B31 before you read anything else on the sheet.** At 1.6393 points per tick this oscillator has real resolution: a genuine two-taka move produces about 33 points of travel, comfortably more than the noise. **That is the sentence that licenses everything above it.**

**Step 16 — Now run the same sheet on a stock that should not have one.**

Take a thin small-cap that has traded between 20.10 and 20.30 for ten sessions. Change nothing but the data:

$$G = 20.30 - 20.10 = 0.20$$
$$0.20 < 3.12 \\;\\Rightarrow\\; H = \\text{"TOO NARROW"} \\;\\Rightarrow\\; I = \\text{""} \\;\\Rightarrow\\; J = \\text{""} \\;\\Rightarrow\\; K = \\text{""} \\;\\Rightarrow\\; L = \\text{""}$$

And if you had removed the guard:

$$\\frac{100}{0.20} = 500 \\;\\text{%K points per BDT 1}, \\qquad 500 \\times 0.10 = 50 \\;\\text{points per tick}$$

**A single minimum tick moves that oscillator fifty points — thirty times the resolution of the NAVANACNG sheet.** Closes of 20.10 / 20.20 / 20.30 print 0 / 50 / 100. The three-period average of that sequence is a smooth, plausible, entirely meaningless wave. **Plotted side by side with §37.3 you could not tell them apart, and that is the whole argument for the guard.**

**Step 17 — Price the two exit rules, because "context not instruction" is otherwise a slogan.**

Entry at the bar-6 breakout close of 48.20:

| Exit rule | Fires on | Exit close | Gain | Return |
|---|---|---|---|---|
| Slow %K ≥ 80 | bar 12 | 52.40 | 4.20 | 8.71% |
| Fast %K crosses its signal | bar 14 | 54.50 | 6.30 | 13.07% |
| **Slow %K crosses %D** | **bar 16** | **55.10** | **6.90** | **14.32%** |

$$\\frac{4.20}{6.90} = 0.6087$$

**The overbought rule kept 60.87% of what the crossover rule kept, on the identical position.** And note the middle row: **fast and slow disagreed by two sessions and 0.60 a share on the same data on the same day.** If you cannot say which variant your platform draws, you cannot reproduce either number.

**Step 18 — State what the sheet still cannot see, and keep it beside the sheet.**

The guard tests the *size* of the range. It does not test whether the range was created by trading. **A stock that gapped once on a block trade and then sat still for nine sessions can pass a 3.12 range test on a single print.** Nor does any cell here know whether bar 16's high of 56.20 was a circuit lock.

**Add two columns before you trade this: a flag for circuit-limit sessions and a flag for sessions with volume below a threshold.** The arithmetic in Steps 1 to 15 is correct and takes ten minutes. Deciding that the inputs deserved it is the part that takes judgement — which is Chapter 5's discipline, arriving here as a column rather than as an argument.`,
      bn: `**পরিস্থিতি।** §৩৭.৩-এর NAVANACNG, বিশটি সেশন, ফুল স্টোক্যাস্টিক $(n, s, d) = (10, 3, 3)$। ATR বিকল্প = ১.৫৬ টাকা, গার্ড গুণক $g = 2$, টিক ০.১০। নিচের প্রতিটি সংখ্যা §৩৭.৬-এর শিটের সঙ্গে ঘরে-ঘরে মেলে; নিজে পুনর্গণনা করুন ও চলার পথে ঘরের নির্দেশগুলো মিলিয়ে নিন।

**ধাপ ১ — সবকিছুর আগে প্যারামিটার বসান ও গার্ডের সীমা বের করুন।**

$$B2 = 10, \\quad B3 = 3, \\quad B4 = 3, \\quad D2 = 1.56, \\quad D3 = 2$$
$$D4 = D2 \\times D3 = 1.56 \\times 2 = 3.12$$

**এই ঘরটি সবার আগে গণিত হয় ও প্রতিটি বার একে নির্দেশ করে।** এটি সেই ন্যূনতম দশ-দিনের রেঞ্জ যার নিচে একটি %K রিডিং আদৌ থাকার অনুমতি পায় না। পছন্দ নয়; পূর্বশর্ত।

**ধাপ ২ — প্রথম জানালা তৈরি করুন। বার ১০, শিটের সারি ১৬।**

জানালা বার ১–১০, তাই \`E16 = MAX(B7:B16)\` ও \`F16 = MIN(C7:C16)\`:

$$H_{10} = \\max(47.90,\\,48.30,\\,48.60,\\,48.20,\\,47.60,\\,48.40,\\,49.30,\\,50.20,\\,51.40,\\,52.00) = 52.00$$
$$L_{10} = \\min(46.80,\\,47.00,\\,47.60,\\,46.90,\\,46.50,\\,46.70,\\,48.00,\\,48.80,\\,49.70,\\,50.60) = 46.50$$
$$G16 = 52.00 - 46.50 = 5.50$$

লক্ষ করুন হাই এসেছে বার ১০ থেকে আর লো বার ৫ থেকে। **জানালার দুই প্রান্ত প্রায় কখনোই একই বারে থাকে না, আর সাধারণত কোনোটিই আজকের বার নয়।**

**ধাপ ৩ — গার্ড চালান।**

$$5.50 \\ge 3.12 \\;\\Rightarrow\\; H16 = \\text{"OK"}$$

**ধাপ ৪ — প্রথম কাঁচা %K।**

$$I16 = \\frac{51.00 - 46.50}{5.50} \\times 100 = \\frac{4.50}{5.50} \\times 100 = 81.8182$$

**ধাপ ৫ — বার ১১, সারি ১৭, আর রোলিং জানালা সম্পর্কে যে জিনিসটি সবাই ভুল করেন।**

বার ১ বেরিয়ে যায়, বার ১১ ঢোকে। বার ১ ছিল (৪৭.৯০, ৪৬.৮০); বার ১১ (৫১.৮০, ৫০.১০)। কোনোটিই প্রান্ত ছিল না, তাই:

$$E17 = 52.00, \\qquad F17 = 46.50, \\qquad G17 = 5.50 \\quad \\text{— অপরিবর্তিত}$$
$$I17 = \\frac{50.40 - 46.50}{5.50} \\times 100 = \\frac{3.90}{5.50} \\times 100 = 70.9091$$

**জানালা গড়িয়েছে আর হর নড়েনি।** কাঁচা %K কেবল ক্লোজের কারণেই ১০.৯ পয়েন্ট পড়েছে। এটি পরিষ্কার ঘটনা; ধাপ ১৪ নোংরাটি।

**ধাপ ৬ — বার ১২, সারি ১৮। হর প্রথমবার নড়ে।**

বার ২ (৪৮.৩০ / ৪৭.০০) বেরোয়, বার ১২ (৫২.৬০ / ৫০.৩০) ঢোকে ও নতুন হাই বসায়:

$$E18 = 52.60, \\qquad F18 = 46.50, \\qquad G18 = 6.10$$
$$I18 = \\frac{52.40 - 46.50}{6.10} \\times 100 = \\frac{5.90}{6.10} \\times 100 = 96.7213$$

**ধাপ ৭ — প্রথম স্লো %K। শিটের ঘর J18।**

$$J18 = \\frac{81.8182 + 70.9091 + 96.7213}{3} = \\frac{249.4486}{3} = 83.1495$$

**এটি বার ১২, আর আপনি সত্যিই যে রেখাটি ট্রেড করেন তার জন্য শিট এটিই প্রথম দেখাতে রাজি।** সূত্রটি ঠিক এ কারণেই \`COUNT(I16:I18)=3\` দিয়ে পাহারা দেওয়া — গার্ডবিহীন একটি \`AVERAGE\` বার ১১-তে দুই ঘরের গড় ও বার ১০-এ এক ঘরের "গড়" ছাপত, আর দুটোই দেখতে ডেটার মতোই লাগত।

**ধাপ ৮ — বার ১৩ ও ১৪, আর লোককথা পাশ কাটিয়ে যান।**

$$I19 = \\frac{53.70 - 46.50}{7.40} \\times 100 = \\frac{7.20}{7.40} \\times 100 = 97.2973$$
$$J19 = \\frac{70.9091 + 96.7213 + 97.2973}{3} = \\frac{264.9277}{3} = 88.3092$$
$$I20 = \\frac{54.50 - 46.50}{8.30} \\times 100 = \\frac{8.00}{8.30} \\times 100 = 96.3855$$
$$J20 = \\frac{96.7213 + 97.2973 + 96.3855}{3} = \\frac{290.4041}{3} = 96.8014$$

স্লো %K বার ১২-তে ৫২.৪০ ক্লোজে ৮০ পার করেছে। **দুই সেশন পরে তা ৯৬.৮০১৪ আর ক্লোজ ৫৪.৫০।** যিনি প্রথম ওভারবট প্রিন্টে বিক্রি করেছেন তিনি শেয়ারপ্রতি ২.১০ টাকা চোখের সামনে বেরিয়ে যেতে দেখলেন।

**ধাপ ৯ — প্রথম %D। শিটের ঘর K20।**

$$K20 = \\frac{83.1495 + 88.3092 + 96.8014}{3} = \\frac{268.2601}{3} = 89.4200$$

**বার ১৪। লুকব্যাক পূর্ণ হওয়ার পাঁচ বার পরে।** $n + s + d - 2 = 10 + 3 + 3 - 2 = 14$, ঠিক যেমন §৩৭.৪-এর ওয়ার্ম-আপ সূত্র বলে।

**ধাপ ১০ — জোন লেবেল, আর আউটপুট নয়, সূত্রটি পড়ুন।**

\`L20\` গেট করে \`K20\` উপস্থিত কি না তার ওপর, কিন্তু পরীক্ষা করে \`J20\`:

$$J20 = 96.8014 \\ge 80 \\;\\Rightarrow\\; L20 = \\text{"OVERBOUGHT ZONE"}$$

**জোনটি ইচ্ছাকৃতভাবেই স্লো %K থেকে লেবেল করা, %D থেকে নয়।** %D দুবার মসৃণ ও ক্রসওভার হয়ে যাওয়ার পরও দুই সেশন ধরে OVERBOUGHT বলে যেত।

**ধাপ ১১ — বার ১৫, সারি ২১। লো-টি নড়তে দেখুন।**

বার ৫ জানালা ছাড়ে, ৪৬.৫০ লো-টি সঙ্গে নিয়ে যায়। নতুন সর্বনিম্ন বার ৬-এর ৪৬.৭০:

$$E21 = 55.60, \\qquad F21 = 46.70, \\qquad G21 = 8.90$$
$$I21 = \\frac{55.40 - 46.70}{8.90} \\times 100 = \\frac{8.70}{8.90} \\times 100 = 97.7528$$
$$J21 = \\frac{97.2973 + 96.3855 + 97.7528}{3} = \\frac{291.4356}{3} = 97.1452$$
$$K21 = \\frac{88.3092 + 96.8014 + 97.1452}{3} = \\frac{282.2558}{3} = 94.0853$$

**এটিই সর্বোচ্চ বিন্দু: ৫৫.৪০ ক্লোজ, ৯৭.১৪৫২ স্লো %K, আর %K এখনো %D-এর ওপরে।** কোনো প্রস্থান সংকেত জ্বলেনি। লোককথা চার সেশন ধরে বিক্রি বিক্রি চেঁচাচ্ছে।

**ধাপ ১২ — বার ১৬, সারি ২২। ক্রসওভার।**

বার ৬ বেরোয়; জানালা এখন বার ৭–১৬ আর সর্বনিম্ন লাফিয়ে বার ৭-এর ৪৮.০০-তে ওঠে:

$$E22 = 56.20, \\qquad F22 = 48.00, \\qquad G22 = 8.20$$
$$I22 = \\frac{55.10 - 48.00}{8.20} \\times 100 = \\frac{7.10}{8.20} \\times 100 = 86.5854$$
$$J22 = \\frac{96.3855 + 97.7528 + 86.5854}{3} = \\frac{280.7237}{3} = 93.5746$$
$$K22 = \\frac{96.8014 + 97.1452 + 93.5746}{3} = \\frac{287.5212}{3} = 95.8404$$

$$J22 = 93.5746 \\;<\\; K22 = 95.8404$$

**প্রথম মন্দাসূচক ক্রসওভার। ক্লোজ ৫৫.১০।** লক্ষ করুন \`L22\` তখনো OVERBOUGHT ZONE বলছে, কারণ ৯৩.৫৭৪৬ ≥ ৮০। **একই সারিতে জোন লেবেল ও সংকেত অমিল দেখাচ্ছে, আর আপনি সংকেতটির ওপরই কাজ করবেন।**

**ধাপ ১৩ — বার ১৭ থেকে ২০, ছকে, কারণ পাটিগণিতটি এখন রুটিন।**

| বার | সারি | $H_n$ | $L_n$ | $R$ | কাঁচা %K | স্লো %K | %D |
|---|---|---|---|---|---|---|---|
| ১৭ | ২৩ | ৫৬.২০ | ৪৮.৮০ | ৭.৪০ | ৭০.২৭০৩ | ৮৪.৮৬৯৫ | ৯১.৮৬৩১ |
| ১৮ | ২৪ | ৫৬.২০ | ৪৯.৭০ | ৬.৫০ | ৫৩.৮৪৬২ | ৭০.২৩৩৯ | ৮২.৮৯২৭ |
| ১৯ | ২৫ | ৫৬.২০ | ৫০.১০ | ৬.১০ | ৬২.২৯৫১ | ৬২.১৩৭২ | ৭২.৪১৩৫ |
| ২০ | ২৬ | ৫৬.২০ | ৫০.১০ | ৬.১০ | ৫৪.০৯৮৪ | ৫৬.৭৪৬৫ | ৬৩.০৩৯২ |

ছকটি যাতে বিশ্বাসের ওপর না দাঁড়ায় তাই একটি হাতে মিলিয়ে নিন — বার ১৮:

$$I24 = \\frac{53.20 - 49.70}{6.50} \\times 100 = \\frac{3.50}{6.50} \\times 100 = 53.8462$$
$$J24 = \\frac{86.5854 + 70.2703 + 53.8462}{3} = \\frac{210.7019}{3} = 70.2339$$
$$K24 = \\frac{93.5746 + 84.8695 + 70.2339}{3} = \\frac{248.6780}{3} = 82.8927$$

**ধাপ ১৪ — বার ১৭ থেকে ১৮-এর পতনটি ভেঙে দেখুন, কারণ তার এক-তৃতীয়াংশ দাম নিয়ে নয়।**

কাঁচা %K $70.2703 \\to 53.8462$, অর্থাৎ ১৬.৪২ পয়েন্টের পতন। ক্লোজ ০.৮০ পড়েছে, ৫৪.০০ থেকে ৫৩.২০। কিন্তু বার ৮ বুড়ো হয়ে বেরিয়ে যাওয়ায় জানালার লো ০.৯০ উঠেছে, ৪৮.৮০ থেকে ৪৯.৭০।

$H_n = 56.20$, $C = 53.20$, $R = 6.50$ ধরে বার ১৮-এর অন্তরজ ব্যবহার করে:

$$\\text{ক্লোজ থেকে: } \\frac{100}{6.50} \\times (-0.80) = -12.31 \\text{ পয়েন্ট}$$
$$\\text{উঠতে থাকা লো থেকে: } -\\frac{100 \\times 3.00}{6.50^{2}} \\times 0.90 = -6.39 \\text{ পয়েন্ট}$$

প্রথম-ক্রমের মোট $-18.70$, বাস্তব $-16.42$; ২.২৮ পয়েন্টের ফাঁকটি দ্বিতীয়-ক্রমের বক্রতা, যেহেতু দুটি ইনপুটই একসঙ্গে নড়েছে।

**ঐ সেশনের %K পতনের মোটামুটি এক-তৃতীয়াংশ ছিল জানালার ওঠা, শেয়ারের পড়া নয়।** প্রাইস চার্টের কিছুই আপনাকে এটি দেখায় না। এটি জানালাভিত্তিক প্রান্তের ধর্ম আর নির্দেশকটির এমন কোনো সংস্করণ নেই যাতে এটি নেই।

**ধাপ ১৫ — ডায়াগনস্টিক ব্লক, সারি ২৯ থেকে ৩৩।**

$$B29 = \\frac{G26}{D2} = \\frac{6.10}{1.56} = 3.9103 \\;\\text{ATR রেঞ্জ}$$
$$B30 = \\frac{100}{G26} = \\frac{100}{6.10} = 16.3934 \\;\\text{%K পয়েন্ট প্রতি ১ টাকায়}$$
$$B31 = B30 \\times 0.10 = 1.6393 \\;\\text{%K পয়েন্ট প্রতি টিকে}$$
$$B32 = \\text{COUNTIF}(H16{:}H26, \\text{"TOO NARROW"}) = 0$$
$$B33: \\; J26 = 56.7465 < K26 = 63.0392 \\;\\Rightarrow\\; \\text{"\\%K below \\%D"}$$

**শিটের আর কিছু পড়ার আগে B31 পড়ুন।** টিকপ্রতি ১.৬৩৯৩ পয়েন্টে এই অসিলেটরের প্রকৃত রেজোলিউশন আছে: দুই টাকার একটি সত্যিকার চলন প্রায় ৩৩ পয়েন্ট পথ তৈরি করে, শব্দের চেয়ে স্বচ্ছন্দে বেশি। **এই বাক্যটিই তার ওপরের সবকিছুর ছাড়পত্র।**

**ধাপ ১৬ — এবার একই শিট এমন একটি শেয়ারে চালান যার এটি থাকাই উচিত নয়।**

দশ সেশন ধরে ২০.১০ ও ২০.৩০-এর মধ্যে লেনদেন হওয়া একটি পাতলা স্মল-ক্যাপ নিন। ডেটা ছাড়া আর কিছুই বদলাবেন না:

$$G = 20.30 - 20.10 = 0.20$$
$$0.20 < 3.12 \\;\\Rightarrow\\; H = \\text{"TOO NARROW"} \\;\\Rightarrow\\; I = \\text{""} \\;\\Rightarrow\\; J = \\text{""} \\;\\Rightarrow\\; K = \\text{""} \\;\\Rightarrow\\; L = \\text{""}$$

আর গার্ডটি সরিয়ে দিলে:

$$\\frac{100}{0.20} = 500 \\;\\text{%K পয়েন্ট প্রতি ১ টাকায়}, \\qquad 500 \\times 0.10 = 50 \\;\\text{পয়েন্ট প্রতি টিকে}$$

**একটিমাত্র সর্বনিম্ন টিক ঐ অসিলেটরকে পঞ্চাশ পয়েন্ট সরায় — NAVANACNG শিটের রেজোলিউশনের ত্রিশ গুণ।** ২০.১০ / ২০.২০ / ২০.৩০ ক্লোজ দেখায় ০ / ৫০ / ১০০। ঐ ধারার তিন-পর্বের গড় একটি মসৃণ, বিশ্বাসযোগ্য, সম্পূর্ণ অর্থহীন ঢেউ। **§৩৭.৩-এর পাশে রেখে আঁকলে আপনি আলাদা করতে পারবেন না, আর গার্ডের পক্ষে পুরো যুক্তিটি এটাই।**

**ধাপ ১৭ — দুটি প্রস্থান নিয়মের দাম বসান, নইলে "প্রেক্ষাপট, নির্দেশ নয়" কেবল একটি স্লোগান।**

বার ৬-এর ব্রেকআউট ক্লোজ ৪৮.২০-তে প্রবেশ:

| প্রস্থান নিয়ম | জ্বলে | প্রস্থান ক্লোজ | লাভ | রিটার্ন |
|---|---|---|---|---|
| স্লো %K ≥ ৮০ | বার ১২ | ৫২.৪০ | ৪.২০ | ৮.৭১% |
| ফাস্ট %K তার সিগন্যাল পার | বার ১৪ | ৫৪.৫০ | ৬.৩০ | ১৩.০৭% |
| **স্লো %K %D পার** | **বার ১৬** | **৫৫.১০** | **৬.৯০** | **১৪.৩২%** |

$$\\frac{4.20}{6.90} = 0.6087$$

**অভিন্ন পজিশনে ওভারবট নিয়মটি ক্রসওভার নিয়ম যা রেখেছে তার ৬০.৮৭% রেখেছে।** আর মাঝের সারিটি লক্ষ করুন: **একই ডেটায় একই দিনে ফাস্ট ও স্লো দুই সেশন ও শেয়ারপ্রতি ০.৬০ ব্যবধানে অমিল দেখিয়েছে।** আপনার প্ল্যাটফর্ম কোন ধরনটি আঁকছে তা বলতে না পারলে আপনি কোনো সংখ্যাটিই পুনরুৎপাদন করতে পারবেন না।

**ধাপ ১৮ — শিট এখনো কী দেখতে পায় না তা লিখে শিটের পাশে রাখুন।**

গার্ড রেঞ্জের *আকার* পরীক্ষা করে। এটি পরীক্ষা করে না রেঞ্জটি লেনদেন থেকে তৈরি হয়েছে কি না। **যে শেয়ার একটি ব্লক ট্রেডে একবার গ্যাপ করে তারপর নয় সেশন স্থির বসে থাকল, সে একটিমাত্র প্রিন্টে ৩.১২ রেঞ্জ পরীক্ষা পাস করতে পারে।** এখানকার কোনো ঘরও জানে না বার ১৬-এর ৫৬.২০ হাই-টি একটি সার্কিট লক ছিল কি না।

**এটি ট্রেড করার আগে দুটি কলাম যোগ করুন: সার্কিট-সীমার সেশনের জন্য একটি চিহ্ন, আর একটি সীমার নিচে ভলিউমের সেশনের জন্য একটি চিহ্ন।** ধাপ ১ থেকে ১৫-এর পাটিগণিত নির্ভুল ও তাতে দশ মিনিট লাগে। ইনপুটগুলো ঐ পরিশ্রমের যোগ্য ছিল কি না তা ঠিক করাই বিচারবুদ্ধির অংশ — যা অধ্যায় ৫-এর শৃঙ্খলা, এখানে যুক্তি হিসেবে নয়, একটি কলাম হিসেবে হাজির।`,
    },

    mistakes: {
      en: `1. **Selling the first print above 80.** On NAVANACNG slow %K crossed 80 on bar 12 at a close of 52.40 and stayed above it for six consecutive sessions while price ran to 55.40. The crossover exit at bar 16 took 55.10. **The overbought rule captured 6087 of every 10,000 taka the crossover rule captured** — 4.20 against 6.90 a share on the same position. Eighty is a description of where closes are landing, not an instruction.
2. **Not knowing whether your platform draws fast or slow.** Same twenty bars, same day: fast %K crossed its signal on bar 14 at 54.50, slow %K crossed %D on bar 16 at 55.10. **A 0.60 difference a share produced by a setting most users have never opened.** Remember that slow %K *is* fast %D — the two variants are the same numbers read one stage apart, so "which one am I looking at" is always a well-posed question with a checkable answer.
3. **Computing %K at all when the range is 0.20.** At $R = 6.10$ the sheet reports 16.3934 %K points per taka and 1.6393 per tick (B30, B31). At $R = 0.20$ the same arithmetic gives **500 points per taka and 50 points per tick** — one minimum tick moves the oscillator half its full scale. The waves are real; the information content is zero.
4. **Substituting 50, or the previous value, when the range is zero.** Floor-price sessions had $H_n = L_n$ exactly, which is a division by zero and not a small number. **A substituted 50 is the most dangerous of the three fallbacks because it looks the most reasonable**; a carried-forward value reads downstream as a stable oscillator rather than as missing data; a zero manufactures a maximally oversold print on a stock that has not traded. The correct output is the blank that cell I16 returns, and it must propagate through J, K and L.
5. **Excluding the current bar from $H_n$ and $L_n$.** The bound $[0,100]$ holds only because $C_t$ is inside the window whose extremes you took. Drop today's bar and you will eventually print 104, and the reading above 100 is the *symptom*, not the bug — every reading in that stretch was computed against the wrong denominator.
6. **Believing a %D value during warm-up.** With $(10,3,3)$ the first raw %K is bar 10, the first slow %K is bar 12 and the first %D is bar 14, because $n + s + d - 2 = 14$. **A platform that shows a %D on bar 5 has computed extremes over a growing window and drawn it as a fixed one.** The sheet's \`COUNT(...)=3\` guards on J and K exist precisely to refuse this.
7. **Assuming a falling %K means price fell.** Between bars 17 and 18 raw %K fell 16.42 points. The close contributed $-12.31$ and **the ten-day low rising from 48.80 to 49.70 contributed $-6.39$** — roughly a third of the move was the window climbing out from under the price. On bar 19 price rose 0.70 and %D fell anyway. There is no version of a windowed extreme statistic without this property.
8. **Treating overbought as a short.** There is no reliable borrow on the DSE and no functioning retail short market. A stochastic pinned at 95 in a confirmed Chapter 34 uptrend is a description of strength. **Overbought is a hold-off signal and, at the crossover, an exit signal — it is never an entry on the other side**, and the six sessions above 80 in §37.3 are what happens to anyone who reads it as one.
9. **Reading a limit-up 100 as demand.** A stock locked at its upper circuit closes at the highest price the exchange permitted, therefore at $H_n$, therefore at %K = 100 by construction. **Nobody pressed into that close; the session simply ran out of legal room.** Flag circuit sessions before you read any oscillator computed on them — the same discipline Chapter 26 applied to candles.`,
      bn: `১. **৮০-এর ওপরে প্রথম প্রিন্টেই বিক্রি করা।** NAVANACNG-তে স্লো %K বার ১২-তে ৫২.৪০ ক্লোজে ৮০ পার করে এবং পরপর ছয় সেশন তার ওপরে থাকে, এদিকে দাম ৫৫.৪০ পর্যন্ত ছোটে। বার ১৬-এর ক্রসওভার প্রস্থান নিয়েছে ৫৫.১০। **ক্রসওভার নিয়ম যত টাকা ধরেছে ওভারবট নিয়ম তার প্রতি ১০,০০০-এ ৬,০৮৭ ধরেছে** — একই পজিশনে শেয়ারপ্রতি ৪.২০ বনাম ৬.৯০। আশি ক্লোজগুলো কোথায় পড়ছে তার বর্ণনা, নির্দেশ নয়।
২. **আপনার প্ল্যাটফর্ম ফাস্ট না স্লো আঁকছে তা না জানা।** একই বিশটি বার, একই দিন: ফাস্ট %K তার সিগন্যাল পার করেছে বার ১৪-তে ৫৪.৫০-এ, স্লো %K %D পার করেছে বার ১৬-তে ৫৫.১০-এ। **শেয়ারপ্রতি ০.৬০ পার্থক্য, যা তৈরি করেছে এমন একটি সেটিং যা বেশিরভাগ ব্যবহারকারী কখনো খুলেই দেখেননি।** মনে রাখুন স্লো %K আসলে ফাস্ট %D-ই — দুটি ধরন একই সংখ্যা এক ধাপ ব্যবধানে পড়া, তাই "আমি কোনটি দেখছি" সবসময়ই একটি বৈধ প্রশ্ন যার উত্তর যাচাই করা যায়।
৩. **রেঞ্জ ০.২০ হলেও %K গণনা করা।** $R = 6.10$-এ শিট জানায় টাকাপ্রতি ১৬.৩৯৩৪ %K পয়েন্ট ও টিকপ্রতি ১.৬৩৯৩ (B30, B31)। $R = 0.20$-এ একই পাটিগণিত দেয় **টাকাপ্রতি ৫০০ পয়েন্ট ও টিকপ্রতি ৫০ পয়েন্ট** — একটিমাত্র সর্বনিম্ন টিক অসিলেটরকে তার পূর্ণ মাপের অর্ধেক সরায়। ঢেউগুলো সত্যি; তথ্যের পরিমাণ শূন্য।
৪. **রেঞ্জ শূন্য হলে ৫০ বা আগের মান বসানো।** ফ্লোর-প্রাইসের সেশনে $H_n = L_n$ ঠিক ঠিক, যা শূন্য দিয়ে ভাগ, ছোট সংখ্যা নয়। **বসিয়ে দেওয়া ৫০ তিনটি বিকল্পের মধ্যে সবচেয়ে বিপজ্জনক, কারণ তা দেখতে সবচেয়ে যুক্তিসঙ্গত**; বয়ে আনা মানকে পরবর্তী কোড অনুপস্থিত ডেটা নয়, স্থিতিশীল অসিলেটর হিসেবে পড়ে; আর শূন্য এমন শেয়ারে সর্বোচ্চ ওভারসোল্ড প্রিন্ট বানায় যা লেনদেনই হয়নি। সঠিক আউটপুট হলো I16 ঘরের ফেরত দেওয়া ফাঁকা, আর তা J, K ও L-এর ভেতর দিয়ে ছড়িয়ে পড়তেই হবে।
৫. **$H_n$ ও $L_n$ থেকে চলতি বারটি বাদ দেওয়া।** $[0,100]$ সীমাটি কেবল এ কারণেই টেকে যে $C_t$ ঐ জানালার ভেতরে যার প্রান্ত আপনি নিয়েছেন। আজকের বার বাদ দিন, আর একদিন ১০৪ ছাপবেন — আর ১০০-এর ওপরের রিডিংটি *উপসর্গ*, রোগ নয়: ঐ পুরো পর্বের প্রতিটি রিডিংই ভুল হর দিয়ে গণিত হয়েছে।
৬. **ওয়ার্ম-আপের সময়ের %D মান বিশ্বাস করা।** $(10,3,3)$-এ প্রথম কাঁচা %K বার ১০, প্রথম স্লো %K বার ১২ আর প্রথম %D বার ১৪, কারণ $n + s + d - 2 = 14$। **যে প্ল্যাটফর্ম বার ৫-এ একটি %D দেখায় সে বাড়তে থাকা জানালায় প্রান্ত গণনা করে স্থির জানালা হিসেবে এঁকেছে।** শিটে J ও K-এর \`COUNT(...)=3\` গার্ড ঠিক এটিকে প্রত্যাখ্যান করতেই আছে।
৭. **পড়তে থাকা %K মানেই দাম পড়েছে ধরে নেওয়া।** বার ১৭ থেকে ১৮-এর মধ্যে কাঁচা %K ১৬.৪২ পয়েন্ট পড়েছে। ক্লোজের অবদান $-12.31$ আর **দশ দিনের লো ৪৮.৮০ থেকে ৪৯.৭০-এ ওঠার অবদান $-6.39$** — চলনটির মোটামুটি এক-তৃতীয়াংশ ছিল জানালার দামের নিচ থেকে উঠে আসা। বার ১৯-এ দাম ০.৭০ বেড়েছে আর %D তবু পড়েছে। জানালাভিত্তিক চরম-মান পরিসংখ্যানের এমন কোনো সংস্করণ নেই যাতে এই ধর্মটি নেই।
৮. **ওভারবটকে শর্টের সংকেত ভাবা।** ডিএসই-তে নির্ভরযোগ্য ধার নেই, খুচরা পর্যায়ে কার্যকর শর্ট বাজারও নেই। অধ্যায় ৩৪-এ নিশ্চিত হওয়া ঊর্ধ্বমুখী প্রবণতায় ৯৫-এ আটকে থাকা স্টোক্যাস্টিক শক্তির বর্ণনা। **ওভারবট একটি অপেক্ষার সংকেত, আর ক্রসওভারে প্রস্থানের সংকেত — এটি কখনোই উল্টো দিকের প্রবেশ নয়**, আর §৩৭.৩-এর ৮০-র ওপরের ছয় সেশনই দেখায় উল্টো পড়লে কী হয়।
৯. **লিমিট-আপের ১০০-কে চাহিদা হিসেবে পড়া।** উপরের সার্কিটে আটকে যাওয়া শেয়ার এক্সচেঞ্জের অনুমোদিত সর্বোচ্চ দামে ক্লোজ করে, অর্থাৎ $H_n$-এ, অর্থাৎ গঠনগতভাবেই %K = ১০০। **কেউ ঐ ক্লোজ পর্যন্ত চাপ দেননি; সেশনের আইনি জায়গাটাই ফুরিয়ে গেছে।** ঐ সেশনগুলোর ওপর গণিত যেকোনো অসিলেটর পড়ার আগে সার্কিট সেশন চিহ্নিত করুন — অধ্যায় ২৬ ক্যান্ডেলে যে শৃঙ্খলা প্রয়োগ করেছে সেটিই।`,
    },

    tips: {
      en: `1. **Read the range column before the signal column, every single time.** On the sheet that is G, and the diagnostic that makes it human is B31 — %K points per tick. At 1.6393 you have an instrument. At 50 you have a random number generator with a smoothing filter on it.
2. **Set the guard multiple $g$ once, write it in a cell, and never override it per stock.** D3 = 2 and D4 = 3.12 in the worked sheet. **A guard you relax when it blocks a name you like is not a guard.** If it never fires across your whole watchlist, $g$ is too small, not too large.
3. **Know, and write down, which variant your platform draws.** Open the settings, read the three parameters, and note them next to the ticker. "14, 3, 3" is a slow stochastic wearing a full stochastic's clothes. The bar-14-versus-bar-16 difference in §37.5 is what the answer is worth.
4. **Trade the crossover; read the zone.** Ranks 1 to 3 in the §37.4 table are events with timestamps. Rank 4 is a state that repeats the same instruction every day it persists — six days, in the worked case.
5. **Suspend the 20/80 reading entirely while Chapter 34 confirms a trend, and read only crossovers.** This is not a softening of the rule; it is the rule. Mean reversion inside a range is a reasonable prior *in a range*, and the whole content of the 80 line is that prior.
6. **Prefer a crossover that agrees with the trend, and treat a counter-trend crossover as an exit only.** A bearish cross in an uptrend takes you out; it does not put you in on the other side, because there is no other side available to you here.
7. **Flag circuit-limit sessions and low-volume sessions in two dedicated columns before computing anything.** The guard tests the size of the range; it cannot test whether the range was created by trading. **A single block-trade gap can clear a 3.12 range test on one print and nine still sessions.**
8. **Count sessions, never calendar days, and mark long halts.** After a suspension the ten-bar window can silently span three months, and $H_n$ then describes a different company's circumstances than $C_t$ does.
9. **When stochastic and RSI disagree, do not pick a favourite — ask which kind of move is happening.** Stochastic says where the close sits; RSI says how large the moves were. A three-day collapse that closes at the high of the collapse snaps stochastic toward 100 while RSI stays depressed, and both readings are correct.
10. **Pair it with something that is not a bounded oscillator.** Chapter 35's MACD reads the same turn from momentum and has no ceiling to saturate against; Chapter 39's ATR gives you the guard input properly. **Two instruments that fail differently are worth more than two that fail the same way**, which is exactly why running stochastic alongside RSI adds less than most people expect.
11. **Keep a written note of what the sheet cannot see, taped to the sheet.** In this chapter that list is: whether the range was traded or gapped, whether any bar was a circuit lock, whether the float is deep enough for your size, and whether a halt is hiding inside the window.`,
      bn: `১. **প্রতিবার, ব্যতিক্রমহীনভাবে, সংকেত কলামের আগে রেঞ্জ কলাম পড়ুন।** শিটে সেটি G, আর যে ডায়াগনস্টিক তাকে মানুষের বোধগম্য করে তা B31 — টিকপ্রতি %K পয়েন্ট। ১.৬৩৯৩-তে আপনার হাতে একটি যন্ত্র। ৫০-এ আপনার হাতে একটি মসৃণকরণ ফিল্টার লাগানো এলোমেলো সংখ্যা উৎপাদক।
২. **গার্ড গুণক $g$ একবার ঠিক করুন, একটি ঘরে লিখুন, আর কখনো শেয়ার-ভেদে বদলাবেন না।** কাজে-লাগানো শিটে D3 = ২ ও D4 = ৩.১২। **যে গার্ড আপনার পছন্দের নাম আটকালে আপনি শিথিল করেন, সেটি গার্ড নয়।** পুরো ওয়াচলিস্টে কখনো না জ্বললে বুঝবেন $g$ খুব ছোট, বড় নয়।
৩. **আপনার প্ল্যাটফর্ম কোন ধরনটি আঁকে তা জানুন ও লিখে রাখুন।** সেটিংস খুলুন, তিনটি প্যারামিটার পড়ুন, টিকারের পাশে টুকে রাখুন। "১৪, ৩, ৩" ফুল স্টোক্যাস্টিকের পোশাক পরা একটি স্লো স্টোক্যাস্টিক। §৩৭.৫-এর বার ১৪ বনাম বার ১৬-এর পার্থক্যই এই উত্তরটির মূল্য।
৪. **ক্রসওভার ট্রেড করুন; জোন পড়ুন।** §৩৭.৪-এর ছকের ১ থেকে ৩ ক্রম সময়চিহ্নসহ ঘটনা। ৪ ক্রম একটি অবস্থা, যা যতদিন থাকে ততদিন প্রতিদিন একই নির্দেশ দেয় — কাজে-লাগানো ঘটনায় ছয় দিন।
৫. **অধ্যায় ৩৪ যতক্ষণ প্রবণতা নিশ্চিত করছে ততক্ষণ ২০/৮০ পড়া সম্পূর্ণ স্থগিত রাখুন, কেবল ক্রসওভার পড়ুন।** এটি নিয়মের শিথিলকরণ নয়; এটিই নিয়ম। রেঞ্জের ভেতরে গড়ে ফেরা একটি যুক্তিসঙ্গত পূর্বানুমান — *রেঞ্জে*, আর ৮০ রেখাটির পুরো বিষয়বস্তু ঐ পূর্বানুমানই।
৬. **প্রবণতার সঙ্গে মেলা ক্রসওভার পছন্দ করুন, আর প্রবণতা-বিরোধী ক্রসওভারকে কেবল প্রস্থান হিসেবে দেখুন।** ঊর্ধ্বমুখী প্রবণতায় একটি মন্দাসূচক ক্রস আপনাকে বের করে আনে; উল্টো দিকে ঢোকায় না, কারণ এখানে আপনার জন্য উল্টো দিকটিই নেই।
৭. **কিছু গণনার আগে সার্কিট-সীমার সেশন ও কম-ভলিউমের সেশনকে দুটি আলাদা কলামে চিহ্নিত করুন।** গার্ড রেঞ্জের আকার পরীক্ষা করে; রেঞ্জটি লেনদেন থেকে তৈরি কি না তা পারে না। **একটিমাত্র ব্লক-ট্রেড গ্যাপ এক প্রিন্ট ও নয়টি স্থির সেশনেই ৩.১২ রেঞ্জ পরীক্ষা পাস করতে পারে।**
৮. **সেশন গুনুন, কখনো পঞ্জিকা-দিন নয়, আর দীর্ঘ হল্ট চিহ্নিত করুন।** স্থগিতাদেশের পর দশ-বারের জানালা নীরবে তিন মাস ঢেকে ফেলতে পারে, আর তখন $H_n$ যে পরিস্থিতির বর্ণনা দেয় $C_t$ ভিন্ন পরিস্থিতির।
৯. **স্টোক্যাস্টিক ও RSI অমিল দেখালে পছন্দের একটি বাছবেন না — জিজ্ঞেস করুন কোন ধরনের চলন ঘটছে।** স্টোক্যাস্টিক বলে ক্লোজ কোথায় বসে; RSI বলে চলনগুলো কত বড় ছিল। তিন দিনের পতনের শেষে ঐ পতনের হাই-তে ক্লোজ হলে স্টোক্যাস্টিক ১০০-র দিকে ছোটে আর RSI নিচেই থাকে, আর দুটি রিডিংই সঠিক।
১০. **এমন কিছুর সঙ্গে জুড়ুন যা সীমাবদ্ধ অসিলেটর নয়।** অধ্যায় ৩৫-এর MACD একই মোড় মোমেন্টাম থেকে পড়ে ও তার পরিপৃক্ত হওয়ার মতো কোনো ছাদ নেই; অধ্যায় ৩৯-এর ATR গার্ডের ইনপুটটি যথাযথভাবে দেয়। **যে দুটি যন্ত্র ভিন্নভাবে ব্যর্থ হয় তারা একইভাবে ব্যর্থ হওয়া দুটির চেয়ে বেশি মূল্যবান**, আর ঠিক এ কারণেই RSI-এর পাশে স্টোক্যাস্টিক চালিয়ে বেশিরভাগ মানুষের প্রত্যাশার চেয়ে কম পাওয়া যায়।
১১. **শিট কী দেখতে পায় না তার একটি লিখিত নোট শিটের সঙ্গেই আটকে রাখুন।** এই অধ্যায়ে ঐ তালিকাটি হলো: রেঞ্জটি লেনদেনে তৈরি না গ্যাপে, কোনো বার সার্কিট লক ছিল কি না, আপনার আকারের জন্য ফ্লোট যথেষ্ট গভীর কি না, আর জানালার ভেতরে কোনো হল্ট লুকিয়ে আছে কি না।`,
    },

    exercises: {
      en: `1. Build the §37.6 sheet from the twenty bars. Confirm G16 = 5.50, I16 = 81.8182, J18 = 83.1495, K20 = 89.4200, J26 = 56.7465, K26 = 63.0392, and that B33 reads "%K below %D".
2. Verify the warm-up arithmetic on your own build: the first non-blank cell in column I should be row 16, in column J row 18, and in column K row 20. If any of them appears earlier, find the guard you failed to write.
3. Change D3 from 2 to 4, so D4 becomes 6.24. How many bars does B32 now block, and which is the first bar to survive? What does that tell you about how aggressive a guard you can afford on a liquid name?
4. Replace the twenty bars with a stock that traded between 20.10 and 20.30 for ten sessions. Confirm every cell from H through L goes blank. Then delete the guard from H and I and plot the result — write one sentence describing what you are looking at.
5. Rebuild columns J and K as *fast* stochastic: plot I directly against J. On which bar does the bearish cross now fire, and what is the difference in exit price against the slow version?
6. Remove the \`COUNT(...)=3\` condition from J18 so it becomes a plain \`AVERAGE(I16:I18)\`. Drag it up to row 16. What values appear on rows 16 and 17, and why is a number there worse than a blank?
7. Change B2 from 10 to 20 and recompute. Does slow %K still spend six sessions above 80? Does the crossover still fire on bar 16? State the trade-off between saturation and lag in one sentence, with both numbers.
8. Take the bar-17-to-18 fall of 16.42 points in raw %K. Reproduce the decomposition — $-12.31$ from the close, $-6.39$ from the rising low — and then find another bar in the sample where the window's movement contributed more than the close did.
9. Pick a real DSE name from the past year. Compute the ten-day range for every session and count how many fail a guard of twice the average daily high–low. Report the percentage. Then do the same for a small-cap you actually hold.
10. For that same name, identify every session that closed at a circuit limit. Compute %K with those bars included and again with them flagged and excluded. How many of your crossover signals change side?
11. Find a stretch in your data where price rose and %D fell for at least two consecutive sessions. Confirm from the raw high/low columns that the window's low was rising. Write down what you would have concluded if you had only seen the oscillator.
12. In three sentences, write down what B32 = 0 does and does not entitle you to conclude. Keep it beside the sheet.`,
      bn: `১. বিশটি বার থেকে §৩৭.৬-এর শিট তৈরি করুন। নিশ্চিত করুন G16 = ৫.৫০, I16 = ৮১.৮১৮২, J18 = ৮৩.১৪৯৫, K20 = ৮৯.৪২০০, J26 = ৫৬.৭৪৬৫, K26 = ৬৩.০৩৯২, আর B33 পড়ে "%K below %D"।
২. নিজের তৈরি শিটে ওয়ার্ম-আপের পাটিগণিত যাচাই করুন: I কলামের প্রথম অ-ফাঁকা ঘর হওয়া উচিত সারি ১৬, J কলামে সারি ১৮, K কলামে সারি ২০। কোনোটি আগে দেখা দিলে বুঝবেন কোন গার্ডটি লিখতে ভুলেছেন।
৩. D3 ২ থেকে ৪ করুন, যাতে D4 হয় ৬.২৪। B32 এখন কতগুলো বার আটকায়, আর প্রথম টিকে যাওয়া বার কোনটি? তরল নামে কতটা কড়া গার্ড আপনি সইতে পারেন, এ থেকে তা কী বোঝা যায়?
৪. বিশটি বারের বদলে দশ সেশন ধরে ২০.১০ ও ২০.৩০-এর মধ্যে লেনদেন হওয়া একটি শেয়ার বসান। নিশ্চিত করুন H থেকে L পর্যন্ত প্রতিটি ঘর ফাঁকা হয়ে যায়। তারপর H ও I থেকে গার্ড মুছে ফলাফলটি আঁকুন — আপনি কী দেখছেন তা এক বাক্যে লিখুন।
৫. J ও K কলাম *ফাস্ট* স্টোক্যাস্টিক হিসেবে পুনর্নির্মাণ করুন: I-কে সরাসরি J-এর বিপরীতে আঁকুন। মন্দাসূচক ক্রস এখন কোন বারে জ্বলে, আর স্লো সংস্করণের তুলনায় প্রস্থান দামের পার্থক্য কত?
৬. J18 থেকে \`COUNT(...)=3\` শর্তটি সরিয়ে একে সাধারণ \`AVERAGE(I16:I18)\` বানান। সারি ১৬ পর্যন্ত টেনে তুলুন। সারি ১৬ ও ১৭-তে কী মান দেখা যায়, আর সেখানে একটি সংখ্যা থাকা ফাঁকা থাকার চেয়ে খারাপ কেন?
৭. B2 ১০ থেকে ২০ করে পুনর্গণনা করুন। স্লো %K কি এখনো ছয় সেশন ৮০-এর ওপরে থাকে? ক্রসওভার কি এখনো বার ১৬-তে জ্বলে? পরিপৃক্তি ও পিছিয়ে পড়ার মধ্যকার আপসটি দুটি সংখ্যাসহ এক বাক্যে লিখুন।
৮. কাঁচা %K-তে বার ১৭ থেকে ১৮-এর ১৬.৪২ পয়েন্ট পতনটি নিন। বিভাজনটি পুনরুৎপাদন করুন — ক্লোজ থেকে $-12.31$, উঠতে থাকা লো থেকে $-6.39$ — তারপর নমুনার আরেকটি বার খুঁজুন যেখানে জানালার নড়াচড়ার অবদান ক্লোজের চেয়ে বেশি।
৯. গত বছরের একটি প্রকৃত ডিএসই নাম বাছুন। প্রতিটি সেশনের দশ-দিনের রেঞ্জ গণনা করুন ও গুনুন কতগুলো গড় দৈনিক হাই–লো-র দ্বিগুণ গার্ডে ব্যর্থ হয়। শতাংশ জানান। তারপর আপনি সত্যিই ধরে আছেন এমন একটি স্মল-ক্যাপে একই কাজ করুন।
১০. ঐ একই নামের জন্য সার্কিট সীমায় ক্লোজ হওয়া প্রতিটি সেশন শনাক্ত করুন। ঐ বারগুলো রেখে ও চিহ্নিত করে বাদ দিয়ে দুবার %K গণনা করুন। আপনার কতগুলো ক্রসওভার সংকেত পক্ষ বদলায়?
১১. আপনার ডেটায় এমন একটি পর্ব খুঁজুন যেখানে অন্তত পরপর দুই সেশন দাম বেড়েছে আর %D পড়েছে। কাঁচা হাই/লো কলাম থেকে নিশ্চিত করুন জানালার লো উঠছিল। কেবল অসিলেটরটি দেখলে আপনি কী সিদ্ধান্তে আসতেন তা লিখে রাখুন।
১২. তিন বাক্যে লিখুন B32 = ০ আপনাকে কী সিদ্ধান্তে আসার অধিকার দেয় আর কী দেয় না। শিটের পাশে রেখে দিন।`,
    },

    summary: {
      en: `- **%K is a min–max normalisation of the close inside the $n$-bar range**, $\\%K = (C - L_n)/(H_n - L_n) \\times 100$, bounded to $[0,100]$ by construction rather than by clipping. It measures **position, not strength**, and the taka cancels out of numerator and denominator — which is what makes it portable across a watchlist and what hides its own failure mode.
- **Slow %K is exactly fast %D.** Fast plots raw %K against SMA₃(raw); slow plots SMA₃(raw) against SMA₃(SMA₃(raw)); full $(n,s,d)$ merely exposes $s$ and $d$. **The universal "14, 3, 3" is a full stochastic reproducing the slow variant**, which is why almost nobody who says they use fast stochastic is looking at one.
- **Warm-up is $n + s + d - 2$, not $n$.** For $(10,3,3)$ that is bar 10 for raw %K, bar 12 for slow %K and **bar 14 for %D** — five bars beyond the lookback. A platform that prints %D on bar 5 is computing a growing window and drawing it as a fixed one.
- **Overbought is a description, not an instruction, and §37.3 prices it.** Slow %K crossed 80 on bar 12 at 52.40 and stayed above it for six consecutive sessions while price ran to 55.40. The crossover exit fired on bar 16 at 55.10. **From the 48.20 breakout that is 4.20 against 6.90 a share — the overbought rule captured 60.87% of the crossover rule.**
- **Fast and slow disagree on the same data on the same day.** Fast crossed on bar 14 at 54.50, slow on bar 16 at 55.10 — **0.60 a share decided by a setting most users have never opened.** Knowing which variant your platform draws is not a detail; it is a precondition for reproducing any number you read.
- **A falling %K does not always mean price fell.** Between bars 17 and 18 raw %K dropped 16.42 points: $-12.31$ from the 0.80 fall in the close and **$-6.39$ from the ten-day low rising 48.80 → 49.70** as old bars aged out. On bar 19 price rose 0.70 and %D fell anyway. Windowed extremes age out in cliffs; Wilder's recursion does not.
- **The denominator is the hazard, and sensitivity is inversely proportional to it.** At $R = 6.10$ the sheet reports **16.3934 %K points per taka and 1.6393 per tick** (B30, B31). At $R = 0.20$ the same arithmetic gives **500 points per taka and 50 per tick** — one minimum tick moves the oscillator half its scale, and the resulting %D wave is quantisation noise on a stock that has not moved.
- **The guard sits upstream of everything and returns nothing on failure.** $R \\ge \\max(g \\cdot ATR,\\, m \\cdot \\delta)$ with $g = 2$ gives $D4 = 3.12$; column H prints TOO NARROW and column I returns blank, which propagates through J, K and L because they require \`COUNT(...)=3\`. **Substituting 50 is the most dangerous fallback because it looks the most reasonable.** On the worked sample B32 = 0 bars blocked.
- **Three DSE distortions break the input before the formula ever runs.** Floor prices made $H_n = L_n$ exactly — a division by zero, not a small number. A limit-up lock closes at $H_n$ and prints **100 by regulation rather than by demand.** Thin float gives a range of a few ticks that draws beautiful, empty waves. **Flag circuit and low-volume sessions in their own columns; the guard tests the size of the range, not whether it was traded.**
- **There is no short side here, so overbought is an exit or a hold-off and never an entry.** With no reliable borrow, a stochastic pinned at 95 in a Chapter 34-confirmed uptrend is a description of strength. **Trade the crossover, read the zone, and suspend 20/80 entirely while a trend is confirmed.** Chapter 35's MACD reads the same turn from momentum with no ceiling to saturate against, and Chapter 39's ATR supplies the guard input properly — **two instruments that fail differently are worth more than two that fail the same way.**`,
      bn: `- **%K হলো $n$-বার রেঞ্জের ভেতরে ক্লোজের একটি মিন–ম্যাক্স নর্মালাইজেশন**, $\\%K = (C - L_n)/(H_n - L_n) \\times 100$, যা ছেঁটে নয়, গঠনগতভাবেই $[0,100]$-এ সীমাবদ্ধ। এটি মাপে **অবস্থান, শক্তি নয়**, আর লব-হর থেকে টাকা কেটে যায় — এ কারণেই এটি ওয়াচলিস্টজুড়ে বহনযোগ্য, আর এ কারণেই এটি নিজের ব্যর্থতার ধরনটি লুকিয়ে ফেলে।
- **স্লো %K হুবহু ফাস্ট %D।** ফাস্ট আঁকে কাঁচা %K বনাম SMA₃(কাঁচা); স্লো আঁকে SMA₃(কাঁচা) বনাম SMA₃(SMA₃(কাঁচা)); ফুল $(n,s,d)$ কেবল $s$ ও $d$ খুলে দেয়। **সর্বজনীন "১৪, ৩, ৩" স্লো ধরনটিই পুনরুৎপাদনকারী একটি ফুল স্টোক্যাস্টিক**, আর এ কারণেই যাঁরা বলেন ফাস্ট স্টোক্যাস্টিক ব্যবহার করেন তাঁদের প্রায় কেউই তা দেখছেন না।
- **ওয়ার্ম-আপ $n + s + d - 2$, $n$ নয়।** $(10,3,3)$-এ তা কাঁচা %K-এর জন্য বার ১০, স্লো %K-এর জন্য বার ১২ আর **%D-এর জন্য বার ১৪** — লুকব্যাকের বাইরেও পাঁচ বার। যে প্ল্যাটফর্ম বার ৫-এ %D ছাপে সে একটি বাড়তে থাকা জানালা গণনা করে স্থির জানালা হিসেবে আঁকছে।
- **ওভারবট একটি বর্ণনা, নির্দেশ নয়, আর §৩৭.৩ তার দাম বসায়।** স্লো %K বার ১২-তে ৫২.৪০-এ ৮০ পার করে ও পরপর ছয় সেশন তার ওপরে থাকে, এদিকে দাম ছোটে ৫৫.৪০ পর্যন্ত। ক্রসওভার প্রস্থান জ্বলে বার ১৬-তে, ৫৫.১০-এ। **৪৮.২০ ব্রেকআউট থেকে তা শেয়ারপ্রতি ৪.২০ বনাম ৬.৯০ — ওভারবট নিয়ম ক্রসওভার নিয়মের ৬০.৮৭% ধরেছে।**
- **একই ডেটায় একই দিনে ফাস্ট ও স্লো অমিল দেখায়।** ফাস্ট ক্রস করেছে বার ১৪-তে ৫৪.৫০-এ, স্লো বার ১৬-তে ৫৫.১০-এ — **শেয়ারপ্রতি ০.৬০, যার নিষ্পত্তি করেছে এমন একটি সেটিং যা বেশিরভাগ ব্যবহারকারী কখনো খোলেননি।** আপনার প্ল্যাটফর্ম কোন ধরনটি আঁকে তা জানা খুঁটিনাটি নয়; আপনি যে সংখ্যাটিই পড়ুন তা পুনরুৎপাদনের পূর্বশর্ত।
- **পড়তে থাকা %K সবসময় বোঝায় না দাম পড়েছে।** বার ১৭ থেকে ১৮-এর মধ্যে কাঁচা %K ১৬.৪২ পয়েন্ট পড়েছে: ক্লোজের ০.৮০ পতন থেকে $-12.31$ আর **পুরোনো বার বেরিয়ে যাওয়ায় দশ দিনের লো ৪৮.৮০ → ৪৯.৭০ ওঠা থেকে $-6.39$**। বার ১৯-এ দাম ০.৭০ বেড়েছে আর %D তবু পড়েছে। জানালাভিত্তিক প্রান্ত খাদে খাদে পুরোনো হয়; উইল্ডারের পুনরাবৃত্তি হয় না।
- **হরই বিপদ, আর সংবেদনশীলতা তার ব্যস্তানুপাতিক।** $R = 6.10$-এ শিট জানায় **টাকাপ্রতি ১৬.৩৯৩৪ %K পয়েন্ট ও টিকপ্রতি ১.৬৩৯৩** (B30, B31)। $R = 0.20$-এ একই পাটিগণিত দেয় **টাকাপ্রতি ৫০০ পয়েন্ট ও টিকপ্রতি ৫০** — একটি সর্বনিম্ন টিক অসিলেটরকে তার মাপের অর্ধেক সরায়, আর ফলে তৈরি %D ঢেউ এমন শেয়ারে কোয়ান্টাইজেশন শব্দ যা নড়েইনি।
- **গার্ড সবকিছুর উজানে বসে ও ব্যর্থতায় কিছুই ফেরত দেয় না।** $g = 2$ সহ $R \\ge \\max(g \\cdot ATR,\\, m \\cdot \\delta)$ দেয় $D4 = 3.12$; H কলাম ছাপে TOO NARROW ও I কলাম ফেরত দেয় ফাঁকা, যা J, K ও L-এর ভেতর দিয়ে ছড়ায় কারণ তারা \`COUNT(...)=3\` চায়। **৫০ বসানো সবচেয়ে বিপজ্জনক বিকল্প, কারণ তা দেখতে সবচেয়ে যুক্তিসঙ্গত।** কাজে-লাগানো নমুনায় B32 = ০টি বার বাধাপ্রাপ্ত।
- **তিনটি ডিএসই বিকৃতি সূত্র চলার আগেই ইনপুট ভেঙে দেয়।** ফ্লোর প্রাইস $H_n = L_n$ করেছে ঠিক ঠিক — ছোট সংখ্যা নয়, শূন্য দিয়ে ভাগ। লিমিট-আপ লক $H_n$-এ ক্লোজ করে ও **চাহিদা নয়, বিধির কারণে ১০০ ছাপে।** পাতলা ফ্লোট কয়েক টিকের রেঞ্জ দেয়, যা সুন্দর অথচ ফাঁপা ঢেউ আঁকে। **সার্কিট ও কম-ভলিউমের সেশনকে নিজস্ব কলামে চিহ্নিত করুন; গার্ড রেঞ্জের আকার পরীক্ষা করে, তা লেনদেনে তৈরি কি না তা নয়।**
- **এখানে শর্ট সাইড নেই, তাই ওভারবট একটি প্রস্থান বা অপেক্ষা, কখনো প্রবেশ নয়।** নির্ভরযোগ্য ধার ছাড়া, অধ্যায় ৩৪-এ নিশ্চিত হওয়া ঊর্ধ্বমুখী প্রবণতায় ৯৫-এ আটকে থাকা স্টোক্যাস্টিক শক্তির বর্ণনা। **ক্রসওভার ট্রেড করুন, জোন পড়ুন, আর প্রবণতা নিশ্চিত থাকা অবস্থায় ২০/৮০ সম্পূর্ণ স্থগিত রাখুন।** অধ্যায় ৩৫-এর MACD একই মোড় মোমেন্টাম থেকে পড়ে, পরিপৃক্ত হওয়ার মতো ছাদ ছাড়াই, আর অধ্যায় ৩৯-এর ATR গার্ডের ইনপুট যথাযথভাবে দেয় — **যে দুটি যন্ত্র ভিন্নভাবে ব্যর্থ হয় তারা একইভাবে ব্যর্থ হওয়া দুটির চেয়ে বেশি মূল্যবান।**`,
    },
  },

  interview: [
    {
      q: {
        en: 'What does the stochastic oscillator actually measure, and how is that different from RSI?',
        bn: 'স্টোক্যাস্টিক অসিলেটর আসলে কী মাপে, আর তা RSI থেকে কীভাবে আলাদা?',
      },
      a: {
        en: 'It measures position, not strength. Percent K takes today\'s close, subtracts the lowest low of the last n sessions, and divides by the distance between that low and the highest high — so it is a min-max normalisation, the same rescaling you would use on any bounded statistic, and the taka cancels out of the numerator and the denominator. What comes out is a number between zero and one hundred that says where inside the recent trading range the close landed. RSI is a completely different construction: it is the ratio of average gain to average loss over the lookback, so it is a statement about the magnitude of moves rather than the location of one price. The cleanest way to see that they are not interchangeable is the case where they disagree. Take a stock that falls hard for three sessions and then puts in one session that closes at the high of that three-day collapse. RSI is still depressed, because the average loss over the window is large and one session does not change that much. Stochastic snaps toward one hundred, because the close is now at the top of the range. Neither is broken. Stochastic has detected that whoever controls the end of the session has changed hands, and RSI has correctly reported that the damage is still there. The other structural difference is the bound. RSI reaches one hundred only if not a single down close occurred in the lookback, so in practice it compresses toward its extremes and rarely touches them. Percent K reaches one hundred whenever today closes on its window high, which happens routinely, so stochastic genuinely saturates and sits pinned in a trend where RSI merely runs hot.',
        bn: 'এটি অবস্থান মাপে, শক্তি নয়। পারসেন্ট কে আজকের ক্লোজ নেয়, শেষ n সেশনের সর্বনিম্ন লো বিয়োগ করে, আর ঐ লো ও সর্বোচ্চ হাই-এর মধ্যকার দূরত্ব দিয়ে ভাগ করে — অর্থাৎ এটি একটি মিন-ম্যাক্স নর্মালাইজেশন, যেকোনো সীমাবদ্ধ পরিসংখ্যানে আপনি যে পুনর্মাপন করতেন সেটিই, আর লব ও হর থেকে টাকা কেটে যায়। যা বেরোয় তা শূন্য থেকে একশোর মধ্যে একটি সংখ্যা, যা বলে সাম্প্রতিক লেনদেন রেঞ্জের ভেতরে ক্লোজটি কোথায় পড়ল। RSI সম্পূর্ণ ভিন্ন গঠন: এটি লুকব্যাকজুড়ে গড় লাভের সঙ্গে গড় ক্ষতির অনুপাত, তাই এটি একটি দামের অবস্থান নয়, চলনের মাত্রা সম্পর্কে বক্তব্য। এরা যে বিনিময়যোগ্য নয় তা সবচেয়ে পরিষ্কার দেখা যায় যেখানে এরা অমিল দেখায়। এমন একটি শেয়ার নিন যা তিন সেশন জোরে পড়ে, তারপর একটি সেশনে ঐ তিন দিনের পতনের হাই-তে ক্লোজ করে। RSI তখনো নিচে, কারণ জানালাজুড়ে গড় ক্ষতি বড় আর একটি সেশন তা খুব একটা বদলায় না। স্টোক্যাস্টিক একশোর দিকে ছিটকে ওঠে, কারণ ক্লোজ এখন রেঞ্জের চূড়ায়। কোনোটিই নষ্ট নয়। স্টোক্যাস্টিক ধরেছে যে সেশনের শেষটা কার নিয়ন্ত্রণে তা হাতবদল হয়েছে, আর RSI ঠিকই জানিয়েছে ক্ষতিটা এখনো আছে। অন্য কাঠামোগত পার্থক্যটি হলো সীমা। RSI একশোতে পৌঁছায় কেবল যদি লুকব্যাকে একটিও নিম্নমুখী ক্লোজ না থাকে, তাই বাস্তবে তা তার প্রান্তের দিকে সংকুচিত হয় ও কদাচিৎ স্পর্শ করে। পারসেন্ট কে একশোতে পৌঁছায় যখনই আজ তার জানালার হাই-তে ক্লোজ হয়, যা নিয়মিত ঘটে, তাই স্টোক্যাস্টিক সত্যিই পরিপৃক্ত হয় ও প্রবণতায় আটকে বসে থাকে যেখানে RSI কেবল গরম হয়ে চলে।',
      },
    },
    {
      q: {
        en: 'Your stochastic has been above 80 for six sessions and the client wants to know why you have not sold. What do you tell them?',
        bn: 'আপনার স্টোক্যাস্টিক ছয় সেশন ধরে ৮০-এর ওপরে, আর ক্লায়েন্ট জানতে চান আপনি কেন বিক্রি করেননি। তাঁকে কী বলবেন?',
      },
      a: {
        en: 'I tell them that a reading above eighty is a description of where closes are landing, not an instruction, and then I show them the arithmetic on the worked case rather than arguing about it. On that sample slow percent K crossed eighty on bar twelve at a close of fifty-two point four zero, and it stayed above eighty for six consecutive sessions while price ran to fifty-five point four zero. Somebody who sold the first overbought print exited at fifty-two point four zero. The crossover rule — percent K falling back through percent D — fired on bar sixteen at a close of fifty-five point one zero. From the breakout close of forty-eight point two zero, that is a gain of four point two zero a share against six point nine zero a share, so the overbought rule captured about sixty point eight seven percent of what the crossover rule captured on the identical position in the identical stock. Two taka seventy a share is the price of reading a description as an instruction. And the reason it happens is structural rather than accidental. In a genuine uptrend the close lands near the top of the ten-day range day after day, which is exactly what an uptrend is, so the oscillator sits pinned near its ceiling and generates the same instruction every single morning until you eventually stop believing it or run out of position. My rule is that while the trend tools of chapter thirty-four confirm a trend, I suspend the twenty and eighty reading entirely and read only crossovers. When the market is genuinely range-bound the eighty line becomes useful again, because then the mean reversion prior it encodes is actually the right prior.',
        bn: 'আমি তাঁকে বলি ৮০-এর ওপরের রিডিং হলো ক্লোজগুলো কোথায় পড়ছে তার বর্ণনা, নির্দেশ নয়, আর তারপর তর্ক না করে কাজে-লাগানো ঘটনার পাটিগণিতটি দেখাই। ঐ নমুনায় স্লো পারসেন্ট কে বার বারোতে বায়ান্ন দশমিক চার শূন্য ক্লোজে আশি পার করেছে, আর পরপর ছয় সেশন আশির ওপরে থেকেছে, এদিকে দাম ছুটেছে পঞ্চান্ন দশমিক চার শূন্য পর্যন্ত। যিনি প্রথম ওভারবট প্রিন্টে বিক্রি করেছেন তিনি বেরিয়েছেন বায়ান্ন দশমিক চার শূন্যে। ক্রসওভার নিয়ম — পারসেন্ট কে পারসেন্ট ডি-এর নিচে নেমে আসা — জ্বলেছে বার ষোলোতে, পঞ্চান্ন দশমিক এক শূন্য ক্লোজে। আটচল্লিশ দশমিক দুই শূন্য ব্রেকআউট ক্লোজ থেকে তা শেয়ারপ্রতি চার দশমিক দুই শূন্য বনাম ছয় দশমিক নয় শূন্য, অর্থাৎ অভিন্ন শেয়ারে অভিন্ন পজিশনে ওভারবট নিয়ম ক্রসওভার নিয়মের প্রায় ষাট দশমিক আট সাত শতাংশ ধরেছে। শেয়ারপ্রতি দুই টাকা সত্তরই একটি বর্ণনাকে নির্দেশ হিসেবে পড়ার দাম। আর এটি ঘটে দুর্ঘটনাক্রমে নয়, কাঠামোগত কারণে। প্রকৃত ঊর্ধ্বমুখী প্রবণতায় ক্লোজ দিনের পর দিন দশ দিনের রেঞ্জের চূড়ার কাছে পড়ে, আর প্রবণতা বলতে ঠিক সেটাই বোঝায়, তাই অসিলেটর তার ছাদের কাছে আটকে বসে থাকে ও প্রতিটি সকালে একই নির্দেশ দিতে থাকে যতক্ষণ না আপনি বিশ্বাস করা ছেড়ে দেন বা পজিশন ফুরিয়ে যায়। আমার নিয়ম হলো, অধ্যায় চৌত্রিশের প্রবণতা-যন্ত্র যতক্ষণ প্রবণতা নিশ্চিত করছে ততক্ষণ আমি বিশ ও আশি পড়া সম্পূর্ণ স্থগিত রাখি ও কেবল ক্রসওভার পড়ি। বাজার সত্যিই রেঞ্জে আটকা থাকলে আশি রেখাটি আবার কাজের হয়ে ওঠে, কারণ তখন তার ভেতরে থাকা গড়ে-ফেরার পূর্বানুমানটিই সঠিক পূর্বানুমান।',
      },
    },
    {
      q: {
        en: 'Explain fast, slow and full stochastic, and tell me which one you are looking at right now.',
        bn: 'ফাস্ট, স্লো ও ফুল স্টোক্যাস্টিক ব্যাখ্যা করুন, আর বলুন আপনি এই মুহূর্তে কোনটি দেখছেন।',
      },
      a: {
        en: 'Fast stochastic plots raw percent K against a three-period simple average of raw percent K. Slow stochastic plots that three-period average as its percent K line, and then a three-period average of that as its percent D. The single sentence that clears up all the confusion is that slow percent K is exactly fast percent D — the slow variant is the fast variant with both lines shifted one smoothing stage down the same chain, not a different indicator or a different premise. Full stochastic simply exposes all three parameters, the lookback n, the percent K smoothing s and the percent D periods d, instead of freezing s and d at three; setting n comma one comma three recovers fast and n comma three comma three recovers slow. So the near-universal default of fourteen comma three comma three is a full stochastic that happens to reproduce the slow variant, which is why almost nobody who says they use fast stochastic is actually looking at one. As for which I am looking at, that is a question I expect to be able to answer by opening the settings, not from memory, and I write the three numbers next to the ticker. The reason is that it changes the trade. On the worked twenty-bar sample fast percent K crossed its signal line on bar fourteen at a close of fifty-four point five zero, while slow percent K crossed percent D on bar sixteen at fifty-five point one zero. Same data, same day, sixty paisa a share of difference, decided by a settings box most users have never opened. And I would add one technical detail that matters for interpretation: two successive three-period averages are not the same as one five-period average, because the composite weights come out as one, two, three, two, one over nine — a triangular kernel. The double-smoothed line is centre-weighted, which is exactly why it turns later and turns more smoothly than people expect.',
        bn: 'ফাস্ট স্টোক্যাস্টিক আঁকে কাঁচা পারসেন্ট কে-এর বিপরীতে কাঁচা পারসেন্ট কে-এর তিন-পর্বের সরল গড়। স্লো স্টোক্যাস্টিক ঐ তিন-পর্বের গড়কেই তার পারসেন্ট কে রেখা হিসেবে আঁকে, আর তারপর তার তিন-পর্বের গড়কে পারসেন্ট ডি হিসেবে। যে একটি বাক্য সব বিভ্রান্তি মিটিয়ে দেয় তা হলো স্লো পারসেন্ট কে হুবহু ফাস্ট পারসেন্ট ডি — স্লো ধরনটি ফাস্ট ধরনই, যেখানে একই শৃঙ্খলে দুটি রেখাই এক ধাপ নিচে সরানো, ভিন্ন নির্দেশক বা ভিন্ন ধারণা নয়। ফুল স্টোক্যাস্টিক কেবল তিনটি প্যারামিটারই খুলে দেয়, লুকব্যাক n, পারসেন্ট কে মসৃণকরণ s ও পারসেন্ট ডি পর্ব d, s ও d-কে তিনে জমিয়ে না রেখে; n কমা এক কমা তিন বসালে ফাস্ট ফিরে আসে আর n কমা তিন কমা তিন বসালে স্লো। তাই প্রায় সর্বজনীন ডিফল্ট চোদ্দ কমা তিন কমা তিন একটি ফুল স্টোক্যাস্টিক যা কাকতালীয়ভাবে স্লো ধরনটিই পুনরুৎপাদন করে, আর এ কারণেই যাঁরা বলেন তাঁরা ফাস্ট স্টোক্যাস্টিক ব্যবহার করেন তাঁদের প্রায় কেউই আসলে তা দেখছেন না। আমি কোনটি দেখছি — এ প্রশ্নের উত্তর আমি স্মৃতি থেকে নয়, সেটিংস খুলে দিতে চাই, আর তিনটি সংখ্যা টিকারের পাশে লিখে রাখি। কারণ এটি ট্রেড বদলে দেয়। কাজে-লাগানো বিশ-বারের নমুনায় ফাস্ট পারসেন্ট কে তার সিগন্যাল রেখা পার করেছে বার চোদ্দতে, চুয়ান্ন দশমিক পাঁচ শূন্য ক্লোজে, আর স্লো পারসেন্ট কে পারসেন্ট ডি পার করেছে বার ষোলোতে, পঞ্চান্ন দশমিক এক শূন্যে। একই ডেটা, একই দিন, শেয়ারপ্রতি ষাট পয়সার পার্থক্য, আর তার নিষ্পত্তি করেছে এমন একটি সেটিংস বাক্স যা বেশিরভাগ ব্যবহারকারী কখনো খোলেননি। একটি কারিগরি খুঁটিনাটিও যোগ করব যা ব্যাখ্যার জন্য গুরুত্বপূর্ণ: পরপর দুটি তিন-পর্বের গড় একটি পাঁচ-পর্বের গড়ের সমান নয়, কারণ যৌগিক ওজনগুলো দাঁড়ায় নয় ভাগের এক, দুই, তিন, দুই, এক — একটি ত্রিভুজাকার কার্নেল। দ্বিগুণ-মসৃণ রেখাটি কেন্দ্র-ভারিত, আর ঠিক এ কারণেই তা মানুষের প্রত্যাশার চেয়ে দেরিতে ও মসৃণভাবে ঘোরে।',
      },
    },
    {
      q: {
        en: 'What breaks the stochastic oscillator on the DSE specifically, and what do you do about it?',
        bn: 'ডিএসই-তে বিশেষভাবে কী স্টোক্যাস্টিক অসিলেটর ভেঙে দেয়, আর আপনি তা নিয়ে কী করেন?',
      },
      a: {
        en: 'The denominator breaks, and it breaks in three distinct ways. The first is thin liquidity. Percent K sensitivity is inversely proportional to the range, so on the worked sample with a ten-day range of six point one zero, the sheet reports sixteen point three nine three four percent K points per taka and one point six three nine three points per minimum tick — that is a usable instrument. Take a small cap that has traded between twenty point one zero and twenty point three zero for ten sessions and the same arithmetic gives five hundred points per taka and fifty points per tick. One minimum tick moves the oscillator half its full scale. Plot the smoothed percent D of that and it draws a beautiful wave that is indistinguishable from a real one, and it is pure quantisation noise on a stock that has not moved twenty paisa in a fortnight. The second is the floor price era, where high, low and close were the same number for weeks, so the range was exactly zero and percent K was mathematically undefined — a division by zero, not a small number. Any platform that printed a value for those bars printed a fiction, and the usual silent substitutions are all worse than nothing: fifty manufactures a mid-range reading that looks the most reasonable and is therefore the most likely to be believed, carrying the last value manufactures a flat line that downstream code reads as a stable oscillator, and zero manufactures a maximally oversold print that will fire somebody\'s buy screener. The third is circuit limits, which compress the range from the other direction: a stock locked limit up closes at the highest price the exchange permitted, therefore at the window high, therefore at percent K equals one hundred by construction rather than by demand. What I do is put a guard upstream of the whole calculation. I require the range to be at least twice ATR, or some minimum number of ticks, whichever is larger, and if it fails the indicator returns nothing at all — not fifty, not the previous value, nothing. In the sheet that is a column that prints too narrow in plain words, and the blank propagates through slow percent K, percent D and the zone label because they all require a full count of three inputs. On the worked sample zero bars are blocked, which is what a correctly calibrated guard looks like on a liquid name. And I flag circuit sessions and low-volume sessions in two separate columns, because the guard tests the size of the range and cannot test whether the range was created by anybody actually trading.',
        bn: 'হর ভেঙে যায়, আর তা ভাঙে তিনটি স্বতন্ত্র উপায়ে। প্রথমটি পাতলা তারল্য। পারসেন্ট কে-এর সংবেদনশীলতা রেঞ্জের ব্যস্তানুপাতিক, তাই কাজে-লাগানো নমুনায় ছয় দশমিক এক শূন্য দশ-দিনের রেঞ্জে শিট জানায় টাকাপ্রতি ষোলো দশমিক তিন নয় তিন চার পারসেন্ট কে পয়েন্ট ও সর্বনিম্ন টিকপ্রতি এক দশমিক ছয় তিন নয় তিন পয়েন্ট — এটি ব্যবহারযোগ্য যন্ত্র। এমন একটি স্মল ক্যাপ নিন যা দশ সেশন ধরে বিশ দশমিক এক শূন্য ও বিশ দশমিক তিন শূন্যের মধ্যে লেনদেন হয়েছে, আর একই পাটিগণিত দেয় টাকাপ্রতি পাঁচশো পয়েন্ট ও টিকপ্রতি পঞ্চাশ পয়েন্ট। একটিমাত্র সর্বনিম্ন টিক অসিলেটরকে তার পূর্ণ মাপের অর্ধেক সরায়। তার মসৃণ পারসেন্ট ডি আঁকুন, একটি চমৎকার ঢেউ পাবেন যা আসল ঢেউ থেকে আলাদা করা যায় না, অথচ তা এমন শেয়ারে বিশুদ্ধ কোয়ান্টাইজেশন শব্দ যা পনেরো দিনে বিশ পয়সাও নড়েনি। দ্বিতীয়টি ফ্লোর প্রাইসের যুগ, যেখানে হাই, লো ও ক্লোজ সপ্তাহের পর সপ্তাহ একই সংখ্যা ছিল, তাই রেঞ্জ ছিল ঠিক শূন্য আর পারসেন্ট কে গাণিতিকভাবে অসংজ্ঞায়িত — ছোট সংখ্যা নয়, শূন্য দিয়ে ভাগ। যে প্ল্যাটফর্ম ঐ বারগুলোর জন্য একটি মান ছেপেছে সে একটি কল্পকাহিনি ছেপেছে, আর প্রচলিত নীরব বিকল্পগুলো সবই কিছু না থাকার চেয়ে খারাপ: পঞ্চাশ এমন একটি মধ্য-রেঞ্জ রিডিং বানায় যা দেখতে সবচেয়ে যুক্তিসঙ্গত আর তাই সবচেয়ে বেশি বিশ্বাসযোগ্য, শেষ মান বয়ে নিলে এমন একটি সমতল রেখা তৈরি হয় যাকে পরবর্তী কোড স্থিতিশীল অসিলেটর হিসেবে পড়ে, আর শূন্য এমন একটি সর্বোচ্চ ওভারসোল্ড প্রিন্ট বানায় যা কারো কেনার স্ক্রিনার জ্বালিয়ে দেবে। তৃতীয়টি সার্কিট সীমা, যা রেঞ্জকে উল্টো দিক থেকে সংকুচিত করে: লিমিট-আপে আটকে যাওয়া শেয়ার এক্সচেঞ্জের অনুমোদিত সর্বোচ্চ দামে ক্লোজ করে, অর্থাৎ জানালার হাই-তে, অর্থাৎ চাহিদার কারণে নয়, গঠনগতভাবেই পারসেন্ট কে সমান একশো। আমি যা করি তা হলো গোটা গণনার উজানে একটি গার্ড বসাই। আমি দাবি করি রেঞ্জ অন্তত দুই গুণ ATR হবে, অথবা একটি ন্যূনতম টিক সংখ্যা, এদের মধ্যে যেটি বড়, আর ব্যর্থ হলে নির্দেশক কিছুই ফেরত দেবে না — পঞ্চাশ নয়, আগের মান নয়, কিছুই নয়। শিটে সেটি এমন একটি কলাম যা স্পষ্ট ভাষায় টু ন্যারো ছাপে, আর ফাঁকাটি স্লো পারসেন্ট কে, পারসেন্ট ডি ও জোন লেবেলের ভেতর দিয়ে ছড়িয়ে পড়ে, কারণ ওরা সবাই তিনটি পূর্ণ ইনপুট চায়। কাজে-লাগানো নমুনায় শূন্যটি বার বাধা পায়, আর তরল নামে ঠিকভাবে ক্রমাঙ্কিত গার্ড দেখতে এমনই হয়। আর আমি সার্কিট সেশন ও কম-ভলিউমের সেশন দুটি আলাদা কলামে চিহ্নিত করি, কারণ গার্ড রেঞ্জের আকার পরীক্ষা করে, রেঞ্জটি আদৌ কেউ লেনদেন করে তৈরি করেছে কি না তা পারে না।',
      },
    },
    {
      q: {
        en: 'The stock closed up on the week but your %K fell sharply. Is the indicator wrong?',
        bn: 'শেয়ারটি সপ্তাহে বেড়ে ক্লোজ করেছে অথচ আপনার %K তীব্রভাবে পড়েছে। নির্দেশকটি কি ভুল?',
      },
      a: {
        en: 'No, and this is the property of the indicator that most people never internalise. Percent K has three inputs, not one — the close, the window high and the window low — and the two extremes move on their own schedule as old bars age out of the lookback. If you differentiate, the sensitivity to the close is one hundred over the range, but the sensitivity to the window low is minus one hundred times the gap between the high and the close, divided by the range squared. So the window low rising has a direct negative effect on percent K even if price does nothing at all. On the worked sample, between bar seventeen and bar eighteen raw percent K fell sixteen point four two points. The close fell only eighty paisa, from fifty-four to fifty-three point two zero, which accounts for about minus twelve point three one points. The ten-day low rose from forty-eight point eight zero to forty-nine point seven zero as an old bar dropped out of the window, and that accounts for about minus six point three nine points. First order the two effects sum to minus eighteen point seven zero against an actual minus sixteen point four two, the two-point-two-eight gap being second-order curvature because both inputs moved at once. So roughly a third of that day\'s decline had nothing to do with what price did that day. It gets starker one session later: on bar nineteen price actually rose seventy paisa, raw percent K rose with it, and percent D fell anyway, because percent D is a double average looking at a window that has already climbed. This is a structural property of any windowed extreme statistic and there is no version of the indicator that avoids it. It is also the sharpest practical difference from RSI: Wilder\'s recursion lets old observations decay away smoothly, whereas the stochastic\'s high and low drop out in discrete cliffs. So the answer to the client is that the indicator is correct and the question was wrong — percent K never claimed to measure the direction of price, it measures where the close sits inside a range, and the range moved.',
        bn: 'না, আর এটিই নির্দেশকটির সেই ধর্ম যা বেশিরভাগ মানুষ কখনো আত্মস্থ করেন না। পারসেন্ট কে-এর ইনপুট একটি নয়, তিনটি — ক্লোজ, জানালার হাই ও জানালার লো — আর দুটি প্রান্ত নিজেদের সময়সূচিতে নড়ে, যখন পুরোনো বার লুকব্যাক থেকে বেরিয়ে যায়। অন্তরকলন করলে ক্লোজের প্রতি সংবেদনশীলতা একশো ভাগ রেঞ্জ, কিন্তু জানালার লো-এর প্রতি সংবেদনশীলতা ঋণাত্মক একশো গুণ হাই ও ক্লোজের ব্যবধান, ভাগ রেঞ্জের বর্গ। অর্থাৎ জানালার লো ওঠার সরাসরি ঋণাত্মক প্রভাব পারসেন্ট কে-তে পড়ে, দাম কিছু না করলেও। কাজে-লাগানো নমুনায় বার সতেরো ও বার আঠারোর মধ্যে কাঁচা পারসেন্ট কে ষোলো দশমিক চার দুই পয়েন্ট পড়েছে। ক্লোজ পড়েছে মাত্র আশি পয়সা, চুয়ান্ন থেকে তিপ্পান্ন দশমিক দুই শূন্যে, যার হিসাব প্রায় ঋণাত্মক বারো দশমিক তিন এক পয়েন্ট। দশ দিনের লো আটচল্লিশ দশমিক আট শূন্য থেকে ঊনপঞ্চাশ দশমিক সাত শূন্যে উঠেছে, কারণ একটি পুরোনো বার জানালা থেকে বেরিয়ে গেছে, আর তার হিসাব প্রায় ঋণাত্মক ছয় দশমিক তিন নয় পয়েন্ট। প্রথম ক্রমে দুটি প্রভাবের যোগফল ঋণাত্মক আঠারো দশমিক সাত শূন্য, বাস্তব ঋণাত্মক ষোলো দশমিক চার দুই, আর দুই দশমিক দুই আট ফাঁকটি দ্বিতীয়-ক্রমের বক্রতা, কারণ দুটি ইনপুটই একসঙ্গে নড়েছে। অর্থাৎ ঐ দিনের পতনের মোটামুটি এক-তৃতীয়াংশের সঙ্গে ঐ দিন দাম কী করেছে তার কোনো সম্পর্ক নেই। এক সেশন পরে তা আরও স্পষ্ট: বার ঊনিশে দাম আসলে সত্তর পয়সা বেড়েছে, কাঁচা পারসেন্ট কে তার সঙ্গে বেড়েছে, আর পারসেন্ট ডি তবু পড়েছে, কারণ পারসেন্ট ডি একটি দ্বিগুণ গড় যা ইতিমধ্যে উঠে যাওয়া একটি জানালার দিকে তাকিয়ে। এটি যেকোনো জানালাভিত্তিক চরম-মান পরিসংখ্যানের কাঠামোগত ধর্ম আর নির্দেশকটির এমন কোনো সংস্করণ নেই যা এটি এড়ায়। RSI-এর সঙ্গে সবচেয়ে ধারালো ব্যবহারিক পার্থক্যও এটিই: উইল্ডারের পুনরাবৃত্তি পুরোনো পর্যবেক্ষণকে মসৃণভাবে ক্ষয়ে যেতে দেয়, আর স্টোক্যাস্টিকের হাই ও লো বিচ্ছিন্ন খাদে ঝরে পড়ে। তাই ক্লায়েন্টকে উত্তরটি হলো, নির্দেশক সঠিক আর প্রশ্নটি ভুল — পারসেন্ট কে কখনো দামের দিক মাপার দাবি করেনি, এটি মাপে রেঞ্জের ভেতরে ক্লোজ কোথায় বসে, আর রেঞ্জটি নড়ে গেছে।',
      },
    },
    {
      q: {
        en: 'You cannot short on the DSE. What is the stochastic actually for, then, and what do you run alongside it?',
        bn: 'ডিএসই-তে আপনি শর্ট করতে পারেন না। তাহলে স্টোক্যাস্টিক আসলে কী কাজে লাগে, আর তার পাশে আপনি কী চালান?',
      },
      a: {
        en: 'It is an exit and timing tool, and the absence of a short side changes what each signal means rather than making the indicator useless. I rank the signals. The most trustworthy is a crossover that agrees with the trend established by the tools of chapter thirty-four — that is an event with a timestamp and it is either an entry or an exit. Second is a crossover against the trend, which I treat as an exit only, never as a reversal entry, because there is no reliable borrow here and no functioning retail short market, so the other side of the trade simply does not exist for me. Third is the exit from a zone, percent K crossing back under eighty or back over twenty, which I use to tighten or trail a stop. Fourth, and lowest, is zone occupancy itself, which is a state rather than an event and generates the same instruction every day it persists — six consecutive days in the worked example, which is precisely how somebody gives away two taka seventy a share. Divergence I keep out of the ranking entirely and defer to chapter forty-four, because the failure rates deserve their own treatment rather than a bullet point. As for what runs alongside it, the principle is that two instruments which fail differently are worth more than two that fail the same way. Running stochastic next to RSI adds less than most people expect, because although they are built from different raw material — position versus magnitude — they are both bounded oscillators that saturate in a trend and both mislead in the same market conditions. Chapter thirty-five\'s MACD is the better partner: it reads the same turn from momentum, it has no ceiling to saturate against, and when it agrees with a stochastic crossover you have two different arguments for the same conclusion. And chapter thirty-nine\'s ATR is not optional here, because ATR is the input to the range guard that decides whether the stochastic is allowed to produce a reading at all. On this exchange, the indicator\'s most valuable behaviour is refusing to produce one.',
        bn: 'এটি একটি প্রস্থান ও সময় নির্ধারণের যন্ত্র, আর শর্ট সাইড না থাকা নির্দেশকটিকে অকেজো করে না, বরং প্রতিটি সংকেতের অর্থ বদলে দেয়। আমি সংকেতগুলোকে ক্রম দিই। সবচেয়ে ভরসাযোগ্য হলো এমন ক্রসওভার যা অধ্যায় চৌত্রিশের যন্ত্র দিয়ে প্রতিষ্ঠিত প্রবণতার সঙ্গে মেলে — সেটি সময়চিহ্নসহ একটি ঘটনা আর তা হয় প্রবেশ নয় প্রস্থান। দ্বিতীয় হলো প্রবণতার বিপরীতে ক্রসওভার, যাকে আমি কেবল প্রস্থান হিসেবে দেখি, কখনো উল্টো প্রবেশ হিসেবে নয়, কারণ এখানে নির্ভরযোগ্য ধার নেই ও খুচরা পর্যায়ে কার্যকর শর্ট বাজার নেই, তাই ট্রেডের উল্টো দিকটি আমার জন্য নেই-ই। তৃতীয় হলো অঞ্চল থেকে বেরোনো, পারসেন্ট কে-এর আশির নিচে বা বিশের ওপরে ফেরা, যা আমি স্টপ শক্ত করতে বা ট্রেইল করতে ব্যবহার করি। চতুর্থ ও সর্বনিম্ন হলো অঞ্চলে অবস্থান নিজেই, যা ঘটনা নয় বরং একটি অবস্থা, আর যতদিন থাকে ততদিন প্রতিদিন একই নির্দেশ দেয় — কাজে-লাগানো উদাহরণে পরপর ছয় দিন, আর ঠিক এভাবেই কেউ শেয়ারপ্রতি দুই টাকা সত্তর ছেড়ে দেন। ডাইভারজেন্স আমি ক্রম থেকে পুরোপুরি বাইরে রাখি ও অধ্যায় চুয়াল্লিশের জন্য তুলে রাখি, কারণ তার ব্যর্থতার হার একটি বুলেট পয়েন্ট নয়, নিজস্ব আলোচনার দাবি রাখে। পাশে কী চলবে সে প্রসঙ্গে নীতিটি হলো, যে দুটি যন্ত্র ভিন্নভাবে ব্যর্থ হয় তারা একইভাবে ব্যর্থ হওয়া দুটির চেয়ে বেশি মূল্যবান। RSI-এর পাশে স্টোক্যাস্টিক চালিয়ে বেশিরভাগ মানুষের প্রত্যাশার চেয়ে কম পাওয়া যায়, কারণ যদিও এরা ভিন্ন কাঁচামাল থেকে গড়া — অবস্থান বনাম মাত্রা — দুটোই সীমাবদ্ধ অসিলেটর যা প্রবণতায় পরিপৃক্ত হয় ও একই বাজার পরিস্থিতিতে বিভ্রান্ত করে। অধ্যায় পঁয়ত্রিশের MACD ভালো সঙ্গী: এটি একই মোড় মোমেন্টাম থেকে পড়ে, পরিপৃক্ত হওয়ার মতো এর কোনো ছাদ নেই, আর এটি যখন একটি স্টোক্যাস্টিক ক্রসওভারের সঙ্গে মেলে তখন একই সিদ্ধান্তের পক্ষে আপনার দুটি ভিন্ন যুক্তি থাকে। আর অধ্যায় ঊনচল্লিশের ATR এখানে ঐচ্ছিক নয়, কারণ ATR-ই সেই রেঞ্জ গার্ডের ইনপুট যা ঠিক করে স্টোক্যাস্টিক আদৌ একটি রিডিং তৈরির অনুমতি পাবে কি না। এই এক্সচেঞ্জে নির্দেশকটির সবচেয়ে মূল্যবান আচরণ হলো কোনো রিডিং তৈরিতে অস্বীকার করা।',
      },
    },
  ],

  quiz: [
    {
      q: {
        en: '%K measures:',
        bn: '%K মাপে:',
      },
      options: {
        en: [
          'The magnitude of recent price changes',
          'The position of the close within the n-period high–low range',
          'The slope of a moving average',
          'The ratio of up volume to down volume',
        ],
        bn: [
          'সাম্প্রতিক দাম পরিবর্তনের মাত্রা',
          'n-পর্বের হাই–লো রেঞ্জের ভেতরে ক্লোজের অবস্থান',
          'একটি মুভিং অ্যাভারেজের ঢাল',
          'ঊর্ধ্বমুখী ভলিউমের সঙ্গে নিম্নমুখী ভলিউমের অনুপাত',
        ],
      },
      answer: 1,
    },
    {
      q: {
        en: 'Slow %K is identical to:',
        bn: 'স্লো %K হুবহু সমান:',
      },
      options: {
        en: ['Fast %K', 'Fast %D', 'RSI(14)', 'A 5-period SMA of raw %K'],
        bn: ['ফাস্ট %K', 'ফাস্ট %D', 'RSI(১৪)', 'কাঁচা %K-এর ৫-পর্বের SMA'],
      },
      answer: 1,
    },
    {
      q: {
        en: 'With (n, s, d) = (10, 3, 3), the first %D value is available on bar:',
        bn: '(n, s, d) = (১০, ৩, ৩)-এ প্রথম %D মান পাওয়া যায় যে বারে:',
      },
      options: {
        en: ['10', '12', '14', '16'],
        bn: ['১০', '১২', '১৪', '১৬'],
      },
      answer: 2,
    },
    {
      q: {
        en: 'In the worked sheet the ten-day range on the last bar is 6.10. How many %K points does a BDT 1 move in the close produce?',
        bn: 'কাজে-লাগানো শিটে শেষ বারে দশ-দিনের রেঞ্জ ৬.১০। ক্লোজে ১ টাকার একটি চলন কত %K পয়েন্ট তৈরি করে?',
      },
      options: {
        en: ['1.6393', '6.10', '16.3934', '61.00'],
        bn: ['১.৬৩৯৩', '৬.১০', '১৬.৩৯৩৪', '৬১.০০'],
      },
      answer: 2,
    },
    {
      q: {
        en: 'On a counter whose ten-day range is 0.20 with a 0.10 tick, one minimum tick moves %K by:',
        bn: 'যে কাউন্টারের দশ-দিনের রেঞ্জ ০.২০ ও টিক ০.১০, সেখানে একটি সর্বনিম্ন টিক %K-কে সরায়:',
      },
      options: {
        en: ['0.5 points', '5 points', '50 points', '500 points'],
        bn: ['০.৫ পয়েন্ট', '৫ পয়েন্ট', '৫০ পয়েন্ট', '৫০০ পয়েন্ট'],
      },
      answer: 2,
    },
    {
      q: {
        en: 'When the range guard fails, the correct return value for %K is:',
        bn: 'রেঞ্জ গার্ড ব্যর্থ হলে %K-এর সঠিক ফেরত মান:',
      },
      options: {
        en: [
          '50, the neutral midpoint',
          'The previous bar\'s value',
          'Zero',
          'Nothing — a blank that propagates downstream',
        ],
        bn: [
          '৫০, নিরপেক্ষ মধ্যবিন্দু',
          'আগের বারের মান',
          'শূন্য',
          'কিছুই নয় — একটি ফাঁকা যা পরের ধাপে ছড়ায়',
        ],
      },
      answer: 3,
    },
    {
      q: {
        en: 'In §37.3, selling the first slow %K print above 80 instead of waiting for the %K/%D crossover captured:',
        bn: '§৩৭.৩-এ %K/%D ক্রসওভারের অপেক্ষা না করে ৮০-এর ওপরে স্লো %K-এর প্রথম প্রিন্টে বিক্রি করলে ধরা পড়ত:',
      },
      options: {
        en: [
          'About 60.87% of the crossover gain',
          'About 87% of the crossover gain',
          'More than the crossover gain',
          'Exactly the same gain',
        ],
        bn: [
          'ক্রসওভার লাভের প্রায় ৬০.৮৭%',
          'ক্রসওভার লাভের প্রায় ৮৭%',
          'ক্রসওভার লাভের চেয়ে বেশি',
          'হুবহু একই লাভ',
        ],
      },
      answer: 0,
    },
    {
      q: {
        en: 'A DSE stock locked at its upper circuit prints %K = 100 because:',
        bn: 'উপরের সার্কিটে আটকে যাওয়া একটি ডিএসই শেয়ার %K = ১০০ দেখায়, কারণ:',
      },
      options: {
        en: [
          'Buyers pressed aggressively into the close',
          'It closes at the window high by regulation, not by demand',
          'The lookback window has expanded',
          'The %D smoothing has saturated',
        ],
        bn: [
          'ক্রেতারা ক্লোজ পর্যন্ত আগ্রাসীভাবে চাপ দিয়েছেন',
          'এটি চাহিদার কারণে নয়, বিধির কারণে জানালার হাই-তে ক্লোজ করে',
          'লুকব্যাক জানালা বড় হয়ে গেছে',
          '%D মসৃণকরণ পরিপৃক্ত হয়েছে',
        ],
      },
      answer: 1,
    },
    {
      q: {
        en: 'Raw %K can fall on a day when price rose. The usual cause is:',
        bn: 'দাম বাড়ার দিনেও কাঁচা %K পড়তে পারে। সাধারণ কারণ:',
      },
      options: {
        en: [
          'A calculation error in the smoothing',
          'The window low rising as old bars age out of the lookback',
          'The %D line being plotted first',
          'Volume falling below average',
        ],
        bn: [
          'মসৃণকরণে একটি গণনার ভুল',
          'পুরোনো বার লুকব্যাক থেকে বেরিয়ে যাওয়ায় জানালার লো ওঠা',
          '%D রেখাটি আগে আঁকা হওয়া',
          'ভলিউম গড়ের নিচে নেমে যাওয়া',
        ],
      },
      answer: 1,
    },
    {
      q: {
        en: 'On the DSE, a %K reading of 95 inside a confirmed uptrend should be treated as:',
        bn: 'ডিএসই-তে নিশ্চিত ঊর্ধ্বমুখী প্রবণতার ভেতরে ৯৫-এর একটি %K রিডিংকে গণ্য করা উচিত:',
      },
      options: {
        en: [
          'A short entry',
          'An automatic sell of the entire position',
          'Context — a hold-off or exit signal, never a short',
          'Confirmation to add aggressively at any price',
        ],
        bn: [
          'একটি শর্ট প্রবেশ হিসেবে',
          'পুরো পজিশনের স্বয়ংক্রিয় বিক্রি হিসেবে',
          'প্রেক্ষাপট হিসেবে — একটি অপেক্ষা বা প্রস্থানের সংকেত, কখনো শর্ট নয়',
          'যেকোনো দামে আগ্রাসীভাবে যোগ করার নিশ্চয়তা হিসেবে',
        ],
      },
      answer: 2,
    },
  ],
};
