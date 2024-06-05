import { restartCount, getCount, fibonacci } from "./memoize.js";

let txtUs: HTMLElement | null = document.getElementById("txtUS");
let results: HTMLElement | null = document.getElementById("results");

console.log(txtUs)
console.log(results)

restartCount();

export function fibonacciFront() {
  if (txtUs !== null && results !== null) {
    let numUs: number = parseInt(txtUs.innerHTML);
    results.innerHTML = `La posición de ${numUs} en fibonacci es: ${fibonacci(
        numUs
      )} y la funcion se ha disparado ${getCount} veces`;
  }
}