
function memoize(fn: Function): Function {
    let cache: [key: string];   // arreglar esto
    return (...args: any[number]) => {
        let key = args.join(",");
        if (key in cache) {
            return cache[key];
        }
        cache[key] = fn.apply(null, args);
        return cache[key];
    }
}

let count: number = 0;
function fibonacci(n: number): number {
    count++;
    if (n <= 1) return n;
    return fibonacci(n -1) + fibonacci(n - 2);
}

console.log(fibonacci(5))
console.log("times function is fired without memoize: ", count);


const fib = memoize((n: number) => {
    count++;
    if (n <= 1) return n;
    return fib(n -1) + fib(n -2);
});


console.log(fib(5))
console.log("times function is fired with memoize: ", count);
