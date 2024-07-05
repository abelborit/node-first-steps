import { httpClientPlugin as httpClient } from "../plugins/http-client.plugin";

export const getPokemonById = async (id: number | string): Promise<string> => {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

    /* Async / Await y axios */
    const pokemon = await httpClient.get(url);
    return pokemon.name;

    /* Async / Await */
    // const response = await fetch(url);
    // const pokemon = await response.json();
    // // throw new Error("Pokemon no existe");
    // return pokemon.name;

    /* Fetch */
    // return (
    //   fetch(url)
    //     .then((response) => response.json())
    //     // .then(() => {
    //     //   throw new Error("Pokemon no existe");
    //     // })
    //     .then((pokemon) => pokemon.name)
    // );
  } catch (error) {
    throw `Pokemon not found with id ${id}`;

    /* Otras formas de capturar el error de getPokemonId */
    // throw new Error(`Pokemon not found with id ${id}`);
  }
};
