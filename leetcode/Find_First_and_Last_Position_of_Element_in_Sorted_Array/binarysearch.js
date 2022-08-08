// Binary search for searching

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

const arr = [5, 7, 7, 8, 8, 10];
const target = 8;

console.log(searchRange(arr, target));