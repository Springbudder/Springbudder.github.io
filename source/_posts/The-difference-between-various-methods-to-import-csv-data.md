---
title: The difference between various methods to import csv data
date: 2017-07-06 13:18:53
tags: R
categories: 数据科学与编程
---
#### Data import methods
There are several ways to import a csv data, which the most convinient format data into our workspace. Here are the methods:
```r
# The base method
read.csv('../data/my_data.csv', header = T)

# fread in the data.table package
fread('../data/my_data.csv', header = T, sep = ',')

# read_csv in readr package
read_csv('../data/my_data.csv', header = T)

# read.big.matrix in bigmemory package
read.big.matrix('../data/my_data.csv', header = T)

# read.csv.ffdf in ff package
read.csv.ffdf(file = '../my_data/my_data.csv', header = T)

#read.csv.sql in sqldf package
read.csv.sql('../data/my_data.csv')
```
In the methods above, the fastest way is `fread` and `read_csv`.
[This is the benchmark of these method](https://www.r-bloggers.com/efficiency-of-importing-large-csv-files-in-r/)
Among these five methods, the `read.csv` in `base`, `read_csv` in `readr`, `fread` in `data.table` are more important. Here is the figure describe the efficiency:
<img src="https://csgillespie.github.io/efficientR/_main_files/figure-html/readr-vs-base-1.png" width = "60%" />
Therefore, I think `readr` is my first option.
Except the advantage of readr, compared to `read.csv` in `base`, less robustness is disadvantage for the `readr` package. Hope I would not deal with the big data.