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
        variant={BgCircleVariant.ONE}
        className="left-16"
      />
      <BackgroundBlurredCircle
        variant={BgCircleVariant.TWO}
        className="right-0 bottom-0"
      />

      <div
        className={cn(
          "pt-24 md:pt-52 flex gap-4 md:flex-row flex-col-reverse justify-between relative z-10",
          HORIZONTAL_PADDING
        )}
      >
        <TextContent className="flex-shrink" />
        <PersonImage />
      </div>
    </div>
  );
}
