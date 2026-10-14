import React from 'react';
import { Instagram, Video, ExternalLink, Share2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';
import { SparkleIcon } from './SparkleIcon';

interface SocialReelSectionProps {
  t: any;
}

export const SocialReelSection: React.FC<SocialReelSectionProps> = ({ t }) => {
  return (
    <section className="py-20 sm:py-24 bg-[#0A0A0A] relative text-white border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#141414] border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-semibold uppercase tracking-widest">
            <SparkleIcon size={12} color="#D4AF37" />
            <span>{t.socialSection.kicker}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight font-display">
            {t.socialSection.title}
          </h2>

          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            {t.socialSection.subtitle}
          </p>
        </div>

        {/* 3 Official Social Channels Grid (Instagram first, then TikTok, then Facebook) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          
          {/* 1. Instagram: First */}
          <a
            href={BUSINESS_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group block p-7 bg-[#141414] border border-zinc-800 hover:border-[#D4AF37] transition-all duration-300 shadow-lg hover:shadow-[0_8px_30px_rgba(212,175,55,0.12)] flex flex-col justify-between"
          >
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <div className="p-3 bg-gradient-to-tr from-amber-500 via-rose-500 to-amber-200 text-white border border-amber-300/40 shadow-sm shrink-0">
                  <Instagram size={22} />
                </div>
                <ExternalLink size={16} className="text-zinc-500 group-hover:text-[#D4AF37] transition-colors" />
              </div>
              <div>
                <p className="font-normal text-white text-2xl group-hover:text-[#D4AF37] transition-colors font-display">
                  Instagram
                </p>
                <p className="text-xs text-zinc-400 font-mono mt-1">
                  {BUSINESS_INFO.instagramHandle}
                </p>
              </div>
            </div>
            <p className="text-xs text-zinc-400 pt-5 mt-5 border-t border-zinc-800/80 leading-relaxed">
              Fotos diárias, novos designs e inspirações em Pombal.
            </p>
          </a>

          {/* 2. TikTok: Second */}
          <a
            href={BUSINESS_INFO.tiktokUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group block p-7 bg-[#141414] border border-zinc-800 hover:border-[#D4AF37] transition-all duration-300 shadow-lg hover:shadow-[0_8px_30px_rgba(212,175,55,0.12)] flex flex-col justify-between"
          >
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <div className="p-3 bg-black text-[#D4AF37] border border-[#D4AF37]/40 shadow-sm shrink-0">
                  <Video size={22} />
                </div>
                <ExternalLink size={16} className="text-zinc-500 group-hover:text-[#D4AF37] transition-colors" />
              </div>
              <div>
                <p className="font-normal text-white text-2xl group-hover:text-[#D4AF37] transition-colors font-display">
                  TikTok
                </p>
                <p className="text-xs text-zinc-400 font-mono mt-1">
                  {BUSINESS_INFO.tiktokHandle}
                </p>
              </div>
            </div>
            <p className="text-xs text-zinc-400 pt-5 mt-5 border-t border-zinc-800/80 leading-relaxed">
              Vídeos curtos, tutoriais e bastidores das técnicas.
            </p>
          </a>

          {/* 3. Facebook: Third */}
          <a
            href={BUSINESS_INFO.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group block p-7 bg-[#141414] border border-zinc-800 hover:border-[#D4AF37] transition-all duration-300 shadow-lg hover:shadow-[0_8px_30px_rgba(212,175,55,0.12)] flex flex-col justify-between"
          >
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <div className="p-3 bg-[#1877F2] text-white border border-blue-400/40 shadow-sm shrink-0">
                  <Share2 size={22} />
                </div>
                <ExternalLink size={16} className="text-zinc-500 group-hover:text-[#D4AF37] transition-colors" />
              </div>
              <div>
                <p className="font-normal text-white text-2xl group-hover:text-[#D4AF37] transition-colors font-display">
                  Facebook
                </p>
                <p className="text-xs text-zinc-400 font-mono mt-1">
                  Nailz by Cataleya
                </p>
              </div>
            </div>
            <p className="text-xs text-zinc-400 pt-5 mt-5 border-t border-zinc-800/80 leading-relaxed">
              Página oficial, novidades e contactos atualizados.
            </p>
          </a>

        </div>

      </div>
    </section>
  );
};
