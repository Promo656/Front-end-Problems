const bubbleSort = (arr) => {
    let len = arr.length;
    let checked;
    do {
        checked = false;
        for (let i = 0; i < len; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
                checked = true
            }
        }
    } while (checked)
    return arr
}

console.log(bubbleSort([2, 1, 4, 3, 6, 5]))
