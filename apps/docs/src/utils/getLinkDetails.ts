import type { CollectionEntry, CollectionKey } from "astro:content";
import { stripFolderFromSlug } from "~utils/stripFolderFromSlug";

const getLinkDetails = (url: string, contentType: CollectionKey, currentUrl: string, category: string) => {
  const friendlyUrl = stripFolderFromSlug(url, 2);
  const fullUrl = `/${contentType}/${category}/${friendlyUrl}`;
  const isActive = currentUrl === fullUrl;

  return { friendlyUrl, fullUrl, isActive };
};

export default getLinkDetails;
