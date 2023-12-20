import { z, defineCollection, reference } from "astro:content";

export const colorSelection = ["rose", "orange", "yellow", "emerald", "teal", "sky", "violet"] as const;

const categoryCollection = defineCollection({
  type: "content",
  schema: z.object({
    type: z.enum(["utilities", "components"]),
    title: z.string(),
    description: z.string(),
    order: z.number(),
    primaryColor: z.enum(colorSelection),
    accentColor: z.enum(colorSelection),
  }),
});

const docsCollection = defineCollection({
  type: "content",
  schema: z.object({
    category: reference("categories"),
    title: z.string(),
    description: z.string(),
    categoryOrder: z.number(),
    publishedDate: z.coerce.date(),
  }),
});

export const collections = {
  categories: categoryCollection,
  docs: docsCollection,
};
