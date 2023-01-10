// Implement Array.prototype.map
Array.prototype.myMap = function (callback, thisArg) {
    if (
        typeof callback !== "function" ||
        !callback.call ||
        !callback.apply
    ) {
        throw new TypeError(`${callback} is not a function`);
    }

    const len = this.length;
    const array = new Array(len);
    let k = 0;

    while (k < len) {
        if (Object.hasOwn(this, k)) {
            array[k] = callback.call(thisArg, this[k], k, this)
        }
        k++;
    }

    return array;
};
