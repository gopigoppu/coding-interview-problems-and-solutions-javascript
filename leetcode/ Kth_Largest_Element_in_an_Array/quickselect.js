var findKthLargest = function (nums, k) {
    const indexToFind = nums.length - k;
    return quickSelect(nums, 0, nums.length - 1, indexToFind);
};

const quickSelect = function (nums, left, right, indexToFind) {
    const partitionIndex = getPartition(nums, left, right);

    if (partitionIndex === indexToFind) {
        return nums[partitionIndex];
    } else if (indexToFind < partitionIndex) {
        return quickSelect(nums, left, partitionIndex - 1, indexToFind);
    } else {
        return quickSelect(nums, partitionIndex + 1, right, indexToFind);
    }
}

const getPartition = function (nums, left, right) {
    let i = left;

    for (let j = left; j <= right; j++) {
        if (nums[j] <= nums[right]) {
            swap(nums, i, j);
            i++;
        }
    }
    return i - 1;
}

const swap = function (nums, i, j) {
    const tmp = nums[i];
    nums[i] = nums[j];
    nums[j] = tmp;
}