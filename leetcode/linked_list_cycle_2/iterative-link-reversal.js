var detectCycle = function (head) {
    if (!head) {
        return null;
    }
    let currentNode = head;
    let seenNode = new Set();
    while (!seenNode.has(currentNode)) {
        if (currentNode.next == null) {
            return null;
        }
        seenNode.add(currentNode);
        currentNode = currentNode.next;
    }
    return currentNode;
};

