import { Dispatch, SetStateAction } from "react";
import { EncircledArrowButton } from "./EncircledArrowButton";
import { data } from "../../data";

const { testimonials: testimonialsData } = data;

export const TestimonialSliderArrows = ({
  testimonialsToDisplayRange,
  setTestimonialsToDisplayRange,
}: {
  testimonialsToDisplayRange: [number, number];
  setTestimonialsToDisplayRange: Dispatch<SetStateAction<[number, number]>>;
}) => (
  <div className="flex gap-8">
    <EncircledArrowButton
      direction="LEFT"
      disabled={testimonialsToDisplayRange[0] === 0}
      onClick={() =>
        setTestimonialsToDisplayRange((cur) => [cur[0] - 1, cur[1] - 1])
      }
    />
    <EncircledArrowButton
      direction="RIGHT"
      disabled={testimonialsToDisplayRange[1] === testimonialsData.length}
      onClick={() =>
        setTestimonialsToDisplayRange((cur) => [cur[0] + 1, cur[1] + 1])
      }
    />
  </div>
);
