class Stack {
    constructor() {
        this.elements = []
    }

    push(s) {
       
        this.elements.push(s)
    }

    pop() {
        return this.elements.pop()
    }

    peek() {
        let top = this.elements.length -1
        return this.elements[top]
    }

    isEmpty() {
        if (this.elements.length === 0) {
            return true
        } else {
            return false
        }
    }

    
}

module.exports = Stack;









