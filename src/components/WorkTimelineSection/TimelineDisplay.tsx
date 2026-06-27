import ExperienceCard from "./ExperienceCard";

import { cn } from "../../lib/utils/cn";
import { Fade } from "react-awesome-reveal";
import { data } from "../../data";
import { ExperienceDataType } from "../../lib/types";

const { experience: experienceData } = data;

export default function TimelineDisplay() {
  return (
    <div className="relative mx-auto max-w-6xl text-[#f6f0e8]">
      <div className="flex flex-col gap-10">
        {experienceData.map((experienceContent, i) => (
          <SingleExperience
            key={`${experienceContent.companyName}-${experienceContent.date}`}
            content={experienceContent}
            side={i % 2 === 0 ? "LEFT" : "RIGHT"}
            highlight={i === 0}
          />
        ))}
      </div>
    </div>
  );
}

const SingleExperience = ({
  content,
  side,
  highlight,
}: {
  content: ExperienceDataType;
  side: "LEFT" | "RIGHT";
  highlight?: boolean;
}) => (
  <Fade direction="up" triggerOnce>
    <div className="relative grid grid-cols-[2.5rem_minmax(0,1fr)] md:grid-cols-[minmax(0,1fr)_7rem_minmax(0,1fr)]">
      <div className="relative col-start-1 row-start-1 flex justify-center md:col-start-2">
        <div
          data-timeline-spine
          className="absolute -bottom-10 -top-10 w-0.5 rounded-full shadow-[0_0_28px_rgba(49,213,245,0.5)]"
          style={{ backgroundColor: "rgba(49, 213, 245, 0.7)" }}
        />
        <div
          data-timeline-connector={side.toLowerCase()}
          className={cn(
            "absolute top-10 h-0.5 w-6 rounded-full shadow-[0_0_18px_rgba(49,213,245,0.6)]",
            "left-1/2 md:w-14",
            side === "LEFT" && "md:left-auto md:right-1/2"
          )}
          style={{ backgroundColor: "rgba(49, 213, 245, 0.92)" }}
        />
        <div className="absolute top-8 z-20 h-4 w-4 rounded-full border border-[var(--cyan)] bg-[#07080d] shadow-[0_0_0_8px_rgba(49,213,245,0.12),0_0_24px_rgba(49,213,245,0.7)]" />
      </div>
      <div
        className={cn(
          "relative z-10 col-start-2 row-start-1 md:col-start-auto",
          side === "LEFT" ? "md:col-start-1" : "md:col-start-3"
        )}
      >
        <ExperienceCard content={content} highlight={highlight} />
      </div>
    </div>
  </Fade>
);
