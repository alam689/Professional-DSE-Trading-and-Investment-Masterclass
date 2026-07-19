/**
 * Chapter 28 — Candlestick Reversal Patterns
 * Part III, Technical Analysis.
 */

export default {
  n: 28,
  tools: [],

  excelSheet: {
    filename: 'ch28-reversal-pattern-detector.xlsx',
    sheetName: 'Pattern Detector',
    cells: [
      { cell: 'A1', v: '— 5-Day OHLCV Window (Day 1 = oldest) —' },
      { cell: 'A2', v: 'Day' }, { cell: 'B2', v: 'Open' }, { cell: 'C2', v: 'High' },
      { cell: 'D2', v: 'Low' }, { cell: 'E2', v: 'Close' }, { cell: 'F2', v: 'Volume' },
      { cell: 'G2', v: 'Body' }, { cell: 'H2', v: 'Range' }, { cell: 'I2', v: 'Body%' }, { cell: 'J2', v: 'Dir' },

      { cell: 'A3', v: 1 }, { cell: 'B3', v: 52.40 }, { cell: 'C3', v: 52.60 }, { cell: 'D3', v: 50.80 }, { cell: 'E3', v: 51.00 }, { cell: 'F3', v: 1200000 },
      { cell: 'G3', f: 'E3-B3' }, { cell: 'H3', f: 'C3-D3' }, { cell: 'I3', f: 'ABS(G3)/H3*100' }, { cell: 'J3', f: 'IF(G3>0,1,IF(G3<0,-1,0))' },

      { cell: 'A4', v: 2 }, { cell: 'B4', v: 50.20 }, { cell: 'C4', v: 50.60 }, { cell: 'D4', v: 49.10 }, { cell: 'E4', v: 50.00 }, { cell: 'F4', v: 900000 },
      { cell: 'G4', f: 'E4-B4' }, { cell: 'H4', f: 'C4-D4' }, { cell: 'I4', f: 'ABS(G4)/H4*100' }, { cell: 'J4', f: 'IF(G4>0,1,IF(G4<0,-1,0))' },

      { cell: 'A5', v: 3 }, { cell: 'B5', v: 50.30 }, { cell: 'C5', v: 52.10 }, { cell: 'D5', v: 50.10 }, { cell: 'E5', v: 51.95 }, { cell: 'F5', v: 2100000 },
      { cell: 'G5', f: 'E5-B5' }, { cell: 'H5', f: 'C5-D5' }, { cell: 'I5', f: 'ABS(G5)/H5*100' }, { cell: 'J5', f: 'IF(G5>0,1,IF(G5<0,-1,0))' },

      { cell: 'A6', v: 4 }, { cell: 'B6', v: 52.00 }, { cell: 'C6', v: 53.40 }, { cell: 'D6', v: 51.80 }, { cell: 'E6', v: 53.10 }, { cell: 'F6', v: 2400000 },
      { cell: 'G6', f: 'E6-B6' }, { cell: 'H6', f: 'C6-D6' }, { cell: 'I6', f: 'ABS(G6)/H6*100' }, { cell: 'J6', f: 'IF(G6>0,1,IF(G6<0,-1,0))' },

      { cell: 'A7', v: 5 }, { cell: 'B7', v: 53.20 }, { cell: 'C7', v: 54.00 }, { cell: 'D7', v: 52.70 }, { cell: 'E7', v: 53.80 }, { cell: 'F7', v: 1900000 },
      { cell: 'G7', f: 'E7-B7' }, { cell: 'H7', f: 'C7-D7' }, { cell: 'I7', f: 'ABS(G7)/H7*100' }, { cell: 'J7', f: 'IF(G7>0,1,IF(G7<0,-1,0))' },

      { cell: 'A9', v: '— Context: trend, location, liquidity —' },
      { cell: 'A10', v: 'Close 10 bars before Day 1' }, { cell: 'B10', v: 57.80 },
      { cell: 'A11', v: '20-day Average Volume' }, { cell: 'B11', v: 1150000 },
      { cell: 'A12', v: 'Support level being tested' }, { cell: 'B12', v: 49.00 },
      { cell: 'A13', v: 'Prior downtrend OK' }, { cell: 'B13', f: 'IF(E3<B10,1,0)' },
      { cell: 'A14', v: 'Location OK (star low within 1% of support)' }, { cell: 'B14', f: 'IF(ABS(D4-B12)/B12<=0.01,1,0)' },

      { cell: 'A16', v: '— Pattern Tests (1 = geometric condition met) —' },
      { cell: 'A17', v: 'Bullish Engulfing (D2 to D3)' }, { cell: 'B17', f: 'IF(AND(J4=-1,J5=1,B5<E4,E5>B4),1,0)' },
      { cell: 'A18', v: 'Bearish Engulfing (D2 to D3)' }, { cell: 'B18', f: 'IF(AND(J4=1,J5=-1,B5>E4,E5<B4),1,0)' },
      { cell: 'A19', v: 'Piercing Line (D2 to D3)' }, { cell: 'B19', f: 'IF(AND(J4=-1,J5=1,B5<D4,E5>(B4+E4)/2,E5<B4),1,0)' },
      { cell: 'A20', v: 'Dark Cloud Cover (D2 to D3)' }, { cell: 'B20', f: 'IF(AND(J4=1,J5=-1,B5>C4,E5<(B4+E4)/2,E5>B4),1,0)' },
      { cell: 'A21', v: 'Morning Star (D1-D2-D3)' }, { cell: 'B21', f: 'IF(AND(J3=-1,I3>=60,I4<=30,MAX(B4,E4)<E3,MIN(B5,E5)>MAX(B4,E4),J5=1,I5>=60,E5>(B3+E3)/2),1,0)' },
      { cell: 'A22', v: 'Evening Star (D1-D2-D3)' }, { cell: 'B22', f: 'IF(AND(J3=1,I3>=60,I4<=30,MIN(B4,E4)>E3,MAX(B5,E5)<MIN(B4,E4),J5=-1,I5>=60,E5<(B3+E3)/2),1,0)' },
      { cell: 'A23', v: 'Doji-Star variant (middle body% < 5)' }, { cell: 'B23', f: 'IF(AND(B21+B22>0,I4<5),1,0)' },
      { cell: 'A24', v: 'Abandoned Baby Bottom (TRUE gaps both sides)' }, { cell: 'B24', f: 'IF(AND(B21=1,C4<D3,C4<D5),1,0)' },
      { cell: 'A25', v: 'Tweezer Bottom (D2/D3 lows within 0.1%)' }, { cell: 'B25', f: 'IF(AND(ABS(D4-D5)/D4<=0.001,J4=-1,J5=1),1,0)' },
      { cell: 'A26', v: 'Harami (D2 body inside D1 body, opposite colour)' }, { cell: 'B26', f: 'IF(AND(J3<>0,J4<>0,J3<>J4,MAX(B4,E4)<=MAX(B3,E3),MIN(B4,E4)>=MIN(B3,E3)),1,0)' },
      { cell: 'A27', v: 'Harami Cross (harami + middle body% < 5)' }, { cell: 'B27', f: 'IF(AND(B26=1,I4<5),1,0)' },
      { cell: 'A28', v: 'Three White Soldiers (D3-D4-D5)' }, { cell: 'B28', f: 'IF(AND(J5=1,J6=1,J7=1,I5>=60,I6>=60,I7>=60,B6>B5,B6<E5,B7>B6,B7<E6,E6>E5,E7>E6),1,0)' },
      { cell: 'A29', v: 'Three Black Crows (D3-D4-D5)' }, { cell: 'B29', f: 'IF(AND(J5=-1,J6=-1,J7=-1,I5>=60,I6>=60,I7>=60,B6<B5,B6>E5,B7<B6,B7>E6,E6<E5,E7<E6),1,0)' },

      { cell: 'A31', v: '— Confirmation & Volume —' },
      { cell: 'A32', v: 'Pattern-day close (Day 3)' }, { cell: 'B32', f: 'E5' },
      { cell: 'A33', v: 'Confirmation close (Day 4)' }, { cell: 'B33', f: 'E6' },
      { cell: 'A34', v: 'CONFIRMED (bullish)' }, { cell: 'B34', f: 'IF(AND(B21+B17+B19+B25>0,B33>B32),1,0)' },
      { cell: 'A35', v: 'Volume expansion (x avg)' }, { cell: 'B35', f: 'F5/B11' },
      { cell: 'A36', v: 'Volume OK (>= 1.5x)' }, { cell: 'B36', f: 'IF(B35>=1.5,1,0)' },

      { cell: 'A38', v: 'PATTERNS DETECTED' }, { cell: 'B38', f: 'B17+B18+B19+B20+B21+B22+B24+B25+B26+B28+B29' },
      { cell: 'A39', v: 'SETUP SCORE (0-4)' }, { cell: 'B39', f: 'IF(B38>0,1,0)+B14+B36+B34' },

      { cell: 'A41', v: 'VERDICT' },
      {
        cell: 'B41',
        f: 'IF(B13=0,"No prior trend - nothing to reverse",IF(B38=0,"No named pattern - stand aside",IF(B39>=4,"Full setup: pattern at location, volume expansion, confirmed",IF(B34=0,"Hypothesis only - wait for the confirming close",IF(B39=3,"One leg missing - half size or skip","Weak - skip")))))',
      },

      { cell: 'A43', v: '— Trade Arithmetic —' },
      { cell: 'A44', v: 'Entry (confirmation close)' }, { cell: 'B44', f: 'B33' },
      { cell: 'A45', v: 'Stop (star low less 0.20 buffer)' }, { cell: 'B45', f: 'D4-0.2' },
      { cell: 'A46', v: 'Risk per share' }, { cell: 'B46', f: 'B44-B45' },
      { cell: 'A47', v: 'Risk (%)' }, { cell: 'B47', f: 'B46/B44*100' },
      { cell: 'A48', v: 'Target (prior swing high)' }, { cell: 'B48', v: 58.50 },
      { cell: 'A49', v: 'Reward:Risk' }, { cell: 'B49', f: '(B48-B44)/B46' },
      { cell: 'A50', v: 'BREAK-EVEN WIN RATE (%)' }, { cell: 'B50', f: '1/(1+B49)*100' },
    ],
  },

  objectives: {
    en: [
      'State the exact geometric condition for each named multi-candle reversal pattern, in numbers rather than adjectives.',
      'Treat every reversal pattern as a hypothesis and apply the confirming-close test before acting on it.',
      'Explain why location and volume expansion carry the edge and the shape carries almost none.',
      'Convert a detected pattern into an entry, a stop, a reward-to-risk ratio, and the break-even win rate it demands.',
      'Explain how DSE gaps, circuit limits, and the absence of a short side alter or invalidate each pattern.',
    ],
    bn: [
      'প্রতিটি নামকরা মাল্টি-ক্যান্ডেল রিভার্সাল প্যাটার্নের সঠিক জ্যামিতিক শর্ত বিশেষণ নয়, সংখ্যায় বলা।',
      'প্রতিটি রিভার্সাল প্যাটার্নকে একটি অনুমান হিসেবে ধরা এবং কাজে নামার আগে নিশ্চিতকারী ক্লোজের পরীক্ষা প্রয়োগ করা।',
      'কেন প্রান্ত (edge) অবস্থান ও ভলিউম সম্প্রসারণে থাকে আর আকৃতিতে প্রায় কিছুই থাকে না তা ব্যাখ্যা করা।',
      'একটি শনাক্ত প্যাটার্নকে এন্ট্রি, স্টপ, রিওয়ার্ড-টু-রিস্ক অনুপাত ও তার দাবি করা ব্রেক-ইভেন উইন রেটে রূপান্তরিত করা।',
      'ডিএসই-র গ্যাপ, সার্কিট সীমা ও শর্ট সাইডের অনুপস্থিতি কীভাবে প্রতিটি প্যাটার্ন বদলে দেয় বা বাতিল করে তা ব্যাখ্যা করা।',
    ],
  },

  blocks: {
    theory: {
      en: `Chapter 27 dismantled a single candle: open, high, low, close, and the two derived quantities that matter — **body percentage** $|C-O|/(H-L)$ and the two shadow lengths. This chapter puts candles in sequence. Nothing new is measured; what changes is that a *relationship between consecutive candles* is given a name and, in most textbooks, an unearned reputation.

### A reversal pattern is a hypothesis, not a signal

Every pattern in this chapter says the same thing in a different geometry: **over the last two or three sessions, the side that had been winning stopped winning.** That is a statement about the recent past. It is not a statement about tomorrow.

The correct grammar is conditional. A bullish engulfing at the close of Tuesday says: *if* the sellers who controlled the last two weeks have genuinely been displaced, *then* Wednesday should not close below Tuesday's close. Wednesday's close is the test. **A pattern that is never tested is never a signal — it is a shape you noticed.**

This is the single discipline the chapter installs, and it costs you something real, which we will quantify in §28.5: waiting for confirmation improves your hit rate and simultaneously worsens your reward-to-risk, because the stop stays where it was while the entry moves against you.

### The four conditions, in order of importance

A named pattern has four requirements, and they are emphatically *not* equally weighted:

| # | Condition | Where the edge is |
|---|---|---|
| 1 | **Prior trend** | Necessary. A reversal pattern with nothing to reverse is noise. |
| 2 | **Location** | Most of the edge. At tested support/resistance, a major moving average, a Fibonacci retracement, a round number. |
| 3 | **Volume expansion** | Much of the rest. The pattern day should trade at least ~1.5× its 20-day average. |
| 4 | **Geometry** | Least. It is how you *name* the event, not why it works. |

Beginners invert this list. They memorise the shapes and ignore the context, which is exactly backwards. **An engulfing candle in the middle of a range is a coincidence. The identical engulfing candle at a support shelf that has held three times, on twice the average volume, is a hypothesis worth testing.** Same geometry, different information.

### Two-candle patterns

**Bullish engulfing.** Prior downtrend. Candle 1 is red. Candle 2 is green, opens *below* candle 1's close and closes *above* candle 1's open. The second body fully swallows the first. What it means: sellers opened the session in control and lost it outright within one session. The transfer is visible and complete.

**Bearish engulfing** is the mirror: prior uptrend, green candle followed by a green-swallowing red body.

Insist on bodies, not ranges. Some texts require the shadows to be engulfed as well; that is stricter and produces perhaps a fifth as many detections. Pick one definition and never quietly loosen it after a losing trade.

**Piercing line.** Prior downtrend. Candle 1 red. Candle 2 opens **below candle 1's low**, then closes back **above the midpoint of candle 1's body** but below its open:

$$C_2 > \\frac{O_1 + C_1}{2} \\quad \\text{and} \\quad C_2 < O_1 \\quad \\text{and} \\quad O_2 < L_1$$

**Dark cloud cover** is the mirror at a top: candle 2 opens above candle 1's high and closes below the midpoint of candle 1's body.

**The 50% rule is the whole pattern.** Recovering 30% of the prior body is a failed bounce; recovering 70% is nearly an engulfing. The midpoint is an arbitrary but *fixed* threshold, and its value is that it is fixed. A rule you can move is not a rule.

### Three-candle patterns

**Morning star.** Prior downtrend. Candle 1 is a long red body (say body% ≥ 60). Candle 2 is a small body (body% ≤ 30) whose *entire body* sits below candle 1's close — a gap in the bodies. Candle 3 is a long green body that gaps up from candle 2's body and closes **above the midpoint of candle 1's body.**

The narrative is three sessions long and unusually legible: heavy selling, then a session in which neither side could move price, then buyers taking back most of what was lost. **The middle candle is the pattern.** It is where conviction ran out.

**Evening star** is the mirror at a top. **Doji star** variants replace the middle candle with a true doji (body% under ~5). The doji is a stronger version of the same statement — not a different pattern — and rarer, which is precisely why the marketing around it is louder.

**Three white soldiers.** Three consecutive long green bodies, each opening *within the prior body* and closing above the prior close, with no long upper shadows. **Three black crows** is the mirror. These are not really reversal patterns; they are *evidence a reversal already happened*. By the third candle you are buying the third day of a move. Require the opens to fall inside the prior body — that is what distinguishes an orderly advance from a gap-driven melt-up, and it is the condition most retail screeners quietly drop.

**Abandoned baby.** A morning or evening star in which both gaps are **true gaps** — candle 2's entire range, shadows included, sits clear of candle 1's and candle 3's ranges. It is genuinely rare on any liquid instrument, and on the DSE it is usually an artefact rather than a pattern. More on that below.

### Inside patterns

**Harami.** Candle 2's body sits entirely inside candle 1's body, and the two are opposite colours. Not a transfer of control — a *loss* of momentum. The trend did not reverse; it stopped. **Harami cross** is the same with candle 2 a doji.

Harami deserves a lower expected weight than engulfing. Engulfing shows one side beaten; harami shows one side merely tired. Tired trends resume all the time.

### Tweezers

**Tweezer bottom**: two adjacent candles with essentially identical lows (within, say, 0.1%) after a downtrend, first red, second green. **Tweezer top** is the mirror on highs. The claim is that the market probed the same price twice and was rejected twice.

Tweezers are the pattern most vulnerable to definitional drift. "Essentially identical" must be a number before you use it, and on a BDT 50 stock with a tick size of BDT 0.10 the tolerance is nearly one tick wide, which means tweezers occur far more often by chance than the literature implies.

### On "reliability percentages"

You will encounter tables claiming a bullish engulfing is "63% reliable" or a morning star "78% reliable."

**Treat any such figure as a marketing artefact unless it states four things: the market, the timeframe, the exact geometric thresholds, and the confirmation and exit rules.** Reliability is not a property of a shape. It is a property of a *complete trading rule* applied to a *specific instrument set*. Change the body-percentage threshold from 60 to 50 and the detection count and hit rate both move. Change "success" from "closed higher the next day" to "reached 2R before 1R" and the number changes again, usually downward and sharply.

Chapter 25's architecture applies here in a different domain: **a finding that can be restated to suit the conclusion is not a finding.** Fix your thresholds in code before you look at outcomes, and measure your own rules on your own market. Anything else is reading someone's backtest of the S&P 500 in the 1980s and trading Bangladeshi mid-caps with it.

### What the DSE does to all of this

Three structural facts break patterns imported from US equity textbooks.

**1. Gaps.** Star patterns and abandoned babies depend on gaps meaning something — an overnight repricing against an order book that was continuously liquid. On thin DSE names a "gap" often means nobody traded at the intervening prices, not that opinion shifted violently. Chapter 2's ADTV and relative-spread screens are the filter: **below roughly BDT 50 lakh a day, treat every gap as an artefact of absent liquidity until proven otherwise.** Abandoned babies on illiquid counters are almost always this.

**2. Circuit limits.** The daily price band truncates bodies. A bullish engulfing that *should* have closed 12% above the prior open closes at the limit instead, and the geometry silently fails the test. The opposite error is worse: a candle that is at the limit is not a candle with a known close — it is a candle with an *unfilled* order book. **A limit-locked bar is missing data wearing the costume of a data point.**

**3. There is no short side.** The DSE has no retail short-selling mechanism. Every bearish reversal pattern in this chapter — evening star, dark cloud cover, bearish engulfing, three black crows, tweezer top — is therefore **an exit signal and a stop-tightening signal only.** This is not a limitation to lament; it is a simplification. It halves the number of decisions and removes the most expensive way to be wrong.

Chapter 29 takes up continuation patterns, where the hypothesis runs the other way: the trend is intact and the pause is the setup.`,
      bn: `অধ্যায় ২৭ একটি একক ক্যান্ডেল খুলে দেখিয়েছে: ওপেন, হাই, লো, ক্লোজ, এবং যে দুটি উদ্ভূত রাশি গুরুত্বপূর্ণ — **বডি শতাংশ** $|C-O|/(H-L)$ এবং দুটি শ্যাডোর দৈর্ঘ্য। এই অধ্যায় ক্যান্ডেলগুলোকে ক্রমে বসায়। নতুন কিছু মাপা হয় না; যা বদলায় তা হলো *পরপর ক্যান্ডেলের মধ্যেকার সম্পর্ক*-কে একটি নাম দেওয়া হয় এবং অধিকাংশ বইয়ে একটি অনর্জিত খ্যাতিও।

### রিভার্সাল প্যাটার্ন একটি অনুমান, সংকেত নয়

এই অধ্যায়ের প্রতিটি প্যাটার্ন ভিন্ন জ্যামিতিতে একই কথা বলে: **গত দুই বা তিন সেশনে যে পক্ষ জিতছিল, সে জেতা বন্ধ করেছে।** এটি সাম্প্রতিক অতীত সম্পর্কে একটি বক্তব্য। আগামীকাল সম্পর্কে নয়।

সঠিক ব্যাকরণ শর্তসাপেক্ষ। মঙ্গলবারের ক্লোজে একটি বুলিশ এনগাল্ফিং বলে: *যদি* গত দুই সপ্তাহ নিয়ন্ত্রণে থাকা বিক্রেতারা সত্যিই সরে গিয়ে থাকেন, *তবে* বুধবার মঙ্গলবারের ক্লোজের নিচে বন্ধ হওয়া উচিত নয়। বুধবারের ক্লোজই পরীক্ষা। **যে প্যাটার্ন কখনো পরীক্ষিত হয় না তা কখনো সংকেত নয় — সেটি আপনার চোখে পড়া একটি আকৃতি।**

এটিই একমাত্র শৃঙ্খলা যা অধ্যায়টি বসায়, আর এর একটি প্রকৃত মূল্য আছে যা §২৮.৫-এ পরিমাপ করা হবে: নিশ্চিতকরণের জন্য অপেক্ষা আপনার হিট রেট বাড়ায় এবং একই সঙ্গে রিওয়ার্ড-টু-রিস্ক খারাপ করে, কারণ স্টপ যেখানে ছিল সেখানেই থাকে আর এন্ট্রি আপনার বিপক্ষে সরে যায়।

### চারটি শর্ত, গুরুত্বের ক্রমে

একটি নামকরা প্যাটার্নের চারটি শর্ত আছে, আর সেগুলো মোটেই সমান ওজনের নয়:

| # | শর্ত | প্রান্ত কোথায় |
|---|---|---|
| ১ | **পূর্ববর্তী ট্রেন্ড** | আবশ্যক। যার উল্টানোর কিছু নেই সেই রিভার্সাল প্যাটার্ন কেবল নয়েজ। |
| ২ | **অবস্থান** | প্রান্তের বেশিরভাগ। পরীক্ষিত সাপোর্ট/রেজিস্ট্যান্সে, বড় মুভিং অ্যাভারেজে, ফিবোনাচ্চি রিট্রেসমেন্টে, গোল সংখ্যায়। |
| ৩ | **ভলিউম সম্প্রসারণ** | বাকিটার বেশিরভাগ। প্যাটার্নের দিনে অন্তত ~১.৫× ২০-দিনের গড় লেনদেন হওয়া উচিত। |
| ৪ | **জ্যামিতি** | সবচেয়ে কম। এটি ঘটনাটির *নামকরণ*, কেন কাজ করে তা নয়। |

নতুনরা এই তালিকা উল্টে ফেলেন। তাঁরা আকৃতি মুখস্থ করেন আর প্রেক্ষাপট উপেক্ষা করেন, যা ঠিক বিপরীত। **রেঞ্জের মাঝখানে একটি এনগাল্ফিং ক্যান্ডেল একটি কাকতালীয় ঘটনা। তিনবার ধরে রাখা একটি সাপোর্ট শেলফে, গড়ের দ্বিগুণ ভলিউমে, হুবহু একই এনগাল্ফিং ক্যান্ডেল পরীক্ষা করার মতো একটি অনুমান।** একই জ্যামিতি, ভিন্ন তথ্য।

### দুই-ক্যান্ডেলের প্যাটার্ন

**বুলিশ এনগাল্ফিং।** পূর্ববর্তী ডাউনট্রেন্ড। ক্যান্ডেল ১ লাল। ক্যান্ডেল ২ সবুজ, ক্যান্ডেল ১-এর ক্লোজের *নিচে* খোলে এবং তার ওপেনের *ওপরে* বন্ধ হয়। দ্বিতীয় বডি প্রথমটিকে সম্পূর্ণ গিলে ফেলে। অর্থ: বিক্রেতারা সেশন শুরু করেছিলেন নিয়ন্ত্রণে এবং এক সেশনের মধ্যেই তা পুরোপুরি হারালেন। হস্তান্তরটি দৃশ্যমান ও সম্পূর্ণ।

**বেয়ারিশ এনগাল্ফিং** এর আয়না: পূর্ববর্তী আপট্রেন্ড, সবুজ ক্যান্ডেলের পর সবুজ-গেলা লাল বডি।

রেঞ্জ নয়, বডির ওপর জোর দিন। কিছু বই শ্যাডোও গিলে ফেলার শর্ত দেয়; সেটি কঠোরতর এবং প্রায় এক-পঞ্চমাংশ শনাক্তকরণ দেয়। একটি সংজ্ঞা বাছুন এবং লোকসানি ট্রেডের পর চুপচাপ কখনো তা শিথিল করবেন না।

**পিয়ার্সিং লাইন।** পূর্ববর্তী ডাউনট্রেন্ড। ক্যান্ডেল ১ লাল। ক্যান্ডেল ২ **ক্যান্ডেল ১-এর লো-র নিচে** খোলে, তারপর **ক্যান্ডেল ১-এর বডির মধ্যবিন্দুর ওপরে** কিন্তু তার ওপেনের নিচে বন্ধ হয়:

$$C_2 > \\frac{O_1 + C_1}{2} \\quad \\text{and} \\quad C_2 < O_1 \\quad \\text{and} \\quad O_2 < L_1$$

**ডার্ক ক্লাউড কভার** শীর্ষে এর আয়না: ক্যান্ডেল ২ ক্যান্ডেল ১-এর হাই-র ওপরে খোলে এবং তার বডির মধ্যবিন্দুর নিচে বন্ধ হয়।

**৫০% নিয়মটিই পুরো প্যাটার্ন।** আগের বডির ৩০% ফিরে পাওয়া একটি ব্যর্থ বাউন্স; ৭০% ফিরে পাওয়া প্রায় এনগাল্ফিং। মধ্যবিন্দুটি স্বেচ্ছাচারী কিন্তু *নির্দিষ্ট* একটি সীমা, আর নির্দিষ্ট বলেই এর মূল্য। যে নিয়ম আপনি সরাতে পারেন তা নিয়ম নয়।

### তিন-ক্যান্ডেলের প্যাটার্ন

**মর্নিং স্টার।** পূর্ববর্তী ডাউনট্রেন্ড। ক্যান্ডেল ১ একটি লম্বা লাল বডি (ধরুন বডি% ≥ ৬০)। ক্যান্ডেল ২ একটি ছোট বডি (বডি% ≤ ৩০) যার *পুরো বডি* ক্যান্ডেল ১-এর ক্লোজের নিচে বসে — বডিতে একটি গ্যাপ। ক্যান্ডেল ৩ একটি লম্বা সবুজ বডি যা ক্যান্ডেল ২-এর বডি থেকে গ্যাপ দিয়ে ওঠে এবং **ক্যান্ডেল ১-এর বডির মধ্যবিন্দুর ওপরে** বন্ধ হয়।

আখ্যানটি তিন সেশনের এবং অস্বাভাবিকভাবে পাঠযোগ্য: ভারী বিক্রি, তারপর এমন একটি সেশন যেখানে কোনো পক্ষই দাম নাড়াতে পারেনি, তারপর ক্রেতারা হারানো বেশিরভাগ ফিরিয়ে নিলেন। **মাঝের ক্যান্ডেলটিই প্যাটার্ন।** ওখানেই দৃঢ়তা ফুরিয়েছে।

**ইভনিং স্টার** শীর্ষে এর আয়না। **ডোজি স্টার** রূপান্তরে মাঝের ক্যান্ডেলের জায়গায় একটি প্রকৃত ডোজি (বডি% ~৫-এর নিচে) বসে। ডোজিটি একই বক্তব্যের শক্তিশালী সংস্করণ — ভিন্ন প্যাটার্ন নয় — এবং বিরলতর, আর ঠিক এ কারণেই এটি নিয়ে বিপণনের শব্দ বেশি।

**থ্রি হোয়াইট সোলজার্স।** পরপর তিনটি লম্বা সবুজ বডি, প্রতিটি *আগের বডির ভেতরে* খুলে আগের ক্লোজের ওপরে বন্ধ হয়, লম্বা উপরের শ্যাডো ছাড়া। **থ্রি ব্ল্যাক ক্রোজ** এর আয়না। এগুলো আসলে রিভার্সাল প্যাটার্ন নয়; এগুলো *রিভার্সাল ইতিমধ্যেই ঘটেছে তার প্রমাণ*। তৃতীয় ক্যান্ডেলে পৌঁছে আপনি একটি মুভের তৃতীয় দিন কিনছেন। ওপেনগুলো আগের বডির ভেতরে পড়ার শর্ত রাখুন — এটিই একটি সুশৃঙ্খল অগ্রগতিকে গ্যাপ-চালিত উন্মত্ততা থেকে আলাদা করে, আর খুচরা স্ক্রিনারগুলো নীরবে ঠিক এই শর্তটিই বাদ দেয়।

**অ্যাবানডনড বেবি।** একটি মর্নিং বা ইভনিং স্টার যেখানে দুটি গ্যাপই **প্রকৃত গ্যাপ** — ক্যান্ডেল ২-এর পুরো রেঞ্জ, শ্যাডোসহ, ক্যান্ডেল ১ ও ক্যান্ডেল ৩-এর রেঞ্জ থেকে সম্পূর্ণ আলাদা। যেকোনো তরল উপকরণে এটি সত্যিই বিরল, আর ডিএসই-তে এটি সাধারণত প্যাটার্ন নয়, একটি কৃত্রিম ফল। নিচে বিস্তারিত।

### ভেতরের প্যাটার্ন

**হারামি।** ক্যান্ডেল ২-এর বডি সম্পূর্ণভাবে ক্যান্ডেল ১-এর বডির ভেতরে বসে, এবং দুটির রং বিপরীত। নিয়ন্ত্রণের হস্তান্তর নয় — গতির *ক্ষয়*। ট্রেন্ড উল্টায়নি; থেমেছে। **হারামি ক্রস** একই, যেখানে ক্যান্ডেল ২ একটি ডোজি।

হারামি এনগাল্ফিংয়ের চেয়ে কম প্রত্যাশিত ওজন পাওয়ার যোগ্য। এনগাল্ফিং দেখায় এক পক্ষ পরাজিত; হারামি দেখায় এক পক্ষ কেবল ক্লান্ত। ক্লান্ত ট্রেন্ড হরহামেশাই আবার শুরু হয়।

### টুইজার

**টুইজার বটম**: ডাউনট্রেন্ডের পর কার্যত অভিন্ন লো-সহ (ধরুন ০.১%-এর মধ্যে) পাশাপাশি দুটি ক্যান্ডেল, প্রথমটি লাল, দ্বিতীয়টি সবুজ। **টুইজার টপ** হাই-তে এর আয়না। দাবিটি হলো বাজার একই দাম দুবার পরখ করেছে এবং দুবারই প্রত্যাখ্যাত হয়েছে।

সংজ্ঞাগত পিছলে যাওয়ার ক্ষেত্রে টুইজারই সবচেয়ে দুর্বল। "কার্যত অভিন্ন" ব্যবহারের আগে একটি সংখ্যা হতে হবে, আর ০.১০ টাকা টিক সাইজের ৫০ টাকার শেয়ারে সহনসীমা প্রায় এক টিক চওড়া, অর্থাৎ সাহিত্য যা বলে টুইজার তার চেয়ে অনেক বেশি হারে দৈবক্রমেই ঘটে।

### "নির্ভরযোগ্যতার শতাংশ" প্রসঙ্গে

আপনি এমন টেবিল দেখবেন যা দাবি করে বুলিশ এনগাল্ফিং "৬৩% নির্ভরযোগ্য" বা মর্নিং স্টার "৭৮% নির্ভরযোগ্য"।

**এমন যেকোনো সংখ্যাকে বিপণনের ফসল ধরুন, যদি না তা চারটি জিনিস বলে: বাজার, টাইমফ্রেম, সঠিক জ্যামিতিক সীমা, এবং নিশ্চিতকরণ ও প্রস্থানের নিয়ম।** নির্ভরযোগ্যতা কোনো আকৃতির ধর্ম নয়। এটি একটি *নির্দিষ্ট উপকরণ-সমষ্টিতে* প্রয়োগ করা একটি *সম্পূর্ণ ট্রেডিং নিয়মের* ধর্ম। বডি-শতাংশের সীমা ৬০ থেকে ৫০ করুন, শনাক্তকরণের সংখ্যা ও হিট রেট দুটোই সরে যাবে। "সাফল্য"-এর সংজ্ঞা "পরদিন উঁচুতে বন্ধ হয়েছে" থেকে "১R-এর আগে ২R ছুঁয়েছে"-তে বদলান, সংখ্যাটি আবার বদলাবে, সাধারণত নিচের দিকে এবং তীব্রভাবে।

অধ্যায় ২৫-এর স্থাপত্য এখানে ভিন্ন ক্ষেত্রে প্রযোজ্য: **যে ফলাফল উপসংহারের সুবিধামতো পুনরায় বলা যায় তা ফলাফল নয়।** ফলাফল দেখার আগে আপনার সীমাগুলো কোডে বেঁধে ফেলুন, এবং নিজের বাজারে নিজের নিয়ম মাপুন। বাকি সব হলো ১৯৮০-র দশকের S&P 500-এর কারো ব্যাকটেস্ট পড়ে বাংলাদেশি মিড-ক্যাপ ট্রেড করা।

### ডিএসই এই সবকিছুর সঙ্গে যা করে

তিনটি কাঠামোগত বাস্তবতা মার্কিন ইকুইটি পাঠ্যবই থেকে আমদানি করা প্যাটার্ন ভেঙে দেয়।

**১. গ্যাপ।** স্টার প্যাটার্ন ও অ্যাবানডনড বেবি নির্ভর করে গ্যাপের অর্থপূর্ণ হওয়ার ওপর — একটি ধারাবাহিকভাবে তরল অর্ডার বুকের বিপরীতে রাতারাতি পুনর্মূল্যায়ন। পাতলা ডিএসই শেয়ারে "গ্যাপ" প্রায়ই মানে মাঝের দামগুলোতে কেউ লেনদেন করেনি, মত তীব্রভাবে বদলেছে তা নয়। অধ্যায় ২-এর ADTV ও আপেক্ষিক স্প্রেড স্ক্রিনই ফিল্টার: **দৈনিক প্রায় ৫০ লাখ টাকার নিচে, প্রমাণ না হওয়া পর্যন্ত প্রতিটি গ্যাপকে তারল্যের অনুপস্থিতির কৃত্রিম ফল ধরুন।** অতরল কাউন্টারে অ্যাবানডনড বেবি প্রায় সবসময় এটিই।

**২. সার্কিট সীমা।** দৈনিক মূল্যসীমা বডি কেটে ফেলে। যে বুলিশ এনগাল্ফিং আগের ওপেনের ১২% ওপরে বন্ধ হওয়ার *কথা ছিল* তা সীমাতেই বন্ধ হয়, আর জ্যামিতি নীরবে পরীক্ষায় ব্যর্থ হয়। উল্টো ভুলটি আরও খারাপ: সীমায় থাকা ক্যান্ডেল জানা ক্লোজসহ ক্যান্ডেল নয় — এটি *অপূর্ণ* অর্ডার বুকসহ একটি ক্যান্ডেল। **সীমায় আটকে থাকা বার হলো ডেটা পয়েন্টের পোশাক পরা অনুপস্থিত ডেটা।**

**৩. শর্ট সাইড নেই।** ডিএসই-তে খুচরা শর্ট-সেলিংয়ের ব্যবস্থা নেই। তাই এই অধ্যায়ের প্রতিটি বেয়ারিশ রিভার্সাল প্যাটার্ন — ইভনিং স্টার, ডার্ক ক্লাউড কভার, বেয়ারিশ এনগাল্ফিং, থ্রি ব্ল্যাক ক্রোজ, টুইজার টপ — **কেবল একটি প্রস্থান সংকেত ও স্টপ শক্ত করার সংকেত।** এটি আক্ষেপ করার সীমাবদ্ধতা নয়; এটি একটি সরলীকরণ। এটি সিদ্ধান্তের সংখ্যা অর্ধেক করে এবং ভুল হওয়ার সবচেয়ে ব্যয়বহুল পথটি সরিয়ে দেয়।

অধ্যায় ২৯ ধরবে কন্টিনিউয়েশন প্যাটার্ন, যেখানে অনুমান উল্টো দিকে চলে: ট্রেন্ড অক্ষত, আর বিরতিটিই সেটআপ।`,
    },

    simple: {
      en: `Think of a tug-of-war.

For two weeks one team has been dragging the rope steadily their way. Then, one afternoon, something changes. The other team digs in, pulls hard, and by the end of the session the rope is back where it started that morning — or further.

That is all a reversal candle is. **One session in which the side that had been winning stopped winning.**

Each named pattern is just a different way that reversal can look:

- **Engulfing** — the losing side takes back the entire day in one go. The clearest version.
- **Piercing line** — the losing side takes back more than half of the previous day. Not everything, but more than half. The half is the rule.
- **Morning star** — it takes three days. Day one, heavy selling. Day two, nobody wins anything; price barely moves. Day three, buyers take most of it back. The middle day is the interesting one, because that is where the selling ran out of energy.
- **Harami** — the previous day was big, today was small and sat entirely inside it. Nobody won today. The trend did not turn; it just got tired.
- **Tweezers** — price came down to the same level twice and bounced both times.

### Now the part nobody tells beginners

These shapes appear constantly. On any chart, on any day, you will find several. **Most of them lead nowhere.**

That is not a flaw in the patterns. It is what they are. A reversal candle is a *question*, not an *answer*. The question is: has control really changed hands?

And there is exactly one way to answer it — **wait for the next candle to close.** If buyers really took over, tomorrow should not close below today's close. If it does, the question has been answered "no," and you were never in the trade.

### Where the money actually is

Two candles can look identical and mean completely different things.

An engulfing candle in the middle of nowhere, on ordinary volume, is a coincidence. Prices wiggle; some wiggles are shaped like patterns.

The *same* engulfing candle, sitting exactly on a price level that has stopped the fall three times before, on double the usual volume — that is a different animal. Nothing about the candle changed. **The location changed, and the crowd size changed.**

So the honest ranking is: *where* it happened matters most, *how much was traded* matters next, and *what shape it was* matters least. Beginners learn the shapes and skip the rest, which is exactly the wrong way round.

### One thing specific to Dhaka

You cannot short a share on the DSE. So every bearish pattern in this chapter — every top, every dark cloud, every evening star — can only tell you one thing: **sell what you own, or move your stop up.**

That is not a handicap. It means half the patterns in this chapter are exit tools, and exits are where most retail money is actually lost.`,
      bn: `একটি দড়ি টানাটানির কথা ভাবুন।

দুই সপ্তাহ ধরে একটি দল ক্রমাগত দড়ি নিজেদের দিকে টেনে নিচ্ছে। তারপর এক বিকেলে কিছু একটা বদলায়। অন্য দলটি পা গেড়ে দাঁড়ায়, জোরে টানে, আর সেশন শেষে দড়ি সেই সকালের জায়গায় ফিরে আসে — বা তারও আগে।

রিভার্সাল ক্যান্ডেল এইটুকুই। **একটি সেশন যেখানে জিতে আসা পক্ষ জেতা বন্ধ করল।**

প্রতিটি নামকরা প্যাটার্ন কেবল সেই উল্টে যাওয়ার ভিন্ন ভিন্ন চেহারা:

- **এনগাল্ফিং** — হেরে আসা পক্ষ একবারেই পুরো দিনটি ফিরিয়ে নেয়। সবচেয়ে স্পষ্ট সংস্করণ।
- **পিয়ার্সিং লাইন** — হেরে আসা পক্ষ আগের দিনের অর্ধেকের বেশি ফিরিয়ে নেয়। সবটা নয়, কিন্তু অর্ধেকের বেশি। ঐ অর্ধেকটাই নিয়ম।
- **মর্নিং স্টার** — তিন দিন লাগে। প্রথম দিন ভারী বিক্রি। দ্বিতীয় দিন কেউ কিছু জেতে না; দাম প্রায় নড়ে না। তৃতীয় দিন ক্রেতারা বেশিরভাগ ফিরিয়ে নেন। মাঝের দিনটিই আকর্ষণীয়, কারণ ওখানেই বিক্রির শক্তি ফুরিয়েছে।
- **হারামি** — আগের দিন বড় ছিল, আজ ছোট এবং সম্পূর্ণ তার ভেতরে বসেছে। আজ কেউ জেতেনি। ট্রেন্ড ঘোরেনি; কেবল ক্লান্ত হয়েছে।
- **টুইজার** — দাম দুবার একই স্তরে নেমেছে এবং দুবারই ফিরে গেছে।

### এবার যা নতুনদের কেউ বলে না

এই আকৃতিগুলো অনবরত দেখা দেয়। যেকোনো চার্টে, যেকোনো দিনে আপনি কয়েকটি পাবেন। **এদের বেশিরভাগই কোথাও পৌঁছায় না।**

এটি প্যাটার্নের ত্রুটি নয়। এটিই তাদের স্বরূপ। রিভার্সাল ক্যান্ডেল একটি *প্রশ্ন*, *উত্তর* নয়। প্রশ্নটি: নিয়ন্ত্রণ কি সত্যিই হাতবদল হয়েছে?

আর উত্তর দেওয়ার ঠিক একটিই উপায় — **পরের ক্যান্ডেলের ক্লোজের জন্য অপেক্ষা করুন।** ক্রেতারা সত্যিই দখল নিলে আগামীকাল আজকের ক্লোজের নিচে বন্ধ হওয়ার কথা নয়। হলে প্রশ্নের উত্তর "না" এসে গেছে, আর আপনি ট্রেডে ছিলেনই না।

### টাকা আসলে কোথায়

দুটি ক্যান্ডেল অবিকল একরকম দেখতে হয়েও সম্পূর্ণ ভিন্ন অর্থ বহন করতে পারে।

কোথাও-না-কোথাও মাঝখানে, সাধারণ ভলিউমে একটি এনগাল্ফিং ক্যান্ডেল একটি কাকতালীয় ঘটনা। দাম নড়াচড়া করে; কিছু নড়াচড়া প্যাটার্নের আকৃতির হয়।

*একই* এনগাল্ফিং ক্যান্ডেল, ঠিক এমন একটি দামের স্তরে বসে যা আগে তিনবার পতন থামিয়েছে, স্বাভাবিকের দ্বিগুণ ভলিউমে — সেটি ভিন্ন প্রাণী। ক্যান্ডেলের কিছুই বদলায়নি। **অবস্থান বদলেছে, আর ভিড়ের আকার বদলেছে।**

তাই সৎ ক্রমটি হলো: *কোথায়* ঘটেছে সবচেয়ে গুরুত্বপূর্ণ, *কতটা লেনদেন হয়েছে* তার পরে, আর *কোন আকৃতি ছিল* সবচেয়ে কম। নতুনরা আকৃতি শেখেন আর বাকিটা বাদ দেন, যা ঠিক উল্টো।

### ঢাকার জন্য নির্দিষ্ট একটি কথা

ডিএসই-তে আপনি শেয়ার শর্ট করতে পারবেন না। তাই এই অধ্যায়ের প্রতিটি বেয়ারিশ প্যাটার্ন — প্রতিটি টপ, প্রতিটি ডার্ক ক্লাউড, প্রতিটি ইভনিং স্টার — আপনাকে একটিই কথা বলতে পারে: **যা আছে বিক্রি করুন, নয়তো স্টপ ওপরে তুলুন।**

এটি অসুবিধা নয়। এর মানে এই অধ্যায়ের অর্ধেক প্যাটার্ন প্রস্থানের হাতিয়ার, আর প্রস্থানেই খুচরা বিনিয়োগকারীর বেশিরভাগ টাকা আসলে হারায়।`,
    },

    example: {
      en: `### A morning star at a support shelf

A DSE mid-cap — call it MIDCAP, with the liquidity profile of a BEXIMCO or a BRACBANK rather than a Z-category shell — has fallen from BDT 57.80 to just above BDT 51 over roughly two weeks. There is a support shelf at **BDT 49.00** that stopped two previous declines. The 20-day average volume is **11.5 lakh shares**.

Five sessions, all figures illustrative:

| Day | Open | High | Low | Close | Volume | Body | Range | Body% | Dir |
|---|---|---|---|---|---|---|---|---|---|
| 1 | 52.40 | 52.60 | 50.80 | 51.00 | 12,00,000 | −1.40 | 1.80 | 77.8% | Red |
| 2 | 50.20 | 50.60 | 49.10 | 50.00 | 9,00,000 | −0.20 | 1.50 | 13.3% | Red |
| 3 | 50.30 | 52.10 | 50.10 | 51.95 | 21,00,000 | +1.65 | 2.00 | 82.5% | Green |
| 4 | 52.00 | 53.40 | 51.80 | 53.10 | 24,00,000 | +1.10 | 1.60 | 68.8% | Green |
| 5 | 53.20 | 54.00 | 52.70 | 53.80 | 19,00,000 | +0.60 | 1.30 | 46.2% | Green |

### Test the geometry, condition by condition

**Morning star, Days 1–3.** Six conditions, all of which must pass:

| Condition | Test | Result |
|---|---|---|
| Prior downtrend | 51.00 < 57.80 (10 bars earlier) | Pass |
| Candle 1 long red | Body% 77.8 ≥ 60, red | Pass |
| Candle 2 small body | Body% 13.3 ≤ 30 | Pass |
| Candle 2 body below C1 close | max(50.20, 50.00) = 50.20 < 51.00 | Pass |
| Candle 3 body above C2 body | min(50.30, 51.95) = 50.30 > 50.20 | Pass |
| Candle 3 closes past C1 midpoint | 51.95 > (52.40 + 51.00)/2 = 51.70 | Pass |

**Morning star confirmed as present.** The penetration into candle 1's body is

$$\\frac{51.95 - 51.00}{52.40 - 51.00} = \\frac{0.95}{1.40} = 67.9\\%$$

comfortably past the 50% floor.

### Now test the things that actually matter

**Location.** Candle 2's low of 49.10 sits 0.20% above the 49.00 shelf. The star's low tagged known support. **Pass.**

**Volume.** Day 3 traded 21,00,000 against a 20-day average of 11,50,000:

$$\\frac{21{,}00{,}000}{11{,}50{,}000} = 1.83\\times$$

Above the 1.5× floor. **Pass.**

**Confirmation.** Day 4 closed at 53.10, above Day 3's 51.95. **Pass.** The hypothesis survived its test.

Four legs out of four. This is as clean as a real setup gets, and it is worth noticing how rare that is — the reason is arithmetical, not mystical. If each leg independently has maybe a 30–50% chance of being present when you look at a random chart, all four co-occurring is uncommon by construction.

### What the sheet *rejects* is more instructive

Run the same five candles through the other detectors and almost everything fails. Three cases are worth stating.

**Not an abandoned baby.** Candle 2's high of 50.60 sits below candle 1's low of 50.80 — a *true* gap down. But candle 2's high of 50.60 is **above** candle 3's low of 50.10, so there is no true gap up. The pattern has one real gap and one body-only gap. It is a morning star, not an abandoned baby, and calling it the latter would be the single most common upgrade-by-wishful-thinking in candlestick practice.

**Not three white soldiers.** Days 3, 4 and 5 are all green, which is where most people stop reading. Two conditions fail: Day 4 opened at 52.00, *above* Day 3's close of 51.95, so it did not open inside the prior body; and Day 5's body is only 46.2% of its range, below the 60% floor. The second failure is the more useful one — **a third candle with a shrinking body is the classic stalled-advance warning.** The screener that drops the body% requirement to make more soldiers appear has removed the only part of the pattern that carried information.

**Not an engulfing.** Day 3 opened at 50.30, *above* Day 2's close of 50.00. Bullish engulfing requires opening below it. Near-misses are not misses by degree; a threshold you relax for one trade is not a threshold.

### What it would have cost, and what it would have made

Entry at the confirming close of 53.10. Stop 0.20 below the star's low: **48.90**.

$$\\text{Risk} = 53.10 - 48.90 = \\text{BDT } 4.20 \\;=\\; 7.91\\%$$

That is a wide stop, and this is where honest practice diverges from chart-book romance. **Star patterns produce expensive stops** because the pattern's own low is three sessions and two candles away from the entry. A prior swing high at 58.50 gives

$$R:R = \\frac{58.50 - 53.10}{4.20} = \\frac{5.40}{4.20} = 1.29$$

and therefore a break-even win rate of $1/(1+1.29) = 43.75\\%$.

**That number is the whole trade.** The question is not "does the morning star work?" It is: *does this setup, at this location, on this volume, hit its target more than 43.75% of the time?* Only your own logged results on your own market can answer that, and until you have fifty of them logged you are guessing — which is fine, provided you size like someone who is guessing.

### The exit that mattered more

Two months later the same name printed a textbook **evening star** near BDT 62: a long green body, a small-bodied session gapping up above it, then a heavy red candle closing below the midpoint of the first — on volume 2.1× average, right under a prior high.

There is no short side on the DSE, so the pattern was worth exactly one action: **sell the position, or trail the stop to just under the middle candle's low.** The reader who treats bearish patterns as exit signals rather than trade ideas extracts most of the available value from this chapter and takes none of the risk that comes from trying to trade a market structure that does not exist here.`,
      bn: `### একটি সাপোর্ট শেলফে মর্নিং স্টার

একটি ডিএসই মিড-ক্যাপ — ধরুন MIDCAP, Z-ক্যাটাগরির খোলস নয় বরং BEXIMCO বা BRACBANK-এর মতো তারল্য-বৈশিষ্ট্যসহ — প্রায় দুই সপ্তাহে ৫৭.৮০ টাকা থেকে ৫১ টাকার সামান্য ওপরে নেমেছে। **৪৯.০০ টাকায়** একটি সাপোর্ট শেলফ আছে যা আগের দুটি পতন থামিয়েছিল। ২০-দিনের গড় ভলিউম **১১.৫ লাখ শেয়ার**।

পাঁচটি সেশন, সব সংখ্যা উদাহরণমূলক:

| দিন | ওপেন | হাই | লো | ক্লোজ | ভলিউম | বডি | রেঞ্জ | বডি% | দিক |
|---|---|---|---|---|---|---|---|---|---|
| ১ | ৫২.৪০ | ৫২.৬০ | ৫০.৮০ | ৫১.০০ | ১২,০০,০০০ | −১.৪০ | ১.৮০ | ৭৭.৮% | লাল |
| ২ | ৫০.২০ | ৫০.৬০ | ৪৯.১০ | ৫০.০০ | ৯,০০,০০০ | −০.২০ | ১.৫০ | ১৩.৩% | লাল |
| ৩ | ৫০.৩০ | ৫২.১০ | ৫০.১০ | ৫১.৯৫ | ২১,০০,০০০ | +১.৬৫ | ২.০০ | ৮২.৫% | সবুজ |
| ৪ | ৫২.০০ | ৫৩.৪০ | ৫১.৮০ | ৫৩.১০ | ২৪,০০,০০০ | +১.১০ | ১.৬০ | ৬৮.৮% | সবুজ |
| ৫ | ৫৩.২০ | ৫৪.০০ | ৫২.৭০ | ৫৩.৮০ | ১৯,০০,০০০ | +০.৬০ | ১.৩০ | ৪৬.২% | সবুজ |

### শর্ত ধরে ধরে জ্যামিতি পরীক্ষা করুন

**মর্নিং স্টার, দিন ১–৩।** ছয়টি শর্ত, সবগুলোই উত্তীর্ণ হতে হবে:

| শর্ত | পরীক্ষা | ফল |
|---|---|---|
| পূর্ববর্তী ডাউনট্রেন্ড | ৫১.০০ < ৫৭.৮০ (১০ বার আগে) | উত্তীর্ণ |
| ক্যান্ডেল ১ লম্বা লাল | বডি% ৭৭.৮ ≥ ৬০, লাল | উত্তীর্ণ |
| ক্যান্ডেল ২ ছোট বডি | বডি% ১৩.৩ ≤ ৩০ | উত্তীর্ণ |
| ক্যান্ডেল ২-এর বডি C1 ক্লোজের নিচে | max(৫০.২০, ৫০.০০) = ৫০.২০ < ৫১.০০ | উত্তীর্ণ |
| ক্যান্ডেল ৩-এর বডি C2 বডির ওপরে | min(৫০.৩০, ৫১.৯৫) = ৫০.৩০ > ৫০.২০ | উত্তীর্ণ |
| ক্যান্ডেল ৩ C1 মধ্যবিন্দু পেরিয়ে বন্ধ | ৫১.৯৫ > (৫২.৪০ + ৫১.০০)/২ = ৫১.৭০ | উত্তীর্ণ |

**মর্নিং স্টার উপস্থিত বলে নিশ্চিত।** ক্যান্ডেল ১-এর বডিতে অনুপ্রবেশ

$$\\frac{51.95 - 51.00}{52.40 - 51.00} = \\frac{0.95}{1.40} = 67.9\\%$$

৫০% মেঝের অনেকটাই ওপরে।

### এবার যা আসলে গুরুত্বপূর্ণ তা পরীক্ষা করুন

**অবস্থান।** ক্যান্ডেল ২-এর লো ৪৯.১০ শেলফ ৪৯.০০-এর ০.২০% ওপরে বসে। স্টারের লো পরিচিত সাপোর্ট ছুঁয়েছে। **উত্তীর্ণ।**

**ভলিউম।** দিন ৩-এ ২১,০০,০০০ লেনদেন হয়েছে, ২০-দিনের গড় ১১,৫০,০০০-এর বিপরীতে:

$$\\frac{21{,}00{,}000}{11{,}50{,}000} = 1.83\\times$$

১.৫× মেঝের ওপরে। **উত্তীর্ণ।**

**নিশ্চিতকরণ।** দিন ৪ বন্ধ হয়েছে ৫৩.১০-এ, দিন ৩-এর ৫১.৯৫-এর ওপরে। **উত্তীর্ণ।** অনুমানটি তার পরীক্ষায় টিকেছে।

চারের মধ্যে চার পা। বাস্তব সেটআপ এর চেয়ে পরিচ্ছন্ন হয় না, আর এটি কত বিরল তা লক্ষ করার মতো — কারণটি পাটিগাণিতিক, রহস্যময় নয়। এলোমেলো একটি চার্টে তাকালে প্রতিটি পায়ের উপস্থিত থাকার সম্ভাবনা যদি স্বাধীনভাবে ৩০–৫০% হয়, তবে চারটির একসঙ্গে ঘটা গঠনগতভাবেই অস্বাভাবিক।

### শিটটি যা *বাতিল* করে তা আরও শিক্ষণীয়

একই পাঁচটি ক্যান্ডেল অন্য শনাক্তকারীগুলোতে চালান, প্রায় সবকিছু ব্যর্থ হয়। তিনটি ক্ষেত্র বলার মতো।

**অ্যাবানডনড বেবি নয়।** ক্যান্ডেল ২-এর হাই ৫০.৬০ ক্যান্ডেল ১-এর লো ৫০.৮০-এর নিচে — একটি *প্রকৃত* গ্যাপ ডাউন। কিন্তু ক্যান্ডেল ২-এর হাই ৫০.৬০ ক্যান্ডেল ৩-এর লো ৫০.১০-এর **ওপরে**, তাই প্রকৃত গ্যাপ আপ নেই। প্যাটার্নটিতে একটি বাস্তব গ্যাপ ও একটি কেবল-বডি গ্যাপ আছে। এটি মর্নিং স্টার, অ্যাবানডনড বেবি নয়, আর একে পরেরটি বলা ক্যান্ডেলস্টিক চর্চায় সবচেয়ে সাধারণ ইচ্ছাপূরণ-দ্বারা-পদোন্নতি।

**থ্রি হোয়াইট সোলজার্স নয়।** দিন ৩, ৪ ও ৫ সবই সবুজ, আর বেশিরভাগ মানুষ ওখানেই পড়া থামান। দুটি শর্ত ব্যর্থ: দিন ৪ খুলেছে ৫২.০০-এ, দিন ৩-এর ক্লোজ ৫১.৯৫-এর *ওপরে*, তাই আগের বডির ভেতরে খোলেনি; আর দিন ৫-এর বডি তার রেঞ্জের মাত্র ৪৬.২%, ৬০% মেঝের নিচে। দ্বিতীয় ব্যর্থতাটিই বেশি কার্যকর — **সংকুচিত বডিসহ তৃতীয় ক্যান্ডেল ক্লাসিক থমকে-যাওয়া-অগ্রগতির সতর্কতা।** যে স্ক্রিনার বেশি সোলজার দেখাতে বডি%-এর শর্ত বাদ দেয় সে প্যাটার্নের একমাত্র তথ্যবহুল অংশটিই সরিয়ে দিয়েছে।

**এনগাল্ফিং নয়।** দিন ৩ খুলেছে ৫০.৩০-এ, দিন ২-এর ক্লোজ ৫০.০০-এর *ওপরে*। বুলিশ এনগাল্ফিংয়ের জন্য তার নিচে খোলা দরকার। অল্পের জন্য ফসকানো মাত্রার ব্যাপার নয়; যে সীমা আপনি একটি ট্রেডের জন্য শিথিল করেন তা সীমা নয়।

### কত খরচ হতো, আর কত আসত

নিশ্চিতকারী ক্লোজ ৫৩.১০-এ এন্ট্রি। স্টার-এর লো-র ০.২০ নিচে স্টপ: **৪৮.৯০**।

$$\\text{Risk} = 53.10 - 48.90 = \\text{BDT } 4.20 \\;=\\; 7.91\\%$$

এটি একটি চওড়া স্টপ, আর এখানেই সৎ চর্চা চার্ট-বইয়ের রোমান্স থেকে আলাদা হয়। **স্টার প্যাটার্ন ব্যয়বহুল স্টপ তৈরি করে**, কারণ প্যাটার্নের নিজের লো এন্ট্রি থেকে তিন সেশন ও দুই ক্যান্ডেল দূরে। ৫৮.৫০-এ আগের একটি সুইং হাই দেয়

$$R:R = \\frac{58.50 - 53.10}{4.20} = \\frac{5.40}{4.20} = 1.29$$

এবং তাই ব্রেক-ইভেন উইন রেট $1/(1+1.29) = 43.75\\%$।

**ঐ সংখ্যাটিই পুরো ট্রেড।** প্রশ্নটি "মর্নিং স্টার কি কাজ করে?" নয়। প্রশ্নটি: *এই অবস্থানে, এই ভলিউমে, এই সেটআপ কি ৪৩.৭৫%-এর বেশি সময় তার লক্ষ্যে পৌঁছায়?* কেবল নিজের বাজারে নিজের লিপিবদ্ধ ফলাফলই তার উত্তর দিতে পারে, আর পঞ্চাশটি লিপিবদ্ধ না হওয়া পর্যন্ত আপনি অনুমান করছেন — যা ঠিক আছে, যদি অনুমানকারীর মতোই পজিশনের আকার রাখেন।

### যে প্রস্থানটি বেশি গুরুত্বপূর্ণ ছিল

দুই মাস পরে একই শেয়ার ৬২ টাকার কাছে একটি পাঠ্যবই **ইভনিং স্টার** ছাপল: একটি লম্বা সবুজ বডি, তার ওপরে গ্যাপ দিয়ে ওঠা একটি ছোট-বডির সেশন, তারপর প্রথমটির মধ্যবিন্দুর নিচে বন্ধ হওয়া একটি ভারী লাল ক্যান্ডেল — গড়ের ২.১× ভলিউমে, আগের একটি হাই-র ঠিক নিচে।

ডিএসই-তে শর্ট সাইড নেই, তাই প্যাটার্নটির মূল্য ছিল ঠিক একটি কাজে: **পজিশন বিক্রি করা, বা স্টপ টেনে মাঝের ক্যান্ডেলের লো-র ঠিক নিচে আনা।** যে পাঠক বেয়ারিশ প্যাটার্নকে ট্রেড আইডিয়া নয়, প্রস্থান সংকেত হিসেবে দেখেন তিনি এই অধ্যায় থেকে প্রাপ্য মূল্যের বেশিরভাগ তুলে নেন এবং এখানে অস্তিত্বহীন একটি বাজার কাঠামো ট্রেড করার ঝুঁকির কিছুই নেন না।`,
    },
  },
};
