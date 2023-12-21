import { cva } from "cva";
import { clsx } from "clsx";

import type { CollectionEntry } from "astro:content";
import { useState, useEffect } from "preact/hooks";
import useSidebarStore from "~stores/sidebarStore";

const currentTypeButton = cva({
  base: "z-10 flex h-full w-full justify-center rounded-md border-2 border-black py-2 text-sm transition-all duration-200 ease-in-out",
  variants: {
    currentlyActive: {
      true: "bg-yellow-400 font-semibold hover:cursor-default",
      false: "-translate-x-1 -translate-y-1 bg-orange-300 hover:translate-x-0 hover:translate-y-0 hover:bg-yellow-400 hover:font-semibold",
    },
  },
});

// interface TypeSwitcherProps {
//   selectedType: CollectionEntry<"categories">["data"]["type"];
// }
interface TypeSwitcherProps {}

const TypeSwitcher = ({}: TypeSwitcherProps) => {
  const { selectedType, setSelectedType, handleTypeChange } = useSidebarStore();

  useEffect(() => {
    setSelectedType(selectedType);
  }, [selectedType]);

  const handleClick = (type: CollectionEntry<"categories">["data"]["type"]) => {
    handleTypeChange(type);
    setSelectedType(type);
  };

  return (
    <>
      <button class="group relative flex w-full" onClick={() => handleClick("utilities")}>
        <div class={clsx([selectedType === "utilities" ? currentTypeButton({ currentlyActive: true }) : currentTypeButton({ currentlyActive: false })])}>Utilities</div>
        <div class="absolute inset-0 w-full rounded-md bg-black"></div>
      </button>
      <button class="group relative flex w-full" onClick={() => handleClick("components")}>
        <div class={clsx([selectedType === "components" ? currentTypeButton({ currentlyActive: true }) : currentTypeButton({ currentlyActive: false })])}>Components</div>
        <div class="absolute inset-0 w-full rounded-md bg-black"></div>
      </button>
    </>
  );
};
export default TypeSwitcher;
