import { describe, test, expect } from "@jest/globals";
import { emailTemplate } from "../../src/js-bases/01-template";

describe("js-bases/01-template.ts", () => {
  test("emailTemplate should contain a greeting", () => {
    expect(emailTemplate).toContain("Hi, ");
  });

  test("emailTemplate should contain {{name}} and {{orderId}}", () => {
    expect(emailTemplate).toContain("{{name}}");
    expect(emailTemplate).toContain("{{orderId}}");

    /* se puede usar también con expresiones regulares con el .toMatch() */
    // expect(emailTemplate).toMatch(/{{name}}/);
    // expect(emailTemplate).toMatch(/{{orderId}}/);
  });
});
