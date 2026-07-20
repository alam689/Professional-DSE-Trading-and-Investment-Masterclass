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
    simple: {
      en: `Think about a football commentator watching a match with no scoreboard.

The team scores. He says, "that was always coming — you could see it building." The other team equalises. He says, "and that is the natural response, momentum had to swing." Someone gets sent off. He says, "the game was crying out for a turning point."

**Every single thing that happens confirms his reading.** He is fluent, confident, and completely unfalsifiable. At no point before anything happened did he say *this specific thing will happen, and if instead that other thing happens, I was wrong.*

**Most Elliott Wave commentary you will ever read is that commentator.** This chapter is about the small part of Elliott that is not.

### What Elliott actually says

Strip the jargon and the claim is simple. **A trend moves in five steps forward and three steps back.** Five up, three down. Then the whole eight-step package becomes one step of a bigger pattern, and the bigger pattern also has five forward and three back.

The five forward steps are numbered 1, 2, 3, 4, 5. Steps 1, 3 and 5 go up. Steps 2 and 4 are the pauses where price falls back. The three steps back are lettered A, B, C.

That is genuinely all of it. Everything else is detail.

### Three things that are actually rules

Here is the part that matters, and it is short.

- **Step 2 never falls all the way back below where step 1 started.** If it does, you counted wrong.
- **Step 3 is never the shortest of steps 1, 3 and 5.** If it is, you counted wrong.
- **Step 4 never drops back into the price range that step 1 covered.** If it does, you counted wrong.

Notice what those three sentences have in common. **Each one can be checked with a subtraction, and each one can turn out false.** That is rare in chart analysis and it is the whole reason Elliott is worth an evening of your time.

### Everything else is "usually"

You will read that step 2 usually falls back about 38% or 50% or 61.8% of step 1. You will read that step 3 is usually 1.618 times step 1. You will read that if step 2 was a fast sharp drop then step 4 is usually a slow sideways drift.

All of that is **usually**. None of it is a rule. **You cannot be proved wrong by a "usually",** and a thing that cannot prove you wrong cannot help you.

Beginners get this exactly backwards. They treat "wave 3 is 1.618 times wave 1" as a law and then, when wave 4 drops into wave 1's range — an actual rule violation — they shrug and redraw the labels.

### The trap

Here is how the trap closes.

You label a chart. Price does something your labels did not allow. **So you move the labels.** Now the chart fits again. You feel clever. You were never wrong.

Do that twice and you have built a machine that is always right and never useful. **A method that can never be wrong cannot tell you anything,** because being told something means some possibilities got ruled out.

### The one habit that fixes it

Before you take any position on a count, write one sentence on paper:

> *I believe this is wave 3 up. If the stock trades at or below 51.60, I was wrong, and I will say so.*

That sentence costs nothing and changes everything. **The number is fixed before the outcome is known, so you cannot quietly move it afterwards.** If it trades, you were wrong. Not "the count evolved". Wrong.

Anyone who talks about waves and cannot give you that number is the football commentator.

### And on the DSE, two extra warnings

**Circuit limits chop the tops and bottoms off waves.** If a stock is allowed to move only so far in a day, a strong third wave gets sliced into a staircase of limit-up days. The shape on your screen is the exchange's rule, not the crowd's mood.

**Floor prices erase wave structure completely.** During the floor-price windows a share simply could not trade below a set level. A count drawn across that period is not a weak count. It is a count of something that never happened.

And remember the one-way street from Chapter 30: **on this market a wave-count top is a reason to sell what you own. It is never a reason to short.**`,
      bn: `স্কোরবোর্ড ছাড়া খেলা দেখা এক ফুটবল ধারাভাষ্যকারের কথা ভাবুন।

দল গোল করল। তিনি বললেন, "এটি আসছিলই — আপনি তৈরি হতে দেখছিলেন।" অন্য দল সমতা ফেরাল। তিনি বললেন, "আর এটিই স্বাভাবিক জবাব, গতি বদলাতেই হতো।" কেউ লাল কার্ড পেল। তিনি বললেন, "খেলাটি একটি মোড়ের জন্য কাঁদছিল।"

**যা কিছু ঘটে তার প্রতিটিই তাঁর পাঠ নিশ্চিত করে।** তিনি সাবলীল, আত্মবিশ্বাসী এবং সম্পূর্ণরূপে মিথ্যা-প্রমাণ-অযোগ্য। কিছু ঘটার আগে কোনো মুহূর্তেই তিনি বলেননি, *এই নির্দিষ্ট জিনিসটি ঘটবে, আর তার বদলে ঐ অন্য জিনিসটি ঘটলে আমি ভুল ছিলাম।*

**আপনি জীবনে যত এলিয়ট ওয়েভ ভাষ্য পড়বেন তার বেশিরভাগই ঐ ধারাভাষ্যকার।** এই অধ্যায় এলিয়টের সেই ছোট অংশটি নিয়ে যা তা নয়।

### এলিয়ট আসলে কী বলে

পরিভাষা সরিয়ে দিলে দাবিটি সরল। **একটি প্রবণতা সামনে পাঁচ ধাপ ও পিছনে তিন ধাপ চলে।** পাঁচ উপরে, তিন নিচে। তারপর গোটা আট-ধাপের প্যাকেটটি একটি বড় নকশার একটি ধাপ হয়ে যায়, আর বড় নকশাটিরও সামনে পাঁচ ও পিছনে তিন।

সামনের পাঁচ ধাপের নম্বর ১, ২, ৩, ৪, ৫। ধাপ ১, ৩ ও ৫ ওপরে যায়। ধাপ ২ ও ৪ হলো সেই বিরতি যেখানে দাম ফিরে নামে। পিছনের তিন ধাপের অক্ষর A, B, C।

সত্যিই এটুকুই। বাকি সবই বিস্তারিত।

### তিনটি জিনিস যা সত্যিই নিয়ম

এই অংশটিই গুরুত্বপূর্ণ, আর এটি ছোট।

- **ধাপ ২ কখনো ধাপ ১ যেখান থেকে শুরু হয়েছিল তার নিচ পর্যন্ত নামে না।** নামলে আপনি ভুল গুনেছেন।
- **ধাপ ৩ কখনো ধাপ ১, ৩ ও ৫-এর মধ্যে ক্ষুদ্রতম নয়।** হলে আপনি ভুল গুনেছেন।
- **ধাপ ৪ কখনো ধাপ ১ যে মূল্য পরিসর ঢেকেছিল তাতে ফিরে ঢোকে না।** ঢুকলে আপনি ভুল গুনেছেন।

লক্ষ করুন এই তিন বাক্যের মধ্যে কী মিল। **প্রতিটিই একটি বিয়োগ দিয়ে যাচাই করা যায়, আর প্রতিটিই মিথ্যা প্রমাণিত হতে পারে।** চার্ট বিশ্লেষণে এটি বিরল আর এটিই এলিয়টে একটি সন্ধ্যা ব্যয় করার পুরো কারণ।

### বাকি সবই "সাধারণত"

আপনি পড়বেন ধাপ ২ সাধারণত ধাপ ১-এর প্রায় ৩৮% বা ৫০% বা ৬১.৮% ফিরে নামে। পড়বেন ধাপ ৩ সাধারণত ধাপ ১-এর ১.৬১৮ গুণ। পড়বেন ধাপ ২ দ্রুত তীক্ষ্ণ পতন হলে ধাপ ৪ সাধারণত ধীর পার্শ্বমুখী ভেসে যাওয়া।

এসবই **সাধারণত**। কোনোটিই নিয়ম নয়। **একটি "সাধারণত" আপনাকে ভুল প্রমাণ করতে পারে না,** আর যা আপনাকে ভুল প্রমাণ করতে পারে না তা আপনাকে সাহায্যও করতে পারে না।

নতুনরা এটি ঠিক উল্টো বোঝেন। তাঁরা "ওয়েভ ৩ ওয়েভ ১-এর ১.৬১৮ গুণ"-কে সূত্র ধরেন, তারপর যখন ওয়েভ ৪ ওয়েভ ১-এর পরিসরে নেমে আসে — একটি প্রকৃত নিয়ম লঙ্ঘন — তখন কাঁধ ঝাঁকিয়ে লেবেলগুলো নতুন করে আঁকেন।

### ফাঁদ

ফাঁদটি যেভাবে বন্ধ হয়।

আপনি একটি চার্ট লেবেল করলেন। দাম এমন কিছু করল যা আপনার লেবেল অনুমোদন করেনি। **তাই আপনি লেবেল সরিয়ে দিলেন।** এখন চার্টটি আবার মিলে যায়। আপনি নিজেকে চতুর ভাবেন। আপনি কখনো ভুল ছিলেন না।

দুবার এটি করুন, আর আপনি এমন একটি যন্ত্র বানিয়েছেন যা সর্বদা ঠিক এবং কখনোই কাজে লাগে না। **যে পদ্ধতি কখনো ভুল হতে পারে না তা আপনাকে কিছুই বলতে পারে না,** কারণ কিছু বলা মানে কিছু সম্ভাবনা বাদ পড়া।

### যে একটি অভ্যাস এটি সারায়

কোনো কাউন্টের ওপর অবস্থান নেওয়ার আগে কাগজে একটি বাক্য লিখুন:

> *আমি মনে করি এটি ওয়েভ ৩ ঊর্ধ্বমুখী। শেয়ারটি ৫১.৬০ বা তার নিচে লেনদেন হলে আমি ভুল ছিলাম, আর আমি তা বলব।*

ঐ বাক্যটির কোনো খরচ নেই আর তা সবকিছু বদলে দেয়। **সংখ্যাটি ফলাফল জানার আগেই স্থির, তাই আপনি পরে চুপচাপ তা সরাতে পারবেন না।** লেনদেন হলে আপনি ভুল ছিলেন। "কাউন্টটি বিবর্তিত হয়েছে" নয়। ভুল।

যিনি ওয়েভ নিয়ে কথা বলেন অথচ আপনাকে ঐ সংখ্যাটি দিতে পারেন না, তিনিই ঐ ফুটবল ধারাভাষ্যকার।

### আর ডিএসই-তে দুটি বাড়তি সতর্কতা

**সার্কিট সীমা ওয়েভের মাথা ও পা কেটে দেয়।** একটি শেয়ার দিনে যদি নির্দিষ্ট দূরত্বের বেশি নড়তে না পারে, তবে একটি শক্তিশালী তৃতীয় ওয়েভ লিমিট-আপ দিনের সিঁড়িতে কাটা পড়ে। আপনার পর্দার আকৃতিটি এক্সচেঞ্জের বিধি, ভিড়ের মেজাজ নয়।

**ফ্লোর প্রাইস ওয়েভ কাঠামো সম্পূর্ণ মুছে দেয়।** ফ্লোর-প্রাইসের সময়ে একটি শেয়ার নির্ধারিত স্তরের নিচে লেনদেনই করতে পারত না। ঐ সময়কাল জুড়ে আঁকা কাউন্ট দুর্বল কাউন্ট নয়। তা এমন কিছুর কাউন্ট যা কখনো ঘটেনি।

আর অধ্যায় ৩০-এর একমুখী রাস্তাটি মনে রাখুন: **এই বাজারে ওয়েভ-কাউন্টের শীর্ষ আপনার যা আছে তা বিক্রির কারণ। এটি কখনোই শর্ট করার কারণ নয়।**`,
    },

    example: {
      en: `### BENGALTEL: a count that survived, and what that was worth

BENGALTEL is a liquid DSE large-cap used illustratively here; **every figure below is constructed, not historical.** ATR(14) is BDT 1.85 and twenty-day average volume is 1,100,000 shares. The count is at daily degree — call it Intermediate — inside a larger advance.

The six pivots, in order, with session numbers counted from the start of the move:

| Point | Label | Session | Price (BDT) | Character |
|---|---|---|---|---|
| 0 | impulse start | 0 | **42.00** | Base after a long decline |
| 1 | wave 1 high | 22 | **51.60** | Advance on rising but unremarkable volume |
| 2 | wave 2 low | 31 | **47.80** | Sharp, fast zigzag — 9 sessions |
| 3 | wave 3 high | 72 | **63.35** | The public leg; highest volume of the move |
| 4 | wave 4 low | 93 | **59.70** | Shallow, sideways, slow — 21 sessions |
| 5 | wave 5 high | 117 | **69.30** | Rising price, falling volume, narrowing breadth |

Five subtractions give the wave lengths:

| Wave | Computation | Length (BDT) |
|---|---|---|
| 1 | 51.60 − 42.00 | **9.60** |
| 2 | 51.60 − 47.80 | **3.80** |
| 3 | 63.35 − 47.80 | **15.55** |
| 4 | 63.35 − 59.70 | **3.65** |
| 5 | 69.30 − 59.70 | **9.60** |
| Net 0→5 | 69.30 − 42.00 | **27.30** |

### Step one is always the rules, never the ratios

**Run the three hard rules before you admire anything.**

$$\\text{Rule 1: } P_2 = 47.80 > P_0 = 42.00 \\;\\;\\checkmark$$
$$\\text{Rule 2: } \\min(9.60,\\;15.55,\\;9.60) = 9.60 \\ne L_3 = 15.55 \\;\\;\\checkmark$$
$$\\text{Rule 3: } P_4 = 59.70 > P_1 = 51.60,\\;\\text{ gap } = 8.10 \\;\\;\\checkmark$$

**All three pass. The count is legal.** Note the exact meaning of that sentence: it says the labelling is *permitted*, not that it is *correct*. There is no arithmetic in Elliott that can promote a legal count to a true one.

### Now the guidelines, and notice how well they fit

$$\\frac{L_3}{L_1} = \\frac{15.55}{9.60} = 1.6198 \\qquad \\frac{L_5}{L_1} = \\frac{9.60}{9.60} = 1.0000 \\qquad \\frac{L_5}{L_3} = \\frac{9.60}{15.55} = 0.6174$$

Wave 3 is 1.6198 times wave 1 against a textbook 1.618. Wave 5 equals wave 1 to the paisa. Wave 5 is 0.6174 of wave 3 against a textbook 0.618.

Retracement depths, using Chapter 41's ratios:

$$\\text{Wave 2: } \\frac{3.80}{9.60} \\times 100 = 39.58\\% \\qquad \\text{Wave 4: } \\frac{3.65}{15.55} \\times 100 = 23.47\\%$$

Wave 2 lands near 38.2%; wave 4 lands near 23.6%. Alternation:

$$|39.58 - 23.47| = 16.11 > 10 \\;\\Rightarrow\\; \\textbf{ALTERNATES}$$

And alternation holds in character too: wave 2 was sharp and took 9 sessions, wave 4 was shallow and took 21.

**This is a suspiciously beautiful chart, and you are entitled to be suspicious.** It is constructed, and it is constructed to be clean precisely so that the arithmetic is visible. **Real DSE counts do not look like this.** Roughly one in five liquid-large-cap advances produces ratios this obliging; the other four produce something you have to argue about. If your own charts look like this one, you are almost certainly choosing your pivots to make them.

### The two projections that were made in advance

This is the part that has forecasting content, because both numbers were written down before the price got there.

**From point 2, projecting wave 3 at 1.618 × wave 1:**

$$47.80 + (1.618 \\times 9.60) = 47.80 + 15.5328 = \\mathbf{63.33}$$

Wave 3 actually terminated at 63.35 — **two paisa away.**

**From point 4, two independent projections for wave 5:**

$$\\text{Equality: } 59.70 + 9.60 = \\mathbf{69.30} \\qquad \\text{0.618 of wave 3: } 59.70 + (0.618 \\times 15.55) = \\mathbf{69.31}$$

The two land one paisa apart. That is a Chapter 41 cluster in the strict sense — **two independent methods converging on the same price** — and wave 5 terminated at 69.30.

### The channel, computed rather than eyeballed

Draw the base line through the ends of waves 2 and 4, at sessions 31 and 93:

$$m = \\frac{59.70 - 47.80}{93 - 31} = \\frac{11.90}{62} = 0.1919 \\text{ BDT per session}$$

Project the parallel from the end of wave 3, session 72, price 63.35, forward to session 117:

$$63.35 + (0.1919 \\times 45) = 63.35 + 8.64 = \\mathbf{71.99}$$

Wave 5 topped at 69.30, **2.69 below the upper rail.** A fifth wave that terminates inside its own channel rather than through it is the ordinary, non-extended case — consistent with wave 3 being the extended wave, which the ratios already told us.

### What this count was actually worth as a trade

Now the honest accounting. Suppose you were long from the wave 2 low at 47.80 with the count written down.

The rule-3 invalidation is the wave 1 high:

$$X_{\\text{count}} = \\max(42.00,\\;51.60) = 51.60$$

At the current price of 66.00 that sits:

$$\\frac{66.00 - 51.60}{66.00} \\times 100 = 21.82\\% \\text{ below} \\qquad \\frac{66.00 - 51.60}{1.85} = 7.78\\,ATR$$

**A stop 7.78 ATR away is not a stop. It is a donation.** This is the single most important practical fact in the chapter and almost nobody states it: **the Elliott invalidation is an analytical invalidation, not a trade stop.** It tells you when the *idea* is dead. It does not tell you where to place an order.

The two must be run in parallel:

| | Analytical | Operational |
|---|---|---|
| Level | 51.60 (rule 3) | 59.70 − 0.5 ATR = **58.78** (wave 4 low, Ch 30 method) |
| Distance from 66.00 | 21.82% | 10.94% |
| In ATR | 7.78 | 3.90 |
| If it trades | **Count is void. Abandon the read.** | Position is out. The read may survive. |

**Getting stopped out operationally does not kill the count. Trading 51.60 does.** Conflating those two is how people end up carrying enormous losses in the name of "respecting the wave structure."

### The alternate count, stated honestly

Here is where intellectual honesty costs something. **The same six pivots admit at least two other labellings.**

| Reading | Structure | What it implies at 66.00 |
|---|---|---|
| **Primary** | 1-2-3-4-5 complete at 69.30 | Impulse finished; expect an A-B-C correction toward 59.70–55.00 |
| **Alternate A** | The move 42.00→69.30 is wave 1 of a larger degree | 66.00 is inside a wave 2 that can fall to 58.00 and still be bullish |
| **Alternate B** | 42.00→51.60→47.80→69.30 is an A-B-C zigzag, not an impulse | The whole advance was corrective; a full retrace to 42.00 is permitted |

**Read that table and notice the problem.** Between them, the three readings permit price to rise, fall moderately, or fall all the way back. **A practitioner holding all three has said nothing.**

So this chapter takes a position. **Carry one count. Write its invalidation. If you genuinely cannot choose between counts, you do not have a count — you have a chart, and you should trade it with Chapter 30's levels and Chapter 42's trend structure instead.** Those work without a label.

### The DSE overlay, which you check before any of the above counts

| Check | On BENGALTEL | Effect on the count |
|---|---|---|
| Any session inside a floor-price window? | If yes on even one pivot, **stop** | The pivot was not produced by trading. The count is void, not weak. |
| Did wave 3 contain consecutive limit-up sessions? | At ~10% daily bands near 55.00, a limit day is about 5.50 | Sub-wave pivots inside wave 3 are the exchange's staircase, not the crowd's |
| Any pivot on or near a record date? | An ex-bonus gap prints a false wave endpoint | Adjust or delete the pivot, per Chapter 5 |
| Free float depth at the pivots | 1,100,000 ADV at ~60 is about BDT 6.6 crore a day | A single ticket can manufacture a pivot on a thin session |

That second row deserves a sentence of its own. **Circuit limits truncate wave extremes**, which means the very numbers the ratios are computed from — 63.35, 69.30 — may be where the exchange stopped trading rather than where selling met buying. **A ratio of 1.6198 computed from a truncated high is a precise number about an arbitrary boundary.**

### The verdict on this count

The sheet returns: **COUNT VALID — abandon if it trades 51.60.**

That is exactly as much as Elliott is entitled to say. It does not say the count is right. It says no rule has been broken yet, and it names the price at which one would be. **Everything else in the analysis above — the 1.6198, the 69.31 cluster, the 71.99 channel — is decoration on top of that one falsifiable sentence.**`,
      bn: `### BENGALTEL: যে কাউন্ট টিকে গেল, আর তার মূল্য কত ছিল

BENGALTEL এখানে দৃষ্টান্তমূলকভাবে ব্যবহৃত একটি তরল ডিএসই লার্জ-ক্যাপ; **নিচের প্রতিটি সংখ্যা নির্মিত, ঐতিহাসিক নয়।** ATR(১৪) ১.৮৫ টাকা এবং কুড়ি দিনের গড় ভলিউম ১১,০০,০০০ শেয়ার। কাউন্টটি দৈনিক ডিগ্রিতে — একে Intermediate বলুন — একটি বৃহত্তর অগ্রগতির ভেতরে।

ছয়টি পিভট, ক্রমানুসারে, চলনের শুরু থেকে গোনা সেশন নম্বরসহ:

| পয়েন্ট | লেবেল | সেশন | দাম (টাকা) | চরিত্র |
|---|---|---|---|---|
| ০ | ইম্পালসের শুরু | ০ | **৪২.০০** | দীর্ঘ পতনের পর ভিত্তি |
| ১ | ওয়েভ ১ উচ্চ | ২২ | **৫১.৬০** | বাড়তে থাকা কিন্তু সাধারণ ভলিউমে অগ্রগতি |
| ২ | ওয়েভ ২ নিম্ন | ৩১ | **৪৭.৮০** | তীক্ষ্ণ, দ্রুত জিগজ্যাগ — ৯ সেশন |
| ৩ | ওয়েভ ৩ উচ্চ | ৭২ | **৬৩.৩৫** | জনসাধারণের পা; চলনের সর্বোচ্চ ভলিউম |
| ৪ | ওয়েভ ৪ নিম্ন | ৯৩ | **৫৯.৭০** | অগভীর, পার্শ্বমুখী, ধীর — ২১ সেশন |
| ৫ | ওয়েভ ৫ উচ্চ | ১১৭ | **৬৯.৩০** | বাড়তে থাকা দাম, কমতে থাকা ভলিউম, সংকুচিত ব্রেডথ |

পাঁচটি বিয়োগ ওয়েভের দৈর্ঘ্য দেয়:

| ওয়েভ | গণনা | দৈর্ঘ্য (টাকা) |
|---|---|---|
| ১ | ৫১.৬০ − ৪২.০০ | **৯.৬০** |
| ২ | ৫১.৬০ − ৪৭.৮০ | **৩.৮০** |
| ৩ | ৬৩.৩৫ − ৪৭.৮০ | **১৫.৫৫** |
| ৪ | ৬৩.৩৫ − ৫৯.৭০ | **৩.৬৫** |
| ৫ | ৬৯.৩০ − ৫৯.৭০ | **৯.৬০** |
| নেট ০→৫ | ৬৯.৩০ − ৪২.০০ | **২৭.৩০** |

### প্রথম ধাপ সবসময় নিয়ম, কখনো অনুপাত নয়

**কিছু প্রশংসা করার আগে তিনটি কঠিন নিয়ম চালান।**

$$\\text{Rule 1: } P_2 = 47.80 > P_0 = 42.00 \\;\\;\\checkmark$$
$$\\text{Rule 2: } \\min(9.60,\\;15.55,\\;9.60) = 9.60 \\ne L_3 = 15.55 \\;\\;\\checkmark$$
$$\\text{Rule 3: } P_4 = 59.70 > P_1 = 51.60,\\;\\text{ gap } = 8.10 \\;\\;\\checkmark$$

**তিনটিই পাস। কাউন্টটি বৈধ।** ঐ বাক্যটির সঠিক অর্থ লক্ষ করুন: এটি বলে লেবেলিংটি *অনুমোদিত*, *সঠিক* নয়। এলিয়টে এমন কোনো পাটিগণিত নেই যা একটি বৈধ কাউন্টকে সত্য কাউন্টে উন্নীত করতে পারে।

### এবার নির্দেশিকা, আর লক্ষ করুন কত সুন্দর মেলে

$$\\frac{L_3}{L_1} = \\frac{15.55}{9.60} = 1.6198 \\qquad \\frac{L_5}{L_1} = \\frac{9.60}{9.60} = 1.0000 \\qquad \\frac{L_5}{L_3} = \\frac{9.60}{15.55} = 0.6174$$

ওয়েভ ৩ ওয়েভ ১-এর ১.৬১৯৮ গুণ, পাঠ্যবইয়ের ১.৬১৮-এর বিপরীতে। ওয়েভ ৫ পয়সা পর্যন্ত ওয়েভ ১-এর সমান। ওয়েভ ৫ ওয়েভ ৩-এর ০.৬১৭৪, পাঠ্যবইয়ের ০.৬১৮-এর বিপরীতে।

রিট্রেসমেন্টের গভীরতা, অধ্যায় ৪১-এর অনুপাত ব্যবহার করে:

$$\\text{Wave 2: } \\frac{3.80}{9.60} \\times 100 = 39.58\\% \\qquad \\text{Wave 4: } \\frac{3.65}{15.55} \\times 100 = 23.47\\%$$

ওয়েভ ২ ৩৮.২%-এর কাছে নামে; ওয়েভ ৪ ২৩.৬%-এর কাছে। অল্টারনেশন:

$$|39.58 - 23.47| = 16.11 > 10 \\;\\Rightarrow\\; \\textbf{ALTERNATES}$$

আর অল্টারনেশন চরিত্রেও টেকে: ওয়েভ ২ ছিল তীক্ষ্ণ ও নিল ৯ সেশন, ওয়েভ ৪ ছিল অগভীর ও নিল ২১।

**এটি সন্দেহজনকভাবে সুন্দর একটি চার্ট, আর সন্দেহ করার অধিকার আপনার আছে।** এটি নির্মিত, আর নির্মিত পরিচ্ছন্ন হওয়ার জন্যই যাতে পাটিগণিতটি দৃশ্যমান হয়। **প্রকৃত ডিএসই কাউন্ট এমন দেখায় না।** মোটামুটি প্রতি পাঁচটি তরল লার্জ-ক্যাপ অগ্রগতির একটি এমন অনুগত অনুপাত দেয়; বাকি চারটি এমন কিছু দেয় যা নিয়ে তর্ক করতে হয়। আপনার নিজের চার্ট যদি এটির মতো দেখায়, তবে আপনি প্রায় নিশ্চিতভাবেই সেগুলো তেমন করার জন্যই পিভট বাছছেন।

### যে দুটি প্রক্ষেপণ আগেভাগে করা হয়েছিল

এই অংশটিরই পূর্বাভাসের বিষয়বস্তু আছে, কারণ দুটি সংখ্যাই দাম সেখানে পৌঁছানোর আগে লেখা হয়েছিল।

**পয়েন্ট ২ থেকে, ওয়েভ ৩-কে ওয়েভ ১-এর ১.৬১৮ গুণে প্রক্ষেপণ:**

$$47.80 + (1.618 \\times 9.60) = 47.80 + 15.5328 = \\mathbf{63.33}$$

ওয়েভ ৩ আসলে শেষ হয়েছিল ৬৩.৩৫-এ — **দুই পয়সা দূরে।**

**পয়েন্ট ৪ থেকে, ওয়েভ ৫-এর জন্য দুটি স্বাধীন প্রক্ষেপণ:**

$$\\text{Equality: } 59.70 + 9.60 = \\mathbf{69.30} \\qquad \\text{0.618 of wave 3: } 59.70 + (0.618 \\times 15.55) = \\mathbf{69.31}$$

দুটি এক পয়সা দূরে নামে। এটি কঠোর অর্থে অধ্যায় ৪১-এর একটি ক্লাস্টার — **দুটি স্বাধীন পদ্ধতি একই দামে অভিসারী** — আর ওয়েভ ৫ শেষ হয়েছিল ৬৯.৩০-এ।

### চ্যানেল, চোখে না মেপে গণনা করে

সেশন ৩১ ও ৯৩-এ ওয়েভ ২ ও ৪-এর প্রান্ত দিয়ে ভিত্তি রেখা টানুন:

$$m = \\frac{59.70 - 47.80}{93 - 31} = \\frac{11.90}{62} = 0.1919 \\text{ BDT per session}$$

ওয়েভ ৩-এর প্রান্ত, সেশন ৭২, দাম ৬৩.৩৫ থেকে সমান্তরালটি সেশন ১১৭ পর্যন্ত প্রক্ষেপ করুন:

$$63.35 + (0.1919 \\times 45) = 63.35 + 8.64 = \\mathbf{71.99}$$

ওয়েভ ৫ শীর্ষ করেছে ৬৯.৩০-এ, **উপরের রেলের ২.৬৯ নিচে।** যে পঞ্চম ওয়েভ নিজের চ্যানেলের ভেতরেই শেষ হয়, তার মধ্য দিয়ে নয়, তা সাধারণ অ-বর্ধিত ঘটনা — যা ওয়েভ ৩-ই বর্ধিত ওয়েভ হওয়ার সঙ্গে সামঞ্জস্যপূর্ণ, এবং অনুপাতগুলো আগেই তা বলেছে।

### ট্রেড হিসেবে এই কাউন্টের প্রকৃত মূল্য কত ছিল

এবার সৎ হিসাব। ধরুন আপনি ওয়েভ ২-এর নিম্ন ৪৭.৮০ থেকে লং ছিলেন, কাউন্টটি লেখা ছিল।

নিয়ম-৩ ইনভ্যালিডেশন হলো ওয়েভ ১-এর উচ্চ:

$$X_{\\text{count}} = \\max(42.00,\\;51.60) = 51.60$$

৬৬.০০ বর্তমান দামে তা বসে:

$$\\frac{66.00 - 51.60}{66.00} \\times 100 = 21.82\\% \\text{ below} \\qquad \\frac{66.00 - 51.60}{1.85} = 7.78\\,ATR$$

**৭.৭৮ ATR দূরের একটি স্টপ স্টপ নয়। তা অনুদান।** এটি অধ্যায়ের একক সবচেয়ে গুরুত্বপূর্ণ ব্যবহারিক তথ্য আর প্রায় কেউ তা বলে না: **এলিয়ট ইনভ্যালিডেশন একটি বিশ্লেষণী ইনভ্যালিডেশন, ট্রেডের স্টপ নয়।** এটি বলে *ধারণাটি* কখন মৃত। এটি বলে না অর্ডার কোথায় বসাতে হবে।

দুটিকে সমান্তরালে চালাতে হবে:

| | বিশ্লেষণী | পরিচালনগত |
|---|---|---|
| স্তর | ৫১.৬০ (নিয়ম ৩) | ৫৯.৭০ − ০.৫ ATR = **৫৮.৭৮** (ওয়েভ ৪ নিম্ন, অ ৩০-এর পদ্ধতি) |
| ৬৬.০০ থেকে দূরত্ব | ২১.৮২% | ১০.৯৪% |
| ATR-এ | ৭.৭৮ | ৩.৯০ |
| লেনদেন হলে | **কাউন্ট বাতিল। পাঠটি ত্যাগ করুন।** | পজিশন বাইরে। পাঠটি টিকে থাকতে পারে। |

**পরিচালনগতভাবে স্টপ-আউট হওয়া কাউন্টকে মারে না। ৫১.৬০ লেনদেন হওয়া মারে।** এই দুটিকে গুলিয়ে ফেলাই সেই পথ যেভাবে মানুষ "ওয়েভ কাঠামোকে সম্মান করা"-র নামে বিশাল লোকসান বয়ে বেড়ায়।

### বিকল্প কাউন্ট, সৎভাবে বলা

এখানেই বৌদ্ধিক সততার একটি দাম আছে। **একই ছয়টি পিভট অন্তত আরও দুটি লেবেলিং অনুমোদন করে।**

| পাঠ | কাঠামো | ৬৬.০০-এ যা বোঝায় |
|---|---|---|
| **প্রধান** | ১-২-৩-৪-৫ ৬৯.৩০-এ সম্পন্ন | ইম্পালস শেষ; ৫৯.৭০–৫৫.০০-এর দিকে A-B-C কারেকশন প্রত্যাশিত |
| **বিকল্প ক** | ৪২.০০→৬৯.৩০ চলনটি বৃহত্তর ডিগ্রির ওয়েভ ১ | ৬৬.০০ এমন একটি ওয়েভ ২-এর ভেতরে যা ৫৮.০০ পর্যন্ত নেমেও বুলিশ থাকতে পারে |
| **বিকল্প খ** | ৪২.০০→৫১.৬০→৪৭.৮০→৬৯.৩০ একটি A-B-C জিগজ্যাগ, ইম্পালস নয় | পুরো অগ্রগতিটিই কারেক্টিভ ছিল; ৪২.০০ পর্যন্ত সম্পূর্ণ প্রত্যাবর্তন অনুমোদিত |

**টেবিলটি পড়ুন আর সমস্যাটি লক্ষ করুন।** তিনটি পাঠ মিলে দামকে উঠতে, মাঝারিভাবে পড়তে, বা পুরোটা ফিরে যেতে অনুমোদন করে। **যে চর্চাকারী তিনটিই ধরে আছেন তিনি কিছুই বলেননি।**

তাই এই অধ্যায় একটি অবস্থান নেয়। **একটি কাউন্ট বহন করুন। তার ইনভ্যালিডেশন লিখুন। আপনি যদি সত্যিই কাউন্টের মধ্যে বাছতে না পারেন, তবে আপনার কোনো কাউন্ট নেই — আপনার একটি চার্ট আছে, আর তা বরং অধ্যায় ৩০-এর লেভেল ও অধ্যায় ৪২-এর প্রবণতা কাঠামো দিয়ে ট্রেড করুন।** ওগুলো লেবেল ছাড়াই কাজ করে।

### ডিএসই স্তর, যা ওপরের কিছু গণ্য হওয়ার আগে যাচাই করবেন

| যাচাই | BENGALTEL-এ | কাউন্টে প্রভাব |
|---|---|---|
| কোনো সেশন কি ফ্লোর-প্রাইসের সময়ে? | একটি পিভটেও হ্যাঁ হলে **থামুন** | পিভটটি লেনদেন থেকে তৈরি হয়নি। কাউন্ট বাতিল, দুর্বল নয়। |
| ওয়েভ ৩-এ কি পরপর লিমিট-আপ সেশন ছিল? | ৫৫.০০-এর কাছে ~১০% দৈনিক ব্যান্ডে একটি লিমিট দিন প্রায় ৫.৫০ | ওয়েভ ৩-এর ভেতরের উপ-ওয়েভ পিভট এক্সচেঞ্জের সিঁড়ি, ভিড়ের নয় |
| কোনো পিভট কি রেকর্ড ডেটে বা তার কাছে? | এক্স-বোনাস গ্যাপ ভুয়া ওয়েভ প্রান্তবিন্দু ছাপে | অধ্যায় ৫ অনুযায়ী পিভটটি সমন্বয় করুন বা মুছুন |
| পিভটে ফ্রি ফ্লোটের গভীরতা | ~৬০-এ ১১,০০,০০০ ADV দিনে প্রায় ৬.৬ কোটি টাকা | পাতলা সেশনে একটি টিকিটই একটি পিভট বানিয়ে দিতে পারে |

দ্বিতীয় সারিটি নিজের একটি বাক্য পাওয়ার যোগ্য। **সার্কিট সীমা ওয়েভের প্রান্ত কেটে দেয়**, অর্থাৎ যে সংখ্যাগুলো থেকে অনুপাত গণনা হয় — ৬৩.৩৫, ৬৯.৩০ — সেগুলো হয়তো সেই জায়গা যেখানে এক্সচেঞ্জ লেনদেন থামিয়েছে, যেখানে বিক্রি ক্রয়ের সঙ্গে মিলেছে তা নয়। **কাটা উচ্চতা থেকে গণনা করা ১.৬১৯৮ অনুপাতটি একটি খেয়ালি সীমানা সম্পর্কে একটি নিখুঁত সংখ্যা।**

### এই কাউন্টের রায়

শিট ফেরত দেয়: **COUNT VALID — abandon if it trades 51.60.**

এলিয়ট যতটুকু বলার অধিকার রাখে ঠিক ততটুকুই। এটি বলে না কাউন্টটি সঠিক। এটি বলে এখনো কোনো নিয়ম ভাঙেনি, আর যে দামে একটি ভাঙবে তার নাম বলে। **ওপরের বিশ্লেষণের বাকি সব — ১.৬১৯৮, ৬৯.৩১ ক্লাস্টার, ৭১.৯৯ চ্যানেল — ঐ একটি মিথ্যা-প্রমাণযোগ্য বাক্যের ওপর অলংকার।**`,
    },

    formula: {
      en: `### 1. The 5-3 structure, written down

Let an impulse be the ordered pivot set $P_0, P_1, P_2, P_3, P_4, P_5$ in a rising market, and define the five wave lengths as absolute travel:

$$L_1 = P_1 - P_0, \\quad L_2 = P_1 - P_2, \\quad L_3 = P_3 - P_2, \\quad L_4 = P_3 - P_4, \\quad L_5 = P_5 - P_4$$

**Waves 2 and 4 are measured as retracement magnitudes, not as signed moves.** That is why $L_2 = P_1 - P_2$ and not $P_2 - P_1$. On BENGALTEL this gives 9.60, 3.80, 15.55, 3.65, 9.60 with a net advance of 27.30.

The complete cycle is eight waves: the five-wave impulse followed by a three-wave correction $A, B, C$. Subdivision is fixed:

| Wave | Direction | Subdivides into |
|---|---|---|
| 1, 3, 5 | With trend | 5 (impulse) |
| 2, 4 | Against trend | 3 (corrective) |
| A | Against trend | 5 in a zigzag, 3 in a flat |
| B | With prior trend | 3 |
| C | Against trend | 5 |

### 2. The three hard rules, as falsifiable inequalities

**These are the only statements in Elliott Wave that can be violated. Everything else is commentary.**

$$\\textbf{Rule 1:} \\quad P_2 > P_0 \\qquad \\text{equivalently} \\qquad \\frac{L_2}{L_1} < 1$$

$$\\textbf{Rule 2:} \\quad L_3 \\ne \\min(L_1,\\, L_3,\\, L_5)$$

$$\\textbf{Rule 3:} \\quad P_4 > P_1$$

For a falling impulse, reverse every inequality. Each returns PASS or FAIL and nothing in between. **There is no "marginal violation".** A count that fails any one of the three is void — not weak, not unusual, not a variant. Void.

On BENGALTEL: $47.80 > 42.00$; $\\min(9.60, 15.55, 9.60) = 9.60 \\ne 15.55$; $59.70 > 51.60$ with a clearance of 8.10. **Three passes.**

**The acknowledged exception to Rule 3 is the ending diagonal**, a wedge-shaped fifth wave in which sub-wave 4 overlaps sub-wave 1. Note what invoking it does: it converts the one rule you were most likely to break into a special case. **Declare in advance whether you are counting a diagonal. Deciding after the overlap prints is not analysis.**

### 3. The guidelines, which are NOT rules

$$\\text{Retracement}_2 = \\frac{L_2}{L_1} \\times 100, \\qquad \\text{Retracement}_4 = \\frac{L_4}{L_3} \\times 100$$

$$\\text{Alternation} = \\begin{cases} \\text{ALTERNATES} & |\\text{Retracement}_2 - \\text{Retracement}_4| > 10 \\\\ \\text{SIMILAR — weak count} & \\text{otherwise} \\end{cases}$$

$$\\text{Fibonacci ratios: } \\frac{L_3}{L_1} \\approx 1.618 \\text{ or } 2.618, \\qquad \\frac{L_5}{L_1} \\approx 1.000, \\qquad \\frac{L_5}{L_3} \\approx 0.618$$

$$\\text{Channel: } m = \\frac{P_4 - P_2}{t_4 - t_2}, \\qquad \\hat{P}_5 = P_3 + m\\,(t_5 - t_3)$$

**Not one of these can be violated.** A wave 2 that retraces 71% is unusual and legal. A wave 3 at 1.31 times wave 1 is unusual and legal. A wave 5 that terminates 8 taka short of the channel rail is unusual and legal.

So the operational rule is a sentence: **rules decide whether a count is admissible; guidelines decide only how much you like it.** A count that passes all three rules and fits none of the guidelines is still a valid count. A count that fits every guideline and breaks one rule is dead. **People routinely get this the wrong way round, and it is the difference between using Elliott and performing it.**

### 4. Degree, and the consistency requirement

Every wave belongs to a larger wave and contains smaller ones. The conventional ladder, largest to smallest: Grand Supercycle, Supercycle, Cycle, Primary, Intermediate, Minor, Minute, Minuette, Subminuette.

The binding requirement is:

$$\\text{degree}(w_{\\text{sub}}) = \\text{degree}(w_{\\text{parent}}) - 1 \\quad \\text{for every labelled subdivision}$$

and, structurally, **a wave of one degree may not be larger in price or time than the wave of the degree above that contains it.** That is the only genuine constraint degree imposes, and it is a real one.

**It is also where the ambiguity lives.** A given move can nearly always be labelled at more than one degree, and the choice changes every projection downstream. Declare the degree in writing when you declare the count. **A count without a stated degree cannot be checked by anyone, including you.**

### 5. Invalidation, which is the operational core

$$X_{\\text{count}} = \\max(P_0,\\, P_1) \\quad \\text{for a bullish impulse past wave 2}$$

For BENGALTEL, $X_{\\text{count}} = \\max(42.00,\\, 51.60) = 51.60$.

$$\\text{Distance} = \\frac{P_{\\text{now}} - X_{\\text{count}}}{P_{\\text{now}}} \\times 100 = \\frac{66.00 - 51.60}{66.00} \\times 100 = 21.82\\%$$

$$\\text{In volatility units} = \\frac{66.00 - 51.60}{1.85} = 7.78\\,ATR$$

**Now the distinction that this chapter insists on.** The analytical invalidation and the trade stop are different objects and must be computed separately:

$$X_{\\text{count}} = \\max(P_0, P_1) \\qquad\\text{versus}\\qquad X_{\\text{trade}} = P_4 - 0.5\\,ATR = 59.70 - 0.925 = 58.78$$

| | $X_{\\text{count}}$ | $X_{\\text{trade}}$ |
|---|---|---|
| Answers | Is the read still legal? | Am I still in the position? |
| BENGALTEL | 51.60 | 58.78 |
| Distance in ATR from 66.00 | 7.78 | 3.90 |
| On a hit | Abandon the count in writing | Exit; the count may survive |

**A 7.78-ATR stop is not risk management, it is a hope.** Anyone who tells you to "hold until the count invalidates" is telling you to size a position by a number that has nothing to do with volatility. Chapter 49's sizing works off $X_{\\text{trade}}$, always.

### 6. The falsification test, stated formally

A count is a forecast if and only if, at time $t$, it publishes the triple

$$\\big\\langle \\text{label},\\; \\text{degree},\\; X_{\\text{count}} \\big\\rangle$$

**and does not revise any element of it after $t$ except by declaring the count dead.**

$$\\text{Verdict} = \\begin{cases} \\text{COUNT VALID — abandon at } X_{\\text{count}} & \\text{all three rules PASS} \\\\ \\text{COUNT INVALID — relabel or abandon now} & \\text{any rule FAILS} \\end{cases}$$

**The revision clause is the whole test.** Without it, relabelling after the fact makes the framework unfalsifiable in exactly the way Chapter 25 warns about: a constraint that can be edited after the outcome is not a constraint.

And a corollary worth stating plainly. If you hold a primary count plus two alternates that between them permit up, down and sideways, then

$$\\Pr(\\text{some count survives}) = 1 \\;\\Rightarrow\\; \\text{information content} = 0$$

**A practitioner who needs three alternates to stay right is not being rigorous. They are being unfalsifiable, and calling it thoroughness.**

### 7. The DSE corrections, which precede everything above

| Distortion | Effect on the count | Required action |
|---|---|---|
| **Floor-price window** | Pivots did not form; the series was not produced by trading | **Void the count entirely.** Not a discount — a deletion. Per Chapter 26. |
| **Circuit limit** | Wave extremes are truncated at the daily band, so $L_3$ and $L_5$ are understated and the ratios are precise numbers about an administrative boundary | Flag every pivot printed at a band edge; treat its ratios as unusable |
| **Record-date gap** | Ex-dividend or ex-bonus prints a false wave endpoint | Adjust or delete the pivot, per Chapter 5 |
| **Thin free float** | A five-wave structure may be one participant's order-splitting programme, not mass psychology | Count only liquid large caps and the index, daily degree and above |
| **No reliable short side** | A completed fifth wave is not a shorting opportunity | **A wave-count top is an exit. Never a short.** Chapter 30's constraint applies unchanged. |`,
      bn: `### ১. ৫-৩ কাঠামো, লিখিতভাবে

একটি ঊর্ধ্বমুখী বাজারে ইম্পালসকে ক্রমযুক্ত পিভট সেট $P_0, P_1, P_2, P_3, P_4, P_5$ ধরুন, আর পাঁচটি ওয়েভের দৈর্ঘ্য নিরপেক্ষ চলাচল হিসেবে সংজ্ঞায়িত করুন:

$$L_1 = P_1 - P_0, \\quad L_2 = P_1 - P_2, \\quad L_3 = P_3 - P_2, \\quad L_4 = P_3 - P_4, \\quad L_5 = P_5 - P_4$$

**ওয়েভ ২ ও ৪ রিট্রেসমেন্টের পরিমাণ হিসেবে মাপা হয়, চিহ্নযুক্ত চলন হিসেবে নয়।** সেজন্যই $L_2 = P_1 - P_2$, $P_2 - P_1$ নয়। BENGALTEL-এ এটি দেয় ৯.৬০, ৩.৮০, ১৫.৫৫, ৩.৬৫, ৯.৬০, আর নেট অগ্রগতি ২৭.৩০।

সম্পূর্ণ চক্র আট ওয়েভের: পাঁচ-ওয়েভ ইম্পালস, তারপর তিন-ওয়েভ কারেকশন $A, B, C$। উপবিভাজন নির্দিষ্ট:

| ওয়েভ | দিক | যাতে বিভক্ত হয় |
|---|---|---|
| ১, ৩, ৫ | প্রবণতার সঙ্গে | ৫ (ইম্পালস) |
| ২, ৪ | প্রবণতার বিরুদ্ধে | ৩ (কারেক্টিভ) |
| A | প্রবণতার বিরুদ্ধে | জিগজ্যাগে ৫, ফ্ল্যাটে ৩ |
| B | পূর্ববর্তী প্রবণতার সঙ্গে | ৩ |
| C | প্রবণতার বিরুদ্ধে | ৫ |

### ২. তিনটি কঠিন নিয়ম, মিথ্যা-প্রমাণযোগ্য অসমতা হিসেবে

**এলিয়ট ওয়েভে এগুলোই একমাত্র বিবৃতি যা লঙ্ঘিত হতে পারে। বাকি সব ভাষ্য।**

$$\\textbf{Rule 1:} \\quad P_2 > P_0 \\qquad \\text{equivalently} \\qquad \\frac{L_2}{L_1} < 1$$

$$\\textbf{Rule 2:} \\quad L_3 \\ne \\min(L_1,\\, L_3,\\, L_5)$$

$$\\textbf{Rule 3:} \\quad P_4 > P_1$$

পতনশীল ইম্পালসের জন্য প্রতিটি অসমতা উল্টে দিন। প্রতিটি PASS বা FAIL ফেরত দেয়, মাঝে কিছু নেই। **"সামান্য লঙ্ঘন" বলে কিছু নেই।** তিনটির যেকোনো একটিতে ব্যর্থ কাউন্ট বাতিল — দুর্বল নয়, অস্বাভাবিক নয়, রূপভেদ নয়। বাতিল।

BENGALTEL-এ: $47.80 > 42.00$; $\\min(9.60, 15.55, 9.60) = 9.60 \\ne 15.55$; $59.70 > 51.60$, ব্যবধান ৮.১০। **তিনটিই পাস।**

**নিয়ম ৩-এর স্বীকৃত ব্যতিক্রম হলো এন্ডিং ডায়াগোনাল**, একটি কীলক-আকৃতির পঞ্চম ওয়েভ যেখানে উপ-ওয়েভ ৪ উপ-ওয়েভ ১-এ ওভারল্যাপ করে। এটি ডাকলে কী হয় লক্ষ করুন: আপনি যে নিয়মটি ভাঙার সম্ভাবনা সবচেয়ে বেশি ছিল তা একটি বিশেষ ক্ষেত্রে রূপান্তরিত হয়। **আপনি ডায়াগোনাল গুনছেন কি না আগেভাগে ঘোষণা করুন। ওভারল্যাপ ছাপা হওয়ার পরে সিদ্ধান্ত নেওয়া বিশ্লেষণ নয়।**

### ৩. নির্দেশিকা, যা নিয়ম নয়

$$\\text{Retracement}_2 = \\frac{L_2}{L_1} \\times 100, \\qquad \\text{Retracement}_4 = \\frac{L_4}{L_3} \\times 100$$

$$\\text{Alternation} = \\begin{cases} \\text{ALTERNATES} & |\\text{Retracement}_2 - \\text{Retracement}_4| > 10 \\\\ \\text{SIMILAR — weak count} & \\text{otherwise} \\end{cases}$$

$$\\text{Fibonacci ratios: } \\frac{L_3}{L_1} \\approx 1.618 \\text{ or } 2.618, \\qquad \\frac{L_5}{L_1} \\approx 1.000, \\qquad \\frac{L_5}{L_3} \\approx 0.618$$

$$\\text{Channel: } m = \\frac{P_4 - P_2}{t_4 - t_2}, \\qquad \\hat{P}_5 = P_3 + m\\,(t_5 - t_3)$$

**এগুলোর একটিও লঙ্ঘিত হতে পারে না।** ৭১% ফেরানো ওয়েভ ২ অস্বাভাবিক ও বৈধ। ওয়েভ ১-এর ১.৩১ গুণ ওয়েভ ৩ অস্বাভাবিক ও বৈধ। চ্যানেল রেলের ৮ টাকা নিচে শেষ হওয়া ওয়েভ ৫ অস্বাভাবিক ও বৈধ।

তাই পরিচালন নিয়মটি এক বাক্যের: **নিয়ম ঠিক করে কাউন্টটি গ্রহণযোগ্য কি না; নির্দেশিকা কেবল ঠিক করে আপনি একে কতটা পছন্দ করেন।** যে কাউন্ট তিনটি নিয়মেই পাস করে ও কোনো নির্দেশিকায় মেলে না তা তবু বৈধ কাউন্ট। যে কাউন্ট প্রতিটি নির্দেশিকায় মেলে ও একটি নিয়ম ভাঙে তা মৃত। **মানুষ নিয়মিতভাবে এটি উল্টো বোঝেন, আর এটিই এলিয়ট ব্যবহার করা ও এলিয়ট অভিনয় করার পার্থক্য।**

### ৪. ডিগ্রি, ও সামঞ্জস্যের শর্ত

প্রতিটি ওয়েভ একটি বৃহত্তর ওয়েভের অন্তর্গত এবং ক্ষুদ্রতরগুলো ধারণ করে। প্রচলিত সিঁড়ি, বৃহত্তম থেকে ক্ষুদ্রতম: Grand Supercycle, Supercycle, Cycle, Primary, Intermediate, Minor, Minute, Minuette, Subminuette।

বাধ্যতামূলক শর্তটি হলো:

$$\\text{degree}(w_{\\text{sub}}) = \\text{degree}(w_{\\text{parent}}) - 1 \\quad \\text{for every labelled subdivision}$$

এবং কাঠামোগতভাবে, **এক ডিগ্রির একটি ওয়েভ তাকে ধারণকারী উপরের ডিগ্রির ওয়েভের চেয়ে দামে বা সময়ে বড় হতে পারে না।** ডিগ্রি যে একমাত্র প্রকৃত সীমাবদ্ধতা আরোপ করে তা এটিই, আর তা বাস্তব।

**এখানেই অস্পষ্টতাও বাস করে।** একটি নির্দিষ্ট চলনকে প্রায় সবসময়ই একাধিক ডিগ্রিতে লেবেল করা যায়, আর পছন্দটি পরবর্তী প্রতিটি প্রক্ষেপণ বদলে দেয়। কাউন্ট ঘোষণার সময় ডিগ্রিও লিখিতভাবে ঘোষণা করুন। **ডিগ্রি না বলা কাউন্ট কেউ যাচাই করতে পারে না, আপনি নিজেও না।**

### ৫. ইনভ্যালিডেশন, যা পরিচালনগত কেন্দ্র

$$X_{\\text{count}} = \\max(P_0,\\, P_1) \\quad \\text{for a bullish impulse past wave 2}$$

BENGALTEL-এর জন্য $X_{\\text{count}} = \\max(42.00,\\, 51.60) = 51.60$।

$$\\text{Distance} = \\frac{P_{\\text{now}} - X_{\\text{count}}}{P_{\\text{now}}} \\times 100 = \\frac{66.00 - 51.60}{66.00} \\times 100 = 21.82\\%$$

$$\\text{In volatility units} = \\frac{66.00 - 51.60}{1.85} = 7.78\\,ATR$$

**এবার সেই পার্থক্যটি যার ওপর এই অধ্যায় জোর দেয়।** বিশ্লেষণী ইনভ্যালিডেশন ও ট্রেডের স্টপ ভিন্ন বস্তু এবং আলাদাভাবে গণনা করতে হবে:

$$X_{\\text{count}} = \\max(P_0, P_1) \\qquad\\text{versus}\\qquad X_{\\text{trade}} = P_4 - 0.5\\,ATR = 59.70 - 0.925 = 58.78$$

| | $X_{\\text{count}}$ | $X_{\\text{trade}}$ |
|---|---|---|
| উত্তর দেয় | পাঠটি কি এখনো বৈধ? | আমি কি এখনো পজিশনে? |
| BENGALTEL | ৫১.৬০ | ৫৮.৭৮ |
| ৬৬.০০ থেকে ATR-এ দূরত্ব | ৭.৭৮ | ৩.৯০ |
| আঘাত লাগলে | লিখিতভাবে কাউন্ট ত্যাগ করুন | বেরিয়ে যান; কাউন্ট টিকতে পারে |

**৭.৭৮ ATR-এর স্টপ ঝুঁকি ব্যবস্থাপনা নয়, একটি আশা।** যিনি আপনাকে বলেন "কাউন্ট বাতিল না হওয়া পর্যন্ত ধরে রাখুন" তিনি আপনাকে এমন একটি সংখ্যা দিয়ে পজিশনের আকার ঠিক করতে বলছেন যার ভোলাটিলিটির সঙ্গে কোনো সম্পর্ক নেই। অধ্যায় ৪৯-এর সাইজিং সবসময় $X_{\\text{trade}}$ থেকে কাজ করে।

### ৬. মিথ্যা-প্রমাণের পরীক্ষা, আনুষ্ঠানিকভাবে

একটি কাউন্ট তখনই এবং কেবল তখনই পূর্বাভাস, যখন সময় $t$-তে এটি প্রকাশ করে ত্রয়ী

$$\\big\\langle \\text{label},\\; \\text{degree},\\; X_{\\text{count}} \\big\\rangle$$

**এবং $t$-এর পরে এর কোনো উপাদান সংশোধন করে না, কেবল কাউন্টটিকে মৃত ঘোষণা করা ছাড়া।**

$$\\text{Verdict} = \\begin{cases} \\text{COUNT VALID — abandon at } X_{\\text{count}} & \\text{all three rules PASS} \\\\ \\text{COUNT INVALID — relabel or abandon now} & \\text{any rule FAILS} \\end{cases}$$

**সংশোধনের ধারাটিই গোটা পরীক্ষা।** তা ছাড়া ঘটনার পরে পুনঃলেবেলিং কাঠামোটিকে ঠিক সেভাবেই মিথ্যা-প্রমাণ-অযোগ্য করে যেভাবে অধ্যায় ২৫ সতর্ক করে: যে সীমাবদ্ধতা ফলাফলের পরে সম্পাদনা করা যায় তা সীমাবদ্ধতা নয়।

আর একটি অনুসিদ্ধান্ত স্পষ্ট করে বলার মতো। আপনি যদি একটি প্রধান কাউন্ট ও দুটি বিকল্প ধরে রাখেন যা মিলে উপরে, নিচে ও পাশে অনুমোদন করে, তবে

$$\\Pr(\\text{some count survives}) = 1 \\;\\Rightarrow\\; \\text{information content} = 0$$

**যে চর্চাকারীর ঠিক থাকতে তিনটি বিকল্প লাগে তিনি কঠোর নন। তিনি মিথ্যা-প্রমাণ-অযোগ্য, আর একে পুঙ্খানুপুঙ্খতা বলছেন।**

### ৭. ডিএসই সংশোধন, যা ওপরের সবকিছুর আগে আসে

| বিকৃতি | কাউন্টে প্রভাব | প্রয়োজনীয় পদক্ষেপ |
|---|---|---|
| **ফ্লোর-প্রাইস সময়কাল** | পিভট তৈরিই হয়নি; সিরিজটি লেনদেন থেকে তৈরি হয়নি | **কাউন্ট সম্পূর্ণ বাতিল করুন।** ছাড় নয় — মুছে ফেলা। অধ্যায় ২৬ অনুযায়ী। |
| **সার্কিট সীমা** | ওয়েভের প্রান্ত দৈনিক ব্যান্ডে কাটা পড়ে, তাই $L_3$ ও $L_5$ কম দেখায় আর অনুপাতগুলো একটি প্রশাসনিক সীমানা সম্পর্কে নিখুঁত সংখ্যা | ব্যান্ডের প্রান্তে ছাপা প্রতিটি পিভট চিহ্নিত করুন; তার অনুপাত অব্যবহার্য গণ্য করুন |
| **রেকর্ড-ডেট গ্যাপ** | এক্স-ডিভিডেন্ড বা এক্স-বোনাস ভুয়া ওয়েভ প্রান্তবিন্দু ছাপে | অধ্যায় ৫ অনুযায়ী পিভট সমন্বয় করুন বা মুছুন |
| **পাতলা ফ্রি ফ্লোট** | পাঁচ-ওয়েভ কাঠামোটি গণমনস্তত্ত্ব নয়, একজন অংশগ্রহণকারীর অর্ডার-বিভাজন কর্মসূচি হতে পারে | কেবল তরল লার্জ ক্যাপ ও সূচক গুনুন, দৈনিক ডিগ্রি ও তার ওপরে |
| **নির্ভরযোগ্য শর্ট সাইড নেই** | সম্পন্ন পঞ্চম ওয়েভ শর্ট করার সুযোগ নয় | **ওয়েভ-কাউন্টের শীর্ষ একটি প্রস্থান। কখনো শর্ট নয়।** অধ্যায় ৩০-এর সীমাবদ্ধতা অপরিবর্তিতভাবে প্রযোজ্য। |`,
    },

    manual: {
      en: `**Scenario.** BENGALTEL from §43.3, at daily (Intermediate) degree. Six pivots: 42.00, 51.60, 47.80, 63.35, 59.70, 69.30, at sessions 0, 22, 31, 72, 93, 117. ATR(14) = 1.85. ADV(20) = 1,100,000. Current price 66.00. Every number below reconciles cell-for-cell with the wave-validator sheet; the cell reference is given at each step.

---

**Step 1 — Enter the six pivots and do nothing else yet.** Cells B2 through B7:

$$P_0 = 42.00, \\quad P_1 = 51.60, \\quad P_2 = 47.80, \\quad P_3 = 63.35, \\quad P_4 = 59.70, \\quad P_5 = 69.30$$

**Choosing these six numbers is the entire analysis, and every later step is arithmetic.** If you can move a pivot to make the count work, you have not counted — you have drawn. Fix the pivots from swing highs and lows on the closing series *before* you attempt any labelling.

**Step 2 — Wave 1 length.** Cell B10:
$$L_1 = P_1 - P_0 = 51.60 - 42.00 = \\mathbf{9.60}$$

**Step 3 — Wave 2 length, measured as a retracement.** Cell B11:
$$L_2 = P_1 - P_2 = 51.60 - 47.80 = \\mathbf{3.80}$$

Note the direction of the subtraction. **Wave 2 is a fall, but its length is a positive magnitude.** Computing $P_2 - P_1$ gives −3.80 and breaks every ratio downstream.

**Step 4 — Wave 3 length, measured from the wave 2 low.** Cell B12:
$$L_3 = P_3 - P_2 = 63.35 - 47.80 = \\mathbf{15.55}$$

**Not from the wave 1 high.** $63.35 - 51.60 = 11.75$ is a common and silent error: it understates wave 3 by 3.80 and drags $L_3/L_1$ from 1.6198 down to 1.224, which destroys the extension reading.

**Step 5 — Wave 4 length.** Cell B13:
$$L_4 = P_3 - P_4 = 63.35 - 59.70 = \\mathbf{3.65}$$

**Step 6 — Wave 5 length.** Cell B14:
$$L_5 = P_5 - P_4 = 69.30 - 59.70 = \\mathbf{9.60}$$

**Step 7 — Net move.** Cell B15:
$$P_5 - P_0 = 69.30 - 42.00 = \\mathbf{27.30}$$

Sanity check the arithmetic: $L_1 - L_2 + L_3 - L_4 + L_5 = 9.60 - 3.80 + 15.55 - 3.65 + 9.60 = 27.30$. **If that identity does not hold, one of your six pivots is out of order.**

---

**Step 8 — Rule 1, and run the rules before you look at a single ratio.** Cells B18 and B19:

$$\\text{Retracement}_2 = \\frac{L_2}{L_1} \\times 100 = \\frac{3.80}{9.60} \\times 100 = \\mathbf{39.58\\%}$$
$$P_2 = 47.80 > P_0 = 42.00 \\;\\Rightarrow\\; \\mathbf{PASS}$$

**39.58% is a guideline observation; the PASS is the rule.** The retracement lands near the 38.2% ratio from Chapter 41, which is pleasing and carries no weight whatsoever. Had it retraced 91%, the count would still be legal.

**Step 9 — Rule 2.** Cells B20 and B21:

$$\\min(L_1,\\, L_3,\\, L_5) = \\min(9.60,\\; 15.55,\\; 9.60) = \\mathbf{9.60}$$
$$L_3 = 15.55 \\ne 9.60 \\;\\Rightarrow\\; \\mathbf{PASS}$$

Notice the tie: waves 1 and 5 are both 9.60, so the minimum is shared. **The rule says wave 3 must not be the shortest, and a tie between waves 1 and 5 does not touch it.** The sheet's test is written as FAIL only when $L_3$ is strictly less than both, which is the correct reading.

**Step 10 — Rule 3, the one that matters most.** Cells B22 and B23:

$$P_4 - P_1 = 59.70 - 51.60 = \\mathbf{8.10}$$
$$P_4 = 59.70 > P_1 = 51.60 \\;\\Rightarrow\\; \\mathbf{PASS}$$

**That 8.10 is clearance, and clearance is the count's health.** Wave 4 stopped 8.10 taka — 4.38 ATR — above the top of wave 1's territory. A count whose clearance is 0.15 is technically alive and practically on life support.

---

**Step 11 — Only now, the Fibonacci guidelines.** Cells B26 to B28:

$$\\frac{L_3}{L_1} = \\frac{15.55}{9.60} = \\mathbf{1.6198} \\qquad \\frac{L_5}{L_1} = \\frac{9.60}{9.60} = \\mathbf{1.0000} \\qquad \\frac{L_5}{L_3} = \\frac{9.60}{15.55} = \\mathbf{0.6174}$$

Wave 3 sits 0.0018 from the textbook 1.618. Wave 5 equals wave 1 exactly. Wave 5 is 0.0006 from 0.618.

**Say the honest thing out loud: this is a constructed chart and it is constructed to be clean.** Real counts produce 1.44 and 0.83 and you argue about them. The reason to show a tidy one is that the arithmetic is legible; the reason to distrust your own tidy ones is that tidiness is usually manufactured at the pivot-selection step.

**Step 12 — Wave 4 retracement and the alternation guideline.** Cells B29 and B30:

$$\\text{Retracement}_4 = \\frac{L_4}{L_3} \\times 100 = \\frac{3.65}{15.55} \\times 100 = \\mathbf{23.47\\%}$$
$$|39.58 - 23.47| = \\mathbf{16.11} > 10 \\;\\Rightarrow\\; \\mathbf{ALTERNATES}$$

Alternation also holds in time and character: wave 2 was a sharp zigzag over 9 sessions, wave 4 a shallow sideways drift over 21. **This is a guideline agreeing with itself in two dimensions, which is the most a guideline can ever do. It still cannot be violated, so it still cannot inform you.**

---

**Step 13 — The invalidation price, and write it down before you touch the position.** Cells B33 to B35:

$$X_{\\text{count}} = \\max(P_0,\\, P_1) = \\max(42.00,\\; 51.60) = \\mathbf{51.60}$$
$$\\text{Distance} = \\frac{66.00 - 51.60}{66.00} \\times 100 = \\frac{14.40}{66.00} \\times 100 = \\mathbf{21.82\\%}$$

In volatility units:
$$\\frac{14.40}{1.85} = \\mathbf{7.78\\,ATR}$$

**Step 14 — Read the verdict, and read exactly what it says.** Cell B37:

> **COUNT VALID — abandon if it trades 51.60**

It does not say the count is right. **It says no rule has been broken and names the price at which one would be.** That sentence — a label, a degree, and a number, published in advance — is the only part of this chapter that could ever have been wrong.

**Step 15 — Now separate the analytical invalidation from the trade stop, because they are not the same object.**

$$X_{\\text{trade}} = P_4 - 0.5\\,ATR = 59.70 - (0.5 \\times 1.85) = 59.70 - 0.925 = \\mathbf{58.78}$$

| | $X_{\\text{count}}$ | $X_{\\text{trade}}$ |
|---|---|---|
| Level | **51.60** | **58.78** |
| Distance from 66.00 | 14.40 (21.82%) | 7.22 (10.94%) |
| In ATR | **7.78** | **3.90** |
| Meaning of a hit | The read is dead | The position is out |

**A stop 7.78 ATR from price is a donation, not a risk control.** Size the position off 58.78 per Chapter 49, and keep 51.60 as the analytical line you must respect in writing. **Conflating them is how a wave counter ends up 22% underwater still insisting the count is fine.** Technically, it is fine. That is the problem.

**Step 16 — Break a rule on purpose, and watch the sheet turn.** Suppose wave 4 had bottomed at 50.90 instead of 59.70. Change B6 only:

$$L_4 = 63.35 - 50.90 = 12.45, \\qquad P_4 - P_1 = 50.90 - 51.60 = \\mathbf{-0.70}$$
$$P_4 = 50.90 \\not> P_1 = 51.60 \\;\\Rightarrow\\; \\text{Rule 3} = \\mathbf{FAIL}$$
$$\\text{B37} \\Rightarrow \\mathbf{COUNT\\ INVALID - relabel\\ or\\ abandon\\ now}$$

Note what did *not* change: the pivots of waves 1, 2, 3 are identical, and $L_3/L_1$ is still 1.6198. **A single 0.70 overlap kills a count that every guideline still adores.** That asymmetry is the whole reason the rules are worth having.

**Step 17 — And now the moment the chapter is actually about.** You are long, wave 4 overlapped, the count is void. The temptation is immediate and it always takes the same form: *what if the move from 42.00 was one degree lower than I thought, so what I called wave 4 is really wave 2 of a new impulse?*

That relabelling is arithmetically permitted. **It is also the exact behaviour that makes Elliott Wave unfalsifiable**, because it converts a failed forecast into a new forecast at no cost, with no record that anything went wrong.

The discipline is a written sentence, and it is not optional:

> *On session 93 my Intermediate-degree count invalidated at 51.60. I was wrong. Any new count is a new count, dated today, with its own invalidation price, and I will not present it as a continuation of the old one.*

**A practitioner who cannot produce that log has no track record — only a story that has always been true.**

**Step 18 — State the DSE caveats the sheet cannot see.**

At 1,100,000 ADV around BDT 60, roughly BDT 6.6 crore trades a day. Three checks the arithmetic cannot perform:

1. **Did any pivot print at a circuit band?** Near 55.00 a 10% band is about 5.50. If 63.35 or 69.30 is a limit-locked print, **the extreme is the exchange's, and 1.6198 is then a very precise number about an administrative boundary.**
2. **Did any session fall in a floor-price window?** If yes, the count is void rather than weak — no discount, deletion. The series was not produced by the process Elliott describes.
3. **What do you do at 69.30 if you believe the fifth wave is complete?** On the DSE, exactly one thing: **sell what you own.** There is no reliable retail short side, so a completed count is an exit signal and never a short entry. Chapter 30 established this constraint and nothing in Elliott relaxes it.`,
      bn: `**পরিস্থিতি।** §৪৩.৩-এর BENGALTEL, দৈনিক (Intermediate) ডিগ্রিতে। ছয়টি পিভট: ৪২.০০, ৫১.৬০, ৪৭.৮০, ৬৩.৩৫, ৫৯.৭০, ৬৯.৩০, সেশন ০, ২২, ৩১, ৭২, ৯৩, ১১৭-এ। ATR(১৪) = ১.৮৫। ADV(২০) = ১১,০০,০০০। বর্তমান দাম ৬৬.০০। নিচের প্রতিটি সংখ্যা ওয়েভ-ভ্যালিডেটর শিটের সঙ্গে ঘর-ধরে-ঘর মেলে; প্রতিটি ধাপে ঘরের নাম দেওয়া আছে।

---

**ধাপ ১ — ছয়টি পিভট বসান এবং আপাতত আর কিছুই করবেন না।** ঘর B2 থেকে B7:

$$P_0 = 42.00, \\quad P_1 = 51.60, \\quad P_2 = 47.80, \\quad P_3 = 63.35, \\quad P_4 = 59.70, \\quad P_5 = 69.30$$

**এই ছয়টি সংখ্যা বাছাই করাই পুরো বিশ্লেষণ, আর পরের প্রতিটি ধাপ পাটিগণিত।** কাউন্ট মেলাতে আপনি যদি একটি পিভট সরাতে পারেন, তবে আপনি গোনেননি — এঁকেছেন। লেবেল করার *আগে* ক্লোজিং সিরিজের সুইং হাই ও লো থেকে পিভট স্থির করুন।

**ধাপ ২ — ওয়েভ ১-এর দৈর্ঘ্য।** ঘর B10:
$$L_1 = P_1 - P_0 = 51.60 - 42.00 = \\mathbf{9.60}$$

**ধাপ ৩ — ওয়েভ ২-এর দৈর্ঘ্য, রিট্রেসমেন্ট হিসেবে মাপা।** ঘর B11:
$$L_2 = P_1 - P_2 = 51.60 - 47.80 = \\mathbf{3.80}$$

বিয়োগের দিকটি লক্ষ করুন। **ওয়েভ ২ একটি পতন, কিন্তু তার দৈর্ঘ্য একটি ধনাত্মক পরিমাণ।** $P_2 - P_1$ গণনা করলে −৩.৮০ আসে আর পরবর্তী প্রতিটি অনুপাত ভেঙে যায়।

**ধাপ ৪ — ওয়েভ ৩-এর দৈর্ঘ্য, ওয়েভ ২-এর নিম্ন থেকে মাপা।** ঘর B12:
$$L_3 = P_3 - P_2 = 63.35 - 47.80 = \\mathbf{15.55}$$

**ওয়েভ ১-এর উচ্চ থেকে নয়।** $63.35 - 51.60 = 11.75$ একটি সাধারণ ও নীরব ভুল: এটি ওয়েভ ৩-কে ৩.৮০ কম দেখায় আর $L_3/L_1$-কে ১.৬১৯৮ থেকে ১.২২৪-এ টেনে নামায়, যা এক্সটেনশনের পাঠ ধ্বংস করে।

**ধাপ ৫ — ওয়েভ ৪-এর দৈর্ঘ্য।** ঘর B13:
$$L_4 = P_3 - P_4 = 63.35 - 59.70 = \\mathbf{3.65}$$

**ধাপ ৬ — ওয়েভ ৫-এর দৈর্ঘ্য।** ঘর B14:
$$L_5 = P_5 - P_4 = 69.30 - 59.70 = \\mathbf{9.60}$$

**ধাপ ৭ — নেট চলন।** ঘর B15:
$$P_5 - P_0 = 69.30 - 42.00 = \\mathbf{27.30}$$

পাটিগণিতটি যাচাই করুন: $L_1 - L_2 + L_3 - L_4 + L_5 = 9.60 - 3.80 + 15.55 - 3.65 + 9.60 = 27.30$। **এই অভেদটি না মিললে আপনার ছয়টি পিভটের একটি ক্রমের বাইরে।**

---

**ধাপ ৮ — নিয়ম ১, আর একটিও অনুপাত দেখার আগে নিয়মগুলো চালান।** ঘর B18 ও B19:

$$\\text{Retracement}_2 = \\frac{L_2}{L_1} \\times 100 = \\frac{3.80}{9.60} \\times 100 = \\mathbf{39.58\\%}$$
$$P_2 = 47.80 > P_0 = 42.00 \\;\\Rightarrow\\; \\mathbf{PASS}$$

**৩৯.৫৮% একটি নির্দেশিকা-পর্যবেক্ষণ; PASS-ই নিয়ম।** রিট্রেসমেন্টটি অধ্যায় ৪১-এর ৩৮.২% অনুপাতের কাছে নামে, যা আনন্দদায়ক এবং যার কোনো ওজন নেই। ৯১% ফিরলেও কাউন্টটি বৈধই থাকত।

**ধাপ ৯ — নিয়ম ২।** ঘর B20 ও B21:

$$\\min(L_1,\\, L_3,\\, L_5) = \\min(9.60,\\; 15.55,\\; 9.60) = \\mathbf{9.60}$$
$$L_3 = 15.55 \\ne 9.60 \\;\\Rightarrow\\; \\mathbf{PASS}$$

সমতাটি লক্ষ করুন: ওয়েভ ১ ও ৫ দুটিই ৯.৬০, তাই ন্যূনতমটি ভাগাভাগি। **নিয়ম বলে ওয়েভ ৩ ক্ষুদ্রতম হতে পারবে না, আর ওয়েভ ১ ও ৫-এর মধ্যে সমতা তাতে হাত দেয় না।** শিটের পরীক্ষাটি FAIL লেখা হয়েছে কেবল তখনই যখন $L_3$ দুটির চেয়েই কঠোরভাবে ছোট, যা সঠিক পাঠ।

**ধাপ ১০ — নিয়ম ৩, যেটি সবচেয়ে গুরুত্বপূর্ণ।** ঘর B22 ও B23:

$$P_4 - P_1 = 59.70 - 51.60 = \\mathbf{8.10}$$
$$P_4 = 59.70 > P_1 = 51.60 \\;\\Rightarrow\\; \\mathbf{PASS}$$

**ঐ ৮.১০ হলো ব্যবধান, আর ব্যবধানই কাউন্টের স্বাস্থ্য।** ওয়েভ ৪ থেমেছে ওয়েভ ১-এর এলাকার শীর্ষের ৮.১০ টাকা — ৪.৩৮ ATR — ওপরে। যে কাউন্টের ব্যবধান ০.১৫ তা কারিগরিভাবে জীবিত ও ব্যবহারিকভাবে লাইফ সাপোর্টে।

---

**ধাপ ১১ — এবার, কেবল এবারই, ফিবোনাচি নির্দেশিকা।** ঘর B26 থেকে B28:

$$\\frac{L_3}{L_1} = \\frac{15.55}{9.60} = \\mathbf{1.6198} \\qquad \\frac{L_5}{L_1} = \\frac{9.60}{9.60} = \\mathbf{1.0000} \\qquad \\frac{L_5}{L_3} = \\frac{9.60}{15.55} = \\mathbf{0.6174}$$

ওয়েভ ৩ পাঠ্যবইয়ের ১.৬১৮ থেকে ০.০০১৮ দূরে। ওয়েভ ৫ হুবহু ওয়েভ ১-এর সমান। ওয়েভ ৫ ০.৬১৮ থেকে ০.০০০৬ দূরে।

**সৎ কথাটি জোরে বলুন: এটি একটি নির্মিত চার্ট এবং পরিচ্ছন্ন হওয়ার জন্যই নির্মিত।** প্রকৃত কাউন্ট ১.৪৪ ও ০.৮৩ দেয় আর আপনি তা নিয়ে তর্ক করেন। একটি পরিপাটি কাউন্ট দেখানোর কারণ হলো পাটিগণিতটি পাঠযোগ্য; আর নিজের পরিপাটি কাউন্টগুলোকে অবিশ্বাস করার কারণ হলো পরিপাটিত্ব সাধারণত পিভট-বাছাইয়ের ধাপে তৈরি করা হয়।

**ধাপ ১২ — ওয়েভ ৪-এর রিট্রেসমেন্ট ও অল্টারনেশন নির্দেশিকা।** ঘর B29 ও B30:

$$\\text{Retracement}_4 = \\frac{L_4}{L_3} \\times 100 = \\frac{3.65}{15.55} \\times 100 = \\mathbf{23.47\\%}$$
$$|39.58 - 23.47| = \\mathbf{16.11} > 10 \\;\\Rightarrow\\; \\mathbf{ALTERNATES}$$

অল্টারনেশন সময় ও চরিত্রেও টেকে: ওয়েভ ২ ছিল ৯ সেশনের তীক্ষ্ণ জিগজ্যাগ, ওয়েভ ৪ ছিল ২১ সেশনের অগভীর পার্শ্বমুখী ভেসে যাওয়া। **এটি দুই মাত্রায় নিজের সঙ্গে একমত একটি নির্দেশিকা, আর একটি নির্দেশিকা সর্বাধিক এটুকুই করতে পারে। তবু তা লঙ্ঘিত হতে পারে না, তাই তবু তা আপনাকে কিছু জানাতে পারে না।**

---

**ধাপ ১৩ — ইনভ্যালিডেশন প্রাইস, আর পজিশনে হাত দেওয়ার আগে তা লিখে ফেলুন।** ঘর B33 থেকে B35:

$$X_{\\text{count}} = \\max(P_0,\\, P_1) = \\max(42.00,\\; 51.60) = \\mathbf{51.60}$$
$$\\text{Distance} = \\frac{66.00 - 51.60}{66.00} \\times 100 = \\frac{14.40}{66.00} \\times 100 = \\mathbf{21.82\\%}$$

ভোলাটিলিটির এককে:
$$\\frac{14.40}{1.85} = \\mathbf{7.78\\,ATR}$$

**ধাপ ১৪ — রায় পড়ুন, আর ঠিক যা লেখা তা-ই পড়ুন।** ঘর B37:

> **COUNT VALID — abandon if it trades 51.60**

এটি বলে না কাউন্টটি সঠিক। **এটি বলে কোনো নিয়ম ভাঙেনি এবং যে দামে একটি ভাঙবে তার নাম বলে।** ঐ বাক্যটি — একটি লেবেল, একটি ডিগ্রি ও একটি সংখ্যা, আগেভাগে প্রকাশিত — এই অধ্যায়ের একমাত্র অংশ যা কখনো ভুল হতে পারত।

**ধাপ ১৫ — এবার বিশ্লেষণী ইনভ্যালিডেশনকে ট্রেডের স্টপ থেকে আলাদা করুন, কারণ তারা একই বস্তু নয়।**

$$X_{\\text{trade}} = P_4 - 0.5\\,ATR = 59.70 - (0.5 \\times 1.85) = 59.70 - 0.925 = \\mathbf{58.78}$$

| | $X_{\\text{count}}$ | $X_{\\text{trade}}$ |
|---|---|---|
| স্তর | **৫১.৬০** | **৫৮.৭৮** |
| ৬৬.০০ থেকে দূরত্ব | ১৪.৪০ (২১.৮২%) | ৭.২২ (১০.৯৪%) |
| ATR-এ | **৭.৭৮** | **৩.৯০** |
| আঘাতের অর্থ | পাঠটি মৃত | পজিশনটি বাইরে |

**দাম থেকে ৭.৭৮ ATR দূরের স্টপ ঝুঁকি নিয়ন্ত্রণ নয়, অনুদান।** অধ্যায় ৪৯ অনুযায়ী ৫৮.৭৮ থেকে পজিশনের আকার নিন, আর ৫১.৬০-কে সেই বিশ্লেষণী রেখা হিসেবে রাখুন যা লিখিতভাবে মানতে হবে। **এ দুটি গুলিয়ে ফেলাই সেই পথ যেভাবে একজন ওয়েভ-গণক ২২% পানির নিচে থেকেও জোর দিয়ে বলেন কাউন্টটি ঠিক আছে।** কারিগরিভাবে, তা ঠিকই আছে। সমস্যাটি সেখানেই।

**ধাপ ১৬ — ইচ্ছে করে একটি নিয়ম ভাঙুন, আর শিটটি ঘুরে যেতে দেখুন।** ধরুন ওয়েভ ৪ ৫৯.৭০-এর বদলে ৫০.৯০-এ তলা ছুঁয়েছিল। কেবল B6 বদলান:

$$L_4 = 63.35 - 50.90 = 12.45, \\qquad P_4 - P_1 = 50.90 - 51.60 = \\mathbf{-0.70}$$
$$P_4 = 50.90 \\not> P_1 = 51.60 \\;\\Rightarrow\\; \\text{Rule 3} = \\mathbf{FAIL}$$
$$\\text{B37} \\Rightarrow \\mathbf{COUNT\\ INVALID - relabel\\ or\\ abandon\\ now}$$

লক্ষ করুন কী বদলায়*নি*: ওয়েভ ১, ২, ৩-এর পিভট অভিন্ন, আর $L_3/L_1$ এখনো ১.৬১৯৮। **মাত্র ০.৭০ ওভারল্যাপ এমন একটি কাউন্ট মেরে ফেলে যাকে প্রতিটি নির্দেশিকা এখনো ভালোবাসে।** ঐ অসামঞ্জস্যই নিয়মগুলো রাখার পুরো কারণ।

**ধাপ ১৭ — আর এবার সেই মুহূর্ত যা নিয়ে অধ্যায়টি আসলে।** আপনি লং, ওয়েভ ৪ ওভারল্যাপ করেছে, কাউন্ট বাতিল। প্রলোভনটি তাৎক্ষণিক এবং তা সবসময় একই রূপ নেয়: *৪২.০০ থেকে চলনটি যদি আমার ধারণার চেয়ে এক ডিগ্রি নিচে হয়ে থাকে, তাহলে যাকে আমি ওয়েভ ৪ বলেছি তা আসলে একটি নতুন ইম্পালসের ওয়েভ ২?*

ঐ পুনঃলেবেলিং পাটিগাণিতিকভাবে অনুমোদিত। **এটিই সেই আচরণ যা এলিয়ট ওয়েভকে মিথ্যা-প্রমাণ-অযোগ্য করে**, কারণ এটি একটি ব্যর্থ পূর্বাভাসকে বিনা খরচে একটি নতুন পূর্বাভাসে রূপান্তরিত করে, কিছু ভুল হয়েছে তার কোনো নথি ছাড়াই।

শৃঙ্খলাটি একটি লিখিত বাক্য, আর তা ঐচ্ছিক নয়:

> *সেশন ৯৩-এ আমার Intermediate-ডিগ্রি কাউন্ট ৫১.৬০-এ বাতিল হয়েছে। আমি ভুল ছিলাম। যেকোনো নতুন কাউন্ট একটি নতুন কাউন্ট, আজকের তারিখে, নিজের ইনভ্যালিডেশন প্রাইসসহ, আর আমি তাকে পুরোনোটির ধারাবাহিকতা হিসেবে উপস্থাপন করব না।*

**যে চর্চাকারী ঐ নথিটি দেখাতে পারেন না তাঁর কোনো ট্র্যাক রেকর্ড নেই — কেবল এমন একটি গল্প আছে যা সবসময় সত্য ছিল।**

**ধাপ ১৮ — শিট যে ডিএসই সতর্কতাগুলো দেখতে পায় না তা বলুন।**

প্রায় ৬০ টাকায় ১১,০০,০০০ ADV-তে দিনে মোটামুটি ৬.৬ কোটি টাকা লেনদেন হয়। পাটিগণিত যা করতে পারে না এমন তিনটি যাচাই:

১. **কোনো পিভট কি সার্কিট ব্যান্ডে ছাপা হয়েছে?** ৫৫.০০-এর কাছে ১০% ব্যান্ড প্রায় ৫.৫০। ৬৩.৩৫ বা ৬৯.৩০ যদি লিমিট-লক প্রিন্ট হয়, **তবে প্রান্তটি এক্সচেঞ্জের, আর ১.৬১৯৮ তখন একটি প্রশাসনিক সীমানা সম্পর্কে অত্যন্ত নিখুঁত একটি সংখ্যা।**
২. **কোনো সেশন কি ফ্লোর-প্রাইসের সময়ে পড়েছে?** পড়লে কাউন্ট দুর্বল নয়, বাতিল — ছাড় নয়, মুছে ফেলা। সিরিজটি এলিয়ট যে প্রক্রিয়ার কথা বলেন তাতে তৈরি হয়নি।
৩. **আপনি যদি বিশ্বাস করেন পঞ্চম ওয়েভ সম্পন্ন, তবে ৬৯.৩০-এ কী করবেন?** ডিএসই-তে ঠিক একটি কাজ: **আপনার যা আছে তা বিক্রি করুন।** নির্ভরযোগ্য খুচরা শর্ট সাইড নেই, তাই সম্পন্ন কাউন্ট একটি প্রস্থান সংকেত, কখনো শর্ট প্রবেশ নয়। অধ্যায় ৩০ এই সীমাবদ্ধতা প্রতিষ্ঠা করেছে আর এলিয়টের কিছুই তা শিথিল করে না।`,
    },

    mistakes: {
      en: `1. **Relabelling the count after price moves against it.** Wave 4 prints at 50.90, below the wave 1 high of 51.60, and B23 returns FAIL. The temptation is instant: *the move was one degree lower, so my wave 4 is really wave 2 of a new impulse.* **That single habit is what makes Elliott Wave unfalsifiable.** It converts a failed forecast into a fresh one at zero cost and leaves no record that anything was wrong. A new count is a new count, dated today, with its own invalidation.
2. **Measuring wave 3 from the wave 1 high instead of the wave 2 low.** $63.35 - 51.60 = 11.75$ instead of $63.35 - 47.80 = 15.55$. It understates wave 3 by 3.80 and drags $L_3/L_1$ from **1.6198 down to 1.224**, which destroys the extension reading and can flip Rule 2 in a tighter count. The error produces no warning and looks perfectly reasonable.
3. **Treating a Fibonacci ratio as a rule.** A wave 3 at 1.31 times wave 1 is legal. A wave 2 retracing 91% is legal. **Only $P_2 > P_0$, $L_3 \\ne \\min(L_1, L_3, L_5)$ and $P_4 > P_1$ can be violated.** People break this constantly: they discard a legal count because 1.6198 was not close enough, then keep an illegal one because the ratios were pretty.
4. **Using the count invalidation as a trade stop.** $X_{\\text{count}} = 51.60$ is **7.78 ATR** from 66.00 — a 21.82% adverse excursion. Sized off that number, one wrong count destroys a year. **The trade stop is a separate object: 59.70 − 0.5 ATR = 58.78, which is 3.90 ATR.** Getting stopped out does not kill the count; trading 51.60 does.
5. **Carrying three alternate counts that between them permit every outcome.** Primary says the impulse completed at 69.30; alternate A says 42.00→69.30 was wave 1 of a larger degree; alternate B says the whole advance was an A-B-C. Up, down and sideways are all covered. **The probability that some count survives is 1, so the information content is 0.** Three alternates is not thoroughness; it is unfalsifiability with a straight face.
6. **Signing the wave lengths.** $L_2 = P_2 - P_1 = -3.80$ instead of $P_1 - P_2 = +3.80$ makes the retracement −39.58%, sends B30 to SIMILAR, and quietly inverts the alternation test. Waves 2 and 4 are magnitudes.
7. **Counting across a floor-price window.** Any pivot formed while a share could not legally trade lower **was not produced by the process Elliott describes.** The correct action is deletion of the count, not a discount to its confidence. Chapter 26's exclusion flag is the tool.
8. **Reading a circuit-limit print as a wave extreme.** Near 55.00, a 10% band is about 5.50 of permitted daily travel. If 63.35 or 69.30 was a limit-locked close, **the extreme belongs to the exchange, and 1.6198 becomes a very precise number about an administrative boundary.**
9. **Invoking the ending diagonal after the overlap prints.** The diagonal is a real structure and the acknowledged exception to Rule 3 — and it is also the framework's most convenient escape hatch. **Declare a diagonal in advance or not at all.** Deciding afterwards means Rule 3 can never fail, and Rule 3 was the most useful thing you had.
10. **Shorting a completed fifth wave.** BENGALTEL tops at 69.30 and the count says the impulse is done. **On the DSE that is an instruction to sell what you own, full stop.** There is no reliable retail borrow, and half the classical literature silently assumes one.
11. **Believing a tidy chart proves the method.** This worked example returns 1.6198, 1.0000, 0.6174 and a 69.30/69.31 projection cluster. **It is constructed, and it is constructed clean so the arithmetic is legible.** If your own counts routinely look this good, you are selecting pivots to make them, which is the pivot-selection problem of Chapter 41 with more labels attached.`,
      bn: `১. **দাম বিপক্ষে গেলে কাউন্ট পুনরায় লেবেল করা।** ওয়েভ ৪ ৫০.৯০-এ ছাপে, ওয়েভ ১-এর উচ্চ ৫১.৬০-এর নিচে, আর B23 ফেরত দেয় FAIL। প্রলোভন তাৎক্ষণিক: *চলনটি এক ডিগ্রি নিচে ছিল, তাই আমার ওয়েভ ৪ আসলে নতুন ইম্পালসের ওয়েভ ২।* **ঐ একটি অভ্যাসই এলিয়ট ওয়েভকে মিথ্যা-প্রমাণ-অযোগ্য করে।** এটি একটি ব্যর্থ পূর্বাভাসকে শূন্য খরচে নতুন পূর্বাভাসে বদলায় আর কিছু ভুল হওয়ার কোনো নথি রাখে না। নতুন কাউন্ট মানে নতুন কাউন্ট, আজকের তারিখে, নিজের ইনভ্যালিডেশনসহ।
২. **ওয়েভ ৩ ওয়েভ ২-এর নিম্নের বদলে ওয়েভ ১-এর উচ্চ থেকে মাপা।** $63.35 - 47.80 = 15.55$-এর বদলে $63.35 - 51.60 = 11.75$। এটি ওয়েভ ৩-কে ৩.৮০ কম দেখায় আর $L_3/L_1$-কে **১.৬১৯৮ থেকে ১.২২৪-এ** নামায়, যা এক্সটেনশনের পাঠ ধ্বংস করে ও আঁটসাঁট কাউন্টে নিয়ম ২ উল্টে দিতে পারে। ভুলটি কোনো সতর্কবার্তা দেয় না ও একদম যুক্তিসঙ্গত দেখায়।
৩. **ফিবোনাচি অনুপাতকে নিয়ম গণ্য করা।** ওয়েভ ১-এর ১.৩১ গুণ ওয়েভ ৩ বৈধ। ৯১% ফেরানো ওয়েভ ২ বৈধ। **কেবল $P_2 > P_0$, $L_3 \\ne \\min(L_1, L_3, L_5)$ ও $P_4 > P_1$ লঙ্ঘিত হতে পারে।** মানুষ এটি অবিরাম ভাঙেন: ১.৬১৯৮ যথেষ্ট কাছে ছিল না বলে একটি বৈধ কাউন্ট ফেলে দেন, তারপর অনুপাত সুন্দর ছিল বলে একটি অবৈধ কাউন্ট ধরে রাখেন।
৪. **কাউন্ট ইনভ্যালিডেশনকে ট্রেডের স্টপ হিসেবে ব্যবহার করা।** $X_{\\text{count}} = 51.60$ ৬৬.০০ থেকে **৭.৭৮ ATR** দূরে — ২১.৮২% প্রতিকূল চলন। ঐ সংখ্যা থেকে আকার নিলে একটি ভুল কাউন্ট একটি বছর ধ্বংস করে। **ট্রেডের স্টপ আলাদা বস্তু: ৫৯.৭০ − ০.৫ ATR = ৫৮.৭৮, যা ৩.৯০ ATR।** স্টপ-আউট হওয়া কাউন্টকে মারে না; ৫১.৬০ লেনদেন হওয়া মারে।
৫. **তিনটি বিকল্প কাউন্ট বহন করা যা মিলে প্রতিটি ফলাফল অনুমোদন করে।** প্রধানটি বলে ইম্পালস ৬৯.৩০-এ সম্পন্ন; বিকল্প ক বলে ৪২.০০→৬৯.৩০ বৃহত্তর ডিগ্রির ওয়েভ ১; বিকল্প খ বলে পুরো অগ্রগতিই A-B-C। উপরে, নিচে ও পাশে সবই ঢাকা। **কোনো না কোনো কাউন্ট টিকে যাওয়ার সম্ভাবনা ১, তাই তথ্যের পরিমাণ ০।** তিনটি বিকল্প পুঙ্খানুপুঙ্খতা নয়; তা নির্লিপ্ত মুখে মিথ্যা-প্রমাণ-অযোগ্যতা।
৬. **ওয়েভের দৈর্ঘ্যে চিহ্ন বসানো।** $P_1 - P_2 = +3.80$-এর বদলে $L_2 = P_2 - P_1 = -3.80$ রিট্রেসমেন্টকে −৩৯.৫৮% করে, B30-কে SIMILAR-এ পাঠায়, আর নীরবে অল্টারনেশনের পরীক্ষাটি উল্টে দেয়। ওয়েভ ২ ও ৪ পরিমাণ।
৭. **ফ্লোর-প্রাইসের সময়কাল জুড়ে গোনা।** যে পিভট তৈরি হয়েছে যখন একটি শেয়ার আইনত নিচে লেনদেন করতে পারত না, **তা এলিয়ট যে প্রক্রিয়ার কথা বলেন তাতে তৈরি হয়নি।** সঠিক পদক্ষেপ কাউন্টটি মুছে ফেলা, তার আত্মবিশ্বাসে ছাড় দেওয়া নয়। অধ্যায় ২৬-এর বর্জন চিহ্নই হাতিয়ার।
৮. **সার্কিট-সীমার প্রিন্টকে ওয়েভের প্রান্ত হিসেবে পড়া।** ৫৫.০০-এর কাছে ১০% ব্যান্ড মানে দিনে প্রায় ৫.৫০ অনুমোদিত চলাচল। ৬৩.৩৫ বা ৬৯.৩০ যদি লিমিট-লক ক্লোজ হয়, **তবে প্রান্তটি এক্সচেঞ্জের, আর ১.৬১৯৮ একটি প্রশাসনিক সীমানা সম্পর্কে অত্যন্ত নিখুঁত সংখ্যা হয়ে যায়।**
৯. **ওভারল্যাপ ছাপা হওয়ার পরে এন্ডিং ডায়াগোনাল ডাকা।** ডায়াগোনাল বাস্তব কাঠামো ও নিয়ম ৩-এর স্বীকৃত ব্যতিক্রম — এবং এটি কাঠামোটির সবচেয়ে সুবিধাজনক পালানোর পথও। **ডায়াগোনাল আগেভাগে ঘোষণা করুন, নয়তো একেবারেই নয়।** পরে সিদ্ধান্ত নেওয়া মানে নিয়ম ৩ কখনো ব্যর্থ হতে পারে না, আর নিয়ম ৩-ই আপনার সবচেয়ে কাজের জিনিস ছিল।
১০. **সম্পন্ন পঞ্চম ওয়েভ শর্ট করা।** BENGALTEL ৬৯.৩০-এ শীর্ষ করে আর কাউন্ট বলে ইম্পালস শেষ। **ডিএসই-তে তা আপনার যা আছে তা বিক্রির নির্দেশ, ব্যস।** নির্ভরযোগ্য খুচরা ধার নেই, আর ধ্রুপদী সাহিত্যের অর্ধেক নীরবে একটি ধারের অস্তিত্ব ধরে নেয়।
১১. **পরিপাটি চার্ট পদ্ধতিটি প্রমাণ করে বলে বিশ্বাস করা।** এই উদাহরণটি ফেরত দেয় ১.৬১৯৮, ১.০০০০, ০.৬১৭৪ আর ৬৯.৩০/৬৯.৩১ প্রক্ষেপণ ক্লাস্টার। **এটি নির্মিত, আর পরিচ্ছন্নভাবে নির্মিত যাতে পাটিগণিতটি পাঠযোগ্য হয়।** আপনার নিজের কাউন্ট নিয়মিত এত ভালো দেখালে আপনি সেগুলো তেমন করতে পিভট বাছছেন, যা অধ্যায় ৪১-এর পিভট-নির্বাচনের সমস্যাই, কেবল বেশি লেবেল জোড়া।`,
    },

    tips: {
      en: `1. **Write the count down before you act on it, in three parts: label, degree, invalidation price.** For BENGALTEL that is "Intermediate-degree impulse, wave 5 complete at 69.30, void below 51.60." **A count missing any of the three cannot be checked by anyone, including you.**
2. **Run the three rules before you look at a single ratio.** PASS / PASS / PASS on B19, B21, B23 is the gate. The 1.6198 is scenery. Reversing that order is how people talk themselves into illegal counts.
3. **Record the clearance, not just the verdict.** Rule 3 passes with $59.70 - 51.60 = 8.10$, which is 4.38 ATR of room. A count that passes with 0.15 of clearance is technically alive and practically finished. **Clearance is the health of the count.**
4. **Compute two stops, always.** $X_{\\text{count}} = 51.60$ answers "is the read legal"; $X_{\\text{trade}} = 58.78$ answers "am I still in". Size on the second per Chapter 49, respect the first in writing.
5. **Carry one count. If you cannot choose, you do not have one.** Publish the primary and its invalidation. If the honest answer is that three labellings are equally plausible, close the chart and trade it with Chapter 30's levels and Chapter 42's trend structure — both work without a label.
6. **Keep a dated invalidation log.** Every count that dies gets one line: date, level, "I was wrong." **That log is the only track record a wave counter can ever have**, and the absence of one is diagnostic.
7. **Project in advance and score yourself later.** The 1.618 extension gave 63.33 against an outcome of 63.35; the two wave-5 methods gave 69.30 and 69.31 against 69.30. Those are checkable. Write the projection with a date on it, then check.
8. **Prefer counts where the invalidation is close.** A count with 21.82% of room is nearly unfalsifiable in practice — it will take a year to be proved wrong. **Counts whose wave 4 sits just above wave 1 are the informative ones**, because they resolve quickly.
9. **Flag every pivot that printed at a circuit band, and refuse to compute ratios from it.** A truncated extreme makes a precise-looking ratio about an administrative boundary.
10. **Delete, do not discount, any count spanning a floor-price window.** This is the one place where "reduce confidence" is the wrong response. The price series was not generated by trading.
11. **Count only liquid large caps and the index, at daily degree and above.** On a thin counter the five-wave structure may be one participant's order-splitting programme, and mass psychology requires a mass.
12. **Treat a completed count as an exit, never as a short.** No reliable borrow means a wave-count top has exactly one action attached to it: reduce or sell what you hold.`,
      bn: `১. **কাজ করার আগে কাউন্টটি তিন অংশে লিখুন: লেবেল, ডিগ্রি, ইনভ্যালিডেশন প্রাইস।** BENGALTEL-এর জন্য তা হলো "Intermediate-ডিগ্রি ইম্পালস, ওয়েভ ৫ ৬৯.৩০-এ সম্পন্ন, ৫১.৬০-এর নিচে বাতিল।" **তিনটির একটিও অনুপস্থিত থাকলে কাউন্টটি কেউ যাচাই করতে পারে না, আপনি নিজেও না।**
২. **একটিও অনুপাত দেখার আগে তিনটি নিয়ম চালান।** B19, B21, B23-এ PASS / PASS / PASS-ই ফটক। ১.৬১৯৮ দৃশ্যপট। ঐ ক্রম উল্টে দিলেই মানুষ নিজেকে অবৈধ কাউন্টে রাজি করান।
৩. **কেবল রায় নয়, ব্যবধানটি লিপিবদ্ধ করুন।** নিয়ম ৩ পাস করে $59.70 - 51.60 = 8.10$-এ, যা ৪.৩৮ ATR জায়গা। যে কাউন্ট ০.১৫ ব্যবধানে পাস করে তা কারিগরিভাবে জীবিত ও ব্যবহারিকভাবে শেষ। **ব্যবধানই কাউন্টের স্বাস্থ্য।**
৪. **সবসময় দুটি স্টপ গণনা করুন।** $X_{\\text{count}} = 51.60$ উত্তর দেয় "পাঠটি কি বৈধ"; $X_{\\text{trade}} = 58.78$ উত্তর দেয় "আমি কি এখনো ভেতরে"। অধ্যায় ৪৯ অনুযায়ী দ্বিতীয়টি থেকে আকার নিন, প্রথমটি লিখিতভাবে মানুন।
৫. **একটি কাউন্ট বহন করুন। বাছতে না পারলে আপনার কোনোটিই নেই।** প্রধানটি ও তার ইনভ্যালিডেশন প্রকাশ করুন। সৎ উত্তর যদি হয় তিনটি লেবেলিংই সমান সম্ভাব্য, তবে চার্ট বন্ধ করে অধ্যায় ৩০-এর লেভেল ও অধ্যায় ৪২-এর প্রবণতা কাঠামো দিয়ে ট্রেড করুন — দুটিই লেবেল ছাড়া কাজ করে।
৬. **তারিখসহ একটি ইনভ্যালিডেশন লগ রাখুন।** যে কাউন্ট মরে তার এক লাইন: তারিখ, স্তর, "আমি ভুল ছিলাম।" **ঐ লগই একজন ওয়েভ-গণকের একমাত্র সম্ভাব্য ট্র্যাক রেকর্ড**, আর তার অনুপস্থিতিই রোগনির্ণায়ক।
৭. **আগেভাগে প্রক্ষেপণ করুন ও পরে নিজেকে নম্বর দিন।** ১.৬১৮ এক্সটেনশন দিয়েছিল ৬৩.৩৩, ফলাফল ৬৩.৩৫; ওয়েভ ৫-এর দুটি পদ্ধতি দিয়েছিল ৬৯.৩০ ও ৬৯.৩১, ফলাফল ৬৯.৩০। এগুলো যাচাইযোগ্য। তারিখসহ প্রক্ষেপণ লিখুন, তারপর যাচাই করুন।
৮. **যেসব কাউন্টে ইনভ্যালিডেশন কাছে সেগুলো বেছে নিন।** ২১.৮২% জায়গার কাউন্ট ব্যবহারিকভাবে প্রায় মিথ্যা-প্রমাণ-অযোগ্য — ভুল প্রমাণ হতে এক বছর লাগবে। **যেসব কাউন্টের ওয়েভ ৪ ওয়েভ ১-এর ঠিক ওপরে বসে সেগুলোই তথ্যবহুল**, কারণ সেগুলো দ্রুত মীমাংসিত হয়।
৯. **সার্কিট ব্যান্ডে ছাপা প্রতিটি পিভট চিহ্নিত করুন, আর তা থেকে অনুপাত গণনা করতে অস্বীকার করুন।** কাটা প্রান্ত একটি নিখুঁত-দেখতে অনুপাতকে একটি প্রশাসনিক সীমানা সম্পর্কে বানিয়ে দেয়।
১০. **ফ্লোর-প্রাইসের সময়কাল বিস্তৃত যেকোনো কাউন্ট মুছুন, ছাড় দেবেন না।** এটিই একমাত্র জায়গা যেখানে "আত্মবিশ্বাস কমান" ভুল জবাব। মূল্য সিরিজটি লেনদেন থেকে তৈরি হয়নি।
১১. **কেবল তরল লার্জ ক্যাপ ও সূচক গুনুন, দৈনিক ডিগ্রি ও তার ওপরে।** পাতলা কাউন্টারে পাঁচ-ওয়েভ কাঠামোটি একজন অংশগ্রহণকারীর অর্ডার-বিভাজন কর্মসূচি হতে পারে, আর গণমনস্তত্ত্বের জন্য একটি গণ লাগে।
১২. **সম্পন্ন কাউন্টকে প্রস্থান গণ্য করুন, কখনো শর্ট নয়।** নির্ভরযোগ্য ধার না থাকা মানে ওয়েভ-কাউন্টের শীর্ষের সঙ্গে ঠিক একটি কাজ যুক্ত: আপনার যা আছে তা কমান বা বিক্রি করুন।`,
    },

    exercises: {
      en: `1. Build the §43 wave-validator sheet. Enter B2:B7 = 42.00, 51.60, 47.80, 63.35, 59.70, 69.30 and confirm B10:B15 = 9.60, 3.80, 15.55, 3.65, 9.60, 27.30. Verify the identity $L_1 - L_2 + L_3 - L_4 + L_5 = 27.30$.
2. Confirm the rule block: B18 = 39.58%, B19 = PASS, B20 = 9.60, B21 = PASS, B22 = 8.10, B23 = PASS. Then confirm B26 = 1.6198, B27 = 1.0000, B28 = 0.6174, B29 = 23.47%, B30 = ALTERNATES.
3. Change B6 from 59.70 to 50.90 and record what happens to B22, B23 and B37. Then, **in writing**, state the sentence you would publish to your own log. Do not relabel. This exercise is the chapter.
4. With B6 back at 59.70, change B5 from 63.35 to 60.00. Recompute B12, B20, B21 and B26. Does Rule 2 still pass? By how much?
5. **State an invalidation price in advance.** Pick any DSE large cap, label a count on the last twelve months at daily degree, and write down the triple: label, degree, $X_{\\text{count}}$. Seal it with a date. Do not touch it for one month, then score it.
6. For your count in exercise 5, compute both stops: $X_{\\text{count}} = \\max(P_0, P_1)$ and $X_{\\text{trade}} = P_4 - 0.5\\,ATR$. Express both as a percentage of the current price and in ATR. Which one would you have sized on, and why is it the second?
7. Compute the channel by hand for your own count: $m = (P_4 - P_2)/(t_4 - t_2)$, then project $\\hat{P}_5 = P_3 + m(t_5 - t_3)$. On BENGALTEL this gives 0.1919 per session and 71.99 against an actual 69.30. Did your wave 5 terminate inside the channel or through it?
8. **Deliberately construct a second, legal count from the same six pivots.** Label 42.00→69.30 as wave 1 of a higher degree instead. Write down what each count implies for price at 66.00. Now argue, in three sentences, why one of them should be discarded rather than carried.
9. Recompute $L_3$ as $P_3 - P_1 = 11.75$ and propagate the error. What does B26 read? Would Rule 2 still pass if wave 5 had been 12.00?
10. Take a real DSE chart from the floor-price period and attempt a count across it. Then delete it. Write one paragraph explaining why "reduce confidence" was the wrong response and deletion was the right one.
11. Find a session on your chosen name where the close printed at the circuit band. If that print is one of your wave extremes, recompute $L_3/L_1$ with and without it. How much of your ratio is the exchange's rule?
12. Your count says the fifth wave completed at 69.30 and you hold 5,000 shares. Write the exact instruction you would give your broker. Then write, in one sentence, why the answer is not "short 5,000."`,
      bn: `১. §৪৩-এর ওয়েভ-ভ্যালিডেটর শিট তৈরি করুন। B2:B7 = ৪২.০০, ৫১.৬০, ৪৭.৮০, ৬৩.৩৫, ৫৯.৭০, ৬৯.৩০ বসান ও নিশ্চিত করুন B10:B15 = ৯.৬০, ৩.৮০, ১৫.৫৫, ৩.৬৫, ৯.৬০, ২৭.৩০। অভেদটি যাচাই করুন: $L_1 - L_2 + L_3 - L_4 + L_5 = 27.30$।
২. নিয়ম ব্লকটি নিশ্চিত করুন: B18 = ৩৯.৫৮%, B19 = PASS, B20 = ৯.৬০, B21 = PASS, B22 = ৮.১০, B23 = PASS। তারপর নিশ্চিত করুন B26 = ১.৬১৯৮, B27 = ১.০০০০, B28 = ০.৬১৭৪, B29 = ২৩.৪৭%, B30 = ALTERNATES।
৩. B6 ৫৯.৭০ থেকে ৫০.৯০ করুন ও B22, B23, B37-এ কী হয় লিপিবদ্ধ করুন। তারপর **লিখিতভাবে** বলুন নিজের লগে আপনি কোন বাক্যটি প্রকাশ করতেন। পুনরায় লেবেল করবেন না। এই অনুশীলনটিই অধ্যায়টি।
৪. B6 আবার ৫৯.৭০-এ ফিরিয়ে B5 ৬৩.৩৫ থেকে ৬০.০০ করুন। B12, B20, B21 ও B26 পুনর্গণনা করুন। নিয়ম ২ কি এখনো পাস করে? কতটা ব্যবধানে?
৫. **আগেভাগে একটি ইনভ্যালিডেশন প্রাইস বলুন।** যেকোনো ডিএসই লার্জ ক্যাপ বাছুন, গত বারো মাসে দৈনিক ডিগ্রিতে একটি কাউন্ট লেবেল করুন, ও ত্রয়ীটি লিখুন: লেবেল, ডিগ্রি, $X_{\\text{count}}$। তারিখ দিয়ে সিল করুন। এক মাস হাত দেবেন না, তারপর নম্বর দিন।
৬. অনুশীলন ৫-এর কাউন্টের জন্য দুটি স্টপই গণনা করুন: $X_{\\text{count}} = \\max(P_0, P_1)$ ও $X_{\\text{trade}} = P_4 - 0.5\\,ATR$। দুটিকেই বর্তমান দামের শতাংশে ও ATR-এ প্রকাশ করুন। কোনটি থেকে আকার নিতেন, আর কেন তা দ্বিতীয়টি?
৭. নিজের কাউন্টের জন্য হাতে চ্যানেল গণনা করুন: $m = (P_4 - P_2)/(t_4 - t_2)$, তারপর $\\hat{P}_5 = P_3 + m(t_5 - t_3)$ প্রক্ষেপ করুন। BENGALTEL-এ এটি দেয় সেশনপ্রতি ০.১৯১৯ ও ৭১.৯৯, প্রকৃত ৬৯.৩০-এর বিপরীতে। আপনার ওয়েভ ৫ কি চ্যানেলের ভেতরে শেষ হয়েছে না তার মধ্য দিয়ে?
৮. **একই ছয় পিভট থেকে ইচ্ছে করে দ্বিতীয় একটি বৈধ কাউন্ট গড়ুন।** বরং ৪২.০০→৬৯.৩০-কে উচ্চতর ডিগ্রির ওয়েভ ১ লেবেল করুন। ৬৬.০০-এ প্রতিটি কাউন্ট দামের জন্য কী বোঝায় তা লিখুন। এবার তিন বাক্যে যুক্তি দিন কেন একটিকে বহন না করে ফেলে দেওয়া উচিত।
৯. $L_3$-কে $P_3 - P_1 = 11.75$ ধরে পুনর্গণনা করুন ও ভুলটি ছড়িয়ে দিন। B26 কী পড়ে? ওয়েভ ৫ ১২.০০ হলে নিয়ম ২ কি তবু পাস করত?
১০. ফ্লোর-প্রাইসের সময়কালের একটি প্রকৃত ডিএসই চার্ট নিন ও তার ওপর একটি কাউন্ট চেষ্টা করুন। তারপর তা মুছে ফেলুন। এক অনুচ্ছেদে ব্যাখ্যা করুন কেন "আত্মবিশ্বাস কমান" ভুল জবাব ছিল ও মুছে ফেলাই সঠিক।
১১. আপনার বাছা নামে এমন একটি সেশন খুঁজুন যেখানে ক্লোজ সার্কিট ব্যান্ডে ছাপা হয়েছে। ঐ প্রিন্টটি যদি আপনার ওয়েভের একটি প্রান্ত হয়, তবে তা সহ ও বাদ দিয়ে $L_3/L_1$ পুনর্গণনা করুন। আপনার অনুপাতের কতটা এক্সচেঞ্জের বিধি?
১২. আপনার কাউন্ট বলে পঞ্চম ওয়েভ ৬৯.৩০-এ সম্পন্ন আর আপনার হাতে ৫,০০০ শেয়ার। ব্রোকারকে আপনি ঠিক কী নির্দেশ দিতেন তা লিখুন। তারপর এক বাক্যে লিখুন কেন উত্তরটি "৫,০০০ শর্ট" নয়।`,
    },

    summary: {
      en: `- **The 5-3 structure is the framework's entire content:** five waves with the larger trend, three against it, fractally repeated at every degree. On BENGALTEL the five impulse legs measure **9.60, 3.80, 15.55, 3.65 and 9.60**, netting **27.30** from 42.00 to 69.30.
- **Only three statements in Elliott Wave can be violated, and they are the reason to study it at all:** $P_2 > P_0$, $L_3 \\ne \\min(L_1, L_3, L_5)$, and $P_4 > P_1$. On the worked count all three PASS, with **8.10 of rule-3 clearance — 4.38 ATR of room.**
- **Everything else is a guideline and cannot be broken.** $L_3/L_1 = 1.6198$, $L_5/L_1 = 1.0000$, $L_5/L_3 = 0.6174$, retracements of **39.58% and 23.47%** giving **ALTERNATES** at a gap of 16.11. All of it is pleasant, none of it is binding, **and a count that fits every guideline while breaking one rule is dead.**
- **The framework's real defect is that the count is retrofitted.** The same six pivots support at least three legal labellings — completed impulse, wave 1 of a higher degree, or an A-B-C zigzag — which between them permit price to rise, fall moderately, or retrace to 42.00. **If some count always survives, the information content is zero.**
- **So Elliott is an invalidation framework, not a prediction engine.** A count is a forecast only if it publishes, in advance, the triple *label, degree, invalidation price* — here **"Intermediate impulse, wave 5 complete at 69.30, void below 51.60"** — and is never revised except by being declared dead.
- **The analytical invalidation is not a trade stop, and confusing them is expensive.** $X_{\\text{count}} = 51.60$ sits **7.78 ATR and 21.82% below the current 66.00**; $X_{\\text{trade}} = 59.70 - 0.5\\,ATR = 58.78$ sits **3.90 ATR and 10.94% below.** Size on the second, respect the first in writing.
- **Break one rule and the sheet turns instantly.** Move wave 4 to 50.90 and the clearance becomes **−0.70**, Rule 3 FAILS, and the verdict flips to **COUNT INVALID** — while $L_3/L_1$ is still a beautiful 1.6198. **That asymmetry is exactly what makes the rules worth having.**
- **Relabelling after a violation is the single habit that destroys the method.** It converts a failed forecast into a fresh one at no cost. The remedy is a dated log: *"my count invalidated at 51.60; I was wrong."* **That log is the only track record a wave counter can ever have.**
- **The projections are the checkable part, and they were made in advance:** 1.618 × wave 1 from point 2 gave **63.33 against an actual 63.35**, and the equality and 0.618 methods clustered at **69.30 and 69.31 against an actual 69.30.** Channel projection gave 71.99, so wave 5 terminated **2.69 inside its own rail** — the ordinary non-extended case.
- **DSE reality breaks counting at multiple degrees at once.** Floor-price windows mean deletion of the count, not a discount. Circuit limits truncate wave extremes, so **1.6198 may be a precise number about an administrative boundary.** Thin float means a five-wave structure can be one participant's order-splitting. And with no reliable short side, **a wave-count top is an exit — never a short.**
- **The defensible claim, stated plainly:** the three rules are genuinely useful because they are the only part that can be violated, and a violated count is real information — it tells you your read is wrong and forces an exit. **A practitioner who needs three alternate counts to stay right is not being rigorous; they are being unfalsifiable and calling it thoroughness.**`,
      bn: `- **৫-৩ কাঠামোই কাঠামোটির সমগ্র বিষয়বস্তু:** বৃহত্তর প্রবণতার সঙ্গে পাঁচ ওয়েভ, তার বিপরীতে তিন, প্রতিটি ডিগ্রিতে ফ্র্যাক্টালভাবে পুনরাবৃত্ত। BENGALTEL-এ পাঁচটি ইম্পালস পা মাপে **৯.৬০, ৩.৮০, ১৫.৫৫, ৩.৬৫ ও ৯.৬০**, ৪২.০০ থেকে ৬৯.৩০-এ নেট **২৭.৩০**।
- **এলিয়ট ওয়েভে কেবল তিনটি বিবৃতিই লঙ্ঘিত হতে পারে, আর সেগুলোই একে আদৌ পড়ার কারণ:** $P_2 > P_0$, $L_3 \\ne \\min(L_1, L_3, L_5)$, ও $P_4 > P_1$। উদাহরণের কাউন্টে তিনটিই PASS, **নিয়ম-৩-এর ব্যবধান ৮.১০ — ৪.৩৮ ATR জায়গা।**
- **বাকি সবই নির্দেশিকা এবং ভাঙা যায় না।** $L_3/L_1 = 1.6198$, $L_5/L_1 = 1.0000$, $L_5/L_3 = 0.6174$, রিট্রেসমেন্ট **৩৯.৫৮% ও ২৩.৪৭%** যা ১৬.১১ ব্যবধানে **ALTERNATES** দেয়। সবই মনোরম, কোনোটিই বাধ্যতামূলক নয়, **আর যে কাউন্ট প্রতিটি নির্দেশিকায় মেলে অথচ একটি নিয়ম ভাঙে তা মৃত।**
- **কাঠামোটির প্রকৃত ত্রুটি হলো কাউন্টটি ঘটনার পরে বসানো।** একই ছয়টি পিভট অন্তত তিনটি বৈধ লেবেলিং সমর্থন করে — সম্পন্ন ইম্পালস, উচ্চতর ডিগ্রির ওয়েভ ১, বা A-B-C জিগজ্যাগ — যা মিলে দামকে উঠতে, মাঝারিভাবে পড়তে, বা ৪২.০০ পর্যন্ত ফিরতে অনুমোদন করে। **যদি কোনো না কোনো কাউন্ট সবসময় টিকে যায়, তবে তথ্যের পরিমাণ শূন্য।**
- **তাই এলিয়ট একটি ইনভ্যালিডেশন কাঠামো, পূর্বাভাসের ইঞ্জিন নয়।** একটি কাউন্ট তখনই পূর্বাভাস যখন তা আগেভাগে ত্রয়ী প্রকাশ করে — *লেবেল, ডিগ্রি, ইনভ্যালিডেশন প্রাইস* — এখানে **"Intermediate ইম্পালস, ওয়েভ ৫ ৬৯.৩০-এ সম্পন্ন, ৫১.৬০-এর নিচে বাতিল"** — আর মৃত ঘোষণা ছাড়া কখনো সংশোধিত হয় না।
- **বিশ্লেষণী ইনভ্যালিডেশন ট্রেডের স্টপ নয়, আর দুটি গুলিয়ে ফেলা ব্যয়বহুল।** $X_{\\text{count}} = 51.60$ বসে বর্তমান ৬৬.০০-এর **৭.৭৮ ATR ও ২১.৮২% নিচে**; $X_{\\text{trade}} = 59.70 - 0.5\\,ATR = 58.78$ বসে **৩.৯০ ATR ও ১০.৯৪% নিচে।** দ্বিতীয়টি থেকে আকার নিন, প্রথমটি লিখিতভাবে মানুন।
- **একটি নিয়ম ভাঙুন আর শিট তৎক্ষণাৎ ঘুরে যায়।** ওয়েভ ৪ ৫০.৯০-এ সরান আর ব্যবধান হয় **−০.৭০**, নিয়ম ৩ FAIL, আর রায় উল্টে যায় **COUNT INVALID**-এ — অথচ $L_3/L_1$ তখনো সুন্দর ১.৬১৯৮। **ঐ অসামঞ্জস্যই নিয়মগুলো রাখার কারণ।**
- **লঙ্ঘনের পরে পুনঃলেবেলিংই সেই একক অভ্যাস যা পদ্ধতিটি ধ্বংস করে।** এটি ব্যর্থ পূর্বাভাসকে বিনা খরচে নতুন পূর্বাভাসে বদলায়। প্রতিকার একটি তারিখযুক্ত লগ: *"আমার কাউন্ট ৫১.৬০-এ বাতিল হয়েছে; আমি ভুল ছিলাম।"* **ঐ লগই একজন ওয়েভ-গণকের একমাত্র সম্ভাব্য ট্র্যাক রেকর্ড।**
- **প্রক্ষেপণগুলোই যাচাইযোগ্য অংশ, আর সেগুলো আগেভাগে করা হয়েছিল:** পয়েন্ট ২ থেকে ১.৬১৮ × ওয়েভ ১ দিয়েছিল **৬৩.৩৩, প্রকৃত ৬৩.৩৫-এর বিপরীতে**, আর সমতা ও ০.৬১৮ পদ্ধতি ক্লাস্টার করেছিল **৬৯.৩০ ও ৬৯.৩১-এ, প্রকৃত ৬৯.৩০-এর বিপরীতে।** চ্যানেল প্রক্ষেপণ দিয়েছিল ৭১.৯৯, তাই ওয়েভ ৫ শেষ হয়েছে **নিজের রেলের ২.৬৯ ভেতরে** — সাধারণ অ-বর্ধিত ঘটনা।
- **ডিএসই বাস্তবতা একসঙ্গে একাধিক ডিগ্রিতে কাউন্টিং ভাঙে।** ফ্লোর-প্রাইস সময়কাল মানে কাউন্ট মুছে ফেলা, ছাড় নয়। সার্কিট সীমা ওয়েভের প্রান্ত কাটে, তাই **১.৬১৯৮ হয়তো একটি প্রশাসনিক সীমানা সম্পর্কে নিখুঁত সংখ্যা।** পাতলা ফ্লোট মানে পাঁচ-ওয়েভ কাঠামো একজন অংশগ্রহণকারীর অর্ডার-বিভাজন হতে পারে। আর নির্ভরযোগ্য শর্ট সাইড না থাকায় **ওয়েভ-কাউন্টের শীর্ষ একটি প্রস্থান — কখনো শর্ট নয়।**
- **রক্ষণযোগ্য দাবিটি, সরলভাবে বলা:** তিনটি নিয়ম সত্যিই কার্যকর কারণ কেবল সেগুলোই লঙ্ঘিত হতে পারে, আর একটি লঙ্ঘিত কাউন্ট প্রকৃত তথ্য — তা বলে আপনার পাঠ ভুল এবং প্রস্থানে বাধ্য করে। **যে চর্চাকারীর ঠিক থাকতে তিনটি বিকল্প কাউন্ট লাগে তিনি কঠোর নন; তিনি মিথ্যা-প্রমাণ-অযোগ্য, আর একে পুঙ্খানুপুঙ্খতা বলছেন।**`,
    },
  },

  interview: [
    {
      q: {
        en: 'Elliott Wave is often accused of being unfalsifiable. Is that fair?',
        bn: 'এলিয়ট ওয়েভের বিরুদ্ধে প্রায়ই অভিযোগ ওঠে যে একে মিথ্যা প্রমাণ করা যায় না। এটি কি ন্যায্য?',
      },
      a: {
        en: 'It is fair about how the framework is normally practised and unfair about the framework itself, and I think the distinction is the whole subject. Three statements in Elliott can actually be violated: wave two never retraces beyond the start of wave one, wave three is never the shortest of one, three and five, and wave four never enters wave one\'s price territory. Those are subtractions. On the count I work through, wave two bottoms at forty-seven point eight against a start of forty-two, wave three measures fifteen point five five against nine point six and nine point six, and wave four bottoms at fifty-nine point seven against a wave one high of fifty-one point six, giving eight point one zero of clearance. Every one of those could have come out the other way, and if wave four had printed fifty point nine instead the count would be void — not weak, void. So the falsifiable core is real. The unfair-to-the-framework part is that practitioners typically respond to a violation by relabelling, saying the move was one degree lower than assumed, or that wave four was a triangle after all. That converts a failed forecast into a fresh forecast at no cost and leaves no record that anything went wrong. And when someone carries a primary count plus two alternates that between them allow up, down and sideways, the probability that some count survives is one, which means the information content is zero. So my position is that Elliott is defensible strictly as an invalidation framework: you publish the label, the degree and the invalidation price in advance, and you never edit any of the three except by declaring the count dead.',
        bn: 'কাঠামোটি সাধারণত যেভাবে চর্চা করা হয় সে সম্পর্কে অভিযোগটি ন্যায্য, আর কাঠামোটি নিজে সম্পর্কে অন্যায্য, আর আমার মনে হয় এই পার্থক্যটিই পুরো বিষয়। এলিয়টের তিনটি বিবৃতি সত্যিই লঙ্ঘিত হতে পারে: ওয়েভ দুই কখনো ওয়েভ এক-এর শুরুর নিচে যায় না, ওয়েভ তিন কখনো এক, তিন ও পাঁচের মধ্যে ক্ষুদ্রতম নয়, আর ওয়েভ চার কখনো ওয়েভ এক-এর মূল্য এলাকায় ঢোকে না। এগুলো বিয়োগ। আমি যে কাউন্টটি নিয়ে কাজ করি তাতে ওয়েভ দুই বিয়াল্লিশ থেকে শুরুর বিপরীতে সাতচল্লিশ দশমিক আটে তলা ছোঁয়, ওয়েভ তিন নয় দশমিক ছয় ও নয় দশমিক ছয়ের বিপরীতে পনেরো দশমিক পাঁচ পাঁচ মাপে, আর ওয়েভ চার একান্ন দশমিক ছয়ের ওয়েভ এক উচ্চতার বিপরীতে ঊনষাট দশমিক সাতে তলা ছোঁয়, আট দশমিক এক শূন্য ব্যবধান দিয়ে। প্রতিটিই উল্টোভাবে আসতে পারত, আর ওয়েভ চার যদি পঞ্চাশ দশমিক নয় ছাপত তবে কাউন্টটি বাতিল হতো — দুর্বল নয়, বাতিল। তাই মিথ্যা-প্রমাণযোগ্য কেন্দ্রটি বাস্তব। কাঠামোটির প্রতি অন্যায্য অংশটি হলো, চর্চাকারীরা সাধারণত লঙ্ঘনের জবাবে পুনরায় লেবেল করেন, বলেন চলনটি ধারণার চেয়ে এক ডিগ্রি নিচে ছিল, বা ওয়েভ চার আসলে একটি ট্রায়াঙ্গল ছিল। এটি ব্যর্থ পূর্বাভাসকে বিনা খরচে নতুন পূর্বাভাসে বদলায় আর কিছু ভুল হওয়ার কোনো নথি রাখে না। আর কেউ যখন একটি প্রধান কাউন্টের সঙ্গে দুটি বিকল্প বহন করেন যা মিলে উপরে, নিচে ও পাশে অনুমোদন করে, তখন কোনো না কোনো কাউন্ট টিকে যাওয়ার সম্ভাবনা এক, অর্থাৎ তথ্যের পরিমাণ শূন্য। তাই আমার অবস্থান হলো এলিয়ট কেবল একটি ইনভ্যালিডেশন কাঠামো হিসেবেই রক্ষণযোগ্য: আপনি লেবেল, ডিগ্রি ও ইনভ্যালিডেশন প্রাইস আগেভাগে প্রকাশ করেন, আর কাউন্টটি মৃত ঘোষণা করা ছাড়া তিনটির একটিও কখনো সম্পাদনা করেন না।',
      },
    },
    {
      q: {
        en: 'Walk me through the three hard rules on a specific count, and tell me exactly what a PASS means.',
        bn: 'একটি নির্দিষ্ট কাউন্টে তিনটি কঠিন নিয়ম ধরে ধরে বলুন, আর ঠিক কী বোঝায় একটি PASS তা বলুন।',
      },
      a: {
        en: 'Take six pivots at forty-two, fifty-one point six, forty-seven point eight, sixty-three point three five, fifty-nine point seven and sixty-nine point three. Rule one asks whether wave two retraced past the start of wave one: forty-seven point eight is above forty-two, so it passes, and the retracement works out at thirty-nine point five eight percent of wave one. Rule two asks whether wave three is the shortest of the three impulse legs: the lengths are nine point six, fifteen point five five and nine point six, so the minimum is nine point six and it is shared between waves one and five, which means wave three is not the shortest and it passes. Rule three asks whether wave four entered wave one\'s territory: wave four bottomed at fifty-nine point seven against a wave one high of fifty-one point six, so there is eight point one zero of clearance, which is about four point three eight average true ranges of room, and it passes. Now the part people get wrong. A pass means the labelling is permitted. It does not mean the labelling is correct. There is no arithmetic anywhere in Elliott that can promote a legal count into a true one, and that is not a defect I am apologising for — it is the actual epistemic status of the method. What I do get from three passes is a specific price, fifty-one point six, at which I have agreed in advance to say I was wrong. I would also record the clearance rather than just the verdict, because a count that passes rule three with eight point one zero of room is in very different health from one that passes with fifteen paisa.',
        bn: 'বিয়াল্লিশ, একান্ন দশমিক ছয়, সাতচল্লিশ দশমিক আট, তেষট্টি দশমিক তিন পাঁচ, ঊনষাট দশমিক সাত ও ঊনসত্তর দশমিক তিন — এই ছয়টি পিভট নিন। নিয়ম এক জিজ্ঞেস করে ওয়েভ দুই ওয়েভ এক-এর শুরু পেরিয়ে ফিরেছে কি না: সাতচল্লিশ দশমিক আট বিয়াল্লিশের ওপরে, তাই পাস, আর রিট্রেসমেন্ট দাঁড়ায় ওয়েভ এক-এর ঊনচল্লিশ দশমিক পাঁচ আট শতাংশ। নিয়ম দুই জিজ্ঞেস করে ওয়েভ তিন তিনটি ইম্পালস পায়ের মধ্যে ক্ষুদ্রতম কি না: দৈর্ঘ্যগুলো নয় দশমিক ছয়, পনেরো দশমিক পাঁচ পাঁচ ও নয় দশমিক ছয়, তাই ন্যূনতম নয় দশমিক ছয় এবং তা ওয়েভ এক ও পাঁচের মধ্যে ভাগ করা, অর্থাৎ ওয়েভ তিন ক্ষুদ্রতম নয় এবং তা পাস। নিয়ম তিন জিজ্ঞেস করে ওয়েভ চার ওয়েভ এক-এর এলাকায় ঢুকেছে কি না: ওয়েভ চার একান্ন দশমিক ছয়ের ওয়েভ এক উচ্চতার বিপরীতে ঊনষাট দশমিক সাতে তলা ছুঁয়েছে, তাই আট দশমিক এক শূন্য ব্যবধান, যা প্রায় চার দশমিক তিন আট গড় true range জায়গা, আর তা পাস। এবার যে অংশটি মানুষ ভুল বোঝেন। পাস মানে লেবেলিংটি অনুমোদিত। এর মানে লেবেলিংটি সঠিক নয়। এলিয়টের কোথাও এমন পাটিগণিত নেই যা একটি বৈধ কাউন্টকে সত্য কাউন্টে উন্নীত করতে পারে, আর এটি এমন ত্রুটি নয় যার জন্য আমি ক্ষমা চাইছি — এটিই পদ্ধতিটির প্রকৃত জ্ঞানতাত্ত্বিক অবস্থান। তিনটি পাস থেকে আমি যা পাই তা হলো একটি নির্দিষ্ট দাম, একান্ন দশমিক ছয়, যেখানে আমি আগেভাগে রাজি হয়েছি বলতে যে আমি ভুল ছিলাম। আমি কেবল রায় নয়, ব্যবধানটিও লিপিবদ্ধ করব, কারণ যে কাউন্ট আট দশমিক এক শূন্য জায়গা নিয়ে নিয়ম তিনে পাস করে তার স্বাস্থ্য পনেরো পয়সা নিয়ে পাস করা কাউন্টের চেয়ে সম্পূর্ণ ভিন্ন।',
      },
    },
    {
      q: {
        en: 'Your count invalidates. What do you actually do, and what do you refuse to do?',
        bn: 'আপনার কাউন্ট বাতিল হয়। আপনি আসলে কী করেন, আর কী করতে অস্বীকার করেন?',
      },
      a: {
        en: 'I abandon the count and I write it down with a date, and what I refuse to do is relabel. Concretely, suppose wave four bottoms at fifty point nine instead of fifty-nine point seven. That is below the wave one high of fifty-one point six, so the clearance is minus zero point seven zero, rule three fails, and the verdict flips from count valid to count invalid. Notice what has not changed: waves one, two and three are at exactly the same pivots and the ratio of wave three to wave one is still one point six one nine eight, which is beautiful. A zero point seven zero overlap kills a count that every guideline still adores, and that asymmetry is precisely why the rules are worth having. The temptation at that moment is immediate and it always takes the same shape — perhaps the whole move was one degree lower than I assumed, so what I called wave four is really wave two of a new impulse. That relabelling is arithmetically permitted and it is exactly the behaviour that makes the method unfalsifiable, because it costs nothing and erases the evidence. So the log entry reads: on this date my Intermediate-degree count invalidated at fifty-one point six, I was wrong, and any new count is a new count dated today with its own invalidation price. I will not present it as a continuation. I would say that log is the only track record a wave counter can ever have, and someone who cannot produce one does not have a method, they have a story that has always been true.',
        bn: 'আমি কাউন্টটি ত্যাগ করি এবং তারিখসহ লিখে রাখি, আর যা করতে অস্বীকার করি তা হলো পুনরায় লেবেল করা। বাস্তবে ধরুন ওয়েভ চার ঊনষাট দশমিক সাতের বদলে পঞ্চাশ দশমিক নয়ে তলা ছুঁল। তা একান্ন দশমিক ছয়ের ওয়েভ এক উচ্চতার নিচে, তাই ব্যবধান বিয়োগ শূন্য দশমিক সাত শূন্য, নিয়ম তিন ব্যর্থ, আর রায় কাউন্ট বৈধ থেকে কাউন্ট অবৈধে উল্টে যায়। লক্ষ করুন কী বদলায়নি: ওয়েভ এক, দুই ও তিন হুবহু একই পিভটে আর ওয়েভ তিন ও ওয়েভ এক-এর অনুপাত এখনো এক দশমিক ছয় এক নয় আট, যা সুন্দর। শূন্য দশমিক সাত শূন্য ওভারল্যাপ এমন একটি কাউন্ট মেরে ফেলে যাকে প্রতিটি নির্দেশিকা এখনো ভালোবাসে, আর ঐ অসামঞ্জস্যই নিয়মগুলো রাখার কারণ। ঐ মুহূর্তের প্রলোভন তাৎক্ষণিক আর তা সবসময় একই আকার নেয় — হয়তো পুরো চলনটি আমার ধারণার চেয়ে এক ডিগ্রি নিচে ছিল, তাই যাকে আমি ওয়েভ চার বলেছি তা আসলে নতুন ইম্পালসের ওয়েভ দুই। ঐ পুনঃলেবেলিং পাটিগাণিতিকভাবে অনুমোদিত এবং ঠিক এই আচরণই পদ্ধতিটিকে মিথ্যা-প্রমাণ-অযোগ্য করে, কারণ এতে কোনো খরচ নেই আর প্রমাণ মুছে যায়। তাই লগের এন্ট্রিটি পড়ে: এই তারিখে আমার Intermediate-ডিগ্রি কাউন্ট একান্ন দশমিক ছয়ে বাতিল হয়েছে, আমি ভুল ছিলাম, আর যেকোনো নতুন কাউন্ট আজকের তারিখের একটি নতুন কাউন্ট, নিজের ইনভ্যালিডেশন প্রাইসসহ। আমি একে ধারাবাহিকতা হিসেবে উপস্থাপন করব না। আমি বলব ঐ লগই একজন ওয়েভ-গণকের একমাত্র সম্ভাব্য ট্র্যাক রেকর্ড, আর যিনি তা দেখাতে পারেন না তাঁর কোনো পদ্ধতি নেই, তাঁর একটি গল্প আছে যা সবসময় সত্য ছিল।',
      },
    },
    {
      q: {
        en: 'Should the Elliott invalidation level be your stop loss?',
        bn: 'এলিয়ট ইনভ্যালিডেশন স্তরই কি আপনার স্টপ লস হওয়া উচিত?',
      },
      a: {
        en: 'No, and I think conflating those two is the most expensive practical error in the whole subject. They answer different questions. The count invalidation answers whether my reading of the structure is still legal; the trade stop answers whether I am still in the position. On my worked count the rule three invalidation is the wave one high at fifty-one point six, and with price at sixty-six that is fourteen taka forty away, which is twenty-one point eight two percent, or seven point seven eight average true ranges. A stop seven point seven eight true ranges from the market is not risk management, it is a donation. Anyone who tells you to hold until the count invalidates is telling you to size a position off a number that has nothing to do with volatility. The operational stop is a different object and I compute it the way chapter thirty does — half an average true range below the wave four low, so fifty-nine point seven minus zero point nine two five, which is fifty-eight point seven eight. That is three point nine zero true ranges away and ten point nine four percent from price, and it is what chapter forty-nine\'s position sizing should be run against. The two levels then do their separate jobs. Getting stopped at fifty-eight point seven eight does not kill the count — the read may well survive and I can re-enter. Trading fifty-one point six does kill it, and at that point I am out of the idea entirely, not just out of the position. Running only the analytical level is how people end up twenty-two percent underwater still insisting the count is fine. Technically it is fine. That is the problem.',
        bn: 'না, আর আমার মনে হয় এই দুটি গুলিয়ে ফেলাই গোটা বিষয়ের সবচেয়ে ব্যয়বহুল ব্যবহারিক ভুল। তারা ভিন্ন প্রশ্নের উত্তর দেয়। কাউন্ট ইনভ্যালিডেশন উত্তর দেয় কাঠামো সম্পর্কে আমার পাঠ এখনো বৈধ কি না; ট্রেডের স্টপ উত্তর দেয় আমি এখনো পজিশনে আছি কি না। আমার কাউন্টে নিয়ম তিনের ইনভ্যালিডেশন হলো একান্ন দশমিক ছয়ে ওয়েভ এক-এর উচ্চতা, আর দাম ছেষট্টিতে থাকলে তা চোদ্দ টাকা চল্লিশ দূরে, যা একুশ দশমিক আট দুই শতাংশ, বা সাত দশমিক সাত আট গড় true range। বাজার থেকে সাত দশমিক সাত আট true range দূরের স্টপ ঝুঁকি ব্যবস্থাপনা নয়, তা অনুদান। যিনি আপনাকে বলেন কাউন্ট বাতিল না হওয়া পর্যন্ত ধরে রাখতে, তিনি আপনাকে এমন একটি সংখ্যা থেকে পজিশনের আকার ঠিক করতে বলছেন যার ভোলাটিলিটির সঙ্গে কোনো সম্পর্ক নেই। পরিচালনগত স্টপ ভিন্ন বস্তু আর আমি তা অধ্যায় ত্রিশের পদ্ধতিতে গণনা করি — ওয়েভ চারের নিম্নের অর্ধ গড় true range নিচে, অর্থাৎ ঊনষাট দশমিক সাত বিয়োগ শূন্য দশমিক নয় দুই পাঁচ, যা আটান্ন দশমিক সাত আট। তা দাম থেকে তিন দশমিক নয় শূন্য true range দূরে ও দশ দশমিক নয় চার শতাংশ, আর অধ্যায় ঊনপঞ্চাশের পজিশন সাইজিং এর বিপরীতেই চালানো উচিত। তখন দুটি স্তর তাদের আলাদা কাজ করে। আটান্ন দশমিক সাত আটে স্টপ লাগা কাউন্টকে মারে না — পাঠটি ভালোভাবেই টিকে থাকতে পারে ও আমি আবার ঢুকতে পারি। একান্ন দশমিক ছয় লেনদেন হওয়া একে মারে, আর তখন আমি কেবল পজিশনের বাইরে নই, ধারণাটির বাইরেই। কেবল বিশ্লেষণী স্তরটি চালানোই সেই পথ যেভাবে মানুষ বাইশ শতাংশ পানির নিচে থেকেও জোর দিয়ে বলেন কাউন্টটি ঠিক আছে। কারিগরিভাবে তা ঠিকই আছে। সমস্যাটি সেখানেই।',
      },
    },
    {
      q: {
        en: 'What does the DSE specifically do to a wave count?',
        bn: 'ডিএসই বিশেষভাবে একটি ওয়েভ কাউন্টের কী করে?',
      },
      a: {
        en: 'It breaks it at several degrees at once, and the four problems are different enough that they need different responses. The worst is the floor-price windows. When a share cannot legally trade below an administratively set level, the pivots a count depends on simply do not form, so a count spanning that period is not weak, it is meaningless — the price series was not produced by the process Elliott describes. That is the one place where reducing your confidence is the wrong answer and deletion is the right one. Second, circuit limits truncate wave extremes. Near fifty-five taka a ten percent band is about five taka fifty of permitted daily travel, so a genuinely strong third wave gets sliced into a staircase of limit-up sessions, and my sub-wave pivots inside it are the exchange\'s rule rather than the crowd\'s mood. If either of my wave extremes, sixty-three point three five or sixty-nine point three, was a limit-locked print, then the ratio of one point six one nine eight that I am so pleased with is a very precise number about an administrative boundary. Third, record dates. An ex-dividend or ex-bonus gap prints what looks like a completed wave endpoint and is nothing of the kind, so those pivots get adjusted or deleted. Fourth, thin free float. Elliott attributes the structure to mass psychology, and mass psychology requires a mass — on a counter where a handful of accounts drive the tape you are counting one buyer\'s order-splitting algorithm. So I confine counting to liquid large caps and the index, at daily degree and above. And the last constraint is a market-structure one rather than a data one: there is no reliable retail short side here, so a completed fifth wave is an instruction to sell what I hold and nothing else. Half the classical literature silently assumes a borrow we do not have.',
        bn: 'এটি একসঙ্গে কয়েকটি ডিগ্রিতে কাউন্ট ভাঙে, আর চারটি সমস্যা এতটাই ভিন্ন যে সেগুলোর ভিন্ন জবাব দরকার। সবচেয়ে খারাপ হলো ফ্লোর-প্রাইসের সময়কাল। যখন একটি শেয়ার আইনত প্রশাসনিকভাবে নির্ধারিত স্তরের নিচে লেনদেন করতে পারে না, তখন কাউন্ট যে পিভটের ওপর নির্ভর করে তা তৈরিই হয় না, তাই ঐ সময়কাল বিস্তৃত কাউন্ট দুর্বল নয়, অর্থহীন — মূল্য সিরিজটি এলিয়ট যে প্রক্রিয়ার কথা বলেন তাতে তৈরি হয়নি। এটিই একমাত্র জায়গা যেখানে আত্মবিশ্বাস কমানো ভুল জবাব আর মুছে ফেলাই সঠিক। দ্বিতীয়ত, সার্কিট সীমা ওয়েভের প্রান্ত কেটে দেয়। পঞ্চান্ন টাকার কাছে দশ শতাংশের ব্যান্ড মানে দিনে প্রায় পাঁচ টাকা পঞ্চাশ অনুমোদিত চলাচল, তাই সত্যিকারের শক্তিশালী তৃতীয় ওয়েভ লিমিট-আপ সেশনের সিঁড়িতে কাটা পড়ে, আর তার ভেতরের উপ-ওয়েভ পিভটগুলো ভিড়ের মেজাজ নয়, এক্সচেঞ্জের বিধি। আমার দুটি ওয়েভ প্রান্তের কোনোটি, তেষট্টি দশমিক তিন পাঁচ বা ঊনসত্তর দশমিক তিন, যদি লিমিট-লক প্রিন্ট হয়, তবে যে এক দশমিক ছয় এক নয় আট অনুপাত নিয়ে আমি এত খুশি তা একটি প্রশাসনিক সীমানা সম্পর্কে অত্যন্ত নিখুঁত একটি সংখ্যা। তৃতীয়ত, রেকর্ড ডেট। এক্স-ডিভিডেন্ড বা এক্স-বোনাস গ্যাপ এমন কিছু ছাপে যা সম্পন্ন ওয়েভ প্রান্তবিন্দুর মতো দেখায় অথচ মোটেই তা নয়, তাই ঐ পিভটগুলো সমন্বয় করা বা মুছে ফেলা হয়। চতুর্থত, পাতলা ফ্রি ফ্লোট। এলিয়ট কাঠামোটিকে গণমনস্তত্ত্বের ফল বলেন, আর গণমনস্তত্ত্বের জন্য একটি গণ লাগে — যে কাউন্টারে হাতেগোনা কয়েকটি হিসাব টেপ চালায় সেখানে আপনি একজন ক্রেতার অর্ডার-বিভাজন অ্যালগরিদম গুনছেন। তাই আমি কাউন্টিং কেবল তরল লার্জ ক্যাপ ও সূচকে সীমিত রাখি, দৈনিক ডিগ্রি ও তার ওপরে। আর শেষ সীমাবদ্ধতাটি ডেটার নয়, বাজার-কাঠামোর: এখানে নির্ভরযোগ্য খুচরা শর্ট সাইড নেই, তাই সম্পন্ন পঞ্চম ওয়েভ আমার হাতে যা আছে তা বিক্রির নির্দেশ, তার বেশি কিছু নয়। ধ্রুপদী সাহিত্যের অর্ধেক নীরবে এমন একটি ধার ধরে নেয় যা আমাদের নেই।',
      },
    },
    {
      q: {
        en: 'If you strip away the labels, what is left that Dow Theory did not already give you?',
        bn: 'লেবেলগুলো সরিয়ে দিলে কী পড়ে থাকে যা ডাও থিওরি আগেই দেয়নি?',
      },
      a: {
        en: 'Less than the literature claims, and more than the critics allow, so let me take both halves. What is not new is most of the psychology. Trends move in impulses and corrections; the middle stretch of a trend is the strongest and carries the highest volume; corrections alternate in character. All three are true and useful and all three are Dow\'s accumulation, participation and distribution phases restated with numbers attached, and you can observe every one of them without labelling anything. What Elliott genuinely adds is two things. First, the falsifiable rules. Dow Theory has no statement that a specific price will prove your reading wrong; Elliott does, and on my count that price is fifty-one point six, published in advance. That is a real contribution and it is the entire reason I teach the framework. Second, structural position. Elliott forces you to ask where you are inside a move rather than only what the last bar did, and a trader who has genuinely internalised the question of whether this is the third wave or the fifth behaves differently — more patient early in a trend, more suspicious late in it, and much less likely to buy a breakout that is the sixth of its kind. There is a smaller third benefit in the projections, which are checkable: extending wave one by one point six one eight from the wave two low gave sixty-three point three three against an actual sixty-three point three five, and the equality and zero point six one eight methods for wave five clustered at sixty-nine point three zero and sixty-nine point three one against an actual sixty-nine point three. But I would present all of that as a thinking aid with a testable stop attached, not a forecasting engine, and I would be suspicious of anyone who presents it otherwise.',
        bn: 'সাহিত্য যা দাবি করে তার চেয়ে কম, আর সমালোচকরা যতটা মানেন তার চেয়ে বেশি, তাই দুই অংশই বলি। যা নতুন নয় তা হলো মনস্তত্ত্বের বেশিরভাগ। প্রবণতা ইম্পালস ও কারেকশনে চলে; প্রবণতার মধ্যাংশ সবচেয়ে শক্তিশালী ও সর্বোচ্চ ভলিউম বহন করে; কারেকশন চরিত্রে পালা করে। তিনটিই সত্য ও কার্যকর এবং তিনটিই ডাও-এর সঞ্চয়ন, অংশগ্রহণ ও বিতরণ পর্যায়ের পুনরুক্তি, সঙ্গে সংখ্যা জোড়া, আর কিছু লেবেল না করেই আপনি প্রতিটি পর্যবেক্ষণ করতে পারেন। এলিয়ট সত্যিই যা যোগ করে তা দুটি। প্রথমত, মিথ্যা-প্রমাণযোগ্য নিয়ম। ডাও থিওরিতে এমন কোনো বিবৃতি নেই যে একটি নির্দিষ্ট দাম আপনার পাঠ ভুল প্রমাণ করবে; এলিয়টে আছে, আর আমার কাউন্টে সেই দাম একান্ন দশমিক ছয়, আগেভাগে প্রকাশিত। এটি একটি প্রকৃত অবদান এবং এটিই কাঠামোটি শেখানোর সম্পূর্ণ কারণ। দ্বিতীয়ত, কাঠামোগত অবস্থান। এলিয়ট আপনাকে জিজ্ঞেস করতে বাধ্য করে আপনি একটি চলনের কোথায় আছেন, কেবল শেষ বারটি কী করল তা নয়, আর যিনি এটি তৃতীয় ওয়েভ না পঞ্চম সেই প্রশ্নটি সত্যিই আত্মস্থ করেছেন তিনি ভিন্নভাবে আচরণ করেন — প্রবণতার শুরুতে বেশি ধৈর্যশীল, শেষে বেশি সন্দেহপ্রবণ, আর ষষ্ঠবারের ব্রেকআউট কেনার সম্ভাবনা অনেক কম। প্রক্ষেপণে একটি ছোট তৃতীয় সুফলও আছে, যা যাচাইযোগ্য: ওয়েভ দুইয়ের নিম্ন থেকে ওয়েভ এককে এক দশমিক ছয় এক আট গুণ বাড়ালে পাওয়া গিয়েছিল তেষট্টি দশমিক তিন তিন, প্রকৃত তেষট্টি দশমিক তিন পাঁচের বিপরীতে, আর ওয়েভ পাঁচের জন্য সমতা ও শূন্য দশমিক ছয় এক আট পদ্ধতি ক্লাস্টার করেছিল ঊনসত্তর দশমিক তিন শূন্য ও ঊনসত্তর দশমিক তিন এক-এ, প্রকৃত ঊনসত্তর দশমিক তিনের বিপরীতে। কিন্তু আমি এসবকে একটি পরীক্ষণযোগ্য স্টপ-সংযুক্ত চিন্তার সহায়ক হিসেবেই উপস্থাপন করব, পূর্বাভাসের ইঞ্জিন হিসেবে নয়, আর যিনি অন্যভাবে উপস্থাপন করেন তাঁকে আমি সন্দেহ করব।',
      },
    },
  ],

  quiz: [
    {
      q: {
        en: 'How many statements in Elliott Wave are rules rather than guidelines?',
        bn: 'এলিয়ট ওয়েভে কতগুলো বিবৃতি নির্দেশিকা নয়, নিয়ম?',
      },
      options: {
        en: ['One', 'Three', 'Five', 'Eight'],
        bn: ['একটি', 'তিনটি', 'পাঁচটি', 'আটটি'],
      },
      answer: 1,
    },
    {
      q: {
        en: 'With pivots 42.00, 51.60, 47.80, 63.35, 59.70, 69.30, the length of wave 3 is:',
        bn: '৪২.০০, ৫১.৬০, ৪৭.৮০, ৬৩.৩৫, ৫৯.৭০, ৬৯.৩০ পিভটে ওয়েভ ৩-এর দৈর্ঘ্য:',
      },
      options: {
        en: ['11.75', '15.55', '21.35', '27.30'],
        bn: ['১১.৭৫', '১৫.৫৫', '২১.৩৫', '২৭.৩০'],
      },
      answer: 1,
    },
    {
      q: {
        en: 'Rule 3 states that wave 4 never enters wave 1\'s territory. On this count the clearance is:',
        bn: 'নিয়ম ৩ বলে ওয়েভ ৪ কখনো ওয়েভ ১-এর এলাকায় ঢোকে না। এই কাউন্টে ব্যবধান:',
      },
      options: {
        en: ['3.65', '8.10', '9.60', '15.55'],
        bn: ['৩.৬৫', '৮.১০', '৯.৬০', '১৫.৫৫'],
      },
      answer: 1,
    },
    {
      q: {
        en: 'The ratio L3/L1 = 1.6198 tells you that the count is:',
        bn: 'L3/L1 = ১.৬১৯৮ অনুপাত বলে যে কাউন্টটি:',
      },
      options: {
        en: [
          'Proved correct by Fibonacci',
          'Consistent with a guideline, which cannot be violated and so cannot inform you',
          'Required to make a new high',
          'Invalid, because 1.618 is a rule',
        ],
        bn: [
          'ফিবোনাচি দ্বারা সঠিক প্রমাণিত',
          'একটি নির্দেশিকার সঙ্গে সঙ্গতিপূর্ণ, যা লঙ্ঘিত হতে পারে না তাই আপনাকে জানাতেও পারে না',
          'নতুন উচ্চতা করতে বাধ্য',
          'অবৈধ, কারণ ১.৬১৮ একটি নিয়ম',
        ],
      },
      answer: 1,
    },
    {
      q: {
        en: 'The invalidation price for this bullish impulse past wave 2 is:',
        bn: 'ওয়েভ ২ পেরোনো এই বুলিশ ইম্পালসের ইনভ্যালিডেশন প্রাইস:',
      },
      options: {
        en: ['42.00', '47.80', '51.60', '59.70'],
        bn: ['৪২.০০', '৪৭.৮০', '৫১.৬০', '৫৯.৭০'],
      },
      answer: 2,
    },
    {
      q: {
        en: 'At a price of 66.00 and ATR 1.85, the count invalidation at 51.60 sits how far away?',
        bn: '৬৬.০০ দামে ও ATR ১.৮৫-এ ৫১.৬০-এর কাউন্ট ইনভ্যালিডেশন কত দূরে?',
      },
      options: {
        en: ['1.85 ATR', '3.90 ATR', '7.78 ATR', '14.40 ATR'],
        bn: ['১.৮৫ ATR', '৩.৯০ ATR', '৭.৭৮ ATR', '১৪.৪০ ATR'],
      },
      answer: 2,
    },
    {
      q: {
        en: 'Why should the count invalidation NOT be used as the trade stop?',
        bn: 'কাউন্ট ইনভ্যালিডেশন কেন ট্রেডের স্টপ হিসেবে ব্যবহার করা উচিত নয়?',
      },
      options: {
        en: [
          'It is always too close to price',
          'It is 7.78 ATR away, so sizing off it is not risk control',
          'Elliott forbids the use of stops',
          'It changes every session',
        ],
        bn: [
          'এটি সবসময় দামের খুব কাছে',
          'এটি ৭.৭৮ ATR দূরে, তাই তা থেকে আকার নেওয়া ঝুঁকি নিয়ন্ত্রণ নয়',
          'এলিয়ট স্টপ ব্যবহার নিষিদ্ধ করে',
          'এটি প্রতি সেশনে বদলায়',
        ],
      },
      answer: 1,
    },
    {
      q: {
        en: 'If wave 4 had bottomed at 50.90 instead of 59.70, the correct response is:',
        bn: 'ওয়েভ ৪ যদি ৫৯.৭০-এর বদলে ৫০.৯০-এ তলা ছুঁত, সঠিক জবাব:',
      },
      options: {
        en: [
          'Relabel the move one degree lower so the count survives',
          'Declare the count void in writing and abandon it',
          'Keep it, because L3/L1 is still 1.6198',
          'Call it an ending diagonal after the fact',
        ],
        bn: [
          'চলনটি এক ডিগ্রি নিচে পুনরায় লেবেল করুন যাতে কাউন্ট টেকে',
          'লিখিতভাবে কাউন্ট বাতিল ঘোষণা করে তা ত্যাগ করুন',
          'রেখে দিন, কারণ L3/L1 এখনো ১.৬১৯৮',
          'ঘটনার পরে একে এন্ডিং ডায়াগোনাল বলুন',
        ],
      },
      answer: 1,
    },
    {
      q: {
        en: 'A practitioner carrying a primary count plus two alternates covering up, down and sideways has:',
        bn: 'যিনি একটি প্রধান কাউন্টের সঙ্গে উপরে, নিচে ও পাশে ঢাকা দুটি বিকল্প বহন করেন তাঁর আছে:',
      },
      options: {
        en: [
          'A thorough and rigorous analysis',
          'A forecast with zero information content',
          'A statistically robust ensemble',
          'A valid hedge',
        ],
        bn: [
          'একটি পুঙ্খানুপুঙ্খ ও কঠোর বিশ্লেষণ',
          'শূন্য তথ্য-পরিমাণের একটি পূর্বাভাস',
          'একটি পরিসংখ্যানগতভাবে শক্তিশালী সমষ্টি',
          'একটি বৈধ হেজ',
        ],
      },
      answer: 1,
    },
    {
      q: {
        en: 'A count spanning a DSE floor-price window should be:',
        bn: 'ডিএসই-র ফ্লোর-প্রাইস সময়কাল বিস্তৃত একটি কাউন্ট হওয়া উচিত:',
      },
      options: {
        en: [
          'Kept, with reduced confidence',
          'Deleted entirely — the pivots were not produced by trading',
          'Counted at a higher degree instead',
          'Adjusted using Fibonacci ratios',
        ],
        bn: [
          'কম আত্মবিশ্বাসসহ রাখা',
          'সম্পূর্ণ মুছে ফেলা — পিভটগুলো লেনদেন থেকে তৈরি হয়নি',
          'বরং উচ্চতর ডিগ্রিতে গোনা',
          'ফিবোনাচি অনুপাত দিয়ে সমন্বয় করা',
        ],
      },
      answer: 1,
    },
  ],
};
