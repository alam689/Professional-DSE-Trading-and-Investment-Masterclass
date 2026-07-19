/**
 * Chapter 43 — Elliott Wave
 * Part III, Technical Analysis.
 */

export default {
  n: 43,
  tools: [],

  excelSheet: {
    filename: 'ch43-wave-count-validator.xlsx',
    sheetName: 'Wave Validator',
    cells: [
      { cell: 'A1', v: '— Pivot Prices (BDT) —' },
      { cell: 'A2', v: 'Point 0 — impulse start' }, { cell: 'B2', v: 42.0 },
      { cell: 'A3', v: 'Point 1 — wave 1 high' }, { cell: 'B3', v: 51.6 },
      { cell: 'A4', v: 'Point 2 — wave 2 low' }, { cell: 'B4', v: 47.8 },
      { cell: 'A5', v: 'Point 3 — wave 3 high' }, { cell: 'B5', v: 63.35 },
      { cell: 'A6', v: 'Point 4 — wave 4 low' }, { cell: 'B6', v: 59.7 },
      { cell: 'A7', v: 'Point 5 — wave 5 high' }, { cell: 'B7', v: 69.3 },

      { cell: 'A9', v: '— Wave Lengths (BDT) —' },
      { cell: 'A10', v: 'Wave 1' }, { cell: 'B10', f: 'B3-B2' },
      { cell: 'A11', v: 'Wave 2' }, { cell: 'B11', f: 'B3-B4' },
      { cell: 'A12', v: 'Wave 3' }, { cell: 'B12', f: 'B5-B4' },
      { cell: 'A13', v: 'Wave 4' }, { cell: 'B13', f: 'B5-B6' },
      { cell: 'A14', v: 'Wave 5' }, { cell: 'B14', f: 'B7-B6' },
      { cell: 'A15', v: 'Net move, point 0 to 5' }, { cell: 'B15', f: 'B7-B2' },

      { cell: 'A17', v: '— Hard Rule Checks —' },
      { cell: 'A18', v: 'W2 retracement of W1 (%)' }, { cell: 'B18', f: 'B11/B10*100' },
      { cell: 'A19', v: 'RULE 1 — W2 retraces < 100% of W1' }, { cell: 'B19', f: 'IF(B4>B2,"PASS","FAIL")' },
      { cell: 'A20', v: 'Shortest of W1, W3, W5' }, { cell: 'B20', f: 'MIN(B10,B12,B14)' },
      { cell: 'A21', v: 'RULE 2 — W3 is not the shortest' }, { cell: 'B21', f: 'IF(AND(B12<B10,B12<B14),"FAIL","PASS")' },
      { cell: 'A22', v: 'W4 low minus W1 high' }, { cell: 'B22', f: 'B6-B3' },
      { cell: 'A23', v: 'RULE 3 — W4 does not enter W1 territory' }, { cell: 'B23', f: 'IF(B6>B3,"PASS","FAIL")' },

      { cell: 'A25', v: '— Fibonacci Relationships (guidelines) —' },
      { cell: 'A26', v: 'W3 / W1' }, { cell: 'B26', f: 'B12/B10' },
      { cell: 'A27', v: 'W5 / W1' }, { cell: 'B27', f: 'B14/B10' },
      { cell: 'A28', v: 'W5 / W3' }, { cell: 'B28', f: 'B14/B12' },
      { cell: 'A29', v: 'W4 retracement of W3 (%)' }, { cell: 'B29', f: 'B13/B12*100' },
      { cell: 'A30', v: 'Alternation W2 vs W4' }, { cell: 'B30', f: 'IF(ABS(B18-B29)>10,"ALTERNATES","SIMILAR - weak count")' },

      { cell: 'A32', v: '— Invalidation —' },
      { cell: 'A33', v: 'INVALIDATION PRICE' }, { cell: 'B33', f: 'MAX(B2,B3)' },
      { cell: 'A34', v: 'Current price' }, { cell: 'B34', v: 66.0 },
      { cell: 'A35', v: 'Distance to invalidation (%)' }, { cell: 'B35', f: '(B34-B33)/B34*100' },

      { cell: 'A37', v: 'VERDICT' },
      {
        cell: 'B37',
        f: 'IF(AND(B19="PASS",B21="PASS",B23="PASS"),"COUNT VALID - abandon if it trades "&TEXT(B33,"0.00"),"COUNT INVALID - relabel or abandon now")',
      },
    ],
  },

  objectives: {
    en: [
      'Lay out the 5-3 wave structure and label an impulse and a correction on a DSE price series.',
      'Apply the three hard rules and state precisely which one a proposed count breaks.',
      'Distinguish the hard rules from the softer guidelines — alternation, channelling, Fibonacci relationships — and refuse to treat a guideline as a rule.',
      'State, before the fact, the single price that invalidates a count, and abandon the count when that price trades.',
      'Explain why Elliott Wave is difficult to falsify in advance, and why DSE data breaks counting at multiple degrees at once.',
    ],
    bn: [
      'ওয়েভের ৫-৩ কাঠামো সাজানো এবং একটি ডিএসই মূল্য সিরিজে ইম্পালস ও কারেকশন লেবেল করা।',
      'তিনটি কঠিন নিয়ম প্রয়োগ করা এবং একটি প্রস্তাবিত কাউন্ট ঠিক কোনটি ভাঙছে তা বলা।',
      'কঠিন নিয়মকে নরম নির্দেশিকা — অল্টারনেশন, চ্যানেলিং, ফিবোনাচি সম্পর্ক — থেকে আলাদা করা এবং নির্দেশিকাকে নিয়ম হিসেবে গণ্য করতে অস্বীকার করা।',
      'আগেভাগে সেই একক দাম বলা যা কাউন্টটিকে বাতিল করে, এবং ঐ দাম লেনদেন হলে কাউন্টটি ত্যাগ করা।',
      'ব্যাখ্যা করা কেন এলিয়ট ওয়েভ আগেভাগে মিথ্যা প্রমাণ করা কঠিন, এবং কেন ডিএসই-র ডেটা একসঙ্গে একাধিক ডিগ্রিতে কাউন্টিং ভেঙে দেয়।',
    ],
  },

  blocks: {
    theory: {
      en: `Ralph Nelson Elliott's claim, made in the 1930s and codified by Frost and Prechter forty years later, is that markets do not move randomly but in a repeating structural pattern driven by collective psychology. **The claim is specific enough to be taught precisely, and that is the first reason to take it seriously.** Most market folklore is not.

This chapter does two things. It teaches the framework properly — the rules, the guidelines, the corrective forms, the degree structure — because a half-learned Elliott practitioner is worse than none. Then it asks the question the framework's own literature tends to avoid: **can an Elliott forecast be wrong in a way you can check in advance?**

### The 5-3 structure

The basic unit is eight waves. **Five waves move in the direction of the trend of the next larger degree — the impulse, labelled 1 through 5. Three waves move against it — the correction, labelled A, B, C.**

Within the impulse, waves 1, 3 and 5 are themselves impulses and subdivide into five. Waves 2 and 4 are corrections and subdivide into three. Within the correction, wave A subdivides into five or three depending on the corrective form, wave B into three, and wave C into five.

The psychological story attached to it maps closely onto Dow Theory's three phases from Chapter 42. Wave 1 is accumulation by the few who see it. Wave 2 is the doubt that shakes them. Wave 3 is public participation — the longest, strongest, highest-volume leg, where the fundamentals finally become visible to everyone. Wave 4 is profit-taking without conviction. Wave 5 is distribution: price rises on thinning breadth and falling volume while the informed leave. **Note that this is Dow's accumulation-participation-distribution restated with numbers attached.** Chapter 42 got there without any labelling apparatus.

### The three hard rules

Only three statements in Elliott Wave are rules. Break one and the count is not "weak" or "unusual" — **it is void, and you must relabel or abandon it.**

| # | Rule | Consequence if broken |
|---|---|---|
| 1 | Wave 2 never retraces more than 100% of wave 1 | Point 2 below point 0 kills the count |
| 2 | Wave 3 is never the shortest of waves 1, 3 and 5 | The labelling is wrong |
| 3 | Wave 4 never enters wave 1's price territory | Overlap kills the count |

Rule 3 carries an acknowledged exception. **In highly leveraged futures markets the literature tolerates wave 4 overlapping wave 1**, and a second exception exists within equities: the *ending diagonal*, a wedge-shaped fifth wave in which overlap is not merely permitted but expected. Keep that exception in view. We return to it, because it is also the framework's most convenient escape hatch.

### The guidelines, which are not rules

Everything else is a tendency. Treating a guideline as a rule is the single most common analytical error in this material.

- **Alternation.** If wave 2 is a sharp, deep, quick correction, wave 4 tends to be a shallow, sideways, slow one — and the reverse. The forms alternate; the depths usually alternate too.
- **Channelling.** Connect the ends of waves 2 and 4, draw a parallel from the end of wave 3, and wave 5 often terminates near the upper rail. Often. Not always.
- **Fibonacci relationships**, drawn from Chapter 41's ratios. Wave 2 commonly retraces 50% or 61.8% of wave 1. Wave 4 commonly retraces 38.2% or 23.6% of wave 3. **Wave 3 is frequently 1.618 times wave 1, and wave 5 is frequently equal to wave 1** or 0.618 times wave 3.
- **Equality.** When wave 3 extends, waves 1 and 5 tend towards equality.

### Extensions, truncations, diagonals

**One of waves 1, 3 or 5 is usually extended** — elongated, with subdivisions almost as large as the waves of the parent degree. In equities the extension is most often wave 3. If wave 3 extends, expect waves 1 and 5 to be roughly equal, which is a usable projection. If wave 5 extends, expect the subsequent correction to be violent and to retrace to the region of wave 2 of that fifth.

**A truncated fifth** is a wave 5 that fails to exceed the end of wave 3. It signals extreme weakness in the underlying move and typically precedes a sharp reversal. It is real and it is observed — and it is also the reason that "price failed to make a new high" can never, by itself, refute a bullish count.

**Diagonals** are wedge-shaped five-wave structures whose sub-waves overlap. A *leading diagonal* appears in wave 1 or wave A; an *ending diagonal* in wave 5 or wave C.

### The corrective forms

Corrections are where counts go to die. There are three basic forms and an open-ended family of combinations.

| Form | Subdivision | Character |
|---|---|---|
| Zigzag | 5-3-5 | Sharp, deep; wave B retraces a minority of A |
| Flat | 3-3-5 | Sideways; wave B retraces most of A |
| Triangle | 3-3-3-3-3 | Five converging legs A–E; appears in wave 4 or wave B, not wave 2 |

Flats come in variants: the *expanded flat*, where B exceeds the start of A and C exceeds the end of A, and the *running flat*, where C fails to reach the end of A. Combinations join two or three of these with connecting X waves — a *double three* (W-X-Y) or a *triple three* (W-X-Y-X-Z).

**Read that last sentence again with an adversarial eye.** A triple three is a corrective structure of up to eleven legs with no requirement that any of them be proportionate. There are very few sideways price paths a triple three cannot accommodate.

### Degree

The structure is fractal: every wave is part of a larger wave and composed of smaller ones. The conventional nomenclature runs Grand Supercycle, Supercycle, Cycle, Primary, Intermediate, Minor, Minute, Minuette, Subminuette — centuries down to hours. Notation varies between sources; what does not vary is the requirement that **a count at one degree be consistent with the count at the degree above and below it.**

That consistency requirement is the framework's real intellectual content. It is also where the ambiguity lives, because **an unfolding move can almost always be labelled at more than one degree**, and the choice of degree changes every projection that follows.

### The honest part: what can this be wrong about?

**Elliott Wave's problem is not that it is wrong. It is that it is hard to falsify in advance.**

The three rules genuinely constrain a count. Given a fixed set of pivots and a fixed degree assignment, some labellings are illegal and you can prove it arithmetically — the Excel sheet and the Python class in this chapter do exactly that. That is more than most technical frameworks offer.

But at any live moment you do not have a fixed set of pivots or a fixed degree assignment. You have a partial move, several plausible pivot sets, and a menu: extended third or completed third, wave 4 of one degree or wave 2 of the next, impulse or leading diagonal, flat or the first two legs of a triple three. **The number of admissible counts at any moment is large, and the framework's normal practice is to carry alternates.**

Carrying alternates is intellectually honest and practically corrosive. If you hold a primary count and two alternates that between them cover up, down and sideways, you have not made a forecast. And when price does something none of them allowed, the standard remedy is to relabel — the move was one degree lower than assumed, or wave 4 was a triangle after all. **A framework that can relabel after the fact explains every outcome, and a claim that explains every outcome forecasts none of them.**

### The fair test

There is a clean test, and it comes from the rules themselves.

**An Elliott forecast is meaningful if and only if it states, before the fact, the specific price at which the count is dead.** The rules give you that price. In a bullish impulse past wave 2, rule 3 makes the wave 1 high the operative invalidation level: trade below it and the count is void, no discussion.

So the discipline of this chapter is one sentence. **Write down the invalidation price, publish it where you cannot quietly edit it, and abandon the count the moment it trades.** Not "reassess". Abandon.

**An analyst who cannot name the invalidation level is not using Elliott Wave. They are narrating.** The rules are the falsifiable part of the framework; a practitioner who declines to state them is using the vocabulary without the constraint.

### What survives, and what it is worth

Strip the labels and ask what is left standing.

Trends do move in impulses and corrections. Corrections do alternate in character. Third waves — or whatever you call the middle stretch of a trend — are typically the strongest and carry the highest volume. **All three are true, all three are useful, and all three are restatements of Dow Theory from Chapter 42.** You can observe every one of them without the labelling apparatus.

What the apparatus adds is structural discipline, and this is a real benefit that gets lost in the arguing. **Elliott forces you to ask where you are within a move rather than only what the last bar did.** A trader who has genuinely internalised the question "is this the third wave or the fifth?" behaves differently from one who has not — more patient early in a trend, more suspicious late in it, and far less likely to buy a breakout that is the sixth of its kind.

That is worth having. Just be clear that it is a thinking aid with a testable stop attached, not a forecasting engine.

### Why the DSE breaks counting specifically

Elliott counting needs clean, continuous price data across multiple degrees at once. **The DSE has supplied the opposite.**

- **The floor-price era froze price at multiple degrees simultaneously.** When a stock cannot trade below an administratively set level, the pivots that a count requires simply do not form. Any count spanning that period is not weak — it is meaningless, because the price series it is built on was not produced by the process the framework describes.
- **Record-date adjustments create false wave endpoints.** A stock that goes ex-dividend or ex-bonus prints a gap that looks like a completed wave and is nothing of the kind. Chapter 5's discipline applies: ask what compelled the number to move.
- **On thin counters, a five-wave impulse can be one participant's accumulation programme.** The structure Elliott attributes to mass psychology requires a mass. On a counter where a handful of accounts drive the tape, you are counting the waves of one buyer's order-splitting algorithm.

**Confine counting to liquid large caps and to the index, at daily degree and higher.** Below that, on the DSE, you are labelling noise with Greek letters and calling it analysis.`,
      bn: `রাল্‌ফ নেলসন এলিয়টের দাবি, যা তিনি ১৯৩০-এর দশকে করেন এবং চল্লিশ বছর পর ফ্রস্ট ও প্রেক্টার বিধিবদ্ধ করেন, তা হলো — বাজার এলোমেলোভাবে চলে না, বরং সমষ্টিগত মনস্তত্ত্ব-চালিত একটি পুনরাবৃত্ত কাঠামোগত নকশায় চলে। **দাবিটি এতটাই সুনির্দিষ্ট যে একে নির্ভুলভাবে শেখানো যায়, আর এটিই একে গুরুত্ব দেওয়ার প্রথম কারণ।** বাজারের বেশিরভাগ লোককথা তা নয়।

এই অধ্যায় দুটি কাজ করে। প্রথমে কাঠামোটি ঠিকভাবে শেখায় — নিয়ম, নির্দেশিকা, কারেক্টিভ রূপ, ডিগ্রি কাঠামো — কারণ অর্ধশিক্ষিত এলিয়ট চর্চাকারী কোনো চর্চাকারী না থাকার চেয়েও খারাপ। তারপর সেই প্রশ্নটি করে যা কাঠামোটির নিজস্ব সাহিত্য সাধারণত এড়িয়ে যায়: **একটি এলিয়ট পূর্বাভাস কি এমনভাবে ভুল হতে পারে যা আপনি আগেভাগে যাচাই করতে পারেন?**

### ৫-৩ কাঠামো

মৌলিক এককটি আট ওয়েভের। **পরবর্তী বৃহত্তর ডিগ্রির প্রবণতার দিকে পাঁচটি ওয়েভ চলে — ইম্পালস, লেবেল ১ থেকে ৫। তার বিপরীতে তিনটি ওয়েভ চলে — কারেকশন, লেবেল A, B, C।**

ইম্পালসের ভেতরে ওয়েভ ১, ৩ ও ৫ নিজেরাই ইম্পালস এবং পাঁচে বিভক্ত হয়। ওয়েভ ২ ও ৪ কারেকশন এবং তিনে বিভক্ত হয়। কারেকশনের ভেতরে ওয়েভ A কারেক্টিভ রূপ অনুযায়ী পাঁচ বা তিনে, ওয়েভ B তিনে, এবং ওয়েভ C পাঁচে বিভক্ত হয়।

এর সঙ্গে যুক্ত মনস্তাত্ত্বিক গল্পটি অধ্যায় ৪২-এর ডাও থিওরির তিন পর্যায়ের সঙ্গে ঘনিষ্ঠভাবে মেলে। ওয়েভ ১ হলো অল্প কিছু মানুষের সঞ্চয়ন যাঁরা দেখতে পান। ওয়েভ ২ হলো সেই সন্দেহ যা তাঁদের নাড়িয়ে দেয়। ওয়েভ ৩ হলো জনসাধারণের অংশগ্রহণ — দীর্ঘতম, শক্তিশালীতম, সর্বোচ্চ ভলিউমের পা, যেখানে মৌলিক তথ্য অবশেষে সবার কাছে দৃশ্যমান হয়। ওয়েভ ৪ হলো দৃঢ়তা ছাড়া মুনাফা তোলা। ওয়েভ ৫ হলো বিতরণ: সংকুচিত ব্রেডথ ও কমতে থাকা ভলিউমে দাম ওঠে যখন অবহিতরা বেরিয়ে যান। **লক্ষ করুন এটি ডাও-এর সঞ্চয়ন-অংশগ্রহণ-বিতরণেরই পুনরুক্তি, সঙ্গে সংখ্যা জুড়ে দেওয়া।** অধ্যায় ৪২ কোনো লেবেলিং যন্ত্রপাতি ছাড়াই সেখানে পৌঁছেছিল।

### তিনটি কঠিন নিয়ম

এলিয়ট ওয়েভে কেবল তিনটি বিবৃতিই নিয়ম। একটি ভাঙলে কাউন্টটি "দুর্বল" বা "অস্বাভাবিক" নয় — **এটি বাতিল, এবং আপনাকে পুনরায় লেবেল করতে বা ত্যাগ করতে হবে।**

| # | নিয়ম | ভাঙলে পরিণতি |
|---|---|---|
| ১ | ওয়েভ ২ কখনো ওয়েভ ১-এর ১০০%-এর বেশি ফিরিয়ে দেয় না | পয়েন্ট ২ পয়েন্ট ০-এর নিচে গেলে কাউন্ট শেষ |
| ২ | ওয়েভ ৩ কখনো ১, ৩ ও ৫-এর মধ্যে ক্ষুদ্রতম নয় | লেবেলিংটি ভুল |
| ৩ | ওয়েভ ৪ কখনো ওয়েভ ১-এর মূল্য এলাকায় ঢোকে না | ওভারল্যাপ কাউন্ট শেষ করে |

নিয়ম ৩-এর একটি স্বীকৃত ব্যতিক্রম আছে। **উচ্চ লিভারেজের ফিউচার্স বাজারে সাহিত্য ওয়েভ ৪-এর ওয়েভ ১-এ ওভারল্যাপ সহ্য করে**, আর ইকুইটিতে দ্বিতীয় একটি ব্যতিক্রম আছে: *এন্ডিং ডায়াগোনাল*, একটি কীলক-আকৃতির পঞ্চম ওয়েভ যেখানে ওভারল্যাপ কেবল অনুমোদিতই নয়, প্রত্যাশিত। এই ব্যতিক্রমটি চোখে রাখুন। আমরা এতে ফিরব, কারণ এটি কাঠামোটির সবচেয়ে সুবিধাজনক পালানোর পথও বটে।

### নির্দেশিকা, যা নিয়ম নয়

বাকি সবকিছুই প্রবণতা। নির্দেশিকাকে নিয়ম হিসেবে গণ্য করাই এই বিষয়ের সবচেয়ে সাধারণ বিশ্লেষণী ভুল।

- **অল্টারনেশন।** ওয়েভ ২ যদি তীক্ষ্ণ, গভীর, দ্রুত কারেকশন হয়, ওয়েভ ৪ তবে অগভীর, পার্শ্বমুখী, ধীর হওয়ার প্রবণতা রাখে — এবং উল্টোটাও। রূপ পালা করে; গভীরতাও সাধারণত পালা করে।
- **চ্যানেলিং।** ওয়েভ ২ ও ৪-এর প্রান্ত যোগ করুন, ওয়েভ ৩-এর প্রান্ত থেকে একটি সমান্তরাল টানুন, ওয়েভ ৫ প্রায়ই উপরের রেলের কাছে শেষ হয়। প্রায়ই। সবসময় নয়।
- **ফিবোনাচি সম্পর্ক**, অধ্যায় ৪১-এর অনুপাত থেকে নেওয়া। ওয়েভ ২ সাধারণত ওয়েভ ১-এর ৫০% বা ৬১.৮% ফিরিয়ে দেয়। ওয়েভ ৪ সাধারণত ওয়েভ ৩-এর ৩৮.২% বা ২৩.৬% ফিরিয়ে দেয়। **ওয়েভ ৩ প্রায়শই ওয়েভ ১-এর ১.৬১৮ গুণ, এবং ওয়েভ ৫ প্রায়শই ওয়েভ ১-এর সমান** বা ওয়েভ ৩-এর ০.৬১৮ গুণ।
- **সমতা।** ওয়েভ ৩ বর্ধিত হলে ওয়েভ ১ ও ৫ সমতার দিকে ঝোঁকে।

### বর্ধন, খণ্ডন, ডায়াগোনাল

**ওয়েভ ১, ৩ বা ৫-এর একটি সাধারণত বর্ধিত হয়** — দীর্ঘায়িত, যার উপবিভাগগুলো মূল ডিগ্রির ওয়েভের প্রায় সমান বড়। ইকুইটিতে বর্ধনটি প্রায়শই ওয়েভ ৩। ওয়েভ ৩ বর্ধিত হলে ওয়েভ ১ ও ৫ মোটামুটি সমান হবে ধরে নিন, যা একটি ব্যবহারযোগ্য প্রক্ষেপণ। ওয়েভ ৫ বর্ধিত হলে পরবর্তী কারেকশন হিংস্র হবে এবং ঐ পঞ্চমের ওয়েভ ২-এর এলাকায় ফিরবে ধরে নিন।

**খণ্ডিত পঞ্চম** হলো এমন ওয়েভ ৫ যা ওয়েভ ৩-এর প্রান্ত ছাড়াতে ব্যর্থ হয়। এটি অন্তর্নিহিত চলনে চরম দুর্বলতা নির্দেশ করে এবং সাধারণত একটি তীক্ষ্ণ উল্টো ঘোরার আগে আসে। এটি বাস্তব ও পর্যবেক্ষিত — আর এ কারণেই "দাম নতুন উচ্চতা করতে পারেনি" কথাটি একা কখনো কোনো বুলিশ কাউন্ট খণ্ডন করতে পারে না।

**ডায়াগোনাল** হলো কীলক-আকৃতির পাঁচ-ওয়েভ কাঠামো যার উপ-ওয়েভগুলো ওভারল্যাপ করে। *লিডিং ডায়াগোনাল* আসে ওয়েভ ১ বা ওয়েভ A-তে; *এন্ডিং ডায়াগোনাল* আসে ওয়েভ ৫ বা ওয়েভ C-তে।

### কারেক্টিভ রূপ

কারেকশনেই কাউন্ট মারা যায়। তিনটি মৌলিক রূপ এবং সংমিশ্রণের একটি উন্মুক্ত পরিবার আছে।

| রূপ | উপবিভাগ | চরিত্র |
|---|---|---|
| জিগজ্যাগ | ৫-৩-৫ | তীক্ষ্ণ, গভীর; ওয়েভ B, A-এর অল্প অংশ ফেরায় |
| ফ্ল্যাট | ৩-৩-৫ | পার্শ্বমুখী; ওয়েভ B, A-এর বেশিরভাগ ফেরায় |
| ট্রায়াঙ্গল | ৩-৩-৩-৩-৩ | পাঁচটি অভিসারী পা A–E; আসে ওয়েভ ৪ বা ওয়েভ B-তে, ওয়েভ ২-তে নয় |

ফ্ল্যাটের রূপভেদ আছে: *এক্সপ্যান্ডেড ফ্ল্যাট*, যেখানে B, A-এর শুরু ছাড়ায় এবং C, A-এর প্রান্ত ছাড়ায়; আর *রানিং ফ্ল্যাট*, যেখানে C, A-এর প্রান্তে পৌঁছাতে ব্যর্থ হয়। সংমিশ্রণ এদের দুই বা তিনটিকে সংযোগকারী X ওয়েভ দিয়ে জোড়ে — *ডাবল থ্রি* (W-X-Y) বা *ট্রিপল থ্রি* (W-X-Y-X-Z)।

**শেষ বাক্যটি সমালোচকের চোখে আবার পড়ুন।** ট্রিপল থ্রি হলো এগারোটি পর্যন্ত পায়ের একটি কারেক্টিভ কাঠামো, যেখানে কোনোটির সমানুপাতিক হওয়ার শর্ত নেই। এমন পার্শ্বমুখী মূল্যপথ খুব কমই আছে যা একটি ট্রিপল থ্রি ধারণ করতে পারে না।

### ডিগ্রি

কাঠামোটি ফ্র্যাক্টাল: প্রতিটি ওয়েভ একটি বৃহত্তর ওয়েভের অংশ এবং ক্ষুদ্রতরগুলো দিয়ে গঠিত। প্রচলিত নামকরণ চলে Grand Supercycle, Supercycle, Cycle, Primary, Intermediate, Minor, Minute, Minuette, Subminuette — শতাব্দী থেকে ঘণ্টা পর্যন্ত। সূত্রভেদে নোটেশন বদলায়; যা বদলায় না তা হলো এই শর্ত যে **এক ডিগ্রির কাউন্ট তার উপরের ও নিচের ডিগ্রির কাউন্টের সঙ্গে সামঞ্জস্যপূর্ণ হতে হবে।**

ঐ সামঞ্জস্যের শর্তই কাঠামোটির প্রকৃত বৌদ্ধিক বিষয়বস্তু। আর সেখানেই অস্পষ্টতা বাস করে, কারণ **একটি উন্মোচিত হতে থাকা চলনকে প্রায় সবসময়ই একাধিক ডিগ্রিতে লেবেল করা যায়**, এবং ডিগ্রির পছন্দ পরবর্তী প্রতিটি প্রক্ষেপণ বদলে দেয়।

### সৎ অংশ: এটি কী বিষয়ে ভুল হতে পারে?

**এলিয়ট ওয়েভের সমস্যা এই নয় যে এটি ভুল। সমস্যা হলো একে আগেভাগে মিথ্যা প্রমাণ করা কঠিন।**

তিনটি নিয়ম সত্যিই একটি কাউন্টকে সীমাবদ্ধ করে। নির্দিষ্ট পিভট সেট ও নির্দিষ্ট ডিগ্রি নির্ধারণ দিলে কিছু লেবেলিং অবৈধ এবং আপনি তা পাটিগাণিতিকভাবে প্রমাণ করতে পারেন — এই অধ্যায়ের এক্সেল শিট ও পাইথন ক্লাস ঠিক তা-ই করে। বেশিরভাগ কারিগরি কাঠামো যা দেয় তার চেয়ে এটি বেশি।

কিন্তু যেকোনো জীবন্ত মুহূর্তে আপনার কাছে নির্দিষ্ট পিভট সেট বা নির্দিষ্ট ডিগ্রি নির্ধারণ থাকে না। থাকে একটি আংশিক চলন, কয়েকটি সম্ভাব্য পিভট সেট, আর একটি তালিকা: বর্ধিত তৃতীয় না সম্পন্ন তৃতীয়, এক ডিগ্রির ওয়েভ ৪ না পরবর্তী ডিগ্রির ওয়েভ ২, ইম্পালস না লিডিং ডায়াগোনাল, ফ্ল্যাট না ট্রিপল থ্রি-র প্রথম দুই পা। **যেকোনো মুহূর্তে গ্রহণযোগ্য কাউন্টের সংখ্যা বড়, এবং কাঠামোটির স্বাভাবিক চর্চাই হলো বিকল্প কাউন্ট বহন করা।**

বিকল্প বহন করা বৌদ্ধিকভাবে সৎ এবং ব্যবহারিকভাবে ক্ষয়কারী। আপনি যদি একটি প্রধান কাউন্ট ও দুটি বিকল্প ধরে রাখেন যা একসঙ্গে উপরে, নিচে ও পাশে সব ঢেকে দেয়, তবে আপনি কোনো পূর্বাভাস দেননি। আর দাম যখন এমন কিছু করে যা কোনোটিই অনুমোদন করেনি, তখন প্রচলিত সমাধান হলো পুনরায় লেবেল করা — চলনটি ধারণার চেয়ে এক ডিগ্রি নিচে ছিল, বা ওয়েভ ৪ আসলে একটি ট্রায়াঙ্গল ছিল। **যে কাঠামো ঘটনার পরে পুনরায় লেবেল করতে পারে তা প্রতিটি ফলাফল ব্যাখ্যা করে, আর যে দাবি প্রতিটি ফলাফল ব্যাখ্যা করে তা কোনোটিরই পূর্বাভাস দেয় না।**

### ন্যায্য পরীক্ষা

একটি পরিচ্ছন্ন পরীক্ষা আছে, আর তা নিয়মগুলো থেকেই আসে।

**একটি এলিয়ট পূর্বাভাস তখনই এবং কেবল তখনই অর্থপূর্ণ যখন তা আগেভাগে বলে দেয় ঠিক কোন দামে কাউন্টটি মৃত।** নিয়মগুলোই আপনাকে ঐ দাম দেয়। ওয়েভ ২ পেরোনো একটি বুলিশ ইম্পালসে নিয়ম ৩ ওয়েভ ১-এর উচ্চতাকেই কার্যকর ইনভ্যালিডেশন স্তর বানায়: তার নিচে লেনদেন হলে কাউন্ট বাতিল, কোনো আলোচনা নেই।

তাই এই অধ্যায়ের শৃঙ্খলা এক বাক্যের। **ইনভ্যালিডেশন প্রাইস লিখে রাখুন, এমন জায়গায় প্রকাশ করুন যেখানে আপনি চুপচাপ সম্পাদনা করতে পারবেন না, এবং ঐ দাম লেনদেন হওয়ামাত্র কাউন্টটি ত্যাগ করুন।** "পুনর্বিবেচনা" নয়। ত্যাগ।

**যে বিশ্লেষক ইনভ্যালিডেশন স্তরের নাম বলতে পারেন না তিনি এলিয়ট ওয়েভ ব্যবহার করছেন না। তিনি বর্ণনা করছেন।** নিয়মগুলোই কাঠামোটির মিথ্যা-প্রমাণযোগ্য অংশ; যে চর্চাকারী সেগুলো বলতে অস্বীকার করেন তিনি শব্দভাণ্ডার ব্যবহার করছেন, সীমাবদ্ধতা নয়।

### কী টিকে থাকে, আর তার মূল্য কত

লেবেল সরিয়ে জিজ্ঞেস করুন কী দাঁড়িয়ে থাকে।

প্রবণতা সত্যিই ইম্পালস ও কারেকশনে চলে। কারেকশন সত্যিই চরিত্রে পালা করে। তৃতীয় ওয়েভ — বা প্রবণতার মধ্যাংশকে আপনি যা-ই বলুন — সাধারণত শক্তিশালীতম ও সর্বোচ্চ ভলিউম বহন করে। **তিনটিই সত্য, তিনটিই কার্যকর, এবং তিনটিই অধ্যায় ৪২-এর ডাও থিওরির পুনরুক্তি।** লেবেলিং যন্ত্রপাতি ছাড়াই আপনি প্রতিটি পর্যবেক্ষণ করতে পারেন।

যন্ত্রপাতিটি যা যোগ করে তা হলো কাঠামোগত শৃঙ্খলা, আর এটি একটি প্রকৃত সুফল যা তর্কাতর্কিতে হারিয়ে যায়। **এলিয়ট আপনাকে জিজ্ঞেস করতে বাধ্য করে আপনি একটি চলনের কোথায় আছেন, কেবল শেষ বারটি কী করল তা নয়।** যিনি "এটি কি তৃতীয় ওয়েভ না পঞ্চম?" প্রশ্নটি সত্যিই আত্মস্থ করেছেন তিনি যিনি করেননি তাঁর চেয়ে ভিন্নভাবে আচরণ করেন — প্রবণতার শুরুতে বেশি ধৈর্যশীল, শেষে বেশি সন্দেহপ্রবণ, এবং ষষ্ঠবারের ব্রেকআউট কেনার সম্ভাবনা অনেক কম।

এটি পাওয়ার মতো জিনিস। শুধু স্পষ্ট থাকুন যে এটি একটি পরীক্ষণযোগ্য স্টপ-সংযুক্ত চিন্তার সহায়ক, পূর্বাভাসের ইঞ্জিন নয়।

### ডিএসই কেন বিশেষভাবে কাউন্টিং ভেঙে দেয়

এলিয়ট কাউন্টিংয়ের জন্য একসঙ্গে একাধিক ডিগ্রিতে পরিচ্ছন্ন, ধারাবাহিক মূল্য ডেটা লাগে। **ডিএসই ঠিক উল্টোটা দিয়েছে।**

- **ফ্লোর-প্রাইস যুগ একসঙ্গে একাধিক ডিগ্রিতে দাম জমিয়ে দিয়েছিল।** যখন একটি শেয়ার প্রশাসনিকভাবে নির্ধারিত স্তরের নিচে লেনদেন করতে পারে না, তখন কাউন্টের জন্য প্রয়োজনীয় পিভটগুলো তৈরিই হয় না। ঐ সময়কাল বিস্তৃত যেকোনো কাউন্ট দুর্বল নয় — অর্থহীন, কারণ যে মূল্য সিরিজের ওপর এটি নির্মিত তা কাঠামোটির বর্ণিত প্রক্রিয়ায় তৈরি হয়নি।
- **রেকর্ড-ডেট সমন্বয় ভুয়া ওয়েভ প্রান্তবিন্দু তৈরি করে।** যে শেয়ার এক্স-ডিভিডেন্ড বা এক্স-বোনাস হয় তা এমন একটি গ্যাপ ছাপে যা সম্পন্ন ওয়েভের মতো দেখায় অথচ মোটেই তা নয়। অধ্যায় ৫-এর শৃঙ্খলা প্রযোজ্য: জিজ্ঞেস করুন কী সংখ্যাটিকে নড়তে বাধ্য করল।
- **পাতলা কাউন্টারে একটি পাঁচ-ওয়েভ ইম্পালস একজন অংশগ্রহণকারীর সঞ্চয়ন কর্মসূচি হতে পারে।** এলিয়ট যে কাঠামোকে গণমনস্তত্ত্বের ফল বলেন তার জন্য একটি গণ লাগে। যে কাউন্টারে হাতেগোনা কয়েকটি হিসাব টেপ চালায়, সেখানে আপনি একজন ক্রেতার অর্ডার-বিভাজন অ্যালগরিদমের ওয়েভ গুনছেন।

**কাউন্টিং কেবল তরল লার্জ ক্যাপ ও সূচকে সীমিত রাখুন, দৈনিক ডিগ্রি বা তার ওপরে।** তার নিচে, ডিএসই-তে, আপনি গোলমালকে গ্রিক অক্ষর দিয়ে লেবেল করে তাকে বিশ্লেষণ বলছেন।`,
    },
  },
};
