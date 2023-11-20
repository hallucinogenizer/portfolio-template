import SupertokensBlogPost from "../../assets/custom/supertokens-blog-post.png";
import ReactStateManagementBlogPostThumbnail from "../../assets/custom/react-state-management.png";
import TypeScriptPythonThumbnail from "../../assets/custom/typescript-python.jpeg";

export type BlogDataType = {
  title: string;
  link: string;
  description: string;
  datePosted: string;
  thumbnail: string;
};

export const blogsData: BlogDataType[] = [
  {
    title:
      "Setting up Supertokens with a NextJS 13 Frontend and an ExpressJS Backend",
    link: "https://rohanhussain.com/blog/post/supertokens-with-nextjs-and-expressjs/",
    description:
      "This article teaches you how to locally set up a NextJS 13 frontend (with App Router as well as Pages Router) and a separate ExpressJS backend and also explains how the whole setup works.",
    thumbnail: SupertokensBlogPost,
    datePosted: "August 12, 2023",
  },
  {
    title: "State Management Tools in React",
    link: "https://rohanhussain.com/blog/post/react-state-management-tools/",
    description: "ContextAPI, Redux, Zustand, Jotai, what to use?",
    thumbnail: ReactStateManagementBlogPostThumbnail,
    datePosted: "May 8, 2023",
  },
  {
    title: "Typescript-like Types in Python 3",
    link: "https://rohanhussain.com/blog/post/typescript-like-types-in-python/",
    description: "def sum(x: int, y: int) -> int",
    thumbnail: TypeScriptPythonThumbnail,
    datePosted: "February 14, 2023",
  },
];
