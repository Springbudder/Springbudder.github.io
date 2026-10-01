---
title: LeetCode 21-Merge Two Sorted Lists
date: 2017-06-10 16:22:19
tags: LeetCode
categories: 数据科学与编程
---
#### Description
Question: Merge two sorted lists

[Linked Lists refrences](http://cslibrary.stanford.edu/105/LinkedListProblems.pdf)
#### Solver
C++ (Recursion: slower than dummy variable method)
{% codeblock lang:Cpp %}
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */
class Solution {
public:
    ListNode* mergeTwoLists(ListNode* l1, ListNode* l2) {
        
        struct ListNode* result = NULL;
        
        if (l1 == NULL)
            return l2;
        if (l2 == NULL)
            return l1;
            
        if (l1->val <= l2->val)
        {
            result = l1;
            result->next = mergeTwoLists(l1->next, l2);
        }
        else
        {
            result = l2;
            result->next = mergeTwoLists(l1, l2->next);
        }
        
        return result;
    }
};
{% endcodeblock %}

C++ (Dummy variable)
<!--more-->{% codeblock lang:Cpp %}
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */
class Solution 
{
public:
    ListNode* mergeTwoLists(ListNode* l1, ListNode* l2) 
    {
       
        ListNode dummy(-1); // Assume all vals are positve
        ListNode *cur = &dummy;
       
        while (l1 && l2)
        {
            if (l1->val < l2->val)
            {
                cur->next = l1;
                l1 = l1->next;
            }
            else
            {
                cur->next = l2;
                l2 = l2->next;
            }
            cur = cur->next;
        }
            
        cur->next = l1 ? l1 : l2;
        return dummy.next;
    }
}; 
{% endcodeblock %}