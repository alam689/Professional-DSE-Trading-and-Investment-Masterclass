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

    simple: {
      en: `Think about tying up a boat at a river ghat.

The water goes up and down every single day. Not because anything dramatic happened — that is simply what the river does. If you tie the rope too short, the ordinary daily tide lifts the boat, the rope goes taut, and it snaps. You lost the boat to a completely normal day.

So you leave slack. But how much? **You have to know how far the water normally moves.** Half a metre a day here, two metres a day at another ghat. The right length of rope is not a number you like; it is a number the river gives you.

**ATR is exactly that measurement for a share.** It says: this stock normally travels about BDT 1.60 in a day. Once you know that, three things stop being guesswork.

### One — where the stop goes

A stop is a rope. Put it 0.50 taka below your entry on a stock that swings 1.60 a day and it will be hit on a Tuesday when nothing at all happened. **You did not pick a bad share. You tied a short rope.**

Put the stop 4.00 taka away — two and a half normal days of movement — and only something genuinely unusual reaches it. That is the whole idea: **the stop should be further than the stock ordinarily goes, and not much further.**

### Two — how many shares you may buy

Here is the part almost everybody does backwards.

Most people decide *"I will put one lakh taka into this"* and then think about the stop afterwards. Turn it around. Decide **how much you are willing to lose** — say 8,500 taka, one percent of an 850,000 taka account. The rope is 4.00 taka long. So:

8,500 ÷ 4.00 = **2,125 shares**, rounded down to a lot of ten: **2,120 shares.**

You never chose to invest 102,184 taka. **It came out of the division.** That is the correct order, and it is the single habit that separates traders who are still here in five years from those who are not.

### Three — comparing two very different shares

BDT 1.60 a day on a 48-taka share is about 3.3% of the price. Another counter, also priced near 48, might swing 4.00 a day — 8.3%. **The second one is two and a half times wilder.** With the same 8,500 taka of risk you may buy only 850 shares of it instead of 2,120.

That is not the sheet being timid. It is the sheet refusing to let a wild stock take a bigger bite of your account than a calm one.

### Why the plain "high minus low" is not enough

Say a share closes at 47.40. Overnight there is news. Next morning it opens at 49.50 and then trades all day in a tight 49.10 to 49.90 range.

High minus low is 0.80. **Looks like a quiet day.** It was not — the price moved 2.50 taka away from where it last closed. All of the movement happened while you were asleep and could do nothing about it.

**True range fixes this by measuring from yesterday's close**, so the gap counts. On our data that day scores 2.50, not 0.80. On the DSE, where prices jump on announcements and record dates constantly, ignoring the gap means understating the danger on exactly the days that matter.

### And the warning you must not skip

Sometimes the river does not behave like a river. A cyclone comes.

On the DSE a share can hit its daily circuit limit and simply stop — no buyers at all, three days in a row. Your rope does not save you, because **you cannot sell if nobody is bidding.** In the worked case a planned 1% loss becomes **3.26%** after three locked sessions.

Worse is the opposite trap. When a share sat frozen at a floor price for months, the measured daily movement fell almost to zero. Feed that into the sizing formula and it says you may buy an enormous quantity — **385% of your account** in the illustration below. **The calmest-looking number on the screen produces the most dangerous instruction on the sheet.** ATR sizes the normal days. Keep a separate, hard limit for the days that are not normal.`,
      bn: `একটি নদীর ঘাটে নৌকা বাঁধার কথা ভাবুন।

প্রতিদিনই পানি ওঠে আর নামে। নাটকীয় কিছু ঘটেছে বলে নয় — নদী এমনটাই করে। দড়ি খুব ছোট করে বাঁধলে সাধারণ দৈনিক জোয়ার নৌকাকে তোলে, দড়ি টান টান হয়, আর ছিঁড়ে যায়। সম্পূর্ণ স্বাভাবিক একটি দিনে আপনি নৌকাটি হারালেন।

তাই আপনি ঢিল রাখেন। কিন্তু কতটা? **আপনাকে জানতে হবে পানি সাধারণত কতটা নড়ে।** এখানে দিনে আধা মিটার, অন্য ঘাটে দুই মিটার। দড়ির সঠিক দৈর্ঘ্য আপনার পছন্দের কোনো সংখ্যা নয়; এটি নদীর দেওয়া সংখ্যা।

**ATR শেয়ারের জন্য ঠিক সেই পরিমাপ।** এটি বলে: এই শেয়ার সাধারণত দিনে প্রায় ১.৬০ টাকা পথ চলে। এটি জানা হলে তিনটি জিনিস আর আন্দাজ থাকে না।

### এক — স্টপ কোথায় বসবে

স্টপ একটি দড়ি। যে শেয়ার দিনে ১.৬০ দোলে তাতে প্রবেশের ০.৫০ টাকা নিচে স্টপ বসালে কোনো এক মঙ্গলবার কিছুই না ঘটা সত্ত্বেও তা লেগে যাবে। **আপনি খারাপ শেয়ার বাছেননি। আপনি ছোট দড়ি বেঁধেছেন।**

স্টপ ৪.০০ টাকা দূরে বসান — আড়াই দিনের স্বাভাবিক চলাচল — তখন কেবল সত্যিই অস্বাভাবিক কিছুই সেখানে পৌঁছায়। পুরো ধারণাটি এটাই: **স্টপ শেয়ারটি সাধারণত যতদূর যায় তার চেয়ে দূরে হবে, আর খুব বেশি দূরে নয়।**

### দুই — আপনি কত শেয়ার কিনতে পারবেন

এই অংশটিই প্রায় সবাই উল্টো করেন।

বেশিরভাগ মানুষ ঠিক করেন *"এতে এক লাখ টাকা ঢালব"* আর স্টপের কথা ভাবেন পরে। উল্টে দিন। ঠিক করুন **কত টাকা হারাতে রাজি** — ধরুন ৮,৫০০ টাকা, ৮,৫০,০০০ টাকার অ্যাকাউন্টের এক শতাংশ। দড়ি ৪.০০ টাকা লম্বা। তাহলে:

৮,৫০০ ÷ ৪.০০ = **২,১২৫ শেয়ার**, দশের লটে নিচের দিকে গোল করে: **২,১২০ শেয়ার।**

আপনি কখনো ১,০২,১৮৪ টাকা বিনিয়োগ করার সিদ্ধান্ত নেননি। **এটি ভাগফল থেকে বেরিয়ে এসেছে।** এটিই সঠিক ক্রম, আর এই একটি অভ্যাসই পাঁচ বছর পরেও টিকে থাকা ট্রেডারদের বাকিদের থেকে আলাদা করে।

### তিন — খুব ভিন্ন দুটি শেয়ার তুলনা করা

৪৮ টাকার শেয়ারে দিনে ১.৬০ টাকা মানে দামের প্রায় ৩.৩%। ৪৮-এর কাছাকাছি দামের আরেকটি কাউন্টার হয়তো দিনে ৪.০০ দোলে — ৮.৩%। **দ্বিতীয়টি আড়াই গুণ বুনো।** একই ৮,৫০০ টাকা ঝুঁকিতে আপনি তার ২,১২০ নয়, কেবল ৮৫০ শেয়ার কিনতে পারবেন।

এটি শিটের ভীরুতা নয়। এটি শিটের অস্বীকার — একটি বুনো শেয়ারকে শান্ত শেয়ারের চেয়ে বড় কামড় বসাতে দেবে না।

### সাধারণ "high বিয়োগ low" কেন যথেষ্ট নয়

ধরুন একটি শেয়ার ৪৭.৪০-এ বন্ধ হলো। রাতে খবর এলো। পরের সকালে ৪৯.৫০-এ খুলল এবং সারাদিন আঁটসাঁট ৪৯.১০ থেকে ৪৯.৯০ পরিসরে লেনদেন হলো।

High বিয়োগ low = ০.৮০। **শান্ত দিন মনে হয়।** ছিল না — দাম শেষ ক্লোজ থেকে ২.৫০ টাকা সরেছে। পুরো নড়াচড়াটি ঘটেছে আপনি ঘুমন্ত অবস্থায়, যখন কিছুই করার ছিল না।

**True range এটি ঠিক করে গতকালের ক্লোজ থেকে মেপে**, তাই গ্যাপটি গোনা হয়। আমাদের ডেটায় ঐ দিনটির স্কোর ২.৫০, ০.৮০ নয়। ডিএসই-তে, যেখানে ঘোষণা ও রেকর্ড ডেটে দাম অনবরত লাফায়, গ্যাপ উপেক্ষা করা মানে ঠিক যে দিনগুলো গুরুত্বপূর্ণ সেই দিনগুলোতেই বিপদ কম করে দেখানো।

### আর যে সতর্কবাণী এড়ানো চলবে না

কখনো কখনো নদী নদীর মতো আচরণ করে না। ঘূর্ণিঝড় আসে।

ডিএসই-তে একটি শেয়ার দৈনিক সার্কিট সীমায় পৌঁছে থেমে যেতে পারে — কোনো ক্রেতাই নেই, পরপর তিন দিন। আপনার দড়ি আপনাকে বাঁচায় না, কারণ **কেউ বিড না করলে আপনি বেচতে পারবেন না।** কষে দেখানো ক্ষেত্রে তিনটি আটকে যাওয়া সেশনের পর পরিকল্পিত ১% ক্ষতি হয়ে যায় **৩.২৬%**।

উল্টো ফাঁদটি আরও খারাপ। যখন একটি শেয়ার মাসের পর মাস ফ্লোর প্রাইসে জমে ছিল, মাপা দৈনিক চলাচল প্রায় শূন্যে নেমেছিল। সেটি সাইজিং সূত্রে ঢোকান আর তা বলবে আপনি বিশাল পরিমাণ কিনতে পারেন — নিচের দৃষ্টান্তে **অ্যাকাউন্টের ৩৮৫%**। **পর্দার সবচেয়ে শান্ত-দেখতে সংখ্যাটিই শিটের সবচেয়ে বিপজ্জনক নির্দেশ তৈরি করে।** ATR স্বাভাবিক দিনের আকার নির্ধারণ করে। যে দিনগুলো স্বাভাবিক নয় তার জন্য আলাদা, কঠিন সীমা রাখুন।`,
    },

    example: {
      en: `### BEACONTEX again — this time we compute the 1.60

Chapter 30 built a support zone around BDT 48 on BEACONTEX and simply asserted that ATR(14) was 1.60. **This chapter earns that number.** Every figure below is constructed for teaching, not historical; BEACONTEX is used illustratively as a mid-cap DSE textile name.

Seventeen sessions of high, low and close:

| Day | High | Low | Close | H−L | \\|H−C₋₁\\| | \\|C₋₁−L\\| | **TR** |
|---|---|---|---|---|---|---|---|
| 1 | 46.30 | 45.00 | 45.80 | 1.30 | — | — | **1.30** |
| 2 | 46.40 | 45.30 | 46.10 | 1.10 | 0.60 | 0.50 | **1.10** |
| 3 | 47.20 | 45.60 | 46.90 | 1.60 | 1.10 | 0.50 | **1.60** |
| 4 | 47.60 | 46.20 | 47.40 | 1.40 | 0.70 | 0.70 | **1.40** |
| 5 | 49.90 | 49.10 | 49.70 | **0.80** | **2.50** | 1.70 | **2.50** |
| 6 | 50.30 | 49.10 | 49.60 | 1.20 | 0.60 | 0.60 | **1.20** |
| 7 | 50.20 | 48.70 | 49.00 | 1.50 | 0.60 | 0.90 | **1.50** |
| 8 | 49.75 | 48.40 | 48.90 | 1.35 | 0.75 | 0.60 | **1.35** |
| 9 | 49.60 | 48.15 | 48.60 | 1.45 | 0.70 | 0.75 | **1.45** |
| 10 | 49.40 | 47.85 | 48.10 | 1.55 | 0.80 | 0.75 | **1.55** |
| 11 | 48.70 | 47.40 | 47.60 | 1.30 | 0.60 | 0.70 | **1.30** |
| 12 | 48.40 | 46.80 | 47.20 | 1.60 | 0.80 | 0.80 | **1.60** |
| 13 | 48.10 | 46.40 | 47.80 | 1.70 | 0.90 | 0.80 | **1.70** |
| 14 | 48.50 | 47.05 | 47.90 | 1.45 | 0.70 | 0.75 | **1.45** |
| 15 | 50.80 | 49.10 | 50.40 | 1.70 | **2.90** | 1.20 | **2.90** |
| 16 | 50.70 | 48.40 | 48.60 | **2.30** | 0.30 | 2.00 | **2.30** |
| 17 | 48.95 | 48.00 | 48.20 | 0.95 | 0.35 | 0.60 | **0.95** |

**Day 5 is the case the whole indicator exists for.** The stock closed at 47.40, opened away on news, and spent the entire session inside a 0.80 band. High minus low says 0.80 — the second-quietest day in the sample. True range says 2.50, the largest of the first fourteen. **The plain range would have called the most violent day of the fortnight a nap.**

Day 16 is the mirror image and worth noticing: there the ordinary intraday range of 2.30 wins outright, because the stock opened flat and then travelled properly during the session. **The three-term maximum is not a gap correction bolted on; it selects whichever kind of movement actually happened.**

### The seed, and a small gift

The first fourteen true ranges sum to exactly 21.00:

$$ATR_{14} = \\frac{21.00}{14} = 1.500$$

Then Wilder's recursion takes over:

| Day | TR | ATR(14) | ATR% of close |
|---|---|---|---|
| 14 | 1.45 | **1.500** | 3.13% |
| 15 | 2.90 | **1.600** | 3.17% |
| 16 | 2.30 | **1.650** | 3.40% |
| 17 | 0.95 | **1.600** | 3.32% |

**Day 17 closes at 48.20 with ATR(14) = 1.600 — which is precisely the volatility Chapter 30 used to set the zone half-width of 0.400 around 48.225.** The two chapters are the same stock on the same day. That is not decoration: it means the zone width, the stop, and the share count in this chapter are all denominated in one measured quantity rather than three separate assumptions.

Notice also how gently ATR moves. Day 15 delivered a true range of 2.90, nearly double the average — and ATR rose only from 1.500 to 1.600. **One violent day shifts Wilder's ATR(14) by one-fourteenth of its surprise.** That sluggishness is the point; you are trying to measure the regime, not the last candle.

### The sizing decision, in the order it must be made

Account 850,000. Risk tolerance 1%. Entry at the day-17 close of 48.20. Multiple $k = 2.5$.

| Line | Value |
|---|---|
| Risk budget | 850,000 × 1% = **8,500** |
| ATR(14) | **1.600** |
| Stop distance | 2.5 × 1.600 = **4.000** |
| Stop price | 48.20 − 4.00 = **44.20** |
| Stop as % of entry | **8.2988%** |
| Raw share count | 8,500 ÷ 4.00 = **2,125** |
| Rounded to lot of 10 | **2,120** |
| Taka at risk | 2,120 × 4.00 = **8,480** |
| Actual risk | **0.9976%** of account |
| Position value | 2,120 × 48.20 = **102,184** |
| Exposure | **12.0216%** of account |

**Read the last two rows as the output they are.** Nobody decided to commit 102,184 taka or 12% of the account. Those numbers are the residue of a risk decision and a volatility measurement. Change either input and the exposure changes without anybody exercising judgement — which is exactly what you want, because judgement about position size is where discipline dies.

Note in passing that a 2.5-ATR stop on this share sits **8.30% below the entry**. A trader using a conventional "5% stop" would be **inside one and a half daily ranges** and would be shaken out by ordinary noise. A trader using a 15% stop would be risking nearly double what they intended on the same share count.

### The comparator that makes the argument

Now take a second counter trading at the same 48.20 but with ATR(14) = 4.00 — a thin, news-driven name of the sort the DSE has plenty of. Same account, same 1% risk, same $k$.

| | BEACONTEX | Volatile name |
|---|---|---|
| Price | 48.20 | 48.20 |
| ATR(14) | 1.600 | **4.000** |
| ATR% of price | 3.32% | **8.2988%** |
| Stop distance | 4.00 | **10.00** |
| Shares | **2,120** | **850** |
| Taka at risk | 8,480 | 8,500 |
| Position value | 102,184 | **40,970** |
| Exposure | 12.02% | **4.82%** |

The share counts stand in a ratio of **2.4941 to one**, and the exposures differ by a factor of two and a half. **Identical risk, wildly different money committed.** A trader who thinks in taka invested would have put the same 100,000 into both and taken two and a half times the risk on the wilder one without ever noticing.

There is a small arithmetic coincidence in the table worth pointing at deliberately: the quiet stock's *stop distance* is 8.2988% of its price, and the volatile stock's *ATR* is 8.2988% of its price. **A 2.5-ATR stop on BEACONTEX is exactly one daily range on the comparator.** That is what "measured in the stock's own units" means in practice.

### And now the part the textbook leaves out

Assume a 10% daily band. Suppose bad news arrives the session after entry and the share locks limit-down three days running:

$$48.20 \\times 0.90^3 = 35.1378$$

| Line | Value |
|---|---|
| Price after three locks | **35.1378** |
| Loss per share | **13.0622** |
| Position loss (2,120 shares) | **27,691.86** |
| Loss as % of account | **3.2579%** |
| Multiple of planned risk | **3.2655×** |

**The stop at 44.20 was never touched by a willing buyer.** It was jumped on the first gap and then the market simply refused to trade there. The planned 8,480 taka became 27,692 — **3.27 times the number the sheet promised.**

And look at what ATR was doing during the disaster. On a locked day the true range is the gap term: 4.82, then 4.338, then 3.9042 as the band narrows with the falling reference price. ATR climbs 1.600 → 1.830 → 2.009 → **2.145**. The measured volatility rose **34%** while the price fell **27.1%** and the loss ran to **8.16 ATRs** at the original reading. **The indicator registered a mild deterioration during a catastrophe.** It is not lying; it is measuring a censored distribution, because the exchange did not permit the real one to print.

The sheet's verdict cell says it plainly: *ATR stop can be jumped — reserve separately for limit-lock risk.*

### The failure that runs the other way, which is worse

Now the floor-price case, and this deserves your full attention because it is the one that ruins accounts rather than merely hurting them.

During the floor-price regime a share could not trade below an administered price. High, low and close printed the same number for weeks. **Every true range term goes to nearly zero.** Suppose ATR(14) decays to 0.05.

$$\\text{Stop distance} = 2.5 \\times 0.05 = 0.125, \\qquad \\text{Shares} = \\frac{8{,}500}{0.125} = 68{,}000$$

$$\\text{Position value} = 68{,}000 \\times 48.20 = 3{,}277{,}600 = \\mathbf{385.6\\%} \\text{ of the account}$$

**The formula has just instructed you to buy four times your account in a share that is not trading.** Not because the model is wrong, but because ATR sits in the *denominator*, and a denominator approaching zero sends the quotient to infinity. The stock looked like the calmest asset on the exchange right up until the floor was lifted, at which point the accumulated selling pressure discharged all at once.

**State it as a rule: never size from an ATR that was measured under an administered price.** Flag the period and exclude it, exactly as Chapter 26 taught you to flag it before drawing levels and Chapter 30 taught you to exclude those sessions before counting touches. And regardless of what the arithmetic permits, keep a hard cap on single-name exposure — in the sheet above, 12% is already at the edge of comfortable for a market this thin.`,
      bn: `### আবার BEACONTEX — এবার আমরা ১.৬০ সংখ্যাটি গণনা করব

অধ্যায় ৩০ BEACONTEX-এ ৪৮ টাকার চারপাশে একটি সাপোর্ট জোন তৈরি করেছিল এবং সহজভাবে ধরে নিয়েছিল ATR(14) = ১.৬০। **এই অধ্যায় সেই সংখ্যাটি অর্জন করে।** নিচের প্রতিটি সংখ্যা শেখানোর জন্য নির্মিত, ঐতিহাসিক নয়; BEACONTEX দৃষ্টান্তমূলকভাবে ব্যবহৃত একটি মাঝারি আকারের ডিএসই টেক্সটাইল নাম।

সতেরোটি সেশনের high, low ও close:

| দিন | High | Low | Close | H−L | \\|H−C₋₁\\| | \\|C₋₁−L\\| | **TR** |
|---|---|---|---|---|---|---|---|
| ১ | ৪৬.৩০ | ৪৫.০০ | ৪৫.৮০ | ১.৩০ | — | — | **১.৩০** |
| ২ | ৪৬.৪০ | ৪৫.৩০ | ৪৬.১০ | ১.১০ | ০.৬০ | ০.৫০ | **১.১০** |
| ৩ | ৪৭.২০ | ৪৫.৬০ | ৪৬.৯০ | ১.৬০ | ১.১০ | ০.৫০ | **১.৬০** |
| ৪ | ৪৭.৬০ | ৪৬.২০ | ৪৭.৪০ | ১.৪০ | ০.৭০ | ০.৭০ | **১.৪০** |
| ৫ | ৪৯.৯০ | ৪৯.১০ | ৪৯.৭০ | **০.৮০** | **২.৫০** | ১.৭০ | **২.৫০** |
| ৬ | ৫০.৩০ | ৪৯.১০ | ৪৯.৬০ | ১.২০ | ০.৬০ | ০.৬০ | **১.২০** |
| ৭ | ৫০.২০ | ৪৮.৭০ | ৪৯.০০ | ১.৫০ | ০.৬০ | ০.৯০ | **১.৫০** |
| ৮ | ৪৯.৭৫ | ৪৮.৪০ | ৪৮.৯০ | ১.৩৫ | ০.৭৫ | ০.৬০ | **১.৩৫** |
| ৯ | ৪৯.৬০ | ৪৮.১৫ | ৪৮.৬০ | ১.৪৫ | ০.৭০ | ০.৭৫ | **১.৪৫** |
| ১০ | ৪৯.৪০ | ৪৭.৮৫ | ৪৮.১০ | ১.৫৫ | ০.৮০ | ০.৭৫ | **১.৫৫** |
| ১১ | ৪৮.৭০ | ৪৭.৪০ | ৪৭.৬০ | ১.৩০ | ০.৬০ | ০.৭০ | **১.৩০** |
| ১২ | ৪৮.৪০ | ৪৬.৮০ | ৪৭.২০ | ১.৬০ | ০.৮০ | ০.৮০ | **১.৬০** |
| ১৩ | ৪৮.১০ | ৪৬.৪০ | ৪৭.৮০ | ১.৭০ | ০.৯০ | ০.৮০ | **১.৭০** |
| ১৪ | ৪৮.৫০ | ৪৭.০৫ | ৪৭.৯০ | ১.৪৫ | ০.৭০ | ০.৭৫ | **১.৪৫** |
| ১৫ | ৫০.৮০ | ৪৯.১০ | ৫০.৪০ | ১.৭০ | **২.৯০** | ১.২০ | **২.৯০** |
| ১৬ | ৫০.৭০ | ৪৮.৪০ | ৪৮.৬০ | **২.৩০** | ০.৩০ | ২.০০ | **২.৩০** |
| ১৭ | ৪৮.৯৫ | ৪৮.০০ | ৪৮.২০ | ০.৯৫ | ০.৩৫ | ০.৬০ | **০.৯৫** |

**দিন ৫ হলো সেই পরিস্থিতি যার জন্যই পুরো ইন্ডিকেটরটির অস্তিত্ব।** শেয়ারটি ৪৭.৪০-এ বন্ধ হয়েছিল, খবরে দূরে খুলল, আর গোটা সেশন কাটাল ০.৮০ ব্যান্ডের ভেতরে। High বিয়োগ low বলে ০.৮০ — নমুনার দ্বিতীয় শান্ততম দিন। True range বলে ২.৫০, প্রথম চোদ্দটির মধ্যে বৃহত্তম। **সাধারণ রেঞ্জ পক্ষকালের সবচেয়ে হিংস্র দিনটিকে ঘুম বলত।**

দিন ১৬ এর দর্পণ-প্রতিবিম্ব ও লক্ষ করার মতো: সেখানে দিনের ভেতরের সাধারণ রেঞ্জ ২.৩০ সরাসরি জেতে, কারণ শেয়ারটি সমতল খুলে তারপর সেশনজুড়ে সত্যিকার পথ চলেছে। **তিন-পদের সর্বোচ্চ কোনো জোড়াতালির গ্যাপ সংশোধন নয়; আসলে যে ধরনের নড়াচড়া ঘটেছে এটি সেটিই বেছে নেয়।**

### বীজমান, এবং একটি ছোট উপহার

প্রথম চোদ্দটি true range-এর যোগফল হুবহু ২১.০০:

$$ATR_{14} = \\frac{21.00}{14} = 1.500$$

তারপর Wilder-এর পুনরাবৃত্তি দায়িত্ব নেয়:

| দিন | TR | ATR(14) | ক্লোজের ATR% |
|---|---|---|---|
| ১৪ | ১.৪৫ | **১.৫০০** | ৩.১৩% |
| ১৫ | ২.৯০ | **১.৬০০** | ৩.১৭% |
| ১৬ | ২.৩০ | **১.৬৫০** | ৩.৪০% |
| ১৭ | ০.৯৫ | **১.৬০০** | ৩.৩২% |

**দিন ১৭ বন্ধ হয় ৪৮.২০-এ, ATR(14) = ১.৬০০ নিয়ে — যা ঠিক সেই অস্থিরতা যা অধ্যায় ৩০ ৪৮.২২৫-এর চারপাশে ০.৪০০ জোন অর্ধ-প্রস্থ বসাতে ব্যবহার করেছিল।** দুটি অধ্যায় একই দিনে একই শেয়ার। এটি অলংকার নয়: এর মানে এই অধ্যায়ের জোন প্রস্থ, স্টপ ও শেয়ার সংখ্যা তিনটি আলাদা অনুমান নয়, একটি মাপা রাশিতে প্রকাশিত।

আরও লক্ষ করুন ATR কত মৃদুভাবে নড়ে। দিন ১৫ দিয়েছে ২.৯০ true range, গড়ের প্রায় দ্বিগুণ — আর ATR উঠেছে কেবল ১.৫০০ থেকে ১.৬০০-তে। **একটি হিংস্র দিন Wilder-এর ATR(14)-কে তার চমকের এক-চতুর্দশাংশ নাড়ায়।** এই মন্থরতাই উদ্দেশ্য; আপনি শেষ ক্যান্ডেল নয়, রেজিম মাপতে চাইছেন।

### সাইজিং সিদ্ধান্ত, যে ক্রমে নিতে হয়

অ্যাকাউন্ট ৮,৫০,০০০। ঝুঁকি সহনশীলতা ১%। দিন ১৭-এর ক্লোজ ৪৮.২০-এ প্রবেশ। গুণক $k = 2.5$।

| লাইন | মান |
|---|---|
| ঝুঁকি বাজেট | ৮,৫০,০০০ × ১% = **৮,৫০০** |
| ATR(14) | **১.৬০০** |
| স্টপ দূরত্ব | ২.৫ × ১.৬০০ = **৪.০০০** |
| স্টপ দাম | ৪৮.২০ − ৪.০০ = **৪৪.২০** |
| প্রবেশের শতাংশ হিসেবে স্টপ | **৮.২৯৮৮%** |
| কাঁচা শেয়ার সংখ্যা | ৮,৫০০ ÷ ৪.০০ = **২,১২৫** |
| দশের লটে গোল করা | **২,১২০** |
| ঝুঁকিতে টাকা | ২,১২০ × ৪.০০ = **৮,৪৮০** |
| প্রকৃত ঝুঁকি | অ্যাকাউন্টের **০.৯৯৭৬%** |
| পজিশন মূল্য | ২,১২০ × ৪৮.২০ = **১,০২,১৮৪** |
| এক্সপোজার | অ্যাকাউন্টের **১২.০২১৬%** |

**শেষ দুটি সারি যা, অর্থাৎ আউটপুট, সেভাবেই পড়ুন।** কেউ ১,০২,১৮৪ টাকা বা অ্যাকাউন্টের ১২% বসানোর সিদ্ধান্ত নেয়নি। ঐ সংখ্যাগুলো একটি ঝুঁকি-সিদ্ধান্ত ও একটি অস্থিরতা-পরিমাপের অবশেষ। যেকোনো একটি ইনপুট বদলান আর কারো বিচারবুদ্ধি প্রয়োগ ছাড়াই এক্সপোজার বদলাবে — আর ঠিক এটিই আপনি চান, কারণ পজিশনের আকার নিয়ে বিচারবুদ্ধির জায়গাতেই শৃঙ্খলা মরে।

প্রসঙ্গত লক্ষ করুন, এই শেয়ারে ২.৫-ATR স্টপ বসে **প্রবেশের ৮.৩০% নিচে**। প্রচলিত "৫% স্টপ" ব্যবহারকারী একজন ট্রেডার থাকবেন **দেড়টি দৈনিক রেঞ্জের ভেতরে** এবং সাধারণ নয়েজেই ঝেড়ে ফেলা হবেন। ১৫% স্টপ ব্যবহারকারী একই শেয়ার সংখ্যায় উদ্দেশ্যের প্রায় দ্বিগুণ ঝুঁকি নেবেন।

### যে তুলনাটি যুক্তিটি প্রতিষ্ঠা করে

এবার একই ৪৮.২০-তে লেনদেন হওয়া দ্বিতীয় একটি কাউন্টার নিন, কিন্তু ATR(14) = ৪.০০ — ডিএসই-তে যার প্রচুর আছে এমন একটি পাতলা, সংবাদ-চালিত নাম। একই অ্যাকাউন্ট, একই ১% ঝুঁকি, একই $k$।

| | BEACONTEX | অস্থির নাম |
|---|---|---|
| দাম | ৪৮.২০ | ৪৮.২০ |
| ATR(14) | ১.৬০০ | **৪.০০০** |
| দামের ATR% | ৩.৩২% | **৮.২৯৮৮%** |
| স্টপ দূরত্ব | ৪.০০ | **১০.০০** |
| শেয়ার | **২,১২০** | **৮৫০** |
| ঝুঁকিতে টাকা | ৮,৪৮০ | ৮,৫০০ |
| পজিশন মূল্য | ১,০২,১৮৪ | **৪০,৯৭০** |
| এক্সপোজার | ১২.০২% | **৪.৮২%** |

শেয়ার সংখ্যা দুটির অনুপাত **২.৪৯৪১ঃ১**, আর এক্সপোজার আড়াই গুণ আলাদা। **অভিন্ন ঝুঁকি, তীব্রভাবে ভিন্ন বসানো টাকা।** যে ট্রেডার বিনিয়োজিত টাকায় ভাবেন তিনি দুটিতেই একই ১,০০,০০০ ঢালতেন এবং বুনোটিতে আড়াই গুণ ঝুঁকি নিতেন, কখনো টেরই না পেয়ে।

সারণিতে একটি ছোট পাটিগাণিতিক কাকতালীয় ব্যাপার আছে যা ইচ্ছা করেই দেখিয়ে দিচ্ছি: শান্ত শেয়ারটির *স্টপ দূরত্ব* তার দামের ৮.২৯৮৮%, আর অস্থির শেয়ারটির *ATR* তার দামের ৮.২৯৮৮%। **BEACONTEX-এ একটি ২.৫-ATR স্টপ কম্পারেটরে হুবহু একটি দৈনিক রেঞ্জ।** বাস্তবে "শেয়ারের নিজস্ব এককে মাপা" বলতে এটাই বোঝায়।

### আর এখন যে অংশটি পাঠ্যবই বাদ দেয়

১০% দৈনিক ব্যান্ড ধরুন। ধরুন প্রবেশের পরের সেশনেই খারাপ খবর আসে ও শেয়ারটি পরপর তিন দিন limit-down-এ আটকে যায়:

$$48.20 \\times 0.90^3 = 35.1378$$

| লাইন | মান |
|---|---|
| তিনটি লকের পর দাম | **৩৫.১৩৭৮** |
| প্রতি শেয়ারে ক্ষতি | **১৩.০৬২২** |
| পজিশনের ক্ষতি (২,১২০ শেয়ার) | **২৭,৬৯১.৮৬** |
| অ্যাকাউন্টের শতাংশে ক্ষতি | **৩.২৫৭৯%** |
| পরিকল্পিত ঝুঁকির গুণিতক | **৩.২৬৫৫×** |

**৪৪.২০-এর স্টপে কোনো ইচ্ছুক ক্রেতা কখনো পৌঁছাননি।** প্রথম গ্যাপেই তা ডিঙানো হয়েছে আর তারপর বাজার সেখানে লেনদেনই করতে অস্বীকার করেছে। পরিকল্পিত ৮,৪৮০ টাকা হয়েছে ২৭,৬৯২ — শিটের প্রতিশ্রুত সংখ্যার **৩.২৭ গুণ**।

আর দুর্যোগের সময় ATR কী করছিল দেখুন। আটকে যাওয়া দিনে true range হলো গ্যাপ পদ: ৪.৮২, তারপর ৪.৩৩৮, তারপর ৩.৯০৪২ — পড়তে থাকা রেফারেন্স দামের সঙ্গে ব্যান্ড সরু হওয়ায়। ATR ওঠে ১.৬০০ → ১.৮৩০ → ২.০০৯ → **২.১৪৫**। মাপা অস্থিরতা বেড়েছে **৩৪%** যখন দাম পড়েছে **২৭.১%** আর ক্ষতি দাঁড়িয়েছে মূল পাঠে **৮.১৬ ATR**। **একটি বিপর্যয়ের সময় ইন্ডিকেটর একটি মৃদু অবনতি নথিভুক্ত করেছে।** এটি মিথ্যা বলছে না; এটি একটি ছেঁটে দেওয়া বণ্টন মাপছে, কারণ এক্সচেঞ্জ প্রকৃতটিকে ছাপতে দেয়নি।

শিটের রায় ঘর সরাসরি বলে: *ATR stop can be jumped — reserve separately for limit-lock risk।*

### যে ব্যর্থতা উল্টো দিকে চলে, আর তা আরও খারাপ

এবার ফ্লোর-প্রাইসের পরিস্থিতি, আর এটি আপনার পূর্ণ মনোযোগ দাবি করে কারণ এটিই অ্যাকাউন্ট কেবল আহত নয়, ধ্বংস করে।

ফ্লোর-প্রাইস ব্যবস্থার সময় একটি শেয়ার প্রশাসিত দামের নিচে লেনদেন করতে পারত না। High, low ও close সপ্তাহের পর সপ্তাহ একই সংখ্যা ছাপত। **প্রতিটি true range পদ প্রায় শূন্যে যায়।** ধরুন ATR(14) ক্ষয়ে ০.০৫-এ নামল।

$$\\text{Stop distance} = 2.5 \\times 0.05 = 0.125, \\qquad \\text{Shares} = \\frac{8{,}500}{0.125} = 68{,}000$$

$$\\text{Position value} = 68{,}000 \\times 48.20 = 3{,}277{,}600 = \\mathbf{385.6\\%} \\text{ (অ্যাকাউন্টের)}$$

**সূত্রটি সবেমাত্র আপনাকে নির্দেশ দিল একটি অ-লেনদেনরত শেয়ারে আপনার অ্যাকাউন্টের চার গুণ কিনতে।** মডেল ভুল বলে নয়, বরং ATR *হরে* বসে, আর শূন্যের দিকে যাওয়া হর ভাগফলকে অসীমে পাঠায়। ফ্লোর তোলার ঠিক আগ পর্যন্ত শেয়ারটিকে এক্সচেঞ্জের শান্ততম সম্পদ মনে হয়েছে, আর তারপর জমে থাকা বিক্রয়চাপ একসঙ্গে নিঃসৃত হয়েছে।

**নিয়ম হিসেবে বলুন: প্রশাসিত দামের অধীনে মাপা ATR থেকে কখনো আকার নির্ধারণ করবেন না।** সময়কালটি চিহ্নিত করে বাদ দিন, ঠিক যেমন অধ্যায় ২৬ লেভেল আঁকার আগে চিহ্নিত করতে শিখিয়েছে ও অধ্যায় ৩০ টাচ গোনার আগে ঐ সেশনগুলো বাদ দিতে শিখিয়েছে। আর পাটিগণিত যাই অনুমোদন করুক, একক-নামের এক্সপোজারে কঠিন সীমা রাখুন — ওপরের শিটে ১২% এতটা পাতলা বাজারের জন্য ইতিমধ্যেই স্বস্তির প্রান্তে।`,
    },

    formula: {
      en: `### 1. True Range — three candidates, and why the last two exist

$$TR_t = \\max\\Big( H_t - L_t, \\;\\; |H_t - C_{t-1}|, \\;\\; |C_{t-1} - L_t| \\Big)$$

The first term is the obvious one. The other two exist because **the last price everyone agreed on was yesterday's close, and any distance travelled from there is real distance whether or not the exchange was open while it happened.**

- $|H_t - C_{t-1}|$ is the **gap-up** term. It binds when the session opens above yesterday's close: the journey ran from $C_{t-1}$ up to $H_t$, and $L_t$ is irrelevant because price never went there.
- $|C_{t-1} - L_t|$ is the **gap-down** term. Symmetric.

On day 5 of the worked data the candidates are $0.80,\\; 2.50,\\; 1.70$ and the answer is **2.50**. On day 16 they are $2.30,\\; 0.30,\\; 2.00$ and the plain range wins. **The maximum operator is a selector, not a correction.**

Two consequences follow immediately. $TR_t \\ge H_t - L_t$ always, so **using high−low can only ever understate volatility, never overstate it** — a bias that is silent, one-directional, and largest on precisely the gappy names where you need the number most. And $TR_t \\ge 0$ with equality only when nothing moved and there was no gap, which on the DSE happens on a floor-locked share.

Day 1 has no $C_{t-1}$, so its true range is the plain range, 1.30. **Every series has one contaminated first bar; it is why the seed of a 14-period ATR should not be trusted to three decimals.**

### 2. Wilder smoothing, and its effective period

$$ATR_t = \\frac{(N-1)\\,ATR_{t-1} + TR_t}{N} = ATR_{t-1} + \\frac{1}{N}\\big(TR_t - ATR_{t-1}\\big)$$

with the conventional seed

$$ATR_N = \\frac{1}{N}\\sum_{i=1}^{N} TR_i$$

The second form is the useful one: **each new bar moves ATR by one-Nth of its own surprise.** On day 15 the surprise was $2.90 - 1.500 = 1.40$, one-fourteenth of which is 0.10, and ATR went from 1.500 to exactly 1.600.

Wilder's smoother is an EMA with $\\alpha = 1/N$. The standard EMA of Chapter 32 uses $\\alpha = 2/(N+1)$. Equating the two gives the **effective period**:

$$\\frac{1}{N_{\\text{Wilder}}} = \\frac{2}{N_{\\text{EMA}}+1} \\;\\Longrightarrow\\; N_{\\text{EMA}} = 2N_{\\text{Wilder}} - 1 = 27$$

**Wilder's ATR(14) behaves like an EMA(27), not an EMA(14).** Its centre of mass is $(1-\\alpha)/\\alpha = 13$ bars. A platform that silently substitutes an EMA(14) will hand you a materially faster series: on this data it returns **1.6593** on day 17 instead of 1.600, which moves the stop distance from 4.000 to 4.148 and the share count from 2,120 to **2,040**. Four percent of your position size, decided by a menu setting you never opened.

Seed influence decays as $(1-1/N)^m$. After fifty bars $(13/14)^{50} = 0.0246$ — 2.5% of the reading still comes from the seed; after a hundred bars, 0.06%. **Do not backtest a stop rule inside the first fifty bars of a series.**

### 3. ATR as the denominator of position size

$$\\text{Stop distance } S = k \\cdot ATR, \\qquad \\text{Risk budget } B = A \\cdot r$$

$$\\boxed{\\;Q = \\left\\lfloor \\frac{A \\cdot r}{k \\cdot ATR} \\right\\rfloor_{\\text{lot}}\\;}$$

where $A$ is account equity, $r$ the fractional risk per trade and the floor is to the tradeable lot. The worked case: $Q = \\lfloor 8{,}500 / 4.00 \\rfloor_{10} = \\lfloor 2{,}125 \\rfloor_{10} = 2{,}120$.

**Exposure is what falls out, not what you choose:**

$$V = Q \\cdot P = 102{,}184, \\qquad \\frac{V}{A} = 12.0216\\%$$

Two properties are worth stating explicitly because they are the entire argument for the method.

**Taka at risk is invariant to volatility; taka committed is not.** Substituting $S = k\\,ATR$ into $Q \\cdot S$ gives $A \\cdot r$ regardless of ATR. But $V = Q \\cdot P = A r P / (k\\,ATR)$ scales as $1/ATR$. Hence the comparator: doubling-and-a-half the ATR divides the share count by the same factor, $2{,}120 / 850 = 2.4941$.

**And the denominator is the danger.** $\\partial Q / \\partial ATR = -Ar/(k\\,ATR^2)$ — the sensitivity blows up as ATR falls. At $ATR = 1.60$ a one-paisa error in ATR moves the share count by about 13 shares. At $ATR = 0.05$ the same one-paisa error moves it by **13,600 shares.** This is not an abstraction; it is the floor-price case, where $Q = 8{,}500/0.125 = 68{,}000$ and $V/A = 385.6\\%$. **Always bound $Q$ by an independent exposure cap. A formula with a vanishing denominator must never be the only thing between you and an order.**

### 4. ATR-based stops and trailing exits

$$X_{\\text{long}} = E - k\\,ATR, \\qquad X_{\\text{short}} = E + k\\,ATR, \\qquad k \\in [2, 3.5]$$

The stop as a percentage of entry is $k\\,ATR/P$, which on BEACONTEX is $4.00/48.20 = 8.2988\\%$. **Note that this is an output, not a choice** — the whole point is that you never picked 8.3%.

The Chandelier trailing exit hangs from the running high:

$$\\text{Ch}_t = \\max_{t-n+1 \\le i \\le t} H_i - k\\,ATR_t, \\qquad \\text{Stop}_t = \\max\\big(\\text{Stop}_{t-1},\\, \\text{Ch}_t\\big)$$

The outer maximum is not optional. Without it a rising ATR **loosens** a stop that has already tightened, which is backwards: volatility expanding against you is a reason to be nearer the exit, not further from it. In the sheet, K18:K20 read 46.000, 45.850, 46.000 — the raw Chandelier *fell* on day 16 because ATR rose to 1.650 while the 22-day high stayed at 50.80. **Ratcheted, the stop stays at 46.000.**

Targets take the same form, $T = E + m\\,ATR$, so a 2-ATR first target on BEACONTEX is 51.40 and the resulting R:R against a 2.5-ATR stop is $2/2.5 = 0.80$ — **which tells you immediately that a 2-ATR target behind a 2.5-ATR stop needs a 55.6% hit rate and is a bad structure.** Chapter 30's polarity retest achieved 3.35 R:R precisely because the invalidation was close, not because the target was far.

### 5. Normalising for cross-instrument comparison

$$ATR\\%_t = \\frac{ATR_t}{P_t} \\times 100$$

Raw ATR is in taka per day and is therefore meaningless across instruments: 1.60 is a wild day at a price of 20 and a rounding error at a price of 900. Normalised, BEACONTEX reads **3.3195%** and the comparator **8.2988%**.

**This is the third appearance of the same argument** — PPO over MACD in Chapter 35, %B over raw band distance in Chapter 38, ATR% over ATR here. The general rule: *any indicator denominated in price units must be divided by price before comparing two instruments, or one instrument across two price regimes.* A stock that ran from 40 to 400 has an ATR ten times larger and is not necessarily any more volatile.

Normalised ATR also gives you a screen. Rank the board, and if your risk budget cannot survive a 2.5-ATR stop on an 11% ATR name at a sensible exposure, the name is simply not for you — **that is a decision made before the chart is opened, which is the best time to make it.**

### 6. Why ATR is direction-blind, and what that costs

$TR_t$ is a maximum of absolute distances. Reflect the price series about any horizontal line and every high becomes a low, every gap up becomes a gap down, and **every true range is unchanged.** A share rising 1.60 a day and a share collapsing 1.60 a day have identical ATR.

This is a feature and a limitation.

**The feature:** ATR can be used in both directions of a trade and in every regime without recalibration, and it composes cleanly with any directional indicator you like. Chapters 30 through 36 could use ATR as the unit of measurement — zone widths, band widths, stop distances, penetration thresholds — precisely because it carries no directional opinion of its own to contaminate theirs.

**The limitation:** rising ATR is not bearish. It is common to read expanding volatility as a warning, and on the DSE, where declines are typically faster than advances, the association is often true in practice — but it is not in the formula. If you need direction, take it from Chapters 31 to 35 and let ATR do only the sizing.

The practical form of the limitation: an ATR-scaled stop is symmetric while the market is not. **On the DSE there is no reliable short side**, so the down-gap that the gap-down term dutifully measures is a risk you can only avoid by not holding, never one you can monetise. **ATR measures both tails; you can only trade one of them.**

### 7. The censoring correction, stated as arithmetic

Let $b$ be the daily band as a fraction of the previous close. Then

$$TR_t \\le b \\cdot C_{t-1} \\quad \\text{always}, \\qquad \\text{and on a locked session } TR_t = b \\cdot C_{t-1} \\text{ exactly.}$$

**The measured ATR is an estimate of $\\min(\\text{true range}, \\text{band})$, not of the true range.** It is biased downward, and the bias is largest exactly when realised volatility is highest — the worst possible property for a risk statistic.

Three locks at $b = 10\\%$ from 48.20:

$$P_3 = 48.20 \\times 0.9^3 = 35.1378, \\qquad \\text{loss/share} = 13.0622 = 8.16\\,ATR$$

$$\\text{Loss} = 2{,}120 \\times 13.0622 = 27{,}691.86 = 3.2579\\% \\text{ of account} = 3.2655 \\times \\text{planned risk}$$

Meanwhile the ATR series over those three sessions runs $1.600 \\to 1.830 \\to 2.009 \\to 2.145$: **up 34% while the position lost 27.1%.** Reserve for this case with a hard exposure cap and a sector cap — never with a larger $k$, which merely widens the stop that is not going to fill anyway while shrinking the position you take on the ninety-eight percent of days that behave normally.`,
      bn: `### ১. True Range — তিনটি প্রার্থী, আর শেষ দুটি কেন আছে

$$TR_t = \\max\\Big( H_t - L_t, \\;\\; |H_t - C_{t-1}|, \\;\\; |C_{t-1} - L_t| \\Big)$$

প্রথম পদটি স্পষ্ট। বাকি দুটি আছে কারণ **সবাই শেষ যে দামে একমত হয়েছিলেন তা গতকালের ক্লোজ, আর সেখান থেকে অতিক্রান্ত যেকোনো দূরত্ব প্রকৃত দূরত্ব — তা ঘটার সময় এক্সচেঞ্জ খোলা ছিল কি না নির্বিশেষে।**

- $|H_t - C_{t-1}|$ হলো **গ্যাপ-আপ** পদ। সেশন গতকালের ক্লোজের ওপরে খুললে এটি কার্যকর হয়: যাত্রা চলেছে $C_{t-1}$ থেকে $H_t$ পর্যন্ত, আর $L_t$ অপ্রাসঙ্গিক কারণ দাম সেখানে কখনো যায়নি।
- $|C_{t-1} - L_t|$ হলো **গ্যাপ-ডাউন** পদ। প্রতিসম।

কষে দেখানো ডেটার দিন ৫-এ প্রার্থীগুলো $0.80,\\; 2.50,\\; 1.70$ আর উত্তর **২.৫০**। দিন ১৬-তে সেগুলো $2.30,\\; 0.30,\\; 2.00$ আর সাধারণ রেঞ্জ জেতে। **সর্বোচ্চ অপারেটরটি একটি নির্বাচক, সংশোধনী নয়।**

দুটি পরিণতি সঙ্গে সঙ্গে আসে। সবসময় $TR_t \\ge H_t - L_t$, তাই **high−low ব্যবহার করলে অস্থিরতা কেবল কম দেখানো সম্ভব, বেশি নয়** — এমন একটি পক্ষপাত যা নীরব, এক-মুখী, আর সবচেয়ে বড় ঠিক সেই গ্যাপযুক্ত নামগুলোতে যেখানে সংখ্যাটি আপনার সবচেয়ে বেশি দরকার। আর $TR_t \\ge 0$, সমতা কেবল তখনই যখন কিছুই নড়েনি ও কোনো গ্যাপ ছিল না — ডিএসই-তে যা ঘটে ফ্লোরে আটকে থাকা শেয়ারে।

দিন ১-এ কোনো $C_{t-1}$ নেই, তাই তার true range সাধারণ রেঞ্জ, ১.৩০। **প্রতিটি সিরিজের একটি দূষিত প্রথম বার থাকে; এ কারণেই ১৪-পর্বের ATR-এর বীজমানকে তিন দশমিক ঘর পর্যন্ত বিশ্বাস করা উচিত নয়।**

### ২. Wilder স্মুদিং, আর তার কার্যকর পর্ব

$$ATR_t = \\frac{(N-1)\\,ATR_{t-1} + TR_t}{N} = ATR_{t-1} + \\frac{1}{N}\\big(TR_t - ATR_{t-1}\\big)$$

প্রচলিত বীজমানসহ

$$ATR_N = \\frac{1}{N}\\sum_{i=1}^{N} TR_i$$

দ্বিতীয় রূপটিই কাজের: **প্রতিটি নতুন বার ATR-কে তার নিজের চমকের এক-N-তম অংশ নাড়ায়।** দিন ১৫-তে চমক ছিল $2.90 - 1.500 = 1.40$, যার এক-চতুর্দশাংশ ০.১০, আর ATR ১.৫০০ থেকে হুবহু ১.৬০০ হয়েছে।

Wilder-এর স্মুদার $\\alpha = 1/N$ সহ একটি EMA। অধ্যায় ৩২-এর প্রমিত EMA ব্যবহার করে $\\alpha = 2/(N+1)$। দুটি সমান ধরলে **কার্যকর পর্ব** পাওয়া যায়:

$$\\frac{1}{N_{\\text{Wilder}}} = \\frac{2}{N_{\\text{EMA}}+1} \\;\\Longrightarrow\\; N_{\\text{EMA}} = 2N_{\\text{Wilder}} - 1 = 27$$

**Wilder-এর ATR(14) EMA(14) নয়, EMA(27)-এর মতো আচরণ করে।** এর ভরকেন্দ্র $(1-\\alpha)/\\alpha = 13$ বার। যে প্ল্যাটফর্ম নীরবে EMA(14) বসিয়ে দেয় তা আপনাকে উল্লেখযোগ্যভাবে দ্রুততর সিরিজ দেবে: এই ডেটায় দিন ১৭-তে তা ১.৬০০-এর বদলে **১.৬৫৯৩** ফেরত দেয়, যা স্টপ দূরত্ব ৪.০০০ থেকে ৪.১৪৮-এ ও শেয়ার সংখ্যা ২,১২০ থেকে **২,০৪০**-এ নেয়। আপনার পজিশন আকারের চার শতাংশ, এমন একটি মেনু সেটিং দিয়ে নির্ধারিত যা আপনি কখনো খোলেননি।

বীজের প্রভাব $(1-1/N)^m$ হারে ক্ষয় হয়। পঞ্চাশ বারের পর $(13/14)^{50} = 0.0246$ — পাঠের ২.৫% এখনো বীজ থেকে আসে; একশো বারের পর ০.০৬%। **একটি সিরিজের প্রথম পঞ্চাশ বারের ভেতরে স্টপ নিয়ম ব্যাকটেস্ট করবেন না।**

### ৩. পজিশন আকারের হর হিসেবে ATR

$$\\text{Stop distance } S = k \\cdot ATR, \\qquad \\text{Risk budget } B = A \\cdot r$$

$$\\boxed{\\;Q = \\left\\lfloor \\frac{A \\cdot r}{k \\cdot ATR} \\right\\rfloor_{\\text{lot}}\\;}$$

যেখানে $A$ অ্যাকাউন্ট ইকুইটি, $r$ প্রতি ট্রেডে ভগ্নাংশ ঝুঁকি, আর floor নেওয়া হয় লেনদেনযোগ্য লটে। কষে দেখানো ক্ষেত্রে: $Q = \\lfloor 8{,}500 / 4.00 \\rfloor_{10} = \\lfloor 2{,}125 \\rfloor_{10} = 2{,}120$।

**এক্সপোজার যা বেরিয়ে আসে, যা আপনি বাছেন তা নয়:**

$$V = Q \\cdot P = 102{,}184, \\qquad \\frac{V}{A} = 12.0216\\%$$

দুটি ধর্ম স্পষ্টভাবে বলা দরকার কারণ পদ্ধতিটির পুরো যুক্তি সেখানেই।

**ঝুঁকিতে থাকা টাকা অস্থিরতা-নিরপেক্ষ; বসানো টাকা নয়।** $Q \\cdot S$-এ $S = k\\,ATR$ বসালে ATR নির্বিশেষে ফল $A \\cdot r$। কিন্তু $V = Q \\cdot P = A r P / (k\\,ATR)$ চলে $1/ATR$ হারে। তাই কম্পারেটর: ATR আড়াই গুণ করলে শেয়ার সংখ্যা একই গুণকে ভাগ হয়, $2{,}120 / 850 = 2.4941$।

**আর হরটিই বিপদ।** $\\partial Q / \\partial ATR = -Ar/(k\\,ATR^2)$ — ATR কমলে সংবেদনশীলতা বিস্ফোরিত হয়। $ATR = 1.60$-এ ATR-এ এক পয়সার ভুল শেয়ার সংখ্যা প্রায় ১৩ নাড়ায়। $ATR = 0.05$-এ ঐ একই এক পয়সার ভুল তা **১৩,৬০০ শেয়ার** নাড়ায়। এটি বিমূর্ত নয়; এটিই ফ্লোর-প্রাইসের পরিস্থিতি, যেখানে $Q = 8{,}500/0.125 = 68{,}000$ আর $V/A = 385.6\\%$। **সর্বদা একটি স্বাধীন এক্সপোজার সীমা দিয়ে $Q$ বেঁধে দিন। যে সূত্রের হর অদৃশ্য হয়ে যেতে পারে তা কখনোই আপনার ও একটি অর্ডারের মাঝে একমাত্র জিনিস হতে পারে না।**

### ৪. ATR-ভিত্তিক স্টপ ও ট্রেইলিং প্রস্থান

$$X_{\\text{long}} = E - k\\,ATR, \\qquad X_{\\text{short}} = E + k\\,ATR, \\qquad k \\in [2, 3.5]$$

প্রবেশের শতাংশ হিসেবে স্টপ $k\\,ATR/P$, যা BEACONTEX-এ $4.00/48.20 = 8.2988\\%$। **লক্ষ করুন এটি একটি আউটপুট, পছন্দ নয়** — পুরো কথাটিই হলো আপনি ৮.৩% কখনো বাছেননি।

Chandelier ট্রেইলিং প্রস্থান চলমান high থেকে ঝোলে:

$$\\text{Ch}_t = \\max_{t-n+1 \\le i \\le t} H_i - k\\,ATR_t, \\qquad \\text{Stop}_t = \\max\\big(\\text{Stop}_{t-1},\\, \\text{Ch}_t\\big)$$

বাইরের সর্বোচ্চটি ঐচ্ছিক নয়। এটি ছাড়া বাড়তে থাকা ATR ইতিমধ্যে আঁটসাঁট হওয়া স্টপকে **ঢিলে** করে, যা উল্টো: আপনার বিপক্ষে অস্থিরতার সম্প্রসারণ প্রস্থানের কাছে থাকার কারণ, দূরে যাওয়ার নয়। শিটে K18:K20 পড়ে ৪৬.০০০, ৪৫.৮৫০, ৪৬.০০০ — কাঁচা Chandelier দিন ১৬-তে *নেমেছে* কারণ ATR ১.৬৫০-এ উঠেছে যখন ২২-দিনের high ৫০.৮০-তেই ছিল। **র‌্যাচেট করা হলে স্টপ ৪৬.০০০-এই থাকে।**

লক্ষ্যও একই রূপ নেয়, $T = E + m\\,ATR$, তাই BEACONTEX-এ ২-ATR প্রথম লক্ষ্য ৫১.৪০ আর ২.৫-ATR স্টপের বিপরীতে ফলিত R:R $2/2.5 = 0.80$ — **যা তৎক্ষণাৎ বলে দেয় ২.৫-ATR স্টপের পেছনে ২-ATR লক্ষ্যের জন্য ৫৫.৬% হিট রেট দরকার এবং এটি একটি খারাপ কাঠামো।** অধ্যায় ৩০-এর পোলারিটি রিটেস্ট ৩.৩৫ R:R পেয়েছিল ঠিক এ কারণেই যে ইনভ্যালিডেশন কাছে ছিল, লক্ষ্য দূরে ছিল বলে নয়।

### ৫. উপকরণে-উপকরণে তুলনার জন্য স্বাভাবিকীকরণ

$$ATR\\%_t = \\frac{ATR_t}{P_t} \\times 100$$

কাঁচা ATR টাকা-প্রতি-দিনে প্রকাশিত এবং তাই উপকরণজুড়ে অর্থহীন: ২০ দামে ১.৬০ একটি বুনো দিন আর ৯০০ দামে গোল করার ভুল। স্বাভাবিকীকৃত হলে BEACONTEX পড়ে **৩.৩১৯৫%** আর কম্পারেটর **৮.২৯৮৮%**।

**এটি একই যুক্তির তৃতীয় আবির্ভাব** — অধ্যায় ৩৫-এ MACD-র বদলে PPO, অধ্যায় ৩৮-এ কাঁচা ব্যান্ড-দূরত্বের বদলে %B, আর এখানে ATR-এর বদলে ATR%। সাধারণ নিয়ম: *দামের এককে প্রকাশিত যেকোনো ইন্ডিকেটরকে দুটি উপকরণ, বা একটি উপকরণের দুটি মূল্য-যুগ তুলনার আগে দাম দিয়ে ভাগ করতে হবে।* যে শেয়ার ৪০ থেকে ৪০০-তে গেছে তার ATR দশ গুণ বড় আর সে অগত্যা এতটুকুও বেশি অস্থির নয়।

স্বাভাবিকীকৃত ATR আপনাকে একটি স্ক্রিনও দেয়। বোর্ড সাজান, আর যদি আপনার ঝুঁকি বাজেট ১১% ATR-এর একটি নামে যুক্তিসংগত এক্সপোজারে ২.৫-ATR স্টপ সহ্য করতে না পারে, নামটি আপনার জন্য নয় — **এই সিদ্ধান্ত চার্ট খোলার আগেই নেওয়া, আর সেটিই নেওয়ার সেরা সময়।**

### ৬. ATR কেন দিক-অন্ধ, আর তার মূল্য কী

$TR_t$ হলো পরম দূরত্বের একটি সর্বোচ্চ। যেকোনো অনুভূমিক রেখার সাপেক্ষে মূল্য সিরিজ প্রতিফলিত করুন — প্রতিটি high হবে low, প্রতিটি গ্যাপ-আপ হবে গ্যাপ-ডাউন, আর **প্রতিটি true range অপরিবর্তিত থাকবে।** দিনে ১.৬০ বাড়া শেয়ার আর দিনে ১.৬০ ধসা শেয়ারের ATR অভিন্ন।

এটি একই সঙ্গে একটি সুবিধা ও একটি সীমাবদ্ধতা।

**সুবিধা:** ATR ট্রেডের দুই দিকেই ও প্রতিটি রেজিমে পুনঃক্রমাঙ্কন ছাড়া ব্যবহার করা যায়, আর যেকোনো দিক-নির্দেশক ইন্ডিকেটরের সঙ্গে পরিষ্কারভাবে যুক্ত হয়। অধ্যায় ৩০ থেকে ৩৬ ATR-কে পরিমাপের একক হিসেবে ব্যবহার করতে পেরেছে — জোনের প্রস্থ, ব্যান্ডের প্রস্থ, স্টপ দূরত্ব, অনুপ্রবেশের সীমা — ঠিক এ কারণেই যে তাদের মত দূষিত করার মতো নিজস্ব কোনো দিক-সংক্রান্ত মতামত ATR বহন করে না।

**সীমাবদ্ধতা:** বাড়তে থাকা ATR মন্দাসূচক নয়। সম্প্রসারিত অস্থিরতাকে সতর্কবার্তা হিসেবে পড়া প্রচলিত, আর ডিএসই-তে, যেখানে পতন সাধারণত উত্থানের চেয়ে দ্রুত, সংযোগটি বাস্তবে প্রায়ই সত্য — কিন্তু তা সূত্রে নেই। দিক দরকার হলে অধ্যায় ৩১ থেকে ৩৫ থেকে নিন আর ATR-কে কেবল সাইজিং করতে দিন।

সীমাবদ্ধতাটির ব্যবহারিক রূপ: ATR-মাপা স্টপ প্রতিসম, বাজার নয়। **ডিএসই-তে নির্ভরযোগ্য শর্ট সাইড নেই**, তাই গ্যাপ-ডাউন পদ যে ডাউন-গ্যাপ কর্তব্যপরায়ণভাবে মাপে তা এমন ঝুঁকি যা আপনি কেবল ধরে না রেখে এড়াতে পারেন, কখনো তা থেকে আয় করতে পারেন না। **ATR দুটি লেজই মাপে; আপনি কেবল একটিতে ট্রেড করতে পারেন।**

### ৭. ছেঁটে দেওয়ার সংশোধন, পাটিগণিত হিসেবে বলা

$b$ হোক আগের ক্লোজের ভগ্নাংশ হিসেবে দৈনিক ব্যান্ড। তাহলে

$$TR_t \\le b \\cdot C_{t-1} \\quad \\text{সর্বদা}, \\qquad \\text{আর আটকে যাওয়া সেশনে } TR_t = b \\cdot C_{t-1} \\text{ হুবহু।}$$

**মাপা ATR হলো $\\min(\\text{প্রকৃত রেঞ্জ}, \\text{ব্যান্ড})$-এর একটি নিরূপণ, প্রকৃত রেঞ্জের নয়।** এটি নিম্নমুখী পক্ষপাতদুষ্ট, আর পক্ষপাত সবচেয়ে বড় ঠিক তখনই যখন বাস্তবায়িত অস্থিরতা সর্বোচ্চ — একটি ঝুঁকি-পরিসংখ্যানের জন্য সম্ভাব্য সবচেয়ে খারাপ ধর্ম।

৪৮.২০ থেকে $b = 10\\%$-এ তিনটি লক:

$$P_3 = 48.20 \\times 0.9^3 = 35.1378, \\qquad \\text{loss/share} = 13.0622 = 8.16\\,ATR$$

$$\\text{Loss} = 2{,}120 \\times 13.0622 = 27{,}691.86 = 3.2579\\% \\text{ (অ্যাকাউন্টের)} = 3.2655 \\times \\text{পরিকল্পিত ঝুঁকি}$$

এদিকে ঐ তিন সেশনে ATR সিরিজ চলে $1.600 \\to 1.830 \\to 2.009 \\to 2.145$: **৩৪% ঊর্ধ্বে, যখন পজিশন হারিয়েছে ২৭.১%।** এই পরিস্থিতির জন্য সংরক্ষণ রাখুন কঠিন এক্সপোজার সীমা ও খাত সীমা দিয়ে — কখনো বড় $k$ দিয়ে নয়, যা কেবল সেই স্টপকে চওড়া করে যা এমনিতেও ভরবে না, আর যে আটানব্বই শতাংশ দিন স্বাভাবিক আচরণ করে সেখানে আপনার পজিশন ছোট করে দেয়।`,
    },

    manual: {
      en: `**Scenario.** BEACONTEX, seventeen sessions of the §39.3 data. Account 850,000 taka, risk 1% per trade, ATR multiple $k = 2.5$, lot size 10. Every figure below reconciles cell-for-cell with the sheet in §39.6.

**Step 1 — Compute the three candidates for day 1.**

There is no previous close, so F4 and G4 are set to zero and the true range is the plain range:

$$E4 = 46.30 - 45.00 = 1.30, \\qquad TR_1 = \\max(1.30,\\,0,\\,0) = \\mathbf{1.30}$$

**Every ATR series begins with one contaminated bar.** It is why nobody quotes ATR to three decimals off a fresh listing.

**Step 2 — Day 2, the ordinary case.**

$$E5 = 46.40 - 45.30 = 1.10, \\quad F5 = |46.40 - 45.80| = 0.60, \\quad G5 = |45.80 - 45.30| = 0.50$$
$$TR_2 = \\max(1.10,\\, 0.60,\\, 0.50) = \\mathbf{1.10}$$

The intraday range wins because there was no gap. **On a market that does not gap, ATR and the plain average range are the same number** — which is exactly why the imported textbooks under-emphasise the distinction.

**Step 3 — Day 5, the case the indicator exists for.**

Previous close 47.40. Today: high 49.90, low 49.10.

$$E8 = 49.90 - 49.10 = 0.80$$
$$F8 = |49.90 - 47.40| = 2.50$$
$$G8 = |47.40 - 49.10| = 1.70$$
$$TR_5 = \\max(0.80,\\, 2.50,\\, 1.70) = \\mathbf{2.50}$$

**High minus low reports 0.80 — the second-quietest reading in the sample. True range reports 2.50, the largest of the first fourteen.** A trader using the plain range would have recorded the most violent day of the fortnight as a nap, and then sized the next trade off an average that had never seen it.

**Step 4 — Day 16, where the plain range wins outright.**

$$E19 = 50.70 - 48.40 = 2.30, \\quad F19 = |50.70 - 50.40| = 0.30, \\quad G19 = |50.40 - 48.40| = 2.00$$
$$TR_{16} = \\mathbf{2.30}$$

**The maximum is a selector, not a gap surcharge.** Whichever kind of movement actually occurred is the one that gets measured.

**Step 5 — Seed the ATR with a simple average of the first fourteen true ranges.**

$$1.30 + 1.10 + 1.60 + 1.40 + 2.50 + 1.20 + 1.50 + 1.35 + 1.45 + 1.55 + 1.30 + 1.60 + 1.70 + 1.45 = 21.00$$

$$I17 = \\frac{21.00}{14} = \\mathbf{1.500}$$

**Step 6 — Normalise it.**

$$J17 = \\frac{1.500}{47.90} \\times 100 = \\mathbf{3.1315\\%}$$

**Step 7 — Day 15: apply Wilder's recursion, and watch how little it moves.**

The stock gapped from a 47.90 close to a 50.80 high, so $F18 = 2.90$ dominates and $TR_{15} = 2.90$ — nearly double the average.

$$I18 = \\frac{1.500 \\times 13 + 2.90}{14} = \\frac{19.50 + 2.90}{14} = \\frac{22.40}{14} = \\mathbf{1.600}$$

$$J18 = \\frac{1.600}{50.40} \\times 100 = \\mathbf{3.1746\\%}$$

In increment form: $1.500 + \\frac{1}{14}(2.90 - 1.500) = 1.500 + 0.100 = 1.600$. **A day of double-normal range moved ATR by ten paisa.** That is the smoother doing its job — you are measuring a regime, not reacting to a candle.

**Step 8 — Day 16.**

$$I19 = \\frac{1.600 \\times 13 + 2.30}{14} = \\frac{20.80 + 2.30}{14} = \\frac{23.10}{14} = \\mathbf{1.650}$$
$$J19 = \\frac{1.650}{48.60} \\times 100 = \\mathbf{3.3951\\%}$$

**Step 9 — Day 17, the reading everything else hangs from.**

$$I20 = \\frac{1.650 \\times 13 + 0.95}{14} = \\frac{21.45 + 0.95}{14} = \\frac{22.40}{14} = \\mathbf{1.600}$$
$$J20 = \\frac{1.600}{48.20} \\times 100 = \\mathbf{3.3195\\%}$$

**This is Chapter 30's 1.60.** The zone half-width of 0.400 that produced the band 47.825–48.625 in that chapter is $0.5 \\times 1.600 / 2$, computed from this series. **Two chapters, one measured quantity — which is the whole reason Chapters 30 through 36 could quote stop distances and band widths in ATR without ever defining it.**

**Step 10 — The Chandelier exit, and why the ratchet is not optional.**

$$K18 = \\max(B4{:}B18) - 3 \\times I18 = 50.80 - 4.800 = \\mathbf{46.000}$$
$$K19 = 50.80 - 3 \\times 1.650 = 50.80 - 4.950 = \\mathbf{45.850}$$
$$K20 = 50.80 - 3 \\times 1.600 = 50.80 - 4.800 = \\mathbf{46.000}$$

Look at K19. **The raw Chandelier level fell by fifteen paisa on day 16 — not because the stock made a lower high, but because ATR rose.** Volatility expanding against you loosened your stop. That is backwards, and the fix is the running maximum: the operative stop stays at **46.000** throughout. **Implement the ratchet or the indicator will hand you back risk exactly when the market is taking it.**

**Step 11 — The risk budget.**

$$B25 = 850{,}000 \\times \\frac{1}{100} = \\mathbf{8{,}500}$$

Note what has and has not been decided. **A loss has been budgeted. Nothing has been bought.**

**Step 12 — Stop distance and stop price.**

$$B29 = 2.5 \\times 1.600 = \\mathbf{4.000}, \\qquad B30 = 48.20 - 4.000 = \\mathbf{44.20}$$

$$B31 = \\frac{4.000}{48.20} \\times 100 = \\mathbf{8.2988\\%}$$

**8.2988% is an output.** Nobody chose it, and that is the point. A trader who had imposed the conventional 5% stop would be sitting **1.5 daily ranges** from entry and would be removed by noise; a trader using 15% would be risking almost twice their budget on the same share count.

**Step 13 — Raw share count, then round down to the lot.**

$$B32 = \\frac{8{,}500}{4.000} = \\mathbf{2{,}125}$$
$$B34 = \\text{FLOOR}(2{,}125,\\, 10) = \\mathbf{2{,}120}$$

**Round down, never to nearest.** Rounding 2,125 up to 2,130 would put 8,520 taka at risk — over budget by construction, on every trade, forever. The floor costs you five shares and guarantees the constraint holds.

**Step 14 — Verify the risk you actually took.**

$$B35 = 2{,}120 \\times 4.000 = \\mathbf{8{,}480}, \\qquad B36 = \\frac{8{,}480}{850{,}000} \\times 100 = \\mathbf{0.9976\\%}$$

Under the 1% budget by 20 taka. **Always compute the realised risk after rounding rather than assuming the target held.** On a 5,000-taka share with a lot size of 10, the rounding gap is not 0.24% — it can be several percent of the budget.

**Step 15 — Now read off the exposure, and notice you never chose it.**

$$B37 = 2{,}120 \\times 48.20 = \\mathbf{102{,}184}, \\qquad B38 = \\frac{102{,}184}{850{,}000} \\times 100 = \\mathbf{12.0216\\%}$$

**This is the sentence to remember from the entire chapter: nobody decided to put 102,184 taka into BEACONTEX.** It is the arithmetic residue of one risk decision and one volatility measurement. Reverse the order — pick the taka first — and the risk becomes whatever the stop happens to imply, which is to say unknown.

**Step 16 — The comparator. Same price, same risk, 2.5× the volatility.**

$$B43 = \\frac{4.00}{48.20} \\times 100 = \\mathbf{8.2988\\%}, \\qquad B44 = 2.5 \\times 4.00 = \\mathbf{10.00}$$
$$B45 = \\text{FLOOR}\\!\\left(\\frac{8{,}500}{10.00},\\, 10\\right) = \\text{FLOOR}(850,\\,10) = \\mathbf{850}$$
$$B46 = 850 \\times 10.00 = \\mathbf{8{,}500}, \\qquad B47 = 850 \\times 48.20 = \\mathbf{40{,}970}, \\qquad B48 = \\mathbf{4.8200\\%}$$
$$B49 = \\frac{2{,}120}{850} = \\mathbf{2.4941}$$

**Identical taka at risk; two and a half times the money committed.** And note the coincidence in B43 and B31: both read 8.2988%. **A 2.5-ATR stop on BEACONTEX is exactly one daily range on the comparator** — the clearest possible statement of what it means to measure in the instrument's own units.

**Step 17 — The circuit-limit stress test, which the sizing formula cannot see.**

Assume a 10% band and three consecutive limit-down locks from the entry price:

$$B53 = 48.20 \\times (1 - 0.10)^3 = 48.20 \\times 0.729 = \\mathbf{35.1378}$$
$$B54 = 48.20 - 35.1378 = \\mathbf{13.0622}$$
$$B55 = 2{,}120 \\times 13.0622 = \\mathbf{27{,}691.86}$$
$$B56 = \\frac{27{,}691.86}{850{,}000} \\times 100 = \\mathbf{3.2579\\%}$$
$$B57 = \\frac{27{,}691.86}{8{,}480} = \\mathbf{3.2655}$$

**The stop at 44.20 was passed on the first gap and never filled, because there were no bids.** The planned 8,480 became 27,692. B59 returns:

> **ATR stop can be jumped — reserve separately for limit-lock risk.**

**Step 18 — Watch what ATR does during the disaster, because this is the whole DSE argument in one table.**

On a locked session high = low = close = the band, so the true range is the gap term, $b \\times C_{t-1}$:

| Session | TR | ATR(14) | Cumulative loss/share |
|---|---|---|---|
| entry | — | 1.600 | 0 |
| lock 1 | 4.820 | **1.830** | 4.820 |
| lock 2 | 4.338 | **2.009** | 9.158 |
| lock 3 | 3.904 | **2.145** | 13.062 |

**ATR rose 34% while the position lost 27.1% of its value.** The loss of 13.0622 is **8.16 times the original ATR of 1.600** — against a stop set at 2.5. Worse, the true ranges are *shrinking* in taka as the band compresses with the falling reference price, so the longer the collapse runs the more reassuring the indicator becomes. **The measurement is censored by the rules of the exchange, and it is censored hardest exactly when you most need it to be honest.**

**Step 19 — The floor-price case, which is the dangerous direction.**

Suppose the same share had spent months at an administered floor: high = low = close, day after day, and ATR(14) decays toward zero. Take 0.05.

$$S = 2.5 \\times 0.05 = 0.125, \\qquad Q = \\frac{8{,}500}{0.125} = \\mathbf{68{,}000 \\text{ shares}}$$
$$V = 68{,}000 \\times 48.20 = 3{,}277{,}600 = \\mathbf{385.6\\%} \\text{ of the account}$$

**The formula has instructed you to buy nearly four times your equity in a share that is not trading.** ATR sits in the denominator; a denominator going to zero sends the quotient to infinity. Compare the sensitivities: at ATR 1.600 a one-paisa error moves the share count by about 13; at ATR 0.05 the same error moves it by **13,600**.

**Two rules follow, and they are not optional on this exchange.** First, exclude administered-price periods before computing ATR at all — the same flag Chapter 26 built and Chapter 30 applied to touch counts. Second, **cap single-name exposure independently of the formula.** Even the healthy case here lands at 12.02%, which is already at the edge of sensible for a market where one institutional ticket clears a day and a half of volume.

**Step 20 — Sanity-check the whole chain in one line.**

$$\\frac{850{,}000 \\times 1\\%}{2.5 \\times 1.600} = 2{,}125 \\;\\to\\; 2{,}120 \\text{ shares} \\;\\to\\; 8{,}480 \\text{ at risk} \\;\\to\\; 102{,}184 \\text{ committed}$$

**Equity, tolerance, volatility, multiple. Four inputs, and the position is fully determined.** No judgement was exercised at any step, which is precisely why the method survives the days when your judgement is poor.`,
      bn: `**পরিস্থিতি।** BEACONTEX, §৩৯.৩-এর ডেটার সতেরোটি সেশন। অ্যাকাউন্ট ৮,৫০,০০০ টাকা, প্রতি ট্রেডে ঝুঁকি ১%, ATR গুণক $k = 2.5$, লট আকার ১০। নিচের প্রতিটি সংখ্যা §৩৯.৬-এর শিটের সঙ্গে ঘরে-ঘরে মেলে।

**ধাপ ১ — দিন ১-এর তিনটি প্রার্থী গণনা।**

আগের কোনো ক্লোজ নেই, তাই F4 ও G4 শূন্য বসানো হয় ও true range হয় সাধারণ রেঞ্জ:

$$E4 = 46.30 - 45.00 = 1.30, \\qquad TR_1 = \\max(1.30,\\,0,\\,0) = \\mathbf{1.30}$$

**প্রতিটি ATR সিরিজ একটি দূষিত বার দিয়ে শুরু হয়।** এ কারণেই নতুন তালিকাভুক্তিতে কেউ ATR তিন দশমিক ঘরে উদ্ধৃত করেন না।

**ধাপ ২ — দিন ২, সাধারণ ক্ষেত্র।**

$$E5 = 46.40 - 45.30 = 1.10, \\quad F5 = |46.40 - 45.80| = 0.60, \\quad G5 = |45.80 - 45.30| = 0.50$$
$$TR_2 = \\max(1.10,\\, 0.60,\\, 0.50) = \\mathbf{1.10}$$

গ্যাপ না থাকায় দিনের ভেতরের রেঞ্জ জেতে। **যে বাজার গ্যাপ দেয় না সেখানে ATR ও সাধারণ গড় রেঞ্জ একই সংখ্যা** — আর ঠিক এ কারণেই আমদানি করা পাঠ্যবই পার্থক্যটিতে কম জোর দেয়।

**ধাপ ৩ — দিন ৫, যে ক্ষেত্রের জন্যই ইন্ডিকেটরটির অস্তিত্ব।**

আগের ক্লোজ ৪৭.৪০। আজ: high ৪৯.৯০, low ৪৯.১০।

$$E8 = 49.90 - 49.10 = 0.80$$
$$F8 = |49.90 - 47.40| = 2.50$$
$$G8 = |47.40 - 49.10| = 1.70$$
$$TR_5 = \\max(0.80,\\, 2.50,\\, 1.70) = \\mathbf{2.50}$$

**High বিয়োগ low জানায় ০.৮০ — নমুনার দ্বিতীয় শান্ততম পাঠ। True range জানায় ২.৫০, প্রথম চোদ্দটির বৃহত্তম।** সাধারণ রেঞ্জ ব্যবহারকারী ট্রেডার পক্ষকালের সবচেয়ে হিংস্র দিনটিকে ঘুম হিসেবে লিপিবদ্ধ করতেন, তারপর এমন একটি গড় থেকে পরের ট্রেডের আকার নিতেন যা তা কখনো দেখেনি।

**ধাপ ৪ — দিন ১৬, যেখানে সাধারণ রেঞ্জ সরাসরি জেতে।**

$$E19 = 50.70 - 48.40 = 2.30, \\quad F19 = |50.70 - 50.40| = 0.30, \\quad G19 = |50.40 - 48.40| = 2.00$$
$$TR_{16} = \\mathbf{2.30}$$

**সর্বোচ্চ একটি নির্বাচক, গ্যাপের বাড়তি মাশুল নয়।** আসলে যে ধরনের নড়াচড়া ঘটেছে সেটিই মাপা হয়।

**ধাপ ৫ — প্রথম চোদ্দটি true range-এর সরল গড় দিয়ে ATR-এর বীজ বসান।**

$$1.30 + 1.10 + 1.60 + 1.40 + 2.50 + 1.20 + 1.50 + 1.35 + 1.45 + 1.55 + 1.30 + 1.60 + 1.70 + 1.45 = 21.00$$

$$I17 = \\frac{21.00}{14} = \\mathbf{1.500}$$

**ধাপ ৬ — একে স্বাভাবিকীকরণ করুন।**

$$J17 = \\frac{1.500}{47.90} \\times 100 = \\mathbf{3.1315\\%}$$

**ধাপ ৭ — দিন ১৫: Wilder-এর পুনরাবৃত্তি প্রয়োগ করুন, আর দেখুন এটি কত কম নড়ে।**

শেয়ারটি ৪৭.৯০ ক্লোজ থেকে ৫০.৮০ high-এ গ্যাপ দিয়েছে, তাই $F18 = 2.90$ প্রাধান্য পায় ও $TR_{15} = 2.90$ — গড়ের প্রায় দ্বিগুণ।

$$I18 = \\frac{1.500 \\times 13 + 2.90}{14} = \\frac{19.50 + 2.90}{14} = \\frac{22.40}{14} = \\mathbf{1.600}$$

$$J18 = \\frac{1.600}{50.40} \\times 100 = \\mathbf{3.1746\\%}$$

বৃদ্ধি-রূপে: $1.500 + \\frac{1}{14}(2.90 - 1.500) = 1.500 + 0.100 = 1.600$। **দ্বিগুণ-স্বাভাবিক রেঞ্জের একটি দিন ATR-কে দশ পয়সা নাড়িয়েছে।** এটিই স্মুদারের কাজ — আপনি একটি রেজিম মাপছেন, একটি ক্যান্ডেলে প্রতিক্রিয়া দেখাচ্ছেন না।

**ধাপ ৮ — দিন ১৬।**

$$I19 = \\frac{1.600 \\times 13 + 2.30}{14} = \\frac{20.80 + 2.30}{14} = \\frac{23.10}{14} = \\mathbf{1.650}$$
$$J19 = \\frac{1.650}{48.60} \\times 100 = \\mathbf{3.3951\\%}$$

**ধাপ ৯ — দিন ১৭, যে পাঠ থেকে বাকি সবকিছু ঝোলে।**

$$I20 = \\frac{1.650 \\times 13 + 0.95}{14} = \\frac{21.45 + 0.95}{14} = \\frac{22.40}{14} = \\mathbf{1.600}$$
$$J20 = \\frac{1.600}{48.20} \\times 100 = \\mathbf{3.3195\\%}$$

**এটিই অধ্যায় ৩০-এর ১.৬০।** ঐ অধ্যায়ে ৪৭.৮২৫–৪৮.৬২৫ ব্যান্ড তৈরি করা ০.৪০০ জোন অর্ধ-প্রস্থ হলো $0.5 \\times 1.600 / 2$, এই সিরিজ থেকে গণিত। **দুটি অধ্যায়, একটি মাপা রাশি — আর এ কারণেই অধ্যায় ৩০ থেকে ৩৬ ATR সংজ্ঞায়িত না করেই ATR-এ স্টপ দূরত্ব ও ব্যান্ড প্রস্থ উদ্ধৃত করতে পেরেছে।**

**ধাপ ১০ — Chandelier প্রস্থান, আর র‌্যাচেট কেন ঐচ্ছিক নয়।**

$$K18 = \\max(B4{:}B18) - 3 \\times I18 = 50.80 - 4.800 = \\mathbf{46.000}$$
$$K19 = 50.80 - 3 \\times 1.650 = 50.80 - 4.950 = \\mathbf{45.850}$$
$$K20 = 50.80 - 3 \\times 1.600 = 50.80 - 4.800 = \\mathbf{46.000}$$

K19 দেখুন। **কাঁচা Chandelier স্তর দিন ১৬-তে পনেরো পয়সা নেমেছে — শেয়ারটি নিচু high করেছে বলে নয়, বরং ATR বেড়েছে বলে।** আপনার বিপক্ষে অস্থিরতার সম্প্রসারণ আপনার স্টপ ঢিলে করেছে। এটি উল্টো, আর সমাধান চলমান সর্বোচ্চ: কার্যকর স্টপ সর্বত্র **৪৬.০০০**-এই থাকে। **র‌্যাচেট বসান, নইলে ইন্ডিকেটর ঠিক তখনই আপনাকে ঝুঁকি ফিরিয়ে দেবে যখন বাজার তা নিচ্ছে।**

**ধাপ ১১ — ঝুঁকি বাজেট।**

$$B25 = 850{,}000 \\times \\frac{1}{100} = \\mathbf{8{,}500}$$

কী ঠিক হয়েছে আর কী হয়নি লক্ষ করুন। **একটি ক্ষতির বাজেট হয়েছে। কিছুই কেনা হয়নি।**

**ধাপ ১২ — স্টপ দূরত্ব ও স্টপ দাম।**

$$B29 = 2.5 \\times 1.600 = \\mathbf{4.000}, \\qquad B30 = 48.20 - 4.000 = \\mathbf{44.20}$$

$$B31 = \\frac{4.000}{48.20} \\times 100 = \\mathbf{8.2988\\%}$$

**৮.২৯৮৮% একটি আউটপুট।** কেউ এটি বাছেনি, আর সেটাই কথা। যে ট্রেডার প্রচলিত ৫% স্টপ চাপিয়ে দিতেন তিনি প্রবেশ থেকে **১.৫ দৈনিক রেঞ্জ** দূরে বসে থাকতেন ও নয়েজে অপসারিত হতেন; ১৫% ব্যবহারকারী একই শেয়ার সংখ্যায় বাজেটের প্রায় দ্বিগুণ ঝুঁকি নিতেন।

**ধাপ ১৩ — কাঁচা শেয়ার সংখ্যা, তারপর লটে নিচের দিকে গোল করা।**

$$B32 = \\frac{8{,}500}{4.000} = \\mathbf{2{,}125}$$
$$B34 = \\text{FLOOR}(2{,}125,\\, 10) = \\mathbf{2{,}120}$$

**নিচের দিকে গোল করুন, কখনো নিকটতমে নয়।** ২,১২৫-কে ২,১৩০-এ ওঠালে ঝুঁকিতে থাকত ৮,৫২০ টাকা — গঠনগতভাবেই বাজেটের বাইরে, প্রতিটি ট্রেডে, চিরকাল। Floor আপনার পাঁচ শেয়ার খরচ করে ও সীমাবদ্ধতাটি টিকে থাকার নিশ্চয়তা দেয়।

**ধাপ ১৪ — আপনি আসলে যে ঝুঁকি নিলেন তা যাচাই করুন।**

$$B35 = 2{,}120 \\times 4.000 = \\mathbf{8{,}480}, \\qquad B36 = \\frac{8{,}480}{850{,}000} \\times 100 = \\mathbf{0.9976\\%}$$

১% বাজেটের ২০ টাকা নিচে। **গোল করার পর সবসময় বাস্তবায়িত ঝুঁকি গণনা করুন, লক্ষ্য টিকে আছে ধরে নেবেন না।** ১০ লট আকারের ৫,০০০ টাকার শেয়ারে গোল করার ফাঁক ০.২৪% নয় — তা বাজেটের কয়েক শতাংশ হতে পারে।

**ধাপ ১৫ — এবার এক্সপোজার পড়ে নিন, আর লক্ষ করুন আপনি তা কখনো বাছেননি।**

$$B37 = 2{,}120 \\times 48.20 = \\mathbf{102{,}184}, \\qquad B38 = \\frac{102{,}184}{850{,}000} \\times 100 = \\mathbf{12.0216\\%}$$

**গোটা অধ্যায় থেকে মনে রাখার বাক্যটি এই: কেউ BEACONTEX-এ ১,০২,১৮৪ টাকা বসানোর সিদ্ধান্ত নেয়নি।** এটি একটি ঝুঁকি-সিদ্ধান্ত ও একটি অস্থিরতা-পরিমাপের পাটিগাণিতিক অবশেষ। ক্রম উল্টে দিন — আগে টাকা বাছুন — আর ঝুঁকি হয়ে দাঁড়াবে স্টপ যা বোঝায় তাই, অর্থাৎ অজানা।

**ধাপ ১৬ — কম্পারেটর। একই দাম, একই ঝুঁকি, ২.৫ গুণ অস্থিরতা।**

$$B43 = \\frac{4.00}{48.20} \\times 100 = \\mathbf{8.2988\\%}, \\qquad B44 = 2.5 \\times 4.00 = \\mathbf{10.00}$$
$$B45 = \\text{FLOOR}\\!\\left(\\frac{8{,}500}{10.00},\\, 10\\right) = \\text{FLOOR}(850,\\,10) = \\mathbf{850}$$
$$B46 = 850 \\times 10.00 = \\mathbf{8{,}500}, \\qquad B47 = 850 \\times 48.20 = \\mathbf{40{,}970}, \\qquad B48 = \\mathbf{4.8200\\%}$$
$$B49 = \\frac{2{,}120}{850} = \\mathbf{2.4941}$$

**অভিন্ন ঝুঁকির টাকা; আড়াই গুণ বসানো টাকা।** আর B43 ও B31-এর কাকতালীয়তা লক্ষ করুন: দুটোই পড়ে ৮.২৯৮৮%। **BEACONTEX-এ একটি ২.৫-ATR স্টপ কম্পারেটরে হুবহু একটি দৈনিক রেঞ্জ** — উপকরণের নিজস্ব এককে মাপার অর্থ কী তার সবচেয়ে স্পষ্ট বিবৃতি।

**ধাপ ১৭ — সার্কিট-সীমার চাপ পরীক্ষা, যা সাইজিং সূত্র দেখতে পায় না।**

১০% ব্যান্ড ও প্রবেশ দাম থেকে পরপর তিনটি limit-down লক ধরুন:

$$B53 = 48.20 \\times (1 - 0.10)^3 = 48.20 \\times 0.729 = \\mathbf{35.1378}$$
$$B54 = 48.20 - 35.1378 = \\mathbf{13.0622}$$
$$B55 = 2{,}120 \\times 13.0622 = \\mathbf{27{,}691.86}$$
$$B56 = \\frac{27{,}691.86}{850{,}000} \\times 100 = \\mathbf{3.2579\\%}$$
$$B57 = \\frac{27{,}691.86}{8{,}480} = \\mathbf{3.2655}$$

**৪৪.২০-এর স্টপ প্রথম গ্যাপেই পেরিয়ে গেছে ও কখনো ভরেনি, কারণ কোনো বিড ছিল না।** পরিকল্পিত ৮,৪৮০ হয়েছে ২৭,৬৯২। B59 ফেরত দেয়:

> **ATR stop can be jumped — reserve separately for limit-lock risk।**

**ধাপ ১৮ — দুর্যোগের সময় ATR কী করে দেখুন, কারণ এক সারণিতেই পুরো ডিএসই যুক্তিটি।**

আটকে যাওয়া সেশনে high = low = close = ব্যান্ড, তাই true range হলো গ্যাপ পদ, $b \\times C_{t-1}$:

| সেশন | TR | ATR(14) | ক্রমযোজিত ক্ষতি/শেয়ার |
|---|---|---|---|
| প্রবেশ | — | ১.৬০০ | ০ |
| লক ১ | ৪.৮২০ | **১.৮৩০** | ৪.৮২০ |
| লক ২ | ৪.৩৩৮ | **২.০০৯** | ৯.১৫৮ |
| লক ৩ | ৩.৯০৪ | **২.১৪৫** | ১৩.০৬২ |

**ATR বেড়েছে ৩৪% যখন পজিশন তার মূল্যের ২৭.১% হারিয়েছে।** ১৩.০৬২২ ক্ষতি মূল ১.৬০০ ATR-এর **৮.১৬ গুণ** — যেখানে স্টপ বসানো ছিল ২.৫-এ। আরও খারাপ, পড়তে থাকা রেফারেন্স দামের সঙ্গে ব্যান্ড সংকুচিত হওয়ায় true range টাকায় *ছোট* হচ্ছে, তাই ধস যত দীর্ঘ হয় ইন্ডিকেটর তত আশ্বস্তকর হয়ে ওঠে। **পরিমাপটি এক্সচেঞ্জের বিধি দিয়ে ছেঁটে দেওয়া, আর সবচেয়ে বেশি ছাঁটা পড়ে ঠিক তখনই যখন আপনার তার সততা সবচেয়ে বেশি দরকার।**

**ধাপ ১৯ — ফ্লোর-প্রাইসের ক্ষেত্র, যা বিপজ্জনক দিকটি।**

ধরুন একই শেয়ার মাসের পর মাস একটি প্রশাসিত ফ্লোরে কাটিয়েছে: high = low = close, দিনের পর দিন, আর ATR(14) শূন্যের দিকে ক্ষয় হয়। ০.০৫ নিন।

$$S = 2.5 \\times 0.05 = 0.125, \\qquad Q = \\frac{8{,}500}{0.125} = \\mathbf{68{,}000 \\text{ শেয়ার}}$$
$$V = 68{,}000 \\times 48.20 = 3{,}277{,}600 = \\mathbf{385.6\\%} \\text{ (অ্যাকাউন্টের)}$$

**সূত্রটি আপনাকে নির্দেশ দিয়েছে একটি অ-লেনদেনরত শেয়ারে আপনার ইকুইটির প্রায় চার গুণ কিনতে।** ATR হরে বসে; শূন্যের দিকে যাওয়া হর ভাগফলকে অসীমে পাঠায়। সংবেদনশীলতা তুলনা করুন: ATR ১.৬০০-এ এক পয়সার ভুল শেয়ার সংখ্যা প্রায় ১৩ নাড়ায়; ATR ০.০৫-এ ঐ একই ভুল তা **১৩,৬০০** নাড়ায়।

**দুটি নিয়ম আসে, আর এই এক্সচেঞ্জে সেগুলো ঐচ্ছিক নয়।** প্রথমত, ATR গণনার আগেই প্রশাসিত-দামের সময়কাল বাদ দিন — অধ্যায় ২৬ যে চিহ্ন তৈরি করেছে ও অধ্যায় ৩০ টাচ গণনায় প্রয়োগ করেছে সেটিই। দ্বিতীয়ত, **সূত্র-নিরপেক্ষভাবে একক-নামের এক্সপোজারে সীমা বসান।** এখানে সুস্থ ক্ষেত্রটিও দাঁড়ায় ১২.০২%-এ, যা এমন বাজারের জন্য ইতিমধ্যেই যুক্তিসংগতের প্রান্তে যেখানে একটি প্রাতিষ্ঠানিক টিকিট দেড় দিনের ভলিউম পরিষ্কার করে।

**ধাপ ২০ — গোটা শৃঙ্খলটি এক লাইনে যাচাই করুন।**

$$\\frac{850{,}000 \\times 1\\%}{2.5 \\times 1.600} = 2{,}125 \\;\\to\\; 2{,}120 \\text{ শেয়ার} \\;\\to\\; 8{,}480 \\text{ ঝুঁকিতে} \\;\\to\\; 102{,}184 \\text{ বসানো}$$

**ইকুইটি, সহনশীলতা, অস্থিরতা, গুণক। চারটি ইনপুট, আর পজিশন সম্পূর্ণ নির্ধারিত।** কোনো ধাপে বিচারবুদ্ধি প্রয়োগ হয়নি, আর ঠিক এ কারণেই পদ্ধতিটি সেই দিনগুলোতেও টেকে যেদিন আপনার বিচারবুদ্ধি দুর্বল।`,
    },

    mistakes: {
      en: `1. **Using high−low instead of true range.** On day 5 the plain range reads 0.80 against a true range of 2.50 — the quietest-looking day of the fortnight was the most violent. Across the seed window the plain range averages **1.3786 against 1.500**, and by day 17 the two series read **1.4289 against 1.600**, an 10.7% understatement. That feeds straight through: a 2.5× stop of 3.572 instead of 4.000, **2,370 shares instead of 2,120**, and if you then place the stop where it actually belongs you are risking 9,480 taka — **11.5% over a budget you believe you are respecting.** The error is silent, one-directional, and worst on the gappy DSE names where you need the number most.
2. **Letting the platform substitute an EMA(14) for Wilder's smoothing.** Wilder's $\\alpha = 1/14$ is equivalent to an EMA(27), not an EMA(14). On this data the EMA version returns **1.6593 on day 17 instead of 1.600**, moving the stop to 4.148 and the share count to **2,040 — 80 shares, 3.8% of the position, decided by a menu you never opened.** Check which smoother your platform uses before calibrating any multiple against it.
3. **Sizing from an ATR measured under a floor price.** The formula returns $8{,}500 / 0.125 = 68{,}000$ shares, a position of **3,277,600 taka — 385.6% of an 850,000 account.** ATR is the denominator, and a denominator approaching zero sends the quotient to infinity. **The calmest number on the screen produces the most dangerous instruction on the sheet.** Exclude administered-price windows before computing anything, using Chapter 26's flag.
4. **Believing the stop protects you against a limit-lock.** Three 10% locks take 48.20 to **35.1378**; the loss per share is 13.0622, or **8.16 ATRs**, against a stop set at 2.5. The position loses **27,691.86 — 3.2655× the planned 8,480.** You cannot sell at 44.20 if there are no bids at 44.20. Reserve for this with an exposure cap, never with a bigger $k$.
5. **Reading a rising ATR during a collapse as a warning that arrived in time.** Over the three locked sessions ATR climbs 1.600 → 1.830 → 2.009 → **2.145**, up 34%, while the price falls 27.1%. And the true ranges *shrink* — 4.820, 4.338, 3.904 — because the band compresses with the reference price. **The indicator becomes more reassuring the longer the disaster runs.**
6. **Rounding the share count to nearest instead of down.** 2,125 rounded up to 2,130 puts **8,520 at risk against an 8,500 budget** — over on every trade, forever, by construction. FLOOR costs five shares and makes the constraint actually bind. Then compute the realised risk: **0.9976%**, not "1% because that is what I typed."
7. **Choosing exposure and deriving risk instead of the reverse.** Nobody decided to put **102,184 taka (12.0216%)** into BEACONTEX; it fell out of a risk decision and a volatility measurement. A trader who commits a fixed 100,000 to both BEACONTEX and the 4.00-ATR comparator takes **2.4941 times** the risk on the second one and never sees it, because the account statement shows two identical-looking lines.
8. **Comparing raw ATR across instruments.** 1.60 is 3.3195% of a 48.20 price and would be a rounding error at 900. Normalise before you rank anything — the same argument as PPO in Chapter 35 and %B in Chapter 38, arriving a third time.
9. **Omitting the ratchet on the Chandelier exit.** The raw level falls from 46.000 to **45.850** on day 16 purely because ATR rose to 1.650 — the stock made no lower high. **Expanding volatility just handed you back risk at the worst moment.** Take the running maximum and the operative stop stays at 46.000.
10. **Backtesting a stop rule across the seeding region.** After fifty bars, $(13/14)^{50} = 2.46\\%$ of the reading still comes from the seed. Results inside the first fifty bars are testing your seeding convention, not your rule.
11. **Treating rising ATR as bearish.** True range is a maximum of absolute distances — reflect the whole series and every reading is unchanged. **A share rising 1.60 a day and one collapsing 1.60 a day have identical ATR.** Take direction from Chapters 31–35 and let ATR do only the sizing.`,
      bn: `১. **True range-এর বদলে high−low ব্যবহার করা।** দিন ৫-এ সাধারণ রেঞ্জ পড়ে ০.৮০, যেখানে true range ২.৫০ — পক্ষকালের সবচেয়ে শান্ত-দেখতে দিনটিই ছিল সবচেয়ে হিংস্র। বীজ জানালাজুড়ে সাধারণ রেঞ্জের গড় **১.৩৭৮৬ বনাম ১.৫০০**, আর দিন ১৭-তে দুটি সিরিজ পড়ে **১.৪২৮৯ বনাম ১.৬০০**, ১০.৭% কম দেখানো। এটি সরাসরি চলে যায়: ৪.০০০-এর বদলে ৩.৫৭২ স্টপ, **২,১২০-এর বদলে ২,৩৭০ শেয়ার**, আর তারপর স্টপটি যেখানে সত্যিই থাকা উচিত সেখানে বসালে আপনি ঝুঁকি নিচ্ছেন ৯,৪৮০ টাকা — **আপনি যে বাজেট মানছেন বলে বিশ্বাস করেন তার ১১.৫% ওপরে।** ভুলটি নীরব, এক-মুখী, আর সবচেয়ে খারাপ ঐ গ্যাপযুক্ত ডিএসই নামগুলোতেই যেখানে সংখ্যাটি সবচেয়ে বেশি দরকার।
২. **প্ল্যাটফর্মকে Wilder স্মুদিংয়ের জায়গায় EMA(14) বসাতে দেওয়া।** Wilder-এর $\\alpha = 1/14$ EMA(14) নয়, EMA(27)-এর সমতুল্য। এই ডেটায় EMA সংস্করণ দিন ১৭-তে **১.৬০০-এর বদলে ১.৬৫৯৩** ফেরত দেয়, স্টপ ৪.১৪৮-এ ও শেয়ার সংখ্যা **২,০৪০-এ — ৮০ শেয়ার, পজিশনের ৩.৮%, এমন একটি মেনু দিয়ে নির্ধারিত যা আপনি কখনো খোলেননি।** কোনো গুণক ঠিক করার আগে দেখে নিন আপনার প্ল্যাটফর্ম কোন স্মুদার ব্যবহার করে।
৩. **ফ্লোর প্রাইসের অধীনে মাপা ATR থেকে আকার নির্ধারণ।** সূত্র ফেরত দেয় $8{,}500 / 0.125 = 68{,}000$ শেয়ার, **৩২,৭৭,৬০০ টাকার পজিশন — ৮,৫০,০০০ অ্যাকাউন্টের ৩৮৫.৬%।** ATR হর, আর শূন্যের দিকে যাওয়া হর ভাগফলকে অসীমে পাঠায়। **পর্দার শান্ততম সংখ্যাটিই শিটের সবচেয়ে বিপজ্জনক নির্দেশ তৈরি করে।** কিছু গণনার আগেই অধ্যায় ২৬-এর চিহ্ন দিয়ে প্রশাসিত-দামের জানালা বাদ দিন।
৪. **বিশ্বাস করা যে স্টপ আপনাকে limit-lock থেকে রক্ষা করে।** তিনটি ১০% লক ৪৮.২০-কে নেয় **৩৫.১৩৭৮**-এ; প্রতি শেয়ারে ক্ষতি ১৩.০৬২২, অর্থাৎ **৮.১৬ ATR**, যেখানে স্টপ বসানো ২.৫-এ। পজিশন হারায় **২৭,৬৯১.৮৬ — পরিকল্পিত ৮,৪৮০-এর ৩.২৬৫৫ গুণ।** ৪৪.২০-এ কোনো বিড না থাকলে আপনি ৪৪.২০-এ বেচতে পারবেন না। এর জন্য এক্সপোজার সীমা দিয়ে সংরক্ষণ রাখুন, কখনো বড় $k$ দিয়ে নয়।
৫. **ধসের সময় বাড়তে থাকা ATR-কে সময়মতো আসা সতর্কবার্তা হিসেবে পড়া।** তিনটি আটকে যাওয়া সেশনে ATR ওঠে ১.৬০০ → ১.৮৩০ → ২.০০৯ → **২.১৪৫**, ৩৪% ঊর্ধ্বে, যখন দাম পড়ে ২৭.১%। আর true range *ছোট* হয় — ৪.৮২০, ৪.৩৩৮, ৩.৯০৪ — কারণ রেফারেন্স দামের সঙ্গে ব্যান্ড সংকুচিত হয়। **দুর্যোগ যত দীর্ঘ হয় ইন্ডিকেটর তত আশ্বস্তকর হয়ে ওঠে।**
৬. **শেয়ার সংখ্যা নিচের বদলে নিকটতমে গোল করা।** ২,১২৫-কে ২,১৩০-এ ওঠালে **৮,৫০০ বাজেটের বিপরীতে ৮,৫২০ ঝুঁকিতে** — গঠনগতভাবেই প্রতিটি ট্রেডে, চিরকাল, বাজেটের বাইরে। FLOOR পাঁচ শেয়ার খরচ করে ও সীমাবদ্ধতাটিকে সত্যিই কার্যকর করে। তারপর বাস্তবায়িত ঝুঁকি গণনা করুন: **০.৯৯৭৬%**, "১% কারণ আমি তাই টাইপ করেছি" নয়।
৭. **এক্সপোজার বেছে ঝুঁকি বের করা, উল্টোটা নয়।** কেউ BEACONTEX-এ **১,০২,১৮৪ টাকা (১২.০২১৬%)** বসানোর সিদ্ধান্ত নেয়নি; এটি একটি ঝুঁকি-সিদ্ধান্ত ও একটি অস্থিরতা-পরিমাপ থেকে বেরিয়ে এসেছে। যে ট্রেডার BEACONTEX ও ৪.০০-ATR কম্পারেটর দুটিতেই নির্দিষ্ট ১,০০,০০০ বসান তিনি দ্বিতীয়টিতে **২.৪৯৪১ গুণ** ঝুঁকি নেন ও কখনো তা দেখেন না, কারণ অ্যাকাউন্ট বিবরণীতে দুটি একই রকম লাইন দেখায়।
৮. **উপকরণজুড়ে কাঁচা ATR তুলনা করা।** ৪৮.২০ দামে ১.৬০ হলো ৩.৩১৯৫%, আর ৯০০-তে তা গোল করার ভুল। কিছু সাজানোর আগে স্বাভাবিকীকরণ করুন — অধ্যায় ৩৫-এর PPO ও অধ্যায় ৩৮-এর %B-র একই যুক্তি, তৃতীয়বার আসছে।
৯. **Chandelier প্রস্থানে র‌্যাচেট বাদ দেওয়া।** কাঁচা স্তর দিন ১৬-তে ৪৬.০০০ থেকে **৪৫.৮৫০**-এ নামে কেবল ATR ১.৬৫০-এ ওঠায় — শেয়ারটি কোনো নিচু high করেনি। **সম্প্রসারিত অস্থিরতা সবচেয়ে খারাপ মুহূর্তে আপনাকে ঝুঁকি ফিরিয়ে দিল।** চলমান সর্বোচ্চ নিন আর কার্যকর স্টপ ৪৬.০০০-এই থাকে।
১০. **বীজ অঞ্চলজুড়ে স্টপ নিয়ম ব্যাকটেস্ট করা।** পঞ্চাশ বারের পরও পাঠের $(13/14)^{50} = 2.46\\%$ বীজ থেকে আসে। প্রথম পঞ্চাশ বারের ভেতরের ফলাফল আপনার নিয়ম নয়, আপনার বীজ-প্রথা পরীক্ষা করছে।
১১. **বাড়তে থাকা ATR-কে মন্দাসূচক গণ্য করা।** True range পরম দূরত্বের একটি সর্বোচ্চ — গোটা সিরিজ প্রতিফলিত করুন, প্রতিটি পাঠ অপরিবর্তিত। **দিনে ১.৬০ বাড়া শেয়ার আর দিনে ১.৬০ ধসা শেয়ারের ATR অভিন্ন।** দিক নিন অধ্যায় ৩১–৩৫ থেকে, আর ATR-কে কেবল সাইজিং করতে দিন।`,
    },

    tips: {
      en: `1. **Compute ATR before you look at the chart, not after.** The number decides whether the name is tradeable at your account size at all. On an 850,000 account at 1% risk, an 8.30% ATR name gives you 850 shares and 4.82% exposure — fine. An ATR of 0.20% would demand a position larger than your account. **Screen on normalised ATR first; open charts second.**
2. **Verify which smoother your platform uses, once, and write it down.** Wilder's ATR(14) is an EMA(27) in behaviour. The EMA(14) substitute reads 1.6593 here against 1.600 — a 3.8% difference in share count that you will otherwise attribute to your own arithmetic.
3. **Round the share count down, always, and then recompute the realised risk.** 2,125 becomes 2,120 becomes 8,480 at risk becomes 0.9976%. **The number you report to yourself should be the one you actually took**, not the one you budgeted.
4. **Put a hard cap on single-name exposure and let it override the formula.** The healthy BEACONTEX case already lands at 12.02%. In a market where one BDT 5 crore ticket clears a day and a half of volume, a formula-permitted 30% is not a position, it is a hostage situation.
5. **Exclude floor-price and administered windows before computing ATR at all.** Not after, not with a footnote. **A near-zero ATR does not make a position safe; it makes the sizing formula divide by nothing** — 68,000 shares and 385.6% of the account, from a share that is not trading.
6. **Keep a separate, explicit reserve for limit-lock risk.** Three 10% locks cost 3.2655× the planned risk on this position. That is not a tail you can price with a wider stop; it is a tail you avoid by owning less, in fewer names, across fewer correlated sectors.
7. **Read the ATR line's shape, not only its level.** ATR at the bottom of its own two-year range is a coiled spring, and it is exactly when your ATR-scaled stop is tightest. **Size for the volatility you expect, not only the volatility you measure** — the same warning Chapter 38 gave about the squeeze and Chapter 33 gave about consolidation.
8. **Ratchet every trailing stop with a running maximum.** K19 fell to 45.850 on rising ATR alone. Without the ratchet the indicator loosens your protection precisely when volatility is expanding against you.
9. **Adjust the price series for dividends, bonuses and rights before computing ATR.** A record-date adjustment prints as a large gap and true range records it as volatility. No wealth moved. **Otherwise your stop widens for a week after every AGM for no reason at all.**
10. **Quote ATR in percent when comparing, in taka when trading.** 3.3195% ranks the board; 1.600 sets the stop at 44.20. Confuse the two and you will place a percentage where a price belongs.
11. **Never let ATR give you an opinion about direction.** It is a maximum of absolute distances and is invariant under reflection. Take the direction from Chapters 31 to 35, take the size from here, and keep the two decisions physically separate on the sheet so neither can quietly influence the other.`,
      bn: `১. **চার্ট দেখার আগে ATR গণনা করুন, পরে নয়।** সংখ্যাটিই ঠিক করে নামটি আপনার অ্যাকাউন্টের আকারে আদৌ ট্রেডযোগ্য কি না। ৮,৫০,০০০ অ্যাকাউন্টে ১% ঝুঁকিতে ৮.৩০% ATR-এর নাম দেয় ৮৫০ শেয়ার ও ৪.৮২% এক্সপোজার — ঠিক আছে। ০.২০% ATR দাবি করবে আপনার অ্যাকাউন্টের চেয়ে বড় পজিশন। **আগে স্বাভাবিকীকৃত ATR-এ স্ক্রিন করুন; চার্ট পরে খুলুন।**
২. **আপনার প্ল্যাটফর্ম কোন স্মুদার ব্যবহার করে একবার যাচাই করে লিখে রাখুন।** Wilder-এর ATR(14) আচরণে EMA(27)। EMA(14) বিকল্প এখানে ১.৬০০-এর বিপরীতে ১.৬৫৯৩ পড়ে — শেয়ার সংখ্যায় ৩.৮% পার্থক্য, যা নইলে আপনি নিজের পাটিগণিতের দোষ ভাববেন।
৩. **শেয়ার সংখ্যা সবসময় নিচের দিকে গোল করুন, তারপর বাস্তবায়িত ঝুঁকি পুনর্গণনা করুন।** ২,১২৫ হয় ২,১২০, হয় ৮,৪৮০ ঝুঁকিতে, হয় ০.৯৯৭৬%। **নিজেকে যে সংখ্যা জানাবেন তা আপনি যা নিয়েছেন সেটিই হওয়া উচিত**, যা বাজেট করেছিলেন তা নয়।
৪. **একক-নামের এক্সপোজারে কঠিন সীমা বসান ও তাকে সূত্রের ওপরে স্থান দিন।** সুস্থ BEACONTEX ক্ষেত্রটিই দাঁড়ায় ১২.০২%-এ। যে বাজারে ৫ কোটি টাকার একটি টিকিট দেড় দিনের ভলিউম পরিষ্কার করে, সেখানে সূত্র-অনুমোদিত ৩০% কোনো পজিশন নয়, একটি জিম্মি পরিস্থিতি।
৫. **ATR গণনার আগেই ফ্লোর-প্রাইস ও প্রশাসিত জানালা বাদ দিন।** পরে নয়, পাদটীকা দিয়ে নয়। **প্রায়-শূন্য ATR পজিশন নিরাপদ করে না; এটি সাইজিং সূত্রকে শূন্য দিয়ে ভাগ করায়** — একটি অ-লেনদেনরত শেয়ার থেকে ৬৮,০০০ শেয়ার ও অ্যাকাউন্টের ৩৮৫.৬%।
৬. **Limit-lock ঝুঁকির জন্য আলাদা, স্পষ্ট সংরক্ষণ রাখুন।** এই পজিশনে তিনটি ১০% লকের খরচ পরিকল্পিত ঝুঁকির ৩.২৬৫৫ গুণ। এটি চওড়া স্টপ দিয়ে দাম বসানো যায় এমন লেজ নয়; এটি এমন লেজ যা কম মালিকানা দিয়ে, কম নামে, কম সহসম্পর্কিত খাতে এড়াতে হয়।
৭. **ATR রেখার কেবল স্তর নয়, আকৃতি পড়ুন।** নিজের দুই বছরের পরিসরের তলানিতে থাকা ATR একটি কুণ্ডলী পাকানো স্প্রিং, আর ঠিক তখনই আপনার ATR-মাপা স্টপ সবচেয়ে আঁটসাঁট। **যে অস্থিরতা মাপছেন কেবল তার নয়, যে অস্থিরতা আশা করছেন তার জন্য আকার নিন** — squeeze নিয়ে অধ্যায় ৩৮ ও consolidation নিয়ে অধ্যায় ৩৩ একই সতর্কবার্তা দিয়েছে।
৮. **প্রতিটি ট্রেইলিং স্টপ চলমান সর্বোচ্চ দিয়ে র‌্যাচেট করুন।** কেবল ATR বাড়ায় K19 নেমেছে ৪৫.৮৫০-এ। র‌্যাচেট ছাড়া ইন্ডিকেটর ঠিক তখনই আপনার সুরক্ষা ঢিলে করে যখন অস্থিরতা আপনার বিপক্ষে বাড়ছে।
৯. **ATR গণনার আগে ডিভিডেন্ড, বোনাস ও রাইটসের জন্য মূল্য সিরিজ সমন্বয় করুন।** রেকর্ড-ডেটের সমন্বয় একটি বড় গ্যাপ হিসেবে ছাপে ও true range তা অস্থিরতা হিসেবে লিপিবদ্ধ করে। কোনো সম্পদ নড়েনি। **নইলে প্রতিটি AGM-এর পর এক সপ্তাহ ধরে আপনার স্টপ অকারণে চওড়া হবে।**
১০. **তুলনার সময় ATR শতাংশে বলুন, ট্রেডের সময় টাকায়।** ৩.৩১৯৫% বোর্ড সাজায়; ১.৬০০ স্টপ বসায় ৪৪.২০-এ। দুটি গুলিয়ে ফেললে যেখানে দাম থাকার কথা সেখানে শতাংশ বসাবেন।
১১. **ATR-কে কখনো দিক সম্পর্কে মতামত দিতে দেবেন না।** এটি পরম দূরত্বের একটি সর্বোচ্চ এবং প্রতিফলনে অপরিবর্তিত। দিক নিন অধ্যায় ৩১ থেকে ৩৫ থেকে, আকার নিন এখান থেকে, আর দুটি সিদ্ধান্ত শিটে ভৌতভাবে আলাদা রাখুন যাতে একটি অন্যটিকে নীরবে প্রভাবিত করতে না পারে।`,
    },

    exercises: {
      en: `1. Build the §39.6 sheet from the seventeen sessions. Confirm H8 = 2.50, I17 = 1.500, I18 = 1.600, I19 = 1.650, I20 = 1.600 and J20 = 3.3195.
2. Replace column H with \`=E\` (plain high−low) throughout. Report the new I20. By what percentage does it understate the true 1.600, and how many shares does B34 now permit?
3. Change I18:I20 to a standard EMA with $\\alpha = 2/15$ seeded at 1.500. Confirm I20 = 1.6593 and report the new B34. Which of the two is your broker's chart drawing?
4. Set B28 from 2.5 to 3.5. Recompute B29, B34, B37 and B38. How much exposure did you give up, and what did you buy with it?
5. Set B24 from 1 to 2. B34 doubles; does B38 stay inside your single-name cap? At what risk-per-trade does this position breach 25% of the account?
6. Force I20 to 0.05 to simulate a floor-price flatline. Read B32, B34 and B38. Write one sentence explaining, in terms of the denominator, why the sheet has just told you to buy 385.6% of your equity.
7. Change B52 from 10 to 5, then to 2. Recompute B53:B57 for each. Does a narrower band make the limit-lock case safer or merely slower?
8. Add a ratchet to K18:K20 — \`=MAX(K19_prev, MAX(B4:B20)-3*I20)\` — and confirm the operative stop holds at 46.000 rather than dipping to 45.850 on day 16.
9. Add a row 18b in which the stock gaps down to a limit-down lock with high = low = close. Compute its true range by hand from the three candidates and confirm your formula picks the gap term.
10. Using B43 and B31, explain in two sentences why a 2.5-ATR stop on BEACONTEX equals exactly one daily range on the comparator, and what that says about the meaning of $k$.
11. Take three DSE names of very different price levels. Compute ATR(14) and ATR% for each. Rank them twice — once by raw ATR, once by ATR% — and report how many positions change. Then state which ranking you would size from and why.`,
      bn: `১. সতেরোটি সেশন থেকে §৩৯.৬-এর শিট তৈরি করুন। নিশ্চিত করুন H8 = ২.৫০, I17 = ১.৫০০, I18 = ১.৬০০, I19 = ১.৬৫০, I20 = ১.৬০০ ও J20 = ৩.৩১৯৫।
২. H কলাম সর্বত্র \`=E\` (সাধারণ high−low) দিয়ে বদলান। নতুন I20 জানান। এটি প্রকৃত ১.৬০০-কে কত শতাংশ কম দেখায়, আর B34 এখন কত শেয়ার অনুমোদন করে?
৩. I18:I20-কে ১.৫০০-এ বীজিত $\\alpha = 2/15$ সহ প্রমিত EMA-তে বদলান। নিশ্চিত করুন I20 = ১.৬৫৯৩ ও নতুন B34 জানান। আপনার ব্রোকারের চার্ট দুটির কোনটি আঁকছে?
৪. B28 ২.৫ থেকে ৩.৫ করুন। B29, B34, B37 ও B38 পুনর্গণনা করুন। কত এক্সপোজার ছাড়লেন, আর তার বিনিময়ে কী কিনলেন?
৫. B24 ১ থেকে ২ করুন। B34 দ্বিগুণ হয়; B38 কি আপনার একক-নামের সীমার ভেতরে থাকে? প্রতি ট্রেডে কত ঝুঁকিতে এই পজিশন অ্যাকাউন্টের ২৫% অতিক্রম করে?
৬. ফ্লোর-প্রাইসের সমতলরেখা অনুকরণ করতে I20 জোর করে ০.০৫ বসান। B32, B34 ও B38 পড়ুন। হরের ভাষায় এক বাক্যে ব্যাখ্যা করুন শিট কেন আপনাকে সবেমাত্র আপনার ইকুইটির ৩৮৫.৬% কিনতে বলল।
৭. B52 ১০ থেকে ৫, তারপর ২ করুন। প্রতিটির জন্য B53:B57 পুনর্গণনা করুন। সরু ব্যান্ড কি limit-lock পরিস্থিতিকে নিরাপদ করে, নাকি কেবল ধীর করে?
৮. K18:K20-তে একটি র‌্যাচেট যোগ করুন — \`=MAX(K19_prev, MAX(B4:B20)-3*I20)\` — আর নিশ্চিত করুন কার্যকর স্টপ দিন ১৬-তে ৪৫.৮৫০-এ না নেমে ৪৬.০০০-এ থাকে।
৯. একটি সারি ১৮b যোগ করুন যেখানে শেয়ারটি গ্যাপ-ডাউন দিয়ে limit-down লকে যায়, high = low = close। তিনটি প্রার্থী থেকে হাতে তার true range গণনা করুন ও নিশ্চিত করুন আপনার সূত্র গ্যাপ পদটি বেছে নেয়।
১০. B43 ও B31 ব্যবহার করে দুই বাক্যে ব্যাখ্যা করুন BEACONTEX-এ ২.৫-ATR স্টপ কেন কম্পারেটরে হুবহু একটি দৈনিক রেঞ্জের সমান, আর তা $k$-এর অর্থ সম্পর্কে কী বলে।
১১. খুব ভিন্ন মূল্যস্তরের তিনটি ডিএসই নাম নিন। প্রতিটির ATR(14) ও ATR% গণনা করুন। দুবার সাজান — একবার কাঁচা ATR-এ, একবার ATR%-এ — আর কতগুলো অবস্থান বদলায় জানান। তারপর বলুন কোন সাজানো থেকে আপনি আকার নেবেন ও কেন।`,
    },

    summary: {
      en: `- **True Range is the largest of three candidates, and the two gap terms are the whole reason the indicator exists.** On day 5 the plain range read 0.80 while true range read 2.50 — the quietest-looking day of the fortnight was the most violent one. $TR \\ge H-L$ always, so **high−low can only understate volatility**, by 10.7% on this series (1.4289 against 1.600).
- **Wilder's smoothing moves ATR by one-Nth of each new surprise.** Day 15's true range of 2.90 — nearly double normal — lifted ATR from 1.500 to exactly **1.600**. With $\\alpha = 1/14$ the effective period is **EMA(27)**, not EMA(14); a platform substituting the standard EMA returns 1.6593 and costs you 80 shares.
- **Day 17 closes at 48.20 with ATR(14) = 1.600 — the same 1.60 Chapter 30 assumed.** The 0.400 zone half-width, the 4.00 stop distance and the 2,120 share count are all denominated in one measured quantity, which is why Chapters 30 through 36 could quote everything in ATR without defining it.
- **The sizing equation is the most operationally valuable formula in the book so far:** $Q = \\lfloor A r / (k \\cdot ATR) \\rfloor$. Here **8,500 ÷ 4.00 = 2,125 → 2,120 shares, 8,480 at risk, 0.9976% of the account.**
- **Exposure is an output, never an input.** Nobody decided to commit **102,184 taka, 12.0216% of equity** — it is the arithmetic residue of one risk decision and one volatility measurement. Reverse the order and the risk becomes whatever the stop happens to imply.
- **Taka at risk is invariant to volatility; taka committed is not.** Same price, same 1% risk, ATR of 4.00 instead of 1.600: **850 shares instead of 2,120, a ratio of 2.4941**, exposure 4.82% against 12.02%. A trader who commits a fixed sum to both takes two and a half times the risk on the wilder one and never sees it.
- **Normalise before comparing anything:** ATR% = 3.3195% on BEACONTEX against 8.2988% on the comparator. **Third appearance of the same argument** — PPO in Chapter 35, %B in Chapter 38, ATR% here. Any indicator in price units must be divided by price first.
- **ATR is direction-blind by construction** — a maximum of absolute distances, invariant under reflection of the price series. Rising ATR is not bearish. Take direction from Chapters 31–35, size from here, and note that on the DSE the down-gap ATR measures is a risk you can only avoid, never monetise.
- **A circuit-limited session censors the measurement exactly when volatility is highest.** Three 10% locks take 48.20 to **35.1378**: 13.0622 per share, **8.16 ATRs**, a loss of **27,691.86 = 3.2579% of the account = 3.2655× the planned risk.** Meanwhile ATR rises only 1.600 → 2.145, up 34% during a 27.1% collapse, with the true ranges *shrinking* as the band compresses. **You cannot sell at 44.20 if there are no bids at 44.20.**
- **The floor-price case is the dangerous one, because ATR is a denominator.** A flatlined ATR of 0.05 returns **68,000 shares and 385.6% of the account** — the calmest number on the screen producing the most dangerous instruction on the sheet. Exclude administered-price windows with Chapter 26's flag, and cap single-name exposure independently of what the formula permits.
- **Discipline established:** compute ATR before opening the chart, verify your platform's smoother, round the share count down and recompute the realised risk, ratchet every trailing stop, adjust for corporate actions before measuring, and reserve for limit-lock risk with position limits rather than a wider $k$. Chapter 40 adds volume to the picture; Chapter 49 turns this single-trade equation into portfolio heat.`,
      bn: `- **True Range তিনটি প্রার্থীর মধ্যে বৃহত্তম, আর গ্যাপের দুটি পদই ইন্ডিকেটরটির অস্তিত্বের পুরো কারণ।** দিন ৫-এ সাধারণ রেঞ্জ পড়েছে ০.৮০ যখন true range পড়েছে ২.৫০ — পক্ষকালের শান্ততম-দেখতে দিনটিই ছিল সবচেয়ে হিংস্র। সর্বদা $TR \\ge H-L$, তাই **high−low অস্থিরতা কেবল কম দেখাতে পারে**, এই সিরিজে ১০.৭% (১.৪২৮৯ বনাম ১.৬০০)।
- **Wilder স্মুদিং প্রতিটি নতুন চমকের এক-N-তম অংশে ATR নাড়ায়।** দিন ১৫-এর ২.৯০ true range — প্রায় দ্বিগুণ-স্বাভাবিক — ATR-কে ১.৫০০ থেকে হুবহু **১.৬০০**-এ তুলেছে। $\\alpha = 1/14$ সহ কার্যকর পর্ব **EMA(27)**, EMA(14) নয়; প্রমিত EMA বসানো প্ল্যাটফর্ম ১.৬৫৯৩ ফেরত দেয় ও আপনার ৮০ শেয়ার খরচ করায়।
- **দিন ১৭ বন্ধ হয় ৪৮.২০-এ, ATR(14) = ১.৬০০ নিয়ে — অধ্যায় ৩০ যে ১.৬০ ধরে নিয়েছিল সেটিই।** ০.৪০০ জোন অর্ধ-প্রস্থ, ৪.০০ স্টপ দূরত্ব ও ২,১২০ শেয়ার সংখ্যা সবই একটি মাপা রাশিতে প্রকাশিত, আর তাই অধ্যায় ৩০ থেকে ৩৬ ATR সংজ্ঞায়িত না করেই সব ATR-এ উদ্ধৃত করতে পেরেছে।
- **সাইজিং সমীকরণটি এ বইয়ের এ পর্যন্ত পরিচালনগতভাবে সবচেয়ে মূল্যবান সূত্র:** $Q = \\lfloor A r / (k \\cdot ATR) \\rfloor$। এখানে **৮,৫০০ ÷ ৪.০০ = ২,১২৫ → ২,১২০ শেয়ার, ৮,৪৮০ ঝুঁকিতে, অ্যাকাউন্টের ০.৯৯৭৬%।**
- **এক্সপোজার একটি আউটপুট, কখনো ইনপুট নয়।** কেউ **১,০২,১৮৪ টাকা, ইকুইটির ১২.০২১৬%** বসানোর সিদ্ধান্ত নেয়নি — এটি একটি ঝুঁকি-সিদ্ধান্ত ও একটি অস্থিরতা-পরিমাপের পাটিগাণিতিক অবশেষ। ক্রম উল্টে দিন আর ঝুঁকি হয়ে দাঁড়াবে স্টপ যা বোঝায় তাই।
- **ঝুঁকিতে থাকা টাকা অস্থিরতা-নিরপেক্ষ; বসানো টাকা নয়।** একই দাম, একই ১% ঝুঁকি, ১.৬০০-এর বদলে ৪.০০ ATR: **২,১২০-এর বদলে ৮৫০ শেয়ার, অনুপাত ২.৪৯৪১**, এক্সপোজার ১২.০২%-এর বিপরীতে ৪.৮২%। যে ট্রেডার দুটিতেই নির্দিষ্ট অঙ্ক বসান তিনি বুনোটিতে আড়াই গুণ ঝুঁকি নেন ও কখনো দেখেন না।
- **কিছু তুলনার আগে স্বাভাবিকীকরণ করুন:** BEACONTEX-এ ATR% = ৩.৩১৯৫%, কম্পারেটরে ৮.২৯৮৮%। **একই যুক্তির তৃতীয় আবির্ভাব** — অধ্যায় ৩৫-এ PPO, অধ্যায় ৩৮-এ %B, এখানে ATR%। দামের এককের যেকোনো ইন্ডিকেটরকে আগে দাম দিয়ে ভাগ করতে হবে।
- **ATR গঠনগতভাবে দিক-অন্ধ** — পরম দূরত্বের একটি সর্বোচ্চ, মূল্য সিরিজের প্রতিফলনে অপরিবর্তিত। বাড়তে থাকা ATR মন্দাসূচক নয়। দিক নিন অধ্যায় ৩১–৩৫ থেকে, আকার নিন এখান থেকে, আর মনে রাখুন ডিএসই-তে ATR যে ডাউন-গ্যাপ মাপে তা এমন ঝুঁকি যা কেবল এড়ানো যায়, কখনো তা থেকে আয় করা যায় না।
- **সার্কিট-সীমাবদ্ধ সেশন ঠিক তখনই পরিমাপ ছেঁটে দেয় যখন অস্থিরতা সর্বোচ্চ।** তিনটি ১০% লক ৪৮.২০-কে নেয় **৩৫.১৩৭৮**-এ: প্রতি শেয়ারে ১৩.০৬২২, **৮.১৬ ATR**, ক্ষতি **২৭,৬৯১.৮৬ = অ্যাকাউন্টের ৩.২৫৭৯% = পরিকল্পিত ঝুঁকির ৩.২৬৫৫ গুণ।** এদিকে ATR ওঠে কেবল ১.৬০০ → ২.১৪৫, ২৭.১% ধসের সময় ৩৪% ঊর্ধ্বে, আর ব্যান্ড সংকুচিত হওয়ায় true range *ছোট* হচ্ছে। **৪৪.২০-এ বিড না থাকলে আপনি ৪৪.২০-এ বেচতে পারবেন না।**
- **ফ্লোর-প্রাইসের পরিস্থিতিই বিপজ্জনক, কারণ ATR একটি হর।** সমতল হয়ে যাওয়া ০.০৫ ATR ফেরত দেয় **৬৮,০০০ শেয়ার ও অ্যাকাউন্টের ৩৮৫.৬%** — পর্দার শান্ততম সংখ্যাটি শিটের সবচেয়ে বিপজ্জনক নির্দেশ তৈরি করছে। অধ্যায় ২৬-এর চিহ্ন দিয়ে প্রশাসিত-দামের জানালা বাদ দিন, আর সূত্র যা অনুমোদন করে তা নির্বিশেষে একক-নামের এক্সপোজারে সীমা বসান।
- **প্রতিষ্ঠিত শৃঙ্খলা:** চার্ট খোলার আগে ATR গণনা করুন, প্ল্যাটফর্মের স্মুদার যাচাই করুন, শেয়ার সংখ্যা নিচে গোল করে বাস্তবায়িত ঝুঁকি পুনর্গণনা করুন, প্রতিটি ট্রেইলিং স্টপ র‌্যাচেট করুন, মাপার আগে corporate action-এর জন্য সমন্বয় করুন, আর limit-lock ঝুঁকির জন্য চওড়া $k$ নয়, পজিশন সীমা দিয়ে সংরক্ষণ রাখুন। অধ্যায় ৪০ ছবিতে ভলিউম যোগ করে; অধ্যায় ৪৯ এই একক-ট্রেড সমীকরণকে পোর্টফোলিও হিটে রূপান্তরিত করে।`,
    },
  },

  interview: [
    {
      q: {
        en: 'Why does True Range have three terms instead of just high minus low?',
        bn: 'True Range-এ কেবল high বিয়োগ low না হয়ে তিনটি পদ কেন?',
      },
      a: {
        en: 'Because the last price everybody agreed on was yesterday\'s close, and any distance travelled from there is real distance whether or not the exchange happened to be open while it was travelled. High minus low measures only what happened between the opening bell and the closing bell; it is completely blind to the gap. The two extra terms fix that — the absolute distance from yesterday\'s close up to today\'s high, and the absolute distance from yesterday\'s close down to today\'s low — and you take whichever of the three is largest. On the worked data day five makes the case as clearly as anything could: the stock closed at forty-seven point four zero, opened away on news, and then traded all session inside a band of eighty paisa. High minus low says zero point eight zero, which is the second-quietest reading in the whole sample. True range says two point five zero, which is the largest of the first fourteen. So the plain range would have recorded the most violent day of the fortnight as a nap, and then you would size your next trade off an average that had never seen it. Two things follow that I want to say precisely. First, true range is always greater than or equal to high minus low, so using the plain range can only ever understate volatility, never overstate it — the bias is silent and one-directional. On this series it understates by ten point seven percent, one point four two eight nine against one point six zero zero. Second, the maximum operator is a selector rather than a gap surcharge: on day sixteen the ordinary intraday range of two point three zero wins outright because the stock opened flat and then genuinely travelled during the session. And on the Dhaka exchange this matters more than in most markets, because prices gap constantly on price-sensitive announcements, record dates and policy news, so the term you would be discarding is exactly the one that carries the overnight risk you cannot act on.',
        bn: 'কারণ সবাই শেষ যে দামে একমত হয়েছিলেন তা গতকালের ক্লোজ, আর সেখান থেকে অতিক্রান্ত যেকোনো দূরত্ব প্রকৃত দূরত্ব — তা অতিক্রম করার সময় এক্সচেঞ্জ খোলা ছিল কি না নির্বিশেষে। High বিয়োগ low কেবল খোলার ঘণ্টা আর বন্ধের ঘণ্টার মাঝে কী ঘটেছে তা মাপে; গ্যাপে এটি সম্পূর্ণ অন্ধ। বাড়তি দুটি পদ তা ঠিক করে — গতকালের ক্লোজ থেকে আজকের high পর্যন্ত পরম দূরত্ব, আর গতকালের ক্লোজ থেকে আজকের low পর্যন্ত পরম দূরত্ব — আর আপনি তিনটির যেটি বৃহত্তম সেটি নেন। কষে দেখানো ডেটায় দিন পাঁচ যুক্তিটি যতটা স্পষ্ট করা সম্ভব ততটাই করে: শেয়ারটি সাতচল্লিশ দশমিক চার শূন্যতে বন্ধ হয়েছিল, খবরে দূরে খুলেছিল, তারপর গোটা সেশন আশি পয়সার ব্যান্ডে লেনদেন হয়েছে। High বিয়োগ low বলে শূন্য দশমিক আট শূন্য, যা গোটা নমুনার দ্বিতীয় শান্ততম পাঠ। True range বলে দুই দশমিক পাঁচ শূন্য, যা প্রথম চোদ্দটির বৃহত্তম। অর্থাৎ সাধারণ রেঞ্জ পক্ষকালের সবচেয়ে হিংস্র দিনটিকে ঘুম হিসেবে লিপিবদ্ধ করত, আর তারপর আপনি পরের ট্রেডের আকার নিতেন এমন একটি গড় থেকে যা তা কখনো দেখেনি। দুটি বিষয় এখান থেকে আসে যা আমি নিখুঁতভাবে বলতে চাই। প্রথমত, true range সবসময় high বিয়োগ low-এর সমান বা বেশি, তাই সাধারণ রেঞ্জ ব্যবহারে অস্থিরতা কেবল কম দেখানো সম্ভব, বেশি নয় — পক্ষপাতটি নীরব ও এক-মুখী। এই সিরিজে এটি দশ দশমিক সাত শতাংশ কম দেখায়, এক দশমিক চার দুই আট নয় বনাম এক দশমিক ছয় শূন্য শূন্য। দ্বিতীয়ত, সর্বোচ্চ অপারেটরটি গ্যাপের বাড়তি মাশুল নয়, একটি নির্বাচক: দিন ষোলোতে দিনের ভেতরের সাধারণ রেঞ্জ দুই দশমিক তিন শূন্য সরাসরি জেতে, কারণ শেয়ারটি সমতল খুলে তারপর সেশনজুড়ে সত্যিকার পথ চলেছে। আর ঢাকার এক্সচেঞ্জে এটি বেশিরভাগ বাজারের চেয়ে বেশি গুরুত্বপূর্ণ, কারণ মূল্য-সংবেদনশীল ঘোষণা, রেকর্ড ডেট ও নীতি সংবাদে দাম অনবরত গ্যাপ দেয়, তাই আপনি যে পদটি বাদ দিচ্ছেন সেটিই ঠিক সেই রাতের ঝুঁকি বহন করে যাতে আপনার কিছু করার নেই।',
      },
    },
    {
      q: {
        en: 'Walk me through how you decide how many shares to buy.',
        bn: 'কত শেয়ার কিনবেন তা কীভাবে ঠিক করেন আমাকে বলুন।',
      },
      a: {
        en: 'I decide it last, and that is the whole point. The sequence is equity, then tolerance, then volatility, then multiple, and the share count falls out of a division. Concretely, on the worked case: the account is eight lakh fifty thousand taka and I am willing to lose one percent on a single trade, so the risk budget is eight thousand five hundred taka. That decision is about me and it is made before I have looked at any chart. Then the stock speaks: the fourteen-period Wilder ATR reads one point six zero zero, and at a multiple of two and a half the stop distance is four taka exactly, which puts the stop at forty-four point two zero from an entry of forty-eight point two zero. Now divide — eight thousand five hundred over four is two thousand one hundred twenty-five shares — and round down to the tradeable lot of ten, which gives two thousand one hundred twenty. Down, never to nearest, because rounding up to two thousand one hundred thirty puts eight thousand five hundred twenty taka at risk, which is over budget by construction on every trade forever. Then I recompute what I actually took rather than what I planned: two thousand one hundred twenty times four is eight thousand four hundred eighty taka, which is zero point nine nine seven six percent of the account. And only now do I look at the money: two thousand one hundred twenty shares at forty-eight point two zero is one lakh two thousand one hundred eighty-four taka, twelve point zero two one six percent of equity. I want to be emphatic about that last figure, because it is the sentence to take away from the whole chapter — nobody decided to put a lakh into this share. It is the arithmetic residue of one risk decision and one volatility measurement. If you reverse the order and pick the money first, then your risk is whatever the stop happens to imply, which is to say unknown, and it will be different on every trade without your ever noticing.',
        bn: 'আমি এটি সবার শেষে ঠিক করি, আর সেটিই মূল কথা। ক্রমটি হলো ইকুইটি, তারপর সহনশীলতা, তারপর অস্থিরতা, তারপর গুণক, আর শেয়ার সংখ্যা একটি ভাগফল থেকে বেরিয়ে আসে। বাস্তবে, কষে দেখানো ক্ষেত্রে: অ্যাকাউন্ট আট লাখ পঞ্চাশ হাজার টাকা আর আমি একটি ট্রেডে এক শতাংশ হারাতে রাজি, তাই ঝুঁকি বাজেট আট হাজার পাঁচশো টাকা। ঐ সিদ্ধান্তটি আমাকে নিয়ে আর কোনো চার্ট দেখার আগেই নেওয়া। তারপর শেয়ারটি কথা বলে: চোদ্দ-পর্বের Wilder ATR পড়ে এক দশমিক ছয় শূন্য শূন্য, আর আড়াই গুণকে স্টপ দূরত্ব ঠিক চার টাকা, যা আটচল্লিশ দশমিক দুই শূন্য প্রবেশ থেকে স্টপ বসায় চুয়াল্লিশ দশমিক দুই শূন্যতে। এবার ভাগ করুন — আট হাজার পাঁচশো ভাগ চার সমান দুই হাজার একশো পঁচিশ শেয়ার — আর দশের লেনদেনযোগ্য লটে নিচের দিকে গোল করুন, যা দেয় দুই হাজার একশো কুড়ি। নিচে, কখনো নিকটতমে নয়, কারণ দুই হাজার একশো ত্রিশে ওঠালে ঝুঁকিতে বসে আট হাজার পাঁচশো কুড়ি টাকা, যা গঠনগতভাবেই প্রতিটি ট্রেডে চিরকাল বাজেটের বাইরে। তারপর আমি যা পরিকল্পনা করেছি তা নয়, যা সত্যিই নিয়েছি তা পুনর্গণনা করি: দুই হাজার একশো কুড়ি গুণ চার সমান আট হাজার চারশো আশি টাকা, যা অ্যাকাউন্টের শূন্য দশমিক নয় নয় সাত ছয় শতাংশ। আর কেবল এখনই আমি টাকার দিকে তাকাই: আটচল্লিশ দশমিক দুই শূন্যতে দুই হাজার একশো কুড়ি শেয়ার মানে এক লাখ দুই হাজার একশো চুরাশি টাকা, ইকুইটির বারো দশমিক শূন্য দুই এক ছয় শতাংশ। শেষ সংখ্যাটি নিয়ে আমি জোর দিতে চাই, কারণ গোটা অধ্যায় থেকে নেওয়ার বাক্যটি এটিই — কেউ এই শেয়ারে এক লাখ টাকা বসানোর সিদ্ধান্ত নেয়নি। এটি একটি ঝুঁকি-সিদ্ধান্ত ও একটি অস্থিরতা-পরিমাপের পাটিগাণিতিক অবশেষ। ক্রম উল্টে আগে টাকা বাছলে আপনার ঝুঁকি হয়ে দাঁড়ায় স্টপ যা বোঝায় তাই, অর্থাৎ অজানা, আর তা প্রতিটি ট্রেডে ভিন্ন হবে আপনি কখনো টের না পেয়েই।',
      },
    },
    {
      q: {
        en: 'A colleague says a five percent stop is simpler and works fine. Convince him otherwise.',
        bn: 'এক সহকর্মী বলছেন পাঁচ শতাংশের স্টপ সহজ ও ভালোই কাজ করে। তাঁকে অন্যভাবে বোঝান।',
      },
      a: {
        en: 'A five percent stop is a statement about his wallet, not about the stock, and the arithmetic shows it immediately. On the worked name the fourteen-period ATR is one point six zero zero against a price of forty-eight point two zero, so one normal day of movement is three point three two percent of the price. A five percent stop is therefore one and a half daily ranges from the entry — he will be removed from the position on a perfectly ordinary Tuesday when nothing whatsoever happened, and he will attribute the loss to bad stock-picking rather than to a short rope. Now put the same five percent stop on the comparator in the sheet, a thin news-driven name with an ATR of four taka at the same price, which is eight point three zero percent of price. Five percent is now less than two-thirds of one daily range. He will be stopped out repeatedly and almost immediately, every single time. The same rule produces a stop that is too wide on one instrument and absurdly tight on another, and he cannot tell which because the number looks identical. The volatility-scaled version asks a coherent question instead: how far outside normal movement must price travel before my reason for being here is wrong? Two and a half ATRs is roughly further than this share usually goes in a day, two and a half times over, and that is a falsifiable claim about the share. On the worked case it lands at eight point two nine eight eight percent of the entry — but notice that I never chose eight point three, it is an output. And there is a lovely coincidence in the sheet that makes the point better than any argument: the two-and-a-half-ATR stop distance on the quiet name is eight point two nine eight eight percent of price, and the volatile comparator\'s single daily ATR is also eight point two nine eight eight percent of price. One trader\'s carefully chosen wide stop is the other stock\'s ordinary Tuesday. That is what measuring in the instrument\'s own units means, and no fixed percentage can do it.',
        bn: 'পাঁচ শতাংশের স্টপ তাঁর মানিব্যাগ সম্পর্কে একটি বক্তব্য, শেয়ারটি সম্পর্কে নয়, আর পাটিগণিত তা সঙ্গে সঙ্গে দেখিয়ে দেয়। কষে দেখানো নামে চোদ্দ-পর্বের ATR এক দশমিক ছয় শূন্য শূন্য, দাম আটচল্লিশ দশমিক দুই শূন্য, তাই একদিনের স্বাভাবিক চলাচল দামের তিন দশমিক তিন দুই শতাংশ। অতএব পাঁচ শতাংশের স্টপ প্রবেশ থেকে দেড়টি দৈনিক রেঞ্জ দূরে — কিছুই না ঘটা একেবারে সাধারণ কোনো মঙ্গলবারে তিনি পজিশন থেকে অপসারিত হবেন, আর ক্ষতিটিকে ছোট দড়ির নয়, খারাপ শেয়ার বাছাইয়ের দোষ দেবেন। এবার ঐ একই পাঁচ শতাংশ স্টপ শিটের কম্পারেটরে বসান, একই দামে চার টাকা ATR-এর একটি পাতলা সংবাদ-চালিত নাম, যা দামের আট দশমিক তিন শূন্য শতাংশ। পাঁচ শতাংশ এখন একটি দৈনিক রেঞ্জের দুই-তৃতীয়াংশেরও কম। তিনি বারবার ও প্রায় তাৎক্ষণিকভাবে স্টপ আউট হবেন, প্রতিবারই। একই নিয়ম একটি উপকরণে অতি চওড়া আর অন্যটিতে হাস্যকর আঁটসাঁট স্টপ তৈরি করে, আর তিনি বুঝতে পারেন না কোনটি, কারণ সংখ্যাটি অভিন্ন দেখায়। অস্থিরতা-মাপা সংস্করণ বরং একটি সংগতিপূর্ণ প্রশ্ন করে: আমার এখানে থাকার কারণ ভুল প্রমাণ হওয়ার আগে দামকে স্বাভাবিক চলাচলের কতটা বাইরে যেতে হবে? আড়াই ATR মোটামুটি মানে এই শেয়ার একদিনে সাধারণত যতটা যায় তার চেয়ে দূরে, আড়াই গুণ, আর এটি শেয়ারটি সম্পর্কে একটি যাচাইযোগ্য দাবি। কষে দেখানো ক্ষেত্রে তা দাঁড়ায় প্রবেশের আট দশমিক দুই নয় আট আট শতাংশে — কিন্তু লক্ষ করুন আমি আট দশমিক তিন কখনো বাছিনি, এটি একটি আউটপুট। আর শিটে একটি চমৎকার কাকতালীয় ব্যাপার আছে যা যেকোনো যুক্তির চেয়ে ভালোভাবে কথাটি বলে: শান্ত নামের আড়াই-ATR স্টপ দূরত্ব দামের আট দশমিক দুই নয় আট আট শতাংশ, আর অস্থির কম্পারেটরের একটিমাত্র দৈনিক ATR-ও দামের আট দশমিক দুই নয় আট আট শতাংশ। একজন ট্রেডারের যত্ন করে বাছা চওড়া স্টপ অন্য শেয়ারটির সাধারণ মঙ্গলবার। উপকরণের নিজস্ব এককে মাপা বলতে এটাই বোঝায়, আর কোনো নির্দিষ্ট শতাংশ তা করতে পারে না।',
      },
    },
    {
      q: {
        en: 'What happens to your ATR-based stop when a DSE name locks limit-down for three sessions?',
        bn: 'একটি ডিএসই নাম তিন সেশন limit-down-এ আটকে গেলে আপনার ATR-ভিত্তিক স্টপের কী হয়?',
      },
      a: {
        en: 'It is jumped, and then it is irrelevant, and the arithmetic is worth knowing precisely rather than vaguely. Take the worked position: two thousand one hundred twenty shares bought at forty-eight point two zero with a stop at forty-four point two zero, which is two and a half ATRs away and represents a planned loss of eight thousand four hundred eighty taka, just under one percent of the account. Assume a ten percent daily band. Bad news arrives, the share locks limit-down at the open, and there are no bids at all — you cannot sell at forty-four point two zero because nobody is offering forty-four point two zero. Three sessions of that takes the price to forty-eight point two zero times zero point nine cubed, which is thirty-five point one three seven eight. The loss per share is thirteen point zero six two two taka, which is eight point one six ATRs against a stop set at two and a half. On the full position that is twenty-seven thousand six hundred ninety-two taka, three point two five seven nine percent of the account, and three point two six five five times the risk I had planned. Now here is the part I think is genuinely underappreciated. Watch what the indicator does during that episode. On a locked session high equals low equals close, so the true range is purely the gap term — four point eight two, then four point three three eight, then three point nine zero four, shrinking in taka because the band compresses along with the falling reference price. ATR climbs from one point six zero zero to one point eight three zero to two point zero zero nine to two point one four five. Up thirty-four percent during a twenty-seven percent collapse, and getting calmer-looking the longer the disaster runs. The indicator is not lying — it is faithfully measuring a censored distribution, because the exchange did not permit the real one to print. So my conclusion is that ATR sizes the normal case, which is most days and most trades, and it does that job very well. The limit-lock case has to be reserved for separately: a hard cap on single-name exposure irrespective of what the formula permits, a sector cap because limit moves cluster by sector, and the acceptance that in a locked market your realised loss is set by liquidity rather than by your stop order. What you must not do is widen the multiple to compensate, because that shrinks your position on the ninety-eight percent of days that behave normally while doing nothing at all about the two percent that do not.',
        bn: 'সেটি ডিঙানো হয়, তারপর অপ্রাসঙ্গিক হয়ে যায়, আর পাটিগণিতটি অস্পষ্টভাবে নয়, নিখুঁতভাবে জানা দরকার। কষে দেখানো পজিশনটি নিন: আটচল্লিশ দশমিক দুই শূন্যতে কেনা দুই হাজার একশো কুড়ি শেয়ার, স্টপ চুয়াল্লিশ দশমিক দুই শূন্যতে, যা আড়াই ATR দূরে আর যার পরিকল্পিত ক্ষতি আট হাজার চারশো আশি টাকা, অ্যাকাউন্টের এক শতাংশের সামান্য নিচে। দশ শতাংশ দৈনিক ব্যান্ড ধরুন। খারাপ খবর আসে, শেয়ারটি খোলার সঙ্গে সঙ্গে limit-down-এ আটকে যায়, আর কোনো বিডই নেই — আপনি চুয়াল্লিশ দশমিক দুই শূন্যতে বেচতে পারবেন না কারণ কেউ চুয়াল্লিশ দশমিক দুই শূন্য দিচ্ছেন না। তিনটি এমন সেশন দামকে নেয় আটচল্লিশ দশমিক দুই শূন্য গুণ শূন্য দশমিক নয়-এর ঘনফলে, অর্থাৎ পঁয়ত্রিশ দশমিক এক তিন সাত আটে। প্রতি শেয়ারে ক্ষতি তেরো দশমিক শূন্য ছয় দুই দুই টাকা, যা আড়াইয়ে বসানো স্টপের বিপরীতে আট দশমিক এক ছয় ATR। পুরো পজিশনে তা সাতাশ হাজার ছয়শো বিরানব্বই টাকা, অ্যাকাউন্টের তিন দশমিক দুই পাঁচ সাত নয় শতাংশ, আর আমার পরিকল্পিত ঝুঁকির তিন দশমিক দুই ছয় পাঁচ পাঁচ গুণ। এবার যে অংশটিকে আমি সত্যিই অবমূল্যায়িত মনে করি। ঐ পর্বে ইন্ডিকেটর কী করে দেখুন। আটকে যাওয়া সেশনে high সমান low সমান close, তাই true range নিছক গ্যাপ পদ — চার দশমিক আট দুই, তারপর চার দশমিক তিন তিন আট, তারপর তিন দশমিক নয় শূন্য চার, টাকায় ছোট হচ্ছে কারণ পড়তে থাকা রেফারেন্স দামের সঙ্গে ব্যান্ড সংকুচিত হয়। ATR ওঠে এক দশমিক ছয় শূন্য শূন্য থেকে এক দশমিক আট তিন শূন্য, তারপর দুই দশমিক শূন্য শূন্য নয়, তারপর দুই দশমিক এক চার পাঁচ। সাতাশ শতাংশ ধসের সময় চৌত্রিশ শতাংশ ঊর্ধ্বে, আর দুর্যোগ যত দীর্ঘ হয় তত শান্ত-দেখতে। ইন্ডিকেটর মিথ্যা বলছে না — এটি বিশ্বস্তভাবে একটি ছেঁটে দেওয়া বণ্টন মাপছে, কারণ এক্সচেঞ্জ প্রকৃতটিকে ছাপতে দেয়নি। তাই আমার উপসংহার হলো ATR স্বাভাবিক পরিস্থিতির আকার নির্ধারণ করে, যা বেশিরভাগ দিন ও বেশিরভাগ ট্রেড, আর সে কাজটি খুব ভালোভাবেই করে। Limit-lock পরিস্থিতির জন্য আলাদাভাবে সংরক্ষণ রাখতে হয়: সূত্র যাই অনুমোদন করুক একক-নামের এক্সপোজারে কঠিন সীমা, খাতভিত্তিক সীমা কারণ limit move খাত ধরে গুচ্ছবদ্ধ হয়, আর এই মেনে নেওয়া যে আটকে থাকা বাজারে আপনার বাস্তবায়িত ক্ষতি নির্ধারণ করে তারল্য, আপনার স্টপ অর্ডার নয়। যা করবেন না তা হলো ক্ষতিপূরণে গুণক বাড়ানো, কারণ তা যে আটানব্বই শতাংশ দিন স্বাভাবিক আচরণ করে সেখানে আপনার পজিশন ছোট করে, আর যে দুই শতাংশ করে না সে সম্পর্কে কিছুই করে না।',
      },
    },
    {
      q: {
        en: 'You said the floor-price case is more dangerous than the limit-lock case. Why?',
        bn: 'আপনি বলেছেন ফ্লোর-প্রাইসের পরিস্থিতি limit-lock-এর চেয়ে বেশি বিপজ্জনক। কেন?',
      },
      a: {
        en: 'Because ATR sits in the denominator of the sizing equation, and a denominator going toward zero sends the quotient toward infinity. In the limit-lock case the indicator understates the risk on a position you already hold, and you lose about three and a quarter times what you planned — bad, survivable, and something a hard exposure cap protects you against. In the floor-price case the indicator actively instructs you to build a position that can end you. Here is the arithmetic. During the floor-price regime a share could not trade below an administered price, so high, low and close printed the same number for weeks on end and every true range term collapsed to nearly nothing. Say the fourteen-period ATR decays to five paisa. The stop distance is two and a half times zero point zero five, which is twelve and a half paisa. Divide the eight thousand five hundred taka risk budget by that and you get sixty-eight thousand shares. At forty-eight taka twenty that is a position of thirty-two lakh seventy-seven thousand six hundred taka, against an account of eight lakh fifty thousand — three hundred eighty-five point six percent of equity, in a share that is not actually trading. The formula is not broken; it is doing exactly what it was told, and what it was told was a lie about volatility manufactured by a regulation. And the psychology makes it worse, because the share looked like the calmest asset on the exchange right up until the floor was lifted, at which point all the suppressed selling discharged at once. So the rule I would state, and I would state it as a rule and not as a caution, is this: never size from an ATR measured under an administered price — flag those windows and exclude them before you compute anything, which is the same flag chapter twenty-six built and chapter thirty applied before counting touches. And independently of that, always bound the share count by an exposure cap, because a formula with a vanishing denominator must never be the only thing standing between you and an order. Look at the sensitivity if you want the point in one line: at an ATR of one point six zero a one-paisa measurement error moves the share count by about thirteen shares; at an ATR of five paisa the same one-paisa error moves it by thirteen thousand six hundred.',
        bn: 'কারণ ATR সাইজিং সমীকরণের হরে বসে, আর শূন্যের দিকে যাওয়া হর ভাগফলকে অসীমের দিকে পাঠায়। Limit-lock পরিস্থিতিতে ইন্ডিকেটর আপনার ইতিমধ্যে ধরে থাকা পজিশনের ঝুঁকি কম দেখায়, আর আপনি পরিকল্পনার প্রায় সোয়া তিন গুণ হারান — খারাপ, তবে বেঁচে যাওয়ার মতো, আর একটি কঠিন এক্সপোজার সীমা আপনাকে তা থেকে রক্ষা করে। ফ্লোর-প্রাইসের পরিস্থিতিতে ইন্ডিকেটর সক্রিয়ভাবে আপনাকে এমন একটি পজিশন গড়তে নির্দেশ দেয় যা আপনাকে শেষ করে দিতে পারে। পাটিগণিতটি এই। ফ্লোর-প্রাইস ব্যবস্থার সময় একটি শেয়ার প্রশাসিত দামের নিচে লেনদেন করতে পারত না, তাই সপ্তাহের পর সপ্তাহ high, low ও close একই সংখ্যা ছাপত আর প্রতিটি true range পদ প্রায় শূন্যে ভেঙে পড়ত। ধরুন চোদ্দ-পর্বের ATR ক্ষয়ে পাঁচ পয়সায় নামল। স্টপ দূরত্ব আড়াই গুণ শূন্য দশমিক শূন্য পাঁচ, অর্থাৎ সাড়ে বারো পয়সা। আট হাজার পাঁচশো টাকার ঝুঁকি বাজেট তা দিয়ে ভাগ করুন, পাবেন আটষট্টি হাজার শেয়ার। আটচল্লিশ টাকা কুড়িতে তা বত্রিশ লাখ সাতাত্তর হাজার ছয়শো টাকার পজিশন, আট লাখ পঞ্চাশ হাজারের অ্যাকাউন্টের বিপরীতে — ইকুইটির তিনশো পঁচাশি দশমিক ছয় শতাংশ, এমন একটি শেয়ারে যা আসলে লেনদেনই হচ্ছে না। সূত্রটি নষ্ট নয়; একে যা বলা হয়েছে ঠিক তাই করছে, আর যা বলা হয়েছে তা ছিল একটি প্রবিধানের তৈরি অস্থিরতা সম্পর্কে মিথ্যা। আর মনস্তত্ত্ব একে আরও খারাপ করে, কারণ ফ্লোর তোলার ঠিক আগ পর্যন্ত শেয়ারটিকে এক্সচেঞ্জের শান্ততম সম্পদ মনে হয়েছে, আর তারপর চেপে রাখা সমস্ত বিক্রি একসঙ্গে নিঃসৃত হয়েছে। তাই আমি যে নিয়মটি বলব, আর সতর্কতা নয় নিয়ম হিসেবেই বলব, তা হলো: প্রশাসিত দামের অধীনে মাপা ATR থেকে কখনো আকার নির্ধারণ করবেন না — ঐ জানালাগুলো চিহ্নিত করে কিছু গণনার আগেই বাদ দিন, যা অধ্যায় ছাব্বিশের তৈরি ও অধ্যায় ত্রিশে টাচ গোনার আগে প্রয়োগ করা একই চিহ্ন। আর তা নির্বিশেষে, শেয়ার সংখ্যাকে সবসময় একটি এক্সপোজার সীমা দিয়ে বেঁধে দিন, কারণ যে সূত্রের হর অদৃশ্য হয়ে যেতে পারে তা কখনোই আপনার ও একটি অর্ডারের মাঝে একমাত্র জিনিস হতে পারে না। এক লাইনে কথাটি চাইলে সংবেদনশীলতা দেখুন: এক দশমিক ছয় শূন্য ATR-এ এক পয়সার পরিমাপ ভুল শেয়ার সংখ্যা প্রায় তেরো নাড়ায়; পাঁচ পয়সা ATR-এ ঐ একই এক পয়সার ভুল তা তেরো হাজার ছয়শো নাড়ায়।',
      },
    },
    {
      q: {
        en: 'Does a rising ATR tell you the market is about to fall?',
        bn: 'বাড়তে থাকা ATR কি বলে যে বাজার পড়তে চলেছে?',
      },
      a: {
        en: 'No, and the reason is structural rather than empirical. True range is a maximum of absolute distances. If you reflect the entire price series about any horizontal line, every high becomes a low, every gap up becomes a gap down, and every single true range comes out unchanged. A share rising one point six zero taka a day and a share collapsing one point six zero taka a day have exactly the same ATR. The indicator is direction-blind by construction, and no amount of interpretation can extract a direction from it. Now, that is a feature before it is a limitation. It is precisely because ATR carries no directional opinion of its own that it can serve as the unit of measurement everywhere else — chapter thirty scaled its support zone half-width to ATR, chapter thirty-three measured consolidation in ATR, chapter thirty-eight compared band width against it, and chapter thirty measured break penetration in ATR units rather than in taka. If ATR had a view, it would have contaminated all of theirs. The limitation is that people badly want it to mean something directional, and on the Dhaka exchange the temptation is real, because declines here are typically faster and more disorderly than advances, so expanding volatility genuinely does coincide with falling prices more often than not. But that is a property of this market, not of the formula, and if you start trading on it you have quietly replaced a measurement with a superstition. My discipline is to keep the two decisions physically separate on the sheet: direction comes from chapters thirty-one to thirty-five, size comes from ATR, and neither cell is allowed to reference the other. There is one honest asymmetry worth naming, though. Because there is no reliable short side on the DSE, the down-gap that the gap-down term dutifully measures is a risk you can only avoid by not holding — never one you can monetise. ATR measures both tails; you can only trade one of them.',
        bn: 'না, আর কারণটি অভিজ্ঞতালব্ধ নয়, কাঠামোগত। True range হলো পরম দূরত্বের একটি সর্বোচ্চ। গোটা মূল্য সিরিজকে যেকোনো অনুভূমিক রেখার সাপেক্ষে প্রতিফলিত করলে প্রতিটি high হয়ে যায় low, প্রতিটি গ্যাপ-আপ হয়ে যায় গ্যাপ-ডাউন, আর প্রতিটি true range অপরিবর্তিত বেরিয়ে আসে। দিনে এক দশমিক ছয় শূন্য টাকা বাড়া শেয়ার আর দিনে এক দশমিক ছয় শূন্য টাকা ধসা শেয়ারের ATR হুবহু একই। ইন্ডিকেটরটি গঠনগতভাবে দিক-অন্ধ, আর যত ব্যাখ্যাই করুন তা থেকে দিক বের করা যাবে না। এখন, এটি সীমাবদ্ধতা হওয়ার আগে একটি সুবিধা। ঠিক এ কারণেই যে ATR নিজের কোনো দিক-সংক্রান্ত মত বহন করে না, এটি অন্য সর্বত্র পরিমাপের একক হিসেবে কাজ করতে পারে — অধ্যায় ত্রিশ তার সাপোর্ট জোনের অর্ধ-প্রস্থ ATR-এ মেপেছে, অধ্যায় তেত্রিশ consolidation ATR-এ মেপেছে, অধ্যায় আটত্রিশ ব্যান্ড প্রস্থ তার বিপরীতে তুলনা করেছে, আর অধ্যায় ত্রিশ ব্রেকের অনুপ্রবেশ টাকায় নয় ATR এককে মেপেছে। ATR-এর নিজস্ব মত থাকলে তা ওদের সবার মত দূষিত করত। সীমাবদ্ধতাটি হলো মানুষ ভীষণভাবে চান এটি দিক-সংক্রান্ত কিছু বোঝাক, আর ঢাকার এক্সচেঞ্জে প্রলোভনটি বাস্তব, কারণ এখানে পতন সাধারণত উত্থানের চেয়ে দ্রুত ও বেশি বিশৃঙ্খল, তাই সম্প্রসারিত অস্থিরতা সত্যিই পড়তি দামের সঙ্গে প্রায়ই মিলে যায়। কিন্তু তা এই বাজারের ধর্ম, সূত্রের নয়, আর তার ওপর ট্রেড শুরু করলে আপনি নীরবে একটি পরিমাপকে একটি কুসংস্কার দিয়ে বদলে ফেললেন। আমার শৃঙ্খলা হলো শিটে দুটি সিদ্ধান্ত ভৌতভাবে আলাদা রাখা: দিক আসে অধ্যায় একত্রিশ থেকে পঁয়ত্রিশ থেকে, আকার আসে ATR থেকে, আর কোনো ঘরকে অন্যটি উল্লেখ করতে দেওয়া হয় না। তবে একটি সৎ অসমতা নাম ধরে বলার মতো। যেহেতু ডিএসই-তে নির্ভরযোগ্য শর্ট সাইড নেই, গ্যাপ-ডাউন পদ যে ডাউন-গ্যাপ কর্তব্যপরায়ণভাবে মাপে তা এমন ঝুঁকি যা আপনি কেবল ধরে না রেখে এড়াতে পারেন — কখনো তা থেকে আয় করতে পারেন না। ATR দুটি লেজই মাপে; আপনি কেবল একটিতে ট্রেড করতে পারেন।',
      },
    },
  ],

  quiz: [
    {
      q: {
        en: 'True Range is defined as the maximum of:',
        bn: 'True Range-এর সংজ্ঞা — এদের সর্বোচ্চ:',
      },
      options: {
        en: [
          'High−Low, Close−Open, and High−Close',
          'High−Low, |High − previous Close|, and |previous Close − Low|',
          'High−Low and the previous day\'s High−Low',
          'Close−previous Close and High−Low',
        ],
        bn: [
          'High−Low, Close−Open, এবং High−Close',
          'High−Low, |High − আগের Close|, এবং |আগের Close − Low|',
          'High−Low এবং আগের দিনের High−Low',
          'Close−আগের Close এবং High−Low',
        ],
      },
      answer: 1,
    },
    {
      q: {
        en: 'On day 5 the candidates are 0.80, 2.50 and 1.70. The true range is:',
        bn: 'দিন ৫-এ প্রার্থীগুলো ০.৮০, ২.৫০ ও ১.৭০। True range হলো:',
      },
      options: {
        en: ['0.80', '1.70', '2.50', '1.667 (the average)'],
        bn: ['০.৮০', '১.৭০', '২.৫০', '১.৬৬৭ (গড়)'],
      },
      answer: 2,
    },
    {
      q: {
        en: 'The first fourteen true ranges sum to 21.00. The seed ATR(14) is:',
        bn: 'প্রথম চোদ্দটি true range-এর যোগফল ২১.০০। বীজ ATR(14) হলো:',
      },
      options: {
        en: ['1.400', '1.500', '1.600', '1.650'],
        bn: ['১.৪০০', '১.৫০০', '১.৬০০', '১.৬৫০'],
      },
      answer: 1,
    },
    {
      q: {
        en: 'With ATR(14) = 1.500 and a new true range of 2.90, Wilder\'s recursion gives:',
        bn: 'ATR(14) = ১.৫০০ ও নতুন true range ২.৯০ হলে Wilder-এর পুনরাবৃত্তি দেয়:',
      },
      options: {
        en: ['1.600', '1.700', '2.200', '2.900'],
        bn: ['১.৬০০', '১.৭০০', '২.২০০', '২.৯০০'],
      },
      answer: 0,
    },
    {
      q: {
        en: 'Wilder\'s smoothing with N = 14 behaves like a standard EMA of period:',
        bn: 'N = ১৪ সহ Wilder স্মুদিং যে পর্বের প্রমিত EMA-র মতো আচরণ করে:',
      },
      options: {
        en: ['7', '14', '27', '28'],
        bn: ['৭', '১৪', '২৭', '২৮'],
      },
      answer: 2,
    },
    {
      q: {
        en: 'Account 850,000, risk 1%, ATR 1.600, k = 2.5, lot 10. Shares to buy:',
        bn: 'অ্যাকাউন্ট ৮,৫০,০০০, ঝুঁকি ১%, ATR ১.৬০০, k = ২.৫, লট ১০। কেনার শেয়ার:',
      },
      options: {
        en: ['850', '2,120', '2,125', '2,130'],
        bn: ['৮৫০', '২,১২০', '২,১২৫', '২,১৩০'],
      },
      answer: 1,
    },
    {
      q: {
        en: 'In the position-sizing equation, the exposure of 12.0216% of the account is:',
        bn: 'পজিশন-সাইজিং সমীকরণে অ্যাকাউন্টের ১২.০২১৬% এক্সপোজারটি:',
      },
      options: {
        en: [
          'An input the trader chooses first',
          'An output that falls out of risk and volatility',
          'A regulatory limit on the DSE',
          'The same for every stock at the same price',
        ],
        bn: [
          'ট্রেডারের আগে বেছে নেওয়া একটি ইনপুট',
          'ঝুঁকি ও অস্থিরতা থেকে বেরিয়ে আসা একটি আউটপুট',
          'ডিএসই-র একটি নিয়ন্ত্রক সীমা',
          'একই দামের প্রতিটি শেয়ারে অভিন্ন',
        ],
      },
      answer: 1,
    },
    {
      q: {
        en: 'Same price and same 1% risk, but ATR is 4.00 instead of 1.600. The share count:',
        bn: 'একই দাম ও একই ১% ঝুঁকি, কিন্তু ATR ১.৬০০-এর বদলে ৪.০০। শেয়ার সংখ্যা:',
      },
      options: {
        en: [
          'Is unchanged, because risk is unchanged',
          'Rises by a factor of 2.4941',
          'Falls by a factor of 2.4941, to 850',
          'Depends on the direction of the trend',
        ],
        bn: [
          'অপরিবর্তিত, কারণ ঝুঁকি অপরিবর্তিত',
          '২.৪৯৪১ গুণ বাড়ে',
          '২.৪৯৪১ গুণ কমে, ৮৫০-এ',
          'প্রবণতার দিকের ওপর নির্ভর করে',
        ],
      },
      answer: 2,
    },
    {
      q: {
        en: 'Three consecutive 10% limit-down locks from 48.20 produce a loss equal to:',
        bn: '৪৮.২০ থেকে পরপর তিনটি ১০% limit-down লক যে ক্ষতি তৈরি করে:',
      },
      options: {
        en: [
          '1.00× the planned risk — the stop worked',
          '2.00× the planned risk',
          '3.2655× the planned risk',
          '8.16× the planned risk',
        ],
        bn: [
          'পরিকল্পিত ঝুঁকির ১.০০ গুণ — স্টপ কাজ করেছে',
          'পরিকল্পিত ঝুঁকির ২.০০ গুণ',
          'পরিকল্পিত ঝুঁকির ৩.২৬৫৫ গুণ',
          'পরিকল্পিত ঝুঁকির ৮.১৬ গুণ',
        ],
      },
      answer: 2,
    },
    {
      q: {
        en: 'A share frozen at a floor price shows ATR near zero. Sizing from it produces:',
        bn: 'ফ্লোর প্রাইসে জমে থাকা শেয়ারের ATR প্রায় শূন্য। তা থেকে আকার নির্ধারণ করলে:',
      },
      options: {
        en: [
          'A very small, very safe position',
          'An enormous position — 385.6% of the account in the worked case',
          'No position at all, because the formula errors',
          'The same position as any other stock at that price',
        ],
        bn: [
          'খুব ছোট, খুব নিরাপদ একটি পজিশন',
          'বিশাল একটি পজিশন — কষে দেখানো ক্ষেত্রে অ্যাকাউন্টের ৩৮৫.৬%',
          'কোনো পজিশনই নয়, কারণ সূত্র ভুল দেখায়',
          'ঐ দামের অন্য যেকোনো শেয়ারের মতোই একই পজিশন',
        ],
      },
      answer: 1,
    },
  ],
};
