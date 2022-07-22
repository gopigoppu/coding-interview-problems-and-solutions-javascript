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

const str1 = "ab#c";
const str2 = "ad#c"

console.log(backspaceCompare(str1, str2));