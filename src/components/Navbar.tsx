import React, { useState, useEffect } from 'react';
import { AudienceMode } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  Code2, 
  Briefcase, 
  Layers, 
  Store, 
  Calculator, 
  Mail, 
  MessageCircle, 
  ArrowUpRight,
  Menu,
  X
} from 'lucide-react';

interface NavbarProps {
  mode: AudienceMode;
  setMode: (mode: AudienceMode) => void;
  onOpenQuickQuery?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ mode, setMode, onOpenQuickQuery }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Projects', href: '#projects', icon: Code2 },
    { name: 'Architecture', href: '#skills', icon: Layers },
    { name: 'Experience', href: '#experience', icon: Briefcase },
    { name: 'Local Business', href: '#local-business', icon: Store },
    { name: 'Estimator', href: '#estimator', icon: Calculator },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'py-3 bg-[#070913]/85 backdrop-blur-xl border-b border-cyan-500/10 shadow-2xl shadow-black/80' 
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 via-teal-500 to-amber-500 p-[1.5px] transition-transform duration-300 group-hover:scale-105 shadow-glow-cyan">
              <div className="w-full h-full bg-[#070913] rounded-[10px] flex items-center justify-center font-mono font-black text-cyan-400 text-lg">
                FK
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-lg tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                  Fahad Khan
                </span>
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" title="Available for Remote Roles & Projects"></span>
              </div>
              <span className="text-[11px] font-mono text-slate-400 block -mt-0.5">
                {mode === 'recruiter' ? 'Senior Full-Stack Engineer' : 'Founder @ Noxvira'}
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 px-4 py-1.5 rounded-full bg-slate-900/60 border border-slate-700/50 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 rounded-full text-xs font-medium text-slate-300 hover:text-cyan-400 hover:bg-slate-800/80 transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Elements */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Direct WhatsApp Quick Chat */}
            <a
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 hover:bg-emerald-500/20 hover:scale-105 transition-all duration-200"
              title="Chat on WhatsApp (+92-318-7357005)"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            {/* Let's Talk CTA */}
            <a
              href="#contact"
              className="relative inline-flex items-center gap-1.5 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-[#070913] bg-gradient-to-r from-cyan-400 via-teal-400 to-amber-400 hover:brightness-110 shadow-glow-cyan transition-all duration-300 hover:-translate-y-0.5"
            >
              <span>{mode === 'recruiter' ? 'Hire Fahad' : "Let's Build"}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <a
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-800 border border-slate-700 text-slate-200"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden bg-[#070913]/95 backdrop-blur-2xl pt-24 px-6 flex flex-col gap-4 animate-in fade-in duration-200">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-200 font-medium hover:text-cyan-400 hover:border-cyan-500/40"
              >
                <link.icon className="w-4 h-4 text-cyan-400" />
                <span>{link.name}</span>
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-800 flex flex-col gap-3">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3.5 rounded-xl font-bold text-slate-900 bg-gradient-to-r from-cyan-400 to-amber-400"
            >
              {mode === 'recruiter' ? 'Hire Fahad' : "Let's Build"}
            </a>
            <a
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-emerald-500/30 text-emerald-400 bg-emerald-500/10"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp (+92-318-7357005)</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
};
