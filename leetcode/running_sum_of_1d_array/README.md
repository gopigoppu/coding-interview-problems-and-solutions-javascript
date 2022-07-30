# Problem ( 1480. Running Sum of 1d Array )

Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

Return the running sum of nums.


**Leetcode link :** [https://leetcode.com/problems/running-sum-of-1d-array/](https://leetcode.com/problems/running-sum-of-1d-array/)

### Example 1:

    Input: nums = [1,2,3,4]
    Output: [1,3,6,10]
    Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

### Example 2:

    Input: nums = [1,1,1,1,1]
    Output: [1,2,3,4,5]
    Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].

### Example 3:

    Input: nums = [3,1,2,10,1]
    Output: [3,4,6,16,17]


## Solution 1 (Sliding Window Technique) : 
<br>

```javascript

var runningSum = function(nums) {
    let result = [];
    let sum = nums[0];
    for(let i = 1; i<= nums.length; i++){
        result.push(sum);
        sum+= nums[i];
    }
    return result;
};


```

### Complexity Analysis

    Time complexity: O(n)
    Space complexity: O(n)


## Solution 2 ( Using Input array for output ) ==>  Optimized Solution


```javascript

var runningSum = function (nums) {
    for (let i = 1; i < nums.length; i++) {
        nums[i] += nums[i - 1];
    }
    return nums;
};


```

### Complexity Analysis

    Time complexity: O(n)
    Space complexity: O(1)

