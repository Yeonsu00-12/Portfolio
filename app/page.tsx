"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Resume from "./components/Resume";
import Awards from "./components/Awards";
import Education from "./components/Education";
import Portfolio from "./components/Portfolio";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  const renderSection = () => {
    switch (activeSection) {
      case "home":
        return <Hero />;
      case "resume":
        return <Resume />;
      case "portfolio":
        return <Portfolio />;
      case "awards":
        return <Awards />;
      case "education":
        return <Education />;
      default:
        return <Hero />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <div className="max-w-6xl mx-auto bg-white min-h-screen shadow-2xl">
        <Navigation
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />

        <main className="pt-20">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen"
          >
            {renderSection()}
          </motion.div>
        </main>
      </div>
    </div>
  );
}
