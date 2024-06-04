import { fibonacci, getCount, fib, restartCount } from "../dist/memoize"
import { expect, beforeEach, describe, test } from "vitest"


describe("memoize function" , () => {
  
  test("fibonacci fired without memoize function", () => {
    
    expect(fibonacci(5)).toBe(5);
    expect(getCount()).toBe(15);
  })
   
  test("memoized fibonacci", () => {
    
    expect(fib(5)).toBe(5);
    expect(getCount()).toBeLessThan(15);
  })
  });