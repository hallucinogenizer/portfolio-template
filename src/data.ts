import { DataType } from "./lib/types";
import WasiqDp from "./assets/custom/wasiq.jpeg";
import DanishDp from "./assets/custom/danish.jpg";
import WahabDp from "./assets/custom/Wahab.jpeg";
import SupertokensBlogPost from "./assets/custom/supertokens-blog-post.png";
import ReactStateManagementBlogPostThumbnail from "./assets/custom/react-state-management.png";
import UnderstandingLargeUnfamiliarCodebases from "./assets/custom/understanding-large-unfamiliar-codebases.webp";
import OrvalLogo from "./assets/custom/orval-logo.png";
import TypeScriptPythonThumbnail from "./assets/custom/typescript-python.jpeg";
import RohanDP from "./assets/custom/my_picture_no_bg.png";

export const data: DataType = {
  person: {
    picture: RohanDP,
    name: "Rohan Hussain",
    titles: ["Mid-Level Software Engineer", "Master Communicator", "Frontend Lead", "Leader", "Team Player"],
    phoneNumber: "+923320460729",
    email: "contact@rohanhussain.com",
    linkedIn: "https://linkedin.com/in/rohan-hussain",
    github: "https://github.com/hallucinogenizer",
  },
  skills: [
    {
      icon: "fa-brands fa-react",
      title: "ReactJS, NextJS",
      description:
        "Experienced in building modern interactive user interfaces using React, Server Components, and NextJS 14 App Router.",
    },
    {
      icon: "fa-brands fa-react",
      title: "NextJS App Router",
      description: "Proficient in developing React applications with NextJS v14/15.",
    },
    {
      icon: "fa-brands fa-node",
      title: "ExpressJS, NestJS",
      description: "Skilled in building scalable and maintainable server-side applications using NestJS.",
    },
    {
      icon: "fa-brands fa-aws",
      title: "DevOps with AWS",
      description: "Expertise in cloud computing with AWS, including IAM, EC2, Lambdas, and CI/CD CodePipeline.",
    },
    {
      icon: "fa-solid fa-paint-brush",
      title: "UI/UX Design",
      description:
        "Proficient in creating visually appealing and user-friendly interfaces, considering both design and user experience principles.",
    },
    {
      icon: "fa-solid fa-comments",
      title: "Communication",
      description: "Excellent communication is my superpower and I use it to enable my team to work smoothly.",
    },
  ],
  testimonials: [
    {
      quote:
        "I had the pleasure of collaborating with Rohan on a search feature for our platform, and I was thoroughly impressed with his skills as an engineer. Rohan is incredibly intelligent, and responsible, and has a remarkable ability to take ownership and develop products.",
      person: {
        name: "Wasiq Noor Qasmi",
        image: WasiqDp,
        title: `Senior Software Engineer, Mentor
  @ Educative`,
      },
    },
    {
      quote: `I highly recommend Rohan for any tech leadership role. His versatility in both back-end and front-end development is outstanding. With a childhood background in design, he brings a unique creative perspective, enabling him to develop visually appealing portals without extensive support.
  
  Rohan's well-rounded understanding of business, coupled with his ownership mindset, is reflected in the valuable suggestions he consistently provides related to tech and beyond.`,
      person: {
        name: "Danish Khan",
        image: DanishDp,
        title: `Founder & CEO
  KICKSAT Preparations`,
      },
    },
    {
      quote: `Having worked closely with Rohan at IEC and across various projects, I can attest that it's been an incredible journey. Rohan stands out as a well-rounded engineer—an empathetic manager and an exceptional problem solver. His blend of kindness, empathy, and problem-solving skills make him not only a valuable asset but a standout addition to any team. 
        
  Highly recommended!`,
      person: {
        name: "Abdul Wahab",
        image: WahabDp,
        title: `Full Stack Software Engineer
  Coworker at IEC`,
      },
    },
  ],
  experience: [
    {
      date: "May 2023 - Present",
      companyName: "Metal (Y-Combinator Startup)",
      jobTitle: "Founding Full Stack Frontend-Heavy Software Engineer II (Level 4)",
      description: `Metal formerly known as Apollo Group is the next project of the Airlift Technologies team, that raised $120M+ in capital before shutting down. I have helped launch 2 MVP products, involving GPT-based chatbots and React-based web applications. I am working in a dynamic startup environment with a small team of software engineers.
      
      Within a period of 8 months, I was promoted two times due to exceptional performance.`,
    },
    {
      date: "August 2022 - April 2023",
      companyName: "Educative",
      jobTitle: "Full Stack Software Engineer",
      description:
        "I worked in the Learner Experience team at Educative where we dealt with upto 80% of the codebase and shipped features directly used by over a million users. Good programming practices, scalability, and healthy teamwork were at the heart of our work at Educative.",
    },
    {
      date: "May - July 2022",
      companyName: "Airlift Technologies Pakistan",
      jobTitle: "Full Stack Software Engineer",
      description:
        "Airlift was the largest startup in the history of Pakistan. Joined with preference for Full Stack/Backend Development and ended due to Airlift shutting down in Pakistan.",
    },
    {
      date: "August 2021 - April 2023",
      companyName: "Open Data Pakistan (Funded by Higher Education Commission)",
      jobTitle: "Team Lead Software Engineer",
      description:
        "Built on the Open Source CKAN project | Developed custom plugins and themes | Managed team of 3 developers | Upgraded the production AWS EC2 instance from CKAN 2.8 to CKAN 2.9 | This project also acted as my Senior Year Project.",
    },
    {
      date: "December 2021 - April 2022",
      companyName: "Institute of Emerging Careers (IEC)",
      jobTitle: "Team Lead Software Engineer",
      description: `Designed for Low-Computer-Literate Students from non-Urban Areas | System optimized for low-power systems | Server-side routing | Ideated 4 scalable independent systems for the 4 phases of the IEC Process (Acquisition, Learning, Placement, Community) that work in harmony.
  
  For over a year I worked as the only engineer on the project. Afterwards as a 6-month exit plan, I helped build a team and assumed the role of Engineering Manager and Mentor before finally leaving the company when the team no longer needed my oversight.`,
    },
  ],
  blog: [
    {
      title: "How to incrementally add TypeScript response-types to your React/Svelte/Vue/Angular API data fetching",
      link: "https://rohanhussain.com/blog/blog/post/how-to-incrementally-introduce-strong-typing-to-your-api-fetches-in-react/",
      description:
        "This article dives into how you can use projects like orval to consume an OpenAPI spec file and produce a client wrapper for almost any fetching library of your choosing",
      thumbnail: OrvalLogo,
      datePosted: "July 26, 2024",
    },
    {
      title: "Setting up Supertokens with a NextJS 13 Frontend and an ExpressJS Backend",
      link: "https://rohanhussain.com/blog/blog/post/supertokens-with-nextjs-and-expressjs/",
      description:
        "This article teaches you how to locally set up a NextJS 13 frontend (with App Router as well as Pages Router) and a separate ExpressJS backend and also explains how the whole setup works.",
      thumbnail: SupertokensBlogPost,
      datePosted: "August 12, 2023",
    },
    {
      title: "State Management Tools in React",
      link: "https://rohanhussain.com/blog/blog/post/react-state-management-tools/",
      description: "ContextAPI, Redux, Zustand, Jotai, what to use?",
      thumbnail: ReactStateManagementBlogPostThumbnail,
      datePosted: "May 8, 2023",
    },
    {
      title: "Typescript-like Types in Python 3",
      link: "https://rohanhussain.com/blog/blog/post/typescript-like-types-in-python/",
      description: "def sum(x: int, y: int) -> int",
      thumbnail: TypeScriptPythonThumbnail,
      datePosted: "February 14, 2023",
    },
    {
      title: "Understanding Large Unfamiliar Codebases",
      link: "https://rohanhussain.com/blog/blog/post/understanding-large-codebases/",
      description:
        "This article explores techniques that help you get started with understanding large and complex codebases that you are new to.",
      thumbnail: UnderstandingLargeUnfamiliarCodebases,
      datePosted: "September 23, 2022",
    },
  ],
};
