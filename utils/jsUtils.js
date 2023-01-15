// Implement Array.prototype.map
Array.prototype.myMap = function (callbackFn, thisArg) {
    if (typeof callbackFn !== "function" || !callbackFn.call || !callbackFn.apply) {
        throw new TypeError(`${callbackFn} is not a function`)
    }

    const len = this.length;
    const array = new Array(len);

    for (let i = 0; i < len; i++) {
        if (Object.hasOwn(this, i)) {
            array[i] = callbackFn.call(thisArg, this[i], i, this);
        }
    }
    return array;
};

// Implement Array.prototype.square
Array.prototype.square = function () {
    const len = this.length;
    const array = new Array(len);

    for (let i = 0; i < len; i++) {
        array[i] = this[i] * this[i];
    }

    return array;
}

// Implement Lodash's Get method
function get(object, path, defaultValue) {
    const pathArray = Array.isArray(path) ? path : path.split('.');
    const length = pathArray.length;
    let lastObject = object;
    let i = 0;

    for (i; lastObject != null && i < length; i++) {
        lastObject = lastObject[String(pathArray[i])]
    }

    const value = i && i === length ? lastObject : undefined;
    return value !== undefined ? lastObject : defaultValue;
}

// Implement Lodash's Once method
function once(func) {
    let instance = null;

    return function (...args) {
        if (!instance) {
            instance = func.apply(this, args);
        }

        return instance;
    };
}

// Implement Type utilities
function isBoolean(value) {
    return typeof value === "boolean"
}

function isNumber(value) {
    return typeof value === "number"
}

function isNull(value) {
    return value === null
}

function isString(value) {
    return typeof value === "string"
}

function isSymbol(value) {
    return typeof value === "symbol"
}

function isUndefined(value) {
    return value === undefined
}

// Implement Unique Array
// 1. Converting to Set then back
function uniqueArray1(array) {
    return Array.from(new Set(array));
}

// 2. Using Set to track existing elements
function uniqueArray2(array) {
    const seen = new Set();

    array.forEach(item => {
        if (!seen.has(item)) {
            seen.add(item)
        }
    })
    return [...seen];
}

// 3. Brute force approach
function uniqueArray3(array) {
    const result = [];

    array.forEach(item => {
        if (!result.includes(item)) {
            result.push(item)
        }
    })
    return result;
}

console.log(
    uniqueArray2(Array.from({length: 20}, () => Math.floor(Math.random() * 20)))
)
