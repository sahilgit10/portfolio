import React from 'react';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import BentoGrid from './components/BentoGrid';
import InteractiveConsole from './components/InteractiveConsole';
import Timeline from './components/Timeline';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-vanilla-100 text-chocolate-800 font-sans selection:bg-macaron-pink/30 selection:text-chocolate-900 overflow-x-hidden">
      {/* Custom Framer Motion "Syrup Drop" Cursor */}
      <CustomCursor />

      {/* Tactile Patisserie Noise / Grain Overlay */}
      <div className="noise-overlay" aria-hidden="true" />

      {/* Gourmet Floating Header */}
      <Navbar />

      {/* Page Content */}
      <main id="main-content">
        <Hero />
        <About />
        <TechStack />
        <BentoGrid />
        <InteractiveConsole />
        <Timeline />
      </main>

      {/* Sweet Ending Footer */}
      <Footer />
    </div>
  );
}
