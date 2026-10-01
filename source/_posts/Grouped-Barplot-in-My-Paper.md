---
title: Grouped Barplot in My Paper
date: 2017-06-23 19:23:00
tags: Biology
categories: 数据科学与编程
---
[1. Very impressive cheetsheet](https://www.rstudio.com/wp-content/uploads/2015/03/ggplot2-cheatsheet.pdf)
[2. Instruction of barplots: A good blog](http://t-redactyl.io/blog/2016/01/creating-plots-in-r-using-ggplot2-part-4-stacked-bar-plots.html)
Here is the script draw a figure in my paper.
{% codeblock lang:R %}
library(ggplot2)
library(dplyr)

mydata <- read.csv("C:\\Users\\Huang\\Desktop\\Books\\my_data.csv", header = TRUE, stringsAsFactors = FALSE)
mydf <- tbl_df(mydata)

p <- ggplot(mydf, aes(x = sites, y = ratio, fill = as.factor(sites)))+
    geom_bar(stat = "identity")+
    facet_wrap(~Batch, ncol = 5)+
    scale_fill_brewer(palette = "Set3")+
    theme(legend.key.size = unit(0.6, "cm"))+
    theme(axis.text.x = element_blank())+
    theme(axis.ticks = element_blank())+
    guides(fill = guide_legend(title = "Sampling sites"))+
    scale_y_continuous(expand = c(0, 0))+
    labs(x = "Sampling sites", y = "Positive ratio (%)")
p{% endcodeblock %}
Here is the image:
![Grouped barplot](Rplot07.jpeg)