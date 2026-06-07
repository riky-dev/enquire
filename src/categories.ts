export const guideCategories = ["Getting Here", "Housing", "Settling In", "Admin"] as const;

export type GuideCategory = (typeof guideCategories)[number];

export const guideCategoryIcons: Record<GuideCategory, string> = {
  "Getting Here": "✈️",
  Housing: "🏠",
  "Settling In": "🤝",
  Admin: "📝",
};

export const serviceCategories: Record<string, string> = {
  barbers: "Barbers",
  "bicycle-repair": "Bicycle Repair",
  "car-repair": "Car Repair & Tyres",
  "electronics-repair": "Electronics Repair",
  plumbing: "Plumbing",
  "leisure-sports": "Leisure & Sports",
  hiking: "Hiking",
};
