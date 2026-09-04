import type { Course, SeedEdge } from './types.js';

export const financeEdges: SeedEdge[] = [
  { id: 'fin-math-statistics', source: 'fin-mathematics', target: 'fin-statistics' },
  { id: 'fin-math-valuation', source: 'fin-mathematics', target: 'fin-valuation' },
  { id: 'fin-micro-macro', source: 'fin-microeconomics', target: 'fin-macroeconomics' },
  { id: 'fin-micro-corporate', source: 'fin-microeconomics', target: 'fin-corporate-finance' },
  { id: 'fin-accounting-corporate', source: 'fin-accounting', target: 'fin-corporate-finance' },
  { id: 'fin-accounting-valuation', source: 'fin-accounting', target: 'fin-valuation' },
  { id: 'fin-statistics-econometrics', source: 'fin-statistics', target: 'fin-econometrics' },
  { id: 'fin-corporate-valuation', source: 'fin-corporate-finance', target: 'fin-valuation' },
  { id: 'fin-corporate-financial-modelling', source: 'fin-corporate-finance', target: 'fin-financial-modelling' },
  { id: 'fin-macro-markets', source: 'fin-macroeconomics', target: 'fin-financial-markets' },
  { id: 'fin-markets-valuation', source: 'fin-financial-markets', target: 'fin-valuation' },
  { id: 'fin-markets-derivatives', source: 'fin-financial-markets', target: 'fin-derivatives' },
  { id: 'fin-econometrics-risk', source: 'fin-econometrics', target: 'fin-risk' },
  { id: 'fin-valuation-financial-modelling', source: 'fin-valuation', target: 'fin-financial-modelling' },
  { id: 'fin-valuation-capstone', source: 'fin-valuation', target: 'fin-capstone' },
  { id: 'fin-risk-derivatives', source: 'fin-risk', target: 'fin-derivatives' },
  { id: 'fin-risk-regulation', source: 'fin-risk', target: 'fin-regulation' },
  { id: 'fin-derivatives-risk', source: 'fin-derivatives', target: 'fin-risk' },
  { id: 'fin-financial-modelling-capstone', source: 'fin-financial-modelling', target: 'fin-capstone' },
  { id: 'fin-regulation-capstone', source: 'fin-regulation', target: 'fin-capstone' },
  { id: 'fin-derivatives-capstone', source: 'fin-derivatives', target: 'fin-capstone' },
];

