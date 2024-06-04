"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fib = exports.fibonacci = exports.getCount = exports.addCount = exports.restartCount = exports.memoize = void 0;
function memoize(fn) {
    let cache = {};
    return (...args) => {
        let key = args.join(",");
        if (cache[key]) {
            return cache[key];
        }
        cache[key] = fn.apply(null, args);
        return cache[key];
    };
}
exports.memoize = memoize;
let count;
function restartCount() {
    return count = 0;
}
exports.restartCount = restartCount;
;
function addCount() {
    return count++;
}
exports.addCount = addCount;
function getCount() {
    return count;
}
exports.getCount = getCount;
restartCount();
function fibonacci(n) {
    addCount();
    if (n <= 1)
        return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
exports.fibonacci = fibonacci;
console.log(fibonacci(5));
console.log("times function is fired without memoize: ", getCount());
restartCount();
exports.fib = memoize((n) => {
    if (n <= 1)
        return n;
    addCount();
    return (0, exports.fib)(n - 1) + (0, exports.fib)(n - 2);
});
console.log((0, exports.fib)(5));
console.log("times function is fired with memoize: ", getCount());
