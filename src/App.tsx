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
    <div className="bg-slate-950 w-full overflow-x-clip">
      <TracingBeam className="w-full lg:max-w-[92%] px-6" beamClassName="lg:block hidden">
        <div className="flex flex-col gap-20 py-6">
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
