
// // const list = [null];

// // function createList(node, data) {
// //     const newNode = { data, next: node[0] }
// //     node[0] = newNode;
// // }

// // for (let i = 5; i > 0; i--) {
// //     createList(list, i);
// // }

// // function getListLength(list) {
// //     let length = 0;
// //     let temp = list[0];

// //     while (temp) {
// //         length += 1;
// //         temp = temp.next;
// //     }
// //     return length

// // }

// // const listLength = getListLength(list);
// // const middle = Math.floor(listLength / 2)
// // let result = list[0];


// // for (let i = 0; i < middle; i++) {
// //     result = result.next
// // }
// // console.log(list);



// // A complete working javascript program
// // to demonstrate all insertion methods
// // on linked list

// //___________________________//

// let head = null; // head of list


// /* Inserts a new Node at front of the list. */
// function addToStart(new_data) {
//     let new_node = { data: new_data, next: null };
//     new_node.next = head;
//     head = new_node;
// }

// function insertAfter(prev_node, new_data) {
//     if (prev_node == null) {
//         return;
//     }

//     var new_node = { data: new_data, next: null };

//     new_node.next = prev_node.next;

//     prev_node.next = new_node;
// }

// function addToEnd(new_data) {
//     if (head == null) {
//         head = { data: new_data, next: null };
//         return;
//     }

//     const new_node = { data: new_data, next: null };

//     new_node.next = null;

//     let temp = head;
//     while (temp.next != null)
//         temp = temp.next;

//     temp.next = new_node;
// }

// /* Start with the empty list */
// debugger
// // Insert 6. So linked list becomes 6->NUllist
// addToEnd(6);

// // Insert 7 at the beginning. So linked list becomes
// // 7->6->NUllist
// addToStart(7);

// // Insert 1 at the beginning. So linked list becomes
// // 1->7->6->NUllist
// addToStart(1);

// // Insert 4 at the end. So linked list becomes
// // 1->7->6->4->NUllist
// addToEnd(4);

// // Insert 8, after 7. So linked list becomes
// // 1->7->8->6->4->NUllist
// insertAfter(head.next, 8);

// console.log(head);

const linkedList = () => {
    let head = null;
    const addToStart = (data) => {
        const newNode = { data, next: null }
        newNode.next = head;
        head = newNode;
    }

    const addToEnd = (data) => {
        if (!head) {
            head = { data, next: null }
            return
        }
        const newNode = { data, next: null }
        let temp = head;
        while (temp.next) {
            temp = temp.next;
        }
        temp.next = newNode;
        newNode.next = null;
    }

    const insertAfterNode = (prevNode, data) => {
        if (!head) {
            head = { data, next: null }
            return
        }
        const newNode = { data, next: null };
        newNode.next = prevNode.next;
        prevNode.next = newNode;
    }

    const insertAfterData = (target, data) => {
        const newNode = { data, next: null }
        let temp = head;
        while (temp.data !== target) {
            temp = temp.next;
        }
        newNode.next = temp.next;
        temp.next = newNode;
    }

    const deleteAtFirst = () => {
        head = head.next;
    }

    const deleteAtTheMiddle = (target) => {
        let temp = head;

        while (temp.next.data !== target) {
            temp = temp.next;
        }
        temp.next = temp.next.next;
    }

    const deleteAtLast = () => {
        let temp = head;

        while (temp.next.next !== null) {
            temp = temp.next;
        }
        temp.next = null;
    }

    // addToStart(2);
    // addToStart(1);
    // addToEnd(4);
    // addToEnd(6);
    // insertAfterNode(head.next, 3);
    // insertAfterData(4, 5);
    // deleteAtFirst();
    // deleteAtTheMiddle(4)
    // deleteAtLast();
    // console.log(head)

    addToStart(1);
    addToEnd(2);
    addToEnd(3);
    insertAfterData(3, 6);
    addToEnd(4);
    addToEnd(5);
    addToEnd(6);
    return head;
}

let head = [null];
const createList = (list, data) => {
    const newNode = { data, next: list[0] }
    list[0] = newNode;
}

for (let i = 6; i > 0; i--) {
    createList(head, i)
}

function removeElements(list, val) {
    let temp = list;

    while (temp.next !== null) {
        if (temp.data === val) {
            temp = temp.next
        } else if (temp.next.data === val) {
            temp.next = temp.next.next
        } else {
            temp = temp.next;
        }
    }

    return list;
};

console.log(removeElements(head[0], 6))