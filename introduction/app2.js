/* código para poder leer nuestro "readme_exercise.md" */
/* trabajar con el file system usando el propio paquete de node */
const fs = require("fs");

const data = fs.readFileSync("readme_exercise.md", "utf-8");
// console.log(data);

const newData = data.replace(/React/ig, "Angular")
// console.log(newData);

fs.writeFileSync("readme_exercise_replaced.md", newData)
