import { Fade } from "react-awesome-reveal";

import { HOVER_TRANSLATE_CLASSES } from "../../lib/constants";
import {
  PersonType,
  TestimonialDataType,
  testimonialsData,
} from "./testimonialsData";

export default function TestimonialCards({
  testimonialsToDisplayRange,
}: {
  testimonialsToDisplayRange: [number, number];
}) {
  return (
    <div className="flex flex-wrap justify-center gap-16">
      {testimonialsData
        .slice(testimonialsToDisplayRange[0], testimonialsToDisplayRange[1])
        .map((testimonialData) => (
          <TestimonialCard content={testimonialData} />
        ))}
    </div>
  );
}

const TestimonialCard = ({ content }: { content: TestimonialDataType }) => (
  <Fade direction="up" triggerOnce>
    <div
      className={`bg-zinc-400 bg-opacity-20 shadow flex flex-col gap-4 p-6 ${HOVER_TRANSLATE_CLASSES}`}
      style={{ width: "21.625rem" }}
    >
      <div>
        <i className="fa-solid fa-quote-left fa-2xl text-teal-500"></i>
      </div>
      <p className="text-light leading-loose">{content.quote}</p>
      <TestominialPersonProfile content={content.person} />
    </div>
  </Fade>
);

const TestominialPersonProfile = ({ content }: { content: PersonType }) => (
  <div className="flex gap-4">
    <img src={content.image} className="rounded-full object-fill w-16 h-16" />
    <div className="flex flex-col gap-1">
      <h5 className="text-light text-lg font-medium font-['Roboto Mono'] leading-relaxed">
        {content.name}
      </h5>
      <p className="text-stone-300 text-sm font-normal capitalize leading-tight">
        {content.title}
      </p>
    </div>
  </div>
);
