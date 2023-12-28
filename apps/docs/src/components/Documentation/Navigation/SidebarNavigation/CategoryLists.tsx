import { clsx } from "clsx";

import type { CategoryWithDocs } from "~utils/contentCollections";

import useSidebarStore from "~stores/sidebarStore";
import CategoryHeading from "@components/Documentation/Navigation/SidebarNavigation/CategoryHeading";

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
          <ul>
            {category.docs.map((doc) => (
              <li></li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );
};
export default CategoryLists;
