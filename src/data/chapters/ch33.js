/**
 * Chapter 33 — Chart Patterns: Continuation
 * Part III, Technical Analysis.
 */

export default {
  n: 33,
  tools: [],

  excelSheet: {
    filename: 'ch33-consolidation-breakout-planner.xlsx',
    sheetName: 'Breakout Planner',
    cells: [
      { cell: 'A1', v: '— Flagpole (the prior impulse) —' },
      { cell: 'A2', v: 'Pole Start Price (BDT)' }, { cell: 'B2', v: 42.0 },
      { cell: 'A3', v: 'Pole End Price (BDT)' }, { cell: 'B3', v: 55.5 },
      { cell: 'A4', v: 'Pole Bars' }, { cell: 'B4', v: 9 },
      { cell: 'A5', v: 'Pole Height (BDT)' }, { cell: 'B5', f: 'B3-B2' },
      { cell: 'A6', v: 'Avg Volume in Pole (shares)' }, { cell: 'B6', v: 1850000 },

      { cell: 'A8', v: '— Consolidation —' },
      { cell: 'A9', v: 'Consolidation Bars' }, { cell: 'B9', v: 11 },
      { cell: 'A10', v: 'Consolidation High (BDT)' }, { cell: 'B10', v: 54.2 },
      { cell: 'A11', v: 'Consolidation Low (BDT)' }, { cell: 'B11', v: 50.8 },
      { cell: 'A12', v: 'Consolidation Range (BDT)' }, { cell: 'B12', f: 'B10-B11' },
      { cell: 'A13', v: 'Avg Volume in Consolidation' }, { cell: 'B13', v: 620000 },
      { cell: 'A14', v: 'Range Compression Ratio' }, { cell: 'B14', f: 'B12/B5' },
      { cell: 'A15', v: 'Volume Contraction Ratio' }, { cell: 'B15', f: 'B13/B6' },
      { cell: 'A16', v: 'Consolidation Midpoint' }, { cell: 'B16', f: '(B10+B11)/2' },

      { cell: 'A18', v: '— Triggers (both sides, always) —' },
      { cell: 'A19', v: 'Breakout Buffer (%)' }, { cell: 'B19', v: 0.5 },
      { cell: 'A20', v: 'UPPER TRIGGER' }, { cell: 'B20', f: 'B10*(1+B19/100)' },
      { cell: 'A21', v: 'LOWER TRIGGER' }, { cell: 'B21', f: 'B11*(1-B19/100)' },
      { cell: 'A22', v: 'Upside Measured Target' }, { cell: 'B22', f: 'B20+B5' },
      { cell: 'A23', v: 'Downside Measured Target' }, { cell: 'B23', f: 'B21-B5' },
      { cell: 'A24', v: 'Long Invalidation (consol. low)' }, { cell: 'B24', f: 'B11' },
      { cell: 'A25', v: 'Risk per Share (long)' }, { cell: 'B25', f: 'B20-B24' },
      { cell: 'A26', v: 'Reward per Share (long)' }, { cell: 'B26', f: 'B22-B20' },
      { cell: 'A27', v: 'Reward-to-Risk (x)' }, { cell: 'B27', f: 'B26/B25' },

      { cell: 'A29', v: '— Position Sizing —' },
      { cell: 'A30', v: 'Account Equity (BDT)' }, { cell: 'B30', v: 1500000 },
      { cell: 'A31', v: 'Risk Budget (% of equity)' }, { cell: 'B31', v: 0.75 },
      { cell: 'A32', v: 'Risk Amount (BDT)' }, { cell: 'B32', f: 'B30*B31/100' },
      { cell: 'A33', v: 'SHARES TO BUY' }, { cell: 'B33', f: 'ROUNDDOWN(B32/B25,0)' },
      { cell: 'A34', v: 'Position Value (BDT)' }, { cell: 'B34', f: 'B33*B20' },
      { cell: 'A35', v: 'Position as % of Equity' }, { cell: 'B35', f: 'B34/B30*100' },

      { cell: 'A37', v: '— Quality Gates —' },
      { cell: 'A38', v: 'Min Avg Volume Required' }, { cell: 'B38', v: 50000 },
      { cell: 'A39', v: 'Liquidity Gate' }, { cell: 'B39', f: 'IF(B13>=B38,"PASS","FAIL")' },
      { cell: 'A40', v: 'Compression Gate (<=0.50)' }, { cell: 'B40', f: 'IF(B14<=0.5,"PASS","FAIL")' },
      { cell: 'A41', v: 'Volume Contraction Gate (<=0.70)' }, { cell: 'B41', f: 'IF(B15<=0.7,"PASS","FAIL")' },
      { cell: 'A42', v: 'Duration Gate (5-25 bars)' }, { cell: 'B42', f: 'IF(AND(B9>=5,B9<=25),"PASS","FAIL")' },
      {
        cell: 'A43',
        v: 'VERDICT',
      },
      {
        cell: 'B43',
        f: 'IF(B39="FAIL","Do not trade - absence of trading is not a pattern",IF(AND(B40="PASS",B41="PASS",B42="PASS"),"Tradeable - arm both triggers and size off B33","Marginal - halve size or skip"))',
      },

      { cell: 'A45', v: '— DSE Reality Check —' },
      { cell: 'A46', v: 'Prior Close (BDT)' }, { cell: 'B46', v: 53.9 },
      { cell: 'A47', v: 'Applicable Circuit Band (%)' }, { cell: 'B47', v: 10 },
      { cell: 'A48', v: 'Day-1 Upper Circuit' }, { cell: 'B48', f: 'B46*(1+B47/100)' },
      { cell: 'A49', v: 'Target Reachable on Day 1?' }, { cell: 'B49', f: 'IF(B22<=B48,"YES","NO - expansion is capped, plan multi-session")' },
      { cell: 'A50', v: 'Days to Reporting Disclosure' }, { cell: 'B50', v: 6 },
      { cell: 'A51', v: 'Event Risk Flag' }, { cell: 'B51', f: 'IF(B50<=10,"DISCLOSURE INSIDE HOLD WINDOW - halve size","Clear")' },
    ],
  },

  objectives: {
    en: [
      'Define flags, pennants, triangles, rectangles, cup-and-handle and continuation wedges by structure, duration, volume signature, trigger, target and invalidation.',
      'Explain why continuation and reversal patterns are the same geometry distinguished only by what happens at the boundary.',
      'Compute range compression and volume contraction, and use them rather than the pattern name to judge a setup.',
      'Arm a two-sided breakout plan — upper trigger, lower trigger, measured target, invalidation — and size the position off the distance to invalidation.',
      'State how the DSE reporting calendar, thin float and circuit limits change the mechanics of trading a consolidation.',
    ],
    bn: [
      'ফ্ল্যাগ, পেন্যান্ট, ট্রায়াঙ্গল, রেক্ট্যাঙ্গল, কাপ-অ্যান্ড-হ্যান্ডল ও কন্টিনিউয়েশন ওয়েজকে গঠন, সময়কাল, ভলিউম স্বাক্ষর, ট্রিগার, লক্ষ্য ও অকার্যকরতার স্তর দিয়ে সংজ্ঞায়িত করা।',
      'কেন কন্টিনিউয়েশন ও রিভার্সাল প্যাটার্ন একই জ্যামিতি, কেবল সীমানায় কী ঘটে তা দিয়ে আলাদা — তা ব্যাখ্যা করা।',
      'রেঞ্জ সংকোচন ও ভলিউম সংকোচন গণনা করা, এবং প্যাটার্নের নামের বদলে এগুলো দিয়ে সেটআপ বিচার করা।',
      'দুই দিকের ব্রেকআউট পরিকল্পনা তৈরি করা — উপরের ট্রিগার, নিচের ট্রিগার, পরিমাপকৃত লক্ষ্য, অকার্যকরতা — এবং অকার্যকরতার দূরত্ব দিয়ে পজিশনের আকার নির্ধারণ করা।',
      'ডিএসই-র প্রতিবেদন ক্যালেন্ডার, পাতলা ফ্লোট ও সার্কিট সীমা কীভাবে কনসোলিডেশন ট্রেড করার যান্ত্রিকতা বদলে দেয় তা বলা।',
    ],
  },

  blocks: {
    theory: {
      en: `Chapter 32 catalogued the patterns that mark the end of a trend. This chapter catalogues the patterns that mark a trend **resting**. The reader who has just finished Chapter 32 is now in the most dangerous position of the whole of Part III: holding two lists of shapes and believing the shape tells you which list applies.

**It does not.** That is the argument of this chapter, and everything else is detail.

### The same geometry, two names

Draw a symmetrical triangle on a chart. Lower highs, higher lows, converging into an apex. Now ask what makes it a *continuation* triangle rather than a *reversal* triangle.

The answer is: **which side of it price leaves through.** Nothing inside the pattern distinguishes the two cases. The geometry is identical. The volume profile is identical. The duration is identical. The only difference is an event that has not happened yet at the moment you are looking at the chart.

This is uncomfortable, so the literature papers over it. You will read that a symmetrical triangle "usually breaks in the direction of the prior trend." That claim is a weak statistical tendency — measured on US equity samples, with survivorship in the pattern identification, and with an edge that does not survive transaction costs on the DSE — **quoted to you as if it were a rule.** It is not a rule. A symmetrical triangle is direction-agnostic by construction: it is *defined* as a range narrowing symmetrically about a midpoint, which is precisely the geometry of a market that has no opinion.

The honest position is simpler and more useful. **Do not predict the break. Define the trigger on both sides, size the position off the distance to invalidation, and let price tell you which pattern it was.** The naming can happen afterwards, in your journal, where it costs nothing.

### Volatility contraction is the actual mechanism

Strip the names away and one observation remains, and it is the only part of this chapter with a real causal story behind it.

**Range compresses. Compressed range resolves into expansion.**

Volatility is mean-reverting and it clusters. A period of unusually narrow daily ranges is not a stable state — it is a market in which the distance between the marginal buyer's bid and the marginal seller's offer has collapsed because neither side has new information. That condition ends. When it ends, the range does not merely return to normal; it overshoots, because positions built inside the quiet period get unwound at once.

The tradeable proposition is therefore *not* "this is a bull flag, so it goes up." It is:

**Range is 25% of what it was. Expansion is coming. I can define an entry that is 3.7% away from a stop, so I can take the trade in either direction at a size where being wrong costs 0.75% of the account.**

That is a real edge, and note its shape: the edge is in the *asymmetry between a tight invalidation and a wide potential move*, not in the direction. Chapter 38 gives you the Bollinger Band squeeze, which is bandwidth as a formal measure of the same compression. Chapter 39 gives you ATR, which is range compression measured directly and used to set stop distance. **This chapter is the visual version of what those two chapters quantify.** If you find the pattern-recognition here subjective, that is correct, and Chapters 38 and 39 are the remedy.

### The catalogue

**Flags and pennants.** A sharp, near-vertical advance (the *flagpole*), then a shallow counter-trend drift (a flag, sloping against the pole between parallel lines) or a small symmetric contraction (a pennant). Duration 5–15 bars; beyond about 20 the pole's information is stale. Volume must contract markedly inside the consolidation — a flag on rising volume is distribution wearing a flag's clothes. Trigger: a close beyond the consolidation boundary plus a buffer. **Measured target: add the full flagpole height to the breakout level.** Invalidation: the opposite boundary of the consolidation.

**Symmetrical triangle.** Lower highs, higher lows, at least two touches each side. Duration 10–40 bars. Direction-agnostic, as argued above. Trigger both sides. Measured target: the height of the triangle at its widest, projected from the break. Invalidation: re-entry into the triangle body.

**Ascending triangle.** A flat resistance line with a rising lower boundary. The structural reading is that a supply block sits at a fixed price and buyers are willing to pay more each time to reach it. That is a genuine asymmetry — but it says nothing until the supply is absorbed. **A flat top that is never taken out is not an ascending triangle; it is resistance.**

**Descending triangle.** The mirror: flat support, falling highs. Sellers are accepting less each time to hit a fixed bid.

**Rectangle.** Horizontal support and resistance, price oscillating between them, three or more touches per side. The cleanest structure to trade because the trigger and invalidation are unambiguous, and the least glamorous. Measured target: the rectangle's height projected from the break.

**Cup and handle.** A rounded multi-month base (the cup), then a shallow pullback near the rim (the handle) lasting 5–20 bars. The handle is where the pattern earns its keep: it is a final shakeout on contracting volume. Target: the cup's depth added to the rim. **Its weakness is that it takes months to form, so the sample of clean examples on any one DSE counter is tiny and the pattern is easy to see retrospectively where it was not visible in advance.**

**Wedge, continuation role.** A falling wedge inside an uptrend, or a rising wedge inside a downtrend, is a continuation structure — the counter-trend move losing momentum against itself. In Chapter 32 the same wedge appeared as a reversal. **Same shape, opposite meaning, resolved only at the boundary.** This is the chapter's thesis in a single object.

### What the measured move is and is not

The flagpole rule — target equals breakout level plus pole height — is not a forecast. It is a **convention for setting a reward figure so that the reward-to-risk arithmetic can be done before entry.** It works because it scales the objective to the volatility that produced the pole, which is a defensible way to normalise. It fails constantly in the sense that price does not reach it. That is fine, provided you sized the trade on the invalidation distance and not on the target.

**Never let the target justify the trade.** The target is an output. The stop is an input.

### The DSE overlay

Three things break the imported textbook here, and they are not minor.

**1. Consolidations are often an information vacuum, not accumulation.** A DSE counter between quarterly disclosures frequently has nothing to trade on. The range narrows because nobody has a reason to act, not because a large buyer is quietly absorbing supply. The distinction matters enormously: an accumulation-driven consolidation resolves on the chart, an information-vacuum consolidation resolves on the disclosure — and it can resolve in either direction with a gap that skips straight over your trigger and your stop. **Check the reporting calendar before sizing a breakout trade.** If the disclosure falls inside your intended holding window, either halve the size or accept that you are trading the earnings, not the pattern.

**2. Low-volume "pennants" on illiquid counters are usually not patterns.** Every textbook tells you volume should contract inside the consolidation. On a counter that trades nine thousand shares a day, volume contraction is not a signature of anything — it is the absence of trading. Apply an absolute liquidity floor before you apply any ratio. **A contraction measured from an already-absent baseline carries no information.**

**3. Circuit limits cap the first day of expansion.** The whole logic above says compression resolves into expansion. The DSE's price band says the expansion cannot exceed the applicable percentage in one session. This changes entry mechanics concretely: your trigger may be hit at the limit with no fill available, a measured target several bands away requires multiple sessions, and the queue at the limit is where retail orders go to be disappointed. Chapter 2 established that a price control relocates pressure rather than removing it. **A capped breakout is not a smaller breakout; it is a breakout spread over more days, with more opportunity for the reason behind it to be reversed.**

Chapter 34 begins the indicator sequence with moving averages, which is the first tool that removes the subjectivity you have been exercising here. Bring the compression arithmetic with you; the indicators measure it better, but they do not replace the discipline of writing the invalidation down before the entry.`,
      bn: `অধ্যায় ৩২ ঐ প্যাটার্নগুলোর তালিকা করেছে যা প্রবণতার সমাপ্তি চিহ্নিত করে। এই অধ্যায় তালিকা করে ঐ প্যাটার্নগুলোর যা প্রবণতার **বিশ্রাম** চিহ্নিত করে। যে পাঠক এইমাত্র অধ্যায় ৩২ শেষ করেছেন তিনি এখন পুরো তৃতীয় খণ্ডের সবচেয়ে বিপজ্জনক অবস্থানে: হাতে দুটি আকৃতির তালিকা, আর বিশ্বাস যে আকৃতিই বলে দেয় কোন তালিকা প্রযোজ্য।

**তা বলে না।** এটিই এই অধ্যায়ের যুক্তি, বাকি সবই বিস্তারিত।

### একই জ্যামিতি, দুটি নাম

চার্টে একটি সিমেট্রিক্যাল ট্রায়াঙ্গল আঁকুন। নিচু হতে থাকা উঁচু বিন্দু, উঁচু হতে থাকা নিচু বিন্দু, একটি শীর্ষবিন্দুতে অভিসারী। এবার জিজ্ঞেস করুন কী একে *রিভার্সাল* ট্রায়াঙ্গলের বদলে *কন্টিনিউয়েশন* ট্রায়াঙ্গল বানায়।

উত্তর হলো: **দাম এর কোন দিক দিয়ে বেরিয়ে যায়।** প্যাটার্নের ভেতরের কিছুই দুটি ক্ষেত্রকে আলাদা করে না। জ্যামিতি অভিন্ন। ভলিউম প্রোফাইল অভিন্ন। সময়কাল অভিন্ন। একমাত্র পার্থক্য হলো এমন একটি ঘটনা যা আপনি চার্ট দেখার মুহূর্তে এখনো ঘটেনি।

এটি অস্বস্তিকর, তাই সাহিত্য এর ওপর প্রলেপ দেয়। আপনি পড়বেন যে সিমেট্রিক্যাল ট্রায়াঙ্গল "সাধারণত আগের প্রবণতার দিকেই ভাঙে।" ঐ দাবি একটি দুর্বল পরিসংখ্যানগত প্রবণতা — মার্কিন ইকুইটি নমুনায় পরিমাপিত, প্যাটার্ন শনাক্তকরণে বেঁচে-থাকার পক্ষপাতসহ, এবং এমন একটি প্রান্ত নিয়ে যা ডিএসই-তে লেনদেন খরচের পর টেকে না — **আপনাকে বলা হচ্ছে যেন এটি একটি নিয়ম।** এটি নিয়ম নয়। সিমেট্রিক্যাল ট্রায়াঙ্গল গঠনগতভাবেই দিক-নিরপেক্ষ: এটি *সংজ্ঞায়িতই* হয় একটি মধ্যবিন্দুর চারপাশে প্রতিসমভাবে সংকুচিত পরিসর হিসেবে, যা ঠিক ঐ বাজারের জ্যামিতি যার কোনো মত নেই।

সৎ অবস্থানটি সহজতর ও বেশি কার্যকর। **ভাঙন পূর্বানুমান করবেন না। দুই দিকেই ট্রিগার নির্ধারণ করুন, অকার্যকরতার দূরত্ব দিয়ে পজিশনের আকার ঠিক করুন, এবং দামকেই বলতে দিন এটি কোন প্যাটার্ন ছিল।** নামকরণ পরে হতে পারে, আপনার জার্নালে, যেখানে তার কোনো খরচ নেই।

### প্রকৃত যন্ত্রকৌশল হলো ভোলাটিলিটি সংকোচন

নামগুলো সরিয়ে দিলে একটি পর্যবেক্ষণ থেকে যায়, আর এই অধ্যায়ে এটিই একমাত্র অংশ যার পেছনে প্রকৃত কার্যকারণ গল্প আছে।

**পরিসর সংকুচিত হয়। সংকুচিত পরিসর সম্প্রসারণে গিয়ে মেটে।**

ভোলাটিলিটি গড়মুখী এবং এটি গুচ্ছবদ্ধ হয়। অস্বাভাবিকভাবে সংকীর্ণ দৈনিক পরিসরের একটি সময়কাল স্থিতিশীল অবস্থা নয় — এটি এমন বাজার যেখানে প্রান্তিক ক্রেতার দর ও প্রান্তিক বিক্রেতার দরের দূরত্ব ভেঙে পড়েছে, কারণ কোনো পক্ষেরই নতুন তথ্য নেই। ঐ অবস্থা শেষ হয়। শেষ হলে পরিসর কেবল স্বাভাবিকে ফেরে না; ছাড়িয়ে যায়, কারণ নীরব সময়ে গড়ে ওঠা পজিশনগুলো একসঙ্গে খোলা হয়।

তাই ট্রেডযোগ্য প্রস্তাবটি *নয়* "এটি একটি বুল ফ্ল্যাগ, অতএব উপরে যাবে।" এটি হলো:

**পরিসর আগের ২৫%। সম্প্রসারণ আসছে। আমি এমন একটি প্রবেশ নির্ধারণ করতে পারি যা স্টপ থেকে ৩.৭% দূরে, তাই আমি যেকোনো দিকেই এমন আকারে ট্রেডটি নিতে পারি যেখানে ভুল হলে অ্যাকাউন্টের ০.৭৫% খরচ হয়।**

এটি একটি প্রকৃত প্রান্ত, আর এর আকৃতিটি লক্ষ করুন: প্রান্তটি আছে *আঁটসাঁট অকার্যকরতা ও প্রশস্ত সম্ভাব্য চালের মধ্যকার অসমতায়*, দিকের মধ্যে নয়। অধ্যায় ৩৮ আপনাকে বলিঞ্জার ব্যান্ড স্কুইজ দেয়, যা একই সংকোচনের আনুষ্ঠানিক পরিমাপ হিসেবে ব্যান্ডউইথ। অধ্যায় ৩৯ দেয় ATR, যা পরিসর সংকোচন সরাসরি মেপে স্টপের দূরত্ব ঠিক করতে ব্যবহৃত হয়। **এই অধ্যায় ঐ দুই অধ্যায় যা পরিমাণে প্রকাশ করে তার দৃশ্যগত সংস্করণ।** এখানকার প্যাটার্ন শনাক্তকরণ যদি আপনার কাছে আত্মগত মনে হয়, তা সঠিক, আর অধ্যায় ৩৮ ও ৩৯ তার প্রতিকার।

### তালিকা

**ফ্ল্যাগ ও পেন্যান্ট।** একটি তীক্ষ্ণ, প্রায় খাড়া উত্থান (*ফ্ল্যাগপোল*), তারপর একটি অগভীর বিপরীতমুখী প্রবাহ (ফ্ল্যাগ, সমান্তরাল রেখার মধ্যে পোলের বিপরীতে ঢালু) বা একটি ছোট প্রতিসম সংকোচন (পেন্যান্ট)। সময়কাল ৫–১৫ বার; প্রায় ২০-এর বেশি হলে পোলের তথ্য বাসি। কনসোলিডেশনের ভেতরে ভলিউম উল্লেখযোগ্যভাবে সংকুচিত হতেই হবে — বাড়তি ভলিউমে ফ্ল্যাগ হলো ফ্ল্যাগের পোশাক পরা ডিস্ট্রিবিউশন। ট্রিগার: বাফারসহ কনসোলিডেশনের সীমানার বাইরে একটি ক্লোজ। **পরিমাপকৃত লক্ষ্য: ব্রেকআউট স্তরে সম্পূর্ণ ফ্ল্যাগপোলের উচ্চতা যোগ করুন।** অকার্যকরতা: কনসোলিডেশনের বিপরীত সীমানা।

**সিমেট্রিক্যাল ট্রায়াঙ্গল।** নিচু হতে থাকা উঁচু বিন্দু, উঁচু হতে থাকা নিচু বিন্দু, প্রতি দিকে অন্তত দুটি স্পর্শ। সময়কাল ১০–৪০ বার। উপরে যেমন যুক্তি দেওয়া হলো, দিক-নিরপেক্ষ। দুই দিকেই ট্রিগার দিন। পরিমাপকৃত লক্ষ্য: ট্রায়াঙ্গলের সবচেয়ে চওড়া জায়গার উচ্চতা, ভাঙনের বিন্দু থেকে প্রক্ষিপ্ত। অকার্যকরতা: ট্রায়াঙ্গলের শরীরে পুনঃপ্রবেশ।

**অ্যাসেন্ডিং ট্রায়াঙ্গল।** একটি সমতল রেজিস্ট্যান্স রেখা, সঙ্গে উঠতে থাকা নিচের সীমানা। গঠনগত পাঠ হলো একটি নির্দিষ্ট দামে সরবরাহের একটি ব্লক বসে আছে আর ক্রেতারা প্রতিবার তাতে পৌঁছাতে বেশি দিতে রাজি। এটি একটি প্রকৃত অসমতা — কিন্তু সরবরাহ শোষিত না হওয়া পর্যন্ত এটি কিছুই বলে না। **যে সমতল ছাদ কখনো ভাঙা হয় না তা অ্যাসেন্ডিং ট্রায়াঙ্গল নয়; তা রেজিস্ট্যান্স।**

**ডিসেন্ডিং ট্রায়াঙ্গল।** আয়না-প্রতিচ্ছবি: সমতল সাপোর্ট, নামতে থাকা উঁচু বিন্দু। বিক্রেতারা একটি নির্দিষ্ট দরে আঘাত করতে প্রতিবার কম গ্রহণ করছেন।

**রেক্ট্যাঙ্গল।** অনুভূমিক সাপোর্ট ও রেজিস্ট্যান্স, দাম এদের মধ্যে দোদুল্যমান, প্রতি দিকে তিন বা তার বেশি স্পর্শ। ট্রেড করার জন্য সবচেয়ে পরিষ্কার গঠন, কারণ ট্রিগার ও অকার্যকরতা দ্ব্যর্থহীন — এবং সবচেয়ে কম আকর্ষণীয়। পরিমাপকৃত লক্ষ্য: রেক্ট্যাঙ্গলের উচ্চতা ভাঙনের বিন্দু থেকে প্রক্ষিপ্ত।

**কাপ অ্যান্ড হ্যান্ডল।** একটি গোলাকার বহু-মাসব্যাপী ভিত্তি (কাপ), তারপর কিনারার কাছে একটি অগভীর পুলব্যাক (হ্যান্ডল) যা ৫–২০ বার স্থায়ী হয়। হ্যান্ডলেই প্যাটার্নটি তার মূল্য অর্জন করে: এটি সংকুচিত ভলিউমে একটি চূড়ান্ত ঝাঁকুনি। লক্ষ্য: কাপের গভীরতা কিনারায় যোগ করুন। **এর দুর্বলতা হলো গঠিত হতে মাস লাগে, তাই যেকোনো একটি ডিএসই কাউন্টারে পরিষ্কার উদাহরণের নমুনা অতি ক্ষুদ্র, আর প্যাটার্নটি পিছন ফিরে সেখানেই দেখা সহজ যেখানে তা আগে থেকে দৃশ্যমান ছিল না।**

**ওয়েজ, কন্টিনিউয়েশন ভূমিকায়।** ঊর্ধ্বমুখী প্রবণতার ভেতরে একটি ফলিং ওয়েজ, বা নিম্নমুখী প্রবণতার ভেতরে একটি রাইজিং ওয়েজ, একটি কন্টিনিউয়েশন গঠন — বিপরীতমুখী চাল নিজের বিরুদ্ধেই গতি হারাচ্ছে। অধ্যায় ৩২-এ ঠিক একই ওয়েজ রিভার্সাল হিসেবে এসেছিল। **একই আকৃতি, বিপরীত অর্থ, কেবল সীমানাতেই নিষ্পত্তি।** একটি বস্তুতে এটিই অধ্যায়ের মূল প্রতিপাদ্য।

### পরিমাপকৃত চাল কী এবং কী নয়

ফ্ল্যাগপোল নিয়ম — লক্ষ্য সমান ব্রেকআউট স্তর যোগ পোলের উচ্চতা — কোনো পূর্বাভাস নয়। এটি **একটি রীতি যা পুরস্কারের সংখ্যা এমনভাবে নির্ধারণ করে যাতে প্রবেশের আগেই পুরস্কার-থেকে-ঝুঁকির পাটিগণিত করা যায়।** এটি কাজ করে কারণ এটি উদ্দেশ্যকে ঐ ভোলাটিলিটির মাপে বাঁধে যা পোলটি তৈরি করেছে, আর এটি স্বাভাবিকীকরণের একটি সমর্থনযোগ্য উপায়। এই অর্থে এটি অনবরত ব্যর্থ হয় যে দাম সেখানে পৌঁছায় না। তাতে অসুবিধা নেই, যদি আপনি লক্ষ্যের নয়, অকার্যকরতার দূরত্বের ভিত্তিতে ট্রেডের আকার ঠিক করে থাকেন।

**কখনো লক্ষ্যকে ট্রেডের ন্যায্যতা দিতে দেবেন না। লক্ষ্য একটি ফলাফল। স্টপ একটি উপাদান।**

### ডিএসই স্তর

তিনটি জিনিস এখানে আমদানি করা পাঠ্যবই ভেঙে দেয়, আর এগুলো গৌণ নয়।

**১. কনসোলিডেশন প্রায়শই তথ্যের শূন্যতা, সঞ্চয়ন নয়।** প্রান্তিক প্রকাশনার মাঝামাঝি সময়ে একটি ডিএসই কাউন্টারে প্রায়ই ট্রেড করার মতো কিছু থাকে না। পরিসর সংকুচিত হয় কারণ কারো পদক্ষেপ নেওয়ার কারণ নেই, কোনো বড় ক্রেতা নীরবে সরবরাহ শুষে নিচ্ছেন বলে নয়। পার্থক্যটি বিপুলভাবে গুরুত্বপূর্ণ: সঞ্চয়ন-চালিত কনসোলিডেশন চার্টে মেটে, তথ্য-শূন্যতার কনসোলিডেশন মেটে প্রকাশনায় — আর তা যেকোনো দিকেই এমন গ্যাপ নিয়ে মিটতে পারে যা আপনার ট্রিগার ও স্টপ দুটোই টপকে যায়। **ব্রেকআউট ট্রেডের আকার ঠিক করার আগে প্রতিবেদন ক্যালেন্ডার দেখুন।** প্রকাশনা যদি আপনার অভিপ্রেত ধারণ-জানালার ভেতরে পড়ে, তবে হয় আকার অর্ধেক করুন, নয়তো মেনে নিন যে আপনি প্যাটার্ন নয়, আয়ের ঘোষণা ট্রেড করছেন।

**২. তরলতাহীন কাউন্টারে কম-ভলিউমের "পেন্যান্ট" সাধারণত প্যাটার্নই নয়।** প্রতিটি পাঠ্যবই বলে কনসোলিডেশনের ভেতরে ভলিউম সংকুচিত হওয়া উচিত। যে কাউন্টারে দিনে নয় হাজার শেয়ার লেনদেন হয়, সেখানে ভলিউম সংকোচন কোনো কিছুরই স্বাক্ষর নয় — এটি লেনদেনের অনুপস্থিতি। কোনো অনুপাত প্রয়োগের আগে একটি পরম তরলতার মেঝে প্রয়োগ করুন। **ইতিমধ্যেই অনুপস্থিত ভিত্তি থেকে মাপা সংকোচন কোনো তথ্য বহন করে না।**

**৩. সার্কিট সীমা সম্প্রসারণের প্রথম দিনটিকে আটকে দেয়।** উপরের পুরো যুক্তি বলে সংকোচন সম্প্রসারণে মেটে। ডিএসই-র মূল্য ব্যান্ড বলে এক সেশনে সম্প্রসারণ প্রযোজ্য শতাংশ ছাড়াতে পারে না। এটি প্রবেশের যান্ত্রিকতা সুনির্দিষ্টভাবে বদলে দেয়: আপনার ট্রিগার সীমায় গিয়ে ছুঁতে পারে অথচ কোনো ফিল পাওয়া যাবে না, কয়েক ব্যান্ড দূরের একটি পরিমাপকৃত লক্ষ্যে একাধিক সেশন লাগবে, আর সীমার সারিটিই সেই জায়গা যেখানে খুচরা অর্ডার হতাশ হতে যায়। অধ্যায় ২ প্রতিষ্ঠা করেছে যে মূল্য নিয়ন্ত্রণ চাপ দূর করে না, স্থানান্তরিত করে। **আটকে দেওয়া ব্রেকআউট ছোট ব্রেকআউট নয়; এটি বেশি দিনে ছড়ানো ব্রেকআউট, যেখানে এর পেছনের কারণটি উল্টে যাওয়ার সুযোগও বেশি।**

অধ্যায় ৩৪ মুভিং অ্যাভারেজ দিয়ে ইন্ডিকেটরের ধারা শুরু করে, যা প্রথম হাতিয়ার যা এখানে আপনি যে আত্মগততা প্রয়োগ করছেন তা সরিয়ে দেয়। সংকোচনের পাটিগণিতটি সঙ্গে নিয়ে যান; ইন্ডিকেটর তা ভালোভাবে মাপে, কিন্তু প্রবেশের আগে অকার্যকরতা লিখে রাখার শৃঙ্খলার বিকল্প হয় না।`,
    },

    simple: {
      en: `Think of a spring.

Push a spring together and hold it. While you hold it, nothing happens — it just sits there, compressed, looking boring. But you know something the spring is not telling you: **the energy is stored, and when you let go, it moves fast.**

What you do *not* know is which direction it will fly. That depends on how you release it, not on how tightly you squeezed it.

That is a consolidation on a price chart, and that is the whole chapter.

### What you are looking at

A stock runs up hard for two weeks. Then it stops running. For the next two weeks it drifts sideways in a narrow band — some days up a little, some days down a little, nothing dramatic. Trading volume drops off. It looks like nothing is happening.

Something is happening. **The people who wanted to buy urgently have bought. The people who wanted to sell urgently have sold.** What remains is a quiet standoff between people who are not in a hurry.

That standoff cannot last. Sooner or later someone gets new information, or gets impatient, or gets a margin call — and the price leaves the narrow band in a hurry.

### The mistake nearly everyone makes

Books give these quiet periods names. Flag. Pennant. Triangle. Rectangle. And then they tell you which way each one "usually" breaks.

**Be very careful with that word "usually."** A triangle that narrows evenly from both sides has, by its own shape, no opinion about direction. It is a picture of a market that cannot make up its mind. Telling you it will probably break upward because the stock went up before is a guess dressed as a rule.

### What to do instead

Do not try to guess the direction. Do this:

1. Draw a line across the top of the quiet band and a line across the bottom.
2. Decide, in advance, that if price closes above the top line you buy, and if it closes below the bottom line you either sell or stand aside.
3. Decide, in advance, where you are wrong — usually the opposite side of the band.
4. Work out how many shares you can hold so that being wrong costs you a small, fixed amount of your account.

**Notice that step 4 is the only one that involves money, and it does not require you to know the direction at all.** That is the point. You are being paid for being positioned before a big move, not for predicting which way it goes.

### And now the Bangladesh part

Three warnings, and they are not optional.

**The quiet is often just silence.** On the DSE, a stock frequently goes quiet simply because there is no news until the next quarterly result. Then the result comes out and the price gaps — jumps straight past your buy line and your sell line before you can act. **So look up when the company reports before you plan the trade.**

**Very low volume is not a "contraction."** If a share trades nine thousand pieces a day, it is not quietly consolidating. It is barely trading. There is no pattern there to read.

**The circuit limit caps the first day.** Even when your breakout is real, the exchange will not let the price move more than the allowed percentage in one session. The big expansion you were waiting for arrives in instalments.`,
      bn: `একটি স্প্রিং-এর কথা ভাবুন।

স্প্রিংটি চেপে ধরে রাখুন। যতক্ষণ ধরে রাখছেন কিছুই ঘটে না — এটি চাপা অবস্থায় পড়ে থাকে, দেখতে একঘেয়ে। কিন্তু আপনি এমন কিছু জানেন যা স্প্রিংটি বলছে না: **শক্তিটি জমা হয়ে আছে, আর ছেড়ে দিলে এটি দ্রুত ছুটবে।**

আপনি যা *জানেন না* তা হলো কোন দিকে ছুটবে। সেটি নির্ভর করে আপনি কীভাবে ছাড়ছেন তার ওপর, কত জোরে চেপেছিলেন তার ওপর নয়।

মূল্য চার্টে কনসোলিডেশন এটিই, আর পুরো অধ্যায়টিও এটিই।

### আপনি আসলে কী দেখছেন

একটি শেয়ার দুই সপ্তাহ জোরে ওপরে ওঠে। তারপর ওঠা থামে। পরের দুই সপ্তাহ এটি একটি সংকীর্ণ পরিসরে পাশাপাশি ভাসে — কোনো দিন সামান্য ওপরে, কোনো দিন সামান্য নিচে, নাটকীয় কিছুই নয়। লেনদেনের ভলিউম কমে যায়। মনে হয় কিছুই ঘটছে না।

কিছু একটা ঘটছে। **যাঁরা তাড়াহুড়ো করে কিনতে চেয়েছিলেন তাঁরা কিনে ফেলেছেন। যাঁরা তাড়াহুড়ো করে বেচতে চেয়েছিলেন তাঁরা বেচে ফেলেছেন।** যা থাকে তা হলো তাড়াহুড়ো নেই এমন মানুষদের মধ্যে একটি নীরব মুখোমুখি অবস্থান।

ঐ অবস্থান টিকতে পারে না। আগে বা পরে কেউ নতুন তথ্য পাবেন, বা অধৈর্য হবেন, বা মার্জিন কল পাবেন — আর দাম তড়িঘড়ি সংকীর্ণ পরিসর ছেড়ে বেরিয়ে যাবে।

### প্রায় সবাই যে ভুলটি করেন

বইগুলো এই নীরব সময়গুলোকে নাম দেয়। ফ্ল্যাগ। পেন্যান্ট। ট্রায়াঙ্গল। রেক্ট্যাঙ্গল। তারপর বলে দেয় কোনটি "সাধারণত" কোন দিকে ভাঙে।

**ঐ "সাধারণত" শব্দটি নিয়ে খুব সতর্ক থাকুন।** যে ট্রায়াঙ্গল দুই দিক থেকে সমানভাবে সংকুচিত হয়, তার নিজের আকৃতি অনুযায়ীই দিক সম্পর্কে কোনো মত নেই। এটি এমন বাজারের ছবি যে মনস্থির করতে পারছে না। শেয়ারটি আগে উপরে গিয়েছিল বলে সম্ভবত উপরেই ভাঙবে — এটি নিয়মের পোশাক পরা একটি অনুমান।

### তার বদলে কী করবেন

দিক অনুমানের চেষ্টা করবেন না। এটি করুন:

১. নীরব পরিসরের ওপর দিয়ে একটি রেখা আর নিচ দিয়ে একটি রেখা আঁকুন।
২. আগেই ঠিক করে ফেলুন যে দাম ওপরের রেখার ওপরে ক্লোজ করলে আপনি কিনবেন, আর নিচের রেখার নিচে ক্লোজ করলে বেচবেন বা সরে দাঁড়াবেন।
৩. আগেই ঠিক করুন কোথায় আপনি ভুল — সাধারণত পরিসরের বিপরীত দিক।
৪. হিসাব করুন কতগুলো শেয়ার রাখতে পারেন যাতে ভুল হলে আপনার অ্যাকাউন্টের একটি ছোট, নির্দিষ্ট পরিমাণ খরচ হয়।

**লক্ষ করুন ধাপ ৪-ই একমাত্র ধাপ যেখানে টাকা জড়িত, আর তাতে দিক জানার কোনো প্রয়োজনই নেই।** এটিই মূল কথা। বড় চালের আগে অবস্থান নিয়ে থাকার জন্য আপনি পারিশ্রমিক পাচ্ছেন, কোন দিকে যাবে তা পূর্বানুমান করার জন্য নয়।

### আর এবার বাংলাদেশ অংশটি

তিনটি সতর্কতা, এবং এগুলো ঐচ্ছিক নয়।

**নীরবতা প্রায়ই কেবল নীরবতাই।** ডিএসই-তে একটি শেয়ার প্রায়ই কেবল এ কারণেই চুপ হয়ে যায় যে পরের প্রান্তিক ফল না আসা পর্যন্ত কোনো খবর নেই। তারপর ফল বেরোয় আর দাম গ্যাপ দেয় — আপনি কিছু করার আগেই আপনার কেনার রেখা ও বেচার রেখা দুটোই টপকে যায়। **তাই ট্রেড পরিকল্পনার আগে দেখে নিন কোম্পানিটি কবে ফল প্রকাশ করে।**

**খুব কম ভলিউম কোনো "সংকোচন" নয়।** একটি শেয়ার দিনে নয় হাজার পিস লেনদেন হলে সেটি নীরবে কনসোলিডেট করছে না। সেটি কোনোমতে লেনদেন হচ্ছে। ওখানে পড়ার মতো কোনো প্যাটার্ন নেই।

**সার্কিট সীমা প্রথম দিনটিকে আটকে দেয়।** আপনার ব্রেকআউট সত্যি হলেও এক্সচেঞ্জ এক সেশনে অনুমোদিত শতাংশের বেশি দাম নড়তে দেবে না। যে বড় সম্প্রসারণের অপেক্ষায় ছিলেন তা কিস্তিতে আসে।`,
    },

    example: {
      en: `### DELTASPIN: a flag that passed every gate and still could not be traded the way the textbook says

DELTASPIN is a mid-cap DSE spinning name used illustratively here; **every figure below is constructed, not historical.** It is the same counter used in the planner sheet and in §33.5, so the numbers reconcile cell for cell.

### The pole

Over nine sessions the stock ran from BDT 42.00 to BDT 55.50 on average volume of 1,850,000 shares.

| Item | Value |
|---|---|
| Pole start | 42.00 |
| Pole end | 55.50 |
| Pole bars | 9 |
| **Pole height** | **13.50** |
| Pole gain | 32.14% |
| Advance per bar | 1.50 |
| Avg volume in pole | 1,850,000 |

$$\\text{Pole height} = 55.50 - 42.00 = 13.50, \\qquad \\frac{13.50}{42.00} = 32.14\\%$$

**A 32% advance in nine sessions on a DSE mid-cap is not a drift; it is a repricing.** Somebody decided the stock was worth a third more and paid up to say so. That is what makes the pole informative: it is a measurement of how far this particular buyer base will move this particular stock when it is motivated.

### The consolidation

Then it stopped. Eleven sessions of sideways drift between 54.20 and 50.80 on average volume of 620,000.

| Item | Value |
|---|---|
| Consolidation bars | 11 |
| Consolidation high | 54.20 |
| Consolidation low | 50.80 |
| **Consolidation range** | **3.40** |
| Midpoint | 52.50 |
| Avg volume in consolidation | 620,000 |

Two ratios, and they are the only two numbers in this chapter that carry real information:

$$\\text{Range compression} = \\frac{3.40}{13.50} = 0.2519$$

$$\\text{Volume contraction} = \\frac{620{,}000}{1{,}850{,}000} = 0.3351$$

**The daily battlefield has shrunk to a quarter of the pole's size on a third of the pole's volume.** That is the spring, quantified. Note that neither number required you to decide whether this is a "flag" or a "pennant". **The name is decoration; the two ratios are the setup.**

A third figure is worth computing because it is the one that disqualifies most candidates:

$$\\text{Retracement of the pole} = \\frac{55.50 - 50.80}{13.50} = \\frac{4.70}{13.50} = 34.81\\%$$

**A continuation structure gives back a third of the pole, not two thirds.** Once a consolidation retraces more than about 50% of its own pole, the pole's information is being contradicted rather than digested, and you are looking at a reversal in progress that has not been named yet. At 34.81% DELTASPIN is comfortably inside the tolerance.

### Arming both triggers

Buffer of 0.5% outside each boundary, so ordinary noise at the edge does not fire the order:

$$\\text{Upper trigger} = 54.20 \\times 1.005 = 54.471$$
$$\\text{Lower trigger} = 50.80 \\times 0.995 = 50.546$$

Measured targets, pole height projected from each trigger:

$$\\text{Upside target} = 54.471 + 13.50 = 67.971$$
$$\\text{Downside target} = 50.546 - 13.50 = 37.046$$

**Notice that the downside target at 37.046 sits below the pole's own starting price of 42.00.** That is not a rounding artefact — it is the honest statement of what a failed flag means. The market would be saying the entire nine-session repricing was wrong, and the measured-move convention does not flinch from projecting that.

### The long trade, priced

| Item | Value |
|---|---|
| Entry (upper trigger) | 54.471 |
| Invalidation (consolidation low) | 50.800 |
| **Risk per share** | **3.671** |
| Target | 67.971 |
| **Reward per share** | **13.500** |
| **Reward-to-risk** | **3.68×** |
| Break-even win rate | **21.38%** |

$$R{:}R = \\frac{13.500}{3.671} = 3.6775, \\qquad p^{*} = \\frac{1}{1 + 3.6775} = 0.2138 = 21.38\\%$$

**This trade needs to work barely one time in five to break even.** That is the whole reason for the exercise, and it comes from the geometry: the invalidation is 3.671 away and the objective is 13.500 away, because the consolidation is narrow and the pole was tall.

Sizing on a BDT 15,00,000 account risking 0.75%:

$$\\text{Risk budget} = 1{,}500{,}000 \\times 0.0075 = 11{,}250$$
$$\\text{Shares} = \\left\\lfloor \\frac{11{,}250}{3.671} \\right\\rfloor = \\lfloor 3064.56 \\rfloor = 3{,}064$$
$$\\text{Position value} = 3{,}064 \\times 54.471 = 166{,}899.14 = 11.13\\% \\text{ of equity}$$

**A 0.75% risk buys an 11.13% position.** That leverage of risk into exposure — a factor of about 14.8 — is entirely a function of how tight the invalidation is, and it is the single most useful consequence of trading compression rather than direction.

### The four gates, and why they exist

| Gate | Threshold | DELTASPIN | Result |
|---|---|---|---|
| Liquidity | avg vol ≥ 50,000 | 620,000 | **PASS** |
| Range compression | ≤ 0.50 | 0.2519 | **PASS** |
| Volume contraction | ≤ 0.70 | 0.3351 | **PASS** |
| Duration | 5–25 bars | 11 | **PASS** |

Verdict: **Tradeable — arm both triggers and size off 3,064 shares.**

**The liquidity gate is tested first and is absolute, not weighted.** This is Chapter 30's exhaustion override arriving in a new domain and for the same reason. Suppose average volume in the consolidation had been 38,000 rather than 620,000. The compression ratio would still be 0.2519, the volume contraction would look even more impressive, and the duration would still be 11 bars — three PASSes out of four and a beautiful-looking chart. **The sheet returns "Do not trade — absence of trading is not a pattern," and it returns it regardless of the other three.** A contraction measured from a baseline that was already absent is not evidence of anything; it is arithmetic performed on noise.

### The DSE overlay, where the textbook stops working

Now the part that no imported book will tell you. Prior close is 53.90 and the applicable band is 10%.

$$\\text{Day-1 upper circuit} = 53.90 \\times 1.10 = 59.29$$

The measured target is 67.971. **It is not reachable on day one, and it is not reachable on day two either.**

| Session | Max close under the band | Target reached? |
|---|---|---|
| Day 1 | 59.29 | No |
| Day 2 | 65.219 | No |
| Day 3 | 71.741 | Yes — but only at a third consecutive limit |

**The measured move requires three consecutive limit-up sessions to complete.** Three consecutive limits on a DSE mid-cap is not a plan; it is a lottery ticket. What actually happens is that the expansion arrives over eight, twelve, twenty sessions — during which the reason for the breakout has ample opportunity to be reversed, the pole's information goes stale, and your 21.38% break-even quietly stops being the right number because you are now holding a multi-week position on a nine-bar thesis.

**Chapter 2 established that a price control relocates pressure rather than removing it. Here is the concrete cost of that relocation: it converts a swing trade into a position trade without asking you.**

Second overlay. The planner records six days to the next reporting disclosure.

$$6 \\le 10 \\;\\Rightarrow\\; \\textbf{DISCLOSURE INSIDE HOLD WINDOW — halve size}$$

So the real position is not 3,064 shares. It is:

$$\\lfloor 3{,}064 / 2 \\rfloor = 1{,}532 \\text{ shares}, \\qquad \\text{value} = 1{,}532 \\times 54.471 = 83{,}449.57$$
$$\\text{Actual risk} = 1{,}532 \\times 3.671 = 5{,}623.97 = 0.375\\% \\text{ of equity}$$

**Why halve rather than skip?** Because you cannot know which way the disclosure resolves, and because the pattern is genuinely there. Halving expresses the honest position: the setup is valid, but a scheduled event inside my holding window means my stop is not reliable — a gap through 50.80 fills at whatever the opening auction says, not at 50.80. **Sizing is the only lever you have against gap risk, because the stop is not one.**

### The counterfactual: the flag that failed

Suppose instead session twelve had closed at 50.30, below the lower trigger of 50.546, on volume of 1,410,000.

$$\\text{Volume} = \\frac{1{,}410{,}000}{620{,}000} = 2.27\\times \\text{ the consolidation average}$$

That is a genuine downside resolution: expansion, direction, and volume all agreeing. The lower trigger's measured target is 37.046.

**In a market with a functioning short side, this is a trade with a 3.69 reward-to-risk** — invalidation at the consolidation high of 54.20, risk 3.654, reward 13.500. On the DSE it is not a trade. It resolves into exactly two actions:

1. **Do not buy.** The upside thesis is dead, and the crowd that bought inside the consolidation between 50.80 and 54.20 is now trapped and will be supply on every rally.
2. **If you were already long from the pole, this is the exit.** Not "wait for a bounce" — the structure that justified holding has failed.

**The failed flag is not a wasted analysis. It is the same analysis returning a different instruction.** That is what arming both triggers buys you: you were never predicting, so you were never wrong, and you had the exit written down before the session that needed it.

### What this example is actually teaching

Three claims, in descending order of confidence.

**High confidence: the compression ratios are measurable and the risk arithmetic that follows is exact.** 0.2519, 0.3351, risk 3.671, 3,064 shares. None of that is opinion.

**Medium confidence: compression resolves into expansion.** Volatility clusters and mean-reverts; this is well documented and Chapter 38's bandwidth and Chapter 39's ATR both formalise it.

**Low confidence — approaching zero: the direction of the resolution.** The pattern's name suggests upward. **The pattern's name is worth nothing.** Everything in this worked case was built so that the low-confidence claim never has to be made.`,
      bn: `### DELTASPIN: যে ফ্ল্যাগ প্রতিটি গেট পেরিয়েছে তবু পাঠ্যবই যেভাবে বলে সেভাবে ট্রেড করা যায়নি

DELTASPIN এখানে দৃষ্টান্তমূলকভাবে ব্যবহৃত একটি মাঝারি আকারের ডিএসই স্পিনিং নাম; **নিচের প্রতিটি সংখ্যা নির্মিত, ঐতিহাসিক নয়।** এটি প্ল্যানার শিট ও §৩৩.৫-এ ব্যবহৃত একই কাউন্টার, তাই সংখ্যাগুলো ঘর ধরে ধরে মেলে।

### পোল

নয়টি সেশনে শেয়ারটি ১৮,৫০,০০০ শেয়ারের গড় ভলিউমে ৪২.০০ টাকা থেকে ৫৫.৫০ টাকায় উঠেছে।

| উপাদান | মান |
|---|---|
| পোল শুরু | ৪২.০০ |
| পোল শেষ | ৫৫.৫০ |
| পোল বার | ৯ |
| **পোলের উচ্চতা** | **১৩.৫০** |
| পোলের বৃদ্ধি | ৩২.১৪% |
| বার প্রতি অগ্রগতি | ১.৫০ |
| পোলে গড় ভলিউম | ১৮,৫০,০০০ |

$$\\text{Pole height} = 55.50 - 42.00 = 13.50, \\qquad \\frac{13.50}{42.00} = 32.14\\%$$

**একটি ডিএসই মিড-ক্যাপে নয় সেশনে ৩২% অগ্রগতি নিছক ভেসে যাওয়া নয়; এটি পুনর্মূল্যায়ন।** কেউ সিদ্ধান্ত নিয়েছে শেয়ারটি এক-তৃতীয়াংশ বেশি মূল্যের, আর তা বলার জন্য বেশি দাম দিয়েছে। এটিই পোলটিকে তথ্যবহ করে: এটি মাপে যে এই নির্দিষ্ট ক্রেতাগোষ্ঠী প্রেরণা পেলে এই নির্দিষ্ট শেয়ারটিকে কতদূর নাড়াতে পারে।

### কনসোলিডেশন

তারপর এটি থামল। ৬,২০,০০০ গড় ভলিউমে এগারোটি সেশন ৫৪.২০ ও ৫০.৮০-র মধ্যে পাশাপাশি প্রবাহ।

| উপাদান | মান |
|---|---|
| কনসোলিডেশন বার | ১১ |
| কনসোলিডেশন হাই | ৫৪.২০ |
| কনসোলিডেশন লো | ৫০.৮০ |
| **কনসোলিডেশন রেঞ্জ** | **৩.৪০** |
| মধ্যবিন্দু | ৫২.৫০ |
| কনসোলিডেশনে গড় ভলিউম | ৬,২০,০০০ |

দুটি অনুপাত, আর এই অধ্যায়ে এই দুটিই একমাত্র সংখ্যা যা প্রকৃত তথ্য বহন করে:

$$\\text{Range compression} = \\frac{3.40}{13.50} = 0.2519$$

$$\\text{Volume contraction} = \\frac{620{,}000}{1{,}850{,}000} = 0.3351$$

**দৈনিক রণক্ষেত্র সংকুচিত হয়ে পোলের এক-চতুর্থাংশে নেমেছে, পোলের এক-তৃতীয়াংশ ভলিউমে।** পরিমাণে প্রকাশিত স্প্রিং এটিই। লক্ষ করুন কোনো সংখ্যাটিই আপনাকে ঠিক করতে বাধ্য করেনি এটি "ফ্ল্যাগ" না "পেন্যান্ট"। **নামটি অলংকার; দুটি অনুপাতই সেটআপ।**

তৃতীয় একটি সংখ্যা গণনার যোগ্য কারণ এটিই বেশিরভাগ প্রার্থীকে বাতিল করে:

$$\\text{Retracement of the pole} = \\frac{55.50 - 50.80}{13.50} = \\frac{4.70}{13.50} = 34.81\\%$$

**কন্টিনিউয়েশন গঠন পোলের এক-তৃতীয়াংশ ফেরত দেয়, দুই-তৃতীয়াংশ নয়।** একটি কনসোলিডেশন যখন নিজের পোলের প্রায় ৫০%-এর বেশি ফেরত দেয়, তখন পোলের তথ্য হজম নয়, খণ্ডিত হচ্ছে, আর আপনি দেখছেন এমন একটি রিভার্সাল যার এখনো নামকরণ হয়নি। ৩৪.৮১%-এ DELTASPIN স্বচ্ছন্দে সহনসীমার ভেতরে।

### দুই দিকেই ট্রিগার সাজানো

প্রতিটি সীমানার ০.৫% বাইরে বাফার, যাতে প্রান্তের সাধারণ হইচইয়ে অর্ডার চালু না হয়:

$$\\text{Upper trigger} = 54.20 \\times 1.005 = 54.471$$
$$\\text{Lower trigger} = 50.80 \\times 0.995 = 50.546$$

পরিমাপকৃত লক্ষ্য, প্রতিটি ট্রিগার থেকে পোলের উচ্চতা প্রক্ষিপ্ত:

$$\\text{Upside target} = 54.471 + 13.50 = 67.971$$
$$\\text{Downside target} = 50.546 - 13.50 = 37.046$$

**লক্ষ করুন নিম্নমুখী লক্ষ্য ৩৭.০৪৬ পোলের নিজের শুরুর দাম ৪২.০০-র নিচে বসে আছে।** এটি রাউন্ডিংয়ের কারসাজি নয় — এটি ব্যর্থ ফ্ল্যাগের অর্থ কী তার সৎ বিবৃতি। বাজার বলছে পুরো নয়-সেশনের পুনর্মূল্যায়নটিই ভুল ছিল, আর পরিমাপকৃত-চালের রীতি তা প্রক্ষেপ করতে পিছপা হয় না।

### লং ট্রেড, দামসহ

| উপাদান | মান |
|---|---|
| প্রবেশ (উপরের ট্রিগার) | ৫৪.৪৭১ |
| অকার্যকরতা (কনসোলিডেশন লো) | ৫০.৮০০ |
| **শেয়ার প্রতি ঝুঁকি** | **৩.৬৭১** |
| লক্ষ্য | ৬৭.৯৭১ |
| **শেয়ার প্রতি পুরস্কার** | **১৩.৫০০** |
| **পুরস্কার-থেকে-ঝুঁকি** | **৩.৬৮×** |
| ব্রেক-ইভেন উইন রেট | **২১.৩৮%** |

$$R{:}R = \\frac{13.500}{3.671} = 3.6775, \\qquad p^{*} = \\frac{1}{1 + 3.6775} = 0.2138 = 21.38\\%$$

**এই ট্রেডটিকে সমান-সমান হতে পাঁচবারে সবে একবার কাজ করলেই চলে।** পুরো অনুশীলনের কারণ এটিই, আর তা আসে জ্যামিতি থেকে: অকার্যকরতা ৩.৬৭১ দূরে আর উদ্দেশ্য ১৩.৫০০ দূরে, কারণ কনসোলিডেশন সংকীর্ণ আর পোলটি ছিল উঁচু।

১৫,০০,০০০ টাকার অ্যাকাউন্টে ০.৭৫% ঝুঁকিতে আকার নির্ধারণ:

$$\\text{Risk budget} = 1{,}500{,}000 \\times 0.0075 = 11{,}250$$
$$\\text{Shares} = \\left\\lfloor \\frac{11{,}250}{3.671} \\right\\rfloor = \\lfloor 3064.56 \\rfloor = 3{,}064$$
$$\\text{Position value} = 3{,}064 \\times 54.471 = 166{,}899.14 = 11.13\\% \\text{ of equity}$$

**০.৭৫% ঝুঁকি ১১.১৩% পজিশন কেনে।** ঝুঁকিকে এক্সপোজারে রূপান্তরের এই গুণক — প্রায় ১৪.৮ — সম্পূর্ণভাবে অকার্যকরতা কত আঁটসাঁট তার ফল, আর দিকের বদলে সংকোচন ট্রেড করার এটিই একক সবচেয়ে কার্যকর পরিণতি।

### চারটি গেট, ও কেন সেগুলো আছে

| গেট | সীমা | DELTASPIN | ফল |
|---|---|---|---|
| তরলতা | গড় ভলিউম ≥ ৫০,০০০ | ৬,২০,০০০ | **PASS** |
| রেঞ্জ সংকোচন | ≤ ০.৫০ | ০.২৫১৯ | **PASS** |
| ভলিউম সংকোচন | ≤ ০.৭০ | ০.৩৩৫১ | **PASS** |
| সময়কাল | ৫–২৫ বার | ১১ | **PASS** |

রায়: **Tradeable — দুই দিকেই ট্রিগার সাজান ও ৩,০৬৪ শেয়ারে আকার নিন।**

**তরলতার গেট প্রথমে পরীক্ষিত হয় ও এটি পরম, ভারিত নয়।** এটি নতুন ক্ষেত্রে অধ্যায় ৩০-এর এক্সহসশন অগ্রাহ্যকারী শর্ত, আর একই কারণে। ধরুন কনসোলিডেশনে গড় ভলিউম ৬,২০,০০০-এর বদলে ৩৮,০০০ হতো। সংকোচন অনুপাত তবু ০.২৫১৯ থাকত, ভলিউম সংকোচন আরও চিত্তাকর্ষক দেখাত, আর সময়কাল তবু ১১ বার — চারটির তিনটিতে PASS আর একটি সুন্দর চার্ট। **শিট ফেরত দেয় "Do not trade — absence of trading is not a pattern," আর বাকি তিনটি যা-ই হোক তাই ফেরত দেয়।** যে ভিত্তি ইতিমধ্যেই অনুপস্থিত তা থেকে মাপা সংকোচন কোনো কিছুরই প্রমাণ নয়; তা হইচইয়ের ওপর করা পাটিগণিত।

### ডিএসই স্তর, যেখানে পাঠ্যবই কাজ করা বন্ধ করে

এবার সেই অংশ যা কোনো আমদানি করা বই বলবে না। আগের ক্লোজ ৫৩.৯০ আর প্রযোজ্য ব্যান্ড ১০%।

$$\\text{Day-1 upper circuit} = 53.90 \\times 1.10 = 59.29$$

পরিমাপকৃত লক্ষ্য ৬৭.৯৭১। **এটি প্রথম দিনে পৌঁছানো যায় না, দ্বিতীয় দিনেও যায় না।**

| সেশন | ব্যান্ডের অধীনে সর্বোচ্চ ক্লোজ | লক্ষ্যে পৌঁছাল? |
|---|---|---|
| দিন ১ | ৫৯.২৯ | না |
| দিন ২ | ৬৫.২১৯ | না |
| দিন ৩ | ৭১.৭৪১ | হ্যাঁ — কিন্তু কেবল টানা তৃতীয় সীমায় |

**পরিমাপকৃত চাল সম্পূর্ণ হতে টানা তিনটি লিমিট-আপ সেশন লাগে।** একটি ডিএসই মিড-ক্যাপে টানা তিনটি সীমা কোনো পরিকল্পনা নয়; এটি লটারির টিকিট। বাস্তবে যা ঘটে তা হলো সম্প্রসারণ আসে আট, বারো, বিশ সেশনে — যার মধ্যে ব্রেকআউটের কারণটি উল্টে যাওয়ার যথেষ্ট সুযোগ থাকে, পোলের তথ্য বাসি হয়, আর আপনার ২১.৩৮% ব্রেক-ইভেন নীরবে সঠিক সংখ্যা থাকা বন্ধ করে, কারণ আপনি এখন নয়-বারের যুক্তিতে বহু-সপ্তাহের পজিশন ধরে আছেন।

**অধ্যায় ২ প্রতিষ্ঠা করেছে যে মূল্য নিয়ন্ত্রণ চাপ দূর করে না, স্থানান্তরিত করে। ঐ স্থানান্তরের সুনির্দিষ্ট খরচ এখানে: এটি আপনাকে না জিজ্ঞেস করেই একটি সুইং ট্রেডকে পজিশন ট্রেডে বদলে দেয়।**

দ্বিতীয় স্তর। প্ল্যানার লিপিবদ্ধ করে পরবর্তী প্রতিবেদন প্রকাশে ছয় দিন বাকি।

$$6 \\le 10 \\;\\Rightarrow\\; \\textbf{DISCLOSURE INSIDE HOLD WINDOW — halve size}$$

তাই প্রকৃত পজিশন ৩,০৬৪ শেয়ার নয়। এটি:

$$\\lfloor 3{,}064 / 2 \\rfloor = 1{,}532 \\text{ shares}, \\qquad \\text{value} = 1{,}532 \\times 54.471 = 83{,}449.57$$
$$\\text{Actual risk} = 1{,}532 \\times 3.671 = 5{,}623.97 = 0.375\\% \\text{ of equity}$$

**অর্ধেক করবেন কেন, বাদ দেবেন না কেন?** কারণ প্রকাশনা কোন দিকে মিটবে আপনি জানতে পারেন না, আর প্যাটার্নটি সত্যিই সেখানে আছে। অর্ধেক করা সৎ অবস্থানটি প্রকাশ করে: সেটআপ বৈধ, কিন্তু আমার ধারণ-জানালার ভেতরে একটি নির্ধারিত ঘটনা মানে আমার স্টপ নির্ভরযোগ্য নয় — ৫০.৮০ ভেদ করা একটি গ্যাপ ফিল হবে ওপেনিং নিলাম যা বলে সেই দামে, ৫০.৮০-তে নয়। **গ্যাপ ঝুঁকির বিরুদ্ধে আকার নির্ধারণই আপনার একমাত্র লিভার, কারণ স্টপ লিভার নয়।**

### বিপরীত ঘটনা: যে ফ্ল্যাগ ব্যর্থ হলো

ধরুন বারো নম্বর সেশন বরং ১৪,১০,০০০ ভলিউমে ৫০.৩০-তে ক্লোজ করত, নিচের ট্রিগার ৫০.৫৪৬-এর নিচে।

$$\\text{Volume} = \\frac{1{,}410{,}000}{620{,}000} = 2.27\\times \\text{ the consolidation average}$$

এটি প্রকৃত নিম্নমুখী নিষ্পত্তি: সম্প্রসারণ, দিক ও ভলিউম সবই একমত। নিচের ট্রিগারের পরিমাপকৃত লক্ষ্য ৩৭.০৪৬।

**কার্যকর শর্ট সাইডের বাজারে এটি ৩.৬৯ পুরস্কার-থেকে-ঝুঁকির একটি ট্রেড** — অকার্যকরতা কনসোলিডেশন হাই ৫৪.২০-তে, ঝুঁকি ৩.৬৫৪, পুরস্কার ১৩.৫০০। ডিএসই-তে এটি ট্রেড নয়। এটি ঠিক দুটি কাজে গিয়ে দাঁড়ায়:

১. **কিনবেন না।** ঊর্ধ্বমুখী যুক্তি মৃত, আর যে ভিড় কনসোলিডেশনের ভেতরে ৫০.৮০ ও ৫৪.২০-র মধ্যে কিনেছে তারা এখন আটকা ও প্রতিটি র‍্যালিতে সরবরাহ হবে।
২. **পোল থেকে আপনি যদি ইতিমধ্যেই লং থাকেন, এটিই প্রস্থান।** "বাউন্সের অপেক্ষা করুন" নয় — যে কাঠামো ধরে রাখাকে ন্যায্যতা দিয়েছিল তা ব্যর্থ হয়েছে।

**ব্যর্থ ফ্ল্যাগ নষ্ট বিশ্লেষণ নয়। এটি একই বিশ্লেষণ ভিন্ন নির্দেশ ফেরত দিচ্ছে।** দুই দিকে ট্রিগার সাজানো এটিই কিনে দেয়: আপনি কখনো পূর্বানুমান করেননি, তাই কখনো ভুলও হননি, আর যে সেশনে প্রস্থানের দরকার হয়েছে তার আগেই তা লিখে রেখেছিলেন।

### এই উদাহরণ আসলে কী শেখাচ্ছে

তিনটি দাবি, আত্মবিশ্বাসের অবরোহী ক্রমে।

**উচ্চ আত্মবিশ্বাস: সংকোচনের অনুপাতগুলো পরিমাপযোগ্য আর তার পরের ঝুঁকির পাটিগণিত নিখুঁত।** ০.২৫১৯, ০.৩৩৫১, ঝুঁকি ৩.৬৭১, ৩,০৬৪ শেয়ার। এর কিছুই মতামত নয়।

**মাঝারি আত্মবিশ্বাস: সংকোচন সম্প্রসারণে মেটে।** ভোলাটিলিটি গুচ্ছবদ্ধ হয় ও গড়মুখী; এটি সুপ্রলেখিত আর অধ্যায় ৩৮-এর ব্যান্ডউইথ ও অধ্যায় ৩৯-এর ATR দুটিই একে আনুষ্ঠানিক রূপ দেয়।

**নিম্ন আত্মবিশ্বাস — শূন্যের কাছাকাছি: নিষ্পত্তির দিক।** প্যাটার্নের নাম ইঙ্গিত করে ঊর্ধ্বমুখী। **প্যাটার্নের নামের কোনো মূল্য নেই।** এই কাজ করা উদাহরণের সবকিছু এমনভাবে গড়া যাতে নিম্ন-আত্মবিশ্বাসের দাবিটি কখনো করতেই না হয়।`,
    },

    formula: {
      en: `### 1. The pole is a measurement, not a decoration

$$H = P_{\\text{end}} - P_{\\text{start}}, \\qquad \\text{slope} = \\frac{H}{B_{\\text{pole}}}$$

For DELTASPIN, $H = 55.50 - 42.00 = 13.50$ over $B_{\\text{pole}} = 9$ bars, so 1.50 per bar.

**Why the pole height and not a percentage of price?** Because everything downstream — the target, the reward figure, the reward-to-risk — is denominated in taka per share, and mixing a percentage objective with a taka stop produces a ratio that is not a ratio of anything. The percentage (32.14%) is worth computing as a sanity check on whether the move was real, but it is never the unit of the target.

### 2. Compression, which replaces the pattern's name

$$\\rho = \\frac{R_{\\text{consol}}}{H} = \\frac{P^{\\text{hi}}_{\\text{consol}} - P^{\\text{lo}}_{\\text{consol}}}{H}, \\qquad \\nu = \\frac{\\overline{V}_{\\text{consol}}}{\\overline{V}_{\\text{pole}}}$$

$$\\rho = \\frac{3.40}{13.50} = 0.2519, \\qquad \\nu = \\frac{620{,}000}{1{,}850{,}000} = 0.3351$$

**Two independent measurements of the same phenomenon, and requiring both is the point.** Price can go quiet because volume left (an information vacuum), or volume can stay while price goes quiet (genuine two-sided absorption at a tightening spread). The first is nothing; the second is a coiled spring. **A low $\\rho$ with a high $\\nu$ — narrow range on undiminished volume — is the strongest reading available**, because it means the same participation is now producing a quarter of the movement, which is what absorption looks like from outside the order book. DELTASPIN's $\\nu$ of 0.3351 is ordinary rather than exceptional, and the setup is graded accordingly.

Normalising the consolidation range by the *pole height* rather than by price is the second deliberate choice. **The question is not "is this range narrow in absolute terms" but "is this range narrow relative to what this stock just proved it can do."** A 3.40 range is wide on a stock that moves 0.30 a day and trivially tight after a 13.50 impulse.

### 3. Retracement, the disqualifier

$$\\lambda = \\frac{P_{\\text{end}} - P^{\\text{lo}}_{\\text{consol}}}{H} = \\frac{55.50 - 50.80}{13.50} = 0.3481$$

**Reject the setup as a continuation structure when $\\lambda > 0.50$.** The reasoning is not statistical but definitional: a consolidation that hands back more than half the impulse is no longer digesting the impulse, it is negating it. The geometry may still be a triangle, but the pole's information has been contradicted and projecting the pole height from the break is projecting a measurement the market has already disputed.

### 4. Triggers with a buffer, on both sides, always

$$T_{\\uparrow} = P^{\\text{hi}}_{\\text{consol}} \\times (1 + \\beta), \\qquad T_{\\downarrow} = P^{\\text{lo}}_{\\text{consol}} \\times (1 - \\beta), \\qquad \\beta = 0.005$$

$$T_{\\uparrow} = 54.20 \\times 1.005 = 54.471, \\qquad T_{\\downarrow} = 50.80 \\times 0.995 = 50.546$$

**The buffer is a multiplicative percentage rather than a fixed taka amount for the same reason Chapter 30's zone was scaled to ATR:** a fixed 0.25 buffer is meaningless on a BDT 300 stock and enormous on a BDT 12 stock. A percentage buffer at least scales with price. **An ATR-scaled buffer would be better still** — $T_{\\uparrow} = P^{\\text{hi}} + 0.25\\,ATR$ — and once you reach Chapter 39 you should upgrade to it. The percentage version is used here because it requires no indicator, and a planner that a beginner can build on paper is worth more than a superior formula they will not compute.

**Both triggers are armed regardless of which pattern you think you are looking at.** This is not risk management pedantry; it is the direct operational consequence of §33.1's argument. If you can name the direction in advance, you do not need the second trigger. You cannot, so you do.

### 5. Measured targets, and their epistemic status

$$G_{\\uparrow} = T_{\\uparrow} + H = 54.471 + 13.50 = 67.971$$
$$G_{\\downarrow} = T_{\\downarrow} - H = 50.546 - 13.50 = 37.046$$

**Projecting from the trigger rather than from the consolidation boundary is deliberate.** Project from 54.20 and you credit yourself the 0.271 of buffer you had to pay to enter, inflating the reward figure by the exact amount the buffer cost you. Small here; not small on a 2% buffer.

**The measured move is a convention for producing a reward number, not a forecast.** It is defensible because it scales the objective to the volatility that produced the pole, which is a real normalisation. It is not defensible as a prediction, and price fails to reach it constantly. The correct posture: **use it to decide whether the trade clears your reward-to-risk floor, then manage the position on structure, not on the target.**

### 6. Risk, sizing and the break-even rate

$$X = P^{\\text{lo}}_{\\text{consol}} = 50.80, \\qquad r = T_{\\uparrow} - X = 54.471 - 50.80 = 3.671$$
$$w = G_{\\uparrow} - T_{\\uparrow} = 13.500, \\qquad R{:}R = \\frac{w}{r} = \\frac{13.500}{3.671} = 3.6775$$
$$p^{*} = \\frac{1}{1 + R{:}R} = \\frac{1}{4.6775} = 0.2138$$

$$N = \\left\\lfloor \\frac{E \\cdot q}{r} \\right\\rfloor = \\left\\lfloor \\frac{1{,}500{,}000 \\times 0.0075}{3.671} \\right\\rfloor = \\lfloor 3064.56 \\rfloor = 3{,}064$$

**The invalidation is the opposite boundary of the consolidation, not a percentage below entry, and this is the single most consequential choice in the chapter.** The consolidation low is where the structure is falsified: price re-entering and traversing the whole range means the compression thesis has been answered in the other direction. A stop placed 3% below entry would sit at 52.84 — inside the range, where ordinary consolidation noise reaches it. **You would be stopped out by the pattern itself.**

Note also the leverage identity that follows:

$$\\frac{N \\cdot T_{\\uparrow}}{E} = \\frac{q}{r / T_{\\uparrow}} = \\frac{0.0075}{0.06739} = 11.13\\%$$

**Position size as a fraction of equity is risk budget divided by fractional risk per share.** Tighter consolidations buy larger positions for identical risk. This is why compression is worth hunting: not because it predicts, but because it is cheap.

### 7. The DSE constraints, which bind before any of the above

$$C_1 = P_{\\text{prev close}} \\times (1 + b) = 53.90 \\times 1.10 = 59.29$$

$$\\text{Sessions to target} \\;\\ge\\; \\left\\lceil \\frac{\\ln(G_{\\uparrow} / P_{\\text{prev close}})}{\\ln(1 + b)} \\right\\rceil = \\left\\lceil \\frac{\\ln(67.971/53.90)}{\\ln 1.10} \\right\\rceil = \\lceil 2.44 \\rceil = 3$$

**Three consecutive limit-up sessions is the theoretical minimum for the measured move to complete.** Print that number next to every measured target you compute. It converts an abstract objective into a statement about how long you must hold and how many overnight gaps you must survive.

The gate structure, in evaluation order:

| Order | Gate | Rule | Type |
|---|---|---|---|
| 1 | Liquidity | $\\overline{V}_{\\text{consol}} \\ge 50{,}000$ | **Absolute veto** |
| 2 | Compression | $\\rho \\le 0.50$ | Weighted |
| 3 | Volume contraction | $\\nu \\le 0.70$ | Weighted |
| 4 | Duration | $5 \\le B_{\\text{consol}} \\le 25$ | Weighted |

$$\\text{Verdict} = \\begin{cases} \\text{Do not trade} & \\overline{V}_{\\text{consol}} < 50{,}000 \\\\ \\text{Tradeable} & \\text{gates 2--4 all pass} \\\\ \\text{Marginal — halve or skip} & \\text{otherwise} \\end{cases}$$

**The liquidity veto is tested first and is not a term in any sum.** This is exactly Chapter 25's quality floor and Chapter 30's exhaustion override, arriving for the third time: **a constraint that a good-looking score can outvote is not a constraint.** On an illiquid counter, gates 2 and 3 do not merely fail to help — they actively mislead, because absence of trading produces beautiful compression ratios.

Finally, the event overlay, applied after sizing:

$$N_{\\text{final}} = \\begin{cases} \\lfloor N/2 \\rfloor & D_{\\text{disclosure}} \\le 10 \\\\ N & \\text{otherwise} \\end{cases} = \\lfloor 3064/2 \\rfloor = 1{,}532$$

**Size is the only defence against a gap, because a stop is not one.** A disclosure inside the holding window means the 50.80 invalidation may fill at 47 or at 44. Halving does not remove that risk; it halves it, which is the whole of what is available.`,
      bn: `### ১. পোল একটি পরিমাপ, অলংকার নয়

$$H = P_{\\text{end}} - P_{\\text{start}}, \\qquad \\text{slope} = \\frac{H}{B_{\\text{pole}}}$$

DELTASPIN-এ $H = 55.50 - 42.00 = 13.50$, $B_{\\text{pole}} = 9$ বারে, অর্থাৎ বার প্রতি ১.৫০।

**পোলের উচ্চতা কেন, দামের শতাংশ কেন নয়?** কারণ পরবর্তী সবকিছু — লক্ষ্য, পুরস্কারের সংখ্যা, পুরস্কার-থেকে-ঝুঁকি — শেয়ার প্রতি টাকায় প্রকাশিত, আর শতাংশে প্রকাশিত উদ্দেশ্যের সঙ্গে টাকায় প্রকাশিত স্টপ মেশালে যে অনুপাত পাওয়া যায় তা কোনো কিছুরই অনুপাত নয়। শতাংশটি (৩২.১৪%) চাল প্রকৃত ছিল কি না তা যাচাইয়ের জন্য গণনার যোগ্য, কিন্তু তা কখনোই লক্ষ্যের একক নয়।

### ২. সংকোচন, যা প্যাটার্নের নামের জায়গা নেয়

$$\\rho = \\frac{R_{\\text{consol}}}{H} = \\frac{P^{\\text{hi}}_{\\text{consol}} - P^{\\text{lo}}_{\\text{consol}}}{H}, \\qquad \\nu = \\frac{\\overline{V}_{\\text{consol}}}{\\overline{V}_{\\text{pole}}}$$

$$\\rho = \\frac{3.40}{13.50} = 0.2519, \\qquad \\nu = \\frac{620{,}000}{1{,}850{,}000} = 0.3351$$

**একই ঘটনার দুটি স্বাধীন পরিমাপ, আর দুটিই দাবি করাই মূল কথা।** দাম চুপ হতে পারে কারণ ভলিউম চলে গেছে (তথ্যের শূন্যতা), বা ভলিউম থেকে যেতে পারে অথচ দাম চুপ (সংকীর্ণ স্প্রেডে প্রকৃত দুই-পক্ষীয় শোষণ)। প্রথমটি কিছুই নয়; দ্বিতীয়টি একটি কুণ্ডলী পাকানো স্প্রিং। **নিম্ন $\\rho$ সঙ্গে উচ্চ $\\nu$ — অক্ষুণ্ন ভলিউমে সংকীর্ণ পরিসর — সবচেয়ে শক্তিশালী পাঠ**, কারণ এর মানে একই অংশগ্রহণ এখন এক-চতুর্থাংশ চলাচল তৈরি করছে, আর অর্ডার বুকের বাইরে থেকে শোষণ ঠিক এমনটাই দেখায়। DELTASPIN-এর ০.৩৩৫১ $\\nu$ ব্যতিক্রমী নয়, সাধারণ, আর সেটআপটির শ্রেণিও সেই অনুযায়ী।

কনসোলিডেশন পরিসরকে দামের বদলে *পোলের উচ্চতা* দিয়ে স্বাভাবিকীকরণ দ্বিতীয় ইচ্ছাকৃত পছন্দ। **প্রশ্নটি "এই পরিসর কি পরম অর্থে সংকীর্ণ" নয়, বরং "এই শেয়ার এইমাত্র যা করতে পারে প্রমাণ করেছে তার তুলনায় এই পরিসর কি সংকীর্ণ।"** যে শেয়ার দিনে ০.৩০ নড়ে তাতে ৩.৪০ পরিসর বিশাল, আর ১৩.৫০ ইম্পালসের পর তা তুচ্ছভাবে আঁটসাঁট।

### ৩. রিট্রেসমেন্ট, বাতিলকারী শর্ত

$$\\lambda = \\frac{P_{\\text{end}} - P^{\\text{lo}}_{\\text{consol}}}{H} = \\frac{55.50 - 50.80}{13.50} = 0.3481$$

**$\\lambda > 0.50$ হলে সেটআপটিকে কন্টিনিউয়েশন গঠন হিসেবে বাতিল করুন।** যুক্তিটি পরিসংখ্যানগত নয়, সংজ্ঞাগত: যে কনসোলিডেশন ইম্পালসের অর্ধেকের বেশি ফেরত দেয় তা আর ইম্পালসটি হজম করছে না, তা একে নাকচ করছে। জ্যামিতি তবু ট্রায়াঙ্গল থাকতে পারে, কিন্তু পোলের তথ্য খণ্ডিত হয়েছে, আর ভাঙন থেকে পোলের উচ্চতা প্রক্ষেপ করা মানে এমন একটি পরিমাপ প্রক্ষেপ করা যা বাজার ইতিমধ্যেই বিতর্কিত করেছে।

### ৪. বাফারসহ ট্রিগার, দুই দিকেই, সর্বদা

$$T_{\\uparrow} = P^{\\text{hi}}_{\\text{consol}} \\times (1 + \\beta), \\qquad T_{\\downarrow} = P^{\\text{lo}}_{\\text{consol}} \\times (1 - \\beta), \\qquad \\beta = 0.005$$

$$T_{\\uparrow} = 54.20 \\times 1.005 = 54.471, \\qquad T_{\\downarrow} = 50.80 \\times 0.995 = 50.546$$

**বাফারটি নির্দিষ্ট টাকার অঙ্কের বদলে গুণক শতাংশ, আর তা ঠিক সেই কারণে যে কারণে অধ্যায় ৩০-এর জোন ATR-এ মাপা হয়েছিল:** ৩০০ টাকার শেয়ারে নির্দিষ্ট ০.২৫ বাফার অর্থহীন আর ১২ টাকার শেয়ারে বিশাল। শতাংশ বাফার অন্তত দামের সঙ্গে মাপ বদলায়। **ATR-এ মাপা বাফার আরও ভালো হতো** — $T_{\\uparrow} = P^{\\text{hi}} + 0.25\\,ATR$ — আর অধ্যায় ৩৯-এ পৌঁছে আপনার তাতেই উন্নীত হওয়া উচিত। এখানে শতাংশ সংস্করণ ব্যবহৃত কারণ এতে কোনো ইন্ডিকেটর লাগে না, আর একজন শিক্ষানবিশ কাগজে যে প্ল্যানার বানাতে পারেন তা এমন একটি উৎকৃষ্টতর সূত্রের চেয়ে বেশি মূল্যবান যা তিনি গণনাই করবেন না।

**আপনি যে প্যাটার্ন দেখছেন বলে ভাবছেন তা যা-ই হোক, দুটি ট্রিগারই সাজানো হয়।** এটি ঝুঁকি ব্যবস্থাপনার পাণ্ডিত্য নয়; এটি §৩৩.১-এর যুক্তির সরাসরি প্রায়োগিক পরিণতি। আগে থেকে দিকের নাম বলতে পারলে দ্বিতীয় ট্রিগারের দরকার নেই। আপনি পারেন না, তাই দেন।

### ৫. পরিমাপকৃত লক্ষ্য, ও তাদের জ্ঞানতাত্ত্বিক মর্যাদা

$$G_{\\uparrow} = T_{\\uparrow} + H = 54.471 + 13.50 = 67.971$$
$$G_{\\downarrow} = T_{\\downarrow} - H = 50.546 - 13.50 = 37.046$$

**কনসোলিডেশনের সীমানার বদলে ট্রিগার থেকে প্রক্ষেপ করা ইচ্ছাকৃত।** ৫৪.২০ থেকে প্রক্ষেপ করলে প্রবেশের জন্য যে ০.২৭১ বাফার দিতে হয়েছে তা আপনি নিজের জমায় তুলে নিচ্ছেন, আর পুরস্কারের সংখ্যা ঠিক ঐ পরিমাণেই স্ফীত হচ্ছে। এখানে সামান্য; ২% বাফারে সামান্য নয়।

**পরিমাপকৃত চাল পুরস্কারের একটি সংখ্যা তৈরির রীতি, পূর্বাভাস নয়।** এটি সমর্থনযোগ্য কারণ এটি উদ্দেশ্যকে ঐ ভোলাটিলিটির মাপে বাঁধে যা পোলটি তৈরি করেছে, আর তা প্রকৃত স্বাভাবিকীকরণ। পূর্বানুমান হিসেবে এটি সমর্থনযোগ্য নয়, আর দাম অনবরত এতে পৌঁছাতে ব্যর্থ হয়। সঠিক অবস্থান: **ট্রেডটি আপনার পুরস্কার-থেকে-ঝুঁকির মেঝে পেরোয় কি না তা ঠিক করতে এটি ব্যবহার করুন, তারপর পজিশন পরিচালনা করুন কাঠামোতে, লক্ষ্যে নয়।**

### ৬. ঝুঁকি, আকার নির্ধারণ ও ব্রেক-ইভেন হার

$$X = P^{\\text{lo}}_{\\text{consol}} = 50.80, \\qquad r = T_{\\uparrow} - X = 54.471 - 50.80 = 3.671$$
$$w = G_{\\uparrow} - T_{\\uparrow} = 13.500, \\qquad R{:}R = \\frac{w}{r} = \\frac{13.500}{3.671} = 3.6775$$
$$p^{*} = \\frac{1}{1 + R{:}R} = \\frac{1}{4.6775} = 0.2138$$

$$N = \\left\\lfloor \\frac{E \\cdot q}{r} \\right\\rfloor = \\left\\lfloor \\frac{1{,}500{,}000 \\times 0.0075}{3.671} \\right\\rfloor = \\lfloor 3064.56 \\rfloor = 3{,}064$$

**অকার্যকরতা হলো কনসোলিডেশনের বিপরীত সীমানা, প্রবেশের নিচে কোনো শতাংশ নয়, আর এটিই অধ্যায়ের একক সবচেয়ে পরিণামদায়ী পছন্দ।** কনসোলিডেশন লো সেই জায়গা যেখানে কাঠামোটি মিথ্যা প্রমাণিত হয়: দাম ফিরে ঢুকে পুরো পরিসর পার হওয়া মানে সংকোচনের যুক্তির উত্তর অন্য দিকে এসেছে। প্রবেশের ৩% নিচে বসানো স্টপ হতো ৫২.৮৪-তে — পরিসরের ভেতরে, যেখানে সাধারণ কনসোলিডেশনের হইচইই পৌঁছে যায়। **আপনি প্যাটার্নটির নিজের হাতেই স্টপ-আউট হতেন।**

এরপরের লিভারেজ অভেদটিও লক্ষ করুন:

$$\\frac{N \\cdot T_{\\uparrow}}{E} = \\frac{q}{r / T_{\\uparrow}} = \\frac{0.0075}{0.06739} = 11.13\\%$$

**ইকুইটির ভগ্নাংশ হিসেবে পজিশনের আকার = ঝুঁকির বাজেট ভাগ শেয়ার প্রতি ভগ্নাংশ-ঝুঁকি।** আঁটসাঁট কনসোলিডেশন অভিন্ন ঝুঁকিতে বড় পজিশন কিনে দেয়। সংকোচন খোঁজা এজন্যই মূল্যবান: এটি পূর্বানুমান করে বলে নয়, এটি সস্তা বলে।

### ৭. ডিএসই সীমাবদ্ধতা, যা ওপরের সবকিছুর আগে বাঁধে

$$C_1 = P_{\\text{prev close}} \\times (1 + b) = 53.90 \\times 1.10 = 59.29$$

$$\\text{Sessions to target} \\;\\ge\\; \\left\\lceil \\frac{\\ln(G_{\\uparrow} / P_{\\text{prev close}})}{\\ln(1 + b)} \\right\\rceil = \\left\\lceil \\frac{\\ln(67.971/53.90)}{\\ln 1.10} \\right\\rceil = \\lceil 2.44 \\rceil = 3$$

**পরিমাপকৃত চাল সম্পূর্ণ হওয়ার তাত্ত্বিক ন্যূনতম হলো টানা তিনটি লিমিট-আপ সেশন।** আপনি যে প্রতিটি পরিমাপকৃত লক্ষ্য গণনা করেন তার পাশে এই সংখ্যাটি ছাপুন। এটি একটি বিমূর্ত উদ্দেশ্যকে বদলে দেয় এই বিবৃতিতে যে আপনাকে কতদিন ধরে রাখতে হবে ও কতগুলো রাতের গ্যাপ পেরোতে হবে।

গেটের কাঠামো, মূল্যায়নের ক্রমে:

| ক্রম | গেট | নিয়ম | ধরন |
|---|---|---|---|
| ১ | তরলতা | $\\overline{V}_{\\text{consol}} \\ge 50{,}000$ | **পরম ভেটো** |
| ২ | সংকোচন | $\\rho \\le 0.50$ | ভারিত |
| ৩ | ভলিউম সংকোচন | $\\nu \\le 0.70$ | ভারিত |
| ৪ | সময়কাল | $5 \\le B_{\\text{consol}} \\le 25$ | ভারিত |

$$\\text{Verdict} = \\begin{cases} \\text{Do not trade} & \\overline{V}_{\\text{consol}} < 50{,}000 \\\\ \\text{Tradeable} & \\text{gates 2--4 all pass} \\\\ \\text{Marginal} & \\text{otherwise} \\end{cases}$$

**তরলতার ভেটো প্রথমে পরীক্ষিত হয় ও কোনো যোগফলের পদ নয়।** এটি হুবহু অধ্যায় ২৫-এর গুণমান-মেঝে ও অধ্যায় ৩০-এর এক্সহসশন অগ্রাহ্যকারী শর্ত, তৃতীয়বারের মতো আসছে: **যে সীমাবদ্ধতাকে একটি সুন্দর-দেখতে স্কোর ভোটে হারাতে পারে তা সীমাবদ্ধতা নয়।** তরলতাহীন কাউন্টারে ২ ও ৩ নম্বর গেট কেবল সাহায্য করতে ব্যর্থ হয় না — তারা সক্রিয়ভাবে বিভ্রান্ত করে, কারণ লেনদেনের অনুপস্থিতি সুন্দর সংকোচন অনুপাত তৈরি করে।

সবশেষে, ঘটনা-স্তর, আকার নির্ধারণের পরে প্রযোজ্য:

$$N_{\\text{final}} = \\begin{cases} \\lfloor N/2 \\rfloor & D_{\\text{disclosure}} \\le 10 \\\\ N & \\text{otherwise} \\end{cases} = \\lfloor 3064/2 \\rfloor = 1{,}532$$

**গ্যাপের বিরুদ্ধে একমাত্র প্রতিরক্ষা আকার, কারণ স্টপ প্রতিরক্ষা নয়।** ধারণ-জানালার ভেতরে একটি প্রকাশনা মানে ৫০.৮০ অকার্যকরতা ৪৭-এ বা ৪৪-এ ফিল হতে পারে। অর্ধেক করা ঐ ঝুঁকি সরায় না; অর্ধেক করে, আর যা পাওয়া যায় তার পুরোটাই এটুকু।`,
    },

    manual: {
      en: `**Scenario.** DELTASPIN from §33.3. Pole 42.00 → 55.50 over 9 bars on average volume 1,850,000. Consolidation of 11 bars between 54.20 and 50.80 on average volume 620,000. Account equity BDT 15,00,000, risk budget 0.75%. Prior close 53.90, applicable band 10%, six days to the next reporting disclosure. Cell references are to the ch33 breakout planner.

**Step 1 — Pole height (B5).**
$$H = 55.50 - 42.00 = 13.50$$

Sanity check the move as a percentage before trusting it: $13.50 / 42.00 = 32.14\\%$ in nine sessions, or 1.50 per bar. **A 32% repricing is a real impulse. If this number came out at 4%, there is no pole and the rest of the sheet is measuring nothing.**

**Step 2 — Consolidation range (B12).**
$$R = 54.20 - 50.80 = 3.40$$

**Step 3 — Range compression ratio (B14). Compute this before you decide what to call the pattern.**
$$\\rho = \\frac{3.40}{13.50} = 0.251852 \\approx 0.2519$$

**The daily battlefield is a quarter the size of the impulse that created it.** This one number does more work than the entire vocabulary of flags, pennants and pennons.

**Step 4 — Volume contraction ratio (B15).**
$$\\nu = \\frac{620{,}000}{1{,}850{,}000} = 0.335135 \\approx 0.3351$$

**Step 5 — Consolidation midpoint (B16), for reference only.**
$$\\frac{54.20 + 50.80}{2} = 52.50$$

Do not trade the midpoint. It is recorded because it is the level around which the range is symmetric, which tells you the structure is a rectangle rather than a wedge — information for the journal, not for the order.

**Step 6 — Retracement of the pole, the gate that is not on the sheet.**
$$\\lambda = \\frac{55.50 - 50.80}{13.50} = \\frac{4.70}{13.50} = 0.3481$$

**Under 50%, so the pole's information is being digested rather than contradicted.** Add this line to your own version of the planner. A setup at $\\lambda = 0.68$ passes every gate on the sheet and is a reversal in progress.

**Step 7 — Upper trigger (B20).**
$$T_{\\uparrow} = 54.20 \\times (1 + 0.005) = 54.20 \\times 1.005 = 54.471$$

**Step 8 — Lower trigger (B21). Arm it even though the pattern "should" break upward.**
$$T_{\\downarrow} = 50.80 \\times (1 - 0.005) = 50.80 \\times 0.995 = 50.546$$

**Step 9 — Measured targets (B22, B23), projected from the triggers.**
$$G_{\\uparrow} = 54.471 + 13.50 = 67.971$$
$$G_{\\downarrow} = 50.546 - 13.50 = 37.046$$

Project from 54.20 instead of 54.471 and $G_{\\uparrow}$ reads 67.70 — you would be crediting yourself the 0.271 you paid for the buffer.

**Step 10 — Risk per share (B25).**
$$r = T_{\\uparrow} - X = 54.471 - 50.80 = 3.671$$

As a fraction of entry: $3.671 / 54.471 = 6.74\\%$. **That is a wide stop in percentage terms and it is the correct stop**, because it is the price at which the structure is falsified rather than the price at which you become uncomfortable.

**Step 11 — Reward per share (B26) and the ratio (B27).**
$$w = 67.971 - 54.471 = 13.500$$
$$R{:}R = \\frac{13.500}{3.671} = 3.67747 \\approx 3.68$$

**Step 12 — Break-even win rate. Do this every time, because the ratio alone means nothing until it is a hit rate.**
$$p^{*} = \\frac{1}{1 + 3.67747} = \\frac{1}{4.67747} = 0.21379 = 21.38\\%$$

**This trade needs to work slightly more than one time in five.** Now the question "do I believe in this flag?" has been replaced by "can I be right more than 21.38% of the time?", which is a question you can actually answer from your journal.

**Step 13 — Risk amount (B32).**
$$1{,}500{,}000 \\times \\frac{0.75}{100} = 11{,}250$$

**Step 14 — Position size (B33).**
$$N = \\left\\lfloor \\frac{11{,}250}{3.671} \\right\\rfloor = \\lfloor 3064.56 \\rfloor = 3{,}064 \\text{ shares}$$

Verify the risk actually taken: $3{,}064 \\times 3.671 = 11{,}247.94$, which is 0.7499% of equity. **Round *down*, never to nearest.** Rounding 3064.56 up to 3,065 puts the risk at 11,251.62 — trivially over budget here, and not trivially over on a position ten times the size.

**Step 15 — Position value (B34) and exposure (B35).**
$$3{,}064 \\times 54.471 = 166{,}899.14$$
$$\\frac{166{,}899.14}{1{,}500{,}000} \\times 100 = 11.13\\%$$

**A 0.75% risk has bought an 11.13% position — a factor of 14.8.** That factor is precisely $T_{\\uparrow}/r$, and it is the entire economic reason for hunting compression. **It is also the reason a sloppy stop is catastrophic here:** widen the invalidation to a 12% distance and the same risk budget buys a 6.25% position, halving your exposure to a move you were right about.

**Step 16 — Run the gates in order (B39:B42).**

| Gate | Cell | Test | Value | Result |
|---|---|---|---|---|
| Liquidity | B39 | 620,000 ≥ 50,000 | 620,000 | **PASS** |
| Compression | B40 | 0.2519 ≤ 0.50 | 0.2519 | **PASS** |
| Volume contraction | B41 | 0.3351 ≤ 0.70 | 0.3351 | **PASS** |
| Duration | B42 | 5 ≤ 11 ≤ 25 | 11 | **PASS** |

**Step 17 — Read the verdict (B43), and note the order of evaluation.**

> **Tradeable — arm both triggers and size off B33.**

**The liquidity test is evaluated first and vetoes everything.** Change B13 from 620,000 to 38,000 and B14, B15 and B9 do not move at all — compression still 0.2519, contraction now a spectacular 0.0205, duration still 11 bars. Three PASSes and a lovely chart. **B43 returns "Do not trade — absence of trading is not a pattern."** This is Chapter 25's quality floor and Chapter 30's exhaustion override arriving for a third time, and the architecture is identical: **the veto is not a term in a sum, because a constraint a good score can outvote is not a constraint.**

**Step 18 — Day-one circuit ceiling (B48).**
$$53.90 \\times \\left(1 + \\frac{10}{100}\\right) = 59.29$$

**Step 19 — Is the target reachable on day one (B49)?**
$$67.971 \\le 59.29? \\quad \\textbf{No.}$$
> **NO — expansion is capped, plan multi-session.**

Compute how many sessions the band permits at minimum:

| Session | Ceiling | Target 67.971 reached? |
|---|---|---|
| 1 | $53.90 \\times 1.10 = 59.29$ | No |
| 2 | $59.29 \\times 1.10 = 65.219$ | No |
| 3 | $65.219 \\times 1.10 = 71.741$ | Yes |

$$\\left\\lceil \\frac{\\ln(67.971/53.90)}{\\ln 1.10} \\right\\rceil = \\lceil 2.4326 \\rceil = 3$$

**Three consecutive limit-up sessions is the theoretical minimum, and in practice the move arrives over ten to twenty sessions.** Your 21.38% break-even was computed on a nine-bar thesis; you are now being asked to hold it for a month. **The arithmetic did not change but the trade did.**

**Step 20 — Event overlay (B50, B51).**
$$D = 6 \\le 10 \\;\\Rightarrow\\; \\textbf{DISCLOSURE INSIDE HOLD WINDOW — halve size}$$

$$N_{\\text{final}} = \\lfloor 3064/2 \\rfloor = 1{,}532$$
$$\\text{Value} = 1{,}532 \\times 54.471 = 83{,}449.57 \\quad (5.56\\% \\text{ of equity})$$
$$\\text{Risk} = 1{,}532 \\times 3.671 = 5{,}623.97 \\quad (0.375\\% \\text{ of equity})$$

**Step 21 — Price the discipline of not chasing, because "do not chase" is otherwise just advice.**

Suppose you miss the trigger and buy on day two at 56.50 with the same structural stop at 50.80:

| | Chase at 56.50 | Take the trigger at 54.471 |
|---|---|---|
| Entry | 56.500 | **54.471** |
| Stop | 50.800 | 50.800 |
| Risk per share | 5.700 | **3.671** |
| Reward to 67.971 | 11.471 | **13.500** |
| $R{:}R$ | 2.01 | **3.68** |
| Break-even win rate | **33.20%** | **21.38%** |
| Shares at 0.75% risk | 1,973 | **3,064** |

**Chasing by 2.03 taka — under 4% of the price — moves the required hit rate from 21.38% to 33.20% and cuts the position by 36%.** The stop does not move, because the invalidation belongs to the consolidation and not to your fill. **Everything that changed is the price you paid.**

**Step 22 — Compare across the sequence, because the pattern is now unmistakable.**

| Setup | $R{:}R$ | Break-even |
|---|---|---|
| Ch 28 — confirmed morning star | 1.29 | 43.75% |
| Ch 29 — continuation retest | 2.76 | 26.57% |
| Ch 30 — polarity retest | 3.35 | 23.01% |
| **Ch 33 — consolidation breakout** | **3.68** | **21.38%** |

**The trend is not that patterns improve as the book goes on.** It is that **the closer your entry sits to a structural invalidation, the less often you need to be right** — and a consolidation breakout is the cheapest entry in the sequence precisely because the compression that makes the trade interesting is the same compression that makes the stop tight.

**Step 23 — State plainly what this sheet cannot see.**

It cannot see whether the quiet was accumulation or an information vacuum; only the reporting calendar can, and B50 is the crude proxy. It cannot see the depth of the book at 54.20, so a single institutional ticket may clear the whole consolidation high without any of the compression meaning anything. It cannot see whether the pole itself printed against circuit limits, in which case 55.50 is where the exchange stopped the move rather than where supply met demand. **And it cannot tell you which trigger fires. It was never designed to. That is the point of the chapter.**`,
      bn: `**পরিস্থিতি।** §৩৩.৩-এর DELTASPIN। পোল ১৮,৫০,০০০ গড় ভলিউমে ৯ বারে ৪২.০০ → ৫৫.৫০। ৬,২০,০০০ গড় ভলিউমে ৫৪.২০ ও ৫০.৮০-র মধ্যে ১১ বারের কনসোলিডেশন। অ্যাকাউন্ট ইকুইটি ১৫,০০,০০০ টাকা, ঝুঁকির বাজেট ০.৭৫%। আগের ক্লোজ ৫৩.৯০, প্রযোজ্য ব্যান্ড ১০%, পরবর্তী প্রতিবেদন প্রকাশে ছয় দিন। ঘরের রেফারেন্স ch33 ব্রেকআউট প্ল্যানারের।

**ধাপ ১ — পোলের উচ্চতা (B5)।**
$$H = 55.50 - 42.00 = 13.50$$

ভরসা করার আগে চালটি শতাংশে যাচাই করুন: নয় সেশনে $13.50 / 42.00 = 32.14\\%$, অর্থাৎ বার প্রতি ১.৫০। **৩২% পুনর্মূল্যায়ন একটি প্রকৃত ইম্পালস। এই সংখ্যাটি ৪% এলে কোনো পোলই নেই আর শিটের বাকিটা কিছুই মাপছে না।**

**ধাপ ২ — কনসোলিডেশন রেঞ্জ (B12)।**
$$R = 54.20 - 50.80 = 3.40$$

**ধাপ ৩ — রেঞ্জ সংকোচন অনুপাত (B14)। প্যাটার্নটিকে কী নামে ডাকবেন ঠিক করার আগে এটি গণনা করুন।**
$$\\rho = \\frac{3.40}{13.50} = 0.251852 \\approx 0.2519$$

**দৈনিক রণক্ষেত্র যে ইম্পালস একে তৈরি করেছে তার এক-চতুর্থাংশ আকারের।** এই একটি সংখ্যা ফ্ল্যাগ, পেন্যান্ট ও পেনন-এর পুরো শব্দভাণ্ডারের চেয়ে বেশি কাজ করে।

**ধাপ ৪ — ভলিউম সংকোচন অনুপাত (B15)।**
$$\\nu = \\frac{620{,}000}{1{,}850{,}000} = 0.335135 \\approx 0.3351$$

**ধাপ ৫ — কনসোলিডেশনের মধ্যবিন্দু (B16), কেবল রেফারেন্সের জন্য।**
$$\\frac{54.20 + 50.80}{2} = 52.50$$

মধ্যবিন্দু ট্রেড করবেন না। এটি লিপিবদ্ধ কারণ এর চারপাশেই পরিসরটি প্রতিসম, যা বলে গঠনটি ওয়েজ নয়, রেক্ট্যাঙ্গল — জার্নালের তথ্য, অর্ডারের নয়।

**ধাপ ৬ — পোলের রিট্রেসমেন্ট, যে গেটটি শিটে নেই।**
$$\\lambda = \\frac{55.50 - 50.80}{13.50} = \\frac{4.70}{13.50} = 0.3481$$

**৫০%-এর নিচে, তাই পোলের তথ্য খণ্ডিত নয়, হজম হচ্ছে।** আপনার নিজের প্ল্যানার সংস্করণে এই লাইনটি যোগ করুন। $\\lambda = 0.68$-এর একটি সেটআপ শিটের প্রতিটি গেট পেরোয়, অথচ তা চলমান একটি রিভার্সাল।

**ধাপ ৭ — উপরের ট্রিগার (B20)।**
$$T_{\\uparrow} = 54.20 \\times (1 + 0.005) = 54.20 \\times 1.005 = 54.471$$

**ধাপ ৮ — নিচের ট্রিগার (B21)। প্যাটার্নটির "উপরে ভাঙার কথা" হলেও এটি সাজান।**
$$T_{\\downarrow} = 50.80 \\times (1 - 0.005) = 50.80 \\times 0.995 = 50.546$$

**ধাপ ৯ — পরিমাপকৃত লক্ষ্য (B22, B23), ট্রিগার থেকে প্রক্ষিপ্ত।**
$$G_{\\uparrow} = 54.471 + 13.50 = 67.971$$
$$G_{\\downarrow} = 50.546 - 13.50 = 37.046$$

৫৪.৪৭১-এর বদলে ৫৪.২০ থেকে প্রক্ষেপ করলে $G_{\\uparrow}$ পড়ে ৬৭.৭০ — বাফারের জন্য দেওয়া ০.২৭১ আপনি নিজের জমায় তুলে নিচ্ছেন।

**ধাপ ১০ — শেয়ার প্রতি ঝুঁকি (B25)।**
$$r = T_{\\uparrow} - X = 54.471 - 50.80 = 3.671$$

প্রবেশের ভগ্নাংশ হিসেবে: $3.671 / 54.471 = 6.74\\%$। **শতাংশের হিসেবে এটি প্রশস্ত স্টপ আর এটিই সঠিক স্টপ**, কারণ এটি সেই দাম যেখানে কাঠামোটি মিথ্যা প্রমাণিত হয়, যেখানে আপনি অস্বস্তি বোধ করেন সেই দাম নয়।

**ধাপ ১১ — শেয়ার প্রতি পুরস্কার (B26) ও অনুপাত (B27)।**
$$w = 67.971 - 54.471 = 13.500$$
$$R{:}R = \\frac{13.500}{3.671} = 3.67747 \\approx 3.68$$

**ধাপ ১২ — ব্রেক-ইভেন উইন রেট। প্রতিবার এটি করুন, কারণ অনুপাতটি হিট রেটে পরিণত না হওয়া পর্যন্ত কিছুই বোঝায় না।**
$$p^{*} = \\frac{1}{1 + 3.67747} = \\frac{1}{4.67747} = 0.21379 = 21.38\\%$$

**এই ট্রেডটিকে পাঁচবারে সামান্য একবারের বেশি কাজ করলেই চলে।** এখন "আমি কি এই ফ্ল্যাগে বিশ্বাস করি?" প্রশ্নটির জায়গা নিয়েছে "আমি কি ২১.৩৮%-এর বেশি সময় সঠিক হতে পারি?", আর এই প্রশ্নের উত্তর আপনি সত্যিই আপনার জার্নাল থেকে দিতে পারেন।

**ধাপ ১৩ — ঝুঁকির পরিমাণ (B32)।**
$$1{,}500{,}000 \\times \\frac{0.75}{100} = 11{,}250$$

**ধাপ ১৪ — পজিশনের আকার (B33)।**
$$N = \\left\\lfloor \\frac{11{,}250}{3.671} \\right\\rfloor = \\lfloor 3064.56 \\rfloor = 3{,}064 \\text{ shares}$$

প্রকৃত নেওয়া ঝুঁকি যাচাই করুন: $3{,}064 \\times 3.671 = 11{,}247.94$, যা ইকুইটির ০.৭৪৯৯%। **নিচের দিকে গোল করুন, কখনো নিকটতমে নয়।** ৩০৬৪.৫৬-কে ৩,০৬৫-এ তুললে ঝুঁকি দাঁড়ায় ১১,২৫১.৬২ — এখানে তুচ্ছভাবে বাজেটের বাইরে, আর দশ গুণ বড় পজিশনে মোটেও তুচ্ছ নয়।

**ধাপ ১৫ — পজিশনের মূল্য (B34) ও এক্সপোজার (B35)।**
$$3{,}064 \\times 54.471 = 166{,}899.14$$
$$\\frac{166{,}899.14}{1{,}500{,}000} \\times 100 = 11.13\\%$$

**০.৭৫% ঝুঁকি ১১.১৩% পজিশন কিনেছে — গুণক ১৪.৮।** ঐ গুণকটি ঠিক $T_{\\uparrow}/r$, আর সংকোচন খোঁজার পুরো অর্থনৈতিক কারণ এটিই। **এখানে অগোছালো স্টপ কেন বিপর্যয়কর তারও কারণ এটিই:** অকার্যকরতা ১২% দূরত্বে চওড়া করুন আর একই ঝুঁকির বাজেট কেনে ৬.২৫% পজিশন, অর্থাৎ যে চাল সম্পর্কে আপনি সঠিক ছিলেন তাতে আপনার এক্সপোজার অর্ধেক।

**ধাপ ১৬ — গেটগুলো ক্রমে চালান (B39:B42)।**

| গেট | ঘর | পরীক্ষা | মান | ফল |
|---|---|---|---|---|
| তরলতা | B39 | ৬,২০,০০০ ≥ ৫০,০০০ | ৬,২০,০০০ | **PASS** |
| সংকোচন | B40 | ০.২৫১৯ ≤ ০.৫০ | ০.২৫১৯ | **PASS** |
| ভলিউম সংকোচন | B41 | ০.৩৩৫১ ≤ ০.৭০ | ০.৩৩৫১ | **PASS** |
| সময়কাল | B42 | ৫ ≤ ১১ ≤ ২৫ | ১১ | **PASS** |

**ধাপ ১৭ — রায় পড়ুন (B43), আর মূল্যায়নের ক্রমটি লক্ষ করুন।**

> **Tradeable — দুই দিকেই ট্রিগার সাজান ও B33-এ আকার নিন।**

**তরলতার পরীক্ষা প্রথমে মূল্যায়িত হয় ও সবকিছুতে ভেটো দেয়।** B13 ৬,২০,০০০ থেকে ৩৮,০০০ করুন আর B14, B15 ও B9 একচুলও নড়ে না — সংকোচন তবু ০.২৫১৯, সংকোচন এখন চমকপ্রদ ০.০২০৫, সময়কাল তবু ১১ বার। তিনটি PASS আর একটি চমৎকার চার্ট। **B43 ফেরত দেয় "Do not trade — absence of trading is not a pattern।"** এটি তৃতীয়বারের মতো আসা অধ্যায় ২৫-এর গুণমান-মেঝে ও অধ্যায় ৩০-এর এক্সহসশন অগ্রাহ্যকারী শর্ত, আর স্থাপত্য অভিন্ন: **ভেটো কোনো যোগফলের পদ নয়, কারণ যে সীমাবদ্ধতাকে ভালো স্কোর ভোটে হারাতে পারে তা সীমাবদ্ধতা নয়।**

**ধাপ ১৮ — প্রথম দিনের সার্কিট ছাদ (B48)।**
$$53.90 \\times \\left(1 + \\frac{10}{100}\\right) = 59.29$$

**ধাপ ১৯ — লক্ষ্য কি প্রথম দিনে পৌঁছানো যায় (B49)?**
$$67.971 \\le 59.29? \\quad \\textbf{না।}$$
> **NO — expansion is capped, plan multi-session।**

ব্যান্ড ন্যূনতম কত সেশন অনুমোদন করে গণনা করুন:

| সেশন | ছাদ | লক্ষ্য ৬৭.৯৭১-এ পৌঁছাল? |
|---|---|---|
| ১ | $53.90 \\times 1.10 = 59.29$ | না |
| ২ | $59.29 \\times 1.10 = 65.219$ | না |
| ৩ | $65.219 \\times 1.10 = 71.741$ | হ্যাঁ |

$$\\left\\lceil \\frac{\\ln(67.971/53.90)}{\\ln 1.10} \\right\\rceil = \\lceil 2.4326 \\rceil = 3$$

**তাত্ত্বিক ন্যূনতম টানা তিনটি লিমিট-আপ সেশন, আর বাস্তবে চালটি আসে দশ থেকে বিশ সেশনে।** আপনার ২১.৩৮% ব্রেক-ইভেন গণনা হয়েছিল নয়-বারের যুক্তিতে; এখন আপনাকে তা এক মাস ধরে রাখতে বলা হচ্ছে। **পাটিগণিত বদলায়নি কিন্তু ট্রেডটি বদলেছে।**

**ধাপ ২০ — ঘটনা-স্তর (B50, B51)।**
$$D = 6 \\le 10 \\;\\Rightarrow\\; \\textbf{DISCLOSURE INSIDE HOLD WINDOW — halve size}$$

$$N_{\\text{final}} = \\lfloor 3064/2 \\rfloor = 1{,}532$$
$$\\text{Value} = 1{,}532 \\times 54.471 = 83{,}449.57 \\quad (5.56\\% \\text{ of equity})$$
$$\\text{Risk} = 1{,}532 \\times 3.671 = 5{,}623.97 \\quad (0.375\\% \\text{ of equity})$$

**ধাপ ২১ — পিছু না নেওয়ার শৃঙ্খলার দাম হিসাব করুন, কারণ নইলে "পিছু নেবেন না" নিছক উপদেশ।**

ধরুন আপনি ট্রিগার মিস করে দ্বিতীয় দিনে ৫৬.৫০-এ কিনলেন, একই কাঠামোগত স্টপ ৫০.৮০ রেখে:

| | ৫৬.৫০-এ পিছু নেওয়া | ৫৪.৪৭১-এ ট্রিগার নেওয়া |
|---|---|---|
| প্রবেশ | ৫৬.৫০০ | **৫৪.৪৭১** |
| স্টপ | ৫০.৮০০ | ৫০.৮০০ |
| শেয়ার প্রতি ঝুঁকি | ৫.৭০০ | **৩.৬৭১** |
| ৬৭.৯৭১ পর্যন্ত পুরস্কার | ১১.৪৭১ | **১৩.৫০০** |
| $R{:}R$ | ২.০১ | **৩.৬৮** |
| ব্রেক-ইভেন উইন রেট | **৩৩.২০%** | **২১.৩৮%** |
| ০.৭৫% ঝুঁকিতে শেয়ার | ১,৯৭৩ | **৩,০৬৪** |

**২.০৩ টাকা পিছু নেওয়া — দামের ৪%-এরও কম — প্রয়োজনীয় হিট রেট ২১.৩৮% থেকে ৩৩.২০%-এ নেয় ও পজিশন ৩৬% কমায়।** স্টপ নড়ে না, কারণ অকার্যকরতা কনসোলিডেশনের, আপনার ফিলের নয়। **কেবল আপনার দেওয়া দামটিই বদলেছে।**

**ধাপ ২২ — ধারাটি জুড়ে তুলনা করুন, কারণ ধরনটি এখন অভ্রান্ত।**

| সেটআপ | $R{:}R$ | ব্রেক-ইভেন |
|---|---|---|
| অ ২৮ — নিশ্চিত মর্নিং স্টার | ১.২৯ | ৪৩.৭৫% |
| অ ২৯ — কন্টিনিউয়েশন রিটেস্ট | ২.৭৬ | ২৬.৫৭% |
| অ ৩০ — পোলারিটি রিটেস্ট | ৩.৩৫ | ২৩.০১% |
| **অ ৩৩ — কনসোলিডেশন ব্রেকআউট** | **৩.৬৮** | **২১.৩৮%** |

**প্রবণতাটি এই নয় যে বই যত এগোয় প্যাটার্ন তত উন্নত হয়।** প্রবণতাটি হলো **আপনার প্রবেশ একটি কাঠামোগত অকার্যকরতার যত কাছে বসে, তত কম বার আপনাকে সঠিক হতে হয়** — আর কনসোলিডেশন ব্রেকআউট ধারাটির সবচেয়ে সস্তা প্রবেশ ঠিক এই কারণেই যে যে সংকোচন ট্রেডটিকে আকর্ষণীয় করে সেই সংকোচনই স্টপটিকে আঁটসাঁট করে।

**ধাপ ২৩ — এই শিট কী দেখতে পায় না তা স্পষ্ট করে বলুন।**

নীরবতাটি সঞ্চয়ন ছিল না তথ্যের শূন্যতা তা এটি দেখতে পায় না; কেবল প্রতিবেদন ক্যালেন্ডারই পারে, আর B50 তার স্থূল প্রতিনিধি। এটি ৫৪.২০-তে বইয়ের গভীরতা দেখতে পায় না, তাই একটি প্রাতিষ্ঠানিক টিকিটই পুরো কনসোলিডেশন হাই পরিষ্কার করে দিতে পারে আর তখন সংকোচনের কোনো অর্থই থাকে না। এটি দেখতে পায় না পোলটি নিজেই সার্কিট সীমার বিরুদ্ধে ছাপা হয়েছিল কি না, সেক্ষেত্রে ৫৫.৫০ হলো যেখানে এক্সচেঞ্জ চাল থামিয়েছে, চাহিদা সরবরাহের সঙ্গে যেখানে মিলেছে তা নয়। **আর এটি আপনাকে বলতে পারে না কোন ট্রিগারটি চালু হবে। একে কখনো তার জন্য বানানোই হয়নি। অধ্যায়ের মূল কথা এটিই।**`,
    },

    mistakes: {
      en: `1. **Naming the pattern before measuring it.** "Bull flag" carries a direction; $\\rho = 0.2519$ does not. The moment you have written "bull flag" in your journal you have committed to the upper trigger and you will not arm 50.546 — which is the only trigger that would have saved you on the failure case that closed at 50.30.
2. **Projecting the measured target from the consolidation boundary instead of the trigger.** $54.20 + 13.50 = 67.70$ against the correct $54.471 + 13.50 = 67.971$. You have credited yourself the 0.271 you paid in buffer, which quietly inflates $R{:}R$ and understates the break-even. Small at a 0.5% buffer; a 2% buffer turns it into a 1.08 taka lie.
3. **Placing the stop a fixed percentage below entry.** A 3% stop on a 54.471 entry sits at 52.84 — **inside the 50.80–54.20 consolidation**, where routine range noise reaches it. You would be stopped out by the pattern you are trading. The invalidation is 50.80 because that is where the structure is falsified, and risk is therefore 3.671, not 1.634.
4. **Reading a low volume contraction ratio on an illiquid counter as a strong signal.** Drop the consolidation volume from 620,000 to 38,000 and $\\nu$ improves from 0.3351 to a spectacular-looking 0.0205 while $\\rho$ does not move at all. **That is not a tighter spring; it is an empty book.** The liquidity gate at 50,000 is a veto for exactly this reason.
5. **Skipping the retracement check because it is not a cell on the sheet.** DELTASPIN's $\\lambda = 4.70/13.50 = 0.3481$ passes. A candidate at $\\lambda = 0.68$ passes all four sheet gates and is a reversal already in progress — the geometry is a triangle, but the pole's information has been contradicted, and projecting 13.50 from a disputed measurement is projecting nothing.
6. **Rounding position size to the nearest share instead of down.** $11{,}250 / 3.671 = 3064.56$. Round to 3,065 and the risk becomes 11,251.62, over budget. Trivial here; on a portfolio of twenty positions rounded the same way it is a systematic overshoot of the only number you control.
7. **Sizing off the target rather than the invalidation.** The 13.50 reward is a convention; the 3.671 risk is a fact. Anyone who computes $11{,}250 / 13.50 = 833$ shares "because the target is 13.50 away" has sized a position on the least reliable number in the chapter.
8. **Assuming the measured move can complete in a session.** $67.971 > 59.29$, and the band arithmetic says **three consecutive limit-up sessions minimum.** A trader who does not compute that number is unknowingly converting a nine-bar swing thesis into a multi-week position trade, and the 21.38% break-even was never priced for that holding period.
9. **Ignoring the disclosure calendar and holding full size.** Six days to reporting means the 50.80 stop is not a stop — a gap opens at whatever the auction says. Full size is 3,064 shares and 11,247.94 of risk; the correct size is **1,532 shares and 5,623.97**, and the difference is not caution, it is the recognition that your invalidation is unenforceable.
10. **Treating the failed break as a wasted analysis.** The 50.30 close on 2.27× consolidation volume is the same framework returning a different instruction: do not buy, and exit if long. **On the DSE it is emphatically not a short — there is no reliable retail borrow — and importing the textbook's short conclusion is how a correct read becomes an impossible trade.**
11. **Chasing after missing the trigger.** Buying 56.50 instead of 54.471 — 2.03 taka, under 4% of price — moves break-even from 21.38% to 33.20% and shrinks the position from 3,064 to 1,973 shares **on the identical thesis with the identical stop.** The only variable that moved is what you paid.`,
      bn: `১. **মাপার আগে প্যাটার্নের নাম দেওয়া।** "বুল ফ্ল্যাগ" একটি দিক বহন করে; $\\rho = 0.2519$ করে না। যে মুহূর্তে জার্নালে "বুল ফ্ল্যাগ" লিখেছেন সেই মুহূর্তে আপনি উপরের ট্রিগারে প্রতিশ্রুতিবদ্ধ, আর ৫০.৫৪৬ সাজাবেন না — অথচ ৫০.৩০-এ ক্লোজ করা ব্যর্থতার ঘটনায় ঐ ট্রিগারটিই একমাত্র আপনাকে বাঁচাত।
২. **ট্রিগারের বদলে কনসোলিডেশনের সীমানা থেকে পরিমাপকৃত লক্ষ্য প্রক্ষেপ করা।** সঠিক $54.471 + 13.50 = 67.971$-এর বিপরীতে $54.20 + 13.50 = 67.70$। বাফারে দেওয়া ০.২৭১ আপনি নিজের জমায় তুলেছেন, যা নীরবে $R{:}R$ স্ফীত করে ও ব্রেক-ইভেন কম দেখায়। ০.৫% বাফারে সামান্য; ২% বাফারে এটি ১.০৮ টাকার মিথ্যা।
৩. **প্রবেশের নির্দিষ্ট শতাংশ নিচে স্টপ বসানো।** ৫৪.৪৭১ প্রবেশে ৩% স্টপ বসে ৫২.৮৪-তে — **৫০.৮০–৫৪.২০ কনসোলিডেশনের ভেতরে**, যেখানে সাধারণ পরিসরের হইচইই পৌঁছে যায়। আপনি যে প্যাটার্নটি ট্রেড করছেন তার হাতেই স্টপ-আউট হতেন। অকার্যকরতা ৫০.৮০ কারণ সেখানেই কাঠামোটি মিথ্যা প্রমাণিত হয়, আর তাই ঝুঁকি ৩.৬৭১, ১.৬৩৪ নয়।
৪. **তরলতাহীন কাউন্টারে নিম্ন ভলিউম সংকোচন অনুপাতকে শক্তিশালী সংকেত হিসেবে পড়া।** কনসোলিডেশন ভলিউম ৬,২০,০০০ থেকে ৩৮,০০০ নামান আর $\\nu$ ০.৩৩৫১ থেকে চমকপ্রদ ০.০২০৫-এ উন্নীত হয়, অথচ $\\rho$ একচুলও নড়ে না। **এটি আঁটসাঁট স্প্রিং নয়; এটি খালি বই।** ৫০,০০০-এর তরলতা গেট ঠিক এ কারণেই একটি ভেটো।
৫. **রিট্রেসমেন্ট যাচাই বাদ দেওয়া কারণ শিটে তার কোনো ঘর নেই।** DELTASPIN-এর $\\lambda = 4.70/13.50 = 0.3481$ পাস করে। $\\lambda = 0.68$-এর একটি প্রার্থী শিটের চারটি গেটই পাস করে অথচ তা ইতিমধ্যে চলমান একটি রিভার্সাল — জ্যামিতি ট্রায়াঙ্গল, কিন্তু পোলের তথ্য খণ্ডিত হয়েছে, আর বিতর্কিত পরিমাপ থেকে ১৩.৫০ প্রক্ষেপ করা মানে কিছুই প্রক্ষেপ না করা।
৬. **পজিশনের আকার নিচের দিকে না গোল করে নিকটতমে গোল করা।** $11{,}250 / 3.671 = 3064.56$। ৩,০৬৫-এ গোল করলে ঝুঁকি হয় ১১,২৫১.৬২, বাজেটের বাইরে। এখানে তুচ্ছ; একইভাবে গোল করা কুড়িটি পজিশনের পোর্টফোলিওতে এটি আপনার নিয়ন্ত্রণে থাকা একমাত্র সংখ্যাটির ব্যবস্থাগত অতিক্রমণ।
৭. **অকার্যকরতার বদলে লক্ষ্য ধরে আকার নির্ধারণ।** ১৩.৫০ পুরস্কার একটি রীতি; ৩.৬৭১ ঝুঁকি একটি বাস্তবতা। যিনি "লক্ষ্য ১৩.৫০ দূরে বলে" $11{,}250 / 13.50 = 833$ শেয়ার গণনা করেন তিনি অধ্যায়ের সবচেয়ে অনির্ভরযোগ্য সংখ্যাটির ওপর পজিশনের আকার ঠিক করেছেন।
৮. **পরিমাপকৃত চাল এক সেশনে সম্পূর্ণ হতে পারে ধরে নেওয়া।** $67.971 > 59.29$, আর ব্যান্ডের পাটিগণিত বলে **ন্যূনতম টানা তিনটি লিমিট-আপ সেশন।** যিনি ঐ সংখ্যাটি গণনা করেন না তিনি অজান্তে একটি নয়-বারের সুইং যুক্তিকে বহু-সপ্তাহের পজিশন ট্রেডে বদলে ফেলছেন, আর ২১.৩৮% ব্রেক-ইভেন কখনোই ঐ ধারণ-সময়ের জন্য হিসাব করা হয়নি।
৯. **প্রকাশনার ক্যালেন্ডার উপেক্ষা করে পূর্ণ আকারে ধরে রাখা।** প্রতিবেদনে ছয় দিন মানে ৫০.৮০ স্টপ কোনো স্টপই নয় — নিলাম যা বলে সেই দামে গ্যাপ খোলে। পূর্ণ আকার ৩,০৬৪ শেয়ার ও ১১,২৪৭.৯৪ ঝুঁকি; সঠিক আকার **১,৫৩২ শেয়ার ও ৫,৬২৩.৯৭**, আর পার্থক্যটি সতর্কতা নয়, এটি এই স্বীকৃতি যে আপনার অকার্যকরতা কার্যকর করা যায় না।
১০. **ব্যর্থ ভাঙনকে নষ্ট বিশ্লেষণ গণ্য করা।** কনসোলিডেশন ভলিউমের ২.২৭ গুণে ৫০.৩০ ক্লোজ একই কাঠামোর ভিন্ন নির্দেশ: কিনবেন না, আর লং থাকলে বেরিয়ে যান। **ডিএসই-তে এটি নিশ্চিতভাবেই শর্ট নয় — নির্ভরযোগ্য খুচরা ধার নেই — আর পাঠ্যবইয়ের শর্ট উপসংহার আমদানি করাই সেই পথ যেখানে সঠিক পাঠ অসম্ভব ট্রেডে পরিণত হয়।**
১১. **ট্রিগার মিস করে পিছু নেওয়া।** ৫৪.৪৭১-এর বদলে ৫৬.৫০ কেনা — ২.০৩ টাকা, দামের ৪%-এরও কম — ব্রেক-ইভেন ২১.৩৮% থেকে ৩৩.২০%-এ নেয় ও পজিশন ৩,০৬৪ থেকে ১,৯৭৩ শেয়ারে সংকুচিত করে **অভিন্ন যুক্তিতে, অভিন্ন স্টপে।** কেবল আপনার দেওয়া দামটিই বদলেছে।`,
    },

    tips: {
      en: `1. **Write the two ratios before you write the pattern's name.** $\\rho = 0.2519$ and $\\nu = 0.3351$ are measurements; "bull flag" is a commitment. Record the ratios in the journal and let the name be assigned afterwards, when it is free.
2. **Arm both triggers in the order book, every time, without exception.** 54.471 and 50.546. If you find yourself reluctant to place the lower one, you have a directional opinion you have not admitted to, and that opinion is the thing this chapter is designed to remove.
3. **Add a retracement row to the planner.** $\\lambda = 4.70/13.50 = 0.3481$. Reject anything above 0.50. The sheet's four gates will happily pass a reversal in progress, and this is the cheapest line you can add to stop it.
4. **Compute the break-even win rate, not just the ratio.** 3.68 means nothing to your intuition; **21.38%** is a number you can compare against your own journal. Every reward-to-risk figure in this book should be converted before it is acted on.
5. **Always print the sessions-to-target figure next to the measured target.** For DELTASPIN it is three consecutive limits. **That single number tells you the trade is a multi-week hold before you have entered it**, which is information you cannot get from the chart.
6. **Check the reporting calendar before sizing, not after.** Six days to disclosure halves 3,064 to 1,532. Discovering the date after entry means the position is already wrong-sized and the only remedy is a sale you did not plan.
7. **Apply the absolute liquidity floor before any ratio.** 50,000 shares is the floor used here; pick your own, but pick one, and make it a veto rather than a weighting. **Below the floor, the prettier the compression the more suspicious it is.**
8. **Wait for the trigger rather than anticipating it inside the range.** Buying at 52.50 "because it's going to break out" is buying with no invalidation you can name, and it converts a 21.38% trade into a coin flip with a stop you will move.
9. **Never widen the stop to accommodate a larger position.** Position size follows from risk; risk follows from structure. Moving 50.80 down to 49.00 to fit more shares inverts the entire chain and is the most common way a good framework produces a bad account.
10. **Log the failed breakouts with the same discipline as the winners.** The 50.30 close is a data point about how this counter behaves at its lower boundary, and it is the only way you will ever learn whether your own names give clean triggers or false ones.
11. **Trade the rectangle over the pennant when both are available.** Horizontal boundaries at 54.20 and 50.80 are unambiguous; a converging boundary requires you to decide where the line is, and that decision will always drift in the direction you already want to trade.`,
      bn: `১. **প্যাটার্নের নাম লেখার আগে দুটি অনুপাত লিখুন।** $\\rho = 0.2519$ ও $\\nu = 0.3351$ পরিমাপ; "বুল ফ্ল্যাগ" একটি প্রতিশ্রুতি। জার্নালে অনুপাত লিপিবদ্ধ করুন আর নামকরণ পরে হোক, যখন তা বিনামূল্যে।
২. **প্রতিবার, ব্যতিক্রমহীনভাবে, অর্ডার বইয়ে দুটি ট্রিগারই সাজান।** ৫৪.৪৭১ ও ৫০.৫৪৬। নিচেরটি বসাতে অনিচ্ছা বোধ করলে বুঝবেন আপনার একটি দিকনির্দেশক মত আছে যা আপনি স্বীকার করেননি, আর এই অধ্যায় ঐ মতটিই সরানোর জন্য তৈরি।
৩. **প্ল্যানারে একটি রিট্রেসমেন্ট সারি যোগ করুন।** $\\lambda = 4.70/13.50 = 0.3481$। ০.৫০-এর ওপরে যেকোনো কিছু বাতিল করুন। শিটের চারটি গেট চলমান একটি রিভার্সালকে সানন্দে পাস করাবে, আর তা ঠেকাতে এটিই সবচেয়ে সস্তা লাইন।
৪. **কেবল অনুপাত নয়, ব্রেক-ইভেন উইন রেট গণনা করুন।** ৩.৬৮ আপনার সহজাত বোধে কিছুই বোঝায় না; **২১.৩৮%** এমন একটি সংখ্যা যা আপনি নিজের জার্নালের সঙ্গে মেলাতে পারেন। এই বইয়ের প্রতিটি পুরস্কার-থেকে-ঝুঁকির সংখ্যা কাজে লাগানোর আগে রূপান্তর করা উচিত।
৫. **পরিমাপকৃত লক্ষ্যের পাশে সর্বদা সেশন-থেকে-লক্ষ্য সংখ্যাটি ছাপুন।** DELTASPIN-এ তা টানা তিনটি সীমা। **ঐ একটি সংখ্যা প্রবেশের আগেই বলে দেয় ট্রেডটি বহু-সপ্তাহের ধারণ**, আর এই তথ্য চার্ট থেকে পাওয়া যায় না।
৬. **আকার নির্ধারণের আগে প্রতিবেদন ক্যালেন্ডার দেখুন, পরে নয়।** প্রকাশনায় ছয় দিন ৩,০৬৪-কে ১,৫৩২ করে। প্রবেশের পরে তারিখ আবিষ্কার মানে পজিশনের আকার ইতিমধ্যেই ভুল, আর একমাত্র প্রতিকার এমন একটি বিক্রি যার পরিকল্পনা আপনি করেননি।
৭. **যেকোনো অনুপাতের আগে পরম তরলতার মেঝে প্রয়োগ করুন।** এখানে ব্যবহৃত মেঝে ৫০,০০০ শেয়ার; নিজেরটি বাছুন, কিন্তু বাছুন, আর একে ভারাঙ্কন নয়, ভেটো বানান। **মেঝের নিচে সংকোচন যত সুন্দর, তা তত বেশি সন্দেহজনক।**
৮. **পরিসরের ভেতরে আগাম না ঢুকে ট্রিগারের অপেক্ষা করুন।** "ব্রেকআউট তো হবেই" বলে ৫২.৫০-এ কেনা মানে এমন কেনা যার কোনো অকার্যকরতার নাম আপনি বলতে পারেন না, আর তা একটি ২১.৩৮% ট্রেডকে এমন এক মুদ্রা-নিক্ষেপে বদলায় যার স্টপ আপনি সরাবেন।
৯. **বড় পজিশন ধরাতে কখনো স্টপ চওড়া করবেন না।** পজিশনের আকার আসে ঝুঁকি থেকে; ঝুঁকি আসে কাঠামো থেকে। বেশি শেয়ার ধরাতে ৫০.৮০-কে ৪৯.০০-এ নামানো পুরো শৃঙ্খলটি উল্টে দেয়, আর একটি ভালো কাঠামো থেকে খারাপ অ্যাকাউন্ট তৈরির সবচেয়ে প্রচলিত উপায় এটিই।
১০. **বিজয়ীদের মতোই শৃঙ্খলার সঙ্গে ব্যর্থ ব্রেকআউটগুলো লিপিবদ্ধ করুন।** ৫০.৩০ ক্লোজ এই কাউন্টারটি তার নিচের সীমানায় কেমন আচরণ করে তার একটি তথ্যবিন্দু, আর আপনার নিজের নামগুলো পরিচ্ছন্ন ট্রিগার দেয় না ভুয়া তা শেখার এটিই একমাত্র উপায়।
১১. **দুটিই পাওয়া গেলে পেন্যান্টের বদলে রেক্ট্যাঙ্গল ট্রেড করুন।** ৫৪.২০ ও ৫০.৮০-তে অনুভূমিক সীমানা দ্ব্যর্থহীন; অভিসারী সীমানা আপনাকে ঠিক করতে বাধ্য করে রেখাটি কোথায়, আর ঐ সিদ্ধান্ত সর্বদা আপনি যেদিকে ট্রেড করতে চান সেদিকেই সরবে।`,
    },

    exercises: {
      en: `1. Build the ch33 breakout planner. Enter the DELTASPIN inputs and confirm B5 = 13.50, B12 = 3.40, B14 = 0.2519, B15 = 0.3351, B20 = 54.471, B22 = 67.971, B25 = 3.671, B27 = 3.68, B33 = 3,064 and the verdict "Tradeable".
2. Change B13 from 620,000 to 38,000. Report B14, B15 and B43. Explain in two sentences why the compression ratio improving is not good news.
3. Delete the liquidity condition from B43 so the verdict reads only the three weighted gates. Which counters in your own watchlist now pass that would previously have been vetoed? Count them.
4. Add a retracement row: $\\lambda = (B3 - B11)/B5$. Confirm 0.3481 for DELTASPIN, then add a gate rejecting $\\lambda > 0.50$. Re-run five setups from your own charts and report how many the new gate removes.
5. Set B19 (the buffer) to 2.0% instead of 0.5%. Recompute B20, B22, B25 and B27. By how much does the break-even win rate deteriorate, and is the wider buffer worth it?
6. Change the invalidation in B24 from the consolidation low to a fixed 3% below the trigger. Where does the stop now sit relative to the 50.80–54.20 range, and what does that tell you about percentage stops in general?
7. Compute the sessions-to-target figure for three different band settings: 10%, 5% and 2%. Which of them makes the measured target unreachable within a plausible holding period?
8. Set B50 to 25 days instead of 6. What is the final position size, and by how much does the taka risk change? Now argue the opposite case: why might a disclosure *inside* the window sometimes be a reason to take the trade rather than halve it?
9. Take a real DSE counter with a visible consolidation from the past year. Compute $\\rho$, $\\nu$ and $\\lambda$ by hand. Which of the four gates does it fail, if any? Do not name the pattern.
10. For the same counter, record which trigger fired first and what happened over the following fifteen sessions. Repeat for five counters. Out of the five, how many broke in the direction of the prior trend? Compare your answer with the "usually continues" claim in §33.1.
11. In three sentences, write down what the planner cannot see. Keep it taped to the sheet, and re-read it before every breakout entry you take for the next month.`,
      bn: `১. ch33 ব্রেকআউট প্ল্যানার তৈরি করুন। DELTASPIN-এর উপাদানগুলো বসান ও নিশ্চিত করুন B5 = ১৩.৫০, B12 = ৩.৪০, B14 = ০.২৫১৯, B15 = ০.৩৩৫১, B20 = ৫৪.৪৭১, B22 = ৬৭.৯৭১, B25 = ৩.৬৭১, B27 = ৩.৬৮, B33 = ৩,০৬৪ ও রায় "Tradeable"।
২. B13 ৬,২০,০০০ থেকে ৩৮,০০০ করুন। B14, B15 ও B43 জানান। দুই বাক্যে ব্যাখ্যা করুন সংকোচন অনুপাতের উন্নতি কেন সুসংবাদ নয়।
৩. B43 থেকে তরলতার শর্তটি মুছুন যাতে রায় কেবল তিনটি ভারিত গেট পড়ে। আপনার নিজের ওয়াচলিস্টের কোন কাউন্টারগুলো এখন পাস করে যেগুলো আগে ভেটো পেত? গুনুন।
৪. একটি রিট্রেসমেন্ট সারি যোগ করুন: $\\lambda = (B3 - B11)/B5$। DELTASPIN-এ ০.৩৪৮১ নিশ্চিত করুন, তারপর $\\lambda > 0.50$ বাতিল করার একটি গেট যোগ করুন। নিজের চার্ট থেকে পাঁচটি সেটআপ পুনরায় চালান ও জানান নতুন গেটটি কতগুলো সরায়।
৫. B19 (বাফার) ০.৫%-এর বদলে ২.০% করুন। B20, B22, B25 ও B27 পুনর্গণনা করুন। ব্রেক-ইভেন উইন রেট কতটা খারাপ হয়, আর চওড়া বাফারটি কি তার মূল্য রাখে?
৬. B24-এর অকার্যকরতা কনসোলিডেশন লো থেকে বদলে ট্রিগারের নির্দিষ্ট ৩% নিচে করুন। স্টপটি এখন ৫০.৮০–৫৪.২০ পরিসরের সাপেক্ষে কোথায় বসে, আর সাধারণভাবে শতাংশ-স্টপ সম্পর্কে তা কী বলে?
৭. তিনটি ভিন্ন ব্যান্ড সেটিংয়ে সেশন-থেকে-লক্ষ্য সংখ্যা গণনা করুন: ১০%, ৫% ও ২%। কোনটি পরিমাপকৃত লক্ষ্যকে যুক্তিসঙ্গত ধারণ-সময়ের মধ্যে অনধিগম্য করে?
৮. B50 ৬-এর বদলে ২৫ দিন করুন। চূড়ান্ত পজিশনের আকার কত, আর টাকার ঝুঁকি কতটা বদলায়? এবার বিপরীত পক্ষে যুক্তি দিন: জানালার *ভেতরে* একটি প্রকাশনা কখন অর্ধেক করার বদলে ট্রেডটি নেওয়ার কারণ হতে পারে?
৯. গত বছরের দৃশ্যমান কনসোলিডেশনসহ একটি প্রকৃত ডিএসই কাউন্টার নিন। হাতে $\\rho$, $\\nu$ ও $\\lambda$ গণনা করুন। চারটি গেটের কোনটিতে এটি ব্যর্থ হয়, যদি হয়? প্যাটার্নের নাম দেবেন না।
১০. একই কাউন্টারে লিপিবদ্ধ করুন কোন ট্রিগারটি আগে চালু হয়েছে ও পরবর্তী পনেরো সেশনে কী ঘটেছে। পাঁচটি কাউন্টারে পুনরাবৃত্তি করুন। পাঁচটির মধ্যে কতগুলো আগের প্রবণতার দিকে ভেঙেছে? আপনার উত্তর §৩৩.১-এর "সাধারণত চলতে থাকে" দাবির সঙ্গে মেলান।
১১. তিন বাক্যে লিখুন প্ল্যানার কী দেখতে পায় না। শিটের গায়ে সেঁটে রাখুন, আর পরের এক মাস প্রতিটি ব্রেকআউট প্রবেশের আগে তা পুনরায় পড়ুন।`,
    },

    summary: {
      en: `- **Continuation and reversal patterns are the same geometry, distinguished only by which boundary price leaves through.** Nothing inside a symmetrical triangle tells you the direction; the "usually continues" claim is a weak statistical tendency quoted as a rule, and it does not survive costs on the DSE.
- **The mechanism is volatility contraction, not the pattern's name.** DELTASPIN's range compressed to $\\rho = 3.40/13.50 = 0.2519$ on volume contraction $\\nu = 620{,}000/1{,}850{,}000 = 0.3351$. **Those two numbers are the setup; "bull flag" is decoration.**
- **Arm both triggers, always: 54.471 above and 50.546 below**, each 0.5% outside the boundary. Refusing to place the lower trigger is a directional opinion you have not admitted to.
- **Project the measured target from the trigger, not the boundary:** $54.471 + 13.50 = 67.971$, not 67.70. Projecting from 54.20 credits you the 0.271 you paid in buffer and quietly inflates the reward-to-risk.
- **The invalidation is the opposite boundary at 50.80, giving risk of 3.671 — never a fixed percentage.** A 3% stop sits at 52.84, **inside the consolidation**, where you would be stopped out by the pattern itself.
- **Reward-to-risk is $13.500/3.671 = 3.68$, so break-even is 21.38%.** Convert every ratio into a hit rate before acting: 3.68 means nothing to intuition, 21.38% is comparable against your journal.
- **A 0.75% risk buys an 11.13% position — 3,064 shares at 54.471 for 166,899.14 of exposure on 11,247.94 of risk.** The 14.8× leverage of risk into exposure is exactly $T_{\\uparrow}/r$, and it is the entire economic reason to hunt compression.
- **The liquidity floor is an absolute veto, tested before everything.** Drop consolidation volume to 38,000 and $\\nu$ improves to a spectacular 0.0205 while $\\rho$ does not move — three gates pass and the verdict is still **"Do not trade — absence of trading is not a pattern."** Third appearance of Chapter 25's quality floor.
- **Circuit limits convert the trade without asking.** $67.971 > 59.29$, and the band arithmetic requires **three consecutive limit-up sessions minimum** for the measured move. A nine-bar thesis has become a multi-week hold, and the 21.38% break-even was never priced for it.
- **Six days to disclosure halves 3,064 to 1,532 shares and risk to 0.375% of equity**, because a gap through 50.80 fills at the auction price, not at 50.80. **Size is the only defence against a gap; a stop is not one.**
- **Chasing 2.03 taka above the trigger — under 4% of price — moves break-even from 21.38% to 33.20% and cuts the position from 3,064 to 1,973.** Same thesis, same stop; only the price you paid changed. Across Ch 28 (43.75%), Ch 29 (26.57%), Ch 30 (23.01%) and Ch 33 (21.38%), **the lesson is that entries close to a structural invalidation are cheap and entries far from one are expensive.**`,
      bn: `- **কন্টিনিউয়েশন ও রিভার্সাল প্যাটার্ন একই জ্যামিতি, কেবল দাম কোন সীমানা দিয়ে বেরোয় তা দিয়ে আলাদা।** সিমেট্রিক্যাল ট্রায়াঙ্গলের ভেতরের কিছুই দিক বলে না; "সাধারণত চলতে থাকে" দাবিটি নিয়ম হিসেবে উদ্ধৃত একটি দুর্বল পরিসংখ্যানগত প্রবণতা, আর তা ডিএসই-তে খরচের পর টেকে না।
- **যন্ত্রকৌশলটি ভোলাটিলিটি সংকোচন, প্যাটার্নের নাম নয়।** DELTASPIN-এর পরিসর সংকুচিত হয়েছে $\\rho = 3.40/13.50 = 0.2519$-এ, ভলিউম সংকোচন $\\nu = 620{,}000/1{,}850{,}000 = 0.3351$-এ। **ঐ দুটি সংখ্যাই সেটআপ; "বুল ফ্ল্যাগ" অলংকার।**
- **সর্বদা দুটি ট্রিগারই সাজান: উপরে ৫৪.৪৭১ ও নিচে ৫০.৫৪৬**, প্রতিটি সীমানার ০.৫% বাইরে। নিচের ট্রিগার বসাতে অস্বীকার করা মানে একটি দিকনির্দেশক মত যা আপনি স্বীকার করেননি।
- **পরিমাপকৃত লক্ষ্য ট্রিগার থেকে প্রক্ষেপ করুন, সীমানা থেকে নয়:** $54.471 + 13.50 = 67.971$, ৬৭.৭০ নয়। ৫৪.২০ থেকে প্রক্ষেপ করলে বাফারে দেওয়া ০.২৭১ আপনার জমায় ওঠে আর পুরস্কার-থেকে-ঝুঁকি নীরবে স্ফীত হয়।
- **অকার্যকরতা হলো ৫০.৮০-তে বিপরীত সীমানা, যা দেয় ৩.৬৭১ ঝুঁকি — কখনোই নির্দিষ্ট শতাংশ নয়।** ৩% স্টপ বসে ৫২.৮৪-তে, **কনসোলিডেশনের ভেতরে**, যেখানে আপনি প্যাটার্নটির নিজের হাতেই স্টপ-আউট হতেন।
- **পুরস্কার-থেকে-ঝুঁকি $13.500/3.671 = 3.68$, তাই ব্রেক-ইভেন ২১.৩৮%।** কাজে লাগানোর আগে প্রতিটি অনুপাতকে হিট রেটে রূপান্তর করুন: ৩.৬৮ সহজাত বোধে কিছুই বোঝায় না, ২১.৩৮% আপনার জার্নালের সঙ্গে তুলনীয়।
- **০.৭৫% ঝুঁকি ১১.১৩% পজিশন কেনে — ৫৪.৪৭১-এ ৩,০৬৪ শেয়ার, ১১,২৪৭.৯৪ ঝুঁকিতে ১,৬৬,৮৯৯.১৪ এক্সপোজার।** ঝুঁকিকে এক্সপোজারে রূপান্তরের ১৪.৮× গুণক ঠিক $T_{\\uparrow}/r$, আর সংকোচন খোঁজার পুরো অর্থনৈতিক কারণ এটিই।
- **তরলতার মেঝে একটি পরম ভেটো, সবকিছুর আগে পরীক্ষিত।** কনসোলিডেশন ভলিউম ৩৮,০০০-এ নামান আর $\\nu$ চমকপ্রদ ০.০২০৫-এ উন্নীত হয় অথচ $\\rho$ নড়ে না — তিনটি গেট পাস করে আর রায় তবু **"Do not trade — absence of trading is not a pattern।"** অধ্যায় ২৫-এর গুণমান-মেঝের তৃতীয় আবির্ভাব।
- **সার্কিট সীমা না জিজ্ঞেস করেই ট্রেডটি বদলে দেয়।** $67.971 > 59.29$, আর ব্যান্ডের পাটিগণিত পরিমাপকৃত চালের জন্য দাবি করে **ন্যূনতম টানা তিনটি লিমিট-আপ সেশন।** নয়-বারের যুক্তি বহু-সপ্তাহের ধারণে পরিণত হয়েছে, আর ২১.৩৮% ব্রেক-ইভেন কখনো তার জন্য হিসাব করা হয়নি।
- **প্রকাশনায় ছয় দিন ৩,০৬৪-কে ১,৫৩২ শেয়ারে ও ঝুঁকিকে ইকুইটির ০.৩৭৫%-এ নামায়**, কারণ ৫০.৮০ ভেদ করা গ্যাপ ফিল হয় নিলামের দামে, ৫০.৮০-তে নয়। **গ্যাপের বিরুদ্ধে একমাত্র প্রতিরক্ষা আকার; স্টপ প্রতিরক্ষা নয়।**
- **ট্রিগারের ২.০৩ টাকা ওপরে পিছু নেওয়া — দামের ৪%-এরও কম — ব্রেক-ইভেন ২১.৩৮% থেকে ৩৩.২০%-এ নেয় ও পজিশন ৩,০৬৪ থেকে ১,৯৭৩-এ কমায়।** একই যুক্তি, একই স্টপ; কেবল দেওয়া দামটিই বদলেছে। অ ২৮ (৪৩.৭৫%), অ ২৯ (২৬.৫৭%), অ ৩০ (২৩.০১%) ও অ ৩৩ (২১.৩৮%) জুড়ে **শিক্ষাটি হলো কাঠামোগত অকার্যকরতার কাছের প্রবেশ সস্তা আর দূরের প্রবেশ ব্যয়বহুল।**`,
    },
  },

  interview: [
    {
      q: {
        en: 'How do you tell a continuation pattern from a reversal pattern before it resolves?',
        bn: 'নিষ্পত্তি হওয়ার আগে আপনি কীভাবে একটি কন্টিনিউয়েশন প্যাটার্নকে রিভার্সাল প্যাটার্ন থেকে আলাদা করেন?',
      },
      a: {
        en: 'You cannot, and I think pretending otherwise is the single most expensive habit in technical analysis. Take a symmetrical triangle: lower highs, higher lows, converging on an apex. Nothing inside it distinguishes the two cases — the geometry is identical, the volume profile is identical, the duration is identical. The only difference is an event that has not happened yet at the moment you are looking at the chart. The literature papers over this by telling you a triangle usually breaks in the direction of the prior trend, and that is a weak statistical tendency measured on American equity samples, with survivorship baked into the pattern identification, quoted to you as though it were a rule. It does not survive transaction costs on our market. So what I do instead is refuse to make the call. On the worked example I compute the range compression, which is three point four zero over thirteen point five zero, or about zero point two five, and the volume contraction, which is six lakh twenty thousand over eighteen lakh fifty thousand, or about zero point three four. Those two numbers say a big move is coming. They say nothing about direction, and I do not ask them to. I place a trigger at fifty-four point four seven one above and fifty point five four six below, size off the distance to the opposite boundary, and let price tell me which pattern it was. The naming happens afterwards in the journal, where it is free.',
        bn: 'আপনি পারেন না, আর আমার মতে উল্টোটা ভান করাই টেকনিক্যাল অ্যানালাইসিসের সবচেয়ে ব্যয়বহুল অভ্যাস। একটি সিমেট্রিক্যাল ট্রায়াঙ্গল নিন: নিচু হতে থাকা উঁচু বিন্দু, উঁচু হতে থাকা নিচু বিন্দু, শীর্ষবিন্দুতে অভিসারী। এর ভেতরের কিছুই দুটি ক্ষেত্রকে আলাদা করে না — জ্যামিতি অভিন্ন, ভলিউম প্রোফাইল অভিন্ন, সময়কাল অভিন্ন। একমাত্র পার্থক্য এমন একটি ঘটনা যা চার্ট দেখার মুহূর্তে এখনো ঘটেনি। সাহিত্য এর ওপর প্রলেপ দেয় এই বলে যে ট্রায়াঙ্গল সাধারণত আগের প্রবণতার দিকেই ভাঙে, আর তা মার্কিন ইকুইটি নমুনায় মাপা একটি দুর্বল পরিসংখ্যানগত প্রবণতা, প্যাটার্ন শনাক্তকরণে বেঁচে-থাকার পক্ষপাত মেশানো, আর আপনাকে বলা হচ্ছে যেন তা নিয়ম। আমাদের বাজারে লেনদেন খরচের পর তা টেকে না। তাই আমি বরং সিদ্ধান্তটি নিতেই অস্বীকার করি। কাজ করা উদাহরণে আমি রেঞ্জ সংকোচন গণনা করি, যা তিন দশমিক চার শূন্য ভাগ তেরো দশমিক পাঁচ শূন্য, অর্থাৎ প্রায় শূন্য দশমিক দুই পাঁচ, আর ভলিউম সংকোচন, যা ছয় লক্ষ কুড়ি হাজার ভাগ আঠারো লক্ষ পঞ্চাশ হাজার, অর্থাৎ প্রায় শূন্য দশমিক তিন চার। ঐ দুটি সংখ্যা বলে একটি বড় চাল আসছে। দিক সম্পর্কে তারা কিছুই বলে না, আর আমি তাদের কাছে তা চাইও না। আমি ওপরে চুয়ান্ন দশমিক চার সাত এক ও নিচে পঞ্চাশ দশমিক পাঁচ চার ছয়-এ ট্রিগার বসাই, বিপরীত সীমানার দূরত্ব ধরে আকার নিই, আর দামকেই বলতে দিই এটি কোন প্যাটার্ন ছিল। নামকরণ পরে জার্নালে হয়, যেখানে তা বিনামূল্যে।',
      },
    },
    {
      q: {
        en: 'Your consolidation shows a beautiful volume contraction ratio. Why might that be worthless?',
        bn: 'আপনার কনসোলিডেশন একটি চমৎকার ভলিউম সংকোচন অনুপাত দেখাচ্ছে। তা কেন মূল্যহীন হতে পারে?',
      },
      a: {
        en: 'Because a ratio measured from an already-absent baseline carries no information, and on our market that is the normal case rather than the exception. Every textbook tells you volume should contract inside the consolidation, and the reasoning is sound in a liquid market: it means the urgent buyers and urgent sellers have finished, and what remains is a quiet standoff that cannot last. But on a counter that trades nine thousand shares a day, low volume is not a signature of anything. It is the absence of trading. Here is the concrete demonstration from my planner. On the worked example the consolidation averages six lakh twenty thousand shares against a pole average of eighteen lakh fifty thousand, so the contraction ratio is zero point three four — respectable, not spectacular. Now drop the consolidation volume to thirty-eight thousand and watch what happens: the contraction ratio improves to zero point zero two, which looks magnificent, the range compression ratio does not move at all because price did not change, and the duration gate is untouched. Three of my four gates pass and the chart looks better than before. So I put an absolute liquidity floor ahead of every ratio and I make it a veto rather than a weighting. Below fifty thousand shares the sheet returns do not trade, absence of trading is not a pattern, and it returns that regardless of how good the other three look. That is the same architecture as the quality floor in the fundamental scorecard and the exhaustion override in the support and resistance chapter — a constraint that a good-looking score can outvote is not a constraint.',
        bn: 'কারণ ইতিমধ্যেই অনুপস্থিত একটি ভিত্তি থেকে মাপা অনুপাত কোনো তথ্য বহন করে না, আর আমাদের বাজারে সেটিই ব্যতিক্রম নয়, স্বাভাবিক অবস্থা। প্রতিটি পাঠ্যবই বলে কনসোলিডেশনের ভেতরে ভলিউম সংকুচিত হওয়া উচিত, আর তরল বাজারে যুক্তিটি সঠিক: এর মানে তাড়াহুড়োর ক্রেতা ও তাড়াহুড়োর বিক্রেতারা শেষ করেছেন, আর যা থাকে তা একটি নীরব মুখোমুখি অবস্থান যা টিকতে পারে না। কিন্তু যে কাউন্টারে দিনে নয় হাজার শেয়ার লেনদেন হয়, সেখানে কম ভলিউম কোনো কিছুরই স্বাক্ষর নয়। এটি লেনদেনের অনুপস্থিতি। আমার প্ল্যানার থেকে সুনির্দিষ্ট প্রদর্শনটি এই। কাজ করা উদাহরণে কনসোলিডেশনের গড় ছয় লক্ষ কুড়ি হাজার শেয়ার, পোলের গড় আঠারো লক্ষ পঞ্চাশ হাজারের বিপরীতে, তাই সংকোচন অনুপাত শূন্য দশমিক তিন চার — সম্মানজনক, চমকপ্রদ নয়। এবার কনসোলিডেশনের ভলিউম আটত্রিশ হাজারে নামান আর দেখুন কী হয়: সংকোচন অনুপাত উন্নীত হয় শূন্য দশমিক শূন্য দুই-এ, যা অপূর্ব দেখায়, রেঞ্জ সংকোচন অনুপাত একচুলও নড়ে না কারণ দাম বদলায়নি, আর সময়কালের গেট অক্ষত। আমার চারটির তিনটি গেট পাস করে আর চার্ট আগের চেয়ে ভালো দেখায়। তাই আমি প্রতিটি অনুপাতের আগে একটি পরম তরলতার মেঝে বসাই আর একে ভারাঙ্কন নয়, ভেটো বানাই। পঞ্চাশ হাজার শেয়ারের নিচে শিট ফেরত দেয় ট্রেড করবেন না, লেনদেনের অনুপস্থিতি প্যাটার্ন নয়, আর বাকি তিনটি যত ভালোই দেখাক তাই ফেরত দেয়। এটি ফান্ডামেন্টাল স্কোরকার্ডের গুণমান-মেঝে ও সাপোর্ট-রেজিস্ট্যান্স অধ্যায়ের এক্সহসশন অগ্রাহ্যকারী শর্তেরই স্থাপত্য — যে সীমাবদ্ধতাকে একটি সুন্দর-দেখতে স্কোর ভোটে হারাতে পারে তা সীমাবদ্ধতা নয়।',
      },
    },
    {
      q: {
        en: 'Walk me through how you size a breakout trade, and why the stop goes where it goes.',
        bn: 'একটি ব্রেকআউট ট্রেডের আকার আপনি কীভাবে নির্ধারণ করেন, আর স্টপ যেখানে বসে সেখানে কেন বসে, তা আমাকে বুঝিয়ে বলুন।',
      },
      a: {
        en: 'The stop comes first and everything else is derived from it. On the worked example the consolidation runs from fifty point eight zero to fifty-four point two zero, and my entry trigger is half a percent above the high, so fifty-four point four seven one. The invalidation is the opposite boundary at fifty point eight zero, which gives risk per share of three point six seven one. The reason it goes there and not somewhere more comfortable is that fifty point eight zero is the price at which the structure is falsified — price re-entering the range and traversing the whole of it means the compression thesis has been answered in the other direction, and I no longer have a trade. It is not a number about my comfort; it is a number about the stock. To see why that matters, consider the alternative. A three percent stop below entry sits at fifty-two point eight four, which is inside the consolidation, in the middle of the range the stock has been oscillating through for eleven sessions. I would be stopped out by the pattern I am trading. Once the risk is three point six seven one, sizing is arithmetic. Fifteen lakh of equity at zero point seven five percent risk is eleven thousand two hundred fifty taka of budget, divided by three point six seven one, rounded down, gives three thousand and sixty-four shares. That is a position worth one lakh sixty-six thousand eight hundred ninety-nine, or eleven point one three percent of the account. And notice what that means: a zero point seven five percent risk has bought an eleven percent position, a factor of about fourteen point eight, and that factor is exactly the entry divided by the risk. Tight consolidations buy large positions for identical risk, and that is the entire economic reason for hunting compression rather than direction.',
        bn: 'স্টপ আগে আসে আর বাকি সবকিছু তা থেকে উৎপন্ন। কাজ করা উদাহরণে কনসোলিডেশন চলে পঞ্চাশ দশমিক আট শূন্য থেকে চুয়ান্ন দশমিক দুই শূন্য পর্যন্ত, আর আমার প্রবেশ ট্রিগার হাই-র আধা শতাংশ ওপরে, অর্থাৎ চুয়ান্ন দশমিক চার সাত এক। অকার্যকরতা বিপরীত সীমানা পঞ্চাশ দশমিক আট শূন্য-তে, যা দেয় শেয়ার প্রতি ঝুঁকি তিন দশমিক ছয় সাত এক। এটি সেখানে বসে আর আরও স্বাচ্ছন্দ্যকর কোথাও বসে না, কারণ পঞ্চাশ দশমিক আট শূন্য সেই দাম যেখানে কাঠামোটি মিথ্যা প্রমাণিত হয় — দাম ফিরে ঢুকে পুরো পরিসর পার হওয়া মানে সংকোচনের যুক্তির উত্তর অন্য দিকে এসেছে, আর আমার আর কোনো ট্রেড নেই। এটি আমার স্বাচ্ছন্দ্য নিয়ে সংখ্যা নয়; এটি শেয়ারটি নিয়ে সংখ্যা। কেন তা গুরুত্বপূর্ণ দেখতে বিকল্পটি ভাবুন। প্রবেশের তিন শতাংশ নিচের স্টপ বসে বায়ান্ন দশমিক আট চার-এ, যা কনসোলিডেশনের ভেতরে, ঠিক সেই পরিসরের মাঝখানে যার মধ্যে শেয়ারটি এগারো সেশন ধরে দুলছে। আমি যে প্যাটার্নটি ট্রেড করছি তার হাতেই স্টপ-আউট হতাম। ঝুঁকি তিন দশমিক ছয় সাত এক হয়ে গেলে আকার নির্ধারণ নিছক পাটিগণিত। পনেরো লক্ষ ইকুইটিতে শূন্য দশমিক সাত পাঁচ শতাংশ ঝুঁকি মানে এগারো হাজার দুইশ পঞ্চাশ টাকার বাজেট, তিন দশমিক ছয় সাত এক দিয়ে ভাগ, নিচের দিকে গোল, দেয় তিন হাজার চৌষট্টি শেয়ার। তা এক লক্ষ ছেষট্টি হাজার আটশ নিরানব্বই টাকার পজিশন, অর্থাৎ অ্যাকাউন্টের এগারো দশমিক এক তিন শতাংশ। আর লক্ষ করুন এর মানে কী: শূন্য দশমিক সাত পাঁচ শতাংশ ঝুঁকি এগারো শতাংশ পজিশন কিনেছে, গুণক প্রায় চোদ্দ দশমিক আট, আর ঐ গুণকটি ঠিক প্রবেশ ভাগ ঝুঁকি। আঁটসাঁট কনসোলিডেশন অভিন্ন ঝুঁকিতে বড় পজিশন কিনে দেয়, আর দিকের বদলে সংকোচন খোঁজার পুরো অর্থনৈতিক কারণ এটিই।',
      },
    },
    {
      q: {
        en: 'What do circuit limits do to a measured-move target?',
        bn: 'সার্কিট সীমা একটি পরিমাপকৃত-চালের লক্ষ্যের কী করে?',
      },
      a: {
        en: 'They convert a swing trade into a position trade without asking your permission, and most people never compute the number that reveals it. The whole logic of this chapter is that compression resolves into expansion. The exchange price band says the expansion cannot exceed the applicable percentage in one session. Those two statements are in direct conflict, and the band wins. On my worked example the prior close is fifty-three point nine zero and the band is ten percent, so the day-one ceiling is fifty-nine point two nine. My measured target is sixty-seven point nine seven one. It is not reachable on day one, and if you carry the arithmetic forward, day two tops out at sixty-five point two two and day three at seventy-one point seven four. So the theoretical minimum for the measured move to complete is three consecutive limit-up sessions, and three consecutive limits on a mid-cap is a lottery ticket, not a plan. In practice the expansion arrives over ten to twenty sessions. Now think about what that does to my analysis. I computed a break-even win rate of twenty-one point three eight percent on a nine-bar impulse and an eleven-bar consolidation. I am now being asked to hold that position for a month, through overnight gaps, through a reporting disclosure, and long after the pole has stopped being informative. The arithmetic did not change, but the trade did. So my practice is to print the sessions-to-target figure next to every measured target I compute, before entry. It is the cheapest possible line on the sheet and it is the one that tells me what I am actually signing up for.',
        bn: 'তারা আপনার অনুমতি না নিয়েই একটি সুইং ট্রেডকে পজিশন ট্রেডে বদলে দেয়, আর বেশিরভাগ মানুষ যে সংখ্যাটি তা প্রকাশ করে তা কখনো গণনাই করেন না। এই অধ্যায়ের পুরো যুক্তি হলো সংকোচন সম্প্রসারণে মেটে। এক্সচেঞ্জের মূল্য ব্যান্ড বলে এক সেশনে সম্প্রসারণ প্রযোজ্য শতাংশ ছাড়াতে পারে না। ঐ দুটি বিবৃতি সরাসরি সংঘর্ষে, আর ব্যান্ডই জেতে। আমার কাজ করা উদাহরণে আগের ক্লোজ তিপ্পান্ন দশমিক নয় শূন্য আর ব্যান্ড দশ শতাংশ, তাই প্রথম দিনের ছাদ ঊনষাট দশমিক দুই নয়। আমার পরিমাপকৃত লক্ষ্য সাতষট্টি দশমিক নয় সাত এক। প্রথম দিনে তা পৌঁছানো যায় না, আর পাটিগণিত এগিয়ে নিলে দ্বিতীয় দিনের সর্বোচ্চ পঁয়ষট্টি দশমিক দুই দুই আর তৃতীয় দিনের একাত্তর দশমিক সাত চার। তাই পরিমাপকৃত চাল সম্পূর্ণ হওয়ার তাত্ত্বিক ন্যূনতম টানা তিনটি লিমিট-আপ সেশন, আর একটি মিড-ক্যাপে টানা তিনটি সীমা পরিকল্পনা নয়, লটারির টিকিট। বাস্তবে সম্প্রসারণ আসে দশ থেকে বিশ সেশনে। এবার ভাবুন এটি আমার বিশ্লেষণের কী করে। আমি নয়-বারের ইম্পালস ও এগারো-বারের কনসোলিডেশনে একুশ দশমিক তিন আট শতাংশ ব্রেক-ইভেন উইন রেট গণনা করেছিলাম। এখন আমাকে ঐ পজিশনটি এক মাস ধরে রাখতে বলা হচ্ছে, রাতের গ্যাপ পেরিয়ে, একটি প্রতিবেদন প্রকাশ পেরিয়ে, আর পোলটি তথ্যবহ থাকা বন্ধ করার অনেক পরেও। পাটিগণিত বদলায়নি, কিন্তু ট্রেডটি বদলেছে। তাই আমার চর্চা হলো প্রবেশের আগে গণনা করা প্রতিটি পরিমাপকৃত লক্ষ্যের পাশে সেশন-থেকে-লক্ষ্য সংখ্যাটি ছাপা। এটি শিটের সম্ভাব্য সবচেয়ে সস্তা লাইন আর এটিই বলে দেয় আমি আসলে কীসে সই করছি।',
      },
    },
    {
      q: {
        en: 'A consolidation you were tracking breaks downward instead of upward. What do you do?',
        bn: 'আপনি যে কনসোলিডেশনটি অনুসরণ করছিলেন তা ওপরের বদলে নিচে ভাঙে। আপনি কী করেন?',
      },
      a: {
        en: 'Exactly what I wrote down before the session, which is why arming both triggers is not a formality. On the worked example the lower trigger is fifty point five four six and the failure case closes at fifty point three zero on volume of fourteen lakh ten thousand, which is two point two seven times the consolidation average. That is a genuine downside resolution — expansion, direction and volume all agreeing — and the measured target projects to thirty-seven point zero four six, which sits below the pole start of forty-two. The market is saying the entire nine-session repricing was wrong. In a market with a functioning borrow, that close is a short with the invalidation at the consolidation high of fifty-four point two zero, risk of three point six five four against reward of thirteen point five zero, a ratio of about three point six nine. On the Dhaka exchange it is not a trade, because there is no reliable retail short side, and I think it is important to say that plainly rather than import the textbook conclusion. So the same reading resolves into two actions and no more. First, do not buy — the upside thesis is dead and everyone who accumulated inside the range between fifty point eight and fifty-four point two is now trapped and will be supply on every rally. Second, if I was already long from the pole, this is the exit, not a reason to wait for a bounce, because the structure that justified holding has failed. What I want to stress is that this is not a wasted analysis. It is the same framework returning a different instruction. I was never predicting, so I was never wrong, and I had the exit written down before the session that needed it.',
        bn: 'সেশনের আগে আমি যা লিখে রেখেছিলাম ঠিক তাই, আর সেজন্যই দুটি ট্রিগার সাজানো নিছক আনুষ্ঠানিকতা নয়। কাজ করা উদাহরণে নিচের ট্রিগার পঞ্চাশ দশমিক পাঁচ চার ছয় আর ব্যর্থতার ঘটনাটি ক্লোজ করে পঞ্চাশ দশমিক তিন শূন্য-তে, চোদ্দ লক্ষ দশ হাজার ভলিউমে, যা কনসোলিডেশনের গড়ের দুই দশমিক দুই সাত গুণ। এটি প্রকৃত নিম্নমুখী নিষ্পত্তি — সম্প্রসারণ, দিক ও ভলিউম সবই একমত — আর পরিমাপকৃত লক্ষ্য প্রক্ষিপ্ত হয় সাঁইত্রিশ দশমিক শূন্য চার ছয়-এ, যা বিয়াল্লিশের পোল-শুরুরও নিচে। বাজার বলছে পুরো নয়-সেশনের পুনর্মূল্যায়নটিই ভুল ছিল। কার্যকর ধার-ব্যবস্থার বাজারে ঐ ক্লোজ একটি শর্ট, অকার্যকরতা কনসোলিডেশন হাই চুয়ান্ন দশমিক দুই শূন্য-তে, ঝুঁকি তিন দশমিক ছয় পাঁচ চার আর পুরস্কার তেরো দশমিক পাঁচ শূন্য, অনুপাত প্রায় তিন দশমিক ছয় নয়। ঢাকা এক্সচেঞ্জে এটি ট্রেড নয়, কারণ নির্ভরযোগ্য খুচরা শর্ট সাইড নেই, আর আমার মতে পাঠ্যবইয়ের উপসংহার আমদানি না করে তা স্পষ্ট করে বলা জরুরি। তাই একই পাঠ ঠিক দুটি কাজে গিয়ে দাঁড়ায়, তার বেশি নয়। প্রথমত, কিনবেন না — ঊর্ধ্বমুখী যুক্তি মৃত আর পঞ্চাশ দশমিক আট ও চুয়ান্ন দশমিক দুই-র মধ্যে যাঁরা জমিয়েছেন তাঁরা এখন আটকা ও প্রতিটি র‍্যালিতে সরবরাহ হবেন। দ্বিতীয়ত, পোল থেকে আমি ইতিমধ্যেই লং থাকলে এটিই প্রস্থান, বাউন্সের অপেক্ষার কারণ নয়, কারণ ধরে রাখাকে যে কাঠামো ন্যায্যতা দিয়েছিল তা ব্যর্থ হয়েছে। আমি জোর দিতে চাই যে এটি নষ্ট বিশ্লেষণ নয়। এটি একই কাঠামো ভিন্ন নির্দেশ ফেরত দিচ্ছে। আমি কখনো পূর্বানুমান করিনি, তাই কখনো ভুলও হইনি, আর যে সেশনে প্রস্থানের দরকার হয়েছে তার আগেই তা লিখে রেখেছিলাম।',
      },
    },
    {
      q: {
        en: 'Why does a consolidation form on the DSE, and does the reason change how you trade it?',
        bn: 'ডিএসই-তে কনসোলিডেশন কেন তৈরি হয়, আর কারণটি কি আপনার ট্রেড করার ধরন বদলায়?',
      },
      a: {
        en: 'It changes it completely, and this is the part of the chapter I would defend hardest. The imported textbook assumes a consolidation is accumulation — a large buyer quietly absorbing supply at a level, which is why volume contracts and why the eventual break is upward and sustained. That story requires an informed institutional buyer with a reason to act, and on many of our counters it simply is not what is happening. What is happening is that there is no news. The company reports quarterly, there is nothing between disclosures, and the range narrows because nobody has a reason to trade rather than because anybody is quietly buying. Those two situations produce an identical chart and resolve completely differently. The accumulation case resolves on the chart, gradually, through the level, and my trigger fills. The information-vacuum case resolves on the disclosure, in a gap, in either direction, and it skips straight over my trigger and my stop. That is not a scenario a stop protects me from. So my practice has two parts. First, I check the reporting calendar before sizing, not after — on the worked example there are six days to disclosure, which is inside my intended holding window, and my planner responds by halving the position from three thousand and sixty-four shares to one thousand five hundred and thirty-two, cutting the risk from about eleven thousand two hundred fifty taka to five thousand six hundred and twenty-four. Second, I am explicit with myself that if the disclosure falls inside the window I am no longer trading the pattern, I am trading the earnings, and I should either accept that or stand aside. Halving is the honest middle position: the setup is real, but my invalidation is unenforceable, and size is the only lever I have against a gap because a stop is not one.',
        bn: 'এটি সম্পূর্ণ বদলে দেয়, আর অধ্যায়ের এই অংশটিই আমি সবচেয়ে জোরালোভাবে সমর্থন করব। আমদানি করা পাঠ্যবই ধরে নেয় কনসোলিডেশন মানে সঞ্চয়ন — একটি বড় ক্রেতা একটি স্তরে নীরবে সরবরাহ শুষছেন, আর সেজন্যই ভলিউম সংকুচিত হয় ও শেষ পর্যন্ত ভাঙন ঊর্ধ্বমুখী ও টেকসই হয়। ঐ গল্পের জন্য দরকার একজন অবহিত প্রাতিষ্ঠানিক ক্রেতা যাঁর পদক্ষেপ নেওয়ার কারণ আছে, আর আমাদের অনেক কাউন্টারে তা মোটেই ঘটছে না। যা ঘটছে তা হলো কোনো খবর নেই। কোম্পানি প্রান্তিক ভিত্তিতে প্রতিবেদন দেয়, প্রকাশনার মাঝে কিছুই থাকে না, আর পরিসর সংকুচিত হয় কারণ কারো লেনদেনের কারণ নেই, কেউ নীরবে কিনছেন বলে নয়। ঐ দুটি পরিস্থিতি অভিন্ন চার্ট তৈরি করে আর সম্পূর্ণ ভিন্নভাবে মেটে। সঞ্চয়নের ক্ষেত্রটি মেটে চার্টে, ক্রমশ, স্তরের মধ্য দিয়ে, আর আমার ট্রিগার ফিল হয়। তথ্য-শূন্যতার ক্ষেত্রটি মেটে প্রকাশনায়, একটি গ্যাপে, যেকোনো দিকে, আর তা আমার ট্রিগার ও স্টপ দুটোই টপকে যায়। স্টপ আমাকে ঐ পরিস্থিতি থেকে রক্ষা করে না। তাই আমার চর্চার দুটি অংশ। প্রথমত, আমি আকার নির্ধারণের আগে প্রতিবেদন ক্যালেন্ডার দেখি, পরে নয় — কাজ করা উদাহরণে প্রকাশনায় ছয় দিন বাকি, যা আমার অভিপ্রেত ধারণ-জানালার ভেতরে, আর আমার প্ল্যানার সাড়া দেয় পজিশন তিন হাজার চৌষট্টি শেয়ার থেকে এক হাজার পাঁচশ বত্রিশে অর্ধেক করে, ঝুঁকি প্রায় এগারো হাজার দুইশ পঞ্চাশ টাকা থেকে পাঁচ হাজার ছয়শ চব্বিশে নামিয়ে। দ্বিতীয়ত, আমি নিজের কাছে স্পষ্ট থাকি যে প্রকাশনা জানালার ভেতরে পড়লে আমি আর প্যাটার্ন ট্রেড করছি না, আমি আয়ের ঘোষণা ট্রেড করছি, আর হয় তা মেনে নিতে হবে নয়তো সরে দাঁড়াতে হবে। অর্ধেক করা সৎ মধ্যবর্তী অবস্থান: সেটআপ প্রকৃত, কিন্তু আমার অকার্যকরতা কার্যকর করা যায় না, আর গ্যাপের বিরুদ্ধে আকারই আমার একমাত্র লিভার কারণ স্টপ লিভার নয়।',
      },
    },
  ],

  quiz: [
    {
      q: {
        en: 'What distinguishes a continuation pattern from a reversal pattern before it resolves?',
        bn: 'নিষ্পত্তির আগে কন্টিনিউয়েশন প্যাটার্নকে রিভার্সাল প্যাটার্ন থেকে কী আলাদা করে?',
      },
      options: {
        en: [
          'The volume profile inside the pattern',
          'The duration of the consolidation',
          'Nothing — only which boundary price leaves through',
          'The slope of the converging trendlines',
        ],
        bn: [
          'প্যাটার্নের ভেতরের ভলিউম প্রোফাইল',
          'কনসোলিডেশনের সময়কাল',
          'কিছুই না — কেবল দাম কোন সীমানা দিয়ে বেরোয়',
          'অভিসারী ট্রেন্ডলাইনের ঢাল',
        ],
      },
      answer: 2,
    },
    {
      q: {
        en: 'With a pole height of 13.50 and a consolidation range of 3.40, the range compression ratio is:',
        bn: '১৩.৫০ পোল উচ্চতা ও ৩.৪০ কনসোলিডেশন রেঞ্জে রেঞ্জ সংকোচন অনুপাত:',
      },
      options: {
        en: ['0.2519', '0.3351', '0.3481', '3.9706'],
        bn: ['০.২৫১৯', '০.৩৩৫১', '০.৩৪৮১', '৩.৯৭০৬'],
      },
      answer: 0,
    },
    {
      q: {
        en: 'With a consolidation high of 54.20 and a 0.5% buffer, the upper trigger is:',
        bn: '৫৪.২০ কনসোলিডেশন হাই ও ০.৫% বাফারে উপরের ট্রিগার:',
      },
      options: {
        en: ['54.200', '54.471', '54.700', '55.500'],
        bn: ['৫৪.২০০', '৫৪.৪৭১', '৫৪.৭০০', '৫৫.৫০০'],
      },
      answer: 1,
    },
    {
      q: {
        en: 'The measured upside target should be projected from:',
        bn: 'পরিমাপকৃত ঊর্ধ্বমুখী লক্ষ্য প্রক্ষেপ করা উচিত:',
      },
      options: {
        en: [
          'The consolidation high, 54.20',
          'The consolidation midpoint, 52.50',
          'The upper trigger, 54.471',
          'The pole end, 55.50',
        ],
        bn: [
          'কনসোলিডেশন হাই ৫৪.২০ থেকে',
          'কনসোলিডেশনের মধ্যবিন্দু ৫২.৫০ থেকে',
          'উপরের ট্রিগার ৫৪.৪৭১ থেকে',
          'পোলের শেষ ৫৫.৫০ থেকে',
        ],
      },
      answer: 2,
    },
    {
      q: {
        en: 'Entry 54.471, invalidation 50.80, target 67.971. The break-even win rate is closest to:',
        bn: 'প্রবেশ ৫৪.৪৭১, অকার্যকরতা ৫০.৮০, লক্ষ্য ৬৭.৯৭১। ব্রেক-ইভেন উইন রেট সবচেয়ে কাছাকাছি:',
      },
      options: {
        en: ['21.38%', '26.57%', '33.20%', '43.75%'],
        bn: ['২১.৩৮%', '২৬.৫৭%', '৩৩.২০%', '৪৩.৭৫%'],
      },
      answer: 0,
    },
    {
      q: {
        en: 'On BDT 15,00,000 equity risking 0.75% with risk per share of 3.671, the position size is:',
        bn: '১৫,০০,০০০ টাকা ইকুইটিতে ০.৭৫% ঝুঁকি ও শেয়ার প্রতি ৩.৬৭১ ঝুঁকিতে পজিশনের আকার:',
      },
      options: {
        en: ['833 shares', '1,532 shares', '1,973 shares', '3,064 shares'],
        bn: ['৮৩৩ শেয়ার', '১,৫৩২ শেয়ার', '১,৯৭৩ শেয়ার', '৩,০৬৪ শেয়ার'],
      },
      answer: 3,
    },
    {
      q: {
        en: 'Consolidation average volume falls to 38,000 shares. The correct verdict is:',
        bn: 'কনসোলিডেশনের গড় ভলিউম ৩৮,০০০ শেয়ারে নামে। সঠিক রায়:',
      },
      options: {
        en: [
          'Stronger setup — the volume contraction ratio improved',
          'Do not trade — absence of trading is not a pattern',
          'Unchanged — volume is not part of the gates',
          'Double the size — less supply means a cleaner break',
        ],
        bn: [
          'শক্তিশালী সেটআপ — ভলিউম সংকোচন অনুপাত উন্নত হয়েছে',
          'ট্রেড করবেন না — লেনদেনের অনুপস্থিতি প্যাটার্ন নয়',
          'অপরিবর্তিত — ভলিউম গেটের অংশ নয়',
          'আকার দ্বিগুণ করুন — কম সরবরাহ মানে পরিচ্ছন্নতর ভাঙন',
        ],
      },
      answer: 1,
    },
    {
      q: {
        en: 'Prior close 53.90, band 10%, measured target 67.971. The minimum number of sessions for the target is:',
        bn: 'আগের ক্লোজ ৫৩.৯০, ব্যান্ড ১০%, পরিমাপকৃত লক্ষ্য ৬৭.৯৭১। লক্ষ্যে পৌঁছানোর ন্যূনতম সেশন সংখ্যা:',
      },
      options: {
        en: ['1', '2', '3', '5'],
        bn: ['১', '২', '৩', '৫'],
      },
      answer: 2,
    },
    {
      q: {
        en: 'A stop placed 3% below the 54.471 entry would sit at 52.84. The problem is that this price is:',
        bn: '৫৪.৪৭১ প্রবেশের ৩% নিচে বসানো স্টপ হতো ৫২.৮৪-তে। সমস্যা হলো এই দামটি:',
      },
      options: {
        en: [
          'Too far from entry, so the position would be too small',
          'Inside the 50.80–54.20 consolidation, so ordinary range noise reaches it',
          'Below the measured downside target',
          'Above the upper trigger',
        ],
        bn: [
          'প্রবেশ থেকে অত্যধিক দূরে, তাই পজিশন খুব ছোট হতো',
          '৫০.৮০–৫৪.২০ কনসোলিডেশনের ভেতরে, তাই সাধারণ পরিসরের হইচইই পৌঁছে যায়',
          'পরিমাপকৃত নিম্নমুখী লক্ষ্যের নিচে',
          'উপরের ট্রিগারের ওপরে',
        ],
      },
      answer: 1,
    },
    {
      q: {
        en: 'The consolidation breaks downward on 2.27× volume. On the DSE, the correct response is:',
        bn: 'কনসোলিডেশন ২.২৭ গুণ ভলিউমে নিচে ভাঙে। ডিএসই-তে সঠিক প্রতিক্রিয়া:',
      },
      options: {
        en: [
          'Short with a stop above the consolidation high',
          'Average down inside the range',
          'Do not buy, and exit if already long',
          'Wait for a retest of 54.20 before deciding',
        ],
        bn: [
          'কনসোলিডেশন হাই-র ওপরে স্টপ রেখে শর্ট করুন',
          'পরিসরের ভেতরে গড় কমান',
          'কিনবেন না, আর ইতিমধ্যে লং থাকলে বেরিয়ে যান',
          'সিদ্ধান্তের আগে ৫৪.২০-র রিটেস্টের অপেক্ষা করুন',
        ],
      },
      answer: 2,
    },
  ],
};
