import WasiqDp from "../../assets/custom/wasiq.jpeg";
import DanishDp from "../../assets/custom/danish.jpg";
import WahabDp from "../../assets/custom/Wahab.jpeg";

export type PersonType = {
  name: string;
  image: string;
  title: string;
};

export type TestimonialDataType = {
  quote: string;
  person: PersonType;
};

export const testimonialsData: TestimonialDataType[] = [
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
];
