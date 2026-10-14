import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, X, Maximize2 } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/content';
import { SparkleIcon } from './SparkleIcon';

interface GallerySectionProps {
  t: any;
  onSelectArtStyle?: (artTitle: string) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ t }) => {
  const [activeModalIndex, setActiveModalIndex] = useState<number | null>(null);

  const handleOpenModal = (index: number) => {
    setActiveModalIndex(index);
  };

  const handleCloseModal = () => {
    setActiveModalIndex(null);
  };

  const handlePrev = useCallback(() => {
    if (activeModalIndex === null) return;
    setActiveModalIndex((prev) =>
      prev === 0 ? GALLERY_ITEMS.length - 1 : (prev as number) - 1
    );
  }, [activeModalIndex]);

  const handleNext = useCallback(() => {
    if (activeModalIndex === null) return;
    setActiveModalIndex((prev) =>
      prev === GALLERY_ITEMS.length - 1 ? 0 : (prev as number) + 1
    );
  }, [activeModalIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeModalIndex === null) return;
      if (e.key === 'Escape') handleCloseModal();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeModalIndex, handlePrev, handleNext]);

  const currentItem = activeModalIndex !== null ? GALLERY_ITEMS[activeModalIndex] : null;

  return (
    <section id="galeria" className="py-20 sm:py-24 bg-[#0A0A0A] relative text-white border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header (Clean, only "Todas as Artes", no filter badges) */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#141414] border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-semibold uppercase tracking-widest">
            <SparkleIcon size={12} color="#D4AF37" />
            <span>{t.gallerySection.kicker}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight font-display">
            {t.gallerySection.title}
          </h2>

          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            {t.gallerySection.subtitle}
          </p>
        </div>

        {/* Gallery Grid (No text labels, just pure visuals with luxury gold borders) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {GALLERY_ITEMS.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => handleOpenModal(idx)}
              className="group cursor-pointer bg-[#141414] p-1.5 border border-zinc-800 hover:border-[#D4AF37] transition-all duration-300 shadow-lg hover:shadow-[0_8px_30px_rgba(212,175,55,0.15)]"
            >
              <div className="relative aspect-square overflow-hidden bg-zinc-950">
                <img
                  src={item.image}
                  alt={`Nail Art Cataleya ${idx + 1}`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />

                {/* Subtle hover icon */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-2">
                  <div className="p-3 bg-gradient-to-r from-[#DFBA73] to-[#C5A880] text-[#0A0A0A] border border-[#E5C378] shadow-md">
                    <Maximize2 size={18} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Fullscreen Lightbox Modal (ONLY the photo and clean navigation arrows/close button) */}
      {currentItem && activeModalIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
          onClick={handleCloseModal}
        >
          <div
            className="relative max-w-4xl w-full flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Close Button & Counter */}
            <div className="w-full flex items-center justify-between pb-3 px-1 text-white">
              <span className="px-3 py-1 bg-[#141414] border border-[#D4AF37]/50 text-xs font-mono font-bold text-[#D4AF37]">
                {activeModalIndex + 1} / {GALLERY_ITEMS.length}
              </span>

              <button
                type="button"
                onClick={handleCloseModal}
                className="p-2 text-zinc-300 hover:text-[#D4AF37] flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest cursor-pointer transition-colors"
                aria-label="Fechar"
              >
                <X size={20} />
                <span className="hidden sm:inline">ESC</span>
              </button>
            </div>

            {/* Media Presentation Box (ONLY Photo) */}
            <div className="relative w-full max-h-[82vh] bg-black border border-[#D4AF37]/50 shadow-2xl flex items-center justify-center overflow-hidden">
              <img
                src={currentItem.image}
                alt={`Nail Art Cataleya Ampliada ${activeModalIndex + 1}`}
                decoding="async"
                className="max-h-[80vh] w-auto max-w-full object-contain mx-auto"
                referrerPolicy="no-referrer"
              />

              {/* Prev Arrow */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 bg-black/85 hover:bg-[#D4AF37] hover:text-black text-white border border-[#D4AF37]/40 transition-colors cursor-pointer shadow-md"
                aria-label="Imagem anterior"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Next Arrow */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 bg-black/85 hover:bg-[#D4AF37] hover:text-black text-white border border-[#D4AF37]/40 transition-colors cursor-pointer shadow-md"
                aria-label="Imagem seguinte"
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
