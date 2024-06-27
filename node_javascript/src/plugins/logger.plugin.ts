import { createLogger, format, transports } from "winston";
const { combine, timestamp, json } = format;

/* https://betterstack.com/community/guides/logging/how-to-install-setup-and-use-winston-and-morgan-to-log-node-js-applications/#configuring-transports-in-winston */
/* https://github.com/winstonjs/winston?tab=readme-ov-file#formats */
const errorFilter = format((info, opts) => {
  return info.level === "error" ? info : false;
});

const infoFilter = format((info, opts) => {
  return info.level === "info" ? info : false;
});

const logger = createLogger({
  level: "info",
  // defaultMeta: { service: 'user-service' },
  format: combine(timestamp(), json()),
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    new transports.File({ filename: "combined.log" }),
    new transports.File({
      filename: "error.log",
      level: "error",
      format: combine(errorFilter(), timestamp(), json()),
    }),
    new transports.File({
      filename: "info.log",
      level: "info",
      format: combine(infoFilter(), timestamp(), json()),
    }),
  ],
});

/* para que los nuevos logs también aparezcan en la consola muy aparte de los archivos que se crean y actualizan con cada log agregado. Se podría hacer una validación con variables de entorno que use el proyecto para saber si estoy en desarollo o producción */
logger.add(
  new transports.Console({
    format: format.simple(),
  })
);

interface BuildLoggerInterface {
  log: (message: string) => void;
  error: (message: string) => void;
}

export const buildLogger = (service: string): BuildLoggerInterface => {
  return {
    log: (message: string): void => {
      logger.log("info", { message, service });
    },
    error: (message: string): void => {
      logger.error("error", { message, service });
    },
  };
};
