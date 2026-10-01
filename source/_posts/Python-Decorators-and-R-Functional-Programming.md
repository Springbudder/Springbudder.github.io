---
title: Python Decorators and R Functional Programming
date: 2017-06-04 19:58:05
tags: ML
---
<p><strong>Decorator</strong> is a very powerful feature in Python. It makes <b>functional programming</b> more convenient, albeit Python is not a much feasible option. Strictly, I think decorators is just a syntax sugar. Compared to R, functional programming implemented by my own with Python is less elegant and natural.</p>
<p>Beside decorators, <code>lambda</code> expression is aimming at functional programmingas well as <code>apply</code> series function in R language.</p>For example, sort a linked lists:{% codeblock lang:Python %}
"""
class ListNode(object):
	def __init__(self, x):
		self.val = x
		self.next = None
"""
result = lists.sort(key = lambda x:x.val)
"""
There are two way to sort: sort and sorted.
sorted is a function, sort is a kind of attribute and it will change the object need to manipulate, but sorted will return a copy.
"""
# Sort a dict
# Also can use OrderedDict function in the collections moduel
dict = {1:'x', 2:'y', 3:'z'}
print sorted(dict.items(), key = lambda x:x[1]){% endcodeblock %}
<details><summary>Need to fullfill...</summary><ul><li>Python</li><li>R</li></details>