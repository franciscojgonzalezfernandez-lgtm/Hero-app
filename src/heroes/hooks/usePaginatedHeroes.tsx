import { useQuery } from "@tanstack/react-query";
import { getHeroesByPageAction } from "../actions/get-heroes-by-page.action";

interface paginatedHeroesProps {
  page: number;
  limit: number;
  category: string;
}

export const usePaginatedHeroes = ({
  page,
  limit,
  category = "all",
}: paginatedHeroesProps) => {
  return useQuery({
    queryKey: ["heroes", { page, limit, category }],
    queryFn: () => getHeroesByPageAction(+page, +limit, category),
    staleTime: 1000 * 60 * 5, // 5 Minutos
  });
};
