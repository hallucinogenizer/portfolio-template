import { HeroSection } from "./components/HeroSection/HeroSection";
import MyExpertiseSection from "./components/MyExpertiseSection/MyExpertiseSection";
import { TopNavBar } from "./components/TopNavBar/TopNavBar";
import WorkTimelineSection from "./components/WorkTimelineSection/WorkTimelineSection";

function App() {
  return (
    <div className="bg-slate-950 w-full min-h-screen py-6 flex flex-col gap-20">
      <TopNavBar />
      <HeroSection />
      <MyExpertiseSection />
      <WorkTimelineSection />
    </div>
  );
}

export default App;
