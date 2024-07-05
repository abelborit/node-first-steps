/* process como su nombre lo indica es un proceso de Node que está corriendo. Tiene información sobre la computadora, información sobre los procesos que se están ejecutando, librerías que se están ejecutando, versiones de node, etc */
// console.log(process);
// console.log(process.env);

const { SHELL, SESSIONNAME, npm_lifecycle_script } = process.env;
console.table({ SHELL, SESSIONNAME, npm_lifecycle_script });

export const characters: string[] = ["Flash", "Superman", "Green Lantern", "Batman"];

/* FORMA 1: desestructuración de arreglos */
const [, , , batman] = characters;
console.log(batman);

/* FORMA 2: desestructuración de arreglos como objeto (Un arreglo por debajo es un objeto, así que se puede desestructurar usando la posición (índice en el arreglo, en este caso la 3 que corresponde a la última) y luego con ":" (dos puntos) asignarle un nombre a la variable.) */
const { 2: green, 3: bat } = characters;
console.log({ green, bat });

/* tomar según la cantidad de elementos y tomar la última posición, se coloca entre [] para que sea una propiedad computada la cual es una técnica que permite definir nombres de propiedades de objetos usando expresiones que se evalúan en tiempo de ejecución. Esto es particularmente útil cuando el nombre de la propiedad no se conoce de antemano y debe ser calculado dinámicamente */
const { [characters.length - 1]: Batman} = characters
console.log({Batman});

