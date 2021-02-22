import { pow } from "./index.js";

describe("index functions are being tested", function () {
  test("should pow return power of base", function () {
    expect(pow(5, 2)).toBe(25);
  });
});
