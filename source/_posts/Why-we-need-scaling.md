---
title: Why we need scaling?
date: 2017-05-19 20:49:30
tags: SVM
categories: 数据科学与编程
---
#### Explanantion 1:
<p>Scaling before applying SVM is very important. Part 2 of Sarle’s Neural Networks FAQ Sarle (1997) explains the importance of this and most of considerations also apply to SVM. The main advantage of scaling is <b>to avoid attributes in greater numeric ranges dominating those in smaller numeric ranges</b>. Another advantage is <b>to avoid numerical difficulties during the calculation</b>. Because kernel values usually depend on the inner products of feature vectors, e.g. the linear kernel and the polynomial kernel, large attribute values might cause numerical problems. We recommend linearly scaling each attribute to the range [−1, +1] or [0, 1].</p>

<p>Of course we have to use the same method to scale both training and testing data. For example, suppose that we scaled the first attribute of training data from [−10, +10] to [−1, +1]. If the first attribute of testing data lies in the range [−11, +8], we must scale the testing data to [−1.1, +0.8]. See Appendix B for some real examples.</p>

[Reference of Explanantion 1](http://www.csie.ntu.edu.tw/~cjlin/papers/guide/guide.pdf)

#### Explanantion 2:
+ Remember the kernel trick used in SVMs depends on inner products between training examples. If one component is much larger than the others, then it will affect the inner product more than the others, which means the classifier won't care about most of the other features.
+ Any svm solver runs a numerical optimization and it is necessary to estimate the step size it takes to reach convergence.   If the step size is too small, the solver will take forever to reach the global minimum.  If it is too big, it will get close fast but then oscillate around the global minimum.  The step size needs to be in some unit of measurement, and this unit is  normalized by looking at the volume of the data set, such as a ball  bounding the entire set of points.

[Reference of Explanantion 2](https://www.quora.com/Why-scaling-is-important-for-the-linear-SVM-classification)