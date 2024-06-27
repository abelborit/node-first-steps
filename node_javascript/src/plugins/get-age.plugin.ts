/* get-age no tiene archivo de definición de tipos y no está hecho en TypeScript */
// const getAgePlugin = require("get-age");

export const getAge = (birthdate: string) => {
  if (!birthdate) return new Error("birthdate is required");

  // return getAgePlugin(birthdate);
  return new Date().getFullYear() - new Date(birthdate).getFullYear();
};
