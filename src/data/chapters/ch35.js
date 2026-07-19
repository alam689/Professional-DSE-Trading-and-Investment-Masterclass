/**
 * Chapter 35 — MACD
 * Part III, Technical Analysis. Builds directly on Ch 34 (EMAs and the
 * moving-average crossover), sets up Ch 36 (RSI, a bounded oscillator)
 * and Ch 44 (divergence in full).
 */

export default {
  n: 35,
  tools: [],

  excelSheet: {
    filename: 'ch35-macd-build.xlsx',
    sheetName: 'MACD Build',
    cells: [
      { cell: 'A1', v: 'MACD FROM FIRST PRINCIPLES — TWO EMAs AND THEIR DIFFERENCE' },

      { cell: 'A3', v: 'Fast period (n_fast)' }, { cell: 'B3', v: 12 },
      { cell: 'A4', v: 'Slow period (n_slow)' }, { cell: 'B4', v: 26 },
      { cell: 'A5', v: 'Signal period (n_sig)' }, { cell: 'B5', v: 9 },
      { cell: 'A6', v: 'alpha fast = 2/(n+1)' }, { cell: 'B6', f: '2/(B3+1)' },
      { cell: 'A7', v: 'alpha slow' }, { cell: 'B7', f: '2/(B4+1)' },
      { cell: 'A8', v: 'alpha signal' }, { cell: 'B8', f: '2/(B5+1)' },

      { cell: 'A10', v: 'Day' }, { cell: 'B10', v: 'Close' }, { cell: 'C10', v: 'EMA12' },
      { cell: 'D10', v: 'EMA26' }, { cell: 'E10', v: 'MACD' }, { cell: 'F10', v: 'Signal' },
      { cell: 'G10', v: 'Hist' }, { cell: 'H10', v: 'PPO %' }, { cell: 'I10', v: 'State' },
      { cell: 'J10', v: 'Signal Cell' },

      { cell: 'A11', v: 'D0 (seed)' }, { cell: 'B11', v: 47.6 },
      { cell: 'C11', v: 47.2 }, { cell: 'D11', v: 46.1 },
      { cell: 'E11', f: 'C11-D11' }, { cell: 'F11', v: 0.86 },
      { cell: 'G11', f: 'E11-F11' }, { cell: 'H11', f: 'E11/D11*100' },
      { cell: 'I11', f: 'IF(G11>0,"BULL","BEAR")' }, { cell: 'J11', v: 'seed' },

      { cell: 'A12', v: 'D1' }, { cell: 'B12', v: 48.6 },
      { cell: 'C12', f: 'C11+$B$6*(B12-C11)' }, { cell: 'D12', f: 'D11+$B$7*(B12-D11)' },
      { cell: 'E12', f: 'C12-D12' }, { cell: 'F12', f: 'F11+$B$8*(E12-F11)' },
      { cell: 'G12', f: 'E12-F12' }, { cell: 'H12', f: 'E12/D12*100' },
      { cell: 'I12', f: 'IF(G12>0,"BULL","BEAR")' },
      {
        cell: 'J12',
        f: 'IF(AND(G12>0,G11<=0),IF(E12>0,"BUY - zero confirmed","BUY - unconfirmed"),IF(AND(G12<0,G11>=0),IF(E12<0,"SELL - zero confirmed","SELL - unconfirmed"),""))',
      },

      { cell: 'A13', v: 'D2' }, { cell: 'B13', v: 49.8 },
      { cell: 'C13', f: 'C12+$B$6*(B13-C12)' }, { cell: 'D13', f: 'D12+$B$7*(B13-D12)' },
      { cell: 'E13', f: 'C13-D13' }, { cell: 'F13', f: 'F12+$B$8*(E13-F12)' },
      { cell: 'G13', f: 'E13-F13' }, { cell: 'H13', f: 'E13/D13*100' },
      { cell: 'I13', f: 'IF(G13>0,"BULL","BEAR")' },
      {
        cell: 'J13',
        f: 'IF(AND(G13>0,G12<=0),IF(E13>0,"BUY - zero confirmed","BUY - unconfirmed"),IF(AND(G13<0,G12>=0),IF(E13<0,"SELL - zero confirmed","SELL - unconfirmed"),""))',
      },

      { cell: 'A14', v: 'D3' }, { cell: 'B14', v: 49.1 },
      { cell: 'C14', f: 'C13+$B$6*(B14-C13)' }, { cell: 'D14', f: 'D13+$B$7*(B14-D13)' },
      { cell: 'E14', f: 'C14-D14' }, { cell: 'F14', f: 'F13+$B$8*(E14-F13)' },
      { cell: 'G14', f: 'E14-F14' }, { cell: 'H14', f: 'E14/D14*100' },
      { cell: 'I14', f: 'IF(G14>0,"BULL","BEAR")' },
      {
        cell: 'J14',
        f: 'IF(AND(G14>0,G13<=0),IF(E14>0,"BUY - zero confirmed","BUY - unconfirmed"),IF(AND(G14<0,G13>=0),IF(E14<0,"SELL - zero confirmed","SELL - unconfirmed"),""))',
      },

      { cell: 'A15', v: 'D4' }, { cell: 'B15', v: 47.9 },
      { cell: 'C15', f: 'C14+$B$6*(B15-C14)' }, { cell: 'D15', f: 'D14+$B$7*(B15-D14)' },
      { cell: 'E15', f: 'C15-D15' }, { cell: 'F15', f: 'F14+$B$8*(E15-F14)' },
      { cell: 'G15', f: 'E15-F15' }, { cell: 'H15', f: 'E15/D15*100' },
      { cell: 'I15', f: 'IF(G15>0,"BULL","BEAR")' },
      {
        cell: 'J15',
        f: 'IF(AND(G15>0,G14<=0),IF(E15>0,"BUY - zero confirmed","BUY - unconfirmed"),IF(AND(G15<0,G14>=0),IF(E15<0,"SELL - zero confirmed","SELL - unconfirmed"),""))',
      },

      { cell: 'A16', v: 'D5' }, { cell: 'B16', v: 46.5 },
      { cell: 'C16', f: 'C15+$B$6*(B16-C15)' }, { cell: 'D16', f: 'D15+$B$7*(B16-D15)' },
      { cell: 'E16', f: 'C16-D16' }, { cell: 'F16', f: 'F15+$B$8*(E16-F15)' },
      { cell: 'G16', f: 'E16-F16' }, { cell: 'H16', f: 'E16/D16*100' },
      { cell: 'I16', f: 'IF(G16>0,"BULL","BEAR")' },
      {
        cell: 'J16',
        f: 'IF(AND(G16>0,G15<=0),IF(E16>0,"BUY - zero confirmed","BUY - unconfirmed"),IF(AND(G16<0,G15>=0),IF(E16<0,"SELL - zero confirmed","SELL - unconfirmed"),""))',
      },

      { cell: 'A18', v: '— Cross-sectional screen: absolute MACD vs PPO —' },
      { cell: 'A19', v: 'Stock' }, { cell: 'B19', v: 'Price' }, { cell: 'C19', v: 'EMA26' },
      { cell: 'D19', v: 'MACD' }, { cell: 'E19', v: 'PPO %' },
      { cell: 'A20', v: 'Stock A (mid price)' }, { cell: 'B20', v: 46.5 },
      { cell: 'C20', v: 46.7973 }, { cell: 'D20', v: 0.9482 }, { cell: 'E20', f: 'D20/C20*100' },
      { cell: 'A21', v: 'Stock B (high price)' }, { cell: 'B21', v: 952 },
      { cell: 'C21', v: 940 }, { cell: 'D21', v: 9.5 }, { cell: 'E21', f: 'D21/C21*100' },
      { cell: 'A22', v: 'Stock C (low price)' }, { cell: 'B22', v: 12.4 },
      { cell: 'C22', v: 12.3 }, { cell: 'D22', v: 0.28 }, { cell: 'E22', f: 'D22/C22*100' },
      { cell: 'A23', v: 'Ranked #1 by absolute MACD' },
      { cell: 'B23', f: 'INDEX(A20:A22,MATCH(MAX(D20:D22),D20:D22,0))' },
      { cell: 'A24', v: 'Ranked #1 by PPO' },
      { cell: 'B24', f: 'INDEX(A20:A22,MATCH(MAX(E20:E22),E20:E22,0))' },
      { cell: 'A25', v: 'SCREEN VERDICT' },
      {
        cell: 'B25',
        f: 'IF(B23<>B24,"Absolute MACD ranks a different stock than PPO - screen on PPO","Rankings agree on this sample - still screen on PPO")',
      },

      { cell: 'A27', v: '— Lag audit on the window above —' },
      { cell: 'A28', v: 'Highest close in window' }, { cell: 'B28', f: 'MAX(B12:B16)' },
      { cell: 'A29', v: 'Close at the bearish cross' }, { cell: 'B29', f: 'B16' },
      { cell: 'A30', v: 'Give-back from high (%)' }, { cell: 'B30', f: '(B28-B29)/B28*100' },
      { cell: 'A31', v: 'Bars from high to signal' }, { cell: 'B31', v: 3 },
      { cell: 'A32', v: 'Zero-line confirmed?' }, { cell: 'B32', f: 'IF(E16<0,"YES","NO")' },
      { cell: 'A33', v: 'LAG VERDICT' },
      {
        cell: 'B33',
        f: 'IF(B32="NO","Signal-line cross only - MACD still above zero, trend not yet broken","Signal and zero line agree - slower but higher quality")',
      },
    ],
  },

  objectives: {
    en: [
      'Derive MACD from the two EMAs of Chapter 34 and state precisely what quantity each of its three lines measures.',
      'Read all four MACD signals — signal-line crossover, zero-line crossover, histogram expansion, and divergence — and rank them by reliability.',
      'Explain why the histogram turns before the trend does, and why that makes it the earliest and least trustworthy of the three lines.',
      'Compute the percentage MACD (PPO) and justify it as the only defensible basis for cross-sectional screening on the DSE.',
      'State honestly where MACD fails: unbounded scale, lag at turns, whipsaw in ranges, circuit-limited bars, and thin-float distortion.',
    ],
    bn: [
      'অধ্যায় ৩৪-এর দুটি EMA থেকে MACD উদ্ভূত করা এবং এর তিনটি রেখার প্রতিটি ঠিক কোন রাশি পরিমাপ করে তা সুনির্দিষ্টভাবে বলা।',
      'MACD-র চারটি সংকেত — সিগন্যাল-লাইন ক্রসওভার, জিরো-লাইন ক্রসওভার, হিস্টোগ্রাম সম্প্রসারণ ও ডাইভারজেন্স — পড়া এবং নির্ভরযোগ্যতা অনুযায়ী ক্রম নির্ধারণ করা।',
      'কেন হিস্টোগ্রাম ট্রেন্ডের আগেই ঘোরে, এবং কেন তাতে এটি তিনটি রেখার মধ্যে দ্রুততম ও সবচেয়ে কম নির্ভরযোগ্য হয়ে ওঠে তা ব্যাখ্যা করা।',
      'শতাংশ MACD (PPO) গণনা করা এবং ডিএসই-তে ক্রস-সেকশনাল স্ক্রিনিংয়ের একমাত্র রক্ষণীয় ভিত্তি হিসেবে তার যৌক্তিকতা দেওয়া।',
      'MACD কোথায় ব্যর্থ হয় তা সৎভাবে বলা: সীমাহীন স্কেল, মোড়ে বিলম্ব, রেঞ্জে হুইপস, সার্কিট-সীমিত বার, এবং পাতলা ফ্লোটের বিকৃতি।',
    ],
  },

  blocks: {
    theory: {
      en: `MACD is the most widely misread indicator on any DSE trading screen, and the reason is a naming accident. It is filed under "momentum oscillators" next to RSI, so people read it as one. **It is not an oscillator. It is a difference of two moving averages, and nothing more.** Everything correct you can say about MACD follows from that single sentence, and everything wrong follows from forgetting it.

### The derivation

Chapter 34 gave you the exponential moving average and its recursion. Keep that notation:

$$\\alpha_n = \\frac{2}{n+1}, \\qquad E_t^{(n)} = E_{t-1}^{(n)} + \\alpha_n\\left(P_t - E_{t-1}^{(n)}\\right)$$

Now take two of them — a fast one and a slow one — and subtract:

$$M_t = E_t^{(12)} - E_t^{(26)}$$

That is the MACD line. **It is a distance, measured in taka.** When the 12-day EMA sits BDT 1.13 above the 26-day EMA, the MACD line reads 1.13. Nothing has been normalised, bounded, or scaled.

Chapter 34 taught you to watch for the moment the fast EMA crosses the slow EMA. **That moment is exactly $M_t = 0$.** The MACD line is not a new idea; it is Chapter 34's crossover redrawn as a continuous quantity instead of a discrete event. Instead of "they crossed / they have not crossed", you now get "they are 1.13 apart and widening."

That is the whole gain, and it is a real one. A binary event becomes a measurable magnitude.

### What the line actually measures

The gap between a fast and a slow average of the same series is a measure of **how fast the series is moving**, not where it is. If price advances steadily, the fast EMA runs ahead and the gap opens. If price flattens, the fast EMA is caught by the slow one and the gap closes toward zero — *even while price is still elevated.*

So $M_t$ is, in effect, a smoothed rate of change of price. **It is a first derivative.**

This has a formal expression worth seeing once. Expanding both recursions into their weight series gives

$$M_t = \\sum_{k \\ge 0} \\left[\\alpha_{12}(1-\\alpha_{12})^k - \\alpha_{26}(1-\\alpha_{26})^k\\right] P_{t-k}$$

The bracketed weight is **positive for recent bars and negative for older ones.** MACD is a band-pass filter: it subtracts the distant past from the recent past. That is why it registers zero in a flat market at any price level, and why its sign tells you about direction while its magnitude tells you about speed.

### The signal line and the histogram

The signal line is simply the MACD line smoothed again:

$$S_t = S_{t-1} + \\alpha_9\\left(M_t - S_{t-1}\\right)$$

And the histogram is the gap between them:

$$H_t = M_t - S_t$$

Now think about what $H_t$ is. $S_t$ is a lagging average of $M_t$. The difference between a series and its own lagging average is positive when the series is rising and negative when it is falling. **So the histogram measures the rate of change of the MACD line — which is itself a rate of change of price. The histogram is a second derivative.**

This is the single most important sentence in the chapter, and it has a consequence that ruins more DSE accounts than any other misunderstanding:

**The histogram turns when the trend stops accelerating, not when the trend turns.**

A stock can rise for another three weeks while the histogram shrinks every day. Shrinking histogram means "still going up, but less enthusiastically than before." It does not mean "going down." Selling on a histogram peak is selling the moment a trend stops getting faster — which, in a healthy trend, happens repeatedly and means nothing.

Order the three lines by how early and how noisy they are:

| Line | Measures | Earliest? | Reliability |
|---|---|---|---|
| Histogram | Acceleration (2nd derivative) | Earliest | Lowest — turns constantly |
| MACD line vs signal | Rate of change turning | Middle | Moderate |
| MACD line vs zero | Fast EMA crossing slow EMA | Latest | Highest |

**Earliness and reliability trade off exactly. There is no setting that gives you both.**

### The four readings

**1. Signal-line crossover.** $H_t$ changes sign. Bullish when MACD crosses above its signal, bearish below. This is the signal most people mean when they say "MACD gave a buy." It is frequent, early, and produces a great deal of noise in a sideways market.

**2. Zero-line crossover.** $M_t$ changes sign — which, by construction, means $E_t^{(12)}$ has crossed $E_t^{(26)}$. **This is Chapter 34's crossover, restated.** It is much slower and much more reliable, and it is the one to use as a *filter*: take signal-line crossovers only in the direction the zero line already agrees with. A bullish cross while MACD is below zero is a bounce inside a downtrend until proven otherwise.

**3. Histogram expansion and contraction.** Widening bars mean the trend is accelerating; narrowing bars mean it is decelerating. Read this as *information about trend health*, never as an entry or exit trigger on its own.

**4. Divergence.** Price makes a higher high while MACD makes a lower high (bearish), or price makes a lower low while MACD makes a higher low (bullish). The plain reading is that the new price extreme was achieved with less momentum than the last one. Chapter 44 treats divergence properly, including its most important property — that it is frequently wrong and can persist for months. Note it here; do not trade it here.

### Why the absolute level is meaningless

MACD is measured in taka and is unbounded. Compare Chapter 36's RSI, which is bounded to [0, 100] by construction and therefore comparable across every instrument and every era. MACD is not.

A MACD of 3.5 on a BDT 400 stock is a 0.9% gap. A MACD of 3.5 on a BDT 20 stock is a 17.5% gap — a violent move. **The same number describes a yawn and an explosion.** Worse, the same stock at BDT 20 five years ago and BDT 400 today cannot have its own MACD history compared to itself.

The fix is to divide by the slow EMA:

$$PPO_t = \\frac{E_t^{(12)} - E_t^{(26)}}{E_t^{(26)}} \\times 100$$

**The percentage price oscillator is the same indicator expressed as a percentage of price.** It is unit-free, comparable across stocks, and comparable across time. Everything in this chapter that applies to MACD applies to PPO, and on the DSE — where the listed board spans roughly BDT 5 to well over BDT 1,000 — **PPO is the only defensible way to rank stocks against each other.**

### 12, 26 and 9 are not sacred

The defaults come from Gerald Appel's work in the 1970s. The commonly given rationale is that 12 and 26 corresponded to roughly two weeks and one month **when the trading week ran six days.** It does not. Bangladesh trades five sessions, Sunday to Thursday, and the DSE also loses sessions to a long list of public holidays that no fixed period accounts for.

This is not an argument for optimising the parameters — Chapter 34 already warned you what parameter search on a short history produces. It is an argument for **not attaching significance to the specific numbers**, and for testing whether your conclusions survive 10/21/7 and 15/30/10. If a signal only exists at 12/26/9, you have found an artefact.

### What breaks on the DSE

Everything Chapter 34 said about moving averages applies here without modification, because MACD *is* moving averages. It lags at every turn, and it whipsaws in ranges. It cannot do otherwise.

Three DSE-specific failures compound that:

- **Circuit limits truncate the input.** When a stock hits its daily band, the printed close is the limit, not the price. The EMA absorbs a censored number, and if the stock gaps again the next session the histogram produces a spike that is an artefact of the band, not a measurement of momentum.
- **Thin float means few prints.** On a low-liquidity counter the close may be set by a handful of trades. Chapter 34's warning applies twice over: MACD built on those closes is a smooth-looking curve computed from data that is mostly noise.
- **Halts and long holiday gaps break the time axis.** The recursion has no notion of elapsed time; it treats a bar after a nine-day Eid closure identically to a bar after a normal overnight. The indicator does not know the market was shut.

None of this makes MACD useless. It makes MACD a **descriptive instrument for the state of a trend that already exists**, not a predictive one. Used to answer "is the trend I have already identified accelerating or decaying?", it earns its place. Used to answer "should I buy this?", it will be late, and on the DSE it will be late in a market with a daily 10% band, which is an expensive place to be late.`,
      bn: `যেকোনো ডিএসই ট্রেডিং স্ক্রিনে MACD-ই সবচেয়ে ব্যাপকভাবে ভুল-পঠিত সূচক, আর তার কারণ একটি নামকরণজনিত দুর্ঘটনা। এটিকে RSI-র পাশে "মোমেন্টাম অসিলেটর" শ্রেণিতে রাখা হয়, তাই মানুষ একে তা-ই ভেবে পড়ে। **এটি অসিলেটর নয়। এটি দুটি মুভিং অ্যাভারেজের পার্থক্য, এর বেশি কিছু নয়।** MACD সম্পর্কে আপনি যা কিছু সঠিক বলতে পারেন তা ঐ একটি বাক্য থেকেই আসে, আর যা কিছু ভুল তা ঐ বাক্যটি ভুলে যাওয়া থেকে।

### উদ্ভব

অধ্যায় ৩৪ আপনাকে এক্সপোনেনশিয়াল মুভিং অ্যাভারেজ ও তার পুনরাবৃত্তি দিয়েছে। ঐ প্রতীক ধরে রাখুন:

$$\\alpha_n = \\frac{2}{n+1}, \\qquad E_t^{(n)} = E_{t-1}^{(n)} + \\alpha_n\\left(P_t - E_{t-1}^{(n)}\\right)$$

এবার এদের দুটি নিন — একটি দ্রুত, একটি ধীর — এবং বিয়োগ করুন:

$$M_t = E_t^{(12)} - E_t^{(26)}$$

এটিই MACD লাইন। **এটি একটি দূরত্ব, টাকায় মাপা।** ১২ দিনের EMA যখন ২৬ দিনের EMA-র ১.১৩ টাকা উপরে বসে, MACD লাইন পড়ে ১.১৩। কিছুই স্বাভাবিকীকৃত, সীমাবদ্ধ বা স্কেল করা হয়নি।

অধ্যায় ৩৪ আপনাকে শিখিয়েছে দ্রুত EMA ধীর EMA-কে অতিক্রম করার মুহূর্তটি লক্ষ করতে। **ঐ মুহূর্তটি ঠিক $M_t = 0$।** MACD লাইন নতুন ধারণা নয়; এটি অধ্যায় ৩৪-এর ক্রসওভারকেই বিচ্ছিন্ন ঘটনার বদলে একটি অবিচ্ছিন্ন রাশি হিসেবে আঁকা। "তারা অতিক্রম করেছে / করেনি"-র বদলে এখন পাচ্ছেন "তারা ১.১৩ দূরে আছে এবং দূরত্ব বাড়ছে।"

এটিই পুরো লাভ, আর লাভটি সত্যিকারের। একটি দ্বিমুখী ঘটনা একটি পরিমাপযোগ্য মাত্রায় পরিণত হয়।

### লাইনটি আসলে কী মাপে

একই সিরিজের একটি দ্রুত ও একটি ধীর গড়ের মধ্যেকার ব্যবধান হলো **সিরিজটি কত দ্রুত সরছে** তার পরিমাপ, কোথায় আছে তার নয়। দাম যদি ধারাবাহিকভাবে এগোয়, দ্রুত EMA এগিয়ে যায় ও ব্যবধান খোলে। দাম যদি সমতল হয়, দ্রুত EMA-কে ধীরটি ধরে ফেলে এবং ব্যবধান শূন্যের দিকে বন্ধ হয় — *এমনকি দাম তখনো উঁচুতেই থাকা অবস্থায়।*

তাই $M_t$ কার্যত দামের একটি মসৃণকৃত পরিবর্তনের হার। **এটি প্রথম অন্তরকলজ।**

এর একটি আনুষ্ঠানিক রূপ আছে যা একবার দেখা দরকার। দুটি পুনরাবৃত্তিকেই ওজন-শ্রেণিতে বিস্তৃত করলে পাওয়া যায়

$$M_t = \\sum_{k \\ge 0} \\left[\\alpha_{12}(1-\\alpha_{12})^k - \\alpha_{26}(1-\\alpha_{26})^k\\right] P_{t-k}$$

বন্ধনীর ওজনটি **সাম্প্রতিক বারের জন্য ধনাত্মক আর পুরোনো বারের জন্য ঋণাত্মক।** MACD একটি ব্যান্ড-পাস ফিল্টার: এটি সাম্প্রতিক অতীত থেকে দূর অতীতকে বিয়োগ করে। এ কারণেই একটি সমতল বাজারে যেকোনো দামস্তরে এটি শূন্য দেখায়, এবং এ কারণেই এর চিহ্ন দিক বলে আর এর মান গতি বলে।

### সিগন্যাল লাইন ও হিস্টোগ্রাম

সিগন্যাল লাইন কেবল MACD লাইনকে আবার মসৃণ করা:

$$S_t = S_{t-1} + \\alpha_9\\left(M_t - S_{t-1}\\right)$$

আর হিস্টোগ্রাম হলো এদের ব্যবধান:

$$H_t = M_t - S_t$$

এবার ভাবুন $H_t$ কী। $S_t$ হলো $M_t$-এর একটি পিছিয়ে-থাকা গড়। একটি সিরিজ ও তার নিজস্ব পিছিয়ে-থাকা গড়ের পার্থক্য সিরিজটি বাড়তে থাকলে ধনাত্মক, কমতে থাকলে ঋণাত্মক। **তাই হিস্টোগ্রাম MACD লাইনের পরিবর্তনের হার মাপে — যা নিজেই দামের পরিবর্তনের হার। হিস্টোগ্রাম দ্বিতীয় অন্তরকলজ।**

এটিই অধ্যায়ের সবচেয়ে গুরুত্বপূর্ণ বাক্য, আর এর একটি পরিণতি আছে যা অন্য যেকোনো ভুল বোঝাবুঝির চেয়ে বেশি ডিএসই হিসাব ধ্বংস করে:

**ট্রেন্ড যখন আর দ্রুততর হচ্ছে না তখন হিস্টোগ্রাম ঘোরে, ট্রেন্ড যখন ঘোরে তখন নয়।**

একটি শেয়ার আরও তিন সপ্তাহ বাড়তে পারে যখন হিস্টোগ্রাম প্রতিদিন ছোট হচ্ছে। সংকুচিত হিস্টোগ্রামের মানে "এখনো উপরে যাচ্ছে, তবে আগের চেয়ে কম উৎসাহে।" এর মানে "নিচে যাচ্ছে" নয়। হিস্টোগ্রামের শীর্ষে বিক্রি করা মানে ট্রেন্ড যে মুহূর্তে আর দ্রুততর হওয়া বন্ধ করল সেই মুহূর্তে বিক্রি করা — যা একটি সুস্থ ট্রেন্ডে বারবার ঘটে এবং কিছুই বোঝায় না।

তিনটি রেখাকে কতটা আগাম ও কতটা কোলাহলপূর্ণ সেই অনুযায়ী সাজান:

| রেখা | কী মাপে | সবচেয়ে আগাম? | নির্ভরযোগ্যতা |
|---|---|---|---|
| হিস্টোগ্রাম | ত্বরণ (২য় অন্তরকলজ) | সবচেয়ে আগাম | সর্বনিম্ন — অনবরত ঘোরে |
| MACD বনাম সিগন্যাল | পরিবর্তনের হার ঘোরা | মাঝামাঝি | মাঝারি |
| MACD বনাম শূন্য | দ্রুত EMA ধীর EMA অতিক্রম | সবচেয়ে দেরিতে | সর্বোচ্চ |

**আগাম হওয়া ও নির্ভরযোগ্য হওয়া ঠিক বিপরীত অনুপাতে চলে। এমন কোনো সেটিং নেই যা দুটোই দেয়।**

### চারটি পাঠ

**১. সিগন্যাল-লাইন ক্রসওভার।** $H_t$ চিহ্ন বদলায়। MACD তার সিগন্যালের উপরে গেলে বুলিশ, নিচে গেলে বেয়ারিশ। "MACD বাই দিয়েছে" বললে বেশিরভাগ মানুষ এটিই বোঝায়। এটি ঘন ঘন ঘটে, আগাম, আর পার্শ্বমুখী বাজারে প্রচুর কোলাহল তৈরি করে।

**২. জিরো-লাইন ক্রসওভার।** $M_t$ চিহ্ন বদলায় — যার অর্থ সংজ্ঞা অনুযায়ী $E_t^{(12)}$ $E_t^{(26)}$-কে অতিক্রম করেছে। **এটি অধ্যায় ৩৪-এর ক্রসওভারই, নতুন করে বলা।** এটি অনেক ধীর ও অনেক নির্ভরযোগ্য, আর এটিকেই *ছাঁকনি* হিসেবে ব্যবহার করা উচিত: জিরো লাইন যে দিকে ইতিমধ্যেই সম্মত, কেবল সেই দিকের সিগন্যাল-লাইন ক্রসওভার নিন। MACD শূন্যের নিচে থাকা অবস্থায় বুলিশ ক্রস প্রমাণিত না হওয়া পর্যন্ত ডাউনট্রেন্ডের ভেতরের একটি বাউন্স।

**৩. হিস্টোগ্রাম সম্প্রসারণ ও সংকোচন।** চওড়া হতে থাকা বার মানে ট্রেন্ড ত্বরান্বিত হচ্ছে; সরু হতে থাকা বার মানে মন্থর হচ্ছে। একে *ট্রেন্ডের স্বাস্থ্য সম্পর্কে তথ্য* হিসেবে পড়ুন, কখনোই একা এন্ট্রি বা এক্সিট ট্রিগার হিসেবে নয়।

**৪. ডাইভারজেন্স।** দাম উঁচুতর শীর্ষ করে কিন্তু MACD নিম্নতর শীর্ষ করে (বেয়ারিশ), বা দাম নিম্নতর তল করে কিন্তু MACD উচ্চতর তল করে (বুলিশ)। সরল পাঠ হলো, নতুন দাম-প্রান্তটি আগেরটির চেয়ে কম গতিতে অর্জিত হয়েছে। অধ্যায় ৪৪ ডাইভারজেন্সকে যথাযথভাবে দেখে, তার সবচেয়ে গুরুত্বপূর্ণ বৈশিষ্ট্যসহ — যে এটি প্রায়ই ভুল হয় এবং মাসের পর মাস টিকে থাকতে পারে। এখানে খেয়াল করুন; এখানে ট্রেড করবেন না।

### কেন পরম মানটি অর্থহীন

MACD টাকায় মাপা এবং সীমাহীন। অধ্যায় ৩৬-এর RSI-র সঙ্গে তুলনা করুন, যা গঠনগতভাবেই [0, 100]-এ সীমাবদ্ধ এবং তাই প্রতিটি উপকরণ ও প্রতিটি যুগে তুলনীয়। MACD নয়।

৪০০ টাকার শেয়ারে ৩.৫ MACD মানে ০.৯% ব্যবধান। ২০ টাকার শেয়ারে ৩.৫ MACD মানে ১৭.৫% ব্যবধান — একটি প্রচণ্ড চলন। **একই সংখ্যা একটি হাই তোলা আর একটি বিস্ফোরণ দুটোকেই বর্ণনা করছে।** আরও খারাপ, একই শেয়ার পাঁচ বছর আগে ২০ টাকায় আর আজ ৪০০ টাকায় থাকলে তার নিজের MACD ইতিহাসও নিজের সঙ্গে তুলনা করা যায় না।

সমাধান হলো ধীর EMA দিয়ে ভাগ করা:

$$PPO_t = \\frac{E_t^{(12)} - E_t^{(26)}}{E_t^{(26)}} \\times 100$$

**পার্সেন্টেজ প্রাইস অসিলেটর হলো একই সূচক, দামের শতাংশ হিসেবে প্রকাশিত।** এটি একক-মুক্ত, শেয়ারে-শেয়ারে তুলনীয়, ও সময়ে-সময়ে তুলনীয়। এই অধ্যায়ে MACD সম্পর্কে যা কিছু প্রযোজ্য তা PPO-তেও প্রযোজ্য, আর ডিএসই-তে — যেখানে তালিকাভুক্ত বোর্ড প্রায় ৫ টাকা থেকে ১,০০০ টাকারও অনেক উপরে বিস্তৃত — **শেয়ারগুলোকে পরস্পরের সঙ্গে ক্রম দেওয়ার একমাত্র রক্ষণীয় উপায় PPO।**

### ১২, ২৬ ও ৯ পবিত্র নয়

ডিফল্টগুলো এসেছে ১৯৭০-এর দশকে জেরাল্ড অ্যাপেলের কাজ থেকে। সাধারণভাবে যে যুক্তি দেওয়া হয় তা হলো, **ট্রেডিং সপ্তাহ যখন ছয় দিনের ছিল** তখন ১২ ও ২৬ মোটামুটি দুই সপ্তাহ ও এক মাসের সমান ছিল। এখন তা নয়। বাংলাদেশে রবিবার থেকে বৃহস্পতিবার পাঁচটি সেশন হয়, আর ডিএসই একগুচ্ছ সরকারি ছুটিতেও সেশন হারায় যা কোনো নির্দিষ্ট পিরিয়ড হিসেবে ধরে না।

এটি প্যারামিটার অপটিমাইজ করার যুক্তি নয় — সংক্ষিপ্ত ইতিহাসে প্যারামিটার খোঁজা কী উৎপন্ন করে অধ্যায় ৩৪ ইতিমধ্যেই সতর্ক করেছে। এটি যুক্তি **নির্দিষ্ট সংখ্যাগুলোকে গুরুত্ব না দেওয়ার**, এবং পরীক্ষা করার যে আপনার উপসংহার ১০/২১/৭ ও ১৫/৩০/১০-এও টেকে কি না। কোনো সংকেত যদি কেবল ১২/২৬/৯-এ থাকে, আপনি একটি কৃত্রিম বস্তু পেয়েছেন।

### ডিএসই-তে কী ভাঙে

মুভিং অ্যাভারেজ সম্পর্কে অধ্যায় ৩৪ যা বলেছে তার সবটাই এখানে অপরিবর্তিতভাবে প্রযোজ্য, কারণ MACD *হলোই* মুভিং অ্যাভারেজ। এটি প্রতিটি মোড়ে পিছিয়ে থাকে, আর রেঞ্জে হুইপস করে। এর অন্যথা করার উপায় নেই।

ডিএসই-নির্দিষ্ট তিনটি ব্যর্থতা তার সঙ্গে যুক্ত হয়:

- **সার্কিট সীমা ইনপুট ছেঁটে দেয়।** কোনো শেয়ার দৈনিক ব্যান্ডে পৌঁছালে ছাপা ক্লোজটি সীমা, দাম নয়। EMA একটি সেন্সরকৃত সংখ্যা শুষে নেয়, আর পরের সেশনে শেয়ারটি আবার গ্যাপ করলে হিস্টোগ্রাম এমন একটি স্পাইক তৈরি করে যা ব্যান্ডের কৃত্রিম ফল, গতির পরিমাপ নয়।
- **পাতলা ফ্লোট মানে কম প্রিন্ট।** কম তারল্যের কাউন্টারে ক্লোজ কয়েকটি ট্রেডেই নির্ধারিত হতে পারে। অধ্যায় ৩৪-এর সতর্কতা দ্বিগুণভাবে প্রযোজ্য: ঐ ক্লোজের ওপর গড়া MACD দেখতে মসৃণ বক্ররেখা, কিন্তু গণিত হয়েছে এমন উপাত্ত থেকে যা মূলত কোলাহল।
- **হল্ট ও দীর্ঘ ছুটির গ্যাপ সময়ের অক্ষ ভেঙে দেয়।** পুনরাবৃত্তিটির অতিবাহিত সময় সম্পর্কে কোনো ধারণা নেই; নয় দিনের ঈদের ছুটির পরের বারকে এটি স্বাভাবিক রাতের পরের বারের মতোই গণ্য করে। সূচকটি জানে না বাজার বন্ধ ছিল।

এর কোনোটিই MACD-কে অকেজো করে না। এটি MACD-কে **ইতিমধ্যেই বিদ্যমান একটি ট্রেন্ডের অবস্থা বর্ণনাকারী উপকরণ** করে তোলে, ভবিষ্যদ্বক্তা নয়। "আমি যে ট্রেন্ড ইতিমধ্যেই চিহ্নিত করেছি তা কি ত্বরান্বিত হচ্ছে না ক্ষয়ে যাচ্ছে?" — এই প্রশ্নের উত্তরে ব্যবহার করলে এটি নিজের স্থান অর্জন করে। "আমার কি এটি কেনা উচিত?" — এই প্রশ্নের উত্তরে ব্যবহার করলে এটি দেরি করবে, আর ডিএসই-তে দেরি করবে দৈনিক ১০% ব্যান্ডের একটি বাজারে, যা দেরি করার জন্য একটি ব্যয়বহুল জায়গা।`,
    },
  },
};
