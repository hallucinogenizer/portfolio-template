import { useState } from "react";
import { SectionHeading } from "../common/SectionHeading";
import {
  BackgroundBlurredCircle,
  BgCircleVariant,
} from "../common/BackgroundBlurredCircle";
import TestimonialCards from "./TestimonialCards";

export default function TestimonialsSection() {
  return (
    <div className="relative px-36">
      <div className="flex flex-col gap-16 relative z-10">
        <div className="flex justify-between items-center">
          <SectionHeading title={["My", "Testimonials"]} />
          <TestimonialSliderArrows />
        </div>
        <TestimonialCards />
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

const TestimonialSliderArrows = () => (
  <div className="flex gap-8">
    <EncircledArrowButton direction="LEFT" />
    <EncircledArrowButton direction="RIGHT" />
  </div>
);

const EncircledArrowButton = ({
  direction,
}: {
  direction: "LEFT" | "RIGHT";
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className="bg-white/10 rounded-full w-16 h-16 relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative z-10">
        <i
          className={`fa-solid fa-lg text-light ${
            direction === "LEFT" ? "fa-chevron-left" : "fa-chevron-right"
          }`}
        ></i>
      </div>
      {isHovered && (
        <div className="w-16 h-16 bg-sky-900 rounded-full blur-lg absolute z-0 top-0 left-0" />
      )}
    </button>
  );
};
