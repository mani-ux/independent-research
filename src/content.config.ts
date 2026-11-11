import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
const publications = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/publications' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    section: z.enum(['research', 'writing']),
    published: z.boolean().default(false),
    date: z.coerce.date(),
    author: z.string(),
  }),
});
export const collections = { publications };
