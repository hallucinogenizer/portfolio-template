import { useState } from "react";
import { ClassNameProp } from "../../lib/utils/utils";
import { cn } from "../../lib/utils/cn";
import { SocialLinkBox } from "../common/SocialLinkBox";
import Resume from "../../assets/custom/Rohan Hussain.pdf";
import { data } from "../../data";
import { FlipWords } from "../ui/aceternity/FlipWords";

const { person: personData } = data;

export const TextContent = ({ className }: { className: string }) => (
  <div className={cn("flex flex-col gap-5", className)}>
    <Hello />
    <PersonName />
    <ProfessionalTitles />
    <p className="max-w-2xl text-lg leading-8 text-[#c9c0b4] md:text-xl">
      I lead frontend-heavy product builds with React, Next.js, and TypeScript, modernizing complex codebases while
      keeping delivery fast, polished, and reliable.
    </p>
    <div className="flex flex-col gap-5 pt-4 sm:flex-row sm:items-center">
      <DownloadResume />
      <SocialIcons />
    </div>
  </div>
);

const Hello = ({ className }: ClassNameProp) => (
  <div className={cn("inline-flex w-fit items-center gap-4 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2", className)}>
    <ShortLine />
    <p className="font-['IBM_Plex_Mono'] text-xs font-semibold uppercase tracking-[0.28em] text-[#d8cbbc]">
      Hello, I'm
    </p>
  </div>
);
const ShortLine = () => <div className="h-px w-8 bg-[var(--amber)]"></div>;

const PersonName = ({ className }: ClassNameProp) => (
  <h1 className={cn("max-w-4xl font-['Fraunces'] text-[clamp(4.25rem,10vw,9.75rem)] font-semibold leading-[0.82] tracking-[-0.075em] text-[#f8efe4]", className)}>
    {personData.name}
  </h1>
);

const ProfessionalTitles = () => {
  return (
    <div
      className={cn(
        "text-xl font-semibold leading-8 tracking-tight text-[#f6f0e8] md:text-2xl",
        "flex flex-col items-start gap-x-3 gap-y-2 lg:flex-row"
      )}
    >
      <p className="text-[#b8aea2]">I am a</p>
      <div className="text-[var(--cyan)]">
        <FlipWords words={personData.titles} duration={2200} className="px-0 text-[var(--cyan)] dark:text-[var(--cyan)]" />
      </div>
    </div>
  );
};

const DownloadResume = ({ className }: { className?: string }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <a
      className={cn(
        "group flex w-fit items-center gap-3 rounded-full border border-[var(--amber)]/60 bg-[var(--amber)] px-5 py-3",
        "text-sm font-bold uppercase tracking-[0.16em] text-[#110f0c] shadow-[0_16px_48px_rgba(244,180,91,0.22)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#ffd082]",
        className
      )}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      href={Resume}
      target="_blank"
      rel="noreferrer"
    >
      <span>Download Resume</span>
      <i className={cn("fa-solid fa-arrow-down transition-all duration-500", isHover && "-rotate-90")}></i>
    </a>
  );
};

const SocialIcons = ({ className }: { className?: string }) => (
  <div className={cn("flex gap-3", className)}>
    <SocialLinkBox iconClassNames="fa-solid fa-phone" link={`tel:${personData.phoneNumber}`} />
    <SocialLinkBox iconClassNames="fa-regular fa-envelope" link={`mailto:${personData.email}`} />
    <SocialLinkBox iconClassNames="fa-brands fa-github" link={personData.github} />
    <SocialLinkBox iconClassNames="fa-brands fa-linkedin-in" link={personData.linkedIn} />
  </div>
);
