import { heroApi } from "../api/hero.api";
import type { HeroesResponse } from "../types/get-heroes-response";

const BASE_URL = import.meta.env.VITE_API_URL;

type validCategory = "hero" | "villain" | "all";

const getCategoryBasedOnTab = (tab: string): validCategory => {
  switch (tab) {
    case "heroes":
      return "hero";
    case "villains":
      return "villain";
  }
  return "all";
};

export const getHeroesByPageAction = async (
  page: number = 1,
  limit: number = 6,
  category: string = "all"
): Promise<HeroesResponse> => {
  if (isNaN(page)) {
    page = 1;
  }
  if (isNaN(limit)) {
    limit = 6;
  }
  const { data } = await heroApi.get<HeroesResponse>(`/`, {
    params: {
      limit: limit,
      offset: limit * (page - 1),
      category: getCategoryBasedOnTab(category),
    },
  });

  //Data mapping.
  const heroes = data.heroes.map((hero) => ({
    ...hero,
    image: `${BASE_URL}/images/${hero.image}`,
  }));

  return { ...data, heroes };
};
