# Problem

Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.


### Example 1:

![](./rainwatertrap.png)


    Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
    Output: 6
    Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.

### Example 2:

    Input: height = [4,2,0,3,2,5]
    Output: 9


## Solution 1 (Brute Force approach) : 
<br>

```javascript

let trap = function(height) {
    let trappedWater = 0;
    for(let i = 0; i<height.length; i++){
        let leftEdge = i, rightEdge=i, leftMaxTrap = 0, rightMaxTrap = 0;
        while(leftEdge >= 0){
            leftMaxTrap = Math.max(leftMaxTrap, height[leftEdge]);
            leftEdge--;
        }
        while(rightEdge < height.length){
            rightMaxTrap = Math.max(rightMaxTrap, height[rightEdge]);
            rightEdge++;
        }
        const currentPointTrap = Math.min(leftMaxTrap, rightMaxTrap) - height[i];
        trappedWater += currentPointTrap;
    }
    
    return trappedWater;
};


```

### Complexity Analysis

    Time complexity: O(n^2)
    Space complexity: O(1)


## Solution 2 (Two Pointer) ==>  Optimized Solution


```javascript

let trap = function(height) {
    let trappedWater = 0, leftEdge = 0, rightEdge=height.length-1, leftMaxTrap = 0, rightMaxTrap = 0;
    while(leftEdge < rightEdge){
        if(height[leftEdge] <= height[rightEdge]){
            if(height[leftEdge] >= leftMaxTrap){
                leftMaxTrap = height[leftEdge];
            }else{
                trappedWater += leftMaxTrap - height[leftEdge]; 
            }
            leftEdge++;
        }else{
            if(height[rightEdge] >= rightMaxTrap){
                rightMaxTrap = height[rightEdge];
            }else{
                trappedWater += rightMaxTrap - height[rightEdge];
            }
            rightEdge--;
        } 
    }
    
    return trappedWater;
};


```

### Complexity Analysis

    Time complexity: O(n)
    Space complexity: O(1)

