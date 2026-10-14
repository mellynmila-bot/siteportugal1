import React from 'react';
import { ShieldCheck, Award, Users, Sparkles, MessageCircle, Heart } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';
import { SparkleIcon } from './SparkleIcon';

interface AboutSectionProps {
  t: any;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ t }) => {
  return (
    <section id="sobre" className="py-20 sm:py-24 bg-white text-stone-900 relative overflow-hidden border-t border-stone-200">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Portrait with sleek luxury gold frame */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            <div className="relative max-w-sm w-full bg-stone-50 p-3 border border-[#D4AF37]/40 shadow-xl transition-transform duration-300">
              <div className="relative aspect-[3/4] overflow-hidden bg-stone-100 border border-stone-200">
                <img
                  src={BUSINESS_INFO.photos.aboutPortrait}
                  alt="Cataleya Gu - Especialista em Nail Art em Pombal"
                  className="w-full h-full object-cover object-top filter saturate-105"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />

                {/* Floating Gold Badge */}
                <div className="absolute top-3.5 left-3.5 bg-black/85 border border-[#D4AF37]/60 text-white px-3 py-1 text-xs font-mono font-medium flex items-center gap-1.5 shadow-sm">
                  <Heart size={12} className="text-[#D4AF37] fill-[#D4AF37]" />
                  <span>CATALEYA GU</span>
                </div>

                <div className="absolute bottom-3.5 right-3.5 bg-gradient-to-r from-[#DFBA73] to-[#C5A880] text-[#0A0A0A] p-2 border border-[#E5C378] shadow-md">
                  <SparkleIcon size={16} color="#0A0A0A" />
                </div>
              </div>

              <div className="mt-3.5 text-center">
                <p className="text-xs text-stone-500 font-medium tracking-wide">
                  Pombal • Portugal • Nail Art & Estética Exclusiva
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Narrative & Technical Proof */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Kicker */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-amber-50 border border-[#D4AF37]/50 text-[#B38715] text-xs font-bold uppercase tracking-widest">
              <SparkleIcon size={12} color="#B38715" />
              <span>{t.aboutSection.kicker}</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-stone-950 tracking-tight font-display">
              {t.aboutSection.title}
            </h2>

            {/* Quote with gold accent */}
            <div className="p-6 bg-stone-50 border-l-2 border-[#D4AF37] border-y border-r border-stone-200 italic text-stone-800 text-base sm:text-lg leading-relaxed shadow-sm">
              "{t.aboutSection.quote}"
            </div>

            {/* Emotional connection paragraph */}
            <p className="text-base text-stone-600 leading-relaxed font-normal">
              {t.aboutSection.emotionPara}
            </p>

            {/* Technical excellence paragraph */}
            <p className="text-base text-stone-600 leading-relaxed font-normal">
              {t.aboutSection.techPara}
            </p>

            {/* 4 Feature Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="p-4 bg-stone-50 border border-stone-200 flex items-center gap-3.5">
                <div className="p-2.5 bg-amber-100 text-[#B38715] border border-[#D4AF37]/40 shrink-0">
                  <Award size={18} />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-stone-900">
                  {t.aboutSection.badges.experience}
                </span>
              </div>

              <div className="p-4 bg-stone-50 border border-stone-200 flex items-center gap-3.5">
                <div className="p-2.5 bg-amber-100 text-[#B38715] border border-[#D4AF37]/40 shrink-0">
                  <Users size={18} />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-stone-900">
                  {t.aboutSection.badges.clients}
                </span>
              </div>

              <div className="p-4 bg-stone-50 border border-stone-200 flex items-center gap-3.5">
                <div className="p-2.5 bg-amber-100 text-[#B38715] border border-[#D4AF37]/40 shrink-0">
                  <ShieldCheck size={18} />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-stone-900">
                  {t.aboutSection.badges.safety}
                </span>
              </div>

              <div className="p-4 bg-stone-50 border border-stone-200 flex items-center gap-3.5">
                <div className="p-2.5 bg-amber-100 text-[#B38715] border border-[#D4AF37]/40 shrink-0">
                  <Sparkles size={18} />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-stone-900">
                  {t.aboutSection.badges.custom}
                </span>
              </div>
            </div>

            {/* Direct Booking CTA */}
            <div className="pt-4">
              <a
                href="#agendamento"
                className="luxury-btn-gold inline-flex items-center gap-2.5 px-7 py-3.5 text-xs font-bold uppercase tracking-widest"
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
