## Problem

**Leetcode link :** [https://leetcode.com/problems/add-two-numbers/description/](https://leetcode.com/problems/add-two-numbers/description/)

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example

```
Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
```

## Solution 1 (Event chaining approach)

```javascript
var addTwoNumbers = function(l1, l2) {
    let sum = parseInt((l1 + '').split(',').reverse().join('')) + parseInt((l2 + '').split(',').reverse().join(''));
    return sum.toString().split('').reverse();
    
};
```

## Solution 2 (Linked list method) ==>  Optimized Solution

```javascript
var addTwoNumbers = function(l1, l2) {
    var List = new ListNode(0);
    var head = List;
    var sum = 0;
    var carry = 0;

    while(l1!==null||l2!==null||sum>0){

        if(l1!==null){
            sum = sum + l1.val;
            l1 = l1.next;
        }
        if(l2!==null){
            sum = sum + l2.val;
            l2 = l2.next;
        }
        if(sum>=10){
            carry = 1;
            sum = sum - 10;
        }

        head.next = new ListNode(sum);
        head = head.next;

        sum = carry;
        carry = 0;

    }

    return List.next;
};
```

Thanks to [https://leetcode.com/problems/add-two-numbers/discuss/1020/Javascript-solution](https://leetcode.com/problems/add-two-numbers/discuss/1020/Javascript-solution)
