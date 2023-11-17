import { SectionHeading } from "../common/SectionHeading";
import HexagonalBackgroundPattern from "../../assets/hexagonal-pattern-background.svg";

export default function WorkTimelineSection() {
  return (
    <div className="flex flex-col gap-16 px-36 relative overflow-clip">
      <div className="relative z-10">
        <SectionHeading title={["My Work", "Experience"]} />
      </div>

      {/* background hexagonal pattern */}
      <div className="absolute">
        <img src={HexagonalBackgroundPattern} className="opacity-20" />
      </div>
    </div>
  );
}
