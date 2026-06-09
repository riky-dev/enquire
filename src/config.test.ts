import { describe, it, expect, vi } from "vitest";
import { z } from "zod";

// Mock astro modules before importing config
vi.mock("astro:content", () => ({
  defineCollection: vi.fn((config) => config),
}));

vi.mock("astro/loaders", () => ({
  glob: vi.fn(() => ({})),
}));

import { collections } from "./content.config";

describe("Content Schemas", () => {
  describe("Services Schema", () => {
    const serviceSchema = collections.services.schema as any;

    it("should validate a correct service entry", () => {
      const validService = {
        title: "Bouticycle",
        category: "bicycle-repair",
        address: "12 Rue de Genève, 01210 Ferney-Voltaire, France",
        languages: ["French", "English"],
        tags: ["friendly", "professional"],
        phone: "+33 4 50 40 50 60",
        website: "https://bouticycle.com",
      };

      const result = serviceSchema.safeParse(validService);
      expect(result.success).toBe(true);
    });

    it("should reject a service missing required fields", () => {
      const invalidService = {
        title: "Bouticycle",
      };

      const result = serviceSchema.safeParse(invalidService);
      expect(result.success).toBe(false);
      if (!result.success) {
        const paths = (result.error as z.ZodError).issues.map((e) => e.path[0]);
        expect(paths).toContain("category");
        expect(paths).toContain("address");
        expect(paths).toContain("languages");
        expect(paths).toContain("tags");
      }
    });

    it("should allow optional phone and website fields", () => {
      const serviceNoOptional = {
        title: "Simple Plumbing",
        category: "plumbing",
        address: "Geneva",
        languages: ["English"],
        tags: [],
      };

      const result = serviceSchema.safeParse(serviceNoOptional);
      expect(result.success).toBe(true);
    });
  });

  describe("Guides Schema", () => {
    const guideSchema = collections.guides.schema as any;

    it("should validate a correct guide entry", () => {
      const validGuide = {
        title: "Setting up banking",
        description: "How to open a Swiss/French bank account",
        category: "Settling In",
        lastUpdated: "2026-06-07",
      };

      const result = guideSchema.safeParse(validGuide);
      expect(result.success).toBe(true);
    });

    it("should reject invalid categories", () => {
      const invalidGuide = {
        title: "Setting up banking",
        description: "How to open a Swiss/French bank account",
        category: "Invalid Category", // not in guideCategories
        lastUpdated: "2026-06-07",
      };

      const result = guideSchema.safeParse(invalidGuide);
      expect(result.success).toBe(false);
    });
  });
});
