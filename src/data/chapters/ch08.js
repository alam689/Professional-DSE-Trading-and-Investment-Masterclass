/**
 * Chapter 8 — Sector Rotation
 * Part I, Stock Market Foundation. Closes the Part.
 */

export default {
  n: 8,
  tools: [],

  excelSheet: {
    filename: 'ch08-sector-rotation.xlsx',
    sheetName: 'Sector Rotation',
    cells: [
      { cell: 'A1', v: 'SECTOR' }, { cell: 'B1', v: 'Idx Now' }, { cell: 'C1', v: 'Idx 3m Ago' },
      { cell: 'D1', v: 'Sector Ret %' }, { cell: 'E1', v: 'RS vs Mkt' },
      { cell: 'F1', v: 'Top Name %' }, { cell: 'G1', v: 'Effective Names' }, { cell: 'H1', v: 'VERDICT' },

      { cell: 'A2', v: 'MARKET (DSEX)' }, { cell: 'B2', v: 6200 }, { cell: 'C2', v: 5900 },
      { cell: 'D2', f: '(B2/C2-1)*100' },

      { cell: 'A4', v: 'Pharmaceuticals' }, { cell: 'B4', v: 3450 }, { cell: 'C4', v: 3100 },
      { cell: 'D4', f: '(B4/C4-1)*100' }, { cell: 'E4', f: 'D4-$D$2' },
      { cell: 'F4', v: 18 }, { cell: 'G4', f: '100/F4' },
      { cell: 'H4', f: 'IF(F4>40,"CONCENTRATED - this is a single-stock bet",IF(E4>2,"LEADING",IF(E4<-2,"LAGGING","In line")))' },

      { cell: 'A5', v: 'Banking' }, { cell: 'B5', v: 1480 }, { cell: 'C5', v: 1520 },
      { cell: 'D5', f: '(B5/C5-1)*100' }, { cell: 'E5', f: 'D5-$D$2' },
      { cell: 'F5', v: 9 }, { cell: 'G5', f: '100/F5' },
      { cell: 'H5', f: 'IF(F5>40,"CONCENTRATED - this is a single-stock bet",IF(E5>2,"LEADING",IF(E5<-2,"LAGGING","In line")))' },

      { cell: 'A6', v: 'Telecommunication' }, { cell: 'B6', v: 4900 }, { cell: 'C6', v: 4700 },
      { cell: 'D6', f: '(B6/C6-1)*100' }, { cell: 'E6', f: 'D6-$D$2' },
      { cell: 'F6', v: 78 }, { cell: 'G6', f: '100/F6' },
      { cell: 'H6', f: 'IF(F6>40,"CONCENTRATED - this is a single-stock bet",IF(E6>2,"LEADING",IF(E6<-2,"LAGGING","In line")))' },

      { cell: 'A7', v: 'Fuel & Power' }, { cell: 'B7', v: 2110 }, { cell: 'C7', v: 2200 },
      { cell: 'D7', f: '(B7/C7-1)*100' }, { cell: 'E7', f: 'D7-$D$2' },
      { cell: 'F7', v: 22 }, { cell: 'G7', f: '100/F7' },
      { cell: 'H7', f: 'IF(F7>40,"CONCENTRATED - this is a single-stock bet",IF(E7>2,"LEADING",IF(E7<-2,"LAGGING","In line")))' },

      { cell: 'A8', v: 'Textile' }, { cell: 'B8', v: 1290 }, { cell: 'C8', v: 1180 },
      { cell: 'D8', f: '(B8/C8-1)*100' }, { cell: 'E8', f: 'D8-$D$2' },
      { cell: 'F8', v: 7 }, { cell: 'G8', f: '100/F8' },
      { cell: 'H8', f: 'IF(F8>40,"CONCENTRATED - this is a single-stock bet",IF(E8>2,"LEADING",IF(E8<-2,"LAGGING","In line")))' },

      { cell: 'A10', v: 'NOTE' },
      { cell: 'B10', v: 'Effective Names = 100 / top-holding %. Below ~3, the sector is not a sector.' },
    ],
  },

  objectives: {
    en: [
      'Explain what sector rotation is and why the classic Western cycle model transfers only partially to the DSE.',
      'Identify the actual driver of each major DSE sector — rate, policy, currency, or domestic consumption.',
      'Compute relative strength and relative strength momentum against the broad index.',
      'Detect when a "sector" is in fact a single-stock bet, and refuse to call that diversification.',
      'State why Part I must precede Part II.',
    ],
    bn: [
      'সেক্টর রোটেশন কী এবং ধ্রুপদী পশ্চিমা চক্র মডেল কেন ডিএসই-তে কেবল আংশিকভাবে প্রযোজ্য তা ব্যাখ্যা করা।',
      'ডিএসই-র প্রতিটি প্রধান খাতের প্রকৃত চালক চিহ্নিত করা — সুদহার, নীতি, মুদ্রা, না অভ্যন্তরীণ ভোগ।',
      'বিস্তৃত সূচকের বিপরীতে আপেক্ষিক শক্তি ও তার গতি গণনা করা।',
      'কখন একটি "খাত" আসলে একটি একক-শেয়ারের বাজি তা শনাক্ত করা, এবং তাকে বৈচিত্র্যায়ন বলতে অস্বীকার করা।',
      'কেন পর্ব ২-এর আগে পর্ব ১ থাকতে হবে তা বলা।',
    ],
  },

  blocks: {
    theory: {
      en: `**Sector rotation** is the observation that capital does not enter and leave a market uniformly. It moves between sectors as conditions change, and sectors therefore lead and lag each other in a partially predictable order.

### The classic model, and its limits here

The standard cycle model, developed on deep Western markets, runs roughly:

| Cycle stage | Sectors that lead |
|---|---|
| Early recovery | Financials, consumer discretionary |
| Mid expansion | Industrials, technology |
| Late expansion | Energy, materials |
| Contraction | Staples, utilities, healthcare |

The logic is sound: rate-sensitive sectors move first as credit loosens, capital goods follow as capacity is added, commodities peak late, and defensives outperform when earnings contract.

**On the DSE this framework is a starting point, not a map.** Four reasons it does not transfer cleanly:

**1. Several sectors are not sectors.** Telecommunication is Grameenphone and Robi. Food & Allied is dominated by BATBC. Buying "the telecom sector" is buying one company with a second one attached. There is no diversification inside the label.

**2. The financial sector is structurally impaired, not cyclically positioned.** Thirty-plus listed banks trading at persistent price-to-book discounts do not behave like a clean early-cycle play. They trade on non-performing loan disclosures and provisioning news, which follow a credit-quality cycle largely independent of the equity cycle. NBFIs have been structurally stressed since 2019.

**3. Policy dominates fundamentals in the largest sectors.** Fuel & Power is government-linked with a capacity-payment revenue model. Its returns depend on subsidy decisions, tariff orders, and payment timeliness from government counterparties — not on the industrial cycle. This is policy risk wearing a sector label.

**4. There is no technology sector to speak of.** The mid-cycle leadership slot in the Western model has no local equivalent.

### What actually drives DSE sectors

Replace "cycle stage" with "driver." This is the more useful mapping:

| Sector | Primary driver | Behaves like |
|---|---|---|
| Banking | Interest rates, NPL cycle, credit growth | Rate + credit quality |
| NBFI | Funding cost, regulatory action | Distressed credit |
| Pharmaceuticals | Domestic consumption, currency (imported API), export | Quality defensive with growth |
| Telecommunication | Regulation, spectrum policy, ARPU | Regulated utility, high dividend |
| Fuel & Power | Government policy, capacity payments, subsidy | Policy-linked income |
| Textile | Global demand, taka, gas supply | Export cyclical |
| Cement | Construction activity, energy cost | Domestic cyclical |
| Food & Allied | Domestic consumption, commodity input | Defensive |
| Insurance | Speculative flow, not fundamentals | Sentiment vehicle |
| Mutual Funds | NAV discount, sentiment | Discounted closed-end |

**Note that the drivers are heterogeneous.** Textile responds to global demand and the taka; power responds to a subsidy decision in Dhaka; pharma responds to domestic consumption. These are not four positions on one cycle. **They are four different cycles**, which means rotation here is less about timing a sequence and more about identifying which driver is currently live.

### Relative strength

The measurement tool is **relative strength** — a sector's performance divided by the market's, so you see whether it is leading or lagging regardless of overall direction.

$$RS = \\frac{\\text{Sector Index}}{\\text{Market Index}}$$

Rising RS means the sector is outperforming. It says nothing about whether either is going up.

**RS momentum** — the change in RS — is what identifies rotation in progress. A sector whose RS has been falling and turns up is where capital is beginning to move.

### The concentration trap

Here is the discipline this chapter exists to establish.

Before treating a sector as a sector, compute what share of its market capitalisation sits in its largest constituent. A rough measure of how many names actually matter:

$$N_{effective} \\approx \\frac{100}{\\text{Top holding \\%}}$$

If telecom is 78% one company, $N_{effective} \\approx 1.3$. **You are not buying a sector. You are buying Grameenphone and calling it diversification.**

This matters because rotation strategies are usually justified as risk management — spreading exposure across the economy. On a market where several sector labels contain one or two names, rotating between sectors can *increase* concentration while feeling like it reduces it.

Combine this with Chapter 1's fact that GP alone has at times been ~10% of total market capitalisation, and a further consequence appears: **a "rotation into telecom" is simultaneously a bet on the index**, because the sector and the index share their largest constituent.

### Why this closes Part I

Chapters 1 through 7 established, in order: the market's structure, its mechanics and liquidity, how securities are created, how they are transferred and adjusted, who the participants are and what compels them, how phases behave, and how to measure which phase you are in.

Sector rotation is where those combine into a portfolio decision. And the honest conclusion of Part I is a modest one:

**Structure and cycle tell you whether to be in the market and at what size. They do not tell you what to own.** For that you need to value a business — which is Part II.

**But the ordering is not arbitrary.** A brilliant valuation of Square in December 2010 still lost 60% by 2012, because the answer to *whether to be buying at all* was no. Part I is the question you must answer first, because getting Part II right while getting Part I wrong still loses money.`,
      bn: `**সেক্টর রোটেশন** হলো এই পর্যবেক্ষণ যে মূলধন একটি বাজারে সমানভাবে ঢোকে ও বেরোয় না। পরিস্থিতি বদলালে এটি খাতের মধ্যে সরে যায়, আর তাই খাতগুলো আংশিকভাবে অনুমেয় একটি ক্রমে একে অপরকে নেতৃত্ব দেয় ও পিছিয়ে পড়ে।

### ধ্রুপদী মডেল, এবং এখানে তার সীমা

গভীর পশ্চিমা বাজারে গড়ে ওঠা প্রমিত চক্র মডেল মোটামুটি এরকম:

| চক্রের পর্যায় | নেতৃত্বদানকারী খাত |
|---|---|
| প্রাথমিক পুনরুদ্ধার | আর্থিক, ভোগ্যপণ্য (ঐচ্ছিক) |
| মধ্য সম্প্রসারণ | শিল্প, প্রযুক্তি |
| শেষ সম্প্রসারণ | জ্বালানি, কাঁচামাল |
| সংকোচন | নিত্যপণ্য, ইউটিলিটি, স্বাস্থ্যসেবা |

যুক্তিটি সুদৃঢ়: ঋণ শিথিল হলে সুদ-সংবেদনশীল খাত আগে নড়ে, সক্ষমতা যোগ হলে মূলধনী পণ্য অনুসরণ করে, পণ্যদ্রব্য দেরিতে শীর্ষে ওঠে, আর আয় সংকুচিত হলে রক্ষণাত্মক খাত ভালো করে।

**ডিএসই-তে এই কাঠামো একটি সূচনাবিন্দু, মানচিত্র নয়।** এটি পরিষ্কারভাবে প্রযোজ্য না হওয়ার চারটি কারণ:

**১. কয়েকটি খাত আসলে খাত নয়।** টেলিযোগাযোগ মানে গ্রামীণফোন ও রবি। খাদ্য ও সহযোগীতে BATBC-র আধিপত্য। "টেলিকম খাত" কেনা মানে একটি কোম্পানি কেনা, সঙ্গে দ্বিতীয় একটি জুড়ে। লেবেলটির ভেতরে কোনো বৈচিত্র্যায়ন নেই।

**২. আর্থিক খাত চক্রীয়ভাবে অবস্থানরত নয়, কাঠামোগতভাবে ক্ষতিগ্রস্ত।** স্থায়ী মূল্য-থেকে-বুক ছাড়ে লেনদেন হওয়া ত্রিশের বেশি তালিকাভুক্ত ব্যাংক পরিচ্ছন্ন প্রাথমিক-চক্র বাজির মতো আচরণ করে না। এরা খেলাপি ঋণের প্রকাশনা ও প্রভিশনিং খবরে লেনদেন হয়, যা শেয়ার চক্র থেকে অনেকটাই স্বাধীন একটি ঋণমান চক্র অনুসরণ করে। এনবিএফআই ২০১৯ সাল থেকে কাঠামোগতভাবে চাপগ্রস্ত।

**৩. বৃহত্তম খাতগুলোতে নীতি মৌলভিত্তিকে ছাপিয়ে যায়।** জ্বালানি ও বিদ্যুৎ সরকার-সংশ্লিষ্ট, ক্যাপাসিটি-পেমেন্ট রাজস্ব মডেলসহ। এর রিটার্ন নির্ভর করে ভর্তুকির সিদ্ধান্ত, শুল্ক আদেশ ও সরকারি প্রতিপক্ষের সময়মতো পরিশোধের ওপর — শিল্পচক্রের ওপর নয়। এটি খাতের লেবেল পরা নীতি ঝুঁকি।

**৪. উল্লেখযোগ্য কোনো প্রযুক্তি খাত নেই।** পশ্চিমা মডেলের মধ্য-চক্র নেতৃত্বের জায়গাটির কোনো স্থানীয় সমতুল্য নেই।

### ডিএসই-র খাতগুলোকে আসলে কী চালায়

"চক্রের পর্যায়"-এর বদলে "চালক" বসান। এটিই বেশি কার্যকর মানচিত্র:

| খাত | প্রধান চালক | যেমন আচরণ করে |
|---|---|---|
| ব্যাংকিং | সুদহার, খেলাপি চক্র, ঋণ প্রবৃদ্ধি | সুদ + ঋণমান |
| এনবিএফআই | তহবিল ব্যয়, নিয়ন্ত্রক পদক্ষেপ | সংকটাপন্ন ঋণ |
| ওষুধ | অভ্যন্তরীণ ভোগ, মুদ্রা (আমদানিকৃত API), রপ্তানি | প্রবৃদ্ধিসহ গুণগত রক্ষণাত্মক |
| টেলিযোগাযোগ | নিয়ন্ত্রণ, স্পেকট্রাম নীতি, ARPU | নিয়ন্ত্রিত ইউটিলিটি, উচ্চ লভ্যাংশ |
| জ্বালানি ও বিদ্যুৎ | সরকারি নীতি, ক্যাপাসিটি পেমেন্ট, ভর্তুকি | নীতি-সংযুক্ত আয় |
| বস্ত্র | বৈশ্বিক চাহিদা, টাকা, গ্যাস সরবরাহ | রপ্তানি চক্রীয় |
| সিমেন্ট | নির্মাণ কার্যক্রম, জ্বালানি ব্যয় | অভ্যন্তরীণ চক্রীয় |
| খাদ্য ও সহযোগী | অভ্যন্তরীণ ভোগ, পণ্যদ্রব্যের দাম | রক্ষণাত্মক |
| বীমা | ফটকা প্রবাহ, মৌলভিত্তি নয় | অনুভূতির বাহন |
| মিউচুয়াল ফান্ড | NAV ছাড়, অনুভূতি | ছাড়যুক্ত ক্লোজড-এন্ড |

**লক্ষ করুন চালকগুলো ভিন্নধর্মী।** বস্ত্র সাড়া দেয় বৈশ্বিক চাহিদা ও টাকায়; বিদ্যুৎ সাড়া দেয় ঢাকার একটি ভর্তুকি সিদ্ধান্তে; ওষুধ সাড়া দেয় অভ্যন্তরীণ ভোগে। এগুলো একটি চক্রের চারটি অবস্থান নয়। **এগুলো চারটি ভিন্ন চক্র**, অর্থাৎ এখানে রোটেশন একটি ক্রমের সময় নির্ধারণের চেয়ে বেশি করে বর্তমানে কোন চালকটি সক্রিয় তা চিহ্নিত করার বিষয়।

### আপেক্ষিক শক্তি

পরিমাপের হাতিয়ার হলো **আপেক্ষিক শক্তি** — বাজারের কর্মক্ষমতা দিয়ে ভাগ করা খাতের কর্মক্ষমতা, যাতে সামগ্রিক দিক নির্বিশেষে দেখা যায় এটি এগিয়ে না পিছিয়ে।

$$RS = \\frac{\\text{খাত সূচক}}{\\text{বাজার সূচক}}$$

বাড়ন্ত RS মানে খাতটি ভালো করছে। কোনোটি উপরে যাচ্ছে কি না তা নিয়ে এটি কিছুই বলে না।

**RS গতি** — RS-এর পরিবর্তন — চলমান রোটেশন চিহ্নিত করে। যে খাতের RS পড়ছিল এবং ঘুরে দাঁড়াচ্ছে, সেখানেই মূলধন সরতে শুরু করেছে।

### কেন্দ্রীভবনের ফাঁদ

এই অধ্যায় যে শৃঙ্খলা প্রতিষ্ঠা করতে বিদ্যমান তা এখানে।

কোনো খাতকে খাত হিসেবে গণ্য করার আগে গণনা করুন তার বাজার মূলধনের কত অংশ বৃহত্তম উপাদানটিতে। আসলে কতগুলো নাম গুরুত্বপূর্ণ তার একটি স্থূল পরিমাপ:

$$N_{কার্যকর} \\approx \\frac{100}{\\text{শীর্ষ মালিকানার \\%}}$$

টেলিকমের ৭৮% যদি একটি কোম্পানি হয়, তবে $N_{কার্যকর} \\approx 1.3$। **আপনি একটি খাত কিনছেন না। আপনি গ্রামীণফোন কিনছেন এবং তাকে বৈচিত্র্যায়ন বলছেন।**

এটি গুরুত্বপূর্ণ কারণ রোটেশন কৌশলকে সাধারণত ঝুঁকি ব্যবস্থাপনা হিসেবে যুক্তি দেওয়া হয় — অর্থনীতিজুড়ে ঝুঁকি ছড়ানো। যে বাজারে কয়েকটি খাতের লেবেলে এক-দুটি নাম থাকে, সেখানে খাতের মধ্যে ঘোরাফেরা কেন্দ্রীভবন *বাড়াতে* পারে, অথচ মনে হয় কমছে।

এর সঙ্গে অধ্যায় ১-এর তথ্য যোগ করুন যে কেবল জিপিই কখনো মোট বাজার মূলধনের ~১০% ছিল, তখন আরেকটি পরিণতি দেখা দেয়: **"টেলিকমে রোটেশন" একই সঙ্গে সূচকের ওপর বাজি**, কারণ খাত ও সূচক তাদের বৃহত্তম উপাদানটি ভাগ করে নেয়।

### কেন এটি পর্ব ১ শেষ করে

অধ্যায় ১ থেকে ৭ ক্রমান্বয়ে প্রতিষ্ঠা করেছে: বাজারের কাঠামো, এর কার্যপ্রণালী ও তারল্য, সিকিউরিটিজ কীভাবে সৃষ্টি হয়, কীভাবে হস্তান্তরিত ও সমন্বিত হয়, অংশগ্রহণকারীরা কারা ও কী তাঁদের বাধ্য করে, পর্যায়গুলো কেমন আচরণ করে, এবং কোন পর্যায়ে আছেন তা কীভাবে মাপবেন।

সেক্টর রোটেশন হলো যেখানে এগুলো মিলে একটি পোর্টফোলিও সিদ্ধান্তে পরিণত হয়। আর পর্ব ১-এর সৎ উপসংহার একটি বিনয়ী উপসংহার:

**কাঠামো ও চক্র বলে আপনার বাজারে থাকা উচিত কি না এবং কোন আকারে। এগুলো বলে না কী মালিকানায় রাখবেন।** তার জন্য একটি ব্যবসার মূল্যায়ন করতে হবে — যা পর্ব ২।

**কিন্তু ক্রমটি এলোমেলো নয়।** ২০১০ সালের ডিসেম্বরে স্কয়ারের একটি চমৎকার মূল্যায়নও ২০১২ সালের মধ্যে ৬০% হারিয়েছিল, কারণ *আদৌ কেনা উচিত কি না* প্রশ্নের উত্তর ছিল না। পর্ব ১ সেই প্রশ্ন যার উত্তর আগে দিতে হবে, কারণ পর্ব ১ ভুল করে পর্ব ২ ঠিক করলেও টাকা হারাবেন।`,
    },

    simple: {
      en: `Money does not arrive in a market evenly. It goes somewhere specific.

When bank lending gets cheap, money tends to head for banks and property-linked shares first. When exports are booming, it goes to textiles. When everyone is frightened, it hides in pharmaceutical and food companies, because people buy medicine and salt regardless of the news.

That movement between groups is **sector rotation**, and watching it tells you where the money is going before the newspapers announce it.

### But be careful with the word "sector" here

In Bangladesh some of these groups are barely groups at all.

The "telecom sector" is **Grameenphone**, with Robi attached. If you decide "I will move into telecom," you have not spread your risk across an industry. **You have bought one company.**

Compare that to textiles, which has around 55 listed companies. Moving into textiles genuinely spreads you across many businesses — of wildly varying quality, which is a different problem, but at least it is spread.

**So before you rotate into anything, ask one question: how many companies am I actually buying?** If the answer is "basically one," then call it what it is — a bet on that company — and size it accordingly.

### And the drivers here are not the textbook ones

In American textbooks, sectors take turns in a neat order tied to the economy.

Bangladesh does not work that way, because our sectors answer to different masters:

- **Banks** move on bad-loan news, not on the economy.
- **Power companies** move on government subsidy and payment decisions.
- **Textiles** move on what Europe and America are ordering, and on the taka.
- **Pharma** moves on what Bangladeshis are buying at the chemist.

Those are four different weather systems, not four seasons of one year. **The useful question is not "what stage of the cycle are we in?" but "which of these drivers is active right now?"**

### One last thing, and it is the point of this whole first Part

Everything in Chapters 1 to 8 tells you **whether to be in the market, and how much to risk**.

None of it tells you **which company is good**. That comes next.

But the order matters. A perfect analysis of an excellent company, bought in December 2010, still lost 60% — because the answer to "should I be buying at all?" was no, and no amount of company analysis could rescue that.

**Get this Part right first. Then learn to value a business.**`,
      bn: `টাকা কোনো বাজারে সমানভাবে আসে না। এটি নির্দিষ্ট কোথাও যায়।

ব্যাংক ঋণ সস্তা হলে টাকা সাধারণত আগে ব্যাংক ও সম্পত্তি-সংশ্লিষ্ট শেয়ারের দিকে যায়। রপ্তানি রমরমা হলে যায় বস্ত্রে। সবাই ভয় পেলে ওষুধ ও খাদ্য কোম্পানিতে লুকায়, কারণ খবর যা-ই হোক মানুষ ওষুধ আর লবণ কেনে।

গোষ্ঠীর মধ্যে ঐ চলাচলই **সেক্টর রোটেশন**, আর তা লক্ষ করলে সংবাদপত্র ঘোষণা করার আগেই বোঝা যায় টাকা কোথায় যাচ্ছে।

### তবে এখানে "খাত" শব্দটি নিয়ে সতর্ক থাকুন

বাংলাদেশে এই গোষ্ঠীগুলোর কয়েকটি আদৌ গোষ্ঠীই নয়।

"টেলিকম খাত" মানে **গ্রামীণফোন**, সঙ্গে রবি জুড়ে। আপনি যদি ঠিক করেন "আমি টেলিকমে যাব," তবে আপনি একটি শিল্পজুড়ে ঝুঁকি ছড়াননি। **আপনি একটি কোম্পানি কিনেছেন।**

তুলনা করুন বস্ত্রের সঙ্গে, যেখানে প্রায় ৫৫টি তালিকাভুক্ত কোম্পানি। বস্ত্রে যাওয়া সত্যিই আপনাকে বহু ব্যবসায় ছড়িয়ে দেয় — ভয়াবহ রকম ভিন্ন মানের, যা আলাদা সমস্যা, কিন্তু অন্তত ছড়ানো।

**তাই কোথাও রোটেট করার আগে একটি প্রশ্ন করুন: আমি আসলে কতগুলো কোম্পানি কিনছি?** উত্তর যদি "মূলত একটি" হয়, তবে একে যা তা-ই বলুন — ঐ কোম্পানির ওপর বাজি — এবং সেভাবেই আকার ঠিক করুন।

### আর এখানকার চালক পাঠ্যপুস্তকের চালক নয়

আমেরিকান পাঠ্যপুস্তকে খাতগুলো অর্থনীতির সঙ্গে বাঁধা একটি পরিপাটি ক্রমে পালা করে।

বাংলাদেশ সেভাবে চলে না, কারণ আমাদের খাতগুলো ভিন্ন প্রভুর কাছে জবাবদিহি করে:

- **ব্যাংক** নড়ে খেলাপি ঋণের খবরে, অর্থনীতিতে নয়।
- **বিদ্যুৎ কোম্পানি** নড়ে সরকারি ভর্তুকি ও পরিশোধের সিদ্ধান্তে।
- **বস্ত্র** নড়ে ইউরোপ ও আমেরিকা কী অর্ডার করছে তাতে, আর টাকায়।
- **ওষুধ** নড়ে বাংলাদেশিরা ওষুধের দোকানে কী কিনছে তাতে।

এগুলো চারটি ভিন্ন আবহাওয়া ব্যবস্থা, এক বছরের চারটি ঋতু নয়। **কার্যকর প্রশ্ন "আমরা চক্রের কোন পর্যায়ে?" নয়, বরং "এই মুহূর্তে এই চালকগুলোর কোনটি সক্রিয়?"**

### শেষ একটি কথা, আর এটিই এই পুরো প্রথম পর্বের মূল কথা

অধ্যায় ১ থেকে ৮-এর সবকিছু আপনাকে বলে **বাজারে থাকা উচিত কি না, এবং কতটা ঝুঁকি নেবেন**।

এর কিছুই বলে না **কোন কোম্পানি ভালো**। সেটি আসছে এরপর।

কিন্তু ক্রমটি গুরুত্বপূর্ণ। ২০১০ সালের ডিসেম্বরে কেনা একটি চমৎকার কোম্পানির নিখুঁত বিশ্লেষণও ৬০% হারিয়েছিল — কারণ "আমার কি আদৌ কেনা উচিত?" প্রশ্নের উত্তর ছিল না, আর কোনো পরিমাণ কোম্পানি বিশ্লেষণ তা বাঁচাতে পারত না।

**আগে এই পর্বটি ঠিক করুন। তারপর ব্যবসার মূল্যায়ন শিখুন।**`,
    },

    example: {
      en: `### Ranking five sectors over three months

Market (DSEX): 5,900 → 6,200, a gain of **+5.08%**.

| Sector | 3m ago | Now | Return | RS vs market | Top name % | N effective |
|---|---|---|---|---|---|---|
| Pharmaceuticals | 3,100 | 3,450 | +11.29% | **+6.21** | 18% | 5.6 |
| Textile | 1,180 | 1,290 | +9.32% | **+4.24** | 7% | 14.3 |
| Telecommunication | 4,700 | 4,900 | +4.26% | −0.83 | **78%** | **1.3** |
| Fuel & Power | 2,200 | 2,110 | −4.09% | **−9.17** | 22% | 4.5 |
| Banking | 1,520 | 1,480 | −2.63% | **−7.71** | 9% | 11.1 |

**The leadership reading.** Pharma and textile are leading; power and banking are lagging badly. That combination is informative: a domestic-consumption sector and an export sector rising together while a policy-linked sector and a credit-quality sector fall. The money is favouring businesses whose revenue does not depend on a government payment decision or on a loan book.

**Now apply the concentration filter, and one row changes character entirely.**

Telecom shows a mild lag at −0.83 — apparently unremarkable. But its top name is 78% of the sector, giving $N_{effective} \\approx 1.3$. **That −0.83 is not a sector reading. It is Grameenphone's relative performance with a sector label on it.**

If you acted on it — "telecom is roughly in line, I will take a position" — you would have made a single-stock decision while believing you had made an allocation decision. **The RS number is not wrong. The interpretation is.**

### The two rows that look similar and are not

Compare textile and banking, both apparently straightforward sector calls:

| | Textile | Banking |
|---|---|---|
| RS vs market | +4.24 | −7.71 |
| Listed names | ~55 | 30+ |
| Top name share | 7% | 9% |
| N effective | 14.3 | 11.1 |
| Quality dispersion | **Very wide** | Moderate |
| Driver | Global demand, taka, gas | NPL cycle, rates |

Both are genuine sectors by the concentration test — you really are buying many businesses. But textile's quality dispersion is enormous, spanning well-run exporters and shells that barely operate. **A sector-level RS signal in textile tells you money is flowing in; it does not tell you it is flowing into the good ones.**

This is the boundary of what Part I can do. Relative strength identifies *where* capital is moving. It cannot tell you *which* companies within that flow are worth owning. That question requires reading a balance sheet, which is Chapter 9 onward.

### What a rotation actually looks like

A rotation is not a single day's RS reading. It is a *turn* in RS momentum, sustained.

| Month | Pharma RS | Banking RS | Read |
|---|---|---|---|
| M−5 | 0.94 | 1.06 | Banking leading |
| M−4 | 0.95 | 1.05 | — |
| M−3 | 0.97 | 1.02 | Converging |
| M−2 | 1.00 | 0.99 | **Crossover** |
| M−1 | 1.04 | 0.96 | Pharma leading |
| M0 | 1.08 | 0.93 | Trend established |

The useful signal was at **M−3 to M−2**, when the trend in RS changed — not at M0, when it is obvious and largely priced.

**And the discipline:** a single month's RS move is noise. Require a sustained direction across at least three periods before treating it as rotation rather than fluctuation. Frameworks that react to one month's reading will trade constantly, and Chapter 2 established what turnover costs on this exchange.`,
      bn: `### তিন মাসে পাঁচটি খাতের ক্রমতালিকা

বাজার (DSEX): ৫,৯০০ → ৬,২০০, বৃদ্ধি **+৫.০৮%**।

| খাত | ৩ মাস আগে | এখন | রিটার্ন | বাজারের বিপরীতে RS | শীর্ষ নাম % | N কার্যকর |
|---|---|---|---|---|---|---|
| ওষুধ | ৩,১০০ | ৩,৪৫০ | +১১.২৯% | **+৬.২১** | ১৮% | ৫.৬ |
| বস্ত্র | ১,১৮০ | ১,২৯০ | +৯.৩২% | **+৪.২৪** | ৭% | ১৪.৩ |
| টেলিযোগাযোগ | ৪,৭০০ | ৪,৯০০ | +৪.২৬% | −০.৮৩ | **৭৮%** | **১.৩** |
| জ্বালানি ও বিদ্যুৎ | ২,২০০ | ২,১১০ | −৪.০৯% | **−৯.১৭** | ২২% | ৪.৫ |
| ব্যাংকিং | ১,৫২০ | ১,৪৮০ | −২.৬৩% | **−৭.৭১** | ৯% | ১১.১ |

**নেতৃত্বের পাঠ।** ওষুধ ও বস্ত্র এগিয়ে; বিদ্যুৎ ও ব্যাংকিং খারাপভাবে পিছিয়ে। এই সংমিশ্রণ তথ্যবহুল: একটি অভ্যন্তরীণ-ভোগ খাত ও একটি রপ্তানি খাত একসঙ্গে বাড়ছে যখন একটি নীতি-সংযুক্ত খাত ও একটি ঋণমান খাত পড়ছে। টাকা এমন ব্যবসাকে পছন্দ করছে যাদের রাজস্ব কোনো সরকারি পরিশোধ সিদ্ধান্ত বা ঋণের খাতার ওপর নির্ভর করে না।

**এবার কেন্দ্রীভবন ফিল্টার প্রয়োগ করুন, আর একটি সারির চরিত্রই পুরো বদলে যায়।**

টেলিকম −০.৮৩-এ সামান্য পিছিয়ে দেখাচ্ছে — আপাতদৃষ্টিতে সাধারণ। কিন্তু এর শীর্ষ নামটি খাতের ৭৮%, ফলে $N_{কার্যকর} \\approx 1.3$। **ঐ −০.৮৩ কোনো খাতের পাঠ নয়। এটি খাতের লেবেল লাগানো গ্রামীণফোনের আপেক্ষিক কর্মক্ষমতা।**

এর ওপর ভিত্তি করে পদক্ষেপ নিলে — "টেলিকম মোটামুটি সমান, আমি একটি পজিশন নেব" — আপনি একটি একক-শেয়ারের সিদ্ধান্ত নিতেন অথচ বিশ্বাস করতেন একটি বণ্টন সিদ্ধান্ত নিয়েছেন। **RS সংখ্যাটি ভুল নয়। ব্যাখ্যাটি ভুল।**

### যে দুটি সারি একরকম দেখায় কিন্তু নয়

বস্ত্র ও ব্যাংকিং তুলনা করুন, দুটোই আপাতদৃষ্টিতে সরল খাত সিদ্ধান্ত:

| | বস্ত্র | ব্যাংকিং |
|---|---|---|
| বাজারের বিপরীতে RS | +৪.২৪ | −৭.৭১ |
| তালিকাভুক্ত নাম | ~৫৫ | ৩০+ |
| শীর্ষ নামের অংশ | ৭% | ৯% |
| N কার্যকর | ১৪.৩ | ১১.১ |
| মানের বিস্তার | **অত্যন্ত প্রশস্ত** | মাঝারি |
| চালক | বৈশ্বিক চাহিদা, টাকা, গ্যাস | খেলাপি চক্র, সুদহার |

কেন্দ্রীভবন পরীক্ষায় দুটোই প্রকৃত খাত — আপনি সত্যিই বহু ব্যবসা কিনছেন। কিন্তু বস্ত্রের মানের বিস্তার বিশাল, সুপরিচালিত রপ্তানিকারক থেকে শুরু করে সবে চলা খোলস পর্যন্ত। **বস্ত্রে খাত-স্তরের RS সংকেত আপনাকে বলে টাকা ঢুকছে; বলে না যে তা ভালোগুলোতে ঢুকছে।**

এটিই পর্ব ১ যা করতে পারে তার সীমানা। আপেক্ষিক শক্তি চিহ্নিত করে মূলধন *কোথায়* সরছে। বলতে পারে না ঐ প্রবাহের *কোন* কোম্পানি মালিকানার যোগ্য। ঐ প্রশ্নের জন্য একটি স্থিতিপত্র পড়তে হয়, যা অধ্যায় ৯ থেকে শুরু।

### একটি রোটেশন আসলে কেমন দেখায়

রোটেশন একদিনের RS পাঠ নয়। এটি RS গতিতে একটি *মোড়*, যা টেকসই।

| মাস | ওষুধ RS | ব্যাংকিং RS | পাঠ |
|---|---|---|---|
| M−৫ | ০.৯৪ | ১.০৬ | ব্যাংকিং এগিয়ে |
| M−৪ | ০.৯৫ | ১.০৫ | — |
| M−৩ | ০.৯৭ | ১.০২ | কাছাকাছি আসছে |
| M−২ | ১.০০ | ০.৯৯ | **ক্রসওভার** |
| M−১ | ১.০৪ | ০.৯৬ | ওষুধ এগিয়ে |
| M০ | ১.০৮ | ০.৯৩ | প্রবণতা প্রতিষ্ঠিত |

কার্যকর সংকেতটি ছিল **M−৩ থেকে M−২**-এ, যখন RS-এর প্রবণতা বদলাল — M০-তে নয়, যখন তা স্পষ্ট এবং অনেকটাই দামে ধরা।

**আর শৃঙ্খলা:** একটি মাসের RS নড়াচড়া গোলমাল। ওঠানামা নয় রোটেশন হিসেবে গণ্য করার আগে অন্তত তিনটি সময়কালজুড়ে টেকসই দিক দাবি করুন। যে কাঠামো এক মাসের পাঠে সাড়া দেয় তা অবিরাম লেনদেন করবে, আর এই এক্সচেঞ্জে লেনদেনের খরচ কত তা অধ্যায় ২ প্রতিষ্ঠা করেছে।`,
    },

    formula: {
      en: `**Relative Strength (ratio form):**
$$RS = \\frac{I_{sector}}{I_{market}}$$

**Relative Strength (spread form)** — simpler to read over a fixed window:
$$RS_{spread} = R_{sector} - R_{market}$$

where $R = (I_{now}/I_{then} - 1) \\times 100$ for each.

**RS momentum** — the change in relative strength, which is what identifies rotation:
$$\\Delta RS_t = RS_t - RS_{t-1}$$

A sector rotating *into* leadership has $RS$ low but $\\Delta RS > 0$ sustained. A sector rotating *out* has $RS$ high but $\\Delta RS < 0$.

**Effective number of names** — a rough concentration check:
$$N_{effective} \\approx \\frac{100}{w_{top}}$$

where $w_{top}$ is the largest constituent's percentage of sector market capitalisation. Below roughly 3, the label "sector" is misleading.

**Herfindahl-Hirschman Index** — the rigorous version, if you have all the weights:
$$HHI = \\sum_{i=1}^{n} w_i^2, \\qquad N_{effective} = \\frac{1}{HHI}$$

with $w_i$ as fractions. $HHI \\to 1$ means a single-name sector.

**Sector beta** against the broad index:
$$\\beta_{sector} = \\frac{\\text{Cov}(R_{sector}, R_{market})}{\\text{Var}(R_{market})}$$

**Rotation signal.** Treat as rotation only when direction persists:
$$\\text{Signal} = \\begin{cases} \\text{rotate in} & \\Delta RS_t > 0 \\text{ for } k \\geq 3 \\text{ periods} \\\\ \\text{rotate out} & \\Delta RS_t < 0 \\text{ for } k \\geq 3 \\text{ periods} \\\\ \\text{no action} & \\text{otherwise} \\end{cases}$$`,
      bn: `**আপেক্ষিক শক্তি (অনুপাত রূপ):**
$$RS = \\frac{I_{খাত}}{I_{বাজার}}$$

**আপেক্ষিক শক্তি (ব্যবধান রূপ)** — একটি নির্দিষ্ট সময়কালে পড়া সহজ:
$$RS_{ব্যবধান} = R_{খাত} - R_{বাজার}$$

যেখানে প্রতিটির জন্য $R = (I_{এখন}/I_{তখন} - 1) \\times 100$।

**RS গতি** — আপেক্ষিক শক্তির পরিবর্তন, যা রোটেশন চিহ্নিত করে:
$$\\Delta RS_t = RS_t - RS_{t-1}$$

নেতৃত্বে *ঢুকতে থাকা* খাতের $RS$ কম কিন্তু $\\Delta RS > 0$ টেকসই। *বেরিয়ে যেতে থাকা* খাতের $RS$ বেশি কিন্তু $\\Delta RS < 0$।

**কার্যকর নামের সংখ্যা** — একটি স্থূল কেন্দ্রীভবন যাচাই:
$$N_{কার্যকর} \\approx \\frac{100}{w_{শীর্ষ}}$$

যেখানে $w_{শীর্ষ}$ হলো খাতের বাজার মূলধনে বৃহত্তম উপাদানের শতাংশ। প্রায় ৩-এর নিচে "খাত" লেবেলটি বিভ্রান্তিকর।

**হারফিন্ডাল-হার্শম্যান সূচক** — সব ওজন থাকলে কঠোর সংস্করণ:
$$HHI = \\sum_{i=1}^{n} w_i^2, \\qquad N_{কার্যকর} = \\frac{1}{HHI}$$

যেখানে $w_i$ ভগ্নাংশ। $HHI \\to 1$ মানে একক-নামের খাত।

বিস্তৃত সূচকের বিপরীতে **খাত বিটা**:
$$\\beta_{খাত} = \\frac{\\text{Cov}(R_{খাত}, R_{বাজার})}{\\text{Var}(R_{বাজার})}$$

**রোটেশন সংকেত।** দিক টিকে থাকলেই কেবল রোটেশন হিসেবে গণ্য করুন:
$$\\text{সংকেত} = \\begin{cases} \\text{ঢুকুন} & \\Delta RS_t > 0, \\; k \\geq 3 \\text{ সময়কাল} \\\\ \\text{বেরোন} & \\Delta RS_t < 0, \\; k \\geq 3 \\text{ সময়কাল} \\\\ \\text{কিছু নয়} & \\text{অন্যথায়} \\end{cases}$$`,
    },

    manual: {
      en: `**Scenario.** DSEX moves 5,900 → 6,200 over three months. Sector index values as tabulated in §8.3.

**Step 1 — Market return:**
$$R_{market} = \\left(\\frac{6{,}200}{5{,}900} - 1\\right) \\times 100 = +5.08\\%$$

**Step 2 — Pharmaceuticals:**
$$R = \\left(\\frac{3{,}450}{3{,}100} - 1\\right) \\times 100 = +11.29\\%$$
$$RS_{spread} = 11.29 - 5.08 = \\mathbf{+6.21}$$

**Step 3 — Textile:**
$$R = \\left(\\frac{1{,}290}{1{,}180} - 1\\right) \\times 100 = +9.32\\%$$
$$RS_{spread} = 9.32 - 5.08 = \\mathbf{+4.24}$$

**Step 4 — Telecommunication:**
$$R = \\left(\\frac{4{,}900}{4{,}700} - 1\\right) \\times 100 = +4.26\\%$$
$$RS_{spread} = 4.26 - 5.08 = \\mathbf{-0.83}$$

**Step 5 — Fuel & Power:**
$$R = \\left(\\frac{2{,}110}{2{,}200} - 1\\right) \\times 100 = -4.09\\%$$
$$RS_{spread} = -4.09 - 5.08 = \\mathbf{-9.17}$$

**Step 6 — Banking:**
$$R = \\left(\\frac{1{,}480}{1{,}520} - 1\\right) \\times 100 = -2.63\\%$$
$$RS_{spread} = -2.63 - 5.08 = \\mathbf{-7.71}$$

**Step 7 — Rank by relative strength:**

$$\\text{Pharma } (+6.21) > \\text{Textile } (+4.24) > \\text{Telecom } (-0.83) > \\text{Banking } (-7.71) > \\text{Power } (-9.17)$$

**Step 8 — Now the concentration check, before acting on any of it.**

$$N_{eff}^{telecom} = \\frac{100}{78} = 1.28$$
$$N_{eff}^{pharma} = \\frac{100}{18} = 5.56$$
$$N_{eff}^{textile} = \\frac{100}{7} = 14.29$$
$$N_{eff}^{banking} = \\frac{100}{9} = 11.11$$
$$N_{eff}^{power} = \\frac{100}{22} = 4.55$$

**Step 9 — Interpretation, and this is the whole chapter.**

Telecom's $N_{eff} = 1.28$ **disqualifies it as a sector reading entirely.** Its −0.83 is one company's relative performance. Any "allocation to telecom" is a single-stock position, and must be sized as one — against the liquidity filter of Chapter 2 and the position limits of Chapter 5, not against a sector budget.

The other four pass the concentration test. Pharma leads with genuine breadth behind it ($N_{eff} = 5.6$).

**Step 10 — What this does and does not license.**

It licenses: *tilting toward pharmaceuticals and textiles, away from power and banking, at the sector level.*

It does not license: *buying any specific company.* Textile's $N_{eff}$ of 14.3 confirms many names but says nothing about their quality, and Chapter 2's liquidity filter will disqualify a large fraction of them before any fundamental question is even asked.

**Part I ends here, at exactly this boundary.** You now know where money is moving and whether conditions favour risk. You do not yet know which business is worth owning. That is Part II.`,
      bn: `**পরিস্থিতি।** DSEX তিন মাসে ৫,৯০০ → ৬,২০০। §৮.৩-এ সারণিবদ্ধ খাত সূচকের মান।

**ধাপ ১ — বাজার রিটার্ন:**
$$R_{বাজার} = \\left(\\frac{6{,}200}{5{,}900} - 1\\right) \\times 100 = +5.08\\%$$

**ধাপ ২ — ওষুধ:**
$$R = \\left(\\frac{3{,}450}{3{,}100} - 1\\right) \\times 100 = +11.29\\%$$
$$RS_{ব্যবধান} = 11.29 - 5.08 = \\mathbf{+6.21}$$

**ধাপ ৩ — বস্ত্র:**
$$R = +9.32\\% \\quad \\Rightarrow \\quad RS_{ব্যবধান} = \\mathbf{+4.24}$$

**ধাপ ৪ — টেলিযোগাযোগ:**
$$R = +4.26\\% \\quad \\Rightarrow \\quad RS_{ব্যবধান} = \\mathbf{-0.83}$$

**ধাপ ৫ — জ্বালানি ও বিদ্যুৎ:**
$$R = -4.09\\% \\quad \\Rightarrow \\quad RS_{ব্যবধান} = \\mathbf{-9.17}$$

**ধাপ ৬ — ব্যাংকিং:**
$$R = -2.63\\% \\quad \\Rightarrow \\quad RS_{ব্যবধান} = \\mathbf{-7.71}$$

**ধাপ ৭ — আপেক্ষিক শক্তি অনুযায়ী ক্রম:**

$$\\text{ওষুধ } (+6.21) > \\text{বস্ত্র } (+4.24) > \\text{টেলিকম } (-0.83) > \\text{ব্যাংকিং } (-7.71) > \\text{বিদ্যুৎ } (-9.17)$$

**ধাপ ৮ — এবার কেন্দ্রীভবন যাচাই, কোনো কিছুতে পদক্ষেপ নেওয়ার আগে।**

$$N_{কার্য}^{টেলিকম} = \\frac{100}{78} = 1.28$$
$$N_{কার্য}^{ওষুধ} = \\frac{100}{18} = 5.56$$
$$N_{কার্য}^{বস্ত্র} = \\frac{100}{7} = 14.29$$
$$N_{কার্য}^{ব্যাংকিং} = \\frac{100}{9} = 11.11$$
$$N_{কার্য}^{বিদ্যুৎ} = \\frac{100}{22} = 4.55$$

**ধাপ ৯ — ব্যাখ্যা, এবং এটিই পুরো অধ্যায়।**

টেলিকমের $N_{কার্য} = 1.28$ **একে খাতের পাঠ হিসেবে সম্পূর্ণ অযোগ্য করে।** এর −০.৮৩ একটি কোম্পানির আপেক্ষিক কর্মক্ষমতা। যেকোনো "টেলিকমে বণ্টন" একটি একক-শেয়ারের পজিশন, এবং তার আকার সেভাবেই ঠিক করতে হবে — অধ্যায় ২-এর তারল্য ফিল্টার ও অধ্যায় ৫-এর পজিশন সীমার বিপরীতে, কোনো খাত বাজেটের বিপরীতে নয়।

বাকি চারটি কেন্দ্রীভবন পরীক্ষায় উত্তীর্ণ। ওষুধ এগিয়ে, পেছনে প্রকৃত ব্যাপ্তিসহ ($N_{কার্য} = 5.6$)।

**ধাপ ১০ — এটি কী অনুমোদন করে আর কী করে না।**

অনুমোদন করে: *খাত পর্যায়ে ওষুধ ও বস্ত্রের দিকে ঝোঁক, বিদ্যুৎ ও ব্যাংকিং থেকে দূরে।*

অনুমোদন করে না: *কোনো নির্দিষ্ট কোম্পানি কেনা।* বস্ত্রের ১৪.৩ $N_{কার্য}$ বহু নাম নিশ্চিত করে কিন্তু তাদের মান সম্পর্কে কিছুই বলে না, আর কোনো মৌলিক প্রশ্ন করার আগেই অধ্যায় ২-এর তারল্য ফিল্টার তাদের বড় একটি অংশকে বাতিল করবে।

**পর্ব ১ ঠিক এই সীমানাতেই শেষ।** আপনি এখন জানেন টাকা কোথায় সরছে এবং পরিস্থিতি ঝুঁকির অনুকূল কি না। আপনি এখনো জানেন না কোন ব্যবসা মালিকানার যোগ্য। সেটিই পর্ব ২।`,
    },

    excel: {
      en: `\`\`\`
     A                   B         C           D            E          F          G          H
1    SECTOR              Idx Now   Idx 3m Ago  Sector Ret%  RS vs Mkt  Top Name%  Eff Names  VERDICT
2    MARKET (DSEX)       6200      5900        =(B2/C2-1)*100

4    Pharmaceuticals     3450      3100        =(B4/C4-1)*100  =D4-$D$2   18       =100/F4    (see below)
5    Banking             1480      1520        =(B5/C5-1)*100  =D5-$D$2    9       =100/F5
6    Telecommunication   4900      4700        =(B6/C6-1)*100  =D6-$D$2   78       =100/F6
7    Fuel & Power        2110      2200        =(B7/C7-1)*100  =D7-$D$2   22       =100/F7
8    Textile             1290      1180        =(B8/C8-1)*100  =D8-$D$2    7       =100/F8

H4:  =IF(F4>40,"CONCENTRATED - this is a single-stock bet",
      IF(E4>2,"LEADING",IF(E4<-2,"LAGGING","In line")))
     (copy H4 down to H8)

10   NOTE  Effective Names = 100 / top-holding %. Below ~3, the sector is not a sector.
\`\`\`

**Column H tests concentration *before* it tests relative strength**, and that ordering is the entire design. A sector that fails the concentration test never gets a leadership verdict at all, because the leadership number would be meaningless.

Run row 6 and watch it. Telecom's RS of −0.83 looks unremarkable, but H6 overrides it and returns *"CONCENTRATED — this is a single-stock bet."* The sheet refuses to give you a sector answer for something that is not a sector.

**Column F is the input you must source honestly.** Get the top constituent's market capitalisation as a share of the sector total from the DSE sector pages. Estimating it from memory defeats the purpose, since the whole point is to catch the cases where your intuition says "sector" and the arithmetic says "one company."`,
      bn: `\`\`\`
     A                   B         C           D            E          F          G          H
1    খাত                 এখন সূচক  ৩ মাস আগে   খাত রিটার্ন%  RS বনাম বাজার শীর্ষ নাম% কার্যকর নাম  রায়
2    বাজার (DSEX)        6200      5900        =(B2/C2-1)*100

4    ওষুধ                3450      3100        =(B4/C4-1)*100  =D4-$D$2   18       =100/F4
5    ব্যাংকিং             1480      1520        =(B5/C5-1)*100  =D5-$D$2    9       =100/F5
6    টেলিযোগাযোগ         4900      4700        =(B6/C6-1)*100  =D6-$D$2   78       =100/F6
7    জ্বালানি ও বিদ্যুৎ    2110      2200        =(B7/C7-1)*100  =D7-$D$2   22       =100/F7
8    বস্ত্র                1290      1180        =(B8/C8-1)*100  =D8-$D$2    7       =100/F8

H4:  =IF(F4>40,"CONCENTRATED - this is a single-stock bet",
      IF(E4>2,"LEADING",IF(E4<-2,"LAGGING","In line")))
     (H4 থেকে H8 পর্যন্ত কপি করুন)

10   নোট  কার্যকর নাম = ১০০ / শীর্ষ মালিকানার %। ~৩-এর নিচে খাতটি খাত নয়।
\`\`\`

**H কলাম আপেক্ষিক শক্তি পরীক্ষার *আগে* কেন্দ্রীভবন পরীক্ষা করে**, আর ঐ ক্রমই পুরো নকশা। যে খাত কেন্দ্রীভবন পরীক্ষায় ব্যর্থ হয় সে আদৌ কোনো নেতৃত্বের রায় পায় না, কারণ নেতৃত্বের সংখ্যাটি অর্থহীন হতো।

৬ নম্বর সারিটি চালিয়ে দেখুন। টেলিকমের −০.৮৩ RS সাধারণ দেখায়, কিন্তু H6 তা অগ্রাহ্য করে ফেরত দেয় *"CONCENTRATED — this is a single-stock bet।"* যা খাত নয় তার জন্য শিটটি আপনাকে খাতের উত্তর দিতে অস্বীকার করে।

**F কলামই সেই উপাদান যা আপনাকে সৎভাবে সংগ্রহ করতে হবে।** ডিএসই-র খাত পাতা থেকে খাতের মোটের অংশ হিসেবে শীর্ষ উপাদানের বাজার মূলধন নিন। স্মৃতি থেকে অনুমান করলে উদ্দেশ্যই ব্যর্থ, কারণ পুরো লক্ষ্যই হলো সেই ক্ষেত্রগুলো ধরা যেখানে আপনার সহজাত বোধ বলে "খাত" আর পাটিগণিত বলে "একটি কোম্পানি"।`,
    },

    python: {
      en: `\`\`\`python
"""
Chapter 8 — Sector relative strength with a concentration guard.
Educational.
"""
from dataclasses import dataclass


@dataclass
class Sector:
    """One sector index, with the concentration of its largest constituent."""
    name: str
    index_now: float
    index_then: float
    top_holding_pct: float     # largest constituent as % of sector market cap
    listed_names: int

    @property
    def ret_pct(self) -> float:
        return (self.index_now / self.index_then - 1) * 100

    @property
    def effective_names(self) -> float:
        """Rough count of names that actually matter."""
        return 100 / self.top_holding_pct if self.top_holding_pct else float("inf")

    @property
    def is_real_sector(self) -> bool:
        """Below ~3 effective names, the label is misleading."""
        return self.effective_names >= 3.0

    def rs_spread(self, market_ret: float) -> float:
        return self.ret_pct - market_ret

    def verdict(self, market_ret: float) -> str:
        if not self.is_real_sector:
            return "CONCENTRATED - single-stock bet, not a sector"
        rs = self.rs_spread(market_ret)
        if rs > 2:
            return "LEADING"
        if rs < -2:
            return "LAGGING"
        return "In line"


def rotation_signal(rs_history: list[float], k: int = 3) -> str:
    """
    Rotation requires a sustained direction, not one period's move.
    Needs k consecutive same-signed changes in RS.
    """
    if len(rs_history) < k + 1:
        return "insufficient history"
    deltas = [rs_history[i] - rs_history[i - 1] for i in range(1, len(rs_history))]
    recent = deltas[-k:]
    if all(d > 0 for d in recent):
        return f"ROTATING IN ({k} periods rising)"
    if all(d < 0 for d in recent):
        return f"ROTATING OUT ({k} periods falling)"
    return "no sustained direction"


if __name__ == "__main__":
    market_now, market_then = 6200.0, 5900.0
    market_ret = (market_now / market_then - 1) * 100
    print(f"Market (DSEX) return: {market_ret:+.2f}%\\n")

    sectors = [
        Sector("Pharmaceuticals", 3450, 3100, 18, 30),
        Sector("Textile",         1290, 1180,  7, 55),
        Sector("Telecommunication", 4900, 4700, 78, 2),
        Sector("Fuel & Power",    2110, 2200, 22, 20),
        Sector("Banking",         1480, 1520,  9, 33),
    ]

    ranked = sorted(sectors, key=lambda s: s.rs_spread(market_ret), reverse=True)

    print(f"{'Sector':<20}{'Ret%':>8}{'RS':>8}{'Top%':>7}{'Neff':>7}  Verdict")
    print("-" * 78)
    for s in ranked:
        print(f"{s.name:<20}{s.ret_pct:>+8.2f}{s.rs_spread(market_ret):>+8.2f}"
              f"{s.top_holding_pct:>7.0f}{s.effective_names:>7.1f}  {s.verdict(market_ret)}")

    print()
    tradeable = [s for s in ranked if s.is_real_sector]
    rejected = [s for s in ranked if not s.is_real_sector]
    print(f"Sectors usable for allocation : {len(tradeable)} of {len(sectors)}")
    for s in rejected:
        print(f"  REJECTED: {s.name} - {s.effective_names:.1f} effective names")

    print()
    print("=== Rotation requires persistence ===")
    pharma_rs = [0.94, 0.95, 0.97, 1.00, 1.04, 1.08]
    banking_rs = [1.06, 1.05, 1.02, 0.99, 0.96, 0.93]
    print(f"Pharma  RS history {pharma_rs} -> {rotation_signal(pharma_rs)}")
    print(f"Banking RS history {banking_rs} -> {rotation_signal(banking_rs)}")

    noisy = [1.00, 1.03, 0.99, 1.04, 0.98, 1.02]
    print(f"Noisy   RS history {noisy} -> {rotation_signal(noisy)}")
\`\`\`

**The \`is_real_sector\` guard is the point of this listing.** Notice that \`verdict()\` checks concentration *first* and returns early. Telecom never receives a leadership verdict, because with 1.3 effective names there is no sector-level statement to make about it.

The final block shows why persistence matters. The noisy series oscillates around 1.00 and would generate a signal on almost any single-period rule — but \`rotation_signal\` correctly returns *"no sustained direction."* Given the round-trip costs established in Chapter 2, a rotation framework that fires on noise will lose to one that does nothing.`,
      bn: `\`\`\`python
"""
অধ্যায় ৮ — কেন্দ্রীভবন প্রহরীসহ খাতের আপেক্ষিক শক্তি।
শিক্ষামূলক।
"""
from dataclasses import dataclass


@dataclass
class Sector:
    """একটি খাত সূচক, তার বৃহত্তম উপাদানের কেন্দ্রীভবনসহ।"""
    name: str
    index_now: float
    index_then: float
    top_holding_pct: float     # খাতের বাজার মূলধনে বৃহত্তম উপাদানের %
    listed_names: int

    @property
    def ret_pct(self) -> float:
        return (self.index_now / self.index_then - 1) * 100

    @property
    def effective_names(self) -> float:
        """আসলে যতগুলো নাম গুরুত্বপূর্ণ তার স্থূল গণনা।"""
        return 100 / self.top_holding_pct if self.top_holding_pct else float("inf")

    @property
    def is_real_sector(self) -> bool:
        """~৩ কার্যকর নামের নিচে লেবেলটি বিভ্রান্তিকর।"""
        return self.effective_names >= 3.0

    def rs_spread(self, market_ret: float) -> float:
        return self.ret_pct - market_ret

    def verdict(self, market_ret: float) -> str:
        if not self.is_real_sector:
            return "CONCENTRATED - single-stock bet, not a sector"
        rs = self.rs_spread(market_ret)
        if rs > 2:
            return "LEADING"
        if rs < -2:
            return "LAGGING"
        return "In line"


def rotation_signal(rs_history: list[float], k: int = 3) -> str:
    """
    রোটেশনের জন্য টেকসই দিক দরকার, এক সময়কালের নড়াচড়া নয়।
    RS-এ k সংখ্যক পরপর একই চিহ্নের পরিবর্তন দরকার।
    """
    if len(rs_history) < k + 1:
        return "insufficient history"
    deltas = [rs_history[i] - rs_history[i - 1] for i in range(1, len(rs_history))]
    recent = deltas[-k:]
    if all(d > 0 for d in recent):
        return f"ROTATING IN ({k} periods rising)"
    if all(d < 0 for d in recent):
        return f"ROTATING OUT ({k} periods falling)"
    return "no sustained direction"


if __name__ == "__main__":
    market_now, market_then = 6200.0, 5900.0
    market_ret = (market_now / market_then - 1) * 100
    print(f"Market (DSEX) return: {market_ret:+.2f}%\\n")

    sectors = [
        Sector("Pharmaceuticals", 3450, 3100, 18, 30),
        Sector("Textile",         1290, 1180,  7, 55),
        Sector("Telecommunication", 4900, 4700, 78, 2),
        Sector("Fuel & Power",    2110, 2200, 22, 20),
        Sector("Banking",         1480, 1520,  9, 33),
    ]

    ranked = sorted(sectors, key=lambda s: s.rs_spread(market_ret), reverse=True)

    print(f"{'Sector':<20}{'Ret%':>8}{'RS':>8}{'Top%':>7}{'Neff':>7}  Verdict")
    print("-" * 78)
    for s in ranked:
        print(f"{s.name:<20}{s.ret_pct:>+8.2f}{s.rs_spread(market_ret):>+8.2f}"
              f"{s.top_holding_pct:>7.0f}{s.effective_names:>7.1f}  {s.verdict(market_ret)}")

    print()
    tradeable = [s for s in ranked if s.is_real_sector]
    rejected = [s for s in ranked if not s.is_real_sector]
    print(f"Sectors usable for allocation : {len(tradeable)} of {len(sectors)}")
    for s in rejected:
        print(f"  REJECTED: {s.name} - {s.effective_names:.1f} effective names")

    print()
    print("=== Rotation requires persistence ===")
    pharma_rs = [0.94, 0.95, 0.97, 1.00, 1.04, 1.08]
    banking_rs = [1.06, 1.05, 1.02, 0.99, 0.96, 0.93]
    print(f"Pharma  RS history {pharma_rs} -> {rotation_signal(pharma_rs)}")
    print(f"Banking RS history {banking_rs} -> {rotation_signal(banking_rs)}")

    noisy = [1.00, 1.03, 0.99, 1.04, 0.98, 1.02]
    print(f"Noisy   RS history {noisy} -> {rotation_signal(noisy)}")
\`\`\`

**\`is_real_sector\` প্রহরীটিই এই কোডের মূল কথা।** লক্ষ করুন \`verdict()\` *আগে* কেন্দ্রীভবন যাচাই করে এবং তাড়াতাড়ি ফেরত দেয়। টেলিকম কখনো নেতৃত্বের রায় পায় না, কারণ ১.৩ কার্যকর নাম নিয়ে তার সম্পর্কে খাত-পর্যায়ের কোনো বক্তব্য দেওয়ার নেই।

শেষ অংশটি দেখায় কেন টিকে থাকা গুরুত্বপূর্ণ। গোলমেলে ধারাটি ১.০০-এর আশপাশে দোল খায় এবং প্রায় যেকোনো এক-সময়কালের নিয়মে সংকেত তৈরি করত — কিন্তু \`rotation_signal\` সঠিকভাবে *"no sustained direction"* ফেরত দেয়। অধ্যায় ২-এ প্রতিষ্ঠিত রাউন্ড-ট্রিপ খরচ বিবেচনায়, যে রোটেশন কাঠামো গোলমালে সাড়া দেয় তা কিছুই না করা কাঠামোর কাছে হারবে।`,
    },

    mistakes: {
      en: `1. **Calling a single-stock bet a sector allocation.** Telecom at 78% one name has ~1.3 effective constituents. Rotating into it is buying Grameenphone. Size it as a single stock, against the Chapter 2 liquidity filter and the Chapter 5 position limits.
2. **Importing the Western cycle model wholesale.** Financials-lead-early does not hold when the financial sector trades on non-performing loan disclosures rather than the rate cycle, and there is no technology sector to occupy the mid-cycle slot.
3. **Treating power and fuel as a cyclical sector.** Its revenue model is capacity payments from government counterparties. It responds to subsidy and tariff decisions, not industrial demand. That is policy risk under a sector label.
4. **Acting on one period's relative strength.** A single month's RS move is noise. Require at least three periods of sustained direction, or the framework will trade constantly into the round-trip costs of Chapter 2.
5. **Confusing sector inflow with company quality.** Textile has ~55 names and enormous quality dispersion. Money flowing into the sector does not mean it is flowing into the sound businesses within it.
6. **Chasing the sector that already led.** By the time leadership is obvious in the RS ranking, the rotation is largely priced. The signal is the *turn* in RS momentum, several periods earlier.
7. **Forgetting the sector and the index share constituents.** With GP at ~10% of total market capitalisation, a telecom overweight is simultaneously an index bet. You have not diversified away from the market; you have doubled into its largest component.
8. **Using sector rotation as a substitute for company analysis.** It tells you where capital is going. It cannot tell you what is worth owning, and treating it as though it can is how Part I gets mistaken for Part II.`,
      bn: `১. **একক-শেয়ারের বাজিকে খাত বণ্টন বলা।** ৭৮% একটি নামের টেলিকমে ~১.৩ কার্যকর উপাদান। এতে রোটেট করা মানে গ্রামীণফোন কেনা। অধ্যায় ২-এর তারল্য ফিল্টার ও অধ্যায় ৫-এর পজিশন সীমার বিপরীতে একে একক শেয়ার হিসেবেই আকার দিন।
২. **পশ্চিমা চক্র মডেল হুবহু আমদানি করা।** আর্থিক খাত সুদচক্র নয় বরং খেলাপি ঋণের প্রকাশনায় লেনদেন হলে "আর্থিক খাত আগে নেতৃত্ব দেয়" টেকে না, আর মধ্য-চক্রের জায়গা নেওয়ার মতো কোনো প্রযুক্তি খাতও নেই।
৩. **জ্বালানি ও বিদ্যুৎকে চক্রীয় খাত ভাবা।** এর রাজস্ব মডেল সরকারি প্রতিপক্ষের কাছ থেকে ক্যাপাসিটি পেমেন্ট। এটি শিল্প চাহিদায় নয়, ভর্তুকি ও শুল্কের সিদ্ধান্তে সাড়া দেয়। এটি খাতের লেবেলের নিচে নীতি ঝুঁকি।
৪. **এক সময়কালের আপেক্ষিক শক্তিতে পদক্ষেপ নেওয়া।** এক মাসের RS নড়াচড়া গোলমাল। অন্তত তিন সময়কালের টেকসই দিক দাবি করুন, নইলে কাঠামোটি অবিরাম লেনদেন করে অধ্যায় ২-এর রাউন্ড-ট্রিপ খরচে ঢুকবে।
৫. **খাতে প্রবাহকে কোম্পানির মানের সঙ্গে গুলিয়ে ফেলা।** বস্ত্রে ~৫৫টি নাম ও বিশাল মানের বিস্তার। খাতে টাকা ঢোকা মানে তা ভেতরের সুদৃঢ় ব্যবসাগুলোতে ঢুকছে এমন নয়।
৬. **যে খাত ইতিমধ্যে নেতৃত্ব দিয়েছে তার পেছনে ছোটা।** RS ক্রমতালিকায় নেতৃত্ব স্পষ্ট হওয়ার সময় রোটেশন অনেকটাই দামে ধরা। সংকেতটি হলো RS গতিতে *মোড়*, কয়েক সময়কাল আগে।
৭. **খাত ও সূচক উপাদান ভাগ করে নেয় তা ভুলে যাওয়া।** জিপি মোট বাজার মূলধনের ~১০% হলে টেলিকমে বাড়তি ওজন একই সঙ্গে সূচকের ওপর বাজি। আপনি বাজার থেকে বৈচিত্র্যায়ন করেননি; আপনি তার বৃহত্তম উপাদানে দ্বিগুণ ঢুকেছেন।
৮. **কোম্পানি বিশ্লেষণের বিকল্প হিসেবে সেক্টর রোটেশন ব্যবহার।** এটি বলে মূলধন কোথায় যাচ্ছে। বলতে পারে না কী মালিকানার যোগ্য, আর একে সেভাবে গণ্য করাই পর্ব ১-কে পর্ব ২ ভাবার পথ।`,
    },

    tips: {
      en: `- **Compute effective names before you look at the relative strength number.** Order matters. If you read RS first you will form a view, and the concentration check then has to overcome an opinion you already hold.
- **Keep a standing table of each sector's top-constituent share, refreshed quarterly.** It changes slowly, so this is a small maintenance cost for a filter that prevents an entire category of error.
- **Map every sector to its driver, not to a cycle stage.** Ask "what does this sector actually respond to?" Banks answer to NPL disclosures, power to subsidy decisions, textile to overseas orders and the taka. Then ask which of those drivers is currently moving.
- **Require three periods of sustained RS direction.** One month is noise. This single rule eliminates most of the turnover that makes rotation strategies underperform after costs.
- **Watch the turn, not the level.** The tradeable moment is when a lagging sector's RS momentum flips positive, not when it has already topped the ranking table.
- **Treat a textile or insurance sector signal as a starting list, never a decision.** Wide quality dispersion means the sector average tells you very little about any individual constituent.
- **Check whether your sector tilt is secretly an index bet.** If the sector's largest name is also a large index constituent, compute your combined exposure to that single company across every position before sizing.
- **Re-read this list when you finish Part II.** Rotation plus valuation is a genuinely powerful combination; rotation alone is a way of being confidently early into businesses you have not examined.`,
      bn: `- **আপেক্ষিক শক্তির সংখ্যা দেখার আগে কার্যকর নাম গণনা করুন।** ক্রম গুরুত্বপূর্ণ। RS আগে পড়লে আপনার একটি মত তৈরি হবে, আর কেন্দ্রীভবন যাচাইকে তখন আপনার ইতিমধ্যে ধারণ করা মত অতিক্রম করতে হবে।
- **প্রতিটি খাতের শীর্ষ-উপাদানের অংশের একটি স্থায়ী টেবিল রাখুন, ত্রৈমাসিকভাবে হালনাগাদ করুন।** এটি ধীরে বদলায়, তাই একটি সম্পূর্ণ শ্রেণির ভুল প্রতিরোধকারী ফিল্টারের জন্য এটি সামান্য রক্ষণাবেক্ষণ খরচ।
- **প্রতিটি খাতকে চক্রের পর্যায় নয়, তার চালকের সঙ্গে মেলান।** জিজ্ঞেস করুন "এই খাত আসলে কীসে সাড়া দেয়?" ব্যাংক খেলাপি ঋণের প্রকাশনায়, বিদ্যুৎ ভর্তুকির সিদ্ধান্তে, বস্ত্র বিদেশি অর্ডার ও টাকায়। তারপর জিজ্ঞেস করুন ঐ চালকগুলোর কোনটি এখন নড়ছে।
- **তিন সময়কালের টেকসই RS দিক দাবি করুন।** এক মাস গোলমাল। এই একটি নিয়মই বেশিরভাগ লেনদেন দূর করে, যার কারণে রোটেশন কৌশল খরচের পর খারাপ করে।
- **স্তর নয়, মোড় লক্ষ করুন।** লেনদেনযোগ্য মুহূর্ত হলো যখন পিছিয়ে থাকা খাতের RS গতি ধনাত্মক হয়, ক্রমতালিকার শীর্ষে ওঠার পর নয়।
- **বস্ত্র বা বীমা খাতের সংকেতকে একটি প্রাথমিক তালিকা হিসেবে দেখুন, কখনো সিদ্ধান্ত নয়।** প্রশস্ত মানের বিস্তার মানে খাতের গড় কোনো একক উপাদান সম্পর্কে খুব সামান্যই বলে।
- **আপনার খাত-ঝোঁক গোপনে সূচকের ওপর বাজি কি না যাচাই করুন।** খাতের বৃহত্তম নামটি যদি সূচকেরও বড় উপাদান হয়, আকার ঠিক করার আগে প্রতিটি পজিশনজুড়ে ঐ একক কোম্পানিতে আপনার সম্মিলিত এক্সপোজার গণনা করুন।
- **পর্ব ২ শেষ করে এই তালিকাটি আবার পড়ুন।** রোটেশন ও মূল্যায়ন একসঙ্গে সত্যিই শক্তিশালী সংমিশ্রণ; কেবল রোটেশন হলো এমন ব্যবসায় আত্মবিশ্বাসের সঙ্গে আগেভাগে ঢোকার উপায় যেগুলো আপনি পরীক্ষা করেননি।`,
    },

    exercises: {
      en: `1. From dsebd.org, record the current index value for every DSE sector and for DSEX. Compute the three-month return and RS spread for each. Rank them.
2. For each sector in (1), find the market capitalisation of its largest constituent and the sector total. Compute the top-holding percentage and effective names. Which sectors fail the $N_{eff} \\geq 3$ test?
3. Build the full HHI for one sector using every constituent's weight. Compare $1/HHI$ to the rough $100/w_{top}$ estimate. How large is the approximation error?
4. Take the sector that currently ranks first on RS. Compute its RS in each of the last six months. Does it pass the three-period persistence test, or did you catch it after the move?
5. For telecom specifically, compute what percentage of your total portfolio would be exposed to Grameenphone if you took a "normal" sector-weight position in telecom plus your existing index-linked holdings.
6. Pick one sector and map its last four large price moves to a cause. How many were driven by company fundamentals versus policy announcements, currency, or global demand?
7. Compute the sector beta of banking and of pharmaceuticals against DSEX over 24 months. Which is more defensive by this measure? Does that match your intuition, and if not, why not?
8. Take the top-ranked and bottom-ranked sectors by RS. Within each, list every constituent that passes the Chapter 2 liquidity filter (ADTV ≥ BDT 50 lakh, spread ≤ 1%). How many names survive in each?
9. Write down, in two sentences, what Part I entitles you to conclude and what it does not. Keep it. Re-read it after Chapter 25.`,
      bn: `১. dsebd.org থেকে প্রতিটি ডিএসই খাতের ও DSEX-এর বর্তমান সূচক মান লিপিবদ্ধ করুন। প্রতিটির তিন মাসের রিটার্ন ও RS ব্যবধান গণনা করুন। ক্রমে সাজান।
২. (১)-এর প্রতিটি খাতের বৃহত্তম উপাদানের বাজার মূলধন ও খাতের মোট বের করুন। শীর্ষ-মালিকানার শতাংশ ও কার্যকর নাম গণনা করুন। কোন খাতগুলো $N_{কার্য} \\geq 3$ পরীক্ষায় ব্যর্থ?
৩. একটি খাতের প্রতিটি উপাদানের ওজন ব্যবহার করে পূর্ণ HHI তৈরি করুন। $1/HHI$-কে স্থূল $100/w_{শীর্ষ}$ অনুমানের সঙ্গে তুলনা করুন। আসন্নীকরণের ভুল কত বড়?
৪. RS-এ বর্তমানে প্রথম স্থানে থাকা খাতটি নিন। গত ছয় মাসের প্রতিটিতে এর RS গণনা করুন। এটি কি তিন-সময়কালের টিকে থাকার পরীক্ষায় উত্তীর্ণ, নাকি আপনি নড়াচড়ার পরে ধরেছেন?
৫. বিশেষভাবে টেলিকমের জন্য গণনা করুন: টেলিকমে একটি "স্বাভাবিক" খাত-ওজনের পজিশন এবং আপনার বিদ্যমান সূচক-সংযুক্ত মালিকানা মিলিয়ে আপনার মোট পোর্টফোলিওর কত শতাংশ গ্রামীণফোনে উন্মুক্ত থাকবে।
৬. একটি খাত বাছুন এবং এর শেষ চারটি বড় মূল্য পরিবর্তনকে একটি কারণের সঙ্গে মেলান। কতগুলো কোম্পানির মৌলভিত্তিতে চালিত, আর কতগুলো নীতি ঘোষণা, মুদ্রা বা বৈশ্বিক চাহিদায়?
৭. ২৪ মাসে DSEX-এর বিপরীতে ব্যাংকিং ও ওষুধের খাত বিটা গণনা করুন। এই পরিমাপে কোনটি বেশি রক্ষণাত্মক? এটি কি আপনার সহজাত ধারণার সঙ্গে মেলে, না মিললে কেন নয়?
৮. RS অনুযায়ী শীর্ষ ও সর্বনিম্ন খাত নিন। প্রতিটির ভেতরে অধ্যায় ২-এর তারল্য ফিল্টারে (ADTV ≥ ৫০ লক্ষ টাকা, স্প্রেড ≤ ১%) উত্তীর্ণ প্রতিটি উপাদান তালিকাভুক্ত করুন। প্রতিটিতে কতগুলো নাম টিকে থাকে?
৯. দুই বাক্যে লিখুন পর্ব ১ আপনাকে কী উপসংহার টানার অধিকার দেয় এবং কী দেয় না। এটি রেখে দিন। অধ্যায় ২৫-এর পর আবার পড়ুন।`,
    },

    summary: {
      en: `- **Sector rotation** is the movement of capital between sectors as conditions change, measured by **relative strength**, $RS = I_{sector}/I_{market}$ or as a return spread against the index.
- The classic Western cycle model transfers only partially. On the DSE there is no technology sector, the financial sector trades on **NPL disclosures rather than the rate cycle**, and Fuel & Power responds to **subsidy and tariff decisions rather than industrial demand**.
- Replace "cycle stage" with **driver**: banks answer to the NPL cycle, pharma to domestic consumption and the currency, textile to global demand and the taka, power to government policy. These are **four different cycles, not four positions on one**.
- **The concentration trap is the discipline of this chapter.** Compute $N_{effective} \\approx 100/w_{top}$ before reading any RS number. Telecom at 78% one name gives $N_{eff} \\approx 1.3$ — that is Grameenphone with a sector label, and it must be sized as a single stock.
- Because GP is also ~10% of total market capitalisation, **a telecom overweight is simultaneously an index bet**. Rotation can increase concentration while feeling like diversification.
- **Rotation requires persistence.** Demand at least three periods of sustained RS direction. The tradeable signal is the *turn* in RS momentum, not the sector already topping the ranking.
- Sector-level inflow says nothing about company quality. Textile's ~55 names span excellent exporters and near-shells; **the average tells you where money is going, not what is worth owning**.
- **Part I closes here.** Chapters 1–8 answer *whether to be in the market and at what size*. They do not answer *what to own* — that is Part II. The ordering is not arbitrary: a perfect valuation of Square bought in December 2010 still lost 60%, because the prior question had been answered wrongly.`,
      bn: `- **সেক্টর রোটেশন** হলো পরিস্থিতি বদলালে খাতের মধ্যে মূলধনের চলাচল, যা **আপেক্ষিক শক্তি** দিয়ে মাপা হয়, $RS = I_{খাত}/I_{বাজার}$ অথবা সূচকের বিপরীতে রিটার্ন ব্যবধান হিসেবে।
- ধ্রুপদী পশ্চিমা চক্র মডেল কেবল আংশিকভাবে প্রযোজ্য। ডিএসই-তে কোনো প্রযুক্তি খাত নেই, আর্থিক খাত **সুদচক্র নয় খেলাপি ঋণের প্রকাশনায়** লেনদেন হয়, এবং জ্বালানি ও বিদ্যুৎ **শিল্প চাহিদা নয় ভর্তুকি ও শুল্কের সিদ্ধান্তে** সাড়া দেয়।
- "চক্রের পর্যায়"-এর বদলে **চালক** বসান: ব্যাংক খেলাপি চক্রে, ওষুধ অভ্যন্তরীণ ভোগ ও মুদ্রায়, বস্ত্র বৈশ্বিক চাহিদা ও টাকায়, বিদ্যুৎ সরকারি নীতিতে জবাব দেয়। এগুলো **চারটি ভিন্ন চক্র, একটি চক্রের চারটি অবস্থান নয়**।
- **কেন্দ্রীভবনের ফাঁদই এই অধ্যায়ের শৃঙ্খলা।** যেকোনো RS সংখ্যা পড়ার আগে $N_{কার্যকর} \\approx 100/w_{শীর্ষ}$ গণনা করুন। ৭৮% একটি নামের টেলিকম দেয় $N_{কার্য} \\approx 1.3$ — সেটি খাতের লেবেল লাগানো গ্রামীণফোন, আর তার আকার একক শেয়ার হিসেবেই ঠিক করতে হবে।
- যেহেতু জিপি মোট বাজার মূলধনেরও ~১০%, **টেলিকমে বাড়তি ওজন একই সঙ্গে সূচকের ওপর বাজি**। রোটেশন কেন্দ্রীভবন বাড়াতে পারে অথচ মনে হয় বৈচিত্র্যায়ন হচ্ছে।
- **রোটেশনের জন্য টিকে থাকা দরকার।** অন্তত তিন সময়কালের টেকসই RS দিক দাবি করুন। লেনদেনযোগ্য সংকেত RS গতিতে *মোড়*, ক্রমতালিকার শীর্ষে ইতিমধ্যে থাকা খাত নয়।
- খাত-স্তরের প্রবাহ কোম্পানির মান সম্পর্কে কিছুই বলে না। বস্ত্রের ~৫৫টি নাম চমৎকার রপ্তানিকারক থেকে প্রায়-খোলস পর্যন্ত বিস্তৃত; **গড় আপনাকে বলে টাকা কোথায় যাচ্ছে, কী মালিকানার যোগ্য তা নয়**।
- **পর্ব ১ এখানে শেষ।** অধ্যায় ১–৮ উত্তর দেয় *বাজারে থাকা উচিত কি না এবং কোন আকারে*। এগুলো উত্তর দেয় না *কী মালিকানায় রাখবেন* — সেটি পর্ব ২। ক্রমটি এলোমেলো নয়: ২০১০ সালের ডিসেম্বরে কেনা স্কয়ারের নিখুঁত মূল্যায়নও ৬০% হারিয়েছিল, কারণ পূর্ববর্তী প্রশ্নের উত্তর ভুল ছিল।`,
    },
  },

  interview: [
    {
      q: {
        en: 'Why does the classic Western sector rotation model transfer only partially to the DSE?',
        bn: 'ধ্রুপদী পশ্চিমা সেক্টর রোটেশন মডেল কেন ডিএসই-তে কেবল আংশিকভাবে প্রযোজ্য?',
      },
      a: {
        en: 'Four reasons. There is no technology sector to occupy the mid-cycle leadership slot. The financial sector, which the model expects to lead early recovery, trades on non-performing loan disclosures and provisioning rather than the rate cycle, and NBFIs have been structurally impaired since 2019. Fuel and Power, a large sector, earns through capacity payments from government counterparties, so it responds to subsidy and tariff decisions rather than industrial demand — that is policy risk wearing a sector label. And several sectors are not diversified groups at all: telecom is essentially one company. The more useful local framework replaces cycle stage with driver, asking what each sector actually responds to.',
        bn: 'চারটি কারণ। মধ্য-চক্রের নেতৃত্বের জায়গা নেওয়ার মতো কোনো প্রযুক্তি খাত নেই। মডেল যে আর্থিক খাতকে প্রাথমিক পুনরুদ্ধারে নেতৃত্ব দিতে দেখে, তা সুদচক্র নয় বরং খেলাপি ঋণের প্রকাশনা ও প্রভিশনিংয়ে লেনদেন হয়, আর এনবিএফআই ২০১৯ সাল থেকে কাঠামোগতভাবে ক্ষতিগ্রস্ত। জ্বালানি ও বিদ্যুৎ, একটি বড় খাত, সরকারি প্রতিপক্ষের কাছ থেকে ক্যাপাসিটি পেমেন্টে আয় করে, তাই এটি শিল্প চাহিদা নয় ভর্তুকি ও শুল্কের সিদ্ধান্তে সাড়া দেয় — এটি খাতের লেবেল পরা নীতি ঝুঁকি। আর কয়েকটি খাত আদৌ বৈচিত্র্যময় গোষ্ঠী নয়: টেলিকম মূলত একটি কোম্পানি। বেশি কার্যকর স্থানীয় কাঠামো চক্রের পর্যায়ের বদলে চালক বসায়, জিজ্ঞেস করে প্রতিটি খাত আসলে কীসে সাড়া দেয়।',
      },
    },
    {
      q: {
        en: 'The telecom sector shows RS of −0.83, roughly in line with the market. Would you take a position?',
        bn: 'টেলিকম খাত −০.৮৩ RS দেখাচ্ছে, বাজারের মোটামুটি সমান। আপনি কি পজিশন নেবেন?',
      },
      a: {
        en: 'Not on that basis, because that number is not a sector reading. Telecom is roughly 78% one constituent, giving about 1.3 effective names, so the −0.83 is Grameenphone\'s relative performance with a sector label attached. If I wanted the exposure I would evaluate it as a single-stock decision — against the liquidity filter, the position limits, and eventually a valuation — not as a sector allocation. I would also compute my total exposure to that one company across the whole portfolio first, because with GP at roughly 10% of market capitalisation, a telecom overweight is simultaneously an index bet rather than a diversification away from one.',
        bn: 'ঐ ভিত্তিতে নয়, কারণ সংখ্যাটি খাতের পাঠ নয়। টেলিকমের প্রায় ৭৮% একটি উপাদান, ফলে প্রায় ১.৩ কার্যকর নাম, তাই −০.৮৩ হলো খাতের লেবেল লাগানো গ্রামীণফোনের আপেক্ষিক কর্মক্ষমতা। এক্সপোজার চাইলে আমি একে একক-শেয়ারের সিদ্ধান্ত হিসেবে মূল্যায়ন করব — তারল্য ফিল্টার, পজিশন সীমা ও শেষ পর্যন্ত একটি মূল্যায়নের বিপরীতে — খাত বণ্টন হিসেবে নয়। আমি প্রথমে পুরো পোর্টফোলিওজুড়ে ঐ এক কোম্পানিতে আমার মোট এক্সপোজারও গণনা করব, কারণ জিপি বাজার মূলধনের প্রায় ১০% হওয়ায় টেলিকমে বাড়তি ওজন বাজার থেকে বৈচিত্র্যায়ন নয়, একই সঙ্গে সূচকের ওপর বাজি।',
      },
    },
    {
      q: {
        en: 'How would you distinguish a genuine rotation from noise?',
        bn: 'প্রকৃত রোটেশনকে গোলমাল থেকে কীভাবে আলাদা করবেন?',
      },
      a: {
        en: 'By requiring persistence in the direction of relative strength rather than reacting to its level in any single period. I would want at least three consecutive periods of same-signed change in RS before calling it rotation. A series oscillating around parity will generate a signal on almost any one-period rule while containing no information. This matters commercially as well as analytically: Chapter 2 established that round-trip costs on this exchange run from under 1% on liquid names to over 5% on illiquid ones, so a framework that fires on noise loses to one that does nothing. I would also want the turn identified early — the tradeable moment is when a lagging sector\'s momentum flips, not when it already tops the ranking table and the move is priced.',
        bn: 'যেকোনো একক সময়কালে আপেক্ষিক শক্তির স্তরে সাড়া না দিয়ে তার দিকে টিকে থাকা দাবি করে। রোটেশন বলার আগে আমি RS-এ অন্তত তিনটি পরপর একই চিহ্নের পরিবর্তন চাইব। সমতার আশপাশে দোল খাওয়া একটি ধারা প্রায় যেকোনো এক-সময়কালের নিয়মে সংকেত তৈরি করবে অথচ তাতে কোনো তথ্য নেই। এটি বিশ্লেষণগতভাবে যেমন, বাণিজ্যিকভাবেও তেমনই গুরুত্বপূর্ণ: অধ্যায় ২ প্রতিষ্ঠা করেছে এই এক্সচেঞ্জে রাউন্ড-ট্রিপ খরচ তরল নামে ১%-এর নিচে থেকে তারল্যহীন নামে ৫%-এর ওপরে যায়, তাই যে কাঠামো গোলমালে সাড়া দেয় তা কিছুই না করা কাঠামোর কাছে হারে। আমি মোড়টিও আগেভাগে চিহ্নিত করতে চাইব — লেনদেনযোগ্য মুহূর্ত হলো যখন পিছিয়ে থাকা খাতের গতি ঘুরে দাঁড়ায়, ক্রমতালিকার শীর্ষে ওঠার ও নড়াচড়া দামে ধরা পড়ার পর নয়।',
      },
    },
    {
      q: {
        en: 'A sector-level RS signal says money is flowing into textiles. What does that entitle you to conclude?',
        bn: 'খাত-স্তরের RS সংকেত বলছে বস্ত্রে টাকা ঢুকছে। এতে আপনি কী উপসংহার টানার অধিকার পান?',
      },
      a: {
        en: 'Only that capital is moving into the sector — nothing about which companies within it are worth owning. Textile has roughly 55 listed names with enormous quality dispersion, spanning well-run exporters and businesses that barely operate, so the sector average is close to uninformative about any individual constituent. Practically I would treat the signal as generating a starting list, then apply the Chapter 2 liquidity filter, which will disqualify a large fraction before any fundamental question is asked, and only then begin valuation work. Treating a sector inflow as a buy signal is precisely the error of mistaking Part I for Part II.',
        bn: 'কেবল এটুকু যে মূলধন খাতে সরছে — এর ভেতরের কোন কোম্পানি মালিকানার যোগ্য সে সম্পর্কে কিছুই নয়। বস্ত্রে প্রায় ৫৫টি তালিকাভুক্ত নাম, বিশাল মানের বিস্তারসহ, সুপরিচালিত রপ্তানিকারক থেকে সবে চলা ব্যবসা পর্যন্ত, তাই খাতের গড় কোনো একক উপাদান সম্পর্কে প্রায় তথ্যহীন। ব্যবহারিকভাবে আমি সংকেতটিকে একটি প্রাথমিক তালিকা তৈরির উপায় হিসেবে দেখব, তারপর অধ্যায় ২-এর তারল্য ফিল্টার প্রয়োগ করব, যা কোনো মৌলিক প্রশ্ন করার আগেই বড় একটি অংশ বাতিল করবে, এবং তবেই মূল্যায়নের কাজ শুরু করব। খাতে প্রবাহকে ক্রয় সংকেত ভাবাই ঠিক পর্ব ১-কে পর্ব ২ ভাবার ভুল।',
      },
    },
    {
      q: {
        en: 'Summarise what Part I entitles an investor to conclude, and what it does not.',
        bn: 'পর্ব ১ একজন বিনিয়োগকারীকে কী উপসংহার টানার অধিকার দেয় এবং কী দেয় না, সংক্ষেপে বলুন।',
      },
      a: {
        en: 'Part I answers whether to be in the market at all and at what size. It establishes the structure — regulator, exchanges, depository, intermediaries — the mechanics of liquidity and circuit breakers, how securities are issued and adjusted, who the participants are and what compels them to transact, how market phases behave, how to measure which phase you are in, and where capital is currently rotating. What it cannot answer is what to own. Relative strength shows where money is going; it says nothing about whether a given business is sound. That requires reading financial statements, which is Part II. The ordering matters and is not arbitrary: an excellent valuation of Square Pharmaceuticals bought in December 2010 still lost about 60% by 2012, because the prior question — should I be buying at all — had been answered wrongly, and no amount of company analysis rescues that.',
        bn: 'পর্ব ১ উত্তর দেয় আদৌ বাজারে থাকা উচিত কি না এবং কোন আকারে। এটি প্রতিষ্ঠা করে কাঠামো — নিয়ন্ত্রক, এক্সচেঞ্জ, ডিপোজিটরি, মধ্যস্থতাকারী — তারল্য ও সার্কিট ব্রেকারের কার্যপ্রণালী, সিকিউরিটিজ কীভাবে ইস্যু ও সমন্বিত হয়, অংশগ্রহণকারীরা কারা ও কী তাঁদের লেনদেনে বাধ্য করে, বাজারের পর্যায় কেমন আচরণ করে, কোন পর্যায়ে আছেন তা কীভাবে মাপবেন, এবং মূলধন এখন কোথায় ঘুরছে। যা এটি উত্তর দিতে পারে না তা হলো কী মালিকানায় রাখবেন। আপেক্ষিক শক্তি দেখায় টাকা কোথায় যাচ্ছে; একটি নির্দিষ্ট ব্যবসা সুদৃঢ় কি না সে সম্পর্কে কিছুই বলে না। তার জন্য আর্থিক বিবরণী পড়তে হয়, যা পর্ব ২। ক্রমটি গুরুত্বপূর্ণ এবং এলোমেলো নয়: ২০১০ সালের ডিসেম্বরে কেনা স্কয়ার ফার্মার একটি চমৎকার মূল্যায়নও ২০১২ সালের মধ্যে প্রায় ৬০% হারিয়েছিল, কারণ পূর্ববর্তী প্রশ্ন — আমার কি আদৌ কেনা উচিত — এর উত্তর ভুল ছিল, আর কোনো পরিমাণ কোম্পানি বিশ্লেষণ তা বাঁচায় না।',
      },
    },
  ],

  quiz: [
    {
      q: { en: 'Relative strength is computed as:', bn: 'আপেক্ষিক শক্তি গণনা করা হয়:' },
      options: {
        en: ['Sector index × market index', 'Sector index ÷ market index', 'Sector index − face value', 'Sector P/E ÷ market P/E'],
        bn: ['খাত সূচক × বাজার সূচক', 'খাত সূচক ÷ বাজার সূচক', 'খাত সূচক − অভিহিত মূল্য', 'খাত P/E ÷ বাজার P/E'],
      },
      answer: 1,
    },
    {
      q: {
        en: 'If a sector’s top constituent is 78% of its market cap, effective names is about:',
        bn: 'কোনো খাতের শীর্ষ উপাদান তার বাজার মূলধনের ৭৮% হলে কার্যকর নাম প্রায়:',
      },
      options: { en: ['0.8', '1.3', '7.8', '78'], bn: ['০.৮', '১.৩', '৭.৮', '৭৮'] },
      answer: 1,
    },
    {
      q: {
        en: 'The DSE banking sector primarily trades on:',
        bn: 'ডিএসই ব্যাংকিং খাত মূলত লেনদেন হয়:',
      },
      options: {
        en: ['The industrial cycle', 'NPL disclosures and provisioning', 'Global commodity prices', 'Spectrum policy'],
        bn: ['শিল্পচক্রে', 'খেলাপি ঋণের প্রকাশনা ও প্রভিশনিংয়ে', 'বৈশ্বিক পণ্যমূল্যে', 'স্পেকট্রাম নীতিতে'],
      },
      answer: 1,
    },
    {
      q: { en: 'Fuel & Power returns depend chiefly on:', bn: 'জ্বালানি ও বিদ্যুতের রিটার্ন মূলত নির্ভর করে:' },
      options: {
        en: ['Industrial demand', 'Government subsidy and tariff decisions', 'Export orders', 'Interest rates'],
        bn: ['শিল্প চাহিদায়', 'সরকারি ভর্তুকি ও শুল্কের সিদ্ধান্তে', 'রপ্তানি অর্ডারে', 'সুদহারে'],
      },
      answer: 1,
    },
    {
      q: {
        en: 'Market returns +5.08% and a sector returns +11.29%. Its RS spread is:',
        bn: 'বাজার +৫.০৮% ও একটি খাত +১১.২৯% রিটার্ন দিলে RS ব্যবধান:',
      },
      options: { en: ['+2.22', '+5.08', '+6.21', '+16.37'], bn: ['+২.২২', '+৫.০৮', '+৬.২১', '+১৬.৩৭'] },
      answer: 2,
    },
    {
      q: {
        en: 'Before reading a sector’s RS number, you should first:',
        bn: 'কোনো খাতের RS সংখ্যা পড়ার আগে প্রথমে আপনার উচিত:',
      },
      options: {
        en: ['Check its P/E', 'Compute effective names', 'Check the dividend yield', 'Look at the index level'],
        bn: ['এর P/E দেখা', 'কার্যকর নাম গণনা করা', 'লভ্যাংশ ফলন দেখা', 'সূচকের স্তর দেখা'],
      },
      answer: 1,
    },
    {
      q: {
        en: 'A rotation signal should require:',
        bn: 'একটি রোটেশন সংকেতের জন্য দরকার:',
      },
      options: {
        en: ['One period’s RS move', 'At least three periods of sustained direction', 'A 20% sector move', 'BSEC confirmation'],
        bn: ['এক সময়কালের RS নড়াচড়া', 'অন্তত তিন সময়কালের টেকসই দিক', '২০% খাত পরিবর্তন', 'বিএসইসি নিশ্চিতকরণ'],
      },
      answer: 1,
    },
    {
      q: {
        en: 'A telecom overweight is simultaneously an index bet because:',
        bn: 'টেলিকমে বাড়তি ওজন একই সঙ্গে সূচকের ওপর বাজি কারণ:',
      },
      options: {
        en: [
          'Telecom is Shariah-compliant',
          'The sector and index share their largest constituent',
          'Telecom has the highest P/E',
          'Telecom settles on T+1',
        ],
        bn: [
          'টেলিকম শরিয়াহ-সম্মত',
          'খাত ও সূচক তাদের বৃহত্তম উপাদান ভাগ করে নেয়',
          'টেলিকমের P/E সর্বোচ্চ',
          'টেলিকম T+১-এ নিষ্পত্তি হয়',
        ],
      },
      answer: 1,
    },
    {
      q: {
        en: 'A sector-level inflow signal in textiles tells you:',
        bn: 'বস্ত্রে খাত-স্তরের প্রবাহ সংকেত আপনাকে বলে:',
      },
      options: {
        en: [
          'Which textile companies are sound',
          'Only that capital is moving into the sector',
          'That all constituents will rise',
          'That the taka has strengthened',
        ],
        bn: [
          'কোন বস্ত্র কোম্পানিগুলো সুদৃঢ়',
          'কেবল এটুকু যে মূলধন খাতে সরছে',
          'সব উপাদানের দাম বাড়বে',
          'টাকা শক্তিশালী হয়েছে',
        ],
      },
      answer: 1,
    },
    {
      q: {
        en: 'Part I of this book is designed to answer:',
        bn: 'এই বইয়ের পর্ব ১ যে প্রশ্নের উত্তর দিতে তৈরি:',
      },
      options: {
        en: [
          'Which company to buy',
          'Whether to be in the market and at what size',
          'How to read an income statement',
          'How to compute intrinsic value',
        ],
        bn: [
          'কোন কোম্পানি কিনবেন',
          'বাজারে থাকা উচিত কি না এবং কোন আকারে',
          'আয় বিবরণী কীভাবে পড়বেন',
          'অন্তর্নিহিত মূল্য কীভাবে গণনা করবেন',
        ],
      },
      answer: 1,
    },
  ],
};
