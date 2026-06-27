import { Fade } from "react-awesome-reveal";
import { CONTACT_SECTION_ID, HORIZONTAL_PADDING } from "../../lib/constants";
import { cn } from "../../lib/utils/cn";
import { SocialLinkBox } from "../common/SocialLinkBox";
import { data } from "../../data";

export default function ContactSection() {
  const { person: personData } = data;
  return (
    <section
      className={cn(
        "relative w-full pb-16",
        HORIZONTAL_PADDING
      )}
      id={CONTACT_SECTION_ID}
    >
      <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.09] via-white/[0.045] to-[var(--cyan)]/[0.06] p-8 shadow-[0_32px_110px_rgba(0,0,0,0.35)] backdrop-blur md:p-10">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="font-['IBM_Plex_Mono'] text-xs font-semibold uppercase tracking-[0.32em] text-[var(--amber)]">
              Contact
            </p>
            <h2 className="mt-4 font-['Fraunces'] text-4xl font-semibold leading-[0.95] tracking-[-0.05em] text-[#f6f0e8] md:text-6xl">
              Let's build something worth remembering.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#b8aea2]">
              Open to senior frontend and full-stack roles, consulting, and ambitious product builds.
            </p>
          </div>
          <a
            href={`mailto:${personData.email}`}
            className="w-fit rounded-full border border-[var(--amber)]/60 bg-[var(--amber)] px-6 py-4 text-sm font-bold uppercase tracking-[0.16em] text-[#110f0c] shadow-[0_16px_48px_rgba(244,180,91,0.22)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#ffd082]"
          >
            Email me
          </a>
        </div>
        <div className="mt-10 flex flex-wrap gap-4 border-t border-white/10 pt-6">
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
      </div>
    </section>
  );
}
