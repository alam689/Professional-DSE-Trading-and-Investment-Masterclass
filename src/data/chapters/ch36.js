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
  },
};
