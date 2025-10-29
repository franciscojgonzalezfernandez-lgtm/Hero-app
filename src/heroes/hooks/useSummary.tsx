import { useQuery } from "@tanstack/react-query";
import { getHeroesSummaryAction } from "../actions/get-summary-action";

export const useSummary = () => {
  return useQuery({
    queryKey: ["heroesSummary"],
    queryFn: () => getHeroesSummaryAction(),
    staleTime: 1000 * 60 * 5, // 5 Minutos
  });
};
