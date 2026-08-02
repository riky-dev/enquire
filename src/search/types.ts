export type SearchItemType = "page" | "service" | "guide";

export interface SearchItem {
  id: string;
  title: string;
  href: string;
  type: SearchItemType;
  /** Short line under the title (category, description, or page purpose) */
  subtitle: string;
  /** Category label when applicable */
  category?: string;
  /** Extra searchable text: category labels, tags, description, body excerpt */
  keywords: string[];
}

export const staticPages: SearchItem[] = [
  {
    id: "page-home",
    title: "Home",
    href: "/",
    type: "page",
    subtitle: "Start here — Enquire for CERN newcomers",
    keywords: ["enquire", "home", "start", "cern", "newcomers"],
  },
  {
    id: "page-services",
    title: "Services Directory",
    href: "/services",
    type: "page",
    subtitle: "Browse recommended local shops and providers",
    keywords: ["services", "directory", "shops", "providers", "listings"],
  },
  {
    id: "page-guides",
    title: "Guides",
    href: "/guides",
    type: "page",
    subtitle: "Step-by-step notes for cross-border living",
    keywords: ["guides", "articles", "howto", "admin", "housing"],
  },
  {
    id: "page-suggest",
    title: "Suggest a Place",
    href: "/suggest",
    type: "page",
    subtitle: "Submit a listing or guide idea",
    keywords: ["suggest", "submit", "contribute", "form", "recommend"],
  },
  {
    id: "page-about",
    title: "About / How?",
    href: "/about",
    type: "page",
    subtitle: "How Enquire is built and maintained",
    keywords: ["about", "how", "project", "enquire", "giscus"],
  },
];
