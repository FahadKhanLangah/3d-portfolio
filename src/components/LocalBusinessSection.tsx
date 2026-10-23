import React, { useState } from 'react';
import { LOCAL_BUSINESS_OFFERS, PERSONAL_INFO } from '../data/portfolioData';
import { LocalBusinessOffer } from '../types';
import { 
  Store, 
  CheckCircle2, 
  Clock, 
  MessageCircle, 
  Sparkles, 
  Send, 
  PhoneCall,
  ArrowRight,
  ShieldAlert
} from 'lucide-react';

export const LocalBusinessSection: React.FC = () => {
  const [selectedPackage, setSelectedPackage] = useState<LocalBusinessOffer>(LOCAL_BUSINESS_OFFERS[0]);
  const [businessName, setBusinessName] = useState('');
  const [businessType, setBusinessType] = useState('E-Commerce Store');
  const [contactNumber, setContactNumber] = useState('');

  const handleSendWhatsAppQuery = (pkg: LocalBusinessOffer) => {
    const text = `Hi Fahad! I saw your Local Business Offer for *${pkg.title}* on your 3D portfolio. My business is *${businessName || 'a local business'}* (${businessType}). Let's discuss pricing and launch timeline!`;
    const url = `https://wa.me/923187357005?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="local-business" className="py-24 relative bg-[#080b18] border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-bold tracking-wider uppercase mb-3">
            <Store className="w-3.5 h-3.5" />
            <span>Regional & Local Business Digitization</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Local Business <span className="text-gradient-amber">Fast-Track Packages</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            High-converting digital solutions for businesses in Pakistan and neighboring regions. No generic templates — custom-built for speed, WhatsApp sales integration, and maximum local trust.
          </p>
        </div>

        {/* 3 Packages Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {LOCAL_BUSINESS_OFFERS.map((offer) => (
            <div
              key={offer.id}
              className={`relative rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 border ${
                offer.badge === 'Most Popular'
                  ? 'bg-[#0f142e] border-amber-500/50 shadow-2xl shadow-amber-950/30'
                  : 'bg-[#0a0e24] border-slate-800 hover:border-slate-700'
              }`}
            >
              {/* Badge */}
              {offer.badge && (
                <div className="absolute -top-3 left-8 px-3.5 py-1 rounded-full text-xs font-mono font-bold bg-amber-500 text-slate-950 shadow-md">
                  {offer.badge}
                </div>
              )}

              <div>
                <h3 className="text-2xl font-bold text-white mb-1">
                  {offer.title}
                </h3>
                <p className="text-xs text-slate-400 mb-6">
                  {offer.tagline}
                </p>

                {/* Price Display */}
                <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl sm:text-3xl font-black text-amber-400">
                      {offer.startingPricePKR}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      ({offer.startingPriceUSD})
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mt-2 text-xs font-mono text-slate-300">
                    <Clock className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Launch in {offer.deliveryTime}</span>
                  </div>
                </div>

                <div className="text-xs font-semibold text-slate-300 mb-3 uppercase tracking-wider font-mono">
                  Ideal For: <span className="text-slate-400 font-normal">{offer.idealFor}</span>
                </div>

                {/* Features List */}
                <div className="space-y-2.5 mb-8">
                  {offer.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => handleSendWhatsAppQuery(offer)}
                className={`w-full py-3.5 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all ${
                  offer.badge === 'Most Popular'
                    ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 hover:brightness-110 shadow-glow-amber'
                    : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 hover:bg-emerald-500/30'
                }`}
              >
                <MessageCircle className="w-4 h-4" />
                <span>Claim Offer on WhatsApp</span>
              </button>
            </div>
          ))}
        </div>

        {/* Quick Query Box */}
        <div className="max-w-4xl mx-auto rounded-3xl p-6 sm:p-10 bg-gradient-to-br from-slate-900/90 via-slate-950 to-[#0c1228] border border-cyan-500/20 shadow-2xl">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5">
              <span className="text-xs font-mono uppercase text-cyan-400 font-bold tracking-wider block mb-1">
                Direct Founder Access
              </span>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Have a Quick Query?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                Need custom requirements or want to confirm if your business idea is technically feasible? Send a 1-click inquiry straight to my personal phone.
              </p>
              
              <div className="mt-4 flex items-center gap-3 text-xs font-mono text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Direct WhatsApp: +92-318-7357005</span>
              </div>
            </div>

            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-3">
              <div>
                <label className="text-[11px] font-mono uppercase text-slate-400 block mb-1">Business Name</label>
                <input
                  type="text"
                  placeholder="e.g. Royal Pharmacy or Style Haven"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="text-[11px] font-mono uppercase text-slate-400 block mb-1">Requirement Type</label>
                <select
                  value={businessType}
                  onChange={(e) => setBusinessType(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white focus:outline-none focus:border-cyan-400"
                >
                  <option>Online Store / E-Commerce</option>
                  <option>Hospital / Clinic Suite</option>
                  <option>Mobile App (Android/iOS)</option>
                  <option>Booking / Service Website</option>
                  <option>Custom SaaS Platform</option>
                </select>
              </div>

              <div className="sm:col-span-2">
                <button
                  onClick={() => handleSendWhatsAppQuery(selectedPackage)}
                  className="w-full py-3 px-6 rounded-xl font-bold text-xs bg-gradient-to-r from-cyan-400 to-teal-400 text-slate-950 hover:brightness-110 shadow-glow-cyan flex items-center justify-center gap-2 transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Quick Query on WhatsApp (Instant Response)</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
