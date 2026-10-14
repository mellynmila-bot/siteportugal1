import React, { useState, useEffect, useCallback } from 'react';
import { MapPin, Navigation, ShieldCheck, Lock, Sparkles, ExternalLink, ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';
import { STUDIO_PHOTOS, BUSINESS_INFO } from '../data/content';
import { SparkleIcon } from './SparkleIcon';

interface StudioSectionProps {
  t: any;
}

export const StudioSection: React.FC<StudioSectionProps> = ({ t }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Auto carousel cycling
  useEffect(() => {
    if (isModalOpen) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % STUDIO_PHOTOS.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isModalOpen]);

  const handlePrev = useCallback((e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCurrentSlide((prev) =>
      prev === 0 ? STUDIO_PHOTOS.length - 1 : prev - 1
    );
  }, []);

  const handleNext = useCallback((e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCurrentSlide((prev) => (prev + 1) % STUDIO_PHOTOS.length);
  }, []);

  // Keyboard navigation for expanded modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isModalOpen) return;
      if (e.key === 'Escape') setIsModalOpen(false);
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen, handlePrev, handleNext]);

  const featureIcons = [ShieldCheck, Lock, Sparkles, MapPin];

  return (
    <section id="estudio" className="py-20 sm:py-24 bg-[#0A0A0A] relative text-white border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#141414] border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-semibold uppercase tracking-widest">
            <SparkleIcon size={12} color="#D4AF37" />
            <span>{t.studioSection.kicker}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight font-display">
            {t.studioSection.title}
          </h2>

          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            {t.studioSection.subtitle}
          </p>
        </div>

        {/* Carousel Showcase for the 3 Studio Photos (Click to expand, no titles over photo) */}
        <div className="mb-16">
          <div className="relative max-w-4xl mx-auto bg-[#141414] p-3 border border-[#D4AF37]/40 shadow-2xl">
            
            {/* Slide Image Container */}
            <div
              onClick={() => setIsModalOpen(true)}
              className="relative aspect-[16/10] sm:aspect-[16/9] overflow-hidden bg-black cursor-zoom-in group select-none"
              title="Clica para ampliar a fotografia"
            >
              {STUDIO_PHOTOS.map((photo, index) => (
                <div
                  key={photo.id}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                  }`}
                >
                  <img
                    src={photo.url}
                    alt="Espaço Nailz by Cataleya em Pombal"
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              ))}

              {/* Expand badge icon overlay */}
              <div className="absolute top-3.5 right-3.5 z-20 px-3 py-1.5 bg-black/80 hover:bg-[#D4AF37] hover:text-black text-white border border-[#D4AF37]/50 shadow-md opacity-90 group-hover:opacity-100 transition-all flex items-center gap-1.5 text-xs font-mono font-medium">
                <Maximize2 size={14} />
                <span className="hidden sm:inline">Ampliar</span>
              </div>

              {/* Prev / Next Controls */}
              <button
                type="button"
                onClick={(e) => handlePrev(e)}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 z-20 p-2.5 sm:p-3 bg-black/80 hover:bg-[#D4AF37] hover:text-black text-white border border-[#D4AF37]/40 transition-colors cursor-pointer shadow-md"
                aria-label="Foto anterior"
              >
                <ChevronLeft size={20} />
              </button>

              <button
                type="button"
                onClick={(e) => handleNext(e)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 z-20 p-2.5 sm:p-3 bg-black/80 hover:bg-[#D4AF37] hover:text-black text-white border border-[#D4AF37]/40 transition-colors cursor-pointer shadow-md"
                aria-label="Foto seguinte"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Slide Navigation Dots / Indicators */}
            <div className="mt-3.5 flex items-center justify-between px-2 text-xs font-mono">
              <span className="text-zinc-400">
                Foto {currentSlide + 1} de {STUDIO_PHOTOS.length} • Clica para ampliar
              </span>

              <div className="flex gap-2">
                {STUDIO_PHOTOS.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-2 transition-all cursor-pointer ${
                      idx === currentSlide
                        ? 'w-7 bg-[#D4AF37]'
                        : 'w-2 bg-zinc-700 hover:bg-zinc-500'
                    }`}
                    aria-label={`Ir para foto ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {t.studioSection.features.map((feat: any, idx: number) => {
            const Icon = featureIcons[idx] || Sparkles;
            return (
              <div
                key={idx}
                className="bg-[#141414] p-7 border border-zinc-800 hover:border-[#D4AF37]/60 shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="p-3 bg-black text-[#D4AF37] border border-[#D4AF37]/30 inline-block shadow-sm">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-xl font-normal text-white font-display">
                    {feat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
                    {feat.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Integrated Google Maps Section */}
        <div className="bg-[#141414] border border-[#D4AF37]/30 shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Map Info Box */}
            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-[#111111] border-b lg:border-b-0 lg:border-r border-zinc-800">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-black border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-mono font-medium">
                  <MapPin size={12} />
                  <span>LOCALIZAÇÃO OFICIAL</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-normal text-white font-display">
                  Vem Visitar-nos em Pombal
                </h3>

                <div className="space-y-2 text-sm text-zinc-300">
                  <p className="font-semibold text-white flex items-center gap-2">
                    <MapPin size={16} className="text-[#D4AF37]" />
                    <span>{BUSINESS_INFO.address}</span>
                  </p>
                  <p className="text-xs text-zinc-400">
                    Distrito de Leiria, Portugal • Zona de fácil estacionamento
                  </p>
                </div>
              </div>

              <div className="pt-6">
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="luxury-btn-gold w-full flex items-center justify-center gap-2.5 py-3.5 px-4 text-xs font-bold uppercase tracking-widest text-center"
                >
                  <Navigation size={16} />
                  <span>{t.studioSection.openMapsBtn}</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>

            {/* Interactive Embedded Google Map */}
            <div className="lg:col-span-7 h-80 sm:h-96 lg:h-auto min-h-[320px] bg-zinc-900 relative">
              <iframe
                title="Localização Nailz by Cataleya no Google Maps"
                src={`https://maps.google.com/maps?q=Nailz+by+Cataleya+Pombal+Portugal&t=&z=16&ie=UTF8&iwloc=&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '320px' }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full filter invert-[90%] hue-rotate-[180deg] contrast-[95%]"
              />
              
              {/* Corner Watermark Card */}
              <div className="absolute top-3 right-3 bg-black/90 border border-zinc-700 px-3 py-1.5 text-xs text-white flex items-center gap-2 pointer-events-none shadow-md">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="font-medium font-mono text-zinc-300">Pombal, Portugal</span>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Expanded Lightbox Modal for Studio Photo */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative max-w-5xl w-full flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Close Bar */}
            <div className="w-full flex items-center justify-between pb-3 px-1 text-white">
              <span className="px-3 py-1 bg-[#141414] border border-[#D4AF37]/50 text-xs font-mono font-bold text-[#D4AF37]">
                Espaço Nailz by Cataleya • Foto {currentSlide + 1} / {STUDIO_PHOTOS.length}
              </span>

              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="p-2 text-zinc-300 hover:text-[#D4AF37] flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest cursor-pointer transition-colors"
                aria-label="Fechar"
              >
                <X size={20} />
                <span className="hidden sm:inline">ESC</span>
              </button>
            </div>

            {/* Media Presentation Box */}
            <div className="relative w-full max-h-[82vh] bg-black border border-[#D4AF37]/50 shadow-2xl flex items-center justify-center overflow-hidden">
              <img
                src={STUDIO_PHOTOS[currentSlide].url}
                alt="Espaço Nailz by Cataleya Ampliado"
                decoding="async"
                className="max-h-[80vh] w-auto max-w-full object-contain mx-auto"
                referrerPolicy="no-referrer"
              />

              {/* Prev Arrow */}
              <button
                type="button"
                onClick={(e) => handlePrev(e)}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 bg-black/85 hover:bg-[#D4AF37] hover:text-black text-white border border-[#D4AF37]/40 transition-colors cursor-pointer shadow-md"
                aria-label="Foto anterior"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Next Arrow */}
              <button
                type="button"
                onClick={(e) => handleNext(e)}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 bg-black/85 hover:bg-[#D4AF37] hover:text-black text-white border border-[#D4AF37]/40 transition-colors cursor-pointer shadow-md"
                aria-label="Foto seguinte"
              >
                <ChevronRight size={24} />
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
