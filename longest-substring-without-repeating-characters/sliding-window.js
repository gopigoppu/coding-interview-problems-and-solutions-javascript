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

console.log(lengthOfLongestSubstring("abcabcbb"));