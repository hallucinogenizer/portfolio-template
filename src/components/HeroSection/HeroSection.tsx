import { BgCircleVariant, HERO_SECTION_ID, HORIZONTAL_PADDING } from "../../lib/constants";
import { cn } from "../../lib/utils/cn";
import { BackgroundBlurredCircle } from "../common/BackgroundBlurredCircle";
import { Spotlight } from "../ui/aceternity/Spotlight";
import { PersonImage } from "./PersonImage";
import { TextContent } from "./TextContent";

export function HeroSection() {
  return (
    <section className="relative w-full py-8 md:py-12" id={HERO_SECTION_ID}>
      <Spotlight className="left-0 top-0 h-[170%] opacity-70 lg:-top-48" fill="#f4b45b" />
      <BackgroundBlurredCircle
        variant={BgCircleVariant.RED}
        className="absolute -bottom-24 right-0 h-96 w-96 bg-[#9E2A3D]/40 lg:hidden"
      />

      <div
        className={cn(
          "relative z-10 grid items-center gap-14 pt-3 md:pt-6 lg:grid-cols-[minmax(0,1.08fr)_minmax(22rem,0.92fr)] lg:pt-2",
          HORIZONTAL_PADDING
        )}
      >
        <TextContent className="max-w-4xl" />
        <div className="relative mx-auto w-full max-w-[30rem] justify-self-center lg:justify-self-end">
          <div
            className="pointer-events-none absolute -left-20 top-10 z-0 hidden h-32 w-32 rotate-[-12deg] items-center justify-center rounded-[2rem] border border-[var(--cyan)]/25 bg-[var(--cyan)]/12 text-6xl text-[var(--cyan)] opacity-60 blur-[1.5px] md:flex"
            aria-hidden="true"
          >
            <i className="fa-solid fa-code" />
          </div>
          <div className="absolute -right-4 bottom-12 z-20 hidden rounded-3xl border border-[var(--amber)]/30 bg-[#10111a]/80 px-5 py-4 shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur md:block">
            <p className="font-['IBM_Plex_Mono'] text-[0.65rem] uppercase tracking-[0.28em] text-[var(--amber)]">
              Current focus
            </p>
            <p className="mt-1 max-w-44 text-sm font-semibold leading-tight text-[#f6f0e8]">
              Frontend team lead for complex automation and web platform builds.
            </p>
          </div>
          <PersonImage className="relative z-10 aspect-[4/5] w-full" />
          <BackgroundBlurredCircle
            variant={BgCircleVariant.RED}
            className="right-12 top-0 hidden h-96 w-96 bg-[#9E2A3D]/70 lg:absolute lg:block"
          />
        </div>
      </div>
    </section>
  );
}
