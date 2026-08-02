import { formatCategory } from "@/utils/helpers";
import { staticPages, type SearchItem } from "./types";

/** Strip markdown syntax and collapse whitespace for indexing. */
export function stripMarkdown(raw: string): string {
  return raw
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`[^`]*`/g, " ")
    .replace(/!\[[^\]]*]\([^)]*\)/g, " ")
    .replace(/\[([^\]]*)]\([^)]*\)/g, "$1")
    .replace(/^#{1,6}\s+/gm, "")
    .replace(/[*_~>#-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function truncate(text: string, max = 110): string {
  if (text.length <= max) return text;
  return `${text.slice(0, max - 1).trimEnd()}…`;
}

interface ServiceEntry {
  id: string;
  body?: string;
  data: {
    title: string;
    category: string;
    tags: string[];
    address?: string;
  };
}

interface GuideEntry {
  id: string;
  body?: string;
  data: {
    title: string;
    description: string;
    category: string;
  };
}

export function buildServiceItem(entry: ServiceEntry): SearchItem {
  const categoryLabel = formatCategory(entry.data.category);
  const body = entry.body ? stripMarkdown(entry.body) : "";
  const subtitle = entry.data.address
    ? truncate(`${categoryLabel} · ${entry.data.address}`)
    : categoryLabel;

  return {
    id: `service-${entry.id}`,
    title: entry.data.title,
    href: `/services/${entry.id}`,
    type: "service",
    subtitle,
    category: categoryLabel,
    keywords: [
      entry.data.category,
      categoryLabel,
      ...entry.data.tags,
      entry.data.address ?? "",
      body,
    ].filter(Boolean),
  };
}

export function buildGuideItem(entry: GuideEntry): SearchItem {
  const body = entry.body ? stripMarkdown(entry.body) : "";
  return {
    id: `guide-${entry.id}`,
    title: entry.data.title,
    href: `/guides/${entry.id}`,
    type: "guide",
    subtitle: truncate(entry.data.description),
    category: entry.data.category,
    keywords: [entry.data.category, entry.data.description, body].filter(Boolean),
  };
}

export function buildSearchIndex(services: ServiceEntry[], guides: GuideEntry[]): SearchItem[] {
  return [...staticPages, ...services.map(buildServiceItem), ...guides.map(buildGuideItem)];
}
