/**
 * Chapter 21 — Discounted Cash Flow (DCF)
 * Part II, Fundamental Analysis. Builds on Ch 1 (index concentration, beta),
 * Ch 12 (cash flow), Ch 19 (ROE), Ch 20 (FCF and the two cover tests).
 */

export default {
  n: 21,
  tools: [],

  excelSheet: {
    filename: 'ch21-dcf-novopharma.xlsx',
    sheetName: 'DCF + Sensitivity',
    cells: [
      { cell: 'A1', v: 'DCF — NOVOPHARMA (DSE PHARMA ARCHETYPE)' },

      { cell: 'A3', v: 'Base-year Revenue (BDT crore)' }, { cell: 'B3', v: 1200 },
      { cell: 'A4', v: 'EBIT Margin' }, { cell: 'B4', v: 0.18 },
      { cell: 'A5', v: 'Tax Rate' }, { cell: 'B5', v: 0.225 },
      { cell: 'A6', v: 'D&A % of Revenue' }, { cell: 'B6', v: 0.04 },
      { cell: 'A7', v: 'Capex % of Revenue' }, { cell: 'B7', v: 0.06 },
      { cell: 'A8', v: 'Incremental NWC % of Delta Revenue' }, { cell: 'B8', v: 0.15 },

      { cell: 'A10', v: '— COST OF CAPITAL —' },
      { cell: 'A11', v: 'Risk-free (10y BGTB)' }, { cell: 'B11', v: 0.115 },
      { cell: 'A12', v: 'Equity Risk Premium' }, { cell: 'B12', v: 0.06 },
      { cell: 'A13', v: 'Beta vs DSEX' }, { cell: 'B13', v: 0.9 },
      { cell: 'A14', v: 'Cost of Equity (CAPM)' }, { cell: 'B14', f: 'B11+B13*B12' },
      { cell: 'A15', v: 'Pre-tax Cost of Debt' }, { cell: 'B15', v: 0.12 },
      { cell: 'A16', v: 'After-tax Cost of Debt' }, { cell: 'B16', f: 'B15*(1-B5)' },
      { cell: 'A17', v: 'Equity Weight E/V' }, { cell: 'B17', v: 0.75 },
      { cell: 'A18', v: 'Debt Weight D/V' }, { cell: 'B18', f: '1-B17' },
      { cell: 'A19', v: 'WACC' }, { cell: 'B19', f: 'B17*B14+B18*B16' },
      { cell: 'A20', v: 'Terminal Growth g' }, { cell: 'B20', v: 0.05 },

      { cell: 'A22', v: 'Year' },
      { cell: 'B22', v: 1 }, { cell: 'C22', v: 2 }, { cell: 'D22', v: 3 },
      { cell: 'E22', v: 4 }, { cell: 'F22', v: 5 },

      { cell: 'A23', v: 'Revenue Growth' },
      { cell: 'B23', v: 0.12 }, { cell: 'C23', v: 0.11 }, { cell: 'D23', v: 0.1 },
      { cell: 'E23', v: 0.09 }, { cell: 'F23', v: 0.08 },

      { cell: 'A24', v: 'Revenue' },
      { cell: 'B24', f: 'B3*(1+B23)' }, { cell: 'C24', f: 'B24*(1+C23)' },
      { cell: 'D24', f: 'C24*(1+D23)' }, { cell: 'E24', f: 'D24*(1+E23)' },
      { cell: 'F24', f: 'E24*(1+F23)' },

      { cell: 'A25', v: 'EBIT' },
      { cell: 'B25', f: 'B24*$B$4' }, { cell: 'C25', f: 'C24*$B$4' },
      { cell: 'D25', f: 'D24*$B$4' }, { cell: 'E25', f: 'E24*$B$4' },
      { cell: 'F25', f: 'F24*$B$4' },

      { cell: 'A26', v: 'NOPAT = EBIT x (1-t)' },
      { cell: 'B26', f: 'B25*(1-$B$5)' }, { cell: 'C26', f: 'C25*(1-$B$5)' },
      { cell: 'D26', f: 'D25*(1-$B$5)' }, { cell: 'E26', f: 'E25*(1-$B$5)' },
      { cell: 'F26', f: 'F25*(1-$B$5)' },

      { cell: 'A27', v: 'add D&A' },
      { cell: 'B27', f: 'B24*$B$6' }, { cell: 'C27', f: 'C24*$B$6' },
      { cell: 'D27', f: 'D24*$B$6' }, { cell: 'E27', f: 'E24*$B$6' },
      { cell: 'F27', f: 'F24*$B$6' },

      { cell: 'A28', v: 'less Capex' },
      { cell: 'B28', f: 'B24*$B$7' }, { cell: 'C28', f: 'C24*$B$7' },
      { cell: 'D28', f: 'D24*$B$7' }, { cell: 'E28', f: 'E24*$B$7' },
      { cell: 'F28', f: 'F24*$B$7' },

      { cell: 'A29', v: 'less Change in NWC' },
      { cell: 'B29', f: '(B24-$B$3)*$B$8' }, { cell: 'C29', f: '(C24-B24)*$B$8' },
      { cell: 'D29', f: '(D24-C24)*$B$8' }, { cell: 'E29', f: '(E24-D24)*$B$8' },
      { cell: 'F29', f: '(F24-E24)*$B$8' },

      { cell: 'A30', v: 'FREE CASH FLOW' },
      { cell: 'B30', f: 'B26+B27-B28-B29' }, { cell: 'C30', f: 'C26+C27-C28-C29' },
      { cell: 'D30', f: 'D26+D27-D28-D29' }, { cell: 'E30', f: 'E26+E27-E28-E29' },
      { cell: 'F30', f: 'F26+F27-F28-F29' },

      { cell: 'A31', v: 'Discount Factor' },
      { cell: 'B31', f: '1/(1+$B$19)^B$22' }, { cell: 'C31', f: '1/(1+$B$19)^C$22' },
      { cell: 'D31', f: '1/(1+$B$19)^D$22' }, { cell: 'E31', f: '1/(1+$B$19)^E$22' },
      { cell: 'F31', f: '1/(1+$B$19)^F$22' },

      { cell: 'A32', v: 'PV of FCF' },
      { cell: 'B32', f: 'B30*B31' }, { cell: 'C32', f: 'C30*C31' },
      { cell: 'D32', f: 'D30*D31' }, { cell: 'E32', f: 'E30*E31' },
      { cell: 'F32', f: 'F30*F31' },

      { cell: 'A34', v: 'Sum PV of Explicit FCF' }, { cell: 'B34', f: 'SUM(B32:F32)' },
      { cell: 'A35', v: 'Terminal Value at Y5 (Gordon)' }, { cell: 'B35', f: 'F30*(1+B20)/(B19-B20)' },
      { cell: 'A36', v: 'PV of Terminal Value' }, { cell: 'B36', f: 'B35/(1+B19)^5' },
      { cell: 'A37', v: 'ENTERPRISE VALUE' }, { cell: 'B37', f: 'B34+B36' },
      { cell: 'A38', v: 'TV as % of EV' }, { cell: 'B38', f: 'B36/B37' },
      { cell: 'A39', v: 'Total Debt' }, { cell: 'B39', v: 320 },
      { cell: 'A40', v: 'Cash & Equivalents' }, { cell: 'B40', v: 95 },
      { cell: 'A41', v: 'Net Debt' }, { cell: 'B41', f: 'B39-B40' },
      { cell: 'A42', v: 'EQUITY VALUE' }, { cell: 'B42', f: 'B37-B41' },
      { cell: 'A43', v: 'Shares Outstanding (crore)' }, { cell: 'B43', v: 45 },
      { cell: 'A44', v: 'VALUE PER SHARE (BDT)' }, { cell: 'B44', f: 'B42/B43' },
      { cell: 'A45', v: 'Market Price (BDT)' }, { cell: 'B45', v: 34 },
      { cell: 'A46', v: 'Upside / (Downside)' }, { cell: 'B46', f: 'B44/B45-1' },

      { cell: 'A48', v: 'SENSITIVITY — VALUE PER SHARE (BDT)' },
      { cell: 'A49', v: 'WACC \\ g' },
      { cell: 'B49', v: 0.03 }, { cell: 'C49', v: 0.04 }, { cell: 'D49', v: 0.05 },
      { cell: 'E49', v: 0.06 }, { cell: 'F49', v: 0.07 },
      { cell: 'A50', v: 0.13 }, { cell: 'A51', v: 0.14 }, { cell: 'A52', v: 0.15 },
      { cell: 'A53', v: 0.16 }, { cell: 'A54', v: 0.17 },

      { cell: 'B50', f: '(NPV($A50,$B$30:$F$30)+$F$30*(1+B$49)/($A50-B$49)/(1+$A50)^5-$B$41)/$B$43' },
      { cell: 'C50', f: '(NPV($A50,$B$30:$F$30)+$F$30*(1+C$49)/($A50-C$49)/(1+$A50)^5-$B$41)/$B$43' },
      { cell: 'D50', f: '(NPV($A50,$B$30:$F$30)+$F$30*(1+D$49)/($A50-D$49)/(1+$A50)^5-$B$41)/$B$43' },
      { cell: 'E50', f: '(NPV($A50,$B$30:$F$30)+$F$30*(1+E$49)/($A50-E$49)/(1+$A50)^5-$B$41)/$B$43' },
      { cell: 'F50', f: '(NPV($A50,$B$30:$F$30)+$F$30*(1+F$49)/($A50-F$49)/(1+$A50)^5-$B$41)/$B$43' },

      { cell: 'B51', f: '(NPV($A51,$B$30:$F$30)+$F$30*(1+B$49)/($A51-B$49)/(1+$A51)^5-$B$41)/$B$43' },
      { cell: 'C51', f: '(NPV($A51,$B$30:$F$30)+$F$30*(1+C$49)/($A51-C$49)/(1+$A51)^5-$B$41)/$B$43' },
      { cell: 'D51', f: '(NPV($A51,$B$30:$F$30)+$F$30*(1+D$49)/($A51-D$49)/(1+$A51)^5-$B$41)/$B$43' },
      { cell: 'E51', f: '(NPV($A51,$B$30:$F$30)+$F$30*(1+E$49)/($A51-E$49)/(1+$A51)^5-$B$41)/$B$43' },
      { cell: 'F51', f: '(NPV($A51,$B$30:$F$30)+$F$30*(1+F$49)/($A51-F$49)/(1+$A51)^5-$B$41)/$B$43' },

      { cell: 'B52', f: '(NPV($A52,$B$30:$F$30)+$F$30*(1+B$49)/($A52-B$49)/(1+$A52)^5-$B$41)/$B$43' },
      { cell: 'C52', f: '(NPV($A52,$B$30:$F$30)+$F$30*(1+C$49)/($A52-C$49)/(1+$A52)^5-$B$41)/$B$43' },
      { cell: 'D52', f: '(NPV($A52,$B$30:$F$30)+$F$30*(1+D$49)/($A52-D$49)/(1+$A52)^5-$B$41)/$B$43' },
      { cell: 'E52', f: '(NPV($A52,$B$30:$F$30)+$F$30*(1+E$49)/($A52-E$49)/(1+$A52)^5-$B$41)/$B$43' },
      { cell: 'F52', f: '(NPV($A52,$B$30:$F$30)+$F$30*(1+F$49)/($A52-F$49)/(1+$A52)^5-$B$41)/$B$43' },

      { cell: 'B53', f: '(NPV($A53,$B$30:$F$30)+$F$30*(1+B$49)/($A53-B$49)/(1+$A53)^5-$B$41)/$B$43' },
      { cell: 'C53', f: '(NPV($A53,$B$30:$F$30)+$F$30*(1+C$49)/($A53-C$49)/(1+$A53)^5-$B$41)/$B$43' },
      { cell: 'D53', f: '(NPV($A53,$B$30:$F$30)+$F$30*(1+D$49)/($A53-D$49)/(1+$A53)^5-$B$41)/$B$43' },
      { cell: 'E53', f: '(NPV($A53,$B$30:$F$30)+$F$30*(1+E$49)/($A53-E$49)/(1+$A53)^5-$B$41)/$B$43' },
      { cell: 'F53', f: '(NPV($A53,$B$30:$F$30)+$F$30*(1+F$49)/($A53-F$49)/(1+$A53)^5-$B$41)/$B$43' },

      { cell: 'B54', f: '(NPV($A54,$B$30:$F$30)+$F$30*(1+B$49)/($A54-B$49)/(1+$A54)^5-$B$41)/$B$43' },
      { cell: 'C54', f: '(NPV($A54,$B$30:$F$30)+$F$30*(1+C$49)/($A54-C$49)/(1+$A54)^5-$B$41)/$B$43' },
      { cell: 'D54', f: '(NPV($A54,$B$30:$F$30)+$F$30*(1+D$49)/($A54-D$49)/(1+$A54)^5-$B$41)/$B$43' },
      { cell: 'E54', f: '(NPV($A54,$B$30:$F$30)+$F$30*(1+E$49)/($A54-E$49)/(1+$A54)^5-$B$41)/$B$43' },
      { cell: 'F54', f: '(NPV($A54,$B$30:$F$30)+$F$30*(1+F$49)/($A54-F$49)/(1+$A54)^5-$B$41)/$B$43' },

      { cell: 'A56', v: 'Lowest Value per Share' }, { cell: 'B56', f: 'MIN(B50:F54)' },
      { cell: 'A57', v: 'Highest Value per Share' }, { cell: 'B57', f: 'MAX(B50:F54)' },
      { cell: 'A58', v: 'Range as a Multiple' }, { cell: 'B58', f: 'B57/B56' },
      { cell: 'A59', v: 'Cells implying BUY (> market)' }, { cell: 'B59', f: 'COUNTIF(B50:F54,">"&B45)' },
      { cell: 'A60', v: 'Cells implying SELL (< market)' }, { cell: 'B60', f: '25-B59' },
    ],
  },

  objectives: {
    en: [
      'Build a five-year free cash flow forecast from revenue, margin, tax, D&A, capex, and working capital assumptions.',
      'Estimate WACC from CAPM cost of equity and after-tax cost of debt, and name which Bangladeshi input for each is genuinely unknowable.',
      'Compute a Gordon terminal value, discount it, and express it as a percentage of enterprise value.',
      'Bridge enterprise value to equity value to value per share, and reconcile it against the market price.',
      'Demonstrate with a WACC × g grid that the output range spans both a buy and a sell, and state what that means about the method.',
    ],
    bn: [
      'রাজস্ব, মার্জিন, কর, D&A, মূলধনী ব্যয় ও চলতি মূলধনের অনুমান থেকে পাঁচ বছরের মুক্ত নগদ প্রবাহের পূর্বাভাস তৈরি করা।',
      'CAPM ভিত্তিক ইক্যুইটির খরচ ও কর-পরবর্তী ঋণের খরচ থেকে WACC নির্ণয় করা, এবং প্রতিটির কোন বাংলাদেশি ইনপুট প্রকৃতপক্ষে অজ্ঞেয় তা চিহ্নিত করা।',
      'Gordon পদ্ধতিতে প্রান্তিক মূল্য (TV) গণনা করা, বাট্টা দেওয়া, এবং তাকে এন্টারপ্রাইজ মূল্যের শতাংশ হিসেবে প্রকাশ করা।',
      'EV থেকে ইক্যুইটি মূল্যে ও শেয়ারপ্রতি মূল্যে সেতুবন্ধ করা এবং বাজারমূল্যের সঙ্গে মেলানো।',
      'একটি WACC × g গ্রিড দিয়ে দেখানো যে ফলাফলের পরিসর একই সঙ্গে "কিনুন" ও "বেচুন" উভয়কে ধারণ করে, এবং এটি পদ্ধতিটি সম্পর্কে কী বলে তা বলা।',
    ],
  },

  blocks: {
    theory: {
      en: `A share is a claim on the cash a business will produce for the rest of its life. Discounted cash flow says so out loud: **the value of a company is the present value of the free cash flow it will generate, discounted at a rate that reflects the risk of not getting it.**

That sentence is correct. It is also close to useless on its own, because it contains two quantities nobody knows — future cash flow and the correct discount rate — and the arithmetic connecting them is unforgiving. **This chapter builds a complete DCF and then shows you, numerically, how little the answer weighs.**

### The structure

$$EV = \\sum_{t=1}^{n} \\frac{FCF_t}{(1+WACC)^t} + \\frac{TV_n}{(1+WACC)^n}$$

Three moving parts:

1. **An explicit forecast period** — usually five years, because five years is roughly the limit of anyone's willingness to defend a number, not because year six is unknowable in some deeper way.
2. **A terminal value** — everything after the explicit period, compressed into a single number by assuming the business grows at a constant rate forever.
3. **A discount rate** — the weighted average cost of capital.

### Free cash flow is not the cash flow statement's bottom line

Chapter 20 used $FCF = \\text{CFO} - \\text{Capex}$, which is the right test for a dividend. For a valuation you need **unlevered** free cash flow — the cash available to *all* capital providers, before any payment to lenders, because the discount rate already prices debt in:

$$FCF = EBIT(1-t) + D\\&A - \\text{Capex} - \\Delta NWC$$

Interest does not appear. If you subtract interest from the cash flow *and* use WACC as the discount rate, you have deducted the cost of debt twice. This is the single most common structural error in a first DCF, and it produces a valuation that is quietly, permanently too low.

**Note what the formula demands.** Revenue growth for five years. An operating margin for five years. A tax rate. Depreciation, capital expenditure, and the working capital a growing business swallows. That is six forecasts, each for five periods — thirty numbers, and the model treats all thirty as facts.

### WACC, and why Bangladesh makes it harder

$$WACC = \\frac{E}{V}k_e + \\frac{D}{V}k_d(1-t)$$

The debt side is nearly observable: read the interest expense over average borrowings in the notes, or take the bank's disclosed lending rate. **The equity side is where the model stops being empirical.**

CAPM:

$$k_e = r_f + \\beta \\times ERP$$

Three inputs, and in Bangladesh all three are contested.

**The risk-free rate.** Which one? The 91-day T-bill, the 5-year BGTB, or the 10-year BGTB? They have differed by several hundred basis points at various points, and the government securities market is thin enough that the quoted yield is not always a cleared price. Convention says match the tenor to the forecast horizon, so a 10-year BGTB — but that instrument's yield has moved by more than 400 basis points inside a single year. **Your "risk-free" input is not a constant; it is a recent observation of a volatile series.**

**The equity risk premium.** There is no defensible long-run measured ERP for Bangladesh. The DSEX's usable history is short, and it is dominated by one boom and one crash (Chapter 6, Chapter 7), so any historical average you compute is really a statement about whether your sample starts before or after 2010. Practitioners import a mature-market premium and add a country risk spread derived from the sovereign bond spread or a rating-implied table. **That is a defensible procedure and it is not a measurement.** Reasonable analysts land anywhere between 5% and 9%, and the chapter's sensitivity grid will show you what a 200-basis-point disagreement does.

**Beta.** This is the worst of the three. Beta is the regression slope of the stock's returns against the market's. Chapter 1 established that the DSEX is heavily concentrated — a small number of large names, mostly banks and telecom, drive the index. So:

- For a large-cap constituent, you are regressing a stock partly against **itself**. Beta is biased toward 1 by construction.
- For a small or mid-cap that trades thinly, many observation days have stale or zero returns. **Non-synchronous trading biases beta downward**, so illiquid companies appear safer than they are — exactly backwards.
- The estimate is unstable. Change the window from two years to five, or from daily to weekly returns, and beta on the same company routinely moves by 0.3 or more.

**A beta estimated against a concentrated, illiquid index is not a risk measurement. It is a number with the shape of one.** You should still compute it, disclose the window, and then treat the WACC it produces as one point in a range — which is precisely what the sensitivity grid is for.

### Terminal value, and the honest problem

$$TV_n = \\frac{FCF_n(1+g)}{WACC - g}$$

The Gordon formula assumes the business grows at $g$ forever. Two disciplines apply:

- **$g$ must be below the long-run nominal growth rate of the economy**, otherwise the company eventually becomes larger than Bangladesh. Nominal GDP growth is real growth plus inflation, so in a BDT-denominated nominal model, $g$ of 5–7% is arguable and $g$ of 10% is not.
- **$g$ must be consistent with the units of your cash flows.** If you forecast in nominal taka, $g$ is nominal. A 5% nominal terminal growth in an economy running 7% inflation is a real *decline* of roughly 2% a year forever — which may well be the right assumption, but you should know you are making it.

Now the structural fact that this chapter exists to demonstrate.

**The denominator is $WACC - g$, a difference between two numbers you cannot measure precisely.** In the worked example that spread is $0.15 - 0.05 = 0.10$. Move WACC down one point and $g$ up one point and the spread becomes 0.08 — the terminal value rises by 25% from a two-point change in inputs that are, at best, estimates.

And because the terminal value is a perpetuity discounted from year five while the explicit cash flows are discounted from years one to five, **the terminal value routinely accounts for 60–80% of the total enterprise value.** In §21.9 it is 65.85%.

Read that again. **Two-thirds of the answer comes from the part of the model that contains no forecasting at all — just two contested rates and a formula.** The five years of detailed, sourced, defensible work you did on revenue and margins determines about a third of the output.

### What a DCF is actually for

Not precision. **A DCF is a discipline for making assumptions explicit and forcing them to be mutually consistent.**

Its value is that it will not let you hold contradictory beliefs quietly. You cannot assume 20% revenue growth and 4% capital expenditure — growth consumes assets, and the model will show you the working capital drain. You cannot assume an expanding margin forever without saying which competitor is losing. The model converts vague optimism into numbered claims that a colleague can attack one at a time.

**The output of a good DCF is not a target price. It is a sentence of the form: "at the current price of BDT 34, the market is assuming a WACC of about 15% and terminal growth of about 5.4%. Do I believe those?"** That question is answerable. "Is the stock worth BDT 31.89?" is not.

Chapter 7 made the same point about the composite cycle score, and for the same reason: **a model that produces a confident number will be believed in proportion to its precision, not its accuracy.** A DCF outputs two decimal places. It deserves none of them.`,
      bn: `একটি শেয়ার হলো একটি ব্যবসা তার বাকি জীবনে যত নগদ তৈরি করবে তার ওপর দাবি। DCF এই কথাটাই স্পষ্ট করে বলে: **একটি কোম্পানির মূল্য হলো তার ভবিষ্যৎ মুক্ত নগদ প্রবাহের বর্তমান মূল্য, এমন একটি হারে বাট্টাকৃত যা ঐ নগদ না পাওয়ার ঝুঁকি প্রতিফলিত করে।**

বাক্যটি সঠিক। এটি একা প্রায় অকেজোও, কারণ এতে দুটি রাশি আছে যা কেউ জানে না — ভবিষ্যৎ নগদ প্রবাহ ও সঠিক বাট্টা হার — এবং এদের সংযোগকারী পাটিগণিত ক্ষমাহীন। **এই অধ্যায় একটি সম্পূর্ণ DCF তৈরি করে, তারপর সংখ্যা দিয়ে দেখায় উত্তরটির ওজন কত কম।**

### কাঠামো

$$EV = \\sum_{t=1}^{n} \\frac{FCF_t}{(1+WACC)^t} + \\frac{TV_n}{(1+WACC)^n}$$

তিনটি চলমান অংশ:

১. **স্পষ্ট পূর্বাভাস সময়কাল** — সাধারণত পাঁচ বছর, কারণ পাঁচ বছরই মোটামুটি যেকোনো মানুষের একটি সংখ্যা রক্ষা করার ইচ্ছার সীমা; ষষ্ঠ বছর গভীরতর কোনো অর্থে অজ্ঞেয় বলে নয়।
২. **প্রান্তিক মূল্য (TV)** — স্পষ্ট সময়কালের পরের সবকিছু, ব্যবসাটি চিরকাল একটি স্থির হারে বাড়বে ধরে নিয়ে একটি সংখ্যায় সংকুচিত।
৩. **একটি বাট্টা হার** — মূলধনের ভারিত গড় খরচ, WACC।

### মুক্ত নগদ প্রবাহ মানে নগদ প্রবাহ বিবরণীর শেষ সারি নয়

অধ্যায় ২০ ব্যবহার করেছে $FCF = \\text{CFO} - \\text{মূলধনী ব্যয়}$, যা লভ্যাংশ পরীক্ষার জন্য সঠিক। মূল্যায়নের জন্য দরকার **আনলিভার্ড** মুক্ত নগদ প্রবাহ — *সব* মূলধন সরবরাহকারীর জন্য উপলব্ধ নগদ, ঋণদাতাদের কোনো পরিশোধের আগে, কারণ বাট্টা হারেই ঋণের দাম ইতিমধ্যে ধরা আছে:

$$FCF = EBIT(1-t) + D\\&A - \\text{মূলধনী ব্যয়} - \\Delta NWC$$

সুদ এখানে নেই। নগদ প্রবাহ থেকে সুদ বিয়োগ করে *আবার* WACC দিয়ে বাট্টা দিলে আপনি ঋণের খরচ দুইবার কাটলেন। প্রথম DCF-এ এটিই সবচেয়ে সাধারণ কাঠামোগত ভুল, এবং এটি নীরবে ও স্থায়ীভাবে অতি-নিম্ন মূল্যায়ন তৈরি করে।

**সূত্রটি কী দাবি করে তা লক্ষ করুন।** পাঁচ বছরের রাজস্ব প্রবৃদ্ধি। পাঁচ বছরের পরিচালন মার্জিন। একটি কর হার। অবচয়, মূলধনী ব্যয়, এবং বর্ধনশীল ব্যবসা যে চলতি মূলধন গিলে ফেলে তা। অর্থাৎ ছয়টি পূর্বাভাস, প্রতিটি পাঁচ সময়কালের জন্য — ত্রিশটি সংখ্যা, আর মডেল ত্রিশটিকেই তথ্য হিসেবে গণ্য করে।

### WACC, এবং বাংলাদেশ কেন একে কঠিন করে

$$WACC = \\frac{E}{V}k_e + \\frac{D}{V}k_d(1-t)$$

ঋণের দিকটি প্রায় পর্যবেক্ষণযোগ্য: নোটে গড় ঋণের বিপরীতে সুদ ব্যয় দেখুন, বা ব্যাংকের ঘোষিত ঋণ হার নিন। **ইক্যুইটির দিকেই মডেলটি অভিজ্ঞতাভিত্তিক থাকা বন্ধ করে।**

CAPM:

$$k_e = r_f + \\beta \\times ERP$$

তিনটি ইনপুট, এবং বাংলাদেশে তিনটিই বিতর্কিত।

**ঝুঁকিমুক্ত হার।** কোনটি? ৯১ দিনের ট্রেজারি বিল, ৫ বছরের BGTB, না ১০ বছরের BGTB? বিভিন্ন সময়ে এদের মধ্যে কয়েকশ বেসিস পয়েন্টের ব্যবধান থেকেছে, আর সরকারি সিকিউরিটিজের বাজার এতটাই পাতলা যে উদ্ধৃত ফলন সবসময় একটি নিষ্পন্ন দাম নয়। প্রথা বলে মেয়াদ পূর্বাভাসের সময়সীমার সঙ্গে মেলাতে, অর্থাৎ ১০ বছরের BGTB — কিন্তু ঐ উপকরণের ফলন এক বছরেই ৪০০ বেসিস পয়েন্টের বেশি নড়েছে। **আপনার "ঝুঁকিমুক্ত" ইনপুট কোনো ধ্রুবক নয়; এটি একটি অস্থির সিরিজের সাম্প্রতিক একটি পর্যবেক্ষণ।**

**ইক্যুইটি ঝুঁকি প্রিমিয়াম।** বাংলাদেশের জন্য কোনো রক্ষণীয় দীর্ঘমেয়াদি পরিমাপকৃত ERP নেই। DSEX-এর ব্যবহারযোগ্য ইতিহাস সংক্ষিপ্ত, এবং তাতে একটি উত্থান ও একটি ধস প্রাধান্য বিস্তার করে (অধ্যায় ৬, অধ্যায় ৭), তাই আপনার গণনা করা যেকোনো ঐতিহাসিক গড় আসলে এই বিবৃতি যে আপনার নমুনা ২০১০-এর আগে না পরে শুরু হয়েছে। পেশাদাররা একটি পরিণত-বাজার প্রিমিয়াম আমদানি করে তার সঙ্গে সার্বভৌম বন্ড স্প্রেড বা রেটিং-নির্ভর সারণি থেকে পাওয়া দেশ-ঝুঁকি যোগ করেন। **এটি একটি রক্ষণীয় পদ্ধতি এবং এটি কোনো পরিমাপ নয়।** যুক্তিসঙ্গত বিশ্লেষকরা ৫% থেকে ৯%-এর যেকোনো জায়গায় পৌঁছান, আর অধ্যায়ের সংবেদনশীলতা গ্রিড দেখাবে ২০০ বেসিস পয়েন্টের মতভেদ কী করে।

**বিটা।** তিনটির মধ্যে এটিই সবচেয়ে খারাপ। বিটা হলো বাজারের রিটার্নের বিপরীতে শেয়ারের রিটার্নের রিগ্রেশন ঢাল। অধ্যায় ১ প্রতিষ্ঠা করেছে যে DSEX প্রবলভাবে কেন্দ্রীভূত — অল্প কয়েকটি বড় নাম, মূলত ব্যাংক ও টেলিকম, সূচক চালায়। ফলে:

- বড় মূলধনের কোনো উপাদানের ক্ষেত্রে আপনি শেয়ারটিকে আংশিকভাবে **তার নিজের** বিপরীতেই রিগ্রেস করছেন। বিটা গঠনগতভাবেই ১-এর দিকে পক্ষপাতদুষ্ট।
- পাতলা লেনদেনের ছোট বা মাঝারি মূলধনের ক্ষেত্রে বহু পর্যবেক্ষণ দিনে রিটার্ন বাসি বা শূন্য। **অসমকালীন লেনদেন বিটাকে নিচের দিকে পক্ষপাতদুষ্ট করে**, তাই তারল্যহীন কোম্পানিগুলোকে বাস্তবের চেয়ে নিরাপদ দেখায় — ঠিক উল্টোটা।
- নির্ণয়টি অস্থির। উইন্ডো দুই বছর থেকে পাঁচ বছর করুন, বা দৈনিক থেকে সাপ্তাহিক রিটার্নে যান — একই কোম্পানির বিটা নিয়মিতভাবে ০.৩ বা তার বেশি নড়ে।

**একটি কেন্দ্রীভূত, তারল্যহীন সূচকের বিপরীতে নির্ণীত বিটা কোনো ঝুঁকি পরিমাপ নয়। এটি ঝুঁকি পরিমাপের আকৃতিবিশিষ্ট একটি সংখ্যা।** তবু এটি গণনা করুন, উইন্ডো প্রকাশ করুন, এবং তারপর এর তৈরি WACC-কে একটি পরিসরের একটি বিন্দু হিসেবে দেখুন — সংবেদনশীলতা গ্রিড ঠিক এ কাজেই।

### প্রান্তিক মূল্য, এবং সৎ সমস্যা

$$TV_n = \\frac{FCF_n(1+g)}{WACC - g}$$

Gordon সূত্র ধরে নেয় ব্যবসাটি চিরকাল $g$ হারে বাড়বে। দুটি শৃঙ্খলা প্রযোজ্য:

- **$g$ অবশ্যই অর্থনীতির দীর্ঘমেয়াদি নামিক প্রবৃদ্ধির হারের নিচে থাকতে হবে**, নইলে কোম্পানিটি একসময় বাংলাদেশের চেয়ে বড় হয়ে যাবে। নামিক জিডিপি প্রবৃদ্ধি = প্রকৃত প্রবৃদ্ধি + মূল্যস্ফীতি, তাই টাকায় নামিক মডেলে ৫–৭% $g$ যুক্তিসঙ্গত, ১০% নয়।
- **$g$ আপনার নগদ প্রবাহের এককের সঙ্গে সঙ্গতিপূর্ণ হতে হবে।** নামিক টাকায় পূর্বাভাস দিলে $g$ নামিক। ৭% মূল্যস্ফীতির অর্থনীতিতে ৫% নামিক প্রান্তিক প্রবৃদ্ধি মানে চিরকাল বছরে প্রায় ২% প্রকৃত *পতন* — যা সঠিক অনুমান হতেও পারে, কিন্তু আপনি যে তা করছেন তা জানা উচিত।

এবার সেই কাঠামোগত সত্য, যা দেখানোর জন্যই এই অধ্যায়।

**হর হলো $WACC - g$, দুটি অপরিমাপযোগ্য সংখ্যার পার্থক্য।** কৃত উদাহরণে ঐ ব্যবধান $0.15 - 0.05 = 0.10$। WACC এক পয়েন্ট নামান আর $g$ এক পয়েন্ট বাড়ান, ব্যবধান হয় ০.০৮ — সর্বোত্তম ক্ষেত্রেও অনুমান-মাত্র দুটি ইনপুটে দুই পয়েন্টের পরিবর্তনে প্রান্তিক মূল্য ২৫% বাড়ে।

আর যেহেতু প্রান্তিক মূল্য পঞ্চম বছর থেকে বাট্টাকৃত একটি চিরস্থায়ী ধারা, আর স্পষ্ট নগদ প্রবাহগুলো এক থেকে পাঁচ বছর থেকে বাট্টাকৃত, **প্রান্তিক মূল্য নিয়মিতভাবে মোট এন্টারপ্রাইজ মূল্যের ৬০–৮০% দখল করে।** §২১.৯-এ তা ৬৫.৮৫%।

আবার পড়ুন। **উত্তরের দুই-তৃতীয়াংশ আসে মডেলের সেই অংশ থেকে যেখানে কোনো পূর্বাভাসই নেই — কেবল দুটি বিতর্কিত হার ও একটি সূত্র।** রাজস্ব ও মার্জিন নিয়ে আপনার করা পাঁচ বছরের বিস্তারিত, উৎস-সমর্থিত, রক্ষণীয় কাজ ফলাফলের প্রায় এক-তৃতীয়াংশ নির্ধারণ করে।

### DCF আসলে কীসের জন্য

নির্ভুলতার জন্য নয়। **DCF হলো অনুমানগুলো স্পষ্ট করার এবং তাদের পারস্পরিক সঙ্গতি নিশ্চিত করার একটি শৃঙ্খলা।**

এর মূল্য হলো, এটি আপনাকে চুপচাপ পরস্পরবিরোধী বিশ্বাস ধরে রাখতে দেবে না। আপনি ২০% রাজস্ব প্রবৃদ্ধি ও ৪% মূলধনী ব্যয় একসঙ্গে ধরে নিতে পারবেন না — প্রবৃদ্ধি সম্পদ খায়, আর মডেল আপনাকে চলতি মূলধনের ক্ষরণ দেখিয়ে দেবে। কোন প্রতিযোগী হারছে তা না বলে আপনি চিরকাল প্রসারমাণ মার্জিন ধরতে পারবেন না। মডেলটি অস্পষ্ট আশাবাদকে সংখ্যায়িত দাবিতে রূপান্তরিত করে, যাতে সহকর্মী একটি একটি করে আক্রমণ করতে পারেন।

**একটি ভালো DCF-এর ফলাফল কোনো লক্ষ্যমূল্য নয়। এটি এই ধরনের একটি বাক্য: "৩৪ টাকার বর্তমান দামে বাজার ধরে নিচ্ছে WACC প্রায় ১৫% এবং প্রান্তিক প্রবৃদ্ধি প্রায় ৫.৪%। আমি কি তা বিশ্বাস করি?"** এই প্রশ্নের উত্তর দেওয়া যায়। "শেয়ারটির মূল্য কি ৩১.৮৯ টাকা?" — এর যায় না।

অধ্যায় ৭ সমন্বিত চক্র স্কোর নিয়ে একই কথা বলেছে, একই কারণে: **যে মডেল একটি আত্মবিশ্বাসী সংখ্যা তৈরি করে, তাকে বিশ্বাস করা হয় তার নির্ভুলতা নয়, তার সূক্ষ্মতার অনুপাতে।** DCF দুই দশমিক স্থান পর্যন্ত ফল দেয়। এর একটিও প্রাপ্য নয়।`,
    },

    simple: {
      en: `Suppose a friend offers to sell you a shop. How much is it worth?

Not what he paid for it. Not what the shop next door sold for. **It is worth the money it will put in your pocket, from now until it closes.**

So you ask two questions:

1. **How much cash will it hand me each year?**
2. **How much is a taka in five years worth to me today?**

The second question has an answer. If you could put money in a government bond and earn 11.5% with no worry, then a taka you receive in one year is only worth about 87 paisa today. In five years, about 50 paisa. Money later is worth less than money now, and the riskier the source, the less it is worth.

That is the whole idea. **Add up every future year's cash, shrink each one according to how far away and how risky it is, and the total is what the shop is worth.**

---

### The problem nobody tells you about

The shop does not close after five years. It keeps going. So after forecasting five years in detail, you have to put a single number on "everything after that."

The standard way: assume it grows at a steady rate forever, and use one formula.

**And here is the thing that should bother you.** In our worked example, that one number — the "everything after year five" number — is **66% of the entire answer.**

You spent weeks researching sales, margins, factory spending, and receivables for five years. That work determines about a third of the valuation. The other two-thirds comes from two guesses: what discount rate to use, and how fast the company grows forever.

---

### How badly can two guesses go wrong?

We valued a pharma company. Our best estimate came out at **BDT 31.89 per share**. The market price was BDT 34.00. So: slightly expensive, do not buy.

Then we changed the two guesses within a range that any sensible analyst could defend — the discount rate from 13% to 17%, the forever-growth from 3% to 7%.

The answers ranged from **BDT 22.59 to BDT 53.30.**

The low end says the share is worth a third less than its price. The high end says it is worth 57% more. **Ten of the twenty-five combinations say buy. Fifteen say sell.**

Same company. Same cash flows. Same spreadsheet. **The answer is whatever you decided before you opened it.**

---

### So why do it at all?

Because of what happens while you build it.

To finish a DCF you must write down, as numbers: how fast you think sales grow, what margin you expect, how much the factory will cost, how much cash gets stuck in inventory. You cannot skip any of them. And once they are written down, someone can point at one and say *"why 12%?"* — and you have to answer.

**That is the product. Not the price target — the list of things you are claiming.**

The right way to use the answer is backwards. Instead of asking "what is it worth?", ask: **"at BDT 34, what does the market already believe?"** In our case: a discount rate near 15% and forever-growth near 5.4%. Now you have something you can actually argue about.

Anyone who shows you a DCF and a target price to two decimals without a sensitivity table is not showing you analysis. **They are showing you their opinion, wearing a costume.**`,
      bn: `ধরুন এক বন্ধু আপনাকে একটি দোকান বিক্রি করতে চান। এর দাম কত?

তিনি যা দিয়ে কিনেছিলেন তা নয়। পাশের দোকান যত টাকায় বিক্রি হয়েছে তাও নয়। **এর দাম হলো আজ থেকে বন্ধ হওয়া পর্যন্ত এটি আপনার পকেটে যত টাকা দেবে।**

তাই আপনি দুটি প্রশ্ন করেন:

১. **প্রতি বছর এটি আমাকে কত নগদ দেবে?**
২. **পাঁচ বছর পরের এক টাকা আজ আমার কাছে কত?**

দ্বিতীয় প্রশ্নের উত্তর আছে। নিশ্চিন্তে সরকারি বন্ডে টাকা রেখে ১১.৫% পাওয়া গেলে এক বছর পরে পাওয়া এক টাকার আজকের মূল্য প্রায় ৮৭ পয়সা। পাঁচ বছর পরে প্রায় ৫০ পয়সা। পরের টাকা এখনকার টাকার চেয়ে কম মূল্যবান, আর উৎস যত ঝুঁকিপূর্ণ, মূল্য তত কম।

পুরো ধারণাটি এটুকুই। **ভবিষ্যতের প্রতি বছরের নগদ যোগ করুন, প্রতিটিকে কত দূরে ও কত ঝুঁকিপূর্ণ সেই অনুপাতে ছোট করুন, আর যোগফলই দোকানটির দাম।**

---

### যে সমস্যাটির কথা কেউ বলে না

দোকান পাঁচ বছর পর বন্ধ হয় না। চলতেই থাকে। তাই পাঁচ বছরের বিস্তারিত পূর্বাভাসের পর "এরপরের সবকিছু"-র জন্য একটি একক সংখ্যা বসাতে হয়।

প্রচলিত উপায়: ধরে নিন এটি চিরকাল একটি স্থির হারে বাড়বে, আর একটি সূত্র ব্যবহার করুন।

**আর এখানেই যা আপনাকে অস্বস্তি দেওয়া উচিত।** আমাদের কৃত উদাহরণে ঐ একটি সংখ্যা — "পাঁচ বছরের পরের সবকিছু" — পুরো উত্তরের **৬৬%।**

আপনি সপ্তাহ ধরে পাঁচ বছরের বিক্রি, মার্জিন, কারখানার খরচ ও প্রাপ্য নিয়ে গবেষণা করেছেন। ঐ কাজ মূল্যায়নের প্রায় এক-তৃতীয়াংশ নির্ধারণ করে। বাকি দুই-তৃতীয়াংশ আসে দুটি অনুমান থেকে: কোন বাট্টা হার ব্যবহার করবেন, আর কোম্পানি চিরকাল কত দ্রুত বাড়বে।

---

### দুটি অনুমান কতটা ভুল হতে পারে?

আমরা একটি ওষুধ কোম্পানির মূল্যায়ন করেছি। আমাদের সেরা নির্ণয় এসেছে **শেয়ারপ্রতি ৩১.৮৯ টাকা**। বাজারমূল্য ছিল ৩৪.০০ টাকা। অর্থাৎ: সামান্য দামি, কিনবেন না।

তারপর আমরা দুটি অনুমান এমন পরিসরে বদলালাম যা যেকোনো বিবেচক বিশ্লেষক রক্ষা করতে পারেন — বাট্টা হার ১৩% থেকে ১৭%, চিরকালীন প্রবৃদ্ধি ৩% থেকে ৭%।

উত্তরগুলো এল **২২.৫৯ টাকা থেকে ৫৩.৩০ টাকা।**

নিচের প্রান্ত বলে শেয়ারটির দাম তার বাজারমূল্যের এক-তৃতীয়াংশ কম। ওপরের প্রান্ত বলে ৫৭% বেশি। **পঁচিশটি সমন্বয়ের দশটি বলে কিনুন। পনেরোটি বলে বেচুন।**

একই কোম্পানি। একই নগদ প্রবাহ। একই স্প্রেডশিট। **স্প্রেডশিট খোলার আগেই আপনি যা সিদ্ধান্ত নিয়েছিলেন, উত্তরটি তাই।**

---

### তাহলে এটি করবেন কেন?

কারণ এটি তৈরি করার সময় যা ঘটে, তার জন্য।

একটি DCF শেষ করতে হলে আপনাকে সংখ্যায় লিখতে হবে: বিক্রি কত দ্রুত বাড়বে বলে আপনি মনে করেন, কী মার্জিন প্রত্যাশা করেন, কারখানায় কত খরচ হবে, মজুদে কত নগদ আটকে থাকবে। একটিও এড়ানো যায় না। আর একবার লেখা হয়ে গেলে কেউ একটিতে আঙুল রেখে বলতে পারেন *"১২% কেন?"* — আর আপনাকে উত্তর দিতে হবে।

**এটিই উৎপাদন। লক্ষ্যমূল্য নয় — আপনি যা যা দাবি করছেন তার তালিকা।**

উত্তরটি ব্যবহারের সঠিক উপায় উল্টো। "এর দাম কত?" জিজ্ঞেস না করে জিজ্ঞেস করুন: **"৩৪ টাকায় বাজার ইতিমধ্যে কী বিশ্বাস করছে?"** আমাদের ক্ষেত্রে: প্রায় ১৫% বাট্টা হার এবং প্রায় ৫.৪% চিরকালীন প্রবৃদ্ধি। এবার আপনার হাতে এমন কিছু আছে যা নিয়ে সত্যিই তর্ক করা যায়।

যিনি আপনাকে সংবেদনশীলতা সারণি ছাড়া একটি DCF ও দুই দশমিক পর্যন্ত লক্ষ্যমূল্য দেখান, তিনি বিশ্লেষণ দেখাচ্ছেন না। **তিনি তাঁর মতামত দেখাচ্ছেন, পোশাক পরিয়ে।**`,
    },

    example: {
      en: `### NOVOPHARMA — a DSE pharma archetype

A mid-cap listed pharmaceutical manufacturer. Domestic generics, some export, a new plant commissioned two years ago. The sector matters: Bangladeshi pharma is one of the few DSE sectors with genuine operating history, real margins, and cash flows that are not mostly receivables (Chapter 13).

| Input | Value | Where it comes from |
|---|---|---|
| Base-year revenue | BDT 1,200.0 crore | Audited FY accounts |
| EBIT margin | 18.0% | Three-year average, held flat |
| Effective tax rate | 22.5% | Listed-company rate, checked against the tax note |
| D&A | 4.0% of revenue | Fixed asset note |
| Capex | 6.0% of revenue | Higher than D&A — the company is still adding capacity |
| Incremental NWC | 15.0% of revenue growth | Receivables + inventory − payables, historical |
| Total debt | BDT 320.0 crore | Balance sheet |
| Cash | BDT 95.0 crore | Balance sheet |
| Shares outstanding | 45.0 crore | Latest, post any bonus (Chapter 20) |
| Market price | BDT 34.00 | Screen |

**Revenue growth is the one assumption with no source.** We use 12%, 11%, 10%, 9%, 8% — decelerating toward the economy's nominal growth rate, which is the standard convention and is not evidence.

### Step 1 — The cost of capital

$$k_e = 11.50\\% + 0.90 \\times 6.00\\% = \\mathbf{16.90\\%}$$

Every term is an argument:

- **$r_f = 11.50\\%$** — the 10-year BGTB. Not the T-bill, because the forecast horizon is long. This number moved more than 400bp in the preceding eighteen months.
- **$ERP = 6.00\\%$** — imported mature-market premium plus a country spread. **There is no Bangladeshi dataset that produces this number.** A colleague using 8% is not wrong.
- **$\\beta = 0.90$** — two-year weekly returns against the DSEX. Chapter 1's concentration problem applies directly: the index is dominated by banks and telecom, so a pharma company's beta against it is measuring sector rotation as much as risk.

$$k_d(1-t) = 12.00\\% \\times (1 - 0.225) = \\mathbf{9.30\\%}$$

$$WACC = 0.75 \\times 16.90\\% + 0.25 \\times 9.30\\% = 12.675\\% + 2.325\\% = \\mathbf{15.00\\%}$$

**The roundness is a coincidence and you should distrust it.** Nothing about the inputs justifies two-decimal confidence in the output.

### Step 2 — Five years of free cash flow

| BDT crore | Y1 | Y2 | Y3 | Y4 | Y5 |
|---|---|---|---|---|---|
| Revenue | 1,344.00 | 1,491.84 | 1,641.02 | 1,788.72 | 1,931.81 |
| EBIT @ 18% | 241.920 | 268.531 | 295.384 | 321.969 | 347.726 |
| **NOPAT** = EBIT×0.775 | 187.488 | 208.112 | 228.923 | 249.526 | 269.488 |
| add D&A | 53.760 | 59.674 | 65.641 | 71.549 | 77.273 |
| less Capex | 80.640 | 89.510 | 98.461 | 107.323 | 115.909 |
| less ΔNWC | 21.600 | 22.176 | 22.378 | 22.154 | 21.465 |
| **FREE CASH FLOW** | **139.008** | **156.099** | **173.725** | **191.598** | **209.387** |

**Note the capex line exceeds D&A in every year.** That is what a growing manufacturer looks like, and it is the discipline the model imposes: you cannot assume growth without funding it. If you set capex equal to D&A to make the numbers prettier, you have assumed a company that grows revenue 50% over five years without adding a single machine.

**Note the ΔNWC line stops rising after Y3.** Not because working capital improves, but because revenue *growth* decelerates. Working capital is a charge on incremental revenue, so a slowing company releases the drag. This is arithmetic, not management skill.

### Step 3 — Discount and total

At 15.00%:

| Year | FCF | Discount factor | PV |
|---|---|---|---|
| 1 | 139.008 | 0.869565 | 120.877 |
| 2 | 156.099 | 0.756144 | 118.033 |
| 3 | 173.725 | 0.657516 | 114.227 |
| 4 | 191.598 | 0.571753 | 109.547 |
| 5 | 209.387 | 0.497177 | 104.102 |
| | | **Sum** | **566.786** |

**Look at the PV column.** The cash flows rise every year — from 139 to 209, a 51% increase. The present values *fall* every year, from 120.9 to 104.1. At a 15% discount rate, growth of 8–12% loses to discounting. **The company is running up a down escalator, and that is before we reach the part of the model that actually matters.**

### Step 4 — Terminal value

$$TV_5 = \\frac{209.387 \\times 1.05}{0.15 - 0.05} = \\frac{219.856}{0.10} = \\mathbf{2{,}198.565}$$

$$PV(TV_5) = \\frac{2{,}198.565}{1.15^5} = \\frac{2{,}198.565}{2.011357} = \\mathbf{1{,}093.075}$$

### Step 5 — Enterprise value and the number that matters

$$EV = 566.786 + 1{,}093.075 = \\mathbf{1{,}659.861 \\text{ crore}}$$

$$\\frac{PV(TV)}{EV} = \\frac{1{,}093.075}{1{,}659.861} = \\mathbf{65.85\\%}$$

**Stop here.**

| Component | BDT crore | % of EV |
|---|---|---|
| PV of five years of forecast FCF | 566.786 | **34.15%** |
| PV of terminal value | 1,093.075 | **65.85%** |
| **Enterprise value** | **1,659.861** | 100.00% |

**Two-thirds of this valuation was produced by one line of arithmetic containing two rates you cannot observe.** The five-year forecast — the revenue build, the margin work, the capex schedule, the working capital analysis — is a third of the answer.

That ratio is not a defect of this example. It is what a five-year DCF at a mid-teens discount rate does. Lengthen the explicit period to ten years and the TV share falls, but only because you have moved the guessing earlier; years six through ten are not forecasts in any meaningful sense.

### Step 6 — The equity bridge

Enterprise value belongs to everyone who funded the business. Shareholders get what is left after the lenders:

$$\\text{Net debt} = 320.0 - 95.0 = 225.0$$
$$\\text{Equity value} = 1{,}659.861 - 225.0 = \\mathbf{1{,}434.861 \\text{ crore}}$$
$$\\text{Value per share} = \\frac{1{,}434.861}{45.0} = \\mathbf{BDT\\ 31.89}$$

Against a market price of BDT 34.00, that is **6.2% overvalued.** A clean, defensible, two-decimal answer.

### Step 7 — Now destroy it

Sweep WACC from 13% to 17% and terminal $g$ from 3% to 7%. Both ranges are narrow. Both are defensible in every cell.

**Value per share (BDT) — WACC down the side, $g$ across the top:**

| WACC \\ g | 3.0% | 4.0% | 5.0% | 6.0% | 7.0% |
|---|---|---|---|---|---|
| **13.0%** | 34.28 | 37.45 | 41.41 | 46.51 | **53.30** |
| **14.0%** | 30.55 | 33.06 | 36.12 | 39.94 | 44.86 |
| **15.0%** | 27.45 | 29.47 | **31.89** | 34.84 | 38.54 |
| **16.0%** | 24.83 | 26.48 | 28.43 | 30.76 | 33.62 |
| **17.0%** | **22.59** | 23.96 | 25.55 | 27.43 | 29.69 |

| | |
|---|---|
| Lowest value per share | **BDT 22.59** |
| Highest value per share | **BDT 53.30** |
| Range as a multiple | **2.36×** |
| Market price | BDT 34.00 |
| Cells implying BUY | **10 of 25** |
| Cells implying SELL | **15 of 25** |

**The high corner values the company at 2.36 times the low corner.** Not 10% apart. Not 30% apart. **136% apart**, from moving two rates by four points and four points respectively — a disagreement smaller than the one between any two analysts covering the same DSE name.

**Ten cells say buy. Fifteen say sell.** The grid does not narrow the decision. It reveals that the decision was never in the cash flows.

### Step 8 — TV dominance across the grid

The terminal value's grip tightens exactly where the valuation is highest:

| WACC | $g$ | TV as % of EV | Value per share |
|---|---|---|---|
| 13% | 3% | 66.23% | BDT 34.28 |
| 13% | 5% | 71.42% | BDT 41.41 |
| 13% | 7% | **77.25%** | **BDT 53.30** |
| 15% | 3% | 61.19% | BDT 27.45 |
| 15% | 5% | 65.85% | BDT 31.89 |
| 15% | 7% | 71.07% | BDT 38.54 |
| 17% | 3% | **56.59%** | **BDT 22.59** |
| 17% | 5% | 60.79% | BDT 25.55 |
| 17% | 7% | 65.47% | BDT 29.69 |

**The bullish cells are the ones where the forecast matters least.** At the top corner, 77% of the value is terminal — the model is 77% assumption and 23% analysis, and it happens to be the cell that produces the highest price target. That is not a coincidence; it is the mechanism. Lowering the discount rate and raising perpetual growth both inflate the same term.

**Whenever someone shows you a DCF with an unusually high target, ask for the TV share of EV.** It will be high, and that single number tells you the target is a statement about the terminal assumptions, not about the business.

### Step 9 — Run it backwards, which is the only honest use

The market says BDT 34.00. Hold WACC at 15.00% and solve for the $g$ that produces it. From the grid, BDT 34.84 at $g$ = 6% and BDT 31.89 at $g$ = 5%, so the implied $g$ is approximately **5.4%**.

**Now you have a real question:** *is 5.4% nominal perpetual growth reasonable for a Bangladeshi generics manufacturer?*

Against nominal GDP growth, 5.4% implies the company slowly shrinks as a share of the economy — plausible for a mature generic portfolio facing price controls, implausible for a company with a genuine export franchise. **That is a question about the business, answerable with evidence, and you arrived at it by refusing to treat the DCF's output as an answer.**

Chapter 7 built a composite cycle score, ran it on December 2010, and got a confident instruction to be 85% invested weeks before the worst crash in DSE history. **This chapter's lesson is the same one in a different costume:** the model is not wrong because the arithmetic is wrong. It is wrong because it converts uncertainty into precision and hands you back the assumption you fed it, wearing two decimal places.`,
      bn: `### NOVOPHARMA — একটি ডিএসই ওষুধ কোম্পানির আদর্শরূপ

একটি মাঝারি মূলধনের তালিকাভুক্ত ওষুধ উৎপাদক। দেশীয় জেনেরিক, কিছু রপ্তানি, দুই বছর আগে চালু হওয়া একটি নতুন প্ল্যান্ট। খাতটি গুরুত্বপূর্ণ: বাংলাদেশি ওষুধ শিল্প ডিএসই-র সেই অল্প কয়েকটি খাতের একটি যাদের প্রকৃত পরিচালন ইতিহাস, বাস্তব মার্জিন এবং প্রধানত প্রাপ্য-নির্ভর নয় এমন নগদ প্রবাহ আছে (অধ্যায় ১৩)।

| ইনপুট | মান | উৎস |
|---|---|---|
| ভিত্তি বছরের রাজস্ব | ১,২০০.০ কোটি টাকা | নিরীক্ষিত হিসাব |
| EBIT মার্জিন | ১৮.০% | তিন বছরের গড়, স্থির ধরা |
| কার্যকর কর হার | ২২.৫% | তালিকাভুক্ত কোম্পানির হার, কর নোটে যাচাইকৃত |
| D&A | রাজস্বের ৪.০% | স্থায়ী সম্পদ নোট |
| মূলধনী ব্যয় | রাজস্বের ৬.০% | D&A-র চেয়ে বেশি — কোম্পানি এখনো সক্ষমতা বাড়াচ্ছে |
| বর্ধিত NWC | রাজস্ব বৃদ্ধির ১৫.০% | প্রাপ্য + মজুদ − প্রদেয়, ঐতিহাসিক |
| মোট ঋণ | ৩২০.০ কোটি টাকা | স্থিতিপত্র |
| নগদ | ৯৫.০ কোটি টাকা | স্থিতিপত্র |
| বকেয়া শেয়ার | ৪৫.০ কোটি | সর্বশেষ, বোনাস-পরবর্তী (অধ্যায় ২০) |
| বাজারমূল্য | ৩৪.০০ টাকা | স্ক্রিন |

**রাজস্ব প্রবৃদ্ধিই একমাত্র অনুমান যার কোনো উৎস নেই।** আমরা ব্যবহার করছি ১২%, ১১%, ১০%, ৯%, ৮% — অর্থনীতির নামিক প্রবৃদ্ধির দিকে মন্থর হয়ে, যা প্রচলিত প্রথা এবং প্রমাণ নয়।

### ধাপ ১ — মূলধনের খরচ

$$k_e = 11.50\\% + 0.90 \\times 6.00\\% = \\mathbf{16.90\\%}$$

প্রতিটি পদই একটি তর্ক:

- **$r_f = 11.50\\%$** — ১০ বছরের BGTB। ট্রেজারি বিল নয়, কারণ পূর্বাভাসের সময়সীমা দীর্ঘ। এই সংখ্যাটি আগের আঠারো মাসে ৪০০bp-র বেশি নড়েছে।
- **$ERP = 6.00\\%$** — আমদানিকৃত পরিণত-বাজার প্রিমিয়াম যোগ দেশ-স্প্রেড। **এই সংখ্যাটি তৈরি করে এমন কোনো বাংলাদেশি ডেটাসেট নেই।** ৮% ব্যবহারকারী সহকর্মী ভুল নন।
- **$\\beta = 0.90$** — DSEX-এর বিপরীতে দুই বছরের সাপ্তাহিক রিটার্ন। অধ্যায় ১-এর কেন্দ্রীভবনের সমস্যা সরাসরি প্রযোজ্য: সূচকে ব্যাংক ও টেলিকমের প্রাধান্য, তাই তার বিপরীতে একটি ওষুধ কোম্পানির বিটা ঝুঁকির যতটা, খাত-আবর্তনও ততটাই মাপছে।

$$k_d(1-t) = 12.00\\% \\times (1 - 0.225) = \\mathbf{9.30\\%}$$

$$WACC = 0.75 \\times 16.90\\% + 0.25 \\times 9.30\\% = 12.675\\% + 2.325\\% = \\mathbf{15.00\\%}$$

**সংখ্যাটির গোলগাল হওয়া কাকতালীয় এবং একে অবিশ্বাস করা উচিত।** ইনপুটের কোনো কিছুই ফলাফলে দুই দশমিকের আস্থা সমর্থন করে না।

### ধাপ ২ — পাঁচ বছরের মুক্ত নগদ প্রবাহ

| কোটি টাকা | Y1 | Y2 | Y3 | Y4 | Y5 |
|---|---|---|---|---|---|
| রাজস্ব | ১,৩৪৪.০০ | ১,৪৯১.৮৪ | ১,৬৪১.০২ | ১,৭৮৮.৭২ | ১,৯৩১.৮১ |
| EBIT @ ১৮% | ২৪১.৯২০ | ২৬৮.৫৩১ | ২৯৫.৩৮৪ | ৩২১.৯৬৯ | ৩৪৭.৭২৬ |
| **NOPAT** = EBIT×০.৭৭৫ | ১৮৭.৪৮৮ | ২০৮.১১২ | ২২৮.৯২৩ | ২৪৯.৫২৬ | ২৬৯.৪৮৮ |
| যোগ D&A | ৫৩.৭৬০ | ৫৯.৬৭৪ | ৬৫.৬৪১ | ৭১.৫৪৯ | ৭৭.২৭৩ |
| বিয়োগ মূলধনী ব্যয় | ৮০.৬৪০ | ৮৯.৫১০ | ৯৮.৪৬১ | ১০৭.৩২৩ | ১১৫.৯০৯ |
| বিয়োগ ΔNWC | ২১.৬০০ | ২২.১৭৬ | ২২.৩৭৮ | ২২.১৫৪ | ২১.৪৬৫ |
| **মুক্ত নগদ প্রবাহ** | **১৩৯.০০৮** | **১৫৬.০৯৯** | **১৭৩.৭২৫** | **১৯১.৫৯৮** | **২০৯.৩৮৭** |

**লক্ষ করুন প্রতিটি বছরেই মূলধনী ব্যয় D&A ছাড়িয়ে যায়।** একটি বর্ধনশীল উৎপাদক দেখতে এমনই হয়, এবং এটিই মডেলের আরোপিত শৃঙ্খলা: অর্থায়ন না করে প্রবৃদ্ধি ধরে নেওয়া যায় না। সংখ্যা সুন্দর করতে মূলধনী ব্যয়কে D&A-র সমান করলে আপনি এমন কোম্পানি ধরে নিলেন যা একটি যন্ত্রও না বসিয়ে পাঁচ বছরে রাজস্ব ৫০% বাড়ায়।

**লক্ষ করুন ΔNWC সারিটি Y3-এর পর আর বাড়ে না।** চলতি মূলধনের উন্নতি হয়েছে বলে নয়, বরং রাজস্ব *প্রবৃদ্ধি* মন্থর হচ্ছে বলে। চলতি মূলধন বর্ধিত রাজস্বের ওপর একটি চার্জ, তাই মন্থর হতে থাকা কোম্পানি টানটি ছেড়ে দেয়। এটি পাটিগণিত, ব্যবস্থাপনার দক্ষতা নয়।

### ধাপ ৩ — বাট্টা ও যোগফল

১৫.০০%-এ:

| বছর | FCF | বাট্টা গুণক | বর্তমান মূল্য |
|---|---|---|---|
| ১ | ১৩৯.০০৮ | ০.৮৬৯৫৬৫ | ১২০.৮৭৭ |
| ২ | ১৫৬.০৯৯ | ০.৭৫৬১৪৪ | ১১৮.০৩৩ |
| ৩ | ১৭৩.৭২৫ | ০.৬৫৭৫১৬ | ১১৪.২২৭ |
| ৪ | ১৯১.৫৯৮ | ০.৫৭১৭৫৩ | ১০৯.৫৪৭ |
| ৫ | ২০৯.৩৮৭ | ০.৪৯৭১৭৭ | ১০৪.১০২ |
| | | **যোগফল** | **৫৬৬.৭৮৬** |

**বর্তমান মূল্যের কলামটি দেখুন।** নগদ প্রবাহ প্রতি বছর বাড়ে — ১৩৯ থেকে ২০৯, অর্থাৎ ৫১% বৃদ্ধি। বর্তমান মূল্য প্রতি বছর *কমে*, ১২০.৯ থেকে ১০৪.১। ১৫% বাট্টা হারে ৮–১২% প্রবৃদ্ধি বাট্টার কাছে হারে। **কোম্পানিটি নিচে নামতে থাকা চলন্ত সিঁড়িতে দৌড়াচ্ছে, আর এটি মডেলের সেই অংশে পৌঁছানোর আগের কথা যেটি আসলে গুরুত্বপূর্ণ।**

### ধাপ ৪ — প্রান্তিক মূল্য

$$TV_5 = \\frac{209.387 \\times 1.05}{0.15 - 0.05} = \\frac{219.856}{0.10} = \\mathbf{2{,}198.565}$$

$$PV(TV_5) = \\frac{2{,}198.565}{1.15^5} = \\frac{2{,}198.565}{2.011357} = \\mathbf{1{,}093.075}$$

### ধাপ ৫ — এন্টারপ্রাইজ মূল্য এবং যে সংখ্যাটি গুরুত্বপূর্ণ

$$EV = 566.786 + 1{,}093.075 = \\mathbf{1{,}659.861 \\text{ কোটি}}$$

$$\\frac{PV(TV)}{EV} = \\frac{1{,}093.075}{1{,}659.861} = \\mathbf{65.85\\%}$$

**এখানে থামুন।**

| উপাদান | কোটি টাকা | EV-র % |
|---|---|---|
| পাঁচ বছরের পূর্বাভাসকৃত FCF-এর বর্তমান মূল্য | ৫৬৬.৭৮৬ | **৩৪.১৫%** |
| প্রান্তিক মূল্যের বর্তমান মূল্য | ১,০৯৩.০৭৫ | **৬৫.৮৫%** |
| **এন্টারপ্রাইজ মূল্য** | **১,৬৫৯.৮৬১** | ১০০.০০% |

**এই মূল্যায়নের দুই-তৃতীয়াংশ তৈরি হয়েছে এক লাইনের পাটিগণিত থেকে, যাতে দুটি অপর্যবেক্ষণযোগ্য হার আছে।** পাঁচ বছরের পূর্বাভাস — রাজস্ব নির্মাণ, মার্জিনের কাজ, মূলধনী ব্যয়ের সূচি, চলতি মূলধনের বিশ্লেষণ — উত্তরের এক-তৃতীয়াংশ।

এই অনুপাত এই উদাহরণের ত্রুটি নয়। মধ্য-কুড়ির বাট্টা হারে পাঁচ বছরের DCF এটিই করে। স্পষ্ট সময়কাল দশ বছর করলে TV-র অংশ কমে, কিন্তু কেবল এ কারণেই যে আপনি অনুমানটিকে আগে সরিয়ে এনেছেন; ছয় থেকে দশ বছর অর্থবহ কোনো অর্থেই পূর্বাভাস নয়।

### ধাপ ৬ — ইক্যুইটি সেতুবন্ধ

এন্টারপ্রাইজ মূল্য ব্যবসায় অর্থায়নকারী সবার। শেয়ারহোল্ডাররা পান ঋণদাতাদের পরে যা অবশিষ্ট থাকে:

$$\\text{নিট ঋণ} = 320.0 - 95.0 = 225.0$$
$$\\text{ইক্যুইটি মূল্য} = 1{,}659.861 - 225.0 = \\mathbf{1{,}434.861 \\text{ কোটি}}$$
$$\\text{শেয়ারপ্রতি মূল্য} = \\frac{1{,}434.861}{45.0} = \\mathbf{31.89 \\text{ টাকা}}$$

৩৪.০০ টাকা বাজারমূল্যের বিপরীতে তা **৬.২% অতিমূল্যায়িত।** একটি পরিচ্ছন্ন, রক্ষণীয়, দুই-দশমিক উত্তর।

### ধাপ ৭ — এবার একে ধ্বংস করুন

WACC ১৩% থেকে ১৭% এবং প্রান্তিক $g$ ৩% থেকে ৭% পর্যন্ত ঘোরান। দুটি পরিসরই সংকীর্ণ। প্রতিটি ঘরেই দুটি রক্ষণীয়।

**শেয়ারপ্রতি মূল্য (টাকা) — পাশে WACC, ওপরে $g$:**

| WACC \\ g | ৩.০% | ৪.০% | ৫.০% | ৬.০% | ৭.০% |
|---|---|---|---|---|---|
| **১৩.০%** | ৩৪.২৮ | ৩৭.৪৫ | ৪১.৪১ | ৪৬.৫১ | **৫৩.৩০** |
| **১৪.০%** | ৩০.৫৫ | ৩৩.০৬ | ৩৬.১২ | ৩৯.৯৪ | ৪৪.৮৬ |
| **১৫.০%** | ২৭.৪৫ | ২৯.৪৭ | **৩১.৮৯** | ৩৪.৮৪ | ৩৮.৫৪ |
| **১৬.০%** | ২৪.৮৩ | ২৬.৪৮ | ২৮.৪৩ | ৩০.৭৬ | ৩৩.৬২ |
| **১৭.০%** | **২২.৫৯** | ২৩.৯৬ | ২৫.৫৫ | ২৭.৪৩ | ২৯.৬৯ |

| | |
|---|---|
| সর্বনিম্ন শেয়ারপ্রতি মূল্য | **২২.৫৯ টাকা** |
| সর্বোচ্চ শেয়ারপ্রতি মূল্য | **৫৩.৩০ টাকা** |
| পরিসর গুণিতকে | **২.৩৬×** |
| বাজারমূল্য | ৩৪.০০ টাকা |
| "কিনুন" নির্দেশক ঘর | **২৫-এর মধ্যে ১০** |
| "বেচুন" নির্দেশক ঘর | **২৫-এর মধ্যে ১৫** |

**উঁচু কোণ কোম্পানিটিকে নিচু কোণের ২.৩৬ গুণ মূল্য দেয়।** ১০% ব্যবধান নয়। ৩০% নয়। **১৩৬% ব্যবধান**, দুটি হারকে যথাক্রমে চার ও চার পয়েন্ট সরিয়ে — একই ডিএসই নাম অনুসরণকারী যেকোনো দুই বিশ্লেষকের মতভেদের চেয়েও কম মতভেদে।

**দশটি ঘর বলে কিনুন। পনেরোটি বলে বেচুন।** গ্রিডটি সিদ্ধান্তকে সংকুচিত করে না। এটি প্রকাশ করে যে সিদ্ধান্তটি কখনোই নগদ প্রবাহে ছিল না।

### ধাপ ৮ — গ্রিড জুড়ে TV-র প্রাধান্য

প্রান্তিক মূল্যের দখল ঠিক সেখানেই শক্ত হয় যেখানে মূল্যায়ন সর্বোচ্চ:

| WACC | $g$ | EV-তে TV-র % | শেয়ারপ্রতি মূল্য |
|---|---|---|---|
| ১৩% | ৩% | ৬৬.২৩% | ৩৪.২৮ টাকা |
| ১৩% | ৫% | ৭১.৪২% | ৪১.৪১ টাকা |
| ১৩% | ৭% | **৭৭.২৫%** | **৫৩.৩০ টাকা** |
| ১৫% | ৩% | ৬১.১৯% | ২৭.৪৫ টাকা |
| ১৫% | ৫% | ৬৫.৮৫% | ৩১.৮৯ টাকা |
| ১৫% | ৭% | ৭১.০৭% | ৩৮.৫৪ টাকা |
| ১৭% | ৩% | **৫৬.৫৯%** | **২২.৫৯ টাকা** |
| ১৭% | ৫% | ৬০.৭৯% | ২৫.৫৫ টাকা |
| ১৭% | ৭% | ৬৫.৪৭% | ২৯.৬৯ টাকা |

**তেজি ঘরগুলোতেই পূর্বাভাস সবচেয়ে কম গুরুত্বপূর্ণ।** উঁচু কোণে মূল্যের ৭৭% প্রান্তিক — মডেলটি ৭৭% অনুমান ও ২৩% বিশ্লেষণ, আর ঘটনাচক্রে সেটিই সর্বোচ্চ লক্ষ্যমূল্যের ঘর। এটি কাকতালীয় নয়; এটিই কার্যপ্রণালী। বাট্টা হার কমানো ও চিরস্থায়ী প্রবৃদ্ধি বাড়ানো — দুটিই একই পদকে স্ফীত করে।

**যখনই কেউ অস্বাভাবিক উঁচু লক্ষ্যসহ DCF দেখান, EV-তে TV-র অংশ চেয়ে নিন।** সেটি উঁচু হবে, আর ঐ একটি সংখ্যাই বলে দেবে লক্ষ্যটি ব্যবসা সম্পর্কে নয়, প্রান্তিক অনুমান সম্পর্কে একটি বিবৃতি।

### ধাপ ৯ — উল্টো চালান, যা একমাত্র সৎ ব্যবহার

বাজার বলছে ৩৪.০০ টাকা। WACC ১৫.০০%-এ স্থির রেখে সেই $g$ বের করুন যা এটি তৈরি করে। গ্রিড থেকে $g$ = ৬%-এ ৩৪.৮৪ টাকা এবং $g$ = ৫%-এ ৩১.৮৯ টাকা, অর্থাৎ অন্তর্নিহিত $g$ প্রায় **৫.৪%**।

**এবার আপনার হাতে একটি বাস্তব প্রশ্ন:** *একটি বাংলাদেশি জেনেরিক ওষুধ উৎপাদকের জন্য ৫.৪% নামিক চিরস্থায়ী প্রবৃদ্ধি কি যুক্তিসঙ্গত?*

নামিক জিডিপি প্রবৃদ্ধির বিপরীতে ৫.৪% বোঝায় কোম্পানিটি অর্থনীতির অংশ হিসেবে ধীরে ধীরে সংকুচিত হচ্ছে — দাম নিয়ন্ত্রণের মুখে থাকা পরিণত জেনেরিক পোর্টফোলিওর জন্য বিশ্বাসযোগ্য, প্রকৃত রপ্তানি ফ্র্যাঞ্চাইজসম্পন্ন কোম্পানির জন্য অবিশ্বাস্য। **এটি ব্যবসা সম্পর্কে একটি প্রশ্ন, প্রমাণ দিয়ে যার উত্তর দেওয়া যায়, আর আপনি সেখানে পৌঁছেছেন DCF-এর ফলাফলকে উত্তর হিসেবে গণ্য করতে অস্বীকার করে।**

অধ্যায় ৭ একটি সমন্বিত চক্র স্কোর তৈরি করে ২০১০-এর ডিসেম্বরে চালিয়েছিল, আর ডিএসই ইতিহাসের সবচেয়ে ভয়াবহ ধসের কয়েক সপ্তাহ আগে ৮৫% বিনিয়োজিত থাকার আত্মবিশ্বাসী নির্দেশ পেয়েছিল। **এই অধ্যায়ের শিক্ষা ভিন্ন পোশাকে সেই একই শিক্ষা:** মডেলটি ভুল নয় কারণ পাটিগণিত ভুল। এটি ভুল কারণ এটি অনিশ্চয়তাকে সূক্ষ্মতায় রূপান্তরিত করে এবং আপনার দেওয়া অনুমানটিই দুই দশমিক পরিয়ে আপনাকে ফেরত দেয়।`,
    },

    formula: {
      en: `**Unlevered free cash flow** — cash available to all capital providers, before any payment to lenders:

$$FCF_t = EBIT_t(1-t_c) + D\\&A_t - \\text{Capex}_t - \\Delta NWC_t$$

Interest is absent by design. It is priced into the discount rate, not the cash flow.

**NOPAT** — net operating profit after tax, the unlevered earnings base:

$$NOPAT_t = EBIT_t \\times (1 - t_c)$$

**Change in net working capital**, driven by incremental revenue:

$$\\Delta NWC_t = (\\text{Rev}_t - \\text{Rev}_{t-1}) \\times w$$

where $w$ is the historical working capital intensity. A growing company always has $\\Delta NWC > 0$; this is the cash that growth consumes.

**Cost of equity, CAPM:**

$$k_e = r_f + \\beta \\times ERP$$

**Beta** — the regression slope of the security's returns on the market's:

$$\\beta = \\frac{\\text{Cov}(r_i, r_m)}{\\text{Var}(r_m)}$$

On the DSE, $r_m$ is a concentrated index (Chapter 1), and thin trading in $r_i$ biases the covariance toward zero. **Both effects corrupt this estimate; neither is visible in the output.**

**After-tax cost of debt** — the tax shield is real and belongs in the rate:

$$k_d^{after} = k_d \\times (1 - t_c)$$

**Weighted average cost of capital**, at market weights, not book:

$$WACC = \\frac{E}{E+D}k_e + \\frac{D}{E+D}k_d(1-t_c)$$

**Discount factor** for period $t$:

$$DF_t = \\frac{1}{(1+WACC)^t}$$

**Present value of the explicit forecast period:**

$$PV_{explicit} = \\sum_{t=1}^{n} FCF_t \\times DF_t = \\sum_{t=1}^{n} \\frac{FCF_t}{(1+WACC)^t}$$

**Terminal value, Gordon growth** — a perpetuity valued as at the end of year $n$:

$$TV_n = \\frac{FCF_n(1+g)}{WACC - g}, \\qquad g < WACC$$

The constraint $g < WACC$ is not a modelling nicety. At $g \\ge WACC$ the expression is undefined or negative, which is the arithmetic telling you that a company growing faster than its cost of capital forever is not a company.

**Present value of the terminal value** — discounted over $n$ periods, not $n+1$:

$$PV(TV_n) = \\frac{TV_n}{(1+WACC)^n}$$

**Enterprise value:**

$$EV = PV_{explicit} + PV(TV_n)$$

**Terminal value as a share of enterprise value** — compute this every time, and report it:

$$\\text{TV share} = \\frac{PV(TV_n)}{EV}$$

**If TV share exceeds ~75%, the model is no longer a forecast.** It is a perpetuity calculation with a five-year decoration.

**Net debt:**

$$ND = \\text{Total Debt} - \\text{Cash and Equivalents}$$

**Enterprise value to equity value bridge:**

$$E_{value} = EV - ND$$

**Value per share:**

$$V_{share} = \\frac{E_{value}}{\\text{Shares Outstanding}}$$

**Implied upside:**

$$\\text{Upside} = \\frac{V_{share}}{P_{market}} - 1$$

**Sensitivity of the terminal value to the spread.** Since $TV \\propto 1/(WACC-g)$, the elasticity is:

$$\\frac{\\partial TV / TV}{\\partial (WACC-g)} = \\frac{-1}{WACC-g}$$

At a spread of 0.10, a 1 percentage point narrowing raises TV by $1/0.10 \\times 0.01 = 10\\%$. **At a spread of 0.05 the same 1 point raises it by 20%.** The model becomes more violent exactly as the assumptions become more optimistic.

**Reverse DCF** — the only defensible use. Fix everything except one input, and solve for the value that reproduces the market price:

$$g_{implied} : \\quad \\frac{PV_{explicit} + \\dfrac{FCF_n(1+g)}{(WACC-g)(1+WACC)^n} - ND}{\\text{Shares}} = P_{market}$$

**This output is a claim about market expectations, not about value, and it is the only DCF output you can defend in a room.**`,
      bn: `**আনলিভার্ড মুক্ত নগদ প্রবাহ** — সব মূলধন সরবরাহকারীর জন্য উপলব্ধ নগদ, ঋণদাতাদের কোনো পরিশোধের আগে:

$$FCF_t = EBIT_t(1-t_c) + D\\&A_t - \\text{Capex}_t - \\Delta NWC_t$$

সুদ ইচ্ছাকৃতভাবে অনুপস্থিত। এর দাম বাট্টা হারে ধরা আছে, নগদ প্রবাহে নয়।

**NOPAT** — কর-পরবর্তী নিট পরিচালন মুনাফা, আনলিভার্ড আয়ভিত্তি:

$$NOPAT_t = EBIT_t \\times (1 - t_c)$$

**নিট চলতি মূলধনের পরিবর্তন**, বর্ধিত রাজস্ব দ্বারা চালিত:

$$\\Delta NWC_t = (\\text{Rev}_t - \\text{Rev}_{t-1}) \\times w$$

যেখানে $w$ ঐতিহাসিক চলতি মূলধন নিবিড়তা। বর্ধনশীল কোম্পানির সর্বদাই $\\Delta NWC > 0$; এটিই সেই নগদ যা প্রবৃদ্ধি খেয়ে ফেলে।

**ইক্যুইটির খরচ, CAPM:**

$$k_e = r_f + \\beta \\times ERP$$

**বিটা** — বাজারের রিটার্নের ওপর সিকিউরিটির রিটার্নের রিগ্রেশন ঢাল:

$$\\beta = \\frac{\\text{Cov}(r_i, r_m)}{\\text{Var}(r_m)}$$

ডিএসই-তে $r_m$ একটি কেন্দ্রীভূত সূচক (অধ্যায় ১), আর $r_i$-এর পাতলা লেনদেন সহভেদাঙ্ককে শূন্যের দিকে টানে। **দুটি প্রভাবই এই নির্ণয়কে দূষিত করে; কোনোটিই ফলাফলে দৃশ্যমান নয়।**

**কর-পরবর্তী ঋণের খরচ** — কর-ঢাল বাস্তব এবং তা হারেই থাকা উচিত:

$$k_d^{after} = k_d \\times (1 - t_c)$$

**মূলধনের ভারিত গড় খরচ**, বহিমূল্য নয়, বাজার-ওজনে:

$$WACC = \\frac{E}{E+D}k_e + \\frac{D}{E+D}k_d(1-t_c)$$

**সময়কাল $t$-এর বাট্টা গুণক:**

$$DF_t = \\frac{1}{(1+WACC)^t}$$

**স্পষ্ট পূর্বাভাস সময়কালের বর্তমান মূল্য:**

$$PV_{explicit} = \\sum_{t=1}^{n} FCF_t \\times DF_t = \\sum_{t=1}^{n} \\frac{FCF_t}{(1+WACC)^t}$$

**প্রান্তিক মূল্য, Gordon প্রবৃদ্ধি** — $n$ বছরের শেষে মূল্যায়িত একটি চিরস্থায়ী ধারা:

$$TV_n = \\frac{FCF_n(1+g)}{WACC - g}, \\qquad g < WACC$$

$g < WACC$ শর্তটি মডেলিংয়ের কোনো শৌখিনতা নয়। $g \\ge WACC$ হলে রাশিটি অসংজ্ঞায়িত বা ঋণাত্মক, যা পাটিগণিতের ভাষায় বলছে — মূলধনের খরচের চেয়ে চিরকাল দ্রুত বাড়া কোনো কোম্পানি কোম্পানি নয়।

**প্রান্তিক মূল্যের বর্তমান মূল্য** — $n+1$ নয়, $n$ সময়কালে বাট্টাকৃত:

$$PV(TV_n) = \\frac{TV_n}{(1+WACC)^n}$$

**এন্টারপ্রাইজ মূল্য:**

$$EV = PV_{explicit} + PV(TV_n)$$

**এন্টারপ্রাইজ মূল্যে প্রান্তিক মূল্যের অংশ** — প্রতিবার গণনা করুন এবং প্রকাশ করুন:

$$\\text{TV অংশ} = \\frac{PV(TV_n)}{EV}$$

**TV অংশ ~৭৫% ছাড়ালে মডেলটি আর পূর্বাভাস নয়।** এটি পাঁচ বছরের অলংকারসহ একটি চিরস্থায়ী ধারার গণনা।

**নিট ঋণ:**

$$ND = \\text{মোট ঋণ} - \\text{নগদ ও সমতুল্য}$$

**EV থেকে ইক্যুইটি মূল্যের সেতুবন্ধ:**

$$E_{value} = EV - ND$$

**শেয়ারপ্রতি মূল্য:**

$$V_{share} = \\frac{E_{value}}{\\text{বকেয়া শেয়ার}}$$

**অন্তর্নিহিত উর্ধ্বমুখিতা:**

$$\\text{Upside} = \\frac{V_{share}}{P_{market}} - 1$$

**ব্যবধানের প্রতি প্রান্তিক মূল্যের সংবেদনশীলতা।** যেহেতু $TV \\propto 1/(WACC-g)$, স্থিতিস্থাপকতা:

$$\\frac{\\partial TV / TV}{\\partial (WACC-g)} = \\frac{-1}{WACC-g}$$

০.১০ ব্যবধানে ১ শতাংশ পয়েন্ট সংকোচন TV বাড়ায় $1/0.10 \\times 0.01 = 10\\%$। **০.০৫ ব্যবধানে ঐ একই ১ পয়েন্ট বাড়ায় ২০%।** অনুমান যত আশাবাদী হয়, মডেল ঠিক ততই প্রচণ্ড হয়ে ওঠে।

**রিভার্স DCF** — একমাত্র রক্ষণীয় ব্যবহার। একটি ইনপুট ছাড়া সব স্থির রেখে সেই মান বের করুন যা বাজারমূল্য পুনরুৎপাদন করে:

$$g_{implied} : \\quad \\frac{PV_{explicit} + \\dfrac{FCF_n(1+g)}{(WACC-g)(1+WACC)^n} - ND}{\\text{শেয়ার}} = P_{market}$$

**এই ফলাফল বাজারের প্রত্যাশা সম্পর্কে একটি দাবি, মূল্য সম্পর্কে নয়, এবং এটিই একমাত্র DCF ফলাফল যা আপনি একটি ঘরে দাঁড়িয়ে রক্ষা করতে পারবেন।**`,
    },

    manual: {
      en: `### Full five-year DCF — NOVOPHARMA

**Inputs.** Base revenue BDT 1,200.0 crore; EBIT margin 18.0%; tax 22.5%; D&A 4.0% of revenue; capex 6.0% of revenue; incremental NWC 15.0% of revenue growth; $r_f$ 11.50%; ERP 6.00%; $\\beta$ 0.90; pre-tax $k_d$ 12.00%; E/V 75%; terminal $g$ 5.00%; debt BDT 320.0 crore; cash BDT 95.0 crore; shares 45.0 crore; market price BDT 34.00.

---

**Step 1 — Cost of equity (CAPM):**
$$k_e = 11.50\\% + 0.90 \\times 6.00\\% = 11.50\\% + 5.40\\% = 16.90\\%$$

**Step 2 — After-tax cost of debt:**
$$k_d(1-t) = 12.00\\% \\times (1 - 0.225) = 12.00\\% \\times 0.775 = 9.30\\%$$

**Step 3 — WACC:**
$$WACC = 0.75 \\times 16.90\\% + 0.25 \\times 9.30\\% = 12.675\\% + 2.325\\% = 15.00\\%$$

---

**Step 4 — Revenue schedule** at 12%, 11%, 10%, 9%, 8%:
$$\\text{Y1} = 1{,}200.00 \\times 1.12 = 1{,}344.00$$
$$\\text{Y2} = 1{,}344.00 \\times 1.11 = 1{,}491.84$$
$$\\text{Y3} = 1{,}491.84 \\times 1.10 = 1{,}641.02$$
$$\\text{Y4} = 1{,}641.02 \\times 1.09 = 1{,}788.72$$
$$\\text{Y5} = 1{,}788.72 \\times 1.08 = 1{,}931.81$$

**Step 5 — Year 1 free cash flow, fully worked:**
$$EBIT = 1{,}344.00 \\times 0.18 = 241.920$$
$$NOPAT = 241.920 \\times 0.775 = 187.488$$
$$D\\&A = 1{,}344.00 \\times 0.04 = 53.760$$
$$\\text{Capex} = 1{,}344.00 \\times 0.06 = 80.640$$
$$\\Delta NWC = (1{,}344.00 - 1{,}200.00) \\times 0.15 = 144.00 \\times 0.15 = 21.600$$
$$FCF_1 = 187.488 + 53.760 - 80.640 - 21.600 = \\mathbf{139.008}$$

**Step 6 — Years 2 to 5, same construction:**

| BDT crore | Y2 | Y3 | Y4 | Y5 |
|---|---|---|---|---|
| EBIT | 268.531 | 295.384 | 321.969 | 347.726 |
| NOPAT | 208.112 | 228.923 | 249.526 | 269.488 |
| add D&A | 59.674 | 65.641 | 71.549 | 77.273 |
| less Capex | 89.510 | 98.461 | 107.323 | 115.909 |
| less ΔNWC | 22.176 | 22.378 | 22.154 | 21.465 |
| **FCF** | **156.099** | **173.725** | **191.598** | **209.387** |

---

**Step 7 — Discount factors at 15.00%.** Every one, shown:

$$DF_1 = \\frac{1}{1.15^1} = \\frac{1}{1.150000} = 0.869565$$
$$DF_2 = \\frac{1}{1.15^2} = \\frac{1}{1.322500} = 0.756144$$
$$DF_3 = \\frac{1}{1.15^3} = \\frac{1}{1.520875} = 0.657516$$
$$DF_4 = \\frac{1}{1.15^4} = \\frac{1}{1.749006} = 0.571753$$
$$DF_5 = \\frac{1}{1.15^5} = \\frac{1}{2.011357} = 0.497177$$

**Step 8 — Present values:**

$$PV_1 = 139.008 \\times 0.869565 = 120.877$$
$$PV_2 = 156.099 \\times 0.756144 = 118.033$$
$$PV_3 = 173.725 \\times 0.657516 = 114.227$$
$$PV_4 = 191.598 \\times 0.571753 = 109.547$$
$$PV_5 = 209.387 \\times 0.497177 = 104.102$$

**Step 9 — Sum of the explicit period:**
$$PV_{explicit} = 120.877 + 118.033 + 114.227 + 109.547 + 104.102 = \\mathbf{566.786}$$

**Observe the direction of travel.** Cash flow rises 51% across the five years; present value falls 14%. At a 15% discount rate the discounting wins every year. **The company must grow faster than 15% for a year to be worth more than the year before it, and it does not.**

---

**Step 10 — Terminal value (Gordon):**
$$TV_5 = \\frac{FCF_5 (1+g)}{WACC - g} = \\frac{209.387 \\times 1.05}{0.15 - 0.05} = \\frac{219.856}{0.10} = \\mathbf{2{,}198.565}$$

**Step 11 — Discount the terminal value over five periods:**
$$PV(TV_5) = \\frac{2{,}198.565}{1.15^5} = \\frac{2{,}198.565}{2.011357} = \\mathbf{1{,}093.075}$$

**Step 12 — Enterprise value:**
$$EV = 566.786 + 1{,}093.075 = \\mathbf{1{,}659.861 \\text{ crore}}$$

**Step 13 — Terminal value as a percentage of enterprise value.** This is the step almost every retail DCF omits, and it is the step this chapter exists for:

$$\\text{TV share} = \\frac{1{,}093.075}{1{,}659.861} = 0.6585 = \\mathbf{65.85\\%}$$

| Component | BDT crore | Share of EV |
|---|---|---|
| PV of five forecast years | 566.786 | 34.15% |
| PV of terminal value | 1,093.075 | **65.85%** |
| **Enterprise value** | **1,659.861** | 100.00% |

**Two-thirds of the valuation came from Steps 10 and 11.** Steps 4 through 9 — every hour of forecasting — produced the other third.

---

**Step 14 — Net debt:**
$$ND = 320.0 - 95.0 = 225.0$$

**Step 15 — Equity value:**
$$E_{value} = 1{,}659.861 - 225.0 = \\mathbf{1{,}434.861 \\text{ crore}}$$

**Step 16 — Value per share:**
$$V_{share} = \\frac{1{,}434.861}{45.0} = \\mathbf{BDT\\ 31.89}$$

**Step 17 — Against the market:**
$$\\text{Upside} = \\frac{31.89}{34.00} - 1 = -0.062 = \\mathbf{-6.2\\%}$$

**Verdict as the model states it: modestly overvalued, do not buy.** Now test whether that verdict survives contact with the uncertainty in its own inputs.

---

### The sensitivity grid

Recompute the entire model at each WACC (the explicit-period PVs change too, not just the terminal value):

**Value per share (BDT):**

| WACC \\ g | 3.0% | 4.0% | 5.0% | 6.0% | 7.0% |
|---|---|---|---|---|---|
| **13.0%** | 34.28 | 37.45 | 41.41 | 46.51 | **53.30** |
| **14.0%** | 30.55 | 33.06 | 36.12 | 39.94 | 44.86 |
| **15.0%** | 27.45 | 29.47 | **31.89** | 34.84 | 38.54 |
| **16.0%** | 24.83 | 26.48 | 28.43 | 30.76 | 33.62 |
| **17.0%** | **22.59** | 23.96 | 25.55 | 27.43 | 29.69 |

**Read three things from this grid.**

**First, the range.**
$$\\frac{53.30}{22.59} = 2.36\\times$$

The optimistic corner values the company at more than twice the pessimistic corner. Neither corner is unreasonable. A WACC of 13% is what you get from an ERP of 4.5%; a WACC of 17% is what you get from an ERP of 8% and a beta of 1.0. **Both are numbers a competent Bangladeshi analyst would defend in writing.**

**Second, the verdict count.** Against BDT 34.00:

| | Count |
|---|---|
| Cells implying BUY (value > BDT 34.00) | **10 of 25** |
| Cells implying SELL (value < BDT 34.00) | **15 of 25** |

**The grid does not converge on a recommendation. It contains both recommendations.** A 40/60 split is not a signal; it is a coin with a slight tilt.

**Third, the asymmetry.** Move one point in the favourable direction on each axis, from (15%, 5%) to (14%, 6%):
$$31.89 \\rightarrow 39.94, \\quad \\text{a } +25.2\\% \\text{ change}$$

Move one point the other way, to (16%, 4%):
$$31.89 \\rightarrow 26.48, \\quad \\text{a } -17.0\\% \\text{ change}$$

**The upside move is larger than the downside move from the same-sized input change.** That is the $1/(WACC-g)$ term: as the spread narrows, the derivative steepens. **A DCF is structurally biased toward producing large numbers when you are feeling optimistic**, and it will not warn you.

---

### TV dominance where it matters most

| WACC | $g$ | Spread | TV % of EV | Per share |
|---|---|---|---|---|
| 17% | 3% | 0.14 | 56.59% | BDT 22.59 |
| 15% | 5% | 0.10 | 65.85% | BDT 31.89 |
| 13% | 7% | 0.06 | **77.25%** | **BDT 53.30** |

**Follow the spread column.** As the spread narrows from 0.14 to 0.06, the terminal value's share climbs from 57% to 77% and the answer more than doubles. **The most bullish output is also the output that contains the least analysis.**

Any DCF whose target price is well above the market should be interrogated with exactly one question: *what is the TV share of EV, and what spread produced it?*

---

### Reverse the model

The market price is BDT 34.00. Hold everything except $g$ at base. From the grid at WACC 15%: BDT 31.89 at $g$=5% and BDT 34.84 at $g$=6%. Interpolating linearly:

$$g_{implied} \\approx 5\\% + 1\\% \\times \\frac{34.00 - 31.89}{34.84 - 31.89} = 5\\% + 1\\% \\times \\frac{2.11}{2.95} \\approx \\mathbf{5.7\\%}$$

Holding $g$ at 5% and solving for WACC instead: BDT 34.84 sits at (15%, 6%) and BDT 36.12 at (14%, 5%), so the market price at $g$=5% implies a WACC of roughly **14.3%**.

**Two ways of stating the same market expectation:** either the market discounts NOVOPHARMA at 14.3%, or it believes the company grows at 5.7% in perpetuity. Both are checkable claims. Neither requires you to believe your own point estimate.

**The discipline established here:** never publish a DCF value without the TV share of EV and a sensitivity grid beside it. **A DCF is a discipline for making assumptions explicit, not a precision instrument** — and the single number it produces is worth exactly as much as the least defensible input that went into it.`,
      bn: `### সম্পূর্ণ পাঁচ বছরের DCF — NOVOPHARMA

**ইনপুট।** ভিত্তি রাজস্ব ১,২০০.০ কোটি টাকা; EBIT মার্জিন ১৮.০%; কর ২২.৫%; D&A রাজস্বের ৪.০%; মূলধনী ব্যয় রাজস্বের ৬.০%; বর্ধিত NWC রাজস্ব বৃদ্ধির ১৫.০%; $r_f$ ১১.৫০%; ERP ৬.০০%; $\\beta$ ০.৯০; কর-পূর্ব $k_d$ ১২.০০%; E/V ৭৫%; প্রান্তিক $g$ ৫.০০%; ঋণ ৩২০.০ কোটি টাকা; নগদ ৯৫.০ কোটি টাকা; শেয়ার ৪৫.০ কোটি; বাজারমূল্য ৩৪.০০ টাকা।

---

**ধাপ ১ — ইক্যুইটির খরচ (CAPM):**
$$k_e = 11.50\\% + 0.90 \\times 6.00\\% = 11.50\\% + 5.40\\% = 16.90\\%$$

**ধাপ ২ — কর-পরবর্তী ঋণের খরচ:**
$$k_d(1-t) = 12.00\\% \\times (1 - 0.225) = 12.00\\% \\times 0.775 = 9.30\\%$$

**ধাপ ৩ — WACC:**
$$WACC = 0.75 \\times 16.90\\% + 0.25 \\times 9.30\\% = 12.675\\% + 2.325\\% = 15.00\\%$$

---

**ধাপ ৪ — রাজস্ব সূচি**, ১২%, ১১%, ১০%, ৯%, ৮% হারে:
$$\\text{Y1} = 1{,}200.00 \\times 1.12 = 1{,}344.00$$
$$\\text{Y2} = 1{,}344.00 \\times 1.11 = 1{,}491.84$$
$$\\text{Y3} = 1{,}491.84 \\times 1.10 = 1{,}641.02$$
$$\\text{Y4} = 1{,}641.02 \\times 1.09 = 1{,}788.72$$
$$\\text{Y5} = 1{,}788.72 \\times 1.08 = 1{,}931.81$$

**ধাপ ৫ — প্রথম বছরের মুক্ত নগদ প্রবাহ, সম্পূর্ণ:**
$$EBIT = 1{,}344.00 \\times 0.18 = 241.920$$
$$NOPAT = 241.920 \\times 0.775 = 187.488$$
$$D\\&A = 1{,}344.00 \\times 0.04 = 53.760$$
$$\\text{Capex} = 1{,}344.00 \\times 0.06 = 80.640$$
$$\\Delta NWC = (1{,}344.00 - 1{,}200.00) \\times 0.15 = 21.600$$
$$FCF_1 = 187.488 + 53.760 - 80.640 - 21.600 = \\mathbf{139.008}$$

**ধাপ ৬ — Y2 থেকে Y5, একই গঠন:**

| কোটি টাকা | Y2 | Y3 | Y4 | Y5 |
|---|---|---|---|---|
| EBIT | ২৬৮.৫৩১ | ২৯৫.৩৮৪ | ৩২১.৯৬৯ | ৩৪৭.৭২৬ |
| NOPAT | ২০৮.১১২ | ২২৮.৯২৩ | ২৪৯.৫২৬ | ২৬৯.৪৮৮ |
| যোগ D&A | ৫৯.৬৭৪ | ৬৫.৬৪১ | ৭১.৫৪৯ | ৭৭.২৭৩ |
| বিয়োগ মূলধনী ব্যয় | ৮৯.৫১০ | ৯৮.৪৬১ | ১০৭.৩২৩ | ১১৫.৯০৯ |
| বিয়োগ ΔNWC | ২২.১৭৬ | ২২.৩৭৮ | ২২.১৫৪ | ২১.৪৬৫ |
| **FCF** | **১৫৬.০৯৯** | **১৭৩.৭২৫** | **১৯১.৫৯৮** | **২০৯.৩৮৭** |

---

**ধাপ ৭ — ১৫.০০%-এ বাট্টা গুণক।** প্রতিটি, দেখানো হলো:

$$DF_1 = \\frac{1}{1.15^1} = \\frac{1}{1.150000} = 0.869565$$
$$DF_2 = \\frac{1}{1.15^2} = \\frac{1}{1.322500} = 0.756144$$
$$DF_3 = \\frac{1}{1.15^3} = \\frac{1}{1.520875} = 0.657516$$
$$DF_4 = \\frac{1}{1.15^4} = \\frac{1}{1.749006} = 0.571753$$
$$DF_5 = \\frac{1}{1.15^5} = \\frac{1}{2.011357} = 0.497177$$

**ধাপ ৮ — বর্তমান মূল্য:**

$$PV_1 = 139.008 \\times 0.869565 = 120.877$$
$$PV_2 = 156.099 \\times 0.756144 = 118.033$$
$$PV_3 = 173.725 \\times 0.657516 = 114.227$$
$$PV_4 = 191.598 \\times 0.571753 = 109.547$$
$$PV_5 = 209.387 \\times 0.497177 = 104.102$$

**ধাপ ৯ — স্পষ্ট সময়কালের যোগফল:**
$$PV_{explicit} = 120.877 + 118.033 + 114.227 + 109.547 + 104.102 = \\mathbf{566.786}$$

**গতিপথের দিকটি লক্ষ করুন।** পাঁচ বছরে নগদ প্রবাহ ৫১% বাড়ে; বর্তমান মূল্য ১৪% কমে। ১৫% বাট্টা হারে প্রতি বছরই বাট্টা জেতে। **আগের বছরের চেয়ে একটি বছরের মূল্য বেশি হতে হলে কোম্পানিকে ১৫%-এর বেশি হারে বাড়তে হবে, আর সে বাড়ে না।**

---

**ধাপ ১০ — প্রান্তিক মূল্য (Gordon):**
$$TV_5 = \\frac{FCF_5 (1+g)}{WACC - g} = \\frac{209.387 \\times 1.05}{0.15 - 0.05} = \\frac{219.856}{0.10} = \\mathbf{2{,}198.565}$$

**ধাপ ১১ — পাঁচ সময়কালে প্রান্তিক মূল্য বাট্টা:**
$$PV(TV_5) = \\frac{2{,}198.565}{1.15^5} = \\frac{2{,}198.565}{2.011357} = \\mathbf{1{,}093.075}$$

**ধাপ ১২ — এন্টারপ্রাইজ মূল্য:**
$$EV = 566.786 + 1{,}093.075 = \\mathbf{1{,}659.861 \\text{ কোটি}}$$

**ধাপ ১৩ — এন্টারপ্রাইজ মূল্যের শতাংশ হিসেবে প্রান্তিক মূল্য।** প্রায় প্রতিটি খুচরা DCF এই ধাপটি বাদ দেয়, আর এই অধ্যায় এই ধাপের জন্যই:

$$\\text{TV অংশ} = \\frac{1{,}093.075}{1{,}659.861} = 0.6585 = \\mathbf{65.85\\%}$$

| উপাদান | কোটি টাকা | EV-র অংশ |
|---|---|---|
| পাঁচ পূর্বাভাস বছরের বর্তমান মূল্য | ৫৬৬.৭৮৬ | ৩৪.১৫% |
| প্রান্তিক মূল্যের বর্তমান মূল্য | ১,০৯৩.০৭৫ | **৬৫.৮৫%** |
| **এন্টারপ্রাইজ মূল্য** | **১,৬৫৯.৮৬১** | ১০০.০০% |

**মূল্যায়নের দুই-তৃতীয়াংশ এসেছে ধাপ ১০ ও ১১ থেকে।** ধাপ ৪ থেকে ৯ — পূর্বাভাসের প্রতিটি ঘণ্টা — বাকি এক-তৃতীয়াংশ তৈরি করেছে।

---

**ধাপ ১৪ — নিট ঋণ:**
$$ND = 320.0 - 95.0 = 225.0$$

**ধাপ ১৫ — ইক্যুইটি মূল্য:**
$$E_{value} = 1{,}659.861 - 225.0 = \\mathbf{1{,}434.861 \\text{ কোটি}}$$

**ধাপ ১৬ — শেয়ারপ্রতি মূল্য:**
$$V_{share} = \\frac{1{,}434.861}{45.0} = \\mathbf{31.89 \\text{ টাকা}}$$

**ধাপ ১৭ — বাজারের বিপরীতে:**
$$\\text{Upside} = \\frac{31.89}{34.00} - 1 = -0.062 = \\mathbf{-6.2\\%}$$

**মডেলের ভাষায় রায়: সামান্য অতিমূল্যায়িত, কিনবেন না।** এবার পরীক্ষা করুন এই রায় নিজের ইনপুটের অনিশ্চয়তার সংস্পর্শে টিকে থাকে কি না।

---

### সংবেদনশীলতা গ্রিড

প্রতিটি WACC-তে পুরো মডেল পুনর্গণনা করুন (কেবল প্রান্তিক মূল্য নয়, স্পষ্ট সময়কালের বর্তমান মূল্যও বদলায়):

**শেয়ারপ্রতি মূল্য (টাকা):**

| WACC \\ g | ৩.০% | ৪.০% | ৫.০% | ৬.০% | ৭.০% |
|---|---|---|---|---|---|
| **১৩.০%** | ৩৪.২৮ | ৩৭.৪৫ | ৪১.৪১ | ৪৬.৫১ | **৫৩.৩০** |
| **১৪.০%** | ৩০.৫৫ | ৩৩.০৬ | ৩৬.১২ | ৩৯.৯৪ | ৪৪.৮৬ |
| **১৫.০%** | ২৭.৪৫ | ২৯.৪৭ | **৩১.৮৯** | ৩৪.৮৪ | ৩৮.৫৪ |
| **১৬.০%** | ২৪.৮৩ | ২৬.৪৮ | ২৮.৪৩ | ৩০.৭৬ | ৩৩.৬২ |
| **১৭.০%** | **২২.৫৯** | ২৩.৯৬ | ২৫.৫৫ | ২৭.৪৩ | ২৯.৬৯ |

**এই গ্রিড থেকে তিনটি জিনিস পড়ুন।**

**প্রথম, পরিসর।**
$$\\frac{53.30}{22.59} = 2.36\\times$$

আশাবাদী কোণ কোম্পানিটিকে নৈরাশ্যবাদী কোণের দ্বিগুণেরও বেশি মূল্য দেয়। কোনো কোণই অযৌক্তিক নয়। ১৩% WACC পাওয়া যায় ৪.৫% ERP থেকে; ১৭% WACC পাওয়া যায় ৮% ERP ও ১.০ বিটা থেকে। **দুটিই এমন সংখ্যা যা একজন যোগ্য বাংলাদেশি বিশ্লেষক লিখিতভাবে রক্ষা করবেন।**

**দ্বিতীয়, রায়ের গণনা।** ৩৪.০০ টাকার বিপরীতে:

| | সংখ্যা |
|---|---|
| "কিনুন" নির্দেশক ঘর (মূল্য > ৩৪.০০ টাকা) | **২৫-এর মধ্যে ১০** |
| "বেচুন" নির্দেশক ঘর (মূল্য < ৩৪.০০ টাকা) | **২৫-এর মধ্যে ১৫** |

**গ্রিডটি কোনো একটি সুপারিশে মিলিত হয় না। এতে দুটি সুপারিশই আছে।** ৪০/৬০ বিভাজন কোনো সংকেত নয়; এটি সামান্য হেলে থাকা একটি মুদ্রা।

**তৃতীয়, অসমতা।** প্রতিটি অক্ষে এক পয়েন্ট অনুকূল দিকে সরান, (১৫%, ৫%) থেকে (১৪%, ৬%)-এ:
$$31.89 \\rightarrow 39.94, \\quad +25.2\\% \\text{ পরিবর্তন}$$

উল্টো দিকে এক পয়েন্ট, (১৬%, ৪%)-এ:
$$31.89 \\rightarrow 26.48, \\quad -17.0\\% \\text{ পরিবর্তন}$$

**একই মাপের ইনপুট পরিবর্তনে ঊর্ধ্বমুখী নড়াচড়া নিম্নমুখীর চেয়ে বড়।** এটিই $1/(WACC-g)$ পদ: ব্যবধান সংকুচিত হলে অন্তরকলজ খাড়া হয়। **আপনি আশাবাদী থাকলে DCF কাঠামোগতভাবেই বড় সংখ্যা তৈরির দিকে পক্ষপাতদুষ্ট**, এবং সে আপনাকে সতর্ক করবে না।

---

### যেখানে TV-র প্রাধান্য সবচেয়ে বেশি

| WACC | $g$ | ব্যবধান | EV-তে TV % | শেয়ারপ্রতি |
|---|---|---|---|---|
| ১৭% | ৩% | ০.১৪ | ৫৬.৫৯% | ২২.৫৯ টাকা |
| ১৫% | ৫% | ০.১০ | ৬৫.৮৫% | ৩১.৮৯ টাকা |
| ১৩% | ৭% | ০.০৬ | **৭৭.২৫%** | **৫৩.৩০ টাকা** |

**ব্যবধানের কলামটি অনুসরণ করুন।** ব্যবধান ০.১৪ থেকে ০.০৬-এ নামলে প্রান্তিক মূল্যের অংশ ৫৭% থেকে ৭৭%-এ ওঠে আর উত্তরটি দ্বিগুণেরও বেশি হয়। **সবচেয়ে তেজি ফলাফলেই সবচেয়ে কম বিশ্লেষণ থাকে।**

যে DCF-এর লক্ষ্যমূল্য বাজারের অনেক ওপরে, তাকে ঠিক একটি প্রশ্ন করুন: *EV-তে TV-র অংশ কত, এবং কোন ব্যবধান তা তৈরি করেছে?*

---

### মডেল উল্টে চালান

বাজারমূল্য ৩৪.০০ টাকা। $g$ ছাড়া সব ভিত্তিতে রাখুন। WACC ১৫%-এর গ্রিড থেকে: $g$=৫%-এ ৩১.৮৯ টাকা এবং $g$=৬%-এ ৩৪.৮৪ টাকা। রৈখিক অন্তর্বেশনে:

$$g_{implied} \\approx 5\\% + 1\\% \\times \\frac{34.00 - 31.89}{34.84 - 31.89} = 5\\% + 1\\% \\times \\frac{2.11}{2.95} \\approx \\mathbf{5.7\\%}$$

বরং $g$ ৫%-এ রেখে WACC বের করলে: (১৫%, ৬%)-এ ৩৪.৮৪ টাকা ও (১৪%, ৫%)-এ ৩৬.১২ টাকা, তাই $g$=৫%-এ বাজারমূল্য প্রায় **১৪.৩%** WACC নির্দেশ করে।

**একই বাজার-প্রত্যাশা বলার দুটি উপায়:** হয় বাজার NOVOPHARMA-কে ১৪.৩%-এ বাট্টা দিচ্ছে, নয়তো বিশ্বাস করছে কোম্পানিটি চিরকাল ৫.৭% হারে বাড়বে। দুটিই যাচাইযোগ্য দাবি। কোনোটিই আপনার নিজের বিন্দু-নির্ণয়ে বিশ্বাস দাবি করে না।

**এখানে প্রতিষ্ঠিত শৃঙ্খলা:** EV-তে TV-র অংশ ও পাশে একটি সংবেদনশীলতা গ্রিড ছাড়া কখনো কোনো DCF মূল্য প্রকাশ করবেন না। **DCF হলো অনুমান স্পষ্ট করার শৃঙ্খলা, কোনো নিখুঁত যন্ত্র নয়** — আর এটি যে একক সংখ্যাটি তৈরি করে, তার মূল্য ঠিক ততটুকুই যতটুকু তাতে ঢোকা সবচেয়ে দুর্বল ইনপুটটির।`,
    },

    excel: {
      en: `\`\`\`
DCF — NOVOPHARMA (DSE PHARMA ARCHETYPE)

       A                                    B
 3   Base-year Revenue (BDT crore)        1200
 4   EBIT Margin                          0.18
 5   Tax Rate                             0.225
 6   D&A % of Revenue                     0.04
 7   Capex % of Revenue                   0.06
 8   Incremental NWC % of Delta Revenue   0.15

10   — COST OF CAPITAL —
11   Risk-free (10y BGTB)                 0.115
12   Equity Risk Premium                  0.06
13   Beta vs DSEX                         0.90
14   Cost of Equity (CAPM)         =B11+B13*B12
15   Pre-tax Cost of Debt                 0.12
16   After-tax Cost of Debt        =B15*(1-B5)
17   Equity Weight E/V                    0.75
18   Debt Weight D/V               =1-B17
19   WACC                          =B17*B14+B18*B16
20   Terminal Growth g                    0.05

       A                    B          C          D          E          F
22   Year                   1          2          3          4          5
23   Revenue Growth      0.12       0.11       0.10       0.09       0.08
24   Revenue        =B3*(1+B23)  =B24*(1+C23)  =C24*(1+D23)  =D24*(1+E23)  =E24*(1+F23)
25   EBIT           =B24*$B$4    =C24*$B$4     ...
26   NOPAT          =B25*(1-$B$5)
27   add D&A        =B24*$B$6
28   less Capex     =B24*$B$7
29   less d NWC     =(B24-$B$3)*$B$8   =(C24-B24)*$B$8   ...
30   FREE CASH FLOW =B26+B27-B28-B29
31   Discount Factor=1/(1+$B$19)^B$22
32   PV of FCF      =B30*B31

34   Sum PV of Explicit FCF        =SUM(B32:F32)
35   Terminal Value at Y5 (Gordon) =F30*(1+B20)/(B19-B20)
36   PV of Terminal Value          =B35/(1+B19)^5
37   ENTERPRISE VALUE              =B34+B36
38   TV as % of EV                 =B36/B37
39   Total Debt                          320
40   Cash & Equivalents                   95
41   Net Debt                      =B39-B40
42   EQUITY VALUE                  =B37-B41
43   Shares Outstanding (crore)           45
44   VALUE PER SHARE (BDT)         =B42/B43
45   Market Price (BDT)                   34
46   Upside / (Downside)           =B44/B45-1

48   SENSITIVITY — VALUE PER SHARE (BDT)
49   WACC \\ g            0.03       0.04       0.05       0.06       0.07
50   0.13
51   0.14
52   0.15
53   0.16
54   0.17

     Cell B50, filled right and down across B50:F54:
     =(NPV($A50,$B$30:$F$30)
       + $F$30*(1+B$49)/($A50-B$49)/(1+$A50)^5
       - $B$41)/$B$43

56   Lowest Value per Share        =MIN(B50:F54)
57   Highest Value per Share       =MAX(B50:F54)
58   Range as a Multiple           =B57/B56
59   Cells implying BUY            =COUNTIF(B50:F54,">"&B45)
60   Cells implying SELL           =25-B59
\`\`\`

**Row 38 is the row this whole sheet exists to display.** Not row 44. Everyone builds rows 22 through 44 and then quotes row 44 in a research note. **Row 38 tells you how much of row 44 you actually forecast**, and at 65.85% the answer is: about a third of it.

**The mixed-anchor pattern in the sensitivity block is the only technically fiddly part.** In \`$A50\` the column is locked and the row is not, so filling right holds the WACC; in \`B$49\` the row is locked and the column is not, so filling down holds $g$. Get these two backwards and the grid fills with plausible-looking numbers that are computing the wrong thing, silently. **Check one corner by hand before you trust any of it** — F54 should read 29.69.

**Note that each grid cell recomputes the entire model, not just the terminal value.** \`NPV($A50,...)\` re-discounts the five explicit cash flows at that row's WACC. A grid that varies WACC only in the terminal value understates the sensitivity and is the more common error, because it looks like it works.

**Row 59 is the number to put in front of anyone quoting a target price.** Ten of twenty-five cells say buy. If a recommendation survives only in 40% of a defensible assumption space, it is not a recommendation.

**One adjustment for Bangladeshi accounts.** Row 5's tax rate should be the *effective* rate from the tax reconciliation note, not the statutory listed-company rate. Many DSE companies carry tax holidays, accelerated depreciation on new plant, or disputed assessments, and the effective rate can sit ten points below statutory for years before reverting. **Using the statutory rate when a holiday is expiring is the fastest way to overstate FCF for exactly as long as it takes for the market to notice.**

**To extend this into a screen:** hold rows 11 to 20 constant across a sector, vary only rows 3 to 8 per company, and compare row 38. Companies whose TV share exceeds 75% are companies whose valuation you cannot defend on forecast, regardless of what row 44 says.`,
      bn: `\`\`\`
DCF — NOVOPHARMA (ডিএসই ওষুধ আদর্শরূপ)

       A                                    B
 3   ভিত্তি বছরের রাজস্ব (কোটি টাকা)      1200
 4   EBIT মার্জিন                         0.18
 5   কর হার                               0.225
 6   D&A রাজস্বের %                       0.04
 7   মূলধনী ব্যয় রাজস্বের %               0.06
 8   বর্ধিত NWC, রাজস্ব বৃদ্ধির %          0.15

10   — মূলধনের খরচ —
11   ঝুঁকিমুক্ত হার (১০ বছরের BGTB)       0.115
12   ইক্যুইটি ঝুঁকি প্রিমিয়াম             0.06
13   DSEX-এর বিপরীতে বিটা                 0.90
14   ইক্যুইটির খরচ (CAPM)          =B11+B13*B12
15   কর-পূর্ব ঋণের খরচ                    0.12
16   কর-পরবর্তী ঋণের খরচ           =B15*(1-B5)
17   ইক্যুইটি ওজন E/V                     0.75
18   ঋণ ওজন D/V                    =1-B17
19   WACC                          =B17*B14+B18*B16
20   প্রান্তিক প্রবৃদ্ধি g                 0.05

       A                    B          C          D          E          F
22   বছর                    1          2          3          4          5
23   রাজস্ব প্রবৃদ্ধি     0.12       0.11       0.10       0.09       0.08
24   রাজস্ব         =B3*(1+B23)  =B24*(1+C23)  =C24*(1+D23)  ...
25   EBIT           =B24*$B$4
26   NOPAT          =B25*(1-$B$5)
27   যোগ D&A        =B24*$B$6
28   বিয়োগ মূলধনী ব্যয় =B24*$B$7
29   বিয়োগ d NWC   =(B24-$B$3)*$B$8   =(C24-B24)*$B$8   ...
30   মুক্ত নগদ প্রবাহ =B26+B27-B28-B29
31   বাট্টা গুণক    =1/(1+$B$19)^B$22
32   FCF-এর বর্তমান মূল্য =B30*B31

34   স্পষ্ট FCF-এর মোট বর্তমান মূল্য =SUM(B32:F32)
35   Y5-এ প্রান্তিক মূল্য (Gordon)   =F30*(1+B20)/(B19-B20)
36   প্রান্তিক মূল্যের বর্তমান মূল্য  =B35/(1+B19)^5
37   এন্টারপ্রাইজ মূল্য              =B34+B36
38   EV-তে TV-র %                    =B36/B37
39   মোট ঋণ                                320
40   নগদ ও সমতুল্য                          95
41   নিট ঋণ                          =B39-B40
42   ইক্যুইটি মূল্য                   =B37-B41
43   বকেয়া শেয়ার (কোটি)                    45
44   শেয়ারপ্রতি মূল্য (টাকা)          =B42/B43
45   বাজারমূল্য (টাকা)                      34
46   ঊর্ধ্ব / (নিম্ন) মুখিতা          =B44/B45-1

48   সংবেদনশীলতা — শেয়ারপ্রতি মূল্য (টাকা)
49   WACC \\ g            0.03       0.04       0.05       0.06       0.07
50   0.13
51   0.14
52   0.15
53   0.16
54   0.17

     ঘর B50, B50:F54 জুড়ে ডানে ও নিচে টেনে নিন:
     =(NPV($A50,$B$30:$F$30)
       + $F$30*(1+B$49)/($A50-B$49)/(1+$A50)^5
       - $B$41)/$B$43

56   সর্বনিম্ন শেয়ারপ্রতি মূল্য      =MIN(B50:F54)
57   সর্বোচ্চ শেয়ারপ্রতি মূল্য       =MAX(B50:F54)
58   পরিসর গুণিতকে                   =B57/B56
59   "কিনুন" নির্দেশক ঘর             =COUNTIF(B50:F54,">"&B45)
60   "বেচুন" নির্দেশক ঘর             =25-B59
\`\`\`

**সারি ৩৮ দেখানোর জন্যই এই পুরো শিটটির অস্তিত্ব।** সারি ৪৪ নয়। সবাই সারি ২২ থেকে ৪৪ বানায় এবং তারপর গবেষণা নোটে সারি ৪৪ উদ্ধৃত করে। **সারি ৩৮ বলে সারি ৪৪-এর কতটা আপনি আসলে পূর্বাভাস করেছেন**, আর ৬৫.৮৫%-এ উত্তরটি: প্রায় এক-তৃতীয়াংশ।

**সংবেদনশীলতা ব্লকের মিশ্র-অ্যাংকর প্যাটার্নটিই একমাত্র কারিগরিভাবে জটিল অংশ।** \`$A50\`-এ কলাম আটকানো, সারি নয়, তাই ডানে টানলে WACC ধরে থাকে; \`B$49\`-এ সারি আটকানো, কলাম নয়, তাই নিচে টানলে $g$ ধরে থাকে। এ দুটি উল্টে ফেললে গ্রিড এমন সংখ্যায় ভরে যাবে যা দেখতে বিশ্বাসযোগ্য কিন্তু নীরবে ভুল জিনিস গণনা করছে। **কিছুতে আস্থা রাখার আগে একটি কোণ হাতে যাচাই করুন** — F54-এ ২৯.৬৯ থাকা উচিত।

**লক্ষ করুন প্রতিটি গ্রিড-ঘর কেবল প্রান্তিক মূল্য নয়, পুরো মডেল পুনর্গণনা করে।** \`NPV($A50,...)\` ঐ সারির WACC-তে পাঁচটি স্পষ্ট নগদ প্রবাহ পুনরায় বাট্টা দেয়। যে গ্রিড কেবল প্রান্তিক মূল্যে WACC বদলায়, তা সংবেদনশীলতা কম দেখায় এবং এটিই বেশি সাধারণ ভুল, কারণ দেখতে মনে হয় কাজ করছে।

**সারি ৫৯-এর সংখ্যাটি লক্ষ্যমূল্য উদ্ধৃতকারী যে কারো সামনে রাখুন।** পঁচিশটির দশটি ঘর বলে কিনুন। কোনো সুপারিশ যদি একটি রক্ষণীয় অনুমান-পরিসরের মাত্র ৪০%-এ টিকে থাকে, সেটি সুপারিশ নয়।

**বাংলাদেশি হিসাবের জন্য একটি সমন্বয়।** সারি ৫-এর কর হার হওয়া উচিত কর সমন্বয় নোট থেকে *কার্যকর* হার, তালিকাভুক্ত কোম্পানির বিধিবদ্ধ হার নয়। বহু ডিএসই কোম্পানির কর অবকাশ, নতুন প্ল্যান্টে ত্বরিত অবচয়, বা বিরোধপূর্ণ নির্ধারণ থাকে, আর কার্যকর হার বিধিবদ্ধ হারের দশ পয়েন্ট নিচে বছরের পর বছর বসে থেকে তারপর ফিরে আসতে পারে। **কর অবকাশ শেষ হতে চলার সময় বিধিবদ্ধ হার ব্যবহার করা হলো FCF বাড়িয়ে দেখানোর দ্রুততম উপায়, ঠিক ততক্ষণ পর্যন্ত যতক্ষণে বাজার তা লক্ষ করে।**

**একে স্ক্রিনে পরিণত করতে:** একটি খাত জুড়ে সারি ১১ থেকে ২০ স্থির রাখুন, কোম্পানিভেদে কেবল সারি ৩ থেকে ৮ বদলান, এবং সারি ৩৮ তুলনা করুন। যাদের TV অংশ ৭৫% ছাড়ায়, সারি ৪৪ যা-ই বলুক, তাদের মূল্যায়ন আপনি পূর্বাভাসের জোরে রক্ষা করতে পারবেন না।`,
    },

    python: {
      en: `\`\`\`python
"""
Chapter 21 - Discounted Cash Flow on a DSE pharma company.
Educational. Pure standard library.
"""
from dataclasses import dataclass
from typing import List


@dataclass
class DCF:
    """A five-year explicit forecast plus a Gordon terminal value."""
    name: str
    revenue0_cr: float            # base-year revenue, BDT crore
    growth: List[float]           # revenue growth, one per explicit year
    ebit_margin: float            # EBIT / revenue, held flat
    tax_rate: float               # effective corporate tax rate
    da_pct: float                 # depreciation & amortisation, % of revenue
    capex_pct: float              # capital expenditure, % of revenue
    nwc_pct: float                # incremental NWC, % of incremental revenue
    rf: float                     # risk-free rate (10y BGTB)
    erp: float                    # equity risk premium
    beta: float                   # levered beta vs DSEX
    kd_pretax: float              # pre-tax cost of debt
    weight_equity: float          # E / (D+E), market weights
    g_terminal: float             # perpetual growth in the terminal value
    debt_cr: float                # total interest-bearing debt
    cash_cr: float                # cash and equivalents
    shares_cr: float              # shares outstanding, crore
    price: float                  # market price, BDT per share

    # ---------- cost of capital ----------
    @property
    def cost_of_equity(self) -> float:
        """CAPM. Every one of these three inputs is contestable in Bangladesh."""
        return self.rf + self.beta * self.erp

    @property
    def kd_after_tax(self) -> float:
        return self.kd_pretax * (1.0 - self.tax_rate)

    @property
    def weight_debt(self) -> float:
        return 1.0 - self.weight_equity

    @property
    def wacc(self) -> float:
        return (self.weight_equity * self.cost_of_equity
                + self.weight_debt * self.kd_after_tax)

    # ---------- free cash flow ----------
    def revenues(self) -> List[float]:
        out, r = [], self.revenue0_cr
        for gr in self.growth:
            r = r * (1.0 + gr)
            out.append(r)
        return out

    def fcf_schedule(self) -> List[float]:
        """FCF = EBIT(1-t) + D&A - Capex - change in NWC. No interest."""
        revs = self.revenues()
        prev = self.revenue0_cr
        out = []
        for r in revs:
            ebit = r * self.ebit_margin
            nopat = ebit * (1.0 - self.tax_rate)
            da = r * self.da_pct
            capex = r * self.capex_pct
            dnwc = (r - prev) * self.nwc_pct
            out.append(nopat + da - capex - dnwc)
            prev = r
        return out

    # ---------- valuation ----------
    def _value_at(self, wacc: float, g: float):
        fcfs = self.fcf_schedule()
        pv_explicit = 0.0
        for t, f in enumerate(fcfs, start=1):
            pv_explicit += f / (1.0 + wacc) ** t
        n = len(fcfs)
        tv = fcfs[-1] * (1.0 + g) / (wacc - g)
        pv_tv = tv / (1.0 + wacc) ** n
        ev = pv_explicit + pv_tv
        equity = ev - (self.debt_cr - self.cash_cr)
        return pv_explicit, tv, pv_tv, ev, equity, equity / self.shares_cr

    @property
    def net_debt_cr(self) -> float:
        return self.debt_cr - self.cash_cr

    def base(self):
        return self._value_at(self.wacc, self.g_terminal)

    @property
    def tv_share_of_ev(self) -> float:
        _, _, pv_tv, ev, _, _ = self.base()
        return pv_tv / ev

    def sensitivity(self, waccs: List[float], gs: List[float]):
        return [[self._value_at(w, g)[5] for g in gs] for w in waccs]


def show(d: DCF) -> None:
    fcfs = d.fcf_schedule()
    revs = d.revenues()
    print(f"=== {d.name} ===")
    print(f"Cost of equity (CAPM)  : {d.rf:.2%} + {d.beta:.2f} x {d.erp:.2%} = {d.cost_of_equity:.2%}")
    print(f"After-tax cost of debt : {d.kd_pretax:.2%} x (1 - {d.tax_rate:.3f}) = {d.kd_after_tax:.2%}")
    print(f"WACC                   : {d.weight_equity:.0%} x {d.cost_of_equity:.2%}"
          f" + {d.weight_debt:.0%} x {d.kd_after_tax:.2%} = {d.wacc:.2%}")
    print()
    print(f"{'Year':<6}{'Revenue':>12}{'FCF':>12}{'DF':>10}{'PV(FCF)':>12}")
    for t, (r, f) in enumerate(zip(revs, fcfs), start=1):
        df = 1.0 / (1.0 + d.wacc) ** t
        print(f"{t:<6}{r:>12.2f}{f:>12.3f}{df:>10.6f}{f*df:>12.3f}")
    pv_exp, tv, pv_tv, ev, eq, ps = d.base()
    print()
    print(f"Sum PV of explicit FCF : {pv_exp:12.3f} crore")
    print(f"Terminal value at t=5  : {tv:12.3f} crore   (g = {d.g_terminal:.2%})")
    print(f"PV of terminal value   : {pv_tv:12.3f} crore")
    print(f"ENTERPRISE VALUE       : {ev:12.3f} crore")
    print(f"*** TV as % of EV      : {pv_tv/ev:12.2%}  <-- the whole valuation lives here")
    print(f"less net debt          : {d.net_debt_cr:12.3f} crore")
    print(f"EQUITY VALUE           : {eq:12.3f} crore")
    print(f"Shares outstanding     : {d.shares_cr:12.2f} crore")
    print(f"VALUE PER SHARE        : BDT {ps:.2f}   (market BDT {d.price:.2f})")
    print()


def grid(d: DCF, waccs, gs) -> None:
    m = d.sensitivity(waccs, gs)
    print("=== VALUE PER SHARE (BDT): WACC down the side, terminal g across the top ===")
    print(f"{'WACC':<8}" + "".join(f"{g:>10.1%}" for g in gs))
    for w, row in zip(waccs, m):
        print(f"{w:<8.1%}" + "".join(f"{v:>10.2f}" for v in row))
    flat = [v for row in m for v in row]
    print()
    print(f"Lowest  value per share : BDT {min(flat):.2f}")
    print(f"Highest value per share : BDT {max(flat):.2f}")
    print(f"Range as a multiple     : {max(flat)/min(flat):.2f}x")
    print(f"Market price            : BDT {d.price:.2f}")
    cheap = sum(1 for v in flat if v > d.price)
    print(f"Cells implying BUY      : {cheap} of {len(flat)}")
    print(f"Cells implying SELL     : {len(flat)-cheap} of {len(flat)}")


if __name__ == "__main__":
    novo = DCF(
        name="NOVOPHARMA (DSE pharma archetype)",
        revenue0_cr=1200.0,
        growth=[0.12, 0.11, 0.10, 0.09, 0.08],
        ebit_margin=0.18,
        tax_rate=0.225,
        da_pct=0.04,
        capex_pct=0.06,
        nwc_pct=0.15,
        rf=0.1150,
        erp=0.0600,
        beta=0.90,
        kd_pretax=0.1200,
        weight_equity=0.75,
        g_terminal=0.05,
        debt_cr=320.0,
        cash_cr=95.0,
        shares_cr=45.0,
        price=34.00,
    )
    show(novo)
    grid(novo,
         [0.13, 0.14, 0.15, 0.16, 0.17],
         [0.03, 0.04, 0.05, 0.06, 0.07])
    print()
    print("=== TV DOMINANCE ACROSS THE GRID ===")
    for w in [0.13, 0.15, 0.17]:
        for g in [0.03, 0.05, 0.07]:
            pv_exp, tv, pv_tv, ev, eq, ps = novo._value_at(w, g)
            print(f"WACC {w:.0%}  g {g:.0%}  ->  TV is {pv_tv/ev:6.2%} of EV,"
                  f"  per share BDT {ps:6.2f}")
\`\`\`

**Expected output:**

\`\`\`text
=== NOVOPHARMA (DSE pharma archetype) ===
Cost of equity (CAPM)  : 11.50% + 0.90 x 6.00% = 16.90%
After-tax cost of debt : 12.00% x (1 - 0.225) = 9.30%
WACC                   : 75% x 16.90% + 25% x 9.30% = 15.00%

Year       Revenue         FCF        DF     PV(FCF)
1          1344.00     139.008  0.869565     120.877
2          1491.84     156.099  0.756144     118.033
3          1641.02     173.725  0.657516     114.227
4          1788.72     191.598  0.571753     109.547
5          1931.81     209.387  0.497177     104.102

Sum PV of explicit FCF :      566.786 crore
Terminal value at t=5  :     2198.565 crore   (g = 5.00%)
PV of terminal value   :     1093.075 crore
ENTERPRISE VALUE       :     1659.861 crore
*** TV as % of EV      :       65.85%  <-- the whole valuation lives here
less net debt          :      225.000 crore
EQUITY VALUE           :     1434.861 crore
Shares outstanding     :        45.00 crore
VALUE PER SHARE        : BDT 31.89   (market BDT 34.00)

=== VALUE PER SHARE (BDT): WACC down the side, terminal g across the top ===
WACC          3.0%      4.0%      5.0%      6.0%      7.0%
13.0%        34.28     37.45     41.41     46.51     53.30
14.0%        30.55     33.06     36.12     39.94     44.86
15.0%        27.45     29.47     31.89     34.84     38.54
16.0%        24.83     26.48     28.43     30.76     33.62
17.0%        22.59     23.96     25.55     27.43     29.69

Lowest  value per share : BDT 22.59
Highest value per share : BDT 53.30
Range as a multiple     : 2.36x
Market price            : BDT 34.00
Cells implying BUY      : 10 of 25
Cells implying SELL     : 15 of 25

=== TV DOMINANCE ACROSS THE GRID ===
WACC 13%  g 3%  ->  TV is 66.23% of EV,  per share BDT  34.28
WACC 13%  g 5%  ->  TV is 71.42% of EV,  per share BDT  41.41
WACC 13%  g 7%  ->  TV is 77.25% of EV,  per share BDT  53.30
WACC 15%  g 3%  ->  TV is 61.19% of EV,  per share BDT  27.45
WACC 15%  g 5%  ->  TV is 65.85% of EV,  per share BDT  31.89
WACC 15%  g 7%  ->  TV is 71.07% of EV,  per share BDT  38.54
WACC 17%  g 3%  ->  TV is 56.59% of EV,  per share BDT  22.59
WACC 17%  g 5%  ->  TV is 60.79% of EV,  per share BDT  25.55
WACC 17%  g 7%  ->  TV is 65.47% of EV,  per share BDT  29.69
\`\`\`

**The line marked with arrows is the output of this chapter.** Not the value per share. **65.85% of a valuation that took thirty forecast assumptions to build came from one division.**

**\`_value_at\` recomputes the explicit period at each WACC, deliberately.** A sensitivity grid that varies the discount rate only inside the terminal value is understating the swing, and it is the more common implementation because the shortcut is invisible in the output. Compare: at WACC 17% the explicit PV falls to about 528 crore, not 567. **The grid is honest only if the whole model moves.**

**The last block is the argument.** Follow the TV share down the rows: 66% → 77% at WACC 13%, and 57% → 65% at WACC 17%. **The cells that produce the highest per-share values are the cells where the model does the least work.** BDT 53.30 is 77% terminal assumption. BDT 22.59 is 57%. If you find yourself defending the top-left region of this grid, you are defending a perpetuity formula, not a pharma company.

**To extend this:** add a \`reverse()\` method that bisects on \`g\` until \`per_share\` equals \`price\`, and print the implied growth instead of the value. That single number — "the market is paying for 5.7% perpetual growth" — is the only DCF output that survives being questioned, because it is a statement about what other people believe rather than a claim about what something is worth.`,
      bn: `\`\`\`python
"""
অধ্যায় ২১ — একটি ডিএসই ওষুধ কোম্পানির উপর DCF।
শিক্ষামূলক। কেবল স্ট্যান্ডার্ড লাইব্রেরি।
"""
from dataclasses import dataclass
from typing import List


@dataclass
class DCF:
    """পাঁচ বছরের স্পষ্ট পূর্বাভাস এবং একটি Gordon প্রান্তিক মূল্য।"""
    name: str
    revenue0_cr: float            # ভিত্তি বছরের রাজস্ব, কোটি টাকা
    growth: List[float]           # রাজস্ব প্রবৃদ্ধি, প্রতি স্পষ্ট বছরে একটি
    ebit_margin: float            # EBIT / রাজস্ব, স্থির ধরা
    tax_rate: float               # কার্যকর কর্পোরেট কর হার
    da_pct: float                 # অবচয় ও পরিশোধ, রাজস্বের %
    capex_pct: float              # মূলধনী ব্যয়, রাজস্বের %
    nwc_pct: float                # বর্ধিত NWC, বর্ধিত রাজস্বের %
    rf: float                     # ঝুঁকিমুক্ত হার (১০ বছরের BGTB)
    erp: float                    # ইক্যুইটি ঝুঁকি প্রিমিয়াম
    beta: float                   # DSEX-এর বিপরীতে লিভার্ড বিটা
    kd_pretax: float              # কর-পূর্ব ঋণের খরচ
    weight_equity: float          # E / (D+E), বাজার-ওজন
    g_terminal: float             # প্রান্তিক মূল্যে চিরস্থায়ী প্রবৃদ্ধি
    debt_cr: float                # মোট সুদবাহী ঋণ
    cash_cr: float                # নগদ ও সমতুল্য
    shares_cr: float              # বকেয়া শেয়ার, কোটি
    price: float                  # বাজারমূল্য, শেয়ারপ্রতি টাকা

    # ---------- মূলধনের খরচ ----------
    @property
    def cost_of_equity(self) -> float:
        """CAPM। বাংলাদেশে এই তিনটি ইনপুটের প্রতিটিই বিতর্কযোগ্য।"""
        return self.rf + self.beta * self.erp

    @property
    def kd_after_tax(self) -> float:
        return self.kd_pretax * (1.0 - self.tax_rate)

    @property
    def weight_debt(self) -> float:
        return 1.0 - self.weight_equity

    @property
    def wacc(self) -> float:
        return (self.weight_equity * self.cost_of_equity
                + self.weight_debt * self.kd_after_tax)

    # ---------- মুক্ত নগদ প্রবাহ ----------
    def revenues(self) -> List[float]:
        out, r = [], self.revenue0_cr
        for gr in self.growth:
            r = r * (1.0 + gr)
            out.append(r)
        return out

    def fcf_schedule(self) -> List[float]:
        """FCF = EBIT(1-t) + D&A - Capex - NWC পরিবর্তন। সুদ নেই।"""
        revs = self.revenues()
        prev = self.revenue0_cr
        out = []
        for r in revs:
            ebit = r * self.ebit_margin
            nopat = ebit * (1.0 - self.tax_rate)
            da = r * self.da_pct
            capex = r * self.capex_pct
            dnwc = (r - prev) * self.nwc_pct
            out.append(nopat + da - capex - dnwc)
            prev = r
        return out

    # ---------- মূল্যায়ন ----------
    def _value_at(self, wacc: float, g: float):
        fcfs = self.fcf_schedule()
        pv_explicit = 0.0
        for t, f in enumerate(fcfs, start=1):
            pv_explicit += f / (1.0 + wacc) ** t
        n = len(fcfs)
        tv = fcfs[-1] * (1.0 + g) / (wacc - g)
        pv_tv = tv / (1.0 + wacc) ** n
        ev = pv_explicit + pv_tv
        equity = ev - (self.debt_cr - self.cash_cr)
        return pv_explicit, tv, pv_tv, ev, equity, equity / self.shares_cr

    @property
    def net_debt_cr(self) -> float:
        return self.debt_cr - self.cash_cr

    def base(self):
        return self._value_at(self.wacc, self.g_terminal)

    @property
    def tv_share_of_ev(self) -> float:
        _, _, pv_tv, ev, _, _ = self.base()
        return pv_tv / ev

    def sensitivity(self, waccs: List[float], gs: List[float]):
        return [[self._value_at(w, g)[5] for g in gs] for w in waccs]


def show(d: DCF) -> None:
    fcfs = d.fcf_schedule()
    revs = d.revenues()
    print(f"=== {d.name} ===")
    print(f"Cost of equity (CAPM)  : {d.rf:.2%} + {d.beta:.2f} x {d.erp:.2%} = {d.cost_of_equity:.2%}")
    print(f"After-tax cost of debt : {d.kd_pretax:.2%} x (1 - {d.tax_rate:.3f}) = {d.kd_after_tax:.2%}")
    print(f"WACC                   : {d.weight_equity:.0%} x {d.cost_of_equity:.2%}"
          f" + {d.weight_debt:.0%} x {d.kd_after_tax:.2%} = {d.wacc:.2%}")
    print()
    print(f"{'Year':<6}{'Revenue':>12}{'FCF':>12}{'DF':>10}{'PV(FCF)':>12}")
    for t, (r, f) in enumerate(zip(revs, fcfs), start=1):
        df = 1.0 / (1.0 + d.wacc) ** t
        print(f"{t:<6}{r:>12.2f}{f:>12.3f}{df:>10.6f}{f*df:>12.3f}")
    pv_exp, tv, pv_tv, ev, eq, ps = d.base()
    print()
    print(f"Sum PV of explicit FCF : {pv_exp:12.3f} crore")
    print(f"Terminal value at t=5  : {tv:12.3f} crore   (g = {d.g_terminal:.2%})")
    print(f"PV of terminal value   : {pv_tv:12.3f} crore")
    print(f"ENTERPRISE VALUE       : {ev:12.3f} crore")
    print(f"*** TV as % of EV      : {pv_tv/ev:12.2%}  <-- the whole valuation lives here")
    print(f"less net debt          : {d.net_debt_cr:12.3f} crore")
    print(f"EQUITY VALUE           : {eq:12.3f} crore")
    print(f"Shares outstanding     : {d.shares_cr:12.2f} crore")
    print(f"VALUE PER SHARE        : BDT {ps:.2f}   (market BDT {d.price:.2f})")
    print()


def grid(d: DCF, waccs, gs) -> None:
    m = d.sensitivity(waccs, gs)
    print("=== VALUE PER SHARE (BDT): WACC down the side, terminal g across the top ===")
    print(f"{'WACC':<8}" + "".join(f"{g:>10.1%}" for g in gs))
    for w, row in zip(waccs, m):
        print(f"{w:<8.1%}" + "".join(f"{v:>10.2f}" for v in row))
    flat = [v for row in m for v in row]
    print()
    print(f"Lowest  value per share : BDT {min(flat):.2f}")
    print(f"Highest value per share : BDT {max(flat):.2f}")
    print(f"Range as a multiple     : {max(flat)/min(flat):.2f}x")
    print(f"Market price            : BDT {d.price:.2f}")
    cheap = sum(1 for v in flat if v > d.price)
    print(f"Cells implying BUY      : {cheap} of {len(flat)}")
    print(f"Cells implying SELL     : {len(flat)-cheap} of {len(flat)}")


if __name__ == "__main__":
    novo = DCF(
        name="NOVOPHARMA (DSE pharma archetype)",
        revenue0_cr=1200.0,
        growth=[0.12, 0.11, 0.10, 0.09, 0.08],
        ebit_margin=0.18,
        tax_rate=0.225,
        da_pct=0.04,
        capex_pct=0.06,
        nwc_pct=0.15,
        rf=0.1150,
        erp=0.0600,
        beta=0.90,
        kd_pretax=0.1200,
        weight_equity=0.75,
        g_terminal=0.05,
        debt_cr=320.0,
        cash_cr=95.0,
        shares_cr=45.0,
        price=34.00,
    )
    show(novo)
    grid(novo,
         [0.13, 0.14, 0.15, 0.16, 0.17],
         [0.03, 0.04, 0.05, 0.06, 0.07])
    print()
    print("=== TV DOMINANCE ACROSS THE GRID ===")
    for w in [0.13, 0.15, 0.17]:
        for g in [0.03, 0.05, 0.07]:
            pv_exp, tv, pv_tv, ev, eq, ps = novo._value_at(w, g)
            print(f"WACC {w:.0%}  g {g:.0%}  ->  TV is {pv_tv/ev:6.2%} of EV,"
                  f"  per share BDT {ps:6.2f}")
\`\`\`

**প্রত্যাশিত আউটপুট:**

\`\`\`text
=== NOVOPHARMA (DSE pharma archetype) ===
Cost of equity (CAPM)  : 11.50% + 0.90 x 6.00% = 16.90%
After-tax cost of debt : 12.00% x (1 - 0.225) = 9.30%
WACC                   : 75% x 16.90% + 25% x 9.30% = 15.00%

Year       Revenue         FCF        DF     PV(FCF)
1          1344.00     139.008  0.869565     120.877
2          1491.84     156.099  0.756144     118.033
3          1641.02     173.725  0.657516     114.227
4          1788.72     191.598  0.571753     109.547
5          1931.81     209.387  0.497177     104.102

Sum PV of explicit FCF :      566.786 crore
Terminal value at t=5  :     2198.565 crore   (g = 5.00%)
PV of terminal value   :     1093.075 crore
ENTERPRISE VALUE       :     1659.861 crore
*** TV as % of EV      :       65.85%  <-- the whole valuation lives here
less net debt          :      225.000 crore
EQUITY VALUE           :     1434.861 crore
Shares outstanding     :        45.00 crore
VALUE PER SHARE        : BDT 31.89   (market BDT 34.00)

=== VALUE PER SHARE (BDT): WACC down the side, terminal g across the top ===
WACC          3.0%      4.0%      5.0%      6.0%      7.0%
13.0%        34.28     37.45     41.41     46.51     53.30
14.0%        30.55     33.06     36.12     39.94     44.86
15.0%        27.45     29.47     31.89     34.84     38.54
16.0%        24.83     26.48     28.43     30.76     33.62
17.0%        22.59     23.96     25.55     27.43     29.69

Lowest  value per share : BDT 22.59
Highest value per share : BDT 53.30
Range as a multiple     : 2.36x
Market price            : BDT 34.00
Cells implying BUY      : 10 of 25
Cells implying SELL     : 15 of 25

=== TV DOMINANCE ACROSS THE GRID ===
WACC 13%  g 3%  ->  TV is 66.23% of EV,  per share BDT  34.28
WACC 13%  g 5%  ->  TV is 71.42% of EV,  per share BDT  41.41
WACC 13%  g 7%  ->  TV is 77.25% of EV,  per share BDT  53.30
WACC 15%  g 3%  ->  TV is 61.19% of EV,  per share BDT  27.45
WACC 15%  g 5%  ->  TV is 65.85% of EV,  per share BDT  31.89
WACC 15%  g 7%  ->  TV is 71.07% of EV,  per share BDT  38.54
WACC 17%  g 3%  ->  TV is 56.59% of EV,  per share BDT  22.59
WACC 17%  g 5%  ->  TV is 60.79% of EV,  per share BDT  25.55
WACC 17%  g 7%  ->  TV is 65.47% of EV,  per share BDT  29.69
\`\`\`

**তীরচিহ্নযুক্ত লাইনটিই এই অধ্যায়ের ফলাফল।** শেয়ারপ্রতি মূল্য নয়। **ত্রিশটি পূর্বাভাস-অনুমান দিয়ে গড়া একটি মূল্যায়নের ৬৫.৮৫% এসেছে একটি ভাগ থেকে।**

**\`_value_at\` ইচ্ছাকৃতভাবে প্রতিটি WACC-তে স্পষ্ট সময়কাল পুনর্গণনা করে।** যে সংবেদনশীলতা গ্রিড কেবল প্রান্তিক মূল্যের ভেতরে বাট্টা হার বদলায়, তা দোলটি কম দেখায়, এবং এটিই বেশি প্রচলিত বাস্তবায়ন কারণ শর্টকাটটি আউটপুটে অদৃশ্য। তুলনা করুন: WACC ১৭%-এ স্পষ্ট বর্তমান মূল্য নামে প্রায় ৫২৮ কোটিতে, ৫৬৭ নয়। **পুরো মডেল নড়লে তবেই গ্রিডটি সৎ।**

**শেষ ব্লকটিই যুক্তি।** সারি ধরে TV-র অংশ অনুসরণ করুন: WACC ১৩%-এ ৬৬% → ৭৭%, আর WACC ১৭%-এ ৫৭% → ৬৫%। **যে ঘরগুলো সর্বোচ্চ শেয়ারপ্রতি মূল্য তৈরি করে, সেখানেই মডেল সবচেয়ে কম কাজ করে।** ৫৩.৩০ টাকা ৭৭% প্রান্তিক অনুমান। ২২.৫৯ টাকা ৫৭%। এই গ্রিডের উপর-বাম অঞ্চল রক্ষা করতে গেলে আপনি একটি চিরস্থায়ী ধারার সূত্র রক্ষা করছেন, কোনো ওষুধ কোম্পানি নয়।

**একে সম্প্রসারণ করতে:** একটি \`reverse()\` মেথড যোগ করুন যা \`per_share\` ও \`price\` সমান না হওয়া পর্যন্ত \`g\`-তে দ্বিখণ্ডন করে, এবং মূল্যের বদলে অন্তর্নিহিত প্রবৃদ্ধি ছাপে। ঐ একটি সংখ্যা — "বাজার ৫.৭% চিরস্থায়ী প্রবৃদ্ধির দাম দিচ্ছে" — একমাত্র DCF ফলাফল যা প্রশ্নের মুখে টিকে থাকে, কারণ এটি কোনো কিছুর মূল্য সম্পর্কে দাবি নয়, বরং অন্যরা কী বিশ্বাস করে তার বিবৃতি।`,
    },

    mistakes: {
      en: `1. **Publishing a DCF value without the TV share of EV.** This is the central omission of the chapter. If two-thirds of your answer came from a perpetuity formula, the reader must be told. **Any research note with a target price and no sensitivity grid is an opinion in a costume.**
2. **Subtracting interest from free cash flow and then discounting at WACC.** You have charged for debt twice. Unlevered FCF starts from EBIT, not from net profit. This error is invisible in the output and permanently depresses the valuation.
3. **Setting terminal $g$ above nominal GDP growth.** A company growing faster than the economy forever eventually becomes the economy. In a BDT nominal model, $g$ above 7% is not a forecast, it is an arithmetic impossibility with two decimal places.
4. **Mismatching nominal and real.** If cash flows are in nominal taka, $g$ is nominal and $r_f$ is a nominal BGTB yield. Mixing a real growth rate into a nominal model understates value by roughly the inflation rate, compounded forever.
5. **Trusting a DSE beta.** Chapter 1 established the concentration problem. Thin trading biases beta downward, so the least liquid companies look safest. Compute it, disclose the window and frequency, and then treat the resulting WACC as the centre of a range, not a value.
6. **Setting capex equal to D&A while forecasting growth.** You have assumed a company that grows revenue 50% without adding capacity. For a Bangladeshi manufacturer with a new plant, capex should exceed D&A for as long as the expansion runs.
7. **Forgetting working capital.** Growth consumes cash through receivables and inventory before it produces any. Chapter 12 and Chapter 13 established how large that drag is on the DSE, where receivable days are long and often lengthening.
8. **Discounting the terminal value over $n+1$ periods.** $TV_n$ is already valued as at the end of year $n$, so it is discounted by $(1+WACC)^n$. The off-by-one error understates value by roughly the WACC — 15% in the worked example.
9. **Using the statutory tax rate instead of the effective rate.** Many DSE companies operate under tax holidays or accelerated depreciation. Read the tax reconciliation note. **A holiday that expires in year three is a cash flow cliff the model will not find on its own.**
10. **Varying WACC only inside the terminal value when building the sensitivity grid.** The explicit-period present values move too. The shortcut understates the swing and is the more common implementation precisely because it looks correct.
11. **Treating the base-case output as the answer and the grid as decoration.** The grid in §21.9 contains ten buys and fifteen sells. **The base case is one cell of twenty-five, and nothing distinguishes it except that you typed it first.**`,
      bn: `১. **EV-তে TV-র অংশ ছাড়া DCF মূল্য প্রকাশ করা।** এটিই অধ্যায়ের কেন্দ্রীয় বাদ পড়া। উত্তরের দুই-তৃতীয়াংশ যদি একটি চিরস্থায়ী ধারার সূত্র থেকে আসে, পাঠককে তা জানাতে হবে। **লক্ষ্যমূল্যসহ অথচ সংবেদনশীলতা গ্রিডবিহীন যেকোনো গবেষণা নোট পোশাক পরা মতামত।**
২. **মুক্ত নগদ প্রবাহ থেকে সুদ বিয়োগ করে তারপর WACC-তে বাট্টা দেওয়া।** আপনি ঋণের দাম দুইবার নিলেন। আনলিভার্ড FCF শুরু হয় EBIT থেকে, নিট মুনাফা থেকে নয়। এই ভুল আউটপুটে অদৃশ্য এবং স্থায়ীভাবে মূল্যায়ন চেপে রাখে।
৩. **প্রান্তিক $g$ নামিক জিডিপি প্রবৃদ্ধির ওপরে বসানো।** যে কোম্পানি চিরকাল অর্থনীতির চেয়ে দ্রুত বাড়ে, সে একসময় অর্থনীতিই হয়ে যায়। টাকার নামিক মডেলে ৭%-এর ওপরে $g$ পূর্বাভাস নয়, দুই দশমিকসহ একটি গাণিতিক অসম্ভাব্যতা।
৪. **নামিক ও প্রকৃতের গরমিল।** নগদ প্রবাহ নামিক টাকায় হলে $g$ নামিক এবং $r_f$ একটি নামিক BGTB ফলন। নামিক মডেলে প্রকৃত প্রবৃদ্ধির হার মেশালে মূল্য প্রায় মূল্যস্ফীতির হারে, চিরকালীন চক্রবৃদ্ধিতে, কম দেখায়।
৫. **ডিএসই বিটায় আস্থা রাখা।** অধ্যায় ১ কেন্দ্রীভবনের সমস্যা প্রতিষ্ঠা করেছে। পাতলা লেনদেন বিটাকে নিচের দিকে টানে, তাই সবচেয়ে তারল্যহীন কোম্পানিকেই সবচেয়ে নিরাপদ দেখায়। গণনা করুন, উইন্ডো ও কম্পাঙ্ক প্রকাশ করুন, এবং ফলিত WACC-কে একটি মান নয়, একটি পরিসরের কেন্দ্র হিসেবে দেখুন।
৬. **প্রবৃদ্ধির পূর্বাভাস দিয়ে মূলধনী ব্যয়কে D&A-র সমান বসানো।** আপনি এমন কোম্পানি ধরে নিলেন যা সক্ষমতা না বাড়িয়ে রাজস্ব ৫০% বাড়ায়। নতুন প্ল্যান্টসহ বাংলাদেশি উৎপাদকের ক্ষেত্রে সম্প্রসারণ চলা পর্যন্ত মূলধনী ব্যয় D&A ছাড়িয়ে থাকা উচিত।
৭. **চলতি মূলধন ভুলে যাওয়া।** প্রবৃদ্ধি কিছু উৎপাদনের আগেই প্রাপ্য ও মজুদের মাধ্যমে নগদ খায়। অধ্যায় ১২ ও ১৩ প্রতিষ্ঠা করেছে ডিএসই-তে এই টান কত বড়, যেখানে প্রাপ্য দিন দীর্ঘ এবং প্রায়ই দীর্ঘতর হচ্ছে।
৮. **প্রান্তিক মূল্যকে $n+1$ সময়কালে বাট্টা দেওয়া।** $TV_n$ ইতিমধ্যেই $n$ বছরের শেষে মূল্যায়িত, তাই এটি $(1+WACC)^n$ দিয়ে বাট্টা পায়। এক-ঘর-ভুলের কারণে মূল্য প্রায় WACC পরিমাণে কম দেখায় — কৃত উদাহরণে ১৫%।
৯. **কার্যকর হারের বদলে বিধিবদ্ধ কর হার ব্যবহার।** বহু ডিএসই কোম্পানি কর অবকাশ বা ত্বরিত অবচয়ের অধীনে চলে। কর সমন্বয় নোট পড়ুন। **তৃতীয় বছরে শেষ হওয়া একটি অবকাশ একটি নগদ প্রবাহের খাদ, যা মডেল নিজে খুঁজে পাবে না।**
১০. **সংবেদনশীলতা গ্রিড বানানোর সময় কেবল প্রান্তিক মূল্যের ভেতরে WACC বদলানো।** স্পষ্ট সময়কালের বর্তমান মূল্যও নড়ে। শর্টকাটটি দোল কম দেখায় এবং ঠিক এ কারণেই বেশি প্রচলিত যে দেখতে সঠিক মনে হয়।
১১. **ভিত্তি-কেসের ফলাফলকে উত্তর এবং গ্রিডকে অলংকার ভাবা।** §২১.৯-এর গ্রিডে দশটি "কিনুন" ও পনেরোটি "বেচুন" আছে। **ভিত্তি-কেস পঁচিশটির একটি ঘর মাত্র, আর একে আলাদা করার কিছুই নেই — কেবল আপনি সেটি প্রথমে টাইপ করেছিলেন।**`,
    },

    tips: {
      en: `- **Report the TV share of EV next to every valuation, every time.** One number, one division, and it tells the reader how much of your answer is analysis and how much is a formula. **Above 75%, stop calling it a forecast.**
- **Build the sensitivity grid before you build the base case.** It reframes the exercise from "what is it worth" to "over what range is it worth anything" — which is the honest question and stops you anchoring on the first number you typed.
- **Run the DCF in reverse as your primary output.** Solve for the $g$ or the WACC that reproduces the market price, then argue about whether that is believable. "The market is paying for 5.7% perpetual growth" is defensible; "it is worth BDT 31.89" is not.
- **Cross-check the terminal value against an exit multiple.** Divide $TV_5$ by year-5 EBITDA and ask whether that multiple is plausible for a Bangladeshi pharma company in five years. If Gordon implies 14× and the sector trades at 8×, one of your two assumptions is wrong and the multiple check found it.
- **Sanity-check FCF against Chapter 20's CFO − capex.** They are different measures for different purposes, but they should move together. If unlevered FCF is strongly positive while CFO − capex has been negative for three years, your margin or working capital assumptions are not describing this company.
- **Disclose the beta window and frequency.** Two-year weekly and five-year daily produce materially different betas on the same DSE name. An analyst who does not state the window is hiding a free parameter.
- **Use an effective tax rate from the reconciliation note, and check when any holiday expires.** Model the step-up explicitly in the year it happens rather than averaging it away.
- **Prefer a longer explicit period for a company mid-investment.** If a plant commissions in year three, a five-year window ends before the returns arrive, and the terminal value has to carry an assumption it cannot support. Extend to eight years and the model at least shows the shape.
- **Never let a DCF override the Part I liquidity read.** Chapter 7 established that on the DSE liquidity beats earnings in the short and medium term. A company can be worth BDT 45 and trade at BDT 20 for three years because the money has left the market. **DCF tells you what to own. It does not tell you when.**`,
      bn: `- **প্রতিটি মূল্যায়নের পাশে, প্রতিবার, EV-তে TV-র অংশ জানান।** একটি সংখ্যা, একটি ভাগ, আর তা পাঠককে বলে আপনার উত্তরের কতটা বিশ্লেষণ ও কতটা সূত্র। **৭৫%-এর ওপরে হলে একে আর পূর্বাভাস বলবেন না।**
- **ভিত্তি-কেসের আগে সংবেদনশীলতা গ্রিড বানান।** এটি কাজটিকে "এর দাম কত" থেকে "কোন পরিসরে এর কোনো দাম আছে"-তে বদলে দেয় — যা সৎ প্রশ্ন এবং আপনাকে প্রথমে টাইপ করা সংখ্যায় নোঙর ফেলা থেকে ঠেকায়।
- **প্রধান ফলাফল হিসেবে DCF উল্টো চালান।** বাজারমূল্য পুনরুৎপাদনকারী $g$ বা WACC বের করুন, তারপর তা বিশ্বাসযোগ্য কি না তা নিয়ে তর্ক করুন। "বাজার ৫.৭% চিরস্থায়ী প্রবৃদ্ধির দাম দিচ্ছে" রক্ষণীয়; "এর দাম ৩১.৮৯ টাকা" নয়।
- **প্রান্তিক মূল্য একটি exit multiple-এর বিপরীতে যাচাই করুন।** $TV_5$-কে পঞ্চম বছরের EBITDA দিয়ে ভাগ করে জিজ্ঞেস করুন, পাঁচ বছর পর একটি বাংলাদেশি ওষুধ কোম্পানির জন্য ঐ গুণিতক বিশ্বাসযোগ্য কি না। Gordon যদি ১৪× বোঝায় আর খাত ৮×-এ লেনদেন হয়, আপনার দুটি অনুমানের একটি ভুল এবং গুণিতক-যাচাই তা ধরেছে।
- **FCF-কে অধ্যায় ২০-এর CFO − মূলধনী ব্যয়ের বিপরীতে যাচাই করুন।** এরা ভিন্ন উদ্দেশ্যে ভিন্ন পরিমাপ, তবু একসঙ্গে নড়া উচিত। আনলিভার্ড FCF প্রবলভাবে ধনাত্মক অথচ CFO − মূলধনী ব্যয় তিন বছর ঋণাত্মক থাকলে, আপনার মার্জিন বা চলতি মূলধনের অনুমান এই কোম্পানিকে বর্ণনা করছে না।
- **বিটার উইন্ডো ও কম্পাঙ্ক প্রকাশ করুন।** একই ডিএসই নামে দুই বছরের সাপ্তাহিক ও পাঁচ বছরের দৈনিক উল্লেখযোগ্যভাবে ভিন্ন বিটা দেয়। যে বিশ্লেষক উইন্ডো বলেন না, তিনি একটি মুক্ত প্যারামিটার লুকাচ্ছেন।
- **সমন্বয় নোট থেকে কার্যকর কর হার নিন, এবং কোনো অবকাশ কবে শেষ হয় তা দেখুন।** যে বছরে বৃদ্ধিটি ঘটে, সে বছরেই স্পষ্টভাবে মডেল করুন, গড় করে মুছে ফেলবেন না।
- **বিনিয়োগের মাঝপথে থাকা কোম্পানির জন্য দীর্ঘতর স্পষ্ট সময়কাল বেছে নিন।** তৃতীয় বছরে একটি প্ল্যান্ট চালু হলে পাঁচ বছরের জানালা রিটার্ন আসার আগেই শেষ হয়, আর প্রান্তিক মূল্যকে এমন একটি অনুমান বইতে হয় যা সে সমর্থন করতে পারে না। আট বছরে বাড়ালে মডেল অন্তত আকৃতিটি দেখায়।
- **DCF-কে কখনো পর্ব ১-এর তারল্য-পাঠ ছাপিয়ে যেতে দেবেন না।** অধ্যায় ৭ প্রতিষ্ঠা করেছে যে ডিএসই-তে স্বল্প ও মধ্যমেয়াদে তারল্য আয়কে হারায়। একটি কোম্পানির মূল্য ৪৫ টাকা হয়েও তিন বছর ২০ টাকায় লেনদেন হতে পারে, কারণ টাকা বাজার ছেড়ে গেছে। **DCF বলে কী কিনবেন। কখন কিনবেন তা বলে না।**`,
    },

    exercises: {
      en: `1. Take one listed DSE pharmaceutical company. Build a five-year unlevered FCF forecast from its last three annual reports, using historical averages for margin, D&A, capex, and working capital intensity. State every assumption on one line each.
2. Estimate that company's beta three ways: two-year weekly, five-year weekly, and two-year daily returns against the DSEX. Report all three. How wide is the spread, and what does the widest-to-narrowest difference do to your WACC?
3. Compute the equity risk premium three ways: a historical DSEX excess return over BGTB from 2013, the same from 2009, and an imported mature-market premium plus the sovereign spread. Which is largest? Which would you publish, and what would you say when challenged?
4. Build the WACC × g sensitivity grid for your company. Count the cells that imply buy and the cells that imply sell at the current market price. If the split is not lopsided, write one paragraph explaining why you would still take a position.
5. Compute TV as a percentage of EV for your base case. Then extend the explicit forecast from five years to ten and recompute. By how much did the TV share fall, and is the model genuinely more informative, or did you simply move the guessing earlier?
6. Run the model in reverse: hold WACC at your base and solve for the terminal $g$ that reproduces the current market price. Is that growth rate above or below nominal GDP growth? What is the market assuming about this company's long-run share of the economy?
7. Cross-check your terminal value against an exit multiple. Divide $TV_5$ by forecast year-5 EBITDA. Compare that multiple to the current sector average on the DSE. If they differ by more than 30%, identify which assumption is responsible.
8. Take a DSE company with a tax holiday disclosed in its accounts. Model the FCF with the statutory rate and again with the effective rate stepping up in the year the holiday expires. What is the difference in value per share, and would it change your recommendation?
9. Compare your DCF value per share against the company's P/E and P/B relative to its sector. Where the DCF and the multiples disagree, decompose the disagreement: is it growth, margin, capital intensity, or the discount rate?
10. Find a published Bangladeshi broker research note containing a DCF-based target price. Check whether it discloses the TV share of EV, the beta window, and a sensitivity grid. Write three sentences on what you can and cannot verify from what is disclosed.`,
      bn: `১. একটি তালিকাভুক্ত ডিএসই ওষুধ কোম্পানি নিন। মার্জিন, D&A, মূলধনী ব্যয় ও চলতি মূলধন নিবিড়তার ঐতিহাসিক গড় ব্যবহার করে শেষ তিন বার্ষিক প্রতিবেদন থেকে পাঁচ বছরের আনলিভার্ড FCF পূর্বাভাস তৈরি করুন। প্রতিটি অনুমান এক লাইনে লিখুন।
২. ঐ কোম্পানির বিটা তিনভাবে নির্ণয় করুন: DSEX-এর বিপরীতে দুই বছরের সাপ্তাহিক, পাঁচ বছরের সাপ্তাহিক, এবং দুই বছরের দৈনিক রিটার্ন। তিনটিই জানান। ব্যবধান কত চওড়া, এবং সর্বোচ্চ-থেকে-সর্বনিম্ন পার্থক্য আপনার WACC-তে কী করে?
৩. ইক্যুইটি ঝুঁকি প্রিমিয়াম তিনভাবে গণনা করুন: ২০১৩ থেকে BGTB-র ওপর DSEX-এর ঐতিহাসিক অতিরিক্ত রিটার্ন, ২০০৯ থেকে একই, এবং আমদানিকৃত পরিণত-বাজার প্রিমিয়াম যোগ সার্বভৌম স্প্রেড। কোনটি সবচেয়ে বড়? আপনি কোনটি প্রকাশ করবেন, এবং প্রশ্নের মুখে কী বলবেন?
৪. আপনার কোম্পানির জন্য WACC × g সংবেদনশীলতা গ্রিড তৈরি করুন। বর্তমান বাজারমূল্যে "কিনুন" ও "বেচুন" নির্দেশক ঘর গুনুন। বিভাজন একপেশে না হলে এক অনুচ্ছেদে লিখুন কেন তবুও আপনি একটি পজিশন নেবেন।
৫. আপনার ভিত্তি-কেসের জন্য EV-তে TV-র শতাংশ গণনা করুন। তারপর স্পষ্ট পূর্বাভাস পাঁচ থেকে দশ বছরে বাড়িয়ে পুনর্গণনা করুন। TV-র অংশ কতটা কমল, এবং মডেলটি কি সত্যিই বেশি তথ্যবহুল হলো, নাকি আপনি কেবল অনুমানটিকে আগে সরিয়ে আনলেন?
৬. মডেল উল্টো চালান: WACC ভিত্তিতে রেখে সেই প্রান্তিক $g$ বের করুন যা বর্তমান বাজারমূল্য পুনরুৎপাদন করে। ঐ প্রবৃদ্ধির হার নামিক জিডিপি প্রবৃদ্ধির ওপরে না নিচে? এই কোম্পানির দীর্ঘমেয়াদি অর্থনৈতিক অংশ সম্পর্কে বাজার কী ধরে নিচ্ছে?
৭. প্রান্তিক মূল্য একটি exit multiple-এর বিপরীতে যাচাই করুন। $TV_5$-কে পূর্বাভাসকৃত পঞ্চম বছরের EBITDA দিয়ে ভাগ করুন। ঐ গুণিতক ডিএসই-তে বর্তমান খাত-গড়ের সঙ্গে তুলনা করুন। ৩০%-এর বেশি পার্থক্য হলে কোন অনুমান দায়ী তা চিহ্নিত করুন।
৮. হিসাবে কর অবকাশ প্রকাশ করেছে এমন একটি ডিএসই কোম্পানি নিন। বিধিবদ্ধ হারে FCF মডেল করুন, এবং আবার অবকাশ শেষ হওয়ার বছরে কার্যকর হার বেড়ে যাওয়া ধরে। শেয়ারপ্রতি মূল্যে পার্থক্য কত, এবং তা কি আপনার সুপারিশ বদলাবে?
৯. আপনার DCF শেয়ারপ্রতি মূল্যকে কোম্পানির খাত-সাপেক্ষ P/E ও P/B-র সঙ্গে তুলনা করুন। যেখানে DCF ও গুণিতক দ্বিমত করে, মতভেদটি বিশ্লিষ্ট করুন: এটি প্রবৃদ্ধি, মার্জিন, মূলধন নিবিড়তা, না বাট্টা হার?
১০. DCF-ভিত্তিক লক্ষ্যমূল্যসহ একটি প্রকাশিত বাংলাদেশি ব্রোকার গবেষণা নোট খুঁজুন। এতে EV-তে TV-র অংশ, বিটার উইন্ডো ও একটি সংবেদনশীলতা গ্রিড প্রকাশ করা আছে কি না দেখুন। যা প্রকাশিত তা থেকে আপনি কী যাচাই করতে পারেন ও পারেন না, তিন বাক্যে লিখুন।`,
    },

    summary: {
      en: `- A DCF values a company as the present value of its unlevered free cash flow: $FCF = EBIT(1-t) + D\\&A - \\text{Capex} - \\Delta NWC$. Interest never appears in the cash flow, because WACC already prices debt.
- **WACC in Bangladesh is an argument, not a measurement.** The risk-free rate depends on which BGTB tenor you pick and has moved 400bp in a year; there is no defensible measured ERP for the DSEX; and beta estimated against a concentrated, thinly-traded index (Chapter 1) is biased toward 1 for large caps and biased downward for illiquid ones.
- Terminal value uses Gordon growth, $TV_n = FCF_n(1+g)/(WACC-g)$, with the hard constraint $g < WACC$ and the softer one that $g$ must sit below nominal GDP growth and match the nominal/real basis of the cash flows.
- **The worked case: NOVOPHARMA, WACC 15.00%, $g$ 5.00%. Enterprise value BDT 1,659.861 crore, of which the terminal value is BDT 1,093.075 crore — 65.85%.** Five years of forecasting determined 34.15% of the answer.
- Equity bridge: EV 1,659.861 less net debt 225.0 gives equity value 1,434.861 crore, over 45.0 crore shares, **BDT 31.89 per share against a market price of BDT 34.00 — a 6.2% overvaluation, stated to two decimals.**
- **The grid destroys that precision.** Sweeping WACC 13–17% and $g$ 3–7% — a narrow, entirely defensible range — produces per-share values from **BDT 22.59 to BDT 53.30, a 2.36× spread. Ten of twenty-five cells say buy; fifteen say sell.**
- **TV dominance rises exactly where the valuation rises.** At (13%, 7%) the terminal value is 77.25% of EV and the answer is BDT 53.30; at (17%, 3%) it is 56.59% and the answer is BDT 22.59. The most bullish output contains the least analysis, and that is the mechanism, not a coincidence.
- The only defensible use is reverse: at BDT 34.00 the market implies roughly 5.7% perpetual growth, or a WACC of about 14.3%. **Those are claims about market expectations that can be argued with evidence.**
- Chapter 7 showed a composite score confidently recommending 85% equity weeks before the 2010 crash. Same failure mode: **a model that outputs precision will be trusted in proportion to its decimal places, not its accuracy.**
- **Discipline established:** never publish a DCF value without the terminal value as a percentage of enterprise value and a WACC × g grid beside it. A DCF is a discipline for making assumptions explicit, not a precision instrument — and the single number it produces is worth exactly as much as the least defensible input that went into it.`,
      bn: `- DCF একটি কোম্পানিকে মূল্যায়ন করে তার আনলিভার্ড মুক্ত নগদ প্রবাহের বর্তমান মূল্য হিসেবে: $FCF = EBIT(1-t) + D\\&A - \\text{Capex} - \\Delta NWC$। নগদ প্রবাহে সুদ কখনো আসে না, কারণ WACC-এ ঋণের দাম ইতিমধ্যে ধরা।
- **বাংলাদেশে WACC একটি তর্ক, কোনো পরিমাপ নয়।** ঝুঁকিমুক্ত হার নির্ভর করে আপনি কোন BGTB মেয়াদ নিচ্ছেন তার ওপর এবং তা এক বছরে ৪০০bp নড়েছে; DSEX-এর জন্য কোনো রক্ষণীয় পরিমাপকৃত ERP নেই; আর একটি কেন্দ্রীভূত, পাতলা-লেনদেনের সূচকের বিপরীতে নির্ণীত বিটা (অধ্যায় ১) বড় মূলধনের জন্য ১-এর দিকে ও তারল্যহীনদের জন্য নিচের দিকে পক্ষপাতদুষ্ট।
- প্রান্তিক মূল্যে Gordon প্রবৃদ্ধি ব্যবহৃত হয়, $TV_n = FCF_n(1+g)/(WACC-g)$, কঠিন শর্ত $g < WACC$ এবং নরম শর্ত যে $g$ নামিক জিডিপি প্রবৃদ্ধির নিচে থাকবে ও নগদ প্রবাহের নামিক/প্রকৃত ভিত্তির সঙ্গে মিলবে।
- **কৃত ক্ষেত্র: NOVOPHARMA, WACC ১৫.০০%, $g$ ৫.০০%। এন্টারপ্রাইজ মূল্য ১,৬৫৯.৮৬১ কোটি টাকা, যার মধ্যে প্রান্তিক মূল্য ১,০৯৩.০৭৫ কোটি টাকা — ৬৫.৮৫%।** পাঁচ বছরের পূর্বাভাস উত্তরের ৩৪.১৫% নির্ধারণ করেছে।
- ইক্যুইটি সেতুবন্ধ: EV ১,৬৫৯.৮৬১ বিয়োগ নিট ঋণ ২২৫.০ = ইক্যুইটি মূল্য ১,৪৩৪.৮৬১ কোটি, ৪৫.০ কোটি শেয়ারে ভাগ করে **শেয়ারপ্রতি ৩১.৮৯ টাকা, বাজারমূল্য ৩৪.০০ টাকার বিপরীতে — ৬.২% অতিমূল্যায়ন, দুই দশমিকে ঘোষিত।**
- **গ্রিড ঐ সূক্ষ্মতা ধ্বংস করে।** WACC ১৩–১৭% ও $g$ ৩–৭% ঘোরালে — একটি সংকীর্ণ, সম্পূর্ণ রক্ষণীয় পরিসর — শেয়ারপ্রতি মূল্য আসে **২২.৫৯ টাকা থেকে ৫৩.৩০ টাকা, ২.৩৬× ব্যবধান। পঁচিশটির দশটি ঘর বলে কিনুন; পনেরোটি বলে বেচুন।**
- **মূল্যায়ন যেখানে বাড়ে, TV-র প্রাধান্য ঠিক সেখানেই বাড়ে।** (১৩%, ৭%)-এ প্রান্তিক মূল্য EV-র ৭৭.২৫% এবং উত্তর ৫৩.৩০ টাকা; (১৭%, ৩%)-এ তা ৫৬.৫৯% এবং উত্তর ২২.৫৯ টাকা। সবচেয়ে তেজি ফলাফলে সবচেয়ে কম বিশ্লেষণ থাকে, আর এটিই কার্যপ্রণালী, কাকতালীয় নয়।
- একমাত্র রক্ষণীয় ব্যবহার উল্টো: ৩৪.০০ টাকায় বাজার প্রায় ৫.৭% চিরস্থায়ী প্রবৃদ্ধি, বা প্রায় ১৪.৩% WACC নির্দেশ করে। **এগুলো বাজার-প্রত্যাশা সম্পর্কে দাবি, যা প্রমাণ দিয়ে তর্ক করা যায়।**
- অধ্যায় ৭ দেখিয়েছে একটি সমন্বিত স্কোর ২০১০-এর ধসের কয়েক সপ্তাহ আগে আত্মবিশ্বাসের সঙ্গে ৮৫% ইক্যুইটি সুপারিশ করছে। একই ব্যর্থতার ধরন: **যে মডেল সূক্ষ্মতা দেয়, তাকে বিশ্বাস করা হয় তার নির্ভুলতা নয়, তার দশমিক স্থানের অনুপাতে।**
- **প্রতিষ্ঠিত শৃঙ্খলা:** এন্টারপ্রাইজ মূল্যের শতাংশ হিসেবে প্রান্তিক মূল্য এবং পাশে একটি WACC × g গ্রিড ছাড়া কখনো কোনো DCF মূল্য প্রকাশ করবেন না। DCF হলো অনুমান স্পষ্ট করার শৃঙ্খলা, কোনো নিখুঁত যন্ত্র নয় — আর এটি যে একক সংখ্যাটি তৈরি করে, তার মূল্য ঠিক ততটুকুই যতটুকু তাতে ঢোকা সবচেয়ে দুর্বল ইনপুটটির।`,
    },
  },
  interview: [
    {
      q: {
        en: 'Why does unlevered free cash flow exclude interest expense?',
        bn: 'আনলিভার্ড মুক্ত নগদ প্রবাহে সুদ ব্যয় কেন বাদ থাকে?',
      },
      a: {
        en: 'Because the cost of debt is already inside the discount rate. Unlevered FCF is the cash available to all capital providers — lenders and shareholders together — so it starts from EBIT, not net profit: EBIT(1−t) + D&A − capex − ΔNWC. Discounting that stream at WACC, which contains the after-tax cost of debt weighted by D/V, prices the debt exactly once. If you subtract interest from the cash flow and then discount at WACC you have charged for debt twice, and the resulting valuation is permanently too low in a way that is invisible in the output. The alternative is a levered FCF discounted at cost of equity, which values the equity directly — but you must not mix the two.',
        bn: 'কারণ ঋণের খরচ ইতিমধ্যেই বাট্টা হারের ভেতরে আছে। আনলিভার্ড FCF হলো সব মূলধন সরবরাহকারীর — ঋণদাতা ও শেয়ারহোল্ডার একসঙ্গে — জন্য উপলব্ধ নগদ, তাই এটি শুরু হয় EBIT থেকে, নিট মুনাফা থেকে নয়: EBIT(1−t) + D&A − মূলধনী ব্যয় − ΔNWC। ঐ ধারাটিকে WACC-তে বাট্টা দিলে, যাতে D/V-ভারিত কর-পরবর্তী ঋণের খরচ আছে, ঋণের দাম ঠিক একবারই ধরা হয়। নগদ প্রবাহ থেকে সুদ বিয়োগ করে আবার WACC-তে বাট্টা দিলে আপনি ঋণের দাম দুইবার নিলেন, আর ফলিত মূল্যায়ন স্থায়ীভাবে কম হয় এমনভাবে যা আউটপুটে অদৃশ্য। বিকল্প হলো ইক্যুইটির খরচে বাট্টাকৃত লিভার্ড FCF, যা সরাসরি ইক্যুইটি মূল্যায়ন করে — কিন্তু দুটি মেশানো চলবে না।',
      },
    },
    {
      q: {
        en: 'What proportion of a typical five-year DCF comes from the terminal value, and why does that matter?',
        bn: 'সাধারণ পাঁচ বছরের DCF-এর কত অংশ প্রান্তিক মূল্য থেকে আসে, এবং তা কেন গুরুত্বপূর্ণ?',
      },
      a: {
        en: 'Typically 60–80%. In the worked NOVOPHARMA case it is 65.85%: enterprise value of BDT 1,659.861 crore, of which the discounted terminal value is BDT 1,093.075 crore. It matters because the terminal value contains no forecasting at all — it is FCF₅(1+g)/(WACC−g), two contested rates and a division. So two-thirds of the answer comes from the part of the model you did not research, and the five years of revenue, margin, capex, and working capital work determine the other third. The practical consequence is that TV share of EV should be reported alongside every valuation. Above roughly 75%, the number is a perpetuity calculation with a forecast attached for decoration.',
        bn: 'সাধারণত ৬০–৮০%। কৃত NOVOPHARMA ক্ষেত্রে তা ৬৫.৮৫%: এন্টারপ্রাইজ মূল্য ১,৬৫৯.৮৬১ কোটি টাকা, যার মধ্যে বাট্টাকৃত প্রান্তিক মূল্য ১,০৯৩.০৭৫ কোটি টাকা। এটি গুরুত্বপূর্ণ কারণ প্রান্তিক মূল্যে কোনো পূর্বাভাসই নেই — এটি FCF₅(1+g)/(WACC−g), দুটি বিতর্কিত হার ও একটি ভাগ। অর্থাৎ উত্তরের দুই-তৃতীয়াংশ আসে মডেলের সেই অংশ থেকে যা আপনি গবেষণা করেননি, আর রাজস্ব, মার্জিন, মূলধনী ব্যয় ও চলতি মূলধন নিয়ে পাঁচ বছরের কাজ বাকি এক-তৃতীয়াংশ নির্ধারণ করে। ব্যবহারিক ফল হলো, প্রতিটি মূল্যায়নের পাশে EV-তে TV-র অংশ জানানো উচিত। প্রায় ৭৫%-এর ওপরে সংখ্যাটি অলংকার হিসেবে পূর্বাভাস জুড়ে দেওয়া একটি চিরস্থায়ী ধারার গণনা।',
      },
    },
    {
      q: {
        en: 'Why is beta particularly unreliable when estimated against the DSEX?',
        bn: 'DSEX-এর বিপরীতে নির্ণীত বিটা কেন বিশেষভাবে অনির্ভরযোগ্য?',
      },
      a: {
        en: 'Three reasons, all structural. First, Chapter 1 established that the DSEX is heavily concentrated in a small number of large banks and telecom names, so for a large-cap constituent you are partly regressing a stock against itself and beta is biased toward 1 by construction. Second, most DSE mid- and small-caps trade thinly, and non-synchronous trading — days with stale or zero returns — biases the covariance toward zero, so the least liquid companies produce the lowest betas and appear safest, which is exactly backwards. Third, the estimate is unstable: changing the window from two years to five, or daily to weekly returns, routinely moves beta on the same company by 0.3 or more. You should still compute it and disclose the window and frequency, but the honest conclusion is that the WACC it produces is the centre of a range, which is why the sensitivity grid is not optional.',
        bn: 'তিনটি কারণ, সবগুলোই কাঠামোগত। প্রথমত, অধ্যায় ১ প্রতিষ্ঠা করেছে যে DSEX অল্প কয়েকটি বড় ব্যাংক ও টেলিকম নামে প্রবলভাবে কেন্দ্রীভূত, তাই বড় মূলধনের উপাদানের ক্ষেত্রে আপনি আংশিকভাবে শেয়ারটিকে তার নিজের বিপরীতেই রিগ্রেস করছেন এবং বিটা গঠনগতভাবেই ১-এর দিকে পক্ষপাতদুষ্ট। দ্বিতীয়ত, ডিএসই-র বেশিরভাগ মাঝারি ও ছোট মূলধনে লেনদেন পাতলা, আর অসমকালীন লেনদেন — বাসি বা শূন্য রিটার্নের দিন — সহভেদাঙ্ককে শূন্যের দিকে টানে, তাই সবচেয়ে তারল্যহীন কোম্পানি সবচেয়ে কম বিটা দেয় ও সবচেয়ে নিরাপদ মনে হয়, যা ঠিক উল্টো। তৃতীয়ত, নির্ণয়টি অস্থির: উইন্ডো দুই থেকে পাঁচ বছর, বা দৈনিক থেকে সাপ্তাহিক রিটার্নে বদলালে একই কোম্পানির বিটা নিয়মিতভাবে ০.৩ বা তার বেশি নড়ে। তবু এটি গণনা করে উইন্ডো ও কম্পাঙ্ক প্রকাশ করা উচিত, কিন্তু সৎ সিদ্ধান্ত হলো এর তৈরি WACC একটি পরিসরের কেন্দ্র — এ কারণেই সংবেদনশীলতা গ্রিড ঐচ্ছিক নয়।',
      },
    },
    {
      q: {
        en: 'How do you choose the terminal growth rate, and what constrains it?',
        bn: 'প্রান্তিক প্রবৃদ্ধির হার কীভাবে বাছেন, এবং কী তাকে সীমাবদ্ধ করে?',
      },
      a: {
        en: 'Two hard constraints and one consistency requirement. First, g must be strictly below WACC, otherwise FCF(1+g)/(WACC−g) is undefined or negative — the arithmetic refusing to value a company that outgrows its cost of capital forever. Second, g must sit below the long-run nominal growth rate of the economy, because a company compounding faster than GDP in perpetuity eventually becomes larger than the economy. Third, g must match the basis of the cash flows: if you forecast in nominal taka, g is nominal, and a 5% nominal g in an economy running 7% inflation is a real decline of about 2% a year forever. That may be the right assumption for a mature generic portfolio facing price controls, but you must know you are making it. In practice a nominal g of 5–7% is arguable for a Bangladeshi manufacturer and 10% is not a forecast.',
        bn: 'দুটি কঠিন শর্ত ও একটি সঙ্গতির দাবি। প্রথমত, g অবশ্যই WACC-এর কঠোরভাবে নিচে থাকবে, নইলে FCF(1+g)/(WACC−g) অসংজ্ঞায়িত বা ঋণাত্মক — পাটিগণিত এমন কোম্পানির মূল্যায়ন করতে অস্বীকার করছে যা চিরকাল নিজের মূলধনের খরচকে ছাড়িয়ে বাড়ে। দ্বিতীয়ত, g অর্থনীতির দীর্ঘমেয়াদি নামিক প্রবৃদ্ধির নিচে থাকতে হবে, কারণ চিরকাল জিডিপির চেয়ে দ্রুত চক্রবৃদ্ধি হওয়া কোম্পানি একসময় অর্থনীতির চেয়ে বড় হয়ে যায়। তৃতীয়ত, g নগদ প্রবাহের ভিত্তির সঙ্গে মিলতে হবে: নামিক টাকায় পূর্বাভাস দিলে g নামিক, আর ৭% মূল্যস্ফীতির অর্থনীতিতে ৫% নামিক g মানে চিরকাল বছরে প্রায় ২% প্রকৃত পতন। দাম নিয়ন্ত্রণের মুখে থাকা পরিণত জেনেরিক পোর্টফোলিওর জন্য এটি সঠিক অনুমান হতে পারে, কিন্তু আপনি যে তা করছেন তা জানা চাই। বাস্তবে বাংলাদেশি উৎপাদকের জন্য ৫–৭% নামিক g যুক্তিসঙ্গত এবং ১০% কোনো পূর্বাভাস নয়।',
      },
    },
    {
      q: {
        en: 'You build a DCF and get BDT 31.89 against a market price of BDT 34.00. What do you actually do with that?',
        bn: 'আপনি DCF করে ৩৪.০০ টাকা বাজারমূল্যের বিপরীতে ৩১.৮৯ টাকা পেলেন। এ দিয়ে আসলে কী করবেন?',
      },
      a: {
        en: 'Not act on it. A 6.2% gap is far inside the model\'s own error bars. Sweeping WACC from 13% to 17% and g from 3% to 7% — a narrow and entirely defensible range — moves the per-share value from BDT 22.59 to BDT 53.30, a 2.36× spread, with ten of twenty-five cells implying buy and fifteen implying sell. The correct use is to run the model backwards: at BDT 34.00 the market is implying roughly 5.7% perpetual growth, or a WACC near 14.3%. Now you have a checkable claim about the business — is 5.7% nominal perpetual growth plausible for a Bangladeshi generics manufacturer? — instead of a point estimate that merely reflects the inputs you chose before you opened the spreadsheet.',
        bn: 'এর ভিত্তিতে কাজ করবেন না। ৬.২% ব্যবধান মডেলের নিজের ত্রুটি-সীমার অনেক ভেতরে। WACC ১৩% থেকে ১৭% ও g ৩% থেকে ৭% ঘোরালে — একটি সংকীর্ণ ও সম্পূর্ণ রক্ষণীয় পরিসর — শেয়ারপ্রতি মূল্য ২২.৫৯ টাকা থেকে ৫৩.৩০ টাকায় যায়, ২.৩৬× ব্যবধান, যেখানে পঁচিশটির দশটি ঘর "কিনুন" ও পনেরোটি "বেচুন" বলে। সঠিক ব্যবহার হলো মডেল উল্টো চালানো: ৩৪.০০ টাকায় বাজার প্রায় ৫.৭% চিরস্থায়ী প্রবৃদ্ধি, বা প্রায় ১৪.৩% WACC নির্দেশ করছে। এবার আপনার হাতে ব্যবসা সম্পর্কে একটি যাচাইযোগ্য দাবি — একটি বাংলাদেশি জেনেরিক উৎপাদকের জন্য ৫.৭% নামিক চিরস্থায়ী প্রবৃদ্ধি কি বিশ্বাসযোগ্য? — কোনো বিন্দু-নির্ণয় নয়, যা কেবল স্প্রেডশিট খোলার আগে বাছা ইনপুটই প্রতিফলিত করে।',
      },
    },
    {
      q: {
        en: 'If a DCF answer is that unstable, why build one at all?',
        bn: 'DCF-এর উত্তর যদি এতটাই অস্থির, তবে এটি আদৌ বানাবেন কেন?',
      },
      a: {
        en: 'Because the product is the assumption set, not the price. To finish a DCF you must write down, as numbers, your revenue growth path, operating margin, tax rate, capex, and working capital intensity — thirty forecasts for a five-year model — and the structure forces them to be mutually consistent. You cannot assume 20% growth with capex below depreciation, because the model shows you the missing capacity; you cannot assume a permanently expanding margin without naming who is losing share. Every one of those numbers is then attackable individually by a colleague, which is what analysis is. The DCF also produces the reverse question, which is the only output that survives scrutiny: what must be true for today\'s price to be right? Chapter 7 made the identical point about the composite cycle score — a model that produces a confident number will be trusted in proportion to its precision rather than its accuracy, so its real value lies in the arguments it forces you to have, not the figure it prints.',
        bn: 'কারণ উৎপাদনটি অনুমানের সেট, দাম নয়। একটি DCF শেষ করতে হলে আপনাকে সংখ্যায় লিখতে হবে রাজস্ব প্রবৃদ্ধির পথ, পরিচালন মার্জিন, কর হার, মূলধনী ব্যয় ও চলতি মূলধন নিবিড়তা — পাঁচ বছরের মডেলে ত্রিশটি পূর্বাভাস — এবং কাঠামোটি এদের পারস্পরিক সঙ্গতি নিশ্চিত করতে বাধ্য করে। অবচয়ের নিচে মূলধনী ব্যয় রেখে ২০% প্রবৃদ্ধি ধরা যায় না, কারণ মডেল অনুপস্থিত সক্ষমতা দেখিয়ে দেয়; কে বাজার হারাচ্ছে তা না বলে চিরকাল প্রসারমাণ মার্জিন ধরা যায় না। এরপর ঐ প্রতিটি সংখ্যা সহকর্মী আলাদাভাবে আক্রমণ করতে পারেন, আর বিশ্লেষণ বলতে সেটিই। DCF উল্টো প্রশ্নটিও তৈরি করে, যা একমাত্র যাচাই-উত্তীর্ণ ফলাফল: আজকের দাম সঠিক হতে হলে কী সত্য হতে হবে? অধ্যায় ৭ সমন্বিত চক্র স্কোর নিয়ে হুবহু একই কথা বলেছে — যে মডেল আত্মবিশ্বাসী সংখ্যা তৈরি করে, তাকে বিশ্বাস করা হয় নির্ভুলতা নয় সূক্ষ্মতার অনুপাতে, তাই এর প্রকৃত মূল্য সে যে তর্কগুলো করতে বাধ্য করে তাতে, সে যে সংখ্যাটি ছাপে তাতে নয়।',
      },
    },
  ],
  quiz: [
    {
      q: {
        en: 'Unlevered free cash flow is correctly computed as:',
        bn: 'আনলিভার্ড মুক্ত নগদ প্রবাহের সঠিক গণনা:',
      },
      options: {
        en: [
          'Net profit + D&A − capex',
          'EBIT(1−t) + D&A − capex − ΔNWC',
          'EBITDA − interest − tax',
          'CFO − dividends paid',
        ],
        bn: [
          'নিট মুনাফা + D&A − মূলধনী ব্যয়',
          'EBIT(1−t) + D&A − মূলধনী ব্যয় − ΔNWC',
          'EBITDA − সুদ − কর',
          'CFO − পরিশোধিত লভ্যাংশ',
        ],
      },
      answer: 1,
    },
    {
      q: {
        en: 'Interest expense is excluded from unlevered FCF because:',
        bn: 'আনলিভার্ড FCF থেকে সুদ ব্যয় বাদ থাকে কারণ:',
      },
      options: {
        en: [
          'Interest is not a real cash cost',
          'The cost of debt is already inside WACC, so including it charges twice',
          'Bangladeshi companies do not disclose interest',
          'Interest is added back in the terminal value instead',
        ],
        bn: [
          'সুদ প্রকৃত নগদ খরচ নয়',
          'ঋণের খরচ ইতিমধ্যেই WACC-এ আছে, তাই যোগ করলে দুইবার ধরা হয়',
          'বাংলাদেশি কোম্পানি সুদ প্রকাশ করে না',
          'বরং প্রান্তিক মূল্যে সুদ ফিরিয়ে যোগ করা হয়',
        ],
      },
      answer: 1,
    },
    {
      q: {
        en: 'With $r_f$ = 11.50%, ERP = 6.00% and β = 0.90, the CAPM cost of equity is:',
        bn: '$r_f$ = ১১.৫০%, ERP = ৬.০০% ও β = ০.৯০ হলে CAPM ইক্যুইটির খরচ:',
      },
      options: {
        en: ['16.90%', '17.50%', '18.40%', '15.75%'],
        bn: ['১৬.৯০%', '১৭.৫০%', '১৮.৪০%', '১৫.৭৫%'],
      },
      answer: 0,
    },
    {
      q: {
        en: 'FCF₅ = 209.387 crore, WACC = 15%, g = 5%. The Gordon terminal value at year 5 is:',
        bn: 'FCF₅ = ২০৯.৩৮৭ কোটি, WACC = ১৫%, g = ৫%। পঞ্চম বছরে Gordon প্রান্তিক মূল্য:',
      },
      options: {
        en: [
          'BDT 2,093.87 crore',
          'BDT 2,198.565 crore',
          'BDT 1,093.075 crore',
          'BDT 4,187.74 crore',
        ],
        bn: [
          '২,০৯৩.৮৭ কোটি টাকা',
          '২,১৯৮.৫৬৫ কোটি টাকা',
          '১,০৯৩.০৭৫ কোটি টাকা',
          '৪,১৮৭.৭৪ কোটি টাকা',
        ],
      },
      answer: 1,
    },
    {
      q: {
        en: 'In the worked NOVOPHARMA DCF, the terminal value accounts for what share of enterprise value?',
        bn: 'কৃত NOVOPHARMA DCF-এ প্রান্তিক মূল্য এন্টারপ্রাইজ মূল্যের কত অংশ?',
      },
      options: {
        en: ['34.15%', '50.00%', '65.85%', '77.25%'],
        bn: ['৩৪.১৫%', '৫০.০০%', '৬৫.৮৫%', '৭৭.২৫%'],
      },
      answer: 2,
    },
    {
      q: {
        en: 'The bridge from enterprise value to equity value requires subtracting:',
        bn: 'এন্টারপ্রাইজ মূল্য থেকে ইক্যুইটি মূল্যে যেতে বিয়োগ করতে হয়:',
      },
      options: {
        en: [
          'Total debt',
          'Net debt (total debt − cash)',
          'Interest expense',
          'The terminal value',
        ],
        bn: [
          'মোট ঋণ',
          'নিট ঋণ (মোট ঋণ − নগদ)',
          'সুদ ব্যয়',
          'প্রান্তিক মূল্য',
        ],
      },
      answer: 1,
    },
    {
      q: {
        en: 'Sweeping WACC 13–17% and g 3–7%, the NOVOPHARMA per-share value ranges from BDT 22.59 to BDT 53.30. The correct conclusion is:',
        bn: 'WACC ১৩–১৭% ও g ৩–৭% ঘোরালে NOVOPHARMA-র শেয়ারপ্রতি মূল্য ২২.৫৯ থেকে ৫৩.৩০ টাকা। সঠিক সিদ্ধান্ত:',
      },
      options: {
        en: [
          'The base case of BDT 31.89 is the answer; the range is noise',
          'The output range spans both a buy and a sell, so the DCF cannot settle the decision on its own',
          'The stock should be bought at any price below BDT 53.30',
          'The model is broken and should be discarded',
        ],
        bn: [
          '৩১.৮৯ টাকার ভিত্তি-কেসই উত্তর; পরিসরটি গোলমাল',
          'ফলাফলের পরিসরে "কিনুন" ও "বেচুন" দুটিই আছে, তাই DCF একা সিদ্ধান্ত নিষ্পত্তি করতে পারে না',
          '৫৩.৩০ টাকার নিচে যেকোনো দামে শেয়ারটি কেনা উচিত',
          'মডেলটি নষ্ট এবং বাতিল করা উচিত',
        ],
      },
      answer: 1,
    },
    {
      q: {
        en: 'Beta estimated for a thinly traded DSE small-cap against the DSEX is most likely to be:',
        bn: 'DSEX-এর বিপরীতে পাতলা লেনদেনের একটি ডিএসই ছোট-মূলধনের বিটা সবচেয়ে সম্ভবত:',
      },
      options: {
        en: [
          'Biased upward, overstating risk',
          'Biased downward, making the company look safer than it is',
          'Unbiased, since thin trading averages out',
          'Exactly 1.00 by construction',
        ],
        bn: [
          'ঊর্ধ্বমুখী পক্ষপাতদুষ্ট, ঝুঁকি বাড়িয়ে দেখায়',
          'নিম্নমুখী পক্ষপাতদুষ্ট, কোম্পানিকে বাস্তবের চেয়ে নিরাপদ দেখায়',
          'পক্ষপাতহীন, কারণ পাতলা লেনদেন গড়ে মিলে যায়',
          'গঠনগতভাবে ঠিক ১.০০',
        ],
      },
      answer: 1,
    },
    {
      q: {
        en: 'In a nominal BDT DCF, a terminal growth rate above long-run nominal GDP growth implies:',
        bn: 'নামিক টাকার DCF-এ দীর্ঘমেয়াদি নামিক জিডিপি প্রবৃদ্ধির ওপরে প্রান্তিক প্রবৃদ্ধির হার বোঝায়:',
      },
      options: {
        en: [
          'A high-quality company deserving a premium',
          'That the company eventually becomes larger than the economy — an impossible assumption',
          'Nothing unusual; g is unconstrained',
          'That the discount rate must also rise',
        ],
        bn: [
          'একটি উচ্চমানের কোম্পানি যা প্রিমিয়াম প্রাপ্য',
          'কোম্পানিটি একসময় অর্থনীতির চেয়ে বড় হয়ে যাবে — একটি অসম্ভব অনুমান',
          'অস্বাভাবিক কিছু নয়; g অসীমাবদ্ধ',
          'বাট্টা হারও বাড়াতে হবে',
        ],
      },
      answer: 1,
    },
    {
      q: {
        en: 'The most defensible single output of a DCF is:',
        bn: 'একটি DCF-এর সবচেয়ে রক্ষণীয় একক ফলাফল:',
      },
      options: {
        en: [
          'A target price stated to two decimal places',
          'The growth or discount rate the current market price implies',
          'The sum of the five explicit-period present values',
          'The enterprise value before the equity bridge',
        ],
        bn: [
          'দুই দশমিক পর্যন্ত ঘোষিত একটি লক্ষ্যমূল্য',
          'বর্তমান বাজারমূল্য যে প্রবৃদ্ধি বা বাট্টা হার নির্দেশ করে',
          'স্পষ্ট সময়কালের পাঁচটি বর্তমান মূল্যের যোগফল',
          'ইক্যুইটি সেতুবন্ধের আগের এন্টারপ্রাইজ মূল্য',
        ],
      },
      answer: 1,
    },
  ],
};
