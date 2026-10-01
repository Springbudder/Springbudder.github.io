---
title: Data encoding and Features selection
date: 2017-05-20 20:30:06
tags: ML
---
### Representing Data and Engineering Features

#### Categorical Data
+ One-Hot-Encoding (Dummy Variables)

Dummy Varibles is quite straight-forward, for n features, different samples have different features. We can specify the feature that the samples embeded as 1, none as 0.
<br>
<b>Note</b>: Dummy variables in machine learning differ from the statistics. In the later field, we denotes the dummy variable in the number ranged from 0 to n-1, n is the numbers of features. Why we should encode the dummy  variable in 0 and 1? <b>To avoid data matrix rank deficient.</b>

+  Binning, Discretization, Linear Models, and Trees

Though bins is relatively powerful in linear regression, tree based methods seems more powerful than linear models. If there are some reasons we must used linear regression, then it will be <b>large datasize</b> and <b>tremendous features</b>. Besides, <b>expannation demands</b> also could be an alternative.
<hr/>

#### Automatical Feature selection

+ Univariate statistics
+ Model based selection
+ Iterative selection