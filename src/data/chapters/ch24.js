/**
 * Chapter 24 — Corporate Governance & Red Flags
 * Part II, Fundamental Analysis.
 */

export default {
  n: 24,
  tools: [],

  excelSheet: {
    filename: 'ch24-governance-red-flag-scorecard.xlsx',
    sheetName: 'Red Flags',
    cells: [
      { cell: 'A1', v: 'RED FLAG' }, { cell: 'B1', v: 'Present (1/0)' },
      { cell: 'C1', v: 'Weight' }, { cell: 'D1', v: 'Score' }, { cell: 'E1', v: 'Source' },

      { cell: 'A2', v: 'Qualified / adverse audit opinion' }, { cell: 'B2', v: 0 },
      { cell: 'C2', v: 10 }, { cell: 'D2', f: 'B2*C2' }, { cell: 'E2', v: 'Auditor report' },

      { cell: 'A3', v: 'Going-concern or emphasis-of-matter para' }, { cell: 'B3', v: 1 },
      { cell: 'C3', v: 8 }, { cell: 'D3', f: 'B3*C3' }, { cell: 'E3', v: 'Auditor report' },

      { cell: 'A4', v: 'Auditor changed within 3 years' }, { cell: 'B4', v: 1 },
      { cell: 'C4', v: 7 }, { cell: 'D4', f: 'B4*C4' }, { cell: 'E4', v: 'AGM notices' },

      { cell: 'A5', v: 'Auditor not on FRC panel / low tier' }, { cell: 'B5', v: 1 },
      { cell: 'C5', v: 6 }, { cell: 'D5', f: 'B5*C5' }, { cell: 'E5', v: 'FRC list' },

      { cell: 'A6', v: 'Sponsor holding fell >5pp in 12m' }, { cell: 'B6', v: 1 },
      { cell: 'C6', v: 9 }, { cell: 'D6', f: 'B6*C6' }, { cell: 'E6', v: 'DSE disclosure' },

      { cell: 'A7', v: 'Sponsor holding below 30% requirement' }, { cell: 'B7', v: 0 },
      { cell: 'C7', v: 8 }, { cell: 'D7', f: 'B7*C7' }, { cell: 'E7', v: 'DSE disclosure' },

      { cell: 'A8', v: 'Related-party receivables >15% of equity' }, { cell: 'B8', v: 1 },
      { cell: 'C8', v: 8 }, { cell: 'D8', f: 'B8*C8' }, { cell: 'E8', v: 'Notes to accounts' },

      { cell: 'A9', v: 'CFO or Company Secretary changed twice in 3y' }, { cell: 'B9', v: 1 },
      { cell: 'C9', v: 6 }, { cell: 'D9', f: 'B9*C9' }, { cell: 'E9', v: 'Price-sensitive info' },

      { cell: 'A10', v: 'Independent directors below Code minimum' }, { cell: 'B10', v: 0 },
      { cell: 'C10', v: 5 }, { cell: 'D10', f: 'B10*C10' }, { cell: 'E10', v: 'CG compliance report' },

      { cell: 'A11', v: 'Chairman and MD same person / same family' }, { cell: 'B11', v: 1 },
      { cell: 'C11', v: 4 }, { cell: 'D11', f: 'B11*C11' }, { cell: 'E11', v: 'Directors report' },

      { cell: 'A12', v: 'Accounts filed late / AGM delayed' }, { cell: 'B12', v: 1 },
      { cell: 'C12', v: 7 }, { cell: 'D12', f: 'B12*C12' }, { cell: 'E12', v: 'DSE news' },

      { cell: 'A13', v: 'Other income > 25% of net profit' }, { cell: 'B13', v: 1 },
      { cell: 'C13', v: 6 }, { cell: 'D13', f: 'B13*C13' }, { cell: 'E13', v: 'Income statement' },

      { cell: 'A14', v: 'Cash conversion (NOCF/NP) below 0.5' }, { cell: 'B14', v: 1 },
      { cell: 'C14', v: 8 }, { cell: 'D14', f: 'B14*C14' }, { cell: 'E14', v: 'Cash flow stmt' },

      { cell: 'A15', v: 'Repeated equity raises, ROE not improving' }, { cell: 'B15', v: 0 },
      { cell: 'C15', v: 6 }, { cell: 'D15', f: 'B15*C15' }, { cell: 'E15', v: 'Multi-year' },

      { cell: 'A16', v: 'Directors pledged shares against loans' }, { cell: 'B16', v: 0 },
      { cell: 'C16', v: 7 }, { cell: 'D16', f: 'B16*C16' }, { cell: 'E16', v: 'CDBL / disclosure' },

      { cell: 'A18', v: 'TOTAL SCORE' }, { cell: 'B18', f: 'SUM(D2:D16)' },
      { cell: 'A19', v: 'MAXIMUM POSSIBLE' }, { cell: 'B19', f: 'SUM(C2:C16)' },
      { cell: 'A20', v: 'SEVERITY (%)' }, { cell: 'B20', f: 'B18/B19*100' },

      { cell: 'A22', v: 'HARD DISQUALIFIERS PRESENT' }, { cell: 'B22', f: 'B2+B7+B12' },
      { cell: 'A24', v: 'VERDICT' },
      {
        cell: 'B24',
        f: 'IF(B22>0,"REJECT - hard disqualifier present, no score needed",IF(B20>40,"REJECT - governance severity too high",IF(B20>20,"WATCH - elevated, size down","Acceptable")))',
      },
    ],
  },

  objectives: {
    en: [
      'State what the BSEC Corporate Governance Code requires and what compliance with it does not prove.',
      'Distinguish hard disqualifiers, which end the analysis, from weighted flags, which reduce position size.',
      'Read the auditor’s report, the related-party note, and the sponsor-holding disclosure as a connected set.',
      'Build and apply a weighted governance red-flag scorecard with an explicit rejection threshold.',
      'Explain why governance failure precedes financial failure in the reported numbers.',
    ],
    bn: [
      'বিএসইসি কর্পোরেট গভর্ন্যান্স কোড কী দাবি করে এবং তা মেনে চলা কী প্রমাণ করে না তা বলা।',
      'কঠোর অযোগ্যতা — যা বিশ্লেষণ শেষ করে দেয় — এবং ভারিত সংকেত — যা পজিশনের আকার কমায় — এদের পার্থক্য করা।',
      'নিরীক্ষকের প্রতিবেদন, সম্পর্কিত-পক্ষের নোট ও উদ্যোক্তা মালিকানার প্রকাশনাকে একটি সংযুক্ত সেট হিসেবে পড়া।',
      'স্পষ্ট প্রত্যাখ্যান সীমাসহ একটি ভারিত গভর্ন্যান্স বিপদ-সংকেত স্কোরকার্ড তৈরি ও প্রয়োগ করা।',
      'কেন প্রতিবেদিত সংখ্যায় আর্থিক ব্যর্থতার আগে গভর্ন্যান্স ব্যর্থতা আসে তা ব্যাখ্যা করা।',
    ],
  },

  blocks: {
    theory: {
      en: `Chapters 10 through 23 taught you to read what a company reports. This chapter is about whether you should believe it.

**Every number in Part II is produced by people with an interest in how it looks.** Governance analysis is not a soft, qualitative supplement to the financial work — it is the check on whether the financial work is worth doing at all.

### The regulatory frame

The **BSEC Corporate Governance Code (2018)**, issued by notification and amended since, sets out the required structure. Its principal requirements (verify current form on sec.gov.bd — this Code has been revised and will be again):

| Requirement | Broad content |
|---|---|
| Board size | Between 5 and 20 directors |
| Independent directors | At least one-fifth of the board |
| Chairman and MD/CEO | Must be separate persons with separately defined roles |
| Audit Committee | Chaired by an independent director |
| Nomination & Remuneration Committee (NRC) | Chaired by an independent director |
| CG compliance certificate | Issued annually by a practising professional |
| Sponsor/director holding | Combined minimum 30% of paid-up capital; 2% per individual director |

**Now the essential point.** A company can satisfy every line of that table and still be a vehicle for extracting value from minority shareholders.

Compliance is a **necessary condition, not a sufficient one**. The Code governs *structure*. It does not govern *conduct*, and the two are only loosely related. An independent director who was appointed by the sponsor family, is paid by the company, and has served nine years is independent in the compliance certificate and nowhere else.

**Read the compliance report to find out what is missing. Read everything else to find out what is happening.**

### Where the real signal is

Governance evidence is scattered across documents that are individually unremarkable and collectively damning. The skill is reading them as a set.

**1. The auditor's report — read it first, always.**
Chapter 9 established the order. The opinion type is the single highest-information sentence in the annual report:

- **Unqualified** — the accounts present fairly. This is the baseline, not a compliment.
- **Emphasis of matter** — the opinion is clean, but the auditor is pointing at something. *Read the paragraph. It is there because the auditor wanted it on record.*
- **Qualified** — something specific is wrong or unverifiable.
- **Adverse / disclaimer** — the accounts cannot be relied upon. **This is not a flag to weigh. It is the end of the analysis.**

**2. Who the auditor is, and how long they have been there.** The **Financial Reporting Council (FRC)** maintains a panel of auditors eligible to audit listed entities. An auditor outside that panel, or one with no other listed clients of comparable size, is a signal. So is a change of auditor immediately before or after a difficult year — **auditor shopping leaves a trail in AGM notices.**

**3. Related-party transactions.** Disclosed in the notes. The question is never "are there related-party transactions" — in a family-controlled market, of course there are. The question is **direction and permanence**: is the listed company *lending to* related parties and not being repaid? Related-party receivables that grow every year and are never settled are a transfer of shareholder capital to a private entity, executed in plain sight.

**4. Sponsor and director dealings.** Chapter 5 argued this is the highest-quality signal on the exchange. It belongs here too, because sustained sponsor selling is a governance datum, not just a trading one: the people with the best information and a legal duty to the company are reducing their stake.

**5. Officer turnover.** A CFO or Company Secretary who leaves twice in three years is a fact disclosed through price-sensitive announcements. Finance officers resign over things they cannot sign.

**6. Filing discipline.** Late accounts, postponed AGMs, and delayed dividend distribution are disclosed on the DSE news page. **A company that cannot file on time is telling you about its controls before it tells you about its earnings.**

### Hard disqualifiers versus weighted flags

The most common error in governance analysis is treating all findings as points on a scale. **Some findings are not scoreable — they are terminal.**

**Hard disqualifiers** — if any one is present, the analysis stops and the company is not investable, regardless of valuation:

- An **adverse opinion or a disclaimer of opinion**
- Sponsor/director holding **below the 30% requirement** without a credible remediation timetable
- **Accounts not filed** or AGM not held within the statutory period
- Regulatory finding of **manipulation or misstatement** against the company or its directors

Everything else is a weighted flag, which reduces position size rather than ending the enquiry.

**Why the distinction matters.** A scoring model that puts an adverse opinion at, say, 10 points out of 100 will let a company with a worthless audit pass because it scores well elsewhere. **A number that can be outvoted is not a disqualifier.** Structure the model so terminal findings bypass the score entirely.

### Governance failure precedes financial failure

This is the chapter's central claim, and it is what makes the work worth doing.

By the time a company's numbers show distress, the loss has happened. Governance deterioration is observable earlier, because it appears in documents that are filed before the damage is recognised in the accounts:

| Sequence | Observable |
|---|---|
| **T−24 months** | Auditor changed; CFO resigns; related-party receivables begin growing |
| **T−12 months** | Emphasis of matter appears; sponsor holding starts falling; accounts filed late |
| **T−6 months** | Qualified opinion; AGM postponed; dividend cut or paid in stock only |
| **T = 0** | Loss reported; Z-category migration; price collapses |
| **T+6 months** | Newspaper coverage explains what happened |

**Every row above T=0 was public and free.** Chapter 4 established that Z-category migration forces simultaneous liquidation by every margin holder — and Chapter 5 established what a forced-seller cascade does to price. The governance signals in the earlier rows are the advance warning of exactly that event.

**The reason retail investors are surprised by these outcomes is not that the information was hidden. It is that reading it requires opening four documents instead of looking at one price.**`,
      bn: `অধ্যায় ১০ থেকে ২৩ আপনাকে শিখিয়েছে একটি কোম্পানি কী প্রতিবেদন করে তা পড়তে। এই অধ্যায় হলো আপনার তা বিশ্বাস করা উচিত কি না তা নিয়ে।

**পর্ব ২-এর প্রতিটি সংখ্যা এমন মানুষদের তৈরি যাঁদের স্বার্থ আছে তা কেমন দেখায় তাতে।** গভর্ন্যান্স বিশ্লেষণ আর্থিক কাজের কোনো নরম, গুণগত সংযোজন নয় — এটি হলো আর্থিক কাজটি আদৌ করার যোগ্য কি না তার যাচাই।

### নিয়ন্ত্রক কাঠামো

**বিএসইসি কর্পোরেট গভর্ন্যান্স কোড (২০১৮)**, প্রজ্ঞাপনের মাধ্যমে জারি ও পরে সংশোধিত, প্রয়োজনীয় কাঠামো নির্ধারণ করে। এর প্রধান শর্তাবলি (sec.gov.bd-তে বর্তমান রূপ যাচাই করুন — এই কোড সংশোধিত হয়েছে এবং আবারও হবে):

| শর্ত | বিস্তৃত বিষয়বস্তু |
|---|---|
| বোর্ডের আকার | ৫ থেকে ২০ জন পরিচালক |
| স্বাধীন পরিচালক | বোর্ডের অন্তত এক-পঞ্চমাংশ |
| চেয়ারম্যান ও এমডি/সিইও | পৃথক ব্যক্তি হতে হবে, পৃথকভাবে সংজ্ঞায়িত ভূমিকাসহ |
| নিরীক্ষা কমিটি | একজন স্বাধীন পরিচালকের সভাপতিত্বে |
| মনোনয়ন ও পারিশ্রমিক কমিটি (NRC) | একজন স্বাধীন পরিচালকের সভাপতিত্বে |
| সিজি সম্মতি সনদ | একজন অনুশীলনরত পেশাজীবী কর্তৃক বার্ষিক প্রদত্ত |
| উদ্যোক্তা/পরিচালক মালিকানা | পরিশোধিত মূলধনের সম্মিলিত ন্যূনতম ৩০%; প্রতি পরিচালকে ২% |

**এবার গুরুত্বপূর্ণ কথাটি।** একটি কোম্পানি ঐ টেবিলের প্রতিটি লাইন পূরণ করেও সংখ্যালঘু শেয়ারহোল্ডারদের কাছ থেকে মূল্য নিষ্কাশনের বাহন হতে পারে।

সম্মতি একটি **প্রয়োজনীয় শর্ত, যথেষ্ট শর্ত নয়**। কোড *কাঠামো* নিয়ন্ত্রণ করে। এটি *আচরণ* নিয়ন্ত্রণ করে না, আর দুটির সম্পর্ক শিথিল। যে স্বাধীন পরিচালক উদ্যোক্তা পরিবার কর্তৃক নিযুক্ত, কোম্পানি কর্তৃক বেতনভুক্ত, এবং নয় বছর ধরে দায়িত্বে — তিনি সম্মতি সনদে স্বাধীন, আর কোথাও নন।

**কী অনুপস্থিত তা জানতে সম্মতি প্রতিবেদন পড়ুন। কী ঘটছে তা জানতে বাকি সবকিছু পড়ুন।**

### প্রকৃত সংকেত কোথায়

গভর্ন্যান্সের প্রমাণ এমন সব নথিতে ছড়িয়ে থাকে যেগুলো এককভাবে সাধারণ আর সম্মিলিতভাবে অকাট্য। দক্ষতা হলো এদের একটি সেট হিসেবে পড়া।

**১. নিরীক্ষকের প্রতিবেদন — সবসময় এটিই আগে পড়ুন।**
অধ্যায় ৯ ক্রমটি প্রতিষ্ঠা করেছে। মতামতের ধরনই বার্ষিক প্রতিবেদনের সর্বোচ্চ-তথ্যবহুল একক বাক্য:

- **অযোগ্যতাবিহীন (Unqualified)** — হিসাব ন্যায্যভাবে উপস্থাপিত। এটি ভিত্তিরেখা, প্রশংসা নয়।
- **এমফ্যাসিস অব ম্যাটার** — মতামত পরিষ্কার, কিন্তু নিরীক্ষক কিছু একটার দিকে আঙুল তুলছেন। *অনুচ্ছেদটি পড়ুন। এটি সেখানে আছে কারণ নিরীক্ষক তা নথিভুক্ত রাখতে চেয়েছেন।*
- **যোগ্যতাসহ (Qualified)** — নির্দিষ্ট কিছু ভুল বা যাচাই-অযোগ্য।
- **বিরূপ / দাবিত্যাগ** — হিসাবের ওপর নির্ভর করা যায় না। **এটি ওজন করার সংকেত নয়। এটি বিশ্লেষণের সমাপ্তি।**

**২. নিরীক্ষক কে, এবং কতদিন ধরে আছেন।** **ফিন্যান্সিয়াল রিপোর্টিং কাউন্সিল (FRC)** তালিকাভুক্ত সত্তা নিরীক্ষার যোগ্য নিরীক্ষকদের একটি প্যানেল রক্ষণাবেক্ষণ করে। ঐ প্যানেলের বাইরের নিরীক্ষক, বা তুলনীয় আকারের অন্য কোনো তালিকাভুক্ত ক্লায়েন্ট নেই এমন নিরীক্ষক, একটি সংকেত। একটি কঠিন বছরের ঠিক আগে বা পরে নিরীক্ষক পরিবর্তনও তাই — **নিরীক্ষক খোঁজাখুঁজি এজিএম নোটিশে চিহ্ন রেখে যায়।**

**৩. সম্পর্কিত-পক্ষের লেনদেন।** নোটে প্রকাশিত। প্রশ্নটি কখনোই "সম্পর্কিত-পক্ষের লেনদেন আছে কি" নয় — পরিবার-নিয়ন্ত্রিত বাজারে অবশ্যই আছে। প্রশ্নটি **দিক ও স্থায়িত্ব**: তালিকাভুক্ত কোম্পানি কি সম্পর্কিত পক্ষকে *ধার দিচ্ছে* এবং ফেরত পাচ্ছে না? যে সম্পর্কিত-পক্ষের প্রাপ্য প্রতি বছর বাড়ে ও কখনো নিষ্পত্তি হয় না, তা প্রকাশ্যে সম্পাদিত শেয়ারহোল্ডারের মূলধনের একটি ব্যক্তিগত সত্তায় স্থানান্তর।

**৪. উদ্যোক্তা ও পরিচালকের লেনদেন।** অধ্যায় ৫ যুক্তি দিয়েছে এটি এক্সচেঞ্জের সর্বোচ্চ মানের সংকেত। এটি এখানেও প্রাসঙ্গিক, কারণ ধারাবাহিক উদ্যোক্তা বিক্রয় কেবল লেনদেনের নয়, গভর্ন্যান্সেরও তথ্য: যাঁদের কাছে সেরা তথ্য এবং কোম্পানির প্রতি আইনি দায়িত্ব আছে, তাঁরা অংশীদারিত্ব কমাচ্ছেন।

**৫. কর্মকর্তার পরিবর্তন।** তিন বছরে দুবার পদত্যাগ করা সিএফও বা কোম্পানি সচিব মূল্য-সংবেদনশীল ঘোষণার মাধ্যমে প্রকাশিত একটি তথ্য। অর্থ কর্মকর্তারা এমন জিনিসে পদত্যাগ করেন যাতে তাঁরা স্বাক্ষর করতে পারেন না।

**৬. দাখিলের শৃঙ্খলা।** বিলম্বিত হিসাব, স্থগিত এজিএম ও বিলম্বিত লভ্যাংশ বিতরণ ডিএসই সংবাদ পাতায় প্রকাশিত হয়। **যে কোম্পানি সময়মতো দাখিল করতে পারে না, সে তার আয়ের কথা বলার আগেই তার নিয়ন্ত্রণব্যবস্থার কথা বলে দিচ্ছে।**

### কঠোর অযোগ্যতা বনাম ভারিত সংকেত

গভর্ন্যান্স বিশ্লেষণে সবচেয়ে সাধারণ ভুল হলো সব ফলাফলকে একটি মাপকাঠির বিন্দু হিসেবে গণ্য করা। **কিছু ফলাফল স্কোরযোগ্য নয় — সেগুলো চূড়ান্ত।**

**কঠোর অযোগ্যতা** — এর একটিও উপস্থিত থাকলে বিশ্লেষণ থামে এবং মূল্যায়ন যা-ই হোক কোম্পানিটি বিনিয়োগযোগ্য নয়:

- **বিরূপ মতামত বা মতামতের দাবিত্যাগ**
- বিশ্বাসযোগ্য প্রতিকারের সময়সূচি ছাড়াই **৩০% শর্তের নিচে** উদ্যোক্তা/পরিচালক মালিকানা
- বিধিবদ্ধ সময়ের মধ্যে **হিসাব দাখিল না হওয়া** বা এজিএম না হওয়া
- কোম্পানি বা তার পরিচালকদের বিরুদ্ধে **কারসাজি বা ভুল বিবৃতির** নিয়ন্ত্রক সিদ্ধান্ত

বাকি সব ভারিত সংকেত, যা অনুসন্ধান শেষ না করে পজিশনের আকার কমায়।

**পার্থক্যটি কেন গুরুত্বপূর্ণ।** যে স্কোরিং মডেল বিরূপ মতামতকে ধরুন ১০০-এর মধ্যে ১০ পয়েন্ট দেয়, তা মূল্যহীন নিরীক্ষার একটি কোম্পানিকে পাস করতে দেবে কারণ সে অন্যত্র ভালো স্কোর করেছে। **যে সংখ্যাকে ভোটে হারানো যায় তা অযোগ্যতা নয়।** মডেলটি এমনভাবে গঠন করুন যাতে চূড়ান্ত ফলাফল স্কোরকে সম্পূর্ণ এড়িয়ে যায়।

### আর্থিক ব্যর্থতার আগে গভর্ন্যান্স ব্যর্থতা আসে

এটিই অধ্যায়ের কেন্দ্রীয় দাবি, আর এ কারণেই কাজটি করার যোগ্য।

কোম্পানির সংখ্যায় যখন সংকট দেখা দেয়, ক্ষতি ততক্ষণে ঘটে গেছে। গভর্ন্যান্সের অবনতি আগেই পর্যবেক্ষণযোগ্য, কারণ তা এমন নথিতে দেখা দেয় যা হিসাবে ক্ষতি স্বীকৃত হওয়ার আগেই দাখিল হয়:

| ক্রম | পর্যবেক্ষণযোগ্য |
|---|---|
| **T−২৪ মাস** | নিরীক্ষক পরিবর্তন; সিএফও পদত্যাগ; সম্পর্কিত-পক্ষের প্রাপ্য বাড়তে শুরু |
| **T−১২ মাস** | এমফ্যাসিস অব ম্যাটার আসে; উদ্যোক্তা মালিকানা কমতে শুরু; হিসাব দেরিতে দাখিল |
| **T−৬ মাস** | যোগ্যতাসহ মতামত; এজিএম স্থগিত; লভ্যাংশ কর্তন বা কেবল স্টকে প্রদান |
| **T = ০** | লোকসান প্রতিবেদিত; Z-শ্রেণিতে স্থানান্তর; দাম ধসে পড়ে |
| **T+৬ মাস** | সংবাদপত্রের প্রতিবেদন ব্যাখ্যা করে কী ঘটেছিল |

**T=০-এর ওপরের প্রতিটি সারি প্রকাশ্য ও বিনামূল্যের ছিল।** অধ্যায় ৪ প্রতিষ্ঠা করেছে যে Z-শ্রেণিতে স্থানান্তর প্রতিটি মার্জিন ধারককে একযোগে বিক্রিতে বাধ্য করে — আর অধ্যায় ৫ প্রতিষ্ঠা করেছে বাধ্যতামূলক-বিক্রেতার ধারাবাহিক প্রতিক্রিয়া দামে কী করে। আগের সারিগুলোর গভর্ন্যান্স সংকেতই ঠিক ঐ ঘটনার আগাম সতর্কতা।

**খুচরা বিনিয়োগকারীরা এই পরিণতিতে বিস্মিত হন এ কারণে নয় যে তথ্য লুকানো ছিল। বরং এ কারণে যে তা পড়তে একটি দামের দিকে তাকানোর বদলে চারটি নথি খুলতে হয়।**`,
    },

    simple: {
      en: `Everything you learned to read in the last fourteen chapters was written by people who care how it looks.

That does not make them liars. It makes them interested parties. **Governance analysis is how you check whether the accounts are worth analysing.**

### The rules exist, and they are not enough

BSEC requires listed companies to have independent directors, an audit committee, a separate chairman and managing director, and sponsors holding at least 30% between them.

A company can tick every one of those boxes and still quietly move money to the owner's other businesses.

**The rules govern the shape of the board. They do not govern what the board does.** An "independent" director chosen by the owning family, paid by the company, sitting for nine years, is independent on paper only.

### The four documents that actually tell you

**1. What the auditor said.** Not the profit — the auditor's opinion on it. If the auditor says the accounts cannot be relied on, then nothing else in this book applies to that company. Stop.

**2. Who the company owes money to, and who owes money to the company.** Look for money the listed company has lent to the owner's *other* businesses that never comes back. That is your money leaving through a side door, and it is written down in the notes.

**3. Whether the owners are selling.** They built it. They know the next three quarters. If they are steadily reducing their stake, ask why before you increase yours.

**4. Whether things get filed on time.** Late accounts. Postponed AGM. A finance chief who quits twice in three years. **These are small, boring facts that arrive long before the bad news does.**

### The one distinction that matters

Some problems are worth a penalty. Some end the conversation.

If a director sold shares, that is a penalty — hold less, watch more.

If the auditor refuses to sign off on the accounts, **that is not a penalty. That is the end.** No price is low enough to fix accounts that cannot be relied upon.

The mistake almost everyone makes is putting both into the same scoring system, where a fatal problem gets outvoted by five good marks elsewhere.

### Why bother

Because the warnings come early and the collapse comes late.

The auditor changes. The CFO leaves. Receivables to the owner's other company creep up. The AGM slips. **Two years later** the loss is announced, the share moves to Z category, everyone holding it on margin is forced to sell at once, and the price collapses.

Then the newspaper explains it.

**All of it was public. Free. Filed. Nobody read it** — because reading it meant opening four documents instead of looking at one price.`,
      bn: `গত চৌদ্দ অধ্যায়ে আপনি যা পড়তে শিখলেন তার সবই লিখেছেন এমন মানুষ যাঁরা তা কেমন দেখায় তা নিয়ে চিন্তিত।

এতে তাঁরা মিথ্যাবাদী হন না। তাঁরা স্বার্থসংশ্লিষ্ট পক্ষ হন। **গভর্ন্যান্স বিশ্লেষণ হলো হিসাবগুলো আদৌ বিশ্লেষণের যোগ্য কি না তা যাচাই করার উপায়।**

### নিয়ম আছে, আর তা যথেষ্ট নয়

বিএসইসি তালিকাভুক্ত কোম্পানিকে স্বাধীন পরিচালক, নিরীক্ষা কমিটি, পৃথক চেয়ারম্যান ও ব্যবস্থাপনা পরিচালক, এবং উদ্যোক্তাদের মিলিতভাবে অন্তত ৩০% মালিকানা রাখতে বলে।

একটি কোম্পানি এর প্রতিটি ঘরে টিক দিয়েও চুপচাপ মালিকের অন্য ব্যবসায় টাকা সরাতে পারে।

**নিয়ম বোর্ডের আকৃতি নিয়ন্ত্রণ করে। বোর্ড কী করে তা নিয়ন্ত্রণ করে না।** মালিক পরিবারের বাছাই করা, কোম্পানির বেতনভুক্ত, নয় বছর ধরে বসে থাকা একজন "স্বাধীন" পরিচালক কেবল কাগজেই স্বাধীন।

### যে চারটি নথি আসলে আপনাকে বলে

**১. নিরীক্ষক কী বলেছেন।** মুনাফা নয় — তার ওপর নিরীক্ষকের মতামত। নিরীক্ষক যদি বলেন হিসাবের ওপর নির্ভর করা যায় না, তবে এই বইয়ের আর কিছুই ঐ কোম্পানিতে প্রযোজ্য নয়। থামুন।

**২. কোম্পানি কার কাছে ঋণী, আর কে কোম্পানির কাছে ঋণী।** তালিকাভুক্ত কোম্পানি মালিকের *অন্য* ব্যবসাকে যে টাকা ধার দিয়েছে এবং যা কখনো ফেরত আসে না, তা খুঁজুন। ওটি পাশের দরজা দিয়ে বেরিয়ে যাওয়া আপনারই টাকা, আর তা নোটে লেখা আছে।

**৩. মালিকরা বিক্রি করছেন কি না।** তাঁরা এটি গড়েছেন। তাঁরা পরবর্তী তিন প্রান্তিক জানেন। তাঁরা ধারাবাহিকভাবে অংশীদারিত্ব কমাতে থাকলে নিজেরটা বাড়ানোর আগে জিজ্ঞেস করুন কেন।

**৪. জিনিসপত্র সময়মতো দাখিল হয় কি না।** দেরিতে হিসাব। স্থগিত এজিএম। তিন বছরে দুবার পদত্যাগ করা অর্থপ্রধান। **এগুলো ছোট, নীরস তথ্য যা খারাপ খবরের অনেক আগেই আসে।**

### যে একটি পার্থক্য গুরুত্বপূর্ণ

কিছু সমস্যা শাস্তির যোগ্য। কিছু আলোচনাই শেষ করে দেয়।

কোনো পরিচালক শেয়ার বিক্রি করলে সেটি শাস্তি — কম রাখুন, বেশি নজর দিন।

নিরীক্ষক হিসাবে স্বাক্ষর করতে অস্বীকার করলে **সেটি শাস্তি নয়। সেটি সমাপ্তি।** যে হিসাবের ওপর নির্ভর করা যায় না তা ঠিক করার মতো যথেষ্ট কম দাম নেই।

প্রায় সবাই যে ভুলটি করেন তা হলো দুটোকেই একই স্কোরিং ব্যবস্থায় রাখা, যেখানে একটি মারাত্মক সমস্যা অন্যত্র পাঁচটি ভালো নম্বরে ভোটে হেরে যায়।

### কষ্ট করবেন কেন

কারণ সতর্কতা আসে আগে আর ধস আসে পরে।

নিরীক্ষক বদলান। সিএফও চলে যান। মালিকের অন্য কোম্পানির কাছে প্রাপ্য বাড়তে থাকে। এজিএম পিছিয়ে যায়। **দুই বছর পর** লোকসান ঘোষিত হয়, শেয়ার Z শ্রেণিতে যায়, মার্জিনে ধারণকারী সবাই একসঙ্গে বিক্রিতে বাধ্য হন, আর দাম ধসে পড়ে।

তারপর সংবাদপত্র ব্যাখ্যা করে।

**সবটাই ছিল প্রকাশ্য। বিনামূল্যের। দাখিলকৃত। কেউ পড়েনি** — কারণ পড়তে হলে একটি দামের দিকে তাকানোর বদলে চারটি নথি খুলতে হতো।`,
    },

    example: {
      en: `### Two companies, both fully CG-compliant

Both file a clean Corporate Governance compliance certificate. Both satisfy the Code on board composition, committees, and chairman/MD separation.

| | Company P | Company Q |
|---|---|---|
| **Audit opinion** | Unqualified | Unqualified, **with emphasis of matter** |
| Auditor | FRC-panel, 4-year tenure | Changed twice in 3 years, off-panel |
| Independent directors | 3 of 11 (27%) | 2 of 9 (22%) — compliant |
| Chairman / MD | Separate, unrelated | Separate, **siblings** |
| Sponsor holding, 12m ago | 51% | 44% |
| Sponsor holding now | 52% | **35%** |
| Related-party receivables | BDT 4 cr (1.2% of equity) | BDT 96 cr (**24% of equity**), rising 3 years |
| CFO changes in 3 years | 0 | 2 |
| Accounts filed | On time | **41 days late** |
| Other income / net profit | 6% | **34%** |
| NOCF / net profit | 1.12 | **0.31** |
| Reported P/E | 14.2 | **6.8** |

**Company Q is the cheaper share on every valuation metric in Chapter 18. It is also the one being emptied.**

Note that Q breaks no rule in the table. Independent directors at 22% clears the one-fifth minimum. Chairman and MD are separate persons — the Code does not say they cannot be siblings. Sponsor holding at 35% is above 30%. **Q is compliant and failing simultaneously, which is precisely the condition this chapter exists to detect.**

### Scoring Q

Applying the weighted scorecard from §24.10:

| Flag | Present | Weight | Score |
|---|---|---|---|
| Going-concern / emphasis-of-matter para | 1 | 8 | 8 |
| Auditor changed within 3 years | 1 | 7 | 7 |
| Auditor not on FRC panel | 1 | 6 | 6 |
| Sponsor holding fell >5pp in 12m | 1 | 9 | 9 |
| Related-party receivables >15% of equity | 1 | 8 | 8 |
| CFO changed twice in 3 years | 1 | 6 | 6 |
| Chairman and MD same family | 1 | 4 | 4 |
| Accounts filed late | 1 | 7 | 7 |
| Other income > 25% of net profit | 1 | 6 | 6 |
| Cash conversion below 0.5 | 1 | 8 | 8 |
| *Qualified/adverse opinion* | 0 | 10 | 0 |
| *Sponsor below 30%* | 0 | 8 | 0 |
| *Independent directors below minimum* | 0 | 5 | 0 |
| *Repeated raises, ROE flat* | 0 | 6 | 0 |
| *Directors pledged shares* | 0 | 7 | 0 |
| **TOTAL** | | **105** | **69** |

$$\\text{Severity} = \\frac{69}{105} \\times 100 = 65.7\\%$$

**Verdict: REJECT.** Not "cheap with risks." Not "size down and monitor." Reject.

### Reading the pattern rather than the points

The score is useful, but the *shape* of the findings is more informative than the total.

Look at what Q's flags have in common. The auditor changed and then issued an emphasis of matter. Related-party receivables are a quarter of equity and growing. Sponsors cut their stake by 9 percentage points. The CFO left twice. Accounts were late.

**These are not ten independent problems. They are one problem observed ten times.** Money is moving from the listed company to related entities; the people who know are reducing exposure; the officers who would have to sign for it keep leaving; and the reporting that would reveal it arrives late and from an auditor with no reputation to protect.

**A scorecard that returned 69 without that narrative would be worth much less.** Use the score to force yourself through the checklist, then write one sentence explaining what the flags have in common. If you cannot write that sentence, you have collected findings but not understood them.

### And the part that should genuinely unsettle you

Q trades at a P/E of **6.8** against P's 14.2.

A screener sorting by P/E ascending puts Q near the top. Every "value pick" list built on multiples alone will surface it. Chapter 18 warned that a low multiple can be a trap rather than a bargain; **this is what the trap looks like from the inside**, and the governance work is what distinguishes the two cases.

The cheapness is not an opportunity that the market has missed. **It is the market pricing the probability that the earnings are not the shareholders'.**`,
      bn: `### দুটি কোম্পানি, দুটোই সম্পূর্ণ সিজি-সম্মত

দুটোই পরিচ্ছন্ন কর্পোরেট গভর্ন্যান্স সম্মতি সনদ দাখিল করে। দুটোই বোর্ড গঠন, কমিটি ও চেয়ারম্যান/এমডি পৃথকীকরণে কোড মেনে চলে।

| | কোম্পানি P | কোম্পানি Q |
|---|---|---|
| **নিরীক্ষা মতামত** | অযোগ্যতাবিহীন | অযোগ্যতাবিহীন, **এমফ্যাসিস অব ম্যাটারসহ** |
| নিরীক্ষক | FRC-প্যানেল, ৪ বছরের মেয়াদ | ৩ বছরে দুবার পরিবর্তিত, প্যানেলের বাইরে |
| স্বাধীন পরিচালক | ১১-তে ৩ (২৭%) | ৯-তে ২ (২২%) — সম্মত |
| চেয়ারম্যান / এমডি | পৃথক, অসম্পর্কিত | পৃথক, **সহোদর** |
| উদ্যোক্তা মালিকানা, ১২ মাস আগে | ৫১% | ৪৪% |
| উদ্যোক্তা মালিকানা এখন | ৫২% | **৩৫%** |
| সম্পর্কিত-পক্ষের প্রাপ্য | ৪ কোটি টাকা (ইকুইটির ১.২%) | ৯৬ কোটি টাকা (**ইকুইটির ২৪%**), ৩ বছর ধরে বাড়ন্ত |
| ৩ বছরে সিএফও পরিবর্তন | ০ | ২ |
| হিসাব দাখিল | সময়মতো | **৪১ দিন দেরিতে** |
| অন্যান্য আয় / নিট মুনাফা | ৬% | **৩৪%** |
| NOCF / নিট মুনাফা | ১.১২ | **০.৩১** |
| প্রতিবেদিত P/E | ১৪.২ | **৬.৮** |

**অধ্যায় ১৮-এর প্রতিটি মূল্যায়ন পরিমাপে কোম্পানি Q সস্তা শেয়ার। এটিই আবার সেই কোম্পানি যাকে খালি করা হচ্ছে।**

লক্ষ করুন Q টেবিলের কোনো নিয়ম ভাঙেনি। ২২% স্বাধীন পরিচালক এক-পঞ্চমাংশ ন্যূনতম পার করে। চেয়ারম্যান ও এমডি পৃথক ব্যক্তি — কোড বলেনি তাঁরা সহোদর হতে পারবেন না। ৩৫% উদ্যোক্তা মালিকানা ৩০%-এর ওপরে। **Q একই সঙ্গে সম্মত ও ব্যর্থ, আর ঠিক এই অবস্থাটি শনাক্ত করতেই এই অধ্যায় বিদ্যমান।**

### Q-এর স্কোরিং

§২৪.১০-এর ভারিত স্কোরকার্ড প্রয়োগ করে:

| সংকেত | উপস্থিত | ওজন | স্কোর |
|---|---|---|---|
| গোয়িং-কনসার্ন / এমফ্যাসিস অব ম্যাটার | ১ | ৮ | ৮ |
| ৩ বছরে নিরীক্ষক পরিবর্তন | ১ | ৭ | ৭ |
| নিরীক্ষক FRC প্যানেলে নেই | ১ | ৬ | ৬ |
| ১২ মাসে উদ্যোক্তা মালিকানা >৫pp কমেছে | ১ | ৯ | ৯ |
| সম্পর্কিত-পক্ষের প্রাপ্য ইকুইটির >১৫% | ১ | ৮ | ৮ |
| ৩ বছরে দুবার সিএফও পরিবর্তন | ১ | ৬ | ৬ |
| চেয়ারম্যান ও এমডি একই পরিবার | ১ | ৪ | ৪ |
| হিসাব দেরিতে দাখিল | ১ | ৭ | ৭ |
| অন্যান্য আয় > নিট মুনাফার ২৫% | ১ | ৬ | ৬ |
| নগদ রূপান্তর ০.৫-এর নিচে | ১ | ৮ | ৮ |
| *যোগ্যতাসহ/বিরূপ মতামত* | ০ | ১০ | ০ |
| *উদ্যোক্তা ৩০%-এর নিচে* | ০ | ৮ | ০ |
| *স্বাধীন পরিচালক ন্যূনতমের নিচে* | ০ | ৫ | ০ |
| *বারবার মূলধন সংগ্রহ, ROE স্থির* | ০ | ৬ | ০ |
| *পরিচালকরা শেয়ার বন্ধক রেখেছেন* | ০ | ৭ | ০ |
| **মোট** | | **১০৫** | **৬৯** |

$$\\text{তীব্রতা} = \\frac{69}{105} \\times 100 = 65.7\\%$$

**রায়: প্রত্যাখ্যান।** "ঝুঁকিসহ সস্তা" নয়। "আকার কমিয়ে নজর রাখুন" নয়। প্রত্যাখ্যান।

### পয়েন্ট নয়, ধরনটি পড়া

স্কোর কার্যকর, কিন্তু মোটের চেয়ে ফলাফলগুলোর *আকৃতি* বেশি তথ্যবহুল।

Q-এর সংকেতগুলোতে কী মিল আছে দেখুন। নিরীক্ষক বদলালেন এবং তারপর একটি এমফ্যাসিস অব ম্যাটার দিলেন। সম্পর্কিত-পক্ষের প্রাপ্য ইকুইটির এক-চতুর্থাংশ এবং বাড়ছে। উদ্যোক্তারা ৯ শতাংশ পয়েন্ট অংশীদারিত্ব কমালেন। সিএফও দুবার চলে গেলেন। হিসাব দেরিতে এল।

**এগুলো দশটি স্বাধীন সমস্যা নয়। এটি একটি সমস্যা দশবার পর্যবেক্ষিত।** টাকা তালিকাভুক্ত কোম্পানি থেকে সম্পর্কিত সত্তায় যাচ্ছে; যাঁরা জানেন তাঁরা এক্সপোজার কমাচ্ছেন; যে কর্মকর্তাদের এতে স্বাক্ষর করতে হতো তাঁরা বারবার চলে যাচ্ছেন; আর যে প্রতিবেদন এটি প্রকাশ করত তা দেরিতে আসছে, এমন এক নিরীক্ষকের কাছ থেকে যাঁর রক্ষা করার মতো সুনাম নেই।

**ঐ বর্ণনা ছাড়া ৬৯ ফেরত দেওয়া স্কোরকার্ড অনেক কম মূল্যবান হতো।** চেকলিস্টের মধ্য দিয়ে নিজেকে নিয়ে যেতে স্কোর ব্যবহার করুন, তারপর এক বাক্যে লিখুন সংকেতগুলোতে কী মিল। ঐ বাক্যটি লিখতে না পারলে আপনি ফলাফল সংগ্রহ করেছেন, বোঝেননি।

### আর যে অংশটি আপনাকে সত্যিই অস্থির করা উচিত

P-এর ১৪.২-এর বিপরীতে Q লেনদেন হচ্ছে **৬.৮** P/E-তে।

P/E আরোহী ক্রমে সাজানো একটি স্ক্রিনার Q-কে শীর্ষের কাছে রাখে। কেবল গুণিতকের ওপর নির্মিত প্রতিটি "ভ্যালু পিক" তালিকা একে সামনে আনবে। অধ্যায় ১৮ সতর্ক করেছিল যে কম গুণিতক সুযোগ নয় ফাঁদ হতে পারে; **ভেতর থেকে ফাঁদটি এমনই দেখায়**, আর গভর্ন্যান্সের কাজই দুটি ক্ষেত্রকে আলাদা করে।

সস্তা হওয়াটি বাজারের হাতছাড়া করা কোনো সুযোগ নয়। **এটি বাজারের দেওয়া সেই সম্ভাবনার দাম যে আয়টি শেয়ারহোল্ডারদের নয়।**`,
    },

    formula: {
      en: `**Weighted red-flag score.** For $n$ flags with indicator $f_i \\in \\{0,1\\}$ and weight $w_i$:

$$G = \\sum_{i=1}^{n} f_i \\, w_i$$

**Severity**, normalised so thresholds are portable across scorecards of different length:

$$\\text{Severity} = \\frac{G}{\\sum_{i=1}^{n} w_i} \\times 100$$

**Hard disqualifier gate.** This must sit *outside* the score, not inside it:

| Condition | Verdict |
|---|---|
| Any hard disqualifier $D_j = 1$ | **REJECT** |
| Else Severity $> 40$ | **REJECT** |
| Else Severity $> 20$ | **WATCH** |
| Otherwise | **Acceptable** |

Evaluate the conditions **in order** — the first match is the verdict. The disqualifier row sits at the top because it must return before the score is even consulted.

**Related-party exposure:**
$$RPE = \\frac{\\text{Related-Party Receivables}}{\\text{Shareholders' Equity}} \\times 100$$

Above 15% is a flag; above 25% with three years of growth is a transfer mechanism.

**Sponsor holding change**, in percentage points over 12 months:
$$\\Delta S = S_{now} - S_{12m}$$

**Board independence ratio:**
$$BI = \\frac{\\text{Independent Directors}}{\\text{Total Directors}} \\times 100$$

**Auditor concern index** — tenure and panel status combined:
$$AC = \\mathbb{1}[\\text{changes in 3y} \\geq 1] + \\mathbb{1}[\\text{off FRC panel}] + \\mathbb{1}[\\text{tenure} < 2\\text{y}]$$

**Position size adjustment.** Governance should scale exposure continuously, not merely gate it:

$$\\text{Size}_{adj} = \\text{Size}_{base} \\times \\max\\left(0, \\; 1 - \\frac{\\text{Severity}}{40}\\right)$$

At Severity 0 you hold full size; at 20 you hold half; at 40 or above you hold nothing — which is the same boundary as the REJECT threshold, so the two rules agree at the edge rather than contradicting.`,
      bn: `**ভারিত বিপদ-সংকেত স্কোর।** সূচক $f_i \\in \\{0,1\\}$ ও ওজন $w_i$ সহ $n$টি সংকেতের জন্য:

$$G = \\sum_{i=1}^{n} f_i \\, w_i$$

**তীব্রতা**, প্রমিতকৃত যাতে ভিন্ন দৈর্ঘ্যের স্কোরকার্ডেও সীমা বহনযোগ্য থাকে:

$$\\text{তীব্রতা} = \\frac{G}{\\sum_{i=1}^{n} w_i} \\times 100$$

**কঠোর অযোগ্যতার গেট।** এটি স্কোরের *বাইরে* থাকতে হবে, ভেতরে নয়:

| শর্ত | রায় |
|---|---|
| কোনো কঠোর অযোগ্যতা $D_j = 1$ | **প্রত্যাখ্যান** |
| নয়তো তীব্রতা $> 40$ | **প্রত্যাখ্যান** |
| নয়তো তীব্রতা $> 20$ | **নজরদারি** |
| অন্যথায় | **গ্রহণযোগ্য** |

শর্তগুলো **ক্রমানুসারে** মূল্যায়ন করুন — প্রথম মিলটিই রায়। কঠোর অযোগ্যতার সারিটি সবার ওপরে, কারণ এটিকে স্কোর দেখার আগেই ফেরত দিতে হবে।

**সম্পর্কিত-পক্ষের এক্সপোজার:**
$$RPE = \\frac{\\text{সম্পর্কিত-পক্ষের প্রাপ্য}}{\\text{শেয়ারহোল্ডারদের ইকুইটি}} \\times 100$$

১৫%-এর ওপরে একটি সংকেত; তিন বছরের প্রবৃদ্ধিসহ ২৫%-এর ওপরে একটি স্থানান্তর কৌশল।

১২ মাসে শতাংশ পয়েন্টে **উদ্যোক্তা মালিকানার পরিবর্তন**:
$$\\Delta S = S_{now} - S_{12m}$$

**বোর্ড স্বাধীনতা অনুপাত:**
$$BI = \\frac{\\text{স্বাধীন পরিচালক}}{\\text{মোট পরিচালক}} \\times 100$$

**নিরীক্ষক উদ্বেগ সূচক** — মেয়াদ ও প্যানেল অবস্থান একত্রে:
$$AC = \\mathbb{1}[\\text{৩ বছরে পরিবর্তন} \\geq 1] + \\mathbb{1}[\\text{FRC প্যানেলের বাইরে}] + \\mathbb{1}[\\text{মেয়াদ} < 2\\text{ বছর}]$$

**পজিশনের আকার সমন্বয়।** গভর্ন্যান্স কেবল গেট নয়, ধারাবাহিকভাবে এক্সপোজার নিয়ন্ত্রণ করা উচিত:

$$\\text{আকার}_{সমন্বিত} = \\text{আকার}_{ভিত্তি} \\times \\max\\left(0, \\; 1 - \\frac{\\text{তীব্রতা}}{40}\\right)$$

তীব্রতা ০-তে আপনি পূর্ণ আকার রাখেন; ২০-তে অর্ধেক; ৪০ বা তার ওপরে কিছুই নয় — যা প্রত্যাখ্যান সীমার সঙ্গে অভিন্ন, তাই দুটি নিয়ম প্রান্তে বিরোধ না করে মিলে যায়।`,
    },

    manual: {
      en: `**Scenario.** Company Q from §24.3. Ten of fifteen flags present. Weights as tabulated.

**Step 1 — Check hard disqualifiers first, before computing anything.**

| Disqualifier | Present? |
|---|---|
| Adverse opinion or disclaimer | No |
| Sponsor holding below 30% | No — 35% |
| Accounts not filed / AGM not held | No — filed, though 41 days late |
| Regulatory manipulation finding | No |

**None present.** Proceed to scoring. *(Had any been present, we would stop here and the remaining twelve steps would be irrelevant. That is the point of running this gate first.)*

**Step 2 — Sum the weights of flags present:**
$$G = 8 + 7 + 6 + 9 + 8 + 6 + 4 + 7 + 6 + 8 = 69$$

**Step 3 — Sum all weights:**
$$\\textstyle\\sum w_i = 10+8+7+6+9+8+8+6+5+4+7+6+8+6+7 = 105$$

**Step 4 — Severity:**
$$\\text{Severity} = \\frac{69}{105} \\times 100 = 65.71\\%$$

**Step 5 — Verdict:** no hard disqualifier, but $65.71 > 40$ → **REJECT.**

**Step 6 — Position size, for completeness:**
$$\\text{Size}_{adj} = \\text{Size}_{base} \\times \\max\\left(0, \\; 1 - \\frac{65.71}{40}\\right) = \\text{Size}_{base} \\times \\max(0, -0.64) = 0$$

The size rule and the verdict rule agree, which is the design intent — a framework whose two outputs contradict each other at the boundary is a framework you will override under pressure.

---

**Step 7 — Now the supporting ratios.**

Related-party exposure, with receivables of BDT 96 crore against equity of BDT 400 crore:
$$RPE = \\frac{96}{400} \\times 100 = 24.0\\%$$

Sponsor holding change:
$$\\Delta S = 35 - 44 = -9 \\text{ percentage points}$$

Board independence:
$$BI = \\frac{2}{9} \\times 100 = 22.2\\% \\quad (\\text{minimum } 20\\% \\text{ — compliant})$$

Auditor concern index:
$$AC = 1 + 1 + 1 = 3 \\text{ of a possible } 3$$

**Step 8 — Compare to Company P.** Only two flags present (none of the severe ones):
$$G_P = 0, \\qquad \\text{Severity}_P = 0.0\\%, \\qquad \\text{Verdict: Acceptable}$$

$$RPE_P = \\frac{4}{330} \\times 100 = 1.21\\%, \\qquad \\Delta S_P = +1 \\text{ pp}, \\qquad AC_P = 0$$

**Interpretation.**

Q scores 65.7% severity and is rejected. P scores 0% and passes. Yet **Q trades at a P/E of 6.8 and P at 14.2** — Q is "half the price."

Read what that means precisely. The market is not offering you the same asset at half price. **It is offering you an asset where a quarter of shareholders' equity has been lent to the owner's other businesses, the auditor has changed twice and then flagged a concern, the sponsors have cut nine points of their stake, and only 31 paisa of every taka of reported profit arrived as cash.**

The discount is not the opportunity. **The discount is the disclosure.**

**Step 9 — The sentence test.** Write one sentence explaining what the flags share:

*"Capital is being moved from the listed company to related entities, the informed parties are reducing exposure, and the reporting chain that would document it has been weakened at every link."*

If you can write that sentence, you have understood the company. If you can only recite the score, you have not.`,
      bn: `**পরিস্থিতি।** §২৪.৩-এর কোম্পানি Q। পনেরোটির মধ্যে দশটি সংকেত উপস্থিত। ওজন সারণি অনুযায়ী।

**ধাপ ১ — কিছু গণনার আগে প্রথমে কঠোর অযোগ্যতা যাচাই করুন।**

| অযোগ্যতা | উপস্থিত? |
|---|---|
| বিরূপ মতামত বা দাবিত্যাগ | না |
| উদ্যোক্তা মালিকানা ৩০%-এর নিচে | না — ৩৫% |
| হিসাব দাখিল হয়নি / এজিএম হয়নি | না — দাখিল হয়েছে, যদিও ৪১ দিন দেরিতে |
| নিয়ন্ত্রক কারসাজির সিদ্ধান্ত | না |

**কোনোটিই নেই।** স্কোরিংয়ে এগোন। *(কোনোটি থাকলে আমরা এখানেই থামতাম আর বাকি বারোটি ধাপ অপ্রাসঙ্গিক হতো। এই গেটটি আগে চালানোর উদ্দেশ্য এটাই।)*

**ধাপ ২ — উপস্থিত সংকেতের ওজনের যোগফল:**
$$G = 8 + 7 + 6 + 9 + 8 + 6 + 4 + 7 + 6 + 8 = 69$$

**ধাপ ৩ — সব ওজনের যোগফল:**
$$\\textstyle\\sum w_i = 105$$

**ধাপ ৪ — তীব্রতা:**
$$\\text{তীব্রতা} = \\frac{69}{105} \\times 100 = 65.71\\%$$

**ধাপ ৫ — রায়:** কোনো কঠোর অযোগ্যতা নেই, কিন্তু $65.71 > 40$ → **প্রত্যাখ্যান।**

**ধাপ ৬ — সম্পূর্ণতার জন্য পজিশনের আকার:**
$$\\text{আকার}_{সমন্বিত} = \\text{আকার}_{ভিত্তি} \\times \\max(0, -0.64) = 0$$

আকারের নিয়ম ও রায়ের নিয়ম মিলে যায়, যা নকশার উদ্দেশ্য — যে কাঠামোর দুটি ফলাফল প্রান্তে পরস্পরবিরোধী, চাপের মুখে আপনি সেটি লঙ্ঘন করবেন।

---

**ধাপ ৭ — এবার সহায়ক অনুপাতগুলো।**

৪০০ কোটি টাকা ইকুইটির বিপরীতে ৯৬ কোটি টাকা প্রাপ্যসহ সম্পর্কিত-পক্ষের এক্সপোজার:
$$RPE = \\frac{96}{400} \\times 100 = 24.0\\%$$

উদ্যোক্তা মালিকানার পরিবর্তন:
$$\\Delta S = 35 - 44 = -9 \\text{ শতাংশ পয়েন্ট}$$

বোর্ড স্বাধীনতা:
$$BI = \\frac{2}{9} \\times 100 = 22.2\\% \\quad (\\text{ন্যূনতম } 20\\% \\text{ — সম্মত})$$

নিরীক্ষক উদ্বেগ সূচক:
$$AC = 1 + 1 + 1 = 3 \\text{, সম্ভাব্য } 3\\text{-এর মধ্যে}$$

**ধাপ ৮ — কোম্পানি P-এর সঙ্গে তুলনা।** কেবল দুটি সংকেত উপস্থিত (গুরুতর কোনোটি নয়):
$$G_P = 0, \\qquad \\text{তীব্রতা}_P = 0.0\\%, \\qquad \\text{রায়: গ্রহণযোগ্য}$$

$$RPE_P = 1.21\\%, \\qquad \\Delta S_P = +1 \\text{ pp}, \\qquad AC_P = 0$$

**ব্যাখ্যা।**

Q ৬৫.৭% তীব্রতা পায় ও প্রত্যাখ্যাত হয়। P ০% পায় ও উত্তীর্ণ হয়। অথচ **Q লেনদেন হয় ৬.৮ P/E-তে আর P ১৪.২-তে** — Q "অর্ধেক দামে"।

এর অর্থ সুনির্দিষ্টভাবে পড়ুন। বাজার আপনাকে একই সম্পদ অর্ধেক দামে দিচ্ছে না। **এটি আপনাকে এমন একটি সম্পদ দিচ্ছে যেখানে শেয়ারহোল্ডারদের ইকুইটির এক-চতুর্থাংশ মালিকের অন্য ব্যবসায় ধার দেওয়া হয়েছে, নিরীক্ষক দুবার বদলেছেন ও তারপর একটি উদ্বেগ চিহ্নিত করেছেন, উদ্যোক্তারা তাঁদের অংশীদারিত্বের নয় পয়েন্ট কেটেছেন, আর প্রতিবেদিত মুনাফার প্রতি টাকায় মাত্র ৩১ পয়সা নগদ হিসেবে এসেছে।**

ছাড়টি সুযোগ নয়। **ছাড়টিই প্রকাশনা।**

**ধাপ ৯ — বাক্য পরীক্ষা।** সংকেতগুলোতে কী মিল তা এক বাক্যে লিখুন:

*"মূলধন তালিকাভুক্ত কোম্পানি থেকে সম্পর্কিত সত্তায় সরানো হচ্ছে, অবহিত পক্ষগুলো এক্সপোজার কমাচ্ছে, আর যে প্রতিবেদন শৃঙ্খল এটি নথিভুক্ত করত তা প্রতিটি সংযোগে দুর্বল করা হয়েছে।"*

ঐ বাক্যটি লিখতে পারলে আপনি কোম্পানিটি বুঝেছেন। কেবল স্কোর আওড়াতে পারলে বোঝেননি।`,
    },

    excel: {
      en: `\`\`\`
     A                                        B          C       D        E
1    RED FLAG                                 Present    Weight  Score    Source
2    Qualified / adverse audit opinion        0          10      =B2*C2   Auditor report
3    Going-concern or emphasis-of-matter      1           8      =B3*C3   Auditor report
4    Auditor changed within 3 years           1           7      =B4*C4   AGM notices
5    Auditor not on FRC panel / low tier      1           6      =B5*C5   FRC list
6    Sponsor holding fell >5pp in 12m         1           9      =B6*C6   DSE disclosure
7    Sponsor holding below 30% requirement    0           8      =B7*C7   DSE disclosure
8    Related-party receivables >15% of equity 1           8      =B8*C8   Notes to accounts
9    CFO or Co. Secretary changed 2x in 3y    1           6      =B9*C9   Price-sensitive info
10   Independent directors below Code min     0           5      =B10*C10 CG compliance report
11   Chairman and MD same person / family     1           4      =B11*C11 Directors report
12   Accounts filed late / AGM delayed        1           7      =B12*C12 DSE news
13   Other income > 25% of net profit         1           6      =B13*C13 Income statement
14   Cash conversion (NOCF/NP) below 0.5      1           8      =B14*C14 Cash flow stmt
15   Repeated equity raises, ROE not improving 0          6      =B15*C15 Multi-year
16   Directors pledged shares against loans   0           7      =B16*C16 CDBL / disclosure

18   TOTAL SCORE           =SUM(D2:D16)
19   MAXIMUM POSSIBLE      =SUM(C2:C16)
20   SEVERITY (%)          =B18/B19*100

22   HARD DISQUALIFIERS    =B2+B7+B12
24   VERDICT  =IF(B22>0,"REJECT - hard disqualifier present, no score needed",
             IF(B20>40,"REJECT - governance severity too high",
             IF(B20>20,"WATCH - elevated, size down","Acceptable")))
\`\`\`

**B22 is the most important cell in the sheet, and it is deliberately not part of B18.**

A hard disqualifier must be able to reject a company that scores well everywhere else. If you fold it into the weighted total, a fatal finding worth 10 points can be outvoted by five clean answers — and the sheet will tell you to buy a company whose auditor refused to sign the accounts. **Keep the gate outside the score.**

**Column E is not decoration.** It records where each answer came from. Six months later, when you are deciding whether to hold, you need to know whether "related-party receivables >15%" came from the notes or from a half-remembered newspaper article. **A flag without a source is an opinion.**

**On weights:** these are mine, and reasonable people would set them differently. What is not negotiable is the *structure* — gate first, weighted score second, normalised severity so the thresholds survive when you add or remove a row.`,
      bn: `\`\`\`
     A                                        B         C       D        E
1    বিপদ সংকেত                                উপস্থিত    ওজন     স্কোর     উৎস
2    যোগ্যতাসহ / বিরূপ নিরীক্ষা মতামত           0         10      =B2*C2   নিরীক্ষা প্রতিবেদন
3    গোয়িং-কনসার্ন বা এমফ্যাসিস অব ম্যাটার      1          8      =B3*C3   নিরীক্ষা প্রতিবেদন
4    ৩ বছরে নিরীক্ষক পরিবর্তন                   1          7      =B4*C4   এজিএম নোটিশ
5    নিরীক্ষক FRC প্যানেলে নেই                  1          6      =B5*C5   FRC তালিকা
6    ১২ মাসে উদ্যোক্তা মালিকানা >৫pp কমেছে      1          9      =B6*C6   ডিএসই প্রকাশনা
7    উদ্যোক্তা মালিকানা ৩০% শর্তের নিচে         0          8      =B7*C7   ডিএসই প্রকাশনা
8    সম্পর্কিত-পক্ষের প্রাপ্য ইকুইটির >১৫%       1          8      =B8*C8   হিসাবের নোট
9    ৩ বছরে সিএফও/কোম্পানি সচিব ২বার পরিবর্তন   1          6      =B9*C9   মূল্য-সংবেদনশীল তথ্য
10   স্বাধীন পরিচালক কোডের ন্যূনতমের নিচে       0          5      =B10*C10 সিজি সম্মতি প্রতিবেদন
11   চেয়ারম্যান ও এমডি একই ব্যক্তি/পরিবার       1          4      =B11*C11 পরিচালকদের প্রতিবেদন
12   হিসাব দেরিতে দাখিল / এজিএম বিলম্বিত        1          7      =B12*C12 ডিএসই সংবাদ
13   অন্যান্য আয় > নিট মুনাফার ২৫%             1          6      =B13*C13 আয় বিবরণী
14   নগদ রূপান্তর (NOCF/NP) ০.৫-এর নিচে         1          8      =B14*C14 নগদ প্রবাহ বিবরণী
15   বারবার মূলধন সংগ্রহ, ROE উন্নত হয়নি        0          6      =B15*C15 বহু-বছর
16   পরিচালকরা ঋণের বিপরীতে শেয়ার বন্ধক        0          7      =B16*C16 সিডিবিএল / প্রকাশনা

18   মোট স্কোর              =SUM(D2:D16)
19   সর্বোচ্চ সম্ভাব্য       =SUM(C2:C16)
20   তীব্রতা (%)            =B18/B19*100

22   কঠোর অযোগ্যতা          =B2+B7+B12
24   রায়  =IF(B22>0,"REJECT - hard disqualifier present, no score needed",
         IF(B20>40,"REJECT - governance severity too high",
         IF(B20>20,"WATCH - elevated, size down","Acceptable")))
\`\`\`

**B22 শিটের সবচেয়ে গুরুত্বপূর্ণ ঘর, আর এটি ইচ্ছাকৃতভাবে B18-এর অংশ নয়।**

একটি কঠোর অযোগ্যতাকে এমন কোম্পানি প্রত্যাখ্যান করতে পারতে হবে যে অন্য সবখানে ভালো স্কোর করে। ভারিত মোটে একে ঢোকালে ১০ পয়েন্টের একটি মারাত্মক ফলাফল পাঁচটি পরিষ্কার উত্তরে ভোটে হেরে যেতে পারে — আর শিটটি আপনাকে এমন কোম্পানি কিনতে বলবে যার নিরীক্ষক হিসাবে স্বাক্ষর করতে অস্বীকার করেছেন। **গেটটি স্কোরের বাইরে রাখুন।**

**E কলাম সাজসজ্জা নয়।** এটি লিপিবদ্ধ করে প্রতিটি উত্তর কোথা থেকে এসেছে। ছয় মাস পর ধরে রাখবেন কি না ঠিক করার সময় আপনাকে জানতে হবে "সম্পর্কিত-পক্ষের প্রাপ্য >১৫%" নোট থেকে এসেছিল না আধা-মনে থাকা সংবাদ প্রতিবেদন থেকে। **উৎসবিহীন সংকেত একটি মতামত।**

**ওজন প্রসঙ্গে:** এগুলো আমার, আর যুক্তিবান মানুষ ভিন্নভাবে নির্ধারণ করবেন। যা আলোচনাসাপেক্ষ নয় তা হলো *কাঠামো* — আগে গেট, তারপর ভারিত স্কোর, আর প্রমিতকৃত তীব্রতা যাতে সারি যোগ বা বাদ দিলেও সীমাগুলো টিকে থাকে।`,
    },

    python: {
      en: `\`\`\`python
"""
Chapter 24 — Governance red-flag scorecard with a hard-disqualifier gate.
Educational. Weights are illustrative; the structure is the point.
"""
from dataclasses import dataclass, field


@dataclass
class Flag:
    """One weighted governance red flag."""
    label: str
    weight: int
    present: bool = False
    source: str = ""


# Hard disqualifiers sit OUTSIDE the weighted score. A fatal finding
# must never be outvoted by good answers elsewhere.
@dataclass
class Disqualifiers:
    adverse_or_disclaimer: bool = False
    sponsor_below_30pct: bool = False
    accounts_not_filed: bool = False
    regulatory_finding: bool = False

    def any_present(self) -> bool:
        return any((self.adverse_or_disclaimer, self.sponsor_below_30pct,
                    self.accounts_not_filed, self.regulatory_finding))

    def which(self) -> list:
        names = []
        if self.adverse_or_disclaimer: names.append("adverse/disclaimer opinion")
        if self.sponsor_below_30pct:   names.append("sponsor holding below 30%")
        if self.accounts_not_filed:    names.append("accounts not filed / AGM not held")
        if self.regulatory_finding:    names.append("regulatory manipulation finding")
        return names


@dataclass
class Company:
    name: str
    flags: list = field(default_factory=list)
    dq: Disqualifiers = field(default_factory=Disqualifiers)
    equity_cr: float = 0.0
    related_party_receivables_cr: float = 0.0
    sponsor_now_pct: float = 0.0
    sponsor_12m_pct: float = 0.0
    independent_directors: int = 0
    total_directors: int = 1
    pe: float = 0.0

    @property
    def score(self) -> int:
        return sum(f.weight for f in self.flags if f.present)

    @property
    def max_score(self) -> int:
        return sum(f.weight for f in self.flags)

    @property
    def severity(self) -> float:
        return self.score / self.max_score * 100 if self.max_score else 0.0

    @property
    def rpe_pct(self) -> float:
        if not self.equity_cr:
            return 0.0
        return self.related_party_receivables_cr / self.equity_cr * 100

    @property
    def sponsor_change_pp(self) -> float:
        return self.sponsor_now_pct - self.sponsor_12m_pct

    @property
    def board_independence_pct(self) -> float:
        return self.independent_directors / self.total_directors * 100

    def verdict(self) -> str:
        if self.dq.any_present():
            return "REJECT - hard disqualifier: " + "; ".join(self.dq.which())
        if self.severity > 40:
            return "REJECT - governance severity too high"
        if self.severity > 20:
            return "WATCH - elevated, size down"
        return "Acceptable"

    def size_multiplier(self, cap: float = 40.0) -> float:
        """Continuous sizing. Agrees with verdict() at the boundary."""
        if self.dq.any_present():
            return 0.0
        return max(0.0, 1 - self.severity / cap)


def build_flags(present: dict) -> list:
    spec = [
        ("Qualified / adverse audit opinion",        10, "Auditor report"),
        ("Going-concern or emphasis-of-matter",       8, "Auditor report"),
        ("Auditor changed within 3 years",            7, "AGM notices"),
        ("Auditor not on FRC panel",                  6, "FRC list"),
        ("Sponsor holding fell >5pp in 12m",          9, "DSE disclosure"),
        ("Sponsor holding below 30%",                 8, "DSE disclosure"),
        ("Related-party receivables >15% of equity",  8, "Notes to accounts"),
        ("CFO/Co.Sec changed twice in 3 years",       6, "Price-sensitive info"),
        ("Independent directors below Code minimum",  5, "CG compliance report"),
        ("Chairman and MD same person / family",      4, "Directors report"),
        ("Accounts filed late / AGM delayed",         7, "DSE news"),
        ("Other income > 25% of net profit",          6, "Income statement"),
        ("Cash conversion (NOCF/NP) below 0.5",       8, "Cash flow statement"),
        ("Repeated raises, ROE not improving",        6, "Multi-year"),
        ("Directors pledged shares against loans",    7, "CDBL / disclosure"),
    ]
    return [Flag(lbl, w, present.get(lbl, False), src) for lbl, w, src in spec]


def report(c: Company) -> None:
    print(f"=== {c.name} ===")
    if c.dq.any_present():
        print("HARD DISQUALIFIER PRESENT - scoring skipped")
        for d in c.dq.which():
            print(f"  - {d}")
    else:
        for f in c.flags:
            if f.present:
                print(f"  [{f.weight:>2}] {f.label}  ({f.source})")
    print(f"Score              : {c.score} / {c.max_score}")
    print(f"Severity           : {c.severity:.2f}%")
    print(f"Related-party exp. : {c.rpe_pct:.2f}% of equity")
    print(f"Sponsor change     : {c.sponsor_change_pp:+.1f} pp")
    print(f"Board independence : {c.board_independence_pct:.1f}%")
    print(f"Reported P/E       : {c.pe:.1f}")
    print(f"Size multiplier    : {c.size_multiplier():.2f}x")
    print(f"VERDICT            : {c.verdict()}")
    print()


if __name__ == "__main__":
    q_present = {
        "Going-concern or emphasis-of-matter": True,
        "Auditor changed within 3 years": True,
        "Auditor not on FRC panel": True,
        "Sponsor holding fell >5pp in 12m": True,
        "Related-party receivables >15% of equity": True,
        "CFO/Co.Sec changed twice in 3 years": True,
        "Chairman and MD same person / family": True,
        "Accounts filed late / AGM delayed": True,
        "Other income > 25% of net profit": True,
        "Cash conversion (NOCF/NP) below 0.5": True,
    }

    company_q = Company(
        name="Company Q (compliant and failing)",
        flags=build_flags(q_present),
        equity_cr=400.0, related_party_receivables_cr=96.0,
        sponsor_now_pct=35.0, sponsor_12m_pct=44.0,
        independent_directors=2, total_directors=9, pe=6.8,
    )

    company_p = Company(
        name="Company P (clean)",
        flags=build_flags({}),
        equity_cr=330.0, related_party_receivables_cr=4.0,
        sponsor_now_pct=52.0, sponsor_12m_pct=51.0,
        independent_directors=3, total_directors=11, pe=14.2,
    )

    company_r = Company(
        name="Company R (one fatal finding, otherwise clean)",
        flags=build_flags({}),
        dq=Disqualifiers(adverse_or_disclaimer=True),
        equity_cr=500.0, related_party_receivables_cr=2.0,
        sponsor_now_pct=55.0, sponsor_12m_pct=55.0,
        independent_directors=4, total_directors=12, pe=5.1,
    )

    for c in (company_p, company_q, company_r):
        report(c)

    print("Cheapest by P/E, in order:")
    for c in sorted((company_p, company_q, company_r), key=lambda x: x.pe):
        print(f"  P/E {c.pe:>5.1f}  {c.name:<45} -> {c.verdict()}")
\`\`\`

**Run it and read the last three lines, which are the whole chapter.**

Sorted by P/E ascending — the exact sort every screener and "value pick" list performs — the order is **R (5.1), Q (6.8), P (14.2)**. The two cheapest are the two you must not own. R has a **zero weighted score**: every flag is clean, and it is still rejected, because an adverse opinion is not a point on a scale.

That is why \`verdict()\` checks \`dq.any_present()\` before it looks at \`severity\`. **Move that check below the score and the model will recommend the one company whose accounts an auditor refused to certify.**`,
      bn: `\`\`\`python
"""
অধ্যায় ২৪ — কঠোর-অযোগ্যতা গেটসহ গভর্ন্যান্স বিপদ-সংকেত স্কোরকার্ড।
শিক্ষামূলক। ওজন দৃষ্টান্তমূলক; কাঠামোটিই মূল কথা।
"""
from dataclasses import dataclass, field


@dataclass
class Flag:
    """একটি ভারিত গভর্ন্যান্স বিপদ সংকেত।"""
    label: str
    weight: int
    present: bool = False
    source: str = ""


# কঠোর অযোগ্যতা ভারিত স্কোরের বাইরে থাকে। একটি মারাত্মক ফলাফল
# কখনোই অন্যত্র ভালো উত্তরে ভোটে হারা উচিত নয়।
@dataclass
class Disqualifiers:
    adverse_or_disclaimer: bool = False
    sponsor_below_30pct: bool = False
    accounts_not_filed: bool = False
    regulatory_finding: bool = False

    def any_present(self) -> bool:
        return any((self.adverse_or_disclaimer, self.sponsor_below_30pct,
                    self.accounts_not_filed, self.regulatory_finding))

    def which(self) -> list:
        names = []
        if self.adverse_or_disclaimer: names.append("adverse/disclaimer opinion")
        if self.sponsor_below_30pct:   names.append("sponsor holding below 30%")
        if self.accounts_not_filed:    names.append("accounts not filed / AGM not held")
        if self.regulatory_finding:    names.append("regulatory manipulation finding")
        return names


@dataclass
class Company:
    name: str
    flags: list = field(default_factory=list)
    dq: Disqualifiers = field(default_factory=Disqualifiers)
    equity_cr: float = 0.0
    related_party_receivables_cr: float = 0.0
    sponsor_now_pct: float = 0.0
    sponsor_12m_pct: float = 0.0
    independent_directors: int = 0
    total_directors: int = 1
    pe: float = 0.0

    @property
    def score(self) -> int:
        return sum(f.weight for f in self.flags if f.present)

    @property
    def max_score(self) -> int:
        return sum(f.weight for f in self.flags)

    @property
    def severity(self) -> float:
        return self.score / self.max_score * 100 if self.max_score else 0.0

    @property
    def rpe_pct(self) -> float:
        if not self.equity_cr:
            return 0.0
        return self.related_party_receivables_cr / self.equity_cr * 100

    @property
    def sponsor_change_pp(self) -> float:
        return self.sponsor_now_pct - self.sponsor_12m_pct

    @property
    def board_independence_pct(self) -> float:
        return self.independent_directors / self.total_directors * 100

    def verdict(self) -> str:
        if self.dq.any_present():
            return "REJECT - hard disqualifier: " + "; ".join(self.dq.which())
        if self.severity > 40:
            return "REJECT - governance severity too high"
        if self.severity > 20:
            return "WATCH - elevated, size down"
        return "Acceptable"

    def size_multiplier(self, cap: float = 40.0) -> float:
        """ধারাবাহিক সাইজিং। প্রান্তে verdict()-এর সঙ্গে মেলে।"""
        if self.dq.any_present():
            return 0.0
        return max(0.0, 1 - self.severity / cap)


def build_flags(present: dict) -> list:
    spec = [
        ("Qualified / adverse audit opinion",        10, "Auditor report"),
        ("Going-concern or emphasis-of-matter",       8, "Auditor report"),
        ("Auditor changed within 3 years",            7, "AGM notices"),
        ("Auditor not on FRC panel",                  6, "FRC list"),
        ("Sponsor holding fell >5pp in 12m",          9, "DSE disclosure"),
        ("Sponsor holding below 30%",                 8, "DSE disclosure"),
        ("Related-party receivables >15% of equity",  8, "Notes to accounts"),
        ("CFO/Co.Sec changed twice in 3 years",       6, "Price-sensitive info"),
        ("Independent directors below Code minimum",  5, "CG compliance report"),
        ("Chairman and MD same person / family",      4, "Directors report"),
        ("Accounts filed late / AGM delayed",         7, "DSE news"),
        ("Other income > 25% of net profit",          6, "Income statement"),
        ("Cash conversion (NOCF/NP) below 0.5",       8, "Cash flow statement"),
        ("Repeated raises, ROE not improving",        6, "Multi-year"),
        ("Directors pledged shares against loans",    7, "CDBL / disclosure"),
    ]
    return [Flag(lbl, w, present.get(lbl, False), src) for lbl, w, src in spec]


def report(c: Company) -> None:
    print(f"=== {c.name} ===")
    if c.dq.any_present():
        print("HARD DISQUALIFIER PRESENT - scoring skipped")
        for d in c.dq.which():
            print(f"  - {d}")
    else:
        for f in c.flags:
            if f.present:
                print(f"  [{f.weight:>2}] {f.label}  ({f.source})")
    print(f"Score              : {c.score} / {c.max_score}")
    print(f"Severity           : {c.severity:.2f}%")
    print(f"Related-party exp. : {c.rpe_pct:.2f}% of equity")
    print(f"Sponsor change     : {c.sponsor_change_pp:+.1f} pp")
    print(f"Board independence : {c.board_independence_pct:.1f}%")
    print(f"Reported P/E       : {c.pe:.1f}")
    print(f"Size multiplier    : {c.size_multiplier():.2f}x")
    print(f"VERDICT            : {c.verdict()}")
    print()


if __name__ == "__main__":
    q_present = {
        "Going-concern or emphasis-of-matter": True,
        "Auditor changed within 3 years": True,
        "Auditor not on FRC panel": True,
        "Sponsor holding fell >5pp in 12m": True,
        "Related-party receivables >15% of equity": True,
        "CFO/Co.Sec changed twice in 3 years": True,
        "Chairman and MD same person / family": True,
        "Accounts filed late / AGM delayed": True,
        "Other income > 25% of net profit": True,
        "Cash conversion (NOCF/NP) below 0.5": True,
    }

    company_q = Company(
        name="Company Q (compliant and failing)",
        flags=build_flags(q_present),
        equity_cr=400.0, related_party_receivables_cr=96.0,
        sponsor_now_pct=35.0, sponsor_12m_pct=44.0,
        independent_directors=2, total_directors=9, pe=6.8,
    )

    company_p = Company(
        name="Company P (clean)",
        flags=build_flags({}),
        equity_cr=330.0, related_party_receivables_cr=4.0,
        sponsor_now_pct=52.0, sponsor_12m_pct=51.0,
        independent_directors=3, total_directors=11, pe=14.2,
    )

    company_r = Company(
        name="Company R (one fatal finding, otherwise clean)",
        flags=build_flags({}),
        dq=Disqualifiers(adverse_or_disclaimer=True),
        equity_cr=500.0, related_party_receivables_cr=2.0,
        sponsor_now_pct=55.0, sponsor_12m_pct=55.0,
        independent_directors=4, total_directors=12, pe=5.1,
    )

    for c in (company_p, company_q, company_r):
        report(c)

    print("Cheapest by P/E, in order:")
    for c in sorted((company_p, company_q, company_r), key=lambda x: x.pe):
        print(f"  P/E {c.pe:>5.1f}  {c.name:<45} -> {c.verdict()}")
\`\`\`

**এটি চালিয়ে শেষ তিনটি লাইন পড়ুন, ওগুলোই পুরো অধ্যায়।**

P/E আরোহী ক্রমে সাজালে — ঠিক যে সাজানো প্রতিটি স্ক্রিনার ও "ভ্যালু পিক" তালিকা করে — ক্রমটি হয় **R (৫.১), Q (৬.৮), P (১৪.২)**। সবচেয়ে সস্তা দুটিই সেগুলো যেগুলো আপনার মালিকানায় থাকা উচিত নয়। R-এর ভারিত স্কোর **শূন্য**: প্রতিটি সংকেত পরিষ্কার, আর তবুও এটি প্রত্যাখ্যাত, কারণ বিরূপ মতামত কোনো মাপকাঠির বিন্দু নয়।

এ কারণেই \`verdict()\` \`severity\` দেখার আগে \`dq.any_present()\` যাচাই করে। **ঐ যাচাইটি স্কোরের নিচে সরান, আর মডেলটি ঠিক সেই কোম্পানিটি সুপারিশ করবে যার হিসাব একজন নিরীক্ষক প্রত্যয়ন করতে অস্বীকার করেছেন।**`,
    },

    mistakes: {
      en: `1. **Treating CG Code compliance as evidence of good governance.** The Code governs board structure. It does not govern conduct. A company can satisfy every requirement and still transfer value to related parties — Company Q in §24.3 breaks no rule in the table.
2. **Folding hard disqualifiers into the weighted score.** A fatal finding worth 10 points can be outvoted by five clean answers. An adverse opinion is not a point on a scale; it is the end of the analysis.
3. **Reading the profit before reading the audit opinion.** Chapter 9 set the order for a reason. If the accounts cannot be relied upon, every ratio computed from them is arithmetic on fiction.
4. **Accepting "there are related-party transactions" as normal and stopping there.** In a family-controlled market they are universal. The question is direction and permanence: receivables from related parties that grow every year and never settle are a transfer, not a transaction.
5. **Treating an independent director as independent.** Appointed by the sponsor, paid by the company, serving nine years. Check tenure, appointment history, and other directorships before believing the label.
6. **Missing the auditor change because it is disclosed in AGM notices rather than the annual report.** Auditor shopping is visible only if you look across years. One year's report will never tell you.
7. **Ignoring officer turnover.** A CFO who resigns twice in three years is disclosed through price-sensitive announcements. Finance officers leave over things they cannot sign.
8. **Collecting flags without writing the sentence.** Ten findings that share one cause are one problem observed ten times. If you cannot state what they have in common, you have a checklist result, not an understanding.
9. **Buying the low multiple that the governance work explains.** Chapter 18 warned a low multiple can be a trap. This chapter shows what the trap consists of: **the discount is not the opportunity, it is the disclosure.**`,
      bn: `১. **সিজি কোড মেনে চলাকে সুশাসনের প্রমাণ ভাবা।** কোড বোর্ডের কাঠামো নিয়ন্ত্রণ করে। আচরণ নয়। একটি কোম্পানি প্রতিটি শর্ত পূরণ করেও সম্পর্কিত পক্ষে মূল্য স্থানান্তর করতে পারে — §২৪.৩-এর কোম্পানি Q টেবিলের কোনো নিয়ম ভাঙে না।
২. **কঠোর অযোগ্যতাকে ভারিত স্কোরে ঢোকানো।** ১০ পয়েন্টের একটি মারাত্মক ফলাফল পাঁচটি পরিষ্কার উত্তরে ভোটে হারতে পারে। বিরূপ মতামত মাপকাঠির বিন্দু নয়; এটি বিশ্লেষণের সমাপ্তি।
৩. **নিরীক্ষা মতামত পড়ার আগে মুনাফা পড়া।** অধ্যায় ৯ কারণেই ক্রমটি ঠিক করেছে। হিসাবের ওপর নির্ভর করা না গেলে তা থেকে গণিত প্রতিটি অনুপাত কল্পকাহিনির ওপর পাটিগণিত।
৪. **"সম্পর্কিত-পক্ষের লেনদেন আছে" স্বাভাবিক ধরে থেমে যাওয়া।** পরিবার-নিয়ন্ত্রিত বাজারে এগুলো সর্বজনীন। প্রশ্ন হলো দিক ও স্থায়িত্ব: সম্পর্কিত পক্ষের কাছে যে প্রাপ্য প্রতি বছর বাড়ে ও কখনো নিষ্পত্তি হয় না, তা লেনদেন নয়, স্থানান্তর।
৫. **স্বাধীন পরিচালককে স্বাধীন ধরে নেওয়া।** উদ্যোক্তা কর্তৃক নিযুক্ত, কোম্পানির বেতনভুক্ত, নয় বছর ধরে দায়িত্বে। লেবেল বিশ্বাস করার আগে মেয়াদ, নিয়োগের ইতিহাস ও অন্য পরিচালকপদ যাচাই করুন।
৬. **নিরীক্ষক পরিবর্তন ধরতে না পারা কারণ তা বার্ষিক প্রতিবেদনে নয়, এজিএম নোটিশে প্রকাশিত।** নিরীক্ষক খোঁজাখুঁজি কেবল বছরজুড়ে দেখলেই দৃশ্যমান। এক বছরের প্রতিবেদন কখনো বলবে না।
৭. **কর্মকর্তার পরিবর্তন উপেক্ষা করা।** তিন বছরে দুবার পদত্যাগ করা সিএফও মূল্য-সংবেদনশীল ঘোষণায় প্রকাশিত। অর্থ কর্মকর্তারা এমন জিনিসে চলে যান যাতে তাঁরা স্বাক্ষর করতে পারেন না।
৮. **বাক্যটি না লিখে সংকেত সংগ্রহ করা।** একই কারণ ভাগ করা দশটি ফলাফল হলো একটি সমস্যা দশবার পর্যবেক্ষিত। তাদের মিল কী তা বলতে না পারলে আপনার কাছে চেকলিস্টের ফল আছে, বোঝাপড়া নয়।
৯. **গভর্ন্যান্সের কাজ যে কম গুণিতক ব্যাখ্যা করে তা কেনা।** অধ্যায় ১৮ সতর্ক করেছিল কম গুণিতক ফাঁদ হতে পারে। এই অধ্যায় দেখায় ফাঁদটি কী দিয়ে তৈরি: **ছাড়টি সুযোগ নয়, ছাড়টিই প্রকাশনা।**`,
    },

    tips: {
      en: `- **Open the auditor's report before the income statement, every time.** Chapter 9 established the order; this chapter explains the consequence of breaking it. One sentence there can make the next four hours of ratio work pointless.
- **Keep a one-page governance file per holding, with sources.** Auditor name and tenure, sponsor holding at each quarter, related-party receivables, officer changes, filing dates. Update it quarterly. It takes fifteen minutes and it is the file you will be glad you kept.
- **Diarise the AGM notice, not just the annual report.** Auditor changes and resolutions appear there first. By the time the annual report is printed the change is old news presented as routine.
- **Chart related-party receivables against equity for five years, not one.** A single year's 24% could be a genuine trade balance. Five years of monotonic growth with no settlement is a mechanism.
- **Score the company before you look at its price.** Reading the P/E first creates an anchor that the governance work then has to argue against. Run the scorecard blind, write the verdict down, then look at the multiple.
- **Write the one-sentence pattern statement every time.** If the flags do not resolve into a single coherent story, either you have missed something or the flags are genuinely unrelated — and knowing which is the analysis.
- **Set the rejection threshold once, in writing, and date it.** Same discipline as Chapter 7's cycle framework. A threshold decided while looking at a company you already like is not a threshold.
- **Treat governance as a filter that runs before valuation, not after.** Chapter 25 builds the combined scorecard, and the ordering there is deliberate: a company that fails governance never reaches the valuation stage, because valuing accounts you do not trust is a waste of a good afternoon.`,
      bn: `- **প্রতিবারই আয় বিবরণীর আগে নিরীক্ষকের প্রতিবেদন খুলুন।** অধ্যায় ৯ ক্রমটি প্রতিষ্ঠা করেছে; এই অধ্যায় তা ভাঙার পরিণতি ব্যাখ্যা করে। সেখানকার একটি বাক্য পরবর্তী চার ঘণ্টার অনুপাতের কাজ অর্থহীন করে দিতে পারে।
- **প্রতিটি হোল্ডিংয়ের জন্য উৎসসহ এক পৃষ্ঠার গভর্ন্যান্স ফাইল রাখুন।** নিরীক্ষকের নাম ও মেয়াদ, প্রতি প্রান্তিকে উদ্যোক্তা মালিকানা, সম্পর্কিত-পক্ষের প্রাপ্য, কর্মকর্তা পরিবর্তন, দাখিলের তারিখ। ত্রৈমাসিকভাবে হালনাগাদ করুন। পনেরো মিনিট লাগে, আর এই ফাইলটি রাখার জন্য আপনি খুশি হবেন।
- **কেবল বার্ষিক প্রতিবেদন নয়, এজিএম নোটিশ ডায়েরিতে রাখুন।** নিরীক্ষক পরিবর্তন ও প্রস্তাব সেখানেই আগে আসে। বার্ষিক প্রতিবেদন ছাপা হওয়ার সময় পরিবর্তনটি পুরোনো খবর, রুটিন হিসেবে উপস্থাপিত।
- **এক বছর নয়, পাঁচ বছরে ইকুইটির বিপরীতে সম্পর্কিত-পক্ষের প্রাপ্য চার্ট করুন।** এক বছরের ২৪% প্রকৃত বাণিজ্যিক ভারসাম্য হতে পারে। নিষ্পত্তিহীন পাঁচ বছরের একমুখী প্রবৃদ্ধি একটি কৌশল।
- **দাম দেখার আগে কোম্পানিকে স্কোর করুন।** আগে P/E পড়লে একটি নোঙর তৈরি হয় যার বিরুদ্ধে গভর্ন্যান্সের কাজকে তর্ক করতে হয়। স্কোরকার্ড অন্ধভাবে চালান, রায় লিখে রাখুন, তারপর গুণিতক দেখুন।
- **প্রতিবারই এক-বাক্যের ধরন-বিবৃতি লিখুন।** সংকেতগুলো একটি সুসংগত গল্পে না মিললে হয় আপনি কিছু বাদ দিয়েছেন, নয়তো সংকেতগুলো সত্যিই অসম্পর্কিত — আর কোনটি তা জানাই বিশ্লেষণ।
- **প্রত্যাখ্যানের সীমা একবার, লিখিতভাবে নির্ধারণ করুন, তারিখসহ।** অধ্যায় ৭-এর চক্র কাঠামোর মতোই শৃঙ্খলা। আপনি ইতিমধ্যেই পছন্দ করেন এমন কোম্পানি দেখতে দেখতে ঠিক করা সীমা কোনো সীমা নয়।
- **গভর্ন্যান্সকে মূল্যায়নের পরে নয়, আগে চলা ফিল্টার হিসেবে দেখুন।** অধ্যায় ২৫ সম্মিলিত স্কোরকার্ড তৈরি করে, আর সেখানকার ক্রম ইচ্ছাকৃত: যে কোম্পানি গভর্ন্যান্সে ব্যর্থ হয় সে কখনো মূল্যায়ন পর্যায়ে পৌঁছায় না, কারণ যে হিসাবে আপনি আস্থা রাখেন না তার মূল্যায়ন একটি ভালো বিকেলের অপচয়।`,
    },

    exercises: {
      en: `1. Take any DSE-listed company's latest annual report. Record the audit opinion type verbatim. If there is an emphasis-of-matter paragraph, copy it out in full and write one sentence on why the auditor included it.
2. For that company, find the auditor's name in the last four annual reports. Has it changed? Cross-check against the FRC panel list. Compute the auditor concern index.
3. Find related-party receivables in the notes for five consecutive years. Chart them against shareholders' equity. Is the trend flat, cyclical, or monotonically rising?
4. Pull sponsor/director holding from DSE disclosures for each of the last eight quarters. Compute the 12-month change in percentage points. Plot it against the share price.
5. Build the scorecard from §24.10 and score three companies: one you own, one you rejected, and one currently near the top of a low-P/E screen. Compare the severity scores to the P/E ranking.
6. For the low-P/E company in (5), write the one-sentence pattern statement. If you cannot, list what you would need to read to write it.
7. Find a DSE company that migrated to Z category in the last three years. Working backwards from the migration date, build the T−24 / T−12 / T−6 timeline from §24.1 using only publicly filed documents. How early was the first observable signal?
8. Count how many of the fifteen flags in the scorecard you could answer for a company using only its annual report, and how many required other sources. What does that ratio tell you about relying on a single document?
9. Change the rejection threshold from 40% to 30% and re-score your three companies from (5). Does any verdict change? Justify which threshold you will adopt, in writing, and date it.
10. Take one company where the sponsor holding is exactly at or just above 30%. Compute how many shares would have to be sold to breach the requirement, and what percentage of ADTV (Chapter 2) that represents.`,
      bn: `১. ডিএসই-তে তালিকাভুক্ত যেকোনো কোম্পানির সর্বশেষ বার্ষিক প্রতিবেদন নিন। নিরীক্ষা মতামতের ধরন হুবহু লিপিবদ্ধ করুন। এমফ্যাসিস-অব-ম্যাটার অনুচ্ছেদ থাকলে তা পুরোটা লিখে নিন এবং নিরীক্ষক কেন এটি যুক্ত করলেন সে বিষয়ে এক বাক্য লিখুন।
২. ঐ কোম্পানির শেষ চারটি বার্ষিক প্রতিবেদনে নিরীক্ষকের নাম বের করুন। বদলেছে কি? FRC প্যানেল তালিকার সঙ্গে মিলিয়ে দেখুন। নিরীক্ষক উদ্বেগ সূচক গণনা করুন।
৩. পরপর পাঁচ বছরের নোটে সম্পর্কিত-পক্ষের প্রাপ্য বের করুন। শেয়ারহোল্ডারদের ইকুইটির বিপরীতে চার্ট করুন। প্রবণতা কি সমতল, চক্রীয়, না একমুখী বাড়ন্ত?
৪. গত আট প্রান্তিকের প্রতিটির জন্য ডিএসই প্রকাশনা থেকে উদ্যোক্তা/পরিচালক মালিকানা বের করুন। ১২ মাসের পরিবর্তন শতাংশ পয়েন্টে গণনা করুন। শেয়ারের দামের বিপরীতে প্লট করুন।
৫. §২৪.১০-এর স্কোরকার্ড তৈরি করে তিনটি কোম্পানি স্কোর করুন: একটি যা আপনার আছে, একটি যা প্রত্যাখ্যান করেছেন, আর একটি যা বর্তমানে কম-P/E স্ক্রিনের শীর্ষের কাছে। তীব্রতা স্কোরকে P/E ক্রমের সঙ্গে তুলনা করুন।
৬. (৫)-এর কম-P/E কোম্পানির জন্য এক-বাক্যের ধরন-বিবৃতি লিখুন। না পারলে তা লিখতে আপনার কী কী পড়তে হবে তার তালিকা করুন।
৭. গত তিন বছরে Z শ্রেণিতে স্থানান্তরিত একটি ডিএসই কোম্পানি বের করুন। স্থানান্তরের তারিখ থেকে পেছনে হেঁটে কেবল প্রকাশ্যে দাখিলকৃত নথি ব্যবহার করে §২৪.১-এর T−২৪ / T−১২ / T−৬ সময়রেখা তৈরি করুন। প্রথম পর্যবেক্ষণযোগ্য সংকেত কত আগে ছিল?
৮. স্কোরকার্ডের পনেরোটি সংকেতের কতগুলো আপনি কেবল বার্ষিক প্রতিবেদন দিয়ে উত্তর দিতে পারলেন, আর কতগুলোতে অন্য উৎস লাগল তা গণনা করুন। একটিমাত্র নথির ওপর নির্ভরতা সম্পর্কে ঐ অনুপাত আপনাকে কী বলে?
৯. প্রত্যাখ্যানের সীমা ৪০% থেকে ৩০%-এ বদলে (৫)-এর তিনটি কোম্পানি আবার স্কোর করুন। কোনো রায় কি বদলায়? কোন সীমা গ্রহণ করবেন তা লিখিতভাবে যুক্তিসহ জানান, তারিখসহ।
১০. এমন একটি কোম্পানি নিন যার উদ্যোক্তা মালিকানা ঠিক ৩০%-এ বা সামান্য ওপরে। শর্ত লঙ্ঘন করতে কত শেয়ার বিক্রি করতে হবে এবং তা ADTV-র (অধ্যায় ২) কত শতাংশ, তা গণনা করুন।`,
    },

    summary: {
      en: `- Chapters 10–23 taught you to read what a company reports. **Governance analysis is the check on whether the reported numbers are worth analysing at all**, because every one of them was produced by an interested party.
- The **BSEC Corporate Governance Code (2018)** requires independent directors (≥ one-fifth), separate Chairman and MD, an Audit Committee and NRC chaired by independents, and combined sponsor/director holding of ≥ 30%. **Compliance is necessary, not sufficient** — the Code governs structure, not conduct.
- The real signal sits in five places, none of them the compliance certificate: the **auditor's opinion and the emphasis-of-matter paragraph**, **who the auditor is and for how long**, **related-party receivables**, **sponsor dealings** (Chapter 5), and **filing discipline**.
- **Hard disqualifiers must sit outside the weighted score.** An adverse opinion, sponsor holding below 30%, unfiled accounts, or a regulatory manipulation finding ends the analysis. A fatal finding that can be outvoted by good marks elsewhere is not a disqualifier.
- Scoring: $G = \\sum f_i w_i$, Severity $= G / \\sum w_i \\times 100$, with REJECT above 40%, WATCH above 20%. Position size scales as $\\max(0, 1 - \\text{Severity}/40)$, so the two rules agree at the boundary.
- **Governance failure precedes financial failure.** Auditor change and CFO resignation at T−24; emphasis of matter and sponsor selling at T−12; qualified opinion and postponed AGM at T−6; loss, Z-category migration and forced liquidation at T = 0. Every earlier row was public and free.
- Company Q scores **65.7% severity and is rejected while trading at a P/E of 6.8** against clean Company P at 14.2. Company R scores **zero** and is still rejected on a single adverse opinion. **Sorted by P/E, the two cheapest are the two you must not own.**
- **Discipline established:** run the hard-disqualifier gate before computing any score, score the company before looking at its price, and write one sentence naming what the flags have in common — because ten findings sharing one cause are one problem observed ten times.`,
      bn: `- অধ্যায় ১০–২৩ আপনাকে শিখিয়েছে একটি কোম্পানি কী প্রতিবেদন করে তা পড়তে। **গভর্ন্যান্স বিশ্লেষণ হলো প্রতিবেদিত সংখ্যাগুলো আদৌ বিশ্লেষণের যোগ্য কি না তার যাচাই**, কারণ প্রতিটিই একটি স্বার্থসংশ্লিষ্ট পক্ষের তৈরি।
- **বিএসইসি কর্পোরেট গভর্ন্যান্স কোড (২০১৮)** দাবি করে স্বাধীন পরিচালক (≥ এক-পঞ্চমাংশ), পৃথক চেয়ারম্যান ও এমডি, স্বাধীনদের সভাপতিত্বে নিরীক্ষা কমিটি ও NRC, এবং সম্মিলিত উদ্যোক্তা/পরিচালক মালিকানা ≥ ৩০%। **সম্মতি প্রয়োজনীয়, যথেষ্ট নয়** — কোড কাঠামো নিয়ন্ত্রণ করে, আচরণ নয়।
- প্রকৃত সংকেত পাঁচ জায়গায়, যার কোনোটিই সম্মতি সনদ নয়: **নিরীক্ষকের মতামত ও এমফ্যাসিস-অব-ম্যাটার অনুচ্ছেদ**, **নিরীক্ষক কে ও কতদিন**, **সম্পর্কিত-পক্ষের প্রাপ্য**, **উদ্যোক্তার লেনদেন** (অধ্যায় ৫), এবং **দাখিলের শৃঙ্খলা**।
- **কঠোর অযোগ্যতা ভারিত স্কোরের বাইরে থাকতে হবে।** বিরূপ মতামত, ৩০%-এর নিচে উদ্যোক্তা মালিকানা, অদাখিলকৃত হিসাব, বা নিয়ন্ত্রক কারসাজির সিদ্ধান্ত বিশ্লেষণ শেষ করে দেয়। যে মারাত্মক ফলাফল অন্যত্র ভালো নম্বরে ভোটে হারতে পারে তা অযোগ্যতা নয়।
- স্কোরিং: $G = \\sum f_i w_i$, তীব্রতা $= G / \\sum w_i \\times 100$, ৪০%-এর ওপরে প্রত্যাখ্যান, ২০%-এর ওপরে নজরদারি। পজিশনের আকার $\\max(0, 1 - \\text{তীব্রতা}/40)$ অনুযায়ী চলে, তাই দুটি নিয়ম প্রান্তে মিলে যায়।
- **আর্থিক ব্যর্থতার আগে গভর্ন্যান্স ব্যর্থতা আসে।** T−২৪-এ নিরীক্ষক পরিবর্তন ও সিএফও পদত্যাগ; T−১২-তে এমফ্যাসিস অব ম্যাটার ও উদ্যোক্তার বিক্রয়; T−৬-এ যোগ্যতাসহ মতামত ও স্থগিত এজিএম; T = ০-তে লোকসান, Z-শ্রেণিতে স্থানান্তর ও বাধ্যতামূলক তারল্যকরণ। আগের প্রতিটি সারি ছিল প্রকাশ্য ও বিনামূল্যের।
- কোম্পানি Q **৬৫.৭% তীব্রতা পায় ও প্রত্যাখ্যাত হয়, অথচ লেনদেন হয় ৬.৮ P/E-তে**, যেখানে পরিচ্ছন্ন কোম্পানি P ১৪.২-তে। কোম্পানি R **শূন্য** স্কোর পেয়েও একটিমাত্র বিরূপ মতামতে প্রত্যাখ্যাত। **P/E অনুযায়ী সাজালে সবচেয়ে সস্তা দুটিই সেগুলো যেগুলোর মালিকানায় থাকা উচিত নয়।**
- **প্রতিষ্ঠিত শৃঙ্খলা:** কোনো স্কোর গণনার আগে কঠোর-অযোগ্যতার গেট চালান, দাম দেখার আগে কোম্পানিকে স্কোর করুন, এবং সংকেতগুলোতে কী মিল তা এক বাক্যে লিখুন — কারণ একই কারণ ভাগ করা দশটি ফলাফল হলো একটি সমস্যা দশবার পর্যবেক্ষিত।`,
    },
  },

  interview: [
    {
      q: {
        en: 'A company files a clean Corporate Governance compliance certificate. What does that prove?',
        bn: 'একটি কোম্পানি পরিচ্ছন্ন কর্পোরেট গভর্ন্যান্স সম্মতি সনদ দাখিল করে। এটি কী প্রমাণ করে?',
      },
      a: {
        en: 'That its board structure meets the Code — independent directors at or above one-fifth, chairman and managing director as separate persons, an audit committee and NRC chaired by independents, sponsors holding at least thirty percent combined. It proves nothing about conduct. The Code governs structure, and structure and behaviour are only loosely related. An independent director appointed by the sponsor family, paid by the company, and serving nine years satisfies the certificate and no reasonable definition of independence. Compliance is a necessary condition for investing, never a sufficient one, and I would read the compliance report to learn what is missing rather than to be reassured.',
        bn: 'যে এর বোর্ড কাঠামো কোড মেনে চলে — স্বাধীন পরিচালক এক-পঞ্চমাংশ বা তার বেশি, চেয়ারম্যান ও ব্যবস্থাপনা পরিচালক পৃথক ব্যক্তি, স্বাধীনদের সভাপতিত্বে নিরীক্ষা কমিটি ও NRC, উদ্যোক্তাদের সম্মিলিত অন্তত ত্রিশ শতাংশ। আচরণ সম্পর্কে এটি কিছুই প্রমাণ করে না। কোড কাঠামো নিয়ন্ত্রণ করে, আর কাঠামো ও আচরণের সম্পর্ক শিথিল। উদ্যোক্তা পরিবার কর্তৃক নিযুক্ত, কোম্পানির বেতনভুক্ত, নয় বছর ধরে দায়িত্বে থাকা একজন স্বাধীন পরিচালক সনদ পূরণ করেন কিন্তু স্বাধীনতার কোনো যুক্তিসঙ্গত সংজ্ঞা নয়। বিনিয়োগের জন্য সম্মতি একটি প্রয়োজনীয় শর্ত, কখনোই যথেষ্ট নয়, আর আমি সম্মতি প্রতিবেদন পড়ব আশ্বস্ত হতে নয়, কী অনুপস্থিত তা জানতে।',
      },
    },
    {
      q: {
        en: 'Why must hard disqualifiers sit outside the weighted score rather than inside it?',
        bn: 'কঠোর অযোগ্যতা কেন ভারিত স্কোরের ভেতরে না থেকে বাইরে থাকতে হবে?',
      },
      a: {
        en: 'Because a finding that can be outvoted is not a disqualifier. If an adverse audit opinion is worth ten points in a hundred-point model, a company with a worthless audit can pass by scoring well on ten other lines, and the model will recommend buying a business whose accounts an auditor refused to certify. The worked example makes it concrete: Company R has a zero weighted score, every other flag clean, and is still rejected on a single adverse opinion. Structurally the gate must be evaluated first and return before the score is computed, which is also why the position-sizing rule returns zero whenever a disqualifier is present rather than scaling smoothly.',
        bn: 'কারণ যে ফলাফলকে ভোটে হারানো যায় তা অযোগ্যতা নয়। একশো পয়েন্টের মডেলে বিরূপ নিরীক্ষা মতামত দশ পয়েন্টের হলে, মূল্যহীন নিরীক্ষার একটি কোম্পানি অন্য দশটি লাইনে ভালো করে উত্তীর্ণ হতে পারে, আর মডেলটি এমন ব্যবসা কিনতে সুপারিশ করবে যার হিসাব একজন নিরীক্ষক প্রত্যয়ন করতে অস্বীকার করেছেন। উদাহরণটি বিষয়টি বাস্তব করে: কোম্পানি R-এর ভারিত স্কোর শূন্য, অন্য প্রতিটি সংকেত পরিষ্কার, আর তবুও একটিমাত্র বিরূপ মতামতে প্রত্যাখ্যাত। কাঠামোগতভাবে গেটটি আগে মূল্যায়িত হয়ে স্কোর গণনার আগেই ফেরত দিতে হবে, আর এ কারণেই কোনো অযোগ্যতা উপস্থিত থাকলে পজিশন-সাইজিং নিয়মটি মসৃণভাবে না কমে শূন্য ফেরত দেয়।',
      },
    },
    {
      q: {
        en: 'How do you distinguish normal related-party transactions from value extraction?',
        bn: 'স্বাভাবিক সম্পর্কিত-পক্ষের লেনদেনকে মূল্য নিষ্কাশন থেকে কীভাবে আলাদা করবেন?',
      },
      a: {
        en: 'By direction and permanence rather than by existence. In a family-controlled market related-party transactions are universal, so their presence carries almost no information. What matters is whether the listed company is lending to related entities and being repaid. A trade balance that fluctuates and settles within normal terms is a transaction. Receivables from related parties that grow every year, are never settled, and reach a material share of equity are a transfer of shareholder capital to a private entity conducted in plain sight. I would chart related-party receivables against equity over five years, not one, because a single year at twenty-four percent could be a genuine balance while five years of monotonic growth with no settlement is a mechanism.',
        bn: 'অস্তিত্ব দিয়ে নয়, দিক ও স্থায়িত্ব দিয়ে। পরিবার-নিয়ন্ত্রিত বাজারে সম্পর্কিত-পক্ষের লেনদেন সর্বজনীন, তাই এদের উপস্থিতি প্রায় কোনো তথ্য বহন করে না। গুরুত্বপূর্ণ হলো তালিকাভুক্ত কোম্পানি সম্পর্কিত সত্তাকে ধার দিচ্ছে কি না এবং ফেরত পাচ্ছে কি না। যে বাণিজ্যিক ভারসাম্য ওঠানামা করে ও স্বাভাবিক শর্তে নিষ্পত্তি হয় তা একটি লেনদেন। সম্পর্কিত পক্ষের কাছে যে প্রাপ্য প্রতি বছর বাড়ে, কখনো নিষ্পত্তি হয় না, এবং ইকুইটির উল্লেখযোগ্য অংশে পৌঁছায় তা প্রকাশ্যে পরিচালিত শেয়ারহোল্ডারের মূলধনের একটি ব্যক্তিগত সত্তায় স্থানান্তর। আমি এক বছর নয়, পাঁচ বছরে ইকুইটির বিপরীতে সম্পর্কিত-পক্ষের প্রাপ্য চার্ট করব, কারণ এক বছরের চব্বিশ শতাংশ প্রকৃত ভারসাম্য হতে পারে, আর নিষ্পত্তিহীন পাঁচ বছরের একমুখী প্রবৃদ্ধি একটি কৌশল।',
      },
    },
    {
      q: {
        en: 'A company trades at a P/E of 6.8 against a sector average of 14. Walk me through your first hour.',
        bn: 'একটি কোম্পানি ১৪ খাত গড়ের বিপরীতে ৬.৮ P/E-তে লেনদেন হচ্ছে। আপনার প্রথম ঘণ্টাটি বলুন।',
      },
      a: {
        en: 'I would spend it establishing whether the discount is an opportunity or a disclosure, and I would deliberately not look at the price again until I had. First the auditor\'s report — opinion type, and any emphasis-of-matter paragraph read in full. Then the auditor\'s identity, tenure, and whether they are on the FRC panel, cross-checked across four years of AGM notices for changes. Then related-party receivables as a share of equity over five years. Then sponsor holding by quarter for the last two years. Then filing dates and officer turnover. Only then the score. In the worked example that process returns sixty-six percent severity and a rejection on a company whose low multiple is precisely what the governance failure produced. The discount is not the opportunity; it is the market pricing the probability that the reported earnings are not the shareholders\'.',
        bn: 'আমি সেটি ব্যয় করব এটি নির্ধারণে যে ছাড়টি সুযোগ না প্রকাশনা, এবং তা না হওয়া পর্যন্ত ইচ্ছাকৃতভাবে দামের দিকে আর তাকাব না। প্রথমে নিরীক্ষকের প্রতিবেদন — মতামতের ধরন, এবং যেকোনো এমফ্যাসিস-অব-ম্যাটার অনুচ্ছেদ পুরোটা পড়া। তারপর নিরীক্ষকের পরিচয়, মেয়াদ, এবং তিনি FRC প্যানেলে আছেন কি না, পরিবর্তনের জন্য চার বছরের এজিএম নোটিশে মিলিয়ে দেখা। তারপর পাঁচ বছরে ইকুইটির অংশ হিসেবে সম্পর্কিত-পক্ষের প্রাপ্য। তারপর গত দুই বছরের প্রতি প্রান্তিকে উদ্যোক্তা মালিকানা। তারপর দাখিলের তারিখ ও কর্মকর্তার পরিবর্তন। তবেই স্কোর। উদাহরণে ঐ প্রক্রিয়া ছেষট্টি শতাংশ তীব্রতা ও প্রত্যাখ্যান ফেরত দেয় এমন একটি কোম্পানিতে যার কম গুণিতক ঠিক ঐ গভর্ন্যান্স ব্যর্থতারই ফল। ছাড়টি সুযোগ নয়; এটি বাজারের দেওয়া সেই সম্ভাবনার দাম যে প্রতিবেদিত আয় শেয়ারহোল্ডারদের নয়।',
      },
    },
    {
      q: {
        en: 'Why is governance analysis worth doing when the financial statements are already available?',
        bn: 'আর্থিক বিবরণী ইতিমধ্যেই পাওয়া গেলে গভর্ন্যান্স বিশ্লেষণ করার যোগ্য কেন?',
      },
      a: {
        en: 'Because governance deterioration is observable well before it reaches the accounts. By the time the numbers show distress, the loss has already happened and the price has usually moved. The sequence is fairly consistent: auditor change and CFO resignation around twenty-four months out; an emphasis-of-matter paragraph, sponsor selling and late filing at twelve months; a qualified opinion and a postponed AGM at six; then the loss, Z-category migration, forced liquidation by every margin holder, and the price collapse. Chapters four and five explain why that last stage is violent. Every row before it was publicly filed and free to read. Retail investors are surprised by these outcomes not because the information was concealed but because reading it means opening four documents rather than looking at one price.',
        bn: 'কারণ গভর্ন্যান্সের অবনতি হিসাবে পৌঁছানোর অনেক আগেই পর্যবেক্ষণযোগ্য। সংখ্যায় যখন সংকট দেখা দেয়, ক্ষতি ততক্ষণে ঘটে গেছে এবং দাম সাধারণত সরে গেছে। ক্রমটি মোটামুটি সুসংগত: প্রায় চব্বিশ মাস আগে নিরীক্ষক পরিবর্তন ও সিএফও পদত্যাগ; বারো মাসে এমফ্যাসিস-অব-ম্যাটার অনুচ্ছেদ, উদ্যোক্তার বিক্রয় ও দেরিতে দাখিল; ছয় মাসে যোগ্যতাসহ মতামত ও স্থগিত এজিএম; তারপর লোকসান, Z-শ্রেণিতে স্থানান্তর, প্রতিটি মার্জিন ধারকের বাধ্যতামূলক তারল্যকরণ, ও দামের ধস। অধ্যায় চার ও পাঁচ ব্যাখ্যা করে শেষ ধাপটি কেন এত হিংস্র। এর আগের প্রতিটি সারি প্রকাশ্যে দাখিলকৃত ও বিনামূল্যে পাঠযোগ্য ছিল। খুচরা বিনিয়োগকারীরা এই পরিণতিতে বিস্মিত হন তথ্য গোপন ছিল বলে নয়, বরং তা পড়তে একটি দামের দিকে তাকানোর বদলে চারটি নথি খুলতে হয় বলে।',
      },
    },
    {
      q: {
        en: 'You have ten red flags on a company. What do you do before writing your conclusion?',
        bn: 'একটি কোম্পানিতে আপনার দশটি বিপদ সংকেত আছে। উপসংহার লেখার আগে আপনি কী করবেন?',
      },
      a: {
        en: 'Write one sentence stating what the flags have in common. Ten findings that share a single cause are one problem observed ten times, and the total score conceals that. In the worked case the auditor changed and then flagged a concern, related-party receivables reached a quarter of equity and kept growing, sponsors cut nine points of their holding, the CFO left twice, and accounts were filed late — which resolves into: capital is moving from the listed company to related entities, the informed parties are reducing exposure, and every link in the reporting chain that would document it has been weakened. If I can write that sentence I have understood the company. If I can only recite a severity percentage, I have completed a checklist and learned nothing, and I should go back and find the connection or establish that there genuinely is not one.',
        bn: 'এক বাক্যে লিখব সংকেতগুলোতে কী মিল। একই কারণ ভাগ করা দশটি ফলাফল হলো একটি সমস্যা দশবার পর্যবেক্ষিত, আর মোট স্কোর তা আড়াল করে। উদাহরণে নিরীক্ষক বদলালেন ও তারপর একটি উদ্বেগ চিহ্নিত করলেন, সম্পর্কিত-পক্ষের প্রাপ্য ইকুইটির এক-চতুর্থাংশে পৌঁছে বাড়তে থাকল, উদ্যোক্তারা নয় পয়েন্ট মালিকানা কমালেন, সিএফও দুবার চলে গেলেন, আর হিসাব দেরিতে দাখিল হলো — যা দাঁড়ায়: মূলধন তালিকাভুক্ত কোম্পানি থেকে সম্পর্কিত সত্তায় যাচ্ছে, অবহিত পক্ষগুলো এক্সপোজার কমাচ্ছে, আর যে প্রতিবেদন শৃঙ্খল এটি নথিভুক্ত করত তার প্রতিটি সংযোগ দুর্বল করা হয়েছে। ঐ বাক্যটি লিখতে পারলে আমি কোম্পানিটি বুঝেছি। কেবল একটি তীব্রতার শতাংশ আওড়াতে পারলে আমি একটি চেকলিস্ট শেষ করেছি ও কিছুই শিখিনি, আর আমার ফিরে গিয়ে সংযোগটি খুঁজে বের করা উচিত, নয়তো প্রতিষ্ঠা করা উচিত যে সত্যিই কোনো সংযোগ নেই।',
      },
    },
  ],

  quiz: [
    {
      q: {
        en: 'The BSEC Corporate Governance Code requires independent directors of at least:',
        bn: 'বিএসইসি কর্পোরেট গভর্ন্যান্স কোড স্বাধীন পরিচালক দাবি করে অন্তত:',
      },
      options: {
        en: ['One-tenth of the board', 'One-fifth of the board', 'One-third of the board', 'Half the board'],
        bn: ['বোর্ডের এক-দশমাংশ', 'বোর্ডের এক-পঞ্চমাংশ', 'বোর্ডের এক-তৃতীয়াংশ', 'বোর্ডের অর্ধেক'],
      },
      answer: 1,
    },
    {
      q: {
        en: 'Sponsors and directors must collectively hold at least:',
        bn: 'উদ্যোক্তা ও পরিচালকদের সম্মিলিতভাবে ধারণ করতে হয় অন্তত:',
      },
      options: { en: ['2%', '10%', '30%', '51%'], bn: ['২%', '১০%', '৩০%', '৫১%'] },
      answer: 2,
    },
    {
      q: {
        en: 'An adverse audit opinion should be treated as:',
        bn: 'বিরূপ নিরীক্ষা মতামতকে গণ্য করা উচিত:',
      },
      options: {
        en: [
          'A weighted flag worth about 10 points',
          'A hard disqualifier that ends the analysis',
          'A minor disclosure issue',
          'Relevant only for banks',
        ],
        bn: [
          'প্রায় ১০ পয়েন্টের একটি ভারিত সংকেত',
          'একটি কঠোর অযোগ্যতা যা বিশ্লেষণ শেষ করে দেয়',
          'একটি ছোটখাটো প্রকাশনা সমস্যা',
          'কেবল ব্যাংকের জন্য প্রাসঙ্গিক',
        ],
      },
      answer: 1,
    },
    {
      q: {
        en: 'Ten flags present with weights summing to 69, out of a maximum 105. Severity is:',
        bn: '১০৫ সর্বোচ্চের মধ্যে ৬৯ ওজনের দশটি সংকেত উপস্থিত। তীব্রতা:',
      },
      options: { en: ['52.4%', '65.7%', '69.0%', '76.1%'], bn: ['৫২.৪%', '৬৫.৭%', '৬৯.০%', '৭৬.১%'] },
      answer: 1,
    },
    {
      q: {
        en: 'Related-party receivables are best assessed by:',
        bn: 'সম্পর্কিত-পক্ষের প্রাপ্য সবচেয়ে ভালোভাবে মূল্যায়ন করা যায়:',
      },
      options: {
        en: [
          'Whether they exist at all',
          'Their direction and whether they ever settle',
          'The number of related parties',
          'Whether they are disclosed in Bangla',
        ],
        bn: [
          'সেগুলো আদৌ আছে কি না দিয়ে',
          'সেগুলোর দিক ও কখনো নিষ্পত্তি হয় কি না দিয়ে',
          'সম্পর্কিত পক্ষের সংখ্যা দিয়ে',
          'সেগুলো বাংলায় প্রকাশিত কি না দিয়ে',
        ],
      },
      answer: 1,
    },
    {
      q: {
        en: 'A company with zero weighted flags but a disclaimer of opinion should be:',
        bn: 'শূন্য ভারিত সংকেত অথচ মতামতের দাবিত্যাগসহ একটি কোম্পানিকে করা উচিত:',
      },
      options: {
        en: ['Accepted — the score is clean', 'Rejected — the gate fires first', 'Watched with reduced size', 'Valued at a discount'],
        bn: ['গ্রহণ — স্কোর পরিষ্কার', 'প্রত্যাখ্যান — গেট আগে কাজ করে', 'কম আকারে নজরদারি', 'ছাড়ে মূল্যায়ন'],
      },
      answer: 1,
    },
    {
      q: {
        en: 'In the governance failure timeline, an auditor change typically appears at about:',
        bn: 'গভর্ন্যান্স ব্যর্থতার সময়রেখায় নিরীক্ষক পরিবর্তন সাধারণত দেখা দেয় প্রায়:',
      },
      options: { en: ['T−24 months', 'T−6 months', 'T = 0', 'T+6 months'], bn: ['T−২৪ মাস', 'T−৬ মাস', 'T = ০', 'T+৬ মাস'] },
      answer: 0,
    },
    {
      q: {
        en: 'Passing the CG Code’s compliance requirements proves:',
        bn: 'সিজি কোডের সম্মতি শর্ত পূরণ প্রমাণ করে:',
      },
      options: {
        en: [
          'The company is well governed',
          'Board structure meets the Code, nothing about conduct',
          'The accounts are accurate',
          'Sponsors will not sell',
        ],
        bn: [
          'কোম্পানিটি সুশাসিত',
          'বোর্ড কাঠামো কোড মেনে চলে, আচরণ সম্পর্কে কিছু নয়',
          'হিসাব নির্ভুল',
          'উদ্যোক্তারা বিক্রি করবেন না',
        ],
      },
      answer: 1,
    },
    {
      q: {
        en: 'The position size multiplier max(0, 1 − Severity/40) at a severity of 20% gives:',
        bn: '২০% তীব্রতায় পজিশন আকার গুণক max(0, 1 − তীব্রতা/৪০) দেয়:',
      },
      options: { en: ['0.00', '0.20', '0.50', '0.80'], bn: ['০.০০', '০.২০', '০.৫০', '০.৮০'] },
      answer: 2,
    },
    {
      q: {
        en: 'When ten flags all point to one underlying cause, the correct response is to:',
        bn: 'দশটি সংকেতই একটি অন্তর্নিহিত কারণে নির্দেশ করলে সঠিক প্রতিক্রিয়া:',
      },
      options: {
        en: [
          'Report the total score only',
          'Write one sentence naming the shared cause',
          'Treat them as ten independent risks',
          'Reduce each weight proportionally',
        ],
        bn: [
          'কেবল মোট স্কোর জানানো',
          'অভিন্ন কারণটি নাম ধরে এক বাক্যে লেখা',
          'এদের দশটি স্বাধীন ঝুঁকি হিসেবে গণ্য করা',
          'প্রতিটি ওজন সমানুপাতিকভাবে কমানো',
        ],
      },
      answer: 1,
    },
  ],
};
