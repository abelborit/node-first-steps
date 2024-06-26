# Node JS - First Steps with Node

---

# Temas puntuales de la sección

### ¿Qué veremos en esta sección?

- Preguntas comunes sobre Node
- Hola Mundo en Node
- Laboratorio con FileSystem
- Code Execution
- Event Loop

### \* PASOS A REALIZAR:

1. ¿Qué es Node JS?

    - Node JS es un Runtime environment de JavaScript, es decir, es un ambiente de ejecución de JavaScript en nuestra computadora para poder ejecutar JavaScript desligado del navegador web. Entonces, Node nos habilita que podamos usar JavaScript en un ambiente fuera del navegador.

2. ¿Qué lo hace especial?

    - Node está construido sobre el motor V8 de Google, el cual es muy rápido y muy eficiente y está especializado para realizar tareas de entrada y salida o input y output (E/S o I/O) junto con el manejo de archivos de computadora cliente/servidor. Con Node podemos ejecutar y crear servidores completos que reciban peticiones HTTP y regresen información o sino tener acceso al file system de la computadora para la manipulación de archivos, etc.

3. Características de Node:

    - Asincronía (aunque sabemos que JavaScript es single thread o único hilo pero con Node se puede lograr tener múltiples trabajos o hilos o multiple threads)
    - Módulos nativos y de terceros
    - Gestión de paquetes con NPM
    - Construcción de servidores
    - Escalabilidad
    - Múltiple plataforma (Windows, Linux, Mac)
    - Non-Blocking I/O, es decir, casi ninguna función de Node bloque la lectura, por lo que podemos tener cientos de peticiones o instrucciones ejecutándose en paralelo sin bloquear el hilo principal gracias a **libuv** y con eso se pueden ejecutar o tener varios procesos en paralelo.

4. Interactuar con Node:

    - Abrir una terminal y corroborar que tenemos Node instalando colocando `node --version` o `node -v` y luego que aparezca la versión entonces colocar `node` y después presionar Enter y con eso entraremos a la terminal interactiva de Node donde también nos aparecerá la versión de Node que tengamos y con eso ya podemos ejecutar Node independiente de nuestro navegador. Se puede colocar el siguiente código:

      ```js
      const message = 'Hello World from Node!';
      ```

      - Al presionar Enter nos aparecerá un `undefined` ya que si colocamos lo mismo en la consola del navegador será el mismo valor al presionar Enter y como Node está bajo el motor V8 de Google entonces es el mismo resultado, pero eso es porque el código anterior es una forma corta de llamar a una función de asignación lo cual todas las funciones en JavaScript nos devuelven `undefined` que es su valor de retorno. Luego podríamos leer ese `message`:

      ```js
      console.log(message);
      ```

      - Y con lo anterior nos dará el valor de `message` pero también luego un `undefined` porque como el `console.log` es una función entonces nos retorna ese `undefined` en este caso.

      - También se podría colocar directamente el `message` sin el `console.log` y nos daría el resultado del `message` pero ya no el `undefined` porque ya no se está llamando a una función sino al valor como tal. (Para limpiar la terminal se presiona `ctrl + l`)

### \* RECURSOS A USAR:

- ejemplo
- ejemplo
- ejemplo

### \* NOTAS:

