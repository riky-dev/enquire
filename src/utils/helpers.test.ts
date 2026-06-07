import { describe, it, expect } from "vitest";
import {
  formatCategory,
  formatDate,
  formatWebsite,
  hasEnglishSpoken,
  groupGuidesByCategory,
} from "./helpers";

describe("Helper Functions", () => {
  describe("formatCategory", () => {
    it("should look up categories from the dictionary", () => {
      expect(formatCategory("barbers")).toBe("Barbers");
      expect(formatCategory("bicycle-repair")).toBe("Bicycle Repair");
    });

    it("should format unknown categories nicely", () => {
      expect(formatCategory("dentist-services")).toBe("Dentist Services");
      expect(formatCategory("school")).toBe("School");
    });

    it("should accept custom categories dictionary", () => {
      const custom = { test: "Test Category" };
      expect(formatCategory("test", custom)).toBe("Test Category");
      expect(formatCategory("other-thing", custom)).toBe("Other Thing");
    });
  });

  describe("formatDate", () => {
    it("should format valid ISO dates into US long dates", () => {
      expect(formatDate("2026-06-07")).toBe("June 7, 2026");
      expect(formatDate("2026-12-25T10:00:00Z")).toBe("December 25, 2026");
    });

    it("should return Invalid Date for invalid date inputs", () => {
      expect(formatDate("not-a-date")).toBe("Invalid Date");
    });
  });

  describe("formatWebsite", () => {
    it("should return undefined if website is empty or undefined", () => {
      expect(formatWebsite()).toBeUndefined();
      expect(formatWebsite("")).toBeUndefined();
    });

    it("should prepending https:// if missing", () => {
      expect(formatWebsite("example.com")).toBe("https://example.com");
      expect(formatWebsite("http://example.com")).toBe("http://example.com");
      expect(formatWebsite("https://example.com")).toBe("https://example.com");
    });
  });

  describe("hasEnglishSpoken", () => {
    it("should identify English in languages list case insensitively", () => {
      expect(hasEnglishSpoken(["French", "English"])).toBe(true);
      expect(hasEnglishSpoken(["french", "english", "german"])).toBe(true);
      expect(hasEnglishSpoken(["ENGLISH"])).toBe(true);
    });

    it("should return false if English is not in the list", () => {
      expect(hasEnglishSpoken(["French", "Spanish"])).toBe(false);
      expect(hasEnglishSpoken([])).toBe(false);
    });
  });

  describe("groupGuidesByCategory", () => {
    it("should group guides by category", () => {
      const mockGuides = [
        { id: "g1", data: { category: "Housing", title: "Guide 1" } },
        { id: "g2", data: { category: "Admin", title: "Guide 2" } },
        { id: "g3", data: { category: "Housing", title: "Guide 3" } },
      ];
      const categories = ["Housing", "Admin", "Getting Here"] as const;

      const grouped = groupGuidesByCategory(mockGuides, categories);

      expect(grouped["Housing"]).toHaveLength(2);
      expect(grouped["Housing"][0].id).toBe("g1");
      expect(grouped["Housing"][1].id).toBe("g3");
      expect(grouped["Admin"]).toHaveLength(1);
      expect(grouped["Admin"][0].id).toBe("g2");
      expect(grouped["Getting Here"]).toHaveLength(0);
    });
  });
});
