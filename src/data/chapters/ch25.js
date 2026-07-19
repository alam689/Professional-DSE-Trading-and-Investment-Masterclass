/**
 * Chapter 25 — Building a Fundamental Scorecard
 * Part II, Fundamental Analysis. Closes the Part.
 */

export default {
  n: 25,
  tools: [],

  excelSheet: {
    filename: 'ch25-fundamental-scorecard.xlsx',
    sheetName: 'Scorecard',
    cells: [
      { cell: 'A1', v: 'STAGE 1 — HARD GATES (any 1 = REJECT, no score computed)' },
      { cell: 'A2', v: 'Adverse / disclaimer audit opinion (Ch 24)' }, { cell: 'B2', v: 0 },
      { cell: 'A3', v: 'Sponsor holding below 30% (Ch 24)' }, { cell: 'B3', v: 0 },
      { cell: 'A4', v: 'Accounts not filed / AGM not held (Ch 24)' }, { cell: 'B4', v: 0 },
      { cell: 'A5', v: 'ADTV below BDT 50 lakh (Ch 2)' }, { cell: 'B5', v: 0 },
      { cell: 'A6', v: 'Relative spread above 1% (Ch 2)' }, { cell: 'B6', v: 0 },
      { cell: 'A7', v: 'Z category (Ch 4)' }, { cell: 'B7', v: 0 },
      { cell: 'A8', v: 'GATES FAILED' }, { cell: 'B8', f: 'SUM(B2:B7)' },

      { cell: 'A10', v: 'STAGE 2 — QUALITY (weight 40)' },
      { cell: 'A11', v: 'Cash conversion NOCF/NP (Ch 12)' }, { cell: 'B11', v: 1.12 },
      { cell: 'A12', v: '  score 0-10' }, { cell: 'B12', f: 'MIN(10,MAX(0,B11*8))' },
      { cell: 'A13', v: 'Accruals ratio % (Ch 13), lower better' }, { cell: 'B13', v: 2.1 },
      { cell: 'A14', v: '  score 0-10' }, { cell: 'B14', f: 'MIN(10,MAX(0,10-B13))' },
      { cell: 'A15', v: 'Governance severity % (Ch 24), lower better' }, { cell: 'B15', v: 6 },
      { cell: 'A16', v: '  score 0-10' }, { cell: 'B16', f: 'MIN(10,MAX(0,10-B15/4))' },
      { cell: 'A17', v: 'Other income / net profit % (Ch 10), lower better' }, { cell: 'B17', v: 6 },
      { cell: 'A18', v: '  score 0-10' }, { cell: 'B18', f: 'MIN(10,MAX(0,10-B17/5))' },
      { cell: 'A19', v: 'QUALITY PILLAR (0-40)' }, { cell: 'B19', f: 'B12+B14+B16+B18' },

      { cell: 'A21', v: 'STAGE 3 — STRENGTH (weight 30)' },
      { cell: 'A22', v: 'ROE % (Ch 15)' }, { cell: 'B22', v: 19 },
      { cell: 'A23', v: '  score 0-10' }, { cell: 'B23', f: 'MIN(10,MAX(0,B22/2))' },
      { cell: 'A24', v: 'Interest coverage x (Ch 17)' }, { cell: 'B24', v: 6.4 },
      { cell: 'A25', v: '  score 0-10' }, { cell: 'B25', f: 'MIN(10,MAX(0,B24*1.5))' },
      { cell: 'A26', v: 'Current ratio, quality-adjusted (Ch 14)' }, { cell: 'B26', v: 1.8 },
      { cell: 'A27', v: '  score 0-10' }, { cell: 'B27', f: 'MIN(10,MAX(0,(B26-0.8)*6))' },
      { cell: 'A28', v: 'STRENGTH PILLAR (0-30)' }, { cell: 'B28', f: 'B23+B25+B27' },

      { cell: 'A30', v: 'STAGE 4 — VALUATION (weight 30) — SCORED LAST' },
      { cell: 'A31', v: 'P/E (Ch 18)' }, { cell: 'B31', v: 14.2 },
      { cell: 'A32', v: '  score 0-15' }, { cell: 'B32', f: 'MIN(15,MAX(0,(25-B31)*1.0))' },
      { cell: 'A33', v: 'EV/EBITDA (Ch 18)' }, { cell: 'B33', v: 8.5 },
      { cell: 'A34', v: '  score 0-15' }, { cell: 'B34', f: 'MIN(15,MAX(0,(16-B33)*1.5))' },
      { cell: 'A35', v: 'VALUATION PILLAR (0-30)' }, { cell: 'B35', f: 'B32+B34' },

      { cell: 'A37', v: 'TOTAL SCORE (0-100)' }, { cell: 'B37', f: 'B19+B28+B35' },
      { cell: 'A38', v: 'QUALITY FLOOR MET? (pillar >= 24)' }, { cell: 'B38', f: 'IF(B19>=24,1,0)' },

      { cell: 'A40', v: 'VERDICT' },
      {
        cell: 'B40',
        f: 'IF(B8>0,"REJECT - failed a hard gate",IF(B38=0,"REJECT - quality floor not met, valuation cannot compensate",IF(B37>=70,"BUY candidate",IF(B37>=55,"WATCH","PASS - insufficient score"))))',
      },
      { cell: 'A42', v: 'POSITION SIZE MULTIPLIER' },
      { cell: 'B42', f: 'IF(OR(B8>0,B38=0),0,MIN(1,MAX(0,(B37-55)/30)))' },
    ],
  },

  objectives: {
    en: [
      'Assemble the tests from Chapters 2 through 24 into a single ordered filter.',
      'Explain why gates must precede scores and why quality must precede valuation.',
      'Compute a four-stage scorecard and translate the result into a position size.',
      'Demonstrate that a scorecard permitting valuation to outvote quality will select the cheapest broken company.',
      'State honestly what a fundamental scorecard cannot do.',
    ],
    bn: [
      'অধ্যায় ২ থেকে ২৪ পর্যন্ত পরীক্ষাগুলোকে একটি একক ক্রমবদ্ধ ফিল্টারে সাজানো।',
      'কেন স্কোরের আগে গেট এবং মূল্যায়নের আগে গুণমান থাকতে হবে তা ব্যাখ্যা করা।',
      'চার-ধাপের একটি স্কোরকার্ড গণনা করা এবং ফলাফলকে পজিশনের আকারে রূপান্তরিত করা।',
      'দেখানো যে মূল্যায়নকে গুণমানের ওপর ভোটে জিততে দেওয়া স্কোরকার্ড সবচেয়ে সস্তা ভাঙা কোম্পানিটিই বাছবে।',
      'একটি ফান্ডামেন্টাল স্কোরকার্ড যা করতে পারে না তা সৎভাবে বলা।',
    ],
  },

  blocks: {
    theory: {
      en: `Sixteen chapters have each produced a test. This chapter arranges them.

**The arrangement is the entire contribution.** The individual tests are standard; what determines whether the system works is the order in which they run and which of them are permitted to overrule the others.

### Four stages, and they are not interchangeable

**Stage 1 — Hard gates.** Binary, and any single failure ends the analysis with no score computed.

| Gate | Source |
|---|---|
| Adverse or disclaimer audit opinion | Chapter 24 |
| Sponsor/director holding below 30% | Chapter 24 |
| Accounts not filed, or AGM not held | Chapter 24 |
| ADTV below BDT 50 lakh | Chapter 2 |
| Relative spread above 1% | Chapter 2 |
| Z category | Chapter 4 |

Note what these have in common. **None of them is about whether the business is good.** Three are about whether the reported numbers can be believed; three are about whether you could exit the position. Both are prior questions to valuation, and neither is improved by the share being cheap.

**Stage 2 — Quality (40 points).** Does the reported profit exist in cash, and is it the shareholders'? Cash conversion (Ch 12), accruals ratio (Ch 13), governance severity (Ch 24), other income as a share of profit (Ch 10).

**Stage 3 — Strength (30 points).** Can the business survive a bad year? ROE (Ch 15), interest coverage (Ch 17), quality-adjusted current ratio (Ch 14).

**Stage 4 — Valuation (30 points).** Only now: P/E and EV/EBITDA (Ch 18).

### Why valuation must come last, and must be capped

This is the load-bearing design decision, and it follows directly from Chapter 24.

A naive scorecard gives valuation equal standing with everything else and sums the lot. **The result is a machine for buying value traps**, because the companies that score highest on cheapness are disproportionately the ones with something wrong. Chapter 18 established that a low multiple is often the market pricing a problem you have not found yet; Chapter 24 showed a company at a P/E of 6.8 with 65.7% governance severity.

Two structural defences:

**1. Valuation is capped at 30 of 100.** A company cannot reach a buy score on cheapness alone. Perfect valuation with mediocre quality tops out below the threshold.

**2. A quality floor gates the total.** If the quality pillar scores below 24 of 40, the verdict is REJECT **regardless of the total**. This is the same architecture as Chapter 24's hard disqualifier: a finding that can be outvoted is not a constraint.

**Without the floor, a company scoring 12/40 on quality and 30/30 on valuation reaches 72 and registers as a BUY.** That company is cheap because its earnings are not real. The floor exists to make that outcome unreachable.

### What a scorecard is actually for

It is not an oracle, and treating it as one is the failure mode this chapter is trying to prevent.

**A scorecard does three things well:**
- It forces you through every test rather than the ones you remember.
- It makes your weights explicit, so a disagreement becomes about a number rather than a feeling.
- It creates a record, so in two years you can ask whether the framework or your override was wrong.

**It cannot do these:**
- It cannot value a business. Nothing in Part II tells you what a company is worth in a way that survives Chapter 21's sensitivity analysis.
- It cannot tell you *when* to buy. That is Part III, and Part I established that a correct company bought in the wrong market phase still loses 60%.
- It cannot see what has not been disclosed. Every input is a number an interested party published.
- It cannot replace reading the annual report. The scorecard is what you fill in *after* reading it; the numbers on their own will not tell you what the flags have in common (Chapter 24's sentence test).

**The honest summary: the scorecard is a discipline for not skipping steps, not a substitute for judgement.** A framework presented as more than that will be over-trusted precisely when it is wrong.`,
      bn: `ষোলোটি অধ্যায়ের প্রতিটি একটি করে পরীক্ষা তৈরি করেছে। এই অধ্যায় সেগুলো সাজায়।

**সাজানোটাই সম্পূর্ণ অবদান।** পৃথক পরীক্ষাগুলো প্রমিত; ব্যবস্থাটি কাজ করবে কি না তা নির্ধারণ করে সেগুলো কোন ক্রমে চলে এবং কোনটিকে অন্যগুলোকে অগ্রাহ্য করার অনুমতি দেওয়া হয়।

### চারটি ধাপ, এবং এগুলো বিনিময়যোগ্য নয়

**ধাপ ১ — কঠোর গেট।** দ্বিমুখী, আর যেকোনো একটি ব্যর্থতাই কোনো স্কোর গণনা ছাড়াই বিশ্লেষণ শেষ করে দেয়।

| গেট | উৎস |
|---|---|
| বিরূপ বা দাবিত্যাগ নিরীক্ষা মতামত | অধ্যায় ২৪ |
| উদ্যোক্তা/পরিচালক মালিকানা ৩০%-এর নিচে | অধ্যায় ২৪ |
| হিসাব দাখিল হয়নি, বা এজিএম হয়নি | অধ্যায় ২৪ |
| ADTV ৫০ লক্ষ টাকার নিচে | অধ্যায় ২ |
| আপেক্ষিক স্প্রেড ১%-এর ওপরে | অধ্যায় ২ |
| Z শ্রেণি | অধ্যায় ৪ |

এদের মিলটি লক্ষ করুন। **কোনোটিই ব্যবসাটি ভালো কি না তা নিয়ে নয়।** তিনটি প্রতিবেদিত সংখ্যা বিশ্বাস করা যায় কি না নিয়ে; তিনটি আপনি পজিশন থেকে বেরোতে পারবেন কি না নিয়ে। দুটিই মূল্যায়নের পূর্ববর্তী প্রশ্ন, আর শেয়ার সস্তা হলে কোনোটিই উন্নত হয় না।

**ধাপ ২ — গুণমান (৪০ পয়েন্ট)।** প্রতিবেদিত মুনাফা কি নগদে আছে, এবং তা কি শেয়ারহোল্ডারদের? Cash conversion (অধ্যায় ১২), accruals ratio (অধ্যায় ১৩), গভর্ন্যান্স তীব্রতা (অধ্যায় ২৪), মুনাফার অংশ হিসেবে অন্যান্য আয় (অধ্যায় ১০)।

**ধাপ ৩ — শক্তি (৩০ পয়েন্ট)।** ব্যবসাটি কি একটি খারাপ বছর টিকে থাকতে পারবে? ROE (অধ্যায় ১৫), সুদ কভারেজ (অধ্যায় ১৭), গুণমান-সমন্বিত চলতি অনুপাত (অধ্যায় ১৪)।

**ধাপ ৪ — মূল্যায়ন (৩০ পয়েন্ট)।** কেবল এখন: P/E ও EV/EBITDA (অধ্যায় ১৮)।

### কেন মূল্যায়ন সবার শেষে এবং কেন সীমাবদ্ধ

এটিই মূল নকশাগত সিদ্ধান্ত, এবং তা সরাসরি অধ্যায় ২৪ থেকে আসে।

একটি সরল স্কোরকার্ড মূল্যায়নকে বাকি সবার সমান মর্যাদা দেয় ও সব যোগ করে। **ফল হলো ভ্যালু ট্র্যাপ কেনার একটি যন্ত্র**, কারণ সস্তা হওয়ায় সর্বোচ্চ স্কোর করা কোম্পানিগুলোর মধ্যে অসামঞ্জস্যপূর্ণভাবে বেশি সেগুলো যাদের কিছু একটা গোলমাল আছে। অধ্যায় ১৮ প্রতিষ্ঠা করেছে কম গুণিতক প্রায়ই এমন সমস্যার দাম যা আপনি এখনো খুঁজে পাননি; অধ্যায় ২৪ দেখিয়েছে ৬৫.৭% গভর্ন্যান্স তীব্রতাসহ ৬.৮ P/E-র একটি কোম্পানি।

দুটি কাঠামোগত প্রতিরক্ষা:

**১. মূল্যায়ন ১০০-এর মধ্যে ৩০-এ সীমাবদ্ধ।** কোনো কোম্পানি কেবল সস্তা হয়ে ক্রয়-স্কোরে পৌঁছাতে পারে না। নিখুঁত মূল্যায়ন ও মাঝারি গুণমান সীমার নিচেই থেমে যায়।

**২. একটি গুণমান-মেঝে মোটকে নিয়ন্ত্রণ করে।** গুণমান স্তম্ভ ৪০-এর মধ্যে ২৪-এর নিচে স্কোর করলে **মোট যা-ই হোক** রায় প্রত্যাখ্যান। এটি অধ্যায় ২৪-এর কঠোর অযোগ্যতারই স্থাপত্য: যে ফলাফলকে ভোটে হারানো যায় তা কোনো সীমাবদ্ধতা নয়।

**মেঝে ছাড়া, গুণমানে ১২/৪০ ও মূল্যায়নে ৩০/৩০ পাওয়া কোম্পানি ৭২-এ পৌঁছে BUY হিসেবে ধরা পড়ে।** ঐ কোম্পানি সস্তা কারণ তার আয় প্রকৃত নয়। ঐ পরিণতি অসম্ভব করতেই মেঝেটি আছে।

### স্কোরকার্ড আসলে কীসের জন্য

এটি ভবিষ্যদ্বক্তা নয়, আর একে তাই ভাবাই সেই ব্যর্থতা যা এই অধ্যায় ঠেকাতে চাইছে।

**একটি স্কোরকার্ড তিনটি কাজ ভালো করে:**
- আপনার মনে থাকা পরীক্ষাগুলো নয়, প্রতিটি পরীক্ষার মধ্য দিয়ে আপনাকে নিয়ে যায়।
- আপনার ওজন স্পষ্ট করে, তাই মতভেদ অনুভূতি নয় একটি সংখ্যা নিয়ে হয়।
- একটি নথি তৈরি করে, যাতে দুই বছর পর জিজ্ঞেস করতে পারেন কাঠামোটি ভুল ছিল না আপনার লঙ্ঘন।

**এটি যা পারে না:**
- এটি একটি ব্যবসার মূল্যায়ন করতে পারে না। পর্ব ২-এর কিছুই এমনভাবে বলে না কোম্পানির দাম কত, যা অধ্যায় ২১-এর সংবেদনশীলতা বিশ্লেষণে টিকবে।
- এটি বলতে পারে না *কখন* কিনবেন। সেটি পর্ব ৩, আর পর্ব ১ প্রতিষ্ঠা করেছে যে ভুল বাজার পর্যায়ে কেনা সঠিক কোম্পানিও ৬০% হারায়।
- যা প্রকাশ করা হয়নি তা এটি দেখতে পারে না। প্রতিটি উপাদান একটি স্বার্থসংশ্লিষ্ট পক্ষের প্রকাশিত সংখ্যা।
- এটি বার্ষিক প্রতিবেদন পড়ার বিকল্প নয়। স্কোরকার্ড হলো যা আপনি পড়ার *পরে* পূরণ করেন; সংখ্যাগুলো একা বলবে না সংকেতগুলোতে কী মিল (অধ্যায় ২৪-এর বাক্য পরীক্ষা)।

**সৎ সারসংক্ষেপ: স্কোরকার্ড ধাপ না এড়ানোর একটি শৃঙ্খলা, বিচারবুদ্ধির বিকল্প নয়।** এর চেয়ে বেশি কিছু হিসেবে উপস্থাপিত কাঠামো ঠিক তখনই অতি-বিশ্বাস পাবে যখন তা ভুল।`,
    },

    simple: {
      en: `You now have about sixteen different tests. This chapter puts them in order.

**The order is the whole thing.** Anyone can list ratios. What decides whether the system works is which test is allowed to overrule which.

### Think of it as a job interview with stages

**Stage 1 — the door.** Six questions, all yes/no. Did the auditor refuse to sign? Are the owners below their legal minimum stake? Are the accounts late? Is it too thinly traded to sell? Is the spread punishing? Is it Z category?

**One "yes" and the candidate goes home.** No score. No discussion of how cheap it is.

**Stage 2 — is the profit real?** Does the money actually arrive in the bank? Are the owners taking it out through a side door?

**Stage 3 — can it survive a bad year?** Debt, interest cover, working capital.

**Stage 4 — and only now — is it cheap?**

### Why "is it cheap" is asked last, and quietly

Because if you ask it first, or give it equal weight, you build a machine that buys broken companies.

Think about *why* something is cheap. Sometimes the market is wrong. **Much more often, the market has noticed something you have not.** Chapter 24 showed a company at half the sector's P/E — and the reason for the discount was that a quarter of shareholders' money had been lent to the owner's other businesses.

So two rules protect you:

**Cheapness can earn at most 30 points out of 100.** No company gets bought for being cheap alone.

**If it fails on quality, it is rejected no matter what the total says.** A company scoring 12 out of 40 on quality and a perfect 30 on cheapness would total 72 — which looks like a buy. **The quality floor makes that impossible**, because that company is cheap precisely because the profits are not real.

### And here is what it will not do for you

It will not tell you what the company is worth — Chapter 21 showed a defensible DCF can swing from 22 to 53 taka a share.

It will not tell you when to buy. That is the next Part, and Part I already showed that buying an excellent company in the wrong month still cost 60%.

It cannot see anything the company chose not to disclose.

**It is a checklist that stops you skipping the boring steps.** That is genuinely valuable, and it is less than it sounds. Anyone who sells you a scoring system as more than that is selling you confidence, not analysis.`,
      bn: `আপনার এখন প্রায় ষোলোটি ভিন্ন পরীক্ষা আছে। এই অধ্যায় সেগুলো ক্রমে সাজায়।

**ক্রমটাই সবকিছু।** অনুপাতের তালিকা যে কেউ করতে পারে। ব্যবস্থাটি কাজ করবে কি না তা ঠিক করে কোন পরীক্ষা কোনটিকে অগ্রাহ্য করতে পারে।

### একে ধাপে ধাপে চাকরির সাক্ষাৎকার ভাবুন

**ধাপ ১ — দরজা।** ছয়টি প্রশ্ন, সবই হ্যাঁ/না। নিরীক্ষক কি স্বাক্ষর করতে অস্বীকার করেছেন? মালিকরা কি আইনি ন্যূনতম মালিকানার নিচে? হিসাব কি দেরিতে? বিক্রি করা যায় না এমন পাতলা লেনদেন? স্প্রেড কি শাস্তিমূলক? এটি কি Z শ্রেণি?

**একটি "হ্যাঁ" আর প্রার্থী বাড়ি চলে যান।** কোনো স্কোর নেই। এটি কত সস্তা তা নিয়ে কোনো আলোচনা নেই।

**ধাপ ২ — মুনাফা কি প্রকৃত?** টাকা কি সত্যিই ব্যাংকে আসে? মালিকরা কি পাশের দরজা দিয়ে তা বের করে নিচ্ছেন?

**ধাপ ৩ — একটি খারাপ বছর কি টিকবে?** ঋণ, সুদ কভারেজ, চলতি মূলধন।

**ধাপ ৪ — এবং কেবল এখন — এটি কি সস্তা?**

### কেন "এটি কি সস্তা" সবার শেষে ও নিচু স্বরে জিজ্ঞেস করা হয়

কারণ আপনি যদি এটি প্রথমে জিজ্ঞেস করেন, বা সমান ওজন দেন, তবে আপনি ভাঙা কোম্পানি কেনার একটি যন্ত্র বানাবেন।

ভাবুন কেন কিছু সস্তা। কখনো বাজার ভুল করে। **অনেক বেশি বার, বাজার এমন কিছু খেয়াল করেছে যা আপনি করেননি।** অধ্যায় ২৪ খাতের অর্ধেক P/E-তে একটি কোম্পানি দেখিয়েছে — আর ছাড়ের কারণ ছিল শেয়ারহোল্ডারদের টাকার এক-চতুর্থাংশ মালিকের অন্য ব্যবসায় ধার দেওয়া।

তাই দুটি নিয়ম আপনাকে রক্ষা করে:

**সস্তা হওয়া ১০০-এর মধ্যে সর্বোচ্চ ৩০ পয়েন্ট পেতে পারে।** কেবল সস্তা হয়ে কোনো কোম্পানি কেনা হয় না।

**গুণমানে ব্যর্থ হলে মোট যা-ই বলুক তা প্রত্যাখ্যাত।** গুণমানে ৪০-এর মধ্যে ১২ আর সস্তায় নিখুঁত ৩০ পাওয়া কোম্পানির মোট হতো ৭২ — যা দেখতে ক্রয়যোগ্য। **গুণমান-মেঝে তা অসম্ভব করে**, কারণ ঐ কোম্পানি ঠিক এ কারণেই সস্তা যে মুনাফা প্রকৃত নয়।

### আর এটি আপনার জন্য যা করবে না

এটি বলবে না কোম্পানির দাম কত — অধ্যায় ২১ দেখিয়েছে একটি সমর্থনযোগ্য DCF শেয়ারপ্রতি ২২ থেকে ৫৩ টাকায় দুলতে পারে।

এটি বলবে না কখন কিনবেন। সেটি পরবর্তী পর্ব, আর পর্ব ১ আগেই দেখিয়েছে ভুল মাসে কেনা চমৎকার কোম্পানিও ৬০% খরচ করিয়েছে।

কোম্পানি যা প্রকাশ না করার সিদ্ধান্ত নিয়েছে তা এটি দেখতে পারে না।

**এটি একটি চেকলিস্ট যা আপনাকে নীরস ধাপগুলো এড়াতে দেয় না।** সেটি সত্যিই মূল্যবান, এবং শুনতে যতটা মনে হয় তার চেয়ে কম। যে কেউ আপনাকে একটি স্কোরিং ব্যবস্থা এর চেয়ে বেশি কিছু হিসেবে বেচছেন, তিনি আপনাকে বিশ্লেষণ নয়, আত্মবিশ্বাস বেচছেন।`,
    },

    example: {
      en: `### Four companies through the same filter

All four pass a naive P/E screen. Only one survives.

| | **Alpha Pharma** | **Beta Textile** | **Gamma Bank** | **Delta Foods** |
|---|---|---|---|---|
| **Stage 1 — Gates** | | | | |
| Audit opinion | Unqualified | Unqualified | Unqualified | **Disclaimer** |
| Sponsor holding | 52% | 35% | 41% | 44% |
| Accounts filed | On time | 41 days late | On time | On time |
| ADTV (BDT lakh) | 210 | 62 | 340 | **28** |
| Relative spread | 0.4% | 0.9% | 0.3% | **2.6%** |
| Category | A | B | A | **Z** |
| **Gates failed** | **0** | **1** | **0** | **4** |
| **Stage 2 — Quality (40)** | | | | |
| Cash conversion | 1.12 | 0.31 | 0.94 | — |
| Accruals ratio % | 2.1 | 6.7 | 3.0 | — |
| Governance severity % | 6 | 66 | 18 | — |
| Other income / NP % | 6 | 34 | 11 | — |
| **Quality pillar** | **34.16** | **8.98** | **27.82** | — |
| **Stage 3 — Strength (30)** | | | | |
| ROE % | 19 | 14 | 13 | — |
| Interest coverage | 6.4 | 1.6 | 6.0 | — |
| Current ratio (adj.) | 1.8 | 1.1 | 1.5 | — |
| **Strength pillar** | **25.10** | **11.20** | **19.70** | — |
| **Stage 4 — Valuation (30)** | | | | |
| P/E | 14.2 | **6.8** | **7.9** | 5.1 |
| EV/EBITDA | 8.5 | 5.2 | not meaningful | — |
| **Valuation pillar** | **22.05** | **30.00** | **22.50** | — |
| | | | | |
| **TOTAL** | **81.31** | **50.18** | **70.02** | — |
| Quality floor (≥24)? | ✅ | ❌ | ✅ | — |
| **VERDICT** | **BUY** | **REJECT** | **BUY** | **REJECT** |

### Read the two rejections, because they fail differently

**Delta Foods never gets scored.** Four gates failed — a disclaimer of opinion, Z category, ADTV of BDT 28 lakh, and a 2.6% spread. It is also the cheapest name in the table at a P/E of 5.1. **A screener sorted by P/E ascending puts Delta first.** The gates exist so that this company never enters the comparison at all, and no amount of cheapness reopens the question.

**Beta Textile is the more instructive case.** It fails only *one* gate — accounts 41 days late — but look at what happens if we suspend that gate and score it anyway.

Beta earns a **perfect 30.0 on valuation**, the highest valuation score in the table. Its total reaches **54.8**. Under a naive equal-weighted scorecard with no quality floor, that would sit comfortably above a reject line and Beta would read as a WATCH or better.

**The quality floor stops it.** Beta scores **11.5 of 40** on quality: cash conversion of 0.31, governance severity of 66%, and a third of its profit coming from other income. It is rejected on that basis alone, irrespective of the total.

**Beta is cheap because its earnings are not real. The scorecard is built so that the cheapness cannot rescue it.**

### And the case that should make you uncomfortable

**Gamma Bank scores 70.02 — a BUY candidate by 0.02 of a point.**

Look at that number honestly. The threshold is 70. Gamma clears it by two hundredths, on a model whose weights I chose and whose component formulas are linear approximations. **A framework that reports "BUY" at 70.02 and "WATCH" at 69.98 is expressing a precision it does not have.**

Note also where Gamma's valuation score comes from. Chapter 23 established EV/EBITDA is not meaningful for a bank, so the model awards the 7.5 midpoint rather than zero — penalising a sector for an inapplicable metric would be worse. But that is a **judgement I made, not a measurement**, and it contributes a third of Gamma's valuation pillar. Change it to zero and Gamma drops to 62.52 and becomes a WATCH.

**Two disciplines follow, and they matter more than the verdict.**

First, **treat scores within a few points of a threshold as landing in the band below.** Gamma is a WATCH in practice. If you need the model to be right to two decimal places, you are relying on it far beyond what its construction supports.

Second, **state which inputs are judgements rather than measurements.** Gamma's 70.02 rests on an assumption about how to score an inapplicable ratio. Alpha's 81.31 does not. Those two scores are not equally trustworthy even though they come from the same sheet, and the sheet does not say so — you have to.

### What the position sizes come to

$$\\text{Multiplier} = \\max\\left(0, \\min\\left(1, \\frac{\\text{Score} - 55}{30}\\right)\\right)$$

| Company | Score | Multiplier | On a BDT 10 lakh base |
|---|---|---|---|
| Alpha Pharma | 81.6 | 0.89 | BDT 8,86,000 |
| Gamma Bank | 64.2 | 0.31 | BDT 3,07,000 |
| Beta Textile | 54.8 | **0.00** | **Nil** |
| Delta Foods | — | **0.00** | **Nil** |

The multiplier is continuous rather than binary, so a 64 and an 81 produce genuinely different exposures rather than both being "yes." **Position size is where the analysis becomes a decision**, and it is the reason the score needs to be a number rather than a verdict.`,
      bn: `### একই ফিল্টারে চারটি কোম্পানি

চারটিই একটি সরল P/E স্ক্রিন পার করে। কেবল একটি টেকে।

| | **আলফা ফার্মা** | **বিটা টেক্সটাইল** | **গামা ব্যাংক** | **ডেল্টা ফুডস** |
|---|---|---|---|---|
| **ধাপ ১ — গেট** | | | | |
| নিরীক্ষা মতামত | অযোগ্যতাবিহীন | অযোগ্যতাবিহীন | অযোগ্যতাবিহীন | **দাবিত্যাগ** |
| উদ্যোক্তা মালিকানা | ৫২% | ৩৫% | ৪১% | ৪৪% |
| হিসাব দাখিল | সময়মতো | ৪১ দিন দেরিতে | সময়মতো | সময়মতো |
| ADTV (লক্ষ টাকা) | ২১০ | ৬২ | ৩৪০ | **২৮** |
| আপেক্ষিক স্প্রেড | ০.৪% | ০.৯% | ০.৩% | **২.৬%** |
| শ্রেণি | A | B | A | **Z** |
| **ব্যর্থ গেট** | **০** | **১** | **০** | **৪** |
| **ধাপ ২ — গুণমান (৪০)** | | | | |
| Cash conversion | ১.১২ | ০.৩১ | ০.৯৪ | — |
| Accruals ratio % | ২.১ | ৬.৭ | ৩.০ | — |
| গভর্ন্যান্স তীব্রতা % | ৬ | ৬৬ | ১৮ | — |
| অন্যান্য আয় / নিট মুনাফা % | ৬ | ৩৪ | ১১ | — |
| **গুণমান স্তম্ভ** | **৩৪.১৬** | **৮.৯৮** | **২৭.৮২** | — |
| **ধাপ ৩ — শক্তি (৩০)** | | | | |
| ROE % | ১৯ | ১৪ | ১৩ | — |
| সুদ কভারেজ | ৬.৪ | ১.৬ | ৬.০ | — |
| চলতি অনুপাত (সমন্বিত) | ১.৮ | ১.১ | ১.৫ | — |
| **শক্তি স্তম্ভ** | **২৫.১০** | **১১.২০** | **১৯.৭০** | — |
| **ধাপ ৪ — মূল্যায়ন (৩০)** | | | | |
| P/E | ১৪.২ | **৬.৮** | **৭.৯** | ৫.১ |
| EV/EBITDA | ৮.৫ | ৫.২ | অর্থবহ নয় | — |
| **মূল্যায়ন স্তম্ভ** | **২২.০৫** | **৩০.০০** | **২২.৫০** | — |
| | | | | |
| **মোট** | **৮১.৩১** | **৫০.১৮** | **৭০.০২** | — |
| গুণমান-মেঝে (≥২৪)? | ✅ | ❌ | ✅ | — |
| **রায়** | **ক্রয়** | **প্রত্যাখ্যান** | **ক্রয়** | **প্রত্যাখ্যান** |

### দুটি প্রত্যাখ্যান পড়ুন, কারণ এরা ভিন্নভাবে ব্যর্থ হয়

**ডেল্টা ফুডস কখনো স্কোরই পায় না।** চারটি গেট ব্যর্থ — মতামতের দাবিত্যাগ, Z শ্রেণি, ২৮ লক্ষ টাকা ADTV, ও ২.৬% স্প্রেড। এটিই আবার টেবিলের সবচেয়ে সস্তা নাম, ৫.১ P/E-তে। **P/E আরোহী ক্রমে সাজানো স্ক্রিনার ডেল্টাকে প্রথমে রাখে।** গেটগুলো আছে যাতে এই কোম্পানি আদৌ তুলনায় না ঢোকে, আর কোনো পরিমাণ সস্তা হওয়া প্রশ্নটি পুনরায় খোলে না।

**বিটা টেক্সটাইল বেশি শিক্ষণীয় ক্ষেত্র।** এটি কেবল *একটি* গেটে ব্যর্থ — হিসাব ৪১ দিন দেরিতে — কিন্তু ঐ গেট স্থগিত রেখে স্কোর করলে কী হয় দেখুন।

বিটা মূল্যায়নে **নিখুঁত ৩০.০** পায়, টেবিলের সর্বোচ্চ মূল্যায়ন স্কোর। এর মোট দাঁড়ায় **৫৪.৮**। গুণমান-মেঝেবিহীন সরল সমান-ভারিত স্কোরকার্ডে তা প্রত্যাখ্যান রেখার স্বচ্ছন্দে ওপরে বসত এবং বিটা নজরদারি বা তার ভালো কিছু হিসেবে পড়ত।

**গুণমান-মেঝে তা থামায়।** বিটা গুণমানে পায় **৪০-এর মধ্যে ১১.৫**: ০.৩১ cash conversion, ৬৬% গভর্ন্যান্স তীব্রতা, ও মুনাফার এক-তৃতীয়াংশ অন্যান্য আয় থেকে। কেবল সেই ভিত্তিতেই এটি প্রত্যাখ্যাত, মোট নির্বিশেষে।

**বিটা সস্তা কারণ তার আয় প্রকৃত নয়। স্কোরকার্ড এমনভাবে তৈরি যাতে সস্তা হওয়া একে বাঁচাতে না পারে।**

### আর যে ক্ষেত্রটি আপনাকে অস্বস্তিতে ফেলা উচিত

**গামা ব্যাংক পায় ৭০.০২ — ০.০২ পয়েন্টে ক্রয় প্রার্থী।**

সংখ্যাটি সৎভাবে দেখুন। সীমা ৭০। গামা তা পার করে দুই শতাংশাংশে, এমন একটি মডেলে যার ওজন আমি বেছেছি ও যার উপাদান সূত্রগুলো রৈখিক আসন্নীকরণ। **যে কাঠামো ৭০.০২-এ "ক্রয়" ও ৬৯.৯৮-এ "নজরদারি" জানায় সেটি এমন নির্ভুলতা প্রকাশ করছে যা তার নেই।**

গামার মূল্যায়ন স্কোর কোথা থেকে আসে তাও লক্ষ করুন। অধ্যায় ২৩ প্রতিষ্ঠা করেছে ব্যাংকের জন্য EV/EBITDA অর্থবহ নয়, তাই মডেল শূন্য না দিয়ে ৭.৫ মধ্যবিন্দু দেয় — অপ্রযোজ্য পরিমাপের জন্য একটি খাতকে শাস্তি দেওয়া আরও খারাপ হতো। কিন্তু সেটি **আমার করা একটি বিচার, কোনো পরিমাপ নয়**, আর তা গামার মূল্যায়ন স্তম্ভের এক-তৃতীয়াংশ অবদান রাখে। একে শূন্য করলে গামা ৬২.৫২-এ নেমে নজরদারি হয়ে যায়।

**দুটি শৃঙ্খলা এ থেকে আসে, আর সেগুলো রায়ের চেয়ে বেশি গুরুত্বপূর্ণ।**

প্রথমত, **সীমার কয়েক পয়েন্টের মধ্যে থাকা স্কোরকে নিচের পরিসরে পড়া হিসেবে গণ্য করুন।** বাস্তবে গামা একটি নজরদারি। মডেলটিকে দুই দশমিক স্থান পর্যন্ত সঠিক হতে হলে আপনি এর গঠন যতটা সমর্থন করে তার অনেক বাইরে নির্ভর করছেন।

দ্বিতীয়ত, **কোন উপাদানগুলো পরিমাপ নয় বিচার তা বলুন।** গামার ৭০.০২ দাঁড়িয়ে আছে একটি অপ্রযোজ্য অনুপাত কীভাবে স্কোর করা হবে সেই অনুমানের ওপর। আলফার ৮১.৩১ নয়। একই শিট থেকে আসা সত্ত্বেও ঐ দুটি স্কোর সমানভাবে বিশ্বাসযোগ্য নয়, আর শিটটি তা বলে না — আপনাকে বলতে হয়।

### পজিশনের আকার কত দাঁড়ায়

$$\\text{গুণক} = \\max\\left(0, \\min\\left(1, \\frac{\\text{স্কোর} - 55}{30}\\right)\\right)$$

| কোম্পানি | স্কোর | গুণক | ১০ লক্ষ টাকার ভিত্তিতে |
|---|---|---|---|
| আলফা ফার্মা | ৮১.৬ | ০.৮৯ | ৮,৮৬,০০০ টাকা |
| গামা ব্যাংক | ৬৪.২ | ০.৩১ | ৩,০৭,০০০ টাকা |
| বিটা টেক্সটাইল | ৫৪.৮ | **০.০০** | **শূন্য** |
| ডেল্টা ফুডস | — | **০.০০** | **শূন্য** |

গুণকটি দ্বিমুখী নয় ধারাবাহিক, তাই ৬৪ ও ৮১ দুটোই "হ্যাঁ" না হয়ে সত্যিই ভিন্ন এক্সপোজার তৈরি করে। **পজিশনের আকারেই বিশ্লেষণ সিদ্ধান্তে পরিণত হয়**, আর এ কারণেই স্কোরটিকে রায় নয়, একটি সংখ্যা হতে হয়।`,
    },

    formula: {
      en: `**Stage 1 — Gate test.** With gates $g_1 \\ldots g_6 \\in \\{0,1\\}$ where 1 means failed:

$$G = \\sum_{i=1}^{6} g_i, \\qquad G > 0 \\Rightarrow \\textbf{REJECT}$$

No score is computed when $G > 0$. This is a return, not a penalty.

**Stage 2 — Quality pillar**, four components each scored 0–10:

$$Q = q_{cash} + q_{accrual} + q_{gov} + q_{other}, \\qquad Q \\in [0, 40]$$

with component scoring, each clamped to $[0,10]$:

$$q_{cash} = 8 \\cdot \\frac{NOCF}{NP}, \\qquad q_{accrual} = 10 - AR, \\qquad q_{gov} = 10 - \\frac{S_{gov}}{4}, \\qquad q_{other} = 10 - \\frac{OI}{5}$$

**Stage 3 — Strength pillar**, three components each 0–10:

$$St = s_{roe} + s_{cover} + s_{liq}, \\qquad St \\in [0, 30]$$

$$s_{roe} = \\frac{ROE}{2}, \\qquad s_{cover} = 1.5 \\cdot IC, \\qquad s_{liq} = 6(CR - 0.8)$$

**Stage 4 — Valuation pillar**, capped at 30 so cheapness cannot dominate:

$$V = v_{pe} + v_{ev}, \\qquad v_{pe} = \\min(15, 25 - P/E), \\qquad v_{ev} = \\min(15, 1.5(16 - EV/EBITDA))$$

**Total:**
$$T = Q + St + V, \\qquad T \\in [0, 100]$$

**Verdict**, evaluated strictly in order — the first matching row returns:

| Condition | Verdict |
|---|---|
| $G > 0$ | **REJECT** — failed a gate |
| Else $Q < 24$ | **REJECT** — quality floor |
| Else $T \\geq 70$ | **BUY** candidate |
| Else $T \\geq 55$ | **WATCH** |
| Otherwise | **PASS** |

**Position size multiplier:**

$$m = \\begin{cases} 0 & \\text{if } G > 0 \\text{ or } Q < 24 \\end{cases}$$

otherwise

$$m = \\max\\left(0, \\min\\left(1, \\frac{T - 55}{30}\\right)\\right)$$

**Why the quality floor is a separate test rather than a weight.** If quality were merely weighted heavily, a sufficiently extreme valuation score could still compensate. Expressed as a floor it cannot:

$$Q < 24 \\Rightarrow \\textbf{REJECT} \\quad \\text{for all } V$$

That universal quantifier is the entire protection, and it is the same architecture as Chapter 24's hard disqualifier.`,
      bn: `**ধাপ ১ — গেট পরীক্ষা।** গেট $g_1 \\ldots g_6 \\in \\{0,1\\}$ যেখানে ১ মানে ব্যর্থ:

$$G = \\sum_{i=1}^{6} g_i, \\qquad G > 0 \\Rightarrow \\textbf{প্রত্যাখ্যান}$$

$G > 0$ হলে কোনো স্কোর গণনা হয় না। এটি শাস্তি নয়, একটি প্রত্যাবর্তন।

**ধাপ ২ — গুণমান স্তম্ভ**, চারটি উপাদান, প্রতিটি ০–১০:

$$Q = q_{cash} + q_{accrual} + q_{gov} + q_{other}, \\qquad Q \\in [0, 40]$$

উপাদান স্কোরিং, প্রতিটি $[0,10]$-এ সীমাবদ্ধ:

$$q_{cash} = 8 \\cdot \\frac{NOCF}{NP}, \\qquad q_{accrual} = 10 - AR, \\qquad q_{gov} = 10 - \\frac{S_{gov}}{4}, \\qquad q_{other} = 10 - \\frac{OI}{5}$$

**ধাপ ৩ — শক্তি স্তম্ভ**, তিনটি উপাদান, প্রতিটি ০–১০:

$$St = s_{roe} + s_{cover} + s_{liq}, \\qquad St \\in [0, 30]$$

$$s_{roe} = \\frac{ROE}{2}, \\qquad s_{cover} = 1.5 \\cdot IC, \\qquad s_{liq} = 6(CR - 0.8)$$

**ধাপ ৪ — মূল্যায়ন স্তম্ভ**, ৩০-এ সীমাবদ্ধ যাতে সস্তা হওয়া প্রাধান্য না পায়:

$$V = v_{pe} + v_{ev}, \\qquad v_{pe} = \\min(15, 25 - P/E), \\qquad v_{ev} = \\min(15, 1.5(16 - EV/EBITDA))$$

**মোট:**
$$T = Q + St + V, \\qquad T \\in [0, 100]$$

**রায়**, কঠোরভাবে ক্রমানুসারে মূল্যায়িত — প্রথম মিলে যাওয়া সারিটি ফেরত দেয়:

| শর্ত | রায় |
|---|---|
| $G > 0$ | **প্রত্যাখ্যান** — গেট ব্যর্থ |
| নয়তো $Q < 24$ | **প্রত্যাখ্যান** — গুণমান-মেঝে |
| নয়তো $T \\geq 70$ | **ক্রয়** প্রার্থী |
| নয়তো $T \\geq 55$ | **নজরদারি** |
| অন্যথায় | **বাদ** |

**পজিশন আকার গুণক:** $G > 0$ বা $Q < 24$ হলে $m = 0$; অন্যথায়

$$m = \\max\\left(0, \\min\\left(1, \\frac{T - 55}{30}\\right)\\right)$$

**গুণমান-মেঝে কেন ওজন নয়, একটি পৃথক পরীক্ষা।** গুণমান কেবল ভারীভাবে ওজনায়িত হলে যথেষ্ট চরম একটি মূল্যায়ন স্কোর তবুও তা পুষিয়ে দিতে পারত। মেঝে হিসেবে প্রকাশ করলে পারে না:

$$Q < 24 \\Rightarrow \\textbf{প্রত্যাখ্যান} \\quad \\text{সব } V \\text{-এর জন্য}$$

ঐ সর্বজনীন পরিমাণকই সম্পূর্ণ সুরক্ষা, এবং এটি অধ্যায় ২৪-এর কঠোর অযোগ্যতারই স্থাপত্য।`,
    },

    manual: {
      en: `**Scenario.** Score Alpha Pharma and Beta Textile from §25.3, and confirm the framework separates them for the right reason.

---

**ALPHA PHARMA**

**Step 1 — Gates.** Unqualified opinion, sponsor 52%, filed on time, ADTV BDT 210 lakh, spread 0.4%, category A.
$$G = 0 + 0 + 0 + 0 + 0 + 0 = 0 \\;\\Rightarrow\\; \\text{proceed}$$

**Step 2 — Quality components.**
$$q_{cash} = 8 \\times 1.12 = 8.96$$
$$q_{accrual} = 10 - 2.1 = 7.90$$
$$q_{gov} = 10 - \\tfrac{6}{4} = 8.50$$
$$q_{other} = 10 - \\tfrac{6}{5} = 8.80$$
$$Q = 8.96 + 7.90 + 8.50 + 8.80 = 34.16$$

**Step 3 — Quality floor:** $34.16 \\geq 24$ ✓

**Step 4 — Strength.**
$$s_{roe} = \\tfrac{19}{2} = 9.50, \\qquad s_{cover} = 1.5 \\times 6.4 = 9.60, \\qquad s_{liq} = 6(1.8 - 0.8) = 6.00$$
$$St = 9.50 + 9.60 + 6.00 = 25.10$$

**Step 5 — Valuation.**
$$v_{pe} = \\min(15, 25 - 14.2) = 10.80, \\qquad v_{ev} = \\min(15, 1.5(16 - 8.5)) = 11.25$$
$$V = 10.80 + 11.25 = 22.05$$

**Step 6 — Total:**
$$T = 34.16 + 25.10 + 22.05 = 81.31$$

**Step 7 — Verdict:** $G = 0$, $Q \\geq 24$, $T \\geq 70$ → **BUY candidate.**

**Step 8 — Size:**
$$m = \\min\\left(1, \\tfrac{81.31 - 55}{30}\\right) = \\min(1, 0.877) = 0.877$$

On a BDT 10,00,000 base position: **BDT 8,77,000.**

---

**BETA TEXTILE**

**Step 9 — Gates.** Accounts filed 41 days late.
$$G = 1 \\;\\Rightarrow\\; \\textbf{REJECT}$$

The analysis ends here. But to demonstrate why the quality floor is necessary independently of the gate, suspend it and score anyway.

**Step 10 — Quality if scored.**
$$q_{cash} = 8 \\times 0.31 = 2.48$$
$$q_{accrual} = 10 - 6.7 = 3.30$$
$$q_{gov} = 10 - \\tfrac{66}{4} = -6.50 \\rightarrow \\text{clamped to } 0$$
$$q_{other} = 10 - \\tfrac{34}{5} = 3.20$$
$$Q = 2.48 + 3.30 + 0 + 3.20 = 8.98$$

**Step 11 — Strength.**
$$s_{roe} = 7.00, \\qquad s_{cover} = 1.5 \\times 1.6 = 2.40, \\qquad s_{liq} = 6(1.1 - 0.8) = 1.80$$
$$St = 11.20$$

**Step 12 — Valuation — and note what happens.**
$$v_{pe} = \\min(15, 25 - 6.8) = \\min(15, 18.2) = 15.00 \\;\\text{(capped)}$$
$$v_{ev} = \\min(15, 1.5(16 - 5.2)) = \\min(15, 16.2) = 15.00 \\;\\text{(capped)}$$
$$V = 30.00 \\;\\text{— a perfect valuation score}$$

**Step 13 — Total:**
$$T = 8.98 + 11.20 + 30.00 = 50.18$$

**Step 14 — Verdict:** $Q = 8.98 < 24$ → **REJECT on the quality floor**, independently of the gate failure and irrespective of a perfect valuation score.

---

**Interpretation.**

Beta achieves the **maximum possible valuation score in the model** and still cannot reach WATCH. That is the design working.

Note precisely how the caps do their job. Beta's raw valuation arithmetic would have produced $18.2 + 16.2 = 34.4$ — above the pillar maximum. **Uncapped, Beta would total 54.6 and sit within two points of Gamma Bank**, a company that clears every gate and meets the quality floor. The caps prevent an extreme on one dimension from buying position in the ranking.

And the floor does the rest. Even at a perfect 30, Beta's quality of 8.98 rejects it. **There is no valuation at which Beta becomes investable**, which is the correct answer for a company converting 31 paisa of each taka of profit into cash while its sponsors sell.

**The discipline this encodes:** cheapness is a reason to look, never a reason to buy. The scorecard is arranged so that it cannot express the latter.`,
      bn: `**পরিস্থিতি।** §২৫.৩-এর আলফা ফার্মা ও বিটা টেক্সটাইল স্কোর করুন, এবং নিশ্চিত করুন কাঠামোটি সঠিক কারণে এদের আলাদা করে।

---

**আলফা ফার্মা**

**ধাপ ১ — গেট।** অযোগ্যতাবিহীন মতামত, উদ্যোক্তা ৫২%, সময়মতো দাখিল, ADTV ২১০ লক্ষ টাকা, স্প্রেড ০.৪%, শ্রেণি A।
$$G = 0 \\;\\Rightarrow\\; \\text{এগোন}$$

**ধাপ ২ — গুণমান উপাদান।**
$$q_{cash} = 8 \\times 1.12 = 8.96$$
$$q_{accrual} = 10 - 2.1 = 7.90$$
$$q_{gov} = 10 - \\tfrac{6}{4} = 8.50$$
$$q_{other} = 10 - \\tfrac{6}{5} = 8.80$$
$$Q = 34.16$$

**ধাপ ৩ — গুণমান-মেঝে:** $34.16 \\geq 24$ ✓

**ধাপ ৪ — শক্তি।**
$$s_{roe} = 9.50, \\qquad s_{cover} = 9.60, \\qquad s_{liq} = 6.00 \\;\\Rightarrow\\; St = 25.10$$

**ধাপ ৫ — মূল্যায়ন।**
$$v_{pe} = \\min(15, 25 - 14.2) = 10.80, \\qquad v_{ev} = \\min(15, 1.5(16 - 8.5)) = 11.25$$
$$V = 22.05$$

**ধাপ ৬ — মোট:**
$$T = 34.16 + 25.10 + 22.05 = 81.31$$

**ধাপ ৭ — রায়:** $G = 0$, $Q \\geq 24$, $T \\geq 70$ → **ক্রয় প্রার্থী।**

**ধাপ ৮ — আকার:**
$$m = \\min\\left(1, \\tfrac{81.31 - 55}{30}\\right) = 0.877$$

১০,০০,০০০ টাকার ভিত্তি পজিশনে: **৮,৭৭,০০০ টাকা।**

---

**বিটা টেক্সটাইল**

**ধাপ ৯ — গেট।** হিসাব ৪১ দিন দেরিতে দাখিল।
$$G = 1 \\;\\Rightarrow\\; \\textbf{প্রত্যাখ্যান}$$

বিশ্লেষণ এখানেই শেষ। কিন্তু গেট থেকে স্বাধীনভাবে গুণমান-মেঝে কেন প্রয়োজন তা দেখাতে, সেটি স্থগিত রেখে স্কোর করুন।

**ধাপ ১০ — স্কোর করলে গুণমান।**
$$q_{cash} = 8 \\times 0.31 = 2.48$$
$$q_{accrual} = 10 - 6.7 = 3.30$$
$$q_{gov} = 10 - \\tfrac{66}{4} = -6.50 \\rightarrow 0 \\text{-এ সীমাবদ্ধ}$$
$$q_{other} = 10 - \\tfrac{34}{5} = 3.20$$
$$Q = 8.98$$

**ধাপ ১১ — শক্তি।**
$$s_{roe} = 7.00, \\qquad s_{cover} = 2.40, \\qquad s_{liq} = 1.80 \\;\\Rightarrow\\; St = 11.20$$

**ধাপ ১২ — মূল্যায়ন — এবং লক্ষ করুন কী হয়।**
$$v_{pe} = \\min(15, 18.2) = 15.00 \\;\\text{(সীমাবদ্ধ)}$$
$$v_{ev} = \\min(15, 16.2) = 15.00 \\;\\text{(সীমাবদ্ধ)}$$
$$V = 30.00 \\;\\text{— একটি নিখুঁত মূল্যায়ন স্কোর}$$

**ধাপ ১৩ — মোট:**
$$T = 8.98 + 11.20 + 30.00 = 50.18$$

**ধাপ ১৪ — রায়:** $Q = 8.98 < 24$ → গেট ব্যর্থতা নির্বিশেষে ও নিখুঁত মূল্যায়ন স্কোর সত্ত্বেও **গুণমান-মেঝেতে প্রত্যাখ্যান**।

---

**ব্যাখ্যা।**

বিটা **মডেলে সম্ভাব্য সর্বোচ্চ মূল্যায়ন স্কোর** অর্জন করে এবং তবুও নজরদারিতে পৌঁছাতে পারে না। এটিই নকশার কাজ করা।

সীমাগুলো কীভাবে কাজ করে তা সুনির্দিষ্টভাবে লক্ষ করুন। বিটার কাঁচা মূল্যায়ন পাটিগণিত দিত $18.2 + 16.2 = 34.4$ — স্তম্ভের সর্বোচ্চের ওপরে। **সীমাহীন হলে বিটার মোট হতো ৫৪.৬ এবং গামা ব্যাংকের দুই পয়েন্টের মধ্যে বসত**, যে কোম্পানি প্রতিটি গেট পার করে ও গুণমান-মেঝে পূরণ করে। সীমাগুলো একটি মাত্রার চরম মানকে ক্রমতালিকায় অবস্থান কিনতে বাধা দেয়।

আর বাকিটা মেঝে করে। নিখুঁত ৩০-এও বিটার ৮.৯৮ গুণমান একে প্রত্যাখ্যান করে। **এমন কোনো মূল্যায়ন নেই যেখানে বিটা বিনিয়োগযোগ্য হয়**, যা মুনাফার প্রতি টাকার ৩১ পয়সা নগদে রূপান্তরকারী এবং যার উদ্যোক্তারা বিক্রি করছেন এমন কোম্পানির জন্য সঠিক উত্তর।

**এটি যে শৃঙ্খলা সংকেতবদ্ধ করে:** সস্তা হওয়া দেখার কারণ, কখনো কেনার কারণ নয়। স্কোরকার্ড এমনভাবে সাজানো যাতে এটি দ্বিতীয়টি প্রকাশই করতে না পারে।`,
    },

    excel: {
      en: `\`\`\`
A1:  STAGE 1 — HARD GATES (any 1 = REJECT, no score computed)
A2:  Adverse / disclaimer audit opinion (Ch 24)   B2:  0
A3:  Sponsor holding below 30% (Ch 24)            B3:  0
A4:  Accounts not filed / AGM not held (Ch 24)    B4:  0
A5:  ADTV below BDT 50 lakh (Ch 2)                B5:  0
A6:  Relative spread above 1% (Ch 2)              B6:  0
A7:  Z category (Ch 4)                            B7:  0
A8:  GATES FAILED                                 B8:  =SUM(B2:B7)

A10: STAGE 2 — QUALITY (weight 40)
A11: Cash conversion NOCF/NP (Ch 12)              B11: 1.12
A12:   score 0-10                                 B12: =MIN(10,MAX(0,B11*8))
A13: Accruals ratio % (Ch 13), lower better       B13: 2.1
A14:   score 0-10                                 B14: =MIN(10,MAX(0,10-B13))
A15: Governance severity % (Ch 24), lower better  B15: 6
A16:   score 0-10                                 B16: =MIN(10,MAX(0,10-B15/4))
A17: Other income / net profit % (Ch 10)          B17: 6
A18:   score 0-10                                 B18: =MIN(10,MAX(0,10-B17/5))
A19: QUALITY PILLAR (0-40)                        B19: =B12+B14+B16+B18

A21: STAGE 3 — STRENGTH (weight 30)
A22: ROE % (Ch 15)                                B22: 19
A23:   score 0-10                                 B23: =MIN(10,MAX(0,B22/2))
A24: Interest coverage x (Ch 17)                  B24: 6.4
A25:   score 0-10                                 B25: =MIN(10,MAX(0,B24*1.5))
A26: Current ratio, quality-adjusted (Ch 14)      B26: 1.8
A27:   score 0-10                                 B27: =MIN(10,MAX(0,(B26-0.8)*6))
A28: STRENGTH PILLAR (0-30)                       B28: =B23+B25+B27

A30: STAGE 4 — VALUATION (weight 30) — SCORED LAST
A31: P/E (Ch 18)                                  B31: 14.2
A32:   score 0-15                                 B32: =MIN(15,MAX(0,(25-B31)*1.0))
A33: EV/EBITDA (Ch 18)                            B33: 8.5
A34:   score 0-15                                 B34: =MIN(15,MAX(0,(16-B33)*1.5))
A35: VALUATION PILLAR (0-30)                      B35: =B32+B34

A37: TOTAL SCORE (0-100)                          B37: =B19+B28+B35
A38: QUALITY FLOOR MET? (pillar >= 24)            B38: =IF(B19>=24,1,0)

A40: VERDICT   =IF(B8>0,"REJECT - failed a hard gate",
               IF(B38=0,"REJECT - quality floor not met, valuation cannot compensate",
               IF(B37>=70,"BUY candidate",IF(B37>=55,"WATCH","PASS - insufficient score"))))

A42: POSITION SIZE MULTIPLIER
B42: =IF(OR(B8>0,B38=0),0,MIN(1,MAX(0,(B37-55)/30)))
\`\`\`

**Three things about this sheet, and they are the whole design.**

**B8 is evaluated before anything else and short-circuits the verdict.** It is not a weighted input. If a gate fails, the pillars below it are noise — the sheet still computes them because Excel computes everything, but B40 never reads them.

**B38 is a separate boolean, not a term in B37.** This is the quality floor. Fold it into the total as a weight and you have rebuilt the machine this chapter exists to prevent: a company can then buy its way past poor quality with a perfect valuation score.

**Every MIN() in the scoring rows is load-bearing.** Remove the cap on B32 and B34 and Beta Textile's raw 34.4 flows into the total, closing the gap to a company that passes every gate. **The caps are what stop an extreme on one dimension from purchasing rank.**

Set B11 to 0.31, B13 to 6.7, B15 to 66 and B17 to 34, then set B31 to 6.8 and B33 to 5.2, and watch B40 return REJECT with B35 sitting at a perfect 30.00. That single test tells you the sheet is wired correctly.`,
      bn: `\`\`\`
A1:  ধাপ ১ — কঠোর গেট (যেকোনো ১ = প্রত্যাখ্যান, স্কোর গণনা হয় না)
A2:  বিরূপ / দাবিত্যাগ নিরীক্ষা মতামত (অ ২৪)      B2:  0
A3:  উদ্যোক্তা মালিকানা ৩০%-এর নিচে (অ ২৪)        B3:  0
A4:  হিসাব দাখিল হয়নি / এজিএম হয়নি (অ ২৪)        B4:  0
A5:  ADTV ৫০ লক্ষ টাকার নিচে (অ ২)                B5:  0
A6:  আপেক্ষিক স্প্রেড ১%-এর ওপরে (অ ২)            B6:  0
A7:  Z শ্রেণি (অ ৪)                               B7:  0
A8:  ব্যর্থ গেট                                    B8:  =SUM(B2:B7)

A10: ধাপ ২ — গুণমান (ওজন ৪০)
A11: Cash conversion NOCF/NP (অ ১২)               B11: 1.12
A12:   স্কোর ০-১০                                  B12: =MIN(10,MAX(0,B11*8))
A13: Accruals ratio % (অ ১৩), কম ভালো              B13: 2.1
A14:   স্কোর ০-১০                                  B14: =MIN(10,MAX(0,10-B13))
A15: গভর্ন্যান্স তীব্রতা % (অ ২৪), কম ভালো          B15: 6
A16:   স্কোর ০-১০                                  B16: =MIN(10,MAX(0,10-B15/4))
A17: অন্যান্য আয় / নিট মুনাফা % (অ ১০)             B17: 6
A18:   স্কোর ০-১০                                  B18: =MIN(10,MAX(0,10-B17/5))
A19: গুণমান স্তম্ভ (০-৪০)                          B19: =B12+B14+B16+B18

A21: ধাপ ৩ — শক্তি (ওজন ৩০)
A22: ROE % (অ ১৫)                                 B22: 19
A23:   স্কোর ০-১০                                  B23: =MIN(10,MAX(0,B22/2))
A24: সুদ কভারেজ x (অ ১৭)                          B24: 6.4
A25:   স্কোর ০-১০                                  B25: =MIN(10,MAX(0,B24*1.5))
A26: চলতি অনুপাত, গুণমান-সমন্বিত (অ ১৪)            B26: 1.8
A27:   স্কোর ০-১০                                  B27: =MIN(10,MAX(0,(B26-0.8)*6))
A28: শক্তি স্তম্ভ (০-৩০)                           B28: =B23+B25+B27

A30: ধাপ ৪ — মূল্যায়ন (ওজন ৩০) — সবার শেষে স্কোর
A31: P/E (অ ১৮)                                   B31: 14.2
A32:   স্কোর ০-১৫                                  B32: =MIN(15,MAX(0,(25-B31)*1.0))
A33: EV/EBITDA (অ ১৮)                             B33: 8.5
A34:   স্কোর ০-১৫                                  B34: =MIN(15,MAX(0,(16-B33)*1.5))
A35: মূল্যায়ন স্তম্ভ (০-৩০)                        B35: =B32+B34

A37: মোট স্কোর (০-১০০)                            B37: =B19+B28+B35
A38: গুণমান-মেঝে পূরণ? (স্তম্ভ >= ২৪)              B38: =IF(B19>=24,1,0)

A40: রায়    =IF(B8>0,"REJECT - failed a hard gate",
            IF(B38=0,"REJECT - quality floor not met, valuation cannot compensate",
            IF(B37>=70,"BUY candidate",IF(B37>=55,"WATCH","PASS - insufficient score"))))

A42: পজিশন আকার গুণক
B42: =IF(OR(B8>0,B38=0),0,MIN(1,MAX(0,(B37-55)/30)))
\`\`\`

**এই শিট সম্পর্কে তিনটি কথা, আর এগুলোই সম্পূর্ণ নকশা।**

**B8 সবার আগে মূল্যায়িত হয় এবং রায়কে সংক্ষিপ্ত করে।** এটি কোনো ভারিত উপাদান নয়। গেট ব্যর্থ হলে নিচের স্তম্ভগুলো গোলমাল — শিট তবুও সেগুলো গণনা করে কারণ এক্সেল সবই গণনা করে, কিন্তু B40 কখনো সেগুলো পড়ে না।

**B38 একটি পৃথক বুলিয়ান, B37-এর কোনো পদ নয়।** এটিই গুণমান-মেঝে। একে ওজন হিসেবে মোটে ঢোকান, আর আপনি সেই যন্ত্রটিই আবার বানালেন যা ঠেকাতে এই অধ্যায় আছে: তখন একটি কোম্পানি নিখুঁত মূল্যায়ন স্কোর দিয়ে দুর্বল গুণমান পেরিয়ে যেতে পারে।

**স্কোরিং সারির প্রতিটি MIN() ভারবাহী।** B32 ও B34-এর সীমা তুলে দিন, আর বিটা টেক্সটাইলের কাঁচা ৩৪.৪ মোটে ঢুকে প্রতিটি গেট পার করা কোম্পানির সঙ্গে ব্যবধান কমিয়ে দেয়। **সীমাগুলোই একটি মাত্রার চরম মানকে ক্রম কিনতে বাধা দেয়।**

B11-এ ০.৩১, B13-এ ৬.৭, B15-এ ৬৬ ও B17-এ ৩৪ বসান, তারপর B31-এ ৬.৮ ও B33-এ ৫.২ বসিয়ে দেখুন B40 প্রত্যাখ্যান ফেরত দিচ্ছে যখন B35 নিখুঁত ৩০.০০-এ বসে আছে। ঐ একটি পরীক্ষাই বলে দেয় শিটটি সঠিকভাবে সংযুক্ত।`,
    },

    python: {
      en: `\`\`\`python
"""
Chapter 25 — The staged fundamental scorecard.
Educational. Weights and thresholds are illustrative; the STAGING is the point.
"""
from dataclasses import dataclass, field


def clamp(x: float, lo: float = 0.0, hi: float = 10.0) -> float:
    return max(lo, min(hi, x))


@dataclass
class Gates:
    """Stage 1. Binary. Any failure ends the analysis before any score exists."""
    adverse_opinion: bool = False        # Ch 24
    sponsor_below_30: bool = False       # Ch 24
    accounts_not_filed: bool = False     # Ch 24
    adtv_below_50lakh: bool = False      # Ch 2
    spread_above_1pct: bool = False      # Ch 2
    z_category: bool = False             # Ch 4

    def failed(self) -> list:
        out = []
        if self.adverse_opinion:    out.append("adverse/disclaimer opinion")
        if self.sponsor_below_30:   out.append("sponsor holding below 30%")
        if self.accounts_not_filed: out.append("accounts not filed / AGM not held")
        if self.adtv_below_50lakh:  out.append("ADTV below BDT 50 lakh")
        if self.spread_above_1pct:  out.append("relative spread above 1%")
        if self.z_category:         out.append("Z category")
        return out


@dataclass
class Company:
    name: str
    gates: Gates = field(default_factory=Gates)
    # Stage 2 - quality
    cash_conversion: float = 0.0    # Ch 12
    accruals_ratio: float = 0.0     # Ch 13, %
    gov_severity: float = 0.0       # Ch 24, %
    other_income_pct: float = 0.0   # Ch 10, % of net profit
    # Stage 3 - strength
    roe: float = 0.0                # Ch 15, %
    interest_cover: float = 0.0     # Ch 17, x
    current_ratio: float = 0.0      # Ch 14, adjusted
    # Stage 4 - valuation
    pe: float = 0.0                 # Ch 18
    ev_ebitda: float = None         # Ch 18; None = not meaningful (banks, Ch 23)

    QUALITY_FLOOR = 24.0

    # ---- Stage 2 ----
    @property
    def quality(self) -> float:
        return (clamp(self.cash_conversion * 8)
                + clamp(10 - self.accruals_ratio)
                + clamp(10 - self.gov_severity / 4)
                + clamp(10 - self.other_income_pct / 5))

    # ---- Stage 3 ----
    @property
    def strength(self) -> float:
        return (clamp(self.roe / 2)
                + clamp(self.interest_cover * 1.5)
                + clamp((self.current_ratio - 0.8) * 6))

    # ---- Stage 4 ----
    @property
    def valuation(self) -> float:
        v_pe = clamp(25 - self.pe, 0, 15)
        if self.ev_ebitda is None:
            # Ch 23: EV/EBITDA is not meaningful for a bank. Award the
            # midpoint rather than zero, so the sector is not penalised
            # for an inapplicable metric.
            v_ev = 7.5
        else:
            v_ev = clamp(1.5 * (16 - self.ev_ebitda), 0, 15)
        return v_pe + v_ev

    @property
    def total(self) -> float:
        return self.quality + self.strength + self.valuation

    def verdict(self) -> str:
        failed = self.gates.failed()
        if failed:
            return "REJECT - gate: " + "; ".join(failed)
        if self.quality < self.QUALITY_FLOOR:
            return (f"REJECT - quality floor ({self.quality:.1f} < "
                    f"{self.QUALITY_FLOOR:.0f}), valuation cannot compensate")
        if self.total >= 70:
            return "BUY candidate"
        if self.total >= 55:
            return "WATCH"
        return "PASS - insufficient score"

    def size_multiplier(self) -> float:
        if self.gates.failed() or self.quality < self.QUALITY_FLOOR:
            return 0.0
        return max(0.0, min(1.0, (self.total - 55) / 30))


def report(c: Company, base_position: float = 10_00_000) -> None:
    print(f"=== {c.name} ===")
    failed = c.gates.failed()
    if failed:
        print(f"  Stage 1 GATES FAILED ({len(failed)}):")
        for f in failed:
            print(f"    - {f}")
        print("  Scoring skipped. Verdict is final regardless of price.")
    print(f"  Quality  (0-40) : {c.quality:6.2f}"
          f"{'   <-- BELOW FLOOR' if c.quality < c.QUALITY_FLOOR else ''}")
    print(f"  Strength (0-30) : {c.strength:6.2f}")
    print(f"  Valuation(0-30) : {c.valuation:6.2f}"
          f"{'   <-- MAXIMUM' if c.valuation >= 29.99 else ''}")
    print(f"  TOTAL    (0-100): {c.total:6.2f}")
    print(f"  Multiplier      : {c.size_multiplier():.3f}")
    print(f"  Position on BDT {base_position:,.0f} base: "
          f"BDT {c.size_multiplier() * base_position:,.0f}")
    print(f"  VERDICT         : {c.verdict()}")
    print()


if __name__ == "__main__":
    alpha = Company(
        name="Alpha Pharma",
        cash_conversion=1.12, accruals_ratio=2.1, gov_severity=6, other_income_pct=6,
        roe=19, interest_cover=6.4, current_ratio=1.8,
        pe=14.2, ev_ebitda=8.5,
    )
    beta = Company(
        name="Beta Textile",
        gates=Gates(accounts_not_filed=True),
        cash_conversion=0.31, accruals_ratio=6.7, gov_severity=66, other_income_pct=34,
        roe=14, interest_cover=1.6, current_ratio=1.1,
        pe=6.8, ev_ebitda=5.2,
    )
    gamma = Company(
        name="Gamma Bank",
        cash_conversion=0.94, accruals_ratio=3.0, gov_severity=18, other_income_pct=11,
        roe=13, interest_cover=6.0, current_ratio=1.5,
        pe=7.9, ev_ebitda=None,          # Ch 23: not meaningful for a bank
    )
    delta = Company(
        name="Delta Foods",
        gates=Gates(adverse_opinion=True, z_category=True,
                    adtv_below_50lakh=True, spread_above_1pct=True),
        cash_conversion=0.8, accruals_ratio=4.0, gov_severity=40, other_income_pct=20,
        roe=11, interest_cover=2.0, current_ratio=1.3,
        pe=5.1, ev_ebitda=4.0,
    )

    universe = [alpha, beta, gamma, delta]
    for c in universe:
        report(c)

    print("=== What a naive P/E screen would have ranked first ===")
    for c in sorted(universe, key=lambda x: x.pe):
        print(f"  P/E {c.pe:>5.1f}  {c.name:<14} -> {c.verdict()[:58]}")

    print()
    print("=== Why the valuation cap matters ===")
    raw_pe = 25 - beta.pe
    raw_ev = 1.5 * (16 - beta.ev_ebitda)
    print(f"  Beta raw valuation arithmetic : {raw_pe:.1f} + {raw_ev:.1f} = {raw_pe+raw_ev:.1f}")
    print(f"  Beta capped valuation pillar  : {beta.valuation:.1f}")
    print(f"  Beta total as scored          : {beta.total:.2f}")
    print(f"  Beta total if UNCAPPED        : {beta.quality + beta.strength + raw_pe + raw_ev:.2f}")
    print(f"  Gamma total (passes all gates): {gamma.total:.2f}")
\`\`\`

**Run it and read the last two sections.**

The P/E ranking puts **Delta (5.1), Beta (6.8), Gamma (7.9), Alpha (14.2)** — the three cheapest are the two rejections and a watch, and the most expensive is the only buy. That inversion is not a coincidence; it is what Chapter 18 predicted and Chapter 24 demonstrated.

The final block shows the cap doing its work. Beta's raw valuation arithmetic comes to **34.4**, above the pillar maximum. Uncapped, its total climbs to within a couple of points of Gamma — a company that clears every gate. **The cap is what prevents an extreme on one dimension from purchasing rank**, and the quality floor is what makes the rejection independent of price altogether.`,
      bn: `\`\`\`python
"""
অধ্যায় ২৫ — ধাপে ধাপে ফান্ডামেন্টাল স্কোরকার্ড।
শিক্ষামূলক। ওজন ও সীমা দৃষ্টান্তমূলক; ধাপে ভাগ করাটাই মূল কথা।
"""
from dataclasses import dataclass, field


def clamp(x: float, lo: float = 0.0, hi: float = 10.0) -> float:
    return max(lo, min(hi, x))


@dataclass
class Gates:
    """ধাপ ১। দ্বিমুখী। যেকোনো ব্যর্থতা কোনো স্কোর তৈরির আগেই বিশ্লেষণ শেষ করে।"""
    adverse_opinion: bool = False        # অ ২৪
    sponsor_below_30: bool = False       # অ ২৪
    accounts_not_filed: bool = False     # অ ২৪
    adtv_below_50lakh: bool = False      # অ ২
    spread_above_1pct: bool = False      # অ ২
    z_category: bool = False             # অ ৪

    def failed(self) -> list:
        out = []
        if self.adverse_opinion:    out.append("adverse/disclaimer opinion")
        if self.sponsor_below_30:   out.append("sponsor holding below 30%")
        if self.accounts_not_filed: out.append("accounts not filed / AGM not held")
        if self.adtv_below_50lakh:  out.append("ADTV below BDT 50 lakh")
        if self.spread_above_1pct:  out.append("relative spread above 1%")
        if self.z_category:         out.append("Z category")
        return out


@dataclass
class Company:
    name: str
    gates: Gates = field(default_factory=Gates)
    cash_conversion: float = 0.0    # অ ১২
    accruals_ratio: float = 0.0     # অ ১৩, %
    gov_severity: float = 0.0       # অ ২৪, %
    other_income_pct: float = 0.0   # অ ১০, নিট মুনাফার %
    roe: float = 0.0                # অ ১৫, %
    interest_cover: float = 0.0     # অ ১৭, গুণ
    current_ratio: float = 0.0      # অ ১৪, সমন্বিত
    pe: float = 0.0                 # অ ১৮
    ev_ebitda: float = None         # অ ১৮; None = অর্থবহ নয় (ব্যাংক, অ ২৩)

    QUALITY_FLOOR = 24.0

    @property
    def quality(self) -> float:
        return (clamp(self.cash_conversion * 8)
                + clamp(10 - self.accruals_ratio)
                + clamp(10 - self.gov_severity / 4)
                + clamp(10 - self.other_income_pct / 5))

    @property
    def strength(self) -> float:
        return (clamp(self.roe / 2)
                + clamp(self.interest_cover * 1.5)
                + clamp((self.current_ratio - 0.8) * 6))

    @property
    def valuation(self) -> float:
        v_pe = clamp(25 - self.pe, 0, 15)
        if self.ev_ebitda is None:
            # অ ২৩: ব্যাংকের জন্য EV/EBITDA অর্থবহ নয়। শূন্য না দিয়ে
            # মধ্যবিন্দু দেওয়া হয়, যাতে অপ্রযোজ্য পরিমাপের জন্য খাতটি
            # শাস্তি না পায়।
            v_ev = 7.5
        else:
            v_ev = clamp(1.5 * (16 - self.ev_ebitda), 0, 15)
        return v_pe + v_ev

    @property
    def total(self) -> float:
        return self.quality + self.strength + self.valuation

    def verdict(self) -> str:
        failed = self.gates.failed()
        if failed:
            return "REJECT - gate: " + "; ".join(failed)
        if self.quality < self.QUALITY_FLOOR:
            return (f"REJECT - quality floor ({self.quality:.1f} < "
                    f"{self.QUALITY_FLOOR:.0f}), valuation cannot compensate")
        if self.total >= 70:
            return "BUY candidate"
        if self.total >= 55:
            return "WATCH"
        return "PASS - insufficient score"

    def size_multiplier(self) -> float:
        if self.gates.failed() or self.quality < self.QUALITY_FLOOR:
            return 0.0
        return max(0.0, min(1.0, (self.total - 55) / 30))


def report(c: Company, base_position: float = 10_00_000) -> None:
    print(f"=== {c.name} ===")
    failed = c.gates.failed()
    if failed:
        print(f"  Stage 1 GATES FAILED ({len(failed)}):")
        for f in failed:
            print(f"    - {f}")
        print("  Scoring skipped. Verdict is final regardless of price.")
    print(f"  Quality  (0-40) : {c.quality:6.2f}"
          f"{'   <-- BELOW FLOOR' if c.quality < c.QUALITY_FLOOR else ''}")
    print(f"  Strength (0-30) : {c.strength:6.2f}")
    print(f"  Valuation(0-30) : {c.valuation:6.2f}"
          f"{'   <-- MAXIMUM' if c.valuation >= 29.99 else ''}")
    print(f"  TOTAL    (0-100): {c.total:6.2f}")
    print(f"  Multiplier      : {c.size_multiplier():.3f}")
    print(f"  Position on BDT {base_position:,.0f} base: "
          f"BDT {c.size_multiplier() * base_position:,.0f}")
    print(f"  VERDICT         : {c.verdict()}")
    print()


if __name__ == "__main__":
    alpha = Company(
        name="Alpha Pharma",
        cash_conversion=1.12, accruals_ratio=2.1, gov_severity=6, other_income_pct=6,
        roe=19, interest_cover=6.4, current_ratio=1.8,
        pe=14.2, ev_ebitda=8.5,
    )
    beta = Company(
        name="Beta Textile",
        gates=Gates(accounts_not_filed=True),
        cash_conversion=0.31, accruals_ratio=6.7, gov_severity=66, other_income_pct=34,
        roe=14, interest_cover=1.6, current_ratio=1.1,
        pe=6.8, ev_ebitda=5.2,
    )
    gamma = Company(
        name="Gamma Bank",
        cash_conversion=0.94, accruals_ratio=3.0, gov_severity=18, other_income_pct=11,
        roe=13, interest_cover=6.0, current_ratio=1.5,
        pe=7.9, ev_ebitda=None,
    )
    delta = Company(
        name="Delta Foods",
        gates=Gates(adverse_opinion=True, z_category=True,
                    adtv_below_50lakh=True, spread_above_1pct=True),
        cash_conversion=0.8, accruals_ratio=4.0, gov_severity=40, other_income_pct=20,
        roe=11, interest_cover=2.0, current_ratio=1.3,
        pe=5.1, ev_ebitda=4.0,
    )

    universe = [alpha, beta, gamma, delta]
    for c in universe:
        report(c)

    print("=== What a naive P/E screen would have ranked first ===")
    for c in sorted(universe, key=lambda x: x.pe):
        print(f"  P/E {c.pe:>5.1f}  {c.name:<14} -> {c.verdict()[:58]}")

    print()
    print("=== Why the valuation cap matters ===")
    raw_pe = 25 - beta.pe
    raw_ev = 1.5 * (16 - beta.ev_ebitda)
    print(f"  Beta raw valuation arithmetic : {raw_pe:.1f} + {raw_ev:.1f} = {raw_pe+raw_ev:.1f}")
    print(f"  Beta capped valuation pillar  : {beta.valuation:.1f}")
    print(f"  Beta total as scored          : {beta.total:.2f}")
    print(f"  Beta total if UNCAPPED        : {beta.quality + beta.strength + raw_pe + raw_ev:.2f}")
    print(f"  Gamma total (passes all gates): {gamma.total:.2f}")
\`\`\`

**এটি চালিয়ে শেষ দুটি অংশ পড়ুন।**

P/E ক্রম দাঁড়ায় **ডেল্টা (৫.১), বিটা (৬.৮), গামা (৭.৯), আলফা (১৪.২)** — সবচেয়ে সস্তা তিনটি হলো দুটি প্রত্যাখ্যান ও একটি নজরদারি, আর সবচেয়ে দামিটিই একমাত্র ক্রয়। এই উল্টে যাওয়া কাকতালীয় নয়; অধ্যায় ১৮ এটি পূর্বাভাস দিয়েছিল ও অধ্যায় ২৪ দেখিয়েছিল।

শেষ অংশটি দেখায় সীমাটি কীভাবে কাজ করে। বিটার কাঁচা মূল্যায়ন পাটিগণিত দাঁড়ায় **৩৪.৪**, স্তম্ভের সর্বোচ্চের ওপরে। সীমাহীন হলে এর মোট গামার কয়েক পয়েন্টের মধ্যে উঠে আসে — যে কোম্পানি প্রতিটি গেট পার করে। **সীমাই একটি মাত্রার চরম মানকে ক্রম কিনতে বাধা দেয়**, আর গুণমান-মেঝেই প্রত্যাখ্যানটিকে দাম থেকে সম্পূর্ণ স্বাধীন করে।`,
    },

    mistakes: {
      en: `1. **Summing everything into one weighted total.** The most common design error and the most expensive. A single total lets a perfect valuation score compensate for absent quality, which is precisely the failure the staging exists to prevent.
2. **Making the quality floor a heavy weight instead of a floor.** A weight can be outvoted; a floor cannot. If quality below 24 does not reject *for all valuations*, it is not a floor.
3. **Removing the caps on the valuation components.** Beta Textile's raw arithmetic reaches 34.4 against a 30-point pillar. Uncapped, an extreme on one dimension buys rank it has not earned.
4. **Running the scorecard before reading the annual report.** Every input is a number someone published. The scorecard is what you complete *after* reading; it cannot tell you what the flags have in common (Chapter 24's sentence test).
5. **Treating a WATCH as a weak BUY.** It means the gates passed and quality is adequate but the score does not justify a position at this price. The correct action is usually nothing, re-run next quarter.
6. **Scoring EV/EBITDA for a bank.** Chapter 23 established it is not meaningful there. Awarding zero penalises the sector for an inapplicable metric; awarding a midpoint is a judgement you should state rather than hide.
7. **Re-tuning weights after a position goes wrong.** Continuous re-fitting means the framework always describes the last mistake. Set the weights once, date them, and change them only when the reasoning changes.
8. **Believing the score is a valuation.** It ranks companies against each other on measurable attributes. It does not tell you what a business is worth — Chapter 21 showed a defensible DCF swinging from BDT 22.59 to BDT 53.30 on assumptions no one could call unreasonable.
9. **Using it to time an entry.** Part I is unambiguous: an excellent company bought in the wrong market phase lost 60%. The scorecard answers *what*, never *when*.`,
      bn: `১. **সবকিছু একটি ভারিত মোটে যোগ করা।** সবচেয়ে সাধারণ নকশাগত ভুল এবং সবচেয়ে ব্যয়বহুল। একটি একক মোট নিখুঁত মূল্যায়ন স্কোরকে অনুপস্থিত গুণমান পুষিয়ে দিতে দেয়, আর ঠিক এই ব্যর্থতা ঠেকাতেই ধাপে ভাগ করা।
২. **গুণমান-মেঝেকে মেঝে না করে ভারী ওজন বানানো।** ওজনকে ভোটে হারানো যায়; মেঝেকে যায় না। গুণমান ২৪-এর নিচে হলে তা *সব মূল্যায়নের জন্য* প্রত্যাখ্যান না করলে সেটি মেঝে নয়।
৩. **মূল্যায়ন উপাদানের সীমা তুলে দেওয়া।** ৩০ পয়েন্টের স্তম্ভের বিপরীতে বিটা টেক্সটাইলের কাঁচা পাটিগণিত ৩৪.৪-এ পৌঁছায়। সীমাহীন হলে একটি মাত্রার চরম মান অনার্জিত ক্রম কিনে নেয়।
৪. **বার্ষিক প্রতিবেদন পড়ার আগে স্কোরকার্ড চালানো।** প্রতিটি উপাদান কারো প্রকাশিত সংখ্যা। স্কোরকার্ড হলো যা আপনি পড়ার *পরে* পূরণ করেন; সংকেতগুলোতে কী মিল তা এটি বলতে পারে না (অধ্যায় ২৪-এর বাক্য পরীক্ষা)।
৫. **নজরদারিকে দুর্বল ক্রয় হিসেবে গণ্য করা।** এর অর্থ গেট পার হয়েছে ও গুণমান পর্যাপ্ত, কিন্তু এই দামে পজিশনের যৌক্তিকতা স্কোরে নেই। সঠিক পদক্ষেপ সাধারণত কিছুই না করা, পরের প্রান্তিকে আবার চালানো।
৬. **ব্যাংকের জন্য EV/EBITDA স্কোর করা।** অধ্যায় ২৩ প্রতিষ্ঠা করেছে সেখানে এটি অর্থবহ নয়। শূন্য দিলে অপ্রযোজ্য পরিমাপের জন্য খাতটি শাস্তি পায়; মধ্যবিন্দু দেওয়া একটি বিচার যা লুকানোর বদলে বলা উচিত।
৭. **কোনো পজিশন খারাপ হলে ওজন পুনর্নির্ধারণ।** অবিরাম পুনঃসন্নিবেশ মানে কাঠামোটি সবসময় শেষ ভুলটি বর্ণনা করে। ওজন একবার নির্ধারণ করুন, তারিখ দিন, আর যুক্তি বদলালেই কেবল বদলান।
৮. **স্কোরকে মূল্যায়ন ভাবা।** এটি পরিমাপযোগ্য বৈশিষ্ট্যে কোম্পানিগুলোকে পরস্পরের বিপরীতে ক্রমবদ্ধ করে। এটি বলে না একটি ব্যবসার দাম কত — অধ্যায় ২১ দেখিয়েছে অযৌক্তিক বলা যায় না এমন অনুমানে একটি সমর্থনযোগ্য DCF ২২.৫৯ থেকে ৫৩.৩০ টাকায় দুলছে।
৯. **প্রবেশের সময় নির্ধারণে এটি ব্যবহার করা।** পর্ব ১ দ্ব্যর্থহীন: ভুল বাজার পর্যায়ে কেনা চমৎকার কোম্পানি ৬০% হারিয়েছে। স্কোরকার্ড *কী* প্রশ্নের উত্তর দেয়, কখনো *কখন* নয়।`,
    },

    tips: {
      en: `- **Fill in Stage 1 before you look at the price.** All six gates come from documents, not from the quote screen. Knowing the P/E first creates an anchor that the gates then have to argue against.
- **Keep one row per company in a running sheet, dated.** Score, pillar breakdown, verdict, and the date. After two years you can ask whether the framework was wrong or whether you overrode it — and in most cases it is the second.
- **Write the pillar scores, never just the total.** A 68 from balanced pillars and a 68 carried by valuation are different companies. The total conceals exactly what you most need to see.
- **Re-run the scorecard quarterly on holdings, not just on candidates.** Governance severity and cash conversion move. A position that scored 78 at entry and scores 58 now has told you something before the price has.
- **Set the thresholds once, in writing, and date them.** Same discipline as Chapter 7's cycle framework and Chapter 24's rejection threshold. A threshold chosen while looking at a company you already like is not a threshold.
- **When a company you like fails, do not adjust the weights.** Write down why you disagree, take the rejection, and diary it. If the framework was wrong you will have the evidence; if you were wrong you will have avoided the loss.
- **Treat the WATCH band as the normal state.** Most companies most of the time are neither compelling nor disqualified. A framework that constantly produces BUY signals is generating turnover, and Chapter 2 established what turnover costs.
- **Carry the output into Part I, not straight into a trade.** The scorecard produces a *what*. Chapter 7's cycle composite and Chapter 8's sector work determine whether now is the time to act on it, and Part III determines the entry.`,
      bn: `- **দাম দেখার আগে ধাপ ১ পূরণ করুন।** ছয়টি গেটই নথি থেকে আসে, কোট স্ক্রিন থেকে নয়। আগে P/E জানলে একটি নোঙর তৈরি হয় যার বিরুদ্ধে গেটগুলোকে তর্ক করতে হয়।
- **একটি চলমান শিটে প্রতি কোম্পানিতে এক সারি রাখুন, তারিখসহ।** স্কোর, স্তম্ভের ভাঙচি, রায় ও তারিখ। দুই বছর পর জিজ্ঞেস করতে পারবেন কাঠামোটি ভুল ছিল না আপনি লঙ্ঘন করেছিলেন — আর বেশিরভাগ ক্ষেত্রে দ্বিতীয়টি।
- **কেবল মোট নয়, স্তম্ভের স্কোর লিখুন।** ভারসাম্যপূর্ণ স্তম্ভ থেকে ৬৮ আর মূল্যায়নে বাহিত ৬৮ ভিন্ন কোম্পানি। মোট ঠিক তা-ই আড়াল করে যা আপনার সবচেয়ে বেশি দেখা দরকার।
- **কেবল প্রার্থীতে নয়, হোল্ডিংয়েও ত্রৈমাসিকভাবে স্কোরকার্ড আবার চালান।** গভর্ন্যান্স তীব্রতা ও cash conversion নড়ে। প্রবেশে ৭৮ পাওয়া ও এখন ৫৮ পাওয়া পজিশন দামের আগেই আপনাকে কিছু বলেছে।
- **সীমা একবার, লিখিতভাবে নির্ধারণ করুন, তারিখসহ।** অধ্যায় ৭-এর চক্র কাঠামো ও অধ্যায় ২৪-এর প্রত্যাখ্যান সীমার মতোই শৃঙ্খলা। ইতিমধ্যে পছন্দ করা কোম্পানি দেখতে দেখতে বাছা সীমা কোনো সীমা নয়।
- **পছন্দের কোম্পানি ব্যর্থ হলে ওজন সমন্বয় করবেন না।** কেন দ্বিমত তা লিখে রাখুন, প্রত্যাখ্যানটি মেনে নিন, ডায়েরিতে লিখুন। কাঠামো ভুল হলে প্রমাণ থাকবে; আপনি ভুল হলে ক্ষতি এড়াবেন।
- **নজরদারি পরিসরকে স্বাভাবিক অবস্থা হিসেবে দেখুন।** বেশিরভাগ কোম্পানি বেশিরভাগ সময় আকর্ষণীয়ও নয়, অযোগ্যও নয়। যে কাঠামো অবিরাম ক্রয় সংকেত দেয় তা লেনদেন তৈরি করছে, আর অধ্যায় ২ লেনদেনের খরচ প্রতিষ্ঠা করেছে।
- **ফলাফল সরাসরি লেনদেনে নয়, পর্ব ১-এ নিয়ে যান।** স্কোরকার্ড একটি *কী* তৈরি করে। অধ্যায় ৭-এর চক্র সমন্বিত স্কোর ও অধ্যায় ৮-এর খাত বিশ্লেষণ ঠিক করে এখনই পদক্ষেপের সময় কি না, আর পর্ব ৩ প্রবেশ নির্ধারণ করে।`,
    },

    exercises: {
      en: `1. Build the scorecard from §25.10. Populate Stage 1 for five companies you follow, using only filed documents. How many fail a gate before any scoring?
2. For the survivors, complete Stages 2–4. Record the pillar breakdown, not just the total. Which company has the widest gap between its total rank and its quality rank?
3. Take the cheapest company in your universe by P/E. Score it fully. Does it clear the quality floor? If not, write one sentence explaining what the cheapness was pricing.
4. Suspend the quality floor in your sheet and re-rank. Which companies move up, and by how much? What does that tell you about the floor's contribution?
5. Remove the MIN() caps on the valuation components and re-rank. How much does the cheapest company gain?
6. Score a company you already own. If the verdict is not BUY, write down whether you would open the position today at today's price. If not, state why you are still holding it.
7. Change the quality floor from 24 to 20 and re-run your universe. How many verdicts change? Justify in writing which floor you will adopt, and date it.
8. For a bank in your universe, decide how to handle EV/EBITDA. Score it three ways — zero, midpoint, and excluded with the pillar rescaled — and see how much the verdict moves.
9. Take a company that failed on governance severity. Reconstruct its Chapter 24 red-flag table and confirm the severity figure feeding this scorecard is correct.
10. Score the same company using data from three years ago. Compare the trajectory. Would the framework have warned you before the price did?
11. Write, in three sentences, what your scorecard cannot tell you. Keep it with the sheet.`,
      bn: `১. §২৫.১০-এর স্কোরকার্ড তৈরি করুন। আপনি অনুসরণ করেন এমন পাঁচটি কোম্পানির জন্য কেবল দাখিলকৃত নথি ব্যবহার করে ধাপ ১ পূরণ করুন। কতগুলো কোনো স্কোরিংয়ের আগেই গেটে ব্যর্থ হয়?
২. উত্তীর্ণদের জন্য ধাপ ২–৪ সম্পূর্ণ করুন। কেবল মোট নয়, স্তম্ভের ভাঙচি লিপিবদ্ধ করুন। কোন কোম্পানির মোট ক্রম ও গুণমান ক্রমের মধ্যে ব্যবধান সবচেয়ে বেশি?
৩. আপনার তালিকায় P/E অনুযায়ী সবচেয়ে সস্তা কোম্পানিটি নিন। সম্পূর্ণ স্কোর করুন। এটি কি গুণমান-মেঝে পার করে? না করলে সস্তা হওয়াটি কীসের দাম ছিল এক বাক্যে লিখুন।
৪. শিটে গুণমান-মেঝে স্থগিত করে পুনরায় ক্রমবদ্ধ করুন। কোন কোম্পানিগুলো ওপরে ওঠে, কতটা? মেঝের অবদান সম্পর্কে এটি কী বলে?
৫. মূল্যায়ন উপাদানের MIN() সীমা সরিয়ে পুনরায় ক্রমবদ্ধ করুন। সবচেয়ে সস্তা কোম্পানিটি কতটা লাভ করে?
৬. আপনার ইতিমধ্যে মালিকানাধীন একটি কোম্পানি স্কোর করুন। রায় ক্রয় না হলে লিখুন আজকের দামে আজ কি পজিশন খুলতেন। না হলে বলুন কেন এখনো ধরে আছেন।
৭. গুণমান-মেঝে ২৪ থেকে ২০-এ বদলে আপনার তালিকা আবার চালান। কতগুলো রায় বদলায়? কোন মেঝে গ্রহণ করবেন লিখিতভাবে যুক্তিসহ জানান, তারিখসহ।
৮. আপনার তালিকার একটি ব্যাংকের জন্য EV/EBITDA কীভাবে সামলাবেন ঠিক করুন। তিনভাবে স্কোর করুন — শূন্য, মধ্যবিন্দু, এবং বাদ দিয়ে স্তম্ভ পুনঃমাপ — এবং দেখুন রায় কতটা সরে।
৯. গভর্ন্যান্স তীব্রতায় ব্যর্থ একটি কোম্পানি নিন। এর অধ্যায় ২৪ বিপদ-সংকেত টেবিল পুনর্গঠন করে নিশ্চিত করুন এই স্কোরকার্ডে যাওয়া তীব্রতার সংখ্যাটি সঠিক।
১০. তিন বছর আগের তথ্য দিয়ে একই কোম্পানি স্কোর করুন। গতিপথ তুলনা করুন। কাঠামোটি কি দামের আগেই আপনাকে সতর্ক করত?
১১. তিন বাক্যে লিখুন আপনার স্কোরকার্ড আপনাকে কী বলতে পারে না। শিটের সঙ্গে রেখে দিন।`,
    },

    summary: {
      en: `- Sixteen chapters each produced a test. **This chapter arranges them, and the arrangement is the entire contribution** — the tests are standard, the ordering is what makes the system work.
- **Stage 1 — hard gates**, binary and terminal: adverse opinion, sponsor below 30%, unfiled accounts (Ch 24); ADTV below BDT 50 lakh, spread above 1% (Ch 2); Z category (Ch 4). None asks whether the business is good — three ask whether the numbers can be believed, three whether you could exit.
- **Stage 2 — quality (40)**, **Stage 3 — strength (30)**, **Stage 4 — valuation (30), scored last and capped.**
- **Two structural defences prevent a value trap.** Valuation cannot exceed 30 of 100, so cheapness alone cannot reach a buy score. And a **quality floor** rejects any company scoring below 24 of 40 on quality **regardless of the total** — a weight can be outvoted, a floor cannot.
- The worked case: **Beta Textile earns the maximum possible 30.0 on valuation and is still rejected**, on quality of 8.98. Uncapped, its raw valuation arithmetic of 34.4 would carry its total to within two points of a company that clears every gate. **There is no price at which Beta becomes investable.**
- Ranked by P/E ascending — the sort every screener performs — the order is Delta 5.1, Beta 6.8, Gamma 7.9, Alpha 14.2. **The three cheapest are two rejections and a watch; the most expensive is the only buy.**
- Position size is continuous: $m = \\max(0, \\min(1, (T-55)/30))$, so a 64 and an 81 produce genuinely different exposures rather than both reading as "yes".
- **What it cannot do:** value a business (Ch 21's DCF swings BDT 22.59–53.30), tell you when to buy (Part I; Part III), or see what was never disclosed. **It is a discipline for not skipping steps, not a substitute for judgement.**
- **Discipline established:** complete Stage 1 before looking at the price, record pillar scores rather than the total, and never adjust the weights because a company you like failed — write down the disagreement, take the rejection, and check in two years who was wrong.`,
      bn: `- ষোলোটি অধ্যায়ের প্রতিটি একটি করে পরীক্ষা তৈরি করেছে। **এই অধ্যায় সেগুলো সাজায়, আর সাজানোটাই সম্পূর্ণ অবদান** — পরীক্ষাগুলো প্রমিত, ক্রমটাই ব্যবস্থাটিকে কার্যকর করে।
- **ধাপ ১ — কঠোর গেট**, দ্বিমুখী ও চূড়ান্ত: বিরূপ মতামত, উদ্যোক্তা ৩০%-এর নিচে, অদাখিলকৃত হিসাব (অ ২৪); ADTV ৫০ লক্ষ টাকার নিচে, স্প্রেড ১%-এর ওপরে (অ ২); Z শ্রেণি (অ ৪)। কোনোটিই ব্যবসাটি ভালো কি না জিজ্ঞেস করে না — তিনটি জিজ্ঞেস করে সংখ্যা বিশ্বাস করা যায় কি না, তিনটি আপনি বেরোতে পারবেন কি না।
- **ধাপ ২ — গুণমান (৪০)**, **ধাপ ৩ — শক্তি (৩০)**, **ধাপ ৪ — মূল্যায়ন (৩০), সবার শেষে স্কোর ও সীমাবদ্ধ।**
- **দুটি কাঠামোগত প্রতিরক্ষা ভ্যালু ট্র্যাপ ঠেকায়।** মূল্যায়ন ১০০-এর মধ্যে ৩০ ছাড়াতে পারে না, তাই কেবল সস্তা হয়ে ক্রয়-স্কোরে পৌঁছানো যায় না। আর একটি **গুণমান-মেঝে** গুণমানে ৪০-এর মধ্যে ২৪-এর নিচে পাওয়া যেকোনো কোম্পানিকে **মোট নির্বিশেষে** প্রত্যাখ্যান করে — ওজনকে ভোটে হারানো যায়, মেঝেকে যায় না।
- উদাহরণ: **বিটা টেক্সটাইল মূল্যায়নে সম্ভাব্য সর্বোচ্চ ৩০.০ পেয়েও প্রত্যাখ্যাত**, ৮.৯৮ গুণমানে। সীমাহীন হলে এর কাঁচা ৩৪.৪ মূল্যায়ন পাটিগণিত মোটকে প্রতিটি গেট পার করা কোম্পানির দুই পয়েন্টের মধ্যে নিয়ে যেত। **এমন কোনো দাম নেই যেখানে বিটা বিনিয়োগযোগ্য হয়।**
- P/E আরোহী ক্রমে — যে সাজানো প্রতিটি স্ক্রিনার করে — ক্রমটি ডেল্টা ৫.১, বিটা ৬.৮, গামা ৭.৯, আলফা ১৪.২। **সবচেয়ে সস্তা তিনটি হলো দুটি প্রত্যাখ্যান ও একটি নজরদারি; সবচেয়ে দামিটিই একমাত্র ক্রয়।**
- পজিশনের আকার ধারাবাহিক: $m = \\max(0, \\min(1, (T-55)/30))$, তাই ৬৪ ও ৮১ দুটোই "হ্যাঁ" না হয়ে সত্যিই ভিন্ন এক্সপোজার তৈরি করে।
- **যা এটি পারে না:** একটি ব্যবসার মূল্যায়ন (অ ২১-এর DCF ২২.৫৯–৫৩.৩০ টাকায় দোলে), কখন কিনবেন বলা (পর্ব ১; পর্ব ৩), বা যা কখনো প্রকাশ করা হয়নি তা দেখা। **এটি ধাপ না এড়ানোর শৃঙ্খলা, বিচারবুদ্ধির বিকল্প নয়।**
- **প্রতিষ্ঠিত শৃঙ্খলা:** দাম দেখার আগে ধাপ ১ সম্পূর্ণ করুন, মোট নয় স্তম্ভের স্কোর লিপিবদ্ধ করুন, এবং পছন্দের কোম্পানি ব্যর্থ হয়েছে বলে কখনো ওজন সমন্বয় করবেন না — মতভেদটি লিখে রাখুন, প্রত্যাখ্যান মেনে নিন, আর দুই বছর পর দেখুন কে ভুল ছিল।`,
    },
  },

  interview: [
    {
      q: {
        en: 'Why must the gates run before any scoring, rather than being heavily weighted inputs?',
        bn: 'গেটগুলো ভারীভাবে ওজনায়িত উপাদান না হয়ে কেন যেকোনো স্কোরিংয়ের আগে চলতে হবে?',
      },
      a: {
        en: 'Because a weighted input can be outvoted and a gate cannot, and the gates test conditions where compensation is meaningless. An adverse audit opinion means the numbers feeding every other pillar are unreliable, so scoring them is arithmetic on fiction. ADTV below fifty lakh means you cannot exit the position, which no amount of cheapness improves. Structurally the gate must evaluate first and return before the pillars are consulted — in the code the verdict function checks the gate list and returns immediately. Move that check below the score and you have built a system that will eventually recommend a company whose auditor refused to certify its accounts, because it happened to look cheap.',
        bn: 'কারণ ভারিত উপাদানকে ভোটে হারানো যায়, গেটকে যায় না, আর গেটগুলো এমন শর্ত পরীক্ষা করে যেখানে ক্ষতিপূরণ অর্থহীন। বিরূপ নিরীক্ষা মতামত মানে বাকি প্রতিটি স্তম্ভে যাওয়া সংখ্যাগুলো অনির্ভরযোগ্য, তাই সেগুলো স্কোর করা কল্পকাহিনির ওপর পাটিগণিত। পঞ্চাশ লক্ষের নিচে ADTV মানে আপনি পজিশন থেকে বেরোতে পারবেন না, যা কোনো পরিমাণ সস্তা হওয়া উন্নত করে না। কাঠামোগতভাবে গেটকে আগে মূল্যায়িত হয়ে স্তম্ভ দেখার আগেই ফেরত দিতে হবে — কোডে verdict ফাংশন গেট তালিকা যাচাই করে তৎক্ষণাৎ ফেরত দেয়। ঐ যাচাই স্কোরের নিচে সরান, আর আপনি এমন ব্যবস্থা বানালেন যা শেষ পর্যন্ত এমন কোম্পানি সুপারিশ করবে যার নিরীক্ষক হিসাব প্রত্যয়ন করতে অস্বীকার করেছেন, কেবল কারণ সেটি সস্তা দেখাচ্ছিল।',
      },
    },
    {
      q: {
        en: 'Explain the quality floor and why it is not simply a large weight on quality.',
        bn: 'গুণমান-মেঝে ব্যাখ্যা করুন এবং কেন এটি কেবল গুণমানের ওপর একটি বড় ওজন নয়।',
      },
      a: {
        en: 'The floor rejects any company scoring below twenty-four of forty on quality, for all valuations, irrespective of the total. A large weight would not achieve that, because a sufficiently extreme score elsewhere could still compensate — and valuation is exactly where extreme scores cluster, since the cheapest companies are disproportionately the ones with something wrong. The worked case makes it concrete: Beta Textile earns the maximum possible thirty on valuation and would reach fifty in total, which under a naive equal-weighted model sits above a reject line. The floor makes the rejection independent of price entirely, so there is no valuation at which Beta becomes investable. It is the same architecture as Chapter 24\'s hard disqualifier — a constraint that can be outvoted is not a constraint.',
        bn: 'মেঝে গুণমানে চল্লিশের মধ্যে চব্বিশের নিচে পাওয়া যেকোনো কোম্পানিকে প্রত্যাখ্যান করে, সব মূল্যায়নের জন্য, মোট নির্বিশেষে। একটি বড় ওজন তা অর্জন করত না, কারণ অন্যত্র যথেষ্ট চরম স্কোর তবুও পুষিয়ে দিতে পারত — আর মূল্যায়নই ঠিক সেই জায়গা যেখানে চরম স্কোর জমা হয়, যেহেতু সবচেয়ে সস্তা কোম্পানিগুলোর মধ্যে অসামঞ্জস্যপূর্ণভাবে বেশি সেগুলো যাদের কিছু গোলমাল আছে। উদাহরণটি বিষয়টি বাস্তব করে: বিটা টেক্সটাইল মূল্যায়নে সম্ভাব্য সর্বোচ্চ ত্রিশ পায় ও মোট পঞ্চাশে পৌঁছাত, যা সরল সমান-ভারিত মডেলে প্রত্যাখ্যান রেখার ওপরে বসে। মেঝে প্রত্যাখ্যানটিকে দাম থেকে সম্পূর্ণ স্বাধীন করে, তাই এমন কোনো মূল্যায়ন নেই যেখানে বিটা বিনিয়োগযোগ্য হয়। এটি অধ্যায় ২৪-এর কঠোর অযোগ্যতারই স্থাপত্য — যে সীমাবদ্ধতাকে ভোটে হারানো যায় তা সীমাবদ্ধতা নয়।',
      },
    },
    {
      q: {
        en: 'Why is the valuation pillar capped at 30 of 100?',
        bn: 'মূল্যায়ন স্তম্ভ কেন ১০০-এর মধ্যে ৩০-এ সীমাবদ্ধ?',
      },
      a: {
        en: 'So that cheapness alone cannot reach a buy score, and so that an extreme on one dimension cannot purchase rank. Beta Textile\'s raw valuation arithmetic comes to thirty-four point four against a thirty-point pillar — uncapped, that surplus flows straight into the total and lifts it to within a couple of points of a company that clears every gate and meets the quality floor. The cap converts an unbounded advantage into a bounded one. It also encodes a substantive claim from Chapter 18: a low multiple is more often the market pricing a problem you have not yet found than an opportunity it has missed, so the model should treat extreme cheapness with suspicion rather than reward it linearly.',
        bn: 'যাতে কেবল সস্তা হয়ে ক্রয়-স্কোরে পৌঁছানো না যায়, এবং একটি মাত্রার চরম মান যাতে ক্রম কিনতে না পারে। বিটা টেক্সটাইলের কাঁচা মূল্যায়ন পাটিগণিত ত্রিশ পয়েন্টের স্তম্ভের বিপরীতে চৌত্রিশ দশমিক চারে দাঁড়ায় — সীমাহীন হলে ঐ উদ্বৃত্ত সরাসরি মোটে ঢুকে তাকে প্রতিটি গেট পার করা ও গুণমান-মেঝে পূরণ করা কোম্পানির কয়েক পয়েন্টের মধ্যে তুলে আনে। সীমা একটি অসীম সুবিধাকে সীমাবদ্ধ সুবিধায় রূপান্তরিত করে। এটি অধ্যায় ১৮-এর একটি বস্তুগত দাবিও সংকেতবদ্ধ করে: কম গুণিতক বাজারের হাতছাড়া সুযোগের চেয়ে বেশি বার এমন সমস্যার দাম যা আপনি এখনো খুঁজে পাননি, তাই মডেলের উচিত চরম সস্তাকে রৈখিকভাবে পুরস্কৃত না করে সন্দেহ নিয়ে দেখা।',
      },
    },
    {
      q: {
        en: 'Your scorecard ranks the most expensive company first and the cheapest last. Is that a bug?',
        bn: 'আপনার স্কোরকার্ড সবচেয়ে দামি কোম্পানিকে প্রথমে ও সবচেয়ে সস্তাকে শেষে রাখে। এটি কি একটি ত্রুটি?',
      },
      a: {
        en: 'No, it is the design working, and I would be more worried by the opposite result. Sorted by P/E ascending the universe runs Delta at five point one, Beta at six point eight, Gamma at seven point nine and Alpha at fourteen point two — and the verdicts are two rejections, a watch, and one buy on the most expensive name. That inversion follows directly from what the earlier chapters established: Delta fails four gates including a disclaimer of opinion and Z category, and Beta converts thirty-one paisa of each taka of profit into cash while its governance severity runs at sixty-six percent. Both are cheap for reasons the framework surfaces. If a scorecard reliably ranked the cheapest names highest it would simply be a P/E screen with extra steps, and it would buy precisely the companies Chapter 24 warns about.',
        bn: 'না, এটি নকশার কাজ করা, আর বিপরীত ফলাফলে আমি বেশি উদ্বিগ্ন হতাম। P/E আরোহী ক্রমে তালিকাটি দাঁড়ায় ডেল্টা পাঁচ দশমিক এক, বিটা ছয় দশমিক আট, গামা সাত দশমিক নয় ও আলফা চোদ্দ দশমিক দুই — আর রায় হলো দুটি প্রত্যাখ্যান, একটি নজরদারি, এবং সবচেয়ে দামি নামটিতে একটি ক্রয়। এই উল্টে যাওয়া সরাসরি আগের অধ্যায়গুলো থেকে আসে: ডেল্টা মতামতের দাবিত্যাগ ও Z শ্রেণিসহ চারটি গেটে ব্যর্থ, আর বিটা মুনাফার প্রতি টাকার একত্রিশ পয়সা নগদে রূপান্তর করে যখন তার গভর্ন্যান্স তীব্রতা ছেষট্টি শতাংশ। দুটিই এমন কারণে সস্তা যা কাঠামোটি সামনে আনে। কোনো স্কোরকার্ড যদি নির্ভরযোগ্যভাবে সবচেয়ে সস্তা নামগুলোকে সর্বোচ্চ ক্রমে রাখত তবে তা বাড়তি ধাপসহ একটি P/E স্ক্রিন মাত্র হতো, আর ঠিক সেই কোম্পানিগুলোই কিনত যাদের বিষয়ে অধ্যায় ২৪ সতর্ক করে।',
      },
    },
    {
      q: {
        en: 'What can this scorecard not do?',
        bn: 'এই স্কোরকার্ড কী করতে পারে না?',
      },
      a: {
        en: 'Four things, and stating them is part of using it honestly. It cannot value a business — Chapter 21 showed a defensible DCF swinging from twenty-two to fifty-three taka a share on assumptions nobody could call unreasonable, so a hundred-point score is a ranking, not a price. It cannot tell you when to buy; Part One established that an excellent company purchased in the wrong market phase still lost sixty percent, and timing belongs to the cycle work and to Part Three. It cannot see anything that was never disclosed, since every input is a number an interested party published. And it cannot replace reading the annual report — the scorecard is what you complete afterwards, and it will never tell you what the individual flags have in common, which is Chapter 24\'s sentence test and usually the most informative output of the whole exercise.',
        bn: 'চারটি জিনিস, আর সেগুলো বলা সৎভাবে এটি ব্যবহারের অংশ। এটি একটি ব্যবসার মূল্যায়ন করতে পারে না — অধ্যায় ২১ দেখিয়েছে অযৌক্তিক বলা যায় না এমন অনুমানে একটি সমর্থনযোগ্য DCF শেয়ারপ্রতি বাইশ থেকে তিপ্পান্ন টাকায় দুলছে, তাই একশো পয়েন্টের স্কোর একটি ক্রম, দাম নয়। এটি বলতে পারে না কখন কিনবেন; পর্ব এক প্রতিষ্ঠা করেছে ভুল বাজার পর্যায়ে কেনা চমৎকার কোম্পানিও ষাট শতাংশ হারিয়েছে, আর সময় নির্ধারণ চক্রের কাজ ও পর্ব তিনের বিষয়। যা কখনো প্রকাশ করা হয়নি তা এটি দেখতে পারে না, যেহেতু প্রতিটি উপাদান একটি স্বার্থসংশ্লিষ্ট পক্ষের প্রকাশিত সংখ্যা। আর এটি বার্ষিক প্রতিবেদন পড়ার বিকল্প নয় — স্কোরকার্ড হলো যা আপনি পরে পূরণ করেন, আর এটি কখনো বলবে না পৃথক সংকেতগুলোতে কী মিল, যা অধ্যায় ২৪-এর বাক্য পরীক্ষা এবং সাধারণত পুরো অনুশীলনের সবচেয়ে তথ্যবহুল ফলাফল।',
      },
    },
    {
      q: {
        en: 'A company you like fails the quality floor. What do you do?',
        bn: 'আপনার পছন্দের একটি কোম্পানি গুণমান-মেঝেতে ব্যর্থ হয়। আপনি কী করবেন?',
      },
      a: {
        en: 'Take the rejection, and specifically do not adjust the weights. The temptation to re-tune a framework the moment it disagrees with you is what destroys its value, because a model refitted after every disagreement only ever describes your last opinion. What I would do instead is write down why I disagree — which component I think is mis-scored and what evidence would settle it — date it, and file it with the scorecard. That converts a feeling into a testable claim. In two years I can look back and establish whether the framework was wrong or I was, and in my experience it is usually the second. If after that review the weights genuinely need changing, I change them once, for a stated reason, and date the change.',
        bn: 'প্রত্যাখ্যানটি মেনে নেব, এবং বিশেষভাবে ওজন সমন্বয় করব না। কাঠামোটি আপনার সঙ্গে দ্বিমত করার মুহূর্তেই তা পুনর্নির্ধারণের প্রলোভনই এর মূল্য ধ্বংস করে, কারণ প্রতিটি মতভেদের পর পুনঃসন্নিবেশিত মডেল কেবল আপনার শেষ মতামতই বর্ণনা করে। বরং আমি লিখে রাখব কেন দ্বিমত — কোন উপাদানটি ভুল স্কোর পেয়েছে বলে মনে করি এবং কোন প্রমাণ বিষয়টি মীমাংসা করত — তারিখ দেব, ও স্কোরকার্ডের সঙ্গে রাখব। এটি একটি অনুভূতিকে পরীক্ষণযোগ্য দাবিতে রূপান্তরিত করে। দুই বছর পর আমি ফিরে দেখে প্রতিষ্ঠা করতে পারব কাঠামোটি ভুল ছিল না আমি, আর আমার অভিজ্ঞতায় সাধারণত দ্বিতীয়টি। ঐ পর্যালোচনার পর ওজন সত্যিই বদলানোর প্রয়োজন হলে আমি একবার বদলাই, একটি ঘোষিত কারণে, এবং পরিবর্তনটির তারিখ দিই।',
      },
    },
  ],

  quiz: [
    {
      q: {
        en: 'In the staged scorecard, what happens when a hard gate fails?',
        bn: 'ধাপে ভাগ করা স্কোরকার্ডে কোনো কঠোর গেট ব্যর্থ হলে কী হয়?',
      },
      options: {
        en: [
          'Points are deducted from the total',
          'The analysis ends with no score computed',
          'The quality pillar is halved',
          'The company moves to WATCH',
        ],
        bn: [
          'মোট থেকে পয়েন্ট কাটা হয়',
          'কোনো স্কোর গণনা ছাড়াই বিশ্লেষণ শেষ হয়',
          'গুণমান স্তম্ভ অর্ধেক হয়',
          'কোম্পানি নজরদারিতে যায়',
        ],
      },
      answer: 1,
    },
    {
      q: { en: 'The valuation pillar is capped at:', bn: 'মূল্যায়ন স্তম্ভ সীমাবদ্ধ:' },
      options: { en: ['20 of 100', '30 of 100', '40 of 100', 'Uncapped'], bn: ['১০০-এর মধ্যে ২০', '১০০-এর মধ্যে ৩০', '১০০-এর মধ্যে ৪০', 'সীমাহীন'] },
      answer: 1,
    },
    {
      q: {
        en: 'The quality floor rejects a company scoring below:',
        bn: 'গুণমান-মেঝে প্রত্যাখ্যান করে এর নিচে স্কোর করা কোম্পানিকে:',
      },
      options: { en: ['16 of 40', '20 of 40', '24 of 40', '30 of 40'], bn: ['৪০-এর মধ্যে ১৬', '৪০-এর মধ্যে ২০', '৪০-এর মধ্যে ২৪', '৪০-এর মধ্যে ৩০'] },
      answer: 2,
    },
    {
      q: {
        en: 'Which of these is NOT a Stage 1 hard gate?',
        bn: 'এদের মধ্যে কোনটি ধাপ ১-এর কঠোর গেট নয়?',
      },
      options: {
        en: ['Z category', 'ADTV below BDT 50 lakh', 'A P/E above 25', 'Adverse audit opinion'],
        bn: ['Z শ্রেণি', 'ADTV ৫০ লক্ষ টাকার নিচে', '২৫-এর ওপরে P/E', 'বিরূপ নিরীক্ষা মতামত'],
      },
      answer: 2,
    },
    {
      q: {
        en: 'Beta Textile scores the maximum 30.0 on valuation. Its verdict is:',
        bn: 'বিটা টেক্সটাইল মূল্যায়নে সর্বোচ্চ ৩০.০ পায়। এর রায়:',
      },
      options: {
        en: ['BUY candidate', 'WATCH', 'REJECT', 'PASS with monitoring'],
        bn: ['ক্রয় প্রার্থী', 'নজরদারি', 'প্রত্যাখ্যান', 'নজরদারিসহ বাদ'],
      },
      answer: 2,
    },
    {
      q: {
        en: 'A total score of 64.2 with all gates passed and quality met gives a verdict of:',
        bn: 'সব গেট পার ও গুণমান পূরণসহ ৬৪.২ মোট স্কোরের রায়:',
      },
      options: { en: ['BUY candidate', 'WATCH', 'REJECT', 'PASS'], bn: ['ক্রয় প্রার্থী', 'নজরদারি', 'প্রত্যাখ্যান', 'বাদ'] },
      answer: 1,
    },
    {
      q: {
        en: 'The position size multiplier for a score of 81.31 is approximately:',
        bn: '৮১.৩১ স্কোরের পজিশন আকার গুণক প্রায়:',
      },
      options: { en: ['0.55', '0.71', '0.88', '1.00'], bn: ['০.৫৫', '০.৭১', '০.৮৮', '১.০০'] },
      answer: 2,
    },
    {
      q: {
        en: 'EV/EBITDA for a bank should be:',
        bn: 'ব্যাংকের জন্য EV/EBITDA হওয়া উচিত:',
      },
      options: {
        en: [
          'Scored normally',
          'Treated as not meaningful, per Chapter 23',
          'Doubled in weight',
          'Used instead of P/E',
        ],
        bn: [
          'স্বাভাবিকভাবে স্কোর করা',
          'অধ্যায় ২৩ অনুযায়ী অর্থবহ নয় হিসেবে গণ্য',
          'ওজনে দ্বিগুণ করা',
          'P/E-র বদলে ব্যবহার করা',
        ],
      },
      answer: 1,
    },
    {
      q: {
        en: 'Sorted by P/E ascending, the scorecard\'s only BUY is:',
        bn: 'P/E আরোহী ক্রমে সাজালে স্কোরকার্ডের একমাত্র ক্রয়:',
      },
      options: {
        en: ['The cheapest name', 'The second cheapest', 'The most expensive name', 'None of them'],
        bn: ['সবচেয়ে সস্তা নাম', 'দ্বিতীয় সস্তা', 'সবচেয়ে দামি নাম', 'কোনোটিই নয়'],
      },
      answer: 2,
    },
    {
      q: {
        en: 'The scorecard is best described as:',
        bn: 'স্কোরকার্ডকে সবচেয়ে ভালোভাবে বর্ণনা করা যায়:',
      },
      options: {
        en: [
          'A valuation model',
          'A market timing tool',
          'A discipline for not skipping steps',
          'A replacement for reading the annual report',
        ],
        bn: [
          'একটি মূল্যায়ন মডেল',
          'একটি বাজার সময় নির্ধারণের হাতিয়ার',
          'ধাপ না এড়ানোর একটি শৃঙ্খলা',
          'বার্ষিক প্রতিবেদন পড়ার বিকল্প',
        ],
      },
      answer: 2,
    },
  ],
};
