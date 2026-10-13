import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
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
    <section id="faq" className="py-20 bg-[#0d0d0d] relative bg-checkered-dark border-t-2 border-zinc-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-900 border border-zinc-700 text-[#A855F7] text-xs font-bold uppercase tracking-widest shadow-[2px_2px_0px_#A855F7]">
            <SparkleIcon size={12} className="text-[#A855F7]" />
            <span>{t.faqSection.kicker}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display">
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
                className="bg-[#18181b] border-2 border-zinc-800 transition-all shadow-[4px_4px_0px_#000000]"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(item.id)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-white hover:text-[#A855F7] transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-[#A855F7]">0{idx + 1}.</span>
                    <span className="text-sm sm:text-base font-extrabold font-display">
                      {item.question}
                    </span>
                  </div>
                  <ChevronDown
                    size={20}
                    className={`shrink-0 text-zinc-400 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#A855F7]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-zinc-300 leading-relaxed border-t border-zinc-800/60 font-sans">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support CTA */}
        <div className="mt-12 text-center p-6 bg-zinc-900 border-2 border-zinc-800">
          <p className="text-sm font-bold text-white mb-2">Ainda tens alguma questão específica sobre o teu caso?</p>
          <a
            href="#agendamento"
            className="neo-btn-purple inline-flex items-center gap-2 px-5 py-2.5 text-xs font-extrabold uppercase tracking-wider"
          >
            <MessageCircle size={15} />
            <span>Falar com a Cataleya</span>
          </a>
        </div>

      </div>
    </section>
  );
};
