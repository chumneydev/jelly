import { cva } from "cva";
import { clsx } from "clsx";

import type { CollectionEntry, CollectionKey } from "astro:content";
import getLinkDetails from "~utils/getLinkDetails";
import useSidebarStore from "~stores/sidebarStore";
import { useEffect } from "preact/hooks";

const currentLinkVariant = cva({
  base: "flex px-4 text-sm transition-all duration-200 ease-in-out",
  variants: {
    currentlyActive: {
      true: "font-semibold",
      false: "bg-transparent hover:font-semibold",
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
  const { setSelectedType, openCategory, setOpenCategory, handleOpenCategory } = useSidebarStore();

  const baseUrl = import.meta.env.BASE_URL;

  const { fullUrl, isActive } = getLinkDetails(url, collection, currentPath, type, baseUrl);

  const handleClick = () => {
    setOpenCategory(category);
    setSelectedType(type as "utilities" | "components");
  };

  useEffect(() => {
    if (isActive && openCategory !== category) {
      handleOpenCategory(category);
    }
  }, [isActive]);

  return (
    <a class={clsx([isActive ? currentLinkVariant({ currentlyActive: true }) : currentLinkVariant({ currentlyActive: false })])} href={`${fullUrl}`} onClick={handleClick}>
      {title}
    </a>
  );
};
export default SidebarLink;
