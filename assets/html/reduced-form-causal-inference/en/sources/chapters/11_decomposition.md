# Decomposition: From Gaps to Counterfactuals

<nav aria-label="Language selection" style="margin: 1rem 0 1.5rem;">
  <strong>Language / 语言:</strong>
  <a class="btn btn-sm btn-outline-primary" href="../../chapters/11_decomposition.html" lang="zh">中文</a>
  <a class="btn btn-sm btn-primary" href="11_decomposition.html" lang="en" aria-current="page">English</a>
</nav>

Decomposition addresses a descriptive question: which observable changes correspond to an observed aggregate difference? We **hold some relationships fixed and change others**, calculate a counterfactual, and add the resulting components back to the original gap. This chapter develops the idea through two papers: Oaxaca's (1973) decomposition of wage gaps and Levinson's (2009) decomposition of US manufacturing emissions. Both account for a gap, but they use different models and data.

## 1. Oaxaca (1973): Where Does a Wage Gap Come From?

### Motivation and counterfactual

Let A and B denote two groups of workers. Let $Y$ be wages, and let $X$ contain observed characteristics such as education and experience. Their mean wage gap is $\Delta=\bar Y_A-\bar Y_B$. A difference in mean wages alone does not tell us how much is associated with **differences in worker characteristics** and how much with **differences in the wage relationship for given characteristics**. Oaxaca fits a wage equation for each group, then values one group's characteristics using the other group's coefficients. [Oaxaca (1973)](https://inequality.stanford.edu/sites/default/files/media/_media/pdf/Classic_Media/Oaxaca_1973_Discrimination%20and%20Prejudice.pdf).

Estimate a separate linear wage regression with an intercept for each group:

$$
Y_{ig}=X_{ig}'\beta_g+\varepsilon_{ig},\qquad g\in\{A,B\}.
$$

Include a constant 1 in $X$ and the corresponding intercept in $\beta_g$. With separate ordinary least squares fits that include an intercept, the mean residual within each group is zero. Thus, **in the sample**, $\bar Y_g=\bar X_g'\hat\beta_g$, and

$$
\hat\Delta=\bar X_A'\hat\beta_A-\bar X_B'\hat\beta_B.
$$

The key counterfactual is $\bar X_A'\hat\beta_B$: **A's mean characteristics evaluated using B's fitted wage relationship**. Add and subtract it to obtain a twofold decomposition:

$$
\begin{aligned}
\hat\Delta
&=\underbrace{(\bar X_A-\bar X_B)'\hat\beta_B}_{\text{composition / endowments}}
 +\underbrace{\bar X_A'(\hat\beta_A-\hat\beta_B)}_{\text{coefficients / wage structure}}.
\end{aligned}
$$

The first term values the difference in characteristics at **B's coefficients**. The second compares the two sets of coefficients at **A's mean characteristics** and includes the intercept difference. The terms add exactly to the observed sample gap. The counterfactual wage is a regression prediction, not the causal outcome of actually changing workers' education. [Jann (2008), pp. 2–3](https://repec.ethz.ch/ets/papers/jann_oaxaca.pdf).

```{admonition} Intuition: a path from B to A
:class: tip
Start at $(\bar X_B,\hat\beta_B)$. First replace B's characteristics with $\bar X_A$; then replace B's coefficients with $\hat\beta_A$. The first step is the composition component and the second is the wage-structure component. Changing the order can change the components, but not the endpoint or the total gap.
```

### The interaction term and the choice of reference coefficients

Write $\Delta X=\bar X_A-\bar X_B$ and $\Delta\beta=\hat\beta_A-\hat\beta_B$. Expanding the product gives

$$
\begin{aligned}
\hat\Delta
&=(\bar X_B+\Delta X)'(\hat\beta_B+\Delta\beta)-\bar X_B'\hat\beta_B\\
&=\underbrace{\Delta X'\hat\beta_B}_{\text{composition}}
 +\underbrace{\bar X_B'\Delta\beta}_{\text{coefficients}}
 +\underbrace{\Delta X'\Delta\beta}_{\text{interaction}}.
\end{aligned}
$$

This threefold decomposition has an interaction because characteristics and coefficients both change. The preceding twofold formula assigns the coefficient and interaction terms together to wage structure. If A's coefficients instead value the characteristic difference, then

$$
\hat\Delta=(\bar X_A-\bar X_B)'\hat\beta_A
 +\bar X_B'(\hat\beta_A-\hat\beta_B).
$$

Both twofold formulas add exactly to the same wage gap, but allocate the interaction differently. A reported “share explained by composition” therefore requires a stated reference wage structure. One may also use a justified set of common reference coefficients. Algebra alone cannot determine which coefficients represent a wage structure without discrimination. [Jann (2008), pp. 2–4](https://repec.ethz.ch/ets/papers/jann_oaxaca.pdf).

### A numerical example

The following numbers are **illustrative, not estimates from Oaxaca's paper**. Suppose the only characteristic is whether a worker attended college. Wages are measured in yuan per hour.

| Group | Wage without college | Wage with college | College share | Mean wage |
| --- | ---: | ---: | ---: | ---: |
| A | 20 | 30 | 60% | $0.4\times20+0.6\times30=26$ |
| B | 18 | 26 | 40% | $0.6\times18+0.4\times26=21.2$ |

The observed gap is $26-21.2=4.8$. At B's wage relationship, changing the college share to A's 60% gives a counterfactual mean wage of $0.4\times18+0.6\times26=22.8$. The composition component is therefore $22.8-21.2=1.6$; the wage-structure component is $26-22.8=3.2$; and they add to $4.8$. With A's wage relationship as the reference, the composition component becomes $(0.6-0.4)(30-20)=2.0$ and the structure component becomes $2.8$.

NumPy makes the same calculation explicit. The first element of each `x` is the intercept's constant 1; the second is the college share. The elements of `beta` are the wage without college and the additional wage associated with college.

```python
import numpy as np

x_A = np.array([1.0, 0.6])
x_B = np.array([1.0, 0.4])
beta_A = np.array([20.0, 10.0])
beta_B = np.array([18.0, 8.0])

gap = x_A @ beta_A - x_B @ beta_B
counterfactual = x_A @ beta_B
composition = (x_A - x_B) @ beta_B
structure = x_A @ (beta_A - beta_B)

# Split the structure component into coefficient and interaction terms.
coefficient = x_B @ (beta_A - beta_B)
interaction = (x_A - x_B) @ (beta_A - beta_B)

print(f"Counterfactual wage at B's coefficients: {counterfactual:.1f}")
print(f"Twofold: {gap:.1f} = {composition:.1f} + {structure:.1f}")
print(
    f"Threefold: {gap:.1f} = {composition:.1f}"
    f" + {coefficient:.1f} + {interaction:.1f}"
)
np.testing.assert_allclose(gap, composition + structure)
np.testing.assert_allclose(gap, composition + coefficient + interaction)
```

The output is `22.8`, `4.8 = 1.6 + 3.2`, and `4.8 = 1.6 + 2.8 + 0.4`. With real microdata, estimate `beta_A` and `beta_B` from separate wage regressions with intercepts. They are supplied here to make the order of the calculation transparent.

### What can we infer?

The “explained” component is the part accounted for by the **chosen observed characteristics and reference coefficients**. The “unexplained” component need not equal discrimination: it can include unmeasured ability, sample selection, measurement error, or model misspecification. Conversely, discrimination that affects education or occupation choice could enter the “explained” component. The estimated education coefficient need not be the causal return to education. [Jann (2008), pp. 1, 3](https://repec.ethz.ch/ets/papers/jann_oaxaca.pdf).

## 2. Levinson (2009): Why Did Manufacturing Emissions Fall?

### First layer: scale, industry composition, and emissions intensity

Levinson studies an apparent contrast: US manufacturing output rose from 1987 to 2001 while manufacturing emissions of the four air pollutants studied fell. He accounts for the change in terms of **overall manufacturing scale**, the **industry mix**, and **emissions per unit of output within industries**. [Levinson (2009), pp. 2177–2179](https://faculty.georgetown.edu/aml6/pdfs%26zips/AER2009Levinson.pdf).

Let industry $i$ have output $v_i$ and emissions $p_i$, with total output $V=\sum_i v_i$. Define its output share as $\theta_i=v_i/V$ and its emissions intensity as $z_i=p_i/v_i$. Total emissions satisfy the identity

$$
P=\sum_i p_i=\sum_i v_i z_i=V\sum_i\theta_i z_i.
$$

Taking the total differential yields the paper's three components:

$$
dP
=\underbrace{\Bigl(\sum_i\theta_i z_i\Bigr)dV}_{\text{scale}}
 +\underbrace{V\sum_i z_i\,d\theta_i}_{\text{composition}}
 +\underbrace{V\sum_i\theta_i\,dz_i}_{\text{intensity / technique}}.
$$

This differential is exact for **infinitesimal changes**. Across two years, all three quantities can change together. A finite-change calculation must specify an ordering or an allocation of interactions. The paper observes industry emissions intensities $z_{i0}$ for the base year 1987, but not annually. It holds $z_{i0}$ fixed to calculate the paths associated with scale and industry composition, then measures the technique component indirectly as a remainder. [Levinson (2009), pp. 2178–2179 and footnote 3](https://faculty.georgetown.edu/aml6/pdfs%26zips/AER2009Levinson.pdf).

Let $0$ denote the base year. The emissions index at fixed base-year intensities is

$$
Q_t^{(0)}=V_t\sum_i\theta_{it}z_{i0}.
$$

To show a counterfactual path with the same starting point as observed emissions, normalize the index to the observed base-year value $P_0$:

$$
P_t^{\mathrm{cf}}
=P_0\frac{Q_t^{(0)}}{Q_0^{(0)}}
=P_0\frac{V_t}{V_0}
\frac{\sum_i\theta_{it}z_{i0}}{\sum_i\theta_{i0}z_{i0}}.
$$

Along a path that changes scale first and composition second, the following **illustrative finite-change decomposition** adds up exactly:

$$
\begin{aligned}
P_t-P_0
&=\underbrace{P_0\left(\frac{V_t}{V_0}-1\right)}_{\text{scale: base-year mix and intensity fixed}}\\
&\quad+\underbrace{P_0\frac{V_t}{V_0}
\left[\frac{\sum_i\theta_{it}z_{i0}}{\sum_i\theta_{i0}z_{i0}}-1\right]}_{\text{composition: current scale, base-year intensity fixed}}\\
&\quad+\underbrace{(P_t-P_t^{\mathrm{cf}})}_{\text{remainder}}.
\end{aligned}
$$

This finite-change formula is a teaching expansion of the paper's index logic, **not a verbatim estimation equation from the paper**. It locates the remainder and makes the allocation of interactions explicit. Changing the order can change the individual components. [Levinson (2009), pp. 2179–2180](https://faculty.georgetown.edu/aml6/pdfs%26zips/AER2009Levinson.pdf).

The next numbers are again **illustrative, not the paper's data**. Suppose two industries have base-year emissions intensities of 4 and 1. Total output rises from 100 to 120; the dirtier industry's output share falls from 50% to 40%; and observed total emissions fall from 250 to 200.

```python
import numpy as np

V_0, V_1 = 100.0, 120.0
theta_0 = np.array([0.5, 0.5])
theta_1 = np.array([0.4, 0.6])
z_0 = np.array([4.0, 1.0])
P_0, P_1 = 250.0, 200.0

intensity_0 = theta_0 @ z_0
intensity_1_at_base = theta_1 @ z_0
P_counterfactual = P_0 * (V_1 / V_0) * (intensity_1_at_base / intensity_0)

scale = P_0 * (V_1 / V_0 - 1)
composition = P_0 * (V_1 / V_0) * (
    intensity_1_at_base / intensity_0 - 1
)
remainder = P_1 - P_counterfactual

print(f"Emissions at fixed base-year intensities: {P_counterfactual:.0f}")
print(
    f"Total change: {P_1 - P_0:.0f} = {scale:.0f}"
    f" + ({composition:.0f}) + ({remainder:.0f})"
)
np.testing.assert_allclose(P_1 - P_0, scale + composition + remainder)
```

The counterfactual emissions level is `264`, and `-50 = 50 + (-36) + (-64)`. Higher scale alone corresponds to 50 more units of emissions, the changed industry mix corresponds to 36 fewer, and the remaining 64-unit reduction is assigned to the residual. The final code line checks that the three components add to the observed change.

```{admonition} The “technique” component is a residual
:class: important
Within-industry shifts among products, changes in production or abatement, other unmeasured changes, and interactions in a finite-change calculation may enter this remainder. With coarse industry categories, within-industry composition changes are more likely to be classified as technique. The decomposition by itself does not identify the causal effect of technological innovation or environmental regulation.
```

### Second layer: why does trade require input-output tables?

The paper then asks: if the products associated with growing net imports had instead been made in the United States, how much US pollution would they correspond to **at US emissions coefficients**? Multiplying imports by each final product's direct emissions coefficient misses the intermediate inputs needed to produce it. The paper uses input-output relationships to include those inputs. [Levinson (2009), pp. 2186–2188](https://faculty.georgetown.edu/aml6/pdfs%26zips/AER2009Levinson.pdf).

Let $x$ be a vector of gross industry outputs, $y$ final demand, and $C$ the matrix of direct input coefficients. Element $C_{ij}$ is the input from industry $i$ required for one unit of industry $j$ output. Then

$$
x=Cx+y
\quad\Longrightarrow\quad
(I-C)x=y
\quad\Longrightarrow\quad
x=(I-C)^{-1}y.
$$

If $\mathbf z'$ is the row vector of direct industry emissions intensities, producing final demand $y$ generates $\mathbf z'(I-C)^{-1}y$ in emissions across all layers of inputs. Thus $\mathbf z'(I-C)^{-1}$ is a vector of total-requirement emissions coefficients. Some intermediate inputs would themselves have been imported. Let $d_i$ be the domestic share of the supply of industry $i$; the paper counts only domestic inputs that could be displaced, using

$$
\mathbf z^{*\prime}=\mathbf z'\bigl[I-\operatorname{diag}(d)C\bigr]^{-1}.
$$

Multiplying these coefficients by industry-specific increases in net imports relative to the base year gives hypothetical **US domestic** emissions associated with trade growth. These are not the actual emissions of exporting countries, nor are they the equilibrium outcome of an economy without trade growth: prices, consumption, and production could all adjust. The author explicitly calls the no-net-trade-growth scenario a partial-equilibrium accounting exercise and states that the analysis does not identify causality. [Levinson (2009), pp. 2187–2190](https://faculty.georgetown.edu/aml6/pdfs%26zips/AER2009Levinson.pdf).

The following **illustrative two-industry matrix** shows the adjustment. `solve` computes the matrix solution without explicitly forming an inverse. `net_import_change` is the increase in net imports since the base year.

```python
import numpy as np

C = np.array([[0.1, 0.3], [0.2, 0.1]])
domestic_share = np.array([0.8, 0.9])
z_0 = np.array([4.0, 1.0])
net_import_change = np.array([5.0, 10.0])

system = np.eye(2) - np.diag(domestic_share) @ C
total_domestic_intensity = np.linalg.solve(system.T, z_0)

direct_only = z_0 @ net_import_change
including_inputs = total_domestic_intensity @ net_import_change
print(f"Direct emissions from final products only: {direct_only:.2f}")
print(f"Emissions including domestic inputs: {including_inputs:.2f}")
```

The illustrative results are `30.00` and `47.73`. The second value is larger because this example also counts domestic intermediate inputs that could be displaced by net imports. Neither number is the actual pollution generated in the countries supplying the imports.

## Comparing the Two Applications

| | Oaxaca: wage gap | Levinson: emissions change |
| --- | --- | --- |
| Observed outcome | Difference in group mean wages | Change in total manufacturing emissions |
| Fixed reference | One group's or common wage-regression coefficients | Base-year industry emissions intensities; input-output coefficients for trade |
| Composition | Distribution of worker characteristics | Manufacturing output shares across industries |
| Other components | Coefficient differences and interactions | Output scale, intensity residual, and emissions matched to imports |
| Interpretation limit | Coefficient differences do not automatically measure discrimination | The intensity residual does not automatically measure a causal innovation effect |

Both papers suggest the same reading discipline: **write down the observed gap, state exactly what the counterfactual holds fixed and changes, then check whether the components add up and what enters the remainder.**

## Original Papers and Method Reference

- Ronald Oaxaca (1973), “[Male-Female Wage Differentials in Urban Labor Markets](https://inequality.stanford.edu/sites/default/files/media/_media/pdf/Classic_Media/Oaxaca_1973_Discrimination%20and%20Prejudice.pdf),” *International Economic Review* 14(3): 693–709.
- Arik Levinson (2009), “[Technology, International Trade, and Pollution from US Manufacturing](https://faculty.georgetown.edu/aml6/pdfs%26zips/AER2009Levinson.pdf),” *American Economic Review* 99(5): 2177–2192.
- Ben Jann (2008), “[A Stata Implementation of the Blinder–Oaxaca Decomposition](https://repec.ethz.ch/ets/papers/jann_oaxaca.pdf),” for the twofold and threefold formulas and choices of reference coefficients.
