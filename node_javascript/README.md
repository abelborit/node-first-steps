# Node JS - First Steps with Node

---

# Temas puntuales de la sección (parte I)

### ¿Qué veremos en esta sección?

- En esta sección habrán generalidades de Node y a la vez, se explicarán ciertos conceptos de JavaScript que son necesarios para casi cualquier aplicación de Node.

- Puntualmente veremos:
  - Package.json
  - Node Modules
  - Scripts
  - Importaciones y Exportaciones (forma clásica)
  - Módulos
  - Reforzamiento de JS
  - Callbacks
  - Arrow Functions
  - Factory Functions
  - Promises
  - Async Await
  - Peticiones Http básicas
  - Dependencias de Producción y Desarrollo
  - Patrón adaptador para nuestras dependencias (llamada también como capa de protección)
    - Adapter es un patrón de diseño estructural. El patrón permite a la aplicación en si hacerla tolerante a cambios, ya sea de dependencias externas o de código interno y evitar que nuestra aplicación o código esté altamente o fuertemente acoplado a la lógica de terceros.
  - Loggers y su necesidad
    - Para crear un log para hacer depuraciones y saber qué fue lo que sucedió o estuvo mal en nuestro servidor
  - Winston

### \* PASOS A REALIZAR:

1. `npm init` y llenar los datos necesarios. También se puede colocar `npm init -y` y creará todo automáticamente.

   - Si se quiere colocar lo que nos propone entonces solo presionar `enter` y si no entonces colocar el valor que queremos. Igualmente los datos se pueden actualizar después.

2. Cuando se haga un proyecto de Node desde cero, entonces desde un primero momento hay que ver cómo se estructurará el file system, ver qué patrón de arquitectura podemos usar o ver la forma en mantener todo de una forma lo más ordenada posible.
3. Instalar `nodemon` (https://www.npmjs.com/package/nodemon) para que a cada cambio se esté observando el archivo en cuestión usando `npm install --save-dev nodemon` y luego `nodemon src/app.js`. Una buena alternativa a nodemon después de la versión 18.11 de node es nativamente usar `node --watch`, para cuestiones académicas puede ser bastante funcional.

### \* RECURSOS A USAR:

- get-age `https://www.npmjs.com/package/get-age` usando `npm i get-age`
- uuid `https://www.npmjs.com/package/uuid` usando `npm i uuid`
- axios `https://www.npmjs.com/package/axios` usando `npm install axios`
- winston `https://www.npmjs.com/package/winston` usando `npm i winston`

### \* NOTAS:

- Para la nota anterior, cabe destacar que actualmente ya no hace falta descagar una librería externa para generar UUID para este ejemplo ya que javascript lo tiene ya por defecto. Simplemente sería colocar `id: crypto.randomUUID()` y ya nos genera un UUID automaticamente sin necesidad de una libreria externa.

---

# Temas puntuales de la sección (parte III)

### ¿Qué veremos en esta sección?

- En esta sección habrán generalidades de Node y a la vez, se explicarán ciertos conceptos de JavaScript que son necesarios para casi cualquier aplicación de Node.

- Puntualmente veremos:
  - ¿Qué es el testing automático?
  - ¿Por qué es importante?
  - Jest testing library
  - Configuraciones Node + TS + Jest
  - Pruebas en todos los archivos realizados en la sección anterior
  - Coverage - Cobertura del testing

### \* PASOS A REALIZAR:

1. ejemplo
2. ejemplo
3. ejemplo

### \* RECURSOS A USAR:

- ejemplo
- ejemplo
- ejemplo

### \* NOTAS:

- Características de las pruebas:

  - Fáciles de escribir
  - Fáciles de leer
  - Confiables
  - Rápidas
  - Principalmente, que sean unitarias

- Usualmente está la terminología y/o pasos del AAA

  - **Arrange (Arreglar)**
    - Preparar el estado inicial para el sujeto de pruebas
      - Inicializar variables
      - Importaciones necesarias
  - **Act (Actuar)**
    - Aplicamos acciones o estímulos
      - Llamar métodos
      - Simular Clicks
      - Realizar acciones y/o evaluaciones sobre el paso anterior
  - **Assert (Afirmar)**
    - Observar el comportamiento resultante
      - ¿Son los resultados esperados?

- Puede ser que salga este error o algo similar en el que diga que `el archivo de jest.config.ts está fuera del rootDir de TypeScript Config`, lo cual está bien, y es normal, ya que usamos TS-Jest, no hace falta transpilar nada de Jest con TypeScript, sin embargo el error es molesto, y podemos añadir esta configuración justo antes del compilerOptions (o después del mismo, da igual)

  ```js
    "include": ["src/**/*"],
    "exclude": ["node_modules", "**/*.spec.ts","**/*.test.ts"],
    "compilerOptions": {
      /* Visit https://aka.ms/tsconfig to read more about this file */
  ```

  - Pero con lo anteriro puede ser que en nuestros archivos de .test.ts salga que no encuentra algunas funciones de jest, entonces bastaría con solo importarlas

- ¿Cuándo se utiliza el require y cuando el import? Por ejemplo hay estas dos formas de importar:

  ```js
  import { emailTemplate } from "../../src/js-foundation/01-template";
  const { emailTemplate } = require("../../src/js-foundation/01-template");
  ```

  - En este caso se utiliza import en lugar de require porque no estamos utilizando Node en su forma original, sino que estamos utilizando Node con TypeScript y TypeScript nos permite utilizar las características más recientes de ECMAScript, incluyendo la sintaxis import. Por lo que, aunque require es la forma tradicional de importar módulos en Node, cuando inicializamos TypeScript, podemos optar por usar import para una sintaxis más moderna.

- Si el auto-import de Visual Studio Code no funciona para tests pero sin embargo fuera de ellos si funciona, se puede revisar la configuracion del tsconfig ya que al solo incluir src y excluir los archivos de tests dejo de funcionar el auto-import dentro de dichos archivos, asi que simplemente eliminando el `include` y `exclude` ya se solucionaría.

- Excluir archivos de prueba de la compilación en TypeScript:

  - https://bobbyhadz.com/blog/typescript-exclude-test-files-from-compilation
