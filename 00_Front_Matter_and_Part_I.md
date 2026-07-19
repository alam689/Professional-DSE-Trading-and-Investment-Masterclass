# Professional DSE Trading & Investment Masterclass
### বাংলাদেশ শেয়ারবাজারে পেশাদার বিনিয়োগ ও ট্রেডিং

**Volume 1 — Part I: Stock Market Foundation**

---

## Master Table of Contents

| Part | Title | Chapters | Status |
|---|---|---|---|
| I | Stock Market Foundation | 1–8 | ✅ This volume |
| II | Fundamental Analysis | 9–25 | Pending |
| III | Technical Analysis | 26–45 | Pending |
| IV | Professional Trading | 46–55 | Pending |
| V | Professional Portfolio | 56–62 | Pending |
| VI | DSE Case Studies | 63–75 | Pending |
| VII | Practical Tools (Excel / Python / React) | 76–80 | Pending |

---

## How to Use This Book

Every chapter follows a fixed 13-block structure:

1. **Theory** — the formal definition
2. **Simple explanation** — the plain-language version
3. **Real DSE example** — actual Bangladeshi listed companies
4. **Formula** — the mathematics
5. **Manual calculation** — worked by hand
6. **Excel implementation** — copy-paste formulas
7. **Python implementation** — runnable code
8. **Common mistakes**
9. **Professional tips**
10. **Practice exercises**
11. **Interview questions**
12. **Quiz**
13. **Summary**

Not every block applies to every chapter (Chapter 1 has no formula). Where a block is not applicable it is marked *N/A*.

**Disclaimer.** This book is educational. Nothing in it is investment advice. All company references are illustrative teaching examples. Prices, ratios, and figures are indicative and must be re-verified against the DSE website, the company's latest audited annual report, and your broker's terminal before any real decision. Author and publisher accept no liability for investment losses.

---
---

# PART I — STOCK MARKET FOUNDATION

---

# Chapter 1 — The Bangladesh Capital Market

## 1.1 Theory

A **capital market** is the mechanism by which surplus units in an economy (savers) transfer funds to deficit units (businesses needing long-term finance), in exchange for claims on future cash flows. It is distinguished from the **money market**, which deals in instruments of under one year (treasury bills, call money, commercial paper).

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
Brokerage houses (TREC holders), merchant banks (issue management, underwriting, portfolio management), asset management companies (mutual funds), credit rating agencies (CRAB, CRISL, ECRL, ACRSL), and custodian banks.

## 1.2 Simple Explanation

Think of it as a fruit market with four kinds of people.

- **BSEC** is the market inspector who checks the scales and can shut down a cheating stall.
- **DSE/CSE** is the physical marketplace — the stalls, the aisles, the price board.
- **CDBL** is the warehouse that actually holds the fruit and updates the ledger when it changes hands.
- **Your broker** is the agent you send to the market because you are not allowed to walk in yourself.

You never touch the fruit. You just own a line in the warehouse ledger.

## 1.3 Why This Matters Before You Buy Anything

Most retail investors in Bangladesh skip straight to "which share will go up." That is a mistake, for a specific and provable reason: **the Bangladesh market has had two full crashes driven not by company fundamentals but by structural and regulatory failure.**

**The 1996 crash.** Between January and November 1996 the DSE General Index rose from roughly 830 to about 3,650 — a rise of over 300% in eleven months. There was no corresponding growth in corporate earnings. The mechanics were: paper share certificates (no CDBL yet), a settlement cycle long enough to allow the same share to be sold multiple times, kerb-market trading outside the exchange floor, and outright forged certificates. By April 1997 the index was back near 950. Retail investors, who had entered late and at the top, absorbed the loss.

**The 2010–11 crash.** The DGEN peaked around 8,900 in December 2010 and fell to roughly 3,600 by early 2012. The causes were denser: excessive margin loan exposure (ratios as loose as 1:2), omnibus accounts at merchant banks that concealed the true beneficial owner and enabled manipulation, book-building abuse in IPO pricing, direct listing of companies at inflated indicative prices, and a huge liquidity inflow following the 2007–08 political transition with nowhere else to go. The **Khondker Ibrahim Khaled Probe Committee Report (2011)** documented this in detail and named specific mechanisms — it remains the single most useful document a serious DSE investor can read.

The lesson is not "the market is rigged, stay away." The lesson is: **structure explains returns more often than stock-picking does.** A brilliant fundamental analysis of Square Pharmaceuticals in December 2010 would still have lost you 60% by 2012, because the problem was not Square. It was leverage and liquidity.

## 1.4 The Market Today — Scale and Composition

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

## 1.5 Sector Composition of the DSE

By market capitalization, the DSE is dominated by a handful of sectors. Approximate weights (these shift; treat as a shape, not a snapshot):

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

