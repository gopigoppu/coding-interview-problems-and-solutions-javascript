# Problem : ( Valid Palindrome II)

Given a string s, return true if the s can be palindrome after deleting at most one character from it.


**Leetcode link :** [https://leetcode.com/problems/valid-palindrome-ii/](https://leetcode.com/problems/valid-palindrome-ii/)

### Example 1:

    Input: s = "aba"
    Output: true

### Example 2:

    Input: s = "abca"
    Output: true
    Explanation: You could delete the character 'c'.

### Example 3:

    Input: s = "abc"
    Output: false



## Solution 1 (Two Pointer from outside) : 
<br>

```javascript

var isAlmostSubPalindrome = function(s, left, right){
    while(left < right){
        if(s[left] !== s[right]){
            return false
        }
        left++;
        right--;
    }
    return true;
}

var validPalindrome = function(s) {
    let left = 0, right=s.length-1;
    while(left < right){
        if(s[left] != s[right]){
            return isAlmostSubPalindrome(s, left+1, right) || isAlmostSubPalindrome(s, left, right-1) ;
        }
        left++;
        right--;
    }
    return true;
};



```

### Complexity Analysis

    Time complexity: O(n)
    Space complexity: O(1) 


