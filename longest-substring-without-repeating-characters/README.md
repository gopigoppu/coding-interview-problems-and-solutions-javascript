# Problem

Given a string s, find the length of the longest substring without repeating characters.


**Leetcode link :** [https://leetcode.com/problems/longest-substring-without-repeating-characters/](https://leetcode.com/problems/longest-substring-without-repeating-characters/)

### Example 1:

    Input: s = "abcabcbb"
    Output: 3
    Explanation: The answer is "abc", with the length of 3.

### Example 2:

    Input: s = "bbbbb"
    Output: 1
    Explanation: The answer is "b", with the length of 1.

### Example 3:

    Input: s = "pwwkew"
    Output: 3
    Explanation: The answer is "wke", with the length of 3.
    Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.


## Solution 1 (Brute Force approach) : 
<br>

```javascript

var lengthOfLongestSubstring = function(s) {
    const givenStrLen = s.length;
    if(givenStrLen <= 1){
        return givenStrLen;
    }
    
    let longestSubStr = 0;
    for(let i=0; i<givenStrLen; i++){
        let currentLongest = 0, seenChars={};
        for(let j = i; j < givenStrLen; j++){
            if(!seenChars[s[j]]){
                seenChars[s[j]] = true;
                currentLongest++;
                longestSubStr = Math.max(currentLongest, longestSubStr);
            }else{
                break;
            }
        }
    }
    return longestSubStr;
};


```

### Complexity Analysis

    Time complexity: O(n^2)
    Space complexity: O(n)


## Solution 2 ( Sliding Window Optimized ) ==>  Optimized Solution


```javascript

let lengthOfLongestSubstring = function (s) {
    const givenStrLen = s.length;
    if (givenStrLen <= 1) {
        return givenStrLen;
    }

    let longestSubStr = 0, left = 0;
    const seenChars = {};
    for (let right = left; right < givenStrLen; right++) {
        const currentChar = s[right];
        const prevSeenChar = seenChars[currentChar];
        if (prevSeenChar >= left) {
            left = prevSeenChar + 1;
        }
        seenChars[currentChar] = right;
        longestSubStr = Math.max(longestSubStr, right - left + 1);
    }
    return longestSubStr;
};


```

### Complexity Analysis

    Time complexity: O(n)
    Space complexity: O(n)