- El 100% de las herramientas creadas para desarrollar aplicaciones Frontend se basan en Node, es decir, usamos Node para que podamos crear, transpilar, compilar, generar, y hacer todo lo que usualmente solemos hacer con frameworks modernos, y esas herramientas usan Node para poder tener todo el poder que estamos esperando.
- NPM (Node Package Manager) es el gestor de paquetes de Node y ya viene instalado cuando se instala Node.
- Node también es muy usado para crear herramientas y ejecutar paquetes sin tenerlos instalados en nuestro equipo y para eso se usa NPX (Node Package Execute).
- Conceptos de **Blocking I/O** & **Non-Blocking I/O**: https://nodejs.org/en/learn/asynchronous-work/overview-of-blocking-vs-non-blocking donde el I/O se refiere principalmente a la interacción con el disco duro del sistema o procedimientos en los cuales la librería de libuv va a entrar en juego para que podamos tener esa asincronía o procedimientos que se ejecutan en paralelo.

  - Blocking es cuando la ejecución de un código debe de esperar a que se complete el proceso pero este a su vez, impide que se sigan ejecutando otras instrucciones en paralelo, es decir, que para ejecutar una línea de código tiene que haber terminado de ejecutar la línea anterior lo cual a veces no es necesario porque se requiere trabajar varias instrucciones en paralelo.

    ```js
    const fs = require('fs');

    // Bloquea hasta que el archivo es leído completamente
    const data = fs.readFileSync('/file.md');
    console.log(data);

    // Se ejecuta después del console.log
    moreWork();
    ```

  - Non-Blocking es cuando se pueden realizar tareas en paralelo sin afectar el hilo principal.

    ```js
    const fs = require('fs');

    fs.readFile('/file.md', (err, data) => {
      if (err) throw err;
      console.log(data);
    });

    // Se ejecuta antes del console.log
    moreWork();
    ```
    - La ejecución de JavaScript en Node.js es de un solo subproceso, por lo que la concurrencia se refiere a la capacidad del bucle de eventos (event loop) para ejecutar funciones de devolución de llamada (callback functions) de JavaScript después de completar otro trabajo. Cualquier código que se espera que se ejecute de manera simultánea debe permitir que el bucle de eventos continúe ejecutándose mientras ocurren operaciones que no son de JavaScript, como E/S. Como ejemplo, consideremos un caso en el que cada solicitud a un servidor web tarda 50 ms en completarse y 45 ms de esos 50 ms son E/S de base de datos que se pueden realizar de forma asincrónica. La elección de operaciones asincrónicas sin bloqueo libera esos 45 ms por solicitud para manejar otras solicitudes. Esta es una diferencia significativa en la capacidad simplemente al elegir utilizar métodos sin bloqueo en lugar de métodos de bloqueo .

  - Cuando se ejecuta Node en la terminal, no se compila a un binario como en lenguajes completamente compilados. Node.js utiliza un enfoque de interpretación y ejecución de código fuente directamente, el motor V8 de Google Chrome, que es el motor de Node.js, realiza una compilación especial que convierte el código JavaScript en código de máquina en tiempo de ejecución, esto permite que el código JavaScript se ejecute de manera eficiente. Se puede leer más detalles en el siguiente artículo, pero en pocas palabras se podría decir que Node.js es más interpretado que compilado, ya que el proceso de compilación se realiza dinámicamente durante la ejecución del programa. (https://medium.com/@pharesdiego/javascript-un-lenguaje-compilado-o-interpretado-962ee405e123)

  - Dudas 1:

      1. ¿libuv seria entonces una de esas muchas Web API que se ven en los diagramas del Event Loop en internet?

      2. Si es asi, entonces una vez la web API (libuv) ejecuta el callback, este se envia al microtask queue, el cual puede ser nextTick queue (si es el resultado de un callback) o promise queue (si es resultado de una promesa)

      3. ¿El microtask queue es lo mismo que el task queue?

      4. Finalmente, una vez el call stack este vacio, ¿Se envian los resultados que tengamos en el task queue, una vez procesados se eliminan?

      - La segunda parte seria sobre el global en el call stack.

        1. El call stack funciona (Last in / First out) por lo que el primer valor que recibimos ahi es la ejecucion global, y por encima se ejecutarian todas las funciones de nuestro codigo, hasta que ya no haya nada y la ejecucion global salga del stack, ¿Es asi?

      - Respuesta:

        - Sí, libuv es una de las muchas APIs que se ven en los diagramas del Event Loop, cuando libuv ejecuta el callback, este se envía a la cola de microtasks, que puede ser la cola nextTick (si es el resultado de un callback) o la cola de promesas (si es el resultado de una promesa). La cola de microtasks no es lo mismo que la cola de tareas, la cola de microtasks tiene una mayor prioridad y se procesa antes que la cola de tareas. Una vez que el call stack está vacío, se envían los resultados que tengamos en la cola de tareas al stack y se eliminan una vez procesados. En cuanto al call stack, funciona con el principio de último en entrar, primero en salir, el primer valor que recibimos allí es la ejecución global, y por encima se ejecutarían todas las funciones de nuestro código, hasta que ya no haya nada y la ejecución global salga del stack.

    - Dudas 2:

        1. ¿Cuándo se pasa un callback a libuv?

        - Cuando en el main (global) principal termina, es cuando libuv empieza a "enviar" los callbacks resueltos al main y los va ejecutando en el orden de primero en entrar, primero en salir. Hasta ahí todo bien.

        - La cuestión tiene que ver cuando se asume que es una function candidata a callback. En los ejemplos que se han visto, hay dos tipos de funciones setTimeOut() y fs.readFile(). Ambos usan callback functions ya que son procesos asíncronos. Si, por ejemplo, se tuviera una función como esta:

        ```js
        function myFuction(isOk, fn) {
          if (isOk) fn();
        };
        ```

        En donde se llamaría de esta forma en el main:

        ```js
        myFunction(true, () => console.log('Todo correcto!'));
        ```

        - En este caso, ¿Ese callback va a ser procesado por libuv? o ¿solo son algunas funciones de js como setTimeOut o de otras librerías como fileSystem? Es decir, ¿Cómo sabe el runtime de js que va a libuv y que no? ¿simplemente si en la llamada a una función (como arriba vemos con myFunction) hay un parámetro callback?

        - Si es así, ¿podría enviar a libuv callbacks solamente pasándolos como parámetros en otras funciones y así convirtiendo estas funciones en asíncronas? ¿Hay algún tipo de standards en los parámetros que llevan los callbacks como err or result?

        - Respuesta:

          - En Node, NO todas las funciones que aceptan callbacks son asincrónicas y son manejadas por libuv. En el ejemplo, myFunction es una función sincrónica que acepta un callback, no se pasa a libuv para su ejecución. Las funciones como setTimeout y fs.readFile son parte de la API de Node que está diseñada para operaciones asíncronas y utiliza libuv en el fondo. Estas funciones toman un callback que se invoca cuando la operación asíncrona se completa. En otras palabras, libuv maneja las operaciones asíncronas en Node y no todas las funciones que toman un callback pasan por libuv. Se puede leer más sobre esto en la documentación de libuv [Basics of libuv - libuv documentation](https://docs.libuv.org/en/v1.x/guide/basics.html)

          - En cuanto a los parámetros de los callbacks, el patrón común en Node es que el primer argumento del callback es un objeto de error (o null si no hay error) y los argumentos restantes representan datos de éxito. Este es un patrón comúnmente utilizado en la API de Node, pero no es obligatorio y puede variar dependiendo de la biblioteca o función específica. Se puede consultar la siguiente documentación de Node para más información. [Overview of Blocking vs Non-Blocking | Node.js (nodejs.org)](https://nodejs.org/en/learn/asynchronous-work/overview-of-blocking-vs-non-blocking)

---