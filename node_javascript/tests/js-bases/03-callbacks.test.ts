import { describe, test, expect } from "@jest/globals";
import { getUserByIdCallback } from "../../src/js-bases/03-callbacks";

describe("js-bases/03-callbacks.ts", () => {
  /* CON CÓDIGO NO BLOQUEANTE */
  /* al colocar el código no bloqueante en el archivo 03-callbacks.ts y dejar este test así tal cual o así sea con un error intencional dentro de la función getUserByIdCallback, se ejecutará todo normal y pasará el test pero en la terminal veremos algo como "A worker process has failed to exit gracefully and has been force exited. This is likely caused by tests leaking due to improper teardown. Try running with --detectOpenHandles to find leaks. Active timers can also cause this, ensure that .unref() was called on them." lo que quiere decir como que faltó hacer el test para que salga de forma agraciada y que faltó una propiedad para desmenuzar un poco mejor el test pero vemos que el test sí pasó normal de forma instantánea y no hizo caso al setTimeout con los 2000 milisegundos */
  /* pero si se coloca el error fuera de la función getUserByIdCallback veremos que ahí sí se muestra el error y que el test no pasó correctamente. Todo esto tiene que ver con el scope en dónde se está ejecutando ese error, porque al estar fuera de la función getUserByIdCallback entonces se va ejecutando todo de forma secuencial (primero declara el id, luego la función y luego el error y ahí es donde se termina el test) caso contrario que si se coloca dentro de la función getUserByIdCallback porque realiza las mismas declaraciones pero el error al estar dentro de la función esta nunca se llegó a ejecutar porque el test terminó mucho antes de los 2000 milisegundos del setTimeout ocurran */
  /* para solucionar lo anterior entonces se tendría que hacer uso de "done", que es un argumento en la función callback que nosotros le mandamos al test, como está en el test más abajo, lo que quiere decir que no se va a terminar el test suit hasta que se tenga una resolución (ya sea positiva o negativa) de nuestro getUserByIdCallback, y como no tenemos manera de saber cuánto tiempo se demorará en terminar una petición http, entonces hasta que se llame al done() no habrá finalizado el test suit que también tiene un margen de unos milisegundos sino dará error (se puede configurar ese tiempo límite) */
  /* sin el done */
  // // test("getUserByIdCallback should return a error if user not exist", () => {
  // //   const id = 10;

  // //   getUserByIdCallback({
  // //     id,
  // //     callback: (error, user) => {
  // //       expect(error).toBe(`User not found with id ${id}`);
  // //       expect(user).toBeNull();

  // //       // throw new Error("Not implemented yet!!")
  // //     },
  // //   });

  // //   // throw new Error("Not implemented yet!!")
  // // });

  /* con el done */
  // test("getUserByIdCallback should return a error if user not exist", (done) => {
  //   const id = 10;

  //   getUserByIdCallback({
  //     id,
  //     callback: (error, user) => {
  //       expect(error).toBe(`User not found with id ${id}`);
  //       expect(user).toBeNull();

  //       done();
  //     },
  //   });
  // });

  /* CON CÓDIGO BLOQUEANTE */
  test("getUserByIdCallback should return a error if user not exist", () => {
    const id = 10;

    getUserByIdCallback({
      id,
      callback: (error, user) => {
        expect(error).toBe(`User not found with id ${id}`);
        expect(user).toBeNull();
      },
    });
  });

  test("getUserByIdCallback should return a this user: John Doe", () => {
    const id = 1;

    getUserByIdCallback({
      id,
      callback: (error, user) => {
        expect(error).toBeNull();
        expect(user).toEqual({ id: 1, name: "John Doe" }); // toEqual() es más para los objetos

        /* También se puede usar toHaveProperty(), que lo que hace es analizar la respuesta, que debe ser un objeto, revisando la propiedad y además adicionalmente se puede comprobar el valor de dicha propiedad */
        expect(user).toHaveProperty("id", id);
        expect(user).toHaveProperty("name", "John Doe");
      },
    });
  });
});
