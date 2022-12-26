const insertionSort = (arr) => {
    let len = arr.length;
    debugger
    for (let i = 1; i < len; i++) {
        let currentValue = arr[i];
        let j;

        for (j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = currentValue;
    }
    return arr;
}

console.log(insertionSort([2, 1, 4, 3, 6, 5]))