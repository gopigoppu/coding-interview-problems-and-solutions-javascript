## Problem

**LeetCode Link :** [https://leetcode.com/problems/two-sum/description/](https://leetcode.com/problems/two-sum/description/)

Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:
```
Given nums = [2, 7, 11, 15], target = 9,
Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
```


## Solution 1 (Brute Force approach) : 
<br>

```javascript

let twoSum = function(nums, target) {
    let results = [];
    for(let i=0; i<nums.length; i++){
        for(let j=i+1; j<nums.length; j++){
            if(nums[j] === (target - nums[i])){
                results.push(i, j);
                return results;
            }
        }
    }
    return results;
};


```

Complexity Analysis

    Time complexity:  O(n^2)
    Space complexity: O(1) 
    Runtime: 100 ms
    Memory Usage: N/A


## Solution 2 (One-pass Hash Table)
<br>

```javascript

let twoSum = function(nums, target) {
    const hashMap = {};
    for(let i=0;i<nums.length;i++){
        const mapVal = hashMap[nums[i]];
        if(mapVal >= 0){
            return [mapVal, i];
        }else{
            const numToFind = target - nums[i];
            hashMap[numToFind] = i;
        }
    }
    return null;
};

```

Complexity Analysis

    Time complexity:  O(n)
    Space complexity: O(n) 
    Runtime: 83 ms
    Memory Usage: 43.1 MB

