import { clsx } from "clsx";

import type { CategoryWithDocs } from "~utils/contentCollections";

import useSidebarStore from "~stores/sidebarStore";

interface CategoryListsProps {
  utilities: CategoryWithDocs[];
  components: CategoryWithDocs[];
  currentPath: string;
}

const CategoryLists = ({ utilities, components, currentPath }: CategoryListsProps) => {
  const { selectedType, openCategory } = useSidebarStore();

  const categories = selectedType === "utilities" ? utilities : components;

  return (
    <nav>
      {categories.map((category) => (
        <div class="">
          <ul>
            {category.docs.map((doc) => (
              <li>
                <a
                  href={doc.slug}
                  class={clsx([
                    currentPath === doc.slug
                      ? "bg-yellow-400 font-semibold hover:cursor-default"
                      : "-translate-x-1 -translate-y-1 bg-orange-300 hover:translate-x-0 hover:translate-y-0 hover:bg-yellow-400 hover:font-semibold",
                  ])}
                >
                  {doc.data.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );
};
export default CategoryLists;
