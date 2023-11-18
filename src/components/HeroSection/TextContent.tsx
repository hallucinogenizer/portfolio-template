import { useState } from "react";
import { ClassNameProp } from "../../lib/utils/utils";
import { cn } from "../../lib/utils/cn";
import { SocialLinkBox } from "../common/SocialLinkBox";

export const TextContent = ({ className }: { className: string }) => (
  <div className={cn("flex flex-col gap-2", className)}>
    <Hello className="mb-4" />
    <PersonName className="mb-2" />
    <ProfessionalTitles />
    <DownloadResume className="mt-10" />
    <SocialIcons className="mt-8" />
  </div>
);

const Hello = ({ className }: ClassNameProp) => (
  <div className={cn("inline-flex items-center gap-4", className)}>
    <ShortLine />{" "}
    <p className="text-stone-300 text-2xl leading-loose font-['Roboto Mono']">
      Hello!
    </p>
  </div>
);
const ShortLine = () => (
  <div className="w-8 h-px border-2 border-sky-700"></div>
);

const PersonName = ({ className }: ClassNameProp) => (
  <h1
    className={cn(
      "text-light text-6xl font-bold font-['Poppins'] uppercase leading-none",
      className
    )}
  >
    Rohan Hussain
  </h1>
);

const ProfessionalTitles = () => {
  const [currentTitle, setCurrentTitle] = useState("Software Engineer");
  return (
    <h3 className="text-3xl font-medium font-['Roboto Mono'] leading-10 tracking-widest">
      <span className="text-stone-300">I'm a </span>
      <span className="text-teal-500">{currentTitle}</span>
    </h3>
  );
};

const DownloadResume = ({ className }: { className?: string }) => (
  <button
    className={cn(
      "w-44 h-10 bg-gradient-to-b from-white/10 to-transparent hover:to-white/10 rounded text-light",
      className
    )}
  >
    Download Resume
  </button>
);

const SocialIcons = ({ className }: { className?: string }) => (
  <div className={cn("flex gap-6", className)}>
    <SocialLinkBox iconClassNames="fa-solid fa-phone" />
    <SocialLinkBox iconClassNames="fa-regular fa-envelope" />
    <SocialLinkBox iconClassNames="fa-brands fa-github" />
    <SocialLinkBox iconClassNames="fa-brands fa-linkedin-in" />
  </div>
);
