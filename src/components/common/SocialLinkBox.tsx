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
    className={`w-12 h-12 bg-gradient-to-b from-white/10 to-white/5 rounded-3xl flex justify-center items-center hover:to-white/10 cursor-pointer ${HOVER_TRANSLATE_CLASSES}`}
    target="_blank"
  >
    <i className={`${iconClassNames} text-cyan-500`} />
  </a>
);
