const { http } = require("../plugins");

const getPokemonById = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

  /* Async / Await y axios */
  const pokemon = await http.get(url);
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
};

module.exports = getPokemonById;
