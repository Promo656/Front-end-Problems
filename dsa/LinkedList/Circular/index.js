class Node {
    constructor(data) {
        this.data = data;
        this.next = null
    }
}

class CircularLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    insertAtBeginning(data) {
        const newNode = new Node(data)

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            newNode.next = newNode;
        } else {
            newNode.next = this.head;
            this.tail.next = newNode;
            this.head = newNode;
        }
        this.length++;
    }

    insertAtEnd(data) {
        const newNode = new Node(data);

        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
            newNode.next = newNode;
        } else {
            newNode.next = this.head;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }

    insertAtPosition(data, position) {
        if (position <= 0) {
            this.insertAtBeginning(data);
            return;
        }

        const newNode = new Node(data);
        let currentPosition = 0;
        let currentNode = this.head;

        while (currentPosition < position - 1 && currentNode.next !== this.head) {
            currentNode = currentNode.next;
            currentPosition++;
        }

        if (currentPosition === position - 1) {
            newNode.next = currentNode.next;
            currentNode.next = newNode;
            if (currentNode === this.tail) {
                this.tail = newNode;
            }
        } else {
            this.insertAtEnd(data);
        }
        this.length++;
    }

    insertBeforeNode(data, targetData) {
        if (this.head === null) {
            console.error('The list is empty.');
            return;
        }

        if (this.head.data === targetData) {
            this.insertAtBeginning(data);
            return;
        }

        let currentNode = this.head;

        do {
            if (currentNode.next.data === targetData) {
                const newNode = new Node(data);
                newNode.next = currentNode.next;
                currentNode.next = newNode;
                this.length++;
                return;
            }
            currentNode = currentNode.next;
        } while (currentNode !== this.tail);

        console.error(`Node with data '${targetData}' not found.`);
    }

    insertAfterNode(data, targetData) {
        let currentNode = this.head;

        do {
            if (currentNode.data === targetData) {
                const newNode = new Node(data);
                newNode.next = currentNode.next;
                currentNode.next = newNode;
                if (currentNode === this.tail) {
                    this.tail = newNode;
                }
                this.length++;
                return;
            }
            currentNode = currentNode.next;
        } while (currentNode !== this.head);

        console.error(`Node with data '${targetData}' not found.`);
    }

    deleteFromBeginning() {
        if (this.head === null) {
            console.error('The list is empty.');
            return;
        }

        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.tail.next = this.head;
        }
        this.length--;
    }

    deleteFromEnd() {
        if (this.head === null) {
            console.error('The list is empty.');
            return;
        }

        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            let currentNode = this.head;
            while (currentNode.next !== this.tail) {
                currentNode = currentNode.next;
            }
            currentNode.next = this.head;
            this.tail = currentNode;
        }
        this.length--;
    }

    deleteAtPosition(position) {
        if (this.head === null) {
            console.error('The list is empty.');
            return;
        }

        if (position <= 0) {
            this.deleteFromBeginning();
            return;
        }

        let currentPosition = 0;
        let currentNode = this.head;
        let previousNode = null;

        while (currentPosition < position && currentNode.next !== this.head) {
            previousNode = currentNode;
            currentNode = currentNode.next;
            currentPosition++;
        }

        if (currentPosition === position) {
            previousNode.next = currentNode.next;
            if (currentNode === this.tail) {
                this.tail = previousNode;
            }
            this.length--;
        } else {
            console.error(`Position '${position}' is out of range.`);
        }
    }

    deleteByValue(value) {
        if (this.head === null) {
            console.error('The list is empty.');
            return;
        }

        let currentNode = this.head;
        let previousNode = null;

        do {
            if (currentNode.data === value) {
                if (previousNode === null) {
                    this.deleteFromBeginning();
                } else {
                    previousNode.next = currentNode.next;
                    if (currentNode === this.tail) {
                        this.tail = previousNode;
                    }
                    this.length--;
                }
                return;
            }
            previousNode = currentNode;
            currentNode = currentNode.next;
        } while (currentNode !== this.head);

        console.error(`Element with value '${value}' not found.`);
    }

    traverse(callback) {
        if (this.head === null) {
            console.error('The list is empty.');
            return;
        }

        let currentNode = this.head;

        do {
            callback(currentNode);
            currentNode = currentNode.next;
        } while (currentNode !== this.head);
    }

    split(position) {
        if (this.head === null || position <= 0 || position >= this.length) {
            console.error('Invalid position for splitting.');
            return;
        }

        const firstList = new CircularLinkedList();
        const secondList = new CircularLinkedList();

        let currentNode = this.head;
        let currentPosition = 0;
        let previousNode = null;

        while (currentPosition < position) {
            firstList.insertAtEnd(currentNode.data);
            previousNode = currentNode;
            currentNode = currentNode.next;
            currentPosition++;
        }

        previousNode.next = firstList.head;
        firstList.tail = previousNode;

        while (currentNode !== this.head) {
            secondList.insertAtEnd(currentNode.data);
            currentNode = currentNode.next;
        }

        return [firstList, secondList];
    }

    static merge(list1, list2) {
        if (list1.head === null) {
            return list2;
        }

        if (list2.head === null) {
            return list1;
        }

        const mergedList = new CircularLinkedList();

        let currentNode = list1.head;
        do {
            mergedList.insertAtEnd(currentNode.data);
            currentNode = currentNode.next;
        } while (currentNode !== list1.head);

        currentNode = list2.head;
        do {
            mergedList.insertAtEnd(currentNode.data);
            currentNode = currentNode.next;
        } while (currentNode !== list2.head);

        return mergedList;
    }

    sort(compareFn = (a, b) => a - b) {
        if (this.head === null || this.head === this.tail) {
            return;
        }

        let sorted = false;
        let currentNode;
        let nextNode;
        let tempData;

        while (!sorted) {
            sorted = true;
            currentNode = this.head;
            nextNode = currentNode.next;

            do {
                if (compareFn(currentNode.data, nextNode.data) > 0) {
                    tempData = currentNode.data;
                    currentNode.data = nextNode.data;
                    nextNode.data = tempData;
                    sorted = false;
                }

                currentNode = currentNode.next;
                nextNode = nextNode.next;
            } while (nextNode !== this.head);
        }
    }

    reverse() {
        if (this.head === null || this.head === this.tail) {
            return;
        }

        let prevNode = this.tail;
        let currentNode = this.head;
        let nextNode;

        do {
            nextNode = currentNode.next;
            currentNode.next = prevNode;
            prevNode = currentNode;
            currentNode = nextNode;
        } while (currentNode !== this.head);

        this.tail = this.head;
        this.head = prevNode;
    }

    detectLoop() {
        if (this.head === null || this.head === this.tail) {
            return false;
        }

        let slowPointer = this.head;
        let fastPointer = this.head;

        while (fastPointer && fastPointer.next) {
            slowPointer = slowPointer.next;
            fastPointer = fastPointer.next.next;

            if (slowPointer === fastPointer) {
                return true;
            }
        }

        return false;
    }

}