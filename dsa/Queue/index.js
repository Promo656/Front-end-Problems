class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    enqueue(data) {
        const newNode = new Node(data);
        if (this.tail === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
    }

    dequeue() {
        if (this.head === null) {
            return null;
        }
        const data = this.head.data;
        this.head = this.head.next;
        if (this.head === null) {
            this.tail = null;
        }
        this.size--;
        return data;
    }

    peek() {
        if (this.head === null) {
            return null;
        }
        return this.head.data;
    }

    size() {
        return this.size;
    }

    isEmpty() {
        return this.size === 0;
    }
}
