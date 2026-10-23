import React from 'react';
import { Project } from '../types';
import { X, ExternalLink, Play, Layers, CheckCircle2, ShieldAlert, Cpu } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#0c1024] border border-cyan-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Category & Title */}
        <div className="flex items-center gap-2 mb-2">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            {project.category}
          </span>
          {project.playStoreUrl && (
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
              <Play className="w-3 h-3 fill-current" />
              Google Play Live
            </span>
          )}
        </div>

        <h3 className="text-2xl sm:text-3xl font-black text-white mt-1">
          {project.title}
        </h3>
        <p className="text-sm font-medium text-slate-400 mt-1">
          {project.subtitle}
        </p>

        {/* Tech Badges */}
        <div className="flex flex-wrap gap-2 my-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-900 border border-slate-700 text-slate-300"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Deep Dive Description */}
        <div className="my-6 p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
          <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-2 flex items-center gap-1.5">
            <Cpu className="w-4 h-4" />
            Engineering Summary
          </h4>
          <p className="text-sm text-slate-300 leading-relaxed">
            {project.longDescription}
          </p>
        </div>

        {/* Key Architecture Highlights */}
        <div className="my-6">
          <h4 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
            <Layers className="w-4 h-4 text-cyan-400" />
            System Architecture & Engineering Decisions
          </h4>
          <div className="grid gap-2.5">
            {project.architecturePoints.map((point, index) => (
              <div 
                key={index}
                className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-900/40 border border-slate-800/80 text-xs sm:text-sm text-slate-300"
              >
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Benchmark Metrics Grid */}
        <div className="my-6 pt-4 border-t border-slate-800 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {project.metrics.map((metric, i) => (
            <div key={i} className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
              <p className="text-xs font-mono text-slate-400">{metric.label}</p>
              <p className="text-base font-bold text-cyan-300 mt-1">{metric.value}</p>
            </div>
          ))}
        </div>

        {/* Modal Action Footer */}
        <div className="mt-8 pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {project.playStoreUrl && (
              <a
                href={project.playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 hover:bg-emerald-500/30 transition-colors"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Open in Google Play</span>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 hover:bg-cyan-500/30 transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Live Application</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-slate-800 text-slate-300 hover:bg-slate-700 transition-colors"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
};
