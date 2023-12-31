import { useState } from "react";
import { cn } from "../../lib/utils/cn";
import { BlogDataType } from "../../lib/types";

export default function BlogPostCard({ content }: { content: BlogDataType }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a href={content.link} style={{ height: "28rem" }} target="_blank">
      <div
        className="bg-zinc-300/10 rounded-lg text-light transition-all md:w-[21.25rem] w-full h-[27rem] hover:h-[28.5rem]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Thumbnail */}
        <div className="relative w-full h-56 flex justify-center items-center bg-cyan-400/10 overflow-clip">
          <img
            src={content.thumbnail}
            className="relative z-10 max-h-52 max-w-[80%]"
          />
          <div
            className={cn(
              "absolute z-0 w-36 h-36 rounded-full blur-lg bg-cyan-500/20 transition-all",
              isHovered && "w-11/12 h-44 bg-cyan-500/40"
            )}
          ></div>
        </div>

        <div className="flex flex-col justify-between px-6 h-52">
          <div className="flex flex-col gap-3 py-6 flex-grow max-h-52">
            <h4
              className="font-medium tracking-tight leading-none line-clamp-3 text-ellipsis"
              style={{ fontFamily: "Roboto Mono" }}
            >
              {content.title}
            </h4>
            <div className="flex gap-2">
              <div className="w-px h-6 origin-top-left border border-cyan-500"></div>
              <p>{content.datePosted}</p>
            </div>
            <p className="text-sm leading-tight text-ellipsis line-clamp-3">
              {content.description}
            </p>
          </div>
          <a
            href={content.link}
            className={cn(
              isHovered ? "block" : "hidden",
              "text-teal-500 text-sm font-medium font-['Roboto Mono'] leading-tight"
            )}
            target="_blank"
          >
            Read More <i className="fa-solid fa-chevron-right" />
          </a>
        </div>
      </div>
    </a>
  );
}
