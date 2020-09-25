// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

// push(x) -- Push element x onto stack.
// pop() -- Removes the element on top of the stack.
// top() -- Get the top element.
// getMin() -- Retrieve the minimum element in the stack.

// Example 1:

// Input
// ["MinStack","push","push","push","getMin","pop","top","getMin"]
// [[],[-2],[0],[-3],[],[],[],[]]

// Output
// [null,null,null,null,-3,null,0,-2]

// Explanation
// MinStack minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// minStack.getMin(); // return -3
// minStack.pop();
// minStack.top();    // return 0
// minStack.getMin(); // return -2
// let x =  [[],[-2],[0],[-3],[],[],[],[]]
class MinStack {
  constructor() {
    this.firstStack = [];
    this.secStack = [];
    this.min = Infinity;
  }
  //  * @param {number} x
  //  * @return {void}

  push(x){
    this.firstStack.push(x);
    console.log('push', this.firstStack)
  };

  /**
  //  * @return {void}
 */
  pop() {
     console.log('pop', this.firstStack.pop())
    return this.firstStack.pop();
  };

  /**
  //  * @return {number}
 */
  top(){
     console.log('top', this.firstStack[this.firstStack.length - 1])
    return this.firstStack[this.firstStack.length - 1];
  };

  /**
  //  * @return {number}
 */
  getMin()  {
    let currMin = this.min
    while(this.firstStack.length !== 0) {
      let last = this.firstStack[this.firstStack.length -1]
        if (last < currMin ){
          this.firstStack.pop()
          this.secStack.push(last)
          currMin = last
        } else {
            this.firstStack.pop()
            this.secStack.push(last)
        }
    }
    
    while(this.secStack.length !== 0) {
        let element = this.secStack.pop()
        this.firstStack.push(element)
    }
    return currMin
    }
}

const stack = new MinStack();
stack.push([-2]);
stack.push([0]);
stack.push([-3]);
console.log(stack.getMin())
stack.pop()
stack.top()
// stack.getMin()
console.log(stack.getMin())

// console.log(MinStack.getMin())// Your MinStack object will be instantiated and called as such:






// obj.pop();
// var param_3 = obj.top();
// var param_4 = obj.getMin();
