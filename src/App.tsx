import { HeroSection } from "./components/HeroSection/HeroSection";
import MyExpertiseSection from "./components/MyExpertiseSection/MyExpertiseSection";
import { TopNavBar } from "./components/TopNavBar/TopNavBar";
import WorkTimelineSection from "./components/WorkTimelineSection/WorkTimelineSection";
import "./App.css";
import TestimonialsSection from "./components/TestimonialsSection/TestimonialsSection";
import MyBlogSection from "./components/MyBlogSection/MyBlogSection";
import ContactSection from "./components/ContactSection/ContactSection";

function App() {
  return (
    <div className="bg-slate-950 w-full overflow-x-clip min-h-screen py-6 flex flex-col md:gap-20">
      <TopNavBar />
      <HeroSection />
      <MyExpertiseSection />
      <WorkTimelineSection />
      <TestimonialsSection />
      <MyBlogSection />
      <ContactSection />
    </div>
  );
}

export default App;
