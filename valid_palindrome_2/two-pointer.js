var isAlmostSubPalindrome = function (s, left, right) {
    while (left < right) {
        if (s[left] !== s[right]) {
            return false
        }
        left++;
        right--;
    }
    return true;
}

var validPalindrome = function (s) {
    let left = 0, right = s.length - 1;
    while (left < right) {
        if (s[left] != s[right]) {
            return isAlmostSubPalindrome(s, left + 1, right) || isAlmostSubPalindrome(s, left, right - 1);
        }
        left++;
        right--;
    }
    return true;
};

console.log(validPalindrome("aba"));
console.log(validPalindrome("abca"));
console.log(validPalindrome("abc"));