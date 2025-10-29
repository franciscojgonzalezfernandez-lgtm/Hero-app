import type { Hero } from "../types/hero.interface";
import { HeroGridCard } from "./HeroGridCard";

interface HeroGridProps {
  heroes: Hero[];
}

export const HeroGrid = ({ heroes, className }: HeroGridProps) => {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8 ${className}`}
    >
      {heroes &&
        heroes.map((myHero) => <HeroGridCard key={myHero.id} hero={myHero} />)}
    </div>
  );
};
