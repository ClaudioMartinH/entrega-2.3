
export function memoize(fn: Function): Function {
    let cache: {[key: string]: any} = {};  
    return (...args: any[]) => {
        let key = args.join(",");
        if (cache[key]) {
            return cache[key];
        }
        cache[key] = fn.apply(null, args);
        return cache[key];
    }

}

let count: number;

export function restartCount(): number {
    return count = 0;
};
export function addCount(): number {
    return count++;
}
export function getCount(): number {
    return count;
}


export function fibonacci(n: number): number {
    addCount();
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}


export const fib = memoize((n: number) => {
    if (n <= 1) return n;
    addCount();
    return fib(n -1) + fib(n -2);
});



