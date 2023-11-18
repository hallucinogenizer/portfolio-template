import { CONTACT_SECTION_ID } from "../../lib/constants";
import { SocialLinkBox } from "../common/SocialLinkBox";

export default function ContactSection() {
  return (
    <div
      className="px-36 py-10 flex flex-col gap-4 w-full items-center h-44 bg-gradient-to-b from-fuchsia-950/20 from-10 to-cyan-400/0"
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
