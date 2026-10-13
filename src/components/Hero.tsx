import React from 'react';
import { MapPin, Star, Sparkles, ArrowRight, ExternalLink } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';
import { SparkleIcon } from './SparkleIcon';

interface HeroProps {
  t: any;
}

export const Hero: React.FC<HeroProps> = ({ t }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:py-20 bg-checkered-dark bg-tech-grid">
      {/* Background neon atmospheric accent */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#A855F7]/15 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main 2-column Hero Split (On mobile, photo is on top before text) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Typographic Punch & CTAs: order-2 on mobile, order-1 on desktop */}
          <div className="order-2 lg:order-1 lg:col-span-7 space-y-6">
            
            {/* Top kicker badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-zinc-900 border border-zinc-700 text-[#A855F7] text-xs sm:text-sm font-extrabold uppercase tracking-widest shadow-[2px_2px_0px_#A855F7]">
              <SparkleIcon size={14} className="text-[#A855F7]" />
              <span>{t.hero.badge}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] font-display">
              <span className="text-[#A855F7] underline decoration-4 underline-offset-8 decoration-white">
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
                className="neo-btn-purple flex items-center justify-center gap-3 px-6 py-4 text-sm sm:text-base font-extrabold uppercase tracking-wide text-center"
              >
                <span>{t.hero.ctaPrimary}</span>
                <ArrowRight size={18} />
              </a>

              <a
                href="#galeria"
                className="neo-btn-black flex items-center justify-center gap-2 px-6 py-4 text-sm sm:text-base font-bold uppercase tracking-wide text-center"
              >
                <span>{t.hero.ctaSecondary}</span>
                <Sparkles size={16} className="text-[#A855F7]" />
              </a>
            </div>

            {/* Local Proof Bar: Pombal location + 5.0 Google Stars */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Location Card */}
              <div className="p-3.5 bg-zinc-900/90 border-2 border-zinc-800 flex items-start gap-3">
                <div className="p-2 bg-[#A855F7]/10 border border-[#A855F7]/40 text-[#A855F7] shrink-0 mt-0.5">
                  <MapPin size={18} />
                </div>
                <div className="text-xs">
                  <p className="font-extrabold text-white uppercase tracking-wider">{t.hero.locationBadge}</p>
                  <p className="text-zinc-400 mt-0.5">{BUSINESS_INFO.address}</p>
                </div>
              </div>

              {/* Google Reviews Card */}
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 bg-zinc-900/90 border-2 border-zinc-800 hover:border-[#A855F7] transition-all flex items-start gap-3 group"
              >
                <div className="p-2 bg-yellow-400/10 border border-yellow-400/40 text-yellow-400 shrink-0 mt-0.5">
                  <Star size={18} fill="currentColor" />
                </div>
                <div className="text-xs">
                  <div className="flex items-center gap-1.5 font-extrabold text-white">
                    <span>5.0</span>
                    <div className="flex text-yellow-400">
                      {'★★★★★'.split('').map((s, idx) => (
                        <span key={idx}>{s}</span>
                      ))}
                    </div>
                  </div>
                  <p className="text-zinc-400 mt-0.5 group-hover:text-[#A855F7] flex items-center gap-1">
                    <span>{t.hero.googleRatingLink}</span>
                    <ExternalLink size={11} />
                  </p>
                </div>
              </a>
            </div>

          </div>

          {/* Hero Portrait in Y2K Sticker Frame: order-1 on mobile (comes first above text), order-2 on desktop */}
          <div className="order-1 lg:order-2 lg:col-span-5 relative flex justify-center lg:justify-end">
            
            {/* Background decorative offset block */}
            <div className="absolute inset-0 max-w-md mx-auto lg:mr-0 translate-x-3 translate-y-3 bg-[#A855F7] border-2 border-black hidden sm:block" />

            {/* Sticker Image Card */}
            <div className="relative max-w-md w-full bg-[#18181b] p-3 border-4 border-white shadow-[8px_8px_0px_#000000] rotate-[-1deg] hover:rotate-0 transition-transform duration-300">
              
              {/* Photo */}
              <div className="relative aspect-[4/5] overflow-hidden bg-zinc-800 border-2 border-black">
                <img
                  src={BUSINESS_INFO.photos.heroPortrait}
                  alt="Cataleya Gu - Especialista em Nail Art em Pombal"
                  className="w-full h-full object-cover object-center filter saturate-105 contrast-105"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />

                {/* Corner Sparkle */}
                <div className="absolute top-3 right-3 p-1.5 bg-black/80 border border-white text-white">
                  <SparkleIcon size={18} className="text-[#A855F7] animate-pulse" />
                </div>

                {/* Bottom Photo Overlay */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black via-black/70 to-transparent p-4">
                  <p className="text-xs font-mono uppercase tracking-widest text-[#A855F7] font-bold">
                    Nail Artist & Criadora
                  </p>
                  <p className="text-lg font-extrabold text-white font-display">
                    Cataleya Gu
                  </p>
                  <p className="text-xs text-zinc-300">
                    Pombal, Portugal 💋
                  </p>
                </div>
              </div>

              {/* Street Sticker Badge */}
              <div className="mt-3 flex items-center justify-between text-xs font-mono px-1 text-zinc-300">
                <span className="font-bold text-white uppercase">✦ NAIL ART POMBAL</span>
                <span className="text-[#A855F7] font-bold">@nailzbycataleya</span>
              </div>
            </div>

          </div>

        </div>

        {/* 4-Column Metric Strip (Full width row below the hero split) */}
        <div className="mt-14 pt-8 border-t-2 border-zinc-800 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="p-4 bg-zinc-900/60 border border-zinc-800">
            <p className="text-2xl sm:text-3xl font-extrabold text-white font-display tabular-nums">
              {t.hero.statClients}
            </p>
            <p className="text-xs sm:text-sm text-zinc-400 font-medium mt-1">
              {t.hero.statClientsLabel}
            </p>
          </div>

          <div className="p-4 bg-zinc-900/60 border border-zinc-800">
            <p className="text-2xl sm:text-3xl font-extrabold text-[#A855F7] font-display tabular-nums">
              {t.hero.statExp}
            </p>
            <p className="text-xs sm:text-sm text-zinc-400 font-medium mt-1">
              {t.hero.statExpLabel}
            </p>
          </div>

          <div className="p-4 bg-zinc-900/60 border border-zinc-800">
            <p className="text-2xl sm:text-3xl font-extrabold text-yellow-400 font-display tabular-nums">
              {t.hero.statReviews}
            </p>
            <p className="text-xs sm:text-sm text-zinc-400 font-medium mt-1">
              {t.hero.statReviewsLabel}
            </p>
          </div>

          <div className="p-4 bg-zinc-900/60 border border-zinc-800">
            <p className="text-2xl sm:text-3xl font-extrabold text-white font-display">
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
