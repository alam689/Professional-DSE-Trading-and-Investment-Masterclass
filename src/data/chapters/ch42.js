/**
 * Chapter 42 — Dow Theory
 * Part III, Technical Analysis.
 */

export default {
  n: 42,
  tools: [],

  excelSheet: {
    filename: 'ch42-dow-theory-dashboard.xlsx',
    sheetName: 'Dow Dashboard',
    cells: [
      { cell: 'A1', v: '— Index Swing Log (closing values only) —' },
      { cell: 'A2', v: 'T0  Primary Trough' }, { cell: 'B2', v: 5120 },
      { cell: 'A3', v: 'P1  Primary Peak' }, { cell: 'B3', v: 5980 },
      { cell: 'A4', v: 'T1  Secondary Trough' }, { cell: 'B4', v: 5610 },
      { cell: 'A5', v: 'P2  Primary Peak' }, { cell: 'B5', v: 6420 },
      { cell: 'A6', v: 'T2  Secondary Trough' }, { cell: 'B6', v: 6050 },
      { cell: 'A7', v: 'P3  Primary Peak' }, { cell: 'B7', v: 6510 },
      { cell: 'A8', v: 'Failed Rally High (close)' }, { cell: 'B8', v: 6455 },
      { cell: 'A9', v: 'Latest Close' }, { cell: 'B9', v: 6015 },

      { cell: 'A11', v: '— Trend State (Tenet 2) —' },
      { cell: 'A12', v: 'Higher High? (P3>P2)' }, { cell: 'B12', f: 'IF(B7>B5,1,0)' },
      { cell: 'A13', v: 'Higher Low? (T2>T1)' }, { cell: 'B13', f: 'IF(B6>B4,1,0)' },
      { cell: 'A14', v: 'PRIMARY TREND' },
      {
        cell: 'B14',
        f: 'IF(AND(B12=1,B13=1),"UPTREND",IF(AND(B7<B5,B6<B4),"DOWNTREND","INDETERMINATE"))',
      },

      { cell: 'A16', v: '— Secondary Retracement (Tenet 2) —' },
      { cell: 'A17', v: 'Advance Leg 1 (T0 to P1)' }, { cell: 'B17', f: 'B3-B2' },
      { cell: 'A18', v: 'Secondary 1 (P1 to T1)' }, { cell: 'B18', f: 'B3-B4' },
      { cell: 'A19', v: 'Retracement 1 (%)' }, { cell: 'B19', f: 'B18/B17*100' },
      { cell: 'A20', v: 'Advance Leg 2 (T1 to P2)' }, { cell: 'B20', f: 'B5-B4' },
      { cell: 'A21', v: 'Secondary 2 (P2 to T2)' }, { cell: 'B21', f: 'B5-B6' },
      { cell: 'A22', v: 'Retracement 2 (%)' }, { cell: 'B22', f: 'B21/B20*100' },
      { cell: 'A23', v: 'Both inside 33-67 band? (1=yes)' },
      {
        cell: 'B23',
        f: 'IF(AND(B19>=33.3,B19<=66.7,B22>=33.3,B22<=66.7),1,0)',
      },

      { cell: 'A25', v: '— Breadth Panel (Tenet 5 substitute) —' },
      { cell: 'B26', v: 'At P1' }, { cell: 'C26', v: 'At P2' }, { cell: 'D26', v: 'At P3' },
      { cell: 'A27', v: 'Advancing Issues' },
      { cell: 'B27', v: 210 }, { cell: 'C27', v: 176 }, { cell: 'D27', v: 121 },
      { cell: 'A28', v: 'Declining Issues' },
      { cell: 'B28', v: 118 }, { cell: 'C28', v: 152 }, { cell: 'D28', v: 218 },
      { cell: 'A29', v: 'A/D Differential' },
      { cell: 'B29', f: 'B27-B28' }, { cell: 'C29', f: 'C27-C28' }, { cell: 'D29', f: 'D27-D28' },
      { cell: 'A30', v: 'A/D Line (cumulative)' },
      { cell: 'B30', v: 1240 }, { cell: 'C30', v: 1690 }, { cell: 'D30', v: 1455 },
      { cell: 'A31', v: 'New 52-week Highs' },
      { cell: 'B31', v: 46 }, { cell: 'C31', v: 39 }, { cell: 'D31', v: 17 },
      { cell: 'A32', v: 'New 52-week Lows' },
      { cell: 'B32', v: 8 }, { cell: 'C32', v: 15 }, { cell: 'D32', v: 41 },
      { cell: 'A33', v: 'High-Low Differential' },
      { cell: 'B33', f: 'B31-B32' }, { cell: 'C33', f: 'C31-C32' }, { cell: 'D33', f: 'D31-D32' },
      { cell: 'A34', v: '% Above 50-day MA' },
      { cell: 'B34', v: 68.4 }, { cell: 'C34', v: 61.2 }, { cell: 'D34', v: 38.5 },

      { cell: 'A36', v: '— Confirmation Test (Tenet 4 substitute) —' },
      { cell: 'A37', v: 'Index made new primary high? (1=yes)' }, { cell: 'B37', f: 'IF(B7>B5,1,0)' },
      { cell: 'A38', v: 'A/D line made new high? (1=yes)' }, { cell: 'B38', f: 'IF(D30>C30,1,0)' },
      { cell: 'A39', v: 'High-Low differential positive? (1=yes)' }, { cell: 'B39', f: 'IF(D33>0,1,0)' },
      { cell: 'A40', v: '% above 50MA rising? (1=yes)' }, { cell: 'B40', f: 'IF(D34>C34,1,0)' },
      { cell: 'A41', v: 'BREADTH SCORE (0-3)' }, { cell: 'B41', f: 'B38+B39+B40' },

      { cell: 'A43', v: '— Concentration Check (DSE-specific) —' },
      { cell: 'A44', v: 'Index Points Gained P2 to P3' }, { cell: 'B44', f: 'B7-B5' },
      { cell: 'A45', v: 'Points from Top 3 Heavyweights' }, { cell: 'B45', v: 112 },
      { cell: 'A46', v: 'Points from All Other Names' }, { cell: 'B46', f: 'B44-B45' },
      { cell: 'A47', v: 'Top 3 Share of Move (%)' }, { cell: 'B47', f: 'B45/B44*100' },

      { cell: 'A49', v: '— Reversal Test (Tenet 6) —' },
      { cell: 'A50', v: 'Prior Secondary Low' }, { cell: 'B50', f: 'B6' },
      { cell: 'A51', v: 'Failed to exceed primary high? (1=yes)' }, { cell: 'B51', f: 'IF(B8<B7,1,0)' },
      { cell: 'A52', v: 'Broke prior secondary low? (1=yes)' }, { cell: 'B52', f: 'IF(B9<B50,1,0)' },
      { cell: 'A53', v: 'REVERSAL SIGNAL (1=yes)' }, { cell: 'B53', f: 'IF(AND(B51=1,B52=1),1,0)' },
      { cell: 'A54', v: 'Signal Lag from High (%)' }, { cell: 'B54', f: '(B7-B9)/B7*100' },

      { cell: 'A56', v: 'VERDICT' },
      {
        cell: 'B56',
        f: 'IF(B53=1,"REVERSAL - primary uptrend assumption abandoned",IF(AND(B37=1,B41<=1),"UNCONFIRMED - new index high on deteriorating breadth",IF(AND(B37=1,B41>=2),"CONFIRMED - breadth agrees with price","NO SIGNAL - trend intact, no new primary high")))',
      },
    ],
  },

  objectives: {
    en: [
      'State the six tenets of Dow Theory precisely, and identify which one silently underwrites the tools of Chapters 26–41.',
      'Classify a primary trend from closing swings alone, and measure whether a secondary correction falls in the one-third to two-thirds band.',
      'Explain why tenet 3 is Chapter 7\'s market cycle rediscovered from price, and what that agreement does and does not prove.',
      'Show why tenet 4 — confirmation between averages — has no economically grounded DSE equivalent, and build breadth as the working substitute.',
      'Apply the tenet 6 reversal test — a failed primary high followed by a break of the prior secondary low — and quantify how late it fires.',
    ],
    bn: [
      'ডাও তত্ত্বের ছয়টি নীতি সুনির্দিষ্টভাবে বলা, এবং কোনটি নীরবে অধ্যায় ২৬–৪১-এর হাতিয়ারগুলোকে ধরে রেখেছে তা চিহ্নিত করা।',
      'কেবল ক্লোজিং সুইং থেকে প্রাইমারি ট্রেন্ড শ্রেণিবদ্ধ করা, এবং সেকেন্ডারি সংশোধন এক-তৃতীয়াংশ থেকে দুই-তৃতীয়াংশ ব্যান্ডে পড়ে কি না তা মাপা।',
      'নীতি ৩ কেন দাম থেকে পুনরাবিষ্কৃত অধ্যায় ৭-এর বাজারচক্র তা ব্যাখ্যা করা, এবং ঐ মিল কী প্রমাণ করে ও কী করে না তা বলা।',
      'নীতি ৪ — গড়সমূহের পারস্পরিক নিশ্চিতকরণ — কেন ডিএসই-তে অর্থনৈতিকভাবে ভিত্তিমূলক কোনো সমতুল্য নেই তা দেখানো, এবং ব্রেডথকে কার্যকর বিকল্প হিসেবে গড়া।',
      'নীতি ৬-এর রিভার্সাল পরীক্ষা — ব্যর্থ প্রাইমারি উচ্চতার পর পূর্ববর্তী সেকেন্ডারি নিম্ন ভাঙা — প্রয়োগ করা এবং এটি কত দেরিতে জ্বলে তা সংখ্যায় মাপা।',
    ],
  },

  blocks: {
    theory: {
      en: `Charles Dow never wrote a book. He wrote editorials for *The Wall Street Journal* between 1899 and 1902, and after his death William Hamilton and Robert Rhea assembled them into what we now call Dow Theory. **It is the oldest surviving framework in technical analysis, and almost everything in Chapters 26 through 41 is a special case of it.**

Support and resistance, trendlines, moving-average crossovers, breakout systems — all of them assume that price moves in persistent directional runs punctuated by counter-moves, and that volume tells you which is which. Dow said that first. Learning the tenets late in Part III is not a detour; it is discovering the foundation the building was already standing on.

### The six tenets

**1. The averages discount everything.** Every known fact, expectation, fear and rumour is already in the price. You do not need to know *why* the index moved; the movement is the summary. This is the assumption that permits technical analysis to exist at all — if price did not aggregate information, reading price would be reading noise.

**2. The market has three trends.** The *primary* trend runs months to years and is the tide. The *secondary* reaction runs weeks to months, moves against the primary, and typically retraces **one-third to two-thirds** of the preceding primary leg — the waves. The *minor* trend runs days and is, in Dow's own framing, largely noise — the ripples. **A trader who cannot say which of the three they are trading is not trading a plan.**

**3. Primary trends have three phases.** *Accumulation*: informed money buys from discouraged sellers while sentiment is still bad. *Public participation*: the trend becomes visible, news improves, volume expands, most of the move happens here. *Distribution*: informed money sells into enthusiastic retail demand while the tape still looks strong.

**4. The averages must confirm one another.** Dow required the Industrial average and the Rail average to make new highs together. One average alone making a new high was not a signal; it was a rumour.

**5. Volume must confirm the trend.** Volume should expand in the direction of the primary trend and contract on counter-moves. A rally on falling volume is a rally without participation.

**6. A trend is assumed to continue until a definitive reversal signal.** The burden of proof sits on the reversal, not the continuation. This is the tenet that makes Dow Theory a discipline rather than an opinion.

### Tenet 3 is Chapter 7, arrived at from the other side

Read the three phases again against **Chapter 7's market cycle**. Accumulation, mark-up, distribution, mark-down. They are the same structure.

This deserves to be stated plainly rather than treated as a coincidence. **Chapter 7 derived the cycle from participant behaviour** — who holds the stock, what they believe, what forces them to act. **Dow derived it from price alone**, having no access to behavioural data, no surveys, no positioning reports. Two independent routes to one structure.

That agreement is worth something, but be precise about what. It does not prove the cycle is real in any deep sense. It shows that the price record and the behavioural account are *consistent* — which is the weakest form of corroboration, and still more than most technical claims can offer. Where Chapter 7 tells you *why* distribution happens, Dow tells you *what it looks like on the tape*. Use both; neither is complete alone.

### Tenet 4 does not port to Bangladesh

This is the honest problem at the centre of the chapter, and it should not be glossed over.

Dow's confirmation requirement was not arbitrary pairing. **It was economically grounded.** Industrials produced goods; railroads shipped them. If factories were genuinely busy, the railways carrying their output had to be busy too. A rising Industrial average that the Rails refused to confirm meant the production was not moving — inventory was building, or the earnings were an accounting event rather than a physical one. The two averages measured **the same underlying economy at two different points in its plumbing.**

So: what is the DSE equivalent? Consider the candidates seriously.

- **DSEX against DSES (Shariah index).** These overlap heavily in constituents. Confirmation between them is close to a tautology — you are asking whether a set agrees with its own subset.
- **DSEX against DS30.** Worse. DS30 is the large-cap selection *from* DSEX. When they diverge it tells you about size, not about the economy.
- **Broad index against the banking sector index.** The most defensible candidate, since banking funds everything else. But the causal chain is loose and the lag is long and unstable. Bank stocks in Bangladesh move on rescheduling circulars, rate caps, and the governance issues of **Chapter 24** at least as much as on the real economy they finance.
- **Index against advance–decline breadth.** Not a second average at all. But — see below.

**Be clear about the conclusion: none of these carries Dow's economic logic.** Bangladesh has no listed freight or logistics average that stands in a physical relationship to a listed production average. The pairing that made tenet 4 meaningful does not exist here, and pretending otherwise by picking two correlated indices is dressing up a tautology as a test.

### What actually substitutes: breadth

Dow's real question was never "do two indices agree?" It was **"is the whole market moving, or is the headline number lying about the market?"** Breadth answers that question directly, without needing a second average.

Three measures, in increasing order of usefulness:

- **Advance–decline line.** Cumulative running total of (advancing issues − declining issues). If the index makes a new high and the A/D line does not, the advance is narrowing.
- **New highs versus new lows.** Count of issues at 52-week highs minus those at 52-week lows. A healthy primary uptrend has this comfortably positive at each new index high.
- **Percentage of listed names above their 50-day moving average.** The cleanest single number. It answers "what share of the market is actually in an uptrend?" without any cumulative-series baggage.

### Why this matters more on the DSE than anywhere else

DSEX is free-float weighted, and the free float on several of its heaviest constituents is small. **A handful of counters can move the index without moving the market.**

Grameenphone is the case study — **Chapter 66** treats it as the index whale in detail. Combine that with **Chapter 8's** finding on sector concentration, and you get a market where an index rally can be produced by two or three names while four hundred others go nowhere or fall.

**That is precisely the unconfirmed rally Dow warned about.** He described a rising Industrial average that the Rails would not confirm. The DSE version is a rising DSEX that the advance–decline line will not confirm. The mechanism differs; the warning is identical, and on a concentrated free-float-weighted index the warning fires more often.

### What counts as a definitive reversal signal

Tenet 6 is useless without a rule. The classical rule, in an uptrend:

1. The index **fails to make a new primary high** — it rallies, stalls below the prior peak, and turns down.
2. It then **breaks below the prior secondary low.**

Both conditions, in that order. Either one alone is not a signal. A failed high without a broken low is a pause; a broken low without a failed high can be an ordinary secondary correction.

**And use closing prices only.** Dow was explicit. Intraday extremes are made by single orders, stop hunts, and thin-book accidents; the close is the price at which the market as a whole settled the day's argument. On the DSE this matters more than on a deep market — an intraday spike in a thin counter can be one broker's error, and the circuit-limit mechanics of **Chapter 2** mean intraday highs and lows are frequently artefacts of the band rather than of demand.

### The central weakness

**Dow Theory is descriptive, and it confirms trends late by design.**

That is not a flaw to be patched; it is the trade the framework makes. By demanding a failed high *and* a broken low before declaring reversal, it guarantees you give back a meaningful share of the move before you act. In the worked example of §42.5 the reversal fires 7.60% below the peak.

**Dow Theory tells you the trend was real. It does not get you in early, and it was never intended to.** Anyone selling it as a timing system has misunderstood it. Use it as a regime classifier — a statement about what kind of market you are in — and let the tools of Chapters 26–41 handle entry inside that regime.

### Three DSE caveats beyond the confirmation problem

**Index construction breaks the "average" idea.** DSEX moving on a single name is not an average discounting everything. It is one company's news wearing the index's clothes. Always check what share of the move came from the top three contributors.

**The floor-price era suspended tenet 1 entirely.** When a regulator sets a price below which a share may not trade, price stops discounting anything. Volume collapses to near zero, the close is an administrative number, and every swing-based rule in this chapter returns garbage. **Do not run Dow Theory across a floor-price window.** Mark the period and exclude it, exactly as Chapter 2 required for limit-locked bars.

**Tenet 1 assumes an information environment.** "The averages discount everything" presupposes that there is reliable, timely disclosure to discount. Where price-sensitive information leaks before announcement, or where the governance red flags of **Chapter 24** mean the published accounts are not the real accounts, price discounts *what has been disclosed and to whom* — which is not the same thing.

Chapter 43 takes tenet 3's three-phase structure and pushes it to a fractal extreme. Elliott Wave is Dow's phases, repeated at every timescale, with the rigour and the falsifiability problems that implies.`,
      bn: `চার্লস ডাও কখনো কোনো বই লেখেননি। তিনি ১৮৯৯ থেকে ১৯০২ সালের মধ্যে *দ্য ওয়াল স্ট্রিট জার্নাল*-এ সম্পাদকীয় লিখেছিলেন, আর তাঁর মৃত্যুর পর উইলিয়াম হ্যামিল্টন ও রবার্ট রিয়া সেগুলো একত্র করে যা দাঁড় করান তাকেই আজ আমরা ডাও তত্ত্ব বলি। **এটি টেকনিক্যাল অ্যানালাইসিসে টিকে থাকা প্রাচীনতম কাঠামো, আর অধ্যায় ২৬ থেকে ৪১-এর প্রায় সবকিছুই এর একটি বিশেষ ক্ষেত্র।**

সাপোর্ট ও রেজিস্ট্যান্স, ট্রেন্ডলাইন, মুভিং-অ্যাভারেজ ক্রসওভার, ব্রেকআউট সিস্টেম — সবই ধরে নেয় যে দাম স্থায়ী দিকনির্দেশক ধারায় চলে যা বিপরীত চলনে ছেদ পড়ে, এবং ভলিউম বলে দেয় কোনটি কোনটি। ডাও এটি প্রথম বলেছিলেন। পার্ট III-এর শেষদিকে নীতিগুলো শেখা কোনো পথভ্রষ্টতা নয়; এটি সেই ভিত্তি আবিষ্কার যার ওপর ভবনটি আগে থেকেই দাঁড়িয়ে ছিল।

### ছয়টি নীতি

**১. গড়সমূহ সবকিছুকে ছাড় দেয়।** প্রতিটি জানা তথ্য, প্রত্যাশা, ভয় ও গুজব ইতিমধ্যেই দামে আছে। সূচক **কেন** নড়ল তা জানার দরকার নেই; নড়াচড়াটিই সারাংশ। এই অনুমানই টেকনিক্যাল অ্যানালাইসিসকে আদৌ অস্তিত্ব দেয় — দাম যদি তথ্য সমষ্টিবদ্ধ না করত, দাম পড়া মানে হতো গোলমাল পড়া।

**২. বাজারে তিনটি ট্রেন্ড আছে।** *প্রাইমারি* ট্রেন্ড মাস থেকে বছর চলে, এটিই জোয়ার। *সেকেন্ডারি* প্রতিক্রিয়া সপ্তাহ থেকে মাস চলে, প্রাইমারির বিপরীতে যায়, এবং সাধারণত আগের প্রাইমারি ধাপের **এক-তৃতীয়াংশ থেকে দুই-তৃতীয়াংশ** ফিরিয়ে নেয় — এগুলো ঢেউ। *মাইনর* ট্রেন্ড কয়েক দিন চলে এবং ডাও-এর নিজস্ব ভাষায় মূলত গোলমাল — ছোট তরঙ্গ। **যে ট্রেডার বলতে পারেন না তিনি তিনটির কোনটিতে ট্রেড করছেন, তিনি কোনো পরিকল্পনায় ট্রেড করছেন না।**

**৩. প্রাইমারি ট্রেন্ডের তিনটি পর্যায়।** *সঞ্চয়ন (accumulation)*: অবহিত অর্থ হতাশ বিক্রেতাদের কাছ থেকে কেনে যখন মনোভাব এখনো খারাপ। *জনঅংশগ্রহণ*: ট্রেন্ড দৃশ্যমান হয়, খবর ভালো হয়, ভলিউম বাড়ে, চলনের বেশিরভাগ এখানেই ঘটে। *বিতরণ (distribution)*: অবহিত অর্থ উৎসাহী খুচরা চাহিদায় বিক্রি করে যখন টেপ এখনো শক্ত দেখায়।

**৪. গড়সমূহকে পরস্পরকে নিশ্চিত করতে হবে।** ডাও দাবি করতেন ইন্ডাস্ট্রিয়াল গড় ও রেল গড় একসঙ্গে নতুন উচ্চতা তৈরি করুক। একা একটি গড়ের নতুন উচ্চতা সংকেত ছিল না; ছিল গুজব।

**৫. ভলিউমকে ট্রেন্ড নিশ্চিত করতে হবে।** ভলিউম প্রাইমারি ট্রেন্ডের দিকে বাড়া উচিত এবং বিপরীত চলনে কমা উচিত। কমতে থাকা ভলিউমে র‍্যালি হলো অংশগ্রহণহীন র‍্যালি।

**৬. ধরে নেওয়া হয় ট্রেন্ড চলবে যতক্ষণ না সুনির্দিষ্ট রিভার্সাল সংকেত আসে।** প্রমাণের দায় রিভার্সালের ওপর, ধারাবাহিকতার ওপর নয়। এই নীতিই ডাও তত্ত্বকে মতামত নয়, শৃঙ্খলা বানায়।

### নীতি ৩ আসলে অধ্যায় ৭, উল্টো দিক থেকে পৌঁছানো

তিনটি পর্যায় আবার পড়ুন **অধ্যায় ৭-এর বাজারচক্রের** পাশে রেখে। সঞ্চয়ন, মার্ক-আপ, বিতরণ, মার্ক-ডাউন। এগুলো একই কাঠামো।

এটি কাকতালীয় হিসেবে না দেখে স্পষ্টভাবে বলা দরকার। **অধ্যায় ৭ চক্রটি বের করেছিল অংশগ্রহণকারীর আচরণ থেকে** — কে শেয়ার ধরে আছে, তারা কী বিশ্বাস করে, কী তাদের কাজ করতে বাধ্য করে। **ডাও বের করেছিলেন কেবল দাম থেকে**, কোনো আচরণগত উপাত্ত, জরিপ বা পজিশনিং প্রতিবেদন ছাড়াই। এক কাঠামোয় দুটি স্বাধীন পথ।

ঐ মিলের মূল্য আছে, তবে কীসের মূল্য তা নিয়ে সুনির্দিষ্ট থাকুন। এটি প্রমাণ করে না যে চক্রটি কোনো গভীর অর্থে বাস্তব। এটি দেখায় যে দামের নথি ও আচরণগত বর্ণনা পরস্পরের সঙ্গে *সঙ্গতিপূর্ণ* — যা সমর্থনের দুর্বলতম রূপ, আর তবু বেশিরভাগ টেকনিক্যাল দাবি যা দিতে পারে তার চেয়ে বেশি। অধ্যায় ৭ যেখানে বলে বিতরণ *কেন* ঘটে, ডাও সেখানে বলেন *টেপে তা দেখতে কেমন লাগে*। দুটোই ব্যবহার করুন; একা কোনোটিই সম্পূর্ণ নয়।

### নীতি ৪ বাংলাদেশে খাটে না

এটিই অধ্যায়ের কেন্দ্রে থাকা সৎ সমস্যা, আর একে এড়িয়ে যাওয়া উচিত নয়।

ডাও-এর নিশ্চিতকরণ শর্ত ছিল না কোনো খামখেয়ালি জোড়া। **এটি ছিল অর্থনৈতিকভাবে ভিত্তিমূলক।** ইন্ডাস্ট্রিয়ালরা পণ্য উৎপাদন করত; রেলপথ তা পরিবহন করত। কারখানাগুলো যদি সত্যিই ব্যস্ত থাকে, তাদের উৎপাদন বহনকারী রেলপথকেও ব্যস্ত থাকতে হবে। রেল যে ইন্ডাস্ট্রিয়াল গড়ের উত্থান নিশ্চিত করতে অস্বীকার করছে তার মানে উৎপাদন নড়ছে না — হয় মজুদ জমছে, নয়তো আয়টি ভৌত ঘটনা নয়, হিসাবের ঘটনা। দুটি গড় **একই অন্তর্নিহিত অর্থনীতিকে তার নলব্যবস্থার দুটি ভিন্ন বিন্দুতে** মাপত।

তাহলে ডিএসই-র সমতুল্য কী? প্রার্থীগুলো গুরুত্ব দিয়ে বিবেচনা করুন।

- **DSEX বনাম DSES (শরিয়াহ সূচক)।** এদের উপাদানে ব্যাপক ওভারল্যাপ। এদের মধ্যে নিশ্চিতকরণ প্রায় স্বতঃসিদ্ধ — আপনি জিজ্ঞেস করছেন একটি সেট তার নিজেরই উপসেটের সঙ্গে একমত কি না।
- **DSEX বনাম DS30।** আরও খারাপ। DS30 হলো DSEX *থেকে* বাছাই করা বড় মূলধনের অংশ। এরা ভিন্ন হলে তা আকার সম্পর্কে বলে, অর্থনীতি সম্পর্কে নয়।
- **বিস্তৃত সূচক বনাম ব্যাংকিং খাত সূচক।** সবচেয়ে সমর্থনযোগ্য প্রার্থী, কারণ ব্যাংকিং বাকি সবকিছুতে অর্থায়ন করে। কিন্তু কার্যকারণ শৃঙ্খল আলগা এবং ব্যবধান দীর্ঘ ও অস্থিতিশীল। বাংলাদেশে ব্যাংকের শেয়ার পুনঃতফসিল সার্কুলার, সুদহারের সীমা এবং **অধ্যায় ২৪**-এর সুশাসন সমস্যায় অন্তত ততটাই নড়ে যতটা তারা যে প্রকৃত অর্থনীতিতে অর্থায়ন করে তাতে।
- **সূচক বনাম অ্যাডভান্স–ডিক্লাইন ব্রেডথ।** এটি আদৌ দ্বিতীয় কোনো গড় নয়। কিন্তু — নিচে দেখুন।

**উপসংহারটি স্পষ্ট করুন: এদের কোনোটিই ডাও-এর অর্থনৈতিক যুক্তি বহন করে না।** বাংলাদেশে তালিকাভুক্ত কোনো মালবাহী বা লজিস্টিকস গড় নেই যা তালিকাভুক্ত কোনো উৎপাদন গড়ের সঙ্গে ভৌত সম্পর্কে দাঁড়িয়ে আছে। যে জোড়া নীতি ৪-কে অর্থবহ করেছিল তা এখানে নেই, আর দুটি সহসম্পর্কিত সূচক বেছে নিয়ে ভান করা মানে একটি স্বতঃসিদ্ধকে পরীক্ষার পোশাক পরানো।

### আসলে যা বিকল্প হয়: ব্রেডথ

ডাও-এর প্রকৃত প্রশ্ন কখনোই ছিল না "দুটি সূচক কি একমত?"। ছিল **"পুরো বাজার কি নড়ছে, নাকি শিরোনামের সংখ্যাটি বাজার সম্পর্কে মিথ্যা বলছে?"** ব্রেডথ দ্বিতীয় কোনো গড় ছাড়াই এই প্রশ্নের সরাসরি উত্তর দেয়।

তিনটি পরিমাপ, ক্রমবর্ধমান কার্যকারিতার ক্রমে:

- **অ্যাডভান্স–ডিক্লাইন লাইন।** (বেড়েছে এমন শেয়ার − কমেছে এমন শেয়ার)-এর ক্রমপুঞ্জিত যোগফল। সূচক নতুন উচ্চতা করলে আর A/D লাইন না করলে উত্থানটি সংকুচিত হচ্ছে।
- **নতুন উচ্চতা বনাম নতুন নিম্ন।** ৫২-সপ্তাহের উচ্চতায় থাকা শেয়ারের সংখ্যা বিয়োগ ৫২-সপ্তাহের নিম্নে থাকা শেয়ার। সুস্থ প্রাইমারি আপট্রেন্ডে প্রতিটি নতুন সূচক উচ্চতায় এটি স্বচ্ছন্দে ধনাত্মক থাকে।
- **৫০-দিনের মুভিং অ্যাভারেজের ওপরে থাকা তালিকাভুক্ত শেয়ারের শতাংশ।** সবচেয়ে পরিচ্ছন্ন একক সংখ্যা। এটি কোনো ক্রমপুঞ্জিত সিরিজের বোঝা ছাড়াই উত্তর দেয় "বাজারের কত অংশ আসলে আপট্রেন্ডে আছে?"

### ডিএসই-তে কেন এটি অন্য যেকোনো জায়গার চেয়ে বেশি গুরুত্বপূর্ণ

DSEX ফ্রি-ফ্লোট ভারিত, আর এর সবচেয়ে ভারী কয়েকটি উপাদানের ফ্রি ফ্লোট ছোট। **গুটিকয় শেয়ার বাজার না নাড়িয়েই সূচক নাড়াতে পারে।**

গ্রামীণফোন হলো উদাহরণ — **অধ্যায় ৬৬** একে সূচকের তিমি হিসেবে বিস্তারিত আলোচনা করে। এর সঙ্গে **অধ্যায় ৮**-এর খাত কেন্দ্রীভবনের ফল যোগ করুন, আর আপনি এমন বাজার পাবেন যেখানে দুই-তিনটি নাম সূচকের র‍্যালি তৈরি করতে পারে যখন চারশো নাম কোথাও যায় না বা পড়ে।

**এটিই ঠিক সেই অনিশ্চিত র‍্যালি যার বিরুদ্ধে ডাও সতর্ক করেছিলেন।** তিনি বর্ণনা করেছিলেন এমন ইন্ডাস্ট্রিয়াল গড়ের উত্থান যা রেল নিশ্চিত করবে না। ডিএসই সংস্করণ হলো এমন DSEX-এর উত্থান যা অ্যাডভান্স–ডিক্লাইন লাইন নিশ্চিত করবে না। প্রক্রিয়া ভিন্ন; সতর্কবার্তা অভিন্ন, আর কেন্দ্রীভূত ফ্রি-ফ্লোট-ভারিত সূচকে সতর্কবার্তাটি আরও বেশিবার বাজে।

### সুনির্দিষ্ট রিভার্সাল সংকেত কাকে বলে

নিয়ম ছাড়া নীতি ৬ অকেজো। আপট্রেন্ডে ধ্রুপদী নিয়মটি:

১. সূচক **নতুন প্রাইমারি উচ্চতা তৈরিতে ব্যর্থ হয়** — এটি ওঠে, আগের চূড়ার নিচে থেমে যায়, এবং ঘুরে নামে।
২. তারপর এটি **পূর্ববর্তী সেকেন্ডারি নিম্নের নিচে ভাঙে।**

দুটি শর্তই, ঐ ক্রমেই। যেকোনো একটি একা সংকেত নয়। ভাঙা নিম্ন ছাড়া ব্যর্থ উচ্চতা একটি বিরতি; ব্যর্থ উচ্চতা ছাড়া ভাঙা নিম্ন সাধারণ সেকেন্ডারি সংশোধন হতে পারে।

**আর কেবল ক্লোজিং দাম ব্যবহার করুন।** ডাও এ বিষয়ে স্পষ্ট ছিলেন। ইন্ট্রাডে চরম মান তৈরি হয় একক অর্ডার, স্টপ হান্ট ও পাতলা বইয়ের দুর্ঘটনায়; ক্লোজ হলো সেই দাম যেখানে সামগ্রিক বাজার দিনের তর্ক মিটিয়েছে। ডিএসই-তে এটি গভীর বাজারের চেয়ে বেশি গুরুত্বপূর্ণ — পাতলা শেয়ারে ইন্ট্রাডে লাফ একজন ব্রোকারের ভুল হতে পারে, আর **অধ্যায় ২**-এর সার্কিট-লিমিট প্রক্রিয়ার কারণে ইন্ট্রাডে উচ্চ ও নিম্ন প্রায়ই চাহিদার নয়, ব্যান্ডের কৃত্রিম ফল।

### কেন্দ্রীয় দুর্বলতা

**ডাও তত্ত্ব বর্ণনামূলক, আর এটি নকশা অনুযায়ীই ট্রেন্ড দেরিতে নিশ্চিত করে।**

এটি সারানোর মতো ত্রুটি নয়; এটি কাঠামোটির করা বিনিময়। রিভার্সাল ঘোষণার আগে ব্যর্থ উচ্চতা *এবং* ভাঙা নিম্ন দুটোই দাবি করে এটি নিশ্চিত করে যে কাজ করার আগে আপনি চলনের উল্লেখযোগ্য অংশ ফেরত দেবেন। §৪২.৫-এর উদাহরণে রিভার্সাল চূড়া থেকে ৭.৬০% নিচে জ্বলে।

**ডাও তত্ত্ব বলে ট্রেন্ডটি বাস্তব ছিল। এটি আপনাকে আগেভাগে ঢোকায় না, আর কখনো তা করার কথাও ছিল না।** যে কেউ একে টাইমিং সিস্টেম হিসেবে বিক্রি করছেন তিনি একে ভুল বুঝেছেন। একে রেজিম শ্রেণিবিন্যাসকারী হিসেবে ব্যবহার করুন — আপনি কী ধরনের বাজারে আছেন তার বিবৃতি — আর ঐ রেজিমের ভেতরে প্রবেশ সামলাক অধ্যায় ২৬–৪১-এর হাতিয়ার।

### নিশ্চিতকরণ সমস্যার বাইরে তিনটি ডিএসই সতর্কতা

**সূচক নির্মাণ "গড়" ধারণাটি ভেঙে দেয়।** একটি মাত্র নামে DSEX-এর নড়াচড়া সবকিছুকে ছাড় দেওয়া কোনো গড় নয়। এটি এক কোম্পানির খবর সূচকের পোশাক পরে আছে। সবসময় দেখুন চলনের কত অংশ শীর্ষ তিন অবদানকারী থেকে এসেছে।

**ফ্লোর-প্রাইস যুগ নীতি ১-কে সম্পূর্ণ স্থগিত করেছিল।** নিয়ন্ত্রক যখন এমন একটি দাম বেঁধে দেন যার নিচে শেয়ার লেনদেন হতে পারে না, দাম তখন কিছুই ছাড় দেওয়া বন্ধ করে। ভলিউম প্রায় শূন্যে নামে, ক্লোজ হয়ে যায় প্রশাসনিক সংখ্যা, আর এই অধ্যায়ের প্রতিটি সুইং-ভিত্তিক নিয়ম আবর্জনা ফেরত দেয়। **ফ্লোর-প্রাইস সময়কালে ডাও তত্ত্ব চালাবেন না।** সময়টি চিহ্নিত করে বাদ দিন, ঠিক যেমন অধ্যায় ২ লিমিট-লকড বারের জন্য দাবি করেছিল।

**নীতি ১ একটি তথ্য-পরিবেশ ধরে নেয়।** "গড়সমূহ সবকিছুকে ছাড় দেয়" পূর্বানুমান করে যে ছাড় দেওয়ার মতো নির্ভরযোগ্য ও সময়মতো প্রকাশ আছে। যেখানে দাম-সংবেদনশীল তথ্য ঘোষণার আগেই ফাঁস হয়, বা যেখানে **অধ্যায় ২৪**-এর সুশাসন লাল পতাকার অর্থ প্রকাশিত হিসাবই প্রকৃত হিসাব নয়, সেখানে দাম ছাড় দেয় *যা প্রকাশিত হয়েছে এবং যার কাছে হয়েছে* — যা এক জিনিস নয়।

অধ্যায় ৪৩ নীতি ৩-এর তিন-পর্যায় কাঠামো নিয়ে তাকে ফ্র্যাক্টাল চরমে ঠেলে দেয়। এলিয়ট ওয়েভ হলো ডাও-এর পর্যায়গুলোই, প্রতিটি সময়মাত্রায় পুনরাবৃত্ত, আর তা থেকে যে কঠোরতা ও খণ্ডনযোগ্যতার সমস্যা আসে তাসহ।`,
    },

    simple: {
      en: `Stand on the beach at Patenga with a stick and a watch.

You push the stick into the wet sand at the waterline and wait. Over the next six hours the water climbs past the stick, and it keeps climbing — but not smoothly. **Every individual wave that reaches the stick pulls back before the next one arrives.** Some waves fall back a long way. And on top of the waves there are little ripples that slap the stick and mean nothing at all.

Now the question. **After twenty minutes, is the tide coming in or going out?**

You cannot answer it from one wave. You cannot answer it from the ripples. You answer it by marking where each wave *stopped* and where each pullback *ended*, and asking whether those marks are creeping up the beach or down it.

That is the whole of Dow Theory. Charles Dow used exactly this picture, and it is worth taking literally rather than as decoration.

### The three things moving at once

- **The tide is the primary trend.** Months to years. It is the thing you actually care about, and it is the thing you cannot see directly.
- **The waves are the secondary reactions.** Weeks to months. They run *against* the tide and they are big enough to frighten you out. A wave that pulls back four metres on an incoming tide has not reversed the tide.
- **The ripples are the minor trend.** Days. Noise. Dow said so plainly, and he was writing before anyone had a screen refreshing every second.

**Here is the sentence to memorise: most losing traders are trading ripples while telling themselves a story about the tide.** They bought because of a multi-month thesis, and then sold three days later because of a wave, and then bought back on a ripple.

### The marks in the sand are the whole method

Dow's practical instruction is embarrassingly simple. **Mark the high of each wave. Mark the low of each pullback.** Then:

- Highs getting higher **and** lows getting higher → tide coming in.
- Highs getting lower **and** lows getting lower → tide going out.
- Anything else → **you do not know, and you are required to say so.**

That third line is the part people skip. Dow Theory has an *"indeterminate"* answer built into it and expects you to use it. A framework that always produces an opinion is not a framework; it is a horoscope.

### Why one measurement is never enough

Here is where Dow said something less obvious.

Suppose the tide looks like it is coming in at the stick you planted. **Walk fifty metres down the beach and plant a second stick.** If the water is genuinely rising, the second stick must record it too. If your stick says rising and the other one says falling, something is wrong with your stick — maybe a boat's wake, maybe a channel in the sand.

Dow's two sticks were the Industrial average and the Railroad average. Factories make things; railways move them. **You cannot have a genuine industrial boom that the freight trains know nothing about.**

### And here is where Bangladesh breaks the picture — say it out loud

The DSE does not have two independent sticks. We have DSEX, DS30 and DSES, and **DS30 is largely made of the biggest names already inside DSEX.** Asking whether DS30 confirms DSEX is like planting your second stick two centimetres from the first and being delighted when they agree. Of course they agree. **They are getting hit by the same wave.**

So what do we do instead? We stop asking "do two indices agree?" and ask the question Dow was really asking underneath it: **"is the whole beach getting wet, or just the spot where I happen to be standing?"**

Count the shares going up against the shares going down. If DSEX makes a new high while three hundred of the four hundred-odd listed names are falling, then the tide is not coming in — **a couple of very large stones got dropped in the water near your stick.** On a market where a handful of heavyweights can move the index on their own, this happens often, and it is the single most useful thing this chapter will teach you.

### Two local warnings before you plant any sticks at all

**Floor prices.** During the floor-price regime the exchange set a price below which shares were not permitted to trade. That is not a tide. That is somebody building a concrete wall across the beach. The water level stops telling you anything about the ocean. **Every rule in this chapter returns nonsense over that period, and the correct action is to exclude those months entirely, not to interpret them.**

**Market-wide halts and circuit bands.** When the whole market is halted, or when a heavyweight is locked at its daily band, the closing number is where the rules ran out — not where buyers and sellers agreed. Dow insisted on **closing prices only** for exactly this family of reasons, and his reason applies with more force here than it did in 1900 New York.

### What this framework will and will not do for you

It will tell you, with discipline, **what kind of market you are standing in.** That is worth a great deal, because almost every tool in Chapters 26 through 41 works well in one regime and badly in another.

It will **not** get you in near the bottom or out near the top. By design it waits for proof, and proof is expensive. In the worked example of §42.3 the reversal signal fires **7.60% below the peak**, having already surrendered **35.61% of the entire primary advance.** Anyone who tells you Dow Theory is a timing system has not read Dow.`,
      bn: `পতেঙ্গার সৈকতে একটি লাঠি আর একটি ঘড়ি নিয়ে দাঁড়ান।

ভেজা বালিতে জলের কিনারায় লাঠিটি পুঁতে অপেক্ষা করুন। পরের ছয় ঘণ্টায় জল লাঠি ছাড়িয়ে ওঠে, আর উঠতেই থাকে — কিন্তু মসৃণভাবে নয়। **লাঠিতে পৌঁছানো প্রতিটি আলাদা ঢেউ পরেরটি আসার আগে পিছিয়ে যায়।** কোনো কোনো ঢেউ অনেকটা পিছিয়ে যায়। আর ঢেউয়ের ওপরে ছোট ছোট তরঙ্গ আছে যা লাঠিতে চাপড় মারে আর কিছুই বোঝায় না।

এবার প্রশ্ন। **কুড়ি মিনিট পর, জোয়ার আসছে না ভাটা যাচ্ছে?**

একটি ঢেউ থেকে এর উত্তর দিতে পারবেন না। ছোট তরঙ্গ থেকেও নয়। উত্তর দেবেন প্রতিটি ঢেউ *কোথায় থেমেছে* আর প্রতিটি পিছুটান *কোথায় শেষ হয়েছে* তা চিহ্নিত করে, তারপর জিজ্ঞেস করে ঐ চিহ্নগুলো সৈকতের ওপরে উঠছে না নিচে নামছে।

ডাও তত্ত্বের পুরোটাই এই। চার্লস ডাও ঠিক এই ছবিটিই ব্যবহার করেছিলেন, আর একে অলংকার নয়, আক্ষরিকভাবে নেওয়াই ভালো।

### একসঙ্গে চলতে থাকা তিনটি জিনিস

- **জোয়ার হলো প্রাইমারি ট্রেন্ড।** মাস থেকে বছর। এটিই আপনার আসল আগ্রহের বিষয়, আর এটিই আপনি সরাসরি দেখতে পান না।
- **ঢেউগুলো হলো সেকেন্ডারি প্রতিক্রিয়া।** সপ্তাহ থেকে মাস। এরা জোয়ারের *বিপরীতে* চলে আর আপনাকে ভয় পাইয়ে বের করে দেওয়ার মতো যথেষ্ট বড়। আসন্ন জোয়ারে চার মিটার পিছিয়ে যাওয়া ঢেউ জোয়ারকে উল্টে দেয়নি।
- **ছোট তরঙ্গগুলো মাইনর ট্রেন্ড।** কয়েক দিন। গোলমাল। ডাও স্পষ্ট করেই বলেছিলেন, আর তিনি লিখছিলেন এমন সময়ে যখন প্রতি সেকেন্ডে রিফ্রেশ হওয়া কোনো পর্দা কারও ছিল না।

**এই বাক্যটি মুখস্থ করুন: বেশিরভাগ লোকসানকারী ট্রেডার ছোট তরঙ্গে ট্রেড করেন আর নিজেকে জোয়ার নিয়ে একটি গল্প শোনান।** তাঁরা কেনেন কয়েক মাসের যুক্তিতে, তারপর তিন দিন পরে বেচেন একটি ঢেউয়ের কারণে, তারপর আবার কেনেন একটি ছোট তরঙ্গে।

### বালির চিহ্নগুলোই গোটা পদ্ধতি

ডাও-এর ব্যবহারিক নির্দেশ লজ্জাজনকভাবে সরল। **প্রতিটি ঢেউয়ের উচ্চতা চিহ্নিত করুন। প্রতিটি পিছুটানের নিম্ন চিহ্নিত করুন।** তারপর:

- উচ্চতাগুলো আরও উঁচু হচ্ছে **এবং** নিম্নগুলোও আরও উঁচু → জোয়ার আসছে।
- উচ্চতাগুলো আরও নিচু হচ্ছে **এবং** নিম্নগুলোও আরও নিচু → ভাটা যাচ্ছে।
- অন্য যেকোনো কিছু → **আপনি জানেন না, আর তা বলতে আপনি বাধ্য।**

তৃতীয় লাইনটিই মানুষ এড়িয়ে যান। ডাও তত্ত্বে *"অনিশ্চিত"* উত্তরটি অন্তর্নির্মিত এবং তা ব্যবহার করাই প্রত্যাশিত। যে কাঠামো সবসময় একটি মতামত তৈরি করে তা কাঠামো নয়; তা রাশিফল।

### একটি মাপ কখনোই যথেষ্ট নয় কেন

এখানেই ডাও কম স্পষ্ট একটি কথা বলেছিলেন।

ধরুন আপনার পোঁতা লাঠিতে মনে হচ্ছে জোয়ার আসছে। **পঞ্চাশ মিটার দূরে গিয়ে দ্বিতীয় একটি লাঠি পুঁতুন।** জল যদি সত্যিই বাড়ে, দ্বিতীয় লাঠিকেও তা লিপিবদ্ধ করতে হবে। আপনার লাঠি বলছে বাড়ছে আর অন্যটি বলছে কমছে — তাহলে আপনার লাঠিতে গোলমাল আছে; হয়তো কোনো নৌকার ঢেউ, হয়তো বালির ভেতর একটি খাত।

ডাও-এর দুটি লাঠি ছিল ইন্ডাস্ট্রিয়াল গড় ও রেলরোড গড়। কারখানা জিনিস বানায়; রেলপথ তা সরায়। **এমন প্রকৃত শিল্পোত্থান হতে পারে না যার খবর মালগাড়িগুলো জানে না।**

### আর এখানেই বাংলাদেশ ছবিটি ভেঙে দেয় — কথাটা জোরে বলুন

ডিএসই-তে দুটি স্বাধীন লাঠি নেই। আমাদের আছে DSEX, DS30 ও DSES, আর **DS30 মূলত DSEX-এর ভেতরেই থাকা সবচেয়ে বড় নামগুলো দিয়ে গড়া।** DS30 DSEX-কে নিশ্চিত করছে কি না জিজ্ঞেস করা মানে প্রথম লাঠি থেকে দুই সেন্টিমিটার দূরে দ্বিতীয় লাঠি পুঁতে তারা একমত হওয়ায় খুশি হওয়া। অবশ্যই তারা একমত। **তারা একই ঢেউয়ের ধাক্কা খাচ্ছে।**

তাহলে বদলে কী করব? আমরা "দুটি সূচক কি একমত?" জিজ্ঞেস করা বন্ধ করি আর ডাও ভেতরে ভেতরে যে প্রশ্নটি করছিলেন তা করি: **"পুরো সৈকত কি ভিজছে, নাকি কেবল যেখানে আমি দাঁড়িয়ে আছি সেই জায়গাটুকু?"**

উঠতে থাকা শেয়ার গুনুন, নামতে থাকা শেয়ারের বিপরীতে। DSEX নতুন উচ্চতা করছে অথচ চারশো-কিছু তালিকাভুক্ত নামের তিনশো পড়ছে — তাহলে জোয়ার আসছে না; **আপনার লাঠির কাছে কয়েকটি খুব বড় পাথর ফেলা হয়েছে।** যে বাজারে গুটিকয় ভারী শেয়ার নিজেরাই সূচক নাড়াতে পারে, সেখানে এটি প্রায়ই ঘটে, আর এই অধ্যায় আপনাকে যা শেখাবে তার মধ্যে এটিই সবচেয়ে কাজের।

### কোনো লাঠি পোঁতার আগেই দুটি স্থানীয় সতর্কতা

**ফ্লোর প্রাইস।** ফ্লোর-প্রাইস ব্যবস্থার সময় এক্সচেঞ্জ এমন একটি দাম বেঁধে দিয়েছিল যার নিচে শেয়ার লেনদেনের অনুমতি ছিল না। ওটি জোয়ার নয়। ওটি সৈকত জুড়ে কারও কংক্রিটের দেয়াল তোলা। জলের স্তর তখন সমুদ্র সম্পর্কে আর কিছুই বলে না। **ঐ সময়কালে এই অধ্যায়ের প্রতিটি নিয়ম অর্থহীন ফল দেয়, আর সঠিক কাজ হলো ঐ মাসগুলো সম্পূর্ণ বাদ দেওয়া, ব্যাখ্যা করা নয়।**

**বাজারব্যাপী হল্ট ও সার্কিট ব্যান্ড।** পুরো বাজার যখন থেমে যায়, বা কোনো ভারী শেয়ার যখন দৈনিক ব্যান্ডে আটকে থাকে, তখন ক্লোজিং সংখ্যাটি সেই জায়গা যেখানে বিধি ফুরিয়েছে — ক্রেতা-বিক্রেতা যেখানে একমত হয়েছেন তা নয়। ডাও ঠিক এই ধরনের কারণেই **কেবল ক্লোজিং দামের** ওপর জোর দিয়েছিলেন, আর তাঁর কারণ ১৯০০ সালের নিউ ইয়র্কের চেয়ে এখানে আরও জোরালোভাবে খাটে।

### এই কাঠামো আপনার জন্য কী করবে আর কী করবে না

এটি শৃঙ্খলার সঙ্গে বলবে **আপনি কী ধরনের বাজারে দাঁড়িয়ে আছেন।** এর মূল্য অনেক, কারণ অধ্যায় ২৬ থেকে ৪১-এর প্রায় প্রতিটি হাতিয়ার এক রেজিমে ভালো আর অন্যটিতে খারাপ কাজ করে।

এটি আপনাকে তলার কাছে ঢোকাবে **না**, চূড়ার কাছে বেরও করবে না। নকশা অনুযায়ীই এটি প্রমাণের অপেক্ষা করে, আর প্রমাণ ব্যয়বহুল। §৪২.৩-এর উদাহরণে রিভার্সাল সংকেত জ্বলে **চূড়ার ৭.৬০% নিচে**, ততক্ষণে গোটা প্রাইমারি উত্থানের **৩৫.৬১% ছেড়ে দিয়ে।** যে কেউ আপনাকে বলেন ডাও তত্ত্ব একটি টাইমিং সিস্টেম, তিনি ডাও পড়েননি।`,
    },

    example: {
      en: `### A constructed DSEX-style advance, and the moment it stops being one

**Every figure in this section is constructed for teaching, not historical.** The index is written as a DSEX-style broad benchmark; the swing values, breadth counts and contribution split are invented to be internally consistent with the dashboard in §42.6. No claim is made about any actual DSEX episode.

The whole point of the case is that **the price structure is textbook and the market underneath it is falling apart**, and Dow's original tenet 4 has no way of telling you so on this exchange.

### The swing log — closing values only

| Mark | Label | Close | Leg | Points |
|---|---|---|---|---|
| T0 | Primary trough | **5,120** | — | — |
| P1 | Primary peak | **5,980** | T0→P1 advance | **+860** |
| T1 | Secondary trough | **5,610** | P1→T1 reaction | −370 |
| P2 | Primary peak | **6,420** | T1→P2 advance | **+810** |
| T2 | Secondary trough | **6,050** | P2→T2 reaction | −370 |
| P3 | Primary peak | **6,510** | T2→P3 advance | **+460** |
| — | Failed rally high | 6,455 | — | — |
| — | Latest close | **6,015** | — | — |

Closing values only, per tenet 6's evidentiary rule. Intraday extremes are excluded on principle, and on the DSE also on practical grounds — a band-locked heavyweight prints an intraday number that is an administrative fact, not a market one.

### Step one: classify the primary trend, mechanically

Two questions, no interpretation:

- **Higher high?** $P_3 = 6{,}510 > P_2 = 6{,}420$ → **yes.**
- **Higher low?** $T_2 = 6{,}050 > T_1 = 5{,}610$ → **yes.**

$$\\text{PRIMARY TREND} = \\textbf{UPTREND}$$

That is B14 on the sheet, and it is not a judgement call. **Anyone applying the same rule to the same closes gets the same answer, which is the entire reason for writing the rule down.**

### Step two: were the corrections secondary reactions or something worse?

Tenet 2 says a secondary reaction retraces roughly one-third to two-thirds of the preceding primary leg. Test both:

$$R_1 = \\frac{P_1 - T_1}{P_1 - T_0} = \\frac{5{,}980 - 5{,}610}{5{,}980 - 5{,}120} = \\frac{370}{860} = 43.02\\%$$

$$R_2 = \\frac{P_2 - T_2}{P_2 - T_1} = \\frac{6{,}420 - 6{,}050}{6{,}420 - 5{,}610} = \\frac{370}{810} = 45.68\\%$$

**Both sit inside the 33.3–66.7 band.** B23 returns 1. On the classical reading this is as clean an uptrend as the framework can describe: two higher highs, two higher lows, and two textbook secondary corrections that stopped almost exactly where Dow said they should.

**This is the trap.** Everything visible on a price chart is saying continue.

### Step three: the legs are shrinking, and nobody looks at this

Put the three advancing legs side by side:

| Leg | Points | vs previous |
|---|---|---|
| T0→P1 | **860** | — |
| T1→P2 | **810** | 94.2% |
| T2→P3 | **460** | **56.8%** |

The third advance covered **just over half the ground of the second**, on an index that was *higher*, so it is smaller in percentage terms too. The reactions, meanwhile, were identical at −370 both times.

**An uptrend in which the advances shrink while the declines do not is an uptrend running out of buyers.** This is not one of Dow's six tenets. It is what tenet 5 — volume must confirm — looks like when you express it in points rather than in shares, and it is free information sitting in the same swing log.

### Step four: the confirmation problem, stated honestly

Here Dow's tenet 4 asks us to check a second, economically related average. **We do not have one.**

- **DS30** is the large-cap selection *from* DSEX. Divergence between them is a size effect, not an economic signal.
- **DSES** is the Shariah-screened subset. Same problem, different screen.
- **A banking sector index** is the least bad candidate because banks fund everything, but the transmission is slow, loose, and dominated by rescheduling circulars and rate caps rather than by industrial activity.

Dow paired producers with shippers. There is **no listed freight or logistics average on the DSE that stands in a physical relationship to a listed production average.** Pairing two overlapping indices and calling the agreement "confirmation" is dressing a tautology in a lab coat.

So we substitute — and we label the substitute as a substitute.

### Step five: the breadth panel, read at all three peaks

| Measure | At P1 | At P2 | At P3 |
|---|---|---|---|
| Index close | 5,980 | 6,420 | **6,510** |
| Advancing issues | 210 | 176 | **121** |
| Declining issues | 118 | 152 | **218** |
| **A/D differential** | **+92** | **+24** | **−97** |
| A/D line (cumulative) | 1,240 | **1,690** | **1,455** |
| New 52-week highs | 46 | 39 | **17** |
| New 52-week lows | 8 | 15 | **41** |
| **High−Low differential** | **+38** | **+24** | **−24** |
| % above 50-day MA | 68.4 | 61.2 | **38.5** |

Read the last column against the first row. **The index made its highest close of the entire advance on the day the market beneath it was in outright decline.**

Every one of the four confirmation tests fails:

| Test | Sheet cell | Result |
|---|---|---|
| Index made a new primary high? | B37 | **1 — yes** |
| A/D line made a new high? ($1{,}455 > 1{,}690$) | B38 | **0 — no**, 235 short |
| High−Low differential positive? ($-24 > 0$) | B39 | **0 — no** |
| % above 50MA rising? ($38.5 > 61.2$) | B40 | **0 — no** |
| **BREADTH SCORE** | **B41** | **0 of 3** |

**Price up, breadth score zero.** The percentage of listed names above their 50-day average fell **29.9 points**, from 68.4 to 38.5, while the index rose **8.86%** from P1 to P3.

That is not a strong market. **That is a market in which fewer than four names in ten are in an uptrend at the exact moment the headline number is at its best level of the year.**

### Step six: where did the last 90 points actually come from?

From P2 to P3 the index gained **90 points.** Decompose:

| Source | Points | Share |
|---|---|---|
| Top 3 heavyweights | **+112** | **124.44%** |
| Everything else | **−22** | −24.44% |
| **Net** | **+90** | 100% |

$$\\text{Top-3 share of move} = \\frac{112}{90} \\times 100 = 124.44\\%$$

**A share above 100% is not an error; it is the finding.** The rest of the market subtracted 22 points and the index rose anyway.

This is the DSE-specific failure mode that Dow could not have anticipated and that our free-float weighting makes routine. **DSEX at 6,510 was not an average discounting everything. It was three companies' news wearing the index's clothes** — the mechanics of which **Chapter 66** works through on the single largest of them, and which **Chapter 8's** sector concentration finding predicts structurally.

### Step seven: the reversal test fires

Then the market rallies and fails:

- **Failed high:** the rally stops at **6,455**, which is **55 points — 0.84% — below** the 6,510 peak. B51 returns 1.
- **Broken secondary low:** the latest close of **6,015** is below the prior secondary trough T2 at **6,050**. B52 returns 1.

Both conditions, in the required order:

$$\\text{REVERSAL SIGNAL} = \\textbf{1}$$

The primary uptrend assumption is abandoned. B56 reads **"REVERSAL — primary uptrend assumption abandoned."**

Note that the verdict cell checks the reversal *before* it checks breadth, and for a reason: **once the structure itself has broken, the breadth argument is no longer a warning, it is history.**

### Step eight: price the lateness, because this is the honest part

$$\\text{Signal lag} = \\frac{P_3 - C}{P_3} \\times 100 = \\frac{6{,}510 - 6{,}015}{6{,}510} \\times 100 = \\frac{495}{6{,}510} \\times 100 = \\textbf{7.60\\%}$$

And against the whole primary advance:

$$\\frac{495}{6{,}510 - 5{,}120} = \\frac{495}{1{,}390} = \\textbf{35.61\\%}$$

**The signal costs you 7.60% from the peak, which is 35.61% of everything the primary trend produced.** Say that out loud before you promise anyone Dow Theory protects capital.

**It does not protect the top. It protects you from the *next* leg** — and from the far more expensive error of holding a broken primary trend all the way down because nothing ever told you the regime had changed.

### Step nine: the counterfactual that makes the breadth panel worth building

The breadth score hit zero **at P3, at 6,510.** The reversal signal fired **at 6,015.**

| Acting on | Index level | Given back from 6,510 |
|---|---|---|
| Breadth score 0 of 3 at P3 | **6,510** | **0.00%** |
| Tenet 6 reversal confirmation | **6,015** | **7.60%** |

**The breadth divergence was available 495 points earlier.** That is the entire argument for building the substitute: not that it replaces Dow's confirmation, because it does not, but that it is the only early evidence this market offers.

Be precise about what it is worth, though. **Breadth deterioration is a warning, not a signal.** Breadth can decay for months while the index grinds higher, and acting on it alone will have you selling every narrow rally, most of which continue. The defensible use is graduated:

| Breadth score at a new index high | Action |
|---|---|
| **3 of 3** | Confirmed. Normal position sizing. |
| **2 of 3** | Acceptable. No new risk added. |
| **1 of 3** | Warning. Tighten stops, stop adding. |
| **0 of 3** | **Unconfirmed. Reduce. Do not wait for tenet 6.** |

**A zero score does not tell you the trend is over. It tells you the index is no longer evidence about the market**, and that everything you thought you knew from the headline number needs to be re-derived from the constituents.

### Step ten: the four DSE checks that come before any of the above counts

| Check | Why it invalidates the analysis |
|---|---|
| Did any swing fall inside a **floor-price window**? | The close is administrative. Delete the swing; do not interpret it. |
| Did a **market-wide halt** truncate a session? | The close is where trading stopped, not where the argument settled. |
| Were the **top three contributors band-locked**? | The index printed where the band ran out. Tomorrow the band moves. |
| Is the breadth universe **stable across the period**? | New listings and long-suspended names distort A/D counts, and the cumulative A/D line inherits every distortion permanently. |

That last row deserves a moment. **The A/D line is cumulative, so a data error never washes out** — it shifts the entire series from that day forward. This is why the sheet carries the percentage above the 50-day average alongside it: that measure is recomputed from scratch every day and has no memory of your mistakes.`,
      bn: `### একটি নির্মিত DSEX-ধাঁচের উত্থান, আর যে মুহূর্তে তা আর উত্থান থাকে না

**এই অংশের প্রতিটি সংখ্যা শেখানোর জন্য নির্মিত, ঐতিহাসিক নয়।** সূচকটি DSEX-ধাঁচের বিস্তৃত বেঞ্চমার্ক হিসেবে লেখা; সুইং মান, ব্রেডথ গণনা ও অবদানের বিভাজন §৪২.৬-এর ড্যাশবোর্ডের সঙ্গে অভ্যন্তরীণভাবে সঙ্গতিপূর্ণ হওয়ার জন্য উদ্ভাবিত। প্রকৃত কোনো DSEX পর্ব সম্পর্কে কোনো দাবি করা হচ্ছে না।

কেসটির পুরো বক্তব্য হলো **দামের কাঠামো পাঠ্যবইসুলভ আর তার নিচের বাজারটি ভেঙে পড়ছে**, আর ডাও-এর মূল নীতি ৪-এর এই এক্সচেঞ্জে তা আপনাকে বলার কোনো উপায় নেই।

### সুইং লগ — কেবল ক্লোজিং মান

| চিহ্ন | পরিচয় | ক্লোজ | ধাপ | পয়েন্ট |
|---|---|---|---|---|
| T0 | প্রাইমারি তলা | **৫,১২০** | — | — |
| P1 | প্রাইমারি চূড়া | **৫,৯৮০** | T0→P1 উত্থান | **+৮৬০** |
| T1 | সেকেন্ডারি তলা | **৫,৬১০** | P1→T1 প্রতিক্রিয়া | −৩৭০ |
| P2 | প্রাইমারি চূড়া | **৬,৪২০** | T1→P2 উত্থান | **+৮১০** |
| T2 | সেকেন্ডারি তলা | **৬,০৫০** | P2→T2 প্রতিক্রিয়া | −৩৭০ |
| P3 | প্রাইমারি চূড়া | **৬,৫১০** | T2→P3 উত্থান | **+৪৬০** |
| — | ব্যর্থ র‍্যালির উচ্চতা | ৬,৪৫৫ | — | — |
| — | সর্বশেষ ক্লোজ | **৬,০১৫** | — | — |

কেবল ক্লোজিং মান, নীতি ৬-এর প্রমাণ-বিধি অনুযায়ী। ইন্ট্রাডে চরম মান নীতিগতভাবে বাদ, আর ডিএসই-তে ব্যবহারিক কারণেও — ব্যান্ডে আটকে থাকা একটি ভারী শেয়ার এমন ইন্ট্রাডে সংখ্যা ছাপে যা প্রশাসনিক ঘটনা, বাজারের নয়।

### ধাপ এক: প্রাইমারি ট্রেন্ড যান্ত্রিকভাবে শ্রেণিবদ্ধ করুন

দুটি প্রশ্ন, কোনো ব্যাখ্যা নয়:

- **উচ্চতর উচ্চতা?** $P_3 = 6{,}510 > P_2 = 6{,}420$ → **হ্যাঁ।**
- **উচ্চতর নিম্ন?** $T_2 = 6{,}050 > T_1 = 5{,}610$ → **হ্যাঁ।**

$$\\text{PRIMARY TREND} = \\textbf{UPTREND}$$

এটিই শিটের B14, আর এটি কোনো বিচারবুদ্ধির ব্যাপার নয়। **একই ক্লোজে একই নিয়ম প্রয়োগ করে যে কেউ একই উত্তর পাবেন, আর নিয়মটি লিখে রাখার পুরো কারণই এটি।**

### ধাপ দুই: সংশোধনগুলো কি সেকেন্ডারি প্রতিক্রিয়া ছিল, না আরও খারাপ কিছু?

নীতি ২ বলে সেকেন্ডারি প্রতিক্রিয়া আগের প্রাইমারি ধাপের মোটামুটি এক-তৃতীয়াংশ থেকে দুই-তৃতীয়াংশ ফিরিয়ে নেয়। দুটোই পরীক্ষা করুন:

$$R_1 = \\frac{P_1 - T_1}{P_1 - T_0} = \\frac{5{,}980 - 5{,}610}{5{,}980 - 5{,}120} = \\frac{370}{860} = 43.02\\%$$

$$R_2 = \\frac{P_2 - T_2}{P_2 - T_1} = \\frac{6{,}420 - 6{,}050}{6{,}420 - 5{,}610} = \\frac{370}{810} = 45.68\\%$$

**দুটোই ৩৩.৩–৬৬.৭ ব্যান্ডের ভেতরে।** B23 ফেরত দেয় ১। ধ্রুপদী পাঠে কাঠামোটি যতটা পরিচ্ছন্ন আপট্রেন্ড বর্ণনা করতে পারে এটি ততটাই: দুটি উচ্চতর উচ্চতা, দুটি উচ্চতর নিম্ন, আর দুটি পাঠ্যবইসুলভ সেকেন্ডারি সংশোধন যা ডাও যেখানে থামার কথা বলেছিলেন প্রায় ঠিক সেখানেই থেমেছে।

**এটিই ফাঁদ।** প্রাইস চার্টে দৃশ্যমান সবকিছু বলছে চালিয়ে যান।

### ধাপ তিন: ধাপগুলো ছোট হচ্ছে, আর এদিকে কেউ তাকান না

তিনটি উর্ধ্বমুখী ধাপ পাশাপাশি রাখুন:

| ধাপ | পয়েন্ট | আগেরটির তুলনায় |
|---|---|---|
| T0→P1 | **৮৬০** | — |
| T1→P2 | **৮১০** | ৯৪.২% |
| T2→P3 | **৪৬০** | **৫৬.৮%** |

তৃতীয় উত্থান দ্বিতীয়টির **অর্ধেকের সামান্য বেশি পথ** পেরিয়েছে, এমন সূচকে যা *উঁচুতে* ছিল, তাই শতাংশের হিসাবেও এটি ছোট। এদিকে প্রতিক্রিয়া দুবারই অভিন্ন — ৩৭০ পয়েন্ট।

**যে আপট্রেন্ডে উত্থানগুলো ছোট হয় আর পতনগুলো হয় না, তা ক্রেতা ফুরিয়ে আসা আপট্রেন্ড।** এটি ডাও-এর ছয় নীতির একটি নয়। নীতি ৫ — ভলিউমকে নিশ্চিত করতে হবে — শেয়ারের বদলে পয়েন্টে প্রকাশ করলে যেমন দেখায় এটি তাই, আর এটি একই সুইং লগে বসে থাকা বিনামূল্যের তথ্য।

### ধাপ চার: নিশ্চিতকরণের সমস্যা, সৎভাবে বলা

এখানে ডাও-এর নীতি ৪ আমাদের একটি দ্বিতীয়, অর্থনৈতিকভাবে সম্পর্কিত গড় যাচাই করতে বলে। **আমাদের তেমন কিছু নেই।**

- **DS30** হলো DSEX *থেকে* বাছাই করা বড় মূলধনের অংশ। এদের মধ্যে বিচ্যুতি আকারের প্রভাব, অর্থনৈতিক সংকেত নয়।
- **DSES** হলো শরিয়াহ-ছাঁকনির উপসেট। একই সমস্যা, ভিন্ন ছাঁকনি।
- **একটি ব্যাংকিং খাত সূচক** সবচেয়ে কম খারাপ প্রার্থী কারণ ব্যাংক সবকিছুতে অর্থায়ন করে, কিন্তু সঞ্চালন ধীর, আলগা, এবং শিল্পকর্মকাণ্ডের চেয়ে পুনঃতফসিল সার্কুলার ও সুদহারের সীমা দিয়ে বেশি নিয়ন্ত্রিত।

ডাও উৎপাদককে পরিবহনকারীর সঙ্গে জুড়েছিলেন। **ডিএসই-তে তালিকাভুক্ত কোনো মালবাহী বা লজিস্টিকস গড় নেই যা তালিকাভুক্ত কোনো উৎপাদন গড়ের সঙ্গে ভৌত সম্পর্কে দাঁড়িয়ে আছে।** দুটি ওভারল্যাপিং সূচক জুড়ে তাদের মিলকে "নিশ্চিতকরণ" বলা মানে একটি স্বতঃসিদ্ধকে ল্যাব কোট পরানো।

তাই আমরা বিকল্প নিই — আর বিকল্পকে বিকল্প বলেই চিহ্নিত করি।

### ধাপ পাঁচ: তিনটি চূড়াতেই ব্রেডথ প্যানেল পড়ুন

| পরিমাপ | P1-এ | P2-এ | P3-এ |
|---|---|---|---|
| সূচকের ক্লোজ | ৫,৯৮০ | ৬,৪২০ | **৬,৫১০** |
| বেড়েছে এমন শেয়ার | ২১০ | ১৭৬ | **১২১** |
| কমেছে এমন শেয়ার | ১১৮ | ১৫২ | **২১৮** |
| **A/D পার্থক্য** | **+৯২** | **+২৪** | **−৯৭** |
| A/D লাইন (ক্রমপুঞ্জিত) | ১,২৪০ | **১,৬৯০** | **১,৪৫৫** |
| নতুন ৫২-সপ্তাহ উচ্চতা | ৪৬ | ৩৯ | **১৭** |
| নতুন ৫২-সপ্তাহ নিম্ন | ৮ | ১৫ | **৪১** |
| **উচ্চ−নিম্ন পার্থক্য** | **+৩৮** | **+২৪** | **−২৪** |
| ৫০-দিনের MA-র ওপরে % | ৬৮.৪ | ৬১.২ | **৩৮.৫** |

শেষ কলামটি প্রথম সারির বিপরীতে পড়ুন। **গোটা উত্থানের সর্বোচ্চ ক্লোজ সূচকটি করেছে ঠিক সেই দিনে যেদিন তার নিচের বাজার স্পষ্ট পতনে ছিল।**

চারটি নিশ্চিতকরণ পরীক্ষার প্রতিটিই ব্যর্থ:

| পরীক্ষা | শিট সেল | ফল |
|---|---|---|
| সূচক কি নতুন প্রাইমারি উচ্চতা করেছে? | B37 | **১ — হ্যাঁ** |
| A/D লাইন কি নতুন উচ্চতা করেছে? ($1{,}455 > 1{,}690$) | B38 | **০ — না**, ২৩৫ কম |
| উচ্চ−নিম্ন পার্থক্য কি ধনাত্মক? ($-24 > 0$) | B39 | **০ — না** |
| ৫০MA-র ওপরে % কি বাড়ছে? ($38.5 > 61.2$) | B40 | **০ — না** |
| **ব্রেডথ স্কোর** | **B41** | **৩-এর মধ্যে ০** |

**দাম উপরে, ব্রেডথ স্কোর শূন্য।** ৫০-দিনের গড়ের ওপরে থাকা তালিকাভুক্ত নামের শতাংশ **২৯.৯ পয়েন্ট** পড়েছে, ৬৮.৪ থেকে ৩৮.৫-এ, যখন সূচক P1 থেকে P3 পর্যন্ত **৮.৮৬%** উঠেছে।

এটি শক্তিশালী বাজার নয়। **এটি এমন বাজার যেখানে দশটির মধ্যে চারটিরও কম নাম আপট্রেন্ডে আছে ঠিক সেই মুহূর্তে যখন শিরোনামের সংখ্যাটি বছরের সেরা স্তরে।**

### ধাপ ছয়: শেষ ৯০ পয়েন্ট আসলে কোথা থেকে এলো?

P2 থেকে P3 পর্যন্ত সূচক **৯০ পয়েন্ট** বেড়েছে। ভেঙে দেখুন:

| উৎস | পয়েন্ট | অংশ |
|---|---|---|
| শীর্ষ ৩ ভারী শেয়ার | **+১১২** | **১২৪.৪৪%** |
| বাকি সবকিছু | **−২২** | −২৪.৪৪% |
| **নিট** | **+৯০** | ১০০% |

$$\\text{Top-3 share of move} = \\frac{112}{90} \\times 100 = 124.44\\%$$

**১০০%-এর বেশি অংশ কোনো ভুল নয়; সেটিই আবিষ্কার।** বাকি বাজার ২২ পয়েন্ট বিয়োগ করেছে আর সূচক তবু উঠেছে।

এটিই ডিএসই-নির্দিষ্ট সেই ব্যর্থতার ধরন যা ডাও অনুমান করতে পারতেন না আর আমাদের ফ্রি-ফ্লোট ভারায়ন যাকে নৈমিত্তিক করে তোলে। **৬,৫১০-এ DSEX সবকিছুকে ছাড় দেওয়া কোনো গড় ছিল না। ছিল তিনটি কোম্পানির খবর সূচকের পোশাক পরে** — যার প্রক্রিয়া **অধ্যায় ৬৬** তাদের সবচেয়ে বড়টির ওপর বিস্তারিত দেখায়, আর **অধ্যায় ৮**-এর খাত-কেন্দ্রীভবনের ফল যা কাঠামোগতভাবেই পূর্বাভাস দেয়।

### ধাপ সাত: রিভার্সাল পরীক্ষা জ্বলে ওঠে

তারপর বাজার ওঠে আর ব্যর্থ হয়:

- **ব্যর্থ উচ্চতা:** র‍্যালি থেমে যায় **৬,৪৫৫**-এ, যা ৬,৫১০ চূড়ার **৫৫ পয়েন্ট — ০.৮৪% — নিচে।** B51 ফেরত দেয় ১।
- **ভাঙা সেকেন্ডারি নিম্ন:** সর্বশেষ ক্লোজ **৬,০১৫** পূর্ববর্তী সেকেন্ডারি তলা T2-র **৬,০৫০**-এর নিচে। B52 ফেরত দেয় ১।

দুটি শর্তই, প্রয়োজনীয় ক্রমে:

$$\\text{REVERSAL SIGNAL} = \\textbf{1}$$

প্রাইমারি আপট্রেন্ডের অনুমান পরিত্যক্ত। B56 পড়ে **"REVERSAL — primary uptrend assumption abandoned।"**

লক্ষ করুন রায়ের সেলটি ব্রেডথ যাচাইয়ের *আগে* রিভার্সাল যাচাই করে, আর তার কারণ আছে: **কাঠামোটি নিজেই ভেঙে গেলে ব্রেডথের যুক্তি আর সতর্কবার্তা নয়, ইতিহাস।**

### ধাপ আট: দেরিটার দাম হিসাব করুন, কারণ এটিই সৎ অংশ

$$\\text{Signal lag} = \\frac{P_3 - C}{P_3} \\times 100 = \\frac{6{,}510 - 6{,}015}{6{,}510} \\times 100 = \\frac{495}{6{,}510} \\times 100 = \\textbf{7.60\\%}$$

আর গোটা প্রাইমারি উত্থানের বিপরীতে:

$$\\frac{495}{6{,}510 - 5{,}120} = \\frac{495}{1{,}390} = \\textbf{35.61\\%}$$

**সংকেতটি চূড়া থেকে আপনার ৭.৬০% খরচ করায়, যা প্রাইমারি ট্রেন্ড যা তৈরি করেছিল তার ৩৫.৬১%।** কাউকে ডাও তত্ত্ব মূলধন রক্ষা করে বলার আগে কথাটি জোরে বলুন।

**এটি চূড়া রক্ষা করে না। এটি আপনাকে রক্ষা করে *পরবর্তী* ধাপ থেকে** — আর তার চেয়েও ব্যয়বহুল সেই ভুল থেকে, যেখানে ভাঙা প্রাইমারি ট্রেন্ড আপনি নিচ পর্যন্ত ধরে থাকেন কারণ রেজিম বদলে গেছে তা কেউ কখনো আপনাকে বলেনি।

### ধাপ নয়: যে বিপরীত ঘটনা ব্রেডথ প্যানেল গড়াকে সার্থক করে

ব্রেডথ স্কোর শূন্যে নেমেছিল **P3-তে, ৬,৫১০-এ।** রিভার্সাল সংকেত জ্বলেছিল **৬,০১৫-এ।**

| কীসের ওপর কাজ | সূচকের স্তর | ৬,৫১০ থেকে ছেড়ে দেওয়া |
|---|---|---|
| P3-তে ব্রেডথ স্কোর ৩-এ ০ | **৬,৫১০** | **০.০০%** |
| নীতি ৬-এর রিভার্সাল নিশ্চিতকরণ | **৬,০১৫** | **৭.৬০%** |

**ব্রেডথ বিচ্যুতি ৪৯৫ পয়েন্ট আগেই পাওয়া যাচ্ছিল।** বিকল্পটি গড়ার পুরো যুক্তি এটিই: এই নয় যে তা ডাও-এর নিশ্চিতকরণকে প্রতিস্থাপন করে, কারণ করে না, বরং এই যে এটিই এই বাজারের দেওয়া একমাত্র আগাম প্রমাণ।

তবে এর মূল্য নিয়ে সুনির্দিষ্ট থাকুন। **ব্রেডথের অবনতি একটি সতর্কবার্তা, সংকেত নয়।** ব্রেডথ মাসের পর মাস ক্ষয়ে যেতে পারে যখন সূচক ঘষটে ঘষটে ওঠে, আর একে একা ধরে কাজ করলে আপনি প্রতিটি সংকীর্ণ র‍্যালিতে বিক্রি করবেন, যার বেশিরভাগই চলতে থাকে। সমর্থনযোগ্য ব্যবহারটি স্তরভিত্তিক:

| নতুন সূচক উচ্চতায় ব্রেডথ স্কোর | কাজ |
|---|---|
| **৩-এ ৩** | নিশ্চিত। স্বাভাবিক পজিশন সাইজিং। |
| **৩-এ ২** | গ্রহণযোগ্য। নতুন ঝুঁকি যোগ নয়। |
| **৩-এ ১** | সতর্কতা। স্টপ শক্ত করুন, যোগ করা বন্ধ। |
| **৩-এ ০** | **অনিশ্চিত। কমান। নীতি ৬-এর অপেক্ষা করবেন না।** |

**শূন্য স্কোর বলে না যে ট্রেন্ড শেষ। এটি বলে যে সূচকটি আর বাজার সম্পর্কে প্রমাণ নয়**, আর শিরোনামের সংখ্যা থেকে আপনি যা জানতেন বলে ভেবেছিলেন তার সবটুকু উপাদান থেকে নতুন করে বের করতে হবে।

### ধাপ দশ: ওপরের কিছু গণ্য হওয়ার আগে চারটি ডিএসই যাচাই

| যাচাই | কেন এটি বিশ্লেষণ বাতিল করে |
|---|---|
| কোনো সুইং কি **ফ্লোর-প্রাইসের সময়ে** পড়েছে? | ক্লোজটি প্রশাসনিক। সুইংটি মুছুন; ব্যাখ্যা করবেন না। |
| কোনো **বাজারব্যাপী হল্ট** কি সেশন কেটে দিয়েছে? | ক্লোজ হলো যেখানে লেনদেন থেমেছে, তর্ক যেখানে মিটেছে তা নয়। |
| **শীর্ষ তিন অবদানকারী** কি ব্যান্ডে আটকে ছিল? | সূচক ছেপেছে যেখানে ব্যান্ড ফুরিয়েছে। আগামীকাল ব্যান্ড সরে যাবে। |
| ব্রেডথের নমুনা কি **সময়কালজুড়ে স্থিতিশীল**? | নতুন তালিকাভুক্তি ও দীর্ঘ স্থগিত নাম A/D গণনা বিকৃত করে, আর ক্রমপুঞ্জিত A/D লাইন প্রতিটি বিকৃতি স্থায়ীভাবে উত্তরাধিকারসূত্রে পায়। |

শেষ সারিটি একটু সময় দাবি করে। **A/D লাইন ক্রমপুঞ্জিত, তাই কোনো ডেটা ভুল কখনো ধুয়ে যায় না** — এটি ঐ দিন থেকে গোটা সিরিজকে সরিয়ে দেয়। এজন্যই শিটে এর পাশে ৫০-দিনের গড়ের ওপরে থাকা শতাংশ রাখা হয়েছে: ঐ পরিমাপ প্রতিদিন শূন্য থেকে পুনর্গণিত হয় ও আপনার ভুলের কোনো স্মৃতি রাখে না।`,
    },

    formula: {
      en: `Dow Theory arrives as prose. Prose is not a method. **This section converts the six tenets into numbered rules with explicit thresholds, so that two analysts looking at the same closes are forced to the same answer — and so that the theory can be wrong.**

### 0. Why falsifiability is the point, not a philosophical garnish

State the objection first, because it is the correct objection. **A framework that can explain every outcome after the fact predicts nothing.** "The primary trend was up until it reversed" is true of every chart ever drawn. Hamilton and Rhea wrote beautifully and vaguely, and generations of readers have used Dow Theory as a vocabulary for narrating whatever already happened.

The cure is not more interpretation. The cure is **thresholds you commit to before you look.**

A rule is usable only if you can write down, in advance, an observation that would refute it. So each rule below is paired with its refutation condition. If you cannot state what would make you wrong, **you are not analysing, you are commentating.**

And be clear about what this buys. **It does not make Dow Theory predictive.** It makes it *consistent* — the same data always yields the same classification, which means your results can be audited, backtested, and disagreed with productively. **The value of Dow is the discipline of the definition, not prophecy.** Anyone who promises the second has quietly abandoned the first.

### 1. What counts as a swing point

Nothing in the theory works until "high" and "low" are defined. Use a closing-price fractal:

$$H_t = 1 \\iff C_t = \\max(C_{t-m}, \\ldots, C_{t+m}), \\qquad L_t = 1 \\iff C_t = \\min(C_{t-m}, \\ldots, C_{t+m})$$

with $m = 10$ sessions as the working default for a primary/secondary study.

**Closes only, per tenet 6.** Three reasons, in ascending order of local importance: intraday extremes are made by single orders; the close is where the market as a whole settled the day; and on the DSE an intraday print can be a band artefact rather than a transaction anyone chose.

**Refutation condition:** if changing $m$ from 10 to 8 or 12 flips your primary trend classification, **your classification is an artefact of the parameter and must be reported as indeterminate.** Test this every time. It is the cheapest robustness check in this book.

### 2. Separating the three trends by magnitude and duration

| Trend | Symbol | Duration $D$ | Magnitude $|\\Delta|$ | Treatment |
|---|---|---|---|---|
| **Primary** | tide | $\\ge 120$ sessions | $\\ge 15\\%$ | The only thing you position for |
| **Secondary** | wave | 15–90 sessions | 5–15% | Ride through; may add |
| **Minor** | ripple | $< 15$ sessions | $< 5\\%$ | **Ignore. Not a signal of anything.** |

$$\\text{Class}(s) = \\begin{cases} \\text{MINOR} & D_s < 15 \\;\\lor\\; |\\Delta_s| < 5\\% \\\\ \\text{SECONDARY} & 15 \\le D_s \\le 90 \\;\\land\\; 5\\% \\le |\\Delta_s| \\le 15\\% \\\\ \\text{PRIMARY} & \\text{otherwise} \\end{cases}$$

**The thresholds are conventions, not discoveries, and you must say so.** Their job is to be fixed in advance and applied identically to every chart. **A convention applied consistently beats a truth applied selectively**, which is the whole reason for writing them down at all.

**Refutation condition:** a swing that satisfies neither the minor nor the secondary box and is not long enough to be primary is **unclassified**, and unclassified means you have no position case.

### 3. The primary trend as measurable swing structure

$$\\text{PRIMARY} = \\begin{cases} \\text{UPTREND} & P_n > P_{n-1} \\;\\land\\; T_n > T_{n-1} \\\\ \\text{DOWNTREND} & P_n < P_{n-1} \\;\\land\\; T_n < T_{n-1} \\\\ \\text{INDETERMINATE} & \\text{otherwise} \\end{cases}$$

This is B12, B13 and B14 on the dashboard. **The conjunction is doing the work.** A higher high with a lower low is not a weak uptrend, it is not a trend — it is an expansion, and the honest output is *indeterminate*.

**Most misuse of Dow Theory is the refusal to return INDETERMINATE.** Build the branch, and let it fire.

### 4. The secondary retracement band

$$R = \\frac{P_n - T_n}{P_n - T_{n-1}} \\times 100, \\qquad \\text{SECONDARY} \\iff 33.3 \\le R \\le 66.7$$

Cells B19, B22 and B23. In the worked case $R_1 = 43.02\\%$ and $R_2 = 45.68\\%$, both inside the band, so B23 returns 1.

Two failure modes at the edges, and the asymmetry matters:

- $R < 33.3\\%$ — **a shallow reaction.** Usually strength, but on a thin market it can simply mean nobody traded. **Always read it against turnover before calling it strength.**
- $R > 66.7\\%$ — **the reaction has retraced most of the leg.** The prior trough is close, and rule 7 is about to become live. Treat it as pre-warning.

**Refutation condition:** if a "secondary" retraces past the prior trough, it was never secondary. Reclassify it retrospectively and say that you did.

### 5. Volume as confirmation — tenet 5, made arithmetic

$$\\Phi = \\frac{\\overline{V}_{\\text{advance legs}}}{\\overline{V}_{\\text{reaction legs}}}, \\qquad \\text{CONFIRMED} \\iff \\Phi \\ge 1.15$$

using session turnover averaged over each leg. In a primary uptrend volume should be heavier on the advances than on the reactions.

**The threshold is 1.15, not 1.00, and the gap is deliberate.** Volume is noisy enough that a ratio of 1.02 is indistinguishable from 0.98. Requiring a 15% margin means the test can actually fail, which is the only way it can also meaningfully pass.

**A points-based proxy, when clean turnover is unavailable:** compare the sizes of successive advancing legs.

$$\\Lambda = \\frac{\\text{leg}_n}{\\text{leg}_{n-1}}$$

In the worked case $860 \\to 810 \\to 460$, so $\\Lambda_3 = 460/810 = 56.8\\%$. **Advances shrinking while reactions hold constant at −370 is tenet 5's warning expressed in index points**, and it costs nothing to compute from the swing log you already have.

### 6. Confirmation as a joint condition with a time window

Dow's tenet 4, stated so it can fail:

$$\\text{CONFIRMED} \\iff \\big(A_t > \\max A\\big) \\;\\land\\; \\big(B_{t'} > \\max B\\big) \\;\\land\\; |t - t'| \\le 25 \\text{ sessions}$$

**Three components, all load-bearing.** Both series must make new extremes; both must be genuinely new against their own prior maxima; and they must do it **within 25 sessions of each other.** Drop the window and confirmation becomes unfalsifiable — given enough time, every series eventually makes a new high, and "the averages confirmed, eventually" is not a statement about anything.

**Now the DSE problem, and it must not be softened.**

Dow's pairing was economically grounded: Industrials produced, Rails shipped, and **the two averages measured the same economy at two different points in its plumbing.** A rising Industrial average that the Rails would not confirm meant physical output was not moving.

| Candidate pair | What divergence would actually mean | Verdict |
|---|---|---|
| DSEX vs **DS30** | DS30 is the large-cap selection *from* DSEX. Divergence is a **size** effect. | **Not a test.** Near-tautology. |
| DSEX vs **DSES** | Shariah-screened subset of the same universe. | **Not a test.** Different screen, same market. |
| DSEX vs **banking sector** | Banks fund everything, so there is *some* causal chain — but it is slow, unstable, and dominated by rescheduling circulars, rate caps and the governance issues of **Chapter 24**. | **Weak.** Defensible only with explicit caveats. |
| Index vs **breadth** | Not a second average at all. Measures participation directly. | **The working substitute.** |

**Conclusion, plainly: tenet 4 does not port to Bangladesh.** There is no listed freight or logistics average standing in a physical relationship to a listed production average. Picking two correlated indices and calling their agreement confirmation is **dressing a tautology as a test**, and it is worse than doing nothing because it manufactures false comfort.

### 7. Breadth as the declared substitute

Dow's underlying question was never "do two indices agree?" It was **"is the whole market moving, or is the headline number lying about the market?"** Breadth answers that directly.

$$\\text{AD}_t = \\sum_{i \\le t} (A_i - D_i), \\qquad \\text{HL}_t = \\text{NH}_t - \\text{NL}_t, \\qquad \\Psi_t = \\frac{\\#\\{\\text{names} > \\text{MA}_{50}\\}}{\\#\\{\\text{names}\\}} \\times 100$$

$$\\text{BREADTH SCORE} = \\mathbb{1}[\\text{AD}_t > \\text{AD}_{\\text{prior peak}}] + \\mathbb{1}[\\text{HL}_t > 0] + \\mathbb{1}[\\Psi_t > \\Psi_{\\text{prior peak}}]$$

Cells B38, B39, B40 and B41. Score 0 to 3, evaluated **at each new primary index high**, within the same 25-session window as rule 6.

| Score | Reading | Action |
|---|---|---|
| 3 | Confirmed | Normal sizing |
| 2 | Acceptable | No new risk |
| 1 | Warning | Tighten, stop adding |
| **0** | **Unconfirmed** | **Reduce** |

**Say the honest thing about this substitute.** It is *not* Dow's test. Dow's test asked whether two economically linked measures of the same economy agreed; this asks whether the index is representative of its own constituents. **The second question is worth asking, but it is a narrower question**, and calling it "Dow confirmation" would be exactly the intellectual laundering this chapter is arguing against.

Rank the three measures by reliability, because they are not equal. **$\\Psi$ is the most trustworthy** — recomputed from scratch daily, no memory. **The cumulative A/D line is the least** — one bad day of data distorts every value after it, permanently, and the DSE's listing and suspension churn guarantees such days.

### 8. Concentration — the test Dow never needed

$$\\kappa = \\frac{\\text{points from top 3 contributors}}{\\text{total index points gained}} \\times 100$$

Cell B47. In the worked case $\\kappa = 112/90 = 124.44\\%$.

$$\\text{Reading} = \\begin{cases} \\text{BROAD} & \\kappa < 50\\% \\\\ \\text{CONCENTRATED} & 50\\% \\le \\kappa \\le 100\\% \\\\ \\text{NOT AN AVERAGE} & \\kappa > 100\\% \\end{cases}$$

**Above 100% means the rest of the market fell while the index rose.** Here the other names contributed **−22 points.** Tenet 1 — the averages discount everything — presumes the average is *an average*. **A free-float-weighted index in which three names supply more than the whole move is not discounting the market; it is reporting three companies.**

Dow had no need of this rule. His averages were price-weighted across twelve and twenty broadly held names. Ours is free-float weighted with small floats on several of the heaviest constituents — the mechanism **Chapter 66** works through in detail.

### 9. The reversal rule — when a trend is declared over

$$\\text{REVERSAL} \\iff \\underbrace{\\big(H_{\\text{rally}} < P_n\\big)}_{\\text{failed high, B51}} \\;\\land\\; \\underbrace{\\big(C_t < T_n\\big)}_{\\text{broken secondary low, B52}}$$

**Both conditions, on closes, in that order.** Order is not decoration:

- A **failed high without a broken low** is a pause. The structure of higher lows is intact.
- A **broken low without a failed high** is an ordinary secondary reaction that ran deep.

In the worked case the rally stopped at 6,455 against a 6,510 peak — 0.84% short — and the subsequent close of 6,015 broke T2 at 6,050. B53 returns 1.

$$\\text{Signal lag} = \\frac{P_n - C_{\\text{signal}}}{P_n} \\times 100 = \\frac{495}{6{,}510} = 7.60\\%$$

**Report this number every time.** It is 35.61% of the entire primary advance from 5,120. **A method that will not quantify its own lateness is selling you something.**

### 10. Where the rules must be switched off

| Condition | Effect | Required action |
|---|---|---|
| **Floor-price regime** | Price stops discounting. Volume near zero. The close is administrative. | **Exclude the window.** Do not classify swings inside it. |
| **Market-wide circuit halt** | The close is where trading stopped. | Flag the session; do not let it define a swing point. |
| **Heavyweight band-locked** | Index prints where the band ran out. | Check B45-style contribution before trusting the extreme. |
| **Breadth universe changed** | New listings and suspensions distort $A_i - D_i$ permanently in the cumulative series. | Prefer $\\Psi$; rebase the A/D line. |
| **No reliable short side** | A confirmed primary downtrend is **not a short signal** on the DSE. | Reversal means **exit and stand aside**, not sell short. |

That last row governs how every downside signal in this chapter is used. **Chapters 26–41 gave you entries; Dow gives you the regime; and in a market with no borrow, the regime's only downside instruction is to be in cash.**

Chapter 43 takes tenet 3's phase structure fractal, and inherits every falsifiability problem catalogued above in a more acute form.`,
      bn: `ডাও তত্ত্ব আসে গদ্য হয়ে। গদ্য কোনো পদ্ধতি নয়। **এই অংশ ছয়টি নীতিকে স্পষ্ট সীমাসহ সংখ্যাযুক্ত নিয়মে রূপান্তরিত করে, যাতে একই ক্লোজের দিকে তাকানো দুই বিশ্লেষক একই উত্তরে বাধ্য হন — আর যাতে তত্ত্বটি ভুল প্রমাণিত হতে পারে।**

### ০. খণ্ডনযোগ্যতাই আসল কথা, দার্শনিক অলংকার নয়

আপত্তিটি আগে বলুন, কারণ ওটিই সঠিক আপত্তি। **যে কাঠামো ঘটনার পর প্রতিটি ফলাফল ব্যাখ্যা করতে পারে তা কিছুই পূর্বাভাস দেয় না।** "প্রাইমারি ট্রেন্ড উপরে ছিল যতক্ষণ না তা উল্টে গেল" — এ কথা আঁকা প্রতিটি চার্টের ক্ষেত্রেই সত্য। হ্যামিল্টন ও রিয়া সুন্দর ও অস্পষ্টভাবে লিখেছিলেন, আর প্রজন্মের পর প্রজন্ম পাঠক ডাও তত্ত্বকে ব্যবহার করেছেন যা ইতিমধ্যেই ঘটে গেছে তা বর্ণনার শব্দভান্ডার হিসেবে।

সমাধান আরও ব্যাখ্যা নয়। সমাধান হলো **তাকানোর আগেই যে সীমায় আপনি প্রতিশ্রুতিবদ্ধ হন।**

কোনো নিয়ম ব্যবহারযোগ্য কেবল তখনই যখন আপনি আগেভাগে লিখে রাখতে পারেন এমন একটি পর্যবেক্ষণ যা তা খণ্ডন করবে। তাই নিচের প্রতিটি নিয়মের সঙ্গে তার খণ্ডন-শর্ত জোড়া। কী আপনাকে ভুল প্রমাণ করবে তা বলতে না পারলে **আপনি বিশ্লেষণ করছেন না, ধারাভাষ্য দিচ্ছেন।**

আর এতে কী মেলে তা স্পষ্ট থাকুন। **এটি ডাও তত্ত্বকে পূর্বাভাসক বানায় না।** এটি একে *সঙ্গতিপূর্ণ* বানায় — একই উপাত্ত সবসময় একই শ্রেণিবিন্যাস দেয়, অর্থাৎ আপনার ফল নিরীক্ষাযোগ্য, ব্যাকটেস্টযোগ্য, ও ফলপ্রসূভাবে বিতর্কযোগ্য। **ডাও-এর মূল্য সংজ্ঞার শৃঙ্খলায়, ভবিষ্যদ্বাণীতে নয়।** যিনি দ্বিতীয়টির প্রতিশ্রুতি দেন তিনি নীরবে প্রথমটি ত্যাগ করেছেন।

### ১. সুইং পয়েন্ট কাকে বলে

"উচ্চতা" ও "নিম্ন" সংজ্ঞায়িত না হওয়া পর্যন্ত তত্ত্বের কিছুই কাজ করে না। ক্লোজিং-দামের ফ্র্যাক্টাল ব্যবহার করুন:

$$H_t = 1 \\iff C_t = \\max(C_{t-m}, \\ldots, C_{t+m}), \\qquad L_t = 1 \\iff C_t = \\min(C_{t-m}, \\ldots, C_{t+m})$$

প্রাইমারি/সেকেন্ডারি অধ্যয়নের জন্য কার্যকর ডিফল্ট $m = 10$ সেশন।

**কেবল ক্লোজ, নীতি ৬ অনুযায়ী।** স্থানীয় গুরুত্বের ঊর্ধ্বক্রমে তিনটি কারণ: ইন্ট্রাডে চরম মান একক অর্ডারে তৈরি হয়; ক্লোজেই সামগ্রিক বাজার দিনের নিষ্পত্তি করে; আর ডিএসই-তে একটি ইন্ট্রাডে প্রিন্ট কারও বেছে নেওয়া লেনদেন না হয়ে ব্যান্ডের কৃত্রিম ফল হতে পারে।

**খণ্ডন-শর্ত:** $m$ ১০ থেকে ৮ বা ১২ করলে যদি আপনার প্রাইমারি ট্রেন্ড শ্রেণিবিন্যাস উল্টে যায়, **তবে আপনার শ্রেণিবিন্যাস প্যারামিটারের কৃত্রিম ফল ও তা অনিশ্চিত হিসেবেই জানাতে হবে।** প্রতিবার এটি পরীক্ষা করুন। এই বইয়ের সবচেয়ে সস্তা দৃঢ়তা-যাচাই এটিই।

### ২. মাত্রা ও স্থায়িত্ব দিয়ে তিনটি ট্রেন্ড আলাদা করা

| ট্রেন্ড | প্রতীক | স্থায়িত্ব $D$ | মাত্রা $|\\Delta|$ | আচরণ |
|---|---|---|---|---|
| **প্রাইমারি** | জোয়ার | $\\ge 120$ সেশন | $\\ge 15\\%$ | কেবল এর জন্যই পজিশন নেন |
| **সেকেন্ডারি** | ঢেউ | ১৫–৯০ সেশন | ৫–১৫% | সয়ে যান; যোগ করতে পারেন |
| **মাইনর** | ছোট তরঙ্গ | $< 15$ সেশন | $< 5\\%$ | **উপেক্ষা করুন। কোনো কিছুরই সংকেত নয়।** |

$$\\text{Class}(s) = \\begin{cases} \\text{MINOR} & D_s < 15 \\;\\lor\\; |\\Delta_s| < 5\\% \\\\ \\text{SECONDARY} & 15 \\le D_s \\le 90 \\;\\land\\; 5\\% \\le |\\Delta_s| \\le 15\\% \\\\ \\text{PRIMARY} & \\text{অন্যথায়} \\end{cases}$$

**সীমাগুলো প্রথা, আবিষ্কার নয়, আর তা বলতেই হবে।** এদের কাজ হলো আগেভাগে স্থির থাকা এবং প্রতিটি চার্টে হুবহু একইভাবে প্রয়োগ হওয়া। **সঙ্গতিপূর্ণভাবে প্রয়োগ করা একটি প্রথা বাছাই করে প্রয়োগ করা একটি সত্যকে হারায়**, আর এগুলো আদৌ লিখে রাখার পুরো কারণ তাই।

**খণ্ডন-শর্ত:** যে সুইং মাইনর বা সেকেন্ডারি কোনো ঘরেই পড়ে না ও প্রাইমারি হওয়ার মতো দীর্ঘও নয়, তা **অশ্রেণিবদ্ধ**, আর অশ্রেণিবদ্ধ মানে আপনার কোনো পজিশনের যুক্তি নেই।

### ৩. প্রাইমারি ট্রেন্ড পরিমাপযোগ্য সুইং কাঠামো হিসেবে

$$\\text{PRIMARY} = \\begin{cases} \\text{UPTREND} & P_n > P_{n-1} \\;\\land\\; T_n > T_{n-1} \\\\ \\text{DOWNTREND} & P_n < P_{n-1} \\;\\land\\; T_n < T_{n-1} \\\\ \\text{INDETERMINATE} & \\text{অন্যথায়} \\end{cases}$$

এটিই ড্যাশবোর্ডের B12, B13 ও B14। **যোজকটিই কাজটি করছে।** নিম্নতর নিম্নসহ উচ্চতর উচ্চতা দুর্বল আপট্রেন্ড নয়, ট্রেন্ডই নয় — তা একটি প্রসারণ, আর সৎ ফলাফল হলো *অনিশ্চিত*।

**ডাও তত্ত্বের বেশিরভাগ অপব্যবহারই হলো INDETERMINATE ফেরত দিতে অস্বীকার করা।** শাখাটি গড়ুন, আর তাকে জ্বলতে দিন।

### ৪. সেকেন্ডারি রিট্রেসমেন্ট ব্যান্ড

$$R = \\frac{P_n - T_n}{P_n - T_{n-1}} \\times 100, \\qquad \\text{SECONDARY} \\iff 33.3 \\le R \\le 66.7$$

সেল B19, B22 ও B23। উদাহরণে $R_1 = 43.02\\%$ ও $R_2 = 45.68\\%$, দুটোই ব্যান্ডের ভেতরে, তাই B23 ফেরত দেয় ১।

প্রান্তে দুটি ব্যর্থতার ধরন, আর অসমতাটি গুরুত্বপূর্ণ:

- $R < 33.3\\%$ — **অগভীর প্রতিক্রিয়া।** সাধারণত শক্তি, কিন্তু পাতলা বাজারে এর মানে হতে পারে কেউ লেনদেনই করেনি। **শক্তি বলার আগে সবসময় টার্নওভারের বিপরীতে পড়ুন।**
- $R > 66.7\\%$ — **প্রতিক্রিয়া ধাপের বেশিরভাগ ফিরিয়ে নিয়েছে।** আগের তলা কাছে, আর নিয়ম ৭ সক্রিয় হতে চলেছে। একে পূর্বসতর্কতা গণ্য করুন।

**খণ্ডন-শর্ত:** কোনো "সেকেন্ডারি" আগের তলা পেরিয়ে গেলে তা কখনোই সেকেন্ডারি ছিল না। ভূতাপেক্ষভাবে পুনঃশ্রেণিবদ্ধ করুন ও বলুন যে করেছেন।

### ৫. নিশ্চিতকরণ হিসেবে ভলিউম — নীতি ৫, পাটিগণিতে রূপান্তরিত

$$\\Phi = \\frac{\\overline{V}_{\\text{advance legs}}}{\\overline{V}_{\\text{reaction legs}}}, \\qquad \\text{CONFIRMED} \\iff \\Phi \\ge 1.15$$

প্রতিটি ধাপে গড় করা সেশন টার্নওভার ব্যবহার করে। প্রাইমারি আপট্রেন্ডে ভলিউম প্রতিক্রিয়ার চেয়ে উত্থানে ভারী হওয়া উচিত।

**সীমাটি ১.১৫, ১.০০ নয়, আর ফাঁকটি ইচ্ছাকৃত।** ভলিউম যথেষ্ট গোলমেলে যে ১.০২ অনুপাত ০.৯৮ থেকে আলাদা করা যায় না। ১৫% ব্যবধান দাবি করার মানে পরীক্ষাটি সত্যিই ব্যর্থ হতে পারে, আর কেবল তখনই তা অর্থপূর্ণভাবে উত্তীর্ণও হতে পারে।

**পরিচ্ছন্ন টার্নওভার না থাকলে পয়েন্ট-ভিত্তিক বিকল্প:** পরপর উর্ধ্বমুখী ধাপের আকার তুলনা করুন।

$$\\Lambda = \\frac{\\text{leg}_n}{\\text{leg}_{n-1}}$$

উদাহরণে $860 \\to 810 \\to 460$, তাই $\\Lambda_3 = 460/810 = 56.8\\%$। **প্রতিক্রিয়া −৩৭০-এ অপরিবর্তিত থাকতে থাকতে উত্থান ছোট হওয়া মানে সূচক-পয়েন্টে প্রকাশিত নীতি ৫-এর সতর্কবার্তা**, আর আপনার হাতে থাকা সুইং লগ থেকেই তা গণনা করতে কিছু লাগে না।

### ৬. সময়-জানালাসহ যৌথ শর্ত হিসেবে নিশ্চিতকরণ

ডাও-এর নীতি ৪, এমনভাবে বলা যাতে তা ব্যর্থ হতে পারে:

$$\\text{CONFIRMED} \\iff \\big(A_t > \\max A\\big) \\;\\land\\; \\big(B_{t'} > \\max B\\big) \\;\\land\\; |t - t'| \\le 25 \\text{ sessions}$$

**তিনটি উপাদান, সবগুলোই ভারবাহী।** দুটি সিরিজকেই নতুন চরম মান করতে হবে; দুটোকেই নিজ নিজ আগের সর্বোচ্চের বিপরীতে সত্যিই নতুন হতে হবে; আর তা করতে হবে **পরস্পরের ২৫ সেশনের মধ্যে।** জানালাটি বাদ দিলে নিশ্চিতকরণ অখণ্ডনযোগ্য হয়ে যায় — যথেষ্ট সময় দিলে প্রতিটি সিরিজই শেষমেশ নতুন উচ্চতা করে, আর "গড়সমূহ শেষপর্যন্ত নিশ্চিত করেছিল" কোনো কিছু সম্পর্কেই বক্তব্য নয়।

**এবার ডিএসই সমস্যা, আর একে নরম করা চলবে না।**

ডাও-এর জোড়াটি ছিল অর্থনৈতিকভাবে ভিত্তিমূলক: ইন্ডাস্ট্রিয়ালরা উৎপাদন করত, রেল পরিবহন করত, আর **দুটি গড় একই অর্থনীতিকে তার নলব্যবস্থার দুটি ভিন্ন বিন্দুতে মাপত।** রেল যে ইন্ডাস্ট্রিয়াল গড়ের উত্থান নিশ্চিত করত না তার মানে ভৌত উৎপাদন নড়ছিল না।

| প্রার্থী জোড়া | বিচ্যুতির আসল মানে কী হতো | রায় |
|---|---|---|
| DSEX বনাম **DS30** | DS30 হলো DSEX *থেকে* বাছাই করা বড় মূলধন। বিচ্যুতি একটি **আকারের** প্রভাব। | **পরীক্ষা নয়।** প্রায় স্বতঃসিদ্ধ। |
| DSEX বনাম **DSES** | একই নমুনার শরিয়াহ-ছাঁকনি করা উপসেট। | **পরীক্ষা নয়।** ভিন্ন ছাঁকনি, একই বাজার। |
| DSEX বনাম **ব্যাংকিং খাত** | ব্যাংক সবকিছুতে অর্থায়ন করে, তাই *কিছুটা* কার্যকারণ শৃঙ্খল আছে — কিন্তু তা ধীর, অস্থিতিশীল, ও পুনঃতফসিল সার্কুলার, সুদহারের সীমা এবং **অধ্যায় ২৪**-এর সুশাসন সমস্যায় প্রধানত নিয়ন্ত্রিত। | **দুর্বল।** স্পষ্ট সতর্কতাসহই কেবল সমর্থনযোগ্য। |
| সূচক বনাম **ব্রেডথ** | আদৌ দ্বিতীয় কোনো গড় নয়। অংশগ্রহণ সরাসরি মাপে। | **কার্যকর বিকল্প।** |

**উপসংহার, স্পষ্টভাবে: নীতি ৪ বাংলাদেশে খাটে না।** তালিকাভুক্ত এমন কোনো মালবাহী বা লজিস্টিকস গড় নেই যা তালিকাভুক্ত কোনো উৎপাদন গড়ের সঙ্গে ভৌত সম্পর্কে দাঁড়িয়ে আছে। দুটি সহসম্পর্কিত সূচক বেছে তাদের মিলকে নিশ্চিতকরণ বলা মানে **একটি স্বতঃসিদ্ধকে পরীক্ষার পোশাক পরানো**, আর তা কিছু না করার চেয়েও খারাপ, কারণ তা মিথ্যা স্বস্তি তৈরি করে।

### ৭. ঘোষিত বিকল্প হিসেবে ব্রেডথ

ডাও-এর অন্তর্নিহিত প্রশ্ন কখনোই ছিল না "দুটি সূচক কি একমত?"। ছিল **"পুরো বাজার কি নড়ছে, নাকি শিরোনামের সংখ্যাটি বাজার সম্পর্কে মিথ্যা বলছে?"** ব্রেডথ এর সরাসরি উত্তর দেয়।

$$\\text{AD}_t = \\sum_{i \\le t} (A_i - D_i), \\qquad \\text{HL}_t = \\text{NH}_t - \\text{NL}_t, \\qquad \\Psi_t = \\frac{\\#\\{\\text{names} > \\text{MA}_{50}\\}}{\\#\\{\\text{names}\\}} \\times 100$$

$$\\text{BREADTH SCORE} = \\mathbb{1}[\\text{AD}_t > \\text{AD}_{\\text{prior peak}}] + \\mathbb{1}[\\text{HL}_t > 0] + \\mathbb{1}[\\Psi_t > \\Psi_{\\text{prior peak}}]$$

সেল B38, B39, B40 ও B41। স্কোর ০ থেকে ৩, মূল্যায়িত হয় **প্রতিটি নতুন প্রাইমারি সূচক উচ্চতায়**, নিয়ম ৬-এর একই ২৫-সেশন জানালার ভেতরে।

| স্কোর | পাঠ | কাজ |
|---|---|---|
| ৩ | নিশ্চিত | স্বাভাবিক সাইজিং |
| ২ | গ্রহণযোগ্য | নতুন ঝুঁকি নয় |
| ১ | সতর্কতা | শক্ত করুন, যোগ বন্ধ |
| **০** | **অনিশ্চিত** | **কমান** |

**এই বিকল্প সম্পর্কে সৎ কথাটি বলুন।** এটি ডাও-এর পরীক্ষা *নয়*। ডাও-এর পরীক্ষা জিজ্ঞেস করত একই অর্থনীতির দুটি অর্থনৈতিকভাবে যুক্ত পরিমাপ একমত কি না; এটি জিজ্ঞেস করে সূচকটি তার নিজের উপাদানের প্রতিনিধিত্ব করে কি না। **দ্বিতীয় প্রশ্নটি জিজ্ঞেস করার মতো, কিন্তু তা সংকীর্ণতর প্রশ্ন**, আর একে "ডাও নিশ্চিতকরণ" বলা হতো ঠিক সেই বৌদ্ধিক ধোপদুরস্তকরণ যার বিরুদ্ধে এই অধ্যায় যুক্তি দিচ্ছে।

তিনটি পরিমাপকে নির্ভরযোগ্যতার ক্রমে সাজান, কারণ এরা সমান নয়। **$\\Psi$ সবচেয়ে বিশ্বাসযোগ্য** — প্রতিদিন শূন্য থেকে পুনর্গণিত, কোনো স্মৃতি নেই। **ক্রমপুঞ্জিত A/D লাইন সবচেয়ে কম** — একদিনের খারাপ উপাত্ত তার পরের প্রতিটি মান স্থায়ীভাবে বিকৃত করে, আর ডিএসই-র তালিকাভুক্তি ও স্থগিতাদেশের চলাচল এমন দিন নিশ্চিত করে।

### ৮. কেন্দ্রীভবন — যে পরীক্ষার দরকার ডাও-এর কখনো হয়নি

$$\\kappa = \\frac{\\text{points from top 3 contributors}}{\\text{total index points gained}} \\times 100$$

সেল B47। উদাহরণে $\\kappa = 112/90 = 124.44\\%$।

$$\\text{Reading} = \\begin{cases} \\text{BROAD} & \\kappa < 50\\% \\\\ \\text{CONCENTRATED} & 50\\% \\le \\kappa \\le 100\\% \\\\ \\text{NOT AN AVERAGE} & \\kappa > 100\\% \\end{cases}$$

**১০০%-এর ওপরে মানে সূচক ওঠার সময় বাকি বাজার পড়েছে।** এখানে অন্য নামগুলোর অবদান **−২২ পয়েন্ট।** নীতি ১ — গড়সমূহ সবকিছুকে ছাড় দেয় — ধরে নেয় গড়টি *একটি গড়*। **যে ফ্রি-ফ্লোট-ভারিত সূচকে তিনটি নাম গোটা চলনের চেয়ে বেশি সরবরাহ করে তা বাজারকে ছাড় দিচ্ছে না; তা তিনটি কোম্পানির খবর জানাচ্ছে।**

ডাও-এর এই নিয়মের দরকার হয়নি। তাঁর গড়গুলো ছিল বারো ও কুড়িটি ব্যাপকভাবে ধারিত নামের দাম-ভারিত গড়। আমাদেরটি ফ্রি-ফ্লোট ভারিত, সবচেয়ে ভারী কয়েকটি উপাদানের ছোট ফ্লোটসহ — যে প্রক্রিয়া **অধ্যায় ৬৬** বিস্তারিতভাবে দেখায়।

### ৯. রিভার্সাল নিয়ম — কখন ট্রেন্ড শেষ ঘোষণা করা হয়

$$\\text{REVERSAL} \\iff \\underbrace{\\big(H_{\\text{rally}} < P_n\\big)}_{\\text{failed high, B51}} \\;\\land\\; \\underbrace{\\big(C_t < T_n\\big)}_{\\text{broken secondary low, B52}}$$

**দুটি শর্তই, ক্লোজে, ঐ ক্রমে।** ক্রমটি অলংকার নয়:

- **ভাঙা নিম্ন ছাড়া ব্যর্থ উচ্চতা** একটি বিরতি। উচ্চতর নিম্নের কাঠামো অক্ষত।
- **ব্যর্থ উচ্চতা ছাড়া ভাঙা নিম্ন** গভীরে যাওয়া একটি সাধারণ সেকেন্ডারি প্রতিক্রিয়া।

উদাহরণে র‍্যালি ৬,৪৫৫-এ থেমেছে ৬,৫১০ চূড়ার বিপরীতে — ০.৮৪% কম — আর পরবর্তী ৬,০১৫ ক্লোজ ৬,০৫০-এ T2 ভেঙেছে। B53 ফেরত দেয় ১।

$$\\text{Signal lag} = \\frac{P_n - C_{\\text{signal}}}{P_n} \\times 100 = \\frac{495}{6{,}510} = 7.60\\%$$

**প্রতিবার এই সংখ্যাটি জানান।** এটি ৫,১২০ থেকে গোটা প্রাইমারি উত্থানের ৩৫.৬১%। **যে পদ্ধতি নিজের দেরি সংখ্যায় বলতে চায় না, সে আপনাকে কিছু একটা বিক্রি করছে।**

### ১০. নিয়মগুলো কোথায় বন্ধ রাখতে হবে

| অবস্থা | প্রভাব | আবশ্যক কাজ |
|---|---|---|
| **ফ্লোর-প্রাইস ব্যবস্থা** | দাম ছাড় দেওয়া বন্ধ করে। ভলিউম প্রায় শূন্য। ক্লোজ প্রশাসনিক। | **সময়কালটি বাদ দিন।** ভেতরের সুইং শ্রেণিবদ্ধ করবেন না। |
| **বাজারব্যাপী সার্কিট হল্ট** | ক্লোজ হলো যেখানে লেনদেন থেমেছে। | সেশনটি চিহ্নিত করুন; তা যেন কোনো সুইং পয়েন্ট নির্ধারণ না করে। |
| **ভারী শেয়ার ব্যান্ডে আটকা** | সূচক ছাপে যেখানে ব্যান্ড ফুরিয়েছে। | চরম মানে ভরসার আগে B45-ধাঁচের অবদান যাচাই করুন। |
| **ব্রেডথের নমুনা বদলেছে** | নতুন তালিকাভুক্তি ও স্থগিতাদেশ ক্রমপুঞ্জিত সিরিজে $A_i - D_i$ স্থায়ীভাবে বিকৃত করে। | $\\Psi$ পছন্দ করুন; A/D লাইন পুনর্ভিত্তি করুন। |
| **নির্ভরযোগ্য শর্ট সাইড নেই** | নিশ্চিত প্রাইমারি ডাউনট্রেন্ড ডিএসই-তে **শর্ট সংকেত নয়**। | রিভার্সাল মানে **বেরিয়ে এসে সরে দাঁড়ানো**, শর্ট বিক্রি নয়। |

শেষ সারিটি এই অধ্যায়ের প্রতিটি নিম্নমুখী সংকেতের ব্যবহার নিয়ন্ত্রণ করে। **অধ্যায় ২৬–৪১ আপনাকে প্রবেশ দিয়েছে; ডাও দেয় রেজিম; আর ধার-ব্যবস্থাহীন বাজারে রেজিমের একমাত্র নিম্নমুখী নির্দেশ হলো নগদে থাকা।**

অধ্যায় ৪৩ নীতি ৩-এর পর্যায় কাঠামোকে ফ্র্যাক্টাল করে, আর ওপরে তালিকাভুক্ত প্রতিটি খণ্ডনযোগ্যতার সমস্যা আরও তীব্র রূপে উত্তরাধিকারসূত্রে পায়।`,
    },

    manual: {
      en: `**Scenario.** The constructed DSEX-style index of §42.3, computed entirely by hand. Every number below reconciles to a cell in the §42.6 dashboard, and the cell reference is given so you can check yourself against it. **Closing values only.**

Inputs (B2:B9): T0 = 5,120 · P1 = 5,980 · T1 = 5,610 · P2 = 6,420 · T2 = 6,050 · P3 = 6,510 · failed rally high = 6,455 · latest close = 6,015.

**Step 1 — Confirm the swing points are legitimate before using them.**

Apply rule 1: each mark must be the extreme close of an eleven-session window either side ($m = 10$). Then apply the exclusion test — was any of the eight sessions inside a floor-price window, a market-wide halt, or a session in which the top contributors were band-locked?

**If any answer is yes, stop here.** No amount of downstream arithmetic repairs a swing point that is an administrative artefact. This step has no cell on the sheet, and that is a weakness of the sheet, not a sign the step is optional.

**Step 2 — Higher high? (B12)**
$$P_3 = 6{,}510 \\;>\\; P_2 = 6{,}420 \\;\\Rightarrow\\; \\textbf{1}$$

**Step 3 — Higher low? (B13)**
$$T_2 = 6{,}050 \\;>\\; T_1 = 5{,}610 \\;\\Rightarrow\\; \\textbf{1}$$

**Step 4 — Classify the primary trend. (B14)**

Both conditions hold, so the AND branch fires:

$$\\text{PRIMARY TREND} = \\textbf{UPTREND}$$

**Notice what you did not do: you did not have an opinion.** Two comparisons produced a label. If B12 had been 1 and B13 had been 0, the formula would have returned INDETERMINATE, and INDETERMINATE is a legitimate final answer. **The cell is built to be able to say "I don't know", and most analysts are not.**

**Step 5 — First advancing leg. (B17)**
$$P_1 - T_0 = 5{,}980 - 5{,}120 = \\textbf{860}$$

**Step 6 — First secondary reaction. (B18)**
$$P_1 - T_1 = 5{,}980 - 5{,}610 = \\textbf{370}$$

**Step 7 — First retracement percentage. (B19)**
$$R_1 = \\frac{370}{860} \\times 100 = 43.0233\\ldots = \\textbf{43.02\\%}$$

**Step 8 — Second advancing leg. (B20)**
$$P_2 - T_1 = 6{,}420 - 5{,}610 = \\textbf{810}$$

**Step 9 — Second secondary reaction. (B21)**
$$P_2 - T_2 = 6{,}420 - 6{,}050 = \\textbf{370}$$

**Step 10 — Second retracement percentage. (B22)**
$$R_2 = \\frac{370}{810} \\times 100 = 45.6790\\ldots = \\textbf{45.68\\%}$$

**Step 11 — Test both against the one-third to two-thirds band. (B23)**
$$33.3 \\le 43.02 \\le 66.7 \\;\\checkmark \\qquad 33.3 \\le 45.68 \\le 66.7 \\;\\checkmark \\;\\Rightarrow\\; \\textbf{1}$$

**Pause and read what you now have.** Two higher highs, two higher lows, and two secondary corrections that landed almost exactly where Dow said corrections land. **On price structure alone this is a textbook primary uptrend and there is nothing wrong with it.**

Everything that follows is the discovery that the price structure is not the market.

**Step 12 — Compute the leg ratio, which no cell on the sheet holds.**

$$860 \\;\\to\\; 810 \\;\\to\\; \\underbrace{6{,}510 - 6{,}050 = 460}_{\\text{third advance}}$$
$$\\Lambda_2 = \\frac{810}{860} = 94.2\\%, \\qquad \\Lambda_3 = \\frac{460}{810} = \\textbf{56.8\\%}$$

Meanwhile both reactions were **−370, identical.**

**Advances shrinking by 43% while reactions hold constant is tenet 5's volume warning written in index points.** It is free — it comes out of B17 to B21, which you have already computed — and the dashboard does not compute it. **Add the cell.**

**Step 13 — Advance–decline differentials across the three peaks. (B29, C29, D29)**
$$210 - 118 = \\textbf{+92}, \\qquad 176 - 152 = \\textbf{+24}, \\qquad 121 - 218 = \\textbf{−97}$$

**Step 14 — New-high minus new-low differentials. (B33, C33, D33)**
$$46 - 8 = \\textbf{+38}, \\qquad 39 - 15 = \\textbf{+24}, \\qquad 17 - 41 = \\textbf{−24}$$

**Step 15 — Line the breadth series up against the index and read across.**

| At | Index | A/D diff | A/D line | H−L diff | % > 50MA |
|---|---|---|---|---|---|
| P1 | 5,980 | +92 | 1,240 | +38 | 68.4 |
| P2 | 6,420 | +24 | **1,690** | +24 | 61.2 |
| **P3** | **6,510** | **−97** | 1,455 | **−24** | **38.5** |

**Every single series peaked at P2 or earlier. The index peaked at P3.** That gap is the entire chapter.

**Step 16 — Run the four confirmation tests. (B37 to B41)**

$$\\text{B37: } P_3 = 6{,}510 > P_2 = 6{,}420 \\;\\Rightarrow\\; \\textbf{1 (new index high)}$$
$$\\text{B38: } \\text{AD}_{P_3} = 1{,}455 > \\text{AD}_{P_2} = 1{,}690? \\;\\Rightarrow\\; \\textbf{0} \\quad (235 \\text{ short})$$
$$\\text{B39: } \\text{HL}_{P_3} = -24 > 0? \\;\\Rightarrow\\; \\textbf{0}$$
$$\\text{B40: } \\Psi_{P_3} = 38.5 > \\Psi_{P_2} = 61.2? \\;\\Rightarrow\\; \\textbf{0}$$

**Step 17 — Breadth score. (B41)**
$$0 + 0 + 0 = \\textbf{0 of 3}$$

**A new all-time high for the advance on a breadth score of zero.** Quantify the divergence so it is not just an adjective:

$$\\Delta\\Psi = 38.5 - 68.4 = \\textbf{−29.9 points}, \\qquad \\Delta\\text{Index} = \\frac{6{,}510}{5{,}980} - 1 = \\textbf{+8.86\\%}$$

**The index rose 8.86% from P1 to P3 while the share of names in an uptrend fell by 29.9 percentage points.** Fewer than four listed names in ten were above their 50-day average on the day the headline number printed its best close of the year.

**Step 18 — Where did the last 90 points come from? (B44 to B47)**

$$\\text{B44: } P_3 - P_2 = 6{,}510 - 6{,}420 = \\textbf{90 points}$$
$$\\text{B45: top three heavyweights contributed } \\textbf{+112}$$
$$\\text{B46: } 90 - 112 = \\textbf{−22 points from every other name}$$
$$\\text{B47: } \\kappa = \\frac{112}{90} \\times 100 = 124.4444\\ldots = \\textbf{124.44\\%}$$

**A concentration above 100% is not an arithmetic error — it is the finding.** Three companies added 112 points; the other four hundred-odd subtracted 22; the index went up.

**Tenet 1 says the averages discount everything. This average discounted three companies.** Do not treat 6,510 as a statement about the Bangladeshi market, because arithmetically it is not one.

**Step 19 — Prior secondary low. (B50)**
$$T_2 = \\textbf{6{,}050}$$

**Step 20 — Failed primary high? (B51)**
$$H_{\\text{rally}} = 6{,}455 \\;<\\; P_3 = 6{,}510 \\;\\Rightarrow\\; \\textbf{1}$$

The rally fell **55 points short**, which is $55/6{,}510 = 0.84\\%$. **Note how small that margin is**, and note that the rule does not care: a miss is a miss, and a rule that needed the miss to be "convincing" would have reintroduced the judgement the rule exists to remove.

**Step 21 — Broken prior secondary low? (B52)**
$$C = 6{,}015 \\;<\\; T_2 = 6{,}050 \\;\\Rightarrow\\; \\textbf{1}$$

**Step 22 — Reversal signal. (B53)**
$$\\text{AND}(1, 1) = \\textbf{1}$$

**Both conditions, in that order.** Had only the failed high fired, this would be a pause with the higher-low structure intact. Had only the broken low fired, it would be a secondary reaction that ran deep. **It is the conjunction that makes it a reversal, and the conjunction is why it is late.**

**Step 23 — Price the lateness. (B54)**
$$\\text{Signal lag} = \\frac{6{,}510 - 6{,}015}{6{,}510} \\times 100 = \\frac{495}{6{,}510} \\times 100 = 7.6036\\ldots = \\textbf{7.60\\%}$$

And against the primary advance in full:

$$\\frac{495}{6{,}510 - 5{,}120} = \\frac{495}{1{,}390} = \\textbf{35.61\\%}$$

**You surrendered 7.60% from the peak, which is 35.61% of everything the primary trend delivered.** That is the price of demanding proof, and it is not negotiable — it is what the method *is*.

**Step 24 — The verdict cell, and why its ordering matters. (B56)**

The formula tests in sequence: reversal first, then unconfirmed high, then confirmed high, then no signal. Here B53 = 1, so it returns on the first branch:

> **REVERSAL — primary uptrend assumption abandoned**

**Trace the branch you did not take.** Had you run the sheet at P3 — before the failed rally, before the broken low — B53 would have been 0, B37 = 1 and B41 = 0, and the second branch would have returned:

> **UNCONFIRMED — new index high on deteriorating breadth**

$$\\text{Breadth warning at } \\textbf{6{,}510} \\qquad \\text{vs} \\qquad \\text{Reversal confirmation at } \\textbf{6{,}015}$$

**495 index points separate the warning from the confirmation.** That is the entire practical case for building the breadth panel: it is not Dow's confirmation test and it must not be called one, but **it is the only early evidence this market offers**, and it was available at the exact high.

**Step 25 — State what you would do, and what you would not.**

The reversal verdict means **exit and stand aside.** It does not mean short. **The DSE has no reliable retail borrow**, so half of the classical Dow literature — which assumes a functioning short side — resolves here to a single instruction: **be in cash and wait for the next primary classification.**

**Step 26 — Run the robustness check before you act on any of it.**

Recompute the swing points with $m = 8$ and $m = 12$ instead of 10. **If the primary classification flips, you must report INDETERMINATE and take no position**, because your conclusion belonged to the parameter rather than to the market. This is the cheapest honest test in the chapter and it is the one most reliably skipped.`,
      bn: `**পরিস্থিতি।** §৪২.৩-এর নির্মিত DSEX-ধাঁচের সূচক, সম্পূর্ণ হাতে গণনা করা। নিচের প্রতিটি সংখ্যা §৪২.৬ ড্যাশবোর্ডের একটি সেলের সঙ্গে মেলে, আর সেলের নাম দেওয়া আছে যাতে আপনি নিজেকে মিলিয়ে নিতে পারেন। **কেবল ক্লোজিং মান।**

ইনপুট (B2:B9): T0 = ৫,১২০ · P1 = ৫,৯৮০ · T1 = ৫,৬১০ · P2 = ৬,৪২০ · T2 = ৬,০৫০ · P3 = ৬,৫১০ · ব্যর্থ র‍্যালির উচ্চতা = ৬,৪৫৫ · সর্বশেষ ক্লোজ = ৬,০১৫।

**ধাপ ১ — ব্যবহারের আগে সুইং পয়েন্টগুলো বৈধ কি না নিশ্চিত করুন।**

নিয়ম ১ প্রয়োগ করুন: প্রতিটি চিহ্নকে দুই পাশে এগারো সেশনের জানালার চরম ক্লোজ হতে হবে ($m = 10$)। তারপর বর্জন-পরীক্ষা প্রয়োগ করুন — আটটি সেশনের কোনোটি কি ফ্লোর-প্রাইসের সময়ে, বাজারব্যাপী হল্টে, বা এমন সেশনে পড়েছে যেখানে শীর্ষ অবদানকারীরা ব্যান্ডে আটকা ছিল?

**যেকোনো উত্তর হ্যাঁ হলে এখানেই থামুন।** পরের কোনো পরিমাণ পাটিগণিতই প্রশাসনিক কৃত্রিম ফল হয়ে যাওয়া সুইং পয়েন্ট মেরামত করে না। এই ধাপের কোনো সেল শিটে নেই, আর তা শিটের দুর্বলতা, ধাপটি ঐচ্ছিক হওয়ার লক্ষণ নয়।

**ধাপ ২ — উচ্চতর উচ্চতা? (B12)**
$$P_3 = 6{,}510 \\;>\\; P_2 = 6{,}420 \\;\\Rightarrow\\; \\textbf{1}$$

**ধাপ ৩ — উচ্চতর নিম্ন? (B13)**
$$T_2 = 6{,}050 \\;>\\; T_1 = 5{,}610 \\;\\Rightarrow\\; \\textbf{1}$$

**ধাপ ৪ — প্রাইমারি ট্রেন্ড শ্রেণিবদ্ধ করুন। (B14)**

দুটি শর্তই টেকে, তাই AND শাখাটি জ্বলে:

$$\\text{PRIMARY TREND} = \\textbf{UPTREND}$$

**লক্ষ করুন আপনি কী করেননি: আপনি কোনো মতামত দেননি।** দুটি তুলনা একটি লেবেল তৈরি করেছে। B12 ১ আর B13 ০ হলে সূত্রটি INDETERMINATE ফেরত দিত, আর INDETERMINATE একটি বৈধ চূড়ান্ত উত্তর। **সেলটি "আমি জানি না" বলতে পারার মতো করে গড়া, আর বেশিরভাগ বিশ্লেষক তা পারেন না।**

**ধাপ ৫ — প্রথম উর্ধ্বমুখী ধাপ। (B17)**
$$P_1 - T_0 = 5{,}980 - 5{,}120 = \\textbf{860}$$

**ধাপ ৬ — প্রথম সেকেন্ডারি প্রতিক্রিয়া। (B18)**
$$P_1 - T_1 = 5{,}980 - 5{,}610 = \\textbf{370}$$

**ধাপ ৭ — প্রথম রিট্রেসমেন্ট শতাংশ। (B19)**
$$R_1 = \\frac{370}{860} \\times 100 = 43.0233\\ldots = \\textbf{43.02\\%}$$

**ধাপ ৮ — দ্বিতীয় উর্ধ্বমুখী ধাপ। (B20)**
$$P_2 - T_1 = 6{,}420 - 5{,}610 = \\textbf{810}$$

**ধাপ ৯ — দ্বিতীয় সেকেন্ডারি প্রতিক্রিয়া। (B21)**
$$P_2 - T_2 = 6{,}420 - 6{,}050 = \\textbf{370}$$

**ধাপ ১০ — দ্বিতীয় রিট্রেসমেন্ট শতাংশ। (B22)**
$$R_2 = \\frac{370}{810} \\times 100 = 45.6790\\ldots = \\textbf{45.68\\%}$$

**ধাপ ১১ — দুটোকেই এক-তৃতীয়াংশ থেকে দুই-তৃতীয়াংশ ব্যান্ডের বিপরীতে পরীক্ষা করুন। (B23)**
$$33.3 \\le 43.02 \\le 66.7 \\;\\checkmark \\qquad 33.3 \\le 45.68 \\le 66.7 \\;\\checkmark \\;\\Rightarrow\\; \\textbf{1}$$

**থামুন আর এখন আপনার হাতে যা আছে তা পড়ুন।** দুটি উচ্চতর উচ্চতা, দুটি উচ্চতর নিম্ন, আর দুটি সেকেন্ডারি সংশোধন যা ডাও যেখানে সংশোধন থামে বলেছিলেন প্রায় ঠিক সেখানেই নেমেছে। **কেবল দামের কাঠামোয় এটি পাঠ্যবইসুলভ প্রাইমারি আপট্রেন্ড আর এতে কোনো ভুল নেই।**

এরপর যা আসছে তার সবটাই এই আবিষ্কার যে দামের কাঠামোই বাজার নয়।

**ধাপ ১২ — ধাপের অনুপাত গণনা করুন, যা শিটের কোনো সেলে নেই।**

$$860 \\;\\to\\; 810 \\;\\to\\; \\underbrace{6{,}510 - 6{,}050 = 460}_{\\text{তৃতীয় উত্থান}}$$
$$\\Lambda_2 = \\frac{810}{860} = 94.2\\%, \\qquad \\Lambda_3 = \\frac{460}{810} = \\textbf{56.8\\%}$$

এদিকে দুটি প্রতিক্রিয়াই ছিল **−৩৭০, অভিন্ন।**

**প্রতিক্রিয়া অপরিবর্তিত থাকতে থাকতে উত্থান ৪৩% ছোট হওয়া মানে সূচক-পয়েন্টে লেখা নীতি ৫-এর ভলিউম সতর্কবার্তা।** এটি বিনামূল্যের — B17 থেকে B21 থেকেই বেরিয়ে আসে, যা আপনি আগেই গণনা করেছেন — আর ড্যাশবোর্ড তা গণনা করে না। **সেলটি যোগ করুন।**

**ধাপ ১৩ — তিনটি চূড়াজুড়ে অ্যাডভান্স–ডিক্লাইন পার্থক্য। (B29, C29, D29)**
$$210 - 118 = \\textbf{+92}, \\qquad 176 - 152 = \\textbf{+24}, \\qquad 121 - 218 = \\textbf{−97}$$

**ধাপ ১৪ — নতুন-উচ্চতা বিয়োগ নতুন-নিম্ন পার্থক্য। (B33, C33, D33)**
$$46 - 8 = \\textbf{+38}, \\qquad 39 - 15 = \\textbf{+24}, \\qquad 17 - 41 = \\textbf{−24}$$

**ধাপ ১৫ — ব্রেডথ সিরিজগুলো সূচকের পাশে সাজিয়ে আড়াআড়ি পড়ুন।**

| কোথায় | সূচক | A/D পার্থক্য | A/D লাইন | উ−নি পার্থক্য | % > ৫০MA |
|---|---|---|---|---|---|
| P1 | ৫,৯৮০ | +৯২ | ১,২৪০ | +৩৮ | ৬৮.৪ |
| P2 | ৬,৪২০ | +২৪ | **১,৬৯০** | +২৪ | ৬১.২ |
| **P3** | **৬,৫১০** | **−৯৭** | ১,৪৫৫ | **−২৪** | **৩৮.৫** |

**প্রতিটি সিরিজই P2-তে বা তার আগে শীর্ষে উঠেছে। সূচক শীর্ষে উঠেছে P3-তে।** ঐ ব্যবধানটিই গোটা অধ্যায়।

**ধাপ ১৬ — চারটি নিশ্চিতকরণ পরীক্ষা চালান। (B37 থেকে B41)**

$$\\text{B37: } P_3 = 6{,}510 > P_2 = 6{,}420 \\;\\Rightarrow\\; \\textbf{1 (নতুন সূচক উচ্চতা)}$$
$$\\text{B38: } \\text{AD}_{P_3} = 1{,}455 > \\text{AD}_{P_2} = 1{,}690? \\;\\Rightarrow\\; \\textbf{0} \\quad (235 \\text{ কম})$$
$$\\text{B39: } \\text{HL}_{P_3} = -24 > 0? \\;\\Rightarrow\\; \\textbf{0}$$
$$\\text{B40: } \\Psi_{P_3} = 38.5 > \\Psi_{P_2} = 61.2? \\;\\Rightarrow\\; \\textbf{0}$$

**ধাপ ১৭ — ব্রেডথ স্কোর। (B41)**
$$0 + 0 + 0 = \\textbf{৩-এ ০}$$

**শূন্য ব্রেডথ স্কোরে উত্থানের নতুন সর্বোচ্চ উচ্চতা।** বিচ্যুতিটি সংখ্যায় বলুন যাতে তা নিছক বিশেষণ না থাকে:

$$\\Delta\\Psi = 38.5 - 68.4 = \\textbf{−29.9 পয়েন্ট}, \\qquad \\Delta\\text{Index} = \\frac{6{,}510}{5{,}980} - 1 = \\textbf{+8.86\\%}$$

**সূচক P1 থেকে P3 পর্যন্ত ৮.৮৬% উঠেছে যখন আপট্রেন্ডে থাকা নামের অংশ ২৯.৯ শতাংশ বিন্দু পড়েছে।** শিরোনামের সংখ্যাটি বছরের সেরা ক্লোজ ছাপার দিনে দশটির মধ্যে চারটিরও কম তালিকাভুক্ত নাম তাদের ৫০-দিনের গড়ের ওপরে ছিল।

**ধাপ ১৮ — শেষ ৯০ পয়েন্ট কোথা থেকে এলো? (B44 থেকে B47)**

$$\\text{B44: } P_3 - P_2 = 6{,}510 - 6{,}420 = \\textbf{90 পয়েন্ট}$$
$$\\text{B45: শীর্ষ তিন ভারী শেয়ারের অবদান } \\textbf{+112}$$
$$\\text{B46: } 90 - 112 = \\textbf{−22, বাকি সব নাম থেকে}$$
$$\\text{B47: } \\kappa = \\frac{112}{90} \\times 100 = 124.4444\\ldots = \\textbf{124.44\\%}$$

**১০০%-এর ওপরে কেন্দ্রীভবন কোনো গাণিতিক ভুল নয় — সেটিই আবিষ্কার।** তিনটি কোম্পানি ১১২ পয়েন্ট যোগ করেছে; বাকি চারশো-কিছু নাম ২২ বিয়োগ করেছে; সূচক উঠেছে।

**নীতি ১ বলে গড়সমূহ সবকিছুকে ছাড় দেয়। এই গড় তিনটি কোম্পানিকে ছাড় দিয়েছে।** ৬,৫১০-কে বাংলাদেশের বাজার সম্পর্কে বক্তব্য গণ্য করবেন না, কারণ পাটিগণিতের হিসাবে তা নয়।

**ধাপ ১৯ — পূর্ববর্তী সেকেন্ডারি নিম্ন। (B50)**
$$T_2 = \\textbf{6{,}050}$$

**ধাপ ২০ — ব্যর্থ প্রাইমারি উচ্চতা? (B51)**
$$H_{\\text{rally}} = 6{,}455 \\;<\\; P_3 = 6{,}510 \\;\\Rightarrow\\; \\textbf{1}$$

র‍্যালিটি **৫৫ পয়েন্ট কম** পড়েছে, যা $55/6{,}510 = 0.84\\%$। **লক্ষ করুন ব্যবধানটি কত ছোট**, আর লক্ষ করুন নিয়মটির তাতে কিছু যায় আসে না: কম পড়া মানে কম পড়া, আর যে নিয়মের জন্য কম পড়াটি "বিশ্বাসযোগ্য" হতে হতো তা ঠিক সেই বিচারবুদ্ধিই ফিরিয়ে আনত যা সরাতেই নিয়মটির অস্তিত্ব।

**ধাপ ২১ — পূর্ববর্তী সেকেন্ডারি নিম্ন ভেঙেছে? (B52)**
$$C = 6{,}015 \\;<\\; T_2 = 6{,}050 \\;\\Rightarrow\\; \\textbf{1}$$

**ধাপ ২২ — রিভার্সাল সংকেত। (B53)**
$$\\text{AND}(1, 1) = \\textbf{1}$$

**দুটি শর্তই, ঐ ক্রমে।** কেবল ব্যর্থ উচ্চতা জ্বললে এটি হতো একটি বিরতি, উচ্চতর-নিম্নের কাঠামো অক্ষত রেখে। কেবল ভাঙা নিম্ন জ্বললে এটি হতো গভীরে যাওয়া সেকেন্ডারি প্রতিক্রিয়া। **যোজকটিই একে রিভার্সাল বানায়, আর যোজকটিই কারণ যে এটি দেরি করে।**

**ধাপ ২৩ — দেরির দাম হিসাব করুন। (B54)**
$$\\text{Signal lag} = \\frac{6{,}510 - 6{,}015}{6{,}510} \\times 100 = \\frac{495}{6{,}510} \\times 100 = 7.6036\\ldots = \\textbf{7.60\\%}$$

আর পুরো প্রাইমারি উত্থানের বিপরীতে:

$$\\frac{495}{6{,}510 - 5{,}120} = \\frac{495}{1{,}390} = \\textbf{35.61\\%}$$

**আপনি চূড়া থেকে ৭.৬০% ছেড়েছেন, যা প্রাইমারি ট্রেন্ড যা দিয়েছিল তার ৩৫.৬১%।** প্রমাণ দাবি করার দাম এটিই, আর তা দরকষাকষির বিষয় নয় — পদ্ধতিটি *এটাই*।

**ধাপ ২৪ — রায়ের সেল, আর তার ক্রম কেন গুরুত্বপূর্ণ। (B56)**

সূত্রটি ক্রমানুসারে পরীক্ষা করে: প্রথমে রিভার্সাল, তারপর অনিশ্চিত উচ্চতা, তারপর নিশ্চিত উচ্চতা, তারপর কোনো সংকেত নেই। এখানে B53 = ১, তাই প্রথম শাখাতেই ফেরত দেয়:

> **REVERSAL — primary uptrend assumption abandoned**

**যে শাখায় আপনি যাননি তা অনুসরণ করুন।** শিটটি P3-তে চালালে — ব্যর্থ র‍্যালির আগে, ভাঙা নিম্নের আগে — B53 হতো ০, B37 = ১ ও B41 = ০, আর দ্বিতীয় শাখা ফেরত দিত:

> **UNCONFIRMED — new index high on deteriorating breadth**

$$\\text{ব্রেডথ সতর্কতা } \\textbf{6{,}510}\\text{-এ} \\qquad \\text{বনাম} \\qquad \\text{রিভার্সাল নিশ্চিতকরণ } \\textbf{6{,}015}\\text{-এ}$$

**সতর্কতা ও নিশ্চিতকরণের মধ্যে ৪৯৫ সূচক-পয়েন্টের ব্যবধান।** ব্রেডথ প্যানেল গড়ার পুরো ব্যবহারিক যুক্তি এটিই: এটি ডাও-এর নিশ্চিতকরণ পরীক্ষা নয় ও একে তা বলা চলবে না, কিন্তু **এটিই এই বাজারের দেওয়া একমাত্র আগাম প্রমাণ**, আর তা ঠিক উচ্চতাতেই পাওয়া যাচ্ছিল।

**ধাপ ২৫ — আপনি কী করবেন আর কী করবেন না তা বলুন।**

রিভার্সাল রায়ের মানে **বেরিয়ে এসে সরে দাঁড়ানো।** এর মানে শর্ট নয়। **ডিএসই-তে নির্ভরযোগ্য খুচরা ধার-ব্যবস্থা নেই**, তাই ধ্রুপদী ডাও সাহিত্যের অর্ধেক — যা কার্যকর শর্ট সাইড ধরে নেয় — এখানে একটিমাত্র নির্দেশে দাঁড়ায়: **নগদে থাকুন আর পরবর্তী প্রাইমারি শ্রেণিবিন্যাসের অপেক্ষা করুন।**

**ধাপ ২৬ — এর কোনো কিছুতে কাজ করার আগে দৃঢ়তা-যাচাই চালান।**

১০-এর বদলে $m = 8$ ও $m = 12$ দিয়ে সুইং পয়েন্ট পুনর্গণনা করুন। **প্রাইমারি শ্রেণিবিন্যাস উল্টে গেলে আপনাকে INDETERMINATE জানাতে হবে ও কোনো পজিশন নেওয়া চলবে না**, কারণ আপনার সিদ্ধান্ত বাজারের নয়, প্যারামিটারের ছিল। এই অধ্যায়ের সবচেয়ে সস্তা সৎ পরীক্ষা এটিই, আর এটিই সবচেয়ে নিয়মিতভাবে এড়িয়ে যাওয়া হয়।`,
    },

    mistakes: {
      en: `1. **Treating DS30 confirming DSEX as Dow's tenet 4.** DS30 is the large-cap selection *from* DSEX; when they agree it proves nothing, because they are largely the same securities. Dow paired producers with shippers — **two measurements of one economy at different points in its plumbing.** There is no listed freight average on the DSE that does this, and the honest output is that **tenet 4 does not port.** Calling an overlap "confirmation" manufactures false comfort, which is worse than having no test at all.
2. **Refusing to return INDETERMINATE.** B14 has three branches and the third one exists for a reason. A higher high with a *lower* low is not a weak uptrend — it is not a trend. In the worked case B12 = 1 and B13 = 1, so UPTREND was earned; had B13 come back 0, the correct output is "I don't know" and the correct position size is zero. **A framework that always produces an opinion is a horoscope.**
3. **Using intraday highs and lows instead of closes.** Every figure in this chapter is a close, per tenet 6. Use the intraday high and the failed rally reads 6,455 against some higher spike that never settled, B51 flips to 0, and **the entire reversal signal disappears.** On the DSE the reason is stronger than Dow's: a band-locked heavyweight prints an intraday extreme that is an administrative fact.
4. **Reading two textbook secondary retracements as safety.** $R_1 = 43.02\\%$ and $R_2 = 45.68\\%$ both land inside the 33.3–66.7 band, B23 returns 1, and the price structure is flawless — **at the exact moment the breadth score is 0 of 3 and the top three names supply 124.44% of the move.** Price structure is not the market. This example is built specifically to make you feel the pull of that error.
5. **Running the rules across a floor-price window.** When a regulator sets a price below which shares cannot trade, tenet 1 is suspended: price discounts nothing, volume collapses, and the close is an administrative number. **Every swing-based cell from B12 to B56 returns garbage, and it returns it confidently.** Mark the period and exclude it, exactly as Chapter 2 required for limit-locked bars.
6. **Ignoring a concentration reading above 100%.** B47 = 124.44% is not a spreadsheet error. It means the top three added 112 points while everything else subtracted 22 (B46 = **−22**). **Tenet 1 presumes the average is an average**; at that concentration DSEX at 6,510 is three companies' news, not a market's verdict.
7. **Promising that Dow Theory protects capital.** B54 is **7.60%** below the peak, which is **35.61% of the entire 1,390-point primary advance.** The method waits for proof and proof is expensive. Sell it as a timing system and the first drawdown destroys the client's trust in everything else you do — **quote the 7.60% up front and it becomes a feature, not a betrayal.**
8. **Trading the reversal signal short.** A confirmed primary downtrend on the DSE means **exit and stand aside**, not sell short. Half the classical literature assumes a functioning borrow that retail here does not have, and importing its conclusions unexamined produces advice nobody can act on.`,
      bn: `১. **DS30 DSEX-কে নিশ্চিত করাকে ডাও-এর নীতি ৪ গণ্য করা।** DS30 হলো DSEX *থেকে* বাছাই করা বড় মূলধন; এরা একমত হলে তা কিছুই প্রমাণ করে না, কারণ এরা মূলত একই সিকিউরিটি। ডাও উৎপাদককে পরিবহনকারীর সঙ্গে জুড়েছিলেন — **এক অর্থনীতির নলব্যবস্থার ভিন্ন বিন্দুতে দুটি মাপ।** ডিএসই-তে এমন কাজ করে এমন কোনো তালিকাভুক্ত মালবাহী গড় নেই, আর সৎ ফলাফল হলো **নীতি ৪ খাটে না।** ওভারল্যাপকে "নিশ্চিতকরণ" বলা মিথ্যা স্বস্তি তৈরি করে, যা কোনো পরীক্ষা না থাকার চেয়েও খারাপ।
২. **INDETERMINATE ফেরত দিতে অস্বীকার করা।** B14-এর তিনটি শাখা আছে আর তৃতীয়টির অস্তিত্বের কারণ আছে। *নিম্নতর* নিম্নসহ উচ্চতর উচ্চতা দুর্বল আপট্রেন্ড নয় — ট্রেন্ডই নয়। উদাহরণে B12 = ১ ও B13 = ১, তাই UPTREND অর্জিত; B13 ০ ফিরলে সঠিক ফলাফল "আমি জানি না" আর সঠিক পজিশনের আকার শূন্য। **যে কাঠামো সবসময় একটি মতামত তৈরি করে তা রাশিফল।**
৩. **ক্লোজের বদলে ইন্ট্রাডে উচ্চ ও নিম্ন ব্যবহার করা।** এই অধ্যায়ের প্রতিটি সংখ্যা একটি ক্লোজ, নীতি ৬ অনুযায়ী। ইন্ট্রাডে উচ্চতা ব্যবহার করুন আর ব্যর্থ র‍্যালি ৬,৪৫৫-এর বদলে এমন কোনো উঁচু লাফ হয়ে দাঁড়াবে যা কখনো স্থির হয়নি, B51 ০-তে উল্টে যাবে, আর **গোটা রিভার্সাল সংকেতটিই উধাও হবে।** ডিএসই-তে কারণটি ডাও-এর চেয়েও জোরালো: ব্যান্ডে আটকে থাকা ভারী শেয়ার এমন ইন্ট্রাডে চরম মান ছাপে যা প্রশাসনিক ঘটনা।
৪. **দুটি পাঠ্যবইসুলভ সেকেন্ডারি রিট্রেসমেন্টকে নিরাপত্তা হিসেবে পড়া।** $R_1 = 43.02\\%$ ও $R_2 = 45.68\\%$ দুটোই ৩৩.৩–৬৬.৭ ব্যান্ডে নামে, B23 ফেরত দেয় ১, আর দামের কাঠামো নিখুঁত — **ঠিক সেই মুহূর্তে যখন ব্রেডথ স্কোর ৩-এ ০ আর শীর্ষ তিন নাম চলনের ১২৪.৪৪% সরবরাহ করছে।** দামের কাঠামোই বাজার নয়। এই উদাহরণটি বিশেষভাবেই গড়া যাতে আপনি ঐ ভুলের টান অনুভব করেন।
৫. **ফ্লোর-প্রাইসের সময়কালজুড়ে নিয়মগুলো চালানো।** নিয়ন্ত্রক যখন এমন দাম বেঁধে দেন যার নিচে শেয়ার লেনদেন হতে পারে না, নীতি ১ স্থগিত: দাম কিছুই ছাড় দেয় না, ভলিউম ধসে যায়, আর ক্লোজ একটি প্রশাসনিক সংখ্যা। **B12 থেকে B56 পর্যন্ত প্রতিটি সুইং-ভিত্তিক সেল আবর্জনা ফেরত দেয়, আর আত্মবিশ্বাসের সঙ্গে দেয়।** সময়কালটি চিহ্নিত করে বাদ দিন, ঠিক যেমন অধ্যায় ২ লিমিট-লকড বারের জন্য দাবি করেছিল।
৬. **১০০%-এর ওপরে কেন্দ্রীভবনের পাঠ উপেক্ষা করা।** B47 = ১২৪.৪৪% কোনো স্প্রেডশিট ভুল নয়। এর মানে শীর্ষ তিন ১১২ পয়েন্ট যোগ করেছে যখন বাকি সব ২২ বিয়োগ করেছে (B46 = **−২২**)। **নীতি ১ ধরে নেয় গড়টি একটি গড়**; ঐ কেন্দ্রীভবনে ৬,৫১০-এ DSEX তিনটি কোম্পানির খবর, বাজারের রায় নয়।
৭. **ডাও তত্ত্ব মূলধন রক্ষা করে বলে প্রতিশ্রুতি দেওয়া।** B54 চূড়ার **৭.৬০%** নিচে, যা গোটা ১,৩৯০-পয়েন্ট প্রাইমারি উত্থানের **৩৫.৬১%।** পদ্ধতিটি প্রমাণের অপেক্ষা করে আর প্রমাণ ব্যয়বহুল। একে টাইমিং সিস্টেম হিসেবে বেচুন আর প্রথম পতনেই আপনার বাকি সব কাজের প্রতি ক্লায়েন্টের আস্থা ধ্বংস হবে — **৭.৬০% আগেভাগে বলুন আর তা বিশ্বাসঘাতকতা নয়, একটি বৈশিষ্ট্য হয়ে যাবে।**
৮. **রিভার্সাল সংকেতে শর্ট ট্রেড করা।** ডিএসই-তে নিশ্চিত প্রাইমারি ডাউনট্রেন্ডের মানে **বেরিয়ে এসে সরে দাঁড়ানো**, শর্ট বিক্রি নয়। ধ্রুপদী সাহিত্যের অর্ধেক এমন কার্যকর ধার-ব্যবস্থা ধরে নেয় যা এখানে খুচরা বিনিয়োগকারীর নেই, আর তার উপসংহার যাচাই ছাড়া আমদানি করলে এমন পরামর্শ তৈরি হয় যা কেউ কাজে লাগাতে পারে না।`,
    },

    tips: {
      en: `1. **Write your thresholds down before you open the chart, and never during a session.** $m = 10$ for swing detection, 33.3–66.7 for secondary retracement, 25 sessions for the confirmation window, 1.15 for volume. A threshold chosen after seeing the data is not a threshold, it is a rationalisation.
2. **Re-run the swing detection at $m = 8$ and $m = 12$ every single time.** If the primary classification flips, report INDETERMINATE and size at zero. **This is the cheapest honest test in the chapter and the most reliably skipped.**
3. **Log the swings as a table, not as lines on a chart.** Eight numbers — T0 through the latest close — drive every cell from B12 to B56. A table can be audited, disputed and backtested; a drawn line is a memory of what you felt that afternoon.
4. **Compute the leg ratio even though the sheet has no cell for it.** $860 \\to 810 \\to 460$ gives $\\Lambda_3 = 56.8\\%$ while the reactions stayed at −370 both times. **Shrinking advances against constant declines is tenet 5 expressed in points, and it costs nothing.**
5. **Read the breadth panel at every new index high, within 25 sessions of it.** Not monthly, not when you remember. The panel's entire value is that it speaks at the high — **it scored 0 of 3 at 6,510, which is 495 points above where tenet 6 finally confirmed.**
6. **Trust $\\Psi$ — the percentage above the 50-day average — above the cumulative A/D line.** $\\Psi$ is recomputed from scratch daily and has no memory. The A/D line inherits every listing, suspension and data error permanently, and the DSE supplies all three.
7. **Treat breadth as graduated, not binary.** 3 of 3: normal sizing. 2 of 3: no new risk. 1 of 3: tighten and stop adding. 0 of 3: reduce. **Breadth can decay for months while the index grinds higher, and selling every narrow rally is its own losing strategy.**
8. **Decompose the last leg by contributor before you believe the index.** If the top three supplied more than half the points, the index is telling you about a few companies. At B47 = 124.44% it is telling you about three, and the rest of the market fell.
9. **Flag floor-price windows, market-wide halts and band-locked sessions in a dedicated column, and exclude them before anything else runs.** The dashboard has no cell for this, which is the sheet's most important defect — **build it yourself as column E.**
10. **Quote your signal lag before anyone asks.** 7.60% from the peak, 35.61% of the advance. **A method that will not state its own lateness is being sold rather than explained.**
11. **Use Dow as a regime classifier and let Chapters 26–41 handle entry inside the regime.** It answers "what kind of market am I in?" — which is precisely the question that decides whether your breakout system or your mean-reversion system is the appropriate tool this quarter.
12. **On a confirmed downside reversal, the instruction is cash.** No reliable retail borrow means the only executable expression of a bearish regime is not being long. Say it plainly to clients rather than implying a short they cannot put on.`,
      bn: `১. **চার্ট খোলার আগেই আপনার সীমাগুলো লিখে রাখুন, আর কখনো সেশনের মাঝে নয়।** সুইং শনাক্তকরণে $m = 10$, সেকেন্ডারি রিট্রেসমেন্টে ৩৩.৩–৬৬.৭, নিশ্চিতকরণ জানালায় ২৫ সেশন, ভলিউমে ১.১৫। উপাত্ত দেখার পর বেছে নেওয়া সীমা সীমা নয়, যুক্তিসাজানো।
২. **প্রতিবারই $m = 8$ ও $m = 12$-এ সুইং শনাক্তকরণ আবার চালান।** প্রাইমারি শ্রেণিবিন্যাস উল্টে গেলে INDETERMINATE জানান ও আকার শূন্য রাখুন। **এটি অধ্যায়ের সবচেয়ে সস্তা সৎ পরীক্ষা আর সবচেয়ে নিয়মিতভাবে এড়ানো পরীক্ষা।**
৩. **সুইংগুলো চার্টের রেখা হিসেবে নয়, একটি টেবিল হিসেবে লিপিবদ্ধ করুন।** আটটি সংখ্যা — T0 থেকে সর্বশেষ ক্লোজ — B12 থেকে B56 পর্যন্ত প্রতিটি সেল চালায়। টেবিল নিরীক্ষা, বিতর্ক ও ব্যাকটেস্ট করা যায়; আঁকা রেখা ঐ বিকেলে আপনার অনুভূতির স্মৃতি।
৪. **শিটে সেল না থাকা সত্ত্বেও ধাপের অনুপাত গণনা করুন।** $860 \\to 810 \\to 460$ দেয় $\\Lambda_3 = 56.8\\%$ যখন প্রতিক্রিয়া দুবারই −৩৭০ ছিল। **অপরিবর্তিত পতনের বিপরীতে ছোট হতে থাকা উত্থান পয়েন্টে প্রকাশিত নীতি ৫, আর তা গণনা করতে কিছু লাগে না।**
৫. **প্রতিটি নতুন সূচক উচ্চতায়, তার ২৫ সেশনের মধ্যে ব্রেডথ প্যানেল পড়ুন।** মাসিক নয়, মনে পড়লে নয়। প্যানেলের পুরো মূল্যই এই যে তা উচ্চতাতেই কথা বলে — **৬,৫১০-এ এটি ৩-এ ০ স্কোর করেছিল, যা নীতি ৬ যেখানে শেষমেশ নিশ্চিত করেছে তার ৪৯৫ পয়েন্ট ওপরে।**
৬. **ক্রমপুঞ্জিত A/D লাইনের চেয়ে $\\Psi$ — ৫০-দিনের গড়ের ওপরে থাকা শতাংশ — বেশি বিশ্বাস করুন।** $\\Psi$ প্রতিদিন শূন্য থেকে পুনর্গণিত ও তার কোনো স্মৃতি নেই। A/D লাইন প্রতিটি তালিকাভুক্তি, স্থগিতাদেশ ও উপাত্ত-ভুল স্থায়ীভাবে উত্তরাধিকারসূত্রে পায়, আর ডিএসই তিনটিই সরবরাহ করে।
৭. **ব্রেডথকে দ্বিমুখী নয়, স্তরভিত্তিক গণ্য করুন।** ৩-এ ৩: স্বাভাবিক সাইজিং। ৩-এ ২: নতুন ঝুঁকি নয়। ৩-এ ১: শক্ত করুন ও যোগ বন্ধ। ৩-এ ০: কমান। **ব্রেডথ মাসের পর মাস ক্ষয়ে যেতে পারে যখন সূচক ঘষটে ওঠে, আর প্রতিটি সংকীর্ণ র‍্যালিতে বিক্রি করা নিজেই একটি লোকসানি কৌশল।**
৮. **সূচকে বিশ্বাস করার আগে শেষ ধাপটি অবদানকারী অনুযায়ী ভেঙে দেখুন।** শীর্ষ তিন যদি অর্ধেকের বেশি পয়েন্ট দেয়, সূচক আপনাকে কয়েকটি কোম্পানির কথা বলছে। B47 = ১২৪.৪৪%-এ তা তিনটির কথা বলছে, আর বাকি বাজার পড়েছে।
৯. **ফ্লোর-প্রাইসের সময়কাল, বাজারব্যাপী হল্ট ও ব্যান্ড-লকড সেশন একটি আলাদা কলামে চিহ্নিত করুন, আর অন্য কিছু চলার আগেই বাদ দিন।** ড্যাশবোর্ডে এর কোনো সেল নেই, যা শিটের সবচেয়ে গুরুত্বপূর্ণ ত্রুটি — **নিজেই কলাম E হিসেবে গড়ুন।**
১০. **কেউ জিজ্ঞেস করার আগেই আপনার সংকেতের দেরি জানান।** চূড়া থেকে ৭.৬০%, উত্থানের ৩৫.৬১%। **যে পদ্ধতি নিজের দেরি বলতে চায় না, তা ব্যাখ্যা করা হচ্ছে না, বিক্রি করা হচ্ছে।**
১১. **ডাও-কে রেজিম শ্রেণিবিন্যাসকারী হিসেবে ব্যবহার করুন আর রেজিমের ভেতরে প্রবেশ সামলাক অধ্যায় ২৬–৪১।** এটি উত্তর দেয় "আমি কী ধরনের বাজারে আছি?" — আর ঠিক এই প্রশ্নই ঠিক করে এই ত্রৈমাসিকে আপনার ব্রেকআউট সিস্টেম না মিন-রিভার্সন সিস্টেম উপযুক্ত হাতিয়ার।
১২. **নিশ্চিত নিম্নমুখী রিভার্সালে নির্দেশ হলো নগদ।** নির্ভরযোগ্য খুচরা ধার-ব্যবস্থা না থাকার মানে মন্দা রেজিমের একমাত্র বাস্তবায়নযোগ্য প্রকাশ হলো লং না থাকা। ক্লায়েন্টকে সরাসরি বলুন, তাঁরা যে শর্ট নিতে পারবেন না তা ইঙ্গিত করবেন না।`,
    },

    exercises: {
      en: `1. Build the §42.6 dashboard from B2:B9 and confirm the following exactly: B12 = 1, B13 = 1, B14 = UPTREND, B19 = 43.02, B22 = 45.68, B23 = 1, B41 = 0, B47 = 124.44, B53 = 1, B54 = 7.60, and B56 reading "REVERSAL — primary uptrend assumption abandoned."
2. Change B9 from 6,015 to 6,080 — above T2 at 6,050. Which cell flips first, and what does B56 now return? Explain in one sentence why the failed high at 6,455 alone was not enough.
3. Change B8 from 6,455 to 6,540 so the rally *exceeds* the prior peak. Recompute B51, B53 and B56. **You now have a broken low without a failed high — argue whether the classical rule is right to call that a secondary reaction rather than a reversal.**
4. Delete the AND in B53 so the reversal fires on B52 alone. Backtest that variant against ten years of any index you can source. How many additional signals does it generate, and what fraction of them were followed by a genuine primary downtrend?
5. Recompute the swing points with $m = 8$ and $m = 12$ instead of 10. Does B14 change? If it does on your own data, what is the correct output and the correct position size?
6. Add a cell computing the leg ratio $\\Lambda_3 = 460/810$. Then find three historical index advances where $\\Lambda$ fell below 60% and check what happened in the following quarter. Is it a warning or noise?
7. Set D30 to 1,750 so the A/D line makes a new high. Recompute B38 and B41. At a breadth score of 1 of 3, what does the §42.3 action table instruct, and how does that differ from what B56 says?
8. Compute B47 for the reverse case: the index gains 90 points and the top three contribute only 30. What is $\\kappa$, and under the rule 8 classification is that BROAD or CONCENTRATED?
9. Take DSEX and DS30 over any three-year window you can obtain and count the sessions on which one made a new high and the other did not within 25 sessions. **Then argue from your own count whether these two series can serve as Dow's confirmation pair, and what your count actually measures if they cannot.**
10. Identify a floor-price window in DSE history. Run B12 through B56 across it anyway. Write down, in two sentences, exactly which cells return confidently wrong answers and why a user would not notice.
11. Your reversal signal fires at a 7.60% lag. Compute what the lag would have been if the rule required only the failed high, and then only the broken low. **Rank the three rules by lag and by false-signal rate, and state which trade-off you are choosing and why.**
12. Write down, in three sentences, what the breadth panel is *not*: specifically, why it is not Dow's tenet 4 and what claim you would be making falsely if you called it that. Keep it pinned to the sheet.`,
      bn: `১. B2:B9 থেকে §৪২.৬ ড্যাশবোর্ড তৈরি করুন ও নিচেরগুলো হুবহু নিশ্চিত করুন: B12 = ১, B13 = ১, B14 = UPTREND, B19 = ৪৩.০২, B22 = ৪৫.৬৮, B23 = ১, B41 = ০, B47 = ১২৪.৪৪, B53 = ১, B54 = ৭.৬০, আর B56 পড়ছে "REVERSAL — primary uptrend assumption abandoned"।
২. B9 ৬,০১৫ থেকে ৬,০৮০ করুন — ৬,০৫০-এ T2-র ওপরে। কোন সেলটি প্রথমে উল্টায়, আর B56 এখন কী ফেরত দেয়? এক বাক্যে ব্যাখ্যা করুন ৬,৪৫৫-এর ব্যর্থ উচ্চতা একা কেন যথেষ্ট ছিল না।
৩. B8 ৬,৪৫৫ থেকে ৬,৫৪০ করুন যাতে র‍্যালি আগের চূড়া *ছাড়িয়ে* যায়। B51, B53 ও B56 পুনর্গণনা করুন। **এখন আপনার হাতে ব্যর্থ উচ্চতা ছাড়া ভাঙা নিম্ন — যুক্তি দিন ধ্রুপদী নিয়ম একে রিভার্সাল নয়, সেকেন্ডারি প্রতিক্রিয়া বলে ঠিক করছে কি না।**
৪. B53 থেকে AND মুছুন যাতে রিভার্সাল কেবল B52-তেই জ্বলে। যেকোনো সূচকের দশ বছরের উপাত্তে ঐ সংস্করণ ব্যাকটেস্ট করুন। এটি কতগুলো বাড়তি সংকেত তৈরি করে, আর তার কত অংশের পরে সত্যিকার প্রাইমারি ডাউনট্রেন্ড এসেছিল?
৫. ১০-এর বদলে $m = 8$ ও $m = 12$ দিয়ে সুইং পয়েন্ট পুনর্গণনা করুন। B14 কি বদলায়? আপনার নিজের উপাত্তে বদলালে সঠিক ফলাফল ও সঠিক পজিশনের আকার কী?
৬. ধাপের অনুপাত $\\Lambda_3 = 460/810$ গণনা করে একটি সেল যোগ করুন। তারপর তিনটি ঐতিহাসিক সূচক-উত্থান খুঁজুন যেখানে $\\Lambda$ ৬০%-এর নিচে নেমেছিল এবং পরবর্তী ত্রৈমাসিকে কী হয়েছিল দেখুন। এটি সতর্কবার্তা না গোলমাল?
৭. D30 ১,৭৫০ করুন যাতে A/D লাইন নতুন উচ্চতা করে। B38 ও B41 পুনর্গণনা করুন। ৩-এ ১ ব্রেডথ স্কোরে §৪২.৩-এর কর্ম-তালিকা কী নির্দেশ দেয়, আর B56 যা বলে তা থেকে তা কীভাবে আলাদা?
৮. উল্টো ক্ষেত্রের জন্য B47 গণনা করুন: সূচক ৯০ পয়েন্ট বাড়ে আর শীর্ষ তিন দেয় মাত্র ৩০। $\\kappa$ কত, আর নিয়ম ৮-এর শ্রেণিবিন্যাসে তা BROAD না CONCENTRATED?
৯. যেকোনো তিন বছরের জানালায় DSEX ও DS30 নিন আর সেই সেশনগুলো গুনুন যেখানে একটি নতুন উচ্চতা করেছে ও অন্যটি ২৫ সেশনের মধ্যে করেনি। **তারপর নিজের গণনা থেকে যুক্তি দিন এই দুটি সিরিজ ডাও-এর নিশ্চিতকরণ জোড়া হতে পারে কি না, আর না পারলে আপনার গণনা আসলে কী মাপছে।**
১০. ডিএসই-র ইতিহাসে একটি ফ্লোর-প্রাইস সময়কাল চিহ্নিত করুন। তবু B12 থেকে B56 তার ওপর চালান। দুই বাক্যে লিখুন ঠিক কোন সেলগুলো আত্মবিশ্বাসের সঙ্গে ভুল উত্তর দেয় ও কেন ব্যবহারকারী তা টের পাবেন না।
১১. আপনার রিভার্সাল সংকেত ৭.৬০% দেরিতে জ্বলে। গণনা করুন নিয়মটি কেবল ব্যর্থ উচ্চতা, আর তারপর কেবল ভাঙা নিম্ন দাবি করলে দেরি কত হতো। **তিনটি নিয়মকে দেরি ও ভুয়া-সংকেতের হার অনুযায়ী সাজান, আর বলুন আপনি কোন বিনিময়টি বেছে নিচ্ছেন ও কেন।**
১২. তিন বাক্যে লিখুন ব্রেডথ প্যানেল যা *নয়*: বিশেষভাবে, কেন তা ডাও-এর নীতি ৪ নয় ও একে তা বললে আপনি মিথ্যাভাবে কোন দাবিটি করতেন। শিটের সঙ্গে গেঁথে রাখুন।`,
    },

    summary: {
      en: `- **Dow Theory is the foundation Chapters 26–41 were already standing on.** Support, trendlines, moving averages and breakout systems all assume price moves in persistent runs punctuated by counter-moves, with volume distinguishing them. **Dow said that first, and everything since is a special case.**
- **Prose is not a method; thresholds are.** The chapter converts six tenets into ten numbered rules with committed parameters — $m = 10$ for swings, 33.3–66.7% for secondary retracement, 25 sessions for confirmation, $\\Phi \\ge 1.15$ for volume. **A framework that cannot be wrong cannot be used, and the value of Dow is the discipline of the definition, not prophecy.**
- **The primary trend is two comparisons, not an opinion:** $P_3 = 6{,}510 > P_2 = 6{,}420$ and $T_2 = 6{,}050 > T_1 = 5{,}610$ give **UPTREND** at B14. The third branch, **INDETERMINATE, is a legitimate final answer**, and refusing to return it is the most common misuse of the framework.
- **Both secondary reactions were textbook:** $R_1 = 370/860 = \\textbf{43.02\\%}$ and $R_2 = 370/810 = \\textbf{45.68\\%}$, both inside the one-third to two-thirds band, B23 = 1. **The price structure was flawless at the exact moment the market beneath it was failing — which is the entire lesson of the worked case.**
- **Tenet 4 does not port to Bangladesh, and saying otherwise is dishonest.** Dow paired Industrials with Rails because factories produce and railways ship — two measurements of one economy. **DS30 is the large-cap selection from DSEX and DSES is a Shariah subset of the same universe**; confirmation between them is a near-tautology in a lab coat. No listed freight average exists here to replace them.
- **Breadth is the declared substitute, and it is a narrower question than Dow's.** At the 6,510 high the A/D line was 235 short of its P2 peak, new highs minus lows read **−24**, and the share above the 50-day average had fallen **29.9 points to 38.5** while the index rose **8.86%.** **BREADTH SCORE = 0 of 3.**
- **Concentration above 100% is the finding, not an error.** The last 90 index points came from **+112 from three heavyweights and −22 from everything else**, so $\\kappa = \\textbf{124.44\\%}$. **Tenet 1 presumes the average is an average; DSEX at 6,510 was three companies' news wearing the index's clothes.**
- **The reversal rule is a conjunction, in order:** a failed primary high (6,455 against 6,510, just **0.84% short**) *and then* a break of the prior secondary low (6,015 below 6,050). Either alone is a pause or an ordinary correction. **The conjunction is what makes it evidence, and it is also why it is late.**
- **Quantify the lateness or you are selling something.** The signal fires **7.60% below the peak**, having surrendered **35.61% of the entire 1,390-point primary advance.** Dow tells you the trend was real; **it does not get you in early and was never intended to.**
- **The breadth warning arrived 495 points before the confirmation** — 0 of 3 at 6,510 versus reversal at 6,015 — which is the whole practical case for building the panel. But **breadth is a warning, not a signal**: it can decay for months, so use the graduated table (3 = normal, 2 = no new risk, 1 = tighten, 0 = reduce) rather than treating zero as a sell.
- **Four DSE conditions switch the rules off entirely:** floor-price windows suspend tenet 1 and every swing cell returns confident garbage; market-wide halts make the close a stopping point rather than a settlement; band-locked heavyweights print administrative extremes; and a shifting listing universe corrupts the cumulative A/D line permanently — **prefer $\\Psi$, which is recomputed daily and has no memory.**
- **On a confirmed downside reversal the instruction is cash, not short.** With no reliable retail borrow, half the classical Dow literature resolves here to **exit and stand aside** — and Chapter 43 takes tenet 3's phase structure fractal, inheriting every falsifiability problem in a sharper form.`,
      bn: `- **ডাও তত্ত্বই সেই ভিত্তি যার ওপর অধ্যায় ২৬–৪১ আগে থেকেই দাঁড়িয়ে ছিল।** সাপোর্ট, ট্রেন্ডলাইন, মুভিং অ্যাভারেজ ও ব্রেকআউট সিস্টেম — সবই ধরে নেয় দাম স্থায়ী ধারায় চলে যা বিপরীত চলনে ছেদ পড়ে, আর ভলিউম দুটিকে আলাদা করে। **ডাও তা প্রথম বলেছিলেন, আর তারপর সবকিছুই এর বিশেষ ক্ষেত্র।**
- **গদ্য কোনো পদ্ধতি নয়; সীমা পদ্ধতি।** অধ্যায়টি ছয়টি নীতিকে প্রতিশ্রুত প্যারামিটারসহ দশটি সংখ্যাযুক্ত নিয়মে রূপান্তরিত করে — সুইংয়ে $m = 10$, সেকেন্ডারি রিট্রেসমেন্টে ৩৩.৩–৬৬.৭%, নিশ্চিতকরণে ২৫ সেশন, ভলিউমে $\\Phi \\ge 1.15$। **যে কাঠামো ভুল হতে পারে না তা ব্যবহারও করা যায় না, আর ডাও-এর মূল্য সংজ্ঞার শৃঙ্খলায়, ভবিষ্যদ্বাণীতে নয়।**
- **প্রাইমারি ট্রেন্ড দুটি তুলনা, কোনো মতামত নয়:** $P_3 = 6{,}510 > P_2 = 6{,}420$ ও $T_2 = 6{,}050 > T_1 = 5{,}610$ দেয় B14-তে **UPTREND**। তৃতীয় শাখা, **INDETERMINATE, একটি বৈধ চূড়ান্ত উত্তর**, আর তা ফেরত দিতে অস্বীকার করাই কাঠামোটির সবচেয়ে সাধারণ অপব্যবহার।
- **দুটি সেকেন্ডারি প্রতিক্রিয়াই পাঠ্যবইসুলভ ছিল:** $R_1 = 370/860 = \\textbf{43.02\\%}$ ও $R_2 = 370/810 = \\textbf{45.68\\%}$, দুটোই এক-তৃতীয়াংশ থেকে দুই-তৃতীয়াংশ ব্যান্ডে, B23 = ১। **দামের কাঠামো নিখুঁত ছিল ঠিক সেই মুহূর্তে যখন তার নিচের বাজার ভেঙে পড়ছিল — আর এটিই উদাহরণটির পুরো শিক্ষা।**
- **নীতি ৪ বাংলাদেশে খাটে না, আর অন্য কিছু বলা অসৎ।** ডাও ইন্ডাস্ট্রিয়ালকে রেলের সঙ্গে জুড়েছিলেন কারণ কারখানা উৎপাদন করে ও রেল পরিবহন করে — এক অর্থনীতির দুটি মাপ। **DS30 হলো DSEX থেকে বাছাই করা বড় মূলধন আর DSES একই নমুনার শরিয়াহ উপসেট**; এদের মধ্যে নিশ্চিতকরণ ল্যাব কোট পরা প্রায়-স্বতঃসিদ্ধ। এদের বদলে বসানোর মতো কোনো তালিকাভুক্ত মালবাহী গড় এখানে নেই।
- **ব্রেডথ হলো ঘোষিত বিকল্প, আর তা ডাও-এর চেয়ে সংকীর্ণতর প্রশ্ন।** ৬,৫১০ উচ্চতায় A/D লাইন তার P2 চূড়া থেকে ২৩৫ কম ছিল, নতুন উচ্চতা বিয়োগ নিম্ন পড়েছিল **−২৪**, আর ৫০-দিনের গড়ের ওপরে থাকা অংশ **২৯.৯ পয়েন্ট পড়ে ৩৮.৫** হয়েছিল যখন সূচক **৮.৮৬%** উঠেছিল। **ব্রেডথ স্কোর = ৩-এ ০।**
- **১০০%-এর ওপরে কেন্দ্রীভবন আবিষ্কার, ভুল নয়।** শেষ ৯০ সূচক-পয়েন্ট এসেছে **তিনটি ভারী শেয়ার থেকে +১১২ আর বাকি সব থেকে −২২**, তাই $\\kappa = \\textbf{124.44\\%}$। **নীতি ১ ধরে নেয় গড়টি একটি গড়; ৬,৫১০-এ DSEX ছিল সূচকের পোশাক পরা তিনটি কোম্পানির খবর।**
- **রিভার্সাল নিয়ম একটি যোজক, ক্রমসহ:** একটি ব্যর্থ প্রাইমারি উচ্চতা (৬,৫১০-এর বিপরীতে ৬,৪৫৫, মাত্র **০.৮৪% কম**) *আর তারপর* পূর্ববর্তী সেকেন্ডারি নিম্ন ভাঙা (৬,০৫০-এর নিচে ৬,০১৫)। যেকোনো একটি একা একটি বিরতি বা সাধারণ সংশোধন। **যোজকটিই একে প্রমাণ বানায়, আর সেজন্যই এটি দেরি করে।**
- **দেরিটা সংখ্যায় বলুন, নইলে আপনি কিছু একটা বিক্রি করছেন।** সংকেত জ্বলে **চূড়ার ৭.৬০% নিচে**, ততক্ষণে গোটা ১,৩৯০-পয়েন্ট প্রাইমারি উত্থানের **৩৫.৬১% ছেড়ে দিয়ে।** ডাও বলে ট্রেন্ডটি বাস্তব ছিল; **এটি আপনাকে আগেভাগে ঢোকায় না আর কখনো তা করার কথাও ছিল না।**
- **ব্রেডথের সতর্কবার্তা নিশ্চিতকরণের ৪৯৫ পয়েন্ট আগে এসেছিল** — ৬,৫১০-এ ৩-এ ০ বনাম ৬,০১৫-এ রিভার্সাল — আর প্যানেলটি গড়ার পুরো ব্যবহারিক যুক্তি এটিই। কিন্তু **ব্রেডথ একটি সতর্কবার্তা, সংকেত নয়**: এটি মাসের পর মাস ক্ষয়ে যেতে পারে, তাই শূন্যকে বিক্রির নির্দেশ গণ্য না করে স্তরভিত্তিক তালিকা ব্যবহার করুন (৩ = স্বাভাবিক, ২ = নতুন ঝুঁকি নয়, ১ = শক্ত করুন, ০ = কমান)।
- **চারটি ডিএসই অবস্থা নিয়মগুলো সম্পূর্ণ বন্ধ করে দেয়:** ফ্লোর-প্রাইসের সময়কাল নীতি ১ স্থগিত করে আর প্রতিটি সুইং সেল আত্মবিশ্বাসী আবর্জনা ফেরত দেয়; বাজারব্যাপী হল্ট ক্লোজকে নিষ্পত্তি নয়, থেমে যাওয়ার বিন্দু বানায়; ব্যান্ড-লকড ভারী শেয়ার প্রশাসনিক চরম মান ছাপে; আর বদলাতে থাকা তালিকাভুক্তির নমুনা ক্রমপুঞ্জিত A/D লাইনকে স্থায়ীভাবে নষ্ট করে — **$\\Psi$ পছন্দ করুন, যা প্রতিদিন পুনর্গণিত ও যার কোনো স্মৃতি নেই।**
- **নিশ্চিত নিম্নমুখী রিভার্সালে নির্দেশ নগদ, শর্ট নয়।** নির্ভরযোগ্য খুচরা ধার-ব্যবস্থা না থাকায় ধ্রুপদী ডাও সাহিত্যের অর্ধেক এখানে দাঁড়ায় **বেরিয়ে এসে সরে দাঁড়ানোয়** — আর অধ্যায় ৪৩ নীতি ৩-এর পর্যায় কাঠামোকে ফ্র্যাক্টাল করে, প্রতিটি খণ্ডনযোগ্যতার সমস্যা আরও তীক্ষ্ণ রূপে উত্তরাধিকারসূত্রে নিয়ে।`,
    },
/*BLOCKS*/
  },

  interview: [
    {
      q: {
        en: 'Dow requires the averages to confirm one another. How do you apply that on the DSE?',
        bn: 'ডাও দাবি করেন গড়সমূহ পরস্পরকে নিশ্চিত করুক। ডিএসই-তে আপনি তা কীভাবে প্রয়োগ করেন?',
      },
      a: {
        en: 'I do not, and I think the honest answer is to say so rather than to improvise a local version and call it Dow. His pairing was economically grounded: industrials produced goods and railways shipped them, so the two averages were measuring the same economy at two different points in its plumbing, and a rising industrial average the rails would not confirm meant physical output was not actually moving. Now look at what we have. DS30 is the large-cap selection taken from DSEX, so asking whether it confirms DSEX is asking whether a set agrees with its own subset — divergence between them is a size effect, not an economic signal. DSES is the Shariah-screened subset of the same universe, which is the same problem with a different screen. The banking sector index is the least bad candidate because banks fund everything else, but the transmission is slow and unstable and bank prices here move on rescheduling circulars and rate caps at least as much as on the real economy. There is no listed freight or logistics average in Bangladesh standing in a physical relationship to a listed production average, so the pairing that made tenet four meaningful simply does not exist. What I do instead is substitute breadth, and I label it as a substitute every time — I ask whether the index is representative of its own constituents rather than whether two economically linked measures agree. That is a genuinely narrower question, and calling it Dow confirmation would be exactly the intellectual laundering I am trying to avoid.',
        bn: 'আমি করি না, আর আমার মনে হয় সৎ উত্তর হলো সেটাই বলা, স্থানীয় একটি সংস্করণ বানিয়ে তাকে ডাও না বলা। তাঁর জোড়াটি ছিল অর্থনৈতিকভাবে ভিত্তিমূলক: ইন্ডাস্ট্রিয়ালরা পণ্য উৎপাদন করত আর রেলপথ তা পরিবহন করত, তাই দুটি গড় একই অর্থনীতিকে তার নলব্যবস্থার দুটি ভিন্ন বিন্দুতে মাপত, আর রেল যে ইন্ডাস্ট্রিয়াল গড়ের উত্থান নিশ্চিত করত না তার মানে ভৌত উৎপাদন আসলে নড়ছিল না। এবার দেখুন আমাদের কী আছে। DS30 হলো DSEX থেকে নেওয়া বড় মূলধনের বাছাই, তাই তা DSEX-কে নিশ্চিত করছে কি না জিজ্ঞেস করা মানে একটি সেট তার নিজেরই উপসেটের সঙ্গে একমত কি না জিজ্ঞেস করা — এদের মধ্যে বিচ্যুতি আকারের প্রভাব, অর্থনৈতিক সংকেত নয়। DSES একই নমুনার শরিয়াহ-ছাঁকনি করা উপসেট, যা ভিন্ন ছাঁকনিতে একই সমস্যা। ব্যাংকিং খাত সূচক সবচেয়ে কম খারাপ প্রার্থী কারণ ব্যাংক বাকি সবকিছুতে অর্থায়ন করে, কিন্তু সঞ্চালন ধীর ও অস্থিতিশীল আর এখানে ব্যাংকের দাম পুনঃতফসিল সার্কুলার ও সুদহারের সীমায় অন্তত ততটাই নড়ে যতটা প্রকৃত অর্থনীতিতে। বাংলাদেশে তালিকাভুক্ত এমন কোনো মালবাহী বা লজিস্টিকস গড় নেই যা তালিকাভুক্ত কোনো উৎপাদন গড়ের সঙ্গে ভৌত সম্পর্কে দাঁড়িয়ে আছে, তাই যে জোড়া নীতি চারকে অর্থবহ করেছিল তা সোজা কথায় নেই। বদলে আমি ব্রেডথ বসাই, আর প্রতিবারই একে বিকল্প বলে চিহ্নিত করি — আমি জিজ্ঞেস করি সূচকটি তার নিজের উপাদানের প্রতিনিধিত্ব করে কি না, দুটি অর্থনৈতিকভাবে যুক্ত পরিমাপ একমত কি না তা নয়। এটি সত্যিই সংকীর্ণতর প্রশ্ন, আর একে ডাও নিশ্চিতকরণ বলা হতো ঠিক সেই বৌদ্ধিক ধোপদুরস্তকরণ যা আমি এড়াতে চাইছি।',
      },
    },
    {
      q: {
        en: 'Your index just made a new all-time high. Why are you reducing?',
        bn: 'আপনার সূচক সবেমাত্র সর্বকালের নতুন উচ্চতা করেছে। আপনি কমাচ্ছেন কেন?',
      },
      a: {
        en: 'Because the high was made by three companies and the rest of the market was falling, and I can show that in numbers rather than assert it. From the previous peak at six thousand four hundred and twenty to the new high at six thousand five hundred and ten, the index gained ninety points. The top three heavyweights contributed a hundred and twelve of those points. Every other listed name contributed minus twenty-two. So the top three share of the move is one hundred and twenty-four point four four percent, and a reading above a hundred percent is not an arithmetic error — it is the finding, because it means the rest of the market subtracted while the index rose. Underneath, all three breadth measures were failing at the same instant. The cumulative advance-decline line was two hundred and thirty-five points short of its previous peak. New fifty-two week highs minus new lows had gone to minus twenty-four, from plus thirty-eight one leg earlier. And the share of listed names above their fifty-day moving average had fallen twenty-nine point nine points, from sixty-eight point four to thirty-eight point five, while the index itself rose eight point eight six percent. My breadth score is therefore zero out of three at the exact high. Now, I want to be careful about what that licenses. A zero score does not tell me the primary trend is over — breadth can decay for months while an index grinds higher, and selling every narrow rally is its own losing strategy. What it tells me is that the index has stopped being evidence about the market, so everything I thought I knew from the headline number has to be re-derived from the constituents. On my graduated table zero means reduce, not liquidate, and it means I stop adding new risk while I wait for the structure itself to speak.',
        bn: 'কারণ উচ্চতাটি তৈরি করেছে তিনটি কোম্পানি আর বাকি বাজার পড়ছিল, আর আমি তা দাবি না করে সংখ্যায় দেখাতে পারি। আগের চূড়া ছয় হাজার চারশো কুড়ি থেকে নতুন উচ্চতা ছয় হাজার পাঁচশো দশ পর্যন্ত সূচক নব্বই পয়েন্ট বেড়েছে। শীর্ষ তিনটি ভারী শেয়ার ঐ পয়েন্টের একশো বারোটি দিয়েছে। বাকি প্রতিটি তালিকাভুক্ত নাম দিয়েছে ঋণাত্মক বাইশ। তাই চলনে শীর্ষ তিনের অংশ একশো চব্বিশ দশমিক চার চার শতাংশ, আর একশো শতাংশের ওপরে পাঠ কোনো গাণিতিক ভুল নয় — সেটিই আবিষ্কার, কারণ এর মানে সূচক ওঠার সময় বাকি বাজার বিয়োগ করেছে। নিচে, তিনটি ব্রেডথ পরিমাপই একই মুহূর্তে ব্যর্থ হচ্ছিল। ক্রমপুঞ্জিত অ্যাডভান্স-ডিক্লাইন লাইন তার আগের চূড়া থেকে দুইশো পঁয়ত্রিশ পয়েন্ট কম ছিল। নতুন বাহান্ন-সপ্তাহ উচ্চতা বিয়োগ নতুন নিম্ন এক ধাপ আগের যোগ আটত্রিশ থেকে নেমে ঋণাত্মক চব্বিশে গিয়েছিল। আর পঞ্চাশ-দিনের মুভিং অ্যাভারেজের ওপরে থাকা তালিকাভুক্ত নামের অংশ ঊনত্রিশ দশমিক নয় পয়েন্ট পড়েছিল, আটষট্টি দশমিক চার থেকে আটত্রিশ দশমিক পাঁচে, যখন সূচক নিজে আট দশমিক আট ছয় শতাংশ উঠেছিল। তাই ঠিক ঐ উচ্চতায় আমার ব্রেডথ স্কোর তিনে শূন্য। এবার, এটি কীসের অনুমতি দেয় তা নিয়ে আমি সতর্ক থাকতে চাই। শূন্য স্কোর আমাকে বলে না প্রাইমারি ট্রেন্ড শেষ — ব্রেডথ মাসের পর মাস ক্ষয়ে যেতে পারে যখন সূচক ঘষটে ওঠে, আর প্রতিটি সংকীর্ণ র‍্যালিতে বিক্রি করা নিজেই একটি লোকসানি কৌশল। এটি আমাকে বলে যে সূচকটি আর বাজার সম্পর্কে প্রমাণ নয়, তাই শিরোনামের সংখ্যা থেকে আমি যা জানতাম বলে ভেবেছিলাম তার সবটুকু উপাদান থেকে নতুন করে বের করতে হবে। আমার স্তরভিত্তিক তালিকায় শূন্যের মানে কমানো, সবটা বেচে দেওয়া নয়, আর এর মানে কাঠামোটি নিজে কথা বলার অপেক্ষায় আমি নতুন ঝুঁকি যোগ করা বন্ধ করি।',
      },
    },
    {
      q: {
        en: 'Critics say Dow Theory is unfalsifiable. Are they right?',
        bn: 'সমালোচকরা বলেন ডাও তত্ত্ব অখণ্ডনযোগ্য। তাঁরা কি ঠিক?',
      },
      a: {
        en: 'As it is usually practised, yes, and I think that criticism should be conceded rather than argued with. Hamilton and Rhea wrote beautifully and vaguely, and the sentence "the primary trend was up until it reversed" is true of every chart ever drawn, so generations of readers have used the theory as a vocabulary for narrating whatever already happened. That is commentary, not analysis. The cure is not more interpretation, it is thresholds you commit to before you look, each one paired with an observation that would refute it. So I define a swing point as a closing extreme over ten sessions either side. I define the primary trend as a higher high and a higher low jointly, with a third branch that returns indeterminate and which I actually let fire. I define a secondary reaction as retracing between thirty-three point three and sixty-six point seven percent of the preceding leg. I require volume on the advancing legs to exceed volume on the reactions by at least fifteen percent, not by any amount, because a ratio of one point zero two is indistinguishable from zero point nine eight. And I require confirmation to occur within twenty-five sessions, because without a time window every series eventually makes a new high and the test can never fail. The refutation conditions matter as much as the rules. If I change my swing parameter from ten to eight or twelve and the trend classification flips, then my conclusion belonged to the parameter rather than to the market and I must report indeterminate and take no position. Now the honest limit: none of this makes Dow Theory predictive. It makes it consistent, so that the same data always yields the same classification and my results can be audited and disagreed with productively. The value of Dow is the discipline of the definition, not prophecy, and anyone promising the second has quietly abandoned the first.',
        bn: 'সাধারণত যেভাবে চর্চা করা হয় তাতে হ্যাঁ, আর আমার মনে হয় ঐ সমালোচনার সঙ্গে তর্ক না করে তা মেনে নেওয়াই উচিত। হ্যামিল্টন ও রিয়া সুন্দর ও অস্পষ্টভাবে লিখেছিলেন, আর "প্রাইমারি ট্রেন্ড উপরে ছিল যতক্ষণ না তা উল্টে গেল" বাক্যটি আঁকা প্রতিটি চার্টের ক্ষেত্রেই সত্য, তাই প্রজন্মের পর প্রজন্ম পাঠক তত্ত্বটিকে ব্যবহার করেছেন যা ইতিমধ্যেই ঘটে গেছে তা বর্ণনার শব্দভান্ডার হিসেবে। ওটি ধারাভাষ্য, বিশ্লেষণ নয়। সমাধান আরও ব্যাখ্যা নয়, সমাধান হলো তাকানোর আগেই যে সীমায় আপনি প্রতিশ্রুতিবদ্ধ হন, আর প্রতিটির সঙ্গে জোড়া থাকে এমন একটি পর্যবেক্ষণ যা তা খণ্ডন করবে। তাই আমি সুইং পয়েন্টকে সংজ্ঞায়িত করি দুই পাশে দশ সেশনের ক্লোজিং চরম মান হিসেবে। প্রাইমারি ট্রেন্ডকে সংজ্ঞায়িত করি যৌথভাবে উচ্চতর উচ্চতা ও উচ্চতর নিম্ন হিসেবে, একটি তৃতীয় শাখাসহ যা অনিশ্চিত ফেরত দেয় আর যাকে আমি সত্যিই জ্বলতে দিই। সেকেন্ডারি প্রতিক্রিয়াকে সংজ্ঞায়িত করি আগের ধাপের তেত্রিশ দশমিক তিন থেকে ছেষট্টি দশমিক সাত শতাংশ ফিরিয়ে নেওয়া হিসেবে। আমি দাবি করি উর্ধ্বমুখী ধাপে ভলিউম প্রতিক্রিয়ার ভলিউমকে অন্তত পনেরো শতাংশ ছাড়াক, যেকোনো পরিমাণে নয়, কারণ এক দশমিক শূন্য দুই অনুপাত শূন্য দশমিক নয় আট থেকে আলাদা করা যায় না। আর আমি দাবি করি নিশ্চিতকরণ পঁচিশ সেশনের মধ্যে ঘটুক, কারণ সময়-জানালা ছাড়া প্রতিটি সিরিজই শেষমেশ নতুন উচ্চতা করে আর পরীক্ষাটি কখনোই ব্যর্থ হতে পারে না। খণ্ডন-শর্তগুলো নিয়মের মতোই গুরুত্বপূর্ণ। আমি যদি সুইং প্যারামিটার দশ থেকে আট বা বারো করি আর ট্রেন্ড শ্রেণিবিন্যাস উল্টে যায়, তবে আমার সিদ্ধান্ত বাজারের নয়, প্যারামিটারের ছিল আর আমাকে অনিশ্চিত জানাতে হবে ও কোনো পজিশন নেওয়া চলবে না। এবার সৎ সীমাটি: এর কোনোটিই ডাও তত্ত্বকে পূর্বাভাসক বানায় না। এটি একে সঙ্গতিপূর্ণ বানায়, যাতে একই উপাত্ত সবসময় একই শ্রেণিবিন্যাস দেয় আর আমার ফল নিরীক্ষাযোগ্য ও ফলপ্রসূভাবে বিতর্কযোগ্য হয়। ডাও-এর মূল্য সংজ্ঞার শৃঙ্খলায়, ভবিষ্যদ্বাণীতে নয়, আর যিনি দ্বিতীয়টির প্রতিশ্রুতি দেন তিনি নীরবে প্রথমটি ত্যাগ করেছেন।',
      },
    },
    {
      q: {
        en: 'Your reversal signal fired 7.60% below the peak. Why should a client pay for that?',
        bn: 'আপনার রিভার্সাল সংকেত চূড়ার ৭.৬০% নিচে জ্বলেছে। একজন ক্লায়েন্ট এর জন্য টাকা দেবেন কেন?',
      },
      a: {
        en: 'They should pay for it only if I tell them the seven point six zero percent up front, and if I do, it stops being a betrayal and becomes a feature. Let me give the full number first. The peak was six thousand five hundred and ten, the signal fired at six thousand and fifteen, so the lag is four hundred and ninety-five points or seven point six zero percent from the high. Against the whole primary advance, which ran from five thousand one hundred and twenty, that is thirty-five point six one percent of everything the trend delivered. That is a large give-back and I will not disguise it. But the lateness is not a defect to be patched, it is the trade the framework makes deliberately. The rule demands a failed primary high and then a break of the prior secondary low, both on closes, in that order, and it demands both precisely so that ordinary secondary corrections do not get mistaken for reversals. Drop either condition and you get signals much earlier and far more of them are wrong. A failed high alone is a pause with the higher-low structure intact. A broken low alone is a deep secondary reaction, which happens routinely — in this same case two reactions retraced forty-three and forty-six percent of their legs and both resumed. So what the client is buying is not the top. What they are buying is protection from the much more expensive error, which is holding a broken primary trend all the way down because nothing in their process ever told them the regime had changed. And I would add that the breadth panel gives them earlier evidence: it scored zero out of three at the six thousand five hundred and ten high, four hundred and ninety-five points before tenet six confirmed. That is a warning rather than a signal, and I would size on it rather than trade on it, but it is the only early information this market offers.',
        bn: 'তাঁদের টাকা দেওয়া উচিত কেবল তখনই যদি আমি সাত দশমিক ছয় শূন্য শতাংশটি আগেভাগে বলি, আর তা বললে এটি আর বিশ্বাসঘাতকতা থাকে না, একটি বৈশিষ্ট্য হয়ে যায়। আগে পুরো সংখ্যাটি দিই। চূড়া ছিল ছয় হাজার পাঁচশো দশ, সংকেত জ্বলেছে ছয় হাজার পনেরোতে, তাই দেরি চারশো পঁচানব্বই পয়েন্ট বা উচ্চতা থেকে সাত দশমিক ছয় শূন্য শতাংশ। গোটা প্রাইমারি উত্থানের বিপরীতে, যা পাঁচ হাজার একশো কুড়ি থেকে চলেছিল, তা ট্রেন্ড যা দিয়েছিল তার পঁয়ত্রিশ দশমিক ছয় এক শতাংশ। এটি বড় ফেরত আর আমি তা আড়াল করব না। কিন্তু দেরিটি সারানোর ত্রুটি নয়, এটি কাঠামোটির ইচ্ছাকৃত বিনিময়। নিয়মটি দাবি করে একটি ব্যর্থ প্রাইমারি উচ্চতা আর তারপর পূর্ববর্তী সেকেন্ডারি নিম্ন ভাঙা, দুটোই ক্লোজে, ঐ ক্রমে, আর দুটোই দাবি করে ঠিক এজন্য যাতে সাধারণ সেকেন্ডারি সংশোধন রিভার্সাল বলে ভুল না হয়। যেকোনো একটি শর্ত বাদ দিন আর অনেক আগেই সংকেত পাবেন আর তার অনেক বেশি ভুল হবে। ব্যর্থ উচ্চতা একা একটি বিরতি, উচ্চতর-নিম্নের কাঠামো অক্ষত রেখে। ভাঙা নিম্ন একা একটি গভীর সেকেন্ডারি প্রতিক্রিয়া, যা নিয়মিত ঘটে — এই একই ক্ষেত্রে দুটি প্রতিক্রিয়া তাদের ধাপের তেতাল্লিশ ও ছেচল্লিশ শতাংশ ফিরিয়ে নিয়েছিল আর দুটোই আবার চলতে শুরু করেছিল। তাই ক্লায়েন্ট চূড়া কিনছেন না। তিনি কিনছেন তার চেয়ে অনেক ব্যয়বহুল ভুল থেকে সুরক্ষা, যা হলো ভাঙা প্রাইমারি ট্রেন্ড নিচ পর্যন্ত ধরে থাকা কারণ তাঁর প্রক্রিয়ার কিছুই তাঁকে কখনো বলেনি রেজিম বদলে গেছে। আর যোগ করব যে ব্রেডথ প্যানেল তাঁদের আগাম প্রমাণ দেয়: ছয় হাজার পাঁচশো দশের উচ্চতায় এটি তিনে শূন্য স্কোর করেছিল, নীতি ছয় নিশ্চিত করার চারশো পঁচানব্বই পয়েন্ট আগে। ওটি সংকেত নয়, সতর্কবার্তা, আর আমি তাতে ট্রেড না করে আকার ঠিক করব, কিন্তু এই বাজার যে আগাম তথ্য দেয় তা ওটুকুই।',
      },
    },
    {
      q: {
        en: 'Why closing prices only? Does that really matter in Bangladesh?',
        bn: 'কেবল ক্লোজিং দাম কেন? বাংলাদেশে কি তা সত্যিই গুরুত্বপূর্ণ?',
      },
      a: {
        en: 'It matters more here than it did where the rule was written, which is the interesting part. Dow insisted on closes for a general reason: an intraday extreme can be made by a single order, a stop hunt, or a thin-book accident, whereas the close is the price at which the market as a whole settled the day\'s argument. That reasoning holds anywhere. But our market adds two mechanisms that make intraday numbers actively misleading rather than merely noisy. The first is the circuit band. When a heavyweight is locked at its daily limit, the intraday extreme it prints is not where supply met demand — it is where the exchange stopped the move, and tomorrow the band moves and a new extreme appears for purely administrative reasons. The second is market-wide halts, where the whole session simply ends and the last print is a stopping point rather than a settlement. And behind both of them sits the floor-price regime, which is a more severe version of the same disease: when a regulator sets a price below which shares may not trade, price stops discounting anything at all, volume collapses to near zero, the close itself becomes an administrative number, and every swing-based rule in my process returns garbage — confidently, which is the dangerous part, because nothing in the spreadsheet errors out. So my practice is to flag those sessions in a dedicated column and exclude them before any classification runs. Let me show why the choice bites in the worked case. The failed rally high was six thousand four hundred and fifty-five against a peak of six thousand five hundred and ten, a margin of just zero point eight four percent. If I had used intraday highs instead, a single spike above six thousand five hundred and ten would flip that test from one to zero, and with it the whole reversal signal disappears. A fifty-five point margin on closes is evidence. The same margin on intraday prints is one broker\'s order.',
        bn: 'নিয়মটি যেখানে লেখা হয়েছিল সেখানকার চেয়ে এখানে তা বেশি গুরুত্বপূর্ণ, আর সেটাই আকর্ষণীয় অংশ। ডাও ক্লোজের ওপর জোর দিয়েছিলেন একটি সাধারণ কারণে: ইন্ট্রাডে চরম মান একটি একক অর্ডার, একটি স্টপ হান্ট, বা পাতলা বইয়ের দুর্ঘটনায় তৈরি হতে পারে, যেখানে ক্লোজ হলো সেই দাম যেখানে সামগ্রিক বাজার দিনের তর্ক মিটিয়েছে। ঐ যুক্তি সর্বত্রই টেকে। কিন্তু আমাদের বাজার দুটি প্রক্রিয়া যোগ করে যা ইন্ট্রাডে সংখ্যাকে নিছক গোলমেলে নয়, সক্রিয়ভাবে বিভ্রান্তিকর করে। প্রথমটি সার্কিট ব্যান্ড। কোনো ভারী শেয়ার দৈনিক সীমায় আটকে থাকলে সে যে ইন্ট্রাডে চরম মান ছাপে তা চাহিদা সরবরাহের সঙ্গে যেখানে মিলেছে তা নয় — তা যেখানে এক্সচেঞ্জ চলাচল থামিয়েছে, আর আগামীকাল ব্যান্ড সরবে ও নিছক প্রশাসনিক কারণে নতুন চরম মান দেখা দেবে। দ্বিতীয়টি বাজারব্যাপী হল্ট, যেখানে গোটা সেশন কেবল শেষ হয়ে যায় আর শেষ প্রিন্টটি নিষ্পত্তি নয়, থেমে যাওয়ার বিন্দু। আর দুটোরই পেছনে বসে আছে ফ্লোর-প্রাইস ব্যবস্থা, যা একই রোগের আরও তীব্র রূপ: নিয়ন্ত্রক যখন এমন দাম বেঁধে দেন যার নিচে শেয়ার লেনদেন হতে পারে না, দাম তখন কিছুই ছাড় দেওয়া বন্ধ করে, ভলিউম প্রায় শূন্যে ধসে, ক্লোজ নিজেই একটি প্রশাসনিক সংখ্যা হয়ে যায়, আর আমার প্রক্রিয়ার প্রতিটি সুইং-ভিত্তিক নিয়ম আবর্জনা ফেরত দেয় — আত্মবিশ্বাসের সঙ্গে, আর সেটাই বিপজ্জনক অংশ, কারণ স্প্রেডশিটে কিছুই ভুল হিসেবে দেখায় না। তাই আমার চর্চা হলো ঐ সেশনগুলো একটি আলাদা কলামে চিহ্নিত করা আর কোনো শ্রেণিবিন্যাস চলার আগেই বাদ দেওয়া। উদাহরণে পছন্দটি কেন কামড়ায় দেখাই। ব্যর্থ র‍্যালির উচ্চতা ছিল ছয় হাজার চারশো পঞ্চান্ন, ছয় হাজার পাঁচশো দশের চূড়ার বিপরীতে, ব্যবধান মাত্র শূন্য দশমিক আট চার শতাংশ। বদলে ইন্ট্রাডে উচ্চতা ব্যবহার করলে ছয় হাজার পাঁচশো দশের ওপরে একটিমাত্র লাফ ঐ পরীক্ষাকে এক থেকে শূন্যে উল্টে দিত, আর তার সঙ্গে গোটা রিভার্সাল সংকেতটিই উধাও হতো। ক্লোজে পঞ্চান্ন পয়েন্টের ব্যবধান প্রমাণ। ইন্ট্রাডে প্রিন্টে একই ব্যবধান একজন ব্রোকারের অর্ডার।',
      },
    },
    {
      q: {
        en: 'Dow\'s three phases and the market cycle you were taught earlier are the same structure. What does that agreement prove?',
        bn: 'ডাও-এর তিনটি পর্যায় ও আগে শেখানো বাজারচক্র একই কাঠামো। ঐ মিল কী প্রমাণ করে?',
      },
      a: {
        en: 'Less than people usually claim, and I think being precise about that is more useful than the coincidence itself. The structures really are the same — accumulation, public participation, distribution on one side; accumulation, mark-up, distribution, mark-down on the other. What is genuinely interesting is that they were reached by independent routes. The market-cycle account was derived from participant behaviour: who holds the stock, what they believe, what forces them to act. Dow derived his from price alone. He had no behavioural data, no surveys, no positioning reports, nothing but the tape and a daily deadline. Two different kinds of evidence, one structure. But now the discipline. That agreement does not prove the cycle is real in any deep sense, and it certainly does not make either account predictive. What it shows is that the price record and the behavioural account are consistent with each other, which is the weakest form of corroboration there is — and still more than most technical claims can offer, which tells you something about the standard in this field. The practical division of labour is where the value actually sits. The behavioural account tells me why distribution happens: who is selling, to whom, and under what pressure. Dow tells me what it looks like on the tape while it is happening. Neither is complete alone. And I would flag one asymmetry: the phases are only reliably identifiable in hindsight, so I use them to interpret a regime I have already classified by the swing rules, never as a forecast. The moment I start saying "we are in late distribution" about a market that is still making higher highs and higher lows, I have stopped using a framework and started telling a story.',
        bn: 'মানুষ সাধারণত যা দাবি করেন তার চেয়ে কম, আর আমার মনে হয় এ নিয়ে সুনির্দিষ্ট থাকা কাকতালীয়তাটির চেয়ে বেশি কাজের। কাঠামো দুটি সত্যিই এক — একদিকে সঞ্চয়ন, জনঅংশগ্রহণ, বিতরণ; অন্যদিকে সঞ্চয়ন, মার্ক-আপ, বিতরণ, মার্ক-ডাউন। সত্যিকারের আকর্ষণীয় ব্যাপার হলো এগুলোতে পৌঁছানো হয়েছে স্বাধীন পথে। বাজারচক্রের বর্ণনা এসেছে অংশগ্রহণকারীর আচরণ থেকে: কে শেয়ার ধরে আছে, তারা কী বিশ্বাস করে, কী তাদের কাজ করতে বাধ্য করে। ডাও তাঁরটি বের করেছিলেন কেবল দাম থেকে। তাঁর কোনো আচরণগত উপাত্ত ছিল না, কোনো জরিপ নয়, কোনো পজিশনিং প্রতিবেদন নয়, কেবল টেপ আর একটি দৈনিক সময়সীমা। দুই ধরনের প্রমাণ, এক কাঠামো। কিন্তু এবার শৃঙ্খলাটি। ঐ মিল প্রমাণ করে না যে চক্রটি কোনো গভীর অর্থে বাস্তব, আর নিশ্চিতভাবেই কোনো বর্ণনাকেই পূর্বাভাসক বানায় না। এটি দেখায় যে দামের নথি ও আচরণগত বর্ণনা পরস্পরের সঙ্গে সঙ্গতিপূর্ণ, যা সমর্থনের দুর্বলতম রূপ — আর তবু বেশিরভাগ টেকনিক্যাল দাবি যা দিতে পারে তার চেয়ে বেশি, যা এই ক্ষেত্রের মান সম্পর্কে কিছু বলে। ব্যবহারিক শ্রমবিভাজনেই আসল মূল্য। আচরণগত বর্ণনা আমাকে বলে বিতরণ কেন ঘটে: কে বিক্রি করছে, কার কাছে, আর কোন চাপে। ডাও আমাকে বলে তা ঘটার সময় টেপে দেখতে কেমন লাগে। একা কোনোটিই সম্পূর্ণ নয়। আর একটি অসমতা চিহ্নিত করব: পর্যায়গুলো কেবল পিছনে ফিরে দেখলেই নির্ভরযোগ্যভাবে শনাক্ত করা যায়, তাই আমি সুইং নিয়ম দিয়ে আগেই শ্রেণিবদ্ধ করা একটি রেজিম ব্যাখ্যা করতে এগুলো ব্যবহার করি, কখনো পূর্বাভাস হিসেবে নয়। যে মুহূর্তে আমি এমন বাজার সম্পর্কে "আমরা বিতরণের শেষ পর্যায়ে" বলতে শুরু করি যা এখনো উচ্চতর উচ্চতা ও উচ্চতর নিম্ন করছে, সেই মুহূর্তে আমি কাঠামো ব্যবহার করা বন্ধ করে গল্প বলা শুরু করেছি।',
      },
    },

  ],

  quiz: [
    {
      q: {
        en: 'In Dow\'s tide/wave/ripple analogy, the primary trend is the:',
        bn: 'ডাও-এর জোয়ার/ঢেউ/ছোট তরঙ্গ উপমায় প্রাইমারি ট্রেন্ড হলো:',
      },
      options: {
        en: ['Ripple', 'Wave', 'Tide', 'Wind on the surface'],
        bn: ['ছোট তরঙ্গ', 'ঢেউ', 'জোয়ার', 'পৃষ্ঠের বাতাস'],
      },
      answer: 2,
    },
    {
      q: {
        en: 'With P3 = 6,510 > P2 = 6,420 and T2 = 6,050 > T1 = 5,610, cell B14 returns:',
        bn: 'P3 = ৬,৫১০ > P2 = ৬,৪২০ ও T2 = ৬,০৫০ > T1 = ৫,৬১০ হলে B14 সেল ফেরত দেয়:',
      },
      options: {
        en: ['DOWNTREND', 'INDETERMINATE', 'UPTREND', 'REVERSAL'],
        bn: ['DOWNTREND', 'INDETERMINATE', 'UPTREND', 'REVERSAL'],
      },
      answer: 2,
    },
    {
      q: {
        en: 'The two secondary retracements of 43.02% and 45.68% tell you that:',
        bn: '৪৩.০২% ও ৪৫.৬৮% — এই দুটি সেকেন্ডারি রিট্রেসমেন্ট আপনাকে বলে যে:',
      },
      options: {
        en: [
          'Both fall inside the one-third to two-thirds band, so the price structure is textbook',
          'The trend has already reversed',
          'Volume must have been falling',
          'The corrections were minor trends, not secondary',
        ],
        bn: [
          'দুটোই এক-তৃতীয়াংশ থেকে দুই-তৃতীয়াংশ ব্যান্ডে পড়ে, তাই দামের কাঠামো পাঠ্যবইসুলভ',
          'ট্রেন্ড ইতিমধ্যেই উল্টে গেছে',
          'ভলিউম নিশ্চয়ই কমছিল',
          'সংশোধনগুলো সেকেন্ডারি নয়, মাইনর ট্রেন্ড ছিল',
        ],
      },
      answer: 0,
    },
    {
      q: {
        en: 'Why does Dow\'s tenet 4 fail to port to the DSE?',
        bn: 'ডাও-এর নীতি ৪ ডিএসই-তে কেন খাটে না?',
      },
      options: {
        en: [
          'The DSE has too few listed companies to compute an average',
          'DS30 and DSES are subsets of DSEX, so there is no economically independent second average',
          'DSEX is not published daily',
          'Bangladeshi indices are price-weighted rather than free-float weighted',
        ],
        bn: [
          'গড় গণনার জন্য ডিএসই-তে তালিকাভুক্ত কোম্পানির সংখ্যা খুব কম',
          'DS30 ও DSES হলো DSEX-এর উপসেট, তাই অর্থনৈতিকভাবে স্বাধীন দ্বিতীয় কোনো গড় নেই',
          'DSEX দৈনিক প্রকাশিত হয় না',
          'বাংলাদেশি সূচক ফ্রি-ফ্লোট নয়, দাম-ভারিত',
        ],
      },
      answer: 1,
    },
    {
      q: {
        en: 'At the 6,510 high the A/D line read 1,455 against a P2 peak of 1,690, H−L was −24 and % above 50MA fell to 38.5. The BREADTH SCORE in B41 is:',
        bn: '৬,৫১০ উচ্চতায় A/D লাইন ছিল ১,৪৫৫, P2 চূড়া ১,৬৯০-এর বিপরীতে, উ−নি ছিল −২৪ আর ৫০MA-র ওপরে % নেমেছিল ৩৮.৫-এ। B41-এ ব্রেডথ স্কোর:',
      },
      options: {
        en: ['3 of 3', '2 of 3', '1 of 3', '0 of 3'],
        bn: ['৩-এ ৩', '৩-এ ২', '৩-এ ১', '৩-এ ০'],
      },
      answer: 3,
    },
    {
      q: {
        en: 'The index gained 90 points from P2 to P3 while the top three heavyweights contributed 112. The concentration reading of 124.44% means:',
        bn: 'P2 থেকে P3 পর্যন্ত সূচক ৯০ পয়েন্ট বেড়েছে যখন শীর্ষ তিন ভারী শেয়ার দিয়েছে ১১২। ১২৪.৪৪% কেন্দ্রীভবনের পাঠের অর্থ:',
      },
      options: {
        en: [
          'A spreadsheet error, since a share cannot exceed 100%',
          'The rest of the market subtracted 22 points while the index rose',
          'The top three rose 124.44% in price',
          'The index is 24.44% overvalued',
        ],
        bn: [
          'স্প্রেডশিটের ভুল, কারণ কোনো অংশ ১০০% ছাড়াতে পারে না',
          'সূচক ওঠার সময় বাকি বাজার ২২ পয়েন্ট বিয়োগ করেছে',
          'শীর্ষ তিনের দাম ১২৪.৪৪% বেড়েছে',
          'সূচকটি ২৪.৪৪% অতিমূল্যায়িত',
        ],
      },
      answer: 1,
    },
    {
      q: {
        en: 'The tenet 6 reversal rule requires:',
        bn: 'নীতি ৬-এর রিভার্সাল নিয়ম দাবি করে:',
      },
      options: {
        en: [
          'A failed primary high OR a break of the prior secondary low',
          'A failed primary high AND then a break of the prior secondary low, on closes',
          'Three consecutive lower closes',
          'A break of the 200-day moving average on volume',
        ],
        bn: [
          'একটি ব্যর্থ প্রাইমারি উচ্চতা অথবা পূর্ববর্তী সেকেন্ডারি নিম্ন ভাঙা',
          'একটি ব্যর্থ প্রাইমারি উচ্চতা এবং তারপর পূর্ববর্তী সেকেন্ডারি নিম্ন ভাঙা, ক্লোজে',
          'পরপর তিনটি নিম্নতর ক্লোজ',
          'ভলিউমসহ ২০০-দিনের মুভিং অ্যাভারেজ ভাঙা',
        ],
      },
      answer: 1,
    },
    {
      q: {
        en: 'Cell B54 computes the signal lag as (6,510 − 6,015) / 6,510. Its value is:',
        bn: 'B54 সেল সংকেতের দেরি গণনা করে (৬,৫১০ − ৬,০১৫) / ৬,৫১০ হিসেবে। এর মান:',
      },
      options: {
        en: ['0.84%', '7.60%', '35.61%', '124.44%'],
        bn: ['০.৮৪%', '৭.৬০%', '৩৫.৬১%', '১২৪.৪৪%'],
      },
      answer: 1,
    },
    {
      q: {
        en: 'During a floor-price regime, the correct treatment of Dow Theory rules is to:',
        bn: 'ফ্লোর-প্রাইস ব্যবস্থার সময় ডাও তত্ত্বের নিয়মগুলোর সঠিক আচরণ:',
      },
      options: {
        en: [
          'Widen the retracement band to allow for low volume',
          'Exclude the window entirely, because price no longer discounts anything',
          'Use intraday highs instead of closes',
          'Switch from DSEX to DS30',
        ],
        bn: [
          'কম ভলিউমের জন্য রিট্রেসমেন্ট ব্যান্ড চওড়া করা',
          'সময়কালটি সম্পূর্ণ বাদ দেওয়া, কারণ দাম আর কিছুই ছাড় দেয় না',
          'ক্লোজের বদলে ইন্ট্রাডে উচ্চতা ব্যবহার করা',
          'DSEX থেকে DS30-তে সরে যাওয়া',
        ],
      },
      answer: 1,
    },
    {
      q: {
        en: 'On the DSE, a confirmed primary downtrend reversal should be acted on by:',
        bn: 'ডিএসই-তে নিশ্চিত প্রাইমারি ডাউনট্রেন্ড রিভার্সালে যে কাজটি করা উচিত:',
      },
      options: {
        en: [
          'Selling short with a stop above the failed high',
          'Exiting and standing aside in cash',
          'Averaging down into the decline',
          'Switching the analysis to the Shariah index',
        ],
        bn: [
          'ব্যর্থ উচ্চতার ওপরে স্টপ রেখে শর্ট বিক্রি করা',
          'বেরিয়ে এসে নগদে সরে দাঁড়ানো',
          'পতনের ভেতরে গড় কমানো',
          'বিশ্লেষণ শরিয়াহ সূচকে সরিয়ে নেওয়া',
        ],
      },
      answer: 1,
    },

  ],
};
