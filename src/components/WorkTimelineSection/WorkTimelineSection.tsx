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
    <section
      className={cn(
        "relative flex flex-col gap-14 overflow-clip",
        HORIZONTAL_PADDING
      )}
      id={WORK_EXPERIENCE_SECTION_ID}
    >
      <div className="relative z-10 flex flex-col gap-5 md:max-w-4xl">
        <SectionHeading title={["Selected", "Experience"]} />
        <p className="text-lg leading-8 text-[#b8aea2]">
          A career path shaped by high-ownership product builds, startup velocity, platform work, and senior team
          leadership.
        </p>
      </div>
      <div className="relative z-10">
        <TimelineDisplay />
      </div>

      {/* background hexagonal pattern */}
      <div className="absolute -right-28 top-24 opacity-30">
        <img src={HexagonalBackgroundPattern} className="max-w-none opacity-25" />
      </div>
    </section>
  );
}
