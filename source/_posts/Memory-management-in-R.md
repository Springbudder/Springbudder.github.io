---
title: Memory management in R
date: 2017-07-01 11:54:38
tags: R
categories: 数据科学与编程
---
### Object size
To determine the size of an object in R, built-in function `object_size()` is an option. Alternatively, the function `object_size()` in the package `pryr`, which has the same name with that of in the builtin namespace is better than that since it accounts for shared elements within an object and includes the size of environments. For example:
```r
library(pryr)
object_size(1:10)
[1] 88 B

object_size(mean)
[1] 832 B

object_size(numeric())
[1] 40 B
```
See? The empty vector occupies 40 bytes. Then why? Here is the answer. Those 40 bytes are used to store four components possessed by every object in R:
+ <b>Object metadata</b> (4 bytes). These metadata store the base type (e.g. integer) and information used for debugging and memory management.
+ <b>Two pointers</b>: one to the next object in memory and one to the previous object (2 * 8 bytes). This doubly-linked list makes it easy for internal R code to loop through every object in memory.
+ <b>A pointer to the attributes </b>(8 bytes).

### Memory usage and garbage collection
While `object_size()` tells you the size of a single object, `pryr::mem_used()` tells you the total size of all objects in memory:
```r
library(pryr)
mem_used()
[1] 100 MB
```
>In R, the two main causes of memory leaks are formulas and closures because they both capture the enclosing environment.

### Memory profiling
Just use this function:`utils::Rprof()`

### Modification in place
For example:
```r
x <- 1:10
x[5] <- 10
x
```
R can modifiy the x either in original object or the copied one, depends on whether other variable point to the object. In my opinion, it is a little bit tricky. You need to trace the memory to check the modification. The debugging and tracing methods are as follows:
```r
library(pryr)
x <- 1:10
c(address(x), refs(x))
[1] "0x103110060" "1"

y <- x
c(address(y), refs(y))
[1] "0x103100060" "2"
```
In the code above, `address()` returns the location of the object, `refs()` will return the number of names point to that locaton, if the number is 0, then the memory will be released. (Classic GC method just like Python)
In R, all of the non-primitive function will increase the `refs`, but primitive functions usually not.

[Reference](http://adv-r.had.co.nz/memory.html#modification)