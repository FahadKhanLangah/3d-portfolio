import React from 'react';
import { AudienceMode } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';
import { HeroScene } from './3d/HeroScene';
import { DualModeToggle } from './DualModeToggle';
import { 
  FileDown, 
  ArrowRight, 
  CheckCircle2, 
  Terminal, 
  ExternalLink,
  ShieldCheck,
  Zap,
  Globe2
} from 'lucide-react';

interface HeroProps {
  mode: AudienceMode;
  setMode: (mode: AudienceMode) => void;
  onOpenQuickQuery?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ mode, setMode, onOpenQuickQuery }) => {
  return (
    <section className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      {/* Background Ambient Glow Orbs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-[550px] h-[550px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/3 w-[550px] h-[550px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/2 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Cyber Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Top Dual Mode Switcher Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <DualModeToggle mode={mode} setMode={setMode} />

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/60 backdrop-blur-md text-xs font-mono text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Timezone: PKT (UTC+5) • Overlaps with US, EU & Gulf</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Value Proposition & Dynamic Copy */}
          <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left">
            {/* Trust Pill */}
            <div className="inline-flex items-center justify-center lg:justify-start gap-2 mb-6">
              <span className="px-3 py-1 rounded-full text-xs font-semibold tracking-wide bg-cyan-500/10 text-cyan-400 border border-cyan-500/25 flex items-center gap-1.5">
                <Globe2 className="w-3.5 h-3.5 text-cyan-400" />
                Trusted across US · UK · Gulf · Germany · Pakistan
              </span>
            </div>

            {/* Dynamic Headline Based on Mode */}
            {mode === 'recruiter' ? (
              <>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.08]">
                  Architecting <span className="text-gradient-cyan">Scalable APIs</span> & High-Concurrency <span className="text-gradient-amber">Full-Stack Apps</span>.
                </h1>
                <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  {PERSONAL_INFO.bioRecruiter}
                </p>
              </>
            ) : (
              <>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.08]">
                  We Build the Product. <span className="text-gradient-amber">You Scale the Business.</span>
                </h1>
                <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  {PERSONAL_INFO.bioClient}
                </p>
              </>
            )}

            {/* Key Value Checklist */}
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3 text-left max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center gap-2 text-xs font-medium text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>NestJS & Next.js Core</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-slate-300">
                <Zap className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Live on Google Play</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-slate-300">
                <ShieldCheck className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Zero Technical Debt</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              {mode === 'recruiter' ? (
                <>
                  <a
                    href="#contact"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-cyan-400 to-teal-400 text-slate-950 hover:brightness-110 shadow-glow-cyan transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <span>Schedule Technical Interview</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <a
                    href="mailto:fahadkhanavoid@gmail.com?subject=Remote%20Role%20Inquiry%20for%20Fahad%20Khan"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-slate-900 border border-slate-700 hover:border-cyan-500/50 text-slate-200 hover:text-white transition-all duration-200"
                  >
                    <FileDown className="w-4 h-4 text-cyan-400" />
                    <span>Get Resume / Contact</span>
                  </a>
                </>
              ) : (
                <>
                  <a
                    href="#estimator"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 hover:brightness-110 shadow-glow-amber transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <span>Instant Scope & Cost Estimator</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <a
                    href="#local-business"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-slate-900 border border-slate-700 hover:border-amber-500/50 text-slate-200 hover:text-white transition-all duration-200"
                  >
                    <span className="text-amber-400">⚡</span>
                    <span>Local Business Packages</span>
                  </a>
                </>
              )}
            </div>

            {/* Quick Proof Metrics Row */}
            <div className="mt-10 pt-8 border-t border-slate-800/80 grid grid-cols-3 gap-4">
              <div>
                <p className="text-2xl sm:text-3xl font-black text-white">{PERSONAL_INFO.shippedProjects}</p>
                <p className="text-xs text-slate-400 uppercase tracking-wider font-mono mt-0.5">Products Shipped</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black text-cyan-400">{PERSONAL_INFO.avgDeliveryDays} Days</p>
                <p className="text-xs text-slate-400 uppercase tracking-wider font-mono mt-0.5">Avg. Delivery</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black text-amber-400">{PERSONAL_INFO.clientCountries}</p>
                <p className="text-xs text-slate-400 uppercase tracking-wider font-mono mt-0.5">Client Nations</p>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Interactive WebGL Scene */}
          <div className="lg:col-span-5 relative h-[420px] sm:h-[480px] lg:h-[540px] flex items-center justify-center">
            {/* Outer Subtle Glass Housing */}
            <div className="absolute inset-0 rounded-3xl bg-slate-900/30 border border-cyan-500/20 backdrop-blur-sm overflow-hidden shadow-2xl">
              <HeroScene />
            </div>

            {/* Floating Live Badge Top Left */}
            <div className="absolute top-4 left-4 z-20 px-3.5 py-2 rounded-xl bg-slate-950/85 backdrop-blur-md border border-cyan-500/30 shadow-lg">
              <div className="flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                <span className="text-[11px] font-mono font-bold text-white">NestJS + Next.js + Flutter</span>
              </div>
            </div>

            {/* Floating Live Badge Bottom Right */}
            <div className="absolute bottom-4 right-4 z-20 px-3.5 py-2 rounded-xl bg-slate-950/85 backdrop-blur-md border border-amber-500/30 shadow-lg">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-[11px] font-mono font-bold text-amber-300">Live on Google Play</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
