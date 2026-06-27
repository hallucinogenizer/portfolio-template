import { HOVER_TRANSLATE_CLASSES } from "../../lib/constants";
import { SkillType } from "../../lib/types";
import { cn } from "../../lib/utils/cn";
import { Meteors } from "../ui/aceternity/Meteors";

export default function SkillCard({ content }: { content: SkillType }) {
  return (
    <div
      className={cn(
        "group relative min-h-64 overflow-hidden rounded-[1.5rem] border border-white/10 bg-[var(--panel)] p-6 text-[#f6f0e8] shadow-[0_24px_80px_rgba(0,0,0,0.26)] backdrop-blur",
        "flex flex-col gap-5",
        HOVER_TRANSLATE_CLASSES
      )}
    >
      <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-[var(--cyan)]/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative h-14 w-14">
        <div className="absolute left-2 top-3 z-10">
          <i className={`${content.icon} fa-2xl text-[#f6f0e8]`} />
        </div>
        <div className="absolute left-0 top-0 h-14 w-14 rounded-2xl border border-white/10 bg-[var(--cyan)]/14 shadow-[0_0_42px_rgba(49,213,245,0.18)]"></div>
      </div>
      <h3 className="font-['IBM_Plex_Mono'] text-lg font-semibold leading-relaxed text-[#f6f0e8]">
        {content.title}
      </h3>
      <p className="line-clamp-4 text-base font-normal leading-7 text-[#b8aea2]">
        {content.description}
      </p>
      <Meteors number={2} />
    </div>
  );
}
