import { useState } from "preact/hooks";

import type { CollectionEntry, CollectionKey } from "astro:content";
import type { CategoryWithDocs } from "~utils/contentCollections";

import NavigationTypeButton from "@components/Documentation/Navigation/SidebarNavigation/NavigationTypeButton";

interface SwitchNavigationTypesProps {
  utilities: CategoryWithDocs[];
  components: CategoryWithDocs[];
}

const SwitchNavigationTypes = ({ utilities, components }: SwitchNavigationTypesProps) => {
  const [selectedType, setSelectedType] = useState("utilities");
  const [isActive, setIsActive] = useState("");

  const categories = selectedType === "utilities" ? utilities : components;

  const handleTypeChange = (type: string) => {
    setSelectedType(type);
    setIsActive(type);
  };

  return (
    <div class="sticky top-24">
      <div class="mb-4 flex gap-4 bg-violet-50">
        <NavigationTypeButton type="utilities" label="Utilities" isActive={selectedType === "utilities"} selectedType={selectedType} handleTypeChange={handleTypeChange} />
        <NavigationTypeButton type="components" label="Components" isActive={selectedType === "components"} selectedType={selectedType} handleTypeChange={handleTypeChange} />
      </div>

      <div class=" w-64 rounded-md border-2 border-black bg-orange-400 px-8 py-4">
        {categories.map((category) => (
          <div>
            <h2>{category.data.title}</h2>
            <ul>
              {category.docs.map((doc) => (
                <li>{doc.data.title}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
export default SwitchNavigationTypes;
