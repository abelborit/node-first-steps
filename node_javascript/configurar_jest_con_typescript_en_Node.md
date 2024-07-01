# Pasos para configurar Jest con TypeScript, en Node

Documentación [oficial sobre Jest](https://jestjs.io/docs/getting-started)

1. Instalaciones de desarrollo (super test es útil para probar Express)

```
npm install -D jest @types/jest ts-jest supertest
```

2. Crear archivo de configuración de Jest (al colocar el comando habrán unos steps o pasos a realizar)

```
npx jest --init
```

  1. yes -> aunque se puede configurar manualmente
  2. yes -> para usar typescript
  3. node -> seleccionar el ambiente para hacer el test
  4. yes -> añadir reporte de cobertura o coverage
  5. v8 -> que proveedor se debería usar para la instrumentación de la cobertura? (en este caso)
  6. no -> limpiar automáticamente mock calls, instances, contexts y resultados? (ahora para conocer cómo funciona pero en lo siguiente sería un yes para limpiar automáticamente)

3. En el archivo **jest.config.js** configurar

```
preset: 'ts-jest',
testEnvironment: "jest-environment-node",

// Opcional - The paths to modules that run some code to configure or set up the testing environment before each test
// setupFiles: ['dotenv/config'],
```

4. Crear scripts en el **package.json**

```
"test": "jest",
"test:watch": "jest --watch",
"test:coverage": "jest --coverage",
```
