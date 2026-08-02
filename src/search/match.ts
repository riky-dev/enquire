import { expandToken } from "./synonyms";
import type { SearchItem } from "./types";

export interface ScoredSearchItem extends SearchItem {
  score: number;
}

function normalize(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .replace(/[^a-z0-9\s-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function tokenize(query: string): string[] {
  return normalize(query)
    .split(" ")
    .filter((t) => t.length > 0);
}

/**
 * Score how well an item matches the query.
 * Higher is better. Returns 0 for no match.
 */
export function scoreItem(item: SearchItem, query: string): number {
  const tokens = tokenize(query);
  if (tokens.length === 0) return 0;

  const title = normalize(item.title);
  const haystack = normalize([item.title, ...item.keywords].join(" "));

  let score = 0;

  for (const token of tokens) {
    const expanded = expandToken(token);
    let best = 0;

    for (const term of expanded) {
      if (!term) continue;

      if (title === term) best = Math.max(best, 100);
      else if (title.startsWith(term)) best = Math.max(best, 80);
      else if (title.includes(term)) best = Math.max(best, 60);
      else if (haystack.includes(term)) {
        // Synonym/category hits rank above raw body matches for short terms
        const isSynonym = term !== token;
        best = Math.max(best, isSynonym ? 40 : 25);
      }
    }

    // Every query token must contribute something
    if (best === 0) return 0;
    score += best;
  }

  // Prefer shorter titles slightly when scores tie via type boost applied later
  score += Math.max(0, 10 - item.title.length / 10);

  if (item.type === "page") score += 5;
  else if (item.type === "service") score += 2;

  return score;
}

export function searchIndex(items: SearchItem[], query: string, limit = 12): ScoredSearchItem[] {
  const q = query.trim();
  if (!q) return [];

  return items
    .map((item) => ({ ...item, score: scoreItem(item, q) }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score || a.title.localeCompare(b.title))
    .slice(0, limit);
}
