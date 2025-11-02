import { use, useEffect, useMemo } from "react";
import { Heart } from "lucide-react";
import { useSearchParams } from "react-router";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { HeroHeader } from "@/components/custom/HeroHeader";
import { HeroesStats } from "@/heroes/componentes/HeroesStats";
import { HeroGrid } from "@/heroes/componentes/HeroGrid";
import { Pagination } from "@/components/custom/Pagination";
import { CustomBreadcrumbs } from "@/components/custom/CustomBreadcrumbs";
import { useSummary } from "@/heroes/hooks/useSummary";
import { usePaginatedHeroes } from "@/heroes/hooks/usePaginatedHeroes";
import { FavouriteHeroContext } from "@/heroes/context/favouriteHero";
export const HomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { favouritesCount, favourites } = use(FavouriteHeroContext);

  useEffect(() => {
    if (!searchParams.get("tab")) {
      setSearchParams({ tab: "all" });
    }
  }, [searchParams]);

  const activeTab = searchParams.get("tab") ?? "";
  const page = searchParams.get("page") ?? "1";
  const limit = searchParams.get("limit") ?? "6";
  /* Ensure the correct behaviour of tabs. */
  const securedTab = useMemo(() => {
    const validTabs = ["all", "favorites", "heroes", "villains"];
    return validTabs.includes(activeTab) ? activeTab : "all";
  }, [activeTab]);

  const { data: heroesResponse } = usePaginatedHeroes({
    page: +page,
    limit: +limit,
    category: securedTab,
  });

  const { data: heroesSummary } = useSummary();

  return (
    <>
      <>
        <CustomBreadcrumbs items={[{ title: "Home", path: "/" }]} />
        {/* Header */}
        <HeroHeader
          title="Superhero Universe"
          description="Discover, explore, and manage your favorite superheroes and villains"
        />

        {/* Stats Dashboard */}
        <HeroesStats />

        {/* Tabs */}
        <Tabs value={securedTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger
              onClick={() =>
                setSearchParams((prev) => {
                  prev.set("tab", "all");
                  prev.set("page", "1");
                  return prev;
                })
              }
              value="all"
            >
              All Characters ({heroesSummary?.totalHeroes})
            </TabsTrigger>
            <TabsTrigger
              onClick={() =>
                setSearchParams((prev) => {
                  prev.set("tab", "favorites");
                  return prev;
                })
              }
              value="favorites"
              className="flex items-center gap-2"
            >
              <Heart className="h-4 w-4" />
              Favorites ({favouritesCount})
            </TabsTrigger>
            <TabsTrigger
              onClick={() =>
                setSearchParams((prev) => {
                  prev.set("tab", "heroes");
                  prev.set("page", "1");
                  return prev;
                })
              }
              value="heroes"
            >
              Heroes ({heroesSummary?.heroCount})
            </TabsTrigger>
            <TabsTrigger
              onClick={() =>
                setSearchParams((prev) => {
                  prev.set("tab", "villains");
                  prev.set("page", "1");
                  return prev;
                })
              }
              value="villains"
            >
              Villains ({heroesSummary?.villainCount})
            </TabsTrigger>
          </TabsList>
          <TabsContent value="all">
            <HeroGrid heroes={heroesResponse?.heroes || []} />
          </TabsContent>
          <TabsContent value="favorites">
            <h1>Favorites</h1>
            <HeroGrid heroes={favourites} />
          </TabsContent>
          <TabsContent value="heroes">
            <HeroGrid heroes={heroesResponse?.heroes || []} />
          </TabsContent>
          <TabsContent value="villains">
            <HeroGrid heroes={heroesResponse?.heroes || []} />
          </TabsContent>
        </Tabs>

        {/* Pagination */}
        {securedTab !== "favorites" && (
          <Pagination totalPages={heroesResponse?.pages ?? 0} />
        )}
      </>
    </>
  );
};
