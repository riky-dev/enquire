/**
 * Maps query terms to expanded keywords (category slugs, related words).
 * Matching is case-insensitive; keys should be lowercase.
 */
export const synonymMap: Record<string, string[]> = {
  // Bicycle
  bike: ["bicycle-repair", "bicycle", "cycling", "velo", "e-bike"],
  bikes: ["bicycle-repair", "bicycle", "cycling", "velo", "e-bike"],
  bicycle: ["bicycle-repair", "bike", "cycling", "velo"],
  bicycles: ["bicycle-repair", "bike", "cycling", "velo"],
  cycling: ["bicycle-repair", "bike", "bicycle", "velo"],
  velo: ["bicycle-repair", "bike", "bicycle", "cycling"],
  vélo: ["bicycle-repair", "bike", "bicycle", "cycling"],

  // Barbers / hair
  barber: ["barbers", "hair", "haircut"],
  barbers: ["barber", "hair", "haircut"],
  hair: ["barbers", "haircut", "barber"],
  haircut: ["barbers", "hair", "barber"],
  coiffeur: ["barbers", "hair", "haircut"],

  // Cars
  car: ["car-repair", "vehicle", "tyre", "tire", "auto"],
  cars: ["car-repair", "vehicle", "tyre", "tire", "auto"],
  auto: ["car-repair", "vehicle", "car"],
  tyre: ["car-repair", "tire", "car"],
  tire: ["car-repair", "tyre", "car"],
  mechanic: ["car-repair", "bicycle-repair", "repair"],

  // Dentists
  dentist: ["dentists", "dental", "teeth"],
  dentists: ["dentist", "dental", "teeth"],
  dental: ["dentists", "dentist", "teeth"],
  teeth: ["dentists", "dental", "dentist"],

  // Vets
  vet: ["vets", "veterinarian", "animal", "pet"],
  vets: ["vet", "veterinarian", "animal", "pet"],
  veterinarian: ["vets", "vet", "animal", "pet"],
  pet: ["vets", "vet", "animal"],
  animal: ["vets", "vet", "pet"],

  // Electronics
  electronics: ["electronics-repair", "phone", "laptop", "computer"],
  phone: ["electronics-repair", "electronics"],
  laptop: ["electronics-repair", "electronics", "computer"],
  computer: ["electronics-repair", "electronics", "laptop"],

  // Plumbing
  plumber: ["plumbing", "pipe", "water"],
  plumbing: ["plumber", "pipe", "water"],

  // Leisure / sports
  sport: ["leisure-sports", "sports", "gym", "climbing", "bouldering"],
  sports: ["leisure-sports", "sport", "gym", "climbing"],
  gym: ["leisure-sports", "sport", "sports"],
  climbing: ["leisure-sports", "bouldering", "sport"],
  bouldering: ["leisure-sports", "climbing", "sport"],

  // Hiking
  hike: ["hiking", "trail", "walk"],
  hiking: ["hike", "trail", "walk"],
  trail: ["hiking", "hike"],

  // Shopping / printing
  shop: ["shopping", "store"],
  shopping: ["shop", "store"],
  print: ["printing", "printer", "copy"],
  printing: ["print", "printer", "copy"],
  printer: ["printing", "print"],

  // Guide-ish admin terms
  bank: ["banking", "account", "avs", "tin"],
  banking: ["bank", "account"],
  insurance: ["health", "uniqa", "deposit"],
  rent: ["housing", "deposit", "rental"],
  housing: ["rent", "deposit", "rental"],
  visa: ["legitimation", "admin", "permit"],
  waste: ["bulky", "recycling", "dechetterie"],
};

/**
 * Expands a single token with its synonyms (token itself included).
 */
export function expandToken(token: string): string[] {
  const key = token.toLowerCase().normalize("NFD").replace(/\p{M}/gu, "");
  const extras = synonymMap[key] ?? synonymMap[token.toLowerCase()] ?? [];
  return [token.toLowerCase(), ...extras.map((s) => s.toLowerCase())];
}
