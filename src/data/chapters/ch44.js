/**
 * Chapter 44 — Divergence Analysis
 * Part III, Technical Analysis. Builds directly on Ch 35 (MACD) and Ch 36 (RSI),
 * which define the oscillators divergence is measured against, and on Ch 30
 * (support/resistance zones) and Ch 31 (trendlines) for the price-structure
 * trigger without which divergence must never be traded. Also leans on
 * Ch 26 (floor-price exclusion), Ch 34 (EMA), Ch 37 (Stochastic), Ch 39 (ATR),
 * Ch 40 (volume). Feeds Ch 45 (Multi-Indicator Confluence).
 * No Excel sheet and no Python block for this chapter by design.
 */

export default {
  n: 44,
  tools: [],

  objectives: {
    en: [
      'State what divergence mechanically claims — that a new price extreme was reached with a lower rate of change of participation — and why that is a statement about deceleration, not a prophecy about reversal.',
      'Write regular and hidden divergence as explicit sign conditions on paired price and oscillator swings, and formalise them as a slope comparison with a minimum bar-separation requirement.',
      'Confront the pivot-selection problem honestly: show that five swing highs generate ten defensible bearish divergences and four swing lows generate six defensible hidden bullish ones, from the same advance.',
      'Quantify the cost of trading divergence as an entry rather than as a warning, using a worked case where the signal fired four times before the turn.',
      'Apply the confirmation discipline — divergence never acts alone; it must be triggered by a broken level from Ch 30 or a broken trendline from Ch 31 — and adapt it to DSE circuit limits, floor-price windows, thin liquidity and the absence of a short side.',
    ],
    bn: [
      'ডাইভারজেন্স যান্ত্রিকভাবে কী দাবি করে তা বলা — যে একটি নতুন দাম-প্রান্তে পৌঁছানো হয়েছে অংশগ্রহণের নিম্নতর পরিবর্তন-হারে — এবং কেন তা মন্দনের বিবৃতি, উল্টে যাওয়ার ভবিষ্যদ্বাণী নয়।',
      'রেগুলার ও হিডেন ডাইভারজেন্সকে জোড়া-বাঁধা দাম ও অসিলেটর সুইংয়ের ওপর সুস্পষ্ট চিহ্ন-শর্ত হিসেবে লেখা, এবং সেগুলোকে সর্বনিম্ন বার-ব্যবধানের শর্তসহ একটি ঢাল-তুলনা হিসেবে আনুষ্ঠানিক রূপ দেওয়া।',
      'পিভট-নির্বাচনের সমস্যার সৎ মুখোমুখি হওয়া: দেখানো যে পাঁচটি সুইং হাই দশটি সমর্থনযোগ্য বেয়ারিশ ডাইভারজেন্স তৈরি করে এবং চারটি সুইং লো ছয়টি সমর্থনযোগ্য হিডেন বুলিশ ডাইভারজেন্স তৈরি করে — একই অগ্রগমন থেকে।',
      'ডাইভারজেন্সকে সতর্কবার্তার বদলে প্রবেশ-সংকেত হিসেবে ব্যবহারের খরচ পরিমাণে প্রকাশ করা, এমন একটি কার্যকরী কেস দিয়ে যেখানে সংকেতটি মোড় ঘোরার আগে চারবার বেজেছিল।',
      'নিশ্চিতকরণের শৃঙ্খলা প্রয়োগ করা — ডাইভারজেন্স কখনো একা কাজ করে না; অধ্যায় ৩০-এর ভাঙা লেভেল বা অধ্যায় ৩১-এর ভাঙা ট্রেন্ডলাইন দিয়ে তা ট্রিগার হতে হবে — এবং ডিএসই-র সার্কিট সীমা, ফ্লোর-প্রাইস জানালা, পাতলা তারল্য ও শর্ট সাইডের অনুপস্থিতির সঙ্গে তা মানিয়ে নেওয়া।',
    ],
  },

  blocks: {
    theory: {
      en: `Chapter 35 built the MACD and Chapter 36 built the RSI. Both chapters mentioned divergence in a single guarded paragraph and then told you not to trade it. **This is the chapter that pays that debt — and the honest way to pay it is to spend most of the chapter attacking the idea.**

Divergence is the most over-trusted signal in retail technical analysis. It is over-trusted for a specific and interesting reason: **it is beautiful in hindsight and nearly useless in real time**, and almost nobody who teaches it draws the distinction.

### What divergence actually claims

Take an oscillator $O$ — the RSI of Chapter 36, the MACD line of Chapter 35, the Stochastic of Chapter 37, it does not matter which. Take two swing highs in price, at times $t_1 < t_2$, with $P_2 > P_1$. If $O_2 < O_1$, you have **bearish regular divergence.**

Now read what that says, stripped of mysticism. Every one of those oscillators is, at bottom, a **normalised rate of change**. The RSI is the ratio of average up-movement to total movement over a 27-period-equivalent memory. The MACD line is the gap between a fast and a slow EMA, which is a smoothed first difference. So the divergence condition says exactly this and nothing more:

> **Price reached a higher level than last time, but the average rate at which it got there was lower.**

That is a true statement about the data. It is a *descriptive* statement. It is not a forecast, and the entire retail literature's error is in treating a descriptive statement as a predictive one.

### It is a claim about participation, not about price

Why does the rate of change fall while price rises? Because **fewer taka are arriving per unit of price gained.**

A rally is a sequence of transactions. In its early phase, a large cohort of buyers is competing for a limited float, so every taka of price gain is bought with heavy volume and rapid movement. Later in the same advance, the marginal buyer is the one who was reluctant at lower prices. The cohort is smaller. Price still grinds up — because the sellers are also fewer, and the book is thin — but each new high takes longer and covers less ground.

**Divergence is the chart's way of reporting that the second derivative has turned while the first derivative has not.** Price is still rising. The rate of rising is falling. That is genuinely useful information about the composition of the trend, and it is the reason divergence deserves a chapter rather than a footnote.

### And here is precisely why it fails

A decelerating car is still moving forward. It may decelerate for a very long time and never stop, and it may accelerate again. **There is no arithmetic law that says a decelerating advance must reverse.** There is only an intuition, and the intuition is wrong often enough to bankrupt people.

Worse, the failure mode is not random — it is systematic and it is exactly backwards from what a beginner expects:

**In a strong trend, divergence fires repeatedly and early.** A powerful advance almost always sets its highest momentum reading in its *first* impulse, because that is when the cohort of buyers is largest and the base is closest. Every subsequent high is therefore made on lower momentum, by construction. So a strong trend does not produce one divergence near its end; **it produces a chain of divergences all the way up.**

And then the trend ends — as trends do — and the last divergence in the chain coincides with the top. A chart annotated after the fact shows an arrow at that last one and calls it a signal. **The three or four that fired earlier and cost money are cropped out of the screenshot.** That is not a metaphor; it is a literal description of how divergence is taught.

### The one-sentence version you should carry

**Divergence is a warning to tighten risk. It is never, on its own, an entry or an exit.**

Everything else in this chapter is machinery for making that sentence operational: how to define the pivots so you are not fooling yourself, how to require a minimum separation so the signal means something, how to demand a price-structure trigger before acting, and how much the discipline is worth in taka.

### The central honesty problem: you choose the pivots

This is the part that most treatments never state, and it is fatal if left unstated.

**Divergence is only as objective as the two swing points you picked.** There is no divergence in the data. There is a divergence *between two points you selected from the data.* Change either point and the divergence appears, disappears, reverses, or doubles in magnitude.

Consider an advance with five identifiable swing highs. That is $\\binom{5}{2} = 10$ ordered pairs, and every one of them is a defensible candidate for a divergence claim. In the worked case of §44.3, **all ten of them satisfy the bearish divergence condition.** A trader who wants to be bearish has ten pieces of evidence. A trader who wants to be bullish looks at the four swing *lows* in the same advance, forms $\\binom{4}{2} = 6$ pairs, and finds that **all six satisfy hidden bullish divergence** — which is a continuation signal pointing the opposite way.

Sixteen signals from one advance, pointing in two directions, all of them technically correct. **This is not a pathology of a badly chosen example. It is what divergence is.**

The only defence is to fix the pivot rule *before* you look — a mechanical swing definition, a minimum bar separation, and a commitment to use adjacent pivots only — and then to accept whatever the rule returns. **A pivot rule chosen after seeing the chart is not a rule; it is a preference wearing a rule's clothes.**

### Regular versus hidden

There are two families, and they point in opposite directions.

| Family | Price | Oscillator | Reads as |
|---|---|---|---|
| **Bearish regular** | Higher high | Lower high | Advance decelerating — warning |
| **Bullish regular** | Lower low | Higher low | Decline decelerating — warning |
| **Bearish hidden** | Lower high | Higher high | Downtrend intact — continuation |
| **Bullish hidden** | Higher low | Lower low | Uptrend intact — continuation |

Regular divergence is measured at the extremes *in the direction of the trend*. Hidden divergence is measured at the pullbacks *against* it. **The same advance therefore generates regular warnings at its highs and hidden confirmations at its lows, simultaneously and permanently.**

Most courses teach regular divergence and never mention hidden divergence, which conveniently removes the contradiction from view. **Once you know both exist you can never again read a divergence as unambiguous**, and that is the correct state of mind.

### The oscillator you choose changes the answer

Divergence is not a property of price. It is a property of *price and one specific oscillator computed one specific way*. Three consequences follow, and all three are measurable:

**1. Different oscillators disagree.** In the worked case, the first divergence is present on RSI(14) and *absent* on MACD(12,26,9) — the MACD line made a higher high where the RSI made a lower one. Requiring two oscillators to agree is therefore a real filter, and in that case it removes the most expensive signal of the four.

**2. Different seeding conventions for the same oscillator disagree.** Chapter 36 showed three defensible ways to initialise Wilder's RSI. On the worked data those three produce readings of **87.5554, 100.0000 and 94.6616 at the same session** — a spread of 12.4446 RSI points. Under Wilder's own recursion the first divergence exists ($\\Delta RSI = -1.3645$); under a simple rolling fourteen-bar RSI on identical closes it **does not exist at all** ($\\Delta RSI = +2.8169$). Two analysts, same data, same indicator name, opposite conclusions.

**3. Warm-up contaminates the left anchor.** An RSI(14) has no value at all before its fourteenth change, and Chapter 36 showed it carries seed influence for dozens of bars after that. A MACD signal line needs its own nine periods on top of the twenty-six the slow EMA needs. **A divergence whose left pivot sits inside the warm-up is not a divergence; it is an artefact of initialisation.** In the worked series the MACD histogram is exactly 0.0000 at session 25 — not because momentum was balanced, but because that is the bar where the signal line was seeded to equal the MACD line.

### The DSE overlay, which changes the arithmetic

Four local realities distort divergence more than they distort almost anything else in Part III, because divergence is a comparison of two momentum readings and anything that biases *one* of them biases the comparison.

**Circuit limits manufacture phantom divergences.** When a session locks at the daily band, the recorded close is where the exchange stopped the move, not where supply met demand. The oscillator is fed the truncated change. In the illustration of §44.4.7, a demand shock that would have cleared at one price prints at the band instead, and RSI(14) reads **78.3391 rather than 81.7946 — a 3.4555-point shift produced entirely by the rulebook.** Compare that to the 1.3645-point RSI decline that constituted the first divergence in the worked case: **the artefact is 2.532 times the size of the signal.**

**Floor-price windows make divergence undefined, not weak.** During an administered floor, closes repeat, changes are zero, and Wilder's average loss collapses toward zero. The RSI flattens or pins; the MACD decays toward the zero line. There is no momentum reading to compare, because there was no momentum — there was a rule. Carry Chapter 26's exclusion flag and **delete these bars before you compute anything.** A divergence measured across a floor window is a measurement of the floor.

**Thin liquidity makes the pivots noisy.** On a counter where two hundred shares can print a new high, the swing high your rule identifies may be a single retail order rather than a cohort of buyers. Divergence anchored on such a print is anchored on nothing. **Require a volume condition on the pivot itself**, as Chapter 40 sets out.

**There is no reliable short side.** This is the constraint that reorganises everything. Bearish divergence, on a market where you cannot borrow stock, is not a short signal. It is:

- a reason to **stop adding** to a position,
- a reason to **tighten the stop** toward the nearest structure,
- and, once a price trigger confirms it, a reason to **exit**.

That is the whole permitted use. Anyone teaching you to "short the divergence" on the DSE is describing a trade you cannot place. Meanwhile **bullish regular divergence is the more useful of the two here**, because the action it licenses — buying, after confirmation — is one you can actually take.

### Why this chapter has no spreadsheet

Chapters 30, 35, 36 and 39 all ship a workbook. This one deliberately does not, and the reason is pedagogical rather than practical.

**A spreadsheet that scores divergences would teach exactly the wrong lesson: that the signal can be automated into a number and then trusted.** The failure mode of divergence is not arithmetic — the arithmetic is trivial. The failure mode is *pivot selection*, and pivot selection is a judgement that a cell formula would hide rather than expose. Every figure in this chapter is computed by hand in §44.5 so that you see each choice being made.

**If you want the discipline in a sheet, build it in Chapter 45's confluence scorecard**, where divergence appears as one input among several and cannot outvote the price structure. That is the correct place for it, and it is the only place in this course where a divergence reading is allowed to touch a position size.`,
      bn: `অধ্যায় ৩৫ MACD গড়েছে আর অধ্যায় ৩৬ RSI গড়েছে। দুটি অধ্যায়ই ডাইভারজেন্স নিয়ে একটি সাবধানী অনুচ্ছেদ লিখে আপনাকে বলেছে এটি ট্রেড করবেন না। **এই অধ্যায় সেই ঋণ শোধ করে — আর তা শোধের সৎ উপায় হলো অধ্যায়ের বেশিরভাগ সময় ধারণাটিকে আক্রমণ করা।**

খুচরা টেকনিক্যাল অ্যানালাইসিসে ডাইভারজেন্সই সবচেয়ে বেশি বিশ্বাস-পাওয়া সংকেত। এর অতিরিক্ত বিশ্বাসের কারণ নির্দিষ্ট এবং কৌতূহলোদ্দীপক: **পশ্চাদ্দৃষ্টিতে এটি সুন্দর আর বাস্তব সময়ে প্রায় অকেজো**, এবং যাঁরা এটি শেখান তাঁদের প্রায় কেউই পার্থক্যটি টানেন না।

### ডাইভারজেন্স আসলে কী দাবি করে

একটি অসিলেটর $O$ নিন — অধ্যায় ৩৬-এর RSI, অধ্যায় ৩৫-এর MACD লাইন, অধ্যায় ৩৭-এর স্টোকাস্টিক, কোনটি তাতে কিছু আসে যায় না। দামের দুটি সুইং হাই নিন, সময় $t_1 < t_2$-এ, যেখানে $P_2 > P_1$। যদি $O_2 < O_1$ হয়, আপনার কাছে **বেয়ারিশ রেগুলার ডাইভারজেন্স** আছে।

এখন রহস্যবাদ ছেঁটে পড়ুন এটি কী বলে। ঐ প্রতিটি অসিলেটর মূলত একটি **প্রমিতকৃত পরিবর্তনের হার**। RSI হলো ২৭-পর্ব-সমতুল্য স্মৃতিতে গড় ঊর্ধ্ব-চলাচল ও মোট চলাচলের অনুপাত। MACD লাইন হলো একটি দ্রুত ও একটি ধীর EMA-র ব্যবধান, যা একটি মসৃণকৃত প্রথম অন্তর। তাই ডাইভারজেন্সের শর্ত ঠিক এটাই বলে, এর বেশি কিছু নয়:

> **দাম গতবারের চেয়ে উঁচু স্তরে পৌঁছেছে, কিন্তু সেখানে পৌঁছানোর গড় হার ছিল কম।**

এটি উপাত্ত সম্পর্কে একটি সত্য বিবৃতি। এটি একটি *বর্ণনামূলক* বিবৃতি। এটি পূর্বাভাস নয়, আর সমগ্র খুচরা সাহিত্যের ভুল হলো একটি বর্ণনামূলক বিবৃতিকে পূর্বাভাসমূলক গণ্য করা।

### এটি অংশগ্রহণ নিয়ে দাবি, দাম নিয়ে নয়

দাম বাড়তে থাকলে পরিবর্তনের হার কেন পড়ে? কারণ **অর্জিত প্রতি একক দামের বিপরীতে কম টাকা আসছে।**

একটি র‍্যালি লেনদেনের একটি ক্রম। তার প্রথম পর্বে একদল বড় ক্রেতা সীমিত ফ্লোটের জন্য প্রতিযোগিতা করেন, তাই প্রতি টাকা দাম-বৃদ্ধি কেনা হয় ভারী ভলিউমে ও দ্রুত চলাচলে। ঐ একই অগ্রগমনের শেষ দিকে প্রান্তিক ক্রেতা তিনি, যিনি নিচু দামে দ্বিধা করেছিলেন। দলটি ছোট। দাম তবু ঘষে ঘষে ওঠে — কারণ বিক্রেতারাও কম, আর বইটি পাতলা — কিন্তু প্রতিটি নতুন উচ্চতায় বেশি সময় লাগে ও কম জায়গা ঢাকা পড়ে।

**ডাইভারজেন্স হলো চার্টের ভাষায় এই খবর দেওয়া যে দ্বিতীয় অন্তরকলজ ঘুরে গেছে অথচ প্রথমটি ঘোরেনি।** দাম এখনো বাড়ছে। বাড়ার হার কমছে। ট্রেন্ডের গঠন সম্পর্কে এটি সত্যিকারের কাজের তথ্য, আর এই কারণেই ডাইভারজেন্স একটি পাদটীকা নয়, একটি অধ্যায় প্রাপ্য।

### আর ঠিক এই কারণেই এটি ব্যর্থ হয়

মন্দিত হতে থাকা গাড়ি এখনো সামনেই চলছে। এটি বহুদিন মন্দিত হয়ে কখনো না-ও থামতে পারে, আর আবার ত্বরিত হতে পারে। **এমন কোনো পাটিগণিতীয় বিধি নেই যা বলে মন্দিত অগ্রগমনকে উল্টে যেতেই হবে।** কেবল একটি সহজাত ধারণা আছে, আর ধারণাটি যথেষ্ট বার ভুল হয় যাতে মানুষ দেউলিয়া হয়।

আরও খারাপ, ব্যর্থতার ধরনটি এলোমেলো নয় — এটি সুসংবদ্ধ এবং নতুনের প্রত্যাশার ঠিক উল্টো:

**শক্তিশালী ট্রেন্ডে ডাইভারজেন্স বারবার ও আগেভাগে বাজে।** একটি শক্তিশালী অগ্রগমন প্রায় সবসময় তার সর্বোচ্চ মোমেন্টাম পাঠ *প্রথম* ইমপালসেই স্থাপন করে, কারণ তখনই ক্রেতার দল সবচেয়ে বড় ও ভিত্তি সবচেয়ে কাছে। তাই পরবর্তী প্রতিটি উচ্চতা গঠনগতভাবেই নিম্নতর মোমেন্টামে তৈরি হয়। ফলে শক্তিশালী ট্রেন্ড শেষের কাছে একটি ডাইভারজেন্স দেয় না; **এটি ওপরে ওঠার পুরো পথজুড়ে ডাইভারজেন্সের একটি শিকল দেয়।**

তারপর ট্রেন্ড শেষ হয় — ট্রেন্ড যেমন হয় — আর শিকলের শেষ ডাইভারজেন্সটি শীর্ষের সঙ্গে মিলে যায়। ঘটনার পরে চিহ্নিত করা একটি চার্ট ঐ শেষটির ওপর তির আঁকে ও তাকে সংকেত বলে। **যে তিন-চারটি আগে বেজেছিল ও টাকা খরচ করিয়েছিল, সেগুলো স্ক্রিনশট থেকে কেটে বাদ দেওয়া হয়।** এটি রূপক নয়; ডাইভারজেন্স কীভাবে শেখানো হয় তার আক্ষরিক বর্ণনা।

### যে এক-বাক্য সংস্করণটি বহন করবেন

**ডাইভারজেন্স ঝুঁকি আঁটসাঁট করার সতর্কবার্তা। এটি একা কখনোই প্রবেশ বা প্রস্থান নয়।**

এই অধ্যায়ের বাকি সবকিছু ঐ বাক্যটিকে কার্যকর করার যন্ত্রপাতি: পিভটগুলোকে কীভাবে সংজ্ঞায়িত করবেন যাতে নিজেকে ঠকাচ্ছেন না, সর্বনিম্ন ব্যবধান কেন দাবি করবেন যাতে সংকেতের অর্থ থাকে, কাজ করার আগে কেন একটি দাম-কাঠামো ট্রিগার চাইবেন, আর ঐ শৃঙ্খলার দাম টাকায় কত।

### কেন্দ্রীয় সততার সমস্যা: পিভটগুলো আপনি বাছেন

এই অংশটি বেশিরভাগ আলোচনা কখনো বলে না, আর না বললে এটি মারাত্মক।

**ডাইভারজেন্স ঠিক ততটাই বস্তুনিষ্ঠ যতটা আপনার বাছা দুটি সুইং পয়েন্ট।** উপাত্তে কোনো ডাইভারজেন্স নেই। উপাত্ত থেকে *আপনার বাছা দুটি বিন্দুর মধ্যে* একটি ডাইভারজেন্স আছে। যেকোনো একটি বিন্দু বদলান আর ডাইভারজেন্স হাজির হয়, উবে যায়, উল্টে যায়, বা মাত্রায় দ্বিগুণ হয়।

পাঁচটি শনাক্তযোগ্য সুইং হাইসহ একটি অগ্রগমন ভাবুন। তা $\\binom{5}{2} = 10$ জোড়া, আর তাদের প্রত্যেকটিই একটি ডাইভারজেন্স-দাবির সমর্থনযোগ্য প্রার্থী। §৪৪.৩-এর কার্যকরী কেসে **দশটির দশটিই বেয়ারিশ ডাইভারজেন্সের শর্ত পূরণ করে।** যে ট্রেডার বেয়ারিশ হতে চান তাঁর হাতে দশটি প্রমাণ। যে ট্রেডার বুলিশ হতে চান তিনি একই অগ্রগমনের চারটি সুইং *লো* দেখেন, $\\binom{4}{2} = 6$ জোড়া বানান, আর দেখেন **ছয়টির ছয়টিই হিডেন বুলিশ ডাইভারজেন্স পূরণ করে** — যা উল্টো দিকে নির্দেশ করা একটি ধারাবাহিকতার সংকেত।

একটি অগ্রগমন থেকে ষোলোটি সংকেত, দুই দিকে নির্দেশ করা, সবগুলোই কারিগরিভাবে সঠিক। **এটি একটি বাজে বাছাই করা উদাহরণের ব্যাধি নয়। ডাইভারজেন্স জিনিসটাই এই।**

একমাত্র প্রতিরক্ষা হলো তাকানোর *আগেই* পিভটের নিয়ম স্থির করা — একটি যান্ত্রিক সুইং সংজ্ঞা, একটি সর্বনিম্ন বার-ব্যবধান, এবং কেবল সন্নিহিত পিভট ব্যবহারের অঙ্গীকার — আর তারপর নিয়ম যা ফেরত দেয় তা মেনে নেওয়া। **চার্ট দেখার পর বাছা পিভট-নিয়ম কোনো নিয়ম নয়; এটি নিয়মের পোশাক পরা পছন্দ।**

### রেগুলার বনাম হিডেন

দুটি পরিবার আছে, আর তারা বিপরীত দিকে নির্দেশ করে।

| পরিবার | দাম | অসিলেটর | পাঠ |
|---|---|---|---|
| **বেয়ারিশ রেগুলার** | উচ্চতর হাই | নিম্নতর হাই | অগ্রগমন মন্দিত — সতর্কতা |
| **বুলিশ রেগুলার** | নিম্নতর লো | উচ্চতর লো | পতন মন্দিত — সতর্কতা |
| **বেয়ারিশ হিডেন** | নিম্নতর হাই | উচ্চতর হাই | ডাউনট্রেন্ড অটুট — ধারাবাহিকতা |
| **বুলিশ হিডেন** | উচ্চতর লো | নিম্নতর লো | আপট্রেন্ড অটুট — ধারাবাহিকতা |

রেগুলার ডাইভারজেন্স মাপা হয় *ট্রেন্ডের দিকের* প্রান্তগুলোতে। হিডেন ডাইভারজেন্স মাপা হয় ট্রেন্ডের *বিরুদ্ধে* যাওয়া পুলব্যাকগুলোতে। **তাই একই অগ্রগমন তার উচ্চতাগুলোতে রেগুলার সতর্কতা আর তার তলগুলোতে হিডেন সমর্থন তৈরি করে, একই সঙ্গে ও স্থায়ীভাবে।**

বেশিরভাগ কোর্স রেগুলার ডাইভারজেন্স শেখায় ও হিডেন ডাইভারজেন্সের কথা কখনো বলে না, যা সুবিধাজনকভাবে দ্বন্দ্বটিকে চোখের আড়াল করে। **দুটোরই অস্তিত্ব জানার পর আপনি আর কখনো একটি ডাইভারজেন্সকে দ্ব্যর্থহীন হিসেবে পড়তে পারবেন না**, আর এটিই সঠিক মানসিক অবস্থা।

### আপনার বাছা অসিলেটর উত্তর বদলে দেয়

ডাইভারজেন্স দামের ধর্ম নয়। এটি *দাম ও একটি নির্দিষ্ট উপায়ে গণিত একটি নির্দিষ্ট অসিলেটরের* ধর্ম। তিনটি পরিণতি আসে, আর তিনটিই মাপা যায়:

**১. ভিন্ন অসিলেটর ভিন্ন কথা বলে।** কার্যকরী কেসে প্রথম ডাইভারজেন্সটি RSI(১৪)-তে আছে আর MACD(১২,২৬,৯)-তে *নেই* — RSI যেখানে নিম্নতর উচ্চতা করেছে সেখানে MACD লাইন উচ্চতর উচ্চতা করেছে। তাই দুটি অসিলেটরের একমত হওয়া দাবি করা একটি প্রকৃত ছাঁকনি, আর ঐ ক্ষেত্রে তা চারটির মধ্যে সবচেয়ে ব্যয়বহুল সংকেতটিই সরিয়ে দেয়।

**২. একই অসিলেটরের ভিন্ন বীজায়ন প্রথা ভিন্ন কথা বলে।** অধ্যায় ৩৬ ওয়াইল্ডারের RSI শুরু করার তিনটি সমর্থনযোগ্য উপায় দেখিয়েছে। কার্যকরী উপাত্তে ঐ তিনটি **একই সেশনে ৮৭.৫৫৫৪, ১০০.০০০০ ও ৯৪.৬৬১৬ পাঠ** দেয় — ১২.৪৪৪৬ RSI পয়েন্টের বিস্তার। ওয়াইল্ডারের নিজস্ব পুনরাবৃত্তিতে প্রথম ডাইভারজেন্সটি আছে ($\\Delta RSI = -1.3645$); অভিন্ন ক্লোজে একটি সরল চলমান চোদ্দ-বার RSI-তে **তা মোটেই নেই** ($\\Delta RSI = +2.8169$)। দুজন বিশ্লেষক, একই উপাত্ত, একই নির্দেশকের নাম, বিপরীত সিদ্ধান্ত।

**৩. ওয়ার্ম-আপ বাঁ-নোঙরকে দূষিত করে।** RSI(১৪)-র চতুর্দশ পরিবর্তনের আগে কোনো মানই নেই, আর অধ্যায় ৩৬ দেখিয়েছে তারপরও কয়েক ডজন বার ধরে এটি বীজের প্রভাব বয়ে বেড়ায়। একটি MACD সিগন্যাল লাইনের ধীর EMA-র ছাব্বিশ পর্বের ওপর নিজের নয় পর্ব দরকার। **যে ডাইভারজেন্সের বাঁ পিভট ওয়ার্ম-আপের ভেতরে বসে, তা ডাইভারজেন্স নয়; তা সূচনায়নের কৃত্রিম ফল।** কার্যকরী ধারাবাহিকতায় ২৫তম সেশনে MACD হিস্টোগ্রাম ঠিক ০.০০০০ — মোমেন্টাম ভারসাম্যে ছিল বলে নয়, বরং ঐ বারেই সিগন্যাল লাইনকে MACD লাইনের সমান করে বীজায়িত করা হয়েছে বলে।

### ডিএসই আচ্ছাদন, যা পাটিগণিত বদলে দেয়

চারটি স্থানীয় বাস্তবতা তৃতীয় পর্বের প্রায় যেকোনো কিছুর চেয়ে ডাইভারজেন্সকে বেশি বিকৃত করে, কারণ ডাইভারজেন্স দুটি মোমেন্টাম পাঠের তুলনা আর যা *একটিকে* পক্ষপাতদুষ্ট করে তা তুলনাটিকেই পক্ষপাতদুষ্ট করে।

**সার্কিট সীমা ভুতুড়ে ডাইভারজেন্স বানায়।** একটি সেশন দৈনিক ব্যান্ডে আটকে গেলে লিপিবদ্ধ ক্লোজটি সেই জায়গা যেখানে এক্সচেঞ্জ চলাচল থামিয়েছে, যেখানে চাহিদা সরবরাহের সঙ্গে মিলেছে তা নয়। অসিলেটরকে কেটে ছোট করা পরিবর্তন খাওয়ানো হয়। §৪৪.৪.৭-এর দৃষ্টান্তে একটি চাহিদা-অভিঘাত যে দামে নিষ্পন্ন হতো তার বদলে ব্যান্ডে ছাপে, আর RSI(১৪) পড়ে **৮১.৭৯৪৬-এর বদলে ৭৮.৩৩৯১ — সম্পূর্ণ বিধিপুস্তক দ্বারা তৈরি ৩.৪৫৫৫ পয়েন্টের সরণ।** কার্যকরী কেসে প্রথম ডাইভারজেন্স গঠনকারী ১.৩৬৪৫ পয়েন্টের RSI পতনের সঙ্গে তুলনা করুন: **কৃত্রিম ফলটি সংকেতের ২.৫৩২ গুণ আকারের।**

**ফ্লোর-প্রাইস জানালা ডাইভারজেন্সকে দুর্বল নয়, অসংজ্ঞায়িত করে।** প্রশাসিত মেঝের সময়ে ক্লোজ পুনরাবৃত্ত হয়, পরিবর্তন শূন্য, আর ওয়াইল্ডারের গড় ক্ষতি শূন্যের দিকে ভেঙে পড়ে। RSI সমতল হয় বা আটকে যায়; MACD শূন্য রেখার দিকে ক্ষয় হয়। তুলনা করার মতো কোনো মোমেন্টাম পাঠ নেই, কারণ কোনো মোমেন্টামই ছিল না — একটি বিধি ছিল। অধ্যায় ২৬-এর বর্জন-চিহ্ন বহন করুন ও **কিছু গণনা করার আগে এই বারগুলো মুছে ফেলুন।** একটি ফ্লোর জানালাজুড়ে মাপা ডাইভারজেন্স আসলে মেঝেটিরই পরিমাপ।

**পাতলা তারল্য পিভটগুলোকে গোলমেলে করে।** যে কাউন্টারে দুইশ শেয়ার একটি নতুন উচ্চতা ছাপতে পারে, সেখানে আপনার নিয়মের শনাক্ত করা সুইং হাই একদল ক্রেতা নয়, একটিমাত্র খুচরা অর্ডার হতে পারে। এমন প্রিন্টে নোঙর করা ডাইভারজেন্স শূন্যে নোঙর করা। **পিভটটির ওপরেই একটি ভলিউম শর্ত দাবি করুন**, যেমন অধ্যায় ৪০ বলে।

**নির্ভরযোগ্য কোনো শর্ট সাইড নেই।** এই সীমাবদ্ধতাই সবকিছু নতুন করে সাজায়। যে বাজারে শেয়ার ধার করা যায় না, সেখানে বেয়ারিশ ডাইভারজেন্স শর্ট সংকেত নয়। এটি:

- পজিশনে **যোগ করা থামানোর** কারণ,
- স্টপকে নিকটতম কাঠামোর দিকে **আঁটসাঁট করার** কারণ,
- আর একটি দাম-ট্রিগার নিশ্চিত করার পর, **বেরিয়ে আসার** কারণ।

অনুমোদিত ব্যবহার এটুকুই। যিনি আপনাকে ডিএসই-তে "ডাইভারজেন্স শর্ট করতে" শেখাচ্ছেন তিনি এমন একটি ট্রেড বর্ণনা করছেন যা আপনি বসাতেই পারবেন না। অন্যদিকে **এখানে বুলিশ রেগুলার ডাইভারজেন্সই দুটির মধ্যে বেশি কাজের**, কারণ এটি যে কাজের অনুমতি দেয় — নিশ্চিতকরণের পর কেনা — তা আপনি সত্যিই করতে পারেন।

### এই অধ্যায়ে কেন কোনো স্প্রেডশিট নেই

অধ্যায় ৩০, ৩৫, ৩৬ ও ৩৯ সবই একটি ওয়ার্কবুক দেয়। এটি ইচ্ছাকৃতভাবে দেয় না, আর কারণটি ব্যবহারিক নয়, শিক্ষাগত।

**ডাইভারজেন্স স্কোর করা একটি স্প্রেডশিট ঠিক উল্টো শিক্ষাই দিত: যে সংকেতটিকে একটি সংখ্যায় স্বয়ংক্রিয় করে তারপর বিশ্বাস করা যায়।** ডাইভারজেন্সের ব্যর্থতার ধরন পাটিগণিতীয় নয় — পাটিগণিত তুচ্ছ। ব্যর্থতার ধরন হলো *পিভট নির্বাচন*, আর পিভট নির্বাচন এমন একটি বিচার যা একটি সেল সূত্র প্রকাশ করার বদলে লুকিয়ে ফেলত। এই অধ্যায়ের প্রতিটি সংখ্যা §৪৪.৫-এ হাতে গণনা করা হয়েছে যাতে আপনি প্রতিটি সিদ্ধান্ত নেওয়া দেখতে পান।

**শৃঙ্খলাটি শিটে চাইলে অধ্যায় ৪৫-এর কনফ্লুয়েন্স স্কোরকার্ডে গড়ুন**, যেখানে ডাইভারজেন্স কয়েকটি উপাদানের একটি হিসেবে থাকে ও দাম-কাঠামোকে ভোটে হারাতে পারে না। ওটাই এর সঠিক জায়গা, আর এই কোর্সে ওটাই একমাত্র জায়গা যেখানে একটি ডাইভারজেন্স পাঠকে পজিশনের আকার স্পর্শ করার অনুমতি দেওয়া হয়।`,
    },

    simple: {
      en: `Think about a car overtaking on the highway.

You are in the passenger seat watching the speedometer. The car pulls out and accelerates hard — the needle swings from sixty to a hundred and ten. Then it settles. You are still moving forward, still gaining on the lorry ahead, but the needle drifts back to ninety, then to eighty-five, then to eighty.

**You are still overtaking. You are just overtaking more slowly.**

That is divergence. The road position is the price. The speedometer is the oscillator. Divergence is the moment you notice that the distance is still growing while the needle is falling.

### Why that is worth noticing

It tells you something real: **whatever was pushing this car is pushing less hard than it was.** If you were planning the overtake based on the acceleration you saw at the start, you should replan. That is genuine information.

### Why that is not a reason to slam on the brakes

Here is the part everyone gets wrong. **A car whose needle is falling is not a car that is about to reverse.** It may cruise at eighty for another twenty minutes. It may pick up again. Falling speed is not backwards motion, and no amount of staring at the needle turns it into backwards motion.

People who trade divergence are the passengers who grab the handbrake because the needle dropped by five.

### The dishonest photograph

Now imagine that overtake takes an hour, and during that hour the needle drops four separate times — a hundred and ten to ninety, then a fresh push to ninety-five and back to eighty-five, then to eighty, then finally the car really does slow and pulls back in behind the lorry.

Afterwards someone shows you a photograph of the dashboard taken at the fourth drop, with a caption: *"the speedometer warned us."*

**It did. Four times. Three of them were wrong.** And the photograph of the three wrong ones was never taken.

That is exactly how divergence is taught, and it is the single most important thing in this chapter.

### The other half nobody shows you

While the needle was falling at each new maximum, something else was happening at each dip. Every time the car eased off and then pushed again, it eased off from a *higher* road position than the time before.

Someone can photograph that instead and caption it *"the overtake is intact."* **That is hidden divergence, and it is just as real and points the other way.**

So one hour of driving gives you four warnings that the overtake is tiring and several confirmations that the overtake is fine. Both readings are correct. **Anyone who shows you only one of them is selling you something.**

### What to actually do

You do not grab the handbrake. You do two things:

1. **Sit up.** Stop planning as if the early acceleration is still there. Stop adding risk.
2. **Watch the road, not the dial.** The overtake ends when the car actually falls back behind a marker you already identified — not when the needle dips.

In market terms: the needle is the RSI or the MACD. The marker on the road is a support level from Chapter 30 or a trendline from Chapter 31. **Divergence tells you to move your finger closer to the button. The price structure is what presses it.**

### On the DSE, three extra warnings

**First, the speedometer here is sometimes broken by law.** When a stock hits its daily circuit limit, the price stops moving because the exchange says so, not because buyers stopped. The needle then reads low for a reason that has nothing to do with demand. You can get a picture-perfect divergence out of pure regulation.

**Second, during the floor-price period the needle read zero for months** — not because the car had stopped, but because it was not allowed to move. There is no momentum reading to compare across those months. Delete them.

**Third, and most practically: even if the divergence is real and the reversal comes, you cannot bet on a fall here.** There is no reliable way to short a Bangladeshi share. So a bearish divergence is never a trade you enter. It is a reason to stop buying, to move your stop up, and — once the price confirms — to sell what you already own.

**The bullish version is the one you can actually use**, because "buy after confirmation" is an order the market will accept.`,
      bn: `হাইওয়েতে ওভারটেক করা একটি গাড়ির কথা ভাবুন।

আপনি পাশের আসনে বসে স্পিডোমিটার দেখছেন। গাড়িটি বেরিয়ে এসে জোরে ত্বরিত হয় — কাঁটা ষাট থেকে একশো দশে ওঠে। তারপর থিতু হয়। আপনি এখনো সামনে এগোচ্ছেন, এখনো সামনের লরির দিকে এগিয়ে যাচ্ছেন, কিন্তু কাঁটা নেমে আসে নব্বইয়ে, তারপর পঁচাশিতে, তারপর আশিতে।

**আপনি এখনো ওভারটেক করছেন। কেবল ধীরে করছেন।**

এটাই ডাইভারজেন্স। রাস্তার অবস্থানটি দাম। স্পিডোমিটার অসিলেটর। ডাইভারজেন্স হলো সেই মুহূর্ত যখন আপনি লক্ষ করেন দূরত্ব এখনো বাড়ছে অথচ কাঁটা নামছে।

### এটি লক্ষ করা কেন মূল্যবান

এটি সত্যিকারের কিছু বলে: **যা এই গাড়িটিকে ঠেলছিল, তা আগের চেয়ে কম জোরে ঠেলছে।** শুরুতে দেখা ত্বরণের ভিত্তিতে আপনি ওভারটেকের পরিকল্পনা করে থাকলে পরিকল্পনা নতুন করে করা উচিত। এটি প্রকৃত তথ্য।

### এটি কেন ব্রেক কষার কারণ নয়

এখানেই সবাই ভুল করেন। **যে গাড়ির কাঁটা নামছে সেই গাড়ি পিছু হটতে চলেছে এমন নয়।** এটি আরও কুড়ি মিনিট আশিতে চলতে পারে। আবার গতি বাড়াতেও পারে। কমতে থাকা গতি পিছু হটা নয়, আর কাঁটার দিকে যত তাকিয়েই থাকুন তা পিছু হটায় পরিণত হয় না।

যাঁরা ডাইভারজেন্স ট্রেড করেন তাঁরা সেই যাত্রী যিনি কাঁটা পাঁচ নামায় হ্যান্ডব্রেক টেনে ধরেন।

### অসৎ ছবিটি

এখন ধরুন ওভারটেকটি এক ঘণ্টা লাগে, আর ঐ ঘণ্টায় কাঁটা আলাদা চারবার নামে — একশো দশ থেকে নব্বই, তারপর নতুন ঠেলায় পঁচানব্বই ও ফিরে পঁচাশি, তারপর আশি, তারপর অবশেষে গাড়িটি সত্যিই ধীর হয়ে লরির পেছনে ঢুকে পড়ে।

পরে কেউ আপনাকে চতুর্থ পতনের সময় তোলা ড্যাশবোর্ডের একটি ছবি দেখিয়ে ক্যাপশন দেন: *"স্পিডোমিটার আমাদের সতর্ক করেছিল।"*

**করেছিল। চারবার। তার তিনবার ভুল ছিল।** আর ঐ তিনটি ভুলের ছবি কখনো তোলাই হয়নি।

ডাইভারজেন্স ঠিক এভাবেই শেখানো হয়, আর এই অধ্যায়ের সবচেয়ে গুরুত্বপূর্ণ কথা এটিই।

### অন্য অর্ধেকটি যা কেউ দেখায় না

প্রতিটি নতুন সর্বোচ্চে কাঁটা যখন নামছিল, প্রতিটি ঢালুতে অন্য কিছু ঘটছিল। প্রতিবার গাড়িটি একটু ছেড়ে দিয়ে আবার ঠেলে দিয়েছে, আর প্রতিবার সে ছেড়েছে আগের বারের চেয়ে *উঁচু* রাস্তার অবস্থান থেকে।

কেউ বরং তারই ছবি তুলে ক্যাপশন দিতে পারেন *"ওভারটেক অটুট।"* **এটাই হিডেন ডাইভারজেন্স, আর এটি ঠিক ততটাই বাস্তব এবং উল্টো দিকে নির্দেশ করে।**

তাই এক ঘণ্টার ড্রাইভিং আপনাকে চারটি সতর্কতা দেয় যে ওভারটেক ক্লান্ত হচ্ছে, আর কয়েকটি সমর্থন দেয় যে ওভারটেক ঠিকই আছে। দুটি পাঠই সঠিক। **যিনি আপনাকে এর একটিমাত্র দেখাচ্ছেন, তিনি আপনাকে কিছু একটা বিক্রি করছেন।**

### আসলে কী করবেন

আপনি হ্যান্ডব্রেক টানেন না। আপনি দুটি কাজ করেন:

১. **সোজা হয়ে বসুন।** শুরুর ত্বরণ এখনো আছে ধরে নিয়ে পরিকল্পনা করা বন্ধ করুন। ঝুঁকি যোগ করা বন্ধ করুন।
২. **ডায়াল নয়, রাস্তা দেখুন।** ওভারটেক শেষ হয় যখন গাড়িটি সত্যিই আপনার আগেই চিহ্নিত করা একটি দাগের পেছনে পড়ে যায় — কাঁটা নামলে নয়।

বাজারের ভাষায়: কাঁটা হলো RSI বা MACD। রাস্তার দাগটি হলো অধ্যায় ৩০-এর একটি সাপোর্ট লেভেল বা অধ্যায় ৩১-এর একটি ট্রেন্ডলাইন। **ডাইভারজেন্স বলে আঙুলটি বোতামের কাছে নিন। বোতামটি চাপে দাম-কাঠামো।**

### ডিএসই-তে বাড়তি তিনটি সতর্কতা

**প্রথমত, এখানে স্পিডোমিটার মাঝে মাঝে আইন দ্বারা নষ্ট।** একটি শেয়ার দৈনিক সার্কিট সীমায় পৌঁছালে দাম থামে কারণ এক্সচেঞ্জ তাই বলে, ক্রেতারা থেমেছেন বলে নয়। কাঁটা তখন এমন কারণে নিচু পড়ে যার চাহিদার সঙ্গে কোনো সম্পর্ক নেই। নিছক নিয়ন্ত্রণ থেকেই আপনি ছবির মতো নিখুঁত ডাইভারজেন্স পেতে পারেন।

**দ্বিতীয়ত, ফ্লোর-প্রাইসের সময়ে কাঁটা মাসের পর মাস শূন্য পড়েছে** — গাড়ি থেমে ছিল বলে নয়, বরং তার নড়ার অনুমতি ছিল না বলে। ঐ মাসগুলোজুড়ে তুলনা করার মতো কোনো মোমেন্টাম পাঠ নেই। মুছে ফেলুন।

**তৃতীয়ত, এবং সবচেয়ে ব্যবহারিকভাবে: ডাইভারজেন্স সত্যি হলেও এবং উল্টে যাওয়া এলেও, এখানে আপনি পতনের ওপর বাজি ধরতে পারবেন না।** বাংলাদেশি শেয়ার শর্ট করার নির্ভরযোগ্য উপায় নেই। তাই বেয়ারিশ ডাইভারজেন্স কখনোই আপনার ঢোকার ট্রেড নয়। এটি কেনা বন্ধ করার, স্টপ ওপরে তোলার, আর — দাম নিশ্চিত করার পর — যা আছে তা বিক্রি করার কারণ।

**বুলিশ সংস্করণটিই আপনি সত্যিই কাজে লাগাতে পারেন**, কারণ "নিশ্চিতকরণের পর কিনুন" এমন একটি আদেশ যা বাজার গ্রহণ করবে।`,
    },
    example: {
      en: `### ROSHANPOLY: the divergence that was right on the fourth attempt

ROSHANPOLY is a mid-cap DSE polymer name used illustratively here. **Every figure below is constructed, not historical.** The series is 161 sessions of closing prices, deliberately clean — no gaps, no circuit locks, no floor window — so that the failure we are about to see cannot be blamed on data quality. It is the *signal* that fails, not the data.

Two oscillators, both as built in earlier chapters: **RSI(14) on Wilder's recursion (Ch 36)** and **MACD(12,26,9) on standard EMAs (Ch 35)**. Pivots are located by a mechanical rule fixed in advance: a close is a swing high if no close within four sessions either side is higher.

### The five swing highs

| Pivot | Session | Close | RSI(14) | MACD line |
|---|---|---|---|---|
| **P1** | 26 | 48.85 | 88.9199 | 2.4091 |
| **P2** | 49 | 55.10 | 87.5554 | 2.6270 |
| **P3** | 77 | 60.55 | 84.0068 | 2.1392 |
| **P4** | 108 | 64.30 | 79.2272 | 1.5304 |
| **P5** | 134 | **66.85** | 76.7123 | 1.1655 |

Price rises monotonically across all five. RSI falls monotonically across all five. **This is a textbook chain of bearish regular divergence, and it runs for 108 sessions.**

The high at P5 — 66.85, session 134 — is the top of the advance. Price then falls to 52.40 by session 160.

### Four signals, one turn

Taking adjacent pairs only, which is the disciplined rule:

| Signal | Pair | Bars apart | ΔPrice | ΔRSI | ΔMACD |
|---|---|---|---|---|---|
| **D1** | P1→P2 | 23 | +6.25 (+12.7943%) | **−1.3645** | **+0.2178** |
| **D2** | P2→P3 | 28 | +5.45 (+9.8911%) | −3.5486 | −0.4878 |
| **D3** | P3→P4 | 31 | +3.75 (+6.1932%) | −4.7796 | −0.6087 |
| **D4** | P4→P5 | 26 | +2.55 (+3.9658%) | −2.5149 | −0.3649 |

**Divergence fired four times. Exactly one of them preceded the top.** D1, D2 and D3 were each followed by higher prices — by 11.75, 6.30 and 2.55 taka respectively.

Note the last column on D1. **The MACD line made a *higher* high at P2 (+0.2178) while the RSI made a lower one.** The very first divergence — the most expensive one to act on — exists on one oscillator and not the other. A rule requiring both to agree would have deleted it.

### What it cost to act on each

Assume you are long from 45.20, the swing low at session 33 that launched the second wave.

A pivot cannot be identified on the day it prints — the rule needs four subsequent sessions to confirm no higher close follows. **So the earliest honest execution is four sessions after the pivot**, and that is the price this table uses.

| You acted on | Executed session | Exit | Gain per share | Return on 45.20 | % of the move captured |
|---|---|---|---|---|---|
| **D1** | 53 | 53.35 | 8.15 | **18.03%** | 37.64% |
| **D2** | 81 | 59.16 | 13.96 | 30.88% | 64.48% |
| **D3** | 112 | 63.10 | 17.90 | 39.60% | 82.68% |
| **D4** | 138 | 64.32 | 19.12 | **42.30%** | 88.31% |
| *Perfect exit at the top* | 134 | *66.85* | *21.65* | *47.90%* | *100%* |

Now read that table the way a trading rule reads it. **A rule that says "exit on bearish divergence" exits at the first one.** It does not get to choose D4 in advance. It fires at D1 and the trade is over: **18.03%, and 37.64% of the available move.**

**The 42.30% on the D4 row is not available to any rule. It is available only to hindsight**, which is precisely why the annotated screenshots always feature it.

### What the discipline says instead

The rule this chapter argues for is: **divergence arms the exit; a price-structure break fires it.** The structure here is the prior swing low — the nearest level from Chapter 30 whose loss would break the sequence of higher lows that defines the trend (Chapter 31).

| Signal | Prior swing low | Broken? | When |
|---|---|---|---|
| D1 (P2) | 45.20 (s33) | **No** — never traded below | — |
| D2 (P3) | 51.80 (s57) | **No** — pullback stopped at 57.60 | — |
| D3 (P4) | 57.60 (s86) | Only at session 150, at 57.49 | 42 sessions later, far past the top |
| **D4 (P5)** | **62.00 (s116)** | **Yes** — close 61.48 | **session 143, 9 sessions after the pivot** |

**Three of the four divergences never produced a trigger at all.** The fourth did, nine sessions after the pivot, at 61.48.

| | Divergence alone | Divergence + structure trigger |
|---|---|---|
| Signals acted on | 4 (first one ends it) | 1 |
| Exit | 53.35 | **61.48** |
| Gain on 45.20 | 8.15 | **16.28** |
| Return | 18.03% | **36.02%** |
| Share of the 21.65 move | 37.64% | **75.20%** |

**Waiting for the trigger was worth 8.13 taka a share — 15.24% on the exit price, and it doubled the fraction of the advance captured.**

### The concession, stated plainly

Look again at the D4 row: acting on the fourth divergence alone would have exited at 64.32 and beaten the disciplined exit at 61.48 by **2.84 taka, or 6.28 percentage points of return.**

**That is real and it should be said out loud.** The confirmation requirement is not free. It gives back part of the top by construction, because it waits for price to prove the divergence rather than trusting it.

What you are buying with that 2.84 is the avoidance of D1, D2 and D3. The trade is: give up 6.28 points on the one occasion the signal is right, in exchange for not giving up 18 points on the three occasions it is wrong. **On this data the exchange is overwhelmingly favourable, and it will be on any trend strong enough to produce a chain of divergences — which is the only kind of trend where divergence appears at all.**

### The sixteen signals

Now the honesty problem from §44.1, in numbers.

Nothing forces you to use adjacent pivots. Five swing highs admit ten pairs, and every pair is a defensible divergence claim if you are willing to defend it:

| Pair | Bars | ΔPrice | ΔRSI | Bearish divergence? |
|---|---|---|---|---|
| P1–P2 | 23 | +6.25 | −1.3645 | **Yes** |
| P1–P3 | 51 | +11.70 | −4.9131 | **Yes** |
| P1–P4 | 82 | +15.45 | −9.6927 | **Yes** |
| P1–P5 | 108 | +18.00 | −12.2076 | **Yes** |
| P2–P3 | 28 | +5.45 | −3.5486 | **Yes** |
| P2–P4 | 59 | +9.20 | −8.3282 | **Yes** |
| P2–P5 | 85 | +11.75 | −10.8431 | **Yes** |
| P3–P4 | 31 | +3.75 | −4.7796 | **Yes** |
| P3–P5 | 57 | +6.30 | −7.2945 | **Yes** |
| P4–P5 | 26 | +2.55 | −2.5149 | **Yes** |

**Ten for ten.** A bear can produce ten independent-looking charts from one advance.

Now the four swing lows of the same advance:

| Low | Session | Close | RSI(14) | MACD line |
|---|---|---|---|---|
| L1 | 33 | 45.20 | 58.2049 | 1.7462 |
| L2 | 57 | 51.80 | 57.1418 | 1.6017 |
| L3 | 86 | 57.60 | 53.2593 | 1.0861 |
| L4 | 116 | 62.00 | 51.9386 | 0.8056 |

Higher lows in price, lower lows in RSI. That is the definition of **hidden bullish divergence** — a continuation signal. All six pairs qualify:

| Pair | Bars | ΔPrice | ΔRSI | Hidden bullish? |
|---|---|---|---|---|
| L1–L2 | 24 | +6.60 | −1.0631 | **Yes** |
| L1–L3 | 53 | +12.40 | −4.9456 | **Yes** |
| L1–L4 | 83 | +16.80 | −6.2663 | **Yes** |
| L2–L3 | 29 | +5.80 | −3.8825 | **Yes** |
| L2–L4 | 59 | +10.20 | −5.2032 | **Yes** |
| L3–L4 | 30 | +4.40 | −1.3207 | **Yes** |

**Sixteen technically correct divergence signals from one advance, ten saying sell and six saying hold on.** Not one of them is a misreading. They are all exactly what the definitions say they are.

**This is the strongest argument in the chapter, and it is arithmetic rather than opinion.** If a method can be made to say either thing from the same data by a choice the analyst makes after looking, then the method is not producing the conclusion — the analyst is.

### The magnitude does not rank the truth

A natural defence is: *fine, but the big divergences are the real ones.* Test it. Normalise both slopes per bar — price as percent per session, RSI as points per session — and take the product:

$$\\mathcal{D} = \\hat{s}_P \\times (-\\hat{s}_O) \\times 100$$

| Signal | $\\hat{s}_P$ (%/bar) | $\\hat{s}_O$ (pts/bar) | $\\mathcal{D}$ | Outcome |
|---|---|---|---|---|
| D1 | 0.5563 | −0.0593 | 3.3001 | Wrong |
| **D2** | 0.3533 | −0.1267 | **4.4770** | **Wrong — and the largest** |
| D3 | 0.1998 | −0.1542 | 3.0803 | Wrong |
| **D4** | 0.1525 | −0.0967 | **1.4754** | **Right — and the smallest** |

**The biggest divergence of the four was wrong and the smallest was right.** Magnitude ranked the signals in almost exactly the reverse of their usefulness. **Any rule that sizes a position on how impressive the divergence looks is, on this data, sizing it backwards.**

### The mirror image: no bullish divergence on the way down

From the top at session 134 the stock fell to 52.40 by session 160 — a 26-session decline. **It produced no bullish divergence at all.** RSI fell from 76.7123 straight down to 9.9715 with no higher low anywhere in the sequence.

RSI sat below 30 for **17 consecutive sessions**, from session 144 (28.8627) to the end of the data, while price fell from 60.91 to 52.40, a further **13.97%.**

This is Chapter 36's oversold lesson arriving in a new form. **A trader waiting to buy the fall on bullish divergence got no signal for the entire decline** — and a trader who bought merely because RSI was under 30 lost another fourteen percent doing it. **Divergence does not appear on demand. Frequently the thing you are waiting for simply never occurs.**

### The DSE checks that come before any of this counts

| Check | Why, on ROSHANPOLY |
|---|---|
| Any pivot printed at a circuit limit? | A band-locked close is the exchange's number, not the market's. §44.4.7 shows the band alone shifting RSI by 3.4555 points — **2.532× the 1.3645 that made D1 a divergence.** |
| Any bar inside a floor-price window? | Repeated closes drive Wilder's average loss toward zero; RSI pins and the comparison is undefined. Exclude per Ch 26. |
| Volume at each pivot? | On a thin counter a swing high can be one retail order. Require Ch 40's volume condition on the pivot itself. |
| Left pivot past warm-up? | P1 at session 26 is one session past the MACD line's first defined value; the histogram is exactly **0.0000 at session 25 by seeding, not by market fact.** |
| Can you act on the direction? | **No.** Bearish divergence on the DSE is an exit and a do-not-add. It is never a short. |

That last row is the one that changes the trade. Everything above — four signals, one turn, 8.13 taka of discipline — was computed for a **holder deciding when to sell.** There is no version of this analysis on the DSE that ends in a short position, and any course that gets to one has stopped describing the market you trade in.`,
      bn: `### ROSHANPOLY: যে ডাইভারজেন্স চতুর্থ চেষ্টায় ঠিক হলো

ROSHANPOLY এখানে দৃষ্টান্তমূলকভাবে ব্যবহৃত একটি মাঝারি আকারের ডিএসই পলিমার নাম। **নিচের প্রতিটি সংখ্যা নির্মিত, ঐতিহাসিক নয়।** ধারাবাহিকতাটি ১৬১ সেশনের ক্লোজিং দাম, ইচ্ছাকৃতভাবে পরিচ্ছন্ন — কোনো গ্যাপ নেই, সার্কিট লক নেই, ফ্লোর জানালা নেই — যাতে আমরা যে ব্যর্থতা দেখতে যাচ্ছি তার দোষ উপাত্তের মানের ঘাড়ে চাপানো না যায়। ব্যর্থ হয় *সংকেত*, উপাত্ত নয়।

দুটি অসিলেটর, দুটিই আগের অধ্যায়ে গড়া অনুযায়ী: **ওয়াইল্ডারের পুনরাবৃত্তিতে RSI(১৪) (অধ্যায় ৩৬)** ও **প্রমিত EMA-তে MACD(১২,২৬,৯) (অধ্যায় ৩৫)**। পিভট শনাক্ত হয় আগেই স্থির করা একটি যান্ত্রিক নিয়মে: একটি ক্লোজ সুইং হাই যদি দুই পাশের চার সেশনের ভেতর কোনো ক্লোজ তার চেয়ে উঁচু না হয়।

### পাঁচটি সুইং হাই

| পিভট | সেশন | ক্লোজ | RSI(১৪) | MACD লাইন |
|---|---|---|---|---|
| **P1** | ২৬ | ৪৮.৮৫ | ৮৮.৯১৯৯ | ২.৪০৯১ |
| **P2** | ৪৯ | ৫৫.১০ | ৮৭.৫৫৫৪ | ২.৬২৭০ |
| **P3** | ৭৭ | ৬০.৫৫ | ৮৪.০০৬৮ | ২.১৩৯২ |
| **P4** | ১০৮ | ৬৪.৩০ | ৭৯.২২৭২ | ১.৫৩০৪ |
| **P5** | ১৩৪ | **৬৬.৮৫** | ৭৬.৭১২৩ | ১.১৬৫৫ |

পাঁচটিজুড়েই দাম একঘেয়েভাবে ওঠে। পাঁচটিজুড়েই RSI একঘেয়েভাবে নামে। **এটি বেয়ারিশ রেগুলার ডাইভারজেন্সের পাঠ্যপুস্তকীয় শিকল, আর এটি ১০৮ সেশন ধরে চলে।**

P5-এর উচ্চতা — ৬৬.৮৫, সেশন ১৩৪ — অগ্রগমনের শীর্ষ। এরপর দাম সেশন ১৬০ নাগাদ ৫২.৪০-এ নেমে যায়।

### চারটি সংকেত, একটি মোড়

কেবল সন্নিহিত জোড়া নিয়ে, যা শৃঙ্খলাবদ্ধ নিয়ম:

| সংকেত | জোড়া | কত বার দূরে | Δদাম | ΔRSI | ΔMACD |
|---|---|---|---|---|---|
| **D1** | P1→P2 | ২৩ | +৬.২৫ (+১২.৭৯৪৩%) | **−১.৩৬৪৫** | **+০.২১৭৮** |
| **D2** | P2→P3 | ২৮ | +৫.৪৫ (+৯.৮৯১১%) | −৩.৫৪৮৬ | −০.৪৮৭৮ |
| **D3** | P3→P4 | ৩১ | +৩.৭৫ (+৬.১৯৩২%) | −৪.৭৭৯৬ | −০.৬০৮৭ |
| **D4** | P4→P5 | ২৬ | +২.৫৫ (+৩.৯৬৫৮%) | −২.৫১৪৯ | −০.৩৬৪৯ |

**ডাইভারজেন্স বেজেছে চারবার। ঠিক একটি শীর্ষের আগে এসেছে।** D1, D2 ও D3-এর প্রতিটির পরেই উঁচু দাম এসেছে — যথাক্রমে ১১.৭৫, ৬.৩০ ও ২.৫৫ টাকা।

D1-এর শেষ কলামটি লক্ষ করুন। **RSI যেখানে নিম্নতর উচ্চতা করেছে সেখানে MACD লাইন P2-তে *উচ্চতর* উচ্চতা করেছে (+০.২১৭৮)।** সবচেয়ে প্রথম ডাইভারজেন্সটি — যার ওপর কাজ করা সবচেয়ে ব্যয়বহুল — এক অসিলেটরে আছে ও অন্যটিতে নেই। দুটিরই একমত হওয়া দাবি করা নিয়ম একে মুছে দিত।

### প্রতিটির ওপর কাজ করার খরচ কত ছিল

ধরুন আপনি ৪৫.২০ থেকে লং, সেশন ৩৩-এর সেই সুইং লো যা দ্বিতীয় ঢেউ শুরু করেছিল।

যেদিন পিভট ছাপে সেদিন তা শনাক্ত করা যায় না — নিয়মের দরকার পরের চারটি সেশন, যাতে নিশ্চিত হয় উঁচুতর কোনো ক্লোজ আসে না। **তাই সবচেয়ে আগের সৎ নির্বাহ পিভটের চার সেশন পরে**, আর এই টেবিল সেই দামই ব্যবহার করে।

| আপনি কাজ করলেন | নির্বাহ সেশন | প্রস্থান | শেয়ারপ্রতি লাভ | ৪৫.২০-তে রিটার্ন | চলাচলের কত অংশ ধরা |
|---|---|---|---|---|---|
| **D1** | ৫৩ | ৫৩.৩৫ | ৮.১৫ | **১৮.০৩%** | ৩৭.৬৪% |
| **D2** | ৮১ | ৫৯.১৬ | ১৩.৯৬ | ৩০.৮৮% | ৬৪.৪৮% |
| **D3** | ১১২ | ৬৩.১০ | ১৭.৯০ | ৩৯.৬০% | ৮২.৬৮% |
| **D4** | ১৩৮ | ৬৪.৩২ | ১৯.১২ | **৪২.৩০%** | ৮৮.৩১% |
| *শীর্ষে নিখুঁত প্রস্থান* | ১৩৪ | *৬৬.৮৫* | *২১.৬৫* | *৪৭.৯০%* | *১০০%* |

এখন টেবিলটি একটি ট্রেডিং নিয়ম যেভাবে পড়ে সেভাবে পড়ুন। **"বেয়ারিশ ডাইভারজেন্সে বেরিয়ে আসুন" নিয়মটি প্রথমটিতেই বেরিয়ে আসে।** এটি আগে থেকে D4 বেছে নিতে পারে না। এটি D1-এ বাজে আর ট্রেড শেষ: **১৮.০৩%, আর প্রাপ্য চলাচলের ৩৭.৬৪%।**

**D4 সারির ৪২.৩০% কোনো নিয়মের কাছে প্রাপ্য নয়। তা কেবল পশ্চাদ্দৃষ্টির কাছে প্রাপ্য**, আর ঠিক এই কারণেই চিহ্নিত করা স্ক্রিনশটে সবসময় সেটিই থাকে।

### শৃঙ্খলা বদলে কী বলে

এই অধ্যায় যে নিয়মের পক্ষে যুক্তি দেয়: **ডাইভারজেন্স প্রস্থানের অস্ত্র তুলে দেয়; একটি দাম-কাঠামো ভাঙন তা ছোড়ে।** এখানে কাঠামোটি আগের সুইং লো — অধ্যায় ৩০-এর নিকটতম লেভেল যার পতন উচ্চতর তলের সেই ক্রম ভাঙবে যা ট্রেন্ডকে সংজ্ঞায়িত করে (অধ্যায় ৩১)।

| সংকেত | আগের সুইং লো | ভেঙেছে? | কখন |
|---|---|---|---|
| D1 (P2) | ৪৫.২০ (স৩৩) | **না** — কখনো নিচে লেনদেন হয়নি | — |
| D2 (P3) | ৫১.৮০ (স৫৭) | **না** — পুলব্যাক ৫৭.৬০-এ থেমেছে | — |
| D3 (P4) | ৫৭.৬০ (স৮৬) | কেবল সেশন ১৫০-এ, ৫৭.৪৯-এ | ৪২ সেশন পরে, শীর্ষের অনেক পরে |
| **D4 (P5)** | **৬২.০০ (স১১৬)** | **হ্যাঁ** — ক্লোজ ৬১.৪৮ | **সেশন ১৪৩, পিভটের ৯ সেশন পরে** |

**চারটির তিনটি ডাইভারজেন্স কোনো ট্রিগারই তৈরি করেনি।** চতুর্থটি করেছে, পিভটের নয় সেশন পরে, ৬১.৪৮-এ।

| | কেবল ডাইভারজেন্স | ডাইভারজেন্স + কাঠামো ট্রিগার |
|---|---|---|
| যতগুলোতে কাজ করা হলো | ৪ (প্রথমটিই শেষ করে) | ১ |
| প্রস্থান | ৫৩.৩৫ | **৬১.৪৮** |
| ৪৫.২০-তে লাভ | ৮.১৫ | **১৬.২৮** |
| রিটার্ন | ১৮.০৩% | **৩৬.০২%** |
| ২১.৬৫ চলাচলের অংশ | ৩৭.৬৪% | **৭৫.২০%** |

**ট্রিগারের জন্য অপেক্ষার মূল্য শেয়ারপ্রতি ৮.১৩ টাকা — প্রস্থান দামের ১৫.২৪%, আর তা ধরা অগ্রগমনের ভগ্নাংশ দ্বিগুণ করেছে।**

### স্বীকারোক্তি, স্পষ্ট ভাষায়

D4 সারিটি আবার দেখুন: কেবল চতুর্থ ডাইভারজেন্সে কাজ করলে প্রস্থান হতো ৬৪.৩২-এ এবং তা ৬১.৪৮-এর শৃঙ্খলাবদ্ধ প্রস্থানকে **২.৮৪ টাকা, অর্থাৎ রিটার্নের ৬.২৮ শতাংশ-বিন্দুতে** হারাত।

**এটি বাস্তব এবং এটি উচ্চস্বরে বলা উচিত।** নিশ্চিতকরণের শর্ত বিনামূল্যে নয়। এটি গঠনগতভাবেই শীর্ষের একটি অংশ ফিরিয়ে দেয়, কারণ এটি ডাইভারজেন্সকে বিশ্বাস করার বদলে দামের প্রমাণের অপেক্ষা করে।

ঐ ২.৮৪ দিয়ে আপনি যা কিনছেন তা হলো D1, D2 ও D3 এড়ানো। বিনিময়টি এই: সংকেত যে একবার ঠিক সেই একবারে ৬.২৮ পয়েন্ট ছেড়ে দিন, বিনিময়ে যে তিনবার ভুল সেই তিনবারে ১৮ পয়েন্ট না ছাড়ার জন্য। **এই উপাত্তে বিনিময়টি অপ্রতিরোধ্যভাবে অনুকূল, আর ডাইভারজেন্সের শিকল তৈরি করার মতো যথেষ্ট শক্তিশালী যেকোনো ট্রেন্ডেই তা থাকবে — আর কেবল ঐ ধরনের ট্রেন্ডেই ডাইভারজেন্স আদৌ দেখা দেয়।**

### ষোলোটি সংকেত

এখন §৪৪.১-এর সততার সমস্যাটি, সংখ্যায়।

সন্নিহিত পিভট ব্যবহারে আপনাকে কেউ বাধ্য করছে না। পাঁচটি সুইং হাই দশটি জোড়া দেয়, আর আপনি সমর্থন করতে রাজি থাকলে প্রতিটি জোড়াই একটি সমর্থনযোগ্য ডাইভারজেন্স-দাবি:

| জোড়া | বার | Δদাম | ΔRSI | বেয়ারিশ ডাইভারজেন্স? |
|---|---|---|---|---|
| P1–P2 | ২৩ | +৬.২৫ | −১.৩৬৪৫ | **হ্যাঁ** |
| P1–P3 | ৫১ | +১১.৭০ | −৪.৯১৩১ | **হ্যাঁ** |
| P1–P4 | ৮২ | +১৫.৪৫ | −৯.৬৯২৭ | **হ্যাঁ** |
| P1–P5 | ১০৮ | +১৮.০০ | −১২.২০৭৬ | **হ্যাঁ** |
| P2–P3 | ২৮ | +৫.৪৫ | −৩.৫৪৮৬ | **হ্যাঁ** |
| P2–P4 | ৫৯ | +৯.২০ | −৮.৩২৮২ | **হ্যাঁ** |
| P2–P5 | ৮৫ | +১১.৭৫ | −১০.৮৪৩১ | **হ্যাঁ** |
| P3–P4 | ৩১ | +৩.৭৫ | −৪.৭৭৯৬ | **হ্যাঁ** |
| P3–P5 | ৫৭ | +৬.৩০ | −৭.২৯৪৫ | **হ্যাঁ** |
| P4–P5 | ২৬ | +২.৫৫ | −২.৫১৪৯ | **হ্যাঁ** |

**দশে দশ।** একজন বেয়ার একটি অগ্রগমন থেকে দশটি স্বতন্ত্র-দেখতে চার্ট বানাতে পারেন।

এবার একই অগ্রগমনের চারটি সুইং লো:

| লো | সেশন | ক্লোজ | RSI(১৪) | MACD লাইন |
|---|---|---|---|---|
| L1 | ৩৩ | ৪৫.২০ | ৫৮.২০৪৯ | ১.৭৪৬২ |
| L2 | ৫৭ | ৫১.৮০ | ৫৭.১৪১৮ | ১.৬০১৭ |
| L3 | ৮৬ | ৫৭.৬০ | ৫৩.২৫৯৩ | ১.০৮৬১ |
| L4 | ১১৬ | ৬২.০০ | ৫১.৯৩৮৬ | ০.৮০৫৬ |

দামে উচ্চতর তল, RSI-তে নিম্নতর তল। এটিই **হিডেন বুলিশ ডাইভারজেন্সের** সংজ্ঞা — একটি ধারাবাহিকতার সংকেত। ছয়টি জোড়ার সবগুলোই যোগ্য:

| জোড়া | বার | Δদাম | ΔRSI | হিডেন বুলিশ? |
|---|---|---|---|---|
| L1–L2 | ২৪ | +৬.৬০ | −১.০৬৩১ | **হ্যাঁ** |
| L1–L3 | ৫৩ | +১২.৪০ | −৪.৯৪৫৬ | **হ্যাঁ** |
| L1–L4 | ৮৩ | +১৬.৮০ | −৬.২৬৬৩ | **হ্যাঁ** |
| L2–L3 | ২৯ | +৫.৮০ | −৩.৮৮২৫ | **হ্যাঁ** |
| L2–L4 | ৫৯ | +১০.২০ | −৫.২০৩২ | **হ্যাঁ** |
| L3–L4 | ৩০ | +৪.৪০ | −১.৩২০৭ | **হ্যাঁ** |

**একটি অগ্রগমন থেকে ষোলোটি কারিগরিভাবে সঠিক ডাইভারজেন্স সংকেত, দশটি বলছে বিক্রি করুন আর ছয়টি বলছে ধরে রাখুন।** এর একটিও ভুল পাঠ নয়। সংজ্ঞা যা বলে সেগুলো ঠিক তাই।

**এটিই অধ্যায়ের সবচেয়ে শক্ত যুক্তি, আর এটি মতামত নয়, পাটিগণিত।** একটি পদ্ধতিকে যদি একই উপাত্ত থেকে দেখার পরে বিশ্লেষকের করা একটি পছন্দের মাধ্যমে যেকোনো একটি কথা বলানো যায়, তবে সিদ্ধান্তটি পদ্ধতি তৈরি করছে না — বিশ্লেষক করছেন।

### মাত্রা সত্যের ক্রম নির্ধারণ করে না

স্বাভাবিক প্রতিরক্ষা: *ঠিক আছে, কিন্তু বড় ডাইভারজেন্সগুলোই আসল।* পরীক্ষা করুন। দুটি ঢালকেই প্রতি বারে প্রমিত করুন — দাম প্রতি সেশনে শতাংশে, RSI প্রতি সেশনে পয়েন্টে — আর গুণফল নিন:

$$\\mathcal{D} = \\hat{s}_P \\times (-\\hat{s}_O) \\times 100$$

| সংকেত | $\\hat{s}_P$ (%/বার) | $\\hat{s}_O$ (পয়েন্ট/বার) | $\\mathcal{D}$ | ফল |
|---|---|---|---|---|
| D1 | ০.৫৫৬৩ | −০.০৫৯৩ | ৩.৩০০১ | ভুল |
| **D2** | ০.৩৫৩৩ | −০.১২৬৭ | **৪.৪৭৭০** | **ভুল — এবং সবচেয়ে বড়** |
| D3 | ০.১৯৯৮ | −০.১৫৪২ | ৩.০৮০৩ | ভুল |
| **D4** | ০.১৫২৫ | −০.০৯৬৭ | **১.৪৭৫৪** | **ঠিক — এবং সবচেয়ে ছোট** |

**চারটির মধ্যে সবচেয়ে বড় ডাইভারজেন্সটি ভুল ছিল আর সবচেয়ে ছোটটি ঠিক ছিল।** মাত্রা সংকেতগুলোকে তাদের উপযোগিতার প্রায় হুবহু বিপরীত ক্রমে সাজিয়েছে। **ডাইভারজেন্স কত চিত্তাকর্ষক দেখাচ্ছে তার ভিত্তিতে যে নিয়ম পজিশনের আকার ঠিক করে, তা এই উপাত্তে আকারটি উল্টো করে ঠিক করছে।**

### দর্পণ-প্রতিবিম্ব: নামার পথে কোনো বুলিশ ডাইভারজেন্স নেই

সেশন ১৩৪-এর শীর্ষ থেকে শেয়ারটি সেশন ১৬০ নাগাদ ৫২.৪০-এ নেমেছে — ২৬ সেশনের পতন। **এটি কোনো বুলিশ ডাইভারজেন্সই তৈরি করেনি।** RSI ৭৬.৭১২৩ থেকে সোজা ৯.৯৭১৫-এ নেমেছে, ক্রমের কোথাও কোনো উচ্চতর তল ছাড়াই।

RSI **টানা ১৭ সেশন** ৩০-এর নিচে বসে ছিল, সেশন ১৪৪ (২৮.৮৬২৭) থেকে উপাত্তের শেষ পর্যন্ত, আর এই সময়ে দাম ৬০.৯১ থেকে ৫২.৪০-এ নেমেছে, আরও **১৩.৯৭%।**

এটি অধ্যায় ৩৬-এর ওভারসোল্ড শিক্ষা নতুন রূপে আসছে। **যে ট্রেডার বুলিশ ডাইভারজেন্সে পতন কিনতে অপেক্ষা করছিলেন তিনি পুরো পতনে কোনো সংকেতই পাননি** — আর যিনি কেবল RSI ৩০-এর নিচে বলে কিনেছেন তিনি তা করে আরও চোদ্দ শতাংশ হারিয়েছেন। **ডাইভারজেন্স চাহিদামতো হাজির হয় না। প্রায়ই আপনি যার অপেক্ষায় আছেন তা কেবল কখনো ঘটেই না।**

### যে ডিএসই যাচাইগুলো এসবের আগে আসে

| যাচাই | ROSHANPOLY-তে কেন |
|---|---|
| কোনো পিভট কি সার্কিট সীমায় ছাপা? | ব্যান্ড-আটকা ক্লোজ এক্সচেঞ্জের সংখ্যা, বাজারের নয়। §৪৪.৪.৭ দেখায় কেবল ব্যান্ডই RSI ৩.৪৫৫৫ পয়েন্ট সরায় — **যা D1-কে ডাইভারজেন্স বানানো ১.৩৬৪৫-এর ২.৫৩২×।** |
| কোনো বার কি ফ্লোর-প্রাইস জানালার ভেতরে? | পুনরাবৃত্ত ক্লোজ ওয়াইল্ডারের গড় ক্ষতি শূন্যের দিকে নেয়; RSI আটকে যায় ও তুলনা অসংজ্ঞায়িত হয়। অধ্যায় ২৬ অনুযায়ী বাদ দিন। |
| প্রতিটি পিভটে ভলিউম? | পাতলা কাউন্টারে একটি সুইং হাই একটিমাত্র খুচরা অর্ডার হতে পারে। পিভটটির ওপরেই অধ্যায় ৪০-এর ভলিউম শর্ত দাবি করুন। |
| বাঁ পিভট কি ওয়ার্ম-আপ পেরিয়ে? | সেশন ২৬-এর P1 MACD লাইনের প্রথম সংজ্ঞায়িত মানের এক সেশন পরে; হিস্টোগ্রাম **সেশন ২৫-এ ঠিক ০.০০০০, বীজায়নের কারণে, বাজারের কারণে নয়।** |
| দিকটিতে কি আপনি কাজ করতে পারেন? | **না।** ডিএসই-তে বেয়ারিশ ডাইভারজেন্স একটি প্রস্থান ও একটি যোগ-করবেন-না। এটি কখনো শর্ট নয়। |

শেষ সারিটিই ট্রেড বদলে দেয়। ওপরের সবকিছু — চারটি সংকেত, একটি মোড়, ৮.১৩ টাকার শৃঙ্খলা — গণনা করা হয়েছে **কখন বিক্রি করবেন তা ঠিক করা একজন হোল্ডারের জন্য।** ডিএসই-তে এই বিশ্লেষণের এমন কোনো সংস্করণ নেই যা একটি শর্ট পজিশনে শেষ হয়, আর যে কোর্স সেখানে পৌঁছায় তা আপনার ট্রেড করা বাজারটির বর্ণনা দেওয়া বন্ধ করে দিয়েছে।`,
    },

    formula: {
      en: `### 1. The primitive: a paired swing

Divergence is never defined on a series. **It is defined on two points selected from a series**, and everything that follows depends on the selection rule.

Let $\\{P_t\\}$ be closes and $\\{O_t\\}$ an oscillator computed from them — $RSI_{14}$ from Chapter 36, the MACD line from Chapter 35, $\\%K$ from Chapter 37. Fix a **pivot half-window** $k$ and define:

$$t \\in \\mathcal{H}_k \\iff P_t \\ge P_j \\;\\; \\forall\\, j \\in [t-k,\\, t+k], \\qquad t \\in \\mathcal{L}_k \\iff P_t \\le P_j \\;\\; \\forall\\, j \\in [t-k,\\, t+k]$$

$\\mathcal{H}_k$ is the set of swing highs, $\\mathcal{L}_k$ the swing lows. **Note immediately that $t \\in \\mathcal{H}_k$ cannot be evaluated until session $t+k$.** A pivot is confirmable only $k$ sessions after it prints, and every execution price in this chapter respects that lag with $k = 4$.

### 2. Regular divergence as a sign condition

Take $t_1 < t_2$, both in $\\mathcal{H}_k$. **Bearish regular divergence:**

$$P_{t_2} > P_{t_1} \\;\\land\\; O_{t_2} < O_{t_1}$$

Take $t_1 < t_2$, both in $\\mathcal{L}_k$. **Bullish regular divergence:**

$$P_{t_2} < P_{t_1} \\;\\land\\; O_{t_2} > O_{t_1}$$

Compactly, with $\\Delta P = P_{t_2}-P_{t_1}$ and $\\Delta O = O_{t_2}-O_{t_1}$:

$$\\text{Regular divergence} \\iff \\operatorname{sgn}(\\Delta P) \\cdot \\operatorname{sgn}(\\Delta O) = -1 \\;\\; \\text{at same-type pivots}$$

**The sign product is the entire content of the classical definition.** It uses no magnitude, no time, no volume, and no context. That poverty is why it fires so often.

### 3. Hidden divergence — the same sign condition at the other extreme

**Bearish hidden:** $t_1,t_2 \\in \\mathcal{H}_k$ with $P_{t_2} < P_{t_1} \\land O_{t_2} > O_{t_1}$.

**Bullish hidden:** $t_1,t_2 \\in \\mathcal{L}_k$ with $P_{t_2} > P_{t_1} \\land O_{t_2} < O_{t_1}$.

The sign product is $-1$ here too. **The two families are distinguished not by the arithmetic but by which extreme you measured at**, and therefore by an assumption about the prevailing trend that the formula itself does not contain.

$$\\text{Family} = \\begin{cases} \\text{Regular} & \\text{pivot type agrees with trend direction} \\\\ \\text{Hidden} & \\text{pivot type opposes trend direction} \\end{cases}$$

**Read that carefully. You must already know the trend to know which kind of divergence you are looking at.** The signal does not tell you the trend; it presupposes it. Any claim that divergence identifies a reversal independently is therefore circular, and this is the cleanest formal statement of why the same advance yields ten bearish and six hidden bullish readings in §44.3.

### 4. The pivot-selection problem, stated formally

This is the central honesty problem of the chapter and it deserves an equation rather than a caveat.

Given $n$ same-type pivots in a window, the number of candidate divergence claims is:

$$N = \\binom{n}{2} = \\frac{n(n-1)}{2}$$

For $n=5$: $N = 10$. For $n = 8$: $N = 28$. **The supply of divergence claims grows quadratically in the number of pivots, while the number of actual turning points does not grow at all.**

Worse, $n$ itself is a function of your window choice:

$$n = |\\mathcal{H}_k|, \\qquad \\frac{\\partial n}{\\partial k} \\le 0$$

Shrink $k$ and pivots multiply; enlarge it and they vanish. **An analyst free to choose $k$ after seeing the chart controls $N$, and therefore controls the conclusion.**

Three constraints make the procedure honest, and none of them is optional:

**(a) Fix $k$ before you look.** $k=4$ or $k=5$ on daily DSE data is defensible. Whatever you pick, it applies to every name in the screen.

**(b) Use adjacent pivots only.** Restrict to $t_2 = $ the pivot immediately following $t_1$ in $\\mathcal{H}_k$. This cuts $N$ from $\\binom{n}{2}$ to $n-1$: **from ten claims to four in the worked case.** A non-adjacent pair skips over a pivot that contradicts you, and skipping evidence is not analysis.

**(c) Declare the pair before the outcome.** Log $t_1$, $t_2$, $\\Delta P$, $\\Delta O$ and the bar separation at the moment the right-hand pivot confirms. A divergence identified after the reversal is not a signal; it is a caption.

### 5. Minimum separation

$$\\tau = t_2 - t_1 \\ge \\tau_{\\min}, \\qquad \\tau_{\\min} \\approx \\max\\!\\left(10,\\; \\tfrac{N_{\\text{osc}}}{2}\\right)$$

where $N_{\\text{osc}}$ is the oscillator's nominal period. For $RSI_{14}$ this gives $\\tau_{\\min} = 10$; for $MACD(12,26,9)$, thirteen.

**Why a floor at all?** Because $O_{t_1}$ and $O_{t_2}$ must be substantially independent readings. An RSI(14) is, per Chapter 36, an EMA with $\\alpha = 1/14$ and therefore the memory of a 27-period average. Two RSI values three sessions apart **share almost all of their inputs**; their difference is dominated by the two or three bars that entered and left the window, not by any change in participation.

$$\\text{Overlap fraction} \\approx \\max\\!\\left(0,\\; 1 - \\frac{\\tau}{2N_{\\text{osc}} - 1}\\right)$$

At $\\tau = 3$ on RSI(14), overlap is about 0.889 — **the two "independent" momentum readings share 89% of their history.** At $\\tau = 23$, as on signal D1 in §44.3, overlap is 0.148. The four adjacent separations in the worked case are 23, 28, 31 and 26 sessions, all comfortably clear of the floor.

**Most of the divergences posted in trading groups fail this test and nothing else.** They are three-bar squiggles on a five-minute chart being read as statements about participation.

### 6. Slope formalisation and normalised magnitude

The sign condition throws away the size of the disagreement. Recover it by comparing normalised slopes.

$$\\hat{s}_P = \\frac{100}{\\tau}\\cdot\\frac{P_{t_2}-P_{t_1}}{P_{t_1}} \\quad [\\%/\\text{bar}], \\qquad \\hat{s}_O = \\frac{O_{t_2}-O_{t_1}}{\\tau} \\quad [\\text{pts}/\\text{bar}]$$

**Price must be normalised by $P_{t_1}$ and the oscillator must not be.** RSI is already dimensionless and bounded on $[0,100]$; price is in taka and unbounded. Divide price by its own level or you will rank a BDT 900 stock above a BDT 40 one purely for being expensive — the same complaint Chapter 35 makes about raw MACD values across instruments.

$$\\text{Bearish regular} \\iff \\hat{s}_P > 0 \\;\\land\\; \\hat{s}_O < 0$$

$$\\mathcal{D} = \\hat{s}_P \\times (-\\hat{s}_O) \\times 100$$

$\\mathcal{D} > 0$ exactly when the sign condition holds, and it grows with both the steepness of the price advance and the steepness of the momentum decline.

**And now the finding that matters more than the formula.** On the four adjacent signals of §44.3, $\\mathcal{D}$ takes the values 3.3001, 4.4770, 3.0803 and 1.4754. The largest, 4.4770, was wrong. The smallest, 1.4754, was the one that preceded the top. **Magnitude ranked the four signals in almost exactly reverse order of usefulness.**

$$\\textbf{Do not size a position on } \\mathcal{D}.$$

Use it for one purpose only: **as a filter to discard trivial divergences**, e.g. require $\\mathcal{D} \\ge 1$. Ranking above that floor is not supported by anything in this chapter.

### 7. The confirmation trigger — the only part you are allowed to trade

$$\\text{Action} = \\text{Divergence} \\;\\land\\; \\text{Price-structure break} \\;\\land\\; \\text{DSE filters}$$

Divergence **arms**. Structure **fires**. Formally, having observed a bearish regular divergence confirmed at session $t_2 + k$, define the trigger as the first session $t^{*} > t_2$ satisfying **either**:

$$C_{t^{*}} < S_{\\text{prior low}} \\quad \\text{(Ch 30: close below the last swing low / support zone floor)}$$
$$\\text{or} \\qquad C_{t^{*}} < L(t^{*}) \\quad \\text{(Ch 31: close below the rising trendline)}$$

with no trigger permitted before $t_2$, and the arm expiring if none occurs within a stated horizon.

$$\\text{Exit} = \\begin{cases} \\text{at } C_{t^{*}} & \\exists\\, t^{*} \\le t_2 + H \\\\ \\text{no action; re-arm on the next divergence} & \\text{otherwise} \\end{cases}$$

**Set the horizon $H$ in advance.** Twenty to thirty sessions on daily DSE data is reasonable; on the worked case the trigger arrived nine sessions after P5. Without a horizon, an arm from six months ago is still notionally live and you will eventually attribute an unrelated decline to it.

**The stop, if you are managing rather than exiting**, follows Chapter 30's rule unchanged — anchored to the structure, never to your entry:

$$X = S_{\\text{prior low}} - 0.5\\,ATR, \\qquad R{:}R = \\frac{T-E}{E-X}, \\qquad p^{*} = \\frac{1}{1+R{:}R}$$

### 7b. Why the DSE circuit band breaks the comparison

Let $C^{*}_t$ be the price at which supply would have met demand and $C_t$ the printed close. Under a symmetric band $b$:

$$C_t = \\min\\!\\big(\\max(C^{*}_t,\\; (1-b)C_{t-1}),\\; (1+b)C_{t-1}\\big), \\qquad b = 0.10$$

Wilder's inputs are $U_t = \\max(C_t - C_{t-1},0)$ and $D_t = \\max(C_{t-1}-C_t,0)$, so on any locked session the oscillator is fed a **truncated** change and the momentum reading is biased low on rallies and high on declines.

The magnitude is not small. In the constructed demand-shock illustration — sixteen quiet sessions, then true moves of $+14\\%, +12\\%, +6\\%, +3\\%, -1\\%$ — the unconstrained path gives $RSI_{14} = 81.7946$ at the shock session and the band-constrained path gives **78.3391**:

$$\\text{Band-induced RSI bias} = 81.7946 - 78.3391 = \\mathbf{3.4555} \\text{ points}$$

Compare with the divergence D1 of §44.3, whose entire content was $\\Delta RSI = -1.3645$:

$$\\frac{3.4555}{1.3645} = \\mathbf{2.532}$$

**The artefact is two and a half times the size of the signal.** A single circuit-locked session anywhere near either pivot can create a divergence, destroy one, or reverse its sign. **Flag every locked bar and refuse to anchor a pivot on one.**

### 8. Floor-price windows: the oscillator is undefined, not weak

Under an administered floor with $C_t = C_{t-1} = F$ for a run of sessions, $U_t = D_t = 0$ and Wilder's recursion gives

$$\\overline{U}_t = \\tfrac{13}{14}\\overline{U}_{t-1} \\to 0, \\qquad \\overline{D}_t = \\tfrac{13}{14}\\overline{D}_{t-1} \\to 0, \\qquad RS_t = \\frac{\\overline{U}_t}{\\overline{D}_t} \\to \\frac{0}{0}$$

The ratio is preserved in exact arithmetic and **completely dominated by floating-point noise in practice**, because both terms decay geometrically toward zero. MACD, being a difference of EMAs of a constant, decays monotonically to zero regardless of what demand was doing.

**Neither reading is a momentum measurement.** A divergence spanning a floor window is a comparison between a market observation and an administrative one. Carry Chapter 26's exclusion flag, drop the bars, and restart the oscillator's warm-up on the far side.

### 9. Warm-up: the left anchor must be past it

$$t_1 \\ge t_0 + W, \\qquad W_{RSI(14)} \\ge 14 \\text{ (undefined before)},\\;\\; W_{MACD(12,26,9)} \\ge 26 + 9 = 35$$

and in practice more, because both carry seed influence well past the point of first definition. Chapter 36's three defensible RSI seeds produce, on the worked data at session 49, readings of **87.5554 (Wilder), 100.0000 (simple 14-bar) and 94.6616 (standard EMA)** — a spread of **12.4446 points.**

The consequence is decisive:

$$\\Delta RSI(P_1 \\to P_2) = \\begin{cases} -1.3645 & \\text{Wilder} \\;\\Rightarrow\\; \\textbf{divergence} \\\\ +2.8169 & \\text{simple 14} \\;\\Rightarrow\\; \\textbf{no divergence} \\\\ -1.4495 & \\text{standard EMA} \\;\\Rightarrow\\; \\textbf{divergence} \\end{cases}$$

**Same closes, same indicator name, and the signal exists or does not depending on a seeding convention buried in your platform.** Before you argue with anyone about a divergence, establish that you are both computing the same oscillator.

### 10. The complete decision procedure

$$\\textbf{Act} \\iff \\underbrace{\\operatorname{sgn}(\\Delta P)\\operatorname{sgn}(\\Delta O) = -1}_{\\text{sign condition}} \\;\\land\\; \\underbrace{\\tau \\ge \\tau_{\\min}}_{\\text{separation}} \\;\\land\\; \\underbrace{\\text{adjacent pivots, } k \\text{ fixed ex ante}}_{\\text{selection}} \\;\\land\\; \\underbrace{\\mathcal{D} \\ge 1}_{\\text{non-trivial}}$$
$$\\land \\;\\underbrace{\\text{no locked or floor bar at either pivot}}_{\\text{DSE data}} \\;\\land\\; \\underbrace{t_1 > \\text{warm-up}}_{\\text{validity}} \\;\\land\\; \\underbrace{\\text{structure break within } H}_{\\text{trigger}}$$

and even then, on a bearish signal, **the permitted action is to stop adding, tighten the stop, and exit — never to short.**

| Family | Permitted DSE action |
|---|---|
| Bearish regular | Stop adding → tighten stop → exit on trigger |
| Bullish regular | Watchlist → **buy on trigger** (the one entry divergence licenses) |
| Bearish hidden | Do not buy the bounce; treat rallies as exits |
| Bullish hidden | Hold; do not exit an intact trend on a pullback |`,
      bn: `### ১. আদিম উপাদান: একটি জোড়া-বাঁধা সুইং

ডাইভারজেন্স কখনো একটি ধারাবাহিকতার ওপর সংজ্ঞায়িত হয় না। **এটি একটি ধারাবাহিকতা থেকে বাছা দুটি বিন্দুর ওপর সংজ্ঞায়িত**, আর তারপরের সবকিছু নির্ভর করে বাছাইয়ের নিয়মের ওপর।

ধরুন $\\{P_t\\}$ ক্লোজ আর $\\{O_t\\}$ তা থেকে গণিত একটি অসিলেটর — অধ্যায় ৩৬-এর $RSI_{14}$, অধ্যায় ৩৫-এর MACD লাইন, অধ্যায় ৩৭-এর $\\%K$। একটি **পিভট অর্ধ-জানালা** $k$ স্থির করে সংজ্ঞায়িত করুন:

$$t \\in \\mathcal{H}_k \\iff P_t \\ge P_j \\;\\; \\forall\\, j \\in [t-k,\\, t+k], \\qquad t \\in \\mathcal{L}_k \\iff P_t \\le P_j \\;\\; \\forall\\, j \\in [t-k,\\, t+k]$$

$\\mathcal{H}_k$ সুইং হাইয়ের সেট, $\\mathcal{L}_k$ সুইং লো-র। **তৎক্ষণাৎ লক্ষ করুন যে $t \\in \\mathcal{H}_k$ সেশন $t+k$-এর আগে যাচাই করা যায় না।** একটি পিভট ছাপার $k$ সেশন পরেই কেবল নিশ্চিতযোগ্য, আর এই অধ্যায়ের প্রতিটি নির্বাহ দাম $k = 4$ ধরে ঐ বিলম্ব মানে।

### ২. রেগুলার ডাইভারজেন্স একটি চিহ্ন-শর্ত হিসেবে

$t_1 < t_2$ নিন, দুটিই $\\mathcal{H}_k$-তে। **বেয়ারিশ রেগুলার ডাইভারজেন্স:**

$$P_{t_2} > P_{t_1} \\;\\land\\; O_{t_2} < O_{t_1}$$

$t_1 < t_2$ নিন, দুটিই $\\mathcal{L}_k$-তে। **বুলিশ রেগুলার ডাইভারজেন্স:**

$$P_{t_2} < P_{t_1} \\;\\land\\; O_{t_2} > O_{t_1}$$

সংক্ষেপে, $\\Delta P = P_{t_2}-P_{t_1}$ ও $\\Delta O = O_{t_2}-O_{t_1}$ ধরে:

$$\\text{রেগুলার ডাইভারজেন্স} \\iff \\operatorname{sgn}(\\Delta P) \\cdot \\operatorname{sgn}(\\Delta O) = -1 \\;\\; \\text{একই ধরনের পিভটে}$$

**চিহ্নের গুণফলই ধ্রুপদী সংজ্ঞার সম্পূর্ণ বিষয়বস্তু।** এটি কোনো মাত্রা, কোনো সময়, কোনো ভলিউম ও কোনো প্রসঙ্গ ব্যবহার করে না। এই দারিদ্র্যই এর এত ঘন ঘন বাজার কারণ।

### ৩. হিডেন ডাইভারজেন্স — অন্য প্রান্তে একই চিহ্ন-শর্ত

**বেয়ারিশ হিডেন:** $t_1,t_2 \\in \\mathcal{H}_k$ যেখানে $P_{t_2} < P_{t_1} \\land O_{t_2} > O_{t_1}$।

**বুলিশ হিডেন:** $t_1,t_2 \\in \\mathcal{L}_k$ যেখানে $P_{t_2} > P_{t_1} \\land O_{t_2} < O_{t_1}$।

এখানেও চিহ্নের গুণফল $-1$। **দুটি পরিবারকে আলাদা করে পাটিগণিত নয়, বরং আপনি কোন প্রান্তে মেপেছেন তা**, এবং সেই সূত্রে প্রচলিত ট্রেন্ড সম্পর্কে একটি অনুমান, যা সূত্রটির ভেতরে নেই।

$$\\text{পরিবার} = \\begin{cases} \\text{রেগুলার} & \\text{পিভটের ধরন ট্রেন্ডের দিকের সঙ্গে মেলে} \\\\ \\text{হিডেন} & \\text{পিভটের ধরন ট্রেন্ডের দিকের বিরুদ্ধে} \\end{cases}$$

**মন দিয়ে পড়ুন। কোন ধরনের ডাইভারজেন্স দেখছেন তা জানতে আপনাকে ট্রেন্ডটি আগে থেকেই জানতে হবে।** সংকেত আপনাকে ট্রেন্ড বলে না; তা ট্রেন্ডকে অনুমান করে নেয়। তাই ডাইভারজেন্স স্বাধীনভাবে একটি উল্টে যাওয়া শনাক্ত করে — এই দাবি চক্রাকার, আর §৪৪.৩-এ একই অগ্রগমন কেন দশটি বেয়ারিশ ও ছয়টি হিডেন বুলিশ পাঠ দেয় তার এটিই সবচেয়ে পরিচ্ছন্ন আনুষ্ঠানিক বিবৃতি।

### ৪. পিভট-নির্বাচনের সমস্যা, আনুষ্ঠানিকভাবে

এটি অধ্যায়ের কেন্দ্রীয় সততার সমস্যা এবং এটি একটি সতর্কবাণী নয়, একটি সমীকরণ প্রাপ্য।

একটি জানালায় $n$টি একই ধরনের পিভট থাকলে সম্ভাব্য ডাইভারজেন্স-দাবির সংখ্যা:

$$N = \\binom{n}{2} = \\frac{n(n-1)}{2}$$

$n=5$ হলে $N = 10$। $n = 8$ হলে $N = 28$। **ডাইভারজেন্স-দাবির যোগান পিভটের সংখ্যায় বর্গাকারে বাড়ে, অথচ প্রকৃত মোড় ঘোরার সংখ্যা মোটেই বাড়ে না।**

আরও খারাপ, $n$ নিজেই আপনার জানালা-পছন্দের একটি ফাংশন:

$$n = |\\mathcal{H}_k|, \\qquad \\frac{\\partial n}{\\partial k} \\le 0$$

$k$ ছোট করুন, পিভট বাড়ে; বড় করুন, উবে যায়। **চার্ট দেখার পর $k$ বাছার স্বাধীনতা যাঁর, তিনি $N$ নিয়ন্ত্রণ করেন, তাই সিদ্ধান্তটিও নিয়ন্ত্রণ করেন।**

তিনটি শর্ত পদ্ধতিটিকে সৎ করে, আর একটিও ঐচ্ছিক নয়:

**(ক) তাকানোর আগে $k$ স্থির করুন।** ডিএসই দৈনিক উপাত্তে $k=4$ বা $k=5$ সমর্থনযোগ্য। যা বাছবেন তা স্ক্রিনের প্রতিটি নামে প্রযোজ্য।

**(খ) কেবল সন্নিহিত পিভট ব্যবহার করুন।** $t_2 = $ $\\mathcal{H}_k$-তে $t_1$-এর ঠিক পরের পিভট — এই সীমায় থাকুন। এতে $N$ $\\binom{n}{2}$ থেকে $n-1$-এ নামে: **কার্যকরী কেসে দশটি দাবি থেকে চারটিতে।** অ-সন্নিহিত জোড়া এমন একটি পিভট ডিঙিয়ে যায় যা আপনার বিরুদ্ধে কথা বলে, আর প্রমাণ ডিঙানো বিশ্লেষণ নয়।

**(গ) ফলাফলের আগে জোড়াটি ঘোষণা করুন।** ডান পিভট নিশ্চিত হওয়ার মুহূর্তেই $t_1$, $t_2$, $\\Delta P$, $\\Delta O$ ও বার-ব্যবধান লিপিবদ্ধ করুন। উল্টে যাওয়ার পর শনাক্ত করা ডাইভারজেন্স সংকেত নয়; ক্যাপশন।

### ৫. সর্বনিম্ন ব্যবধান

$$\\tau = t_2 - t_1 \\ge \\tau_{\\min}, \\qquad \\tau_{\\min} \\approx \\max\\!\\left(10,\\; \\tfrac{N_{\\text{osc}}}{2}\\right)$$

যেখানে $N_{\\text{osc}}$ অসিলেটরের নামমাত্র পর্ব। $RSI_{14}$-তে তা $\\tau_{\\min} = 10$; $MACD(12,26,9)$-এ তেরো।

**আদৌ একটি মেঝে কেন?** কারণ $O_{t_1}$ ও $O_{t_2}$-কে যথেষ্ট স্বতন্ত্র পাঠ হতে হবে। অধ্যায় ৩৬ অনুযায়ী RSI(১৪) হলো $\\alpha = 1/14$ সহ একটি EMA, তাই তার স্মৃতি ২৭-পর্বের গড়ের। তিন সেশনের ব্যবধানে দুটি RSI মান **তাদের প্রায় সব ইনপুট ভাগ করে**; তাদের পার্থক্যে প্রাধান্য পায় যে দুই-তিনটি বার জানালায় ঢুকেছে ও বেরিয়েছে, অংশগ্রহণের কোনো পরিবর্তন নয়।

$$\\text{আচ্ছাদনের ভগ্নাংশ} \\approx \\max\\!\\left(0,\\; 1 - \\frac{\\tau}{2N_{\\text{osc}} - 1}\\right)$$

RSI(১৪)-তে $\\tau = 3$-এ আচ্ছাদন প্রায় ০.৮৮৯ — **দুটি "স্বতন্ত্র" মোমেন্টাম পাঠ তাদের ইতিহাসের ৮৯% ভাগ করে।** §৪৪.৩-এর D1-এর মতো $\\tau = 23$-এ আচ্ছাদন ০.১৪৮। কার্যকরী কেসের চারটি সন্নিহিত ব্যবধান ২৩, ২৮, ৩১ ও ২৬ সেশন — সবই মেঝে থেকে স্বচ্ছন্দে দূরে।

**ট্রেডিং গ্রুপে দেওয়া বেশিরভাগ ডাইভারজেন্স কেবল এই পরীক্ষাতেই ব্যর্থ হয়, আর কিছুতে নয়।** সেগুলো পাঁচ-মিনিটের চার্টে তিন-বারের আঁকিবুঁকি, যাকে অংশগ্রহণ সম্পর্কে বিবৃতি হিসেবে পড়া হচ্ছে।

### ৬. ঢালের আনুষ্ঠানিকতা ও প্রমিত মাত্রা

চিহ্ন-শর্ত অমিলের আকারটি ফেলে দেয়। প্রমিত ঢাল তুলনা করে তা ফিরে পান।

$$\\hat{s}_P = \\frac{100}{\\tau}\\cdot\\frac{P_{t_2}-P_{t_1}}{P_{t_1}} \\quad [\\%/\\text{বার}], \\qquad \\hat{s}_O = \\frac{O_{t_2}-O_{t_1}}{\\tau} \\quad [\\text{পয়েন্ট}/\\text{বার}]$$

**দামকে $P_{t_1}$ দিয়ে প্রমিত করতে হবে আর অসিলেটরকে করা যাবে না।** RSI আগে থেকেই মাত্রাহীন ও $[0,100]$-এ সীমাবদ্ধ; দাম টাকায় ও অসীম। দামকে তার নিজের স্তর দিয়ে ভাগ করুন, নইলে ৯০০ টাকার শেয়ারকে ৪০ টাকার শেয়ারের ওপরে বসাবেন কেবল দামি হওয়ার জন্য — বিভিন্ন উপকরণজুড়ে কাঁচা MACD মান নিয়ে অধ্যায় ৩৫ ঠিক এই অভিযোগই করে।

$$\\text{বেয়ারিশ রেগুলার} \\iff \\hat{s}_P > 0 \\;\\land\\; \\hat{s}_O < 0$$

$$\\mathcal{D} = \\hat{s}_P \\times (-\\hat{s}_O) \\times 100$$

চিহ্ন-শর্ত টিকলেই ঠিক তখনই $\\mathcal{D} > 0$, আর এটি দামের অগ্রগমনের খাড়াই ও মোমেন্টাম পতনের খাড়াই দুটোর সঙ্গেই বাড়ে।

**আর এখন সূত্রের চেয়ে বেশি গুরুত্বপূর্ণ ফলাফলটি।** §৪৪.৩-এর চারটি সন্নিহিত সংকেতে $\\mathcal{D}$-র মান ৩.৩০০১, ৪.৪৭৭০, ৩.০৮০৩ ও ১.৪৭৫৪। সবচেয়ে বড়টি, ৪.৪৭৭০, ভুল ছিল। সবচেয়ে ছোটটি, ১.৪৭৫৪, শীর্ষের আগে এসেছিল। **মাত্রা চারটি সংকেতকে তাদের উপযোগিতার প্রায় হুবহু বিপরীত ক্রমে সাজিয়েছে।**

$$\\textbf{ } \\mathcal{D} \\textbf{-এর ভিত্তিতে পজিশনের আকার ঠিক করবেন না।}$$

একে কেবল একটি কাজে লাগান: **তুচ্ছ ডাইভারজেন্স ছেঁটে ফেলার ছাঁকনি হিসেবে**, যেমন $\\mathcal{D} \\ge 1$ দাবি করা। ঐ মেঝের ওপরে ক্রম নির্ধারণকে এই অধ্যায়ের কিছুই সমর্থন করে না।

### ৭. নিশ্চিতকরণ ট্রিগার — একমাত্র অংশ যা আপনি ট্রেড করার অনুমতি পান

$$\\text{কাজ} = \\text{ডাইভারজেন্স} \\;\\land\\; \\text{দাম-কাঠামো ভাঙন} \\;\\land\\; \\text{ডিএসই ছাঁকনি}$$

ডাইভারজেন্স **অস্ত্র তোলে**। কাঠামো **ছোড়ে**। আনুষ্ঠানিকভাবে, সেশন $t_2 + k$-এ নিশ্চিত একটি বেয়ারিশ রেগুলার ডাইভারজেন্স দেখার পর, ট্রিগার হলো প্রথম সেশন $t^{*} > t_2$ যা **যেকোনো একটি** পূরণ করে:

$$C_{t^{*}} < S_{\\text{আগের লো}} \\quad \\text{(অধ্যায় ৩০: শেষ সুইং লো / সাপোর্ট জোনের মেঝের নিচে ক্লোজ)}$$
$$\\text{অথবা} \\qquad C_{t^{*}} < L(t^{*}) \\quad \\text{(অধ্যায় ৩১: ঊর্ধ্বমুখী ট্রেন্ডলাইনের নিচে ক্লোজ)}$$

$t_2$-এর আগে কোনো ট্রিগার অনুমোদিত নয়, আর ঘোষিত সময়সীমার মধ্যে কিছু না ঘটলে অস্ত্রটি নেমে যায়।

$$\\text{প্রস্থান} = \\begin{cases} C_{t^{*}}\\text{-এ} & \\exists\\, t^{*} \\le t_2 + H \\\\ \\text{কোনো কাজ নয়; পরের ডাইভারজেন্সে আবার অস্ত্র তুলুন} & \\text{অন্যথায়} \\end{cases}$$

**সময়সীমা $H$ আগেই ঠিক করুন।** ডিএসই দৈনিক উপাত্তে কুড়ি থেকে ত্রিশ সেশন যুক্তিসংগত; কার্যকরী কেসে ট্রিগার এসেছে P5-এর নয় সেশন পরে। সময়সীমা ছাড়া ছয় মাস আগের একটি অস্ত্র নামমাত্র এখনো সচল থাকে, আর আপনি শেষ পর্যন্ত একটি অসম্পর্কিত পতনকে তার কৃতিত্ব দেবেন।

**স্টপ, যদি আপনি বেরিয়ে না গিয়ে পরিচালনা করেন**, অধ্যায় ৩০-এর নিয়ম অপরিবর্তিত মানে — কাঠামোয় নোঙর করা, কখনো আপনার প্রবেশে নয়:

$$X = S_{\\text{আগের লো}} - 0.5\\,ATR, \\qquad R{:}R = \\frac{T-E}{E-X}, \\qquad p^{*} = \\frac{1}{1+R{:}R}$$

### ৭খ. ডিএসই সার্কিট ব্যান্ড কেন তুলনাটি ভেঙে দেয়

ধরুন $C^{*}_t$ সেই দাম যেখানে সরবরাহ চাহিদার সঙ্গে মিলত আর $C_t$ ছাপা ক্লোজ। একটি প্রতিসম ব্যান্ড $b$-তে:

$$C_t = \\min\\!\\big(\\max(C^{*}_t,\\; (1-b)C_{t-1}),\\; (1+b)C_{t-1}\\big), \\qquad b = 0.10$$

ওয়াইল্ডারের ইনপুট $U_t = \\max(C_t - C_{t-1},0)$ ও $D_t = \\max(C_{t-1}-C_t,0)$, তাই যেকোনো আটকা সেশনে অসিলেটরকে **কেটে ছোট করা** পরিবর্তন খাওয়ানো হয়, আর মোমেন্টাম পাঠ র‍্যালিতে নিচু ও পতনে উঁচু দিকে পক্ষপাতদুষ্ট হয়।

মাত্রাটি ছোট নয়। নির্মিত চাহিদা-অভিঘাতের দৃষ্টান্তে — ষোলোটি শান্ত সেশন, তারপর $+14\\%, +12\\%, +6\\%, +3\\%, -1\\%$ প্রকৃত চলাচল — অবাধ পথ অভিঘাতের সেশনে $RSI_{14} = 81.7946$ দেয় আর ব্যান্ড-সীমিত পথ দেয় **৭৮.৩৩৯১**:

$$\\text{ব্যান্ড-প্রসূত RSI পক্ষপাত} = 81.7946 - 78.3391 = \\mathbf{3.4555} \\text{ পয়েন্ট}$$

§৪৪.৩-এর D1 ডাইভারজেন্সের সঙ্গে তুলনা করুন, যার সম্পূর্ণ বিষয়বস্তু ছিল $\\Delta RSI = -1.3645$:

$$\\frac{3.4555}{1.3645} = \\mathbf{2.532}$$

**কৃত্রিম ফলটি সংকেতের আড়াই গুণ আকারের।** যেকোনো পিভটের কাছাকাছি একটিমাত্র সার্কিট-আটকা সেশন একটি ডাইভারজেন্স তৈরি করতে, ধ্বংস করতে বা তার চিহ্ন উল্টে দিতে পারে। **প্রতিটি আটকা বার চিহ্নিত করুন ও কোনোটির ওপর পিভট নোঙর করতে অস্বীকার করুন।**

### ৮. ফ্লোর-প্রাইস জানালা: অসিলেটর দুর্বল নয়, অসংজ্ঞায়িত

একটি প্রশাসিত মেঝেতে টানা কয়েক সেশন $C_t = C_{t-1} = F$ হলে $U_t = D_t = 0$ এবং ওয়াইল্ডারের পুনরাবৃত্তি দেয়

$$\\overline{U}_t = \\tfrac{13}{14}\\overline{U}_{t-1} \\to 0, \\qquad \\overline{D}_t = \\tfrac{13}{14}\\overline{D}_{t-1} \\to 0, \\qquad RS_t = \\frac{\\overline{U}_t}{\\overline{D}_t} \\to \\frac{0}{0}$$

নিখুঁত পাটিগণিতে অনুপাতটি রক্ষিত হয় আর **বাস্তবে ভাসমান-বিন্দু গোলমালে সম্পূর্ণ আচ্ছন্ন হয়**, কারণ দুটি পদই জ্যামিতিকভাবে শূন্যের দিকে ক্ষয় হয়। MACD, একটি ধ্রুবকের EMA-র পার্থক্য হওয়ায়, চাহিদা যাই করুক একঘেয়েভাবে শূন্যে ক্ষয় হয়।

**কোনো পাঠই মোমেন্টামের পরিমাপ নয়।** একটি ফ্লোর জানালা পেরোনো ডাইভারজেন্স একটি বাজার পর্যবেক্ষণ ও একটি প্রশাসনিক পর্যবেক্ষণের মধ্যে তুলনা। অধ্যায় ২৬-এর বর্জন-চিহ্ন বহন করুন, বারগুলো বাদ দিন, আর ওপারে অসিলেটরের ওয়ার্ম-আপ নতুন করে শুরু করুন।

### ৯. ওয়ার্ম-আপ: বাঁ নোঙরকে তা পেরিয়ে থাকতে হবে

$$t_1 \\ge t_0 + W, \\qquad W_{RSI(14)} \\ge 14 \\text{ (আগে অসংজ্ঞায়িত)},\\;\\; W_{MACD(12,26,9)} \\ge 26 + 9 = 35$$

আর বাস্তবে আরও বেশি, কারণ দুটিই প্রথম সংজ্ঞায়িত হওয়ার অনেক পরেও বীজের প্রভাব বহন করে। অধ্যায় ৩৬-এর তিনটি সমর্থনযোগ্য RSI বীজ কার্যকরী উপাত্তে সেশন ৪৯-এ দেয় **৮৭.৫৫৫৪ (ওয়াইল্ডার), ১০০.০০০০ (সরল ১৪-বার) ও ৯৪.৬৬১৬ (প্রমিত EMA)** — **১২.৪৪৪৬ পয়েন্টের** বিস্তার।

পরিণতিটি নির্ণায়ক:

$$\\Delta RSI(P_1 \\to P_2) = \\begin{cases} -1.3645 & \\text{ওয়াইল্ডার} \\;\\Rightarrow\\; \\textbf{ডাইভারজেন্স} \\\\ +2.8169 & \\text{সরল ১৪} \\;\\Rightarrow\\; \\textbf{ডাইভারজেন্স নেই} \\\\ -1.4495 & \\text{প্রমিত EMA} \\;\\Rightarrow\\; \\textbf{ডাইভারজেন্স} \\end{cases}$$

**একই ক্লোজ, একই নির্দেশকের নাম, আর সংকেতটি আছে কি নেই তা নির্ভর করে আপনার প্ল্যাটফর্মে চাপা পড়া একটি বীজায়ন প্রথার ওপর।** কারো সঙ্গে ডাইভারজেন্স নিয়ে তর্কের আগে নিশ্চিত করুন আপনারা দুজন একই অসিলেটর গণনা করছেন।

### ১০. সম্পূর্ণ সিদ্ধান্ত-পদ্ধতি

$$\\textbf{কাজ করুন} \\iff \\underbrace{\\operatorname{sgn}(\\Delta P)\\operatorname{sgn}(\\Delta O) = -1}_{\\text{চিহ্ন-শর্ত}} \\;\\land\\; \\underbrace{\\tau \\ge \\tau_{\\min}}_{\\text{ব্যবধান}} \\;\\land\\; \\underbrace{\\text{সন্নিহিত পিভট, } k \\text{ আগেই স্থির}}_{\\text{নির্বাচন}} \\;\\land\\; \\underbrace{\\mathcal{D} \\ge 1}_{\\text{অতুচ্ছ}}$$
$$\\land \\;\\underbrace{\\text{কোনো পিভটে আটকা বা ফ্লোর বার নেই}}_{\\text{ডিএসই উপাত্ত}} \\;\\land\\; \\underbrace{t_1 > \\text{ওয়ার্ম-আপ}}_{\\text{বৈধতা}} \\;\\land\\; \\underbrace{H\\text{-এর মধ্যে কাঠামো ভাঙন}}_{\\text{ট্রিগার}}$$

আর তারপরও, একটি বেয়ারিশ সংকেতে **অনুমোদিত কাজ হলো যোগ করা থামানো, স্টপ আঁটসাঁট করা ও বেরিয়ে আসা — কখনো শর্ট করা নয়।**

| পরিবার | অনুমোদিত ডিএসই কাজ |
|---|---|
| বেয়ারিশ রেগুলার | যোগ করা বন্ধ → স্টপ আঁটসাঁট → ট্রিগারে প্রস্থান |
| বুলিশ রেগুলার | ওয়াচলিস্ট → **ট্রিগারে কিনুন** (ডাইভারজেন্স যে একমাত্র প্রবেশের অনুমতি দেয়) |
| বেয়ারিশ হিডেন | বাউন্স কিনবেন না; র‍্যালিকে প্রস্থান গণ্য করুন |
| বুলিশ হিডেন | ধরে রাখুন; পুলব্যাকে অটুট ট্রেন্ড থেকে বেরোবেন না |`,
    },
    manual: {
      en: `**Scenario.** ROSHANPOLY from §44.3. 161 sessions of closes. $RSI_{14}$ on Wilder's recursion (Ch 36), $MACD(12,26,9)$ on standard EMAs (Ch 35). A holding bought at 45.20. Nothing below uses information that was not available at the time it is used.

**Step 1 — Fix the pivot rule before you open the chart.**

$$k = 4 \\;\\Rightarrow\\; t \\in \\mathcal{H}_4 \\iff P_t \\ge P_j \\;\\forall\\, j \\in [t-4,\\, t+4]$$

**This is the single most important step and it takes no arithmetic.** Choose $k$ now, in writing, applying to every name you will screen. Choose it after seeing the chart and every number that follows is a preference you have dressed up.

**Step 2 — Apply the rule and list the swing highs.**

| Pivot | Session | Close |
|---|---|---|
| P1 | 26 | 48.85 |
| P2 | 49 | 55.10 |
| P3 | 77 | 60.55 |
| P4 | 108 | 64.30 |
| P5 | 134 | 66.85 |

Five pivots. Monotonically rising. **Confirmation lag: P5 is not knowable until session 138.**

**Step 3 — Apply the same rule to lows, because you will need them twice.**

| Low | Session | Close |
|---|---|---|
| L1 | 33 | 45.20 |
| L2 | 57 | 51.80 |
| L3 | 86 | 57.60 |
| L4 | 116 | 62.00 |

You need them for the hidden-divergence check in Step 20 **and** as the structure levels in Step 14. Most traders compute the highs and never look at the lows, which is exactly how the contradiction stays invisible.

**Step 4 — Read both oscillators at each pivot.**

| Pivot | Close | $RSI_{14}$ | MACD line |
|---|---|---|---|
| P1 | 48.85 | 88.9199 | 2.4091 |
| P2 | 55.10 | 87.5554 | 2.6270 |
| P3 | 60.55 | 84.0068 | 2.1392 |
| P4 | 64.30 | 79.2272 | 1.5304 |
| P5 | 66.85 | 76.7123 | 1.1655 |

**Step 5 — Validate the left anchor against warm-up before you compute a single difference.**

$$W_{RSI(14)} = 14, \\qquad W_{MACD(12,26,9)} = 26 + 9 = 35$$

P1 sits at session 26. **For RSI this is fine — 26 > 14. For MACD it is not: 26 < 35.** The MACD line has one session of existence at P1, and the histogram is exactly 0.0000 at session 25 because that is where the signal line was seeded equal to the MACD line, not because momentum was balanced.

**Conclusion: any MACD-based divergence anchored at P1 is invalid and must be discarded.** Note this now; it changes how you read Step 10.

**Step 6 — Reduce the claim set to adjacent pairs.**

$$N_{\\text{all}} = \\binom{5}{2} = 10 \\qquad \\longrightarrow \\qquad N_{\\text{adjacent}} = 5 - 1 = 4$$

**You have just thrown away six perfectly defensible divergence claims, and that is the point.** The six you discarded skip over a pivot. Every one of them would have been available to you later, when you needed evidence for a view you had already formed.

**Step 7 — Compute the first signal, D1 = P1→P2.**

$$\\Delta P = 55.10 - 48.85 = 6.25, \\qquad \\frac{6.25}{48.85} \\times 100 = 12.7943\\%$$
$$\\Delta O = 87.5554 - 88.9199 = -1.3645$$

**Step 8 — Sign test.**

$$\\operatorname{sgn}(+6.25) \\cdot \\operatorname{sgn}(-1.3645) = (+1)(-1) = -1 \\;\\;\\checkmark$$

Both pivots are swing highs and the trend is up, so this is **bearish regular divergence.**

**Step 9 — Separation test.**

$$\\tau = 49 - 26 = 23 \\;\\ge\\; \\tau_{\\min} = 10 \\;\\;\\checkmark$$
$$\\text{overlap} \\approx 1 - \\frac{23}{2(14)-1} = 1 - \\frac{23}{27} = 0.1481$$

**The two RSI readings share about 15% of their input history**, which is low enough that the difference means something. Had the pivots been three sessions apart the overlap would be $1 - 3/27 = 0.8889$ and the "divergence" would be an artefact of two bars leaving a window.

**Step 10 — Cross-oscillator check, and read the result carefully.**

$$\\Delta MACD = 2.6270 - 2.4091 = +0.2178$$

**Positive. The MACD line made a *higher* high at P2.** On MACD there is no divergence here at all.

Two readings are available and you must choose one before you look, not after:

- If you require **both** oscillators to diverge, **D1 is rejected** — and D1 is the most expensive signal of the four.
- If you accept **either**, D1 stands.

But Step 5 already told you the MACD reading at P1 is inside its warm-up. **So the honest conclusion is not "MACD disagrees"; it is "MACD has no opinion here, because it has not finished initialising."** Record D1 as an RSI-only signal with an unusable second opinion. That is a weaker signal than a two-oscillator agreement, and the record should say so.

**Step 11 — Repeat Steps 7–10 for the remaining three signals.**

| Signal | Pair | $\\tau$ | $\\Delta P$ | $\\Delta P\\%$ | $\\Delta RSI$ | $\\Delta MACD$ | Both agree? |
|---|---|---|---|---|---|---|---|
| D1 | P1→P2 | 23 | +6.25 | +12.7943% | −1.3645 | **+0.2178** | No (MACD in warm-up) |
| D2 | P2→P3 | 28 | +5.45 | +9.8911% | −3.5486 | −0.4878 | **Yes** |
| D3 | P3→P4 | 31 | +3.75 | +6.1932% | −4.7796 | −0.6087 | **Yes** |
| D4 | P4→P5 | 26 | +2.55 | +3.9658% | −2.5149 | −0.3649 | **Yes** |

All four pass the sign test. All four pass separation — 23, 28, 31, 26, every one comfortably above ten.

**Four valid bearish divergences in a single 108-session advance. Read that sentence again before continuing, because it is the whole chapter.**

**Step 12 — Normalise the slopes and compute the magnitude.**

For D1:
$$\\hat{s}_P = \\frac{12.7943}{23} = 0.5563\\;\\%/\\text{bar}, \\qquad \\hat{s}_O = \\frac{-1.3645}{23} = -0.0593\\;\\text{pts}/\\text{bar}$$
$$\\mathcal{D}_1 = 0.5563 \\times 0.0593 \\times 100 = 3.3001$$

For the rest:
$$\\mathcal{D}_2 = \\frac{9.8911}{28}\\times\\frac{3.5486}{28}\\times 100 = 0.3533 \\times 0.1267 \\times 100 = 4.4770$$
$$\\mathcal{D}_3 = \\frac{6.1932}{31}\\times\\frac{4.7796}{31}\\times 100 = 0.1998 \\times 0.1542 \\times 100 = 3.0803$$
$$\\mathcal{D}_4 = \\frac{3.9658}{26}\\times\\frac{2.5149}{26}\\times 100 = 0.1525 \\times 0.0967 \\times 100 = 1.4754$$

**Step 13 — Rank by magnitude, then look at what actually happened.**

| Rank by $\\mathcal{D}$ | Signal | $\\mathcal{D}$ | What followed |
|---|---|---|---|
| 1 | D2 | 4.4770 | Price rose another 6.30 to P4, then 2.55 more |
| 2 | D1 | 3.3001 | Price rose another 11.75 |
| 3 | D3 | 3.0803 | Price rose another 2.55 |
| 4 | **D4** | **1.4754** | **The top** |

**The strongest divergence was wrong and the weakest was right.** If you had sized on $\\mathcal{D}$ you would have put your largest position on D2 and your smallest on the only one that mattered.

Use $\\mathcal{D}$ as a floor — discard anything below 1 as noise — and for nothing else. **All four here clear 1, so on this data the filter does no work at all.** Say that plainly rather than pretending the number earned its place.

**Step 14 — Identify the structure trigger for each signal, using Chapter 30's levels.**

The trigger level is the most recent swing low preceding the right-hand pivot — the level whose loss breaks the higher-low sequence that defines the uptrend (Ch 31).

| Signal | Right pivot | Most recent prior low | Trigger level |
|---|---|---|---|
| D1 | P2 (s49) | L1 (s33) | **45.20** |
| D2 | P3 (s77) | L2 (s57) | **51.80** |
| D3 | P4 (s108) | L3 (s86) | **57.60** |
| D4 | P5 (s134) | L4 (s116) | **62.00** |

**Step 15 — Test each trigger against what price actually did.**

- **D1, level 45.20.** Price never closed below 45.20 again in the entire series. **No trigger.**
- **D2, level 51.80.** The deepest pullback after P3 was to 57.60. **No trigger.**
- **D3, level 57.60.** First close below it was session 150 at 57.49 — **42 sessions after the pivot and 16 sessions past the top.** Useless as a signal even though it eventually "fired".
- **D4, level 62.00.** First close below it was **session 143 at 61.48 — nine sessions after the pivot.** **Trigger.**

**Three of four divergences produced no actionable trigger at all.** The discipline did not merely improve the timing of three bad signals; it deleted them.

**Step 16 — Price the executions honestly, respecting the confirmation lag.**

A pivot at session $t$ is not knowable until $t+k = t+4$. So the earliest a divergence-only trader can act is four sessions after the right-hand pivot:

| Signal | Right pivot | Earliest execution | Close there |
|---|---|---|---|
| D1 | s49 | s53 | **53.35** |
| D2 | s77 | s81 | **59.16** |
| D3 | s108 | s112 | **63.10** |
| D4 | s134 | s138 | **64.32** |

The trigger exit needs no such adjustment — **a close below 62.00 is observable on the close of session 143 itself, at 61.48.** That is a real and under-appreciated advantage of a price trigger over a pivot: **structure confirms same-day; pivots confirm four days late.**

**Step 17 — Compute the outcome of trading divergence alone, from a 45.20 cost basis.**

$$\\text{Gain}_{D1} = 53.35 - 45.20 = 8.15, \\qquad \\frac{8.15}{45.20} = 18.03\\%$$
$$\\text{Gain}_{D2} = 59.16 - 45.20 = 13.96 \\;(30.88\\%), \\qquad \\text{Gain}_{D3} = 63.10 - 45.20 = 17.90 \\;(39.60\\%)$$
$$\\text{Gain}_{D4} = 64.32 - 45.20 = 19.12 \\;(42.30\\%)$$

The full move available was $66.85 - 45.20 = 21.65$.

**Now the critical logical step, and it is where most readers' intuition fails.** A rule that says *exit on bearish divergence* does not get to pick which divergence. **It fires on the first one it sees.**

$$\\text{Divergence-only rule} \\;\\Rightarrow\\; \\text{exit at } 53.35 \\;\\Rightarrow\\; \\mathbf{8.15}, \\;\\mathbf{18.03\\%}, \\; \\frac{8.15}{21.65} = \\mathbf{37.64\\%} \\text{ of the move}$$

**Step 18 — Compute the outcome of the disciplined rule.**

$$\\text{Divergence} + \\text{structure trigger} \\;\\Rightarrow\\; \\text{exit at } 61.48$$
$$\\text{Gain} = 61.48 - 45.20 = 16.28, \\qquad \\frac{16.28}{45.20} = 36.02\\%, \\qquad \\frac{16.28}{21.65} = 75.20\\%$$

$$\\text{Value of the discipline} = 61.48 - 53.35 = \\mathbf{8.13} \\text{ per share} = \\frac{8.13}{53.35} = \\mathbf{15.24\\%}$$

**Twice the return and twice the share of the advance, for the price of waiting for price to agree with the indicator.**

**Step 19 — State the concession, because a rule you only present at its best is propaganda.**

$$64.32 - 61.48 = \\mathbf{2.84} \\text{ per share} = \\frac{2.84}{45.20} = \\mathbf{6.28} \\text{ percentage points of return}$$

**Acting on D4 alone would have beaten the disciplined exit.** The confirmation requirement costs you 2.84 taka on the one occasion the signal is right, because it waits for proof instead of trusting the warning.

The exchange, stated as a decision under uncertainty: **give up 6.28 points when the signal is right, to avoid giving up 18.03-versus-36.02 when it is wrong.** With one correct signal in four, that trade is not close. And there is no version of the world in which you know in advance that the fourth one is the fourth one.

**Step 20 — Now count the hidden divergences, on the identical data.**

| Low | Session | Close | $RSI_{14}$ |
|---|---|---|---|
| L1 | 33 | 45.20 | 58.2049 |
| L2 | 57 | 51.80 | 57.1418 |
| L3 | 86 | 57.60 | 53.2593 |
| L4 | 116 | 62.00 | 51.9386 |

Adjacent pairs:
$$L1 \\to L2: \\;\\Delta P = +6.60,\\; \\Delta RSI = -1.0631 \\;\\Rightarrow\\; \\text{hidden bullish}$$
$$L2 \\to L3: \\;\\Delta P = +5.80,\\; \\Delta RSI = -3.8825 \\;\\Rightarrow\\; \\text{hidden bullish}$$
$$L3 \\to L4: \\;\\Delta P = +4.40,\\; \\Delta RSI = -1.3207 \\;\\Rightarrow\\; \\text{hidden bullish}$$

And across all $\\binom{4}{2} = 6$ pairs, **all six qualify.** Combined with the ten from Step 6's discarded set:

$$10 \\;\\text{bearish regular} \\;+\\; 6 \\;\\text{hidden bullish} \\;=\\; \\mathbf{16} \\;\\text{technically valid divergence signals from one advance}$$

**Ten say sell. Six say hold. Every one of them satisfies its definition exactly.** No arithmetic in this chapter is more important than that line.

**Step 21 — Apply the DSE overlay, which can invalidate everything above.**

Under the ±10% band, a locked session prints the band rather than the clearing price. On the constructed shock illustration of §44.4.7:

$$RSI^{\\text{true}} = 81.7946, \\qquad RSI^{\\text{banded}} = 78.3391, \\qquad \\text{bias} = 3.4555$$

Compare with the entire content of D1:

$$\\frac{3.4555}{1.3645} = 2.532$$

**One circuit-locked session near a pivot produces an RSI shift two and a half times larger than the shift that made D1 a divergence at all.** Before any of Steps 7–19 counts, confirm that neither pivot printed at a limit and that no bar in between sits inside a floor-price window (Ch 26). If either fails, **the divergence is not weak — it is undefined.**

**Step 22 — Convert the finding into the only actions the DSE permits.**

The whole computation above was for **a holder deciding when to sell.** With no reliable stock borrow, the D4 finding licenses exactly three things:

1. **Stop adding** to ROSHANPOLY at P5 (session 134, on confirmation at 138).
2. **Move the stop up** to just below 62.00 — the structure level, per Chapter 30, never a percentage below your fill.
3. **Exit at 61.48** when session 143 closes below it.

$$\\text{Realised} = 16.28 \\text{ per share on a } 45.20 \\text{ basis} = 36.02\\%$$

**What it does not license is a short at 66.85, and no amount of conviction changes that.** The trade does not exist on this exchange. Anyone who shows you a divergence short on a DSE chart is showing you a backtest of an order the market would have rejected.`,
      bn: `**পরিস্থিতি।** §৪৪.৩-এর ROSHANPOLY। ১৬১ সেশনের ক্লোজ। ওয়াইল্ডারের পুনরাবৃত্তিতে $RSI_{14}$ (অধ্যায় ৩৬), প্রমিত EMA-তে $MACD(12,26,9)$ (অধ্যায় ৩৫)। ৪৫.২০-তে কেনা একটি হোল্ডিং। নিচের কিছুই এমন তথ্য ব্যবহার করে না যা ব্যবহারের সময়ে পাওয়া যেত না।

**ধাপ ১ — চার্ট খোলার আগে পিভটের নিয়ম স্থির করুন।**

$$k = 4 \\;\\Rightarrow\\; t \\in \\mathcal{H}_4 \\iff P_t \\ge P_j \\;\\forall\\, j \\in [t-4,\\, t+4]$$

**এটিই সবচেয়ে গুরুত্বপূর্ণ ধাপ এবং এতে কোনো পাটিগণিত নেই।** $k$ এখনই বাছুন, লিখিতভাবে, আপনি যত নাম স্ক্রিন করবেন সবের জন্য। চার্ট দেখার পর বাছলে তারপরের প্রতিটি সংখ্যা আপনার সাজিয়ে তোলা একটি পছন্দ মাত্র।

**ধাপ ২ — নিয়মটি প্রয়োগ করে সুইং হাইগুলো তালিকাভুক্ত করুন।**

| পিভট | সেশন | ক্লোজ |
|---|---|---|
| P1 | ২৬ | ৪৮.৮৫ |
| P2 | ৪৯ | ৫৫.১০ |
| P3 | ৭৭ | ৬০.৫৫ |
| P4 | ১০৮ | ৬৪.৩০ |
| P5 | ১৩৪ | ৬৬.৮৫ |

পাঁচটি পিভট। একঘেয়েভাবে ঊর্ধ্বমুখী। **নিশ্চিতকরণের বিলম্ব: সেশন ১৩৮-এর আগে P5 জানা যায় না।**

**ধাপ ৩ — একই নিয়ম তলগুলোতেও প্রয়োগ করুন, কারণ এগুলো দুবার লাগবে।**

| লো | সেশন | ক্লোজ |
|---|---|---|
| L1 | ৩৩ | ৪৫.২০ |
| L2 | ৫৭ | ৫১.৮০ |
| L3 | ৮৬ | ৫৭.৬০ |
| L4 | ১১৬ | ৬২.০০ |

ধাপ ২০-এর হিডেন-ডাইভারজেন্স যাচাইয়ে **এবং** ধাপ ১৪-এর কাঠামো লেভেল হিসেবে এগুলো লাগবে। বেশিরভাগ ট্রেডার উচ্চতাগুলো গণনা করেন ও তলগুলোর দিকে কখনো তাকান না, আর ঠিক এভাবেই দ্বন্দ্বটি অদৃশ্য থেকে যায়।

**ধাপ ৪ — প্রতিটি পিভটে দুটি অসিলেটরই পড়ুন।**

| পিভট | ক্লোজ | $RSI_{14}$ | MACD লাইন |
|---|---|---|---|
| P1 | ৪৮.৮৫ | ৮৮.৯১৯৯ | ২.৪০৯১ |
| P2 | ৫৫.১০ | ৮৭.৫৫৫৪ | ২.৬২৭০ |
| P3 | ৬০.৫৫ | ৮৪.০০৬৮ | ২.১৩৯২ |
| P4 | ৬৪.৩০ | ৭৯.২২৭২ | ১.৫৩০৪ |
| P5 | ৬৬.৮৫ | ৭৬.৭১২৩ | ১.১৬৫৫ |

**ধাপ ৫ — একটি পার্থক্যও গণনার আগে বাঁ নোঙরকে ওয়ার্ম-আপের বিপরীতে যাচাই করুন।**

$$W_{RSI(14)} = 14, \\qquad W_{MACD(12,26,9)} = 26 + 9 = 35$$

P1 বসে আছে সেশন ২৬-এ। **RSI-র জন্য এটি ঠিক আছে — ২৬ > ১৪। MACD-র জন্য নয়: ২৬ < ৩৫।** P1-এ MACD লাইনের অস্তিত্ব এক সেশনের, আর সেশন ২৫-এ হিস্টোগ্রাম ঠিক ০.০০০০ কারণ সেখানেই সিগন্যাল লাইনকে MACD লাইনের সমান করে বীজায়িত করা হয়েছে, মোমেন্টাম ভারসাম্যে ছিল বলে নয়।

**উপসংহার: P1-এ নোঙর করা যেকোনো MACD-ভিত্তিক ডাইভারজেন্স অবৈধ এবং বাতিল করতে হবে।** এখনই লিখে রাখুন; এটি ধাপ ১০ কীভাবে পড়বেন তা বদলে দেয়।

**ধাপ ৬ — দাবির সেটকে সন্নিহিত জোড়ায় নামিয়ে আনুন।**

$$N_{\\text{সব}} = \\binom{5}{2} = 10 \\qquad \\longrightarrow \\qquad N_{\\text{সন্নিহিত}} = 5 - 1 = 4$$

**আপনি এইমাত্র ছয়টি নিখুঁতভাবে সমর্থনযোগ্য ডাইভারজেন্স-দাবি ফেলে দিলেন, আর এটাই উদ্দেশ্য।** ফেলে দেওয়া ছয়টির প্রত্যেকটি একটি পিভট ডিঙিয়ে যায়। পরে, যখন আপনার আগেই গড়ে ফেলা একটি মতের পক্ষে প্রমাণ দরকার হতো, তখন এদের প্রত্যেকটিই আপনার হাতের কাছে থাকত।

**ধাপ ৭ — প্রথম সংকেত D1 = P1→P2 গণনা করুন।**

$$\\Delta P = 55.10 - 48.85 = 6.25, \\qquad \\frac{6.25}{48.85} \\times 100 = 12.7943\\%$$
$$\\Delta O = 87.5554 - 88.9199 = -1.3645$$

**ধাপ ৮ — চিহ্ন পরীক্ষা।**

$$\\operatorname{sgn}(+6.25) \\cdot \\operatorname{sgn}(-1.3645) = (+1)(-1) = -1 \\;\\;\\checkmark$$

দুটি পিভটই সুইং হাই ও ট্রেন্ড ঊর্ধ্বমুখী, তাই এটি **বেয়ারিশ রেগুলার ডাইভারজেন্স।**

**ধাপ ৯ — ব্যবধান পরীক্ষা।**

$$\\tau = 49 - 26 = 23 \\;\\ge\\; \\tau_{\\min} = 10 \\;\\;\\checkmark$$
$$\\text{আচ্ছাদন} \\approx 1 - \\frac{23}{2(14)-1} = 1 - \\frac{23}{27} = 0.1481$$

**দুটি RSI পাঠ তাদের ইনপুট ইতিহাসের প্রায় ১৫% ভাগ করে**, যা যথেষ্ট কম যাতে পার্থক্যটির অর্থ থাকে। পিভট দুটি তিন সেশনের ব্যবধানে হলে আচ্ছাদন হতো $1 - 3/27 = 0.8889$ আর "ডাইভারজেন্স"টি হতো জানালা থেকে দুটি বার বেরিয়ে যাওয়ার কৃত্রিম ফল।

**ধাপ ১০ — আন্তঃ-অসিলেটর যাচাই, আর ফলটি মন দিয়ে পড়ুন।**

$$\\Delta MACD = 2.6270 - 2.4091 = +0.2178$$

**ধনাত্মক। MACD লাইন P2-তে *উচ্চতর* উচ্চতা করেছে।** MACD-তে এখানে কোনো ডাইভারজেন্সই নেই।

দুটি পাঠ পাওয়া যাচ্ছে, আর আপনাকে তাকানোর আগেই একটি বাছতে হবে, পরে নয়:

- **দুটি** অসিলেটরেরই ডাইভার্জ করা দাবি করলে **D1 বাতিল** — আর চারটির মধ্যে D1-ই সবচেয়ে ব্যয়বহুল সংকেত।
- **যেকোনো একটি** মানলে D1 টেকে।

কিন্তু ধাপ ৫ আগেই বলেছে P1-এ MACD পাঠটি তার ওয়ার্ম-আপের ভেতরে। **তাই সৎ উপসংহার "MACD দ্বিমত" নয়; সৎ উপসংহার "MACD-র এখানে কোনো মত নেই, কারণ তার সূচনায়ন শেষ হয়নি।"** D1-কে RSI-মাত্র সংকেত হিসেবে লিপিবদ্ধ করুন, যার দ্বিতীয় মতটি অব্যবহার্য। দুই-অসিলেটরের ঐকমত্যের চেয়ে এটি দুর্বল সংকেত, আর নথিতে তাই লেখা থাকা উচিত।

**ধাপ ১১ — বাকি তিনটি সংকেতের জন্য ধাপ ৭–১০ পুনরাবৃত্তি করুন।**

| সংকেত | জোড়া | $\\tau$ | $\\Delta P$ | $\\Delta P\\%$ | $\\Delta RSI$ | $\\Delta MACD$ | দুটিই একমত? |
|---|---|---|---|---|---|---|---|
| D1 | P1→P2 | ২৩ | +৬.২৫ | +১২.৭৯৪৩% | −১.৩৬৪৫ | **+০.২১৭৮** | না (MACD ওয়ার্ম-আপে) |
| D2 | P2→P3 | ২৮ | +৫.৪৫ | +৯.৮৯১১% | −৩.৫৪৮৬ | −০.৪৮৭৮ | **হ্যাঁ** |
| D3 | P3→P4 | ৩১ | +৩.৭৫ | +৬.১৯৩২% | −৪.৭৭৯৬ | −০.৬০৮৭ | **হ্যাঁ** |
| D4 | P4→P5 | ২৬ | +২.৫৫ | +৩.৯৬৫৮% | −২.৫১৪৯ | −০.৩৬৪৯ | **হ্যাঁ** |

চারটিই চিহ্ন পরীক্ষায় পাস। চারটিই ব্যবধানে পাস — ২৩, ২৮, ৩১, ২৬, প্রত্যেকটিই দশের স্বচ্ছন্দে ওপরে।

**একটি ১০৮-সেশনের অগ্রগমনে চারটি বৈধ বেয়ারিশ ডাইভারজেন্স। এগোনোর আগে বাক্যটি আবার পড়ুন, কারণ পুরো অধ্যায়টিই এই।**

**ধাপ ১২ — ঢালগুলো প্রমিত করে মাত্রা গণনা করুন।**

D1-এর জন্য:
$$\\hat{s}_P = \\frac{12.7943}{23} = 0.5563\\;\\%/\\text{বার}, \\qquad \\hat{s}_O = \\frac{-1.3645}{23} = -0.0593\\;\\text{পয়েন্ট}/\\text{বার}$$
$$\\mathcal{D}_1 = 0.5563 \\times 0.0593 \\times 100 = 3.3001$$

বাকিগুলোর জন্য:
$$\\mathcal{D}_2 = \\frac{9.8911}{28}\\times\\frac{3.5486}{28}\\times 100 = 0.3533 \\times 0.1267 \\times 100 = 4.4770$$
$$\\mathcal{D}_3 = \\frac{6.1932}{31}\\times\\frac{4.7796}{31}\\times 100 = 0.1998 \\times 0.1542 \\times 100 = 3.0803$$
$$\\mathcal{D}_4 = \\frac{3.9658}{26}\\times\\frac{2.5149}{26}\\times 100 = 0.1525 \\times 0.0967 \\times 100 = 1.4754$$

**ধাপ ১৩ — মাত্রা অনুযায়ী সাজান, তারপর আসলে কী ঘটেছিল দেখুন।**

| $\\mathcal{D}$ অনুযায়ী ক্রম | সংকেত | $\\mathcal{D}$ | তারপর কী হলো |
|---|---|---|---|
| ১ | D2 | ৪.৪৭৭০ | দাম আরও ৬.৩০ উঠে P4, তারপর আরও ২.৫৫ |
| ২ | D1 | ৩.৩০০১ | দাম আরও ১১.৭৫ উঠল |
| ৩ | D3 | ৩.০৮০৩ | দাম আরও ২.৫৫ উঠল |
| ৪ | **D4** | **১.৪৭৫৪** | **শীর্ষ** |

**সবচেয়ে শক্তিশালী ডাইভারজেন্সটি ভুল ছিল আর সবচেয়ে দুর্বলটি ঠিক ছিল।** $\\mathcal{D}$-র ভিত্তিতে আকার নিলে আপনি সবচেয়ে বড় পজিশন বসাতেন D2-তে আর সবচেয়ে ছোটটি যেটি একমাত্র গুরুত্বপূর্ণ ছিল তাতে।

$\\mathcal{D}$ কেবল একটি মেঝে হিসেবে ব্যবহার করুন — ১-এর নিচে যা কিছু তা গোলমাল হিসেবে বাদ দিন — আর অন্য কিছুতে নয়। **এখানে চারটিই ১ পেরোয়, তাই এই উপাত্তে ছাঁকনিটি কোনো কাজই করে না।** সংখ্যাটি তার জায়গা অর্জন করেছে ভান না করে স্পষ্ট বলুন।

**ধাপ ১৪ — অধ্যায় ৩০-এর লেভেল ব্যবহার করে প্রতিটি সংকেতের কাঠামো ট্রিগার শনাক্ত করুন।**

ট্রিগার লেভেল হলো ডান পিভটের আগের সাম্প্রতিকতম সুইং লো — যে লেভেলের পতন উচ্চতর-তলের সেই ক্রম ভাঙে যা আপট্রেন্ডকে সংজ্ঞায়িত করে (অধ্যায় ৩১)।

| সংকেত | ডান পিভট | সাম্প্রতিকতম আগের লো | ট্রিগার লেভেল |
|---|---|---|---|
| D1 | P2 (স৪৯) | L1 (স৩৩) | **৪৫.২০** |
| D2 | P3 (স৭৭) | L2 (স৫৭) | **৫১.৮০** |
| D3 | P4 (স১০৮) | L3 (স৮৬) | **৫৭.৬০** |
| D4 | P5 (স১৩৪) | L4 (স১১৬) | **৬২.০০** |

**ধাপ ১৫ — দাম আসলে কী করল তার বিপরীতে প্রতিটি ট্রিগার পরীক্ষা করুন।**

- **D1, লেভেল ৪৫.২০।** পুরো ধারাবাহিকতায় দাম আর কখনো ৪৫.২০-এর নিচে বন্ধ হয়নি। **কোনো ট্রিগার নেই।**
- **D2, লেভেল ৫১.৮০।** P3-এর পরে গভীরতম পুলব্যাক ছিল ৫৭.৬০ পর্যন্ত। **কোনো ট্রিগার নেই।**
- **D3, লেভেল ৫৭.৬০।** এর নিচে প্রথম ক্লোজ সেশন ১৫০-এ ৫৭.৪৯ — **পিভটের ৪২ সেশন পরে ও শীর্ষের ১৬ সেশন পরে।** শেষমেশ "বেজেছিল" বটে, কিন্তু সংকেত হিসেবে অকেজো।
- **D4, লেভেল ৬২.০০।** এর নিচে প্রথম ক্লোজ **সেশন ১৪৩-এ ৬১.৪৮ — পিভটের নয় সেশন পরে।** **ট্রিগার।**

**চারটির তিনটি ডাইভারজেন্স কোনো কার্যকর ট্রিগারই তৈরি করেনি।** শৃঙ্খলা কেবল তিনটি খারাপ সংকেতের সময়জ্ঞান উন্নত করেনি; তাদের মুছে দিয়েছে।

**ধাপ ১৬ — নিশ্চিতকরণের বিলম্ব মেনে নির্বাহগুলোর সৎ দাম বসান।**

সেশন $t$-এর একটি পিভট $t+k = t+4$-এর আগে জানা যায় না। তাই কেবল-ডাইভারজেন্স ট্রেডার সবচেয়ে আগে কাজ করতে পারেন ডান পিভটের চার সেশন পরে:

| সংকেত | ডান পিভট | সবচেয়ে আগের নির্বাহ | সেখানকার ক্লোজ |
|---|---|---|---|
| D1 | স৪৯ | স৫৩ | **৫৩.৩৫** |
| D2 | স৭৭ | স৮১ | **৫৯.১৬** |
| D3 | স১০৮ | স১১২ | **৬৩.১০** |
| D4 | স১৩৪ | স১৩৮ | **৬৪.৩২** |

ট্রিগার প্রস্থানের এমন সমন্বয় লাগে না — **৬২.০০-এর নিচে একটি ক্লোজ সেশন ১৪৩-এর ক্লোজেই দেখা যায়, ৬১.৪৮-এ।** পিভটের ওপর দাম-ট্রিগারের এটি একটি প্রকৃত ও কম-প্রশংসিত সুবিধা: **কাঠামো একই দিনে নিশ্চিত করে; পিভট চার দিন দেরিতে।**

**ধাপ ১৭ — ৪৫.২০ খরচ-ভিত্তি থেকে কেবল ডাইভারজেন্স ট্রেড করার ফল গণনা করুন।**

$$\\text{লাভ}_{D1} = 53.35 - 45.20 = 8.15, \\qquad \\frac{8.15}{45.20} = 18.03\\%$$
$$\\text{লাভ}_{D2} = 59.16 - 45.20 = 13.96 \\;(30.88\\%), \\qquad \\text{লাভ}_{D3} = 63.10 - 45.20 = 17.90 \\;(39.60\\%)$$
$$\\text{লাভ}_{D4} = 64.32 - 45.20 = 19.12 \\;(42.30\\%)$$

প্রাপ্য পূর্ণ চলাচল ছিল $66.85 - 45.20 = 21.65$।

**এবার নির্ণায়ক যৌক্তিক ধাপটি, আর এখানেই বেশিরভাগ পাঠকের সহজাত বোধ ব্যর্থ হয়।** যে নিয়ম বলে *বেয়ারিশ ডাইভারজেন্সে বেরিয়ে আসুন*, সে কোন ডাইভারজেন্স তা বাছতে পারে না। **সে যেটি প্রথম দেখে সেটিতেই বাজে।**

$$\\text{কেবল-ডাইভারজেন্স নিয়ম} \\;\\Rightarrow\\; 53.35\\text{-এ প্রস্থান} \\;\\Rightarrow\\; \\mathbf{8.15}, \\;\\mathbf{18.03\\%}, \\; \\frac{8.15}{21.65} = \\mathbf{37.64\\%} \\text{ চলাচলের}$$

**ধাপ ১৮ — শৃঙ্খলাবদ্ধ নিয়মের ফল গণনা করুন।**

$$\\text{ডাইভারজেন্স} + \\text{কাঠামো ট্রিগার} \\;\\Rightarrow\\; 61.48\\text{-এ প্রস্থান}$$
$$\\text{লাভ} = 61.48 - 45.20 = 16.28, \\qquad \\frac{16.28}{45.20} = 36.02\\%, \\qquad \\frac{16.28}{21.65} = 75.20\\%$$

$$\\text{শৃঙ্খলার মূল্য} = 61.48 - 53.35 = \\mathbf{8.13} \\text{ শেয়ারপ্রতি} = \\frac{8.13}{53.35} = \\mathbf{15.24\\%}$$

**দ্বিগুণ রিটার্ন ও অগ্রগমনের দ্বিগুণ অংশ, কেবল দাম নির্দেশকের সঙ্গে একমত হওয়ার অপেক্ষার বিনিময়ে।**

**ধাপ ১৯ — স্বীকারোক্তিটি বলুন, কারণ যে নিয়ম আপনি কেবল তার সেরা চেহারায় দেখান তা প্রচারণা।**

$$64.32 - 61.48 = \\mathbf{2.84} \\text{ শেয়ারপ্রতি} = \\frac{2.84}{45.20} = \\mathbf{6.28} \\text{ শতাংশ-বিন্দু রিটার্ন}$$

**কেবল D4-তে কাজ করলে তা শৃঙ্খলাবদ্ধ প্রস্থানকে হারাত।** সংকেত যে একবার ঠিক সেই একবারে নিশ্চিতকরণের শর্ত আপনার ২.৮৪ টাকা খরচ করায়, কারণ তা সতর্কবার্তায় ভরসা না করে প্রমাণের অপেক্ষা করে।

অনিশ্চয়তায় সিদ্ধান্ত হিসেবে বিনিময়টি: **সংকেত ঠিক হলে ৬.২৮ পয়েন্ট ছেড়ে দিন, যাতে ভুল হলে ১৮.০৩ বনাম ৩৬.০২ ছাড়তে না হয়।** চারটিতে একটি সঠিক সংকেত থাকলে এই বিনিময় প্রতিদ্বন্দ্বিতাপূর্ণও নয়। আর এমন কোনো জগৎ নেই যেখানে আপনি আগে থেকে জানেন যে চতুর্থটিই চতুর্থ।

**ধাপ ২০ — এবার অভিন্ন উপাত্তে হিডেন ডাইভারজেন্স গুনুন।**

| লো | সেশন | ক্লোজ | $RSI_{14}$ |
|---|---|---|---|
| L1 | ৩৩ | ৪৫.২০ | ৫৮.২০৪৯ |
| L2 | ৫৭ | ৫১.৮০ | ৫৭.১৪১৮ |
| L3 | ৮৬ | ৫৭.৬০ | ৫৩.২৫৯৩ |
| L4 | ১১৬ | ৬২.০০ | ৫১.৯৩৮৬ |

সন্নিহিত জোড়া:
$$L1 \\to L2: \\;\\Delta P = +6.60,\\; \\Delta RSI = -1.0631 \\;\\Rightarrow\\; \\text{হিডেন বুলিশ}$$
$$L2 \\to L3: \\;\\Delta P = +5.80,\\; \\Delta RSI = -3.8825 \\;\\Rightarrow\\; \\text{হিডেন বুলিশ}$$
$$L3 \\to L4: \\;\\Delta P = +4.40,\\; \\Delta RSI = -1.3207 \\;\\Rightarrow\\; \\text{হিডেন বুলিশ}$$

আর $\\binom{4}{2} = 6$ জোড়ার সবগুলোতেই **ছয়টিই যোগ্য।** ধাপ ৬-এ ফেলে দেওয়া সেটের দশটির সঙ্গে মিলিয়ে:

$$10 \\;\\text{বেয়ারিশ রেগুলার} \\;+\\; 6 \\;\\text{হিডেন বুলিশ} \\;=\\; \\mathbf{16} \\;\\text{একটি অগ্রগমন থেকে কারিগরিভাবে বৈধ ডাইভারজেন্স সংকেত}$$

**দশটি বলে বিক্রি করুন। ছয়টি বলে ধরে রাখুন। প্রত্যেকটি তার সংজ্ঞা হুবহু পূরণ করে।** এই অধ্যায়ের কোনো পাটিগণিত ঐ লাইনটির চেয়ে গুরুত্বপূর্ণ নয়।

**ধাপ ২১ — ডিএসই আচ্ছাদন প্রয়োগ করুন, যা ওপরের সবকিছু বাতিল করে দিতে পারে।**

±১০% ব্যান্ডে একটি আটকা সেশন নিষ্পত্তির দামের বদলে ব্যান্ডটিই ছাপে। §৪৪.৪.৭-এর নির্মিত অভিঘাত দৃষ্টান্তে:

$$RSI^{\\text{প্রকৃত}} = 81.7946, \\qquad RSI^{\\text{ব্যান্ডেড}} = 78.3391, \\qquad \\text{পক্ষপাত} = 3.4555$$

D1-এর সম্পূর্ণ বিষয়বস্তুর সঙ্গে তুলনা করুন:

$$\\frac{3.4555}{1.3645} = 2.532$$

**একটি পিভটের কাছে একটিমাত্র সার্কিট-আটকা সেশন এমন একটি RSI সরণ তৈরি করে যা D1-কে আদৌ ডাইভারজেন্স বানানো সরণের আড়াই গুণ বড়।** ধাপ ৭–১৯-এর কিছু গণ্য হওয়ার আগে নিশ্চিত করুন কোনো পিভটই সীমায় ছাপেনি এবং মাঝের কোনো বার ফ্লোর-প্রাইস জানালার ভেতরে নেই (অধ্যায় ২৬)। যেকোনো একটি ব্যর্থ হলে **ডাইভারজেন্সটি দুর্বল নয় — অসংজ্ঞায়িত।**

**ধাপ ২২ — ফলাফলটিকে ডিএসই যে কাজগুলোর অনুমতি দেয় কেবল সেগুলোতে রূপান্তর করুন।**

ওপরের পুরো গণনাটি ছিল **কখন বিক্রি করবেন তা ঠিক করা একজন হোল্ডারের জন্য।** নির্ভরযোগ্য শেয়ার ধারের ব্যবস্থা না থাকায় D4-এর ফলাফল ঠিক তিনটি জিনিসের অনুমতি দেয়:

১. P5-এ (সেশন ১৩৪, ১৩৮-এ নিশ্চিতকরণে) ROSHANPOLY-তে **যোগ করা বন্ধ করুন।**
২. **স্টপ তুলে আনুন** ৬২.০০-এর সামান্য নিচে — কাঠামোর লেভেল, অধ্যায় ৩০ অনুযায়ী, কখনো আপনার ফিলের একটি শতাংশ নিচে নয়।
৩. সেশন ১৪৩ তার নিচে বন্ধ হলে **৬১.৪৮-এ বেরিয়ে আসুন।**

$$\\text{অর্জিত} = 45.20 \\text{ ভিত্তিতে শেয়ারপ্রতি } 16.28 = 36.02\\%$$

**যা এটি অনুমোদন করে না তা হলো ৬৬.৮৫-এ একটি শর্ট, আর যত দৃঢ় বিশ্বাসই থাকুক তা বদলায় না।** এই এক্সচেঞ্জে ট্রেডটির অস্তিত্বই নেই। যিনি আপনাকে একটি ডিএসই চার্টে ডাইভারজেন্স শর্ট দেখাচ্ছেন, তিনি এমন একটি আদেশের ব্যাকটেস্ট দেখাচ্ছেন যা বাজার প্রত্যাখ্যান করত।`,
    },
    mistakes: {
      en: `1. **Trading divergence as an entry or an exit instead of as a warning.** On ROSHANPOLY the rule "exit on bearish divergence" fires at D1 and sells at 53.35 for 18.03%, capturing 37.64% of the 21.65 available. The same divergence gated by a close below the prior swing low sells at 61.48 for 36.02% and 75.20% of the move. **The signal is identical; only the permission to act changed, and it was worth 8.13 a share.**

2. **Counting a divergence against an oscillator whose warm-up has not completed.** P1 sits at session 26. $RSI_{14}$ is defined there — but $MACD(12,26,9)$ needs $26+9 = 35$ sessions, and the histogram at session 25 is exactly **0.0000 because the signal line was seeded equal to the MACD line**, not because momentum was balanced. The $\\Delta MACD = +0.2178$ that appears to contradict D1 is an initialisation artefact, and reporting it as "MACD disagrees" is as wrong as ignoring it. **The correct entry in the log is: MACD has no opinion at P1.**

3. **Re-picking the pivots until a divergence appears.** Five swing highs admit $\\binom{5}{2} = 10$ pairs and **all ten satisfy the bearish condition on this data.** The four swing lows admit six pairs and **all six satisfy hidden bullish divergence.** Sixteen valid signals, ten bearish and six bullish, from one advance. If you choose $k$ or the pair after seeing the chart, you are not measuring the market — you are selecting the answer, and the arithmetic above shows there is always an answer available.

4. **Reading magnitude as reliability.** The normalised scores were $\\mathcal{D} = 3.3001,\\, 4.4770,\\, 3.0803,\\, 1.4754$. **The largest, 4.4770 on D2, was wrong; the smallest, 1.4754 on D4, preceded the top.** Sizing on $\\mathcal{D}$ would have put the biggest position on the worst signal. Use it as a floor to discard noise and for nothing else.

5. **Pairing pivots that are too close together.** Two RSI(14) readings three sessions apart share $1 - 3/27 = 0.8889$ — **about 89% of their input history**. Their difference reports which two bars left the window, not any change in participation. The four signals here ran 23, 28, 31 and 26 sessions apart, all clear of the $\\tau_{\\min} = 10$ floor. Most divergences posted on five-minute charts fail this single test.

6. **Anchoring a pivot on a circuit-locked or floor-price bar.** A band-locked close is the exchange's number, not the market's. In the §44.4.7 illustration the ±10% band alone shifts $RSI_{14}$ from 81.7946 to 78.3391 — **a 3.4555-point artefact, 2.532× the 1.3645 that made D1 a divergence.** During a floor window $U_t = D_t = 0$ and Wilder's ratio decays to $0/0$: the oscillator is not weak there, it is **undefined**, and a divergence spanning it is a measurement of the rule.

7. **Assuming the oscillator is the oscillator.** At session 49 the three defensible RSI seeds of Chapter 36 read **87.5554 (Wilder), 100.0000 (simple 14) and 94.6616 (standard EMA)** — a 12.4446-point spread. Under Wilder, $\\Delta RSI(P_1{\\to}P_2) = -1.3645$ and D1 exists. Under the simple average it is **+2.8169 and D1 does not exist at all.** Before arguing about a divergence, establish that both parties compute the same indicator.

8. **Waiting for a bullish divergence that never arrives.** From the top the stock fell 26 sessions to 52.40 and produced **no bullish divergence whatever**; RSI ran from 76.7123 straight to 9.9715 and sat below 30 for 17 consecutive sessions while price lost a further 13.97%. **The absence of a signal is not a signal**, and a plan that requires divergence to appear before you act has no branch for the case where it simply does not.

9. **Treating a bearish divergence as a short.** There is no reliable stock borrow on the DSE. The permitted actions are stop adding, tighten the stop to the structure level, and exit on the trigger. **Every figure in §44.5 was computed for a holder deciding when to sell**, and any course that arrives at a short entry has stopped describing this market.`,
      bn: `১. **ডাইভারজেন্সকে সতর্কবার্তার বদলে প্রবেশ বা প্রস্থান হিসেবে ট্রেড করা।** ROSHANPOLY-তে "বেয়ারিশ ডাইভারজেন্সে বেরিয়ে আসুন" নিয়মটি D1-এ বেজে ৫৩.৩৫-এ বিক্রি করে ১৮.০৩%, প্রাপ্য ২১.৬৫-এর ৩৭.৬৪% ধরে। একই ডাইভারজেন্স আগের সুইং লো-র নিচে ক্লোজ দিয়ে নিয়ন্ত্রিত হলে ৬১.৪৮-এ বিক্রি করে ৩৬.০২% ও চলাচলের ৭৫.২০%। **সংকেত অভিন্ন; কেবল কাজ করার অনুমতি বদলেছে, আর তার মূল্য ছিল শেয়ারপ্রতি ৮.১৩।**

২. **যে অসিলেটরের ওয়ার্ম-আপ শেষ হয়নি তার বিপরীতে ডাইভারজেন্স গোনা।** P1 বসে আছে সেশন ২৬-এ। সেখানে $RSI_{14}$ সংজ্ঞায়িত — কিন্তু $MACD(12,26,9)$-এর দরকার $26+9 = 35$ সেশন, আর সেশন ২৫-এ হিস্টোগ্রাম ঠিক **০.০০০০ কারণ সিগন্যাল লাইনকে MACD লাইনের সমান করে বীজায়িত করা হয়েছে**, মোমেন্টাম ভারসাম্যে ছিল বলে নয়। যে $\\Delta MACD = +0.2178$ D1-কে খণ্ডন করছে বলে মনে হয় তা সূচনায়নের কৃত্রিম ফল, আর একে "MACD দ্বিমত" বলে জানানো একে উপেক্ষা করার মতোই ভুল। **নথিতে সঠিক এন্ট্রি: P1-এ MACD-র কোনো মত নেই।**

৩. **ডাইভারজেন্স হাজির না হওয়া পর্যন্ত পিভট বারবার বাছা।** পাঁচটি সুইং হাই $\\binom{5}{2} = 10$ জোড়া দেয় আর **এই উপাত্তে দশটিই বেয়ারিশ শর্ত পূরণ করে।** চারটি সুইং লো ছয় জোড়া দেয় আর **ছয়টিই হিডেন বুলিশ ডাইভারজেন্স পূরণ করে।** একটি অগ্রগমন থেকে ষোলোটি বৈধ সংকেত, দশটি বেয়ারিশ ও ছয়টি বুলিশ। চার্ট দেখার পর $k$ বা জোড়া বাছলে আপনি বাজার মাপছেন না — উত্তর নির্বাচন করছেন, আর ওপরের পাটিগণিত দেখায় একটি উত্তর সবসময়ই পাওয়া যায়।

৪. **মাত্রাকে নির্ভরযোগ্যতা হিসেবে পড়া।** প্রমিত স্কোরগুলো ছিল $\\mathcal{D} = 3.3001,\\, 4.4770,\\, 3.0803,\\, 1.4754$। **সবচেয়ে বড়টি, D2-তে ৪.৪৭৭০, ভুল ছিল; সবচেয়ে ছোটটি, D4-তে ১.৪৭৫৪, শীর্ষের আগে এসেছিল।** $\\mathcal{D}$-র ভিত্তিতে আকার নিলে সবচেয়ে বড় পজিশন বসত সবচেয়ে খারাপ সংকেতে। একে গোলমাল ছাঁটার মেঝে হিসেবে ব্যবহার করুন, আর কিছুতে নয়।

৫. **অতি কাছাকাছি পিভট জোড়া বাঁধা।** তিন সেশনের ব্যবধানে দুটি RSI(১৪) পাঠ $1 - 3/27 = 0.8889$ ভাগ করে — **তাদের ইনপুট ইতিহাসের প্রায় ৮৯%**। তাদের পার্থক্য জানায় কোন দুটি বার জানালা ছেড়েছে, অংশগ্রহণের কোনো পরিবর্তন নয়। এখানকার চারটি সংকেত ছিল ২৩, ২৮, ৩১ ও ২৬ সেশন দূরে, সবই $\\tau_{\\min} = 10$ মেঝের ওপরে। পাঁচ-মিনিটের চার্টে দেওয়া বেশিরভাগ ডাইভারজেন্স এই একটিমাত্র পরীক্ষাতেই ব্যর্থ হয়।

৬. **সার্কিট-আটকা বা ফ্লোর-প্রাইস বারে পিভট নোঙর করা।** ব্যান্ড-আটকা ক্লোজ এক্সচেঞ্জের সংখ্যা, বাজারের নয়। §৪৪.৪.৭-এর দৃষ্টান্তে কেবল ±১০% ব্যান্ডই $RSI_{14}$-কে ৮১.৭৯৪৬ থেকে ৭৮.৩৩৯১-এ সরায় — **৩.৪৫৫৫ পয়েন্টের কৃত্রিম ফল, যা D1-কে ডাইভারজেন্স বানানো ১.৩৬৪৫-এর ২.৫৩২×।** ফ্লোর জানালায় $U_t = D_t = 0$ ও ওয়াইল্ডারের অনুপাত $0/0$-তে ক্ষয় হয়: অসিলেটর সেখানে দুর্বল নয়, **অসংজ্ঞায়িত**, আর তা পেরোনো ডাইভারজেন্স আসলে বিধিটিরই পরিমাপ।

৭. **অসিলেটরকে "সেই অসিলেটর" ধরে নেওয়া।** সেশন ৪৯-এ অধ্যায় ৩৬-এর তিনটি সমর্থনযোগ্য RSI বীজ পড়ে **৮৭.৫৫৫৪ (ওয়াইল্ডার), ১০০.০০০০ (সরল ১৪) ও ৯৪.৬৬১৬ (প্রমিত EMA)** — ১২.৪৪৪৬ পয়েন্টের বিস্তার। ওয়াইল্ডারে $\\Delta RSI(P_1{\\to}P_2) = -1.3645$ ও D1 আছে। সরল গড়ে তা **+২.৮১৬৯ এবং D1 আদৌ নেই।** ডাইভারজেন্স নিয়ে তর্কের আগে নিশ্চিত করুন দুই পক্ষ একই নির্দেশক গণনা করছে।

৮. **এমন বুলিশ ডাইভারজেন্সের অপেক্ষা যা কখনো আসে না।** শীর্ষ থেকে শেয়ারটি ২৬ সেশনে ৫২.৪০-এ নেমেছে ও **কোনো বুলিশ ডাইভারজেন্সই তৈরি করেনি**; RSI ৭৬.৭১২৩ থেকে সোজা ৯.৯৭১৫-এ গেছে আর টানা ১৭ সেশন ৩০-এর নিচে বসে ছিল, এই সময়ে দাম আরও ১৩.৯৭% হারিয়েছে। **সংকেতের অনুপস্থিতি সংকেত নয়**, আর যে পরিকল্পনা কাজ করার আগে ডাইভারজেন্সের হাজিরা দাবি করে, তাতে "সেটি ঘটলই না" ক্ষেত্রের কোনো শাখা নেই।

৯. **বেয়ারিশ ডাইভারজেন্সকে শর্ট গণ্য করা।** ডিএসই-তে নির্ভরযোগ্য শেয়ার ধার নেই। অনুমোদিত কাজ হলো যোগ করা বন্ধ, স্টপ কাঠামোর লেভেলে আঁটসাঁট করা, ও ট্রিগারে বেরিয়ে আসা। **§৪৪.৫-এর প্রতিটি সংখ্যা গণনা করা হয়েছে কখন বিক্রি করবেন তা ঠিক করা একজন হোল্ডারের জন্য**, আর যে কোর্স একটি শর্ট প্রবেশে পৌঁছায় তা এই বাজারের বর্ণনা দেওয়া বন্ধ করে দিয়েছে।`,
    },

    tips: {
      en: `1. **Write $k$ down before you open the chart, and apply it to every name.** $k=4$ or $k=5$ on daily DSE data. This is the entire defence against the pivot-selection problem, it costs nothing, and it is the step everyone skips.

2. **Use adjacent pivots only.** It cuts the claim set from $\\binom{n}{2}$ to $n-1$ — ten down to four in the worked case. A non-adjacent pair is a pair that skipped a pivot which contradicted you.

3. **Log the bar separation with every divergence you record.** Below $\\tau_{\\min} = 10$ on RSI(14) the two readings overlap too much to be independent; at $\\tau = 3$ they share 89% of their inputs. **A divergence without a separation figure attached is not a record, it is a memory.**

4. **Require a price-structure trigger before any action, and set its horizon in advance.** Twenty to thirty sessions is reasonable on daily data; the ROSHANPOLY trigger arrived nine sessions after the pivot. **Without a horizon an arm never expires and you will eventually credit it with an unrelated decline six months later.**

5. **Prefer the trigger's timing to the pivot's.** A pivot is unknowable for $k$ sessions; a close below a level is observable the same evening. That structural advantage — same-day versus four days late — is worth more than most indicator refinements.

6. **Check both oscillators, and record disagreement rather than resolving it.** On D1 the RSI diverged and the MACD did not. Two-of-two agreement is a genuine filter and it would have deleted the most expensive signal of the four.

7. **Verify the left anchor is past warm-up before you subtract anything.** RSI(14) needs 14 changes; MACD(12,26,9) needs 35 sessions. **A divergence anchored inside warm-up is a fact about your seeding convention.**

8. **Flag every circuit-locked and floor-price bar before computing.** The band alone moved RSI by 3.4555 points in the §44.4.7 illustration — 2.532× the shift that constituted D1. Refuse to anchor a pivot on a locked bar, and delete floor windows entirely per Chapter 26.

9. **Count the hidden divergences at the lows every time you count the regular ones at the highs.** If the lows are making higher lows on falling RSI, the same data that looks like a topping warning also looks like a continuation confirmation. **Knowing both readings exist is the difference between analysis and confirmation bias.**

10. **Use $\\mathcal{D}$ as a floor, never as a rank.** Discard anything below 1 as noise. Do not size on it: on this data the largest score was the worst signal and the smallest was the only good one.

11. **Write down, in advance, what you will do if the divergence never comes.** ROSHANPOLY fell 13.97% over 17 sessions of sub-30 RSI without ever producing a bullish divergence. A plan whose only entry condition is a signal that may not occur is not a plan.

12. **On a bearish reading, act only on the three permitted moves: stop adding, tighten the stop to structure, exit on trigger.** Never a short. And treat bullish regular divergence as the more useful family here precisely because the action it licenses is one the exchange will accept.`,
      bn: `১. **চার্ট খোলার আগে $k$ লিখে ফেলুন, আর প্রতিটি নামে তা প্রয়োগ করুন।** ডিএসই দৈনিক উপাত্তে $k=4$ বা $k=5$। পিভট-নির্বাচনের সমস্যার বিরুদ্ধে এটিই সম্পূর্ণ প্রতিরক্ষা, এতে কোনো খরচ নেই, আর সবাই এই ধাপটিই বাদ দেন।

২. **কেবল সন্নিহিত পিভট ব্যবহার করুন।** এটি দাবির সেটকে $\\binom{n}{2}$ থেকে $n-1$-এ নামায় — কার্যকরী কেসে দশ থেকে চারে। অ-সন্নিহিত জোড়া মানে এমন একটি জোড়া যা আপনার বিরুদ্ধে কথা বলা একটি পিভট ডিঙিয়ে গেছে।

৩. **প্রতিটি লিপিবদ্ধ ডাইভারজেন্সের সঙ্গে বার-ব্যবধান লিখুন।** RSI(১৪)-তে $\\tau_{\\min} = 10$-এর নিচে দুটি পাঠ এত বেশি আচ্ছাদিত যে স্বতন্ত্র নয়; $\\tau = 3$-এ তারা ইনপুটের ৮৯% ভাগ করে। **ব্যবধানের সংখ্যা ছাড়া ডাইভারজেন্স নথি নয়, স্মৃতি।**

৪. **যেকোনো কাজের আগে একটি দাম-কাঠামো ট্রিগার দাবি করুন, আর তার সময়সীমা আগেই ঠিক করুন।** দৈনিক উপাত্তে কুড়ি থেকে ত্রিশ সেশন যুক্তিসংগত; ROSHANPOLY-র ট্রিগার এসেছে পিভটের নয় সেশন পরে। **সময়সীমা ছাড়া অস্ত্র কখনো নামে না, আর ছয় মাস পরের একটি অসম্পর্কিত পতনের কৃতিত্ব আপনি শেষ পর্যন্ত তাকেই দেবেন।**

৫. **পিভটের সময়জ্ঞানের চেয়ে ট্রিগারের সময়জ্ঞান পছন্দ করুন।** একটি পিভট $k$ সেশন পর্যন্ত অজানা; একটি লেভেলের নিচে ক্লোজ সেই সন্ধ্যাতেই দেখা যায়। ঐ কাঠামোগত সুবিধা — একই দিন বনাম চার দিন দেরি — বেশিরভাগ নির্দেশক-পরিমার্জনার চেয়ে মূল্যবান।

৬. **দুটি অসিলেটরই দেখুন, আর অমিলকে মীমাংসা না করে লিপিবদ্ধ করুন।** D1-এ RSI ডাইভার্জ করেছে, MACD করেনি। দুইয়ে-দুই ঐকমত্য একটি প্রকৃত ছাঁকনি, আর তা চারটির মধ্যে সবচেয়ে ব্যয়বহুল সংকেতটি মুছে দিত।

৭. **কিছু বিয়োগ করার আগে যাচাই করুন বাঁ নোঙর ওয়ার্ম-আপ পেরিয়েছে।** RSI(১৪)-র দরকার ১৪টি পরিবর্তন; MACD(১২,২৬,৯)-র দরকার ৩৫ সেশন। **ওয়ার্ম-আপের ভেতরে নোঙর করা ডাইভারজেন্স আপনার বীজায়ন প্রথা সম্পর্কে একটি তথ্য।**

৮. **গণনার আগে প্রতিটি সার্কিট-আটকা ও ফ্লোর-প্রাইস বার চিহ্নিত করুন।** §৪৪.৪.৭-এর দৃষ্টান্তে কেবল ব্যান্ডই RSI ৩.৪৫৫৫ পয়েন্ট সরিয়েছে — D1 গঠনকারী সরণের ২.৫৩২×। আটকা বারে পিভট নোঙর করতে অস্বীকার করুন, আর অধ্যায় ২৬ অনুযায়ী ফ্লোর জানালা সম্পূর্ণ মুছে দিন।

৯. **উচ্চতায় রেগুলার ডাইভারজেন্স গোনার প্রতিবার তলগুলোতে হিডেন ডাইভারজেন্সও গুনুন।** তলগুলো যদি পড়তে থাকা RSI-তে উচ্চতর তল করে, তবে যে উপাত্তকে শীর্ষের সতর্কতা মনে হচ্ছে সেটিই ধারাবাহিকতার সমর্থনও দেখায়। **দুটি পাঠেরই অস্তিত্ব জানাই বিশ্লেষণ ও নিশ্চিতকরণ-পক্ষপাতের পার্থক্য।**

১০. **$\\mathcal{D}$-কে মেঝে হিসেবে ব্যবহার করুন, কখনো ক্রম হিসেবে নয়।** ১-এর নিচে যা কিছু গোলমাল হিসেবে বাদ দিন। এর ভিত্তিতে আকার নেবেন না: এই উপাত্তে সবচেয়ে বড় স্কোরটিই সবচেয়ে খারাপ সংকেত আর সবচেয়ে ছোটটিই একমাত্র ভালোটি।

১১. **ডাইভারজেন্স কখনো না এলে কী করবেন তা আগেই লিখে রাখুন।** ROSHANPOLY ৩০-এর নিচে RSI-র ১৭ সেশনে ১৩.৯৭% পড়েছে অথচ কখনো একটিও বুলিশ ডাইভারজেন্স দেয়নি। যে পরিকল্পনার একমাত্র প্রবেশ-শর্ত এমন একটি সংকেত যা না-ও ঘটতে পারে, তা পরিকল্পনা নয়।

১২. **বেয়ারিশ পাঠে কেবল তিনটি অনুমোদিত পদক্ষেপে কাজ করুন: যোগ করা বন্ধ, স্টপ কাঠামোয় আঁটসাঁট, ট্রিগারে প্রস্থান।** কখনো শর্ট নয়। আর বুলিশ রেগুলার ডাইভারজেন্সকে এখানে বেশি কাজের পরিবার গণ্য করুন ঠিক এই কারণে যে তা যে কাজের অনুমতি দেয় এক্সচেঞ্জ সেটি গ্রহণ করবে।`,
    },

    exercises: {
      en: `1. Reconstruct the five ROSHANPOLY pivots and confirm the four adjacent signals: $\\Delta RSI$ of −1.3645, −3.5486, −4.7796, −2.5149 at separations of 23, 28, 31 and 26 sessions. Verify $\\mathcal{D} = 3.3001,\\, 4.4770,\\, 3.0803,\\, 1.4754$.

2. **Take a single sustained advance in any DSE name over the past two years and count how many times bearish divergence fired against RSI(14) before the one that coincided with the turn.** Record the price at each firing and the price at the eventual top. Then compute what a rule that exits on the first divergence would have earned versus holding to the structure break. **Do this before reading anything else in this list.**

3. For the same advance, list every swing high with $k=4$, count $\\binom{n}{2}$, and report how many of those pairs satisfy the bearish condition. Then do the same for the swing lows and hidden bullish divergence. What is your total signal count, and how many point each way?

4. Recompute exercise 3 with $k=3$ and with $k=6$. How many pivots does each produce, and by what factor does the number of available divergence claims change? Write one sentence on what this implies about anyone who chooses $k$ after looking.

5. Verify the disciplined result: exit at 61.48 gives 16.28 on a 45.20 basis (36.02%, 75.20% of the 21.65 move) against 53.35 giving 8.15 (18.03%, 37.64%). Confirm the discipline was worth 8.13 a share, 15.24% on the exit price.

6. Now verify the concession: acting on D4 alone would have exited at 64.32, beating the disciplined exit by 2.84 a share or 6.28 percentage points. Write three sentences explaining why the disciplined rule is still correct despite this.

7. Take your name from exercise 2 and recompute RSI under all three seeding conventions from Chapter 36. At each pivot, report the three values and the spread. **Does any divergence in your sample change sign?** On ROSHANPOLY, D1 exists under Wilder (−1.3645) and does not exist under a simple 14-bar average (+2.8169).

8. Flag every session in your sample that closed at a circuit limit. Recompute the oscillator with those bars excluded and with them included. Report the largest change in $\\Delta O$ at any pivot pair, and compare it to the 3.4555-point band artefact of §44.4.7.

9. Find a floor-price window in a DSE name's history. Compute RSI(14) across it. What does it read, and how many sessions after the window reopens does it take before the reading is meaningful again? Write the exclusion rule you will use permanently.

10. Locate one sustained decline of at least twenty sessions in your data. **How many bullish divergences appeared?** On ROSHANPOLY the answer was zero across 26 sessions and a fall from 66.85 to 52.40, with RSI below 30 for 17 consecutive sessions. State what your plan does when the signal you are waiting for never arrives.

11. For every divergence in your sample, record the trigger level (the prior swing low), whether the trigger fired, and how many sessions later. Report the fraction that never triggered. On ROSHANPOLY it was three of four.

12. Rank your recorded divergences by $\\mathcal{D}$ and separately by whether they preceded a turn. Compute the rank correlation. If it is near zero or negative — as it is on ROSHANPOLY, where the largest was wrong and the smallest right — write down what that means for position sizing.

13. Take one bullish regular divergence you can find on a DSE chart, define its trigger as a close above the prior swing high, and price the trade with a Chapter 30 stop at $S_{\\text{prior low}} - 0.5\\,ATR$. Report $R{:}R$ and $p^{*} = 1/(1+R{:}R)$. **This is the only divergence trade this chapter permits you to enter.**`,
      bn: `১. ROSHANPOLY-র পাঁচটি পিভট পুনর্নির্মাণ করুন ও চারটি সন্নিহিত সংকেত নিশ্চিত করুন: ২৩, ২৮, ৩১ ও ২৬ সেশনের ব্যবধানে $\\Delta RSI$ যথাক্রমে −১.৩৬৪৫, −৩.৫৪৮৬, −৪.৭৭৯৬, −২.৫১৪৯। যাচাই করুন $\\mathcal{D} = 3.3001,\\, 4.4770,\\, 3.0803,\\, 1.4754$।

২. **গত দুই বছরে যেকোনো ডিএসই নামের একটি টেকসই অগ্রগমন নিন এবং গুনুন মোড় ঘোরার সঙ্গে মিলে যাওয়া সংকেতটির আগে RSI(১৪)-র বিপরীতে বেয়ারিশ ডাইভারজেন্স কতবার বেজেছিল।** প্রতিবারের দাম ও শেষ শীর্ষের দাম লিপিবদ্ধ করুন। তারপর গণনা করুন প্রথম ডাইভারজেন্সে বেরিয়ে আসা নিয়ম কত আয় করত বনাম কাঠামো ভাঙন পর্যন্ত ধরে রাখা। **এই তালিকার আর কিছু পড়ার আগে এটি করুন।**

৩. একই অগ্রগমনের জন্য $k=4$-এ প্রতিটি সুইং হাই তালিকাভুক্ত করুন, $\\binom{n}{2}$ গুনুন, ও জানান ঐ জোড়াগুলোর কতগুলো বেয়ারিশ শর্ত পূরণ করে। তারপর সুইং লো ও হিডেন বুলিশ ডাইভারজেন্সের জন্য একই কাজ করুন। আপনার মোট সংকেত সংখ্যা কত, আর কতগুলো কোন দিকে নির্দেশ করে?

৪. অনুশীলনী ৩ আবার করুন $k=3$ ও $k=6$-এ। প্রতিটি কতগুলো পিভট দেয়, আর প্রাপ্য ডাইভারজেন্স-দাবির সংখ্যা কত গুণ বদলায়? যিনি দেখার পর $k$ বাছেন তাঁর সম্পর্কে এটি কী বোঝায় — এক বাক্যে লিখুন।

৫. শৃঙ্খলাবদ্ধ ফলটি যাচাই করুন: ৬১.৪৮-এ প্রস্থান ৪৫.২০ ভিত্তিতে দেয় ১৬.২৮ (৩৬.০২%, ২১.৬৫ চলাচলের ৭৫.২০%) বনাম ৫৩.৩৫ দেয় ৮.১৫ (১৮.০৩%, ৩৭.৬৪%)। নিশ্চিত করুন শৃঙ্খলার মূল্য ছিল শেয়ারপ্রতি ৮.১৩, প্রস্থান দামের ১৫.২৪%।

৬. এবার স্বীকারোক্তিটি যাচাই করুন: কেবল D4-তে কাজ করলে প্রস্থান হতো ৬৪.৩২-এ, শৃঙ্খলাবদ্ধ প্রস্থানকে শেয়ারপ্রতি ২.৮৪ বা ৬.২৮ শতাংশ-বিন্দুতে হারিয়ে। এরপরও শৃঙ্খলাবদ্ধ নিয়মটি কেন সঠিক তা তিন বাক্যে ব্যাখ্যা করুন।

৭. অনুশীলনী ২-এর নামটি নিয়ে অধ্যায় ৩৬-এর তিনটি বীজায়ন প্রথাতেই RSI পুনর্গণনা করুন। প্রতিটি পিভটে তিনটি মান ও বিস্তার জানান। **আপনার নমুনার কোনো ডাইভারজেন্স কি চিহ্ন বদলায়?** ROSHANPOLY-তে D1 ওয়াইল্ডারে আছে (−১.৩৬৪৫) ও সরল ১৪-বার গড়ে নেই (+২.৮১৬৯)।

৮. আপনার নমুনার প্রতিটি সেশন চিহ্নিত করুন যেটি সার্কিট সীমায় বন্ধ হয়েছে। ঐ বারগুলো বাদ দিয়ে ও রেখে অসিলেটর পুনর্গণনা করুন। যেকোনো পিভট জোড়ায় $\\Delta O$-র সবচেয়ে বড় পরিবর্তন জানান, ও §৪৪.৪.৭-এর ৩.৪৫৫৫ পয়েন্টের ব্যান্ড-কৃত্রিমতার সঙ্গে তুলনা করুন।

৯. কোনো ডিএসই নামের ইতিহাসে একটি ফ্লোর-প্রাইস জানালা খুঁজুন। তার ওপর দিয়ে RSI(১৪) গণনা করুন। এটি কী পড়ে, আর জানালা খোলার কত সেশন পরে পাঠটি আবার অর্থবহ হয়? স্থায়ীভাবে যে বর্জন-নিয়ম ব্যবহার করবেন তা লিখুন।

১০. আপনার উপাত্তে অন্তত কুড়ি সেশনের একটি টেকসই পতন খুঁজুন। **কতগুলো বুলিশ ডাইভারজেন্স দেখা দিল?** ROSHANPOLY-তে উত্তর ছিল ২৬ সেশনে শূন্য, আর দাম ৬৬.৮৫ থেকে ৫২.৪০-এ, RSI টানা ১৭ সেশন ৩০-এর নিচে। আপনি যে সংকেতের অপেক্ষায় আছেন তা কখনো না এলে আপনার পরিকল্পনা কী করে, বলুন।

১১. আপনার নমুনার প্রতিটি ডাইভারজেন্সের জন্য ট্রিগার লেভেল (আগের সুইং লো), ট্রিগার বেজেছিল কি না, ও কত সেশন পরে — লিপিবদ্ধ করুন। কত ভগ্নাংশ কখনো ট্রিগার করেনি তা জানান। ROSHANPOLY-তে তা ছিল চারটির তিনটি।

১২. আপনার লিপিবদ্ধ ডাইভারজেন্সগুলোকে $\\mathcal{D}$ অনুযায়ী এবং আলাদাভাবে মোড় ঘোরার আগে এসেছিল কি না অনুযায়ী সাজান। ক্রম-সহসম্বন্ধ গণনা করুন। তা শূন্যের কাছে বা ঋণাত্মক হলে — ROSHANPOLY-তে যেমন, যেখানে সবচেয়ে বড়টি ভুল ও সবচেয়ে ছোটটি ঠিক — পজিশনের আকারের জন্য এর অর্থ কী তা লিখুন।

১৩. কোনো ডিএসই চার্টে একটি বুলিশ রেগুলার ডাইভারজেন্স খুঁজুন, তার ট্রিগারকে আগের সুইং হাইয়ের ওপরে একটি ক্লোজ হিসেবে সংজ্ঞায়িত করুন, ও $S_{\\text{আগের লো}} - 0.5\\,ATR$-এ অধ্যায় ৩০-এর স্টপ দিয়ে ট্রেডটির দাম হিসাব করুন। $R{:}R$ ও $p^{*} = 1/(1+R{:}R)$ জানান। **এই অধ্যায় আপনাকে যে একমাত্র ডাইভারজেন্স ট্রেডে ঢোকার অনুমতি দেয় তা এটিই।**`,
    },

    summary: {
      en: `- **Divergence claims one thing and one thing only: a new price extreme was reached at a lower rate of change of participation.** It is a description of deceleration, not a forecast of reversal. A decelerating advance is still an advance, and there is no arithmetic law forcing it to turn.
- **In a strong trend divergence fires repeatedly and early.** On ROSHANPOLY it fired four times across a 108-session advance — $\\Delta RSI$ of −1.3645, −3.5486, −4.7796 and −2.5149 — and **exactly one preceded the top.** The three that failed were followed by further gains of 11.75, 6.30 and 2.55 taka.
- **A rule cannot choose the good one.** "Exit on bearish divergence" fires at D1 and sells at 53.35: **8.15 a share, 18.03% on a 45.20 basis, and 37.64% of the 21.65 available.** The 42.30% sitting on the D4 row is available only to hindsight, which is why every annotated screenshot features it.
- **Divergence arms; price structure fires.** Gating the same four signals on a close below the prior swing low left only D4 actionable — trigger at 62.00, executed at **61.48 on session 143**: 16.28 a share, **36.02% and 75.20% of the move.** The discipline was worth **8.13 a share, 15.24% on the exit price**, and it doubled the fraction of the advance captured.
- **The discipline is not free, and the honest number is 2.84.** Acting on D4 alone would have exited at 64.32 and beaten the trigger by 2.84 a share, or 6.28 percentage points. You give that up on the one occasion the signal is right, to avoid giving up eighteen points on the three occasions it is wrong.
- **The pivot-selection problem is the chapter's central honesty issue, and it is arithmetic.** Five swing highs give $\\binom{5}{2}=10$ pairs and **all ten satisfy bearish divergence**; four swing lows give six pairs and **all six satisfy hidden bullish divergence.** **Sixteen technically valid signals from one advance, ten saying sell and six saying hold.** Fix $k$ before you look, use adjacent pivots only, and declare the pair before the outcome.
- **Magnitude does not rank truth.** $\\mathcal{D} = 3.3001,\\, 4.4770,\\, 3.0803,\\, 1.4754$: **the largest was wrong and the smallest was right.** Use $\\mathcal{D}\\ge 1$ as a noise floor and never as a position size.
- **Two readings are not independent unless they are far enough apart.** Require $\\tau \\ge 10$ on RSI(14). At three sessions' separation the two values share $1-3/27 = 0.8889$ of their inputs; the four signals here ran 23, 28, 31 and 26 sessions apart.
- **The oscillator is not "the" oscillator.** At session 49 Wilder, simple-14 and standard-EMA seeds read **87.5554, 100.0000 and 94.6616** — a 12.4446-point spread — and D1 exists under Wilder (−1.3645) but **does not exist at all** under the simple average (+2.8169). Check warm-up too: MACD(12,26,9) needs 35 sessions and its histogram is exactly **0.0000 at session 25 by seeding**, not by market fact.
- **The DSE distorts divergence more than it distorts anything else in Part III.** The ±10% band alone shifted RSI by **3.4555 points in the §44.4.7 illustration — 2.532× the 1.3645 that made D1 a divergence.** Floor-price windows drive $U_t = D_t = 0$ and Wilder's ratio to $0/0$: there the oscillator is **undefined, not weak.** Thin float makes a swing high a single order. Flag, exclude, and require volume at the pivot per Chapter 40.
- **Absence of a signal is not a signal.** From the top ROSHANPOLY fell 26 sessions to 52.40 with **no bullish divergence at any point**, RSI running 76.7123 to 9.9715 and sitting below 30 for 17 consecutive sessions while price lost a further 13.97%. Have a branch in the plan for the case where the thing you are waiting for never happens.
- **On this exchange a bearish divergence is never a short.** It permits exactly three moves: stop adding, tighten the stop to the structure level, exit on the trigger. **Bullish regular divergence is the more useful family here**, because the action it licenses is one the market will accept — and Chapter 45 is the only place where a divergence reading is allowed to touch a position size.`,
      bn: `- **ডাইভারজেন্স একটিমাত্র জিনিস দাবি করে: একটি নতুন দাম-প্রান্তে পৌঁছানো হয়েছে অংশগ্রহণের নিম্নতর পরিবর্তন-হারে।** এটি মন্দনের বর্ণনা, উল্টে যাওয়ার পূর্বাভাস নয়। মন্দিত অগ্রগমন এখনো অগ্রগমন, আর তাকে ঘুরতে বাধ্য করার কোনো পাটিগণিতীয় বিধি নেই।
- **শক্তিশালী ট্রেন্ডে ডাইভারজেন্স বারবার ও আগেভাগে বাজে।** ROSHANPOLY-তে ১০৮-সেশনের অগ্রগমনজুড়ে এটি চারবার বেজেছে — $\\Delta RSI$ যথাক্রমে −১.৩৬৪৫, −৩.৫৪৮৬, −৪.৭৭৯৬ ও −২.৫১৪৯ — আর **ঠিক একটি শীর্ষের আগে এসেছে।** যে তিনটি ব্যর্থ হয়েছে তাদের পরে যথাক্রমে ১১.৭৫, ৬.৩০ ও ২.৫৫ টাকা আরও লাভ হয়েছে।
- **কোনো নিয়ম ভালোটিকে বেছে নিতে পারে না।** "বেয়ারিশ ডাইভারজেন্সে বেরিয়ে আসুন" D1-এ বেজে ৫৩.৩৫-এ বিক্রি করে: **শেয়ারপ্রতি ৮.১৫, ৪৫.২০ ভিত্তিতে ১৮.০৩%, আর প্রাপ্য ২১.৬৫-এর ৩৭.৬৪%।** D4 সারিতে বসা ৪২.৩০% কেবল পশ্চাদ্দৃষ্টির কাছে প্রাপ্য, আর তাই প্রতিটি চিহ্নিত স্ক্রিনশটে সেটিই থাকে।
- **ডাইভারজেন্স অস্ত্র তোলে; দাম-কাঠামো ছোড়ে।** একই চারটি সংকেতকে আগের সুইং লো-র নিচে ক্লোজ দিয়ে নিয়ন্ত্রিত করলে কেবল D4 কার্যকর থাকে — ট্রিগার ৬২.০০, নির্বাহ **সেশন ১৪৩-এ ৬১.৪৮**: শেয়ারপ্রতি ১৬.২৮, **৩৬.০২% ও চলাচলের ৭৫.২০%।** শৃঙ্খলার মূল্য ছিল **শেয়ারপ্রতি ৮.১৩, প্রস্থান দামের ১৫.২৪%**, আর তা ধরা অগ্রগমনের ভগ্নাংশ দ্বিগুণ করেছে।
- **শৃঙ্খলা বিনামূল্যে নয়, আর সৎ সংখ্যাটি ২.৮৪।** কেবল D4-তে কাজ করলে প্রস্থান হতো ৬৪.৩২-এ ও ট্রিগারকে শেয়ারপ্রতি ২.৮৪, অর্থাৎ ৬.২৮ শতাংশ-বিন্দুতে হারাত। সংকেত যে একবার ঠিক সেই একবারে আপনি তা ছাড়েন, যাতে যে তিনবার ভুল সেই তিনবারে আঠারো পয়েন্ট ছাড়তে না হয়।
- **পিভট-নির্বাচনের সমস্যাই অধ্যায়ের কেন্দ্রীয় সততার প্রশ্ন, আর তা পাটিগণিত।** পাঁচটি সুইং হাই $\\binom{5}{2}=10$ জোড়া দেয় আর **দশটিই বেয়ারিশ ডাইভারজেন্স পূরণ করে**; চারটি সুইং লো ছয় জোড়া দেয় আর **ছয়টিই হিডেন বুলিশ ডাইভারজেন্স পূরণ করে।** **একটি অগ্রগমন থেকে ষোলোটি কারিগরিভাবে বৈধ সংকেত, দশটি বলছে বিক্রি করুন ও ছয়টি বলছে ধরে রাখুন।** তাকানোর আগে $k$ স্থির করুন, কেবল সন্নিহিত পিভট ব্যবহার করুন, আর ফলাফলের আগে জোড়াটি ঘোষণা করুন।
- **মাত্রা সত্যের ক্রম দেয় না।** $\\mathcal{D} = 3.3001,\\, 4.4770,\\, 3.0803,\\, 1.4754$: **সবচেয়ে বড়টি ভুল আর সবচেয়ে ছোটটি ঠিক।** $\\mathcal{D}\\ge 1$ গোলমালের মেঝে হিসেবে ব্যবহার করুন, কখনো পজিশনের আকার হিসেবে নয়।
- **যথেষ্ট দূরে না হলে দুটি পাঠ স্বতন্ত্র নয়।** RSI(১৪)-তে $\\tau \\ge 10$ দাবি করুন। তিন সেশনের ব্যবধানে দুটি মান তাদের ইনপুটের $1-3/27 = 0.8889$ ভাগ করে; এখানকার চারটি সংকেত ছিল ২৩, ২৮, ৩১ ও ২৬ সেশন দূরে।
- **অসিলেটরটি "সেই" অসিলেটর নয়।** সেশন ৪৯-এ ওয়াইল্ডার, সরল-১৪ ও প্রমিত-EMA বীজ পড়ে **৮৭.৫৫৫৪, ১০০.০০০০ ও ৯৪.৬৬১৬** — ১২.৪৪৪৬ পয়েন্টের বিস্তার — আর D1 ওয়াইল্ডারে আছে (−১.৩৬৪৫) কিন্তু সরল গড়ে **আদৌ নেই** (+২.৮১৬৯)। ওয়ার্ম-আপও দেখুন: MACD(১২,২৬,৯)-র দরকার ৩৫ সেশন আর তার হিস্টোগ্রাম **সেশন ২৫-এ ঠিক ০.০০০০, বীজায়নের কারণে**, বাজারের কারণে নয়।
- **তৃতীয় পর্বের অন্য যেকোনো কিছুর চেয়ে ডিএসই ডাইভারজেন্সকে বেশি বিকৃত করে।** §৪৪.৪.৭-এর দৃষ্টান্তে কেবল ±১০% ব্যান্ডই RSI **৩.৪৫৫৫ পয়েন্ট সরিয়েছে — যা D1-কে ডাইভারজেন্স বানানো ১.৩৬৪৫-এর ২.৫৩২×।** ফ্লোর-প্রাইস জানালা $U_t = D_t = 0$ ও ওয়াইল্ডারের অনুপাতকে $0/0$-তে নেয়: সেখানে অসিলেটর **অসংজ্ঞায়িত, দুর্বল নয়।** পাতলা ফ্লোট একটি সুইং হাইকে একটিমাত্র অর্ডারে পরিণত করে। চিহ্নিত করুন, বাদ দিন, আর অধ্যায় ৪০ অনুযায়ী পিভটে ভলিউম দাবি করুন।
- **সংকেতের অনুপস্থিতি সংকেত নয়।** শীর্ষ থেকে ROSHANPOLY ২৬ সেশনে ৫২.৪০-এ নেমেছে **কোথাও কোনো বুলিশ ডাইভারজেন্স ছাড়াই**, RSI ৭৬.৭১২৩ থেকে ৯.৯৭১৫-এ গেছে ও টানা ১৭ সেশন ৩০-এর নিচে বসেছে, এই সময়ে দাম আরও ১৩.৯৭% হারিয়েছে। আপনি যার অপেক্ষায় আছেন তা কখনো না ঘটলে কী হবে — পরিকল্পনায় তার একটি শাখা রাখুন।
- **এই এক্সচেঞ্জে বেয়ারিশ ডাইভারজেন্স কখনো শর্ট নয়।** এটি ঠিক তিনটি পদক্ষেপের অনুমতি দেয়: যোগ করা বন্ধ, স্টপ কাঠামোর লেভেলে আঁটসাঁট, ট্রিগারে প্রস্থান। **এখানে বুলিশ রেগুলার ডাইভারজেন্সই বেশি কাজের পরিবার**, কারণ এটি যে কাজের অনুমতি দেয় বাজার তা গ্রহণ করবে — আর অধ্যায় ৪৫-ই একমাত্র জায়গা যেখানে একটি ডাইভারজেন্স পাঠকে পজিশনের আকার স্পর্শ করার অনুমতি দেওয়া হয়।`,
    },
  },

  interview: [
    {
      q: {
        en: 'A trader shows you a chart with a bearish divergence marked at the top and says the indicator called the reversal. What do you ask him?',
        bn: 'একজন ট্রেডার আপনাকে শীর্ষে বেয়ারিশ ডাইভারজেন্স চিহ্নিত একটি চার্ট দেখিয়ে বলেন নির্দেশকটি উল্টে যাওয়ার কথা বলে দিয়েছিল। আপনি তাঁকে কী জিজ্ঞেস করবেন?',
      },
      a: {
        en: 'I ask him how many times it fired before that one, and I ask him to show me the same chart with all of them marked. That is the whole conversation, because in a strong trend divergence is not a rare event — it is a structural consequence of the advance. The biggest momentum reading almost always comes in the first impulse, when the buying cohort is largest and the base is closest, so every subsequent high is made on lower momentum by construction. On the case I work through, a hundred and eight sessions of advance produced four separate bearish divergences on the fourteen-period RSI, at declines of one point three six four five, three point five four eight six, four point seven seven nine six and two point five one four nine points. Exactly one of them preceded the top. The other three were each followed by more upside — eleven seventy-five, six thirty and two fifty-five taka respectively. Now the crucial point: a trading rule that says exit on bearish divergence does not get to pick the fourth one. It fires on the first one it sees, which on my data means selling at fifty-three thirty-five for eighteen point zero three percent, capturing thirty-seven point six four percent of the move that was available. The forty-two point three percent that the fourth signal offers is not available to any rule; it is available only to a screenshot taken afterwards. So when someone shows me the annotated top, what I am actually looking at is the survivor of a series, and the three that cost money were cropped out of the frame before I ever saw it.',
        bn: 'আমি জিজ্ঞেস করব ওটির আগে এটি কতবার বেজেছিল, আর তাঁকে বলব সবগুলো চিহ্নিত করে একই চার্ট দেখাতে। কথোপকথন এটুকুই, কারণ শক্তিশালী ট্রেন্ডে ডাইভারজেন্স বিরল ঘটনা নয় — এটি অগ্রগমনেরই একটি গঠনগত পরিণতি। সবচেয়ে বড় মোমেন্টাম পাঠ প্রায় সবসময় আসে প্রথম ইমপালসে, যখন ক্রেতার দল সবচেয়ে বড় ও ভিত্তি সবচেয়ে কাছে, তাই পরবর্তী প্রতিটি উচ্চতা গঠনগতভাবেই নিম্নতর মোমেন্টামে তৈরি হয়। আমি যে কেসটি নিয়ে কাজ করি, সেখানে একশো আট সেশনের অগ্রগমন চোদ্দ-পর্বের RSI-তে চারটি আলাদা বেয়ারিশ ডাইভারজেন্স তৈরি করেছে, পতন যথাক্রমে এক দশমিক তিন ছয় চার পাঁচ, তিন দশমিক পাঁচ চার আট ছয়, চার দশমিক সাত সাত নয় ছয় ও দুই দশমিক পাঁচ এক চার নয় পয়েন্ট। ঠিক একটি শীর্ষের আগে এসেছে। বাকি তিনটির প্রত্যেকটির পরেই আরও ঊর্ধ্বগতি এসেছে — যথাক্রমে এগারো পঁচাত্তর, ছয় ত্রিশ ও দুই পঞ্চান্ন টাকা। এখন নির্ণায়ক কথাটি: যে ট্রেডিং নিয়ম বলে বেয়ারিশ ডাইভারজেন্সে বেরিয়ে আসুন, সে চতুর্থটি বাছতে পারে না। সে যেটি প্রথম দেখে সেটিতেই বাজে, যা আমার উপাত্তে মানে তিপ্পান্ন পঁয়ত্রিশে বিক্রি, আঠারো দশমিক শূন্য তিন শতাংশে, প্রাপ্য চলাচলের সাঁইত্রিশ দশমিক ছয় চার শতাংশ ধরে। চতুর্থ সংকেত যে বিয়াল্লিশ দশমিক তিন শতাংশ দেয় তা কোনো নিয়মের কাছে প্রাপ্য নয়; তা কেবল পরে তোলা একটি স্ক্রিনশটের কাছে প্রাপ্য। তাই কেউ যখন আমাকে চিহ্নিত শীর্ষটি দেখান, আমি আসলে একটি ধারার বেঁচে যাওয়া সদস্যটিকে দেখছি, আর যে তিনটি টাকা খরচ করিয়েছিল সেগুলো আমার চোখে পড়ার আগেই ফ্রেম থেকে কেটে বাদ দেওয়া হয়েছে।',
      },
    },
    {
      q: {
        en: 'You keep saying divergence is only as objective as the two pivots you picked. Make that concrete.',
        bn: 'আপনি বারবার বলছেন ডাইভারজেন্স ঠিক ততটাই বস্তুনিষ্ঠ যতটা আপনার বাছা দুটি পিভট। এটি বাস্তব করে দেখান।',
      },
      a: {
        en: 'On the advance I work through there are five swing highs under a fixed four-bar pivot rule. Five points admit ten distinct pairs, and every single one of those ten satisfies the bearish divergence condition — price higher, RSI lower — so a trader who wants to be bearish can produce ten independent-looking charts from one stock. Now do the mirror image. The same advance has four swing lows, which admit six pairs, and all six show higher lows in price against lower lows in RSI, which is the definition of hidden bullish divergence, a continuation signal pointing the other way. So one advance yields sixteen technically valid divergence readings, ten of them saying sell and six of them saying hold on, and not one of them is a misreading. They all satisfy their definitions exactly. That is not a pathology of a badly chosen example; it is what divergence is. And it gets worse, because the number of pivots is itself a function of the window you choose — shrink the pivot half-window and pivots multiply, widen it and they vanish — so an analyst free to pick the window after seeing the chart controls how many claims are available and therefore controls the conclusion. My defence is three rules, all fixed before I look. I write down the half-window and apply it to every name I screen. I use adjacent pivots only, which cuts ten claims to four. And I log the pair, the two oscillator readings and the bar separation at the moment the right-hand pivot confirms, not after the outcome is known. A divergence identified after the reversal is not a signal; it is a caption.',
        bn: 'আমি যে অগ্রগমনটি নিয়ে কাজ করি সেখানে স্থির চার-বার পিভট নিয়মে পাঁচটি সুইং হাই আছে। পাঁচটি বিন্দু দশটি ভিন্ন জোড়া দেয়, আর ঐ দশটির প্রত্যেকটিই বেয়ারিশ ডাইভারজেন্সের শর্ত পূরণ করে — দাম উঁচু, RSI নিচু — তাই যে ট্রেডার বেয়ারিশ হতে চান তিনি একটি শেয়ার থেকে দশটি স্বতন্ত্র-দেখতে চার্ট বানাতে পারেন। এবার দর্পণ-প্রতিবিম্বটি দেখুন। একই অগ্রগমনে চারটি সুইং লো আছে, যা ছয়টি জোড়া দেয়, আর ছয়টিই দামে উচ্চতর তল ও RSI-তে নিম্নতর তল দেখায়, যা হিডেন বুলিশ ডাইভারজেন্সের সংজ্ঞা, উল্টো দিকে নির্দেশ করা একটি ধারাবাহিকতার সংকেত। তাই একটি অগ্রগমন ষোলোটি কারিগরিভাবে বৈধ ডাইভারজেন্স পাঠ দেয়, তার দশটি বলে বিক্রি করুন ও ছয়টি বলে ধরে রাখুন, আর একটিও ভুল পাঠ নয়। সবগুলোই তাদের সংজ্ঞা হুবহু পূরণ করে। এটি একটি বাজে বাছাই করা উদাহরণের ব্যাধি নয়; ডাইভারজেন্স জিনিসটাই এই। আর অবস্থা আরও খারাপ, কারণ পিভটের সংখ্যা নিজেই আপনার বাছা জানালার একটি ফাংশন — পিভটের অর্ধ-জানালা ছোট করুন, পিভট বাড়ে; বড় করুন, উবে যায় — তাই চার্ট দেখার পর জানালা বাছার স্বাধীনতা যাঁর, তিনি কতগুলো দাবি পাওয়া যাবে তা নিয়ন্ত্রণ করেন, তাই সিদ্ধান্তটিও নিয়ন্ত্রণ করেন। আমার প্রতিরক্ষা তিনটি নিয়ম, সবই তাকানোর আগে স্থির করা। আমি অর্ধ-জানালাটি লিখে ফেলি ও স্ক্রিন করা প্রতিটি নামে তা প্রয়োগ করি। আমি কেবল সন্নিহিত পিভট ব্যবহার করি, যা দশটি দাবিকে চারটিতে নামায়। আর ডান পিভট নিশ্চিত হওয়ার মুহূর্তেই জোড়াটি, দুটি অসিলেটর পাঠ ও বার-ব্যবধান লিপিবদ্ধ করি, ফলাফল জানার পরে নয়। উল্টে যাওয়ার পর শনাক্ত করা ডাইভারজেন্স সংকেত নয়; ক্যাপশন।',
      },
    },
    {
      q: {
        en: 'Quantify what the confirmation requirement is actually worth, and be honest about what it costs.',
        bn: 'নিশ্চিতকরণের শর্তটির প্রকৃত মূল্য কত তা পরিমাণে বলুন, আর তার খরচ নিয়ে সৎ থাকুন।',
      },
      a: {
        en: 'Take a holder long from forty-five twenty on my worked case, with the full move to the top worth twenty-one sixty-five a share. Trading divergence alone means exiting at the first signal, which after the four-session confirmation lag on the pivot executes at fifty-three thirty-five — that is eight fifteen a share, eighteen point zero three percent, and thirty-seven point six four percent of the available move. Now gate exactly the same four signals on a price trigger, defined as a close below the prior swing low, which is Chapter thirty structure and Chapter thirty-one trend logic. Three of the four never trigger at all — the levels at forty-five twenty and fifty-one eighty were never lost, and the fifty-seven sixty level only broke forty-two sessions after its pivot, long past the top. The fourth triggers nine sessions after its pivot, at sixty-one forty-eight. That exit is sixteen twenty-eight a share, thirty-six point zero two percent, and seventy-five point two percent of the move. So the discipline was worth eight point one three taka a share, which is fifteen point two four percent on the exit price, and it doubled the fraction of the advance captured. Now the honest part, because a rule you only show at its best is propaganda. Acting on the fourth divergence alone would have exited at sixty-four thirty-two and beaten the disciplined exit by two point eight four taka, or six point two eight percentage points of return. The confirmation requirement is not free — it gives back part of the top by construction, because it waits for price to prove the warning instead of trusting it. What you buy with that two eighty-four is the avoidance of the first three. Give up six point two eight points on the one occasion the signal is right, to avoid the gap between eighteen and thirty-six on the three occasions it is wrong. With one correct signal in four, that exchange is not close, and no version of the world tells you in advance that the fourth one is the fourth one.',
        bn: 'আমার কার্যকরী কেসে পঁয়তাল্লিশ কুড়ি থেকে লং একজন হোল্ডার নিন, শীর্ষ পর্যন্ত পূর্ণ চলাচলের মূল্য শেয়ারপ্রতি একুশ পঁয়ষট্টি। কেবল ডাইভারজেন্স ট্রেড করা মানে প্রথম সংকেতেই বেরিয়ে আসা, যা পিভটে চার-সেশনের নিশ্চিতকরণ বিলম্বের পর তিপ্পান্ন পঁয়ত্রিশে নির্বাহ হয় — তা শেয়ারপ্রতি আট পনেরো, আঠারো দশমিক শূন্য তিন শতাংশ, আর প্রাপ্য চলাচলের সাঁইত্রিশ দশমিক ছয় চার শতাংশ। এবার ঠিক ঐ চারটি সংকেতকেই একটি দাম-ট্রিগার দিয়ে নিয়ন্ত্রিত করুন, যা সংজ্ঞায়িত আগের সুইং লো-র নিচে একটি ক্লোজ হিসেবে, যা অধ্যায় ত্রিশের কাঠামো ও অধ্যায় একত্রিশের ট্রেন্ড যুক্তি। চারটির তিনটি কখনো ট্রিগারই করে না — পঁয়তাল্লিশ কুড়ি ও একান্ন আশির লেভেল কখনো হারায়নি, আর সাতান্ন ষাটের লেভেল ভেঙেছে তার পিভটের বিয়াল্লিশ সেশন পরে, শীর্ষের অনেক পরে। চতুর্থটি ট্রিগার করে তার পিভটের নয় সেশন পরে, একষট্টি আটচল্লিশে। ঐ প্রস্থান শেয়ারপ্রতি ষোলো আটাশ, ছত্রিশ দশমিক শূন্য দুই শতাংশ, আর চলাচলের পঁচাত্তর দশমিক দুই শতাংশ। তাই শৃঙ্খলার মূল্য ছিল শেয়ারপ্রতি আট দশমিক এক তিন টাকা, যা প্রস্থান দামের পনেরো দশমিক দুই চার শতাংশ, আর তা ধরা অগ্রগমনের ভগ্নাংশ দ্বিগুণ করেছে। এবার সৎ অংশটি, কারণ যে নিয়ম আপনি কেবল তার সেরা চেহারায় দেখান তা প্রচারণা। কেবল চতুর্থ ডাইভারজেন্সে কাজ করলে প্রস্থান হতো চৌষট্টি বত্রিশে, শৃঙ্খলাবদ্ধ প্রস্থানকে দুই দশমিক আট চার টাকা, অর্থাৎ রিটার্নের ছয় দশমিক দুই আট শতাংশ-বিন্দুতে হারিয়ে। নিশ্চিতকরণের শর্ত বিনামূল্যে নয় — এটি গঠনগতভাবেই শীর্ষের একটি অংশ ফিরিয়ে দেয়, কারণ এটি সতর্কবার্তায় ভরসা না করে দামের প্রমাণের অপেক্ষা করে। ঐ দুই চুরাশি দিয়ে আপনি কিনছেন প্রথম তিনটি এড়ানো। সংকেত যে একবার ঠিক সেই একবারে ছয় দশমিক দুই আট পয়েন্ট ছাড়ুন, যাতে যে তিনবার ভুল সেই তিনবারে আঠারো ও ছত্রিশের ব্যবধানটি এড়ানো যায়। চারটিতে একটি সঠিক সংকেত থাকলে এই বিনিময় প্রতিদ্বন্দ্বিতাপূর্ণও নয়, আর এমন কোনো জগৎ নেই যা আপনাকে আগে থেকে বলে যে চতুর্থটিই চতুর্থ।',
      },
    },
    {
      q: {
        en: 'Two analysts look at the same closes and disagree about whether a divergence exists. How is that possible?',
        bn: 'দুজন বিশ্লেষক একই ক্লোজ দেখে দ্বিমত করেন যে ডাইভারজেন্স আছে কি না। এটি কীভাবে সম্ভব?',
      },
      a: {
        en: 'Very easily, and there are three separate mechanisms, all of which I have measured on the same data. The first is that different oscillators disagree. On my first signal the fourteen-period RSI made a lower high while the MACD line made a higher high, plus zero point two one seven eight, so the divergence exists on one indicator and simply does not exist on the other. The second mechanism is that the same indicator, computed with different seeding conventions, disagrees with itself. Chapter thirty-six sets out three defensible ways to initialise Wilder\'s RSI, and at the right-hand pivot of my first signal those three read eighty-seven point five five five four, one hundred point zero zero zero zero, and ninety-four point six six one six — a spread of twelve point four four four six RSI points on identical closes. Under Wilder\'s own recursion the change across the pair is minus one point three six four five, which is a divergence. Under a simple rolling fourteen-bar average it is plus two point eight one six nine, which is not a divergence at all. Same closes, same indicator name, opposite conclusions, and the difference is buried in a platform setting neither analyst has looked at. The third mechanism is warm-up. My left pivot sits at session twenty-six. That is past the fourteen changes the RSI needs, but nowhere near the thirty-five sessions the MACD needs before its signal line is meaningful — in fact the histogram is exactly zero at session twenty-five purely because that is where the signal line was seeded equal to the MACD line. So the MACD reading that appears to contradict my first divergence is not a contradiction; it is an initialisation artefact, and the correct entry in the log is that MACD has no opinion at that pivot. The practical rule I draw from all three is simple: before arguing with anyone about a divergence, establish that you are both computing the same oscillator, and that the left anchor is past warm-up.',
        bn: 'খুব সহজেই, আর তিনটি আলাদা প্রক্রিয়া আছে, আর তিনটিই আমি একই উপাত্তে মেপেছি। প্রথমটি হলো ভিন্ন অসিলেটর ভিন্ন কথা বলে। আমার প্রথম সংকেতে চোদ্দ-পর্বের RSI নিম্নতর উচ্চতা করেছে অথচ MACD লাইন উচ্চতর উচ্চতা করেছে, যোগ শূন্য দশমিক দুই এক সাত আট, তাই ডাইভারজেন্সটি এক নির্দেশকে আছে ও অন্যটিতে কেবল নেই। দ্বিতীয় প্রক্রিয়া হলো একই নির্দেশক, ভিন্ন বীজায়ন প্রথায় গণিত, নিজের সঙ্গেই দ্বিমত করে। অধ্যায় ছত্রিশ ওয়াইল্ডারের RSI শুরু করার তিনটি সমর্থনযোগ্য উপায় দেয়, আর আমার প্রথম সংকেতের ডান পিভটে ঐ তিনটি পড়ে সাতাশি দশমিক পাঁচ পাঁচ পাঁচ চার, একশো দশমিক শূন্য শূন্য শূন্য শূন্য, আর চুরানব্বই দশমিক ছয় ছয় এক ছয় — অভিন্ন ক্লোজে বারো দশমিক চার চার চার ছয় RSI পয়েন্টের বিস্তার। ওয়াইল্ডারের নিজস্ব পুনরাবৃত্তিতে জোড়াটির পরিবর্তন ঋণাত্মক এক দশমিক তিন ছয় চার পাঁচ, যা একটি ডাইভারজেন্স। একটি সরল চলমান চোদ্দ-বার গড়ে তা ধনাত্মক দুই দশমিক আট এক ছয় নয়, যা মোটেই ডাইভারজেন্স নয়। একই ক্লোজ, একই নির্দেশকের নাম, বিপরীত সিদ্ধান্ত, আর পার্থক্যটি চাপা পড়ে আছে এমন একটি প্ল্যাটফর্ম সেটিংয়ে যা কোনো বিশ্লেষকই দেখেননি। তৃতীয় প্রক্রিয়া ওয়ার্ম-আপ। আমার বাঁ পিভট বসে আছে সেশন ছাব্বিশে। RSI-র প্রয়োজনীয় চোদ্দটি পরিবর্তন তা পেরিয়েছে, কিন্তু MACD-র সিগন্যাল লাইন অর্থবহ হওয়ার জন্য যে পঁয়ত্রিশ সেশন দরকার তার ধারেকাছেও নয় — বস্তুত সেশন পঁচিশে হিস্টোগ্রাম ঠিক শূন্য, নিছক এই কারণে যে সেখানেই সিগন্যাল লাইনকে MACD লাইনের সমান করে বীজায়িত করা হয়েছে। তাই যে MACD পাঠটি আমার প্রথম ডাইভারজেন্সকে খণ্ডন করছে বলে মনে হয় তা খণ্ডন নয়; তা সূচনায়নের কৃত্রিম ফল, আর নথিতে সঠিক এন্ট্রি হলো ঐ পিভটে MACD-র কোনো মত নেই। তিনটি থেকেই আমি যে ব্যবহারিক নিয়ম টানি তা সরল: কারো সঙ্গে ডাইভারজেন্স নিয়ে তর্কের আগে নিশ্চিত করুন আপনারা দুজন একই অসিলেটর গণনা করছেন, আর বাঁ নোঙরটি ওয়ার্ম-আপ পেরিয়েছে।',
      },
    },
    {
      q: {
        en: 'What specifically does the Dhaka market do to divergence that a textbook written elsewhere would not warn you about?',
        bn: 'ঢাকার বাজার ডাইভারজেন্সের সঙ্গে বিশেষভাবে এমন কী করে যা অন্য দেশে লেখা পাঠ্যপুস্তক আপনাকে সতর্ক করবে না?',
      },
      a: {
        en: 'Four things, and the first two are the ones that break the arithmetic rather than merely weakening it. The circuit band comes first. When a session locks at the daily limit, the recorded close is where the exchange stopped the move, not where supply met demand, so Wilder gets fed a truncated change and the momentum reading is biased low on rallies and high on declines. I measured this on a constructed demand shock: the unconstrained path gives a fourteen-period RSI of eighty-one point seven nine four six at the shock session and the ten-percent-banded path gives seventy-eight point three three nine one, a bias of three point four five five five points produced entirely by the rulebook. My first divergence, the one that cost the most to act on, consisted of an RSI decline of one point three six four five. So the artefact is two and a half times the size of the signal, which means a single locked session anywhere near either pivot can create a divergence, destroy one, or reverse its sign. Second, floor-price windows. When closes repeat at an administered floor, both the average gain and the average loss decay geometrically toward zero and the relative strength ratio degenerates to zero over zero, while the MACD, being a difference of moving averages of a constant, decays monotonically to the zero line regardless of what demand was doing. Neither reading is a momentum measurement, so a divergence spanning a floor window is a comparison between a market observation and an administrative one — the oscillator there is not weak, it is undefined, and you delete those bars with Chapter twenty-six\'s exclusion flag. Third, thin free float, which means a swing high can be a single retail order of a couple of hundred shares rather than a cohort of buyers, so I require a volume condition on the pivot itself. And fourth, the one that reorganises everything: there is no reliable stock borrow here. A bearish divergence is therefore never a short. It permits exactly three moves — stop adding, tighten the stop to the structure level, and exit on the price trigger. Every figure in my worked case was computed for a holder deciding when to sell, and that is why bullish regular divergence is the more useful family on this exchange: the action it licenses is one the market will actually accept.',
        bn: 'চারটি জিনিস, আর প্রথম দুটিই পাটিগণিতকে কেবল দুর্বল নয়, ভেঙে ফেলে। প্রথমে সার্কিট ব্যান্ড। একটি সেশন দৈনিক সীমায় আটকে গেলে লিপিবদ্ধ ক্লোজটি সেই জায়গা যেখানে এক্সচেঞ্জ চলাচল থামিয়েছে, যেখানে চাহিদা সরবরাহের সঙ্গে মিলেছে তা নয়, তাই ওয়াইল্ডার কেটে ছোট করা পরিবর্তন পায় আর মোমেন্টাম পাঠ র‍্যালিতে নিচু ও পতনে উঁচু দিকে পক্ষপাতদুষ্ট হয়। আমি এটি একটি নির্মিত চাহিদা-অভিঘাতে মেপেছি: অবাধ পথ অভিঘাতের সেশনে চোদ্দ-পর্বের RSI দেয় একাশি দশমিক সাত নয় চার ছয় আর দশ-শতাংশ ব্যান্ডযুক্ত পথ দেয় আটাত্তর দশমিক তিন তিন নয় এক, অর্থাৎ তিন দশমিক চার পাঁচ পাঁচ পাঁচ পয়েন্টের পক্ষপাত, সম্পূর্ণ বিধিপুস্তক দ্বারা তৈরি। আমার প্রথম ডাইভারজেন্স, যার ওপর কাজ করা সবচেয়ে ব্যয়বহুল ছিল, গঠিত হয়েছিল এক দশমিক তিন ছয় চার পাঁচ পয়েন্টের RSI পতনে। তাই কৃত্রিম ফলটি সংকেতের আড়াই গুণ আকারের, যার মানে যেকোনো পিভটের কাছাকাছি একটিমাত্র আটকা সেশন একটি ডাইভারজেন্স তৈরি করতে, ধ্বংস করতে বা তার চিহ্ন উল্টে দিতে পারে। দ্বিতীয়, ফ্লোর-প্রাইস জানালা। প্রশাসিত মেঝেতে ক্লোজ পুনরাবৃত্ত হলে গড় লাভ ও গড় ক্ষতি দুটিই জ্যামিতিকভাবে শূন্যের দিকে ক্ষয় হয় ও আপেক্ষিক শক্তির অনুপাত শূন্য ভাগ শূন্যে অবক্ষয়িত হয়, আর MACD, একটি ধ্রুবকের চলমান গড়ের পার্থক্য হওয়ায়, চাহিদা যাই করুক একঘেয়েভাবে শূন্য রেখায় নামে। কোনো পাঠই মোমেন্টামের পরিমাপ নয়, তাই একটি ফ্লোর জানালা পেরোনো ডাইভারজেন্স একটি বাজার পর্যবেক্ষণ ও একটি প্রশাসনিক পর্যবেক্ষণের মধ্যে তুলনা — সেখানে অসিলেটর দুর্বল নয়, অসংজ্ঞায়িত, আর অধ্যায় ছাব্বিশের বর্জন-চিহ্ন দিয়ে ঐ বারগুলো মুছে ফেলবেন। তৃতীয়, পাতলা ফ্রি ফ্লোট, যার মানে একটি সুইং হাই একদল ক্রেতা নয়, দুইশ শেয়ারের একটিমাত্র খুচরা অর্ডার হতে পারে, তাই আমি পিভটটির ওপরেই একটি ভলিউম শর্ত দাবি করি। আর চতুর্থ, যেটি সবকিছু নতুন করে সাজায়: এখানে নির্ভরযোগ্য শেয়ার ধার নেই। তাই বেয়ারিশ ডাইভারজেন্স কখনো শর্ট নয়। এটি ঠিক তিনটি পদক্ষেপের অনুমতি দেয় — যোগ করা বন্ধ, স্টপ কাঠামোর লেভেলে আঁটসাঁট, আর দাম-ট্রিগারে প্রস্থান। আমার কার্যকরী কেসের প্রতিটি সংখ্যা গণনা করা হয়েছে কখন বিক্রি করবেন তা ঠিক করা একজন হোল্ডারের জন্য, আর এই কারণেই এই এক্সচেঞ্জে বুলিশ রেগুলার ডাইভারজেন্স বেশি কাজের পরিবার: এটি যে কাজের অনুমতি দেয় বাজার সত্যিই তা গ্রহণ করবে।',
      },
    },
    {
      q: {
        en: 'You built a magnitude score for divergence and then told people not to size on it. Why keep it?',
        bn: 'আপনি ডাইভারজেন্সের জন্য একটি মাত্রা-স্কোর গড়লেন, তারপর বললেন এর ভিত্তিতে আকার নেবেন না। তবে রাখলেন কেন?',
      },
      a: {
        en: 'Because it does one job honestly and I want the failure of the other job to be visible rather than assumed. The score normalises both slopes per bar — price as a percentage of the left pivot per session, so a nine hundred taka stock is not ranked above a forty taka one purely for being expensive, and the oscillator in its own points per session since it is already dimensionless — and then multiplies them. That gives a positive number exactly when the sign condition holds, growing with both the steepness of the advance and the steepness of the momentum decline. As a floor it is genuinely useful: anything below one is a squiggle and I discard it without further thought, which removes most of what gets posted in trading groups. The job it fails is ranking. On my four signals the scores were three point three zero zero one, four point four seven seven zero, three point zero eight zero three and one point four seven five four. The largest, four point four seven seven zero, was the second signal, and it was followed by six taka thirty of further advance and then two fifty-five more. The smallest, one point four seven five four, was the fourth signal, and it was the one that preceded the top. So magnitude ranked the four in almost exactly reverse order of usefulness, and a trader sizing on the score would have put his largest position on the worst signal and his smallest on the only good one. I keep the score in the chapter precisely so that comparison can be made, because the intuition that a bigger divergence is a more reliable divergence is extremely strong and it needs to be killed with a number rather than with an assertion. And I will add the further honesty that on this particular data all four signals clear the floor of one, so even the job the score does well does no work here — which I would rather state plainly than let the reader assume the filter earned its place.',
        bn: 'কারণ এটি একটি কাজ সৎভাবে করে, আর অন্য কাজটির ব্যর্থতা আমি অনুমানের বদলে দৃশ্যমান রাখতে চাই। স্কোরটি দুটি ঢালকেই প্রতি বারে প্রমিত করে — দাম বাঁ পিভটের শতাংশ হিসেবে প্রতি সেশনে, যাতে নয়শো টাকার শেয়ার কেবল দামি হওয়ার জন্য চল্লিশ টাকার শেয়ারের ওপরে না বসে, আর অসিলেটর তার নিজের পয়েন্টে প্রতি সেশনে যেহেতু তা আগে থেকেই মাত্রাহীন — তারপর তাদের গুণ করে। এতে ঠিক তখনই একটি ধনাত্মক সংখ্যা আসে যখন চিহ্ন-শর্ত টেকে, আর তা অগ্রগমনের খাড়াই ও মোমেন্টাম পতনের খাড়াই দুটোর সঙ্গেই বাড়ে। মেঝে হিসেবে এটি সত্যিই কাজের: একের নিচে যা কিছু তা আঁকিবুঁকি আর আমি তা আর না ভেবেই বাদ দিই, যা ট্রেডিং গ্রুপে দেওয়া বেশিরভাগ জিনিস সরিয়ে দেয়। যে কাজে এটি ব্যর্থ তা হলো ক্রম নির্ধারণ। আমার চারটি সংকেতে স্কোর ছিল তিন দশমিক তিন শূন্য শূন্য এক, চার দশমিক চার সাত সাত শূন্য, তিন দশমিক শূন্য আট শূন্য তিন ও এক দশমিক চার সাত পাঁচ চার। সবচেয়ে বড়টি, চার দশমিক চার সাত সাত শূন্য, ছিল দ্বিতীয় সংকেত, আর তার পরে ছয় টাকা ত্রিশের আরও অগ্রগমন এবং তারপর আরও দুই পঞ্চান্ন এসেছে। সবচেয়ে ছোটটি, এক দশমিক চার সাত পাঁচ চার, ছিল চতুর্থ সংকেত, আর সেটিই শীর্ষের আগে এসেছিল। তাই মাত্রা চারটিকে তাদের উপযোগিতার প্রায় হুবহু বিপরীত ক্রমে সাজিয়েছে, আর স্কোরের ভিত্তিতে আকার নেওয়া একজন ট্রেডার তাঁর সবচেয়ে বড় পজিশন বসাতেন সবচেয়ে খারাপ সংকেতে আর সবচেয়ে ছোটটি একমাত্র ভালোটিতে। স্কোরটি আমি অধ্যায়ে রাখি ঠিক এই তুলনাটি করা যাবে বলেই, কারণ বড় ডাইভারজেন্স বেশি নির্ভরযোগ্য — এই সহজাত ধারণা অত্যন্ত শক্তিশালী আর একে দাবি দিয়ে নয়, একটি সংখ্যা দিয়ে মারতে হয়। আর আমি আরও একটি সততা যোগ করব যে এই নির্দিষ্ট উপাত্তে চারটি সংকেতই একের মেঝে পেরোয়, তাই স্কোরটি যে কাজটি ভালো করে সেটিও এখানে কোনো কাজে লাগেনি — যা পাঠককে ছাঁকনিটি তার জায়গা অর্জন করেছে ভাবতে দেওয়ার চেয়ে আমি স্পষ্ট বলাই পছন্দ করব।',
      },
    },
  ],

  quiz: [
    {
      q: {
        en: 'Mechanically, bearish regular divergence asserts that:',
        bn: 'যান্ত্রিকভাবে, বেয়ারিশ রেগুলার ডাইভারজেন্স দাবি করে যে:',
      },
      options: {
        en: [
          'Price is about to reverse within a few sessions',
          'A higher price extreme was reached at a lower rate of change',
          'Volume has fallen at each successive high',
          'The oscillator has entered overbought territory',
        ],
        bn: [
          'দাম কয়েক সেশনের মধ্যে উল্টে যেতে চলেছে',
          'উচ্চতর দাম-প্রান্তে পৌঁছানো হয়েছে নিম্নতর পরিবর্তন-হারে',
          'পরপর প্রতিটি উচ্চতায় ভলিউম কমেছে',
          'অসিলেটর ওভারবট এলাকায় ঢুকেছে',
        ],
      },
      answer: 1,
    },
    {
      q: {
        en: 'On ROSHANPOLY, how many bearish divergences fired on adjacent pivots during the 108-session advance?',
        bn: 'ROSHANPOLY-তে ১০৮-সেশনের অগ্রগমনে সন্নিহিত পিভটে কতগুলো বেয়ারিশ ডাইভারজেন্স বেজেছিল?',
      },
      options: {
        en: ['One', 'Two', 'Four', 'Ten'],
        bn: ['একটি', 'দুটি', 'চারটি', 'দশটি'],
      },
      answer: 2,
    },
    {
      q: {
        en: 'A rule that says "exit on bearish divergence" applied to ROSHANPOLY exits at:',
        bn: '"বেয়ারিশ ডাইভারজেন্সে বেরিয়ে আসুন" নিয়মটি ROSHANPOLY-তে প্রয়োগ করলে প্রস্থান হয়:',
      },
      options: {
        en: [
          '64.32, because D4 was the correct signal',
          '53.35, because the rule fires on the first divergence it sees',
          '66.85, the exact top',
          '61.48, the structure trigger',
        ],
        bn: [
          '৬৪.৩২-এ, কারণ D4 সঠিক সংকেত ছিল',
          '৫৩.৩৫-এ, কারণ নিয়মটি প্রথম যে ডাইভারজেন্স দেখে তাতেই বাজে',
          '৬৬.৮৫-এ, ঠিক শীর্ষে',
          '৬১.৪৮-এ, কাঠামো ট্রিগারে',
        ],
      },
      answer: 1,
    },
    {
      q: {
        en: 'Requiring a close below the prior swing low before acting changed the exit from 53.35 to 61.48. That discipline was worth:',
        bn: 'কাজ করার আগে আগের সুইং লো-র নিচে ক্লোজ দাবি করায় প্রস্থান ৫৩.৩৫ থেকে ৬১.৪৮ হয়েছে। ঐ শৃঙ্খলার মূল্য ছিল:',
      },
      options: {
        en: ['2.84 a share', '8.13 a share', '21.65 a share', '16.28 a share'],
        bn: ['শেয়ারপ্রতি ২.৮৪', 'শেয়ারপ্রতি ৮.১৩', 'শেয়ারপ্রতি ২১.৬৫', 'শেয়ারপ্রতি ১৬.২৮'],
      },
      answer: 1,
    },
    {
      q: {
        en: 'Five swing highs and four swing lows on the same advance produced how many technically valid divergence signals in total?',
        bn: 'একই অগ্রগমনে পাঁচটি সুইং হাই ও চারটি সুইং লো মোট কতগুলো কারিগরিভাবে বৈধ ডাইভারজেন্স সংকেত তৈরি করেছে?',
      },
      options: {
        en: ['Four', 'Ten', 'Sixteen', 'Twenty-two'],
        bn: ['চারটি', 'দশটি', 'ষোলোটি', 'বাইশটি'],
      },
      answer: 2,
    },
    {
      q: {
        en: 'The normalised magnitudes were 3.3001, 4.4770, 3.0803 and 1.4754. Which one preceded the top?',
        bn: 'প্রমিত মাত্রাগুলো ছিল ৩.৩০০১, ৪.৪৭৭০, ৩.০৮০৩ ও ১.৪৭৫৪। কোনটি শীর্ষের আগে এসেছিল?',
      },
      options: {
        en: [
          'The largest, 4.4770',
          'The smallest, 1.4754',
          '3.3001, the first signal',
          'None of them — the top came with no divergence',
        ],
        bn: [
          'সবচেয়ে বড়টি, ৪.৪৭৭০',
          'সবচেয়ে ছোটটি, ১.৪৭৫৪',
          '৩.৩০০১, প্রথম সংকেত',
          'কোনোটিই নয় — শীর্ষ এসেছে ডাইভারজেন্স ছাড়াই',
        ],
      },
      answer: 1,
    },
    {
      q: {
        en: 'Two RSI(14) readings taken three sessions apart share roughly what fraction of their input history?',
        bn: 'তিন সেশনের ব্যবধানে নেওয়া দুটি RSI(১৪) পাঠ তাদের ইনপুট ইতিহাসের মোটামুটি কত ভগ্নাংশ ভাগ করে?',
      },
      options: {
        en: ['About 15%', 'About 50%', 'About 89%', 'None — they are independent'],
        bn: ['প্রায় ১৫%', 'প্রায় ৫০%', 'প্রায় ৮৯%', 'কিছুই নয় — তারা স্বতন্ত্র'],
      },
      answer: 2,
    },
    {
      q: {
        en: 'Under Wilder\'s seed ΔRSI from P1 to P2 is −1.3645; under a simple 14-bar average it is +2.8169. This shows that:',
        bn: 'ওয়াইল্ডারের বীজে P1 থেকে P2-তে ΔRSI −১.৩৬৪৫; সরল ১৪-বার গড়ে তা +২.৮১৬৯। এটি দেখায় যে:',
      },
      options: {
        en: [
          'One of the two calculations is arithmetically wrong',
          'The divergence exists or not depending on the seeding convention',
          'RSI should never be used for divergence',
          'The pivots were chosen incorrectly',
        ],
        bn: [
          'দুটি গণনার একটি পাটিগণিতিকভাবে ভুল',
          'বীজায়ন প্রথার ওপর নির্ভর করে ডাইভারজেন্সটি থাকে বা থাকে না',
          'ডাইভারজেন্সে RSI কখনো ব্যবহার করা উচিত নয়',
          'পিভটগুলো ভুলভাবে বাছা হয়েছিল',
        ],
      },
      answer: 1,
    },
    {
      q: {
        en: 'In the circuit-band illustration, the ±10% limit alone shifted RSI(14) by 3.4555 points. Relative to the 1.3645-point decline that constituted D1, the artefact is:',
        bn: 'সার্কিট-ব্যান্ড দৃষ্টান্তে কেবল ±১০% সীমাই RSI(১৪) ৩.৪৫৫৫ পয়েন্ট সরিয়েছে। D1 গঠনকারী ১.৩৬৪৫ পয়েন্টের পতনের তুলনায় কৃত্রিম ফলটি:',
      },
      options: {
        en: [
          'About a quarter of the signal',
          'About the same size',
          'About 2.5 times the signal',
          'Negligible on daily data',
        ],
        bn: [
          'সংকেতের প্রায় এক-চতুর্থাংশ',
          'প্রায় একই আকারের',
          'সংকেতের প্রায় ২.৫ গুণ',
          'দৈনিক উপাত্তে নগণ্য',
        ],
      },
      answer: 2,
    },
    {
      q: {
        en: 'On the DSE, the correct response to a confirmed bearish divergence is:',
        bn: 'ডিএসই-তে একটি নিশ্চিত বেয়ারিশ ডাইভারজেন্সের সঠিক প্রতিক্রিয়া:',
      },
      options: {
        en: [
          'Open a short position sized on the divergence magnitude',
          'Stop adding, tighten the stop to structure, and exit on the price trigger',
          'Sell immediately at the pivot close',
          'Ignore it — divergence is meaningless on thin markets',
        ],
        bn: [
          'ডাইভারজেন্সের মাত্রা অনুযায়ী আকার নিয়ে একটি শর্ট পজিশন খোলা',
          'যোগ করা বন্ধ, স্টপ কাঠামোয় আঁটসাঁট, ও দাম-ট্রিগারে প্রস্থান',
          'পিভটের ক্লোজেই তৎক্ষণাৎ বিক্রি করা',
          'উপেক্ষা করা — পাতলা বাজারে ডাইভারজেন্স অর্থহীন',
        ],
      },
      answer: 1,
    },
  ],
};
