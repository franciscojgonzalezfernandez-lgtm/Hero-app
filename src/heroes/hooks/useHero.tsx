import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import { getHeroBySlugAction } from "../actions/get-hero-by-slug.action";

export const useHero = () => {
  const { idSlug = "" } = useParams();
  return useQuery({
    queryKey: ["heroe", idSlug],
    queryFn: () => getHeroBySlugAction(idSlug),
    staleTime: 1000 * 60 * 5, // 5 Minutos
  });
};
