import { findHeroById } from "./services/hero.service";

const hero1 = findHeroById(3);
const hero2 = findHeroById(1);

console.log(hero1?.name ?? "Hero not found");
console.log(hero2?.name ?? "Hero not found");
