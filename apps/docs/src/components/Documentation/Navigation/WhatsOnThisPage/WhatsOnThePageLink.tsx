import type { MarkdownHeading } from "astro";
import clsx from "clsx";
import { cva, type VariantProps } from "cva";

// const whatsOnThePageLinkVariant = cva({
//   base: "w-full rounded-md border-2 border-black px-2 py-2 text-sm transition-all duration-150 ease-in-out",
//   variants: {
//     currentlyActive: {
//       true: "bg-violet-400 font-semibold hover:cursor-default",
//       false: "-translate-x-1 -translate-y-1 bg-sky-300 hover:translate-x-0 hover:translate-y-0 hover:bg-violet-400 hover:font-semibold",
//     },
//   },
// });

const whatOnThisPageLinkVariant = cva({
  base: "z-10 flex h-auto w-full justify-center rounded-md border-2 border-black py-2 text-sm transition-all duration-200 ease-in-out",
  variants: {
    currentlyActive: {
      true: "bg-violet-400 font-semibold text-white",
      false: "-translate-x-1 -translate-y-1 bg-sky-300 text-black hover:translate-x-0 hover:translate-y-0 hover:bg-violet-400 hover:font-semibold hover:text-white",
    },
  },
});

interface WhatsOnThePageLinkProps {
  currentHeading: MarkdownHeading;
  isActive: boolean;
}

const WhatsOnThePageLink = ({ currentHeading, isActive }: WhatsOnThePageLinkProps) => {
  const currentLink = `#${currentHeading.slug}`;

  const handleClick = (e: Event) => {
    e.preventDefault();
    const element = document.getElementById(currentHeading.slug);
    if (element) {
      // Set the element to be active
      window.history.pushState(null, "", currentLink);
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <a class="relative flex w-full" href={currentLink} onClick={handleClick}>
      <div class={clsx(whatOnThisPageLinkVariant({ currentlyActive: isActive }))}>{currentHeading.text}</div>
      <div class="absolute inset-0 rounded-md bg-black"></div>
    </a>
  );
};
export default WhatsOnThePageLink;

{
  /* <a class="flex rounded-md bg-black" href={currentLink} onClick={handleClick}>
<span class={clsx(whatOnThisPageLinkVariant({ currentlyActive: isActive }))}>{currentHeading.text}</span>
</a> */
}
