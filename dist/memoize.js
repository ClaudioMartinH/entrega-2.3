export function memoize(fn) {
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
let count;
export function restartCount() {
    return count = 0;
}
;
export function addCount() {
    return count++;
}
export function getCount() {
    return count;
}
restartCount();
export function fibonacci(n) {
    addCount();
    if (n <= 1)
        return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(5));
console.log("times function is fired without memoize: ", getCount());
restartCount();
export const fib = memoize((n) => {
    if (n <= 1)
        return n;
    addCount();
    return fib(n - 1) + fib(n - 2);
});
console.log(fib(5));
console.log("times function is fired with memoize: ", getCount());
