import { DataType } from "./lib/types";
import WasiqDp from "./assets/custom/wasiq.jpeg";
import DanishDp from "./assets/custom/danish.jpg";
import WahabDp from "./assets/custom/Wahab.jpeg";

export const data: DataType = {
  person: {
    name: "Rohan Hussain",
    titles: [
      "Software Engineer",
      "UI/UX Designer",
      "Vector Illustration Artist",
      "Master Communicator",
      "Leader",
      "Team Player",
    ],
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
      title: "NextJS",
      description:
        "Proficient in developing server-side rendered and statically generated React applications with NextJS.",
    },
    {
      icon: "fa-brands fa-node",
      title: "ExpressJS, NestJS",
      description:
        "Skilled in building scalable and maintainable server-side applications using NestJS.",
    },
    {
      icon: "fa-brands fa-aws",
      title: "DevOps with AWS",
      description:
        "Expertise in cloud computing with AWS, including IAM, EC2, Lambdas, and CI/CD CodePipeline.",
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
      description:
        "Excellent communication is my superpower and I use it to enable my team to work smoothly.",
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
      companyName: "Apollo Group (Y-Combinator Startup)",
      jobTitle: "Full Stack Software Engineer",
      description:
        "Apollo Group Is The Next Project Of The Airlift Technologies Team, That Raised $120M+ In Capital Before Shutting Down.I Have Helped Launch 2 MVP Products, Involving GPT-Based Chatbots And React-Based Web Applications. I Am Working In A Dynamic Startup Environment With A Small Team Of Software Engineers.",
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
};
