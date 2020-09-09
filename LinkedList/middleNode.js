function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
}

// Sample data
const listHead = new ListNode(
    1, 
    new ListNode(
        2,
        new ListNode(
            3,
            new ListNode(
                4,
                new ListNode(
                    5,
                    null 
                )
            )
        )
    )
);


const findMiddleOfLL = (head) => {
    //Define a variable to keep track of 
    let currNode = head;
    for (let i=0; i<(Math.floor(getSize(head) /2)); i++) {
        currNode = currNode.next;
    }
    console.log(currNode)
    return currNode;
};

const getSize = (head) => {
    if (!head) { return 0 }
    return getSize(head.next) + 1;
}
// console.log(findMiddleOfLL())