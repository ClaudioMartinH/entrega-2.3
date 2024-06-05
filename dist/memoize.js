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
export function fibonacci(n) {
    addCount();
    if (n <= 1)
        return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
export const fib = memoize((n) => {
    if (n <= 1)
        return n;
    addCount();
    return fib(n - 1) + fib(n - 2);
});
