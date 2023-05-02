
const doublyLinkedList = () => {
    let head = null

    const addToStart = (data) => {
        const newNode = { data, next: null, prev: null };

        newNode.next = head;
        newNode.prev = null;

        if (head !== null) {
            head.prev = newNode
        }
        head = newNode
    }

    const insertAfterNode = (prevNode, data) => {
        const newNode = { data, next: null, prev: null };

        if (prevNode.next != null) {
            prevNode.next.prev = newNode;
        }
        newNode.next = prevNode.next;
        newNode.prev = prevNode;
        prevNode.next = newNode;
    }

    const insertBeforeNode = (nextNode, data) => {
        if (nextNode == null) {
            return;
        }

        const newNode = { data, next: null, prev: null };

        newNode.prev = nextNode.prev;
        nextNode.prev = newNode;
        newNode.next = nextNode;

        if (newNode.prev != null) {
            newNode.prev.next = newNode;
        } else {
            head = newNode;
        }
    }

    const addToEnd = (data) => {
        const newNode = { data, next: null, prev: null };

        newNode.next = null;
        if (head == null) {
            newNode.prev = null;
            head = newNode;
            return;
        }

        let last = head;
        while (last.next) {
            last = last.next;
        }

        last.next = newNode;
        newNode.prev = last
    }

    const deleteGivenNode = (nodeToDelete) => {
        if (head == null || nodeToDelete == null) {
            return null;
        }

        if (head == nodeToDelete) {
            head = nodeToDelete.next;
        }

        if (nodeToDelete.next != null) {
            nodeToDelete.next.prev = nodeToDelete.prev;
        }

        if (nodeToDelete.prev != null) {
            nodeToDelete.prev.next = nodeToDelete.next;
        }

        nodeToDelete = null;
    }

    addToStart(2)
    addToStart(1)
    insertAfterNode(head.next, 3)
    addToEnd(5)
    insertBeforeNode(head.next.next.next, 4)
    deleteGivenNode(head)

    return head
}

console.log(doublyLinkedList())




