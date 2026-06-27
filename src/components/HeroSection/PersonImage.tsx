import { CSSProperties } from "react";
import { data } from "../../data";
import { cn } from "../../lib/utils/cn";

export const PersonImage = ({
  className,
  style,
}: {
  className?: string;
  style?: CSSProperties;
}) => (
  <div className={cn("relative", className)} style={style}>
    <div className="absolute -inset-4 rounded-[2rem] border border-white/10 bg-white/[0.035] shadow-[0_40px_120px_rgba(0,0,0,0.45)] backdrop-blur" />
    <div className="absolute -inset-1 rotate-3 rounded-[2rem] bg-gradient-to-br from-[var(--cyan)]/25 via-white/5 to-[var(--amber)]/25" />
    <div className="relative flex h-full w-full items-end justify-center overflow-hidden rounded-[2rem] border border-white/15 bg-gradient-to-b from-white/[0.09] via-white/[0.04] to-black/20">
      <img
        src={data.person.picture}
        alt={data.person.name}
        className="h-[96%] w-full object-contain object-bottom drop-shadow-[0_30px_55px_rgba(0,0,0,0.48)]"
      />
    </div>
  </div>
);
