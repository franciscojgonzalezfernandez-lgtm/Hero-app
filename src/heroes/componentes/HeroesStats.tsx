import { Badge } from "@/components/ui/badge";
import { Users, Heart, Zap, Trophy } from "lucide-react";
import { HeroStatCard } from "./HeroStatCard";
import { useSummary } from "../hooks/useSummary";
import { FavouriteHeroContext } from "../context/favouriteHero";
import { use } from "react";

export const HeroesStats = () => {
  const { data: heroesSummary } = useSummary();
  const { favouritesCount } = use(FavouriteHeroContext);

  if (!heroesSummary) {
    return (
      <div>
        Loading... the APIs information could take 50 seconds at first because
        they're hosted in a free hosting tool.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      <HeroStatCard
        icon={<Users className="h-4 w-4 text-muted-foreground" />}
        title="Total Characters"
        body={heroesSummary?.totalHeroes.toString()}
        bodyClassName="text-2xl font-bold"
      >
        <Badge variant="secondary" className="text-xs">
          {heroesSummary?.heroCount} Heroes
        </Badge>
        <Badge variant="destructive" className="text-xs">
          {heroesSummary?.villainCount} Villains
        </Badge>
      </HeroStatCard>

      <HeroStatCard
        icon={<Heart className="h-4 w-4 text-muted-foreground" />}
        title="Favorites"
        body={favouritesCount.toString()}
        bodyClassName="text-2xl font-bold text-red-600"
        description={`${(
          (favouritesCount / heroesSummary?.totalHeroes) *
          100
        ).toFixed(2)}% of total`}
      />

      <HeroStatCard
        icon={<Zap className="h-4 w-4 text-muted-foreground" />}
        title="Strongest"
        body={heroesSummary?.strongestHero.alias}
        bodyClassName="text-lg font-bold"
        description={`Strength: ${heroesSummary?.strongestHero.strength}/10`}
      />

      <HeroStatCard
        icon={<Trophy className="h-4 w-4 text-muted-foreground" />}
        title="Smartest"
        body={heroesSummary?.smartestHero.alias}
        bodyClassName="text-lg font-bold"
        description={`Intelligent: ${heroesSummary?.smartestHero.intelligence}/10`}
      />
    </div>
  );
};
