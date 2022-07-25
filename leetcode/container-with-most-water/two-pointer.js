let maxArea = function (height) {
    let maxArea = 0;
    let p1 = 0;
    let p2 = height.length - 1;
    while (p1 < p2) {
        const length = Math.min(height[p1], height[p2]);
        const width = p2 - p1;
        const area = length * width;
        maxArea = Math.max(maxArea, area);

        if (height[p1] < height[p2]) {
            p1++;
        } else {
            p2--;
        }

    }
    return maxArea;
};


console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));