---
title: Martingale and Markov Chain
date: 2017-06-07 18:58:05
tags: Biology
---
#### A very intuitive view
* Fair game
* $E(X\_{n}|X\_{n-1}) = X\_{n-1}$
#### Definition and instance
Let the $(\Omega, \mathcal{A}, P)$ is the finite probability space, $\mathcal{D}\_{1} \preccurlyeq \mathcal{D}\_{2} \preccurlyeq \mathcal{D}\_{3} \preccurlyeq ... \mathcal{D}\_{n}$ is a difference sequences.
<b>Definition 1:</b>$\ \ $Random sequence $\xi = (\xi\_{k})\_{1 \leqslant k \leqslant n}$ (for the difference $\mathcal{D}\_{1} \preccurlyeq \mathcal{D}\_{2} \preccurlyeq \mathcal{D}\_{3} \preccurlyeq ... \mathcal{D}\_{n}$) is called <b>martingale</b>, if:
1. $\xi\_{k}$ is $\mathcal{D}\_{k^{-}}$ measurable.
2. $\mathbb{E}(\xi\_{k+1}|\mathcal{D}\_{k}) = \xi\_{k}, 1 \leqslant k \leqslant n-1$

#### External Links: 
[Cox Model evaluate association between SNPs.](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3436842/)
#####  Abstract:
**Motivation:** For the past few decades, many statistical methods in genome-wide association studies (GWAS) have been developed to identify SNP–SNP interactions for case-control studies. However, there has been less work for prospective cohort studies, involving the survival time. Recently, Gui et al. (2011) proposed a novel method, called Surv-MDR, for detecting gene–gene interactions associated with survival time. Surv-MDR is an extension of the multifactor dimensionality reduction (MDR) method to the survival phenotype by using the log-rank test for defining a binary attribute. However, the Surv-MDR method has some drawbacks in the sense that it needs more intensive computations and does not allow for a covariate adjustment. In this article, we propose a new approach, called Cox-MDR, which is an extension of the generalized multifactor dimensionality reduction (GMDR) to the survival phenotype by using a martingale residual as a score to classify multi-level genotypes as high- and low-risk groups. The advantages of Cox-MDR over Surv-MDR are to allow for the effects of discrete and quantitative covariates in the frame of Cox regression model and to require less computation than Surv-MDR.

**Results:** Through simulation studies, we compared the power of Cox-MDR with those of Surv-MDR and Cox regression model for various heritability and minor allele frequency combinations without and with adjusting for covariate. We found that Cox-MDR and Cox regression model perform better than Surv-MDR for low minor allele frequency of 0.2, but Surv-MDR has high power for minor allele frequency of 0.4. However, when the effect of covariate is adjusted for, Cox-MDR and Cox regression model perform much better than Surv-MDR. We also compared the performance of Cox-MDR and Surv-MDR for a real data of leukemia patients to detect the gene–gene interactions with the survival time.<br><!--more-->
