/**
 * Chapter 39 — ATR & Volatility
 * Part III, Technical Analysis. Builds on Ch 33 (consolidation), Ch 35 (PPO
 * normalisation), Ch 36 (Wilder smoothing in RSI), Ch 38 (sigma bands and the
 * squeeze). Feeds directly into Ch 40 (volume) and Ch 49 (position sizing).
 */

export default {
  n: 39,
  tools: [],

  excelSheet: {
    filename: 'ch39-atr-position-sizing.xlsx',
    sheetName: 'ATR Sizing',
    cells: [
      { cell: 'A1', v: 'ATR(14), TRUE RANGE DECOMPOSITION AND POSITION SIZING' },

      { cell: 'A3', v: 'Day' }, { cell: 'B3', v: 'High' }, { cell: 'C3', v: 'Low' },
      { cell: 'D3', v: 'Close' }, { cell: 'E3', v: 'H-L' }, { cell: 'F3', v: 'ABS(H-PrevC)' },
      { cell: 'G3', v: 'ABS(PrevC-L)' }, { cell: 'H3', v: 'True Range' }, { cell: 'I3', v: 'ATR(14)' },
      { cell: 'J3', v: 'ATR% of Close' }, { cell: 'K3', v: 'Chandelier(3)' },

      { cell: 'A4', v: 1 }, { cell: 'B4', v: 46.30 }, { cell: 'C4', v: 45.00 }, { cell: 'D4', v: 45.80 },
      { cell: 'E4', f: 'B4-C4' }, { cell: 'F4', v: 0 }, { cell: 'G4', v: 0 }, { cell: 'H4', f: 'MAX(E4,F4,G4)' },

      { cell: 'A5', v: 2 }, { cell: 'B5', v: 46.40 }, { cell: 'C5', v: 45.30 }, { cell: 'D5', v: 46.10 },
      { cell: 'E5', f: 'B5-C5' }, { cell: 'F5', f: 'ABS(B5-D4)' }, { cell: 'G5', f: 'ABS(D4-C5)' }, { cell: 'H5', f: 'MAX(E5,F5,G5)' },

      { cell: 'A6', v: 3 }, { cell: 'B6', v: 47.20 }, { cell: 'C6', v: 45.60 }, { cell: 'D6', v: 46.90 },
      { cell: 'E6', f: 'B6-C6' }, { cell: 'F6', f: 'ABS(B6-D5)' }, { cell: 'G6', f: 'ABS(D5-C6)' }, { cell: 'H6', f: 'MAX(E6,F6,G6)' },

      { cell: 'A7', v: 4 }, { cell: 'B7', v: 47.60 }, { cell: 'C7', v: 46.20 }, { cell: 'D7', v: 47.40 },
      { cell: 'E7', f: 'B7-C7' }, { cell: 'F7', f: 'ABS(B7-D6)' }, { cell: 'G7', f: 'ABS(D6-C7)' }, { cell: 'H7', f: 'MAX(E7,F7,G7)' },

      { cell: 'A8', v: 5 }, { cell: 'B8', v: 49.90 }, { cell: 'C8', v: 49.10 }, { cell: 'D8', v: 49.70 },
      { cell: 'E8', f: 'B8-C8' }, { cell: 'F8', f: 'ABS(B8-D7)' }, { cell: 'G8', f: 'ABS(D7-C8)' }, { cell: 'H8', f: 'MAX(E8,F8,G8)' },

      { cell: 'A9', v: 6 }, { cell: 'B9', v: 50.30 }, { cell: 'C9', v: 49.10 }, { cell: 'D9', v: 49.60 },
      { cell: 'E9', f: 'B9-C9' }, { cell: 'F9', f: 'ABS(B9-D8)' }, { cell: 'G9', f: 'ABS(D8-C9)' }, { cell: 'H9', f: 'MAX(E9,F9,G9)' },

      { cell: 'A10', v: 7 }, { cell: 'B10', v: 50.20 }, { cell: 'C10', v: 48.70 }, { cell: 'D10', v: 49.00 },
      { cell: 'E10', f: 'B10-C10' }, { cell: 'F10', f: 'ABS(B10-D9)' }, { cell: 'G10', f: 'ABS(D9-C10)' }, { cell: 'H10', f: 'MAX(E10,F10,G10)' },

      { cell: 'A11', v: 8 }, { cell: 'B11', v: 49.75 }, { cell: 'C11', v: 48.40 }, { cell: 'D11', v: 48.90 },
      { cell: 'E11', f: 'B11-C11' }, { cell: 'F11', f: 'ABS(B11-D10)' }, { cell: 'G11', f: 'ABS(D10-C11)' }, { cell: 'H11', f: 'MAX(E11,F11,G11)' },

      { cell: 'A12', v: 9 }, { cell: 'B12', v: 49.60 }, { cell: 'C12', v: 48.15 }, { cell: 'D12', v: 48.60 },
      { cell: 'E12', f: 'B12-C12' }, { cell: 'F12', f: 'ABS(B12-D11)' }, { cell: 'G12', f: 'ABS(D11-C12)' }, { cell: 'H12', f: 'MAX(E12,F12,G12)' },

      { cell: 'A13', v: 10 }, { cell: 'B13', v: 49.40 }, { cell: 'C13', v: 47.85 }, { cell: 'D13', v: 48.10 },
      { cell: 'E13', f: 'B13-C13' }, { cell: 'F13', f: 'ABS(B13-D12)' }, { cell: 'G13', f: 'ABS(D12-C13)' }, { cell: 'H13', f: 'MAX(E13,F13,G13)' },

      { cell: 'A14', v: 11 }, { cell: 'B14', v: 48.70 }, { cell: 'C14', v: 47.40 }, { cell: 'D14', v: 47.60 },
      { cell: 'E14', f: 'B14-C14' }, { cell: 'F14', f: 'ABS(B14-D13)' }, { cell: 'G14', f: 'ABS(D13-C14)' }, { cell: 'H14', f: 'MAX(E14,F14,G14)' },

      { cell: 'A15', v: 12 }, { cell: 'B15', v: 48.40 }, { cell: 'C15', v: 46.80 }, { cell: 'D15', v: 47.20 },
      { cell: 'E15', f: 'B15-C15' }, { cell: 'F15', f: 'ABS(B15-D14)' }, { cell: 'G15', f: 'ABS(D14-C15)' }, { cell: 'H15', f: 'MAX(E15,F15,G15)' },

      { cell: 'A16', v: 13 }, { cell: 'B16', v: 48.10 }, { cell: 'C16', v: 46.40 }, { cell: 'D16', v: 47.80 },
      { cell: 'E16', f: 'B16-C16' }, { cell: 'F16', f: 'ABS(B16-D15)' }, { cell: 'G16', f: 'ABS(D15-C16)' }, { cell: 'H16', f: 'MAX(E16,F16,G16)' },

      { cell: 'A17', v: 14 }, { cell: 'B17', v: 48.50 }, { cell: 'C17', v: 47.05 }, { cell: 'D17', v: 47.90 },
      { cell: 'E17', f: 'B17-C17' }, { cell: 'F17', f: 'ABS(B17-D16)' }, { cell: 'G17', f: 'ABS(D16-C17)' }, { cell: 'H17', f: 'MAX(E17,F17,G17)' },
      { cell: 'I17', f: 'AVERAGE(H4:H17)' }, { cell: 'J17', f: 'I17/D17*100' },

      { cell: 'A18', v: 15 }, { cell: 'B18', v: 50.80 }, { cell: 'C18', v: 49.10 }, { cell: 'D18', v: 50.40 },
      { cell: 'E18', f: 'B18-C18' }, { cell: 'F18', f: 'ABS(B18-D17)' }, { cell: 'G18', f: 'ABS(D17-C18)' }, { cell: 'H18', f: 'MAX(E18,F18,G18)' },
      { cell: 'I18', f: '(I17*13+H18)/14' }, { cell: 'J18', f: 'I18/D18*100' },
      { cell: 'K18', f: 'MAX(B4:B18)-3*I18' },

      { cell: 'A19', v: 16 }, { cell: 'B19', v: 50.70 }, { cell: 'C19', v: 48.40 }, { cell: 'D19', v: 48.60 },
      { cell: 'E19', f: 'B19-C19' }, { cell: 'F19', f: 'ABS(B19-D18)' }, { cell: 'G19', f: 'ABS(D18-C19)' }, { cell: 'H19', f: 'MAX(E19,F19,G19)' },
      { cell: 'I19', f: '(I18*13+H19)/14' }, { cell: 'J19', f: 'I19/D19*100' },
      { cell: 'K19', f: 'MAX(B4:B19)-3*I19' },

      { cell: 'A20', v: 17 }, { cell: 'B20', v: 48.95 }, { cell: 'C20', v: 48.00 }, { cell: 'D20', v: 48.20 },
      { cell: 'E20', f: 'B20-C20' }, { cell: 'F20', f: 'ABS(B20-D19)' }, { cell: 'G20', f: 'ABS(D19-C20)' }, { cell: 'H20', f: 'MAX(E20,F20,G20)' },
      { cell: 'I20', f: '(I19*13+H20)/14' }, { cell: 'J20', f: 'I20/D20*100' },
      { cell: 'K20', f: 'MAX(B4:B20)-3*I20' },

      { cell: 'A22', v: '— POSITION SIZING PANEL —' },
      { cell: 'A23', v: 'Account Size (BDT)' }, { cell: 'B23', v: 850000 },
      { cell: 'A24', v: 'Risk per Trade (%)' }, { cell: 'B24', v: 1 },
      { cell: 'A25', v: 'Risk Budget (BDT)' }, { cell: 'B25', f: 'B23*B24/100' },
      { cell: 'A26', v: 'Entry Price' }, { cell: 'B26', f: 'D20' },
      { cell: 'A27', v: 'ATR(14)' }, { cell: 'B27', f: 'I20' },
      { cell: 'A28', v: 'ATR Multiple k' }, { cell: 'B28', v: 2.5 },
      { cell: 'A29', v: 'Stop Distance (BDT)' }, { cell: 'B29', f: 'B28*B27' },
      { cell: 'A30', v: 'Stop Price' }, { cell: 'B30', f: 'B26-B29' },
      { cell: 'A31', v: 'Stop as % of Entry' }, { cell: 'B31', f: 'B29/B26*100' },
      { cell: 'A32', v: 'Raw Share Count' }, { cell: 'B32', f: 'B25/B29' },
      { cell: 'A33', v: 'Lot / Rounding Unit' }, { cell: 'B33', v: 10 },
      { cell: 'A34', v: 'SHARES TO BUY (rounded down)' }, { cell: 'B34', f: 'FLOOR(B32,B33)' },
      { cell: 'A35', v: 'Taka at Risk' }, { cell: 'B35', f: 'B34*B29' },
      { cell: 'A36', v: 'Actual Risk (% of account)' }, { cell: 'B36', f: 'B35/B23*100' },
      { cell: 'A37', v: 'Position Value (BDT)' }, { cell: 'B37', f: 'B34*B26' },
      { cell: 'A38', v: 'Exposure (% of account)' }, { cell: 'B38', f: 'B37/B23*100' },

      { cell: 'A40', v: '— VOLATILE COMPARATOR (same price, 2.5x the ATR) —' },
      { cell: 'A41', v: 'Entry Price' }, { cell: 'B41', v: 48.20 },
      { cell: 'A42', v: 'ATR(14)' }, { cell: 'B42', v: 4.00 },
      { cell: 'A43', v: 'ATR% of Price' }, { cell: 'B43', f: 'B42/B41*100' },
      { cell: 'A44', v: 'Stop Distance (BDT)' }, { cell: 'B44', f: 'B28*B42' },
      { cell: 'A45', v: 'SHARES TO BUY (rounded down)' }, { cell: 'B45', f: 'FLOOR(B25/B44,B33)' },
      { cell: 'A46', v: 'Taka at Risk' }, { cell: 'B46', f: 'B45*B44' },
      { cell: 'A47', v: 'Position Value (BDT)' }, { cell: 'B47', f: 'B45*B41' },
      { cell: 'A48', v: 'Exposure (% of account)' }, { cell: 'B48', f: 'B47/B23*100' },
      { cell: 'A49', v: 'Share Count Ratio (quiet / volatile)' }, { cell: 'B49', f: 'B34/B45' },

      { cell: 'A51', v: '— DSE CIRCUIT-LIMIT STRESS TEST —' },
      { cell: 'A52', v: 'Assumed Daily Limit (%)' }, { cell: 'B52', v: 10 },
      { cell: 'A53', v: 'Price after 3 Limit-Down Locks' }, { cell: 'B53', f: 'B26*(1-B52/100)^3' },
      { cell: 'A54', v: 'Loss per Share vs Entry' }, { cell: 'B54', f: 'B26-B53' },
      { cell: 'A55', v: 'Position Loss (BDT)' }, { cell: 'B55', f: 'B34*B54' },
      { cell: 'A56', v: 'Actual Loss (% of account)' }, { cell: 'B56', f: 'B55/B23*100' },
      { cell: 'A57', v: 'Multiple of Planned Risk' }, { cell: 'B57', f: 'B55/B35' },

      { cell: 'A59', v: 'VERDICT' },
      {
        cell: 'B59',
        f: 'IF(B57>2,"ATR stop can be jumped - reserve separately for limit-lock risk",IF(B57>1,"Stop is only marginally protected on a gap","Stop distance covers the modelled limit move"))',
      },
    ],
  },

  objectives: {
    en: [
      'Derive True Range from its three candidate terms and explain why the two gap terms exist at all.',
      'Compute Wilder ATR(14) with a correct seed, using the same recursion as the RSI of Chapter 36.',
      'Place a stop at a volatility-scaled distance and explain why a fixed-percentage stop is arbitrary.',
      'Size a position from account equity, risk tolerance and ATR, and treat exposure as an output rather than an input.',
      'State how DSE circuit limits censor the observed true range, and reserve separately for the limit-lock case.',
    ],
    bn: [
      'তিনটি সম্ভাব্য পদ থেকে True Range উদ্ভাবন করা এবং কেন গ্যাপের দুটি পদ আদৌ আছে তা ব্যাখ্যা করা।',
      'সঠিক বীজমান দিয়ে Wilder ATR(14) গণনা করা, অধ্যায় ৩৬-এর RSI-এর একই পুনরাবৃত্তি ব্যবহার করে।',
      'অস্থিরতা-মাপা দূরত্বে স্টপ বসানো এবং কেন নির্দিষ্ট-শতাংশের স্টপ খেয়ালি তা ব্যাখ্যা করা।',
      'অ্যাকাউন্টের ইকুইটি, ঝুঁকি সহনশীলতা ও ATR থেকে পজিশনের আকার নির্ধারণ করা, এবং এক্সপোজারকে ইনপুট নয় আউটপুট হিসেবে দেখা।',
      'ডিএসই-র সার্কিট সীমা কীভাবে পর্যবেক্ষিত true range ছেঁটে দেয় তা বলা, এবং limit-lock পরিস্থিতির জন্য আলাদাভাবে সংরক্ষণ রাখা।',
    ],
  },

  blocks: {
    theory: {
      en: `Every indicator in Part III so far has tried to answer the same question in a different accent: *which way is this going?* Moving averages, MACD, RSI, Bollinger Bands — all of them are direction machines. **ATR is not.** It answers a different question entirely, and it is the more important one.

**ATR tells you how much this instrument moves in a day.** From that single number follows where your stop belongs, how many shares you may buy, and whether the trade is worth taking at all. It generates no signals. **It sizes them.** That is why this is the most operationally important indicator chapter in Part III, and I want to say that plainly rather than bury it: a trader with mediocre entries and correct ATR-based sizing survives. A trader with excellent entries and arbitrary sizing does not.

### Why the plain daily range is not enough

The obvious measure of a day's movement is high minus low. It is also wrong, and the reason is specific.

Consider a stock that closes at 47.40 and opens the next session at 49.50 on an earnings release, then trades in a narrow 49.10–49.90 band all day. High minus low is 0.80 — a *quiet* day, apparently. But the position moved 2.10 taka against or for you between the close and the open. **The plain range measures intraday movement and is blind to overnight movement.** For a market that gaps — and the DSE gaps constantly on price-sensitive announcements, record dates, and policy news — that blindness is fatal.

Welles Wilder's fix, published in 1978 alongside the RSI of Chapter 36 and the Parabolic SAR, was to take the largest of three candidates:

$$TR_t = \\max\\Big( H_t - L_t, \\; |H_t - C_{t-1}|, \\; |C_{t-1} - L_t| \\Big)$$

Each term earns its place:

- **$H_t - L_t$** — the ordinary intraday range. It dominates on a normal session with no gap.
- **$|H_t - C_{t-1}|$** — the **gap-up term**. If the stock opened far above yesterday's close, the true distance travelled is measured from yesterday's close up to today's high, not from today's low.
- **$|C_{t-1} - L_t|$** — the **gap-down term**. Symmetrically, on a gap down the movement runs from yesterday's close down to today's low.

The three candidates together guarantee that **True Range is the total price territory covered since the last agreed price**, gap included. On the example above the candidates are 0.80, 2.50 and 1.70; the answer is 2.50, and the "quiet" day was nothing of the sort.

### Wilder smoothing — the same recursion as Chapter 36

A single day's true range is noise. ATR is the smoothed version. Wilder used his own smoothing, which is an exponential moving average with $\\alpha = 1/N$ rather than the $2/(N+1)$ of the standard EMA in Chapter 32:

$$ATR_t = \\frac{ATR_{t-1} \\times (N-1) + TR_t}{N}$$

**This is exactly the recursion you already used for average gain and average loss in Chapter 36's RSI.** Wilder built his whole toolkit on one smoother, and knowing that saves you learning it twice. It also explains a practical fact: Wilder's ATR(14) is *slower* than an EMA(14), because $1/14 = 0.0714$ is a smaller weight than $2/15 = 0.1333$. Charting packages that quietly substitute an EMA will give you a different, faster ATR. Check which one your platform uses before calibrating a stop multiple against it.

The seed matters. The conventional seeding is a simple average of the first $N$ true ranges, after which the recursion takes over. Seed it differently and the first fifty values differ; by a few hundred bars the difference has decayed away. **Never backtest a stop rule across the seeding region.**

### ATR is not standard deviation

Chapter 38 built bands from $\\sigma$, the standard deviation of closing prices. ATR and $\\sigma$ are both volatility measures and they are not interchangeable.

| | ATR | Standard deviation $\\sigma$ |
|---|---|---|
| Input | High, low, previous close | Closes only |
| Captures gaps? | **Yes, explicitly** | **No** |
| Units | Taka per day | Taka |
| Distribution assumption | None | Implicitly normal-ish |
| Sensitive to a single spike | Moderately | Strongly (squares deviations) |

On a smooth market that never gaps, the two track each other closely and the choice hardly matters. **On a gappy market they diverge, and the divergence is exactly the risk you care about.** A stock that drifts sideways on the close but opens 4% away three times a month has a modest $\\sigma$ and a large ATR. The ATR is telling the truth about what it costs to hold overnight.

Use $\\sigma$ when you are asking *how unusual is this price* (Chapter 38's %B). Use ATR when you are asking *how much can this move against me before I can act*.

### Use 1 — the volatility-scaled stop

$$\\text{Stop} = \\text{Entry} - k \\times ATR$$

with $k$ typically between 2 and 3.5 for swing horizons.

The argument for this over a fixed percentage is decisive. **A 5% stop is a statement about your wallet, not about the stock.** On a placid utility with an ATR of 0.6% of price, 5% is more than eight daily ranges away — you will hold a losing position for weeks before it triggers, and when it does the loss is far larger than it needed to be. On a thin, volatile counter with an ATR of 8% of price, 5% is less than one daily range: **you will be stopped out by ordinary noise, repeatedly, and mistake the resulting losses for bad stock-picking.**

The volatility-scaled stop asks a coherent question instead: *how far outside normal movement must price travel before my thesis is wrong?* Two and a half ATRs is roughly "further than this stock usually goes in a day, two and a half times over." That is a falsifiable statement about the stock.

### Use 2 — position sizing, and the single most valuable equation so far

Once the stop distance is a volatility quantity, the share count follows mechanically:

$$\\text{Shares} = \\frac{\\text{Account} \\times \\text{Risk\\%}}{k \\times ATR}$$

**Read this carefully, because it inverts how most retail traders think.** The usual sequence is: decide how much money to put in, buy that many shares, then guess where the stop goes. The correct sequence is: decide how much money you are willing to *lose*, let ATR set the stop distance, and let the share count fall out of the division. **Exposure is an output of this equation, never an input.**

The consequence is that a quiet stock and a volatile stock, bought with identical taka at risk, produce very different position values — and that is the point. Chapter 49 develops this into a full position-sizing framework, including correlation between open positions and portfolio heat. **This equation is the bridge to that chapter, and it is the most valuable single formula in the book so far.** Everything in Parts I and II tells you *what* to buy. This tells you *how much*, which is the part that determines whether you are still trading next year.

### Use 3 — normalized ATR

Raw ATR is in taka and therefore incomparable across stocks. A 1.60 ATR means something very different at a price of 48 than at a price of 480. Divide it out:

$$ATR\\% = \\frac{ATR}{\\text{Price}} \\times 100$$

**This is the same normalisation argument made twice already** — PPO over raw MACD in Chapter 35, and %B over raw band distance in Chapter 38. The pattern is worth internalising: any indicator denominated in price units must be divided by price before you compare two instruments or two eras of one instrument. Normalized ATR lets you rank the whole DSE board by volatility, screen out counters too wild for your risk budget, and notice when a familiar stock has quietly doubled its typical daily movement.

### Use 4 — the Chandelier exit

A trailing stop hung from the highest high since entry:

$$\\text{Chandelier} = \\max(H_{t-n+1 \\dots t}) - k \\times ATR_t$$

with $n$ commonly 22 and $k$ commonly 3. It "hangs from the ceiling," which is where the name comes from. **It ratchets up and never down** — you take the running maximum of the computed level, so a widening ATR cannot loosen a stop that has already tightened. Targets can be set the same way: a first target at entry plus $2 \\times ATR$ scales the profit objective to what the stock actually does, rather than to a round number a human liked.

### ATR as regime information

Read the *shape* of the ATR line, not only its level.

**Contracting ATR precedes expansion.** A stock whose ATR has fallen to the bottom of its own two-year range is coiling, and the resolution — direction unknown — tends to be violent. This is the same phenomenon as Chapter 38's Bollinger squeeze and Chapter 33's consolidation range, observed through a third instrument. When three independent measures agree that volatility has compressed, they are not confirming each other; they are all measuring the same underlying fact.

The practical use is defensive: **when ATR is at multi-month lows, your ATR-based stop is at its tightest, and it is about to be tested by an expansion the indicator has not yet registered.** Size for the volatility you expect, not only the volatility you measure.

### The DSE problem — ATR is a censored measurement

Here the imported textbook fails, and it fails in a way that costs money.

**DSE circuit limits cap the observed true range.** The daily price band is a tiered percentage of the previous close, and the regulator has revised it repeatedly, including much narrower bands in stressed periods. Whatever the current band, the arithmetic consequence is fixed: **price cannot print outside it, so the measured true range cannot exceed it.** ATR on the DSE is a *censored* statistic — it observes the truncated distribution, not the real one.

The failure mode is concrete. A stock hit by bad news locks limit-down. The high equals the low equals the limit price; almost nothing trades. That day's true range is the gap term and nothing more, and the ATR barely moves. The next session it locks again. And the next. **The measured volatility stays modest while the actual loss compounds geometrically.**

State the consequence bluntly: **an ATR-based stop on the DSE can be jumped straight through.** You cannot sell at your stop price if there are no bids at your stop price. The manual block works this through — three consecutive 10% locks turn a planned 1% account risk into 3.26%, more than triple.

So ATR sizes the **normal** case, which is most days and most trades, and it does that job well. The limit-lock case must be reserved for **separately**: cap single-name exposure irrespective of what the sizing formula permits, cap sector exposure because limit moves cluster by sector, and accept that in a locked market your realised loss is set by liquidity, not by your stop order.

One further DSE distortion: **record-date price adjustments create false range spikes.** When a stock goes ex-dividend or ex-bonus, the reference price is adjusted downward mechanically. The raw close-to-close series shows a large gap; the true range calculation happily records it as volatility. It is not volatility — no wealth moved. Adjust your price series for corporate actions before computing ATR, or your stop widens for a week after every AGM for no reason at all. **The discipline of Chapter 5 applies here too: ask what compelled the number to move before you let it change your position size.**`,
      bn: `Part III-এর এখন পর্যন্ত প্রতিটি ইন্ডিকেটর ভিন্ন সুরে একই প্রশ্নের উত্তর দিতে চেয়েছে: *এটি কোন দিকে যাচ্ছে?* মুভিং অ্যাভারেজ, MACD, RSI, Bollinger Bands — সবগুলোই দিক-নির্ণয়ের যন্ত্র। **ATR তা নয়।** এটি সম্পূর্ণ ভিন্ন একটি প্রশ্নের উত্তর দেয়, আর সেটিই বেশি গুরুত্বপূর্ণ।

**ATR আপনাকে বলে এই উপকরণটি দিনে কতটা নড়ে।** ঐ একটি সংখ্যা থেকেই আসে আপনার স্টপ কোথায় বসবে, আপনি কত শেয়ার কিনতে পারবেন, আর আদৌ ট্রেডটি নেওয়ার মতো কি না। এটি কোনো সংকেত তৈরি করে না। **এটি সংকেতের আকার নির্ধারণ করে।** এ কারণেই এটি Part III-এর সবচেয়ে পরিচালনগতভাবে গুরুত্বপূর্ণ ইন্ডিকেটর অধ্যায়, আর কথাটি চাপা না দিয়ে সরাসরি বলছি: মাঝারি এন্ট্রি ও সঠিক ATR-ভিত্তিক সাইজিং নিয়ে একজন ট্রেডার টিকে যান। চমৎকার এন্ট্রি ও খেয়ালি সাইজিং নিয়ে টেকেন না।

### কেন সাধারণ দৈনিক রেঞ্জ যথেষ্ট নয়

একদিনের নড়াচড়ার সহজ পরিমাপ হলো high বিয়োগ low। এটি ভুলও, আর কারণটি সুনির্দিষ্ট।

ভাবুন একটি শেয়ার ৪৭.৪০-এ বন্ধ হলো এবং পরের সেশনে আয়ের ঘোষণায় ৪৯.৫০-এ খুলল, তারপর সারাদিন সরু ৪৯.১০–৪৯.৯০ ব্যান্ডে লেনদেন হলো। High বিয়োগ low = ০.৮০ — আপাতদৃষ্টিতে *শান্ত* দিন। কিন্তু ক্লোজ ও ওপেনের মাঝে পজিশনটি আপনার পক্ষে বা বিপক্ষে ২.১০ টাকা সরেছে। **সাধারণ রেঞ্জ দিনের ভেতরের নড়াচড়া মাপে এবং রাতের নড়াচড়ায় অন্ধ।** যে বাজার গ্যাপ দেয় — আর ডিএসই মূল্য-সংবেদনশীল ঘোষণা, রেকর্ড ডেট ও নীতি সংবাদে অনবরত গ্যাপ দেয় — সেখানে ঐ অন্ধত্ব মারাত্মক।

Welles Wilder-এর সমাধান, ১৯৭৮ সালে অধ্যায় ৩৬-এর RSI ও Parabolic SAR-এর সঙ্গে প্রকাশিত, ছিল তিনটি প্রার্থীর মধ্যে সবচেয়ে বড়টি নেওয়া:

$$TR_t = \\max\\Big( H_t - L_t, \\; |H_t - C_{t-1}|, \\; |C_{t-1} - L_t| \\Big)$$

প্রতিটি পদ নিজের জায়গা অর্জন করে:

- **$H_t - L_t$** — সাধারণ দিনের ভেতরের রেঞ্জ। গ্যাপবিহীন স্বাভাবিক সেশনে এটিই প্রাধান্য পায়।
- **$|H_t - C_{t-1}|$** — **গ্যাপ-আপ পদ**। শেয়ারটি গতকালের ক্লোজের অনেক ওপরে খুললে প্রকৃত অতিক্রান্ত দূরত্ব মাপা হয় গতকালের ক্লোজ থেকে আজকের high পর্যন্ত, আজকের low থেকে নয়।
- **$|C_{t-1} - L_t|$** — **গ্যাপ-ডাউন পদ**। প্রতিসমভাবে, গ্যাপ-ডাউনে নড়াচড়া চলে গতকালের ক্লোজ থেকে আজকের low পর্যন্ত।

তিনটি প্রার্থী একসঙ্গে নিশ্চিত করে যে **True Range হলো শেষ সম্মত দামের পর থেকে অতিক্রান্ত সম্পূর্ণ মূল্য-এলাকা**, গ্যাপসহ। উপরের উদাহরণে প্রার্থীগুলো ০.৮০, ২.৫০ ও ১.৭০; উত্তর ২.৫০, আর "শান্ত" দিনটি মোটেই শান্ত ছিল না।

### Wilder স্মুদিং — অধ্যায় ৩৬-এর একই পুনরাবৃত্তি

একদিনের true range হলো নয়েজ। ATR তার মসৃণ সংস্করণ। Wilder নিজের স্মুদিং ব্যবহার করেছেন, যা $\\alpha = 1/N$ সহ একটি সূচকীয় মুভিং অ্যাভারেজ — অধ্যায় ৩২-এর প্রমিত EMA-র $2/(N+1)$ নয়:

$$ATR_t = \\frac{ATR_{t-1} \\times (N-1) + TR_t}{N}$$

**এটি হুবহু সেই পুনরাবৃত্তি যা আপনি অধ্যায় ৩৬-এর RSI-তে গড় লাভ ও গড় ক্ষতির জন্য ব্যবহার করেছেন।** Wilder তাঁর পুরো হাতিয়ার একটি স্মুদারের ওপর গড়েছেন, আর এটি জানা থাকলে দুবার শেখা বাঁচে। এটি একটি ব্যবহারিক তথ্যও ব্যাখ্যা করে: Wilder-এর ATR(14) EMA(14)-এর চেয়ে *ধীর*, কারণ $1/14 = 0.0714$ ওজনটি $2/15 = 0.1333$-এর চেয়ে ছোট। যেসব চার্টিং প্যাকেজ নীরবে EMA বসিয়ে দেয় তারা আপনাকে ভিন্ন, দ্রুততর ATR দেবে। স্টপ গুণক ঠিক করার আগে আপনার প্ল্যাটফর্ম কোনটি ব্যবহার করে দেখে নিন।

বীজমান গুরুত্বপূর্ণ। প্রচলিত বীজ হলো প্রথম $N$টি true range-এর সরল গড়, তারপর পুনরাবৃত্তি দায়িত্ব নেয়। ভিন্নভাবে বীজ দিলে প্রথম পঞ্চাশটি মান ভিন্ন হয়; কয়েকশো বারের মধ্যে পার্থক্য মিলিয়ে যায়। **বীজ অঞ্চলজুড়ে কখনো স্টপ নিয়ম ব্যাকটেস্ট করবেন না।**

### ATR প্রমিত বিচ্যুতি নয়

অধ্যায় ৩৮ ব্যান্ড তৈরি করেছে $\\sigma$ থেকে, অর্থাৎ ক্লোজিং দামের প্রমিত বিচ্যুতি থেকে। ATR ও $\\sigma$ দুটোই অস্থিরতার পরিমাপ এবং এরা বিনিময়যোগ্য নয়।

| | ATR | প্রমিত বিচ্যুতি $\\sigma$ |
|---|---|---|
| ইনপুট | High, low, আগের close | কেবল close |
| গ্যাপ ধরে? | **হ্যাঁ, স্পষ্টভাবে** | **না** |
| একক | টাকা প্রতি দিন | টাকা |
| বণ্টনের অনুমান | নেই | পরোক্ষভাবে প্রায়-স্বাভাবিক |
| একটি স্পাইকে সংবেদনশীলতা | মাঝারি | তীব্র (বিচ্যুতির বর্গ করে) |

যে বাজার কখনো গ্যাপ দেয় না সেখানে দুটি ঘনিষ্ঠভাবে একসঙ্গে চলে এবং পছন্দ খুব একটা গুরুত্বপূর্ণ নয়। **গ্যাপযুক্ত বাজারে এরা আলাদা হয়ে যায়, আর ঐ পার্থক্যই ঠিক সেই ঝুঁকি যা নিয়ে আপনি চিন্তিত।** যে শেয়ার ক্লোজে পাশাপাশি চলে কিন্তু মাসে তিনবার ৪% দূরে খোলে তার $\\sigma$ সামান্য আর ATR বড়। ATR সত্যি কথাটি বলছে — রাতভর ধরে রাখতে কত খরচ।

*এই দাম কতটা অস্বাভাবিক* জিজ্ঞেস করার সময় $\\sigma$ ব্যবহার করুন (অধ্যায় ৩৮-এর %B)। *আমি সাড়া দেওয়ার আগে এটি আমার বিপক্ষে কতটা যেতে পারে* জিজ্ঞেস করার সময় ATR ব্যবহার করুন।

### ব্যবহার ১ — অস্থিরতা-মাপা স্টপ

$$\\text{Stop} = \\text{Entry} - k \\times ATR$$

সুইং সময়সীমায় $k$ সাধারণত ২ থেকে ৩.৫-এর মধ্যে।

নির্দিষ্ট শতাংশের বদলে এটি বেছে নেওয়ার যুক্তি চূড়ান্ত। **৫% স্টপ আপনার মানিব্যাগ সম্পর্কে একটি বক্তব্য, শেয়ারটি সম্পর্কে নয়।** দামের ০.৬% ATR-এর একটি শান্ত ইউটিলিটিতে ৫% মানে আটটিরও বেশি দৈনিক রেঞ্জ দূরে — লোকসানি পজিশন সপ্তাহের পর সপ্তাহ ধরে রাখবেন, আর যখন এটি ট্রিগার হবে তখন ক্ষতি দরকারের চেয়ে অনেক বড়। দামের ৮% ATR-এর একটি পাতলা, অস্থির কাউন্টারে ৫% একটি দৈনিক রেঞ্জেরও কম: **সাধারণ নয়েজেই আপনি বারবার স্টপ আউট হবেন, আর ফলস্বরূপ ক্ষতিকে ভুল শেয়ার বাছাই বলে ভুল করবেন।**

অস্থিরতা-মাপা স্টপ বরং একটি সংগতিপূর্ণ প্রশ্ন করে: *আমার থিসিস ভুল প্রমাণ হওয়ার আগে দামকে স্বাভাবিক নড়াচড়ার কতটা বাইরে যেতে হবে?* আড়াই ATR মোটামুটি মানে "এই শেয়ার সাধারণত একদিনে যতটা যায় তার চেয়ে বেশি, আড়াই গুণ।" এটি শেয়ারটি সম্পর্কে একটি যাচাইযোগ্য বক্তব্য।

### ব্যবহার ২ — পজিশন সাইজিং, এবং এ পর্যন্ত সবচেয়ে মূল্যবান সমীকরণ

স্টপ দূরত্ব একবার অস্থিরতার রাশি হয়ে গেলে শেয়ার সংখ্যা যান্ত্রিকভাবে আসে:

$$\\text{Shares} = \\frac{\\text{Account} \\times \\text{Risk\\%}}{k \\times ATR}$$

**এটি মনোযোগ দিয়ে পড়ুন, কারণ এটি বেশিরভাগ খুচরা ট্রেডারের চিন্তার ক্রম উল্টে দেয়।** স্বাভাবিক ক্রম হলো: কত টাকা ঢালবেন ঠিক করা, তত শেয়ার কেনা, তারপর স্টপ কোথায় বসবে আন্দাজ করা। সঠিক ক্রম হলো: কত টাকা *হারাতে* রাজি তা ঠিক করা, ATR-কে স্টপ দূরত্ব নির্ধারণ করতে দেওয়া, আর ভাগফল থেকে শেয়ার সংখ্যা বেরিয়ে আসতে দেওয়া। **এক্সপোজার এই সমীকরণের আউটপুট, কখনোই ইনপুট নয়।**

এর পরিণতি হলো একটি শান্ত ও একটি অস্থির শেয়ার, অভিন্ন টাকা ঝুঁকিতে রেখে কিনলে, খুব ভিন্ন পজিশন মূল্য দেয় — আর সেটিই উদ্দেশ্য। অধ্যায় ৪৯ এটিকে একটি পূর্ণ পজিশন-সাইজিং কাঠামোয় বিকশিত করে, যাতে খোলা পজিশনগুলোর মধ্যে সহসম্পর্ক ও পোর্টফোলিও হিট অন্তর্ভুক্ত। **এই সমীকরণই ঐ অধ্যায়ের সেতু, এবং এটি এ বইয়ের এ পর্যন্ত সবচেয়ে মূল্যবান একক সূত্র।** Part I ও II-এর সবকিছু বলে *কী* কিনবেন। এটি বলে *কতটা*, আর ঐ অংশই ঠিক করে আপনি আগামী বছর এখনো ট্রেড করছেন কি না।

### ব্যবহার ৩ — normalized ATR

কাঁচা ATR টাকায় প্রকাশিত এবং তাই শেয়ারে-শেয়ারে তুলনাযোগ্য নয়। ১.৬০ ATR ৪৮ দামে যা বোঝায় ৪৮০ দামে তা নয়। ভাগ করে দিন:

$$ATR\\% = \\frac{ATR}{\\text{Price}} \\times 100$$

**এটি সেই একই স্বাভাবিকীকরণের যুক্তি যা ইতিমধ্যে দুবার করা হয়েছে** — অধ্যায় ৩৫-এ কাঁচা MACD-র বদলে PPO, আর অধ্যায় ৩৮-এ কাঁচা ব্যান্ড-দূরত্বের বদলে %B। ধরনটি আত্মস্থ করার মতো: দামের এককে প্রকাশিত যেকোনো ইন্ডিকেটরকে দুটি উপকরণ বা একই উপকরণের দুটি সময়কাল তুলনার আগে দাম দিয়ে ভাগ করতেই হবে। Normalized ATR আপনাকে পুরো ডিএসই বোর্ডকে অস্থিরতা অনুসারে সাজাতে দেয়, আপনার ঝুঁকি বাজেটের তুলনায় বেশি বুনো কাউন্টার ছেঁটে ফেলতে দেয়, আর একটি পরিচিত শেয়ার কখন নীরবে তার স্বাভাবিক দৈনিক নড়াচড়া দ্বিগুণ করেছে তা ধরিয়ে দেয়।

### ব্যবহার ৪ — Chandelier exit

এন্ট্রির পর থেকে সর্বোচ্চ high থেকে ঝোলানো একটি ট্রেইলিং স্টপ:

$$\\text{Chandelier} = \\max(H_{t-n+1 \\dots t}) - k \\times ATR_t$$

$n$ সাধারণত ২২ আর $k$ সাধারণত ৩। এটি "ছাদ থেকে ঝোলে," নামটি সেখান থেকেই। **এটি কেবল ওপরে ওঠে, কখনো নামে না** — গণিত স্তরের চলমান সর্বোচ্চ নেওয়া হয়, তাই বাড়তে থাকা ATR ইতিমধ্যে আঁটসাঁট হওয়া স্টপকে ঢিলে করতে পারে না। লক্ষ্যও একইভাবে বসানো যায়: এন্ট্রি যোগ $2 \\times ATR$-এ প্রথম লক্ষ্য মুনাফার উদ্দেশ্যকে শেয়ারটি আসলে যা করে তার সঙ্গে মেলায়, কোনো মানুষের পছন্দের গোল সংখ্যার সঙ্গে নয়।

### ATR একটি রেজিম-তথ্য হিসেবে

ATR রেখার কেবল স্তর নয়, *আকৃতি* পড়ুন।

**সংকুচিত ATR সম্প্রসারণের আগে আসে।** যে শেয়ারের ATR নিজের দুই বছরের পরিসরের তলানিতে নেমেছে সে কুণ্ডলী পাকাচ্ছে, আর নিষ্পত্তি — দিক অজানা — সাধারণত হিংস্র হয়। এটি অধ্যায় ৩৮-এর Bollinger squeeze ও অধ্যায় ৩৩-এর consolidation range-এর একই ঘটনা, তৃতীয় একটি যন্ত্রে দেখা। যখন তিনটি স্বাধীন পরিমাপ একমত হয় যে অস্থিরতা সংকুচিত, তারা একে অন্যকে নিশ্চিত করছে না; তারা সবাই একই অন্তর্নিহিত সত্যটি মাপছে।

ব্যবহারিক প্রয়োগটি আত্মরক্ষামূলক: **যখন ATR বহু মাসের তলানিতে, আপনার ATR-ভিত্তিক স্টপ সবচেয়ে আঁটসাঁট, আর ইন্ডিকেটর এখনো নথিভুক্ত করেনি এমন এক সম্প্রসারণ তাকে পরীক্ষা করতে চলেছে।** যে অস্থিরতা মাপছেন কেবল তার নয়, যে অস্থিরতা আশা করছেন তার জন্য আকার নির্ধারণ করুন।

### ডিএসই-র সমস্যা — ATR একটি ছেঁটে দেওয়া পরিমাপ

এখানেই আমদানি করা পাঠ্যবই ব্যর্থ হয়, আর ব্যর্থ হয় এমনভাবে যা টাকা খরচ করায়।

**ডিএসই-র সার্কিট সীমা পর্যবেক্ষিত true range-কে ছেঁটে দেয়।** দৈনিক মূল্য ব্যান্ড আগের ক্লোজের একটি স্তরভিত্তিক শতাংশ, আর নিয়ন্ত্রক তা বারবার সংশোধন করেছে, চাপের সময়ে অনেক সরু ব্যান্ডসহ। বর্তমান ব্যান্ড যাই হোক, পাটিগাণিতিক পরিণতি স্থির: **দাম তার বাইরে ছাপা হতে পারে না, তাই মাপা true range তার বেশি হতে পারে না।** ডিএসই-তে ATR একটি *ছেঁটে দেওয়া* পরিসংখ্যান — এটি কাটা বণ্টন দেখে, প্রকৃতটি নয়।

ব্যর্থতার ধরনটি সুনির্দিষ্ট। খারাপ খবরে আঘাত পাওয়া একটি শেয়ার limit-down-এ আটকে যায়। High = low = সীমার দাম; প্রায় কিছুই লেনদেন হয় না। ঐ দিনের true range কেবল গ্যাপ পদ, আর কিছু নয়, আর ATR সামান্যই নড়ে। পরের সেশনে আবার আটকে যায়। এবং তার পরেরটিতেও। **মাপা অস্থিরতা সামান্য থাকে যখন প্রকৃত ক্ষতি জ্যামিতিকভাবে বাড়ে।**

পরিণতিটি সরাসরি বলুন: **ডিএসই-তে ATR-ভিত্তিক স্টপ সরাসরি ডিঙিয়ে যাওয়া যায়।** আপনার স্টপের দামে কোনো বিড না থাকলে আপনি ঐ দামে বেচতে পারবেন না। manual ব্লক এটি কষে দেখায় — পরপর তিনটি ১০% লক পরিকল্পিত ১% অ্যাকাউন্ট ঝুঁকিকে ৩.২৬%-এ নিয়ে যায়, তিন গুণেরও বেশি।

তাই ATR **স্বাভাবিক** পরিস্থিতির আকার নির্ধারণ করে, যা বেশিরভাগ দিন ও বেশিরভাগ ট্রেড, আর সে কাজটি ভালোভাবেই করে। Limit-lock পরিস্থিতির জন্য **আলাদাভাবে** সংরক্ষণ রাখতে হবে: সাইজিং সূত্র যাই অনুমোদন করুক একক-নামের এক্সপোজারে সীমা বসান, খাতভিত্তিক এক্সপোজারে সীমা বসান কারণ limit move খাত ধরে গুচ্ছবদ্ধ হয়, আর মেনে নিন যে আটকে থাকা বাজারে আপনার বাস্তবায়িত ক্ষতি নির্ধারণ করে তারল্য, আপনার স্টপ অর্ডার নয়।

আরও একটি ডিএসই বিকৃতি: **রেকর্ড-ডেটের মূল্য সমন্বয় মিথ্যা রেঞ্জ স্পাইক তৈরি করে।** শেয়ার ex-dividend বা ex-bonus হলে রেফারেন্স দাম যান্ত্রিকভাবে নিচে সমন্বয় করা হয়। কাঁচা close-to-close সিরিজ একটি বড় গ্যাপ দেখায়; true range গণনা খুশিমনে তা অস্থিরতা হিসেবে লিপিবদ্ধ করে। এটি অস্থিরতা নয় — কোনো সম্পদ নড়েনি। ATR গণনার আগে আপনার মূল্য সিরিজকে corporate action-এর জন্য সমন্বয় করুন, নইলে প্রতিটি AGM-এর পর এক সপ্তাহ ধরে আপনার স্টপ অকারণে চওড়া হবে। **অধ্যায় ৫-এর শৃঙ্খলা এখানেও প্রযোজ্য: সংখ্যাটিকে আপনার পজিশনের আকার বদলাতে দেওয়ার আগে জিজ্ঞেস করুন কী তাকে নড়তে বাধ্য করল।**`,
    },
  },

  interview: [],
  quiz: [],
};
