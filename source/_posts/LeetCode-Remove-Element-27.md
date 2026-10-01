---
title: LeetCode 27-Remove Element
date: 2017-06-05 20:14:16
tags: LeetCode
categories: 数据科学与编程
---
Given an array and a value, remove all instances of that value in place and return the new length.<br>Do not allocate extra space for another array, you must do this in place with constant memory.
The order of elements can be changed. It doesn't matter what you leave beyond the new length.<br><details><summary>Example:</summary>
Given input array `nums = [3,2,2,3]`, `val = 3`.<br>Your function should return `length = 2`, with the first two elements of nums being `2`.</details>
C++ Version
{% codeblock lang:Cpp %}
class Solution {
	public:
    	int removeElement(vector<int>& nums, int val) {
        	int head = 0;
        	int tail = nums.size();
        	for (int i = 0; i < tail; i++) {
            	if (nums[i] != val)
                	nums[head++] = nums[i];
        	}
        	return head;
    	}
	}
};
{% endcodeblock %}
Python Version
{% codeblock lang:Python %}
class Solution(object):
	def removeElement(self, nums, val):
        """
        :type nums: List[int]
        :type val: int
        :rtype: int
        """
		head = 0
        for i in range(len(nums)):
            if (nums[i] != val):
                nums[head] = nums[i]
                head += 1
        return head	
{% endcodeblock %}