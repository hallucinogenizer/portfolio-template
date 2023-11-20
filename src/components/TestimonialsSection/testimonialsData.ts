import QuotePersonImage from "../../assets/testomonial-profile-picture.png";
import WasiqDp from "../../assets/custom/wasiq.jpeg";

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
    quote:
      "Lorem ipsum dolor sit amet consectetur. Id faucibus sollicitudin faucibus lectus placerat. Dui pellentesque justo at elit faucibus pellentesque. Pulvinar et non arcu vel.",
    person: {
      name: "Hamza Khan",
      image: QuotePersonImage,
      title: "Agile Coach | Speaker | Trainer",
    },
  },
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur. Id faucibus sollicitudin faucibus lectus placerat. Dui pellentesque justo at elit faucibus pellentesque. Pulvinar et non arcu vel.",
    person: {
      name: "Minahil Tanveer",
      image: QuotePersonImage,
      title: "Agile Coach | Speaker | Trainer",
    },
  },
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur. Id faucibus sollicitudin faucibus lectus placerat. Dui pellentesque justo at elit faucibus pellentesque. Pulvinar et non arcu vel.",
    person: {
      name: "Ali Sethi",
      image: QuotePersonImage,
      title: "Singer | Composer",
    },
  },
];
