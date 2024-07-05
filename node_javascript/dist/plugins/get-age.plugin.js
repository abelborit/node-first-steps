"use strict";
/* get-age no tiene archivo de definición de tipos y no está hecho en TypeScript */
// const getAgePlugin = require("get-age");
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAge = void 0;
const getAge = (birthdate) => {
    if (!birthdate)
        return new Error("birthdate is required");
    // console.log({ currentYear: new Date().getFullYear() });
    // return getAgePlugin(birthdate);
    return new Date().getFullYear() - new Date(birthdate).getFullYear();
};
exports.getAge = getAge;