## 1.6 The Indices

- **DSEX (DSE Broad Index)** — launched January 2013, calculated with S&P Dow Jones methodology, free-float market-cap weighted. Base 2,951.91 (base date 27 Jan 2013). This is the headline index today.
- **DSES (DSE Shariah Index)** — Shariah-compliant subset, screened by the Shariah advisory.
- **DS30 (DSE 30 Index)** — 30 selected large, liquid, fundamentally sound companies. Closest thing to a "blue-chip" index.
- **DGEN (DSE General Index)** — the *old* index, discontinued 2013. When someone says "the index hit 8,900 in 2010" they mean DGEN, not DSEX. **Do not compare DGEN and DSEX levels directly** — different base, different methodology, different constituents. This is the single most common error in Bangladeshi market commentary.

**Free-float weighting matters.** DSEX weights by *free float*, not total shares. If a company is 90% held by sponsors and the government, only 10% counts toward index weight. This is why some very large companies have modest index influence.

## 1.7 Real DSE Example — Why Structure Beats Stock-Picking

Consider two hypothetical investors, both entering in November 2010.

**Investor A** does no fundamental work. Buys the DGEN index at ~8,500.
**Investor B** does excellent fundamental work. Correctly identifies Square Pharmaceuticals as the highest-quality company on the exchange — genuine ROE, real export revenue, clean governance, dominant domestic market share. Buys at the December 2010 price.

By February 2012, both are down heavily. Investor B is down less, and recovers faster, and by 2018 is far ahead. But **for fourteen months, being right about the company did not protect against being wrong about the market phase.**

This is the entire argument for Part I existing. Company analysis (Part II) tells you *what* to buy. Market structure and cycle (Part I, Chapters 6–8) tell you *whether to be buying at all*.

## 1.8 Formula

*N/A — this chapter is structural.*

One useful ratio introduced here for later use:

**Market Capitalization to GDP ("Buffett Indicator")**

$$\text{Buffett Indicator} = \frac{\text{Total Market Capitalization}}{\text{Nominal GDP}} \times 100$$

## 1.9 Manual Calculation

Suppose total DSE market capitalization is BDT 7,200,000 crore... let us use consistent units.

- Total DSE market cap ≈ BDT 7.2 trillion (7,20,000 crore)
- Bangladesh nominal GDP ≈ BDT 50 trillion (50,00,000 crore)

$$\text{Buffett Indicator} = \frac{7.2}{50} \times 100 = 14.4\%$$

**Interpretation.** For a developed market, under 50% would scream "undervalued." For Bangladesh it means almost nothing about valuation — it means *under-listing*. The denominator includes an economy that the numerator does not cover. This is the trap: applying a US-derived indicator to a market with 15% listing penetration produces a permanently bullish false signal.

**Correct use:** compare Bangladesh's ratio to *its own history*, not to other countries. If it historically ranges 10–20% and today reads 19%, that is informative. If it reads 14%, that is neutral.

## 1.10 Excel Implementation

```
A1: Total Market Cap (BDT trn)     B1: 7.2
A2: Nominal GDP (BDT trn)          B2: 50
A3: Buffett Indicator (%)          B3: =B1/B2*100

A5: Historical Min (%)             B5: 9.5
A6: Historical Max (%)             B6: 22.0
A7: Percentile Position            B7: =(B3-B5)/(B6-B5)

A9: Signal                         B9: =IF(B7>0.8,"Historically Rich",
                                        IF(B7<0.2,"Historically Cheap","Neutral"))
```

The percentile framing in B7 is the point. The raw number is noise; the position within the market's own history is signal.

## 1.11 Python Implementation

```python
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
    """Where does `current` sit within its own historical band? 0.0 to 1.0."""
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
```

**Expected output:**
```
Snapshot date        : 2024-06-30
Buffett Indicator    : 14.40%
Historical percentile: 39%
Structural signal    : Neutral
Turnover velocity    : 27.8% of market cap p.a.
```

**Reading turnover velocity.** ~28% means roughly a quarter of the market changes hands each year. Compare: NYSE runs well over 100%. Low velocity in Bangladesh reflects large locked sponsor holdings and a small genuine free float. When velocity spikes above ~50%, it usually signals speculative churn rather than investment — a warning sign, not a health sign.

## 1.12 Common Mistakes