export const financeCourses: Course[] = [
  {
    id: 'fin-mathematics',
    title: 'Mathematics for Finance',
    category: 'Semester 1',
    description:
      'Functions, percentage change, discounting, and quantitative reasoning for financial decisions.',
    rank: 0,
    order: 0,
    coreNotes: `# Mathematics for Finance

## 1. Time Value of Money (TVM) Foundations
- **Core Principle**: A monetary unit received today is worth more than the same unit received in the future due to its earning potential (interest), inflation, and uncertainty.
- **Future Value (FV) & Present Value (PV)**:
  - *Discrete Compounding*:
    $$FV = PV \\cdot (1 + r)^n \\quad \\iff \\quad PV = \\frac{FV}{(1 + r)^n}$$
  - *Continuous Compounding*:
    $$FV = PV \\cdot e^{r \\cdot t} \\quad \\iff \\quad PV = FV \\cdot e^{-r \\cdot t}$$
- **Effective Annual Rate (EAR)**:
  $$EAR = \\left(1 + \\frac{r_{\\text{nominal}}}{m}\\right)^m - 1$$
  where $m$ is the compounding frequency per year.

## 2. Annuities and Perpetuities
- **Ordinary Annuity**: Stream of equal payments made at the end of each period:
  $$PV_{\\text{annuity}} = C \\cdot \\left[\\frac{1 - (1+r)^{-n}}{r}\\right]$$
- **Annuity Due**: Payments made at the beginning of each period ($PV_{\\text{due}} = PV_{\\text{ordinary}} \\cdot (1 + r)$).
- **Perpetuities**: Constant cash flows continuing indefinitely:
  $$PV_{\\text{perpetuity}} = \\frac{C}{r}$$
- **Growing Perpetuity (Gordon Growth Foundation)**:
  $$PV = \\frac{C_1}{r - g} \\quad (\\text{valid for } r > g)$$

## 3. Calculus in Financial Decision-Making
- **Marginal Analysis**: Derivatives represent marginal revenue ($MR = dTR/dQ$) and marginal cost ($MC = dTC/dQ$). Profit maximization occurs where $MR = MC$.
- **Bond Duration & Convexity**: First and second Taylor series derivatives of bond price with respect to yield to maturity (YTM).`,
    reviewPrompts: `# Mathematics for Finance — Problems & Applications

## Quantitative Exercises
1. **Compounding Frequency Comparison**: An investor deposits $100,000 at a nominal annual interest rate of 6%. Compare the accumulated balance after 5 years under annual, monthly, daily, and continuous compounding.
2. **Mortgage Amortization Mechanics**: Derive the formula for the fixed monthly payment $PMT$ on a 30-year fixed-rate mortgage of principal $P$ and monthly interest rate $r$. Explain how the interest portion versus principal repayment portion shifts over the 360-month loan life.
3. **Growing Annuity Valuation**: Calculate the present value of an income stream starting at $50,000 next year, growing at 3% annually for 15 years, discounted at an 8% hurdle rate.`,
  },
  {
    id: 'fin-microeconomics',
    title: 'Microeconomics',
    category: 'Semester 1',
    description:
      'Consumer choice, firms, market structure, and incentives behind prices and allocation.',
    rank: 0,
    order: 1,
    coreNotes: `# Microeconomic Theory & Market Structures

## 1. Supply, Demand, and Equilibrium
- **The Law of Demand & Supply**: Inverse relationship between price and quantity demanded; direct relationship for quantity supplied, assuming *ceteris paribus*.
- **Price Elasticity**:
  - *Price Elasticity of Demand ($E_d$)*: $E_d = \\frac{\\% \\Delta Q_d}{\\% \\Delta P} = \\frac{dQ}{dP} \\cdot \\frac{P}{Q}$.
  - Elastic ($|E_d| > 1$), Inelastic ($|E_d| < 1$), Unitary ($|E_d| = 1$).
- **Consumer and Producer Surplus**:
  - *Consumer Surplus (CS)*: Area below demand curve and above market equilibrium price.
  - *Producer Surplus (PS)*: Area above supply curve and below market price.
  - *Deadweight Loss (DWL)*: Loss of total economic surplus caused by price ceilings, price floors, tariffs, or monopoly power.

## 2. Consumer Choice & Utility Maximization
- **Indifference Curves**: Combinations of two goods yielding identical utility; marginal rate of substitution ($MRS_{xy} = -\\frac{MU_x}{MU_y}$).
- **Budget Constraint**: $P_x X + P_y Y = I$.
- **Utility Maximization**: Tangency condition:
  $$\\frac{MU_x}{P_x} = \\frac{MU_y}{P_y}$$
- **Income and Substitution Effects**: Slutsky / Hicksian decomposition distinguishing the relative price change effect from purchasing power alteration.

## 3. Theory of the Firm & Cost Curves
- **Production Function**: $Q = f(K, L)$. Marginal Product of Labor ($MP_L = \\partial Q / \\partial L$). Law of diminishing marginal returns.
- **Cost Structures**: Total Cost $TC = TFC + TVC$. Marginal Cost $MC = dTC/dQ$. Average Total Cost ($ATC$) intersects $MC$ at its minimum point.
- **Economies of Scale**: Long-run average cost ($LRAC$) decreases as output expands due to specialization, bulk purchasing, and capital intensity.

## 4. Market Structures
- **Perfect Competition**: Price takers ($P = MR = MC$), zero economic profits in long-run equilibrium.
- **Monopoly**: Single seller with high barriers to entry; sets output where $MR = MC$, prices along demand curve ($P > MC$). Produces deadweight loss.
- **Oligopoly & Game Theory**: Interdependent firms (Cournot quantity competition, Bertrand price competition). Nash equilibrium in prisoner's dilemma pricing games.`,
    reviewPrompts: `# Microeconomics — Case Analysis & Applications

## Analytical Questions
1. **Tariff and Deadweight Loss**: Graphically and mathematically demonstrate the impact of imposing a specific tariff $t$ on an imported commodity in a small open economy. Identify government revenue, loss in consumer surplus, gain in producer surplus, and deadweight loss triangles.
2. **Natural Monopoly Regulation**: Why do natural monopolies (e.g., water utilities, electrical transmission grids) have continuously declining $LRAC$? Explain the dilemma regulators face when choosing between marginal-cost pricing ($P = MC$, requiring subsidies) and average-cost pricing ($P = ATC$).
3. **Cournot Duopoly Equilibrium**: Two identical firms produce identical goods with marginal cost $c = 10$. Market demand is $P = 100 - (Q_1 + Q_2)$. Derive each firm's reaction function and find the Cournot-Nash equilibrium output and price.`,
  },
  {
    id: 'fin-accounting',
    title: 'Financial Accounting',
    category: 'Semester 1',
    description:
      'Financial statements, accruals, cash flow, and the language used to assess organisations.',
    rank: 0,
    order: 2,
    coreNotes: `# Financial Accounting & Reporting Analysis

## 1. Accounting Equation & Double-Entry Bookkeeping
- **Fundamental Balance Sheet Equation**:
  $$\\text{Assets} = \\text{Liabilities} + \\text{Shareholders' Equity}$$
- **Double-Entry Principle**: Every transaction affects at least two accounts. Debits increase assets and expenses; credits increase liabilities, equity, and revenues.
- **Accrual vs. Cash Accounting**: Accrual accounting recognizes revenues when earned (performance obligation satisfied) and expenses when incurred, matching costs with associated revenues (Matching Principle) regardless of cash flow timing.

## 2. The Three Core Financial Statements
- **The Balance Sheet (Statement of Financial Position)**:
  - *Current Assets*: Cash, short-term marketable securities, accounts receivable, inventory.
  - *Non-Current Assets*: Property, Plant & Equipment (PP&E, net of accumulated depreciation), intangible assets, goodwill.
  - *Liabilities*: Accounts payable, accrued expenses, short-term debt, long-term bonds/leases.
  - *Equity*: Common stock, additional paid-in capital (APIC), retained earnings, treasury stock.
- **The Income Statement (P&L)**:
  - Revenue $\\to$ Cost of Goods Sold (COGS) $\\to$ Gross Profit.
  - Operating Expenses (SG&A, R&D, D&A) $\\to$ Operating Income (EBIT).
  - Interest Expense & Tax $\\to$ Net Income.
- **The Cash Flow Statement**:
  - *Cash from Operations (CFO)*: Starts with Net Income, adds back non-cash expenses (D&A), and adjusts for working capital changes ($\\Delta \\text{AR}, \\Delta \\text{Inventory}, \\Delta \\text{AP}$).
  - *Cash from Investing (CFI)*: Capital expenditures (CapEx), asset acquisitions/disposals.
  - *Cash from Financing (CFF)*: Debt issuance/repayment, share repurchases, dividends paid.

## 3. Revenue Recognition & Inventory Methods
- **IFRS 15 / ASC 606 5-Step Model**:
  1. Identify contract with customer.
  2. Identify performance obligations.
  3. Determine transaction price.
  4. Allocate transaction price to performance obligations.
  5. Recognize revenue when performance obligation is satisfied.
- **Inventory Valuation**: FIFO (First-In, First-Out) vs. Weighted Average Cost vs. LIFO (Last-In, First-Out, US GAAP only). In inflationary environments, FIFO yields higher gross profit and higher inventory value; LIFO lowers taxable income.`,
    reviewPrompts: `# Financial Accounting — Statement Linkages & Forensic Review

## Practical Modeling Exercises
1. **Three-Statement Integration**: Walk a $100 depreciation expense through all three financial statements, assuming a 25% corporate income tax rate.
2. **Working Capital Dynamics**: Explain why an increase in Accounts Receivable reduces Cash Flow from Operations, while an increase in Accounts Payable increases Cash Flow from Operations.
3. **Goodwill Impairment**: What economic events create goodwill during an acquisition? Under IFRS and US GAAP, how is goodwill evaluated for impairment, and can an impairment loss be reversed?`,
  },
  {
    id: 'fin-statistics',
    title: 'Probability & Statistics',
    category: 'Semester 2',
    description:
      'Distributions, estimation, hypothesis testing, and uncertainty in financial observations.',
    rank: 1,
    order: 0,
    coreNotes: `# Probability & Statistical Foundations for Finance

## 1. Probability Distributions in Finance
- **Discrete Distributions**: Binomial distribution models binary outcomes (default vs. no-default; up-step vs. down-step in Cox-Ross-Rubinstein binomial option pricing).
- **Continuous Distributions**:
  - *Normal Distribution*: Symmetric bell curve defined by mean $\\mu$ and variance $\\sigma^2$. Symmetrical skewness ($S=0$) and kurtosis ($K=3$).
  - *Lognormal Distribution*: If asset returns are normally distributed, asset prices follow a lognormal distribution ($S_t > 0$, preventing negative stock prices).
  - *Student's t-Distribution*: Heavier tails than normal distribution, capturing the empirical fat-tail risk (kurtosis $> 3$) observed in financial market crashes.

## 2. Descriptive Statistics & Risk Metrics
- **Expected Value & Variance**:
  $$E[X] = \\sum x_i p_i, \\quad \\text{Var}(X) = E[(X - E[X])^2]$$
- **Covariance and Correlation**:
  $$\\text{Cov}(X, Y) = E[(X - \\mu_X)(Y - \\mu_Y)], \\quad \\rho_{XY} = \\frac{\\text{Cov}(X, Y)}{\\sigma_X \\sigma_Y}$$
  Bounded within $[-1, 1]$. Core driver of portfolio diversification benefits.
- **Skewness and Kurtosis**:
  - Positive skewness: long right tail (lottery tickets, out-of-the-money call options).
  - Excess kurtosis (fat tails): heightened probability of extreme tail events.

## 3. Statistical Inference & Hypothesis Testing
- **Central Limit Theorem (CLT)**: The sample mean of $n$ independent and identically distributed (i.i.d.) random variables approaches a normal distribution as $n \\to \\infty$, regardless of the underlying distribution.
- **Hypothesis Testing Framework**:
  - Null Hypothesis ($H_0$) vs. Alternative Hypothesis ($H_1$).
  - *Type I Error ($\\alpha$)*: Rejecting $H_0$ when it is true (false positive).
  - *Type II Error ($\\beta$)*: Failing to reject $H_0$ when it is false (false negative).
  - *Power of the Test*: $1 - \\beta$.
- **Test Statistics**: $z$-test for known population variance; Student's $t$-test for unknown variance with sample size $n$.`,
    reviewPrompts: `# Probability & Statistics — Financial Scenarios

## Analytical Problems
1. **Portfolio Variance Calculation**: Given a two-asset portfolio with weights $w_1 = 0.6, w_2 = 0.4$, volatilities $\\sigma_1 = 15\\%, \\sigma_2 = 25\\%$, and correlation $\\rho = -0.2$, calculate the portfolio standard deviation. Contrast this with $\\rho = 1.0$.
2. **P-Value Interpretation in Trading**: A quantitative fund backtests an algorithmic trading strategy across 500 trades and obtains a $t$-statistic of 2.15 ($p = 0.032$). Explain the multiple testing problem (p-hacking) and how the Bonferroni correction guards against spurious discoveries.
3. **Fat Tails and Black Swans**: Why did financial risk models based strictly on Gaussian normal assumptions severely underestimate the probability of the 2008 global financial crisis?`,
  },
  {
    id: 'fin-corporate-finance',
    title: 'Corporate Finance',
    category: 'Semester 2',
    description:
      'Capital budgeting, cost of capital, financing choices, and value creation for firms.',
    rank: 1,
    order: 1,
    coreNotes: `# Corporate Finance & Capital Structure Theory

## 1. Capital Budgeting Valuation Metrics
- **Net Present Value (NPV)**:
  $$NPV = \\sum_{t=1}^T \\frac{CF_t}{(1 + r)^t} - CF_0$$
  The gold standard decision rule: accept projects with $NPV > 0$. Directly reflects anticipated shareholder value addition.
- **Internal Rate of Return (IRR)**: The discount rate that equates project $NPV$ to zero:
  $$\\sum_{t=0}^T \\frac{CF_t}{(1 + IRR)^t} = 0$$
  *Pitfalls*: Multiple IRRs with non-conventional cash flows; misleading scale comparisons for mutually exclusive projects.
- **Payback Period & Profitability Index**: Payback ignores time value of money and post-payback cash flows; Profitability Index ($PI = PV(CF) / CF_0$) resolves capital rationing constraints.

## 2. The Cost of Capital & WACC
- **Weighted Average Cost of Capital (WACC)**:
  $$WACC = \\left(\\frac{E}{V}\\right) r_e + \\left(\\frac{D}{V}\\right) r_d (1 - T_c)$$
  where $E$ is market value of equity, $D$ is market value of debt, $V = E + D$, $r_e$ is cost of equity, $r_d$ is pre-tax cost of debt, and $T_c$ is marginal corporate tax rate.
- **Cost of Equity via CAPM**:
  $$r_e = r_f + \\beta_L (E(R_m) - r_f)$$
  where $r_f$ is risk-free rate, $\\beta_L$ is levered beta, and $(E(R_m) - r_f)$ is equity risk premium.
- **Hamada's Equation (Unlevering and Relevering Beta)**:
  $$\\beta_L = \\beta_U \\cdot \\left[1 + (1 - T_c) \\left(\\frac{D}{E}\\right)\\right]$$

## 3. Capital Structure Theory
- **Modigliani-Miller Proposition I (No Taxes)**: Firm value is independent of capital structure ($V_L = V_U$). Financial leverage increases equity risk and expected return, leaving overall WACC constant.
- **Modigliani-Miller Proposition I (With Taxes)**: Tax deductibility of interest creates an interest tax shield:
  $$V_L = V_U + T_c D$$
- **Trade-Off Theory**: Optimal leverage balances the tax shield benefits of debt against the expected costs of financial distress (bankruptcy costs, agency costs of debt).
- **Pecking Order Theory**: Firms prioritize internal financing (retained earnings) first, safe debt second, and equity issuance last to minimize asymmetric information penalties.`,
    reviewPrompts: `# Corporate Finance — Strategic Decision-Making

## Case Studies & Calculations
1. **NPV vs. IRR Conflict**: Project A requires $1M investment and generates $1.5M in year 1 ($IRR = 50\\%, NPV_{10\\%} = \\$363,636$). Project B requires $10M investment and generates $13M in year 1 ($IRR = 30\\%, NPV_{10\\%} = \\$1,818,182$). Explain why NPV is superior for mutually exclusive decision making.
2. **Debt Capacity & Tax Shield**: A company generates stable EBIT of $20M in perpetuity with zero debt and a 12% unlevered cost of capital ($T_c = 25\\%$). Calculate firm value. If it issues $50M in permanent debt at 6%, calculate its new enterprise value and updated WACC.
3. **Dividend Signaling vs. Share Buybacks**: Why do markets interpret cash dividend cuts as severe negative signals, while share repurchase suspensions are received with less volatility?`,
  },
  {
    id: 'fin-macroeconomics',
    title: 'Macroeconomics',
    category: 'Semester 2',
    description:
      'Growth, inflation, monetary policy, fiscal policy, and cycles affecting financial markets.',
    rank: 1,
    order: 2,
    coreNotes: `# Macroeconomic Dynamics & Monetary Transmission

## 1. Aggregate Output & The National Accounts
- **Gross Domestic Product (GDP)**: Market value of all final goods and services produced within a nation in a given period.
  - *Expenditure Approach*:
    $$Y = C + I + G + (X - M)$$
    where $C$ is consumption, $I$ is gross investment, $G$ is government spending, and $(X - M)$ is net exports.
  - *Nominal vs. Real GDP*: Real GDP deflates nominal output using the GDP deflator to isolate true volume changes from price inflation.

## 2. Inflation, Unemployment, and The Business Cycle
- **Inflation Metrics**: Consumer Price Index (CPI, Laspeyres basket), Producer Price Index (PPI), Personal Consumption Expenditures (PCE deflator).
- **Unemployment & Potential Output**:
  - Structural, frictional, and cyclical unemployment.
  - *Natural Rate of Unemployment (NAIRU)*: Non-Accelerating Inflation Rate of Unemployment.
  - *Okun's Law*: Every 1% increase in cyclical unemployment associates with an approximate 2% drop in GDP relative to potential.
- **The Phillips Curve**: Short-run inverse tradeoff between inflation and unemployment. Long-run vertical Phillips curve at NAIRU where inflation expectations adjust.

## 3. The IS-LM / AD-AS Framework
- **IS Curve (Investment-Savings)**: Equilibrium in goods market; lower real interest rates stimulate investment and output ($Y$).
- **LM Curve (Liquidity-Money)**: Equilibrium in money market; higher income increases money demand, raising interest rates ($r$) for a given money supply.
- **Aggregate Demand / Aggregate Supply (AD-AS)**:
  - Demand shocks shift AD (fiscal stimulus, export surge).
  - Supply shocks shift AS (oil price spike, supply chain bottleneck), causing stagflation (simultaneous inflation and output contraction).

## 4. Monetary Policy & Central Banking
- **Policy Instruments**: Policy interest rates (repo, discount rate), reserve requirements, open market operations.
- **Unconventional Monetary Policy**: Quantitative Easing (QE, balance sheet expansion purchasing sovereign/corporate bonds to lower long-term yields), forward guidance.
- **Transmission Channels**: Interest rate channel, asset price channel, bank lending channel, exchange rate channel.`,
    reviewPrompts: `# Macroeconomics — Financial Markets Analysis

## Macroeconomic Scenarios
1. **Yield Curve Inversion**: Explain the economic mechanisms that cause the 10-year minus 2-year sovereign yield curve to invert. Why is this historically considered a reliable leading indicator of recession?
2. **Stagflation Response**: A major supply shock shifts the short-run aggregate supply curve upward, causing GDP to fall and inflation to rise. Analyze the policy dilemma confronting the central bank: what happens if they hike rates versus if they cut rates?
3. **Fiscal Multiplier and Crowding Out**: Under what macroeconomic conditions is the government spending fiscal multiplier highest (e.g., liquidity trap, zero lower bound) versus when does crowding out of private investment fully neutralize fiscal stimulus?`,
  },
  {
    id: 'fin-financial-markets',
    title: 'Financial Markets & Institutions',
    category: 'Semester 3',
    description:
      'Banking, exchanges, central banks, market participants, and the flow of capital.',
    rank: 2,
    order: 0,
    coreNotes: `# Financial Markets, Structure, and Intermediation

## 1. Market Topologies & Classification
- **Money Markets vs. Capital Markets**:
  - *Money Markets*: Short-term debt instruments ($<1$ year maturity) offering high liquidity and capital preservation (Treasury bills, commercial paper, certificates of deposit, repurchase agreements / repos).
  - *Capital Markets*: Long-term debt and equity instruments financing corporate and sovereign investment (equities, corporate bonds, municipal bonds).
- **Primary vs. Secondary Markets**:
  - Primary: New securities issued via IPOs, rights offerings, or private placements.
  - Secondary: Continuous trading among investors providing price discovery and liquidity (NYSE, Nasdaq, GPW Warsaw).

## 2. Market Microstructure & Execution
- **Order-Driven vs. Quote-Driven Markets**:
  - *Order-Driven*: Continuous limit order book (CLOB) where buyer and seller orders match directly based on price-time priority.
  - *Quote-Driven (Dealer)*: Market makers display bid and ask quotes, committing their balance sheet capital to provide immediacy.
- **Order Types**: Market orders (immediate execution at prevailing price), Limit orders (guaranteed price or better, execution not guaranteed), Stop-loss orders.
- **Bid-Ask Spread & Liquidity Dimensions**:
  - Spread covers dealer inventory holding risk, order processing costs, and adverse selection risk against informed traders.
  - Liquidity dimensions: Tightness (narrow spread), Depth (large volume at quotes), Resiliency (speed of quote recovery after block trade).

## 3. Fractional Reserve Banking & Systemic Risk
- **Asset-Liability Transformation**: Commercial banks transform short-term liquid deposits into long-term illiquid loans (maturity and liquidity transformation).
- **Bank Run Mechanics**: Diamond-Dybvig model demonstrates that self-fulfilling depositor panics can render fundamentally solvent banks illiquid without central bank lender-of-last-resort intervention or deposit insurance.
- **Clearing & Settlement**: Central Counterparties (CCPs) employ multilateral netting, initial margin, and variation margin to mitigate counterparty credit risk in derivative markets.`,
    reviewPrompts: `# Financial Markets & Institutions — Microstructure Review

## Technical Questions
1. **The Repo Market Mechanics**: Explain the anatomy of an overnight repurchase agreement (repo) and reverse repo from both the cash borrower and cash lender perspective. What is the role of the haircut?
2. **Adverse Selection in Bid-Ask Spreads**: Using the Glosten-Milgrom model intuition, explain why the bid-ask spread widens dramatically ahead of major corporate earnings announcements or economic data releases.
3. **Maturity Mismatch Risk**: Analyze how Silicon Valley Bank's balance sheet concentration in long-duration fixed-rate Treasury and Agency MBS assets without interest rate hedges precipitated its failure when interest rates rose and depositors withdrew cash.`,
  },
  {
    id: 'fin-econometrics',
    title: 'Econometrics',
    category: 'Semester 3',
    description:
      'Regression models, inference, and careful interpretation of empirical financial data.',
    rank: 2,
    order: 1,
    coreNotes: `# Financial Econometrics & Empirical Modeling

## 1. Classical Linear Regression Model (Ordinary Least Squares)
- **Model Specification**:
  $$Y_i = \\beta_0 + \\beta_1 X_{1i} + \\beta_2 X_{2i} + \\dots + \\beta_k X_{ki} + \\epsilon_i$$
- **OLS Objective**: Minimize the Sum of Squared Residuals ($SSR = \\sum e_i^2$).
- **The Gauss-Markov Assumptions (BLUE)**:
  1. Linearity in parameters.
  2. Random sampling of observations.
  3. No perfect multicollinearity among regressors.
  4. Zero conditional mean of errors: $E[\\epsilon | X] = 0$ (exogeneity).
  5. Spherical errors: Homoskedasticity ($\\text{Var}(\\epsilon_i | X) = \\sigma^2$) and no serial correlation ($\\text{Cov}(\\epsilon_i, \\epsilon_j | X) = 0$).
  - When assumptions 1-5 hold, OLS is the Best Linear Unbiased Estimator (BLUE).

## 2. Violations of Gauss-Markov & Diagnostic Tests
- **Heteroskedasticity**: Error variance varies with regressors. OLS remains unbiased, but standard errors are biased, invalidating $t$ and $F$ tests.
  - *Diagnosis*: Breusch-Pagan test, White test.
  - *Remedy*: Heteroskedasticity-Consistent (HC / White-Huber) robust standard errors.
- **Autocorrelation (Serial Correlation)**: Errors correlate across time periods ($e_t = \\rho e_{t-1} + v_t$).
  - *Diagnosis*: Durbin-Watson statistic, Breusch-Godfrey LM test.
  - *Remedy*: Newey-West HAC (Heteroskedasticity and Autocorrelation Consistent) standard errors.
- **Endogeneity**: $E[\\epsilon | X] \\neq 0$ caused by omitted variable bias, measurement error, or reverse causality.
  - *Remedy*: Instrumental Variables (IV) and Two-Stage Least Squares (2SLS). Instruments must be relevant ($\\text{Cov}(Z, X) \\neq 0$) and exogenous ($\\text{Cov}(Z, \\epsilon) = 0$).

## 3. Time Series Econometrics
- **Stationarity**: Weak stationarity requires constant mean, constant variance, and autocovariance dependent only on time lag $k$. Non-stationary series cause spurious regressions.
- **Unit Root Testing**: Augmented Dickey-Fuller (ADF) test, Phillips-Perron test.
- **Cointegration**: Two non-stationary $I(1)$ series are cointegrated if a linear combination of them is stationary $I(0)$ (Engle-Granger methodology), forming the quantitative basis for statistical arbitrage pairs trading.`,
    reviewPrompts: `# Econometrics — Empirical Analysis

## Problem Scenarios
1. **Omitted Variable Bias**: In the regression $\\text{Return}_i = \\beta_0 + \\beta_1 \\text{ESG}_i + \\epsilon_i$, suppose true firm size ($S_i$) is omitted. If firm size positively correlates with both ESG scores and firm returns, what is the direction of bias in the OLS estimate $\\hat{\\beta}_1$?
2. **Stationarity & Spurious Regression**: Explain why regressing the price of gold on European GDP levels produces an $R^2 > 0.95$ and highly statistically significant $t$-statistics despite having zero causal relationship. How does differencing resolve this?
3. **Instrumental Variable Validity**: Propose an economic research question where reverse causality is present, identify a candidate instrumental variable, and rigorously justify its relevance and exclusion restriction.`,
  },
  {
    id: 'fin-valuation',
    title: 'Investments & Valuation',
    category: 'Semester 3',
    description:
      'Equity, bonds, discounted cash flow, multiples, and portfolio-level investment choices.',
    rank: 2,
    order: 2,
    coreNotes: `# Equity Valuation & Investment Analysis

## 1. Intrinsic Valuation: Discounted Cash Flow (DCF)
- **Free Cash Flow to Firm (FCFF)**: Cash flow available to all capital providers (debt and equity):
  $$FCFF = EBIT \\cdot (1 - T_c) + D\\&A - \\text{CapEx} - \\Delta NWC$$
  Discounted at the Weighted Average Cost of Capital (WACC) to arrive at Enterprise Value ($EV$):
  $$EV = \\sum_{t=1}^T \\frac{FCFF_t}{(1 + WACC)^t} + \\frac{Terminal\\;Value}{(1 + WACC)^T}$$
  $$\\text{Equity Value} = EV - \\text{Total Debt} - \\text{Preferred Equity} - \\text{Minority Interest} + \\text{Cash}$$
- **Terminal Value Methodologies**:
  - *Gordon Growth Model*: $TV_T = \\frac{FCFF_{T+1}}{WACC - g}$ (where $g \\le \\text{long-term GDP growth}$).
  - *Exit Multiple Method*: $TV_T = \\text{Normalized EBITDA}_T \\cdot (\\text{Target EV/EBITDA Multiple})$.

## 2. Relative Valuation (Trading Comparables & Precedent Transactions)
- **Enterprise Value Multiples**: Scale-independent multiples comparing enterprise value to pre-interest metrics:
  - *EV / EBITDA*: Standard across capital-intensive industries; neutralizes capital structure differences.
  - *EV / EBIT*: Preferred when depreciation reflects genuine economic replacement CapEx.
  - *EV / Sales*: Applied to early-stage or negative EBITDA growth companies.
- **Equity Multiples**:
  - *Price-to-Earnings (P/E)*: Current price divided by EPS. Distorted by leverage, tax rates, and one-time non-operating items.
  - *Price-to-Book (P/B)*: Standard metric for financial institutions and asset-heavy firms.

## 3. Fixed Income Valuation & Interest Rate Risk
- **Bond Pricing Equation**:
  $$P = \\sum_{t=1}^T \\frac{C}{(1 + y)^t} + \\frac{M}{(1 + y)^T}$$
  where $C$ is coupon, $M$ is par value, and $y$ is yield to maturity.
- **Macaulay Duration & Modified Duration**:
  - *Macaulay Duration*: Weighted average maturity of bond cash flows.
  - *Modified Duration ($D^* = D_{\\text{Mac}} / (1+y)$)*: Percentage price sensitivity to yield shift:
    $$\\frac{\\Delta P}{P} \\approx -D^* \\Delta y + \\frac{1}{2} \\text{Convexity} (\\Delta y)^2$$`,
    reviewPrompts: `# Investments & Valuation — Practical Cases

## Valuation Challenges
1. **DCF Sensitivity Grid**: In a DCF model for a SaaS firm, enterprise value is highly sensitive to terminal growth rate ($2.0\\% - 3.5\\%$) and WACC ($8.5\\% - 11.0\\%$). Construct a $3 \\times 3$ sensitivity table and explain the dangers of setting $g > \\text{long-run nominal GDP growth}$.
2. **Equity Value from Enterprise Value**: A company has $EV = \\$500M$, cash of $40M, bank term loans of $150M, convertible bonds of $50M, pension deficit of $10M, and 20M shares outstanding. Calculate the implied share price.
3. **Bond Portfolio Immunization**: A pension fund has an obligation of $100M due in exactly 7 years. How does matching the portfolio's modified duration to the liability's duration protect the fund against interest rate volatility?`,
  },
  {
    id: 'fin-risk',
    title: 'Risk Management',
    category: 'Semester 4',
    description:
      'Market, credit, liquidity, and operational risk measurement, control, and reporting.',
    rank: 3,
    order: 0,
    coreNotes: `# Quantitative Financial Risk Management

## 1. Value at Risk (VaR) & Expected Shortfall (ES)
- **Value at Risk (VaR)**: The maximum expected loss over a specific time horizon $T$ at a specified confidence level $1 - \\alpha$:
  $$P(L > VaR_\\alpha) = \\alpha$$
  (e.g., 99% 1-day VaR of $1M means there is only a 1% chance the portfolio loses $>\\$1M$ on any given trading day).
- **VaR Methodologies**:
  - *Parametric (Variance-Covariance)*: Assumes normal distribution; $VaR_\\alpha = z_\\alpha \\cdot \\sigma_P \\cdot \\sqrt{T} - \\mu_P$. Fast, but blind to fat tails and non-linear options.
  - *Historical Simulation*: Replays portfolio against historical price return vectors; non-parametric, captures empirical fat tails, but constrained by historical sample history.
  - *Monte Carlo Simulation*: Generates thousands of stochastic paths using geometric Brownian motion or jump-diffusion; handles complex path-dependent derivatives, computationally intensive.
- **Expected Shortfall (Conditional VaR)**:
  $$ES_\\alpha = E[L \\mid L > VaR_\\alpha]$$
  Unlike VaR, Expected Shortfall is a *coherent risk measure* (satisfying subadditivity: risk of a combined portfolio cannot exceed the sum of individual portfolio risks).

## 2. Credit Risk Modeling
- **Key Components**:
  - *Probability of Default (PD)*: Likelihood of counterparty defaulting over horizon.
  - *Exposure at Default (EAD)*: Gross monetary exposure at time of default.
  - *Loss Given Default (LGD)*: Fraction lost ($1 - \\text{Recovery Rate}$).
  - *Expected Loss (EL)*:
    $$EL = PD \\times EAD \\times LGD$$
- **Structural Credit Models (Merton Model)**: Treats equity as a European call option on total firm assets with strike price equal to face value of debt; default occurs if asset value falls below debt face value at maturity.

## 3. Liquidity and Operational Risk
- **Liquidity-Adjusted VaR (L-VaR)**: Incorporates the cost of unwinding positions in illiquid markets across bid-ask spreads.
- **Operational Risk & Basel Framework**: Losses resulting from inadequate or failed internal processes, people, systems, or external events.`,
    reviewPrompts: `# Risk Management — Quantitative Exercises

## Risk Analysis Problems
1. **VaR Subadditivity Failure**: Construct a simple counterexample demonstrating that VaR can violate the subadditivity property ($VaR(A + B) > VaR(A) + VaR(B)$) for non-normal or skewed asset payoff distributions.
2. **Basel III Liquidity Ratios**: Define and explain the objectives of the Liquidity Coverage Ratio (LCR, 30-day stress horizon) and the Net Stable Funding Ratio (NSFR, 1-year structural horizon).
3. **Backtesting VaR Models**: A bank uses a 99% daily VaR model. Over 250 trading days, 7 exceptions occur where losses exceeded the predicted VaR. Using Kupiec's POF (Proportion of Failures) likelihood ratio test, explain whether the risk model should be rejected as inaccurate.`,
  },
  {
    id: 'fin-derivatives',
    title: 'Derivatives',
    category: 'Semester 4',
    description:
      'Forwards, futures, options, swaps, pricing intuition, and hedging applications.',
    rank: 3,
    order: 1,
    coreNotes: `# Financial Derivatives, Pricing Models, and Hedging

## 1. Linear Derivatives: Forwards, Futures, and Swaps
- **Forward vs. Futures Contracts**:
  - *Forwards*: Over-the-counter (OTC), customized terms, private, counterparty risk, settlement at maturity.
  - *Futures*: Exchange-traded, standardized contracts, daily mark-to-market settlement, guaranteed by clearing house through margin accounts.
- **Cost of Carry Pricing Model**:
  $$F_0 = S_0 e^{(r + u - y)T}$$
  where $S_0$ is spot price, $r$ is risk-free rate, $u$ is storage cost percentage, and $y$ is dividend yield or convenience yield.
- **Interest Rate Swaps (IRS)**: Agreement to exchange fixed-rate interest cash flows for floating-rate cash flows (e.g., SOFR, EURIBOR) on a specified notional principal. Valued at par at inception; market value fluctuates with term structure shifts.

## 2. Option Mechanics & Arbitrage Bounds
- **Payoff Profiles**:
  - Long Call: $\\max(S_T - K, 0) - C_0$
  - Long Put: $\\max(K - S_T, 0) - P_0$
- **Put-Call Parity (European Options)**:
  $$C + K e^{-rT} = P + S_0$$
  Enforces no-arbitrage equilibrium between calls, puts, underlying stock, and risk-free cash.

## 3. Option Valuation Models
- **Binomial Option Pricing Model (Cox-Ross-Rubinstein)**: Discrete-time lattice modeling asset price steps ($u, d$) with risk-neutral probability:
  $$p = \\frac{e^{r\\Delta t} - d}{u - d}$$
  Values options backwards from terminal nodes; natively supports American early exercise checks.
- **Black-Scholes-Merton (BSM) Model**:
  $$C = S_0 N(d_1) - K e^{-rT} N(d_2)$$
  $$d_1 = \\frac{\\ln(S_0 / K) + (r + \\sigma^2 / 2)T}{\\sigma \\sqrt{T}}, \\quad d_2 = d_1 - \\sigma \\sqrt{T}$$

## 4. The Option Greeks & Risk Management
- **Delta ($\\Delta = \\partial C / \\partial S$)**: Rate of change of option price per unit change in underlying price. $N(d_1)$ for call.
- **Gamma ($\\Gamma = \\partial^2 C / \\partial S^2$)**: Curvature of option price relative to underlying; highest for at-the-money options near expiry.
- **Vega ($\\nu = \\partial C / \\partial \\sigma$)**: Sensitivity to implied volatility changes.
- **Theta ($\\Theta = \\partial C / \\partial t$)**: Time decay; option value decreases as expiration approaches.
- **Rho ($\\rho = \\partial C / \\partial r$)**: Sensitivity to risk-free interest rates.`,
    reviewPrompts: `# Derivatives — Hedging & Pricing Practice

## Quantitative Problems
1. **Delta-Neutral Hedging**: A market maker writes 1,000 call options on Stock X ($S_0 = \\$100, K = \\$100, \\Delta = 0.55$). How many shares of Stock X must the market maker purchase to establish a delta-neutral hedge? What happens to the hedge if stock price jumps to $105 and Delta rises to 0.65?
2. **Put-Call Parity Arbitrage Execution**: A 1-year European call on Stock Z ($S_0 = \\$50$) with $K = \\$50$ trades at $5, while the 1-year put trades at $2. The risk-free rate is 5% continuous compounding. Identify the mispricing, construct the arbitrage strategy, and show the guaranteed locked profit.
3. **Volatility Smile & Skew**: Why does the empirical implied volatility curve for equity index options exhibit a downward-sloping "skew" (higher implied vol for OTM puts) rather than the constant flat volatility assumed by Black-Scholes?`,
  },
  {
    id: 'fin-financial-modelling',
    title: 'Financial Modelling',
    category: 'Semester 5',
    description:
      'Build transparent, auditable models that translate assumptions into decisions.',
    rank: 4,
    order: 0,
    coreNotes: `# Financial Modeling, LBOs, and Transaction Structuring

## 1. Financial Model Architecture & Best Practices
- **Design Principles (FAST Standard)**: Flexible, Appropriate, Structured, Transparent.
  - Dedicated input assumption tabs separated from calculation engines and output dashboards.
  - Consistent color-coding conventions (blue = hardcoded inputs, black = calculations/formulas, green = links from other sheets).
  - No embedded constants within formulas; dynamic headers with timeline counters.
- **Three-Statement Integration Mechanics**:
  - Revenue build-up by product/segment driven by volume and unit economics.
  - Operating expenses linked to fixed vs. variable cost drivers.
  - Working capital schedule driving balance sheet accounts.
  - Debt schedule with interest circularity resolution.

## 2. Leveraged Buyout (LBO) Modeling
- **Core Mechanism**: Private equity sponsor acquires a target company using a small equity check ($20-40\\%$) and substantial debt ($60-80\\%$), using target's cash flows to service debt over a 3-7 year holding period.
- **Sources and Uses Table**:
  - *Sources*: Term Loan A, Term Loan B, Senior Notes, Mezzanine Debt, Sponsor Equity.
  - *Uses*: Purchase equity price, debt refinancing, advisory and financing transaction fees.
- **Returns Drivers**:
  1. *Deleveraging*: Debt paydown using target cash flow increases equity value.
  2. *Operational Growth*: EBITDA expansion through organic revenue growth and cost rationalization.
  3. *Multiple Expansion*: Selling at a higher EV/EBITDA exit multiple than entry.
- **Return Metrics**: Internal Rate of Return (IRR target typically $20-25\\%$) and Multiple on Invested Capital (MOIC target $2.0\\text{x}-3.0\\text{x}$).

## 3. M&A Accretion / Dilution Analysis
- **Core Objective**: Determine whether pro forma Earnings Per Share (EPS) of the combined acquirer increases (accretive) or decreases (dilutive) post-acquisition.
- **Financing Mix**: Cash (foregone interest), Debt (incremental interest expense), or Stock (share count dilution).
- **Rule of Thumb (All-Stock Transactions)**: If acquirer P/E is higher than target P/E, the acquisition is accretive; if lower, it is dilutive.`,
    reviewPrompts: `# Financial Modelling — Deal Structuring Scenarios

## Modeling Exercises
1. **LBO Debt Capacity & Returns**: Target company generates $50M EBITDA. The sponsor acquires it at 10.0x EV/EBITDA, funded with 6.0x debt and 4.0x equity. In Year 5, EBITDA reaches $70M, total debt is paid down to $150M, and the company is exited at 10.0x EBITDA. Calculate the ending equity value, MOIC, and approximate IRR.
2. **Circularity Breaker in Excel**: Explain why circular references occur between the debt balance, interest expense, pre-tax income, net income, and ending cash flow. How does a circularity breaker toggle switch safeguard the spreadsheet model during audits?
3. **M&A Synergies Sensitivity**: An acquirer pays a 30% premium to acquire a competitor. Outline how to calculate the minimum pre-tax operational synergies required to achieve EPS neutrality in Year 1 under 100% stock financing.`,
  },
  {
    id: 'fin-regulation',
    title: 'Financial Regulation & Ethics',
    category: 'Semester 5',
    description:
      'Financial supervision, consumer protection, conduct, disclosure, and responsible decision-making.',
    rank: 4,
    order: 1,
    coreNotes: `# Financial Regulation, Market Integrity, and Ethics

## 1. Global & European Regulatory Architecture
- **Supervisory Bodies**:
  - *Global*: Financial Stability Board (FSB), Basel Committee on Banking Supervision (BCBS), IOSCO.
  - *European Union*: European Banking Authority (EBA), European Securities and Markets Authority (ESMA), European Insurance and Occupational Pensions Authority (EIOPA).
  - *Poland*: Komisja Nadzoru Finansowego (KNF).
- **Basel III / IV Capital Accords**:
  - *Common Equity Tier 1 (CET1)*: Highest-quality loss-absorbing capital (common shares + retained earnings); minimum CET1 ratio $\\ge 4.5\\%$ plus Capital Conservation Buffer ($2.5\\%$) and Systemic Surcharges (G-SIB).
  - *Tier 1 Capital*: CET1 + Additional Tier 1 (AT1 contingent convertible bonds / CoCos). Minimum $6.0\\%$.
  - *Total Capital*: Tier 1 + Tier 2 subordinate debt. Minimum $8.0\\%$.

## 2. Market Conduct, Transparency, and MiFID II
- **MiFID II (Markets in Financial Instruments Directive)**:
  - Best execution mandate requiring brokers to take all sufficient steps to obtain best possible results for clients considering price, costs, speed, and likelihood of execution.
  - Unbundling of investment research from trade execution commissions to eliminate inducements.
  - Mandatory transaction reporting and trade transparency across equity and fixed income venues.
- **Market Abuse Regulation (MAR)**:
  - *Insider Dealing*: Trading or tipping based on Material Non-Public Information (MNPI).
  - *Market Manipulation*: Layering, spoofing, wash trading, pump-and-dump schemes designed to create misleading appearances of price or volume.

## 3. Anti-Money Laundering (AML) & Compliance
- **The Three Stages of Money Laundering**:
  1. *Placement*: Introducing illicit cash into the financial system (smurfing, cash structuring).
  2. *Layering*: Complex webs of financial transactions, shell companies, and offshore wire transfers to obscure the audit trail.
  3. *Integration*: Re-entering the economy as legitimate business investments or luxury assets.
- **Compliance Obligations**: Customer Due Diligence (CDD), Enhanced Due Diligence (EDD) for Politically Exposed Persons (PEPs), Suspicious Activity Reports (SARs).

## 4. Professional Ethics: CFA Institute Standards
- Standards of Professional Conduct: Professionalism, Integrity of Capital Markets, Duties to Clients (loyalty, prudence, suitability), Duties to Employers, Investment Analysis and Recommendations, Conflicts of Interest.`,
    reviewPrompts: `# Financial Regulation & Ethics — Compliance Scenarios

## Ethical Dilemmas
1. **Material Non-Public Information (MNPI)**: A portfolio manager overhears an acquisition discussion between two executives in an airport lounge. Can the manager execute trades based on this information? What if the manager deduced the same conclusion using the Mosaic Theory by assembling disparate public data points?
2. **AT1 CoCo Bond Write-Down Mechanics**: Review the Credit Suisse acquisition by UBS where Swiss regulator FINMA wiped out $17B of AT1 bonds while preserving some value for common equity shareholders. Discuss the contractual capital hierarchy versus regulatory discretion.
3. **Suitability vs. Fiduciary Duty**: Differentiate between the broker-dealer "suitability standard" and the investment advisor "fiduciary duty" standard when recommending financial products with differing sales commissions to retail clients.`,
  },
  {
    id: 'fin-capstone',
    title: 'Finance Capstone',
    category: 'Semester 6',
    description:
      'Integrate accounting, valuation, risk, and market evidence into a defensible recommendation.',
    rank: 5,
    order: 0,
    coreNotes: `# Comprehensive Investment Synthesis & Thesis Defense

## 1. The Equity Research Investment Thesis Framework
A defensible institutional investment recommendation requires synthesizing quantitative valuation with competitive moat analysis and macroeconomic context:
- **Executive Summary**: Clear rating (Buy, Hold, Underperform), 12-month target price, upside/downside percentage, and core investment thesis pillars.
- **Business Model & Moat Analysis (Porter's Five Forces)**:
  - Threat of new entrants, bargaining power of buyers, bargaining power of suppliers, threat of substitutes, and competitive rivalry.
  - Identification of sustainable competitive advantages: network effects, switching costs, cost advantages, intangible assets/patents.
- **Macroeconomic & Sector Tailwind Review**: Interest rate sensitivity, inflation pass-through capability, regulatory headwinds, demographic shifts.

## 2. Valuation Synthesis & Football Field Analysis
- **Valuation Triangulation**: Reconciling disparate valuation methodologies into an integrated "Football Field" chart:
  - 52-week trading range.
  - DCF baseline, bear-case, and bull-case ranges.
  - Public market trading comparables (EV/EBITDA, P/E quartiles).
  - Precedent transaction multiples.
  - LBO floor valuation (sponsor ability to pay).
- **Target Price Derivation**: Probability-weighting scenarios or establishing an intrinsic DCF baseline supported by trading comps.

## 3. Catalysts, Key Risks, and Mitigants
- **Catalysts**: Specific forward events expected to close the gap between current market price and intrinsic value (e.g., upcoming product launch, margin inflections, dividend hike, accretive spinoff, regulatory resolution).
- **Downside Risk Matrix**: Explicit identification of operational, financial, and macroeconomic risks, their potential EBITDA/cash flow impact, and company-specific mitigants.

## 4. Institutional Committee Pitch & Defense
- Communicating with executive brevity: 3-minute pitch, 10-minute deep dive, handling rigorous cross-examination on revenue assumptions, working capital spikes, and terminal growth sensitivity.`,
    reviewPrompts: `# Finance Capstone — Investment Defense & Scrutiny

## Committee Cross-Examination
1. **Defending the Terminal Growth Assumption**: The investment committee challenges your DCF model's 3.0% terminal growth rate, arguing that long-term real GDP growth is only 1.8% and inflation target is 2.0%. How do you justify or adjust your terminal value calculation?
2. **Reconciling Conflicting Methodologies**: Your DCF model yields a target price of $85, but trading comparables indicate a median multiple implying $62, and a recent precedent transaction occurred at $95. How do you explain this dispersion and assign defensible weights?
3. **Stress-Testing the Moat**: For a technology company boasting high return on invested capital (ROIC = 28%), explain how you model the fade rate of abnormal profits over a 10-year forecast period as competitive forces erode excess returns.`,
  },
];
