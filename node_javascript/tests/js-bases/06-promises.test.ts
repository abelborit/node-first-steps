import { describe, test, expect } from "@jest/globals";
import { getPokemonById } from "../../src/js-bases/06-promises";

describe("js-bases/06-promises.ts", () => {
  test("getPokemonById should return a pokemon name", async () => {
    const pokemonid = 1;
    const pokemonName = await getPokemonById(pokemonid);

    expect(pokemonName).toBe("bulbasaur");
    expect(typeof pokemonName).toBe("string");
  });

  test("getPokemonById should return an error if pokemon does not exist ", async () => {
    const pokemonid = 1_000_000_000;

    try {
      const pokemonName = await getPokemonById(pokemonid);

      /* se coloca que se espera el pokemonName pero recibe false para poder validar el error */
      expect(pokemonName).toBe(false);
    } catch (error) {
      // console.log(error);
      expect(error).toBe(`Pokemon not found with id ${pokemonid}`);
    }
  });

  /* Otras formas de capturar el error de getPokemonId */
  /* Fuentes:
  - https://stackoverflow.com/questions/47144187/can-you-write-async-tests-that-expect-tothrow
  - https://jestjs.io/docs/expect#rejects
  - https://jestjs.io/docs/asynchronous
  */

  /* FORMA 1: Aquí le decimos a Jest que la función siempre va a fallar usando el .rejects, y en .toThrow le indicamos el mensaje de error de la función. La desventaja de esta forma es que si en el código de 06-promises lanzan el error como un string "throw `Pokemon not found with id ${id}`;" Jest no detectará que lanzaron un error entonces hay que colocarle "throw new Error(`Pokemon not found with id ${id}`);" */
  // test("it should return an error if the pokemon does not exist", async () => {
  //   const pokemonId = 1_000_000_000;

  //   await expect(getPokemonById(pokemonId)).rejects.toThrow(
  //     `Pokemon not found with id ${pokemonId}`
  //   );
  // });

  /* FORMA 2: Aquí no hay que modificar nada del código de 06-promises para testear correctamente como en la FORMA 1, y además usamos el catch de la promesa en vez del trycatch */
  test("it should return an error if the pokemon does not exist", async () => {
    const pokemonId = 1_000_000_000;

    /* le decimos a jest que se espera que el expect sea llamado una vez (en caso de que la promesa haya sido resuelta de forma exitosa y no pase al catch, por lo que no llamaría al expect). */
    expect.assertions(1);

    return await getPokemonById(pokemonId).catch((error) =>
      expect(error).toBe(`Pokemon not found with id ${pokemonId}`)
    );
    /* si se está lanzando el error de la forma throw new Error("`Pokemon not found with id ${id}"), el error vendría a ser un objeto error en vez de un string, por lo que habría que usar la propiedad del error.message */
    // return await getPokemonById(pokemonId).catch((error: Error) =>
    //   expect(error.message).toBe(`Pokemon not found with id ${pokemonId}`)
    // );
  });
});
