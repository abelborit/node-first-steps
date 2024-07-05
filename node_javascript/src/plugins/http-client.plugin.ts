import axios from "axios";

export const httpClientPlugin = {
  get: async (url: string) => {
    /* Async / Await y axios */
    const { data } = await axios.get(url);
    return data;

    /* Async / Await */
    // const resp = await fetch(url);
    // return await resp.json();
  },

  /* como aún no se tiene un cuerpo en las funciones entonces se pueden comentar o sino colocar un error de que no está implementado aún */
  post: async (url: string, body: any) => {
    throw new Error("Not implemented yet");
  },

  put: async (url: string, body: any) => {
    throw new Error("Not implemented yet");
  },

  delete: async (url: string) => {
    throw new Error("Not implemented yet");
  },
};

/*
El uso de una clase para implementar el patrón adaptador en lugar de un solo objeto como "httpClientPlugin" depende principalmente de la situación y las necesidades del proyecto en particular.

El enfoque de usar un solo objeto para el adaptador puede ser útil cuando solo necesitas una adaptación simple y no hay necesidad de crear múltiples instancias independientes del adaptador. En este caso, el adaptador cumple su función de convertir la interfaz proporcionada por la librería de terceros a una interfaz compatible con tu aplicación.

Sin embargo, si en tu aplicación tienes múltiples clientes o necesitas tener diferentes adaptadores con diferentes configuraciones, podría ser más conveniente y manejable utilizar una clase para implementar el patrón adaptador. De esta manera, cada instancia de la clase adaptador puede tener su propio estado y configuración específica para cada cliente, lo que evita la posibilidad de sobreescribir la información entre diferentes instancias de uso concurrente.

La elección entre un solo objeto o una clase para implementar el patrón adaptador depende de las necesidades y complejidad de tu proyecto específico. Si solo necesitas una adaptación simple y no hay concurrencia de múltiples clientes, el enfoque del objeto puede ser suficiente. Pero si tienes múltiples clientes con diferentes configuraciones o necesitas una mayor flexibilidad, puede ser más adecuado utilizar una clase.
*/
