import { ExperienceDataType } from "../../lib/types";
import { cn } from "../../lib/utils/cn";

export default function ExperienceCard({
  content,
  highlight,
}: {
  content: ExperienceDataType;
  highlight?: boolean;
}) {
  return (
    <div
      className={cn(
        "group flex max-w-none flex-col gap-4 rounded-[1.5rem] border border-white/10 bg-[var(--panel)] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.24)] backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:border-[var(--cyan)]/30 md:max-w-[32rem]",
        highlight && "border-[var(--amber)]/30 bg-[rgba(244,180,91,0.08)]"
      )}
    >
      <p className="w-fit rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 font-['IBM_Plex_Mono'] text-xs font-semibold uppercase tracking-[0.18em] text-[#b8aea2]">
        {content.date}
      </p>
      <div className="flex min-h-60 flex-col gap-3">
        <h3 className="font-['IBM_Plex_Mono'] text-lg font-semibold leading-relaxed text-[var(--cyan)]">
          {content.companyName}
        </h3>
        <h4 className="text-xl font-extrabold leading-snug text-[#f6f0e8]">
          {content.jobTitle}
        </h4>
        <p className="whitespace-pre-line text-sm font-normal leading-6 text-[#b8aea2]">
          {content.description}
        </p>
      </div>
    </div>
  );
}
