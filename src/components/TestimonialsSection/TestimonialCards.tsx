import TestimonialProfilePicture from "../../assets/testomonial-profile-picture.png";
import { HOVER_TRANSLATE_CLASSES } from "../../lib/constants";

export default function TestimonialCards() {
  return (
    <div className="grid grid-cols-3 gap-16">
      <TestimonialCard />
      <TestimonialCard />
      <TestimonialCard />
    </div>
  );
}

const TestimonialCard = () => (
  <div
    className={`bg-zinc-400 bg-opacity-20 shadow flex flex-col gap-4 p-6 ${HOVER_TRANSLATE_CLASSES}`}
    style={{ width: "21.625rem" }}
  >
    <div>
      <i className="fa-solid fa-quote-left fa-2xl text-teal-500"></i>
    </div>
    <p className="text-light leading-loose">
      Lorem ipsum dolor sit amet consectetur. Id faucibus sollicitudin faucibus
      lectus placerat. Dui pellentesque justo at elit faucibus pellentesque.
      Pulvinar et non arcu vel.
    </p>
    <TestominialPersonProfile />
  </div>
);

const TestominialPersonProfile = () => (
  <div className="flex gap-4">
    <img
      src={TestimonialProfilePicture}
      className="rounded-full object-fill w-16 h-16"
    />
    <div className="flex flex-col gap-1">
      <h5 className="text-light text-lg font-medium font-['Roboto Mono'] leading-relaxed">
        Ali Khan
      </h5>
      <p className="text-stone-300 text-sm font-normal capitalize leading-tight">
        Agile Coach | Speaker | Trainer
      </p>
    </div>
  </div>
);
