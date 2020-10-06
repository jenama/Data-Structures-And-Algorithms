class Queue {
    constructor() {
        this.queue = []
    }

    enqueue(x) {
        this.queue.push(x)
        console.log(this.queue)
    }

    dequeue() {
        console.log(this.queue)
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

const myQueue = new Queue()

myQueue.enqueue(1)
myQueue.enqueue(2)
myQueue.enqueue(3)
myQueue.enqueue(4)

myQueue.dequeue()

console.log(myQueue.rear())



