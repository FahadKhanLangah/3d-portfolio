import React, { useState } from 'react';
import { Project, AudienceMode } from '../types';
import { PROJECTS } from '../data/portfolioData';
import { 
  ExternalLink, 
  Play, 
  Layers, 
  ArrowUpRight, 
  Sparkles, 
  Code2, 
  CheckCircle2,
  Cpu
} from 'lucide-react';

interface ProjectsSectionProps {
  mode: AudienceMode;
  onSelectProject: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ mode, onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Engineered Systems' },
    { id: 'Mobile & Realtime', label: 'Mobile & Real-time' },
    { id: 'Fintech', label: 'Fintech & Trading' },
    { id: 'Full-Stack', label: 'Full-Stack Platforms' },
  ];

  const filteredProjects = activeFilter === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-bold tracking-wider uppercase mb-3">
            <Code2 className="w-3.5 h-3.5" />
            <span>Proven Engineering Milestones</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Featured <span className="text-gradient-cyan">Production Systems</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300">
            {mode === 'recruiter'
              ? "Deep dive into real-world backends, live concurrency architectures, WebSocket feeds, and Google Play deployed applications."
              : "Discover how we turn complex business ideas into lightning-fast, revenue-generating digital products for founders."}
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8 p-1.5 rounded-2xl bg-slate-900/80 border border-slate-800">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                  activeFilter === cat.id
                    ? 'bg-gradient-to-r from-cyan-400 to-teal-400 text-slate-950 font-bold shadow-glow-cyan'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-3xl bg-[#0c1024]/90 border border-slate-800 hover:border-cyan-500/40 p-6 sm:p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-950/40 hover:-translate-y-1 flex flex-col justify-between"
            >
              {/* Top Accent Gradient Line */}
              <div 
                className="absolute top-0 left-8 right-8 h-1 rounded-t-3xl transition-opacity duration-300 opacity-60 group-hover:opacity-100"
                style={{ backgroundColor: project.accentColor }}
              />

              <div>
                {/* Header Meta */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider bg-slate-900 text-cyan-400 border border-slate-700/80">
                    {project.category}
                  </span>

                  {project.playStoreUrl && (
                    <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/25">
                      <Play className="w-3 h-3 fill-current" />
                      Live on Google Play
                    </span>
                  )}
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs font-medium text-slate-400 mt-1 mb-4">
                  {project.subtitle}
                </p>

                {/* Short Description */}
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Key Metrics Chips */}
                <div className="grid grid-cols-2 gap-2.5 mb-6 p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800/80">
                  {project.metrics.slice(0, 2).map((m, i) => (
                    <div key={i}>
                      <span className="text-[10px] font-mono uppercase text-slate-500 block">{m.label}</span>
                      <span className="text-xs font-bold text-cyan-300">{m.value}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-900/90 text-slate-300 border border-slate-800 group-hover:border-slate-700 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-3">
                <button
                  onClick={() => onSelectProject(project)}
                  className="inline-flex items-center gap-2 text-xs font-bold text-cyan-400 hover:text-cyan-300 group-hover:translate-x-1 transition-all"
                >
                  <Cpu className="w-4 h-4" />
                  <span>Inspect Architecture & Specs</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                {project.playStoreUrl && (
                  <a
                    href={project.playStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-slate-800/80 text-emerald-400 hover:bg-emerald-500/20 hover:scale-105 transition-all"
                    title="View on Google Play"
                  >
                    <Play className="w-4 h-4 fill-current" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
