import BackgroundStarsImage from "../../assets/bg-stars.png";
import { SectionHeading } from "../common/SectionHeading";
import SkillCard from "./SkillCard";
import { skillsData } from "./skills";
import { Fade } from "react-awesome-reveal";

export default function MyExpertiseSection() {
  return (
    <div
      className="px-36 flex flex-col gap-16 bg-right-top bg-no-repeat"
      style={{ backgroundImage: `url("${BackgroundStarsImage}")` }}
    >
      <SectionHeading title={["My", "Expertise"]} />
      <SkillCards />
    </div>
  );
}

const SkillCards = () => (
  <div className="grid grid-cols-3 gap-6">
    {skillsData.map((skill) => (
      <Fade direction="up" damping={0.25} duration={500} triggerOnce>
        <SkillCard content={skill} />
      </Fade>
    ))}
  </div>
);