1. **Comparing DGEN to DSEX.** Different base, methodology, and constituents. "The market is still below its 2010 peak" is a statement about DGEN and cannot be evaluated using DSEX. This error appears constantly in newspaper commentary.
2. **Applying the Buffett Indicator across countries.** A 15% ratio in a market with 15% listing penetration is not cheapness. It is absence.
3. **Assuming index movement means broad movement.** With GP at ~10% of market cap, a single scrip can move DSEX materially while 300 companies fall.
4. **Ignoring free float.** A company with BDT 20,000 crore market cap but 5% free float has BDT 1,000 crore of tradable stock. Your BDT 50 lakh order is 0.05% of that — you *are* the market on some days.
5. **Believing demutualization solved governance.** It restructured ownership. It did not eliminate manipulation. The 2019–20 and 2022 floor-price episodes demonstrate that regulatory intervention risk remains live and material.
6. **Treating BSEC as a guarantor.** BSEC regulates process. It does not guarantee your outcome, does not validate business quality, and IPO approval is not an endorsement.

## 1.13 Professional Tips

- **Read the Ibrahim Khaled Report (2011).** It is freely available. It is the closest thing to a forensic manual for how this specific market breaks.
- **Bookmark four primary sources:** dsebd.org (prices, disclosures), sec.gov.bd (rules, enforcement orders), bb.org.bd (monetary policy, private sector credit growth), and the company's own annual report PDF. Never rely on a Facebook group for a number you are betting money on.
- **Track private sector credit growth from Bangladesh Bank monthly.** It is arguably the single best macro lead indicator for DSE liquidity. When credit growth accelerates and the call money rate is soft, money finds the market. When Bangladesh Bank tightens, it leaves.
- **Track the free float, not the market cap,** when sizing a position in a mid-cap.
- **Assume regulatory intervention is a permanent feature, not an anomaly.** Floor prices, circuit breakers, and forced buying directives have all occurred. Position sizing must survive a market where you cannot sell.

## 1.14 Practice Exercises

1. Go to dsebd.org and find the current DSEX level, total market capitalization, and number of listed securities. Compute the Buffett Indicator using the latest BBS nominal GDP figure.
2. List the top 10 DSE companies by market capitalization. Compute what percentage of total market cap they represent. Is the number above or below 40%? What does your answer imply about index concentration risk?
3. Pick any one company. Find its total shares outstanding and its sponsor/director holding percentage from the DSE disclosure page. Compute the free float in both shares and BDT. Now compute: what BDT order size would equal 1% of the free float?
4. Find the DGEN closing level on 5 December 2010 and the DSEX closing level today. Explain in three sentences why subtracting one from the other is meaningless.
5. Download Bangladesh Bank's monthly private sector credit growth series for the last 36 months. Plot it against DSEX over the same period. Describe the relationship you observe — including where it breaks down.

## 1.15 Interview Questions

**Q1. What is demutualization and what problem was it meant to solve?**
Separation of exchange ownership from trading rights, mandated by the Exchanges Demutualization Act 2013. Before it, member-brokers owned and governed the exchange they traded on — self-regulation with a direct conflict of interest. Post-demutualization, ownership is via shares, governance sits with a board including independent directors, and a strategic investor holds a mandated stake.

**Q2. Why is the DSEX free-float weighted rather than full market-cap weighted?**
Because full-cap weighting would give index influence to shares that cannot actually be bought. A company 95% held by sponsors has only 5% available to the market; weighting it by 100% of its cap would make the index un-replicable by any real portfolio and would overstate the influence of illiquid names.

**Q3. Name three distinct causes of the 2010–11 crash.**
Excessive margin lending; omnibus accounts concealing beneficial ownership and enabling manipulation; abusive IPO pricing via book-building and direct listing at inflated indicative prices. (Also acceptable: post-2008 liquidity surge with no alternative asset class; weak surveillance capacity.)

**Q4. Why is a 15% market-cap-to-GDP ratio not automatically a buy signal in Bangladesh?**
Because the ratio's denominator captures the whole economy while the numerator captures only ~350 listed companies. Most of the real economy — large RMG groups, private conglomerates — is unlisted. The low ratio reflects under-listing, not undervaluation. It is only meaningful compared to Bangladesh's own historical range.

**Q5. What is CDBL's role, and what specific historical failure does it prevent?**
CDBL is the central depository holding shares dematerialized against BO accounts. It eliminates paper certificates, which in 1996 enabled outright forgery and multiple-sale fraud, and it makes short settlement cycles (T+2) mechanically possible.

## 1.16 Quiz

