var runningSum = function(nums) {
    let result = [];
    let sum = nums[0];
    for(let i = 1; i<= nums.length; i++){
        result.push(sum);
        sum+= nums[i];
    }
    return result;
};

console.log(runningSum([1,2,3,4]));