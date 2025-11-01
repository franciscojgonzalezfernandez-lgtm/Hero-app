import { describe, expect, test } from "vitest";
import { heroApi } from "../../api/hero.api";
import { getHeroBySlugAction } from "../get-hero-by-slug.action";
const BASE_URL = import.meta.env.VITE_API_URL;

describe("Get Hero action:", () => {
  test("Should fetch Hero data and return with complete image URL:", async () => {
    const result = await getHeroBySlugAction("clark-kent");
    console.log(result);
    expect(result).toBeDefined();
    expect(result).toStrictEqual({
      id: "1",
      name: "Clark Kent",
      slug: "clark-kent",
      alias: "Superman",
      powers: [
        "Super strength",
        "Flight",
        "Heat vision",
        "X-ray vision",
        "Invulnerability",
        "Super speed",
      ],
      description:
        "The Last Son of Krypton, protector of Earth and symbol of hope for all humanity.",
      strength: 10,
      intelligence: 8,
      speed: 9,
      durability: 10,
      team: "Justice League",
      image: "http://localhost:3001/images/1.jpeg",
      firstAppearance: "1938",
      status: "Active",
      category: "Hero",
      universe: "DC",
    });
    expect(result.image).toContain(BASE_URL);
  });

  test("Should throw an error if hero is not found", async () => {
    const result = await getHeroBySlugAction("clark-kent-error").catch(
      (reason) => {
        expect(reason).toBeDefined();
        expect(reason.code).toBe("ERR_BAD_REQUEST");
      }
    );
    expect(result).toBeUndefined();
  });
});
