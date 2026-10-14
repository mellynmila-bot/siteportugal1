import React, { useState, useEffect } from 'react';
import { MessageCircle, ArrowUp } from 'lucide-react';

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
          className="pointer-events-auto p-2.5 bg-[#141414]/90 text-white border border-[#D4AF37]/50 hover:bg-[#D4AF37] hover:text-black transition-all shadow-lg cursor-pointer"
          aria-label="Voltar ao topo"
        >
          <ArrowUp size={18} />
        </button>
      )}

      {/* Floating WhatsApp Quick Link */}
      <a
        href="#agendamento"
        className="pointer-events-auto luxury-btn-gold flex items-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-widest shadow-xl group cursor-pointer"
        title="Agendar no WhatsApp"
      >
        <MessageCircle size={17} className="text-[#0A0A0A] group-hover:scale-110 transition-transform" />
        <span className="hidden sm:inline">Agendar no WhatsApp</span>
        <span className="sm:hidden">Agendar</span>
      </a>

    </div>
  );
};
