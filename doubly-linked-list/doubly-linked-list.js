class DoublyLinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }

    // if index is not given value will be added to tail 
    insert(v, i = this.size) {
        // validate the input
        if (i > this.size || Number.isNaN(+ i) ) return false

        // if list is empty, insert to the head
        if (i === 0) {
            const node = new Node(v)
            this.head = node
            this.size++
            return this.size
        }

        let current = this.head
        let previous
        // insert to tail
        if (i === this.size) {
            while(current.next != null) {
                previous = current
                current = current.next
            }
            current.next = new Node(v, current)
            this.size++
            return this.size
        }
        
        let count = 0 
        // insert to that index
        while (count < i) {
            current = current.next
            count++
        }
        const node = new Node(v, current, current.next)
        current.next.prev = node
        current.next = node
        this.size++
        return this.size
    }

    // removes element of given index
    remove(i = 0) {

    }

    // returns value of given index
    valueAt(i) {
        let current = this.head
    }

    // returns bool 
    isEmpty() {
        return this.size === 0
    }
}

class Node {
    constructor(v, p =null, n = null) {
        this.prev = p
        this.value = v
        this.next = n
    }
}

// Example
const homesOfLane5 = new DoublyLinkedList()
homesOfLane5.insert("building1")
homesOfLane5.insert("building2")
homesOfLane5.insert("building3, 1")
console.info(homesOfLane5)


