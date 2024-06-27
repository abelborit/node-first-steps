// console.log("Hola Mundo desde el app.js");

/* forma cuando se manda a llamar a un archivo para poder ejecutarlo desde ese mismo archivo */
/* Cuando requieres un archivo, lo que sucede es que se ejecuta todo el código de ese archivo, es como si se estuviera copiando y pegando todo el código de ese archivo en el lugar donde se está requiriendo, pero aquí viene el truco, si hay algo específico de ese archivo que se quiere usar, como una variable o una función, se tiene que exportarlo desde ese archivo, de lo contrario, no se podrá acceder a él desde el archivo donde se está requiriendo, es como si ese pedazo de código que se quiere usar tuviera un candado y la única forma de abrirlo es exportándolo */
// require("./js-bases/01-template");

/* forma cuando se manda a llamar a un archivo para poder ejecutarlo pero como ya está exportado entonces podemos usarlo en este archivo */
import { emailTemplate } from "./js-bases/01-template";

console.log(emailTemplate);

/* ****************************************************************************************** */

require("./js-bases/02-destructuring");

/* ****************************************************************************************** */

import { getUserByIdCallback } from "./js-bases/03-callbacks";

const idCallback = 2;
getUserByIdCallback({
  id: idCallback,
  callback: (error, user) => {
    if (error) {
      throw new Error(error);
    }

    console.log(user);
  },
});

/* ****************************************************************************************** */

import { getUserByIdArrow } from "./js-bases/04-arrow";

const idArrow = 2;
getUserByIdArrow({
  id: idArrow,
  callback: function (error, response) {
    if (error) {
      throw new Error(error);
    }

    console.log(response);
  },
});

/* ****************************************************************************************** */

import { buildMakePerson } from "./js-bases/05-factory";
import { getAge, getUUID } from "./plugins";

/* Inyección de Dependencias: Las funciones getUUID y getAge se inyectan como dependencias, lo que hace que el código sea más flexible y fácil de testear y evita usar dependencias en el propio archivo de la función */
/* la constante makePerson es el resultado de ejecutar la función buildMakePerson, y esta función devuelve otra función que sí recibe parámetros, entonces cuando se hace makePerson(objUser), se está llamando a esa función que se devolvió y se le está pasando el objeto objUser como argumento, pero en pocas palabras sería que el makePerson es la función del return del buildMakePerson */
const makePerson = buildMakePerson({ getUUID, getAge });

const objUser = { name: "Fernando Herrera", birthdate: "1985-10-21" };
const fernandoUser = makePerson(objUser);
console.log({ fernandoUser });

/* ****************************************************************************************** */

import { getPokemonById } from "./js-bases/06-promises";
// console.log(getPokemonById(1)); // de esta forma nos devolverá un "Promise { <pending> }" y abajo el valor de la promesa pero es porque todas las funciones devuelven un undefined y como está dentro de un console.log entonces nos da el valor pero también el valor de retorno de la función del propio console.log lo cual es undefined
getPokemonById(1)
  .then((data) => console.log({ data }))
  .catch((error) => console.log({ error }));

getPokemonById(17)
  .then((data) => console.log({ data }))
  .catch((error) => console.log({ error }));

getPokemonById(50)
  .then((data) => console.log({ data }))
  .catch((error) => console.log({ error }));

/* ****************************************************************************************** */

import { buildLogger } from "./plugins";

const logger = buildLogger("app.js");

logger.log("Hola Mundo desde el logger");
logger.log("Otro Hola Mundo desde el logger");

logger.error("Error desde el logger");
logger.error("OtroError desde el logger");
