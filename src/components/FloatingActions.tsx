import React, { useState, useEffect } from 'react';
import { MessageCircle, ArrowUp } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

export const FloatingActions: React.FC = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 pointer-events-none">
      
      {/* Scroll to top button */}
      {showTopBtn && (
        <button
          type="button"
          onClick={scrollToTop}
          className="pointer-events-auto p-2.5 bg-zinc-900/90 text-white border-2 border-zinc-700 hover:border-[#A855F7] shadow-[3px_3px_0px_#000000] hover:shadow-[3px_3px_0px_#A855F7] transition-all"
          aria-label="Voltar ao topo"
        >
          <ArrowUp size={18} />
        </button>
      )}

      {/* Floating WhatsApp Quick Link */}
      <a
        href="#agendamento"
        className="pointer-events-auto neo-btn-purple flex items-center gap-2 px-4 py-3 text-xs sm:text-sm font-extrabold uppercase tracking-wider shadow-[4px_4px_0px_#000000] group"
        title="Agendar no WhatsApp"
      >
        <MessageCircle size={18} className="text-white group-hover:scale-110 transition-transform" />
        <span className="hidden sm:inline">Agendar no WhatsApp</span>
        <span className="sm:hidden">Agendar</span>
      </a>

    </div>
  );
};
