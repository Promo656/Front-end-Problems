class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.length = 0;
    }

    isEmpty() {
        return !this.length;
    }

    size() {
        return this.length;
    }

    clear() {
        this.top = null;
        this.length = 0;
    }

    push(element) {
        const newNode = new Node(element);
        newNode.next = this.top;
        this.top = newNode;
        this.length++;
    }

    pop() {
        if (this.isEmpty()) {
            return null
        }
        const poppedNode = this.top;
        this.top = this.top.next
        this.length--;
        return poppedNode.data;
    }

    peek() {
        return this.isEmpty() ? null : this.top.data;
    }

    iterate(callback) {
        let currentNode = this.top;
        while (currentNode) {
            callback(currentNode)
            currentNode = currentNode.next;
        }
    }
}