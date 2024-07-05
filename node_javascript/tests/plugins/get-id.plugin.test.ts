import { describe, test, expect, jest } from "@jest/globals";
import { getUUID } from "../../src/plugins/get-id.plugin";

describe("plugins/get-id.plugin.ts", () => {
  test("getUUID should return a string UUID", () => {
    const uuid = getUUID();

    expect(typeof uuid).toBe("string");
    expect(uuid.length).toBe(36); // los uuid son aprox de 36 caracteres

    /* probar con una expresión regular */
    expect(uuid).toMatch(
      /[0-9A-Za-z]{8}-[0-9A-Za-z]{4}-4[0-9A-Za-z]{3}-[89ABab][0-9A-Za-z]{3}-[0-9A-Za-z]{12}/g
    );
  });
});