1. In which year did trading actually begin on what is now the DSE? (a) 1954 (b) 1956 (c) 1964 (d) 1976
2. DSEX base value is: (a) 1,000.00 (b) 2,951.91 (c) 3,650.00 (d) 8,918.51
3. Which index is Shariah-screened? (a) DSEX (b) DS30 (c) DSES (d) DGEN
4. Which body holds your shares in electronic form? (a) BSEC (b) DSE (c) CDBL (d) Your broker
5. The DGEN was discontinued in: (a) 2011 (b) 2013 (c) 2018 (d) It still runs
6. Approximately what share of national turnover does DSE carry? (a) 50% (b) 70% (c) 90%+ (d) 100%
7. Free-float weighting excludes: (a) foreign holdings (b) sponsor/director and government holdings (c) institutional holdings (d) mutual fund holdings
8. The Exchanges Demutualization Act was passed in: (a) 1993 (b) 2010 (c) 2013 (d) 2018
9. Which is the *best* macro lead indicator for DSE liquidity discussed in this chapter? (a) GDP growth (b) private sector credit growth (c) remittance inflow (d) export earnings
10. Rising turnover velocity above ~50% most likely indicates: (a) market health (b) speculative churn (c) foreign inflow (d) improved free float

**Answers:** 1-(b), 2-(b), 3-(c), 4-(c), 5-(b), 6-(c), 7-(b), 8-(c), 9-(b), 10-(b)

## 1.17 Summary

- The Bangladesh capital market has four layers: BSEC (regulator), DSE/CSE (exchanges), CDBL (depository), and intermediaries (brokers, merchant banks, AMCs).
- Both exchanges were demutualized in 2013, separating ownership from trading rights.
- Two structural crashes — 1996 (paper certificates, kerb trading, forgery) and 2010–11 (margin leverage, omnibus accounts, IPO mispricing) — define the market's risk character. Both were structural, not fundamental.
- The market is small relative to the economy (~15% cap/GDP) because most of the real economy is unlisted. This makes cross-country valuation comparison invalid.
- DSEX (free-float weighted, base 2,951.91, launched 2013) replaced DGEN. The two are not comparable.
- Market cap is heavily concentrated; single large scrips can move the index independently of breadth.
- **The core discipline established in this chapter:** structure and cycle determine *whether* to be in the market; company analysis determines *what* to hold. Getting the second right while getting the first wrong still loses money.

---
---

# Chapter 2 — DSE & CSE: Mechanics of the Exchange

## 2.1 Theory

An exchange provides five services: **price discovery**, **liquidity**, **counterparty guarantee via clearing**, **standardization of contracts**, and **surveillance**.

The DSE operates an **order-driven, continuous auction market** with automated matching. There is no market maker on the main board. Price is discovered purely by the interaction of the limit order book — buyers' bids and sellers' asks.

### The Order Book

Every tradable scrip has a book with two sides:

| Bid (Buy) | | Ask (Sell) | |
|---|---|---|---|
| Qty | Price | Price | Qty |
| 5,000 | 245.10 | 245.30 | 2,000 |
| 12,000 | 245.00 | 245.40 | 8,000 |
| 3,500 | 244.90 | 245.50 | 15,000 |

- **Best Bid** = 245.10 (highest anyone will pay)
- **Best Ask** = 245.30 (lowest anyone will accept)
- **Spread** = 0.20 (the cost of immediacy)
- **Depth** = the quantity stacked at each level

**Matching priority is Price, then Time.** A better price always matches first. Among equal prices, the earlier order matches first. This is why order timing matters on illiquid scrips — being second in a queue at the same price on a rising stock means you may never fill.

### Trading Sessions

| Session | Approx. Time | What happens |
|---|---|---|
| Pre-Opening | 09:30 – 10:00 | Orders entered, no matching; indicative equilibrium price calculated |
| Opening | 10:00 | Opening cross executes |
| Continuous Trading | 10:00 – 14:20 | Live matching, price–time priority |
| Post-Closing | 14:20 – 14:30 | Trades at closing price only |

*(Session times have been revised repeatedly — including during COVID and various regulatory phases. Always verify current timings on dsebd.org.)*

### Circuit Breakers

DSE applies a daily price movement limit that varies by the previous close. Indicative structure:

| Previous Close (BDT) | Daily Limit |
|---|---|
| Up to 200 | 10% |
| 200 – 500 | 8.75% |
| 500 – 1,000 | 7.50% |
| 1,000 – 2,000 | 6.25% |
| 2,000 – 5,000 | 5.00% |
| Above 5,000 | 3.75% |

The logic is that a 10% move on a BDT 5,000 share is BDT 500 of absolute movement, which is a far larger risk transfer than 10% on a BDT 20 share. So limits tighten as price rises.

**The critical consequence:** a circuit breaker does not stop a fall. It *spreads* it. A stock that "should" fall 40% falls 10% a day for four days — and during those four days, if it is locked at the lower circuit with no bids, **you cannot sell at all.** The limit converts price risk into liquidity risk. This is not a protection. It is a transformation.

## 2.2 Simple Explanation

The exchange is an auction hall with a rule book.

