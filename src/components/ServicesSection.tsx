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
    <section id="servicos" className="py-20 sm:py-24 bg-white text-stone-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-amber-50 border border-[#D4AF37]/50 text-[#B38715] text-xs font-bold uppercase tracking-widest">
            <SparkleIcon size={12} color="#B38715" />
            <span>{t.servicesSection.kicker}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-stone-950 tracking-tight font-display">
            {t.servicesSection.title}
          </h2>

          <p className="text-sm sm:text-base text-stone-600 max-w-2xl mx-auto leading-relaxed">
            {t.servicesSection.subtitle}
          </p>
        </div>

        {/* 4 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
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
                className="group bg-white border border-stone-200 hover:border-[#D4AF37] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                <div>
                  {/* Image container with navigation arrows (enlarged for high visual detail) */}
                  <div className="relative aspect-[4/3] min-h-[300px] sm:min-h-[380px] w-full overflow-hidden bg-stone-100 border-b border-stone-200 select-none">
                    <img
                      src={currentImg}
                      alt={translatedService.name}
                      decoding="async"
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />

                    {/* Left arrow if more than 1 image */}
                    {images.length > 1 && (
                      <button
                        type="button"
                        onClick={(e) => handlePrevImage(service.id, images.length, e)}
                        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2.5 sm:p-3 bg-black/80 hover:bg-[#D4AF37] hover:text-black text-white border border-white/40 transition-colors shadow-md cursor-pointer"
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
                        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2.5 sm:p-3 bg-black/80 hover:bg-[#D4AF37] hover:text-black text-white border border-white/40 transition-colors shadow-md cursor-pointer"
                        aria-label="Ver imagem seguinte"
                      >
                        <ChevronRight size={18} />
                      </button>
                    )}

                    {/* Tag badge */}
                    <div className="absolute top-3.5 left-3.5 bg-black/85 border border-[#D4AF37]/80 text-[#D4AF37] px-3 py-1 text-xs font-semibold tracking-wider uppercase flex items-center gap-1.5 shadow-sm pointer-events-none">
                      <SparkleIcon size={11} color="#D4AF37" />
                      <span>{translatedService.tag}</span>
                    </div>

                    {/* Image dots / counter */}
                    {images.length > 1 && (
                      <div className="absolute bottom-3.5 inset-x-0 flex items-center justify-center gap-1.5 z-10 pointer-events-none">
                        {images.map((_, dotIdx) => (
                          <span
                            key={dotIdx}
                            className={`h-1.5 rounded-full transition-all ${
                              dotIdx === currentIndex
                                ? 'w-6 bg-[#D4AF37] shadow-sm'
                                : 'w-2 bg-white/70'
                            }`}
                          />
                        ))}
                      </div>
                    )}

                    {/* Popular indicator if true */}
                    {service.popular && (
                      <div className="absolute top-3.5 right-3.5 bg-gradient-to-r from-[#DFBA73] to-[#C5A880] text-[#0A0A0A] px-3 py-1 text-xs font-bold uppercase tracking-wider shadow-sm pointer-events-none">
                        Destaque
                      </div>
                    )}
                  </div>

                  {/* Card Content */}
                  <div className="p-6 sm:p-8 space-y-3">
                    <h3 className="text-2xl font-normal text-stone-950 font-display">
                      {translatedService.name}
                    </h3>

                    <p className="text-sm text-stone-600 leading-relaxed font-normal">
                      {translatedService.desc}
                    </p>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-6 sm:p-8 pt-0">
                  <button
                    type="button"
                    onClick={() => onSelectService(service.id)}
                    className="luxury-btn-dark w-full flex items-center justify-center gap-2.5 py-3.5 px-4 text-xs font-bold uppercase tracking-widest cursor-pointer"
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
        <div className="mt-14 p-6 sm:p-8 bg-stone-50 border border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-amber-100 text-[#B38715] border border-[#D4AF37]/40 shrink-0">
              <Check size={20} />
            </div>
            <div>
              <p className="text-sm font-bold text-stone-900">Não tens a certeza de qual serviço escolher?</p>
              <p className="text-xs text-stone-600 mt-0.5">Podes enviar a tua referência de unhas ou pedir orientação à Cataleya no WhatsApp!</p>
            </div>
          </div>
          <a
            href="#agendamento"
            className="luxury-btn-gold shrink-0 px-6 py-3 text-xs font-bold uppercase tracking-widest text-center"
          >
            Fazer Pergunta Rápida
          </a>
        </div>

      </div>
    </section>
  );
};
