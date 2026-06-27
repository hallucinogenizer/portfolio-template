import { HeroSection } from "./components/HeroSection/HeroSection";
import MyExpertiseSection from "./components/MyExpertiseSection/MyExpertiseSection";
import { TopNavBar } from "./components/TopNavBar/TopNavBar";
import WorkTimelineSection from "./components/WorkTimelineSection/WorkTimelineSection";
import "./App.css";
import TestimonialsSection from "./components/TestimonialsSection/TestimonialsSection";
import MyBlogSection from "./components/MyBlogSection/MyBlogSection";
import ContactSection from "./components/ContactSection/ContactSection";
import { TracingBeam } from "./components/ui/aceternity/TracingBeam";

function App() {
  return (
    <div className="site-shell relative isolate min-h-screen w-full overflow-x-clip text-[#f6f0e8]">
      <div className="grain-overlay pointer-events-none fixed inset-0 -z-20" />
      <div className="pointer-events-none fixed inset-x-0 top-0 -z-10 h-40 bg-gradient-to-b from-[#07080d] to-transparent" />
      <TracingBeam className="w-full lg:max-w-[94%] px-0" beamClassName="xl:block hidden">
        <div className="flex flex-col gap-28 pb-10 pt-4 md:gap-32">
          <TopNavBar />
          <HeroSection />
          <MyExpertiseSection />
          <WorkTimelineSection />
          <TestimonialsSection />
          <MyBlogSection />
          <ContactSection />
        </div>
      </TracingBeam>
    </div>
  );
}

export default App;
