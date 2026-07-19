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
  },
};
