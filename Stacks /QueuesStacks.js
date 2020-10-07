// Implement the following operations of a queue using stacks.

// push(x) -- Push element x to the back of queue.
// pop() -- Removes the element from in front of queue.
// peek() -- Get the front element.
// empty() -- Return whether the queue is empty.
// Example:

// MyQueue queue = new MyQueue();

// queue.push(1);
// queue.push(2);  
// queue.peek();  // returns 1
// queue.pop();   // returns 1
// queue.empty(); // returns false

/**
 * Initialize your data structure here.
 */

const Stack = require('./stack')
 class MyQueue {
     constructor() {
        this.stackOne = new Stack()
        this.stackTwo = new Stack()  
     }
     
//  Push element x to the back of queue. 
//  * @param {number} x
//  * @return {void}

    push (x) {
        this.stackOne.push(x)
    };

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
    pop() {
        if(this.stackTwo.isEmpty()) {
            while(!this.stackOne.isEmpty()) {
                let val = this.stackOne.pop()
                this.stackTwo.push(val) 
            }
        }
        return this.stackTwo.pop()
    };

/**
 * Get the front element.
  * @return {number}
 */
    peek() {
        if(this.stackTwo.isEmpty()){
            while(!this.stackOne.isEmpty()) {
                let removed = this.stackOne.pop()
                this.stackTwo.push(removed) 
            }
        }
        return this.stackTwo.peek()
    };

/**
 * Returns whether the queue is empty.
//  * @return {boolean}
 */
    empty () {
        let bothStacks = this.stackTwo.isEmpty() && this.stackOne.isEmpty()
        return bothStacks
    };
 }

//  Your MyQueue object will be instantiated and called as such:
var obj = new MyQueue()
obj.push(1)
obj.push(2)
console.log(obj.peek())
console.log(obj.pop())
console.log(obj.empty())
obj.peek()
obj.empty()
 