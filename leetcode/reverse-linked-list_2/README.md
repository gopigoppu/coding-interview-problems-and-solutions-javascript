# Problem : ( Reverse Linked List II )

Given the head of a singly linked list and two integers left and right where left <= right, reverse the nodes of the list from position left to position right, and return the reversed list.


**Leetcode link :** [https://leetcode.com/problems/reverse-linked-list-ii/](https://leetcode.com/problems/reverse-linked-list-ii/)


### Example 1:

![](./rev2ex2.jpeg)

    Input: head = [1,2,3,4,5], left = 2, right = 4
    Output: [1,4,3,2,5]

### Example 2:

    Input: head = [5], left = 1, right = 1
    Output: [5]





## Solution 1 (TIterative Link Reversal) : 
<br>

```javascript

var reverseBetween = function(head, left, right) {
    let currentPos = 1, start = head, currentNode = head;
    while(currentPos < left){
        start = currentNode;
        currentNode = currentNode.next;
        currentPos++;
    }
    
    let newList = null; tail = currentNode;
    while(currentPos >= left && currentPos <= right){
        const next = currentNode.next;
        currentNode.next = newList;
        newList = currentNode;
        currentNode = next;
        currentPos++;
    }
    
    start.next = newList;
    tail.next = currentNode;
    
    if(left > 1){
        return head;
    }else{
        return newList;
    } 
};



```

### Complexity Analysis

    Time complexity: O(n)
    Space complexity: O(1) 


