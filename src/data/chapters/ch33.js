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
  },
};
