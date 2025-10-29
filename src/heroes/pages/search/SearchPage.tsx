import { HeroHeader } from "@/components/custom/HeroHeader";
import { HeroesStats } from "@/heroes/componentes/HeroesStats";
import { SearchControls } from "./ui/SearchControls";
import { CustomBreadcrumbs } from "@/components/custom/CustomBreadcrumbs";

export const SearchPage = () => {
  return (
    <>
      <CustomBreadcrumbs
        items={[
          { title: "Home", path: "/" },
          { title: "Search", path: "/search" },
        ]}
      />
      <HeroHeader
        title="Búsqueda de héroes"
        description="Busca tu héroe favorito"
      />
      <HeroesStats />
      {/* Filters & Search*/}
      <SearchControls />
    </>
  );
};

export default SearchPage;
