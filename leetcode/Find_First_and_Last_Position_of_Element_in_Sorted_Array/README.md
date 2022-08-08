# Problem ( 34. Find First and Last Position of Element in Sorted Array )

Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.


**Leetcode link :** [https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/)

### Example 1:

    Input: nums = [5,7,7,8,8,10], target = 8
    Output: [3,4]

### Example 2:

    Input: nums = [5,7,7,8,8,10], target = 6
    Output: [-1,-1]

### Example 3:

    Input: nums = [], target = 0
    Output: [-1,-1]



## Solution 1 (Using Native Array Sort) : 
<br>

```javascript

var searchRange = function(nums, target) {
    let found = [];
    for(let i=0; i<nums.length; i++){
        if(nums[i] === target){
            found.push(i);
        }
    }
    if(found.length === 1) return [found[0], found[0]];
    const start = found.length > 1 ? found[0] : -1;
    const end = found.length > 1 ? found[found.length-1] : -1 ;
    return [start, end];
};


```

### Complexity Analysis

    Time complexity: O(n)
    Space complexity: O(n)


## Solution 2 ( Binary Search ) ==> Optimized


```javascript

var searchRange = function (nums, target) {
    if (nums.length < 1) {
        return [-1, -1];
    }
    let firstPos = binarySearch(nums, 0, nums.length - 1, target);
    let start = firstPos, end = firstPos, tmp1, tmp2;

    if (start === -1) {
        return [-1, -1];
    }

    while (start !== -1) {
        tmp1 = start;
        start = binarySearch(nums, 0, start - 1, target);
    }
    start = tmp1;

    while (end !== -1) {
        tmp2 = end;
        end = binarySearch(nums, end + 1, nums.length - 1, target);
    }
    end = tmp2;

    return [start, end];
};

const binarySearch = function (nums, left, right, target) {
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (target === nums[mid]) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}


```

### Complexity Analysis

    Time complexity: O(logn)
    Space complexity: O(1)



