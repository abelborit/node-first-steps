import { describe, test, expect, jest } from "@jest/globals";
import { getAge } from "../../src/plugins/get-age.plugin";

describe("plugins/get-age.plugin.ts", () => {
  test("getAge should return a number", () => {
    const birthdate = "1998-10-17";
    const age = getAge(birthdate);

    expect(typeof age).toBe("number");
  });

  test("getAge should return current age", () => {
    const birthdate = "1998-10-17";
    const age = getAge(birthdate);

    const calculatedAge =
      new Date().getFullYear() - new Date(birthdate).getFullYear();

    expect(age).toBe(calculatedAge);
  });

  /* este test es para ver la funcionalidad del spyOn (método de objetos) para simular que el método getFullYear() de Date() me regrese un valor que yo quiero, es decir, solo se va a probar la funcionalidad del spyOn de sobre escribir un método para regresar un valor que nosotros queremos */
  test("getAge should return 0 years", () => {
    /* estar pendiente del método getFullYear en Date.prototype y que luego al llamar al método getFullYear me regrese un valor mockeado o ficticio de, en este caso, 1998 solo para este test. Aquí como se está llamando al getAge entonces internamente tiene el método getFullYear y en este test es donde se va a mocker el valor que regresa getFullYear a 1998 */
    /* si se quiere que el spy esté en todos los test, entonces se podría colocar al inicio debajo del describe(....) */
    const spy = jest.spyOn(Date.prototype, "getFullYear").mockReturnValue(1998);
    // console.log(spy);

    const birthdate = "1998-10-17";
    const age = getAge(birthdate);
    // console.log({ age });

    /* para corroborar que el spy fue llamado */
    expect(spy).toHaveBeenCalled()
    expect(age).toBe(0);
  });
});
