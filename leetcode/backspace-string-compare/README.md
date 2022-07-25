# Problem

Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.

Note that after backspacing an empty text, the text will continue empty.


**Leetcode link :** [https://leetcode.com/problems/backspace-string-compare/](https://leetcode.com/problems/backspace-string-compare/)

### Example 1:

    Input: s = "ab#c", t = "ad#c"
    Output: true
    Explanation: Both s and t become "ac".

### Example 2:

    Input: s = "ab##", t = "c#d#"
    Output: true
    Explanation: Both s and t become "".

### Example 3:

    Input: s = "a#c", t = "b"
    Output: false
    Explanation: s becomes "c" while t becomes "b".


## Solution 1 (Brute Force approach) : 
<br>

```javascript

var buildString = function (str) {
    let builtStr = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '#') {
            builtStr.pop();
        } else {
            builtStr.push(str[i]);
        }
    }
    return builtStr;
};

var backspaceCompare = function (s, t) {
    const builtS = buildString(s);
    const builtT = buildString(t);
    if (builtS.length !== builtT.length) {
        return false;
    } else {
        for (let i = 0; i < builtS.length; i++) {
            if (builtS[i] !== builtT[i]) {
                return false;
            }
        }
    }
    return true;
};


```

### Complexity Analysis

    Time complexity: O(n)
    Space complexity: O(n)


## Solution 2 (Two Pointer) ==>  Optimized Solution


```javascript

let backspaceCompare = function (s, t) {
    let p1 = s.length - 1, p2 = t.length - 1;
    while (p1 >= 0 || p2 >= 0) {
        if (s[p1] === '#' || t[p2] === '#') {
            if (s[p1] === '#') {
                let backCount = 2;
                while (backCount > 0) {
                    p1--;
                    backCount--;
                    if (s[p1] === '#') {
                        backCount += 2;
                    }
                }
            }

            if (t[p2] === '#') {
                let backCount = 2;
                while (backCount > 0) {
                    p2--;
                    backCount--;
                    if (t[p2] === '#') {
                        backCount += 2;
                    }
                }
            }

        } else {
            if (s[p1] !== t[p2]) {
                return false;
            } else {
                p1--;
                p2--;
            }
        }
    }
    return true;
};


```

### Complexity Analysis

    Time complexity: O(n)
    Space complexity: O(1)

