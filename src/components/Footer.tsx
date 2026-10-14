import React from 'react';
import { Instagram, Video, Share2, MapPin, Phone, Mail, ExternalLink } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';
import { SparkleIcon } from './SparkleIcon';

interface FooterProps {
  t: any;
  onOpenLegal: (type: 'privacy' | 'terms' | 'ral') => void;
}

export const Footer: React.FC<FooterProps> = ({ t, onOpenLegal }) => {
  return (
    <footer className="bg-[#09090b] text-zinc-300 border-t-4 border-black relative">
      
      {/* Upper Footer: Brand, Navigation & Contact */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Brand Info & Mission (Cols 1-5) */}
          <div className="lg:col-span-5 space-y-4">
            <a href="#" className="flex items-center gap-2 text-2xl font-extrabold text-white font-display">
              <span>Nailz by Cataleya</span>
              <SparkleIcon size={16} className="text-[#A855F7]" />
            </a>

            <p className="text-sm text-zinc-400 max-w-sm leading-relaxed">
              {t.footer.brandDesc}
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={BUSINESS_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-zinc-900 hover:bg-[#A855F7] text-white border border-zinc-700 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>

              <a
                href={BUSINESS_INFO.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-zinc-900 hover:bg-[#A855F7] text-white border border-zinc-700 transition-colors"
                aria-label="TikTok"
              >
                <Video size={18} />
              </a>

              <a
                href={BUSINESS_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-zinc-900 hover:bg-[#A855F7] text-white border border-zinc-700 transition-colors"
                aria-label="Facebook"
              >
                <Share2 size={18} />
              </a>
            </div>
          </div>

          {/* Quick Navigation (Cols 6-8) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-white border-b border-zinc-800 pb-2">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2 text-sm font-medium">
              <li>
                <a href="#servicos" className="hover:text-[#A855F7] transition-colors">
                  {t.nav.services}
                </a>
              </li>
              <li>
                <a href="#galeria" className="hover:text-[#A855F7] transition-colors">
                  {t.nav.gallery}
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-[#A855F7] transition-colors">
                  {t.nav.about}
                </a>
              </li>
              <li>
                <a href="#estudio" className="hover:text-[#A855F7] transition-colors">
                  {t.nav.studio}
                </a>
              </li>
              <li>
                <a href="#avaliacoes" className="hover:text-[#A855F7] transition-colors">
                  {t.nav.reviews}
                </a>
              </li>
              <li>
                <a href="#agendamento" className="hover:text-[#A855F7] transition-colors">
                  {t.nav.booking}
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#A855F7] transition-colors">
                  {t.nav.faq}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details (Cols 9-12) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-white border-b border-zinc-800 pb-2">
              Contacto & Localização
            </h4>

            <div className="space-y-2.5 text-xs text-zinc-300">
              <p className="flex items-center gap-2">
                <MapPin size={15} className="text-[#A855F7] shrink-0" />
                <span>{BUSINESS_INFO.address}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone size={15} className="text-[#A855F7] shrink-0" />
                <a href={`tel:${BUSINESS_INFO.whatsappNumber}`} className="hover:text-white font-bold">
                  {BUSINESS_INFO.phone}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail size={15} className="text-[#A855F7] shrink-0" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-white">
                  {BUSINESS_INFO.email}
                </a>
              </p>
            </div>
          </div>

        </div>

        {/* Discrete Legal Links Bar & Livro de Reclamações */}
        <div className="mt-12 pt-6 border-t border-zinc-800/80 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          
          {/* Legal Links + Complaints Book */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-4 gap-y-2 text-[12px]">
            <button
              type="button"
              onClick={() => onOpenLegal('privacy')}
              className="hover:text-zinc-300 underline underline-offset-4 cursor-pointer"
            >
              {t.footer.legalLinks.privacy}
            </button>
            <span className="text-zinc-700">•</span>
            <button
              type="button"
              onClick={() => onOpenLegal('terms')}
              className="hover:text-zinc-300 underline underline-offset-4 cursor-pointer"
            >
              {t.footer.legalLinks.terms}
            </button>
            <span className="text-zinc-700">•</span>
            <button
              type="button"
              onClick={() => onOpenLegal('ral')}
              className="hover:text-zinc-300 underline underline-offset-4 cursor-pointer"
            >
              {t.footer.legalLinks.ral}
            </button>
            <span className="text-zinc-700">•</span>
            <a
              href="https://www.livroreclamacoes.pt"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-300 underline underline-offset-4 inline-flex items-center gap-1 cursor-pointer"
            >
              <span>{t.footer.complaintBookText}</span>
              <ExternalLink size={11} />
            </a>
          </div>

          {/* Copyright */}
          <div className="flex items-center gap-2 text-[11px] text-zinc-500 font-mono">
            <span>© 2026 Nailz by Cataleya. Pombal, Portugal.</span>
            <span>💋</span>
          </div>

        </div>

      </div>

    </footer>
  );
};
