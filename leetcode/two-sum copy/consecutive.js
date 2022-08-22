var minimumRecolors = function (blocks, k) {
    const length = blocks.length;
    let initialCount = 0;
    for (let i = 0; i < length; i++) {
        if (blocks[i] === 'B') {
            initialCount++;
            if (initialCount === k) {
                return 0;
            }
        } else {
            initialCount = 0;
        }
    }


    for (let i = 0; i < length; i++) {
        let changeCount = 0;
        let newStr = '';
        for (let j = i; j < length; j++) {
            if (blocks[j] === 'B') {
                newStr += blocks[j];
            } else if (blocks[j] === 'W') {
                newStr += 'B';
                changeCount++;
            }
            if (newStr.length === k) {
                return changeCount;
            }
        }
    }
};

console.log(minimumRecolors("BWWWBB", 6));
console.log(minimumRecolors("WBBWWWWBBWWBBBBWWBBWWBBBWWBBBWWWBWBWW", 15));