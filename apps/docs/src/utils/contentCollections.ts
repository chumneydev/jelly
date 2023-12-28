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

export const getPreviousAndNextDocs = async (currentSlug: string, type: string) => {
  const categories = await getCategoriesWithDocsByType(type);
  console.log(categories);

  const allDocs = categories.flatMap((category) => category.docs);

  const currentIndex = allDocs.findIndex((doc) => doc.slug === currentSlug);

  const previousDoc = currentIndex > 0 ? allDocs[currentIndex - 1] : null;
  const nextDoc = currentIndex < allDocs.length - 1 ? allDocs[currentIndex + 1] : null;

  return { previousDoc, nextDoc };
};
