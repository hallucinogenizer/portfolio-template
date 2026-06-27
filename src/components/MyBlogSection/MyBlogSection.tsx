import { data } from "../../data";
import { BLOG_SECTION_ID, HORIZONTAL_PADDING } from "../../lib/constants";
import { cn } from "../../lib/utils/cn";
import { SectionHeading } from "../common/SectionHeading";
import BlogPostCard from "./BlogPostCard";
import { Fade } from "react-awesome-reveal";

export default function MyBlogSection() {
  const { blog: blogsData } = data;

  return (
    <section className={cn("flex flex-col gap-12", HORIZONTAL_PADDING)} id={BLOG_SECTION_ID}>
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div className="max-w-3xl">
          <SectionHeading title={["Writing", "And Notes"]} />
          <p className="mt-5 text-lg leading-8 text-[#b8aea2]">
            Practical writing on frontend architecture, typing strategy, auth, and how to understand large codebases.
          </p>
        </div>
        <a
          href="https://rohanhussain.com/blog"
          target="_blank"
          rel="noreferrer"
          className="w-fit rounded-full border border-white/10 bg-white/[0.05] px-5 py-3 font-['IBM_Plex_Mono'] text-xs font-semibold uppercase tracking-[0.22em] text-[#f6f0e8] transition-colors hover:border-[var(--amber)]/50 hover:text-[var(--amber)]"
        >
          Visit blog
        </a>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {blogsData.map((blogData, i) => (
          <Fade key={blogData.title} direction="up" delay={i * 120} triggerOnce>
            <BlogPostCard content={blogData} />
          </Fade>
        ))}
      </div>
    </section>
  );
}
