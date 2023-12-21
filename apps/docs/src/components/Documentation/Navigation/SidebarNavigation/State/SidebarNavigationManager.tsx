import type { CollectionEntry } from "astro:content";
import { useState } from "preact/hooks";
import type { CategoryWithDocs } from "~utils/contentCollections";

import TypeSwitcher from "@components/Documentation/Navigation/SidebarNavigation/UI/TypeSwitcher";

interface SidebarNavigationManagerProps {
  utilities: CategoryWithDocs[];
  components: CategoryWithDocs[];
  currentPath: string;
}

const SidebarNavigationManager = ({ utilities, components, currentPath }: SidebarNavigationManagerProps) => {
  const [selectedType, setSelectedType] = useState<CollectionEntry<"categories">["data"]["type"]>("utilities");

  const categories = selectedType === "utilities" ? utilities : components;

  const [openCategory, setOpenCategory] = useState<string | null>(categories[0].data.title);

  const handleTypeChange = (type: CollectionEntry<"categories">["data"]["type"]) => {
    setSelectedType(type);
  };

  const handleOpenCategory = (category: string) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  return (
    <div class="sticky top-24">
      <div class="mb-4 flex gap-4 bg-violet-200">
        <TypeSwitcher selectedType={selectedType} handleTypeChange={handleTypeChange} />
      </div>
      <nav class="w-64 rounded-md border-2 border-black bg-orange-400 px-8 py-4">
        {categories.map((category) => (
          <p>{category.data.title}</p>
        ))}
      </nav>
    </div>
  );
};
export default SidebarNavigationManager;

// Navigation
// -- SidebarNavigation (astro)
// ---- UI
// ------ TypeSwitch (preact)
// ------ CurrentCategoriesAndDocs (preact)
// ------ SidebarNavigationLink (preact)
// ---- State
// ------ SidebarNavigation(name-something-different) (preact)
