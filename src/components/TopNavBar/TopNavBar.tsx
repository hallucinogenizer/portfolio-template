import { useState } from "react";
import { cn } from "../../lib/utils/cn";
import {
  CONTACT_SECTION_ID,
  EXPERTISE_SECTION_ID,
  TESTIMONIALS_SECTION_ID,
  WORK_EXPERIENCE_SECTION_ID,
} from "../../lib/constants";

export const TopNavBar = () => (
  <div className="absolute top-6 right-1/2 w-full md:max-w-3xl max-w-11/12 h-12 z-20">
    <ul className="relative -right-1/2 list-none md:px-16 px-6 py-3 bg-slate-900 bg-opacity-90 shadow flex justify-around leading-tight text-neutral-300 text-sm">
      <MenuItem text="Blog" link="/blog" />
      <MenuItem text="Expertise" sectionIdToGoTo={EXPERTISE_SECTION_ID} />
      <MenuItem text="Work" sectionIdToGoTo={WORK_EXPERIENCE_SECTION_ID} />
      <MenuItem text="Testimonials" sectionIdToGoTo={TESTIMONIALS_SECTION_ID} />
      <MenuItem text="Contact" sectionIdToGoTo={CONTACT_SECTION_ID} />
    </ul>
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
