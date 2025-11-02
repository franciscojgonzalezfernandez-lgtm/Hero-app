import type { Hero } from "../types/hero.interface";
import { HeroGridCard } from "./HeroGridCard";

interface HeroGridProps {
  heroes: Hero[];
  className?: string;
}

export const HeroGrid = ({ heroes, className }: HeroGridProps) => {
  if (!heroes) {
    return (
      <h2>
        Loading... APIs could be turning on because they are in a free hosting
        plattform
      </h2>
    );
  }
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8 ${className}`}
    >
      {heroes &&
        heroes.map((hero) => {
          return <HeroGridCard key={hero.id} hero={hero} />;
        })}
    </div>
  );
};
