import { sumAll, reverse } from "./index.js";

describe("index function are being tested", function () {
  test("sumAll is being tested", function () {
    expect(sumAll(5, 10)).toBe(15);
  });

  test("reverse is tested", function () {
    expect(reverse("hello ebru")).toBe("urbe olleh");
  });
});
