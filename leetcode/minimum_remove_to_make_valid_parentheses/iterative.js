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

console.log(minRemoveToMakeValid("lee(t(c)o)de)"));