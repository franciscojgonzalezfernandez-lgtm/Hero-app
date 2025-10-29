import { heroApi } from "../api/hero.api";
import type { HeroesSummary } from "../types/get-summary-response";

export const getHeroesSummaryAction = async (): Promise<HeroesSummary> => {
  const { data } = await heroApi.get<HeroesSummary>(`/summary`);
  return data;
};
