var isPalindrome = function (x) {
    if (x < 0) return false;
    if (x < 10) return true;
    if (x % 10 === 0) return false;

    let tmp = x, reverse = x % 10;
    while (reverse < x) {
        x = Math.trunc(x / 10);
        reverse = (reverse * 10) + (x % 10);
    }
    return reverse === tmp || Math.trunc(reverse / 10) === x;
};

console.log(isPalindrome(88888));