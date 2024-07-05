import { describe, test, expect } from "@jest/globals";
import { characters } from "../../src/js-bases/02-destructuring";

describe("js-bases/02-destructuring.ts", () => {
  test("characters should contain Flash and Superman", () => {
    expect(characters).toContain("Flash");
    expect(characters).toContain("Superman");
  });

  test("the first character should be Flash and the second should be Superman", () => {
    const [flash, superman] = characters;

    expect(flash).toBe("Flash");
    expect(superman).toBe("Superman");
  });

  test("the last character should be Batman", () => {
    const [, , , batman] = characters;

    expect(batman).toBe("Batman");

    const { [characters.length - 1]: bat } = characters;
    expect(bat).toBe("Batman");
  });
});
