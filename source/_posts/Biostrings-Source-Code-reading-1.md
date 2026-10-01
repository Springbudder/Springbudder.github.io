---
title: Biostrings Source Code reading 1
date: 2017-07-18 20:27:57
tags: R
categories: 数据科学与编程
---
### Source code in the file `Biostrings/R/00datacache.R`
```r
### =========================================================================
### Environment for storing run-time objects
###

RTobjs <- new.env(hash=TRUE, parent=emptyenv())


### =========================================================================
### Serialized objects
###

SERIALIZED_OBJNAMES <- c(
    "BLOSUM45",
    "BLOSUM50",
    "BLOSUM62",
    "BLOSUM80",
    "BLOSUM100",
    "PAM30",
    "PAM40",
    "PAM70",
    "PAM120",
    "PAM250"
)


### - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
### Objects created "on-the-fly" (not serialized)
###
### WARNING: Improper calls to 'getdata' by the 'createObject' function can
### lead to infinite recursive loops!
###

createObject <- function(objname)
{
    # add more here...
    stop("don't know how to create object '", objname, "'")
}


### - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
### The "getdata" function (NOT exported)
###

datacache <- new.env(hash=TRUE, parent=emptyenv())

getdata <- function(objname)
{
    if (!exists(objname, envir=datacache)) {
        if (objname %in% SERIALIZED_OBJNAMES) {
            data(list=objname, package="Biostrings", envir=datacache)
        } else {
            assign(objname, createObject(objname), envir=datacache)
        }
    }
    get(objname, envir=datacache)
}
```
<hr>
#### Function description
1. `new.env()`<pre>new.env(hash = TRUE, parent = parent.frame(), size = 29L)</pre>
2. `data()`
`data()` was originally intended to allow users to load datasets from packages for use in their examples, and as such it loaded the datasets into the workspace .GlobalEnv. This avoided having large datasets in memory when not in use. That need has been almost entirely superseded by lazy-loading of datasets.
3. `assign()`
Assign a value to a name in an environment.
4. `get()`
Search by name for an object (`get()`) or zero or more objects (`mget()`).