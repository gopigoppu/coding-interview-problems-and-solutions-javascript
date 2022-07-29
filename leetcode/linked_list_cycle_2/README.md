# Problem : ( Linked List Cycle II )

Given the head of a linked list, return the node where the cycle begins. If there is no cycle, return null.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to (0-indexed). It is -1 if there is no cycle. Note that pos is not passed as a parameter.

Do not modify the linked list.


**Leetcode link :** [https://leetcode.com/problems/linked-list-cycle-ii/](https://leetcode.com/problems/linked-list-cycle-ii/)


### Example 1:

![](./circularlinkedlist.png)

    Input: head = [3,2,0,-4], pos = 1
    Output: tail connects to node index 1
    Explanation: There is a cycle in the linked list, where tail connects to the second node.

### Example 2:

![](./circularlinkedlist_test2.png)

    Input: head = [1,2], pos = 0
    Output: tail connects to node index 0
    Explanation: There is a cycle in the linked list, where tail connects to the first node.

### Example 3:

    Input: head = [1], pos = -1
    Output: no cycle
    Explanation: There is no cycle in the linked list.



## Solution 1 (TIterative Link Reversal) : 
<br>

```javascript

var detectCycle = function(head) {
    if(!head){
        return null;
    }
    let currentNode = head;
    let seenNode = new Set();
    while(!seenNode.has(currentNode)){
        if(currentNode.next == null){
            return null;
        }
        seenNode.add(currentNode);
        currentNode = currentNode.next;
    }
    return currentNode;
};



```

### Complexity Analysis

    Time complexity: O(n)
    Space complexity: O(n) 


