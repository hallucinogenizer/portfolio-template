export default function BlogPostCard() {
  return (
    <div
      className="bg-zinc-300/10 rounded-lg text-light"
      style={{ width: "21.25rem", height: "27rem" }}
    >
      {/* Thumbnail */}
      <div className="w-full h-56 flex justify-center items-center bg-cyan-400/10">
        <div className="w-36 h-36 rounded-full blur-lg bg-cyan-500/40"></div>
      </div>

      <div className="flex flex-col gap-2 p-6">
        <h4
          className="font-medium leading-7 tracking-tight"
          style={{ fontFamily: "Roboto Mono" }}
        >
          CS200 Tutorial
        </h4>
        <div className="flex gap-2">
          <div className="w-px h-6 origin-top-left border border-cyan-500"></div>
          <p>January 2021</p>
        </div>
        <p className="text-sm leading-tight">
          Lorem ipsum dolor sit amet consectetur. Id faucibus sollicitudin
          faucibus lectus placerat. Dui pellentesque justo at elit faucibus
          pellentesque. Pulvinar et non arcu vel.
        </p>
      </div>
    </div>
  );
}
