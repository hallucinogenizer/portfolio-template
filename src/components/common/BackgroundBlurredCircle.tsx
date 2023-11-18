import { cn } from "../../lib/utils/cn";

export enum BgCircleVariant {
  ONE = "1",
  TWO = "2",
}

export const BackgroundBlurredCircle = ({
  variant,
  className,
}: {
  variant: BgCircleVariant;
  className?: string;
}) => {
  return variant === BgCircleVariant.ONE ? (
    <div
      className={cn(
        "absolute w-96 h-96 bg-cyan-600 rounded-full blur-3xl",
        className
      )}
    />
  ) : (
    <div
      className={cn(
        "absolute w-96 h-96 bg-pink-950 rounded-full blur-3xl",
        className
      )}
    />
  );
};
