import { BlogDataType } from "../../lib/types";

export default function BlogPostCard({ content }: { content: BlogDataType }) {
  return (
    <a href={content.link} target="_blank" rel="noreferrer" className="group block h-full">
      <article className="flex h-full min-h-[31rem] flex-col overflow-hidden rounded-[1.5rem] border border-white/10 bg-[var(--panel)] text-[#f6f0e8] shadow-[0_24px_80px_rgba(0,0,0,0.24)] backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:border-[var(--cyan)]/30 hover:bg-[var(--panel-strong)]">
        {/* Thumbnail */}
        <div className="relative flex h-56 w-full items-center justify-center overflow-hidden border-b border-white/10 bg-[#10131d]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(49,213,245,0.22),transparent_55%)] transition-transform duration-500 group-hover:scale-125" />
          <img
            src={content.thumbnail}
            alt={content.title}
            className="relative z-10 max-h-48 max-w-[78%] transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="flex flex-1 flex-col justify-between gap-6 p-6">
          <div className="flex flex-col gap-4">
            <p className="font-['IBM_Plex_Mono'] text-xs font-semibold uppercase tracking-[0.2em] text-[var(--amber)]">
              {content.datePosted}
            </p>
            <h4 className="line-clamp-3 text-xl font-extrabold leading-tight tracking-[-0.02em] text-[#f6f0e8]">
              {content.title}
            </h4>
            <p className="line-clamp-4 text-sm leading-6 text-[#b8aea2]">
              {content.description}
            </p>
          </div>
          <div className="flex items-center justify-between border-t border-white/10 pt-5 font-['IBM_Plex_Mono'] text-sm font-semibold text-[var(--cyan)]">
            <span>Read article</span>
            <i className="fa-solid fa-arrow-right transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </div>
      </article>
    </a>
  );
}
