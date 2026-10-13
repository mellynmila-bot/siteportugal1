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
    <section id="galeria" className="py-16 sm:py-20 bg-[#0d0d0d] relative bg-checkered-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header (Clean, only "Todas as Artes", no filter badges) */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-900 border border-zinc-700 text-[#A855F7] text-xs font-bold uppercase tracking-widest shadow-[2px_2px_0px_#A855F7]">
            <SparkleIcon size={12} className="text-[#A855F7]" />
            <span>{t.gallerySection.kicker}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display">
            {t.gallerySection.title}
          </h2>

          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            {t.gallerySection.subtitle}
          </p>
        </div>

        {/* Gallery Grid (No text labels, just pure visuals with sticker cut neo-borders) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5">
          {GALLERY_ITEMS.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => handleOpenModal(idx)}
              className="group cursor-pointer bg-[#18181b] p-1.5 sm:p-2 border-2 sm:border-3 border-zinc-700 hover:border-white shadow-[4px_4px_0px_#000000] hover:shadow-[4px_4px_0px_#A855F7] transition-all duration-200"
            >
              <div className="relative aspect-square overflow-hidden bg-zinc-950 border border-black">
                <img
                  src={item.image}
                  alt={`Nail Art Cataleya ${idx + 1}`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />

                {/* Subtle hover icon */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center p-2">
                  <div className="p-2.5 bg-[#A855F7] text-white border-2 border-black shadow-[2px_2px_0px_#000000]">
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
              <span className="px-2.5 py-1 bg-zinc-900 border border-zinc-700 text-xs font-mono font-bold text-[#A855F7]">
                {activeModalIndex + 1} / {GALLERY_ITEMS.length}
              </span>

              <button
                type="button"
                onClick={handleCloseModal}
                className="neo-btn-black p-2 text-white hover:text-[#A855F7] flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider cursor-pointer"
                aria-label="Fechar"
              >
                <X size={20} />
                <span className="hidden sm:inline">ESC</span>
              </button>
            </div>

            {/* Media Presentation Box (ONLY Photo) */}
            <div className="relative w-full max-h-[82vh] bg-black border-4 border-white shadow-[8px_8px_0px_#A855F7] flex items-center justify-center overflow-hidden">
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
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 bg-black/85 hover:bg-[#A855F7] text-white border-2 border-white shadow-[2px_2px_0px_#000000] transition-colors cursor-pointer"
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
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 bg-black/85 hover:bg-[#A855F7] text-white border-2 border-white shadow-[2px_2px_0px_#000000] transition-colors cursor-pointer"
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
