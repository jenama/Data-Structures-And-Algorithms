class Queue {
    constructor() {
        this.queue = []
    }

    enqueue(x) {
        this.queue.push(x)  
    }

    dequeue() {
        return this.queue.shift()
    }

    front() {
       return this.queue[0] 
    }

    isEmpty() {
        if (this.queue.length === 0) {
            return true
        } else {
            return false
        }
    }

    size() {
        return this.queue.length
    }
}

module.exports = Queue


