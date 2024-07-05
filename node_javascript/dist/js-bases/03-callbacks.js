"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserByIdCallback = getUserByIdCallback;
const users = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Doe" },
];
// function getUserByIdCallback(id: number, callback: Function) {
function getUserByIdCallback({ id, callback }) {
    const user = users.find(function (user) {
        return user.id === id;
    });
    if (!user) {
        /* código no bloqueante porque está dentro de un timeout simulando una petición http (solo se colocó para ver la funcionalidad del argumento que se le suele llamar "done" dentro del archivo del test) */
        // setTimeout(() => {
        //   return callback(`User not found with id ${id}`, null);
        // }, 2000);
        // return;
        /* código bloqueante porque son secuencias */
        return callback(`User not found with id ${id}`, null);
    }
    return callback(null, user);
}
