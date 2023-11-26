import { Fade } from "react-awesome-reveal";

import { HOVER_TRANSLATE_CLASSES } from "../../lib/constants";
import { TestimonialDataType, TestimonialPersonType } from "../../lib/types";
import { data } from "../../data";

export default function TestimonialCards({
  testimonialsToDisplayRange,
}: {
  testimonialsToDisplayRange: [number, number];
}) {
  return (
    <div className="flex flex-wrap justify-between gap-16">
      {data.testimonials
        .slice(testimonialsToDisplayRange[0], testimonialsToDisplayRange[1])
        .map((testimonialData, i) => (
          <Fade direction="up" delay={i * 200} triggerOnce>
            <TestimonialCard content={testimonialData} />
          </Fade>
        ))}
    </div>
  );
}

const TestimonialCard = ({ content }: { content: TestimonialDataType }) => (
  <div
    className={`bg-zinc-400 bg-opacity-20 flex flex-col gap-8 justify-around shadow p-6 rounded-lg ${HOVER_TRANSLATE_CLASSES} md:w-[21.625rem] w-full`}
  >
    <div className="flex flex-col gap-4">
      <div>
        <i className="fa-solid fa-quote-left fa-2xl text-teal-500"></i>
      </div>
      <p className="text-light md:text-base text-sm text-justify leading-tight whitespace-pre-wrap overflow-ellipsis line-clamp-[14]">
        {content.quote}
      </p>
    </div>
    <TestominialPersonProfile content={content.person} />
  </div>
);

const TestominialPersonProfile = ({
  content,
}: {
  content: TestimonialPersonType;
}) => (
  <div className="flex gap-4 items-center">
    <img src={content.image} className="rounded-full object-fill w-16 h-16" />
    <div className="flex flex-col gap-1">
      <h5
        className="text-light md:text-lg text-base font-medium leading-relaxed"
        style={{ fontFamily: "Roboto Mono" }}
      >
        {content.name}
      </h5>
      <p className="text-stone-300 text-sm whitespace-pre-wrap font-normal capitalize leading-tight">
        {content.title}
      </p>
    </div>
  </div>
);
