import { HOVER_TRANSLATE_CLASSES } from "../../lib/constants";
export const SocialLinkBox = ({
  iconClassNames,
  link,
}: {
  iconClassNames: string;
  link?: string;
}) => (
  <a
    href={link}
    className={`flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-[#f6f0e8] shadow-[0_16px_45px_rgba(0,0,0,0.28)] backdrop-blur hover:border-[var(--amber)]/50 hover:bg-[var(--amber)]/10 hover:text-[var(--amber)] ${HOVER_TRANSLATE_CLASSES}`}
    target="_blank"
    rel="noreferrer"
  >
    <i className={iconClassNames} />
  </a>
);
