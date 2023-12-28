import { cva } from "cva";
import { clsx } from "clsx";

import useSidebarStore from "~stores/sidebarStore";

const currentHeadingVariant = cva({
  base: "z-10 flex h-auto w-full justify-between rounded-md border-2 border-black px-4 py-2 transition-all duration-200 ease-in-out",
  variants: {
    currentStatus: {
      active: "bg-yellow-400 font-bold",
      inactive: "-translate-x-1 -translate-y-1 bg-orange-300 hover:translate-x-0 hover:translate-y-0",
    },
  },
});

interface CategoryHeadingProps {
  title: string;
}

const CategoryHeading = ({ title }: CategoryHeadingProps) => {
  const { openCategory, handleTypeChange, handleOpenCategory } = useSidebarStore();

  const test = () => {
    console.log("test");
  };

  return (
    <button class="relative mb-4 flex w-full" onClick={() => handleOpenCategory(title)}>
      <div class={clsx(title === openCategory ? currentHeadingVariant({ currentStatus: "active" }) : currentHeadingVariant({ currentStatus: "inactive" }))}>
        {title}
        <svg class={clsx(title === openCategory ? "rotate-180" : "", "h-5 w-5")} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" data-slot="icon">
          <path fill-rule="evenodd" d="M9.47 6.47a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 1 1-1.06 1.06L10 8.06l-3.72 3.72a.75.75 0 0 1-1.06-1.06l4.25-4.25Z" clip-rule="evenodd" />
        </svg>
      </div>
      <div class="absolute inset-0 w-full rounded-md bg-black"></div>
    </button>
  );
};
export default CategoryHeading;
