import { fibonacci, fib, restartCount, getCount } from "./memoize.js";

restartCount();

console.log(fibonacci(5));
console.log("times function is fired without memoize: ", getCount());

restartCount();

console.log(fib(5));
console.log("times function is fired with memoize: ", getCount());
