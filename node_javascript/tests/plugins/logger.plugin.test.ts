import { describe, test, expect, jest } from "@jest/globals";
import {
  buildLogger,
  logger as winstonLogger,
} from "../../src/plugins/logger.plugin";

describe("plugins/logger.plugin.ts", () => {
  test("buildLogger should return a function logger", () => {
    const logger = buildLogger("test");

    expect(typeof logger.log).toBe("function");
    expect(typeof logger.error).toBe("function");
  });

  test("logger.log should log a message", () => {
    /* aquí solo se está espiando y no se está regresando nada (muy aparte que solo regresaría undefined porque no hay ningún return en la función) */
    const winstonLoggerMock = jest.spyOn(winstonLogger, "log");
    const message = "test message";
    const service = "test service";

    const logger = buildLogger(service);

    logger.log(message);

    expect(winstonLoggerMock).toHaveBeenCalledWith(
      "info",
      /* que contenga al menos esa información, lo demás que venga no hay problema, pero como mínimo que venga con eso */
      expect.objectContaining({
        level: "info",
        message,
        service,
      })
    );
  });
});
