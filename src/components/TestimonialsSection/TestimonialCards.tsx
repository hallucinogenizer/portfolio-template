import { Fade } from "react-awesome-reveal";

import { TestimonialDataType, TestimonialPersonType } from "../../lib/types";
import { data } from "../../data";
import { cn } from "../../lib/utils/cn";

export default function TestimonialCards({
  testimonialsToDisplayRange,
}: {
  testimonialsToDisplayRange: [number, number];
}) {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {data.testimonials
        .slice(testimonialsToDisplayRange[0], testimonialsToDisplayRange[1])
        .map((testimonialData, i) => (
          <Fade key={testimonialData.person.name} direction="up" delay={i * 150} triggerOnce>
            <TestimonialCard content={testimonialData} />
          </Fade>
        ))}
    </div>
  );
}

const TestimonialCard = ({ content }: { content: TestimonialDataType }) => (
  <div
    className={cn(
      "group flex min-h-[27rem] flex-col justify-between gap-8 rounded-[1.5rem] border border-white/10 bg-[var(--panel)] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.25)] backdrop-blur",
      "transition-all duration-300 hover:-translate-y-2 hover:border-[var(--amber)]/35 hover:bg-[var(--panel-strong)]"
    )}
  >
    <div className="flex flex-col gap-4">
      <div>
        <i className="fa-solid fa-quote-left fa-2xl text-[var(--amber)]"></i>
      </div>
      <p className="line-clamp-[14] whitespace-pre-wrap text-sm leading-6 text-[#d8d0c6] md:text-base">
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
  <div className="flex items-center gap-4 border-t border-white/10 pt-5">
    <img src={content.image} alt={content.name} className="h-16 w-16 rounded-2xl object-cover" />
    <div className="flex flex-col gap-1">
      <h5 className="font-['IBM_Plex_Mono'] text-base font-semibold leading-relaxed text-[#f6f0e8] md:text-lg">
        {content.name}
      </h5>
      <p className="whitespace-pre-wrap text-sm font-normal capitalize leading-tight text-[#b8aea2]">
        {content.title}
      </p>
    </div>
  </div>
);
