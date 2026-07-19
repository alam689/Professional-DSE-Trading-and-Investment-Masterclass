/**
 * Chapter 27 — Candlestick Anatomy
 * Part III, Technical Analysis.
 */

export default {
  n: 27,
  tools: [],

  excelSheet: {
    filename: 'ch27-candle-anatomy-calculator.xlsx',
    sheetName: 'Candle Anatomy',
    cells: [
      { cell: 'A1', v: '— Candle Input (BDT) —' },
      { cell: 'A2', v: 'Open' }, { cell: 'B2', v: 48.2 },
      { cell: 'A3', v: 'High' }, { cell: 'B3', v: 52.1 },
      { cell: 'A4', v: 'Low' }, { cell: 'B4', v: 47.6 },
      { cell: 'A5', v: 'Close' }, { cell: 'B5', v: 51.8 },
      { cell: 'A6', v: 'Volume (shares)' }, { cell: 'B6', v: 1850000 },
      { cell: 'A7', v: '20-day Average Volume' }, { cell: 'B7', v: 620000 },
      { cell: 'A8', v: 'Previous Close' }, { cell: 'B8', v: 47.9 },
      { cell: 'A9', v: 'Circuit Band (%)' }, { cell: 'B9', v: 10 },

      { cell: 'A11', v: '— Geometry —' },
      { cell: 'A12', v: 'Total Range' }, { cell: 'B12', f: 'B3-B4' },
      { cell: 'A13', v: 'Body (absolute)' }, { cell: 'B13', f: 'ABS(B5-B2)' },
      { cell: 'A14', v: 'Direction' }, { cell: 'B14', f: 'IF(B5>B2,"BULL",IF(B5<B2,"BEAR","FLAT"))' },
      { cell: 'A15', v: 'Body Top' }, { cell: 'B15', f: 'MAX(B2,B5)' },
      { cell: 'A16', v: 'Body Bottom' }, { cell: 'B16', f: 'MIN(B2,B5)' },
      { cell: 'A17', v: 'Upper Shadow' }, { cell: 'B17', f: 'B3-B15' },
      { cell: 'A18', v: 'Lower Shadow' }, { cell: 'B18', f: 'B16-B4' },

      { cell: 'A20', v: '— Ratios —' },
      { cell: 'A21', v: 'Body % of Range' }, { cell: 'B21', f: 'IF(B12=0,0,B13/B12*100)' },
      { cell: 'A22', v: 'Upper Shadow % of Range' }, { cell: 'B22', f: 'IF(B12=0,0,B17/B12*100)' },
      { cell: 'A23', v: 'Lower Shadow % of Range' }, { cell: 'B23', f: 'IF(B12=0,0,B18/B12*100)' },
      { cell: 'A24', v: 'Check (must total 100)' }, { cell: 'B24', f: 'B21+B22+B23' },
      { cell: 'A25', v: 'Range as % of Close' }, { cell: 'B25', f: 'B12/B5*100' },
      { cell: 'A26', v: 'Volume Ratio (x 20-day avg)' }, { cell: 'B26', f: 'B6/B7' },

      { cell: 'A28', v: '— DSE Validity Gates —' },
      { cell: 'A29', v: 'Upper Limit Price' }, { cell: 'B29', f: 'B8*(1+B9/100)' },
      { cell: 'A30', v: 'Lower Limit Price' }, { cell: 'B30', f: 'B8*(1-B9/100)' },
      { cell: 'A31', v: 'Limit Touched? (1=yes)' }, { cell: 'B31', f: 'IF(OR(B3>=B29-0.005,B4<=B30+0.005),1,0)' },
      { cell: 'A32', v: 'Volume Adequate? (1=yes)' }, { cell: 'B32', f: 'IF(B26>=0.5,1,0)' },
      { cell: 'A33', v: 'READABLE? (1=yes)' }, { cell: 'B33', f: 'IF(B12=0,0,IF(AND(B31=1,B26<1),0,B32))' },

      { cell: 'A35', v: '— Classification —' },
      { cell: 'A36', v: 'NAMED FORM' },
      {
        cell: 'B36',
        f: 'IF(B12=0,"Four-price doji - non-observation",IF(B21<=5,IF(AND(B22<=10,B23>=60),"Dragonfly doji",IF(AND(B23<=10,B22>=60),"Gravestone doji",IF(AND(B22>=25,B23>=25),"Long-legged doji","Standard doji"))),IF(B21>=90,IF(B14="BULL","Bullish marubozu","Bearish marubozu"),IF(AND(B21<=35,B23>=55,B22<=15),"Hammer / Hanging Man - location decides",IF(AND(B21<=35,B22>=55,B23<=15),"Shooting Star / Inverted Hammer - location decides",IF(AND(B21<=35,B22>=20,B23>=20),"Spinning top",IF(B21>=70,IF(B14="BULL","Strong bullish body","Strong bearish body"),"Indeterminate - no named form")))))))',
      },

      { cell: 'A38', v: 'VERDICT' },
      {
        cell: 'B38',
        f: 'IF(B33=0,"DO NOT READ - zero range, limit-locked on thin volume, or volume too low",IF(B31=1,"Shape reflects the price limit, not conviction - verify against the band",IF(B26>=1.5,"Readable and volume-confirmed - now apply location (trend + level)","Readable but volume unremarkable - weight it lightly")))',
      },
    ],
  },

  objectives: {
    en: [
      'State precisely what each of the four OHLC prices records, and why the close is not just one price among four.',
      'Decompose any candle into body, upper shadow and lower shadow, and express each as a percentage of the total range.',
      'Use the body-to-range ratio as a quantitative conviction metric instead of an impression.',
      'Classify the named single-candle forms — marubozu, spinning top, the four doji variants, hammer/hanging man, shooting star/inverted hammer — by explicit numeric thresholds.',
      'Apply the DSE validity gates — circuit-limit flag and volume ratio — before reading any candle, and explain why a limit-locked bar is a non-observation.',
    ],
    bn: [
      'OHLC-এর চারটি দামের প্রতিটি ঠিক কী লিপিবদ্ধ করে তা সুনির্দিষ্টভাবে বলা, এবং ক্লোজ কেন চারটির মধ্যে কেবল একটি দাম নয় তা ব্যাখ্যা করা।',
      'যেকোনো ক্যান্ডেলকে বডি, আপার শ্যাডো ও লোয়ার শ্যাডোতে বিভাজন করা এবং প্রতিটিকে মোট রেঞ্জের শতাংশে প্রকাশ করা।',
      'ধারণার বদলে বডি-থেকে-রেঞ্জ অনুপাতকে একটি পরিমাণগত দৃঢ়তার পরিমাপ হিসেবে ব্যবহার করা।',
      'নামযুক্ত একক-ক্যান্ডেল রূপ — marubozu, spinning top, চার ধরনের doji, hammer/hanging man, shooting star/inverted hammer — সুস্পষ্ট সাংখ্যিক সীমা দিয়ে শ্রেণিবদ্ধ করা।',
      'যেকোনো ক্যান্ডেল পড়ার আগে ডিএসই বৈধতা-গেট — সার্কিট সীমার পতাকা ও ভলিউম অনুপাত — প্রয়োগ করা, এবং সীমায় আটকে থাকা বার কেন কোনো পর্যবেক্ষণই নয় তা ব্যাখ্যা করা।',
    ],
  },

  blocks: {
    theory: {
      en: `Chapter 26 established the chart types and showed why the DSE's circuit limits and thin float distort every one of them. This chapter takes the unit that Chapter 26 chose — the candle — and dismantles it.

**A candle is four numbers. Nothing more is in it, and everything read out of it must be derivable from those four numbers plus its context.** The single most common failure in technical analysis is treating a candle as a picture with a mood. It is not. It is a compressed record of a day-long auction, and it can be decompressed arithmetically.

### What each of the four prices actually records

The four are not equal in informational weight.

**Open.** The first traded price of the session. It is the settlement of everything that happened while the market was shut — overnight news, the previous close's overhang, DSE announcements posted after hours, and whatever positions people slept on badly. **The open is a consensus formed without the ability to trade on it.** In a market with a pre-opening session it is an auction price; in a market without one it is simply whoever was fastest.

**Close.** The last traded price of the session, and **the only one of the four that survives the day.** It becomes the previous close for tomorrow, which means it becomes the reference point for tomorrow's circuit band. Portfolios are marked at it. Mutual fund NAV is struck on it. Margin calls are computed from it. Index levels use it. **No institution is marked at the day's high.** This asymmetry is the whole reason candlestick analysis privileges the open-to-close relationship over the high-to-low one.

**High and Low.** These are not prices anyone *agreed* on — they are the two points at which one side stopped being able to push. The high is where buying exhausted itself; the low is where selling did. **They are failure points, not consensus points.** That distinction matters enormously: a long upper shadow is a record of buyers having reached a price and then been unable to hold it.

### The three geometric parts

$$\\text{Range} = H - L$$
$$\\text{Body} = |C - O|$$
$$\\text{Upper Shadow} = H - \\max(O, C)$$
$$\\text{Lower Shadow} = \\min(O, C) - L$$

By construction, **body + upper shadow + lower shadow = range, always.** If your three percentages do not sum to 100, you have made an arithmetic error, not found an unusual candle. Build that check into every sheet you make.

Each part measures something different:

- **The body measures net displacement.** How far the auction actually moved between its first and last print.
- **The upper shadow measures rejected upside.** Price traded there and did not stay.
- **The lower shadow measures rejected downside.** Price traded there and did not stay.

A candle with a large range and a tiny body says a great deal happened and nothing was settled. A candle with a small range and a full body says little happened but what happened was one-directional.

### Body-to-range ratio: conviction as a number

$$b = \\frac{|C - O|}{H - L}$$

**This single ratio replaces the word "strong."** It runs from 0 to 1:

| $b$ | Reading |
|---|---|
| $\\ge 0.90$ | One side controlled the session end-to-end |
| $0.70 - 0.90$ | Clear directional conviction, some contest |
| $0.35 - 0.70$ | Genuine two-sided auction, no resolution |
| $0.05 - 0.35$ | Indecision; the shadows carry the information |
| $\\le 0.05$ | No net displacement at all |

The virtue of $b$ is that it is scale-free and comparable. A BDT 0.40 body on a BDT 12 stock and a BDT 4.00 body on a BDT 120 stock are the same event, and $b$ says so where the raw taka figure does not.

### The named forms, defined as geometry

The traditional names are useful only if you attach numbers to them. Let $b$ be the body ratio, $u$ the upper-shadow ratio, $l$ the lower-shadow ratio, all as fractions of range. The thresholds below are the ones used in this chapter's Excel sheet and Python script; **they are conventions, not laws, and you should say which ones you used whenever you publish a classification.**

| Form | Definition |
|---|---|
| Four-price doji | Range $= 0$ — no trading range at all |
| Dragonfly doji | $b \\le 0.05$, $u \\le 0.10$, $l \\ge 0.60$ |
| Gravestone doji | $b \\le 0.05$, $l \\le 0.10$, $u \\ge 0.60$ |
| Long-legged doji | $b \\le 0.05$, $u \\ge 0.25$, $l \\ge 0.25$ |
| Standard doji | $b \\le 0.05$, otherwise |
| Marubozu | $b \\ge 0.90$ |
| Hammer / Hanging Man | $0.05 < b \\le 0.35$, $l \\ge 0.55$, $u \\le 0.15$ |
| Shooting Star / Inverted Hammer | $0.05 < b \\le 0.35$, $u \\ge 0.55$, $l \\le 0.15$ |
| Spinning top | $b \\le 0.35$, $u \\ge 0.20$, $l \\ge 0.20$ |
| Strong body | $b \\ge 0.70$ |
| Indeterminate | everything else |

Note what the table forces you to admit: **a large share of real candles have no name.** That is correct and healthy. A classifier that finds a pattern in every bar is not a classifier.

### The same shape, two opposite meanings

Look at the hammer and hanging man rows. **They are the identical geometry.** A small body at the top of the range with a long lower shadow and almost no upper shadow. The names differ only by where the candle sits:

- After a decline, at or near a support level, it is a **hammer** — sellers pushed price down and buyers took it all back before the close.
- After an advance, at or near a resistance level, it is a **hanging man** — the same intraday collapse, but occurring when the trend is up, which means late buyers were already being tested.
- **In the middle of a range, it is neither. It is noise with a nice shape.**

The identical point applies to shooting star and inverted hammer. **The candle contributes the shape; the trend contributes the sign; the level contributes the significance; volume contributes the weight.** Three of those four are not in the candle at all. This is why the discipline of Chapter 26 — always plot the candle against a trend and a level — is not optional garnish.

### The DSE problem: shapes the rules manufacture

Every threshold above assumes prices were free to move. **On the DSE they are not.**

A stock that opens at its previous close and rides straight to the upper circuit limit prints a textbook bullish marubozu: full body, no shadows, $b = 1.00$. **That candle is a description of the rulebook, not of conviction.** Price stopped rising because it was not permitted to rise, and the absence of an upper shadow — which normally means "buyers were never rejected" — here means "the rejection mechanism was switched off."

Worse is the limit-locked day. Price gaps to the limit, a handful of shares change hands, and the bar closes there on volume a tenth of normal. **That is not a weak signal. It is a non-observation** — the equivalent of a survey where three people answered. Its extreme case is the four-price doji, where open, high, low and close are the same number and the range is zero.

So the reading order on the DSE is fixed:

1. **Is the range zero?** If so, stop.
2. **Did the bar touch the circuit limit?** If so, the shape is partly the rule's.
3. **Is volume at least comparable to its own 20-day average?** If not, the shape is one participant's opinion.
4. *Only then* compute $b$, $u$, $l$ and name the form.
5. *Only then* ask where in the trend it sits.

Skipping straight to step 4 is what most retail chart-reading in Dhaka consists of.

### What this chapter deliberately does not do

**No multi-candle patterns.** No engulfing, no harami, no morning star, no three white soldiers. Those are Chapters 28 and 29 — reversal patterns and continuation patterns respectively. A pattern is a *relationship between candles*, and you cannot read a relationship until you can read the members. Master the single bar first; the sequences are built entirely out of the quantities defined here.`,
      bn: `অধ্যায় ২৬ চার্টের ধরনগুলো প্রতিষ্ঠা করেছে এবং দেখিয়েছে ডিএসই-র সার্কিট সীমা ও পাতলা ফ্লোট কীভাবে তাদের প্রত্যেকটিকে বিকৃত করে। এই অধ্যায় অধ্যায় ২৬ যে এককটি বেছে নিয়েছিল — ক্যান্ডেল — তাকে ভেঙে ফেলে।

**একটি ক্যান্ডেল চারটি সংখ্যা। এর ভেতরে এর বেশি কিছু নেই, আর এটি থেকে পড়া প্রতিটি জিনিস ঐ চারটি সংখ্যা ও তার প্রেক্ষাপট থেকে বের করা যেতে হবে।** টেকনিক্যাল বিশ্লেষণে সবচেয়ে সাধারণ ব্যর্থতা হলো ক্যান্ডেলকে মেজাজসহ একটি ছবি হিসেবে দেখা। এটি তা নয়। এটি সারাদিনের নিলামের একটি সংকুচিত রেকর্ড, আর একে পাটিগাণিতিকভাবে খুলে ফেলা যায়।

### চারটি দামের প্রতিটি আসলে কী লিপিবদ্ধ করে

চারটির তথ্যগত ওজন সমান নয়।

**ওপেন।** সেশনের প্রথম লেনদেনকৃত দাম। বাজার বন্ধ থাকা অবস্থায় যা কিছু ঘটেছে তার নিষ্পত্তি এটি — রাতের খবর, আগের ক্লোজের চাপ, অফিস সময়ের পরে দেওয়া ডিএসই ঘোষণা, আর যে অবস্থানগুলো নিয়ে মানুষ খারাপভাবে ঘুমিয়েছে। **ওপেন হলো এমন একটি ঐকমত্য যা তার ওপর লেনদেন করার সুযোগ ছাড়াই তৈরি হয়েছে।** প্রি-ওপেনিং সেশনসহ বাজারে এটি একটি নিলামের দাম; তা ছাড়া এটি কেবল যিনি দ্রুততম ছিলেন তাঁর দাম।

**ক্লোজ।** সেশনের শেষ লেনদেনকৃত দাম, এবং **চারটির মধ্যে একমাত্র যেটি দিনটি পেরিয়ে টিকে থাকে।** এটি আগামীকালের আগের-ক্লোজ হয়ে যায়, অর্থাৎ আগামীকালের সার্কিট ব্যান্ডের রেফারেন্স বিন্দু হয়ে যায়। পোর্টফোলিও এতেই মার্ক করা হয়। মিউচুয়াল ফান্ডের NAV এতেই নির্ধারিত হয়। মার্জিন কল এ থেকেই গণনা হয়। সূচক এটিই ব্যবহার করে। **কোনো প্রতিষ্ঠান দিনের হাই-তে মার্ক করা হয় না।** এই অসাম্যই পুরো কারণ যে কেন ক্যান্ডেলস্টিক বিশ্লেষণ হাই-থেকে-লো সম্পর্কের চেয়ে ওপেন-থেকে-ক্লোজ সম্পর্ককে অগ্রাধিকার দেয়।

**হাই ও লো।** এগুলো এমন দাম নয় যাতে কেউ *সম্মত* হয়েছে — এগুলো সেই দুটি বিন্দু যেখানে এক পক্ষ আর ঠেলতে পারেনি। হাই হলো যেখানে ক্রয় নিজেই নিঃশেষ হয়েছে; লো হলো যেখানে বিক্রয় হয়েছে। **এগুলো ব্যর্থতার বিন্দু, ঐকমত্যের বিন্দু নয়।** এই পার্থক্য প্রচণ্ড গুরুত্বপূর্ণ: একটি লম্বা আপার শ্যাডো হলো ক্রেতারা একটি দামে পৌঁছে তারপর তা ধরে রাখতে না পারার রেকর্ড।

### তিনটি জ্যামিতিক অংশ

$$\\text{Range} = H - L$$
$$\\text{Body} = |C - O|$$
$$\\text{Upper Shadow} = H - \\max(O, C)$$
$$\\text{Lower Shadow} = \\min(O, C) - L$$

গঠনগতভাবেই, **বডি + আপার শ্যাডো + লোয়ার শ্যাডো = রেঞ্জ, সবসময়।** আপনার তিনটি শতাংশ যোগ করে ১০০ না হলে আপনি পাটিগণিতে ভুল করেছেন, অস্বাভাবিক কোনো ক্যান্ডেল খুঁজে পাননি। আপনার তৈরি প্রতিটি শিটে এই যাচাইটি বসিয়ে রাখুন।

প্রতিটি অংশ ভিন্ন কিছু মাপে:

- **বডি নিট স্থানচ্যুতি মাপে।** নিলামটি তার প্রথম ও শেষ প্রিন্টের মধ্যে আসলে কতদূর সরেছে।
- **আপার শ্যাডো প্রত্যাখ্যাত ঊর্ধ্বমুখ মাপে।** দাম সেখানে লেনদেন হয়েছে এবং থাকেনি।
- **লোয়ার শ্যাডো প্রত্যাখ্যাত নিম্নমুখ মাপে।** দাম সেখানে লেনদেন হয়েছে এবং থাকেনি।

বড় রেঞ্জ ও ক্ষুদ্র বডির ক্যান্ডেল বলে অনেক কিছু ঘটেছে এবং কিছুই নিষ্পত্তি হয়নি। ছোট রেঞ্জ ও পূর্ণ বডির ক্যান্ডেল বলে সামান্য ঘটেছে কিন্তু যা ঘটেছে তা এক দিকেই।

### বডি-থেকে-রেঞ্জ অনুপাত: দৃঢ়তা একটি সংখ্যা হিসেবে

$$b = \\frac{|C - O|}{H - L}$$

**এই একটি অনুপাত "শক্তিশালী" শব্দটির জায়গা নেয়।** এটি ০ থেকে ১ পর্যন্ত চলে:

| $b$ | পাঠ |
|---|---|
| $\\ge 0.90$ | এক পক্ষ শুরু থেকে শেষ পর্যন্ত সেশন নিয়ন্ত্রণ করেছে |
| $0.70 - 0.90$ | স্পষ্ট দিকনির্দেশক দৃঢ়তা, কিছুটা প্রতিদ্বন্দ্বিতা |
| $0.35 - 0.70$ | প্রকৃত দ্বিপাক্ষিক নিলাম, কোনো নিষ্পত্তি নেই |
| $0.05 - 0.35$ | দ্বিধা; তথ্য বহন করছে শ্যাডোগুলো |
| $\\le 0.05$ | কোনো নিট স্থানচ্যুতিই নেই |

$b$-এর গুণ হলো এটি স্কেল-নিরপেক্ষ ও তুলনীয়। ১২ টাকার শেয়ারে ০.৪০ টাকার বডি আর ১২০ টাকার শেয়ারে ৪.০০ টাকার বডি একই ঘটনা, আর $b$ তা বলে যেখানে কাঁচা টাকার অঙ্ক বলে না।

### নামযুক্ত রূপগুলো, জ্যামিতি হিসেবে সংজ্ঞায়িত

প্রচলিত নামগুলো কেবল তখনই কাজে লাগে যখন আপনি তাদের সঙ্গে সংখ্যা জুড়ে দেন। ধরুন $b$ বডি অনুপাত, $u$ আপার-শ্যাডো অনুপাত, $l$ লোয়ার-শ্যাডো অনুপাত, সবই রেঞ্জের ভগ্নাংশ হিসেবে। নিচের সীমাগুলোই এই অধ্যায়ের Excel শিট ও Python স্ক্রিপ্টে ব্যবহৃত; **এগুলো প্রথা, আইন নয়, আর কোনো শ্রেণিবিন্যাস প্রকাশ করার সময় আপনি কোনটি ব্যবহার করেছেন তা বলা উচিত।**

| রূপ | সংজ্ঞা |
|---|---|
| Four-price doji | Range $= 0$ — কোনো লেনদেনের পরিসরই নেই |
| Dragonfly doji | $b \\le 0.05$, $u \\le 0.10$, $l \\ge 0.60$ |
| Gravestone doji | $b \\le 0.05$, $l \\le 0.10$, $u \\ge 0.60$ |
| Long-legged doji | $b \\le 0.05$, $u \\ge 0.25$, $l \\ge 0.25$ |
| Standard doji | $b \\le 0.05$, অন্যথায় |
| Marubozu | $b \\ge 0.90$ |
| Hammer / Hanging Man | $0.05 < b \\le 0.35$, $l \\ge 0.55$, $u \\le 0.15$ |
| Shooting Star / Inverted Hammer | $0.05 < b \\le 0.35$, $u \\ge 0.55$, $l \\le 0.15$ |
| Spinning top | $b \\le 0.35$, $u \\ge 0.20$, $l \\ge 0.20$ |
| Strong body | $b \\ge 0.70$ |
| Indeterminate | বাকি সব |

টেবিলটি আপনাকে যা স্বীকার করতে বাধ্য করে তা লক্ষ করুন: **বাস্তব ক্যান্ডেলের বড় একটি অংশের কোনো নাম নেই।** এটিই সঠিক ও সুস্থ। যে শ্রেণিবিন্যাসকারী প্রতিটি বারে প্যাটার্ন খুঁজে পায় সে শ্রেণিবিন্যাসকারী নয়।

### একই আকার, দুটি বিপরীত অর্থ

Hammer ও Hanging Man সারি দুটি দেখুন। **এরা অভিন্ন জ্যামিতি।** রেঞ্জের ওপরের দিকে ছোট বডি, লম্বা লোয়ার শ্যাডো, আর প্রায় কোনো আপার শ্যাডো নেই। নাম আলাদা হয় কেবল ক্যান্ডেলটি কোথায় বসে আছে তার ভিত্তিতে:

- পতনের পরে, সাপোর্ট স্তরে বা তার কাছে, এটি **hammer** — বিক্রেতারা দাম নিচে ঠেলেছিল আর ক্রেতারা ক্লোজের আগে পুরোটা ফিরিয়ে নিয়েছে।
- উত্থানের পরে, রেজিস্ট্যান্স স্তরে বা তার কাছে, এটি **hanging man** — একই ইন্ট্রাডে ধস, কিন্তু ঘটছে যখন ট্রেন্ড ঊর্ধ্বমুখী, অর্থাৎ দেরিতে আসা ক্রেতারা ইতিমধ্যেই পরীক্ষার মুখে।
- **রেঞ্জের মাঝখানে এটি কোনোটিই নয়। এটি সুন্দর আকারের নয়েজ।**

একই কথা shooting star ও inverted hammer-এর ক্ষেত্রে খাটে। **ক্যান্ডেল দেয় আকার; ট্রেন্ড দেয় চিহ্ন; স্তর দেয় তাৎপর্য; ভলিউম দেয় ওজন।** এই চারটির তিনটিই ক্যান্ডেলের ভেতরে নেই। এ কারণেই অধ্যায় ২৬-এর শৃঙ্খলা — ক্যান্ডেলকে সবসময় একটি ট্রেন্ড ও একটি স্তরের বিপরীতে আঁকুন — ঐচ্ছিক সাজসজ্জা নয়।

### ডিএসই সমস্যা: নিয়ম যে আকার তৈরি করে

ওপরের প্রতিটি সীমা ধরে নেয় দাম চলতে স্বাধীন ছিল। **ডিএসই-তে তা নয়।**

যে শেয়ার আগের ক্লোজে খুলে সোজা উপরের সার্কিট সীমায় ওঠে সে পাঠ্যবইয়ের bullish marubozu প্রিন্ট করে: পূর্ণ বডি, কোনো শ্যাডো নেই, $b = 1.00$। **ঐ ক্যান্ডেল নিয়মপুস্তকের বর্ণনা, দৃঢ়তার নয়।** দাম বাড়া থেমেছে কারণ তাকে বাড়তে দেওয়া হয়নি, আর আপার শ্যাডোর অনুপস্থিতি — যা সাধারণত মানে "ক্রেতারা কখনো প্রত্যাখ্যাত হয়নি" — এখানে মানে "প্রত্যাখ্যানের ব্যবস্থাটিই বন্ধ ছিল।"

আরও খারাপ সীমায় আটকে থাকা দিন। দাম গ্যাপ দিয়ে সীমায় যায়, মুষ্টিমেয় শেয়ার হাতবদল হয়, আর বার স্বাভাবিকের এক-দশমাংশ ভলিউমে সেখানেই বন্ধ হয়। **এটি দুর্বল সংকেত নয়। এটি কোনো পর্যবেক্ষণই নয়** — এমন একটি জরিপের সমতুল্য যেখানে তিনজন উত্তর দিয়েছেন। এর চরম রূপ four-price doji, যেখানে ওপেন, হাই, লো ও ক্লোজ একই সংখ্যা এবং রেঞ্জ শূন্য।

তাই ডিএসই-তে পড়ার ক্রমটি নির্দিষ্ট:

১. **রেঞ্জ কি শূন্য?** হলে থামুন।
২. **বার কি সার্কিট সীমা স্পর্শ করেছে?** করলে আকারটির একাংশ নিয়মের।
৩. **ভলিউম কি অন্তত তার নিজের ২০-দিনের গড়ের কাছাকাছি?** না হলে আকারটি একজন অংশগ্রহণকারীর মতামত।
৪. *কেবল তখনই* $b$, $u$, $l$ গণনা করুন ও রূপটির নাম দিন।
৫. *কেবল তখনই* জিজ্ঞেস করুন এটি ট্রেন্ডের কোথায় বসে আছে।

সরাসরি ধাপ ৪-এ লাফিয়ে যাওয়াই ঢাকার বেশিরভাগ খুচরা চার্ট-পাঠের সারাংশ।

### এই অধ্যায় ইচ্ছাকৃতভাবে যা করে না

**কোনো বহু-ক্যান্ডেল প্যাটার্ন নয়।** কোনো engulfing নেই, harami নেই, morning star নেই, three white soldiers নেই। ওগুলো অধ্যায় ২৮ ও ২৯ — যথাক্রমে রিভার্সাল প্যাটার্ন ও কন্টিনিউয়েশন প্যাটার্ন। প্যাটার্ন হলো *ক্যান্ডেলগুলোর মধ্যেকার সম্পর্ক*, আর সদস্যদের পড়তে না পারলে সম্পর্ক পড়া যায় না। আগে একক বার আয়ত্ত করুন; ক্রমগুলো সম্পূর্ণভাবে এখানে সংজ্ঞায়িত রাশিগুলো দিয়েই গড়া।`,
    },

    simple: {
      en: `Think of one trading day as a tug-of-war that lasts from ten in the morning until half past two.

At the end of the day, someone writes down four things: where the rope was when the contest started (the **open**), the furthest one team dragged it (the **high**), the furthest the other team dragged it (the **low**), and where it finally stopped (the **close**).

A candle is just a drawing of those four numbers.

### The three parts

The thick part in the middle is the **body**. It stretches from the open to the close. It tells you how far the rope actually moved by the end — the net result.

The thin lines sticking out are the **shadows** (some people call them wicks). The upper shadow reaches the high; the lower shadow reaches the low.

**Here is the important part.** The shadows are not decoration. A long upper shadow means the rope *did* get dragged that far up — and then got dragged all the way back. Somebody pushed and failed. The shadow is a record of a failed push.

### Which number matters most

All four are useful, but the close is special.

The close is the price everything is measured against. Your broker values your account at the close. Tomorrow's price limit is calculated from today's close. The index is built from closes. **Nobody's account is ever valued at the day's high**, no matter how exciting the day's high was.

That is why a candle where the close finished near the top is treated as strong, and one where the close finished near the bottom is treated as weak — even if both had exactly the same high and low.

### How big is the body?

Instead of saying a candle "looks strong," measure it. Divide the body by the whole range.

If the body is 80% of the range, one side won clearly. If the body is 3% of the range, the day was a fight that ended in a draw — and the shadows will tell you where the fighting happened.

**This one number does most of the work.** It replaces adjectives with arithmetic.

### And a warning specific to Dhaka

On the DSE a share is not allowed to move more than a set percentage in a day. If a share runs straight up and hits that ceiling, the drawing looks perfect — a long solid body, no upper shadow at all.

It looks like the buyers were never once pushed back. **They were never pushed back because nobody was allowed to trade above that price.** The beautiful candle is a picture of the rule, not of the buyers.

Worse still: sometimes the price jumps to the ceiling and then almost nothing trades all day. A few thousand shares. The candle looks decisive and it is based on almost no information at all.

So before you read any candle on a DSE chart, ask two questions: **did it hit the limit, and did anyone actually trade?** If the answer is "yes it hit the limit" and "no, hardly anyone traded," then there is nothing to read. Turn the page.

### One last thing

The same shape can mean opposite things depending on where it appears. A small body with a long tail underneath is encouraging after a long fall and worrying after a long rise. It is the same drawing. **The chart around it supplies the meaning.**`,
      bn: `একটি লেনদেনের দিনকে ভাবুন সকাল দশটা থেকে আড়াইটা পর্যন্ত চলা একটি দড়ি-টানাটানি হিসেবে।

দিন শেষে কেউ চারটি জিনিস লিখে রাখে: প্রতিযোগিতা শুরুর সময় দড়ি কোথায় ছিল (**ওপেন**), এক দল সবচেয়ে দূরে যতটা টেনেছে (**হাই**), অন্য দল সবচেয়ে দূরে যতটা টেনেছে (**লো**), আর শেষে কোথায় থেমেছে (**ক্লোজ**)।

ক্যান্ডেল হলো ঐ চারটি সংখ্যার একটি ছবি মাত্র।

### তিনটি অংশ

মাঝখানের মোটা অংশটি **বডি**। এটি ওপেন থেকে ক্লোজ পর্যন্ত বিস্তৃত। এটি বলে দিন শেষে দড়ি আসলে কতটা সরল — নিট ফলাফল।

বেরিয়ে থাকা সরু রেখাগুলো **শ্যাডো** (কেউ কেউ উইক বলেন)। আপার শ্যাডো হাই পর্যন্ত পৌঁছায়; লোয়ার শ্যাডো লো পর্যন্ত।

**এবার গুরুত্বপূর্ণ অংশ।** শ্যাডো সাজসজ্জা নয়। লম্বা আপার শ্যাডো মানে দড়ি সত্যিই ততটা উপরে *গিয়েছিল* — এবং তারপর পুরোটা ফিরে এসেছে। কেউ ঠেলেছিল এবং ব্যর্থ হয়েছে। শ্যাডো একটি ব্যর্থ ধাক্কার রেকর্ড।

### কোন সংখ্যাটি সবচেয়ে গুরুত্বপূর্ণ

চারটিই কাজে লাগে, কিন্তু ক্লোজ বিশেষ।

ক্লোজই সেই দাম যার বিপরীতে সবকিছু মাপা হয়। আপনার ব্রোকার ক্লোজে আপনার হিসাব মূল্যায়ন করেন। আগামীকালের দামের সীমা আজকের ক্লোজ থেকে গণনা হয়। সূচক ক্লোজ দিয়ে তৈরি। **কারও হিসাব কখনো দিনের হাই-তে মূল্যায়ন হয় না**, দিনের হাই যতই উত্তেজনাকর হোক।

এ কারণেই যে ক্যান্ডেলের ক্লোজ ওপরের দিকে শেষ হয় তাকে শক্তিশালী ধরা হয়, আর যেটির ক্লোজ নিচের দিকে শেষ হয় তাকে দুর্বল — এমনকি দুটির হাই ও লো হুবহু এক হলেও।

### বডি কত বড়?

ক্যান্ডেল "শক্তিশালী দেখাচ্ছে" না বলে মেপে ফেলুন। বডিকে পুরো রেঞ্জ দিয়ে ভাগ করুন।

বডি যদি রেঞ্জের ৮০% হয়, এক পক্ষ স্পষ্টভাবে জিতেছে। বডি যদি রেঞ্জের ৩% হয়, দিনটি ছিল একটি লড়াই যা অমীমাংসিত শেষ হয়েছে — আর শ্যাডোগুলো বলবে লড়াইটা কোথায় হয়েছিল।

**এই একটি সংখ্যাই বেশিরভাগ কাজ করে।** এটি বিশেষণের বদলে পাটিগণিত বসায়।

### আর ঢাকার জন্য নির্দিষ্ট একটি সতর্কতা

ডিএসই-তে একটি শেয়ার দিনে নির্ধারিত শতাংশের বেশি নড়তে পারে না। কোনো শেয়ার সোজা উঠে ঐ ছাদে ঠেকলে ছবিটি নিখুঁত দেখায় — লম্বা ভরাট বডি, আপার শ্যাডো একেবারেই নেই।

দেখে মনে হয় ক্রেতাদের একবারও পিছু হটতে হয়নি। **তাদের পিছু হটতে হয়নি কারণ ঐ দামের ওপরে কাউকে লেনদেন করতেই দেওয়া হয়নি।** সুন্দর ক্যান্ডেলটি নিয়মের ছবি, ক্রেতাদের নয়।

আরও খারাপ: কখনো দাম লাফিয়ে ছাদে ওঠে আর সারাদিন প্রায় কিছুই লেনদেন হয় না। কয়েক হাজার শেয়ার। ক্যান্ডেলটি নির্ণায়ক দেখায় অথচ এটি প্রায় কোনো তথ্যের ওপরই দাঁড়ানো নয়।

তাই ডিএসই চার্টে কোনো ক্যান্ডেল পড়ার আগে দুটি প্রশ্ন করুন: **এটি কি সীমা স্পর্শ করেছে, আর কেউ কি সত্যিই লেনদেন করেছে?** উত্তর যদি হয় "হ্যাঁ সীমা ছুঁয়েছে" ও "না, প্রায় কেউ লেনদেন করেনি", তবে পড়ার কিছু নেই। পাতা উল্টান।

### শেষ একটি কথা

একই আকার কোথায় দেখা যাচ্ছে তার ওপর নির্ভর করে বিপরীত অর্থ দিতে পারে। নিচে লম্বা লেজসহ ছোট বডি দীর্ঘ পতনের পরে উৎসাহজনক আর দীর্ঘ উত্থানের পরে উদ্বেগজনক। ছবি একই। **অর্থ জোগায় তার চারপাশের চার্ট।**`,
    },

    example: {
      en: `### One week of candles on a mid-cap DSE share

Take an illustrative mid-cap manufacturer — call it **RANGPUR CERAMICS**, a stand-in for the kind of name that trades a few hundred thousand shares a day and appears on every "hot stock" list twice a year. Assume the applicable circuit band is 10% of the previous close throughout.

| Day | Open | High | Low | Close | Volume | 20d Avg Vol |
|---|---|---|---|---|---|---|
| Mon | 44.00 | 47.30 | 43.80 | 47.30 | 210,000 | 620,000 |
| Tue | 47.60 | 48.10 | 46.20 | 46.50 | 540,000 | 620,000 |
| Wed | 46.40 | 49.90 | 45.10 | 46.55 | 1,320,000 | 620,000 |
| Thu | 46.60 | 47.05 | 46.30 | 47.90 | 480,000 | 620,000 |
| Sun | 48.20 | 52.10 | 47.60 | 51.80 | 1,850,000 | 620,000 |

Work through them one at a time. **The point is not that the sequence predicts anything — it is that four of these five days say something entirely different from what they look like.**

### Monday: the candle that is not a candle

Previous close was 43.00. The 10% band gives an upper limit of $43.00 \\times 1.10 = 47.30$.

Open 44.00, close 47.30, high 47.30, low 43.80.

- Range $= 47.30 - 43.80 = 3.50$
- Body $= 47.30 - 44.00 = 3.30$
- Upper shadow $= 47.30 - 47.30 = 0.00$
- $b = 3.30 / 3.50 = 94.29\\%$

By the thresholds, $b \\ge 0.90$ makes this a **bullish marubozu** — the strongest single-candle form there is. A retail reader posts it in a Telegram group with three fire emojis.

**Now apply the gates.** The high equals the upper circuit limit exactly. And volume is 210,000 against a 20-day average of 620,000 — a ratio of **0.34×.**

So: the stock rose to the maximum the rules permitted, on one-third of its normal turnover, and printed a shape whose defining feature — the absence of an upper shadow — exists only because trading above 47.30 was prohibited. **There is no buying conviction demonstrated here. There is a rule and a small number of orders.**

### Tuesday: the honest small candle

Range $= 48.10 - 46.20 = 1.90$. Body $= |46.50 - 47.60| = 1.10$, bearish. Upper shadow $= 48.10 - 47.60 = 0.50$. Lower shadow $= 46.50 - 46.20 = 0.30$.

$b = 1.10/1.90 = 57.89\\%$, $u = 26.32\\%$, $l = 15.79\\%$. Sum: 100.00%. ✓

No named form — $b$ sits in the 0.35–0.70 band. Volume 540,000, ratio 0.87×.

**This is the most informative candle of the week so far, precisely because it has no name.** Monday's limit-up did not hold. The stock opened above Monday's close, could not sustain it, and gave back most of the gain on near-normal volume. A genuine two-sided auction occurred, and the sellers had the better of it.

### Wednesday: a spinning top on real volume

Range $= 49.90 - 45.10 = 4.80$. Body $= |46.55 - 46.40| = 0.15$, marginally bullish. Upper shadow $= 49.90 - 46.55 = 3.35$. Lower shadow $= 46.40 - 45.10 = 1.30$.

$b = 0.15/4.80 = 3.13\\%$ — that is $\\le 5\\%$, so this is in the **doji family.**

Check the sub-types: $u = 69.79\\%$, $l = 27.08\\%$. Not dragonfly ($u > 10\\%$). Not gravestone ($l > 10\\%$). Long-legged requires $u \\ge 25\\%$ and $l \\ge 25\\%$ — both hold. **Long-legged doji.**

Volume 1,320,000 = **2.13×** average. Range as a share of close: $4.80/46.55 = 10.31\\%$ — a very wide day.

| Wednesday | Value |
|---|---|
| Range | 4.80 |
| Body | 0.15 |
| Upper shadow | 3.35 (69.79%) |
| Lower shadow | 1.30 (27.08%) |
| Body ratio | 3.13% |
| Volume ratio | 2.13× |

**This is what a real fight looks like.** Twice the normal volume, a 10% intraday swing, price traded up to 49.90 and back down to 45.10, and at the bell the stock was fifteen paisa above where it opened. Enormous activity, zero resolution. The 69.79% upper shadow says the attempt on 49.90 was comprehensively rejected.

### Thursday: check your data

Open 46.60, high 47.05, low 46.30, close 47.90.

**The close is above the high. This is impossible.** By construction $L \\le \\min(O,C) \\le \\max(O,C) \\le H$. A close outside the high–low range means bad data — a corporate action not adjusted, a mis-scraped field, a special block trade recorded outside the regular range, or a vendor error.

**Build this validation into every tool you write.** The Python script in this chapter raises on it. A silent classifier would have computed a negative upper shadow of $47.05 - 47.90 = -0.85$ and returned a confident nonsense label. **The most expensive bug in technical analysis is the one that does not crash.**

Assume the correct close was 46.90. Then range $= 0.75$, body $= 0.30$, $u = 0.15$, $l = 0.30$; $b = 40.00\\%$, $u = 20.00\\%$, $l = 40.00\\%$. Unnamed, thin range, volume 0.77×. A nothing day, correctly labelled as one.

### Sunday: the candle you can actually read

Previous close 47.90. Upper limit $= 47.90 \\times 1.10 = 52.69$. Lower limit $= 43.11$.

Open 48.20, high 52.10, low 47.60, close 51.80.

- Range $= 4.50$, Body $= 3.60$ bullish, Upper shadow $= 0.30$, Lower shadow $= 0.60$
- $b = 80.00\\%$, $u = 6.67\\%$, $l = 13.33\\%$ — sums to 100.00% ✓
- High 52.10 versus limit 52.69: **not touched**, and short of it by 0.59, or 1.12%
- Volume 1,850,000 = **2.98×** average

**Every gate passes.** The stock was free to trade higher and chose to close 0.59 below the ceiling on triple its normal volume. $b = 80\\%$ puts it in the strong-body band without reaching marubozu. The 13.33% lower shadow records an early dip that was bought.

Compare it with Monday. Both were up days. Both look bullish. **Monday's had a bigger body ratio and is worth nothing; Sunday's is smaller and is the only candle of the week that carries information.** The difference is entirely in the gates, not in the shape.

### What the week cost or earned

A trader who bought Monday's "marubozu" at 47.30 was underwater by Tuesday's close at 46.50 — down 1.69% — and spent Wednesday watching a 10% intraday swing decide nothing. A trader who waited for a candle that passed the gates entered on Sunday's close at 51.80, later and higher, **with an actual auction behind the entry rather than a rule.**

That is the trade-off this chapter asks you to accept: **you will always enter later than the person reading shapes, and you will enter far less often on shapes that were manufactured by the circuit band.**`,
      bn: `### একটি মিড-ক্যাপ ডিএসই শেয়ারে এক সপ্তাহের ক্যান্ডেল

একটি উদাহরণমূলক মিড-ক্যাপ উৎপাদক নিন — নাম দিন **RANGPUR CERAMICS**, সেই ধরনের নামের প্রতিনিধি যা দিনে কয়েক লক্ষ শেয়ার লেনদেন করে আর বছরে দুবার প্রতিটি "হট স্টক" তালিকায় ওঠে। ধরে নিন প্রযোজ্য সার্কিট ব্যান্ড সারা সময় আগের ক্লোজের ১০%।

| দিন | ওপেন | হাই | লো | ক্লোজ | ভলিউম | ২০-দিনের গড় |
|---|---|---|---|---|---|---|
| সোম | ৪৪.০০ | ৪৭.৩০ | ৪৩.৮০ | ৪৭.৩০ | ২,১০,০০০ | ৬,২০,০০০ |
| মঙ্গল | ৪৭.৬০ | ৪৮.১০ | ৪৬.২০ | ৪৬.৫০ | ৫,৪০,০০০ | ৬,২০,০০০ |
| বুধ | ৪৬.৪০ | ৪৯.৯০ | ৪৫.১০ | ৪৬.৫৫ | ১৩,২০,০০০ | ৬,২০,০০০ |
| বৃহঃ | ৪৬.৬০ | ৪৭.০৫ | ৪৬.৩০ | ৪৭.৯০ | ৪,৮০,০০০ | ৬,২০,০০০ |
| রবি | ৪৮.২০ | ৫২.১০ | ৪৭.৬০ | ৫১.৮০ | ১৮,৫০,০০০ | ৬,২০,০০০ |

একটি একটি করে দেখুন। **মূল কথা এই নয় যে ক্রমটি কিছু পূর্বাভাস দেয় — মূল কথা হলো এই পাঁচ দিনের চারটি দেখতে যা মনে হয় তার থেকে সম্পূর্ণ ভিন্ন কিছু বলে।**

### সোমবার: যে ক্যান্ডেল আসলে ক্যান্ডেল নয়

আগের ক্লোজ ছিল ৪৩.০০। ১০% ব্যান্ডে উপরের সীমা $43.00 \\times 1.10 = 47.30$।

ওপেন ৪৪.০০, ক্লোজ ৪৭.৩০, হাই ৪৭.৩০, লো ৪৩.৮০।

- Range $= 47.30 - 43.80 = 3.50$
- Body $= 47.30 - 44.00 = 3.30$
- Upper shadow $= 47.30 - 47.30 = 0.00$
- $b = 3.30 / 3.50 = 94.29\\%$

সীমা অনুযায়ী $b \\ge 0.90$ একে **bullish marubozu** বানায় — একক ক্যান্ডেলের সবচেয়ে শক্তিশালী রূপ। একজন খুচরা পাঠক তিনটি আগুনের ইমোজিসহ টেলিগ্রাম গ্রুপে পোস্ট করেন।

**এবার গেটগুলো প্রয়োগ করুন।** হাই ঠিক উপরের সার্কিট সীমার সমান। আর ভলিউম ২,১০,০০০, ২০-দিনের গড় ৬,২০,০০০-এর বিপরীতে — অনুপাত **০.৩৪×।**

অর্থাৎ: শেয়ারটি নিয়ম যতটা অনুমতি দেয় ততটাই উঠেছে, তার স্বাভাবিক লেনদেনের এক-তৃতীয়াংশে, আর এমন একটি আকার প্রিন্ট করেছে যার সংজ্ঞায়ক বৈশিষ্ট্য — আপার শ্যাডোর অনুপস্থিতি — কেবল এ কারণেই আছে যে ৪৭.৩০-এর ওপরে লেনদেন নিষিদ্ধ ছিল। **এখানে কোনো ক্রয়-দৃঢ়তা প্রদর্শিত হয়নি। আছে একটি নিয়ম আর অল্প কিছু অর্ডার।**

### মঙ্গলবার: সৎ ছোট ক্যান্ডেল

Range $= 48.10 - 46.20 = 1.90$। Body $= |46.50 - 47.60| = 1.10$, বেয়ারিশ। Upper shadow $= 48.10 - 47.60 = 0.50$। Lower shadow $= 46.50 - 46.20 = 0.30$।

$b = 1.10/1.90 = 57.89\\%$, $u = 26.32\\%$, $l = 15.79\\%$। যোগফল: ১০০.০০%। ✓

কোনো নামযুক্ত রূপ নেই — $b$ ০.৩৫–০.৭০ ব্যান্ডে। ভলিউম ৫,৪০,০০০, অনুপাত ০.৮৭×।

**এখন পর্যন্ত সপ্তাহের সবচেয়ে তথ্যবহুল ক্যান্ডেল এটিই, ঠিক এ কারণেই যে এর কোনো নাম নেই।** সোমবারের লিমিট-আপ টেকেনি। শেয়ারটি সোমবারের ক্লোজের ওপরে খুলেছে, তা ধরে রাখতে পারেনি, আর প্রায়-স্বাভাবিক ভলিউমে বেশিরভাগ লাভ ফিরিয়ে দিয়েছে। একটি প্রকৃত দ্বিপাক্ষিক নিলাম হয়েছে, আর তাতে বিক্রেতারা এগিয়ে ছিল।

### বুধবার: প্রকৃত ভলিউমে একটি spinning top

Range $= 49.90 - 45.10 = 4.80$। Body $= |46.55 - 46.40| = 0.15$, সামান্য বুলিশ। Upper shadow $= 49.90 - 46.55 = 3.35$। Lower shadow $= 46.40 - 45.10 = 1.30$।

$b = 0.15/4.80 = 3.13\\%$ — এটি $\\le 5\\%$, তাই এটি **doji পরিবারে।**

উপ-ধরনগুলো দেখুন: $u = 69.79\\%$, $l = 27.08\\%$। Dragonfly নয় ($u > 10\\%$)। Gravestone নয় ($l > 10\\%$)। Long-legged-এর জন্য $u \\ge 25\\%$ ও $l \\ge 25\\%$ দরকার — দুটোই মেলে। **Long-legged doji।**

ভলিউম ১৩,২০,০০০ = গড়ের **২.১৩×**। ক্লোজের অনুপাতে রেঞ্জ: $4.80/46.55 = 10.31\\%$ — অত্যন্ত চওড়া দিন।

| বুধবার | মান |
|---|---|
| Range | ৪.৮০ |
| Body | ০.১৫ |
| আপার শ্যাডো | ৩.৩৫ (৬৯.৭৯%) |
| লোয়ার শ্যাডো | ১.৩০ (২৭.০৮%) |
| বডি অনুপাত | ৩.১৩% |
| ভলিউম অনুপাত | ২.১৩× |

**একটি প্রকৃত লড়াই এমনই দেখায়।** স্বাভাবিকের দ্বিগুণ ভলিউম, ১০% ইন্ট্রাডে দোলা, দাম ৪৯.৯০ পর্যন্ত উঠে আবার ৪৫.১০-এ নেমেছে, আর ঘণ্টা বাজার সময় শেয়ারটি যেখানে খুলেছিল তার পনেরো পয়সা ওপরে। বিপুল কর্মকাণ্ড, শূন্য নিষ্পত্তি। ৬৯.৭৯% আপার শ্যাডো বলে ৪৯.৯০-এ চেষ্টাটি সম্পূর্ণভাবে প্রত্যাখ্যাত হয়েছে।

### বৃহস্পতিবার: আপনার ডেটা যাচাই করুন

ওপেন ৪৬.৬০, হাই ৪৭.০৫, লো ৪৬.৩০, ক্লোজ ৪৭.৯০।

**ক্লোজ হাই-এর ওপরে। এটি অসম্ভব।** গঠনগতভাবেই $L \\le \\min(O,C) \\le \\max(O,C) \\le H$। হাই–লো পরিসরের বাইরে ক্লোজ মানে খারাপ ডেটা — অসমন্বিত কর্পোরেট অ্যাকশন, ভুলভাবে সংগৃহীত ফিল্ড, নিয়মিত পরিসরের বাইরে রেকর্ড হওয়া বিশেষ ব্লক ট্রেড, বা ভেন্ডরের ত্রুটি।

**আপনার লেখা প্রতিটি টুলে এই যাচাই বসান।** এই অধ্যায়ের Python স্ক্রিপ্ট এতে ব্যতিক্রম তোলে। নীরব শ্রেণিবিন্যাসকারী $47.05 - 47.90 = -0.85$ ঋণাত্মক আপার শ্যাডো গণনা করে আত্মবিশ্বাসী অর্থহীন লেবেল ফেরত দিত। **টেকনিক্যাল বিশ্লেষণে সবচেয়ে ব্যয়বহুল বাগ সেটিই যা ক্র্যাশ করে না।**

ধরুন সঠিক ক্লোজ ছিল ৪৬.৯০। তাহলে range $= 0.75$, body $= 0.30$, $u = 0.15$, $l = 0.30$; $b = 40.00\\%$, $u = 20.00\\%$, $l = 40.00\\%$। নামহীন, সরু রেঞ্জ, ভলিউম ০.৭৭×। একটি কিছু-না দিন, সঠিকভাবেই তাই চিহ্নিত।

### রবিবার: যে ক্যান্ডেল আপনি সত্যিই পড়তে পারেন

আগের ক্লোজ ৪৭.৯০। উপরের সীমা $= 47.90 \\times 1.10 = 52.69$। নিচের সীমা $= 43.11$।

ওপেন ৪৮.২০, হাই ৫২.১০, লো ৪৭.৬০, ক্লোজ ৫১.৮০।

- Range $= 4.50$, Body $= 3.60$ বুলিশ, আপার শ্যাডো $= 0.30$, লোয়ার শ্যাডো $= 0.60$
- $b = 80.00\\%$, $u = 6.67\\%$, $l = 13.33\\%$ — যোগফল ১০০.০০% ✓
- হাই ৫২.১০ বনাম সীমা ৫২.৬৯: **স্পর্শ করেনি**, আর তার থেকে ০.৫৯ অর্থাৎ ১.১২% দূরে
- ভলিউম ১৮,৫০,০০০ = গড়ের **২.৯৮×**

**প্রতিটি গেট উত্তীর্ণ।** শেয়ারটি আরও ওপরে যেতে স্বাধীন ছিল এবং স্বাভাবিকের তিন গুণ ভলিউমে ছাদের ০.৫৯ নিচে বন্ধ হওয়াই বেছে নিয়েছে। $b = 80\\%$ একে marubozu-তে না পৌঁছেই শক্তিশালী-বডি ব্যান্ডে রাখে। ১৩.৩৩% লোয়ার শ্যাডো একটি আগাম পতনের রেকর্ড রাখে যা কেনা হয়েছে।

সোমবারের সঙ্গে তুলনা করুন। দুটোই ঊর্ধ্বমুখী দিন। দুটোই বুলিশ দেখায়। **সোমবারের বডি অনুপাত বেশি এবং তার কোনো মূল্য নেই; রবিবারেরটি ছোট এবং সপ্তাহের একমাত্র ক্যান্ডেল যা তথ্য বহন করে।** পার্থক্যটি পুরোপুরি গেটে, আকারে নয়।

### সপ্তাহটির খরচ বা আয়

যে ট্রেডার সোমবারের "marubozu" ৪৭.৩০-এ কিনেছিলেন তিনি মঙ্গলবারের ক্লোজ ৪৬.৫০-এ ক্ষতিতে ছিলেন — ১.৬৯% নিচে — আর বুধবার ১০% ইন্ট্রাডে দোলা কিছুই নিষ্পত্তি না করা দেখে কাটিয়েছেন। যে ট্রেডার গেট উত্তীর্ণ ক্যান্ডেলের জন্য অপেক্ষা করেছিলেন তিনি রবিবারের ক্লোজ ৫১.৮০-এ ঢুকেছেন, দেরিতে ও উঁচুতে, **কিন্তু প্রবেশের পেছনে একটি নিয়ম নয়, একটি প্রকৃত নিলাম নিয়ে।**

এই অধ্যায় আপনাকে যে বিনিময়টি মেনে নিতে বলে তা এটাই: **যিনি আকার পড়েন তাঁর চেয়ে আপনি সবসময় দেরিতে ঢুকবেন, আর সার্কিট ব্যান্ডের তৈরি করা আকারে আপনি অনেক কম ঢুকবেন।**`,
    },

    formula: {
      en: `**The validity constraint.** Every honest candle satisfies this; if it does not, your data is wrong, not the market:
$$L \\le \\min(O, C) \\le \\max(O, C) \\le H$$

**Total range** — the full extent of the day's auction:
$$R = H - L$$

**Body** — net displacement from first print to last:
$$B = |C - O|$$

**Direction** — the sign that turns geometry into a bull or bear reading:
$$D = \\operatorname{sgn}(C - O)$$

**Upper shadow** — the height of the rejected upside:
$$U = H - \\max(O, C)$$

**Lower shadow** — the depth of the rejected downside:
$$W = \\min(O, C) - L$$

**The partition identity.** These three exhaust the range with nothing left over:
$$B + U + W = R$$

**Body ratio** — the chapter's central conviction metric, scale-free and comparable across any two shares:
$$b = \\frac{B}{R} = \\frac{|C - O|}{H - L}, \\qquad 0 \\le b \\le 1$$

**Shadow ratios:**
$$u = \\frac{U}{R}, \\qquad l = \\frac{W}{R}, \\qquad b + u + l = 1$$

**Relative range** — the day's volatility expressed against price level, so a BDT 12 share and a BDT 120 share can be compared:
$$\\rho = \\frac{R}{C} \\times 100$$

**Close location value** — where the close finished within the range, from 0 at the low to 1 at the high:
$$CLV = \\frac{C - L}{H - L}$$

A $CLV$ above 0.75 means the close was in the top quarter of everything that traded. **This is often more useful than the body ratio**, because it ignores the open entirely and speaks only to the price that survives.

**Volume ratio** — the weight to attach to whatever the geometry says:
$$v = \\frac{V_t}{\\overline{V}_{20}}$$

**Circuit limit bounds** at a band of $\\beta$ percent on the previous close:
$$P_{up} = C_{t-1}\\left(1 + \\frac{\\beta}{100}\\right), \\qquad P_{down} = C_{t-1}\\left(1 - \\frac{\\beta}{100}\\right)$$

**Limit flag** — the DSE gate that must be evaluated before any classification:
$$\\Lambda = \\begin{cases} 1 & \\text{if } H \\ge P_{up} \\text{ or } L \\le P_{down} \\\\ 0 & \\text{otherwise} \\end{cases}$$

**Readability** — the composite gate. A candle is readable only if it has a range at all, and is not a thin limit-lock:
$$\\text{Readable} = \\mathbb{1}[R > 0] \\cdot \\mathbb{1}[v \\ge 0.5] \\cdot \\left(1 - \\mathbb{1}[\\Lambda = 1 \\wedge v < 1]\\right)$$

**Classification thresholds**, applied in this order — the order matters, since the conditions overlap:

$$\\text{Four-price doji: } R = 0$$
$$\\text{Doji family: } b \\le 0.05$$
$$\\qquad \\text{Dragonfly: } u \\le 0.10 \\wedge l \\ge 0.60$$
$$\\qquad \\text{Gravestone: } l \\le 0.10 \\wedge u \\ge 0.60$$
$$\\qquad \\text{Long-legged: } u \\ge 0.25 \\wedge l \\ge 0.25$$
$$\\text{Marubozu: } b \\ge 0.90$$
$$\\text{Hammer / Hanging Man: } 0.05 < b \\le 0.35 \\wedge l \\ge 0.55 \\wedge u \\le 0.15$$
$$\\text{Shooting Star / Inverted Hammer: } 0.05 < b \\le 0.35 \\wedge u \\ge 0.55 \\wedge l \\le 0.15$$
$$\\text{Spinning top: } b \\le 0.35 \\wedge u \\ge 0.20 \\wedge l \\ge 0.20$$
$$\\text{Strong body: } b \\ge 0.70$$

Everything else is unnamed, and **unnamed is a legitimate and frequent answer.**`,
      bn: `**বৈধতার শর্ত।** প্রতিটি সৎ ক্যান্ডেল এটি মানে; না মানলে আপনার ডেটা ভুল, বাজার নয়:
$$L \\le \\min(O, C) \\le \\max(O, C) \\le H$$

**মোট রেঞ্জ** — দিনের নিলামের সম্পূর্ণ বিস্তার:
$$R = H - L$$

**বডি** — প্রথম প্রিন্ট থেকে শেষ প্রিন্ট পর্যন্ত নিট স্থানচ্যুতি:
$$B = |C - O|$$

**দিক** — যে চিহ্ন জ্যামিতিকে বুল বা বেয়ার পাঠে রূপ দেয়:
$$D = \\operatorname{sgn}(C - O)$$

**আপার শ্যাডো** — প্রত্যাখ্যাত ঊর্ধ্বমুখের উচ্চতা:
$$U = H - \\max(O, C)$$

**লোয়ার শ্যাডো** — প্রত্যাখ্যাত নিম্নমুখের গভীরতা:
$$W = \\min(O, C) - L$$

**বিভাজন অভেদ।** এই তিনটি রেঞ্জকে নিঃশেষ করে, কিছুই বাকি থাকে না:
$$B + U + W = R$$

**বডি অনুপাত** — অধ্যায়ের কেন্দ্রীয় দৃঢ়তা-পরিমাপ, স্কেল-নিরপেক্ষ এবং যেকোনো দুটি শেয়ারের মধ্যে তুলনীয়:
$$b = \\frac{B}{R} = \\frac{|C - O|}{H - L}, \\qquad 0 \\le b \\le 1$$

**শ্যাডো অনুপাত:**
$$u = \\frac{U}{R}, \\qquad l = \\frac{W}{R}, \\qquad b + u + l = 1$$

**আপেক্ষিক রেঞ্জ** — দামের স্তরের বিপরীতে দিনের অস্থিরতা, যাতে ১২ টাকার শেয়ার ও ১২০ টাকার শেয়ার তুলনা করা যায়:
$$\\rho = \\frac{R}{C} \\times 100$$

**ক্লোজ অবস্থান মান** — রেঞ্জের ভেতরে ক্লোজ কোথায় শেষ হলো, লো-তে ০ থেকে হাই-তে ১:
$$CLV = \\frac{C - L}{H - L}$$

০.৭৫-এর ওপরে $CLV$ মানে ক্লোজ ছিল লেনদেন হওয়া সবকিছুর উপরের চতুর্থাংশে। **এটি প্রায়ই বডি অনুপাতের চেয়ে বেশি কার্যকর**, কারণ এটি ওপেনকে পুরোপুরি উপেক্ষা করে এবং কেবল সেই দামের কথা বলে যা টিকে থাকে।

**ভলিউম অনুপাত** — জ্যামিতি যা-ই বলুক তাতে কতটা ওজন দেবেন:
$$v = \\frac{V_t}{\\overline{V}_{20}}$$

আগের ক্লোজে $\\beta$ শতাংশ ব্যান্ডে **সার্কিট সীমা:**
$$P_{up} = C_{t-1}\\left(1 + \\frac{\\beta}{100}\\right), \\qquad P_{down} = C_{t-1}\\left(1 - \\frac{\\beta}{100}\\right)$$

**সীমা পতাকা** — যে ডিএসই গেট যেকোনো শ্রেণিবিন্যাসের আগে মূল্যায়ন করতে হবে:
$$\\Lambda = \\begin{cases} 1 & \\text{if } H \\ge P_{up} \\text{ or } L \\le P_{down} \\\\ 0 & \\text{otherwise} \\end{cases}$$

**পাঠযোগ্যতা** — যৌগিক গেট। একটি ক্যান্ডেল কেবল তখনই পাঠযোগ্য যখন তার আদৌ রেঞ্জ আছে এবং এটি পাতলা সীমা-লক নয়:
$$\\text{Readable} = \\mathbb{1}[R > 0] \\cdot \\mathbb{1}[v \\ge 0.5] \\cdot \\left(1 - \\mathbb{1}[\\Lambda = 1 \\wedge v < 1]\\right)$$

**শ্রেণিবিন্যাসের সীমা**, এই ক্রমেই প্রয়োগ করুন — ক্রমটি গুরুত্বপূর্ণ, কারণ শর্তগুলো একে অপরের সঙ্গে ওভারল্যাপ করে:

$$\\text{Four-price doji: } R = 0$$
$$\\text{Doji family: } b \\le 0.05$$
$$\\qquad \\text{Dragonfly: } u \\le 0.10 \\wedge l \\ge 0.60$$
$$\\qquad \\text{Gravestone: } l \\le 0.10 \\wedge u \\ge 0.60$$
$$\\qquad \\text{Long-legged: } u \\ge 0.25 \\wedge l \\ge 0.25$$
$$\\text{Marubozu: } b \\ge 0.90$$
$$\\text{Hammer / Hanging Man: } 0.05 < b \\le 0.35 \\wedge l \\ge 0.55 \\wedge u \\le 0.15$$
$$\\text{Shooting Star / Inverted Hammer: } 0.05 < b \\le 0.35 \\wedge u \\ge 0.55 \\wedge l \\le 0.15$$
$$\\text{Spinning top: } b \\le 0.35 \\wedge u \\ge 0.20 \\wedge l \\ge 0.20$$
$$\\text{Strong body: } b \\ge 0.70$$

বাকি সব নামহীন, আর **নামহীন একটি বৈধ ও ঘন ঘন আসা উত্তর।**`,
    },

    manual: {
      en: `**Scenario.** The Sunday candle from §27.3, on the illustrative mid-cap. All prices in BDT.

Open 48.20 · High 52.10 · Low 47.60 · Close 51.80
Volume 1,850,000 · 20-day average volume 620,000 · Previous close 47.90 · Circuit band 10%

**Step 1 — Validate before you calculate.**
$$47.60 \\le \\min(48.20,\\, 51.80) = 48.20 \\le \\max(48.20,\\, 51.80) = 51.80 \\le 52.10$$
The chain holds. The candle is arithmetically possible. **Never skip this step on vendor data.**

**Step 2 — Total range:**
$$R = 52.10 - 47.60 = 4.50$$

**Step 3 — Body and direction:**
$$B = |51.80 - 48.20| = 3.60, \\qquad C > O \\Rightarrow \\text{bullish}$$

**Step 4 — Body top and bottom.** For a bullish candle the top is the close and the bottom is the open:
$$\\max(O,C) = 51.80, \\qquad \\min(O,C) = 48.20$$

**Step 5 — Upper shadow:**
$$U = 52.10 - 51.80 = 0.30$$

**Step 6 — Lower shadow:**
$$W = 48.20 - 47.60 = 0.60$$

**Step 7 — Verify the partition.** This is the check that catches almost every data or formula error:
$$3.60 + 0.30 + 0.60 = 4.50 = R \\quad \\checkmark$$

**Step 8 — The three ratios:**
$$b = \\frac{3.60}{4.50} = 0.8000 = 80.00\\%$$
$$u = \\frac{0.30}{4.50} = 0.0667 = 6.67\\%$$
$$l = \\frac{0.60}{4.50} = 0.1333 = 13.33\\%$$
$$80.00 + 6.67 + 13.33 = 100.00\\% \\quad \\checkmark$$

**Step 9 — Relative range and close location:**
$$\\rho = \\frac{4.50}{51.80} \\times 100 = 8.69\\%$$
$$CLV = \\frac{51.80 - 47.60}{4.50} = \\frac{4.20}{4.50} = 0.9333$$

The close finished in the top 7% of the day's range. **Both metrics agree, which is the ordinary case; when $b$ and $CLV$ disagree you have a gap-open day and should trust $CLV$.**

**Step 10 — Volume ratio:**
$$v = \\frac{1{,}850{,}000}{620{,}000} = 2.98\\times$$

**Step 11 — The circuit gate.** Compute the band from the *previous* close, not today's:
$$P_{up} = 47.90 \\times 1.10 = 52.69, \\qquad P_{down} = 47.90 \\times 0.90 = 43.11$$
$$H = 52.10 < 52.69 \\Rightarrow \\Lambda = 0$$
Headroom remaining: $52.69 - 52.10 = 0.59$, which is $0.59/52.69 = 1.12\\%$ of the ceiling. **The stock was free to go higher and did not. That is a decision; a limit-up is not.**

**Step 12 — Readability:**
$$R > 0 \\;\\checkmark \\quad v = 2.98 \\ge 0.5 \\;\\checkmark \\quad \\Lambda = 0 \\;\\checkmark \\;\\Rightarrow\\; \\text{Readable} = 1$$

**Step 13 — Classify, in threshold order:**

| Test | Condition | Result |
|---|---|---|
| Four-price doji | $R = 0$ | No ($R = 4.50$) |
| Doji family | $b \\le 0.05$ | No ($b = 0.80$) |
| Marubozu | $b \\ge 0.90$ | No |
| Hammer / Hanging Man | $b \\le 0.35$ | No |
| Shooting Star | $b \\le 0.35$ | No |
| Spinning top | $b \\le 0.35$ | No |
| Strong body | $b \\ge 0.70$ | **Yes** |

**Form: strong bullish body. Not a marubozu** — it is 10 percentage points of body ratio short of one, and that gap is exactly the 0.30 upper shadow plus 0.60 lower shadow that a marubozu would not have.

**Step 14 — Now, and only now, the contrast.** Take Monday's limit-up bar: open 44.00, high 47.30, low 43.80, close 47.30, previous close 43.00, volume 210,000.

$$R = 3.50, \\quad B = 3.30, \\quad b = \\frac{3.30}{3.50} = 94.29\\%$$
$$P_{up} = 43.00 \\times 1.10 = 47.30 = H \\Rightarrow \\Lambda = 1$$
$$v = \\frac{210{,}000}{620{,}000} = 0.34$$

Since $\\Lambda = 1$ and $v = 0.34 < 1$, **Readable $= 0$.** The classifier would call it a bullish marubozu, $b = 94.29\\%$ against Sunday's 80.00%, and it is worth strictly less than Sunday's candle.

**Interpretation.**

Two up-days. The one with the *higher* body ratio carries no information and the one with the *lower* body ratio carries all of it. **Shape ranked them backwards; the gates ranked them correctly.**

Carry away three numbers from this scenario. **$b = 80.00\\%$** is the conviction reading. **$v = 2.98\\times$** is the weight you may attach to it. **The 1.12% of headroom below the circuit ceiling** is the proof that the shape was produced by an auction rather than by a rule. A candle that cannot report all three has not been analysed — it has been looked at.

And note what is still missing even now: **where 51.80 sits relative to the trend and to the nearest resistance level.** Nothing in Steps 1–14 answers that, and without it the strong bullish body is a well-measured fact of unknown importance.`,
      bn: `**পরিস্থিতি।** §২৭.৩-এর রবিবারের ক্যান্ডেল, উদাহরণমূলক মিড-ক্যাপে। সব দাম টাকায়।

ওপেন ৪৮.২০ · হাই ৫২.১০ · লো ৪৭.৬০ · ক্লোজ ৫১.৮০
ভলিউম ১৮,৫০,০০০ · ২০-দিনের গড় ভলিউম ৬,২০,০০০ · আগের ক্লোজ ৪৭.৯০ · সার্কিট ব্যান্ড ১০%

**ধাপ ১ — গণনার আগে যাচাই করুন।**
$$47.60 \\le \\min(48.20,\\, 51.80) = 48.20 \\le \\max(48.20,\\, 51.80) = 51.80 \\le 52.10$$
শৃঙ্খলটি টিকে আছে। ক্যান্ডেলটি পাটিগাণিতিকভাবে সম্ভব। **ভেন্ডরের ডেটায় এই ধাপ কখনো বাদ দেবেন না।**

**ধাপ ২ — মোট রেঞ্জ:**
$$R = 52.10 - 47.60 = 4.50$$

**ধাপ ৩ — বডি ও দিক:**
$$B = |51.80 - 48.20| = 3.60, \\qquad C > O \\Rightarrow \\text{bullish}$$

**ধাপ ৪ — বডির শীর্ষ ও তল।** বুলিশ ক্যান্ডেলে শীর্ষ হলো ক্লোজ আর তল হলো ওপেন:
$$\\max(O,C) = 51.80, \\qquad \\min(O,C) = 48.20$$

**ধাপ ৫ — আপার শ্যাডো:**
$$U = 52.10 - 51.80 = 0.30$$

**ধাপ ৬ — লোয়ার শ্যাডো:**
$$W = 48.20 - 47.60 = 0.60$$

**ধাপ ৭ — বিভাজন যাচাই করুন।** এই যাচাইটিই প্রায় প্রতিটি ডেটা বা সূত্রের ত্রুটি ধরে ফেলে:
$$3.60 + 0.30 + 0.60 = 4.50 = R \\quad \\checkmark$$

**ধাপ ৮ — তিনটি অনুপাত:**
$$b = \\frac{3.60}{4.50} = 0.8000 = 80.00\\%$$
$$u = \\frac{0.30}{4.50} = 0.0667 = 6.67\\%$$
$$l = \\frac{0.60}{4.50} = 0.1333 = 13.33\\%$$
$$80.00 + 6.67 + 13.33 = 100.00\\% \\quad \\checkmark$$

**ধাপ ৯ — আপেক্ষিক রেঞ্জ ও ক্লোজ অবস্থান:**
$$\\rho = \\frac{4.50}{51.80} \\times 100 = 8.69\\%$$
$$CLV = \\frac{51.80 - 47.60}{4.50} = \\frac{4.20}{4.50} = 0.9333$$

ক্লোজ শেষ হয়েছে দিনের রেঞ্জের উপরের ৭%-এ। **দুটি পরিমাপই একমত, যা সাধারণ ঘটনা; $b$ ও $CLV$ অমিল হলে বুঝবেন গ্যাপ-ওপেনের দিন এবং $CLV$-কে বিশ্বাস করা উচিত।**

**ধাপ ১০ — ভলিউম অনুপাত:**
$$v = \\frac{1{,}850{,}000}{620{,}000} = 2.98\\times$$

**ধাপ ১১ — সার্কিট গেট।** ব্যান্ড গণনা করুন *আগের* ক্লোজ থেকে, আজকেরটি থেকে নয়:
$$P_{up} = 47.90 \\times 1.10 = 52.69, \\qquad P_{down} = 47.90 \\times 0.90 = 43.11$$
$$H = 52.10 < 52.69 \\Rightarrow \\Lambda = 0$$
অবশিষ্ট ফাঁক: $52.69 - 52.10 = 0.59$, যা ছাদের $0.59/52.69 = 1.12\\%$। **শেয়ারটি আরও ওপরে যেতে স্বাধীন ছিল এবং যায়নি। এটি একটি সিদ্ধান্ত; লিমিট-আপ নয়।**

**ধাপ ১২ — পাঠযোগ্যতা:**
$$R > 0 \\;\\checkmark \\quad v = 2.98 \\ge 0.5 \\;\\checkmark \\quad \\Lambda = 0 \\;\\checkmark \\;\\Rightarrow\\; \\text{Readable} = 1$$

**ধাপ ১৩ — সীমার ক্রমে শ্রেণিবদ্ধ করুন:**

| পরীক্ষা | শর্ত | ফল |
|---|---|---|
| Four-price doji | $R = 0$ | না ($R = 4.50$) |
| Doji পরিবার | $b \\le 0.05$ | না ($b = 0.80$) |
| Marubozu | $b \\ge 0.90$ | না |
| Hammer / Hanging Man | $b \\le 0.35$ | না |
| Shooting Star | $b \\le 0.35$ | না |
| Spinning top | $b \\le 0.35$ | না |
| Strong body | $b \\ge 0.70$ | **হ্যাঁ** |

**রূপ: strong bullish body। Marubozu নয়** — বডি অনুপাতে এটি তার থেকে ১০ শতাংশ বিন্দু কম, আর ঐ ব্যবধানটিই ঠিক ০.৩০ আপার শ্যাডো যোগ ০.৬০ লোয়ার শ্যাডো, যা marubozu-তে থাকত না।

**ধাপ ১৪ — এবার, এবং কেবল এবার, তুলনা।** সোমবারের লিমিট-আপ বার নিন: ওপেন ৪৪.০০, হাই ৪৭.৩০, লো ৪৩.৮০, ক্লোজ ৪৭.৩০, আগের ক্লোজ ৪৩.০০, ভলিউম ২,১০,০০০।

$$R = 3.50, \\quad B = 3.30, \\quad b = \\frac{3.30}{3.50} = 94.29\\%$$
$$P_{up} = 43.00 \\times 1.10 = 47.30 = H \\Rightarrow \\Lambda = 1$$
$$v = \\frac{210{,}000}{620{,}000} = 0.34$$

যেহেতু $\\Lambda = 1$ এবং $v = 0.34 < 1$, **Readable $= 0$।** শ্রেণিবিন্যাসকারী একে bullish marubozu বলত, রবিবারের ৮০.০০%-এর বিপরীতে $b = 94.29\\%$, অথচ এটি রবিবারের ক্যান্ডেলের চেয়ে কঠোরভাবে কম মূল্যবান।

**ব্যাখ্যা।**

দুটি ঊর্ধ্বমুখী দিন। যেটির বডি অনুপাত *বেশি* সেটি কোনো তথ্য বহন করে না আর যেটির বডি অনুপাত *কম* সেটি পুরো তথ্য বহন করে। **আকার এদের উল্টো ক্রমে সাজিয়েছিল; গেট সঠিক ক্রমে সাজিয়েছে।**

এই পরিস্থিতি থেকে তিনটি সংখ্যা বয়ে নিন। **$b = 80.00\\%$** হলো দৃঢ়তার পাঠ। **$v = 2.98\\times$** হলো তাতে আপনি যে ওজন দিতে পারেন। **সার্কিট ছাদের নিচে ১.১২% ফাঁক** হলো প্রমাণ যে আকারটি নিয়ম নয়, একটি নিলাম তৈরি করেছে। যে ক্যান্ডেল এই তিনটিই জানাতে পারে না তা বিশ্লেষণ করা হয়নি — কেবল দেখা হয়েছে।

আর লক্ষ করুন এখনো কী বাদ আছে: **ট্রেন্ড ও নিকটতম রেজিস্ট্যান্স স্তরের সাপেক্ষে ৫১.৮০ কোথায় বসে।** ধাপ ১–১৪-এর কিছুই তার উত্তর দেয় না, আর তা ছাড়া strong bullish body একটি ভালোভাবে-মাপা অজানা গুরুত্বের তথ্য মাত্র।`,
    },
  },
};
