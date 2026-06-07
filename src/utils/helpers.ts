import { serviceCategories } from "../categories";

/**
 * Formats a category identifier slug into a human-readable title.
 * Uses custom mappings if available, otherwise splits on dashes and capitalizes.
 */
export function formatCategory(
  cat: string,
  customCategories: Record<string, string> = serviceCategories,
): string {
  if (customCategories[cat]) return customCategories[cat];
  return cat
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

/**
 * Formats an ISO/string date into a long US format (e.g. "January 1, 2026").
 * Returns "Invalid Date" if the input string is invalid.
 */
export function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  if (isNaN(date.getTime())) {
    return "Invalid Date";
  }
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/**
 * Ensures a website URL starts with http:// or https://.
 * Returns undefined if no website is provided.
 */
export function formatWebsite(website?: string): string | undefined {
  if (!website) return undefined;
  return !/^https?:\/\//i.test(website) ? `https://${website}` : website;
}

/**
 * Checks if "english" (case-insensitive) is present in the list of languages.
 */
export function hasEnglishSpoken(languages: string[]): boolean {
  return languages.some((lang) => lang.toLowerCase() === "english");
}

/**
 * Groups guides (or elements with a category frontmatter field) by a set of categories.
 */
export function groupGuidesByCategory<T extends { data: { category: string } }>(
  guides: T[],
  categories: readonly string[],
): Record<string, T[]> {
  const acc: Record<string, T[]> = {};
  for (const cat of categories) {
    acc[cat] = guides.filter((guide) => guide.data.category === cat);
  }
  return acc;
}
