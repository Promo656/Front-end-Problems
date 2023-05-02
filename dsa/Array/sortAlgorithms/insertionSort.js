const insertionSort = (arr) => {
    let len = arr.length;
    let currentValue
    for (let i = 1; i < len; i++) {
        let j;
        currentValue = arr[i];

        for (j = i - 1; j >= 0 && currentValue < arr[j]; j--) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = currentValue;
    }
    return arr;
}
// console.log(insertionSort([2,1,4,3,5,4,8,6]))

//--------------------------------------------------------------------------------------------//

const solution1 = (arr) => {
    let len = arr.length;
    let currentValue;
    let count = 0;
    for (let i = 1; i < len; i++) {
        let j;
        currentValue = arr[i];

        for (j = i - 1; j >= 0 && currentValue < arr[j]; j--) {
            arr[j + 1] = arr[j]
            count += 1;
        }
        arr[j + 1] = currentValue;
    }
    return count;
}
// console.log(solution1([2, 1, 4, 3, 6, 5]))

//--------------------------------------------------------------------------------------------//

const solution2 = (nums) => {
    const squareArray = [];

    nums.forEach(el => squareArray.push(el ** 2));

    const sort = (arr) => {
        let len = arr.length;
        let currentValue, j;

        for (let i = 1; i < len; i++) {
            currentValue = arr[i];

            for (j = i - 1; j >= 0 && currentValue < arr[j]; j--) {
                arr[j + 1] = arr[j];
            }
            arr[j + 1] = currentValue;
        }
        return arr;
    }

    return sort(squareArray);
};
// console.log(solution2([-4,-1,0,3,10]))

//--------------------------------------------------------------------------------------------//