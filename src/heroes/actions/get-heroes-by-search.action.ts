import { heroApi } from "../api/hero.api";
import type { Hero } from "../types/hero.interface";

const BASE_URL = import.meta.env.VITE_API_URL;

export type Status = "Active" | "No active" | undefined;

interface Options {
  name?: string;
  team?: string;
  universe?: string;
  category?: string;
  status?: Status;
  strength?: string;
}

export const getHeroesBySearchAction = async ({
  name,
  team,
  universe,
  category,
  status,
  strength,
}: Options): Promise<Hero[]> => {
  if (!name && !team && !universe && !category && !status && !strength) {
    return [];
  }
  const { data } = await heroApi.get<Hero[]>(`/search`, {
    params: {
      name,
      team,
      universe,
      category,
      status,
      strength,
    },
  });

  //Data mapping.
  const heroes = data.map((hero) => ({
    ...hero,
    image: `${BASE_URL}/images/${hero.image}`,
  }));

  return heroes;
};
