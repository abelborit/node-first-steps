"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpClientPlugin = void 0;
const axios_1 = __importDefault(require("axios"));
exports.httpClientPlugin = {
    get: (url) => __awaiter(void 0, void 0, void 0, function* () {
        const { data } = yield axios_1.default.get(url);
        return data;
        // const resp = await fetch(url);
        // return await resp.json();
    }),
    post: (url, body) => __awaiter(void 0, void 0, void 0, function* () { }),
    put: (url, body) => __awaiter(void 0, void 0, void 0, function* () { }),
    delete: (url) => __awaiter(void 0, void 0, void 0, function* () { }),
};
/*
El uso de una clase para implementar el patrón adaptador en lugar de un solo objeto como "httpClientPlugin" depende principalmente de la situación y las necesidades del proyecto en particular.

El enfoque de usar un solo objeto para el adaptador puede ser útil cuando solo necesitas una adaptación simple y no hay necesidad de crear múltiples instancias independientes del adaptador. En este caso, el adaptador cumple su función de convertir la interfaz proporcionada por la librería de terceros a una interfaz compatible con tu aplicación.

Sin embargo, si en tu aplicación tienes múltiples clientes o necesitas tener diferentes adaptadores con diferentes configuraciones, podría ser más conveniente y manejable utilizar una clase para implementar el patrón adaptador. De esta manera, cada instancia de la clase adaptador puede tener su propio estado y configuración específica para cada cliente, lo que evita la posibilidad de sobreescribir la información entre diferentes instancias de uso concurrente.

La elección entre un solo objeto o una clase para implementar el patrón adaptador depende de las necesidades y complejidad de tu proyecto específico. Si solo necesitas una adaptación simple y no hay concurrencia de múltiples clientes, el enfoque del objeto puede ser suficiente. Pero si tienes múltiples clientes con diferentes configuraciones o necesitas una mayor flexibilidad, puede ser más adecuado utilizar una clase.
*/
