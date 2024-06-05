import { restartCount, getCount, addCount, fib, fibonacci, memoize } from "./memoize.js";

let txtUs: HTMLElement | null = document.getElementById("txtUS");

restartCount();

export function fibonacciFront() {
if (txtUs !== null){
let numUs: number = parseInt(txtUs?.innerHTML);
fibonacci(numUs);
}
}