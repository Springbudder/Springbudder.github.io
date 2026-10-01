---
title: Managing many models in R
date: 2017-07-07 14:25:23
tags: R
---
### Three idea underlying the data
Each idea is partnered with a package:
1. <b>Nested data</b> (`tidyr`)
2. <b>Functional programming</b> (`purrr`)
3. <b>Models to tidy data</b> (`broom`)
#### Nested data
<b>Definitition:</b> Dataframe inside dataframes.
Here is pipe example:
```r
x %>% f(y)
# is the same as:
f(x, y)

gapminder %>% 
	group_by(continent, country) %>%
	nest()
# same as:
nest(group_by(gapminder, continent, country))
```
`%>%` represented pipe, it is just a syntax sugar and makes the code more easier for humans to read.Why we don't store the models in a column? Because we have list.
<img src="https://github.com/Springbudder/images/blob/master/image1.PNG?raw=true" width = "40%" /><img src="https://github.com/Springbudder/images/blob/master/image2.PNG?raw=true" width = "40%" /><img src="https://github.com/Springbudder/images/blob/master/image3.PNG?raw=true" width = "40%" />

In R:{% codeblock lang:r %}
library(dplyr)
library(purrr)

country_model <- function(df)
{
	lm(lifeExp ~ year1950, data = df)
}

models <- by_country %>%
	mutate (
		mod = map(data, country_model)
	)
{% endcodeblock %}
#### Functional programming
Need to fullfill...