import React from "react";
import BlogSelectionPanel from "./BlogSelectionPanel";
import "./styles/App.css";
import HeroIntro from "./components/HeroIntro";
import TimelineHelix from "./components/TimelineHelix";
import ProjectsHelix from "./components/ProjectsHelix";
import ContactSection from "./components/ContactSection";

function App() {
  return (
    <div className="app-wrapper">
      <HeroIntro />
      <TimelineHelix />
      <ProjectsHelix />
      <BlogSelectionPanel />
      <ContactSection />
       
    </div>
  );
}

export default App;
