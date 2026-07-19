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
  },
};
