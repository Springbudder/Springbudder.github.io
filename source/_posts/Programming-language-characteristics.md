---
title: Programming language characteristics
date: 2017-07-08 19:18:29
tags: Programming
---
Yesterday I saw a post which talks about how to learn programming. In this post, the poster said the most important aspect of a programming language is characteristics. So what are characteristics of a programming language? I googled the topic and got a video, then I jogged down the main content. 
### CREATING RECIPES
- Each programming language provides <b>a set of primitive operations</b>
- Each programming language provides <b>mechanisms for combining primitives to form more complex, but legal expressions</b>
- Each programming language provides <b>mechanisms for deducing meanings or values associated with computations or expressions</b>
### ASPECT OF LANGUAGES
- <b>Primitive constructs</b>
	- Programming language - numbers, strings, simple operators
	- English - words
- <b>Syntax</b> - which strings of chracters and symbols are well-formed
	- Programming language - we'll get to specifics shortly, but for example `3.2 + 3.2` is a valid Python expression
	- English - "Cat dog boy" is not syntactically valid, as not in form of acceptable sentence
- <b>Static semantics</b> - which syntactically valid strings have a meaning
	- English - "I are big" has form <noun> <intransitive verb> <noun>, so syntactically valid, but isi not valid English because "I" is singular, "are" is plural
	- Programming language - for example, <literal> <operator> <literal> is a valid syntactic form, but `2.3/'abc'` is a stactix semantic error
- <b>Semantics</b> - what is the meaning associated with a syntactically correct string of symbols with no static semantic errors
	- English - can be ambiguous
		- "I can not praise this student too highly"
	- Programming languages - always has exactly one meaning
		- But meaning (or value) may not be what programmer intended

### WHAT CAN THINGS GO WRONG?
- <b>Syntactic errors</b>
	- Common but easily caught by computer
- <b>Static semantic errors</b>
	- Some languages check carefully before running, others check while interpreting the program
	- If not caught, behavior of program unpredictable
- <b>Programs do not have semantic errors, but meaning may not be what was intended</b>
	- Cranshes (stops running)
	- Runs forever
	- Produces an answer, but not programmer's intent

### OUR GOAL
- Learn the <b>syntax</b> and <b>senmantics</b> of a programming language
- Learn how to use those elements to <b>translate "recipes"</b> for solving a problem into a form that the computer can use to do the work for us
- <b>Computational modes of thought</b> enable us to use a suite of methods