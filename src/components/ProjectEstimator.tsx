import React, { useState } from 'react';
import { Calculator, Check, Sparkles, MessageCircle, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

interface FeatureOption {
  id: string;
  name: string;
  days: number;
  costUSD: number;
}

const PROJECT_TYPES = [
  { id: 'saas', name: 'Full-Stack Web App / SaaS', baseDays: 14, baseCostUSD: 1400 },
  { id: 'mobile', name: 'Flutter Mobile App (iOS & Android)', baseDays: 18, baseCostUSD: 1800 },
  { id: 'backend', name: 'High-Concurrency Backend / APIs', baseDays: 10, baseCostUSD: 1100 },
  { id: 'ecommerce', name: 'Custom E-Commerce Platform', baseDays: 12, baseCostUSD: 1200 },
];

const AVAILABLE_FEATURES: FeatureOption[] = [
  { id: 'auth', name: 'Advanced Auth & RBAC (Multi-role)', days: 2, costUSD: 250 },
  { id: 'realtime', name: 'Real-time WebSockets & Live Feeds', days: 3, costUSD: 350 },
  { id: 'payments', name: 'Stripe / Multi-Gateway Payments', days: 2, costUSD: 300 },
  { id: 'admin', name: 'Admin Operations Dashboard & Analytics', days: 3, costUSD: 400 },
  { id: 'ai', name: 'AI Integration (Claude / OpenAI / Custom Agents)', days: 3, costUSD: 450 },
  { id: 'mobile-bridge', name: 'Cross-Platform Mobile App Sync', days: 5, costUSD: 600 },
];

export const ProjectEstimator: React.FC = () => {
  const [selectedType, setSelectedType] = useState(PROJECT_TYPES[0]);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>(['auth', 'payments']);

  const toggleFeature = (id: string) => {
    if (selectedFeatures.includes(id)) {
      setSelectedFeatures(selectedFeatures.filter(f => f !== id));
    } else {
      setSelectedFeatures([...selectedFeatures, id]);
    }
  };

  const totalDays = selectedType.baseDays + selectedFeatures.reduce((acc, fId) => {
    const f = AVAILABLE_FEATURES.find(item => item.id === fId);
    return acc + (f ? f.days : 0);
  }, 0);

  const totalCostUSD = selectedType.baseCostUSD + selectedFeatures.reduce((acc, fId) => {
    const f = AVAILABLE_FEATURES.find(item => item.id === fId);
    return acc + (f ? f.costUSD : 0);
  }, 0);

  const totalCostPKR = (totalCostUSD * 280).toLocaleString();

  const handleSendEstimateWhatsApp = () => {
    const featureNames = selectedFeatures
      .map(id => AVAILABLE_FEATURES.find(f => f.id === id)?.name)
      .filter(Boolean)
      .join(', ');

    const text = `Hi Fahad! I used your 3D Portfolio Project Estimator:%0A- Project: *${selectedType.name}*%0A- Scope Features: ${featureNames}%0A- Estimated Timeline: *${totalDays} days*%0A- Estimated Budget: *~$${totalCostUSD}* (~PKR ${totalCostPKR})%0A%0ACan we schedule a discovery call to kick this off?`;
    
    window.open(`https://wa.me/923187357005?text=${text}`, '_blank');
  };

  return (
    <section id="estimator" className="py-24 relative overflow-hidden bg-[#070913]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-bold tracking-wider uppercase mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Project Scope Estimator</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Calculate Your <span className="text-gradient-cyan">Timeline & Investment</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Transparent, predictable engineering estimates. Choose your product type and core architecture modules to instantly generate an MVP roadmap.
          </p>
        </div>

        {/* Estimator Container */}
        <div className="grid lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-8 p-6 sm:p-8 rounded-3xl bg-[#0c1024]/90 border border-slate-800">
            {/* Step 1: Base Type */}
            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-cyan-400 block mb-3 font-bold">
                1. Select Core Platform Type
              </label>
              <div className="grid sm:grid-cols-2 gap-3">
                {PROJECT_TYPES.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setSelectedType(type)}
                    className={`p-3.5 rounded-2xl border text-left transition-all ${
                      selectedType.id === type.id
                        ? 'bg-cyan-500/10 border-cyan-400 shadow-glow-cyan text-white'
                        : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <p className="text-xs font-bold">{type.name}</p>
                    <p className="text-[11px] font-mono text-cyan-400/80 mt-1">
                      Base ~{type.baseDays} days
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Features */}
            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-cyan-400 block mb-3 font-bold">
                2. Add High-Performance Modules
              </label>
              <div className="grid gap-2.5">
                {AVAILABLE_FEATURES.map((feature) => {
                  const isChecked = selectedFeatures.includes(feature.id);
                  return (
                    <button
                      key={feature.id}
                      onClick={() => toggleFeature(feature.id)}
                      className={`p-3 rounded-xl border flex items-center justify-between text-left transition-all ${
                        isChecked
                          ? 'bg-slate-900 border-teal-500/50 text-white'
                          : 'bg-slate-950/40 border-slate-800 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-4 h-4 rounded-md border flex items-center justify-center ${
                          isChecked ? 'bg-teal-400 border-teal-400 text-black' : 'border-slate-600'
                        }`}>
                          {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                        <span className="text-xs font-medium">{feature.name}</span>
                      </div>
                      <span className="text-[11px] font-mono text-slate-400">
                        +{feature.days}d
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Result Card Column */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#101736] to-[#090d20] border border-cyan-500/30 shadow-2xl relative">
            <div className="absolute top-0 right-8 -translate-y-1/2 px-3 py-1 rounded-full bg-cyan-400 text-slate-950 font-mono text-xs font-bold uppercase tracking-wider">
              Instant Quote
            </div>

            <h3 className="text-xl font-bold text-white mb-6">
              MVP Engineering Blueprint
            </h3>

            <div className="space-y-4 mb-8">
              <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800/80">
                <span className="text-[11px] font-mono uppercase text-slate-400 block">
                  Estimated Turnaround
                </span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-3xl font-black text-cyan-300">
                    ~{totalDays} Days
                  </span>
                  <span className="text-xs font-mono text-emerald-400">
                    (Production Ready)
                  </span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800/80">
                <span className="text-[11px] font-mono uppercase text-slate-400 block">
                  Estimated Investment
                </span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-3xl font-black text-amber-400">
                    ${totalCostUSD.toLocaleString()}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    (~PKR {totalCostPKR})
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-2 mb-8 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-teal-400" />
                <span>100% Full Source Code & IP Ownership</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-amber-400" />
                <span>Zero Downtime Cloud Deployment</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>30 Days Post-Launch Bug Warranty</span>
              </div>
            </div>

            <button
              onClick={handleSendEstimateWhatsApp}
              className="w-full py-4 rounded-xl font-bold text-xs bg-gradient-to-r from-cyan-400 via-teal-400 to-amber-400 text-slate-950 hover:brightness-110 shadow-glow-cyan flex items-center justify-center gap-2 transition-all hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Lock This Scope on WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
