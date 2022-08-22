// ------ Divide and conquer Leetcode solution start - jsdiet ------
// using Divide and Conquer

var countNodes = function (root) {
    if (!root) {
        return 0;
    }
    const height = getTreeHeight(root);
    let upperCount = Math.pow(2, height) - 1;
    let left = 0, right = upperCount;

    while (left < right) {
        let indexToFind = Math.ceil((left + right) / 2);
        if (nodeExists(indexToFind, height, root)) {
            left = indexToFind;
        } else {
            right = indexToFind - 1;
        }
    }

    return upperCount + left + 1;
};

const getTreeHeight = (node) => {
    let height = 0;
    while (node.left) {
        height++;
        node = node.left;
    }
    return height;
}

const nodeExists = (indexToFind, height, node) => {
    let left = 0, right = Math.pow(2, height) - 1, count = 0;

    while (count < height) {
        let mid = Math.ceil((left + right) / 2);
        if (indexToFind >= mid) {
            node = node.right;
            left = mid;
        } else {
            node = node.left;
            right = mid - 1;
        }
        count++;
    }
    return node !== null;
}

// ------ Divide and conquer Leetcode solution end - jsdiet ------

// Leetcode environment provides already generated binary tree. 
// So below part of code no need, if you are trying in Leetcode website environment.


// ------- Code to generate our binary tree -------
// This is purely for testing in local machine

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }

    insert(values) {
        const queue = [this];
        let i = 0;
        while (queue.length > 0) {
            let current = queue.shift();
            for (let side of ["left", "right"]) {
                if (!current[side]) {
                    if (values[i] !== null) {
                        current[side] = new TreeNode(values[i]);
                    }
                    i++;
                    if (i >= values.length) return this;
                }
                if (current[side]) queue.push(current[side]);
            }
        }
        return this;
    }
}

const tree = new TreeNode(1);
tree.insert([2, 3, null, 5, null, 4]);



// Execute using DFS
let val = countNodes(tree);
console.log(val);