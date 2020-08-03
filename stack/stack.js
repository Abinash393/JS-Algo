class Stack {
    constructor() {
        this.stack = []
        this.length = 0
    }

    // add item to top of stack
    push(v) {
        this.stack[this.length] = v
        this.length++
        return this.length
    }

    pop() {
        if (this.count === 0) return undefined
        this.length--
        const removedItem = this.stack[this.length]
        this.stack = [...this.stack.splice(this.length, 1)]
        return removedItem
    }

    peek() {
        return this.stack[this.length - 1]
    }
}

// Example
let bookShelf = new Stack()

bookShelf.push("The Art of War")
bookShelf.push("Jungle Book")

bookShelf.peek()

bookShelf.pop()

console.log(bookShelf)