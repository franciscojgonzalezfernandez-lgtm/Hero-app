import type { Hero } from "./hero.interface";

export interface HeroesSummary {
  totalHeroes: number;
  strongestHero: Hero;
  smartestHero: Hero;
  heroCount: number;
  villainCount: number;
}
