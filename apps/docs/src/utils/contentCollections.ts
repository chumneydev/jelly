import { getCollection, type CollectionEntry } from "astro:content";

export type CategoryWithDocs = CollectionEntry<"categories"> & { docs: CollectionEntry<"docs">[] };

export const getCategoriesWithDocsByType = async (type: string): Promise<CategoryWithDocs[]> => {
  const allDocs = await getCollection("docs");
  const sortedCategories = (await getCollection("categories")).filter((category) => category.data.type === type).sort((a, b) => a.data.order - b.data.order);

  return sortedCategories.map((category) => {
    const docs = allDocs.filter((doc) => doc.data.category.slug === category.slug).sort((a, b) => a.data.categoryOrder - b.data.categoryOrder);
    return {
      ...category,
      docs,
    };
  });
};
