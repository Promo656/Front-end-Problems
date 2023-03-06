const binarySearch = require("./index");

test("Binary search algorithm should find the target index", () => {
    const sortedArray = [-10, -4, 0, 3, 6, 8, 9, 23, 45, 78]
    const sortedArrayWithSingleElement = [4]
    const emptyArray = []

    const found = binarySearch(sortedArray, 23)
    const notFoundInFilledArray = binarySearch(sortedArray, 100)
    const foundSingleElement = binarySearch(sortedArrayWithSingleElement, 4)
    const notFoundInEmptyArray = binarySearch(emptyArray, 3)

    expect(found).toBe(7)
    expect(notFoundInFilledArray).toBe(-1)
    expect(foundSingleElement).toBe(0)
    expect(notFoundInEmptyArray).toBe(-1)
})