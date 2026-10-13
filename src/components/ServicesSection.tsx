import React, { useState } from 'react';
import { ArrowRight, Sparkles, Check, ChevronLeft, ChevronRight } from 'lucide-react';
import { SERVICES } from '../data/content';
import { SparkleIcon } from './SparkleIcon';

interface ServicesSectionProps {
  t: any;
  onSelectService: (serviceId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  t,
  onSelectService,
}) => {
  // Store active image index for each service
  const [activeImageIndices, setActiveImageIndices] = useState<Record<string, number>>({
    classic: 0,
    advanced: 0,
    art3d: 0,
    pedicure: 0,
  });

  const handlePrevImage = (serviceId: string, total: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImageIndices((prev) => ({
      ...prev,
      [serviceId]: (prev[serviceId] || 0) === 0 ? total - 1 : (prev[serviceId] || 0) - 1,
    }));
  };

  const handleNextImage = (serviceId: string, total: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImageIndices((prev) => ({
      ...prev,
      [serviceId]: ((prev[serviceId] || 0) + 1) % total,
    }));
  };

  return (
    <section id="servicos" className="py-16 sm:py-20 bg-[#121212] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-900 border border-zinc-700 text-[#A855F7] text-xs font-bold uppercase tracking-widest shadow-[2px_2px_0px_#A855F7]">
            <SparkleIcon size={12} className="text-[#A855F7]" />
            <span>{t.servicesSection.kicker}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display">
            {t.servicesSection.title}
          </h2>

          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            {t.servicesSection.subtitle}
          </p>
        </div>

        {/* 4 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service) => {
            const translatedService = t.servicesSection.items[service.id] || {
              name: service.name,
              tag: service.tag,
              desc: service.description,
            };

            const images = service.images && service.images.length > 0 ? service.images : [];
            const currentIndex = activeImageIndices[service.id] || 0;
            const currentImg = images[currentIndex] || images[0];

            return (
              <div
                key={service.id}
                className="group bg-[#18181b] border-2 border-zinc-800 hover:border-[#A855F7] shadow-[6px_6px_0px_#000000] hover:shadow-[6px_6px_0px_#A855F7] transition-all duration-200 flex flex-col justify-between overflow-hidden"
              >
                <div>
                  {/* Image container with navigation arrows */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-zinc-950 border-b-2 border-zinc-800 select-none">
                    <img
                      src={currentImg}
                      alt={translatedService.name}
                      decoding="async"
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />

                    {/* Left arrow if more than 1 image */}
                    {images.length > 1 && (
                      <button
                        type="button"
                        onClick={(e) => handlePrevImage(service.id, images.length, e)}
                        className="absolute left-2.5 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-2.5 bg-black/85 hover:bg-[#A855F7] text-white border-2 border-white shadow-[2px_2px_0px_#000000] transition-colors"
                        aria-label="Ver imagem anterior"
                      >
                        <ChevronLeft size={18} />
                      </button>
                    )}

                    {/* Right arrow if more than 1 image */}
                    {images.length > 1 && (
                      <button
                        type="button"
                        onClick={(e) => handleNextImage(service.id, images.length, e)}
                        className="absolute right-2.5 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-2.5 bg-black/85 hover:bg-[#A855F7] text-white border-2 border-white shadow-[2px_2px_0px_#000000] transition-colors"
                        aria-label="Ver imagem seguinte"
                      >
                        <ChevronRight size={18} />
                      </button>
                    )}

                    {/* Tag badge */}
                    <div className="absolute top-3 left-3 bg-black/90 border border-[#A855F7] text-white px-2.5 py-1 text-xs font-bold tracking-wider uppercase flex items-center gap-1.5 shadow-[2px_2px_0px_#A855F7] pointer-events-none">
                      <Sparkles size={12} className="text-[#A855F7]" />
                      <span>{translatedService.tag}</span>
                    </div>

                    {/* Image dots / counter */}
                    {images.length > 1 && (
                      <div className="absolute bottom-3 inset-x-0 flex items-center justify-center gap-1.5 z-10 pointer-events-none">
                        {images.map((_, dotIdx) => (
                          <span
                            key={dotIdx}
                            className={`h-2 rounded-full transition-all ${
                              dotIdx === currentIndex
                                ? 'w-6 bg-[#A855F7] shadow-[0px_0px_4px_#A855F7]'
                                : 'w-2 bg-white/70'
                            }`}
                          />
                        ))}
                      </div>
                    )}

                    {/* Popular indicator if true */}
                    {service.popular && (
                      <div className="absolute top-3 right-3 bg-[#A855F7] text-white px-2.5 py-1 text-xs font-extrabold uppercase tracking-wider border border-black shadow-[2px_2px_0px_#000000] pointer-events-none">
                        Destaque
                      </div>
                    )}
                  </div>

                  {/* Card Content (Duration estimate removed as requested) */}
                  <div className="p-6 space-y-3">
                    <h3 className="text-xl sm:text-2xl font-extrabold text-white font-display">
                      {translatedService.name}
                    </h3>

                    <p className="text-sm text-zinc-300 leading-relaxed">
                      {translatedService.desc}
                    </p>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-6 pt-2">
                  <button
                    type="button"
                    onClick={() => onSelectService(service.id)}
                    className="neo-btn-purple w-full flex items-center justify-center gap-2 py-3 px-4 text-xs sm:text-sm font-extrabold uppercase tracking-wider cursor-pointer"
                  >
                    <span>{t.servicesSection.bookThis}</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Helper Bar */}
        <div className="mt-12 p-6 bg-zinc-900 border-2 border-dashed border-zinc-700 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-[#A855F7] text-white border border-black shrink-0">
              <Check size={20} />
            </div>
            <div>
              <p className="text-sm font-bold text-white">Não tens a certeza de qual serviço escolher?</p>
              <p className="text-xs text-zinc-400">Podes enviar a tua referência de unhas ou pedir orientação à Cataleya no WhatsApp!</p>
            </div>
          </div>
          <a
            href="#agendamento"
            className="neo-btn-black shrink-0 px-4 py-2.5 text-xs font-extrabold uppercase tracking-wider text-center"
          >
            Fazer Pergunta Rápida
          </a>
        </div>

      </div>
    </section>
  );
};
