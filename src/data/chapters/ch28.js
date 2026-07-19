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

    formula: {
      en: `Notation, carried from Chapter 27. For candle $i$: $O_i, H_i, L_i, C_i, V_i$, body $B_i = |C_i - O_i|$, range $R_i = H_i - L_i$, body ratio $b_i = B_i/R_i$, and direction $d_i = \\text{sign}(C_i - O_i)$.

**Every definition below is a conjunction. Every clause must hold. A pattern that satisfies five of six conditions is not a weak instance of the pattern — it is not the pattern.**

### Two-candle reversals

**Bullish engulfing:**
$$d_1 = -1 \\;\\land\\; d_2 = +1 \\;\\land\\; O_2 < C_1 \\;\\land\\; C_2 > O_1$$

**Bearish engulfing:**
$$d_1 = +1 \\;\\land\\; d_2 = -1 \\;\\land\\; O_2 > C_1 \\;\\land\\; C_2 < O_1$$

Note that the test is **body-engulfing, not range-engulfing** — the shadows are not required to be covered. That is the standard definition and it is the looser of the two available; requiring the range as well roughly halves the detection count.

**Piercing line:**
$$d_1 = -1 \\;\\land\\; d_2 = +1 \\;\\land\\; O_2 < L_1 \\;\\land\\; \\frac{O_1 + C_1}{2} < C_2 < O_1$$

**Dark cloud cover:**
$$d_1 = +1 \\;\\land\\; d_2 = -1 \\;\\land\\; O_2 > H_1 \\;\\land\\; O_1 < C_2 < \\frac{O_1 + C_1}{2}$$

The upper bound $C_2 < O_1$ is what separates a piercing line from an engulfing: **close above the previous open and it has stopped being a piercing line and become the stronger pattern.** The two are mutually exclusive by construction, which is why the detector can test them independently without double-counting.

**Harami:**
$$d_1 \\neq 0 \\;\\land\\; d_2 \\neq 0 \\;\\land\\; d_1 \\neq d_2 \\;\\land\\; \\max(O_2,C_2) \\le \\max(O_1,C_1) \\;\\land\\; \\min(O_2,C_2) \\ge \\min(O_1,C_1)$$

**Harami cross** adds $b_2 < 0.05$ — the inside candle is a doji.

**Tweezer bottom:**
$$\\frac{|L_1 - L_2|}{L_1} \\le 0.001 \\;\\land\\; d_1 = -1 \\;\\land\\; d_2 = +1$$

The 0.1% tolerance is a choice, not a law. **On a BDT 50 share it is 5 paisa — half a tick.** Widen it to 1% and you will find tweezers everywhere; that is the threshold doing the work, not the market.

### Three-candle reversals

**Morning star** — six clauses:
$$d_1 = -1 \\;\\land\\; b_1 \\ge 0.60 \\;\\land\\; b_2 \\le 0.30 \\;\\land\\; \\max(O_2,C_2) < C_1$$
$$\\land\\; \\min(O_3,C_3) > \\max(O_2,C_2) \\;\\land\\; d_3 = +1 \\;\\land\\; b_3 \\ge 0.60 \\;\\land\\; C_3 > \\frac{O_1+C_1}{2}$$

**Evening star** is the mirror image throughout.

**Penetration ratio** — how deep candle 3 reached into candle 1's body:
$$\\pi = \\frac{C_3 - C_1}{O_1 - C_1}$$

The morning-star definition requires $\\pi > 0.5$. **Reporting $\\pi$ itself is more useful than reporting the pass/fail**, because a pattern that clears the bar at 0.52 and one that clears it at 0.95 are not the same event.

**Abandoned baby bottom** adds two *true* gaps — gaps in the ranges, not merely the bodies:
$$H_2 < L_1 \\;\\land\\; H_2 < L_3$$

**Three white soldiers:**
$$\\bigwedge_{i=1}^{3} \\big(d_i = +1 \\;\\land\\; b_i \\ge 0.60\\big) \\;\\land\\; \\bigwedge_{i=2}^{3}\\big(C_{i-1} > O_i > O_{i-1}\\big) \\;\\land\\; C_3 > C_2 > C_1$$

The condition $C_{i-1} > O_i > O_{i-1}$ requires each session to open **inside the previous body** — higher than the previous open but below the previous close. An open above the previous close is a gap, and a gapping advance is a different and less reliable structure.

### The three tests that carry the edge

**Location** — the pattern's extreme must touch a level established independently, before the pattern formed:
$$\\frac{|L_{\\text{star}} - S|}{S} \\le 0.01$$

**Volume expansion:**
$$v = \\frac{V_{\\text{signal}}}{\\overline{V}_{20}}, \\qquad \\text{require } v \\ge 1.5$$

**Confirmation** — the hypothesis survives only if the next close extends it:
$$\\text{Confirmed}_{\\text{bull}} = \\mathbb{1}\\big[C_{\\text{next}} > C_{\\text{signal}}\\big]$$

### Setup score and the arithmetic that decides

$$\\Sigma = \\mathbb{1}[\\text{pattern present}] + \\mathbb{1}[\\text{location}] + \\mathbb{1}[\\text{volume}] + \\mathbb{1}[\\text{confirmed}] \\;\\in\\; \\{0,1,2,3,4\\}$$

**The pattern is one point of four, and it is the cheapest one to obtain.** Shapes are everywhere; a shape sitting on independently-established support, on 1.5× volume, that then confirms, is rare. The score is built this way to make that explicit — Chapter 25's architecture applied to a different domain.

**Then the trade arithmetic, which is where the discussion should always end:**

$$\\text{Risk} = E - X, \\qquad R:R = \\frac{T - E}{E - X}, \\qquad p^{*} = \\frac{1}{1 + R:R}$$

where $E$ is entry, $X$ the stop, $T$ the target, and $p^{*}$ the **break-even win rate** — the hit rate below which the setup loses money however good the pattern looked.

**$p^{*}$ is the number that decides whether a pattern is worth trading, and almost nobody computes it.** A textbook morning star with a break-even requirement of 43.75% is a claim you can test against your own logged results. "Morning stars are 78% reliable" is not.`,
      bn: `সংকেত, অধ্যায় ২৭ থেকে বাহিত। ক্যান্ডেল $i$-এর জন্য: $O_i, H_i, L_i, C_i, V_i$, বডি $B_i = |C_i - O_i|$, রেঞ্জ $R_i = H_i - L_i$, বডি অনুপাত $b_i = B_i/R_i$, ও দিক $d_i = \\text{sign}(C_i - O_i)$।

**নিচের প্রতিটি সংজ্ঞা একটি সংযোজন। প্রতিটি ধারা সত্য হতে হবে। ছয়টির পাঁচটি শর্ত পূরণকারী প্যাটার্ন ঐ প্যাটার্নের দুর্বল নমুনা নয় — তা ঐ প্যাটার্নই নয়।**

### দুই-ক্যান্ডেল রিভার্সাল

**বুলিশ এনগাল্ফিং:**
$$d_1 = -1 \\;\\land\\; d_2 = +1 \\;\\land\\; O_2 < C_1 \\;\\land\\; C_2 > O_1$$

**বেয়ারিশ এনগাল্ফিং:**
$$d_1 = +1 \\;\\land\\; d_2 = -1 \\;\\land\\; O_2 > C_1 \\;\\land\\; C_2 < O_1$$

লক্ষ করুন পরীক্ষাটি **বডি-এনগাল্ফিং, রেঞ্জ-এনগাল্ফিং নয়** — শ্যাডো ঢাকা পড়া আবশ্যক নয়। এটিই প্রমিত সংজ্ঞা ও দুটির মধ্যে শিথিলতর; রেঞ্জও দাবি করলে শনাক্তকরণের সংখ্যা মোটামুটি অর্ধেক হয়।

**পিয়ার্সিং লাইন:**
$$d_1 = -1 \\;\\land\\; d_2 = +1 \\;\\land\\; O_2 < L_1 \\;\\land\\; \\frac{O_1 + C_1}{2} < C_2 < O_1$$

**ডার্ক ক্লাউড কভার:**
$$d_1 = +1 \\;\\land\\; d_2 = -1 \\;\\land\\; O_2 > H_1 \\;\\land\\; O_1 < C_2 < \\frac{O_1 + C_1}{2}$$

ঊর্ধ্বসীমা $C_2 < O_1$-ই পিয়ার্সিং লাইনকে এনগাল্ফিং থেকে আলাদা করে: **আগের ওপেনের ওপরে বন্ধ হলে তা আর পিয়ার্সিং লাইন নেই, শক্তিশালী প্যাটার্নটি হয়ে গেছে।** গঠনগতভাবেই দুটি পারস্পরিক বর্জনশীল, আর সেজন্যই ডিটেক্টর দ্বিগুণ গণনা ছাড়াই এদের স্বাধীনভাবে পরীক্ষা করতে পারে।

**হারামি:**
$$d_1 \\neq 0 \\;\\land\\; d_2 \\neq 0 \\;\\land\\; d_1 \\neq d_2 \\;\\land\\; \\max(O_2,C_2) \\le \\max(O_1,C_1) \\;\\land\\; \\min(O_2,C_2) \\ge \\min(O_1,C_1)$$

**হারামি ক্রস** যোগ করে $b_2 < 0.05$ — ভেতরের ক্যান্ডেলটি একটি doji।

**টুইজার বটম:**
$$\\frac{|L_1 - L_2|}{L_1} \\le 0.001 \\;\\land\\; d_1 = -1 \\;\\land\\; d_2 = +1$$

০.১% সহনশীলতা একটি পছন্দ, বিধান নয়। **৫০ টাকার শেয়ারে তা ৫ পয়সা — অর্ধেক টিক।** একে ১% করুন আর সর্বত্র টুইজার পাবেন; ওটা বাজার নয়, সীমাটি কাজ করছে।

### তিন-ক্যান্ডেল রিভার্সাল

**মর্নিং স্টার** — ছয়টি ধারা:
$$d_1 = -1 \\;\\land\\; b_1 \\ge 0.60 \\;\\land\\; b_2 \\le 0.30 \\;\\land\\; \\max(O_2,C_2) < C_1$$
$$\\land\\; \\min(O_3,C_3) > \\max(O_2,C_2) \\;\\land\\; d_3 = +1 \\;\\land\\; b_3 \\ge 0.60 \\;\\land\\; C_3 > \\frac{O_1+C_1}{2}$$

**ইভনিং স্টার** সর্বত্র এর দর্পণ-প্রতিবিম্ব।

**অনুপ্রবেশ অনুপাত** — ক্যান্ডেল ৩ ক্যান্ডেল ১-এর বডিতে কতটা গভীরে পৌঁছেছে:
$$\\pi = \\frac{C_3 - C_1}{O_1 - C_1}$$

মর্নিং স্টারের সংজ্ঞা দাবি করে $\\pi > 0.5$। **উত্তীর্ণ/অনুত্তীর্ণ জানানোর চেয়ে $\\pi$ নিজেই জানানো বেশি কার্যকর**, কারণ ০.৫২-তে সীমা পার করা প্যাটার্ন আর ০.৯৫-এ পার করা প্যাটার্ন একই ঘটনা নয়।

**অ্যাবানডনড বেবি বটম** দুটি *প্রকৃত* গ্যাপ যোগ করে — রেঞ্জে গ্যাপ, কেবল বডিতে নয়:
$$H_2 < L_1 \\;\\land\\; H_2 < L_3$$

**থ্রি হোয়াইট সোলজার্স:**
$$\\bigwedge_{i=1}^{3} \\big(d_i = +1 \\;\\land\\; b_i \\ge 0.60\\big) \\;\\land\\; \\bigwedge_{i=2}^{3}\\big(C_{i-1} > O_i > O_{i-1}\\big) \\;\\land\\; C_3 > C_2 > C_1$$

$C_{i-1} > O_i > O_{i-1}$ শর্তটি দাবি করে প্রতিটি সেশন **আগের বডির ভেতরে** খুলবে — আগের ওপেনের ওপরে কিন্তু আগের ক্লোজের নিচে। আগের ক্লোজের ওপরে খোলা একটি গ্যাপ, আর গ্যাপ দিয়ে ওঠা অগ্রগতি একটি ভিন্ন ও কম নির্ভরযোগ্য কাঠামো।

### যে তিনটি পরীক্ষা প্রকৃত সুবিধা বহন করে

**অবস্থান** — প্যাটার্নের চরম বিন্দুকে এমন একটি স্তর ছুঁতে হবে যা প্যাটার্ন গঠনের আগেই স্বাধীনভাবে প্রতিষ্ঠিত:
$$\\frac{|L_{\\text{star}} - S|}{S} \\le 0.01$$

**ভলিউম সম্প্রসারণ:**
$$v = \\frac{V_{\\text{signal}}}{\\overline{V}_{20}}, \\qquad \\text{প্রয়োজন } v \\ge 1.5$$

**নিশ্চিতকরণ** — অনুমানটি টেকে কেবল যদি পরের ক্লোজ তা প্রসারিত করে:
$$\\text{Confirmed}_{\\text{bull}} = \\mathbb{1}\\big[C_{\\text{next}} > C_{\\text{signal}}\\big]$$

### সেটআপ স্কোর ও যে পাটিগণিত সিদ্ধান্ত নেয়

$$\\Sigma = \\mathbb{1}[\\text{প্যাটার্ন উপস্থিত}] + \\mathbb{1}[\\text{অবস্থান}] + \\mathbb{1}[\\text{ভলিউম}] + \\mathbb{1}[\\text{নিশ্চিত}] \\;\\in\\; \\{0,1,2,3,4\\}$$

**প্যাটার্নটি চারের মধ্যে এক পয়েন্ট, আর তা পাওয়ার খরচ সবচেয়ে কম।** আকৃতি সর্বত্র; স্বাধীনভাবে প্রতিষ্ঠিত সাপোর্টে বসা, ১.৫× ভলিউমের, এবং পরে নিশ্চিত হওয়া আকৃতি বিরল। স্কোরটি এভাবেই গড়া যাতে তা স্পষ্ট হয় — অধ্যায় ২৫-এর স্থাপত্য ভিন্ন ক্ষেত্রে প্রযুক্ত।

**তারপর ট্রেডের পাটিগণিত, আর আলোচনা সবসময় এখানেই শেষ হওয়া উচিত:**

$$\\text{ঝুঁকি} = E - X, \\qquad R:R = \\frac{T - E}{E - X}, \\qquad p^{*} = \\frac{1}{1 + R:R}$$

যেখানে $E$ প্রবেশ, $X$ স্টপ, $T$ লক্ষ্য, আর $p^{*}$ হলো **ব্রেক-ইভেন উইন রেট** — যে হিট রেটের নিচে প্যাটার্ন যত ভালোই দেখাক সেটআপটি অর্থ হারায়।

**$p^{*}$-ই সেই সংখ্যা যা ঠিক করে একটি প্যাটার্ন ট্রেড করার যোগ্য কি না, আর প্রায় কেউ তা গণনা করেন না।** ৪৩.৭৫% ব্রেক-ইভেন প্রয়োজনসহ একটি পাঠ্যবই মর্নিং স্টার এমন একটি দাবি যা আপনি নিজের লিপিবদ্ধ ফলাফলের বিপরীতে পরীক্ষা করতে পারেন। "মর্নিং স্টার ৭৮% নির্ভরযোগ্য" তা নয়।`,
    },

    manual: {
      en: `**Scenario.** The five MIDCAP sessions from §28.3. Support shelf at BDT 49.00, 20-day average volume 11,50,000, prior swing high 58.50, close ten bars before Day 1 was 57.80.

**Step 1 — Compute body, range, body ratio and direction for all five.**

| Day | Body | Range | $b$ | $d$ |
|---|---|---|---|---|
| 1 | −1.40 | 1.80 | 77.78% | −1 |
| 2 | −0.20 | 1.50 | 13.33% | −1 |
| 3 | +1.65 | 2.00 | 82.50% | +1 |
| 4 | +1.10 | 1.60 | 68.75% | +1 |
| 5 | +0.60 | 1.30 | 46.15% | +1 |

**Do this before testing any pattern.** Every condition below is a comparison between these numbers, and computing them once removes the temptation to eyeball a threshold.

**Step 2 — Confirm there is a trend to reverse.**
$$C_1 = 51.00 < 57.80 \\quad \\checkmark$$
**A reversal pattern in a sideways market is not a reversal pattern.** If this fails, stop — the sheet's verdict short-circuits here for the same reason Chapter 25's gates do.

**Step 3 — Test the morning star, clause by clause, on Days 1–3.**

$$d_1 = -1 \\;\\checkmark \\qquad b_1 = 0.7778 \\ge 0.60 \\;\\checkmark \\qquad b_2 = 0.1333 \\le 0.30 \\;\\checkmark$$
$$\\max(50.20,\\, 50.00) = 50.20 < 51.00 = C_1 \\;\\checkmark$$
$$\\min(50.30,\\, 51.95) = 50.30 > 50.20 \\;\\checkmark$$
$$d_3 = +1 \\;\\checkmark \\qquad b_3 = 0.8250 \\ge 0.60 \\;\\checkmark$$
$$C_3 = 51.95 > \\frac{52.40 + 51.00}{2} = 51.70 \\;\\checkmark$$

Eight clauses, eight passes. **Morning star present.**

**Step 4 — Report the penetration ratio, not just the pass.**
$$\\pi = \\frac{51.95 - 51.00}{52.40 - 51.00} = \\frac{0.95}{1.40} = 0.6786 = 67.86\\%$$

Comfortably past the 50% floor, but **not** the 90%+ that would make candle 3 nearly an engulfing. Record the number.

**Step 5 — Test what the pattern is *not*, because this is where wishful upgrading happens.**

$$\\textbf{Abandoned baby: } H_2 = 50.60 < L_1 = 50.80 \\;\\checkmark \\quad\\text{but}\\quad H_2 = 50.60 \\not< L_3 = 50.10 \\;\\times$$

One true gap, not two. **It is a morning star. It is not an abandoned baby**, and upgrading it would be the most common piece of self-deception in candlestick practice.

$$\\textbf{Engulfing: } O_3 = 50.30 \\not< C_2 = 50.00 \\;\\times$$

A near-miss of 30 paisa. **A threshold you relax for one trade is not a threshold.**

$$\\textbf{Three white soldiers: } O_4 = 52.00 \\not< C_3 = 51.95 \\;\\times \\qquad b_5 = 0.4615 \\not\\ge 0.60 \\;\\times$$

Two failures, and the second is the informative one: **a third candle with a shrinking body is the classic stalled-advance warning**, which is precisely what the 60% floor exists to catch.

**Step 6 — Location.**
$$\\frac{|49.10 - 49.00|}{49.00} = \\frac{0.10}{49.00} = 0.00204 = 0.20\\% \\le 1\\% \\;\\checkmark$$

The star's low tagged a shelf that was established **before** the pattern formed. That ordering is the whole point — a level drawn after the fact is not evidence.

**Step 7 — Volume.**
$$v = \\frac{21{,}00{,}000}{11{,}50{,}000} = 1.826 \\ge 1.5 \\;\\checkmark$$

**Step 8 — Confirmation.**
$$C_4 = 53.10 > C_3 = 51.95 \\;\\checkmark$$

The hypothesis was tested and survived. **Until this step the pattern was a question, not a position.**

**Step 9 — Setup score.**
$$\\Sigma = 1 + 1 + 1 + 1 = 4/4$$

> **Full setup: pattern at location, volume expansion, confirmed.**

**Step 10 — Now the arithmetic, and it is less flattering than the score.**

$$E = 53.10, \\qquad X = 49.10 - 0.20 = 48.90$$
$$\\text{Risk} = 53.10 - 48.90 = 4.20 = \\frac{4.20}{53.10} \\times 100 = 7.91\\%$$
$$R:R = \\frac{58.50 - 53.10}{4.20} = \\frac{5.40}{4.20} = 1.2857$$
$$p^{*} = \\frac{1}{1 + 1.2857} = 0.4375 = 43.75\\%$$

**A four-out-of-four setup needs to win 43.75% of the time merely to break even.** That is the sentence to carry out of this chapter.

**Step 11 — Price the confirmation, because it is not free.** Suppose you had entered at the pattern close instead, accepting the unconfirmed hypothesis:

| | Entry at $C_3$ | Entry at $C_4$ (confirmed) |
|---|---|---|
| Entry | 51.95 | 53.10 |
| Stop | 48.90 | 48.90 |
| Risk per share | 3.05 | 4.20 |
| Risk % | 5.87% | 7.91% |
| Reward to 58.50 | 6.55 | 5.40 |
| $R:R$ | **2.15** | **1.29** |
| Break-even win rate | **31.77%** | **43.75%** |

$$43.75\\% - 31.77\\% = 11.98 \\text{ percentage points}$$

**Waiting for the confirming close must raise your hit rate by roughly twelve percentage points to pay for itself.** That is a testable claim, and it is the honest way to frame the confirmation debate — not "confirmation is safer," which is true and insufficient, but "confirmation costs 12 points of required accuracy, and here is whether it delivers them."

**Step 12 — State what has not been established.** The setup scores 4/4 and the arithmetic demands 43.75%. **Nothing in Steps 1–11 tells you whether this setup achieves that**, and no published reliability table can tell you either, because those numbers come from other markets, other timeframes, other thresholds and other exit rules.

Only fifty logged instances of *your* rules on *your* market can answer it. **Until you have them, trade the setup at a size appropriate to someone who does not yet know their own hit rate** — which is the only genuinely defensible position at this stage, and the one the chapter is built to leave you in.`,
      bn: `**পরিস্থিতি।** §২৮.৩-এর পাঁচটি MIDCAP সেশন। ৪৯.০০ টাকায় সাপোর্ট শেলফ, ২০-দিনের গড় ভলিউম ১১,৫০,০০০, আগের সুইং হাই ৫৮.৫০, দিন ১-এর দশ বার আগের ক্লোজ ছিল ৫৭.৮০।

**ধাপ ১ — পাঁচটির জন্যই বডি, রেঞ্জ, বডি অনুপাত ও দিক গণনা করুন।**

| দিন | বডি | রেঞ্জ | $b$ | $d$ |
|---|---|---|---|---|
| ১ | −১.৪০ | ১.৮০ | ৭৭.৭৮% | −১ |
| ২ | −০.২০ | ১.৫০ | ১৩.৩৩% | −১ |
| ৩ | +১.৬৫ | ২.০০ | ৮২.৫০% | +১ |
| ৪ | +১.১০ | ১.৬০ | ৬৮.৭৫% | +১ |
| ৫ | +০.৬০ | ১.৩০ | ৪৬.১৫% | +১ |

**যেকোনো প্যাটার্ন পরীক্ষার আগে এটি করুন।** নিচের প্রতিটি শর্ত এই সংখ্যাগুলোর মধ্যে একটি তুলনা, আর একবার গণনা করলে চোখে আন্দাজ করে সীমা মাপার প্রলোভন সরে যায়।

**ধাপ ২ — উল্টানোর মতো একটি ট্রেন্ড আছে কি না নিশ্চিত করুন।**
$$C_1 = 51.00 < 57.80 \\quad \\checkmark$$
**পার্শ্বমুখী বাজারে রিভার্সাল প্যাটার্ন কোনো রিভার্সাল প্যাটার্ন নয়।** এটি ব্যর্থ হলে থামুন — শিটের রায় এখানেই সংক্ষিপ্ত হয়ে যায়, অধ্যায় ২৫-এর গেটগুলো যে কারণে হয় সেই একই কারণে।

**ধাপ ৩ — দিন ১–৩-এ মর্নিং স্টার ধারা ধরে ধরে পরীক্ষা করুন।**

$$d_1 = -1 \\;\\checkmark \\qquad b_1 = 0.7778 \\ge 0.60 \\;\\checkmark \\qquad b_2 = 0.1333 \\le 0.30 \\;\\checkmark$$
$$\\max(50.20,\\, 50.00) = 50.20 < 51.00 = C_1 \\;\\checkmark$$
$$\\min(50.30,\\, 51.95) = 50.30 > 50.20 \\;\\checkmark$$
$$d_3 = +1 \\;\\checkmark \\qquad b_3 = 0.8250 \\ge 0.60 \\;\\checkmark$$
$$C_3 = 51.95 > \\frac{52.40 + 51.00}{2} = 51.70 \\;\\checkmark$$

আটটি ধারা, আটটিই উত্তীর্ণ। **মর্নিং স্টার উপস্থিত।**

**ধাপ ৪ — কেবল উত্তীর্ণ নয়, অনুপ্রবেশ অনুপাতটি জানান।**
$$\\pi = \\frac{51.95 - 51.00}{52.40 - 51.00} = \\frac{0.95}{1.40} = 0.6786 = 67.86\\%$$

৫০% মেঝে স্বাচ্ছন্দ্যে পার, কিন্তু ৯০%+ **নয়**, যা ক্যান্ডেল ৩-কে প্রায় একটি এনগাল্ফিং করত। সংখ্যাটি লিপিবদ্ধ করুন।

**ধাপ ৫ — প্যাটার্নটি যা *নয়* তা পরীক্ষা করুন, কারণ ঠিক এখানেই আকাঙ্ক্ষাজাত উন্নীতকরণ ঘটে।**

$$\\textbf{অ্যাবানডনড বেবি: } H_2 = 50.60 < L_1 = 50.80 \\;\\checkmark \\quad\\text{কিন্তু}\\quad H_2 = 50.60 \\not< L_3 = 50.10 \\;\\times$$

একটি প্রকৃত গ্যাপ, দুটি নয়। **এটি একটি মর্নিং স্টার। এটি অ্যাবানডনড বেবি নয়**, আর একে উন্নীত করা ক্যান্ডেলস্টিক চর্চার সবচেয়ে সাধারণ আত্মপ্রবঞ্চনা হতো।

$$\\textbf{এনগাল্ফিং: } O_3 = 50.30 \\not< C_2 = 50.00 \\;\\times$$

৩০ পয়সার একটি প্রায়-মিস। **যে সীমা আপনি একটি ট্রেডের জন্য শিথিল করেন তা কোনো সীমা নয়।**

$$\\textbf{থ্রি হোয়াইট সোলজার্স: } O_4 = 52.00 \\not< C_3 = 51.95 \\;\\times \\qquad b_5 = 0.4615 \\not\\ge 0.60 \\;\\times$$

দুটি ব্যর্থতা, আর দ্বিতীয়টিই তথ্যবহুল: **সংকুচিত বডিসহ তৃতীয় ক্যান্ডেল হলো থেমে যাওয়া অগ্রগতির ধ্রুপদী সতর্কতা**, যা ধরতেই ৬০% মেঝেটির অস্তিত্ব।

**ধাপ ৬ — অবস্থান।**
$$\\frac{|49.10 - 49.00|}{49.00} = \\frac{0.10}{49.00} = 0.00204 = 0.20\\% \\le 1\\% \\;\\checkmark$$

স্টারের লো এমন একটি শেলফ ছুঁয়েছে যা প্যাটার্ন গঠনের **আগেই** প্রতিষ্ঠিত। ঐ ক্রমটাই পুরো কথা — ঘটনার পরে আঁকা স্তর কোনো প্রমাণ নয়।

**ধাপ ৭ — ভলিউম।**
$$v = \\frac{21{,}00{,}000}{11{,}50{,}000} = 1.826 \\ge 1.5 \\;\\checkmark$$

**ধাপ ৮ — নিশ্চিতকরণ।**
$$C_4 = 53.10 > C_3 = 51.95 \\;\\checkmark$$

অনুমানটি পরীক্ষিত হয়ে টিকেছে। **এই ধাপ পর্যন্ত প্যাটার্নটি একটি প্রশ্ন ছিল, পজিশন নয়।**

**ধাপ ৯ — সেটআপ স্কোর।**
$$\\Sigma = 1 + 1 + 1 + 1 = 4/4$$

> **পূর্ণ সেটআপ: অবস্থানে প্যাটার্ন, ভলিউম সম্প্রসারণ, নিশ্চিত।**

**ধাপ ১০ — এবার পাটিগণিত, আর তা স্কোরের চেয়ে কম তোষামোদকারী।**

$$E = 53.10, \\qquad X = 49.10 - 0.20 = 48.90$$
$$\\text{ঝুঁকি} = 53.10 - 48.90 = 4.20 = \\frac{4.20}{53.10} \\times 100 = 7.91\\%$$
$$R:R = \\frac{58.50 - 53.10}{4.20} = \\frac{5.40}{4.20} = 1.2857$$
$$p^{*} = \\frac{1}{1 + 1.2857} = 0.4375 = 43.75\\%$$

**চারে চার একটি সেটআপকে কেবল ব্রেক-ইভেন করতেই ৪৩.৭৫% বার জিততে হবে।** এই অধ্যায় থেকে বয়ে নেওয়ার বাক্যটি এটিই।

**ধাপ ১১ — নিশ্চিতকরণের দাম হিসাব করুন, কারণ তা বিনামূল্যে নয়।** ধরুন অনিশ্চিত অনুমানটি মেনে নিয়ে আপনি বরং প্যাটার্নের ক্লোজে ঢুকতেন:

| | $C_3$-এ প্রবেশ | $C_4$-এ প্রবেশ (নিশ্চিত) |
|---|---|---|
| প্রবেশ | ৫১.৯৫ | ৫৩.১০ |
| স্টপ | ৪৮.৯০ | ৪৮.৯০ |
| শেয়ারপ্রতি ঝুঁকি | ৩.০৫ | ৪.২০ |
| ঝুঁকি % | ৫.৮৭% | ৭.৯১% |
| ৫৮.৫০ পর্যন্ত পুরস্কার | ৬.৫৫ | ৫.৪০ |
| $R:R$ | **২.১৫** | **১.২৯** |
| ব্রেক-ইভেন উইন রেট | **৩১.৭৭%** | **৪৩.৭৫%** |

$$43.75\\% - 31.77\\% = 11.98 \\text{ শতাংশ বিন্দু}$$

**নিশ্চিতকারী ক্লোজের জন্য অপেক্ষা নিজের খরচ তুলতে হলে আপনার হিট রেট প্রায় বারো শতাংশ বিন্দু বাড়াতে হবে।** এটি একটি পরীক্ষণযোগ্য দাবি, আর নিশ্চিতকরণের বিতর্ক সাজানোর সৎ উপায় এটিই — "নিশ্চিতকরণ নিরাপদ" নয়, যা সত্য ও অপর্যাপ্ত, বরং "নিশ্চিতকরণের দাম প্রয়োজনীয় নির্ভুলতার ১২ বিন্দু, আর তা সেটি দেয় কি না এই হলো।"

**ধাপ ১২ — কী প্রতিষ্ঠিত হয়নি তা বলুন।** সেটআপটি ৪/৪ পায় আর পাটিগণিত ৪৩.৭৫% দাবি করে। **ধাপ ১–১১-এর কিছুই আপনাকে বলে না এই সেটআপ তা অর্জন করে কি না**, আর কোনো প্রকাশিত নির্ভরযোগ্যতার টেবিলও বলতে পারে না, কারণ ঐ সংখ্যাগুলো অন্য বাজার, অন্য টাইমফ্রেম, অন্য সীমা ও অন্য প্রস্থান নিয়ম থেকে আসে।

কেবল *আপনার* বাজারে *আপনার* নিয়মের পঞ্চাশটি লিপিবদ্ধ নমুনাই এর উত্তর দিতে পারে। **সেগুলো না পাওয়া পর্যন্ত এমন আকারে সেটআপটি ট্রেড করুন যা নিজের হিট রেট এখনো জানেন না এমন কারো উপযোগী** — এই পর্যায়ে এটিই একমাত্র সত্যিকারের সমর্থনযোগ্য অবস্থান, আর অধ্যায়টি আপনাকে এখানেই রেখে যেতে গড়া।`,
    },

    excel: {
      en: `\`\`\`
A1:  — 5-Day OHLCV Window (Day 1 = oldest) —
A2:J2   Day | Open | High | Low | Close | Volume | Body | Range | Body% | Dir

Rows 3-7 hold the five sessions. Derived columns, filled down:
G3: =E3-B3                                  Body (signed)
H3: =C3-D3                                  Range
I3: =ABS(G3)/H3*100                         Body %
J3: =IF(G3>0,1,IF(G3<0,-1,0))               Direction

A9:  — Context: trend, location, liquidity —
A10: Close 10 bars before Day 1     B10: 57.80
A11: 20-day Average Volume          B11: 1150000
A12: Support level being tested     B12: 49.00
A13: Prior downtrend OK             B13: =IF(E3<B10,1,0)
A14: Location OK (within 1%)        B14: =IF(ABS(D4-B12)/B12<=0.01,1,0)

A16: — Pattern Tests (1 = geometric condition met) —
A17: Bullish Engulfing (D2->D3)     B17: =IF(AND(J4=-1,J5=1,B5<E4,E5>B4),1,0)
A19: Piercing Line (D2->D3)         B19: =IF(AND(J4=-1,J5=1,B5<D4,
                                          E5>(B4+E4)/2,E5<B4),1,0)
A21: Morning Star (D1-D2-D3)        B21: =IF(AND(J3=-1,I3>=60,I4<=30,
                                          MAX(B4,E4)<E3,MIN(B5,E5)>MAX(B4,E4),
                                          J5=1,I5>=60,E5>(B3+E3)/2),1,0)
A24: Abandoned Baby Bottom          B24: =IF(AND(B21=1,C4<D3,C4<D5),1,0)
A25: Tweezer Bottom                 B25: =IF(AND(ABS(D4-D5)/D4<=0.001,
                                          J4=-1,J5=1),1,0)
A28: Three White Soldiers (D3-D5)   B28: =IF(AND(J5=1,J6=1,J7=1,I5>=60,I6>=60,
                                          I7>=60,B6>B5,B6<E5,B7>B6,B7<E6,
                                          E6>E5,E7>E6),1,0)
     ... bearish mirrors in B18, B20, B22, B29; harami in B26/B27

A31: — Confirmation & Volume —
A32: Pattern-day close (Day 3)      B32: =E5
A33: Confirmation close (Day 4)     B33: =E6
A34: CONFIRMED (bullish)            B34: =IF(AND(B21+B17+B19+B25>0,B33>B32),1,0)
A35: Volume expansion (x avg)       B35: =F5/B11
A36: Volume OK (>= 1.5x)            B36: =IF(B35>=1.5,1,0)

A38: PATTERNS DETECTED   B38: =B17+B18+B19+B20+B21+B22+B24+B25+B26+B28+B29
A39: SETUP SCORE (0-4)   B39: =IF(B38>0,1,0)+B14+B36+B34

A41: VERDICT
B41: =IF(B13=0,"No prior trend - nothing to reverse",
     IF(B38=0,"No named pattern - stand aside",
     IF(B39>=4,"Full setup: pattern at location, volume expansion, confirmed",
     IF(B34=0,"Hypothesis only - wait for the confirming close",
     IF(B39=3,"One leg missing - half size or skip","Weak - skip")))))

A43: — Trade Arithmetic —
A44: Entry (confirmation close)     B44: =B33
A45: Stop (star low less 0.20)      B45: =D4-0.2
A46: Risk per share                 B46: =B44-B45
A47: Risk (%)                       B47: =B46/B44*100
A48: Target (prior swing high)      B48: 58.50
A49: Reward:Risk                    B49: =(B48-B44)/B46
A50: BREAK-EVEN WIN RATE (%)        B50: =1/(1+B49)*100
\`\`\`

**On the MIDCAP window this returns B21 = 1 (morning star), B24 = 0, B28 = 0, B17 = 0, B38 = 1, B39 = 4, and the full-setup verdict — with B47 = 7.91%, B49 = 1.29 and B50 = 43.75%.**

**Five notes, and the last one is the reason the sheet exists.**

**B13 short-circuits the whole verdict, and it is checked first.** A reversal pattern requires something to reverse. If Day 3's close is not below the price ten bars earlier, the geometry may be immaculate and it is still meaningless — the sheet says "No prior trend - nothing to reverse" and never reads the pattern cells. **Same architecture as Chapter 25's hard gates: a condition that can be outvoted by a good-looking shape is not a gate.**

**B24 tests \`C4<D3\` and \`C4<D5\` — high against low, twice.** This is what makes it a *true* gap test rather than a body gap. On the MIDCAP data the first passes (50.60 < 50.80) and the second fails (50.60 > 50.10), so the abandoned baby correctly returns 0 while the morning star returns 1. **Write this test against bodies instead and you will "find" abandoned babies constantly, which is the most flattering and least justified upgrade in candlestick practice.**

**B28's \`B6>B5,B6<E5\` pair is doing something subtle.** It requires each soldier to open **inside** the previous body — above the previous open but below the previous close. Day 4 opened at 52.00 against Day 3's close of 51.95, so it opened five paisa too high and the pattern correctly fails. **Most published screeners omit this clause entirely and consequently report three white soldiers on any three green days.**

**B39 gives the pattern exactly one point of four.** Location, volume and confirmation carry the other three. This weighting is the chapter's central claim expressed as arithmetic: **the shape is the cheapest component to obtain and therefore the least informative.** Give the pattern two points and the sheet starts recommending shapes in empty space.

**B50 is the only cell that decides anything.** Everything above it describes a setup; B50 states the hit rate the setup must achieve to break even. **Build the sheet without it and you have automated the part that feels like analysis while omitting the part that is.** On this window a perfect 4/4 setup demands 43.75%, and the honest response to that number is that you do not yet know whether your rules deliver it.`,
      bn: `\`\`\`
A1:  — 5-Day OHLCV Window (Day 1 = oldest) —
A2:J2   Day | Open | High | Low | Close | Volume | Body | Range | Body% | Dir

সারি ৩-৭-এ পাঁচটি সেশন। নিষ্কাশিত কলাম, নিচে পূরণ করা:
G3: =E3-B3                                  বডি (চিহ্নসহ)
H3: =C3-D3                                  রেঞ্জ
I3: =ABS(G3)/H3*100                         বডি %
J3: =IF(G3>0,1,IF(G3<0,-1,0))               দিক

A9:  — Context: trend, location, liquidity —
A10: Close 10 bars before Day 1     B10: 57.80
A11: 20-day Average Volume          B11: 1150000
A12: Support level being tested     B12: 49.00
A13: Prior downtrend OK             B13: =IF(E3<B10,1,0)
A14: Location OK (within 1%)        B14: =IF(ABS(D4-B12)/B12<=0.01,1,0)

A16: — Pattern Tests (1 = geometric condition met) —
A17: Bullish Engulfing (D2->D3)     B17: =IF(AND(J4=-1,J5=1,B5<E4,E5>B4),1,0)
A19: Piercing Line (D2->D3)         B19: =IF(AND(J4=-1,J5=1,B5<D4,
                                          E5>(B4+E4)/2,E5<B4),1,0)
A21: Morning Star (D1-D2-D3)        B21: =IF(AND(J3=-1,I3>=60,I4<=30,
                                          MAX(B4,E4)<E3,MIN(B5,E5)>MAX(B4,E4),
                                          J5=1,I5>=60,E5>(B3+E3)/2),1,0)
A24: Abandoned Baby Bottom          B24: =IF(AND(B21=1,C4<D3,C4<D5),1,0)
A25: Tweezer Bottom                 B25: =IF(AND(ABS(D4-D5)/D4<=0.001,
                                          J4=-1,J5=1),1,0)
A28: Three White Soldiers (D3-D5)   B28: =IF(AND(J5=1,J6=1,J7=1,I5>=60,I6>=60,
                                          I7>=60,B6>B5,B6<E5,B7>B6,B7<E6,
                                          E6>E5,E7>E6),1,0)
     ... B18, B20, B22, B29-এ বেয়ারিশ প্রতিবিম্ব; B26/B27-এ হারামি

A31: — Confirmation & Volume —
A32: Pattern-day close (Day 3)      B32: =E5
A33: Confirmation close (Day 4)     B33: =E6
A34: CONFIRMED (bullish)            B34: =IF(AND(B21+B17+B19+B25>0,B33>B32),1,0)
A35: Volume expansion (x avg)       B35: =F5/B11
A36: Volume OK (>= 1.5x)            B36: =IF(B35>=1.5,1,0)

A38: PATTERNS DETECTED   B38: =B17+B18+B19+B20+B21+B22+B24+B25+B26+B28+B29
A39: SETUP SCORE (0-4)   B39: =IF(B38>0,1,0)+B14+B36+B34

A41: VERDICT
B41: =IF(B13=0,"No prior trend - nothing to reverse",
     IF(B38=0,"No named pattern - stand aside",
     IF(B39>=4,"Full setup: pattern at location, volume expansion, confirmed",
     IF(B34=0,"Hypothesis only - wait for the confirming close",
     IF(B39=3,"One leg missing - half size or skip","Weak - skip")))))

A43: — Trade Arithmetic —
A44: Entry (confirmation close)     B44: =B33
A45: Stop (star low less 0.20)      B45: =D4-0.2
A46: Risk per share                 B46: =B44-B45
A47: Risk (%)                       B47: =B46/B44*100
A48: Target (prior swing high)      B48: 58.50
A49: Reward:Risk                    B49: =(B48-B44)/B46
A50: BREAK-EVEN WIN RATE (%)        B50: =1/(1+B49)*100
\`\`\`

**MIDCAP জানালায় এটি ফেরত দেয় B21 = ১ (মর্নিং স্টার), B24 = ০, B28 = ০, B17 = ০, B38 = ১, B39 = ৪, ও পূর্ণ-সেটআপ রায় — সঙ্গে B47 = ৭.৯১%, B49 = ১.২৯ ও B50 = ৪৩.৭৫%।**

**পাঁচটি টীকা, আর শেষটিই শিটটির অস্তিত্বের কারণ।**

**B13 পুরো রায়কে সংক্ষিপ্ত করে দেয়, আর এটিই প্রথমে যাচাই হয়।** রিভার্সাল প্যাটার্নের জন্য উল্টানোর মতো কিছু লাগে। দিন ৩-এর ক্লোজ দশ বার আগের দামের নিচে না হলে জ্যামিতি নিখুঁত হলেও তা অর্থহীন — শিট বলে "No prior trend - nothing to reverse" আর প্যাটার্নের সেলগুলো কখনো পড়ে না। **অধ্যায় ২৫-এর কঠোর গেটেরই স্থাপত্য: যে শর্তকে একটি সুন্দর আকৃতি ভোটে হারাতে পারে তা গেট নয়।**

**B24 পরীক্ষা করে \`C4<D3\` ও \`C4<D5\` — হাই বনাম লো, দুবার।** এটিই একে বডি গ্যাপ নয়, একটি *প্রকৃত* গ্যাপ পরীক্ষা করে। MIDCAP ডেটায় প্রথমটি উত্তীর্ণ (৫০.৬০ < ৫০.৮০) আর দ্বিতীয়টি ব্যর্থ (৫০.৬০ > ৫০.১০), তাই অ্যাবানডনড বেবি সঠিকভাবে ০ ফেরত দেয় আর মর্নিং স্টার ১। **বডির বিপরীতে এই পরীক্ষা লিখুন আর আপনি অনবরত অ্যাবানডনড বেবি "খুঁজে পাবেন", যা ক্যান্ডেলস্টিক চর্চার সবচেয়ে তোষামোদকারী ও সবচেয়ে কম যুক্তিসঙ্গত উন্নীতকরণ।**

**B28-এর \`B6>B5,B6<E5\` জোড়াটি সূক্ষ্ম কিছু করছে।** এটি দাবি করে প্রতিটি সোলজার আগের বডির **ভেতরে** খুলবে — আগের ওপেনের ওপরে কিন্তু আগের ক্লোজের নিচে। দিন ৪ খুলেছে ৫২.০০-তে, দিন ৩-এর ৫১.৯৫ ক্লোজের বিপরীতে, অর্থাৎ পাঁচ পয়সা বেশি উঁচুতে, আর প্যাটার্নটি সঠিকভাবেই ব্যর্থ হয়। **বেশিরভাগ প্রকাশিত স্ক্রিনার এই ধারাটি সম্পূর্ণ বাদ দেয় আর ফলে যেকোনো তিনটি সবুজ দিনে থ্রি হোয়াইট সোলজার্স জানায়।**

**B39 প্যাটার্নকে চারের মধ্যে ঠিক এক পয়েন্ট দেয়।** অবস্থান, ভলিউম ও নিশ্চিতকরণ বাকি তিনটি বহন করে। এই ওজন অধ্যায়ের কেন্দ্রীয় দাবিটিকে পাটিগণিতে প্রকাশ করে: **আকৃতিই পাওয়ার সবচেয়ে সস্তা উপাদান এবং সেজন্যই সবচেয়ে কম তথ্যবহুল।** প্যাটার্নকে দুই পয়েন্ট দিন আর শিটটি খালি জায়গায় আকৃতি সুপারিশ করতে শুরু করবে।

**B50-ই একমাত্র সেল যা কিছু সিদ্ধান্ত নেয়।** এর ওপরের সবকিছু একটি সেটআপ বর্ণনা করে; B50 বলে ব্রেক-ইভেন করতে সেটআপটিকে কোন হিট রেট অর্জন করতে হবে। **এটি ছাড়া শিট গড়া মানে যে অংশটি বিশ্লেষণ বলে মনে হয় তা স্বয়ংক্রিয় করা আর যে অংশটি সত্যিই বিশ্লেষণ তা বাদ দেওয়া।** এই জানালায় নিখুঁত ৪/৪ সেটআপ ৪৩.৭৫% দাবি করে, আর ঐ সংখ্যার সৎ প্রতিক্রিয়া হলো আপনার নিয়ম তা দেয় কি না আপনি এখনো জানেন না।`,
    },

    python: {
      en: `\`\`\`python
"""
Chapter 28 — Candlestick reversal pattern detector for DSE data.

Detects the named patterns by explicit numeric conditions, then scores the
things that actually carry the edge: location, volume, confirmation.
Terminates in a break-even win rate, which is the only output that decides.
Educational. Figures illustrative.
"""
from dataclasses import dataclass

BODY_LONG = 0.60      # a "long" body, as a fraction of range
BODY_SMALL = 0.30     # a "small" body — the star
BODY_DOJI = 0.05
VOL_EXPANSION = 1.50
LOCATION_TOL = 0.01   # 1% of the level
TWEEZER_TOL = 0.001   # 0.1% — half a tick on a BDT 50 share


@dataclass
class Bar:
    day: int
    o: float
    h: float
    l: float
    c: float
    volume: int

    @property
    def body(self) -> float:
        return round(self.c - self.o, 2)

    @property
    def rng(self) -> float:
        return round(self.h - self.l, 2)

    @property
    def b(self) -> float:
        return 0.0 if self.rng == 0 else abs(self.body) / self.rng

    @property
    def d(self) -> int:
        return 1 if self.body > 0 else -1 if self.body < 0 else 0

    @property
    def body_top(self) -> float:
        return max(self.o, self.c)

    @property
    def body_bottom(self) -> float:
        return min(self.o, self.c)


# --- pattern definitions: each is a conjunction, no partial credit ------

def bullish_engulfing(a: Bar, z: Bar) -> bool:
    return a.d == -1 and z.d == 1 and z.o < a.c and z.c > a.o


def piercing_line(a: Bar, z: Bar) -> bool:
    return (a.d == -1 and z.d == 1 and z.o < a.l
            and (a.o + a.c) / 2 < z.c < a.o)


def harami(a: Bar, z: Bar) -> bool:
    return (a.d != 0 and z.d != 0 and a.d != z.d
            and z.body_top <= a.body_top and z.body_bottom >= a.body_bottom)


def tweezer_bottom(a: Bar, z: Bar) -> bool:
    return (abs(a.l - z.l) / a.l <= TWEEZER_TOL and a.d == -1 and z.d == 1)


def morning_star(a: Bar, m: Bar, z: Bar) -> bool:
    return (a.d == -1 and a.b >= BODY_LONG
            and m.b <= BODY_SMALL
            and m.body_top < a.c
            and z.body_bottom > m.body_top
            and z.d == 1 and z.b >= BODY_LONG
            and z.c > (a.o + a.c) / 2)


def abandoned_baby_bottom(a: Bar, m: Bar, z: Bar) -> bool:
    """Requires TRUE gaps — high against low, both sides. Not body gaps."""
    return morning_star(a, m, z) and m.h < a.l and m.h < z.l


def three_white_soldiers(a: Bar, b_: Bar, c_: Bar) -> bool:
    trio = (a, b_, c_)
    if not all(k.d == 1 and k.b >= BODY_LONG for k in trio):
        return False
    # each must open INSIDE the previous body — not gap above it
    if not (a.o < b_.o < a.c and b_.o < c_.o < b_.c):
        return False
    return c_.c > b_.c > a.c


def penetration(a: Bar, z: Bar) -> float:
    """How far candle 3 reached into candle 1's body. >0.5 required."""
    span = a.o - a.c
    return 0.0 if span == 0 else (z.c - a.c) / span


@dataclass
class Setup:
    """A detected pattern plus the three tests that carry the edge."""
    name: str
    bars: list[Bar]
    prior_close: float      # close 10 bars earlier
    support: float
    avg_volume: float
    signal_idx: int         # index of the pattern's final bar
    confirm_idx: int
    stop_ref_low: float
    target: float
    stop_buffer: float = 0.20

    @property
    def trend_ok(self) -> bool:
        return self.bars[0].c < self.prior_close

    @property
    def location_ok(self) -> bool:
        return abs(self.stop_ref_low - self.support) / self.support <= LOCATION_TOL

    @property
    def v(self) -> float:
        return self.bars[self.signal_idx].volume / self.avg_volume

    @property
    def volume_ok(self) -> bool:
        return self.v >= VOL_EXPANSION

    @property
    def confirmed(self) -> bool:
        return self.bars[self.confirm_idx].c > self.bars[self.signal_idx].c

    @property
    def score(self) -> int:
        return sum([True, self.location_ok, self.volume_ok, self.confirmed])

    # --- the arithmetic that decides -----------------------------------
    @property
    def entry(self) -> float:
        return self.bars[self.confirm_idx].c

    @property
    def stop(self) -> float:
        return round(self.stop_ref_low - self.stop_buffer, 2)

    def risk(self, entry: float | None = None) -> float:
        return round((entry or self.entry) - self.stop, 2)

    def rr(self, entry: float | None = None) -> float:
        e = entry or self.entry
        return (self.target - e) / self.risk(e)

    def breakeven_win_rate(self, entry: float | None = None) -> float:
        return 1 / (1 + self.rr(entry)) * 100

    @property
    def verdict(self) -> str:
        if not self.trend_ok:
            return "No prior trend - nothing to reverse"
        if self.score >= 4:
            return "Full setup: pattern at location, volume expansion, confirmed"
        if not self.confirmed:
            return "Hypothesis only - wait for the confirming close"
        if self.score == 3:
            return "One leg missing - half size or skip"
        return "Weak - skip"


if __name__ == "__main__":
    bars = [
        Bar(1, 52.40, 52.60, 50.80, 51.00, 1_200_000),
        Bar(2, 50.20, 50.60, 49.10, 50.00,   900_000),
        Bar(3, 50.30, 52.10, 50.10, 51.95, 2_100_000),
        Bar(4, 52.00, 53.40, 51.80, 53.10, 2_400_000),
        Bar(5, 53.20, 54.00, 52.70, 53.80, 1_900_000),
    ]
    d1, d2, d3, d4, d5 = bars

    print(f"{'Day':>3} {'Body':>7} {'Range':>6} {'b%':>7} {'Dir':>4}")
    print("-" * 32)
    for k in bars:
        print(f"{k.day:>3} {k.body:>+7.2f} {k.rng:>6.2f} {k.b*100:>7.2f} {k.d:>4}")

    tests = {
        "Morning star":         morning_star(d1, d2, d3),
        "Abandoned baby bottom": abandoned_baby_bottom(d1, d2, d3),
        "Bullish engulfing":    bullish_engulfing(d2, d3),
        "Piercing line":        piercing_line(d2, d3),
        "Harami":               harami(d1, d2),
        "Tweezer bottom":       tweezer_bottom(d2, d3),
        "Three white soldiers": three_white_soldiers(d3, d4, d5),
    }
    print()
    for name, hit in tests.items():
        print(f"  {name:<22} {'DETECTED' if hit else 'no'}")

    print()
    print(f"Penetration into candle 1 body: {penetration(d1, d3)*100:.2f}%")

    setup = Setup(
        name="Morning star", bars=bars, prior_close=57.80, support=49.00,
        avg_volume=1_150_000, signal_idx=2, confirm_idx=3,
        stop_ref_low=d2.l, target=58.50,
    )

    print()
    print(f"Trend ok      : {setup.trend_ok}")
    print(f"Location      : {setup.location_ok} "
          f"({abs(d2.l - 49.00)/49.00*100:.2f}% from support)")
    print(f"Volume        : {setup.volume_ok} ({setup.v:.2f}x average)")
    print(f"Confirmed     : {setup.confirmed}")
    print(f"SETUP SCORE   : {setup.score}/4")
    print(f"VERDICT       : {setup.verdict}")

    print()
    print("=== What confirmation costs ===")
    print(f"{'Entry at':<22} {'Entry':>7} {'Risk':>7} {'Risk%':>7} "
          f"{'R:R':>6} {'Break-even':>11}")
    for label, e in (("pattern close (D3)", d3.c), ("confirmation (D4)", d4.c)):
        print(f"{label:<22} {e:>7.2f} {setup.risk(e):>7.2f} "
              f"{setup.risk(e)/e*100:>7.2f} {setup.rr(e):>6.2f} "
              f"{setup.breakeven_win_rate(e):>10.2f}%")

    gap = setup.breakeven_win_rate(d4.c) - setup.breakeven_win_rate(d3.c)
    print(f"\\nConfirmation must raise the hit rate by {gap:.2f} points to pay for itself.")
\`\`\`

**Expected output:**
\`\`\`
Day    Body  Range      b%  Dir
--------------------------------
  1   -1.40   1.80   77.78   -1
  2   -0.20   1.50   13.33   -1
  3   +1.65   2.00   82.50    1
  4   +1.10   1.60   68.75    1
  5   +0.60   1.30   46.15    1

  Morning star           DETECTED
  Abandoned baby bottom  no
  Bullish engulfing      no
  Piercing line          no
  Harami                 no
  Tweezer bottom         no
  Three white soldiers   no

Penetration into candle 1 body: 67.86%

Trend ok      : True
Location      : True (0.20% from support)
Volume        : True (1.83x average)
Confirmed     : True
SETUP SCORE   : 4/4
VERDICT       : Full setup: pattern at location, volume expansion, confirmed

=== What confirmation costs ===
Entry at                 Entry    Risk   Risk%    R:R  Break-even
pattern close (D3)       51.95    3.05    5.87   2.15      31.77%
confirmation (D4)        53.10    4.20    7.91   1.29      43.75%

Confirmation must raise the hit rate by 11.98 points to pay for itself.
\`\`\`

**Read the last block first.** Everything above it is pattern recognition, which is the part that feels like analysis. The last block is the part that is. **A textbook morning star, at support, on 1.83× volume, fully confirmed — the cleanest setup this chapter can construct — still needs to win 43.75% of the time to break even.** Anyone quoting you a reliability percentage without that denominator is selling something.

**Three implementation notes.**

**Each pattern function is a single \`return\` of conjoined conditions, and no function returns a score.** There is no "80% of a morning star". The alternative — a similarity score with a tunable cutoff — is exactly how backtests become unfalsifiable, because the cutoff can always be nudged until the result improves. **Fixed boolean thresholds, set before you look at the data, are what make a result mean anything.**

**\`abandoned_baby_bottom\` calls \`morning_star\` and then adds \`m.h < a.l and m.h < z.l\`.** Composing rather than duplicating means the two can never drift apart, and the added clauses are explicitly high-against-low. **On this data the first gap holds and the second does not, which is why the function returns \`False\` on a window that a body-gap test would have called an abandoned baby.**

**\`three_white_soldiers\` fails on this window for two independent reasons, and the code reports neither.** That is a genuine limitation of a boolean detector: Day 4 opened five paisa above Day 3's close, and Day 5's body ratio is 46.15% against a 60% floor. **In practice you want the failing clause logged** — the shrinking third body is the classic stalled-advance warning and is more informative than the bare \`False\`. Chapter 27's \`reasons\` list is the pattern to copy here.`,
      bn: `\`\`\`python
"""
অধ্যায় ২৮ — ডিএসই ডেটার জন্য ক্যান্ডেলস্টিক রিভার্সাল প্যাটার্ন ডিটেক্টর।

সুস্পষ্ট সাংখ্যিক শর্তে নামযুক্ত প্যাটার্ন শনাক্ত করে, তারপর যা প্রকৃত সুবিধা
বহন করে তাতে স্কোর দেয়: অবস্থান, ভলিউম, নিশ্চিতকরণ।
শেষ হয় একটি ব্রেক-ইভেন উইন রেটে, যা একমাত্র সিদ্ধান্তকারী আউটপুট।
শিক্ষামূলক। সংখ্যা দৃষ্টান্তমূলক।
"""
from dataclasses import dataclass

BODY_LONG = 0.60      # রেঞ্জের ভগ্নাংশ হিসেবে একটি "লম্বা" বডি
BODY_SMALL = 0.30     # একটি "ছোট" বডি — স্টার
BODY_DOJI = 0.05
VOL_EXPANSION = 1.50
LOCATION_TOL = 0.01   # স্তরের ১%
TWEEZER_TOL = 0.001   # ০.১% — ৫০ টাকার শেয়ারে অর্ধেক টিক


@dataclass
class Bar:
    day: int
    o: float
    h: float
    l: float
    c: float
    volume: int

    @property
    def body(self) -> float:
        return round(self.c - self.o, 2)

    @property
    def rng(self) -> float:
        return round(self.h - self.l, 2)

    @property
    def b(self) -> float:
        return 0.0 if self.rng == 0 else abs(self.body) / self.rng

    @property
    def d(self) -> int:
        return 1 if self.body > 0 else -1 if self.body < 0 else 0

    @property
    def body_top(self) -> float:
        return max(self.o, self.c)

    @property
    def body_bottom(self) -> float:
        return min(self.o, self.c)


# --- প্যাটার্নের সংজ্ঞা: প্রতিটি একটি সংযোজন, আংশিক নম্বর নেই ----------

def bullish_engulfing(a: Bar, z: Bar) -> bool:
    return a.d == -1 and z.d == 1 and z.o < a.c and z.c > a.o


def piercing_line(a: Bar, z: Bar) -> bool:
    return (a.d == -1 and z.d == 1 and z.o < a.l
            and (a.o + a.c) / 2 < z.c < a.o)


def harami(a: Bar, z: Bar) -> bool:
    return (a.d != 0 and z.d != 0 and a.d != z.d
            and z.body_top <= a.body_top and z.body_bottom >= a.body_bottom)


def tweezer_bottom(a: Bar, z: Bar) -> bool:
    return (abs(a.l - z.l) / a.l <= TWEEZER_TOL and a.d == -1 and z.d == 1)


def morning_star(a: Bar, m: Bar, z: Bar) -> bool:
    return (a.d == -1 and a.b >= BODY_LONG
            and m.b <= BODY_SMALL
            and m.body_top < a.c
            and z.body_bottom > m.body_top
            and z.d == 1 and z.b >= BODY_LONG
            and z.c > (a.o + a.c) / 2)


def abandoned_baby_bottom(a: Bar, m: Bar, z: Bar) -> bool:
    """প্রকৃত গ্যাপ দরকার — হাই বনাম লো, দুই পাশেই। বডি গ্যাপ নয়।"""
    return morning_star(a, m, z) and m.h < a.l and m.h < z.l


def three_white_soldiers(a: Bar, b_: Bar, c_: Bar) -> bool:
    trio = (a, b_, c_)
    if not all(k.d == 1 and k.b >= BODY_LONG for k in trio):
        return False
    # প্রতিটিকে আগের বডির ভেতরে খুলতে হবে — তার ওপরে গ্যাপ দিয়ে নয়
    if not (a.o < b_.o < a.c and b_.o < c_.o < b_.c):
        return False
    return c_.c > b_.c > a.c


def penetration(a: Bar, z: Bar) -> float:
    """ক্যান্ডেল ৩ ক্যান্ডেল ১-এর বডিতে কতদূর পৌঁছেছে। >০.৫ প্রয়োজন।"""
    span = a.o - a.c
    return 0.0 if span == 0 else (z.c - a.c) / span


@dataclass
class Setup:
    """একটি শনাক্ত প্যাটার্ন ও যে তিনটি পরীক্ষা প্রকৃত সুবিধা বহন করে।"""
    name: str
    bars: list[Bar]
    prior_close: float      # দশ বার আগের ক্লোজ
    support: float
    avg_volume: float
    signal_idx: int         # প্যাটার্নের শেষ বারের সূচক
    confirm_idx: int
    stop_ref_low: float
    target: float
    stop_buffer: float = 0.20

    @property
    def trend_ok(self) -> bool:
        return self.bars[0].c < self.prior_close

    @property
    def location_ok(self) -> bool:
        return abs(self.stop_ref_low - self.support) / self.support <= LOCATION_TOL

    @property
    def v(self) -> float:
        return self.bars[self.signal_idx].volume / self.avg_volume

    @property
    def volume_ok(self) -> bool:
        return self.v >= VOL_EXPANSION

    @property
    def confirmed(self) -> bool:
        return self.bars[self.confirm_idx].c > self.bars[self.signal_idx].c

    @property
    def score(self) -> int:
        return sum([True, self.location_ok, self.volume_ok, self.confirmed])

    # --- যে পাটিগণিত সিদ্ধান্ত নেয় -------------------------------------
    @property
    def entry(self) -> float:
        return self.bars[self.confirm_idx].c

    @property
    def stop(self) -> float:
        return round(self.stop_ref_low - self.stop_buffer, 2)

    def risk(self, entry: float | None = None) -> float:
        return round((entry or self.entry) - self.stop, 2)

    def rr(self, entry: float | None = None) -> float:
        e = entry or self.entry
        return (self.target - e) / self.risk(e)

    def breakeven_win_rate(self, entry: float | None = None) -> float:
        return 1 / (1 + self.rr(entry)) * 100

    @property
    def verdict(self) -> str:
        if not self.trend_ok:
            return "No prior trend - nothing to reverse"
        if self.score >= 4:
            return "Full setup: pattern at location, volume expansion, confirmed"
        if not self.confirmed:
            return "Hypothesis only - wait for the confirming close"
        if self.score == 3:
            return "One leg missing - half size or skip"
        return "Weak - skip"


if __name__ == "__main__":
    bars = [
        Bar(1, 52.40, 52.60, 50.80, 51.00, 1_200_000),
        Bar(2, 50.20, 50.60, 49.10, 50.00,   900_000),
        Bar(3, 50.30, 52.10, 50.10, 51.95, 2_100_000),
        Bar(4, 52.00, 53.40, 51.80, 53.10, 2_400_000),
        Bar(5, 53.20, 54.00, 52.70, 53.80, 1_900_000),
    ]
    d1, d2, d3, d4, d5 = bars

    print(f"{'Day':>3} {'Body':>7} {'Range':>6} {'b%':>7} {'Dir':>4}")
    print("-" * 32)
    for k in bars:
        print(f"{k.day:>3} {k.body:>+7.2f} {k.rng:>6.2f} {k.b*100:>7.2f} {k.d:>4}")

    tests = {
        "Morning star":         morning_star(d1, d2, d3),
        "Abandoned baby bottom": abandoned_baby_bottom(d1, d2, d3),
        "Bullish engulfing":    bullish_engulfing(d2, d3),
        "Piercing line":        piercing_line(d2, d3),
        "Harami":               harami(d1, d2),
        "Tweezer bottom":       tweezer_bottom(d2, d3),
        "Three white soldiers": three_white_soldiers(d3, d4, d5),
    }
    print()
    for name, hit in tests.items():
        print(f"  {name:<22} {'DETECTED' if hit else 'no'}")

    print()
    print(f"Penetration into candle 1 body: {penetration(d1, d3)*100:.2f}%")

    setup = Setup(
        name="Morning star", bars=bars, prior_close=57.80, support=49.00,
        avg_volume=1_150_000, signal_idx=2, confirm_idx=3,
        stop_ref_low=d2.l, target=58.50,
    )

    print()
    print(f"Trend ok      : {setup.trend_ok}")
    print(f"Location      : {setup.location_ok} "
          f"({abs(d2.l - 49.00)/49.00*100:.2f}% from support)")
    print(f"Volume        : {setup.volume_ok} ({setup.v:.2f}x average)")
    print(f"Confirmed     : {setup.confirmed}")
    print(f"SETUP SCORE   : {setup.score}/4")
    print(f"VERDICT       : {setup.verdict}")

    print()
    print("=== What confirmation costs ===")
    print(f"{'Entry at':<22} {'Entry':>7} {'Risk':>7} {'Risk%':>7} "
          f"{'R:R':>6} {'Break-even':>11}")
    for label, e in (("pattern close (D3)", d3.c), ("confirmation (D4)", d4.c)):
        print(f"{label:<22} {e:>7.2f} {setup.risk(e):>7.2f} "
              f"{setup.risk(e)/e*100:>7.2f} {setup.rr(e):>6.2f} "
              f"{setup.breakeven_win_rate(e):>10.2f}%")

    gap = setup.breakeven_win_rate(d4.c) - setup.breakeven_win_rate(d3.c)
    print(f"\\nConfirmation must raise the hit rate by {gap:.2f} points to pay for itself.")
\`\`\`

**প্রত্যাশিত আউটপুট:**
\`\`\`
Day    Body  Range      b%  Dir
--------------------------------
  1   -1.40   1.80   77.78   -1
  2   -0.20   1.50   13.33   -1
  3   +1.65   2.00   82.50    1
  4   +1.10   1.60   68.75    1
  5   +0.60   1.30   46.15    1

  Morning star           DETECTED
  Abandoned baby bottom  no
  Bullish engulfing      no
  Piercing line          no
  Harami                 no
  Tweezer bottom         no
  Three white soldiers   no

Penetration into candle 1 body: 67.86%

Trend ok      : True
Location      : True (0.20% from support)
Volume        : True (1.83x average)
Confirmed     : True
SETUP SCORE   : 4/4
VERDICT       : Full setup: pattern at location, volume expansion, confirmed

=== What confirmation costs ===
Entry at                 Entry    Risk   Risk%    R:R  Break-even
pattern close (D3)       51.95    3.05    5.87   2.15      31.77%
confirmation (D4)        53.10    4.20    7.91   1.29      43.75%

Confirmation must raise the hit rate by 11.98 points to pay for itself.
\`\`\`

**শেষ অংশটি আগে পড়ুন।** এর ওপরের সবকিছু প্যাটার্ন শনাক্তকরণ, যা সেই অংশ যা বিশ্লেষণ বলে মনে হয়। শেষ অংশটি সেই অংশ যা সত্যিই তাই। **একটি পাঠ্যবই মর্নিং স্টার, সাপোর্টে, ১.৮৩× ভলিউমে, সম্পূর্ণ নিশ্চিত — এই অধ্যায় যে সবচেয়ে পরিচ্ছন্ন সেটআপ গড়তে পারে — তবুও ব্রেক-ইভেন করতে ৪৩.৭৫% বার জিততে হবে।** ঐ হর ছাড়া যিনি আপনাকে নির্ভরযোগ্যতার শতাংশ বলছেন তিনি কিছু বিক্রি করছেন।

**তিনটি বাস্তবায়ন টীকা।**

**প্রতিটি প্যাটার্ন ফাংশন সংযুক্ত শর্তের একটি মাত্র \`return\`, আর কোনো ফাংশন স্কোর ফেরত দেয় না।** "একটি মর্নিং স্টারের ৮০%" বলে কিছু নেই। বিকল্প — সমন্বয়যোগ্য কাটঅফসহ একটি সাদৃশ্য স্কোর — ঠিক এভাবেই ব্যাকটেস্ট অখণ্ডনযোগ্য হয়ে ওঠে, কারণ ফলাফল উন্নত না হওয়া পর্যন্ত কাটঅফটি সবসময় নাড়ানো যায়। **ডেটা দেখার আগে নির্ধারিত স্থির বুলিয়ান সীমাই একটি ফলাফলকে অর্থবহ করে।**

**\`abandoned_baby_bottom\` \`morning_star\` ডাকে ও তারপর \`m.h < a.l and m.h < z.l\` যোগ করে।** নকল না করে সংযোজন করার অর্থ দুটি কখনো পরস্পর থেকে সরে যেতে পারে না, আর যোগ করা ধারাগুলো স্পষ্টভাবে হাই-বনাম-লো। **এই ডেটায় প্রথম গ্যাপটি টেকে আর দ্বিতীয়টি নয়, সেজন্যই ফাংশনটি এমন একটি জানালায় \`False\` ফেরত দেয় যাকে একটি বডি-গ্যাপ পরীক্ষা অ্যাবানডনড বেবি বলত।**

**\`three_white_soldiers\` এই জানালায় দুটি স্বাধীন কারণে ব্যর্থ হয়, আর কোড কোনোটিই জানায় না।** এটি একটি বুলিয়ান ডিটেক্টরের প্রকৃত সীমাবদ্ধতা: দিন ৪ দিন ৩-এর ক্লোজের পাঁচ পয়সা ওপরে খুলেছে, আর দিন ৫-এর বডি অনুপাত ৬০% মেঝের বিপরীতে ৪৬.১৫%। **বাস্তবে আপনি ব্যর্থ ধারাটি লিপিবদ্ধ চান** — সংকুচিত তৃতীয় বডি থেমে যাওয়া অগ্রগতির ধ্রুপদী সতর্কতা এবং শুধু \`False\`-এর চেয়ে বেশি তথ্যবহুল। অধ্যায় ২৭-এর \`reasons\` তালিকাই এখানে অনুসরণীয় নকশা।`,
    },

    mistakes: {
      en: `1. **Treating a pattern as a signal rather than a hypothesis.** A reversal candle asks whether control has changed hands. Only the next close answers it. Until then you are not in a trade, and acting before it is the single most expensive habit in this chapter.
2. **Relaxing a threshold for one attractive setup.** Day 3 opened 30 paisa above Day 2's close, so it is not an engulfing. **A threshold you loosen once is not a threshold, and every subsequent result computed with it is uninterpretable.**
3. **Calling a morning star an abandoned baby.** The upgrade requires two *true* gaps — high against low, both sides. This window has one. Testing bodies instead of ranges will find abandoned babies constantly, and it is the most flattering error in candlestick practice.
4. **Reading three green days as three white soldiers.** The pattern also requires each session to open inside the previous body and each body to be at least 60% of its range. Day 5's 46.15% body is a **stalled-advance warning**, and dropping the body floor to admit more soldiers deletes the only informative clause.
5. **Quoting reliability percentages from published tables.** "Morning stars are 78% reliable" is meaningless without the market, timeframe, exact thresholds, and exit rule. Change the body floor from 60% to 50% and both the detection count and the hit rate move.
6. **Weighting the shape as heavily as location and volume.** The setup score gives the pattern one point of four deliberately. **Shapes are everywhere and cost nothing to find; a shape on independently-established support, on 1.5× volume, that then confirms, is rare.**
7. **Drawing the support level after seeing the pattern.** A level identified retrospectively is not evidence — it is the pattern being scored against itself. The shelf must exist on the chart before the star forms.
8. **Ignoring the break-even win rate.** A 4/4 setup here demands 43.75%. Without that number you cannot say whether any pattern is worth trading, and with it the whole reliability debate becomes testable.
9. **Trading star patterns without noticing their stops are wide.** The pattern's low is two or three sessions from the confirmed entry, which here means a 7.91% stop. Star setups are structurally expensive and position size must reflect it.
10. **Treating a bearish reversal as a trade idea.** Without a short side on the DSE, evening stars, dark clouds, bearish engulfings and three black crows are exit and stop-tightening signals only. Half this chapter is an exit vocabulary.
11. **Reading a gap on an illiquid counter as information.** Below roughly BDT 50 lakh daily turnover, a gap usually means nobody traded at the intervening prices — not that opinion shifted violently. Chapter 2's screen is the filter.`,
      bn: `১. **প্যাটার্নকে অনুমান নয়, সংকেত হিসেবে গণ্য করা।** রিভার্সাল ক্যান্ডেল জিজ্ঞেস করে নিয়ন্ত্রণ হাতবদল হয়েছে কি না। কেবল পরের ক্লোজ তার উত্তর দেয়। তার আগে আপনি ট্রেডে নেই, আর তার আগে কাজ করাই এই অধ্যায়ের সবচেয়ে ব্যয়বহুল অভ্যাস।
২. **একটি আকর্ষণীয় সেটআপের জন্য সীমা শিথিল করা।** দিন ৩ দিন ২-এর ক্লোজের ৩০ পয়সা ওপরে খুলেছে, তাই এটি এনগাল্ফিং নয়। **যে সীমা আপনি একবার আলগা করেন তা সীমা নয়, আর তা দিয়ে গণিত পরবর্তী প্রতিটি ফলাফল ব্যাখ্যার অযোগ্য।**
৩. **মর্নিং স্টারকে অ্যাবানডনড বেবি বলা।** উন্নীতকরণের জন্য দুটি *প্রকৃত* গ্যাপ লাগে — হাই বনাম লো, দুই পাশেই। এই জানালায় একটি আছে। রেঞ্জের বদলে বডি পরীক্ষা করলে অনবরত অ্যাবানডনড বেবি পাবেন, আর এটিই ক্যান্ডেলস্টিক চর্চার সবচেয়ে তোষামোদকারী ভুল।
৪. **তিনটি সবুজ দিনকে থ্রি হোয়াইট সোলজার্স পড়া।** প্যাটার্নটি আরও দাবি করে প্রতিটি সেশন আগের বডির ভেতরে খুলবে ও প্রতিটি বডি তার রেঞ্জের অন্তত ৬০% হবে। দিন ৫-এর ৪৬.১৫% বডি একটি **থেমে যাওয়া অগ্রগতির সতর্কতা**, আর বেশি সোলজার পেতে বডি মেঝে নামানো একমাত্র তথ্যবহুল ধারাটিই মুছে দেয়।
৫. **প্রকাশিত টেবিল থেকে নির্ভরযোগ্যতার শতাংশ উদ্ধৃত করা।** বাজার, টাইমফ্রেম, সঠিক সীমা ও প্রস্থানের নিয়ম ছাড়া "মর্নিং স্টার ৭৮% নির্ভরযোগ্য" অর্থহীন। বডি মেঝে ৬০% থেকে ৫০% করুন, শনাক্তকরণের সংখ্যা ও হিট রেট দুটোই সরবে।
৬. **অবস্থান ও ভলিউমের সমান ওজন আকৃতিকে দেওয়া।** সেটআপ স্কোর ইচ্ছাকৃতভাবে প্যাটার্নকে চারের মধ্যে এক পয়েন্ট দেয়। **আকৃতি সর্বত্র ও খুঁজে পেতে কিছুই খরচ হয় না; স্বাধীনভাবে প্রতিষ্ঠিত সাপোর্টে, ১.৫× ভলিউমে বসা এবং পরে নিশ্চিত হওয়া আকৃতি বিরল।**
৭. **প্যাটার্ন দেখার পর সাপোর্ট স্তর আঁকা।** ঘটনার পরে শনাক্ত স্তর প্রমাণ নয় — এটি প্যাটার্নকে নিজের বিপরীতেই স্কোর করা। স্টার গঠনের আগেই শেলফটি চার্টে থাকতে হবে।
৮. **ব্রেক-ইভেন উইন রেট উপেক্ষা করা।** এখানে ৪/৪ সেটআপ ৪৩.৭৫% দাবি করে। ঐ সংখ্যা ছাড়া কোনো প্যাটার্ন ট্রেডযোগ্য কি না বলা যায় না, আর তা থাকলে পুরো নির্ভরযোগ্যতার বিতর্ক পরীক্ষণযোগ্য হয়।
৯. **স্টার প্যাটার্নের স্টপ যে চওড়া তা লক্ষ না করে ট্রেড করা।** প্যাটার্নের লো নিশ্চিত প্রবেশ থেকে দুই বা তিন সেশন দূরে, যা এখানে ৭.৯১% স্টপ মানে। স্টার সেটআপ কাঠামোগতভাবেই ব্যয়বহুল আর পজিশনের আকারে তা প্রতিফলিত হতে হবে।
১০. **বেয়ারিশ রিভার্সালকে ট্রেড আইডিয়া গণ্য করা।** ডিএসই-তে শর্ট সাইড ছাড়া ইভনিং স্টার, ডার্ক ক্লাউড, বেয়ারিশ এনগাল্ফিং ও থ্রি ব্ল্যাক ক্রোজ কেবল প্রস্থান ও স্টপ শক্ত করার সংকেত। এই অধ্যায়ের অর্ধেক একটি প্রস্থান-শব্দভাণ্ডার।
১১. **অতরল কাউন্টারে গ্যাপকে তথ্য হিসেবে পড়া।** দৈনিক প্রায় ৫০ লাখ টাকার নিচে টার্নওভারে গ্যাপ সাধারণত মানে মাঝের দামগুলোতে কেউ লেনদেন করেনি — মত তীব্রভাবে বদলেছে তা নয়। অধ্যায় ২-এর স্ক্রিনই ফিল্টার।`,
    },

    tips: {
      en: `- **Write the thresholds into a formula before you look for patterns, and never edit them mid-session.** The moment a body floor moves from 60% to 55% because a setup you like almost qualified, every result you have ever produced with that screen becomes uninterpretable.
- **Compute the break-even win rate for every setup, before entry, and log it.** After fifty entries you will know whether your morning stars beat 43.75%. No published table can tell you, because none of them used your thresholds on your market.
- **Report the penetration ratio, not just pass or fail.** A morning star clearing the midpoint at 52% and one clearing it at 95% are different events, and the second is nearly an engulfing.
- **Draw your support and resistance levels at the weekend, not during the session.** A level drawn after a pattern appears is the pattern grading itself. This is the practical way to keep location honest.
- **Log the failing clause, not just the rejection.** "Three white soldiers failed: third body 46% against 60% floor" is a stalled-advance warning. A bare \`False\` is not. Chapter 27's reasons-list pattern is the fix.
- **On star setups, size from the stop, never from conviction.** The pattern's low is two or three sessions behind the confirmed entry, which routinely produces a 7–8% stop. That is not a reason to skip the setup; it is a reason to halve the shares.
- **Treat every bearish pattern in this chapter as an exit checklist.** Without a short side, that is all they can be — and exits are where most retail money is actually lost, so this is a feature.
- **Screen for liquidity before you screen for patterns.** Below roughly BDT 50 lakh daily turnover, gaps and stars are artefacts of an absent order book. Chapter 2's ADTV and spread filter runs first, always.
- **Keep a "near-miss" log alongside the detections.** The setups that failed by 30 paisa are where you will find out whether your thresholds are calibrated or merely arbitrary — and reviewing them monthly is a cheaper education than trading them.`,
      bn: `- **প্যাটার্ন খোঁজার আগে সীমাগুলো একটি ফর্মুলায় লিখুন, আর সেশনের মাঝে কখনো সম্পাদনা করবেন না।** পছন্দের একটি সেটআপ প্রায় যোগ্য হয়েছিল বলে যে মুহূর্তে বডি মেঝে ৬০% থেকে ৫৫% হয়, ঐ স্ক্রিন দিয়ে আপনার তৈরি প্রতিটি ফলাফল ব্যাখ্যার অযোগ্য হয়ে যায়।
- **প্রতিটি সেটআপের ব্রেক-ইভেন উইন রেট প্রবেশের আগে গণনা করুন ও লিপিবদ্ধ করুন।** পঞ্চাশটি প্রবেশের পর জানবেন আপনার মর্নিং স্টার ৪৩.৭৫% ছাড়ায় কি না। কোনো প্রকাশিত টেবিল তা বলতে পারে না, কারণ কোনোটিই আপনার বাজারে আপনার সীমা ব্যবহার করেনি।
- **কেবল উত্তীর্ণ বা অনুত্তীর্ণ নয়, অনুপ্রবেশ অনুপাত জানান।** ৫২%-এ মধ্যবিন্দু পার করা মর্নিং স্টার আর ৯৫%-এ পার করাটি ভিন্ন ঘটনা, আর দ্বিতীয়টি প্রায় একটি এনগাল্ফিং।
- **সাপোর্ট ও রেজিস্ট্যান্স স্তর সপ্তাহান্তে আঁকুন, সেশনের সময় নয়।** প্যাটার্ন দেখা দেওয়ার পর আঁকা স্তর মানে প্যাটার্ন নিজেকেই নম্বর দিচ্ছে। অবস্থানকে সৎ রাখার ব্যবহারিক উপায় এটিই।
- **কেবল বাতিল নয়, ব্যর্থ ধারাটি লিপিবদ্ধ করুন।** "থ্রি হোয়াইট সোলজার্স ব্যর্থ: তৃতীয় বডি ৬০% মেঝের বিপরীতে ৪৬%" একটি থেমে যাওয়া অগ্রগতির সতর্কতা। শুধু \`False\` তা নয়। অধ্যায় ২৭-এর reasons-তালিকাই সমাধান।
- **স্টার সেটআপে দৃঢ়তা নয়, স্টপ থেকে আকার ঠিক করুন।** প্যাটার্নের লো নিশ্চিত প্রবেশের দুই বা তিন সেশন পেছনে, যা নিয়মিতভাবে ৭–৮% স্টপ তৈরি করে। এটি সেটআপ এড়ানোর কারণ নয়; শেয়ার সংখ্যা অর্ধেক করার কারণ।
- **এই অধ্যায়ের প্রতিটি বেয়ারিশ প্যাটার্নকে একটি প্রস্থান চেকলিস্ট গণ্য করুন।** শর্ট সাইড ছাড়া এরা এইটুকুই হতে পারে — আর প্রস্থানেই খুচরা বিনিয়োগকারীর বেশিরভাগ টাকা আসলে হারায়, তাই এটি একটি সুবিধা।
- **প্যাটার্নের আগে তারল্যের জন্য স্ক্রিন করুন।** দৈনিক প্রায় ৫০ লাখ টাকার নিচে টার্নওভারে গ্যাপ ও স্টার অনুপস্থিত অর্ডার বইয়ের কৃত্রিম ফল। অধ্যায় ২-এর ADTV ও স্প্রেড ফিল্টার সবসময় আগে চলে।
- **শনাক্তকরণের পাশে একটি "প্রায়-মিস" খাতা রাখুন।** যে সেটআপগুলো ৩০ পয়সায় ব্যর্থ হয়েছে সেখানেই জানবেন আপনার সীমা সুবিন্যস্ত না নিছক যথেচ্ছ — আর মাসে একবার সেগুলো পর্যালোচনা ট্রেড করার চেয়ে সস্তা শিক্ষা।`,
    },

    exercises: {
      en: `1. Build the §28.6 sheet. Enter the five MIDCAP sessions and confirm you reproduce B21 = 1, B24 = 0, B28 = 0, B39 = 4, B49 = 1.29 and B50 = 43.75%.
2. Change Day 3's open from 50.30 to 49.90, leaving everything else. Which additional pattern now fires, and what happens to the setup score and the break-even win rate?
3. Pull 250 sessions of a liquid DSE name. Run the morning-star test across the whole series. How many fire? Of those, how many also pass location and volume? Report both counts — the ratio is the chapter's central claim in your own data.
4. For each detection in exercise 3, record what the next five sessions did. Compute the fraction that reached a 1.29:1 target before the stop. Compare it to 43.75%.
5. Lower the body floor from 60% to 50% and re-run exercise 3. How many more detections? Recompute the hit rate. Which direction did it move, and what does that tell you about published reliability tables?
6. Find a window in your data where the abandoned-baby test passes on bodies but fails on ranges. How many such windows are there? This is the size of the error you would have made.
7. Take every three-consecutive-green-days window in your 250 sessions. How many satisfy the full three-white-soldiers definition? What fraction of "soldiers" spotted by eye survive the open-inside-previous-body clause?
8. For a name subject to circuit limits, find a session where an engulfing pattern *would* have formed had the price not locked. How would you record that session — as a failed pattern, or as missing data?
9. Compute the break-even win rate for the same setup with the target at the prior swing high, at a 2×ATR target, and at a 3×ATR target. Which target makes the setup viable at a 40% hit rate?
10. Take a bearish evening star in your data. Assuming you held the stock, compute what exiting on the confirming close saved or cost against holding twenty more sessions.
11. In three sentences, write down what a confirmed 4/4 setup still does not tell you. Keep it with the sheet.`,
      bn: `১. §২৮.৬-এর শিট তৈরি করুন। পাঁচটি MIDCAP সেশন বসান ও নিশ্চিত করুন আপনি B21 = ১, B24 = ০, B28 = ০, B39 = ৪, B49 = ১.২৯ ও B50 = ৪৩.৭৫% পুনরুৎপাদন করছেন।
২. বাকি সব রেখে দিন ৩-এর ওপেন ৫০.৩০ থেকে ৪৯.৯০ করুন। এখন অতিরিক্ত কোন প্যাটার্ন সক্রিয় হয়, আর সেটআপ স্কোর ও ব্রেক-ইভেন উইন রেটের কী হয়?
৩. একটি তরল ডিএসই নামের ২৫০টি সেশন নিন। পুরো সিরিজে মর্নিং-স্টার পরীক্ষা চালান। কতগুলো সক্রিয় হয়? তার মধ্যে কতগুলো অবস্থান ও ভলিউমও পার করে? দুটি সংখ্যাই জানান — অনুপাতটিই আপনার নিজের ডেটায় অধ্যায়ের কেন্দ্রীয় দাবি।
৪. অনুশীলন ৩-এর প্রতিটি শনাক্তকরণের জন্য পরের পাঁচটি সেশন কী করল লিপিবদ্ধ করুন। স্টপের আগে ১.২৯:১ লক্ষ্যে পৌঁছানো ভগ্নাংশ গণনা করুন। ৪৩.৭৫%-এর সঙ্গে তুলনা করুন।
৫. বডি মেঝে ৬০% থেকে ৫০% নামিয়ে অনুশীলন ৩ আবার চালান। কতগুলো বেশি শনাক্তকরণ? হিট রেট পুনর্গণনা করুন। এটি কোন দিকে সরল, আর প্রকাশিত নির্ভরযোগ্যতার টেবিল সম্পর্কে তা কী বলে?
৬. আপনার ডেটায় এমন একটি জানালা খুঁজুন যেখানে অ্যাবানডনড-বেবি পরীক্ষা বডিতে উত্তীর্ণ কিন্তু রেঞ্জে ব্যর্থ। এমন কতগুলো জানালা আছে? আপনি যে ভুল করতেন তার আকার এটিই।
৭. আপনার ২৫০ সেশনের প্রতিটি টানা-তিন-সবুজ-দিনের জানালা নিন। কতগুলো পূর্ণ থ্রি-হোয়াইট-সোলজার্স সংজ্ঞা পূরণ করে? চোখে দেখা "সোলজার"-এর কত ভগ্নাংশ আগের-বডির-ভেতরে-খোলা ধারাটি টেকে?
৮. সার্কিট সীমার আওতাধীন একটি নামে এমন একটি সেশন খুঁজুন যেখানে দাম লক না হলে একটি এনগাল্ফিং প্যাটার্ন তৈরি *হতো*। ঐ সেশনটি আপনি কীভাবে লিপিবদ্ধ করবেন — ব্যর্থ প্যাটার্ন, না অনুপস্থিত ডেটা?
৯. একই সেটআপের ব্রেক-ইভেন উইন রেট গণনা করুন আগের সুইং হাই লক্ষ্যে, ২×ATR লক্ষ্যে, ও ৩×ATR লক্ষ্যে। কোন লক্ষ্যে ৪০% হিট রেটে সেটআপটি কার্যকর হয়?
১০. আপনার ডেটায় একটি বেয়ারিশ ইভনিং স্টার নিন। শেয়ারটি ধরে ছিলেন ধরে নিয়ে গণনা করুন নিশ্চিতকারী ক্লোজে বেরোনো আরও কুড়ি সেশন ধরে রাখার তুলনায় কত বাঁচাল বা খরচ করাল।
১১. তিন বাক্যে লিখুন একটি নিশ্চিত ৪/৪ সেটআপ এখনো আপনাকে কী বলে না। শিটের সঙ্গে রেখে দিন।`,
    },

    summary: {
      en: `- **Every named reversal pattern is a conjunction of numeric conditions.** A window satisfying five of six clauses is not a weak instance — it is not the pattern. Relaxing a threshold for one attractive setup makes every result computed with that screen uninterpretable.
- **A pattern is a hypothesis, not a signal.** The question is whether control has changed hands, and only the next close answers it. Until confirmation you are not in a trade.
- **The honest ranking is location first, volume second, shape last.** The setup score encodes this: the pattern is one point of four, because shapes are everywhere and cost nothing to find, while a shape on independently-established support, on 1.5× volume, that then confirms, is rare by construction.
- The worked case scores **4/4** — morning star, eight clauses passed, star low 0.20% from a shelf established beforehand, volume 1.83× average, confirmed by Day 4's close. Penetration into candle 1's body was **67.86%**, comfortably past the 50% floor.
- **What the detector rejects is more instructive than what it finds.** Not an abandoned baby: one true gap, not two ($H_2 = 50.60 < L_1 = 50.80$ but $> L_3 = 50.10$). Not an engulfing: $O_3$ missed by 30 paisa. Not three white soldiers: Day 4 opened five paisa too high, and **Day 5's 46.15% body is the classic stalled-advance warning** the 60% floor exists to catch.
- **Then the arithmetic, which is less flattering than the score.** Entry 53.10, stop 48.90, risk **7.91%**, reward-to-risk **1.29**, break-even win rate **43.75%**. A perfect setup must win nearly half the time merely to break even.
- **Confirmation is not free.** Entering at the pattern close gives $R:R$ 2.15 and a 31.77% break-even; waiting for confirmation gives 1.29 and 43.75%. **Confirmation must raise your hit rate by about twelve percentage points to pay for itself** — a testable claim, unlike "confirmation is safer".
- **Published reliability percentages are marketing** unless they state market, timeframe, exact thresholds and exit rule. Move the body floor from 60% to 50% and both the detection count and the hit rate change.
- **Three DSE realities bite.** Gaps on thin counters mean absent liquidity, not violent repricing. Circuit limits truncate bodies, and a limit-locked bar is missing data dressed as a data point. **And with no short side, every bearish pattern here is an exit and stop-tightening tool** — which is a simplification, not a handicap, since exits are where most retail money is lost.
- **Discipline established:** fix thresholds in writing before looking, draw levels before the pattern forms, log the failing clause and not just the rejection, compute the break-even win rate before every entry, and size like someone who does not yet know their own hit rate — because until fifty logged instances, you do not.`,
      bn: `- **প্রতিটি নামযুক্ত রিভার্সাল প্যাটার্ন সাংখ্যিক শর্তের একটি সংযোজন।** ছয়টির পাঁচটি ধারা পূরণকারী জানালা দুর্বল নমুনা নয় — তা ঐ প্যাটার্নই নয়। একটি আকর্ষণীয় সেটআপের জন্য সীমা শিথিল করলে ঐ স্ক্রিন দিয়ে গণিত প্রতিটি ফলাফল ব্যাখ্যার অযোগ্য হয়ে যায়।
- **প্যাটার্ন একটি অনুমান, সংকেত নয়।** প্রশ্নটি হলো নিয়ন্ত্রণ হাতবদল হয়েছে কি না, আর কেবল পরের ক্লোজ তার উত্তর দেয়। নিশ্চিতকরণের আগে আপনি ট্রেডে নেই।
- **সৎ ক্রমটি হলো প্রথমে অবস্থান, দ্বিতীয়ে ভলিউম, শেষে আকৃতি।** সেটআপ স্কোর এটিই সংকেতবদ্ধ করে: প্যাটার্ন চারের মধ্যে এক পয়েন্ট, কারণ আকৃতি সর্বত্র ও খুঁজে পেতে কিছুই খরচ হয় না, যেখানে স্বাধীনভাবে প্রতিষ্ঠিত সাপোর্টে, ১.৫× ভলিউমে বসা ও পরে নিশ্চিত হওয়া আকৃতি গঠনগতভাবেই বিরল।
- উদাহরণটি **৪/৪** পায় — মর্নিং স্টার, আটটি ধারা উত্তীর্ণ, স্টারের লো আগেই প্রতিষ্ঠিত একটি শেলফের ০.২০% দূরে, ভলিউম গড়ের ১.৮৩×, দিন ৪-এর ক্লোজে নিশ্চিত। ক্যান্ডেল ১-এর বডিতে অনুপ্রবেশ ছিল **৬৭.৮৬%**, ৫০% মেঝে স্বাচ্ছন্দ্যে পার।
- **ডিটেক্টর যা বাতিল করে তা যা খুঁজে পায় তার চেয়ে বেশি শিক্ষণীয়।** অ্যাবানডনড বেবি নয়: একটি প্রকৃত গ্যাপ, দুটি নয় ($H_2 = 50.60 < L_1 = 50.80$ কিন্তু $> L_3 = 50.10$)। এনগাল্ফিং নয়: $O_3$ ৩০ পয়সায় মিস। থ্রি হোয়াইট সোলজার্স নয়: দিন ৪ পাঁচ পয়সা বেশি উঁচুতে খুলেছে, আর **দিন ৫-এর ৪৬.১৫% বডি হলো থেমে যাওয়া অগ্রগতির ধ্রুপদী সতর্কতা** যা ধরতেই ৬০% মেঝেটির অস্তিত্ব।
- **তারপর পাটিগণিত, যা স্কোরের চেয়ে কম তোষামোদকারী।** প্রবেশ ৫৩.১০, স্টপ ৪৮.৯০, ঝুঁকি **৭.৯১%**, পুরস্কার-ঝুঁকি **১.২৯**, ব্রেক-ইভেন উইন রেট **৪৩.৭৫%**। একটি নিখুঁত সেটআপকে কেবল ব্রেক-ইভেন করতেই প্রায় অর্ধেক বার জিততে হবে।
- **নিশ্চিতকরণ বিনামূল্যে নয়।** প্যাটার্নের ক্লোজে ঢুকলে $R:R$ ২.১৫ ও ব্রেক-ইভেন ৩১.৭৭%; নিশ্চিতকরণের অপেক্ষায় ১.২৯ ও ৪৩.৭৫%। **নিশ্চিতকরণকে নিজের খরচ তুলতে আপনার হিট রেট প্রায় বারো শতাংশ বিন্দু বাড়াতে হবে** — একটি পরীক্ষণযোগ্য দাবি, "নিশ্চিতকরণ নিরাপদ"-এর বিপরীতে।
- **প্রকাশিত নির্ভরযোগ্যতার শতাংশ বিপণন**, যদি না তা বাজার, টাইমফ্রেম, সঠিক সীমা ও প্রস্থানের নিয়ম বলে। বডি মেঝে ৬০% থেকে ৫০% করুন, শনাক্তকরণের সংখ্যা ও হিট রেট দুটোই বদলাবে।
- **তিনটি ডিএসই বাস্তবতা কামড় দেয়।** পাতলা কাউন্টারে গ্যাপ মানে অনুপস্থিত তারল্য, তীব্র পুনর্মূল্যায়ন নয়। সার্কিট সীমা বডি কেটে দেয়, আর সীমায় আটকে থাকা বার হলো ডেটা পয়েন্টের পোশাক পরা অনুপস্থিত ডেটা। **আর শর্ট সাইড না থাকায় এখানকার প্রতিটি বেয়ারিশ প্যাটার্ন একটি প্রস্থান ও স্টপ শক্ত করার হাতিয়ার** — যা অসুবিধা নয়, একটি সরলীকরণ, যেহেতু প্রস্থানেই খুচরা বিনিয়োগকারীর বেশিরভাগ টাকা হারায়।
- **প্রতিষ্ঠিত শৃঙ্খলা:** দেখার আগে সীমা লিখিতভাবে স্থির করুন, প্যাটার্ন গঠনের আগে স্তর আঁকুন, কেবল বাতিল নয় ব্যর্থ ধারাটি লিপিবদ্ধ করুন, প্রতিটি প্রবেশের আগে ব্রেক-ইভেন উইন রেট গণনা করুন, আর এমন কারো মতো আকার নিন যিনি নিজের হিট রেট এখনো জানেন না — কারণ পঞ্চাশটি লিপিবদ্ধ নমুনার আগে আপনি জানেন না।`,
    },
  },

  interview: [
    {
      q: {
        en: 'What is the difference between a reversal pattern and a reversal signal?',
        bn: 'একটি রিভার্সাল প্যাটার্ন ও একটি রিভার্সাল সংকেতের মধ্যে পার্থক্য কী?',
      },
      a: {
        en: 'A pattern is a hypothesis and a signal is a hypothesis that has survived a test. The pattern states that control may have changed hands — the side that had been winning stopped winning for one session, or three. That is a question, and there is exactly one way to answer it, which is to wait for the next close and see whether it extends the reversal or not. On the worked example the morning star completed on day three at fifty-one ninety-five, and day four closed at fifty-three ten, which is what converted it from a shape into a tradeable event. Had day four closed below fifty-one ninety-five, the answer would have been no and I would never have been in the position. The distinction matters commercially rather than semantically, because acting on the pattern rather than the signal is the single most expensive habit in candlestick work — you take every failed hypothesis at full size. What I would add is that confirmation is not free, and I would not present it as a pure improvement: on that same setup, waiting moved the entry from fifty-one ninety-five to fifty-three ten and pushed the break-even win rate from about thirty-two percent to nearly forty-four.',
        bn: 'প্যাটার্ন একটি অনুমান আর সংকেত হলো একটি পরীক্ষা টিকে যাওয়া অনুমান। প্যাটার্ন বলে নিয়ন্ত্রণ হাতবদল হয়ে থাকতে পারে — যে পক্ষ জিতে আসছিল সে এক সেশন, বা তিন সেশনের জন্য জেতা বন্ধ করেছে। এটি একটি প্রশ্ন, আর এর উত্তর দেওয়ার ঠিক একটি উপায় আছে, তা হলো পরের ক্লোজের জন্য অপেক্ষা করা ও দেখা তা উল্টে যাওয়াটি প্রসারিত করে কি না। উদাহরণে মর্নিং স্টার তৃতীয় দিনে একান্ন নব্বইয়ে সম্পূর্ণ হয়েছে, আর চতুর্থ দিন তিপ্পান্ন দশে বন্ধ হয়েছে, যা একে একটি আকৃতি থেকে একটি ট্রেডযোগ্য ঘটনায় রূপান্তরিত করেছে। চতুর্থ দিন একান্ন নব্বইয়ের নিচে বন্ধ হলে উত্তরটি হতো না, আর আমি কখনো পজিশনে থাকতাম না। পার্থক্যটি শব্দগত নয়, বাণিজ্যিকভাবে গুরুত্বপূর্ণ, কারণ সংকেতের বদলে প্যাটার্নে কাজ করাই ক্যান্ডেলস্টিক কাজের সবচেয়ে ব্যয়বহুল অভ্যাস — আপনি প্রতিটি ব্যর্থ অনুমান পূর্ণ আকারে নেন। আমি যোগ করব যে নিশ্চিতকরণ বিনামূল্যে নয়, আর আমি একে নিখাদ উন্নতি হিসেবে উপস্থাপন করব না: ঐ একই সেটআপে অপেক্ষা প্রবেশকে একান্ন নব্বই থেকে তিপ্পান্ন দশে সরিয়েছে ও ব্রেক-ইভেন উইন রেটকে প্রায় বত্রিশ শতাংশ থেকে প্রায় চুয়াল্লিশে ঠেলেছে।',
      },
    },
    {
      q: {
        en: 'Your setup score gives the pattern one point out of four. Justify that weighting.',
        bn: 'আপনার সেটআপ স্কোর প্যাটার্নকে চারের মধ্যে এক পয়েন্ট দেয়। এই ওজনের যুক্তি দিন।',
      },
      a: {
        en: 'Because the shape is the cheapest of the four components to obtain, and price should track scarcity. Open any chart on any day and you will find several named shapes; prices wiggle, and some wiggles are shaped like patterns. What is genuinely uncommon is a shape that sits on a level established independently before it formed, on volume half again above its twenty-day average, that then confirms on the following close. If each of those legs is independently present maybe thirty to fifty percent of the time when you look at a random chart, all four co-occurring is rare by simple arithmetic, and rarity is where whatever edge exists has to live. The weighting also has a defensive purpose that I would emphasise. Give the pattern two points and the sheet starts recommending shapes in empty space on ordinary volume, which is exactly the behaviour that makes retail chart trading lose money. It is the same architecture as the fundamental scorecard in chapter twenty-five: the component that is easiest to satisfy must not be permitted to carry the verdict on its own.',
        bn: 'কারণ চারটি উপাদানের মধ্যে আকৃতিই পাওয়ার সবচেয়ে সস্তা, আর দামের উচিত দুষ্প্রাপ্যতা অনুসরণ করা। যেকোনো দিনে যেকোনো চার্ট খুলুন, কয়েকটি নামযুক্ত আকৃতি পাবেন; দাম দোলে, আর কিছু দোলার আকৃতি প্যাটার্নের মতো। যা সত্যিই অসাধারণ তা হলো এমন একটি আকৃতি যা গঠনের আগেই স্বাধীনভাবে প্রতিষ্ঠিত একটি স্তরে বসে, তার কুড়ি-দিনের গড়ের দেড় গুণ ভলিউমে, এবং পরের ক্লোজে নিশ্চিত হয়। এই ধাপগুলোর প্রতিটি যদি যথেচ্ছ চার্ট দেখলে ত্রিশ থেকে পঞ্চাশ শতাংশ সময় স্বাধীনভাবে উপস্থিত থাকে, তবে চারটিই একসঙ্গে ঘটা সরল পাটিগণিতেই বিরল, আর যে সুবিধা আছে তাকে ঐ বিরলতাতেই থাকতে হবে। ওজনটির একটি প্রতিরক্ষামূলক উদ্দেশ্যও আছে যা আমি জোর দেব। প্যাটার্নকে দুই পয়েন্ট দিন আর শিটটি সাধারণ ভলিউমে খালি জায়গায় আকৃতি সুপারিশ করতে শুরু করবে, যা ঠিক সেই আচরণ যা খুচরা চার্ট ট্রেডিংকে অর্থ হারায়। এটি অধ্যায় পঁচিশের ফান্ডামেন্টাল স্কোরকার্ডেরই স্থাপত্য: যে উপাদান পূরণ করা সবচেয়ে সহজ তাকে একা রায় বহন করার অনুমতি দেওয়া চলে না।',
      },
    },
    {
      q: {
        en: 'A colleague says morning stars are 78% reliable. How do you respond?',
        bn: 'একজন সহকর্মী বলছেন মর্নিং স্টার ৭৮% নির্ভরযোগ্য। আপনি কী বলবেন?',
      },
      a: {
        en: 'I would ask four questions before treating that as a number rather than a slogan: which market, which timeframe, what exact geometric thresholds, and what counted as success. Reliability is not a property of a shape. It is a property of a complete trading rule applied to a specific instrument set. Move the body-ratio floor from sixty percent to fifty and both the detection count and the hit rate shift, usually in opposite directions. Change the definition of success from closed higher the next day to reached two R before one R and the figure falls, often sharply, because the first definition is nearly free and the second is not. And a figure derived from the S and P five hundred in the nineteen-eighties tells you very little about a Bangladeshi mid-cap trading under circuit limits with no short side. The constructive version of my answer is that the number is obtainable, just not from a book — fix your thresholds in code before you look at any results, run them over two hundred and fifty sessions of your own names, define success as hitting your actual target before your actual stop, and count. Until then the useful number is not the reliability but the break-even win rate, which on the worked setup is forty-three point seven five percent and which you can compute before you ever place the trade.',
        bn: 'একে স্লোগান নয় একটি সংখ্যা হিসেবে গণ্য করার আগে আমি চারটি প্রশ্ন করব: কোন বাজার, কোন টাইমফ্রেম, ঠিক কোন জ্যামিতিক সীমা, আর কীসে সাফল্য ধরা হলো। নির্ভরযোগ্যতা কোনো আকৃতির ধর্ম নয়। এটি একটি নির্দিষ্ট উপকরণ-সমষ্টিতে প্রয়োগ করা একটি সম্পূর্ণ ট্রেডিং নিয়মের ধর্ম। বডি-অনুপাতের মেঝে ষাট শতাংশ থেকে পঞ্চাশে সরান আর শনাক্তকরণের সংখ্যা ও হিট রেট দুটোই সরে, সাধারণত বিপরীত দিকে। সাফল্যের সংজ্ঞা "পরদিন উঁচুতে বন্ধ" থেকে "এক R-এর আগে দুই R ছুঁয়েছে"-তে বদলান আর সংখ্যাটি পড়ে, প্রায়ই তীব্রভাবে, কারণ প্রথম সংজ্ঞাটি প্রায় বিনামূল্যের আর দ্বিতীয়টি নয়। আর উনিশশো আশির দশকের এস অ্যান্ড পি পাঁচশো থেকে পাওয়া সংখ্যা শর্ট সাইডহীন, সার্কিট সীমার অধীনে লেনদেন হওয়া একটি বাংলাদেশি মিড-ক্যাপ সম্পর্কে খুব সামান্যই বলে। আমার উত্তরের গঠনমূলক রূপটি হলো সংখ্যাটি পাওয়া সম্ভব, কেবল বই থেকে নয় — কোনো ফলাফল দেখার আগে কোডে সীমা স্থির করুন, নিজের নামগুলোর দুইশো পঞ্চাশ সেশনে চালান, সাফল্যকে প্রকৃত স্টপের আগে প্রকৃত লক্ষ্যে পৌঁছানো হিসেবে সংজ্ঞায়িত করুন, আর গুনুন। তার আগে কার্যকর সংখ্যাটি নির্ভরযোগ্যতা নয়, ব্রেক-ইভেন উইন রেট, যা উদাহরণের সেটআপে তেতাল্লিশ দশমিক সাত পাঁচ শতাংশ আর যা আপনি ট্রেড বসানোর আগেই গণনা করতে পারেন।',
      },
    },
    {
      q: {
        en: 'You detect a morning star. Why not call it an abandoned baby if it looks close?',
        bn: 'আপনি একটি মর্নিং স্টার শনাক্ত করলেন। কাছাকাছি দেখালে একে অ্যাবানডনড বেবি বলবেন না কেন?',
      },
      a: {
        en: 'Because the abandoned baby requires two true gaps and the worked window has one, and treating that as a technicality is the most flattering self-deception available in candlestick practice. A true gap means the star candle\'s entire range sits clear of the neighbouring ranges — its high below the first candle\'s low, and its high below the third candle\'s low. On the example the first condition holds, fifty point six against fifty point eight, and the second fails, because fifty point six is above the third candle\'s low of fifty point one. So there is one real gap and one body-only gap. If I test bodies instead of ranges I will find abandoned babies constantly and I will believe I am seeing a much rarer and stronger structure than I am. There is also a specifically Dhaka reason to be strict here. On a thin counter a gap frequently means nobody transacted at the intervening prices rather than that opinion repriced violently overnight, so the gap-dependent patterns are precisely the ones that degrade most on illiquid names. My practice is to screen for liquidity before running gap-dependent tests at all, and to name the pattern I actually have rather than the one I would prefer.',
        bn: 'কারণ অ্যাবানডনড বেবির জন্য দুটি প্রকৃত গ্যাপ লাগে আর উদাহরণের জানালায় একটি আছে, আর একে কারিগরি খুঁটিনাটি ভাবাই ক্যান্ডেলস্টিক চর্চার সবচেয়ে তোষামোদকারী আত্মপ্রবঞ্চনা। প্রকৃত গ্যাপ মানে স্টার ক্যান্ডেলের পুরো রেঞ্জ পাশের রেঞ্জগুলো থেকে আলাদা — এর হাই প্রথম ক্যান্ডেলের লো-র নিচে, আর এর হাই তৃতীয় ক্যান্ডেলের লো-র নিচে। উদাহরণে প্রথম শর্তটি টেকে, পঞ্চাশ দশমিক ছয় বনাম পঞ্চাশ দশমিক আট, আর দ্বিতীয়টি ব্যর্থ হয়, কারণ পঞ্চাশ দশমিক ছয় তৃতীয় ক্যান্ডেলের পঞ্চাশ দশমিক এক লো-র ওপরে। অর্থাৎ একটি প্রকৃত গ্যাপ ও একটি কেবল-বডির গ্যাপ। রেঞ্জের বদলে বডি পরীক্ষা করলে আমি অনবরত অ্যাবানডনড বেবি পাব আর বিশ্বাস করব আমি প্রকৃতের চেয়ে অনেক বিরল ও শক্তিশালী একটি কাঠামো দেখছি। এখানে কঠোর হওয়ার একটি বিশেষভাবে ঢাকাকেন্দ্রিক কারণও আছে। পাতলা কাউন্টারে গ্যাপ প্রায়ই মানে মাঝের দামগুলোতে কেউ লেনদেন করেননি, রাতারাতি মত তীব্রভাবে পুনর্মূল্যায়িত হয়েছে তা নয়, তাই গ্যাপ-নির্ভর প্যাটার্নগুলোই অতরল নামে সবচেয়ে বেশি ক্ষয়ে যায়। আমার চর্চা হলো গ্যাপ-নির্ভর পরীক্ষা আদৌ চালানোর আগে তারল্যের জন্য স্ক্রিন করা, আর যে প্যাটার্নটি আমার পছন্দ তা নয়, যেটি সত্যিই আছে সেটির নাম দেওয়া।',
      },
    },
    {
      q: {
        en: 'Walk me through the trade arithmetic on your worked morning star.',
        bn: 'আপনার উদাহরণের মর্নিং স্টারের ট্রেড পাটিগণিত ব্যাখ্যা করুন।',
      },
      a: {
        en: 'Entry is the confirming close at fifty-three ten. The stop goes twenty paisa below the star candle\'s low of forty-nine ten, so forty-eight ninety, which gives four taka twenty of risk per share, or seven point nine one percent — a wide stop, and that is structural rather than bad luck. Star patterns put their invalidation level two or three sessions behind the entry, so they are inherently expensive to stop out of. The target is the prior swing high at fifty-eight fifty, which is five taka forty of reward, giving a reward-to-risk of one point two nine. The break-even win rate is one over one plus that, which is forty-three point seven five percent. That last number is the one I would put in front of anyone evaluating the setup, because it converts a chart discussion into a testable claim: the question is no longer whether morning stars work, it is whether this setup, at this location, on this volume, reaches its target more than forty-three point seven five percent of the time. And I would be honest that nothing in the analysis answers that. Only fifty logged instances of my own rules on my own market can, and until I have them the correct response is to trade it at a size appropriate to someone who does not yet know their hit rate.',
        bn: 'প্রবেশ হলো তিপ্পান্ন দশের নিশ্চিতকারী ক্লোজ। স্টপ বসে স্টার ক্যান্ডেলের ঊনপঞ্চাশ দশ লো-র কুড়ি পয়সা নিচে, অর্থাৎ আটচল্লিশ নব্বইয়ে, যা শেয়ারপ্রতি চার টাকা কুড়ি ঝুঁকি দেয়, বা সাত দশমিক নয় এক শতাংশ — একটি চওড়া স্টপ, আর তা দুর্ভাগ্য নয়, কাঠামোগত। স্টার প্যাটার্ন তার অকার্যকরতার স্তরটি প্রবেশের দুই বা তিন সেশন পেছনে রাখে, তাই এদের স্টপ-আউট হওয়া সহজাতভাবেই ব্যয়বহুল। লক্ষ্য আগের সুইং হাই আটান্ন পঞ্চাশ, যা পাঁচ টাকা চল্লিশ পুরস্কার, অর্থাৎ পুরস্কার-ঝুঁকি এক দশমিক দুই নয়। ব্রেক-ইভেন উইন রেট হলো এক ভাগ এক যোগ ঐ সংখ্যা, অর্থাৎ তেতাল্লিশ দশমিক সাত পাঁচ শতাংশ। শেষ সংখ্যাটিই আমি সেটআপ মূল্যায়নকারী যে কারো সামনে রাখব, কারণ তা একটি চার্ট আলোচনাকে পরীক্ষণযোগ্য দাবিতে রূপান্তরিত করে: প্রশ্নটি আর মর্নিং স্টার কাজ করে কি না নয়, প্রশ্নটি হলো এই সেটআপ, এই অবস্থানে, এই ভলিউমে, তেতাল্লিশ দশমিক সাত পাঁচ শতাংশের বেশি বার তার লক্ষ্যে পৌঁছায় কি না। আর আমি সৎভাবে বলব বিশ্লেষণের কিছুই তার উত্তর দেয় না। কেবল নিজের বাজারে নিজের নিয়মের পঞ্চাশটি লিপিবদ্ধ নমুনাই পারে, আর সেগুলো না পাওয়া পর্যন্ত সঠিক প্রতিক্রিয়া হলো নিজের হিট রেট এখনো জানেন না এমন কারো উপযোগী আকারে এটি ট্রেড করা।',
      },
    },
    {
      q: {
        en: 'Half the patterns in this chapter are bearish. How do you use them on the DSE?',
        bn: 'এই অধ্যায়ের অর্ধেক প্যাটার্ন বেয়ারিশ। ডিএসই-তে আপনি সেগুলো কীভাবে ব্যবহার করেন?',
      },
      a: {
        en: 'Only as exit and stop-tightening information, because there is no functioning retail securities-borrowing market, so a bearish pattern cannot be an entry. Evening stars, dark cloud cover, bearish engulfings, three black crows and tweezer tops therefore all resolve to the same two actions: sell what I hold, or move my stop up under the pattern\'s structure. On the worked name, an evening star appeared near sixty-two two months later — a long green body, a small-bodied session gapping above it, then a heavy red candle closing below the first candle\'s midpoint on twice average volume, right under a prior high — and its entire value was in prompting an exit or a stop raise. I would push back on the framing that this is a handicap. It halves the number of decisions and it removes the most expensive way to be wrong, since a short position in a market with circuit limits and no reliable borrow is a way to be unable to exit at any price. It also puts the emphasis where retail losses actually occur. Most private investors in this market do not lose money by failing to short; they lose it by holding through a decline they were warned about, and half of this chapter is precisely a vocabulary for recognising that warning.',
        bn: 'কেবল প্রস্থান ও স্টপ শক্ত করার তথ্য হিসেবে, কারণ কার্যকর কোনো খুচরা সিকিউরিটিজ-ধার বাজার নেই, তাই বেয়ারিশ প্যাটার্ন কোনো প্রবেশ হতে পারে না। ইভনিং স্টার, ডার্ক ক্লাউড কভার, বেয়ারিশ এনগাল্ফিং, থ্রি ব্ল্যাক ক্রোজ ও টুইজার টপ তাই সবই একই দুটি কাজে গিয়ে দাঁড়ায়: যা ধরে আছি তা বিক্রি করা, বা প্যাটার্নের কাঠামোর নিচে স্টপ ওপরে তোলা। উদাহরণের নামটিতে দুই মাস পরে বাষট্টির কাছে একটি ইভনিং স্টার দেখা দিয়েছে — একটি লম্বা সবুজ বডি, তার ওপরে গ্যাপ দিয়ে ওঠা একটি ছোট-বডির সেশন, তারপর গড়ের দ্বিগুণ ভলিউমে প্রথম ক্যান্ডেলের মধ্যবিন্দুর নিচে বন্ধ হওয়া একটি ভারী লাল ক্যান্ডেল, আগের একটি হাই-র ঠিক নিচে — আর এর সম্পূর্ণ মূল্য ছিল একটি প্রস্থান বা স্টপ ওঠানোর প্ররোচনায়। এটি একটি অসুবিধা, এই উপস্থাপনার বিরোধিতা করব। এটি সিদ্ধান্তের সংখ্যা অর্ধেক করে ও ভুল হওয়ার সবচেয়ে ব্যয়বহুল পথটি সরায়, যেহেতু সার্কিট সীমাসহ ও নির্ভরযোগ্য ধার ছাড়া বাজারে শর্ট পজিশন মানে কোনো দামেই বেরোতে না পারা। এটি জোরটিও সেখানেই দেয় যেখানে খুচরা ক্ষতি সত্যিই ঘটে। এই বাজারের বেশিরভাগ ব্যক্তি বিনিয়োগকারী শর্ট করতে না পেরে টাকা হারান না; তাঁরা হারান এমন একটি পতনের মধ্য দিয়ে ধরে রেখে যার বিষয়ে তাঁদের সতর্ক করা হয়েছিল, আর এই অধ্যায়ের অর্ধেক ঠিক ঐ সতর্কতা চেনার শব্দভাণ্ডার।',
      },
    },
  ],

  quiz: [
    {
      q: {
        en: 'A reversal pattern becomes a tradeable signal only when:',
        bn: 'একটি রিভার্সাল প্যাটার্ন ট্রেডযোগ্য সংকেত হয় কেবল যখন:',
      },
      options: {
        en: [
          'The geometry is confirmed',
          'The next close extends the reversal',
          'Volume exceeds the 20-day average',
          'It appears at a round number',
        ],
        bn: [
          'জ্যামিতি নিশ্চিত হয়',
          'পরের ক্লোজ উল্টে যাওয়াটি প্রসারিত করে',
          'ভলিউম ২০-দিনের গড় ছাড়ায়',
          'এটি একটি পূর্ণসংখ্যায় দেখা দেয়',
        ],
      },
      answer: 1,
    },
    {
      q: {
        en: 'In the setup score, the pattern itself is worth:',
        bn: 'সেটআপ স্কোরে প্যাটার্নটির নিজের মূল্য:',
      },
      options: {
        en: ['1 point of 4', '2 points of 4', '3 points of 4', 'All 4 points'],
        bn: ['৪-এর মধ্যে ১ পয়েন্ট', '৪-এর মধ্যে ২ পয়েন্ট', '৪-এর মধ্যে ৩ পয়েন্ট', 'পুরো ৪ পয়েন্ট'],
      },
      answer: 0,
    },
    {
      q: {
        en: 'An abandoned baby bottom requires:',
        bn: 'একটি অ্যাবানডনড বেবি বটমের জন্য দরকার:',
      },
      options: {
        en: [
          'Two body gaps',
          'Two true gaps — high against low on both sides',
          'One true gap and heavy volume',
          'A doji as the middle candle only',
        ],
        bn: [
          'দুটি বডি গ্যাপ',
          'দুটি প্রকৃত গ্যাপ — দুই পাশেই হাই বনাম লো',
          'একটি প্রকৃত গ্যাপ ও ভারী ভলিউম',
          'কেবল মাঝের ক্যান্ডেল হিসেবে একটি doji',
        ],
      },
      answer: 1,
    },
    {
      q: {
        en: 'On the worked MIDCAP window, the break-even win rate at the confirmed entry is:',
        bn: 'উদাহরণের MIDCAP জানালায় নিশ্চিত প্রবেশে ব্রেক-ইভেন উইন রেট:',
      },
      options: {
        en: ['31.77%', '43.75%', '50.00%', '67.86%'],
        bn: ['৩১.৭৭%', '৪৩.৭৫%', '৫০.০০%', '৬৭.৮৬%'],
      },
      answer: 1,
    },
    {
      q: {
        en: 'Waiting for the confirming close instead of entering at the pattern close:',
        bn: 'প্যাটার্নের ক্লোজে না ঢুকে নিশ্চিতকারী ক্লোজের অপেক্ষা করলে:',
      },
      options: {
        en: [
          'Improves the reward-to-risk ratio',
          'Raises the required win rate by about 12 points',
          'Has no effect on the arithmetic',
          'Tightens the stop',
        ],
        bn: [
          'পুরস্কার-ঝুঁকি অনুপাত উন্নত হয়',
          'প্রয়োজনীয় উইন রেট প্রায় ১২ বিন্দু বাড়ে',
          'পাটিগণিতে কোনো প্রভাব নেই',
          'স্টপ আঁটসাঁট হয়',
        ],
      },
      answer: 1,
    },
    {
      q: {
        en: 'Three white soldiers requires each session to open:',
        bn: 'থ্রি হোয়াইট সোলজার্স দাবি করে প্রতিটি সেশন খুলবে:',
      },
      options: {
        en: [
          'Above the previous close',
          'Inside the previous body',
          'At the previous low',
          'Anywhere, provided all three are green',
        ],
        bn: [
          'আগের ক্লোজের ওপরে',
          'আগের বডির ভেতরে',
          'আগের লো-তে',
          'যেকোনো জায়গায়, তিনটিই সবুজ হলেই হলো',
        ],
      },
      answer: 1,
    },
    {
      q: {
        en: 'On Day 5 the body was 46.15% of range, below the 60% floor. This is best read as:',
        bn: 'দিন ৫-এ বডি ছিল রেঞ্জের ৪৬.১৫%, ৬০% মেঝের নিচে। এর সর্বোত্তম পাঠ:',
      },
      options: {
        en: [
          'A data error',
          'A stalled-advance warning',
          'Evidence of accumulation',
          'Irrelevant to the pattern',
        ],
        bn: [
          'একটি ডেটা ভুল',
          'থেমে যাওয়া অগ্রগতির সতর্কতা',
          'সঞ্চয়ের প্রমাণ',
          'প্যাটার্নের জন্য অপ্রাসঙ্গিক',
        ],
      },
      answer: 1,
    },
    {
      q: {
        en: 'A support level used to validate a pattern\'s location must be drawn:',
        bn: 'একটি প্যাটার্নের অবস্থান যাচাইয়ে ব্যবহৃত সাপোর্ট স্তর আঁকতে হবে:',
      },
      options: {
        en: [
          'After the pattern completes',
          'Before the pattern forms',
          'At the pattern\'s low, by definition',
          'At the nearest round number',
        ],
        bn: [
          'প্যাটার্ন সম্পূর্ণ হওয়ার পর',
          'প্যাটার্ন গঠনের আগে',
          'সংজ্ঞানুসারে প্যাটার্নের লো-তে',
          'নিকটতম পূর্ণসংখ্যায়',
        ],
      },
      answer: 1,
    },
    {
      q: {
        en: 'A published claim that "morning stars are 78% reliable" is meaningless unless it states:',
        bn: '"মর্নিং স্টার ৭৮% নির্ভরযোগ্য" — প্রকাশিত এই দাবি অর্থহীন যদি না তা বলে:',
      },
      options: {
        en: [
          'The author\'s track record',
          'Market, timeframe, exact thresholds and exit rule',
          'The number of candles examined',
          'Whether volume was rising',
        ],
        bn: [
          'লেখকের অতীত ফলাফল',
          'বাজার, টাইমফ্রেম, সঠিক সীমা ও প্রস্থানের নিয়ম',
          'পরীক্ষিত ক্যান্ডেলের সংখ্যা',
          'ভলিউম বাড়ছিল কি না',
        ],
      },
      answer: 1,
    },
    {
      q: {
        en: 'On the DSE, a confirmed bearish evening star should be used to:',
        bn: 'ডিএসই-তে একটি নিশ্চিত বেয়ারিশ ইভনিং স্টার ব্যবহার করা উচিত:',
      },
      options: {
        en: [
          'Open a short position',
          'Exit a holding or tighten the stop',
          'Average down into the decline',
          'Increase position size',
        ],
        bn: [
          'একটি শর্ট পজিশন খুলতে',
          'একটি হোল্ডিং থেকে বেরোতে বা স্টপ শক্ত করতে',
          'পতনে গড় কমাতে',
          'পজিশনের আকার বাড়াতে',
        ],
      },
      answer: 1,
    },
  ],
};
