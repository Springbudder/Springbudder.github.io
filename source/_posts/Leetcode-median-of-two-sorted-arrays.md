---
title: 'Leetcode: median of two sorted arrays'
date: 2017-05-23 13:16:20
tags: LeetCode
---

Something interesting.

When I try to figure out this quesion in Leetcode with C++, I found it was a little bit complicated. If you would not like to use the standard library, given the complexity of algorithm restriction, perhapes binary methods were best option. In this scenario, coding was tedious and the program was not roubust. 

Fortunately, Python is available. Even though Python is a scipt language, it is more elegant, easier to understand compared to god damn C++. On the other hand, C++ standard library is convineient as well, but once it be used, our original ideal derailed obviously, since show off matters a lot. 

Now get to business:
{% codeblock Python %}

    class Solution(object):
    	def findMedianSortedArrays(self, nums1, nums2):
        	"""
        	:type nums1: List[int]
        	:type nums2: List[int]
        	:rtype: float
        	"""
        	for item in nums2:
           		nums1.append(item)
        
        	temp = sorted(nums1)
        	length = len(temp)
        
        	if (length % 2 == 0):
            	return (temp[length/2 - 1] + temp[length/2]) * 1.0 / 2
        	else:
            	return temp[(length - 1) / 2]`

{% endcodeblock %}