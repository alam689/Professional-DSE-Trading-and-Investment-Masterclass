/**
 * Chapter 36 — RSI
 * Part III, Technical Analysis.
 */

export default {
  n: 36,
  tools: [],

  excelSheet: {
    filename: 'ch36-wilder-rsi-build.xlsx',
    sheetName: 'Wilder RSI',
    cells: [
      { cell: 'A1', v: '— Chapter 36 · Wilder RSI(14), built from scratch —' },
      { cell: 'A2', v: 'Period N' }, { cell: 'B2', v: 14 },
      { cell: 'A3', v: 'DSE Circuit Band (%)' }, { cell: 'B3', v: 10 },

      { cell: 'A5', v: 'Day' }, { cell: 'B5', v: 'Close' }, { cell: 'C5', v: 'Change' },
      { cell: 'D5', v: 'Gain' }, { cell: 'E5', v: 'Loss' }, { cell: 'F5', v: 'AvgGain' },
      { cell: 'G5', v: 'AvgLoss' }, { cell: 'H5', v: 'RS' }, { cell: 'I5', v: 'RSI' },
      { cell: 'J5', v: 'LimitFlag' }, { cell: 'K5', v: 'Zone' },

      { cell: 'A6', v: 1 }, { cell: 'B6', v: 48.2 },
      { cell: 'A7', v: 2 }, { cell: 'B7', v: 48.9 }, { cell: 'C7', f: 'B7-B6' }, { cell: 'D7', f: 'MAX(C7,0)' }, { cell: 'E7', f: 'MAX(-C7,0)' }, { cell: 'J7', f: 'IF(ABS(C7/B6)>=$B$3/100-0.0005,"LIMIT","")' },
      { cell: 'A8', v: 3 }, { cell: 'B8', v: 49.6 }, { cell: 'C8', f: 'B8-B7' }, { cell: 'D8', f: 'MAX(C8,0)' }, { cell: 'E8', f: 'MAX(-C8,0)' }, { cell: 'J8', f: 'IF(ABS(C8/B7)>=$B$3/100-0.0005,"LIMIT","")' },
      { cell: 'A9', v: 4 }, { cell: 'B9', v: 49.1 }, { cell: 'C9', f: 'B9-B8' }, { cell: 'D9', f: 'MAX(C9,0)' }, { cell: 'E9', f: 'MAX(-C9,0)' }, { cell: 'J9', f: 'IF(ABS(C9/B8)>=$B$3/100-0.0005,"LIMIT","")' },
      { cell: 'A10', v: 5 }, { cell: 'B10', v: 50.3 }, { cell: 'C10', f: 'B10-B9' }, { cell: 'D10', f: 'MAX(C10,0)' }, { cell: 'E10', f: 'MAX(-C10,0)' }, { cell: 'J10', f: 'IF(ABS(C10/B9)>=$B$3/100-0.0005,"LIMIT","")' },
      { cell: 'A11', v: 6 }, { cell: 'B11', v: 51.1 }, { cell: 'C11', f: 'B11-B10' }, { cell: 'D11', f: 'MAX(C11,0)' }, { cell: 'E11', f: 'MAX(-C11,0)' }, { cell: 'J11', f: 'IF(ABS(C11/B10)>=$B$3/100-0.0005,"LIMIT","")' },
      { cell: 'A12', v: 7 }, { cell: 'B12', v: 50.6 }, { cell: 'C12', f: 'B12-B11' }, { cell: 'D12', f: 'MAX(C12,0)' }, { cell: 'E12', f: 'MAX(-C12,0)' }, { cell: 'J12', f: 'IF(ABS(C12/B11)>=$B$3/100-0.0005,"LIMIT","")' },
      { cell: 'A13', v: 8 }, { cell: 'B13', v: 52.0 }, { cell: 'C13', f: 'B13-B12' }, { cell: 'D13', f: 'MAX(C13,0)' }, { cell: 'E13', f: 'MAX(-C13,0)' }, { cell: 'J13', f: 'IF(ABS(C13/B12)>=$B$3/100-0.0005,"LIMIT","")' },
      { cell: 'A14', v: 9 }, { cell: 'B14', v: 52.8 }, { cell: 'C14', f: 'B14-B13' }, { cell: 'D14', f: 'MAX(C14,0)' }, { cell: 'E14', f: 'MAX(-C14,0)' }, { cell: 'J14', f: 'IF(ABS(C14/B13)>=$B$3/100-0.0005,"LIMIT","")' },
      { cell: 'A15', v: 10 }, { cell: 'B15', v: 52.3 }, { cell: 'C15', f: 'B15-B14' }, { cell: 'D15', f: 'MAX(C15,0)' }, { cell: 'E15', f: 'MAX(-C15,0)' }, { cell: 'J15', f: 'IF(ABS(C15/B14)>=$B$3/100-0.0005,"LIMIT","")' },
      { cell: 'A16', v: 11 }, { cell: 'B16', v: 53.9 }, { cell: 'C16', f: 'B16-B15' }, { cell: 'D16', f: 'MAX(C16,0)' }, { cell: 'E16', f: 'MAX(-C16,0)' }, { cell: 'J16', f: 'IF(ABS(C16/B15)>=$B$3/100-0.0005,"LIMIT","")' },
      { cell: 'A17', v: 12 }, { cell: 'B17', v: 54.7 }, { cell: 'C17', f: 'B17-B16' }, { cell: 'D17', f: 'MAX(C17,0)' }, { cell: 'E17', f: 'MAX(-C17,0)' }, { cell: 'J17', f: 'IF(ABS(C17/B16)>=$B$3/100-0.0005,"LIMIT","")' },
      { cell: 'A18', v: 13 }, { cell: 'B18', v: 54.2 }, { cell: 'C18', f: 'B18-B17' }, { cell: 'D18', f: 'MAX(C18,0)' }, { cell: 'E18', f: 'MAX(-C18,0)' }, { cell: 'J18', f: 'IF(ABS(C18/B17)>=$B$3/100-0.0005,"LIMIT","")' },
      { cell: 'A19', v: 14 }, { cell: 'B19', v: 55.6 }, { cell: 'C19', f: 'B19-B18' }, { cell: 'D19', f: 'MAX(C19,0)' }, { cell: 'E19', f: 'MAX(-C19,0)' }, { cell: 'J19', f: 'IF(ABS(C19/B18)>=$B$3/100-0.0005,"LIMIT","")' },

      { cell: 'A20', v: 15 }, { cell: 'B20', v: 56.9 }, { cell: 'C20', f: 'B20-B19' }, { cell: 'D20', f: 'MAX(C20,0)' }, { cell: 'E20', f: 'MAX(-C20,0)' },
      { cell: 'F20', f: 'AVERAGE(D7:D20)' }, { cell: 'G20', f: 'AVERAGE(E7:E20)' },
      { cell: 'H20', f: 'F20/G20' }, { cell: 'I20', f: '100-100/(1+H20)' },
      { cell: 'J20', f: 'IF(ABS(C20/B19)>=$B$3/100-0.0005,"LIMIT","")' },
      { cell: 'K20', f: 'IF(I20>=60,"BULL RANGE",IF(I20<=40,"BEAR RANGE","NEUTRAL"))' },

      { cell: 'A21', v: 16 }, { cell: 'B21', v: 57.6 }, { cell: 'C21', f: 'B21-B20' }, { cell: 'D21', f: 'MAX(C21,0)' }, { cell: 'E21', f: 'MAX(-C21,0)' },
      { cell: 'F21', f: '(F20*($B$2-1)+D21)/$B$2' }, { cell: 'G21', f: '(G20*($B$2-1)+E21)/$B$2' },
      { cell: 'H21', f: 'F21/G21' }, { cell: 'I21', f: '100-100/(1+H21)' },
      { cell: 'J21', f: 'IF(ABS(C21/B20)>=$B$3/100-0.0005,"LIMIT","")' },
      { cell: 'K21', f: 'IF(I21>=60,"BULL RANGE",IF(I21<=40,"BEAR RANGE","NEUTRAL"))' },

      { cell: 'A22', v: 17 }, { cell: 'B22', v: 56.8 }, { cell: 'C22', f: 'B22-B21' }, { cell: 'D22', f: 'MAX(C22,0)' }, { cell: 'E22', f: 'MAX(-C22,0)' },
      { cell: 'F22', f: '(F21*($B$2-1)+D22)/$B$2' }, { cell: 'G22', f: '(G21*($B$2-1)+E22)/$B$2' },
      { cell: 'H22', f: 'F22/G22' }, { cell: 'I22', f: '100-100/(1+H22)' },
      { cell: 'J22', f: 'IF(ABS(C22/B21)>=$B$3/100-0.0005,"LIMIT","")' },
      { cell: 'K22', f: 'IF(I22>=60,"BULL RANGE",IF(I22<=40,"BEAR RANGE","NEUTRAL"))' },

      { cell: 'A23', v: 18 }, { cell: 'B23', v: 58.1 }, { cell: 'C23', f: 'B23-B22' }, { cell: 'D23', f: 'MAX(C23,0)' }, { cell: 'E23', f: 'MAX(-C23,0)' },
      { cell: 'F23', f: '(F22*($B$2-1)+D23)/$B$2' }, { cell: 'G23', f: '(G22*($B$2-1)+E23)/$B$2' },
      { cell: 'H23', f: 'F23/G23' }, { cell: 'I23', f: '100-100/(1+H23)' },
      { cell: 'J23', f: 'IF(ABS(C23/B22)>=$B$3/100-0.0005,"LIMIT","")' },
      { cell: 'K23', f: 'IF(I23>=60,"BULL RANGE",IF(I23<=40,"BEAR RANGE","NEUTRAL"))' },

      { cell: 'A24', v: 19 }, { cell: 'B24', v: 59.4 }, { cell: 'C24', f: 'B24-B23' }, { cell: 'D24', f: 'MAX(C24,0)' }, { cell: 'E24', f: 'MAX(-C24,0)' },
      { cell: 'F24', f: '(F23*($B$2-1)+D24)/$B$2' }, { cell: 'G24', f: '(G23*($B$2-1)+E24)/$B$2' },
      { cell: 'H24', f: 'F24/G24' }, { cell: 'I24', f: '100-100/(1+H24)' },
      { cell: 'J24', f: 'IF(ABS(C24/B23)>=$B$3/100-0.0005,"LIMIT","")' },
      { cell: 'K24', f: 'IF(I24>=60,"BULL RANGE",IF(I24<=40,"BEAR RANGE","NEUTRAL"))' },

      { cell: 'A25', v: 20 }, { cell: 'B25', v: 58.7 }, { cell: 'C25', f: 'B25-B24' }, { cell: 'D25', f: 'MAX(C25,0)' }, { cell: 'E25', f: 'MAX(-C25,0)' },
      { cell: 'F25', f: '(F24*($B$2-1)+D25)/$B$2' }, { cell: 'G25', f: '(G24*($B$2-1)+E25)/$B$2' },
      { cell: 'H25', f: 'F25/G25' }, { cell: 'I25', f: '100-100/(1+H25)' },
      { cell: 'J25', f: 'IF(ABS(C25/B24)>=$B$3/100-0.0005,"LIMIT","")' },
      { cell: 'K25', f: 'IF(I25>=60,"BULL RANGE",IF(I25<=40,"BEAR RANGE","NEUTRAL"))' },

      { cell: 'A26', v: 21 }, { cell: 'B26', v: 60.2 }, { cell: 'C26', f: 'B26-B25' }, { cell: 'D26', f: 'MAX(C26,0)' }, { cell: 'E26', f: 'MAX(-C26,0)' },
      { cell: 'F26', f: '(F25*($B$2-1)+D26)/$B$2' }, { cell: 'G26', f: '(G25*($B$2-1)+E26)/$B$2' },
      { cell: 'H26', f: 'F26/G26' }, { cell: 'I26', f: '100-100/(1+H26)' },
      { cell: 'J26', f: 'IF(ABS(C26/B25)>=$B$3/100-0.0005,"LIMIT","")' },
      { cell: 'K26', f: 'IF(I26>=60,"BULL RANGE",IF(I26<=40,"BEAR RANGE","NEUTRAL"))' },

      { cell: 'A28', v: '— What the 70 Line Actually Cost —' },
      { cell: 'A29', v: 'Bars with RSI computed' }, { cell: 'B29', f: 'COUNT(I20:I26)' },
      { cell: 'A30', v: 'Bars with RSI >= 70' }, { cell: 'B30', f: 'COUNTIF(I20:I26,">=70")' },
      { cell: 'A31', v: 'Share of bars above 70 (%)' }, { cell: 'B31', f: 'B30/B29*100' },
      { cell: 'A32', v: 'Highest RSI in sample' }, { cell: 'B32', f: 'MAX(I20:I26)' },
      { cell: 'A33', v: 'Lowest RSI in sample' }, { cell: 'B33', f: 'MIN(I20:I26)' },
      { cell: 'A34', v: 'Close at first 70 print' }, { cell: 'B34', f: 'B20' },
      { cell: 'A35', v: 'Close at end of sample' }, { cell: 'B35', f: 'B26' },
      { cell: 'A36', v: 'BDT surrendered by selling at 70' }, { cell: 'B36', f: 'B35-B34' },
      { cell: 'A37', v: 'Surrendered (% of exit price)' }, { cell: 'B37', f: 'B36/B34*100' },

      { cell: 'A39', v: '— DSE Circuit-Limit Stress Test —' },
      { cell: 'A40', v: 'Free-market close would be (+12%)' }, { cell: 'B40', f: 'B26*1.12' },
      { cell: 'A41', v: 'Circuit cap permits only' }, { cell: 'B41', f: 'B26*(1+$B$3/100)' },
      { cell: 'A42', v: 'Truncated price (BDT)' }, { cell: 'B42', f: 'B40-B41' },
      { cell: 'A43', v: 'Truncated price (% of close)' }, { cell: 'B43', f: 'B42/B26*100' },
      { cell: 'A44', v: 'RSI on the capped close' }, { cell: 'B44', f: '100-100/(1+((F26*($B$2-1)+MAX(B41-B26,0))/$B$2)/((G26*($B$2-1)+MAX(B26-B41,0))/$B$2))' },
      { cell: 'A45', v: 'RSI on the free close' }, { cell: 'B45', f: '100-100/(1+((F26*($B$2-1)+MAX(B40-B26,0))/$B$2)/((G26*($B$2-1)+MAX(B26-B40,0))/$B$2))' },
      { cell: 'A46', v: 'RSI understated by (points)' }, { cell: 'B46', f: 'B45-B44' },

      { cell: 'A48', v: 'VERDICT' },
      {
        cell: 'B48',
        f: 'IF(B31>=50,"RSI held above 70 for most of the sample - 70 is a trend-character reading, not a sell signal","70 prints were rare here - the extension may be genuine, check the 40-50 zone next")',
      },
    ],
  },

  objectives: {
    en: [
      'Derive Wilder RSI from first principles: separated up-closes and down-closes, the simple-average seed, and the Wilder-smoothed recursion with α = 1/N.',
      'Explain why Wilder smoothing is an EMA with α = 1/N rather than a simple moving average, and why an RSI(14) therefore behaves like a 27-period EMA.',
      'State precisely why RSI is bounded and comparable across stocks and price levels, and what Chapter 35\'s MACD could not do as a result.',
      'Reject "RSI above 70 means sell" and replace it with the range rules — 40–50 as support in an uptrend, 50–60 as resistance in a downtrend — plus failure swings.',
      'Adjust RSI for DSE circuit limits: flag limit-locked bars, understand how truncated inputs feed the smoothing recursion, and know why the overbought-sell rule is most destructive precisely on DSE momentum runs.',
    ],
    bn: [
      'মৌলিক নীতি থেকে Wilder RSI উদ্ভব করা: পৃথকীকৃত ঊর্ধ্ব-ক্লোজ ও নিম্ন-ক্লোজ, সরল-গড় বীজ, এবং α = 1/N সহ Wilder-মসৃণকৃত পুনরাবৃত্তি।',
      'কেন Wilder মসৃণকরণ সরল চলমান গড় নয় বরং α = 1/N-এর একটি EMA, এবং কেন তাই RSI(14) ২৭-পর্বের EMA-র মতো আচরণ করে তা ব্যাখ্যা করা।',
      'কেন RSI সীমাবদ্ধ এবং স্টক ও দামের স্তরজুড়ে তুলনীয় তা সুনির্দিষ্টভাবে বলা, এবং ফলে অধ্যায় ৩৫-এর MACD যা করতে পারেনি তা চিহ্নিত করা।',
      '"RSI ৭০-এর ওপরে মানে বিক্রি" প্রত্যাখ্যান করা এবং তার জায়গায় রেঞ্জ নিয়ম বসানো — ঊর্ধ্বমুখী ধারায় ৪০–৫০ সাপোর্ট, নিম্নমুখী ধারায় ৫০–৬০ রেজিস্ট্যান্স — সঙ্গে failure swing।',
      'ডিএসই সার্কিট সীমার জন্য RSI সমন্বয় করা: limit-locked বার চিহ্নিত করা, ছেঁটে যাওয়া উপাদান কীভাবে মসৃণকরণ পুনরাবৃত্তিতে ঢোকে তা বোঝা, এবং কেন ওভারবট-বিক্রির নিয়ম ঠিক ডিএসই-র মোমেন্টাম দৌড়েই সবচেয়ে ধ্বংসাত্মক তা জানা।',
    ],
  },

  blocks: {
    theory: {
      en: `Chapter 35 left us with a working momentum instrument and one unresolved complaint. **MACD is unbounded.** Its values are in taka, so a MACD of 2.4 on a BDT 60 stock and a MACD of 2.4 on a BDT 900 stock are not the same statement about momentum, and neither can be ranked against the other. Wilder's Relative Strength Index fixes exactly that defect — and in fixing it, acquires a folklore that costs Bangladeshi retail investors more money than any other single idea in technical analysis.

### The construction, properly

Start with closes. **Only closes.** Wilder's RSI does not look at highs, lows, gaps or volume. Take the change from one close to the next:

$$\\Delta_t = C_t - C_{t-1}$$

Now split that change into two non-negative streams, so that a day contributes to one or the other but never both:

$$U_t = \\max(\\Delta_t,\\, 0), \\qquad D_t = \\max(-\\Delta_t,\\, 0)$$

A day that closes up records a gain and a *zero* loss. A day that closes down records a loss and a *zero* gain. An unchanged close records zero in both. This separation is the whole idea: instead of averaging signed changes — which is what a moving average does, and which lets a big up day cancel a big down day — **RSI averages the up-pressure and the down-pressure separately and then compares them.**

### Wilder's smoothing is not a simple average

This is where most retail explanations, most YouTube tutorials, and a distressing number of Excel templates go wrong.

The **first** value is a simple average over $N$ changes:

$$\\overline{U}_N = \\frac{1}{N}\\sum_{t=1}^{N} U_t, \\qquad \\overline{D}_N = \\frac{1}{N}\\sum_{t=1}^{N} D_t$$

Nothing is smoothed yet, because there is nothing to smooth. This is a *seed*, and it exists only to give the recursion a starting value.

**Every subsequent value is a recursion, not an average:**

$$\\overline{U}_t = \\frac{(N-1)\\,\\overline{U}_{t-1} + U_t}{N}$$

Rewrite that and its true nature is obvious:

$$\\overline{U}_t = \\overline{U}_{t-1} + \\frac{1}{N}\\left(U_t - \\overline{U}_{t-1}\\right)$$

**That is an exponential moving average with $\\alpha = 1/N$.** Not $\\alpha = 2/(N+1)$, which is the standard EMA convention Chapter 34 used and which Chapter 35's MACD inherited. The two are not interchangeable. Setting $2/(M+1) = 1/N$ gives $M = 2N - 1$, so:

**Wilder's RSI(14) has the memory of a 27-period EMA, not a 14-period one.**

This single fact explains a great deal of the surprise beginners feel when RSI refuses to turn as quickly as they expect. It is a slower instrument than its label suggests. It is also why an RSI(14) computed by a platform that seeded differently — some use an EMA seed, some use the first change alone — will disagree with yours for the first thirty or forty bars before the recursion washes the difference out. **If two platforms disagree on RSI, check the seeding before you check anything else.**

### Relative strength, and the bounding

$$RS_t = \\frac{\\overline{U}_t}{\\overline{D}_t}, \\qquad RSI_t = 100 - \\frac{100}{1 + RS_t}$$

Watch what that second expression does. $RS$ ranges over $[0, \\infty)$. The map $x \\mapsto 100 - 100/(1+x)$ takes $[0,\\infty)$ onto $[0,100)$, monotonically. When up-pressure and down-pressure are equal, $RS = 1$ and $RSI = 50$. When there have been no down closes at all, $\\overline{D} = 0$, $RS$ is undefined, and by convention RSI is 100.

Equivalently and more revealingly:

$$RSI_t = 100 \\times \\frac{\\overline{U}_t}{\\overline{U}_t + \\overline{D}_t}$$

**RSI is the share of total recent price movement that was upward.** That is all it is. It is a percentage, dimensionless, bounded on both sides.

### What this buys us that MACD could not

Because RSI is a ratio of two quantities in the same units, **the units cancel.** An RSI of 78 on GP at BDT 300 and an RSI of 78 on a BDT 22 textile share are the *same statement*: in both cases roughly 78% of recent movement was upward.

That gives three capabilities Chapter 35 lacked:

- **Cross-sectional ranking.** You can sort the whole DSE by RSI and the sort means something. Sorting by MACD would just sort by price level.
- **Cross-temporal comparison.** A stock's RSI today is comparable to its RSI three years ago at a third of the price. Its MACD is not.
- **Fixed reference levels.** 30, 50, 70 mean the same thing on every instrument, so a rule written once applies everywhere.

Normalisation is not a cosmetic improvement. **It is what turns an indicator into a screening tool.** Chapter 31's relative-strength discipline and Chapter 8's cross-sector comparisons both become mechanisable once your momentum measure is dimensionless.

### The most expensive sentence in retail technical analysis

Here it is: **"RSI above 70 means sell."**

It is wrong, it is taught everywhere, and it does its damage at precisely the worst moment — the beginning of the best trend of the year.

The arithmetic of why is not subtle. RSI is high when recent movement has been mostly upward. **A strong trend is, by definition, a period in which recent movement is mostly upward.** So a strong trend produces a high RSI *for as long as it is strong*. In the worked series of §36.5, RSI(14) crosses 70 at the first bar it can be computed and never comes back below 79 for the rest of the sample — seven bars out of seven, 100% of the readings. In the longer 71-bar series of §36.8, RSI sits at or above 70 on **26 of 57 computable bars, 45.6% of the sample.** Selling the first 70 print in that market is not risk management. It is an instruction to exit every trend on the day it establishes itself.

Wilder himself did not claim otherwise. He described 70 and 30 as levels at which a move *may* be extended and at which a trader should *start paying attention* — not as trade signals. The folklore version dropped the qualification and kept the number.

**Reframe it this way and it stops being confusing:**

> RSI does not tell you where a trend ends. It tells you what kind of trend you are in.

A market whose RSI keeps printing 75–85 is not a market about to reverse. It is a market telling you it is strong. The information is in the *character*, not the endpoint.

### The professional reading: range rules

If 70 is not a sell, what do you actually do with the number? You watch which band RSI *refuses to leave*.

| Regime | RSI travels roughly | The zone that matters | What it does |
|---|---|---|---|
| Bull range | 40 – 80/90 | **40 – 50** | Acts as **support**. Pullbacks stop there. |
| Bear range | 10/20 – 60 | **50 – 60** | Acts as **resistance**. Rallies die there. |
| Neither | anything | — | No range rule is in force; do not pretend one is. |

In a genuine uptrend, price pullbacks show up as RSI dips into the 40s that hold. **The first pullback that carries RSI decisively below 40 is the meaningful event** — far more meaningful than any 70 print. In a genuine downtrend, the mirror holds: rallies push RSI into the 50s, it stalls, and the failure to clear 60 is the confirmation the downtrend is intact.

This inverts the retail instinct completely. **The retail trader sells strength at 70 and buys weakness at 30. The range reading sells the loss of 40 in a bull market and sells rallies into 60 in a bear market.** On the same data, in §36.8, those two rules produce **−BDT 3.60 and +BDT 2.30 per share respectively.** The naive rule does not merely underperform; it loses money on a series where the range rule makes some.

### Failure swings

Wilder's own signal, and it never requires you to read a level as an instruction.

**Bearish failure swing.** RSI pushes above 70 and makes a peak. It pulls back to a trough. It rallies again but **fails to exceed the prior peak**. Then it breaks below the intervening trough. That break is the signal.

**Bullish failure swing.** The mirror below 30: a low, a bounce, a *higher* second low, then a break above the intervening peak.

The structure matters more than the level. Notice that the failure swing requires RSI to have *already* been extreme, then to have *failed to repeat* it, then to have *broken structure*. Three conditions. That is why it fires far less often than a 70 crossing, and why what it fires on is worth attention. **A signal that triggers on 45% of bars carries no information; a signal that triggers three times a year might.**

### Divergence, in one paragraph

**Divergence** is price making a higher high while RSI makes a lower high (bearish), or price making a lower low while RSI makes a higher low (bullish). It says the new price extreme was achieved with less momentum than the last one.

It is the most over-sold idea in technical analysis and it deserves a full chapter of scepticism, which it gets in **Chapter 44**. For now, hold two facts: divergence can persist for a very long time before anything happens, and it is the single easiest pattern to see in hindsight and miss in real time. Do not trade it on the strength of this paragraph.

### RSI(14) and RSI(2) are different instruments

The period is not a tuning knob. **Changing it changes what the indicator is for.**

| | RSI(14) | RSI(2) |
|---|---|---|
| Effective EMA memory | 27 bars | 3 bars |
| Typical range | 30 – 80 | 2 – 98, constantly |
| What it measures | trend *character* | one- to two-day *stretch* |
| Correct logic | trend-following, range rules | mean reversion |
| A reading of 90 means | strong, healthy trend | short-term overextension |

In §36.8's series, RSI(14) spans 24.60 to 84.31 across 57 bars while RSI(2) spans 6.47 to 100.00, whipping from 96 to 52 and back to 91 within four bars. **Those are not the same instrument with a different setting; they are opposite logics wearing the same name.** A rule that is right on RSI(2) — buy the extreme — is exactly the rule that destroys you on RSI(14). Anyone who tells you "RSI below 30 is a buy" without stating the period has not specified their own claim.

Short-period RSI has a further problem on the DSE specifically: it demands you trade frequently, and Chapter 3's transaction costs plus the settlement cycle make high-frequency mean reversion far less attractive here than the backtests imply.

### The DSE problem: circuit limits truncate the inputs

Every formula above assumes $\\Delta_t$ is a free market's answer. **On the DSE it is not.** The daily circuit band caps how far a close can move from the previous close, so $\\Delta_t$ is a *censored* observation:

$$\\Delta_t^{\\text{observed}} = \\text{clip}\\!\\left(\\Delta_t^{\\text{true}},\\; -bC_{t-1},\\; +bC_{t-1}\\right)$$

where $b$ is the band. Three consequences follow, and they matter in this order.

**1. RSI understates momentum on limit days — but far less than you would guess.** Take the §36.6 series at its final close of BDT 60.20 and suppose day 22 would have closed +12% at 67.42. The circuit permits only +10%, so it prints 66.22. **The price is truncated by BDT 1.20, a full 2.0% of the close. The RSI moves from 88.14 to 87.37 — an understatement of 0.77 points.** The indicator barely notices what cost you 2% of your capital's return, because RSI is bounded and saturating up there: at those levels the map from RS to RSI is almost flat. **Do not look to RSI to tell you a limit-up happened. It will not.**

**2. The distortion compounds in price and does not compound in RSI.** Run four consecutive limit days: the unconstrained path reaches BDT 94.72 while the capped path reaches BDT 88.13 — a gap of BDT 6.59, or 7.0%. RSI over the same four days reads 95.46 unconstrained against 94.69 capped. The price gap grew sevenfold; **the RSI gap stayed at 0.77 points.** This is the DSE-specific trap in one line: *on a limit-locked runner, RSI tells you almost nothing is happening that it did not already tell you yesterday, while the price is moving further from you every session.*

**3. Limit-locked bars with negligible volume are not data.** A stock that opens limit-up and sits there on 400 shares traded has not produced a close — it has produced an unfilled order book. Feeding it into the recursion does one of two things. If the print is unchanged from the prior close, $U_t = D_t = 0$ and the recursion becomes:

$$\\overline{U}_t = \\frac{N-1}{N}\\,\\overline{U}_{t-1}, \\qquad \\overline{D}_t = \\frac{N-1}{N}\\,\\overline{D}_{t-1}$$

**Both averages shrink by exactly the same factor, so $RS$ — and therefore RSI — is unchanged.** The reading is identical, but you have burned one bar of the smoothing's effective memory on nothing. Do that for a week and your RSI(14) is running on eight bars of real information while still calling itself a 14. If the print *is* different, you have injected a synthetic gain that no volume supports.

**The correct handling is to exclude or forward-fill zero-liquidity limit bars before computing, not after.** Forward-filling makes the change exactly zero, which — per the algebra above — leaves RSI untouched and is therefore the honest choice. Excluding the bar entirely is defensible too, and preserves the effective window. What you must not do is treat the print as a real close.

**And the folklore rule is at its most destructive precisely here.** A DSE momentum run driven by thin float and circuit limits will pin RSI in the 80s and 90s for a fortnight. That is the environment in which "sell at 70" is not a suboptimal rule but an actively wealth-destroying one — it fires on the first day of the move and then, because RSI never returns to 30, leaves the investor sitting in cash watching the entire run. Chapter 2's circuit-breaker mechanics and Chapter 6's floor-price episode both taught the same lesson: **a price control does not remove pressure, it relocates it — and here it relocates it into an indicator that cannot see it.**

Chapter 37 takes up the Stochastic oscillator, which normalises differently — against the recent high-low range rather than against up-and-down pressure — and which fails in a different and instructive way.`,
      bn: `অধ্যায় ৩৫ আমাদের একটি কার্যকর মোমেন্টাম উপকরণ আর একটি অমীমাংসিত অভিযোগ দিয়ে গেছে। **MACD সীমাহীন।** এর মান টাকায়, তাই ৬০ টাকার শেয়ারে ২.৪ MACD আর ৯০০ টাকার শেয়ারে ২.৪ MACD মোমেন্টাম সম্পর্কে একই কথা নয়, আর একটিকে অন্যটির সঙ্গে ক্রমে সাজানোও যায় না। Wilder-এর Relative Strength Index ঠিক এই ত্রুটিটিই সারায় — আর সারাতে গিয়ে এমন একটি লোককথা অর্জন করে যা বাংলাদেশি খুচরা বিনিয়োগকারীদের কারিগরি বিশ্লেষণের অন্য যেকোনো একক ধারণার চেয়ে বেশি টাকা খরচ করায়।

### নির্মাণ, সঠিকভাবে

ক্লোজ দিয়ে শুরু। **কেবল ক্লোজ।** Wilder-এর RSI হাই, লো, গ্যাপ বা ভলিউম দেখে না। এক ক্লোজ থেকে পরবর্তী ক্লোজের পরিবর্তন নিন:

$$\\Delta_t = C_t - C_{t-1}$$

এবার ঐ পরিবর্তনকে দুটি অ-ঋণাত্মক ধারায় ভাগ করুন, যাতে একটি দিন একটিতে অবদান রাখে, কখনো দুটিতে নয়:

$$U_t = \\max(\\Delta_t,\\, 0), \\qquad D_t = \\max(-\\Delta_t,\\, 0)$$

যে দিন ওপরে বন্ধ হয় তা একটি লাভ ও একটি *শূন্য* ক্ষতি লিপিবদ্ধ করে। যে দিন নিচে বন্ধ হয় তা একটি ক্ষতি ও একটি *শূন্য* লাভ লিপিবদ্ধ করে। অপরিবর্তিত ক্লোজ দুটিতেই শূন্য। এই পৃথকীকরণই পুরো ধারণা: চিহ্নযুক্ত পরিবর্তনের গড় করার বদলে — যা চলমান গড় করে, আর যা একটি বড় ঊর্ধ্বদিনকে একটি বড় নিম্নদিন কাটতে দেয় — **RSI ঊর্ধ্ব-চাপ ও নিম্ন-চাপের গড় আলাদাভাবে করে, তারপর তুলনা করে।**

### Wilder-এর মসৃণকরণ সরল গড় নয়

এখানেই বেশিরভাগ খুচরা ব্যাখ্যা, বেশিরভাগ ইউটিউব টিউটোরিয়াল, আর উদ্বেগজনক সংখ্যক এক্সেল টেমপ্লেট ভুল করে।

**প্রথম** মানটি $N$ পরিবর্তনের ওপর একটি সরল গড়:

$$\\overline{U}_N = \\frac{1}{N}\\sum_{t=1}^{N} U_t, \\qquad \\overline{D}_N = \\frac{1}{N}\\sum_{t=1}^{N} D_t$$

এখনো কিছুই মসৃণ হয়নি, কারণ মসৃণ করার মতো কিছু নেই। এটি একটি *বীজ*, আর এর অস্তিত্ব কেবল পুনরাবৃত্তিকে একটি সূচনামান দেওয়ার জন্য।

**পরবর্তী প্রতিটি মান একটি পুনরাবৃত্তি, গড় নয়:**

$$\\overline{U}_t = \\frac{(N-1)\\,\\overline{U}_{t-1} + U_t}{N}$$

এটি পুনর্লিখন করলে এর প্রকৃত রূপ স্পষ্ট:

$$\\overline{U}_t = \\overline{U}_{t-1} + \\frac{1}{N}\\left(U_t - \\overline{U}_{t-1}\\right)$$

**এটি $\\alpha = 1/N$ সহ একটি সূচকীয় চলমান গড়।** $\\alpha = 2/(N+1)$ নয়, যা অধ্যায় ৩৪-এর ব্যবহৃত প্রচলিত EMA রীতি এবং যা অধ্যায় ৩৫-এর MACD উত্তরাধিকারসূত্রে পেয়েছে। দুটি বিনিময়যোগ্য নয়। $2/(M+1) = 1/N$ বসালে $M = 2N - 1$, অর্থাৎ:

**Wilder-এর RSI(14)-এর স্মৃতি ২৭-পর্বের EMA-র, ১৪-পর্বের নয়।**

RSI কেন প্রত্যাশা অনুযায়ী দ্রুত ঘোরে না — নতুনদের এই বিস্ময়ের অনেকটাই এই একটি তথ্য ব্যাখ্যা করে। এটি নামের চেয়ে ধীর একটি উপকরণ। আর এ কারণেই ভিন্নভাবে বীজ দেওয়া কোনো প্ল্যাটফর্মের গণিত RSI(14) — কেউ EMA বীজ ব্যবহার করে, কেউ কেবল প্রথম পরিবর্তন — প্রথম ত্রিশ-চল্লিশ বার আপনার সঙ্গে মিলবে না, তারপর পুনরাবৃত্তি পার্থক্য ধুয়ে দেবে। **দুটি প্ল্যাটফর্ম RSI-তে না মিললে অন্য কিছু দেখার আগে বীজ দেখুন।**

### আপেক্ষিক শক্তি, এবং সীমাবদ্ধকরণ

$$RS_t = \\frac{\\overline{U}_t}{\\overline{D}_t}, \\qquad RSI_t = 100 - \\frac{100}{1 + RS_t}$$

দ্বিতীয় রাশিটি কী করে লক্ষ করুন। $RS$ বিস্তৃত $[0, \\infty)$-এ। $x \\mapsto 100 - 100/(1+x)$ অপেক্ষকটি $[0,\\infty)$-কে একঘাতীভাবে $[0,100)$-এ নেয়। ঊর্ধ্ব-চাপ ও নিম্ন-চাপ সমান হলে $RS = 1$ এবং $RSI = 50$। মোটেই কোনো নিম্ন-ক্লোজ না থাকলে $\\overline{D} = 0$, $RS$ অসংজ্ঞায়িত, আর রীতি অনুযায়ী RSI = 100।

সমতুল্যভাবে এবং আরও প্রকাশকভাবে:

$$RSI_t = 100 \\times \\frac{\\overline{U}_t}{\\overline{U}_t + \\overline{D}_t}$$

**RSI হলো সাম্প্রতিক মোট দামের নড়াচড়ার যতটা অংশ ঊর্ধ্বমুখী ছিল, তার হিস্যা।** এইটুকুই। এটি একটি শতাংশ, মাত্রাহীন, দুই দিকেই সীমাবদ্ধ।

### MACD যা পারেনি, এতে যা মেলে

যেহেতু RSI একই এককের দুটি রাশির অনুপাত, **একক কেটে যায়।** ৩০০ টাকার GP-তে ৭৮ RSI আর ২২ টাকার টেক্সটাইল শেয়ারে ৭৮ RSI *একই বক্তব্য*: দুটিতেই সাম্প্রতিক নড়াচড়ার প্রায় ৭৮% ঊর্ধ্বমুখী ছিল।

এতে তিনটি সক্ষমতা মেলে যা অধ্যায় ৩৫-এ ছিল না:

- **প্রস্থচ্ছেদীয় ক্রমসজ্জা।** পুরো ডিএসই-কে RSI দিয়ে সাজাতে পারেন এবং সাজানোটির অর্থ থাকে। MACD দিয়ে সাজালে কেবল দামের স্তর অনুযায়ী সাজত।
- **কালান্তর তুলনা।** এক-তৃতীয়াংশ দামে তিন বছর আগের RSI-র সঙ্গে আজকের RSI তুলনীয়। MACD নয়।
- **স্থির রেফারেন্স স্তর।** ৩০, ৫০, ৭০ প্রতিটি উপকরণে একই অর্থ বহন করে, তাই একবার লেখা নিয়ম সর্বত্র খাটে।

স্বাভাবিকীকরণ প্রসাধনী উন্নতি নয়। **এটিই একটি নির্দেশককে স্ক্রিনিং হাতিয়ারে পরিণত করে।** মোমেন্টাম পরিমাপ মাত্রাহীন হলেই অধ্যায় ৩১-এর আপেক্ষিক-শক্তির শৃঙ্খলা ও অধ্যায় ৮-এর আন্তঃখাত তুলনা — দুটোই যন্ত্রায়ণযোগ্য হয়ে ওঠে।

### খুচরা কারিগরি বিশ্লেষণের সবচেয়ে ব্যয়বহুল বাক্য

এই যে: **"RSI ৭০-এর ওপরে মানে বিক্রি।"**

এটি ভুল, এটি সর্বত্র শেখানো হয়, আর এটি ঠিক সবচেয়ে খারাপ মুহূর্তে ক্ষতি করে — বছরের সেরা ধারার শুরুতে।

কেন, তার পাটিগণিত সূক্ষ্ম নয়। সাম্প্রতিক নড়াচড়া প্রধানত ঊর্ধ্বমুখী হলে RSI উঁচু থাকে। **সংজ্ঞা অনুযায়ীই একটি শক্তিশালী ধারা এমন একটি সময় যেখানে সাম্প্রতিক নড়াচড়া প্রধানত ঊর্ধ্বমুখী।** তাই একটি শক্তিশালী ধারা *যতক্ষণ শক্তিশালী ততক্ষণ* উঁচু RSI তৈরি করে। §৩৬.৫-এর উদাহরণ ধারায় RSI(14) গণনাযোগ্য প্রথম বারেই ৭০ অতিক্রম করে এবং নমুনার বাকি অংশে কখনো ৭৯-এর নিচে ফেরে না — সাতটির মধ্যে সাত বার, পাঠের ১০০%। §৩৬.৮-এর দীর্ঘতর ৭১-বারের ধারায় RSI **গণনাযোগ্য ৫৭ বারের ২৬টিতে, নমুনার ৪৫.৬%-এ** ৭০ বা তার ওপরে বসে থাকে। ঐ বাজারে প্রথম ৭০ প্রিন্টে বিক্রি করা ঝুঁকি ব্যবস্থাপনা নয়। এটি প্রতিটি ধারা প্রতিষ্ঠিত হওয়ার দিনেই তা থেকে বেরিয়ে যাওয়ার নির্দেশ।

Wilder নিজে অন্য দাবি করেননি। তিনি ৭০ ও ৩০-কে এমন স্তর হিসেবে বর্ণনা করেছিলেন যেখানে একটি চাল *প্রসারিত হতে পারে* এবং যেখানে ব্যবসায়ীর *মনোযোগ দেওয়া শুরু করা* উচিত — বাণিজ্য সংকেত হিসেবে নয়। লোককথার সংস্করণ শর্তটি ফেলে দিয়ে সংখ্যাটি রেখে দিয়েছে।

**এভাবে পুনর্বিন্যাস করুন, বিভ্রান্তি থাকবে না:**

> RSI বলে না ধারা কোথায় শেষ হবে। এটি বলে আপনি কী ধরনের ধারায় আছেন।

যে বাজারের RSI বারবার ৭৫–৮৫ প্রিন্ট করে সেটি উল্টে যাওয়ার মুখে থাকা বাজার নয়। সেটি এমন বাজার যা আপনাকে বলছে সে শক্তিশালী। তথ্যটি *চরিত্রে*, শেষবিন্দুতে নয়।

### পেশাদার পাঠ: রেঞ্জ নিয়ম

৭০ যদি বিক্রি না হয়, তবে সংখ্যাটি দিয়ে আসলে কী করবেন? দেখবেন RSI কোন ব্যান্ডটি *ছাড়তে অস্বীকার করে*।

| ধরন | RSI ঘোরে মোটামুটি | যে অঞ্চলটি গুরুত্বপূর্ণ | তা কী করে |
|---|---|---|---|
| Bull range | ৪০ – ৮০/৯০ | **৪০ – ৫০** | **সাপোর্ট** হিসেবে কাজ করে। পুলব্যাক সেখানে থামে। |
| Bear range | ১০/২০ – ৬০ | **৫০ – ৬০** | **রেজিস্ট্যান্স** হিসেবে কাজ করে। র‍্যালি সেখানে মরে। |
| কোনোটিই নয় | যেকোনো | — | কোনো রেঞ্জ নিয়ম কার্যকর নেই; আছে বলে ভান করবেন না। |

প্রকৃত ঊর্ধ্বমুখী ধারায় দামের পুলব্যাক RSI-র ৪০-এর ঘরে নেমে টিকে থাকা হিসেবে দেখা দেয়। **যে প্রথম পুলব্যাক RSI-কে নিশ্চিতভাবে ৪০-এর নিচে নামায় সেটিই অর্থবহ ঘটনা** — যেকোনো ৭০ প্রিন্টের চেয়ে অনেক বেশি অর্থবহ। প্রকৃত নিম্নমুখী ধারায় আয়নার প্রতিচ্ছবি খাটে: র‍্যালি RSI-কে ৫০-এর ঘরে ঠেলে, তা থমকে যায়, আর ৬০ পার করতে না পারাই নিশ্চিত করে ধারা অটুট।

এটি খুচরা প্রবৃত্তিকে সম্পূর্ণ উল্টে দেয়। **খুচরা ব্যবসায়ী ৭০-এ শক্তি বেচেন আর ৩০-এ দুর্বলতা কেনেন। রেঞ্জ পাঠ ষাঁড়ের বাজারে ৪০ হারানো বেচে আর ভালুকের বাজারে ৬০-এ ওঠা র‍্যালি বেচে।** একই উপাত্তে, §৩৬.৮-এ, ঐ দুই নিয়ম শেয়ারপ্রতি যথাক্রমে **−৩.৬০ টাকা ও +২.৩০ টাকা** দেয়। সরল নিয়মটি কেবল কম ফল দেয় না; যে ধারায় রেঞ্জ নিয়ম কিছু আয় করে সেখানেই এটি টাকা হারায়।

### Failure swing

Wilder-এর নিজস্ব সংকেত, আর এটি কখনো আপনাকে একটি স্তরকে নির্দেশ হিসেবে পড়তে বলে না।

**Bearish failure swing।** RSI ৭০-এর ওপরে ওঠে ও একটি শীর্ষ তৈরি করে। এটি একটি খাদে ফিরে আসে। আবার ওঠে কিন্তু **আগের শীর্ষ ছাড়াতে ব্যর্থ হয়**। তারপর মধ্যবর্তী খাদটির নিচে ভাঙে। ঐ ভাঙাটিই সংকেত।

**Bullish failure swing।** ৩০-এর নিচে আয়নার প্রতিচ্ছবি: একটি তল, একটি লাফ, একটি *উঁচু* দ্বিতীয় তল, তারপর মধ্যবর্তী শীর্ষের ওপরে ভাঙা।

স্তরের চেয়ে কাঠামো বেশি গুরুত্বপূর্ণ। লক্ষ করুন failure swing দাবি করে RSI *আগে* চরম হয়ে থাকুক, তারপর তা *পুনরাবৃত্তি করতে ব্যর্থ* হোক, তারপর *কাঠামো ভাঙুক*। তিনটি শর্ত। এ কারণেই এটি ৭০ অতিক্রমের চেয়ে অনেক কম বাজে, আর এ কারণেই যা নিয়ে বাজে তা মনোযোগের যোগ্য। **যে সংকেত ৪৫% বারে চালু হয় তা কোনো তথ্য বহন করে না; যা বছরে তিনবার চালু হয় তা হয়তো করে।**

### Divergence, এক অনুচ্ছেদে

**Divergence** হলো দাম উঁচু উচ্চতা বানাচ্ছে অথচ RSI নিচু উচ্চতা (bearish), বা দাম নিচু নিম্নতা বানাচ্ছে অথচ RSI উঁচু নিম্নতা (bullish)। এটি বলে নতুন দামের চরমটি আগেরটির চেয়ে কম মোমেন্টাম নিয়ে অর্জিত হয়েছে।

এটি কারিগরি বিশ্লেষণের সবচেয়ে বেশি বিক্রি হওয়া ধারণা এবং এর জন্য একটি পূর্ণ সংশয়ের অধ্যায় প্রাপ্য, যা **অধ্যায় ৪৪**-এ আছে। আপাতত দুটি তথ্য ধরে রাখুন: কিছু ঘটার আগে divergence খুব দীর্ঘ সময় টিকে থাকতে পারে, আর এটিই সেই প্যাটার্ন যা পেছন ফিরে দেখা সবচেয়ে সহজ ও বাস্তব সময়ে ধরা সবচেয়ে কঠিন। এই অনুচ্ছেদের জোরে এটি নিয়ে ব্যবসা করবেন না।

### RSI(14) আর RSI(2) ভিন্ন উপকরণ

পর্বসংখ্যা কোনো সুরের কাঁটা নয়। **এটি বদলালে নির্দেশকটি কীসের জন্য তাই বদলে যায়।**

| | RSI(14) | RSI(2) |
|---|---|---|
| কার্যকর EMA স্মৃতি | ২৭ বার | ৩ বার |
| সাধারণ পরিসর | ৩০ – ৮০ | ২ – ৯৮, অনবরত |
| কী মাপে | ধারার *চরিত্র* | এক-দুই দিনের *টান* |
| সঠিক যুক্তি | ধারা-অনুসরণ, রেঞ্জ নিয়ম | গড়ে প্রত্যাবর্তন |
| ৯০ পাঠের অর্থ | শক্তিশালী, সুস্থ ধারা | স্বল্পমেয়াদি অতিপ্রসারণ |

§৩৬.৮-এর ধারায় RSI(14) ৫৭ বারজুড়ে ২৪.৬০ থেকে ৮৪.৩১ বিস্তৃত, আর RSI(2) ৬.৪৭ থেকে ১০০.০০, চার বারের মধ্যে ৯৬ থেকে ৫২ আর ফিরে ৯১-এ চাবুক মারে। **এগুলো ভিন্ন সেটিংসহ একই উপকরণ নয়; একই নাম পরা বিপরীত যুক্তি।** RSI(2)-তে যে নিয়ম সঠিক — চরম কেনা — সেই নিয়মই RSI(14)-এ আপনাকে ধ্বংস করে। যিনি পর্ব না বলে "RSI ৩০-এর নিচে কেনা" বলেন তিনি নিজের দাবিটিই সুনির্দিষ্ট করেননি।

স্বল্প-পর্বের RSI-র ডিএসই-তে একটি বাড়তি সমস্যা আছে: এটি ঘন ঘন লেনদেন দাবি করে, আর অধ্যায় ৩-এর লেনদেন খরচ ও নিষ্পত্তি চক্র এখানে উচ্চ-কম্পাঙ্কের গড়-প্রত্যাবর্তনকে ব্যাকটেস্ট যা বলে তার চেয়ে অনেক কম আকর্ষণীয় করে।

### ডিএসই সমস্যা: সার্কিট সীমা উপাদান ছেঁটে দেয়

ওপরের প্রতিটি সূত্র ধরে নেয় $\\Delta_t$ একটি মুক্ত বাজারের উত্তর। **ডিএসই-তে তা নয়।** দৈনিক সার্কিট ব্যান্ড ক্লোজ আগের ক্লোজ থেকে কতদূর সরতে পারে তা বেঁধে দেয়, তাই $\\Delta_t$ একটি *সেন্সরকৃত* পর্যবেক্ষণ:

$$\\Delta_t^{\\text{observed}} = \\text{clip}\\!\\left(\\Delta_t^{\\text{true}},\\; -bC_{t-1},\\; +bC_{t-1}\\right)$$

যেখানে $b$ হলো ব্যান্ড। তিনটি পরিণতি আসে, আর এই ক্রমেই তারা গুরুত্বপূর্ণ।

**১. limit দিনে RSI মোমেন্টাম কম দেখায় — কিন্তু আপনার অনুমানের চেয়ে অনেক কম।** §৩৬.৬-এর ধারাটিকে তার শেষ ক্লোজ ৬০.২০ টাকায় নিন এবং ধরুন ২২তম দিন +১২% হয়ে ৬৭.৪২-এ বন্ধ হতো। সার্কিট কেবল +১০% দেয়, তাই প্রিন্ট হয় ৬৬.২২। **দাম ছেঁটে যায় ১.২০ টাকা, ক্লোজের পুরো ২.০%। RSI ৮৮.১৪ থেকে ৮৭.৩৭-এ যায় — ০.৭৭ পয়েন্টের কম দেখানো।** যা আপনার মূলধনের ফেরতের ২% খেয়েছে নির্দেশক তা প্রায় খেয়ালই করে না, কারণ RSI সীমাবদ্ধ ও ওখানে সম্পৃক্ত: ঐ স্তরে RS থেকে RSI-র অপেক্ষকটি প্রায় সমতল। **limit-up ঘটেছে কি না তা জানতে RSI-র দিকে তাকাবেন না। এটি বলবে না।**

**২. বিকৃতি দামে চক্রবৃদ্ধি হয়, RSI-তে হয় না।** পরপর চারটি limit দিন চালান: অনিয়ন্ত্রিত পথ ৯৪.৭২ টাকায় পৌঁছায় আর সীমাবদ্ধ পথ ৮৮.১৩ টাকায় — ব্যবধান ৬.৫৯ টাকা, অর্থাৎ ৭.০%। একই চার দিনে RSI অনিয়ন্ত্রিতে ৯৫.৪৬, সীমাবদ্ধে ৯৪.৬৯। দামের ব্যবধান সাতগুণ বেড়েছে; **RSI-র ব্যবধান ০.৭৭ পয়েন্টেই রয়ে গেছে।** এক লাইনে এটিই ডিএসই-নির্দিষ্ট ফাঁদ: *limit-locked দৌড়ে RSI আপনাকে গতকালের চেয়ে নতুন প্রায় কিছুই বলে না, অথচ দাম প্রতি সেশনে আপনার থেকে আরও দূরে সরছে।*

**৩. নগণ্য ভলিউমের limit-locked বার উপাত্ত নয়।** যে শেয়ার limit-up-এ খুলে ৪০০ শেয়ার লেনদেনে সেখানেই বসে থাকে সে কোনো ক্লোজ তৈরি করেনি — সে একটি অপূরিত অর্ডার বুক তৈরি করেছে। একে পুনরাবৃত্তিতে ঢোকালে দুটির একটি ঘটে। প্রিন্ট আগের ক্লোজের সমান হলে $U_t = D_t = 0$ এবং পুনরাবৃত্তি দাঁড়ায়:

$$\\overline{U}_t = \\frac{N-1}{N}\\,\\overline{U}_{t-1}, \\qquad \\overline{D}_t = \\frac{N-1}{N}\\,\\overline{D}_{t-1}$$

**দুটি গড়ই ঠিক একই গুণকে ছোট হয়, তাই $RS$ — এবং তাই RSI — অপরিবর্তিত।** পাঠ অভিন্ন, কিন্তু আপনি মসৃণকরণের কার্যকর স্মৃতির একটি বার কিছুই না পেয়ে পুড়িয়েছেন। এক সপ্তাহ তা করুন, আর আপনার RSI(14) আট বারের প্রকৃত তথ্যে চলবে অথচ নিজেকে ১৪ বলবে। প্রিন্ট যদি ভিন্ন *হয়*, তবে আপনি এমন একটি কৃত্রিম লাভ ঢুকিয়েছেন যাকে কোনো ভলিউম সমর্থন করে না।

**সঠিক ব্যবস্থা হলো গণনার আগে শূন্য-তারল্যের limit বার বাদ দেওয়া বা forward-fill করা, পরে নয়।** forward-fill পরিবর্তনকে ঠিক শূন্য করে, যা — ওপরের বীজগণিত অনুযায়ী — RSI-কে অস্পর্শ রাখে এবং তাই সৎ পছন্দ। বারটি সম্পূর্ণ বাদ দেওয়াও সমর্থনযোগ্য, আর তা কার্যকর জানালা রক্ষা করে। যা করা যাবে না তা হলো প্রিন্টটিকে প্রকৃত ক্লোজ হিসেবে গণ্য করা।

**আর লোককথার নিয়মটি ঠিক এখানেই সবচেয়ে ধ্বংসাত্মক।** পাতলা ফ্লোট ও সার্কিট সীমায় চালিত একটি ডিএসই মোমেন্টাম দৌড় RSI-কে পক্ষকালব্যাপী ৮০ ও ৯০-এর ঘরে পিন করে রাখবে। এই পরিবেশেই "৭০-এ বিক্রি" নিম্নমানের নিয়ম নয়, সক্রিয়ভাবে সম্পদ-ধ্বংসী নিয়ম — এটি চালের প্রথম দিনেই চালু হয়, তারপর যেহেতু RSI কখনো ৩০-এ ফেরে না, বিনিয়োগকারীকে নগদে বসিয়ে পুরো দৌড়টি দেখায়। অধ্যায় ২-এর সার্কিট ব্রেকার কৌশল ও অধ্যায় ৬-এর ফ্লোর-প্রাইস পর্ব — দুটোই একই শিক্ষা দিয়েছে: **দাম নিয়ন্ত্রণ চাপ দূর করে না, স্থানান্তরিত করে — আর এখানে তা এমন একটি নির্দেশকে স্থানান্তরিত করে যা তা দেখতে পায় না।**

অধ্যায় ৩৭ Stochastic oscillator ধরবে, যা ভিন্নভাবে স্বাভাবিকীকরণ করে — ঊর্ধ্ব-নিম্ন চাপের বিপরীতে নয়, সাম্প্রতিক হাই-লো পরিসরের বিপরীতে — এবং যা ভিন্ন ও শিক্ষণীয় উপায়ে ব্যর্থ হয়।`,
    },

    simple: {
      en: `Picture a tug-of-war on the field behind your para's school.

Two teams, one rope, a red ribbon tied at the middle. Every round, one side wins a pull and the ribbon shifts a little their way.

Now there are two completely different things you could measure, and beginners confuse them constantly.

**The first is where the ribbon is.** That is the price. Fifty-two taka. Sixty taka. It tells you who is ahead right now.

**The second is what share of the last fourteen pulls the buyers won.** That is RSI. It tells you nothing about where the ribbon is. It tells you *how the contest is going*.

### That is genuinely the whole formula

Look at the last fourteen rounds. Add up how much rope the buyers dragged over on their winning rounds. Add up how much the sellers dragged back on theirs. Then ask:

> Out of all the rope that moved, what percentage moved the buyers' way?

That percentage is RSI. Eighty means eighty percent of the recent effort went one way. Fifty means the two sides are evenly matched. Twenty means the sellers are doing almost all the work.

**It is a scoreboard for effort, not a location on the field.**

### Why the number cannot leave 0 and 100

A share of something is always between nothing and everything. The buyers cannot win more than a hundred percent of the pulls, and they cannot win less than zero percent of them. So RSI is trapped in that range no matter what the stock costs.

This is the quiet advantage over Chapter 35's MACD. **A percentage on a three-hundred-taka share and a percentage on a twenty-two-taka share mean the same thing.** You can line up two hundred DSE companies by that number and the line-up is meaningful. You cannot do that with a number measured in taka.

### The sentence that costs people money

Everybody has heard it: *RSI above seventy means sell.*

Go back to the tug-of-war. What does a score of eighty-five actually tell you? **It tells you one team is winning nearly every pull.** Is that the moment you bet against them?

A team winning eighty-five percent of pulls is not a team about to collapse. **It is a team that is strong.** And it will keep printing eighty-five for as long as it stays strong — which might be a fortnight, might be three months.

In the worked example in this chapter, the score crosses seventy on the very first round it can be calculated, and then stays above seventy-eight for every single remaining round. Seven out of seven. **Anyone selling on the first seventy print sold on day one of the run and then watched the rest of it from the sidelines.**

### So what is the number actually for

Watch which band the score refuses to leave.

If the buyers keep dipping to the forties and then bouncing back up, **the forties are where they are strong.** The day they fall through the forties and stay there, something real has changed. That day matters. A reading of eighty does not.

**Strength shows up as a floor the score will not go below, not as a ceiling it should not go above.**

### And on the DSE, two extra warnings

**One.** When a share hits its daily circuit limit, the referee stops the rope. The pull was bigger than what got recorded. So the score barely moves even though the day was enormous. In the worked case, a session that should have gained twelve percent gets capped at ten — you lose two percent of your money's return, and the score changes by less than one point. **Do not expect this indicator to tell you a limit-up happened.**

**Two.** During the floor-price period, shares were not allowed to fall. Prices sat unchanged for weeks. An unchanged day is neither a win nor a loss for either side, so the score just sits at whatever it was — and if it sits long enough with nothing real going in, it drifts toward fifty and means nothing at all. **A flat line is not a fair contest. It is a referee holding the rope.**

One last thing to carry into the rest of the chapter. In Bangladesh you generally cannot sell short. So even when the score genuinely does warn you that a move is stretched, the only thing you can do about it is **sell what you own or decline to buy more.** It is never an instruction to bet against the stock.`,
      bn: `আপনার পাড়ার স্কুলের পেছনের মাঠে একটি দড়ি টানাটানির কথা কল্পনা করুন।

দুটি দল, একটি দড়ি, মাঝখানে বাঁধা একটি লাল ফিতা। প্রতি রাউন্ডে এক পক্ষ একটি টান জেতে আর ফিতাটি একটু তাদের দিকে সরে।

এখন আপনি সম্পূর্ণ আলাদা দুটি জিনিস মাপতে পারেন, আর নতুনরা অনবরত এ দুটি গুলিয়ে ফেলেন।

**প্রথমটি হলো ফিতাটি কোথায়।** এটিই দাম। বায়ান্ন টাকা। ষাট টাকা। এটি বলে এই মুহূর্তে কে এগিয়ে।

**দ্বিতীয়টি হলো শেষ চোদ্দটি টানের কত অংশ ক্রেতারা জিতেছেন।** এটিই RSI। ফিতা কোথায় সে বিষয়ে এটি কিছুই বলে না। এটি বলে *প্রতিযোগিতাটি কেমন চলছে*।

### সত্যিই সূত্রটি এইটুকুই

শেষ চোদ্দটি রাউন্ড দেখুন। ক্রেতারা তাঁদের জেতা রাউন্ডগুলোতে কতটা দড়ি টেনেছেন যোগ করুন। বিক্রেতারা তাঁদের রাউন্ডে কতটা ফিরিয়ে নিয়েছেন যোগ করুন। তারপর জিজ্ঞেস করুন:

> যতটা দড়ি নড়েছে, তার কত শতাংশ ক্রেতাদের দিকে নড়েছে?

ঐ শতাংশই RSI। আশি মানে সাম্প্রতিক পরিশ্রমের আশি শতাংশ এক দিকে গেছে। পঞ্চাশ মানে দুই পক্ষ সমান-সমান। কুড়ি মানে বিক্রেতারাই প্রায় সব কাজ করছেন।

**এটি পরিশ্রমের স্কোরবোর্ড, মাঠে অবস্থান নয়।**

### সংখ্যাটি কেন ০ ও ১০০ ছাড়তে পারে না

কোনো কিছুর হিস্যা সর্বদা কিছুই-না আর সবটুকুর মাঝে থাকে। ক্রেতারা টানের একশো শতাংশের বেশি জিততে পারেন না, আর শূন্য শতাংশের কমও জিততে পারেন না। তাই শেয়ারের দাম যাই হোক, RSI ঐ পরিসরেই আটকা।

এটিই অধ্যায় ৩৫-এর MACD-র ওপর নীরব সুবিধা। **তিনশো টাকার শেয়ারে একটি শতাংশ আর বাইশ টাকার শেয়ারে একটি শতাংশ একই অর্থ বহন করে।** ঐ সংখ্যা দিয়ে দুইশো ডিএসই কোম্পানিকে সারিবদ্ধ করতে পারেন এবং সারিটির অর্থ থাকে। টাকায় মাপা সংখ্যা দিয়ে তা পারবেন না।

### যে বাক্যটি মানুষের টাকা খায়

সবাই শুনেছেন: *RSI সত্তরের ওপরে মানে বিক্রি।*

দড়ি টানাটানিতে ফিরুন। পঁচাশি স্কোর আসলে কী বলে? **বলে যে এক দল প্রায় প্রতিটি টান জিতছে।** এটিই কি তাদের বিরুদ্ধে বাজি ধরার মুহূর্ত?

যে দল টানের পঁচাশি শতাংশ জিতছে সে ভেঙে পড়ার মুখে থাকা দল নয়। **সে শক্তিশালী দল।** আর যতক্ষণ শক্তিশালী থাকবে ততক্ষণ পঁচাশি ছাপতেই থাকবে — হয়তো পক্ষকাল, হয়তো তিন মাস।

এই অধ্যায়ের উদাহরণে স্কোরটি গণনাযোগ্য একেবারে প্রথম রাউন্ডেই সত্তর পেরোয়, তারপর বাকি প্রতিটি রাউন্ডে আটাত্তরের ওপরে থাকে। সাতে সাত। **যিনি প্রথম সত্তর প্রিন্টে বেচলেন তিনি দৌড়ের প্রথম দিনেই বেচলেন, তারপর বাকিটা মাঠের বাইরে থেকে দেখলেন।**

### তাহলে সংখ্যাটি আসলে কীসের জন্য

দেখুন স্কোরটি কোন ব্যান্ড ছাড়তে অস্বীকার করে।

ক্রেতারা যদি বারবার চল্লিশের ঘরে নেমে আবার উঠে আসেন, **তবে চল্লিশের ঘরেই তাঁরা শক্তিশালী।** যেদিন তাঁরা চল্লিশ ভেদ করে সেখানেই থেকে যান, সেদিন প্রকৃত কিছু বদলেছে। ঐ দিনটি গুরুত্বপূর্ণ। আশির একটি পাঠ নয়।

**শক্তি দেখা দেয় এমন একটি মেঝে হিসেবে যার নিচে স্কোর নামবে না, এমন একটি ছাদ হিসেবে নয় যার ওপরে ওঠা উচিত নয়।**

### আর ডিএসই-তে বাড়তি দুটি সতর্কতা

**এক।** কোনো শেয়ার দৈনিক সার্কিট সীমায় পৌঁছালে রেফারি দড়ি থামিয়ে দেন। টানটি যা লিপিবদ্ধ হলো তার চেয়ে বড় ছিল। তাই দিনটি বিশাল হওয়া সত্ত্বেও স্কোর প্রায় নড়ে না। উদাহরণে যে সেশনের বারো শতাংশ বাড়ার কথা ছিল তা দশে আটকে যায় — আপনার টাকার ফেরতের দুই শতাংশ হারান, আর স্কোর বদলায় এক পয়েন্টেরও কম। **limit-up ঘটেছে কি না এই নির্দেশক আপনাকে বলবে, এমন আশা করবেন না।**

**দুই।** ফ্লোর-প্রাইসের সময়ে শেয়ার পড়তেই পারত না। দাম সপ্তাহের পর সপ্তাহ অপরিবর্তিত বসে থাকত। অপরিবর্তিত দিন কোনো পক্ষেরই জয় বা পরাজয় নয়, তাই স্কোর যা ছিল তাই বসে থাকে — আর প্রকৃত কিছু না ঢুকে যথেষ্ট দিন বসে থাকলে তা পঞ্চাশের দিকে ভেসে যায় এবং কোনো অর্থই বহন করে না। **সমতল রেখা ন্যায্য প্রতিযোগিতা নয়। এটি রেফারির দড়ি ধরে রাখা।**

অধ্যায়ের বাকি অংশে নিয়ে যাওয়ার মতো শেষ একটি কথা। বাংলাদেশে সাধারণত শর্ট বিক্রি করা যায় না। তাই স্কোর যখন সত্যিই সতর্ক করে যে চালটি টানটান হয়ে গেছে, তখনও আপনি কেবল একটি কাজই করতে পারেন — **যা আছে তা বেচুন বা আর কেনা থেকে বিরত থাকুন।** এটি কখনোই শেয়ারের বিরুদ্ধে বাজি ধরার নির্দেশ নয়।`,
    },

    example: {
      en: `### BANGLAENG: twenty-one sessions in which the folklore never once was right

BANGLAENG is a mid-cap DSE engineering name used illustratively here; **every figure below is constructed, not historical.** The stock has just come off a base and runs for twenty-one sessions. Circuit band 10%. We compute Wilder RSI(14), which means the first reading is possible only on day 15.

| Day | Close | Δ | Gain | Loss | AvgGain | AvgLoss | RS | RSI | Zone |
|---|---|---|---|---|---|---|---|---|---|
| 1 | 48.20 | — | — | — | | | | | |
| 2 | 48.90 | +0.70 | 0.70 | 0.00 | | | | | |
| 3 | 49.60 | +0.70 | 0.70 | 0.00 | | | | | |
| 4 | 49.10 | −0.50 | 0.00 | 0.50 | | | | | |
| 5 | 50.30 | +1.20 | 1.20 | 0.00 | | | | | |
| 6 | 51.10 | +0.80 | 0.80 | 0.00 | | | | | |
| 7 | 50.60 | −0.50 | 0.00 | 0.50 | | | | | |
| 8 | 52.00 | +1.40 | 1.40 | 0.00 | | | | | |
| 9 | 52.80 | +0.80 | 0.80 | 0.00 | | | | | |
| 10 | 52.30 | −0.50 | 0.00 | 0.50 | | | | | |
| 11 | 53.90 | +1.60 | 1.60 | 0.00 | | | | | |
| 12 | 54.70 | +0.80 | 0.80 | 0.00 | | | | | |
| 13 | 54.20 | −0.50 | 0.00 | 0.50 | | | | | |
| 14 | 55.60 | +1.40 | 1.40 | 0.00 | | | | | |
| **15** | **56.90** | +1.30 | 1.30 | 0.00 | **0.764286** | **0.142857** | **5.3500** | **84.2520** | BULL |
| 16 | 57.60 | +0.70 | 0.70 | 0.00 | 0.759694 | 0.132653 | 5.7269 | **85.1344** | BULL |
| 17 | 56.80 | −0.80 | 0.00 | 0.80 | 0.705430 | 0.180321 | 3.9121 | 79.6420 | BULL |
| 18 | 58.10 | +1.30 | 1.30 | 0.00 | 0.747899 | 0.167441 | 4.4667 | 81.7073 | BULL |
| 19 | 59.40 | +1.30 | 1.30 | 0.00 | 0.787335 | 0.155481 | 5.0639 | 83.5089 | BULL |
| 20 | 58.70 | −0.70 | 0.00 | 0.70 | 0.731097 | 0.194375 | 3.7613 | **78.9972** | BULL |
| 21 | 60.20 | +1.50 | 1.50 | 0.00 | 0.786019 | 0.180491 | 4.3549 | 81.3255 | BULL |

Ten of the first fourteen changes are gains totalling **BDT 10.70**; four are losses totalling **BDT 2.00**. That is the entire seed.

### The first reading is already "overbought"

$$\\overline{U}_{15} = \\frac{10.70}{14} = 0.764286, \\qquad \\overline{D}_{15} = \\frac{2.00}{14} = 0.142857$$

$$RS = \\frac{10.70}{2.00} = 5.3500 \\;\\Rightarrow\\; RSI = 100 - \\frac{100}{6.3500} = 84.2520$$

**The very first number this indicator is capable of producing is 84.25.** There was no crossing of 70 to watch for, no build-up, no warning. The indicator became computable and it was already deep in the zone the folklore calls a sell.

That is not an accident of this dataset. It is what a trend looks like. Ten up days against four down days, and the up days averaged BDT 1.07 against down days of BDT 0.50 — **the buyers won ten of fourteen rounds and won them twice as hard.** A number that measures exactly that has no choice but to print in the eighties.

### What the 70 rule cost, in taka

| | Value |
|---|---|
| Bars with RSI computed | 7 |
| Bars with RSI ≥ 70 | **7** |
| Share of bars above 70 | **100.00%** |
| Highest RSI in sample | 85.1344 (day 16) |
| Lowest RSI in sample | **78.9972** (day 20) |
| Close at first 70 print | 56.90 |
| Close at end of sample | 60.20 |
| **BDT surrendered by selling at 70** | **3.30** |
| **Surrendered as % of exit price** | **5.7996%** |

Seven readings, seven of them above 70, and the *lowest* of them is 78.9972. **RSI never came close to leaving the zone.** Selling on the first print gave up BDT 3.30 a share in six sessions — 5.80% of the price you sold at, in a market where a fixed deposit pays you roughly that in six months.

And note what would have happened next if you had held out for the textbook re-entry. From day 21's state, at a steady BDT 0.50 a session of decline, **RSI needs fifteen consecutive down closes to fall below 40 and twenty to fall below 30.** The rule tells you to sell in week one and buy back after a month of uninterrupted losses. As a description of anybody's actual behaviour, that is not a strategy.

### The range reading on the same data

Now apply §36.1's range rules instead. The question is not "is RSI high" but "which band does it refuse to leave."

Across seven readings, RSI dipped twice — to 79.64 on day 17 and to **78.9972** on day 20 — and both times it recovered immediately. The 40–50 support zone was **never approached.** The Zone column returns BULL RANGE on all seven bars.

**The instruction is: hold, and keep holding until RSI closes below 40.** On this sample that instruction never fired once, which is exactly correct, because the trend never broke. A signal that stays silent through a 24.9% advance is doing its job.

Compare the two readings side by side:

| | Sell at 70 | Range rule |
|---|---|---|
| Signals fired | 1 (day 15) | 0 |
| Exit price | 56.90 | still held at 60.20 |
| **Result per share** | **−3.30 vs holding** | **+3.30 vs the naive rule** |
| What it was reading | a level | a regime |

### The circuit-limit stress test

Now the DSE-specific part. Suppose day 22 opens on news and, in a free market, would close **+12% at BDT 67.42.** The 10% band permits only **BDT 66.22.**

$$\\text{Truncation} = 67.4240 - 66.2200 = \\mathbf{BDT\\ 1.2040} = \\mathbf{2.0000\\%} \\text{ of the close}$$

Feed each version through one more step of the recursion from day 21's averages:

| | Capped close 66.22 | Free close 67.42 |
|---|---|---|
| Gain that day | 6.02 | 7.22 |
| New AvgGain | 1.159875 | 1.245875 |
| New AvgLoss | 0.167599 | 0.167599 |
| RS | 6.9206 | 7.4337 |
| **RSI** | **87.3746** | **88.1428** |

$$\\text{RSI understated by } 88.1428 - 87.3746 = \\mathbf{0.7682 \\text{ points}}$$

**Read those two rows against each other and the DSE trap is visible in one line.** The circuit cost you two full percent of return — real money, gone — and the indicator registered the loss as **seventy-seven hundredths of a point.** RSI is bounded and saturating up there: at $RS \\approx 7$ the map from RS to RSI has a slope of only about 1.4 points per unit of RS, against 25 points per unit down at $RS = 1$.

So on a limit-locked DSE runner, **your indicator will look almost identical every morning while the price walks away from you every afternoon.** Chapter 39's ATR will tell you more about that session than RSI ever can.

### What a floor-price stretch would have done

Suppose sessions 17 through 21 had been floor-locked instead, printing 56.80 unchanged five times. Then $U_t = D_t = 0$ on each, and:

$$\\overline{U}_t = \\tfrac{13}{14}\\overline{U}_{t-1}, \\qquad \\overline{D}_t = \\tfrac{13}{14}\\overline{D}_{t-1} \\;\\Rightarrow\\; RS \\text{ unchanged} \\Rightarrow RSI = 79.6420 \\text{ throughout}$$

The chart would show a perfectly flat RSI at 79.64 for a week and a novice would call it "sustained strength." **It is the opposite. It is five sessions of the fourteen-bar window burned on nothing** — after that week the RSI(14) is running on nine bars of real information while still calling itself a fourteen. Chapter 26's exclusion flag is the tool: drop those bars before the computation, not after.`,
      bn: `### BANGLAENG: একুশটি সেশন, যার একটিতেও লোককথা ঠিক ছিল না

BANGLAENG এখানে দৃষ্টান্তমূলকভাবে ব্যবহৃত একটি মাঝারি আকারের ডিএসই প্রকৌশল নাম; **নিচের প্রতিটি সংখ্যা নির্মিত, ঐতিহাসিক নয়।** শেয়ারটি সবেমাত্র একটি ভিত্তি থেকে বেরিয়ে একুশ সেশন দৌড়ায়। সার্কিট ব্যান্ড ১০%। আমরা Wilder RSI(14) গণনা করি, অর্থাৎ প্রথম পাঠটি সম্ভব কেবল ১৫তম দিনে।

| দিন | ক্লোজ | Δ | লাভ | ক্ষতি | AvgGain | AvgLoss | RS | RSI | অঞ্চল |
|---|---|---|---|---|---|---|---|---|---|
| ১ | ৪৮.২০ | — | — | — | | | | | |
| ২ | ৪৮.৯০ | +০.৭০ | ০.৭০ | ০.০০ | | | | | |
| ৩ | ৪৯.৬০ | +০.৭০ | ০.৭০ | ০.০০ | | | | | |
| ৪ | ৪৯.১০ | −০.৫০ | ০.০০ | ০.৫০ | | | | | |
| ৫ | ৫০.৩০ | +১.২০ | ১.২০ | ০.০০ | | | | | |
| ৬ | ৫১.১০ | +০.৮০ | ০.৮০ | ০.০০ | | | | | |
| ৭ | ৫০.৬০ | −০.৫০ | ০.০০ | ০.৫০ | | | | | |
| ৮ | ৫২.০০ | +১.৪০ | ১.৪০ | ০.০০ | | | | | |
| ৯ | ৫২.৮০ | +০.৮০ | ০.৮০ | ০.০০ | | | | | |
| ১০ | ৫২.৩০ | −০.৫০ | ০.০০ | ০.৫০ | | | | | |
| ১১ | ৫৩.৯০ | +১.৬০ | ১.৬০ | ০.০০ | | | | | |
| ১২ | ৫৪.৭০ | +০.৮০ | ০.৮০ | ০.০০ | | | | | |
| ১৩ | ৫৪.২০ | −০.৫০ | ০.০০ | ০.৫০ | | | | | |
| ১৪ | ৫৫.৬০ | +১.৪০ | ১.৪০ | ০.০০ | | | | | |
| **১৫** | **৫৬.৯০** | +১.৩০ | ১.৩০ | ০.০০ | **০.৭৬৪২৮৬** | **০.১৪২৮৫৭** | **৫.৩৫০০** | **৮৪.২৫২০** | BULL |
| ১৬ | ৫৭.৬০ | +০.৭০ | ০.৭০ | ০.০০ | ০.৭৫৯৬৯৪ | ০.১৩২৬৫৩ | ৫.৭২৬৯ | **৮৫.১৩৪৪** | BULL |
| ১৭ | ৫৬.৮০ | −০.৮০ | ০.০০ | ০.৮০ | ০.৭০৫৪৩০ | ০.১৮০৩২১ | ৩.৯১২১ | ৭৯.৬৪২০ | BULL |
| ১৮ | ৫৮.১০ | +১.৩০ | ১.৩০ | ০.০০ | ০.৭৪৭৮৯৯ | ০.১৬৭৪৪১ | ৪.৪৬৬৭ | ৮১.৭০৭৩ | BULL |
| ১৯ | ৫৯.৪০ | +১.৩০ | ১.৩০ | ০.০০ | ০.৭৮৭৩৩৫ | ০.১৫৫৪৮১ | ৫.০৬৩৯ | ৮৩.৫০৮৯ | BULL |
| ২০ | ৫৮.৭০ | −০.৭০ | ০.০০ | ০.৭০ | ০.৭৩১০৯৭ | ০.১৯৪৩৭৫ | ৩.৭৬১৩ | **৭৮.৯৯৭২** | BULL |
| ২১ | ৬০.২০ | +১.৫০ | ১.৫০ | ০.০০ | ০.৭৮৬০১৯ | ০.১৮০৪৯১ | ৪.৩৫৪৯ | ৮১.৩২৫৫ | BULL |

প্রথম চোদ্দটি পরিবর্তনের দশটি লাভ, মোট **১০.৭০ টাকা**; চারটি ক্ষতি, মোট **২.০০ টাকা**। পুরো বীজটি এইটুকুই।

### প্রথম পাঠটিই ইতিমধ্যে "ওভারবট"

$$\\overline{U}_{15} = \\frac{10.70}{14} = 0.764286, \\qquad \\overline{D}_{15} = \\frac{2.00}{14} = 0.142857$$

$$RS = \\frac{10.70}{2.00} = 5.3500 \\;\\Rightarrow\\; RSI = 100 - \\frac{100}{6.3500} = 84.2520$$

**এই নির্দেশক যে প্রথম সংখ্যাটি তৈরি করতে সক্ষম তা-ই ৮৪.২৫।** দেখার মতো কোনো ৭০ অতিক্রম ছিল না, কোনো গড়ে ওঠা ছিল না, কোনো সতর্কতা ছিল না। নির্দেশকটি গণনাযোগ্য হলো আর হয়েই লোককথা যাকে বিক্রি বলে সেই অঞ্চলের গভীরে ছিল।

এটি এই উপাত্তের কোনো দুর্ঘটনা নয়। একটি ধারা দেখতে এমনই হয়। চার নিম্নদিনের বিপরীতে দশ ঊর্ধ্বদিন, আর ঊর্ধ্বদিনের গড় ১.০৭ টাকার বিপরীতে নিম্নদিনের ০.৫০ টাকা — **ক্রেতারা চোদ্দটির দশটি রাউন্ড জিতেছেন এবং দ্বিগুণ জোরে জিতেছেন।** যে সংখ্যা ঠিক এটিই মাপে তার আশির ঘরে ছাপা ছাড়া উপায় নেই।

### ৭০ নিয়মের খরচ, টাকায়

| | মান |
|---|---|
| RSI গণনা হওয়া বার | ৭ |
| RSI ≥ ৭০ হওয়া বার | **৭** |
| ৭০-এর ওপরে বারের হিস্যা | **১০০.০০%** |
| নমুনার সর্বোচ্চ RSI | ৮৫.১৩৪৪ (দিন ১৬) |
| নমুনার সর্বনিম্ন RSI | **৭৮.৯৯৭২** (দিন ২০) |
| প্রথম ৭০ প্রিন্টে ক্লোজ | ৫৬.৯০ |
| নমুনার শেষে ক্লোজ | ৬০.২০ |
| **৭০-এ বেচে ছেড়ে দেওয়া টাকা** | **৩.৩০** |
| **ছেড়ে দেওয়া, প্রস্থান দামের %** | **৫.৭৯৯৬%** |

সাতটি পাঠ, সাতটিই ৭০-এর ওপরে, আর তাদের *সর্বনিম্নটি* ৭৮.৯৯৭২। **RSI অঞ্চল ছাড়ার কাছাকাছিও যায়নি।** প্রথম প্রিন্টে বিক্রি করলে ছয় সেশনে শেয়ারপ্রতি ৩.৩০ টাকা ছেড়ে দিতেন — যে দামে বেচলেন তার ৫.৮০%, এমন এক বাজারে যেখানে স্থায়ী আমানত ছয় মাসে মোটামুটি ততটাই দেয়।

আর পাঠ্যবইয়ের পুনঃপ্রবেশের জন্য অপেক্ষা করলে পরে কী হতো তা লক্ষ করুন। ২১তম দিনের অবস্থা থেকে, সেশনপ্রতি স্থির ০.৫০ টাকা পতনে, **RSI-র ৪০-এর নিচে নামতে টানা পনেরোটি নিম্ন-ক্লোজ ও ৩০-এর নিচে নামতে কুড়িটি লাগে।** নিয়মটি বলে প্রথম সপ্তাহে বেচুন আর এক মাস অবিরাম ক্ষতির পর ফিরে কিনুন। কারও প্রকৃত আচরণের বর্ণনা হিসেবে এটি কোনো কৌশল নয়।

### একই উপাত্তে রেঞ্জ পাঠ

এবার তার বদলে §৩৬.১-এর রেঞ্জ নিয়ম প্রয়োগ করুন। প্রশ্নটি "RSI কি উঁচু" নয়, "এটি কোন ব্যান্ড ছাড়তে অস্বীকার করে।"

সাতটি পাঠজুড়ে RSI দুবার নেমেছে — ১৭তম দিনে ৭৯.৬৪ আর ২০তম দিনে **৭৮.৯৯৭২** — আর দুবারই সঙ্গে সঙ্গে ফিরে এসেছে। ৪০–৫০ সাপোর্ট অঞ্চলের **কাছেও যায়নি।** Zone কলামটি সাতটি বারেই BULL RANGE ফেরত দেয়।

**নির্দেশ হলো: ধরে রাখুন, এবং RSI ৪০-এর নিচে বন্ধ না হওয়া পর্যন্ত ধরে রাখুন।** এই নমুনায় ঐ নির্দেশ একবারও চালু হয়নি, যা ঠিক সঠিক, কারণ ধারাটি কখনো ভাঙেনি। যে সংকেত ২৪.৯% উত্থানজুড়ে নীরব থাকে সে তার কাজটিই করছে।

দুটি পাঠ পাশাপাশি রাখুন:

| | ৭০-এ বিক্রি | রেঞ্জ নিয়ম |
|---|---|---|
| চালু হওয়া সংকেত | ১ (দিন ১৫) | ০ |
| প্রস্থান দাম | ৫৬.৯০ | ৬০.২০-তে এখনো ধরা |
| **শেয়ারপ্রতি ফল** | **ধরে রাখার তুলনায় −৩.৩০** | **সরল নিয়মের তুলনায় +৩.৩০** |
| কী পড়ছিল | একটি স্তর | একটি ধরন |

### সার্কিট-সীমার চাপ পরীক্ষা

এবার ডিএসই-নির্দিষ্ট অংশ। ধরুন ২২তম দিন খবরে খোলে এবং মুক্ত বাজারে **+১২% হয়ে ৬৭.৪২ টাকায়** বন্ধ হতো। ১০% ব্যান্ড অনুমতি দেয় কেবল **৬৬.২২ টাকা।**

$$\\text{Truncation} = 67.4240 - 66.2200 = \\mathbf{BDT\\ 1.2040} = \\mathbf{2.0000\\%} \\text{ of the close}$$

প্রতিটি সংস্করণকে ২১তম দিনের গড় থেকে পুনরাবৃত্তির আর একটি ধাপে চালান:

| | সীমাবদ্ধ ক্লোজ ৬৬.২২ | মুক্ত ক্লোজ ৬৭.৪২ |
|---|---|---|
| ঐ দিনের লাভ | ৬.০২ | ৭.২২ |
| নতুন AvgGain | ১.১৫৯৮৭৫ | ১.২৪৫৮৭৫ |
| নতুন AvgLoss | ০.১৬৭৫৯৯ | ০.১৬৭৫৯৯ |
| RS | ৬.৯২০৬ | ৭.৪৩৩৭ |
| **RSI** | **৮৭.৩৭৪৬** | **৮৮.১৪২৮** |

$$\\text{RSI understated by } 88.1428 - 87.3746 = \\mathbf{0.7682 \\text{ points}}$$

**ঐ দুটি সারি পরস্পরের বিপরীতে পড়ুন, ডিএসই ফাঁদটি এক লাইনে দৃশ্যমান।** সার্কিট আপনার ফেরতের পুরো দুই শতাংশ খেয়েছে — প্রকৃত টাকা, চলে গেছে — আর নির্দেশক ক্ষতিটি লিপিবদ্ধ করেছে **এক পয়েন্টের সাতাত্তর শতাংশ হিসেবে।** ওখানে RSI সীমাবদ্ধ ও সম্পৃক্ত: $RS \\approx 7$-এ RS থেকে RSI-র অপেক্ষকের ঢাল প্রতি একক RS-এ মাত্র প্রায় ১.৪ পয়েন্ট, অথচ $RS = 1$-এ তা প্রতি এককে ২৫ পয়েন্ট।

তাই limit-locked ডিএসই দৌড়ে **আপনার নির্দেশক প্রতি সকালে প্রায় অভিন্ন দেখাবে অথচ দাম প্রতি বিকেলে আপনার থেকে দূরে হাঁটবে।** অধ্যায় ৩৯-এর ATR ঐ সেশন সম্পর্কে RSI যা কোনোদিন পারবে না তার চেয়ে বেশি বলবে।

### ফ্লোর-প্রাইসের একটি পর্ব কী করত

ধরুন ১৭ থেকে ২১ সেশনগুলো বরং ফ্লোরে আটকে ছিল, পাঁচবার অপরিবর্তিত ৫৬.৮০ ছাপছিল। তখন প্রতিটিতে $U_t = D_t = 0$, এবং:

$$\\overline{U}_t = \\tfrac{13}{14}\\overline{U}_{t-1}, \\qquad \\overline{D}_t = \\tfrac{13}{14}\\overline{D}_{t-1} \\;\\Rightarrow\\; RS \\text{ unchanged} \\Rightarrow RSI = 79.6420 \\text{ throughout}$$

চার্টে এক সপ্তাহ ধরে ৭৯.৬৪-এ নিখুঁত সমতল RSI দেখা যেত আর একজন নবীন একে "টেকসই শক্তি" বলতেন। **এটি ঠিক উল্টো। এটি চোদ্দ-বারের জানালার পাঁচটি সেশন কিছুই না পেয়ে পুড়িয়ে ফেলা** — ঐ সপ্তাহের পর RSI(14) নয় বারের প্রকৃত তথ্যে চলছে অথচ নিজেকে চোদ্দ বলছে। অধ্যায় ২৬-এর বর্জন ফ্ল্যাগই হাতিয়ার: গণনার আগে ঐ বারগুলো বাদ দিন, পরে নয়।`,
    },

    formula: {
      en: `### 1. The change, and why only closes

$$\\Delta_t = C_t - C_{t-1}$$

**Wilder deliberately discards the high, the low, the open, the gap and the volume.** That is a real cost — Chapter 40 will show how much information volume carries on the DSE — and it buys one thing: the indicator cannot be gamed by an intraday spike that closed nowhere near the extreme. A stock that trades to 62.00 and closes at 58.70 contributes a *loss* of 0.70, not a gain of 2.60. Whether you regard that as robustness or as blindness is the honest debate, and it depends on your market. On a thin DSE counter where a single order can print a wild high on 200 shares, **close-only is the conservative choice and the right one.**

### 2. Separation into two non-negative streams

$$U_t = \\max(\\Delta_t,\\,0), \\qquad D_t = \\max(-\\Delta_t,\\,0)$$

Note the identity $U_t \\cdot D_t = 0$ for every $t$: **exactly one of the two is non-zero, or both are zero.** This is what distinguishes RSI from every moving average you have met so far.

A moving average of signed changes lets a +1.50 day cancel a −1.50 day and returns zero, which is indistinguishable from a fortnight of complete stillness. **RSI cannot make that mistake**, because it never adds the two streams — it divides them. Fourteen violent alternating sessions and fourteen dead flat ones both produce a moving-average slope of zero; the first produces $RS = 1$ with large averages, the second produces $0/0$. Same MA reading, completely different market.

### 3. The seed, which exists only because a recursion needs a starting value

$$\\overline{U}_N = \\frac{1}{N}\\sum_{t=1}^{N} U_t, \\qquad \\overline{D}_N = \\frac{1}{N}\\sum_{t=1}^{N} D_t$$

On BANGLAENG: $\\overline{U}_{15} = 10.70/14 = 0.764286$ and $\\overline{D}_{15} = 2.00/14 = 0.142857$.

**This is the only simple average in the entire construction, and it is not part of the indicator's definition — it is an initialisation.** That distinction matters because it is the single largest source of disagreement between platforms. Some seed with the simple average as above. Some seed with an EMA run from the first bar. Some seed with the very first change alone. All three are defensible; none of them agree for the first several dozen bars.

**If your RSI disagrees with your broker's terminal, check the seed before you check anything else.** See §36.4.6 for how fast the disagreement dies.

### 4. Wilder's recursion — an EMA in disguise

$$\\overline{U}_t = \\frac{(N-1)\\,\\overline{U}_{t-1} + U_t}{N} = \\overline{U}_{t-1} + \\frac{1}{N}\\big(U_t - \\overline{U}_{t-1}\\big)$$

The second form is the point. **It is an exponential moving average with $\\alpha = 1/N$** — the correction-to-forecast form Chapter 34 introduced. Solving $2/(M+1) = 1/N$ gives:

$$M = 2N - 1 \\;\\Rightarrow\\; N = 14 \\;\\Rightarrow\\; M = \\mathbf{27}$$

**An RSI(14) has the memory of a 27-period EMA.** It is roughly twice as slow as its label advertises, and this is not a curiosity — it is why RSI stubbornly refuses to turn when a beginner expects it to.

Three ways of computing "the average gain" on the same BANGLAENG data, at day 21:

| Method | AvgGain | AvgLoss | RSI | vs Wilder |
|---|---|---|---|---|
| **Wilder, $\\alpha = 1/14$** | **0.786019** | **0.180491** | **81.3255** | — |
| Simple 14-bar average | 0.864286 | 0.178571 | 82.8767 | +1.5512 |
| Standard EMA, $\\alpha = 2/15$ | — | — | 80.1206 | −1.2049 |

**Three "RSI(14)" values spanning 2.76 points on identical data.** None of them is wrong; only one of them is Wilder's. If you build this in a spreadsheet and reach for AVERAGE() past the seed row, you have built the second row of that table and labelled it the first.

### 5. Relative strength and the bounded transform

$$RS_t = \\frac{\\overline{U}_t}{\\overline{D}_t} \\in [0,\\infty), \\qquad RSI_t = 100 - \\frac{100}{1+RS_t} = 100\\cdot\\frac{RS_t}{1+RS_t}$$

The map is monotone, continuous and onto $[0,100)$. Equivalently:

$$RSI_t = 100 \\times \\frac{\\overline{U}_t}{\\overline{U}_t + \\overline{D}_t}$$

**Why bound it at all?** Because Chapter 35's complaint was that a MACD of 2.4 means different things on a BDT 60 and a BDT 900 stock. Here the units of $\\overline{U}$ and $\\overline{D}$ are both taka, so they cancel. **RSI is dimensionless, and dimensionless is what makes cross-sectional screening possible.**

But the bounding has a price, and it is the most under-taught fact about this indicator. Differentiate:

$$\\frac{dRSI}{dRS} = \\frac{100}{(1+RS)^2}$$

| $RS$ | $RSI$ | Sensitivity, points per unit RS |
|---|---|---|
| 0.25 | 20.00 | 64.0 |
| 1.00 | 50.00 | **25.0** |
| 2.00 | 66.67 | 11.1 |
| 4.3549 | 81.3255 | 3.49 |
| 5.3500 | 84.2520 | 2.48 |
| 7.4337 | 88.1428 | **1.41** |

**The indicator is eighteen times less sensitive at RSI 88 than at RSI 50.** Everything interesting about extremes follows from that single column. It is why the BANGLAENG circuit test loses 2.00% of price and only 0.7682 RSI points. It is why RSI in the eighties looks calm on a violently trending chart. **The scale compresses exactly where the folklore tells you to act on it.**

### 6. Why the seed's error decays, and how slowly

Subtract two runs of the recursion that differ only in the seed. The recursion is affine, so the difference obeys:

$$e_t = \\left(\\frac{N-1}{N}\\right) e_{t-1} \\;\\Rightarrow\\; e_{t+k} = \\left(\\frac{13}{14}\\right)^{k} e_t$$

**The seed's error never vanishes; it decays geometrically.** Half-life:

$$k_{1/2} = \\frac{\\ln 0.5}{\\ln(13/14)} = \\mathbf{9.35 \\text{ bars}}, \\qquad k_{1\\%} = \\frac{\\ln 0.01}{\\ln(13/14)} = \\mathbf{62.14 \\text{ bars}}$$

Concretely, seed BANGLAENG with a badly wrong 0.60 / 0.30 instead of the correct 0.764286 / 0.142857. Day 15 reads 66.6667 against 84.2520 — a gap of **17.5853 points.** Six bars later, at day 21, it reads 70.7643 against 81.3255 — a gap of **10.5612 points**, a factor of 0.60, close to the $(13/14)^6 = 0.6410$ the algebra predicts (the small discrepancy is the nonlinearity of the RS-to-RSI map).

**Practical rule: discard the first 30 bars of any RSI series you compute — at 30 bars, 10.8% of the seed error survives — and do not compare platforms inside 60 bars of a common start date.** A backtest that begins its RSI on bar 15 is measuring its own initialisation for the first two months.

### 7. Why "overbought" is not a sell — derived, not asserted

Write RSI in its share form and the argument is immediate:

$$RSI_t \\ge 70 \\iff \\frac{\\overline{U}_t}{\\overline{U}_t + \\overline{D}_t} \\ge 0.70 \\iff \\overline{U}_t \\ge \\tfrac{7}{3}\\,\\overline{D}_t$$

**RSI above 70 is exactly the statement that smoothed up-pressure is at least 2.33 times smoothed down-pressure.** Now read that back as a definition. *That is what a trend is.* A market in which buying pressure exceeds selling pressure by more than two to one is not an anomaly requiring correction; it is a trend doing the only thing trends do.

So the rule "sell when $\\overline{U} \\ge 2.33\\,\\overline{D}$" is, translated honestly, **"sell whenever a trend exists."** On BANGLAENG it fires on 7 of 7 computable bars. In §36.8's longer 71-bar series it fires on 26 of 57, **45.6%.** A signal that is on for nearly half of all bars is not a signal; it is a description of the weather.

And there is an asymmetry that makes it worse. Under the same rule, the re-entry condition $RSI \\le 30$ requires $\\overline{U} \\le 0.4286\\,\\overline{D}$. From BANGLAENG's day-21 state, at a steady BDT 0.50 of decline per session, that takes **twenty consecutive down closes** (RSI 29.46), and even RSI 40 takes **fifteen** (39.58). **The rule sells early and buys back never.**

### 8. Range shift, which is the actual information

The useful reading is not a level but a *conditional distribution* — where RSI travels, and which band it refuses to break.

$$\\text{Bull regime: } RSI \\in [40,\\, 80\\text{–}90], \\quad \\text{support at } [40,50]$$
$$\\text{Bear regime: } RSI \\in [10\\text{–}20,\\, 60], \\quad \\text{resistance at } [50,60]$$

**The event worth trading is the regime change, not the excursion.** In a bull range, the first close below 40 is the signal, because it says the pullbacks have stopped holding where they used to hold. In a bear range, a rally that clears 60 and holds says the same thing in reverse.

Why is this better? Because it is a statement about *stationarity of a distribution*, which is a claim that can be falsified, rather than a statement about a fixed number, which cannot. **The 70 line is a property of the indicator's scale. The 40 floor is a property of this market, discovered from this data, and it changes when the market changes.** That is the difference between a constant and a measurement.

On BANGLAENG the range rule fires zero times across the whole 24.9% advance, which is the correct answer. On §36.8's longer series the two rules produce **−BDT 3.60 for sell-at-70 and +BDT 2.30 for the range rule per share.** The naive rule does not merely underperform — it loses money where the other makes some.

### 9. The DSE censoring, which precedes everything above

$$\\Delta_t^{\\text{obs}} = \\operatorname{clip}\\!\\big(\\Delta_t^{\\text{true}},\\; -bC_{t-1},\\; +bC_{t-1}\\big), \\qquad b = 0.10$$

| Distortion | What it does to RSI | Correct handling |
|---|---|---|
| **Limit-up / limit-down session** | Input truncated. Because of §36.4.5's compression, a 2.00% price truncation moves RSI by **0.7682 points.** RSI will not tell you it happened. | Flag the bar. Read ATR (Ch 39) and volume (Ch 40) for the real story. |
| **Limit-locked on negligible volume** | If the print is unchanged, $U_t = D_t = 0$ and both averages scale by $13/14$, so **RS and RSI are exactly unchanged** — but one bar of effective memory is consumed for nothing. | Forward-fill (which by the algebra leaves RSI untouched) or exclude the bar. Never treat it as a real close. |
| **Floor-price flatline** | Weeks of $\\Delta_t = 0$. RSI freezes at its last value and, once the window contains nothing but zeros, $0/0$ — platforms variously return 50, 100 or the previous value. **A frozen 79.64 is not strength.** | Exclude the entire administered period, using Chapter 26's flag column. |
| **Thin free float** | One institutional ticket produces a close that no crowd agreed on, and RSI cannot distinguish it from consensus. | Require a liquidity floor before the reading counts. |
| **No short side** | Every classical "overbought" conclusion in the literature assumes you can sell short. | An extreme reading is an **exit or a do-not-buy**, never a short. |

**The last row is not a footnote.** Half of the received wisdom about oscillators was written for markets with a functioning borrow. Import the conclusion without importing the assumption and you will hold a correct analysis and no executable action.`,
      bn: `### ১. পরিবর্তন, এবং কেবল ক্লোজ কেন

$$\\Delta_t = C_t - C_{t-1}$$

**Wilder ইচ্ছাকৃতভাবে হাই, লো, ওপেন, গ্যাপ ও ভলিউম ফেলে দেন।** এটি প্রকৃত ক্ষতি — অধ্যায় ৪০ দেখাবে ডিএসই-তে ভলিউম কত তথ্য বহন করে — আর এতে একটি জিনিস মেলে: চরম থেকে বহু দূরে বন্ধ হওয়া কোনো ইন্ট্রাডে স্পাইক দিয়ে নির্দেশকটিকে ঠকানো যায় না। যে শেয়ার ৬২.০০ পর্যন্ত লেনদেন হয়ে ৫৮.৭০-এ বন্ধ হয় তা ২.৬০ লাভ নয়, ০.৭০ *ক্ষতি* অবদান রাখে। একে দৃঢ়তা বলবেন না অন্ধত্ব — এটিই সৎ বিতর্ক, আর তা আপনার বাজারের ওপর নির্ভর করে। পাতলা ডিএসই কাউন্টারে যেখানে একটি অর্ডার ২০০ শেয়ারে উদ্ভট হাই ছাপতে পারে, **কেবল-ক্লোজ রক্ষণশীল পছন্দ এবং সঠিক পছন্দ।**

### ২. দুটি অ-ঋণাত্মক ধারায় পৃথকীকরণ

$$U_t = \\max(\\Delta_t,\\,0), \\qquad D_t = \\max(-\\Delta_t,\\,0)$$

প্রতিটি $t$-এর জন্য অভেদ $U_t \\cdot D_t = 0$ লক্ষ করুন: **দুটির ঠিক একটি অশূন্য, নয়তো দুটিই শূন্য।** এটিই RSI-কে এতদিনে দেখা প্রতিটি চলমান গড় থেকে আলাদা করে।

চিহ্নযুক্ত পরিবর্তনের চলমান গড় একটি +১.৫০ দিনকে একটি −১.৫০ দিন কাটতে দিয়ে শূন্য ফেরত দেয়, যা পক্ষকালব্যাপী সম্পূর্ণ নিশ্চলতা থেকে অভেদ্য। **RSI ঐ ভুল করতে পারে না**, কারণ এটি কখনো দুই ধারা যোগ করে না — ভাগ করে। চোদ্দটি হিংস্র পর্যায়ক্রমিক সেশন আর চোদ্দটি একদম সমতল সেশন দুটোই চলমান গড়ের শূন্য ঢাল দেয়; প্রথমটি বড় গড়সহ $RS = 1$ দেয়, দ্বিতীয়টি $0/0$ দেয়। একই MA পাঠ, সম্পূর্ণ ভিন্ন বাজার।

### ৩. বীজ, যার অস্তিত্ব কেবল কারণ পুনরাবৃত্তির একটি সূচনামান লাগে

$$\\overline{U}_N = \\frac{1}{N}\\sum_{t=1}^{N} U_t, \\qquad \\overline{D}_N = \\frac{1}{N}\\sum_{t=1}^{N} D_t$$

BANGLAENG-এ: $\\overline{U}_{15} = 10.70/14 = 0.764286$ এবং $\\overline{D}_{15} = 2.00/14 = 0.142857$।

**পুরো নির্মাণে এটিই একমাত্র সরল গড়, এবং এটি নির্দেশকের সংজ্ঞার অংশ নয় — এটি একটি সূচনায়ন।** এই পার্থক্যটি গুরুত্বপূর্ণ কারণ প্ল্যাটফর্মে-প্ল্যাটফর্মে অমিলের একক বৃহত্তম উৎস এটিই। কেউ ওপরের মতো সরল গড় দিয়ে বীজ দেয়। কেউ প্রথম বার থেকে চালানো EMA দিয়ে। কেউ কেবল একেবারে প্রথম পরিবর্তন দিয়ে। তিনটিই সমর্থনযোগ্য; প্রথম কয়েক ডজন বারে কোনোটিই মেলে না।

**আপনার RSI ব্রোকারের টার্মিনালের সঙ্গে না মিললে অন্য কিছু দেখার আগে বীজ দেখুন।** অমিলটি কত দ্রুত মরে তার জন্য §৩৬.৪.৬ দেখুন।

### ৪. Wilder-এর পুনরাবৃত্তি — ছদ্মবেশে একটি EMA

$$\\overline{U}_t = \\frac{(N-1)\\,\\overline{U}_{t-1} + U_t}{N} = \\overline{U}_{t-1} + \\frac{1}{N}\\big(U_t - \\overline{U}_{t-1}\\big)$$

দ্বিতীয় রূপটিই মূল কথা। **এটি $\\alpha = 1/N$ সহ একটি সূচকীয় চলমান গড়** — অধ্যায় ৩৪-এর পরিচিত সংশোধন-থেকে-পূর্বাভাস রূপ। $2/(M+1) = 1/N$ সমাধান করলে:

$$M = 2N - 1 \\;\\Rightarrow\\; N = 14 \\;\\Rightarrow\\; M = \\mathbf{27}$$

**RSI(14)-এর স্মৃতি ২৭-পর্বের EMA-র।** নাম যা বিজ্ঞাপন দেয় এটি তার প্রায় দ্বিগুণ ধীর, আর এটি কৌতূহল নয় — এ কারণেই নতুনরা যখন প্রত্যাশা করেন তখন RSI ঘুরতে গোঁয়ারের মতো অস্বীকার করে।

একই BANGLAENG উপাত্তে ২১তম দিনে "গড় লাভ" গণনার তিনটি উপায়:

| পদ্ধতি | AvgGain | AvgLoss | RSI | Wilder-এর তুলনায় |
|---|---|---|---|---|
| **Wilder, $\\alpha = 1/14$** | **০.৭৮৬০১৯** | **০.১৮০৪৯১** | **৮১.৩২৫৫** | — |
| সরল ১৪-বার গড় | ০.৮৬৪২৮৬ | ০.১৭৮৫৭১ | ৮২.৮৭৬৭ | +১.৫৫১২ |
| প্রচলিত EMA, $\\alpha = 2/15$ | — | — | ৮০.১২০৬ | −১.২০৪৯ |

**অভিন্ন উপাত্তে তিনটি "RSI(14)" মান, ২.৭৬ পয়েন্টজুড়ে বিস্তৃত।** কোনোটিই ভুল নয়; কেবল একটিই Wilder-এর। স্প্রেডশিটে এটি গড়তে গিয়ে বীজ সারির পরেও AVERAGE() ধরলে আপনি ঐ ছকের দ্বিতীয় সারিটি গড়ে তাতে প্রথমটির নাম লাগিয়েছেন।

### ৫. আপেক্ষিক শক্তি ও সীমাবদ্ধ রূপান্তর

$$RS_t = \\frac{\\overline{U}_t}{\\overline{D}_t} \\in [0,\\infty), \\qquad RSI_t = 100 - \\frac{100}{1+RS_t} = 100\\cdot\\frac{RS_t}{1+RS_t}$$

অপেক্ষকটি একঘাতী, সন্তত এবং $[0,100)$-এর ওপর আচ্ছাদক। সমতুল্যভাবে:

$$RSI_t = 100 \\times \\frac{\\overline{U}_t}{\\overline{U}_t + \\overline{D}_t}$$

**সীমাবদ্ধ করা কেন?** কারণ অধ্যায় ৩৫-এর অভিযোগ ছিল ৬০ টাকা ও ৯০০ টাকার শেয়ারে ২.৪ MACD ভিন্ন অর্থ বহন করে। এখানে $\\overline{U}$ ও $\\overline{D}$ দুটিরই একক টাকা, তাই কেটে যায়। **RSI মাত্রাহীন, আর মাত্রাহীনতাই প্রস্থচ্ছেদীয় স্ক্রিনিং সম্ভব করে।**

কিন্তু সীমাবদ্ধকরণের একটি মূল্য আছে, আর এটিই এই নির্দেশক সম্পর্কে সবচেয়ে কম শেখানো তথ্য। অন্তরকলন করুন:

$$\\frac{dRSI}{dRS} = \\frac{100}{(1+RS)^2}$$

| $RS$ | $RSI$ | সংবেদনশীলতা, প্রতি একক RS-এ পয়েন্ট |
|---|---|---|
| ০.২৫ | ২০.০০ | ৬৪.০ |
| ১.০০ | ৫০.০০ | **২৫.০** |
| ২.০০ | ৬৬.৬৭ | ১১.১ |
| ৪.৩৫৪৯ | ৮১.৩২৫৫ | ৩.৪৯ |
| ৫.৩৫০০ | ৮৪.২৫২০ | ২.৪৮ |
| ৭.৪৩৩৭ | ৮৮.১৪২৮ | **১.৪১** |

**নির্দেশকটি RSI ৫০-এর চেয়ে RSI ৮৮-এ আঠারো গুণ কম সংবেদনশীল।** চরম নিয়ে যা কিছু আকর্ষণীয় তার সবই ঐ একটি কলাম থেকে আসে। এ কারণেই BANGLAENG-এর সার্কিট পরীক্ষা দামের ২.০০% হারায় আর RSI-র মাত্র ০.৭৬৮২ পয়েন্ট। এ কারণেই তীব্র ধারার চার্টে আশির ঘরের RSI শান্ত দেখায়। **লোককথা যেখানে কাজ করতে বলে ঠিক সেখানেই মাপকাঠি সংকুচিত।**

### ৬. বীজের ত্রুটি কেন ক্ষয় হয়, আর কত ধীরে

কেবল বীজে ভিন্ন এমন দুটি পুনরাবৃত্তি বিয়োগ করুন। পুনরাবৃত্তিটি অ্যাফাইন, তাই পার্থক্য মানে:

$$e_t = \\left(\\frac{N-1}{N}\\right) e_{t-1} \\;\\Rightarrow\\; e_{t+k} = \\left(\\frac{13}{14}\\right)^{k} e_t$$

**বীজের ত্রুটি কখনো মিলিয়ে যায় না; জ্যামিতিকভাবে ক্ষয় হয়।** অর্ধায়ু:

$$k_{1/2} = \\frac{\\ln 0.5}{\\ln(13/14)} = \\mathbf{9.35 \\text{ bars}}, \\qquad k_{1\\%} = \\frac{\\ln 0.01}{\\ln(13/14)} = \\mathbf{62.14 \\text{ bars}}$$

মূর্তভাবে, BANGLAENG-কে সঠিক ০.৭৬৪২৮৬ / ০.১৪২৮৫৭-এর বদলে চরম ভুল ০.৬০ / ০.৩০ দিয়ে বীজ দিন। ১৫তম দিন ৮৪.২৫২০-এর বিপরীতে ৬৬.৬৬৬৭ পড়ে — ব্যবধান **১৭.৫৮৫৩ পয়েন্ট।** ছয় বার পরে, ২১তম দিনে, ৮১.৩২৫৫-এর বিপরীতে ৭০.৭৬৪৩ পড়ে — ব্যবধান **১০.৫৬১২ পয়েন্ট**, গুণক ০.৬০, যা বীজগণিতের পূর্বাভাস $(13/14)^6 = 0.6410$-এর কাছাকাছি (সামান্য অমিলটি RS-থেকে-RSI অপেক্ষকের অরৈখিকতা)।

**ব্যবহারিক নিয়ম: আপনার গণনা করা যেকোনো RSI ধারার প্রথম ৩০ বার ফেলে দিন — ৩০ বারে বীজ-ত্রুটির ১০.৮% টিকে থাকে — আর একটি অভিন্ন শুরুর তারিখের ৬০ বারের ভেতরে প্ল্যাটফর্ম তুলনা করবেন না।** যে ব্যাকটেস্ট ১৫তম বারে RSI শুরু করে সে প্রথম দুই মাস নিজের সূচনায়নই মাপে।

### ৭. "ওভারবট" কেন বিক্রি নয় — দাবি নয়, উদ্ভাবিত

RSI-কে তার হিস্যা-রূপে লিখুন, যুক্তিটি তৎক্ষণাৎ আসে:

$$RSI_t \\ge 70 \\iff \\frac{\\overline{U}_t}{\\overline{U}_t + \\overline{D}_t} \\ge 0.70 \\iff \\overline{U}_t \\ge \\tfrac{7}{3}\\,\\overline{D}_t$$

**RSI ৭০-এর ওপরে ঠিক এই বক্তব্য যে মসৃণকৃত ঊর্ধ্ব-চাপ মসৃণকৃত নিম্ন-চাপের অন্তত ২.৩৩ গুণ।** এবার একে সংজ্ঞা হিসেবে ফিরে পড়ুন। *ধারা বলতে তো এটিই।* যে বাজারে ক্রয়চাপ বিক্রয়চাপকে দুই-এক-এর বেশি ছাড়িয়ে যায় তা সংশোধন-প্রয়োজনীয় ব্যতিক্রম নয়; তা একটি ধারা তার একমাত্র কাজটিই করছে।

তাই "$\\overline{U} \\ge 2.33\\,\\overline{D}$ হলে বেচুন" নিয়মটি সৎভাবে অনুবাদ করলে দাঁড়ায় **"যখনই একটি ধারা আছে তখনই বেচুন।"** BANGLAENG-এ এটি গণনাযোগ্য ৭টির ৭টিতেই চালু হয়। §৩৬.৮-এর দীর্ঘতর ৭১-বারের ধারায় ৫৭টির ২৬টিতে, **৪৫.৬%।** যে সংকেত প্রায় অর্ধেক বারে চালু থাকে তা সংকেত নয়; তা আবহাওয়ার বর্ণনা।

আর একটি অসমতা একে আরও খারাপ করে। একই নিয়মে পুনঃপ্রবেশের শর্ত $RSI \\le 30$ দাবি করে $\\overline{U} \\le 0.4286\\,\\overline{D}$। BANGLAENG-এর ২১তম দিনের অবস্থা থেকে, সেশনপ্রতি স্থির ০.৫০ টাকা পতনে, তাতে লাগে **টানা কুড়িটি নিম্ন-ক্লোজ** (RSI ২৯.৪৬), আর RSI ৪০-এও লাগে **পনেরোটি** (৩৯.৫৮)। **নিয়মটি আগেভাগে বেচে আর কখনো ফিরে কেনে না।**

### ৮. রেঞ্জ স্থানান্তর, যা প্রকৃত তথ্য

কাজের পাঠটি কোনো স্তর নয়, একটি *শর্তাধীন বণ্টন* — RSI কোথায় ঘোরে, আর কোন ব্যান্ড ভাঙতে অস্বীকার করে।

$$\\text{Bull regime: } RSI \\in [40,\\, 80\\text{–}90], \\quad \\text{support at } [40,50]$$
$$\\text{Bear regime: } RSI \\in [10\\text{–}20,\\, 60], \\quad \\text{resistance at } [50,60]$$

**যে ঘটনাটি ব্যবসার যোগ্য তা ধরন-পরিবর্তন, ভ্রমণ নয়।** bull range-এ ৪০-এর নিচে প্রথম ক্লোজই সংকেত, কারণ তা বলে পুলব্যাকগুলো যেখানে টিকত সেখানে আর টিকছে না। bear range-এ ৬০ পেরিয়ে টিকে থাকা একটি র‍্যালি উল্টোভাবে একই কথা বলে।

এটি ভালো কেন? কারণ এটি একটি *বণ্টনের স্থিতিশীলতা* সম্পর্কে বক্তব্য, যা মিথ্যা প্রমাণ করা যায়, একটি স্থির সংখ্যা সম্পর্কে বক্তব্য নয়, যা যায় না। **৭০ রেখাটি নির্দেশকের মাপকাঠির ধর্ম। ৪০ মেঝেটি এই বাজারের ধর্ম, এই উপাত্ত থেকে আবিষ্কৃত, আর বাজার বদলালে তা বদলায়।** ধ্রুবক ও পরিমাপের পার্থক্য এটিই।

BANGLAENG-এ রেঞ্জ নিয়ম পুরো ২৪.৯% উত্থানজুড়ে শূন্যবার চালু হয়, যা সঠিক উত্তর। §৩৬.৮-এর দীর্ঘতর ধারায় দুই নিয়ম শেয়ারপ্রতি **৭০-এ-বিক্রিতে −৩.৬০ টাকা আর রেঞ্জ নিয়মে +২.৩০ টাকা** দেয়। সরল নিয়মটি কেবল কম ফল দেয় না — যেখানে অন্যটি কিছু আয় করে সেখানে এটি টাকা হারায়।

### ৯. ডিএসই সেন্সরিং, যা ওপরের সবকিছুর আগে আসে

$$\\Delta_t^{\\text{obs}} = \\operatorname{clip}\\!\\big(\\Delta_t^{\\text{true}},\\; -bC_{t-1},\\; +bC_{t-1}\\big), \\qquad b = 0.10$$

| বিকৃতি | RSI-র কী করে | সঠিক ব্যবস্থা |
|---|---|---|
| **limit-up / limit-down সেশন** | উপাদান ছেঁটে যায়। §৩৬.৪.৫-এর সংকোচনের কারণে ২.০০% দামের ছাঁট RSI-কে নাড়ায় **০.৭৬৮২ পয়েন্ট।** RSI আপনাকে বলবে না যে এটি ঘটেছে। | বারটি চিহ্নিত করুন। প্রকৃত গল্পের জন্য ATR (অধ্যায় ৩৯) ও ভলিউম (অধ্যায় ৪০) পড়ুন। |
| **নগণ্য ভলিউমে limit-locked** | প্রিন্ট অপরিবর্তিত হলে $U_t = D_t = 0$ এবং দুটি গড়ই $13/14$ গুণক পায়, তাই **RS ও RSI ঠিক অপরিবর্তিত** — কিন্তু কার্যকর স্মৃতির একটি বার কিছুই না পেয়ে খরচ হয়। | forward-fill করুন (বীজগণিত অনুযায়ী যা RSI-কে অস্পর্শ রাখে) বা বারটি বাদ দিন। কখনো একে প্রকৃত ক্লোজ ভাববেন না। |
| **ফ্লোর-প্রাইস সমতলরেখা** | সপ্তাহের পর সপ্তাহ $\\Delta_t = 0$। RSI তার শেষ মানে জমে যায়, আর জানালায় কেবল শূন্য থাকলে $0/0$ — প্ল্যাটফর্মভেদে ৫০, ১০০ বা আগের মান ফেরত আসে। **জমে থাকা ৭৯.৬৪ শক্তি নয়।** | অধ্যায় ২৬-এর ফ্ল্যাগ কলাম দিয়ে পুরো প্রশাসিত সময়কাল বাদ দিন। |
| **পাতলা ফ্রি ফ্লোট** | একটি প্রাতিষ্ঠানিক টিকিট এমন ক্লোজ তৈরি করে যাতে কোনো ভিড় সম্মত হয়নি, আর RSI একে ঐকমত্য থেকে আলাদা করতে পারে না। | পাঠটি গণ্য হওয়ার আগে একটি তারল্য-মেঝে দাবি করুন। |
| **শর্ট দিক নেই** | সাহিত্যের প্রতিটি চিরায়ত "ওভারবট" সিদ্ধান্ত ধরে নেয় আপনি শর্ট বেচতে পারেন। | চরম পাঠ একটি **প্রস্থান বা কেনা-নয়**, কখনো শর্ট নয়। |

**শেষ সারিটি পাদটীকা নয়।** অসিলেটর সম্পর্কে প্রাপ্ত জ্ঞানের অর্ধেক লেখা হয়েছে কার্যকর ধার-ব্যবস্থার বাজারের জন্য। অনুমানটি আমদানি না করে সিদ্ধান্তটি আমদানি করুন, আর আপনার হাতে থাকবে একটি সঠিক বিশ্লেষণ ও কোনো কার্যকর পদক্ষেপ নয়।`,
    },

    manual: {
      en: `**Scenario.** BANGLAENG from §36.3, twenty-one closes, $N = 14$ (cell B2), circuit band 10% (cell B3). Every figure below reconciles cell-for-cell with the §36.6 sheet. Work it once by hand before you ever trust a platform's number.

**Step 1 — Lay out the closes and take first differences.** Column B holds the closes; C7 onward holds \`B7-B6\` and so on:

$$\\Delta = +0.70,\\; +0.70,\\; -0.50,\\; +1.20,\\; +0.80,\\; -0.50,\\; +1.40,\\; +0.80,\\; -0.50,\\; +1.60,\\; +0.80,\\; -0.50,\\; +1.40,\\; +1.30$$

That is fourteen changes from fifteen closes. **Fifteen closes give you your first RSI, not fourteen** — a fencepost error that costs a bar and shifts every subsequent value.

**Step 2 — Split each change into a gain and a loss.** D = \`MAX(C,0)\`, E = \`MAX(-C,0)\`.

$$U: 0.70,\\, 0.70,\\, 0,\\, 1.20,\\, 0.80,\\, 0,\\, 1.40,\\, 0.80,\\, 0,\\, 1.60,\\, 0.80,\\, 0,\\, 1.40,\\, 1.30$$
$$D: 0,\\, 0,\\, 0.50,\\, 0,\\, 0,\\, 0.50,\\, 0,\\, 0,\\, 0.50,\\, 0,\\, 0,\\, 0.50,\\, 0,\\, 0$$

**Losses are recorded positive.** Write −0.50 into the loss column and your average loss goes negative, RS goes negative, and RSI prints above 100 or below 0 — the single most common build error and, mercifully, one that announces itself.

**Step 3 — Sum each stream over the seed window.**

$$\\sum U = 0.70+0.70+1.20+0.80+1.40+0.80+1.60+0.80+1.40+1.30 = \\mathbf{10.70}$$
$$\\sum D = 0.50 \\times 4 = \\mathbf{2.00}$$

Ten up days, four down days. The up days averaged $10.70/10 = 1.07$; the down days averaged $0.50$. **The buyers won ten of fourteen rounds and won them twice as hard** — hold that sentence, because everything the indicator says next is a restatement of it.

**Step 4 — The seed (row 20, cells F20 and G20).** \`AVERAGE(D7:D20)\` and \`AVERAGE(E7:E20)\`:

$$\\overline{U}_{15} = \\frac{10.70}{14} = \\mathbf{0.764286}, \\qquad \\overline{D}_{15} = \\frac{2.00}{14} = \\mathbf{0.142857}$$

**Note the divisor is 14 in both, not 10 and 4.** Dividing gains by the number of up days and losses by the number of down days is a real and popular error; it turns the ratio of *pressures* into a ratio of *average move sizes*, which would give $1.07/0.50 = 2.14$ and an RSI of 68.15 — below 70, and a completely different chapter.

**Step 5 — First RS and first RSI (H20, I20).**

$$RS_{15} = \\frac{0.764286}{0.142857} = \\frac{10.70}{2.00} = \\mathbf{5.3500}$$
$$RSI_{15} = 100 - \\frac{100}{1 + 5.3500} = 100 - \\frac{100}{6.3500} = 100 - 15.7480 = \\mathbf{84.2520}$$

**Stop here and look at what just happened.** The first number this indicator was capable of producing is 84.25. There was no crossing to observe. Anyone running "sell above 70" sold on the first bar of the series.

**Step 6 — Switch to Wilder's recursion for every bar after the seed (F21 onward).** The sheet's formula is \`(F20*($B$2-1)+D21)/$B$2\`:

$$\\overline{U}_{16} = \\frac{0.764286 \\times 13 + 0.70}{14} = \\frac{9.935714 + 0.70}{14} = \\frac{10.635714}{14} = \\mathbf{0.759694}$$
$$\\overline{D}_{16} = \\frac{0.142857 \\times 13 + 0}{14} = \\frac{1.857143}{14} = \\mathbf{0.132653}$$

**Do not use AVERAGE() here.** This is the step that separates a correct RSI from a lookalike. The simple 14-bar average over the same window would give 0.864286 / 0.178571 — see Step 14 for what that costs.

$$RS_{16} = \\frac{0.759694}{0.132653} = 5.7269 \\;\\Rightarrow\\; RSI_{16} = 100 - \\frac{100}{6.7269} = \\mathbf{85.1344}$$

**Step 7 — Day 17, the first down close after the seed.** $\\Delta = 56.80 - 57.60 = -0.80$, so $U = 0$, $D = 0.80$.

$$\\overline{U}_{17} = \\frac{0.759694 \\times 13 + 0}{14} = \\frac{9.876020}{14} = 0.705430$$
$$\\overline{D}_{17} = \\frac{0.132653 \\times 13 + 0.80}{14} = \\frac{1.724490 + 0.80}{14} = \\frac{2.524490}{14} = 0.180321$$
$$RS = 3.9121 \\;\\Rightarrow\\; RSI_{17} = \\mathbf{79.6420}$$

**A BDT 0.80 down day — the largest single decline in the sample — moved RSI by 5.49 points and left it at 79.64.** It did not come close to 70, let alone 30. This is §36.4.5's compression in action: up in the eighties the scale is squeezed, so a genuinely bad session barely registers.

**Step 8 — Days 18 through 21, same recursion.**

| Day | Δ | $U$ | $D$ | $\\overline{U}$ | $\\overline{D}$ | $RS$ | $RSI$ |
|---|---|---|---|---|---|---|---|
| 18 | +1.30 | 1.30 | 0 | 0.747899 | 0.167441 | 4.4667 | 81.7073 |
| 19 | +1.30 | 1.30 | 0 | 0.787335 | 0.155481 | 5.0639 | 83.5089 |
| 20 | −0.70 | 0 | 0.70 | 0.731097 | 0.194375 | 3.7613 | **78.9972** |
| 21 | +1.50 | 1.50 | 0 | **0.786019** | **0.180491** | 4.3549 | **81.3255** |

Verify day 21 by hand, because it is the state every later calculation runs from:

$$\\overline{U}_{21} = \\frac{0.731097 \\times 13 + 1.50}{14} = \\frac{9.504261 + 1.50}{14} = \\frac{11.004261}{14} = 0.786019$$
$$\\overline{D}_{21} = \\frac{0.194375 \\times 13 + 0}{14} = \\frac{2.526875}{14} = 0.180491$$
$$RSI_{21} = 100 - \\frac{100}{1 + 4.3549} = \\mathbf{81.3255}$$

**Step 9 — Count what the 70 line did (cells B29 to B33).**

$$\\text{Bars computed} = 7, \\qquad \\text{Bars} \\ge 70 = 7, \\qquad \\text{Share} = \\frac{7}{7} \\times 100 = \\mathbf{100.00\\%}$$
$$\\max RSI = 85.1344, \\qquad \\min RSI = \\mathbf{78.9972}$$

**Every single computable bar was "overbought", and the weakest of them was 78.9972.** A condition that holds on 100% of your observations carries exactly zero bits of information about which observation to act on.

**Step 10 — Price the folklore (B34 to B37).**

$$\\text{Sold at } 56.90, \\qquad \\text{Sample ended at } 60.20$$
$$\\text{Surrendered} = 60.20 - 56.90 = \\mathbf{BDT\\ 3.30}$$
$$\\frac{3.30}{56.90} \\times 100 = \\mathbf{5.7996\\%} \\text{ of the exit price}$$

**BDT 3.30 a share in six sessions, given up for a rule that fired on the first bar it could.** And the re-entry never arrives: from day 21's averages, a steady BDT 0.50 of daily decline needs **fifteen consecutive down closes to reach RSI 39.58** and **twenty to reach 29.46.**

**Step 11 — The circuit-limit stress test (B40 to B46).** Day 22 would close +12% in a free market; the band permits +10%.

$$\\text{Free} = 60.20 \\times 1.12 = \\mathbf{67.4240}, \\qquad \\text{Capped} = 60.20 \\times 1.10 = \\mathbf{66.2200}$$
$$\\text{Truncated} = 67.4240 - 66.2200 = \\mathbf{1.2040} = \\frac{1.2040}{60.20} \\times 100 = \\mathbf{2.0000\\%}$$

**Step 12 — Run both closes through one more recursion step from day 21.**

Capped, gain $= 66.2200 - 60.20 = 6.02$:
$$\\overline{U} = \\frac{0.786019 \\times 13 + 6.02}{14} = \\frac{10.218247 + 6.02}{14} = 1.159875$$
$$\\overline{D} = \\frac{0.180491 \\times 13}{14} = \\frac{2.346383}{14} = 0.167599$$
$$RS = 6.9206 \\;\\Rightarrow\\; RSI = \\mathbf{87.3746}$$

Free, gain $= 67.4240 - 60.20 = 7.2240$:
$$\\overline{U} = \\frac{10.218247 + 7.2240}{14} = \\frac{17.442247}{14} = 1.245875, \\qquad \\overline{D} = 0.167599$$
$$RS = 7.4337 \\;\\Rightarrow\\; RSI = \\mathbf{88.1428}$$

$$\\boxed{\\;\\text{RSI understated by } 88.1428 - 87.3746 = \\mathbf{0.7682}\\text{ points}\\;}$$

**Step 13 — Read those two numbers against each other, because this is the DSE lesson of the chapter.**

| | Price | RSI |
|---|---|---|
| Free market | 67.4240 | 88.1428 |
| Circuit-capped | 66.2200 | 87.3746 |
| **Difference** | **2.0000% of the close** | **0.7682 points** |

**The circuit took two percent of your return and the indicator recorded three-quarters of a point.** Check it against the sensitivity table: at $RS \\approx 7$, $dRSI/dRS \\approx 100/8.43^2 = 1.41$ points per unit of RS, and the RS gap is $7.4337 - 6.9206 = 0.5131$. Multiply: $0.5131 \\times 1.50 \\approx 0.77$. **The arithmetic is not mysterious; it is the compression, and it means RSI is structurally blind to exactly the sessions that matter most on this exchange.**

**Step 14 — Now build it wrong three ways, and price each error.** Same twenty-one closes, day 21:

| Build | AvgGain | AvgLoss | RSI at day 21 | Error |
|---|---|---|---|---|
| **Wilder (correct)** | **0.786019** | **0.180491** | **81.3255** | — |
| \`AVERAGE()\` past the seed | 0.864286 | 0.178571 | 82.8767 | **+1.5512** |
| EMA with $\\alpha = 2/15$ | — | — | 80.1206 | **−1.2049** |
| Divide by up-days / down-days | 1.070000 | 0.500000 | 68.1529 | **−13.1726** |

**That last row is the interesting one.** Dividing gains by the ten up days and losses by the four down days produces 68.15 — *below 70* — so the same data, built with one plausible-looking mistake, produces a chart on which the folklore rule never fires at all. **Two builders, one dataset, opposite conclusions, and neither would ever discover the disagreement without doing Step 4 by hand.**

**Step 15 — Discard the warm-up, and know how much to discard.** Seed the same series wrongly at 0.60 / 0.30:

$$RSI_{15} = 66.6667 \\text{ vs } 84.2520 \\;\\Rightarrow\\; \\text{gap } 17.5853$$
$$RSI_{21} = 70.7643 \\text{ vs } 81.3255 \\;\\Rightarrow\\; \\text{gap } 10.5612$$

Six bars of recursion cut the error to 60% of itself, against the $(13/14)^6 = 0.6410$ the algebra predicts. **Half-life 9.35 bars; 1% of the error survives to bar 62.** Discard the first 30 bars of any RSI series before you draw a conclusion from it.

**Step 16 — Read the verdict (B48), and notice it is not a level.** The sheet returns:

> **RSI held above 70 for most of the sample — 70 is a trend-character reading, not a sell signal.**

It fires because B31 is 100.00%, well past the 50% threshold. **The sheet is deliberately built to make the folklore refute itself on your own data**, which is more persuasive than any argument in §36.1. Run it on three DSE names you actually hold and the 70 rule will not survive the week.

**Step 17 — State the DSE caveat the sheet cannot compute.** The Zone column returns BULL RANGE on all seven bars, and the honest reading is: hold until RSI closes below 40. But:

- If any of those closes printed at a circuit limit, **column J flags it and the RSI on that bar is fiction of a known direction** — understated on a limit-up, overstated on a limit-down.
- If any printed during a floor-price stretch, the change is zero, RS is unchanged, and **the bar consumed one-fourteenth of the window while contributing nothing.**
- And because there is no reliable short side here, even a genuine extreme resolves to **sell what you own or stand aside — never a short.**

**Compute the reading, then compute how much of it the exchange manufactured.** The second number is not on the sheet and it is the one that decides whether the first is worth acting on.`,
      bn: `**পরিস্থিতি।** §৩৬.৩-এর BANGLAENG, একুশটি ক্লোজ, $N = 14$ (কোষ B2), সার্কিট ব্যান্ড ১০% (কোষ B3)। নিচের প্রতিটি সংখ্যা §৩৬.৬-এর শিটের সঙ্গে কোষে-কোষে মেলে। কোনো প্ল্যাটফর্মের সংখ্যায় ভরসা করার আগে একবার হাতে করুন।

**ধাপ ১ — ক্লোজ সাজান ও প্রথম পার্থক্য নিন।** B কলামে ক্লোজ; C7 থেকে \`B7-B6\` ইত্যাদি:

$$\\Delta = +0.70,\\; +0.70,\\; -0.50,\\; +1.20,\\; +0.80,\\; -0.50,\\; +1.40,\\; +0.80,\\; -0.50,\\; +1.60,\\; +0.80,\\; -0.50,\\; +1.40,\\; +1.30$$

পনেরোটি ক্লোজ থেকে চোদ্দটি পরিবর্তন। **পনেরোটি ক্লোজ আপনাকে প্রথম RSI দেয়, চোদ্দটি নয়** — এই বেড়া-খুঁটির ভুল একটি বার খায় এবং পরবর্তী প্রতিটি মান সরিয়ে দেয়।

**ধাপ ২ — প্রতিটি পরিবর্তনকে লাভ ও ক্ষতিতে ভাগ করুন।** D = \`MAX(C,0)\`, E = \`MAX(-C,0)\`।

$$U: 0.70,\\, 0.70,\\, 0,\\, 1.20,\\, 0.80,\\, 0,\\, 1.40,\\, 0.80,\\, 0,\\, 1.60,\\, 0.80,\\, 0,\\, 1.40,\\, 1.30$$
$$D: 0,\\, 0,\\, 0.50,\\, 0,\\, 0,\\, 0.50,\\, 0,\\, 0,\\, 0.50,\\, 0,\\, 0,\\, 0.50,\\, 0,\\, 0$$

**ক্ষতি ধনাত্মক হিসেবে লিপিবদ্ধ হয়।** ক্ষতির কলামে −০.৫০ লিখুন, আর আপনার গড় ক্ষতি ঋণাত্মক হবে, RS ঋণাত্মক হবে, আর RSI ১০০-এর ওপরে বা ০-এর নিচে ছাপবে — সবচেয়ে সাধারণ নির্মাণ-ভুল, এবং সৌভাগ্যবশত এমন একটি যা নিজেই নিজের ঘোষণা দেয়।

**ধাপ ৩ — বীজ-জানালায় প্রতিটি ধারার যোগফল।**

$$\\sum U = 0.70+0.70+1.20+0.80+1.40+0.80+1.60+0.80+1.40+1.30 = \\mathbf{10.70}$$
$$\\sum D = 0.50 \\times 4 = \\mathbf{2.00}$$

দশটি ঊর্ধ্বদিন, চারটি নিম্নদিন। ঊর্ধ্বদিনের গড় $10.70/10 = 1.07$; নিম্নদিনের গড় $0.50$। **ক্রেতারা চোদ্দটির দশটি রাউন্ড জিতেছেন এবং দ্বিগুণ জোরে জিতেছেন** — বাক্যটি ধরে রাখুন, কারণ নির্দেশক এরপর যা বলে সবই এর পুনর্কথন।

**ধাপ ৪ — বীজ (সারি ২০, কোষ F20 ও G20)।** \`AVERAGE(D7:D20)\` ও \`AVERAGE(E7:E20)\`:

$$\\overline{U}_{15} = \\frac{10.70}{14} = \\mathbf{0.764286}, \\qquad \\overline{D}_{15} = \\frac{2.00}{14} = \\mathbf{0.142857}$$

**লক্ষ করুন দুটিতেই ভাজক ১৪, ১০ ও ৪ নয়।** লাভকে ঊর্ধ্বদিনের সংখ্যা ও ক্ষতিকে নিম্নদিনের সংখ্যা দিয়ে ভাগ করা একটি প্রকৃত ও জনপ্রিয় ভুল; এটি *চাপের* অনুপাতকে *গড় চালের আকারের* অনুপাতে পরিণত করে, যা দিত $1.07/0.50 = 2.14$ আর RSI ৬৮.১৫ — ৭০-এর নিচে, এবং সম্পূর্ণ ভিন্ন এক অধ্যায়।

**ধাপ ৫ — প্রথম RS ও প্রথম RSI (H20, I20)।**

$$RS_{15} = \\frac{0.764286}{0.142857} = \\frac{10.70}{2.00} = \\mathbf{5.3500}$$
$$RSI_{15} = 100 - \\frac{100}{1 + 5.3500} = 100 - \\frac{100}{6.3500} = 100 - 15.7480 = \\mathbf{84.2520}$$

**এখানে থামুন এবং দেখুন কী ঘটল।** এই নির্দেশক যে প্রথম সংখ্যাটি তৈরি করতে সক্ষম ছিল তা ৮৪.২৫। দেখার মতো কোনো অতিক্রম ছিল না। যিনি "৭০-এর ওপরে বিক্রি" চালাচ্ছিলেন তিনি ধারার প্রথম বারেই বেচলেন।

**ধাপ ৬ — বীজের পরের প্রতিটি বারে Wilder-এর পুনরাবৃত্তিতে যান (F21 থেকে)।** শিটের সূত্র \`(F20*($B$2-1)+D21)/$B$2\`:

$$\\overline{U}_{16} = \\frac{0.764286 \\times 13 + 0.70}{14} = \\frac{9.935714 + 0.70}{14} = \\frac{10.635714}{14} = \\mathbf{0.759694}$$
$$\\overline{D}_{16} = \\frac{0.142857 \\times 13 + 0}{14} = \\frac{1.857143}{14} = \\mathbf{0.132653}$$

**এখানে AVERAGE() ব্যবহার করবেন না।** এই ধাপটিই সঠিক RSI-কে তার নকল থেকে আলাদা করে। একই জানালায় সরল ১৪-বার গড় দিত ০.৮৬৪২৮৬ / ০.১৭৮৫৭১ — তার খরচ ধাপ ১৪-এ দেখুন।

$$RS_{16} = \\frac{0.759694}{0.132653} = 5.7269 \\;\\Rightarrow\\; RSI_{16} = 100 - \\frac{100}{6.7269} = \\mathbf{85.1344}$$

**ধাপ ৭ — ১৭তম দিন, বীজের পরে প্রথম নিম্ন-ক্লোজ।** $\\Delta = 56.80 - 57.60 = -0.80$, তাই $U = 0$, $D = 0.80$।

$$\\overline{U}_{17} = \\frac{0.759694 \\times 13 + 0}{14} = \\frac{9.876020}{14} = 0.705430$$
$$\\overline{D}_{17} = \\frac{0.132653 \\times 13 + 0.80}{14} = \\frac{1.724490 + 0.80}{14} = \\frac{2.524490}{14} = 0.180321$$
$$RS = 3.9121 \\;\\Rightarrow\\; RSI_{17} = \\mathbf{79.6420}$$

**০.৮০ টাকার একটি নিম্নদিন — নমুনার একক বৃহত্তম পতন — RSI-কে ৫.৪৯ পয়েন্ট নাড়িয়ে ৭৯.৬৪-এ রেখে গেল।** এটি ৭০-এর কাছেও যায়নি, ৩০ তো দূরের কথা। এটিই §৩৬.৪.৫-এর সংকোচন কাজে: আশির ঘরে মাপকাঠি চেপে থাকে, তাই সত্যিকারের খারাপ একটি সেশনও সামান্যই ধরা পড়ে।

**ধাপ ৮ — ১৮ থেকে ২১, একই পুনরাবৃত্তি।**

| দিন | Δ | $U$ | $D$ | $\\overline{U}$ | $\\overline{D}$ | $RS$ | $RSI$ |
|---|---|---|---|---|---|---|---|
| ১৮ | +১.৩০ | ১.৩০ | ০ | ০.৭৪৭৮৯৯ | ০.১৬৭৪৪১ | ৪.৪৬৬৭ | ৮১.৭০৭৩ |
| ১৯ | +১.৩০ | ১.৩০ | ০ | ০.৭৮৭৩৩৫ | ০.১৫৫৪৮১ | ৫.০৬৩৯ | ৮৩.৫০৮৯ |
| ২০ | −০.৭০ | ০ | ০.৭০ | ০.৭৩১০৯৭ | ০.১৯৪৩৭৫ | ৩.৭৬১৩ | **৭৮.৯৯৭২** |
| ২১ | +১.৫০ | ১.৫০ | ০ | **০.৭৮৬০১৯** | **০.১৮০৪৯১** | ৪.৩৫৪৯ | **৮১.৩২৫৫** |

২১তম দিন হাতে যাচাই করুন, কারণ পরবর্তী প্রতিটি গণনা এই অবস্থা থেকে চলে:

$$\\overline{U}_{21} = \\frac{0.731097 \\times 13 + 1.50}{14} = \\frac{9.504261 + 1.50}{14} = \\frac{11.004261}{14} = 0.786019$$
$$\\overline{D}_{21} = \\frac{0.194375 \\times 13 + 0}{14} = \\frac{2.526875}{14} = 0.180491$$
$$RSI_{21} = 100 - \\frac{100}{1 + 4.3549} = \\mathbf{81.3255}$$

**ধাপ ৯ — ৭০ রেখা কী করল গুনুন (কোষ B29 থেকে B33)।**

$$\\text{Bars computed} = 7, \\qquad \\text{Bars} \\ge 70 = 7, \\qquad \\text{Share} = \\frac{7}{7} \\times 100 = \\mathbf{100.00\\%}$$
$$\\max RSI = 85.1344, \\qquad \\min RSI = \\mathbf{78.9972}$$

**প্রতিটি গণনাযোগ্য বারই "ওভারবট" ছিল, আর তাদের দুর্বলতমটি ৭৮.৯৯৭২।** যে শর্ত আপনার পর্যবেক্ষণের ১০০%-এ খাটে তা কোন পর্যবেক্ষণে কাজ করবেন সে বিষয়ে ঠিক শূন্য বিট তথ্য বহন করে।

**ধাপ ১০ — লোককথার দাম হিসাব করুন (B34 থেকে B37)।**

$$\\text{Sold at } 56.90, \\qquad \\text{Sample ended at } 60.20$$
$$\\text{Surrendered} = 60.20 - 56.90 = \\mathbf{BDT\\ 3.30}$$
$$\\frac{3.30}{56.90} \\times 100 = \\mathbf{5.7996\\%} \\text{ of the exit price}$$

**ছয় সেশনে শেয়ারপ্রতি ৩.৩০ টাকা, ছেড়ে দেওয়া হলো এমন এক নিয়মের জন্য যা যত তাড়াতাড়ি সম্ভব প্রথম বারেই চালু হয়েছিল।** আর পুনঃপ্রবেশ কখনো আসে না: ২১তম দিনের গড় থেকে, দৈনিক স্থির ০.৫০ টাকা পতনে **RSI ৩৯.৫৮-এ পৌঁছাতে টানা পনেরোটি নিম্ন-ক্লোজ** আর **২৯.৪৬-এ পৌঁছাতে কুড়িটি** লাগে।

**ধাপ ১১ — সার্কিট-সীমার চাপ পরীক্ষা (B40 থেকে B46)।** মুক্ত বাজারে ২২তম দিন +১২% বন্ধ হতো; ব্যান্ড দেয় +১০%।

$$\\text{Free} = 60.20 \\times 1.12 = \\mathbf{67.4240}, \\qquad \\text{Capped} = 60.20 \\times 1.10 = \\mathbf{66.2200}$$
$$\\text{Truncated} = 67.4240 - 66.2200 = \\mathbf{1.2040} = \\frac{1.2040}{60.20} \\times 100 = \\mathbf{2.0000\\%}$$

**ধাপ ১২ — ২১তম দিন থেকে দুটি ক্লোজকেই আর এক ধাপ পুনরাবৃত্তিতে চালান।**

সীমাবদ্ধ, লাভ $= 66.2200 - 60.20 = 6.02$:
$$\\overline{U} = \\frac{0.786019 \\times 13 + 6.02}{14} = \\frac{10.218247 + 6.02}{14} = 1.159875$$
$$\\overline{D} = \\frac{0.180491 \\times 13}{14} = \\frac{2.346383}{14} = 0.167599$$
$$RS = 6.9206 \\;\\Rightarrow\\; RSI = \\mathbf{87.3746}$$

মুক্ত, লাভ $= 67.4240 - 60.20 = 7.2240$:
$$\\overline{U} = \\frac{10.218247 + 7.2240}{14} = \\frac{17.442247}{14} = 1.245875, \\qquad \\overline{D} = 0.167599$$
$$RS = 7.4337 \\;\\Rightarrow\\; RSI = \\mathbf{88.1428}$$

$$\\boxed{\\;\\text{RSI understated by } 88.1428 - 87.3746 = \\mathbf{0.7682}\\text{ points}\\;}$$

**ধাপ ১৩ — ঐ দুটি সংখ্যা পরস্পরের বিপরীতে পড়ুন, কারণ এটিই অধ্যায়ের ডিএসই শিক্ষা।**

| | দাম | RSI |
|---|---|---|
| মুক্ত বাজার | ৬৭.৪২৪০ | ৮৮.১৪২৮ |
| সার্কিট-সীমাবদ্ধ | ৬৬.২২০০ | ৮৭.৩৭৪৬ |
| **পার্থক্য** | **ক্লোজের ২.০০০০%** | **০.৭৬৮২ পয়েন্ট** |

**সার্কিট আপনার ফেরতের দুই শতাংশ নিয়েছে আর নির্দেশক পৌনে এক পয়েন্ট লিপিবদ্ধ করেছে।** সংবেদনশীলতার ছকের বিপরীতে যাচাই করুন: $RS \\approx 7$-এ $dRSI/dRS \\approx 100/8.43^2 = 1.41$ পয়েন্ট প্রতি একক RS, আর RS-এর ব্যবধান $7.4337 - 6.9206 = 0.5131$। গুণ করুন: $0.5131 \\times 1.50 \\approx 0.77$। **পাটিগণিতটি রহস্যময় নয়; এটি সংকোচন, আর এর অর্থ এই এক্সচেঞ্জে যে সেশনগুলো সবচেয়ে গুরুত্বপূর্ণ ঠিক সেগুলোর প্রতি RSI কাঠামোগতভাবে অন্ধ।**

**ধাপ ১৪ — এবার তিনভাবে ভুলভাবে গড়ুন, আর প্রতিটি ভুলের দাম হিসাব করুন।** একই একুশটি ক্লোজ, ২১তম দিন:

| নির্মাণ | AvgGain | AvgLoss | ২১তম দিনে RSI | ত্রুটি |
|---|---|---|---|---|
| **Wilder (সঠিক)** | **০.৭৮৬০১৯** | **০.১৮০৪৯১** | **৮১.৩২৫৫** | — |
| বীজের পরেও \`AVERAGE()\` | ০.৮৬৪২৮৬ | ০.১৭৮৫৭১ | ৮২.৮৭৬৭ | **+১.৫৫১২** |
| $\\alpha = 2/15$ সহ EMA | — | — | ৮০.১২০৬ | **−১.২০৪৯** |
| ঊর্ধ্বদিন / নিম্নদিন দিয়ে ভাগ | ১.০৭০০০০ | ০.৫০০০০০ | ৬৮.১৫২৯ | **−১৩.১৭২৬** |

**শেষ সারিটিই আকর্ষণীয়।** লাভকে দশটি ঊর্ধ্বদিন আর ক্ষতিকে চারটি নিম্নদিন দিয়ে ভাগ করলে ৬৮.১৫ আসে — *৭০-এর নিচে* — তাই একই উপাত্ত, একটি বিশ্বাসযোগ্য-দেখতে ভুলে গড়া, এমন চার্ট দেয় যেখানে লোককথার নিয়ম একবারও চালু হয় না। **দুজন নির্মাতা, একটি উপাত্ত, বিপরীত সিদ্ধান্ত, আর ধাপ ৪ হাতে না করলে কেউই কোনোদিন অমিলটি আবিষ্কার করতেন না।**

**ধাপ ১৫ — ওয়ার্ম-আপ ফেলে দিন, আর কতটা ফেলতে হবে জানুন।** একই ধারাকে ভুলভাবে ০.৬০ / ০.৩০-এ বীজ দিন:

$$RSI_{15} = 66.6667 \\text{ vs } 84.2520 \\;\\Rightarrow\\; \\text{gap } 17.5853$$
$$RSI_{21} = 70.7643 \\text{ vs } 81.3255 \\;\\Rightarrow\\; \\text{gap } 10.5612$$

ছয় বারের পুনরাবৃত্তি ত্রুটিকে নিজের ৬০%-এ নামায়, বীজগণিতের পূর্বাভাস $(13/14)^6 = 0.6410$-এর বিপরীতে। **অর্ধায়ু ৯.৩৫ বার; ত্রুটির ১% ৬২তম বার পর্যন্ত টেকে।** কোনো RSI ধারা থেকে সিদ্ধান্ত টানার আগে তার প্রথম ৩০ বার ফেলে দিন।

**ধাপ ১৬ — রায়টি পড়ুন (B48), আর লক্ষ করুন এটি কোনো স্তর নয়।** শিটটি ফেরত দেয়:

> **RSI নমুনার বেশিরভাগ সময় ৭০-এর ওপরে ছিল — ৭০ একটি ধারা-চরিত্রের পাঠ, বিক্রয় সংকেত নয়।**

এটি চালু হয় কারণ B31 = ১০০.০০%, ৫০% সীমা বহু পেরিয়ে। **শিটটি ইচ্ছাকৃতভাবে এমনভাবে গড়া যাতে লোককথা আপনার নিজের উপাত্তেই নিজেকে খণ্ডন করে**, যা §৩৬.১-এর যেকোনো যুক্তির চেয়ে বেশি প্ররোচক। আপনি সত্যিই ধরে আছেন এমন তিনটি ডিএসই নামে চালান, ৭০ নিয়ম সপ্তাহও টিকবে না।

**ধাপ ১৭ — শিট যা গণনা করতে পারে না সেই ডিএসই সতর্কতা বলুন।** Zone কলাম সাতটি বারেই BULL RANGE ফেরত দেয়, আর সৎ পাঠ হলো: RSI ৪০-এর নিচে বন্ধ না হওয়া পর্যন্ত ধরে রাখুন। কিন্তু:

- ঐ ক্লোজগুলোর কোনোটি সার্কিট সীমায় ছাপা হলে, **J কলাম তা চিহ্নিত করে আর ঐ বারের RSI একটি জানা দিকের কল্পকাহিনি** — limit-up-এ কম দেখানো, limit-down-এ বেশি দেখানো।
- কোনোটি ফলোর-প্রাইসের পর্বে ছাপা হলে পরিবর্তন শূন্য, RS অপরিবর্তিত, আর **বারটি জানালার এক-চতুর্দশাংশ খেয়েছে কিছুই না দিয়ে।**
- আর এখানে নির্ভরযোগ্য শর্ট দিক না থাকায় প্রকৃত চরমও দাঁড়ায় **যা আছে বেচুন বা সরে দাঁড়ান — কখনো শর্ট নয়।**

**পাঠটি গণনা করুন, তারপর গণনা করুন তার কতটা এক্সচেঞ্জ তৈরি করেছে।** দ্বিতীয় সংখ্যাটি শিটে নেই আর সেটিই ঠিক করে প্রথমটি নিয়ে কাজ করার মতো কি না।`,
    },

    mistakes: {
      en: `1. **Using a simple average past the seed row.** Wilder's recursion is $(13\\overline{U}_{t-1} + U_t)/14$, not AVERAGE() over the last fourteen. On BANGLAENG at day 21 the simple average returns **82.8767 against the correct 81.3255** — 1.5512 points of silent error that never triggers a warning and grows on trending data.
2. **Dividing gains by the number of up days and losses by the number of down days.** Both divisors are $N = 14$. Use 10 and 4 instead and BANGLAENG's day-21 reading becomes **68.1529 rather than 81.3255** — a 13.17-point error that flips the chart from permanently overbought to never overbought, so you and a colleague would reach opposite conclusions and never find out why.
3. **Writing losses as negative numbers.** $D_t = \\max(-\\Delta_t, 0)$ is positive by construction. Enter −0.50 in the loss column and $\\overline{D}$ goes negative, $RS$ goes negative, and RSI prints outside 0–100. It is the most common build error and, mercifully, the loudest.
4. **Treating RSI(14) as a fourteen-bar instrument.** $\\alpha = 1/N$ makes it an EMA of effective length $2N-1 = \\mathbf{27}$ bars. Confuse the two and you will keep expecting a turn that is structurally about twice as slow as you think — and you will pair it with a 14-bar signal from another chapter that is genuinely fourteen.
5. **Drawing a conclusion from the first thirty bars.** The seed's error decays by $(13/14)^k$: half-life **9.35 bars**, and **10.8% still alive at bar 30.** A wrong seed of 0.60/0.30 on BANGLAENG reads 66.6667 at day 15 against the correct 84.2520 — still 10.5612 points apart six bars later. Backtests that start RSI on bar 15 spend two months measuring their own initialisation.
6. **Selling the first 70 print.** On BANGLAENG that is day 15 at **56.90**, and the sample ends at **60.20** — **BDT 3.30 a share, 5.7996% of the exit price, surrendered in six sessions.** All seven computable bars printed above 70 and the lowest was 78.9972. A condition true of 100% of your observations tells you nothing about which one to act on.
7. **Waiting for RSI to return to 30 before re-entering.** From day 21's averages, at a steady BDT 0.50 of daily decline, that requires **twenty consecutive down closes** (RSI 29.46); even 40 requires **fifteen** (39.58). The rule sells early and buys back approximately never.
8. **Reading an RSI in the eighties as "more extreme" in any linear sense.** $dRSI/dRS = 100/(1+RS)^2$, so the scale is **eighteen times less sensitive at RSI 88 than at RSI 50.** This is why the BANGLAENG circuit test destroys 2.0000% of price and moves RSI by **0.7682 points.** Do not expect the number to register a limit-up.
9. **Counting a limit-locked, zero-liquidity bar as data.** If the print is unchanged, both averages scale by $13/14$, $RS$ is exactly unchanged and RSI is identical — **but you have burned one of fourteen bars of effective memory on nothing.** Do it for a week and your RSI(14) is running on nine real bars while still calling itself a fourteen.
10. **Reading a floor-price flatline as sustained strength.** Five locked sessions on BANGLAENG would freeze RSI at **79.6420** for a week; extend the flatline until the window is all zeros and $RS = 0/0$, which platforms variously report as 50, 100 or the last value. **A frozen number is an administered price, not a strong market.** Exclude the period with Chapter 26's flag.
11. **Quoting "RSI below 30 is a buy" without stating the period.** RSI(14) and RSI(2) are opposite instruments. On BANGLAENG the RSI(2) whips **96.21 → 52.04 → 91.24 → 57.50** across four bars while RSI(14) moves 85.13 → 79.64 → 83.51 → 79.00. Mean-reversion logic is right on the second and ruinous on the first.
12. **Shorting an overbought reading on the DSE.** There is no reliable retail short side here. Even a genuinely correct extreme resolves to **sell what you own, or decline to add** — importing the textbook conclusion without the textbook's borrow gives you a correct analysis and no executable trade.`,
      bn: `১. **বীজ সারির পরেও সরল গড় ব্যবহার করা।** Wilder-এর পুনরাবৃত্তি $(13\\overline{U}_{t-1} + U_t)/14$, শেষ চোদ্দটির ওপর AVERAGE() নয়। BANGLAENG-এ ২১তম দিনে সরল গড় দেয় **সঠিক ৮১.৩২৫৫-এর বিপরীতে ৮২.৮৭৬৭** — ১.৫৫১২ পয়েন্টের নীরব ত্রুটি যা কখনো সতর্কতা দেয় না এবং ধারাযুক্ত উপাত্তে বাড়ে।
২. **লাভকে ঊর্ধ্বদিনের সংখ্যা ও ক্ষতিকে নিম্নদিনের সংখ্যা দিয়ে ভাগ করা।** দুটি ভাজকই $N = 14$। এর বদলে ১০ ও ৪ ব্যবহার করুন আর BANGLAENG-এর ২১তম দিনের পাঠ দাঁড়ায় **৮১.৩২৫৫-এর বদলে ৬৮.১৫২৯** — ১৩.১৭ পয়েন্টের ত্রুটি যা চার্টকে স্থায়ীভাবে ওভারবট থেকে কখনো-ওভারবট-নয়-এ উল্টে দেয়, ফলে আপনি ও আপনার সহকর্মী বিপরীত সিদ্ধান্তে পৌঁছাবেন আর কোনোদিন জানবেন না কেন।
৩. **ক্ষতিকে ঋণাত্মক সংখ্যা হিসেবে লেখা।** $D_t = \\max(-\\Delta_t, 0)$ নির্মাণগতভাবেই ধনাত্মক। ক্ষতির কলামে −০.৫০ ঢোকান আর $\\overline{D}$ ঋণাত্মক হবে, $RS$ ঋণাত্মক হবে, আর RSI ০–১০০-এর বাইরে ছাপবে। এটি সবচেয়ে সাধারণ নির্মাণ-ভুল এবং সৌভাগ্যবশত সবচেয়ে সরব।
৪. **RSI(14)-কে চোদ্দ-বারের উপকরণ ভাবা।** $\\alpha = 1/N$ একে $2N-1 = \\mathbf{27}$ বারের কার্যকর দৈর্ঘ্যের EMA বানায়। দুটি গুলিয়ে ফেললে আপনি এমন এক মোড়ের অপেক্ষা করতে থাকবেন যা কাঠামোগতভাবে আপনার ধারণার প্রায় দ্বিগুণ ধীর — আর তাকে অন্য অধ্যায়ের এমন একটি ১৪-বারের সংকেতের সঙ্গে জুড়বেন যা সত্যিই চোদ্দ।
৫. **প্রথম ত্রিশ বার থেকে সিদ্ধান্ত টানা।** বীজের ত্রুটি $(13/14)^k$ হারে ক্ষয় হয়: অর্ধায়ু **৯.৩৫ বার**, আর **৩০তম বারে ১০.৮% এখনো জীবিত।** BANGLAENG-এ ০.৬০/০.৩০-এর ভুল বীজ ১৫তম দিনে সঠিক ৮৪.২৫২০-এর বিপরীতে ৬৬.৬৬৬৭ পড়ে — ছয় বার পরেও ১০.৫৬১২ পয়েন্ট দূরে। যে ব্যাকটেস্ট ১৫তম বারে RSI শুরু করে সে দুই মাস নিজের সূচনায়নই মাপে।
৬. **প্রথম ৭০ প্রিন্টে বিক্রি করা।** BANGLAENG-এ তা ১৫তম দিনে **৫৬.৯০**, আর নমুনা শেষ হয় **৬০.২০**-তে — **শেয়ারপ্রতি ৩.৩০ টাকা, প্রস্থান দামের ৫.৭৯৯৬%, ছয় সেশনে ছেড়ে দেওয়া।** সাতটি গণনাযোগ্য বারই ৭০-এর ওপরে ছাপে আর সর্বনিম্নটি ৭৮.৯৯৭২। যে শর্ত আপনার পর্যবেক্ষণের ১০০%-এ সত্য তা কোনটিতে কাজ করবেন সে বিষয়ে কিছুই বলে না।
৭. **পুনঃপ্রবেশের আগে RSI-র ৩০-এ ফেরার অপেক্ষা করা।** ২১তম দিনের গড় থেকে, দৈনিক স্থির ০.৫০ টাকা পতনে তাতে লাগে **টানা কুড়িটি নিম্ন-ক্লোজ** (RSI ২৯.৪৬); এমনকি ৪০-এও লাগে **পনেরোটি** (৩৯.৫৮)। নিয়মটি আগেভাগে বেচে আর প্রায় কখনো ফিরে কেনে না।
৮. **আশির ঘরের RSI-কে কোনো রৈখিক অর্থে "আরও চরম" পড়া।** $dRSI/dRS = 100/(1+RS)^2$, তাই মাপকাঠি **RSI ৫০-এর চেয়ে RSI ৮৮-এ আঠারো গুণ কম সংবেদনশীল।** এ কারণেই BANGLAENG-এর সার্কিট পরীক্ষা দামের ২.০০০০% ধ্বংস করে আর RSI নাড়ায় **০.৭৬৮২ পয়েন্ট।** সংখ্যাটি একটি limit-up লিপিবদ্ধ করবে, এমন আশা করবেন না।
৯. **limit-locked, শূন্য-তারল্যের বারকে উপাত্ত হিসেবে গোনা।** প্রিন্ট অপরিবর্তিত হলে দুটি গড়ই $13/14$ গুণক পায়, $RS$ ঠিক অপরিবর্তিত থাকে আর RSI অভিন্ন — **কিন্তু আপনি চোদ্দটির একটি কার্যকর স্মৃতির বার কিছুই না পেয়ে পুড়িয়েছেন।** এক সপ্তাহ তা করুন, আর আপনার RSI(14) নয়টি প্রকৃত বারে চলবে অথচ নিজেকে চোদ্দ বলবে।
১০. **ফ্লোর-প্রাইসের সমতলরেখাকে টেকসই শক্তি পড়া।** BANGLAENG-এ পাঁচটি লকড সেশন RSI-কে এক সপ্তাহ **৭৯.৬৪২০**-তে জমিয়ে রাখত; সমতলরেখা বাড়ান যতক্ষণ না জানালা সম্পূর্ণ শূন্য হয় আর $RS = 0/0$, যা প্ল্যাটফর্মভেদে ৫০, ১০০ বা শেষ মান হিসেবে আসে। **জমে থাকা সংখ্যা একটি প্রশাসিত দাম, শক্তিশালী বাজার নয়।** অধ্যায় ২৬-এর ফ্ল্যাগ দিয়ে সময়কালটি বাদ দিন।
১১. **পর্ব না বলে "RSI ৩০-এর নিচে কেনা" উদ্ধৃত করা।** RSI(14) আর RSI(2) বিপরীত উপকরণ। BANGLAENG-এ RSI(2) চার বারজুড়ে **৯৬.২১ → ৫২.০৪ → ৯১.২৪ → ৫৭.৫০** চাবুক মারে অথচ RSI(14) নড়ে ৮৫.১৩ → ৭৯.৬৪ → ৮৩.৫১ → ৭৯.০০। গড়ে-প্রত্যাবর্তনের যুক্তি দ্বিতীয়টিতে সঠিক আর প্রথমটিতে সর্বনাশা।
১২. **ডিএসই-তে একটি ওভারবট পাঠে শর্ট করা।** এখানে নির্ভরযোগ্য খুচরা শর্ট দিক নেই। প্রকৃত সঠিক একটি চরমও দাঁড়ায় **যা আছে বেচুন, বা আর যোগ করা থেকে বিরত থাকুন** — পাঠ্যবইয়ের ধার-ব্যবস্থা ছাড়া পাঠ্যবইয়ের সিদ্ধান্ত আমদানি করলে হাতে থাকে একটি সঠিক বিশ্লেষণ আর কোনো কার্যকর ট্রেড নয়।`,
    },

    tips: {
      en: `1. **Build it once by hand before you trust any platform.** Fifteen closes, fourteen changes, one simple-average seed, then the recursion. If your sheet does not reproduce **0.764286 / 0.142857 → RS 5.3500 → RSI 84.2520** on BANGLAENG's day 15, stop and find the error before you look at a single chart.
2. **Check the seed first when two platforms disagree, not the period.** Seeding differences of 17.5853 points at bar one are still 10.5612 points apart six bars later. **Half-life 9.35 bars, 1% of the error surviving to bar 62** — so two "identical" RSI(14) lines can legitimately differ for a quarter.
3. **Throw away the first thirty bars of every RSI you compute.** At bar 30 the initialisation still contributes 10.8% of its original error. This costs you nothing except a month of data you should not have been reading anyway.
4. **Say the period out loud every time you say a level.** "RSI below 30" is not a claim until you say whether it is RSI(2) or RSI(14). One is mean-reversion, the other is trend character, and the correct action on one is the ruinous action on the other.
5. **Replace "is RSI high" with "which band does RSI refuse to leave."** In a bull regime, watch 40–50 as support; in a bear regime, watch 50–60 as resistance. On BANGLAENG the 40–50 zone was never approached across a 24.9% advance, and the range rule correctly fired zero signals.
6. **Treat the first close below 40 in an established uptrend as the event.** It is far more informative than any print above 70, because it says the pullbacks have stopped holding where they used to hold. **Strength is a floor the indicator will not break, not a ceiling it should not exceed.**
7. **Require three conditions before you act on a failure swing, and be glad it is rare.** An extreme, a failure to repeat it, then a break of the intervening structure. A signal that fires on 45.6% of bars carries no information; one that fires three times a year might.
8. **Flag every limit-locked bar in a separate column before computing, exactly as cell J does.** Then read ATR (Chapter 39) and volume (Chapter 40) for that session, because RSI recorded a 2.0000% price truncation as **0.7682 points** and will do the same every time.
9. **Forward-fill or exclude zero-liquidity limit bars before the computation, never after.** Forward-filling makes $\\Delta = 0$, which by the algebra leaves RS exactly unchanged — the honest choice. Excluding preserves the effective window. Treating the print as a real close does neither.
10. **Exclude administered-price periods entirely, using Chapter 26's flag column.** A week of floor-locked sessions freezes RSI at 79.6420 and looks like conviction. It is five-fourteenths of your window spent on nothing.
11. **Screen cross-sectionally, because that is what bounding bought you.** Sorting the DSE by RSI is meaningful in a way sorting by MACD never was. Chapter 31's relative-strength discipline becomes mechanisable the moment your momentum measure is dimensionless.
12. **Convert every extreme reading into one of two DSE-executable actions: sell what you own, or decline to buy.** Never a short. Write that constraint at the top of your notes so you stop reading conclusions that assume a market we do not have.
13. **Pair RSI with something it cannot see.** It ignores highs, lows, gaps and volume by design. Chapter 39's ATR and Chapter 40's volume analysis are not optional companions here — they are the parts of the session RSI deliberately deleted.`,
      bn: `১. **কোনো প্ল্যাটফর্মে ভরসা করার আগে একবার হাতে গড়ুন।** পনেরোটি ক্লোজ, চোদ্দটি পরিবর্তন, একটি সরল-গড় বীজ, তারপর পুনরাবৃত্তি। আপনার শিট BANGLAENG-এর ১৫তম দিনে **০.৭৬৪২৮৬ / ০.১৪২৮৫৭ → RS ৫.৩৫০০ → RSI ৮৪.২৫২০** না দিলে থামুন, একটি চার্টও দেখার আগে ভুলটি খুঁজুন।
২. **দুটি প্ল্যাটফর্ম না মিললে প্রথমে বীজ দেখুন, পর্ব নয়।** প্রথম বারে ১৭.৫৮৫৩ পয়েন্টের বীজ-পার্থক্য ছয় বার পরেও ১০.৫৬১২ পয়েন্ট দূরে। **অর্ধায়ু ৯.৩৫ বার, ত্রুটির ১% ৬২তম বার পর্যন্ত টেকে** — তাই দুটি "অভিন্ন" RSI(14) রেখা বৈধভাবেই এক ত্রৈমাসিক ধরে ভিন্ন থাকতে পারে।
৩. **গণনা করা প্রতিটি RSI-র প্রথম ত্রিশ বার ফেলে দিন।** ৩০তম বারে সূচনায়ন এখনো তার আদি ত্রুটির ১০.৮% অবদান রাখে। এতে এক মাসের উপাত্ত ছাড়া কিছুই হারাবেন না, আর ওটি পড়ারই কথা ছিল না।
৪. **যতবার একটি স্তর বলবেন ততবার পর্বটিও উচ্চারণ করুন।** "RSI ৩০-এর নিচে" ততক্ষণ কোনো দাবি নয় যতক্ষণ না বলছেন এটি RSI(2) না RSI(14)। একটি গড়ে-প্রত্যাবর্তন, অন্যটি ধারার চরিত্র, আর একটিতে সঠিক পদক্ষেপ অন্যটিতে সর্বনাশা।
৫. **"RSI কি উঁচু" বদলে "RSI কোন ব্যান্ড ছাড়তে অস্বীকার করে" বসান।** bull ধরনে ৪০–৫০ সাপোর্ট হিসেবে দেখুন; bear ধরনে ৫০–৬০ রেজিস্ট্যান্স হিসেবে। BANGLAENG-এ ২৪.৯% উত্থানজুড়ে ৪০–৫০ অঞ্চলের কাছেও যাওয়া হয়নি, আর রেঞ্জ নিয়ম যথাযথভাবে শূন্য সংকেত দিয়েছে।
৬. **প্রতিষ্ঠিত ঊর্ধ্বধারায় ৪০-এর নিচে প্রথম ক্লোজকেই ঘটনা হিসেবে ধরুন।** এটি ৭০-এর ওপরের যেকোনো প্রিন্টের চেয়ে বহু বেশি তথ্যবহ, কারণ এটি বলে পুলব্যাকগুলো যেখানে টিকত সেখানে আর টিকছে না। **শক্তি এমন একটি মেঝে যা নির্দেশক ভাঙবে না, এমন ছাদ নয় যা ছাড়ানো উচিত নয়।**
৭. **failure swing-এ কাজ করার আগে তিনটি শর্ত দাবি করুন, আর এটি বিরল বলে খুশি থাকুন।** একটি চরম, তা পুনরাবৃত্তিতে ব্যর্থতা, তারপর মধ্যবর্তী কাঠামো ভাঙা। যে সংকেত ৪৫.৬% বারে চালু হয় তা কোনো তথ্য বহন করে না; যা বছরে তিনবার হয় তা হয়তো করে।
৮. **গণনার আগে প্রতিটি limit-locked বার আলাদা কলামে চিহ্নিত করুন, ঠিক যেমন J কোষ করে।** তারপর ঐ সেশনের জন্য ATR (অধ্যায় ৩৯) ও ভলিউম (অধ্যায় ৪০) পড়ুন, কারণ RSI ২.০০০০% দামের ছাঁটকে লিপিবদ্ধ করেছে **০.৭৬৮২ পয়েন্ট** হিসেবে আর প্রতিবারই তাই করবে।
৯. **শূন্য-তারল্যের limit বার গণনার আগে forward-fill বা বাদ দিন, কখনো পরে নয়।** forward-fill $\\Delta = 0$ করে, যা বীজগণিত অনুযায়ী RS-কে ঠিক অপরিবর্তিত রাখে — সৎ পছন্দ। বাদ দেওয়া কার্যকর জানালা রক্ষা করে। প্রিন্টটিকে প্রকৃত ক্লোজ ভাবা কোনোটিই করে না।
১০. **প্রশাসিত-দামের সময়কাল সম্পূর্ণ বাদ দিন, অধ্যায় ২৬-এর ফ্ল্যাগ কলাম দিয়ে।** এক সপ্তাহের ফ্লোর-লকড সেশন RSI-কে ৭৯.৬৪২০-তে জমিয়ে দেয় আর দৃঢ়তার মতো দেখায়। এটি আপনার জানালার পাঁচ-চতুর্দশাংশ কিছুই না করে খরচ।
১১. **প্রস্থচ্ছেদীয়ভাবে স্ক্রিন করুন, কারণ সীমাবদ্ধকরণ আপনাকে এটিই দিয়েছে।** ডিএসই-কে RSI দিয়ে সাজানো এমনভাবে অর্থবহ যেভাবে MACD দিয়ে সাজানো কখনো ছিল না। মোমেন্টাম পরিমাপ মাত্রাহীন হওয়ামাত্র অধ্যায় ৩১-এর আপেক্ষিক-শক্তির শৃঙ্খলা যন্ত্রায়ণযোগ্য হয়।
১২. **প্রতিটি চরম পাঠকে ডিএসই-তে কার্যকর দুটি পদক্ষেপের একটিতে রূপান্তর করুন: যা আছে বেচুন, বা কেনা থেকে বিরত থাকুন।** কখনো শর্ট নয়। সীমাবদ্ধতাটি নোটের ওপরে লিখে রাখুন যাতে এমন সিদ্ধান্ত পড়া বন্ধ করেন যা আমাদের নেই এমন এক বাজার ধরে নেয়।
১৩. **RSI-কে এমন কিছুর সঙ্গে জুড়ুন যা সে দেখতে পায় না।** এটি নকশা করেই হাই, লো, গ্যাপ ও ভলিউম উপেক্ষা করে। অধ্যায় ৩৯-এর ATR ও অধ্যায় ৪০-এর ভলিউম বিশ্লেষণ এখানে ঐচ্ছিক সঙ্গী নয় — সেগুলোই সেশনের সেই অংশ যা RSI ইচ্ছাকৃতভাবে মুছে দিয়েছে।`,
    },

    exercises: {
      en: `1. Build the §36.6 sheet from the twenty-one BANGLAENG closes. Confirm F20 = 0.764286, G20 = 0.142857, H20 = 5.3500, I20 = 84.2520, and that I26 = 81.3255. If any cell disagrees, you have the wrong seed or the wrong recursion — find out which.
2. Replace the recursion in F21 with \`AVERAGE(D8:D21)\` and drag it down. Report the new I26 and the difference from 81.3255. Then explain in one sentence why the error is positive on this dataset and would be negative on a decaying one.
3. Recompute the seed dividing gains by 10 and losses by 4 instead of by 14 in both. Report the day-21 RSI, and state what the 70 rule now says about the entire sample.
4. Change B2 from 14 to 2 and recompute the whole column. Record every RSI(2) reading from day 3 onward. How many times does RSI(2) cross 70 and 30 in twenty-one sessions, and how many times does RSI(14)?
5. Seed the series deliberately wrong at 0.60 / 0.30 and run it forward. Tabulate the gap to the correct series at each bar. Verify that the gap shrinks by roughly $(13/14)$ per bar, and find the bar at which it falls below one point.
6. Extend the series with fifteen consecutive closes each BDT 0.50 lower. Record the RSI at each. Confirm that it crosses 40 on the fifteenth and note the price at which that happens. Was the trend still worth holding fourteen bars earlier?
7. Replace closes 17 to 21 with five unchanged prints at 56.80. Verify that RSI stays exactly at 79.6420 throughout, and prove algebraically why. Then extend the flatline to fourteen sessions and record what your spreadsheet returns for $0/0$.
8. Compute B44 and B45 by hand for band settings of 2%, 5% and 10%. Tabulate the price truncation and the RSI understatement in each case. At which band does RSI first move by a full point?
9. Pick three DSE names you actually hold or watch. Compute RSI(14) over the last 250 sessions, discarding the first 30. Report the percentage of bars above 70 for each. Does the folklore rule survive contact with your own portfolio?
10. On the same three names, compare two rules: sell on the first close above 70 and re-enter below 30, against hold until the first close below 40. Report the taka result per share for each. State which name, if any, favoured the naive rule and why.
11. Screen the full DSE by RSI(14) on one date and record the top and bottom twenty. Now do the same by MACD. Compare the two lists and describe in two sentences what the MACD list is actually sorted by.
12. For every bar in your three-name sample, flag whether the close printed at a circuit limit. Compute RSI with and without those bars excluded. Report the largest single-bar divergence between the two series and the date it occurred.
13. Write down, in three sentences and without using the word "overbought", what you would tell a beginner an RSI of 85 means. Keep it with your sheet.`,
      bn: `১. একুশটি BANGLAENG ক্লোজ থেকে §৩৬.৬-এর শিট গড়ুন। নিশ্চিত করুন F20 = ০.৭৬৪২৮৬, G20 = ০.১৪২৮৫৭, H20 = ৫.৩৫০০, I20 = ৮৪.২৫২০, এবং I26 = ৮১.৩২৫৫। কোনো কোষ না মিললে আপনার বীজ ভুল বা পুনরাবৃত্তি ভুল — কোনটি তা বের করুন।
২. F21-এর পুনরাবৃত্তির বদলে \`AVERAGE(D8:D21)\` বসিয়ে নিচে টানুন। নতুন I26 ও ৮১.৩২৫৫ থেকে পার্থক্য জানান। তারপর এক বাক্যে ব্যাখ্যা করুন এই উপাত্তে ত্রুটি কেন ধনাত্মক আর ক্ষয়িষ্ণু উপাত্তে কেন ঋণাত্মক হতো।
৩. দুটিতেই ১৪-এর বদলে লাভকে ১০ ও ক্ষতিকে ৪ দিয়ে ভাগ করে বীজ পুনর্গণনা করুন। ২১তম দিনের RSI জানান, আর বলুন ৭০ নিয়ম এখন পুরো নমুনা সম্পর্কে কী বলে।
৪. B2 ১৪ থেকে ২ করুন আর পুরো কলাম পুনর্গণনা করুন। ৩য় দিন থেকে প্রতিটি RSI(2) পাঠ লিপিবদ্ধ করুন। একুশ সেশনে RSI(2) কতবার ৭০ ও ৩০ অতিক্রম করে, আর RSI(14) কতবার?
৫. ধারাটিকে ইচ্ছাকৃতভাবে ০.৬০ / ০.৩০-এ ভুল বীজ দিয়ে সামনে চালান। প্রতিটি বারে সঠিক ধারার সঙ্গে ব্যবধান সারণিবদ্ধ করুন। যাচাই করুন ব্যবধান প্রতি বারে মোটামুটি $(13/14)$ গুণে ছোট হয়, আর কোন বারে তা এক পয়েন্টের নিচে নামে খুঁজুন।
৬. ধারাটিকে টানা পনেরোটি ক্লোজ দিয়ে বাড়ান, প্রতিটি ০.৫০ টাকা নিচে। প্রতিটিতে RSI লিপিবদ্ধ করুন। নিশ্চিত করুন এটি পনেরোতমটিতে ৪০ অতিক্রম করে আর তা কোন দামে ঘটে লিখুন। চোদ্দ বার আগে ধারাটি কি তখনো ধরে রাখার মতো ছিল?
৭. ১৭ থেকে ২১ ক্লোজগুলোকে ৫৬.৮০-তে পাঁচটি অপরিবর্তিত প্রিন্ট দিয়ে বদলান। যাচাই করুন RSI সর্বত্র ঠিক ৭৯.৬৪২০-তে থাকে, আর বীজগণিতে প্রমাণ করুন কেন। তারপর সমতলরেখা চোদ্দ সেশনে বাড়ান আর আপনার স্প্রেডশিট $0/0$-এর জন্য কী ফেরত দেয় লিপিবদ্ধ করুন।
৮. ২%, ৫% ও ১০% ব্যান্ড সেটিংয়ের জন্য B44 ও B45 হাতে গণনা করুন। প্রতিটি ক্ষেত্রে দামের ছাঁট ও RSI-র কম-দেখানো সারণিবদ্ধ করুন। কোন ব্যান্ডে RSI প্রথম পুরো এক পয়েন্ট নড়ে?
৯. আপনি সত্যিই ধরে আছেন বা দেখছেন এমন তিনটি ডিএসই নাম বাছুন। শেষ ২৫০ সেশনে RSI(14) গণনা করুন, প্রথম ৩০ বাদ দিয়ে। প্রতিটির জন্য ৭০-এর ওপরে বারের শতাংশ জানান। লোককথার নিয়ম কি আপনার নিজের পোর্টফোলিওর সংস্পর্শে টেকে?
১০. একই তিনটি নামে দুটি নিয়ম তুলনা করুন: ৭০-এর ওপরে প্রথম ক্লোজে বিক্রি ও ৩০-এর নিচে পুনঃপ্রবেশ, বনাম ৪০-এর নিচে প্রথম ক্লোজ পর্যন্ত ধরে রাখা। প্রতিটির শেয়ারপ্রতি টাকার ফল জানান। কোন নাম, যদি থাকে, সরল নিয়মের পক্ষে গেল আর কেন বলুন।
১১. একটি তারিখে পুরো ডিএসই RSI(14) দিয়ে স্ক্রিন করুন আর ওপরের ও নিচের কুড়িটি লিপিবদ্ধ করুন। এবার MACD দিয়ে একই করুন। দুটি তালিকা তুলনা করুন আর দুই বাক্যে বর্ণনা করুন MACD তালিকাটি আসলে কী দিয়ে সাজানো।
১২. আপনার তিন-নামের নমুনার প্রতিটি বারে ক্লোজটি সার্কিট সীমায় ছাপা হয়েছিল কি না চিহ্নিত করুন। ঐ বার বাদ দিয়ে ও না দিয়ে RSI গণনা করুন। দুটি ধারার মধ্যে বৃহত্তম একক-বার বিচ্যুতি ও তা কোন তারিখে ঘটল জানান।
১৩. তিন বাক্যে, "ওভারবট" শব্দটি ব্যবহার না করে লিখুন যে ৮৫ RSI মানে কী তা আপনি একজন নবীনকে বলবেন। এটি আপনার শিটের সঙ্গে রাখুন।`,
    },

    summary: {
      en: `- **RSI is the share of recent price movement that was upward:** $RSI = 100\\,\\overline{U}/(\\overline{U}+\\overline{D})$. That is the whole indicator. Because the units are taka in both numerator and denominator, **RSI is dimensionless** — which is precisely what Chapter 35's MACD could not offer and what makes cross-sectional screening of the DSE meaningful.
- **Wilder's smoothing is an EMA with $\\alpha = 1/N$, not a simple average and not the standard $2/(N+1)$.** Since $M = 2N-1$, **an RSI(14) carries the memory of a 27-period EMA.** On BANGLAENG's day 21 the three builds give **81.3255 (Wilder), 82.8767 (simple average) and 80.1206 ($\\alpha = 2/15$)** — 2.76 points of spread on identical data, and only one of them is the indicator you think you are reading.
- **The first value is a seed, not part of the definition**, and its error decays as $(13/14)^k$: **half-life 9.35 bars, 10.8% still alive at bar 30, 1% at bar 62.** A deliberately wrong 0.60/0.30 seed reads 66.6667 against 84.2520 at day 15 and is still 10.5612 points off six bars later. **Discard the first thirty bars, and check the seed before the period when platforms disagree.**
- **"RSI above 70 means sell" is arithmetically equivalent to "sell whenever a trend exists,"** because $RSI \\ge 70 \\iff \\overline{U} \\ge 2.33\\,\\overline{D}$. On BANGLAENG it fired on **7 of 7 computable bars — 100.00%**, with the lowest reading at 78.9972; in the longer series of §36.8, on 45.6% of bars. A condition true of every observation carries zero information.
- **What the folklore cost, in taka:** selling the first 70 print at **56.90** against a sample ending at **60.20** surrendered **BDT 3.30 a share, 5.7996% of the exit price, in six sessions.** And the textbook re-entry never arrives — from day 21's state, a steady BDT 0.50 daily decline needs **fifteen consecutive down closes to reach RSI 39.58 and twenty to reach 29.46.**
- **The professional reading is range shift, not level.** In a bull regime RSI travels 40 to 80/90 with **40–50 acting as support**; in a bear regime 10/20 to 60 with **50–60 acting as resistance.** The event is the first close below 40, not any print above 70. On BANGLAENG the range rule correctly fired **zero signals across a 24.9% advance**; on §36.8's series the two rules produce **−BDT 3.60 and +BDT 2.30 per share.**
- **The scale compresses exactly where the folklore says to act.** $dRSI/dRS = 100/(1+RS)^2$ makes the indicator **eighteen times less sensitive at RSI 88 than at RSI 50** — 1.41 points per unit of RS against 25.0. Everything surprising about extreme readings follows from that one derivative.
- **Circuit limits are the DSE-specific trap, and RSI cannot see them.** A day-22 close capped at **66.2200** instead of a free **67.4240** truncates the price by **BDT 1.2040 = 2.0000%** and moves RSI from **88.1428 to 87.3746 — 0.7682 points.** The price gap compounds session after session; the RSI gap does not. **Flag the bar and read ATR (Ch 39) and volume (Ch 40) instead.**
- **A limit-locked or floor-locked bar with no liquidity is not data.** If the print is unchanged, both averages scale by $13/14$, **RS and RSI are exactly unchanged — but one-fourteenth of the effective window is consumed for nothing.** Five such sessions freeze BANGLAENG's RSI at **79.6420** for a week and leave an RSI(14) running on nine real bars. Forward-fill or exclude before computing, using Chapter 26's flag.
- **RSI(14) and RSI(2) are opposite instruments wearing one name.** On BANGLAENG the RSI(2) whips **96.21 → 52.04 → 91.24 → 57.50** across four bars while RSI(14) barely moves. Mean-reversion logic is correct on the short period and ruinous on the long one, so **a level quoted without a period is not yet a claim.**
- **And the constraint that governs every conclusion here: there is no reliable retail short side on the DSE.** A genuine extreme resolves to **sell what you own or decline to add — never a short.** Chapter 37's Stochastic normalises against the recent high–low range instead of up-and-down pressure, and fails differently and instructively.`,
      bn: `- **RSI হলো সাম্প্রতিক দামের নড়াচড়ার যতটা অংশ ঊর্ধ্বমুখী ছিল তার হিস্যা:** $RSI = 100\\,\\overline{U}/(\\overline{U}+\\overline{D})$। পুরো নির্দেশকটি এইটুকুই। লব ও হর দুটিরই একক টাকা হওয়ায় **RSI মাত্রাহীন** — যা অধ্যায় ৩৫-এর MACD ঠিক দিতে পারেনি এবং যা ডিএসই-র প্রস্থচ্ছেদীয় স্ক্রিনিংকে অর্থবহ করে।
- **Wilder-এর মসৃণকরণ $\\alpha = 1/N$ সহ একটি EMA, সরল গড় নয় আর প্রচলিত $2/(N+1)$-ও নয়।** যেহেতু $M = 2N-1$, **RSI(14) ২৭-পর্বের EMA-র স্মৃতি বহন করে।** BANGLAENG-এর ২১তম দিনে তিনটি নির্মাণ দেয় **৮১.৩২৫৫ (Wilder), ৮২.৮৭৬৭ (সরল গড়) ও ৮০.১২০৬ ($\\alpha = 2/15$)** — অভিন্ন উপাত্তে ২.৭৬ পয়েন্টের বিস্তার, আর এদের কেবল একটিই সেই নির্দেশক যা আপনি পড়ছেন ভাবছেন।
- **প্রথম মানটি একটি বীজ, সংজ্ঞার অংশ নয়**, আর তার ত্রুটি $(13/14)^k$ হারে ক্ষয় হয়: **অর্ধায়ু ৯.৩৫ বার, ৩০তম বারে ১০.৮% এখনো জীবিত, ৬২তম বারে ১%।** ইচ্ছাকৃত ভুল ০.৬০/০.৩০ বীজ ১৫তম দিনে ৮৪.২৫২০-এর বিপরীতে ৬৬.৬৬৬৭ পড়ে আর ছয় বার পরেও ১০.৫৬১২ পয়েন্ট দূরে। **প্রথম ত্রিশ বার ফেলে দিন, আর প্ল্যাটফর্ম না মিললে পর্বের আগে বীজ দেখুন।**
- **"RSI ৭০-এর ওপরে মানে বিক্রি" পাটিগণিতে "যখনই একটি ধারা আছে তখনই বেচুন"-এর সমতুল্য**, কারণ $RSI \\ge 70 \\iff \\overline{U} \\ge 2.33\\,\\overline{D}$। BANGLAENG-এ এটি **গণনাযোগ্য ৭টির ৭টিতেই — ১০০.০০%** চালু হয়েছে, সর্বনিম্ন পাঠ ৭৮.৯৯৭২; §৩৬.৮-এর দীর্ঘতর ধারায় ৪৫.৬% বারে। যে শর্ত প্রতিটি পর্যবেক্ষণে সত্য তা শূন্য তথ্য বহন করে।
- **লোককথার খরচ, টাকায়:** প্রথম ৭০ প্রিন্টে **৫৬.৯০**-তে বিক্রি, আর নমুনা শেষ **৬০.২০**-তে — ছয় সেশনে **শেয়ারপ্রতি ৩.৩০ টাকা, প্রস্থান দামের ৫.৭৯৯৬%, ছেড়ে দেওয়া।** আর পাঠ্যবইয়ের পুনঃপ্রবেশ কখনো আসে না — ২১তম দিনের অবস্থা থেকে দৈনিক স্থির ০.৫০ টাকা পতনে **RSI ৩৯.৫৮-এ পৌঁছাতে টানা পনেরোটি নিম্ন-ক্লোজ ও ২৯.৪৬-এ পৌঁছাতে কুড়িটি** লাগে।
- **পেশাদার পাঠ রেঞ্জ স্থানান্তর, স্তর নয়।** bull ধরনে RSI ৪০ থেকে ৮০/৯০ ঘোরে, **৪০–৫০ সাপোর্ট হিসেবে কাজ করে**; bear ধরনে ১০/২০ থেকে ৬০, **৫০–৬০ রেজিস্ট্যান্স হিসেবে।** ঘটনাটি ৪০-এর নিচে প্রথম ক্লোজ, ৭০-এর ওপরের কোনো প্রিন্ট নয়। BANGLAENG-এ রেঞ্জ নিয়ম **২৪.৯% উত্থানজুড়ে যথাযথভাবে শূন্য সংকেত** দিয়েছে; §৩৬.৮-এর ধারায় দুই নিয়ম শেয়ারপ্রতি **−৩.৬০ টাকা ও +২.৩০ টাকা** দেয়।
- **লোককথা যেখানে কাজ করতে বলে ঠিক সেখানেই মাপকাঠি সংকুচিত।** $dRSI/dRS = 100/(1+RS)^2$ নির্দেশককে **RSI ৫০-এর চেয়ে RSI ৮৮-এ আঠারো গুণ কম সংবেদনশীল** করে — ২৫.০-এর বিপরীতে প্রতি একক RS-এ ১.৪১ পয়েন্ট। চরম পাঠ নিয়ে যা কিছু বিস্ময়কর সবই ঐ একটি অন্তরকলজ থেকে আসে।
- **সার্কিট সীমা ডিএসই-নির্দিষ্ট ফাঁদ, আর RSI তা দেখতে পায় না।** ২২তম দিনের ক্লোজ মুক্ত **৬৭.৪২৪০**-এর বদলে **৬৬.২২০০**-তে সীমাবদ্ধ হলে দাম ছেঁটে যায় **১.২০৪০ টাকা = ২.০০০০%** আর RSI যায় **৮৮.১৪২৮ থেকে ৮৭.৩৭৪৬ — ০.৭৬৮২ পয়েন্ট।** দামের ব্যবধান সেশনে সেশনে চক্রবৃদ্ধি হয়; RSI-র ব্যবধান হয় না। **বারটি চিহ্নিত করুন আর বদলে ATR (অধ্যায় ৩৯) ও ভলিউম (অধ্যায় ৪০) পড়ুন।**
- **তারল্যহীন limit-locked বা floor-locked বার উপাত্ত নয়।** প্রিন্ট অপরিবর্তিত হলে দুটি গড়ই $13/14$ গুণক পায়, **RS ও RSI ঠিক অপরিবর্তিত — কিন্তু কার্যকর জানালার এক-চতুর্দশাংশ কিছুই না পেয়ে খরচ হয়।** এমন পাঁচটি সেশন BANGLAENG-এর RSI-কে এক সপ্তাহ **৭৯.৬৪২০**-তে জমিয়ে রাখে আর নয়টি প্রকৃত বারে চলা এক RSI(14) রেখে যায়। অধ্যায় ২৬-এর ফ্ল্যাগ দিয়ে গণনার আগে forward-fill বা বাদ দিন।
- **RSI(14) ও RSI(2) এক নাম পরা বিপরীত উপকরণ।** BANGLAENG-এ RSI(2) চার বারজুড়ে **৯৬.২১ → ৫২.০৪ → ৯১.২৪ → ৫৭.৫০** চাবুক মারে অথচ RSI(14) প্রায় নড়েই না। গড়ে-প্রত্যাবর্তনের যুক্তি স্বল্প পর্বে সঠিক আর দীর্ঘ পর্বে সর্বনাশা, তাই **পর্ব না বলে উদ্ধৃত কোনো স্তর এখনো কোনো দাবিই নয়।**
- **আর যে সীমাবদ্ধতা এখানকার প্রতিটি সিদ্ধান্ত শাসন করে: ডিএসই-তে নির্ভরযোগ্য খুচরা শর্ট দিক নেই।** প্রকৃত চরম দাঁড়ায় **যা আছে বেচুন বা আর যোগ করবেন না — কখনো শর্ট নয়।** অধ্যায় ৩৭-এর Stochastic ঊর্ধ্ব-নিম্ন চাপের বদলে সাম্প্রতিক হাই–লো পরিসরের বিপরীতে স্বাভাবিকীকরণ করে, এবং ভিন্ন ও শিক্ষণীয়ভাবে ব্যর্থ হয়।`,
    },
  },

  interview: [
    {
      q: {
        en: 'Walk me through why Wilder smoothing is not a simple moving average, and why it matters.',
        bn: 'Wilder মসৃণকরণ কেন সরল চলমান গড় নয়, এবং কেন তা গুরুত্বপূর্ণ, আমাকে বুঝিয়ে বলুন।',
      },
      a: {
        en: 'The first value is a simple average, and only the first — it is a seed, and it exists purely to give the recursion something to start from. Every value after it is the previous average times thirteen, plus today\'s gain, all divided by fourteen. Rewrite that and you get the previous average plus one-fourteenth of the difference between today\'s gain and the previous average, which is exactly the correction-to-forecast form of an exponential moving average with alpha equal to one over N. That is not the standard EMA convention of two over N plus one. Setting them equal gives M equals two N minus one, so a fourteen-period RSI actually carries the memory of a twenty-seven period exponential average — it is roughly twice as slow as the label implies, which is why beginners keep waiting for a turn that structurally is not coming. It matters commercially as well as intellectually. On the worked twenty-one-close series, the correct Wilder build gives eighty-one point three three at the last bar; a simple fourteen-bar average over the same window gives eighty-two point eight eight; a standard EMA with alpha two over fifteen gives eighty point one two. That is a spread of two point seven six points on identical data, and if I reach for the AVERAGE function past the seed row in a spreadsheet I have quietly built the second of those and labelled it the first. So my rule is that the AVERAGE function appears exactly once in an RSI sheet, in the seed row, and never again.',
        bn: 'প্রথম মানটি একটি সরল গড়, এবং কেবল প্রথমটিই — এটি একটি বীজ, আর এর অস্তিত্ব নিছক পুনরাবৃত্তিকে শুরু করার মতো কিছু দেওয়ার জন্য। এরপরের প্রতিটি মান হলো আগের গড়ের তেরো গুণ, যোগ আজকের লাভ, সবটা চোদ্দ দিয়ে ভাগ। এটি পুনর্লিখন করলে পাবেন আগের গড় যোগ আজকের লাভ ও আগের গড়ের পার্থক্যের এক-চতুর্দশাংশ, যা ঠিক এক ভাগ N-এর সমান আলফাসহ একটি সূচকীয় চলমান গড়ের সংশোধন-থেকে-পূর্বাভাস রূপ। এটি দুই ভাগ N যোগ এক-এর প্রচলিত EMA রীতি নয়। দুটিকে সমান বসালে পাই M সমান দুই N বিয়োগ এক, তাই চোদ্দ-পর্বের RSI আসলে সাতাশ-পর্বের সূচকীয় গড়ের স্মৃতি বহন করে — নাম যা বোঝায় এটি তার প্রায় দ্বিগুণ ধীর, আর এ কারণেই নতুনরা এমন এক মোড়ের অপেক্ষা করতে থাকেন যা কাঠামোগতভাবেই আসছে না। এটি বৌদ্ধিকভাবে যেমন, বাণিজ্যিকভাবেও তেমনই গুরুত্বপূর্ণ। কাজে লাগানো একুশ-ক্লোজের ধারায় সঠিক Wilder নির্মাণ শেষ বারে দেয় একাশি দশমিক তিন তিন; একই জানালায় সরল চোদ্দ-বার গড় দেয় বিরাশি দশমিক আট আট; আলফা দুই ভাগ পনেরোসহ প্রচলিত EMA দেয় আশি দশমিক এক দুই। অভিন্ন উপাত্তে এটি দুই দশমিক সাত ছয় পয়েন্টের বিস্তার, আর স্প্রেডশিটে বীজ সারির পরেও AVERAGE অপেক্ষক ধরলে আমি নীরবে দ্বিতীয়টি গড়ে তাতে প্রথমটির নাম লাগিয়েছি। তাই আমার নিয়ম হলো, একটি RSI শিটে AVERAGE অপেক্ষক ঠিক একবার আসে, বীজ সারিতে, আর কখনো নয়।',
      },
    },
    {
      q: {
        en: 'Your RSI reads 84 on the very first bar it can be computed. Is that a sell?',
        bn: 'গণনাযোগ্য একেবারে প্রথম বারেই আপনার RSI ৮৪ পড়ছে। এটি কি বিক্রি?',
      },
      a: {
        en: 'No, and the fact that it is the first computable bar is exactly what makes the point. On the worked series the first fourteen changes contain ten gains totalling ten taka seventy and four losses totalling two taka, so relative strength is five point three five and RSI is eighty-four point two five. There was no crossing of seventy to observe, no build-up, no warning — the indicator became computable and it was already deep in what folklore calls the sell zone. That is not an artefact of the data; it is what a trend is. Write RSI in its share form and RSI above seventy is algebraically identical to the statement that smoothed up-pressure is at least two point three three times smoothed down-pressure, which is a definition of an uptrend rather than a warning about one. So the rule sell above seventy translates honestly as sell whenever a trend exists. On that series it fires on seven of seven computable bars, one hundred percent, and the weakest reading in the whole sample is seventy-eight point nine nine. The cost is measurable: selling the first print at fifty-six ninety against a sample that ends at sixty taka twenty surrenders three taka thirty a share, five point eight percent of the exit price, in six sessions. And the re-entry the textbook promises does not arrive — from that last state, at a steady fifty paisa of daily decline, RSI needs fifteen consecutive down closes to reach forty and twenty to reach thirty. What I would actually do with eighty-four is treat it as a statement about regime: this is a bull range, so I watch the forty to fifty band for support and I hold until a close below forty tells me the pullbacks have stopped holding.',
        bn: 'না, আর এটি যে গণনাযোগ্য প্রথম বার সেটিই মূল কথাটি প্রতিষ্ঠা করে। কাজে লাগানো ধারায় প্রথম চোদ্দটি পরিবর্তনে দশটি লাভ, মোট দশ টাকা সত্তর, আর চারটি ক্ষতি, মোট দুই টাকা, তাই আপেক্ষিক শক্তি পাঁচ দশমিক তিন পাঁচ এবং RSI চুরাশি দশমিক দুই পাঁচ। দেখার মতো কোনো সত্তর অতিক্রম ছিল না, কোনো গড়ে ওঠা ছিল না, কোনো সতর্কতা ছিল না — নির্দেশকটি গণনাযোগ্য হলো আর হয়েই লোককথা যাকে বিক্রয় অঞ্চল বলে তার গভীরে ছিল। এটি উপাত্তের কোনো কৃত্রিম ফল নয়; ধারা বলতে তো এটিই। RSI-কে তার হিস্যা-রূপে লিখুন, আর সত্তরের ওপরে RSI বীজগণিতে ঐ বক্তব্যেরই অভিন্ন যে মসৃণকৃত ঊর্ধ্ব-চাপ মসৃণকৃত নিম্ন-চাপের অন্তত দুই দশমিক তিন তিন গুণ, যা কোনো ঊর্ধ্বধারা সম্পর্কে সতর্কতা নয় বরং তার সংজ্ঞা। তাই সত্তরের ওপরে বেচার নিয়মটি সৎভাবে অনুবাদ করলে দাঁড়ায় যখনই একটি ধারা আছে তখনই বেচুন। ঐ ধারায় এটি গণনাযোগ্য সাতটির সাতটিতেই চালু হয়, একশো শতাংশ, আর পুরো নমুনার দুর্বলতম পাঠ আটাত্তর দশমিক নয় নয়। খরচটি মাপা যায়: ছাপ্পান্ন নব্বইতে প্রথম প্রিন্টে বেচা, আর নমুনা শেষ ষাট টাকা কুড়িতে — ছয় সেশনে শেয়ারপ্রতি তিন টাকা ত্রিশ, প্রস্থান দামের পাঁচ দশমিক আট শতাংশ, ছেড়ে দেওয়া। আর পাঠ্যবই যে পুনঃপ্রবেশের প্রতিশ্রুতি দেয় তা আসে না — ঐ শেষ অবস্থা থেকে, দৈনিক স্থির পঞ্চাশ পয়সা পতনে, RSI-র চল্লিশে পৌঁছাতে টানা পনেরোটি নিম্ন-ক্লোজ ও ত্রিশে পৌঁছাতে কুড়িটি লাগে। চুরাশি নিয়ে আমি আসলে যা করব তা হলো একে ধরন সম্পর্কে বক্তব্য হিসেবে নেওয়া: এটি একটি bull range, তাই আমি চল্লিশ থেকে পঞ্চাশ ব্যান্ডটি সাপোর্ট হিসেবে দেখি আর চল্লিশের নিচে একটি ক্লোজ যতক্ষণ না বলছে পুলব্যাক আর টিকছে না ততক্ষণ ধরে রাখি।',
      },
    },
    {
      q: {
        en: 'Two platforms give different RSI(14) values on the same stock. What do you check first?',
        bn: 'একই শেয়ারে দুটি প্ল্যাটফর্ম ভিন্ন RSI(14) দেয়। আপনি প্রথমে কী দেখবেন?',
      },
      a: {
        en: 'The seed, before the period and before anything else. The recursion itself is unambiguous, but the value it starts from is not part of the indicator\'s definition and vendors genuinely differ. Some use a simple average of the first fourteen changes, some run an exponential average from the first bar, and some initialise on the very first change alone. All three are defensible and none of them agree early on. The useful thing is that the disagreement obeys a clean law. Subtract two runs that differ only in the seed and, because the recursion is affine, the difference is multiplied by thirteen-fourteenths every bar. That gives a half-life of nine point three five bars, about ten point eight percent of the original error still alive at bar thirty, and one percent surviving all the way to bar sixty-two. I can demonstrate the size on the worked series: seed it deliberately wrong at zero point six and zero point three instead of the correct zero point seven six four and zero point one four three, and the first reading is sixty-six point six seven against eighty-four point two five, a gap of seventeen point five nine points. Six bars later the gap is still ten point five six. So my practice is to discard the first thirty bars of any RSI series I compute and to refuse to compare two platforms inside sixty bars of a common start date. If the two lines still disagree after that, then I look at the period, then at whether one of them is using a standard EMA alpha instead of one over N, and then at whether the data itself differs — which on the DSE usually means one vendor is including limit-locked or floor-price sessions that the other has excluded.',
        bn: 'বীজ, পর্বের আগে এবং অন্য সবকিছুর আগে। পুনরাবৃত্তিটি নিজে দ্ব্যর্থহীন, কিন্তু তা যে মান থেকে শুরু করে তা নির্দেশকের সংজ্ঞার অংশ নয় আর বিক্রেতারা সত্যিই ভিন্ন। কেউ প্রথম চোদ্দটি পরিবর্তনের সরল গড় ব্যবহার করে, কেউ প্রথম বার থেকে একটি সূচকীয় গড় চালায়, কেউ একেবারে প্রথম পরিবর্তন দিয়েই সূচনা করে। তিনটিই সমর্থনযোগ্য আর শুরুতে কোনোটিই মেলে না। কাজের বিষয় হলো অমিলটি একটি পরিচ্ছন্ন সূত্র মানে। কেবল বীজে ভিন্ন এমন দুটি চালনা বিয়োগ করুন, আর যেহেতু পুনরাবৃত্তিটি অ্যাফাইন, পার্থক্যটি প্রতি বারে তেরো-চতুর্দশাংশ দিয়ে গুণিত হয়। এতে অর্ধায়ু দাঁড়ায় নয় দশমিক তিন পাঁচ বার, ত্রিশতম বারে আদি ত্রুটির প্রায় দশ দশমিক আট শতাংশ এখনো জীবিত, আর এক শতাংশ টেকে বাষট্টিতম বার পর্যন্ত। কাজে লাগানো ধারায় আকারটি দেখাতে পারি: সঠিক শূন্য দশমিক সাত ছয় চার আর শূন্য দশমিক এক চার তিন-এর বদলে ইচ্ছাকৃতভাবে শূন্য দশমিক ছয় ও শূন্য দশমিক তিন দিয়ে বীজ দিন, আর প্রথম পাঠ হয় চুরাশি দশমিক দুই পাঁচ-এর বিপরীতে ছেষট্টি দশমিক ছয় সাত, ব্যবধান সতেরো দশমিক পাঁচ নয় পয়েন্ট। ছয় বার পরেও ব্যবধান দশ দশমিক পাঁচ ছয়। তাই আমার চর্চা হলো গণনা করা যেকোনো RSI ধারার প্রথম ত্রিশ বার ফেলে দেওয়া আর একটি অভিন্ন শুরুর তারিখের ষাট বারের ভেতরে দুটি প্ল্যাটফর্ম তুলনা করতে অস্বীকার করা। তারপরেও দুটি রেখা না মিললে আমি পর্ব দেখি, তারপর দেখি একটি এক ভাগ N-এর বদলে প্রচলিত EMA আলফা ব্যবহার করছে কি না, তারপর দেখি উপাত্ত নিজেই ভিন্ন কি না — যা ডিএসই-তে সাধারণত মানে এক বিক্রেতা এমন limit-locked বা ফ্লোর-প্রাইস সেশন ঢোকাচ্ছে যা অন্যজন বাদ দিয়েছে।',
      },
    },
    {
      q: {
        en: 'A DSE stock is limit-up for four sessions. What is your RSI telling you, and what is it not?',
        bn: 'একটি ডিএসই শেয়ার চারটি সেশন limit-up। আপনার RSI কী বলছে, আর কী বলছে না?',
      },
      a: {
        en: 'It is telling me the trend is strong, which I already knew, and it is failing to tell me the one thing I actually need, which is how much of the move I am not being allowed to have. The mechanism is that the change fed into the formula is a censored observation — the true change gets clipped at plus or minus ten percent of the previous close — and the indicator has no way to know that clipping occurred. I can put a number on how badly it fails. On the worked series, from a last close of sixty taka twenty, suppose the next session would freely close up twelve percent at sixty-seven point four two. The band permits only sixty-six point two two. So the price is truncated by one taka twenty, a full two percent of the close — real return, gone — and the RSI moves from eighty-eight point one four to eighty-seven point three seven. The indicator recorded my two percent loss as seventy-seven hundredths of one point. The reason is compression: the derivative of RSI with respect to relative strength is one hundred over one plus RS squared, which is twenty-five points per unit down at RS equal to one and about one point four at RS around seven, so the scale is roughly eighteen times less sensitive up there. And the asymmetry compounds — over four consecutive limit sessions the price gap between the free and capped paths grows to about seven percent while the RSI gap stays at roughly three-quarters of a point. So on a limit-locked runner my chart looks nearly identical every morning while the price walks away from me every afternoon. The practical answer is to flag the bar in a separate column, read average true range and volume for what actually happened in that session, and never look to RSI to tell me a limit-up occurred, because it will not.',
        bn: 'এটি আমাকে বলছে ধারাটি শক্তিশালী, যা আমি আগেই জানতাম, আর যা আমার সত্যিই দরকার সেই একটি জিনিস বলতে ব্যর্থ হচ্ছে — চালের কতটা আমাকে পেতে দেওয়া হচ্ছে না। কৌশলটি হলো সূত্রে ঢোকা পরিবর্তনটি একটি সেন্সরকৃত পর্যবেক্ষণ — প্রকৃত পরিবর্তন আগের ক্লোজের যোগ বা বিয়োগ দশ শতাংশে ছেঁটে যায় — আর নির্দেশকের ছাঁটাই ঘটেছে তা জানার কোনো উপায় নেই। কতটা খারাপভাবে ব্যর্থ হয় তার একটি সংখ্যা দিতে পারি। কাজে লাগানো ধারায় ষাট টাকা কুড়ির শেষ ক্লোজ থেকে ধরুন পরের সেশন মুক্তভাবে বারো শতাংশ বেড়ে সাতষট্টি দশমিক চার দুইয়ে বন্ধ হতো। ব্যান্ড দেয় কেবল ছেষট্টি দশমিক দুই দুই। তাই দাম ছেঁটে যায় এক টাকা কুড়ি, ক্লোজের পুরো দুই শতাংশ — প্রকৃত ফেরত, চলে গেছে — আর RSI যায় অষ্টআশি দশমিক এক চার থেকে সাতাশি দশমিক তিন সাতে। নির্দেশক আমার দুই শতাংশ ক্ষতিকে লিপিবদ্ধ করেছে এক পয়েন্টের সাতাত্তর শতাংশ হিসেবে। কারণটি সংকোচন: আপেক্ষিক শক্তির সাপেক্ষে RSI-র অন্তরকলজ হলো একশো ভাগ এক যোগ RS-এর বর্গ, যা RS সমান এক-এ প্রতি এককে পঁচিশ পয়েন্ট আর RS প্রায় সাতে প্রায় এক দশমিক চার, অর্থাৎ ওপরে মাপকাঠি প্রায় আঠারো গুণ কম সংবেদনশীল। আর অসমতা চক্রবৃদ্ধি হয় — পরপর চারটি limit সেশনে মুক্ত ও সীমাবদ্ধ পথের দামের ব্যবধান প্রায় সাত শতাংশে পৌঁছায় অথচ RSI-র ব্যবধান প্রায় পৌনে এক পয়েন্টেই থাকে। তাই limit-locked দৌড়ে আমার চার্ট প্রতি সকালে প্রায় অভিন্ন দেখায় অথচ দাম প্রতি বিকেলে আমার থেকে দূরে হাঁটে। ব্যবহারিক উত্তর হলো বারটি আলাদা কলামে চিহ্নিত করা, ঐ সেশনে আসলে কী ঘটেছে তার জন্য গড় প্রকৃত পরিসর ও ভলিউম পড়া, আর limit-up ঘটেছে কি না জানতে কখনো RSI-র দিকে না তাকানো, কারণ সে বলবে না।',
      },
    },
    {
      q: {
        en: 'If 70 is not a sell, what do you actually trade off RSI?',
        bn: '৭০ যদি বিক্রি না হয়, তবে RSI দিয়ে আপনি আসলে কী ট্রেড করেন?',
      },
      a: {
        en: 'The range, and specifically the moment the range shifts. In a genuine uptrend RSI travels roughly between forty and eighty or ninety, and the forty to fifty band behaves as support — price pullbacks show up as dips into the forties that hold. In a genuine downtrend it travels between ten or twenty and sixty, and the fifty to sixty band behaves as resistance — rallies die there. So the event I care about in a bull market is the first close decisively below forty, because that is the pullback that stopped holding where the previous ones held. That inverts the retail instinct completely: the retail trader sells strength at seventy and buys weakness at thirty, while the range reading sells the loss of forty in a bull market and sells rallies into sixty in a bear market. The reason I prefer it is philosophical as well as empirical. Seventy is a property of the indicator\'s own scale — it is the same number on every instrument in every market in every decade. Forty as a support floor is a property of this market discovered from this data, so it is a claim that can be falsified, and it changes when the market changes. On the worked twenty-one-session series the range rule fires zero signals across a twenty-five percent advance, which is the correct answer, while the seventy rule fires on the first bar and costs three taka thirty a share. On the longer seventy-one-bar series the two rules produce minus three taka sixty for sell-at-seventy and plus two taka thirty for the range rule. The naive version does not merely underperform; it loses money where the other makes some. I would add Wilder\'s own failure swing as the second thing worth trading, because it needs three conditions rather than one — an extreme, a failure to repeat it, then a break of the intervening structure — and consequently fires a few times a year rather than on half of all bars.',
        bn: 'রেঞ্জ, আর সুনির্দিষ্টভাবে রেঞ্জ যে মুহূর্তে স্থানান্তরিত হয়। প্রকৃত ঊর্ধ্বধারায় RSI মোটামুটি চল্লিশ থেকে আশি বা নব্বইয়ের মধ্যে ঘোরে, আর চল্লিশ থেকে পঞ্চাশ ব্যান্ডটি সাপোর্টের মতো আচরণ করে — দামের পুলব্যাক চল্লিশের ঘরে নেমে টিকে থাকা হিসেবে দেখা দেয়। প্রকৃত নিম্নধারায় এটি দশ বা কুড়ি থেকে ষাটের মধ্যে ঘোরে, আর পঞ্চাশ থেকে ষাট ব্যান্ডটি রেজিস্ট্যান্সের মতো আচরণ করে — র‍্যালি সেখানে মরে। তাই ষাঁড়ের বাজারে আমি যে ঘটনার পরোয়া করি তা হলো চল্লিশের নিচে প্রথম নিশ্চিত ক্লোজ, কারণ ঐ পুলব্যাকটিই আগেরগুলো যেখানে টিকত সেখানে টিকতে থামল। এটি খুচরা প্রবৃত্তি সম্পূর্ণ উল্টে দেয়: খুচরা ব্যবসায়ী সত্তরে শক্তি বেচেন আর ত্রিশে দুর্বলতা কেনেন, অথচ রেঞ্জ পাঠ ষাঁড়ের বাজারে চল্লিশ হারানো বেচে আর ভালুকের বাজারে ষাটে ওঠা র‍্যালি বেচে। আমি একে পছন্দ করি অভিজ্ঞতালব্ধ যেমন, দার্শনিক কারণেও তেমন। সত্তর নির্দেশকের নিজের মাপকাঠির ধর্ম — প্রতিটি দশকে প্রতিটি বাজারে প্রতিটি উপকরণে এটি একই সংখ্যা। সাপোর্ট-মেঝে হিসেবে চল্লিশ এই বাজারের ধর্ম, এই উপাত্ত থেকে আবিষ্কৃত, তাই এটি এমন দাবি যা মিথ্যা প্রমাণ করা যায়, আর বাজার বদলালে তা বদলায়। কাজে লাগানো একুশ-সেশনের ধারায় রেঞ্জ নিয়ম পঁচিশ শতাংশ উত্থানজুড়ে শূন্য সংকেত দেয়, যা সঠিক উত্তর, অথচ সত্তর নিয়ম প্রথম বারেই চালু হয়ে শেয়ারপ্রতি তিন টাকা ত্রিশ খরচ করায়। দীর্ঘতর একাত্তর-বারের ধারায় দুই নিয়ম দেয় সত্তরে-বিক্রিতে বিয়োগ তিন টাকা ষাট আর রেঞ্জ নিয়মে যোগ দুই টাকা ত্রিশ। সরল সংস্করণটি কেবল কম ফল দেয় না; যেখানে অন্যটি কিছু আয় করে সেখানে এটি টাকা হারায়। ট্রেড করার মতো দ্বিতীয় জিনিস হিসেবে আমি Wilder-এর নিজের failure swing যোগ করব, কারণ এতে একটির বদলে তিনটি শর্ত লাগে — একটি চরম, তা পুনরাবৃত্তিতে ব্যর্থতা, তারপর মধ্যবর্তী কাঠামো ভাঙা — আর ফলে এটি সব বারের অর্ধেকে নয়, বছরে কয়েকবার চালু হয়।',
      },
    },
    {
      q: {
        en: 'Someone tells you RSI below 30 is a buy. What is your response?',
        bn: 'কেউ আপনাকে বলল RSI ৩০-এর নিচে কেনা। আপনার উত্তর কী?',
      },
      a: {
        en: 'My first response is that they have not finished stating their claim, because they have not told me the period, and without it the sentence is not yet true or false. A fourteen-period RSI and a two-period RSI are not the same instrument with a different setting; they are opposite logics wearing the same name. The fourteen has an effective memory of twenty-seven bars and measures the character of a trend, so a reading of ninety on it means the trend is strong and healthy. The two has an effective memory of about three bars and measures one- or two-day stretch, so a reading of ninety on it means short-term overextension. On the worked series the two-period version whips from ninety-six to fifty-two to ninety-one to fifty-seven across four consecutive bars while the fourteen-period version moves from eighty-five to eighty to eighty-four to seventy-nine — barely at all. Buying the extreme is the correct logic on the short period and the ruinous one on the long period, which is precisely why quoting a level without a period is not a strategy. My second response is specific to our market. Short-period mean reversion demands frequent trading, and Bangladeshi transaction costs plus the settlement cycle make that far less attractive here than any backtest suggests — the edge is real but it is thinner than the friction in a good many cases. And my third response is the constraint that governs everything: we have no reliable retail short side. So even when I am genuinely right that a reading is stretched, the only actions available to me are to sell what I already own or to decline to buy more. Half the classical oscillator literature was written for markets with a functioning borrow, and importing its conclusions without importing its assumptions leaves me with a correct analysis and no trade I can actually place.',
        bn: 'আমার প্রথম উত্তর হলো তাঁর দাবিটি এখনো সম্পূর্ণ হয়নি, কারণ তিনি পর্বটি বলেননি, আর তা ছাড়া বাক্যটি এখনো সত্যও নয় মিথ্যাও নয়। চোদ্দ-পর্বের RSI আর দুই-পর্বের RSI ভিন্ন সেটিংসহ একই উপকরণ নয়; একই নাম পরা বিপরীত যুক্তি। চোদ্দটির কার্যকর স্মৃতি সাতাশ বার আর তা একটি ধারার চরিত্র মাপে, তাই এতে নব্বইয়ের পাঠ মানে ধারাটি শক্তিশালী ও সুস্থ। দুইটির কার্যকর স্মৃতি প্রায় তিন বার আর তা এক-দুই দিনের টান মাপে, তাই এতে নব্বইয়ের পাঠ মানে স্বল্পমেয়াদি অতিপ্রসারণ। কাজে লাগানো ধারায় দুই-পর্বের সংস্করণ পরপর চার বারে ছিয়ানব্বই থেকে বায়ান্নয়, তারপর একানব্বইয়ে, তারপর সাতান্নয় চাবুক মারে, অথচ চোদ্দ-পর্বেরটি পঁচাশি থেকে আশিতে, তারপর চুরাশিতে, তারপর ঊনআশিতে যায় — প্রায় কিছুই নয়। চরম কেনা স্বল্প পর্বে সঠিক যুক্তি আর দীর্ঘ পর্বে সর্বনাশা, আর ঠিক এ কারণেই পর্ব না বলে স্তর উদ্ধৃত করা কোনো কৌশল নয়। আমার দ্বিতীয় উত্তর আমাদের বাজারের জন্য নির্দিষ্ট। স্বল্প-পর্বের গড়-প্রত্যাবর্তন ঘন ঘন লেনদেন দাবি করে, আর বাংলাদেশি লেনদেন খরচ ও নিষ্পত্তি চক্র এখানে তা যেকোনো ব্যাকটেস্ট যা বলে তার চেয়ে অনেক কম আকর্ষণীয় করে — প্রান্তটি বাস্তব কিন্তু বহু ক্ষেত্রেই ঘর্ষণের চেয়ে পাতলা। আর আমার তৃতীয় উত্তর সেই সীমাবদ্ধতা যা সবকিছু শাসন করে: আমাদের নির্ভরযোগ্য খুচরা শর্ট দিক নেই। তাই একটি পাঠ টানটান হয়েছে এ বিষয়ে আমি প্রকৃতই সঠিক হলেও আমার হাতে থাকা একমাত্র পদক্ষেপ হলো যা ইতিমধ্যে আছে তা বেচা বা আর কেনা থেকে বিরত থাকা। চিরায়ত অসিলেটর সাহিত্যের অর্ধেক লেখা হয়েছে কার্যকর ধার-ব্যবস্থার বাজারের জন্য, আর অনুমান আমদানি না করে সিদ্ধান্ত আমদানি করলে আমার হাতে থাকে একটি সঠিক বিশ্লেষণ আর বসানোর মতো কোনো ট্রেড নয়।',
      },
    },
  ],

  quiz: [
    {
      q: {
        en: 'RSI is most accurately described as:',
        bn: 'RSI-র সবচেয়ে নির্ভুল বর্ণনা:',
      },
      options: {
        en: [
          'The average price change over the last 14 sessions',
          'The share of recent price movement that was upward',
          'The distance of price from its 14-day moving average',
          'The ratio of today\'s volume to average volume',
        ],
        bn: [
          'শেষ ১৪ সেশনের গড় দাম-পরিবর্তন',
          'সাম্প্রতিক দামের নড়াচড়ার যতটা অংশ ঊর্ধ্বমুখী ছিল তার হিস্যা',
          '১৪-দিনের চলমান গড় থেকে দামের দূরত্ব',
          'গড় ভলিউমের সঙ্গে আজকের ভলিউমের অনুপাত',
        ],
      },
      answer: 1,
    },
    {
      q: {
        en: 'Wilder\'s smoothing uses which alpha, and what is the effective EMA length of an RSI(14)?',
        bn: 'Wilder-এর মসৃণকরণ কোন আলফা ব্যবহার করে, এবং RSI(14)-এর কার্যকর EMA দৈর্ঘ্য কত?',
      },
      options: {
        en: ['α = 2/(N+1); 14 bars', 'α = 1/N; 14 bars', 'α = 1/N; 27 bars', 'α = 2/(N+1); 27 bars'],
        bn: ['α = ২/(N+১); ১৪ বার', 'α = ১/N; ১৪ বার', 'α = ১/N; ২৭ বার', 'α = ২/(N+১); ২৭ বার'],
      },
      answer: 2,
    },
    {
      q: {
        en: 'With ΣU = 10.70 and ΣD = 2.00 over fourteen changes, the first RSI is:',
        bn: 'চোদ্দটি পরিবর্তনে ΣU = ১০.৭০ ও ΣD = ২.০০ হলে প্রথম RSI:',
      },
      options: {
        en: ['68.1529', '78.9972', '84.2520', '85.1344'],
        bn: ['৬৮.১৫২৯', '৭৮.৯৯৭২', '৮৪.২৫২০', '৮৫.১৩৪৪'],
      },
      answer: 2,
    },
    {
      q: {
        en: 'Across the seven computable bars of the BANGLAENG sample, the share of bars with RSI ≥ 70 was:',
        bn: 'BANGLAENG নমুনার সাতটি গণনাযোগ্য বারজুড়ে RSI ≥ ৭০ হওয়া বারের হিস্যা ছিল:',
      },
      options: {
        en: ['28.57%', '45.60%', '71.43%', '100.00%'],
        bn: ['২৮.৫৭%', '৪৫.৬০%', '৭১.৪৩%', '১০০.০০%'],
      },
      answer: 3,
    },
    {
      q: {
        en: 'Selling BANGLAENG on the first RSI print above 70 (close 56.90) against a sample ending at 60.20 surrendered:',
        bn: '৭০-এর ওপরে প্রথম RSI প্রিন্টে (ক্লোজ ৫৬.৯০) BANGLAENG বিক্রি করলে ৬০.২০-তে শেষ হওয়া নমুনার বিপরীতে ছেড়ে দেওয়া হয়:',
      },
      options: {
        en: [
          'BDT 1.20, or 2.0000% of the exit price',
          'BDT 3.30, or 5.7996% of the exit price',
          'BDT 3.60, or 6.3269% of the exit price',
          'Nothing — the rule broke even',
        ],
        bn: [
          '১.২০ টাকা, বা প্রস্থান দামের ২.০০০০%',
          '৩.৩০ টাকা, বা প্রস্থান দামের ৫.৭৯৯৬%',
          '৩.৬০ টাকা, বা প্রস্থান দামের ৬.৩২৬৯%',
          'কিছুই নয় — নিয়মটি সমান-সমান হয়েছে',
        ],
      },
      answer: 1,
    },
    {
      q: {
        en: 'A day-22 close capped at 66.22 instead of a free 67.42 truncates the price by 2.0000%. The RSI is understated by:',
        bn: 'মুক্ত ৬৭.৪২-এর বদলে ২২তম দিনের ক্লোজ ৬৬.২২-তে সীমাবদ্ধ হলে দাম ছেঁটে যায় ২.০০০০%। RSI কম দেখানো হয়:',
      },
      options: {
        en: ['0.7682 points', '2.0000 points', '5.4900 points', '13.1726 points'],
        bn: ['০.৭৬৮২ পয়েন্ট', '২.০০০০ পয়েন্ট', '৫.৪৯০০ পয়েন্ট', '১৩.১৭২৬ পয়েন্ট'],
      },
      answer: 0,
    },
    {
      q: {
        en: 'A limit-locked bar that prints unchanged from the prior close does what to RSI?',
        bn: 'আগের ক্লোজের সমান ছাপা একটি limit-locked বার RSI-র কী করে?',
      },
      options: {
        en: [
          'Drives RSI to 50 immediately',
          'Leaves RSI exactly unchanged, but consumes one bar of effective memory',
          'Raises RSI, because a limit-up is a gain',
          'Makes RSI undefined',
        ],
        bn: [
          'RSI-কে তৎক্ষণাৎ ৫০-এ নামায়',
          'RSI-কে ঠিক অপরিবর্তিত রাখে, কিন্তু কার্যকর স্মৃতির একটি বার খেয়ে ফেলে',
          'RSI বাড়ায়, কারণ limit-up একটি লাভ',
          'RSI-কে অসংজ্ঞায়িত করে',
        ],
      },
      answer: 1,
    },
    {
      q: {
        en: 'In a bull regime, the professional reading watches which band, and for what?',
        bn: 'bull ধরনে পেশাদার পাঠ কোন ব্যান্ড দেখে, আর কীসের জন্য?',
      },
      options: {
        en: [
          '70–80, as a sell trigger',
          '50–60, as resistance',
          '40–50, as support — the first close below 40 is the event',
          '20–30, as a re-entry level',
        ],
        bn: [
          '৭০–৮০, বিক্রয় ট্রিগার হিসেবে',
          '৫০–৬০, রেজিস্ট্যান্স হিসেবে',
          '৪০–৫০, সাপোর্ট হিসেবে — ৪০-এর নিচে প্রথম ক্লোজই ঘটনা',
          '২০–৩০, পুনঃপ্রবেশের স্তর হিসেবে',
        ],
      },
      answer: 2,
    },
    {
      q: {
        en: 'The seed error in a Wilder RSI decays by (13/14) per bar. Its half-life is approximately:',
        bn: 'Wilder RSI-তে বীজের ত্রুটি প্রতি বারে (১৩/১৪) হারে ক্ষয় হয়। এর অর্ধায়ু আনুমানিক:',
      },
      options: {
        en: ['3 bars', '9.35 bars', '27 bars', '62 bars'],
        bn: ['৩ বার', '৯.৩৫ বার', '২৭ বার', '৬২ বার'],
      },
      answer: 1,
    },
    {
      q: {
        en: 'On the DSE, a genuinely extreme overbought reading resolves to which action?',
        bn: 'ডিএসই-তে প্রকৃত চরম ওভারবট পাঠ কোন পদক্ষেপে দাঁড়ায়?',
      },
      options: {
        en: [
          'Short the stock with a stop above the high',
          'Sell what you own or decline to buy — never a short',
          'Buy more, since strength begets strength',
          'Nothing — extreme readings are always artefacts',
        ],
        bn: [
          'হাই-এর ওপরে স্টপ রেখে শেয়ারটি শর্ট করুন',
          'যা আছে বেচুন বা কেনা থেকে বিরত থাকুন — কখনো শর্ট নয়',
          'আরও কিনুন, কারণ শক্তি শক্তি জন্ম দেয়',
          'কিছুই নয় — চরম পাঠ সবসময়ই কৃত্রিম',
        ],
      },
      answer: 1,
    },
  ],
};
