// Implement Array.prototype.map
Array.prototype.myMap = function (callbackFn, thisArg) {
    if (
        typeof callbackFn !== "function" ||
        !callbackFn.call ||
        !callbackFn.apply
    ) {
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
export default function get(object, path, defaultValue) {
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