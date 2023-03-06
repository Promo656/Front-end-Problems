const {commonBinarySearch, mirrorBinarySearch} = require("./index");

describe("Binary search algorithm", () => {
    it("should find the target index in common sorted array", () => {
        const array = [-10, -4, 0, 3, 6, 8, 9, 23, 45, 78]
        const arrayWithSingleElement = [4]
        const emptyArray = []

        const found = commonBinarySearch(array, 23)
        const notFoundInFilledArray = commonBinarySearch(array, 100)
        const foundSingleElement = commonBinarySearch(arrayWithSingleElement, 4)
        const notFoundInEmptyArray = commonBinarySearch(emptyArray, 3)

        expect(found).toBe(7)
        expect(notFoundInFilledArray).toBe(-1)
        expect(foundSingleElement).toBe(0)
        expect(notFoundInEmptyArray).toBe(-1)
    });

    it("should find the max number in common array in mirror array", () => {
        const array = [1, 2, 5, 7, 9, 13, 16, 27, 46, 78, 90, 43];
        const arrayWithSingleElement = [4]
        const emptyArray = []

        const found = mirrorBinarySearch(array)
        const foundSingleElement = mirrorBinarySearch(arrayWithSingleElement)
        const notFoundInEmptyArray = mirrorBinarySearch(emptyArray)

        expect(found).toBe(90)
        expect(foundSingleElement).toBe(4)
        expect(notFoundInEmptyArray).toMatch(/not found/i)

    })
})