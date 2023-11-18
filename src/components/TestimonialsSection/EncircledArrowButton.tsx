import { useState } from "react";

export const EncircledArrowButton = ({
  direction,
  onClick,
  disabled,
}: {
  direction: "LEFT" | "RIGHT";
  onClick: () => void;
  disabled: boolean;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className="bg-white/10 rounded-full w-16 h-16 relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      disabled={disabled}
    >
      <div className="relative z-10">
        <i
          className={`fa-solid fa-lg text-light ${
            direction === "LEFT" ? "fa-chevron-left" : "fa-chevron-right"
          }`}
        ></i>
      </div>
      {isHovered && !disabled && (
        <div className="w-16 h-16 bg-sky-900 rounded-full blur-lg absolute z-0 top-0 left-0" />
      )}
    </button>
  );
};
