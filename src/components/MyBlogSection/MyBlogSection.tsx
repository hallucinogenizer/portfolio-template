import { SectionHeading } from "../common/SectionHeading";
import BlogPostCard from "./BlogPostCard";

export default function MyBlogSection() {
  return (
    <div className="px-36 flex flex-col gap-16">
      <SectionHeading title={["My", "Blog"]} />

      <div className="grid grid-cols-3" style={{ gap: "4.375rem" }}>
        <BlogPostCard />
        <BlogPostCard />
        <BlogPostCard />
      </div>
    </div>
  );
}
