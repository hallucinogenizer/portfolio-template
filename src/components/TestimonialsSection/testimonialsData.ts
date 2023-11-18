import QuotePersonImage from "../../assets/testomonial-profile-picture.png";

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
      "Lorem ipsum dolor sit amet consectetur. Id faucibus sollicitudin faucibus lectus placerat. Dui pellentesque justo at elit faucibus pellentesque. Pulvinar et non arcu vel.",
    person: {
      name: "Arif Lohar",
      image: QuotePersonImage,
      title: "Agile Coach | Speaker | Trainer",
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
