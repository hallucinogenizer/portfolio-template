import { SectionHeading } from "../common/SectionHeading";
import HexagonalBackgroundPattern from "../../assets/hexagonal-pattern-background.svg";
import TimelineDisplay from "./TimelineDisplay";

export default function WorkTimelineSection() {
  return (
    <div className="flex flex-col gap-16 px-36 relative overflow-clip">
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
