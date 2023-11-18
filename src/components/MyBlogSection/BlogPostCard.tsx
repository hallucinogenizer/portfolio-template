import { useState } from "react";
import { cn } from "../../lib/utils/cn";
import BlogPostCoverImage from "../../assets/blog-post-cover.gif";

export default function BlogPostCard() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a href="#" style={{ height: "28rem" }}>
      <div
        className={`bg-zinc-300/10 rounded-lg text-light transition-all`}
        style={{ width: "21.25rem", height: isHovered ? "28rem" : "27rem" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Thumbnail */}
        <div className="relative w-full h-56 flex justify-center items-center bg-cyan-400/10 overflow-clip">
          <img src={BlogPostCoverImage} className="relative z-10 max-h-52" />
          <div
            className={cn(
              "absolute z-0 w-36 h-36 rounded-full blur-lg bg-cyan-500/20 transition-all",
              isHovered && "w-40 h-40 bg-cyan-500/40"
            )}
          ></div>
        </div>

        <div className="flex flex-col gap-3 p-6">
          <h4
            className="font-medium leading-7 tracking-tight"
            style={{ fontFamily: "Roboto Mono" }}
          >
            CS200 Tutorial
          </h4>
          <div className="flex gap-2">
            <div className="w-px h-6 origin-top-left border border-cyan-500"></div>
            <p>January 2021</p>
          </div>
          <p className="text-sm leading-tight">
            Lorem ipsum dolor sit amet consectetur. Id faucibus sollicitudin
            faucibus lectus placerat. Dui pellentesque justo at elit faucibus
            pellentesque. Pulvinar et non arcu vel.
          </p>
          <a
            href="#"
            className={cn(
              isHovered ? "block" : "hidden",
              "text-teal-500 text-sm font-medium font-['Roboto Mono'] leading-tight"
            )}
          >
            Read More <i className="fa-solid fa-chevron-right" />
          </a>
        </div>
      </div>
    </a>
  );
}
