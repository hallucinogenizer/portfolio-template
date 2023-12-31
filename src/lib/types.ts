export type PersonDataType = {
  picture: string;
  name: string;
  titles: string[];
  phoneNumber: string;
  email: string;
  linkedIn: string;
  github: string;
};

export type SkillType = {
  icon: string;
  title: string;
  description: string;
};

export type TestimonialPersonType = {
  name: string;
  image: string;
  title: string;
};

export type TestimonialDataType = {
  quote: string;
  person: TestimonialPersonType;
};

export type ExperienceDataType = {
  date: string;
  companyName: string;
  jobTitle: string;
  description: string;
};

export type BlogDataType = {
  title: string;
  link: string;
  description: string;
  datePosted: string;
  thumbnail: string;
};

export type DataType = {
  person: PersonDataType;
  skills: SkillType[];
  testimonials: TestimonialDataType[];
  experience: ExperienceDataType[];
  blog: BlogDataType[];
};
