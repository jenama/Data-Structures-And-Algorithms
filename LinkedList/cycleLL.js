/*Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.

Follow up:

Can you solve it using O(1) (i.e. constant) memory?

 

Example 1:


Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).
Example 2:


Input: head = [1,2], pos = 0
Output: true
*/


const listHead1 = new ListNode(3)
const n1 = new ListNode(2) 
const n2 = new ListNode(0) 
const n3 = new ListNode(-4)

listHead1.next = n1
n1.next = n2
n2.next = n3
n3.next = n1

function ListNode(val) {
    this.val = val;
    this.next = null;
}
 
const hasCycle = (head) => {
    if (!head ||!head.next) return false
    let slow = head
    let fast = head.next
    while (fast && fast.next) {
        if (slow === fast)  return true
        slow = slow.next
        fast = fast.next.next
    }
return false
};
console.log(hasCycle(listHead1))