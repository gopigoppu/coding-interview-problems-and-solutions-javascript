# Problem ( 9. Palindrome Number )

Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward.

For example, 121 is a palindrome while 123 is not.


**Leetcode link :** [https://leetcode.com/problems/palindrome-number/](https://leetcode.com/problems/palindrome-number/)

### Example 1:

    Input: x = 121
    Output: true
    Explanation: 121 reads as 121 from left to right and from right to left.

### Example 2:

    Input: x = -121
    Output: false
    Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

### Example 3:

    Input: x = 10
    Output: false
    Explanation: Reads 01 from right to left. Therefore it is not a palindrome.



## Solution 1 ( Binary Search ) ==> Optimized


```javascript

var isPalindrome = function(x) {
    if(x < 0 ) return false;
    if(x < 10)  return true;
    if(x %10 === 0) return false;
    
    let reverse = 0;
    while(reverse < x){
        reverse = (reverse * 10) + (x % 10);
        x = Math.trunc(x/10);
    }
    return (x === reverse) || (Math.trunc(reverse/10) === x);
};


```

### Complexity Analysis

    Time complexity: O(logn)
    Space complexity: O(1)



