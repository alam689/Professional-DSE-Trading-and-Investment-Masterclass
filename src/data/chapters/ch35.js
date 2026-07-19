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

    simple: {
      en: `Think about driving a car on the Dhaka–Chattogram highway, and about the three different instruments you could look at.

**The odometer tells you where you are.** Kilometre 138. That is the price.

**The speedometer tells you how fast you are going.** 80 km/h. That is the MACD line.

**And your own body tells you whether you are speeding up or slowing down** — the push into the seat back, or the lean forward. That is the histogram.

Three completely different questions. Most people who "use MACD" have quietly confused all three.

### Why the gap between two averages is a speedometer

Imagine two friends recording your position. One writes down roughly where you were over the last two weeks. The other writes down roughly where you were over the last month.

If you are driving forward steadily, the two-week friend's number is always *ahead* of the one-month friend's number, because he is tracking a more recent stretch of road. **And the faster you drive, the bigger that gap gets.**

If you park, the one-month friend slowly catches up, and the gap closes to zero — **even though you are still at kilometre 138, which is a long way from where you started.**

So the gap between the fast average and the slow average has nothing to do with where you are. **It is your speed.** That is the whole idea of MACD, and everything else is decoration.

### The part that ruins accounts

Now the histogram. It is the difference between the speedometer and a lagging average of the speedometer, which is a complicated way of saying: **the histogram tells you whether your speed is rising or falling.**

Here is the trap. You are doing 80 and you ease off the accelerator to 78, then 76, then 74.

**Are you going backwards? No. You are still going forwards at 74 km/h.** You are simply going forwards slightly less enthusiastically than a minute ago.

The histogram shrinks the moment you ease off. It does not wait for you to stop, and it certainly does not wait for you to reverse. **People sell a perfectly healthy position because the histogram got smaller, which is exactly like slamming the brakes because the acceleration eased.**

In the worked example in this chapter, the histogram peaks at 0.2581 on the same day the stock makes its high of 49.80, and then shrinks for three straight sessions. Three sessions is the entire warning you get. Sometimes you get thirty.

### The zero line is the honest one

Forget the histogram for a moment. Ask a much simpler question: **is the speedometer reading positive or negative at all?**

That is the zero line. MACD above zero means the fast average is above the slow one, which means you are genuinely moving forward. MACD below zero means you are genuinely reversing.

It is slow. It is boring. **It is also the only one of the three that is hard to fool.** In the worked example the histogram flips bearish on day five while MACD is still sitting at +0.9482 — the speedometer still reads forward. The exit signal and the trend disagree, and the honest answer is "slowing down, not yet reversing."

### Why you cannot compare two cars' MACD

Here is where beginners get badly hurt.

A MACD of 3.5 on a BDT 400 share is a gap of less than one percent. A MACD of 3.5 on a BDT 20 share is a seventeen and a half percent gap. **Same number. One is a yawn, the other is a fire.**

MACD is measured in taka, so it is bigger on expensive shares for no reason other than that they are expensive. **Never rank two stocks by their MACD.** Divide by the price first, and you get PPO — a percentage, which you *can* compare. In this chapter's screen, ranking by raw MACD picks a BDT 952 share; ranking by percentage picks a BDT 12.40 share that is actually moving twice as fast.

### And on the DSE, three extra warnings

- **Circuit limits are a speed limiter.** When a share hits its daily band, the closing price is not the price — it is the fence. Your speedometer is reading the fence.
- **The floor-price period was a road closure.** Prices sat flat because they were not permitted to fall. Every average that reaches back across that flat stretch is averaging in a rule, not a market. And a 26-day average reaches back a long way.
- **Thin trading means the speedometer is guessing.** On a share with a handful of trades a day, the close is set by almost nobody. Smooth the noise and you get a beautiful smooth curve — of noise.

**MACD is a good instrument for describing a trend you have already found. It is a poor instrument for finding one.**`,
      bn: `ঢাকা–চট্টগ্রাম মহাসড়কে গাড়ি চালানোর কথা ভাবুন, আর ভাবুন আপনি তিনটি ভিন্ন যন্ত্রের দিকে তাকাতে পারেন।

**ওডোমিটার বলে আপনি কোথায় আছেন।** ১৩৮ কিলোমিটার। এটি দাম।

**স্পিডোমিটার বলে আপনি কত দ্রুত যাচ্ছেন।** ঘণ্টায় ৮০ কিলোমিটার। এটি MACD লাইন।

**আর আপনার নিজের শরীর বলে আপনি গতি বাড়াচ্ছেন না কমাচ্ছেন** — সিটে পিঠ চেপে বসা, বা সামনে ঝুঁকে পড়া। এটি হিস্টোগ্রাম।

সম্পূর্ণ ভিন্ন তিনটি প্রশ্ন। যাঁরা "MACD ব্যবহার করেন" তাঁদের বেশিরভাগই নিঃশব্দে তিনটিকেই গুলিয়ে ফেলেছেন।

### দুটি গড়ের ব্যবধান কেন স্পিডোমিটার

কল্পনা করুন দুজন বন্ধু আপনার অবস্থান লিখে রাখছেন। একজন লেখেন গত দুই সপ্তাহে আপনি মোটামুটি কোথায় ছিলেন। আরেকজন লেখেন গত এক মাসে আপনি মোটামুটি কোথায় ছিলেন।

আপনি যদি ধারাবাহিকভাবে সামনে চালান, দুই-সপ্তাহের বন্ধুর সংখ্যাটি সবসময় এক-মাসের বন্ধুর সংখ্যার *আগে* থাকে, কারণ তিনি রাস্তার আরও সাম্প্রতিক অংশ অনুসরণ করছেন। **আর আপনি যত দ্রুত চালাবেন, ঐ ব্যবধান তত বড় হবে।**

আপনি যদি গাড়ি থামান, এক-মাসের বন্ধু ধীরে ধীরে ধরে ফেলেন, আর ব্যবধান শূন্যে নেমে আসে — **যদিও আপনি এখনো ১৩৮ কিলোমিটারেই আছেন, যা শুরুর জায়গা থেকে অনেক দূর।**

তাই দ্রুত গড় ও ধীর গড়ের ব্যবধানের সঙ্গে আপনি কোথায় আছেন তার কোনো সম্পর্ক নেই। **এটি আপনার গতি।** MACD-র পুরো ধারণা এটুকুই, বাকি সব অলংকার।

### যে অংশটি হিসাব ধ্বংস করে

এবার হিস্টোগ্রাম। এটি স্পিডোমিটার ও স্পিডোমিটারের একটি পিছিয়ে-থাকা গড়ের পার্থক্য, যা জটিল করে বলা এই কথাটিই: **হিস্টোগ্রাম বলে আপনার গতি বাড়ছে না কমছে।**

এখানেই ফাঁদ। আপনি ৮০-তে চলছেন, তারপর অ্যাক্সিলারেটর থেকে পা হালকা করে ৭৮, তারপর ৭৬, তারপর ৭৪।

**আপনি কি পেছনে যাচ্ছেন? না। আপনি এখনো ঘণ্টায় ৭৪ কিলোমিটারে সামনেই যাচ্ছেন।** কেবল এক মিনিট আগের চেয়ে সামান্য কম উৎসাহে সামনে যাচ্ছেন।

আপনি পা হালকা করার মুহূর্তেই হিস্টোগ্রাম সংকুচিত হয়। এটি আপনার থামার অপেক্ষা করে না, আর আপনার পেছনে যাওয়ার অপেক্ষা তো নিশ্চয়ই করে না। **হিস্টোগ্রাম ছোট হয়েছে বলে মানুষ একটি পুরোপুরি সুস্থ পজিশন বিক্রি করেন, যা ত্বরণ কমেছে বলে ব্রেক কষার মতোই।**

এই অধ্যায়ের উদাহরণে হিস্টোগ্রাম ০.২৫৮১-তে শীর্ষে ওঠে ঠিক সেই দিনেই যেদিন শেয়ারটি ৪৯.৮০-তে তার সর্বোচ্চ করে, আর তারপর টানা তিন সেশন সংকুচিত হয়। তিন সেশনই আপনার পাওয়া পুরো সতর্কবার্তা। কখনো কখনো ত্রিশ সেশন পাবেন।

### জিরো লাইনই সৎ

মুহূর্তের জন্য হিস্টোগ্রাম ভুলুন। অনেক সরল একটি প্রশ্ন করুন: **স্পিডোমিটার আদৌ ধনাত্মক না ঋণাত্মক পড়ছে?**

এটিই জিরো লাইন। MACD শূন্যের ওপরে মানে দ্রুত গড় ধীর গড়ের ওপরে, অর্থাৎ আপনি সত্যিই সামনে যাচ্ছেন। MACD শূন্যের নিচে মানে আপনি সত্যিই উল্টোদিকে যাচ্ছেন।

এটি ধীর। এটি একঘেয়ে। **এটিই তিনটির একমাত্র যেটিকে ধোঁকা দেওয়া কঠিন।** উদাহরণে পঞ্চম দিনে হিস্টোগ্রাম বেয়ারিশ হয় যখন MACD এখনো +০.৯৪৮২-তে বসে আছে — স্পিডোমিটার এখনো সামনে পড়ছে। প্রস্থান সংকেত ও ট্রেন্ড দ্বিমত পোষণ করছে, আর সৎ উত্তর হলো "গতি কমছে, এখনো ঘোরেনি।"

### দুটি গাড়ির MACD কেন তুলনা করা যায় না

এখানেই নতুনরা মারাত্মকভাবে আহত হন।

৪০০ টাকার শেয়ারে ৩.৫ MACD মানে এক শতাংশেরও কম ব্যবধান। ২০ টাকার শেয়ারে ৩.৫ MACD মানে সাড়ে সতেরো শতাংশ ব্যবধান। **একই সংখ্যা। একটি হাই তোলা, আরেকটি আগুন।**

MACD টাকায় মাপা, তাই দামি শেয়ারে এটি বড় হয় কেবল এই কারণে যে শেয়ারটি দামি। **কখনো দুটি শেয়ারকে তাদের MACD দিয়ে ক্রম দেবেন না।** আগে দাম দিয়ে ভাগ করুন, পাবেন PPO — একটি শতাংশ, যা আপনি তুলনা *করতে পারেন*। এই অধ্যায়ের স্ক্রিনে কাঁচা MACD দিয়ে ক্রম দিলে ৯৫২ টাকার একটি শেয়ার বেছে নেয়; শতাংশ দিয়ে ক্রম দিলে ১২.৪০ টাকার একটি শেয়ার বেছে নেয় যা আসলে দ্বিগুণ দ্রুত চলছে।

### আর ডিএসই-তে বাড়তি তিনটি সতর্কতা

- **সার্কিট সীমা একটি স্পিড লিমিটার।** কোনো শেয়ার দৈনিক ব্যান্ডে পৌঁছালে ক্লোজিং দাম আর দাম নয় — এটি বেড়া। আপনার স্পিডোমিটার বেড়াটি পড়ছে।
- **ফ্লোর-প্রাইসের সময়কাল ছিল একটি রাস্তা বন্ধ।** দাম সমতল বসে ছিল কারণ নামার অনুমতি ছিল না। ঐ সমতল অংশ পেরিয়ে পেছনে পৌঁছায় এমন প্রতিটি গড় একটি বিধিকেই গড় করছে, বাজারকে নয়। আর ২৬ দিনের গড় অনেক দূর পেছনে পৌঁছায়।
- **পাতলা লেনদেন মানে স্পিডোমিটার অনুমান করছে।** দিনে হাতে গোনা কয়েকটি ট্রেড হওয়া শেয়ারে ক্লোজ প্রায় কেউই ঠিক করেননি। কোলাহল মসৃণ করুন, পাবেন একটি সুন্দর মসৃণ বক্ররেখা — কোলাহলের।

**ইতিমধ্যেই খুঁজে পাওয়া একটি ট্রেন্ড বর্ণনা করতে MACD ভালো যন্ত্র। ট্রেন্ড খুঁজে বের করতে এটি খারাপ যন্ত্র।**`,
    },

    example: {
      en: `### KDSALTD: six sessions in which everything MACD can tell you goes wrong in the right order

KDSALTD is a mid-cap DSE engineering and accessories name used illustratively here. **Every figure below is constructed, not historical.** The six-session window is deliberately short so that you can carry every number by hand, and it is deliberately chosen at a turn so that the three lines disagree with each other — which is the normal case, not the exception.

We join the stock already in an established uptrend. It has run for weeks; both EMAs are seeded and warm. Standard 12/26/9 parameters, so from Chapter 34's recursion:

$$\\alpha_{12} = \\frac{2}{13} = 0.153846, \\qquad \\alpha_{26} = \\frac{2}{27} = 0.074074, \\qquad \\alpha_{9} = \\frac{2}{10} = 0.200000$$

**The seed state on day zero**, carried in from the trend already in progress:

| | Day 0 |
|---|---|
| Close | 47.60 |
| EMA12 | 47.2000 |
| EMA26 | 46.1000 |
| MACD | **1.1000** |
| Signal | 0.8600 |
| Histogram | **+0.2400** |
| PPO | 2.3861% |

Read that seed before moving on. MACD at 1.1000 says the 12-day EMA sits BDT 1.10 above the 26-day EMA — **the stock is advancing, and the zero line is nowhere near.** The histogram at +0.2400 says the advance is currently accelerating. Everything is healthy.

### The six sessions

| Day | Close | EMA12 | EMA26 | MACD | Signal | Hist | PPO % | State |
|---|---|---|---|---|---|---|---|---|
| D0 (seed) | 47.60 | 47.2000 | 46.1000 | 1.1000 | 0.8600 | +0.2400 | 2.3861 | BULL |
| D1 | 48.60 | 47.4154 | 46.2852 | 1.1302 | 0.9140 | +0.2162 | 2.4418 | BULL |
| D2 | **49.80** | 47.7822 | 46.5455 | **1.2367** | 0.9786 | **+0.2581** | 2.6570 | BULL |
| D3 | 49.10 | 47.9850 | 46.7348 | **1.2502** | 1.0329 | +0.2173 | 2.6751 | BULL |
| D4 | 47.90 | 47.9719 | 46.8211 | 1.1508 | 1.0565 | +0.0943 | 2.4579 | BULL |
| D5 | 46.50 | 47.7455 | 46.7973 | 0.9482 | 1.0348 | **−0.0867** | 2.0261 | **BEAR** |

Six rows. Now read them properly, because there are four separate stories in that table and most people see one.

### Story one: the price high and the MACD high are on different days

**Price peaks at 49.80 on D2. The MACD line peaks at 1.2502 on D3 — one session later.**

This surprises people, and it should not. The MACD line is a smoothed rate of change. On D3 the stock printed 49.10, which is *down* from 49.80, and yet MACD rose from 1.2367 to 1.2502. Why? Because 49.10 is still comfortably above the 26-day EMA of 46.73, so the fast EMA kept gaining ground on the slow one even on a down day.

**A falling price can lift the MACD line.** Anyone treating the MACD line as a proxy for price will be wrong about this roughly whenever it matters most.

### Story two: the histogram peaks on the same day as price, and gives you three sessions

**Histogram peaks at +0.2581 on D2 — the same session as the 49.80 high.** Then: +0.2173, +0.0943, −0.0867.

That is the warning. It is real, it is early, and it is exactly three sessions long. Notice how sharply the decay accelerates: the drop from D2 to D3 is 0.0408, from D3 to D4 is 0.1230, from D4 to D5 is 0.1810. **The second derivative is itself accelerating downward** — the trend is not just decelerating, it is decelerating faster each day.

But notice also what happened on D1. The histogram fell from +0.2400 to +0.2162 **on a session where the stock rose a full taka, from 47.60 to 48.60.** A shrinking histogram on a strongly up day. Anyone who sells shrinking histograms sold D1 and missed the 49.80 print entirely.

**That is the histogram's whole character: it warns you correctly at D2 and it lies to you at D1, and on the day itself you cannot tell which one you are looking at.**

### Story three: the signal-line cross fires on D5, and it is not confirmed

The histogram changes sign between D4 (+0.0943) and D5 (−0.0867). That is the bearish signal-line crossover, and it is the signal most people mean when they say "MACD gave a sell."

Price at the cross: **46.50.** Price at the high three sessions earlier: **49.80.**

$$\\text{Give-back} = \\frac{49.80 - 46.50}{49.80} \\times 100 = \\frac{3.30}{49.80} \\times 100 = 6.6265\\%$$

**The signal cost 6.63% of the high, and it arrived three bars late.** That is not a criticism of MACD; it is arithmetic that follows from smoothing. Every smoothed indicator pays this. What matters is that you knew the number in advance rather than discovering it afterwards.

And crucially: **MACD on D5 is still +0.9482.** It is nowhere near zero. So the sheet classifies this as:

> **SELL — unconfirmed.**

The signal line says the momentum has rolled over. The zero line says the trend is entirely intact — the 12-day EMA at 47.7455 is still BDT 0.95 above the 26-day EMA at 46.7973. **Two of MACD's own three lines disagree, and the honest reading is "decelerating sharply, not yet reversing."**

How far would price have to fall before the zero line agreed? The gap is 0.9482 taka and the EMAs converge at roughly $(\\alpha_{12} - \\alpha_{26}) = 0.0798$ of the distance from price per session. Roughly a dozen more sessions at this pace, or two or three more sharp down days. **The zero line is not close.**

### Story four: the same window on an unbounded scale tells you nothing about other stocks

Take D5's state and put it next to two other DSE names on the same day:

| Stock | Price | EMA26 | MACD | PPO % |
|---|---|---|---|---|
| Stock A — KDSALTD (mid price) | 46.50 | 46.7973 | 0.9482 | **2.0262** |
| Stock B (high price) | 952.00 | 940.00 | **9.5000** | 1.0106 |
| Stock C (low price) | 12.40 | 12.30 | 0.2800 | **2.2764** |

| Ranking basis | Winner |
|---|---|
| Absolute MACD | **Stock B** (9.5000) |
| PPO | **Stock C** (2.2764%) |

**The two methods pick different stocks, and the absolute method picks the wrong one for an obvious reason: Stock B is expensive.** A 9.50 taka gap on a 940 taka average is a one percent move. A 0.28 taka gap on a 12.30 taka average is 2.28% — more than twice the momentum, on a number less than one-thirtieth the size.

On a board that spans roughly BDT 5 to well over BDT 1,000, **screening on absolute MACD is a screen for share price.** It will hand you the same expensive names every week and you will mistake that for a signal.

### What actually should have happened on D5

Not "sell because the histogram crossed." Here is the disciplined reading, and the order matters:

1. **Check the zero line first.** MACD +0.9482. Trend intact. This is not a reversal signal.
2. **Check the histogram sequence.** +0.2581 → +0.2173 → +0.0943 → −0.0867. Sharply decaying, and the decay is accelerating. Momentum has genuinely rolled over.
3. **Check what price did.** 49.80 → 46.50 is 6.63% in three sessions. On the DSE that is roughly two-thirds of a full daily circuit band's worth of move.
4. **Conclusion: reduce, do not exit.** The trend has not broken; the acceleration has. If you are long from below, trim into strength and move the stop up. If you are flat, this is emphatically not an entry, in either direction.

**And on the DSE specifically: there is no reliable short side, so "bearish MACD cross" is a do-not-buy and a trim signal, not a trade.** Anyone teaching you to short a signal-line cross on a Bangladeshi mid-cap is teaching you a trade you cannot execute.

### The DSE overlay you must run before any of the above counts

| Check | Why it matters here |
|---|---|
| Did any of D0–D5 close at a circuit limit? | A band-locked close is the fence, not the price. It enters the EMA as a censored number and the histogram spike that follows is an artefact. |
| Does the 26-day EMA reach back into a floor-price window? | **A 26-day EMA carries meaningful weight from roughly 60 sessions back.** If any of those sat at an administered floor, every number in the table above is contaminated. |
| Was there a long holiday inside the window? | The recursion has no clock. A bar after a nine-day Eid closure is weighted identically to a bar after one night. |
| How many trades set each close? | On a thin counter, the close is a handful of prints. Smoothing noise produces a smooth curve of noise. |
| Is the stock in a book-building or lock-in window? | Supply mechanics unrelated to momentum will dominate the reading. |

The floor-price row is the one that should stop you. **The floor did not distort MACD for the duration of the floor — it distorted MACD for roughly sixty sessions after the floor lifted**, because that is how far back a 26-day EMA still carries weight. Chapter 34 gave you the decay arithmetic; §35.4 below repeats it, because on a Bangladeshi chart it is not a technicality.`,
      bn: `### KDSALTD: ছয়টি সেশন যেখানে MACD যা যা বলতে পারে তার সবই সঠিক ক্রমে ভুল হয়

KDSALTD এখানে দৃষ্টান্তমূলকভাবে ব্যবহৃত একটি মাঝারি আকারের ডিএসই ইঞ্জিনিয়ারিং ও অ্যাকসেসরিজ নাম। **নিচের প্রতিটি সংখ্যা নির্মিত, ঐতিহাসিক নয়।** ছয়-সেশনের জানালাটি ইচ্ছাকৃতভাবে সংক্ষিপ্ত যাতে আপনি প্রতিটি সংখ্যা হাতে বহন করতে পারেন, আর ইচ্ছাকৃতভাবে একটি মোড়ে বাছা যাতে তিনটি রেখা পরস্পরের সঙ্গে দ্বিমত করে — যা স্বাভাবিক ঘটনা, ব্যতিক্রম নয়।

আমরা শেয়ারটির সঙ্গে যোগ দিই যখন এটি ইতিমধ্যেই একটি প্রতিষ্ঠিত আপট্রেন্ডে। এটি সপ্তাহের পর সপ্তাহ চলেছে; দুটি EMA-ই বীজায়িত ও উষ্ণ। প্রমিত ১২/২৬/৯ প্যারামিটার, তাই অধ্যায় ৩৪-এর পুনরাবৃত্তি থেকে:

$$\\alpha_{12} = \\frac{2}{13} = 0.153846, \\qquad \\alpha_{26} = \\frac{2}{27} = 0.074074, \\qquad \\alpha_{9} = \\frac{2}{10} = 0.200000$$

**শূন্য দিনের বীজ অবস্থা**, ইতিমধ্যেই চলমান ট্রেন্ড থেকে বয়ে আনা:

| | দিন ০ |
|---|---|
| ক্লোজ | ৪৭.৬০ |
| EMA12 | ৪৭.২০০০ |
| EMA26 | ৪৬.১০০০ |
| MACD | **১.১০০০** |
| সিগন্যাল | ০.৮৬০০ |
| হিস্টোগ্রাম | **+০.২৪০০** |
| PPO | ২.৩৮৬১% |

এগোনোর আগে ঐ বীজটি পড়ুন। ১.১০০০-এ MACD বলছে ১২ দিনের EMA ২৬ দিনের EMA-র ১.১০ টাকা ওপরে — **শেয়ারটি এগোচ্ছে, আর জিরো লাইন ধারেকাছেও নেই।** +০.২৪০০-এ হিস্টোগ্রাম বলছে অগ্রগতি এখন ত্বরান্বিত হচ্ছে। সবকিছু সুস্থ।

### ছয়টি সেশন

| দিন | ক্লোজ | EMA12 | EMA26 | MACD | সিগন্যাল | হিস্ট | PPO % | অবস্থা |
|---|---|---|---|---|---|---|---|---|
| D0 (বীজ) | ৪৭.৬০ | ৪৭.২০০০ | ৪৬.১০০০ | ১.১০০০ | ০.৮৬০০ | +০.২৪০০ | ২.৩৮৬১ | BULL |
| D1 | ৪৮.৬০ | ৪৭.৪১৫৪ | ৪৬.২৮৫২ | ১.১৩০২ | ০.৯১৪০ | +০.২১৬২ | ২.৪৪১৮ | BULL |
| D2 | **৪৯.৮০** | ৪৭.৭৮২২ | ৪৬.৫৪৫৫ | **১.২৩৬৭** | ০.৯৭৮৬ | **+০.২৫৮১** | ২.৬৫৭০ | BULL |
| D3 | ৪৯.১০ | ৪৭.৯৮৫০ | ৪৬.৭৩৪৮ | **১.২৫০২** | ১.০৩২৯ | +০.২১৭৩ | ২.৬৭৫১ | BULL |
| D4 | ৪৭.৯০ | ৪৭.৯৭১৯ | ৪৬.৮২১১ | ১.১৫০৮ | ১.০৫৬৫ | +০.০৯৪৩ | ২.৪৫৭৯ | BULL |
| D5 | ৪৬.৫০ | ৪৭.৭৪৫৫ | ৪৬.৭৯৭৩ | ০.৯৪৮২ | ১.০৩৪৮ | **−০.০৮৬৭** | ২.০২৬১ | **BEAR** |

ছয়টি সারি। এবার এগুলো ঠিকমতো পড়ুন, কারণ ঐ টেবিলে চারটি আলাদা গল্প আছে আর বেশিরভাগ মানুষ একটি দেখেন।

### গল্প এক: দামের শীর্ষ ও MACD-র শীর্ষ ভিন্ন দিনে

**দাম D2-তে ৪৯.৮০-তে শীর্ষে ওঠে। MACD লাইন D3-তে ১.২৫০২-তে শীর্ষে ওঠে — এক সেশন পরে।**

এটি মানুষকে চমকে দেয়, দেওয়া উচিত নয়। MACD লাইন একটি মসৃণকৃত পরিবর্তনের হার। D3-তে শেয়ারটি ছেপেছে ৪৯.১০, যা ৪৯.৮০ থেকে *নিচে*, তবু MACD ১.২৩৬৭ থেকে ১.২৫০২-এ উঠেছে। কেন? কারণ ৪৯.১০ এখনো ৪৬.৭৩-এর ২৬ দিনের EMA-র স্বচ্ছন্দভাবে ওপরে, তাই একটি পতনের দিনেও দ্রুত EMA ধীরটির ওপর জায়গা করে নিতে থেকেছে।

**একটি পড়ন্ত দাম MACD লাইনকে তুলতে পারে।** যিনি MACD লাইনকে দামের বিকল্প ভাবেন তিনি ঠিক তখনই ভুল হবেন যখন এটি সবচেয়ে বেশি গুরুত্বপূর্ণ।

### গল্প দুই: হিস্টোগ্রাম দামের দিনেই শীর্ষে ওঠে, আর আপনাকে তিন সেশন দেয়

**হিস্টোগ্রাম D2-তে +০.২৫৮১-তে শীর্ষে — ৪৯.৮০ সর্বোচ্চের সেই একই সেশনে।** তারপর: +০.২১৭৩, +০.০৯৪৩, −০.০৮৬৭।

এটিই সতর্কবার্তা। এটি সত্যিকারের, এটি আগাম, আর এটি ঠিক তিন সেশন দীর্ঘ। খেয়াল করুন ক্ষয় কত তীব্রভাবে ত্বরান্বিত হয়: D2 থেকে D3-তে পতন ০.০৪০৮, D3 থেকে D4-তে ০.১২৩০, D4 থেকে D5-তে ০.১৮১০। **দ্বিতীয় অন্তরকলজটি নিজেই নিম্নমুখীভাবে ত্বরান্বিত হচ্ছে** — ট্রেন্ড কেবল মন্থর হচ্ছে না, প্রতিদিন আরও দ্রুত মন্থর হচ্ছে।

কিন্তু এ-ও খেয়াল করুন D1-এ কী হলো। হিস্টোগ্রাম +০.২৪০০ থেকে +০.২১৬২-তে নামল **এমন একটি সেশনে যেদিন শেয়ারটি পুরো এক টাকা বেড়েছে, ৪৭.৬০ থেকে ৪৮.৬০।** একটি জোরালো ঊর্ধ্বমুখী দিনে সংকুচিত হিস্টোগ্রাম। যিনি সংকুচিত হিস্টোগ্রামে বিক্রি করেন তিনি D1-এ বিক্রি করেছেন ও ৪৯.৮০-এর প্রিন্ট পুরোপুরি হারিয়েছেন।

**এটিই হিস্টোগ্রামের পুরো চরিত্র: এটি D2-তে সঠিকভাবে সতর্ক করে আর D1-এ আপনাকে মিথ্যা বলে, আর দিনটিতে দাঁড়িয়ে আপনি বুঝতে পারবেন না কোনটি দেখছেন।**

### গল্প তিন: সিগন্যাল-লাইন ক্রস D5-এ চালু হয়, আর তা নিশ্চিত নয়

D4 (+০.০৯৪৩) ও D5 (−০.০৮৬৭)-এর মধ্যে হিস্টোগ্রাম চিহ্ন বদলায়। এটিই বেয়ারিশ সিগন্যাল-লাইন ক্রসওভার, আর "MACD সেল দিয়েছে" বললে বেশিরভাগ মানুষ এটিই বোঝান।

ক্রসে দাম: **৪৬.৫০।** তিন সেশন আগে সর্বোচ্চে দাম: **৪৯.৮০।**

$$\\text{Give-back} = \\frac{49.80 - 46.50}{49.80} \\times 100 = \\frac{3.30}{49.80} \\times 100 = 6.6265\\%$$

**সংকেতটির খরচ সর্বোচ্চের ৬.৬৩%, আর এটি এসেছে তিন বার দেরিতে।** এটি MACD-র সমালোচনা নয়; এটি মসৃণীকরণ থেকে আসা পাটিগণিত। প্রতিটি মসৃণকৃত সূচক এই মূল্য দেয়। গুরুত্বপূর্ণ হলো আপনি সংখ্যাটি আগেই জানতেন, পরে আবিষ্কার করেননি।

আর সবচেয়ে গুরুত্বপূর্ণ: **D5-এ MACD এখনো +০.৯৪৮২।** এটি শূন্যের ধারেকাছেও নেই। তাই শিট একে শ্রেণিবদ্ধ করে:

> **SELL — unconfirmed।**

সিগন্যাল লাইন বলছে মোমেন্টাম উল্টে গেছে। জিরো লাইন বলছে ট্রেন্ড পুরোপুরি অক্ষত — ৪৭.৭৪৫৫-এ ১২ দিনের EMA এখনো ৪৬.৭৯৭৩-এ ২৬ দিনের EMA-র ০.৯৫ টাকা ওপরে। **MACD-র নিজেরই তিনটি রেখার দুটি দ্বিমত করছে, আর সৎ পাঠ হলো "তীব্রভাবে মন্থর হচ্ছে, এখনো ঘোরেনি।"**

জিরো লাইন সম্মত হতে দাম আর কতটা পড়তে হতো? ব্যবধান ০.৯৪৮২ টাকা আর EMA দুটি প্রতি সেশনে দাম থেকে দূরত্বের মোটামুটি $(\\alpha_{12} - \\alpha_{26}) = 0.0798$ অংশে অভিসারী হয়। এই গতিতে আরও প্রায় এক ডজন সেশন, বা আরও দুই-তিনটি তীব্র পতনের দিন। **জিরো লাইন কাছে নয়।**

### গল্প চার: একই জানালা একটি সীমাহীন স্কেলে অন্য শেয়ার সম্পর্কে কিছুই বলে না

D5-এর অবস্থাটি নিন আর একই দিনে অন্য দুটি ডিএসই নামের পাশে রাখুন:

| শেয়ার | দাম | EMA26 | MACD | PPO % |
|---|---|---|---|---|
| শেয়ার A — KDSALTD (মাঝারি দাম) | ৪৬.৫০ | ৪৬.৭৯৭৩ | ০.৯৪৮২ | **২.০২৬২** |
| শেয়ার B (উঁচু দাম) | ৯৫২.০০ | ৯৪০.০০ | **৯.৫০০০** | ১.০১০৬ |
| শেয়ার C (নিচু দাম) | ১২.৪০ | ১২.৩০ | ০.২৮০০ | **২.২৭৬৪** |

| ক্রমের ভিত্তি | বিজয়ী |
|---|---|
| পরম MACD | **শেয়ার B** (৯.৫০০০) |
| PPO | **শেয়ার C** (২.২৭৬৪%) |

**দুটি পদ্ধতি ভিন্ন শেয়ার বাছে, আর পরম পদ্ধতিটি একটি স্পষ্ট কারণে ভুলটি বাছে: শেয়ার B দামি।** ৯৪০ টাকার গড়ে ৯.৫০ টাকার ব্যবধান এক শতাংশের চলন। ১২.৩০ টাকার গড়ে ০.২৮ টাকার ব্যবধান ২.২৮% — দ্বিগুণেরও বেশি মোমেন্টাম, এমন একটি সংখ্যায় যা আকারে এক-ত্রিশাংশেরও কম।

যে বোর্ড প্রায় ৫ টাকা থেকে ১,০০০ টাকারও অনেক ওপরে বিস্তৃত, সেখানে **পরম MACD-তে স্ক্রিন করা মানে শেয়ারের দামের জন্য স্ক্রিন করা।** এটি প্রতি সপ্তাহে আপনাকে একই দামি নামগুলো ধরিয়ে দেবে আর আপনি তাকে সংকেত ভেবে ভুল করবেন।

### D5-এ আসলে কী হওয়া উচিত ছিল

"হিস্টোগ্রাম ক্রস করেছে বলে বিক্রি" নয়। এই হলো সুশৃঙ্খল পাঠ, আর ক্রমটিই গুরুত্বপূর্ণ:

১. **প্রথমে জিরো লাইন দেখুন।** MACD +০.৯৪৮২। ট্রেন্ড অক্ষত। এটি রিভার্সাল সংকেত নয়।
২. **হিস্টোগ্রামের ক্রম দেখুন।** +০.২৫৮১ → +০.২১৭৩ → +০.০৯৪৩ → −০.০৮৬৭। তীব্র ক্ষয়, আর ক্ষয়টি ত্বরান্বিত হচ্ছে। মোমেন্টাম সত্যিই উল্টে গেছে।
৩. **দাম কী করেছে দেখুন।** ৪৯.৮০ → ৪৬.৫০ মানে তিন সেশনে ৬.৬৩%। ডিএসই-তে তা মোটামুটি একটি পূর্ণ দৈনিক সার্কিট ব্যান্ডের দুই-তৃতীয়াংশ চলন।
৪. **উপসংহার: কমান, বেরোবেন না।** ট্রেন্ড ভাঙেনি; ত্বরণ ভেঙেছে। নিচ থেকে লং থাকলে শক্তিতে ছাঁটুন ও স্টপ ওপরে তুলুন। ফ্ল্যাট থাকলে এটি জোরালোভাবেই কোনো প্রবেশ নয়, কোনো দিকেই নয়।

**আর বিশেষভাবে ডিএসই-তে: নির্ভরযোগ্য শর্ট সাইড নেই, তাই "বেয়ারিশ MACD ক্রস" একটি কিনবেন-না ও ছাঁটাই সংকেত, ট্রেড নয়।** বাংলাদেশি মিড-ক্যাপে সিগন্যাল-লাইন ক্রস শর্ট করতে যিনি শেখাচ্ছেন তিনি আপনাকে এমন একটি ট্রেড শেখাচ্ছেন যা আপনি করতেই পারবেন না।

### ওপরের কিছু গোনার আগে যে ডিএসই ওভারলে চালাতে হবে

| যাচাই | এখানে কেন গুরুত্বপূর্ণ |
|---|---|
| D0–D5-এর কোনোটি কি সার্কিট সীমায় বন্ধ হয়েছে? | ব্যান্ডে আটকা ক্লোজ বেড়া, দাম নয়। এটি সেন্সরকৃত সংখ্যা হিসেবে EMA-তে ঢোকে আর তারপরের হিস্টোগ্রাম স্পাইক একটি কৃত্রিম বস্তু। |
| ২৬ দিনের EMA কি কোনো ফ্লোর-প্রাইস জানালায় পৌঁছায়? | **২৬ দিনের EMA প্রায় ৬০ সেশন পেছন থেকে উল্লেখযোগ্য ওজন বহন করে।** ঐগুলোর কোনোটি প্রশাসিত মেঝেতে বসে থাকলে ওপরের টেবিলের প্রতিটি সংখ্যা দূষিত। |
| জানালার ভেতরে কি দীর্ঘ ছুটি ছিল? | পুনরাবৃত্তির কোনো ঘড়ি নেই। নয় দিনের ঈদের ছুটির পরের বার এক রাতের পরের বারের সমান ওজন পায়। |
| প্রতিটি ক্লোজ কতগুলো ট্রেডে নির্ধারিত? | পাতলা কাউন্টারে ক্লোজ হাতে গোনা কয়েকটি প্রিন্ট। কোলাহল মসৃণ করলে কোলাহলের মসৃণ বক্ররেখা পাওয়া যায়। |
| শেয়ারটি কি বুক-বিল্ডিং বা লক-ইন জানালায়? | মোমেন্টামের সঙ্গে সম্পর্কহীন সরবরাহ-যান্ত্রিকতা পাঠটিকে গ্রাস করবে। |

ফ্লোর-প্রাইসের সারিটিই আপনাকে থামানো উচিত। **ফ্লোর MACD-কে ফ্লোরের সময়কালের জন্য বিকৃত করেনি — এটি MACD-কে বিকৃত করেছে ফ্লোর ওঠার পরও প্রায় ষাট সেশন**, কারণ ২৬ দিনের EMA ততদূর পেছন থেকে এখনো ওজন বহন করে। অধ্যায় ৩৪ আপনাকে ক্ষয়ের পাটিগণিত দিয়েছে; নিচের §৩৫.৪ তা পুনরাবৃত্তি করে, কারণ একটি বাংলাদেশি চার্টে এটি কারিগরি খুঁটিনাটি নয়।`,
    },

    formula: {
      en: `### 1. The two EMAs — inherited unchanged from Chapter 34

$$\\alpha_n = \\frac{2}{n+1}, \\qquad E_t^{(n)} = \\alpha_n P_t + (1 - \\alpha_n) E_{t-1}^{(n)} = E_{t-1}^{(n)} + \\alpha_n\\left(P_t - E_{t-1}^{(n)}\\right)$$

At the standard parameters:

$$\\alpha_{12} = \\frac{2}{13} = 0.153846, \\qquad \\alpha_{26} = \\frac{2}{27} = 0.074074$$

**Two design choices are already baked in before MACD exists, and both are Chapter 34's, not this chapter's.** First, $\\alpha = 2/(n+1)$ rather than $1/n$ — the factor of two is chosen so that the EMA's centre of mass matches an $n$-period simple moving average's, which is $(n-1)/2$ bars back. Second, the recursion never forgets. Every price since the seed is still in there, weighted $(1-\\alpha)^k$.

**That second property is the source of every DSE problem in this chapter.** An SMA drops a bar out of the window and it is gone. An EMA never drops anything.

### 2. The MACD line — a difference, not an oscillator

$$M_t = E_t^{(12)} - E_t^{(26)}$$

**Why a difference and not a ratio?** Because Appel wanted a quantity that is zero exactly when the two averages cross, so that the sign of $M_t$ reproduces Chapter 34's crossover state and the magnitude adds new information. A ratio would put the crossover at 1, which is arithmetically identical and psychologically worse.

Expand both recursions into their weight series and subtract:

$$M_t = \\sum_{k \\ge 0} w_k P_{t-k}, \\qquad w_k = \\alpha_{12}(1-\\alpha_{12})^k - \\alpha_{26}(1-\\alpha_{26})^k$$

Evaluate the first few weights:

| $k$ | $\\alpha_{12}(1-\\alpha_{12})^k$ | $\\alpha_{26}(1-\\alpha_{26})^k$ | $w_k$ |
|---|---|---|---|
| 0 | 0.153846 | 0.074074 | **+0.079772** |
| 5 | 0.066732 | 0.050414 | +0.016318 |
| 10 | 0.028945 | 0.034311 | **−0.005365** |
| 20 | 0.005446 | 0.015892 | −0.010447 |
| 40 | 0.000193 | 0.003410 | −0.003217 |

**The weights are positive out to $k = 8$, turn negative at $k = 9$, and sum to exactly zero.** That last fact is the whole character of the indicator:

$$\\sum_{k \\ge 0} w_k = \\sum_k \\alpha_{12}(1-\\alpha_{12})^k - \\sum_k \\alpha_{26}(1-\\alpha_{26})^k = 1 - 1 = 0$$

**A filter whose weights sum to zero returns zero on any constant input.** Feed it a stock parked at BDT 50 for a year and it reads exactly 0.0000; feed it a stock parked at BDT 500 and it reads exactly 0.0000. MACD is blind to price level and sensitive only to change. It is a **band-pass filter** — it subtracts the distant past from the recent past.

### 3. The signal line — the same smoother applied to the output

$$S_t = S_{t-1} + \\alpha_9\\left(M_t - S_{t-1}\\right), \\qquad \\alpha_9 = \\frac{2}{10} = 0.200000$$

**Note carefully that the signal line is an EMA of $M_t$, not of price.** This is the step people implement wrongly most often, and the error is invisible: a 9-day EMA of price also produces a plausible-looking line on the chart, and it is a completely different quantity.

Why nine? For the same non-reason as twelve and twenty-six: it is roughly half of the fast period, which makes it fast enough to cross frequently and slow enough to filter something. **There is no derivation. Treat 9 as a knob, not a constant.**

### 4. The histogram — a second derivative, and why that is the crux

$$H_t = M_t - S_t$$

Substitute the signal recursion. Since $S_t = S_{t-1} + \\alpha_9(M_t - S_{t-1})$:

$$H_t = M_t - S_{t-1} - \\alpha_9(M_t - S_{t-1}) = (1 - \\alpha_9)\\left(M_t - S_{t-1}\\right)$$

**So the histogram is, up to the constant 0.8, the amount by which the MACD line exceeds its own previous smoothed value.** That is a difference of a series against its own lag — which is, structurally, a rate of change.

Now chain the interpretations:

| Quantity | What it is a rate of change of | Order |
|---|---|---|
| $P_t$ | — | 0 |
| $M_t$ | Price | **1st derivative** |
| $H_t$ | MACD line | **2nd derivative** |

**Therefore the histogram measures the acceleration of price, and it turns when acceleration turns.** In the worked example the histogram falls from +0.2400 to +0.2162 on D1, a session in which the stock rose a full taka. There is no contradiction: the stock rose *less energetically than the smoothing implied*, so acceleration fell while velocity stayed strongly positive.

**A trader who exits on histogram peaks is exiting on the derivative of the derivative, two steps removed from the thing they own.** That is the single most expensive misreading of this indicator.

### 5. Divergence, stated precisely enough to be falsifiable

Let $t_1 < t_2$ be two local price extrema of the same type. Bearish divergence:

$$P_{t_2} > P_{t_1} \\quad \\text{and} \\quad M_{t_2} < M_{t_1}$$

Bullish divergence:

$$P_{t_2} < P_{t_1} \\quad \\text{and} \\quad M_{t_2} > M_{t_1}$$

**Read what this actually asserts.** $M$ is a smoothed rate of change, so bearish divergence says: *price reached a higher level than last time, but got there more slowly.* That is a true statement about the data and a weak statement about the future.

Two cautions the textbooks skip:

1. **Divergence is defined only between extrema, and extrema are only identifiable in hindsight.** You cannot know $t_2$ is a swing high until price has already come off it. Every divergence you can see is a divergence that has already partly resolved.
2. **It is scale-free in $M$ but not in time.** A divergence measured across three sessions and one measured across eleven months are the same shape and completely different claims. **Always record the bar-count between the two extrema.**

Chapter 44 handles divergence properly, including the crucial empirical point that it persists, frequently, for months. Note it here; do not size on it here.

### 6. PPO — the only version you may rank with

$$PPO_t = \\frac{E_t^{(12)} - E_t^{(26)}}{E_t^{(26)}} \\times 100 = \\frac{M_t}{E_t^{(26)}} \\times 100$$

**Divide by the slow EMA, not by the close.** Two reasons, and the second is the one that matters on the DSE. First, $E^{(26)}$ is smoother, so the denominator does not itself inject noise into a ratio. Second, a single circuit-limited or gap close can move $P_t$ by ten percent in one session, which would make a close-denominated ratio jump for reasons that have nothing to do with momentum. **The slow EMA absorbs that; the close does not.**

Work the D5 numbers:

$$PPO_{D5} = \\frac{0.948167}{46.797292} \\times 100 = 2.0261\\%$$

And now the comparison that justifies the whole section:

$$\\text{Stock B: } \\frac{9.50}{940.00} \\times 100 = 1.0106\\%, \\qquad \\text{Stock C: } \\frac{0.28}{12.30} \\times 100 = 2.2764\\%$$

**Stock B's MACD is roughly thirty-four times Stock C's and its momentum is less than half.** Rank on absolute MACD and you have built a share-price screen wearing a momentum costume.

### 7. Lag, and why it compounds rather than adds

An EMA's centre of mass sits $(n-1)/2$ bars behind the data:

$$L_{12} = \\frac{12-1}{2} = 5.5 \\text{ bars}, \\qquad L_{26} = \\frac{26-1}{2} = 12.5 \\text{ bars}, \\qquad L_{9} = \\frac{9-1}{2} = 4.0 \\text{ bars}$$

The MACD line does **not** simply inherit 12.5 bars of lag — differencing partially cancels it, which is why $M_t$ can peak on D3 while price peaked on D2 rather than twelve sessions later. But the signal line applies a *fresh* four-bar lag **on top of** whatever lag $M_t$ already carries, and the histogram inherits all of it.

**This is why the signal-line cross in the worked example arrives three bars after the high and after a 6.63% give-back.** The arithmetic:

$$\\text{Give-back} = \\frac{49.80 - 46.50}{49.80} \\times 100 = 6.6265\\%$$

**Budget that number before you take the signal, not after.** On a market with a ±10% daily band, three bars of lag is up to thirty percent of theoretical adverse movement, and in a real gap-down sequence you will not get filled at the printed close.

### 8. Warm-up — the compounded problem, and the floor-price bomb

How many bars until the seed's influence is negligible? The seed's weight after $t$ bars is $(1-\\alpha)^t$. Solve $(1-\\alpha)^t < 0.01$:

$$t^{*}(n) = \\frac{\\ln 0.01}{\\ln(1-\\alpha_n)}$$

| Series | $\\alpha$ | Bars to 1% seed weight |
|---|---|---|
| EMA12 | 0.153846 | 27.6 → **28** |
| EMA26 | 0.074074 | 59.8 → **60** |
| Signal EMA9 (on $M_t$) | 0.200000 | 20.6 → **21** |

**The MACD line is not trustworthy until roughly 60 bars after the seed. The histogram is not trustworthy until roughly 81**, because the signal EMA needs its own 21 bars *of already-clean MACD input*. The warm-ups chain; they do not overlap.

In DSE sessions — five a week, minus holidays — **60 bars is about three calendar months and 81 bars is about four.**

Now the consequence that no international textbook will tell you:

> **A flat floor-price period poisons every EMA that spans it, and a 26-day EMA spans roughly sixty sessions.** If the floor lifted in month zero, MACD on that chart is contaminated through month three and the histogram through month four — not because the data is missing, but because it is present, flat, and administratively determined.

The remedy is not cosmetic. **Either restart the recursion from a clean seed after the floor lifts and refuse to publish a reading for sixty sessions, or exclude the name.** Averaging a regulation is not a measurement, and no amount of smoothing converts one into the other.

### 9. The complete parameter table, with honest commentary

| Symbol | Value | Where it comes from | Should you change it? |
|---|---|---|---|
| $n_{\\text{fast}}$ | 12 | Appel, 1970s, six-day trading week | Yes — test 8–15 |
| $n_{\\text{slow}}$ | 26 | Same, ~one month of six-day weeks | Yes — test 20–35 |
| $n_{\\text{sig}}$ | 9 | Roughly half the fast period | Yes — test 5–12 |
| Input series | Close | Convention | Consider typical price $(H+L+C)/3$ on thin counters |
| Denominator for PPO | $E^{(26)}$ | Smoothness | **No** — do not use the close |

**Bangladesh trades five sessions, Sunday to Thursday.** The original rationale for 12 and 26 was calendar-based on a six-day week and does not survive translation. This is *not* an argument for optimising — Chapter 34 already showed what parameter search on a short history produces. **It is an argument for robustness testing: if a conclusion exists at 12/26/9 and vanishes at 10/21/7 and 15/30/10, you have found an artefact of the parameters, not a property of the stock.**`,
      bn: `### ১. দুটি EMA — অধ্যায় ৩৪ থেকে অপরিবর্তিতভাবে উত্তরাধিকারসূত্রে প্রাপ্ত

$$\\alpha_n = \\frac{2}{n+1}, \\qquad E_t^{(n)} = \\alpha_n P_t + (1 - \\alpha_n) E_{t-1}^{(n)} = E_{t-1}^{(n)} + \\alpha_n\\left(P_t - E_{t-1}^{(n)}\\right)$$

প্রমিত প্যারামিটারে:

$$\\alpha_{12} = \\frac{2}{13} = 0.153846, \\qquad \\alpha_{26} = \\frac{2}{27} = 0.074074$$

**MACD-র অস্তিত্বের আগেই দুটি নকশাগত সিদ্ধান্ত ঢুকে গেছে, আর দুটিই অধ্যায় ৩৪-এর, এই অধ্যায়ের নয়।** প্রথমত, $1/n$-এর বদলে $\\alpha = 2/(n+1)$ — দুইয়ের গুণকটি এমনভাবে বাছা যাতে EMA-র ভরকেন্দ্র একটি $n$-পিরিয়ড সিম্পল মুভিং অ্যাভারেজের ভরকেন্দ্রের সঙ্গে মেলে, যা $(n-1)/2$ বার পেছনে। দ্বিতীয়ত, পুনরাবৃত্তিটি কখনো ভোলে না। বীজের পর থেকে প্রতিটি দাম এখনো ভেতরে আছে, $(1-\\alpha)^k$ ওজনে।

**ঐ দ্বিতীয় বৈশিষ্ট্যই এই অধ্যায়ের প্রতিটি ডিএসই সমস্যার উৎস।** একটি SMA জানালা থেকে একটি বার ফেলে দেয় ও তা চলে যায়। একটি EMA কখনো কিছু ফেলে না।

### ২. MACD লাইন — একটি পার্থক্য, অসিলেটর নয়

$$M_t = E_t^{(12)} - E_t^{(26)}$$

**পার্থক্য কেন, অনুপাত কেন নয়?** কারণ অ্যাপেল এমন একটি রাশি চেয়েছিলেন যা ঠিক তখনই শূন্য হয় যখন দুটি গড় পরস্পরকে অতিক্রম করে, যাতে $M_t$-এর চিহ্ন অধ্যায় ৩৪-এর ক্রসওভার অবস্থা পুনরুৎপাদন করে আর মান নতুন তথ্য যোগ করে। একটি অনুপাত ক্রসওভারকে ১-এ বসাত, যা গাণিতিকভাবে অভিন্ন ও মনস্তাত্ত্বিকভাবে খারাপ।

দুটি পুনরাবৃত্তিকেই ওজন-শ্রেণিতে বিস্তৃত করে বিয়োগ করুন:

$$M_t = \\sum_{k \\ge 0} w_k P_{t-k}, \\qquad w_k = \\alpha_{12}(1-\\alpha_{12})^k - \\alpha_{26}(1-\\alpha_{26})^k$$

প্রথম কয়েকটি ওজন হিসাব করুন:

| $k$ | $\\alpha_{12}(1-\\alpha_{12})^k$ | $\\alpha_{26}(1-\\alpha_{26})^k$ | $w_k$ |
|---|---|---|---|
| ০ | ০.১৫৩৮৪৬ | ০.০৭৪০৭৪ | **+০.০৭৯৭৭২** |
| ৫ | ০.০৬৬৭৩২ | ০.০৫০৪১৪ | +০.০১৬৩১৮ |
| ১০ | ০.০২৮৯৪৫ | ০.০৩৪৩১১ | **−০.০০৫৩৬৫** |
| ২০ | ০.০০৫৪৪৬ | ০.০১৫৮৯২ | −০.০১০৪৪৭ |
| ৪০ | ০.০০০১৯৩ | ০.০০৩৪১০ | −০.০০৩২১৭ |

**ওজনগুলো $k = 8$ পর্যন্ত ধনাত্মক, $k = 9$-এ ঋণাত্মক হয়, আর তাদের যোগফল ঠিক শূন্য।** ঐ শেষ তথ্যটিই সূচকটির পুরো চরিত্র:

$$\\sum_{k \\ge 0} w_k = \\sum_k \\alpha_{12}(1-\\alpha_{12})^k - \\sum_k \\alpha_{26}(1-\\alpha_{26})^k = 1 - 1 = 0$$

**যে ফিল্টারের ওজনের যোগফল শূন্য তা যেকোনো ধ্রুব ইনপুটে শূন্য ফেরত দেয়।** এক বছর ধরে ৫০ টাকায় দাঁড়ানো একটি শেয়ার দিন, এটি ঠিক ০.০০০০ পড়ে; ৫০০ টাকায় দাঁড়ানো শেয়ার দিন, এটি ঠিক ০.০০০০ পড়ে। MACD দামের স্তরের প্রতি অন্ধ ও কেবল পরিবর্তনের প্রতি সংবেদনশীল। এটি একটি **ব্যান্ড-পাস ফিল্টার** — এটি সাম্প্রতিক অতীত থেকে দূর অতীতকে বিয়োগ করে।

### ৩. সিগন্যাল লাইন — একই মসৃণকারী আউটপুটে প্রয়োগ করা

$$S_t = S_{t-1} + \\alpha_9\\left(M_t - S_{t-1}\\right), \\qquad \\alpha_9 = \\frac{2}{10} = 0.200000$$

**মনোযোগ দিয়ে লক্ষ করুন সিগন্যাল লাইন $M_t$-এর একটি EMA, দামের নয়।** এই ধাপটিই মানুষ সবচেয়ে বেশি ভুলভাবে বাস্তবায়ন করেন, আর ভুলটি অদৃশ্য: দামের ৯ দিনের EMA-ও চার্টে বিশ্বাসযোগ্য দেখতে একটি রেখা তৈরি করে, আর তা সম্পূর্ণ ভিন্ন একটি রাশি।

নয় কেন? বারো ও ছাব্বিশের মতো একই অ-কারণে: এটি মোটামুটি দ্রুত পিরিয়ডের অর্ধেক, যা একে ঘন ঘন ক্রস করার মতো দ্রুত ও কিছু ছাঁকার মতো ধীর করে। **কোনো উদ্ভব নেই। ৯-কে একটি নব হিসেবে দেখুন, ধ্রুবক হিসেবে নয়।**

### ৪. হিস্টোগ্রাম — একটি দ্বিতীয় অন্তরকলজ, আর কেন সেটিই মূল কথা

$$H_t = M_t - S_t$$

সিগন্যাল পুনরাবৃত্তি বসান। যেহেতু $S_t = S_{t-1} + \\alpha_9(M_t - S_{t-1})$:

$$H_t = M_t - S_{t-1} - \\alpha_9(M_t - S_{t-1}) = (1 - \\alpha_9)\\left(M_t - S_{t-1}\\right)$$

**তাই হিস্টোগ্রাম হলো, ০.৮ ধ্রুবক পর্যন্ত, MACD লাইন তার নিজের পূর্ববর্তী মসৃণকৃত মানকে যতটা ছাড়িয়ে যায় তা।** এটি একটি সিরিজের নিজের ল্যাগের বিপরীতে পার্থক্য — যা কাঠামোগতভাবে একটি পরিবর্তনের হার।

এবার ব্যাখ্যাগুলো শৃঙ্খলাবদ্ধ করুন:

| রাশি | কীসের পরিবর্তনের হার | ক্রম |
|---|---|---|
| $P_t$ | — | ০ |
| $M_t$ | দাম | **১ম অন্তরকলজ** |
| $H_t$ | MACD লাইন | **২য় অন্তরকলজ** |

**তাই হিস্টোগ্রাম দামের ত্বরণ মাপে, আর ত্বরণ ঘুরলে এটি ঘোরে।** উদাহরণে হিস্টোগ্রাম D1-এ +০.২৪০০ থেকে +০.২১৬২-তে নামে, এমন একটি সেশনে যেদিন শেয়ারটি পুরো এক টাকা বেড়েছে। কোনো স্ববিরোধ নেই: শেয়ারটি *মসৃণীকরণ যা ইঙ্গিত করেছিল তার চেয়ে কম শক্তিতে* বেড়েছে, তাই ত্বরণ কমেছে আর বেগ জোরালোভাবে ধনাত্মক থেকেছে।

**যিনি হিস্টোগ্রামের শীর্ষে বেরিয়ে যান তিনি অন্তরকলজের অন্তরকলজে বেরোচ্ছেন, নিজের মালিকানাধীন জিনিস থেকে দুই ধাপ দূরে।** এটিই এই সূচকের সবচেয়ে ব্যয়বহুল ভুল-পাঠ।

### ৫. ডাইভারজেন্স, মিথ্যা-প্রমাণযোগ্য হওয়ার মতো যথেষ্ট নির্দিষ্টভাবে বলা

ধরুন $t_1 < t_2$ একই ধরনের দুটি স্থানীয় দাম-প্রান্ত। বেয়ারিশ ডাইভারজেন্স:

$$P_{t_2} > P_{t_1} \\quad \\text{and} \\quad M_{t_2} < M_{t_1}$$

বুলিশ ডাইভারজেন্স:

$$P_{t_2} < P_{t_1} \\quad \\text{and} \\quad M_{t_2} > M_{t_1}$$

**এটি আসলে কী দাবি করছে পড়ুন।** $M$ একটি মসৃণকৃত পরিবর্তনের হার, তাই বেয়ারিশ ডাইভারজেন্স বলছে: *দাম গতবারের চেয়ে উঁচু স্তরে পৌঁছেছে, কিন্তু সেখানে পৌঁছেছে ধীরে।* এটি উপাত্ত সম্পর্কে একটি সত্য বিবৃতি আর ভবিষ্যৎ সম্পর্কে একটি দুর্বল বিবৃতি।

পাঠ্যবই যে দুটি সতর্কতা এড়িয়ে যায়:

১. **ডাইভারজেন্স কেবল প্রান্তগুলোর মধ্যে সংজ্ঞায়িত, আর প্রান্ত কেবল পশ্চাদ্দৃষ্টিতেই শনাক্তযোগ্য।** দাম নেমে না আসা পর্যন্ত আপনি জানতে পারবেন না $t_2$ একটি সুইং হাই। আপনি যে ডাইভারজেন্স দেখতে পান তা এমন ডাইভারজেন্স যা ইতিমধ্যেই আংশিকভাবে নিষ্পন্ন হয়েছে।
২. **এটি $M$-এ স্কেল-মুক্ত কিন্তু সময়ে নয়।** তিন সেশনে মাপা একটি ডাইভারজেন্স ও এগারো মাসে মাপা একটি ডাইভারজেন্স একই আকৃতির আর সম্পূর্ণ ভিন্ন দাবি। **সর্বদা দুটি প্রান্তের মধ্যে বার-সংখ্যা লিপিবদ্ধ করুন।**

অধ্যায় ৪৪ ডাইভারজেন্সকে যথাযথভাবে সামলায়, ঐ গুরুত্বপূর্ণ পরীক্ষালব্ধ বিন্দুসহ যে এটি প্রায়ই মাসের পর মাস টিকে থাকে। এখানে খেয়াল করুন; এখানে এর ওপর আকার নেবেন না।

### ৬. PPO — একমাত্র সংস্করণ যা দিয়ে ক্রম দেওয়া যায়

$$PPO_t = \\frac{E_t^{(12)} - E_t^{(26)}}{E_t^{(26)}} \\times 100 = \\frac{M_t}{E_t^{(26)}} \\times 100$$

**ধীর EMA দিয়ে ভাগ করুন, ক্লোজ দিয়ে নয়।** দুটি কারণ, আর দ্বিতীয়টিই ডিএসই-তে গুরুত্বপূর্ণ। প্রথমত, $E^{(26)}$ বেশি মসৃণ, তাই হরটি নিজেই অনুপাতে কোলাহল ঢোকায় না। দ্বিতীয়ত, একটিমাত্র সার্কিট-সীমিত বা গ্যাপ ক্লোজ এক সেশনে $P_t$-কে দশ শতাংশ সরাতে পারে, যা ক্লোজ-হরযুক্ত অনুপাতকে এমন কারণে লাফাতে বাধ্য করত যার মোমেন্টামের সঙ্গে কোনো সম্পর্ক নেই। **ধীর EMA তা শুষে নেয়; ক্লোজ নেয় না।**

D5-এর সংখ্যা কষুন:

$$PPO_{D5} = \\frac{0.948167}{46.797292} \\times 100 = 2.0261\\%$$

আর এবার সেই তুলনা যা পুরো অংশটিকে যুক্তিসঙ্গত করে:

$$\\text{Stock B: } \\frac{9.50}{940.00} \\times 100 = 1.0106\\%, \\qquad \\text{Stock C: } \\frac{0.28}{12.30} \\times 100 = 2.2764\\%$$

**শেয়ার B-এর MACD শেয়ার C-এর প্রায় চৌত্রিশ গুণ আর তার মোমেন্টাম অর্ধেকেরও কম।** পরম MACD-তে ক্রম দিন আর আপনি মোমেন্টামের পোশাক পরা একটি শেয়ার-দামের স্ক্রিন বানিয়েছেন।

### ৭. ল্যাগ, আর কেন তা যোগ না হয়ে চক্রবৃদ্ধি হয়

একটি EMA-র ভরকেন্দ্র উপাত্ত থেকে $(n-1)/2$ বার পেছনে বসে:

$$L_{12} = \\frac{12-1}{2} = 5.5 \\text{ bars}, \\qquad L_{26} = \\frac{26-1}{2} = 12.5 \\text{ bars}, \\qquad L_{9} = \\frac{9-1}{2} = 4.0 \\text{ bars}$$

MACD লাইন ১২.৫ বারের ল্যাগ সরাসরি উত্তরাধিকারসূত্রে পায় **না** — বিয়োগ তা আংশিকভাবে বাতিল করে, আর এ কারণেই $M_t$ D3-তে শীর্ষে উঠতে পারে যখন দাম D2-তে শীর্ষে উঠেছে, বারো সেশন পরে নয়। কিন্তু সিগন্যাল লাইন $M_t$ ইতিমধ্যেই যে ল্যাগ বহন করছে **তার ওপর** একটি *নতুন* চার-বার ল্যাগ প্রয়োগ করে, আর হিস্টোগ্রাম সবটাই উত্তরাধিকারসূত্রে পায়।

**এ কারণেই উদাহরণে সিগন্যাল-লাইন ক্রস সর্বোচ্চের তিন বার পরে ও ৬.৬৩% ছাড় দেওয়ার পরে আসে।** পাটিগণিতটি:

$$\\text{Give-back} = \\frac{49.80 - 46.50}{49.80} \\times 100 = 6.6265\\%$$

**সংকেতটি নেওয়ার আগে ঐ সংখ্যাটির জন্য বাজেট রাখুন, পরে নয়।** দৈনিক ±১০% ব্যান্ডের একটি বাজারে তিন বারের ল্যাগ তাত্ত্বিক প্রতিকূল চলনের ত্রিশ শতাংশ পর্যন্ত হতে পারে, আর প্রকৃত গ্যাপ-ডাউনের ক্রমে আপনি ছাপা ক্লোজে ফিল পাবেন না।

### ৮. ওয়ার্ম-আপ — চক্রবৃদ্ধি সমস্যা, আর ফ্লোর-প্রাইসের বোমা

বীজের প্রভাব নগণ্য হতে কত বার লাগে? $t$ বার পরে বীজের ওজন $(1-\\alpha)^t$। সমাধান করুন $(1-\\alpha)^t < 0.01$:

$$t^{*}(n) = \\frac{\\ln 0.01}{\\ln(1-\\alpha_n)}$$

| সিরিজ | $\\alpha$ | ১% বীজ-ওজনে পৌঁছাতে বার |
|---|---|---|
| EMA12 | ০.১৫৩৮৪৬ | ২৭.৬ → **২৮** |
| EMA26 | ০.০৭৪০৭৪ | ৫৯.৮ → **৬০** |
| সিগন্যাল EMA9 ($M_t$-এর ওপর) | ০.২০০০০০ | ২০.৬ → **২১** |

**বীজের প্রায় ৬০ বার পর পর্যন্ত MACD লাইন বিশ্বাসযোগ্য নয়। হিস্টোগ্রাম প্রায় ৮১ বার পর্যন্ত বিশ্বাসযোগ্য নয়**, কারণ সিগন্যাল EMA-র *ইতিমধ্যেই পরিচ্ছন্ন MACD ইনপুটের* নিজস্ব ২১ বার দরকার। ওয়ার্ম-আপগুলো শৃঙ্খলাবদ্ধ হয়; ওভারল্যাপ করে না।

ডিএসই সেশনে — সপ্তাহে পাঁচটি, ছুটি বাদে — **৬০ বার প্রায় তিন পঞ্জিকা মাস আর ৮১ বার প্রায় চার মাস।**

এবার সেই পরিণতি যা কোনো আন্তর্জাতিক পাঠ্যবই আপনাকে বলবে না:

> **একটি সমতল ফ্লোর-প্রাইসের সময়কাল তাকে অতিক্রম করা প্রতিটি EMA-কে বিষাক্ত করে, আর ২৬ দিনের EMA প্রায় ষাট সেশন অতিক্রম করে।** ফ্লোর যদি শূন্য মাসে উঠে থাকে, ঐ চার্টে MACD তৃতীয় মাস পর্যন্ত ও হিস্টোগ্রাম চতুর্থ মাস পর্যন্ত দূষিত — উপাত্ত অনুপস্থিত বলে নয়, বরং তা উপস্থিত, সমতল ও প্রশাসনিকভাবে নির্ধারিত বলে।

প্রতিকারটি প্রসাধনী নয়। **হয় ফ্লোর ওঠার পর একটি পরিচ্ছন্ন বীজ থেকে পুনরাবৃত্তি নতুন করে শুরু করুন ও ষাট সেশন কোনো পাঠ প্রকাশ করতে অস্বীকার করুন, নয়তো নামটি বাদ দিন।** একটি নিয়মকে গড় করা কোনো পরিমাপ নয়, আর কোনো পরিমাণ মসৃণীকরণই একটিকে অন্যটিতে পরিণত করে না।

### ৯. সম্পূর্ণ প্যারামিটার তালিকা, সৎ মন্তব্যসহ

| প্রতীক | মান | কোথা থেকে আসে | বদলানো উচিত? |
|---|---|---|---|
| $n_{\\text{fast}}$ | ১২ | অ্যাপেল, ১৯৭০-এর দশক, ছয়-দিনের ট্রেডিং সপ্তাহ | হ্যাঁ — ৮–১৫ পরীক্ষা করুন |
| $n_{\\text{slow}}$ | ২৬ | একই, ছয়-দিনের সপ্তাহের ~এক মাস | হ্যাঁ — ২০–৩৫ পরীক্ষা করুন |
| $n_{\\text{sig}}$ | ৯ | মোটামুটি দ্রুত পিরিয়ডের অর্ধেক | হ্যাঁ — ৫–১২ পরীক্ষা করুন |
| ইনপুট সিরিজ | ক্লোজ | প্রথা | পাতলা কাউন্টারে টিপিক্যাল প্রাইস $(H+L+C)/3$ বিবেচনা করুন |
| PPO-র হর | $E^{(26)}$ | মসৃণতা | **না** — ক্লোজ ব্যবহার করবেন না |

**বাংলাদেশে রবিবার থেকে বৃহস্পতিবার পাঁচটি সেশন হয়।** ১২ ও ২৬-এর মূল যুক্তি ছয়-দিনের সপ্তাহে পঞ্জিকা-ভিত্তিক ছিল ও অনুবাদে টেকে না। এটি অপটিমাইজ করার যুক্তি *নয়* — সংক্ষিপ্ত ইতিহাসে প্যারামিটার খোঁজা কী উৎপন্ন করে অধ্যায় ৩৪ ইতিমধ্যেই দেখিয়েছে। **এটি দৃঢ়তা-পরীক্ষার যুক্তি: কোনো উপসংহার যদি ১২/২৬/৯-এ থাকে আর ১০/২১/৭ ও ১৫/৩০/১০-এ উবে যায়, আপনি শেয়ারটির ধর্ম নয়, প্যারামিটারের একটি কৃত্রিম বস্তু পেয়েছেন।**`,
    },

    manual: {
      en: `**Scenario.** KDSALTD from §35.3, standard 12/26/9. Seed state carried in from an established uptrend: EMA12 = 47.2000, EMA26 = 46.1000, Signal = 0.8600. Five subsequent closes: 48.60, 49.80, 49.10, 47.90, 46.50.

Every figure below reconciles cell-for-cell with the §35.6 sheet. Carry six decimals through the recursion and round only for display — **rounding at each step compounds, and by D5 a two-decimal working error is larger than the histogram itself.**

**Step 1 — The three smoothing constants.**
$$\\alpha_{12} = \\frac{2}{12+1} = \\frac{2}{13} = 0.153846$$
$$\\alpha_{26} = \\frac{2}{26+1} = \\frac{2}{27} = 0.074074$$
$$\\alpha_{9} = \\frac{2}{9+1} = \\frac{2}{10} = 0.200000$$

These are cells B6, B7, B8. **Notice the fast constant is more than twice the slow one** — the 12-day EMA reacts to each new close roughly 2.08 times as hard, and that ratio *is* the indicator.

**Step 2 — The seed row (D0), and why it is not a signal.**
$$M_0 = 47.2000 - 46.1000 = 1.1000$$
$$H_0 = 1.1000 - 0.8600 = 0.2400$$
$$PPO_0 = \\frac{1.1000}{46.1000} \\times 100 = 2.3861\\%$$

State: **BULL.** The J-column reads \`seed\` — **not "BUY".** A first row cannot be a crossover, because a crossover is defined by a sign change and there is no prior sign. Sheets that label the seed row as a signal manufacture one trade per instrument per backtest, which on a hundred-name universe is a hundred fictitious trades.

**Step 3 — Day 1 (close 48.60).** Fast EMA first:
$$E_1^{(12)} = 47.2000 + 0.153846 \\times (48.60 - 47.2000) = 47.2000 + 0.153846 \\times 1.4000 = 47.415385$$

Slow EMA:
$$E_1^{(26)} = 46.1000 + 0.074074 \\times (48.60 - 46.1000) = 46.1000 + 0.074074 \\times 2.5000 = 46.285185$$

MACD, signal, histogram:
$$M_1 = 47.415385 - 46.285185 = 1.130199$$
$$S_1 = 0.8600 + 0.200000 \\times (1.130199 - 0.8600) = 0.8600 + 0.054040 = 0.914040$$
$$H_1 = 1.130199 - 0.914040 = 0.216160$$
$$PPO_1 = \\frac{1.130199}{46.285185} \\times 100 = 2.4418\\%$$

**Stop and read this row, because it is the trap.** The stock rose a full taka. MACD rose. **And the histogram FELL, from 0.2400 to 0.2162.** Anyone running a "sell when the histogram turns down" rule sold here — one session before the high of the entire window.

**Step 4 — Day 2 (close 49.80), the price high.**
$$E_2^{(12)} = 47.415385 + 0.153846 \\times (49.80 - 47.415385) = 47.415385 + 0.366864 = 47.782249$$
$$E_2^{(26)} = 46.285185 + 0.074074 \\times (49.80 - 46.285185) = 46.285185 + 0.260357 = 46.545542$$
$$M_2 = 47.782249 - 46.545542 = 1.236707$$
$$S_2 = 0.914040 + 0.200000 \\times (1.236707 - 0.914040) = 0.914040 + 0.064533 = 0.978573$$
$$H_2 = 1.236707 - 0.978573 = 0.258133$$

**The histogram peaks here at 0.2581, on the same bar as the 49.80 price high.** That coincidence is not general — it happens here because the up-move was sharp. Do not build a rule on it.

**Step 5 — Day 3 (close 49.10), and the counter-intuitive row.**
$$E_3^{(12)} = 47.782249 + 0.153846 \\times (49.10 - 47.782249) = 47.782249 + 0.202731 = 47.984980$$
$$E_3^{(26)} = 46.545542 + 0.074074 \\times (49.10 - 46.545542) = 46.545542 + 0.189219 = 46.734761$$
$$M_3 = 47.984980 - 46.734761 = 1.250219$$
$$S_3 = 0.978573 + 0.200000 \\times (1.250219 - 0.978573) = 1.032902$$
$$H_3 = 1.250219 - 1.032902 = 0.217316$$

**Price fell 0.70 and the MACD line ROSE, from 1.2367 to 1.2502 — its high for the window.** The reason is mechanical: 49.10 is still 2.37 above the slow EMA, so the fast EMA kept gaining ground. **The MACD line peaks one bar after price. Never read $M_t$ as a proxy for price direction.**

**Step 6 — Day 4 (close 47.90).**
$$E_4^{(12)} = 47.984980 + 0.153846 \\times (47.90 - 47.984980) = 47.984980 - 0.013074 = 47.971906$$
$$E_4^{(26)} = 46.734761 + 0.074074 \\times (47.90 - 46.734761) = 46.734761 + 0.086314 = 46.821075$$
$$M_4 = 47.971906 - 46.821075 = 1.150831$$
$$S_4 = 1.032902 + 0.200000 \\times (1.150831 - 1.032902) = 1.056488$$
$$H_4 = 1.150831 - 1.056488 = 0.094343$$

Histogram still **positive**, at 0.0943. **No cross yet.** The state column still reads BULL and the signal column is still blank.

**Step 7 — Day 5 (close 46.50), the cross.**
$$E_5^{(12)} = 47.971906 + 0.153846 \\times (46.50 - 47.971906) = 47.971906 - 0.226447 = 47.745459$$
$$E_5^{(26)} = 46.821075 + 0.074074 \\times (46.50 - 46.821075) = 46.821075 - 0.023783 = 46.797292$$
$$M_5 = 47.745459 - 46.797292 = 0.948167$$
$$S_5 = 1.056488 + 0.200000 \\times (0.948167 - 1.056488) = 1.056488 - 0.021664 = 1.034824$$
$$H_5 = 0.948167 - 1.034824 = -0.086657$$

**$H_4 = +0.0943$ and $H_5 = -0.0867$. The histogram has changed sign. That is the bearish signal-line crossover.**

**Step 8 — Classify it, and refuse to stop at "SELL".** The sheet's J-column logic asks two questions, not one:

$$\\text{Cross fired?} \\quad H_5 < 0 \\;\\land\\; H_4 \\ge 0 \\quad \\Rightarrow \\quad \\text{YES}$$
$$\\text{Zero-line confirms?} \\quad M_5 < 0 \\;? \\quad 0.948167 < 0 \\quad \\Rightarrow \\quad \\textbf{NO}$$

> **SELL — unconfirmed.**

**This is the whole discipline of the chapter in one cell.** The momentum signal has fired and the trend signal has not. The 12-day EMA at 47.7455 is still BDT 0.948 above the 26-day EMA at 46.7973. **A sheet that prints "SELL" and stops has thrown away the more reliable of its own two signals.**

**Step 9 — The full histogram sequence, read as a second derivative.**
$$+0.2400 \\;\\to\\; +0.2162 \\;\\to\\; +0.2581 \\;\\to\\; +0.2173 \\;\\to\\; +0.0943 \\;\\to\\; -0.0867$$

Successive changes:
$$-0.0238, \\quad +0.0419, \\quad -0.0408, \\quad -0.1230, \\quad -0.1810$$

**The last three are strictly larger in magnitude each session.** Deceleration is itself accelerating. That is a genuinely informative reading and it is *not* the same claim as "the trend has ended."

**Step 10 — Price the lag, because "MACD lags" is otherwise just a slogan.**
$$\\text{High in window} = \\max(48.60,\\, 49.80,\\, 49.10,\\, 47.90,\\, 46.50) = 49.80 \\quad \\text{(cell B28)}$$
$$\\text{Close at the cross} = 46.50 \\quad \\text{(cell B29)}$$
$$\\text{Give-back} = \\frac{49.80 - 46.50}{49.80} \\times 100 = \\frac{3.30}{49.80} \\times 100 = 6.6265\\% \\quad \\text{(cell B30)}$$
$$\\text{Bars from high to signal} = 3 \\quad \\text{(cell B31)}$$

**The signal cost 6.63% of the high and took three sessions to arrive.** That is not an argument against using it; it is the price of admission, and you should know it before you buy the ticket.

**Step 11 — The lag verdict, which the sheet computes for you.**
$$\\text{B32} = \\text{IF}(M_5 < 0, \\text{"YES"}, \\text{"NO"}) = \\textbf{NO}$$

> **Signal-line cross only — MACD still above zero, trend not yet broken.**

**Step 12 — Now compute what waiting for the zero line would have cost.** MACD is 0.948167 and the EMAs converge at roughly $(\\alpha_{12} - \\alpha_{26}) = 0.0798$ of the price-to-slow-EMA distance per session. At D5's distance of $46.50 - 46.7973 = -0.2973$, convergence is slow — **a dozen more sessions of flat-to-soft price, or two more circuit-band down days.**

Price the two policies against the 49.80 high:

| Policy | Exit signal | Approx. exit price | Give-back from 49.80 |
|---|---|---|---|
| Histogram peak (D2) | Same bar as high | 49.80 | **0.00%** |
| Signal-line cross (D5) | 3 bars later | 46.50 | **6.63%** |
| Zero-line cross | ~12+ bars later | est. ≤ 45.00 | **≥ 9.6%** |

**And this table is exactly why the histogram is a trap.** It shows zero give-back here — because we picked a window in which it happened to be right. Run it over the same stock's previous six months and it fires eleven times, is wrong nine of them, and the cumulative cost of nine premature exits dwarfs the 6.63% you saved once.

**Never evaluate an early signal on the instance where it worked.**

**Step 13 — The cross-sectional screen (rows 19–25), which is a separate lesson.** Three stocks on D5:

| Stock | Price | EMA26 | MACD | PPO % |
|---|---|---|---|---|
| A — KDSALTD | 46.50 | 46.7973 | 0.9482 | $\\frac{0.9482}{46.7973}\\times 100 = 2.0262$ |
| B — high price | 952.00 | 940.00 | 9.5000 | $\\frac{9.50}{940.00}\\times 100 = 1.0106$ |
| C — low price | 12.40 | 12.30 | 0.2800 | $\\frac{0.28}{12.30}\\times 100 = 2.2764$ |

$$\\text{Rank \\#1 by absolute MACD} = \\text{Stock B} \\quad (9.5000)$$
$$\\text{Rank \\#1 by PPO} = \\text{Stock C} \\quad (2.2764\\%)$$

$$\\text{B23} \\ne \\text{B24} \\;\\Rightarrow\\; \\textbf{"Absolute MACD ranks a different stock than PPO — screen on PPO"}$$

**The two methods disagree on a three-name sample.** On a 350-name board they will disagree constantly, and the absolute screen will disagree in one direction only: **toward expensive shares, every single time.** Stock B's MACD is roughly 34× Stock C's; its momentum is 44% of Stock C's.

Note also the tiny discrepancy between the recursion's PPO for D5 (2.0261%) and the screen row's (2.0262%). It comes from the screen using EMA26 rounded to four decimals. **Six decimals through the recursion, four for display, and never mix the two in a comparison.**

**Step 14 — State what this sheet cannot see.** Five things, and none of them appear in any cell:

1. **Whether any of the five closes was a circuit-limit print.** If 46.50 was the floor of the band rather than a clearing price, $M_5$ is measuring the exchange's rule.
2. **Whether the 26-day EMA reaches back into a floor-price window.** It reaches roughly 60 sessions. If it does, delete the reading entirely — do not adjust it.
3. **How many trades set each close.** On a thin counter, six decimals of EMA precision on a close set by four trades is spurious precision, and it is the most persuasive kind of wrong.
4. **Whether a nine-day Eid closure sits inside the window.** The recursion weights that bar exactly like any other.
5. **Whether you can act on a bearish reading at all.** On the DSE you cannot reliably short. **A "SELL — unconfirmed" is a trim-and-do-not-add instruction, and pretending otherwise is the difference between a book and a brokerage account.**`,
      bn: `**পরিস্থিতি।** §৩৫.৩-এর KDSALTD, প্রমিত ১২/২৬/৯। একটি প্রতিষ্ঠিত আপট্রেন্ড থেকে বয়ে আনা বীজ অবস্থা: EMA12 = ৪৭.২০০০, EMA26 = ৪৬.১০০০, সিগন্যাল = ০.৮৬০০। পরবর্তী পাঁচটি ক্লোজ: ৪৮.৬০, ৪৯.৮০, ৪৯.১০, ৪৭.৯০, ৪৬.৫০।

নিচের প্রতিটি সংখ্যা §৩৫.৬-এর শিটের সঙ্গে ঘরে-ঘরে মেলে। পুনরাবৃত্তির মধ্য দিয়ে ছয় দশমিক বহন করুন ও কেবল প্রদর্শনের জন্য রাউন্ড করুন — **প্রতিটি ধাপে রাউন্ড করলে তা চক্রবৃদ্ধি হয়, আর D5-এ দুই-দশমিকের কাজের ভুল হিস্টোগ্রামটির নিজের চেয়েও বড়।**

**ধাপ ১ — তিনটি মসৃণীকরণ ধ্রুবক।**
$$\\alpha_{12} = \\frac{2}{12+1} = \\frac{2}{13} = 0.153846$$
$$\\alpha_{26} = \\frac{2}{26+1} = \\frac{2}{27} = 0.074074$$
$$\\alpha_{9} = \\frac{2}{9+1} = \\frac{2}{10} = 0.200000$$

এগুলো ঘর B6, B7, B8। **লক্ষ করুন দ্রুত ধ্রুবকটি ধীরটির দ্বিগুণেরও বেশি** — ১২ দিনের EMA প্রতিটি নতুন ক্লোজে প্রায় ২.০৮ গুণ জোরে প্রতিক্রিয়া দেখায়, আর ঐ অনুপাতটিই সূচকটি।

**ধাপ ২ — বীজ সারি (D0), আর কেন এটি সংকেত নয়।**
$$M_0 = 47.2000 - 46.1000 = 1.1000$$
$$H_0 = 1.1000 - 0.8600 = 0.2400$$
$$PPO_0 = \\frac{1.1000}{46.1000} \\times 100 = 2.3861\\%$$

অবস্থা: **BULL।** J-কলাম পড়ে \`seed\` — **"BUY" নয়।** প্রথম সারি ক্রসওভার হতে পারে না, কারণ ক্রসওভার একটি চিহ্ন-পরিবর্তনে সংজ্ঞায়িত আর এখানে আগের কোনো চিহ্ন নেই। যে শিট বীজ সারিকে সংকেত হিসেবে চিহ্নিত করে তা প্রতি ব্যাকটেস্টে প্রতি উপকরণে একটি করে ট্রেড তৈরি করে, যা একশো নামের বিশ্বে একশোটি কাল্পনিক ট্রেড।

**ধাপ ৩ — দিন ১ (ক্লোজ ৪৮.৬০)।** আগে দ্রুত EMA:
$$E_1^{(12)} = 47.2000 + 0.153846 \\times (48.60 - 47.2000) = 47.2000 + 0.153846 \\times 1.4000 = 47.415385$$

ধীর EMA:
$$E_1^{(26)} = 46.1000 + 0.074074 \\times (48.60 - 46.1000) = 46.1000 + 0.074074 \\times 2.5000 = 46.285185$$

MACD, সিগন্যাল, হিস্টোগ্রাম:
$$M_1 = 47.415385 - 46.285185 = 1.130199$$
$$S_1 = 0.8600 + 0.200000 \\times (1.130199 - 0.8600) = 0.8600 + 0.054040 = 0.914040$$
$$H_1 = 1.130199 - 0.914040 = 0.216160$$
$$PPO_1 = \\frac{1.130199}{46.285185} \\times 100 = 2.4418\\%$$

**থামুন ও এই সারিটি পড়ুন, কারণ এটিই ফাঁদ।** শেয়ারটি পুরো এক টাকা বেড়েছে। MACD বেড়েছে। **আর হিস্টোগ্রাম কমেছে, ০.২৪০০ থেকে ০.২১৬২-তে।** যিনি "হিস্টোগ্রাম নিচে ঘুরলে বিক্রি" নিয়ম চালান তিনি এখানেই বিক্রি করেছেন — পুরো জানালার সর্বোচ্চের এক সেশন আগে।

**ধাপ ৪ — দিন ২ (ক্লোজ ৪৯.৮০), দামের সর্বোচ্চ।**
$$E_2^{(12)} = 47.415385 + 0.153846 \\times (49.80 - 47.415385) = 47.415385 + 0.366864 = 47.782249$$
$$E_2^{(26)} = 46.285185 + 0.074074 \\times (49.80 - 46.285185) = 46.285185 + 0.260357 = 46.545542$$
$$M_2 = 47.782249 - 46.545542 = 1.236707$$
$$S_2 = 0.914040 + 0.200000 \\times (1.236707 - 0.914040) = 0.914040 + 0.064533 = 0.978573$$
$$H_2 = 1.236707 - 0.978573 = 0.258133$$

**হিস্টোগ্রাম এখানে ০.২৫৮১-তে শীর্ষে ওঠে, ৪৯.৮০ দাম-সর্বোচ্চের একই বারে।** ঐ কাকতালীয়তা সাধারণ নিয়ম নয় — এখানে ঘটেছে কারণ ঊর্ধ্বগতিটি তীব্র ছিল। এর ওপর নিয়ম বানাবেন না।

**ধাপ ৫ — দিন ৩ (ক্লোজ ৪৯.১০), আর প্রতিস্বজ্ঞাত সারিটি।**
$$E_3^{(12)} = 47.782249 + 0.153846 \\times (49.10 - 47.782249) = 47.782249 + 0.202731 = 47.984980$$
$$E_3^{(26)} = 46.545542 + 0.074074 \\times (49.10 - 46.545542) = 46.545542 + 0.189219 = 46.734761$$
$$M_3 = 47.984980 - 46.734761 = 1.250219$$
$$S_3 = 0.978573 + 0.200000 \\times (1.250219 - 0.978573) = 1.032902$$
$$H_3 = 1.250219 - 1.032902 = 0.217316$$

**দাম ০.৭০ পড়েছে আর MACD লাইন উঠেছে, ১.২৩৬৭ থেকে ১.২৫০২-তে — জানালার তার সর্বোচ্চ।** কারণটি যান্ত্রিক: ৪৯.১০ এখনো ধীর EMA-র ২.৩৭ ওপরে, তাই দ্রুত EMA জায়গা করে নিতে থেকেছে। **MACD লাইন দামের এক বার পরে শীর্ষে ওঠে। কখনো $M_t$-কে দামের দিকের বিকল্প হিসেবে পড়বেন না।**

**ধাপ ৬ — দিন ৪ (ক্লোজ ৪৭.৯০)।**
$$E_4^{(12)} = 47.984980 + 0.153846 \\times (47.90 - 47.984980) = 47.984980 - 0.013074 = 47.971906$$
$$E_4^{(26)} = 46.734761 + 0.074074 \\times (47.90 - 46.734761) = 46.734761 + 0.086314 = 46.821075$$
$$M_4 = 47.971906 - 46.821075 = 1.150831$$
$$S_4 = 1.032902 + 0.200000 \\times (1.150831 - 1.032902) = 1.056488$$
$$H_4 = 1.150831 - 1.056488 = 0.094343$$

হিস্টোগ্রাম এখনো **ধনাত্মক**, ০.০৯৪৩-এ। **এখনো কোনো ক্রস নেই।** অবস্থা কলাম এখনো BULL পড়ে আর সংকেত কলাম এখনো খালি।

**ধাপ ৭ — দিন ৫ (ক্লোজ ৪৬.৫০), ক্রস।**
$$E_5^{(12)} = 47.971906 + 0.153846 \\times (46.50 - 47.971906) = 47.971906 - 0.226447 = 47.745459$$
$$E_5^{(26)} = 46.821075 + 0.074074 \\times (46.50 - 46.821075) = 46.821075 - 0.023783 = 46.797292$$
$$M_5 = 47.745459 - 46.797292 = 0.948167$$
$$S_5 = 1.056488 + 0.200000 \\times (0.948167 - 1.056488) = 1.056488 - 0.021664 = 1.034824$$
$$H_5 = 0.948167 - 1.034824 = -0.086657$$

**$H_4 = +0.0943$ আর $H_5 = -0.0867$। হিস্টোগ্রাম চিহ্ন বদলেছে। এটিই বেয়ারিশ সিগন্যাল-লাইন ক্রসওভার।**

**ধাপ ৮ — একে শ্রেণিবদ্ধ করুন, আর "SELL"-এ থামতে অস্বীকার করুন।** শিটের J-কলামের যুক্তি একটি নয়, দুটি প্রশ্ন করে:

$$\\text{Cross fired?} \\quad H_5 < 0 \\;\\land\\; H_4 \\ge 0 \\quad \\Rightarrow \\quad \\text{YES}$$
$$\\text{Zero-line confirms?} \\quad M_5 < 0 \\;? \\quad 0.948167 < 0 \\quad \\Rightarrow \\quad \\textbf{NO}$$

> **SELL — unconfirmed।**

**একটি ঘরে এটিই অধ্যায়ের পুরো শৃঙ্খলা।** মোমেন্টাম সংকেত চালু হয়েছে আর ট্রেন্ড সংকেত হয়নি। ৪৭.৭৪৫৫-এ ১২ দিনের EMA এখনো ৪৬.৭৯৭৩-এ ২৬ দিনের EMA-র ০.৯৪৮ টাকা ওপরে। **যে শিট "SELL" ছেপে থেমে যায় তা নিজের দুটি সংকেতের মধ্যে বেশি নির্ভরযোগ্যটিই ফেলে দিয়েছে।**

**ধাপ ৯ — পূর্ণ হিস্টোগ্রাম ক্রম, দ্বিতীয় অন্তরকলজ হিসেবে পড়া।**
$$+0.2400 \\;\\to\\; +0.2162 \\;\\to\\; +0.2581 \\;\\to\\; +0.2173 \\;\\to\\; +0.0943 \\;\\to\\; -0.0867$$

পরপর পরিবর্তন:
$$-0.0238, \\quad +0.0419, \\quad -0.0408, \\quad -0.1230, \\quad -0.1810$$

**শেষ তিনটির মান প্রতিটি সেশনে কঠোরভাবে বড় হচ্ছে।** মন্থরতা নিজেই ত্বরান্বিত হচ্ছে। এটি সত্যিকারের তথ্যবহুল একটি পাঠ আর এটি "ট্রেন্ড শেষ হয়েছে" দাবির সমান *নয়*।

**ধাপ ১০ — ল্যাগের দাম হিসাব করুন, নইলে "MACD পিছিয়ে থাকে" কেবল একটি স্লোগান।**
$$\\text{High in window} = \\max(48.60,\\, 49.80,\\, 49.10,\\, 47.90,\\, 46.50) = 49.80 \\quad \\text{(cell B28)}$$
$$\\text{Close at the cross} = 46.50 \\quad \\text{(cell B29)}$$
$$\\text{Give-back} = \\frac{49.80 - 46.50}{49.80} \\times 100 = \\frac{3.30}{49.80} \\times 100 = 6.6265\\% \\quad \\text{(cell B30)}$$
$$\\text{Bars from high to signal} = 3 \\quad \\text{(cell B31)}$$

**সংকেতটির খরচ সর্বোচ্চের ৬.৬৩% আর আসতে লেগেছে তিন সেশন।** এটি এটি ব্যবহারের বিরুদ্ধে যুক্তি নয়; এটি প্রবেশমূল্য, আর টিকিট কেনার আগেই আপনার তা জানা উচিত।

**ধাপ ১১ — ল্যাগের রায়, যা শিট আপনার হয়ে গণনা করে।**
$$\\text{B32} = \\text{IF}(M_5 < 0, \\text{"YES"}, \\text{"NO"}) = \\textbf{NO}$$

> **Signal-line cross only — MACD still above zero, trend not yet broken।**

**ধাপ ১২ — এবার হিসাব করুন জিরো লাইনের অপেক্ষা কত খরচ করাত।** MACD ০.৯৪৮১৬৭ আর EMA দুটি প্রতি সেশনে দাম-থেকে-ধীর-EMA দূরত্বের মোটামুটি $(\\alpha_{12} - \\alpha_{26}) = 0.0798$ অংশে অভিসারী হয়। D5-এর $46.50 - 46.7973 = -0.2973$ দূরত্বে অভিসরণ ধীর — **আরও এক ডজন সেশনের সমতল-থেকে-নরম দাম, বা আরও দুটি সার্কিট-ব্যান্ড পতনের দিন।**

৪৯.৮০ সর্বোচ্চের বিপরীতে দুটি নীতির দাম কষুন:

| নীতি | প্রস্থান সংকেত | আনুমানিক প্রস্থান দাম | ৪৯.৮০ থেকে ছাড় |
|---|---|---|---|
| হিস্টোগ্রাম শীর্ষ (D2) | সর্বোচ্চের একই বার | ৪৯.৮০ | **০.০০%** |
| সিগন্যাল-লাইন ক্রস (D5) | ৩ বার পরে | ৪৬.৫০ | **৬.৬৩%** |
| জিরো-লাইন ক্রস | ~১২+ বার পরে | আনুমানিক ≤ ৪৫.০০ | **≥ ৯.৬%** |

**আর এই টেবিলটিই ঠিক কেন হিস্টোগ্রাম একটি ফাঁদ।** এটি এখানে শূন্য ছাড় দেখাচ্ছে — কারণ আমরা এমন একটি জানালা বেছেছি যেখানে এটি ঘটনাচক্রে সঠিক ছিল। একই শেয়ারের আগের ছয় মাসে চালান, এটি এগারোবার চালু হয়, নয়বার ভুল হয়, আর নয়টি অকাল প্রস্থানের ক্রমবর্ধমান খরচ আপনার একবার বাঁচানো ৬.৬৩%-কে বামন করে দেয়।

**যে ঘটনায় একটি আগাম সংকেত কাজ করেছে সেই ঘটনায় কখনো তার মূল্যায়ন করবেন না।**

**ধাপ ১৩ — ক্রস-সেকশনাল স্ক্রিন (সারি ১৯–২৫), যা একটি আলাদা শিক্ষা।** D5-এ তিনটি শেয়ার:

| শেয়ার | দাম | EMA26 | MACD | PPO % |
|---|---|---|---|---|
| A — KDSALTD | ৪৬.৫০ | ৪৬.৭৯৭৩ | ০.৯৪৮২ | $\\frac{0.9482}{46.7973}\\times 100 = 2.0262$ |
| B — উঁচু দাম | ৯৫২.০০ | ৯৪০.০০ | ৯.৫০০০ | $\\frac{9.50}{940.00}\\times 100 = 1.0106$ |
| C — নিচু দাম | ১২.৪০ | ১২.৩০ | ০.২৮০০ | $\\frac{0.28}{12.30}\\times 100 = 2.2764$ |

$$\\text{Rank \\#1 by absolute MACD} = \\text{Stock B} \\quad (9.5000)$$
$$\\text{Rank \\#1 by PPO} = \\text{Stock C} \\quad (2.2764\\%)$$

$$\\text{B23} \\ne \\text{B24} \\;\\Rightarrow\\; \\textbf{"Absolute MACD ranks a different stock than PPO — screen on PPO"}$$

**তিন নামের নমুনায় দুটি পদ্ধতি দ্বিমত করছে।** ৩৫০ নামের বোর্ডে তারা অনবরত দ্বিমত করবে, আর পরম স্ক্রিন কেবল একটি দিকেই দ্বিমত করবে: **দামি শেয়ারের দিকে, প্রতিবার।** শেয়ার B-এর MACD শেয়ার C-এর প্রায় ৩৪×; তার মোমেন্টাম শেয়ার C-এর ৪৪%।

আরও লক্ষ করুন পুনরাবৃত্তির D5 PPO (২.০২৬১%) ও স্ক্রিন সারির (২.০২৬২%) মধ্যেকার ক্ষুদ্র অসংগতি। এটি আসে স্ক্রিনে চার দশমিকে রাউন্ড করা EMA26 ব্যবহার করা থেকে। **পুনরাবৃত্তিতে ছয় দশমিক, প্রদর্শনে চার, আর একটি তুলনায় কখনো দুটি মেশাবেন না।**

**ধাপ ১৪ — এই শিট কী দেখতে পায় না তা বলুন।** পাঁচটি জিনিস, আর কোনোটিই কোনো ঘরে নেই:

১. **পাঁচটি ক্লোজের কোনোটি সার্কিট-সীমার প্রিন্ট ছিল কি না।** ৪৬.৫০ যদি ক্লিয়ারিং দামের বদলে ব্যান্ডের মেঝে হয়ে থাকে, $M_5$ এক্সচেঞ্জের নিয়ম মাপছে।
২. **২৬ দিনের EMA কোনো ফ্লোর-প্রাইস জানালায় পৌঁছায় কি না।** এটি প্রায় ৬০ সেশন পৌঁছায়। পৌঁছালে পাঠটি পুরোপুরি মুছে দিন — সমন্বয় করবেন না।
৩. **প্রতিটি ক্লোজ কতগুলো ট্রেডে নির্ধারিত।** পাতলা কাউন্টারে চারটি ট্রেডে নির্ধারিত ক্লোজে ছয় দশমিকের EMA নির্ভুলতা ভুয়া নির্ভুলতা, আর এটিই সবচেয়ে বিশ্বাসযোগ্য ধরনের ভুল।
৪. **জানালার ভেতরে নয় দিনের ঈদের ছুটি আছে কি না।** পুনরাবৃত্তি ঐ বারকে অন্য যেকোনোটির মতোই ঠিক সমান ওজন দেয়।
৫. **আপনি আদৌ একটি বেয়ারিশ পাঠের ওপর কাজ করতে পারেন কি না।** ডিএসই-তে আপনি নির্ভরযোগ্যভাবে শর্ট করতে পারবেন না। **একটি "SELL — unconfirmed" হলো ছাঁটাই-করুন-ও-যোগ-করবেন-না নির্দেশ, আর অন্যরকম ভান করা হলো একটি বই ও একটি ব্রোকারেজ হিসাবের মধ্যেকার পার্থক্য।**`,
    },

    mistakes: {
      en: `1. **Treating MACD as a bounded oscillator and looking for "overbought" levels.** There is no overbought level, because there is no ceiling. KDSALTD's MACD of 1.2502 on D3 is not high or low — it is 2.68% of price, and *that* number means something. **The MACD line has no fixed scale, so any threshold you set on it is a threshold on the share price.** Chapter 36's RSI is the bounded instrument; this is not.
2. **Selling on a shrinking histogram.** On D1 the histogram fell from 0.2400 to 0.2162 **on a session when the stock rose from 47.60 to 48.60.** A histogram-turn rule exits there and misses the 49.80 high entirely. The histogram is the second derivative; it shrinks the moment the trend stops *accelerating*, which in a healthy trend happens constantly.
3. **Acting on the signal-line cross without checking the zero line.** On D5 the histogram flips to −0.0867 while MACD is still **+0.9482** — nowhere near zero. The correct label is SELL — **unconfirmed**, and the correct action is trim, not exit. A sheet that prints "SELL" and stops has discarded the more reliable of its two signals.
4. **Ranking stocks by absolute MACD.** Stock B at 9.5000 outranks Stock C at 0.2800 by a factor of thirty-four, and Stock C is moving more than twice as fast — 2.2764% against 1.0106%. **An absolute MACD screen is a share-price screen wearing a momentum costume**, and on a board spanning BDT 5 to BDT 1,000+ it will hand you the same expensive names every week.
5. **Computing the signal line as a 9-period EMA of price instead of an EMA of the MACD line.** This is the most common coding error in the chapter and it is invisible: the wrong line looks perfectly plausible on a chart. On D1 the correct signal is **0.914040**; a 9-EMA of price would be somewhere near 47.5. If your signal line's magnitude resembles the share price, you have made this error.
6. **Publishing readings inside the warm-up.** The 26-EMA needs **60 bars** to reduce seed weight below 1%, and the signal EMA needs **21 more bars of already-clean MACD** — so the histogram is untrustworthy for roughly **81 sessions**, about four calendar months on the DSE. Seeding an EMA on Monday and trading its histogram on Friday is measuring your own seed.
7. **Averaging across a floor-price window.** A 26-day EMA carries meaningful weight from roughly sixty sessions back, so **a flat administered floor contaminates MACD for about three months after the floor lifts and the histogram for about four.** Averaging a regulation is not measurement; the remedy is to restart from a clean seed and publish nothing for sixty sessions, or to drop the name.
8. **Reading the MACD line as a proxy for price.** On D3 price fell 0.70 to 49.10 and the MACD line **rose** to 1.2502, its window high — because 49.10 was still 2.37 above the slow EMA. **A falling price can lift the MACD line**, and it does so most often precisely at turns, which is when you are relying on it.
9. **Rounding at each step of the recursion.** Carry six decimals. The D5 histogram is −0.086657; a two-decimal working error accumulated across six rows is comparable in size to the signal itself, and it will silently move your crossover by a bar.
10. **Labelling the seed row as a trade.** D0 shows a positive histogram, so a naive rule reports "BUY" on row one. It is not a crossover — there is no prior sign to change from. The sheet marks it \`seed\` deliberately. **On a hundred-name backtest this error manufactures a hundred fictitious trades, all of them at favourable prices.**
11. **Shorting the bearish cross.** The DSE has no reliable short side for a mid-cap. A bearish MACD reading is a **do-not-buy and a trim instruction**, and anyone backtesting short entries on Bangladeshi mid-caps is backtesting trades that could not have been placed.`,
      bn: `১. **MACD-কে একটি সীমাবদ্ধ অসিলেটর গণ্য করা ও "ওভারবট" স্তর খোঁজা।** কোনো ওভারবট স্তর নেই, কারণ কোনো ছাদ নেই। D3-তে KDSALTD-এর ১.২৫০২ MACD উঁচুও নয় নিচুও নয় — এটি দামের ২.৬৮%, আর *ঐ* সংখ্যাটির অর্থ আছে। **MACD লাইনের কোনো নির্দিষ্ট স্কেল নেই, তাই এর ওপর আপনার বসানো যেকোনো সীমা আসলে শেয়ারের দামের ওপর একটি সীমা।** অধ্যায় ৩৬-এর RSI সীমাবদ্ধ যন্ত্র; এটি নয়।
২. **সংকুচিত হিস্টোগ্রামে বিক্রি করা।** D1-এ হিস্টোগ্রাম ০.২৪০০ থেকে ০.২১৬২-তে নেমেছে **এমন একটি সেশনে যখন শেয়ারটি ৪৭.৬০ থেকে ৪৮.৬০-এ উঠেছে।** হিস্টোগ্রাম-মোড়ের নিয়ম সেখানেই বেরিয়ে যায় ও ৪৯.৮০ সর্বোচ্চ পুরোপুরি হারায়। হিস্টোগ্রাম দ্বিতীয় অন্তরকলজ; ট্রেন্ড *ত্বরান্বিত* হওয়া বন্ধ করার মুহূর্তেই এটি সংকুচিত হয়, যা একটি সুস্থ ট্রেন্ডে অনবরত ঘটে।
৩. **জিরো লাইন না দেখে সিগন্যাল-লাইন ক্রসে কাজ করা।** D5-এ হিস্টোগ্রাম −০.০৮৬৭-এ উল্টায় যখন MACD এখনো **+০.৯৪৮২** — শূন্যের ধারেকাছেও নয়। সঠিক লেবেল SELL — **unconfirmed**, আর সঠিক কাজ ছাঁটাই, প্রস্থান নয়। যে শিট "SELL" ছেপে থামে তা তার দুটি সংকেতের বেশি নির্ভরযোগ্যটিই ফেলে দিয়েছে।
৪. **পরম MACD দিয়ে শেয়ারের ক্রম দেওয়া।** ৯.৫০০০-এ শেয়ার B ০.২৮০০-এ শেয়ার C-কে চৌত্রিশ গুণে ছাড়ায়, আর শেয়ার C দ্বিগুণেরও বেশি দ্রুত চলছে — ২.২৭৬৪% বনাম ১.০১০৬%। **একটি পরম MACD স্ক্রিন মোমেন্টামের পোশাক পরা একটি শেয়ার-দামের স্ক্রিন**, আর ৫ টাকা থেকে ১,০০০+ টাকা বিস্তৃত একটি বোর্ডে এটি প্রতি সপ্তাহে আপনাকে একই দামি নামগুলোই ধরিয়ে দেবে।
৫. **সিগন্যাল লাইনকে MACD লাইনের EMA-র বদলে দামের ৯-পিরিয়ড EMA হিসেবে গণনা করা।** এটি অধ্যায়ের সবচেয়ে সাধারণ কোডিং ভুল আর এটি অদৃশ্য: ভুল রেখাটি চার্টে পুরোপুরি বিশ্বাসযোগ্য দেখায়। D1-এ সঠিক সিগন্যাল **০.৯১৪০৪০**; দামের ৯-EMA হতো ৪৭.৫-এর কাছাকাছি কিছু। আপনার সিগন্যাল লাইনের মান শেয়ারের দামের মতো দেখালে আপনি এই ভুলটি করেছেন।
৬. **ওয়ার্ম-আপের ভেতরে পাঠ প্রকাশ করা।** ২৬-EMA-র বীজ-ওজন ১%-এর নিচে নামাতে **৬০ বার** লাগে, আর সিগন্যাল EMA-র লাগে **ইতিমধ্যেই পরিচ্ছন্ন MACD-র আরও ২১ বার** — তাই হিস্টোগ্রাম প্রায় **৮১ সেশন** অবিশ্বাস্য, ডিএসই-তে প্রায় চার পঞ্জিকা মাস। সোমবার একটি EMA বীজায়িত করে শুক্রবার তার হিস্টোগ্রাম ট্রেড করা মানে নিজের বীজটিই মাপা।
৭. **একটি ফ্লোর-প্রাইস জানালা জুড়ে গড় করা।** ২৬ দিনের EMA প্রায় ষাট সেশন পেছন থেকে উল্লেখযোগ্য ওজন বহন করে, তাই **একটি সমতল প্রশাসিত মেঝে ফ্লোর ওঠার পরও প্রায় তিন মাস MACD ও প্রায় চার মাস হিস্টোগ্রাম দূষিত করে।** একটি নিয়ম গড় করা পরিমাপ নয়; প্রতিকার হলো একটি পরিচ্ছন্ন বীজ থেকে নতুন করে শুরু করা ও ষাট সেশন কিছু প্রকাশ না করা, নয়তো নামটি বাদ দেওয়া।
৮. **MACD লাইনকে দামের বিকল্প হিসেবে পড়া।** D3-তে দাম ০.৭০ পড়ে ৪৯.১০-এ গেল আর MACD লাইন **উঠল** ১.২৫০২-তে, তার জানালার সর্বোচ্চ — কারণ ৪৯.১০ তখনো ধীর EMA-র ২.৩৭ ওপরে ছিল। **একটি পড়ন্ত দাম MACD লাইনকে তুলতে পারে**, আর তা সবচেয়ে বেশি ঘটে ঠিক মোড়গুলোতেই, যখন আপনি এর ওপর নির্ভর করছেন।
৯. **পুনরাবৃত্তির প্রতিটি ধাপে রাউন্ড করা।** ছয় দশমিক বহন করুন। D5-এর হিস্টোগ্রাম −০.০৮৬৬৫৭; ছয়টি সারিতে জমা হওয়া দুই-দশমিকের কাজের ভুল সংকেতটির নিজের আকারের সমান, আর তা নিঃশব্দে আপনার ক্রসওভারকে এক বার সরিয়ে দেবে।
১০. **বীজ সারিকে ট্রেড হিসেবে চিহ্নিত করা।** D0 একটি ধনাত্মক হিস্টোগ্রাম দেখায়, তাই একটি সরল নিয়ম প্রথম সারিতেই "BUY" জানায়। এটি ক্রসওভার নয় — বদলানোর মতো আগের কোনো চিহ্নই নেই। শিট একে ইচ্ছাকৃতভাবেই \`seed\` চিহ্নিত করে। **একশো নামের ব্যাকটেস্টে এই ভুল একশোটি কাল্পনিক ট্রেড তৈরি করে, সবগুলোই অনুকূল দামে।**
১১. **বেয়ারিশ ক্রস শর্ট করা।** ডিএসই-তে মিড-ক্যাপের জন্য নির্ভরযোগ্য শর্ট সাইড নেই। একটি বেয়ারিশ MACD পাঠ একটি **কিনবেন-না ও ছাঁটাই নির্দেশ**, আর যিনি বাংলাদেশি মিড-ক্যাপে শর্ট প্রবেশ ব্যাকটেস্ট করছেন তিনি এমন ট্রেড ব্যাকটেস্ট করছেন যা করাই যেত না।`,
    },

    tips: {
      en: `1. **Read the zero line before you read anything else.** It is the slowest and the only one that is hard to fool. On D5 it says +0.9482 — trend intact — and that single number reclassifies the day's histogram cross from "SELL" to "trim". **Sequence: zero line, then signal cross, then histogram. Never the reverse.**
2. **Screen on PPO, always, and quote MACD only within a single instrument.** $M_t / E_t^{(26)} \\times 100$. On D5 that is 2.0261% for KDSALTD. Absolute MACD is comparable to itself across time only if the share price has not changed much — which over a DSE decade is never true.
3. **Write the give-back number down before you take a signal.** Here it is 6.63% over three bars, computed from a 49.80 high and a 46.50 cross. **A lag you budgeted for is a cost; a lag you discovered afterwards is a shock**, and shocks are what make people abandon systems mid-drawdown.
4. **Use the histogram to describe, never to trigger.** "Momentum is decaying and the decay is accelerating — 0.2581, 0.2173, 0.0943, −0.0867" is an excellent sentence to put in a journal. "The histogram turned down so I sold" is how you exit at D1 and miss D2.
5. **Refuse to publish any reading inside 60 bars of the seed, and any histogram inside 81.** Put the bar-count in a cell next to every reading. If your data starts in March, your first honest histogram is in July.
6. **Flag every close that printed at a circuit limit, before the EMA touches it.** A band-locked close is the exchange's fence, not a clearing price. Chapter 26's exclusion flag is the tool; feed the EMA the flag alongside the price and decide explicitly rather than by default.
7. **Never run MACD across a floor-price boundary. Restart the recursion.** The floor does not distort the indicator for the floor's duration — it distorts it for **sixty sessions afterwards.** Restart from a clean seed and accept the blackout; the alternative is publishing a number that measures a regulation.
8. **Test 10/21/7 and 15/30/10 alongside 12/26/9 on every conclusion you intend to act on.** Not to optimise — Chapter 34 already showed where that leads — but as a robustness check. **A signal that exists only at 12/26/9 is an artefact of Gerald Appel's six-day trading week, not a property of a Bangladeshi mid-cap.**
9. **On thin counters, consider feeding typical price $(H+L+C)/3$ instead of the close.** A close set by four trades is a coin flip dressed as data; the typical price at least uses the day's whole range. And record how many trades set each close — six decimals of EMA on a four-trade close is the most persuasive kind of nonsense.
10. **Translate every bearish reading into an action you can actually take.** On the DSE that means trim, stop adding, tighten the stop, or stand aside. It does not mean short. **Write your rules in terms of positions you can hold, or you are studying a market you do not trade in.**
11. **Keep the MACD line and the signal line's magnitudes in view as a sanity check on your code.** Both should be small numbers of the same order — 1.13 and 0.91 on D1. If either resembles the share price, you have smoothed the wrong series.`,
      bn: `১. **অন্য কিছু পড়ার আগে জিরো লাইন পড়ুন।** এটিই সবচেয়ে ধীর ও একমাত্র যাকে ধোঁকা দেওয়া কঠিন। D5-এ এটি বলে +০.৯৪৮২ — ট্রেন্ড অক্ষত — আর ঐ একটি সংখ্যাই দিনের হিস্টোগ্রাম ক্রসকে "SELL" থেকে "ছাঁটাই"-এ পুনঃশ্রেণিবদ্ধ করে। **ক্রম: জিরো লাইন, তারপর সিগন্যাল ক্রস, তারপর হিস্টোগ্রাম। কখনো উল্টো নয়।**
২. **সর্বদা PPO-তে স্ক্রিন করুন, আর MACD উদ্ধৃত করুন কেবল একটি উপকরণের ভেতরে।** $M_t / E_t^{(26)} \\times 100$। D5-এ KDSALTD-র জন্য তা ২.০২৬১%। পরম MACD সময়ে-সময়ে নিজের সঙ্গে তুলনীয় কেবল তখনই যদি শেয়ারের দাম বিশেষ বদলায়নি — যা একটি ডিএসই দশকে কখনোই সত্য নয়।
৩. **সংকেত নেওয়ার আগে ছাড়ের সংখ্যাটি লিখে রাখুন।** এখানে তা তিন বারে ৬.৬৩%, ৪৯.৮০ সর্বোচ্চ ও ৪৬.৫০ ক্রস থেকে গণিত। **যে ল্যাগের জন্য আপনি বাজেট রেখেছেন তা একটি খরচ; যে ল্যাগ আপনি পরে আবিষ্কার করেছেন তা একটি ধাক্কা**, আর ধাক্কাই মানুষকে ড্রডাউনের মাঝপথে পদ্ধতি ত্যাগ করায়।
৪. **হিস্টোগ্রাম বর্ণনার জন্য ব্যবহার করুন, কখনো ট্রিগারের জন্য নয়।** "মোমেন্টাম ক্ষয় হচ্ছে আর ক্ষয় ত্বরান্বিত হচ্ছে — ০.২৫৮১, ০.২১৭৩, ০.০৯৪৩, −০.০৮৬৭" জার্নালে রাখার মতো চমৎকার একটি বাক্য। "হিস্টোগ্রাম নিচে ঘুরল তাই বিক্রি করলাম" এভাবেই আপনি D1-এ বেরোন ও D2 হারান।
৫. **বীজের ৬০ বারের ভেতরে কোনো পাঠ, আর ৮১ বারের ভেতরে কোনো হিস্টোগ্রাম প্রকাশ করতে অস্বীকার করুন।** প্রতিটি পাঠের পাশের ঘরে বার-সংখ্যা রাখুন। আপনার ডেটা মার্চে শুরু হলে আপনার প্রথম সৎ হিস্টোগ্রাম জুলাইয়ে।
৬. **EMA স্পর্শ করার আগেই সার্কিট সীমায় ছাপা প্রতিটি ক্লোজ চিহ্নিত করুন।** ব্যান্ডে আটকা ক্লোজ এক্সচেঞ্জের বেড়া, ক্লিয়ারিং দাম নয়। অধ্যায় ২৬-এর বর্জন চিহ্নই হাতিয়ার; দামের পাশাপাশি চিহ্নটিও EMA-কে দিন আর ডিফল্টে নয়, স্পষ্টভাবে সিদ্ধান্ত নিন।
৭. **কখনো ফ্লোর-প্রাইসের সীমানা পেরিয়ে MACD চালাবেন না। পুনরাবৃত্তি নতুন করে শুরু করুন।** ফ্লোর সূচকটিকে ফ্লোরের সময়কালের জন্য বিকৃত করে না — এটি বিকৃত করে **পরবর্তী ষাট সেশন।** একটি পরিচ্ছন্ন বীজ থেকে নতুন করে শুরু করুন ও ব্ল্যাকআউট মেনে নিন; বিকল্প হলো এমন একটি সংখ্যা প্রকাশ করা যা একটি নিয়ম মাপে।
৮. **আপনি যে উপসংহারে কাজ করবেন তার প্রতিটিতে ১২/২৬/৯-এর পাশে ১০/২১/৭ ও ১৫/৩০/১০ পরীক্ষা করুন।** অপটিমাইজ করতে নয় — তা কোথায় নিয়ে যায় অধ্যায় ৩৪ ইতিমধ্যেই দেখিয়েছে — বরং দৃঢ়তা-যাচাই হিসেবে। **যে সংকেত কেবল ১২/২৬/৯-এ আছে তা জেরাল্ড অ্যাপেলের ছয়-দিনের ট্রেডিং সপ্তাহের একটি কৃত্রিম বস্তু, কোনো বাংলাদেশি মিড-ক্যাপের ধর্ম নয়।**
৯. **পাতলা কাউন্টারে ক্লোজের বদলে টিপিক্যাল প্রাইস $(H+L+C)/3$ দেওয়ার কথা ভাবুন।** চারটি ট্রেডে নির্ধারিত ক্লোজ উপাত্তের পোশাক পরা একটি টস; টিপিক্যাল প্রাইস অন্তত দিনের পুরো পরিসর ব্যবহার করে। আর প্রতিটি ক্লোজ কতগুলো ট্রেডে নির্ধারিত তা লিপিবদ্ধ করুন — চার-ট্রেডের ক্লোজে ছয় দশমিকের EMA সবচেয়ে বিশ্বাসযোগ্য ধরনের অর্থহীনতা।
১০. **প্রতিটি বেয়ারিশ পাঠকে এমন একটি কাজে অনুবাদ করুন যা আপনি সত্যিই করতে পারেন।** ডিএসই-তে তার মানে ছাঁটাই, যোগ করা বন্ধ, স্টপ শক্ত করা, বা সরে দাঁড়ানো। এর মানে শর্ট নয়। **আপনি যে পজিশন ধরে রাখতে পারেন তার ভাষায় নিয়ম লিখুন, নইলে আপনি এমন একটি বাজার পড়ছেন যেখানে আপনি ট্রেড করেন না।**
১১. **নিজের কোড যাচাইয়ের জন্য MACD লাইন ও সিগন্যাল লাইনের মান চোখের সামনে রাখুন।** দুটোই একই ক্রমের ছোট সংখ্যা হওয়া উচিত — D1-এ ১.১৩ ও ০.৯১। কোনোটি শেয়ারের দামের মতো দেখালে আপনি ভুল সিরিজ মসৃণ করেছেন।`,
    },

    exercises: {
      en: `1. Build the §35.6 sheet from scratch. Enter the seed row and the five closes, then confirm cell by cell: C12 = 47.415385, D12 = 46.285185, E12 = 1.130199, F12 = 0.914040, G12 = 0.216160. If any figure is off in the fourth decimal, you rounded $\\alpha$ instead of carrying $2/13$ exactly.
2. Confirm the D5 row: E16 = 0.948167, F16 = 1.034824, G16 = −0.086657, and J16 = "SELL — unconfirmed". Then explain in one sentence why J16 does not read "SELL — zero confirmed".
3. Confirm the lag audit: B28 = 49.80, B29 = 46.50, B30 = 6.6265, B31 = 3, B32 = NO. What price would D5 have had to close at for B32 to read YES? (Solve $E_5^{(12)} = E_5^{(26)}$ for the close — it is well below any single day's circuit band, which is itself the answer to why zero-line confirmation is slow.)
4. Change B3, B4, B5 to 10, 21, 7. Recompute the whole window. Does the bearish cross still land on D5? Does the MACD line still peak on D3? Now try 15/30/10. **Report which conclusions survive all three parameter sets and which do not.**
5. Add a column that computes the 9-period EMA of *price* alongside the correct signal line. Chart both. Confirm that the wrong one looks entirely plausible, and write down the one diagnostic that catches it instantly.
6. Extend the sheet with a warm-up column: for each row, compute $(1-\\alpha_{26})^t$ as the residual seed weight. At which row does it first fall below 0.01? Compare with the 60 bars derived in §35.4 — and note that the six rows you have built are all deep inside the warm-up.
7. Take a real DSE name with at least two years of daily closes. Compute MACD and PPO for the whole history. Plot both. Over how many percent has the share price moved across the sample, and by how much does that distort the MACD scale between the start and the end?
8. For the same name, count every signal-line crossover in the sample. For each, record: whether the zero line agreed, the give-back from the nearest prior extreme, and the outcome twenty sessions later. **Tabulate the confirmed and unconfirmed crossovers separately. Report the two hit rates.**
9. Repeat exercise 8 using histogram turns instead of crossovers. Count how many fire, how many are followed by a genuine reversal, and compute the cumulative cost of the false ones. Compare against the single 6.63% the histogram saved in §35.5.
10. Screen twenty DSE names by absolute MACD and again by PPO on the same date. **How many names appear in the top five of both lists? What is the median share price of each top five?** State what the absolute screen is actually measuring.
11. Find a name that traded at the floor price, and locate the session the floor lifted. Compute MACD from a seed 60 sessions before the lift, and again from a clean seed on the lift date. Chart the two side by side for the following 80 sessions. **How many sessions pass before they converge, and would the contaminated series have produced a different trade?**`,
      bn: `১. §৩৫.৬-এর শিট শূন্য থেকে তৈরি করুন। বীজ সারি ও পাঁচটি ক্লোজ বসান, তারপর ঘরে-ঘরে নিশ্চিত করুন: C12 = ৪৭.৪১৫৩৮৫, D12 = ৪৬.২৮৫১৮৫, E12 = ১.১৩০১৯৯, F12 = ০.৯১৪০৪০, G12 = ০.২১৬১৬০। কোনো সংখ্যা চতুর্থ দশমিকে না মিললে আপনি $2/13$ হুবহু বহন না করে $\\alpha$ রাউন্ড করেছেন।
২. D5 সারি নিশ্চিত করুন: E16 = ০.৯৪৮১৬৭, F16 = ১.০৩৪৮২৪, G16 = −০.০৮৬৬৫৭, আর J16 = "SELL — unconfirmed"। তারপর এক বাক্যে ব্যাখ্যা করুন কেন J16 "SELL — zero confirmed" পড়ে না।
৩. ল্যাগ অডিট নিশ্চিত করুন: B28 = ৪৯.৮০, B29 = ৪৬.৫০, B30 = ৬.৬২৬৫, B31 = ৩, B32 = NO। B32 YES পড়তে D5-কে কোন দামে বন্ধ হতে হতো? (ক্লোজের জন্য $E_5^{(12)} = E_5^{(26)}$ সমাধান করুন — তা একদিনের যেকোনো সার্কিট ব্যান্ডের অনেক নিচে, আর সেটিই জিরো-লাইন নিশ্চিতকরণ কেন ধীর তার উত্তর।)
৪. B3, B4, B5 বদলে ১০, ২১, ৭ করুন। পুরো জানালা পুনর্গণনা করুন। বেয়ারিশ ক্রস কি এখনো D5-এ পড়ে? MACD লাইন কি এখনো D3-তে শীর্ষে ওঠে? এবার ১৫/৩০/১০ চেষ্টা করুন। **জানান কোন উপসংহারগুলো তিনটি প্যারামিটার সেটেই টেকে আর কোনগুলো টেকে না।**
৫. সঠিক সিগন্যাল লাইনের পাশে *দামের* ৯-পিরিয়ড EMA গণনা করে একটি কলাম যোগ করুন। দুটিই চার্ট করুন। নিশ্চিত করুন ভুলটিও পুরোপুরি বিশ্বাসযোগ্য দেখায়, আর লিখুন কোন একটি নির্ণায়ক তাৎক্ষণিকভাবে এটি ধরে ফেলে।
৬. শিটে একটি ওয়ার্ম-আপ কলাম যোগ করুন: প্রতিটি সারিতে অবশিষ্ট বীজ-ওজন হিসেবে $(1-\\alpha_{26})^t$ গণনা করুন। কোন সারিতে এটি প্রথম ০.০১-এর নিচে নামে? §৩৫.৪-এ উদ্ভূত ৬০ বারের সঙ্গে তুলনা করুন — আর লক্ষ করুন আপনার তৈরি ছয়টি সারিই ওয়ার্ম-আপের গভীরে।
৭. অন্তত দুই বছরের দৈনিক ক্লোজসহ একটি প্রকৃত ডিএসই নাম নিন। পুরো ইতিহাসের জন্য MACD ও PPO গণনা করুন। দুটিই প্লট করুন। নমুনা জুড়ে শেয়ারের দাম কত শতাংশ নড়েছে, আর তাতে শুরু ও শেষের মধ্যে MACD-র স্কেল কতটা বিকৃত হয়?
৮. একই নামে নমুনার প্রতিটি সিগন্যাল-লাইন ক্রসওভার গুনুন। প্রতিটির জন্য লিপিবদ্ধ করুন: জিরো লাইন সম্মত ছিল কি না, নিকটতম পূর্ববর্তী প্রান্ত থেকে ছাড়, ও কুড়ি সেশন পরের ফলাফল। **নিশ্চিত ও অনিশ্চিত ক্রসওভারগুলো আলাদাভাবে সারণিবদ্ধ করুন। দুটি হিট রেটই জানান।**
৯. ক্রসওভারের বদলে হিস্টোগ্রাম মোড় দিয়ে ৮ নম্বর অনুশীলনটি পুনরাবৃত্তি করুন। কতগুলো চালু হয়, কতগুলোর পরে সত্যিকারের রিভার্সাল আসে গুনুন, আর ভুলগুলোর ক্রমবর্ধমান খরচ গণনা করুন। §৩৫.৫-এ হিস্টোগ্রামের বাঁচানো একমাত্র ৬.৬৩%-এর সঙ্গে তুলনা করুন।
১০. একই তারিখে কুড়িটি ডিএসই নামকে পরম MACD দিয়ে ও আবার PPO দিয়ে স্ক্রিন করুন। **দুটি তালিকার প্রথম পাঁচে কতগুলো নাম আছে? প্রতিটি প্রথম পাঁচের মধ্যমা শেয়ার-দাম কত?** পরম স্ক্রিনটি আসলে কী মাপছে বলুন।
১১. ফ্লোর প্রাইসে লেনদেন হয়েছে এমন একটি নাম খুঁজুন, ও ফ্লোর ওঠার সেশনটি শনাক্ত করুন। ওঠার ৬০ সেশন আগের একটি বীজ থেকে MACD গণনা করুন, আর আবার ওঠার তারিখে একটি পরিচ্ছন্ন বীজ থেকে। পরবর্তী ৮০ সেশনের জন্য দুটি পাশাপাশি চার্ট করুন। **তারা অভিসারী হতে কত সেশন লাগে, আর দূষিত সিরিজটি কি ভিন্ন কোনো ট্রেড তৈরি করত?**`,
    },

    summary: {
      en: `- **MACD is not an oscillator. It is the difference between two EMAs of the same series, measured in taka, and every correct statement about it follows from that.** The zero line is Chapter 34's crossover restated as a continuous quantity: $M_t = E_t^{(12)} - E_t^{(26)}$, zero exactly when the fast EMA crosses the slow one.
- **The weights sum to zero, so MACD is blind to price level and sensitive only to change.** Positive out to $k = 8$, negative from $k = 9$: it subtracts the distant past from the recent past. A stock parked at BDT 50 and one parked at BDT 500 both read 0.0000.
- **The histogram is a second derivative and turns when acceleration turns, not when the trend turns.** On D1 KDSALTD rose a full taka from 47.60 to 48.60 and the histogram *fell*, 0.2400 → 0.2162 — one session before the 49.80 high. **A histogram-turn exit rule sells there and misses the top.**
- **The three lines trade earliness against reliability exactly, and there is no setting that gives you both.** Histogram earliest and least reliable; signal cross in the middle; zero line latest and hardest to fool. **Read them in that order in reverse: zero line first.**
- **The worked window shows all three disagreeing, which is the normal case.** Price peaks D2 at 49.80, the MACD line peaks D3 at 1.2502 — **a falling price lifted it** — the histogram peaks D2 at 0.2581, and the bearish cross fires D5 with the histogram at −0.0867 while **MACD is still +0.9482.** Verdict: **SELL — unconfirmed.** Trim, do not exit.
- **Lag is a number you can compute, so compute it before the signal, not after.** The cross arrived three bars after the high at 46.50 against 49.80: $\\text{give-back} = 6.6265\\%$. On a market with a ±10% daily band that is a third of a limit move, and in a real gap sequence you will not be filled at the printed close.
- **The absolute level is meaningless across instruments, and PPO is the only defensible screen.** $PPO_{D5} = 0.948167 / 46.797292 \\times 100 = 2.0261\\%$. Stock B's MACD of 9.5000 is roughly thirty-four times Stock C's 0.2800 and its momentum is **1.0106% against 2.2764%** — less than half. **Ranking on absolute MACD is ranking on share price.**
- **Warm-up compounds and does not overlap: 28 bars for EMA12, 60 for EMA26, then 21 more of clean MACD for the signal — so the histogram is untrustworthy for about 81 sessions, roughly four calendar months on the DSE.**
- **Therefore a flat floor-price period poisons MACD for about sixty sessions after the floor lifts, and the histogram for about eighty.** Averaging an administered price is not measurement. **Restart from a clean seed and publish nothing for sixty sessions, or drop the name** — there is no adjustment that fixes it.
- **12, 26 and 9 come from a six-day trading week that Bangladesh does not have.** Do not optimise them; test them. **A signal that exists at 12/26/9 and vanishes at 10/21/7 and 15/30/10 is an artefact of Gerald Appel's calendar, not a property of your stock.**
- **Discipline established: zero line before signal cross before histogram; screen on PPO and never on absolute MACD; budget the give-back in advance; six decimals through the recursion; flag circuit-limit closes and floor-price windows before the EMA sees them; and translate every bearish reading into trim-and-do-not-add, because the DSE has no reliable short side.** MACD describes a trend you have already found; Chapter 36's RSI, bounded to [0, 100] by construction, is the instrument for the comparisons MACD cannot make.`,
      bn: `- **MACD অসিলেটর নয়। এটি একই সিরিজের দুটি EMA-র পার্থক্য, টাকায় মাপা, আর এ সম্পর্কে প্রতিটি সঠিক বিবৃতি তা থেকেই আসে।** জিরো লাইন হলো অধ্যায় ৩৪-এর ক্রসওভার একটি অবিচ্ছিন্ন রাশি হিসেবে পুনর্কথিত: $M_t = E_t^{(12)} - E_t^{(26)}$, ঠিক তখনই শূন্য যখন দ্রুত EMA ধীরটিকে অতিক্রম করে।
- **ওজনের যোগফল শূন্য, তাই MACD দামের স্তরের প্রতি অন্ধ ও কেবল পরিবর্তনের প্রতি সংবেদনশীল।** $k = 8$ পর্যন্ত ধনাত্মক, $k = 9$ থেকে ঋণাত্মক: এটি সাম্প্রতিক অতীত থেকে দূর অতীতকে বিয়োগ করে। ৫০ টাকায় দাঁড়ানো শেয়ার আর ৫০০ টাকায় দাঁড়ানো শেয়ার — দুটোই ০.০০০০ পড়ে।
- **হিস্টোগ্রাম একটি দ্বিতীয় অন্তরকলজ আর ত্বরণ ঘুরলে এটি ঘোরে, ট্রেন্ড ঘুরলে নয়।** D1-এ KDSALTD ৪৭.৬০ থেকে ৪৮.৬০-এ পুরো এক টাকা বেড়েছে আর হিস্টোগ্রাম *কমেছে*, ০.২৪০০ → ০.২১৬২ — ৪৯.৮০ সর্বোচ্চের এক সেশন আগে। **হিস্টোগ্রাম-মোড়ের প্রস্থান নিয়ম সেখানেই বিক্রি করে ও শীর্ষ হারায়।**
- **তিনটি রেখা আগাম হওয়া ও নির্ভরযোগ্য হওয়াকে ঠিক বিপরীত অনুপাতে বিনিময় করে, আর এমন কোনো সেটিং নেই যা দুটোই দেয়।** হিস্টোগ্রাম সবচেয়ে আগাম ও সবচেয়ে কম নির্ভরযোগ্য; সিগন্যাল ক্রস মাঝামাঝি; জিরো লাইন সবচেয়ে দেরিতে ও ধোঁকা দেওয়া সবচেয়ে কঠিন। **ঐ ক্রমের উল্টোদিক থেকে পড়ুন: প্রথমে জিরো লাইন।**
- **উদাহরণের জানালা তিনটিকেই দ্বিমত করতে দেখায়, যা স্বাভাবিক ঘটনা।** দাম D2-তে ৪৯.৮০-তে শীর্ষে, MACD লাইন D3-তে ১.২৫০২-তে শীর্ষে — **একটি পড়ন্ত দাম একে তুলেছে** — হিস্টোগ্রাম D2-তে ০.২৫৮১-তে শীর্ষে, আর বেয়ারিশ ক্রস D5-এ চালু হয় হিস্টোগ্রাম −০.০৮৬৭-এ যখন **MACD এখনো +০.৯৪৮২।** রায়: **SELL — unconfirmed।** ছাঁটুন, বেরোবেন না।
- **ল্যাগ এমন একটি সংখ্যা যা আপনি গণনা করতে পারেন, তাই সংকেতের আগে গণনা করুন, পরে নয়।** ক্রস এসেছে সর্বোচ্চের তিন বার পরে, ৪৯.৮০-এর বিপরীতে ৪৬.৫০-এ: $\\text{give-back} = 6.6265\\%$। দৈনিক ±১০% ব্যান্ডের বাজারে তা একটি লিমিট চলনের এক-তৃতীয়াংশ, আর প্রকৃত গ্যাপের ক্রমে আপনি ছাপা ক্লোজে ফিল পাবেন না।
- **পরম মানটি বিভিন্ন উপকরণে অর্থহীন, আর PPO-ই একমাত্র রক্ষণীয় স্ক্রিন।** $PPO_{D5} = 0.948167 / 46.797292 \\times 100 = 2.0261\\%$। শেয়ার B-এর ৯.৫০০০ MACD শেয়ার C-এর ০.২৮০০-এর প্রায় চৌত্রিশ গুণ আর তার মোমেন্টাম **১.০১০৬% বনাম ২.২৭৬৪%** — অর্ধেকেরও কম। **পরম MACD-তে ক্রম দেওয়া মানে শেয়ারের দামে ক্রম দেওয়া।**
- **ওয়ার্ম-আপ চক্রবৃদ্ধি হয়, ওভারল্যাপ করে না: EMA12-র জন্য ২৮ বার, EMA26-র জন্য ৬০, তারপর সিগন্যালের জন্য পরিচ্ছন্ন MACD-র আরও ২১ — তাই হিস্টোগ্রাম প্রায় ৮১ সেশন অবিশ্বাস্য, ডিএসই-তে প্রায় চার পঞ্জিকা মাস।**
- **তাই একটি সমতল ফ্লোর-প্রাইসের সময়কাল ফ্লোর ওঠার পরও প্রায় ষাট সেশন MACD ও প্রায় আশি সেশন হিস্টোগ্রাম বিষাক্ত করে।** একটি প্রশাসিত দাম গড় করা পরিমাপ নয়। **একটি পরিচ্ছন্ন বীজ থেকে নতুন করে শুরু করুন ও ষাট সেশন কিছু প্রকাশ করবেন না, নয়তো নামটি বাদ দিন** — এমন কোনো সমন্বয় নেই যা এটি ঠিক করে।
- **১২, ২৬ ও ৯ এসেছে এমন একটি ছয়-দিনের ট্রেডিং সপ্তাহ থেকে যা বাংলাদেশে নেই।** এগুলো অপটিমাইজ করবেন না; পরীক্ষা করুন। **যে সংকেত ১২/২৬/৯-এ আছে আর ১০/২১/৭ ও ১৫/৩০/১০-এ উবে যায় তা জেরাল্ড অ্যাপেলের পঞ্জিকার একটি কৃত্রিম বস্তু, আপনার শেয়ারের ধর্ম নয়।**
- **প্রতিষ্ঠিত শৃঙ্খলা: সিগন্যাল ক্রসের আগে জিরো লাইন, হিস্টোগ্রামের আগে সিগন্যাল ক্রস; PPO-তে স্ক্রিন করুন, কখনো পরম MACD-তে নয়; ছাড়ের জন্য আগেই বাজেট রাখুন; পুনরাবৃত্তিতে ছয় দশমিক; EMA দেখার আগেই সার্কিট-সীমার ক্লোজ ও ফ্লোর-প্রাইসের জানালা চিহ্নিত করুন; আর প্রতিটি বেয়ারিশ পাঠকে ছাঁটাই-করুন-ও-যোগ-করবেন-না-তে অনুবাদ করুন, কারণ ডিএসই-তে নির্ভরযোগ্য শর্ট সাইড নেই।** MACD আপনার ইতিমধ্যেই খুঁজে পাওয়া একটি ট্রেন্ড বর্ণনা করে; অধ্যায় ৩৬-এর RSI, গঠনগতভাবে [0, 100]-এ সীমাবদ্ধ, সেই তুলনাগুলোর যন্ত্র যা MACD করতে পারে না।`,
    },
  },

  interview: [
    {
      q: {
        en: 'Why do you say MACD is not an oscillator, and what practical difference does it make?',
        bn: 'আপনি কেন বলেন MACD অসিলেটর নয়, আর তাতে ব্যবহারিক পার্থক্য কী হয়?',
      },
      a: {
        en: 'Because an oscillator is bounded by construction and MACD is not — it is simply the twelve-day exponential average minus the twenty-six day exponential average of the same closes, measured in taka, and there is no ceiling on how far apart two averages can get. The practical difference is large and it shows up in two places. First, there is no such thing as an overbought MACD reading. People draw horizontal lines at a level that worked once on a particular chart and then apply that line to a different stock, where it means something completely different. In the worked example the MACD line peaks at one point two five zero two, and that number is meaningless until you divide it by the twenty-six day average of forty-six point seven three, which turns it into two point six eight percent — and a percentage is a thing you can actually reason about. Second, and this is the one that costs money on a Bangladeshi screen, you cannot rank stocks by it. In the chapter I put three names side by side: one at nine hundred fifty-two taka with a MACD of nine point five, and one at twelve taka forty with a MACD of zero point two eight. The absolute number says the expensive one is thirty-four times as strong. The percentages say one point zero one versus two point two eight, so the cheap one is actually moving more than twice as fast. On a board that runs from about five taka to well over a thousand, screening on absolute MACD is screening on share price with extra steps, and it will hand you the same expensive names every single week while you congratulate yourself on having a momentum system.',
        bn: 'কারণ একটি অসিলেটর গঠনগতভাবেই সীমাবদ্ধ আর MACD নয় — এটি স্রেফ একই ক্লোজের বারো দিনের এক্সপোনেনশিয়াল গড় বিয়োগ ছাব্বিশ দিনের এক্সপোনেনশিয়াল গড়, টাকায় মাপা, আর দুটি গড় কত দূরে যেতে পারে তার কোনো ছাদ নেই। ব্যবহারিক পার্থক্যটি বড় আর তা দুই জায়গায় দেখা দেয়। প্রথমত, ওভারবট MACD পাঠ বলে কিছু নেই। মানুষ এমন একটি স্তরে অনুভূমিক রেখা টানেন যা একটি নির্দিষ্ট চার্টে একবার কাজ করেছিল, তারপর সেই রেখা অন্য একটি শেয়ারে প্রয়োগ করেন, যেখানে তার অর্থ সম্পূর্ণ ভিন্ন। উদাহরণে MACD লাইন এক দশমিক দুই পাঁচ শূন্য দুই-এ শীর্ষে ওঠে, আর ঐ সংখ্যাটি অর্থহীন যতক্ষণ না আপনি একে ছেচল্লিশ দশমিক সাত তিনের ছাব্বিশ দিনের গড় দিয়ে ভাগ করছেন, যা একে দুই দশমিক ছয় আট শতাংশে পরিণত করে — আর একটি শতাংশ এমন জিনিস যা নিয়ে সত্যিই যুক্তি করা যায়। দ্বিতীয়ত, আর এটিই একটি বাংলাদেশি স্ক্রিনে টাকা খরচ করায়, আপনি এটি দিয়ে শেয়ারের ক্রম দিতে পারবেন না। অধ্যায়ে আমি তিনটি নাম পাশাপাশি রেখেছি: একটি নয়শো বাহান্ন টাকায় নয় দশমিক পাঁচ MACD সহ, আর একটি বারো টাকা চল্লিশ পয়সায় শূন্য দশমিক দুই আট MACD সহ। পরম সংখ্যাটি বলে দামিটি চৌত্রিশ গুণ শক্তিশালী। শতাংশ বলে এক দশমিক শূন্য এক বনাম দুই দশমিক দুই আট, তাই সস্তাটি আসলে দ্বিগুণেরও বেশি দ্রুত চলছে। যে বোর্ড প্রায় পাঁচ টাকা থেকে হাজার টাকারও অনেক ওপরে চলে, সেখানে পরম MACD-তে স্ক্রিন করা মানে বাড়তি ধাপসহ শেয়ারের দামে স্ক্রিন করা, আর এটি প্রতি সপ্তাহে আপনাকে একই দামি নামগুলোই ধরিয়ে দেবে যখন আপনি একটি মোমেন্টাম পদ্ধতি আছে ভেবে নিজেকে বাহবা দিচ্ছেন।',
      },
    },
    {
      q: {
        en: 'The histogram turned down but the stock kept rising. Explain what happened.',
        bn: 'হিস্টোগ্রাম নিচে ঘুরল কিন্তু শেয়ারটি বাড়তেই থাকল। কী হলো ব্যাখ্যা করুন।',
      },
      a: {
        en: 'Nothing went wrong — that is what the histogram does, and anyone surprised by it has misunderstood what they are looking at. The MACD line is the gap between a fast and a slow average of price, which is effectively a smoothed rate of change, so it behaves like a velocity. The signal line is a lagging average of that. The histogram is the difference between the two, which makes it the rate of change of a rate of change — an acceleration. So the histogram turns down the moment a trend stops getting faster, and a trend can stop getting faster while still being extremely healthy. In my worked window this happens explicitly on day one: the stock closed a full taka higher, from forty-seven point six zero to forty-eight point six zero, and the histogram fell from zero point two four zero zero to zero point two one six two. Anyone running a sell-the-histogram-turn rule exited on that bar, one session before the stock printed its high of forty-nine point eight zero. And then on day two the histogram rose again to zero point two five eight one, which is its peak for the window, and this time the turn that followed was real. That is the honest picture: the same signal lied on day one and told the truth on day two, and standing on either day you could not have told which was which. Which is why I treat the histogram as descriptive language and never as a trigger. Saying momentum is decaying and the decay is accelerating, with the sequence zero point two five eight one, zero point two one seven three, zero point zero nine four three, minus zero point zero eight six seven, is a genuinely useful sentence to write in a journal. Saying the histogram turned down so I sold is how you exit on day one and miss the top.',
        bn: 'কিছুই ভুল হয়নি — হিস্টোগ্রাম এটিই করে, আর যিনি এতে অবাক হন তিনি কী দেখছেন তা ভুল বুঝেছেন। MACD লাইন হলো দামের একটি দ্রুত ও একটি ধীর গড়ের ব্যবধান, যা কার্যত একটি মসৃণকৃত পরিবর্তনের হার, তাই এটি বেগের মতো আচরণ করে। সিগন্যাল লাইন তার একটি পিছিয়ে-থাকা গড়। হিস্টোগ্রাম দুটির পার্থক্য, যা একে পরিবর্তনের হারের পরিবর্তনের হার বানায় — একটি ত্বরণ। তাই একটি ট্রেন্ড যখন আর দ্রুততর হওয়া বন্ধ করে ঠিক তখনই হিস্টোগ্রাম নিচে ঘোরে, আর একটি ট্রেন্ড অত্যন্ত সুস্থ থেকেও দ্রুততর হওয়া বন্ধ করতে পারে। আমার উদাহরণের জানালায় এটি প্রথম দিনেই স্পষ্টভাবে ঘটে: শেয়ারটি পুরো এক টাকা উঁচুতে বন্ধ হলো, সাতচল্লিশ দশমিক ছয় শূন্য থেকে আটচল্লিশ দশমিক ছয় শূন্যে, আর হিস্টোগ্রাম শূন্য দশমিক দুই চার শূন্য শূন্য থেকে শূন্য দশমিক দুই এক ছয় দুই-তে নামল। যিনি হিস্টোগ্রাম-মোড়ে-বিক্রি নিয়ম চালান তিনি ঐ বারেই বেরিয়ে গেছেন, শেয়ারটি ঊনপঞ্চাশ দশমিক আট শূন্য সর্বোচ্চ ছাপার এক সেশন আগে। তারপর দ্বিতীয় দিনে হিস্টোগ্রাম আবার উঠল শূন্য দশমিক দুই পাঁচ আট এক-এ, যা জানালার তার শীর্ষ, আর এবার পরের মোড়টি সত্যিকারের ছিল। এটিই সৎ ছবি: একই সংকেত প্রথম দিনে মিথ্যা বলেছে আর দ্বিতীয় দিনে সত্য বলেছে, আর যেকোনো দিনে দাঁড়িয়ে আপনি বলতে পারতেন না কোনটি কোনটি। এ কারণেই আমি হিস্টোগ্রামকে বর্ণনামূলক ভাষা হিসেবে দেখি, কখনো ট্রিগার হিসেবে নয়। মোমেন্টাম ক্ষয় হচ্ছে ও ক্ষয় ত্বরান্বিত হচ্ছে বলা, শূন্য দশমিক দুই পাঁচ আট এক, শূন্য দশমিক দুই এক সাত তিন, শূন্য দশমিক শূন্য নয় চার তিন, ঋণাত্মক শূন্য দশমিক শূন্য আট ছয় সাত — এই ক্রমসহ — জার্নালে লেখার মতো সত্যিই কাজের একটি বাক্য। হিস্টোগ্রাম নিচে ঘুরল তাই বিক্রি করলাম বলা এভাবেই আপনি প্রথম দিনে বেরোন আর শীর্ষ হারান।',
      },
    },
    {
      q: {
        en: 'Your histogram just gave a bearish crossover. Do you sell? Walk me through it.',
        bn: 'আপনার হিস্টোগ্রাম মাত্র একটি বেয়ারিশ ক্রসওভার দিল। আপনি কি বিক্রি করবেন? ধাপে ধাপে বলুন।',
      },
      a: {
        en: 'Not on that alone, no. The first thing I look at is not the crossover, it is the zero line, because that is the slowest and most reliable of the three readings MACD gives me. In the worked case the histogram flips from plus zero point zero nine four three to minus zero point zero eight six seven, so the cross is real, but the MACD line itself is sitting at plus zero point nine four eight two. That is nowhere near zero. The twelve-day average is at forty-seven point seven four five five and the twenty-six day is at forty-six point seven nine seven three, so they are almost a full taka apart and the fast one is still comfortably above the slow one. The trend has not broken. What has broken is the acceleration. So the sheet labels that bar sell — unconfirmed, and the action that follows is trim and stop adding, not exit. Then I do a second thing, which is price the lag rather than complain about it. The high in that window was forty-nine point eight zero on day two and the cross came on day five at forty-six point five zero, so the signal cost six point six three percent of the high and took three sessions to arrive. That number should be in my notes before I take the signal, not discovered afterwards, because a lag I budgeted for is a cost and a lag I discovered is a shock, and shocks are what make people abandon systems halfway through a drawdown. And the third thing is specific to where I trade. On the Dhaka exchange there is no reliable short side on a mid-cap, so a bearish reading is not a trade at all — it is an instruction to reduce, to tighten a stop, or to stay away. If someone shows me a backtest that shorts signal-line crossovers on a Bangladeshi mid-cap, they have backtested a series of trades that could never have been placed.',
        bn: 'কেবল ওটার ওপর নয়, না। আমি প্রথমে ক্রসওভারের দিকে তাকাই না, তাকাই জিরো লাইনের দিকে, কারণ MACD আমাকে যে তিনটি পাঠ দেয় তার মধ্যে ওটিই সবচেয়ে ধীর ও সবচেয়ে নির্ভরযোগ্য। উদাহরণে হিস্টোগ্রাম যোগ শূন্য দশমিক শূন্য নয় চার তিন থেকে বিয়োগ শূন্য দশমিক শূন্য আট ছয় সাত-এ উল্টায়, তাই ক্রসটি সত্যিকারের, কিন্তু MACD লাইনটি নিজে বসে আছে যোগ শূন্য দশমিক নয় চার আট দুই-তে। এটি শূন্যের ধারেকাছেও নয়। বারো দিনের গড় সাতচল্লিশ দশমিক সাত চার পাঁচ পাঁচ-এ আর ছাব্বিশ দিনেরটি ছেচল্লিশ দশমিক সাত নয় সাত তিন-এ, তাই তারা প্রায় পুরো এক টাকা দূরে আর দ্রুতটি এখনো ধীরটির স্বচ্ছন্দভাবে ওপরে। ট্রেন্ড ভাঙেনি। যা ভেঙেছে তা ত্বরণ। তাই শিট ঐ বারকে চিহ্নিত করে সেল — আনকনফার্মড, আর তারপরের কাজ ছাঁটাই ও যোগ করা বন্ধ, প্রস্থান নয়। তারপর আমি দ্বিতীয় একটি কাজ করি, ল্যাগ নিয়ে অভিযোগ না করে তার দাম কষি। ঐ জানালায় সর্বোচ্চ ছিল দ্বিতীয় দিনে ঊনপঞ্চাশ দশমিক আট শূন্য আর ক্রস এসেছে পঞ্চম দিনে ছেচল্লিশ দশমিক পাঁচ শূন্য-তে, তাই সংকেতটির খরচ সর্বোচ্চের ছয় দশমিক ছয় তিন শতাংশ আর আসতে লেগেছে তিন সেশন। ঐ সংখ্যাটি সংকেত নেওয়ার আগেই আমার নোটে থাকা উচিত, পরে আবিষ্কার করা নয়, কারণ যে ল্যাগের জন্য আমি বাজেট রেখেছি তা একটি খরচ আর যে ল্যাগ আমি আবিষ্কার করেছি তা একটি ধাক্কা, আর ধাক্কাই মানুষকে ড্রডাউনের মাঝপথে পদ্ধতি ত্যাগ করায়। আর তৃতীয় বিষয়টি আমি যেখানে ট্রেড করি তার নির্দিষ্ট। ঢাকা এক্সচেঞ্জে মিড-ক্যাপে নির্ভরযোগ্য শর্ট সাইড নেই, তাই একটি বেয়ারিশ পাঠ আদৌ কোনো ট্রেড নয় — এটি কমানোর, স্টপ শক্ত করার, বা দূরে থাকার নির্দেশ। কেউ যদি আমাকে এমন ব্যাকটেস্ট দেখান যা বাংলাদেশি মিড-ক্যাপে সিগন্যাল-লাইন ক্রসওভার শর্ট করে, তিনি এমন একগুচ্ছ ট্রেড ব্যাকটেস্ট করেছেন যা কখনো করাই যেত না।',
      },
    },
    {
      q: {
        en: 'How long does MACD need before its readings are trustworthy, and why does that matter especially in Bangladesh?',
        bn: 'MACD-র পাঠ বিশ্বাসযোগ্য হতে কত সময় লাগে, আর বাংলাদেশে তা বিশেষভাবে কেন গুরুত্বপূর্ণ?',
      },
      a: {
        en: 'Longer than almost anyone allows for, and the reason is that the warm-ups chain rather than overlap. An exponential average never forgets anything — the weight it puts on the seed value decays as one minus alpha to the power of the number of bars, but it never reaches zero. If I set my threshold at one percent residual seed weight, the twelve-day average needs about twenty-eight bars, the twenty-six day average needs about sixty, and the nine-period signal average needs about twenty-one more. But those twenty-one have to be twenty-one bars of MACD that is already clean, because the signal line is an average of the MACD line and not of price. So the MACD line is untrustworthy for about sixty bars and the histogram for about eighty-one, which on the Dhaka exchange at five sessions a week, minus holidays, is roughly three calendar months and four calendar months respectively. Now here is why this is not a technicality in Bangladesh. During the floor-price period, prices sat at an administered level and simply were not permitted to fall. That is a flat stretch of data that is not a market. And because a twenty-six day exponential average reaches back roughly sixty sessions, the damage does not end when the floor is lifted — the indicator keeps carrying that administered flat stretch for about three more months, and the histogram for about four. So a chart that looks perfectly normal, with prices moving freely and an indicator drawing a smooth curve, can be computing that curve from a regulation. The remedy is not cosmetic and there is no clever adjustment. Either you restart the recursion from a clean seed on the day the floor lifts and refuse to publish any reading for sixty sessions, accepting a blackout, or you drop the name from your universe until it has enough clean history. Averaging a regulation is not measurement, and no amount of smoothing turns one into the other.',
        bn: 'প্রায় সবাই যতটা ধরে নেন তার চেয়ে বেশি, আর কারণ হলো ওয়ার্ম-আপগুলো ওভারল্যাপ না করে শৃঙ্খলাবদ্ধ হয়। একটি এক্সপোনেনশিয়াল গড় কখনো কিছু ভোলে না — বীজ মানের ওপর এটি যে ওজন রাখে তা এক বিয়োগ আলফার বার-সংখ্যার ঘাতে ক্ষয় হয়, কিন্তু কখনো শূন্যে পৌঁছায় না। আমি যদি সীমা ধরি এক শতাংশ অবশিষ্ট বীজ-ওজন, তাহলে বারো দিনের গড়ের লাগে প্রায় আটাশ বার, ছাব্বিশ দিনের গড়ের লাগে প্রায় ষাট, আর নয়-পিরিয়ডের সিগন্যাল গড়ের লাগে আরও প্রায় একুশ। কিন্তু ঐ একুশটিকে হতে হবে ইতিমধ্যেই পরিচ্ছন্ন MACD-র একুশ বার, কারণ সিগন্যাল লাইন MACD লাইনের গড়, দামের নয়। তাই MACD লাইন প্রায় ষাট বার অবিশ্বাস্য আর হিস্টোগ্রাম প্রায় একাশি, যা ঢাকা এক্সচেঞ্জে সপ্তাহে পাঁচ সেশনে, ছুটি বাদে, যথাক্রমে মোটামুটি তিন পঞ্জিকা মাস ও চার পঞ্জিকা মাস। এবার কেন এটি বাংলাদেশে কারিগরি খুঁটিনাটি নয়। ফ্লোর-প্রাইসের সময়কালে দাম একটি প্রশাসিত স্তরে বসে ছিল আর নামার অনুমতিই পেত না। ওটি উপাত্তের একটি সমতল অংশ যা বাজার নয়। আর যেহেতু ছাব্বিশ দিনের এক্সপোনেনশিয়াল গড় প্রায় ষাট সেশন পেছনে পৌঁছায়, ক্ষতিটি ফ্লোর ওঠার সঙ্গে শেষ হয় না — সূচকটি ঐ প্রশাসিত সমতল অংশ আরও প্রায় তিন মাস বহন করতে থাকে, আর হিস্টোগ্রাম প্রায় চার মাস। তাই একটি চার্ট যা পুরোপুরি স্বাভাবিক দেখায়, যেখানে দাম মুক্তভাবে চলছে ও সূচক একটি মসৃণ বক্ররেখা আঁকছে, সেটি ঐ বক্ররেখা একটি নিয়ম থেকে গণনা করতে পারে। প্রতিকারটি প্রসাধনী নয় আর কোনো চতুর সমন্বয় নেই। হয় ফ্লোর ওঠার দিনে একটি পরিচ্ছন্ন বীজ থেকে পুনরাবৃত্তি নতুন করে শুরু করুন ও ষাট সেশন কোনো পাঠ প্রকাশ করতে অস্বীকার করুন, একটি ব্ল্যাকআউট মেনে নিয়ে, নয়তো নামটি আপনার বিশ্ব থেকে বাদ দিন যতক্ষণ না তার যথেষ্ট পরিচ্ছন্ন ইতিহাস হয়। একটি নিয়ম গড় করা পরিমাপ নয়, আর কোনো পরিমাণ মসৃণীকরণই একটিকে অন্যটিতে পরিণত করে না।',
      },
    },
    {
      q: {
        en: 'Price fell on the day and your MACD line went up. Is your code broken?',
        bn: 'ঐ দিনে দাম পড়ল আর আপনার MACD লাইন উঠল। আপনার কোড কি ভেঙেছে?',
      },
      a: {
        en: 'No, and this is one of the most useful things to understand about the indicator, because the day it happens is usually the day it matters. In my worked window, day three closed at forty-nine point one zero, which is seventy paisa below the previous session\'s forty-nine point eight zero, and the MACD line rose from one point two three six seven to one point two five zero two, which is in fact its high for the entire window. The reason is purely mechanical. The MACD line is the gap between the twelve-day and the twenty-six day exponential averages, not the price. On that bar the close of forty-nine point one zero was still about two taka thirty-seven above the twenty-six day average of forty-six point seven three, so both averages were still being pulled upward — but the twelve-day one was being pulled upward harder, because its smoothing constant of zero point one five three eight four six is more than twice the twenty-six day constant of zero point zero seven four zero seven four. So the gap widened even though the price narrowed. The lesson I take from this is that the MACD line must never be read as a proxy for price direction. It is a smoothed rate of change of price, and a rate of change can rise on a down day so long as the level is still well above the slow average. The practical consequence is about timing. In this window the price peaks on day two and the MACD line peaks on day three, one bar later, and the histogram peaks on day two alongside the price. Three lines, three different peaks, all in the same six-day window. Anybody who thinks of MACD as a single indicator that either agrees or disagrees with price has not looked closely enough at what each of the three lines is actually computing.',
        bn: 'না, আর সূচকটি সম্পর্কে বোঝার মতো সবচেয়ে কাজের বিষয়গুলোর একটি এটি, কারণ যেদিন এটি ঘটে সেদিনই সাধারণত এটি গুরুত্বপূর্ণ। আমার উদাহরণের জানালায় তৃতীয় দিন বন্ধ হয়েছে ঊনপঞ্চাশ দশমিক এক শূন্য-তে, যা আগের সেশনের ঊনপঞ্চাশ দশমিক আট শূন্য থেকে সত্তর পয়সা নিচে, আর MACD লাইন উঠেছে এক দশমিক দুই তিন ছয় সাত থেকে এক দশমিক দুই পাঁচ শূন্য দুই-তে, যা আসলে পুরো জানালার তার সর্বোচ্চ। কারণটি সম্পূর্ণ যান্ত্রিক। MACD লাইন হলো বারো দিনের ও ছাব্বিশ দিনের এক্সপোনেনশিয়াল গড়ের ব্যবধান, দাম নয়। ঐ বারে ঊনপঞ্চাশ দশমিক এক শূন্য ক্লোজটি তখনো ছেচল্লিশ দশমিক সাত তিনের ছাব্বিশ দিনের গড়ের প্রায় দুই টাকা সাঁইত্রিশ পয়সা ওপরে ছিল, তাই দুটি গড়ই তখনো ওপরের দিকে টানা হচ্ছিল — কিন্তু বারো দিনেরটিকে বেশি জোরে টানা হচ্ছিল, কারণ তার মসৃণীকরণ ধ্রুবক শূন্য দশমিক এক পাঁচ তিন আট চার ছয় ছাব্বিশ দিনের ধ্রুবক শূন্য দশমিক শূন্য সাত চার শূন্য সাত চারের দ্বিগুণেরও বেশি। তাই দাম সংকুচিত হলেও ব্যবধান চওড়া হয়েছে। এ থেকে আমি যে শিক্ষা নিই তা হলো MACD লাইনকে কখনো দামের দিকের বিকল্প হিসেবে পড়া চলবে না। এটি দামের একটি মসৃণকৃত পরিবর্তনের হার, আর স্তরটি ধীর গড়ের যথেষ্ট ওপরে থাকলে একটি পতনের দিনেও পরিবর্তনের হার বাড়তে পারে। ব্যবহারিক পরিণতিটি সময় নিয়ে। এই জানালায় দাম দ্বিতীয় দিনে শীর্ষে ওঠে আর MACD লাইন তৃতীয় দিনে, এক বার পরে, আর হিস্টোগ্রাম দামের সঙ্গেই দ্বিতীয় দিনে শীর্ষে ওঠে। তিনটি রেখা, তিনটি ভিন্ন শীর্ষ, সবই একই ছয়-দিনের জানালায়। যিনি MACD-কে একটি একক সূচক ভাবেন যা দামের সঙ্গে হয় একমত হয় নয় দ্বিমত, তিনি তিনটি রেখার প্রতিটি আসলে কী গণনা করছে তা যথেষ্ট মনোযোগ দিয়ে দেখেননি।',
      },
    },
    {
      q: {
        en: 'Would you optimise the 12, 26 and 9 parameters for the Dhaka market?',
        bn: 'ঢাকার বাজারের জন্য আপনি কি ১২, ২৬ ও ৯ প্যারামিটার অপটিমাইজ করবেন?',
      },
      a: {
        en: 'No, but I would absolutely test them, and the distinction between those two things is the whole answer. The defaults come from Gerald Appel in the nineteen seventies, and the rationale usually given is that twelve and twenty-six corresponded to about two weeks and about one month when the trading week ran six days. Bangladesh trades five sessions, Sunday to Thursday, and loses a substantial number of them to public holidays that no fixed period accounts for, so the calendar justification simply does not survive the translation. That is a good reason not to attach any significance to the specific numbers. It is not a good reason to go searching for better ones. Parameter search on a short and noisy price history finds the numbers that fit the noise, and on the Dhaka exchange the histories are short, the free floats are thin, and a meaningful stretch of the recent past is contaminated by administered prices — which is about the worst possible input to an optimiser. What I do instead is robustness testing. Every conclusion I intend to act on, I re-run at ten twenty-one seven and at fifteen thirty ten alongside twelve twenty-six nine. If the conclusion holds across all three, I believe it is telling me something about the stock. If it exists at twelve twenty-six nine and vanishes at the other two, I have found an artefact of a nineteen-seventies American calendar and nothing more, and I throw it away. The same discipline applies to the input series, incidentally: on a thin counter where the close might be set by four trades, I will test the typical price, high plus low plus close over three, against the close, and if my signal only survives on one of them then I never had a signal.',
        bn: 'না, কিন্তু আমি অবশ্যই এগুলো পরীক্ষা করব, আর ঐ দুটির মধ্যেকার পার্থক্যই পুরো উত্তর। ডিফল্টগুলো এসেছে উনিশশো সত্তরের দশকে জেরাল্ড অ্যাপেলের কাছ থেকে, আর সাধারণত যে যুক্তি দেওয়া হয় তা হলো ট্রেডিং সপ্তাহ যখন ছয় দিনের ছিল তখন বারো ও ছাব্বিশ মোটামুটি দুই সপ্তাহ ও এক মাসের সমান ছিল। বাংলাদেশে রবিবার থেকে বৃহস্পতিবার পাঁচটি সেশন হয়, আর উল্লেখযোগ্যসংখ্যক সেশন হারায় সরকারি ছুটিতে যা কোনো নির্দিষ্ট পিরিয়ড হিসেবে ধরে না, তাই পঞ্জিকা-ভিত্তিক যুক্তিটি অনুবাদে টেকেই না। এটি নির্দিষ্ট সংখ্যাগুলোকে কোনো গুরুত্ব না দেওয়ার ভালো কারণ। এটি ভালো সংখ্যা খুঁজতে বেরোনোর ভালো কারণ নয়। একটি সংক্ষিপ্ত ও কোলাহলপূর্ণ দামের ইতিহাসে প্যারামিটার খোঁজা সেই সংখ্যাগুলোই পায় যা কোলাহলের সঙ্গে মেলে, আর ঢাকা এক্সচেঞ্জে ইতিহাস সংক্ষিপ্ত, ফ্রি ফ্লোট পাতলা, আর সাম্প্রতিক অতীতের একটি উল্লেখযোগ্য অংশ প্রশাসিত দামে দূষিত — যা একটি অপটিমাইজারের জন্য সম্ভাব্য সবচেয়ে খারাপ ইনপুট। তার বদলে আমি যা করি তা দৃঢ়তা-পরীক্ষা। আমি যে উপসংহারে কাজ করব তার প্রতিটি আমি বারো ছাব্বিশ নয়-এর পাশাপাশি দশ একুশ সাত ও পনেরো ত্রিশ দশ-এ আবার চালাই। উপসংহারটি তিনটিতেই টিকলে আমি বিশ্বাস করি এটি আমাকে শেয়ারটি সম্পর্কে কিছু বলছে। এটি বারো ছাব্বিশ নয়-এ থেকে বাকি দুটিতে উবে গেলে আমি উনিশশো সত্তরের দশকের একটি আমেরিকান পঞ্জিকার কৃত্রিম বস্তু পেয়েছি, এর বেশি কিছু নয়, আর আমি তা ফেলে দিই। প্রসঙ্গত, একই শৃঙ্খলা ইনপুট সিরিজেও প্রযোজ্য: যে পাতলা কাউন্টারে ক্লোজ চারটি ট্রেডে নির্ধারিত হতে পারে, সেখানে আমি ক্লোজের বিপরীতে টিপিক্যাল প্রাইস, হাই যোগ লো যোগ ক্লোজ ভাগ তিন, পরীক্ষা করব, আর আমার সংকেত যদি কেবল একটিতেই টেকে তাহলে আমার কখনো কোনো সংকেতই ছিল না।',
      },
    },
  ],

  quiz: [
    {
      q: {
        en: 'The MACD line is best described as:',
        bn: 'MACD লাইনের সর্বোত্তম বর্ণনা:',
      },
      options: {
        en: [
          'A bounded momentum oscillator like RSI',
          'The difference between a fast and a slow EMA of price',
          'A 9-period EMA of the closing price',
          'The ratio of volume to average volume',
        ],
        bn: [
          'RSI-র মতো একটি সীমাবদ্ধ মোমেন্টাম অসিলেটর',
          'দামের একটি দ্রুত ও একটি ধীর EMA-র পার্থক্য',
          'ক্লোজিং দামের একটি ৯-পিরিয়ড EMA',
          'গড় ভলিউমের সঙ্গে ভলিউমের অনুপাত',
        ],
      },
      answer: 1,
    },
    {
      q: {
        en: 'With the standard parameters, the fast smoothing constant $\\alpha_{12}$ equals:',
        bn: 'প্রমিত প্যারামিটারে দ্রুত মসৃণীকরণ ধ্রুবক $\\alpha_{12}$ সমান:',
      },
      options: {
        en: ['0.083333', '0.153846', '0.074074', '0.200000'],
        bn: ['০.০৮৩৩৩৩', '০.১৫৩৮৪৬', '০.০৭৪০৭৪', '০.২০০০০০'],
      },
      answer: 1,
    },
    {
      q: {
        en: 'The MACD histogram is, in derivative terms:',
        bn: 'অন্তরকলজের ভাষায় MACD হিস্টোগ্রাম হলো:',
      },
      options: {
        en: [
          'The price level itself',
          'A first derivative of price',
          'A second derivative of price — an acceleration',
          'A cumulative sum of price changes',
        ],
        bn: [
          'দামের স্তর নিজেই',
          'দামের একটি প্রথম অন্তরকলজ',
          'দামের একটি দ্বিতীয় অন্তরকলজ — একটি ত্বরণ',
          'দাম-পরিবর্তনের একটি ক্রমযোগ',
        ],
      },
      answer: 2,
    },
    {
      q: {
        en: 'On D5 the histogram is −0.0867 while the MACD line is +0.9482. The correct classification is:',
        bn: 'D5-এ হিস্টোগ্রাম −০.০৮৬৭ যখন MACD লাইন +০.৯৪৮২। সঠিক শ্রেণিবিভাজন:',
      },
      options: {
        en: [
          'SELL — zero confirmed',
          'SELL — unconfirmed',
          'BUY — zero confirmed',
          'No signal at all',
        ],
        bn: [
          'SELL — zero confirmed',
          'SELL — unconfirmed',
          'BUY — zero confirmed',
          'কোনো সংকেতই নয়',
        ],
      },
      answer: 1,
    },
    {
      q: {
        en: 'The give-back from the 49.80 high to the 46.50 signal-line cross is:',
        bn: '৪৯.৮০ সর্বোচ্চ থেকে ৪৬.৫০ সিগন্যাল-লাইন ক্রস পর্যন্ত ছাড়:',
      },
      options: {
        en: ['3.30%', '6.63%', '7.10%', '10.00%'],
        bn: ['৩.৩০%', '৬.৬৩%', '৭.১০%', '১০.০০%'],
      },
      answer: 1,
    },
    {
      q: {
        en: 'The signal line is computed as a 9-period EMA of:',
        bn: 'সিগন্যাল লাইন গণনা করা হয় কীসের ৯-পিরিয়ড EMA হিসেবে:',
      },
      options: {
        en: [
          'The closing price',
          'The MACD line',
          'The histogram',
          'The 26-day EMA',
        ],
        bn: [
          'ক্লোজিং দাম',
          'MACD লাইন',
          'হিস্টোগ্রাম',
          '২৬ দিনের EMA',
        ],
      },
      answer: 1,
    },
    {
      q: {
        en: 'Stock B: MACD 9.50 on an EMA26 of 940. Stock C: MACD 0.28 on an EMA26 of 12.30. Which has more momentum?',
        bn: 'শেয়ার B: ৯৪০ EMA26-এ MACD ৯.৫০। শেয়ার C: ১২.৩০ EMA26-এ MACD ০.২৮। কার মোমেন্টাম বেশি?',
      },
      options: {
        en: [
          'Stock B — its MACD is 34 times larger',
          'Stock C — 2.2764% against 1.0106%',
          'They are equal once annualised',
          'It cannot be determined from MACD at all',
        ],
        bn: [
          'শেয়ার B — এর MACD ৩৪ গুণ বড়',
          'শেয়ার C — ২.২৭৬৪% বনাম ১.০১০৬%',
          'বার্ষিকীকৃত করলে দুটিই সমান',
          'MACD থেকে আদৌ নির্ধারণ করা যায় না',
        ],
      },
      answer: 1,
    },
    {
      q: {
        en: 'Roughly how many bars must pass before the MACD histogram is free of seed contamination?',
        bn: 'MACD হিস্টোগ্রাম বীজ-দূষণমুক্ত হতে মোটামুটি কত বার লাগে?',
      },
      options: {
        en: ['9 bars', '26 bars', '60 bars', '81 bars'],
        bn: ['৯ বার', '২৬ বার', '৬০ বার', '৮১ বার'],
      },
      answer: 3,
    },
    {
      q: {
        en: 'A flat floor-price window contaminates a 26-day EMA for approximately how long after the floor lifts?',
        bn: 'একটি সমতল ফ্লোর-প্রাইস জানালা ফ্লোর ওঠার পর ২৬ দিনের EMA-কে আনুমানিক কতদিন দূষিত করে?',
      },
      options: {
        en: [
          'It stops immediately when the floor lifts',
          'About 5 sessions',
          'About 60 sessions — roughly three months',
          'Permanently, with no remedy',
        ],
        bn: [
          'ফ্লোর ওঠার সঙ্গে সঙ্গেই থেমে যায়',
          'প্রায় ৫ সেশন',
          'প্রায় ৬০ সেশন — মোটামুটি তিন মাস',
          'স্থায়ীভাবে, কোনো প্রতিকার ছাড়াই',
        ],
      },
      answer: 2,
    },
    {
      q: {
        en: 'On D1 the stock rose from 47.60 to 48.60 and the histogram fell from 0.2400 to 0.2162. This means:',
        bn: 'D1-এ শেয়ারটি ৪৭.৬০ থেকে ৪৮.৬০-এ উঠেছে আর হিস্টোগ্রাম ০.২৪০০ থেকে ০.২১৬২-তে নেমেছে। এর অর্থ:',
      },
      options: {
        en: [
          'The calculation is wrong — the histogram must rise on an up day',
          'The uptrend has reversed and one should sell',
          'The trend is still rising but decelerating — the histogram is an acceleration',
          'The signal line has crossed the MACD line',
        ],
        bn: [
          'গণনা ভুল — ঊর্ধ্বমুখী দিনে হিস্টোগ্রাম বাড়তেই হবে',
          'আপট্রেন্ড ঘুরে গেছে ও বিক্রি করা উচিত',
          'ট্রেন্ড এখনো বাড়ছে কিন্তু মন্থর হচ্ছে — হিস্টোগ্রাম একটি ত্বরণ',
          'সিগন্যাল লাইন MACD লাইনকে অতিক্রম করেছে',
        ],
      },
      answer: 2,
    },
  ],
};
