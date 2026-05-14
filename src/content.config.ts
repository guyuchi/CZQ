import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const zh = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/zh' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string(),
  }),
});

const en = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/en' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string(),
  }),
});

export const collections = { zh, en };
