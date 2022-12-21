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
// console.log(solution1([1, 3, 5, 5, 5, 5, 67, 123, 125], 9, 5))

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
// console.log(solution2([1, 3, 5, 5, 5, 5, 67, 123, 125], 9, 5));

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
// console.log(solution3([4, 6, 8, 9, 10, 12, 13, 14, 15, 27, 18, 23, 24, 26, 27, 29, 34, 35, 37, 38, 2,]));

//--------------------------------------------------------------------------------------------//

const solution4 = (a1, a2, n, m) => {
    const sortedArr = a1.sort((a, b) => a - b);
    let result = [];
    let start
    let end
    let mid;
    for (let i = 0; i < m; i++) {
        start = 0;
        end = sortedArr.length - 1
        while (end - start >= 0) {
            mid = start + Math.floor((end - start) / 2);

            if (sortedArr[mid] === a2[i]) {
                result.push(a2[i]);
                sortedArr.splice(mid, 1)
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
// console.log(solution4([11, 1, 13, 21, 3, 7], [11, 3, 7, 1], 6, 4));

//--------------------------------------------------------------------------------------------//

const solution5 = (a) => {
    let start = 0;
    let end = a.length - 1;
    let middle;
    while (start < end) {
        middle = start + Math.floor((end - start) / 2);

        if (a[middle] > a[middle + 1]) {
            end = middle;
        } else {
            start = middle + 1;
        }
    }
    return a[end];
}
// console.log(solution5([10, 23, 32, 46, 54, 61, 74, 62, 59, 48, 36, 25, 13]));