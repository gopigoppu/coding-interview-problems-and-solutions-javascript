var maxArea = function (height) {
    let maxArea = 0;
    for (let p1 = 0; p1 < height.length; p1++) {
        for (let p2 = p1 + 1; p2 < height.length; p2++) {
            const length = Math.min(height[p1], height[p2]);
            const width = p2 - p1;
            const area = length * width;
            maxArea = Math.max(maxArea, area);
        }
    }
    return maxArea;
};


console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));