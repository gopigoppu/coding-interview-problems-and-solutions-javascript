# Problem : ( Valid Parentheses )

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.


**Leetcode link :** [https://leetcode.com/problems/valid-parentheses/](https://leetcode.com/problems/valid-parentheses/)

### Example 1:

    Input: s = "()"
    Output: true

### Example 2:

    Input: s = "()[]{}"
    Output: true

### Example 3:

    Input: s = "(]"
    Output: false



## Solution 1 (Iterative) : 
<br>

```javascript

var isValid = function(s) {
    if(s.legth === 0){
        return true;
    }
    const reversedChar = {
        '(': ')',
        '{' : '}',
        '[' : ']'
    };
    const stack = [];
    for(let i=0; i<s.length; i++){
        if(reversedChar[s[i]]){
            stack.push(s[i]);
        }else{
            const poppedStr = stack.pop();
            if(s[i] !== reversedChar[poppedStr]){
                return false;
            }
        }
    }
    return stack.length === 0;
};


```

### Complexity Analysis

    Time complexity: O(n)
    Space complexity: O(n) 


