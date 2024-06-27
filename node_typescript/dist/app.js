"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
const hero_service_1 = require("./services/hero.service");
const hero1 = (0, hero_service_1.findHeroById)(3);
const hero2 = (0, hero_service_1.findHeroById)(1);
console.log((_a = hero1 === null || hero1 === void 0 ? void 0 : hero1.name) !== null && _a !== void 0 ? _a : "Hero not found");
console.log((_b = hero2 === null || hero2 === void 0 ? void 0 : hero2.name) !== null && _b !== void 0 ? _b : "Hero not found");
