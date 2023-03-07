const commonBinarySearch = (array, target) => {
    let start = 0;
    let end = array.length - 1;
    let middle;

    while (start <= end) {
        middle = start + Math.floor((end - start) / 2)
        if (array[middle] === target) {
            return middle
        } else if (array[middle] > target) {
            end = middle - 1
        } else {
            start = middle + 1
        }
    }
    return -1
}

const mirrorBinarySearch = (array) => {
    if (array.length === 0) {
        return "Not found"
    }
    let start = 0;
    let end = array.length - 1;
    let middle;

    while (start < end) {
        middle = start + Math.floor((end - start) / 2)
        if (array[middle] > array[middle + 1]) {
            end = middle
        } else {
            start = middle + 1
        }
    }
    return array[end]
}

const rotatedBinarySearchMax = (array) => {
    let start = 0;
    let end = array.length - 1;
    let middle;

    while (start < end) {
        middle = start + Math.floor((end - start) / 2)
        if (array[middle] > array[start]) {
            start = middle + 1;
        } else {
            end = middle
        }
    }
    return array[end]
}

const rotatedBinarySearchMin = (array) => {
    let start = 0;
    let end = array.length - 1;
    let middle;

    while (start < end) {
        middle = start + Math.floor((end - start) / 2)
        if (array[middle] > array[end]) {
            start = middle + 1
        } else {
            end = middle
        }
    }
    return array[start]
}

module.exports = {
    commonBinarySearch,
    mirrorBinarySearch,
    rotatedBinarySearchMax,
    rotatedBinarySearchMin
}