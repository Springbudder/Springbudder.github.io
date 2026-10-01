---
title: Zen about Graphs in Paper
date: 2017-07-05 16:17:13
tags: ggplot2
---
### Graphs
>The simple graph has brought more information to the data analyst’s mind than any other device.
                                                      —John Tukey

What elements are essential in a graph generation process? Here is the answer:
+ data
+ geom_function
	+ mapping
		+ aesthetic
		+ stat
		+ position
+ coordiante_function
+ facet_function

Writting in the code format:
```r
ggplot(data = <DATA>) +
	<GEOM_FUNCTION>(
		mapping = aes(<MAPPING>),
		stat = <STAT>,
		position = <POSITION>
	) +
<COORDINATE_FUNCTION> +
<FACET_FUNCTION>
```
[Extension of graphical grammar](http://vita.had.co.nz/papers/layered-grammar.pdf)