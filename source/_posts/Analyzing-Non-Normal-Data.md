---
title: Analyzing Non-Normal Data
date: 2017-07-05 23:59:36
tags: Statistics
---
#### Determine the normality of the dataset
1. <b>Histogram</b>&nbsp;&nbsp;&nbsp;&nbsp;Do your data resemble a bell-shaped curve?
2. <b>Normality Test</b>&nbsp;&nbsp;&nbsp;&nbsp;Is the p-value greater than your $\alpha$-level(e.g. $\alpha = 0.05$)?
3. <b>Probability Plot</b>&nbsp;&nbsp;&nbsp;&nbsp;Do the plotted points follow a straight line?
#### The reason for non-normality of data
*  Sampled from different populations (locations, genders, seasons, etc.)
*  Shift and drift over time.
*  Contain extreme outliers.
*  Have insufficient resolution (too few significant digits).

#### Analyzing Non-Normal Data
1. <b>Nonparametrics</b>&nbsp;&nbsp;&nbsp;&nbsp;The main difference between parametric and nonparametric is the theretical base, for the parametric the base is <b><em>mean</em></b>, but for the nonparametric, the base is <b><em>median</em></b>. 
2. <b>Alternative Distributions</b>&nbsp;&nbsp;&nbsp;&nbsp;For example, Weibull and exponential distribution, just pick the most fitted model.
3. <b>Transformations</b>&nbsp;&nbsp;&nbsp;&nbsp;Like the transformation data in Machine Learning.

| Parametric Tests    | Nonparametric Tests       |
|:-------------------:|:-------------------------:|
| 1-Sample t          | 1-Sample Sign or Wilcoxon |
| 2-Sample t          | Mann-Whitney              |
| One-Factor ANOVA    | Kruskal-Wallis or Mood    |
| Two-Factor ANOVA    | Friedman                  |
| Pearson Correlation | Spearman Correlation      |