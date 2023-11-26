import { useState } from "react";
import { cn } from "../../lib/utils/cn";
import {
  CONTACT_SECTION_ID,
  EXPERTISE_SECTION_ID,
  HORIZONTAL_PADDING,
  TESTIMONIALS_SECTION_ID,
  WORK_EXPERIENCE_SECTION_ID,
} from "../../lib/constants";

export const TopNavBar = () => (
  <div
    className={cn(
      `sticky w-full top-2 z-20 h-20 ${HORIZONTAL_PADDING}`,
      "px-2"
    )}
  >
    <div className="w-full h-full">
      <ul className="list-none md:px-16 px-2 py-3 bg-slate-900 shadow flex justify-around leading-tight text-neutral-300 md:text-sm text-xs">
        <MenuItem text="Blog" link="/blog" />
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
      className={cn("hover:font-semibold", className)}
    >
      <li
        className="flex items-center gap-2 cursor-pointer"
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
      "w-2 h-2 rounded-full border border-teal-500",
      isHovered && "bg-teal-500 border-none"
    )}
  />
);
