/* implementing a queue with a linkedlist */


function ListNode (val) {
    this.val = val;
    this.next = null;
}


class QueueWithLL {
    constructor(){
        // this.queue = []
        this.length = 0;
        this.head = null;
        this.tail = null;
        // this.currNode = this.head
    }

    enqueue(val) {
        const listHead = new ListNode(val)
        let currNode;

        if (!this.head) {
            this.head = listHead;
        } else {
            currNode = this.head;
            while(currNode.next){
                currNode = currNode.next
            }
            currNode.next = listHead;
        }
        this.length++;  
    }

    dequeue() {
        let currNode = this.head;
        if(currNode !== null){
            let value = currNode.val;
            currNode = currNode.next;
            this.head = currNode;
            this.length--;
            return value;
        }
        return null;  
    }
    

    peek() {
        if (this.head){
            return this.head.val
        }
    }

    size() {
        return this.length
    }

    isEmpty() {
        if (this.length === 0) {
            return true
        } else {
            return false
        }
    }
}

const queue = new QueueWithLL()

queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)

queue.dequeue()
queue.dequeue()

console.log(queue.peek())
console.log(queue.rear())
console.log(queue)
console.log(queue.size())
console.log(queue.isEmpty())