# Problem ( 215. Kth Largest Element in an Array )

Given an integer array nums and an integer k, return the kth largest element in the array.

Note that it is the kth largest element in the sorted order, not the kth distinct element.

You must solve it in O(n) time complexity.


**Leetcode link :** [https://leetcode.com/problems/kth-largest-element-in-an-array/](https://leetcode.com/problems/kth-largest-element-in-an-array/)

### Example 1:

    Input: nums = [3,2,1,5,6,4], k = 2
    Output: 5

### Example 2:

    Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
    Output: 4




## Solution 1 (Using Native Array Sort) : 
<br>

```javascript

var findKthLargest = function(nums, k) {
    nums = nums.sort((a,b)=> a-b);
    return nums[nums.length-k];
};


```

### Complexity Analysis

    Time complexity: O(n^2)
    Space complexity: O(n)


## Solution 2 ( Quicksort ) 


```javascript

var findKthLargest = function(nums, k) {
    const indexToFind = nums.length - k;
    quickSort(nums, 0, nums.length-1);
    return nums[indexToFind];
};

const quickSort = function(nums, left, right){
    if(left < right){
        const partitionIndex = getPartition(nums, left, right); 
        quickSort(nums, left, partitionIndex-1);
        quickSort(nums, partitionIndex+1, right);
    }
}

const getPartition = function(nums, left, right){
    const pivotElement = nums[right];
    let partitionIdx = left;
    
    for(let j=left; j< right; j++){
        if(nums[j] <= pivotElement){
            swap(nums, partitionIdx, j);
            partitionIdx++;
        }
    }
    
    swap(nums, partitionIdx, right);
    
    return partitionIdx;
}

const swap = function(nums, i, j){
    const tmp = nums[i];
    nums[i] = nums[j];
    nums[j] = tmp;
}


```

### Complexity Analysis

    Time complexity: O(nlogn)
    Space complexity: O(n)


## Solution 3 ( Quickselect ) ==>  Optimized Solution


```javascript

var findKthLargest = function(nums, k) {
    const indexToFind = nums.length - k;
    return quickSelect(nums, 0, nums.length-1, indexToFind);
};

const quickSelect = function(nums, left, right, indexToFind){
    const partitionIndex = getPartition(nums, left, right);
    
    if(partitionIndex === indexToFind){
        return nums[partitionIndex];
    }else if(indexToFind < partitionIndex){
        return quickSelect(nums, left, partitionIndex-1, indexToFind);
    }else{
        return quickSelect(nums, partitionIndex+1, right, indexToFind);
    }
}

const getPartition = function(nums, left, right){
    let i = left;
    
    for(let j=left; j<=right; j++){
        if(nums[j] <= nums[right]){
            swap(nums, i, j);
            i++;
        }
    }
    return i-1;
}

const swap = function(nums, i, j){
    const tmp = nums[i];
    nums[i] = nums[j];
    nums[j] = tmp;
}


```

### Complexity Analysis

    Time complexity: O(n)
    Space complexity: O(n)

