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
    titles: [
      "Senior Software Engineer",
      "Frontend-Focused Team Lead",
      "NextJS 15 App Router Engineer",
      "Full Stack Product Engineer",
      "Technical Leader",
      "Strong Communicator",
    ],
    phoneNumber: "+923320460729",
    email: "contact@rohanhussain.com",
    linkedIn: "https://linkedin.com/in/rohan-hussain",
    github: "https://github.com/hallucinogenizer",
  },
  skills: [
    {
      icon: "fa-brands fa-react",
      title: "React, NextJS, TypeScript",
      description:
        "Experienced in building modern product interfaces with React, TypeScript, Server Components, and the NextJS App Router.",
    },
    {
      icon: "fa-solid fa-people-group",
      title: "Frontend Team Leadership",
      description:
        "Lead frontend teams through roadmap planning, DRI ownership, codebase modernization, stacked PRs, and fast production delivery.",
    },
    {
      icon: "fa-brands fa-node",
      title: "ExpressJS, NestJS",
      description:
        "Skilled in building maintainable backend services with NodeJS, ExpressJS, NestJS, PostgreSQL, Redis, and API-first workflows.",
    },
    {
      icon: "fa-brands fa-aws",
      title: "Cloud, SEO, Performance",
      description:
        "Ship high-performance web platforms with AWS, Vercel, Cloudflare Edge CDN, CI/CD, and near-perfect Lighthouse targets.",
    },
    {
      icon: "fa-solid fa-vial-circle-check",
      title: "Testing & Reliability",
      description:
        "Use Playwright, Jest, React Testing Library, Selenium, Sentry, and CI practices to keep product teams shipping confidently.",
    },
    {
      icon: "fa-solid fa-pen-nib",
      title: "Design-Minded Execution",
      description:
        "Bring HCI, Figma, and visual design instincts into engineering work to produce interfaces that feel clear and polished.",
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
      date: "May 2025 - Present",
      companyName: "Conduit (FleetGlue)",
      jobTitle: "Senior Software Engineer (Frontend Focused) & Team Lead",
      description:
        "Lead frontend engineering remotely for a complex factory robot automation application used in large US factories. Migrated the codebase from React 17, NextJS 12, GeistUI, and styled-components to React 18, NextJS 13, TailwindCSS, and ShadCN while driving a broader UI overhaul. Improved delivery speed through agentic development, jujutsu, stacked PR workflows, and a production cadence that moved from twice a month to twice a day.",
    },
    {
      date: "May 2025 - Present",
      companyName: "Beyond ONE",
      jobTitle: "Senior Software Engineer 1 & Team Lead",
      description:
        "Lead the VCR (Virgin Connect Roam) rebuild, replacing a Flutter Web experience with a high-performance NextJS web platform. Achieved near-perfect Lighthouse performance and SEO using static rendering and Cloudflare Edge CDN, helping the company reach quarterly revenue goals. Built a reusable TypeScript, TanStack Query, Orval, and ShadCN base for future company projects.",
    },
    {
      date: "March 2025 - May 2025",
      companyName: "Turing",
      jobTitle: "Lead Senior Software Engineer & AI Trainer",
      description:
        "Worked on training industry-leading LLMs in programming capability. Turing does not allow naming the client, but the work involved one of the top LLM products in the world.",
    },
    {
      date: "May 2023 - February 2025",
      companyName: "Metal (Y-Combinator Startup)",
      jobTitle:
        "Founding Full Stack Frontend-Heavy Software Engineer II (Level 4)",
      description:
        "First software engineer hired at Metal, the next company from the Airlift team. Led the launch of two MVPs: a GPT-based chatbot web app and a React/NextJS 14 application with a NestJS and PostgreSQL backend. Promoted twice within 9 months, granted significant equity, and led a team of 5 frontend engineers while owning roadmap execution, DRIs, deadlines, and delivery.",
    },
    {
      date: "August 2022 - April 2023",
      companyName: "Educative",
      jobTitle: "Full Stack Software Engineer",
      description:
        "Worked on the Learner Experience team shipping features for Educative.io's primary learner and enterprise customer base. Built production-facing work across search, enterprise features, Projects, and landing pages including educative.io and devpath.com, using React, NextJS, TypeScript, Redux, TailwindCSS, Flask, Redis, GCP, Selenium, Jest, and CI/CD.",
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
        "Led development on Pakistan Government's official data portal built on the open-source CKAN project. Managed a team of 3 developers, developed custom plugins and themes, and led the production upgrade to CKAN 2.9 on AWS EC2.",
    },
    {
      date: "December 2021 - July 2022",
      companyName: "Institute of Emerging Careers (IEC)",
      jobTitle: "Lead Software Engineer",
      description:
        "Built a scalability-focused student acquisition system for low-computer-literate students from non-urban areas. Enabled the company to onboard a new cohort every 3 weeks, then executed a 6-month exit strategy by hiring, training, and handing over to an engineering team.",
    },
  ],
  blog: [
    {
      title:
        "How to incrementally add TypeScript response-types to your React/Svelte/Vue/Angular API data fetching",
      link: "https://rohanhussain.com/blog/blog/post/how-to-incrementally-introduce-strong-typing-to-your-api-fetches-in-react/",
      description:
        "This article dives into how you can use projects like orval to consume an OpenAPI spec file and produce a client wrapper for almost any fetching library of your choosing",
      thumbnail: OrvalLogo,
      datePosted: "July 26, 2024",
    },
    {
      title:
        "Setting up Supertokens with a NextJS 13 Frontend and an ExpressJS Backend",
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
