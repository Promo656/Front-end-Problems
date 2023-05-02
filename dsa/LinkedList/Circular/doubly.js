class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class CircularDoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    insertAtBeginning(data) {
        const newNode = new Node(data);

        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
            newNode.next = newNode;
            newNode.prev = newNode;
        } else {
            newNode.next = this.head;
            newNode.prev = this.tail;
            this.head.prev = newNode;
            this.tail.next = newNode;
            this.head = newNode;
        }
        this.length++;
    }

    insertAtEnd(data) {
        if (this.head === null) {
            this.insertAtBeginning(data);
        } else {
            const newNode = new Node(data);
            newNode.next = this.head;
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.head.prev = newNode;
            this.tail = newNode;
            this.length++;
        }
    }

    insertAfterNode(data, targetNode) {
        if (targetNode === null) {
            return;
        }

        const newNode = new Node(data);
        newNode.next = targetNode.next;
        newNode.prev = targetNode;
        targetNode.next.prev = newNode;
        targetNode.next = newNode;

        if (targetNode === this.tail) {
            this.tail = newNode;
        }

        this.length++;
    }

    insertBeforeNode(data, targetNode) {
        if (targetNode === null) {
            return;
        }

        const newNode = new Node(data);
        newNode.prev = targetNode.prev;
        newNode.next = targetNode;
        targetNode.prev.next = newNode;
        targetNode.prev = newNode;

        if (targetNode === this.head) {
            this.head = newNode;
        }

        this.length++;
    }

    deleteFirstNode() {
        if (this.head === null) {
            return;
        }

        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = this.tail;
            this.tail.next = this.head;
        }
        this.length--;
    }

    deleteLastNode() {
        if (this.tail === null) {
            return;
        }

        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = this.head;
            this.head.prev = this.tail;
        }
        this.length--;
    }

    deleteSpecificNode(targetNode) {
        if (targetNode === null || this.head === null) {
            return;
        }

        if (targetNode === this.head) {
            this.deleteFirstNode();
            return;
        }

        if (targetNode === this.tail) {
            this.deleteLastNode();
            return;
        }

        targetNode.prev.next = targetNode.next;
        targetNode.next.prev = targetNode.prev;
        this.length--;
    }

    deleteNodeWithValue(value) {
        if (this.head === null) {
            return;
        }

        let currentNode = this.head;
        do {
            if (currentNode.data === value) {
                this.deleteSpecificNode(currentNode);
                break;
            }
            currentNode = currentNode.next;
        } while (currentNode !== this.head);
    }

    traverseForward(callback) {
        if (this.head === null) {
            return;
        }

        let currentNode = this.head;
        do {
            callback(currentNode);
            currentNode = currentNode.next;
        } while (currentNode !== this.head);
    }

    traverseReverse(callback) {
        if (this.tail === null) {
            return;
        }

        let currentNode = this.tail;
        do {
            callback(currentNode);
            currentNode = currentNode.prev;
        } while (currentNode !== this.tail);
    }

    splitAtPosition(position) {
        if (position < 1 || position >= this.length || this.head === null) {
            return null;
        }

        let currentNode = this.head;
        for (let i = 1; i < position; i++) {
            currentNode = currentNode.next;
        }

        const firstList = new CircularDoublyLinkedList();
        const secondList = new CircularDoublyLinkedList();

        firstList.head = this.head;
        firstList.tail = currentNode;
        firstList.length = position;
        firstList.tail.next = firstList.head;
        firstList.head.prev = firstList.tail;

        secondList.head = currentNode.next;
        secondList.tail = this.tail;
        secondList.length = this.length - position;
        secondList.tail.next = secondList.head;
        secondList.head.prev = secondList.tail;

        return [firstList, secondList];
    }

    static mergeLists(list1, list2) {
        if (list1.head === null && list2.head === null) {
            return null;
        }

        if (list1.head === null) {
            return list2;
        }

        if (list2.head === null) {
            return list1;
        }

        const mergedList = new CircularDoublyLinkedList();

        mergedList.head = list1.head;
        mergedList.tail = list2.tail;
        mergedList.length = list1.length + list2.length;

        list1.tail.next = list2.head;
        list2.head.prev = list1.tail;

        list2.tail.next = list1.head;
        list1.head.prev = list2.tail;

        return mergedList;
    }

    sort(compareFn = (a, b) => a - b) {
        if (this.head === null || this.head === this.tail) {
            return;
        }

        let swapped;
        do {
            swapped = false;
            let currentNode = this.head;
            while (currentNode.next !== this.head) {
                if (compareFn(currentNode.data, currentNode.next.data) > 0) {
                    const tempData = currentNode.data;
                    currentNode.data = currentNode.next.data;
                    currentNode.next.data = tempData;
                    swapped = true;
                }
                currentNode = currentNode.next;
            }
        } while (swapped);
    }

    reverse() {
        if (this.head === null || this.head === this.tail) {
            return;
        }

        let currentNode = this.head;
        do {
            const temp = currentNode.next;
            currentNode.next = currentNode.prev;
            currentNode.prev = temp;
            currentNode = currentNode.prev;
        } while (currentNode !== this.head);

        const temp = this.head;
        this.head = this.tail;
        this.tail = temp;
    }

    hasLoop(list) {
        let slowPointer = list.head;
        let fastPointer = list.head;

        while (fastPointer !== null && fastPointer.next !== null) {
            slowPointer = slowPointer.next;
            fastPointer = fastPointer.next.next;

            if (slowPointer === fastPointer) {
                return true;
            }
        }

        return false;
    }
}
