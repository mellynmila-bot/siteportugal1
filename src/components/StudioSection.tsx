import React, { useState, useEffect } from 'react';
import { MapPin, Navigation, ShieldCheck, Lock, Sparkles, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { STUDIO_PHOTOS, BUSINESS_INFO } from '../data/content';
import { SparkleIcon } from './SparkleIcon';

interface StudioSectionProps {
  t: any;
}

export const StudioSection: React.FC<StudioSectionProps> = ({ t }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto carousel cycling
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % STUDIO_PHOTOS.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? STUDIO_PHOTOS.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % STUDIO_PHOTOS.length);
  };

  const featureIcons = [ShieldCheck, Lock, Sparkles, MapPin];

  return (
    <section id="estudio" className="py-20 bg-[#0d0d0d] relative bg-checkered-dark border-t-2 border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-900 border border-zinc-700 text-[#A855F7] text-xs font-bold uppercase tracking-widest shadow-[2px_2px_0px_#A855F7]">
            <SparkleIcon size={12} className="text-[#A855F7]" />
            <span>{t.studioSection.kicker}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display">
            {t.studioSection.title}
          </h2>

          <p className="text-base text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            {t.studioSection.subtitle}
          </p>
        </div>

        {/* Carousel Showcase for the 3 Studio Photos */}
        <div className="mb-16">
          <div className="relative max-w-4xl mx-auto bg-[#18181b] p-3 sm:p-4 border-4 border-white shadow-[8px_8px_0px_#A855F7]">
            
            {/* Slide Image Container */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] overflow-hidden bg-black border-2 border-black">
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
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              ))}

              {/* Prev / Next Controls */}
              <button
                type="button"
                onClick={handlePrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2.5 bg-black/80 hover:bg-[#A855F7] text-white border-2 border-white shadow-[2px_2px_0px_#000000] transition-colors"
                aria-label="Foto anterior"
              >
                <ChevronLeft size={20} />
              </button>

              <button
                type="button"
                onClick={handleNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2.5 bg-black/80 hover:bg-[#A855F7] text-white border-2 border-white shadow-[2px_2px_0px_#000000] transition-colors"
                aria-label="Foto seguinte"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Slide Navigation Dots / Indicators */}
            <div className="mt-3 flex items-center justify-between px-2 text-xs font-mono">
              <span className="text-zinc-400">
                Foto {currentSlide + 1} de {STUDIO_PHOTOS.length}
              </span>

              <div className="flex gap-2">
                {STUDIO_PHOTOS.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-2.5 transition-all ${
                      idx === currentSlide
                        ? 'w-8 bg-[#A855F7] border border-black'
                        : 'w-2.5 bg-zinc-700 hover:bg-zinc-500'
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
                className="bg-[#18181b] p-6 border-2 border-zinc-800 hover:border-[#A855F7] shadow-[4px_4px_0px_#000000] transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="p-3 bg-zinc-900 text-[#A855F7] border border-zinc-700 inline-block shadow-[2px_2px_0px_#A855F7]">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-lg font-extrabold text-white font-display">
                    {feat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Integrated Google Maps Section */}
        <div className="bg-[#18181b] border-4 border-white shadow-[8px_8px_0px_#000000] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Map Info Box */}
            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-zinc-950 border-b-2 lg:border-b-0 lg:border-r-2 border-zinc-800">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-zinc-900 border border-zinc-700 text-[#A855F7] text-xs font-mono font-bold">
                  <MapPin size={12} />
                  <span>LOCALIZAÇÃO OFICIAL</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                  Vem Visitar-nos em Pombal
                </h3>

                <div className="space-y-2 text-sm text-zinc-300">
                  <p className="font-bold text-white flex items-center gap-2">
                    <MapPin size={16} className="text-[#A855F7]" />
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
                  className="neo-btn-purple w-full flex items-center justify-center gap-2 py-3.5 px-4 text-xs sm:text-sm font-extrabold uppercase tracking-wide text-center"
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
              <div className="absolute top-3 right-3 bg-black/90 border border-zinc-700 px-3 py-1.5 text-xs text-white flex items-center gap-2 pointer-events-none shadow-[2px_2px_0px_#000000]">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="font-bold font-mono">Pombal, Portugal</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
