export const emailTemplate = `
  <div>
    <h1>Hi, {{name}}</h1>
    <p>Thank you for your order.</p>
    <p>Order ID: {{orderId}}</p>
  </div>
`;

/* se pasará al app.js para poder visualizarlo desde ahí y para eso hay que exportar el módulo (archivo js / objeto encapsulado) */
// console.log(emailTemplate);
