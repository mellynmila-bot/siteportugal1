import React from 'react';
import { Instagram, Video, ExternalLink, Share2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';
import { SparkleIcon } from './SparkleIcon';

interface SocialReelSectionProps {
  t: any;
}

export const SocialReelSection: React.FC<SocialReelSectionProps> = ({ t }) => {
  return (
    <section className="py-16 sm:py-20 bg-[#0d0d0d] relative bg-checkered-dark border-t-2 border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-900 border border-zinc-700 text-[#A855F7] text-xs font-bold uppercase tracking-widest shadow-[2px_2px_0px_#A855F7]">
            <SparkleIcon size={12} className="text-[#A855F7]" />
            <span>{t.socialSection.kicker}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display">
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
            className="group block p-6 bg-[#18181b] border-2 border-zinc-800 hover:border-[#A855F7] shadow-[5px_5px_0px_#000000] hover:shadow-[5px_5px_0px_#A855F7] transition-all flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-3 bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-600 text-white border-2 border-black shadow-[2px_2px_0px_#000000] shrink-0">
                  <Instagram size={24} />
                </div>
                <ExternalLink size={18} className="text-zinc-500 group-hover:text-white transition-colors" />
              </div>
              <div>
                <p className="font-extrabold text-white text-lg group-hover:text-[#A855F7] transition-colors font-display">
                  Instagram
                </p>
                <p className="text-xs text-zinc-400 font-mono mt-0.5">
                  {BUSINESS_INFO.instagramHandle}
                </p>
              </div>
            </div>
            <p className="text-xs text-zinc-400 pt-4 mt-4 border-t border-zinc-800/80">
              Fotos diárias, novos designs e inspirações em Pombal.
            </p>
          </a>

          {/* 2. TikTok: Second */}
          <a
            href={BUSINESS_INFO.tiktokUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group block p-6 bg-[#18181b] border-2 border-zinc-800 hover:border-[#A855F7] shadow-[5px_5px_0px_#000000] hover:shadow-[5px_5px_0px_#A855F7] transition-all flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-3 bg-black text-cyan-400 border-2 border-zinc-700 shadow-[2px_2px_0px_#000000] shrink-0">
                  <Video size={24} />
                </div>
                <ExternalLink size={18} className="text-zinc-500 group-hover:text-white transition-colors" />
              </div>
              <div>
                <p className="font-extrabold text-white text-lg group-hover:text-[#A855F7] transition-colors font-display">
                  TikTok
                </p>
                <p className="text-xs text-zinc-400 font-mono mt-0.5">
                  {BUSINESS_INFO.tiktokHandle}
                </p>
              </div>
            </div>
            <p className="text-xs text-zinc-400 pt-4 mt-4 border-t border-zinc-800/80">
              Vídeos curtos, tutoriais e bastidores das técnicas.
            </p>
          </a>

          {/* 3. Facebook: Third */}
          <a
            href={BUSINESS_INFO.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group block p-6 bg-[#18181b] border-2 border-zinc-800 hover:border-[#A855F7] shadow-[5px_5px_0px_#000000] hover:shadow-[5px_5px_0px_#A855F7] transition-all flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-3 bg-[#1877F2] text-white border-2 border-black shadow-[2px_2px_0px_#000000] shrink-0">
                  <Share2 size={24} />
                </div>
                <ExternalLink size={18} className="text-zinc-500 group-hover:text-white transition-colors" />
              </div>
              <div>
                <p className="font-extrabold text-white text-lg group-hover:text-[#A855F7] transition-colors font-display">
                  Facebook
                </p>
                <p className="text-xs text-zinc-400 font-mono mt-0.5">
                  Nailz by Cataleya
                </p>
              </div>
            </div>
            <p className="text-xs text-zinc-400 pt-4 mt-4 border-t border-zinc-800/80">
              Página oficial, novidades e contactos atualizados.
            </p>
          </a>

        </div>

      </div>
    </section>
  );
};
