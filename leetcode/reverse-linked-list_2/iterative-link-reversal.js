var reverseBetween = function (head, left, right) {
    let currentPos = 1, start = head, currentNode = head;
    while (currentPos < left) {
        start = currentNode;
        currentNode = currentNode.next;
        currentPos++;
    }

    let newList = null; tail = currentNode;
    while (currentPos >= left && currentPos <= right) {
        const next = currentNode.next;
        currentNode.next = newList;
        newList = currentNode;
        currentNode = next;
        currentPos++;
    }

    start.next = newList;
    tail.next = currentNode;

    if (left > 1) {
        return head;
    } else {
        return newList;
    }


};


// Testing purpose below implementation

class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}
// ---- Generate our linked list ----
const linkedList = [5, 4, 3, 2, 1].reduce((acc, val) => {
    console.log(acc, val);
    return new ListNode(val, acc)
}, null);


// ---- Generate our linked list ----

const printList = (head) => {
    if (!head) {
        return;
    }

    console.log(head.val);
    printList(head.next);
}

console.log(linkedList);
console.log(printList(linkedList));

console.log(reverseBetween(linkedList, 2, 4));