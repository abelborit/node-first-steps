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
