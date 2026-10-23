import React from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { TechGalaxy } from './3d/TechGalaxy';
import { 
  Server, 
  Cpu, 
  Database, 
  Layers, 
  Zap, 
  Radio, 
  ShieldCheck, 
  Globe, 
  Atom, 
  Smartphone, 
  Box, 
  Palette, 
  Container, 
  Cloud, 
  GitBranch, 
  Sparkles,
  CheckCircle2
} from 'lucide-react';

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Server,
  Cpu,
  Database,
  Layers,
  Zap,
  Radio,
  ShieldCheck,
  Globe,
  Atom,
  Smartphone,
  Box,
  Palette,
  Container,
  Cloud,
  GitBranch,
  Sparkles,
};

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-24 relative bg-[#060812]">
      {/* Background cyber grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00f0ff08_1px,transparent_1px),linear-gradient(to_bottom,#00f0ff08_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-bold tracking-wider uppercase mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Mastery & Stack</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Full-Stack <span className="text-gradient-cyan">Architecture Matrix</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            A comprehensive overview of production-tested frameworks, database schemas, real-time protocols, and AI-augmented tools I use to ship enterprise software.
          </p>
        </div>

        {/* 3D Interactive Tech Galaxy */}
        <div className="mb-20 rounded-3xl bg-slate-950/60 border border-cyan-500/20 overflow-hidden backdrop-blur-xl shadow-2xl">
          <div className="p-4 sm:p-6 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-cyan-400 animate-ping" />
              <span className="text-xs sm:text-sm font-mono font-bold text-white uppercase tracking-wider">
                3D System Node Map • Real-time Interactive Mesh
              </span>
            </div>
            <span className="text-[11px] font-mono text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded-full border border-cyan-500/20">
              Interactive WebGL
            </span>
          </div>
          <TechGalaxy />
        </div>

        {/* Categorized Skills Breakdown */}
        <div className="grid lg:grid-cols-3 gap-8">
          {SKILL_CATEGORIES.map((category, idx) => (
            <div 
              key={idx}
              className="p-6 sm:p-8 rounded-3xl bg-[#0c1024]/85 border border-slate-800/90 hover:border-cyan-500/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {category.title}
                </h3>
                <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                  {category.description}
                </p>

                <div className="grid gap-3">
                  {category.skills.map((skill, sIdx) => {
                    const IconComponent = iconMap[skill.icon] || Cpu;
                    return (
                      <div
                        key={sIdx}
                        className={`p-3.5 rounded-2xl border transition-all duration-200 ${
                          skill.highlight
                            ? 'bg-slate-900/90 border-cyan-500/30 shadow-sm'
                            : 'bg-slate-950/50 border-slate-800/80 hover:border-slate-700'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <div className="flex items-center gap-2.5">
                            <div className="p-1.5 rounded-lg bg-cyan-500/10 text-cyan-400">
                              <IconComponent className="w-4 h-4" />
                            </div>
                            <span className="text-sm font-bold text-white">
                              {skill.name}
                            </span>
                          </div>
                          <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-md ${
                            skill.level === 'Expert' 
                              ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30' 
                              : 'bg-slate-800 text-slate-300'
                          }`}>
                            {skill.level}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-400 leading-snug pl-8">
                          {skill.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
