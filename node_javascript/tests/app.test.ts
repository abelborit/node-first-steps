import { describe, it, expect, test } from '@jest/globals';

describe("App.ts", () => {
  /* puede ser con it() o con test() */
  it("should be true", () => {
    expect(true).toBe(true);
  });

  test("should be true", () => {
    expect(true).toBe(true);
  });
});
