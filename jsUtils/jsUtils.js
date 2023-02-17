// Implement Array.prototype.map
Array.prototype.myMap = function (callbackFn, thisArg) {
  if (
    typeof callbackFn !== "function" ||
    !callbackFn.call ||
    !callbackFn.apply
  ) {
    throw new TypeError(`${callbackFn} is not a function`);
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
};

// Implement Lodash's Get function
function get(object, path, defaultValue) {
  const pathArray = Array.isArray(path) ? path : path.split(".");
  const length = pathArray.length;
  let lastObject = object;
  let i = 0;

  for (i; lastObject != null && i < length; i++) {
    lastObject = lastObject[String(pathArray[i])];
  }

  const value = i && i === length ? lastObject : undefined;
  return value !== undefined ? lastObject : defaultValue;
}

// Implement Lodash's Once function
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
  return typeof value === "boolean";
}

function isNumber(value) {
  return typeof value === "number";
}

function isNull(value) {
  return value === null;
}

function isString(value) {
  return typeof value === "string";
}

function isSymbol(value) {
  return typeof value === "symbol";
}

function isUndefined(value) {
  return value === undefined;
}

// Implement Unique Array function
// 1. Converting to Set then back
function uniqueArray1(array) {
  return Array.from(new Set(array));
}

// 2. Using Set to track existing elements
function uniqueArray2(array) {
  const seen = new Set();

  array.forEach((item) => {
    if (!seen.has(item)) {
      seen.add(item);
    }
  });
  return [...seen];
}

// 3. Brute force approach
function uniqueArray3(array) {
  const result = [];

  array.forEach((item) => {
    if (!result.includes(item)) {
      result.push(item);
    }
  });
  return result;
}

// console.log(uniqueArray2(Array.from({length: 20}, () => Math.floor(Math.random() * 20))))

// Implement Array.prototype.filter
Array.prototype.myFilter = function (callbackFn, thisArg) {
  if (
    typeof callbackFn !== "function" ||
    !callbackFn.call ||
    !callbackFn.apply
  ) {
    throw new Error(`${callbackFn} is not a function`);
  }

  const length = this.length;
  const result = [];
  let j = 0;

  for (let i = 0; i < length; i++) {
    const check = callbackFn.call(thisArg, this[i], i, this);
    const hasOwn = Object.hasOwn(this, i);
    if (check && hasOwn) {
      result[j] = this[i];
      j++;
    }
  }

  return result;
};

// Implement Function.prototype.bind
Function.prototype.myBind = function (thisArg, ...boundArgs) {
  const originalFunc = this;
  if (typeof originalFunc !== "function") {
    throw new TypeError("Bind must be called on a function");
  }
  return function (...args) {
    return Function.prototype.apply.call(originalFunc, thisArg, [
      ...boundArgs,
      ...args,
    ]);
  };
};

// Implement Promise.race
Promise.myRace = function (array) {
  return new Promise((resolve, reject) => {
    if (array.length === 0) {
      return;
    }

    array.forEach(async (item) => {
      try {
        const value = await item;
        resolve(value);
      } catch (error) {
        reject(error);
      }
    });
  });
};

const p1 = new Promise((res) => setTimeout(res, 100, "one"));

const p2 = new Promise((res) => setTimeout(res, 200, "two"));

Promise.myRace([p1, p2]).then((response) => {
  console.log(response);
});

// Implement sum function
function sum(a) {
  return function (b) {
    return b === undefined ? a : sum(a + b);
  };
}

// Implement Type utilities 2
function isArray(value) {
  return Array.isArray(value);
}

// Alternative to isArray.
function isArrayAlt(value) {
  // For null and undefined.
  if (value == null) {
    return false;
  }

  return value.constructor === Array;
}

function isFunction(value) {
  return typeof value === "function";
}

function isObject(value) {
  // For null and undefined.
  if (value == null) {
    return false;
  }

  const type = typeof value;
  return type === "object" || type === "function";
}

function isPlainObject(value) {
  // For null and undefined.
  if (value == null) {
    return false;
  }

  const prototype = Object.getPrototypeOf(value);
  return prototype === null || prototype.constructor === Object;
}

// Alternative to isPlainObject, Lodash's implementation.
function isPlainObjectAlternative(value) {
  if (!isObject(value)) {
    return false;
  }

  // For objects created via Object.create(null);
  if (Object.getPrototypeOf(value) === null) {
    return true;
  }

  let proto = value;
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(value) === proto;
}

// Implement a curry function
function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    }

    return function (...args2) {
      return curried.apply(this, [...args, ...args2]);
    };
  };
}

function multiplyThree(a, b, c) {
  return a * b * c;
}

const curriedMultiplyThree = curry(multiplyThree);
curriedMultiplyThree(4)(5)(6); // 120

// Implement debounce function
function debounce(func, wait = 0) {
  let timeoutId = null;
  return function (...args) {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      timeoutId = null;
      func.apply(this, args);
    }, wait);
  };
}

// Implement Lodash's limit function
function limit(func, n) {
  let count = 0;
  let value;
  return function (...args) {
    if (count < n) {
      value = func.apply(this, args);
      count++;
    }
    return value;
  };
}

let i = 1;

function incrementBy(value) {
  i += value;
  return i;
}

const threeTimes = limit(incrementBy, 3);

// Implement Lodash's throttle function
function throttle(func, wait) {
  let shouldTrottle = false;

  return function (...args) {
    if (shouldTrottle) {
      return;
    }

    shouldTrottle = true;
    setTimeout(function () {
      shouldTrottle = false;
    }, wait);
    func.apply(this, args);
  };
}

/**
 * Debounce monitors the time delay between user actions and only executes the callback function
 * if the delay exceeds the time delay defined by the developer. So, continuous user actions can
 * significantly delay the callback function’s execution if we use debounce.
 *
 * On the other hand, throttle uses the time delay to execute the callback function at regular
 * intervals until the event trigger is active. So, it does not delay the callback function
 * execution for a significant period like debounce.
 * */

// Implement Camel case keys function
function camelCase(str) {
  if (!/[_]/.test(str)) {
    return str;
  }

  return str
    .toLowerCase()
    .replace(/[_][a-z]/g, (_match, _p1, p2) => p2.toUpperCase());
}

function camelCaseKeys(obj) {
  if (Array.isArray(obj)) {
    return obj.map((item) => camelCaseKeys(item));
  }

  if (typeof obj !== "object" || obj === null) {
    return obj;
  }

  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [
      camelCase(key),
      camelCaseKeys(value),
    ])
  );
}
