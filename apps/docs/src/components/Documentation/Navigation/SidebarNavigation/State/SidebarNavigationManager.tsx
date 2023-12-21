import { useEffect, useState } from "preact/hooks";
import { clsx } from "clsx";

import type { CollectionEntry } from "astro:content";
import type { CategoryWithDocs } from "~utils/contentCollections";

import TypeSwitcher from "@components/Documentation/Navigation/SidebarNavigation/UI/TypeSwitcher";
import SidebarLink from "@components/Documentation/Navigation/SidebarNavigation/UI/SidebarLink";
import useSidebarStore from "~stores/sidebarStore";

interface SidebarNavigationManagerProps {
  utilities: CategoryWithDocs[];
  components: CategoryWithDocs[];
  currentPath: string;
}

const SidebarNavigationManager = ({ utilities, components, currentPath }: SidebarNavigationManagerProps) => {
  const { selectedType, setSelectedType, openCategory, setOpenCategory, handleTypeChange, handleOpenCategory } = useSidebarStore();
  const categories = selectedType === "utilities" ? utilities : components;

  return (
    <div class="sticky top-24">
      <div class="mb-4 flex gap-4 bg-violet-200">
        <TypeSwitcher selectedType={selectedType} handleTypeChange={handleTypeChange} />
      </div>
      <nav class="w-64 space-y-4 rounded-md border-2 border-black bg-orange-400 px-4 py-4">
        {categories.map((category) => (
          <div class="">
            <button class="flex w-full justify-between" onClick={() => handleOpenCategory(category.data.title)}>
              <p>{category.data.title}</p>
              <svg
                class={clsx(category.data.title === openCategory ? "rotate-180" : "", "h-5 w-5")}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                data-slot="icon"
              >
                <path fill-rule="evenodd" d="M9.47 6.47a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 1 1-1.06 1.06L10 8.06l-3.72 3.72a.75.75 0 0 1-1.06-1.06l4.25-4.25Z" clip-rule="evenodd" />
              </svg>
            </button>

            <ul
              class={clsx(
                category.data.title === openCategory ? " max-h-96 p-1" : "max-h-0",
                "flex origin-top flex-col  gap-4 overflow-y-hidden  transition-max-height duration-300 ease-out",
              )}
            >
              {/* <ul class={""}> */}
              {category.docs.map((doc) => (
                <SidebarLink title={doc.data.title} url={doc.slug} currentPath={currentPath} collection="docs" type={category.data.type} category={category.data.title} />
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </div>
  );
};
export default SidebarNavigationManager;