- Everyone shouts what they will pay (bids) and what they will accept (asks).
- The clerk (the matching engine) pairs the highest bidder with the lowest seller. If they meet, a trade happens.
- The **spread** is the gap between the highest bidder and the lowest seller. On a busy stock like GP it is one tick. On a dead textile scrip it might be 3% — and that 3% is a real, immediate loss the moment you buy.
- The **circuit breaker** is a rule that says: if the price moves more than X% today, we stop. It sounds protective. It is not. If everyone wants out and nobody wants in, the price hits the floor and *nothing trades*. You are locked in, holding, watching.

## 2.3 Real DSE Example — The Liquidity Trap

Two companies, same day.

**Grameenphone (GP)** — market cap ~BDT 40,000 crore, daily turnover ~BDT 15 crore, spread typically 0.10–0.30 BDT on a ~290 BDT price (≈0.07%). You can move BDT 50 lakh without materially disturbing the price.

**A small textile scrip** — market cap ~BDT 80 crore, free float perhaps 25% = BDT 20 crore, daily turnover ~BDT 30 lakh, spread perhaps 0.40 BDT on a 14 BDT price (≈2.9%).

Now: you want to deploy BDT 20 lakh in the textile scrip.

- BDT 20 lakh is **6.7% of daily turnover** and **1% of the entire free float**.
- Buying it will move the price against you — this is **market impact**.
- Selling it later, in a falling market, when turnover collapses to BDT 5 lakh/day, means **four full days of selling** *if you are the only seller*. You will not be.

**Round-trip cost estimate on the textile scrip:**

| Component | Cost |
|---|---|
| Spread (half on entry, half on exit) | ~2.9% |
| Brokerage (both sides, ~0.35% each) | ~0.70% |
| Market impact (entry + exit) | ~2.0% |
| **Total round trip** | **~5.6%** |

**The stock must rise 5.6% before you break even.** On GP the same round trip costs perhaps 0.85%.

This is the single most under-appreciated fact in retail DSE trading. People chase the small scrip because "it can double." They do not price the fact that they are paying 5.6% for the privilege of entering, and may be unable to exit at all.

## 2.4 Formula

**Bid-Ask Spread (absolute):**
$$S = P_{ask} - P_{bid}$$

**Relative Spread:**
$$S_{rel} = \frac{P_{ask} - P_{bid}}{P_{mid}} \times 100 \qquad \text{where } P_{mid} = \frac{P_{ask} + P_{bid}}{2}$$

**Days to Liquidate:**
$$D = \frac{\text{Position Value}}{\text{ADTV} \times \text{Participation Rate}}$$

where ADTV = Average Daily Traded Value, and Participation Rate is the fraction of daily volume you can realistically be without dominating the tape (professionals use 10–20%).

**Total Round-Trip Cost:**
$$C_{total} = S_{rel} + 2b + 2I$$

where $b$ = brokerage rate per side, $I$ = estimated market impact per side.

**Circuit Breaker Bands:**
$$P_{upper} = P_{prev} \times (1 + L), \qquad P_{lower} = P_{prev} \times (1 - L)$$

where $L$ is the slab limit for that price band.

## 2.5 Manual Calculation

**Scenario.** Textile scrip. Best bid 13.80, best ask 14.20. ADTV = BDT 30 lakh. You want BDT 20 lakh. Brokerage 0.35% per side. Assume market impact 1.0% per side.

**Step 1 — Mid price:**
$$P_{mid} = \frac{14.20 + 13.80}{2} = 14.00$$

**Step 2 — Relative spread:**
$$S_{rel} = \frac{14.20 - 13.80}{14.00} \times 100 = \frac{0.40}{14.00} \times 100 = 2.857\%$$

**Step 3 — Days to liquidate at 15% participation:**
$$D = \frac{20,00,000}{30,00,000 \times 0.15} = \frac{20,00,000}{4,50,000} = 4.44 \text{ days}$$

**Step 4 — Days to liquidate in a stressed market** (turnover falls to BDT 5 lakh):
$$D_{stress} = \frac{20,00,000}{5,00,000 \times 0.15} = 26.7 \text{ days}$$

**Step 5 — Total round-trip cost:**
$$C_{total} = 2.857\% + 2(0.35\%) + 2(1.0\%) = 2.857 + 0.70 + 2.00 = 5.557\%$$

**Step 6 — Circuit breaker band** (previous close 14.00, so ≤200 slab → 10%):
$$P_{upper} = 14.00 \times 1.10 = 15.40, \qquad P_{lower} = 14.00 \times 0.90 = 12.60$$

**Interpretation.** You need +5.56% just to break even. Your normal exit takes 4.4 days. In a stressed market it takes **27 days** — over a month of forced holding while the price falls 10% per day at the lower circuit. Twenty-seven days at even a fraction of that decline is catastrophic.

**This is the calculation almost no retail investor performs, and it is the one that would prevent most of their losses.**

## 2.6 Excel Implementation

