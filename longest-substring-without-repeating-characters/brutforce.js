let lengthOfLongestSubstring = function (s) {
    const givenStrLen = s.length;
    if (givenStrLen <= 1) {
        return givenStrLen;
    }

    let longestSubStr = 0;
    for (let i = 0; i < givenStrLen; i++) {
        let currentLongest = 0, seenChars = {};
        for (let j = i; j < givenStrLen; j++) {
            if (!seenChars[s[j]]) {
                seenChars[s[j]] = true;
                currentLongest++;
                longestSubStr = Math.max(currentLongest, longestSubStr);
            } else {
                break;
            }
        }
    }
    return longestSubStr;
};

console.log(lengthOfLongestSubstring("abcabcbb"));