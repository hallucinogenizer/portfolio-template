import { HOVER_TRANSLATE_CLASSES } from "../../lib/constants";
import { cn } from "../../lib/utils/cn";
import { SkillType } from "./skills";

export default function SkillCard({ content }: { content: SkillType }) {
  return (
    <div
      className={cn(
        "w-96 bg-white/10 rounded-lg p-8 text-light",
        "flex flex-col gap-4",
        HOVER_TRANSLATE_CLASSES
      )}
      style={{ minHeight: "15rem" }}
    >
      <div className="relative w-12 h-12">
        <div className="absolute z-10 top-3 left-2">
          <i className={`${content.icon} fa-2xl text-cyan-500`} />
        </div>
        <div className="bg-cyan-500/50 absolute blur-md rounded-full w-12 h-12 top-0 left-0"></div>
      </div>
      <h3
        className="text-neutral-300 text-lg font-medium leading-relaxed"
        style={{ fontFamily: "Roboto Mono" }}
      >
        {content.title}
      </h3>
      <p className="text-stone-300 text-base font-normal font-['Segoe UI'] leading-loose">
        {content.description}
      </p>
    </div>
  );
}
