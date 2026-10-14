import React from 'react';
import { MapPin, Star, Sparkles, ArrowRight, ExternalLink } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';
import { SparkleIcon } from './SparkleIcon';

interface HeroProps {
  t: any;
}

export const Hero: React.FC<HeroProps> = ({ t }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:py-20 bg-[#0A0A0A]">
      {/* Background warm gold atmospheric accent */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] bg-[#D4AF37]/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main 2-column Hero Split (On mobile, photo is on top before text) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Typographic Punch & CTAs: order-2 on mobile, order-1 on desktop */}
          <div className="order-2 lg:order-1 lg:col-span-7 space-y-6">
            
            {/* Top kicker badge (Gold & Minimalist) */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#141414] border border-[#D4AF37]/40 text-[#D4AF37] text-xs sm:text-sm font-semibold tracking-widest uppercase">
              <SparkleIcon size={14} color="#D4AF37" />
              <span>{t.hero.badge}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white leading-[1.1] font-display">
              <span className="text-gold-gradient font-semibold">
                {t.hero.titleHighlight}
              </span>{' '}
              {t.hero.titleRest}
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-zinc-300 font-normal leading-relaxed max-w-2xl">
              {t.hero.subtitle}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href="#agendamento"
                className="luxury-btn-gold flex items-center justify-center gap-3 px-7 py-4 text-xs sm:text-sm font-bold uppercase tracking-widest text-center"
              >
                <span>{t.hero.ctaPrimary}</span>
                <ArrowRight size={17} />
              </a>

              <a
                href="#galeria"
                className="luxury-btn-dark flex items-center justify-center gap-2.5 px-6 py-4 text-xs sm:text-sm font-semibold uppercase tracking-widest text-center"
              >
                <span>{t.hero.ctaSecondary}</span>
                <Sparkles size={16} className="text-[#D4AF37]" />
              </a>
            </div>

            {/* Local Proof Bar: Pombal location + 5.0 Google Stars */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {/* Location Card */}
              <div className="p-4 bg-[#121212] border border-zinc-800 flex items-start gap-3">
                <div className="p-2 bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] shrink-0 mt-0.5">
                  <MapPin size={18} />
                </div>
                <div className="text-xs">
                  <p className="font-bold text-white uppercase tracking-wider">{t.hero.locationBadge}</p>
                  <p className="text-zinc-400 mt-0.5">{BUSINESS_INFO.address}</p>
                </div>
              </div>

              {/* Google Reviews Card */}
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-[#121212] border border-zinc-800 hover:border-[#D4AF37]/60 transition-all flex items-start gap-3 group"
              >
                <div className="p-2 bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] shrink-0 mt-0.5">
                  <Star size={18} fill="currentColor" />
                </div>
                <div className="text-xs">
                  <div className="flex items-center gap-1.5 font-bold text-white">
                    <span>5.0</span>
                    <div className="flex text-[#D4AF37]">
                      {'★★★★★'.split('').map((s, idx) => (
                        <span key={idx}>{s}</span>
                      ))}
                    </div>
                  </div>
                  <p className="text-zinc-400 mt-0.5 group-hover:text-[#D4AF37] flex items-center gap-1 transition-colors">
                    <span>{t.hero.googleRatingLink}</span>
                    <ExternalLink size={11} />
                  </p>
                </div>
              </a>
            </div>

          </div>

          {/* Hero Portrait in Sophisticated Minimalist Gold Frame: order-1 on mobile, order-2 on desktop */}
          <div className="order-1 lg:order-2 lg:col-span-5 relative flex justify-center lg:justify-end">
            
            {/* Elegant hairline background aura */}
            <div className="relative max-w-md w-full bg-[#141414] p-3 border border-[#D4AF37]/40 shadow-2xl transition-transform duration-300">
              
              {/* Photo */}
              <div className="relative aspect-[4/5] overflow-hidden bg-zinc-900 border border-zinc-800">
                <img
                  src={BUSINESS_INFO.photos.heroPortrait}
                  alt="Cataleya Gu - Especialista em Nail Art em Pombal"
                  className="w-full h-full object-cover object-center filter saturate-105 contrast-105"
                  referrerPolicy="no-referrer"
                  loading="eager"
                  fetchPriority="high"
                />

                {/* Corner Sparkle */}
                <div className="absolute top-3 right-3 p-1.5 bg-black/80 border border-[#D4AF37]/50 text-white">
                  <SparkleIcon size={16} color="#D4AF37" className="animate-pulse" />
                </div>

                {/* Bottom Photo Overlay */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black via-black/80 to-transparent p-5">
                  <p className="text-xs font-mono uppercase tracking-widest text-[#D4AF37] font-semibold">
                    Nail Artist & Criadora
                  </p>
                  <p className="text-2xl font-normal text-white font-display">
                    Cataleya Gu
                  </p>
                  <p className="text-xs text-zinc-300 mt-0.5">
                    Pombal, Portugal 💋
                  </p>
                </div>
              </div>

              {/* Minimalist Caption Bar */}
              <div className="mt-3 flex items-center justify-between text-xs px-1 text-zinc-400">
                <span className="font-semibold text-zinc-300 uppercase tracking-wider text-[11px]">✦ NAIL ART POMBAL</span>
                <span className="text-[#D4AF37] font-medium tracking-wide">@nailzbycataleya</span>
              </div>
            </div>

          </div>

        </div>

        {/* 4-Column Metric Strip */}
        <div className="mt-14 pt-8 border-t border-zinc-800/80 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="p-4 bg-[#121212] border border-zinc-800/80">
            <p className="text-2xl sm:text-3xl font-normal text-white font-display tabular-nums">
              {t.hero.statClients}
            </p>
            <p className="text-xs sm:text-sm text-zinc-400 font-medium mt-1">
              {t.hero.statClientsLabel}
            </p>
          </div>

          <div className="p-4 bg-[#121212] border border-zinc-800/80">
            <p className="text-2xl sm:text-3xl font-semibold text-[#D4AF37] font-display tabular-nums">
              {t.hero.statExp}
            </p>
            <p className="text-xs sm:text-sm text-zinc-400 font-medium mt-1">
              {t.hero.statExpLabel}
            </p>
          </div>

          <div className="p-4 bg-[#121212] border border-zinc-800/80">
            <p className="text-2xl sm:text-3xl font-semibold text-[#D4AF37] font-display tabular-nums">
              {t.hero.statReviews}
            </p>
            <p className="text-xs sm:text-sm text-zinc-400 font-medium mt-1">
              {t.hero.statReviewsLabel}
            </p>
          </div>

          <div className="p-4 bg-[#121212] border border-zinc-800/80">
            <p className="text-2xl sm:text-3xl font-normal text-white font-display">
              100%
            </p>
            <p className="text-xs sm:text-sm text-zinc-400 font-medium mt-1">
              {t.aboutSection.badges.safety}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
