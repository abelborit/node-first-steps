/* process como su nombre lo indica es un proceso de Node que está corriendo. Tiene información sobre la computadora, información sobre los procesos que se están ejecutando, librerías que se están ejecutando, versiones de node, etc */
// console.log(process);
// console.log(process.env);

const { SHELL, SESSIONNAME, npm_lifecycle_script } = process.env;
console.table({ SHELL, SESSIONNAME, npm_lifecycle_script });

const characters = ["Flash", "Superman", "Green Lantern", "Batman"];

/* FORMA 1: desestructuración de arreglos */
const [, , , batman] = characters;
console.log(batman);

/* FORMA 2: desestructuración de arreglos como objeto (Un arreglo por debajo es un objeto, así que se puede desestructurar usando la posición (índice en el arreglo, en este caso la 3 que corresponde a la última) y luego con ":" (dos puntos) asignarle un nombre a la variable.) */
const { 2: green, 3: bat } = characters;
console.log({ green, bat });
