import React, { useState } from 'react';
import { AudienceMode, Project } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectsSection } from './components/ProjectsSection';
import { ProjectModal } from './components/ProjectModal';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { LocalBusinessSection } from './components/LocalBusinessSection';
import { ProjectEstimator } from './components/ProjectEstimator';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MessageCircle } from 'lucide-react';
import { PERSONAL_INFO } from './data/portfolioData';

export function App() {
  const [mode, setMode] = useState<AudienceMode>('recruiter');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen bg-[#070913] text-slate-100 flex flex-col selection:bg-cyan-400 selection:text-black">
      {/* Top Fixed Navigation */}
      <Navbar mode={mode} setMode={setMode} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section with 3D Core Scene and Mode Switcher */}
        <Hero mode={mode} setMode={setMode} />

        {/* Featured Production Projects */}
        <ProjectsSection 
          mode={mode} 
          onSelectProject={(project) => setSelectedProject(project)} 
        />

        {/* Technical Architecture Matrix & 3D Tech Constellation */}
        <SkillsSection />

        {/* Work Experience & Leadership (Noxvira + Nexsoll) */}
        <ExperienceTimeline />

        {/* Local Business Fast-Track Packages & 1-Click Quick Query */}
        <LocalBusinessSection />

        {/* Interactive Scope & Cost Estimator */}
        <ProjectEstimator />

        {/* Contact Form & Direct Access Channels */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Project Details Modal */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />

      {/* Floating WhatsApp Quick Action Button (Always Accessible) */}
      <a
        href={PERSONAL_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs shadow-2xl shadow-emerald-500/40 hover:scale-105 transition-all duration-300"
        title="Direct WhatsApp Chat with Fahad Khan"
      >
        <MessageCircle className="w-4 h-4 fill-current" />
        <span className="hidden sm:inline">WhatsApp Fast Response</span>
      </a>
    </div>
  );
}

export default App;
