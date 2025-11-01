import { describe, expect, test, expectTypeOf } from "vitest";
import { getHeroesSummaryAction } from "../get-summary-action";
import type { HeroesSummary } from "@/heroes/types/get-summary-response";

describe("Get summary action", () => {
  test("Should fetch the summary data & return the right structure:", async () => {
    const result = await getHeroesSummaryAction();
    expectTypeOf(result).toMatchObjectType<HeroesSummary>();
  });
});
