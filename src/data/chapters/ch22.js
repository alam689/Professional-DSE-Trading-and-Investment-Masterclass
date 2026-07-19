/**
 * Chapter 22 — Relative Valuation & Peer Comparison
 * Part II, Fundamental Analysis. Follows Ch 20 (Dividend) and Ch 21 (Intrinsic Value).
 */

export default {
  n: 22,
  tools: [],

  excelSheet: {
    filename: 'ch22-peer-comparison.xlsx',
    sheetName: 'Peer Comparison',
    cells: [
      { cell: 'A1', v: 'PHARMA PEER SET — RELATIVE VALUATION (BDT crore; price & EPS in BDT)' },

      { cell: 'A3', v: 'Company' }, { cell: 'B3', v: 'Price' }, { cell: 'C3', v: 'EPS' },
      { cell: 'D3', v: 'Shares (cr)' }, { cell: 'E3', v: 'Mkt Cap' }, { cell: 'F3', v: 'Net Debt' },
      { cell: 'G3', v: 'EV' }, { cell: 'H3', v: 'EBITDA' }, { cell: 'I3', v: 'P/E' },
      { cell: 'J3', v: 'EV/EBITDA' }, { cell: 'K3', v: 'Rev CAGR' }, { cell: 'L3', v: 'CFO/NI' },

      { cell: 'A4', v: 'P1 SQUARE-style' }, { cell: 'B4', v: 210 }, { cell: 'C4', v: 15 },
      { cell: 'D4', v: 10 }, { cell: 'E4', f: 'B4*D4' }, { cell: 'F4', v: 150 },
      { cell: 'G4', f: 'E4+F4' }, { cell: 'H4', v: 250 }, { cell: 'I4', f: 'B4/C4' },
      { cell: 'J4', f: 'G4/H4' }, { cell: 'K4', v: 0.12 }, { cell: 'L4', v: 1.15 },

      { cell: 'A5', v: 'P2 BXPHARMA-style' }, { cell: 'B5', v: 132 }, { cell: 'C5', v: 12 },
      { cell: 'D5', v: 10 }, { cell: 'E5', f: 'B5*D5' }, { cell: 'F5', v: 80 },
      { cell: 'G5', f: 'E5+F5' }, { cell: 'H5', v: 200 }, { cell: 'I5', f: 'B5/C5' },
      { cell: 'J5', f: 'G5/H5' }, { cell: 'K5', v: 0.08 }, { cell: 'L5', v: 0.95 },

      { cell: 'A6', v: 'P3 RENATA-style' }, { cell: 'B6', v: 720 }, { cell: 'C6', v: 40 },
      { cell: 'D6', v: 6 }, { cell: 'E6', f: 'B6*D6' }, { cell: 'F6', v: 480 },
      { cell: 'G6', f: 'E6+F6' }, { cell: 'H6', v: 400 }, { cell: 'I6', f: 'B6/C6' },
      { cell: 'J6', f: 'G6/H6' }, { cell: 'K6', v: 0.15 }, { cell: 'L6', v: 1.05 },

      { cell: 'A7', v: 'P4 IBNSINA-style (distribution-led)' }, { cell: 'B7', v: 240 }, { cell: 'C7', v: 30 },
      { cell: 'D7', v: 4 }, { cell: 'E7', f: 'B7*D7' }, { cell: 'F7', v: 300 },
      { cell: 'G7', f: 'E7+F7' }, { cell: 'H7', v: 210 }, { cell: 'I7', f: 'B7/C7' },
      { cell: 'J7', f: 'G7/H7' }, { cell: 'K7', v: 0.10 }, { cell: 'L7', v: 1.20 },

      { cell: 'A8', v: 'P5 ACI-style (conglomerate)' }, { cell: 'B8', v: 180 }, { cell: 'C8', v: 6 },
      { cell: 'D8', v: 8 }, { cell: 'E8', f: 'B8*D8' }, { cell: 'F8', v: 1260 },
      { cell: 'G8', f: 'E8+F8' }, { cell: 'H8', v: 270 }, { cell: 'I8', f: 'B8/C8' },
      { cell: 'J8', f: 'G8/H8' }, { cell: 'K8', v: 0.14 }, { cell: 'L8', v: 0.80 },

      { cell: 'A10', v: '— FULL SET AGGREGATION (n = 5) —' },
      { cell: 'A11', v: 'Median P/E' }, { cell: 'B11', f: 'MEDIAN(I4:I8)' },
      { cell: 'A12', v: 'Arithmetic mean P/E (WRONG)' }, { cell: 'B12', f: 'AVERAGE(I4:I8)' },
      { cell: 'A13', v: 'Harmonic mean P/E (CORRECT)' }, { cell: 'B13', f: 'HARMEAN(I4:I8)' },
      { cell: 'A14', v: 'P/E dispersion CV' }, { cell: 'B14', f: 'STDEV.S(I4:I8)/AVERAGE(I4:I8)' },
      { cell: 'A15', v: 'Median EV/EBITDA' }, { cell: 'B15', f: 'MEDIAN(J4:J8)' },
      { cell: 'A16', v: 'Harmonic EV/EBITDA' }, { cell: 'B16', f: 'HARMEAN(J4:J8)' },
      { cell: 'A17', v: 'Peer median Rev CAGR' }, { cell: 'B17', f: 'MEDIAN(K4:K8)' },
      { cell: 'A18', v: 'Peer median CFO/NI' }, { cell: 'B18', f: 'MEDIAN(L4:L8)' },

      { cell: 'A20', v: '— TARGET (TGT Pharma) —' },
      { cell: 'A21', v: 'EPS' }, { cell: 'B21', v: 8 },
      { cell: 'A22', v: 'Shares (cr)' }, { cell: 'B22', v: 25 },
      { cell: 'A23', v: 'Net debt' }, { cell: 'B23', v: 300 },
      { cell: 'A24', v: 'EBITDA' }, { cell: 'B24', v: 340 },
      { cell: 'A25', v: 'Rev CAGR' }, { cell: 'B25', v: 0.09 },
      { cell: 'A26', v: 'CFO/NI' }, { cell: 'B26', v: 0.70 },
      { cell: 'A27', v: 'Market price' }, { cell: 'B27', v: 96 },
      { cell: 'A28', v: 'Target P/E' }, { cell: 'B28', f: 'B27/B21' },
      { cell: 'A29', v: 'Target EV/EBITDA' }, { cell: 'B29', f: '(B27*B22+B23)/B24' },

      { cell: 'A31', v: '— PREMIUM / DISCOUNT TO PEERS —' },
      { cell: 'A32', v: 'vs median P/E' }, { cell: 'B32', f: 'B28/B11-1' },
      { cell: 'A33', v: 'vs harmonic P/E' }, { cell: 'B33', f: 'B28/B13-1' },
      { cell: 'A34', v: 'vs median EV/EBITDA' }, { cell: 'B34', f: 'B29/B15-1' },

      { cell: 'A36', v: '— IMPLIED VALUE PER SHARE —' },
      { cell: 'A37', v: 'via median P/E' }, { cell: 'B37', f: 'B21*B11' },
      { cell: 'A38', v: 'via harmonic P/E' }, { cell: 'B38', f: 'B21*B13' },
      { cell: 'A39', v: 'via median EV/EBITDA' }, { cell: 'B39', f: '(B24*B15-B23)/B22' },
      { cell: 'A40', v: 'via harmonic EV/EBITDA' }, { cell: 'B40', f: '(B24*B16-B23)/B22' },
      { cell: 'A41', v: 'Growth factor' }, { cell: 'B41', f: 'B25/B17' },
      { cell: 'A42', v: 'Quality factor' }, { cell: 'B42', f: 'MIN(1,B26/B18)' },
      { cell: 'A43', v: 'Adjusted P/E' }, { cell: 'B43', f: 'B11*B41*B42' },
      { cell: 'A44', v: 'via adjusted P/E' }, { cell: 'B44', f: 'B21*B43' },

      { cell: 'A46', v: '— RANGE —' },
      { cell: 'A47', v: 'Low' }, { cell: 'B47', f: 'MIN(B37:B40,B44)' },
      { cell: 'A48', v: 'High' }, { cell: 'B48', f: 'MAX(B37:B40,B44)' },
      { cell: 'A49', v: 'Midpoint' }, { cell: 'B49', f: '(B47+B48)/2' },
      { cell: 'A50', v: 'Width as % of midpoint' }, { cell: 'B50', f: '(B48-B47)/B49' },
      { cell: 'A51', v: 'Price vs range' },
      { cell: 'B51', f: 'IF(B27<B47,"BELOW RANGE",IF(B27>B48,"ABOVE RANGE","INSIDE RANGE — NO SIGNAL"))' },

      { cell: 'A53', v: '— RELIABILITY TEST —' },
      { cell: 'A54', v: 'Peer count n' }, { cell: 'B54', f: 'COUNT(I4:I8)' },
      { cell: 'A55', v: 'Top holding % of sector cap' }, { cell: 'B55', v: 18 },
      { cell: 'A56', v: 'N effective (Ch 8)' }, { cell: 'B56', f: '100/B55' },
      { cell: 'A57', v: 'VERDICT' },
      {
        cell: 'B57',
        f: 'IF(B54<4,"REFUSE — peer set too thin",IF(B56<3,"REFUSE — sector is a single-name bet",IF(B14>0.35,"RANGE ONLY — dispersion too high for a point estimate","USABLE POINT ESTIMATE")))',
      },

      { cell: 'A59', v: '— CORE SET: business-model comparable only (rows 4–6) —' },
      { cell: 'A60', v: 'Peer count n' }, { cell: 'B60', f: 'COUNT(I4:I6)' },
      { cell: 'A61', v: 'Median P/E' }, { cell: 'B61', f: 'MEDIAN(I4:I6)' },
      { cell: 'A62', v: 'Harmonic P/E' }, { cell: 'B62', f: 'HARMEAN(I4:I6)' },
      { cell: 'A63', v: 'CV' }, { cell: 'B63', f: 'STDEV.S(I4:I6)/AVERAGE(I4:I6)' },
      { cell: 'A64', v: 'VERDICT' },
      { cell: 'B64', f: 'IF(B60<4,"REFUSE — fewer than 4 comparables",IF(B63>0.35,"RANGE ONLY","USABLE POINT ESTIMATE"))' },

      { cell: 'A66', v: 'NOTE' },
      { cell: 'B66', v: 'Cleaning the peer set for comparability shrank it below the reliability threshold. On the DSE that is the normal outcome, not the exception.' },
    ],
  },

  objectives: {
    en: [
      'Build a peer set from business model rather than from the exchange sector label, and document every inclusion and exclusion.',
      'Select the right multiple for the business — P/E, EV/EBITDA, P/B — and state what each one assumes about capital structure.',
      'Aggregate multiples correctly: median for robustness, harmonic mean for P/E, and never the arithmetic mean.',
      'Adjust a peer multiple for differences in growth, leverage, and earnings quality, and show the implied range that results.',
      'Apply a minimum-peer-count and concentration test that forces the method to return no answer when the peer set is too thin.',
    ],
    bn: [
      'এক্সচেঞ্জের খাত-লেবেল নয়, ব্যবসায়িক মডেল থেকে সমকক্ষ গোষ্ঠী গঠন করা এবং প্রতিটি অন্তর্ভুক্তি ও বর্জন নথিভুক্ত করা।',
      'ব্যবসার জন্য সঠিক গুণিতক নির্বাচন করা — P/E, EV/EBITDA, P/B — এবং প্রত্যেকটি মূলধন কাঠামো সম্পর্কে কী ধরে নেয় তা বলা।',
      'গুণিতক সঠিকভাবে সমষ্টিভুক্ত করা: দৃঢ়তার জন্য মধ্যক, P/E-র জন্য হরাত্মক গড়, এবং কখনোই গাণিতিক গড় নয়।',
      'প্রবৃদ্ধি, ঋণভার ও আয়ের গুণমানের পার্থক্যের জন্য সমকক্ষ গুণিতক সমন্বয় করা এবং তাতে সৃষ্ট নিহিত পরিসর দেখানো।',
      'ন্যূনতম সমকক্ষ-সংখ্যা ও কেন্দ্রীভবন পরীক্ষা প্রয়োগ করা, যা সমকক্ষ গোষ্ঠী পাতলা হলে পদ্ধতিটিকে উত্তর না দিতে বাধ্য করে।',
    ],
  },

  blocks: {
    theory: {
      en: `Chapter 21 valued a business from its own cash flows. **Relative valuation abandons that entirely and asks a different question: what are other people paying for a similar business right now?**

It is the most used method on the DSE and the least defensible. Used properly it is a cross-check on an intrinsic estimate. Used as it usually is — a single peer average applied to a single earnings figure — it is a way of laundering the market's current mood into a number that looks analytical.

### What a multiple actually is

A multiple is a price divided by a fundamental. It is not a valuation. **It is a compression of an entire discounted-cash-flow model into one number, and everything the model contained — growth, risk, capital intensity, tax, the durability of the earnings — is now hidden inside it.**

For a stable business, the justified P/E falls out of the Gordon relation:

$$\\frac{P_0}{E_1} = \\frac{\\text{payout}}{r - g}$$

So a peer trading at 18× is not "expensive." It is trading at a price consistent with some combination of payout, required return, and growth. **When you apply its multiple to your target, you are asserting that your target shares that combination.** That assertion is the entire method, and it is almost never stated out loud.

### Building the peer set

The exchange's sector label is a starting point and nothing more. A defensible peer set is built on four tests, applied in order:

| Test | Question | Typical DSE failure |
|---|---|---|
| **1. Business model** | Does it make money the same way? | A pharma manufacturer vs a pharma distributor — same DSE sector, different margin structure, different asset intensity |
| **2. Scale** | Same order of magnitude? | A BDT 4,000 crore company and a BDT 60 crore company do not face the same cost of capital or the same liquidity discount (Ch 2) |
| **3. Accounting basis** | Same recognition policies, same auditor rigour? | Revaluation surplus under IAS 16 in one and not the other (Ch 11) makes P/B non-comparable |
| **4. Liquidity** | Is the peer's price a real price? | A comparable that trades twice a month has a P/E built on a stale quote |

Each test removes names. That is the point. **A peer set that survives all four is usually much smaller than the sector, and on this exchange it is frequently too small to use.**

### The DSE problem, stated exactly

Chapter 8 established the concentration measure:

$$N_{eff} \\approx \\frac{100}{w_{top}}$$

Telecommunication's top name is roughly 78% of sector capitalisation, giving $N_{eff} \\approx 1.3$. Chapter 8 used this to refuse to call a telecom allocation diversification. **The same arithmetic refuses to call a telecom peer set a peer set.**

You cannot compute a meaningful median from two observations. You cannot compute a dispersion from two observations that means anything — two points are always "tight," trivially. And you cannot claim a peer discount is a mispricing when the peer group is one company and its smaller shadow.

**This is the chapter's central claim: relative valuation is least reliable exactly where analysts reach for it most, because it is easiest to run when the sector is small and the data fits on one screen.** The method must therefore carry an explicit refusal condition. If it cannot refuse, it will always produce a number, and a number that cannot be withheld is a number that cannot be trusted.

### Choosing the multiple

| Multiple | Numerator | Denominator | Use when | Breaks when |
|---|---|---|---|---|
| **P/E** | Equity price | Net income | Stable, profitable, similar leverage | Leverage differs; earnings negative or one-off-laden |
| **EV/EBITDA** | Enterprise value | EBITDA | Leverage differs across peers; capital intensity similar | D&A policies differ materially; leases treated inconsistently |
| **EV/Sales** | Enterprise value | Revenue | Losses, or margins converging over time | Margin structures genuinely differ |
| **P/B** | Equity price | Book equity | Banks, NBFIs, insurers (Ch 23) | Revaluation surplus present; intangible-heavy business |
| **EV/EBIT** | Enterprise value | EBIT | Capital intensity differs | Same D&A problem, one step later |

**The single most common error is using P/E across peers with different capital structures.** A company at 3× debt/equity and one at zero debt do not deserve the same P/E even if their operations are identical, because the levered one's earnings are riskier. Chapter 17 established the covenant arithmetic; Chapter 19 showed leverage entering ROE twice with opposite signs. EV/EBITDA neutralises the financing decision by valuing the whole capital structure and dividing by a pre-interest profit figure. **If your peers differ on leverage, P/E is the wrong tool and no amount of adjustment fully rescues it.**

### Aggregating: median, mean, and why the mean is wrong

Three peers at P/E 10, 12, and 60. The arithmetic mean is 27.33. No sensible person would call the peer multiple 27.33.

The **median** is the standard defence: it ignores the magnitude of outliers entirely. With five peers the median is the third value, and two absurd observations cannot move it.

But for P/E specifically there is a stronger argument. **A P/E is a reciprocal — it is one divided by the earnings yield.** Averaging reciprocals arithmetically overweights the largest values, because a P/E can run to infinity as earnings approach zero while the earnings yield stays bounded. The correct aggregator for a set of ratios whose denominators are the quantity of interest is the **harmonic mean**:

$$\\overline{PE}_H = \\frac{n}{\\sum_{i=1}^{n} \\frac{1}{PE_i}} = \\frac{1}{\\frac{1}{n}\\sum_{i=1}^{n} \\frac{E_i}{P_i}}$$

This is not a stylistic preference. It is the multiple you actually get if you put equal money into each peer: your portfolio's P/E is the harmonic mean of the constituents' P/Es, not the arithmetic mean. **The arithmetic mean of P/E corresponds to no portfolio anyone can hold.**

In the worked example the three aggregators give 14.00 (median), 16.20 (arithmetic mean), and 13.29 (harmonic mean) on the same five companies. The arithmetic mean is 22% above the harmonic mean, and that gap is pure outlier contamination.

### Adjusting the multiple

A peer median is a multiple for the *median peer*, not for your target. Three adjustments matter, and all three should be applied explicitly rather than argued in prose:

**Growth.** A target growing at 9% does not deserve the multiple of a peer set growing at 12%:

$$f_g = \\frac{g_{target}}{g_{peer}}$$

**Earnings quality.** Chapter 18 established the cash-conversion test. A target converting 0.70 taka of operating cash per taka of reported profit does not deserve the multiple of peers converting 1.05:

$$f_q = \\min\\left(1, \\frac{(CFO/NI)_{target}}{(CFO/NI)_{peer}}\\right)$$

The cap at 1 is deliberate. **Superior cash conversion earns you the right to the peer multiple, not a premium to it.** A premium requires an argument about the business, not a ratio.

**Leverage.** Where P/E is used and leverage differs, either move to EV/EBITDA or accept that the P/E comparison is indicative only. Chapter 13 established the debt ratios that make two P/Es non-comparable; do not paper over them with a coefficient.

### The Bangladesh caveats

- **Trailing EPS is the only honest input for most DSE names.** Forward consensus barely exists, and where a broker forecast exists it is usually an extrapolation. If you use forward EPS, you are valuing your own forecast, not the peer relationship.
- **Bonus shares and rights issues distort per-share history.** Chapter 4 established the adjustment; a peer P/E built on unadjusted historical EPS is wrong.
- **Related-party revenue inside a conglomerate structure** makes EV/Sales and EV/EBITDA unreliable for the group as a whole. Chapter 18 covered how to spot it.
- **Free float matters more than market cap.** A company that is 85% sponsor-held has a price set by a small float. Its multiple is a thin-market artefact, not a market consensus.`,
      bn: `অধ্যায় ২১ একটি ব্যবসাকে তার নিজের নগদ প্রবাহ থেকে মূল্যায়ন করেছে। **আপেক্ষিক মূল্যায়ন সেটি সম্পূর্ণ ত্যাগ করে ভিন্ন প্রশ্ন করে: এই মুহূর্তে অন্যরা একই ধরনের ব্যবসার জন্য কত দিচ্ছে?**

এটি ডিএসই-তে সবচেয়ে বেশি ব্যবহৃত এবং সবচেয়ে কম রক্ষণযোগ্য পদ্ধতি। সঠিকভাবে ব্যবহার করলে এটি অন্তর্নিহিত মূল্যায়নের একটি ক্রস-চেক। সাধারণত যেভাবে ব্যবহৃত হয় — একটি সমকক্ষ গড় একটি আয় সংখ্যায় প্রয়োগ — তা বাজারের বর্তমান মেজাজকে বিশ্লেষণী দেখতে সংখ্যায় রূপান্তরের একটি উপায়।

### গুণিতক আসলে কী

গুণিতক হলো একটি দাম ভাগ একটি মৌল সংখ্যা। এটি মূল্যায়ন নয়। **এটি একটি সম্পূর্ণ ডিসকাউন্টেড ক্যাশ ফ্লো মডেলকে একটি সংখ্যায় সংকুচিত করা, এবং মডেলে যা ছিল — প্রবৃদ্ধি, ঝুঁকি, মূলধন নিবিড়তা, কর, আয়ের স্থায়িত্ব — সবই এখন তার ভেতরে লুকানো।**

স্থিতিশীল ব্যবসার জন্য ন্যায্য P/E গর্ডন সম্পর্ক থেকেই বেরিয়ে আসে:

$$\\frac{P_0}{E_1} = \\frac{\\text{payout}}{r - g}$$

অতএব ১৮×-এ লেনদেন হওয়া সমকক্ষ "দামি" নয়। সে এমন দামে লেনদেন হচ্ছে যা লভ্যাংশ হার, প্রয়োজনীয় রিটার্ন ও প্রবৃদ্ধির কোনো এক সমন্বয়ের সঙ্গে সঙ্গতিপূর্ণ। **তার গুণিতক আপনার লক্ষ্য কোম্পানিতে প্রয়োগ করা মানে আপনি দাবি করছেন লক্ষ্যটি ঐ একই সমন্বয় ভাগ করে নেয়।** ঐ দাবিটিই পুরো পদ্ধতি, এবং তা প্রায় কখনোই স্পষ্ট করে বলা হয় না।

### সমকক্ষ গোষ্ঠী গঠন

এক্সচেঞ্জের খাত-লেবেল একটি সূচনাবিন্দু, তার বেশি কিছু নয়। রক্ষণযোগ্য সমকক্ষ গোষ্ঠী চারটি পরীক্ষার ওপর দাঁড়ায়, ক্রমানুসারে প্রযুক্ত:

| পরীক্ষা | প্রশ্ন | সাধারণ ডিএসই ব্যর্থতা |
|---|---|---|
| **১. ব্যবসায়িক মডেল** | একইভাবে টাকা আয় করে? | ওষুধ উৎপাদক বনাম ওষুধ পরিবেশক — একই ডিএসই খাত, ভিন্ন মার্জিন গঠন, ভিন্ন সম্পদ নিবিড়তা |
| **২. আকার** | একই মাত্রার? | ৪,০০০ কোটি টাকার কোম্পানি ও ৬০ কোটির কোম্পানি একই মূলধন ব্যয় বা একই তারল্য ছাড়ের মুখোমুখি নয় (অধ্যায় ২) |
| **৩. হিসাবরক্ষণ ভিত্তি** | একই স্বীকৃতি নীতি, একই নিরীক্ষার কঠোরতা? | একটিতে IAS 16 পুনর্মূল্যায়ন উদ্বৃত্ত আছে, অন্যটিতে নেই (অধ্যায় ১১) — P/B অতুলনীয় হয়ে যায় |
| **৪. তারল্য** | সমকক্ষের দাম কি প্রকৃত দাম? | মাসে দুইবার লেনদেন হওয়া কোম্পানির P/E বাসি কোটেশনের ওপর দাঁড়ানো |

প্রতিটি পরীক্ষা নাম কমায়। সেটাই উদ্দেশ্য। **চারটিতেই টিকে থাকা সমকক্ষ গোষ্ঠী সাধারণত খাতের চেয়ে অনেক ছোট, এবং এই এক্সচেঞ্জে প্রায়ই ব্যবহারের পক্ষে অত্যন্ত ছোট।**

### ডিএসই সমস্যা, হুবহু বলা

অধ্যায় ৮ কেন্দ্রীভবন পরিমাপ প্রতিষ্ঠা করেছে:

$$N_{eff} \\approx \\frac{100}{w_{top}}$$

টেলিযোগাযোগের শীর্ষ নামটি খাতের মূলধনের প্রায় ৭৮%, ফলে $N_{eff} \\approx 1.3$। অধ্যায় ৮ এটি দিয়ে টেলিকম বণ্টনকে বৈচিত্র্যায়ন বলতে অস্বীকার করেছে। **একই পাটিগণিত টেলিকম সমকক্ষ গোষ্ঠীকে সমকক্ষ গোষ্ঠী বলতেও অস্বীকার করে।**

দুটি পর্যবেক্ষণ থেকে অর্থবহ মধ্যক গণনা করা যায় না। দুটি পর্যবেক্ষণ থেকে অর্থবহ বিস্তার গণনা করা যায় না — দুটি বিন্দু সর্বদাই তুচ্ছভাবে "ঘন"। আর সমকক্ষ গোষ্ঠী যখন একটি কোম্পানি ও তার ছোট ছায়া, তখন সমকক্ষ ছাড়কে ভুল দাম বলা যায় না।

**এটিই অধ্যায়ের কেন্দ্রীয় দাবি: আপেক্ষিক মূল্যায়ন ঠিক সেখানেই সবচেয়ে অনির্ভরযোগ্য যেখানে বিশ্লেষকরা সবচেয়ে বেশি এর দিকে হাত বাড়ান, কারণ খাত ছোট হলে ও সব তথ্য এক পর্দায় ধরলে এটি চালানো সবচেয়ে সহজ।** অতএব পদ্ধতিটিকে একটি স্পষ্ট অস্বীকৃতি শর্ত বহন করতে হবে। অস্বীকার করতে না পারলে এটি সর্বদাই একটি সংখ্যা দেবে, আর যে সংখ্যা আটকে রাখা যায় না, সে সংখ্যায় ভরসা করা যায় না।

### গুণিতক নির্বাচন

| গুণিতক | লব | হর | কখন ব্যবহার | কখন ভাঙে |
|---|---|---|---|---|
| **P/E** | ইক্যুইটি মূল্য | নিট মুনাফা | স্থিতিশীল, লাভজনক, সমান ঋণভার | ঋণভার ভিন্ন; আয় ঋণাত্মক বা এককালীন-ভারাক্রান্ত |
| **EV/EBITDA** | এন্টারপ্রাইজ মূল্য | EBITDA | সমকক্ষদের ঋণভার ভিন্ন; মূলধন নিবিড়তা কাছাকাছি | D&A নীতি উল্লেখযোগ্য ভিন্ন; লিজ অসামঞ্জস্যপূর্ণভাবে ধরা |
| **EV/Sales** | এন্টারপ্রাইজ মূল্য | রাজস্ব | লোকসান, বা মার্জিন সময়ের সঙ্গে অভিসারী | মার্জিন গঠন প্রকৃতপক্ষেই ভিন্ন |
| **P/B** | ইক্যুইটি মূল্য | বুক ইক্যুইটি | ব্যাংক, NBFI, বীমা (অধ্যায় ২৩) | পুনর্মূল্যায়ন উদ্বৃত্ত আছে; অস্পৃশ্য-সম্পদ নিবিড় ব্যবসা |
| **EV/EBIT** | এন্টারপ্রাইজ মূল্য | EBIT | মূলধন নিবিড়তা ভিন্ন | একই D&A সমস্যা, এক ধাপ পরে |

**সবচেয়ে সাধারণ ভুল হলো ভিন্ন মূলধন কাঠামোর সমকক্ষদের মধ্যে P/E ব্যবহার।** ৩× ঋণ/ইক্যুইটির কোম্পানি ও শূন্য ঋণের কোম্পানি একই P/E প্রাপ্য নয়, এমনকি পরিচালনা অভিন্ন হলেও, কারণ ঋণভারযুক্তটির আয় বেশি ঝুঁকিপূর্ণ। অধ্যায় ১৭ কোভেন্যান্ট পাটিগণিত প্রতিষ্ঠা করেছে; অধ্যায় ১৯ দেখিয়েছে ঋণভার ROE-তে দুইবার বিপরীত চিহ্নে ঢোকে। EV/EBITDA সম্পূর্ণ মূলধন কাঠামোকে মূল্যায়ন করে ও সুদ-পূর্ব মুনাফা দিয়ে ভাগ করে অর্থায়ন সিদ্ধান্তকে নিরপেক্ষ করে। **সমকক্ষদের ঋণভার ভিন্ন হলে P/E ভুল হাতিয়ার, এবং কোনো পরিমাণ সমন্বয় একে পুরোপুরি বাঁচায় না।**

### সমষ্টিকরণ: মধ্যক, গড়, এবং গড় কেন ভুল

তিনটি সমকক্ষের P/E ১০, ১২ ও ৬০। গাণিতিক গড় ২৭.৩৩। কোনো বিবেকবান ব্যক্তি সমকক্ষ গুণিতককে ২৭.৩৩ বলবেন না।

**মধ্যক** হলো প্রমিত প্রতিরক্ষা: এটি বহিঃস্থ মানের মাত্রা সম্পূর্ণ উপেক্ষা করে। পাঁচটি সমকক্ষে মধ্যক তৃতীয় মান, এবং দুটি অবাস্তব পর্যবেক্ষণ একে নাড়াতে পারে না।

কিন্তু বিশেষভাবে P/E-র জন্য আরও জোরালো যুক্তি আছে। **P/E একটি বিপরীত রাশি — এটি এক ভাগ আয়-প্রতিফল (earnings yield)।** বিপরীত রাশির গাণিতিক গড় সবচেয়ে বড় মানগুলোকে অতিরিক্ত ওজন দেয়, কারণ আয় শূন্যের দিকে গেলে P/E অসীমে যেতে পারে অথচ আয়-প্রতিফল সীমাবদ্ধ থাকে। যেসব অনুপাতের হরই আসল আগ্রহের বিষয়, তাদের সঠিক সমষ্টিকারক হলো **হরাত্মক গড়**:

$$\\overline{PE}_H = \\frac{n}{\\sum_{i=1}^{n} \\frac{1}{PE_i}} = \\frac{1}{\\frac{1}{n}\\sum_{i=1}^{n} \\frac{E_i}{P_i}}$$

এটি রুচির প্রশ্ন নয়। প্রতিটি সমকক্ষে সমান টাকা রাখলে আপনি বাস্তবে যে গুণিতক পান এটিই তা: আপনার পোর্টফোলিওর P/E উপাদানগুলোর P/E-র হরাত্মক গড়, গাণিতিক গড় নয়। **P/E-র গাণিতিক গড় এমন কোনো পোর্টফোলিওর সঙ্গে মেলে না যা কেউ ধারণ করতে পারে।**

কৃত উদাহরণে একই পাঁচটি কোম্পানিতে তিনটি সমষ্টিকারক দেয় ১৪.০০ (মধ্যক), ১৬.২০ (গাণিতিক গড়) ও ১৩.২৯ (হরাত্মক গড়)। গাণিতিক গড় হরাত্মক গড়ের চেয়ে ২২% বেশি, আর ঐ ফাঁকটি বিশুদ্ধ বহিঃস্থ দূষণ।

### গুণিতক সমন্বয়

সমকক্ষ মধ্যক হলো *মধ্যক সমকক্ষের* গুণিতক, আপনার লক্ষ্যের নয়। তিনটি সমন্বয় গুরুত্বপূর্ণ, এবং তিনটিই গদ্যে যুক্তি না দিয়ে স্পষ্টভাবে প্রয়োগ করা উচিত:

**প্রবৃদ্ধি।** ৯%-এ বাড়া লক্ষ্য কোম্পানি ১২%-এ বাড়া সমকক্ষ গোষ্ঠীর গুণিতক প্রাপ্য নয়:

$$f_g = \\frac{g_{target}}{g_{peer}}$$

**আয়ের গুণমান।** অধ্যায় ১৮ নগদ-রূপান্তর পরীক্ষা প্রতিষ্ঠা করেছে। ঘোষিত প্রতি টাকা মুনাফায় ০.৭০ টাকা পরিচালন নগদ রূপান্তরকারী লক্ষ্য ১.০৫ রূপান্তরকারী সমকক্ষদের গুণিতক প্রাপ্য নয়:

$$f_q = \\min\\left(1, \\frac{(CFO/NI)_{target}}{(CFO/NI)_{peer}}\\right)$$

১-এ সীমা ইচ্ছাকৃত। **উৎকৃষ্ট নগদ রূপান্তর আপনাকে সমকক্ষ গুণিতকের অধিকার দেয়, তার ওপর প্রিমিয়াম নয়।** প্রিমিয়ামের জন্য ব্যবসা নিয়ে যুক্তি লাগে, অনুপাত নয়।

**ঋণভার।** যেখানে P/E ব্যবহৃত হচ্ছে এবং ঋণভার ভিন্ন, সেখানে হয় EV/EBITDA-তে যান, নয়তো মেনে নিন P/E তুলনাটি কেবল ইঙ্গিতমূলক। অধ্যায় ১৩ প্রতিষ্ঠা করেছে কোন ঋণ অনুপাত দুটি P/E-কে অতুলনীয় করে; একটি সহগ দিয়ে সেটি ঢেকে দেবেন না।

### বাংলাদেশ-নির্দিষ্ট সতর্কতা

- **অধিকাংশ ডিএসই নামের জন্য পশ্চাৎমুখী EPS-ই একমাত্র সৎ ইনপুট।** ফরওয়ার্ড কনসেনসাস প্রায় নেই, আর ব্রোকার পূর্বাভাস থাকলেও তা সাধারণত বহিঃক্ষেপণ। ফরওয়ার্ড EPS ব্যবহার করলে আপনি সমকক্ষ সম্পর্ক নয়, নিজের পূর্বাভাস মূল্যায়ন করছেন।
- **বোনাস শেয়ার ও রাইট ইস্যু প্রতি-শেয়ার ইতিহাস বিকৃত করে।** অধ্যায় ৪ সমন্বয়টি প্রতিষ্ঠা করেছে; অসমন্বিত ঐতিহাসিক EPS-এর ওপর গড়া সমকক্ষ P/E ভুল।
- **সমষ্টি কাঠামোর ভেতরে সংশ্লিষ্ট-পক্ষ রাজস্ব** গোটা গ্রুপের জন্য EV/Sales ও EV/EBITDA-কে অনির্ভরযোগ্য করে। অধ্যায় ১৮ এটি কীভাবে ধরা যায় তা দেখিয়েছে।
- **বাজার মূলধনের চেয়ে ফ্রি ফ্লোট বেশি গুরুত্বপূর্ণ।** ৮৫% স্পনসর-ধারিত কোম্পানির দাম একটি ছোট ফ্লোট নির্ধারণ করে। তার গুণিতক পাতলা-বাজারের কৃত্রিম ফল, বাজার ঐকমত্য নয়।`,
    },

    simple: {
      en: `You want to sell your flat in Dhanmondi. You do not build a cash-flow model. You ask what the flat next door sold for.

That is relative valuation, and for flats it works well, because there are hundreds of similar flats and dozens of recent sales.

### Now try it with something rare

Suppose you want to price a working cargo ship berthed at Chittagong. You ask what similar ships sold for. There were two sales. One was a distressed seller who took anything. The other was a buyer who badly needed a ship that month and overpaid.

**One sale says 40 crore. The other says 90 crore. What is your ship worth?**

The honest answer is: *you do not know, and these two sales cannot tell you.* You can average them and say 65 crore, but the average of two numbers that far apart is not information. It is a shape made out of ignorance.

**This is exactly what happens when you value a Bangladeshi telecom company off "the telecom sector."** There is one big company and one much smaller one. Two prices. Averaging them is the cargo-ship mistake wearing a spreadsheet.

---

### The trap in the word "average"

Say three shops sell for 10, 12, and 60 times their annual profit.

Add them, divide by three: 27.3. Now you go tell someone "shops around here sell for 27 times profit." **Every single shop sold for less than that except one.** The one strange sale dragged the whole number up.

Use the **middle** number instead — 12. Two sold below it, two above. Nothing weird can move it.

And if you actually bought equal amounts of all three shops, the profit you would own per taka spent works out to a multiple of about **15**, not 27. That number — the one that matches what you can really buy — is the **harmonic mean**, and it is the honest way to average a P/E.

---

### The rule this chapter gives you

Before comparing any company to its peers, **count the peers.**

- **Four or more genuinely similar companies:** the comparison means something, though it will still give you a range, not a price.
- **Three or fewer:** stop. Do not average. Do not publish a target price. **Say you cannot value it this way and use another method.**

Most Bangladeshi investors do the opposite. The thinner the sector, the more confident the peer comparison sounds, because there is less contradictory data to explain away. **Confidence goes up exactly as reliability goes down.**`,
      bn: `আপনি ধানমন্ডির ফ্ল্যাট বিক্রি করতে চান। আপনি নগদ প্রবাহের মডেল বানান না। জিজ্ঞেস করেন পাশের ফ্ল্যাটটি কত টাকায় বিক্রি হয়েছে।

সেটিই আপেক্ষিক মূল্যায়ন, এবং ফ্ল্যাটের ক্ষেত্রে এটি ভালো কাজ করে, কারণ শত শত একইরকম ফ্ল্যাট আছে আর সাম্প্রতিক বিক্রিও ডজনখানেক।

### এবার বিরল কিছুতে চেষ্টা করুন

ধরুন চট্টগ্রামে নোঙর করা একটি সচল কার্গো জাহাজের দাম ঠিক করতে চান। জিজ্ঞেস করলেন একইরকম জাহাজ কত টাকায় বিক্রি হয়েছে। বিক্রি হয়েছে দুটি। একটিতে বিক্রেতা সংকটে পড়ে যা পেয়েছেন তাতেই দিয়েছেন। অন্যটিতে ক্রেতার ঐ মাসে জাহাজ দরকার ছিল বলে বেশি দাম দিয়েছেন।

**একটি বিক্রি বলে ৪০ কোটি। অন্যটি বলে ৯০ কোটি। আপনার জাহাজের দাম কত?**

সৎ উত্তর: *আপনি জানেন না, আর এই দুটি বিক্রি আপনাকে তা বলতে পারে না।* আপনি গড় করে ৬৫ কোটি বলতে পারেন, কিন্তু এত দূরের দুটি সংখ্যার গড় তথ্য নয়। এটি অজ্ঞতা দিয়ে বানানো একটি আকৃতি।

**একটি বাংলাদেশি টেলিকম কোম্পানিকে "টেলিকম খাত" দিয়ে মূল্যায়ন করলে ঠিক এটিই ঘটে।** একটি বড় কোম্পানি, একটি অনেক ছোট। দুটি দাম। এদের গড় করা মানে স্প্রেডশিট পরা সেই কার্গো-জাহাজের ভুল।

---

### "গড়" শব্দটির ফাঁদ

ধরুন তিনটি দোকান বার্ষিক মুনাফার ১০, ১২ ও ৬০ গুণে বিক্রি হলো।

যোগ করে তিন দিয়ে ভাগ: ২৭.৩। এবার আপনি গিয়ে বলছেন "এখানে দোকান মুনাফার ২৭ গুণে বিক্রি হয়।" **একটি ছাড়া প্রতিটি দোকানই এর চেয়ে কমে বিক্রি হয়েছে।** একটি অদ্ভুত বিক্রি পুরো সংখ্যাটিকে টেনে তুলেছে।

বরং **মাঝের** সংখ্যাটি নিন — ১২। দুটি এর নিচে, দুটি ওপরে। কোনো উদ্ভট মান একে নাড়াতে পারে না।

আর তিনটি দোকানেই যদি সমান টাকা ঢালতেন, তবে খরচের প্রতি টাকায় যে মুনাফা আপনার হতো তা দাঁড়ায় প্রায় **১৫** গুণে, ২৭-এ নয়। ঐ সংখ্যাটি — যেটি আপনি বাস্তবে যা কিনতে পারেন তার সঙ্গে মেলে — **হরাত্মক গড়**, এবং P/E গড় করার সৎ উপায় এটিই।

---

### এই অধ্যায় যে নিয়মটি দেয়

কোনো কোম্পানিকে সমকক্ষদের সঙ্গে তুলনা করার আগে **সমকক্ষ গুনুন।**

- **চার বা তার বেশি সত্যিকারের অনুরূপ কোম্পানি:** তুলনার অর্থ আছে, যদিও তা তবু একটি পরিসর দেবে, দাম নয়।
- **তিন বা কম:** থামুন। গড় করবেন না। লক্ষ্যমূল্য প্রকাশ করবেন না। **বলুন এভাবে মূল্যায়ন করা যায় না এবং অন্য পদ্ধতি ব্যবহার করুন।**

অধিকাংশ বাংলাদেশি বিনিয়োগকারী উল্টোটা করেন। খাত যত পাতলা, সমকক্ষ তুলনা তত আত্মবিশ্বাসী শোনায়, কারণ ব্যাখ্যা করার মতো বিরোধী তথ্য তত কম। **নির্ভরযোগ্যতা যত নামে, আত্মবিশ্বাস ঠিক তত ওঠে।**`,
    },

    example: {
      en: `### Step one: the sector label is not the peer set

The DSE pharmaceuticals and chemicals sector carries around 30 listed names. Applying the four tests of §22.1:

| Filter | Names surviving | What was removed |
|---|---|---|
| DSE sector label | ~30 | — |
| Business model (branded generic manufacture or distribution) | 12 | Basic chemicals, dyes, agrochemicals |
| Scale (market cap above BDT 500 crore) | 7 | Micro-caps with no institutional following |
| Liquidity (Ch 2 filter: traded on >90% of sessions) | 5 | Two names quoted but barely traded |
| **Business model, strictly (manufacture only)** | **3** | A distributor and a diversified conglomerate |

**Note where this ends.** Five names survive the practical filters. Three survive a strict business-model test. **The exchange's "sector" of 30 has become a peer set of three or five depending on how honest you are being.** Hold that number; it decides everything below.

### The five-name peer set

| Company | Price | EPS | Shares (cr) | Mkt Cap | Net Debt | EV | EBITDA | **P/E** | **EV/EBITDA** | Rev CAGR | CFO/NI |
|---|---|---|---|---|---|---|---|---|---|---|---|
| P1 SQUARE-style | 210.00 | 15.00 | 10 | 2,100 | 150 | 2,250 | 250 | **14.00** | **9.00** | 12% | 1.15 |
| P2 BXPHARMA-style | 132.00 | 12.00 | 10 | 1,320 | 80 | 1,400 | 200 | **11.00** | **7.00** | 8% | 0.95 |
| P3 RENATA-style | 720.00 | 40.00 | 6 | 4,320 | 480 | 4,800 | 400 | **18.00** | **12.00** | 15% | 1.05 |
| P4 IBNSINA-style *(distribution-led)* | 240.00 | 30.00 | 4 | 960 | 300 | 1,260 | 210 | **8.00** | **6.00** | 10% | 1.20 |
| P5 ACI-style *(conglomerate)* | 180.00 | 6.00 | 8 | 1,440 | 1,260 | 2,700 | 270 | **30.00** | **10.00** | 14% | 0.80 |

**Read P5 before you read anything else.** Its P/E is 30.00 — the highest in the set — and its EV/EBITDA is 10.00, barely above the median. That is not a growth premium. It is leverage: net debt of 1,260 crore against EBITDA of 270 is 4.7×, so interest consumes most of operating profit and net income collapses to 48 crore. **A thin bottom line divided into a normal market cap produces a high P/E that looks like optimism and is actually debt.** Chapter 19's interest-burden term is what is happening inside that number.

**And P4 is the mirror image.** P/E of 8.00 looks cheap. But it is distribution-led: lower margin, different asset base, different competitive position. Its 8.00 is not a discount to be captured. It is a different business being priced correctly.

### Step two: aggregate three ways and watch them disagree

| Aggregator | P/E | EV/EBITDA |
|---|---|---|
| **Median** | **14.0000** | **9.0000** |
| Arithmetic mean | 16.2000 | 8.8000 |
| **Harmonic mean** | **13.2899** | **8.2786** |

**The arithmetic mean P/E of 16.20 is 22% above the harmonic mean of 13.29.** Every taka of that gap comes from P5's 30.00 — a number that, as established above, is a leverage artefact. The arithmetic mean has taken the most distorted observation in the set and given it the most weight.

**Dispersion, and this is the number most peer tables never show:**

$$CV = \\frac{s}{\\bar{x}} = \\frac{8.5557}{16.2000} = 0.5281$$

A coefficient of variation of 0.53 means the peer P/Es scatter by more than half their own mean. **A median drawn from that scatter is a number, not an estimate.**

### Step three: the target, and the range

**TGT Pharma.** EPS 8.00; shares 25 crore; net debt 300; EBITDA 340; three-year revenue CAGR 9%; CFO/NI 0.70; market price BDT 96.00.

Where it currently trades relative to peers:

| Metric | Target | Peer benchmark | Premium/(discount) |
|---|---|---|---|
| P/E | 12.0000 | 14.0000 (median) | **−14.29%** |
| P/E | 12.0000 | 13.2899 (harmonic) | **−9.71%** |
| EV/EBITDA | 7.9412 | 9.0000 (median) | **−11.76%** |

A discount on all three. The standard broker note stops here and calls it undervalued. **It is not a conclusion. It is the beginning of the question: is the discount earned?**

**The adjustments say it is.**

- Growth: 9% against a peer median of 12% → $f_g = 0.7500$
- Quality (Ch 18): CFO/NI of 0.70 against a peer median of 1.05 → $f_q = 0.6667$
- Adjusted P/E: $14.00 \\times 0.75 \\times 0.6667 = \\mathbf{7.00}$

| Method | Multiple | Implied price (BDT) |
|---|---|---|
| Median P/E | 14.0000 | **112.00** |
| Harmonic-mean P/E | 13.2899 | **106.32** |
| Median EV/EBITDA | 9.0000 | **110.40** |
| Harmonic EV/EBITDA | 8.2786 | **100.59** |
| **Quality- and growth-adjusted P/E** | **7.0000** | **56.00** |

**Range: BDT 56.00 to BDT 112.00. Midpoint 84.00. Width 66.67% of midpoint.**

The market price of 96.00 sits inside that band, closer to the top than the bottom. **Relative valuation has returned no signal.** Not "hold" — *no signal*. The method has been run correctly and has declined to distinguish the market price from its own estimate, because its own estimate spans a two-to-one range.

That is the honest output. The dishonest output is to quote the median P/E line alone — implied 112.00 against a market price of 96.00, a 16.7% upside — and suppress the adjusted line that produced 56.00.

### Step four: the strict peer set, and the trap

Now apply the strict business-model filter and drop P4 (distributor) and P5 (conglomerate). Three manufacturers remain: P1, P2, P3.

| | Full set (n=5) | Core set (n=3) |
|---|---|---|
| Median P/E | 14.0000 | 14.0000 |
| Harmonic P/E | 13.2899 | 13.7682 |
| **CV** | **0.5281** | **0.2450** |
| Peer count | 5 | **3** |
| N effective (Ch 8, top name 18%) | 5.56 | 5.56 |
| **Verdict** | **RANGE ONLY** | **REFUSE — too few comparables** |

**Read that table twice.** Cleaning the peer set for comparability cut the dispersion by more than half — CV from 0.53 to 0.25, comfortably inside the reliability threshold. **And in doing so it destroyed the sample size.**

**You can have comparability or you can have sample size. On the DSE you very rarely have both.** This is not a failure of technique. It is the structure of a market with 350-odd listed companies spread across 20 sector labels, most of which contain fewer genuinely comparable businesses than a single US industry sub-group.

### Step five: the thin set, where the method must simply refuse

Telecom. Two listed comparables.

| Company | Price | EPS | P/E |
|---|---|---|---|
| T1 GP-style | 320.00 | 20.00 | **16.00** |
| T2 ROBI-style | 36.00 | 1.50 | **24.00** |

| Statistic | Value |
|---|---|
| Median P/E | 20.0000 |
| Arithmetic mean P/E | 20.0000 |
| Harmonic mean P/E | 19.2000 |
| CV | 0.2828 |
| n | **2** |
| N effective (top name 78%) | **1.28** |

**The CV of 0.28 passes the dispersion test.** It passes because two points are always close to their own mean — with $n = 2$ the CV is mechanically bounded and carries almost no information. **This is why the count test must be applied first and must be a hard stop.** A dispersion screen alone would have waved this peer set through.

$N_{eff} = 1.28$ from Chapter 8 is the second hard stop. The "sector" is one company with a smaller one attached. **A peer comparison here is not a comparison. It is a company being valued against itself.**

Verdict: **PEER SET TOO THIN — REFUSING TO VALUE.** No median, no implied price, no target. Value it on its own cash flows (Ch 21), on international comparables with an explicit country adjustment, or not at all.

**And note what this costs you.** Refusing means publishing nothing where a competitor publishes a target price of BDT 80.00 with a confident-looking table behind it. That competitor's number is not better than yours. **It is your number with the refusal deleted.**`,
      bn: `### ধাপ এক: খাত-লেবেল সমকক্ষ গোষ্ঠী নয়

ডিএসই-র ওষুধ ও রসায়ন খাতে প্রায় ৩০টি তালিকাভুক্ত নাম। §২২.১-এর চারটি পরীক্ষা প্রয়োগ করে:

| ছাঁকনি | টিকে থাকা নাম | কী বাদ গেল |
|---|---|---|
| ডিএসই খাত-লেবেল | ~৩০ | — |
| ব্যবসায়িক মডেল (ব্র্যান্ডেড জেনেরিক উৎপাদন বা পরিবেশন) | ১২ | মৌল রসায়ন, রঞ্জক, কৃষি-রসায়ন |
| আকার (বাজার মূলধন ৫০০ কোটি টাকার বেশি) | ৭ | প্রাতিষ্ঠানিক অনুসরণহীন মাইক্রো-ক্যাপ |
| তারল্য (অধ্যায় ২ ছাঁকনি: >৯০% সেশনে লেনদেন) | ৫ | কোটেড কিন্তু প্রায় অলেনদেনকৃত দুটি নাম |
| **ব্যবসায়িক মডেল, কঠোরভাবে (কেবল উৎপাদন)** | **৩** | একটি পরিবেশক ও একটি বহুমুখী সমষ্টি |

**লক্ষ করুন এর শেষ কোথায়।** ব্যবহারিক ছাঁকনিতে টেকে পাঁচটি নাম। কঠোর ব্যবসায়িক-মডেল পরীক্ষায় টেকে তিনটি। **এক্সচেঞ্জের ৩০ কোম্পানির "খাত" পরিণত হয়েছে তিন বা পাঁচটির সমকক্ষ গোষ্ঠীতে — আপনি কতটা সৎ তার ওপর নির্ভর করে।** সংখ্যাটি ধরে রাখুন; নিচের সবকিছু এটিই ঠিক করে।

### পাঁচ-নামের সমকক্ষ গোষ্ঠী

| কোম্পানি | দাম | EPS | শেয়ার (কোটি) | বাজার মূলধন | নিট ঋণ | EV | EBITDA | **P/E** | **EV/EBITDA** | রাজস্ব CAGR | CFO/NI |
|---|---|---|---|---|---|---|---|---|---|---|---|
| P1 SQUARE-ধাঁচ | ২১০.০০ | ১৫.০০ | ১০ | ২,১০০ | ১৫০ | ২,২৫০ | ২৫০ | **১৪.০০** | **৯.০০** | ১২% | ১.১৫ |
| P2 BXPHARMA-ধাঁচ | ১৩২.০০ | ১২.০০ | ১০ | ১,৩২০ | ৮০ | ১,৪০০ | ২০০ | **১১.০০** | **৭.০০** | ৮% | ০.৯৫ |
| P3 RENATA-ধাঁচ | ৭২০.০০ | ৪০.০০ | ৬ | ৪,৩২০ | ৪৮০ | ৪,৮০০ | ৪০০ | **১৮.০০** | **১২.০০** | ১৫% | ১.০৫ |
| P4 IBNSINA-ধাঁচ *(পরিবেশন-নির্ভর)* | ২৪০.০০ | ৩০.০০ | ৪ | ৯৬০ | ৩০০ | ১,২৬০ | ২১০ | **৮.০০** | **৬.০০** | ১০% | ১.২০ |
| P5 ACI-ধাঁচ *(সমষ্টি)* | ১৮০.০০ | ৬.০০ | ৮ | ১,৪৪০ | ১,২৬০ | ২,৭০০ | ২৭০ | **৩০.০০** | **১০.০০** | ১৪% | ০.৮০ |

**অন্য কিছু পড়ার আগে P5 পড়ুন।** এর P/E ৩০.০০ — গোষ্ঠীর সর্বোচ্চ — আর EV/EBITDA ১০.০০, মধ্যকের সামান্য ওপরে। এটি প্রবৃদ্ধি প্রিমিয়াম নয়। এটি ঋণভার: ২৭০ কোটি EBITDA-র বিপরীতে ১,২৬০ কোটি নিট ঋণ মানে ৪.৭×, অতএব সুদ পরিচালন মুনাফার বেশিরভাগ খায় আর নিট মুনাফা ৪৮ কোটিতে নেমে আসে। **স্বাভাবিক বাজার মূলধনকে পাতলা তলানি দিয়ে ভাগ করলে যে উচ্চ P/E আসে তা আশাবাদ মনে হয়, আসলে তা ঋণ।** ঐ সংখ্যার ভেতরে অধ্যায় ১৯-এর সুদ-ভার পদটিই ঘটছে।

**আর P4 তার আয়নার প্রতিচ্ছবি।** ৮.০০ P/E সস্তা দেখায়। কিন্তু এটি পরিবেশন-নির্ভর: কম মার্জিন, ভিন্ন সম্পদভিত্তি, ভিন্ন প্রতিযোগিতামূলক অবস্থান। এর ৮.০০ ধরার মতো ছাড় নয়। এটি একটি ভিন্ন ব্যবসার সঠিক দাম।

### ধাপ দুই: তিনভাবে সমষ্টি করুন এবং তাদের অমিল দেখুন

| সমষ্টিকারক | P/E | EV/EBITDA |
|---|---|---|
| **মধ্যক** | **১৪.০০০০** | **৯.০০০০** |
| গাণিতিক গড় | ১৬.২০০০ | ৮.৮০০০ |
| **হরাত্মক গড়** | **১৩.২৮৯৯** | **৮.২৭৮৬** |

**১৬.২০ গাণিতিক গড় P/E ১৩.২৯ হরাত্মক গড়ের চেয়ে ২২% বেশি।** ঐ ফাঁকের প্রতিটি টাকা আসে P5-এর ৩০.০০ থেকে — যা, উপরে প্রতিষ্ঠিত হয়েছে, একটি ঋণভার-কৃত্রিমতা। গাণিতিক গড় গোষ্ঠীর সবচেয়ে বিকৃত পর্যবেক্ষণটিকে সবচেয়ে বেশি ওজন দিয়েছে।

**বিস্তার, এবং এই সংখ্যাটি অধিকাংশ সমকক্ষ সারণি কখনো দেখায় না:**

$$CV = \\frac{s}{\\bar{x}} = \\frac{8.5557}{16.2000} = 0.5281$$

০.৫৩ ভেদাঙ্ক মানে সমকক্ষ P/E-গুলো নিজেদের গড়ের অর্ধেকেরও বেশি ছড়িয়ে আছে। **ঐ ছড়ানো থেকে টানা মধ্যক একটি সংখ্যা, প্রাক্কলন নয়।**

### ধাপ তিন: লক্ষ্য কোম্পানি, এবং পরিসর

**TGT Pharma।** EPS ৮.০০; শেয়ার ২৫ কোটি; নিট ঋণ ৩০০; EBITDA ৩৪০; তিন বছরের রাজস্ব CAGR ৯%; CFO/NI ০.৭০; বাজার দাম ৯৬.০০ টাকা।

সমকক্ষদের তুলনায় এটি এখন যেখানে:

| পরিমাপ | লক্ষ্য | সমকক্ষ মানদণ্ড | প্রিমিয়াম/(ছাড়) |
|---|---|---|---|
| P/E | ১২.০০০০ | ১৪.০০০০ (মধ্যক) | **−১৪.২৯%** |
| P/E | ১২.০০০০ | ১৩.২৮৯৯ (হরাত্মক) | **−৯.৭১%** |
| EV/EBITDA | ৭.৯৪১২ | ৯.০০০০ (মধ্যক) | **−১১.৭৬%** |

তিনটিতেই ছাড়। প্রমিত ব্রোকার নোট এখানেই থামে ও একে অবমূল্যায়িত বলে। **এটি উপসংহার নয়। এটি প্রশ্নের সূচনা: ছাড়টি কি অর্জিত?**

**সমন্বয়গুলো বলছে হ্যাঁ।**

- প্রবৃদ্ধি: ৯% বনাম সমকক্ষ মধ্যক ১২% → $f_g = 0.7500$
- গুণমান (অধ্যায় ১৮): CFO/NI ০.৭০ বনাম সমকক্ষ মধ্যক ১.০৫ → $f_q = 0.6667$
- সমন্বিত P/E: $14.00 \\times 0.75 \\times 0.6667 = \\mathbf{7.00}$

| পদ্ধতি | গুণিতক | নিহিত দাম (টাকা) |
|---|---|---|
| মধ্যক P/E | ১৪.০০০০ | **১১২.০০** |
| হরাত্মক গড় P/E | ১৩.২৮৯৯ | **১০৬.৩২** |
| মধ্যক EV/EBITDA | ৯.০০০০ | **১১০.৪০** |
| হরাত্মক EV/EBITDA | ৮.২৭৮৬ | **১০০.৫৯** |
| **গুণমান- ও প্রবৃদ্ধি-সমন্বিত P/E** | **৭.০০০০** | **৫৬.০০** |

**পরিসর: ৫৬.০০ টাকা থেকে ১১২.০০ টাকা। মধ্যবিন্দু ৮৪.০০। প্রস্থ মধ্যবিন্দুর ৬৬.৬৭%।**

৯৬.০০ বাজার দাম ঐ বলয়ের ভেতরে বসে, নিচের চেয়ে ওপরের কাছাকাছি। **আপেক্ষিক মূল্যায়ন কোনো সংকেত ফেরত দেয়নি।** "ধরে রাখুন" নয় — *কোনো সংকেত নয়*। পদ্ধতিটি সঠিকভাবে চালানো হয়েছে এবং বাজার দামকে নিজের প্রাক্কলন থেকে আলাদা করতে অস্বীকার করেছে, কারণ তার নিজের প্রাক্কলনই দুই-থেকে-এক পরিসরে ছড়ানো।

সৎ আউটপুট এটিই। অসৎ আউটপুট হলো কেবল মধ্যক P/E লাইনটি উদ্ধৃত করা — ৯৬.০০ বাজার দামের বিপরীতে নিহিত ১১২.০০, অর্থাৎ ১৬.৭% ঊর্ধ্বমুখী সম্ভাবনা — আর ৫৬.০০ উৎপাদনকারী সমন্বিত লাইনটি চেপে যাওয়া।

### ধাপ চার: কঠোর সমকক্ষ গোষ্ঠী, এবং ফাঁদ

এবার কঠোর ব্যবসায়িক-মডেল ছাঁকনি প্রয়োগ করে P4 (পরিবেশক) ও P5 (সমষ্টি) বাদ দিন। তিনটি উৎপাদক থাকে: P1, P2, P3।

| | পূর্ণ গোষ্ঠী (n=৫) | মূল গোষ্ঠী (n=৩) |
|---|---|---|
| মধ্যক P/E | ১৪.০০০০ | ১৪.০০০০ |
| হরাত্মক P/E | ১৩.২৮৯৯ | ১৩.৭৬৮২ |
| **CV** | **০.৫২৮১** | **০.২৪৫০** |
| সমকক্ষ সংখ্যা | ৫ | **৩** |
| N কার্যকর (অধ্যায় ৮, শীর্ষ নাম ১৮%) | ৫.৫৬ | ৫.৫৬ |
| **রায়** | **কেবল পরিসর** | **অস্বীকার — সমকক্ষ অতি কম** |

**সারণিটি দুবার পড়ুন।** তুলনীয়তার জন্য সমকক্ষ গোষ্ঠী পরিষ্কার করায় বিস্তার অর্ধেকেরও বেশি কমেছে — CV ০.৫৩ থেকে ০.২৫, নির্ভরযোগ্যতার সীমার স্বাচ্ছন্দ্যে ভেতরে। **আর তা করতে গিয়েই নমুনার আকার ধ্বংস হয়েছে।**

**আপনি হয় তুলনীয়তা পেতে পারেন, নয়তো নমুনার আকার। ডিএসই-তে দুটি একসঙ্গে খুব কমই পাওয়া যায়।** এটি কৌশলের ব্যর্থতা নয়। এটি এমন একটি বাজারের কাঠামো যেখানে সাড়ে তিনশো তালিকাভুক্ত কোম্পানি ২০টি খাত-লেবেলে ছড়ানো, যাদের অধিকাংশে একটি মার্কিন শিল্প উপ-গোষ্ঠীর চেয়েও কম সত্যিকারের তুলনীয় ব্যবসা আছে।

### ধাপ পাঁচ: পাতলা গোষ্ঠী, যেখানে পদ্ধতিকে কেবল অস্বীকার করতে হবে

টেলিকম। দুটি তালিকাভুক্ত সমকক্ষ।

| কোম্পানি | দাম | EPS | P/E |
|---|---|---|---|
| T1 GP-ধাঁচ | ৩২০.০০ | ২০.০০ | **১৬.০০** |
| T2 ROBI-ধাঁচ | ৩৬.০০ | ১.৫০ | **২৪.০০** |

| পরিসংখ্যান | মান |
|---|---|
| মধ্যক P/E | ২০.০০০০ |
| গাণিতিক গড় P/E | ২০.০০০০ |
| হরাত্মক গড় P/E | ১৯.২০০০ |
| CV | ০.২৮২৮ |
| n | **২** |
| N কার্যকর (শীর্ষ নাম ৭৮%) | **১.২৮** |

**০.২৮ CV বিস্তার পরীক্ষায় উত্তীর্ণ।** উত্তীর্ণ হয় কারণ দুটি বিন্দু সর্বদাই নিজেদের গড়ের কাছাকাছি — $n = 2$-তে CV যান্ত্রিকভাবে সীমাবদ্ধ এবং প্রায় কোনো তথ্য বহন করে না। **এ কারণেই সংখ্যা-পরীক্ষা আগে প্রয়োগ করতে হবে এবং তা কঠোর থামার সংকেত হতে হবে।** কেবল বিস্তার ছাঁকনি থাকলে এই সমকক্ষ গোষ্ঠী পার পেয়ে যেত।

অধ্যায় ৮ থেকে $N_{eff} = 1.28$ দ্বিতীয় কঠোর থামার সংকেত। "খাত"টি একটি কোম্পানি, সঙ্গে একটি ছোট জুড়ে। **এখানে সমকক্ষ তুলনা কোনো তুলনা নয়। এটি একটি কোম্পানিকে নিজের বিপরীতে মূল্যায়ন করা।**

রায়: **সমকক্ষ গোষ্ঠী অতি পাতলা — মূল্যায়ন করতে অস্বীকার।** কোনো মধ্যক নেই, নিহিত দাম নেই, লক্ষ্যমূল্য নেই। একে নিজের নগদ প্রবাহ দিয়ে (অধ্যায় ২১), স্পষ্ট দেশ-সমন্বয়সহ আন্তর্জাতিক সমকক্ষ দিয়ে, অথবা একেবারেই মূল্যায়ন করবেন না।

**আর লক্ষ করুন এর মূল্য কী।** অস্বীকার মানে কিছুই প্রকাশ না করা, যখন একজন প্রতিযোগী পেছনে আত্মবিশ্বাসী দেখতে সারণিসহ ৮০.০০ টাকার লক্ষ্যমূল্য প্রকাশ করছেন। ঐ প্রতিযোগীর সংখ্যা আপনার চেয়ে ভালো নয়। **এটি আপনারই সংখ্যা, যার অস্বীকৃতিটুকু মুছে দেওয়া হয়েছে।**`,
    },

    formula: {
      en: `**Peer median multiple** — the robust central estimate:

$$M_{med} = \\text{median}\\left(M_1, M_2, \\ldots, M_n\\right)$$

**Harmonic mean P/E** — the correct aggregator, because a P/E is the reciprocal of an earnings yield:

$$\\overline{PE}_H = \\frac{n}{\\displaystyle\\sum_{i=1}^{n} \\frac{1}{PE_i}} = \\left[\\frac{1}{n}\\sum_{i=1}^{n} \\frac{E_i}{P_i}\\right]^{-1}$$

For any set with dispersion, $\\overline{PE}_H \\le \\text{median} \\le \\bar{PE}_A$ is the typical ordering, and $\\overline{PE}_H < \\bar{PE}_A$ always holds strictly unless every $PE_i$ is identical.

**Enterprise value:**

$$EV = \\text{Market Cap} + \\text{Total Debt} - \\text{Cash} = \\text{Market Cap} + \\text{Net Debt}$$

**Implied price from an equity multiple:**

$$P^{*} = EPS_{t} \\times M_{med}^{P/E}$$

**Implied price from an enterprise multiple** — subtract net debt, then divide by shares:

$$P^{*} = \\frac{EBITDA_{t} \\times M_{med}^{EV/EBITDA} - ND_{t}}{N_{shares}}$$

**Premium or discount to peers:**

$$\\Delta = \\frac{M_{target}}{M_{peer}} - 1$$

**Growth adjustment:**

$$f_g = \\frac{g_{target}}{g_{peer}}$$

**Earnings-quality adjustment** (Ch 18 cash conversion), capped at parity:

$$f_q = \\min\\left(1, \\; \\frac{(CFO/NI)_{target}}{(CFO/NI)_{peer}}\\right)$$

**Combined adjusted multiple:**

$$M_{adj} = M_{med} \\times f_g \\times f_q$$

**Dispersion of the peer set** — sample coefficient of variation:

$$CV = \\frac{s}{\\bar{M}}, \\qquad s = \\sqrt{\\frac{1}{n-1}\\sum_{i=1}^{n}\\left(M_i - \\bar{M}\\right)^2}$$

**Range width, expressed against its own midpoint:**

$$W = \\frac{P^{*}_{max} - P^{*}_{min}}{\\left(P^{*}_{max} + P^{*}_{min}\\right)/2}$$

**Effective number of names** (Chapter 8, load-bearing here):

$$N_{eff} \\approx \\frac{100}{w_{top}}$$

**The reliability test.** Relative valuation may return a point estimate only when all three hold:

$$n \\ge 4 \\quad\\text{and}\\quad N_{eff} \\ge 3 \\quad\\text{and}\\quad CV \\le 0.35$$

The first two are **hard stops** — failing either returns *no number at all*. Failing only the third returns a range, never a point. **The count test must be evaluated first, because with $n = 2$ the CV is mechanically small and will pass a dispersion screen that means nothing.**`,
      bn: `**সমকক্ষ মধ্যক গুণিতক** — দৃঢ় কেন্দ্রীয় প্রাক্কলন:

$$M_{med} = \\text{median}\\left(M_1, M_2, \\ldots, M_n\\right)$$

**হরাত্মক গড় P/E** — সঠিক সমষ্টিকারক, কারণ P/E হলো আয়-প্রতিফলের বিপরীত রাশি:

$$\\overline{PE}_H = \\frac{n}{\\displaystyle\\sum_{i=1}^{n} \\frac{1}{PE_i}} = \\left[\\frac{1}{n}\\sum_{i=1}^{n} \\frac{E_i}{P_i}\\right]^{-1}$$

বিস্তারযুক্ত যেকোনো গোষ্ঠীতে $\\overline{PE}_H \\le \\text{median} \\le \\bar{PE}_A$ সাধারণ ক্রম, এবং প্রতিটি $PE_i$ অভিন্ন না হলে $\\overline{PE}_H < \\bar{PE}_A$ সর্বদা কঠোরভাবে সত্য।

**এন্টারপ্রাইজ মূল্য:**

$$EV = \\text{বাজার মূলধন} + \\text{মোট ঋণ} - \\text{নগদ} = \\text{বাজার মূলধন} + \\text{নিট ঋণ}$$

**ইক্যুইটি গুণিতক থেকে নিহিত দাম:**

$$P^{*} = EPS_{t} \\times M_{med}^{P/E}$$

**এন্টারপ্রাইজ গুণিতক থেকে নিহিত দাম** — নিট ঋণ বিয়োগ করে শেয়ার দিয়ে ভাগ:

$$P^{*} = \\frac{EBITDA_{t} \\times M_{med}^{EV/EBITDA} - ND_{t}}{N_{shares}}$$

**সমকক্ষদের তুলনায় প্রিমিয়াম বা ছাড়:**

$$\\Delta = \\frac{M_{target}}{M_{peer}} - 1$$

**প্রবৃদ্ধি সমন্বয়:**

$$f_g = \\frac{g_{target}}{g_{peer}}$$

**আয়ের গুণমান সমন্বয়** (অধ্যায় ১৮ নগদ রূপান্তর), সমতায় সীমাবদ্ধ:

$$f_q = \\min\\left(1, \\; \\frac{(CFO/NI)_{target}}{(CFO/NI)_{peer}}\\right)$$

**সম্মিলিত সমন্বিত গুণিতক:**

$$M_{adj} = M_{med} \\times f_g \\times f_q$$

**সমকক্ষ গোষ্ঠীর বিস্তার** — নমুনা ভেদাঙ্ক:

$$CV = \\frac{s}{\\bar{M}}, \\qquad s = \\sqrt{\\frac{1}{n-1}\\sum_{i=1}^{n}\\left(M_i - \\bar{M}\\right)^2}$$

**পরিসরের প্রস্থ, নিজের মধ্যবিন্দুর সাপেক্ষে:**

$$W = \\frac{P^{*}_{max} - P^{*}_{min}}{\\left(P^{*}_{max} + P^{*}_{min}\\right)/2}$$

**কার্যকর নামের সংখ্যা** (অধ্যায় ৮, এখানে ভারবাহী):

$$N_{eff} \\approx \\frac{100}{w_{top}}$$

**নির্ভরযোগ্যতা পরীক্ষা।** আপেক্ষিক মূল্যায়ন কেবল তখনই একটি বিন্দু-প্রাক্কলন দিতে পারে যখন তিনটিই সত্য:

$$n \\ge 4 \\quad\\text{এবং}\\quad N_{eff} \\ge 3 \\quad\\text{এবং}\\quad CV \\le 0.35$$

প্রথম দুটি **কঠোর থামার সংকেত** — যেকোনো একটিতে ব্যর্থ হলে *কোনো সংখ্যাই* ফেরে না। কেবল তৃতীয়টিতে ব্যর্থ হলে একটি পরিসর ফেরে, কখনো বিন্দু নয়। **সংখ্যা-পরীক্ষা আগে যাচাই করতে হবে, কারণ $n = 2$-তে CV যান্ত্রিকভাবে ছোট থাকে এবং এমন একটি বিস্তার ছাঁকনিতে উত্তীর্ণ হয় যার কোনো অর্থ নেই।**`,
    },

    manual: {
      en: `### Part A — Compute each peer's multiples

All money in BDT crore; price and EPS in BDT.

**P1 (SQUARE-style).** Price 210.00, EPS 15.00, shares 10, net debt 150, EBITDA 250.
$$P/E = \\frac{210.00}{15.00} = 14.00$$
$$\\text{Mkt Cap} = 210.00 \\times 10 = 2{,}100 \\quad\\Rightarrow\\quad EV = 2{,}100 + 150 = 2{,}250$$
$$EV/EBITDA = \\frac{2{,}250}{250} = 9.00$$

**P2 (BXPHARMA-style).** Price 132.00, EPS 12.00, shares 10, net debt 80, EBITDA 200.
$$P/E = \\frac{132.00}{12.00} = 11.00 \\qquad EV = 1{,}320 + 80 = 1{,}400 \\qquad EV/EBITDA = \\frac{1{,}400}{200} = 7.00$$

**P3 (RENATA-style).** Price 720.00, EPS 40.00, shares 6, net debt 480, EBITDA 400.
$$P/E = \\frac{720.00}{40.00} = 18.00 \\qquad EV = 4{,}320 + 480 = 4{,}800 \\qquad EV/EBITDA = \\frac{4{,}800}{400} = 12.00$$

**P4 (IBNSINA-style).** Price 240.00, EPS 30.00, shares 4, net debt 300, EBITDA 210.
$$P/E = \\frac{240.00}{30.00} = 8.00 \\qquad EV = 960 + 300 = 1{,}260 \\qquad EV/EBITDA = \\frac{1{,}260}{210} = 6.00$$

**P5 (ACI-style).** Price 180.00, EPS 6.00, shares 8, net debt 1,260, EBITDA 270.
$$P/E = \\frac{180.00}{6.00} = 30.00 \\qquad EV = 1{,}440 + 1{,}260 = 2{,}700 \\qquad EV/EBITDA = \\frac{2{,}700}{270} = 10.00$$

**Stop and read the P5 line.** Net debt of 1,260 against EBITDA of 270 is 4.67× leverage. Its EV/EBITDA of 10.00 is unremarkable; its P/E of 30.00 is the highest in the set. **The multiple that includes debt says "normal." The multiple that ignores debt says "expensive." The difference between those two statements is the entire case for EV/EBITDA when leverage varies.**

---

### Part B — Aggregate the P/E set

Values: $\\{14.00,\\; 11.00,\\; 18.00,\\; 8.00,\\; 30.00\\}$. Sorted: $8.00,\\; 11.00,\\; 14.00,\\; 18.00,\\; 30.00$.

**Median** — third value of five:
$$M_{med} = \\mathbf{14.0000}$$

**Arithmetic mean:**
$$\\bar{PE}_A = \\frac{14 + 11 + 18 + 8 + 30}{5} = \\frac{81}{5} = \\mathbf{16.2000}$$

**Harmonic mean** — sum the reciprocals first:
$$\\frac{1}{14} = 0.0714286 \\qquad \\frac{1}{11} = 0.0909091 \\qquad \\frac{1}{18} = 0.0555556$$
$$\\frac{1}{8} = 0.1250000 \\qquad \\frac{1}{30} = 0.0333333$$
$$\\sum \\frac{1}{PE_i} = 0.3762266$$
$$\\overline{PE}_H = \\frac{5}{0.3762266} = \\mathbf{13.2899}$$

**Verify what the harmonic mean means.** Put BDT 100 into each of the five, BDT 500 total. Earnings purchased $= 100 \\times 0.3762266 = 37.62$. Portfolio P/E $= 500 / 37.62 = 13.29$. **That is the multiple you actually own. The arithmetic mean of 16.20 corresponds to no portfolio that exists.**

**Dispersion.** Deviations from the mean of 16.20:
$$-2.20,\\; -5.20,\\; +1.80,\\; -8.20,\\; +13.80$$
$$\\sum d^2 = 4.84 + 27.04 + 3.24 + 67.24 + 190.44 = 292.80$$
$$s^2 = \\frac{292.80}{5 - 1} = 73.2000 \\qquad s = 8.5557$$
$$CV = \\frac{8.5557}{16.2000} = \\mathbf{0.5281}$$

$0.5281 > 0.35$. **The dispersion test fails.** No point estimate is permitted from this set.

---

### Part C — Aggregate the EV/EBITDA set

Values: $\\{9.00,\\; 7.00,\\; 12.00,\\; 6.00,\\; 10.00\\}$. Sorted: $6.00,\\; 7.00,\\; 9.00,\\; 10.00,\\; 12.00$.

$$M_{med} = \\mathbf{9.0000} \\qquad \\bar{M}_A = \\frac{44}{5} = 8.8000$$

$$\\sum \\frac{1}{M_i} = 0.1111111 + 0.1428571 + 0.0833333 + 0.1666667 + 0.1000000 = 0.6039683$$
$$\\overline{M}_H = \\frac{5}{0.6039683} = \\mathbf{8.2786}$$

---

### Part D — Where the target trades today

**TGT Pharma.** Price 96.00; EPS 8.00; shares 25; net debt 300; EBITDA 340.

$$PE_{target} = \\frac{96.00}{8.00} = 12.0000$$
$$EV_{target} = 96.00 \\times 25 + 300 = 2{,}400 + 300 = 2{,}700$$
$$\\left(EV/EBITDA\\right)_{target} = \\frac{2{,}700}{340} = 7.9412$$

**Premium/discount:**
$$\\Delta_{P/E,\\,med} = \\frac{12.0000}{14.0000} - 1 = -0.142857 = \\mathbf{-14.29\\%}$$
$$\\Delta_{P/E,\\,harm} = \\frac{12.0000}{13.2899} - 1 = -0.097055 = \\mathbf{-9.71\\%}$$
$$\\Delta_{EV/EBITDA} = \\frac{7.9412}{9.0000} - 1 = -0.117647 = \\mathbf{-11.76\\%}$$

**Note how much the discount shrinks when you switch from the median to the correct aggregator** — from 14.29% to 9.71%. Two-fifths of the apparent discount was an artefact of choosing the median over the harmonic mean. Neither is wrong; the point is that the "discount to peers" headline is sensitive to a choice most notes never disclose.

---

### Part E — The adjustments

**Growth factor.** Peer revenue CAGRs: $\\{12\\%, 8\\%, 15\\%, 10\\%, 14\\%\\}$; sorted $8, 10, 12, 14, 15$; median $= 12\\%$.
$$f_g = \\frac{0.09}{0.12} = \\mathbf{0.7500}$$

**Quality factor.** Peer CFO/NI: $\\{1.15, 0.95, 1.05, 1.20, 0.80\\}$; sorted $0.80, 0.95, 1.05, 1.15, 1.20$; median $= 1.05$.
$$f_q = \\min\\left(1, \\frac{0.70}{1.05}\\right) = \\min(1,\\; 0.666667) = \\mathbf{0.6667}$$

**Adjusted multiple:**
$$M_{adj} = 14.0000 \\times 0.7500 \\times 0.666667 = \\mathbf{7.0000}$$

**The adjustment halved the multiple.** That is not an aggressive haircut — it is two independent deficiencies, each of roughly one-quarter to one-third, compounding. A business growing three-quarters as fast as its peers *and* converting two-thirds as much profit into cash is not worth the peer multiple, and pretending otherwise is where most retail target prices come from.

---

### Part F — Implied values and the range

$$P^{*}_{med\\,P/E} = 8.00 \\times 14.0000 = \\mathbf{112.00}$$
$$P^{*}_{harm\\,P/E} = 8.00 \\times 13.2899 = \\mathbf{106.32}$$
$$P^{*}_{med\\,EV} = \\frac{340 \\times 9.0000 - 300}{25} = \\frac{3{,}060 - 300}{25} = \\frac{2{,}760}{25} = \\mathbf{110.40}$$
$$P^{*}_{harm\\,EV} = \\frac{340 \\times 8.2786 - 300}{25} = \\frac{2{,}814.72 - 300}{25} = \\frac{2{,}514.72}{25} = \\mathbf{100.59}$$
$$P^{*}_{adj} = 8.00 \\times 7.0000 = \\mathbf{56.00}$$

**The range:**
$$P^{*}_{min} = 56.00 \\qquad P^{*}_{max} = 112.00$$
$$\\text{Midpoint} = \\frac{56.00 + 112.00}{2} = 84.00$$
$$W = \\frac{112.00 - 56.00}{84.00} = \\frac{56.00}{84.00} = 0.666667 = \\mathbf{66.67\\%}$$

**Market price 96.00 lies inside $[56.00,\\;112.00]$.** Output: **NO SIGNAL.**

---

### Part G — The reliability test, applied three times

**Full set (n = 5), pharmaceuticals, top holding 18% of sector cap:**

$$N_{eff} = \\frac{100}{18} = 5.56$$

| Test | Threshold | Value | Pass? |
|---|---|---|---|
| Peer count | $n \\ge 4$ | 5 | ✓ |
| Effective names (Ch 8) | $N_{eff} \\ge 3$ | 5.56 | ✓ |
| Dispersion | $CV \\le 0.35$ | 0.5281 | **✗** |

**Verdict: RANGE ONLY.** Both hard stops pass; the soft test fails. A range may be published; a point estimate may not.

---

**Core set (n = 3)** — P1, P2, P3 only. Values $\\{14.00, 11.00, 18.00\\}$.

$$M_{med} = 14.0000$$
$$\\sum \\frac{1}{PE_i} = 0.0714286 + 0.0909091 + 0.0555556 = 0.2178932 \\quad\\Rightarrow\\quad \\overline{PE}_H = \\frac{3}{0.2178932} = 13.7682$$
$$\\bar{PE}_A = \\frac{43}{3} = 14.3333$$
$$\\sum d^2 = (-0.3333)^2 + (-3.3333)^2 + (3.6667)^2 = 0.1111 + 11.1111 + 13.4444 = 24.6667$$
$$s = \\sqrt{\\frac{24.6667}{2}} = \\sqrt{12.3333} = 3.5119 \\qquad CV = \\frac{3.5119}{14.3333} = 0.2450$$

| Test | Threshold | Value | Pass? |
|---|---|---|---|
| Peer count | $n \\ge 4$ | **3** | **✗ hard stop** |
| Effective names | $N_{eff} \\ge 3$ | 5.56 | ✓ |
| Dispersion | $CV \\le 0.35$ | 0.2450 | ✓ |

**Verdict: PEER SET TOO THIN — REFUSING TO VALUE.**

**This is the chapter in one table.** The core set is *better* on every quality dimension — genuinely comparable businesses, dispersion cut from 0.53 to 0.25 — and it is **unusable**, because there are three of them. Improving comparability destroyed the sample. **On the DSE you can have comparability or you can have sample size. You will very rarely have both, and the discipline is to say so rather than pick whichever set produces the number you wanted.**

---

**Telecom set (n = 2)**, top holding 78% of sector cap. Values $\\{16.00, 24.00\\}$.

$$M_{med} = 20.0000 \\qquad \\bar{PE}_A = 20.0000$$
$$\\overline{PE}_H = \\frac{2}{\\frac{1}{16} + \\frac{1}{24}} = \\frac{2}{0.0625 + 0.0416667} = \\frac{2}{0.1041667} = 19.2000$$
$$s = \\sqrt{\\frac{(-4)^2 + (4)^2}{1}} = \\sqrt{32} = 5.6569 \\qquad CV = \\frac{5.6569}{20.0000} = 0.2828$$
$$N_{eff} = \\frac{100}{78} = 1.28$$

| Test | Threshold | Value | Pass? |
|---|---|---|---|
| Peer count | $n \\ge 4$ | **2** | **✗ hard stop** |
| Effective names (Ch 8) | $N_{eff} \\ge 3$ | **1.28** | **✗ hard stop** |
| Dispersion | $CV \\le 0.35$ | 0.2828 | ✓ |

**Verdict: PEER SET TOO THIN — REFUSING TO VALUE.**

**Look at the dispersion row.** $CV = 0.2828$ passes comfortably. It passes because with two observations each deviation is exactly half the gap between them, so the CV is bounded by construction and tells you nothing about the population. **A dispersion screen run alone would have waved through the least reliable peer set in this chapter.** That is why the count test comes first and is not negotiable.

**Discipline:** never publish an implied value from fewer than four genuine comparables, whatever the median says. The number the method refuses to give you is the most valuable output it has.`,
      bn: `### অংশ ক — প্রতিটি সমকক্ষের গুণিতক গণনা

সব অর্থ কোটি টাকায়; দাম ও EPS টাকায়।

**P1 (SQUARE-ধাঁচ)।** দাম ২১০.০০, EPS ১৫.০০, শেয়ার ১০, নিট ঋণ ১৫০, EBITDA ২৫০।
$$P/E = \\frac{210.00}{15.00} = 14.00$$
$$\\text{বাজার মূলধন} = 210.00 \\times 10 = 2{,}100 \\quad\\Rightarrow\\quad EV = 2{,}100 + 150 = 2{,}250$$
$$EV/EBITDA = \\frac{2{,}250}{250} = 9.00$$

**P2 (BXPHARMA-ধাঁচ)।** দাম ১৩২.০০, EPS ১২.০০, শেয়ার ১০, নিট ঋণ ৮০, EBITDA ২০০।
$$P/E = \\frac{132.00}{12.00} = 11.00 \\qquad EV = 1{,}320 + 80 = 1{,}400 \\qquad EV/EBITDA = \\frac{1{,}400}{200} = 7.00$$

**P3 (RENATA-ধাঁচ)।** দাম ৭২০.০০, EPS ৪০.০০, শেয়ার ৬, নিট ঋণ ৪৮০, EBITDA ৪০০।
$$P/E = \\frac{720.00}{40.00} = 18.00 \\qquad EV = 4{,}320 + 480 = 4{,}800 \\qquad EV/EBITDA = \\frac{4{,}800}{400} = 12.00$$

**P4 (IBNSINA-ধাঁচ)।** দাম ২৪০.০০, EPS ৩০.০০, শেয়ার ৪, নিট ঋণ ৩০০, EBITDA ২১০।
$$P/E = \\frac{240.00}{30.00} = 8.00 \\qquad EV = 960 + 300 = 1{,}260 \\qquad EV/EBITDA = \\frac{1{,}260}{210} = 6.00$$

**P5 (ACI-ধাঁচ)।** দাম ১৮০.০০, EPS ৬.০০, শেয়ার ৮, নিট ঋণ ১,২৬০, EBITDA ২৭০।
$$P/E = \\frac{180.00}{6.00} = 30.00 \\qquad EV = 1{,}440 + 1{,}260 = 2{,}700 \\qquad EV/EBITDA = \\frac{2{,}700}{270} = 10.00$$

**থামুন এবং P5 লাইনটি পড়ুন।** ২৭০ EBITDA-র বিপরীতে ১,২৬০ নিট ঋণ মানে ৪.৬৭× ঋণভার। এর ১০.০০ EV/EBITDA সাধারণ; এর ৩০.০০ P/E গোষ্ঠীর সর্বোচ্চ। **যে গুণিতক ঋণ অন্তর্ভুক্ত করে সে বলে "স্বাভাবিক"। যে গুণিতক ঋণ উপেক্ষা করে সে বলে "দামি"। ঋণভার ভিন্ন হলে EV/EBITDA-র পক্ষে পুরো যুক্তিটিই ঐ দুই বক্তব্যের পার্থক্য।**

---

### অংশ খ — P/E গোষ্ঠীর সমষ্টিকরণ

মান: $\\{14.00,\\; 11.00,\\; 18.00,\\; 8.00,\\; 30.00\\}$। সাজানো: $8.00,\\; 11.00,\\; 14.00,\\; 18.00,\\; 30.00$।

**মধ্যক** — পাঁচটির তৃতীয় মান:
$$M_{med} = \\mathbf{14.0000}$$

**গাণিতিক গড়:**
$$\\bar{PE}_A = \\frac{14 + 11 + 18 + 8 + 30}{5} = \\frac{81}{5} = \\mathbf{16.2000}$$

**হরাত্মক গড়** — আগে বিপরীত রাশিগুলো যোগ করুন:
$$\\frac{1}{14} = 0.0714286 \\qquad \\frac{1}{11} = 0.0909091 \\qquad \\frac{1}{18} = 0.0555556$$
$$\\frac{1}{8} = 0.1250000 \\qquad \\frac{1}{30} = 0.0333333$$
$$\\sum \\frac{1}{PE_i} = 0.3762266$$
$$\\overline{PE}_H = \\frac{5}{0.3762266} = \\mathbf{13.2899}$$

**হরাত্মক গড়ের অর্থ যাচাই করুন।** পাঁচটির প্রতিটিতে ১০০ টাকা রাখুন, মোট ৫০০ টাকা। কেনা আয় $= 100 \\times 0.3762266 = 37.62$। পোর্টফোলিও P/E $= 500 / 37.62 = 13.29$। **আপনি বাস্তবে এই গুণিতকটিরই মালিক। ১৬.২০ গাণিতিক গড় বিদ্যমান কোনো পোর্টফোলিওর সঙ্গে মেলে না।**

**বিস্তার।** ১৬.২০ গড় থেকে বিচ্যুতি:
$$-2.20,\\; -5.20,\\; +1.80,\\; -8.20,\\; +13.80$$
$$\\sum d^2 = 4.84 + 27.04 + 3.24 + 67.24 + 190.44 = 292.80$$
$$s^2 = \\frac{292.80}{5 - 1} = 73.2000 \\qquad s = 8.5557$$
$$CV = \\frac{8.5557}{16.2000} = \\mathbf{0.5281}$$

$0.5281 > 0.35$। **বিস্তার পরীক্ষা ব্যর্থ।** এই গোষ্ঠী থেকে কোনো বিন্দু-প্রাক্কলন অনুমোদিত নয়।

---

### অংশ গ — EV/EBITDA গোষ্ঠীর সমষ্টিকরণ

মান: $\\{9.00,\\; 7.00,\\; 12.00,\\; 6.00,\\; 10.00\\}$। সাজানো: $6.00,\\; 7.00,\\; 9.00,\\; 10.00,\\; 12.00$।

$$M_{med} = \\mathbf{9.0000} \\qquad \\bar{M}_A = \\frac{44}{5} = 8.8000$$

$$\\sum \\frac{1}{M_i} = 0.1111111 + 0.1428571 + 0.0833333 + 0.1666667 + 0.1000000 = 0.6039683$$
$$\\overline{M}_H = \\frac{5}{0.6039683} = \\mathbf{8.2786}$$

---

### অংশ ঘ — লক্ষ্য কোম্পানি আজ কোথায় লেনদেন হচ্ছে

**TGT Pharma।** দাম ৯৬.০০; EPS ৮.০০; শেয়ার ২৫; নিট ঋণ ৩০০; EBITDA ৩৪০।

$$PE_{target} = \\frac{96.00}{8.00} = 12.0000$$
$$EV_{target} = 96.00 \\times 25 + 300 = 2{,}400 + 300 = 2{,}700$$
$$\\left(EV/EBITDA\\right)_{target} = \\frac{2{,}700}{340} = 7.9412$$

**প্রিমিয়াম/ছাড়:**
$$\\Delta_{P/E,\\,med} = \\frac{12.0000}{14.0000} - 1 = -0.142857 = \\mathbf{-14.29\\%}$$
$$\\Delta_{P/E,\\,harm} = \\frac{12.0000}{13.2899} - 1 = -0.097055 = \\mathbf{-9.71\\%}$$
$$\\Delta_{EV/EBITDA} = \\frac{7.9412}{9.0000} - 1 = -0.117647 = \\mathbf{-11.76\\%}$$

**লক্ষ করুন মধ্যক থেকে সঠিক সমষ্টিকারকে গেলে ছাড় কতটা কমে যায়** — ১৪.২৯% থেকে ৯.৭১%। আপাত ছাড়ের দুই-পঞ্চমাংশ ছিল হরাত্মক গড়ের বদলে মধ্যক বেছে নেওয়ার কৃত্রিম ফল। কোনোটিই ভুল নয়; কথা হলো "সমকক্ষদের তুলনায় ছাড়" শিরোনামটি এমন একটি পছন্দের প্রতি সংবেদনশীল যা অধিকাংশ নোট কখনো প্রকাশ করে না।

---

### অংশ ঙ — সমন্বয়গুলো

**প্রবৃদ্ধি গুণক।** সমকক্ষদের রাজস্ব CAGR: $\\{12\\%, 8\\%, 15\\%, 10\\%, 14\\%\\}$; সাজানো $8, 10, 12, 14, 15$; মধ্যক $= 12\\%$।
$$f_g = \\frac{0.09}{0.12} = \\mathbf{0.7500}$$

**গুণমান গুণক।** সমকক্ষদের CFO/NI: $\\{1.15, 0.95, 1.05, 1.20, 0.80\\}$; সাজানো $0.80, 0.95, 1.05, 1.15, 1.20$; মধ্যক $= 1.05$।
$$f_q = \\min\\left(1, \\frac{0.70}{1.05}\\right) = \\min(1,\\; 0.666667) = \\mathbf{0.6667}$$

**সমন্বিত গুণিতক:**
$$M_{adj} = 14.0000 \\times 0.7500 \\times 0.666667 = \\mathbf{7.0000}$$

**সমন্বয় গুণিতকটিকে অর্ধেক করেছে।** এটি আগ্রাসী কাটছাঁট নয় — এটি দুটি স্বাধীন ঘাটতি, প্রত্যেকটি প্রায় এক-চতুর্থাংশ থেকে এক-তৃতীয়াংশ, যৌগিকভাবে কাজ করছে। যে ব্যবসা সমকক্ষদের তিন-চতুর্থাংশ গতিতে বাড়ে *এবং* দুই-তৃতীয়াংশ মুনাফা নগদে রূপান্তর করে, সে সমকক্ষ গুণিতক প্রাপ্য নয়, আর উল্টোটা ভান করা থেকেই অধিকাংশ খুচরা লক্ষ্যমূল্য আসে।

---

### অংশ চ — নিহিত মান ও পরিসর

$$P^{*}_{med\\,P/E} = 8.00 \\times 14.0000 = \\mathbf{112.00}$$
$$P^{*}_{harm\\,P/E} = 8.00 \\times 13.2899 = \\mathbf{106.32}$$
$$P^{*}_{med\\,EV} = \\frac{340 \\times 9.0000 - 300}{25} = \\frac{3{,}060 - 300}{25} = \\frac{2{,}760}{25} = \\mathbf{110.40}$$
$$P^{*}_{harm\\,EV} = \\frac{340 \\times 8.2786 - 300}{25} = \\frac{2{,}814.72 - 300}{25} = \\frac{2{,}514.72}{25} = \\mathbf{100.59}$$
$$P^{*}_{adj} = 8.00 \\times 7.0000 = \\mathbf{56.00}$$

**পরিসর:**
$$P^{*}_{min} = 56.00 \\qquad P^{*}_{max} = 112.00$$
$$\\text{মধ্যবিন্দু} = \\frac{56.00 + 112.00}{2} = 84.00$$
$$W = \\frac{112.00 - 56.00}{84.00} = \\frac{56.00}{84.00} = 0.666667 = \\mathbf{66.67\\%}$$

**বাজার দাম ৯৬.০০ $[56.00,\\;112.00]$-এর ভেতরে।** আউটপুট: **কোনো সংকেত নয়।**

---

### অংশ ছ — নির্ভরযোগ্যতা পরীক্ষা, তিনবার প্রযুক্ত

**পূর্ণ গোষ্ঠী (n = ৫), ওষুধ, শীর্ষ মালিকানা খাতের মূলধনের ১৮%:**

$$N_{eff} = \\frac{100}{18} = 5.56$$

| পরীক্ষা | সীমা | মান | উত্তীর্ণ? |
|---|---|---|---|
| সমকক্ষ সংখ্যা | $n \\ge 4$ | ৫ | ✓ |
| কার্যকর নাম (অধ্যায় ৮) | $N_{eff} \\ge 3$ | ৫.৫৬ | ✓ |
| বিস্তার | $CV \\le 0.35$ | ০.৫২৮১ | **✗** |

**রায়: কেবল পরিসর।** দুটি কঠোর থামার সংকেতই উত্তীর্ণ; নরম পরীক্ষাটি ব্যর্থ। পরিসর প্রকাশ করা যায়; বিন্দু-প্রাক্কলন নয়।

---

**মূল গোষ্ঠী (n = ৩)** — কেবল P1, P2, P3। মান $\\{14.00, 11.00, 18.00\\}$।

$$M_{med} = 14.0000$$
$$\\sum \\frac{1}{PE_i} = 0.0714286 + 0.0909091 + 0.0555556 = 0.2178932 \\quad\\Rightarrow\\quad \\overline{PE}_H = \\frac{3}{0.2178932} = 13.7682$$
$$\\bar{PE}_A = \\frac{43}{3} = 14.3333$$
$$\\sum d^2 = (-0.3333)^2 + (-3.3333)^2 + (3.6667)^2 = 0.1111 + 11.1111 + 13.4444 = 24.6667$$
$$s = \\sqrt{\\frac{24.6667}{2}} = \\sqrt{12.3333} = 3.5119 \\qquad CV = \\frac{3.5119}{14.3333} = 0.2450$$

| পরীক্ষা | সীমা | মান | উত্তীর্ণ? |
|---|---|---|---|
| সমকক্ষ সংখ্যা | $n \\ge 4$ | **৩** | **✗ কঠোর থামা** |
| কার্যকর নাম | $N_{eff} \\ge 3$ | ৫.৫৬ | ✓ |
| বিস্তার | $CV \\le 0.35$ | ০.২৪৫০ | ✓ |

**রায়: সমকক্ষ গোষ্ঠী অতি পাতলা — মূল্যায়নে অস্বীকার।**

**একটি সারণিতে পুরো অধ্যায়।** মূল গোষ্ঠীটি প্রতিটি গুণমান মাত্রায় *ভালো* — সত্যিকারের তুলনীয় ব্যবসা, বিস্তার ০.৫৩ থেকে ০.২৫-এ নামা — এবং এটি **অব্যবহার্য**, কারণ এরা তিনটি। তুলনীয়তা উন্নত করতে গিয়ে নমুনা ধ্বংস হয়েছে। **ডিএসই-তে আপনি হয় তুলনীয়তা পাবেন, নয়তো নমুনার আকার। দুটি একসঙ্গে খুব কমই পাবেন, আর শৃঙ্খলা হলো সেটি বলে দেওয়া — যে গোষ্ঠী আপনার চাওয়া সংখ্যাটি দেয় তাকে বেছে নেওয়া নয়।**

---

**টেলিকম গোষ্ঠী (n = ২)**, শীর্ষ মালিকানা খাতের মূলধনের ৭৮%। মান $\\{16.00, 24.00\\}$।

$$M_{med} = 20.0000 \\qquad \\bar{PE}_A = 20.0000$$
$$\\overline{PE}_H = \\frac{2}{\\frac{1}{16} + \\frac{1}{24}} = \\frac{2}{0.0625 + 0.0416667} = \\frac{2}{0.1041667} = 19.2000$$
$$s = \\sqrt{\\frac{(-4)^2 + (4)^2}{1}} = \\sqrt{32} = 5.6569 \\qquad CV = \\frac{5.6569}{20.0000} = 0.2828$$
$$N_{eff} = \\frac{100}{78} = 1.28$$

| পরীক্ষা | সীমা | মান | উত্তীর্ণ? |
|---|---|---|---|
| সমকক্ষ সংখ্যা | $n \\ge 4$ | **২** | **✗ কঠোর থামা** |
| কার্যকর নাম (অধ্যায় ৮) | $N_{eff} \\ge 3$ | **১.২৮** | **✗ কঠোর থামা** |
| বিস্তার | $CV \\le 0.35$ | ০.২৮২৮ | ✓ |

**রায়: সমকক্ষ গোষ্ঠী অতি পাতলা — মূল্যায়নে অস্বীকার।**

**বিস্তারের সারিটি দেখুন।** $CV = 0.2828$ স্বাচ্ছন্দ্যে উত্তীর্ণ। উত্তীর্ণ হয় কারণ দুটি পর্যবেক্ষণে প্রতিটি বিচ্যুতি ঠিক তাদের ব্যবধানের অর্ধেক, ফলে CV গঠনগতভাবেই সীমাবদ্ধ এবং জনসংখ্যা সম্পর্কে কিছুই বলে না। **কেবল বিস্তার ছাঁকনি চালালে এই অধ্যায়ের সবচেয়ে অনির্ভরযোগ্য সমকক্ষ গোষ্ঠীটিই পার পেয়ে যেত।** এ কারণেই সংখ্যা-পরীক্ষা আগে আসে এবং তা আলোচনাসাপেক্ষ নয়।

**শৃঙ্খলা:** মধ্যক যা-ই বলুক, চারটির কম প্রকৃত সমকক্ষ থেকে কখনো নিহিত মান প্রকাশ করবেন না। পদ্ধতিটি যে সংখ্যাটি দিতে অস্বীকার করে, সেটিই তার সবচেয়ে মূল্যবান আউটপুট।`,
    },

    excel: {
      en: `\`\`\`
PHARMA PEER SET — RELATIVE VALUATION (BDT crore; price & EPS in BDT)

     A                      B      C     D       E       F      G      H       I         J        K       L
 3   Company              Price   EPS  Shares  MktCap  NetDbt  EV   EBITDA   P/E    EV/EBITDA  CAGR   CFO/NI
 4   P1 SQUARE-style       210    15    10    =B4*D4   150  =E4+F4   250   =B4/C4   =G4/H4    0.12   1.15
 5   P2 BXPHARMA-style     132    12    10    =B5*D5    80  =E5+F5   200   =B5/C5   =G5/H5    0.08   0.95
 6   P3 RENATA-style       720    40     6    =B6*D6   480  =E6+F6   400   =B6/C6   =G6/H6    0.15   1.05
 7   P4 IBNSINA-style      240    30     4    =B7*D7   300  =E7+F7   210   =B7/C7   =G7/H7    0.10   1.20
 8   P5 ACI-style          180     6     8    =B8*D8  1260  =E8+F8   270   =B8/C8   =G8/H8    0.14   0.80

     — FULL SET AGGREGATION (n = 5) —
11   Median P/E                       =MEDIAN(I4:I8)
12   Arithmetic mean P/E (WRONG)      =AVERAGE(I4:I8)
13   Harmonic mean P/E (CORRECT)      =HARMEAN(I4:I8)
14   P/E dispersion CV                =STDEV.S(I4:I8)/AVERAGE(I4:I8)
15   Median EV/EBITDA                 =MEDIAN(J4:J8)
16   Harmonic EV/EBITDA               =HARMEAN(J4:J8)
17   Peer median Rev CAGR             =MEDIAN(K4:K8)
18   Peer median CFO/NI               =MEDIAN(L4:L8)

     — TARGET (TGT Pharma) —
21   EPS                8        24   EBITDA           340
22   Shares (cr)       25        25   Rev CAGR        0.09
23   Net debt         300        26   CFO/NI          0.70
                                 27   Market price      96
28   Target P/E                       =B27/B21
29   Target EV/EBITDA                 =(B27*B22+B23)/B24

     — PREMIUM / DISCOUNT —
32   vs median P/E                    =B28/B11-1
33   vs harmonic P/E                  =B28/B13-1
34   vs median EV/EBITDA              =B29/B15-1

     — IMPLIED VALUE PER SHARE —
37   via median P/E                   =B21*B11
38   via harmonic P/E                 =B21*B13
39   via median EV/EBITDA             =(B24*B15-B23)/B22
40   via harmonic EV/EBITDA           =(B24*B16-B23)/B22
41   Growth factor                    =B25/B17
42   Quality factor                   =MIN(1,B26/B18)
43   Adjusted P/E                     =B11*B41*B42
44   via adjusted P/E                 =B21*B43

     — RANGE —
47   Low                              =MIN(B37:B40,B44)
48   High                             =MAX(B37:B40,B44)
49   Midpoint                         =(B47+B48)/2
50   Width as % of midpoint           =(B48-B47)/B49
51   Price vs range
     =IF(B27<B47,"BELOW RANGE",IF(B27>B48,"ABOVE RANGE","INSIDE RANGE — NO SIGNAL"))

     — RELIABILITY TEST —
54   Peer count n                     =COUNT(I4:I8)
55   Top holding % of sector cap      18
56   N effective (Ch 8)               =100/B55
57   VERDICT
     =IF(B54<4,"REFUSE — peer set too thin",
        IF(B56<3,"REFUSE — sector is a single-name bet",
           IF(B14>0.35,"RANGE ONLY — dispersion too high","USABLE POINT ESTIMATE")))

     — CORE SET: business-model comparable only (rows 4–6) —
60   Peer count n                     =COUNT(I4:I6)
61   Median P/E                       =MEDIAN(I4:I6)
62   Harmonic P/E                     =HARMEAN(I4:I6)
63   CV                               =STDEV.S(I4:I6)/AVERAGE(I4:I6)
64   VERDICT
     =IF(B60<4,"REFUSE — fewer than 4 comparables",
        IF(B63>0.35,"RANGE ONLY","USABLE POINT ESTIMATE"))
\`\`\`

**\`HARMEAN\` is the function almost nobody uses and everybody should.** Excel ships it; it is one keystroke longer than \`AVERAGE\` and it is the difference between 13.2899 and 16.2000 on this data. If your peer template contains \`AVERAGE\` over a P/E column, that template has a bug.

**Row 14 is the row that stops you.** Most published peer tables show a median and nothing else. Adding one cell — standard deviation over mean — converts an apparently precise 14.00× into "the peers scatter by half their own mean, and this median is decoration."

**Rows 57 and 64 must be text, not colour-coding.** A conditional format that turns a cell amber is ignored. A cell that reads REFUSE — peer set too thin, sitting where a target price would otherwise be, is not.

**To turn this into a working screen:** replicate rows 3–8 down as far as your candidate list runs, then put the four filters of §22.1 in columns M through P as TRUE/FALSE, and drive rows 11–18 off a \`MEDIAN(IF(...))\` array over only the rows where all four are TRUE. **The count in row 54 must then read that filtered count, not the raw row count.** The whole discipline of this chapter lives in whether row 54 counts what survived or what you started with.`,
      bn: `\`\`\`
ওষুধ সমকক্ষ গোষ্ঠী — আপেক্ষিক মূল্যায়ন (কোটি টাকা; দাম ও EPS টাকায়)

     A                      B      C     D       E       F      G      H       I         J        K       L
 3   কোম্পানি              দাম    EPS  শেয়ার  মূলধন   নিটঋণ   EV   EBITDA   P/E    EV/EBITDA  CAGR   CFO/NI
 4   P1 SQUARE-ধাঁচ        210    15    10    =B4*D4   150  =E4+F4   250   =B4/C4   =G4/H4    0.12   1.15
 5   P2 BXPHARMA-ধাঁচ      132    12    10    =B5*D5    80  =E5+F5   200   =B5/C5   =G5/H5    0.08   0.95
 6   P3 RENATA-ধাঁচ        720    40     6    =B6*D6   480  =E6+F6   400   =B6/C6   =G6/H6    0.15   1.05
 7   P4 IBNSINA-ধাঁচ       240    30     4    =B7*D7   300  =E7+F7   210   =B7/C7   =G7/H7    0.10   1.20
 8   P5 ACI-ধাঁচ           180     6     8    =B8*D8  1260  =E8+F8   270   =B8/C8   =G8/H8    0.14   0.80

     — পূর্ণ গোষ্ঠীর সমষ্টিকরণ (n = ৫) —
11   মধ্যক P/E                        =MEDIAN(I4:I8)
12   গাণিতিক গড় P/E (ভুল)            =AVERAGE(I4:I8)
13   হরাত্মক গড় P/E (সঠিক)           =HARMEAN(I4:I8)
14   P/E বিস্তার CV                   =STDEV.S(I4:I8)/AVERAGE(I4:I8)
15   মধ্যক EV/EBITDA                  =MEDIAN(J4:J8)
16   হরাত্মক EV/EBITDA                =HARMEAN(J4:J8)
17   সমকক্ষ মধ্যক রাজস্ব CAGR          =MEDIAN(K4:K8)
18   সমকক্ষ মধ্যক CFO/NI              =MEDIAN(L4:L8)

     — লক্ষ্য (TGT Pharma) —
21   EPS                8        24   EBITDA           340
22   শেয়ার (কোটি)      25        25   রাজস্ব CAGR      0.09
23   নিট ঋণ           300        26   CFO/NI          0.70
                                 27   বাজার দাম          96
28   লক্ষ্যের P/E                      =B27/B21
29   লক্ষ্যের EV/EBITDA                =(B27*B22+B23)/B24

     — প্রিমিয়াম / ছাড় —
32   মধ্যক P/E-র বিপরীতে              =B28/B11-1
33   হরাত্মক P/E-র বিপরীতে            =B28/B13-1
34   মধ্যক EV/EBITDA-র বিপরীতে        =B29/B15-1

     — প্রতি শেয়ার নিহিত মান —
37   মধ্যক P/E দিয়ে                   =B21*B11
38   হরাত্মক P/E দিয়ে                 =B21*B13
39   মধ্যক EV/EBITDA দিয়ে             =(B24*B15-B23)/B22
40   হরাত্মক EV/EBITDA দিয়ে           =(B24*B16-B23)/B22
41   প্রবৃদ্ধি গুণক                    =B25/B17
42   গুণমান গুণক                      =MIN(1,B26/B18)
43   সমন্বিত P/E                      =B11*B41*B42
44   সমন্বিত P/E দিয়ে                 =B21*B43

     — পরিসর —
47   সর্বনিম্ন                        =MIN(B37:B40,B44)
48   সর্বোচ্চ                         =MAX(B37:B40,B44)
49   মধ্যবিন্দু                        =(B47+B48)/2
50   মধ্যবিন্দুর % হিসেবে প্রস্থ        =(B48-B47)/B49
51   দাম বনাম পরিসর
     =IF(B27<B47,"BELOW RANGE",IF(B27>B48,"ABOVE RANGE","INSIDE RANGE — NO SIGNAL"))

     — নির্ভরযোগ্যতা পরীক্ষা —
54   সমকক্ষ সংখ্যা n                   =COUNT(I4:I8)
55   খাতের মূলধনে শীর্ষ মালিকানা %     18
56   N কার্যকর (অধ্যায় ৮)             =100/B55
57   রায়
     =IF(B54<4,"REFUSE — peer set too thin",
        IF(B56<3,"REFUSE — sector is a single-name bet",
           IF(B14>0.35,"RANGE ONLY — dispersion too high","USABLE POINT ESTIMATE")))

     — মূল গোষ্ঠী: কেবল ব্যবসায়িক-মডেল তুলনীয় (সারি ৪–৬) —
60   সমকক্ষ সংখ্যা n                   =COUNT(I4:I6)
61   মধ্যক P/E                        =MEDIAN(I4:I6)
62   হরাত্মক P/E                      =HARMEAN(I4:I6)
63   CV                               =STDEV.S(I4:I6)/AVERAGE(I4:I6)
64   রায়
     =IF(B60<4,"REFUSE — fewer than 4 comparables",
        IF(B63>0.35,"RANGE ONLY","USABLE POINT ESTIMATE"))
\`\`\`

**\`HARMEAN\` সেই ফাংশন যা প্রায় কেউ ব্যবহার করেন না অথচ সবার করা উচিত।** এক্সেলে এটি আছে; \`AVERAGE\`-এর চেয়ে এক কি-স্ট্রোক বেশি, আর এই তথ্যে ১৩.২৮৯৯ ও ১৬.২০০০-এর পার্থক্য এটিই। আপনার সমকক্ষ টেমপ্লেটে P/E কলামের ওপর \`AVERAGE\` থাকলে ঐ টেমপ্লেটে একটি বাগ আছে।

**সারি ১৪ সেই সারি যা আপনাকে থামায়।** অধিকাংশ প্রকাশিত সমকক্ষ সারণি কেবল একটি মধ্যক দেখায়, আর কিছু নয়। একটি কোষ যোগ করলে — গড়ের ওপর পরিমিত ব্যবধান — আপাত-নিখুঁত ১৪.০০× পরিণত হয় "সমকক্ষরা নিজেদের গড়ের অর্ধেক ছড়িয়ে আছে, আর এই মধ্যক অলংকার"-এ।

**সারি ৫৭ ও ৬৪ অবশ্যই লেখা হতে হবে, রং-সংকেত নয়।** যে শর্তসাপেক্ষ ফরম্যাট কোষকে হলুদ করে তা উপেক্ষিত হয়। যেখানে লক্ষ্যমূল্য থাকার কথা সেখানে বসে থাকা "REFUSE — peer set too thin" লেখা কোষ উপেক্ষিত হয় না।

**একে কার্যকর স্ক্রিনে পরিণত করতে:** আপনার প্রার্থী তালিকা যত দূর যায় সারি ৩–৮ ততদূর প্রতিলিপি করুন, তারপর §২২.১-এর চারটি ছাঁকনি M থেকে P কলামে TRUE/FALSE হিসেবে বসান, এবং কেবল যেসব সারিতে চারটিই TRUE সেগুলোর ওপর \`MEDIAN(IF(...))\` অ্যারে দিয়ে সারি ১১–১৮ চালান। **তখন সারি ৫৪-র সংখ্যাটি ঐ ছাঁকা সংখ্যা পড়তে হবে, কাঁচা সারি সংখ্যা নয়।** এই অধ্যায়ের পুরো শৃঙ্খলা নির্ভর করে সারি ৫৪ কী গোনে — যা টিকেছে, না যা দিয়ে শুরু করেছিলেন।`,
    },

    python: {
      en: `\`\`\`python
"""
Chapter 22 - Relative valuation and peer comparison.
Educational. Pure standard library.
"""
from dataclasses import dataclass
from statistics import median, mean, stdev, harmonic_mean
from typing import List, Dict

MIN_PEERS = 4          # fewer than this and the median is an anecdote
MAX_CV = 0.35          # dispersion ceiling for a point estimate
MIN_EFF_NAMES = 3.0    # Chapter 8 concentration floor


@dataclass
class Comparable:
    """One listed peer. Money in BDT crore, price and EPS in BDT."""
    name: str
    price: float
    eps: float
    shares_cr: float
    net_debt: float
    ebitda: float
    rev_cagr: float
    cfo_to_ni: float

    @property
    def market_cap(self) -> float:
        return self.price * self.shares_cr

    @property
    def ev(self) -> float:
        return self.market_cap + self.net_debt

    @property
    def pe(self) -> float:
        return self.price / self.eps

    @property
    def ev_ebitda(self) -> float:
        return self.ev / self.ebitda


@dataclass
class Target:
    """The company being valued."""
    name: str
    price: float
    eps: float
    shares_cr: float
    net_debt: float
    ebitda: float
    rev_cagr: float
    cfo_to_ni: float

    @property
    def pe(self) -> float:
        return self.price / self.eps

    @property
    def ev(self) -> float:
        return self.price * self.shares_cr + self.net_debt

    @property
    def ev_ebitda(self) -> float:
        return self.ev / self.ebitda


class PeerSet:
    """A candidate peer group, plus the tests that decide whether it may be used."""

    def __init__(self, label: str, peers: List[Comparable], top_holding_pct: float):
        self.label = label
        self.peers = peers
        self.top_holding_pct = top_holding_pct

    @property
    def n(self) -> int:
        return len(self.peers)

    @property
    def effective_names(self) -> float:
        """Chapter 8: N_eff = 100 / top-holding %. Below 3 the sector is not a sector."""
        return 100.0 / self.top_holding_pct

    def _pe(self) -> List[float]:
        return [p.pe for p in self.peers]

    def _ee(self) -> List[float]:
        return [p.ev_ebitda for p in self.peers]

    def median_pe(self) -> float:
        return median(self._pe())

    def mean_pe(self) -> float:
        return mean(self._pe())

    def harmonic_pe(self) -> float:
        """Correct aggregator for P/E: inverts to the average earnings yield."""
        return harmonic_mean(self._pe())

    def cv_pe(self) -> float:
        if self.n < 2:
            return float("inf")
        return stdev(self._pe()) / mean(self._pe())

    def median_ev_ebitda(self) -> float:
        return median(self._ee())

    def harmonic_ev_ebitda(self) -> float:
        return harmonic_mean(self._ee())

    def median_growth(self) -> float:
        return median([p.rev_cagr for p in self.peers])

    def median_quality(self) -> float:
        return median([p.cfo_to_ni for p in self.peers])

    def reliability(self):
        """Returns (verdict, reasons). Count and concentration are hard stops."""
        hard, soft = [], []
        if self.n < MIN_PEERS:
            hard.append("only %d comparables, need %d" % (self.n, MIN_PEERS))
        if self.effective_names < MIN_EFF_NAMES:
            hard.append("N_eff %.2f below %.1f (Ch 8)" % (self.effective_names, MIN_EFF_NAMES))
        cv = self.cv_pe()
        if cv > MAX_CV:
            soft.append("P/E dispersion CV %.4f above %.2f" % (cv, MAX_CV))
        if hard:
            return "PEER SET TOO THIN", hard + soft
        if soft:
            return "RANGE ONLY", soft
        return "USABLE POINT ESTIMATE", []

    def implied_values(self, t: Target) -> Dict:
        verdict, reasons = self.reliability()
        if verdict == "PEER SET TOO THIN":
            return {"status": "PEER SET TOO THIN - REFUSING TO VALUE",
                    "reasons": reasons, "values": {}}

        g_factor = t.rev_cagr / self.median_growth()
        q_factor = min(1.0, t.cfo_to_ni / self.median_quality())
        adj_pe = self.median_pe() * g_factor * q_factor

        vals = {
            "median P/E": t.eps * self.median_pe(),
            "harmonic-mean P/E": t.eps * self.harmonic_pe(),
            "median EV/EBITDA": (t.ebitda * self.median_ev_ebitda() - t.net_debt) / t.shares_cr,
            "harmonic EV/EBITDA": (t.ebitda * self.harmonic_ev_ebitda() - t.net_debt) / t.shares_cr,
            "quality+growth adj P/E": t.eps * adj_pe,
        }
        lo, hi = min(vals.values()), max(vals.values())
        mid = (lo + hi) / 2.0
        return {"status": verdict, "reasons": reasons, "values": vals,
                "growth_factor": g_factor, "quality_factor": q_factor,
                "adjusted_pe": adj_pe,
                "low": lo, "high": hi, "midpoint": mid, "width": (hi - lo) / mid}


def premium(target_multiple: float, peer_multiple: float) -> float:
    return target_multiple / peer_multiple - 1.0


if __name__ == "__main__":
    pharma = [
        Comparable("P1 SQUARE-style", 210.0, 15.0, 10.0, 150.0, 250.0, 0.12, 1.15),
        Comparable("P2 BXPHARMA-style", 132.0, 12.0, 10.0, 80.0, 200.0, 0.08, 0.95),
        Comparable("P3 RENATA-style", 720.0, 40.0, 6.0, 480.0, 400.0, 0.15, 1.05),
        Comparable("P4 IBNSINA-style", 240.0, 30.0, 4.0, 300.0, 210.0, 0.10, 1.20),
        Comparable("P5 ACI-style", 180.0, 6.0, 8.0, 1260.0, 270.0, 0.14, 0.80),
    ]
    tgt = Target("TGT Pharma", price=96.0, eps=8.0, shares_cr=25.0,
                 net_debt=300.0, ebitda=340.0, rev_cagr=0.09, cfo_to_ni=0.70)

    print("=== PHARMA PEER SET (BDT crore; price and EPS in BDT) ===")
    print("%-18s%9s%8s%10s%10s%9s%10s%9s%9s" %
          ("COMPANY", "Price", "EPS", "MktCap", "NetDebt", "EBITDA", "EV", "P/E", "EV/EBI"))
    for p in pharma:
        print("%-18s%9.2f%8.2f%10.0f%10.0f%9.0f%10.0f%9.2f%9.2f" %
              (p.name, p.price, p.eps, p.market_cap, p.net_debt, p.ebitda,
               p.ev, p.pe, p.ev_ebitda))

    full = PeerSet("FULL SET", pharma, top_holding_pct=18.0)

    print()
    print("=== AGGREGATION: three ways to average a P/E ===")
    print("Median P/E          : %8.4f" % full.median_pe())
    print("Arithmetic mean P/E : %8.4f   <- wrong aggregator" % full.mean_pe())
    print("Harmonic mean P/E   : %8.4f   <- correct aggregator" % full.harmonic_pe())
    print("Median EV/EBITDA    : %8.4f" % full.median_ev_ebitda())
    print("Harmonic EV/EBITDA  : %8.4f" % full.harmonic_ev_ebitda())
    print("P/E dispersion CV   : %8.4f" % full.cv_pe())
    print("N_eff (Ch 8)        : %8.2f" % full.effective_names)

    print()
    print("=== TARGET vs PEERS: premium / discount ===")
    print("Target P/E       %7.4f  vs median   %7.4f  -> %+7.2f%%" %
          (tgt.pe, full.median_pe(), premium(tgt.pe, full.median_pe()) * 100))
    print("Target P/E       %7.4f  vs harmonic %7.4f  -> %+7.2f%%" %
          (tgt.pe, full.harmonic_pe(), premium(tgt.pe, full.harmonic_pe()) * 100))
    print("Target EV/EBITDA %7.4f  vs median   %7.4f  -> %+7.2f%%" %
          (tgt.ev_ebitda, full.median_ev_ebitda(),
           premium(tgt.ev_ebitda, full.median_ev_ebitda()) * 100))

    print()
    print("=== IMPLIED VALUE, FULL SET (n=5) ===")
    r = full.implied_values(tgt)
    print("Status: %s" % r["status"])
    for why in r["reasons"]:
        print("  reason: %s" % why)
    print("Growth factor %.4f | Quality factor %.4f | Adjusted P/E %.4f" %
          (r["growth_factor"], r["quality_factor"], r["adjusted_pe"]))
    for k in ["median P/E", "harmonic-mean P/E", "median EV/EBITDA",
              "harmonic EV/EBITDA", "quality+growth adj P/E"]:
        print("  %-24s BDT %8.2f" % (k, r["values"][k]))
    print("Range BDT %.2f to BDT %.2f | midpoint BDT %.2f | width %.2f%% of midpoint" %
          (r["low"], r["high"], r["midpoint"], r["width"] * 100))
    inside = r["low"] <= tgt.price <= r["high"]
    print("Market price BDT %.2f is %s the range -> %s" %
          (tgt.price, "INSIDE" if inside else "OUTSIDE",
           "NO SIGNAL" if inside else "SIGNAL"))

    print()
    print("=== CORE SET: business-model comparable only (n=3) ===")
    core = PeerSet("CORE SET", pharma[:3], top_holding_pct=18.0)
    print("Median P/E %.4f | Harmonic P/E %.4f | CV %.4f | n=%d" %
          (core.median_pe(), core.harmonic_pe(), core.cv_pe(), core.n))
    rc = core.implied_values(tgt)
    print("Status: %s" % rc["status"])
    for why in rc["reasons"]:
        print("  reason: %s" % why)

    print()
    print("=== THIN SET: telecom, two comparables ===")
    telecom = [
        Comparable("T1 GP-style", 320.0, 20.0, 135.0, 3000.0, 12000.0, 0.05, 1.30),
        Comparable("T2 ROBI-style", 36.0, 1.50, 523.0, 4000.0, 5000.0, 0.06, 1.25),
    ]
    thin = PeerSet("TELECOM", telecom, top_holding_pct=78.0)
    tgt_t = Target("TGT Telecom", price=88.0, eps=4.0, shares_cr=50.0,
                   net_debt=500.0, ebitda=900.0, rev_cagr=0.04, cfo_to_ni=1.20)
    print("Peer P/E values: %s" % ", ".join("%.2f" % p.pe for p in telecom))
    print("Median %.4f | Mean %.4f | Harmonic %.4f | CV %.4f | n=%d | N_eff %.2f" %
          (thin.median_pe(), thin.mean_pe(), thin.harmonic_pe(),
           thin.cv_pe(), thin.n, thin.effective_names))
    rt = thin.implied_values(tgt_t)
    print("Status: %s" % rt["status"])
    for why in rt["reasons"]:
        print("  reason: %s" % why)
    print("Implied values returned: %d" % len(rt["values"]))
\`\`\`

**Expected output:**

\`\`\`text
=== PHARMA PEER SET (BDT crore; price and EPS in BDT) ===
COMPANY               Price     EPS    MktCap   NetDebt   EBITDA        EV      P/E   EV/EBI
P1 SQUARE-style      210.00   15.00      2100       150      250      2250    14.00     9.00
P2 BXPHARMA-style    132.00   12.00      1320        80      200      1400    11.00     7.00
P3 RENATA-style      720.00   40.00      4320       480      400      4800    18.00    12.00
P4 IBNSINA-style     240.00   30.00       960       300      210      1260     8.00     6.00
P5 ACI-style         180.00    6.00      1440      1260      270      2700    30.00    10.00

=== AGGREGATION: three ways to average a P/E ===
Median P/E          :  14.0000
Arithmetic mean P/E :  16.2000   <- wrong aggregator
Harmonic mean P/E   :  13.2899   <- correct aggregator
Median EV/EBITDA    :   9.0000
Harmonic EV/EBITDA  :   8.2786
P/E dispersion CV   :   0.5281
N_eff (Ch 8)        :     5.56

=== TARGET vs PEERS: premium / discount ===
Target P/E       12.0000  vs median   14.0000  ->  -14.29%
Target P/E       12.0000  vs harmonic 13.2899  ->   -9.71%
Target EV/EBITDA  7.9412  vs median    9.0000  ->  -11.76%

=== IMPLIED VALUE, FULL SET (n=5) ===
Status: RANGE ONLY
  reason: P/E dispersion CV 0.5281 above 0.35
Growth factor 0.7500 | Quality factor 0.6667 | Adjusted P/E 7.0000
  median P/E               BDT   112.00
  harmonic-mean P/E        BDT   106.32
  median EV/EBITDA         BDT   110.40
  harmonic EV/EBITDA       BDT   100.59
  quality+growth adj P/E   BDT    56.00
Range BDT 56.00 to BDT 112.00 | midpoint BDT 84.00 | width 66.67% of midpoint
Market price BDT 96.00 is INSIDE the range -> NO SIGNAL

=== CORE SET: business-model comparable only (n=3) ===
Median P/E 14.0000 | Harmonic P/E 13.7682 | CV 0.2450 | n=3
Status: PEER SET TOO THIN - REFUSING TO VALUE
  reason: only 3 comparables, need 4

=== THIN SET: telecom, two comparables ===
Peer P/E values: 16.00, 24.00
Median 20.0000 | Mean 20.0000 | Harmonic 19.2000 | CV 0.2828 | n=2 | N_eff 1.28
Status: PEER SET TOO THIN - REFUSING TO VALUE
  reason: only 2 comparables, need 4
  reason: N_eff 1.28 below 3.0 (Ch 8)
Implied values returned: 0
\`\`\`

**The last line of each thin-set block is the design decision that matters.** \`implied_values\` returns an empty dictionary. It does not return a median with a warning attached, because a warning attached to a number is read as the number. **A function that can only ever return a number will eventually be asked to value two comparables, and it will comply.**

**Note that the core set is better on every quality measure and still refuses.** CV falls from 0.5281 to 0.2450 once the distributor and the conglomerate are removed — genuinely more comparable businesses — and \`reliability()\` still returns PEER SET TOO THIN, because \`n = 3\`. **Improving comparability destroyed the sample.** That trade-off is not a bug in the code; it is the structure of the DSE, rendered as a control-flow branch.

**And note the telecom CV of 0.2828 passing.** With two observations the coefficient of variation is bounded by construction and carries no information about the population. This is why \`reliability()\` evaluates \`hard\` before \`soft\` and returns on \`hard\` unconditionally. **Reorder those two checks and the function becomes an instrument for valuing single-name sectors.**

**To extend this to a real screen:** wrap the four filters of §22.1 as predicates, build \`PeerSet\` from the survivors only, and log every excluded name with the reason. The exclusion log is the deliverable. A peer set whose construction cannot be reconstructed from a log is a peer set someone chose to produce a number.`,
      bn: `\`\`\`python
"""
অধ্যায় ২২ — আপেক্ষিক মূল্যায়ন ও সমকক্ষ তুলনা।
শিক্ষামূলক। কেবল স্ট্যান্ডার্ড লাইব্রেরি।
"""
from dataclasses import dataclass
from statistics import median, mean, stdev, harmonic_mean
from typing import List, Dict

MIN_PEERS = 4          # এর কম হলে মধ্যক একটি উপাখ্যান মাত্র
MAX_CV = 0.35          # বিন্দু-প্রাক্কলনের জন্য বিস্তারের ঊর্ধ্বসীমা
MIN_EFF_NAMES = 3.0    # অধ্যায় ৮-এর কেন্দ্রীভবন মেঝে


@dataclass
class Comparable:
    """একটি তালিকাভুক্ত সমকক্ষ। অর্থ কোটি টাকায়, দাম ও EPS টাকায়।"""
    name: str
    price: float
    eps: float
    shares_cr: float
    net_debt: float
    ebitda: float
    rev_cagr: float
    cfo_to_ni: float

    @property
    def market_cap(self) -> float:
        return self.price * self.shares_cr

    @property
    def ev(self) -> float:
        return self.market_cap + self.net_debt

    @property
    def pe(self) -> float:
        return self.price / self.eps

    @property
    def ev_ebitda(self) -> float:
        return self.ev / self.ebitda


@dataclass
class Target:
    """যে কোম্পানিকে মূল্যায়ন করা হচ্ছে।"""
    name: str
    price: float
    eps: float
    shares_cr: float
    net_debt: float
    ebitda: float
    rev_cagr: float
    cfo_to_ni: float

    @property
    def pe(self) -> float:
        return self.price / self.eps

    @property
    def ev(self) -> float:
        return self.price * self.shares_cr + self.net_debt

    @property
    def ev_ebitda(self) -> float:
        return self.ev / self.ebitda


class PeerSet:
    """একটি সম্ভাব্য সমকক্ষ গোষ্ঠী, সঙ্গে এটি ব্যবহারযোগ্য কি না তা নির্ধারণকারী পরীক্ষা।"""

    def __init__(self, label: str, peers: List[Comparable], top_holding_pct: float):
        self.label = label
        self.peers = peers
        self.top_holding_pct = top_holding_pct

    @property
    def n(self) -> int:
        return len(self.peers)

    @property
    def effective_names(self) -> float:
        """অধ্যায় ৮: N_eff = 100 / শীর্ষ মালিকানার %। ৩-এর নিচে খাত আর খাত নয়।"""
        return 100.0 / self.top_holding_pct

    def _pe(self) -> List[float]:
        return [p.pe for p in self.peers]

    def _ee(self) -> List[float]:
        return [p.ev_ebitda for p in self.peers]

    def median_pe(self) -> float:
        return median(self._pe())

    def mean_pe(self) -> float:
        return mean(self._pe())

    def harmonic_pe(self) -> float:
        """P/E-র সঠিক সমষ্টিকারক: গড় আয়-প্রতিফলে বিপরীত হয়।"""
        return harmonic_mean(self._pe())

    def cv_pe(self) -> float:
        if self.n < 2:
            return float("inf")
        return stdev(self._pe()) / mean(self._pe())

    def median_ev_ebitda(self) -> float:
        return median(self._ee())

    def harmonic_ev_ebitda(self) -> float:
        return harmonic_mean(self._ee())

    def median_growth(self) -> float:
        return median([p.rev_cagr for p in self.peers])

    def median_quality(self) -> float:
        return median([p.cfo_to_ni for p in self.peers])

    def reliability(self):
        """(রায়, কারণ) ফেরত দেয়। সংখ্যা ও কেন্দ্রীভবন কঠোর থামার সংকেত।"""
        hard, soft = [], []
        if self.n < MIN_PEERS:
            hard.append("only %d comparables, need %d" % (self.n, MIN_PEERS))
        if self.effective_names < MIN_EFF_NAMES:
            hard.append("N_eff %.2f below %.1f (Ch 8)" % (self.effective_names, MIN_EFF_NAMES))
        cv = self.cv_pe()
        if cv > MAX_CV:
            soft.append("P/E dispersion CV %.4f above %.2f" % (cv, MAX_CV))
        if hard:
            return "PEER SET TOO THIN", hard + soft
        if soft:
            return "RANGE ONLY", soft
        return "USABLE POINT ESTIMATE", []

    def implied_values(self, t: Target) -> Dict:
        verdict, reasons = self.reliability()
        if verdict == "PEER SET TOO THIN":
            return {"status": "PEER SET TOO THIN - REFUSING TO VALUE",
                    "reasons": reasons, "values": {}}

        g_factor = t.rev_cagr / self.median_growth()
        q_factor = min(1.0, t.cfo_to_ni / self.median_quality())
        adj_pe = self.median_pe() * g_factor * q_factor

        vals = {
            "median P/E": t.eps * self.median_pe(),
            "harmonic-mean P/E": t.eps * self.harmonic_pe(),
            "median EV/EBITDA": (t.ebitda * self.median_ev_ebitda() - t.net_debt) / t.shares_cr,
            "harmonic EV/EBITDA": (t.ebitda * self.harmonic_ev_ebitda() - t.net_debt) / t.shares_cr,
            "quality+growth adj P/E": t.eps * adj_pe,
        }
        lo, hi = min(vals.values()), max(vals.values())
        mid = (lo + hi) / 2.0
        return {"status": verdict, "reasons": reasons, "values": vals,
                "growth_factor": g_factor, "quality_factor": q_factor,
                "adjusted_pe": adj_pe,
                "low": lo, "high": hi, "midpoint": mid, "width": (hi - lo) / mid}


def premium(target_multiple: float, peer_multiple: float) -> float:
    return target_multiple / peer_multiple - 1.0


if __name__ == "__main__":
    pharma = [
        Comparable("P1 SQUARE-style", 210.0, 15.0, 10.0, 150.0, 250.0, 0.12, 1.15),
        Comparable("P2 BXPHARMA-style", 132.0, 12.0, 10.0, 80.0, 200.0, 0.08, 0.95),
        Comparable("P3 RENATA-style", 720.0, 40.0, 6.0, 480.0, 400.0, 0.15, 1.05),
        Comparable("P4 IBNSINA-style", 240.0, 30.0, 4.0, 300.0, 210.0, 0.10, 1.20),
        Comparable("P5 ACI-style", 180.0, 6.0, 8.0, 1260.0, 270.0, 0.14, 0.80),
    ]
    tgt = Target("TGT Pharma", price=96.0, eps=8.0, shares_cr=25.0,
                 net_debt=300.0, ebitda=340.0, rev_cagr=0.09, cfo_to_ni=0.70)

    print("=== PHARMA PEER SET (BDT crore; price and EPS in BDT) ===")
    print("%-18s%9s%8s%10s%10s%9s%10s%9s%9s" %
          ("COMPANY", "Price", "EPS", "MktCap", "NetDebt", "EBITDA", "EV", "P/E", "EV/EBI"))
    for p in pharma:
        print("%-18s%9.2f%8.2f%10.0f%10.0f%9.0f%10.0f%9.2f%9.2f" %
              (p.name, p.price, p.eps, p.market_cap, p.net_debt, p.ebitda,
               p.ev, p.pe, p.ev_ebitda))

    full = PeerSet("FULL SET", pharma, top_holding_pct=18.0)

    print()
    print("=== AGGREGATION: three ways to average a P/E ===")
    print("Median P/E          : %8.4f" % full.median_pe())
    print("Arithmetic mean P/E : %8.4f   <- wrong aggregator" % full.mean_pe())
    print("Harmonic mean P/E   : %8.4f   <- correct aggregator" % full.harmonic_pe())
    print("Median EV/EBITDA    : %8.4f" % full.median_ev_ebitda())
    print("Harmonic EV/EBITDA  : %8.4f" % full.harmonic_ev_ebitda())
    print("P/E dispersion CV   : %8.4f" % full.cv_pe())
    print("N_eff (Ch 8)        : %8.2f" % full.effective_names)

    print()
    print("=== TARGET vs PEERS: premium / discount ===")
    print("Target P/E       %7.4f  vs median   %7.4f  -> %+7.2f%%" %
          (tgt.pe, full.median_pe(), premium(tgt.pe, full.median_pe()) * 100))
    print("Target P/E       %7.4f  vs harmonic %7.4f  -> %+7.2f%%" %
          (tgt.pe, full.harmonic_pe(), premium(tgt.pe, full.harmonic_pe()) * 100))
    print("Target EV/EBITDA %7.4f  vs median   %7.4f  -> %+7.2f%%" %
          (tgt.ev_ebitda, full.median_ev_ebitda(),
           premium(tgt.ev_ebitda, full.median_ev_ebitda()) * 100))

    print()
    print("=== IMPLIED VALUE, FULL SET (n=5) ===")
    r = full.implied_values(tgt)
    print("Status: %s" % r["status"])
    for why in r["reasons"]:
        print("  reason: %s" % why)
    print("Growth factor %.4f | Quality factor %.4f | Adjusted P/E %.4f" %
          (r["growth_factor"], r["quality_factor"], r["adjusted_pe"]))
    for k in ["median P/E", "harmonic-mean P/E", "median EV/EBITDA",
              "harmonic EV/EBITDA", "quality+growth adj P/E"]:
        print("  %-24s BDT %8.2f" % (k, r["values"][k]))
    print("Range BDT %.2f to BDT %.2f | midpoint BDT %.2f | width %.2f%% of midpoint" %
          (r["low"], r["high"], r["midpoint"], r["width"] * 100))
    inside = r["low"] <= tgt.price <= r["high"]
    print("Market price BDT %.2f is %s the range -> %s" %
          (tgt.price, "INSIDE" if inside else "OUTSIDE",
           "NO SIGNAL" if inside else "SIGNAL"))

    print()
    print("=== CORE SET: business-model comparable only (n=3) ===")
    core = PeerSet("CORE SET", pharma[:3], top_holding_pct=18.0)
    print("Median P/E %.4f | Harmonic P/E %.4f | CV %.4f | n=%d" %
          (core.median_pe(), core.harmonic_pe(), core.cv_pe(), core.n))
    rc = core.implied_values(tgt)
    print("Status: %s" % rc["status"])
    for why in rc["reasons"]:
        print("  reason: %s" % why)

    print()
    print("=== THIN SET: telecom, two comparables ===")
    telecom = [
        Comparable("T1 GP-style", 320.0, 20.0, 135.0, 3000.0, 12000.0, 0.05, 1.30),
        Comparable("T2 ROBI-style", 36.0, 1.50, 523.0, 4000.0, 5000.0, 0.06, 1.25),
    ]
    thin = PeerSet("TELECOM", telecom, top_holding_pct=78.0)
    tgt_t = Target("TGT Telecom", price=88.0, eps=4.0, shares_cr=50.0,
                   net_debt=500.0, ebitda=900.0, rev_cagr=0.04, cfo_to_ni=1.20)
    print("Peer P/E values: %s" % ", ".join("%.2f" % p.pe for p in telecom))
    print("Median %.4f | Mean %.4f | Harmonic %.4f | CV %.4f | n=%d | N_eff %.2f" %
          (thin.median_pe(), thin.mean_pe(), thin.harmonic_pe(),
           thin.cv_pe(), thin.n, thin.effective_names))
    rt = thin.implied_values(tgt_t)
    print("Status: %s" % rt["status"])
    for why in rt["reasons"]:
        print("  reason: %s" % why)
    print("Implied values returned: %d" % len(rt["values"]))
\`\`\`

**প্রত্যাশিত ফলাফল:**

\`\`\`text
=== PHARMA PEER SET (BDT crore; price and EPS in BDT) ===
COMPANY               Price     EPS    MktCap   NetDebt   EBITDA        EV      P/E   EV/EBI
P1 SQUARE-style      210.00   15.00      2100       150      250      2250    14.00     9.00
P2 BXPHARMA-style    132.00   12.00      1320        80      200      1400    11.00     7.00
P3 RENATA-style      720.00   40.00      4320       480      400      4800    18.00    12.00
P4 IBNSINA-style     240.00   30.00       960       300      210      1260     8.00     6.00
P5 ACI-style         180.00    6.00      1440      1260      270      2700    30.00    10.00

=== AGGREGATION: three ways to average a P/E ===
Median P/E          :  14.0000
Arithmetic mean P/E :  16.2000   <- wrong aggregator
Harmonic mean P/E   :  13.2899   <- correct aggregator
Median EV/EBITDA    :   9.0000
Harmonic EV/EBITDA  :   8.2786
P/E dispersion CV   :   0.5281
N_eff (Ch 8)        :     5.56

=== TARGET vs PEERS: premium / discount ===
Target P/E       12.0000  vs median   14.0000  ->  -14.29%
Target P/E       12.0000  vs harmonic 13.2899  ->   -9.71%
Target EV/EBITDA  7.9412  vs median    9.0000  ->  -11.76%

=== IMPLIED VALUE, FULL SET (n=5) ===
Status: RANGE ONLY
  reason: P/E dispersion CV 0.5281 above 0.35
Growth factor 0.7500 | Quality factor 0.6667 | Adjusted P/E 7.0000
  median P/E               BDT   112.00
  harmonic-mean P/E        BDT   106.32
  median EV/EBITDA         BDT   110.40
  harmonic EV/EBITDA       BDT   100.59
  quality+growth adj P/E   BDT    56.00
Range BDT 56.00 to BDT 112.00 | midpoint BDT 84.00 | width 66.67% of midpoint
Market price BDT 96.00 is INSIDE the range -> NO SIGNAL

=== CORE SET: business-model comparable only (n=3) ===
Median P/E 14.0000 | Harmonic P/E 13.7682 | CV 0.2450 | n=3
Status: PEER SET TOO THIN - REFUSING TO VALUE
  reason: only 3 comparables, need 4

=== THIN SET: telecom, two comparables ===
Peer P/E values: 16.00, 24.00
Median 20.0000 | Mean 20.0000 | Harmonic 19.2000 | CV 0.2828 | n=2 | N_eff 1.28
Status: PEER SET TOO THIN - REFUSING TO VALUE
  reason: only 2 comparables, need 4
  reason: N_eff 1.28 below 3.0 (Ch 8)
Implied values returned: 0
\`\`\`

**প্রতিটি পাতলা-গোষ্ঠী ব্লকের শেষ লাইনটিই গুরুত্বপূর্ণ নকশা সিদ্ধান্ত।** \`implied_values\` একটি খালি ডিকশনারি ফেরত দেয়। এটি সতর্কতা জুড়ে মধ্যক ফেরত দেয় না, কারণ সংখ্যার সঙ্গে জোড়া সতর্কতা সংখ্যাটিই হিসেবে পড়া হয়। **যে ফাংশন কেবল সংখ্যাই ফেরত দিতে পারে, তাকে একদিন দুটি সমকক্ষ মূল্যায়ন করতে বলা হবে, আর সে মেনে নেবে।**

**লক্ষ করুন মূল গোষ্ঠী প্রতিটি গুণমান পরিমাপে ভালো, তবু অস্বীকার করে।** পরিবেশক ও সমষ্টি বাদ দিলে CV ০.৫২৮১ থেকে ০.২৪৫০-এ নামে — সত্যিই বেশি তুলনীয় ব্যবসা — তবু \`reliability()\` PEER SET TOO THIN ফেরত দেয়, কারণ \`n = 3\`। **তুলনীয়তা উন্নত করতে গিয়ে নমুনা ধ্বংস হয়েছে।** এই আপস কোডের বাগ নয়; এটি ডিএসই-র কাঠামো, নিয়ন্ত্রণ-প্রবাহের শাখা হিসেবে লেখা।

**আর লক্ষ করুন টেলিকমের ০.২৮২৮ CV উত্তীর্ণ হচ্ছে।** দুটি পর্যবেক্ষণে ভেদাঙ্ক গঠনগতভাবেই সীমাবদ্ধ এবং জনসংখ্যা সম্পর্কে কোনো তথ্য বহন করে না। এ কারণেই \`reliability()\` \`soft\`-এর আগে \`hard\` যাচাই করে এবং \`hard\`-এ শর্তহীনভাবে ফেরত দেয়। **ঐ দুটি যাচাইয়ের ক্রম উল্টে দিন, আর ফাংশনটি একক-নামের খাত মূল্যায়নের যন্ত্রে পরিণত হবে।**

**প্রকৃত স্ক্রিনে সম্প্রসারণ করতে:** §২২.১-এর চারটি ছাঁকনিকে predicate হিসেবে মুড়ে দিন, কেবল টিকে যাওয়াদের থেকে \`PeerSet\` গঠন করুন, এবং প্রতিটি বাদ পড়া নাম কারণসহ লগ করুন। লগটিই আসল সরবরাহযোগ্য বস্তু। যে সমকক্ষ গোষ্ঠীর গঠন লগ থেকে পুনর্নির্মাণ করা যায় না, তা এমন গোষ্ঠী যা কেউ একটি সংখ্যা তৈরির জন্য বেছেছেন।`,
    },

    mistakes: {
      en: `1. **Using the exchange's sector label as the peer set.** DSE pharmaceuticals contains manufacturers, distributors, and diversified conglomerates. They do not share a margin structure, an asset base, or a cost of capital. The label is where the search starts, never where it ends.
2. **Averaging P/E arithmetically.** The arithmetic mean of {14, 11, 18, 8, 30} is 16.20; the harmonic mean is 13.29. The arithmetic figure corresponds to no portfolio anyone can hold. Use the median for robustness and the harmonic mean when you need the true aggregate.
3. **Comparing P/E across peers with different leverage.** A 4.7×-levered conglomerate showed a P/E of 30.00 and an EV/EBITDA of 10.00 in the worked example. The high P/E is debt, not growth. Where leverage varies, move to EV/EBITDA — Chapter 17 established why the difference is not cosmetic.
4. **Publishing a median from two or three comparables.** This is the error the whole chapter exists to prevent. Chapter 8 showed telecom has roughly 1.3 effective names. A peer comparison on 1.3 names is a company valued against itself.
5. **Screening on dispersion without first counting.** With n = 2 the coefficient of variation is bounded by construction and passes almost automatically — 0.2828 in the telecom case, comfortably inside a 0.35 threshold. The count test must come first and must be a hard stop.
6. **Applying the peer multiple without adjusting for quality.** Chapter 18's cash-conversion test is not optional here. A target converting 0.70 against peers at 1.05 does not deserve the peer multiple, and the unadjusted implied price of 112.00 against the adjusted 56.00 is the size of that omission.
7. **Quoting only the method that gave the answer you wanted.** Five defensible methods produced 112.00, 106.32, 110.40, 100.59, and 56.00. Reporting the first and suppressing the last is not analysis; it is selection.
8. **Using a stale or thin-float price as a comparable.** Chapter 2's liquidity filter applies to peers, not just to what you buy. A P/E built on a quote from three weeks ago is a number with no market behind it.
9. **Mixing revalued and non-revalued balance sheets in a P/B comparison.** IAS 16 revaluation as adopted in Bangladesh (Ch 11) inflates book equity without earning capacity. One revalued peer makes the whole P/B column non-comparable.
10. **Treating relative valuation as a substitute for intrinsic value.** It tells you what the market currently pays for similar businesses. It cannot tell you whether that price is right. Chapter 21 answers a different question, and the two are cross-checks, not alternatives.`,
      bn: `১. **এক্সচেঞ্জের খাত-লেবেলকে সমকক্ষ গোষ্ঠী ধরা।** ডিএসই ওষুধ খাতে উৎপাদক, পরিবেশক ও বহুমুখী সমষ্টি সবই আছে। এরা মার্জিন গঠন, সম্পদভিত্তি বা মূলধন ব্যয় ভাগ করে না। লেবেল যেখানে অনুসন্ধান শুরু হয়, কখনো যেখানে শেষ হয় তা নয়।
২. **P/E গাণিতিকভাবে গড় করা।** {১৪, ১১, ১৮, ৮, ৩০}-এর গাণিতিক গড় ১৬.২০; হরাত্মক গড় ১৩.২৯। গাণিতিক সংখ্যাটি এমন কোনো পোর্টফোলিওর সঙ্গে মেলে না যা কেউ ধারণ করতে পারে। দৃঢ়তার জন্য মধ্যক ব্যবহার করুন, আর প্রকৃত সমষ্টি লাগলে হরাত্মক গড়।
৩. **ভিন্ন ঋণভারের সমকক্ষদের মধ্যে P/E তুলনা করা।** কৃত উদাহরণে ৪.৭×-ঋণভারযুক্ত সমষ্টির P/E ছিল ৩০.০০ আর EV/EBITDA ১০.০০। উচ্চ P/E-টি ঋণ, প্রবৃদ্ধি নয়। ঋণভার ভিন্ন হলে EV/EBITDA-তে যান — অধ্যায় ১৭ প্রতিষ্ঠা করেছে পার্থক্যটি কেন প্রসাধনী নয়।
৪. **দুই বা তিনটি সমকক্ষ থেকে মধ্যক প্রকাশ করা।** এই ভুল ঠেকাতেই পুরো অধ্যায়ের অস্তিত্ব। অধ্যায় ৮ দেখিয়েছে টেলিকমে কার্যকর নাম প্রায় ১.৩। ১.৩ নামে সমকক্ষ তুলনা মানে একটি কোম্পানিকে নিজের বিপরীতে মূল্যায়ন।
৫. **আগে না গুনে বিস্তার দিয়ে ছাঁকা।** n = ২-তে ভেদাঙ্ক গঠনগতভাবে সীমাবদ্ধ এবং প্রায় স্বয়ংক্রিয়ভাবে উত্তীর্ণ হয় — টেলিকমের ক্ষেত্রে ০.২৮২৮, ০.৩৫ সীমার স্বাচ্ছন্দ্যে ভেতরে। সংখ্যা-পরীক্ষা আগে আসতে হবে এবং তা কঠোর থামার সংকেত হতে হবে।
৬. **গুণমানের জন্য সমন্বয় না করে সমকক্ষ গুণিতক প্রয়োগ।** অধ্যায় ১৮-এর নগদ-রূপান্তর পরীক্ষা এখানে ঐচ্ছিক নয়। ১.০৫ সমকক্ষদের বিপরীতে ০.৭০ রূপান্তরকারী লক্ষ্য সমকক্ষ গুণিতক প্রাপ্য নয়, আর সমন্বিত ৫৬.০০-র বিপরীতে অসমন্বিত নিহিত দাম ১১২.০০-ই ঐ বাদ পড়ার আকার।
৭. **কেবল সেই পদ্ধতি উদ্ধৃত করা যা আপনার চাওয়া উত্তর দিয়েছে।** পাঁচটি রক্ষণযোগ্য পদ্ধতি দিয়েছে ১১২.০০, ১০৬.৩২, ১১০.৪০, ১০০.৫৯ ও ৫৬.০০। প্রথমটি জানিয়ে শেষটি চেপে যাওয়া বিশ্লেষণ নয়; এটি নির্বাচন।
৮. **বাসি বা পাতলা-ফ্লোট দামকে সমকক্ষ হিসেবে ব্যবহার।** অধ্যায় ২-এর তারল্য ছাঁকনি সমকক্ষদের ক্ষেত্রেও প্রযোজ্য, কেবল আপনি যা কেনেন তাতে নয়। তিন সপ্তাহ আগের কোটেশনের ওপর গড়া P/E এমন সংখ্যা যার পেছনে কোনো বাজার নেই।
৯. **P/B তুলনায় পুনর্মূল্যায়িত ও অপুনর্মূল্যায়িত স্থিতিপত্র মেশানো।** বাংলাদেশে গৃহীত IAS 16 পুনর্মূল্যায়ন (অধ্যায় ১১) আয়ক্ষমতা ছাড়াই বুক ইক্যুইটি স্ফীত করে। একটি পুনর্মূল্যায়িত সমকক্ষই পুরো P/B কলামকে অতুলনীয় করে দেয়।
১০. **আপেক্ষিক মূল্যায়নকে অন্তর্নিহিত মূল্যের বিকল্প ভাবা।** এটি বলে বাজার এই মুহূর্তে অনুরূপ ব্যবসার জন্য কত দেয়। ঐ দাম সঠিক কি না তা বলতে পারে না। অধ্যায় ২১ ভিন্ন প্রশ্নের উত্তর দেয়, আর দুটি পরস্পরের ক্রস-চেক, বিকল্প নয়।`,
    },

    tips: {
      en: `- **Write the exclusion log before you write the valuation.** Every name you removed from the sector, and the test it failed. If you cannot produce that log, your peer set was chosen rather than constructed, and the median it produces is an opinion with decimals.
- **Count first, always.** Peer count is the first cell in the model, not the last. Four genuine comparables is the floor; below it, publish nothing.
- **Cross-check the count against Chapter 8's N_eff.** A sector whose top name is above one-third of capitalisation cannot support a peer comparison regardless of how many tickers it lists. Concentration and count are separate tests and both are hard stops.
- **Run the median and the harmonic mean side by side and show both.** If they disagree by more than about 10%, one peer is distorting the set and you should be able to name it. In the worked example it was the levered conglomerate at 30.00×.
- **Report the CV under every median you publish.** One extra cell. It converts a false precision into an honest confidence statement, and it is the fastest way to see that a peer table is decoration.
- **Move to EV/EBITDA the moment net debt to EBITDA differs by more than about 1.5× across the set.** Do not adjust P/E with a leverage coefficient; that is fitting, not analysis.
- **Apply the Chapter 18 cash-conversion factor mechanically, before you form a view.** Applying it afterwards means you will find a reason not to.
- **When the range width exceeds about 40% of its midpoint, publish the range and no target price.** A target price drawn from a two-to-one band is a number with a decoration of rigour around it.
- **Use relative valuation as the second method, never the first.** Run Chapter 21's intrinsic estimate, then ask what the market is paying for similar businesses. Running the peer comparison first anchors you, and everything after it becomes a justification.
- **Keep a written rule for refusing, and refuse in public.** A research process that has never once declined to produce a target price has no threshold, and a method with no threshold cannot be wrong — which is the same thing as saying it was never a method.`,
      bn: `- **মূল্যায়ন লেখার আগে বর্জন-লগ লিখুন।** খাত থেকে সরানো প্রতিটি নাম, এবং কোন পরীক্ষায় সে ব্যর্থ হলো। ঐ লগ তৈরি করতে না পারলে আপনার সমকক্ষ গোষ্ঠী গঠিত নয়, বাছাই করা, আর তা থেকে আসা মধ্যক দশমিকসহ একটি মতামত।
- **সর্বদা আগে গুনুন।** সমকক্ষ সংখ্যা মডেলের প্রথম কোষ, শেষ নয়। চারটি প্রকৃত সমকক্ষ মেঝে; এর নিচে কিছুই প্রকাশ করবেন না।
- **সংখ্যাটি অধ্যায় ৮-এর N_eff-এর সঙ্গে মিলিয়ে দেখুন।** যে খাতের শীর্ষ নাম মূলধনের এক-তৃতীয়াংশের ওপরে, সে যত টিকারই তালিকাভুক্ত করুক, সমকক্ষ তুলনা বহন করতে পারে না। কেন্দ্রীভবন ও সংখ্যা পৃথক পরীক্ষা এবং দুটিই কঠোর থামার সংকেত।
- **মধ্যক ও হরাত্মক গড় পাশাপাশি চালান ও দুটিই দেখান।** এদের অমিল প্রায় ১০%-এর বেশি হলে একটি সমকক্ষ গোষ্ঠীটিকে বিকৃত করছে, আর আপনার তার নাম বলতে পারা উচিত। কৃত উদাহরণে সেটি ছিল ৩০.০০× ঋণভারযুক্ত সমষ্টি।
- **প্রকাশ করা প্রতিটি মধ্যকের নিচে CV জানান।** একটি বাড়তি কোষ। এটি মিথ্যা নিখুঁততাকে সৎ আত্মবিশ্বাস-বিবৃতিতে পরিণত করে, আর একটি সমকক্ষ সারণি যে অলংকার তা দেখার দ্রুততম উপায় এটিই।
- **গোষ্ঠীজুড়ে নিট ঋণ/EBITDA প্রায় ১.৫×-এর বেশি ভিন্ন হলেই EV/EBITDA-তে যান।** ঋণভার সহগ দিয়ে P/E সমন্বয় করবেন না; ওটি ফিটিং, বিশ্লেষণ নয়।
- **অধ্যায় ১৮-এর নগদ-রূপান্তর গুণকটি মত গঠনের আগে যান্ত্রিকভাবে প্রয়োগ করুন।** পরে প্রয়োগ করলে তা না করার একটি কারণ আপনি খুঁজে পাবেন।
- **পরিসরের প্রস্থ মধ্যবিন্দুর প্রায় ৪০% ছাড়ালে পরিসর প্রকাশ করুন, লক্ষ্যমূল্য নয়।** দুই-থেকে-এক বলয় থেকে টানা লক্ষ্যমূল্য হলো চারপাশে কঠোরতার অলংকার লাগানো একটি সংখ্যা।
- **আপেক্ষিক মূল্যায়নকে দ্বিতীয় পদ্ধতি হিসেবে ব্যবহার করুন, কখনো প্রথম নয়।** আগে অধ্যায় ২১-এর অন্তর্নিহিত প্রাক্কলন চালান, তারপর জিজ্ঞেস করুন বাজার অনুরূপ ব্যবসার জন্য কত দিচ্ছে। সমকক্ষ তুলনা আগে চালালে তা আপনাকে নোঙর করে, আর তার পরের সবকিছু যুক্তি-সাজানোয় পরিণত হয়।
- **অস্বীকারের একটি লিখিত নিয়ম রাখুন, এবং প্রকাশ্যে অস্বীকার করুন।** যে গবেষণা প্রক্রিয়া একবারও লক্ষ্যমূল্য দিতে অস্বীকার করেনি, তার কোনো সীমা নেই, আর সীমাহীন পদ্ধতি ভুল হতে পারে না — যা বলার আরেক উপায় হলো, সেটি কখনো পদ্ধতিই ছিল না।`,
    },

    exercises: {
      en: `1. Take any DSE sector and build a peer set from scratch. Start with the full sector list and apply the four filters of §22.1 in order, recording how many names each filter removes. Report the final count. If it is below four, state that and stop.
2. For the peer set you built, compute the median, arithmetic mean, and harmonic mean P/E. Report the percentage gap between the arithmetic and harmonic means, and name the constituent responsible for most of it.
3. Compute the coefficient of variation of that peer set's P/E. Does it clear 0.35? If not, state in one sentence what that means for any target price derived from the median.
4. Take one company in the set with materially higher leverage than the others. Compute its P/E and its EV/EBITDA, and express both as a percentile within the set. Explain in two sentences why the two rankings differ.
5. Pick a target company and compute its implied value five ways: median P/E, harmonic P/E, median EV/EBITDA, harmonic EV/EBITDA, and quality- and growth-adjusted P/E. Report the range and its width as a percentage of midpoint. Is the market price inside it?
6. Apply the Chapter 18 cash-conversion adjustment to your target. By what percentage did the implied value fall? Would you have applied that adjustment if you had computed the unadjusted number first?
7. Take the DSE telecom sector. Compute N_eff from Chapter 8, count the comparables, and write the two-sentence refusal note you would send a client who asked for a target price on it.
8. Find a published broker research note on a DSE company that uses peer multiples. Count the comparables it used. Check whether it disclosed the dispersion. Rewrite its conclusion under this chapter's reliability test.
9. Take a peer set of five and remove the single most distorted constituent. Recompute the median, harmonic mean, and CV. Did dispersion fall? Did the count fall below four? State which of the two you would rather have and why.
10. For a company where you have already built a Chapter 21 intrinsic estimate, run the peer comparison as a cross-check. Where the two disagree by more than 30%, write down which one you distrust and the specific input that makes you distrust it.`,
      bn: `১. যেকোনো ডিএসই খাত নিন এবং শূন্য থেকে সমকক্ষ গোষ্ঠী গড়ুন। পূর্ণ খাত তালিকা দিয়ে শুরু করে §২২.১-এর চারটি ছাঁকনি ক্রমানুসারে প্রয়োগ করুন, প্রতিটি ছাঁকনি কতটি নাম সরায় তা লিখুন। চূড়ান্ত সংখ্যা জানান। চারের নিচে হলে তা বলে থেমে যান।
২. আপনার গড়া সমকক্ষ গোষ্ঠীর মধ্যক, গাণিতিক গড় ও হরাত্মক গড় P/E গণনা করুন। গাণিতিক ও হরাত্মক গড়ের মধ্যে শতকরা ব্যবধান জানান, এবং তার অধিকাংশের জন্য দায়ী উপাদানটির নাম বলুন।
৩. ঐ সমকক্ষ গোষ্ঠীর P/E-র ভেদাঙ্ক গণনা করুন। এটি কি ০.৩৫ পার করে? না করলে এক বাক্যে বলুন মধ্যক থেকে পাওয়া যেকোনো লক্ষ্যমূল্যের জন্য এর অর্থ কী।
৪. গোষ্ঠীর মধ্যে অন্যদের চেয়ে উল্লেখযোগ্যভাবে বেশি ঋণভারযুক্ত একটি কোম্পানি নিন। এর P/E ও EV/EBITDA গণনা করুন এবং দুটিকেই গোষ্ঠীর মধ্যে শতমকে প্রকাশ করুন। দুই বাক্যে ব্যাখ্যা করুন কেন দুটি ক্রম ভিন্ন।
৫. একটি লক্ষ্য কোম্পানি বেছে পাঁচভাবে নিহিত মান গণনা করুন: মধ্যক P/E, হরাত্মক P/E, মধ্যক EV/EBITDA, হরাত্মক EV/EBITDA, এবং গুণমান- ও প্রবৃদ্ধি-সমন্বিত P/E। পরিসর ও মধ্যবিন্দুর শতকরা হিসেবে তার প্রস্থ জানান। বাজার দাম কি এর ভেতরে?
৬. আপনার লক্ষ্যে অধ্যায় ১৮-এর নগদ-রূপান্তর সমন্বয় প্রয়োগ করুন। নিহিত মান শতকরা কত কমল? অসমন্বিত সংখ্যাটি আগে গণনা করলে আপনি কি ঐ সমন্বয় প্রয়োগ করতেন?
৭. ডিএসই টেলিকম খাত নিন। অধ্যায় ৮ থেকে N_eff গণনা করুন, সমকক্ষ গুনুন, এবং যে ক্লায়েন্ট এর লক্ষ্যমূল্য চেয়েছেন তাঁকে পাঠানোর দুই বাক্যের অস্বীকৃতি নোটটি লিখুন।
৮. সমকক্ষ গুণিতক ব্যবহারকারী একটি প্রকাশিত ব্রোকার গবেষণা নোট খুঁজুন। এটি কতটি সমকক্ষ ব্যবহার করেছে গুনুন। বিস্তার প্রকাশ করেছে কি না দেখুন। এই অধ্যায়ের নির্ভরযোগ্যতা পরীক্ষার আওতায় এর উপসংহার নতুন করে লিখুন।
৯. পাঁচটির একটি সমকক্ষ গোষ্ঠী নিয়ে সবচেয়ে বিকৃত উপাদানটি সরান। মধ্যক, হরাত্মক গড় ও CV পুনরায় গণনা করুন। বিস্তার কি কমল? সংখ্যা কি চারের নিচে নামল? দুটির কোনটি আপনি বেশি চাইতেন এবং কেন তা বলুন।
১০. যে কোম্পানির জন্য ইতিমধ্যে অধ্যায় ২১-এর অন্তর্নিহিত প্রাক্কলন গড়েছেন, তার ওপর ক্রস-চেক হিসেবে সমকক্ষ তুলনা চালান। যেখানে দুটি ৩০%-এর বেশি অমিল দেখায়, লিখে রাখুন আপনি কোনটিকে অবিশ্বাস করেন এবং কোন নির্দিষ্ট ইনপুটটি আপনাকে অবিশ্বাস করায়।`,
    },

    summary: {
      en: `- A multiple is a compressed DCF. Applying a peer's multiple to your target asserts that the two share a growth rate, a risk profile, and a payout policy. That assertion is the method, and it is almost never stated.
- **The peer set is built on business model, scale, accounting basis, and liquidity — never on the exchange's sector label.** Each filter removes names, and that is the point.
- **Median for robustness; harmonic mean for P/E; never the arithmetic mean.** On the worked set: 14.00, 13.29, and 16.20 respectively. The harmonic mean is the multiple of an equally-weighted portfolio; the arithmetic mean corresponds to no portfolio that exists.
- Leverage is why P/E and EV/EBITDA rank the same companies differently. The conglomerate showed P/E 30.00 against EV/EBITDA 10.00 — high P/E as debt, not growth. Where net debt varies, use the enterprise multiple (Ch 17, Ch 19).
- Adjustments must be mechanical: growth factor 0.7500, quality factor 0.6667 (Ch 18), adjusted multiple 7.0000 against a peer median of 14.0000. **The adjustment halved the multiple, and it halved the implied price from 112.00 to 56.00.**
- The five defensible methods produced a range of BDT 56.00 to 112.00 — **66.67% of its own midpoint.** The market price of 96.00 sat inside it. The correct output was NO SIGNAL, not a target.
- **The reliability test: n ≥ 4, N_eff ≥ 3, CV ≤ 0.35.** The first two are hard stops returning no number at all. Failing only the third returns a range, never a point.
- **Count before dispersion.** With two comparables the CV was 0.2828 and passed, because two points are always close to their own mean. A dispersion screen run alone would have licensed the least reliable peer set in the chapter.
- Cleaning the pharma set for strict comparability cut CV from 0.5281 to 0.2450 and cut the count from five to three — from RANGE ONLY to REFUSE. **On the DSE you can have comparability or sample size. You will rarely have both.**
- Chapter 8's N_eff ≈ 100 / top-holding % is load-bearing here. Telecom's 1.28 disqualifies the sector as a peer set exactly as it disqualified it as diversification.
- **Discipline established:** count the peers before computing anything, publish the dispersion beneath every median, use the harmonic mean for P/E, and refuse to issue an implied value from fewer than four genuine comparables — the number the method withholds is the most valuable output it has.`,
      bn: `- গুণিতক হলো সংকুচিত DCF। সমকক্ষের গুণিতক আপনার লক্ষ্যে প্রয়োগ করা মানে দাবি করা যে দুজন একই প্রবৃদ্ধি হার, ঝুঁকি রূপরেখা ও লভ্যাংশ নীতি ভাগ করে। ঐ দাবিটিই পদ্ধতি, আর তা প্রায় কখনো বলা হয় না।
- **সমকক্ষ গোষ্ঠী গড়ে ওঠে ব্যবসায়িক মডেল, আকার, হিসাবরক্ষণ ভিত্তি ও তারল্যের ওপর — কখনো এক্সচেঞ্জের খাত-লেবেলের ওপর নয়।** প্রতিটি ছাঁকনি নাম সরায়, আর সেটাই উদ্দেশ্য।
- **দৃঢ়তার জন্য মধ্যক; P/E-র জন্য হরাত্মক গড়; কখনো গাণিতিক গড় নয়।** কৃত গোষ্ঠীতে যথাক্রমে ১৪.০০, ১৩.২৯ ও ১৬.২০। হরাত্মক গড় সমান-ওজনের পোর্টফোলিওর গুণিতক; গাণিতিক গড় বিদ্যমান কোনো পোর্টফোলিওর সঙ্গে মেলে না।
- ঋণভারই কারণ যে P/E ও EV/EBITDA একই কোম্পানিদের ভিন্নভাবে ক্রমে সাজায়। সমষ্টিটির P/E ৩০.০০ বনাম EV/EBITDA ১০.০০ — উচ্চ P/E মানে ঋণ, প্রবৃদ্ধি নয়। নিট ঋণ ভিন্ন হলে এন্টারপ্রাইজ গুণিতক ব্যবহার করুন (অধ্যায় ১৭, ১৯)।
- সমন্বয় যান্ত্রিক হতে হবে: প্রবৃদ্ধি গুণক ০.৭৫০০, গুণমান গুণক ০.৬৬৬৭ (অধ্যায় ১৮), সমকক্ষ মধ্যক ১৪.০০০০-র বিপরীতে সমন্বিত গুণিতক ৭.০০০০। **সমন্বয় গুণিতক অর্ধেক করেছে, আর নিহিত দাম ১১২.০০ থেকে ৫৬.০০-এ অর্ধেক করেছে।**
- পাঁচটি রক্ষণযোগ্য পদ্ধতি দিয়েছে ৫৬.০০ থেকে ১১২.০০ টাকার পরিসর — **নিজের মধ্যবিন্দুর ৬৬.৬৭%।** ৯৬.০০ বাজার দাম তার ভেতরে বসেছে। সঠিক আউটপুট ছিল কোনো সংকেত নয়, লক্ষ্যমূল্য নয়।
- **নির্ভরযোগ্যতা পরীক্ষা: n ≥ ৪, N_eff ≥ ৩, CV ≤ ০.৩৫।** প্রথম দুটি কঠোর থামার সংকেত, যা কোনো সংখ্যাই দেয় না। কেবল তৃতীয়টিতে ব্যর্থ হলে পরিসর ফেরে, কখনো বিন্দু নয়।
- **বিস্তারের আগে গুনুন।** দুটি সমকক্ষে CV ছিল ০.২৮২৮ এবং তা উত্তীর্ণ, কারণ দুটি বিন্দু সর্বদাই নিজেদের গড়ের কাছাকাছি। কেবল বিস্তার ছাঁকনি চালালে অধ্যায়ের সবচেয়ে অনির্ভরযোগ্য সমকক্ষ গোষ্ঠীটিই অনুমোদন পেত।
- কঠোর তুলনীয়তার জন্য ওষুধ গোষ্ঠী পরিষ্কার করায় CV ০.৫২৮১ থেকে ০.২৪৫০-এ নেমেছে আর সংখ্যা পাঁচ থেকে তিনে — "কেবল পরিসর" থেকে "অস্বীকার"-এ। **ডিএসই-তে আপনি হয় তুলনীয়তা পাবেন, নয়তো নমুনার আকার। দুটি একসঙ্গে কমই পাবেন।**
- অধ্যায় ৮-এর N_eff ≈ ১০০ / শীর্ষ মালিকানার % এখানে ভারবাহী। টেলিকমের ১.২৮ খাতটিকে সমকক্ষ গোষ্ঠী হিসেবে ঠিক তেমনই অযোগ্য করে যেমন তাকে বৈচিত্র্যায়ন হিসেবে অযোগ্য করেছিল।
- **প্রতিষ্ঠিত শৃঙ্খলা:** কিছু গণনা করার আগে সমকক্ষ গুনুন, প্রতিটি মধ্যকের নিচে বিস্তার প্রকাশ করুন, P/E-র জন্য হরাত্মক গড় ব্যবহার করুন, এবং চারটির কম প্রকৃত সমকক্ষ থেকে নিহিত মান দিতে অস্বীকার করুন — পদ্ধতিটি যে সংখ্যাটি আটকে রাখে, সেটিই তার সবচেয়ে মূল্যবান আউটপুট।`,
    },
  },

  interview: [
    {
      q: {
        en: 'What is a P/E multiple actually a compression of, and what are you asserting when you apply a peer\'s multiple to your target?',
        bn: 'একটি P/E গুণিতক আসলে কীসের সংকোচন, এবং সমকক্ষের গুণিতক আপনার লক্ষ্যে প্রয়োগ করার সময় আপনি কী দাবি করছেন?',
      },
      a: {
        en: 'It is a compressed discounted cash flow model. For a stable business the justified P/E equals payout divided by (r − g), so a peer trading at 18× is trading at a price consistent with some specific combination of payout ratio, required return, and growth rate. Applying that multiple to your target asserts that your target shares all three. That assertion is the entire method and it is almost never made explicit, which is why peer comparisons that look rigorous are often just the market\'s current mood restated with decimals.',
        bn: 'এটি একটি সংকুচিত ডিসকাউন্টেড ক্যাশ ফ্লো মডেল। স্থিতিশীল ব্যবসার জন্য ন্যায্য P/E = লভ্যাংশ হার ভাগ (r − g), অতএব ১৮×-এ লেনদেন হওয়া সমকক্ষ এমন দামে আছে যা লভ্যাংশ হার, প্রয়োজনীয় রিটার্ন ও প্রবৃদ্ধির একটি নির্দিষ্ট সমন্বয়ের সঙ্গে সঙ্গতিপূর্ণ। ঐ গুণিতক আপনার লক্ষ্যে প্রয়োগ করা মানে দাবি করা যে লক্ষ্যটি তিনটিই ভাগ করে। ঐ দাবিটিই পুরো পদ্ধতি এবং তা প্রায় কখনো স্পষ্ট করা হয় না — এ কারণেই কঠোর দেখতে সমকক্ষ তুলনা প্রায়ই দশমিকসহ পুনর্বিবৃত বাজারের বর্তমান মেজাজ মাত্র।',
      },
    },
    {
      q: {
        en: 'Why is the harmonic mean the correct way to aggregate a set of P/E ratios, and not the arithmetic mean?',
        bn: 'P/E অনুপাতের একটি গোষ্ঠী সমষ্টিভুক্ত করতে গাণিতিক গড় নয়, হরাত্মক গড় কেন সঠিক?',
      },
      a: {
        en: 'A P/E is the reciprocal of an earnings yield. Averaging reciprocals arithmetically overweights the largest values, because a P/E runs to infinity as earnings approach zero while the earnings yield stays bounded. The harmonic mean inverts the average earnings yield, and it is the multiple you actually own if you put equal money into each peer. On the worked set of {14, 11, 18, 8, 30} the harmonic mean is 13.2899 and the arithmetic mean is 16.2000 — a 22% gap driven entirely by one levered outlier. The arithmetic figure corresponds to no portfolio anyone can hold.',
        bn: 'P/E হলো আয়-প্রতিফলের বিপরীত রাশি। বিপরীত রাশির গাণিতিক গড় সবচেয়ে বড় মানগুলোকে অতিরিক্ত ওজন দেয়, কারণ আয় শূন্যের দিকে গেলে P/E অসীমে যায় অথচ আয়-প্রতিফল সীমাবদ্ধ থাকে। হরাত্মক গড় গড় আয়-প্রতিফলকে উল্টে দেয়, এবং প্রতিটি সমকক্ষে সমান টাকা রাখলে আপনি বাস্তবে এই গুণিতকেরই মালিক। {১৪, ১১, ১৮, ৮, ৩০} গোষ্ঠীতে হরাত্মক গড় ১৩.২৮৯৯ আর গাণিতিক গড় ১৬.২০০০ — ২২% ব্যবধান, যা সম্পূর্ণভাবে একটি ঋণভারযুক্ত বহিঃস্থ মান দ্বারা চালিত। গাণিতিক সংখ্যাটি এমন কোনো পোর্টফোলিওর সঙ্গে মেলে না যা কেউ ধারণ করতে পারে।',
      },
    },
    {
      q: {
        en: 'A peer shows a P/E of 30 and an EV/EBITDA of 10. What is going on, and which multiple do you trust?',
        bn: 'একটি সমকক্ষের P/E ৩০ ও EV/EBITDA ১০। কী ঘটছে, আর আপনি কোন গুণিতকে ভরসা করবেন?',
      },
      a: {
        en: 'It is leverage, not optimism. In the worked example that company carried net debt of 1,260 crore against EBITDA of 270 — 4.67× — so interest consumed most of operating profit and net income collapsed to 48 crore. A thin bottom line divided into a normal market capitalisation produces a high P/E that reads as a growth premium. The EV/EBITDA of 10.00 is the trustworthy figure because enterprise value prices the whole capital structure and EBITDA sits above interest. Where net debt to EBITDA differs materially across a peer set, P/E is the wrong tool and no leverage coefficient fully rescues it.',
        bn: 'এটি ঋণভার, আশাবাদ নয়। কৃত উদাহরণে ঐ কোম্পানির নিট ঋণ ছিল ১,২৬০ কোটি বনাম EBITDA ২৭০ — ৪.৬৭× — ফলে সুদ পরিচালন মুনাফার বেশিরভাগ খেয়েছে আর নিট মুনাফা ৪৮ কোটিতে নেমেছে। স্বাভাবিক বাজার মূলধনকে পাতলা তলানি দিয়ে ভাগ করলে যে উচ্চ P/E আসে তা প্রবৃদ্ধি প্রিমিয়াম হিসেবে পড়া হয়। ১০.০০ EV/EBITDA-ই নির্ভরযোগ্য সংখ্যা, কারণ এন্টারপ্রাইজ মূল্য সম্পূর্ণ মূলধন কাঠামোর দাম ধরে আর EBITDA সুদের ওপরে বসে। সমকক্ষ গোষ্ঠীতে নিট ঋণ/EBITDA উল্লেখযোগ্য ভিন্ন হলে P/E ভুল হাতিয়ার এবং কোনো ঋণভার সহগ একে পুরোপুরি বাঁচায় না।',
      },
    },
    {
      q: {
        en: 'Your peer set has two comparables and a coefficient of variation of 0.28, comfortably inside a 0.35 threshold. Do you publish a target price?',
        bn: 'আপনার সমকক্ষ গোষ্ঠীতে দুটি সমকক্ষ ও ভেদাঙ্ক ০.২৮, ০.৩৫ সীমার স্বাচ্ছন্দ্যে ভেতরে। আপনি কি লক্ষ্যমূল্য প্রকাশ করবেন?',
      },
      a: {
        en: 'No. With two observations each deviation is exactly half the gap between them, so the coefficient of variation is bounded by construction and carries no information about the population. It passed for a mechanical reason, not an evidentiary one. The count test must be applied first and must be a hard stop at four genuine comparables. In the telecom case Chapter 8\'s N_eff of 1.28 fails as well, so the sector is one company with a smaller one attached and the comparison is a company valued against itself. The correct output is a refusal, not a number with a caveat.',
        bn: 'না। দুটি পর্যবেক্ষণে প্রতিটি বিচ্যুতি ঠিক তাদের ব্যবধানের অর্ধেক, ফলে ভেদাঙ্ক গঠনগতভাবেই সীমাবদ্ধ এবং জনসংখ্যা সম্পর্কে কোনো তথ্য বহন করে না। এটি প্রমাণগত নয়, যান্ত্রিক কারণে উত্তীর্ণ। সংখ্যা-পরীক্ষা আগে প্রয়োগ করতে হবে এবং চারটি প্রকৃত সমকক্ষে কঠোর থামতে হবে। টেলিকমের ক্ষেত্রে অধ্যায় ৮-এর N_eff ১.২৮-ও ব্যর্থ, অর্থাৎ খাতটি একটি কোম্পানি সঙ্গে একটি ছোট জুড়ে, আর তুলনাটি একটি কোম্পানিকে নিজের বিপরীতে মূল্যায়ন। সঠিক আউটপুট একটি অস্বীকৃতি, শর্তসহ কোনো সংখ্যা নয়।',
      },
    },
    {
      q: {
        en: 'Cleaning a peer set for strict business-model comparability cut its dispersion in half and its count from five to three. Is that an improvement?',
        bn: 'কঠোর ব্যবসায়িক-মডেল তুলনীয়তার জন্য একটি সমকক্ষ গোষ্ঠী পরিষ্কার করায় বিস্তার অর্ধেক ও সংখ্যা পাঁচ থেকে তিনে নেমেছে। এটি কি উন্নতি?',
      },
      a: {
        en: 'It is better and unusable, and that combination is the point. CV fell from 0.5281 to 0.2450 because a distributor and a conglomerate were removed, so the survivors genuinely are comparable. But three comparables fail the hard count test, so the method returns no value at all. On the DSE you can have comparability or you can have sample size and rarely both, because most sector labels contain fewer genuinely similar businesses than a single US industry sub-group. The discipline is to report that trade-off rather than to pick whichever set produces the number you wanted.',
        bn: 'এটি ভালো এবং অব্যবহার্য, আর ঐ সংমিশ্রণটিই মূল কথা। পরিবেশক ও সমষ্টি সরানোয় CV ০.৫২৮১ থেকে ০.২৪৫০-এ নেমেছে, অর্থাৎ টিকে থাকারা সত্যিই তুলনীয়। কিন্তু তিনটি সমকক্ষ কঠোর সংখ্যা-পরীক্ষায় ব্যর্থ, তাই পদ্ধতি কোনো মানই দেয় না। ডিএসই-তে আপনি হয় তুলনীয়তা পাবেন নয়তো নমুনার আকার, দুটি কমই একসঙ্গে, কারণ অধিকাংশ খাত-লেবেলে একটি মার্কিন শিল্প উপ-গোষ্ঠীর চেয়েও কম সত্যিকারের অনুরূপ ব্যবসা থাকে। শৃঙ্খলা হলো ঐ আপসটি জানানো — যে গোষ্ঠী আপনার চাওয়া সংখ্যা দেয় তাকে বেছে নেওয়া নয়।',
      },
    },
    {
      q: {
        en: 'Your target trades at a 14% discount to the peer median P/E. Is it cheap?',
        bn: 'আপনার লক্ষ্য কোম্পানি সমকক্ষ মধ্যক P/E-র তুলনায় ১৪% ছাড়ে লেনদেন হচ্ছে। এটি কি সস্তা?',
      },
      a: {
        en: 'Unknown until you ask whether the discount is earned. In the worked example the target grew at 9% against a peer median of 12%, giving a growth factor of 0.75, and converted 0.70 taka of operating cash per taka of reported profit against a peer median of 1.05, giving a quality factor of 0.6667 under the Chapter 18 test. The adjusted multiple was 14.00 × 0.75 × 0.6667 = 7.00, implying BDT 56.00 against the unadjusted 112.00. The market price of 96.00 sat inside the resulting range, so the correct output was no signal. Note also that switching from the median to the harmonic mean shrank the apparent discount from 14.29% to 9.71% — two-fifths of it was an aggregation choice most notes never disclose.',
        bn: 'ছাড়টি অর্জিত কি না না জিজ্ঞেস করা পর্যন্ত অজানা। কৃত উদাহরণে লক্ষ্যটি ৯%-এ বেড়েছে বনাম সমকক্ষ মধ্যক ১২%, ফলে প্রবৃদ্ধি গুণক ০.৭৫; আর ঘোষিত প্রতি টাকা মুনাফায় ০.৭০ টাকা পরিচালন নগদ রূপান্তর করেছে বনাম সমকক্ষ মধ্যক ১.০৫, ফলে অধ্যায় ১৮-এর পরীক্ষায় গুণমান গুণক ০.৬৬৬৭। সমন্বিত গুণিতক ১৪.০০ × ০.৭৫ × ০.৬৬৬৭ = ৭.০০, যা অসমন্বিত ১১২.০০-র বিপরীতে ৫৬.০০ টাকা নির্দেশ করে। ৯৬.০০ বাজার দাম ফলস্বরূপ পরিসরের ভেতরে বসেছে, তাই সঠিক আউটপুট ছিল কোনো সংকেত নয়। এটিও লক্ষ করুন যে মধ্যক থেকে হরাত্মক গড়ে গেলে আপাত ছাড় ১৪.২৯% থেকে ৯.৭১%-এ নেমেছে — তার দুই-পঞ্চমাংশ ছিল একটি সমষ্টিকরণ পছন্দ, যা অধিকাংশ নোট কখনো প্রকাশ করে না।',
      },
    },
  ],

  quiz: [
    {
      q: {
        en: 'The correct aggregator for a set of P/E ratios, if you want the multiple of an equally-weighted portfolio, is the:',
        bn: 'সমান-ওজনের পোর্টফোলিওর গুণিতক চাইলে P/E অনুপাতের গোষ্ঠীর সঠিক সমষ্টিকারক হলো:',
      },
      options: {
        en: ['Arithmetic mean', 'Harmonic mean', 'Geometric mean', 'Mode'],
        bn: ['গাণিতিক গড়', 'হরাত্মক গড়', 'জ্যামিতিক গড়', 'সংখ্যাগুরু মান'],
      },
      answer: 1,
    },
    {
      q: {
        en: 'Peer P/Es are 14, 11, 18, 8 and 30. The median is:',
        bn: 'সমকক্ষদের P/E ১৪, ১১, ১৮, ৮ ও ৩০। মধ্যক হলো:',
      },
      options: { en: ['11.00', '13.29', '14.00', '16.20'], bn: ['১১.০০', '১৩.২৯', '১৪.০০', '১৬.২০'] },
      answer: 2,
    },
    {
      q: {
        en: 'A peer with high net debt typically shows:',
        bn: 'উচ্চ নিট ঋণের একটি সমকক্ষ সাধারণত দেখায়:',
      },
      options: {
        en: [
          'A low P/E and a high EV/EBITDA, always',
          'A P/E inflated by depressed net income relative to its EV/EBITDA',
          'Identical P/E and EV/EBITDA rankings',
          'No effect on either multiple',
        ],
        bn: [
          'সর্বদা নিম্ন P/E ও উচ্চ EV/EBITDA',
          'EV/EBITDA-র তুলনায় সংকুচিত নিট মুনাফার কারণে স্ফীত P/E',
          'অভিন্ন P/E ও EV/EBITDA ক্রম',
          'কোনো গুণিতকেই প্রভাব নেই',
        ],
      },
      answer: 1,
    },
    {
      q: {
        en: 'Implied price from an enterprise multiple is computed as:',
        bn: 'এন্টারপ্রাইজ গুণিতক থেকে নিহিত দাম গণনা হয়:',
      },
      options: {
        en: [
          'EBITDA × multiple ÷ shares',
          '(EBITDA × multiple − net debt) ÷ shares',
          '(EBITDA × multiple + net debt) ÷ shares',
          'EPS × multiple',
        ],
        bn: [
          'EBITDA × গুণিতক ÷ শেয়ার',
          '(EBITDA × গুণিতক − নিট ঋণ) ÷ শেয়ার',
          '(EBITDA × গুণিতক + নিট ঋণ) ÷ শেয়ার',
          'EPS × গুণিতক',
        ],
      },
      answer: 1,
    },
    {
      q: {
        en: 'A target grows at 9% against a peer median of 12% and converts CFO/NI of 0.70 against a peer median of 1.05. Applied to a peer median P/E of 14.00, the adjusted multiple is:',
        bn: 'একটি লক্ষ্য ৯%-এ বাড়ে বনাম সমকক্ষ মধ্যক ১২%, আর CFO/NI ০.৭০ বনাম সমকক্ষ মধ্যক ১.০৫। ১৪.০০ সমকক্ষ মধ্যক P/E-তে প্রয়োগ করলে সমন্বিত গুণিতক:',
      },
      options: { en: ['7.00', '9.33', '10.50', '12.25'], bn: ['৭.০০', '৯.৩৩', '১০.৫০', '১২.২৫'] },
      answer: 0,
    },
    {
      q: {
        en: 'Chapter 8\'s effective-names measure is:',
        bn: 'অধ্যায় ৮-এর কার্যকর-নাম পরিমাপটি হলো:',
      },
      options: {
        en: [
          'Number of listed companies in the sector',
          '100 ÷ top-holding %, below about 3 the sector is not a sector',
          'Sector market cap ÷ market cap of the index',
          'Median market cap of the sector',
        ],
        bn: [
          'খাতের তালিকাভুক্ত কোম্পানির সংখ্যা',
          '১০০ ÷ শীর্ষ মালিকানার %, প্রায় ৩-এর নিচে খাত আর খাত নয়',
          'খাতের বাজার মূলধন ÷ সূচকের বাজার মূলধন',
          'খাতের মধ্যক বাজার মূলধন',
        ],
      },
      answer: 1,
    },
    {
      q: {
        en: 'A two-comparable peer set returns a coefficient of variation of 0.28. The correct reading is:',
        bn: 'দুই-সমকক্ষের একটি গোষ্ঠী ০.২৮ ভেদাঙ্ক দেয়। সঠিক পাঠ:',
      },
      options: {
        en: [
          'The peers are tightly clustered, so the median is reliable',
          'With n = 2 the CV is bounded by construction and carries no information',
          'The CV is invalid because it needs at least ten observations',
          'The peer set should be widened until CV exceeds 0.35',
        ],
        bn: [
          'সমকক্ষরা ঘনভাবে জড়ো, তাই মধ্যক নির্ভরযোগ্য',
          'n = ২-তে CV গঠনগতভাবে সীমাবদ্ধ এবং কোনো তথ্য বহন করে না',
          'CV অবৈধ কারণ এর জন্য অন্তত দশটি পর্যবেক্ষণ লাগে',
          'CV ০.৩৫ ছাড়ানো পর্যন্ত সমকক্ষ গোষ্ঠী বাড়াতে হবে',
        ],
      },
      answer: 1,
    },
    {
      q: {
        en: 'Under this chapter\'s reliability test, which two conditions are hard stops that return no number at all?',
        bn: 'এই অধ্যায়ের নির্ভরযোগ্যতা পরীক্ষায় কোন দুটি শর্ত কঠোর থামার সংকেত যা কোনো সংখ্যাই দেয় না?',
      },
      options: {
        en: [
          'Dispersion and growth rate',
          'Peer count and effective names',
          'Leverage and liquidity',
          'Market cap and free float',
        ],
        bn: [
          'বিস্তার ও প্রবৃদ্ধি হার',
          'সমকক্ষ সংখ্যা ও কার্যকর নাম',
          'ঋণভার ও তারল্য',
          'বাজার মূলধন ও ফ্রি ফ্লোট',
        ],
      },
      answer: 1,
    },
    {
      q: {
        en: 'Five defensible methods imply BDT 56.00 to BDT 112.00 for a target trading at BDT 96.00. The correct output is:',
        bn: '৯৬.০০ টাকায় লেনদেন হওয়া একটি লক্ষ্যের জন্য পাঁচটি রক্ষণযোগ্য পদ্ধতি ৫৬.০০ থেকে ১১২.০০ টাকা নির্দেশ করে। সঠিক আউটপুট:',
      },
      options: {
        en: [
          'BUY — the median P/E implies 112.00',
          'SELL — the adjusted multiple implies 56.00',
          'NO SIGNAL — the price sits inside a range 66.67% of its own midpoint',
          'The midpoint of 84.00 is the target price',
        ],
        bn: [
          'কিনুন — মধ্যক P/E ১১২.০০ নির্দেশ করে',
          'বেচুন — সমন্বিত গুণিতক ৫৬.০০ নির্দেশ করে',
          'কোনো সংকেত নয় — দাম নিজের মধ্যবিন্দুর ৬৬.৬৭% প্রশস্ত পরিসরের ভেতরে',
          '৮৪.০০ মধ্যবিন্দুই লক্ষ্যমূল্য',
        ],
      },
      answer: 2,
    },
    {
      q: {
        en: 'Removing a distributor and a conglomerate cut a pharma peer set\'s CV from 0.53 to 0.25 and its count from 5 to 3. The verdict changes from:',
        bn: 'একটি পরিবেশক ও একটি সমষ্টি সরানোয় ওষুধ সমকক্ষ গোষ্ঠীর CV ০.৫৩ থেকে ০.২৫ ও সংখ্যা ৫ থেকে ৩-এ নামল। রায় বদলায়:',
      },
      options: {
        en: [
          'RANGE ONLY to USABLE POINT ESTIMATE',
          'RANGE ONLY to PEER SET TOO THIN — refuse',
          'PEER SET TOO THIN to USABLE POINT ESTIMATE',
          'It does not change',
        ],
        bn: [
          'কেবল পরিসর থেকে ব্যবহারযোগ্য বিন্দু-প্রাক্কলনে',
          'কেবল পরিসর থেকে সমকক্ষ গোষ্ঠী অতি পাতলা — অস্বীকার',
          'সমকক্ষ গোষ্ঠী অতি পাতলা থেকে ব্যবহারযোগ্য বিন্দু-প্রাক্কলনে',
          'এটি বদলায় না',
        ],
      },
      answer: 1,
    },
  ],
};
