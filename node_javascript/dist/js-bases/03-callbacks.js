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
        return callback(`User not found with id ${id}`, null);
    }
    return callback(null, user);
}
