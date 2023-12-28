import { useEffect, useRef, useState } from "preact/hooks";

import type { MarkdownHeading } from "astro";
import WhatsOnThePageLink from "@components/Documentation/Navigation/WhatsOnThisPage/WhatsOnThePageLink";

interface WhatsOnThisPageProps {
  headings: MarkdownHeading[];
}

const WhatsOnThisPage = ({ headings }: WhatsOnThisPageProps) => {
  const [activeHeading, setActiveHeading] = useState(headings[0].slug);
  const headingElements = useRef<Element[]>([]);

  useEffect(() => {
    headingElements.current = headings.map((heading) => document.getElementById(heading.slug)).filter(Boolean) as Element[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHeading(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-50% 0px -50% 0px", // Adjust this value to account for the sticky header
        threshold: 0,
      },
    );

    headingElements.current.forEach((element) => observer.observe(element));

    return () => {
      headingElements.current.forEach((element) => observer.unobserve(element));
    };
  }, []);

  return (
    <aside class="relative hidden xl:block">
      <div class="sticky top-24 w-64">
        <h4 class="mb-2 font-semibold">Whats On The Page</h4>
        <nav class="rounded-md border-2 border-black bg-teal-400 px-8 py-4">
          <ul class="flex flex-col gap-4">
            {headings.map((heading) => (
              <li key={heading.slug}>
                <WhatsOnThePageLink currentHeading={heading} isActive={heading.slug === activeHeading} />
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
};
export default WhatsOnThisPage;
