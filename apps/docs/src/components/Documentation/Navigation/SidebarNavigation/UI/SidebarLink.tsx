import { cva } from "cva";
import { clsx } from "clsx";

import type { CollectionEntry, CollectionKey } from "astro:content";
import getLinkDetails from "~utils/getLinkDetails";
import useSidebarStore from "~stores/sidebarStore";

const currentLinkVariant = cva({
  base: "z-10 flex h-full w-full justify-center rounded-md border-2 border-black py-2 text-sm transition-all duration-200 ease-in-out",
  variants: {
    currentlyActive: {
      true: "bg-yellow-400 font-semibold hover:cursor-default",
      false: "-translate-x-1 -translate-y-1 bg-orange-300 hover:translate-x-0 hover:translate-y-0 hover:bg-yellow-400 hover:font-semibold",
    },
  },
});

interface SidebarLinkProps {
  title: CollectionEntry<"docs">["data"]["title"];
  url: CollectionEntry<"docs">["slug"];
  currentPath: string;
  collection: CollectionKey;
  type: string;
  category: string;
}

const SidebarLink = ({ title, url, collection, currentPath, type, category }: SidebarLinkProps) => {
  const { setSelectedType, setOpenCategory } = useSidebarStore();

  const { friendlyUrl, fullUrl, isActive } = getLinkDetails(url, collection, currentPath, type);
  // jellyDocsCategory
  const handleClick = () => {
    setOpenCategory(category);
    setSelectedType(type as "utilities" | "components");
  };

  return (
    <a class="group relative flex w-full" href={fullUrl} onClick={handleClick}>
      <div class={clsx([isActive ? currentLinkVariant({ currentlyActive: true }) : currentLinkVariant({ currentlyActive: false })])}>{title}</div>
      <div class="absolute inset-0 w-full rounded-md bg-black"></div>
    </a>
  );
};
export default SidebarLink;
