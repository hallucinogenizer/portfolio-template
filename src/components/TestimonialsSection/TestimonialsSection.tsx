import { SectionHeading } from "../common/SectionHeading";
import {
  BackgroundBlurredCircle,
  BgCircleVariant,
} from "../common/BackgroundBlurredCircle";
import TestimonialCards from "./TestimonialCards";
import { TestimonialSliderArrows } from "./SliderArrows";
import { useState } from "react";
import {
  HORIZONTAL_PADDING,
  TESTIMONIALS_SECTION_ID,
} from "../../lib/constants";
import { cn } from "../../lib/utils/cn";

export default function TestimonialsSection() {
  const [testimonialsToDisplayRange, setTestimonialsToDisplayRange] = useState<
    [number, number]
  >([0, 3]);

  return (
    <div
      className={cn("relative", HORIZONTAL_PADDING)}
      id={TESTIMONIALS_SECTION_ID}
    >
      <div className="flex flex-col gap-16 relative z-10">
        <div className="flex justify-between items-center">
          <SectionHeading title={["My", "Testimonials"]} />
          <TestimonialSliderArrows
            testimonialsToDisplayRange={testimonialsToDisplayRange}
            setTestimonialsToDisplayRange={setTestimonialsToDisplayRange}
          />
        </div>
        <TestimonialCards
          testimonialsToDisplayRange={testimonialsToDisplayRange}
        />
      </div>

      <BackgroundBlurredCircle
        variant={BgCircleVariant.ONE}
        className="-left-24 top-0 bg-opacity-50"
      />
      <BackgroundBlurredCircle
        variant={BgCircleVariant.TWO}
        className="-right-24 bottom-0 bg-opacity-50"
      />
    </div>
  );
}
