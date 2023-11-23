import { Fade } from "react-awesome-reveal";
import { CONTACT_SECTION_ID, HORIZONTAL_PADDING } from "../../lib/constants";
import { cn } from "../../lib/utils/cn";
import { personData } from "../HeroSection/personData";
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
        <Fade direction="up" triggerOnce>
          <SocialLinkBox
            iconClassNames="fa-solid fa-phone"
            link={`tel:${personData.phoneNumber}`}
          />
        </Fade>
        <Fade direction="up" triggerOnce>
          <SocialLinkBox
            iconClassNames="fa-regular fa-envelope"
            link={`mailto:${personData.email}`}
          />
        </Fade>
        <Fade direction="up" triggerOnce>
          <SocialLinkBox
            iconClassNames="fa-brands fa-github"
            link={personData.github}
          />
        </Fade>
        <Fade direction="up" triggerOnce>
          <SocialLinkBox
            iconClassNames="fa-brands fa-linkedin-in"
            link={personData.linkedIn}
          />
        </Fade>
      </div>
      <p className="text-light">Feel free to contact me</p>
    </div>
  );
}
