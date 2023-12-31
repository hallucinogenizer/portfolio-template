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
import { data } from "../../data";

const { testimonials: testimonialsData } = data;

const MAX_SLIDES_TO_SHOW = 3;

export default function TestimonialsSection() {
  const [testimonialsToDisplayRange, setTestimonialsToDisplayRange] = useState<
    [number, number]
  >([0, MAX_SLIDES_TO_SHOW]);

  return (
    <div
      className={cn("relative", HORIZONTAL_PADDING)}
      id={TESTIMONIALS_SECTION_ID}
    >
      <div className="flex flex-col gap-16 relative z-10">
        <div className="flex justify-between items-center">
          <SectionHeading title={["My", "Testimonials"]} />
          {testimonialsData.length > MAX_SLIDES_TO_SHOW && (
            <TestimonialSliderArrows
              testimonialsToDisplayRange={testimonialsToDisplayRange}
              setTestimonialsToDisplayRange={setTestimonialsToDisplayRange}
            />
          )}
        </div>
        <TestimonialCards
          testimonialsToDisplayRange={testimonialsToDisplayRange}
        />
      </div>

      <BackgroundBlurredCircle
        variant={BgCircleVariant.BLUE}
        className="-left-24 top-0 bg-opacity-50"
      />
      <BackgroundBlurredCircle
        variant={BgCircleVariant.RED}
        className="-right-24 bottom-0 bg-opacity-50"
      />
    </div>
  );
}
