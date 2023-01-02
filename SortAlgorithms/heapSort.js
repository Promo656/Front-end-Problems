const buildMaxHeap = (arr) => {
    let lastParentIdWithChildren = Math.floor(arr.length / 2 - 1);
    while (lastParentIdWithChildren >= 0) {
        heapify(arr, lastParentIdWithChildren, arr.length);
        lastParentIdWithChildren--;
    }
}

const heapify = (arr, lastParentIdWithChildren, len) => {
    let largest;
    let leftIdx;
    let rightIdx;

    while (lastParentIdWithChildren < len) {
        largest = lastParentIdWithChildren;
        leftIdx = 2 * lastParentIdWithChildren + 1;
        rightIdx = leftIdx + 1;

        if (leftIdx < len && arr[leftIdx] > arr[largest]) {
            largest = leftIdx;
        }

        if (rightIdx < len && arr[rightIdx] > arr[largest]) {
            largest = rightIdx;
        }

        if (largest === lastParentIdWithChildren) {
            return;
        }

        [arr[lastParentIdWithChildren], arr[largest]] = [arr[largest], arr[lastParentIdWithChildren]];

        lastParentIdWithChildren = largest;
    }
}

const heapSort = (arr) => {
    debugger
    buildMaxHeap(arr);

    let lastIdx = arr.length - 1;

    while (lastIdx > 0) {
        [arr[0], arr[lastIdx]] = [arr[lastIdx], arr[0]];

        heapify(arr, 0, lastIdx);
        lastIdx--;
    }

    return arr;
}
