import {
  getHeroesBySearchAction,
  type Status,
} from "@/heroes/actions/get-heroes-by-search.action";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router";

export const useSearch = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category") || undefined;
  const name = searchParams.get("name") || undefined;
  const team = searchParams.get("team") || undefined;
  const universe = searchParams.get("universe") || undefined;
  const status: Status = searchParams.get("status") || undefined;
  const strength = searchParams.get("strength") || undefined;

  return useQuery({
    queryKey: [
      "searchHero",
      { name, category, team, universe, status, strength },
    ],
    queryFn: () =>
      getHeroesBySearchAction({
        name,
        category,
        team,
        universe,
        status,
        strength,
      }),
    staleTime: 1000 * 60 * 5, // 5 Minutos
    retry: false,
  });
};
