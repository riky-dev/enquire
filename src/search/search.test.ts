import { describe, it, expect } from "vitest";
import { expandToken } from "./synonyms";
import { buildSearchIndex, stripMarkdown, buildServiceItem, buildGuideItem } from "./buildIndex";
import { searchIndex, scoreItem } from "./match";
import { staticPages } from "./types";

describe("synonyms", () => {
  it("expands bike-related tokens to bicycle-repair", () => {
    expect(expandToken("bike")).toEqual(expect.arrayContaining(["bike", "bicycle-repair", "velo"]));
    expect(expandToken("velo")).toEqual(expect.arrayContaining(["velo", "bicycle-repair"]));
  });

  it("returns the token itself when no synonyms exist", () => {
    expect(expandToken("xyzzy")).toEqual(["xyzzy"]);
  });
});

describe("stripMarkdown", () => {
  it("removes headings and link syntax", () => {
    expect(stripMarkdown("## Hello\n\nSee [docs](https://x.test)")).toBe("Hello See docs");
  });
});

describe("buildSearchIndex", () => {
  it("includes static pages plus services and guides", () => {
    const index = buildSearchIndex(
      [
        {
          id: "bouticycle",
          body: "A popular **bike** shop.",
          data: {
            title: "Bouticycle",
            category: "bicycle-repair",
            tags: ["e-bike-discounts"],
            address: "Ferney",
          },
        },
      ],
      [
        {
          id: "cern-campus-hacks",
          body: "Free bicycle safety gear on campus.",
          data: {
            title: "CERN Campus Amenities and Life Hacks",
            description: "Tips including free bike gear",
            category: "Admin",
          },
        },
      ],
    );

    expect(index.length).toBe(staticPages.length + 2);
    expect(index.find((i) => i.id === "service-bouticycle")?.href).toBe("/services/bouticycle");
    expect(index.find((i) => i.id === "guide-cern-campus-hacks")?.keywords.join(" ")).toContain(
      "bicycle",
    );
  });

  it("formats service category into keywords", () => {
    const item = buildServiceItem({
      id: "x",
      data: { title: "X", category: "bicycle-repair", tags: [] },
    });
    expect(item.keywords).toEqual(expect.arrayContaining(["bicycle-repair", "Bicycle Repair"]));
    expect(item.category).toBe("Bicycle Repair");
    expect(item.subtitle).toBe("Bicycle Repair");
  });

  it("indexes guide description", () => {
    const item = buildGuideItem({
      id: "y",
      data: { title: "Y", description: "visa tips", category: "Admin" },
    });
    expect(item.keywords).toContain("visa tips");
    expect(item.subtitle).toBe("visa tips");
    expect(item.category).toBe("Admin");
  });
});

describe("searchIndex", () => {
  const index = buildSearchIndex(
    [
      {
        id: "bouticycle",
        body: "Bike shop with e-bike discounts.",
        data: {
          title: "Bouticycle",
          category: "bicycle-repair",
          tags: ["e-bike-discounts"],
        },
      },
      {
        id: "le-barbier-du-coin",
        body: "A barber shop.",
        data: {
          title: "Le Barbier du Coin",
          category: "barbers",
          tags: [],
        },
      },
    ],
    [
      {
        id: "cern-campus-hacks",
        body: "If you rent a bicycle from CERN, helmets are mandatory.",
        data: {
          title: "CERN Campus Amenities and Life Hacks",
          description: "Tips for free bike gear",
          category: "Admin",
        },
      },
    ],
  );

  it("finds bicycle services and guides via synonym bike", () => {
    const results = searchIndex(index, "bike");
    const hrefs = results.map((r) => r.href);
    expect(hrefs).toContain("/services/bouticycle");
    expect(hrefs).toContain("/guides/cern-campus-hacks");
    expect(hrefs).not.toContain("/services/le-barbier-du-coin");
  });

  it("finds static pages by title", () => {
    const results = searchIndex(index, "suggest");
    expect(results.some((r) => r.href === "/suggest")).toBe(true);
  });

  it("returns empty for blank query", () => {
    expect(searchIndex(index, "   ")).toEqual([]);
  });

  it("scores title matches higher than body matches", () => {
    const bouticycle = index.find((i) => i.id === "service-bouticycle")!;
    const campus = index.find((i) => i.id === "guide-cern-campus-hacks")!;
    expect(scoreItem(bouticycle, "bouticycle")).toBeGreaterThan(scoreItem(campus, "bouticycle"));
  });
});
