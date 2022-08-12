# Problem ( 102. Binary Tree Level Order Traversal )

Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).


**Leetcode link :** [https://leetcode.com/problems/binary-tree-level-order-traversal/](https://leetcode.com/problems/binary-tree-level-order-traversal/)

### Example 1:

![](./binary-tree-level-order-traversal.jpeg)

    Input: root = [3,9,20,null,null,15,7]
    Output: [[3],[9,20],[15,7]]

### Example 2:

    Input: root = [1]
    Output: [[1]]

### Example 3:

    Input: root = []
    Output: []



## Solution 1 (Using DFS) : 
<br>

```javascript

var levelOrder = function(root) {
    if(!root){
        return [];
    }
    
    let result = [];
    
    const dfs = (node, level) => {
        
        if(!node){
            return;
        }
        
        if(!result[level]){
            result[level] = [node.val];
        }else{
            result[level].push(node.val);     
        }
        
        dfs(node.left, level+1);
        dfs(node.right, level+1);
    }
    
    dfs(root, 0);
    return result;

};


```

### Complexity Analysis

    Time complexity: O(n)
    Space complexity: O(n)


## Solution 2 ( BFS ) ==> Optimized


```javascript

var levelOrder = function(root) {
    if(!root){
        return [];
    }
    
    const queue = [root], traversalOrder = [];
    
    while(queue.length){
        const order = [];
        let length = queue.length, count=0;
        while(count < length){
            const node = queue.shift();
            order.push(node.val);
            if(node.left){
                queue.push(node.left);
            }
            if(node.right){
                queue.push(node.right);
            }
            count++;
        }
        traversalOrder.push(order);
    }
    return traversalOrder;

};


```

### Complexity Analysis

    Time complexity: O(n)
    Space complexity: O(n)



