import { restartCount, getCount, fibonacci, fib } from "./memoize.js";

const results: HTMLElement | null = document.getElementById("results");
const results2: HTMLElement | null = document.getElementById("results2");

export function fibonacciFront() {
  let numUs: number = 5;
  if (results !== null && results2 !== null) {
    restartCount();
    results.innerHTML = `Sin memoize: La posición de ${numUs} en fibonacci es: ${
      fibonacci(numUs) + 1
    } y la funcion se ha disparado ${getCount()} veces`;
    restartCount();
    results2.innerHTML = `Con memoize: La posición de ${numUs} en fibonacci es: ${
      fib(numUs) + 1
    } y la función se ha disparado ${getCount()} veces`;
  }
}
