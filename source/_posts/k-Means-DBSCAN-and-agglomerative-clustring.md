---
title: k-Means, DBSCAN and agglomerative clustring
date: 2017-05-20 15:47:29
tags: ML
categories: 数据科学与编程
---
### Cluatering methods
+ <b><em>k</em>-Means</b>
+ <b>Agglomerative clustering</b>
+ <b>DBSCAN</b>

<p>
of the methods above, <b><em>k</em>-Means</b> and <b>Agglomerative clustering</b> allows to specify the number of desired clusters, while <b>DBSCAN</b> indirectly influences cluster sizes with the parameter <b><em>eps</em></b>.
</p>


<p>
<b><em>k</em>-Means</b> can be viewed as dimentionality reduction method, since one cluster can be represented by th mean data. <b>DBSCAN</b> could be used for looking outliers and the main advantage is it can be applied in the complex shapes, for example, two_moons datasets. In addition, <b>Agglomerative clustering</b> could give us a more recognizable dendrogram, which is similar to the dicision tree, quit understandable to the unexperts.
</p>
