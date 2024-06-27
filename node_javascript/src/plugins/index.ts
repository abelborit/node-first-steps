export { getUUID } from "./get-id.plugin";
export { getAge } from "./get-age.plugin";

export { httpClientPlugin as httpClient } from "./http-client.plugin";

export { buildLogger } from "./logger.plugin";

/* En ES6 se puede exportar directamente sin ningún tipo de import previo porque cuando se hace por ejemplo "export { getAge } from "./get-age.plugin";" lo que se está haciendo en realidad es reexportar, es decir, se está importando y exportando en una sola línea. Esta es una característica de ES6 que permite hacer las cosas de manera un poco más directa, no es que no se esté haciendo un import, sino que se está haciendo de manera implícita */