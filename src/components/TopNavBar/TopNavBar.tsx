import { useState } from "react";
import { cn } from "../../lib/utils/cn";
import {
  EXPERTISE_SECTION_ID,
  HERO_SECTION_ID,
  WORK_EXPERIENCE_SECTION_ID,
} from "../../lib/constants";

export const TopNavBar = () => (
  <div className="absolute top-6 right-1/2 w-5/6 max-w-6xl h-12 z-20">
    <ul className="relative -right-1/2 list-none px-8 py-3 bg-slate-900 bg-opacity-90 shadow flex justify-between leading-tight text-neutral-300">
      <li className="text-base ">Logo</li>
      <div className="text-sm flex basis-96 justify-evenly">
        <MenuItem text="Home" sectionIdToGoTo={HERO_SECTION_ID} />
        <MenuItem text="Expertise" sectionIdToGoTo={EXPERTISE_SECTION_ID} />
        <MenuItem text="Work" sectionIdToGoTo={WORK_EXPERIENCE_SECTION_ID} />
        <MenuItem text="Contact" />
      </div>
    </ul>
  </div>
);

const MenuItem = ({
  text,
  sectionIdToGoTo,
}: {
  text: string;
  sectionIdToGoTo?: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a href={`#${sectionIdToGoTo}`}>
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
