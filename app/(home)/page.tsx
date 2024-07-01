import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

export default function page() {
  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <div className="">
        <div className="max-w-7xl mx-auto p-5">
          <Navbar />
          <HeroSection />
        </div>
      </div>
      <div className="max-w-7xl mx-auto p-5 mt-20">
        <Skills />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}
