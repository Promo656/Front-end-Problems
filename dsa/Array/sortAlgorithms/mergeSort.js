const merge = (left, right) => {
    let sortedArr = [];
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            sortedArr.push(left.shift())
        } else {
            sortedArr.push(right.shift())
        }
    }
    return [...sortedArr, ...left, ...right]
}

const mergeSort = (arr) => {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);

    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return merge(left, right);
}
// console.log(mergeSort([2,1,4,3]))

//--------------------------------------------------------------------------------------------//

const solution1 = (nums1, m, nums2, n) => {
    const merge = (left, right) => {
        let sortedArr = [];
        while (left.length && right.length) {
            if (left[0] < right[0]) {
                sortedArr.push(left.shift())
            } else {
                sortedArr.push(right.shift())
            }
        }
        return [...sortedArr, ...left, ...right]
    }

    return merge(nums1.slice(0, m), nums2.slice(0, n))
}
const nums1 = [1, 2, 3, 0, 0, 0], m = 3, nums2 = [2, 5, 6], n = 3
console.log(merge(nums1.slice(0, m), nums2.slice(0, n)));