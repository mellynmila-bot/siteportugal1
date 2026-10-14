import React, { useState } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { FAQ_ITEMS } from '../data/content';
import { SparkleIcon } from './SparkleIcon';

interface FaqSectionProps {
  t: any;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ t }) => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleAccordion = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-20 sm:py-24 bg-[#0A0A0A] relative text-white border-t border-zinc-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#141414] border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-semibold uppercase tracking-widest">
            <SparkleIcon size={12} color="#D4AF37" />
            <span>{t.faqSection.kicker}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight font-display">
            {t.faqSection.title}
          </h2>

          <p className="text-base text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            {t.faqSection.subtitle}
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="bg-[#141414] border border-zinc-800 hover:border-[#D4AF37]/50 transition-all duration-300 shadow-md"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(item.id)}
                  className="w-full text-left p-6 flex items-center justify-between gap-4 font-normal text-white hover:text-[#D4AF37] transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-3.5">
                    <span className="font-mono text-xs font-bold text-[#D4AF37]">0{idx + 1}.</span>
                    <span className="text-base sm:text-lg font-normal font-display">
                      {item.question}
                    </span>
                  </div>
                  <ChevronDown
                    size={20}
                    className={`shrink-0 text-zinc-400 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#D4AF37]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-xs sm:text-sm text-zinc-300 leading-relaxed border-t border-zinc-800/60 font-sans">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support CTA */}
        <div className="mt-14 text-center p-8 bg-[#141414] border border-zinc-800">
          <p className="text-sm font-semibold text-white mb-3">Ainda tens alguma questão específica sobre o teu caso?</p>
          <a
            href="#agendamento"
            className="luxury-btn-gold inline-flex items-center gap-2.5 px-6 py-3 text-xs font-bold uppercase tracking-widest"
          >
            <MessageCircle size={15} />
            <span>Falar com a Cataleya</span>
          </a>
        </div>

      </div>
    </section>
  );
};
