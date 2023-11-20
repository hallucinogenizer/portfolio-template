import BackgroundStarsImage from "../../assets/bg-stars.png";
import { EXPERTISE_SECTION_ID, HORIZONTAL_PADDING } from "../../lib/constants";
import { cn } from "../../lib/utils/cn";
import { SectionHeading } from "../common/SectionHeading";
import SkillCard from "./SkillCard";
import { skillsData } from "./skillsData";
import { Fade } from "react-awesome-reveal";

export default function MyExpertiseSection() {
  return (
    <div
      className={cn(
        "flex flex-col gap-16 bg-right-top bg-no-repeat",
        HORIZONTAL_PADDING
      )}
      style={{ backgroundImage: `url("${BackgroundStarsImage}")` }}
      id={EXPERTISE_SECTION_ID}
    >
      <SectionHeading title={["My", "Expertise"]} />
      <SkillCards />
    </div>
  );
}

const SkillCards = () => (
  <div className="flex flex-wrap gap-6 justify-center">
    {skillsData.map((skill, i) => (
      <Fade direction="up" delay={50 * i} triggerOnce>
        <SkillCard content={skill} />
      </Fade>
    ))}
  </div>
);
