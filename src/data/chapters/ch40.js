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

    simple: {
      en: `Think about a wedding hall on Gulshan Avenue.

You walk past at nine in the evening. The lights are on, the gate is decorated, and you can see the stage from the road. **From the outside, two very different evenings look identical.** In one, four hundred guests are inside eating. In the other, the caterer, the photographer and eleven relatives are standing around a hall built for four hundred.

The decorations are the price chart. **The number of people inside is the volume.**

### Price tells you where, volume tells you how many

Every chart you have drawn since Chapter 26 has been a picture of *where* the price went. Not one of them has told you *how many people were involved in sending it there*.

A stock can rise from 46 to 50 because two thousand people bought heavily from two thousand sellers. Or it can rise from 46 to 50 because one broker's client bought forty thousand shares on a quiet afternoon and nobody was minding the offer. **On the chart, those two weeks are the same picture.** The candles are identical. The moving average crosses at the same place. RSI prints the same number.

The only thing that separates them is how much stock actually changed hands.

### The handshake

Here is the sentence that most tip groups get wrong, and it is worth being blunt about.

**There is no such thing as "buying volume."**

If a screen says 12,00,000 shares traded, then 12,00,000 shares were bought *and* 12,00,000 shares were sold. Same shares. Same number. It is one transaction seen from two sides, like a handshake. Asking "was there more buying or more selling today?" is like asking which hand did more of the handshake.

So what does the number mean? **It measures how many people disagreed, and how much stock they disagreed over.** For a share to trade, one person must think it is worth less than the price and another must think it is worth more. High volume means a lot of stock moved between people who saw the price differently. Low volume means almost nobody cared enough to act.

**Direction comes from the price. Size of the argument comes from the volume.** That is the whole idea.

### Why this matters more than any indicator

In Chapter 30 you learned that a level at 48 exists because a crowd of people has unfinished business there. **Volume is how you find out whether that crowd is still standing there.** Price shows the wall; volume tells you whether anyone is guarding it.

That is why volume can confirm and RSI cannot. RSI is made out of price. Asking price to confirm price is asking a man to be his own witness.

### The four situations, in plain words

- **Price up, volume up.** Real. Higher prices are pulling out more and more sellers, and buyers are absorbing all of it. This is what a healthy rise looks like.
- **Price up, volume down.** Fragile. The price is drifting up not because anyone is buying hard, but because the sellers went home. When they come back, it falls.
- **Price down, volume up.** Real selling. People are genuinely leaving.
- **Price down, volume down.** The selling is finishing. Everyone who wanted out is out.

And one more that is worth memorising: **a huge, wild volume day after a long run is usually the end, not the beginning.** Everyone who was going to buy has bought. There is nobody left to push it.

### On the DSE, count taka, not shares

A 10-taka share and a 500-taka share both trading 1,00,000 shares are not comparable events. The first moved 10 lakh taka. The second moved 5 crore.

**On our market, always look at turnover in taka first, and the share count second.** Turnover tells you how much money showed up. Share count tells you how many pieces of paper moved, which is a much less interesting fact.

### And three local traps

**A circuit-limited day.** When a stock locks at its band, trading stops. The volume it prints is only what got through before the lock — the queue behind it is invisible. **That number is a fact about the halt, not about agreement.**

**A floor-price day.** During the floor period, some shares printed a few hundred shares a day or nothing at all. A flat line with no volume has nobody standing at it.

**A thin name where three tickets are the whole day.** If one broker puts through three negotiated blocks, the day's "volume" is three phone calls. **Averaging that into a twenty-day average makes the average a lie for the next twenty days.**`,
      bn: `গুলশান অ্যাভিনিউয়ের একটি কমিউনিটি সেন্টারের কথা ভাবুন।

আপনি রাত নয়টায় পাশ দিয়ে হেঁটে যাচ্ছেন। বাতি জ্বলছে, গেট সাজানো, রাস্তা থেকে মঞ্চ দেখা যাচ্ছে। **বাইরে থেকে দুটি সম্পূর্ণ ভিন্ন সন্ধ্যা অভিন্ন দেখায়।** একটিতে ভেতরে চারশো অতিথি খাচ্ছেন। অন্যটিতে চারশো জনের জন্য বানানো হলে ক্যাটারার, ফটোগ্রাফার আর এগারোজন আত্মীয় দাঁড়িয়ে আছেন।

সাজসজ্জাটি হলো প্রাইস চার্ট। **ভেতরে কতজন আছেন সেটিই ভলিউম।**

### দাম বলে কোথায়, ভলিউম বলে কতজন

অধ্যায় ২৬ থেকে আপনি যত চার্ট এঁকেছেন সবই দাম *কোথায়* গেছে তার ছবি। একটিও আপনাকে বলেনি *তাকে সেখানে পাঠাতে কতজন জড়িত ছিলেন*।

একটি শেয়ার ৪৬ থেকে ৫০-এ উঠতে পারে কারণ দুই হাজার মানুষ দুই হাজার বিক্রেতার কাছ থেকে ভারী কিনেছেন। অথবা ৪৬ থেকে ৫০-এ উঠতে পারে কারণ এক ব্রোকারের এক গ্রাহক নিরিবিলি বিকেলে চল্লিশ হাজার শেয়ার কিনেছেন আর অফারের দিকে কেউ তাকায়নি। **চার্টে ঐ দুই সপ্তাহ একই ছবি।** ক্যান্ডেলগুলো অভিন্ন। মুভিং অ্যাভারেজ একই জায়গায় ক্রস করে। RSI একই সংখ্যা ছাপে।

কেবল একটি জিনিস দুটিকে আলাদা করে: আসলে কত শেয়ার হাতবদল হয়েছে।

### হ্যান্ডশেক

এখানে সেই বাক্যটি যা বেশিরভাগ টিপ গ্রুপ ভুল বলে, আর স্পষ্ট করে বলাই উচিত।

**"ক্রয় ভলিউম" বলে কিছু নেই।**

পর্দা যদি বলে ১২,০০,০০০ শেয়ার লেনদেন হয়েছে, তবে ১২,০০,০০০ শেয়ার কেনা হয়েছে *এবং* ১২,০০,০০০ শেয়ার বিক্রি হয়েছে। একই শেয়ার। একই সংখ্যা। এটি একটি লেনদেন দুই দিক থেকে দেখা, হ্যান্ডশেকের মতো। "আজ কেনা বেশি না বেচা বেশি?" জিজ্ঞেস করা আর হ্যান্ডশেকের কোন হাতটি বেশি কাজ করল জিজ্ঞেস করা একই কথা।

তাহলে সংখ্যাটির অর্থ কী? **এটি মাপে কতজন দ্বিমত করেছেন, আর কত শেয়ার নিয়ে দ্বিমত করেছেন।** একটি শেয়ার লেনদেন হতে হলে একজনকে ভাবতে হবে এটি দামের চেয়ে কম মূল্যের আর আরেকজনকে ভাবতে হবে বেশি। উচ্চ ভলিউম মানে দামকে ভিন্নভাবে দেখা মানুষদের মধ্যে অনেক শেয়ার সরেছে। কম ভলিউম মানে কাজ করার মতো যথেষ্ট গ্রাহ্য প্রায় কেউ করেনি।

**দিক আসে দাম থেকে। তর্কের আকার আসে ভলিউম থেকে।** পুরো ধারণাটি এটুকুই।

### এটি যেকোনো নির্দেশকের চেয়ে বেশি গুরুত্বপূর্ণ কেন

অধ্যায় ৩০-এ শিখেছেন ৪৮-এ একটি লেভেলের অস্তিত্ব কারণ সেখানে একদল মানুষের অসমাপ্ত কাজ আছে। **ঐ ভিড় এখনো সেখানে দাঁড়িয়ে আছে কি না তা জানার উপায় ভলিউম।** দাম দেখায় দেয়ালটি; ভলিউম বলে কেউ তা পাহারা দিচ্ছে কি না।

সেজন্যই ভলিউম নিশ্চিত করতে পারে আর RSI পারে না। RSI দাম দিয়ে বানানো। দামকে দাম নিশ্চিত করতে বলা মানে একজনকে তার নিজের সাক্ষী হতে বলা।

### চারটি পরিস্থিতি, সহজ কথায়

- **দাম ওপরে, ভলিউম ওপরে।** প্রকৃত। উঁচু দাম ক্রমশ বেশি বিক্রেতা টেনে বের করছে, আর ক্রেতারা সবটাই শুষে নিচ্ছেন। সুস্থ উত্থান এমনই দেখায়।
- **দাম ওপরে, ভলিউম নিচে।** ভঙ্গুর। দাম ভেসে উঠছে কেউ জোরে কিনছেন বলে নয়, বিক্রেতারা বাড়ি চলে গেছেন বলে। তাঁরা ফিরলে এটি পড়ে।
- **দাম নিচে, ভলিউম ওপরে।** প্রকৃত বিক্রয়। মানুষ সত্যিই বেরিয়ে যাচ্ছেন।
- **দাম নিচে, ভলিউম নিচে।** বিক্রয় শেষ হয়ে আসছে। যাঁরা বেরোতে চেয়েছিলেন সবাই বেরিয়ে গেছেন।

আর আরেকটি মুখস্থ রাখার মতো: **দীর্ঘ দৌড়ের পর বিশাল, উন্মত্ত ভলিউমের দিন সাধারণত শেষ, শুরু নয়।** যাঁরা কিনতেন সবাই কিনে ফেলেছেন। ঠেলার মতো আর কেউ নেই।

### ডিএসই-তে শেয়ার নয়, টাকা গুনুন

১০ টাকার একটি শেয়ার আর ৫০০ টাকার একটি শেয়ার — দুটিতেই ১,০০,০০০ শেয়ার লেনদেন হলে সেগুলো তুলনীয় ঘটনা নয়। প্রথমটি ১০ লক্ষ টাকা সরিয়েছে। দ্বিতীয়টি ৫ কোটি।

**আমাদের বাজারে সবসময় আগে টাকার টার্নওভার দেখুন, শেয়ারের সংখ্যা পরে।** টার্নওভার বলে কত টাকা হাজির হয়েছে। শেয়ার সংখ্যা বলে কত টুকরো কাগজ সরেছে, যা অনেক কম আকর্ষণীয় তথ্য।

### আর তিনটি স্থানীয় ফাঁদ

**সার্কিট-সীমাবদ্ধ দিন।** কোনো শেয়ার তার ব্যান্ডে লক করলে লেনদেন থেমে যায়। যে ভলিউম এটি ছাপে তা কেবল লক হওয়ার আগে যতটুকু পার হয়েছে — পেছনের সারিটি অদৃশ্য। **ঐ সংখ্যা হল্ট সম্পর্কে একটি তথ্য, ঐকমত্য সম্পর্কে নয়।**

**ফ্লোর-প্রাইসের দিন।** ফ্লোরের সময়কালে কিছু শেয়ার দিনে কয়েকশো শেয়ার ছেপেছে বা কিছুই নয়। ভলিউমহীন সমতল রেখায় কেউ দাঁড়িয়ে নেই।

**পাতলা নাম যেখানে তিনটি টিকিটই পুরো দিন।** এক ব্রোকার তিনটি আলোচিত ব্লক চালালে দিনের "ভলিউম" তিনটি ফোন কল। **সেটিকে কুড়ি-দিনের গড়ে ঢোকালে গড়টি পরের কুড়ি দিন ধরে একটি মিথ্যা হয়ে থাকে।**`,
    },

    example: {
      en: `### DELTASPINN: six sessions that told two different stories

DELTASPINN is a mid-cap DSE spinning name used illustratively; **every figure below is constructed, not historical.** It matches the sheet in §40.9 cell for cell, so you can check each number as you read.

Twenty-day average volume is 15,00,000 shares. Twenty-day average turnover is BDT 7.20 crore. Shares outstanding are 45,00,00,000 with a 38% free float.

| Day | High | Low | Close | Volume | Turnover (BDT) | Typical Price | Vol / ADV |
|---|---|---|---|---|---|---|---|
| 0 | 46.30 | 45.40 | 46.00 | 10,00,000 | 4.60 cr | 45.90 | 0.67× |
| 1 | 47.60 | 46.00 | 47.40 | 12,00,000 | 5.688 cr | 47.00 | 0.80× |
| 2 | 48.90 | 47.30 | 48.70 | 18,00,000 | 8.766 cr | 48.30 | 1.20× |
| 3 | 49.20 | 47.40 | 48.00 | 15,00,000 | 7.20 cr | 48.20 | 1.00× |
| 4 | 50.40 | 48.40 | 50.00 | 36,00,000 | 18.00 cr | 49.60 | **2.40×** |
| 5 | 50.80 | 49.30 | 49.60 | 21,00,000 | 10.416 cr | 49.90 | 1.40× |

### The story the price chart tells

Price rose from 46.00 to a high of 50.80 in five sessions — a clean 10% advance, higher highs every single day, closing near the top of the range on Day 4. Every trend-following indicator in Chapters 34–39 is long. **The chart is unambiguous.**

Now stop looking at the chart.

### The story the volume tells

Days 1 through 3 rose on progressively larger, then flat, volume: 0.80×, 1.20×, 1.00×. Ordinary. Then Day 4 arrives: **36,00,000 shares, 2.40× the twenty-day average, on the widest range of the run**, and the close at 50.00 sits well inside a 48.40–50.40 bar rather than on its high.

Day 5 makes the highest high of the entire move at 50.80 — and closes at 49.60, *below* the previous close, on 21,00,000 shares.

Run the two accumulation measures across the window and the divergence is not subtle.

$$\\text{OBV}: \\quad 0 \\to 12{,}00{,}000 \\to 30{,}00{,}000 \\to 15{,}00{,}000 \\to 51{,}00{,}000 \\to 30{,}00{,}000$$

**Price made its highest high on Day 5. OBV finished the day at exactly the value it held on Day 2, when the close was 48.70 — ninety paisa lower.** The entire accumulation gained on the climax day was handed straight back.

The A/D line, which weights by where the close sat inside the range rather than by the sign of the close, agrees but more gently:

$$\\text{A/D}: \\quad 0 \\to 9{,}00{,}000 \\to 22{,}50{,}000 \\to 17{,}50{,}000 \\to 39{,}10{,}000 \\to 26{,}50{,}000$$

Day 5's close-location value is $-0.60$, so A/D subtracts $0.60 \\times 21{,}00{,}000 = 12{,}60{,}000$ rather than the whole 21,00,000. **Same session, two indicators, two different magnitudes of the same conclusion.**

### The contradiction you must be able to explain

Here is where most readers stop thinking, and it is the most instructive number in the chapter.

The Money Flow Index over the five-period window comes out at **85.51** — deeply "overbought," and, critically, **Day 5 is classified as a positive money-flow day.** Positive. On a day the stock closed down.

Why? Because MFI compares *typical prices*, not closes. Day 5's typical price is

$$\\frac{50.80 + 49.30 + 49.60}{3} = 49.90 > 49.60 = \\text{Day 4's typical price}$$

so the whole 10.479 crore of raw money flow is filed as positive.

**Take this seriously. The same session is 100% distribution to OBV, 60% distribution to A/D, and 100% accumulation to MFI.** All three are computed from the same two published series. They disagree because each smuggles in a different definition of what "the day's direction" means — sign of the close, position within the range, or direction of the typical price.

**Anyone who runs three volume indicators and counts how many agree has not built a confirmation system. They have built a system whose answer is determined by which definition of "up day" happens to be in the majority.**

### VWAP, and what it is actually for

$$\\text{VWAP}_{1..5} = \\frac{\\sum_{i=1}^{5} \\overline{TP}_i \\, V_i}{\\sum_{i=1}^{5} V_i} = \\frac{49{,}89{,}90{,}000}{1{,}02{,}00{,}000} = 48.9206$$

Day 5's close of 49.60 sits **0.6794 taka above the five-day VWAP.**

Read that correctly. It does **not** say "sell." It says: *the average share transacted in this window changed hands at 48.92, and the last price is 68 paisa above what the money actually paid.* If you are buying at 49.60, you are paying more than the crowd that built the position over the last week. That is a fact about your execution, not a prediction about tomorrow.

**VWAP is a benchmark, not a signal.** Institutions use it to grade fills. A retail trader who treats "above VWAP" as a sell trigger has borrowed an execution tool and used it as a forecasting tool.

### Turnover versus share count — the DSE-specific reading

Look at Day 3 and Day 0 side by side.

| | Day 0 | Day 3 |
|---|---|---|
| Volume | 10,00,000 | 15,00,000 |
| Volume / ADV | 0.67× | 1.00× |
| Turnover | BDT 4.60 crore | BDT 7.20 crore |
| Turnover / avg turnover | 0.64× | 1.00× |

Here the two measures broadly agree, because the price barely moved. **They stop agreeing the moment price moves far**, and that is exactly when you need them. A stock that doubles will show falling relative volume in shares while turnover holds steady — the same money is buying half as many shares. **Screen on turnover. It is the quantity that is actually scarce.**

### The float plausibility check

$$\\text{Free float} = 45{,}00{,}00{,}000 \\times 0.38 = 17{,}10{,}00{,}000 \\text{ shares}$$
$$\\frac{36{,}00{,}000}{17{,}10{,}00{,}000} \\times 100 = 2.105\\%$$

**The heaviest session in the run turned over 2.105% of the free float.** That is entirely ordinary — a real, if energetic, day. The sheet's anomaly verdict returns **NORMAL — volume consistent with float.**

Learn the shape of this test by seeing what would trip it. Had Day 4 printed 4,50,00,000 shares, that would be 26.3% of the entire free float in one session, and the correct response is not "strong accumulation" — it is **that number is not possible without either a reporting error or the same stock being churned repeatedly between related accounts.** Chapter 75 takes that up properly.

### The liquidity screen, from Chapter 27

Average turnover of BDT 7.20 crore clears the BDT 1 crore floor, so the screen returns **TRADEABLE**. At a 10% cap on participation:

$$\\text{Max position} = 7{,}20{,}00{,}000 \\times 0.10 = \\text{BDT } 72{,}00{,}000$$
$$\\text{Max shares} = \\left\\lfloor \\frac{72{,}00{,}000}{49.60} \\right\\rfloor = 1{,}45{,}161 \\text{ shares}$$

**That is the number that should govern your position sizing, and it is derived from volume — not from your conviction, your account size, or the quality of the chart.**

### The counterfactual that should frighten you: a contaminated ADV

Every relative-volume figure above rests on one denominator: ADV = 15,00,000.

Suppose 24,00,000 of Day 4's 36,00,000 shares were a single negotiated block between two institutions. Nothing on the screen distinguishes it. Recompute:

- Genuine screen volume on Day 4: **12,00,000 shares, not 36,00,000.**
- Twenty-day ADV without the block: $15{,}00{,}000 - \\frac{24{,}00{,}000}{20} = 13{,}80{,}000$.
- Day 4's true relative volume: $12{,}00{,}000 / 13{,}80{,}000 = \\mathbf{0.87\\times}$, not 2.40×.
- Today's relative volume: $21{,}00{,}000 / 13{,}80{,}000 = \\mathbf{1.52\\times}$, not 1.40×.

**The climax day was not a climax. It was a below-average session with a block trade parked on top of it**, and the entire volume narrative of this example inverts.

This is not a hypothetical worry on the DSE. A handful of large tickets routinely constitutes a whole day's turnover in a thin name, and **an ADV built from twenty daily means is one of the most fragile denominators in this book.** Use the median of the last twenty sessions alongside the mean. When they diverge by more than about 30%, the mean is being driven by a few tickets and every ratio you compute from it is decoration.

### Cross-reference: Chapter 30's exhaustion ratio, now formalised

Chapter 30 rated a level at 48.225 across four touches whose volumes ran 18,50,000 / 14,20,000 / 9,60,000 / 5,40,000, giving

$$\\chi = \\frac{5{,}40{,}000}{18{,}50{,}000} = 0.292$$

and overruled a composite of 70.50 to **WEAKENING**. That chapter asserted the claim; **this chapter is where it earns its keep.** The exhaustion ratio is a volume statement about inventory: it says the crowd positioned at the level has been served in instalments and there is nobody left to defend it. **Chapter 30 gave you the level. Chapter 40 gives you the evidence.**`,
      bn: `### DELTASPINN: ছয়টি সেশন যা দুটি ভিন্ন গল্প বলেছে

DELTASPINN দৃষ্টান্তমূলকভাবে ব্যবহৃত একটি মাঝারি আকারের ডিএসই স্পিনিং নাম; **নিচের প্রতিটি সংখ্যা নির্মিত, ঐতিহাসিক নয়।** এটি §৪০.৯-এর শিটের সঙ্গে ঘর ধরে ধরে মেলে, তাই পড়তে পড়তেই প্রতিটি সংখ্যা যাচাই করতে পারবেন।

কুড়ি দিনের গড় ভলিউম ১৫,০০,০০০ শেয়ার। কুড়ি দিনের গড় টার্নওভার ৭.২০ কোটি টাকা। ইস্যুকৃত শেয়ার ৪৫,০০,০০,০০০, ফ্রি ফ্লোট ৩৮%।

| দিন | হাই | লো | ক্লোজ | ভলিউম | টার্নওভার (টাকা) | টিপিক্যাল প্রাইস | ভলি / ADV |
|---|---|---|---|---|---|---|---|
| ০ | ৪৬.৩০ | ৪৫.৪০ | ৪৬.০০ | ১০,০০,০০০ | ৪.৬০ কোটি | ৪৫.৯০ | ০.৬৭× |
| ১ | ৪৭.৬০ | ৪৬.০০ | ৪৭.৪০ | ১২,০০,০০০ | ৫.৬৮৮ কোটি | ৪৭.০০ | ০.৮০× |
| ২ | ৪৮.৯০ | ৪৭.৩০ | ৪৮.৭০ | ১৮,০০,০০০ | ৮.৭৬৬ কোটি | ৪৮.৩০ | ১.২০× |
| ৩ | ৪৯.২০ | ৪৭.৪০ | ৪৮.০০ | ১৫,০০,০০০ | ৭.২০ কোটি | ৪৮.২০ | ১.০০× |
| ৪ | ৫০.৪০ | ৪৮.৪০ | ৫০.০০ | ৩৬,০০,০০০ | ১৮.০০ কোটি | ৪৯.৬০ | **২.৪০×** |
| ৫ | ৫০.৮০ | ৪৯.৩০ | ৪৯.৬০ | ২১,০০,০০০ | ১০.৪১৬ কোটি | ৪৯.৯০ | ১.৪০× |

### প্রাইস চার্ট যে গল্প বলে

দাম পাঁচ সেশনে ৪৬.০০ থেকে ৫০.৮০ হাই-তে উঠেছে — পরিচ্ছন্ন ১০% উত্থান, প্রতিদিন উঁচু হাই, চতুর্থ দিনে পরিসরের শীর্ষের কাছে ক্লোজ। অধ্যায় ৩৪–৩৯-এর প্রতিটি ট্রেন্ড-অনুসরণকারী নির্দেশক লং। **চার্ট দ্ব্যর্থহীন।**

এবার চার্টের দিকে তাকানো বন্ধ করুন।

### ভলিউম যে গল্প বলে

১ থেকে ৩ দিন উঠেছে ক্রমশ বড়, তারপর সমতল ভলিউমে: ০.৮০×, ১.২০×, ১.০০×। সাধারণ। তারপর আসে চতুর্থ দিন: **৩৬,০০,০০০ শেয়ার, কুড়ি দিনের গড়ের ২.৪০ গুণ, দৌড়ের সবচেয়ে চওড়া পরিসরে**, আর ৫০.০০-এ ক্লোজ ৪৮.৪০–৫০.৪০ বারের হাই-তে নয়, বেশ ভেতরে বসেছে।

পঞ্চম দিন পুরো চলনের সর্বোচ্চ হাই ৫০.৮০ বানায় — আর ক্লোজ করে ৪৯.৬০-এ, আগের ক্লোজের *নিচে*, ২১,০০,০০০ শেয়ারে।

জানালাজুড়ে দুটি সঞ্চয়ন পরিমাপ চালান, ডাইভারজেন্সটি সূক্ষ্ম নয়।

$$\\text{OBV}: \\quad 0 \\to 12{,}00{,}000 \\to 30{,}00{,}000 \\to 15{,}00{,}000 \\to 51{,}00{,}000 \\to 30{,}00{,}000$$

**দাম পঞ্চম দিনে তার সর্বোচ্চ হাই বানিয়েছে। OBV দিন শেষ করেছে ঠিক সেই মানে যা দ্বিতীয় দিনে ছিল, যখন ক্লোজ ছিল ৪৮.৭০ — নব্বই পয়সা নিচে।** ক্লাইম্যাক্স দিনে অর্জিত পুরো সঞ্চয়ন সরাসরি ফেরত দেওয়া হয়েছে।

A/D লাইন, যা ক্লোজের চিহ্ন নয় বরং পরিসরের ভেতরে ক্লোজ কোথায় বসল তা দিয়ে ভারিত করে, একমত হয় কিন্তু নরমভাবে:

$$\\text{A/D}: \\quad 0 \\to 9{,}00{,}000 \\to 22{,}50{,}000 \\to 17{,}50{,}000 \\to 39{,}10{,}000 \\to 26{,}50{,}000$$

পঞ্চম দিনের ক্লোজ-অবস্থান মান $-0.60$, তাই A/D পুরো ২১,০০,০০০ নয়, $0.60 \\times 21{,}00{,}000 = 12{,}60{,}000$ বিয়োগ করে। **একই সেশন, দুটি নির্দেশক, একই সিদ্ধান্তের দুটি ভিন্ন মাত্রা।**

### যে স্ববিরোধিতা আপনাকে ব্যাখ্যা করতে পারতে হবে

এখানেই বেশিরভাগ পাঠক ভাবা বন্ধ করেন, আর এটিই অধ্যায়ের সবচেয়ে শিক্ষণীয় সংখ্যা।

পাঁচ-পর্বের জানালায় Money Flow Index দাঁড়ায় **৮৫.৫১** — গভীরভাবে "অতিক্রীত", আর সবচেয়ে গুরুত্বপূর্ণভাবে, **পঞ্চম দিনটি একটি ধনাত্মক মানি-ফ্লো দিন হিসেবে শ্রেণিবদ্ধ।** ধনাত্মক। যে দিন শেয়ারটি নিচে বন্ধ হয়েছে।

কেন? কারণ MFI ক্লোজ নয়, *টিপিক্যাল প্রাইস* তুলনা করে। পঞ্চম দিনের টিপিক্যাল প্রাইস

$$\\frac{50.80 + 49.30 + 49.60}{3} = 49.90 > 49.60 = \\text{চতুর্থ দিনের টিপিক্যাল প্রাইস}$$

তাই ১০.৪৭৯ কোটির পুরো কাঁচা মানি ফ্লো ধনাত্মক হিসেবে জমা হয়।

**একে গুরুত্ব দিন। একই সেশন OBV-র কাছে ১০০% বণ্টন, A/D-র কাছে ৬০% বণ্টন, আর MFI-এর কাছে ১০০% সঞ্চয়ন।** তিনটিই একই দুটি প্রকাশিত সিরিজ থেকে গণিত। তারা দ্বিমত করে কারণ প্রত্যেকে "দিনের দিক" মানে কী তার ভিন্ন সংজ্ঞা লুকিয়ে আনে — ক্লোজের চিহ্ন, পরিসরের ভেতরে অবস্থান, নাকি টিপিক্যাল প্রাইসের দিক।

**যিনি তিনটি ভলিউম নির্দেশক চালিয়ে কতগুলো একমত তা গোনেন তিনি কোনো নিশ্চিতকরণ ব্যবস্থা গড়েননি। তিনি এমন ব্যবস্থা গড়েছেন যার উত্তর নির্ধারিত হয় "উর্ধ্ব দিনের" কোন সংজ্ঞাটি সংখ্যাগরিষ্ঠ তার দ্বারা।**

### VWAP, আর এটি আসলে কীসের জন্য

$$\\text{VWAP}_{1..5} = \\frac{\\sum_{i=1}^{5} \\overline{TP}_i \\, V_i}{\\sum_{i=1}^{5} V_i} = \\frac{49{,}89{,}90{,}000}{1{,}02{,}00{,}000} = 48.9206$$

পঞ্চম দিনের ৪৯.৬০ ক্লোজ **পাঁচ-দিনের VWAP-এর ০.৬৭৯৪ টাকা ওপরে।**

এটি সঠিকভাবে পড়ুন। এটি "বিক্রি করুন" **বলে না**। এটি বলে: *এই জানালায় গড় শেয়ারটি ৪৮.৯২-তে হাতবদল হয়েছে, আর শেষ দামটি টাকা যা আসলে দিয়েছে তার ৬৮ পয়সা ওপরে।* আপনি ৪৯.৬০-এ কিনলে গত সপ্তাহে অবস্থান গড়া ভিড়ের চেয়ে বেশি দিচ্ছেন। এটি আপনার নির্বাহ সম্পর্কে একটি তথ্য, আগামীকাল সম্পর্কে ভবিষ্যদ্বাণী নয়।

**VWAP একটি মানদণ্ড, সংকেত নয়।** প্রতিষ্ঠান একে ফিলের নম্বর দিতে ব্যবহার করে। যে খুচরা ট্রেডার "VWAP-এর ওপরে"-কে বিক্রয় ট্রিগার গণ্য করেন তিনি একটি নির্বাহ হাতিয়ার ধার করে তাকে পূর্বাভাসের হাতিয়ার বানিয়েছেন।

### টার্নওভার বনাম শেয়ার সংখ্যা — ডিএসই-নির্দিষ্ট পাঠ

তৃতীয় ও শূন্যতম দিন পাশাপাশি দেখুন।

| | দিন ০ | দিন ৩ |
|---|---|---|
| ভলিউম | ১০,০০,০০০ | ১৫,০০,০০০ |
| ভলিউম / ADV | ০.৬৭× | ১.০০× |
| টার্নওভার | ৪.৬০ কোটি টাকা | ৭.২০ কোটি টাকা |
| টার্নওভার / গড় টার্নওভার | ০.৬৪× | ১.০০× |

এখানে দুটি পরিমাপ মোটামুটি একমত, কারণ দাম প্রায় নড়েনি। **দাম অনেকটা নড়ার মুহূর্তেই তারা একমত হওয়া বন্ধ করে**, আর ঠিক তখনই আপনার এগুলো দরকার। যে শেয়ার দ্বিগুণ হয় তা শেয়ারের হিসাবে কমতে থাকা আপেক্ষিক ভলিউম দেখাবে অথচ টার্নওভার স্থির থাকবে — একই টাকা অর্ধেক শেয়ার কিনছে। **টার্নওভারে স্ক্রিন করুন। দুষ্প্রাপ্য পরিমাণটি আসলে সেটিই।**

### ফ্লোট যৌক্তিকতা যাচাই

$$\\text{Free float} = 45{,}00{,}00{,}000 \\times 0.38 = 17{,}10{,}00{,}000 \\text{ shares}$$
$$\\frac{36{,}00{,}000}{17{,}10{,}00{,}000} \\times 100 = 2.105\\%$$

**দৌড়ের ভারীতম সেশন ফ্রি ফ্লোটের ২.১০৫% হাতবদল করেছে।** এটি সম্পূর্ণ সাধারণ — একটি প্রকৃত, যদিও উদ্যমী, দিন। শিটের অসংগতি রায় ফেরত দেয় **NORMAL — ভলিউম ফ্লোটের সঙ্গে সঙ্গতিপূর্ণ।**

কীসে এটি বাজত তা দেখে পরীক্ষাটির আকার শিখুন। চতুর্থ দিন যদি ৪,৫০,০০,০০০ শেয়ার ছাপত, তা হতো এক সেশনে পুরো ফ্রি ফ্লোটের ২৬.৩%, আর সঠিক প্রতিক্রিয়া "শক্তিশালী সঞ্চয়ন" নয় — **সঠিক প্রতিক্রিয়া হলো ঐ সংখ্যা প্রতিবেদনের ভুল ছাড়া বা একই শেয়ার সম্পর্কিত হিসাবগুলোর মধ্যে বারবার ঘোরানো ছাড়া সম্ভব নয়।** অধ্যায় ৭৫ এটি যথাযথভাবে ধরে।

### অধ্যায় ২৭-এর লিকুইডিটি স্ক্রিন

৭.২০ কোটি টাকার গড় টার্নওভার ১ কোটি টাকার মেঝে পার করে, তাই স্ক্রিন ফেরত দেয় **TRADEABLE**। অংশগ্রহণে ১০% সীমায়:

$$\\text{Max position} = 7{,}20{,}00{,}000 \\times 0.10 = \\text{BDT } 72{,}00{,}000$$
$$\\text{Max shares} = \\left\\lfloor \\frac{72{,}00{,}000}{49.60} \\right\\rfloor = 1{,}45{,}161 \\text{ shares}$$

**এই সংখ্যাটিই আপনার পজিশন সাইজিং নিয়ন্ত্রণ করা উচিত, আর এটি ভলিউম থেকে উদ্ভূত — আপনার প্রত্যয়, আপনার হিসাবের আকার বা চার্টের গুণমান থেকে নয়।**

### যে বিপরীত ঘটনাটি আপনাকে ভয় পাওয়ানো উচিত: দূষিত ADV

ওপরের প্রতিটি আপেক্ষিক-ভলিউম সংখ্যা একটি হরের ওপর দাঁড়িয়ে: ADV = ১৫,০০,০০০।

ধরুন চতুর্থ দিনের ৩৬,০০,০০০-এর মধ্যে ২৪,০০,০০০ ছিল দুটি প্রতিষ্ঠানের মধ্যে একটি একক আলোচিত ব্লক। পর্দায় কিছুই একে আলাদা করে না। পুনর্গণনা করুন:

- চতুর্থ দিনের প্রকৃত পর্দার ভলিউম: **১২,০০,০০০ শেয়ার, ৩৬,০০,০০০ নয়।**
- ব্লক ছাড়া কুড়ি-দিনের ADV: $15{,}00{,}000 - \\frac{24{,}00{,}000}{20} = 13{,}80{,}000$।
- চতুর্থ দিনের প্রকৃত আপেক্ষিক ভলিউম: $12{,}00{,}000 / 13{,}80{,}000 = \\mathbf{0.87\\times}$, ২.৪০× নয়।
- আজকের আপেক্ষিক ভলিউম: $21{,}00{,}000 / 13{,}80{,}000 = \\mathbf{1.52\\times}$, ১.৪০× নয়।

**ক্লাইম্যাক্স দিনটি ক্লাইম্যাক্স ছিল না। এটি ছিল একটি গড়ের-নিচের সেশন যার ওপরে একটি ব্লক ট্রেড রাখা**, আর এই উদাহরণের পুরো ভলিউম আখ্যানটি উল্টে যায়।

ডিএসই-তে এটি কাল্পনিক দুশ্চিন্তা নয়। পাতলা নামে গুটিকয় বড় টিকিটই নিয়মিতভাবে পুরো দিনের টার্নওভার গঠন করে, আর **কুড়িটি দৈনিক গড় থেকে গড়া ADV এই বইয়ের সবচেয়ে ভঙ্গুর হরগুলোর একটি।** গড়ের পাশে শেষ কুড়ি সেশনের মধ্যকও ব্যবহার করুন। দুটি প্রায় ৩০%-এর বেশি ভিন্ন হলে গড়টিকে গুটিকয় টিকিট চালাচ্ছে, আর তা থেকে গণিত প্রতিটি অনুপাত অলংকার মাত্র।

### ক্রস-রেফারেন্স: অধ্যায় ৩০-এর এক্সহসশন অনুপাত, এখন আনুষ্ঠানিক

অধ্যায় ৩০ ৪৮.২২৫-এ একটি লেভেলকে চারটি টাচে রেটিং দিয়েছিল যাদের ভলিউম ছিল ১৮,৫০,০০০ / ১৪,২০,০০০ / ৯,৬০,০০০ / ৫,৪০,০০০, দিচ্ছে

$$\\chi = \\frac{5{,}40{,}000}{18{,}50{,}000} = 0.292$$

আর ৭০.৫০ কম্পোজিটকে অগ্রাহ্য করে **WEAKENING** করেছিল। ঐ অধ্যায় দাবিটি করেছিল; **এই অধ্যায়েই তা তার মূল্য অর্জন করে।** এক্সহসশন অনুপাত ইনভেন্টরি সম্পর্কে একটি ভলিউম-বিবৃতি: এটি বলে লেভেলে অবস্থান নেওয়া ভিড়কে কিস্তিতে সেবা দেওয়া হয়েছে আর রক্ষা করার মতো কেউ বাকি নেই। **অধ্যায় ৩০ আপনাকে লেভেল দিয়েছে। অধ্যায় ৪০ প্রমাণ দেয়।**`,
    },

    formula: {
      en: `### 1. Relative volume, and the fragility of its denominator

$$\\overline{ADV}_n = \\frac{1}{n}\\sum_{i=1}^{n} V_{t-i}, \\qquad RV_t = \\frac{V_t}{\\overline{ADV}_n}$$

With $n = 20$, DELTASPINN gives $RV = 21{,}00{,}000 / 15{,}00{,}000 = 1.40\\times$ today and a peak of $36{,}00{,}000 / 15{,}00{,}000 = 2.40\\times$.

**The numerator is a fact and the denominator is an opinion.** A mean over twenty sessions is a fair summary only if the twenty sessions are drawn from one regime. On the DSE they frequently are not: a single negotiated block, a corporate action, a record date, or one active foreign account can dominate the window.

Therefore compute both, always:

$$\\tilde{V}_n = \\text{median}\\big(V_{t-1}, \\ldots, V_{t-n}\\big), \\qquad \\kappa = \\frac{\\overline{ADV}_n}{\\tilde{V}_n}$$

**When $\\kappa > 1.3$, the mean is being driven by a handful of sessions and every relative-volume ratio built on it is decoration.** Report $RV$ against the median in that case, and say so.

### 2. The volume-confirmation test

Chapter 30's break test required $v = V_{\\text{break}} / \\overline{ADV} \\ge 1.5$. Generalise it. A price event $\\mathcal{E}$ — breakout, neckline break, gap, pattern completion — is **confirmed** only if

$$RV_{\\mathcal{E}} \\ge \\theta \\quad \\text{and} \\quad \\frac{T_{\\mathcal{E}}}{\\overline{T}_n} \\ge \\theta \\quad \\text{and} \\quad \\text{not CircuitLocked}(\\mathcal{E})$$

with $\\theta = 1.5$ as the working default and $T$ denoting taka turnover.

**All three conjuncts are required and none is a score.** The turnover clause exists because share count alone is not comparable across price levels. The circuit clause exists because **a session that locked at its band reports volume that is an artefact of the halt, not of agreement** — the resting queue behind the lock never printed, so the number both understates demand and cannot be compared to an ordinary day.

Note what confirmation is *not*:

$$\\text{Confirmation} \\ne \\big|\\{\\text{indicators agreeing}\\}\\big|$$

**Counting agreement among price-derived indicators is not evidence, because they share a single source.** Only volume — and, on the DSE, turnover — sits outside the price series.

### 3. On-Balance Volume and its accumulation logic

$$\\text{OBV}_t = \\text{OBV}_{t-1} + \\operatorname{sgn}(C_t - C_{t-1})\\, V_t$$

The mechanism is a claim about inventory: **an up close is read as evidence that the day's entire transferred quantity moved from weaker to stronger hands, and a down close as the reverse.** Cumulate that and OBV becomes a running estimate of net inventory migration.

The assumption is brutally coarse. Write it out:

$$w_t^{\\text{OBV}} = \\operatorname{sgn}(C_t - C_{t-1}) \\in \\{-1, 0, +1\\}$$

**A session that opened at the low, rallied 4%, and closed one paisa below the prior close is scored as 100% distribution.** DELTASPINN's Day 5 is exactly this species: the highest high of the entire move, a close 40 paisa below the previous close, and OBV subtracts the entire 21,00,000.

The signal that survives this coarseness is **divergence, not level**. The absolute value of OBV is meaningless — it depends on where you started the series. What matters is:

$$P_t > P_{t-k} \\quad \\text{while} \\quad \\text{OBV}_t \\le \\text{OBV}_{t-k}$$

which on DELTASPINN holds with $k = 3$: price at a new high of 50.80 while OBV returns to its Day 2 value of 30,00,000.

### 4. Close location value and the Accumulation/Distribution line

$$\\text{CLV}_t = \\frac{(C_t - L_t) - (H_t - C_t)}{H_t - L_t} \\in [-1, +1], \\qquad \\text{A/D}_t = \\text{A/D}_{t-1} + \\text{CLV}_t \\cdot V_t$$

with $\\text{CLV}_t := 0$ when $H_t = L_t$ — **which on the DSE is not a pathological case but a circuit-locked session**, so the guard is doing real work.

A/D replaces OBV's sign function with a continuous weight. It is a better assumption and it buys a different defect: **A/D never looks at the previous close, so it is blind to gaps.** A stock that gaps down 8% and then closes at the high of a narrow range scores $+1$ — full accumulation — on a day holders lost 8%.

**Neither indicator is right. They are two different lies about the same missing information**, which is the trade-by-trade record of who initiated. Nothing in the published daily bar contains that.

### 5. The Money Flow Index

$$\\overline{TP}_t = \\frac{H_t + L_t + C_t}{3}, \\qquad MF_t = \\overline{TP}_t \\cdot V_t$$

$$MR_n = \\frac{\\sum_{i \\,:\\, \\overline{TP}_i > \\overline{TP}_{i-1}} MF_i}{\\sum_{i \\,:\\, \\overline{TP}_i < \\overline{TP}_{i-1}} MF_i}, \\qquad MFI_n = 100 - \\frac{100}{1 + MR_n}$$

This is RSI's algebra applied to money rather than to price, which makes MFI **the only oscillator in Part III that is not purely a price transformation.**

Note the classification rule carefully: **the sign is taken on the typical price, not the close.** DELTASPINN's Day 5 closed down and its typical price rose, so MFI books it as positive money flow while OBV books it as full distribution. **The same session, opposite signs, and neither indicator is malfunctioning.** They are answering different questions and the reader who runs both without knowing this will treat the contradiction as noise.

Guard the degenerate case: if the window contains no down-periods, $MR$ is undefined and $MFI := 100$. The sheet handles this explicitly at B14 rather than letting a division by zero propagate.

### 6. VWAP is a benchmark, not a signal

$$\\text{VWAP} = \\frac{\\sum_i P_i V_i}{\\sum_i V_i}$$

where $P_i$ is trade price intraday, or typical price when working from daily bars as the sheet does.

**Read the identity that makes VWAP meaningful:** $\\sum_i P_i V_i$ is the total taka that changed hands and $\\sum_i V_i$ is the total shares, so VWAP is *the price the average transacted share actually paid.* No other single number on the tape has that property. A close is one trade; a mean of closes is a mean of one-trade-per-day.

Therefore its correct use is execution assessment:

$$\\text{Slippage}_{\\text{bps}} = \\frac{P_{\\text{fill}} - \\text{VWAP}}{\\text{VWAP}} \\times 10{,}000$$

**and its incorrect use is as a directional signal.** "Price is above VWAP, therefore sell" is a category error of the same family as "buying volume": it takes a measure of what was paid and reads it as a forecast of what will be paid. On DELTASPINN, the close sits 0.6794 above the five-day VWAP of 48.9206. That says the marginal buyer is paying up. It does not say the marginal buyer is wrong.

### 7. Turnover versus share count — the distinction that matters most on the DSE

$$T_t = C_t \\cdot V_t \\quad \\text{(taka turnover)}, \\qquad RT_t = \\frac{T_t}{\\overline{T}_n}$$

Two names each printing 1,00,000 shares are not comparable events if one trades at 10 and the other at 500. The first moved BDT 10 lakh; the second BDT 5 crore. **Share count measures paper. Turnover measures money, and money is the scarce quantity.**

The two diverge systematically whenever price trends:

$$\\frac{RT_t}{RV_t} = \\frac{C_t}{\\overline{C}_n}$$

**So a stock that has doubled will show relative volume in shares falling by half even with identical taka flow.** Screen on turnover, size on turnover, and use the share count only for float arithmetic — where shares, not taka, are the right unit.

### 8. Volume at price, and Chapter 30's exhaustion ratio formalised

Volume-at-price bins transacted quantity by price rather than by time:

$$\\text{VAP}(p) = \\sum_{t} V_t \\cdot \\mathbb{1}\\big[\\,p \\in [L_t, H_t]\\,\\big] \\cdot \\frac{1}{H_t - L_t}$$

under the standard uniform-distribution-within-the-bar assumption, which is crude and is the whole reason VAP built from daily bars is a sketch rather than a measurement. **The high-volume node is where the most inventory is positioned, and Chapter 30's "level" is exactly a local maximum of this function.**

Now the exhaustion ratio, which Chapter 30 asserted and this chapter derives:

$$\\chi = \\frac{V_{\\text{last touch}}}{V_{\\text{first touch}}}$$

$$\\text{Verdict} = \\begin{cases} \\text{WEAKENING — inventory consumed} & \\chi < 0.5 \\;\\land\\; n \\ge 4 \\\\ \\text{intact} & \\text{otherwise} \\end{cases}$$

**Why a ratio and not a level?** Because absolute volume at a touch confounds inventory with market-wide activity. A ratio of touch volumes within one name divides out the market regime, the name's own popularity, and the analyst's choice of ADV window. Chapter 30's four touches gave $\\chi = 5{,}40{,}000 / 18{,}50{,}000 = 0.292$ — **the fourth test transacted 29% of the first, and the level was empty.**

### 9. The liquidity screen and the float plausibility test

From Chapter 27's threshold, with $\\overline{T}$ the average daily turnover, $\\tau$ the turnover floor and $\\lambda$ the participation cap:

$$\\text{Tradeable} \\iff \\overline{T} \\ge \\tau, \\qquad Q^{*} = \\left\\lfloor \\frac{\\lambda \\, \\overline{T}}{C} \\right\\rfloor$$

At $\\tau = $ BDT 1 crore and $\\lambda = 0.10$, DELTASPINN's BDT 7.20 crore average gives a cap of BDT 72,00,000, or 1,45,161 shares at 49.60.

And the plausibility test, which is a sanity check on the data itself rather than on the trade:

$$F = S \\cdot f, \\qquad \\phi = \\frac{V_{\\max}}{F} \\times 100$$

$$\\text{Anomaly} = \\begin{cases} \\text{IMPLAUSIBLE} & \\phi > 25 \\\\ \\text{INVESTIGATE} & RV_{\\max} > 5 \\\\ \\text{NORMAL} & \\text{otherwise} \\end{cases}$$

DELTASPINN: $F = 17{,}10{,}00{,}000$ and $\\phi = 2.105\\%$ — **NORMAL**. A $\\phi$ above 25 does not mean enthusiasm; it means the same shares are being recycled, and Chapter 75 names the mechanism.

### 10. The DSE distortions, which precede all of the above

| Distortion | What it does to the volume figure |
|---|---|
| Circuit-limit lock | Trading halts at the band. **The printed volume is what cleared before the lock**, and the resting queue behind it never printed. High volume on a locked day understates demand; the number is an artefact of the halt, not a measure of agreement. Exclude from ADV. |
| Floor-price sessions | A share not permitted to trade lower prints near-zero volume, sometimes literally zero. **A flat line with no volume is a rule, not a crowd**, per Chapter 26. Exclude the window entirely — never average it into $\\overline{ADV}$. |
| Block and negotiated trades | A handful of large tickets can be an entire day's turnover in a thin name. **One 24,00,000-share block inside a twenty-day mean adds 1,20,000 to $\\overline{ADV}$ permanently for twenty sessions.** Compute $\\kappa$ from §40.5.1 and prefer the median when it exceeds 1.3. |
| Record dates and corporate actions | Spikes are administrative. Adjust or exclude; do not read them as conviction. |
| No reliable short side | Every classical bearish volume signature — distribution, climax top, negative divergence — resolves on the DSE to **do not buy, and exit if long.** It does not resolve to a short. Half the classical literature assumes a borrow that retail here does not have. |`,
      bn: `### ১. আপেক্ষিক ভলিউম, আর তার হরের ভঙ্গুরতা

$$\\overline{ADV}_n = \\frac{1}{n}\\sum_{i=1}^{n} V_{t-i}, \\qquad RV_t = \\frac{V_t}{\\overline{ADV}_n}$$

$n = 20$-এ DELTASPINN দেয় আজ $RV = 21{,}00{,}000 / 15{,}00{,}000 = 1.40\\times$ আর সর্বোচ্চ $36{,}00{,}000 / 15{,}00{,}000 = 2.40\\times$।

**লবটি একটি তথ্য আর হরটি একটি মতামত।** কুড়ি সেশনের গড় ন্যায্য সারসংক্ষেপ কেবল তখনই যখন কুড়িটি সেশন একটি শাসনব্যবস্থা থেকে নেওয়া। ডিএসই-তে প্রায়ই তা নয়: একটি আলোচিত ব্লক, একটি কর্পোরেট অ্যাকশন, একটি রেকর্ড ডেট, বা একটি সক্রিয় বিদেশি হিসাব জানালাটিকে কর্তৃত্ব করতে পারে।

তাই সবসময় দুটিই গণনা করুন:

$$\\tilde{V}_n = \\text{median}\\big(V_{t-1}, \\ldots, V_{t-n}\\big), \\qquad \\kappa = \\frac{\\overline{ADV}_n}{\\tilde{V}_n}$$

**$\\kappa > 1.3$ হলে গড়টিকে গুটিকয় সেশন চালাচ্ছে আর তার ওপর গড়া প্রতিটি আপেক্ষিক-ভলিউম অনুপাত অলংকার মাত্র।** ঐ ক্ষেত্রে $RV$ মধ্যকের বিপরীতে জানান, আর তা বলে দিন।

### ২. ভলিউম-নিশ্চিতকরণ পরীক্ষা

অধ্যায় ৩০-এর ব্রেক পরীক্ষা চেয়েছিল $v = V_{\\text{break}} / \\overline{ADV} \\ge 1.5$। একে সাধারণীকরণ করুন। একটি দাম-ঘটনা $\\mathcal{E}$ — ব্রেকআউট, নেকলাইন ভাঙা, গ্যাপ, প্যাটার্ন সম্পূর্ণ হওয়া — **নিশ্চিত** কেবল তখনই যদি

$$RV_{\\mathcal{E}} \\ge \\theta \\quad \\text{and} \\quad \\frac{T_{\\mathcal{E}}}{\\overline{T}_n} \\ge \\theta \\quad \\text{and} \\quad \\text{not CircuitLocked}(\\mathcal{E})$$

কার্যকর ডিফল্ট $\\theta = 1.5$ এবং $T$ মানে টাকার টার্নওভার।

**তিনটি শর্তই আবশ্যক আর কোনোটিই স্কোর নয়।** টার্নওভারের শর্তটি আছে কারণ কেবল শেয়ার সংখ্যা বিভিন্ন দামের স্তরে তুলনীয় নয়। সার্কিটের শর্তটি আছে কারণ **যে সেশন তার ব্যান্ডে লক করেছে তার জানানো ভলিউম হল্টের কৃত্রিম ফল, ঐকমত্যের নয়** — লকের পেছনে জমা সারিটি কখনো ছাপা হয়নি, তাই সংখ্যাটি একই সঙ্গে চাহিদাকে কম দেখায় ও একটি সাধারণ দিনের সঙ্গে তুলনীয় নয়।

লক্ষ করুন নিশ্চিতকরণ কী *নয়*:

$$\\text{Confirmation} \\ne \\big|\\{\\text{indicators agreeing}\\}\\big|$$

**দাম-উদ্ভূত নির্দেশকদের মধ্যে ঐকমত্য গোনা প্রমাণ নয়, কারণ তারা একটিই উৎস ভাগ করে।** কেবল ভলিউম — আর ডিএসই-তে টার্নওভার — দামের সিরিজের বাইরে বসে।

### ৩. On-Balance Volume ও তার সঞ্চয়ন যুক্তি

$$\\text{OBV}_t = \\text{OBV}_{t-1} + \\operatorname{sgn}(C_t - C_{t-1})\\, V_t$$

কার্যপ্রণালীটি ইনভেন্টরি সম্পর্কে একটি দাবি: **উর্ধ্ব ক্লোজকে এই প্রমাণ হিসেবে পড়া হয় যে দিনের পুরো হস্তান্তরিত পরিমাণ দুর্বল হাত থেকে শক্ত হাতে গেছে, আর নিম্ন ক্লোজকে উল্টোটা।** তা ক্রমযোজিত করলে OBV নিট ইনভেন্টরি স্থানান্তরের একটি চলমান অনুমান হয়ে ওঠে।

অনুমানটি নির্মমভাবে স্থূল। লিখে ফেলুন:

$$w_t^{\\text{OBV}} = \\operatorname{sgn}(C_t - C_{t-1}) \\in \\{-1, 0, +1\\}$$

**যে সেশন লো-তে খুলে ৪% উঠে আগের ক্লোজের এক পয়সা নিচে বন্ধ হলো তাকে ১০০% বণ্টন হিসেবে নম্বর দেওয়া হয়।** DELTASPINN-এর পঞ্চম দিন ঠিক এই প্রজাতির: পুরো চলনের সর্বোচ্চ হাই, আগের ক্লোজের ৪০ পয়সা নিচে ক্লোজ, আর OBV পুরো ২১,০০,০০০ বিয়োগ করে।

এই স্থূলতা পেরিয়ে যে সংকেতটি টেকে তা হলো **ডাইভারজেন্স, স্তর নয়**। OBV-র পরম মান অর্থহীন — তা নির্ভর করে আপনি সিরিজটি কোথায় শুরু করেছেন তার ওপর। যা গুরুত্বপূর্ণ:

$$P_t > P_{t-k} \\quad \\text{while} \\quad \\text{OBV}_t \\le \\text{OBV}_{t-k}$$

যা DELTASPINN-এ $k = 3$-এ টেকে: দাম ৫০.৮০-এর নতুন হাই-তে অথচ OBV তার দ্বিতীয় দিনের মান ৩০,০০,০০০-এ ফিরে আসে।

### ৪. ক্লোজ লোকেশন ভ্যালু ও Accumulation/Distribution লাইন

$$\\text{CLV}_t = \\frac{(C_t - L_t) - (H_t - C_t)}{H_t - L_t} \\in [-1, +1], \\qquad \\text{A/D}_t = \\text{A/D}_{t-1} + \\text{CLV}_t \\cdot V_t$$

যেখানে $H_t = L_t$ হলে $\\text{CLV}_t := 0$ — **যা ডিএসই-তে কোনো রোগগ্রস্ত ক্ষেত্র নয়, বরং একটি সার্কিট-লক সেশন**, তাই রক্ষাকবচটি প্রকৃত কাজ করছে।

A/D OBV-র চিহ্ন ফাংশনকে একটি অবিচ্ছিন্ন ভার দিয়ে বদলায়। এটি উন্নততর অনুমান আর এটি একটি ভিন্ন ত্রুটি কেনে: **A/D কখনো আগের ক্লোজের দিকে তাকায় না, তাই এটি গ্যাপের প্রতি অন্ধ।** যে শেয়ার ৮% গ্যাপ ডাউন করে তারপর একটি সরু পরিসরের হাই-তে বন্ধ হয় তা $+1$ পায় — পূর্ণ সঞ্চয়ন — এমন দিনে যেদিন ধারকরা ৮% হারিয়েছেন।

**কোনো নির্দেশকই ঠিক নয়। এগুলো একই অনুপস্থিত তথ্য সম্পর্কে দুটি ভিন্ন মিথ্যা**, আর সেই তথ্যটি হলো কে উদ্যোগ নিয়েছিলেন তার লেনদেন-ভিত্তিক নথি। প্রকাশিত দৈনিক বারে তার কিছুই নেই।

### ৫. Money Flow Index

$$\\overline{TP}_t = \\frac{H_t + L_t + C_t}{3}, \\qquad MF_t = \\overline{TP}_t \\cdot V_t$$

$$MR_n = \\frac{\\sum_{i \\,:\\, \\overline{TP}_i > \\overline{TP}_{i-1}} MF_i}{\\sum_{i \\,:\\, \\overline{TP}_i < \\overline{TP}_{i-1}} MF_i}, \\qquad MFI_n = 100 - \\frac{100}{1 + MR_n}$$

এটি RSI-এর বীজগণিত দামের বদলে টাকায় প্রয়োগ, যা MFI-কে **তৃতীয় খণ্ডের একমাত্র অসিলেটর বানায় যা বিশুদ্ধ দাম-রূপান্তর নয়।**

শ্রেণিবিন্যাসের নিয়মটি মন দিয়ে দেখুন: **চিহ্নটি নেওয়া হয় টিপিক্যাল প্রাইসে, ক্লোজে নয়।** DELTASPINN-এর পঞ্চম দিন নিচে বন্ধ হয়েছে অথচ তার টিপিক্যাল প্রাইস বেড়েছে, তাই MFI একে ধনাত্মক মানি ফ্লো হিসেবে লেখে আর OBV একে পূর্ণ বণ্টন হিসেবে লেখে। **একই সেশন, বিপরীত চিহ্ন, আর কোনো নির্দেশকই বিকল নয়।** তারা ভিন্ন প্রশ্নের উত্তর দিচ্ছে, আর যিনি এটি না জেনে দুটিই চালান তিনি স্ববিরোধিতাটিকে হইচই গণ্য করবেন।

অবক্ষয়ী ক্ষেত্রটি পাহারা দিন: জানালায় কোনো নিম্ন-পর্ব না থাকলে $MR$ অসংজ্ঞায়িত আর $MFI := 100$। শিট শূন্য দিয়ে ভাগকে ছড়াতে না দিয়ে B14-তে এটি স্পষ্টভাবে সামলায়।

### ৬. VWAP একটি মানদণ্ড, সংকেত নয়

$$\\text{VWAP} = \\frac{\\sum_i P_i V_i}{\\sum_i V_i}$$

যেখানে $P_i$ ইন্ট্রাডে লেনদেনের দাম, অথবা শিটের মতো দৈনিক বার থেকে কাজ করলে টিপিক্যাল প্রাইস।

**যে অভেদ VWAP-কে অর্থবহ করে তা পড়ুন:** $\\sum_i P_i V_i$ হলো হাতবদল হওয়া মোট টাকা আর $\\sum_i V_i$ মোট শেয়ার, তাই VWAP হলো *গড় সম্পন্ন শেয়ারটি আসলে যে দাম দিয়েছে।* টেপের আর কোনো একক সংখ্যার এই ধর্ম নেই। ক্লোজ একটিমাত্র লেনদেন; ক্লোজের গড় হলো দিনে-একটি-লেনদেনের গড়।

তাই এর সঠিক ব্যবহার নির্বাহ মূল্যায়ন:

$$\\text{Slippage}_{\\text{bps}} = \\frac{P_{\\text{fill}} - \\text{VWAP}}{\\text{VWAP}} \\times 10{,}000$$

**আর এর ভুল ব্যবহার একটি দিকনির্দেশক সংকেত হিসেবে।** "দাম VWAP-এর ওপরে, তাই বিক্রি করুন" হলো "ক্রয় ভলিউম"-এর মতোই একই পরিবারের শ্রেণিগত ভুল: এটি কী দেওয়া হয়েছে তার একটি পরিমাপ নিয়ে কী দেওয়া হবে তার পূর্বাভাস হিসেবে পড়ে। DELTASPINN-এ ক্লোজ পাঁচ-দিনের VWAP ৪৮.৯২০৬-এর ০.৬৭৯৪ ওপরে। তা বলে প্রান্তিক ক্রেতা বেশি দিচ্ছেন। তা বলে না প্রান্তিক ক্রেতা ভুল।

### ৭. টার্নওভার বনাম শেয়ার সংখ্যা — ডিএসই-তে সবচেয়ে গুরুত্বপূর্ণ পার্থক্য

$$T_t = C_t \\cdot V_t \\quad \\text{(taka turnover)}, \\qquad RT_t = \\frac{T_t}{\\overline{T}_n}$$

দুটি নাম প্রতিটি ১,০০,০০০ শেয়ার ছাপলে সেগুলো তুলনীয় ঘটনা নয় যদি একটি ১০-এ আর অন্যটি ৫০০-তে লেনদেন হয়। প্রথমটি ১০ লক্ষ টাকা সরিয়েছে; দ্বিতীয়টি ৫ কোটি। **শেয়ার সংখ্যা কাগজ মাপে। টার্নওভার টাকা মাপে, আর দুষ্প্রাপ্য পরিমাণটি টাকা।**

দামে প্রবণতা থাকলেই দুটি নিয়মমাফিক আলাদা হয়:

$$\\frac{RT_t}{RV_t} = \\frac{C_t}{\\overline{C}_n}$$

**তাই যে শেয়ার দ্বিগুণ হয়েছে তা অভিন্ন টাকা-প্রবাহেও শেয়ারের হিসাবে আপেক্ষিক ভলিউম অর্ধেকে নেমে যেতে দেখাবে।** টার্নওভারে স্ক্রিন করুন, টার্নওভারে আকার নিন, আর শেয়ার সংখ্যা কেবল ফ্লোটের পাটিগণিতে ব্যবহার করুন — যেখানে টাকা নয়, শেয়ারই সঠিক একক।

### ৮. ভলিউম অ্যাট প্রাইস, আর অধ্যায় ৩০-এর এক্সহসশন অনুপাত আনুষ্ঠানিক রূপে

ভলিউম-অ্যাট-প্রাইস সম্পন্ন পরিমাণকে সময় নয়, দাম দিয়ে বিন করে:

$$\\text{VAP}(p) = \\sum_{t} V_t \\cdot \\mathbb{1}\\big[\\,p \\in [L_t, H_t]\\,\\big] \\cdot \\frac{1}{H_t - L_t}$$

বারের ভেতরে সুষম-বণ্টনের প্রমিত অনুমানে, যা স্থূল আর ঠিক এ কারণেই দৈনিক বার থেকে গড়া VAP একটি পরিমাপ নয়, একটি খসড়া। **উচ্চ-ভলিউম নোডই যেখানে সবচেয়ে বেশি ইনভেন্টরি অবস্থান নিয়েছে, আর অধ্যায় ৩০-এর "লেভেল" ঠিক এই ফাংশনের একটি স্থানীয় সর্বোচ্চ।**

এবার এক্সহসশন অনুপাত, যা অধ্যায় ৩০ দাবি করেছিল আর এই অধ্যায় উদ্ভাবন করে:

$$\\chi = \\frac{V_{\\text{last touch}}}{V_{\\text{first touch}}}$$

$$\\text{Verdict} = \\begin{cases} \\text{WEAKENING — inventory consumed} & \\chi < 0.5 \\;\\land\\; n \\ge 4 \\\\ \\text{intact} & \\text{otherwise} \\end{cases}$$

**অনুপাত কেন, স্তর নয়?** কারণ একটি টাচে পরম ভলিউম ইনভেন্টরিকে বাজারব্যাপী সক্রিয়তার সঙ্গে গুলিয়ে ফেলে। একটি নামের ভেতরে টাচ-ভলিউমের অনুপাত বাজারের শাসনব্যবস্থা, নামটির নিজস্ব জনপ্রিয়তা ও বিশ্লেষকের ADV জানালার পছন্দ — সবই ভাগ করে বাদ দেয়। অধ্যায় ৩০-এর চারটি টাচ দিয়েছিল $\\chi = 5{,}40{,}000 / 18{,}50{,}000 = 0.292$ — **চতুর্থ পরীক্ষা প্রথমটির ২৯% লেনদেন করেছে, আর লেভেলটি খালি ছিল।**

### ৯. লিকুইডিটি স্ক্রিন ও ফ্লোট যৌক্তিকতা পরীক্ষা

অধ্যায় ২৭-এর সীমা থেকে, $\\overline{T}$ গড় দৈনিক টার্নওভার, $\\tau$ টার্নওভারের মেঝে ও $\\lambda$ অংশগ্রহণের সীমা হলে:

$$\\text{Tradeable} \\iff \\overline{T} \\ge \\tau, \\qquad Q^{*} = \\left\\lfloor \\frac{\\lambda \\, \\overline{T}}{C} \\right\\rfloor$$

$\\tau = $ ১ কোটি টাকা ও $\\lambda = 0.10$-এ DELTASPINN-এর ৭.২০ কোটি টাকার গড় দেয় ৭২,০০,০০০ টাকার সীমা, অর্থাৎ ৪৯.৬০-এ ১,৪৫,১৬১ শেয়ার।

আর যৌক্তিকতা পরীক্ষা, যা ট্রেড নয়, উপাত্তটিরই সুস্থতা যাচাই:

$$F = S \\cdot f, \\qquad \\phi = \\frac{V_{\\max}}{F} \\times 100$$

$$\\text{Anomaly} = \\begin{cases} \\text{IMPLAUSIBLE} & \\phi > 25 \\\\ \\text{INVESTIGATE} & RV_{\\max} > 5 \\\\ \\text{NORMAL} & \\text{otherwise} \\end{cases}$$

DELTASPINN: $F = 17{,}10{,}00{,}000$ আর $\\phi = 2.105\\%$ — **NORMAL**। ২৫-এর ওপরে $\\phi$ উৎসাহ বোঝায় না; বোঝায় একই শেয়ার বারবার ঘোরানো হচ্ছে, আর অধ্যায় ৭৫ কার্যপ্রণালীটির নাম বলে।

### ১০. ডিএসই বিকৃতি, যা ওপরের সবকিছুর আগে আসে

| বিকৃতি | ভলিউম সংখ্যার কী করে |
|---|---|
| সার্কিট-সীমার লক | ব্যান্ডে লেনদেন থেমে যায়। **ছাপা ভলিউম হলো লকের আগে যতটুকু পার হয়েছে**, আর পেছনে জমা সারিটি কখনো ছাপা হয়নি। লক দিনে উচ্চ ভলিউম চাহিদাকে কম দেখায়; সংখ্যাটি হল্টের কৃত্রিম ফল, ঐকমত্যের পরিমাপ নয়। ADV থেকে বাদ দিন। |
| ফ্লোর-প্রাইসের সেশন | নিচে লেনদেনের অনুমতি না থাকা শেয়ার প্রায়-শূন্য ভলিউম ছাপে, কখনো আক্ষরিক শূন্য। অধ্যায় ২৬ অনুযায়ী **ভলিউমহীন সমতল রেখা একটি বিধি, ভিড় নয়।** জানালাটি পুরোপুরি বাদ দিন — কখনো $\\overline{ADV}$-তে গড় করবেন না। |
| ব্লক ও আলোচিত লেনদেন | পাতলা নামে গুটিকয় বড় টিকিটই পুরো দিনের টার্নওভার হতে পারে। **কুড়ি-দিনের গড়ে একটি ২৪,০০,০০০-শেয়ারের ব্লক কুড়ি সেশন ধরে $\\overline{ADV}$-তে স্থায়ীভাবে ১,২০,০০০ যোগ করে।** §৪০.৫.১-এর $\\kappa$ গণনা করুন আর তা ১.৩ ছাড়ালে মধ্যককে অগ্রাধিকার দিন। |
| রেকর্ড ডেট ও কর্পোরেট অ্যাকশন | স্পাইকগুলো প্রশাসনিক। সমন্বয় করুন বা বাদ দিন; এগুলোকে প্রত্যয় হিসেবে পড়বেন না। |
| নির্ভরযোগ্য শর্ট সাইড নেই | প্রতিটি ধ্রুপদী বেয়ারিশ ভলিউম-স্বাক্ষর — বণ্টন, ক্লাইম্যাক্স টপ, ঋণাত্মক ডাইভারজেন্স — ডিএসই-তে গিয়ে দাঁড়ায় **কিনবেন না, আর লং থাকলে বেরিয়ে আসুন।** এটি শর্টে গিয়ে দাঁড়ায় না। ধ্রুপদী সাহিত্যের অর্ধেক এমন ধার-ব্যবস্থা ধরে নেয় যা এখানে খুচরা বিনিয়োগকারীর নেই। |`,
    },

    manual: {
      en: `**Scenario.** DELTASPINN from §40.3, six sessions, reconciling cell for cell with the sheet in §40.9. ADV(20) = 15,00,000 shares (B18); average turnover = BDT 7.20 crore (B19); shares outstanding 45,00,00,000 (B27); free float 38% (B28).

**Step 1 — Typical price for every session (column G).** $\\overline{TP} = (H + L + C)/3$.

$$G_0 = \\frac{46.30 + 45.40 + 46.00}{3} = \\frac{137.70}{3} = 45.90$$
$$G_1 = \\frac{141.00}{3} = 47.00, \\quad G_2 = \\frac{144.90}{3} = 48.30, \\quad G_3 = \\frac{144.60}{3} = 48.20$$
$$G_4 = \\frac{148.80}{3} = 49.60, \\quad G_5 = \\frac{149.70}{3} = 49.90$$

**Note $G_3 = 48.20 < G_2 = 48.30$ by a single paisa.** That one paisa is the only down-period in the whole window, and it will single-handedly determine the MFI in Step 10. **Hold that thought — it is the fragility lesson of this chapter.**

**Step 2 — Taka turnover (column F).** $T = C \\times V$.

| Day | $C$ | $V$ | $T$ (BDT) |
|---|---|---|---|
| 0 | 46.00 | 10,00,000 | 4,60,00,000 |
| 1 | 47.40 | 12,00,000 | 5,68,80,000 |
| 2 | 48.70 | 18,00,000 | 8,76,60,000 |
| 3 | 48.00 | 15,00,000 | 7,20,00,000 |
| 4 | 50.00 | 36,00,000 | 18,00,00,000 |
| 5 | 49.60 | 21,00,000 | 10,41,60,000 |

**Step 3 — Relative volume against ADV = 15,00,000.**

$$0.67\\times, \\quad 0.80\\times, \\quad 1.20\\times, \\quad 1.00\\times, \\quad 2.40\\times, \\quad 1.40\\times$$

B20 = 21,00,000, B21 = $21{,}00{,}000/15{,}00{,}000 = \\mathbf{1.40}$, B22 = $36{,}00{,}000/15{,}00{,}000 = \\mathbf{2.40}$.

**Step 4 — OBV (column H), starting the series at zero.**

$$H_0 = 0$$
$$H_1: \\; 47.40 > 46.00 \\Rightarrow 0 + 12{,}00{,}000 = 12{,}00{,}000$$
$$H_2: \\; 48.70 > 47.40 \\Rightarrow 12{,}00{,}000 + 18{,}00{,}000 = 30{,}00{,}000$$
$$H_3: \\; 48.00 < 48.70 \\Rightarrow 30{,}00{,}000 - 15{,}00{,}000 = 15{,}00{,}000$$
$$H_4: \\; 50.00 > 48.00 \\Rightarrow 15{,}00{,}000 + 36{,}00{,}000 = 51{,}00{,}000$$
$$H_5: \\; 49.60 < 50.00 \\Rightarrow 51{,}00{,}000 - 21{,}00{,}000 = \\mathbf{30{,}00{,}000}$$

**Price closes Day 5 at 49.60 after printing the highest high of the move at 50.80. OBV closes at 30,00,000 — precisely its Day 2 value, when the close was 48.70.** Ninety paisa of net price advance since Day 2 — and two taka ten paisa up to the Day 5 high — has been accompanied by zero net accumulation. **That is the divergence, and it is the single most important number in this exercise.**

**Step 5 — Close location value (column I).** $\\text{CLV} = \\big((C-L)-(H-C)\\big)/(H-L)$.

$$I_0 = \\frac{0.60 - 0.30}{0.90} = 0.3333, \\qquad I_1 = \\frac{1.40 - 0.20}{1.60} = 0.7500$$
$$I_2 = \\frac{1.40 - 0.20}{1.60} = 0.7500, \\qquad I_3 = \\frac{0.60 - 1.20}{1.80} = -0.3333$$
$$I_4 = \\frac{1.60 - 0.40}{2.00} = 0.6000, \\qquad I_5 = \\frac{0.30 - 1.20}{1.50} = -0.6000$$

**Step 6 — A/D line (column J).**

$$J_1 = 0 + 0.75 \\times 12{,}00{,}000 = 9{,}00{,}000$$
$$J_2 = 9{,}00{,}000 + 0.75 \\times 18{,}00{,}000 = 22{,}50{,}000$$
$$J_3 = 22{,}50{,}000 - 0.3333 \\times 15{,}00{,}000 = 22{,}50{,}000 - 5{,}00{,}000 = 17{,}50{,}000$$
$$J_4 = 17{,}50{,}000 + 0.60 \\times 36{,}00{,}000 = 17{,}50{,}000 + 21{,}60{,}000 = 39{,}10{,}000$$
$$J_5 = 39{,}10{,}000 - 0.60 \\times 21{,}00{,}000 = 39{,}10{,}000 - 12{,}60{,}000 = \\mathbf{26{,}50{,}000}$$

**Step 7 — Put OBV and A/D side by side on the two contested days, because the gap between them is the whole reason to compute both.**

| | Day 3 | Day 5 |
|---|---|---|
| Volume | 15,00,000 | 21,00,000 |
| OBV charges | −15,00,000 (100%) | −21,00,000 (100%) |
| A/D charges | −5,00,000 (33%) | −12,60,000 (60%) |

**OBV writes off the entire day; A/D writes off the fraction of it implied by where the close sat.** On Day 3 the close at 48.00 sat one third of the way down a 1.80 range, so A/D charges a third. Neither is a measurement. **Both are guesses about a quantity — who initiated each trade — that the published daily bar simply does not contain.**

**Step 8 — Raw money flow (column K) and its sign (column L).** $MF = \\overline{TP} \\times V$.

| Day | $\\overline{TP}$ | $MF$ (BDT) | vs prior $\\overline{TP}$ | Sign |
|---|---|---|---|---|
| 0 | 45.90 | 4,59,00,000 | — | BASE |
| 1 | 47.00 | 5,64,00,000 | 47.00 > 45.90 | POS |
| 2 | 48.30 | 8,69,40,000 | 48.30 > 47.00 | POS |
| 3 | 48.20 | 7,23,00,000 | 48.20 < 48.30 | **NEG** |
| 4 | 49.60 | 17,85,60,000 | 49.60 > 48.20 | POS |
| 5 | 49.90 | 10,47,90,000 | 49.90 > 49.60 | **POS** |

**Read the last row again. Day 5 closed down and is filed as positive money flow**, because MFI switches on the typical price, and 49.90 exceeds 49.60. The same session that OBV scored as 100% distribution, MFI scores as 100% accumulation.

**Step 9 — Positive and negative money flow (B12, B13).**

$$B12 = 5{,}64{,}00{,}000 + 8{,}69{,}40{,}000 + 17{,}85{,}60{,}000 + 10{,}47{,}90{,}000 = \\mathbf{42{,}66{,}90{,}000}$$
$$B13 = \\mathbf{7{,}23{,}00{,}000}$$

**One session out of five carries the entire denominator**, and it got there on a one-paisa decline in typical price from 48.30 to 48.20.

**Step 10 — Money ratio and MFI (B14, B15).**

$$MR = \\frac{42{,}66{,}90{,}000}{7{,}23{,}00{,}000} = 5.9017$$
$$MFI = 100 - \\frac{100}{1 + 5.9017} = 100 - \\frac{100}{6.9017} = 100 - 14.4893 = \\mathbf{85.51}$$

**Now price the fragility, because otherwise "MFI is fragile" is just an assertion.** Suppose Day 3's high had printed 49.50 instead of 49.20 — a 30-paisa difference in one intraday high, well inside ordinary noise. Then $\\overline{TP}_3 = (49.50 + 47.40 + 48.00)/3 = 48.30$, which no longer falls below 48.30, the window contains **no** down-period, $MR$ is undefined and the sheet's guard at B14 returns "NO DOWN PERIODS" with MFI forced to **100.00**.

**Thirty paisa on one intraday high moves the indicator from 85.51 to 100.00.** That is not a defect in the arithmetic; it is what a five-period window does. **Never run MFI on a window short enough for one bar to own the denominator**, and on the DSE, where a single ticket can set an intraday high, the effective minimum is 14 periods.

**Step 11 — Confront the three-way contradiction, which is the point of the chapter.**

| Indicator | Verdict on Day 5 | Because |
|---|---|---|
| OBV | 100% distribution | Close 49.60 < prior close 50.00 |
| A/D | 60% distribution | CLV = −0.60 |
| MFI | 100% accumulation | Typical price 49.90 > prior 49.60 |

**Three indicators, one session, two published series, and no agreement.** If your process is "run several volume indicators and count agreement," your answer here is determined entirely by which definition of "up day" happens to be in the majority — not by anything the market did. **The correct process is to pick the definition that matches the question you are asking, state it, and use that one.**

For "was inventory transferred to holders who intend to keep it," the close-location weighting of A/D is the least bad. For "did money show up," MFI. For "is there a divergence against price," OBV, and only as a divergence, never as a level.

**Step 12 — VWAP and the close against it (B23, B24).**

$$\\sum_{i=1}^{5} MF_i = 5{,}64{,}00{,}000 + 8{,}69{,}40{,}000 + 7{,}23{,}00{,}000 + 17{,}85{,}60{,}000 + 10{,}47{,}90{,}000 = 49{,}89{,}90{,}000$$
$$\\sum_{i=1}^{5} V_i = 1{,}02{,}00{,}000$$
$$\\text{VWAP} = \\frac{49{,}89{,}90{,}000}{1{,}02{,}00{,}000} = \\mathbf{48.9206}$$
$$C_5 - \\text{VWAP} = 49.60 - 48.9206 = \\mathbf{+0.6794}$$

**The average transacted share over this window paid 48.92. The last print is 68 paisa above that.** If you buy at 49.60 you are paying 1.39% more than the money that built the move. **That is a statement about your execution and about nothing else.** VWAP does not forecast; it grades.

**Step 13 — Free float plausibility (B29, B30, B31).**

$$F = 45{,}00{,}00{,}000 \\times \\frac{38}{100} = 17{,}10{,}00{,}000 \\text{ shares}$$
$$V_{\\max} = 36{,}00{,}000, \\qquad \\phi = \\frac{36{,}00{,}000}{17{,}10{,}00{,}000} \\times 100 = \\mathbf{2.105\\%}$$

**The heaviest day of the run moved 2.105% of the free float — entirely ordinary.** Learn where the alarm sits: at $\\phi > 25$, one session would have turned over a quarter of everything available to trade, which is not enthusiasm but recirculation.

**Step 14 — The liquidity screen (B36, B37, B38).**

$$\\overline{T} = 7{,}20{,}00{,}000 \\ge \\tau = 1{,}00{,}00{,}000 \\;\\Rightarrow\\; \\textbf{TRADEABLE}$$
$$\\text{Max position} = 7{,}20{,}00{,}000 \\times \\frac{10}{100} = \\mathbf{72{,}00{,}000} \\text{ BDT}$$
$$\\text{Max shares} = \\left\\lfloor \\frac{72{,}00{,}000}{49.60} \\right\\rfloor = \\lfloor 1{,}45{,}161.29 \\rfloor = \\mathbf{1{,}45{,}161}$$

**This is a hard cap and it is computed before you have an opinion about the stock.** It does not consult the chart, the OBV divergence, or your conviction. **The reason to fix size from liquidity rather than from confidence is that liquidity is what determines whether you can leave**, and Chapter 27 established that exits, not entries, are where thin names take your money.

**Step 15 — The anomaly verdict (B40).**

$$\\phi = 2.105 \\not> 25, \\qquad RV_{\\max} = 2.40 \\not> 5 \\;\\Rightarrow\\; \\textbf{NORMAL — volume consistent with float}$$

**Step 16 — Cross-check Chapter 30's exhaustion ratio, now that you can derive it.**

$$\\chi = \\frac{5{,}40{,}000}{18{,}50{,}000} = 0.292 \\;<\\; 0.5, \\qquad n = 4 \\ge 4$$

Chapter 30's raw score of 82.50 became a composite of 70.50 and was overruled to **WEAKENING**. **The override is a volume argument, and this chapter is where you can finally state why it is legitimate:** the touch count measures how many times price visited, and the touch volumes measure how much inventory was consumed on each visit. **Only the second one is evidence, because only the second one is not a function of price.**

**Step 17 — State the caveat the sheet cannot see, exactly as Chapter 30 did.**

Every ratio above rests on B18 = 15,00,000. Suppose 24,00,000 of Day 4's shares were one negotiated block:

$$\\overline{ADV}^{\\,\\text{clean}} = 15{,}00{,}000 - \\frac{24{,}00{,}000}{20} = 13{,}80{,}000$$
$$RV_4^{\\,\\text{clean}} = \\frac{12{,}00{,}000}{13{,}80{,}000} = 0.87\\times \\quad \\text{(not 2.40×)}$$
$$RV_5^{\\,\\text{clean}} = \\frac{21{,}00{,}000}{13{,}80{,}000} = 1.52\\times \\quad \\text{(not 1.40×)}$$

**The climax session was a below-average session with a block parked on top of it, and the entire narrative inverts.** Compute the median alongside the mean, take $\\kappa = \\overline{ADV}/\\tilde{V}$, and when $\\kappa$ exceeds about 1.3, **report your relative volumes against the median and say in writing that you have done so.**`,
      bn: `**পরিস্থিতি।** §৪০.৩-এর DELTASPINN, ছয়টি সেশন, §৪০.৯-এর শিটের সঙ্গে ঘর ধরে ধরে মিলিয়ে। ADV(২০) = ১৫,০০,০০০ শেয়ার (B18); গড় টার্নওভার = ৭.২০ কোটি টাকা (B19); ইস্যুকৃত শেয়ার ৪৫,০০,০০,০০০ (B27); ফ্রি ফ্লোট ৩৮% (B28)।

**ধাপ ১ — প্রতিটি সেশনের টিপিক্যাল প্রাইস (কলাম G)।** $\\overline{TP} = (H + L + C)/3$।

$$G_0 = \\frac{46.30 + 45.40 + 46.00}{3} = \\frac{137.70}{3} = 45.90$$
$$G_1 = \\frac{141.00}{3} = 47.00, \\quad G_2 = \\frac{144.90}{3} = 48.30, \\quad G_3 = \\frac{144.60}{3} = 48.20$$
$$G_4 = \\frac{148.80}{3} = 49.60, \\quad G_5 = \\frac{149.70}{3} = 49.90$$

**লক্ষ করুন $G_3 = 48.20$, $G_2 = 48.30$-এর চেয়ে মাত্র এক পয়সা কম।** ঐ এক পয়সাই পুরো জানালার একমাত্র নিম্ন-পর্ব, আর ধাপ ১০-এ এটিই একা MFI নির্ধারণ করবে। **কথাটি মনে রাখুন — এটিই এই অধ্যায়ের ভঙ্গুরতার শিক্ষা।**

**ধাপ ২ — টাকার টার্নওভার (কলাম F)।** $T = C \\times V$।

| দিন | $C$ | $V$ | $T$ (টাকা) |
|---|---|---|---|
| ০ | ৪৬.০০ | ১০,০০,০০০ | ৪,৬০,০০,০০০ |
| ১ | ৪৭.৪০ | ১২,০০,০০০ | ৫,৬৮,৮০,০০০ |
| ২ | ৪৮.৭০ | ১৮,০০,০০০ | ৮,৭৬,৬০,০০০ |
| ৩ | ৪৮.০০ | ১৫,০০,০০০ | ৭,২০,০০,০০০ |
| ৪ | ৫০.০০ | ৩৬,০০,০০০ | ১৮,০০,০০,০০০ |
| ৫ | ৪৯.৬০ | ২১,০০,০০০ | ১০,৪১,৬০,০০০ |

**ধাপ ৩ — ADV = ১৫,০০,০০০-এর বিপরীতে আপেক্ষিক ভলিউম।**

$$0.67\\times, \\quad 0.80\\times, \\quad 1.20\\times, \\quad 1.00\\times, \\quad 2.40\\times, \\quad 1.40\\times$$

B20 = ২১,০০,০০০, B21 = $21{,}00{,}000/15{,}00{,}000 = \\mathbf{1.40}$, B22 = $36{,}00{,}000/15{,}00{,}000 = \\mathbf{2.40}$।

**ধাপ ৪ — OBV (কলাম H), সিরিজ শূন্য থেকে শুরু।**

$$H_0 = 0$$
$$H_1: \\; 47.40 > 46.00 \\Rightarrow 0 + 12{,}00{,}000 = 12{,}00{,}000$$
$$H_2: \\; 48.70 > 47.40 \\Rightarrow 12{,}00{,}000 + 18{,}00{,}000 = 30{,}00{,}000$$
$$H_3: \\; 48.00 < 48.70 \\Rightarrow 30{,}00{,}000 - 15{,}00{,}000 = 15{,}00{,}000$$
$$H_4: \\; 50.00 > 48.00 \\Rightarrow 15{,}00{,}000 + 36{,}00{,}000 = 51{,}00{,}000$$
$$H_5: \\; 49.60 < 50.00 \\Rightarrow 51{,}00{,}000 - 21{,}00{,}000 = \\mathbf{30{,}00{,}000}$$

**দাম ৫০.৮০-এ চলনের সর্বোচ্চ হাই ছেপে পঞ্চম দিন ৪৯.৬০-এ বন্ধ হয়। OBV বন্ধ হয় ৩০,০০,০০০-এ — ঠিক তার দ্বিতীয় দিনের মান, যখন ক্লোজ ছিল ৪৮.৭০।** দ্বিতীয় দিন থেকে নব্বই পয়সা নিট দাম-অগ্রগতি — আর পঞ্চম দিনের হাই পর্যন্ত দুই টাকা দশ পয়সা — এর সঙ্গী শূন্য নিট সঞ্চয়ন। **এটিই ডাইভারজেন্স, আর এই অনুশীলনের সবচেয়ে গুরুত্বপূর্ণ সংখ্যা।**

**ধাপ ৫ — ক্লোজ লোকেশন ভ্যালু (কলাম I)।** $\\text{CLV} = \\big((C-L)-(H-C)\\big)/(H-L)$।

$$I_0 = \\frac{0.60 - 0.30}{0.90} = 0.3333, \\qquad I_1 = \\frac{1.40 - 0.20}{1.60} = 0.7500$$
$$I_2 = \\frac{1.40 - 0.20}{1.60} = 0.7500, \\qquad I_3 = \\frac{0.60 - 1.20}{1.80} = -0.3333$$
$$I_4 = \\frac{1.60 - 0.40}{2.00} = 0.6000, \\qquad I_5 = \\frac{0.30 - 1.20}{1.50} = -0.6000$$

**ধাপ ৬ — A/D লাইন (কলাম J)।**

$$J_1 = 0 + 0.75 \\times 12{,}00{,}000 = 9{,}00{,}000$$
$$J_2 = 9{,}00{,}000 + 0.75 \\times 18{,}00{,}000 = 22{,}50{,}000$$
$$J_3 = 22{,}50{,}000 - 0.3333 \\times 15{,}00{,}000 = 22{,}50{,}000 - 5{,}00{,}000 = 17{,}50{,}000$$
$$J_4 = 17{,}50{,}000 + 0.60 \\times 36{,}00{,}000 = 17{,}50{,}000 + 21{,}60{,}000 = 39{,}10{,}000$$
$$J_5 = 39{,}10{,}000 - 0.60 \\times 21{,}00{,}000 = 39{,}10{,}000 - 12{,}60{,}000 = \\mathbf{26{,}50{,}000}$$

**ধাপ ৭ — দুটি বিতর্কিত দিনে OBV ও A/D পাশাপাশি রাখুন, কারণ তাদের মধ্যেকার ফারাকই দুটিই গণনা করার পুরো কারণ।**

| | দিন ৩ | দিন ৫ |
|---|---|---|
| ভলিউম | ১৫,০০,০০০ | ২১,০০,০০০ |
| OBV ধার্য করে | −১৫,০০,০০০ (১০০%) | −২১,০০,০০০ (১০০%) |
| A/D ধার্য করে | −৫,০০,০০০ (৩৩%) | −১২,৬০,০০০ (৬০%) |

**OBV পুরো দিনটি বাতিল করে; A/D ক্লোজ কোথায় বসেছিল তা দিয়ে নির্ধারিত ভগ্নাংশটুকু বাতিল করে।** তৃতীয় দিনে ৪৮.০০-এ ক্লোজ ১.৮০ পরিসরের এক-তৃতীয়াংশ নিচে বসেছিল, তাই A/D এক-তৃতীয়াংশ ধার্য করে। কোনোটিই পরিমাপ নয়। **দুটিই এমন একটি রাশি সম্পর্কে অনুমান — প্রতিটি লেনদেনে কে উদ্যোগ নিয়েছিলেন — যা প্রকাশিত দৈনিক বারে নেই-ই।**

**ধাপ ৮ — কাঁচা মানি ফ্লো (কলাম K) ও তার চিহ্ন (কলাম L)।** $MF = \\overline{TP} \\times V$।

| দিন | $\\overline{TP}$ | $MF$ (টাকা) | আগের $\\overline{TP}$-র তুলনায় | চিহ্ন |
|---|---|---|---|---|
| ০ | ৪৫.৯০ | ৪,৫৯,০০,০০০ | — | BASE |
| ১ | ৪৭.০০ | ৫,৬৪,০০,০০০ | ৪৭.০০ > ৪৫.৯০ | POS |
| ২ | ৪৮.৩০ | ৮,৬৯,৪০,০০০ | ৪৮.৩০ > ৪৭.০০ | POS |
| ৩ | ৪৮.২০ | ৭,২৩,০০,০০০ | ৪৮.২০ < ৪৮.৩০ | **NEG** |
| ৪ | ৪৯.৬০ | ১৭,৮৫,৬০,০০০ | ৪৯.৬০ > ৪৮.২০ | POS |
| ৫ | ৪৯.৯০ | ১০,৪৭,৯০,০০০ | ৪৯.৯০ > ৪৯.৬০ | **POS** |

**শেষ সারিটি আবার পড়ুন। পঞ্চম দিন নিচে বন্ধ হয়েছে অথচ ধনাত্মক মানি ফ্লো হিসেবে জমা**, কারণ MFI টিপিক্যাল প্রাইসে চিহ্ন নেয়, আর ৪৯.৯০ ৪৯.৬০ ছাড়িয়ে যায়। যে সেশনটিকে OBV ১০০% বণ্টন নম্বর দিয়েছে, MFI তাকে ১০০% সঞ্চয়ন নম্বর দেয়।

**ধাপ ৯ — ধনাত্মক ও ঋণাত্মক মানি ফ্লো (B12, B13)।**

$$B12 = 5{,}64{,}00{,}000 + 8{,}69{,}40{,}000 + 17{,}85{,}60{,}000 + 10{,}47{,}90{,}000 = \\mathbf{42{,}66{,}90{,}000}$$
$$B13 = \\mathbf{7{,}23{,}00{,}000}$$

**পাঁচটির মধ্যে একটি সেশনই পুরো হরটি বহন করে**, আর তা সেখানে পৌঁছেছে টিপিক্যাল প্রাইসে ৪৮.৩০ থেকে ৪৮.২০-তে এক পয়সা পতনে।

**ধাপ ১০ — মানি রেশিও ও MFI (B14, B15)।**

$$MR = \\frac{42{,}66{,}90{,}000}{7{,}23{,}00{,}000} = 5.9017$$
$$MFI = 100 - \\frac{100}{1 + 5.9017} = 100 - \\frac{100}{6.9017} = 100 - 14.4893 = \\mathbf{85.51}$$

**এবার ভঙ্গুরতার দাম হিসাব করুন, কারণ নইলে "MFI ভঙ্গুর" নিছক একটি দাবি।** ধরুন তৃতীয় দিনের হাই ৪৯.২০-র বদলে ৪৯.৫০ ছাপত — একটি ইন্ট্রাডে হাই-তে ৩০ পয়সার তফাত, সাধারণ হইচইয়ের ভেতরেই। তখন $\\overline{TP}_3 = (49.50 + 47.40 + 48.00)/3 = 48.30$, যা আর ৪৮.৩০-এর নিচে পড়ে না, জানালায় **কোনো** নিম্ন-পর্ব থাকে না, $MR$ অসংজ্ঞায়িত হয় আর B14-এর রক্ষাকবচ ফেরত দেয় "NO DOWN PERIODS", MFI বাধ্যতামূলকভাবে **১০০.০০**।

**একটি ইন্ট্রাডে হাই-তে ত্রিশ পয়সা নির্দেশকটিকে ৮৫.৫১ থেকে ১০০.০০-তে নিয়ে যায়।** এটি পাটিগণিতের ত্রুটি নয়; পাঁচ-পর্বের জানালা এমনই করে। **এত ছোট জানালায় কখনো MFI চালাবেন না যেখানে একটি বারই হরের মালিক হতে পারে**, আর ডিএসই-তে, যেখানে একটি টিকিটই ইন্ট্রাডে হাই স্থির করতে পারে, কার্যকর ন্যূনতম ১৪ পর্ব।

**ধাপ ১১ — তিন-মুখী স্ববিরোধিতার মুখোমুখি হোন, যা এই অধ্যায়ের মূল বক্তব্য।**

| নির্দেশক | পঞ্চম দিনের রায় | কারণ |
|---|---|---|
| OBV | ১০০% বণ্টন | ক্লোজ ৪৯.৬০ < আগের ক্লোজ ৫০.০০ |
| A/D | ৬০% বণ্টন | CLV = −০.৬০ |
| MFI | ১০০% সঞ্চয়ন | টিপিক্যাল প্রাইস ৪৯.৯০ > আগের ৪৯.৬০ |

**তিনটি নির্দেশক, একটি সেশন, দুটি প্রকাশিত সিরিজ, আর কোনো ঐকমত্য নেই।** আপনার প্রক্রিয়া যদি হয় "কয়েকটি ভলিউম নির্দেশক চালিয়ে ঐকমত্য গোনা", তবে এখানে আপনার উত্তর সম্পূর্ণভাবে নির্ধারিত হবে "উর্ধ্ব দিনের" কোন সংজ্ঞাটি সংখ্যাগরিষ্ঠ তা দিয়ে — বাজার যা করেছে তা দিয়ে নয়। **সঠিক প্রক্রিয়া হলো আপনার প্রশ্নের সঙ্গে মেলে এমন সংজ্ঞাটি বাছা, তা বলে দেওয়া, আর সেটিই ব্যবহার করা।**

"ইনভেন্টরি কি এমন ধারকদের কাছে গেছে যাঁরা রাখতে চান" প্রশ্নে A/D-র ক্লোজ-অবস্থান ভার সবচেয়ে কম খারাপ। "টাকা কি হাজির হয়েছে" প্রশ্নে MFI। "দামের বিপরীতে ডাইভারজেন্স আছে কি" প্রশ্নে OBV, আর কেবল ডাইভারজেন্স হিসেবে, কখনো স্তর হিসেবে নয়।

**ধাপ ১২ — VWAP ও তার বিপরীতে ক্লোজ (B23, B24)।**

$$\\sum_{i=1}^{5} MF_i = 5{,}64{,}00{,}000 + 8{,}69{,}40{,}000 + 7{,}23{,}00{,}000 + 17{,}85{,}60{,}000 + 10{,}47{,}90{,}000 = 49{,}89{,}90{,}000$$
$$\\sum_{i=1}^{5} V_i = 1{,}02{,}00{,}000$$
$$\\text{VWAP} = \\frac{49{,}89{,}90{,}000}{1{,}02{,}00{,}000} = \\mathbf{48.9206}$$
$$C_5 - \\text{VWAP} = 49.60 - 48.9206 = \\mathbf{+0.6794}$$

**এই জানালায় গড় সম্পন্ন শেয়ারটি দিয়েছে ৪৮.৯২। শেষ প্রিন্ট তার ৬৮ পয়সা ওপরে।** ৪৯.৬০-এ কিনলে আপনি চলনটি গড়া টাকার চেয়ে ১.৩৯% বেশি দিচ্ছেন। **এটি আপনার নির্বাহ সম্পর্কে একটি বক্তব্য, আর কিছু সম্পর্কে নয়।** VWAP পূর্বাভাস দেয় না; নম্বর দেয়।

**ধাপ ১৩ — ফ্রি ফ্লোট যৌক্তিকতা (B29, B30, B31)।**

$$F = 45{,}00{,}00{,}000 \\times \\frac{38}{100} = 17{,}10{,}00{,}000 \\text{ shares}$$
$$V_{\\max} = 36{,}00{,}000, \\qquad \\phi = \\frac{36{,}00{,}000}{17{,}10{,}00{,}000} \\times 100 = \\mathbf{2.105\\%}$$

**দৌড়ের ভারীতম দিন ফ্রি ফ্লোটের ২.১০৫% সরিয়েছে — সম্পূর্ণ সাধারণ।** সতর্কঘণ্টা কোথায় তা শিখুন: $\\phi > 25$-এ এক সেশনে লেনদেনযোগ্য সবকিছুর এক-চতুর্থাংশ হাতবদল হতো, যা উৎসাহ নয়, পুনঃসঞ্চালন।

**ধাপ ১৪ — লিকুইডিটি স্ক্রিন (B36, B37, B38)।**

$$\\overline{T} = 7{,}20{,}00{,}000 \\ge \\tau = 1{,}00{,}00{,}000 \\;\\Rightarrow\\; \\textbf{TRADEABLE}$$
$$\\text{Max position} = 7{,}20{,}00{,}000 \\times \\frac{10}{100} = \\mathbf{72{,}00{,}000} \\text{ BDT}$$
$$\\text{Max shares} = \\left\\lfloor \\frac{72{,}00{,}000}{49.60} \\right\\rfloor = \\lfloor 1{,}45{,}161.29 \\rfloor = \\mathbf{1{,}45{,}161}$$

**এটি একটি কঠোর সীমা আর শেয়ারটি সম্পর্কে আপনার মতামত তৈরি হওয়ার আগেই তা গণিত।** এটি চার্ট, OBV ডাইভারজেন্স বা আপনার প্রত্যয়ের পরামর্শ নেয় না। **আত্মবিশ্বাস নয়, লিকুইডিটি থেকে আকার স্থির করার কারণ হলো আপনি বেরোতে পারবেন কি না তা লিকুইডিটিই ঠিক করে**, আর অধ্যায় ২৭ প্রতিষ্ঠা করেছে যে পাতলা নাম আপনার টাকা নেয় প্রবেশে নয়, প্রস্থানে।

**ধাপ ১৫ — অসংগতি রায় (B40)।**

$$\\phi = 2.105 \\not> 25, \\qquad RV_{\\max} = 2.40 \\not> 5 \\;\\Rightarrow\\; \\textbf{NORMAL — volume consistent with float}$$

**ধাপ ১৬ — অধ্যায় ৩০-এর এক্সহসশন অনুপাত ক্রস-চেক করুন, এখন যেহেতু আপনি এটি উদ্ভাবন করতে পারেন।**

$$\\chi = \\frac{5{,}40{,}000}{18{,}50{,}000} = 0.292 \\;<\\; 0.5, \\qquad n = 4 \\ge 4$$

অধ্যায় ৩০-এর ৮২.৫০ কাঁচা স্কোর ৭০.৫০ কম্পোজিট হয়ে **WEAKENING**-এ অগ্রাহ্য হয়েছিল। **অগ্রাহ্যকরণটি একটি ভলিউম-যুক্তি, আর এই অধ্যায়েই আপনি অবশেষে বলতে পারেন কেন তা বৈধ:** টাচের সংখ্যা মাপে দাম কতবার এসেছে, আর টাচের ভলিউম মাপে প্রতিবার কত ইনভেন্টরি নিঃশেষ হয়েছে। **কেবল দ্বিতীয়টিই প্রমাণ, কারণ কেবল দ্বিতীয়টিই দামের ফাংশন নয়।**

**ধাপ ১৭ — শিট যা দেখতে পায় না সেই সতর্কতা বলুন, ঠিক যেমন অধ্যায় ৩০ বলেছিল।**

ওপরের প্রতিটি অনুপাত B18 = ১৫,০০,০০০-এর ওপর দাঁড়িয়ে। ধরুন চতুর্থ দিনের ২৪,০০,০০০ শেয়ার ছিল একটি আলোচিত ব্লক:

$$\\overline{ADV}^{\\,\\text{clean}} = 15{,}00{,}000 - \\frac{24{,}00{,}000}{20} = 13{,}80{,}000$$
$$RV_4^{\\,\\text{clean}} = \\frac{12{,}00{,}000}{13{,}80{,}000} = 0.87\\times \\quad \\text{(২.৪০× নয়)}$$
$$RV_5^{\\,\\text{clean}} = \\frac{21{,}00{,}000}{13{,}80{,}000} = 1.52\\times \\quad \\text{(১.৪০× নয়)}$$

**ক্লাইম্যাক্স সেশনটি ছিল একটি গড়ের-নিচের সেশন যার ওপরে একটি ব্লক রাখা, আর পুরো আখ্যানটি উল্টে যায়।** গড়ের পাশে মধ্যক গণনা করুন, $\\kappa = \\overline{ADV}/\\tilde{V}$ নিন, আর $\\kappa$ প্রায় ১.৩ ছাড়ালে **আপনার আপেক্ষিক ভলিউম মধ্যকের বিপরীতে জানান এবং লিখিতভাবে বলুন যে তা করেছেন।**`,
    },

    mistakes: {
      en: `1. **Saying "buying volume" or "more buyers than sellers."** Every one of DELTASPINN's 36,00,000 Day 4 shares was bought *and* sold. The two figures are the same figure. This is not a loose phrasing to be forgiven — **it is the error that makes people read a high-volume down day as accumulation**, and it corrupts every inference downstream.
2. **Treating agreement among price-derived indicators as confirmation.** MACD, RSI, stochastics and Bollinger Bands are all functions of the same close series. **Four of them agreeing is one number differenced four ways.** Only volume and turnover sit outside the price series, which is why the break test in Chapter 30 required $v \\ge 1.5$ and not "RSI above 50."
3. **Computing relative volume against a contaminated ADV.** DELTASPINN's B18 of 15,00,000 becomes 13,80,000 once a single 24,00,000-share block is stripped out, and Day 4's headline 2.40× becomes **0.87×** — a below-average session. **The ratio flipped from climax to nothing, and the only thing that changed was the denominator.** Compute $\\kappa = \\overline{ADV}/\\tilde{V}$ and distrust the mean above 1.3.
4. **Reading MFI's 85.51 as a fact about the window rather than about one bar.** The entire negative money flow of B13 — 7,23,00,000 — comes from a **one-paisa** decline in typical price from 48.30 to 48.20. Move Day 3's high 30 paisa and the denominator vanishes, B14 returns "NO DOWN PERIODS" and MFI prints **100.00**. Five periods is too few for any DSE name.
5. **Counting a circuit-locked session's volume as evidence of demand.** The printed figure is only what cleared before the halt; the resting queue behind the lock never printed. **That number is an artefact of the halt, not a measure of agreement**, and averaging it into ADV corrupts the denominator for the next twenty sessions.
6. **Averaging floor-price sessions into ADV.** A share not permitted to trade lower prints near-zero volume, sometimes literally zero, and dragging those into a twenty-day mean makes every subsequent relative-volume reading look explosive. Exclude the window with Chapter 26's flag.
7. **Screening on share count instead of taka turnover.** 1,00,000 shares of a 10-taka name is BDT 10 lakh; the same count in a 500-taka name is BDT 5 crore. Since $RT/RV = C/\\overline{C}$, **a stock that has doubled shows relative volume in shares falling by half on identical money flow.** Turnover is the scarce quantity; share count is paper.
8. **Using VWAP as a signal.** DELTASPINN's close sits 0.6794 above the five-day VWAP of 48.9206. That is a 1.39% execution premium, not a sell instruction. **VWAP grades fills; it does not forecast.** Reading "above VWAP, therefore sell" is the same category error as "buying volume," one level up.
9. **Running OBV, A/D and MFI together and counting agreement.** On Day 5 they return 100% distribution, 60% distribution and 100% accumulation respectively — **the same session, from the same two series, with no majority available.** Pick the definition that matches your question and use that one alone.
10. **Reading OBV's level rather than its divergence.** The absolute value depends entirely on where you started the series; DELTASPINN's 30,00,000 would be a different number if the sheet began a week earlier. **What is real is that OBV returned to its Day 2 value while price made a new high.**
11. **Ignoring the float check.** 36,00,000 shares is 2.105% of a 17,10,00,000 free float — ordinary. Above 25% in one session the correct reading is not enthusiasm but **the same stock being recycled**, and no volume indicator built on that data means anything.
12. **Translating a bearish volume signature into a short.** Distribution, a climax top, a negative OBV divergence — on the DSE these resolve to **do not buy, and exit if long.** There is no reliable retail short side here, and importing the textbook conclusion produces a trade you cannot actually place.`,
      bn: `১. **"ক্রয় ভলিউম" বা "বিক্রেতার চেয়ে ক্রেতা বেশি" বলা।** DELTASPINN-এর চতুর্থ দিনের ৩৬,০০,০০০ শেয়ারের প্রতিটি কেনা *এবং* বেচা হয়েছে। দুটি সংখ্যা একই সংখ্যা। এটি ক্ষমার যোগ্য শিথিল ভাষা নয় — **এটিই সেই ভুল যা মানুষকে উচ্চ-ভলিউমের নিম্ন দিনকে সঞ্চয়ন হিসেবে পড়ায়**, আর তা পরবর্তী প্রতিটি অনুমান দূষিত করে।
২. **দাম-উদ্ভূত নির্দেশকদের ঐকমত্যকে নিশ্চিতকরণ গণ্য করা।** MACD, RSI, স্টোক্যাস্টিকস ও বলিঞ্জার ব্যান্ড সবই একই ক্লোজ সিরিজের ফাংশন। **এদের চারটির একমত হওয়া একটি সংখ্যাকে চার উপায়ে পার্থক্য করা।** কেবল ভলিউম ও টার্নওভার দামের সিরিজের বাইরে বসে, আর সেজন্যই অধ্যায় ৩০-এর ব্রেক পরীক্ষা $v \\ge 1.5$ চেয়েছিল, "RSI ৫০-এর ওপরে" নয়।
৩. **দূষিত ADV-র বিপরীতে আপেক্ষিক ভলিউম গণনা।** একটি ২৪,০০,০০০-শেয়ারের ব্লক সরালেই DELTASPINN-এর B18 ১৫,০০,০০০ থেকে ১৩,৮০,০০০ হয়, আর চতুর্থ দিনের শিরোনাম ২.৪০× হয়ে যায় **০.৮৭×** — একটি গড়ের-নিচের সেশন। **অনুপাতটি ক্লাইম্যাক্স থেকে শূন্যে উল্টে গেল, আর বদলেছে কেবল হরটি।** $\\kappa = \\overline{ADV}/\\tilde{V}$ গণনা করুন আর ১.৩-এর ওপরে গড়কে অবিশ্বাস করুন।
৪. **MFI-এর ৮৫.৫১-কে জানালা সম্পর্কে তথ্য পড়া, একটি বার সম্পর্কে নয়।** B13-এর পুরো ঋণাত্মক মানি ফ্লো — ৭,২৩,০০,০০০ — আসে টিপিক্যাল প্রাইসে ৪৮.৩০ থেকে ৪৮.২০-তে **এক পয়সা** পতন থেকে। তৃতীয় দিনের হাই ৩০ পয়সা সরান আর হরটি উবে যায়, B14 ফেরত দেয় "NO DOWN PERIODS" আর MFI ছাপে **১০০.০০**। যেকোনো ডিএসই নামের জন্য পাঁচ পর্ব খুব কম।
৫. **সার্কিট-লক সেশনের ভলিউমকে চাহিদার প্রমাণ গোনা।** ছাপা সংখ্যাটি কেবল হল্টের আগে যতটুকু পার হয়েছে; লকের পেছনে জমা সারিটি কখনো ছাপা হয়নি। **ঐ সংখ্যা হল্টের কৃত্রিম ফল, ঐকমত্যের পরিমাপ নয়**, আর একে ADV-তে গড় করলে পরের কুড়ি সেশনের হরটি দূষিত হয়।
৬. **ফ্লোর-প্রাইসের সেশনকে ADV-তে গড় করা।** নিচে লেনদেনের অনুমতি না থাকা শেয়ার প্রায়-শূন্য ভলিউম ছাপে, কখনো আক্ষরিক শূন্য, আর সেগুলো কুড়ি-দিনের গড়ে টেনে আনলে পরবর্তী প্রতিটি আপেক্ষিক-ভলিউম পাঠ বিস্ফোরক দেখায়। অধ্যায় ২৬-এর চিহ্ন দিয়ে জানালাটি বাদ দিন।
৭. **টাকার টার্নওভারের বদলে শেয়ার সংখ্যায় স্ক্রিন করা।** ১০ টাকার নামে ১,০০,০০০ শেয়ার মানে ১০ লক্ষ টাকা; ৫০০ টাকার নামে একই সংখ্যা মানে ৫ কোটি টাকা। যেহেতু $RT/RV = C/\\overline{C}$, **দ্বিগুণ হওয়া শেয়ার অভিন্ন টাকা-প্রবাহে শেয়ারের হিসাবে অর্ধেক আপেক্ষিক ভলিউম দেখায়।** দুষ্প্রাপ্য পরিমাণ টার্নওভার; শেয়ার সংখ্যা কাগজ।
৮. **VWAP-কে সংকেত হিসেবে ব্যবহার।** DELTASPINN-এর ক্লোজ পাঁচ-দিনের VWAP ৪৮.৯২০৬-এর ০.৬৭৯৪ ওপরে। তা একটি ১.৩৯% নির্বাহ প্রিমিয়াম, বিক্রয়ের নির্দেশ নয়। **VWAP ফিলকে নম্বর দেয়; পূর্বাভাস দেয় না।** "VWAP-এর ওপরে, তাই বিক্রি" পড়া "ক্রয় ভলিউম"-এর মতোই শ্রেণিগত ভুল, এক ধাপ ওপরে।
৯. **OBV, A/D ও MFI একসঙ্গে চালিয়ে ঐকমত্য গোনা।** পঞ্চম দিনে এরা যথাক্রমে ১০০% বণ্টন, ৬০% বণ্টন ও ১০০% সঞ্চয়ন ফেরত দেয় — **একই সেশন, একই দুটি সিরিজ থেকে, আর কোনো সংখ্যাগরিষ্ঠতা নেই।** আপনার প্রশ্নের সঙ্গে মেলে এমন সংজ্ঞাটি বাছুন আর কেবল সেটিই ব্যবহার করুন।
১০. **OBV-র ডাইভারজেন্স নয়, স্তর পড়া।** পরম মান সম্পূর্ণভাবে নির্ভর করে সিরিজটি কোথায় শুরু করেছেন তার ওপর; শিটটি এক সপ্তাহ আগে শুরু হলে DELTASPINN-এর ৩০,০০,০০০ ভিন্ন সংখ্যা হতো। **বাস্তব যা তা হলো দাম নতুন হাই বানানোর সময় OBV তার দ্বিতীয় দিনের মানে ফিরে এসেছে।**
১১. **ফ্লোট যাচাই উপেক্ষা করা।** ১৭,১০,০০,০০০ ফ্রি ফ্লোটের ২.১০৫% হলো ৩৬,০০,০০০ শেয়ার — সাধারণ। এক সেশনে ২৫%-এর ওপরে সঠিক পাঠ উৎসাহ নয়, **একই শেয়ার পুনঃসঞ্চালিত হচ্ছে**, আর ঐ উপাত্তে গড়া কোনো ভলিউম নির্দেশকের কোনো অর্থ নেই।
১২. **বেয়ারিশ ভলিউম-স্বাক্ষরকে শর্টে অনুবাদ করা।** বণ্টন, ক্লাইম্যাক্স টপ, ঋণাত্মক OBV ডাইভারজেন্স — ডিএসই-তে এগুলো গিয়ে দাঁড়ায় **কিনবেন না, আর লং থাকলে বেরিয়ে আসুন।** এখানে নির্ভরযোগ্য খুচরা শর্ট সাইড নেই, আর পাঠ্যবইয়ের উপসংহার আমদানি করলে এমন ট্রেড তৈরি হয় যা আপনি আসলে বসাতেই পারবেন না।`,
    },

    tips: {
      en: `1. **Put turnover in the first column of every screen and share count in the third.** On the DSE the taka figure is the one that tells you whether you can get out. DELTASPINN's BDT 7.20 crore average is the number that produced the 1,45,161-share cap; the 15,00,000 ADV never entered that calculation.
2. **Compute the median volume alongside the mean, every time, and report $\\kappa$.** Above about 1.3, the mean is a few tickets wearing a costume. On the contaminated version of DELTASPINN, $\\overline{ADV}$ was inflated 8.7% by a single block and the headline relative volume was wrong by a factor of nearly three.
3. **Never run a volume oscillator on fewer than fourteen periods.** DELTASPINN's five-period MFI hangs its entire denominator on a one-paisa decline. Thirty paisa on one intraday high takes the reading from 85.51 to 100.00. **A number that fragile is not an input; it is a coin.**
4. **Use OBV only for divergence and never for level.** Its absolute value is an artefact of your start date. The real observation on DELTASPINN is that price printed a new high at 50.80 while OBV returned to its Day 2 figure of 30,00,000.
5. **Decide in advance which definition of an "up day" you are using, write it down, and use one indicator.** Sign of the close, position within the range, or direction of the typical price — these give opposite answers on Day 5. **A process that averages over the disagreement is a process whose answer is chosen by a vote among definitions.**
6. **Flag circuit-locked and floor-price sessions before computing anything.** Both print volume figures that describe the rule rather than the market, and both poison a twenty-day average for twenty sessions.
7. **Treat VWAP as an execution scorecard.** Record your fill against it on every trade. Over a hundred trades that log tells you something true about your own behaviour that no chart will.
8. **Run the float plausibility test before you run any indicator.** $\\phi = 2.105\\%$ on DELTASPINN says the data is believable. If it had come back above 25%, no OBV, A/D or MFI computed on that data would have meant anything at all.
9. **Size from the liquidity screen, not from conviction.** The 1,45,161-share cap was derived before any opinion about the chart existed. **Liquidity determines whether you can leave, and Chapter 27 established that thin names take your money on the exit.**
10. **When the volume signature is bearish, write the instruction as "do not buy" or "reduce."** Never as "short." Half the classical literature assumes a borrow that retail here does not have, and a plan containing an untradeable action is not a plan.
11. **Log volume at every level touch, as Chapter 30 required, because that log is what produces $\\chi$.** Price tells you where the level is; the volume sequence tells you whether anyone is still standing there. **Chapter 30's override was a volume argument all along.**`,
      bn: `১. **প্রতিটি স্ক্রিনের প্রথম কলামে টার্নওভার রাখুন আর তৃতীয়টিতে শেয়ার সংখ্যা।** ডিএসই-তে টাকার সংখ্যাটিই বলে আপনি বেরোতে পারবেন কি না। DELTASPINN-এর ৭.২০ কোটি টাকার গড়ই ১,৪৫,১৬১ শেয়ারের সীমাটি তৈরি করেছে; ১৫,০০,০০০ ADV ঐ গণনায় ঢোকেইনি।
২. **প্রতিবার গড়ের পাশে মধ্যক ভলিউম গণনা করুন আর $\\kappa$ জানান।** প্রায় ১.৩-এর ওপরে গড়টি ছদ্মবেশ পরা গুটিকয় টিকিট। DELTASPINN-এর দূষিত সংস্করণে একটি একক ব্লক $\\overline{ADV}$-কে ৮.৭% ফুলিয়েছিল আর শিরোনাম আপেক্ষিক ভলিউম প্রায় তিন গুণ ভুল ছিল।
৩. **চৌদ্দ পর্বের কম কোনো জানালায় কখনো ভলিউম অসিলেটর চালাবেন না।** DELTASPINN-এর পাঁচ-পর্বের MFI তার পুরো হরটি এক পয়সার পতনে ঝুলিয়ে রাখে। একটি ইন্ট্রাডে হাই-তে ত্রিশ পয়সা পাঠটিকে ৮৫.৫১ থেকে ১০০.০০-তে নেয়। **এতটা ভঙ্গুর সংখ্যা কোনো উপাদান নয়; একটি মুদ্রা।**
৪. **OBV কেবল ডাইভারজেন্সের জন্য ব্যবহার করুন, কখনো স্তরের জন্য নয়।** এর পরম মান আপনার শুরুর তারিখের কৃত্রিম ফল। DELTASPINN-এ প্রকৃত পর্যবেক্ষণ হলো দাম ৫০.৮০-তে নতুন হাই ছেপেছে অথচ OBV তার দ্বিতীয় দিনের সংখ্যা ৩০,০০,০০০-এ ফিরে এসেছে।
৫. **আগেভাগে ঠিক করুন "উর্ধ্ব দিনের" কোন সংজ্ঞা ব্যবহার করছেন, লিখে রাখুন, আর একটিই নির্দেশক ব্যবহার করুন।** ক্লোজের চিহ্ন, পরিসরের ভেতরে অবস্থান, বা টিপিক্যাল প্রাইসের দিক — পঞ্চম দিনে এগুলো বিপরীত উত্তর দেয়। **যে প্রক্রিয়া মতভেদের ওপর গড় করে তার উত্তর সংজ্ঞাদের মধ্যে ভোটে ঠিক হয়।**
৬. **কিছু গণনার আগে সার্কিট-লক ও ফ্লোর-প্রাইসের সেশন চিহ্নিত করুন।** দুটিই এমন ভলিউম ছাপে যা বাজার নয়, বিধি বর্ণনা করে, আর দুটিই কুড়ি সেশনের জন্য কুড়ি-দিনের গড় বিষিয়ে দেয়।
৭. **VWAP-কে নির্বাহের নম্বরপত্র গণ্য করুন।** প্রতিটি ট্রেডে তার বিপরীতে আপনার ফিল লিপিবদ্ধ করুন। একশো ট্রেড পরে ঐ নথি আপনার নিজের আচরণ সম্পর্কে এমন সত্য বলবে যা কোনো চার্ট বলবে না।
৮. **যেকোনো নির্দেশক চালানোর আগে ফ্লোট যৌক্তিকতা পরীক্ষা চালান।** DELTASPINN-এ $\\phi = 2.105\\%$ বলে উপাত্তটি বিশ্বাসযোগ্য। এটি ২৫%-এর ওপরে এলে ঐ উপাত্তে গণিত কোনো OBV, A/D বা MFI-এর কোনো অর্থই থাকত না।
৯. **প্রত্যয় নয়, লিকুইডিটি স্ক্রিন থেকে আকার নিন।** ১,৪৫,১৬১ শেয়ারের সীমাটি চার্ট সম্পর্কে কোনো মতামত তৈরি হওয়ার আগেই উদ্ভূত। **আপনি বেরোতে পারবেন কি না তা লিকুইডিটি ঠিক করে, আর অধ্যায় ২৭ প্রতিষ্ঠা করেছে পাতলা নাম প্রস্থানে আপনার টাকা নেয়।**
১০. **ভলিউম-স্বাক্ষর বেয়ারিশ হলে নির্দেশটি লিখুন "কিনবেন না" বা "কমান"।** কখনো "শর্ট" নয়। ধ্রুপদী সাহিত্যের অর্ধেক এমন ধার-ব্যবস্থা ধরে নেয় যা এখানে খুচরা বিনিয়োগকারীর নেই, আর যে পরিকল্পনায় অকার্যকর একটি কাজ আছে তা পরিকল্পনা নয়।
১১. **অধ্যায় ৩০ যেমন চেয়েছিল, প্রতিটি লেভেল টাচে ভলিউম লিপিবদ্ধ করুন, কারণ ঐ নথিই $\\chi$ তৈরি করে।** দাম বলে লেভেলটি কোথায়; ভলিউমের ক্রম বলে সেখানে এখনো কেউ দাঁড়িয়ে আছেন কি না। **অধ্যায় ৩০-এর অগ্রাহ্যকরণ প্রথম থেকেই একটি ভলিউম-যুক্তি ছিল।**`,
    },

    exercises: {
      en: `1. Build the §40.9 sheet from the six DELTASPINN sessions. Confirm G4:G9 = 45.90 / 47.00 / 48.30 / 48.20 / 49.60 / 49.90, H9 = 30,00,000, J9 = 26,50,000, B15 = 85.51, B23 = 48.9206 and B40 = NORMAL.
2. Change B7 (Day 3's high) from 49.20 to 49.50 and recompute. What does B14 now return, and what does B15 print? Explain in two sentences why a 30-paisa change to one intraday high moves the indicator that far.
3. Extend the window to fourteen sessions of your own data for one DSE name and recompute MFI. How much less does any single bar move the reading?
4. Recompute B21 and B22 after replacing B18 with 13,80,000 — the ADV net of a hypothetical 24,00,000-share block on Day 4. Which of the two ratios changes more, and why?
5. Add a column to the sheet computing the twenty-day *median* volume and a cell for $\\kappa = \\overline{ADV}/\\tilde{V}$. Pull twenty real sessions for a mid-cap and a small-cap DSE name. Report both values of $\\kappa$.
6. For the same two names, compute relative volume against the mean and against the median on the most recent session. How different are the two answers in the small-cap?
7. Day 5 is 100% distribution to OBV, 60% distribution to A/D, and 100% accumulation to MFI. Write one paragraph choosing which of the three you would use and stating the question it answers. Keep it with the sheet.
8. Take a DSE name that traded at its circuit limit at least once in the last quarter. Compute ADV with and without those sessions. By what percentage does the denominator change, and how many of your relative-volume readings cross the 1.5 confirmation threshold in one version but not the other?
9. Find a breakout in your own data. Test it against all three conjuncts of §40.5.2 — relative volume, relative turnover, and not-circuit-locked. How many of your historical "confirmed" breakouts survive all three?
10. Log your last twenty fills against the session VWAP and compute mean slippage in basis points. Is the number positive? What does that tell you about when in the session you tend to trade?
11. Take the Chapter 30 BEACONTEX touches — 18,50,000 / 14,20,000 / 9,60,000 / 5,40,000 — and compute $\\chi$. Then find a level in a live DSE name with at least four touches, log the volume at each, and compute its $\\chi$. Does the touch count or the ratio give you the more useful instruction?
12. Compute B37 and B38 for three names you actually hold. In how many of them is your current position larger than the cap the sheet returns?`,
      bn: `১. DELTASPINN-এর ছয়টি সেশন থেকে §৪০.৯-এর শিট তৈরি করুন। নিশ্চিত করুন G4:G9 = ৪৫.৯০ / ৪৭.০০ / ৪৮.৩০ / ৪৮.২০ / ৪৯.৬০ / ৪৯.৯০, H9 = ৩০,০০,০০০, J9 = ২৬,৫০,০০০, B15 = ৮৫.৫১, B23 = ৪৮.৯২০৬ ও B40 = NORMAL।
২. B7 (তৃতীয় দিনের হাই) ৪৯.২০ থেকে ৪৯.৫০ করুন ও পুনর্গণনা করুন। B14 এখন কী ফেরত দেয়, আর B15 কী ছাপে? দুই বাক্যে ব্যাখ্যা করুন কেন একটি ইন্ট্রাডে হাই-তে ৩০ পয়সার বদল নির্দেশকটিকে অতদূর সরায়।
৩. একটি ডিএসই নামের জন্য নিজের উপাত্তের চৌদ্দটি সেশনে জানালা বাড়িয়ে MFI পুনর্গণনা করুন। যেকোনো একটি বার পাঠটিকে কতটা কম সরায়?
৪. B18-এর বদলে ১৩,৮০,০০০ বসিয়ে B21 ও B22 পুনর্গণনা করুন — চতুর্থ দিনে একটি কাল্পনিক ২৪,০০,০০০-শেয়ারের ব্লক বাদ দিয়ে পাওয়া ADV। দুটি অনুপাতের কোনটি বেশি বদলায়, আর কেন?
৫. শিটে কুড়ি-দিনের *মধ্যক* ভলিউম গণনার একটি কলাম ও $\\kappa = \\overline{ADV}/\\tilde{V}$-এর একটি ঘর যোগ করুন। একটি মাঝারি ও একটি ছোট ডিএসই নামের কুড়িটি প্রকৃত সেশন নিন। $\\kappa$-এর দুটি মানই জানান।
৬. একই দুটি নামের জন্য সাম্প্রতিকতম সেশনে গড়ের বিপরীতে ও মধ্যকের বিপরীতে আপেক্ষিক ভলিউম গণনা করুন। ছোট নামটিতে দুটি উত্তর কতটা ভিন্ন?
৭. পঞ্চম দিন OBV-র কাছে ১০০% বণ্টন, A/D-র কাছে ৬০% বণ্টন, আর MFI-এর কাছে ১০০% সঞ্চয়ন। এক অনুচ্ছেদে লিখুন তিনটির কোনটি আপনি ব্যবহার করবেন ও তা কোন প্রশ্নের উত্তর দেয়। শিটের সঙ্গে রেখে দিন।
৮. গত ত্রৈমাসিকে অন্তত একবার সার্কিট সীমায় লেনদেন হওয়া একটি ডিএসই নাম নিন। ঐ সেশনগুলো সহ ও বাদ দিয়ে ADV গণনা করুন। হরটি শতকরা কত বদলায়, আর আপনার কতগুলো আপেক্ষিক-ভলিউম পাঠ এক সংস্করণে ১.৫ নিশ্চিতকরণ সীমা পার করে আর অন্যটিতে করে না?
৯. নিজের উপাত্তে একটি ব্রেকআউট খুঁজুন। §৪০.৫.২-এর তিনটি শর্তেই পরীক্ষা করুন — আপেক্ষিক ভলিউম, আপেক্ষিক টার্নওভার, আর সার্কিট-লক নয়। আপনার ঐতিহাসিক "নিশ্চিত" ব্রেকআউটের কতগুলো তিনটিতেই টেকে?
১০. আপনার শেষ কুড়িটি ফিল সেশনের VWAP-এর বিপরীতে লিপিবদ্ধ করুন ও বেসিস পয়েন্টে গড় স্লিপেজ গণনা করুন। সংখ্যাটি কি ধনাত্মক? সেশনের কোন সময়ে আপনি সাধারণত লেনদেন করেন সে সম্পর্কে তা কী বলে?
১১. অধ্যায় ৩০-এর BEACONTEX টাচগুলো নিন — ১৮,৫০,০০০ / ১৪,২০,০০০ / ৯,৬০,০০০ / ৫,৪০,০০০ — ও $\\chi$ গণনা করুন। তারপর একটি চলমান ডিএসই নামে অন্তত চারটি টাচসহ একটি লেভেল খুঁজে প্রতিটিতে ভলিউম লিপিবদ্ধ করুন ও তার $\\chi$ গণনা করুন। টাচের সংখ্যা না অনুপাত — কোনটি বেশি কাজের নির্দেশ দেয়?
১২. আপনি সত্যিই ধরে আছেন এমন তিনটি নামের জন্য B37 ও B38 গণনা করুন। এদের কতগুলোতে আপনার বর্তমান পজিশন শিটের ফেরত দেওয়া সীমার চেয়ে বড়?`,
    },

    summary: {
      en: `- **Volume is the only genuinely independent input in Part III.** Every indicator in Chapters 34–39 is a function of the close series alone, so their agreement is one number differenced several ways. **Only volume — and on the DSE, taka turnover — has independent access to the world.**
- **There is no buying volume.** All 36,00,000 of DELTASPINN's Day 4 shares were bought *and* sold. Volume measures the size of the disagreement, not its direction. **Direction comes from price; volume tells you how much conviction was transacted.**
- **Relative volume is only as good as its denominator, and the denominator is an opinion.** DELTASPINN's headline 2.40× on Day 4 becomes **0.87×** once a single 24,00,000-share block is stripped and ADV falls from 15,00,000 to 13,80,000. Compute $\\kappa = \\overline{ADV}/\\tilde{V}$ and distrust the mean above 1.3.
- **Confirmation is three conjuncts, not a score:** relative volume $\\ge 1.5$, relative turnover $\\ge 1.5$, and the session not circuit-locked. **A locked session reports volume that is an artefact of the halt, not of agreement**, because the resting queue behind the lock never printed.
- **OBV assigns 100% of the day to the sign of the close, and that crudeness is the whole point of reading it as divergence only.** DELTASPINN closed Day 5 at a new high of 50.80 intraday while OBV returned to 30,00,000 — **exactly its Day 2 value.** The level is an artefact of the start date; the divergence is real.
- **The same session is 100% distribution to OBV, 60% to A/D, and 100% accumulation to MFI.** All three are built from two published series and disagree because each smuggles in a different definition of "up day" — sign of the close, position in the range, or direction of the typical price. **Counting agreement among them is a vote among definitions, not evidence.**
- **MFI at 85.51 hangs its entire denominator on a one-paisa decline** in typical price from 48.30 to 48.20. Move Day 3's high by 30 paisa and B14 returns "NO DOWN PERIODS" and MFI prints **100.00**. Fourteen periods is the practical minimum on the DSE.
- **VWAP is a benchmark, not a signal.** The five-day VWAP is 48.9206 and the close is 0.6794 above it — a 1.39% execution premium. That grades your fill; it does not forecast tomorrow. **"Above VWAP, therefore sell" is the same category error as "buying volume."**
- **Turnover and share count tell different stories, and $RT/RV = C/\\overline{C}$ says exactly how they diverge.** A stock that has doubled shows relative volume in shares falling by half on identical money flow. **Screen and size on turnover; use share count only for float arithmetic.**
- **Run the float plausibility test before any indicator.** DELTASPINN's peak session moved 2.105% of a 17,10,00,000 free float — **NORMAL**. Above 25% the reading is not enthusiasm but recirculation, and no indicator computed on that data means anything.
- **The liquidity screen sizes the position before you have an opinion:** BDT 7.20 crore average turnover clears the BDT 1 crore floor, a 10% cap gives BDT 72,00,000, and at 49.60 that is **1,45,161 shares.** Liquidity determines whether you can leave.
- **Chapter 30 asserted that a level is positioned inventory and volume is the evidence; Chapter 40 is where that claim is discharged.** BEACONTEX's $\\chi = 5{,}40{,}000/18{,}50{,}000 = 0.292$ overruled a composite of 70.50 to WEAKENING, and it is legitimate for exactly one reason: **the touch count is a function of price, and the touch volumes are not.**`,
      bn: `- **তৃতীয় খণ্ডে ভলিউমই একমাত্র প্রকৃত স্বাধীন উপাদান।** অধ্যায় ৩৪–৩৯-এর প্রতিটি নির্দেশক কেবল ক্লোজ সিরিজের ফাংশন, তাই তাদের ঐকমত্য একটি সংখ্যাকে কয়েক উপায়ে পার্থক্য করা। **কেবল ভলিউম — আর ডিএসই-তে টাকার টার্নওভার — জগতে স্বাধীন প্রবেশাধিকার রাখে।**
- **ক্রয় ভলিউম বলে কিছু নেই।** DELTASPINN-এর চতুর্থ দিনের পুরো ৩৬,০০,০০০ শেয়ার কেনা *এবং* বেচা হয়েছে। ভলিউম মতানৈক্যের আকার মাপে, তার দিক নয়। **দিক আসে দাম থেকে; ভলিউম বলে কতটা প্রত্যয় লেনদেন হয়েছে।**
- **আপেক্ষিক ভলিউম তার হরের মতোই ভালো, আর হরটি একটি মতামত।** একটি ২৪,০০,০০০-শেয়ারের ব্লক সরিয়ে ADV ১৫,০০,০০০ থেকে ১৩,৮০,০০০ হলেই DELTASPINN-এর চতুর্থ দিনের শিরোনাম ২.৪০× হয়ে যায় **০.৮৭×**। $\\kappa = \\overline{ADV}/\\tilde{V}$ গণনা করুন আর ১.৩-এর ওপরে গড়কে অবিশ্বাস করুন।
- **নিশ্চিতকরণ তিনটি শর্ত, কোনো স্কোর নয়:** আপেক্ষিক ভলিউম $\\ge 1.5$, আপেক্ষিক টার্নওভার $\\ge 1.5$, আর সেশনটি সার্কিট-লক নয়। **লক হওয়া সেশন যে ভলিউম জানায় তা হল্টের কৃত্রিম ফল, ঐকমত্যের নয়**, কারণ লকের পেছনে জমা সারিটি কখনো ছাপা হয়নি।
- **OBV দিনের ১০০% ক্লোজের চিহ্নে বরাদ্দ করে, আর এই স্থূলতাই একে কেবল ডাইভারজেন্স হিসেবে পড়ার পুরো কারণ।** DELTASPINN পঞ্চম দিনে ইন্ট্রাডে ৫০.৮০-র নতুন হাই ছেপেছে অথচ OBV ফিরে গেছে ৩০,০০,০০০-এ — **ঠিক তার দ্বিতীয় দিনের মান।** স্তরটি শুরুর তারিখের কৃত্রিম ফল; ডাইভারজেন্সটি বাস্তব।
- **একই সেশন OBV-র কাছে ১০০% বণ্টন, A/D-র কাছে ৬০%, আর MFI-এর কাছে ১০০% সঞ্চয়ন।** তিনটিই দুটি প্রকাশিত সিরিজ থেকে গড়া আর দ্বিমত করে কারণ প্রত্যেকে "উর্ধ্ব দিনের" ভিন্ন সংজ্ঞা লুকিয়ে আনে — ক্লোজের চিহ্ন, পরিসরে অবস্থান, বা টিপিক্যাল প্রাইসের দিক। **এদের মধ্যে ঐকমত্য গোনা সংজ্ঞাদের মধ্যে ভোট, প্রমাণ নয়।**
- **৮৫.৫১-এ MFI তার পুরো হর ঝুলিয়ে রাখে** টিপিক্যাল প্রাইসে ৪৮.৩০ থেকে ৪৮.২০-তে এক পয়সার পতনে। তৃতীয় দিনের হাই ৩০ পয়সা সরান আর B14 ফেরত দেয় "NO DOWN PERIODS" ও MFI ছাপে **১০০.০০**। ডিএসই-তে চৌদ্দ পর্বই ব্যবহারিক ন্যূনতম।
- **VWAP একটি মানদণ্ড, সংকেত নয়।** পাঁচ-দিনের VWAP ৪৮.৯২০৬ আর ক্লোজ তার ০.৬৭৯৪ ওপরে — একটি ১.৩৯% নির্বাহ প্রিমিয়াম। তা আপনার ফিলকে নম্বর দেয়; আগামীকালের পূর্বাভাস দেয় না। **"VWAP-এর ওপরে, তাই বিক্রি" হলো "ক্রয় ভলিউম"-এর মতোই শ্রেণিগত ভুল।**
- **টার্নওভার ও শেয়ার সংখ্যা ভিন্ন গল্প বলে, আর $RT/RV = C/\\overline{C}$ ঠিক কীভাবে তারা আলাদা হয় তা বলে দেয়।** দ্বিগুণ হওয়া শেয়ার অভিন্ন টাকা-প্রবাহে শেয়ারের হিসাবে অর্ধেক আপেক্ষিক ভলিউম দেখায়। **টার্নওভারে স্ক্রিন করুন ও আকার নিন; শেয়ার সংখ্যা কেবল ফ্লোটের পাটিগণিতে।**
- **যেকোনো নির্দেশকের আগে ফ্লোট যৌক্তিকতা পরীক্ষা চালান।** DELTASPINN-এর সর্বোচ্চ সেশন ১৭,১০,০০,০০০ ফ্রি ফ্লোটের ২.১০৫% সরিয়েছে — **NORMAL**। ২৫%-এর ওপরে পাঠটি উৎসাহ নয়, পুনঃসঞ্চালন, আর ঐ উপাত্তে গণিত কোনো নির্দেশকের কোনো অর্থ নেই।
- **লিকুইডিটি স্ক্রিন আপনার মতামত তৈরি হওয়ার আগেই পজিশনের আকার ঠিক করে:** ৭.২০ কোটি টাকার গড় টার্নওভার ১ কোটি টাকার মেঝে পার করে, ১০% সীমা দেয় ৭২,০০,০০০ টাকা, আর ৪৯.৬০-এ তা **১,৪৫,১৬১ শেয়ার।** আপনি বেরোতে পারবেন কি না তা লিকুইডিটি ঠিক করে।
- **অধ্যায় ৩০ দাবি করেছিল লেভেল হলো অবস্থানরত ইনভেন্টরি আর ভলিউমই প্রমাণ; অধ্যায় ৪০-এই সেই দাবি পরিশোধ হয়।** BEACONTEX-এর $\\chi = 5{,}40{,}000/18{,}50{,}000 = 0.292$ ৭০.৫০ কম্পোজিটকে WEAKENING-এ অগ্রাহ্য করেছিল, আর তা বৈধ ঠিক একটি কারণে: **টাচের সংখ্যা দামের ফাংশন, আর টাচের ভলিউম নয়।**`,
    },
  },

  interview: [
    {
      q: {
        en: 'Why do you say volume is the only genuine confirmation available in technical analysis?',
        bn: 'আপনি কেন বলেন কারিগরি বিশ্লেষণে ভলিউমই একমাত্র প্রকৃত নিশ্চিতকরণ?',
      },
      a: {
        en: 'Because everything else in the toolkit is a transformation of one series, and a transformation of a variable is not evidence about the variable. A twenty-day moving average is a weighted sum of the last twenty closes. RSI is a ratio of averaged up-closes to averaged down-closes. MACD is a difference of two averages of closes. Bollinger Bands are a mean and a standard deviation of closes. If you handed a statistician the price series alone, they could reconstruct every one of those exactly without asking for a single additional number, which is the definition of adding no information. So when two of them agree, all you have learned is that the same series has been differenced twice in two similar ways — you have not learned anything about the world. Volume is different in kind. It is recorded alongside the price, not derived from it, and when the exchange publishes a session the close and the volume are two independent facts. That is why a breakout on two or three times average volume is genuinely confirmed and a breakout with RSI above fifty is not confirmed at all. On our market I would push it one step further and say the honest confirming quantity is taka turnover rather than share count, because a hundred thousand shares of a ten-taka name and a hundred thousand shares of a five-hundred-taka name are not the same event. And I would attach one caution to all of it: a session that locked at its circuit band reports a volume figure that is an artefact of the halt rather than a measure of agreement, because the resting queue behind the lock never printed, so that particular number cannot confirm anything.',
        bn: 'কারণ হাতিয়ার-সম্ভারের বাকি সবকিছুই একটিমাত্র সিরিজের রূপান্তর, আর কোনো চলকের রূপান্তর ঐ চলক সম্পর্কে প্রমাণ নয়। কুড়ি-দিনের মুভিং অ্যাভারেজ শেষ কুড়িটি ক্লোজের ভারিত যোগফল। RSI গড়কৃত উর্ধ্ব-ক্লোজ ও গড়কৃত নিম্ন-ক্লোজের অনুপাত। MACD দুটি ক্লোজ-গড়ের পার্থক্য। বলিঞ্জার ব্যান্ড ক্লোজের গড় ও পরিমিত ব্যবধান। একজন পরিসংখ্যানবিদকে কেবল দামের সিরিজটি দিলে তিনি এদের প্রত্যেকটি হুবহু পুনর্গঠন করতে পারবেন একটিও অতিরিক্ত সংখ্যা না চেয়ে, আর এটিই তথ্য যোগ না করার সংজ্ঞা। তাই এদের দুটি একমত হলে আপনি কেবল এটুকুই জানলেন যে একই সিরিজকে দুটি সদৃশ উপায়ে দুবার পার্থক্য করা হয়েছে — জগৎ সম্পর্কে কিছুই জানেননি। ভলিউম প্রকৃতিগতভাবেই ভিন্ন। এটি দাম থেকে উদ্ভূত নয়, দামের পাশাপাশি লিপিবদ্ধ, আর এক্সচেঞ্জ যখন একটি সেশন প্রকাশ করে তখন ক্লোজ ও ভলিউম দুটি স্বাধীন তথ্য। সেজন্যই গড়ের দুই বা তিন গুণ ভলিউমে একটি ব্রেকআউট সত্যিই নিশ্চিত, আর RSI পঞ্চাশের ওপরে থাকা ব্রেকআউট মোটেই নিশ্চিত নয়। আমাদের বাজারে আমি আরও এক ধাপ এগিয়ে বলব সৎ নিশ্চিতকারী রাশিটি শেয়ার সংখ্যা নয়, টাকার টার্নওভার, কারণ দশ টাকার নামের এক লক্ষ শেয়ার আর পাঁচশো টাকার নামের এক লক্ষ শেয়ার একই ঘটনা নয়। আর সবকিছুর সঙ্গে একটি সতর্কতা জুড়ব: যে সেশন তার সার্কিট ব্যান্ডে লক করেছে তার জানানো ভলিউম ঐকমত্যের পরিমাপ নয়, হল্টের কৃত্রিম ফল, কারণ লকের পেছনে জমা সারিটি কখনো ছাপা হয়নি, তাই ঐ নির্দিষ্ট সংখ্যাটি কিছুই নিশ্চিত করতে পারে না।',
      },
    },
    {
      q: {
        en: 'A junior analyst tells you today had heavy buying volume. What do you say?',
        bn: 'একজন জুনিয়র বিশ্লেষক আপনাকে বলেন আজ ভারী ক্রয় ভলিউম হয়েছে। আপনি কী বলবেন?',
      },
      a: {
        en: 'I would stop the conversation there, gently, because the phrase is not a loose simplification but a category error, and it corrupts everything downstream of it. Every share that trades has a buyer and a seller. In the worked example, the heaviest session transferred thirty-six lakh shares, which means thirty-six lakh shares were bought and thirty-six lakh shares were sold — the two numbers are the same number, seen from two sides of one handshake. Asking whether there was more buying or more selling is like asking which end of a completed handshake was stronger. What the figure actually measures is the size of the disagreement: a share trades only when one participant values it below the price and another values it above, so a large number means a large quantity of stock changed hands between people holding opposing views at that price. It is direction-agnostic by construction. Direction comes from the price, and the volume tells you how much conviction was transacted. The reason I care so much about the phrasing is what it leads to in practice. Someone who believes in buying volume will look at a heavy down day and call it accumulation, and will read a low-volume drift upward as strength because the tape is green. The correct readings are the opposite in both cases. And on the DSE the error compounds, because the person who thinks volume has a direction will also assume a circuit-locked session with heavy volume proves demand, when in fact it proves only that the exchange stopped the move before the queue behind it could print.',
        bn: 'আমি ওখানেই কথাটি থামাব, নরমভাবে, কারণ বাক্যাংশটি শিথিল সরলীকরণ নয়, একটি শ্রেণিগত ভুল, আর তা এর পরবর্তী সবকিছু দূষিত করে। যে প্রতিটি শেয়ার লেনদেন হয় তার একজন ক্রেতা ও একজন বিক্রেতা আছে। উদাহরণে ভারীতম সেশনটি ছত্রিশ লক্ষ শেয়ার হস্তান্তর করেছে, অর্থাৎ ছত্রিশ লক্ষ শেয়ার কেনা হয়েছে এবং ছত্রিশ লক্ষ শেয়ার বিক্রি হয়েছে — দুটি সংখ্যা একই সংখ্যা, একটি হ্যান্ডশেকের দুই দিক থেকে দেখা। কেনা বেশি না বেচা বেশি জিজ্ঞেস করা আর সম্পন্ন হ্যান্ডশেকের কোন প্রান্তটি বেশি শক্ত ছিল জিজ্ঞেস করা একই কথা। সংখ্যাটি আসলে মাপে মতানৈক্যের আকার: একটি শেয়ার তখনই লেনদেন হয় যখন একজন একে দামের নিচে মূল্যায়ন করেন আর অন্যজন ওপরে, তাই বড় সংখ্যা মানে ঐ দামে বিপরীত মত পোষণকারীদের মধ্যে বড় পরিমাণ শেয়ার হাতবদল হয়েছে। এটি গঠনগতভাবেই দিক-নিরপেক্ষ। দিক আসে দাম থেকে, আর ভলিউম বলে কতটা প্রত্যয় লেনদেন হয়েছে। ভাষাটি নিয়ে আমি এত গ্রাহ্য করি কারণ ব্যবহারিকভাবে তা কোথায় নিয়ে যায়। যিনি ক্রয় ভলিউমে বিশ্বাস করেন তিনি একটি ভারী নিম্ন দিনকে সঞ্চয়ন বলবেন, আর কম-ভলিউমে উর্ধ্বমুখী ভেসে যাওয়াকে শক্তি পড়বেন কারণ টেপ সবুজ। দুটি ক্ষেত্রেই সঠিক পাঠ উল্টো। আর ডিএসই-তে ভুলটি চক্রবৃদ্ধি হয়, কারণ যিনি ভাবেন ভলিউমের দিক আছে তিনি এটাও ধরে নেবেন যে ভারী ভলিউমসহ একটি সার্কিট-লক সেশন চাহিদা প্রমাণ করে, অথচ তা কেবল এটুকুই প্রমাণ করে যে পেছনের সারিটি ছাপার আগেই এক্সচেঞ্জ চলাচল থামিয়েছে।',
      },
    },
    {
      q: {
        en: 'You compute OBV, the A/D line and MFI on the same session and they disagree. Which one is broken?',
        bn: 'আপনি একই সেশনে OBV, A/D লাইন ও MFI গণনা করেন আর তারা দ্বিমত করে। কোনটি বিকল?',
      },
      a: {
        en: 'None of them, and that is the uncomfortable answer. In my worked example the last session closed at forty-nine sixty after printing the highest high of the whole move at fifty eighty, on twenty-one lakh shares. On-balance volume assigns the entire day to the sign of the close, and the close was down forty paisa on the previous close of fifty, so it subtracts all twenty-one lakh — one hundred percent distribution. The accumulation-distribution line weights by where the close sat inside the range, and the close location value was minus zero point six, so it subtracts twelve lakh sixty thousand — sixty percent distribution. The money flow index switches on the typical price rather than the close, and that day\'s typical price of forty-nine point nine exceeded the previous day\'s forty-nine point six, so the whole ten point four seven nine crore of raw money flow is filed as positive — one hundred percent accumulation. Three indicators, one session, two published series, and no agreement whatsoever. They disagree because each one smuggles in a different definition of what the day\'s direction means, and none of those definitions is the thing you actually want, which is the trade-by-trade record of who initiated. That record is simply not in the published daily bar. So the practical instruction I give is this: never run all three and count how many agree, because your answer is then decided by which definition happens to be in the majority rather than by anything the market did. Choose the definition that matches the question. For whether inventory moved to holders who intend to keep it, close-location weighting is the least bad. For whether money showed up, money flow. For divergence against price, on-balance volume, and only as a divergence, never as a level, because its absolute value is an artefact of where you started the series.',
        bn: 'কোনোটিই নয়, আর এটিই অস্বস্তিকর উত্তর। আমার উদাহরণে শেষ সেশনটি পুরো চলনের সর্বোচ্চ হাই পঞ্চাশ আশি ছেপে একুশ লক্ষ শেয়ারে ঊনপঞ্চাশ ষাটে বন্ধ হয়েছে। অন-ব্যালান্স ভলিউম পুরো দিনটি ক্লোজের চিহ্নে বরাদ্দ করে, আর ক্লোজ আগের পঞ্চাশের ক্লোজ থেকে চল্লিশ পয়সা নিচে ছিল, তাই এটি পুরো একুশ লক্ষ বিয়োগ করে — একশো শতাংশ বণ্টন। অ্যাকুমুলেশন-ডিস্ট্রিবিউশন লাইন পরিসরের ভেতরে ক্লোজ কোথায় বসল তা দিয়ে ভারিত করে, আর ক্লোজ লোকেশন ভ্যালু ছিল ঋণাত্মক শূন্য দশমিক ছয়, তাই এটি বারো লক্ষ ষাট হাজার বিয়োগ করে — ষাট শতাংশ বণ্টন। মানি ফ্লো ইনডেক্স ক্লোজ নয়, টিপিক্যাল প্রাইসে চিহ্ন নেয়, আর ঐ দিনের টিপিক্যাল প্রাইস ঊনপঞ্চাশ দশমিক নয় আগের দিনের ঊনপঞ্চাশ দশমিক ছয় ছাড়িয়ে গেছে, তাই দশ দশমিক চার সাত নয় কোটির পুরো কাঁচা মানি ফ্লো ধনাত্মক হিসেবে জমা — একশো শতাংশ সঞ্চয়ন। তিনটি নির্দেশক, একটি সেশন, দুটি প্রকাশিত সিরিজ, আর কোনো ঐকমত্যই নেই। তারা দ্বিমত করে কারণ প্রত্যেকে দিনের দিক মানে কী তার ভিন্ন সংজ্ঞা লুকিয়ে আনে, আর ঐ সংজ্ঞাগুলোর কোনোটিই আপনি যা চান তা নয়, আর আপনি চান প্রতিটি লেনদেনে কে উদ্যোগ নিয়েছিলেন তার নথি। ঐ নথি প্রকাশিত দৈনিক বারে নেই-ই। তাই আমার ব্যবহারিক নির্দেশ হলো: তিনটিই চালিয়ে কতগুলো একমত তা কখনো গুনবেন না, কারণ তখন আপনার উত্তর ঠিক করবে কোন সংজ্ঞাটি সংখ্যাগরিষ্ঠ, বাজার যা করেছে তা নয়। প্রশ্নের সঙ্গে মেলে এমন সংজ্ঞাটি বাছুন। ইনভেন্টরি এমন ধারকদের কাছে গেছে কি না যাঁরা রাখতে চান, তার জন্য ক্লোজ-অবস্থান ভার সবচেয়ে কম খারাপ। টাকা হাজির হয়েছে কি না, তার জন্য মানি ফ্লো। দামের বিপরীতে ডাইভারজেন্সের জন্য অন-ব্যালান্স ভলিউম, আর কেবল ডাইভারজেন্স হিসেবে, কখনো স্তর হিসেবে নয়, কারণ এর পরম মান আপনি সিরিজটি কোথায় শুরু করেছেন তার কৃত্রিম ফল।',
      },
    },
    {
      q: {
        en: 'You report that today traded at 2.4 times average volume. Why should I not trust that number?',
        bn: 'আপনি জানালেন আজ গড়ের ২.৪ গুণ ভলিউমে লেনদেন হয়েছে। আমি কেন ঐ সংখ্যায় ভরসা করব না?',
      },
      a: {
        en: 'Because the numerator is a fact and the denominator is an opinion, and on our market the denominator is one of the most fragile quantities in the whole toolkit. That two point four came from thirty-six lakh shares over an average daily volume of fifteen lakh, and the average was a simple mean of twenty sessions. A mean over twenty sessions is a fair summary only if those twenty sessions were drawn from one regime, and here they frequently are not. A single negotiated block between two institutions, a record date, a corporate action, or one unusually active foreign account can dominate the window. Let me price it rather than assert it. Suppose twenty-four lakh of that thirty-six lakh session was in fact one negotiated block. Nothing on the screen distinguishes it. The genuine screen volume for that day was twelve lakh, not thirty-six, and the twenty-day average net of the block falls from fifteen lakh to thirteen lakh eighty thousand, because one block inside a twenty-day mean adds one lakh twenty thousand to the average for twenty consecutive sessions. Recompute and the headline two point four becomes zero point eight seven — a below-average session. The climax day was not a climax at all. So my practice is to compute the median of the last twenty sessions alongside the mean and carry the ratio of the two. When that ratio exceeds about one point three, the mean is being driven by a handful of tickets, and I report relative volume against the median and say in writing that I have done so. I would also exclude circuit-locked sessions and any floor-price window before the average is computed at all, because both print volume figures that describe a rule rather than a market.',
        bn: 'কারণ লবটি একটি তথ্য আর হরটি একটি মতামত, আর আমাদের বাজারে হরটি পুরো হাতিয়ার-সম্ভারের সবচেয়ে ভঙ্গুর রাশিগুলোর একটি। ঐ দুই দশমিক চার এসেছে পনেরো লক্ষ গড় দৈনিক ভলিউমের ওপর ছত্রিশ লক্ষ শেয়ার থেকে, আর গড়টি ছিল কুড়ি সেশনের সরল গড়। কুড়ি সেশনের গড় ন্যায্য সারসংক্ষেপ কেবল তখনই যখন ঐ কুড়িটি সেশন একটি শাসনব্যবস্থা থেকে নেওয়া, আর এখানে প্রায়ই তা নয়। দুটি প্রতিষ্ঠানের মধ্যে একটি আলোচিত ব্লক, একটি রেকর্ড ডেট, একটি কর্পোরেট অ্যাকশন, বা অস্বাভাবিকভাবে সক্রিয় একটি বিদেশি হিসাব জানালাটিকে কর্তৃত্ব করতে পারে। দাবি না করে হিসাব করে দেখাই। ধরুন ঐ ছত্রিশ লক্ষের সেশনের চব্বিশ লক্ষ আসলে ছিল একটি আলোচিত ব্লক। পর্দায় কিছুই একে আলাদা করে না। ঐ দিনের প্রকৃত পর্দার ভলিউম ছিল বারো লক্ষ, ছত্রিশ নয়, আর ব্লক বাদ দিয়ে কুড়ি-দিনের গড় পনেরো লক্ষ থেকে নেমে হয় তেরো লক্ষ আশি হাজার, কারণ কুড়ি-দিনের গড়ে একটি ব্লক টানা কুড়ি সেশনের জন্য গড়ে এক লক্ষ কুড়ি হাজার যোগ করে। পুনর্গণনা করলে শিরোনামের দুই দশমিক চার হয়ে যায় শূন্য দশমিক আট সাত — একটি গড়ের-নিচের সেশন। ক্লাইম্যাক্স দিনটি মোটেই ক্লাইম্যাক্স ছিল না। তাই আমার চর্চা হলো গড়ের পাশে শেষ কুড়ি সেশনের মধ্যক গণনা করা ও দুটির অনুপাত বহন করা। ঐ অনুপাত প্রায় এক দশমিক তিন ছাড়ালে গড়টিকে গুটিকয় টিকিট চালাচ্ছে, আর আমি মধ্যকের বিপরীতে আপেক্ষিক ভলিউম জানাই ও লিখিতভাবে বলি যে তা করেছি। আমি গড় গণনার আগেই সার্কিট-লক সেশন ও যেকোনো ফ্লোর-প্রাইসের জানালাও বাদ দেব, কারণ দুটিই এমন ভলিউম ছাপে যা বাজার নয়, একটি বিধি বর্ণনা করে।',
      },
    },
    {
      q: {
        en: 'The stock is trading above its VWAP. Is that a sell signal?',
        bn: 'শেয়ারটি তার VWAP-এর ওপরে লেনদেন হচ্ছে। এটি কি বিক্রয় সংকেত?',
      },
      a: {
        en: 'No, and I think treating it as one is the same species of error as talking about buying volume. Look at what the quantity actually is. The numerator of the volume-weighted average price is the total taka that changed hands and the denominator is the total shares, so the ratio is the price the average transacted share actually paid. No other single number on the tape has that property — a close is one trade, and a mean of closes is a mean of one trade per day. That is what makes it the honest benchmark for execution quality. In the worked example the five-day volume-weighted average price is forty-eight point nine two and the last close is forty-nine point six, sitting sixty-eight paisa above it. The correct reading of that is: if I buy here I am paying one point three nine percent more than the money that built this move over the past week. That is a fact about my execution and about nothing else. It does not tell me the next print is lower. In a genuine advance, price sits above the volume-weighted average for days at a time and the average follows it up, which is precisely what a strong trend looks like. So the right use is a scorecard. Log every fill against the session benchmark, compute mean slippage in basis points across the last hundred trades, and you will learn something true about when in the session you tend to trade and how much your impatience costs. The wrong use is as a forecast, because you have taken a measure of what was paid and read it as a prediction of what will be paid, and those are different quantities. I would add that on the DSE, building it from daily bars using the typical price is a coarse approximation, so I would not be precious about the last paisa of it.',
        bn: 'না, আর একে সংকেত গণ্য করা ক্রয় ভলিউম নিয়ে কথা বলার মতোই একই প্রজাতির ভুল বলে আমি মনে করি। রাশিটি আসলে কী তা দেখুন। ভলিউম-ভারিত গড় দামের লব হলো হাতবদল হওয়া মোট টাকা আর হর মোট শেয়ার, তাই অনুপাতটি হলো গড় সম্পন্ন শেয়ারটি আসলে যে দাম দিয়েছে। টেপের আর কোনো একক সংখ্যার এই ধর্ম নেই — ক্লোজ একটিমাত্র লেনদেন, আর ক্লোজের গড় দিনে-একটি-লেনদেনের গড়। এটিই একে নির্বাহ মানের সৎ মানদণ্ড বানায়। উদাহরণে পাঁচ-দিনের ভলিউম-ভারিত গড় দাম আটচল্লিশ দশমিক নয় দুই আর শেষ ক্লোজ ঊনপঞ্চাশ দশমিক ছয়, তার আটষট্টি পয়সা ওপরে বসে। এর সঠিক পাঠ হলো: এখানে কিনলে আমি গত সপ্তাহে এই চলনটি গড়া টাকার চেয়ে এক দশমিক তিন নয় শতাংশ বেশি দিচ্ছি। এটি আমার নির্বাহ সম্পর্কে একটি তথ্য, আর কিছু সম্পর্কে নয়। এটি বলে না পরের প্রিন্ট নিচে হবে। প্রকৃত উত্থানে দাম দিনের পর দিন ভলিউম-ভারিত গড়ের ওপরে বসে থাকে আর গড়টি তার পিছু পিছু ওঠে, আর শক্তিশালী প্রবণতা ঠিক এমনই দেখায়। তাই সঠিক ব্যবহার একটি নম্বরপত্র। প্রতিটি ফিল সেশনের মানদণ্ডের বিপরীতে লিপিবদ্ধ করুন, শেষ একশো ট্রেডে বেসিস পয়েন্টে গড় স্লিপেজ গণনা করুন, আর আপনি জানবেন সেশনের কোন সময়ে আপনি সাধারণত লেনদেন করেন ও আপনার অধৈর্যের দাম কত। ভুল ব্যবহার হলো পূর্বাভাস হিসেবে, কারণ আপনি কী দেওয়া হয়েছে তার একটি পরিমাপ নিয়ে কী দেওয়া হবে তার ভবিষ্যদ্বাণী হিসেবে পড়ছেন, আর সেগুলো ভিন্ন রাশি। আমি যোগ করব যে ডিএসই-তে দৈনিক বার ও টিপিক্যাল প্রাইস দিয়ে একে গড়া একটি স্থূল আসন্নীকরণ, তাই এর শেষ পয়সাটি নিয়ে আমি বাড়াবাড়ি করব না।',
      },
    },
    {
      q: {
        en: 'Two DSE names both traded one lakh shares today. How do you compare them, and how does that affect what you do next?',
        bn: 'দুটি ডিএসই নামে আজ এক লক্ষ করে শেয়ার লেনদেন হয়েছে। আপনি কীভাবে তুলনা করবেন, আর তা আপনার পরের কাজে কী প্রভাব ফেলবে?',
      },
      a: {
        en: 'I would not compare them on share count at all, because share count measures paper and taka turnover measures money, and money is the scarce quantity. If one trades at ten taka and the other at five hundred, the first moved ten lakh taka and the second moved five crore — a factor of fifty between two figures that look identical on a screen. The relationship is exact: the ratio of relative turnover to relative volume is just the price divided by its own average, so the two measures diverge systematically whenever price trends. A stock that has doubled will show relative volume in shares falling by half even when the same taka flow is arriving every day, and if you screen on share count you will conclude that interest is fading when nothing has changed. So I screen on turnover, and I use share count only for float arithmetic, where shares rather than taka are the right unit — the plausibility test asks what fraction of the free float traded, and that has to be in shares. Then the sizing follows directly from turnover, which is the part people skip. In the worked example the twenty-day average turnover is seven crore twenty lakh taka, which clears the one crore floor from the liquidity chapter, so the name is tradeable. A ten percent participation cap gives a maximum position of seventy-two lakh taka, and at a close of forty-nine sixty that is one lakh forty-five thousand one hundred sixty-one shares. That number was computed before I formed any opinion about the chart, and it does not consult my conviction. The reason I fix size from liquidity rather than from confidence is that liquidity determines whether I can leave, and thin names on this market take your money on the exit, not on the entry.',
        bn: 'আমি এদের শেয়ার সংখ্যায় মোটেই তুলনা করব না, কারণ শেয়ার সংখ্যা কাগজ মাপে আর টাকার টার্নওভার টাকা মাপে, আর দুষ্প্রাপ্য রাশিটি টাকা। একটি দশ টাকায় আর অন্যটি পাঁচশো টাকায় লেনদেন হলে প্রথমটি দশ লক্ষ টাকা সরিয়েছে আর দ্বিতীয়টি পাঁচ কোটি — পর্দায় অভিন্ন দেখানো দুটি সংখ্যার মধ্যে পঞ্চাশ গুণের ফারাক। সম্পর্কটি নিখুঁত: আপেক্ষিক টার্নওভার ও আপেক্ষিক ভলিউমের অনুপাত হলো কেবল দাম ভাগ তার নিজের গড়, তাই দামে প্রবণতা থাকলেই দুটি পরিমাপ নিয়মমাফিক আলাদা হয়। যে শেয়ার দ্বিগুণ হয়েছে তা প্রতিদিন একই টাকা আসা সত্ত্বেও শেয়ারের হিসাবে অর্ধেক আপেক্ষিক ভলিউম দেখাবে, আর আপনি শেয়ার সংখ্যায় স্ক্রিন করলে সিদ্ধান্ত নেবেন আগ্রহ কমছে, অথচ কিছুই বদলায়নি। তাই আমি টার্নওভারে স্ক্রিন করি, আর শেয়ার সংখ্যা কেবল ফ্লোটের পাটিগণিতে ব্যবহার করি, যেখানে টাকা নয় শেয়ারই সঠিক একক — যৌক্তিকতা পরীক্ষা জিজ্ঞেস করে ফ্রি ফ্লোটের কত ভগ্নাংশ লেনদেন হয়েছে, আর তা শেয়ারেই হতে হবে। তারপর আকার সরাসরি টার্নওভার থেকে আসে, আর এই অংশটিই মানুষ এড়িয়ে যান। উদাহরণে কুড়ি-দিনের গড় টার্নওভার সাত কোটি কুড়ি লক্ষ টাকা, যা লিকুইডিটি অধ্যায়ের এক কোটির মেঝে পার করে, তাই নামটি লেনদেনযোগ্য। দশ শতাংশ অংশগ্রহণের সীমা দেয় বাহাত্তর লক্ষ টাকার সর্বোচ্চ পজিশন, আর ঊনপঞ্চাশ ষাটের ক্লোজে তা এক লক্ষ পঁয়তাল্লিশ হাজার একশো একষট্টি শেয়ার। সংখ্যাটি চার্ট সম্পর্কে আমার কোনো মতামত তৈরি হওয়ার আগেই গণিত, আর তা আমার প্রত্যয়ের পরামর্শ নেয় না। আত্মবিশ্বাস নয়, লিকুইডিটি থেকে আকার স্থির করার কারণ হলো আমি বেরোতে পারব কি না তা লিকুইডিটি ঠিক করে, আর এই বাজারে পাতলা নাম আপনার টাকা নেয় প্রবেশে নয়, প্রস্থানে।',
      },
    },
  ],

  quiz: [
    {
      q: {
        en: 'Volume is described in this chapter as the only genuinely independent input in Part III because:',
        bn: 'এই অধ্যায়ে ভলিউমকে তৃতীয় খণ্ডের একমাত্র প্রকৃত স্বাধীন উপাদান বলা হয়েছে কারণ:',
      },
      options: {
        en: [
          'It is more volatile than price',
          'It is recorded alongside price rather than derived from it',
          'It is published by the exchange rather than by brokers',
          'It leads price by two sessions',
        ],
        bn: [
          'এটি দামের চেয়ে বেশি অস্থির',
          'এটি দাম থেকে উদ্ভূত নয়, দামের পাশাপাশি লিপিবদ্ধ',
          'এটি ব্রোকার নয়, এক্সচেঞ্জ প্রকাশ করে',
          'এটি দামকে দুই সেশন আগে চালায়',
        ],
      },
      answer: 1,
    },
    {
      q: {
        en: 'If a DSE session reports 36,00,000 shares traded, the number of shares bought that day was:',
        bn: 'একটি ডিএসই সেশনে ৩৬,০০,০০০ শেয়ার লেনদেন জানানো হলে ঐ দিন কেনা শেয়ারের সংখ্যা:',
      },
      options: {
        en: ['More than 36,00,000', 'Exactly 36,00,000', 'Less than 36,00,000', 'Impossible to determine'],
        bn: ['৩৬,০০,০০০-এর বেশি', 'ঠিক ৩৬,০০,০০০', '৩৬,০০,০০০-এর কম', 'নির্ধারণ করা অসম্ভব'],
      },
      answer: 1,
    },
    {
      q: {
        en: 'DELTASPINN closes Day 5 at 49.60 on 21,00,000 shares after a Day 4 close of 50.00. OBV moves to:',
        bn: 'চতুর্থ দিনে ৫০.০০ ক্লোজের পর DELTASPINN পঞ্চম দিন ২১,০০,০০০ শেয়ারে ৪৯.৬০-এ বন্ধ হয়। OBV যায়:',
      },
      options: {
        en: ['72,00,000', '51,00,000', '30,00,000', '26,50,000'],
        bn: ['৭২,০০,০০০', '৫১,০০,০০০', '৩০,০০,০০০', '২৬,৫০,০০০'],
      },
      answer: 2,
    },
    {
      q: {
        en: 'On DELTASPINN\'s Day 5, MFI classifies the session as positive money flow because:',
        bn: 'DELTASPINN-এর পঞ্চম দিনে MFI সেশনটিকে ধনাত্মক মানি ফ্লো শ্রেণিবদ্ধ করে কারণ:',
      },
      options: {
        en: [
          'The close was above the previous close',
          'The typical price rose from 49.60 to 49.90',
          'Volume exceeded the twenty-day average',
          'The close was above VWAP',
        ],
        bn: [
          'ক্লোজ আগের ক্লোজের ওপরে ছিল',
          'টিপিক্যাল প্রাইস ৪৯.৬০ থেকে ৪৯.৯০ হয়েছে',
          'ভলিউম কুড়ি-দিনের গড় ছাড়িয়েছে',
          'ক্লোজ VWAP-এর ওপরে ছিল',
        ],
      },
      answer: 1,
    },
    {
      q: {
        en: 'The five-day VWAP of 48.9206 with a close of 49.60 tells you:',
        bn: '৪৮.৯২০৬ পাঁচ-দিনের VWAP ও ৪৯.৬০ ক্লোজ আপনাকে বলে:',
      },
      options: {
        en: [
          'Buying here costs 1.39% more than the average transacted share paid',
          'The stock is overbought and should be sold',
          'The trend will reverse within five sessions',
          'Institutions are distributing',
        ],
        bn: [
          'এখানে কেনা গড় সম্পন্ন শেয়ারের দেওয়া দামের চেয়ে ১.৩৯% বেশি',
          'শেয়ারটি অতিক্রীত ও বিক্রি করা উচিত',
          'পাঁচ সেশনের মধ্যে প্রবণতা উল্টে যাবে',
          'প্রতিষ্ঠানগুলো বণ্টন করছে',
        ],
      },
      answer: 0,
    },
    {
      q: {
        en: 'Stripping a single 24,00,000-share block from Day 4 changes ADV from 15,00,000 to 13,80,000 and Day 4\'s relative volume from 2.40× to:',
        bn: 'চতুর্থ দিন থেকে একটি ২৪,০০,০০০-শেয়ারের ব্লক সরালে ADV ১৫,০০,০০০ থেকে ১৩,৮০,০০০ হয় আর চতুর্থ দিনের আপেক্ষিক ভলিউম ২.৪০× থেকে হয়:',
      },
      options: {
        en: ['1.52×', '2.61×', '0.87×', '1.00×'],
        bn: ['১.৫২×', '২.৬১×', '০.৮৭×', '১.০০×'],
      },
      answer: 2,
    },
    {
      q: {
        en: 'Two names each trade 1,00,000 shares, one at BDT 10 and one at BDT 500. The correct screening conclusion is:',
        bn: 'দুটি নামে প্রতিটিতে ১,০০,০০০ শেয়ার লেনদেন হয়, একটি ১০ টাকায় ও একটি ৫০০ টাকায়। সঠিক স্ক্রিনিং সিদ্ধান্ত:',
      },
      options: {
        en: [
          'They are equally liquid',
          'The 10-taka name is more liquid because it is cheaper',
          'Share count is the correct comparison on the DSE',
          'Turnover differs by a factor of 50 and only turnover is comparable',
        ],
        bn: [
          'এরা সমানভাবে তরল',
          '১০ টাকার নামটি সস্তা বলে বেশি তরল',
          'ডিএসই-তে শেয়ার সংখ্যাই সঠিক তুলনা',
          'টার্নওভার ৫০ গুণ আলাদা আর কেবল টার্নওভারই তুলনীয়',
        ],
      },
      answer: 3,
    },
    {
      q: {
        en: 'A DSE session that locked at its circuit limit prints a volume figure that is:',
        bn: 'যে ডিএসই সেশন তার সার্কিট সীমায় লক করেছে তার ছাপা ভলিউম সংখ্যাটি:',
      },
      options: {
        en: [
          'Proof of exceptional demand',
          'An artefact of the halt, since the resting queue never printed',
          'Always zero',
          'Equal to the free float',
        ],
        bn: [
          'ব্যতিক্রমী চাহিদার প্রমাণ',
          'হল্টের কৃত্রিম ফল, কারণ জমা সারিটি কখনো ছাপা হয়নি',
          'সবসময় শূন্য',
          'ফ্রি ফ্লোটের সমান',
        ],
      },
      answer: 1,
    },
    {
      q: {
        en: 'With average turnover of BDT 7.20 crore, a 10% participation cap and a close of 49.60, the maximum position is:',
        bn: '৭.২০ কোটি টাকা গড় টার্নওভার, ১০% অংশগ্রহণ সীমা ও ৪৯.৬০ ক্লোজে সর্বোচ্চ পজিশন:',
      },
      options: {
        en: ['14,51,613 shares', '72,00,000 shares', '1,45,161 shares', '15,00,000 shares'],
        bn: ['১৪,৫১,৬১৩ শেয়ার', '৭২,০০,০০০ শেয়ার', '১,৪৫,১৬১ শেয়ার', '১৫,০০,০০০ শেয়ার'],
      },
      answer: 2,
    },
    {
      q: {
        en: 'Chapter 30\'s exhaustion ratio of 0.292 is legitimate as an override of the composite score because:',
        bn: 'অধ্যায় ৩০-এর ০.২৯২ এক্সহসশন অনুপাত কম্পোজিট স্কোরকে অগ্রাহ্য করার জন্য বৈধ কারণ:',
      },
      options: {
        en: [
          'Touch volumes are not a function of price, while the touch count is',
          'It is a larger number than the composite',
          'It is computed from a longer window',
          'Regulators require it',
        ],
        bn: [
          'টাচের ভলিউম দামের ফাংশন নয়, আর টাচের সংখ্যা তাই',
          'এটি কম্পোজিটের চেয়ে বড় সংখ্যা',
          'এটি দীর্ঘতর জানালা থেকে গণিত',
          'নিয়ন্ত্রক সংস্থা এটি দাবি করে',
        ],
      },
      answer: 0,
    },
  ],
};
