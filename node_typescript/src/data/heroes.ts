interface HeroInterface {
  id: number;
  name: string;
  owner: "DC" | "Marvel";
}

export const heroes: HeroInterface[] = [
  {
    id: 1,
    name: "Ironman",
    owner: "Marvel",
  },
  {
    id: 2,
    name: "Spiderman",
    owner: "Marvel",
  },
  {
    id: 3,
    name: "Batman",
    owner: "DC",
  },
];