```
A1: Best Bid                  B1: 13.80
A2: Best Ask                  B2: 14.20
A3: Mid Price                 B3: =(B1+B2)/2
A4: Spread (abs)              B4: =B2-B1
A5: Spread (%)                B5: =B4/B3*100

A7: Position Size (BDT)       B7: 2000000
A8: ADTV (BDT)                B8: 3000000
A9: Participation Rate        B9: 0.15
A10: Days to Liquidate        B10: =B7/(B8*B9)

A12: Stressed ADTV (BDT)      B12: 500000
A13: Days (Stressed)          B13: =B7/(B12*B9)

A15: Brokerage per side (%)   B15: 0.35
A16: Impact per side (%)      B16: 1.00
A17: Round-Trip Cost (%)      B17: =B5+(2*B15)+(2*B16)

A19: Prev Close               B19: 14.00
A20: Slab Limit               B20: =IF(B19<=200,0.10,IF(B19<=500,0.0875,
                                    IF(B19<=1000,0.075,IF(B19<=2000,0.0625,
                                    IF(B19<=5000,0.05,0.0375)))))
A21: Upper Circuit            B21: =ROUND(B19*(1+B20),1)
A22: Lower Circuit            B22: =ROUND(B19*(1-B20),1)

A24: VERDICT                  B24: =IF(OR(B5>2,B13>10),"REJECT - Illiquid",
                                    IF(B17>3,"CAUTION - High friction","Acceptable"))
```

Cell B24 is the whole point of the sheet. Build this once, and run every small-cap idea through it before you place the order.

## 2.7 Python Implementation

```python
"""
Chapter 2 — DSE market microstructure: spread, liquidity, and circuit breakers.
Educational.
"""
from dataclasses import dataclass


# DSE circuit breaker slabs: (upper price bound, limit fraction)
CIRCUIT_SLABS = [
    (200,    0.1000),
    (500,    0.0875),
    (1000,   0.0750),
    (2000,   0.0625),
    (5000,   0.0500),
    (float("inf"), 0.0375),
]


def circuit_limit(prev_close: float) -> float:
    """Return the daily price-movement limit fraction for a given previous close."""
    for bound, limit in CIRCUIT_SLABS:
        if prev_close <= bound:
            return limit
    return 0.0375


def circuit_bands(prev_close: float) -> tuple[float, float]:
    """Return (lower_circuit, upper_circuit) for a given previous close."""
    lim = circuit_limit(prev_close)
    return (round(prev_close * (1 - lim), 1),
            round(prev_close * (1 + lim), 1))


@dataclass
class OrderBookTop:
    """Top-of-book snapshot for one scrip."""
    ticker: str
    best_bid: float
    best_ask: float
    adtv_bdt: float          # average daily traded value
    stressed_adtv_bdt: float # realistic ADTV in a falling market

    @property
    def mid(self) -> float:
        return (self.best_bid + self.best_ask) / 2

    @property
    def spread_abs(self) -> float:
        return self.best_ask - self.best_bid

    @property
    def spread_pct(self) -> float:
        return (self.spread_abs / self.mid) * 100


def days_to_liquidate(position_bdt: float, adtv_bdt: float,
                      participation: float = 0.15) -> float:
    """How many trading days to exit at a given share of daily volume."""
    if adtv_bdt <= 0:
        return float("inf")
    return position_bdt / (adtv_bdt * participation)


def round_trip_cost(spread_pct: float, brokerage_pct: float = 0.35,
                    impact_pct: float = 1.0) -> float:
    """Total cost of entering and exiting, in percent."""
    return spread_pct + (2 * brokerage_pct) + (2 * impact_pct)


def assess(book: OrderBookTop, position_bdt: float,
           brokerage_pct: float = 0.35, impact_pct: float = 1.0) -> dict:
    """Full pre-trade liquidity assessment for one scrip."""
    d_normal = days_to_liquidate(position_bdt, book.adtv_bdt)
    d_stress = days_to_liquidate(position_bdt, book.stressed_adtv_bdt)
    cost = round_trip_cost(book.spread_pct, brokerage_pct, impact_pct)

    if book.spread_pct > 2.0 or d_stress > 10:
        verdict = "REJECT — Illiquid"
    elif cost > 3.0:
        verdict = "CAUTION — High friction"
    else:
        verdict = "Acceptable"

    return {
        "ticker": book.ticker,
        "mid": book.mid,
        "spread_pct": book.spread_pct,
        "days_normal": d_normal,
        "days_stressed": d_stress,
        "round_trip_cost_pct": cost,
        "breakeven_move_pct": cost,
        "verdict": verdict,
    }


if __name__ == "__main__":
    candidates = [
        OrderBookTop("GP",      289.70, 289.90, 15_00_00_000, 4_00_00_000),
        OrderBookTop("TEXTILE", 13.80,  14.20,    30_00_000,     5_00_000),
    ]

    POSITION = 20_00_000  # BDT 20 lakh

    print(f"{'Scrip':<10} {'Spread%':>8} {'Days':>7} {'Days(str)':>10} "
          f"{'RT Cost%':>9}  Verdict")
    print("-" * 72)
    for c in candidates:
        r = assess(c, POSITION)
        print(f"{r['ticker']:<10} {r['spread_pct']:>8.2f} {r['days_normal']:>7.1f} "
              f"{r['days_stressed']:>10.1f} {r['round_trip_cost_pct']:>9.2f}  "
              f"{r['verdict']}")

    print()
    for px in (14.00, 289.80, 750.00, 2400.00):
        lo, hi = circuit_bands(px)
        print(f"Prev close {px:>8.2f} -> circuit band [{lo:.1f}, {hi:.1f}] "
              f"(±{circuit_limit(px)*100:.2f}%)")
```

