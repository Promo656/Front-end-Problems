const selectionSort = (arr) => {
    const len = arr.length;
    let minIdx;
    for (let i = 0; i < len - 1; i++) {
        minIdx = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIdx]) {
                minIdx = j;
            }
        }
        [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]]
    }
    return arr;
}
// console.log(selectionSort([2, 1, 4, 3, 6, 5]))

//--------------------------------------------------------------------------------------------//

function solution1(seats, students) {
    const sortArr = (arr) => {
        let len = arr.length;
        let minIdx;

        for (let i = 0; i < len - 1; i++) {
            minIdx = i;

            for (let j = i + 1; j < len; j++) {
                if (arr[j] < arr[minIdx]) {
                    minIdx = j;
                }
            }
            [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
        }
        return arr
    }

    const sortedSeats = sortArr(seats);
    const sortedStudents = sortArr(students);

    return sortedSeats.reduce((t, c, i) => {
        t += Math.abs(c - sortedStudents[i]);
        return t;
    }, 0)
}

console.log(solution1([3, 1, 5], [2, 7, 4]))