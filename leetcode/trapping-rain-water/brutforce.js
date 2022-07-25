
let trap = function (height) {
    let trappedWater = 0;
    for (let i = 0; i < height.length; i++) {
        let leftEdge = i, rightEdge = i, leftMaxTrap = 0, rightMaxTrap = 0;
        while (leftEdge >= 0) {
            leftMaxTrap = Math.max(leftMaxTrap, height[leftEdge]);
            leftEdge--;
        }
        while (rightEdge < height.length) {
            rightMaxTrap = Math.max(rightMaxTrap, height[rightEdge]);
            rightEdge++;
        }
        const currentPointTrap = Math.min(leftMaxTrap, rightMaxTrap) - height[i];
        trappedWater += currentPointTrap;
    }

    return trappedWater;
};

let smallTestData = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];

console.log(trap(smallTestData));
