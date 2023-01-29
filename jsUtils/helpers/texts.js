const exampleWD = "Example:"

const data = {
    map: {
        description: `Today you have to implement the Array.prototype.map method\n`,
        example: "[1, 2, 3, 4].myMap((i) => i); // [1, 2, 3, 4]\n [1, 2, 3, 4].myMap((i) => i * i); // [1, 4, 9, 16]\n"
    },
    square: {
        description: `Today you have to implement the square method\n`,
        example: "[-2].square(); // [4]\n [1, 2, 3, 4].square(); // [1, 4, 9, 16]"
    },
    get: {
        description: `Today you have to implement the get method\n`,
        example: "get({ a: [{ b: { c: 3 } }] }, 'a.0.b.c'); // 3\n"
    },
    once: {
        description: `Today you have to implement the once method\n`,
        example: "let i = 1;\n" +
            "\n" +
            "function incrementBy(value) {\n" +
            "  i += value;\n" +
            "  return i;\n" +
            "}\n" +
            "\n" +
            "const incrementByOnce = once(incrementBy);\n" +
            "incrementByOnce(2); // i is now 3; The function returns 3.\n" +
            "incrementByOnce(3); // i is still 3; The function returns the result of the first invocation, which is 3.\n" +
            "i = 4;\n" +
            "incrementByOnce(2); // i is still 4 as it is not modified. The function returns the result of the first invocation, which is 3.\n\n"
    },
    isObject: {
        description: `Today you have to implement the isObject method\n`,
        example: "!!!"
    }
}

module.exports = {
    exampleWD,
    data
}