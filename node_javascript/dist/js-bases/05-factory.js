"use strict";
/* los Factory Functions podría ser algo intermedio en JavaScript pero sería necesario si queremos implementar algún tipo de arquitectura en aplicaciones de JavaScript que aunque JavaScript sea débilmente tipado, podemos aplicar arquitectura de software para hacer que nuestra aplicación sea tolerante a cambios, facilmente de expandir y escalar, etc */
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildMakePerson = void 0;
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
exports.buildMakePerson = buildMakePerson;
