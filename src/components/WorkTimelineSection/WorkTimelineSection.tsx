import { SectionHeading } from "../common/SectionHeading";
import HexagonalBackgroundPattern from "../../assets/hexagonal-pattern-background.svg";
import TimelineDisplay from "./TimelineDisplay";
import {
  HORIZONTAL_PADDING,
  WORK_EXPERIENCE_SECTION_ID,
} from "../../lib/constants";
import { cn } from "../../lib/utils/cn";

export default function WorkTimelineSection() {
  return (
    <div
      className={cn(
        "flex flex-col gap-16 relative overflow-clip",
        HORIZONTAL_PADDING
      )}
      id={WORK_EXPERIENCE_SECTION_ID}
    >
      <div className="relative z-10 flex flex-col gap-16">
        <SectionHeading title={["My Work", "Experience"]} />
        <TimelineDisplay />
      </div>

      {/* background hexagonal pattern */}
      <div className="absolute">
        <img src={HexagonalBackgroundPattern} className="opacity-20" />
      </div>
    </div>
  );
}
