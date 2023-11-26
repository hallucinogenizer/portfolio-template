import TimelineBranchRightSvg from "../../assets/timelineBranchRight.svg";
import TimelineBranchLeftSvg from "../../assets/timelineBranchLeft.svg";
import ExperienceCard from "./ExperienceCard";

import { cn } from "../../lib/utils/cn";
import { Fade } from "react-awesome-reveal";
import { HOVER_TRANSLATE_CLASSES } from "../../lib/constants";
import useWindowDimensions from "../../lib/hooks/useWindowDimensions";
import { data } from "../../data";
import { ExperienceDataType } from "../../lib/types";

const { experience: experienceData } = data;

export default function TimelineDisplay() {
  const { width } = useWindowDimensions();

  return (
    <div className="flex text-light h-full">
      {/* left half of screen */}
      <div
        className="h-full hidden md:flex flex-col justify-start items-end pt-12"
        style={{ flexBasis: "calc(50% - 0.375rem)" }}
      >
        {experienceData.map((experienceContent, i) => (
          <SingleExperience
            content={experienceContent}
            side="LEFT"
            className={i % 2 === 0 ? "invisible" : "visible"}
          />
        ))}
      </div>

      {/* line down the middle */}
      <div className="w-1.5 min-h-max bg-gradient-to-b from-neutral-900/60 via-20% via-cyan-500/60 to-neutral-900/60" />

      {/* right half of screen */}
      <div className="h-full flex flex-col justify-start items-start pt-12 md:basis-[calc(50%-0.375rem)]">
        {experienceData.map((experienceContent, i) => (
          <SingleExperience
            content={experienceContent}
            side="RIGHT"
            className={cn(i % 2 !== 0 && width >= 786 ? "invisible" : "")}
          />
        ))}
      </div>
    </div>
  );
}

const SingleExperience = ({
  content,
  side,
  className,
}: {
  content: ExperienceDataType;
  side: "LEFT" | "RIGHT";
  className?: string;
}) => (
  <Fade direction="up" triggerOnce>
    <div
      className={cn(
        `flex gap-6 ${HOVER_TRANSLATE_CLASSES}`,
        side === "LEFT" && "flex-row-reverse",
        className
      )}
    >
      <img
        src={side === "RIGHT" ? TimelineBranchRightSvg : TimelineBranchLeftSvg}
        className="w-10 h-auto self-start"
      />
      <ExperienceCard content={content} />
    </div>
  </Fade>
);
