import { HeroSection } from "./components/HeroSection/HeroSection";
import MyExpertiseSection from "./components/MyExpertiseSection/MyExpertiseSection";
import { TopNavBar } from "./components/TopNavBar/TopNavBar";
import WorkTimelineSection from "./components/WorkTimelineSection/WorkTimelineSection";
import "./App.css";
import TestimonialsSection from "./components/TestimonialsSection/TestimonialsSection";
import MyBlogSection from "./components/MyBlogSection/MyBlogSection";

function App() {
  return (
    <div className="bg-slate-950 w-full min-h-screen py-6 flex flex-col gap-20">
      <TopNavBar />
      <HeroSection />
      <MyExpertiseSection />
      <WorkTimelineSection />
      <TestimonialsSection />
      <MyBlogSection />
    </div>
  );
}

export default App;
