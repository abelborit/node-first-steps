const fs = require("fs");

const content = fs.readFileSync("readme_exercise.md", "utf-8");

const words = content.split(" ");
const reactWordCount_1 = words.filter((wordElement) =>
  wordElement.toLowerCase().includes("react")
).length;

const reactWordCount_2 = (content.match(/react/gi) ?? []).length; // .match para evaluar expresiones regulares que me devuelve un arreglo con todas las coincidencias y si no hay coincidencias entonces me dará un null y por eso se coloca ?? [] para que me de un arreglo vacío

console.log("Palabras: ", words.length);
console.log("Palabras React (con función): ", reactWordCount_1); // case insensitive
console.log("Palabras React (con expresión regular): ", reactWordCount_2); // case insensitive
/* Para este caso es mejor trabajar con una expresión regular ya que da un valor más preciso (NOTA: así trabajaría Visual Studio Code al momento de buscar una palabra) */
