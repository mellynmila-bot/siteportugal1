import React from 'react';
import { Instagram, Video, ExternalLink, Share2, Play } from 'lucide-react';
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

        {/* Centerpiece Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          
          {/* Reel Container: HIDDEN on mobile as requested, visible only on lg screens */}
          <div className="hidden lg:flex lg:col-span-6 justify-center">
            <div className="relative w-full max-w-sm bg-[#18181b] p-3 border-4 border-white shadow-[8px_8px_0px_#A855F7]">
              
              {/* Header badge */}
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-zinc-800 text-xs font-mono">
                <span className="flex items-center gap-1.5 text-white font-bold">
                  <Instagram size={14} className="text-[#A855F7]" />
                  <span>@nailzbycataleya</span>
                </span>
                <span className="text-zinc-400">Reel Oficial</span>
              </div>

              {/* Instagram Reel Iframe */}
              <div className="relative aspect-[9/16] w-full bg-black border-2 border-zinc-800 overflow-hidden flex items-center justify-center">
                <iframe
                  src={BUSINESS_INFO.reelEmbedUrl}
                  title="Instagram Reel - Nailz by Cataleya"
                  className="w-full h-full border-0"
                  allowTransparency={true}
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  scrolling="no"
                  loading="lazy"
                />
              </div>

              {/* Action bar below video */}
              <div className="mt-3 flex items-center justify-between pt-2 border-t border-zinc-800">
                <a
                  href={BUSINESS_INFO.reelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-zinc-300 hover:text-[#A855F7] flex items-center gap-1.5 transition-colors"
                >
                  <Play size={12} className="text-[#A855F7] fill-[#A855F7]" />
                  <span>{t.socialSection.reelWatchBtn}</span>
                  <ExternalLink size={12} />
                </a>

                <div className="flex items-center gap-2 text-xs text-zinc-400 font-mono">
                  <span>Pombal, PT</span>
                </div>
              </div>

            </div>
          </div>

          {/* Social Channels Callout & Links */}
          <div className="lg:col-span-6 space-y-6 w-full">
            
            {/* Title & Desc: HIDDEN on mobile as requested, visible only on lg screens */}
            <div className="hidden lg:block space-y-3">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                {t.socialSection.reelTitle}
              </h3>
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                {t.socialSection.reelDesc}
              </p>
            </div>

            {/* Neo-brutalist Social Cards */}
            <div className="space-y-4 pt-2">
              
              {/* Instagram card: HIDDEN on mobile as requested, visible on desktop */}
              <a
                href={BUSINESS_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:block group p-4 bg-[#18181b] border-2 border-zinc-800 hover:border-[#A855F7] shadow-[4px_4px_0px_#000000] hover:shadow-[4px_4px_0px_#A855F7] transition-all"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-600 text-white border border-black shrink-0">
                      <Instagram size={20} />
                    </div>
                    <div>
                      <p className="font-extrabold text-white text-sm sm:text-base group-hover:text-[#A855F7] transition-colors">
                        Instagram
                      </p>
                      <p className="text-xs text-zinc-400">{BUSINESS_INFO.instagramHandle}</p>
                    </div>
                  </div>
                  <ExternalLink size={16} className="text-zinc-500 group-hover:text-white transition-colors" />
                </div>
              </a>

              {/* TikTok: Visible on all devices */}
              <a
                href={BUSINESS_INFO.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-4 bg-[#18181b] border-2 border-zinc-800 hover:border-[#A855F7] shadow-[4px_4px_0px_#000000] hover:shadow-[4px_4px_0px_#A855F7] transition-all"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-black text-cyan-400 border border-zinc-700 shrink-0">
                      <Video size={20} />
                    </div>
                    <div>
                      <p className="font-extrabold text-white text-sm sm:text-base group-hover:text-[#A855F7] transition-colors">
                        TikTok
                      </p>
                      <p className="text-xs text-zinc-400">{BUSINESS_INFO.tiktokHandle}</p>
                    </div>
                  </div>
                  <ExternalLink size={16} className="text-zinc-500 group-hover:text-white transition-colors" />
                </div>
              </a>

              {/* Facebook: Visible on all devices */}
              <a
                href={BUSINESS_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-4 bg-[#18181b] border-2 border-zinc-800 hover:border-[#A855F7] shadow-[4px_4px_0px_#000000] hover:shadow-[4px_4px_0px_#A855F7] transition-all"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-[#1877F2] text-white border border-black shrink-0">
                      <Share2 size={20} />
                    </div>
                    <div>
                      <p className="font-extrabold text-white text-sm sm:text-base group-hover:text-[#A855F7] transition-colors">
                        Facebook
                      </p>
                      <p className="text-xs text-zinc-400">Nailz by Cataleya Oficial</p>
                    </div>
                  </div>
                  <ExternalLink size={16} className="text-zinc-500 group-hover:text-white transition-colors" />
                </div>
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
