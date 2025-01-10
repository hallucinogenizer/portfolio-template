import { data } from "../../data";
import { HORIZONTAL_PADDING } from "../../lib/constants";
import { cn } from "../../lib/utils/cn";
import { SectionHeading } from "../common/SectionHeading";
import BlogPostCard from "./BlogPostCard";
import { Fade } from "react-awesome-reveal";

export default function MyBlogSection() {
  const { blog: blogsData } = data;

  return (
    <div className={cn("flex flex-col gap-16", HORIZONTAL_PADDING)}>
      <SectionHeading title={["My", "Blog"]} />

      <div className="flex flex-wrap gap-12 justify-center" style={{ gap: "4.375rem" }}>
        {blogsData.map((blogData, i) => (
          <Fade direction="up" delay={i * 200} triggerOnce>
            <BlogPostCard content={blogData} />
          </Fade>
        ))}
      </div>
    </div>
  );
}
