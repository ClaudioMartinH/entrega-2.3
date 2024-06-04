"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function memoize(fn) {
    let cache;
    return (...args) => {
        let key = args.join(",");
        if (key in cache) {
            return cache[key];
        }
        cache[key] = fn.apply(null, args);
        return cache[key];
    };
}
let count = 0;
function fibonacci(n) {
    count++;
    if (n <= 1)
        return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(5));
console.log("times function is fired without memoize: ", count);
const fib = memoize((n) => {
    count++;
    if (n <= 1)
        return n;
    return fib(n - 1) + fib(n - 2);
});
console.log(fib(5));
console.log("times function is fired with memoize: ", count);
