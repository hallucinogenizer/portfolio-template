import { CSSProperties } from "react";
import { cn } from "../../lib/utils/cn";

export enum BgCircleVariant {
  BLUE = "blue",
  RED = "red",
}

export const BackgroundBlurredCircle = ({
  variant,
  className,
  style,
}: {
  variant: BgCircleVariant;
  className?: string;
  style?: CSSProperties;
}) => {
  return variant === BgCircleVariant.BLUE ? (
    <div
      className={cn("absolute w-96 h-96 rounded-full blur-[175px]", className)}
      style={{ ...style, backgroundColor: "#008AAA" }}
    />
  ) : (
    <div
      className={cn(
        "absolute w-96 h-96 bg-pink-950 rounded-full blur-[175px]",
        className
      )}
      style={style}
    />
  );
};
