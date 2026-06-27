import BackgroundStarsImage from "../../assets/bg-stars.png";
import { data } from "../../data";
import { EXPERTISE_SECTION_ID, HORIZONTAL_PADDING } from "../../lib/constants";
import { cn } from "../../lib/utils/cn";
import { SectionHeading } from "../common/SectionHeading";
import SkillCard from "./SkillCard";
import { Fade } from "react-awesome-reveal";

export default function MyExpertiseSection() {
  return (
    <section
      className={cn(
        "relative flex flex-col gap-12 overflow-hidden bg-right-top bg-no-repeat",
        HORIZONTAL_PADDING
      )}
      style={{ backgroundImage: `url("${BackgroundStarsImage}")` }}
      id={EXPERTISE_SECTION_ID}
    >
      <div className="absolute right-8 top-16 hidden h-48 w-48 rounded-full border border-white/10 md:block" />
      <div className="relative z-10 flex flex-col gap-5 md:max-w-3xl">
        <SectionHeading title={["My", "Expertise"]} />
        <p className="text-lg leading-8 text-[#b8aea2]">
          A practical mix of product engineering, frontend architecture, backend systems, and the communication needed
          to keep teams moving cleanly.
        </p>
      </div>
      <SkillCards />
    </section>
  );
}

const SkillCards = () => {
  const { skills: skillsData } = data;

  return (
    <div className="relative z-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {skillsData.map((skill, i) => (
        <Fade key={skill.title} direction="up" delay={50 * i} triggerOnce>
          <SkillCard content={skill} />
        </Fade>
      ))}
    </div>
  );
};
