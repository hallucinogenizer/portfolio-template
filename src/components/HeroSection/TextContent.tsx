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
    }, 2000);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      className={cn(
        "md:text-3xl text-2xl font-bold leading-10 tracking-widest",
        "flex items-start gap-5"
      )}
      style={{ fontFamily: "Roboto Mono" }}
    >
      <p className="text-stone-300">I'm a </p>
      <div
        className="text-teal-500 h-10 overflow-clip relative"
        style={{ width: "30rem" }}
      >
        {personData.titles.map((title, titleIndex) => (
          <p
            className={cn(
              "absolute left-0 top-24 transition-all duration-500",
              titleIndex === currentTitleIndex && "top-0"
            )}
          >
            {title}
          </p>
        ))}
      </div>
    </div>
  );
};

const DownloadResume = ({ className }: { className?: string }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <a
      className={cn(
        "px-3 py-2 w-fit border border-teal-500 hover:bg-teal-500 rounded",
        "md:text-base text-sm text-teal-500 hover:text-white",
        "flex items-center gap-1",
        className
      )}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      href={Resume}
    >
      <span>Download Resume</span>
      <i
        className={cn(
          "fa-solid fa-chevron-down transition-all duration-500 pl-1",
          isHover && "-rotate-90 pl-0"
        )}
      ></i>
    </a>
  );
};

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
