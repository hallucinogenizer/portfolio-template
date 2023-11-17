export const SectionHeading = ({ title }: { title: [string, string] }) => (
  <h1 className="leading-10 font-['Poppins']">
    <span className="text-neutral-300 text-4xl font-medium">{title[0]}</span>
    <br />
    <span className="text-cyan-500 text-6xl font-semibold ">{title[1]}</span>
  </h1>
);
