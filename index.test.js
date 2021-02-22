import { sumAll, reverse, frogJumps, divisibleCount } from "./index.js";

describe("index function are being tested", function () {
  test("sumAll is being tested", function () {
    expect(sumAll(5, 10)).toBe(15);
  });

  test("reverse is tested", function () {
    expect(reverse("hello ebru")).toBe("urbe olleh");
  });

  test("frog jump count" , function () {
    expect(frogJumps(10,90,20)).toBe(4);
    expect(frogJumps(10,5,20)).toBe(-1);
    expect(frogJumps(10,1000000001,20)).toBe(-1);
    expect(frogJumps(10,10,20)).toBe(-1);
    expect(frogJumps(10,100000000,1000000001)).toBe(-1);
    expect(frogJumps(10,10,-9)).toBe(-1);

  });

  test("divisible by count in a range of number" , function () {
    expect(divisibleCount(10,15,3)).toBe(2);
    expect(divisibleCount(10,10,3)).toBe(-1);
    expect(divisibleCount(10,15,0)).toBe(-1);
    expect(divisibleCount(15,10,5)).toBe(-1);
    expect(divisibleCount(10,15,-3)).toBe(-1);
    expect(divisibleCount(10,15,0)).toBe(-1);
    expect(divisibleCount(2000000002,2000000045,3)).toBe(-1);
    expect(divisibleCount(10,2000000002,3)).toBe(-1);
  });

});
