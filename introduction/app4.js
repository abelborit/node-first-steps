/* Event Loop y Node execution */
/*
  - https://nodejs.org/en/learn/asynchronous-work/event-loop-timers-and-nexttick
  - https://www.builder.io/blog/visual-guide-to-nodejs-event-loop
  - https://dev.to/lydiahallie/series/3341
  - https://www.lydiahallie.com/blog/event-loop
  - https://docs.libuv.org/en/v1.x/guide/basics.html
*/

console.log("Inicio de programa");

setTimeout(() => {
  console.log("Primer Timeout");
}, 2000);

setTimeout(() => {
  console.log("Segundo Timeout");
}, 0);

setTimeout(() => {
  console.log("Tercer Timeout");
}, 1); // si se coloca más de 1 entonces este log se ejecuta después del cuarto TimeOut, si se coloca 1 entonces se ejecuta en el orden en el que está, es decir, después del Segundo Timeout en este caso. Esto sucede porque al ser tan pequeño la fracción de 1 milisegundo y al ser entrado al call stack de libuv entonces en un determinado momento se actualizan todos los tiempos y como el tercero y cuarto timeout ya estarían en 0 pero el tercero entró antes, entonces se aplica el Last In / First Out, y por eso cuando se coloca 1 milisegundo se ejecuta primero el tercer timeout. Aunque puede ser un poco incongruente ese procedimiento, eso es lo que sucede

setTimeout(() => {
  console.log("Cuarto Timeout");
}, 0);

console.log("Fin de programa");
