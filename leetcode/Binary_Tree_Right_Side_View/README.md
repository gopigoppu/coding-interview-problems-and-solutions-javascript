# Problem ( 199. Binary Tree Right Side View )

Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.


**Leetcode link :** [https://leetcode.com/problems/binary-tree-right-side-view/](https://leetcode.com/problems/binary-tree-right-side-view/)

### Example 1:

![](./tree_right_view.jpeg)

    Input: root = [1,2,3,null,5,null,4]
    Output: [1,3,4]

### Example 2:

    Input: root = [1,null,3]
    Output: [1,3]

### Example 3:

    Input: root = []
    Output: []



## Solution 1 (Using BFS) : 
<br>

```javascript

var rightSideView = function (root) {
    if (!root) {
        return [];
    }
    let queue = [root], result = [];

    while (queue.length) {

        let length = queue.length, count = 0, currentNode;

        while (count < length) {
            currentNode = queue.shift();

            if (currentNode && currentNode.left) {
                queue.push(currentNode.left);
            }

            if (currentNode && currentNode.right) {
                queue.push(currentNode.right);
            }
            count++;
        }
        result.push(currentNode.val);
    }
    return result;

};



```

### Complexity Analysis

    Time complexity: O(n)
    Space complexity: O(W) -> W = Max Width of Binary tree


## Solution 2 ( DFS ) ==> Optimized


```javascript
// using DFS -> PreOrder NRL traversal

var rightSideView = function(root) {
    const result = [];
    
    dfs(root, 0, result);
    return result;
    
};

const dfs = (node, currentLevel, result) => {
    if(!node){
        return;
    }
    
    if(currentLevel >= result.length){
        result.push(node.val);
    }
    
    if(node.right){
        dfs(node.right, currentLevel+1, result);
    }
    
    if(node.left){
        dfs(node.left, currentLevel+1, result);
    }
}

```

### Complexity Analysis

    Time complexity: O(n)
    Space complexity: O(H) -> H = Max Height of Binary Tree



