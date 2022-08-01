var pivotIndex = function (nums) {
    let sum = nums.reduce(((a, b) => a + b), 0);
    let left = 0;

    for (let i = 0; i < nums.length; i++) {
        const result = sum - left - nums[i];
        if (result === left) {
            return i;
        }
        left += nums[i];
    }
    return -1;
};

console.log(pivotIndex([-1, -1, -1, -1, -1, 0]));