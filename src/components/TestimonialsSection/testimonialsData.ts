import WasiqDp from "../../assets/custom/wasiq.jpeg";
import DanishDp from "../../assets/custom/danish.jpg";

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
      title: "Senior Software Engineer | Mentor",
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
];
