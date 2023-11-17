import TimelineBranchRightSvg from "../../assets/timelineBranchRight.svg";
import TimelineBranchLeftSvg from "../../assets/timelineBranchLeft.svg";
import ExperienceCard from "./ExperienceCard";
import { ExperienceDataType, experienceData } from "./experienceData";
import { cn } from "../../lib/utils/cn";

export default function TimelineDisplay() {
  return (
    <div className="flex text-light h-full">
      {/* left half of screen */}
      <div
        className="h-full flex flex-col justify-start items-end pt-12"
        style={{ flexBasis: "calc(50% - 0.375rem)" }}
      >
        {experienceData.map((experienceContent, i) => (
          <SingleExperience
            content={experienceContent}
            side="LEFT"
            className={i % 2 === 0 ? "invisible" : ""}
          />
        ))}
      </div>

      {/* line down the middle */}
      <div className="w-1.5 min-h-max bg-gradient-to-b from-neutral-900/60 via-20% via-cyan-500/60 to-neutral-900/60" />

      {/* right half of screen */}
      <div
        className="h-full flex flex-col justify-start items-start pt-12"
        style={{ flexBasis: "calc(50% - 0.375rem)" }}
      >
        {experienceData.map((experienceContent, i) => (
          <SingleExperience
            content={experienceContent}
            side="RIGHT"
            className={i % 2 !== 0 ? "invisible" : ""}
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
  <div
    className={cn(
      "flex gap-6",
      side === "LEFT" && "flex-row-reverse",
      className
    )}
  >
    <img
      src={side === "RIGHT" ? TimelineBranchRightSvg : TimelineBranchLeftSvg}
      className="w-10 h-auto self-start"
    />
    <ExperienceCard content={content} side={side} />
  </div>
);
