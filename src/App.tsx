import { HeroSection } from "./components/HeroSection/HeroSection";
import MyExpertiseSection from "./components/MyExpertiseSection/MyExpertiseSection";
import { TopNavBar } from "./components/TopNavBar/TopNavBar";

function App() {
  return (
    <div className="bg-slate-950 w-full min-h-screen py-6">
      <TopNavBar />
      <HeroSection />
      <MyExpertiseSection />
    </div>
  );
}

export default App;
