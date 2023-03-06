const commonBinarySearch = (array, target) => {
    const length = array.length
    let start = 0;
    let end = length - 1
    let middle;
    let guess;
    while (start <= end) {
        middle = start + Math.floor((end - start) / 2)
        guess = array[middle]
        if (target === guess) {
            return middle
        } else if (guess > target) {
            end = middle - 1
        } else {
            start = middle + 1
        }
    }
    return -1;
}

const mirrorBinarySearch = (array) => {
    const length = array.length;
    if (length === 0) {
        return "Not found"
    }
    let start = 0;
    let end = length - 1
    let middle

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

module.exports = {
    commonBinarySearch,
    mirrorBinarySearch
}