/* Implement the following operations of a stack using queues.

push(x) -- Push element x onto stack.
pop() -- Removes the element on top of the stack.
top() -- Get the top element.
empty() -- Return whether the stack is empty.
Example:

MyStack stack = new MyStack();

stack.push(1);
stack.push(2);  
stack.top();   // returns 2
stack.pop();   // returns 2
stack.empty(); // returns false
 */

//  Your MyStack object will be instantiated and called as such:

/**
 * Initialize your data structure here.
 */
const Queue = require("./queues");
class MyStack {
  constructor() {
    this.q = new Queue();
    this.secQueue = new Queue();
  }
  //Push element x onto stack.
  push(x) {
    this.q.enqueue(x);
  }
  /*Removes the element on top of the stack and returns that element.
   @return {number}*/
  /** Get the top element.
    //  * @return {number}*/

  pop() {
    let el;
    while (!this.q.isEmpty()) {
      el = this.q.dequeue();
      if (this.q.isEmpty()) {
        break;
      }
      this.secQueue.enqueue(el);
    }

    while (!this.secQueue.isEmpty()) {
      let removed = this.secQueue.dequeue();
      this.q.enqueue(removed);
    }
    return el;
  }

  /** Get the top element.
    //  * @return {number}*/
  /*dequeue from initial Queue
    Dequeue until initial queue is empty
    save the dequeued el in variable(extracted)
    enqueue into secQueue
    return extracted */
  top() {
    let extracted;
    while (!this.q.isEmpty()) {
      extracted = this.q.dequeue();
      this.secQueue.enqueue(extracted);
    }
    while (!this.secQueue.isEmpty()) {
      let removed = this.secQueue.dequeue();
      this.q.enqueue(removed);
    }

    return extracted;
  }

  /*Returns whether the stack is empty.
     @return {boolean}*/
  empty() {
    let twoQueues = this.secQueue.isEmpty() && this.q.isEmpty();
    return twoQueues;
  }
}

var stack = new MyStack();

stack.push(1);
stack.push(2);

// console.log("after", stack);
console.log("top", stack.top());
console.log("after top", stack);
console.log("pop1", stack.pop());
console.log("after pop1", stack);
console.log("top", stack.top());
console.log("after top", stack);
console.log("pop2", stack.pop());
console.log("after pop2", stack);
console.log(stack.empty());
