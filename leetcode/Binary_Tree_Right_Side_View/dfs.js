// using DFS -> PreOrder NRL traversal

var rightSideView = function (root) {
    const result = [];

    dfs(root, 0, result);
    return result;

};

const dfs = (node, currentLevel, result) => {
    if (!node) {
        return;
    }

    if (currentLevel >= result.length) {
        result.push(node.val);
    }

    if (node.right) {
        dfs(node.right, currentLevel + 1, result);
    }

    if (node.left) {
        dfs(node.left, currentLevel + 1, result);
    }
}


// ------- Code to generate our binary tree -------
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
let val = rightSideView(tree);
console.log(val);