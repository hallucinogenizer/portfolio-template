import { HERO_SECTION_ID, HORIZONTAL_PADDING } from "../../lib/constants";
import { cn } from "../../lib/utils/cn";
import {
  BackgroundBlurredCircle,
  BgCircleVariant,
} from "../common/BackgroundBlurredCircle";
import { PersonImage } from "./PersonImage";
import { TextContent } from "./TextContent";

export function HeroSection() {
  return (
    <div
      className="w-full relative"
      style={{ minHeight: "42rem" }}
      id={HERO_SECTION_ID}
    >
      <BackgroundBlurredCircle
        variant={BgCircleVariant.BLUE}
        className="left-16"
      />

      <div
        className={cn(
          "pt-24 md:pt-52 flex gap-4 md:flex-row flex-col-reverse justify-between relative z-10",
          HORIZONTAL_PADDING
        )}
      >
        <TextContent className="flex-shrink" />
        <div className="relative">
          <PersonImage className="lg:absolute z-10 top-0 right-0 md:w-[30rem] md:h-[30rem] w-40 h-40" />
          <BackgroundBlurredCircle
            variant={BgCircleVariant.RED}
            className="right-0 top-0 bg-[#9E2A3D] lg:absolute hidden"
            style={{ width: "27rem", height: "27rem" }}
          />
        </div>
      </div>
    </div>
  );
}
