import { describe, test, expect } from "@jest/globals";
import { buildMakePerson } from "../../src/js-bases/05-factory";

describe("js-bases/05-factory.ts", () => {
  /* mockear las funciones con datos falsos */
  const getUUID = () => "1234";
  const getAge = () => 25;

  test("buildMakePerson should return a function", () => {
    const makePerson = buildMakePerson({ getUUID, getAge });

    expect(typeof makePerson).toBe("function");
  });

  test("makePerson should return a person", () => {
    const makePerson = buildMakePerson({ getUUID, getAge });
    const objUser = { name: "Fernando Herrera", birthdate: "1985-10-21" };
    const fernandoUser = makePerson(objUser);

    expect(fernandoUser).toEqual({
      id: "1234",
      name: objUser.name,
      birthdate: objUser.birthdate,
      age: 25,
    });
  });
});
