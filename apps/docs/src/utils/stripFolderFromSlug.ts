export const stripFolderFromSlug = (slug: string, depth: number) => {
  const parts = slug.split("/");
  return parts[parts.length - depth];
};
