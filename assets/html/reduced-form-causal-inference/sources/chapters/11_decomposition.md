# Decomposition：从差距到反事实

分解法回答一个描述性问题：观察到的总差距，分别与哪些可观察的变化相对应？做法是**固定一部分关系，改变另一部分**，计算反事实，再把各项加回总差距。本章只用两篇论文学习这一思路：Oaxaca（1973）的工资差距分解，以及 Levinson（2009）的制造业污染排放分解。两者的共同点是核算差距；它们使用的模型与数据并不相同。

## 一、Oaxaca（1973）：工资差距从何而来？

### 动机与反事实

设 A、B 为两个劳动者群体，$Y$ 为工资，$X$ 包括教育、经验等可观察特征。平均工资差距是 $\Delta=\bar Y_A-\bar Y_B$。即使两组的平均工资不同，我们仍不知道差距与**劳动者特征构成**、还是与**相同特征对应的工资关系**有关。Oaxaca 的做法是分别拟合工资方程，并用其中一组的系数给另一组的特征“定价”。[Oaxaca（1973）原文](https://inequality.stanford.edu/sites/default/files/media/_media/pdf/Classic_Media/Oaxaca_1973_Discrimination%20and%20Prejudice.pdf)。

对每组分别估计包含截距的线性回归：

$$
Y_{ig}=X_{ig}'\beta_g+\varepsilon_{ig},\qquad g\in\{A,B\}.
$$

常数 1 放在 $X$ 中，截距放在 $\beta_g$ 中。各组分别用普通最小二乘法拟合且包含截距时，该组样本的平均残差为零，所以**样本内**有 $\bar Y_g=\bar X_g'\hat\beta_g$。于是

$$
\hat\Delta=\bar X_A'\hat\beta_A-\bar X_B'\hat\beta_B.
$$

$\bar X_A'\hat\beta_B$ 是核心反事实：**保持 B 组拟合出的工资关系，却换入 A 组的平均特征**。在上式中加上再减去它，得到两项分解：

$$
\begin{aligned}
\hat\Delta
&=\underbrace{(\bar X_A-\bar X_B)'\hat\beta_B}_{\text{构成／禀赋部分}}
 +\underbrace{\bar X_A'(\hat\beta_A-\hat\beta_B)}_{\text{系数／工资结构部分}}.
\end{aligned}
$$

第一项按 **B 组系数**评价两组的特征差异；第二项在 **A 组平均特征**上比较两套系数，包含截距差异。这是一个准确加总的代数恒等式；反事实工资是回归预测，并非真的改变了劳动者教育后的因果结果。[Jann（2008），第 2–3 页](https://repec.ethz.ch/ets/papers/jann_oaxaca.pdf)。

```{admonition} 直觉：从 B 组走到 A 组
:class: tip
从 $(\bar X_B,\hat\beta_B)$ 出发，先将特征换成 $\bar X_A$，再将系数换成 $\hat\beta_A$。第一步对应构成项，第二步对应结构项。换一条路径，单项会变，总差距不变。
```

### 交互项与参照系数

令 $\Delta X=\bar X_A-\bar X_B$、$\Delta\beta=\hat\beta_A-\hat\beta_B$，直接展开乘积：

$$
\begin{aligned}
\hat\Delta
&=(\bar X_B+\Delta X)'(\hat\beta_B+\Delta\beta)-\bar X_B'\hat\beta_B\\
&=\underbrace{\Delta X'\hat\beta_B}_{\text{构成}}
 +\underbrace{\bar X_B'\Delta\beta}_{\text{系数}}
 +\underbrace{\Delta X'\Delta\beta}_{\text{交互}}.
\end{aligned}
$$

这就是三项分解：特征和系数同时变化时，会多出交互项。前一节的两项分解把“系数 + 交互”合并成结构项。若改用 A 组系数评价特征差异，则

$$
\hat\Delta=(\bar X_A-\bar X_B)'\hat\beta_A
 +\bar X_B'(\hat\beta_A-\hat\beta_B).
$$

两个两项式都精确加总，但把交互项分给了不同部分。因此，报告“多少差距由构成解释”时，必须同时说明所选的参照系数；也可以使用经论证的共同参照系数。仅凭代数无法决定哪套系数代表“没有歧视的工资结构”。[Jann（2008），第 2–4 页](https://repec.ethz.ch/ets/papers/jann_oaxaca.pdf)。

### 数字例子

以下工资数字**仅用于演示，不是 Oaxaca 论文的估计值**。假设唯一特征是“是否上过大学”，工资单位为元／小时。

| 群体 | 未上大学的工资 | 上过大学的工资 | 上过大学比例 | 平均工资 |
| --- | ---: | ---: | ---: | ---: |
| A | 20 | 30 | 60% | $0.4\times20+0.6\times30=26$ |
| B | 18 | 26 | 40% | $0.6\times18+0.4\times26=21.2$ |

观察到的差距是 $26-21.2=4.8$。按 B 组工资关系，把大学比例换为 A 组的 60%，反事实平均工资为 $0.4\times18+0.6\times26=22.8$。因此构成项为 $22.8-21.2=1.6$，结构项为 $26-22.8=3.2$，两项合为 $4.8$。若改用 A 组工资关系，构成项是 $(0.6-0.4)(30-20)=2.0$，结构项则是 $2.8$。

### 解释边界

“已解释部分”只表示被**所选可观察特征与参照系数**核算到的差距。“未解释部分”可能包含歧视，也可能包含未测能力、样本选择、测量误差或模型设定问题；反过来，歧视如果影响教育或职业选择，也可能进入“已解释部分”。教育的回归系数本身也未必是教育的因果回报。[Jann（2008），第 1、3 页](https://repec.ethz.ch/ets/papers/jann_oaxaca.pdf)。

## 二、Levinson（2009）：制造业排放为何下降？

### 第一层：规模、行业构成与排放强度

Levinson 注意到，1987—2001 年美国制造业实际产出上升，而所研究的四种空气污染物的制造业排放下降。他要核算这种变化与制造业**规模**、产出向较清洁行业的**构成转移**、以及行业内**单位产出排放强度**的变化分别对应多少。[Levinson（2009），第 2177–2179 页](https://faculty.georgetown.edu/aml6/pdfs%26zips/AER2009Levinson.pdf)。

设行业 $i$ 的产出、排放分别为 $v_i,p_i$，总产出为 $V=\sum_i v_i$。定义行业产出份额 $\theta_i=v_i/V$、排放强度 $z_i=p_i/v_i$。总排放的恒等式是

$$
P=\sum_i p_i=\sum_i v_i z_i=V\sum_i\theta_i z_i.
$$

取全微分，得到论文的三部分表达式：

$$
dP
=\underbrace{\Bigl(\sum_i\theta_i z_i\Bigr)dV}_{\text{规模}}
 +\underbrace{V\sum_i z_i\,d\theta_i}_{\text{构成}}
 +\underbrace{V\sum_i\theta_i\,dz_i}_{\text{强度／技术}}.
$$

这是**无穷小变化**的精确微分。两个年份之间三个量一起变化时，必须指定有限变化的计算顺序，或明确交互项的归属。论文只有基期 1987 年的行业排放强度 $z_{i0}$，没有每年的 $z_{it}$，所以固定 $z_{i0}$，计算规模与构成变化对应的反事实路径，再把观察到的排放与该路径之差作为技术项的间接度量。[Levinson（2009），第 2178–2179 页及脚注 3](https://faculty.georgetown.edu/aml6/pdfs%26zips/AER2009Levinson.pdf)。

令 $0$ 表示基期，固定基期强度的排放指数为

$$
Q_t^{(0)}=V_t\sum_i\theta_{it}z_{i0}.
$$

为展示与实际排放同起点的反事实，可以按基期观察排放 $P_0$ 归一化：

$$
P_t^{\mathrm{cf}}
=P_0\frac{Q_t^{(0)}}{Q_0^{(0)}}
=P_0\frac{V_t}{V_0}
\frac{\sum_i\theta_{it}z_{i0}}{\sum_i\theta_{i0}z_{i0}}.
$$

沿“先变规模、再变构成”的路径，下面的**示意性有限变化分解**严格加总：

$$
\begin{aligned}
P_t-P_0
&=\underbrace{P_0\left(\frac{V_t}{V_0}-1\right)}_{\text{规模：基期构成与强度固定}}\\
&\quad+\underbrace{P_0\frac{V_t}{V_0}
\left[\frac{\sum_i\theta_{it}z_{i0}}{\sum_i\theta_{i0}z_{i0}}-1\right]}_{\text{构成：当期规模、基期强度固定}}\\
&\quad+\underbrace{(P_t-P_t^{\mathrm{cf}})}_{\text{剩余}}.
\end{aligned}
$$

这个有限变化式是对论文指数计算思路的教学展开，**不是论文逐字采用的估计公式**。它说明了剩余项的位置，也使交互项的归属透明。若使用不同的变动顺序，各项可能不同。[Levinson（2009），第 2179–2180 页](https://faculty.georgetown.edu/aml6/pdfs%26zips/AER2009Levinson.pdf)。

```{admonition} “技术项”是剩余，不等于某项创新的因果效果
:class: important
行业内产品构成变化、不同治污方式、其他未测变化和有限变化中的交互，都可能进入剩余项。行业划分越粗，行业内构成变化越容易被误归为技术变化。论文没有用这一分解识别环境法规或技术创新的因果作用。
```

### 第二层：贸易为什么需要投入产出表？

论文再问：净进口增长对应的产品如果在美国生产，按**美国的排放系数**估算，会匹配多少美国排放？仅用进口产品的直接排放系数，会漏掉生产过程中所需的中间投入。[Levinson（2009），第 2186–2188 页](https://faculty.georgetown.edu/aml6/pdfs%26zips/AER2009Levinson.pdf)。

令 $x$ 为各行业总产出向量，$y$ 为最终需求，$C$ 为直接投入系数矩阵；$C_{ij}$ 表示生产一单位行业 $j$ 产品需要多少行业 $i$ 的投入。则

$$
x=Cx+y
\quad\Longrightarrow\quad
(I-C)x=y
\quad\Longrightarrow\quad
x=(I-C)^{-1}y.
$$

若 $\mathbf z'$ 是各行业的直接排放强度行向量，生产最终产品 $y$ 所涉及的各层投入，对应的排放为 $\mathbf z'(I-C)^{-1}y$。因此 $\mathbf z'(I-C)^{-1}$ 是包含中间投入的总排放系数。进一步设 $d_i$ 为行业 $i$ 的国内供应份额，论文只计入可能被替代的**国内**中间投入，使用

$$
\mathbf z^{*\prime}=\mathbf z'\bigl[I-\operatorname{diag}(d)C\bigr]^{-1}.
$$

用这些系数乘各行业相对基期的净进口增量，可得与贸易增长相匹配的假想**美国国内**排放量。这不是出口国的实际排放，也不是“贸易没有增长”时美国经济的均衡结果：价格、消费与生产决策可能同时调整。作者明确把这一情景称为局部均衡的核算练习，并在结论中说明全文没有识别因果关系。[Levinson（2009），第 2187–2190 页](https://faculty.georgetown.edu/aml6/pdfs%26zips/AER2009Levinson.pdf)。

## 放在一起看

| | Oaxaca 的工资差距 | Levinson 的排放变化 |
| --- | --- | --- |
| 观察量 | 两组平均工资差距 | 跨年制造业总排放变化 |
| 固定的参照 | 某组或共同的工资回归系数 | 基期行业排放强度；贸易部分还需投入产出系数 |
| 构成 | 劳动者的特征分布 | 制造业的行业份额 |
| 其他部分 | 工资系数差异及交互 | 产出规模、强度剩余、与进口匹配的排放 |
| 解释限制 | 系数差异不自动等于歧视 | 强度剩余不自动等于技术创新的因果作用 |

两篇论文都提示一个读法：**先写出观察到的总差距，再问反事实固定了什么、改变了什么，最后检查各项是否加总以及剩余项包含什么。**

## 原文与方法参考

- Ronald Oaxaca (1973), “[Male-Female Wage Differentials in Urban Labor Markets](https://inequality.stanford.edu/sites/default/files/media/_media/pdf/Classic_Media/Oaxaca_1973_Discrimination%20and%20Prejudice.pdf),” *International Economic Review* 14(3): 693–709.
- Arik Levinson (2009), “[Technology, International Trade, and Pollution from US Manufacturing](https://faculty.georgetown.edu/aml6/pdfs%26zips/AER2009Levinson.pdf),” *American Economic Review* 99(5): 2177–2192. 用户提供的本地文件名含“2010”，正式发表年份是 2009。
- Ben Jann (2008), “[A Stata Implementation of the Blinder–Oaxaca Decomposition](https://repec.ethz.ch/ets/papers/jann_oaxaca.pdf),” 用于核对两项、三项及参照系数的写法。
