import { restartCount, fibonacci } from "./memoize.js";
let txtUs = document.getElementById("txtUS");
restartCount();
export function fibonacciFront() {
    if (txtUs !== null) {
        let numUs = parseInt(txtUs === null || txtUs === void 0 ? void 0 : txtUs.innerHTML);
        fibonacci(numUs);
    }
}
