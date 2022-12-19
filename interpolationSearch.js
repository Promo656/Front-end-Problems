const solution1 = (arr, x) => {
    let start = 0;
    let end = arr.length - 1;
    let pos;
    while (start <= end && x >= arr[start] && x <= arr[end]) {
        pos = start + (((x - arr[start]) * (end - start)) / (arr[end] - arr[start]));
        if (arr[pos] > x) {
            end = pos - 1;
        } else if (arr[pos] < x) {
            start = pos + 1;
        } else {
            return pos;
        }
    }
}
console.time("solution1")
console.log(solution1([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30], 28))
console.time("solution2")