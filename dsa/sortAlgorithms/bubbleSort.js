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
// console.log(bubbleSort([2, 1, 4, 3, 6, 5]))

//--------------------------------------------------------------------------------------------//

function solution1(s) {
    const arr = s.split(" ");
    let check;
    let len = arr.length;
    do {
        check = false;
        for (let i = 0; i < len; i++) {
            if (arr[i].slice(-1) > arr[i + 1]?.slice(-1)) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                check = true;
            }
        }
    } while (check)

    return arr.map(el => el.slice(0, -1)).join(" ")
}

// console.log(solution1("is2 sentence4 This1 a3"))
