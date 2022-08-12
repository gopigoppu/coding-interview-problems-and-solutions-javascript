var levelOrder = function (root) {
    if (!root) {
        return [];
    }

    let result = [];

    const dfs = (node, level) => {

        if (!node) {
            return;
        }

        if (!result[level]) {
            result[level] = [node.val];
        } else {
            result[level].push(node.val);
        }

        dfs(node.left, level + 1);
        dfs(node.right, level + 1);
    }

    dfs(root, 0);
    return result;

};


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

const tree = new TreeNode(3);
tree.insert([9, 20, 4, 1, 5, 7, null, null, 2, null, null, null]);



// Execute using BFS
let val = levelOrder(tree);
console.log(val);