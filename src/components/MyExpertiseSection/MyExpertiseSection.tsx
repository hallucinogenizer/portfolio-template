import BackgroundStarsImage from "../../assets/bg-stars.png";
import SkillCard from "./SkillCard";
export default function MyExpertiseSection() {
  return (
    <div
      className="px-36 flex flex-col gap-16 bg-right-top bg-no-repeat"
      style={{ backgroundImage: `url("${BackgroundStarsImage}")` }}
    >
      <SectionHeading />
      <SkillCards />
    </div>
  );
}

const SectionHeading = () => (
  <h1 className="leading-10 font-['Poppins']">
    <span className="text-neutral-300 text-4xl font-medium">My</span>
    <br />
    <span className="text-cyan-500 text-6xl font-semibold ">Expertise</span>
  </h1>
);

const SkillCards = () => (
  <div className="grid grid-cols-3 gap-6">
    <SkillCard />
    <SkillCard />
    <SkillCard />
    <SkillCard />
    <SkillCard />
    <SkillCard />
  </div>
);