**Expected output:**
```
Scrip        Spread%    Days  Days(str)  RT Cost%  Verdict
------------------------------------------------------------------------
GP              0.07     0.9        3.3      2.77  Acceptable
TEXTILE         2.86     4.4       26.7      5.56  REJECT — Illiquid

Prev close    14.00 -> circuit band [12.6, 15.4] (±10.00%)
Prev close   289.80 -> circuit band [264.4, 315.2] (±8.75%)
Prev close   750.00 -> circuit band [693.8, 806.3] (±7.50%)
Prev close  2400.00 -> circuit band [2280.0, 2520.0] (±5.00%)
```

Note that GP is flagged "Acceptable" despite a 2.77% round-trip cost — because that cost is dominated by the *assumed* impact figure, which for GP at this size is unrealistically high. **Calibrate `impact_pct` to position size relative to ADTV**; a flat 1% is a teaching simplification, not a production model. In Part IV we replace it with a square-root impact model.

## 2.8 Common Mistakes

1. **Treating the circuit breaker as protection.** It caps the daily print, not the loss. Locked at lower circuit = cannot sell = unlimited effective loss until it unlocks.
2. **Ignoring the spread on small caps.** A 3% spread means you are down 3% at the instant of purchase. Compounded across frequent trading in illiquid names, this alone destroys accounts.
3. **Sizing by conviction instead of by liquidity.** "I'm very confident" is not a reason to hold 1% of a company's free float.
4. **Using normal-market ADTV to plan an exit.** You will exit in a bad market. Plan with stressed ADTV. The ratio between the two is often 5:1 or worse.
5. **Placing market orders on illiquid scrips.** With a thin book, a market order walks the ladder and fills at prices you would never have chosen. **Always use limit orders on anything outside the top ~50 scrips by turnover.**
6. **Confusing volume with liquidity.** A scrip can print high volume on circuit-locked days with a handful of trades between related parties. Volume is a number. Liquidity is the ability to exit at a fair price. They are not the same.

## 2.9 Professional Tips

- **Build a hard liquidity filter and never override it.** Suggested floor: ADTV ≥ BDT 50 lakh, relative spread ≤ 1%, stressed days-to-exit ≤ 5. If a stock fails, it does not enter the portfolio regardless of how good the story is.
- **Cap your position at ≤ 10% of ADTV.** This keeps a single-day exit possible at ~10% participation.
- **Watch the pre-opening indicative price.** A large gap between the indicative equilibrium and the previous close signals overnight news is being priced. It is free information available before you commit.
- **Read the depth, not just the top of book.** A best bid of 5,000 shares with nothing behind it is a mirage. Depth-of-market is where the real liquidity picture is.
- **When a stock locks at upper circuit repeatedly with a huge queue, that is not strength — it is an absence of sellers.** The queue that forms on the way up evaporates on the way down. Ask why there are no sellers before you join the buy queue.
- **Log your actual fills versus your intended price.** The difference is your real market impact. After 50 trades you will have a personally calibrated impact model, which is worth more than any textbook estimate.

## 2.10 Practice Exercises

1. Open your broker terminal. For GP and for any scrip outside the top 100 by turnover, record the top 5 levels of depth on both sides. Compute the relative spread for each. Compute the total BDT value sitting within 1% of the mid on each side.
2. For the illiquid scrip in (1), compute days-to-liquidate for a BDT 10 lakh position using its 30-day ADTV, at 10% and at 20% participation.
3. Pull the 30-day ADTV for that scrip. Now pull its ADTV during the worst 10-day stretch of the last 12 months. Compute the ratio. Redo exercise (2) using the stressed figure.
4. Write the circuit-breaker slab function from scratch in Excel using nested IF, then verify it against the Python output in 2.7 for prices 150, 350, 800, 1500, 3000, 6000.
5. Track one illiquid scrip for 10 trading days. Each day record: open, high, low, close, volume, number of trades. Compute average trade size. What does an average trade size of 50,000 shares on a scrip with 30 trades per day tell you about who is actually trading it?
6. Using your own last 20 trades, compute the average difference between your intended entry price and your actual fill. That number is your personal market impact. Compare it to the 1% assumption in this chapter.

