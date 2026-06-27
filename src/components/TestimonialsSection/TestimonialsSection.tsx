import { SectionHeading } from "../common/SectionHeading";
import { BackgroundBlurredCircle } from "../common/BackgroundBlurredCircle";
import TestimonialCards from "./TestimonialCards";
import { TestimonialSliderArrows } from "./SliderArrows";
import { useState } from "react";
import {
  BgCircleVariant,
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
    <section
      className={cn("relative", HORIZONTAL_PADDING)}
      id={TESTIMONIALS_SECTION_ID}
    >
      <div className="relative z-10 flex flex-col gap-12">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <SectionHeading title={["Trusted", "By Teams"]} />
            <p className="mt-5 text-lg leading-8 text-[#b8aea2]">
              Notes from people who have seen the work up close across product, engineering, and leadership contexts.
            </p>
          </div>
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
        className="-left-24 top-0 opacity-45"
      />
      <BackgroundBlurredCircle
        variant={BgCircleVariant.RED}
        className="-right-24 bottom-0 opacity-45"
      />
    </section>
  );
}
