import { fibonacci, getCount, fib, restartCount } from "../dist/memoize"
import { expect, beforeEach, describe, test } from "vitest"


describe("memoize function" , () => {
  
  test("fibonacci fired without memoize function", () => {
    restartCount();
    expect(fibonacci(5)).toBe(5);
    expect(getCount()).toBe(15);
  })
   
  test("memoized fibonacci", () => {
    restartCount();
    expect(fib(5)).toBe(5);
    expect(getCount()).toBeLessThan(15);
  })
  });