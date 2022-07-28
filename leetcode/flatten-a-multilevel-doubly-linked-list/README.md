# Problem : ( Flatten a Multilevel Doubly Linked List )

You are given a doubly linked list, which contains nodes that have a next pointer, a previous pointer, and an additional child pointer. This child pointer may or may not point to a separate doubly linked list, also containing these special nodes. These child lists may have one or more children of their own, and so on, to produce a multilevel data structure as shown in the example below.

Given the head of the first level of the list, flatten the list so that all the nodes appear in a single-level, doubly linked list. Let curr be a node with a child list. The nodes in the child list should appear after curr and before curr.next in the flattened list.

Return the head of the flattened list. The nodes in the list must have all of their child pointers set to null.


**Leetcode link :** [https://leetcode.com/problems/reverse-linked-list-ii/](https://leetcode.com/problems/reverse-linked-list-ii/)


### Example 1:

![](./flatten11.jpeg)

    Input: head = [1,2,3,4,5,6,null,null,null,7,8,9,10,null,null,11,12]
    Output: [1,2,3,7,8,11,12,9,10,4,5,6]
    Explanation: The multilevel linked list in the input is shown.

After flattening the multilevel linked list it becomes:

![](./flatten12.jpeg)

### Example 2:

    Input: head = [1,2,null,3]
    Output: [1,3,2]

### Example 3:

    Input: head = []
    Output: []
    Explanation: There could be empty list in the input.





## Solution 1 (TIterative Link Reversal) : 
<br>

```javascript


var flatten = function(head) {
    if(!head){
        return head;
    }
    
    let currentNode = head;
    while(currentNode !== null){
        if(currentNode.child === null){
            currentNode = currentNode.next;
        }else{
            let tail = currentNode.child;
            while(tail.next !== null){
                tail = tail.next;
            }
            
            tail.next = currentNode.next;
            if(tail.next !== null){
                tail.next.prev = tail;
            }
            currentNode.next = currentNode.child;
            currentNode.next.prev = currentNode;
            currentNode.child = null;
        }
    }
    return head;
};



```

### Complexity Analysis

    Time complexity: O(n)
    Space complexity: O(1) 


