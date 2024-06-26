/* los Factory Functions podría ser algo intermedio en JavaScript pero sería necesario si queremos implementar algún tipo de arquitectura en aplicaciones de JavaScript que aunque JavaScript sea débilmente tipado, podemos aplicar arquitectura de software para hacer que nuestra aplicación sea tolerante a cambios, facilmente de expandir y escalar, etc */

/* un Factory Function es una función que se utilizan para crear y devolver objetos. En este caso es un poco más avanzado que utiliza una técnica conocida como "closure" ya que es una función que crea una función y esta crea y retorna un objeto. Esto nos va a habilitar que podamos aplicar patrones de arquitectura en JavaScript sin TypeScript */

// const { getAge, getUUID } = require("../plugins");

/* algunos dicen que se podría crear mediante una clase, pero el tema es que ya la mayoría de personas están acostumbradas a trabajar con funciones y que también las funciones son más rápidas que la generación de las instancias de clases, etc */

/* aquí se está pasando como props las dependencias de las funciones externas creadas de "getUUID, getAge" para que este archivo (también llamado entidad según otros patrones de diseño) no tenga dependencias de algo externo */

/* Este patrón es muy útil en situaciones donde necesitas crear múltiples instancias de un objeto con una lógica común pero deseas mantener la flexibilidad para cambiar las funciones auxiliares (como getUUID y getAge). También mejora la claridad y mantenimiento del código al separar las responsabilidades y reutilizar funciones de utilidad. También es posible hacerlo de forma directa pasando todos los parámetros necesarios a una única función ({ getUUID, getAge, name, birthdate }). La principal diferencia es que no se encapsula la lógica de creación en una función interna, lo que puede hacer que el código sea un poco menos modular pero más simple */
const buildMakePerson = ({ getUUID, getAge }) => {
  /* la función buildMakePerson está retornando una función que retorna un objeto */
  return ({ name, birthdate }) => {
    return {
      id: getUUID(),
      name: name,
      birthdate: birthdate,
      age: getAge(birthdate),
    };
  };
};

module.exports = {
  buildMakePerson,
};
