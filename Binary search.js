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

// console.time("solution3");
// console.log(solution3([4, 6, 8, 9, 10, 12, 13, 14, 15, 27, 18, 23, 24, 26, 27, 29, 34, 35, 37, 38, 2,]));
// console.timeEnd("solution3");


const Solution4 = (a1, a2, n, m) => {
    const sortedArr = a1.sort((a, b) => a - b);
    let result = [];
    let start = 0;
    let end = sortedArr.length - 1;
    let mid;
    for (let i = 0; i < m; i++) {
        while (end - start >= 0) {
            mid = start + Math.floor((end - start) / 2);

            if (sortedArr[mid] === a2[i]) {
                result.push(a2[i]);
                sortedArr.splice(mid, 1)
                start = 0;
                end = sortedArr.length - 1
                break;
            } else if (sortedArr[mid] > a2[i]) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }
    }
    return result.length === m
        ? "Yes"
        : "No";
}
console.time("solution4");
console.log(Solution4([11, 1, 13, 21, 3, 7], [11, 3, 7, 1], 6, 4));
console.timeEnd("solution4");