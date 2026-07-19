/**
 * Chapter 1 — The Bangladesh Capital Market
 * Source: 00_Front_Matter_and_Part_I.md §1.1–1.17
 */

export default {
  n: 1,
  tools: ['buffett'],

  /** Live-formula spreadsheet for §1.10, downloadable as .xlsx. */
  excelSheet: {
    filename: 'ch01-buffett-indicator.xlsx',
    sheetName: 'Buffett Indicator',
    cells: [
      { cell: 'A1', v: 'Total Market Cap (BDT trn)' }, { cell: 'B1', v: 7.2 },
      { cell: 'A2', v: 'Nominal GDP (BDT trn)' }, { cell: 'B2', v: 50 },
      { cell: 'A3', v: 'Buffett Indicator (%)' }, { cell: 'B3', f: 'B1/B2*100' },

      { cell: 'A5', v: 'Historical Min (%)' }, { cell: 'B5', v: 9.5 },
      { cell: 'A6', v: 'Historical Max (%)' }, { cell: 'B6', v: 22.0 },
      { cell: 'A7', v: 'Percentile Position' }, { cell: 'B7', f: '(B3-B5)/(B6-B5)' },

      { cell: 'A9', v: 'Signal' },
      {
        cell: 'B9',
        f: 'IF(B7>0.8,"Historically Rich",IF(B7<0.2,"Historically Cheap","Neutral"))',
      },

      { cell: 'A11', v: 'Daily Turnover (BDT cr)' }, { cell: 'B11', v: 800 },
      { cell: 'A12', v: 'Turnover Velocity (% p.a.)' },
      { cell: 'B12', f: '(B11*250/100000)/B1*100' },
    ],
  },

  objectives: {
    en: [
      'Name the four structural layers of the Bangladesh capital market and what each does.',
      'Explain why demutualization was necessary and what it did *not* fix.',
      'Compute the Buffett Indicator and explain why the cross-country comparison is invalid here.',
      'Distinguish DGEN from DSEX and articulate why their levels cannot be compared.',
      'Justify the claim that structure explains returns more often than stock-picking does.',
    ],
    bn: [
      'বাংলাদেশ পুঁজিবাজারের চারটি কাঠামোগত স্তর ও প্রতিটির কাজ চিহ্নিত করা।',
      'ডিমিউচুয়ালাইজেশন কেন প্রয়োজন ছিল এবং এটি যা ঠিক করেনি তা ব্যাখ্যা করা।',
      'বাফেট নির্দেশক গণনা করা এবং কেন এখানে দেশভিত্তিক তুলনা অবৈধ তা ব্যাখ্যা করা।',
      'DGEN ও DSEX-এর পার্থক্য এবং কেন এদের মান তুলনীয় নয় তা বলা।',
      'কেন কাঠামো স্টক-বাছাইয়ের চেয়ে বেশি বার রিটার্ন ব্যাখ্যা করে — এই দাবির যৌক্তিকতা দেওয়া।',
    ],
  },

  blocks: {
    theory: {
      en: `A **capital market** is the mechanism by which surplus units in an economy (savers) transfer funds to deficit units (businesses needing long-term finance), in exchange for claims on future cash flows. It is distinguished from the **money market**, which deals in instruments of under one year (treasury bills, call money, commercial paper).

The Bangladesh capital market has four structural layers:

**Layer 1 — The Regulator.**
The **Bangladesh Securities and Exchange Commission (BSEC)** is the statutory regulator, established under the *Securities and Exchange Commission Act, 1993*. Its powers derive from that Act plus the *Securities and Exchange Ordinance, 1969*. BSEC does five things: (a) registers market intermediaries, (b) approves public issues, (c) frames and enforces rules, (d) investigates manipulation, (e) protects investor interest.

**Layer 2 — The Exchanges.**
- **Dhaka Stock Exchange (DSE)** — founded 1954 as East Pakistan Stock Exchange Association, trading began 1956, renamed DSE 1964. It is the dominant exchange, carrying roughly 90%+ of national turnover.
- **Chittagong Stock Exchange (CSE)** — founded 1995, based in Agrabad, Chittagong.

Both were **demutualized** under the *Exchanges Demutualization Act, 2013*, which legally separated ownership from trading rights. Before demutualization, a broker *owned* the exchange and *traded* on it — an obvious conflict. After demutualization, brokers hold shares as investors, but governance sits with a board including independent directors, and a strategic investor stake was mandated (DSE's went to a Shenzhen–Shanghai Stock Exchange consortium in 2018).

**Layer 3 — The Depository.**
**CDBL (Central Depository Bangladesh Limited)** holds shares in electronic (dematerialized) form. Your shares do not exist as paper in a drawer; they exist as a book entry in CDBL against your **BO (Beneficial Owner) account**. This matters practically: it is why settlement can be T+2 rather than T+14, and why forged share certificates — a real 1996 problem — are no longer a systemic risk.

**Layer 4 — Intermediaries.**
Brokerage houses (TREC holders), merchant banks (issue management, underwriting, portfolio management), asset management companies (mutual funds), credit rating agencies (CRAB, CRISL, ECRL, ACRSL), and custodian banks.`,
      bn: `**পুঁজিবাজার** হলো সেই ব্যবস্থা যার মাধ্যমে অর্থনীতির উদ্বৃত্ত একক (সঞ্চয়কারী) ঘাটতি এককে (দীর্ঘমেয়াদি অর্থায়ন প্রয়োজন এমন ব্যবসা) তহবিল স্থানান্তর করে, ভবিষ্যৎ নগদ প্রবাহের দাবির বিনিময়ে। এটি **মুদ্রাবাজার** থেকে আলাদা, যা এক বছরের কম মেয়াদি উপকরণ নিয়ে কারবার করে (ট্রেজারি বিল, কল মানি, বাণিজ্যিক কাগজ)।

বাংলাদেশের পুঁজিবাজারের চারটি কাঠামোগত স্তর রয়েছে:

**স্তর ১ — নিয়ন্ত্রক।**
**বাংলাদেশ সিকিউরিটিজ অ্যান্ড এক্সচেঞ্জ কমিশন (বিএসইসি)** হলো সংবিধিবদ্ধ নিয়ন্ত্রক, যা *সিকিউরিটিজ অ্যান্ড এক্সচেঞ্জ কমিশন আইন, ১৯৯৩* এর অধীনে প্রতিষ্ঠিত। এর ক্ষমতা আসে ঐ আইন এবং *সিকিউরিটিজ অ্যান্ড এক্সচেঞ্জ অধ্যাদেশ, ১৯৬৯* থেকে। বিএসইসি পাঁচটি কাজ করে: (ক) বাজার মধ্যস্থতাকারীদের নিবন্ধন, (খ) পাবলিক ইস্যু অনুমোদন, (গ) বিধি প্রণয়ন ও প্রয়োগ, (ঘ) কারসাজি তদন্ত, (ঙ) বিনিয়োগকারীর স্বার্থ রক্ষা।

**স্তর ২ — এক্সচেঞ্জসমূহ।**
- **ঢাকা স্টক এক্সচেঞ্জ (ডিএসই)** — ১৯৫৪ সালে পূর্ব পাকিস্তান স্টক এক্সচেঞ্জ অ্যাসোসিয়েশন হিসেবে প্রতিষ্ঠিত, লেনদেন শুরু ১৯৫৬ সালে, ১৯৬৪ সালে ডিএসই নামকরণ। এটিই প্রধান এক্সচেঞ্জ, জাতীয় লেনদেনের প্রায় ৯০%+ বহন করে।
- **চট্টগ্রাম স্টক এক্সচেঞ্জ (সিএসই)** — ১৯৯৫ সালে প্রতিষ্ঠিত, আগ্রাবাদ, চট্টগ্রামে অবস্থিত।

উভয়ই *এক্সচেঞ্জ ডিমিউচুয়ালাইজেশন আইন, ২০১৩* এর অধীনে **ডিমিউচুয়ালাইজড** হয়েছে, যা মালিকানাকে লেনদেনের অধিকার থেকে আইনগতভাবে পৃথক করেছে। ডিমিউচুয়ালাইজেশনের আগে একজন ব্রোকার এক্সচেঞ্জের *মালিক* ছিলেন এবং সেখানেই *লেনদেন* করতেন — একটি স্পষ্ট স্বার্থের সংঘাত। এরপর ব্রোকাররা বিনিয়োগকারী হিসেবে শেয়ার ধারণ করেন, কিন্তু পরিচালনা স্বাধীন পরিচালকসহ একটি বোর্ডের হাতে, এবং একটি কৌশলগত বিনিয়োগকারীর অংশীদারিত্ব বাধ্যতামূলক করা হয় (ডিএসই-রটি ২০১৮ সালে শেনজেন–সাংহাই স্টক এক্সচেঞ্জ কনসোর্টিয়ামের কাছে যায়)।

**স্তর ৩ — ডিপোজিটরি।**
**সিডিবিএল (সেন্ট্রাল ডিপোজিটরি বাংলাদেশ লিমিটেড)** শেয়ার ইলেকট্রনিক (ডিম্যাটেরিয়ালাইজড) আকারে ধারণ করে। আপনার শেয়ার ড্রয়ারে কাগজ হিসেবে থাকে না; সেগুলো আপনার **বিও (বেনিফিশিয়াল ওনার) অ্যাকাউন্টের** বিপরীতে সিডিবিএল-এ একটি হিসাব-এন্ট্রি হিসেবে থাকে। ব্যবহারিকভাবে এটি গুরুত্বপূর্ণ: এ কারণেই নিষ্পত্তি T+১৪ নয়, T+২ হতে পারে, এবং জাল শেয়ার সার্টিফিকেট — যা ১৯৯৬ সালের বাস্তব সমস্যা ছিল — আর কাঠামোগত ঝুঁকি নয়।

**স্তর ৪ — মধ্যস্থতাকারী।**
ব্রোকারেজ হাউস (TREC ধারক), মার্চেন্ট ব্যাংক (ইস্যু ব্যবস্থাপনা, আন্ডাররাইটিং, পোর্টফোলিও ব্যবস্থাপনা), সম্পদ ব্যবস্থাপনা কোম্পানি (মিউচুয়াল ফান্ড), ক্রেডিট রেটিং এজেন্সি (CRAB, CRISL, ECRL, ACRSL), এবং কাস্টোডিয়ান ব্যাংক।`,
    },

    simple: {
      en: `Think of it as a fruit market with four kinds of people.

- **BSEC** is the market inspector who checks the scales and can shut down a cheating stall.
- **DSE/CSE** is the physical marketplace — the stalls, the aisles, the price board.
- **CDBL** is the warehouse that actually holds the fruit and updates the ledger when it changes hands.
- **Your broker** is the agent you send to the market because you are not allowed to walk in yourself.

You never touch the fruit. You just own a line in the warehouse ledger.

---

### Why this matters before you buy anything

Most retail investors in Bangladesh skip straight to "which share will go up." That is a mistake, for a specific and provable reason: **the Bangladesh market has had two full crashes driven not by company fundamentals but by structural and regulatory failure.**

**The 1996 crash.** Between January and November 1996 the DSE General Index rose from roughly 830 to about 3,650 — a rise of over 300% in eleven months. There was no corresponding growth in corporate earnings. The mechanics were: paper share certificates (no CDBL yet), a settlement cycle long enough to allow the same share to be sold multiple times, kerb-market trading outside the exchange floor, and outright forged certificates. By April 1997 the index was back near 950. Retail investors, who had entered late and at the top, absorbed the loss.

**The 2010–11 crash.** The DGEN peaked around 8,900 in December 2010 and fell to roughly 3,600 by early 2012. The causes were denser: excessive margin loan exposure (ratios as loose as 1:2), omnibus accounts at merchant banks that concealed the true beneficial owner and enabled manipulation, book-building abuse in IPO pricing, direct listing of companies at inflated indicative prices, and a huge liquidity inflow following the 2007–08 political transition with nowhere else to go. The **Khondker Ibrahim Khaled Probe Committee Report (2011)** documented this in detail and named specific mechanisms — it remains the single most useful document a serious DSE investor can read.

The lesson is not "the market is rigged, stay away." The lesson is: **structure explains returns more often than stock-picking does.** A brilliant fundamental analysis of Square Pharmaceuticals in December 2010 would still have lost you 60% by 2012, because the problem was not Square. It was leverage and liquidity.`,
      bn: `একে চার ধরনের মানুষসহ একটি ফলের বাজার হিসেবে ভাবুন।

- **বিএসইসি** হলো বাজার পরিদর্শক, যিনি দাঁড়িপাল্লা পরীক্ষা করেন এবং প্রতারক দোকান বন্ধ করে দিতে পারেন।
- **ডিএসই/সিএসই** হলো প্রকৃত বাজারস্থল — দোকান, গলি, দামের বোর্ড।
- **সিডিবিএল** হলো সেই গুদাম যা আসলে ফল ধরে রাখে এবং হাতবদল হলে খতিয়ান হালনাগাদ করে।
- **আপনার ব্রোকার** হলেন সেই প্রতিনিধি যাঁকে আপনি বাজারে পাঠান, কারণ আপনি নিজে ঢুকতে পারেন না।

আপনি কখনো ফল স্পর্শ করেন না। আপনি কেবল গুদামের খতিয়ানে একটি লাইনের মালিক।

---

### কেনার আগে কেন এটি গুরুত্বপূর্ণ

বাংলাদেশের বেশিরভাগ খুচরা বিনিয়োগকারী সরাসরি "কোন শেয়ার বাড়বে" প্রশ্নে চলে যান। এটি একটি ভুল, এবং তার একটি সুনির্দিষ্ট ও প্রমাণযোগ্য কারণ আছে: **বাংলাদেশের বাজারে দুটি পূর্ণাঙ্গ ধস হয়েছে, যেগুলো কোম্পানির মৌলভিত্তি নয় বরং কাঠামোগত ও নিয়ন্ত্রক ব্যর্থতার কারণে ঘটেছে।**

**১৯৯৬ সালের ধস।** ১৯৯৬ সালের জানুয়ারি থেকে নভেম্বরের মধ্যে ডিএসই সাধারণ সূচক প্রায় ৮৩০ থেকে প্রায় ৩,৬৫০-এ ওঠে — এগারো মাসে ৩০০%-এর বেশি বৃদ্ধি। কর্পোরেট মুনাফায় সংশ্লিষ্ট কোনো প্রবৃদ্ধি ছিল না। কার্যপ্রণালী ছিল: কাগজের শেয়ার সার্টিফিকেট (তখনো সিডিবিএল ছিল না), একই শেয়ার একাধিকবার বিক্রির সুযোগ দেওয়ার মতো দীর্ঘ নিষ্পত্তি চক্র, এক্সচেঞ্জ ফ্লোরের বাইরে কার্ব-মার্কেট লেনদেন, এবং সরাসরি জাল সার্টিফিকেট। ১৯৯৭ সালের এপ্রিলের মধ্যে সূচক আবার ৯৫০-এর কাছাকাছি নেমে আসে। যেসব খুচরা বিনিয়োগকারী দেরিতে ও শীর্ষে প্রবেশ করেছিলেন, তাঁরাই ক্ষতি শুষে নেন।

**২০১০–১১ সালের ধস।** DGEN ২০১০ সালের ডিসেম্বরে প্রায় ৮,৯০০-এ শীর্ষে ওঠে এবং ২০১২ সালের শুরুতে প্রায় ৩,৬০০-এ নেমে যায়। কারণগুলো ছিল আরও ঘন: অতিরিক্ত মার্জিন ঋণ (১:২ পর্যন্ত শিথিল অনুপাত), মার্চেন্ট ব্যাংকে অমনিবাস অ্যাকাউন্ট যা প্রকৃত সুবিধাভোগী মালিককে আড়াল করে কারসাজি সম্ভব করত, আইপিও মূল্য নির্ধারণে বুক-বিল্ডিংয়ের অপব্যবহার, স্ফীত নির্দেশক মূল্যে কোম্পানির সরাসরি তালিকাভুক্তি, এবং ২০০৭–০৮ রাজনৈতিক পটপরিবর্তনের পর বিপুল তারল্য প্রবাহ যার আর কোথাও যাওয়ার জায়গা ছিল না। **খোন্দকার ইব্রাহিম খালেদ তদন্ত কমিটির প্রতিবেদন (২০১১)** এটি বিস্তারিতভাবে নথিভুক্ত করে এবং নির্দিষ্ট কৌশলগুলোর নাম উল্লেখ করে — একজন গুরুতর ডিএসই বিনিয়োগকারীর পড়ার জন্য এটিই এখনো সবচেয়ে কার্যকর দলিল।

শিক্ষাটি "বাজার কারচুপিপূর্ণ, দূরে থাকুন" নয়। শিক্ষাটি হলো: **স্টক-বাছাইয়ের চেয়ে কাঠামোই বেশি বার রিটার্ন ব্যাখ্যা করে।** ২০১০ সালের ডিসেম্বরে স্কয়ার ফার্মাসিউটিক্যালসের একটি চমৎকার মৌল বিশ্লেষণও আপনাকে ২০১২ সালের মধ্যে ৬০% ক্ষতি থেকে বাঁচাত না, কারণ সমস্যাটি স্কয়ার ছিল না। সমস্যা ছিল লিভারেজ ও তারল্য।`,
    },

    example: {
      en: `### The market today — scale and composition

Indicative structural figures (verify current numbers on dsebd.org):

| Metric | Approximate scale |
|---|---|
| Listed securities (DSE) | ~350 companies + ~35 mutual funds + ~250 govt. treasury bonds + corporate bonds |
| Market capitalization | ~BDT 6.5–8 trillion range (highly variable) |
| Market cap to GDP | ~12–18% |
| Daily turnover (normal market) | ~BDT 400–1,200 crore |
| Daily turnover (bull phase) | can exceed BDT 2,500 crore |
| BO accounts | ~1.8 million (of which a large share are dormant) |

**Read the market cap to GDP ratio carefully.** India sits near 100%+, Malaysia near 90%, Vietnam near 50%. Bangladesh at ~15% tells you something important: the listed market is not representative of the Bangladeshi economy. The largest private employers, the biggest RMG groups, and much of the real economy are simply not listed. This has two consequences:

1. **You cannot buy "Bangladesh's growth" by buying the index.** The index is banks, pharma, telecom, cement, and textiles — not the economy.
2. **There is enormous latent supply.** Every large unlisted company is a potential future IPO, which is a structural cap on valuations.

### Sector composition of the DSE

| Sector | Approx. weight | Character |
|---|---|---|
| Banking | ~14–18% | Many listed banks (30+), low P/E, high P/B discount, NPL-driven |
| Pharmaceuticals & Chemicals | ~12–16% | Quality sector, domestic demand driven, export upside |
| Telecommunication | ~10–14% | Concentrated (GP, ROBI), regulated, high dividend |
| Fuel & Power | ~8–12% | Government-linked, capacity payment model, policy risk |
| Engineering | ~5–8% | Cyclical |
| Textile | ~4–6% | ~55 listed companies, mostly small, wide quality range |
| Food & Allied | ~4–6% | Includes BATBC (dominant single name) |
| Cement | ~2–3% | ~7 listed, high fixed cost, energy sensitive |
| NBFI | ~2–3% | Structurally stressed post-2019 |
| Insurance | ~3–5% | Highly speculative trading behavior |
| Mutual Funds | ~1–2% | Persistent NAV discount |

**The critical structural fact:** a very small number of scrips carry a disproportionate share of market cap. Grameenphone alone has at times been ~10% of total market cap. This means the DSEX index can move meaningfully on one company's news, which distorts what "the market went up today" actually means.

### The indices

- **DSEX (DSE Broad Index)** — launched January 2013, calculated with S&P Dow Jones methodology, free-float market-cap weighted. Base 2,951.91 (base date 27 Jan 2013). This is the headline index today.
- **DSES (DSE Shariah Index)** — Shariah-compliant subset, screened by the Shariah advisory.
- **DS30 (DSE 30 Index)** — 30 selected large, liquid, fundamentally sound companies. Closest thing to a "blue-chip" index.
- **DGEN (DSE General Index)** — the *old* index, discontinued 2013. When someone says "the index hit 8,900 in 2010" they mean DGEN, not DSEX. **Do not compare DGEN and DSEX levels directly** — different base, different methodology, different constituents. This is the single most common error in Bangladeshi market commentary.

**Free-float weighting matters.** DSEX weights by *free float*, not total shares. If a company is 90% held by sponsors and the government, only 10% counts toward index weight. This is why some very large companies have modest index influence.

### Why structure beats stock-picking

Consider two hypothetical investors, both entering in November 2010.

**Investor A** does no fundamental work. Buys the DGEN index at ~8,500.
**Investor B** does excellent fundamental work. Correctly identifies Square Pharmaceuticals as the highest-quality company on the exchange — genuine ROE, real export revenue, clean governance, dominant domestic market share. Buys at the December 2010 price.

By February 2012, both are down heavily. Investor B is down less, and recovers faster, and by 2018 is far ahead. But **for fourteen months, being right about the company did not protect against being wrong about the market phase.**

This is the entire argument for Part I existing. Company analysis (Part II) tells you *what* to buy. Market structure and cycle (Part I, Chapters 6–8) tell you *whether to be buying at all*.`,
      bn: `### আজকের বাজার — আকার ও গঠন

নির্দেশক কাঠামোগত পরিসংখ্যান (বর্তমান সংখ্যা dsebd.org-এ যাচাই করুন):

| পরিমাপ | আনুমানিক আকার |
|---|---|
| তালিকাভুক্ত সিকিউরিটিজ (ডিএসই) | ~৩৫০ কোম্পানি + ~৩৫ মিউচুয়াল ফান্ড + ~২৫০ সরকারি ট্রেজারি বন্ড + কর্পোরেট বন্ড |
| বাজার মূলধন | ~৬.৫–৮ ট্রিলিয়ন টাকার পরিসরে (অত্যন্ত পরিবর্তনশীল) |
| বাজার মূলধন ও জিডিপির অনুপাত | ~১২–১৮% |
| দৈনিক লেনদেন (স্বাভাবিক বাজার) | ~৪০০–১,২০০ কোটি টাকা |
| দৈনিক লেনদেন (বুল পর্যায়) | ২,৫০০ কোটি টাকা ছাড়াতে পারে |
| বিও অ্যাকাউন্ট | ~১৮ লক্ষ (যার বড় অংশ নিষ্ক্রিয়) |

**বাজার মূলধন ও জিডিপির অনুপাত সাবধানে পড়ুন।** ভারত প্রায় ১০০%+, মালয়েশিয়া প্রায় ৯০%, ভিয়েতনাম প্রায় ৫০%। বাংলাদেশের ~১৫% আপনাকে গুরুত্বপূর্ণ কিছু বলে: তালিকাভুক্ত বাজার বাংলাদেশের অর্থনীতির প্রতিনিধিত্ব করে না। বৃহত্তম বেসরকারি নিয়োগকর্তা, সবচেয়ে বড় আরএমজি গ্রুপ এবং প্রকৃত অর্থনীতির অনেকটাই কেবল তালিকাভুক্ত নয়। এর দুটি পরিণতি:

১. **সূচক কিনে আপনি "বাংলাদেশের প্রবৃদ্ধি" কিনতে পারবেন না।** সূচক হলো ব্যাংক, ওষুধ, টেলিকম, সিমেন্ট ও বস্ত্র — অর্থনীতি নয়।
২. **বিপুল সুপ্ত সরবরাহ রয়েছে।** প্রতিটি বড় অতালিকাভুক্ত কোম্পানি সম্ভাব্য ভবিষ্যৎ আইপিও, যা মূল্যায়নের ওপর একটি কাঠামোগত সীমা।

### ডিএসই-র খাতভিত্তিক গঠন

| খাত | আনুমানিক ওজন | চরিত্র |
|---|---|---|
| ব্যাংকিং | ~১৪–১৮% | বহু তালিকাভুক্ত ব্যাংক (৩০+), কম P/E, উচ্চ P/B ছাড়, খেলাপি-চালিত |
| ওষুধ ও রসায়ন | ~১২–১৬% | গুণগত খাত, অভ্যন্তরীণ চাহিদা-চালিত, রপ্তানি সম্ভাবনা |
| টেলিযোগাযোগ | ~১০–১৪% | কেন্দ্রীভূত (জিপি, রবি), নিয়ন্ত্রিত, উচ্চ লভ্যাংশ |
| জ্বালানি ও বিদ্যুৎ | ~৮–১২% | সরকার-সংশ্লিষ্ট, ক্যাপাসিটি পেমেন্ট মডেল, নীতি ঝুঁকি |
| প্রকৌশল | ~৫–৮% | চক্রীয় |
| বস্ত্র | ~৪–৬% | ~৫৫ তালিকাভুক্ত কোম্পানি, বেশিরভাগ ছোট, গুণমানে ব্যাপক তারতম্য |
| খাদ্য ও সহযোগী | ~৪–৬% | BATBC অন্তর্ভুক্ত (একক প্রভাবশালী নাম) |
| সিমেন্ট | ~২–৩% | ~৭ তালিকাভুক্ত, উচ্চ স্থির ব্যয়, জ্বালানি সংবেদনশীল |
| এনবিএফআই | ~২–৩% | ২০১৯-পরবর্তী কাঠামোগতভাবে চাপগ্রস্ত |
| বীমা | ~৩–৫% | অত্যন্ত ফটকাধর্মী লেনদেন আচরণ |
| মিউচুয়াল ফান্ড | ~১–২% | স্থায়ী NAV ছাড় |

**গুরুত্বপূর্ণ কাঠামোগত সত্য:** খুব অল্প সংখ্যক স্ক্রিপ বাজার মূলধনের অসামঞ্জস্যপূর্ণ অংশ বহন করে। কেবল গ্রামীণফোনই কখনো কখনো মোট বাজার মূলধনের ~১০% ছিল। এর অর্থ একটি কোম্পানির খবরে DSEX সূচক উল্লেখযোগ্যভাবে নড়তে পারে, যা "আজ বাজার বেড়েছে" কথাটির প্রকৃত অর্থ বিকৃত করে।

### সূচকসমূহ

- **DSEX (ডিএসই ব্রড ইনডেক্স)** — জানুয়ারি ২০১৩-এ চালু, S&P ডাও জোন্স পদ্ধতিতে গণিত, ফ্রি-ফ্লোট বাজার-মূলধন ভারিত। ভিত্তি ২,৯৫১.৯১ (ভিত্তি তারিখ ২৭ জানুয়ারি ২০১৩)। এটিই আজকের শিরোনাম সূচক।
- **DSES (ডিএসই শরিয়াহ সূচক)** — শরিয়াহ-সম্মত উপসেট, শরিয়াহ উপদেষ্টা দ্বারা যাচাইকৃত।
- **DS30 (ডিএসই ৩০ সূচক)** — ৩০টি নির্বাচিত বড়, তরল, মৌলভিত্তিতে সুদৃঢ় কোম্পানি। "ব্লু-চিপ" সূচকের সবচেয়ে কাছাকাছি।
- **DGEN (ডিএসই সাধারণ সূচক)** — *পুরোনো* সূচক, ২০১৩ সালে বন্ধ। কেউ যখন বলেন "২০১০ সালে সূচক ৮,৯০০ ছুঁয়েছিল" তখন তিনি DGEN বোঝাচ্ছেন, DSEX নয়। **DGEN ও DSEX-এর মান সরাসরি তুলনা করবেন না** — ভিন্ন ভিত্তি, ভিন্ন পদ্ধতি, ভিন্ন উপাদান। বাংলাদেশি বাজার ভাষ্যে এটিই সবচেয়ে সাধারণ ভুল।

**ফ্রি-ফ্লোট ভারাঙ্কন গুরুত্বপূর্ণ।** DSEX মোট শেয়ার নয়, *ফ্রি ফ্লোট* অনুযায়ী ওজন দেয়। কোনো কোম্পানির ৯০% যদি উদ্যোক্তা ও সরকারের হাতে থাকে, তবে সূচক ওজনে কেবল ১০% গণ্য হয়। এ কারণেই কিছু অত্যন্ত বড় কোম্পানির সূচকে প্রভাব সামান্য।

### কেন কাঠামো স্টক-বাছাইকে হারায়

দুজন কাল্পনিক বিনিয়োগকারীর কথা ভাবুন, দুজনই ২০১০ সালের নভেম্বরে প্রবেশ করছেন।

**বিনিয়োগকারী ক** কোনো মৌল বিশ্লেষণ করেন না। ~৮,৫০০-এ DGEN সূচক কেনেন।
**বিনিয়োগকারী খ** চমৎকার মৌল বিশ্লেষণ করেন। সঠিকভাবে স্কয়ার ফার্মাসিউটিক্যালসকে এক্সচেঞ্জের সর্বোচ্চ গুণমানের কোম্পানি হিসেবে চিহ্নিত করেন — প্রকৃত ROE, বাস্তব রপ্তানি রাজস্ব, স্বচ্ছ পরিচালনা, প্রভাবশালী অভ্যন্তরীণ বাজার অংশ। ২০১০ সালের ডিসেম্বরের দামে কেনেন।

২০১২ সালের ফেব্রুয়ারির মধ্যে দুজনেই ব্যাপকভাবে ক্ষতিগ্রস্ত। বিনিয়োগকারী খ কম ক্ষতিগ্রস্ত, দ্রুত পুনরুদ্ধার করেন, এবং ২০১৮ সালের মধ্যে অনেক এগিয়ে। কিন্তু **চৌদ্দ মাস ধরে, কোম্পানি সম্পর্কে সঠিক হওয়া বাজার পর্যায় সম্পর্কে ভুল হওয়া থেকে রক্ষা করেনি।**

এটাই পর্ব ১-এর অস্তিত্বের সম্পূর্ণ যুক্তি। কোম্পানি বিশ্লেষণ (পর্ব ২) বলে *কী* কিনবেন। বাজার কাঠামো ও চক্র (পর্ব ১, অধ্যায় ৬–৮) বলে *আদৌ কেনা উচিত কি না*।`,
    },

    formula: {
      en: `*N/A — this chapter is structural.*

One useful ratio introduced here for later use:

**Market Capitalization to GDP ("Buffett Indicator")**

$$\\text{Buffett Indicator} = \\frac{\\text{Total Market Capitalization}}{\\text{Nominal GDP}} \\times 100$$`,
      bn: `*প্রযোজ্য নয় — এই অধ্যায়টি কাঠামোগত।*

পরবর্তী ব্যবহারের জন্য এখানে একটি কার্যকর অনুপাত পরিচয় করানো হলো:

**বাজার মূলধন ও জিডিপির অনুপাত ("বাফেট নির্দেশক")**

$$\\text{বাফেট নির্দেশক} = \\frac{\\text{মোট বাজার মূলধন}}{\\text{নামমাত্র জিডিপি}} \\times 100$$`,
    },

    manual: {
      en: `Suppose total DSE market capitalization is BDT 7,200,000 crore… let us use consistent units.

- Total DSE market cap ≈ BDT 7.2 trillion (7,20,000 crore)
- Bangladesh nominal GDP ≈ BDT 50 trillion (50,00,000 crore)

$$\\text{Buffett Indicator} = \\frac{7.2}{50} \\times 100 = 14.4\\%$$

**Interpretation.** For a developed market, under 50% would scream "undervalued." For Bangladesh it means almost nothing about valuation — it means *under-listing*. The denominator includes an economy that the numerator does not cover. This is the trap: applying a US-derived indicator to a market with 15% listing penetration produces a permanently bullish false signal.

**Correct use:** compare Bangladesh's ratio to *its own history*, not to other countries. If it historically ranges 10–20% and today reads 19%, that is informative. If it reads 14%, that is neutral.`,
      bn: `ধরা যাক মোট ডিএসই বাজার মূলধন ৭,২০,০০০ কোটি টাকা… আসুন সামঞ্জস্যপূর্ণ একক ব্যবহার করি।

- মোট ডিএসই বাজার মূলধন ≈ ৭.২ ট্রিলিয়ন টাকা (৭,২০,০০০ কোটি)
- বাংলাদেশের নামমাত্র জিডিপি ≈ ৫০ ট্রিলিয়ন টাকা (৫০,০০,০০০ কোটি)

$$\\text{বাফেট নির্দেশক} = \\frac{7.2}{50} \\times 100 = 14.4\\%$$

**ব্যাখ্যা।** একটি উন্নত বাজারের জন্য ৫০%-এর নিচে মানে চিৎকার করে "অবমূল্যায়িত" বলা। বাংলাদেশের জন্য এটি মূল্যায়ন সম্পর্কে প্রায় কিছুই বোঝায় না — এটি *কম-তালিকাভুক্তি* বোঝায়। হরটিতে এমন একটি অর্থনীতি অন্তর্ভুক্ত যা লবটি ধারণ করে না। এটাই ফাঁদ: ১৫% তালিকাভুক্তি অনুপ্রবেশের বাজারে একটি মার্কিন-উদ্ভূত নির্দেশক প্রয়োগ করলে স্থায়ীভাবে তেজি একটি মিথ্যা সংকেত তৈরি হয়।

**সঠিক ব্যবহার:** বাংলাদেশের অনুপাতকে অন্য দেশের সঙ্গে নয়, *নিজের ইতিহাসের* সঙ্গে তুলনা করুন। যদি ঐতিহাসিকভাবে এটি ১০–২০% পরিসরে থাকে এবং আজ ১৯% দেখায়, সেটি তথ্যবহুল। যদি ১৪% দেখায়, সেটি নিরপেক্ষ।`,
    },

    excel: {
      en: `\`\`\`
A1: Total Market Cap (BDT trn)     B1: 7.2
A2: Nominal GDP (BDT trn)          B2: 50
A3: Buffett Indicator (%)          B3: =B1/B2*100

A5: Historical Min (%)             B5: 9.5
A6: Historical Max (%)             B6: 22.0
A7: Percentile Position            B7: =(B3-B5)/(B6-B5)

A9: Signal                         B9: =IF(B7>0.8,"Historically Rich",
                                        IF(B7<0.2,"Historically Cheap","Neutral"))
\`\`\`

The percentile framing in B7 is the point. The raw number is noise; the position within the market's own history is signal.`,
      bn: `\`\`\`
A1: মোট বাজার মূলধন (ট্রিলিয়ন টাকা)   B1: 7.2
A2: নামমাত্র জিডিপি (ট্রিলিয়ন টাকা)    B2: 50
A3: বাফেট নির্দেশক (%)                B3: =B1/B2*100

A5: ঐতিহাসিক সর্বনিম্ন (%)            B5: 9.5
A6: ঐতিহাসিক সর্বোচ্চ (%)             B6: 22.0
A7: পার্সেন্টাইল অবস্থান               B7: =(B3-B5)/(B6-B5)

A9: সংকেত                            B9: =IF(B7>0.8,"Historically Rich",
                                        IF(B7<0.2,"Historically Cheap","Neutral"))
\`\`\`

B7-এর পার্সেন্টাইল কাঠামোই মূল কথা। কাঁচা সংখ্যাটি হলো গোলমাল; বাজারের নিজস্ব ইতিহাসের মধ্যে অবস্থানটিই সংকেত।`,
    },

    python: {
      en: `\`\`\`python
"""
Chapter 1 — Bangladesh Capital Market structural metrics.
Educational. Figures are indicative and must be re-verified against dsebd.org.
"""
from dataclasses import dataclass


@dataclass
class MarketSnapshot:
    """A point-in-time structural picture of the DSE."""
    date: str
    market_cap_bdt_trn: float
    nominal_gdp_bdt_trn: float
    listed_companies: int
    daily_turnover_bdt_cr: float

    @property
    def buffett_indicator(self) -> float:
        """Market cap as a percentage of nominal GDP."""
        return (self.market_cap_bdt_trn / self.nominal_gdp_bdt_trn) * 100

    @property
    def turnover_velocity(self) -> float:
        """
        Annualized turnover / market cap. A liquidity measure.
        ~250 trading days. Converts crore -> trillion (1 trn = 100,000 cr).
        """
        annual_turnover_trn = (self.daily_turnover_bdt_cr * 250) / 100_000
        return (annual_turnover_trn / self.market_cap_bdt_trn) * 100


def historical_percentile(current: float, low: float, high: float) -> float:
    """Where does \`current\` sit within its own historical band? 0.0 to 1.0."""
    if high == low:
        return 0.5
    return max(0.0, min(1.0, (current - low) / (high - low)))


def classify(pct: float) -> str:
    if pct > 0.80:
        return "Historically Rich"
    if pct < 0.20:
        return "Historically Cheap"
    return "Neutral"


if __name__ == "__main__":
    snap = MarketSnapshot(
        date="2024-06-30",
        market_cap_bdt_trn=7.2,
        nominal_gdp_bdt_trn=50.0,
        listed_companies=350,
        daily_turnover_bdt_cr=800.0,
    )

    bi = snap.buffett_indicator
    pct = historical_percentile(bi, low=9.5, high=22.0)

    print(f"Snapshot date        : {snap.date}")
    print(f"Buffett Indicator    : {bi:.2f}%")
    print(f"Historical percentile: {pct:.0%}")
    print(f"Structural signal    : {classify(pct)}")
    print(f"Turnover velocity    : {snap.turnover_velocity:.1f}% of market cap p.a.")
\`\`\`

**Expected output:**

\`\`\`
Snapshot date        : 2024-06-30
Buffett Indicator    : 14.40%
Historical percentile: 39%
Structural signal    : Neutral
Turnover velocity    : 27.8% of market cap p.a.
\`\`\`

**Reading turnover velocity.** ~28% means roughly a quarter of the market changes hands each year. Compare: NYSE runs well over 100%. Low velocity in Bangladesh reflects large locked sponsor holdings and a small genuine free float. When velocity spikes above ~50%, it usually signals speculative churn rather than investment — a warning sign, not a health sign.`,
      bn: `\`\`\`python
"""
অধ্যায় ১ — বাংলাদেশ পুঁজিবাজারের কাঠামোগত পরিমাপ।
শিক্ষামূলক। পরিসংখ্যান নির্দেশক এবং dsebd.org-এ পুনরায় যাচাই করতে হবে।
"""
from dataclasses import dataclass


@dataclass
class MarketSnapshot:
    """ডিএসই-র একটি নির্দিষ্ট সময়ের কাঠামোগত চিত্র।"""
    date: str
    market_cap_bdt_trn: float
    nominal_gdp_bdt_trn: float
    listed_companies: int
    daily_turnover_bdt_cr: float

    @property
    def buffett_indicator(self) -> float:
        """নামমাত্র জিডিপির শতাংশ হিসেবে বাজার মূলধন।"""
        return (self.market_cap_bdt_trn / self.nominal_gdp_bdt_trn) * 100

    @property
    def turnover_velocity(self) -> float:
        """
        বার্ষিকীকৃত লেনদেন / বাজার মূলধন। একটি তারল্য পরিমাপ।
        ~২৫০ লেনদেন দিবস। কোটি -> ট্রিলিয়ন রূপান্তর (১ ট্রিলিয়ন = ১,০০,০০০ কোটি)।
        """
        annual_turnover_trn = (self.daily_turnover_bdt_cr * 250) / 100_000
        return (annual_turnover_trn / self.market_cap_bdt_trn) * 100


def historical_percentile(current: float, low: float, high: float) -> float:
    """নিজস্ব ঐতিহাসিক পরিসরে \`current\` কোথায় অবস্থান করে? ০.০ থেকে ১.০।"""
    if high == low:
        return 0.5
    return max(0.0, min(1.0, (current - low) / (high - low)))


def classify(pct: float) -> str:
    if pct > 0.80:
        return "Historically Rich"
    if pct < 0.20:
        return "Historically Cheap"
    return "Neutral"


if __name__ == "__main__":
    snap = MarketSnapshot(
        date="2024-06-30",
        market_cap_bdt_trn=7.2,
        nominal_gdp_bdt_trn=50.0,
        listed_companies=350,
        daily_turnover_bdt_cr=800.0,
    )

    bi = snap.buffett_indicator
    pct = historical_percentile(bi, low=9.5, high=22.0)

    print(f"Snapshot date        : {snap.date}")
    print(f"Buffett Indicator    : {bi:.2f}%")
    print(f"Historical percentile: {pct:.0%}")
    print(f"Structural signal    : {classify(pct)}")
    print(f"Turnover velocity    : {snap.turnover_velocity:.1f}% of market cap p.a.")
\`\`\`

**প্রত্যাশিত ফলাফল:**

\`\`\`
Snapshot date        : 2024-06-30
Buffett Indicator    : 14.40%
Historical percentile: 39%
Structural signal    : Neutral
Turnover velocity    : 27.8% of market cap p.a.
\`\`\`

**টার্নওভার ভেলোসিটি পড়া।** ~২৮% মানে বছরে প্রায় এক-চতুর্থাংশ বাজার হাতবদল হয়। তুলনা করুন: NYSE-তে এটি ১০০%-এর অনেক বেশি। বাংলাদেশে কম ভেলোসিটি বড় আটকে থাকা উদ্যোক্তা মালিকানা ও ক্ষুদ্র প্রকৃত ফ্রি ফ্লোটের প্রতিফলন। ভেলোসিটি যখন ~৫০%-এর ওপরে লাফ দেয়, তখন সাধারণত তা বিনিয়োগ নয় বরং ফটকা মন্থন নির্দেশ করে — এটি সুস্থতার নয়, সতর্কতার লক্ষণ।`,
    },

    mistakes: {
      en: `1. **Comparing DGEN to DSEX.** Different base, methodology, and constituents. "The market is still below its 2010 peak" is a statement about DGEN and cannot be evaluated using DSEX. This error appears constantly in newspaper commentary.
2. **Applying the Buffett Indicator across countries.** A 15% ratio in a market with 15% listing penetration is not cheapness. It is absence.
3. **Assuming index movement means broad movement.** With GP at ~10% of market cap, a single scrip can move DSEX materially while 300 companies fall.
4. **Ignoring free float.** A company with BDT 20,000 crore market cap but 5% free float has BDT 1,000 crore of tradable stock. Your BDT 50 lakh order is 0.05% of that — you *are* the market on some days.
5. **Believing demutualization solved governance.** It restructured ownership. It did not eliminate manipulation. The 2019–20 and 2022 floor-price episodes demonstrate that regulatory intervention risk remains live and material.
6. **Treating BSEC as a guarantor.** BSEC regulates process. It does not guarantee your outcome, does not validate business quality, and IPO approval is not an endorsement.`,
      bn: `১. **DGEN-কে DSEX-এর সঙ্গে তুলনা করা।** ভিন্ন ভিত্তি, পদ্ধতি ও উপাদান। "বাজার এখনো ২০১০ সালের শীর্ষের নিচে" — এটি DGEN সম্পর্কে একটি বক্তব্য এবং DSEX দিয়ে মূল্যায়ন করা যায় না। এই ভুল সংবাদপত্রের ভাষ্যে নিয়ত দেখা যায়।
২. **দেশভেদে বাফেট নির্দেশক প্রয়োগ করা।** ১৫% তালিকাভুক্তি অনুপ্রবেশের বাজারে ১৫% অনুপাত সস্তা হওয়া নয়। এটি অনুপস্থিতি।
৩. **সূচকের নড়াচড়া মানেই ব্যাপক নড়াচড়া ধরে নেওয়া।** জিপি বাজার মূলধনের ~১০% হলে, একটি স্ক্রিপই DSEX-কে উল্লেখযোগ্যভাবে নাড়াতে পারে যখন ৩০০ কোম্পানি পড়ছে।
৪. **ফ্রি ফ্লোট উপেক্ষা করা।** ২০,০০০ কোটি টাকা বাজার মূলধনের কোম্পানির ফ্রি ফ্লোট ৫% হলে লেনদেনযোগ্য শেয়ার ১,০০০ কোটি টাকা। আপনার ৫০ লক্ষ টাকার অর্ডার তার ০.০৫% — কোনো কোনো দিন আপনিই *বাজার*।
৫. **ডিমিউচুয়ালাইজেশন পরিচালনা সমস্যার সমাধান করেছে ভাবা।** এটি মালিকানা পুনর্গঠন করেছে। কারসাজি দূর করেনি। ২০১৯–২০ ও ২০২২ সালের ফ্লোর-প্রাইস ঘটনাগুলো দেখায় যে নিয়ন্ত্রক হস্তক্ষেপের ঝুঁকি এখনো সক্রিয় ও বাস্তব।
৬. **বিএসইসি-কে জামিনদার মনে করা।** বিএসইসি প্রক্রিয়া নিয়ন্ত্রণ করে। এটি আপনার ফলাফলের নিশ্চয়তা দেয় না, ব্যবসার গুণমান যাচাই করে না, এবং আইপিও অনুমোদন কোনো সুপারিশ নয়।`,
    },

    tips: {
      en: `- **Read the Ibrahim Khaled Report (2011).** It is freely available. It is the closest thing to a forensic manual for how this specific market breaks.
- **Bookmark four primary sources:** dsebd.org (prices, disclosures), sec.gov.bd (rules, enforcement orders), bb.org.bd (monetary policy, private sector credit growth), and the company's own annual report PDF. Never rely on a Facebook group for a number you are betting money on.
- **Track private sector credit growth from Bangladesh Bank monthly.** It is arguably the single best macro lead indicator for DSE liquidity. When credit growth accelerates and the call money rate is soft, money finds the market. When Bangladesh Bank tightens, it leaves.
- **Track the free float, not the market cap,** when sizing a position in a mid-cap.
- **Assume regulatory intervention is a permanent feature, not an anomaly.** Floor prices, circuit breakers, and forced buying directives have all occurred. Position sizing must survive a market where you cannot sell.`,
      bn: `- **ইব্রাহিম খালেদ প্রতিবেদন (২০১১) পড়ুন।** এটি অবাধে পাওয়া যায়। এই নির্দিষ্ট বাজার কীভাবে ভাঙে তার ফরেনসিক ম্যানুয়ালের সবচেয়ে কাছাকাছি এটি।
- **চারটি মূল উৎস বুকমার্ক করুন:** dsebd.org (দাম, প্রকাশনা), sec.gov.bd (বিধি, প্রয়োগ আদেশ), bb.org.bd (মুদ্রানীতি, বেসরকারি খাতে ঋণ প্রবৃদ্ধি), এবং কোম্পানির নিজস্ব বার্ষিক প্রতিবেদন পিডিএফ। যে সংখ্যার ওপর টাকা বাজি ধরছেন তার জন্য কখনো ফেসবুক গ্রুপে নির্ভর করবেন না।
- **বাংলাদেশ ব্যাংকের মাসিক বেসরকারি খাতে ঋণ প্রবৃদ্ধি অনুসরণ করুন।** ডিএসই তারল্যের জন্য এটিই যুক্তিযুক্তভাবে সেরা একক সামষ্টিক অগ্রবর্তী নির্দেশক। ঋণ প্রবৃদ্ধি ত্বরান্বিত হলে ও কল মানি রেট নরম থাকলে টাকা বাজারে আসে। বাংলাদেশ ব্যাংক কড়াকড়ি করলে টাকা চলে যায়।
- **মিড-ক্যাপে পজিশনের আকার ঠিক করার সময় বাজার মূলধন নয়, ফ্রি ফ্লোট অনুসরণ করুন।**
- **ধরে নিন নিয়ন্ত্রক হস্তক্ষেপ একটি স্থায়ী বৈশিষ্ট্য, ব্যতিক্রম নয়।** ফ্লোর প্রাইস, সার্কিট ব্রেকার ও বাধ্যতামূলক ক্রয় নির্দেশ — সবই ঘটেছে। পজিশন সাইজিং এমন হতে হবে যা এমন বাজারে টিকে থাকে যেখানে আপনি বিক্রি করতে পারবেন না।`,
    },

    exercises: {
      en: `1. Go to dsebd.org and find the current DSEX level, total market capitalization, and number of listed securities. Compute the Buffett Indicator using the latest BBS nominal GDP figure.
2. List the top 10 DSE companies by market capitalization. Compute what percentage of total market cap they represent. Is the number above or below 40%? What does your answer imply about index concentration risk?
3. Pick any one company. Find its total shares outstanding and its sponsor/director holding percentage from the DSE disclosure page. Compute the free float in both shares and BDT. Now compute: what BDT order size would equal 1% of the free float?
4. Find the DGEN closing level on 5 December 2010 and the DSEX closing level today. Explain in three sentences why subtracting one from the other is meaningless.
5. Download Bangladesh Bank's monthly private sector credit growth series for the last 36 months. Plot it against DSEX over the same period. Describe the relationship you observe — including where it breaks down.`,
      bn: `১. dsebd.org-এ গিয়ে বর্তমান DSEX মান, মোট বাজার মূলধন এবং তালিকাভুক্ত সিকিউরিটিজের সংখ্যা বের করুন। সর্বশেষ বিবিএস নামমাত্র জিডিপি ব্যবহার করে বাফেট নির্দেশক গণনা করুন।
২. বাজার মূলধন অনুযায়ী শীর্ষ ১০ ডিএসই কোম্পানির তালিকা করুন। তারা মোট বাজার মূলধনের কত শতাংশ তা গণনা করুন। সংখ্যাটি ৪০%-এর ওপরে না নিচে? আপনার উত্তর সূচক কেন্দ্রীভবন ঝুঁকি সম্পর্কে কী বোঝায়?
৩. যেকোনো একটি কোম্পানি বাছুন। ডিএসই প্রকাশনা পাতা থেকে তার মোট বকেয়া শেয়ার ও উদ্যোক্তা/পরিচালক ধারণের শতাংশ বের করুন। শেয়ার ও টাকা — উভয়ে ফ্রি ফ্লোট গণনা করুন। এখন গণনা করুন: কত টাকার অর্ডার ফ্রি ফ্লোটের ১% হবে?
৪. ৫ ডিসেম্বর ২০১০-এর DGEN সমাপনী মান এবং আজকের DSEX সমাপনী মান বের করুন। তিন বাক্যে ব্যাখ্যা করুন কেন একটি থেকে অন্যটি বিয়োগ করা অর্থহীন।
৫. গত ৩৬ মাসের বাংলাদেশ ব্যাংকের মাসিক বেসরকারি খাতে ঋণ প্রবৃদ্ধির সিরিজ ডাউনলোড করুন। একই সময়ে DSEX-এর বিপরীতে প্লট করুন। যে সম্পর্ক দেখছেন তা বর্ণনা করুন — কোথায় তা ভেঙে পড়ে সেটিসহ।`,
    },

    summary: {
      en: `- The Bangladesh capital market has four layers: BSEC (regulator), DSE/CSE (exchanges), CDBL (depository), and intermediaries (brokers, merchant banks, AMCs).
- Both exchanges were demutualized in 2013, separating ownership from trading rights.
- Two structural crashes — 1996 (paper certificates, kerb trading, forgery) and 2010–11 (margin leverage, omnibus accounts, IPO mispricing) — define the market's risk character. Both were structural, not fundamental.
- The market is small relative to the economy (~15% cap/GDP) because most of the real economy is unlisted. This makes cross-country valuation comparison invalid.
- DSEX (free-float weighted, base 2,951.91, launched 2013) replaced DGEN. The two are not comparable.
- Market cap is heavily concentrated; single large scrips can move the index independently of breadth.
- **The core discipline established in this chapter:** structure and cycle determine *whether* to be in the market; company analysis determines *what* to hold. Getting the second right while getting the first wrong still loses money.`,
      bn: `- বাংলাদেশ পুঁজিবাজারের চারটি স্তর: বিএসইসি (নিয়ন্ত্রক), ডিএসই/সিএসই (এক্সচেঞ্জ), সিডিবিএল (ডিপোজিটরি), এবং মধ্যস্থতাকারী (ব্রোকার, মার্চেন্ট ব্যাংক, এএমসি)।
- উভয় এক্সচেঞ্জ ২০১৩ সালে ডিমিউচুয়ালাইজড হয়, মালিকানাকে লেনদেনের অধিকার থেকে পৃথক করে।
- দুটি কাঠামোগত ধস — ১৯৯৬ (কাগজের সার্টিফিকেট, কার্ব লেনদেন, জালিয়াতি) এবং ২০১০–১১ (মার্জিন লিভারেজ, অমনিবাস অ্যাকাউন্ট, আইপিও ভুল মূল্যায়ন) — বাজারের ঝুঁকি-চরিত্র নির্ধারণ করে। দুটিই কাঠামোগত, মৌলিক নয়।
- অর্থনীতির তুলনায় বাজার ছোট (~১৫% মূলধন/জিডিপি) কারণ প্রকৃত অর্থনীতির বেশিরভাগই অতালিকাভুক্ত। এতে দেশভিত্তিক মূল্যায়ন তুলনা অবৈধ হয়ে যায়।
- DSEX (ফ্রি-ফ্লোট ভারিত, ভিত্তি ২,৯৫১.৯১, ২০১৩-এ চালু) DGEN-এর স্থান নেয়। দুটি তুলনীয় নয়।
- বাজার মূলধন প্রবলভাবে কেন্দ্রীভূত; একক বড় স্ক্রিপ ব্যাপ্তি নির্বিশেষে সূচক নাড়াতে পারে।
- **এই অধ্যায়ে প্রতিষ্ঠিত মূল শৃঙ্খলা:** কাঠামো ও চক্র নির্ধারণ করে বাজারে থাকা উচিত *কি না*; কোম্পানি বিশ্লেষণ নির্ধারণ করে *কী* ধরে রাখবেন। দ্বিতীয়টি ঠিক করে প্রথমটি ভুল করলেও টাকা হারাবেন।`,
    },
  },

  interview: [
    {
      q: {
        en: 'What is demutualization and what problem was it meant to solve?',
        bn: 'ডিমিউচুয়ালাইজেশন কী এবং এটি কোন সমস্যার সমাধানের জন্য ছিল?',
      },
      a: {
        en: 'Separation of exchange ownership from trading rights, mandated by the Exchanges Demutualization Act 2013. Before it, member-brokers owned and governed the exchange they traded on — self-regulation with a direct conflict of interest. Post-demutualization, ownership is via shares, governance sits with a board including independent directors, and a strategic investor holds a mandated stake.',
        bn: 'এক্সচেঞ্জ ডিমিউচুয়ালাইজেশন আইন ২০১৩ দ্বারা বাধ্যতামূলক — এক্সচেঞ্জের মালিকানাকে লেনদেনের অধিকার থেকে পৃথক করা। এর আগে সদস্য-ব্রোকাররা যে এক্সচেঞ্জে লেনদেন করতেন সেটিরই মালিক ও পরিচালক ছিলেন — সরাসরি স্বার্থের সংঘাতসহ স্ব-নিয়ন্ত্রণ। ডিমিউচুয়ালাইজেশনের পর মালিকানা শেয়ারের মাধ্যমে, পরিচালনা স্বাধীন পরিচালকসহ বোর্ডের হাতে, এবং একজন কৌশলগত বিনিয়োগকারী বাধ্যতামূলক অংশীদারিত্ব ধারণ করেন।',
      },
    },
    {
      q: {
        en: 'Why is the DSEX free-float weighted rather than full market-cap weighted?',
        bn: 'DSEX কেন পূর্ণ বাজার-মূলধন ভারিত না হয়ে ফ্রি-ফ্লোট ভারিত?',
      },
      a: {
        en: 'Because full-cap weighting would give index influence to shares that cannot actually be bought. A company 95% held by sponsors has only 5% available to the market; weighting it by 100% of its cap would make the index un-replicable by any real portfolio and would overstate the influence of illiquid names.',
        bn: 'কারণ পূর্ণ-মূলধন ভারাঙ্কন এমন শেয়ারকে সূচকে প্রভাব দিত যা আসলে কেনা যায় না। যে কোম্পানির ৯৫% উদ্যোক্তাদের হাতে, বাজারে তার মাত্র ৫% পাওয়া যায়; তার মূলধনের ১০০% দিয়ে ওজন দিলে সূচকটি কোনো বাস্তব পোর্টফোলিওর পক্ষে অনুকরণযোগ্য থাকত না এবং তারল্যহীন নামগুলোর প্রভাব অতিরঞ্জিত হতো।',
      },
    },
    {
      q: {
        en: 'Name three distinct causes of the 2010–11 crash.',
        bn: '২০১০–১১ সালের ধসের তিনটি স্বতন্ত্র কারণ বলুন।',
      },
      a: {
        en: 'Excessive margin lending; omnibus accounts concealing beneficial ownership and enabling manipulation; abusive IPO pricing via book-building and direct listing at inflated indicative prices. (Also acceptable: post-2008 liquidity surge with no alternative asset class; weak surveillance capacity.)',
        bn: 'অতিরিক্ত মার্জিন ঋণ; অমনিবাস অ্যাকাউন্ট যা প্রকৃত মালিকানা আড়াল করে কারসাজি সম্ভব করত; বুক-বিল্ডিং ও স্ফীত নির্দেশক মূল্যে সরাসরি তালিকাভুক্তির মাধ্যমে আইপিও-র অপব্যবহারমূলক মূল্য নির্ধারণ। (এছাড়া গ্রহণযোগ্য: ২০০৮-পরবর্তী তারল্য জোয়ার যার বিকল্প সম্পদ শ্রেণি ছিল না; দুর্বল নজরদারি সক্ষমতা।)',
      },
    },
    {
      q: {
        en: 'Why is a 15% market-cap-to-GDP ratio not automatically a buy signal in Bangladesh?',
        bn: 'বাংলাদেশে ১৫% বাজার-মূলধন-থেকে-জিডিপি অনুপাত কেন স্বয়ংক্রিয়ভাবে ক্রয় সংকেত নয়?',
      },
      a: {
        en: "Because the ratio's denominator captures the whole economy while the numerator captures only ~350 listed companies. Most of the real economy — large RMG groups, private conglomerates — is unlisted. The low ratio reflects under-listing, not undervaluation. It is only meaningful compared to Bangladesh's own historical range.",
        bn: 'কারণ অনুপাতের হর সমগ্র অর্থনীতি ধারণ করে যখন লব ধারণ করে কেবল ~৩৫০টি তালিকাভুক্ত কোম্পানি। প্রকৃত অর্থনীতির বেশিরভাগ — বড় আরএমজি গ্রুপ, বেসরকারি সমষ্টি — অতালিকাভুক্ত। কম অনুপাত কম-তালিকাভুক্তির প্রতিফলন, অবমূল্যায়নের নয়। এটি কেবল বাংলাদেশের নিজস্ব ঐতিহাসিক পরিসরের সঙ্গে তুলনায় অর্থবহ।',
      },
    },
    {
      q: {
        en: "What is CDBL's role, and what specific historical failure does it prevent?",
        bn: 'সিডিবিএল-এর ভূমিকা কী, এবং এটি কোন নির্দিষ্ট ঐতিহাসিক ব্যর্থতা প্রতিরোধ করে?',
      },
      a: {
        en: 'CDBL is the central depository holding shares dematerialized against BO accounts. It eliminates paper certificates, which in 1996 enabled outright forgery and multiple-sale fraud, and it makes short settlement cycles (T+2) mechanically possible.',
        bn: 'সিডিবিএল হলো কেন্দ্রীয় ডিপোজিটরি যা বিও অ্যাকাউন্টের বিপরীতে ডিম্যাটেরিয়ালাইজড শেয়ার ধারণ করে। এটি কাগজের সার্টিফিকেট দূর করে, যা ১৯৯৬ সালে সরাসরি জালিয়াতি ও একাধিকবার বিক্রির প্রতারণা সম্ভব করেছিল, এবং এটি স্বল্প নিষ্পত্তি চক্র (T+২) যান্ত্রিকভাবে সম্ভব করে।',
      },
    },
  ],

  quiz: [
    {
      q: { en: 'In which year did trading actually begin on what is now the DSE?', bn: 'বর্তমান ডিএসই-তে প্রকৃতপক্ষে কোন বছরে লেনদেন শুরু হয়?' },
      options: { en: ['1954', '1956', '1964', '1976'], bn: ['১৯৫৪', '১৯৫৬', '১৯৬৪', '১৯৭৬'] },
      answer: 1,
    },
    {
      q: { en: 'DSEX base value is:', bn: 'DSEX-এর ভিত্তি মান হলো:' },
      options: { en: ['1,000.00', '2,951.91', '3,650.00', '8,918.51'], bn: ['১,০০০.০০', '২,৯৫১.৯১', '৩,৬৫০.০০', '৮,৯১৮.৫১'] },
      answer: 1,
    },
    {
      q: { en: 'Which index is Shariah-screened?', bn: 'কোন সূচকটি শরিয়াহ-যাচাইকৃত?' },
      options: { en: ['DSEX', 'DS30', 'DSES', 'DGEN'], bn: ['DSEX', 'DS30', 'DSES', 'DGEN'] },
      answer: 2,
    },
    {
      q: { en: 'Which body holds your shares in electronic form?', bn: 'কোন সংস্থা আপনার শেয়ার ইলেকট্রনিক আকারে ধারণ করে?' },
      options: { en: ['BSEC', 'DSE', 'CDBL', 'Your broker'], bn: ['বিএসইসি', 'ডিএসই', 'সিডিবিএল', 'আপনার ব্রোকার'] },
      answer: 2,
    },
    {
      q: { en: 'The DGEN was discontinued in:', bn: 'DGEN বন্ধ করা হয়:' },
      options: { en: ['2011', '2013', '2018', 'It still runs'], bn: ['২০১১', '২০১৩', '২০১৮', 'এটি এখনো চালু'] },
      answer: 1,
    },
    {
      q: { en: 'Approximately what share of national turnover does DSE carry?', bn: 'ডিএসই জাতীয় লেনদেনের আনুমানিক কত অংশ বহন করে?' },
      options: { en: ['50%', '70%', '90%+', '100%'], bn: ['৫০%', '৭০%', '৯০%+', '১০০%'] },
      answer: 2,
    },
    {
      q: { en: 'Free-float weighting excludes:', bn: 'ফ্রি-ফ্লোট ভারাঙ্কন বাদ দেয়:' },
      options: {
        en: ['Foreign holdings', 'Sponsor/director and government holdings', 'Institutional holdings', 'Mutual fund holdings'],
        bn: ['বিদেশি মালিকানা', 'উদ্যোক্তা/পরিচালক ও সরকারি মালিকানা', 'প্রাতিষ্ঠানিক মালিকানা', 'মিউচুয়াল ফান্ড মালিকানা'],
      },
      answer: 1,
    },
    {
      q: { en: 'The Exchanges Demutualization Act was passed in:', bn: 'এক্সচেঞ্জ ডিমিউচুয়ালাইজেশন আইন পাস হয়:' },
      options: { en: ['1993', '2010', '2013', '2018'], bn: ['১৯৯৩', '২০১০', '২০১৩', '২০১৮'] },
      answer: 2,
    },
    {
      q: {
        en: 'Which is the best macro lead indicator for DSE liquidity discussed in this chapter?',
        bn: 'এই অধ্যায়ে আলোচিত ডিএসই তারল্যের সেরা সামষ্টিক অগ্রবর্তী নির্দেশক কোনটি?',
      },
      options: {
        en: ['GDP growth', 'Private sector credit growth', 'Remittance inflow', 'Export earnings'],
        bn: ['জিডিপি প্রবৃদ্ধি', 'বেসরকারি খাতে ঋণ প্রবৃদ্ধি', 'রেমিট্যান্স প্রবাহ', 'রপ্তানি আয়'],
      },
      answer: 1,
    },
    {
      q: {
        en: 'Rising turnover velocity above ~50% most likely indicates:',
        bn: '~৫০%-এর ওপরে টার্নওভার ভেলোসিটি বৃদ্ধি সম্ভবত নির্দেশ করে:',
      },
      options: {
        en: ['Market health', 'Speculative churn', 'Foreign inflow', 'Improved free float'],
        bn: ['বাজারের সুস্থতা', 'ফটকা মন্থন', 'বিদেশি প্রবাহ', 'উন্নত ফ্রি ফ্লোট'],
      },
      answer: 1,
    },
  ],
};
