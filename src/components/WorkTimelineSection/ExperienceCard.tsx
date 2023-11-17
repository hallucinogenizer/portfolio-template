import { cn } from "../../lib/utils/cn";
import { ExperienceDataType } from "./experienceData";

export default function ExperienceCard({
  content,
  side,
}: {
  content: ExperienceDataType;
  side: "LEFT" | "RIGHT";
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 pt-16",
        side === "LEFT" && "items-end text-right"
      )}
      style={{ maxWidth: "30rem" }}
    >
      <p className="text-neutral-300 text-base font-normal leading-loose">
        {content.date}
      </p>
      <div
        className="left-0 top-0 bg-white bg-opacity-10 rounded-lg p-8 flex flex-col gap-2"
        style={{ minHeight: "15rem" }}
      >
        <h3 className=" text-teal-500 text-lg font-medium font-['Roboto Mono'] leading-relaxed">
          {content.companyName}
        </h3>
        <h4 className=" text-neutral-300 text-base font-bold leading-normal">
          {content.jobTitle}
        </h4>
        <p className=" text-neutral-300 text-sm font-normal capitalize leading-tight text-justify">
          {content.description}
        </p>
      </div>
    </div>
  );
}
