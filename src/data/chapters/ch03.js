/**
 * Chapter 3 — IPO & The Primary Market
 * Part I, Stock Market Foundation.
 */

export default {
  n: 3,
  tools: [],

  excelSheet: {
    filename: 'ch03-ipo-expected-value.xlsx',
    sheetName: 'IPO Expected Value',
    cells: [
      { cell: 'A1', v: 'Offer Price (BDT)' }, { cell: 'B1', v: 10 },
      { cell: 'A2', v: 'Lot Size (shares)' }, { cell: 'B2', v: 500 },
      { cell: 'A3', v: 'Application Value (BDT)' }, { cell: 'B3', f: 'B1*B2' },

      { cell: 'A5', v: 'Shares Offered' }, { cell: 'B5', v: 30000000 },
      { cell: 'A6', v: 'Shares Applied For' }, { cell: 'B6', v: 900000000 },
      { cell: 'A7', v: 'Oversubscription (x)' }, { cell: 'B7', f: 'B6/B5' },
      { cell: 'A8', v: 'Pro-rata Allotment Ratio' }, { cell: 'B8', f: '1/B7' },

      { cell: 'A10', v: 'Expected Listing Price (BDT)' }, { cell: 'B10', v: 22 },
      { cell: 'A11', v: 'Listing Gain per Share' }, { cell: 'B11', f: 'B10-B1' },
      { cell: 'A12', v: 'Shares Actually Allotted' }, { cell: 'B12', f: 'B2*B8' },
      { cell: 'A13', v: 'Expected Gross Gain (BDT)' }, { cell: 'B13', f: 'B12*B11' },

      { cell: 'A15', v: 'Blocked Days' }, { cell: 'B15', v: 45 },
      { cell: 'A16', v: 'Annual Opportunity Rate (%)' }, { cell: 'B16', v: 9 },
      { cell: 'A17', v: 'Opportunity Cost (BDT)' }, { cell: 'B17', f: 'B3*(B16/100)*(B15/365)' },
      { cell: 'A18', v: 'Net Expected Gain (BDT)' }, { cell: 'B18', f: 'B13-B17' },
      { cell: 'A19', v: 'Return on Blocked Capital (%)' }, { cell: 'B19', f: 'B18/B3*100' },

      { cell: 'A21', v: 'VERDICT' },
      {
        cell: 'B21',
        f: 'IF(B18<=0,"REJECT - Negative expected value",IF(B19<2,"MARGINAL - Capital better deployed elsewhere","APPLY"))',
      },
    ],
  },

  objectives: {
    en: [
      'Distinguish the primary market from the secondary market by where the money goes.',
      'Explain fixed-price and book-building issuance, and how book building was abused in 2010–11.',
      'Compute the expected value of an IPO application under pro-rata allotment, net of opportunity cost.',
      'Explain why systematic IPO underpricing distorts retail behaviour on the DSE.',
      'Read a lock-in schedule as a forward supply calendar rather than a legal footnote.',
    ],
    bn: [
      'টাকা কোথায় যায় তা দিয়ে প্রাথমিক বাজারকে মাধ্যমিক বাজার থেকে আলাদা করা।',
      'নির্ধারিত মূল্য ও বুক-বিল্ডিং পদ্ধতি ব্যাখ্যা করা, এবং ২০১০–১১ সালে বুক বিল্ডিং কীভাবে অপব্যবহৃত হয়েছিল।',
      'সমানুপাতিক বরাদ্দে আইপিও আবেদনের প্রত্যাশিত মূল্য গণনা করা, সুযোগ ব্যয় বাদ দিয়ে।',
      'কেন নিয়মতান্ত্রিক আইপিও অবমূল্যায়ন ডিএসইতে খুচরা বিনিয়োগকারীর আচরণ বিকৃত করে তা ব্যাখ্যা করা।',
      'লক-ইন সময়সূচিকে আইনি পাদটীকা নয়, ভবিষ্যৎ সরবরাহের ক্যালেন্ডার হিসেবে পড়া।',
    ],
  },

  blocks: {
    theory: {
      en: `The **primary market** is where securities are created. A company issues new shares, and the subscription money goes **to the company**. The **secondary market** is where those shares subsequently change hands between investors — the company receives nothing.

This distinction is not academic. It determines who bears what risk, and it explains why the incentives of an issuer, an issue manager, and a retail applicant are not aligned.

### The regulatory frame

Public issues in Bangladesh are governed by the **BSEC (Public Issue) Rules, 2015**, as amended, sitting under the *Securities and Exchange Ordinance, 1969*. The rules set eligibility (paid-up capital floors, a track record of profitability, audited accounts), mandate disclosure through a **prospectus**, and require an **issue manager** — a merchant bank — to conduct due diligence and certify it.

### Two pricing methods

**Fixed Price Method.** The issuer and issue manager set the price in advance, disclosed in the prospectus. Historically most DSE IPOs were at **face value, BDT 10**, with no premium. Simple, transparent, and — as we will see — systematically underpriced.

**Book Building Method.** The price is discovered by bidding. **Eligible Investors (EIs)** — institutions, merchant banks, asset managers — bid a price and quantity during a bidding period. The **cut-off price** is the lowest price at which the entire EI portion clears. General investors then subscribe at the cut-off price, historically at a mandated discount to it.

Book building is theoretically superior: price is set by informed institutional demand rather than by assertion. **In practice it was the mechanism at the centre of the 2010–11 crash.**

### How book building was abused

The Ibrahim Khaled Report documented the pattern. Eligible Investors bid absurd prices for small allocations, establishing an inflated cut-off. General investors then subscribed at that manufactured price. On listing, with no genuine demand behind the valuation, the price collapsed. The EIs' small losses on their token allocations were trivial against what they made elsewhere; the retail investor absorbed the fall.

BSEC's response over successive amendments: lock-in on EI allotments, restrictions on bid dispersion, and periods where book building was suspended entirely. **Assume the rules in force today are not the rules in force when you next read this — verify against sec.gov.bd.**

### Allotment: lottery, then pro-rata

For most of the DSE's modern history, an oversubscribed IPO was allotted **by lottery**. You applied for one lot; you either won it or you did not. This produced a specific and damaging behaviour: because the probability of winning rose with the number of applications, families opened BO accounts in every name available. BO account counts inflated with accounts that existed solely to buy lottery tickets.

Since **2021**, the general-investor portion moved to a **pro-rata** basis with an eligibility condition: the applicant must hold a minimum investment in listed securities at market value (BDT 20,000 was the figure at introduction; it has been revised). Two consequences:

1. Everyone who applies receives *something* — a fraction of what they applied for.
2. The IPO is no longer a free lottery ticket. It requires you to already carry secondary-market exposure, and therefore secondary-market risk.

### Lock-in

Sponsors and directors are locked in for a defined period after listing (three years for sponsor/director holdings under the 2015 rules, with graded periods for pre-IPO placement holders). **Read the lock-in table as a supply calendar.** Every expiry date is a date on which shares that could not previously be sold become sellable. A stock can be fundamentally unchanged and still fall on a lock-in expiry, because the float doubles.`,
      bn: `**প্রাথমিক বাজার** হলো যেখানে সিকিউরিটিজ সৃষ্টি হয়। একটি কোম্পানি নতুন শেয়ার ইস্যু করে, এবং চাঁদার টাকা যায় **কোম্পানির কাছে**। **মাধ্যমিক বাজার** হলো যেখানে ঐ শেয়ারগুলো পরবর্তীতে বিনিয়োগকারীদের মধ্যে হাতবদল হয় — কোম্পানি কিছুই পায় না।

এই পার্থক্য তাত্ত্বিক নয়। এটি নির্ধারণ করে কে কোন ঝুঁকি বহন করে, এবং ব্যাখ্যা করে কেন ইস্যুকারী, ইস্যু ব্যবস্থাপক ও খুচরা আবেদনকারীর স্বার্থ এক নয়।

### নিয়ন্ত্রক কাঠামো

বাংলাদেশে পাবলিক ইস্যু পরিচালিত হয় **বিএসইসি (পাবলিক ইস্যু) বিধিমালা, ২০১৫** (সংশোধিত) দ্বারা, যা *সিকিউরিটিজ অ্যান্ড এক্সচেঞ্জ অধ্যাদেশ, ১৯৬৯* এর অধীনে। বিধিমালা যোগ্যতা নির্ধারণ করে (ন্যূনতম পরিশোধিত মূলধন, মুনাফার ট্র্যাক রেকর্ড, নিরীক্ষিত হিসাব), **প্রসপেক্টাসের** মাধ্যমে তথ্য প্রকাশ বাধ্যতামূলক করে, এবং একজন **ইস্যু ব্যবস্থাপক** — একটি মার্চেন্ট ব্যাংক — নিয়োগ করতে বলে, যিনি যথাযথ অনুসন্ধান করে তা প্রত্যয়ন করেন।

### দুটি মূল্য নির্ধারণ পদ্ধতি

**নির্ধারিত মূল্য পদ্ধতি।** ইস্যুকারী ও ইস্যু ব্যবস্থাপক আগেই দাম ঠিক করেন, যা প্রসপেক্টাসে প্রকাশিত হয়। ঐতিহাসিকভাবে অধিকাংশ ডিএসই আইপিও হয়েছে **অভিহিত মূল্য, ১০ টাকায়**, কোনো প্রিমিয়াম ছাড়া। সরল, স্বচ্ছ, এবং — যেমন আমরা দেখব — নিয়মতান্ত্রিকভাবে অবমূল্যায়িত।

**বুক বিল্ডিং পদ্ধতি।** দাম নির্ধারিত হয় দরপত্রের মাধ্যমে। **যোগ্য বিনিয়োগকারী (EI)** — প্রতিষ্ঠান, মার্চেন্ট ব্যাংক, সম্পদ ব্যবস্থাপক — বিডিং সময়ে একটি দাম ও পরিমাণ প্রস্তাব করেন। **কাট-অফ মূল্য** হলো সেই সর্বনিম্ন দাম যেখানে সম্পূর্ণ EI অংশ নিঃশেষ হয়। সাধারণ বিনিয়োগকারীরা তারপর ঐ কাট-অফ মূল্যে চাঁদা দেন, ঐতিহাসিকভাবে তার ওপর নির্ধারিত ছাড়সহ।

বুক বিল্ডিং তাত্ত্বিকভাবে উন্নত: দাম নির্ধারিত হয় অবহিত প্রাতিষ্ঠানিক চাহিদা দিয়ে, দাবি দিয়ে নয়। **বাস্তবে এটিই ছিল ২০১০–১১ ধসের কেন্দ্রে থাকা কৌশল।**

### বুক বিল্ডিং কীভাবে অপব্যবহৃত হলো

ইব্রাহিম খালেদ প্রতিবেদন এই ধরনটি নথিভুক্ত করেছে। যোগ্য বিনিয়োগকারীরা ছোট বরাদ্দের জন্য অস্বাভাবিক দাম হাঁকতেন, ফলে একটি স্ফীত কাট-অফ তৈরি হতো। সাধারণ বিনিয়োগকারীরা তারপর ঐ কৃত্রিম দামে চাঁদা দিতেন। তালিকাভুক্তির পর, মূল্যায়নের পেছনে প্রকৃত চাহিদা না থাকায় দাম ধসে পড়ত। EI-দের নামমাত্র বরাদ্দে সামান্য ক্ষতি তাঁদের অন্যত্র লাভের তুলনায় তুচ্ছ ছিল; পতনটি শুষে নিতেন খুচরা বিনিয়োগকারী।

পরবর্তী সংশোধনীগুলোতে বিএসইসি-র প্রতিক্রিয়া: EI বরাদ্দে লক-ইন, বিড বিচ্ছুরণে বিধিনিষেধ, এবং এমন সময়কাল যখন বুক বিল্ডিং সম্পূর্ণ স্থগিত ছিল। **ধরে নিন আজ কার্যকর বিধি আপনার পরবর্তী পাঠের সময় কার্যকর বিধি নয় — sec.gov.bd-তে যাচাই করুন।**

### বরাদ্দ: লটারি, তারপর সমানুপাতিক

ডিএসই-র আধুনিক ইতিহাসের বেশিরভাগ সময় অতিরিক্ত চাঁদাপ্রাপ্ত আইপিও বরাদ্দ হয়েছে **লটারির মাধ্যমে**। আপনি এক লটের জন্য আবেদন করতেন; হয় জিততেন, নয়তো না। এতে একটি নির্দিষ্ট ও ক্ষতিকর আচরণ তৈরি হলো: যেহেতু আবেদনের সংখ্যার সঙ্গে জেতার সম্ভাবনা বাড়ত, পরিবারগুলো যত নাম পাওয়া যায় ততগুলো বিও অ্যাকাউন্ট খুলত। বিও অ্যাকাউন্টের সংখ্যা এমন অ্যাকাউন্টে স্ফীত হলো যেগুলোর অস্তিত্ব কেবল লটারির টিকিট কেনার জন্য।

**২০২১** সাল থেকে সাধারণ বিনিয়োগকারীর অংশ **সমানুপাতিক** ভিত্তিতে চলে গেছে, একটি যোগ্যতা শর্তসহ: আবেদনকারীকে বাজারমূল্যে তালিকাভুক্ত সিকিউরিটিজে ন্যূনতম বিনিয়োগ ধরে রাখতে হবে (প্রবর্তনের সময় ২০,০০০ টাকা ছিল; পরে সংশোধিত হয়েছে)। দুটি পরিণতি:

১. যিনিই আবেদন করেন তিনি *কিছু একটা* পান — যা চেয়েছিলেন তার একটি ভগ্নাংশ।
২. আইপিও আর বিনামূল্যের লটারি টিকিট নয়। এর জন্য আপনাকে আগে থেকেই মাধ্যমিক বাজারে অবস্থান রাখতে হয়, এবং তাই মাধ্যমিক বাজারের ঝুঁকিও।

### লক-ইন

উদ্যোক্তা ও পরিচালকরা তালিকাভুক্তির পর একটি নির্দিষ্ট সময়ের জন্য লক-ইন থাকেন (২০১৫ বিধিমালায় উদ্যোক্তা/পরিচালক মালিকানার জন্য তিন বছর, প্রি-আইপিও প্লেসমেন্ট ধারকদের জন্য ধাপে ধাপে)। **লক-ইন তালিকাটিকে একটি সরবরাহ ক্যালেন্ডার হিসেবে পড়ুন।** প্রতিটি মেয়াদ শেষের তারিখ এমন একটি দিন যেদিন আগে বিক্রি করা যেত না এমন শেয়ার বিক্রয়যোগ্য হয়ে ওঠে। একটি শেয়ার মৌলিকভাবে অপরিবর্তিত থেকেও লক-ইন মেয়াদ শেষে পড়তে পারে, কারণ ফ্লোট দ্বিগুণ হয়ে যায়।`,
    },

    simple: {
      en: `Think of a company as a bakery that wants to build a second oven.

- **Primary market:** the bakery sells you a share in itself, and uses your money to buy the oven. Your cash goes into the oven.
- **Secondary market:** you later sell that share to someone else. Your cash goes into your pocket. The bakery does not see a taka of it and does not care.

Now, two ways to price the share:

- **Fixed price** — the baker announces "BDT 10 a share," take it or leave it. Easy to understand. Almost always too cheap, which is why everyone queues.
- **Book building** — the baker asks the big wholesale buyers what they will pay, and sets the price from their bids. Sensible in theory. But if the wholesalers quietly agree to shout a high number for a tiny quantity each, the price is fake, and the small buyers who pay it are the ones left holding.

And the queue itself has changed. It used to be a **raffle** — one ticket, you win or you don't, so people bought tickets in every family member's name. Now it is a **share-out**: everyone in the queue gets a slice proportional to what they asked for, but you are only allowed in the queue if you already own BDT 20,000-odd of other shares. The free ticket became a paid entry.`,
      bn: `একটি কোম্পানিকে এমন একটি বেকারি ভাবুন যে দ্বিতীয় একটি চুলা বানাতে চায়।

- **প্রাথমিক বাজার:** বেকারি আপনার কাছে নিজের একটি অংশ বিক্রি করে, এবং আপনার টাকা দিয়ে চুলা কেনে। আপনার নগদ চুলায় ঢোকে।
- **মাধ্যমিক বাজার:** আপনি পরে ঐ শেয়ার অন্য কারো কাছে বিক্রি করেন। নগদ ঢোকে আপনার পকেটে। বেকারি এক টাকাও দেখে না, এবং তার কিছু যায়-আসে না।

এখন, শেয়ারের দাম ঠিক করার দুটি উপায়:

- **নির্ধারিত মূল্য** — বেকার ঘোষণা করেন "শেয়ার প্রতি ১০ টাকা," নিলে নিন, নইলে না। বুঝতে সহজ। প্রায় সবসময়ই খুব সস্তা, আর সে কারণেই সবাই লাইনে দাঁড়ায়।
- **বুক বিল্ডিং** — বেকার বড় পাইকারি ক্রেতাদের জিজ্ঞেস করেন তাঁরা কত দেবেন, এবং তাঁদের দর থেকে দাম ঠিক করেন। তত্ত্বে যুক্তিসঙ্গত। কিন্তু পাইকাররা যদি চুপিসারে সম্মত হন যে প্রত্যেকে সামান্য পরিমাণের জন্য একটি উঁচু সংখ্যা হাঁকবেন, তবে দামটি নকল, আর যে ছোট ক্রেতারা সেটি দেন তাঁরাই শেষে বোঝা বইতে থাকেন।

আর লাইনটাও বদলে গেছে। আগে ছিল **র‍্যাফেল** — একটি টিকিট, হয় জিতবেন নয় জিতবেন না, তাই মানুষ পরিবারের প্রতিটি সদস্যের নামে টিকিট কিনত। এখন এটি **ভাগাভাগি**: লাইনের সবাই যা চেয়েছিলেন তার সমানুপাতিক একটি অংশ পান, কিন্তু লাইনে ঢুকতে দেওয়া হয় কেবল তখনই যদি আপনার আগে থেকেই ২০,০০০ টাকার মতো অন্য শেয়ার থাকে। বিনামূল্যের টিকিট হয়ে গেল সবেতন প্রবেশ।`,
    },

    example: {
      en: `### Why the listing-day pop is a design feature, not a discovery

For years the standard DSE IPO was priced at face value — BDT 10 — regardless of the company's actual worth. A company with BDT 40 of book value per share and BDT 6 of annual EPS was sold to the public at BDT 10. On listing day it traded at BDT 35.

That 250% first-day return was not the market discovering value. It was the offer price being wrong by construction.

**Approximate shape of the mechanic:**

| Stage | What happens |
|---|---|
| Offer | 3 crore shares at BDT 10 = BDT 30 crore raised |
| Subscription | Applications for 90 crore shares — 30× oversubscribed |
| Allotment (pre-2021) | Lottery. Roughly 1 in 30 applicants wins a lot |
| Allotment (post-2021) | Pro-rata. Everyone gets ~1/30th of what they applied for |
| Listing | Opens at BDT 22–35 depending on sector and float |

**What this does to behaviour.** If an asset reliably doubles on day one, rational participants stop analysing the asset. Nobody reads the prospectus of a BDT 10 IPO, because the price is not a claim about value — it is a fixed entry fee to a raffle. The analytical muscle that a primary market is supposed to build simply never develops.

### The other side: what underpricing costs the company

The bakery wanted BDT 30 crore for its oven. The market was willing to pay BDT 90 crore for the same 3 crore shares. **The company gave away BDT 60 crore of value to IPO applicants.** That is money that did not build ovens.

This is why a well-run primary market matters beyond the trade. Persistent underpricing means listing is expensive for good companies — which is one reason the largest Bangladeshi private groups have stayed unlisted, which is exactly the ~15% market-cap-to-GDP problem from Chapter 1.

### A worked contrast — two IPOs, same offer price

| | Company A | Company B |
|---|---|---|
| Offer price | BDT 10 | BDT 10 |
| EPS (last audited) | BDT 2.40 | BDT 0.35 |
| P/E at offer | 4.2× | 28.6× |
| Sector median P/E | 14× | 14× |
| Use of proceeds | Machinery, debt repayment | "Business expansion" |
| Pre-IPO placement | None | 40% of pre-IPO equity |
| Sponsor holding post-IPO | 62% | 31% |

Company A is genuinely cheap at the offer. Company B is expensive at the same nominal price, has vague use of proceeds, and carries a large placement block that will become sellable on a known date.

**Both cost BDT 10. They are not the same trade.** The nominal price tells you nothing; the multiple and the supply calendar tell you everything.`,
      bn: `### কেন তালিকাভুক্তির দিনের উল্লম্ফন একটি নকশাগত বৈশিষ্ট্য, আবিষ্কার নয়

বছরের পর বছর প্রমিত ডিএসই আইপিও-র দাম ছিল অভিহিত মূল্যে — ১০ টাকা — কোম্পানির প্রকৃত মূল্য নির্বিশেষে। যে কোম্পানির শেয়ারপ্রতি বুক ভ্যালু ৪০ টাকা এবং বার্ষিক ইপিএস ৬ টাকা, তা জনগণের কাছে বিক্রি হতো ১০ টাকায়। তালিকাভুক্তির দিন তা লেনদেন হতো ৩৫ টাকায়।

ঐ ২৫০% প্রথম দিনের রিটার্ন বাজারের মূল্য আবিষ্কার ছিল না। এটি ছিল গঠনগতভাবেই ভুল একটি অফার মূল্য।

**কৌশলটির আনুমানিক রূপ:**

| ধাপ | যা ঘটে |
|---|---|
| অফার | ৩ কোটি শেয়ার ১০ টাকায় = ৩০ কোটি টাকা সংগ্রহ |
| চাঁদা | ৯০ কোটি শেয়ারের আবেদন — ৩০ গুণ অতিরিক্ত |
| বরাদ্দ (২০২১-পূর্ব) | লটারি। প্রায় ৩০ জনে ১ জন আবেদনকারী একটি লট জেতেন |
| বরাদ্দ (২০২১-পরবর্তী) | সমানুপাতিক। সবাই যা চেয়েছেন তার ~১/৩০ অংশ পান |
| তালিকাভুক্তি | খাত ও ফ্লোট অনুযায়ী ২২–৩৫ টাকায় শুরু |

**এটি আচরণে যা করে।** যদি কোনো সম্পদ নির্ভরযোগ্যভাবে প্রথম দিনেই দ্বিগুণ হয়, যুক্তিবাদী অংশগ্রহণকারীরা সম্পদটি বিশ্লেষণ করা বন্ধ করে দেন। ১০ টাকার আইপিও-র প্রসপেক্টাস কেউ পড়েন না, কারণ দামটি মূল্য সম্পর্কে কোনো দাবি নয় — এটি একটি র‍্যাফেলে নির্ধারিত প্রবেশমূল্য। প্রাথমিক বাজারের যে বিশ্লেষণী পেশি গড়ে তোলার কথা, তা কখনো গড়েই ওঠে না।

### অন্য দিক: অবমূল্যায়নে কোম্পানির কী খরচ হয়

বেকারি তার চুলার জন্য ৩০ কোটি টাকা চেয়েছিল। বাজার একই ৩ কোটি শেয়ারের জন্য ৯০ কোটি টাকা দিতে রাজি ছিল। **কোম্পানিটি আইপিও আবেদনকারীদের ৬০ কোটি টাকার মূল্য বিলিয়ে দিল।** ঐ টাকা দিয়ে কোনো চুলা তৈরি হয়নি।

এ কারণেই একটি সুপরিচালিত প্রাথমিক বাজার লেনদেনের বাইরেও গুরুত্বপূর্ণ। ধারাবাহিক অবমূল্যায়ন মানে ভালো কোম্পানির জন্য তালিকাভুক্তি ব্যয়বহুল — যা বাংলাদেশের বৃহত্তম বেসরকারি গ্রুপগুলোর অতালিকাভুক্ত থাকার একটি কারণ, আর সেটিই অধ্যায় ১-এর ~১৫% বাজার-মূলধন-থেকে-জিডিপি সমস্যা।

### একটি তুলনা — একই অফার মূল্যের দুটি আইপিও

| | কোম্পানি ক | কোম্পানি খ |
|---|---|---|
| অফার মূল্য | ১০ টাকা | ১০ টাকা |
| ইপিএস (সর্বশেষ নিরীক্ষিত) | ২.৪০ টাকা | ০.৩৫ টাকা |
| অফারে P/E | ৪.২× | ২৮.৬× |
| খাতের মধ্যক P/E | ১৪× | ১৪× |
| অর্থের ব্যবহার | যন্ত্রপাতি, ঋণ পরিশোধ | "ব্যবসা সম্প্রসারণ" |
| প্রি-আইপিও প্লেসমেন্ট | নেই | প্রি-আইপিও ইকুইটির ৪০% |
| আইপিও-পরবর্তী উদ্যোক্তা মালিকানা | ৬২% | ৩১% |

কোম্পানি ক অফারে সত্যিই সস্তা। কোম্পানি খ একই নামমাত্র দামে ব্যয়বহুল, অর্থের ব্যবহার অস্পষ্ট, এবং একটি বড় প্লেসমেন্ট ব্লক বহন করে যা একটি জানা তারিখে বিক্রয়যোগ্য হয়ে উঠবে।

**দুটোরই দাম ১০ টাকা। দুটি এক লেনদেন নয়।** নামমাত্র দাম আপনাকে কিছুই বলে না; গুণিতক ও সরবরাহ ক্যালেন্ডার আপনাকে সবকিছু বলে।`,
    },

    formula: {
      en: `**Oversubscription multiple:**
$$X = \\frac{\\text{Shares Applied For}}{\\text{Shares Offered}}$$

**Pro-rata allotment ratio** (post-2021 general investor portion):
$$a = \\frac{1}{X}$$

**Expected shares allotted** on an application of $L$ shares:
$$S = L \\times a = \\frac{L}{X}$$

**Expected gross listing gain:**
$$G = S \\times (P_{list} - P_{offer})$$

**Opportunity cost of blocked capital.** Subscription money is locked from application to refund/allotment:
$$C_{opp} = (L \\times P_{offer}) \\times r \\times \\frac{d}{365}$$

where $r$ is the annual rate available on the safest alternative and $d$ the days blocked.

**Net expected value:**
$$E = G - C_{opp}$$

**Return on blocked capital:**
$$R = \\frac{E}{L \\times P_{offer}} \\times 100$$

**Under the old lottery regime,** replace the deterministic $a$ with a probability. If $n$ lots are allotted among $N$ applications:
$$E_{lottery} = \\frac{n}{N} \\times L \\times (P_{list} - P_{offer}) - C_{opp}$$

**Post-IPO free float:**
$$F = \\frac{\\text{Shares Offered} + \\text{Unlocked Pre-IPO Shares}}{\\text{Total Shares Outstanding}}$$

Re-compute $F$ at every lock-in expiry date. That is the supply calendar.`,
      bn: `**অতিরিক্ত চাঁদার গুণিতক:**
$$X = \\frac{\\text{আবেদনকৃত শেয়ার}}{\\text{প্রদত্ত শেয়ার}}$$

**সমানুপাতিক বরাদ্দ অনুপাত** (২০২১-পরবর্তী সাধারণ বিনিয়োগকারী অংশ):
$$a = \\frac{1}{X}$$

$L$ শেয়ারের আবেদনে **প্রত্যাশিত বরাদ্দকৃত শেয়ার:**
$$S = L \\times a = \\frac{L}{X}$$

**প্রত্যাশিত মোট তালিকাভুক্তি লাভ:**
$$G = S \\times (P_{list} - P_{offer})$$

**আটকে থাকা মূলধনের সুযোগ ব্যয়।** চাঁদার টাকা আবেদন থেকে ফেরত/বরাদ্দ পর্যন্ত আটকে থাকে:
$$C_{opp} = (L \\times P_{offer}) \\times r \\times \\frac{d}{365}$$

যেখানে $r$ হলো নিরাপদতম বিকল্পে প্রাপ্য বার্ষিক হার এবং $d$ হলো আটকে থাকা দিন।

**নিট প্রত্যাশিত মূল্য:**
$$E = G - C_{opp}$$

**আটকে থাকা মূলধনের ওপর রিটার্ন:**
$$R = \\frac{E}{L \\times P_{offer}} \\times 100$$

**পুরোনো লটারি ব্যবস্থায়** নির্ধারিত $a$-এর বদলে একটি সম্ভাবনা বসান। $N$ আবেদনের মধ্যে $n$ লট বরাদ্দ হলে:
$$E_{lottery} = \\frac{n}{N} \\times L \\times (P_{list} - P_{offer}) - C_{opp}$$

**আইপিও-পরবর্তী ফ্রি ফ্লোট:**
$$F = \\frac{\\text{প্রদত্ত শেয়ার} + \\text{লক-মুক্ত প্রি-আইপিও শেয়ার}}{\\text{মোট বকেয়া শেয়ার}}$$

প্রতিটি লক-ইন মেয়াদ শেষের তারিখে $F$ পুনরায় গণনা করুন। ঐটিই সরবরাহ ক্যালেন্ডার।`,
    },

    manual: {
      en: `**Scenario.** An IPO offers 3 crore shares at BDT 10. The lot is 500 shares. Applications total 90 crore shares. You expect it to list around BDT 22. Your money is blocked 45 days. Your safe alternative earns 9% a year.

**Step 1 — Application value:**
$$L \\times P_{offer} = 500 \\times 10 = \\text{BDT } 5{,}000$$

**Step 2 — Oversubscription:**
$$X = \\frac{90{,}00{,}00{,}000}{3{,}00{,}00{,}000} = 30\\times$$

**Step 3 — Pro-rata allotment ratio:**
$$a = \\frac{1}{30} = 0.0333$$

**Step 4 — Shares actually allotted:**
$$S = 500 \\times 0.0333 = 16.67 \\text{ shares}$$

**Step 5 — Gross listing gain:**
$$G = 16.67 \\times (22 - 10) = 16.67 \\times 12 = \\text{BDT } 200$$

**Step 6 — Opportunity cost:**
$$C_{opp} = 5{,}000 \\times 0.09 \\times \\frac{45}{365} = \\text{BDT } 55.48$$

**Step 7 — Net expected value:**
$$E = 200 - 55.48 = \\text{BDT } 144.52$$

**Step 8 — Return on blocked capital:**
$$R = \\frac{144.52}{5{,}000} \\times 100 = 2.89\\%$$

**Interpretation.** A 2.89% return over 45 days annualises to roughly 23% — genuinely attractive, and it is why IPO applications are near-universal among active DSE participants.

But read what the number is sensitive to. The entire gain rests on $P_{list} = 22$. **Re-run it at BDT 12:**

$$G = 16.6\\overline{6} \\times 2 = 33.33, \\qquad E = 33.33 - 55.48 = -\\text{BDT } 22.15$$

*(Carry the allotment to full precision, not the rounded 16.67 — rounding early here shifts the answer by a paisa and, on larger applications, by more. The §3.11 listing agrees to the second decimal.)*

The trade is now *negative*. A listing at BDT 12 instead of BDT 22 — an outcome entirely within normal range for a weak issue in a soft market — turns a 2.89% gain into a 0.44% loss.

**The discipline:** the IPO decision is a forecast of the listing price, not a free option. The pro-rata regime made that explicit, because you now always receive shares. Under the lottery you usually received nothing and lost only the opportunity cost; under pro-rata you always own the outcome.`,
      bn: `**পরিস্থিতি।** একটি আইপিও ১০ টাকায় ৩ কোটি শেয়ার দিচ্ছে। লট ৫০০ শেয়ার। মোট আবেদন ৯০ কোটি শেয়ার। আপনি আশা করছেন এটি প্রায় ২২ টাকায় তালিকাভুক্ত হবে। আপনার টাকা ৪৫ দিন আটকে থাকবে। আপনার নিরাপদ বিকল্পে বছরে ৯% আয়।

**ধাপ ১ — আবেদনের মূল্য:**
$$L \\times P_{offer} = 500 \\times 10 = ৫{,}০০০ \\text{ টাকা}$$

**ধাপ ২ — অতিরিক্ত চাঁদা:**
$$X = \\frac{90{,}00{,}00{,}000}{3{,}00{,}00{,}000} = 30\\times$$

**ধাপ ৩ — সমানুপাতিক বরাদ্দ অনুপাত:**
$$a = \\frac{1}{30} = 0.0333$$

**ধাপ ৪ — প্রকৃত বরাদ্দকৃত শেয়ার:**
$$S = 500 \\times 0.0333 = 16.67 \\text{ শেয়ার}$$

**ধাপ ৫ — মোট তালিকাভুক্তি লাভ:**
$$G = 16.67 \\times (22 - 10) = ২০০ \\text{ টাকা}$$

**ধাপ ৬ — সুযোগ ব্যয়:**
$$C_{opp} = 5{,}000 \\times 0.09 \\times \\frac{45}{365} = ৫৫.৪৮ \\text{ টাকা}$$

**ধাপ ৭ — নিট প্রত্যাশিত মূল্য:**
$$E = 200 - 55.48 = ১৪৪.৫২ \\text{ টাকা}$$

**ধাপ ৮ — আটকে থাকা মূলধনের ওপর রিটার্ন:**
$$R = \\frac{144.52}{5{,}000} \\times 100 = 2.89\\%$$

**ব্যাখ্যা।** ৪৫ দিনে ২.৮৯% রিটার্ন বার্ষিক হিসেবে প্রায় ২৩% — সত্যিই আকর্ষণীয়, এবং এ কারণেই সক্রিয় ডিএসই অংশগ্রহণকারীদের মধ্যে আইপিও আবেদন প্রায় সর্বজনীন।

কিন্তু সংখ্যাটি কীসের প্রতি সংবেদনশীল তা পড়ুন। পুরো লাভ দাঁড়িয়ে আছে $P_{list} = 22$ এর ওপর। **১২ টাকায় আবার চালান:**

$$G = 16.6\\overline{6} \\times 2 = 33.33, \\qquad E = 33.33 - 55.48 = -২২.১৫ \\text{ টাকা}$$

*(বরাদ্দ পূর্ণ নির্ভুলতায় নিন, গোল করা ১৬.৬৭ নয় — এখানে আগেই গোল করলে উত্তর এক পয়সা সরে যায়, আর বড় আবেদনে আরও বেশি। §৩.১১-এর কোড দ্বিতীয় দশমিক পর্যন্ত মেলে।)*

লেনদেনটি এখন *ঋণাত্মক*। ২২ টাকার বদলে ১২ টাকায় তালিকাভুক্তি — নরম বাজারে একটি দুর্বল ইস্যুর জন্য সম্পূর্ণ স্বাভাবিক পরিসরের ফলাফল — ২.৮৯% লাভকে ০.৪৪% ক্ষতিতে পরিণত করে।

**শৃঙ্খলা:** আইপিও সিদ্ধান্ত হলো তালিকাভুক্তি মূল্যের একটি পূর্বাভাস, বিনামূল্যের অপশন নয়। সমানুপাতিক ব্যবস্থা এটি স্পষ্ট করেছে, কারণ এখন আপনি সবসময়ই শেয়ার পান। লটারিতে আপনি সাধারণত কিছুই পেতেন না এবং কেবল সুযোগ ব্যয় হারাতেন; সমানুপাতিকে ফলাফলের মালিক সবসময় আপনি।`,
    },

    excel: {
      en: `\`\`\`
A1: Offer Price (BDT)            B1: 10
A2: Lot Size (shares)            B2: 500
A3: Application Value (BDT)      B3: =B1*B2

A5: Shares Offered               B5: 30000000
A6: Shares Applied For           B6: 900000000
A7: Oversubscription (x)         B7: =B6/B5
A8: Pro-rata Allotment Ratio     B8: =1/B7

A10: Expected Listing Price      B10: 22
A11: Listing Gain per Share      B11: =B10-B1
A12: Shares Actually Allotted    B12: =B2*B8
A13: Expected Gross Gain (BDT)   B13: =B12*B11

A15: Blocked Days                B15: 45
A16: Annual Opportunity Rate (%) B16: 9
A17: Opportunity Cost (BDT)      B17: =B3*(B16/100)*(B15/365)
A18: Net Expected Gain (BDT)     B18: =B13-B17
A19: Return on Blocked Cap (%)   B19: =B18/B3*100

A21: VERDICT                     B21: =IF(B18<=0,"REJECT - Negative expected value",
                                     IF(B19<2,"MARGINAL - Capital better deployed elsewhere",
                                     "APPLY"))
\`\`\`

**Use B10 as the stress lever.** Set it to your *pessimistic* listing price, not your hopeful one, and see whether B21 still says APPLY. An IPO that only works at the optimistic listing price is not an opportunity — it is a directional bet on sentiment.`,
      bn: `\`\`\`
A1: অফার মূল্য (টাকা)              B1: 10
A2: লট সাইজ (শেয়ার)               B2: 500
A3: আবেদনের মূল্য (টাকা)           B3: =B1*B2

A5: প্রদত্ত শেয়ার                  B5: 30000000
A6: আবেদনকৃত শেয়ার                B6: 900000000
A7: অতিরিক্ত চাঁদা (গুণ)           B7: =B6/B5
A8: সমানুপাতিক বরাদ্দ অনুপাত        B8: =1/B7

A10: প্রত্যাশিত তালিকাভুক্তি মূল্য   B10: 22
A11: শেয়ারপ্রতি তালিকাভুক্তি লাভ    B11: =B10-B1
A12: প্রকৃত বরাদ্দকৃত শেয়ার         B12: =B2*B8
A13: প্রত্যাশিত মোট লাভ (টাকা)      B13: =B12*B11

A15: আটকে থাকা দিন                B15: 45
A16: বার্ষিক সুযোগ হার (%)          B16: 9
A17: সুযোগ ব্যয় (টাকা)             B17: =B3*(B16/100)*(B15/365)
A18: নিট প্রত্যাশিত লাভ (টাকা)      B18: =B13-B17
A19: আটকে থাকা মূলধনে রিটার্ন (%)   B19: =B18/B3*100

A21: রায়                          B21: =IF(B18<=0,"REJECT - Negative expected value",
                                     IF(B19<2,"MARGINAL - Capital better deployed elsewhere",
                                     "APPLY"))
\`\`\`

**B10-কে স্ট্রেস লিভার হিসেবে ব্যবহার করুন।** এটি আপনার *নৈরাশ্যবাদী* তালিকাভুক্তি মূল্যে বসান, আশাবাদীটিতে নয়, এবং দেখুন B21 তখনো APPLY বলে কি না। যে আইপিও কেবল আশাবাদী তালিকাভুক্তি মূল্যে কাজ করে সেটি সুযোগ নয় — সেটি অনুভূতির ওপর একটি দিকনির্দেশক বাজি।`,
    },

    python: {
      en: `\`\`\`python
"""
Chapter 3 — IPO application expected value, under lottery and pro-rata regimes.
Educational.
"""
from dataclasses import dataclass


@dataclass
class IPO:
    """One public issue, as seen by a general investor."""
    name: str
    offer_price: float
    lot_size: int
    shares_offered: int
    shares_applied: int
    expected_listing_price: float
    blocked_days: int = 45
    opportunity_rate: float = 0.09

    @property
    def application_value(self) -> float:
        return self.offer_price * self.lot_size

    @property
    def oversubscription(self) -> float:
        return self.shares_applied / self.shares_offered

    @property
    def allotment_ratio(self) -> float:
        """Pro-rata: everyone receives 1/X of what they applied for."""
        return 1 / self.oversubscription

    @property
    def opportunity_cost(self) -> float:
        return (self.application_value
                * self.opportunity_rate
                * self.blocked_days / 365)

    def expected_value(self, listing_price: float = None) -> dict:
        """Net expected value of one application at a given listing price."""
        px = self.expected_listing_price if listing_price is None else listing_price
        allotted = self.lot_size * self.allotment_ratio
        gross = allotted * (px - self.offer_price)
        net = gross - self.opportunity_cost
        return {
            "listing_price": px,
            "shares_allotted": allotted,
            "gross_gain": gross,
            "opportunity_cost": self.opportunity_cost,
            "net": net,
            "return_pct": net / self.application_value * 100,
        }

    def breakeven_listing_price(self) -> float:
        """The listing price at which the application exactly breaks even."""
        allotted = self.lot_size * self.allotment_ratio
        return self.offer_price + (self.opportunity_cost / allotted)


def verdict(return_pct: float) -> str:
    if return_pct <= 0:
        return "REJECT - Negative expected value"
    if return_pct < 2:
        return "MARGINAL - Capital better deployed elsewhere"
    return "APPLY"


if __name__ == "__main__":
    ipo = IPO(
        name="Sample Textile Ltd",
        offer_price=10.0,
        lot_size=500,
        shares_offered=3_00_00_000,
        shares_applied=90_00_00_000,
        expected_listing_price=22.0,
    )

    print(f"Issue                : {ipo.name}")
    print(f"Oversubscription     : {ipo.oversubscription:.1f}x")
    print(f"Allotment ratio      : {ipo.allotment_ratio:.4f}")
    print(f"Application value    : BDT {ipo.application_value:,.0f}")
    print(f"Opportunity cost     : BDT {ipo.opportunity_cost:,.2f}")
    print(f"Break-even listing   : BDT {ipo.breakeven_listing_price():.2f}")
    print()

    print(f"{'Listing':>9} {'Allotted':>9} {'Gross':>9} {'Net':>9} {'Return':>8}  Verdict")
    print("-" * 74)
    for px in (12.0, 15.0, 18.0, 22.0, 30.0):
        r = ipo.expected_value(px)
        print(f"{px:>9.2f} {r['shares_allotted']:>9.2f} {r['gross_gain']:>9.2f} "
              f"{r['net']:>9.2f} {r['return_pct']:>7.2f}%  {verdict(r['return_pct'])}")
\`\`\`

**Read the break-even row, not the headline row.** The table shows the whole sensitivity, and the useful number is the listing price below which the application destroys value. If your honest pessimistic case sits under that line, the correct action is not to apply — regardless of how confident the market feels.`,
      bn: `\`\`\`python
"""
অধ্যায় ৩ — লটারি ও সমানুপাতিক ব্যবস্থায় আইপিও আবেদনের প্রত্যাশিত মূল্য।
শিক্ষামূলক।
"""
from dataclasses import dataclass


@dataclass
class IPO:
    """একজন সাধারণ বিনিয়োগকারীর দৃষ্টিতে একটি পাবলিক ইস্যু।"""
    name: str
    offer_price: float
    lot_size: int
    shares_offered: int
    shares_applied: int
    expected_listing_price: float
    blocked_days: int = 45
    opportunity_rate: float = 0.09

    @property
    def application_value(self) -> float:
        return self.offer_price * self.lot_size

    @property
    def oversubscription(self) -> float:
        return self.shares_applied / self.shares_offered

    @property
    def allotment_ratio(self) -> float:
        """সমানুপাতিক: প্রত্যেকে যা চেয়েছেন তার ১/X পান।"""
        return 1 / self.oversubscription

    @property
    def opportunity_cost(self) -> float:
        return (self.application_value
                * self.opportunity_rate
                * self.blocked_days / 365)

    def expected_value(self, listing_price: float = None) -> dict:
        """প্রদত্ত তালিকাভুক্তি মূল্যে একটি আবেদনের নিট প্রত্যাশিত মূল্য।"""
        px = self.expected_listing_price if listing_price is None else listing_price
        allotted = self.lot_size * self.allotment_ratio
        gross = allotted * (px - self.offer_price)
        net = gross - self.opportunity_cost
        return {
            "listing_price": px,
            "shares_allotted": allotted,
            "gross_gain": gross,
            "opportunity_cost": self.opportunity_cost,
            "net": net,
            "return_pct": net / self.application_value * 100,
        }

    def breakeven_listing_price(self) -> float:
        """যে তালিকাভুক্তি মূল্যে আবেদনটি ঠিক ব্রেক-ইভেন করে।"""
        allotted = self.lot_size * self.allotment_ratio
        return self.offer_price + (self.opportunity_cost / allotted)


def verdict(return_pct: float) -> str:
    if return_pct <= 0:
        return "REJECT - Negative expected value"
    if return_pct < 2:
        return "MARGINAL - Capital better deployed elsewhere"
    return "APPLY"


if __name__ == "__main__":
    ipo = IPO(
        name="Sample Textile Ltd",
        offer_price=10.0,
        lot_size=500,
        shares_offered=3_00_00_000,
        shares_applied=90_00_00_000,
        expected_listing_price=22.0,
    )

    print(f"Issue                : {ipo.name}")
    print(f"Oversubscription     : {ipo.oversubscription:.1f}x")
    print(f"Allotment ratio      : {ipo.allotment_ratio:.4f}")
    print(f"Application value    : BDT {ipo.application_value:,.0f}")
    print(f"Opportunity cost     : BDT {ipo.opportunity_cost:,.2f}")
    print(f"Break-even listing   : BDT {ipo.breakeven_listing_price():.2f}")
    print()

    print(f"{'Listing':>9} {'Allotted':>9} {'Gross':>9} {'Net':>9} {'Return':>8}  Verdict")
    print("-" * 74)
    for px in (12.0, 15.0, 18.0, 22.0, 30.0):
        r = ipo.expected_value(px)
        print(f"{px:>9.2f} {r['shares_allotted']:>9.2f} {r['gross_gain']:>9.2f} "
              f"{r['net']:>9.2f} {r['return_pct']:>7.2f}%  {verdict(r['return_pct'])}")
\`\`\`

**শিরোনামের সারি নয়, ব্রেক-ইভেন সারিটি পড়ুন।** টেবিলটি সম্পূর্ণ সংবেদনশীলতা দেখায়, আর কাজের সংখ্যাটি হলো সেই তালিকাভুক্তি মূল্য যার নিচে আবেদনটি মূল্য ধ্বংস করে। আপনার সৎ নৈরাশ্যবাদী পরিস্থিতি যদি ঐ রেখার নিচে থাকে, তবে সঠিক পদক্ষেপ হলো আবেদন না করা — বাজার যতই আত্মবিশ্বাসী মনে হোক।`,
    },

    mistakes: {
      en: `1. **Treating BSEC approval as an endorsement of the business.** BSEC approves *process and disclosure*. It does not certify that the company is good, that the price is fair, or that the projections are achievable. An approved prospectus means the paperwork is complete, nothing more.
2. **Reading the nominal offer price instead of the multiple.** BDT 10 is not cheap. BDT 10 against EPS of BDT 0.35 is 28.6× earnings, which is expensive in any sector on this exchange.
3. **Ignoring the lock-in calendar.** Pre-IPO placement shares acquired at BDT 10–15 become sellable on a known date. If that block is large relative to the float, the expiry is a scheduled supply shock. It is public information and almost nobody diaries it.
4. **Assuming the listing-day price is the value.** It is the price at which the most optimistic marginal buyer transacted on a day of maximum attention and minimum float. It is the least reliable price the security will ever print.
5. **Skipping "use of proceeds".** "Business expansion" is not a use of proceeds. Specific machinery, specific debt repayment with named lenders, specific capacity — that is. Vagueness here is the single cheapest red flag available to you.
6. **Applying with capital you need.** Money is blocked for weeks. Under the pro-rata regime you also end up holding an actual position, not a refund. Both are fine if planned and damaging if not.
7. **Opening multiple BO accounts to game allotment.** Under pro-rata this no longer improves your outcome the way it did under the lottery, and it never improved your analysis.`,
      bn: `১. **বিএসইসি-র অনুমোদনকে ব্যবসার সুপারিশ মনে করা।** বিএসইসি *প্রক্রিয়া ও তথ্য প্রকাশ* অনুমোদন করে। এটি প্রত্যয়ন করে না যে কোম্পানিটি ভালো, দামটি ন্যায্য, বা প্রক্ষেপণগুলো অর্জনযোগ্য। অনুমোদিত প্রসপেক্টাস মানে কাগজপত্র সম্পূর্ণ, এর বেশি কিছু নয়।
২. **গুণিতকের বদলে নামমাত্র অফার মূল্য পড়া।** ১০ টাকা সস্তা নয়। ০.৩৫ টাকা ইপিএস-এর বিপরীতে ১০ টাকা মানে ২৮.৬ গুণ আয়, যা এই এক্সচেঞ্জের যেকোনো খাতেই ব্যয়বহুল।
৩. **লক-ইন ক্যালেন্ডার উপেক্ষা করা।** ১০–১৫ টাকায় নেওয়া প্রি-আইপিও প্লেসমেন্ট শেয়ার একটি জানা তারিখে বিক্রয়যোগ্য হয়। ঐ ব্লক যদি ফ্লোটের তুলনায় বড় হয়, তবে মেয়াদ শেষ একটি নির্ধারিত সরবরাহ ধাক্কা। এটি প্রকাশ্য তথ্য এবং প্রায় কেউই এটি ডায়েরিতে লেখে না।
৪. **তালিকাভুক্তির দিনের দামকেই মূল্য ধরে নেওয়া।** এটি সেই দাম যেখানে সর্বোচ্চ মনোযোগ ও সর্বনিম্ন ফ্লোটের দিনে সবচেয়ে আশাবাদী প্রান্তিক ক্রেতা লেনদেন করেছেন। সিকিউরিটিটি কখনো যত দাম দেখাবে তার মধ্যে এটিই সবচেয়ে অনির্ভরযোগ্য।
৫. **"অর্থের ব্যবহার" এড়িয়ে যাওয়া।** "ব্যবসা সম্প্রসারণ" অর্থের ব্যবহার নয়। নির্দিষ্ট যন্ত্রপাতি, নামসহ ঋণদাতার নির্দিষ্ট ঋণ পরিশোধ, নির্দিষ্ট সক্ষমতা — সেটি ব্যবহার। এখানে অস্পষ্টতাই আপনার হাতের সবচেয়ে সস্তা বিপদ সংকেত।
৬. **প্রয়োজনীয় টাকা দিয়ে আবেদন করা।** টাকা সপ্তাহের পর সপ্তাহ আটকে থাকে। সমানুপাতিক ব্যবস্থায় আপনি ফেরত নয়, একটি প্রকৃত পজিশনও ধরে বসেন। পরিকল্পিত হলে দুটোই ঠিক, না হলে ক্ষতিকর।
৭. **বরাদ্দে সুবিধা নিতে একাধিক বিও অ্যাকাউন্ট খোলা।** সমানুপাতিক ব্যবস্থায় এটি আর লটারির মতো আপনার ফলাফল উন্নত করে না, আর কখনোই আপনার বিশ্লেষণ উন্নত করেনি।`,
    },

    tips: {
      en: `- **Compute the P/E at the offer price before anything else.** Compare it to the sector median from Chapter 1's composition table. If the IPO is priced above sector median with a weaker balance sheet, the listing pop is the only thing you are buying.
- **Diary every lock-in expiry the day you buy.** Put the dates in a calendar with the share count releasing on each. This single habit prevents the most predictable loss in the primary market.
- **Read "use of proceeds" and "risk factors" first, prospectus front matter last.** The front is written by the issue manager to sell. The risk factors section is written by lawyers to protect, and is therefore closer to honest.
- **Check the pre-IPO placement price and date.** If insiders acquired at BDT 10 six months before an offer at BDT 10, ask what changed. If they acquired at BDT 40 two years ago, that is a different and better signal.
- **Treat the issue manager's track record as data.** Pull the last ten issues that merchant bank managed and chart their price 12 months post-listing against the offer price. Issue managers have persistent, measurable reputations.
- **Under pro-rata, size the application by what you are willing to hold.** You will be allotted something. Decide in advance whether you are a listing-day seller or a holder, and write it down before you apply — not on listing morning.`,
      bn: `- **আর সব কিছুর আগে অফার মূল্যে P/E গণনা করুন।** অধ্যায় ১-এর খাত গঠন টেবিলের মধ্যক P/E-এর সঙ্গে তুলনা করুন। দুর্বল স্থিতিপত্রসহ আইপিও যদি খাতের মধ্যকের ওপরে মূল্যায়িত হয়, তবে আপনি কেবল তালিকাভুক্তির উল্লম্ফনটাই কিনছেন।
- **যেদিন কিনবেন সেদিনই প্রতিটি লক-ইন মেয়াদ শেষ ডায়েরিতে লিখুন।** তারিখগুলো ক্যালেন্ডারে রাখুন, প্রতিটিতে কত শেয়ার মুক্ত হচ্ছে তা-সহ। এই একটি অভ্যাসই প্রাথমিক বাজারের সবচেয়ে অনুমেয় ক্ষতি ঠেকায়।
- **প্রথমে "অর্থের ব্যবহার" ও "ঝুঁকির উপাদান" পড়ুন, প্রসপেক্টাসের ভূমিকা সবার শেষে।** সামনের অংশ লেখেন ইস্যু ব্যবস্থাপক, বিক্রির জন্য। ঝুঁকির অংশ লেখেন আইনজীবীরা, সুরক্ষার জন্য — তাই সেটি সততার বেশি কাছাকাছি।
- **প্রি-আইপিও প্লেসমেন্টের দাম ও তারিখ দেখুন।** ১০ টাকার অফারের ছয় মাস আগে অভ্যন্তরীণরা যদি ১০ টাকায় নিয়ে থাকেন, প্রশ্ন করুন কী বদলাল। দুই বছর আগে ৪০ টাকায় নিয়ে থাকলে সেটি ভিন্ন ও ভালো সংকেত।
- **ইস্যু ব্যবস্থাপকের ট্র্যাক রেকর্ডকে তথ্য হিসেবে দেখুন।** ঐ মার্চেন্ট ব্যাংক পরিচালিত শেষ দশটি ইস্যু বের করে তালিকাভুক্তির ১২ মাস পরের দাম অফার মূল্যের বিপরীতে চার্ট করুন। ইস্যু ব্যবস্থাপকদের স্থায়ী ও পরিমাপযোগ্য সুনাম থাকে।
- **সমানুপাতিক ব্যবস্থায় আবেদনের আকার ঠিক করুন আপনি যতটা ধরে রাখতে রাজি সেই অনুযায়ী।** আপনি কিছু না কিছু পাবেনই। আগেই ঠিক করুন আপনি তালিকাভুক্তির দিনের বিক্রেতা না ধারক, এবং আবেদনের আগেই তা লিখে রাখুন — তালিকাভুক্তির সকালে নয়।`,
    },

    exercises: {
      en: `1. Pick the three most recent DSE IPOs. For each, find the offer price, method (fixed or book built), shares offered, and subscription multiple. Compute the pro-rata allotment ratio for each.
2. For those same three, find the last audited EPS and NAV per share in the prospectus. Compute P/E and P/B at the offer price. Compare each to its sector median. Which was genuinely cheap?
3. Build the expected-value sheet from §3.10. For one live or recent IPO, find the listing price at which your application breaks even. Then find the actual listing price. Were you right?
4. Take one IPO listed 2–3 years ago. Chart its price from listing day to today. Mark every lock-in expiry date on the chart. Describe what happened around those dates.
5. Pick one merchant bank. List the last eight issues it managed. For each, compute the return from offer price to the price 12 months after listing. What is the median? What does that tell you about the next issue it brings?
6. Find one prospectus with a vague "use of proceeds" and one with a specific one. Write a paragraph on how the two differ in what they let you verify later.
7. Re-run exercise 3 under the *old lottery* regime, using the formula in §3.8. Compare the expected value of a single application under lottery versus pro-rata at the same oversubscription. Which regime favours the small applicant, and why?`,
      bn: `১. সাম্প্রতিকতম তিনটি ডিএসই আইপিও বাছুন। প্রতিটির অফার মূল্য, পদ্ধতি (নির্ধারিত না বুক বিল্ট), প্রদত্ত শেয়ার ও চাঁদার গুণিতক বের করুন। প্রতিটির সমানুপাতিক বরাদ্দ অনুপাত গণনা করুন।
২. ঐ তিনটিরই প্রসপেক্টাসে সর্বশেষ নিরীক্ষিত ইপিএস ও শেয়ারপ্রতি NAV বের করুন। অফার মূল্যে P/E ও P/B গণনা করুন। প্রতিটিকে তার খাতের মধ্যকের সঙ্গে তুলনা করুন। কোনটি সত্যিই সস্তা ছিল?
৩. §৩.১০-এর প্রত্যাশিত-মূল্য শিটটি তৈরি করুন। একটি চলমান বা সাম্প্রতিক আইপিও-র জন্য সেই তালিকাভুক্তি মূল্য বের করুন যেখানে আপনার আবেদন ব্রেক-ইভেন করে। তারপর প্রকৃত তালিকাভুক্তি মূল্য বের করুন। আপনি কি ঠিক ছিলেন?
৪. ২–৩ বছর আগে তালিকাভুক্ত একটি আইপিও নিন। তালিকাভুক্তির দিন থেকে আজ পর্যন্ত এর দাম চার্ট করুন। চার্টে প্রতিটি লক-ইন মেয়াদ শেষের তারিখ চিহ্নিত করুন। ঐ তারিখগুলোর আশপাশে কী ঘটেছিল বর্ণনা করুন।
৫. একটি মার্চেন্ট ব্যাংক বাছুন। এটি পরিচালিত শেষ আটটি ইস্যুর তালিকা করুন। প্রতিটির জন্য অফার মূল্য থেকে তালিকাভুক্তির ১২ মাস পরের দাম পর্যন্ত রিটার্ন গণনা করুন। মধ্যক কত? এটি তার পরবর্তী ইস্যু সম্পর্কে আপনাকে কী বলে?
৬. অস্পষ্ট "অর্থের ব্যবহার"সহ একটি এবং সুনির্দিষ্টসহ একটি প্রসপেক্টাস বের করুন। পরে কী যাচাই করতে দেয় সেই দিক থেকে দুটি কীভাবে আলাদা, এক অনুচ্ছেদে লিখুন।
৭. §৩.৮-এর সূত্র ব্যবহার করে *পুরোনো লটারি* ব্যবস্থায় অনুশীলনী ৩ আবার করুন। একই অতিরিক্ত চাঁদায় লটারি বনাম সমানুপাতিকে একটি আবেদনের প্রত্যাশিত মূল্য তুলনা করুন। কোন ব্যবস্থা ক্ষুদ্র আবেদনকারীর অনুকূল, এবং কেন?`,
    },

    summary: {
      en: `- The primary market creates securities and the money goes to the company; the secondary market transfers them between investors and the company receives nothing.
- Public issues run under the BSEC (Public Issue) Rules 2015 as amended, with a merchant bank as issue manager conducting and certifying due diligence.
- **Fixed price** sets the offer in advance — historically at face value BDT 10, and therefore systematically underpriced. **Book building** discovers price through Eligible Investor bidding, and was the mechanism abused at the centre of the 2010–11 crash.
- Allotment moved from **lottery** to **pro-rata** in 2021, with a minimum secondary-market holding requirement. Everyone now receives shares — which converts the IPO from a free option into a position you must be willing to hold.
- The expected value of an application is $E = S(P_{list} - P_{offer}) - C_{opp}$. It is a forecast of the listing price, and it turns negative on modest disappointment.
- Systematic underpricing transfers value from the issuer to applicants, discourages good companies from listing, and destroys the analytical habit a primary market is supposed to build.
- **Discipline established:** read the multiple, not the nominal price; and diary every lock-in expiry as a scheduled supply event on the day you buy.`,
      bn: `- প্রাথমিক বাজার সিকিউরিটিজ সৃষ্টি করে এবং টাকা যায় কোম্পানির কাছে; মাধ্যমিক বাজার সেগুলো বিনিয়োগকারীদের মধ্যে হস্তান্তর করে এবং কোম্পানি কিছুই পায় না।
- পাবলিক ইস্যু চলে বিএসইসি (পাবলিক ইস্যু) বিধিমালা ২০১৫ (সংশোধিত) অনুযায়ী, একটি মার্চেন্ট ব্যাংক ইস্যু ব্যবস্থাপক হিসেবে যথাযথ অনুসন্ধান করে ও প্রত্যয়ন করে।
- **নির্ধারিত মূল্য** অফার আগেই ঠিক করে — ঐতিহাসিকভাবে অভিহিত মূল্য ১০ টাকায়, এবং তাই নিয়মতান্ত্রিকভাবে অবমূল্যায়িত। **বুক বিল্ডিং** যোগ্য বিনিয়োগকারীর দরপত্রে দাম নির্ধারণ করে, এবং এটিই ছিল ২০১০–১১ ধসের কেন্দ্রে অপব্যবহৃত কৌশল।
- বরাদ্দ ২০২১ সালে **লটারি** থেকে **সমানুপাতিকে** গেছে, ন্যূনতম মাধ্যমিক-বাজার মালিকানার শর্তসহ। এখন সবাই শেয়ার পান — যা আইপিও-কে বিনামূল্যের অপশন থেকে এমন একটি পজিশনে রূপান্তরিত করে যা ধরে রাখতে আপনাকে রাজি থাকতে হবে।
- একটি আবেদনের প্রত্যাশিত মূল্য হলো $E = S(P_{list} - P_{offer}) - C_{opp}$। এটি তালিকাভুক্তি মূল্যের একটি পূর্বাভাস, এবং সামান্য হতাশাতেই ঋণাত্মক হয়ে যায়।
- নিয়মতান্ত্রিক অবমূল্যায়ন ইস্যুকারীর কাছ থেকে আবেদনকারীর কাছে মূল্য স্থানান্তর করে, ভালো কোম্পানিকে তালিকাভুক্তিতে নিরুৎসাহিত করে, এবং প্রাথমিক বাজারের যে বিশ্লেষণী অভ্যাস গড়ার কথা তা ধ্বংস করে।
- **প্রতিষ্ঠিত শৃঙ্খলা:** নামমাত্র দাম নয়, গুণিতক পড়ুন; এবং যেদিন কিনবেন সেদিনই প্রতিটি লক-ইন মেয়াদ শেষ একটি নির্ধারিত সরবরাহ ঘটনা হিসেবে ডায়েরিতে লিখুন।`,
    },
  },

  interview: [
    {
      q: {
        en: 'What is the difference between the primary and secondary market, and who receives the money in each?',
        bn: 'প্রাথমিক ও মাধ্যমিক বাজারের পার্থক্য কী, এবং প্রতিটিতে টাকা কে পায়?',
      },
      a: {
        en: 'The primary market is where securities are created and sold to investors for the first time; the subscription proceeds go to the issuing company and fund its business. The secondary market is where existing shares change hands between investors; the company receives nothing and its balance sheet is unaffected. The distinction matters because only the primary market raises capital — secondary trading reallocates ownership and provides the liquidity that makes the primary market possible.',
        bn: 'প্রাথমিক বাজার হলো যেখানে সিকিউরিটিজ সৃষ্টি হয় ও প্রথমবার বিনিয়োগকারীর কাছে বিক্রি হয়; চাঁদার অর্থ যায় ইস্যুকারী কোম্পানির কাছে এবং তার ব্যবসায় অর্থায়ন করে। মাধ্যমিক বাজার হলো যেখানে বিদ্যমান শেয়ার বিনিয়োগকারীদের মধ্যে হাতবদল হয়; কোম্পানি কিছুই পায় না এবং তার স্থিতিপত্র অপরিবর্তিত থাকে। পার্থক্যটি গুরুত্বপূর্ণ কারণ কেবল প্রাথমিক বাজারই মূলধন সংগ্রহ করে — মাধ্যমিক লেনদেন মালিকানা পুনর্বণ্টন করে এবং সেই তারল্য দেয় যা প্রাথমিক বাজারকে সম্ভব করে।',
      },
    },
    {
      q: {
        en: 'Explain book building and how it was abused in the run-up to the 2010–11 crash.',
        bn: 'বুক বিল্ডিং ব্যাখ্যা করুন এবং ২০১০–১১ ধসের আগে এটি কীভাবে অপব্যবহৃত হয়েছিল।',
      },
      a: {
        en: 'Book building discovers the offer price through bids from Eligible Investors — institutions expected to be informed — with the cut-off price set where the EI portion clears. General investors then subscribe at or below that price. The abuse was that EIs bid inflated prices for token quantities, manufacturing a high cut-off that retail then paid. Because each EI\'s allocation was small, their loss on listing was trivial relative to the gain from an inflated market, while retail carried the full fall. BSEC responded with lock-ins on EI allotments, bid-dispersion limits, and periods of outright suspension.',
        bn: 'বুক বিল্ডিং যোগ্য বিনিয়োগকারীদের — যাঁরা অবহিত বলে প্রত্যাশিত — দরপত্রের মাধ্যমে অফার মূল্য নির্ধারণ করে, কাট-অফ মূল্য বসে যেখানে EI অংশ নিঃশেষ হয়। সাধারণ বিনিয়োগকারীরা তারপর ঐ দামে বা তার নিচে চাঁদা দেন। অপব্যবহারটি ছিল, EI-রা নামমাত্র পরিমাণের জন্য স্ফীত দাম হাঁকতেন, একটি উঁচু কাট-অফ তৈরি করতেন যা খুচরা বিনিয়োগকারীরা দিতেন। প্রতিটি EI-এর বরাদ্দ ছোট হওয়ায় তালিকাভুক্তিতে তাঁদের ক্ষতি স্ফীত বাজারের লাভের তুলনায় তুচ্ছ ছিল, আর পুরো পতন বইতেন খুচরা বিনিয়োগকারী। বিএসইসি প্রতিক্রিয়ায় EI বরাদ্দে লক-ইন, বিড বিচ্ছুরণের সীমা, এবং সম্পূর্ণ স্থগিতের সময়কাল আনে।',
      },
    },
    {
      q: {
        en: 'Why did the DSE move from lottery to pro-rata allotment, and what did it change for the retail applicant?',
        bn: 'ডিএসই কেন লটারি থেকে সমানুপাতিক বরাদ্দে গেল, এবং খুচরা আবেদনকারীর জন্য এটি কী বদলাল?',
      },
      a: {
        en: 'The lottery rewarded application count rather than capital or conviction, so households opened BO accounts purely to hold more tickets, inflating account statistics and adding no real participation. Pro-rata allots everyone a fraction of what they applied for, removing that incentive, and the accompanying minimum secondary-market holding requirement means applicants must already carry market exposure. For the retail applicant it converts the IPO from a lottery ticket with a near-zero downside into a guaranteed small position — which means the listing price forecast now matters, because you will definitely own the outcome.',
        bn: 'লটারি মূলধন বা প্রত্যয় নয়, আবেদনের সংখ্যাকে পুরস্কৃত করত, তাই পরিবারগুলো কেবল বেশি টিকিট রাখতে বিও অ্যাকাউন্ট খুলত, যা অ্যাকাউন্টের পরিসংখ্যান স্ফীত করত অথচ প্রকৃত অংশগ্রহণ যোগ করত না। সমানুপাতিক ব্যবস্থা সবাইকে চাহিদার একটি ভগ্নাংশ বরাদ্দ দেয়, ঐ প্রণোদনা সরিয়ে দেয়, আর সঙ্গের ন্যূনতম মাধ্যমিক-বাজার মালিকানার শর্ত মানে আবেদনকারীদের আগে থেকেই বাজারে অবস্থান থাকতে হবে। খুচরা আবেদনকারীর জন্য এটি আইপিও-কে প্রায় শূন্য অবনতি ঝুঁকির লটারি টিকিট থেকে একটি নিশ্চিত ছোট পজিশনে রূপান্তরিত করে — অর্থাৎ তালিকাভুক্তি মূল্যের পূর্বাভাস এখন গুরুত্বপূর্ণ, কারণ ফলাফলের মালিক আপনি নিশ্চিতভাবেই হবেন।',
      },
    },
    {
      q: {
        en: 'Why is persistent IPO underpricing a problem, given that investors benefit from it?',
        bn: 'বিনিয়োগকারীরা লাভবান হলেও ধারাবাহিক আইপিও অবমূল্যায়ন কেন একটি সমস্যা?',
      },
      a: {
        en: 'It transfers value from the issuing company to applicants — a company that could have raised BDT 90 crore raises BDT 30 crore and gives away the difference. That makes listing expensive for high-quality companies and is one reason large Bangladeshi private groups remain unlisted, which sustains the low market-cap-to-GDP ratio. It also destroys analytical discipline: if the offer price is not a claim about value, nobody reads the prospectus, and the price-discovery function the primary market exists to perform never develops.',
        bn: 'এটি ইস্যুকারী কোম্পানির কাছ থেকে আবেদনকারীদের কাছে মূল্য স্থানান্তর করে — যে কোম্পানি ৯০ কোটি টাকা তুলতে পারত সে ৩০ কোটি তোলে এবং পার্থক্যটি বিলিয়ে দেয়। এতে উঁচু মানের কোম্পানির জন্য তালিকাভুক্তি ব্যয়বহুল হয়, আর এটিই বাংলাদেশের বড় বেসরকারি গ্রুপগুলোর অতালিকাভুক্ত থাকার একটি কারণ, যা নিম্ন বাজার-মূলধন-থেকে-জিডিপি অনুপাত টিকিয়ে রাখে। এটি বিশ্লেষণী শৃঙ্খলাও ধ্বংস করে: অফার মূল্য যদি মূল্য সম্পর্কে কোনো দাবি না হয়, কেউ প্রসপেক্টাস পড়ে না, আর প্রাথমিক বাজার যে মূল্য-আবিষ্কারের কাজের জন্য আছে তা কখনো গড়েই ওঠে না।',
      },
    },
    {
      q: {
        en: 'A stock falls 18% on a day with no news and unchanged fundamentals. What would you check first?',
        bn: 'কোনো খবর ছাড়াই এবং মৌলভিত্তি অপরিবর্তিত থাকা সত্ত্বেও একটি শেয়ার একদিনে ১৮% পড়ল। আপনি প্রথমে কী দেখবেন?',
      },
      a: {
        en: 'The lock-in expiry calendar. If a block of pre-IPO placement or sponsor shares became sellable that day, the free float has just expanded — possibly doubled — and the fall is a supply event rather than an information event. This is public, scheduled information disclosed in the prospectus. I would also check the record date for any corporate action, since ex-dividend and ex-rights adjustments produce mechanical drops that are not losses at all.',
        bn: 'লক-ইন মেয়াদ শেষের ক্যালেন্ডার। ঐ দিন প্রি-আইপিও প্লেসমেন্ট বা উদ্যোক্তা শেয়ারের একটি ব্লক বিক্রয়যোগ্য হয়ে থাকলে ফ্রি ফ্লোট সবে বেড়েছে — সম্ভবত দ্বিগুণ হয়েছে — এবং পতনটি তথ্য-ঘটনা নয়, সরবরাহ-ঘটনা। এটি প্রকাশ্য, নির্ধারিত তথ্য যা প্রসপেক্টাসে প্রকাশিত। আমি কোনো কর্পোরেট অ্যাকশনের রেকর্ড তারিখও দেখব, কারণ এক্স-ডিভিডেন্ড ও এক্স-রাইটস সমন্বয় যান্ত্রিক পতন তৈরি করে যা আদৌ ক্ষতি নয়।',
      },
    },
  ],

  quiz: [
    {
      q: { en: 'In the primary market, subscription money goes to:', bn: 'প্রাথমিক বাজারে চাঁদার টাকা যায়:' },
      options: {
        en: ['The selling investor', 'The issuing company', 'The exchange', 'CDBL'],
        bn: ['বিক্রেতা বিনিয়োগকারীর কাছে', 'ইস্যুকারী কোম্পানির কাছে', 'এক্সচেঞ্জের কাছে', 'সিডিবিএল-এর কাছে'],
      },
      answer: 1,
    },
    {
      q: { en: 'Public issues in Bangladesh are governed principally by:', bn: 'বাংলাদেশে পাবলিক ইস্যু মূলত পরিচালিত হয়:' },
      options: {
        en: [
          'The Companies Act 1994',
          'The BSEC (Public Issue) Rules 2015',
          'The Demutualization Act 2013',
          'The Banking Companies Act',
        ],
        bn: [
          'কোম্পানি আইন ১৯৯৪',
          'বিএসইসি (পাবলিক ইস্যু) বিধিমালা ২০১৫',
          'ডিমিউচুয়ালাইজেশন আইন ২০১৩',
          'ব্যাংক কোম্পানি আইন',
        ],
      },
      answer: 1,
    },
    {
      q: { en: 'In book building, the cut-off price is set by:', bn: 'বুক বিল্ডিংয়ে কাট-অফ মূল্য নির্ধারণ করেন:' },
      options: {
        en: ['BSEC', 'Eligible Investor bidding', 'The issue manager alone', 'General investors'],
        bn: ['বিএসইসি', 'যোগ্য বিনিয়োগকারীর দরপত্র', 'কেবল ইস্যু ব্যবস্থাপক', 'সাধারণ বিনিয়োগকারীরা'],
      },
      answer: 1,
    },
    {
      q: { en: 'Since 2021, the general investor portion is allotted:', bn: '২০২১ সাল থেকে সাধারণ বিনিয়োগকারীর অংশ বরাদ্দ হয়:' },
      options: {
        en: ['By lottery', 'Pro-rata', 'First come first served', 'By auction'],
        bn: ['লটারিতে', 'সমানুপাতিকভাবে', 'আগে এলে আগে পাবেন ভিত্তিতে', 'নিলামে'],
      },
      answer: 1,
    },
    {
      q: {
        en: 'An IPO offering 3 crore shares receives applications for 90 crore shares. Oversubscription is:',
        bn: '৩ কোটি শেয়ারের একটি আইপিওতে ৯০ কোটি শেয়ারের আবেদন এলে অতিরিক্ত চাঁদা:',
      },
      options: { en: ['3×', '10×', '30×', '90×'], bn: ['৩×', '১০×', '৩০×', '৯০×'] },
      answer: 2,
    },
    {
      q: {
        en: 'A share offered at BDT 10 with EPS of BDT 0.35 is priced at a P/E of:',
        bn: '০.৩৫ টাকা ইপিএস-সহ ১০ টাকায় প্রদত্ত শেয়ারের P/E:',
      },
      options: { en: ['2.9×', '3.5×', '10×', '28.6×'], bn: ['২.৯×', '৩.৫×', '১০×', '২৮.৬×'] },
      answer: 3,
    },
    {
      q: { en: 'BSEC approval of an IPO means:', bn: 'কোনো আইপিও-তে বিএসইসি-র অনুমোদন মানে:' },
      options: {
        en: [
          'The company is fundamentally sound',
          'The offer price is fair',
          'Disclosure and process requirements were met',
          'Listing gains are guaranteed',
        ],
        bn: [
          'কোম্পানিটি মৌলভিত্তিতে সুদৃঢ়',
          'অফার মূল্য ন্যায্য',
          'তথ্য প্রকাশ ও প্রক্রিয়ার শর্ত পূরণ হয়েছে',
          'তালিকাভুক্তির লাভ নিশ্চিত',
        ],
      },
      answer: 2,
    },
    {
      q: { en: 'A lock-in expiry should be read as:', bn: 'লক-ইন মেয়াদ শেষকে পড়া উচিত:' },
      options: {
        en: [
          'A legal formality',
          'A scheduled increase in tradable supply',
          'A buy signal',
          'A dividend event',
        ],
        bn: [
          'একটি আইনি আনুষ্ঠানিকতা',
          'লেনদেনযোগ্য সরবরাহের একটি নির্ধারিত বৃদ্ধি',
          'একটি ক্রয় সংকেত',
          'একটি লভ্যাংশ ঘটনা',
        ],
      },
      answer: 1,
    },
    {
      q: {
        en: 'Under pro-rata allotment, the expected value of an application depends most critically on:',
        bn: 'সমানুপাতিক বরাদ্দে একটি আবেদনের প্রত্যাশিত মূল্য সবচেয়ে বেশি নির্ভর করে:',
      },
      options: {
        en: [
          'The number of BO accounts used',
          'The forecast listing price',
          'The face value',
          'The issue manager’s fee',
        ],
        bn: [
          'ব্যবহৃত বিও অ্যাকাউন্টের সংখ্যার ওপর',
          'পূর্বাভাসকৃত তালিকাভুক্তি মূল্যের ওপর',
          'অভিহিত মূল্যের ওপর',
          'ইস্যু ব্যবস্থাপকের ফি-র ওপর',
        ],
      },
      answer: 1,
    },
    {
      q: {
        en: 'Persistent IPO underpricing primarily transfers value from:',
        bn: 'ধারাবাহিক আইপিও অবমূল্যায়ন মূলত মূল্য স্থানান্তর করে:',
      },
      options: {
        en: [
          'Applicants to the company',
          'The company to applicants',
          'BSEC to brokers',
          'Foreign to local investors',
        ],
        bn: [
          'আবেদনকারীদের কাছ থেকে কোম্পানির কাছে',
          'কোম্পানির কাছ থেকে আবেদনকারীদের কাছে',
          'বিএসইসি থেকে ব্রোকারদের কাছে',
          'বিদেশি থেকে দেশি বিনিয়োগকারীর কাছে',
        ],
      },
      answer: 1,
    },
  ],
};
