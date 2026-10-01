---
title: 'LeetCode 50-Pow(x, n)'
date: 2017-06-06 16:54:14
tags: LeetCode
categories: 数据科学与编程
---
<details><summary>Question description:</summary>Implement `pow(x, n)`.</details>
C++ Version
{% codeblock lang:Cpp %}
class Solution {
	public:
    	double myPow(double x, int n) {
        	if (x == 0 and n == 0)
            	return NULL;
        	if (x != 0 and n == 0)
            	return 1;
        	if (n > 0)
            	return my_pow(x, n);
        	return 1 / my_pow(x, -n);
    }
    
    	double my_pow(double x, int n) {
        	if (n == 0)
            	return 1;
        	double half = my_pow(x, n / 2);
        	if (n % 2 == 0)
            	return half * half;
        	return half * half * x;
    	}
};	
{% endcodeblock %}
Python Version
{% codeblock lang:Python %}
class Solution(object):
    def myPow(self, x, n):
        """
        :type x: float
        :type n: int
        :rtype: float
        """
        if x == 0 and n == 0:
            return None
        if x != 0 and n == 0:
            return 1
        
        def my_pow(x, n): 
            if n == 0:
                return 1
            half = my_pow(x, n / 2)
            if n % 2 == 0:
                return half * half
            return half * half * x
        if n > 0:
            return my_pow(x, n)
        return 1 / my_pow(x, -n)	
{% endcodeblock %}