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



// Execute using BFS
let val = rightSideView(tree);
console.log(val);