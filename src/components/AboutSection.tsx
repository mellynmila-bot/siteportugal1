import React from 'react';
import { ShieldCheck, Award, Users, Sparkles, MessageCircle, Heart } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';
import { SparkleIcon } from './SparkleIcon';

interface AboutSectionProps {
  t: any;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ t }) => {
  return (
    <section id="sobre" className="py-20 bg-[#121212] relative overflow-hidden border-t-2 border-zinc-900">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Portrait with Y2K sticker cut frame */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Background solid offset shadow block */}
            <div className="absolute inset-0 max-w-sm mx-auto translate-x-4 translate-y-4 bg-[#A855F7] border-2 border-black hidden sm:block" />

            <div className="relative max-w-sm w-full bg-[#18181b] p-3 border-4 border-white shadow-[8px_8px_0px_#000000] rotate-[1deg] hover:rotate-0 transition-transform duration-300">
              <div className="relative aspect-[3/4] overflow-hidden bg-zinc-900 border-2 border-black">
                <img
                  src={BUSINESS_INFO.photos.aboutPortrait}
                  alt="Cataleya Gu - Especialista em Nail Art em Pombal"
                  className="w-full h-full object-cover object-top filter saturate-105"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />

                {/* Floating Y2K Badge */}
                <div className="absolute top-3 left-3 bg-black/90 border border-white text-white px-2.5 py-1 text-xs font-mono font-bold flex items-center gap-1.5">
                  <Heart size={12} className="text-[#A855F7] fill-[#A855F7]" />
                  <span>CATALEYA GU</span>
                </div>

                <div className="absolute bottom-3 right-3 bg-[#A855F7] text-white p-2 border-2 border-black shadow-[2px_2px_0px_#000000]">
                  <SparkleIcon size={16} className="text-white" />
                </div>
              </div>

              <div className="mt-3 text-center">
                <p className="text-xs font-mono text-zinc-400">
                  Pombal • Portugal • Nail Art & Estética
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Narrative & Technical Proof */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Kicker */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-900 border border-zinc-700 text-[#A855F7] text-xs font-bold uppercase tracking-widest shadow-[2px_2px_0px_#A855F7]">
              <SparkleIcon size={12} className="text-[#A855F7]" />
              <span>{t.aboutSection.kicker}</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display">
              {t.aboutSection.title}
            </h2>

            {/* Quote */}
            <div className="p-5 bg-zinc-900/90 border-l-4 border-[#A855F7] border border-zinc-800 italic text-zinc-200 text-base sm:text-lg leading-relaxed shadow-[4px_4px_0px_#000000]">
              {t.aboutSection.quote}
            </div>

            {/* Emotional connection paragraph */}
            <p className="text-base text-zinc-300 leading-relaxed">
              {t.aboutSection.emotionPara}
            </p>

            {/* Technical excellence paragraph */}
            <p className="text-base text-zinc-300 leading-relaxed">
              {t.aboutSection.techPara}
            </p>

            {/* 4 Feature Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3 bg-zinc-900 border border-zinc-800 flex items-center gap-3">
                <div className="p-2 bg-[#A855F7]/10 text-[#A855F7] border border-[#A855F7]/30 shrink-0">
                  <Award size={18} />
                </div>
                <span className="text-xs sm:text-sm font-bold text-white">
                  {t.aboutSection.badges.experience}
                </span>
              </div>

              <div className="p-3 bg-zinc-900 border border-zinc-800 flex items-center gap-3">
                <div className="p-2 bg-[#A855F7]/10 text-[#A855F7] border border-[#A855F7]/30 shrink-0">
                  <Users size={18} />
                </div>
                <span className="text-xs sm:text-sm font-bold text-white">
                  {t.aboutSection.badges.clients}
                </span>
              </div>

              <div className="p-3 bg-zinc-900 border border-zinc-800 flex items-center gap-3">
                <div className="p-2 bg-[#A855F7]/10 text-[#A855F7] border border-[#A855F7]/30 shrink-0">
                  <ShieldCheck size={18} />
                </div>
                <span className="text-xs sm:text-sm font-bold text-white">
                  {t.aboutSection.badges.safety}
                </span>
              </div>

              <div className="p-3 bg-zinc-900 border border-zinc-800 flex items-center gap-3">
                <div className="p-2 bg-[#A855F7]/10 text-[#A855F7] border border-[#A855F7]/30 shrink-0">
                  <Sparkles size={18} />
                </div>
                <span className="text-xs sm:text-sm font-bold text-white">
                  {t.aboutSection.badges.custom}
                </span>
              </div>
            </div>

            {/* Direct Booking CTA */}
            <div className="pt-4">
              <a
                href="#agendamento"
                className="neo-btn-purple inline-flex items-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-extrabold uppercase tracking-wide"
              >
                <MessageCircle size={16} />
                <span>Agendar com a Cataleya</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
