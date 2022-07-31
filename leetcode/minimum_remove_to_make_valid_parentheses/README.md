# Problem : ( Minimum Remove to Make Valid Parentheses )

Given a string s of '(' , ')' and lowercase English characters.

Your task is to remove the minimum number of parentheses ( '(' or ')', in any positions ) so that the resulting parentheses string is valid and return any valid string.

Formally, a parentheses string is valid if and only if:

It is the empty string, contains only lowercase characters, or
It can be written as AB (A concatenated with B), where A and B are valid strings, or
It can be written as (A), where A is a valid string.


**Leetcode link :** [https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/](https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/)

### Example 1:

    Input: s = "lee(t(c)o)de)"
    Output: "lee(t(c)o)de"
    Explanation: "lee(t(co)de)" , "lee(t(c)ode)" would also be accepted.

### Example 2:

    Input: s = "a)b(c)d"
    Output: "ab(c)d"

### Example 3:

    Input: s = "))(("
    Output: ""
    Explanation: An empty string is also valid.



## Solution 1 (Iterative) : 
<br>

```javascript

var minRemoveToMakeValid = function (s) {
    const sArr = s.split('');
    const stack = [];

    for (let i = 0; i < sArr.length; i++) {
        if (sArr[i] === '(') {
            stack.push(i);
        } else if (sArr[i] === ')' && stack.length) {
            stack.pop();
        } else if (sArr[i] === ')') {
            sArr[i] = '';
        }
    }

    while (stack.length) {
        const rem = stack.pop();
        sArr[rem] = '';
    }

    return sArr.join('');

};

```

### Complexity Analysis

    Time complexity: O(n)
    Space complexity: O(n) 


