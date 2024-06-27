"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildLogger = exports.httpClient = exports.getAge = exports.getUUID = void 0;
var get_id_plugin_1 = require("./get-id.plugin");
Object.defineProperty(exports, "getUUID", { enumerable: true, get: function () { return get_id_plugin_1.getUUID; } });
var get_age_plugin_1 = require("./get-age.plugin");
Object.defineProperty(exports, "getAge", { enumerable: true, get: function () { return get_age_plugin_1.getAge; } });
var http_client_plugin_1 = require("./http-client.plugin");
Object.defineProperty(exports, "httpClient", { enumerable: true, get: function () { return http_client_plugin_1.httpClientPlugin; } });
var logger_plugin_1 = require("./logger.plugin");
Object.defineProperty(exports, "buildLogger", { enumerable: true, get: function () { return logger_plugin_1.buildLogger; } });
/* En ES6 se puede exportar directamente sin ningún tipo de import previo porque cuando se hace por ejemplo "export { getAge } from "./get-age.plugin";" lo que se está haciendo en realidad es reexportar, es decir, se está importando y exportando en una sola línea. Esta es una característica de ES6 que permite hacer las cosas de manera un poco más directa, no es que no se esté haciendo un import, sino que se está haciendo de manera implícita */ 
