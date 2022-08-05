var findKthLargest = function (nums, k) {
    const indexToFind = nums.length - k;
    quickSort(nums, 0, nums.length - 1);
    return nums[indexToFind];
};

const quickSort = function (nums, left, right) {
    if (left < right) {
        const partitionIndex = getPartition(nums, left, right);
        quickSort(nums, left, partitionIndex - 1);
        quickSort(nums, partitionIndex + 1, right);
    }
}

const getPartition = function (nums, left, right) {
    const pivotElement = nums[right];
    let partitionIdx = left;

    for (let j = left; j < right; j++) {
        if (nums[j] <= pivotElement) {
            swap(nums, partitionIdx, j);
            partitionIdx++;
        }
    }

    swap(nums, partitionIdx, right);

    return partitionIdx;
}

const swap = function (nums, i, j) {
    const tmp = nums[i];
    nums[i] = nums[j];
    nums[j] = tmp;
}


const arr = [5, 3, 1, 6, 4, 2];
const kToFind = 2;
console.log(findKthLargest(arr, kToFind));