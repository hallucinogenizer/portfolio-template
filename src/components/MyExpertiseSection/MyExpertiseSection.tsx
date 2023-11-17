import BackgroundStarsImage from "../../assets/bg-stars.png";
import { EXPERTISE_SECTION_ID } from "../../lib/constants";
import { SectionHeading } from "../common/SectionHeading";
import SkillCard from "./SkillCard";
import { skillsData } from "./skills";
import { Fade } from "react-awesome-reveal";

export default function MyExpertiseSection() {
  return (
    <div
      className="px-36 flex flex-col gap-16 bg-right-top bg-no-repeat"
      style={{ backgroundImage: `url("${BackgroundStarsImage}")` }}
      id={EXPERTISE_SECTION_ID}
    >
      <SectionHeading title={["My", "Expertise"]} />
      <SkillCards />
    </div>
  );
}

const SkillCards = () => (
  <div className="grid grid-cols-3 gap-6">
    {skillsData.map((skill, i) => (
      <Fade direction="up" delay={150 * i} triggerOnce>
        <SkillCard content={skill} />
      </Fade>
    ))}
  </div>
);
