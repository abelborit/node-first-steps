"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildLogger = exports.logger = void 0;
const winston_1 = require("winston");
const { combine, timestamp, json } = winston_1.format;
/* https://betterstack.com/community/guides/logging/how-to-install-setup-and-use-winston-and-morgan-to-log-node-js-applications/#configuring-transports-in-winston */
/* https://github.com/winstonjs/winston?tab=readme-ov-file#formats */
const errorFilter = (0, winston_1.format)((info, opts) => {
    return info.level === "error" ? info : false;
});
const infoFilter = (0, winston_1.format)((info, opts) => {
    return info.level === "info" ? info : false;
});
exports.logger = (0, winston_1.createLogger)({
    level: "info",
    // defaultMeta: { service: 'user-service' }, // si se tiene problemas en el test y esta línea está descomentada, entonces en este caso en particular, para que la prueba funcione, ésta línea tiene que estar comentada porque sino el valor de service que se establece en las funciones de log se sobrescribe por un valor por defecto, lo que hace que la prueba no funcione como esperamos
    format: combine(timestamp(), json()),
    transports: [
        //
        // - Write all logs with importance level of `error` or less to `error.log`
        // - Write all logs with importance level of `info` or less to `combined.log`
        //
        new winston_1.transports.File({ filename: "combined.log" }),
        new winston_1.transports.File({
            filename: "error.log",
            level: "error",
            format: combine(errorFilter(), timestamp(), json()),
        }),
        new winston_1.transports.File({
            filename: "info.log",
            level: "info",
            format: combine(infoFilter(), timestamp(), json()),
        }),
    ],
});
/* para que los nuevos logs también aparezcan en la consola muy aparte de los archivos que se crean y actualizan con cada log agregado. Se podría hacer una validación con variables de entorno que use el proyecto para saber si estoy en desarollo o producción */
exports.logger.add(new winston_1.transports.Console({
    format: winston_1.format.simple(),
}));
const buildLogger = (service) => {
    return {
        log: (message) => {
            exports.logger.log("info", { message, service });
        },
        error: (message) => {
            exports.logger.error("error", { message, service });
        },
    };
};
exports.buildLogger = buildLogger;
