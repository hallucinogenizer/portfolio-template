import { HORIZONTAL_PADDING } from "../../lib/constants";
import { cn } from "../../lib/utils/cn";
import { SectionHeading } from "../common/SectionHeading";
import BlogPostCard from "./BlogPostCard";
import { blogsData } from "./blogData";

export default function MyBlogSection() {
  return (
    <div className={cn("flex flex-col gap-16", HORIZONTAL_PADDING)}>
      <SectionHeading title={["My", "Blog"]} />

      <div
        className="flex flex-wrap gap-12 justify-center"
        style={{ gap: "4.375rem" }}
      >
        {blogsData.slice(0, 3).map((blogData) => (
          <BlogPostCard content={blogData} />
        ))}
      </div>
    </div>
  );
}
