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
       
    }

    enqueue(val) {
        const node = new ListNode(val)
        
        if (!this.head) {
            this.head = node;
            this.tail = node
            
        } else {
            this.tail.next = node 
            this.tail = node
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
console.log(queue)

queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
console.log(queue)

queue.dequeue()
queue.dequeue()

console.log(queue.peek())
console.log(queue.size())
console.log(queue.isEmpty())
