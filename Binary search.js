const solution1 = (arr, n, x) => {
    const findIdx = (from) => {
        let result = -1;
        let start = 0;
        let end = n - 1;
        let middle;
        let guess;
        while (start <= end) {
            middle = start + Math.floor((end - start) / 2);
            guess = arr[middle];
            if (guess > x) {
                end = middle - 1;
            } else if (guess < x) {
                start = middle + 1;
            } else {
                result = middle;
                from === "first"
                    ? end = middle - 1
                    : start = middle + 1;
            }
        }
        return result;
    }

    return [findIdx("first"), findIdx("last")];
}

// console.time("solution1");
// console.log(solution1([1, 3, 5, 5, 5, 5, 67, 123, 125], 9, 5))
// console.timeEnd("solution1");

//--------------------------------------------------------------------------------------------//

const solution2 = (arr, n, k) => {
    let start = 0;
    let end = n - 1;
    let middle;
    let guess;

    while (start <= end) {
        middle = start + Math.floor((end - start) / 2);
        guess = arr[middle];
        if (guess > k) {
            end = middle - 1;
        } else if (guess < k) {
            start = middle + 1;
        } else {
            return 1;
        }
    }
    return -1;
}

// console.time("solution2");
// console.log(solution2([1, 3, 5, 5, 5, 5, 67, 123, 125], 9, 5));
// console.timeEnd("solution2");

//--------------------------------------------------------------------------------------------//

const solution3 = (arr) => {
    let start = 0;
    let end = arr.length - 1;
    let mid;
    while (start < end) {
        mid = start + Math.floor((end - start) / 2)
        if (arr[mid] > arr[end])
            start = mid + 1
        else
            end = mid
    }
    return arr[end]
}

console.time("solution3");
console.log(solution3([4, 6, 8, 9, 10, 12, 13, 14, 15, 27, 18, 23, 24, 26, 27, 29, 34, 35, 37, 38, 2,]));
console.timeEnd("solution3");