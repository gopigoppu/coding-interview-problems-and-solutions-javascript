var isValid = function (s) {
    if (s.legth === 0) {
        return true;
    }
    const reversedChar = {
        '(': ')',
        '{': '}',
        '[': ']'
    };
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        if (reversedChar[s[i]]) {
            stack.push(s[i]);
        } else {
            const poppedStr = stack.pop();
            if (s[i] !== reversedChar[poppedStr]) {
                return false;
            }
        }
    }
    return stack.length === 0;
};
