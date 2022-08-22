# Problem ( 222. Count Complete Tree Nodes)

Given the root of a complete binary tree, return the number of the nodes in the tree.

According to Wikipedia, every level, except possibly the last, is completely filled in a complete binary tree, and all nodes in the last level are as far left as possible. It can have between 1 and 2h nodes inclusive at the last level h.

Design an algorithm that runs in less than O(n) time complexity.


**Leetcode link :** [https://leetcode.com/problems/count-complete-tree-nodes/](https://leetcode.com/problems/count-complete-tree-nodes/)

### Example 1:

![](./complete_tree.jpeg)

    Input: root = [1,2,3,4,5,6]
    Output: 6

### Example 2:

    Input: root = []
    Output: 0

### Example 3:

    Input: root = [1]
    Output: 1



## Solution : (Using Divide and Conquer) : 
<br>

```javascript

var countNodes = function(root) {
    if(!root){
        return 0;
    }
    const height = getTreeHeight(root);
    let upperCount = Math.pow(2, height) - 1;
    let left =0, right = upperCount;
    
    while(left < right){
        let indexToFind = Math.ceil( (left+right)/2 );
        if(nodeExists(indexToFind, height, root)){
            left = indexToFind;
        }else{
            right = indexToFind - 1;
        }
    }
    
    return upperCount + left +1;
};

const getTreeHeight = (node) =>{
    let height = 0;
    while(node.left){
        height++;
        node = node.left;
    }
    return height;
}

const nodeExists = (indexToFind, height, node) => {
    let left = 0, right = Math.pow(2, height) - 1, count = 0;
    
    while(count < height){
        let mid = Math.ceil((left+right) / 2 );
        if(indexToFind >= mid){
            node = node.right;
            left = mid;
        }else{
            node = node.left;
            right = mid -1;
        }
        count++;
    }
    return node !== null;
}


```

### Complexity Analysis

    Time complexity: O(log(n))
    Space complexity: O(1) 

