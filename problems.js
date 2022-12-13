const solution1 = (arr, n, x) => {
    const firstIndex = () => {
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
                end = middle - 1;
            }
        }
        return result;
    }
    const lastIndex = () => {
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
                start = middle + 1;
            }
        }
        return result;
    }
    return [firstIndex(), lastIndex()];
}

console.time("solution1")
console.log(solution1([1, 3, 5, 5, 5, 5, 67, 123, 125], 9, 5))
console.timeEnd("solution1")