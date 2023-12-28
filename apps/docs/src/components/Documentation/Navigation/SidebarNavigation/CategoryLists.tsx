import { clsx } from "clsx";

import type { CategoryWithDocs } from "~utils/contentCollections";

import useSidebarStore from "~stores/sidebarStore";
import CategoryHeading from "@components/Documentation/Navigation/SidebarNavigation/CategoryHeading";
import SidebarLink from "@components/Documentation/Navigation/SidebarNavigation/SidebarLink";

interface CategoryListsProps {
  utilities: CategoryWithDocs[];
  components: CategoryWithDocs[];
  currentPath: string;
}

const CategoryLists = ({ utilities, components, currentPath }: CategoryListsProps) => {
  const { selectedType, openCategory } = useSidebarStore();

  const categories = selectedType === "utilities" ? utilities : components;

  return (
    <nav class="space-y-4 rounded-md border-2 border-black bg-orange-400 p-4">
      {categories.map((category) => (
        <div class="">
          <CategoryHeading title={category.data.title} />
          <ul class={clsx(category.data.title === openCategory ? "max-h-96" : "max-h-0", "flex flex-col gap-4 overflow-hidden transition-max-height duration-300 ease-in-out")}>
            {category.docs.map((doc) => (
              <li>
                <SidebarLink title={doc.data.title} url={doc.slug} currentPath={currentPath} collection="docs" type={category.data.type} category={category.data.title} />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );
};
export default CategoryLists;
