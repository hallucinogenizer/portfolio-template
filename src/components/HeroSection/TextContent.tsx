import { useEffect, useState } from "react";
import { ClassNameProp } from "../../lib/utils/utils";
import { cn } from "../../lib/utils/cn";
import { SocialLinkBox } from "../common/SocialLinkBox";
import Resume from "../../assets/custom/Rohan Hussain.pdf";
import { data } from "../../data";

const { person: personData } = data;

export const TextContent = ({ className }: { className: string }) => (
  <div className={cn("flex flex-col gap-3", className)}>
    <Hello className="md:mb-4 mb-2" />
    <PersonName className="md:mb-2 mb-1" />
    <ProfessionalTitles />
    <DownloadResume className="md:mt-10 mt-4" />
    <SocialIcons className="mt-8" />
  </div>
);

const Hello = ({ className }: ClassNameProp) => (
  <div className={cn("inline-flex items-center gap-4", className)}>
    <ShortLine />{" "}
    <p
      className="text-stone-300 text-xl leading-loose"
      style={{ fontFamily: "Roboto Mono" }}
    >
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
      "text-light md:text-6xl text-5xl font-bold font-['Poppins'] uppercase leading-none",
      className
    )}
  >
    {personData.name}
  </h1>
);

const ProfessionalTitles = () => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTitleIndex((cur) => (cur + 1) % personData.titles.length);
    }, 1500);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <h3
      className="md:text-3xl text-2xl font-medium leading-10 tracking-widest"
      style={{ fontFamily: "Roboto Mono" }}
    >
      <span className="text-stone-300">I'm a </span>
      <span className="text-teal-500">
        {personData.titles[currentTitleIndex]}
      </span>
    </h3>
  );
};

const DownloadResume = ({ className }: { className?: string }) => (
  <a
    className={cn(
      "px-3 py-2 md:text-base text-sm w-fit border border-teal-500 hover:bg-teal-500 text-teal-500 hover:text-white rounded",
      className
    )}
    href={Resume}
  >
    Download Resume
  </a>
);

const SocialIcons = ({ className }: { className?: string }) => (
  <div className={cn("flex gap-6", className)}>
    <SocialLinkBox
      iconClassNames="fa-solid fa-phone"
      link={`tel:${personData.phoneNumber}`}
    />
    <SocialLinkBox
      iconClassNames="fa-regular fa-envelope"
      link={`mailto:${personData.email}`}
    />
    <SocialLinkBox
      iconClassNames="fa-brands fa-github"
      link={personData.github}
    />
    <SocialLinkBox
      iconClassNames="fa-brands fa-linkedin-in"
      link={personData.linkedIn}
    />
  </div>
);
