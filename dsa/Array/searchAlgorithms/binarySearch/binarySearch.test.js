const {commonBinarySearch, mirrorBinarySearch, rotatedBinarySearchMax, rotatedBinarySearchMin} = require("./index");

describe("Binary search algorithm", () => {
    it("should find the target index in common sorted array", () => {
        const array = [-10, -4, 0, 3, 6, 8, 9, 23, 45, 78]
        const arrayWithSingleElement = [4]

        const found = commonBinarySearch(array, 23)
        const notFoundInFilledArray = commonBinarySearch(array, 100)
        const foundSingleElement = commonBinarySearch(arrayWithSingleElement, 4)

        expect(found).toBe(7)
        expect(notFoundInFilledArray).toBe(-1)
        expect(foundSingleElement).toBe(0)
    });

    it("should find the max number in mirror array", () => {
        const array = [1, 2, 5, 7, 9, 13, 16, 27, 46, 78, 90, 43];
        const arrayWithSingleElement = [4]

        const found = mirrorBinarySearch(array)
        const foundSingleElement = mirrorBinarySearch(arrayWithSingleElement)

        expect(found).toBe(90)
        expect(foundSingleElement).toBe(4)
    })

    it("should find the max number in rotated array", () => {
        const array = [9, 13, 16, 27, 46, 78, 90, 912, 1, 2, 5, 7, 8];
        const arrayWithSingleElement = [27]

        const found = rotatedBinarySearchMax(array)
        const foundSingleElement = rotatedBinarySearchMax(arrayWithSingleElement)

        expect(found).toBe(912)
        expect(foundSingleElement).toBe(27)

    })

    it("should find the min number in rotated array", () => {
        const array = [9, 13, 16, 27, 46, 78, 90, 912, 5, 7, 8];
        const arrayWithSingleElement = [27]

        const found = rotatedBinarySearchMin(array)
        const foundSingleElement = rotatedBinarySearchMin(arrayWithSingleElement)

        expect(found).toBe(5)
        expect(foundSingleElement).toBe(27)

    })
})