## 2.11 Interview Questions

**Q1. Explain price–time priority.**
The matching engine ranks orders first by price (better prices match first — higher bids, lower asks), then among orders at the same price, by time of entry (earlier first). It ensures fairness and rewards both aggressive pricing and early commitment.

**Q2. Why do DSE circuit-breaker limits tighten as share price rises?**
Because the limit governs percentage movement but risk is transferred in absolute BDT. A 10% move on a BDT 5,000 share is BDT 500 per share; on a BDT 20 share it is BDT 2. Tightening the percentage as price rises roughly equalizes the absolute risk per share across the slabs.

**Q3. A stock is locked at lower circuit for three consecutive days. What is your actual risk?**
Effectively unbounded within the window. The circuit caps the printed price change but does not create buyers. With no bids, no exit is possible at any price, so the position cannot be closed and the loss compounds daily. The risk has transformed from price risk into liquidity risk, which is worse because it removes optionality.

**Q4. Why should you never place a market order on an illiquid scrip?**
A market order consumes the book from the top down until filled. On a thin book, it will walk through multiple price levels and fill at a volume-weighted price far from the last trade — sometimes several percent away. A limit order caps that.

**Q5. Distinguish volume from liquidity.**
Volume is quantity traded. Liquidity is the ability to transact size at a price close to the prevailing mid, quickly. A scrip can have high volume from a few large related-party crosses while having near-zero genuine liquidity — no depth, wide spread, and no ability to exit meaningfully.

**Q6. How would you size a position in a stock with BDT 40 lakh ADTV?**
At a 10%-of-ADTV cap, maximum position ≈ BDT 4 lakh, which allows exit in roughly one day at 10% participation in a normal market. I would then stress-test using the worst 10-day ADTV of the past year — if that is BDT 8 lakh, the same position takes 5 days to exit under stress, which is my tolerance ceiling. Beyond that, I reduce size or reject.

## 2.12 Quiz

1. DSE's main board uses: (a) a market maker (b) order-driven continuous auction (c) call auction only (d) dealer quotes
2. Matching priority is: (a) time then price (b) price then time (c) quantity then price (d) random
3. Spread is the cost of: (a) brokerage (b) immediacy (c) settlement (d) tax
4. A share with previous close BDT 800 has a circuit limit of: (a) 10% (b) 8.75% (c) 7.50% (d) 6.25%
5. Locked at lower circuit means: (a) you are protected (b) you likely cannot sell (c) trading is halted for all scrips (d) the price will rebound
6. Days-to-liquidate uses which denominator? (a) market cap (b) ADTV × participation rate (c) free float (d) shares outstanding
7. Round-trip cost includes the spread how many times? (a) zero (b) once (c) twice (d) four times
8. On a thin book, the correct order type is: (a) market (b) limit (c) stop-market (d) any
9. Stressed ADTV versus normal ADTV is typically: (a) higher (b) identical (c) much lower (d) unpredictable
10. A position equal to 1% of free float in a small cap is: (a) prudent (b) dangerous — exit may be impossible (c) irrelevant (d) required for meaningful returns

**Answers:** 1-(b), 2-(b), 3-(b), 4-(c), 5-(b), 6-(b), 7-(b), 8-(b), 9-(c), 10-(b)

## 2.13 Summary

- DSE is an order-driven continuous auction with automated price–time priority matching and no main-board market maker.
- The order book's spread is the cost of immediacy; its depth is the real measure of liquidity. Top-of-book alone is misleading.
- Circuit breakers tighten as price rises (10% → 3.75%) to equalize absolute risk, but they **do not protect you** — they convert price risk into liquidity risk. A locked circuit means no exit.
- Round-trip cost = spread + 2×brokerage + 2×impact. On an illiquid textile scrip this can exceed 5.5%, meaning the stock must rise 5.5% before you break even. On GP it is under 1%.
- Days-to-liquidate must be computed with **stressed** ADTV, not normal ADTV, because you will always be exiting in a bad market. The stressed figure is often 5× worse.
- **Discipline established:** liquidity is a hard filter, applied before analysis, and never overridden by conviction. A great company you cannot exit is not a great investment.

---

*Chapters 3–8 (IPO, Primary vs Secondary Market, Market Participants, Bull & Bear, Market Cycle, Sector Rotation) follow in the next section of Part I.*
