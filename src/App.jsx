import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import ExperiencesSection from './components/ExperiencesSection';
import ProjectsSection from './components/ProjectsSection';
import ResumeSection from './components/ResumeSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import CommandPalette from './components/CommandPalette';
import CyberBackground from './components/CyberBackground';

export default function App() {
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#070a12] text-gray-100 font-sans selection:bg-orange-500 selection:text-white relative flex flex-col justify-between overflow-x-hidden">
      {/* Dynamic Cyber Particle & Mesh Background */}
      <CyberBackground />

      {/* Main Fixed Navigation HUD */}
      <Navbar
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
      />

      {/* Main Content Layout with Standardized Spacing & Alignment */}
      <main className="relative z-10 flex-1 w-full space-y-4 sm:space-y-6">
        <Hero />
        <ServicesSection />
        <ExperiencesSection />
        <ProjectsSection />
        <ResumeSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Global Quick Command Palette (Ctrl+K / Cmd+K) */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
      />
    </div>
  );
}
