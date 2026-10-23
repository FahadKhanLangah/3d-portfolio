import React from 'react';
import { AudienceMode } from '../types';
import { UserCheck, Sparkles, Building2 } from 'lucide-react';

interface DualModeToggleProps {
  mode: AudienceMode;
  setMode: (mode: AudienceMode) => void;
}

export const DualModeToggle: React.FC<DualModeToggleProps> = ({ mode, setMode }) => {
  return (
    <div className="inline-flex items-center p-1.5 rounded-2xl bg-slate-900/80 border border-slate-700/60 backdrop-blur-xl shadow-2xl relative">
      {/* Recruiter Tab */}
      <button
        onClick={() => setMode('recruiter')}
        className={`relative z-10 flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
          mode === 'recruiter'
            ? 'text-[#070913] font-bold shadow-glow-cyan'
            : 'text-slate-400 hover:text-white'
        }`}
      >
        <Building2 className="w-4 h-4" />
        <span>Hiring for a Remote Role</span>
      </button>

      {/* Client / Founder Tab */}
      <button
        onClick={() => setMode('client')}
        className={`relative z-10 flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
          mode === 'client'
            ? 'text-[#070913] font-bold shadow-glow-amber'
            : 'text-slate-400 hover:text-white'
        }`}
      >
        <Sparkles className="w-4 h-4 text-amber-400" />
        <span>Need a Project Built (Client)</span>
      </button>

      {/* Active Indicator Slider */}
      <div
        className={`absolute top-1.5 bottom-1.5 rounded-xl transition-all duration-300 ease-out ${
          mode === 'recruiter'
            ? 'left-1.5 w-[calc(50%-6px)] bg-gradient-to-r from-cyan-400 to-teal-400'
            : 'left-[calc(50%+3px)] w-[calc(50%-6px)] bg-gradient-to-r from-amber-400 to-amber-500'
        }`}
      />
    </div>
  );
};
