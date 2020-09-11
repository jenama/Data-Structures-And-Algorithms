/*Merge two sorted linked lists and return it as a new sorted list. The new list should be made by splicing together the nodes of the first two lists.

Example:

Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4
*/


//  * Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
}

const l2 = new ListNode(
    1, 
    new ListNode(
            3,
            new ListNode(
                4,
                 null 
            )
        )
);

const l1 = new ListNode(
      1,
      new ListNode(
          2,
          new ListNode(
              4,
              null
          )
      )
)

// /**
//  * @param {ListNode} l1
//  * @param {ListNode} l2
//  * @return {ListNode}
//  */
const mergeTwoLists = (l1, l2) => {
    if (!l1 && !l2) return null
    const newLL = new ListNode()
    let output = newLL
    while (l1 || l2) {
        if (!l1 && l2) {
            output.next = l2
            l2 = l2.next
      
        } else if (!l2 && l1){
            output.next = l1
            l1 = l1.next
        } else if (l1.val <= l2.val) {
             output.next = l1
            l1 = l1.next
        } else {
            output.next = l2
            l2 = l2.next 
        }
        
       output = output.next
    }
    
   return newLL.next  
};
console.log(mergeTwoLists(l1,l2))