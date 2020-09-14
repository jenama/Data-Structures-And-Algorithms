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
  var obj = new MyStack()
  obj.push(1)
  obj.push(2)
  obj.push(3)
  var param_2 = obj.pop()
  var param_3 = obj.top()
  var param_4 = obj.empty()


 /**
 * Initialize your data structure here.
 */
var MyStack = function() {
    this.stack = []
};

/**
 * Push element x onto stack. 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.stack.push(x)
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function() {
    return this.stack.pop()
   
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function() {

    return this.stack[this.stack.length -1]
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    if (this.stack.length === 0) {
        return true
    } else {
        return false
    }
};



