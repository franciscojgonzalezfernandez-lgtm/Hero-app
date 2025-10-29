import { createContext, useEffect, useState } from "react";
import type { Hero } from "../types/hero.interface";
import * as z from "zod";

interface FavouriteHeroContext {
  //State

  favourites: Hero[];
  favouritesCount: number;

  //Methods
  isFavourite: (hero: Hero) => boolean;
  toggleFavourite: (hero: Hero) => void;
}

// eslint-disable-next-line react-refresh/only-export-components
export const FavouriteHeroContext = createContext({} as FavouriteHeroContext);

/* Validación del esquema de un héroe */

export const heroSchema = z.object({
  id: z.string(),
  alias: z.string(),
  powers: z.array(z.string()),
  description: z.string(),
  strength: z.number(),
  intelligence: z.number(),
  speed: z.number(),
  durability: z.number(),
  team: z.string(),
  image: z.string(),
  firstAppearance: z.string(),
  status: z.string(),
  category: z.string(),
  universe: z.string(),
  name: z.string(),
  slug: z.string(),
});

// eslint-disable-next-line react-refresh/only-export-components
export const heroArraySchema = z.array(heroSchema);

const getFavouritesFromLocalStorage = (): Hero[] => {
  const favourites = localStorage.getItem("heroesFavoritesFromJavi");

  if (!favourites) return [];

  try {
    const parsed = JSON.parse(favourites);
    const result = heroArraySchema.safeParse(parsed);
    if (result.success) {
      return result.data;
    } else {
      console.error("Invalid heroes data in localStorage", result.error);
      return [];
    }
  } catch (error) {
    console.error("Error parsing localStorage heroes:", error);
    return [];
  }
};

export const FavouriteHeroProvider = ({
  children,
}: React.PropsWithChildren) => {
  const [favourites, setFavourites] = useState<Hero[]>(
    getFavouritesFromLocalStorage()
  );

  const isFavourite = (hero: Hero) => {
    return favourites.some((h) => h.id === hero.id);
  };

  const toggleFavourite = (hero: Hero) => {
    if (favourites.includes(hero)) {
      const myNewFavourites = favourites.filter(
        (favourite) => favourite.alias !== hero.alias
      );
      setFavourites([...myNewFavourites]);
    } else {
      setFavourites([...favourites, hero]);
    }
  };

  useEffect(() => {
    localStorage.setItem("heroesFavoritesFromJavi", JSON.stringify(favourites));
  }, [favourites]);

  return (
    <FavouriteHeroContext.Provider
      value={{
        // State
        favourites: favourites,
        favouritesCount: favourites.length,
        // Methods
        isFavourite,
        toggleFavourite,
      }}
    >
      {children}
    </FavouriteHeroContext.Provider>
  );
};

export default FavouriteHeroProvider;
