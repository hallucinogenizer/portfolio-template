import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { HeroSection } from "./components/HeroSection/HeroSection";
import { TopNavBar } from "./components/TopNavBar/TopNavBar";

function App() {
  return (
    <div className="bg-slate-950 w-full min-h-screen py-6">
      <TopNavBar />
      <HeroSection />
    </div>
  );
}

export default App;
