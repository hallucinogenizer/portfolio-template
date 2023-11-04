export function HeroSection() {
  return (
    <div className="w-full relative" style={{minHeight: '42rem'}}>
      <BackgroundBlurredCircle variant={BgCircleVariant.ONE} />
      <BackgroundBlurredCircle variant={BgCircleVariant.TWO} />
    </div>
  );
}

enum BgCircleVariant {
  ONE = "1",
  TWO = "2",
}

const BackgroundBlurredCircle = ({ variant }: { variant: BgCircleVariant }) => {
  return variant === BgCircleVariant.ONE ? (
    <div className="absolute left-16 w-96 h-96 bg-cyan-600 rounded-full blur-3xl" />
  ) : (
    <div className="absolute right-0 bottom-0 w-96 h-96 bg-pink-950 rounded-full blur-3xl" />
  );
};
