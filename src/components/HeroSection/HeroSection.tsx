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
    <div className="w-full relative py-16" id={HERO_SECTION_ID}>
      <BackgroundBlurredCircle
        variant={BgCircleVariant.BLUE}
        className="left-16"
      />
      <BackgroundBlurredCircle
        variant={BgCircleVariant.RED}
        className="right-0 -bottom-24 bg-[#9E2A3D]/50 absolute lg:hidden w-96 h-96"
      />

      <div
        className={cn(
          "pt-0 md:pt-32 lg:pt-0 flex gap-4 md:flex-row flex-col-reverse justify-between relative z-10",
          HORIZONTAL_PADDING
        )}
      >
        <TextContent className="flex-shrink" />
        <div className="relative">
          <PersonImage className="lg:absolute z-10 top-0 right-0 lg:w-[30rem] lg:h-[30rem] md:w-96 md:h-96 w-52 h-52" />
          <BackgroundBlurredCircle
            variant={BgCircleVariant.RED}
            className="right-12 top-0 bg-[#9E2A3D] lg:absolute lg:block hidden w-96 h-96"
          />
        </div>
      </div>
    </div>
  );
}
