import { describe, test, expect } from "@jest/globals";
import { httpClientPlugin } from "../../src/plugins/http-client.plugin";

describe("plugins/http-client.plugin.ts", () => {
  const url = "https://jsonplaceholder.typicode.com/todos/1";

  test("httpClientPlugin should return a string", async () => {
    const dataFetch = await httpClientPlugin.get(url);

    expect(dataFetch).toEqual({
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      // completed: false,
      completed: expect.any(Boolean), // por si queremos corroborar que venga un boolean no importando si es true o false
    });
  });

  test("httpClientPlugin should have POST, PUT, DELETE methods", async () => {
    // console.log(httpClientPlugin);

    /* corroborar que cada método sea una función */
    expect(typeof httpClientPlugin.post).toBe("function");
    expect(typeof httpClientPlugin.put).toBe("function");
    expect(typeof httpClientPlugin.delete).toBe("function");

    /* corroborar que tenga los métodos necesarios */
    expect(httpClientPlugin).toHaveProperty("post");
    expect(httpClientPlugin).toHaveProperty("put");
    expect(httpClientPlugin).toHaveProperty("delete");
  });
});
