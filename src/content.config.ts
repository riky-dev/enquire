import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'zod';

const services = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/services' }),
  schema: z.object({
    title: z.string(),
    category: z.string(),
    address: z.string(),
    languages: z.array(z.string()),
    tags: z.array(z.string()),
    phone: z.string().optional(),
    website: z.string().optional(),
  }),
});

const guides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/guides' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['Getting Here', 'Housing', 'Settling In', 'Admin']),
    lastUpdated: z.string(),
  }),
});

export const collections = {
  services,
  guides,
};
