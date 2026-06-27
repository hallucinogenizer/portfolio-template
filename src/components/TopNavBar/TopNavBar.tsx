import { useState } from "react";
import { cn } from "../../lib/utils/cn";
import {
  BLOG_SECTION_ID,
  CONTACT_SECTION_ID,
  EXPERTISE_SECTION_ID,
  HORIZONTAL_PADDING,
  TESTIMONIALS_SECTION_ID,
  WORK_EXPERIENCE_SECTION_ID,
} from "../../lib/constants";

export const TopNavBar = () => (
  <div
    className={cn(
      `sticky top-4 z-20 w-full ${HORIZONTAL_PADDING}`
    )}
  >
    <div className="mx-auto flex w-full max-w-5xl items-center justify-between rounded-full border border-white/10 bg-[#0b0d15]/75 px-3 py-2 shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl">
      <a href="#hero-section" className="hidden rounded-full bg-white/5 px-4 py-2 font-['IBM_Plex_Mono'] text-xs font-semibold uppercase tracking-[0.28em] text-[#f6f0e8] md:block">
        RH
      </a>
      <ul className="flex w-full list-none items-center justify-around gap-1 leading-tight text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#b8aea2] md:w-auto md:gap-2 md:text-xs">
        <MenuItem text="Blog" sectionIdToGoTo={BLOG_SECTION_ID} />
        <MenuItem text="Expertise" sectionIdToGoTo={EXPERTISE_SECTION_ID} />
        <MenuItem text="Work" sectionIdToGoTo={WORK_EXPERIENCE_SECTION_ID} />
        <MenuItem
          text="Testimonials"
          sectionIdToGoTo={TESTIMONIALS_SECTION_ID}
        />
        <MenuItem text="Contact" sectionIdToGoTo={CONTACT_SECTION_ID} />
      </ul>
    </div>
  </div>
);

const MenuItem = ({
  text,
  sectionIdToGoTo,
  link,
  className,
}: {
  text: string;
  sectionIdToGoTo?: string;
  link?: string;
  className?: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={link ? link : sectionIdToGoTo ? `#${sectionIdToGoTo}` : "#"}
      className={cn("rounded-full px-3 py-2 transition-colors hover:bg-white/[0.08] hover:text-[#f6f0e8]", className)}
    >
      <li
        className="flex cursor-pointer items-center gap-2"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <TinyCircle isHovered={isHovered} /> {text}
      </li>
    </a>
  );
};

const TinyCircle = ({ isHovered }: { isHovered: boolean }) => (
  <div
    className={cn(
      "hidden h-1.5 w-1.5 rounded-full border border-[var(--amber)] transition-colors md:block",
      isHovered && "border-[var(--amber)] bg-[var(--amber)]"
    )}
  />
);
