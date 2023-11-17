import { HERO_SECTION_ID, HORIZONTAL_PADDING } from "../../lib/constants";
import { cn } from "../../lib/utils/cn";
import {
  BackgroundBlurredCircle,
  BgCircleVariant,
} from "./BackgroundBlurredCircle";
import { PersonImage } from "./PersonImage";
import { TextContent } from "./TextContent";

export function HeroSection() {
  return (
    <div
      className="w-full relative"
      style={{ minHeight: "42rem" }}
      id={HERO_SECTION_ID}
    >
      <BackgroundBlurredCircle variant={BgCircleVariant.ONE} />
      <BackgroundBlurredCircle variant={BgCircleVariant.TWO} />

      <div
        className={cn(
          "pt-52 flex justify-between relative z-10",
          HORIZONTAL_PADDING
        )}
      >
        <TextContent />
        <PersonImage />
      </div>
    </div>
  );
}
