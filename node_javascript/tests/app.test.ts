import { describe, it, expect, test } from "@jest/globals";

describe("** App.ts **", () => {
  /* puede ser con it() o con test() */
  // it("should be true", () => {
  //   expect(true).toBe(true);
  // });

  test("should be correct", () => {
    /* 1. Arrange */
    const num1 = 10;
    const num2 = 5;

    /* 2. Act */
    const result = num1 + num2;

    /* 3. Assert */
    expect(result).toBe(15);
  });
});
