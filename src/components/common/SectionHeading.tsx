export const SectionHeading = ({ title }: { title: [string, string] }) => (
  <h2 className="group leading-none">
    <span className="mb-4 flex items-center gap-3 font-['IBM_Plex_Mono'] text-xs font-semibold uppercase tracking-[0.42em] text-[var(--amber)]">
      <span className="h-px w-10 bg-[var(--amber)]/70 transition-all duration-300 group-hover:w-16" />
      {title[0]}
    </span>
    <span className="font-['Fraunces'] text-5xl font-semibold tracking-[-0.05em] text-[#f6f0e8] md:text-7xl">
      {title[1]}
    </span>
  </h2>
);
