import type { CollectionEntry, CollectionKey } from "astro:content";
import { stripFolderFromSlug } from "~utils/stripFolderFromSlug";

const getLinkDetails = (url: string, contentType: CollectionKey, currentUrl: string, category: string, baseUrl: string) => {
  const friendlyUrl = stripFolderFromSlug(url, 1);
  const fullUrl = `${baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`}${contentType}/${category}/${friendlyUrl}`;
  const isActive = currentUrl.replace(/\/$/, "") === `/${contentType}/${category}/${friendlyUrl}`;

  return { friendlyUrl, fullUrl, isActive };
};

export default getLinkDetails;
