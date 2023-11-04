export const TopNavBar = () => (
  <div className="absolute top-6 right-1/2 w-5/6 max-w-6xl h-12">
    <ul className="relative -right-1/2 list-none px-8 py-3 bg-slate-900 bg-opacity-90 shadow flex justify-between leading-tight text-neutral-300">
      <li className="text-base ">Logo</li>
      <div className="text-sm flex basis-96 justify-evenly">
        <li>Home</li>
        <li>Expertise</li>
        <li>Work</li>
        <li>Contact</li>
      </div>
    </ul>
  </div>
);
