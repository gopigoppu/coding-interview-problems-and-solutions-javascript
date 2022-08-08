var searchRange = function (nums, target) {
    let found = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            found.push(i);
        }
    }
    if (found.length === 1) return [found[0], found[0]];
    const start = found.length > 1 ? found[0] : -1;
    const end = found.length > 1 ? found[found.length - 1] : -1;
    return [start, end];
};

const arr = [5, 7, 7, 8, 8, 10];
const target = 8;

console.log(searchRange(arr, target));