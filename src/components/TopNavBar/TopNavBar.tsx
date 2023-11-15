import { useState } from "react";
import { cn } from "../../lib/utils/cn";

export const TopNavBar = () => (
  <div className="absolute top-6 right-1/2 w-5/6 max-w-6xl h-12 z-20">
    <ul className="relative -right-1/2 list-none px-8 py-3 bg-slate-900 bg-opacity-90 shadow flex justify-between leading-tight text-neutral-300">
      <li className="text-base ">Logo</li>
      <div className="text-sm flex basis-96 justify-evenly">
        <MenuItem text="Home" />
        <MenuItem text="Expertise" />
        <MenuItem text="Work" />
        <MenuItem text="Contact" />
      </div>
    </ul>
  </div>
);

const MenuItem = ({ text }: { text: string }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <li className="flex items-center gap-2 cursor-pointer" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <TinyCircle isHovered={isHovered} /> {text}
    </li>
  );
};

const TinyCircle = ({isHovered}: {isHovered: boolean}) => (
  <div className={cn("w-2 h-2 rounded-full border border-teal-500", isHovered && "bg-teal-500 border-none")} />
);
