import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { CATEGORIES } from './lib/url';

const photo = z.string().nullish();

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    cover: photo,
    summary: z.string().nullish(),
    draft: z.boolean().default(false),
  }),
});

const coaches = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/coaches' }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    photo,
    order: z.number().default(99),
  }),
});

const athletes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/athletes' }),
  schema: z.object({
    name: z.string(),
    category: z.enum(CATEGORIES),
    weightClass: z.string().nullish(),
    photo,
    snatch: z.number().nullish(),
    cleanJerk: z.number().nullish(),
    order: z.number().default(99),
  }),
});

// Free-text pages edited in the CMS (e.g. the history page).
const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    intro: z.string().nullish(),
    placeholder: z.boolean().default(false),
  }),
});

export const collections = { articles, coaches, athletes, pages };
