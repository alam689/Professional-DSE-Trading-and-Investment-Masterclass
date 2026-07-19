/**
 * Chapter 9 — Reading the Annual Report
 * Part II, Company Analysis. Opens the Part.
 */

export default {
  n: 9,
  tools: [],

  excelSheet: {
    filename: 'ch09-audit-red-flag-scorer.xlsx',
    sheetName: 'Red Flag Scorer',
    cells: [
      { cell: 'A1', v: 'RED FLAG' }, { cell: 'B1', v: 'WEIGHT' },
      { cell: 'C1', v: 'PRESENT (1/0)' }, { cell: 'D1', v: 'SCORE' },

      { cell: 'A2', v: 'Opinion not unqualified' }, { cell: 'B2', v: 25 },
      { cell: 'C2', v: 1 }, { cell: 'D2', f: 'B2*C2' },
      { cell: 'A3', v: 'Going-concern paragraph present' }, { cell: 'B3', v: 18 },
      { cell: 'C3', v: 1 }, { cell: 'D3', f: 'B3*C3' },
      { cell: 'A4', v: 'Emphasis of matter present' }, { cell: 'B4', v: 6 },
      { cell: 'C4', v: 1 }, { cell: 'D4', f: 'B4*C4' },
      { cell: 'A5', v: 'Auditor not on FRC/BSEC panel' }, { cell: 'B5', v: 9 },
      { cell: 'C5', v: 1 }, { cell: 'D5', f: 'B5*C5' },
      { cell: 'A6', v: 'Auditor changed <=2 yrs, unexplained' }, { cell: 'B6', v: 6 },
      { cell: 'C6', v: 0 }, { cell: 'D6', f: 'B6*C6' },
      { cell: 'A7', v: 'RP exposure > 10% of total assets' }, { cell: 'B7', v: 12 },
      { cell: 'C7', v: 1 }, { cell: 'D7', f: 'B7*C7' },
      { cell: 'A8', v: 'Contingent liabilities > 25% of equity' }, { cell: 'B8', v: 7 },
      { cell: 'C8', v: 1 }, { cell: 'D8', f: 'B8*C8' },
      { cell: 'A9', v: 'Receivable growth > 2x revenue growth' }, { cell: 'B9', v: 6 },
      { cell: 'C9', v: 1 }, { cell: 'D9', f: 'B9*C9' },
      { cell: 'A10', v: "Directors' report inconsistent with accounts" }, { cell: 'B10', v: 4 },
      { cell: 'C10', v: 0 }, { cell: 'D10', f: 'B10*C10' },
      { cell: 'A11', v: 'CFO negative while PAT positive' }, { cell: 'B11', v: 7 },
      { cell: 'C11', v: 1 }, { cell: 'D11', f: 'B11*C11' },

      { cell: 'A13', v: 'MAXIMUM WEIGHT' }, { cell: 'D13', f: 'SUM(B2:B11)' },
      { cell: 'A14', v: 'RED-FLAG SCORE' }, { cell: 'D14', f: 'SUM(D2:D11)' },
      { cell: 'A15', v: 'VERDICT' },
      {
        cell: 'D15',
        f: 'IF(D14>=50,"UNINVESTABLE",IF(D14>=30,"ELEVATED RISK",IF(D14>=15,"MONITOR","CLEAN")))',
      },

      { cell: 'A17', v: 'Related-Party Receivables (BDT cr)' }, { cell: 'B17', v: 148 },
      { cell: 'A18', v: 'Total Assets (BDT cr)' }, { cell: 'B18', v: 910 },
      { cell: 'A19', v: 'RP Exposure (% of assets)' }, { cell: 'B19', f: 'B17/B18*100' },
      { cell: 'A20', v: 'Net Profit (BDT cr)' }, { cell: 'B20', v: 48 },
      { cell: 'A21', v: 'RP Exposure (x net profit)' }, { cell: 'B21', f: 'B17/B20' },
      { cell: 'A22', v: 'Impairment % that erases one year PAT' }, { cell: 'B22', f: 'B20/B17*100' },

      { cell: 'A24', v: 'NOTE' },
      { cell: 'B24', v: 'Score the auditor before you score the company. Column C is the only column you fill in.' },
    ],
  },

  objectives: {
    en: [
      'State the correct reading order of an annual report and justify why the auditor comes first.',
      'Distinguish unqualified, qualified, adverse and disclaimer opinions and name what each permits you to conclude.',
      'Separate an emphasis-of-matter paragraph from a modification, and identify a going-concern warning.',
      'Compute the Related Party Exposure ratio and the impairment percentage that erases one year of profit.',
      'Score an annual report on a weighted red-flag scale and reach a verdict independent of headline EPS.',
    ],
    bn: [
      'বার্ষিক প্রতিবেদন পড়ার সঠিক ক্রম বলা এবং কেন নিরীক্ষক সবার আগে তা যুক্তি দিয়ে দেখানো।',
      'অযোগ্যতাহীন, শর্তযুক্ত, বিরূপ ও মতামত-প্রত্যাখ্যান — এই মতামতগুলো পৃথক করা এবং প্রতিটি থেকে কী সিদ্ধান্তে আসা যায় তা বলা।',
      'বিষয়-নির্দেশক অনুচ্ছেদকে মতামত পরিবর্তন থেকে আলাদা করা এবং চলমানতার সতর্কবার্তা শনাক্ত করা।',
      'সম্পর্কিত-পক্ষ এক্সপোজার অনুপাত এবং এক বছরের মুনাফা মুছে দেওয়া অবচয়ের শতাংশ গণনা করা।',
      'ভারযুক্ত লাল-পতাকা স্কেলে বার্ষিক প্রতিবেদনের স্কোর করা এবং শিরোনাম EPS নির্বিশেষে সিদ্ধান্তে পৌঁছানো।',
    ],
  },

  blocks: {
    theory: {
      en: `Part I closed with a claim: structure and cycle tell you *whether* to be in the market. Part II opens with the other half — *what* to own. And the first document, before any ratio, is the annual report.

Most retail investors in Bangladesh never open one. They read the EPS headline on a news portal and stop. **The EPS headline is the single least informative number in the entire document, because it is the one number every party in the chain has an incentive to manage.**

### What the annual report actually contains

A BSEC-compliant listed-company annual report has, roughly in printed order:

| Section | Prepared by | Audited? |
|---|---|---|
| Chairman's statement | Chairman | No |
| Directors' report | Board | No |
| Corporate governance compliance report | Company secretary | Certified separately |
| MD&A / operational review | Management | No |
| **Independent Auditor's Report** | **External auditor** | **This *is* the audit** |
| Statement of financial position | Management | Yes |
| Statement of profit or loss | Management | Yes |
| Statement of changes in equity | Management | Yes |
| Statement of cash flows | Management | Yes |
| **Notes to the financial statements** | Management, audited | Yes |

Note the asymmetry. The glossy front half is unaudited advocacy. The back half is the part somebody signed their licence against.

### The correct reading order

Not front to back. This order:

**1. The Independent Auditor's Report.** Always first. It takes ninety seconds and it can end the analysis. If the opinion is modified, nothing that follows can be relied on at face value.

**2. The notes.** Specifically: related-party transactions, contingent liabilities, trade receivables ageing, inventory, borrowings and their covenants, and the accounting-policy note on revenue recognition. **The notes are where the financial statements are actually written.** The face of the statements is a summary of the notes, not the other way round.

**3. The statement of cash flows.** Chapter 11 develops this. For now: profit is an opinion, cash is a fact, and the reconciliation between them lives here.

**4. The income statement and balance sheet.** By this point you already know what they will say.

**5. The MD&A and directors' report. Last, and read adversarially.** Not because directors lie, but because this section is written to persuade and is not audited. Reading it first anchors you to management's framing before you have your own.

### The four audit opinions

Under the International Standards on Auditing as adopted in Bangladesh (BSA, issued by ICAB), the auditor expresses one of four opinions:

| Opinion | Wording signature | What it means | What you should do |
|---|---|---|---|
| **Unqualified** | "present fairly, in all material respects" | The auditor found nothing material and pervasive requiring modification | Proceed to the notes |
| **Qualified** | "except for…" | A specific, material misstatement or a specific inability to obtain evidence — **but confined** | Quantify the "except for" item. Assume it is worse than stated |
| **Adverse** | "do not present fairly" | Misstatement is material **and pervasive**. The accounts, as a whole, are wrong | Do not invest. There is no analysis to do |
| **Disclaimer** | "we do not express an opinion" | The auditor could not obtain sufficient evidence, pervasively | Worse than adverse in practice. It means nobody knows what is in this company |

The distinction between qualified and adverse is the word **pervasive**. A qualified opinion says one drawer is a mess. An adverse opinion says the filing system is a mess. A disclaimer says the auditor was not allowed into the room.

**On the DSE, modified opinions are not rare.** They cluster in textiles, small NBFIs, and the more distressed end of engineering and jute. A modified opinion on a company still trading at a positive P/E is a common sight, which tells you the market is not reading the opinion either.

### Emphasis of matter is not a modification

This is the most frequently misread paragraph in the document. An **Emphasis of Matter (EOM)** paragraph draws attention to something already correctly disclosed in the accounts. **The opinion remains unqualified.** The auditor is saying: I agree with the numbers, and I want you to look at this note.

That is not a clean bill of health. It is the auditor pointing at something without being able to say it is wrong. Common EOM subjects on the DSE: a pending tax assessment, a large legal case, a subsequent-event revaluation, or an unresolved dispute with a lender.

**Going concern is the one that matters most.** Under BSA 570, if there is material uncertainty about the entity's ability to continue operating for at least twelve months, the auditor must include a **Material Uncertainty Related to Going Concern** section. This is distinct from an EOM and distinct from a qualification.

A going-concern paragraph means the auditor is telling you, in the most restrained language the profession permits, that this company may not exist in a year. **It appears in DSE annual reports every single year and is routinely ignored by the market.** Chapter 5 established that sponsor selling is the highest-quality free signal on this exchange. A going-concern paragraph is the second.

### Who signs it, and why the FRC panel matters

Bangladesh established the **Financial Reporting Council (FRC)** under the *Financial Reporting Act, 2015*, operational from 2017. Before the FRC, audit quality oversight sat effectively with ICAB — a self-regulatory arrangement with the same structural conflict Chapter 1 identified in the pre-demutualization exchange: the regulated regulating themselves.

Two things follow that you can act on:

**1. The FRC maintains a panel of audit firms eligible to audit public interest entities.** Being off that panel, or auditing a listed company through a firm with no listed-audit track record, is information. It is a choice the board made.

**2. An unexplained auditor change is a signal.** Auditors are appointed by shareholders at the AGM but proposed by the board. A firm that resigns mid-engagement, or is replaced immediately after issuing a modified opinion, is telling you something the successor's clean opinion is not. **Read the two years together, not one.**

Also relevant: BSEC has capped consecutive-year audit tenure for listed companies, forcing rotation. This means an auditor change is not automatically suspicious — you must check whether it was a mandated rotation or an unexplained departure.

### Related-party transactions

**IAS 24**, as adopted in Bangladesh, requires disclosure of transactions with related parties — parent, subsidiaries, associates, key management personnel, and entities under common control.

This note is the highest-value page in a Bangladeshi annual report, for a specific structural reason: **most DSE-listed companies sit inside a family group, and the listed entity is only one vehicle among many the sponsor controls.** The unlisted sister companies are where the group's other interests live. Cash can move between them.

The mechanisms to look for:

- **Receivables from related parties that never settle.** The listed company sells to a sister concern on credit. The sale books revenue and profit. The cash never arrives. Year after year the receivable grows. This is a dividend to the sponsor disguised as a sale.
- **Interest-free loans and advances to related parties.** Minority shareholders' capital, deployed at zero return, outside the listed entity.
- **Purchases from a related supplier at above-market prices.** Margin leaves the listed company through COGS.
- **Corporate guarantees given for a sister company's bank borrowing.** This shows up in contingent liabilities, not on the balance sheet, until it does.

### Contingent liabilities

Under **IAS 37**, a contingent liability is a possible obligation whose existence depends on an uncertain future event, or a present obligation not recognised because outflow is not probable or cannot be measured reliably. It is disclosed in the notes, **not recognised on the balance sheet**.

Typical DSE contents: bank guarantees, letters of credit, disputed VAT and income-tax demands, and pending litigation.

The right question is not "is it recognised." It is: **what is this number as a percentage of equity, and what happens to the balance sheet if it crystallises?** A company with BDT 300 crore of equity and BDT 190 crore of contingent liabilities is not a company with BDT 300 crore of equity. It is a company with a conditional claim on two-thirds of it.

### The directors' report versus the audited numbers

The directors' report is unaudited. It contains targets, achievements, sector commentary, and a narrative. The audited statements contain numbers.

**When the two disagree, the numbers are the company and the narrative is the marketing.** The specific check: take every quantitative claim in the directors' report — "revenue grew 18%", "we reduced our debt", "exports doubled" — and trace each one to a line in the audited statements or a note. Claims that cannot be traced are claims that did not survive the audit.`,
      bn: `পর্ব ১ শেষ হয়েছিল একটি দাবি দিয়ে: কাঠামো ও চক্র বলে বাজারে থাকা উচিত *কি না*। পর্ব ২ শুরু হয় বাকি অর্ধেক দিয়ে — *কী* মালিকানায় রাখবেন। আর প্রথম দলিল, যেকোনো অনুপাতের আগে, হলো বার্ষিক প্রতিবেদন।

বাংলাদেশের বেশিরভাগ খুচরা বিনিয়োগকারী কখনো একটি খোলেনও না। তাঁরা কোনো সংবাদ পোর্টালে EPS শিরোনামটি পড়ে থেমে যান। **EPS শিরোনামটি সমগ্র দলিলের সবচেয়ে কম তথ্যবহুল সংখ্যা, কারণ এটিই একমাত্র সংখ্যা যা ব্যবস্থাপনা করার প্রণোদনা শৃঙ্খলের প্রতিটি পক্ষের আছে।**

### বার্ষিক প্রতিবেদনে আসলে কী থাকে

বিএসইসি-সম্মত তালিকাভুক্ত কোম্পানির বার্ষিক প্রতিবেদনে মোটামুটি মুদ্রিত ক্রমে থাকে:

| অংশ | প্রস্তুতকারী | নিরীক্ষিত? |
|---|---|---|
| চেয়ারম্যানের বক্তব্য | চেয়ারম্যান | না |
| পরিচালকদের প্রতিবেদন | পর্ষদ | না |
| কর্পোরেট গভর্নেন্স পরিপালন প্রতিবেদন | কোম্পানি সচিব | পৃথকভাবে প্রত্যয়িত |
| MD&A / পরিচালন পর্যালোচনা | ব্যবস্থাপনা | না |
| **স্বাধীন নিরীক্ষকের প্রতিবেদন** | **বহিঃনিরীক্ষক** | **এটিই নিরীক্ষা** |
| আর্থিক অবস্থার বিবরণী | ব্যবস্থাপনা | হ্যাঁ |
| লাভ-লোকসান বিবরণী | ব্যবস্থাপনা | হ্যাঁ |
| ইকুইটি পরিবর্তনের বিবরণী | ব্যবস্থাপনা | হ্যাঁ |
| নগদ প্রবাহ বিবরণী | ব্যবস্থাপনা | হ্যাঁ |
| **আর্থিক বিবরণীর টীকাসমূহ** | ব্যবস্থাপনা, নিরীক্ষিত | হ্যাঁ |

অসামঞ্জস্যটি লক্ষ করুন। চকচকে সামনের অর্ধেক হলো অনিরীক্ষিত ওকালতি। পেছনের অর্ধেক সেই অংশ যার বিপরীতে কেউ তাঁর সনদ বাজি রেখেছেন।

### পড়ার সঠিক ক্রম

সামনে থেকে পেছনে নয়। এই ক্রমে:

**১. স্বাধীন নিরীক্ষকের প্রতিবেদন।** সর্বদা প্রথমে। এতে নব্বই সেকেন্ড লাগে এবং এটি বিশ্লেষণটি সেখানেই শেষ করে দিতে পারে। মতামত পরিবর্তিত হলে এরপর যা আসে তার কোনোটিই মুখমূল্যে নির্ভরযোগ্য নয়।

**২. টীকাসমূহ।** বিশেষত: সম্পর্কিত-পক্ষ লেনদেন, সম্ভাব্য দায়, বাণিজ্যিক প্রাপ্যের বয়সভিত্তিক বিন্যাস, মজুদ, ঋণ ও তার শর্তাবলি, এবং রাজস্ব স্বীকৃতির হিসাবনীতি টীকা। **টীকাতেই আর্থিক বিবরণী আসলে লেখা হয়।** বিবরণীর মুখ হলো টীকার সারসংক্ষেপ, উল্টোটা নয়।

**৩. নগদ প্রবাহ বিবরণী।** অধ্যায় ১১ এটি বিস্তারিত করবে। আপাতত: মুনাফা একটি মতামত, নগদ একটি ঘটনা, এবং দুইয়ের মধ্যে সমন্বয় এখানেই থাকে।

**৪. আয় বিবরণী ও স্থিতিপত্র।** এই পর্যায়ে আপনি আগেই জানেন সেগুলো কী বলবে।

**৫. MD&A ও পরিচালকদের প্রতিবেদন। সবার শেষে, এবং বিরুদ্ধভাবে পড়ুন।** পরিচালকরা মিথ্যা বলেন বলে নয়, বরং এই অংশটি রাজি করানোর জন্য লেখা এবং অনিরীক্ষিত। এটি আগে পড়লে নিজস্ব মত তৈরির আগেই আপনি ব্যবস্থাপনার কাঠামোয় নোঙর করে ফেলেন।

### চারটি নিরীক্ষা মতামত

বাংলাদেশে গৃহীত আন্তর্জাতিক নিরীক্ষা মান (BSA, ICAB কর্তৃক জারিকৃত) অনুযায়ী নিরীক্ষক চারটির একটি মতামত দেন:

| মতামত | ভাষার স্বাক্ষর | অর্থ | আপনার করণীয় |
|---|---|---|---|
| **অযোগ্যতাহীন** | "সকল বস্তুগত দিক থেকে যথাযথভাবে উপস্থাপন করে" | নিরীক্ষক পরিবর্তন প্রয়োজন এমন বস্তুগত ও ব্যাপক কিছু পাননি | টীকায় এগোন |
| **শর্তযুক্ত** | "…ব্যতীত" | একটি নির্দিষ্ট, বস্তুগত ভুল উপস্থাপন বা প্রমাণ সংগ্রহে নির্দিষ্ট অক্ষমতা — **কিন্তু সীমাবদ্ধ** | "ব্যতীত" বিষয়টি পরিমাপ করুন। ধরে নিন এটি বর্ণিত অবস্থার চেয়ে খারাপ |
| **বিরূপ** | "যথাযথভাবে উপস্থাপন করে না" | ভুল উপস্থাপন বস্তুগত **এবং ব্যাপক**। সামগ্রিকভাবে হিসাবগুলোই ভুল | বিনিয়োগ করবেন না। বিশ্লেষণের কিছু নেই |
| **মতামত-প্রত্যাখ্যান** | "আমরা কোনো মতামত প্রকাশ করছি না" | নিরীক্ষক ব্যাপকভাবে যথেষ্ট প্রমাণ পাননি | বাস্তবে বিরূপের চেয়েও খারাপ। মানে এই কোম্পানির ভেতরে কী আছে তা কেউ জানে না |

শর্তযুক্ত ও বিরূপের মধ্যে পার্থক্যটি একটি শব্দ — **ব্যাপক**। শর্তযুক্ত মতামত বলে একটি ড্রয়ার এলোমেলো। বিরূপ মতামত বলে ফাইলিং ব্যবস্থাটাই এলোমেলো। মতামত-প্রত্যাখ্যান বলে নিরীক্ষককে ঘরেই ঢুকতে দেওয়া হয়নি।

**ডিএসই-তে পরিবর্তিত মতামত বিরল নয়।** এগুলো বস্ত্র, ছোট এনবিএফআই এবং প্রকৌশল ও পাটের বেশি দুরবস্থাগ্রস্ত প্রান্তে জমা হয়। ধনাত্মক P/E-তে লেনদেন হওয়া কোম্পানির ওপর পরিবর্তিত মতামত সাধারণ দৃশ্য, যা আপনাকে বলে বাজারও মতামতটি পড়ছে না।

### বিষয়-নির্দেশক অনুচ্ছেদ কোনো মতামত পরিবর্তন নয়

এটিই দলিলের সবচেয়ে বেশি ভুল-পঠিত অনুচ্ছেদ। একটি **বিষয়-নির্দেশক (Emphasis of Matter, EOM)** অনুচ্ছেদ হিসাবে ইতিমধ্যে সঠিকভাবে প্রকাশিত কোনো বিষয়ের প্রতি দৃষ্টি আকর্ষণ করে। **মতামত অযোগ্যতাহীনই থাকে।** নিরীক্ষক বলছেন: আমি সংখ্যাগুলোর সঙ্গে একমত, এবং আমি চাই আপনি এই টীকাটি দেখুন।

এটি সুস্থতার সনদ নয়। এটি নিরীক্ষকের এমন কিছুর দিকে আঙুল তোলা যাকে তিনি ভুল বলতে পারছেন না। ডিএসই-তে সাধারণ EOM বিষয়: অমীমাংসিত কর নির্ধারণ, বড় মামলা, পরবর্তী-ঘটনা পুনর্মূল্যায়ন, বা ঋণদাতার সঙ্গে অমীমাংসিত বিরোধ।

**চলমানতা (going concern) সবচেয়ে গুরুত্বপূর্ণ।** BSA 570 অনুযায়ী, প্রতিষ্ঠানটির অন্তত বারো মাস পরিচালনা চালিয়ে যাওয়ার সক্ষমতা নিয়ে বস্তুগত অনিশ্চয়তা থাকলে নিরীক্ষককে **চলমানতা সম্পর্কিত বস্তুগত অনিশ্চয়তা** শিরোনামে একটি অংশ যোগ করতে হয়। এটি EOM থেকেও আলাদা, শর্তযুক্ত মতামত থেকেও আলাদা।

চলমানতা অনুচ্ছেদের অর্থ, পেশাটি যতটা সংযত ভাষা অনুমোদন করে ততটা সংযতভাবে নিরীক্ষক আপনাকে বলছেন যে এই কোম্পানি এক বছর পর নাও থাকতে পারে। **এটি প্রতি বছর ডিএসই-র বার্ষিক প্রতিবেদনে দেখা যায় এবং বাজার নিয়মিতভাবে এটি উপেক্ষা করে।** অধ্যায় ৫ প্রতিষ্ঠা করেছে যে উদ্যোক্তার বিক্রি এই এক্সচেঞ্জের সর্বোচ্চ মানের বিনামূল্যের সংকেত। চলমানতা অনুচ্ছেদ দ্বিতীয়টি।

### কে স্বাক্ষর করেন, এবং FRC প্যানেল কেন গুরুত্বপূর্ণ

বাংলাদেশ *ফাইন্যান্সিয়াল রিপোর্টিং আইন, ২০১৫* এর অধীনে **ফাইন্যান্সিয়াল রিপোর্টিং কাউন্সিল (FRC)** প্রতিষ্ঠা করে, যা ২০১৭ সাল থেকে কার্যকর। FRC-র আগে নিরীক্ষার মান তদারকি কার্যত ICAB-র হাতেই ছিল — একটি স্ব-নিয়ন্ত্রণ ব্যবস্থা, যাতে অধ্যায় ১ ডিমিউচুয়ালাইজেশন-পূর্ব এক্সচেঞ্জে যে একই কাঠামোগত সংঘাত চিহ্নিত করেছিল তা বিদ্যমান: নিয়ন্ত্রিতরাই নিজেদের নিয়ন্ত্রণ করছেন।

এ থেকে দুটি বিষয় বেরোয় যা নিয়ে আপনি কাজ করতে পারেন:

**১. FRC জনস্বার্থ সংস্থার নিরীক্ষার জন্য যোগ্য নিরীক্ষা প্রতিষ্ঠানের একটি প্যানেল রাখে।** ঐ প্যানেলের বাইরে থাকা, বা তালিকাভুক্ত নিরীক্ষার অভিজ্ঞতাহীন প্রতিষ্ঠান দিয়ে তালিকাভুক্ত কোম্পানির নিরীক্ষা করানো — এটি তথ্য। এটি পর্ষদের নেওয়া একটি সিদ্ধান্ত।

**২. ব্যাখ্যাহীন নিরীক্ষক পরিবর্তন একটি সংকেত।** নিরীক্ষক নিযুক্ত হন AGM-এ শেয়ারহোল্ডারদের দ্বারা, কিন্তু প্রস্তাব করে পর্ষদ। যে প্রতিষ্ঠান নিয়োগের মাঝপথে পদত্যাগ করে, বা পরিবর্তিত মতামত দেওয়ার সঙ্গে সঙ্গেই প্রতিস্থাপিত হয়, সে আপনাকে এমন কিছু বলছে যা উত্তরসূরির পরিচ্ছন্ন মতামত বলছে না। **দুই বছর একসঙ্গে পড়ুন, একটি নয়।**

আরও প্রাসঙ্গিক: বিএসইসি তালিকাভুক্ত কোম্পানির জন্য একটানা নিরীক্ষা মেয়াদে সীমা আরোপ করেছে, যা আবর্তন বাধ্যতামূলক করে। অর্থাৎ নিরীক্ষক পরিবর্তন স্বয়ংক্রিয়ভাবে সন্দেহজনক নয় — আপনাকে যাচাই করতে হবে এটি বাধ্যতামূলক আবর্তন ছিল, না ব্যাখ্যাহীন প্রস্থান।

### সম্পর্কিত-পক্ষ লেনদেন

বাংলাদেশে গৃহীত **IAS 24** অনুযায়ী সম্পর্কিত পক্ষের সঙ্গে লেনদেন প্রকাশ করা বাধ্যতামূলক — মূল প্রতিষ্ঠান, সহযোগী প্রতিষ্ঠান, অ্যাসোসিয়েট, মুখ্য ব্যবস্থাপনা কর্মী, এবং অভিন্ন নিয়ন্ত্রণাধীন সত্তা।

বাংলাদেশি বার্ষিক প্রতিবেদনে এই টীকাটিই সর্বোচ্চ মূল্যের পৃষ্ঠা, একটি নির্দিষ্ট কাঠামোগত কারণে: **ডিএসই-তে তালিকাভুক্ত বেশিরভাগ কোম্পানি একটি পারিবারিক গ্রুপের ভেতরে বসে থাকে, এবং তালিকাভুক্ত সত্তাটি উদ্যোক্তার নিয়ন্ত্রণাধীন বহু বাহনের মাত্র একটি।** অতালিকাভুক্ত সহোদর কোম্পানিগুলোতেই গ্রুপের অন্যান্য স্বার্থ থাকে। নগদ এদের মধ্যে চলাচল করতে পারে।

যে কৌশলগুলো খুঁজবেন:

- **সম্পর্কিত পক্ষের কাছ থেকে প্রাপ্য যা কখনো আদায় হয় না।** তালিকাভুক্ত কোম্পানি সহোদর প্রতিষ্ঠানের কাছে বাকিতে বিক্রি করে। বিক্রয়টি রাজস্ব ও মুনাফা নথিভুক্ত করে। নগদ কখনো আসে না। বছরের পর বছর প্রাপ্য বাড়ে। এটি বিক্রয়ের ছদ্মবেশে উদ্যোক্তাকে দেওয়া লভ্যাংশ।
- **সম্পর্কিত পক্ষকে সুদবিহীন ঋণ ও অগ্রিম।** সংখ্যালঘু শেয়ারহোল্ডারের মূলধন, শূন্য রিটার্নে, তালিকাভুক্ত সত্তার বাইরে মোতায়েন।
- **সম্পর্কিত সরবরাহকারীর কাছ থেকে বাজারদরের ওপরে ক্রয়।** মার্জিন COGS-এর মধ্য দিয়ে তালিকাভুক্ত কোম্পানি ছেড়ে যায়।
- **সহোদর কোম্পানির ব্যাংক ঋণের বিপরীতে দেওয়া কর্পোরেট গ্যারান্টি।** এটি স্থিতিপত্রে নয়, সম্ভাব্য দায়ে দেখা যায় — যতক্ষণ না তা বাস্তব হয়।

### সম্ভাব্য দায়

**IAS 37** অনুযায়ী সম্ভাব্য দায় হলো এমন সম্ভাব্য বাধ্যবাধকতা যার অস্তিত্ব অনিশ্চিত ভবিষ্যৎ ঘটনার ওপর নির্ভরশীল, অথবা এমন বর্তমান বাধ্যবাধকতা যা স্বীকৃত হয়নি কারণ বহিঃপ্রবাহ সম্ভাব্য নয় বা নির্ভরযোগ্যভাবে পরিমাপযোগ্য নয়। এটি টীকায় প্রকাশ করা হয়, **স্থিতিপত্রে স্বীকৃত হয় না**।

ডিএসই-তে সাধারণ বিষয়বস্তু: ব্যাংক গ্যারান্টি, ঋণপত্র, বিতর্কিত ভ্যাট ও আয়কর দাবি, এবং বিচারাধীন মামলা।

সঠিক প্রশ্নটি "এটি স্বীকৃত কি না" নয়। প্রশ্নটি হলো: **ইকুইটির শতাংশ হিসেবে এই সংখ্যাটি কত, এবং এটি বাস্তবায়িত হলে স্থিতিপত্রের কী হবে?** ৩০০ কোটি টাকা ইকুইটি ও ১৯০ কোটি টাকা সম্ভাব্য দায়ের কোম্পানি ৩০০ কোটি টাকা ইকুইটির কোম্পানি নয়। এটি এমন কোম্পানি যার ইকুইটির দুই-তৃতীয়াংশের ওপর একটি শর্তসাপেক্ষ দাবি ঝুলছে।

### পরিচালকদের প্রতিবেদন বনাম নিরীক্ষিত সংখ্যা

পরিচালকদের প্রতিবেদন অনিরীক্ষিত। এতে লক্ষ্য, অর্জন, খাত-ভাষ্য ও একটি আখ্যান থাকে। নিরীক্ষিত বিবরণীতে থাকে সংখ্যা।

**দুটিতে অমিল হলে সংখ্যাই কোম্পানি এবং আখ্যানটি বিপণন।** নির্দিষ্ট পরীক্ষাটি: পরিচালকদের প্রতিবেদনের প্রতিটি পরিমাণগত দাবি নিন — "রাজস্ব ১৮% বেড়েছে", "আমরা ঋণ কমিয়েছি", "রপ্তানি দ্বিগুণ হয়েছে" — এবং প্রতিটিকে নিরীক্ষিত বিবরণীর একটি লাইন বা একটি টীকায় মেলান। যে দাবিগুলো মেলানো যায় না, সেগুলো নিরীক্ষায় টেকেনি।`,
    },

    simple: {
      en: `An annual report is two documents bound together and sold as one.

The front is a brochure. Photographs of the factory, the chairman in a suit, a bar chart that only goes up. Nobody audited any of it.

The back is a legal document. A chartered accountant put their signature and their licence behind it. If it is wrong, they can be punished.

**Read the back first. Then decide whether the front is worth your time.**

---

### The ninety-second test

Turn to the page headed **Independent Auditor's Report**. Read the paragraph headed "Opinion". You are looking for one of four things:

- **"present fairly, in all material respects"** — fine. Keep going.
- **"except for"** — stop. Something specific is wrong. Find out what and how much.
- **"do not present fairly"** — close the document. This company's accounts are wrong.
- **"we do not express an opinion"** — close the document faster. The auditor could not even check.

Then look for a heading with the words **going concern** in it. If it is there, the auditor is telling you the company might not survive twelve months.

That is ninety seconds, and it eliminates more bad investments than any amount of charting.

---

### The trick nobody explains

Here is how a Bangladeshi group company can show you a profit that never existed.

The listed company sells BDT 100 crore of goods to a sister company owned by the same family. The sister company does not pay. The listed company books BDT 100 crore of revenue and, say, BDT 20 crore of profit. Your EPS goes up. The share price goes up.

No cash moved. The sister company now owes BDT 100 crore, and it is never going to pay, because it is not a customer — it is the same pocket.

**Where do you see this?** In the note called *Related Party Transactions*, and in the receivables line growing much faster than revenue. Both are printed. Both are free. Almost nobody reads them.

Three years later the auditor finally forces a provision against the receivable. The company reports a huge loss "due to one-off impairment". The share falls 60%. The newspapers call it a surprise.

**It was not a surprise. It was disclosed, annually, in a note, for three years.**

---

### What a contingent liability really is

Your neighbour asks you to guarantee his bank loan. You sign. You have not spent a taka. Nothing appears in your household budget.

But you now owe the bank his loan if he stops paying.

That is a contingent liability. Companies do it constantly — for sister concerns, in the notes, off the balance sheet. Ask one question: **if all of these came true tomorrow, how much of the shareholders' equity would be left?**`,
      bn: `বার্ষিক প্রতিবেদন আসলে দুটি দলিল একসঙ্গে বাঁধাই করে একটি হিসেবে বিক্রি করা।

সামনের অংশ একটি ব্রোশিওর। কারখানার ছবি, স্যুট পরা চেয়ারম্যান, শুধু ওপরে ওঠা একটি বার চার্ট। এর কোনোটিই কেউ নিরীক্ষা করেননি।

পেছনের অংশ একটি আইনি দলিল। একজন সনদপ্রাপ্ত হিসাববিদ এর পেছনে নিজের স্বাক্ষর ও সনদ রেখেছেন। ভুল হলে তাঁর শাস্তি হতে পারে।

**পেছনটা আগে পড়ুন। তারপর ঠিক করুন সামনেরটা আপনার সময়ের যোগ্য কি না।**

---

### নব্বই সেকেন্ডের পরীক্ষা

**স্বাধীন নিরীক্ষকের প্রতিবেদন** শিরোনামের পাতায় যান। "মতামত" শিরোনামের অনুচ্ছেদটি পড়ুন। আপনি চারটির একটি খুঁজছেন:

- **"সকল বস্তুগত দিক থেকে যথাযথভাবে উপস্থাপন করে"** — ঠিক আছে। এগিয়ে যান।
- **"…ব্যতীত"** — থামুন। নির্দিষ্ট কিছু ভুল আছে। কী এবং কত, বের করুন।
- **"যথাযথভাবে উপস্থাপন করে না"** — দলিলটি বন্ধ করুন। এই কোম্পানির হিসাব ভুল।
- **"আমরা কোনো মতামত প্রকাশ করছি না"** — আরও দ্রুত বন্ধ করুন। নিরীক্ষক যাচাই করতেই পারেননি।

তারপর **চলমানতা** শব্দযুক্ত কোনো শিরোনাম খুঁজুন। থাকলে নিরীক্ষক আপনাকে বলছেন কোম্পানিটি বারো মাস টিকতে নাও পারে।

এটি নব্বই সেকেন্ডের কাজ, এবং যেকোনো পরিমাণ চার্ট আঁকার চেয়ে বেশি খারাপ বিনিয়োগ বাদ দেয়।

---

### যে কৌশলটি কেউ ব্যাখ্যা করে না

বাংলাদেশি একটি গ্রুপ কোম্পানি কীভাবে আপনাকে এমন মুনাফা দেখাতে পারে যার অস্তিত্বই ছিল না, তা এখানে।

তালিকাভুক্ত কোম্পানি একই পরিবারের মালিকানাধীন সহোদর কোম্পানির কাছে ১০০ কোটি টাকার পণ্য বিক্রি করে। সহোদর কোম্পানি টাকা দেয় না। তালিকাভুক্ত কোম্পানি ১০০ কোটি টাকা রাজস্ব এবং ধরুন ২০ কোটি টাকা মুনাফা নথিভুক্ত করে। আপনার EPS বাড়ে। শেয়ারের দাম বাড়ে।

কোনো নগদ নড়েনি। সহোদর কোম্পানি এখন ১০০ কোটি টাকা ঋণী, এবং সে কখনো শোধ করবে না, কারণ সে ক্রেতা নয় — সে একই পকেট।

**কোথায় দেখবেন?** *সম্পর্কিত-পক্ষ লেনদেন* টীকায়, এবং রাজস্বের চেয়ে অনেক দ্রুত বাড়া প্রাপ্যের লাইনে। দুটোই ছাপা থাকে। দুটোই বিনামূল্যে। প্রায় কেউ পড়ে না।

তিন বছর পর নিরীক্ষক অবশেষে ঐ প্রাপ্যের বিপরীতে সঞ্চিতি রাখতে বাধ্য করেন। কোম্পানি "এককালীন অবচয়জনিত" বিশাল লোকসান ঘোষণা করে। শেয়ার ৬০% পড়ে। সংবাদপত্র একে অপ্রত্যাশিত বলে।

**এটি অপ্রত্যাশিত ছিল না। এটি তিন বছর ধরে, প্রতি বছর, একটি টীকায় প্রকাশিত ছিল।**

---

### সম্ভাব্য দায় আসলে কী

আপনার প্রতিবেশী আপনাকে তাঁর ব্যাংক ঋণের জামিনদার হতে বলেন। আপনি স্বাক্ষর করেন। আপনি এক টাকাও খরচ করেননি। আপনার সংসারের বাজেটে কিছুই আসেনি।

কিন্তু তিনি শোধ করা বন্ধ করলে এখন ব্যাংককে আপনি তাঁর ঋণ দিতে বাধ্য।

এটাই সম্ভাব্য দায়। কোম্পানিগুলো এটি নিয়মিত করে — সহোদর প্রতিষ্ঠানের জন্য, টীকায়, স্থিতিপত্রের বাইরে। একটি প্রশ্ন করুন: **এগুলো সবই যদি আগামীকাল সত্যি হয়, শেয়ারহোল্ডারদের ইকুইটির কতটা অবশিষ্ট থাকবে?**`,
    },

    example: {
      en: `### Two companies, one headline

Both report **BDT 48 crore net profit** for the year. Both have **8 crore shares outstanding**. Both therefore report **EPS of BDT 6.00**. Both trade near BDT 60, so both screen at a P/E of 10.0.

On any Bangladeshi stock screener, on any newspaper table, on any Facebook group post, these two companies are identical.

They are not remotely identical.

| | Nirbhoy Pharmaceuticals Ltd | Shonali Textile Mills Ltd |
|---|---|---|
| Net profit (BDT cr) | ৪৮.০০ | ৪৮.০০ |
| Shares (crore) | ৮.০০ | ৮.০০ |
| **Reported EPS (BDT)** | **৬.০০** | **৬.০০** |
| Audit opinion | Unqualified | **Qualified** |
| Going-concern paragraph | None | **Present** |
| Emphasis of matter | None | Present |
| Auditor | FRC-panel firm, 6th year | Off-panel firm, 2nd year |
| Total assets (BDT cr) | ৮৮০ | ৯১০ |
| Shareholders' equity (BDT cr) | ৫২০ | ৩০০ |
| Trade receivables (BDT cr) | ৭৪ (prior ৬৮) | ২৩২ (prior ১৫০) |
| **Related-party receivables (BDT cr)** | **৬** | **১৪৮** |
| Contingent liabilities (BDT cr) | ১২ | ১৯০ |
| Revenue (BDT cr) | ৬২০ (prior ৫৬০) | ৬৪০ (prior ৬১০) |
| Cash from operations (BDT cr) | **+৬২** | **−১৯** |

### What the auditor's report says

**Nirbhoy.** One paragraph, standard wording: *present fairly, in all material respects*. Key audit matters: revenue recognition and inventory valuation — both routine for a pharma manufacturer. No modification, no EOM, no going-concern section.

**Shonali.** Three things, in this order:

1. **Basis for Qualified Opinion.** The auditor could not obtain sufficient appropriate evidence regarding the recoverability of BDT 148 crore of receivables from related parties, and was unable to determine whether an impairment provision was required.
2. **Material Uncertainty Related to Going Concern.** Current liabilities exceed current assets; the company has defaulted on a term-loan instalment; management has prepared the accounts on a going-concern basis relying on continued lender support.
3. **Emphasis of Matter.** A disputed VAT demand of BDT 62 crore is included within contingent liabilities.

**The directors' report, meanwhile, describes the year as "a year of consolidation and steady growth" and proposes a 10% cash dividend.**

### The arithmetic that separates them

**Related Party Exposure (as % of total assets):**

Nirbhoy: $6 / 880 \\times 100 = 0.68\\%$
Shonali: $148 / 910 \\times 100 = 16.26\\%$

**Related Party Exposure (as a multiple of net profit):**

Nirbhoy: $6 / 48 = 0.12\\times$
Shonali: $148 / 48 = 3.08\\times$

**The number that ends the argument.** What fraction of Shonali's related-party book must be written off to erase the entire year's reported profit?

$$\\frac{48}{148} \\times 100 = 32.43\\%$$

**A one-third impairment — on a balance the auditor explicitly refused to certify as recoverable — wipes out the whole year.** At 50% impairment the company reports a loss of BDT 26 crore and an EPS of −3.25.

### The rest of the picture

**Contingent liabilities against equity:**

Nirbhoy: $12 / 520 \\times 100 = 2.31\\%$
Shonali: $190 / 300 \\times 100 = 63.33\\%$

**Receivables versus revenue:**

Nirbhoy revenue growth $= (620/560 - 1) \\times 100 = 10.71\\%$; receivable growth $= (74/68 - 1) \\times 100 = 8.82\\%$. Receivables growing *slower* than revenue. Collections are working.

Shonali revenue growth $= (640/610 - 1) \\times 100 = 4.92\\%$; receivable growth $= (232/150 - 1) \\times 100 = 54.67\\%$. **Receivables growing eleven times faster than sales.** The revenue is being booked. The cash is not arriving.

**And the confirmation:** Shonali's cash from operations is **negative BDT 19 crore** while it reports positive BDT 48 crore of profit. Chapter 11 will formalise this. For now: a company that earns profit but bleeds cash is either growing very fast or not earning the profit.

### The score

Applying the weighted checklist developed in this chapter:

| Flag | Weight | Nirbhoy | Shonali |
|---|---|---|---|
| Opinion not unqualified | ২৫ | — | ✔ |
| Going-concern paragraph | ১৮ | — | ✔ |
| Emphasis of matter | ৬ | — | ✔ |
| Auditor off FRC panel | ৯ | — | ✔ |
| Auditor changed unexplained | ৬ | — | — |
| RP exposure > 10% of assets | ১২ | — | ✔ |
| Contingent > 25% of equity | ৭ | — | ✔ |
| Receivables > 2× revenue growth | ৬ | — | ✔ |
| Directors' report inconsistent | ৪ | — | — |
| CFO negative, PAT positive | ৭ | — | ✔ |
| **TOTAL / 100** | | **০** | **৯০** |
| **VERDICT** | | **CLEAN** | **UNINVESTABLE** |

**Same EPS. Same P/E. Zero versus ninety.**

The point is not that Shonali is a bad company — that is obvious once you have read the report. The point is that **every single input above was published, free, in a document the company was legally required to give you**, and the market priced both at ten times earnings anyway.

This is where retail investors in Bangladesh lose money. Not on complicated things. On the ninety seconds they did not spend.`,
      bn: `### দুটি কোম্পানি, একটি শিরোনাম

দুটিই বছরের জন্য **৪৮ কোটি টাকা নিট মুনাফা** ঘোষণা করেছে। দুটিরই **৮ কোটি শেয়ার** বকেয়া। তাই দুটিই **৬.০০ টাকা EPS** ঘোষণা করেছে। দুটিই ৬০ টাকার কাছাকাছি লেনদেন হচ্ছে, তাই দুটিই ১০.০ P/E-তে দেখাচ্ছে।

যেকোনো বাংলাদেশি স্টক স্ক্রিনারে, যেকোনো সংবাদপত্রের ছকে, যেকোনো ফেসবুক গ্রুপের পোস্টে এই দুটি কোম্পানি অভিন্ন।

এরা মোটেও অভিন্ন নয়।

| | নির্ভয় ফার্মাসিউটিক্যালস লিমিটেড | সোনালি টেক্সটাইল মিলস লিমিটেড |
|---|---|---|
| নিট মুনাফা (কোটি টাকা) | ৪৮.০০ | ৪৮.০০ |
| শেয়ার (কোটি) | ৮.০০ | ৮.০০ |
| **ঘোষিত EPS (টাকা)** | **৬.০০** | **৬.০০** |
| নিরীক্ষা মতামত | অযোগ্যতাহীন | **শর্তযুক্ত** |
| চলমানতা অনুচ্ছেদ | নেই | **আছে** |
| বিষয়-নির্দেশক অনুচ্ছেদ | নেই | আছে |
| নিরীক্ষক | FRC-প্যানেলভুক্ত প্রতিষ্ঠান, ৬ষ্ঠ বছর | প্যানেল-বহির্ভূত প্রতিষ্ঠান, ২য় বছর |
| মোট সম্পদ (কোটি টাকা) | ৮৮০ | ৯১০ |
| শেয়ারহোল্ডারদের ইকুইটি (কোটি টাকা) | ৫২০ | ৩০০ |
| বাণিজ্যিক প্রাপ্য (কোটি টাকা) | ৭৪ (পূর্ববর্তী ৬৮) | ২৩২ (পূর্ববর্তী ১৫০) |
| **সম্পর্কিত-পক্ষ প্রাপ্য (কোটি টাকা)** | **৬** | **১৪৮** |
| সম্ভাব্য দায় (কোটি টাকা) | ১২ | ১৯০ |
| রাজস্ব (কোটি টাকা) | ৬২০ (পূর্ববর্তী ৫৬০) | ৬৪০ (পূর্ববর্তী ৬১০) |
| পরিচালন কার্যক্রম থেকে নগদ (কোটি টাকা) | **+৬২** | **−১৯** |

### নিরীক্ষকের প্রতিবেদন কী বলে

**নির্ভয়।** একটি অনুচ্ছেদ, প্রমিত ভাষা: *সকল বস্তুগত দিক থেকে যথাযথভাবে উপস্থাপন করে*। মুখ্য নিরীক্ষা বিষয়: রাজস্ব স্বীকৃতি ও মজুদ মূল্যায়ন — একটি ওষুধ উৎপাদকের জন্য দুটোই স্বাভাবিক। কোনো পরিবর্তন নেই, EOM নেই, চলমানতা অংশ নেই।

**সোনালি।** তিনটি বিষয়, এই ক্রমে:

১. **শর্তযুক্ত মতামতের ভিত্তি।** সম্পর্কিত পক্ষের কাছ থেকে প্রাপ্য ১৪৮ কোটি টাকার আদায়যোগ্যতা সম্পর্কে নিরীক্ষক যথেষ্ট যথাযথ প্রমাণ পাননি এবং অবচয় সঞ্চিতি প্রয়োজন কি না তা নির্ধারণ করতে পারেননি।
২. **চলমানতা সম্পর্কিত বস্তুগত অনিশ্চয়তা।** চলতি দায় চলতি সম্পদ ছাড়িয়ে গেছে; কোম্পানি একটি মেয়াদি ঋণের কিস্তিতে খেলাপি হয়েছে; ব্যবস্থাপনা ঋণদাতার অব্যাহত সমর্থনের ওপর নির্ভর করে চলমানতার ভিত্তিতে হিসাব প্রস্তুত করেছে।
৩. **বিষয়-নির্দেশক অনুচ্ছেদ।** ৬২ কোটি টাকার একটি বিতর্কিত ভ্যাট দাবি সম্ভাব্য দায়ের অন্তর্ভুক্ত।

**অথচ পরিচালকদের প্রতিবেদন বছরটিকে বর্ণনা করেছে "সংহতকরণ ও স্থিতিশীল প্রবৃদ্ধির বছর" হিসেবে, এবং ১০% নগদ লভ্যাংশ প্রস্তাব করেছে।**

### যে পাটিগণিত এদের পৃথক করে

**সম্পর্কিত-পক্ষ এক্সপোজার (মোট সম্পদের শতাংশ):**

নির্ভয়: $6 / 880 \\times 100 = 0.68\\%$
সোনালি: $148 / 910 \\times 100 = 16.26\\%$

**সম্পর্কিত-পক্ষ এক্সপোজার (নিট মুনাফার গুণিতক):**

নির্ভয়: $6 / 48 = 0.12\\times$
সোনালি: $148 / 48 = 3.08\\times$

**যে সংখ্যাটি তর্ক শেষ করে দেয়।** সোনালির সম্পর্কিত-পক্ষ প্রাপ্যের কত অংশ অবলোপন করলে বছরের সম্পূর্ণ ঘোষিত মুনাফা মুছে যায়?

$$\\frac{48}{148} \\times 100 = 32.43\\%$$

**এক-তৃতীয়াংশ অবচয় — এমন একটি স্থিতির ওপর যাকে নিরীক্ষক স্পষ্টভাবে আদায়যোগ্য বলে প্রত্যয়ন করতে অস্বীকার করেছেন — গোটা বছরটাই মুছে দেয়।** ৫০% অবচয়ে কোম্পানি ২৬ কোটি টাকা লোকসান এবং −৩.২৫ EPS ঘোষণা করবে।

### বাকি ছবিটি

**ইকুইটির বিপরীতে সম্ভাব্য দায়:**

নির্ভয়: $12 / 520 \\times 100 = 2.31\\%$
সোনালি: $190 / 300 \\times 100 = 63.33\\%$

**প্রাপ্য বনাম রাজস্ব:**

নির্ভয়ের রাজস্ব প্রবৃদ্ধি $= (620/560 - 1) \\times 100 = 10.71\\%$; প্রাপ্য প্রবৃদ্ধি $= (74/68 - 1) \\times 100 = 8.82\\%$। প্রাপ্য রাজস্বের চেয়ে *ধীরে* বাড়ছে। আদায় কাজ করছে।

সোনালির রাজস্ব প্রবৃদ্ধি $= (640/610 - 1) \\times 100 = 4.92\\%$; প্রাপ্য প্রবৃদ্ধি $= (232/150 - 1) \\times 100 = 54.67\\%$। **প্রাপ্য বিক্রয়ের চেয়ে এগারো গুণ দ্রুত বাড়ছে।** রাজস্ব নথিভুক্ত হচ্ছে। নগদ আসছে না।

**আর নিশ্চিতকরণ:** সোনালির পরিচালন কার্যক্রম থেকে নগদ **ঋণাত্মক ১৯ কোটি টাকা**, অথচ সে ধনাত্মক ৪৮ কোটি টাকা মুনাফা ঘোষণা করছে। অধ্যায় ১১ এটি আনুষ্ঠানিক রূপ দেবে। আপাতত: যে কোম্পানি মুনাফা করে অথচ নগদ হারায়, সে হয় খুব দ্রুত বাড়ছে, নয়তো মুনাফাটি করছেই না।

### স্কোর

এই অধ্যায়ে গড়া ভারযুক্ত তালিকাটি প্রয়োগ করলে:

| পতাকা | ভার | নির্ভয় | সোনালি |
|---|---|---|---|
| মতামত অযোগ্যতাহীন নয় | ২৫ | — | ✔ |
| চলমানতা অনুচ্ছেদ | ১৮ | — | ✔ |
| বিষয়-নির্দেশক অনুচ্ছেদ | ৬ | — | ✔ |
| নিরীক্ষক FRC প্যানেলের বাইরে | ৯ | — | ✔ |
| ব্যাখ্যাহীন নিরীক্ষক পরিবর্তন | ৬ | — | — |
| সম্পর্কিত-পক্ষ এক্সপোজার > সম্পদের ১০% | ১২ | — | ✔ |
| সম্ভাব্য দায় > ইকুইটির ২৫% | ৭ | — | ✔ |
| প্রাপ্য প্রবৃদ্ধি > রাজস্ব প্রবৃদ্ধির ২ গুণ | ৬ | — | ✔ |
| পরিচালকদের প্রতিবেদন অসঙ্গত | ৪ | — | — |
| CFO ঋণাত্মক, PAT ধনাত্মক | ৭ | — | ✔ |
| **মোট / ১০০** | | **০** | **৯০** |
| **সিদ্ধান্ত** | | **পরিচ্ছন্ন** | **বিনিয়োগ-অযোগ্য** |

**একই EPS। একই P/E। শূন্য বনাম নব্বই।**

মূল কথা এই নয় যে সোনালি একটি খারাপ কোম্পানি — প্রতিবেদন পড়ার পর তা স্পষ্ট। মূল কথা হলো, **ওপরের প্রতিটি উপাত্ত প্রকাশিত ছিল, বিনামূল্যে, এমন একটি দলিলে যা কোম্পানি আইনত আপনাকে দিতে বাধ্য**, এবং তবু বাজার দুটিকেই দশ গুণ আয়ে মূল্য দিয়েছে।

এখানেই বাংলাদেশের খুচরা বিনিয়োগকারীরা টাকা হারান। জটিল কিছুতে নয়। যে নব্বই সেকেন্ড তাঁরা ব্যয় করেননি, তাতে।`,
    },

    formula: {
      en: `This chapter is largely qualitative. Two quantitative tools carry it.

**1. Related Party Exposure ratio.** Two forms, both needed.

Against the balance sheet:

$$RPE_{assets} = \\frac{\\text{RP Receivables} + \\text{RP Loans and Advances}}{\\text{Total Assets}} \\times 100$$

Against the income statement:

$$RPE_{profit} = \\frac{\\text{RP Receivables} + \\text{RP Loans and Advances}}{\\text{Net Profit}}$$

The second is the more brutal reading, because it expresses the related-party book in **years of earnings**.

**2. Impairment sensitivity.** The percentage write-down of the related-party book that exactly erases one year of reported profit:

$$I_{breakeven} = \\frac{\\text{Net Profit}}{\\text{RP Exposure}} \\times 100$$

Below 50%, the company's reported profit is hostage to a balance nobody has certified.

**3. Contingent liability coverage:**

$$CL_{equity} = \\frac{\\text{Contingent Liabilities}}{\\text{Shareholders' Equity}} \\times 100$$

**4. Receivable–revenue divergence:**

$$D = \\frac{\\Delta\\text{Receivables }\\%}{\\Delta\\text{Revenue }\\%}$$

$D > 2$ means receivables are growing at more than twice the rate of sales. That is either a deliberate credit-terms change (disclosed, explicable) or revenue that is not converting to cash (not explicable).

**5. Audit Red-Flag Score.** A weighted sum over ten binary indicators, $f_i \\in \\{0,1\\}$ with weights $w_i$ summing to 100:

$$S = \\sum_{i=1}^{10} w_i f_i$$

| $i$ | Flag | $w_i$ |
|---|---|---|
| ১ | Opinion not unqualified | ২৫ |
| ২ | Going-concern paragraph present | ১৮ |
| ৩ | Emphasis of matter present | ৬ |
| ৪ | Auditor not on FRC/BSEC panel | ৯ |
| ৫ | Auditor changed within 2 years, unexplained | ৬ |
| ৬ | $RPE_{assets} > 10\\%$ | ১২ |
| ৭ | $CL_{equity} > 25\\%$ | ৭ |
| ৮ | $D > 2$ | ৬ |
| ৯ | Directors' report inconsistent with audited accounts | ৪ |
| ১০ | Operating cash flow negative while PAT positive | ৭ |

**Verdict bands:**

$$S < 15 \\Rightarrow \\text{CLEAN} \\quad 15 \\le S < 30 \\Rightarrow \\text{MONITOR}$$
$$30 \\le S < 50 \\Rightarrow \\text{ELEVATED RISK} \\quad S \\ge 50 \\Rightarrow \\text{UNINVESTABLE}$$

**The weights are not arbitrary.** Flag 1 alone carries 25 because a modified opinion invalidates every ratio you would compute from the statements. Flags 1 and 2 together reach 43 — a qualified opinion with a going-concern paragraph puts a company most of the way to uninvestable before any financial analysis begins. That is the intended behaviour.`,
      bn: `এই অধ্যায় মূলত গুণগত। দুটি পরিমাণগত হাতিয়ার এটি বহন করে।

**১. সম্পর্কিত-পক্ষ এক্সপোজার অনুপাত।** দুটি রূপ, দুটিই প্রয়োজন।

স্থিতিপত্রের বিপরীতে:

$$RPE_{assets} = \\frac{\\text{সম্পর্কিত-পক্ষ প্রাপ্য} + \\text{সম্পর্কিত-পক্ষ ঋণ ও অগ্রিম}}{\\text{মোট সম্পদ}} \\times 100$$

আয় বিবরণীর বিপরীতে:

$$RPE_{profit} = \\frac{\\text{সম্পর্কিত-পক্ষ প্রাপ্য} + \\text{সম্পর্কিত-পক্ষ ঋণ ও অগ্রিম}}{\\text{নিট মুনাফা}}$$

দ্বিতীয়টি নির্মমতর পাঠ, কারণ এটি সম্পর্কিত-পক্ষ স্থিতিকে **আয়ের বছরে** প্রকাশ করে।

**২. অবচয় সংবেদনশীলতা।** সম্পর্কিত-পক্ষ স্থিতির যে শতাংশ অবলোপন ঠিক এক বছরের ঘোষিত মুনাফা মুছে দেয়:

$$I_{breakeven} = \\frac{\\text{নিট মুনাফা}}{\\text{সম্পর্কিত-পক্ষ এক্সপোজার}} \\times 100$$

৫০%-এর নিচে হলে কোম্পানির ঘোষিত মুনাফা এমন এক স্থিতির জিম্মায় যা কেউ প্রত্যয়ন করেনি।

**৩. সম্ভাব্য দায়ের আচ্ছাদন:**

$$CL_{equity} = \\frac{\\text{সম্ভাব্য দায়}}{\\text{শেয়ারহোল্ডারদের ইকুইটি}} \\times 100$$

**৪. প্রাপ্য–রাজস্ব বিচ্যুতি:**

$$D = \\frac{\\Delta\\text{প্রাপ্য }\\%}{\\Delta\\text{রাজস্ব }\\%}$$

$D > 2$ মানে প্রাপ্য বিক্রয়ের দ্বিগুণেরও বেশি হারে বাড়ছে। এটি হয় ইচ্ছাকৃত ঋণ-শর্ত পরিবর্তন (প্রকাশিত, ব্যাখ্যাযোগ্য), নয়তো এমন রাজস্ব যা নগদে রূপান্তরিত হচ্ছে না (ব্যাখ্যা-অযোগ্য)।

**৫. নিরীক্ষা লাল-পতাকা স্কোর।** দশটি দ্বিমিক নির্দেশকের ওপর ভারযুক্ত যোগফল, $f_i \\in \\{0,1\\}$ এবং ভার $w_i$-এর যোগফল ১০০:

$$S = \\sum_{i=1}^{10} w_i f_i$$

| $i$ | পতাকা | $w_i$ |
|---|---|---|
| ১ | মতামত অযোগ্যতাহীন নয় | ২৫ |
| ২ | চলমানতা অনুচ্ছেদ আছে | ১৮ |
| ৩ | বিষয়-নির্দেশক অনুচ্ছেদ আছে | ৬ |
| ৪ | নিরীক্ষক FRC/বিএসইসি প্যানেলে নেই | ৯ |
| ৫ | ২ বছরের মধ্যে ব্যাখ্যাহীন নিরীক্ষক পরিবর্তন | ৬ |
| ৬ | $RPE_{assets} > 10\\%$ | ১২ |
| ৭ | $CL_{equity} > 25\\%$ | ৭ |
| ৮ | $D > 2$ | ৬ |
| ৯ | পরিচালকদের প্রতিবেদন নিরীক্ষিত হিসাবের সঙ্গে অসঙ্গত | ৪ |
| ১০ | পরিচালন নগদ প্রবাহ ঋণাত্মক অথচ PAT ধনাত্মক | ৭ |

**সিদ্ধান্তের স্তর:**

$$S < 15 \\Rightarrow \\text{CLEAN} \\quad 15 \\le S < 30 \\Rightarrow \\text{MONITOR}$$
$$30 \\le S < 50 \\Rightarrow \\text{ELEVATED RISK} \\quad S \\ge 50 \\Rightarrow \\text{UNINVESTABLE}$$

**ভারগুলো এলোমেলো নয়।** কেবল পতাকা ১ বহন করে ২৫, কারণ পরিবর্তিত মতামত ঐ বিবরণী থেকে গণনা করা প্রতিটি অনুপাতকেই অকার্যকর করে দেয়। পতাকা ১ ও ২ মিলে পৌঁছায় ৪৩-এ — চলমানতা অনুচ্ছেদসহ একটি শর্তযুক্ত মতামত কোনো আর্থিক বিশ্লেষণ শুরুর আগেই কোম্পানিটিকে বিনিয়োগ-অযোগ্যতার প্রায় দ্বারপ্রান্তে নিয়ে যায়। এটাই অভিপ্রেত আচরণ।`,
    },

    manual: {
      en: `**Scenario.** Nirbhoy Pharmaceuticals Ltd and Shonali Textile Mills Ltd. Figures in BDT crore, as tabulated in the worked example.

---

**Step 1 — Establish that the headline is identical.**

$$EPS_{Nirbhoy} = \\frac{48.00}{8.00} = \\text{BDT } 6.00$$
$$EPS_{Shonali} = \\frac{48.00}{8.00} = \\text{BDT } 6.00$$

At a price of BDT 60 both screen at $P/E = 60 / 6.00 = 10.0$. **Nothing on a screener distinguishes them.**

---

**Step 2 — Related Party Exposure against assets.**

$$RPE_{Nirbhoy} = \\frac{6}{880} \\times 100 = 0.68\\%$$
$$RPE_{Shonali} = \\frac{148}{910} \\times 100 = 16.26\\%$$

Threshold is 10%. Nirbhoy passes; Shonali fails by a wide margin.

---

**Step 3 — Related Party Exposure against profit.**

$$RPE^{profit}_{Nirbhoy} = \\frac{6}{48} = 0.12\\times$$
$$RPE^{profit}_{Shonali} = \\frac{148}{48} = 3.08\\times$$

Shonali has lent its related parties **three years of earnings**.

---

**Step 4 — Impairment sensitivity.**

$$I_{Nirbhoy} = \\frac{48}{6} \\times 100 = 800.00\\%$$

Impossible to breach — the whole RP book is 12.5% of one year's profit.

$$I_{Shonali} = \\frac{48}{148} \\times 100 = 32.43\\%$$

**A 32.43% write-down erases the entire reported year.** The auditor has stated he cannot verify recoverability at all.

At a 50% provision:
$$48 - (148 \\times 0.50) = 48 - 74 = -\\text{BDT } 26 \\text{ crore}$$
$$EPS = \\frac{-26}{8} = -\\text{BDT } 3.25$$

---

**Step 5 — Contingent liabilities against equity.**

$$CL_{Nirbhoy} = \\frac{12}{520} \\times 100 = 2.31\\%$$
$$CL_{Shonali} = \\frac{190}{300} \\times 100 = 63.33\\%$$

---

**Step 6 — Receivable–revenue divergence.**

Nirbhoy:
$$\\Delta Rev = \\left(\\frac{620}{560} - 1\\right) \\times 100 = 10.71\\%$$
$$\\Delta Rec = \\left(\\frac{74}{68} - 1\\right) \\times 100 = 8.82\\%$$
$$D = \\frac{8.82}{10.71} = 0.82 \\;\\; (< 2, \\text{ pass})$$

Shonali:
$$\\Delta Rev = \\left(\\frac{640}{610} - 1\\right) \\times 100 = 4.92\\%$$
$$\\Delta Rec = \\left(\\frac{232}{150} - 1\\right) \\times 100 = 54.67\\%$$
$$D = \\frac{54.67}{4.92} = 11.11 \\;\\; (> 2, \\text{ fail})$$

---

**Step 7 — Score the flags.**

Nirbhoy triggers none:
$$S_{Nirbhoy} = 0$$

Shonali triggers eight:
$$S_{Shonali} = 25 + 18 + 6 + 9 + 12 + 7 + 6 + 7 = 90$$

---

**Step 8 — Verdicts.**

$$S_{Nirbhoy} = 0 < 15 \\Rightarrow \\textbf{CLEAN}$$
$$S_{Shonali} = 90 \\ge 50 \\Rightarrow \\textbf{UNINVESTABLE}$$

---

**Interpretation.**

Three things should stay with you.

**BDT 6.00.** Both companies' EPS. It is the number every newspaper prints and it separated nothing.

**32.43%.** The impairment that erases Shonali's entire year, applied to a balance the auditor explicitly declined to certify. The auditor did not say the receivable is bad. He said he could not tell — and told you so, in writing, in a document you can download for free.

**90 versus 0.** Not a subtle margin. Not a judgement call. Eight of ten published, binary, checkable facts.

**The discipline:** read the auditor's opinion and the related-party note before you look at EPS, not after. Once you have seen a P/E of 10.0 you will look for reasons to justify it. The order of reading is the whole method.`,
      bn: `**পরিস্থিতি।** নির্ভয় ফার্মাসিউটিক্যালস লিমিটেড ও সোনালি টেক্সটাইল মিলস লিমিটেড। সংখ্যা কোটি টাকায়, কার্যকরী উদাহরণের ছক অনুযায়ী।

---

**ধাপ ১ — শিরোনাম যে অভিন্ন তা প্রতিষ্ঠা করুন।**

$$EPS_{নির্ভয়} = \\frac{48.00}{8.00} = ৬.০০ \\text{ টাকা}$$
$$EPS_{সোনালি} = \\frac{48.00}{8.00} = ৬.০০ \\text{ টাকা}$$

৬০ টাকা দামে দুটিই দেখায় $P/E = 60 / 6.00 = 10.0$। **কোনো স্ক্রিনারই এদের আলাদা করে না।**

---

**ধাপ ২ — সম্পদের বিপরীতে সম্পর্কিত-পক্ষ এক্সপোজার।**

$$RPE_{নির্ভয়} = \\frac{6}{880} \\times 100 = 0.68\\%$$
$$RPE_{সোনালি} = \\frac{148}{910} \\times 100 = 16.26\\%$$

সীমা ১০%। নির্ভয় উত্তীর্ণ; সোনালি বিস্তর ব্যবধানে ব্যর্থ।

---

**ধাপ ৩ — মুনাফার বিপরীতে সম্পর্কিত-পক্ষ এক্সপোজার।**

$$RPE^{profit}_{নির্ভয়} = \\frac{6}{48} = 0.12\\times$$
$$RPE^{profit}_{সোনালি} = \\frac{148}{48} = 3.08\\times$$

সোনালি তার সম্পর্কিত পক্ষগুলোকে **তিন বছরের আয়** ধার দিয়েছে।

---

**ধাপ ৪ — অবচয় সংবেদনশীলতা।**

$$I_{নির্ভয়} = \\frac{48}{6} \\times 100 = 800.00\\%$$

লঙ্ঘন অসম্ভব — গোটা RP স্থিতিই এক বছরের মুনাফার ১২.৫%।

$$I_{সোনালি} = \\frac{48}{148} \\times 100 = 32.43\\%$$

**৩২.৪৩% অবলোপন গোটা ঘোষিত বছরটি মুছে দেয়।** নিরীক্ষক বলেছেন তিনি আদায়যোগ্যতা আদৌ যাচাই করতে পারেননি।

৫০% সঞ্চিতিতে:
$$48 - (148 \\times 0.50) = 48 - 74 = -২৬ \\text{ কোটি টাকা}$$
$$EPS = \\frac{-26}{8} = -৩.২৫ \\text{ টাকা}$$

---

**ধাপ ৫ — ইকুইটির বিপরীতে সম্ভাব্য দায়।**

$$CL_{নির্ভয়} = \\frac{12}{520} \\times 100 = 2.31\\%$$
$$CL_{সোনালি} = \\frac{190}{300} \\times 100 = 63.33\\%$$

---

**ধাপ ৬ — প্রাপ্য–রাজস্ব বিচ্যুতি।**

নির্ভয়:
$$\\Delta Rev = \\left(\\frac{620}{560} - 1\\right) \\times 100 = 10.71\\%$$
$$\\Delta Rec = \\left(\\frac{74}{68} - 1\\right) \\times 100 = 8.82\\%$$
$$D = \\frac{8.82}{10.71} = 0.82 \\;\\; (< 2, \\text{ উত্তীর্ণ})$$

সোনালি:
$$\\Delta Rev = \\left(\\frac{640}{610} - 1\\right) \\times 100 = 4.92\\%$$
$$\\Delta Rec = \\left(\\frac{232}{150} - 1\\right) \\times 100 = 54.67\\%$$
$$D = \\frac{54.67}{4.92} = 11.11 \\;\\; (> 2, \\text{ ব্যর্থ})$$

---

**ধাপ ৭ — পতাকাগুলোর স্কোর।**

নির্ভয় একটিও ট্রিগার করে না:
$$S_{নির্ভয়} = 0$$

সোনালি আটটি ট্রিগার করে:
$$S_{সোনালি} = 25 + 18 + 6 + 9 + 12 + 7 + 6 + 7 = 90$$

---

**ধাপ ৮ — সিদ্ধান্ত।**

$$S_{নির্ভয়} = 0 < 15 \\Rightarrow \\textbf{CLEAN}$$
$$S_{সোনালি} = 90 \\ge 50 \\Rightarrow \\textbf{UNINVESTABLE}$$

---

**ব্যাখ্যা।**

তিনটি বিষয় আপনার মনে থাকা উচিত।

**৬.০০ টাকা।** দুই কোম্পানিরই EPS। এই সংখ্যাটিই প্রতিটি সংবাদপত্র ছাপে এবং এটি কিছুই পৃথক করেনি।

**৩২.৪৩%।** যে অবচয় সোনালির গোটা বছর মুছে দেয়, এবং তা এমন স্থিতির ওপর যাকে নিরীক্ষক স্পষ্টভাবে প্রত্যয়ন করতে অস্বীকার করেছেন। নিরীক্ষক বলেননি প্রাপ্যটি খারাপ। তিনি বলেছেন তিনি বলতে পারছেন না — এবং লিখিতভাবে, বিনামূল্যে ডাউনলোডযোগ্য একটি দলিলে, তা আপনাকে জানিয়েছেন।

**৯০ বনাম ০।** সূক্ষ্ম ব্যবধান নয়। বিচারবুদ্ধির বিষয় নয়। দশটির মধ্যে আটটি প্রকাশিত, দ্বিমিক, যাচাইযোগ্য ঘটনা।

**শৃঙ্খলা:** EPS দেখার *আগে* নিরীক্ষকের মতামত ও সম্পর্কিত-পক্ষ টীকা পড়ুন, পরে নয়। ১০.০ P/E একবার দেখে ফেললে আপনি তাকে সমর্থন করার কারণ খুঁজতে থাকবেন। পড়ার ক্রমটাই গোটা পদ্ধতি।`,
    },

    excel: {
      en: `\`\`\`
A1: RED FLAG                                  B1: WEIGHT  C1: PRESENT(1/0)  D1: SCORE

A2:  Opinion not unqualified                  B2:  25     C2: 1   D2:  =B2*C2
A3:  Going-concern paragraph present          B3:  18     C3: 1   D3:  =B3*C3
A4:  Emphasis of matter present               B4:   6     C4: 1   D4:  =B4*C4
A5:  Auditor not on FRC/BSEC panel            B5:   9     C5: 1   D5:  =B5*C5
A6:  Auditor changed <=2 yrs, unexplained     B6:   6     C6: 0   D6:  =B6*C6
A7:  RP exposure > 10% of total assets        B7:  12     C7: 1   D7:  =B7*C7
A8:  Contingent liabilities > 25% of equity   B8:   7     C8: 1   D8:  =B8*C8
A9:  Receivable growth > 2x revenue growth    B9:   6     C9: 1   D9:  =B9*C9
A10: Directors' report inconsistent           B10:  4     C10: 0  D10: =B10*C10
A11: CFO negative while PAT positive          B11:  7     C11: 1  D11: =B11*C11

A13: MAXIMUM WEIGHT                           D13: =SUM(B2:B11)
A14: RED-FLAG SCORE                           D14: =SUM(D2:D11)
A15: VERDICT                                  D15: =IF(D14>=50,"UNINVESTABLE",
                                                   IF(D14>=30,"ELEVATED RISK",
                                                   IF(D14>=15,"MONITOR","CLEAN")))

A17: Related-Party Receivables (BDT cr)       B17: 148
A18: Total Assets (BDT cr)                    B18: 910
A19: RP Exposure (% of assets)                B19: =B17/B18*100
A20: Net Profit (BDT cr)                      B20: 48
A21: RP Exposure (x net profit)               B21: =B17/B20
A22: Impairment % that erases one year PAT    B22: =B20/B17*100
\`\`\`

**Column C is the only column you fill in.** Everything else is fixed. That is the design intent: the scorer must not be negotiable while you are looking at a stock you already want to buy.

Three practical notes.

**Fill C2 to C5 before you open the financial statements.** Those four flags carry 58 of the 100 available points and every one of them is answered from the auditor's report alone. If the score is already 43 after four rows, the remaining analysis is optional.

**Rows 17 to 22 are the sensitivity block.** B22 is the cell that matters: it tells you what percentage of the related-party book must go bad to erase a year. Here it reads **32.43%**. Any value under 50 should be treated as a live threat to the reported EPS, not a remote one.

**Keep one sheet per company and one row per year.** A single year's score is a snapshot. A score that climbs from 6 to 25 to 90 across three years is the actual finding, and it is visible a full year before the market reacts.`,
      bn: `\`\`\`
A1: লাল পতাকা                                  B1: ভার   C1: উপস্থিত(১/০)  D1: স্কোর

A2:  মতামত অযোগ্যতাহীন নয়                      B2:  25   C2: 1   D2:  =B2*C2
A3:  চলমানতা অনুচ্ছেদ আছে                       B3:  18   C3: 1   D3:  =B3*C3
A4:  বিষয়-নির্দেশক অনুচ্ছেদ আছে                 B4:   6   C4: 1   D4:  =B4*C4
A5:  নিরীক্ষক FRC/বিএসইসি প্যানেলে নেই           B5:   9   C5: 1   D5:  =B5*C5
A6:  ২ বছরে ব্যাখ্যাহীন নিরীক্ষক পরিবর্তন        B6:   6   C6: 0   D6:  =B6*C6
A7:  RP এক্সপোজার > মোট সম্পদের ১০%              B7:  12   C7: 1   D7:  =B7*C7
A8:  সম্ভাব্য দায় > ইকুইটির ২৫%                 B8:   7   C8: 1   D8:  =B8*C8
A9:  প্রাপ্য প্রবৃদ্ধি > রাজস্ব প্রবৃদ্ধির ২ গুণ  B9:   6   C9: 1   D9:  =B9*C9
A10: পরিচালকদের প্রতিবেদন অসঙ্গত                B10:  4   C10: 0  D10: =B10*C10
A11: CFO ঋণাত্মক অথচ PAT ধনাত্মক                B11:  7   C11: 1  D11: =B11*C11

A13: সর্বোচ্চ ভার                               D13: =SUM(B2:B11)
A14: লাল-পতাকা স্কোর                            D14: =SUM(D2:D11)
A15: সিদ্ধান্ত                                  D15: =IF(D14>=50,"UNINVESTABLE",
                                                   IF(D14>=30,"ELEVATED RISK",
                                                   IF(D14>=15,"MONITOR","CLEAN")))

A17: সম্পর্কিত-পক্ষ প্রাপ্য (কোটি টাকা)          B17: 148
A18: মোট সম্পদ (কোটি টাকা)                      B18: 910
A19: RP এক্সপোজার (সম্পদের %)                   B19: =B17/B18*100
A20: নিট মুনাফা (কোটি টাকা)                     B20: 48
A21: RP এক্সপোজার (নিট মুনাফার গুণ)             B21: =B17/B20
A22: এক বছরের PAT মুছে দেওয়া অবচয় %            B22: =B20/B17*100
\`\`\`

**C কলামই একমাত্র কলাম যা আপনি পূরণ করবেন।** বাকি সবকিছু নির্ধারিত। এটাই নকশার উদ্দেশ্য: যে শেয়ার আপনি ইতিমধ্যে কিনতে চাইছেন তার দিকে তাকিয়ে থাকা অবস্থায় স্কোরারটি দরকষাকষিযোগ্য হওয়া চলবে না।

তিনটি ব্যবহারিক টীকা।

**আর্থিক বিবরণী খোলার আগেই C2 থেকে C5 পূরণ করুন।** ঐ চারটি পতাকা প্রাপ্য ১০০ পয়েন্টের ৫৮ বহন করে এবং প্রতিটিরই উত্তর কেবল নিরীক্ষকের প্রতিবেদন থেকেই মেলে। চার সারির পর স্কোর যদি ইতিমধ্যে ৪৩ হয়, বাকি বিশ্লেষণ ঐচ্ছিক।

**১৭ থেকে ২২ সারি হলো সংবেদনশীলতা ব্লক।** B22 ঘরটিই গুরুত্বপূর্ণ: এটি বলে সম্পর্কিত-পক্ষ স্থিতির কত শতাংশ খারাপ হলে এক বছর মুছে যায়। এখানে এটি দেখাচ্ছে **৩২.৪৩%**। ৫০-এর নিচে যেকোনো মান ঘোষিত EPS-এর জন্য দূরবর্তী নয়, সক্রিয় হুমকি হিসেবে গণ্য করুন।

**প্রতি কোম্পানির জন্য একটি শিট, প্রতি বছরের জন্য একটি সারি রাখুন।** এক বছরের স্কোর একটি স্থিরচিত্র। তিন বছরে ৬ থেকে ২৫ হয়ে ৯০-এ ওঠা স্কোরই প্রকৃত আবিষ্কার, এবং বাজার প্রতিক্রিয়া দেখানোর পুরো এক বছর আগে তা দৃশ্যমান।`,
    },

    python: {
      en: `\`\`\`python
"""
Chapter 9 - Annual report red-flag scorer.
Educational. All figures in BDT crore.
"""
from dataclasses import dataclass
from typing import Dict, List

FLAG_WEIGHTS: Dict[str, int] = {
    "opinion_not_unqualified": 25,
    "going_concern_paragraph": 18,
    "emphasis_of_matter": 6,
    "auditor_off_panel": 9,
    "auditor_changed_unexplained": 6,
    "rp_exposure_over_10pc_assets": 12,
    "contingent_over_25pc_equity": 7,
    "receivables_outgrowing_revenue": 6,
    "directors_report_inconsistent": 4,
    "cfo_negative_while_pat_positive": 7,
}


@dataclass
class AnnualReport:
    """One audited annual report, read in the correct order."""
    name: str
    opinion: str                 # 'unqualified' | 'qualified' | 'adverse' | 'disclaimer'
    going_concern_para: bool
    emphasis_of_matter: bool
    auditor_on_frc_panel: bool
    auditor_changed_unexplained: bool
    directors_report_inconsistent: bool

    net_profit: float
    shares_crore: float
    total_assets: float
    equity: float
    cash_from_operations: float

    revenue: float
    revenue_prior: float
    trade_receivables: float
    trade_receivables_prior: float
    related_party_receivables: float
    contingent_liabilities: float

    @property
    def eps(self) -> float:
        return self.net_profit / self.shares_crore

    @property
    def rp_exposure_pct(self) -> float:
        """Related-party receivables as a percentage of total assets."""
        return self.related_party_receivables / self.total_assets * 100

    @property
    def rp_multiple_of_profit(self) -> float:
        return self.related_party_receivables / self.net_profit

    @property
    def impairment_to_erase_profit_pct(self) -> float:
        """What fraction of the related-party book must go bad to wipe out one year's profit."""
        if self.related_party_receivables == 0:
            return float("inf")
        return self.net_profit / self.related_party_receivables * 100

    @property
    def contingent_to_equity_pct(self) -> float:
        return self.contingent_liabilities / self.equity * 100

    @property
    def revenue_growth_pct(self) -> float:
        return (self.revenue / self.revenue_prior - 1) * 100

    @property
    def receivable_growth_pct(self) -> float:
        return (self.trade_receivables / self.trade_receivables_prior - 1) * 100

    def red_flags(self) -> List[str]:
        f: List[str] = []
        if self.opinion != "unqualified":
            f.append("opinion_not_unqualified")
        if self.going_concern_para:
            f.append("going_concern_paragraph")
        if self.emphasis_of_matter:
            f.append("emphasis_of_matter")
        if not self.auditor_on_frc_panel:
            f.append("auditor_off_panel")
        if self.auditor_changed_unexplained:
            f.append("auditor_changed_unexplained")
        if self.rp_exposure_pct > 10.0:
            f.append("rp_exposure_over_10pc_assets")
        if self.contingent_to_equity_pct > 25.0:
            f.append("contingent_over_25pc_equity")
        if self.receivable_growth_pct > 2 * self.revenue_growth_pct:
            f.append("receivables_outgrowing_revenue")
        if self.directors_report_inconsistent:
            f.append("directors_report_inconsistent")
        if self.cash_from_operations < 0 and self.net_profit > 0:
            f.append("cfo_negative_while_pat_positive")
        return f

    @property
    def score(self) -> int:
        return sum(FLAG_WEIGHTS[k] for k in self.red_flags())

    @property
    def verdict(self) -> str:
        s = self.score
        if s >= 50:
            return "UNINVESTABLE"
        if s >= 30:
            return "ELEVATED RISK"
        if s >= 15:
            return "MONITOR"
        return "CLEAN"


def report_card(r: AnnualReport) -> None:
    print(f"--- {r.name} ---")
    print(f"  Audit opinion            : {r.opinion}")
    print(f"  EPS (BDT)                : {r.eps:.2f}")
    print(f"  RP exposure / assets     : {r.rp_exposure_pct:.2f}%")
    print(f"  RP exposure / net profit : {r.rp_multiple_of_profit:.2f}x")
    print(f"  Impairment to erase PAT  : {r.impairment_to_erase_profit_pct:.2f}%")
    print(f"  Contingent / equity      : {r.contingent_to_equity_pct:.2f}%")
    print(f"  Revenue growth           : {r.revenue_growth_pct:.2f}%")
    print(f"  Receivable growth        : {r.receivable_growth_pct:.2f}%")
    print(f"  Flags raised             : {len(r.red_flags())}")
    for k in r.red_flags():
        print(f"      [{FLAG_WEIGHTS[k]:>2}] {k}")
    print(f"  RED-FLAG SCORE           : {r.score} / 100")
    print(f"  VERDICT                  : {r.verdict}")
    print()


if __name__ == "__main__":
    nirbhoy = AnnualReport(
        name="Nirbhoy Pharmaceuticals Ltd",
        opinion="unqualified",
        going_concern_para=False,
        emphasis_of_matter=False,
        auditor_on_frc_panel=True,
        auditor_changed_unexplained=False,
        directors_report_inconsistent=False,
        net_profit=48.0, shares_crore=8.0,
        total_assets=880.0, equity=520.0, cash_from_operations=62.0,
        revenue=620.0, revenue_prior=560.0,
        trade_receivables=74.0, trade_receivables_prior=68.0,
        related_party_receivables=6.0, contingent_liabilities=12.0,
    )

    shonali = AnnualReport(
        name="Shonali Textile Mills Ltd",
        opinion="qualified",
        going_concern_para=True,
        emphasis_of_matter=True,
        auditor_on_frc_panel=False,
        auditor_changed_unexplained=False,
        directors_report_inconsistent=False,
        net_profit=48.0, shares_crore=8.0,
        total_assets=910.0, equity=300.0, cash_from_operations=-19.0,
        revenue=640.0, revenue_prior=610.0,
        trade_receivables=232.0, trade_receivables_prior=150.0,
        related_party_receivables=148.0, contingent_liabilities=190.0,
    )

    padma = AnnualReport(
        name="Padma Power Generation Ltd",
        opinion="unqualified",
        going_concern_para=False,
        emphasis_of_matter=True,
        auditor_on_frc_panel=True,
        auditor_changed_unexplained=True,
        directors_report_inconsistent=False,
        net_profit=95.0, shares_crore=20.0,
        total_assets=1400.0, equity=700.0, cash_from_operations=80.0,
        revenue=900.0, revenue_prior=850.0,
        trade_receivables=160.0, trade_receivables_prior=120.0,
        related_party_receivables=40.0, contingent_liabilities=210.0,
    )

    print(f"Total weight available   : {sum(FLAG_WEIGHTS.values())}")
    print()
    for r in (nirbhoy, shonali, padma):
        report_card(r)

    print("Headline comparison (Nirbhoy vs Shonali):")
    print(f"  Net profit  : {nirbhoy.net_profit:.2f} cr  vs  {shonali.net_profit:.2f} cr")
    print(f"  EPS         : {nirbhoy.eps:.2f}      vs  {shonali.eps:.2f}")
    print(f"  Score       : {nirbhoy.score}         vs  {shonali.score}")
    prov = shonali.related_party_receivables * 0.50
    adj = shonali.net_profit - prov
    print(f"  Shonali PAT if 50% of RP book provided: {adj:.2f} cr  (EPS {adj / shonali.shares_crore:.2f})")
\`\`\`

**Expected output:**

\`\`\`
Total weight available   : 100

--- Nirbhoy Pharmaceuticals Ltd ---
  Audit opinion            : unqualified
  EPS (BDT)                : 6.00
  RP exposure / assets     : 0.68%
  RP exposure / net profit : 0.12x
  Impairment to erase PAT  : 800.00%
  Contingent / equity      : 2.31%
  Revenue growth           : 10.71%
  Receivable growth        : 8.82%
  Flags raised             : 0
  RED-FLAG SCORE           : 0 / 100
  VERDICT                  : CLEAN

--- Shonali Textile Mills Ltd ---
  Audit opinion            : qualified
  EPS (BDT)                : 6.00
  RP exposure / assets     : 16.26%
  RP exposure / net profit : 3.08x
  Impairment to erase PAT  : 32.43%
  Contingent / equity      : 63.33%
  Revenue growth           : 4.92%
  Receivable growth        : 54.67%
  Flags raised             : 8
      [25] opinion_not_unqualified
      [18] going_concern_paragraph
      [ 6] emphasis_of_matter
      [ 9] auditor_off_panel
      [12] rp_exposure_over_10pc_assets
      [ 7] contingent_over_25pc_equity
      [ 6] receivables_outgrowing_revenue
      [ 7] cfo_negative_while_pat_positive
  RED-FLAG SCORE           : 90 / 100
  VERDICT                  : UNINVESTABLE

--- Padma Power Generation Ltd ---
  Audit opinion            : unqualified
  EPS (BDT)                : 4.75
  RP exposure / assets     : 2.86%
  RP exposure / net profit : 0.42x
  Impairment to erase PAT  : 237.50%
  Contingent / equity      : 30.00%
  Revenue growth           : 5.88%
  Receivable growth        : 33.33%
  Flags raised             : 4
      [ 6] emphasis_of_matter
      [ 6] auditor_changed_unexplained
      [ 7] contingent_over_25pc_equity
      [ 6] receivables_outgrowing_revenue
  RED-FLAG SCORE           : 25 / 100
  VERDICT                  : MONITOR

Headline comparison (Nirbhoy vs Shonali):
  Net profit  : 48.00 cr  vs  48.00 cr
  EPS         : 6.00      vs  6.00
  Score       : 0         vs  90
  Shonali PAT if 50% of RP book provided: -26.00 cr  (EPS -3.25)
\`\`\`

**Padma Power is the case worth studying.** Its opinion is unqualified. It is profitable. It is audited by a panel firm. And it still scores 25 — MONITOR — on four soft flags: an emphasis of matter, an unexplained auditor change, contingent liabilities at exactly 30% of equity, and receivables growing 33% on 6% revenue growth.

**No single one of those is disqualifying. Together they describe a company under strain that has not yet had to admit it.** This is what the scorer is for: not to catch the obvious disaster — Shonali announces itself — but to put a number on the company that still looks fine.

Run the same object against three consecutive annual reports. The trend in \`score\` is worth far more than any single year's value.`,
      bn: `\`\`\`python
"""
অধ্যায় ৯ — বার্ষিক প্রতিবেদনের লাল-পতাকা স্কোরার।
শিক্ষামূলক। সব সংখ্যা কোটি টাকায়।
"""
from dataclasses import dataclass
from typing import Dict, List

FLAG_WEIGHTS: Dict[str, int] = {
    "opinion_not_unqualified": 25,
    "going_concern_paragraph": 18,
    "emphasis_of_matter": 6,
    "auditor_off_panel": 9,
    "auditor_changed_unexplained": 6,
    "rp_exposure_over_10pc_assets": 12,
    "contingent_over_25pc_equity": 7,
    "receivables_outgrowing_revenue": 6,
    "directors_report_inconsistent": 4,
    "cfo_negative_while_pat_positive": 7,
}


@dataclass
class AnnualReport:
    """একটি নিরীক্ষিত বার্ষিক প্রতিবেদন, সঠিক ক্রমে পঠিত।"""
    name: str
    opinion: str                 # 'unqualified' | 'qualified' | 'adverse' | 'disclaimer'
    going_concern_para: bool
    emphasis_of_matter: bool
    auditor_on_frc_panel: bool
    auditor_changed_unexplained: bool
    directors_report_inconsistent: bool

    net_profit: float
    shares_crore: float
    total_assets: float
    equity: float
    cash_from_operations: float

    revenue: float
    revenue_prior: float
    trade_receivables: float
    trade_receivables_prior: float
    related_party_receivables: float
    contingent_liabilities: float

    @property
    def eps(self) -> float:
        return self.net_profit / self.shares_crore

    @property
    def rp_exposure_pct(self) -> float:
        """মোট সম্পদের শতাংশ হিসেবে সম্পর্কিত-পক্ষ প্রাপ্য।"""
        return self.related_party_receivables / self.total_assets * 100

    @property
    def rp_multiple_of_profit(self) -> float:
        return self.related_party_receivables / self.net_profit

    @property
    def impairment_to_erase_profit_pct(self) -> float:
        """সম্পর্কিত-পক্ষ স্থিতির কত অংশ খারাপ হলে এক বছরের মুনাফা মুছে যায়।"""
        if self.related_party_receivables == 0:
            return float("inf")
        return self.net_profit / self.related_party_receivables * 100

    @property
    def contingent_to_equity_pct(self) -> float:
        return self.contingent_liabilities / self.equity * 100

    @property
    def revenue_growth_pct(self) -> float:
        return (self.revenue / self.revenue_prior - 1) * 100

    @property
    def receivable_growth_pct(self) -> float:
        return (self.trade_receivables / self.trade_receivables_prior - 1) * 100

    def red_flags(self) -> List[str]:
        f: List[str] = []
        if self.opinion != "unqualified":
            f.append("opinion_not_unqualified")
        if self.going_concern_para:
            f.append("going_concern_paragraph")
        if self.emphasis_of_matter:
            f.append("emphasis_of_matter")
        if not self.auditor_on_frc_panel:
            f.append("auditor_off_panel")
        if self.auditor_changed_unexplained:
            f.append("auditor_changed_unexplained")
        if self.rp_exposure_pct > 10.0:
            f.append("rp_exposure_over_10pc_assets")
        if self.contingent_to_equity_pct > 25.0:
            f.append("contingent_over_25pc_equity")
        if self.receivable_growth_pct > 2 * self.revenue_growth_pct:
            f.append("receivables_outgrowing_revenue")
        if self.directors_report_inconsistent:
            f.append("directors_report_inconsistent")
        if self.cash_from_operations < 0 and self.net_profit > 0:
            f.append("cfo_negative_while_pat_positive")
        return f

    @property
    def score(self) -> int:
        return sum(FLAG_WEIGHTS[k] for k in self.red_flags())

    @property
    def verdict(self) -> str:
        s = self.score
        if s >= 50:
            return "UNINVESTABLE"
        if s >= 30:
            return "ELEVATED RISK"
        if s >= 15:
            return "MONITOR"
        return "CLEAN"


def report_card(r: AnnualReport) -> None:
    print(f"--- {r.name} ---")
    print(f"  Audit opinion            : {r.opinion}")
    print(f"  EPS (BDT)                : {r.eps:.2f}")
    print(f"  RP exposure / assets     : {r.rp_exposure_pct:.2f}%")
    print(f"  RP exposure / net profit : {r.rp_multiple_of_profit:.2f}x")
    print(f"  Impairment to erase PAT  : {r.impairment_to_erase_profit_pct:.2f}%")
    print(f"  Contingent / equity      : {r.contingent_to_equity_pct:.2f}%")
    print(f"  Revenue growth           : {r.revenue_growth_pct:.2f}%")
    print(f"  Receivable growth        : {r.receivable_growth_pct:.2f}%")
    print(f"  Flags raised             : {len(r.red_flags())}")
    for k in r.red_flags():
        print(f"      [{FLAG_WEIGHTS[k]:>2}] {k}")
    print(f"  RED-FLAG SCORE           : {r.score} / 100")
    print(f"  VERDICT                  : {r.verdict}")
    print()


if __name__ == "__main__":
    nirbhoy = AnnualReport(
        name="Nirbhoy Pharmaceuticals Ltd",
        opinion="unqualified",
        going_concern_para=False,
        emphasis_of_matter=False,
        auditor_on_frc_panel=True,
        auditor_changed_unexplained=False,
        directors_report_inconsistent=False,
        net_profit=48.0, shares_crore=8.0,
        total_assets=880.0, equity=520.0, cash_from_operations=62.0,
        revenue=620.0, revenue_prior=560.0,
        trade_receivables=74.0, trade_receivables_prior=68.0,
        related_party_receivables=6.0, contingent_liabilities=12.0,
    )

    shonali = AnnualReport(
        name="Shonali Textile Mills Ltd",
        opinion="qualified",
        going_concern_para=True,
        emphasis_of_matter=True,
        auditor_on_frc_panel=False,
        auditor_changed_unexplained=False,
        directors_report_inconsistent=False,
        net_profit=48.0, shares_crore=8.0,
        total_assets=910.0, equity=300.0, cash_from_operations=-19.0,
        revenue=640.0, revenue_prior=610.0,
        trade_receivables=232.0, trade_receivables_prior=150.0,
        related_party_receivables=148.0, contingent_liabilities=190.0,
    )

    padma = AnnualReport(
        name="Padma Power Generation Ltd",
        opinion="unqualified",
        going_concern_para=False,
        emphasis_of_matter=True,
        auditor_on_frc_panel=True,
        auditor_changed_unexplained=True,
        directors_report_inconsistent=False,
        net_profit=95.0, shares_crore=20.0,
        total_assets=1400.0, equity=700.0, cash_from_operations=80.0,
        revenue=900.0, revenue_prior=850.0,
        trade_receivables=160.0, trade_receivables_prior=120.0,
        related_party_receivables=40.0, contingent_liabilities=210.0,
    )

    print(f"Total weight available   : {sum(FLAG_WEIGHTS.values())}")
    print()
    for r in (nirbhoy, shonali, padma):
        report_card(r)

    print("Headline comparison (Nirbhoy vs Shonali):")
    print(f"  Net profit  : {nirbhoy.net_profit:.2f} cr  vs  {shonali.net_profit:.2f} cr")
    print(f"  EPS         : {nirbhoy.eps:.2f}      vs  {shonali.eps:.2f}")
    print(f"  Score       : {nirbhoy.score}         vs  {shonali.score}")
    prov = shonali.related_party_receivables * 0.50
    adj = shonali.net_profit - prov
    print(f"  Shonali PAT if 50% of RP book provided: {adj:.2f} cr  (EPS {adj / shonali.shares_crore:.2f})")
\`\`\`

**প্রত্যাশিত ফলাফল:**

\`\`\`
Total weight available   : 100

--- Nirbhoy Pharmaceuticals Ltd ---
  Audit opinion            : unqualified
  EPS (BDT)                : 6.00
  RP exposure / assets     : 0.68%
  RP exposure / net profit : 0.12x
  Impairment to erase PAT  : 800.00%
  Contingent / equity      : 2.31%
  Revenue growth           : 10.71%
  Receivable growth        : 8.82%
  Flags raised             : 0
  RED-FLAG SCORE           : 0 / 100
  VERDICT                  : CLEAN

--- Shonali Textile Mills Ltd ---
  Audit opinion            : qualified
  EPS (BDT)                : 6.00
  RP exposure / assets     : 16.26%
  RP exposure / net profit : 3.08x
  Impairment to erase PAT  : 32.43%
  Contingent / equity      : 63.33%
  Revenue growth           : 4.92%
  Receivable growth        : 54.67%
  Flags raised             : 8
      [25] opinion_not_unqualified
      [18] going_concern_paragraph
      [ 6] emphasis_of_matter
      [ 9] auditor_off_panel
      [12] rp_exposure_over_10pc_assets
      [ 7] contingent_over_25pc_equity
      [ 6] receivables_outgrowing_revenue
      [ 7] cfo_negative_while_pat_positive
  RED-FLAG SCORE           : 90 / 100
  VERDICT                  : UNINVESTABLE

--- Padma Power Generation Ltd ---
  Audit opinion            : unqualified
  EPS (BDT)                : 4.75
  RP exposure / assets     : 2.86%
  RP exposure / net profit : 0.42x
  Impairment to erase PAT  : 237.50%
  Contingent / equity      : 30.00%
  Revenue growth           : 5.88%
  Receivable growth        : 33.33%
  Flags raised             : 4
      [ 6] emphasis_of_matter
      [ 6] auditor_changed_unexplained
      [ 7] contingent_over_25pc_equity
      [ 6] receivables_outgrowing_revenue
  RED-FLAG SCORE           : 25 / 100
  VERDICT                  : MONITOR

Headline comparison (Nirbhoy vs Shonali):
  Net profit  : 48.00 cr  vs  48.00 cr
  EPS         : 6.00      vs  6.00
  Score       : 0         vs  90
  Shonali PAT if 50% of RP book provided: -26.00 cr  (EPS -3.25)
\`\`\`

**পদ্মা পাওয়ারই অধ্যয়নের যোগ্য কেসটি।** এর মতামত অযোগ্যতাহীন। এটি লাভজনক। এটি প্যানেলভুক্ত প্রতিষ্ঠান দ্বারা নিরীক্ষিত। তবু এটি চারটি নরম পতাকায় ২৫ স্কোর করে — MONITOR: একটি বিষয়-নির্দেশক অনুচ্ছেদ, একটি ব্যাখ্যাহীন নিরীক্ষক পরিবর্তন, ইকুইটির ঠিক ৩০%-এ সম্ভাব্য দায়, এবং ৬% রাজস্ব প্রবৃদ্ধিতে ৩৩% প্রাপ্য প্রবৃদ্ধি।

**এদের একটিও একা অযোগ্যতা প্রমাণ করে না। একসঙ্গে এরা এমন একটি কোম্পানির বর্ণনা দেয় যে চাপে আছে কিন্তু এখনো তা স্বীকার করতে বাধ্য হয়নি।** স্কোরারটির কাজ এটাই: স্পষ্ট বিপর্যয় ধরা নয় — সোনালি নিজেই নিজের ঘোষণা দেয় — বরং যে কোম্পানিটি এখনো ঠিকঠাক দেখাচ্ছে তার গায়ে একটি সংখ্যা বসানো।

একই অবজেক্ট পরপর তিন বছরের বার্ষিক প্রতিবেদনে চালান। \`score\`-এর প্রবণতা যেকোনো এক বছরের মানের চেয়ে অনেক বেশি মূল্যবান।`,
    },

    mistakes: {
      en: `1. **Reading the chairman's statement first.** It is unaudited advocacy and it anchors your judgement before you have any. Read it last, or not at all.
2. **Treating an emphasis-of-matter paragraph as a qualification.** It is not — the opinion remains unqualified. But treating it as *nothing* is the larger error. It is the auditor pointing at a note he could not disagree with but wanted you to see.
3. **Missing the going-concern section because you were looking for the word "qualified".** A going-concern paragraph can appear under an unqualified opinion. It is a separate heading under BSA 570 and it is the single most serious sentence in the document.
4. **Assuming a clean opinion means the numbers are conservative.** An unqualified opinion means the accounts are free of *material* misstatement within a *materiality threshold the auditor set*. It is a floor, not an endorsement. Chapter 1 made the same point about BSEC and IPO approval.
5. **Reading one year in isolation.** A modified opinion followed by an auditor change followed by a clean opinion is a worse sequence than three consecutive modified opinions. Read three years of auditor reports together.
6. **Ignoring the related-party note because the amounts look "normal".** Compare it to *net profit*, not to total assets alone. A related-party balance of three times annual earnings is not normal at any asset size.
7. **Treating contingent liabilities as hypothetical.** Disputed VAT and tax demands in Bangladesh are settled adversely often enough that a 100% discount is unjustified. Model at least a partial crystallisation against equity.
8. **Believing the directors' report's growth percentages.** Trace every one to an audited line. Growth measured against a restated or differently-defined base is the most common unaudited liberty taken.
9. **Skipping the accounting-policy note on revenue recognition.** Under IFRS 15 as adopted, when a company recognises revenue is a policy choice within limits. Two companies in the same sector can look very different for reasons that are entirely presentational.
10. **Assuming a Big-Four-affiliated auditor guarantees quality.** It raises the base rate. It does not eliminate the risk, and Bangladesh has FRC enforcement actions on record involving well-known firms.`,
      bn: `১. **চেয়ারম্যানের বক্তব্য আগে পড়া।** এটি অনিরীক্ষিত ওকালতি এবং নিজস্ব বিচার তৈরির আগেই আপনাকে নোঙর করে ফেলে। শেষে পড়ুন, বা একদমই নয়।
২. **বিষয়-নির্দেশক অনুচ্ছেদকে মতামত পরিবর্তন ভাবা।** এটি নয় — মতামত অযোগ্যতাহীনই থাকে। কিন্তু একে *কিছুই নয়* ভাবা বড় ভুল। এটি নিরীক্ষকের এমন এক টীকার দিকে আঙুল তোলা যার সঙ্গে তিনি দ্বিমত করতে পারেননি কিন্তু চেয়েছেন আপনি দেখুন।
৩. **"শর্তযুক্ত" শব্দ খুঁজতে গিয়ে চলমানতা অংশটি হারিয়ে ফেলা।** চলমানতা অনুচ্ছেদ অযোগ্যতাহীন মতামতের অধীনেও আসতে পারে। BSA 570 অনুযায়ী এটি একটি পৃথক শিরোনাম এবং এটিই দলিলের সবচেয়ে গুরুতর বাক্য।
৪. **পরিচ্ছন্ন মতামত মানে সংখ্যাগুলো রক্ষণশীল — এমন ধরে নেওয়া।** অযোগ্যতাহীন মতামতের অর্থ, *নিরীক্ষকের নির্ধারিত বস্তুগততার সীমার* মধ্যে হিসাবগুলো *বস্তুগত* ভুল উপস্থাপনমুক্ত। এটি একটি মেঝে, কোনো সুপারিশ নয়। অধ্যায় ১ বিএসইসি ও আইপিও অনুমোদন সম্পর্কে একই কথা বলেছিল।
৫. **এক বছর বিচ্ছিন্নভাবে পড়া।** পরিবর্তিত মতামত, তারপর নিরীক্ষক পরিবর্তন, তারপর পরিচ্ছন্ন মতামত — এই ধারাটি টানা তিন বছরের পরিবর্তিত মতামতের চেয়েও খারাপ। তিন বছরের নিরীক্ষক প্রতিবেদন একসঙ্গে পড়ুন।
৬. **অঙ্কগুলো "স্বাভাবিক" দেখাচ্ছে বলে সম্পর্কিত-পক্ষ টীকা উপেক্ষা করা।** কেবল মোট সম্পদের সঙ্গে নয়, *নিট মুনাফার* সঙ্গে তুলনা করুন। বার্ষিক আয়ের তিন গুণ সম্পর্কিত-পক্ষ স্থিতি কোনো সম্পদ-আকারেই স্বাভাবিক নয়।
৭. **সম্ভাব্য দায়কে কাল্পনিক ভাবা।** বাংলাদেশে বিতর্কিত ভ্যাট ও কর দাবি যথেষ্ট ঘনঘন বিরূপভাবে নিষ্পত্তি হয় যে ১০০% ছাড় দেওয়া অযৌক্তিক। ইকুইটির বিপরীতে অন্তত আংশিক বাস্তবায়নের হিসাব করুন।
৮. **পরিচালকদের প্রতিবেদনের প্রবৃদ্ধির শতাংশ বিশ্বাস করা।** প্রতিটিকে একটি নিরীক্ষিত লাইনে মেলান। পুনঃবিবৃত বা ভিন্নভাবে সংজ্ঞায়িত ভিত্তির বিপরীতে মাপা প্রবৃদ্ধিই সবচেয়ে সাধারণ অনিরীক্ষিত স্বাধীনতা।
৯. **রাজস্ব স্বীকৃতির হিসাবনীতি টীকা এড়িয়ে যাওয়া।** গৃহীত IFRS 15 অনুযায়ী কোম্পানি কখন রাজস্ব স্বীকৃতি দেবে তা সীমার মধ্যে একটি নীতিগত পছন্দ। একই খাতের দুটি কোম্পানি সম্পূর্ণ উপস্থাপনগত কারণে খুব আলাদা দেখাতে পারে।
১০. **বিগ-ফোর সংশ্লিষ্ট নিরীক্ষক মানেই মানের নিশ্চয়তা ভাবা।** এটি ভিত্তি-হার বাড়ায়। ঝুঁকি দূর করে না, এবং বাংলাদেশে সুপরিচিত প্রতিষ্ঠান জড়িত FRC প্রয়োগ ব্যবস্থার নজির রয়েছে।`,
    },

    tips: {
      en: `- **Download the PDF, do not read the summary.** Annual reports are on the company's website and on dsebd.org under the company page. News-portal summaries drop exactly the sections this chapter says matter.
- **Search the PDF for four strings before reading anything: "except for", "going concern", "emphasis", "related part".** Four searches, under a minute, and they cover 58 of the 100 red-flag points.
- **Keep three years of the same company open side by side.** Almost every finding in this chapter is a *trend*, not a level. A related-party balance of BDT 148 crore means little; BDT 40 → 90 → 148 crore over three years means everything.
- **Check the auditor's name against the FRC panel and against the prior year.** Both checks are free. An unexplained change is worth more of your attention than any quarterly result.
- **Convert every contingent liability into a percentage of equity, always.** The absolute number is designed to be unmemorable. The percentage is not.
- **When you find a related-party receivable, compute $I_{breakeven}$ immediately.** If a plausible impairment erases a year of profit, you are not holding an equity in a business — you are holding a bet on a family's willingness to repay itself.
- **Read the notes to the financial statements of one company you already own, tonight.** Most investors have never done this even once for a position they hold. The gap between the front-half narrative and the notes is where this chapter earns its place.`,
      bn: `- **পিডিএফ ডাউনলোড করুন, সারসংক্ষেপ পড়বেন না।** বার্ষিক প্রতিবেদন কোম্পানির ওয়েবসাইটে এবং dsebd.org-এ কোম্পানির পাতায় থাকে। সংবাদ-পোর্টালের সারসংক্ষেপ ঠিক সেই অংশগুলোই বাদ দেয় যেগুলো এই অধ্যায় গুরুত্বপূর্ণ বলছে।
- **কিছু পড়ার আগে পিডিএফে চারটি শব্দগুচ্ছ খুঁজুন: "except for", "going concern", "emphasis", "related part"।** চারটি অনুসন্ধান, এক মিনিটেরও কম, এবং এগুলো ১০০ লাল-পতাকা পয়েন্টের ৫৮ আচ্ছাদন করে।
- **একই কোম্পানির তিন বছর পাশাপাশি খুলে রাখুন।** এই অধ্যায়ের প্রায় প্রতিটি আবিষ্কারই একটি *প্রবণতা*, কোনো স্তর নয়। ১৪৮ কোটি টাকার সম্পর্কিত-পক্ষ স্থিতি সামান্যই বোঝায়; তিন বছরে ৪০ → ৯০ → ১৪৮ কোটি সবকিছু বোঝায়।
- **নিরীক্ষকের নাম FRC প্যানেল ও আগের বছরের সঙ্গে মিলিয়ে দেখুন।** দুটি যাচাইই বিনামূল্যে। ব্যাখ্যাহীন পরিবর্তন যেকোনো ত্রৈমাসিক ফলাফলের চেয়ে বেশি মনোযোগের দাবি রাখে।
- **প্রতিটি সম্ভাব্য দায়কে সবসময় ইকুইটির শতাংশে রূপান্তর করুন।** পরম সংখ্যাটি মনে না থাকার মতো করেই নকশা করা। শতাংশটি নয়।
- **সম্পর্কিত-পক্ষ প্রাপ্য পেলেই সঙ্গে সঙ্গে $I_{breakeven}$ গণনা করুন।** যদি একটি বিশ্বাসযোগ্য অবচয় এক বছরের মুনাফা মুছে দেয়, তবে আপনি কোনো ব্যবসার ইকুইটি ধরে নেই — আপনি একটি পরিবারের নিজেকে শোধ করার ইচ্ছার ওপর বাজি ধরে আছেন।
- **আপনার ইতিমধ্যে মালিকানাধীন একটি কোম্পানির আর্থিক বিবরণীর টীকা আজ রাতেই পড়ুন।** বেশিরভাগ বিনিয়োগকারী নিজেদের ধারণকৃত পজিশনের জন্যও এটি একবারও করেননি। সামনের অর্ধেকের আখ্যান ও টীকার মধ্যকার ব্যবধানেই এই অধ্যায় তার জায়গা অর্জন করে।`,
    },

    exercises: {
      en: `1. Download the latest annual report of any DSE-listed textile company. Locate the Independent Auditor's Report. Write down, verbatim, the first sentence of the Opinion paragraph. Classify it as unqualified, qualified, adverse or disclaimer, and state which word decided it.
2. For the same company, find the related-party transactions note. Total all receivables and loans due *from* related parties. Compute $RPE_{assets}$ and $RPE_{profit}$. Then compute $I_{breakeven}$. If that number is below 50%, write one sentence explaining what the reported EPS actually depends on.
3. Take any DSE-listed company with a modified opinion in the last three years. Read the three consecutive auditor's reports in order. Did the auditor change? Was the change explained? Write four sentences describing the sequence.
4. Find a DSE annual report containing a Material Uncertainty Related to Going Concern section. Then look up the share price on the day after the report was published and 60 trading days later. Did the market react? Report both numbers.
5. Take any company's directors' report. Extract every quantitative claim it makes. Trace each to an audited statement line or a note. Tabulate: claim, audited source, matches / does not match / untraceable.
6. Build the red-flag scorer in a spreadsheet. Score three companies you currently hold or are considering. Do not adjust the weights to get an answer you like — if you want to change a weight, change it *before* you score, and write down why.
7. For any two companies in the same sector with similar reported EPS, compute contingent liabilities as a percentage of equity for both. Which one is actually more leveraged than its balance sheet says?
8. Find one DSE company where trade receivables grew more than twice as fast as revenue in the most recent year. Read the receivables ageing note. What percentage is over 180 days? What provision has been made against it?`,
      bn: `১. যেকোনো ডিএসই-তালিকাভুক্ত বস্ত্র কোম্পানির সর্বশেষ বার্ষিক প্রতিবেদন ডাউনলোড করুন। স্বাধীন নিরীক্ষকের প্রতিবেদনটি খুঁজে বের করুন। মতামত অনুচ্ছেদের প্রথম বাক্যটি হুবহু লিখুন। একে অযোগ্যতাহীন, শর্তযুক্ত, বিরূপ বা মতামত-প্রত্যাখ্যান হিসেবে শ্রেণিবদ্ধ করুন, এবং কোন শব্দটি সিদ্ধান্ত নির্ধারণ করল তা বলুন।
২. একই কোম্পানির সম্পর্কিত-পক্ষ লেনদেন টীকা খুঁজুন। সম্পর্কিত পক্ষের কাছ *থেকে* পাওনা সব প্রাপ্য ও ঋণ যোগ করুন। $RPE_{assets}$ ও $RPE_{profit}$ গণনা করুন। তারপর $I_{breakeven}$ গণনা করুন। সংখ্যাটি ৫০%-এর নিচে হলে এক বাক্যে লিখুন ঘোষিত EPS আসলে কীসের ওপর নির্ভরশীল।
৩. গত তিন বছরে পরিবর্তিত মতামত পাওয়া যেকোনো ডিএসই কোম্পানি নিন। পরপর তিনটি নিরীক্ষক প্রতিবেদন ক্রমানুসারে পড়ুন। নিরীক্ষক কি বদলেছেন? পরিবর্তনটি কি ব্যাখ্যা করা হয়েছিল? ধারাটি বর্ণনা করে চার বাক্য লিখুন।
৪. চলমানতা সম্পর্কিত বস্তুগত অনিশ্চয়তা অংশযুক্ত একটি ডিএসই বার্ষিক প্রতিবেদন খুঁজুন। তারপর প্রতিবেদন প্রকাশের পরদিন এবং ৬০ লেনদেন দিবস পরের শেয়ারমূল্য দেখুন। বাজার কি প্রতিক্রিয়া দেখিয়েছিল? দুটি সংখ্যাই জানান।
৫. যেকোনো কোম্পানির পরিচালকদের প্রতিবেদন নিন। এর প্রতিটি পরিমাণগত দাবি বের করুন। প্রতিটিকে একটি নিরীক্ষিত বিবরণী-লাইন বা টীকায় মেলান। ছক করুন: দাবি, নিরীক্ষিত উৎস, মেলে / মেলে না / মেলানো অসম্ভব।
৬. স্প্রেডশিটে লাল-পতাকা স্কোরারটি বানান। আপনি এখন ধারণ করছেন বা বিবেচনা করছেন এমন তিনটি কোম্পানির স্কোর করুন। পছন্দসই উত্তর পেতে ভার বদলাবেন না — ভার বদলাতে চাইলে স্কোর করার *আগে* বদলান, এবং কেন তা লিখে রাখুন।
৭. একই খাতের অনুরূপ ঘোষিত EPS-এর যেকোনো দুটি কোম্পানির জন্য ইকুইটির শতাংশ হিসেবে সম্ভাব্য দায় গণনা করুন। কোনটি আসলে তার স্থিতিপত্র যা বলছে তার চেয়ে বেশি ঋণভারগ্রস্ত?
৮. এমন একটি ডিএসই কোম্পানি খুঁজুন যার সর্বশেষ বছরে বাণিজ্যিক প্রাপ্য রাজস্বের দ্বিগুণেরও বেশি দ্রুত বেড়েছে। প্রাপ্যের বয়সভিত্তিক টীকা পড়ুন। কত শতাংশ ১৮০ দিনের বেশি পুরোনো? এর বিপরীতে কী সঞ্চিতি রাখা হয়েছে?`,
    },

    summary: {
      en: `- The annual report is two documents: an **unaudited front half** (chairman's statement, directors' report, MD&A) written to persuade, and an **audited back half** (auditor's report, statements, notes) that someone signed a professional licence against.
- **The reading order is the method.** Auditor's report first, then the notes, then cash flow, then the face of the statements, and the directors' report last and adversarially. Reading front to back anchors you to management's framing before you have your own.
- Four opinions: **unqualified** (proceed), **qualified** — "except for" (quantify it, assume worse), **adverse** — material *and pervasive* (no analysis to do), **disclaimer** (nobody knows what is in this company). The dividing word between qualified and adverse is **pervasive**.
- **Emphasis of matter is not a modification** — the opinion stays unqualified. A **Material Uncertainty Related to Going Concern** section under BSA 570 is separate from both, appears in DSE reports every year, and is routinely ignored by the market.
- The **FRC**, operational since 2017 under the Financial Reporting Act 2015, replaced effective self-regulation by ICAB. Check the auditor against the panel, and read two years of auditor reports together — **an unexplained auditor change carries more information than the successor's clean opinion.**
- **The related-party note is the highest-value page in a Bangladeshi annual report**, because most listed companies sit inside a family group and cash moves to unlisted sisters as receivables that never settle. Measure it against net profit, not just assets: $RPE_{profit}$ and $I_{breakeven} = \\text{PAT} / \\text{RP Exposure} \\times 100$.
- **Contingent liabilities are disclosed, not recognised.** Convert them to a percentage of equity. BDT 190 crore against BDT 300 crore of equity is a conditional claim on two-thirds of the company.
- The worked example: two companies, both **BDT 48 crore profit, both EPS 6.00, both P/E 10.0** — scoring **0 versus 90**. A **32.43%** impairment of Shonali's uncertified related-party book erases its entire reported year. Every input was published and free.
- **Discipline established:** read the audit opinion and the related-party note before you look at EPS, never after. Once a P/E of 10.0 is in your head you will spend the rest of the report looking for reasons to keep it. The ninety seconds spent on the auditor's report eliminate more bad positions than any valuation model in Part II will.`,
      bn: `- বার্ষিক প্রতিবেদন আসলে দুটি দলিল: রাজি করানোর জন্য লেখা একটি **অনিরীক্ষিত সামনের অর্ধেক** (চেয়ারম্যানের বক্তব্য, পরিচালকদের প্রতিবেদন, MD&A), এবং একটি **নিরীক্ষিত পেছনের অর্ধেক** (নিরীক্ষকের প্রতিবেদন, বিবরণী, টীকা) যার বিপরীতে কেউ তাঁর পেশাগত সনদ বাজি রেখেছেন।
- **পড়ার ক্রমটাই পদ্ধতি।** নিরীক্ষকের প্রতিবেদন প্রথমে, তারপর টীকা, তারপর নগদ প্রবাহ, তারপর বিবরণীর মুখ, এবং পরিচালকদের প্রতিবেদন সবার শেষে ও বিরুদ্ধভাবে। সামনে থেকে পেছনে পড়লে নিজস্ব মত তৈরির আগেই আপনি ব্যবস্থাপনার কাঠামোয় নোঙর করে ফেলেন।
- চারটি মতামত: **অযোগ্যতাহীন** (এগোন), **শর্তযুক্ত** — "…ব্যতীত" (পরিমাপ করুন, আরও খারাপ ধরে নিন), **বিরূপ** — বস্তুগত *এবং ব্যাপক* (বিশ্লেষণের কিছু নেই), **মতামত-প্রত্যাখ্যান** (এই কোম্পানির ভেতরে কী আছে কেউ জানে না)। শর্তযুক্ত ও বিরূপের বিভাজক শব্দ **ব্যাপক**।
- **বিষয়-নির্দেশক অনুচ্ছেদ কোনো মতামত পরিবর্তন নয়** — মতামত অযোগ্যতাহীনই থাকে। BSA 570 অনুযায়ী **চলমানতা সম্পর্কিত বস্তুগত অনিশ্চয়তা** অংশটি দুটির থেকেই আলাদা, প্রতি বছর ডিএসই প্রতিবেদনে দেখা যায়, এবং বাজার নিয়মিত তা উপেক্ষা করে।
- ফাইন্যান্সিয়াল রিপোর্টিং আইন ২০১৫-র অধীনে ২০১৭ থেকে কার্যকর **FRC** ICAB-র কার্যকর স্ব-নিয়ন্ত্রণের স্থান নিয়েছে। নিরীক্ষককে প্যানেলের সঙ্গে মিলিয়ে দেখুন, এবং দুই বছরের নিরীক্ষক প্রতিবেদন একসঙ্গে পড়ুন — **ব্যাখ্যাহীন নিরীক্ষক পরিবর্তন উত্তরসূরির পরিচ্ছন্ন মতামতের চেয়ে বেশি তথ্য বহন করে।**
- **বাংলাদেশি বার্ষিক প্রতিবেদনে সম্পর্কিত-পক্ষ টীকাই সর্বোচ্চ মূল্যের পৃষ্ঠা**, কারণ বেশিরভাগ তালিকাভুক্ত কোম্পানি একটি পারিবারিক গ্রুপের ভেতরে বসে এবং নগদ কখনো আদায় না হওয়া প্রাপ্য হিসেবে অতালিকাভুক্ত সহোদরদের কাছে চলে যায়। কেবল সম্পদ নয়, নিট মুনাফার বিপরীতে মাপুন: $RPE_{profit}$ এবং $I_{breakeven} = \\text{PAT} / \\text{RP এক্সপোজার} \\times 100$।
- **সম্ভাব্য দায় প্রকাশিত হয়, স্বীকৃত হয় না।** এগুলোকে ইকুইটির শতাংশে রূপান্তর করুন। ৩০০ কোটি টাকা ইকুইটির বিপরীতে ১৯০ কোটি টাকা মানে কোম্পানির দুই-তৃতীয়াংশের ওপর একটি শর্তসাপেক্ষ দাবি।
- কার্যকরী উদাহরণ: দুটি কোম্পানি, দুটিরই **৪৮ কোটি টাকা মুনাফা, দুটিরই EPS ৬.০০, দুটিরই P/E ১০.০** — স্কোর **০ বনাম ৯০**। সোনালির অপ্রত্যয়িত সম্পর্কিত-পক্ষ স্থিতির **৩২.৪৩%** অবচয় তার গোটা ঘোষিত বছর মুছে দেয়। প্রতিটি উপাত্ত প্রকাশিত ও বিনামূল্যে ছিল।
- **প্রতিষ্ঠিত শৃঙ্খলা:** EPS দেখার আগে নিরীক্ষা মতামত ও সম্পর্কিত-পক্ষ টীকা পড়ুন, কখনো পরে নয়। ১০.০ P/E একবার মাথায় ঢুকে গেলে বাকি প্রতিবেদনটুকু আপনি তা ধরে রাখার কারণ খুঁজেই কাটাবেন। নিরীক্ষকের প্রতিবেদনে ব্যয় করা নব্বই সেকেন্ড পর্ব ২-এর যেকোনো মূল্যায়ন মডেলের চেয়ে বেশি খারাপ পজিশন বাদ দেয়।`,
    },
  },

  interview: [
    {
      q: {
        en: 'What is the difference between a qualified opinion and an adverse opinion?',
        bn: 'শর্তযুক্ত মতামত ও বিরূপ মতামতের মধ্যে পার্থক্য কী?',
      },
      a: {
        en: 'Both involve material misstatement or inability to obtain evidence. The distinguishing test is **pervasiveness**. A qualified opinion means the issue is material but confined to identifiable items — the auditor says "except for" that, the accounts are fair. An adverse opinion means the misstatement is material *and pervasive*, so the financial statements as a whole do not present fairly. Practically: a qualification is something to quantify; an adverse opinion ends the analysis.',
        bn: 'দুটিতেই বস্তুগত ভুল উপস্থাপন বা প্রমাণ সংগ্রহে অক্ষমতা জড়িত। বিভাজক পরীক্ষাটি হলো **ব্যাপকতা**। শর্তযুক্ত মতামত মানে বিষয়টি বস্তুগত কিন্তু চিহ্নিতযোগ্য কিছু আইটেমে সীমাবদ্ধ — নিরীক্ষক বলছেন ঐটি "ব্যতীত" হিসাবগুলো যথাযথ। বিরূপ মতামত মানে ভুল উপস্থাপন বস্তুগত *এবং ব্যাপক*, তাই সামগ্রিকভাবে আর্থিক বিবরণী যথাযথ উপস্থাপন করে না। ব্যবহারিকভাবে: শর্ত পরিমাপ করার বিষয়; বিরূপ মতামত বিশ্লেষণটাই শেষ করে দেয়।',
      },
    },
    {
      q: {
        en: 'A company has an unqualified opinion but a going-concern paragraph. Is that a clean audit?',
        bn: 'একটি কোম্পানির মতামত অযোগ্যতাহীন কিন্তু চলমানতা অনুচ্ছেদ আছে। এটি কি পরিচ্ছন্ন নিরীক্ষা?',
      },
      a: {
        en: 'Technically yes, substantively no. Under BSA 570 a Material Uncertainty Related to Going Concern section is a separate heading, not a modification — the auditor agrees the accounts are fairly stated *on a going-concern basis*, while telling you that basis is itself uncertain. It means the auditor believes the entity may not survive twelve months. It is the most serious sentence available to an auditor short of modifying the opinion, and on the DSE it is routinely ignored by the market.',
        bn: 'কারিগরিভাবে হ্যাঁ, বস্তুগতভাবে না। BSA 570 অনুযায়ী চলমানতা সম্পর্কিত বস্তুগত অনিশ্চয়তা অংশটি একটি পৃথক শিরোনাম, কোনো মতামত পরিবর্তন নয় — নিরীক্ষক একমত যে হিসাবগুলো *চলমানতার ভিত্তিতে* যথাযথভাবে বিবৃত, একই সঙ্গে বলছেন ঐ ভিত্তিটাই অনিশ্চিত। এর অর্থ নিরীক্ষক মনে করছেন প্রতিষ্ঠানটি বারো মাস নাও টিকতে পারে। মতামত পরিবর্তন না করে একজন নিরীক্ষকের পক্ষে এটিই সবচেয়ে গুরুতর বাক্য, এবং ডিএসই-তে বাজার নিয়মিত এটি উপেক্ষা করে।',
      },
    },
    {
      q: {
        en: 'Why is the related-party transactions note especially important in Bangladesh?',
        bn: 'বাংলাদেশে সম্পর্কিত-পক্ষ লেনদেন টীকা কেন বিশেষভাবে গুরুত্বপূর্ণ?',
      },
      a: {
        en: 'Because most DSE-listed companies are one vehicle inside a family group whose other businesses are unlisted. IAS 24 requires disclosure of transactions with those entities, and the recurring pattern is a receivable from a sister concern that grows every year and never settles — revenue and profit are booked in the listed company while cash effectively leaves it. Interest-free advances, above-market purchases from related suppliers, and guarantees for sister-company borrowings do the same thing through different lines. The test is to express the balance as a multiple of net profit and compute what impairment percentage erases a year of earnings.',
        bn: 'কারণ ডিএসই-তে তালিকাভুক্ত বেশিরভাগ কোম্পানি এমন একটি পারিবারিক গ্রুপের একটি বাহন যার বাকি ব্যবসাগুলো অতালিকাভুক্ত। IAS 24 ঐ সত্তাগুলোর সঙ্গে লেনদেন প্রকাশ বাধ্যতামূলক করে, এবং বারবার দেখা প্যাটার্নটি হলো সহোদর প্রতিষ্ঠানের কাছ থেকে এমন প্রাপ্য যা প্রতি বছর বাড়ে ও কখনো আদায় হয় না — রাজস্ব ও মুনাফা তালিকাভুক্ত কোম্পানিতে নথিভুক্ত হয় অথচ নগদ কার্যত বেরিয়ে যায়। সুদবিহীন অগ্রিম, সম্পর্কিত সরবরাহকারীর কাছ থেকে বাজারদরের ওপরে ক্রয়, এবং সহোদর কোম্পানির ঋণের গ্যারান্টি ভিন্ন লাইনে একই কাজ করে। পরীক্ষাটি হলো স্থিতিটিকে নিট মুনাফার গুণিতকে প্রকাশ করা এবং কত শতাংশ অবচয় এক বছরের আয় মুছে দেয় তা গণনা করা।',
      },
    },
    {
      q: {
        en: 'What is the FRC and what problem was it created to solve?',
        bn: 'FRC কী এবং কোন সমস্যার সমাধানে এটি তৈরি হয়েছিল?',
      },
      a: {
        en: 'The Financial Reporting Council, established under the Financial Reporting Act 2015 and operational from 2017, oversees financial reporting and audit quality for public interest entities in Bangladesh. Before it, oversight rested effectively with ICAB — the professional body whose own members were being supervised, the same self-regulatory conflict that existed at the exchanges before demutualization. Practically, the FRC maintains a panel of firms eligible to audit public interest entities, so whether a listed company\'s auditor is on that panel is a checkable, published fact about a board decision.',
        bn: 'ফাইন্যান্সিয়াল রিপোর্টিং কাউন্সিল, ফাইন্যান্সিয়াল রিপোর্টিং আইন ২০১৫-র অধীনে প্রতিষ্ঠিত ও ২০১৭ থেকে কার্যকর, বাংলাদেশে জনস্বার্থ সংস্থার আর্থিক প্রতিবেদন ও নিরীক্ষার মান তদারক করে। এর আগে তদারকি কার্যত ICAB-র হাতে ছিল — সেই পেশাগত সংস্থা যার নিজের সদস্যদেরই তত্ত্বাবধান করা হচ্ছিল, ডিমিউচুয়ালাইজেশনের আগে এক্সচেঞ্জে যে একই স্ব-নিয়ন্ত্রণ সংঘাত ছিল। ব্যবহারিকভাবে FRC জনস্বার্থ সংস্থার নিরীক্ষার জন্য যোগ্য প্রতিষ্ঠানের একটি প্যানেল রাখে, ফলে একটি তালিকাভুক্ত কোম্পানির নিরীক্ষক ঐ প্যানেলে আছেন কি না তা পর্ষদের একটি সিদ্ধান্ত সম্পর্কে যাচাইযোগ্য, প্রকাশিত তথ্য।',
      },
    },
    {
      q: {
        en: 'Contingent liabilities are not on the balance sheet. Why do you care?',
        bn: 'সম্ভাব্য দায় স্থিতিপত্রে থাকে না। তাহলে আপনি কেন এটি নিয়ে ভাবেন?',
      },
      a: {
        en: 'Because IAS 37 keeps them off the balance sheet only until the outflow becomes probable and measurable — the accounting treatment reflects uncertainty, not absence. On the DSE the typical contents are bank guarantees for group companies, letters of credit, and disputed VAT and income-tax demands, and disputed tax demands in Bangladesh are settled adversely often enough that discounting them fully is not defensible. The working measure is contingent liabilities as a percentage of shareholders\' equity: at 63%, the company does not have the equity its balance sheet reports, it has a conditional claim on two-thirds of it.',
        bn: 'কারণ IAS 37 এগুলোকে স্থিতিপত্রের বাইরে রাখে কেবল ততক্ষণ, যতক্ষণ না বহিঃপ্রবাহ সম্ভাব্য ও পরিমাপযোগ্য হয় — হিসাবপদ্ধতিটি অনিশ্চয়তার প্রতিফলন, অনুপস্থিতির নয়। ডিএসই-তে সাধারণ বিষয়বস্তু হলো গ্রুপ কোম্পানির জন্য ব্যাংক গ্যারান্টি, ঋণপত্র, এবং বিতর্কিত ভ্যাট ও আয়কর দাবি; আর বাংলাদেশে বিতর্কিত কর দাবি যথেষ্ট ঘনঘন বিরূপভাবে নিষ্পত্তি হয় যে এগুলো সম্পূর্ণ বাদ দেওয়া সমর্থনযোগ্য নয়। কার্যকর পরিমাপ হলো শেয়ারহোল্ডারদের ইকুইটির শতাংশ হিসেবে সম্ভাব্য দায়: ৬৩%-এ কোম্পানির স্থিতিপত্র যে ইকুইটি দেখাচ্ছে তা তার নেই, বরং তার দুই-তৃতীয়াংশের ওপর একটি শর্তসাপেক্ষ দাবি আছে।',
      },
    },
    {
      q: {
        en: 'Two companies report identical EPS. What would you look at first to distinguish them?',
        bn: 'দুটি কোম্পানি অভিন্ন EPS ঘোষণা করেছে। এদের পৃথক করতে আপনি প্রথমে কী দেখবেন?',
      },
      a: {
        en: 'The auditor\'s report, not the income statement. EPS is the most managed number in the document and it separates nothing on its own — the worked example in this chapter has two companies at BDT 6.00 EPS and a P/E of 10.0 where one scores 0 on a red-flag scale and the other 90. The order is: opinion paragraph, going-concern heading, related-party note, contingent liabilities, then the receivables line against revenue growth, then operating cash flow against reported profit. By the time you reach the income statement you already know whether its EPS means anything.',
        bn: 'নিরীক্ষকের প্রতিবেদন, আয় বিবরণী নয়। EPS দলিলের সবচেয়ে বেশি ব্যবস্থাপিত সংখ্যা এবং একা এটি কিছুই পৃথক করে না — এই অধ্যায়ের কার্যকরী উদাহরণে দুটি কোম্পানির EPS ৬.০০ ও P/E ১০.০, অথচ লাল-পতাকা স্কেলে একটির স্কোর ০ এবং অন্যটির ৯০। ক্রমটি হলো: মতামত অনুচ্ছেদ, চলমানতা শিরোনাম, সম্পর্কিত-পক্ষ টীকা, সম্ভাব্য দায়, তারপর রাজস্ব প্রবৃদ্ধির বিপরীতে প্রাপ্যের লাইন, তারপর ঘোষিত মুনাফার বিপরীতে পরিচালন নগদ প্রবাহ। আয় বিবরণীতে পৌঁছানোর আগেই আপনি জানেন তার EPS-এর কোনো অর্থ আছে কি না।',
      },
    },
  ],

  quiz: [
    {
      q: {
        en: 'Which section of the annual report should be read first?',
        bn: 'বার্ষিক প্রতিবেদনের কোন অংশটি সবার আগে পড়া উচিত?',
      },
      options: {
        en: ["Chairman's statement", "Independent Auditor's Report", 'Income statement', 'MD&A'],
        bn: ['চেয়ারম্যানের বক্তব্য', 'স্বাধীন নিরীক্ষকের প্রতিবেদন', 'আয় বিবরণী', 'MD&A'],
      },
      answer: 1,
    },
    {
      q: {
        en: 'The word that distinguishes an adverse opinion from a qualified opinion is:',
        bn: 'যে শব্দটি বিরূপ মতামতকে শর্তযুক্ত মতামত থেকে পৃথক করে:',
      },
      options: {
        en: ['Material', 'Pervasive', 'Significant', 'Fundamental'],
        bn: ['বস্তুগত', 'ব্যাপক', 'উল্লেখযোগ্য', 'মৌলিক'],
      },
      answer: 1,
    },
    {
      q: {
        en: 'An Emphasis of Matter paragraph means:',
        bn: 'একটি বিষয়-নির্দেশক অনুচ্ছেদের অর্থ:',
      },
      options: {
        en: [
          'The opinion has been qualified',
          'The opinion remains unqualified but the auditor is directing you to a disclosed note',
          'The auditor has resigned',
          'The company is in liquidation',
        ],
        bn: [
          'মতামত শর্তযুক্ত হয়েছে',
          'মতামত অযোগ্যতাহীনই আছে কিন্তু নিরীক্ষক আপনাকে একটি প্রকাশিত টীকার দিকে পাঠাচ্ছেন',
          'নিরীক্ষক পদত্যাগ করেছেন',
          'কোম্পানিটি অবসায়নে আছে',
        ],
      },
      answer: 1,
    },
    {
      q: {
        en: 'Which standard governs the going-concern reporting requirement?',
        bn: 'চলমানতা প্রতিবেদনের বাধ্যবাধকতা কোন মান নিয়ন্ত্রণ করে?',
      },
      options: { en: ['IAS 24', 'IAS 37', 'BSA 570', 'IFRS 15'], bn: ['IAS 24', 'IAS 37', 'BSA 570', 'IFRS 15'] },
      answer: 2,
    },
    {
      q: {
        en: 'Related-party transaction disclosure is required by:',
        bn: 'সম্পর্কিত-পক্ষ লেনদেন প্রকাশ বাধ্যতামূলক করে:',
      },
      options: { en: ['IAS 16', 'IAS 24', 'IAS 37', 'IFRS 9'], bn: ['IAS 16', 'IAS 24', 'IAS 37', 'IFRS 9'] },
      answer: 1,
    },
    {
      q: {
        en: 'The Financial Reporting Council of Bangladesh was established under an Act of:',
        bn: 'বাংলাদেশ ফাইন্যান্সিয়াল রিপোর্টিং কাউন্সিল প্রতিষ্ঠিত হয় কোন সালের আইনে?',
      },
      options: { en: ['1993', '2013', '2015', '2020'], bn: ['১৯৯৩', '২০১৩', '২০১৫', '২০২০'] },
      answer: 2,
    },
    {
      q: {
        en: 'A company has BDT 148 crore of related-party receivables and BDT 48 crore of net profit. What impairment percentage erases the entire year of profit?',
        bn: 'একটি কোম্পানির ১৪৮ কোটি টাকা সম্পর্কিত-পক্ষ প্রাপ্য ও ৪৮ কোটি টাকা নিট মুনাফা। কত শতাংশ অবচয় গোটা বছরের মুনাফা মুছে দেয়?',
      },
      options: {
        en: ['16.26%', '32.43%', '50.00%', '308.33%'],
        bn: ['১৬.২৬%', '৩২.৪৩%', '৫০.০০%', '৩০৮.৩৩%'],
      },
      answer: 1,
    },
    {
      q: {
        en: 'Under IAS 37, a contingent liability is:',
        bn: 'IAS 37 অনুযায়ী সম্ভাব্য দায় হলো:',
      },
      options: {
        en: [
          'Recognised on the balance sheet at fair value',
          'Disclosed in the notes but not recognised on the balance sheet',
          'Deducted from equity',
          'Reported only if it exceeds 25% of equity',
        ],
        bn: [
          'ন্যায্য মূল্যে স্থিতিপত্রে স্বীকৃত',
          'টীকায় প্রকাশিত কিন্তু স্থিতিপত্রে স্বীকৃত নয়',
          'ইকুইটি থেকে বিয়োজিত',
          'ইকুইটির ২৫% ছাড়ালেই কেবল প্রতিবেদিত',
        ],
      },
      answer: 1,
    },
    {
      q: {
        en: "In the chapter's red-flag scorer, which single flag carries the heaviest weight?",
        bn: 'অধ্যায়ের লাল-পতাকা স্কোরারে কোন একক পতাকা সবচেয়ে বেশি ভার বহন করে?',
      },
      options: {
        en: [
          'Contingent liabilities above 25% of equity',
          'Auditor not on the FRC panel',
          'Opinion not unqualified',
          'Operating cash flow negative while PAT positive',
        ],
        bn: [
          'ইকুইটির ২৫%-এর বেশি সম্ভাব্য দায়',
          'নিরীক্ষক FRC প্যানেলে নেই',
          'মতামত অযোগ্যতাহীন নয়',
          'PAT ধনাত্মক অথচ পরিচালন নগদ প্রবাহ ঋণাত্মক',
        ],
      },
      answer: 2,
    },
    {
      q: {
        en: 'The directors\' report claims revenue grew 18%, but the audited statements support only 5%. What is the correct conclusion?',
        bn: 'পরিচালকদের প্রতিবেদন দাবি করছে রাজস্ব ১৮% বেড়েছে, কিন্তু নিরীক্ষিত বিবরণী কেবল ৫% সমর্থন করে। সঠিক সিদ্ধান্ত কী?',
      },
      options: {
        en: [
          'The directors have better information, so use 18%',
          'Average the two and use 11.5%',
          'The audited figure governs; the directors\' report is unaudited narrative',
          'The discrepancy is immaterial and can be ignored',
        ],
        bn: [
          'পরিচালকদের কাছে ভালো তথ্য আছে, তাই ১৮% ব্যবহার করুন',
          'দুটির গড় নিয়ে ১১.৫% ব্যবহার করুন',
          'নিরীক্ষিত সংখ্যাই চূড়ান্ত; পরিচালকদের প্রতিবেদন অনিরীক্ষিত আখ্যান',
          'অসঙ্গতিটি গুরুত্বহীন, উপেক্ষা করা যায়',
        ],
      },
      answer: 2,
    },
  ],
};
