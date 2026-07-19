/**
 * Chapter 40 — Volume Analysis
 * Part III, Technical Analysis. The only non-price input in the toolkit.
 * Builds on Ch 30 (breakouts), Ch 32–33 (patterns), Ch 34–39 (price transformations).
 * Forward reference: Ch 41 (Fibonacci), Ch 75 (manipulation).
 */

export default {
  n: 40,
  tools: [],

  excelSheet: {
    filename: 'ch40-volume-liquidity-screen.xlsx',
    sheetName: 'Volume',
    cells: [
      { cell: 'A1', v: 'VOLUME, TURNOVER AND LIQUIDITY — DSE MID-CAP ARCHETYPE' },

      { cell: 'A3', v: 'Day' }, { cell: 'B3', v: 'High' }, { cell: 'C3', v: 'Low' },
      { cell: 'D3', v: 'Close' }, { cell: 'E3', v: 'Volume' }, { cell: 'F3', v: 'Turnover (BDT)' },
      { cell: 'G3', v: 'Typical Price' }, { cell: 'H3', v: 'OBV' }, { cell: 'I3', v: 'CLV' },
      { cell: 'J3', v: 'A/D Line' }, { cell: 'K3', v: 'Raw Money Flow' }, { cell: 'L3', v: 'MF Sign' },

      { cell: 'A4', v: 0 }, { cell: 'B4', v: 46.3 }, { cell: 'C4', v: 45.4 },
      { cell: 'D4', v: 46 }, { cell: 'E4', v: 1000000 },
      { cell: 'F4', f: 'D4*E4' }, { cell: 'G4', f: '(B4+C4+D4)/3' },
      { cell: 'H4', v: 0 }, { cell: 'I4', f: 'IF(B4=C4,0,((D4-C4)-(B4-D4))/(B4-C4))' },
      { cell: 'J4', v: 0 }, { cell: 'K4', f: 'G4*E4' }, { cell: 'L4', v: 'BASE' },

      { cell: 'A5', v: 1 }, { cell: 'B5', v: 47.6 }, { cell: 'C5', v: 46 },
      { cell: 'D5', v: 47.4 }, { cell: 'E5', v: 1200000 },
      { cell: 'F5', f: 'D5*E5' }, { cell: 'G5', f: '(B5+C5+D5)/3' },
      { cell: 'H5', f: 'IF(D5>D4,H4+E5,IF(D5<D4,H4-E5,H4))' },
      { cell: 'I5', f: 'IF(B5=C5,0,((D5-C5)-(B5-D5))/(B5-C5))' },
      { cell: 'J5', f: 'J4+I5*E5' }, { cell: 'K5', f: 'G5*E5' },
      { cell: 'L5', f: 'IF(G5>G4,"POS",IF(G5<G4,"NEG","FLAT"))' },

      { cell: 'A6', v: 2 }, { cell: 'B6', v: 48.9 }, { cell: 'C6', v: 47.3 },
      { cell: 'D6', v: 48.7 }, { cell: 'E6', v: 1800000 },
      { cell: 'F6', f: 'D6*E6' }, { cell: 'G6', f: '(B6+C6+D6)/3' },
      { cell: 'H6', f: 'IF(D6>D5,H5+E6,IF(D6<D5,H5-E6,H5))' },
      { cell: 'I6', f: 'IF(B6=C6,0,((D6-C6)-(B6-D6))/(B6-C6))' },
      { cell: 'J6', f: 'J5+I6*E6' }, { cell: 'K6', f: 'G6*E6' },
      { cell: 'L6', f: 'IF(G6>G5,"POS",IF(G6<G5,"NEG","FLAT"))' },

      { cell: 'A7', v: 3 }, { cell: 'B7', v: 49.2 }, { cell: 'C7', v: 47.4 },
      { cell: 'D7', v: 48 }, { cell: 'E7', v: 1500000 },
      { cell: 'F7', f: 'D7*E7' }, { cell: 'G7', f: '(B7+C7+D7)/3' },
      { cell: 'H7', f: 'IF(D7>D6,H6+E7,IF(D7<D6,H6-E7,H6))' },
      { cell: 'I7', f: 'IF(B7=C7,0,((D7-C7)-(B7-D7))/(B7-C7))' },
      { cell: 'J7', f: 'J6+I7*E7' }, { cell: 'K7', f: 'G7*E7' },
      { cell: 'L7', f: 'IF(G7>G6,"POS",IF(G7<G6,"NEG","FLAT"))' },

      { cell: 'A8', v: 4 }, { cell: 'B8', v: 50.4 }, { cell: 'C8', v: 48.4 },
      { cell: 'D8', v: 50 }, { cell: 'E8', v: 3600000 },
      { cell: 'F8', f: 'D8*E8' }, { cell: 'G8', f: '(B8+C8+D8)/3' },
      { cell: 'H8', f: 'IF(D8>D7,H7+E8,IF(D8<D7,H7-E8,H7))' },
      { cell: 'I8', f: 'IF(B8=C8,0,((D8-C8)-(B8-D8))/(B8-C8))' },
      { cell: 'J8', f: 'J7+I8*E8' }, { cell: 'K8', f: 'G8*E8' },
      { cell: 'L8', f: 'IF(G8>G7,"POS",IF(G8<G7,"NEG","FLAT"))' },

      { cell: 'A9', v: 5 }, { cell: 'B9', v: 50.8 }, { cell: 'C9', v: 49.3 },
      { cell: 'D9', v: 49.6 }, { cell: 'E9', v: 2100000 },
      { cell: 'F9', f: 'D9*E9' }, { cell: 'G9', f: '(B9+C9+D9)/3' },
      { cell: 'H9', f: 'IF(D9>D8,H8+E9,IF(D9<D8,H8-E9,H8))' },
      { cell: 'I9', f: 'IF(B9=C9,0,((D9-C9)-(B9-D9))/(B9-C9))' },
      { cell: 'J9', f: 'J8+I9*E9' }, { cell: 'K9', f: 'G9*E9' },
      { cell: 'L9', f: 'IF(G9>G8,"POS",IF(G9<G8,"NEG","FLAT"))' },

      { cell: 'A11', v: '— Money Flow Index (5-period, hand-scale) —' },
      { cell: 'A12', v: 'Positive Money Flow' }, { cell: 'B12', f: 'SUMIF(L5:L9,"POS",K5:K9)' },
      { cell: 'A13', v: 'Negative Money Flow' }, { cell: 'B13', f: 'SUMIF(L5:L9,"NEG",K5:K9)' },
      { cell: 'A14', v: 'Money Ratio' }, { cell: 'B14', f: 'IF(B13=0,"NO DOWN PERIODS",B12/B13)' },
      { cell: 'A15', v: 'MFI (5)' }, { cell: 'B15', f: 'IF(B13=0,100,100-100/(1+B14))' },

      { cell: 'A17', v: '— Volume & Turnover Diagnostics —' },
      { cell: 'A18', v: '20-day Avg Volume (shares)' }, { cell: 'B18', v: 1500000 },
      { cell: 'A19', v: '20-day Avg Turnover (BDT)' }, { cell: 'B19', v: 72000000 },
      { cell: 'A20', v: "Today's Volume" }, { cell: 'B20', f: 'E9' },
      { cell: 'A21', v: 'Relative Volume (x)' }, { cell: 'B21', f: 'B20/B18' },
      { cell: 'A22', v: 'Peak Day Relative Volume (x)' }, { cell: 'B22', f: 'MAX(E5:E9)/B18' },
      { cell: 'A23', v: '5-day VWAP (TP-weighted)' }, { cell: 'B23', f: 'SUMPRODUCT(G5:G9,E5:E9)/SUM(E5:E9)' },
      { cell: 'A24', v: 'Close vs VWAP (BDT)' }, { cell: 'B24', f: 'D9-B23' },

      { cell: 'A26', v: '— Free Float Plausibility —' },
      { cell: 'A27', v: 'Shares Outstanding' }, { cell: 'B27', v: 450000000 },
      { cell: 'A28', v: 'Free Float (%)' }, { cell: 'B28', v: 38 },
      { cell: 'A29', v: 'Free Float Shares' }, { cell: 'B29', f: 'B27*B28/100' },
      { cell: 'A30', v: 'Peak Day Volume' }, { cell: 'B30', f: 'MAX(E5:E9)' },
      { cell: 'A31', v: 'Peak Volume as % of Float' }, { cell: 'B31', f: 'B30/B29*100' },

      { cell: 'A33', v: '— Liquidity Screen —' },
      { cell: 'A34', v: 'Min Avg Daily Turnover (BDT)' }, { cell: 'B34', v: 10000000 },
      { cell: 'A35', v: 'Max % of ADV per Position' }, { cell: 'B35', v: 10 },
      { cell: 'A36', v: 'SCREEN VERDICT' },
      { cell: 'B36', f: 'IF(B19<B34,"UNTRADEABLE - below turnover floor","TRADEABLE")' },
      { cell: 'A37', v: 'Max Position (BDT)' }, { cell: 'B37', f: 'IF(B19<B34,0,B19*B35/100)' },
      { cell: 'A38', v: 'Max Position (shares)' }, { cell: 'B38', f: 'IF(B37=0,0,ROUNDDOWN(B37/D9,0))' },

      { cell: 'A40', v: 'ANOMALY VERDICT' },
      {
        cell: 'B40',
        f: 'IF(B31>25,"IMPLAUSIBLE - one session turned over a quarter of the float",IF(B22>5,"INVESTIGATE - relative volume above 5x","NORMAL - volume consistent with float"))',
      },
    ],
  },

  objectives: {
    en: [
      'Explain why volume is the only genuinely independent input in Part III, and why every indicator of Chapters 34–39 adds no information.',
      'State correctly what volume measures — shares transferred, not net buying — and reject the "buying volume" category error.',
      'Read the four classic price–volume relationships and use volume to confirm or reject the breakouts of Chapters 30, 32 and 33.',
      'Compute OBV, the A/D line and MFI by hand, and name the assumption each one smuggles in.',
      'Apply a taka-turnover liquidity screen and a free-float plausibility test before treating any DSE volume signal as real.',
    ],
    bn: [
      'কেন ভলিউমই তৃতীয় খণ্ডের একমাত্র প্রকৃত স্বাধীন উপাদান এবং অধ্যায় ৩৪–৩৯-এর প্রতিটি নির্দেশক কেন নতুন কোনো তথ্য যোগ করে না তা ব্যাখ্যা করা।',
      'ভলিউম আসলে কী মাপে তা সঠিকভাবে বলা — হস্তান্তরিত শেয়ার, নিট ক্রয় নয় — এবং "ক্রয় ভলিউম" নামক শ্রেণিগত ভুলটি বর্জন করা।',
      'চারটি ক্লাসিক দাম–ভলিউম সম্পর্ক পড়া এবং অধ্যায় ৩০, ৩২ ও ৩৩-এর ব্রেকআউট নিশ্চিত বা বাতিল করতে ভলিউম ব্যবহার করা।',
      'হাতে OBV, A/D লাইন ও MFI গণনা করা, এবং প্রতিটি যে অনুমান লুকিয়ে আনে তার নাম বলা।',
      'কোনো ডিএসই ভলিউম সংকেতকে বাস্তব ধরার আগে টাকার টার্নওভার লিকুইডিটি স্ক্রিন ও ফ্রি ফ্লোট যৌক্তিকতা পরীক্ষা প্রয়োগ করা।',
    ],
  },

  blocks: {
    theory: {
      en: `Chapters 34 through 39 built an impressive-looking toolkit: moving averages, RSI, MACD, stochastics, Bollinger Bands, ATR. **Every one of them is a function of price and nothing else.**

That sentence deserves to be sat with rather than skimmed past. A 20-day moving average is a weighted sum of the last twenty closes. RSI is a ratio of averaged up-closes to averaged down-closes. MACD is a difference of two averages of closes. Bollinger Bands are a mean and a standard deviation of closes. **If you handed a statistician the price series alone, they could reconstruct every indicator in Part III so far, exactly, without asking you for one additional number.**

That is the definition of adding no information. A transformation of a variable is not evidence about the variable. It can be a useful *lens* — it can make a pattern easier for a human eye to see, and that is a real benefit — but it cannot confirm anything, because it has no independent access to the world. **Two indicators agreeing tells you only that the same price series has been differenced twice in two similar ways.**

### Volume is the exception

Volume is a separate observation. It is not derived from price; it is recorded alongside it. When the DSE publishes a day's data, the close and the volume are two independent facts about that session.

**This makes volume the only genuine confirmation available in technical analysis.** When a chartist says "the breakout was confirmed," the only version of that sentence which is not circular is the version where the confirming evidence is volume — or, better still on the DSE, taka turnover.

Hold this standard strictly. RSI confirming a moving-average crossover is not confirmation. Volume expanding on a breakout is.

### What volume actually measures

Here is where most retail education goes wrong, and it goes wrong in a way that corrupts everything downstream.

**There is no such thing as buying volume.** Every share that trades has a buyer and a seller. If 1,200,000 shares change hands, then 1,200,000 shares were bought *and* 1,200,000 shares were sold. The two numbers are the same number. Talk of "more buyers than sellers" is not an exaggeration or a simplification — it is a category error, like asking which end of a completed handshake was stronger.

So what does volume measure? **It measures the size of the disagreement.** A share trades when one participant values it below the price and another values it above. High volume means a large quantity of stock changed hands between people holding opposing views at that price. Low volume means few people found the price interesting enough to act on.

That reframing is the whole chapter. Volume is not a directional force. **It is a measure of how much conviction was transacted, and it is direction-agnostic.** Direction comes from price. Volume tells you how much the market cared.

### The four price–volume relationships

Once you accept that framing, the classical relationships stop being folklore and become almost arithmetic.

| Price | Volume | Reading |
|---|---|---|
| Rising | Rising | **Healthy advance.** Higher prices are clearing progressively larger quantities of stock. Supply is being absorbed. |
| Rising | Falling | **Weakening advance.** Prices rise because sellers have withdrawn, not because buyers are absorbing supply. Thin and reversible. |
| Falling | Rising | **Healthy decline.** Real distribution; holders are exiting into the fall. |
| Falling | Falling | **Exhausting decline.** Selling pressure is drying up. Often precedes a base. |

Two special cases matter more than the table.

**Climax volume.** An extreme volume spike at the end of an extended move — several multiples of the average, on a wide-range bar — frequently marks the *end* of the move rather than its continuation. The last holders capitulate, or the last chasers pile in. Everyone who was going to act has acted. There is nobody left to push it further.

**Volume dry-up in consolidation.** A rectangle or triangle from Chapter 33 that forms on steadily declining volume is behaving correctly. The pattern is a truce, and truces are quiet. **A consolidation on rising volume is not a consolidation — it is a fight, and fights resolve violently.**

### Volume as confirmation of the patterns of Chapters 30, 32 and 33

Chapter 30 defined a breakout as a close beyond a level that had previously held. The unstated problem was that most such closes fail. Volume is the filter.

A breakout on 2–3× average volume says the level was tested by a large quantity of stock and gave way. A breakout on 0.8× average volume says a small number of shares pushed through a thin book. **The chart looks identical in both cases. The turnover does not.**

Apply the same test to the head-and-shoulders and double tops of Chapter 32: the classical requirement is that volume be heaviest on the left shoulder and lightest on the right, with expansion on the neckline break. Where that volume signature is absent, you have a shape, not a pattern.

### The derived volume indicators, and what each assumes

**On-Balance Volume (OBV)** runs a cumulative total, adding the whole day's volume when the close is up and subtracting the whole day's volume when the close is down. It is useful, and its assumption is crude and worth naming out loud: **OBV assigns 100% of a session's volume to the direction of the close.** A day that opened at the low, ran up 4%, and closed one paisa below the prior close is treated as 100% distribution. A day that closed one paisa up is treated as 100% accumulation. The indicator has no notion of degree.

**Accumulation/Distribution** fixes exactly that by weighting each day's volume by where the close sat within the day's range. A close at the high scores +1, a close at the low scores −1, a close at the midpoint scores 0. It is a better assumption, and it has its own defect: **A/D ignores gaps entirely**, because it never looks at the previous close.

**Money Flow Index** is RSI computed on typical-price × volume rather than on price alone — which makes it the one oscillator in this book that is not purely a price transformation. Read it as a volume-weighted RSI and the divergences carry more weight than RSI's do.

**VWAP** is the volume-weighted average price of a session or window. It is what an institution actually paid, which makes it the honest benchmark for execution quality. Trading above VWAP means the marginal buyer is paying up relative to the day's true average.

**None of these are independent of each other.** They are four ways of combining the same two series. Running all four and counting agreement is the same error as before, one level up.`,
      bn: `অধ্যায় ৩৪ থেকে ৩৯ একটি চিত্তাকর্ষক দেখতে হাতিয়ার-সম্ভার তৈরি করেছে: মুভিং অ্যাভারেজ, RSI, MACD, স্টোক্যাস্টিকস, বলিঞ্জার ব্যান্ড, ATR। **এদের প্রত্যেকটিই দামের একটি ফাংশন, আর কিছু নয়।**

এই বাক্যটি দ্রুত পড়ে যাওয়ার নয়, বসে ভাবার। ২০-দিনের মুভিং অ্যাভারেজ শেষ বিশটি ক্লোজের ভারিত যোগফল। RSI হলো গড়কৃত উর্ধ্ব-ক্লোজ ও গড়কৃত নিম্ন-ক্লোজের অনুপাত। MACD দুটি ক্লোজ-গড়ের পার্থক্য। বলিঞ্জার ব্যান্ড ক্লোজের গড় ও পরিমিত ব্যবধান। **একজন পরিসংখ্যানবিদকে যদি কেবল দামের সিরিজটি দেন, তিনি তৃতীয় খণ্ডের এ পর্যন্তকার প্রতিটি নির্দেশক হুবহু পুনর্গঠন করতে পারবেন — আপনার কাছে একটিও অতিরিক্ত সংখ্যা না চেয়ে।**

এটিই তথ্য যোগ না করার সংজ্ঞা। কোনো চলকের রূপান্তর ঐ চলক সম্পর্কে প্রমাণ নয়। এটি কার্যকর *লেন্স* হতে পারে — মানুষের চোখে একটি প্যাটার্ন দেখা সহজ করে দিতে পারে, আর তা প্রকৃত সুবিধা — কিন্তু এটি কিছু নিশ্চিত করতে পারে না, কারণ জগতে এর কোনো স্বাধীন প্রবেশাধিকার নেই। **দুটি নির্দেশকের একমত হওয়া কেবল এটুকু বলে যে একই দামের সিরিজকে দুটি সদৃশ উপায়ে দুবার পার্থক্য করা হয়েছে।**

### ভলিউমই ব্যতিক্রম

ভলিউম একটি পৃথক পর্যবেক্ষণ। এটি দাম থেকে উদ্ভূত নয়; এটি দামের পাশাপাশি লিপিবদ্ধ হয়। ডিএসই যখন একটি দিনের উপাত্ত প্রকাশ করে, ক্লোজ ও ভলিউম ঐ সেশন সম্পর্কে দুটি স্বাধীন তথ্য।

**এটিই ভলিউমকে কারিগরি বিশ্লেষণের একমাত্র প্রকৃত নিশ্চিতকরণ বানায়।** কোনো চার্টিস্ট যখন বলেন "ব্রেকআউটটি নিশ্চিত হয়েছে," ঐ বাক্যের একমাত্র অ-চক্রাকার সংস্করণটি সেটিই যেখানে নিশ্চিতকারী প্রমাণ হলো ভলিউম — অথবা ডিএসই-তে আরও ভালোভাবে, টাকার টার্নওভার।

এই মানদণ্ড কঠোরভাবে ধরে রাখুন। মুভিং অ্যাভারেজ ক্রসওভারকে RSI-এর সমর্থন কোনো নিশ্চিতকরণ নয়। ব্রেকআউটে ভলিউমের প্রসারণ নিশ্চিতকরণ।

### ভলিউম আসলে কী মাপে

এখানেই বেশিরভাগ খুচরা শিক্ষা ভুল করে, আর এমনভাবে ভুল করে যা পরবর্তী সবকিছু দূষিত করে।

**"ক্রয় ভলিউম" বলে কিছু নেই।** যে প্রতিটি শেয়ার লেনদেন হয় তার একজন ক্রেতা ও একজন বিক্রেতা আছে। ১২,০০,০০০ শেয়ার হাতবদল হলে ১২,০০,০০০ শেয়ার কেনা হয়েছে *এবং* ১২,০০,০০০ শেয়ার বিক্রি হয়েছে। দুটি সংখ্যা একই সংখ্যা। "বিক্রেতার চেয়ে ক্রেতা বেশি" জাতীয় কথা অতিরঞ্জন বা সরলীকরণ নয় — এটি শ্রেণিগত ভুল, ঠিক যেমন জিজ্ঞেস করা যে সম্পন্ন হ্যান্ডশেকের কোন প্রান্তটি বেশি শক্ত ছিল।

তাহলে ভলিউম কী মাপে? **এটি মতানৈক্যের আকার মাপে।** একটি শেয়ার তখনই লেনদেন হয় যখন একজন অংশগ্রহণকারী একে দামের নিচে মূল্যায়ন করেন আর অন্যজন ওপরে। উচ্চ ভলিউম মানে ঐ দামে বিপরীত মত পোষণকারীদের মধ্যে বড় পরিমাণ শেয়ার হাতবদল হয়েছে। কম ভলিউম মানে অল্প মানুষ দামটিকে কাজ করার মতো আকর্ষণীয় মনে করেছেন।

এই পুনর্গঠনটিই পুরো অধ্যায়। ভলিউম কোনো দিকনির্দেশক শক্তি নয়। **এটি মাপে কতটা প্রত্যয় লেনদেন হয়েছে, এবং এটি দিক-নিরপেক্ষ।** দিক আসে দাম থেকে। ভলিউম বলে বাজার কতটা গ্রাহ্য করেছে।

### চারটি দাম–ভলিউম সম্পর্ক

এই কাঠামোটি মেনে নিলে ক্লাসিক সম্পর্কগুলো লোককথা থাকে না, প্রায় পাটিগণিত হয়ে যায়।

| দাম | ভলিউম | পাঠ |
|---|---|---|
| বাড়ছে | বাড়ছে | **সুস্থ উত্থান।** উঁচু দাম ক্রমশ বড় পরিমাণ শেয়ার শোষণ করছে। সরবরাহ শোষিত হচ্ছে। |
| বাড়ছে | কমছে | **দুর্বল হতে থাকা উত্থান।** দাম বাড়ছে কারণ বিক্রেতারা সরে গেছেন, ক্রেতারা সরবরাহ শোষণ করছেন বলে নয়। পাতলা ও উল্টে যাওয়ার মতো। |
| কমছে | বাড়ছে | **সুস্থ পতন।** প্রকৃত বণ্টন; ধারকরা পতনের ভেতরে বেরিয়ে যাচ্ছেন। |
| কমছে | কমছে | **নিঃশেষ হতে থাকা পতন।** বিক্রয়চাপ শুকিয়ে আসছে। প্রায়ই ভিত্তি গঠনের আগে আসে। |

টেবিলের চেয়েও দুটি বিশেষ ক্ষেত্র বেশি গুরুত্বপূর্ণ।

**ক্লাইম্যাক্স ভলিউম।** একটি দীর্ঘ চলনের শেষে চরম ভলিউম স্পাইক — গড়ের কয়েক গুণ, প্রশস্ত-পরিসরের বারে — প্রায়শই চলনটির ধারাবাহিকতা নয়, *সমাপ্তি* চিহ্নিত করে। শেষ ধারকরা আত্মসমর্পণ করেন, বা শেষ ধাওয়াকারীরা ঝাঁপিয়ে পড়েন। যাঁরা কাজ করার ছিলেন সবাই কাজ করে ফেলেছেন। আর কেউ বাকি নেই যে একে আরও ঠেলবে।

**কনসোলিডেশনে ভলিউম শুকিয়ে যাওয়া।** অধ্যায় ৩৩-এর যে রেক্ট্যাঙ্গল বা ত্রিভুজ ক্রমাগত কমতে থাকা ভলিউমে গড়ে ওঠে, সেটি সঠিক আচরণ করছে। প্যাটার্নটি একটি যুদ্ধবিরতি, আর যুদ্ধবিরতি নীরব হয়। **বাড়তে থাকা ভলিউমে কনসোলিডেশন আসলে কনসোলিডেশন নয় — এটি একটি লড়াই, আর লড়াই হিংস্রভাবে নিষ্পত্তি হয়।**

### অধ্যায় ৩০, ৩২ ও ৩৩-এর প্যাটার্নের নিশ্চিতকরণ হিসেবে ভলিউম

অধ্যায় ৩০ ব্রেকআউটকে সংজ্ঞায়িত করেছিল এমন একটি ক্লোজ হিসেবে যা আগে টিকে থাকা একটি স্তর ছাড়িয়ে যায়। অনুক্ত সমস্যাটি ছিল, এ ধরনের অধিকাংশ ক্লোজ ব্যর্থ হয়। ভলিউমই ফিল্টার।

গড়ের ২–৩ গুণ ভলিউমে ব্রেকআউট বলে স্তরটি বড় পরিমাণ শেয়ার দিয়ে পরীক্ষিত হয়েছে ও ভেঙেছে। গড়ের ০.৮ গুণ ভলিউমে ব্রেকআউট বলে অল্প কিছু শেয়ার একটি পাতলা বইয়ের ভেতর দিয়ে ঠেলে গেছে। **দুটি ক্ষেত্রেই চার্ট অভিন্ন দেখায়। টার্নওভার দেখায় না।**

অধ্যায় ৩২-এর হেড-অ্যান্ড-শোল্ডার ও ডাবল টপে একই পরীক্ষা প্রয়োগ করুন: ক্লাসিক শর্ত হলো বাম কাঁধে ভলিউম সবচেয়ে বেশি ও ডান কাঁধে সবচেয়ে কম, নেকলাইন ভাঙায় প্রসারণসহ। যেখানে ঐ ভলিউম স্বাক্ষর অনুপস্থিত, সেখানে আপনার কাছে একটি আকৃতি আছে, প্যাটার্ন নয়।

### উদ্ভূত ভলিউম নির্দেশক, এবং প্রত্যেকটি কী অনুমান করে

**On-Balance Volume (OBV)** একটি ক্রমযোজিত মোট চালায়: ক্লোজ ওপরে হলে দিনের পুরো ভলিউম যোগ করে, নিচে হলে পুরোটা বিয়োগ করে। এটি কার্যকর, আর এর অনুমানটি স্থূল এবং জোরে বলে দেওয়ার মতো: **OBV একটি সেশনের ১০০% ভলিউম ক্লোজের দিকে বরাদ্দ করে।** যে দিন লো-তে খুলে ৪% উঠে আগের ক্লোজের এক পয়সা নিচে বন্ধ হলো, তাকে ১০০% বণ্টন গণ্য করা হয়। যে দিন এক পয়সা ওপরে বন্ধ হলো, তাকে ১০০% সঞ্চয়ন। নির্দেশকটির মাত্রার কোনো ধারণা নেই।

**Accumulation/Distribution** ঠিক সেটাই সারায়, দিনের পরিসরের ভেতরে ক্লোজ কোথায় বসল তা দিয়ে ঐ দিনের ভলিউমকে ভারিত করে। হাই-তে ক্লোজ পায় +১, লো-তে −১, মধ্যবিন্দুতে ০। এটি উন্নততর অনুমান, আর এর নিজস্ব ত্রুটি আছে: **A/D গ্যাপ সম্পূর্ণ উপেক্ষা করে**, কারণ এটি কখনো আগের ক্লোজের দিকে তাকায় না।

**Money Flow Index** হলো RSI, তবে কেবল দামের ওপর নয়, টিপিক্যাল প্রাইস × ভলিউমের ওপর গণিত — যা একে এই বইয়ের একমাত্র অসিলেটর বানায় যা বিশুদ্ধ দাম-রূপান্তর নয়। একে ভলিউম-ভারিত RSI হিসেবে পড়ুন, আর এর ডাইভারজেন্স RSI-এর চেয়ে বেশি ওজন বহন করে।

**VWAP** হলো একটি সেশন বা জানালার ভলিউম-ভারিত গড় দাম। একটি প্রতিষ্ঠান আসলে যা দিয়েছে এটি তাই, যা একে নির্বাহ মানের সৎ মানদণ্ড বানায়। VWAP-এর ওপরে লেনদেন মানে প্রান্তিক ক্রেতা দিনের প্রকৃত গড়ের তুলনায় বেশি দিচ্ছেন।

**এদের কোনোটিই একে অপরের থেকে স্বাধীন নয়।** এগুলো একই দুটি সিরিজ মেলানোর চারটি উপায়। চারটিই চালিয়ে ঐকমত্য গোনা আগের সেই ভুলটিই, এক ধাপ ওপরে।`,
    },
  },
};
