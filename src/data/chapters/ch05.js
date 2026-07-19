/**
 * Chapter 5 — Market Participants
 * Part I, Stock Market Foundation.
 */

export default {
  n: 5,
  tools: [],

  excelSheet: {
    filename: 'ch05-margin-call-trigger.xlsx',
    sheetName: 'Margin Trigger',
    cells: [
      { cell: 'A1', v: 'Own Capital (BDT)' }, { cell: 'B1', v: 500000 },
      { cell: 'A2', v: 'Margin Ratio (1:x)' }, { cell: 'B2', v: 1 },
      { cell: 'A3', v: 'Loan Taken (BDT)' }, { cell: 'B3', f: 'B1*B2' },
      { cell: 'A4', v: 'Total Deployed (BDT)' }, { cell: 'B4', f: 'B1+B3' },

      { cell: 'A6', v: 'Purchase Price (BDT)' }, { cell: 'B6', v: 100 },
      { cell: 'A7', v: 'Shares Bought' }, { cell: 'B7', f: 'B4/B6' },

      { cell: 'A9', v: 'Maintenance Equity Ratio' }, { cell: 'B9', v: 0.4 },
      { cell: 'A10', v: 'MARGIN CALL PRICE' }, { cell: 'B10', f: 'B3/(B7*(1-B9))' },
      { cell: 'A11', v: 'Fall to Trigger (%)' }, { cell: 'B11', f: '(B6-B10)/B6*100' },

      { cell: 'A13', v: 'Forced-Sale Price' }, { cell: 'B13', v: 55 },
      { cell: 'A14', v: 'Portfolio Value at Sale' }, { cell: 'B14', f: 'B7*B13' },
      { cell: 'A15', v: 'Loan Repayable' }, { cell: 'B15', f: 'B3' },
      { cell: 'A16', v: 'Equity Remaining' }, { cell: 'B16', f: 'B14-B15' },
      { cell: 'A17', v: 'Loss on Own Capital (%)' }, { cell: 'B17', f: '(B16-B1)/B1*100' },

      { cell: 'A19', v: 'Unlevered Loss for Comparison (%)' }, { cell: 'B19', f: '(B13-B6)/B6*100' },
      { cell: 'A20', v: 'Leverage Multiplier' }, { cell: 'B20', f: 'B17/B19' },

      { cell: 'A22', v: 'WIPEOUT PRICE (equity = 0)' }, { cell: 'B22', f: 'B3/B7' },
    ],
  },

  objectives: {
    en: [
      'Identify every participant class on the DSE and state what each is optimising for.',
      'Explain ICB’s role as a state-linked stabiliser and why that is not a floor you can rely on.',
      'Compute the margin call trigger price and the wipeout price for a leveraged position.',
      'Explain the forced-selling cascade that converted 2010–11 leverage into a crash.',
      'Answer, before any trade, the question: who is on the other side, and why?',
    ],
    bn: [
      'ডিএসই-র প্রতিটি অংশগ্রহণকারী শ্রেণি চিহ্নিত করা এবং প্রত্যেকে কী সর্বোচ্চ করতে চাইছে তা বলা।',
      'রাষ্ট্র-সংশ্লিষ্ট স্থিতিশীলক হিসেবে আইসিবি-র ভূমিকা এবং কেন সেটি নির্ভরযোগ্য মেঝে নয় তা ব্যাখ্যা করা।',
      'লিভারেজড পজিশনের মার্জিন কল ট্রিগার মূল্য ও সম্পূর্ণ নিঃশেষের মূল্য গণনা করা।',
      '২০১০–১১ সালের লিভারেজকে ধসে রূপান্তরিত করা বাধ্যতামূলক বিক্রির ধারাবাহিক প্রতিক্রিয়া ব্যাখ্যা করা।',
      'যেকোনো লেনদেনের আগে উত্তর দেওয়া: অন্য পাশে কে, এবং কেন?',
    ],
  },

  blocks: {
    theory: {
      en: `Every price on the DSE is the outcome of a disagreement between two parties. Understanding who those parties are — and what each is trying to achieve — explains more market behaviour than any indicator.

### The participant classes

**1. Retail investors.** Roughly 1.8 million BO accounts, of which a large share are dormant. Characteristics: small ticket, price-taking, heavily concentrated in low-priced scrips, and — critically — **the only class with no professional obligation to sell**. Retail is the residual holder. Whatever institutions and sponsors do not want ends up here.

**2. ICB — Investment Corporation of Bangladesh.** State-owned, established 1976. Nominally an investment institution; functionally, and repeatedly, a **stabiliser deployed when the market falls**. ICB has been directed to buy in every major decline since 1996.

**Do not treat this as a floor.** ICB's capacity is finite and its mandate is political, not fiduciary. It can slow a decline; it has never prevented one. Positioning on the assumption that "the government will support the market" is positioning on a promise nobody made and nobody can keep.

**3. Banks and their own portfolios.** Banks hold capital-market exposure on their own books, capped by the *Bank Company (Amendment) Act, 2013* at 25% of regulatory capital (solo and consolidated bases treated separately). This cap matters enormously: when the market falls, a bank's exposure ratio *rises* even if it buys nothing, because the denominator is capital and the numerator is market value. **A falling market can force a compliant bank into becoming a seller.**

**4. Merchant banks — the margin lenders.** Regulated under the Margin Rules 1999 and subsequent BSEC directives. They lend against portfolios. This is the single most consequential participant class in Bangladeshi market history, for reasons developed below.

**5. Asset management companies and mutual funds.** ~35 listed funds plus unlisted ones. Persistent NAV discount. Constrained by their own redemption pressure and mandates.

**6. Insurance companies.** Long-duration liabilities, therefore theoretically patient capital. In practice, DSE insurance-sector *shares* are among the most speculatively traded on the exchange — a separate matter from insurers as investors.

**7. Foreign portfolio investors.** Operating through **NITA** (Non-Resident Investor's Taka Account), which permits repatriation of capital and dividends. Small as a share of total turnover — but concentrated in a handful of liquid blue chips (GP, Square, BATBC, BRAC Bank), where they are often the **marginal price setter**. Their exit is visible, fast, and driven by considerations — global EM allocation, taka stability — entirely unrelated to Bangladeshi company fundamentals.

**8. Sponsors and directors.** Required to hold a combined minimum of 30% of paid-up capital, with individual directors subject to a 2% floor (BSEC directives; verify current form). Their transactions must be disclosed. **Sponsor selling is the highest-quality signal available on this exchange** — they have information you do not, and no obligation to explain.

**9. Brokers (TREC holders).** Post-demutualization, holders of a Trading Right Entitlement Certificate. They earn on commission, which means their interest is turnover — not your returns. This is not corruption; it is structure.

### The mechanism that matters: margin

A margin loan lets an investor buy more than their capital allows. With BDT 5 lakh of own capital and a 1:1 ratio, they deploy BDT 10 lakh.

**On the way up this is wonderful.** A 20% rise on 10 lakh is 2 lakh — a 40% return on the 5 lakh actually risked.

**On the way down it is fatal, and it is fatal to other people too.**

Every margin account has a **maintenance equity ratio**. When the investor's equity — market value minus loan — falls below it, the lender issues a margin call. If the investor cannot deposit cash, **the lender sells the portfolio.** The lender is not making a market judgement. It is protecting its loan. It sells regardless of price, regardless of value, regardless of what else is happening.

### The cascade

This is the 2010–11 crash in five steps:

1. Prices fall for some ordinary reason.
2. Leveraged accounts breach maintenance ratios.
3. Merchant banks force-sell those portfolios into the market.
4. That selling pushes prices down further.
5. Which breaches the maintenance ratio on *more* accounts. Return to step 3.

The loop is self-reinforcing and has no natural stopping point except the exhaustion of leveraged holders. With ratios as loose as 1:2 — as they were in 2010 — a modest decline is enough to start it.

**Note what this means.** In a cascade, the seller is not selling because they think the stock is expensive. They are selling because a computer told a merchant bank that a ratio was breached. **Price stops carrying information about value and starts carrying information about leverage.** Fundamental analysis is not wrong during a cascade; it is simply irrelevant, which is worse.`,
      bn: `ডিএসই-র প্রতিটি দাম দুই পক্ষের মধ্যে একটি মতানৈক্যের ফলাফল। ঐ পক্ষগুলো কারা — এবং প্রত্যেকে কী অর্জন করতে চাইছে — তা বোঝা যেকোনো নির্দেশকের চেয়ে বেশি বাজার আচরণ ব্যাখ্যা করে।

### অংশগ্রহণকারী শ্রেণিসমূহ

**১. খুচরা বিনিয়োগকারী।** প্রায় ১৮ লক্ষ বিও অ্যাকাউন্ট, যার বড় অংশ নিষ্ক্রিয়। বৈশিষ্ট্য: ছোট আকার, দাম-গ্রহীতা, কম দামের স্ক্রিপে প্রবলভাবে কেন্দ্রীভূত, এবং — গুরুত্বপূর্ণভাবে — **একমাত্র শ্রেণি যার বিক্রি করার কোনো পেশাগত বাধ্যবাধকতা নেই**। খুচরা বিনিয়োগকারীই অবশিষ্ট ধারক। প্রতিষ্ঠান ও উদ্যোক্তারা যা চান না তা এখানেই এসে ঠেকে।

**২. আইসিবি — ইনভেস্টমেন্ট কর্পোরেশন অব বাংলাদেশ।** রাষ্ট্রায়ত্ত, ১৯৭৬ সালে প্রতিষ্ঠিত। নামে বিনিয়োগ প্রতিষ্ঠান; কার্যত, এবং বারবার, **বাজার পড়লে মোতায়েন করা একটি স্থিতিশীলক**। ১৯৯৬ সাল থেকে প্রতিটি বড় পতনে আইসিবি-কে কিনতে নির্দেশ দেওয়া হয়েছে।

**একে মেঝে ভাববেন না।** আইসিবি-র সক্ষমতা সীমিত এবং এর ম্যান্ডেট রাজনৈতিক, আস্থাভিত্তিক নয়। এটি পতন ধীর করতে পারে; কখনো পতন ঠেকায়নি। "সরকার বাজারকে সমর্থন দেবে" এই ধারণায় অবস্থান নেওয়া মানে এমন এক প্রতিশ্রুতির ওপর অবস্থান নেওয়া যা কেউ দেয়নি এবং কেউ রাখতে পারে না।

**৩. ব্যাংক ও তাদের নিজস্ব পোর্টফোলিও।** ব্যাংকগুলো নিজেদের হিসাবে পুঁজিবাজারে বিনিয়োগ রাখে, যা *ব্যাংক কোম্পানি (সংশোধন) আইন, ২০১৩* অনুযায়ী নিয়ন্ত্রক মূলধনের ২৫%-এ সীমাবদ্ধ (একক ও সমন্বিত ভিত্তি আলাদাভাবে গণ্য)। এই সীমা অত্যন্ত গুরুত্বপূর্ণ: বাজার পড়লে ব্যাংক কিছু না কিনলেও তার এক্সপোজার অনুপাত *বেড়ে* যায়, কারণ হর হলো মূলধন আর লব হলো বাজারমূল্য। **পতনশীল বাজার একটি নিয়ম-মান্যকারী ব্যাংককেও বিক্রেতা হতে বাধ্য করতে পারে।**

**৪. মার্চেন্ট ব্যাংক — মার্জিন ঋণদাতা।** মার্জিন বিধিমালা ১৯৯৯ ও পরবর্তী বিএসইসি নির্দেশনার অধীনে নিয়ন্ত্রিত। তারা পোর্টফোলিওর বিপরীতে ঋণ দেয়। বাংলাদেশের বাজার ইতিহাসে এটিই একক সবচেয়ে পরিণতিবাহী অংশগ্রহণকারী শ্রেণি, যার কারণ নিচে ব্যাখ্যা করা হয়েছে।

**৫. সম্পদ ব্যবস্থাপনা কোম্পানি ও মিউচুয়াল ফান্ড।** ~৩৫টি তালিকাভুক্ত ফান্ড এবং অতালিকাভুক্তগুলো। স্থায়ী NAV ছাড়। নিজেদের রিডেম্পশন চাপ ও ম্যান্ডেটে সীমাবদ্ধ।

**৬. বীমা কোম্পানি।** দীর্ঘমেয়াদি দায়, তাই তাত্ত্বিকভাবে ধৈর্যশীল মূলধন। বাস্তবে ডিএসই-র বীমা খাতের *শেয়ারগুলো* এক্সচেঞ্জের সবচেয়ে ফটকাধর্মীভাবে লেনদেনকৃত — যা বিনিয়োগকারী হিসেবে বীমাকারীদের থেকে ভিন্ন বিষয়।

**৭. বিদেশি পোর্টফোলিও বিনিয়োগকারী।** **NITA** (অনিবাসী বিনিয়োগকারীর টাকা হিসাব) এর মাধ্যমে পরিচালিত, যা মূলধন ও লভ্যাংশ প্রত্যাবাসনের অনুমতি দেয়। মোট লেনদেনের অংশ হিসেবে ছোট — কিন্তু হাতেগোনা কয়েকটি তরল ব্লু চিপে (জিপি, স্কয়ার, BATBC, ব্র্যাক ব্যাংক) কেন্দ্রীভূত, যেখানে তাঁরাই প্রায়ই **প্রান্তিক মূল্য নির্ধারক**। তাঁদের প্রস্থান দৃশ্যমান, দ্রুত, এবং এমন বিবেচনায় চালিত — বৈশ্বিক ইএম বণ্টন, টাকার স্থিতিশীলতা — যা বাংলাদেশি কোম্পানির মৌলভিত্তির সঙ্গে সম্পূর্ণ অসম্পর্কিত।

**৮. উদ্যোক্তা ও পরিচালক।** পরিশোধিত মূলধনের সম্মিলিত ন্যূনতম ৩০% ধারণ করতে বাধ্য, একক পরিচালকের জন্য ২% সর্বনিম্ন (বিএসইসি নির্দেশনা; বর্তমান রূপ যাচাই করুন)। তাঁদের লেনদেন প্রকাশ করতে হয়। **উদ্যোক্তার বিক্রি এই এক্সচেঞ্জের সর্বোচ্চ মানের সংকেত** — তাঁদের কাছে এমন তথ্য আছে যা আপনার নেই, এবং ব্যাখ্যা দেওয়ার কোনো বাধ্যবাধকতা নেই।

**৯. ব্রোকার (TREC ধারক)।** ডিমিউচুয়ালাইজেশনের পর, ট্রেডিং রাইট এনটাইটেলমেন্ট সার্টিফিকেটের ধারক। তাঁরা কমিশনে আয় করেন, অর্থাৎ তাঁদের স্বার্থ লেনদেনের পরিমাণে — আপনার রিটার্নে নয়। এটি দুর্নীতি নয়; এটি কাঠামো।

### যে কৌশলটি গুরুত্বপূর্ণ: মার্জিন

মার্জিন ঋণ একজন বিনিয়োগকারীকে তাঁর মূলধনের চেয়ে বেশি কিনতে দেয়। ৫ লক্ষ টাকার নিজস্ব মূলধন ও ১:১ অনুপাতে তিনি ১০ লক্ষ টাকা বিনিয়োগ করেন।

**ওঠার পথে এটি চমৎকার।** ১০ লক্ষে ২০% উত্থান মানে ২ লক্ষ — প্রকৃতপক্ষে ঝুঁকিতে রাখা ৫ লক্ষের ওপর ৪০% রিটার্ন।

**নামার পথে এটি মারাত্মক, এবং অন্যদের জন্যও মারাত্মক।**

প্রতিটি মার্জিন অ্যাকাউন্টের একটি **রক্ষণাবেক্ষণ ইকুইটি অনুপাত** থাকে। বিনিয়োগকারীর ইকুইটি — বাজারমূল্য বিয়োগ ঋণ — তার নিচে নামলে ঋণদাতা মার্জিন কল দেয়। বিনিয়োগকারী নগদ জমা দিতে না পারলে **ঋণদাতা পোর্টফোলিও বিক্রি করে দেয়।** ঋণদাতা কোনো বাজার-বিচার করছে না। সে তার ঋণ রক্ষা করছে। সে দাম নির্বিশেষে, মূল্য নির্বিশেষে, আর কী ঘটছে তা নির্বিশেষে বিক্রি করে।

### ধারাবাহিক প্রতিক্রিয়া

পাঁচ ধাপে এটিই ২০১০–১১ সালের ধস:

১. কোনো সাধারণ কারণে দাম পড়ে।
২. লিভারেজড অ্যাকাউন্টগুলো রক্ষণাবেক্ষণ অনুপাত লঙ্ঘন করে।
৩. মার্চেন্ট ব্যাংক ঐ পোর্টফোলিওগুলো বাজারে বাধ্যতামূলকভাবে বিক্রি করে।
৪. ঐ বিক্রি দাম আরও নিচে ঠেলে দেয়।
৫. যা *আরও* অ্যাকাউন্টে রক্ষণাবেক্ষণ অনুপাত লঙ্ঘন করে। ধাপ ৩-এ ফিরুন।

চক্রটি স্ব-শক্তিবর্ধক এবং লিভারেজড ধারকদের নিঃশেষ হওয়া ছাড়া এর কোনো স্বাভাবিক থামার বিন্দু নেই। ১:২-এর মতো শিথিল অনুপাতে — ২০১০ সালে যেমন ছিল — একটি মাঝারি পতনই এটি শুরু করার জন্য যথেষ্ট।

**এর অর্থ লক্ষ করুন।** ধারাবাহিক প্রতিক্রিয়ায় বিক্রেতা শেয়ারটি ব্যয়বহুল মনে করে বিক্রি করছেন না। তিনি বিক্রি করছেন কারণ একটি কম্পিউটার একটি মার্চেন্ট ব্যাংককে বলেছে একটি অনুপাত লঙ্ঘিত হয়েছে। **দাম মূল্য সম্পর্কে তথ্য বহন করা বন্ধ করে লিভারেজ সম্পর্কে তথ্য বহন করতে শুরু করে।** ধারাবাহিক প্রতিক্রিয়ার সময় মৌল বিশ্লেষণ ভুল নয়; এটি কেবল অপ্রাসঙ্গিক, যা আরও খারাপ।`,
    },

    simple: {
      en: `Every time you buy a share, somebody sold it to you. Ask yourself who, and why.

- **Another small investor** who needs money for a wedding. Fine — no information in that.
- **A foreign fund** rebalancing out of Bangladesh entirely. They are not selling your company; they are selling your country. Also mostly not information about the company.
- **A sponsor-director.** They built the business and know its next three quarters. **Pay very close attention.**
- **A merchant bank liquidating someone's blown-up margin account.** They have no opinion at all. They are a machine repaying a loan. This is the one that creates opportunity — and the one that can bury you if you are the account being liquidated.

### The dangerous magic of borrowed money

You have 5 lakh. The broker lends you another 5 lakh. You buy 10 lakh of shares.

The shares rise 20% → you made 2 lakh on 5 lakh of your own. **40%.** You feel clever.

The shares fall 20% → your 10 lakh is now 8 lakh. You still owe 5 lakh. Your own money: 3 lakh. **You lost 40% on a 20% fall.**

Keep falling. At some point the lender gets nervous and says: deposit cash today, or we sell. Most people do not have the cash. So the lender sells.

**And here is the part nobody explains.** The lender selling pushes the price lower. That lower price triggers the *next* person's margin call. Their lender sells too. That pushes it lower again.

Nobody in this chain believes the shares are worthless. Not one of them is making a judgement about the company. They are all just repaying loans, in order, at whatever price the screen shows.

**This is how 2010 turned into 2011.** Not because the companies got worse. Because too many people had borrowed, and the exit was too narrow for all of them at once.`,
      bn: `প্রতিবার আপনি যখন একটি শেয়ার কেনেন, কেউ একজন তা আপনার কাছে বিক্রি করেছেন। নিজেকে জিজ্ঞেস করুন কে, এবং কেন।

- **আরেকজন ক্ষুদ্র বিনিয়োগকারী** যাঁর বিয়ের জন্য টাকা দরকার। ঠিক আছে — এতে কোনো তথ্য নেই।
- **একটি বিদেশি ফান্ড** যা বাংলাদেশ থেকে সম্পূর্ণ বেরিয়ে যাচ্ছে। তাঁরা আপনার কোম্পানি বেচছেন না; তাঁরা আপনার দেশ বেচছেন। এটিও বেশিরভাগ ক্ষেত্রে কোম্পানি সম্পর্কে তথ্য নয়।
- **একজন উদ্যোক্তা-পরিচালক।** তিনি ব্যবসাটি গড়েছেন এবং পরবর্তী তিন প্রান্তিক জানেন। **খুব মনোযোগ দিন।**
- **একটি মার্চেন্ট ব্যাংক যে কারো উড়ে যাওয়া মার্জিন অ্যাকাউন্ট গুটাচ্ছে।** তাদের কোনো মতামতই নেই। তারা একটি যন্ত্র যা ঋণ শোধ করছে। এটিই সুযোগ তৈরি করে — এবং আপনিই যদি গুটানো অ্যাকাউন্ট হন তবে এটিই আপনাকে কবর দেয়।

### ধার করা টাকার বিপজ্জনক জাদু

আপনার আছে ৫ লক্ষ। ব্রোকার আপনাকে আরও ৫ লক্ষ ধার দেয়। আপনি ১০ লক্ষের শেয়ার কেনেন।

শেয়ার ২০% বাড়ল → আপনার নিজের ৫ লক্ষে আপনি ২ লক্ষ কামালেন। **৪০%।** নিজেকে চতুর মনে হয়।

শেয়ার ২০% পড়ল → আপনার ১০ লক্ষ এখন ৮ লক্ষ। আপনার এখনো ৫ লক্ষ দেনা। আপনার নিজের টাকা: ৩ লক্ষ। **২০% পতনে আপনি ৪০% হারালেন।**

পড়তে থাকুক। এক পর্যায়ে ঋণদাতা উদ্বিগ্ন হয়ে বলে: আজই নগদ জমা দিন, নয়তো আমরা বেচে দেব। বেশিরভাগ মানুষের কাছে নগদ থাকে না। তাই ঋণদাতা বেচে দেয়।

**আর এখানেই সেই অংশ যা কেউ ব্যাখ্যা করে না।** ঋণদাতার বিক্রি দাম আরও নিচে ঠেলে দেয়। ঐ নিচু দাম *পরবর্তী* ব্যক্তির মার্জিন কল ট্রিগার করে। তাঁর ঋণদাতাও বেচে। তা আবার দাম নামায়।

এই শৃঙ্খলের কেউই শেয়ারগুলো মূল্যহীন মনে করেন না। তাঁদের একজনও কোম্পানি সম্পর্কে কোনো বিচার করছেন না। তাঁরা সবাই কেবল ঋণ শোধ করছেন, ক্রমানুসারে, পর্দায় যা দাম দেখাচ্ছে তাতেই।

**এভাবেই ২০১০ পরিণত হলো ২০১১-তে।** কোম্পানিগুলো খারাপ হয়ে গিয়েছিল বলে নয়। বরং অনেক বেশি মানুষ ধার করেছিলেন, আর একসঙ্গে সবার জন্য বেরোনোর পথ ছিল খুব সরু।`,
    },

    example: {
      en: `### Anatomy of one blown account

An investor brings **BDT 5,00,000** of own capital to a merchant bank and takes a **1:1 margin loan** — another BDT 5,00,000. Total deployed: **BDT 10,00,000**, buying 10,000 shares at BDT 100.

The maintenance equity ratio is **40%**.

**Where does the margin call land?**

$$P_{call} = \\frac{L}{N \\times (1 - m)} = \\frac{5{,}00{,}000}{10{,}000 \\times 0.60} = \\text{BDT } 83.33$$

A fall of just **16.7%** triggers the call. Not 40%. Not 50%. **Sixteen point seven percent** — an entirely ordinary move on the DSE, achievable in two days at the circuit limit.

**What if they cannot deposit?** The lender sells. Suppose the forced sale clears at BDT 55 after the cascade has been running.

| | Value |
|---|---|
| Portfolio at sale | 10,000 × 55 = 5,50,000 |
| Loan repayable | 5,00,000 |
| **Equity remaining** | **50,000** |
| Started with | 5,00,000 |
| **Loss on own capital** | **−90%** |

**The share fell 45%. The investor lost 90%.** That is leverage, arithmetically.

**And the wipeout price:**
$$P_{wipeout} = \\frac{L}{N} = \\frac{5{,}00{,}000}{10{,}000} = \\text{BDT } 50$$

At BDT 50 the investor's equity is exactly zero. Below that they owe the merchant bank money on a portfolio they no longer own — which is how the 2010–11 aftermath produced years of litigation between merchant banks and clients with negative equity.

### Scaling it to the market

Now imagine forty thousand accounts in roughly that state simultaneously, which is approximately what existed in late 2010.

| Stage | Effect |
|---|---|
| Index falls 8% | First tranche of accounts breaches maintenance |
| Merchant banks force-sell | Supply hits a market with no matching bid |
| Index falls further | Second, larger tranche breaches |
| Force-selling accelerates | Circuit breakers lock scrips — **no exit at any price** |
| Repeat | Until leveraged holders are exhausted |

Recall Chapter 2: a locked lower circuit means you *cannot sell*. Now combine that with a lender who is legally obliged to sell. The lender cannot execute, the loan keeps growing relative to collateral, and when the scrip finally trades it gaps far below where the call was triggered.

**Circuit breakers and margin lending interact catastrophically.** Neither is dangerous alone. Together they guarantee that forced sellers execute at the worst possible prices.

### Reading sponsor behaviour

Two companies, both flat for six months:

| | Company X | Company Y |
|---|---|---|
| Sponsor holding 12 months ago | 42% | 42% |
| Sponsor holding today | 44% | 31% |
| Disclosed transactions | Two buys | Six sells |
| Public explanation | None | "Personal need" |

Y's sponsors reduced their stake by a quarter over a year, in six separate transactions, while telling the market nothing meaningful. They know the next three quarters. You do not.

**This is free, published, and almost universally ignored.** It is on the DSE disclosure page. Retail investors will spend hours on a candlestick pattern and never once check whether the people who built the company are quietly leaving it.`,
      bn: `### একটি উড়ে যাওয়া অ্যাকাউন্টের শারীরস্থান

একজন বিনিয়োগকারী একটি মার্চেন্ট ব্যাংকে **৫,০০,০০০ টাকা** নিজস্ব মূলধন আনেন এবং **১:১ মার্জিন ঋণ** নেন — আরও ৫,০০,০০০ টাকা। মোট বিনিয়োগ: **১০,০০,০০০ টাকা**, ১০০ টাকায় ১০,০০০ শেয়ার।

রক্ষণাবেক্ষণ ইকুইটি অনুপাত **৪০%**।

**মার্জিন কল কোথায় পড়ে?**

$$P_{call} = \\frac{L}{N \\times (1 - m)} = \\frac{5{,}00{,}000}{10{,}000 \\times 0.60} = ৮৩.৩৩ \\text{ টাকা}$$

মাত্র **১৬.৭%** পতনেই কল ট্রিগার হয়। ৪০% নয়। ৫০% নয়। **ষোলো দশমিক সাত শতাংশ** — ডিএসই-তে সম্পূর্ণ সাধারণ একটি নড়াচড়া, সার্কিট সীমায় দুই দিনেই অর্জনযোগ্য।

**জমা দিতে না পারলে কী হয়?** ঋণদাতা বিক্রি করে। ধরুন ধারাবাহিক প্রতিক্রিয়া চলাকালে বাধ্যতামূলক বিক্রি ৫৫ টাকায় হলো।

| | মূল্য |
|---|---|
| বিক্রির সময় পোর্টফোলিও | ১০,০০০ × ৫৫ = ৫,৫০,০০০ |
| পরিশোধযোগ্য ঋণ | ৫,০০,০০০ |
| **অবশিষ্ট ইকুইটি** | **৫০,০০০** |
| শুরু করেছিলেন | ৫,০০,০০০ |
| **নিজস্ব মূলধনে ক্ষতি** | **−৯০%** |

**শেয়ার পড়ল ৪৫%। বিনিয়োগকারী হারালেন ৯০%।** এটিই লিভারেজ, পাটিগাণিতিকভাবে।

**আর সম্পূর্ণ নিঃশেষের মূল্য:**
$$P_{wipeout} = \\frac{L}{N} = \\frac{5{,}00{,}000}{10{,}000} = ৫০ \\text{ টাকা}$$

৫০ টাকায় বিনিয়োগকারীর ইকুইটি ঠিক শূন্য। এর নিচে তিনি এমন একটি পোর্টফোলিওর বিপরীতে মার্চেন্ট ব্যাংকের কাছে ঋণী থাকেন যা আর তাঁর নয় — আর এভাবেই ২০১০–১১ পরবর্তী সময়ে ঋণাত্মক ইকুইটির ক্লায়েন্ট ও মার্চেন্ট ব্যাংকের মধ্যে বছরের পর বছর মামলা তৈরি হলো।

### বাজারের মাপে নিয়ে যাওয়া

এবার কল্পনা করুন চল্লিশ হাজার অ্যাকাউন্ট একই সঙ্গে মোটামুটি ঐ অবস্থায়, যা ২০১০-এর শেষে আনুমানিক বাস্তবতা ছিল।

| ধাপ | প্রভাব |
|---|---|
| সূচক ৮% পড়ে | প্রথম দফা অ্যাকাউন্ট রক্ষণাবেক্ষণ লঙ্ঘন করে |
| মার্চেন্ট ব্যাংক বাধ্যতামূলক বিক্রি করে | সরবরাহ এমন বাজারে পড়ে যেখানে মিলে যাওয়ার মতো ক্রয়াদেশ নেই |
| সূচক আরও পড়ে | দ্বিতীয়, বড় দফা লঙ্ঘন করে |
| বাধ্যতামূলক বিক্রি ত্বরান্বিত হয় | সার্কিট ব্রেকার স্ক্রিপ আটকে দেয় — **কোনো দামেই প্রস্থান নেই** |
| পুনরাবৃত্তি | লিভারেজড ধারকরা নিঃশেষ না হওয়া পর্যন্ত |

অধ্যায় ২ স্মরণ করুন: আটকানো নিম্ন সার্কিট মানে আপনি *বিক্রি করতে পারবেন না*। এবার এর সঙ্গে এমন একজন ঋণদাতা যোগ করুন যিনি আইনত বিক্রি করতে বাধ্য। ঋণদাতা কার্যকর করতে পারেন না, জামানতের তুলনায় ঋণ বাড়তে থাকে, এবং স্ক্রিপটি অবশেষে যখন লেনদেন হয় তখন কল ট্রিগার হওয়ার জায়গা থেকে অনেক নিচে গ্যাপ দেয়।

**সার্কিট ব্রেকার ও মার্জিন ঋণ বিপর্যয়করভাবে মিথস্ক্রিয়া করে।** একা কোনোটিই বিপজ্জনক নয়। একসঙ্গে এরা নিশ্চিত করে যে বাধ্যতামূলক বিক্রেতারা সম্ভাব্য সবচেয়ে খারাপ দামে কার্যকর করবেন।

### উদ্যোক্তার আচরণ পড়া

দুটি কোম্পানি, দুটোই ছয় মাস ধরে স্থির:

| | কোম্পানি X | কোম্পানি Y |
|---|---|---|
| ১২ মাস আগে উদ্যোক্তা মালিকানা | ৪২% | ৪২% |
| আজকের উদ্যোক্তা মালিকানা | ৪৪% | ৩১% |
| প্রকাশিত লেনদেন | দুটি ক্রয় | ছয়টি বিক্রয় |
| প্রকাশ্য ব্যাখ্যা | নেই | "ব্যক্তিগত প্রয়োজন" |

Y-এর উদ্যোক্তারা এক বছরে ছয়টি পৃথক লেনদেনে তাঁদের অংশীদারিত্ব এক-চতুর্থাংশ কমিয়েছেন, বাজারকে অর্থবহ কিছু না বলে। তাঁরা পরবর্তী তিন প্রান্তিক জানেন। আপনি জানেন না।

**এটি বিনামূল্যের, প্রকাশিত, এবং প্রায় সর্বজনীনভাবে উপেক্ষিত।** এটি ডিএসই প্রকাশনা পাতায় আছে। খুচরা বিনিয়োগকারীরা একটি ক্যান্ডেলস্টিক প্যাটার্নে ঘণ্টার পর ঘণ্টা দেবেন, অথচ একবারও দেখবেন না যাঁরা কোম্পানিটি গড়েছেন তাঁরা চুপচাপ বেরিয়ে যাচ্ছেন কি না।`,
    },

    formula: {
      en: `**Investor equity in a margin account:**
$$E = (P \\times N) - L$$

where $P$ is market price, $N$ shares held, $L$ the outstanding loan.

**Equity ratio:**
$$e = \\frac{E}{P \\times N} = \\frac{(P \\times N) - L}{P \\times N}$$

**Margin call trigger price.** A call occurs when $e$ falls below the maintenance ratio $m$. Setting $e = m$ and solving for $P$:

$$m = \\frac{PN - L}{PN} \\;\\Rightarrow\\; PN(1-m) = L \\;\\Rightarrow\\; \\boxed{P_{call} = \\frac{L}{N(1-m)}}$$

**Wipeout price** — equity exactly zero:
$$P_{wipeout} = \\frac{L}{N}$$

**Percentage fall to trigger:**
$$\\text{Fall}_{call} = \\frac{P_0 - P_{call}}{P_0} \\times 100$$

**Leverage multiplier.** How a price move is amplified onto own capital:
$$\\lambda = \\frac{\\text{Total Deployed}}{\\text{Own Capital}} = 1 + \\text{margin ratio}$$

$$\\text{Return on own capital} = \\lambda \\times \\text{price return}$$

**Bank capital-market exposure ratio** — note the denominator does not fall with the market:
$$\\text{Exposure} = \\frac{\\text{Market Value of Holdings}}{\\text{Regulatory Capital}} \\times 100$$

**Cascade condition.** A cascade is self-sustaining while forced supply at each round exceeds the market's absorptive depth:
$$Q_{forced}(t) > D_{absorb}(t)$$

There is no equilibrium price in this regime — only the price at which leveraged holders run out.`,
      bn: `**মার্জিন অ্যাকাউন্টে বিনিয়োগকারীর ইকুইটি:**
$$E = (P \\times N) - L$$

যেখানে $P$ বাজারমূল্য, $N$ ধারণকৃত শেয়ার, $L$ বকেয়া ঋণ।

**ইকুইটি অনুপাত:**
$$e = \\frac{E}{P \\times N} = \\frac{(P \\times N) - L}{P \\times N}$$

**মার্জিন কল ট্রিগার মূল্য।** $e$ রক্ষণাবেক্ষণ অনুপাত $m$-এর নিচে নামলে কল হয়। $e = m$ বসিয়ে $P$ বের করলে:

$$m = \\frac{PN - L}{PN} \\;\\Rightarrow\\; PN(1-m) = L \\;\\Rightarrow\\; \\boxed{P_{call} = \\frac{L}{N(1-m)}}$$

**সম্পূর্ণ নিঃশেষের মূল্য** — ইকুইটি ঠিক শূন্য:
$$P_{wipeout} = \\frac{L}{N}$$

**ট্রিগার পর্যন্ত শতকরা পতন:**
$$\\text{পতন}_{call} = \\frac{P_0 - P_{call}}{P_0} \\times 100$$

**লিভারেজ গুণক।** নিজস্ব মূলধনে মূল্য পরিবর্তন কীভাবে বর্ধিত হয়:
$$\\lambda = \\frac{\\text{মোট বিনিয়োগ}}{\\text{নিজস্ব মূলধন}} = 1 + \\text{মার্জিন অনুপাত}$$

$$\\text{নিজস্ব মূলধনে রিটার্ন} = \\lambda \\times \\text{মূল্য রিটার্ন}$$

**ব্যাংকের পুঁজিবাজার এক্সপোজার অনুপাত** — লক্ষ করুন হর বাজারের সঙ্গে কমে না:
$$\\text{এক্সপোজার} = \\frac{\\text{মালিকানার বাজারমূল্য}}{\\text{নিয়ন্ত্রক মূলধন}} \\times 100$$

**ধারাবাহিক প্রতিক্রিয়ার শর্ত।** প্রতিটি দফায় বাধ্যতামূলক সরবরাহ বাজারের শোষণ গভীরতা ছাড়িয়ে গেলে প্রতিক্রিয়াটি স্ব-টেকসই থাকে:
$$Q_{forced}(t) > D_{absorb}(t)$$

এই অবস্থায় কোনো ভারসাম্য মূল্য নেই — কেবল সেই দাম আছে যেখানে লিভারেজড ধারকরা ফুরিয়ে যান।`,
    },

    manual: {
      en: `**Scenario.** Own capital BDT 5,00,000. Margin ratio 1:1, so loan = BDT 5,00,000. Total deployed BDT 10,00,000 at a purchase price of BDT 100. Maintenance equity ratio 40%.

**Step 1 — Shares bought:**
$$N = \\frac{10{,}00{,}000}{100} = 10{,}000 \\text{ shares}$$

**Step 2 — Leverage multiplier:**
$$\\lambda = \\frac{10{,}00{,}000}{5{,}00{,}000} = 2.0\\times$$

**Step 3 — Margin call trigger price:**
$$P_{call} = \\frac{5{,}00{,}000}{10{,}000 \\times (1 - 0.40)} = \\frac{5{,}00{,}000}{6{,}000} = \\text{BDT } 83.33$$

**Step 4 — Fall required to trigger:**
$$\\frac{100 - 83.33}{100} \\times 100 = 16.67\\%$$

**Step 5 — Wipeout price:**
$$P_{wipeout} = \\frac{5{,}00{,}000}{10{,}000} = \\text{BDT } 50.00$$

**Step 6 — Forced sale at BDT 55:**

$$\\text{Portfolio} = 10{,}000 \\times 55 = \\text{BDT } 5{,}50{,}000$$
$$\\text{Equity} = 5{,}50{,}000 - 5{,}00{,}000 = \\text{BDT } 50{,}000$$

**Step 7 — Loss on own capital:**
$$\\frac{50{,}000 - 5{,}00{,}000}{5{,}00{,}000} \\times 100 = -90\\%$$

**Step 8 — Compare to the unlevered outcome:**
$$\\frac{55 - 100}{100} \\times 100 = -45\\%$$

$$\\text{Multiplier} = \\frac{-90}{-45} = 2.0\\times \\;\\checkmark$$

**Interpretation.** Three numbers should stay with you.

**16.67%** — the fall that triggers the call. On a market with a 10% daily circuit, that is under two sessions. You do not get a week to think.

**BDT 50** — the price at which your capital is gone entirely and every further taka of decline is a debt you owe.

**2.0×** — the multiplier, and it is symmetric. It does not become 1.5× when you would prefer it to. The same arithmetic that produced your 40% gain produces the 90% loss.

**The discipline:** compute $P_{call}$ *before* you borrow, and ask honestly whether a fall of that size is plausible within your holding period. On the DSE, a 17% fall is not a tail event. It is a Tuesday.`,
      bn: `**পরিস্থিতি।** নিজস্ব মূলধন ৫,০০,০০০ টাকা। মার্জিন অনুপাত ১:১, তাই ঋণ = ৫,০০,০০০ টাকা। মোট বিনিয়োগ ১০,০০,০০০ টাকা, ক্রয়মূল্য ১০০ টাকা। রক্ষণাবেক্ষণ ইকুইটি অনুপাত ৪০%।

**ধাপ ১ — ক্রয়কৃত শেয়ার:**
$$N = \\frac{10{,}00{,}000}{100} = 10{,}000 \\text{ শেয়ার}$$

**ধাপ ২ — লিভারেজ গুণক:**
$$\\lambda = \\frac{10{,}00{,}000}{5{,}00{,}000} = 2.0\\times$$

**ধাপ ৩ — মার্জিন কল ট্রিগার মূল্য:**
$$P_{call} = \\frac{5{,}00{,}000}{10{,}000 \\times (1 - 0.40)} = ৮৩.৩৩ \\text{ টাকা}$$

**ধাপ ৪ — ট্রিগারের জন্য প্রয়োজনীয় পতন:**
$$\\frac{100 - 83.33}{100} \\times 100 = 16.67\\%$$

**ধাপ ৫ — সম্পূর্ণ নিঃশেষের মূল্য:**
$$P_{wipeout} = \\frac{5{,}00{,}000}{10{,}000} = ৫০.০০ \\text{ টাকা}$$

**ধাপ ৬ — ৫৫ টাকায় বাধ্যতামূলক বিক্রি:**

$$\\text{পোর্টফোলিও} = 10{,}000 \\times 55 = ৫{,}৫০{,}০০০ \\text{ টাকা}$$
$$\\text{ইকুইটি} = 5{,}50{,}000 - 5{,}00{,}000 = ৫০{,}০০০ \\text{ টাকা}$$

**ধাপ ৭ — নিজস্ব মূলধনে ক্ষতি:**
$$\\frac{50{,}000 - 5{,}00{,}000}{5{,}00{,}000} \\times 100 = -90\\%$$

**ধাপ ৮ — লিভারেজবিহীন ফলাফলের সঙ্গে তুলনা:**
$$\\frac{55 - 100}{100} \\times 100 = -45\\%$$

$$\\text{গুণক} = \\frac{-90}{-45} = 2.0\\times \\;\\checkmark$$

**ব্যাখ্যা।** তিনটি সংখ্যা আপনার মনে থাকা উচিত।

**১৬.৬৭%** — যে পতন কল ট্রিগার করে। ১০% দৈনিক সার্কিটের বাজারে তা দুই সেশনের কম। ভাবার জন্য আপনি এক সপ্তাহ পান না।

**৫০ টাকা** — যে দামে আপনার মূলধন সম্পূর্ণ শেষ এবং এরপর প্রতিটি টাকার পতন আপনার দেনা।

**২.০×** — গুণকটি, এবং এটি প্রতিসম। আপনি চাইলেই এটি ১.৫× হয়ে যায় না। যে পাটিগণিত আপনার ৪০% লাভ তৈরি করেছিল সেটিই ৯০% ক্ষতি তৈরি করে।

**শৃঙ্খলা:** ধার নেওয়ার *আগেই* $P_{call}$ গণনা করুন, এবং সৎভাবে জিজ্ঞেস করুন আপনার ধারণকালের মধ্যে ঐ মাপের পতন সম্ভাব্য কি না। ডিএসই-তে ১৭% পতন কোনো বিরল ঘটনা নয়। এটি একটি মঙ্গলবার।`,
    },

    excel: {
      en: `\`\`\`
A1: Own Capital (BDT)              B1: 500000
A2: Margin Ratio (1:x)             B2: 1
A3: Loan Taken (BDT)               B3: =B1*B2
A4: Total Deployed (BDT)           B4: =B1+B3

A6: Purchase Price (BDT)           B6: 100
A7: Shares Bought                  B7: =B4/B6

A9: Maintenance Equity Ratio       B9: 0.40
A10: MARGIN CALL PRICE             B10: =B3/(B7*(1-B9))
A11: Fall to Trigger (%)           B11: =(B6-B10)/B6*100

A13: Forced-Sale Price             B13: 55
A14: Portfolio Value at Sale       B14: =B7*B13
A15: Loan Repayable                B15: =B3
A16: Equity Remaining              B16: =B14-B15
A17: Loss on Own Capital (%)       B17: =(B16-B1)/B1*100

A19: Unlevered Loss (%)            B19: =(B13-B6)/B6*100
A20: Leverage Multiplier           B20: =B17/B19

A22: WIPEOUT PRICE (equity = 0)    B22: =B3/B7
\`\`\`

**B10 and B22 are the two cells to write on a piece of paper and keep on your desk.** Before you accept any margin facility, put your real numbers in and look at B11. If the fall required to trigger a call is a move you have personally watched this scrip make in the last twelve months, you are not taking a considered risk — you are scheduling a forced sale.

Set B2 to 2 to see the 2010 regime. The trigger fall drops to 11.1% and the wipeout price rises to BDT 66.67.`,
      bn: `\`\`\`
A1: নিজস্ব মূলধন (টাকা)             B1: 500000
A2: মার্জিন অনুপাত (১:x)            B2: 1
A3: গৃহীত ঋণ (টাকা)                 B3: =B1*B2
A4: মোট বিনিয়োগ (টাকা)             B4: =B1+B3

A6: ক্রয়মূল্য (টাকা)                B6: 100
A7: ক্রয়কৃত শেয়ার                  B7: =B4/B6

A9: রক্ষণাবেক্ষণ ইকুইটি অনুপাত       B9: 0.40
A10: মার্জিন কল মূল্য                B10: =B3/(B7*(1-B9))
A11: ট্রিগার পর্যন্ত পতন (%)         B11: =(B6-B10)/B6*100

A13: বাধ্যতামূলক বিক্রয় মূল্য        B13: 55
A14: বিক্রির সময় পোর্টফোলিও মূল্য    B14: =B7*B13
A15: পরিশোধযোগ্য ঋণ                 B15: =B3
A16: অবশিষ্ট ইকুইটি                 B16: =B14-B15
A17: নিজস্ব মূলধনে ক্ষতি (%)         B17: =(B16-B1)/B1*100

A19: লিভারেজবিহীন ক্ষতি (%)         B19: =(B13-B6)/B6*100
A20: লিভারেজ গুণক                   B20: =B17/B19

A22: নিঃশেষের মূল্য (ইকুইটি = ০)     B22: =B3/B7
\`\`\`

**B10 ও B22 — এই দুটি ঘর কাগজে লিখে ডেস্কে রাখুন।** কোনো মার্জিন সুবিধা নেওয়ার আগে আপনার প্রকৃত সংখ্যা বসিয়ে B11 দেখুন। কল ট্রিগার হতে যে পতন দরকার তা যদি গত বারো মাসে আপনি নিজে এই স্ক্রিপে দেখে থাকেন, তবে আপনি বিবেচিত ঝুঁকি নিচ্ছেন না — আপনি একটি বাধ্যতামূলক বিক্রির সময়সূচি ঠিক করছেন।

২০১০ সালের ব্যবস্থা দেখতে B2-তে ২ বসান। ট্রিগার পতন নেমে আসে ১১.১%-এ এবং নিঃশেষের মূল্য ওঠে ৬৬.৬৭ টাকায়।`,
    },

    python: {
      en: `\`\`\`python
"""
Chapter 5 — Margin mechanics and the forced-selling cascade.
Educational.
"""
from dataclasses import dataclass


@dataclass
class MarginAccount:
    """One leveraged portfolio at a merchant bank."""
    own_capital: float
    margin_ratio: float      # 1.0 means 1:1
    purchase_price: float
    maintenance_ratio: float = 0.40

    @property
    def loan(self) -> float:
        return self.own_capital * self.margin_ratio

    @property
    def deployed(self) -> float:
        return self.own_capital + self.loan

    @property
    def shares(self) -> float:
        return self.deployed / self.purchase_price

    @property
    def leverage(self) -> float:
        return self.deployed / self.own_capital

    @property
    def call_price(self) -> float:
        """Price at which equity ratio hits the maintenance floor."""
        return self.loan / (self.shares * (1 - self.maintenance_ratio))

    @property
    def wipeout_price(self) -> float:
        """Price at which own capital is exactly zero."""
        return self.loan / self.shares

    @property
    def fall_to_call_pct(self) -> float:
        return (self.purchase_price - self.call_price) / self.purchase_price * 100

    def outcome_at(self, price: float) -> dict:
        portfolio = self.shares * price
        equity = portfolio - self.loan
        return {
            "price": price,
            "portfolio": portfolio,
            "equity": equity,
            "own_capital_return_pct": (equity - self.own_capital) / self.own_capital * 100,
            "unlevered_return_pct": (price - self.purchase_price) / self.purchase_price * 100,
            "called": price <= self.call_price,
            "wiped_out": equity <= 0,
        }


def cascade(start_price: float, accounts: int, rounds: int = 5,
            impact_per_round: float = 0.08) -> None:
    """
    Illustrative only: each round of forced selling pushes price down,
    which drags the next tranche of accounts through their call price.
    """
    px = start_price
    remaining = accounts
    print(f"{'Round':>5} {'Price':>8} {'Accounts called':>16} {'Remaining':>10}")
    print("-" * 44)
    for r in range(1, rounds + 1):
        called = int(remaining * 0.35)
        remaining -= called
        print(f"{r:>5} {px:>8.2f} {called:>16,} {remaining:>10,}")
        px *= (1 - impact_per_round)
        if remaining <= 0:
            break


if __name__ == "__main__":
    acct = MarginAccount(
        own_capital=5_00_000,
        margin_ratio=1.0,
        purchase_price=100.0,
        maintenance_ratio=0.40,
    )

    print(f"Own capital       : BDT {acct.own_capital:,.0f}")
    print(f"Loan              : BDT {acct.loan:,.0f}")
    print(f"Deployed          : BDT {acct.deployed:,.0f}")
    print(f"Shares            : {acct.shares:,.0f}")
    print(f"Leverage          : {acct.leverage:.2f}x")
    print(f"MARGIN CALL PRICE : BDT {acct.call_price:.2f}  ({acct.fall_to_call_pct:.2f}% fall)")
    print(f"WIPEOUT PRICE     : BDT {acct.wipeout_price:.2f}")
    print()

    print(f"{'Price':>8} {'Equity':>12} {'Own ret%':>10} {'Unlev%':>9}  Status")
    print("-" * 60)
    for px in (100.0, 90.0, 83.33, 70.0, 55.0, 50.0, 45.0):
        o = acct.outcome_at(px)
        status = "WIPED OUT" if o["wiped_out"] else ("CALLED" if o["called"] else "ok")
        print(f"{px:>8.2f} {o['equity']:>12,.0f} {o['own_capital_return_pct']:>9.1f}% "
              f"{o['unlevered_return_pct']:>8.1f}%  {status}")
    print()

    print("Illustrative cascade from BDT 100 across 40,000 leveraged accounts:")
    cascade(start_price=100.0, accounts=40_000)
\`\`\`

**Read the two return columns side by side.** At BDT 55 the share is down 45% and the account is down 90%. At BDT 45 the share is down 55% and the account holds *negative* equity — the investor now owes the merchant bank money on shares they no longer own.

The cascade function is deliberately crude. Its only job is to show the shape: **each round of forced selling manufactures the price decline that triggers the next round.** No participant in that loop has an opinion about the companies involved.`,
      bn: `\`\`\`python
"""
অধ্যায় ৫ — মার্জিন কার্যপ্রণালী ও বাধ্যতামূলক বিক্রির ধারাবাহিক প্রতিক্রিয়া।
শিক্ষামূলক।
"""
from dataclasses import dataclass


@dataclass
class MarginAccount:
    """একটি মার্চেন্ট ব্যাংকে একটি লিভারেজড পোর্টফোলিও।"""
    own_capital: float
    margin_ratio: float      # ১.০ মানে ১:১
    purchase_price: float
    maintenance_ratio: float = 0.40

    @property
    def loan(self) -> float:
        return self.own_capital * self.margin_ratio

    @property
    def deployed(self) -> float:
        return self.own_capital + self.loan

    @property
    def shares(self) -> float:
        return self.deployed / self.purchase_price

    @property
    def leverage(self) -> float:
        return self.deployed / self.own_capital

    @property
    def call_price(self) -> float:
        """যে দামে ইকুইটি অনুপাত রক্ষণাবেক্ষণ সীমায় পৌঁছায়।"""
        return self.loan / (self.shares * (1 - self.maintenance_ratio))

    @property
    def wipeout_price(self) -> float:
        """যে দামে নিজস্ব মূলধন ঠিক শূন্য।"""
        return self.loan / self.shares

    @property
    def fall_to_call_pct(self) -> float:
        return (self.purchase_price - self.call_price) / self.purchase_price * 100

    def outcome_at(self, price: float) -> dict:
        portfolio = self.shares * price
        equity = portfolio - self.loan
        return {
            "price": price,
            "portfolio": portfolio,
            "equity": equity,
            "own_capital_return_pct": (equity - self.own_capital) / self.own_capital * 100,
            "unlevered_return_pct": (price - self.purchase_price) / self.purchase_price * 100,
            "called": price <= self.call_price,
            "wiped_out": equity <= 0,
        }


def cascade(start_price: float, accounts: int, rounds: int = 5,
            impact_per_round: float = 0.08) -> None:
    """
    কেবল দৃষ্টান্তমূলক: প্রতিটি দফার বাধ্যতামূলক বিক্রি দাম নিচে ঠেলে দেয়,
    যা পরবর্তী দফার অ্যাকাউন্টগুলোকে তাদের কল মূল্যের নিচে টেনে আনে।
    """
    px = start_price
    remaining = accounts
    print(f"{'Round':>5} {'Price':>8} {'Accounts called':>16} {'Remaining':>10}")
    print("-" * 44)
    for r in range(1, rounds + 1):
        called = int(remaining * 0.35)
        remaining -= called
        print(f"{r:>5} {px:>8.2f} {called:>16,} {remaining:>10,}")
        px *= (1 - impact_per_round)
        if remaining <= 0:
            break


if __name__ == "__main__":
    acct = MarginAccount(
        own_capital=5_00_000,
        margin_ratio=1.0,
        purchase_price=100.0,
        maintenance_ratio=0.40,
    )

    print(f"Own capital       : BDT {acct.own_capital:,.0f}")
    print(f"Loan              : BDT {acct.loan:,.0f}")
    print(f"Deployed          : BDT {acct.deployed:,.0f}")
    print(f"Shares            : {acct.shares:,.0f}")
    print(f"Leverage          : {acct.leverage:.2f}x")
    print(f"MARGIN CALL PRICE : BDT {acct.call_price:.2f}  ({acct.fall_to_call_pct:.2f}% fall)")
    print(f"WIPEOUT PRICE     : BDT {acct.wipeout_price:.2f}")
    print()

    print(f"{'Price':>8} {'Equity':>12} {'Own ret%':>10} {'Unlev%':>9}  Status")
    print("-" * 60)
    for px in (100.0, 90.0, 83.33, 70.0, 55.0, 50.0, 45.0):
        o = acct.outcome_at(px)
        status = "WIPED OUT" if o["wiped_out"] else ("CALLED" if o["called"] else "ok")
        print(f"{px:>8.2f} {o['equity']:>12,.0f} {o['own_capital_return_pct']:>9.1f}% "
              f"{o['unlevered_return_pct']:>8.1f}%  {status}")
    print()

    print("Illustrative cascade from BDT 100 across 40,000 leveraged accounts:")
    cascade(start_price=100.0, accounts=40_000)
\`\`\`

**দুটি রিটার্ন কলাম পাশাপাশি পড়ুন।** ৫৫ টাকায় শেয়ার ৪৫% নিচে আর অ্যাকাউন্ট ৯০% নিচে। ৪৫ টাকায় শেয়ার ৫৫% নিচে আর অ্যাকাউন্টের ইকুইটি *ঋণাত্মক* — বিনিয়োগকারী এখন এমন শেয়ারের বিপরীতে মার্চেন্ট ব্যাংকের কাছে ঋণী যা আর তাঁর নয়।

cascade ফাংশনটি ইচ্ছাকৃতভাবে সরল। এর একমাত্র কাজ আকৃতিটি দেখানো: **বাধ্যতামূলক বিক্রির প্রতিটি দফা সেই দরপতন তৈরি করে যা পরবর্তী দফা ট্রিগার করে।** ঐ চক্রের কোনো অংশগ্রহণকারীর সংশ্লিষ্ট কোম্পানিগুলো সম্পর্কে কোনো মতামত নেই।`,
    },

    mistakes: {
      en: `1. **Believing ICB will put a floor under the market.** It has been directed to buy in every decline since 1996 and has never prevented one. Its capacity is finite and its mandate is political. "The government will support the market" is a sentence, not a plan.
2. **Taking margin without computing the call price first.** If you cannot state $P_{call}$ before you borrow, you do not know what you have agreed to.
3. **Thinking leverage is asymmetric in your favour.** The multiplier is the same number in both directions. A 2× that gives 40% on the way up gives 90% on the way down once forced-sale slippage is included.
4. **Ignoring sponsor-director disclosures.** They are published, free, and the highest-signal data available. Six sells in a year with no explanation outranks any chart pattern you will ever find.
5. **Assuming your broker's interest matches yours.** They earn on turnover. A broker who calls with a new idea every week is behaving rationally within their incentive, and you are the cost.
6. **Treating foreign investor exits as company news.** FPI flows respond to global EM allocation and taka stability. When they sell GP, that is frequently a statement about Bangladesh or about emerging markets, not about Grameenphone.
7. **Forgetting that falling markets force banks to sell.** The exposure ratio has capital in the denominator, which does not fall with the market. A compliant bank can be pushed into selling by the decline itself.
8. **Not asking who is on the other side.** If the seller is a merchant bank liquidating collateral, the price carries no information about value — and that is precisely when the disciplined buyer is paid.`,
      bn: `১. **আইসিবি বাজারের নিচে মেঝে দেবে বিশ্বাস করা।** ১৯৯৬ সাল থেকে প্রতিটি পতনে তাকে কিনতে নির্দেশ দেওয়া হয়েছে এবং কখনো একটিও ঠেকায়নি। এর সক্ষমতা সীমিত ও ম্যান্ডেট রাজনৈতিক। "সরকার বাজারকে সমর্থন দেবে" একটি বাক্য, পরিকল্পনা নয়।
২. **আগে কল মূল্য গণনা না করে মার্জিন নেওয়া।** ধার নেওয়ার আগে $P_{call}$ বলতে না পারলে আপনি জানেন না কীসে রাজি হয়েছেন।
৩. **লিভারেজ আপনার অনুকূলে অপ্রতিসম ভাবা।** গুণকটি দুই দিকেই একই সংখ্যা। যে ২× ওঠার পথে ৪০% দেয়, বাধ্যতামূলক বিক্রির স্লিপেজসহ নামার পথে সেটিই ৯০% দেয়।
৪. **উদ্যোক্তা-পরিচালকের প্রকাশনা উপেক্ষা করা।** এগুলো প্রকাশিত, বিনামূল্যের, এবং প্রাপ্য সর্বোচ্চ-সংকেত তথ্য। ব্যাখ্যাহীন এক বছরে ছয়টি বিক্রয় আপনার খুঁজে পাওয়া যেকোনো চার্ট প্যাটার্নের চেয়ে গুরুত্বপূর্ণ।
৫. **ব্রোকারের স্বার্থ আপনার সঙ্গে মেলে ধরে নেওয়া।** তাঁরা লেনদেনের পরিমাণে আয় করেন। যে ব্রোকার প্রতি সপ্তাহে নতুন ধারণা নিয়ে ফোন করেন তিনি তাঁর প্রণোদনার মধ্যে যুক্তিসঙ্গত আচরণ করছেন, আর খরচটা আপনি।
৬. **বিদেশি বিনিয়োগকারীর প্রস্থানকে কোম্পানির খবর ভাবা।** এফপিআই প্রবাহ বৈশ্বিক ইএম বণ্টন ও টাকার স্থিতিশীলতায় সাড়া দেয়। তাঁরা জিপি বেচলে সেটি প্রায়ই বাংলাদেশ বা উদীয়মান বাজার সম্পর্কে বক্তব্য, গ্রামীণফোন সম্পর্কে নয়।
৭. **পতনশীল বাজার ব্যাংককে বিক্রিতে বাধ্য করে তা ভুলে যাওয়া।** এক্সপোজার অনুপাতের হরে মূলধন, যা বাজারের সঙ্গে কমে না। পতনটাই একটি নিয়ম-মান্যকারী ব্যাংককে বিক্রিতে ঠেলে দিতে পারে।
৮. **অন্য পাশে কে তা জিজ্ঞেস না করা।** বিক্রেতা যদি জামানত গুটানো মার্চেন্ট ব্যাংক হয়, তবে দাম মূল্য সম্পর্কে কোনো তথ্য বহন করে না — আর ঠিক তখনই শৃঙ্খলাবদ্ধ ক্রেতা পুরস্কৃত হন।`,
    },

    tips: {
      en: `- **Write $P_{call}$ and $P_{wipeout}$ on paper before signing any margin agreement.** Then look at the scrip's last twelve months and ask whether it has already made a move that size. If it has, you are not assessing risk — you are scheduling an outcome.
- **Track aggregate market margin exposure, not just your own.** When the market as a whole is heavily levered, *your* unlevered position is still exposed to everyone else's forced selling. Leverage is a systemic variable even if you use none.
- **Set a monthly reminder to check sponsor-director disclosures for every holding.** Direction and frequency matter more than size. A pattern of small sells is a stronger signal than one large block, which may be genuinely personal.
- **When a cascade is running, the correct question is not "is this cheap?" but "has the forced supply finished?"** Value does not stop a cascade. Exhaustion of leveraged holders does. Watch for the day heavy volume produces no further decline.
- **Keep dry powder specifically for forced-seller events.** These are the moments the disciplined participant is paid — but only if capital is available, which means it must be uninvested beforehand. That is a cost you pay all year for a few days of opportunity.
- **Read the merchant bank's own disclosures.** Their margin loan book size and NPL on that book tell you how much forced supply is queued behind the next decline.
- **Never let a broker's call set your position size.** Their revenue is your turnover. Decide size from liquidity (Chapter 2) and leverage arithmetic (this chapter), then place the order.`,
      bn: `- **যেকোনো মার্জিন চুক্তি স্বাক্ষরের আগে $P_{call}$ ও $P_{wipeout}$ কাগজে লিখুন।** তারপর স্ক্রিপের গত বারো মাস দেখে জিজ্ঞেস করুন এটি ইতিমধ্যেই ঐ মাপের নড়াচড়া করেছে কি না। করে থাকলে আপনি ঝুঁকি মূল্যায়ন করছেন না — আপনি একটি ফলাফলের সময়সূচি ঠিক করছেন।
- **কেবল নিজের নয়, বাজারের সামগ্রিক মার্জিন এক্সপোজার অনুসরণ করুন।** সমগ্র বাজার প্রবলভাবে লিভারেজড হলে *আপনার* লিভারেজবিহীন পজিশনও অন্য সবার বাধ্যতামূলক বিক্রির মুখে পড়ে। আপনি লিভারেজ না নিলেও এটি একটি কাঠামোগত চলক।
- **প্রতিটি হোল্ডিংয়ের উদ্যোক্তা-পরিচালক প্রকাশনা দেখতে মাসিক রিমাইন্ডার রাখুন।** আকারের চেয়ে দিক ও পুনরাবৃত্তি বেশি গুরুত্বপূর্ণ। ছোট ছোট বিক্রির ধরন একটি বড় ব্লকের চেয়ে শক্তিশালী সংকেত, কারণ বড়টি সত্যিই ব্যক্তিগত হতে পারে।
- **ধারাবাহিক প্রতিক্রিয়া চলাকালে সঠিক প্রশ্ন "এটি কি সস্তা?" নয়, বরং "বাধ্যতামূলক সরবরাহ কি শেষ হয়েছে?"** মূল্য ধারাবাহিক প্রতিক্রিয়া থামায় না। লিভারেজড ধারকদের নিঃশেষ হওয়া থামায়। সেই দিনটি লক্ষ করুন যেদিন ভারী ভলিউমেও আর পতন হয় না।
- **বাধ্যতামূলক-বিক্রেতা ঘটনার জন্য আলাদা করে শুকনো বারুদ রাখুন।** এই মুহূর্তগুলোতেই শৃঙ্খলাবদ্ধ অংশগ্রহণকারী পুরস্কৃত হন — কিন্তু কেবল তখনই যদি মূলধন হাতে থাকে, অর্থাৎ আগে থেকেই তা অবিনিয়োজিত থাকতে হবে। কয়েক দিনের সুযোগের জন্য সারা বছর এই খরচ দিতে হয়।
- **মার্চেন্ট ব্যাংকের নিজস্ব প্রকাশনা পড়ুন।** তাদের মার্জিন ঋণের আকার ও ঐ বইয়ে খেলাপি ঋণ আপনাকে বলে পরবর্তী পতনের পেছনে কতটা বাধ্যতামূলক সরবরাহ সারিতে আছে।
- **কখনো ব্রোকারের ফোনকে আপনার পজিশনের আকার ঠিক করতে দেবেন না।** তাঁদের আয় আপনার লেনদেনের পরিমাণ। তারল্য (অধ্যায় ২) ও লিভারেজের পাটিগণিত (এই অধ্যায়) থেকে আকার ঠিক করুন, তারপর অর্ডার দিন।`,
    },

    exercises: {
      en: `1. Build the margin sheet from §5.10. Enter your own capital and a 1:1 ratio on a scrip you actually hold. Compute the call price and the fall required. Now look at that scrip's twelve-month chart — has it made that move?
2. Repeat exercise 1 at ratios of 1:0.5, 1:1, and 1:2. Tabulate the trigger fall for each. Plot trigger fall against margin ratio. What shape is the curve?
3. Pick five companies. For each, pull the sponsor/director holding percentage from 12 months ago and today from DSE disclosures. Rank them by change. Chart the price of the largest decliner and the largest increaser over the same period.
4. Find the aggregate margin loan figures published by merchant banks in their annual reports for 2010 and 2012. Compute the change. What does the difference represent in real terms?
5. Pick a scrip in which foreign holding is disclosed. Chart foreign holding percentage against price over 24 months. Where do they lead, and where do they follow?
6. Compute the exposure ratio effect: a bank holds BDT 800 crore of shares against BDT 4,000 crore of regulatory capital. The market falls 30%. What is the exposure ratio before and after? If the cap is 25%, was the bank compliant before? Is it after? What must it do?
7. Take one week during the 2011 decline. Find the daily turnover and the number of scrips closing at lower circuit. Describe the relationship between the two.
8. Using the cascade function in §5.11, vary \`impact_per_round\` between 0.02 and 0.15. At what value does the cascade complete within three rounds? What real-world condition does that parameter represent?`,
      bn: `১. §৫.১০-এর মার্জিন শিটটি তৈরি করুন। আপনার প্রকৃত ধারণকৃত একটি স্ক্রিপে নিজস্ব মূলধন ও ১:১ অনুপাত বসান। কল মূল্য ও প্রয়োজনীয় পতন গণনা করুন। এবার ঐ স্ক্রিপের বারো মাসের চার্ট দেখুন — এটি কি ঐ নড়াচড়া করেছে?
২. ১:০.৫, ১:১ ও ১:২ অনুপাতে অনুশীলনী ১ পুনরাবৃত্তি করুন। প্রতিটির ট্রিগার পতন সারণিবদ্ধ করুন। মার্জিন অনুপাতের বিপরীতে ট্রিগার পতন প্লট করুন। বক্ররেখার আকৃতি কেমন?
৩. পাঁচটি কোম্পানি বাছুন। ডিএসই প্রকাশনা থেকে প্রতিটির ১২ মাস আগের ও আজকের উদ্যোক্তা/পরিচালক মালিকানার শতাংশ বের করুন। পরিবর্তন অনুযায়ী সাজান। একই সময়ে সবচেয়ে বেশি কমা ও সবচেয়ে বেশি বাড়া কোম্পানির দাম চার্ট করুন।
৪. মার্চেন্ট ব্যাংকগুলোর ২০১০ ও ২০১২ সালের বার্ষিক প্রতিবেদনে প্রকাশিত সামগ্রিক মার্জিন ঋণের পরিসংখ্যান বের করুন। পরিবর্তন গণনা করুন। বাস্তবে পার্থক্যটি কী প্রতিনিধিত্ব করে?
৫. এমন একটি স্ক্রিপ বাছুন যাতে বিদেশি মালিকানা প্রকাশিত। ২৪ মাসে দামের বিপরীতে বিদেশি মালিকানার শতাংশ চার্ট করুন। তাঁরা কোথায় নেতৃত্ব দেন, কোথায় অনুসরণ করেন?
৬. এক্সপোজার অনুপাতের প্রভাব গণনা করুন: একটি ব্যাংকের ৪,০০০ কোটি টাকা নিয়ন্ত্রক মূলধনের বিপরীতে ৮০০ কোটি টাকার শেয়ার আছে। বাজার ৩০% পড়ল। আগে ও পরে এক্সপোজার অনুপাত কত? সীমা ২৫% হলে ব্যাংকটি আগে কি নিয়ম-মান্যকারী ছিল? পরে কি আছে? তাকে কী করতে হবে?
৭. ২০১১ সালের পতনের একটি সপ্তাহ নিন। দৈনিক লেনদেন ও নিম্ন সার্কিটে বন্ধ হওয়া স্ক্রিপের সংখ্যা বের করুন। দুটির সম্পর্ক বর্ণনা করুন।
৮. §৫.১১-এর cascade ফাংশন ব্যবহার করে \`impact_per_round\` ০.০২ থেকে ০.১৫-এর মধ্যে পরিবর্তন করুন। কোন মানে ধারাবাহিক প্রতিক্রিয়া তিন দফার মধ্যে শেষ হয়? ঐ প্যারামিটার বাস্তবে কোন অবস্থা প্রতিনিধিত্ব করে?`,
    },

    summary: {
      en: `- Every price is a disagreement between two parties. Identifying who is selling, and under what compulsion, explains more than any indicator.
- **ICB** is a state-linked stabiliser directed to buy in every major decline since 1996. It has slowed falls and never prevented one. It is not a floor.
- **Banks** face a capital-market exposure cap of 25% of regulatory capital. Because capital sits in the denominator, a falling market raises the ratio without any purchase — **the decline itself can force a compliant bank to sell**.
- **Merchant banks** are the consequential class. They lend against portfolios and, on a breach, sell without any view on value.
- $P_{call} = L / [N(1-m)]$ and $P_{wipeout} = L/N$. At 1:1 with a 40% maintenance ratio, a **16.7% fall** triggers the call and BDT 50 wipes out capital bought at BDT 100.
- Leverage is symmetric: 2× turns a 45% price fall into a 90% capital loss. The multiplier does not soften on the way down.
- The **cascade** — fall, breach, forced sale, further fall, further breach — is self-reinforcing and stops only when leveraged holders are exhausted. Combined with circuit breakers, it guarantees forced sellers execute at the worst prices available.
- **Sponsor-director disclosures** are free, published, and the highest-signal data on the exchange. Foreign flows, by contrast, usually say something about Bangladesh or emerging markets rather than about the company.
- **Discipline established:** before every trade, name the party on the other side and the compulsion acting on them. If they are selling because a loan covenant obliges them to, the price carries no information about value — and that is exactly when prepared capital gets paid.`,
      bn: `- প্রতিটি দাম দুই পক্ষের মতানৈক্য। কে বিক্রি করছেন এবং কোন বাধ্যবাধকতায়, তা চিহ্নিত করা যেকোনো নির্দেশকের চেয়ে বেশি ব্যাখ্যা করে।
- **আইসিবি** একটি রাষ্ট্র-সংশ্লিষ্ট স্থিতিশীলক, ১৯৯৬ সাল থেকে প্রতিটি বড় পতনে কিনতে নির্দেশিত। এটি পতন ধীর করেছে, কখনো ঠেকায়নি। এটি মেঝে নয়।
- **ব্যাংকগুলো** নিয়ন্ত্রক মূলধনের ২৫% পুঁজিবাজার এক্সপোজার সীমার মুখে। মূলধন হরে থাকায় পতনশীল বাজার কোনো ক্রয় ছাড়াই অনুপাত বাড়ায় — **পতনটাই একটি নিয়ম-মান্যকারী ব্যাংককে বিক্রিতে বাধ্য করতে পারে**।
- **মার্চেন্ট ব্যাংক** সবচেয়ে পরিণতিবাহী শ্রেণি। তারা পোর্টফোলিওর বিপরীতে ঋণ দেয় এবং লঙ্ঘন হলে মূল্য সম্পর্কে কোনো দৃষ্টিভঙ্গি ছাড়াই বিক্রি করে।
- $P_{call} = L / [N(1-m)]$ এবং $P_{wipeout} = L/N$। ৪০% রক্ষণাবেক্ষণ অনুপাতসহ ১:১-এ **১৬.৭% পতন** কল ট্রিগার করে এবং ১০০ টাকায় কেনা শেয়ারে ৫০ টাকা মূলধন নিঃশেষ করে।
- লিভারেজ প্রতিসম: ২× একটি ৪৫% দরপতনকে ৯০% মূলধন ক্ষতিতে পরিণত করে। নামার পথে গুণকটি নরম হয় না।
- **ধারাবাহিক প্রতিক্রিয়া** — পতন, লঙ্ঘন, বাধ্যতামূলক বিক্রি, আরও পতন, আরও লঙ্ঘন — স্ব-শক্তিবর্ধক এবং কেবল লিভারেজড ধারকরা নিঃশেষ হলে থামে। সার্কিট ব্রেকারের সঙ্গে মিলে এটি নিশ্চিত করে বাধ্যতামূলক বিক্রেতারা প্রাপ্য সবচেয়ে খারাপ দামে কার্যকর করবেন।
- **উদ্যোক্তা-পরিচালকের প্রকাশনা** বিনামূল্যের, প্রকাশিত, এবং এক্সচেঞ্জের সর্বোচ্চ-সংকেত তথ্য। বিপরীতে বিদেশি প্রবাহ সাধারণত কোম্পানি নয়, বাংলাদেশ বা উদীয়মান বাজার সম্পর্কে কিছু বলে।
- **প্রতিষ্ঠিত শৃঙ্খলা:** প্রতিটি লেনদেনের আগে অন্য পাশের পক্ষটির নাম বলুন এবং তাঁর ওপর কাজ করা বাধ্যবাধকতা চিহ্নিত করুন। ঋণচুক্তির বাধ্যবাধকতায় তিনি বিক্রি করলে দাম মূল্য সম্পর্কে কোনো তথ্য বহন করে না — আর ঠিক তখনই প্রস্তুত মূলধন পুরস্কৃত হয়।`,
    },
  },

  interview: [
    {
      q: {
        en: 'Derive the margin call trigger price and explain what each term means.',
        bn: 'মার্জিন কল ট্রিগার মূল্য উদ্ভাবন করুন এবং প্রতিটি পদের অর্থ ব্যাখ্যা করুন।',
      },
      a: {
        en: 'Equity is market value minus loan, E = PN − L, and the equity ratio is e = (PN − L)/PN. A call occurs when e falls to the maintenance ratio m. Setting them equal: m = (PN − L)/PN, so PN(1 − m) = L, giving P_call = L / [N(1 − m)]. L is the outstanding loan, N the share count, and m the maintenance floor set by the lender. The key insight is that the trigger price depends only on the loan and the maintenance ratio — not on what you paid — so at 1:1 with m = 40%, a position bought at 100 is called at 83.33, a fall of just 16.7%.',
        bn: 'ইকুইটি হলো বাজারমূল্য বিয়োগ ঋণ, E = PN − L, এবং ইকুইটি অনুপাত e = (PN − L)/PN। e রক্ষণাবেক্ষণ অনুপাত m-এ নামলে কল হয়। সমান বসিয়ে: m = (PN − L)/PN, তাই PN(1 − m) = L, অর্থাৎ P_call = L / [N(1 − m)]। L বকেয়া ঋণ, N শেয়ার সংখ্যা, m ঋণদাতার নির্ধারিত রক্ষণাবেক্ষণ সীমা। মূল অন্তর্দৃষ্টি হলো ট্রিগার মূল্য কেবল ঋণ ও রক্ষণাবেক্ষণ অনুপাতের ওপর নির্ভর করে — আপনি কত দিয়েছিলেন তার ওপর নয় — তাই m = ৪০% সহ ১:১-এ ১০০-তে কেনা পজিশনে কল হয় ৮৩.৩৩-এ, মাত্র ১৬.৭% পতনে।',
      },
    },
    {
      q: {
        en: 'Explain the forced-selling cascade and why fundamental analysis does not help during one.',
        bn: 'বাধ্যতামূলক বিক্রির ধারাবাহিক প্রতিক্রিয়া ব্যাখ্যা করুন এবং কেন এর সময় মৌল বিশ্লেষণ কাজে আসে না।',
      },
      a: {
        en: 'Prices fall for some ordinary reason; leveraged accounts breach their maintenance ratios; merchant banks force-sell those portfolios; that supply pushes prices lower; which breaches more accounts. The loop is self-reinforcing with no natural stopping point except exhaustion of leveraged holders. Fundamental analysis does not help because the sellers are not expressing a view — a lender liquidating collateral sells at any price to protect its loan. Price temporarily stops carrying information about value and starts carrying information about leverage. The analysis is not wrong, it is irrelevant, which is worse because it feels like it should work.',
        bn: 'কোনো সাধারণ কারণে দাম পড়ে; লিভারেজড অ্যাকাউন্ট রক্ষণাবেক্ষণ অনুপাত লঙ্ঘন করে; মার্চেন্ট ব্যাংক ঐ পোর্টফোলিও বাধ্যতামূলকভাবে বিক্রি করে; ঐ সরবরাহ দাম আরও নামায়; যা আরও অ্যাকাউন্ট লঙ্ঘন করায়। চক্রটি স্ব-শক্তিবর্ধক এবং লিভারেজড ধারকদের নিঃশেষ হওয়া ছাড়া স্বাভাবিক থামার বিন্দু নেই। মৌল বিশ্লেষণ কাজে আসে না কারণ বিক্রেতারা কোনো দৃষ্টিভঙ্গি প্রকাশ করছেন না — জামানত গুটানো ঋণদাতা তার ঋণ রক্ষায় যেকোনো দামে বিক্রি করে। দাম সাময়িকভাবে মূল্য সম্পর্কে তথ্য বহন বন্ধ করে লিভারেজ সম্পর্কে তথ্য বহন শুরু করে। বিশ্লেষণটি ভুল নয়, অপ্রাসঙ্গিক — যা আরও খারাপ, কারণ মনে হয় এটির কাজ করা উচিত ছিল।',
      },
    },
    {
      q: {
        en: 'Why can a falling market force a compliant bank to become a seller?',
        bn: 'পতনশীল বাজার কেন একটি নিয়ম-মান্যকারী ব্যাংককে বিক্রেতা হতে বাধ্য করতে পারে?',
      },
      a: {
        en: 'The capital-market exposure limit is measured as market value of holdings over regulatory capital, capped at 25% under the Bank Company (Amendment) Act 2013. Capital in the denominator does not fall when share prices fall — if anything it falls more slowly. So a bank that was comfortably within the cap can breach it purely through market decline, without buying anything. Restoring compliance requires either raising capital, which is slow and expensive in a falling market, or selling shares, which is fast. The regulation therefore adds procyclical selling pressure at exactly the moment the market can least absorb it.',
        bn: 'পুঁজিবাজার এক্সপোজার সীমা মাপা হয় নিয়ন্ত্রক মূলধনের বিপরীতে মালিকানার বাজারমূল্য হিসেবে, ব্যাংক কোম্পানি (সংশোধন) আইন ২০১৩ অনুযায়ী ২৫%-এ সীমাবদ্ধ। শেয়ারের দাম পড়লে হরে থাকা মূলধন কমে না — বরং আরও ধীরে কমে। তাই সীমার মধ্যে স্বচ্ছন্দে থাকা একটি ব্যাংক কিছু না কিনেই কেবল বাজার পতনে সীমা লঙ্ঘন করতে পারে। সম্মতি ফেরাতে হয় মূলধন বাড়াতে হবে, যা পতনশীল বাজারে ধীর ও ব্যয়বহুল, নয়তো শেয়ার বিক্রি করতে হবে, যা দ্রুত। ফলে বিধিটি ঠিক সেই মুহূর্তে চক্রানুগ বিক্রয় চাপ যোগ করে যখন বাজার তা সবচেয়ে কম শোষণ করতে পারে।',
      },
    },
    {
      q: {
        en: 'Why is sponsor-director selling a higher-quality signal than most technical indicators?',
        bn: 'উদ্যোক্তা-পরিচালকের বিক্রি কেন বেশিরভাগ টেকনিক্যাল নির্দেশকের চেয়ে উঁচু মানের সংকেত?',
      },
      a: {
        en: 'Because it is an action taken with genuine private information and real money by people who built the business and know its forward order book, receivables, and regulatory position. It is legally required to be disclosed, so it is free and public. A technical indicator is a transformation of past prices available to everyone simultaneously; sponsor transactions reveal the beliefs of the best-informed participants. The pattern matters more than the size — repeated small sells across a year are harder to explain away than a single large block, which may genuinely be personal or estate-related.',
        bn: 'কারণ এটি প্রকৃত ব্যক্তিগত তথ্য ও প্রকৃত অর্থ দিয়ে নেওয়া একটি পদক্ষেপ, যাঁরা ব্যবসাটি গড়েছেন এবং এর সামনের অর্ডার বই, প্রাপ্য ও নিয়ন্ত্রক অবস্থান জানেন। এটি আইনত প্রকাশ করা বাধ্যতামূলক, তাই বিনামূল্যের ও প্রকাশ্য। টেকনিক্যাল নির্দেশক হলো অতীত দামের রূপান্তর যা সবার কাছে একসঙ্গে পাওয়া যায়; উদ্যোক্তার লেনদেন সবচেয়ে ভালো-অবহিত অংশগ্রহণকারীদের বিশ্বাস প্রকাশ করে। আকারের চেয়ে ধরনটি বেশি গুরুত্বপূর্ণ — এক বছরজুড়ে বারবার ছোট বিক্রয় একটি বড় ব্লকের চেয়ে ব্যাখ্যা করা কঠিন, কারণ বড়টি সত্যিই ব্যক্তিগত বা উত্তরাধিকার-সম্পর্কিত হতে পারে।',
      },
    },
    {
      q: {
        en: 'A blue chip falls 12% in a week with no company news. Foreign holding has dropped 3 points. What is your read?',
        bn: 'কোম্পানির কোনো খবর ছাড়াই একটি ব্লু চিপ এক সপ্তাহে ১২% পড়ল। বিদেশি মালিকানা ৩ পয়েন্ট কমেছে। আপনার পাঠ কী?',
      },
      a: {
        en: 'Most likely a foreign portfolio outflow rather than a company event. FPI concentrates in a handful of liquid names, so when a global allocator reduces Bangladesh exposure or reacts to taka instability, the selling lands disproportionately on exactly these blue chips. The signal is about the country or the emerging-market allocation, not the business. Practically I would check whether peer blue chips with high foreign ownership fell together — if they did, that confirms a flow story. I would also check whether the taka moved, and whether the decline is on elevated turnover, which distinguishes genuine distribution from a thin drift.',
        bn: 'সম্ভবত কোম্পানির ঘটনা নয়, বিদেশি পোর্টফোলিও বহিঃপ্রবাহ। এফপিআই হাতেগোনা কয়েকটি তরল নামে কেন্দ্রীভূত, তাই কোনো বৈশ্বিক বণ্টনকারী বাংলাদেশ এক্সপোজার কমালে বা টাকার অস্থিরতায় সাড়া দিলে বিক্রিটা অসামঞ্জস্যপূর্ণভাবে ঠিক এই ব্লু চিপগুলোতেই পড়ে। সংকেতটি ব্যবসা নয়, দেশ বা উদীয়মান-বাজার বণ্টন সম্পর্কে। ব্যবহারিকভাবে আমি দেখব উচ্চ বিদেশি মালিকানার সমকক্ষ ব্লু চিপগুলো একসঙ্গে পড়েছে কি না — পড়ে থাকলে তা প্রবাহের ব্যাখ্যা নিশ্চিত করে। আমি আরও দেখব টাকা নড়েছে কি না, এবং পতনটি বর্ধিত লেনদেনে হয়েছে কি না, যা প্রকৃত বণ্টনকে পাতলা প্রবাহ থেকে আলাদা করে।',
      },
    },
  ],

  quiz: [
    {
      q: { en: 'ICB is best described as:', bn: 'আইসিবি-কে সবচেয়ে ভালোভাবে বর্ণনা করা যায়:' },
      options: {
        en: [
          'A private asset manager',
          'A state-owned institution repeatedly deployed to support falling markets',
          'The market regulator',
          'The central depository',
        ],
        bn: [
          'একটি বেসরকারি সম্পদ ব্যবস্থাপক',
          'পতনশীল বাজারে সমর্থনে বারবার মোতায়েন করা একটি রাষ্ট্রায়ত্ত প্রতিষ্ঠান',
          'বাজার নিয়ন্ত্রক',
          'কেন্দ্রীয় ডিপোজিটরি',
        ],
      },
      answer: 1,
    },
    {
      q: {
        en: 'With a loan of BDT 5,00,000 on 10,000 shares and a 40% maintenance ratio, the call price is:',
        bn: '১০,০০০ শেয়ারে ৫,০০,০০০ টাকা ঋণ ও ৪০% রক্ষণাবেক্ষণ অনুপাতে কল মূল্য:',
      },
      options: { en: ['BDT 50.00', 'BDT 66.67', 'BDT 83.33', 'BDT 100.00'], bn: ['৫০.০০ টাকা', '৬৬.৬৭ টাকা', '৮৩.৩৩ টাকা', '১০০.০০ টাকা'] },
      answer: 2,
    },
    {
      q: { en: 'The wipeout price is given by:', bn: 'নিঃশেষের মূল্য পাওয়া যায়:' },
      options: {
        en: ['L / N', 'L / [N(1−m)]', 'N / L', 'L × m'],
        bn: ['L / N', 'L / [N(1−m)]', 'N / L', 'L × m'],
      },
      answer: 0,
    },
    {
      q: {
        en: 'At 1:1 leverage, a 45% fall in share price produces a loss on own capital of about:',
        bn: '১:১ লিভারেজে শেয়ারের দামে ৪৫% পতনে নিজস্ব মূলধনে ক্ষতি প্রায়:',
      },
      options: { en: ['22.5%', '45%', '90%', '100%'], bn: ['২২.৫%', '৪৫%', '৯০%', '১০০%'] },
      answer: 2,
    },
    {
      q: {
        en: 'During a forced-selling cascade, the seller is primarily motivated by:',
        bn: 'বাধ্যতামূলক বিক্রির ধারাবাহিক প্রতিক্রিয়ায় বিক্রেতা মূলত চালিত হন:',
      },
      options: {
        en: [
          'A view that shares are overvalued',
          'Protecting a loan against collateral',
          'Tax planning',
          'Index rebalancing',
        ],
        bn: [
          'শেয়ার অতিমূল্যায়িত এই দৃষ্টিভঙ্গিতে',
          'জামানতের বিপরীতে ঋণ রক্ষায়',
          'কর পরিকল্পনায়',
          'সূচক পুনঃভারসাম্যে',
        ],
      },
      answer: 1,
    },
    {
      q: {
        en: 'Bank capital-market exposure is capped at 25% of:',
        bn: 'ব্যাংকের পুঁজিবাজার এক্সপোজার ২৫%-এ সীমাবদ্ধ যার:',
      },
      options: {
        en: ['Total assets', 'Regulatory capital', 'Deposits', 'Net profit'],
        bn: ['মোট সম্পদ', 'নিয়ন্ত্রক মূলধন', 'আমানত', 'নিট মুনাফা'],
      },
      answer: 1,
    },
    {
      q: {
        en: 'Foreign portfolio investors operate through which account type?',
        bn: 'বিদেশি পোর্টফোলিও বিনিয়োগকারীরা কোন ধরনের হিসাবের মাধ্যমে কাজ করেন?',
      },
      options: { en: ['BO account only', 'NITA', 'Omnibus account', 'TREC'], bn: ['কেবল বিও হিসাব', 'NITA', 'অমনিবাস হিসাব', 'TREC'] },
      answer: 1,
    },
    {
      q: {
        en: 'Sponsors and directors must collectively hold a minimum of:',
        bn: 'উদ্যোক্তা ও পরিচালকদের সম্মিলিতভাবে ধারণ করতে হয় ন্যূনতম:',
      },
      options: { en: ['2%', '10%', '30%', '51%'], bn: ['২%', '১০%', '৩০%', '৫১%'] },
      answer: 2,
    },
    {
      q: {
        en: 'A broker’s revenue is driven by:',
        bn: 'একজন ব্রোকারের আয় চালিত হয়:',
      },
      options: {
        en: ['Your portfolio returns', 'Your turnover', 'Dividends you receive', 'Index level'],
        bn: ['আপনার পোর্টফোলিও রিটার্নে', 'আপনার লেনদেনের পরিমাণে', 'আপনার প্রাপ্ত লভ্যাংশে', 'সূচকের স্তরে'],
      },
      answer: 1,
    },
    {
      q: {
        en: 'Circuit breakers combined with margin lending are dangerous because:',
        bn: 'সার্কিট ব্রেকার ও মার্জিন ঋণ একসঙ্গে বিপজ্জনক কারণ:',
      },
      options: {
        en: [
          'They cancel each other out',
          'The lender must sell but cannot execute, so the eventual print gaps far lower',
          'They prevent all trading permanently',
          'They only affect Z category',
        ],
        bn: [
          'এরা একে অপরকে বাতিল করে',
          'ঋণদাতাকে বিক্রি করতেই হবে কিন্তু কার্যকর করতে পারে না, তাই শেষ পর্যন্ত দাম অনেক নিচে গ্যাপ দেয়',
          'এরা স্থায়ীভাবে সব লেনদেন বন্ধ করে',
          'এরা কেবল Z শ্রেণিতে প্রভাব ফেলে',
        ],
      },
      answer: 1,
    },
  ],
};
