class Queue {
    constructor() {
        this.queue = []
    }

    enqueue(e) {
        this.queue = [e, ...this.queue]
        return this.queue.length
    }

    dequeue() {
        const deletedItem = this.queue[0]
        this.queue = [...this.queue.splice(0, 1)]
        return deletedItem
    }
}

// Example
const serviceCenterLine = new Queue()

serviceCenterLine.enqueue("Anas Ansari")
serviceCenterLine.enqueue("Abinash Panda")

serviceCenterLine.dequeue()

console.log(serviceCenterLine)