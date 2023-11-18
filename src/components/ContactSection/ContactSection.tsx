import { CONTACT_SECTION_ID, HORIZONTAL_PADDING } from "../../lib/constants";
import { cn } from "../../lib/utils/cn";
import { SocialLinkBox } from "../common/SocialLinkBox";

export default function ContactSection() {
  return (
    <div
      className={cn(
        "py-10 w-full h-44",
        "flex flex-col gap-4 items-center",
        "bg-gradient-to-b from-fuchsia-950/20 from-10 to-cyan-400/0",
        HORIZONTAL_PADDING
      )}
      id={CONTACT_SECTION_ID}
    >
      <div className="flex gap-8">
        <SocialLinkBox iconClassNames="fa-solid fa-phone" />
        <SocialLinkBox iconClassNames="fa-regular fa-envelope" />
        <SocialLinkBox iconClassNames="fa-brands fa-github" />
        <SocialLinkBox iconClassNames="fa-brands fa-linkedin-in" />
      </div>
      <p className="text-light">Feel free to contact me</p>
    </div>
  );
}
