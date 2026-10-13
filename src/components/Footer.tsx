import React from 'react';
import { Instagram, Video, Share2, MapPin, Phone, Mail, Clock, ExternalLink, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';
import { SparkleIcon } from './SparkleIcon';

interface FooterProps {
  t: any;
  onOpenLegal: (type: 'privacy' | 'terms' | 'ral') => void;
}

export const Footer: React.FC<FooterProps> = ({ t, onOpenLegal }) => {
  return (
    <footer className="bg-[#09090b] text-zinc-300 border-t-4 border-black relative">
      
      {/* Upper Footer: Brand, Navigation & Hours */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
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

          {/* Contact & Location (Cols 9-12) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-white border-b border-zinc-800 pb-2">
              Contacto & Localização
            </h4>

            <div className="space-y-2 text-xs text-zinc-300">
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
            </div>
          </div>

        </div>

        {/* Portugal Mandatory Legal Section */}
        <div className="mt-14 pt-8 border-t-2 border-zinc-800/80">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start bg-zinc-950 p-6 border-2 border-zinc-800">
            
            {/* Legal Identification Details (Required in Portugal) */}
            <div className="lg:col-span-8 space-y-3">
              <h5 className="text-xs font-mono font-bold uppercase tracking-widest text-[#A855F7]">
                {t.footer.legalTitle}
              </h5>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-400 font-sans">
                <p>
                  <strong className="text-zinc-300">Firma / Titular:</strong> [Inserir Nome Completo / Nome Comercial]
                </p>
                <p>
                  <strong className="text-zinc-300">NIF:</strong> [000.000.000]
                </p>
                <p>
                  <strong className="text-zinc-300">Morada:</strong> R. Principal, 3100-378 Pombal, Portugal
                </p>
                <p>
                  <strong className="text-zinc-300">Contacto:</strong> +351 910 850 882 | nailzbycataleya@gmail.com
                </p>
              </div>

              {/* Smaller Legal Links */}
              <div className="flex flex-wrap items-center gap-4 pt-2 text-[11px] text-zinc-500">
                <button
                  type="button"
                  onClick={() => onOpenLegal('privacy')}
                  className="hover:text-zinc-300 underline underline-offset-4"
                >
                  {t.footer.legalLinks.privacy}
                </button>
                <span>•</span>
                <button
                  type="button"
                  onClick={() => onOpenLegal('terms')}
                  className="hover:text-zinc-300 underline underline-offset-4"
                >
                  {t.footer.legalLinks.terms}
                </button>
                <span>•</span>
                <button
                  type="button"
                  onClick={() => onOpenLegal('ral')}
                  className="hover:text-zinc-300 underline underline-offset-4"
                >
                  {t.footer.legalLinks.ral}
                </button>
              </div>
            </div>

            {/* Official Complaints Book Seal / Box (Obrigatório por Lei em Portugal) */}
            <div className="lg:col-span-4">
              <a
                href="https://www.livroreclamacoes.pt"
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-4 bg-zinc-900 border-2 border-zinc-700 hover:border-red-500/80 shadow-[4px_4px_0px_#000000] transition-all"
                title="Aceder ao Livro de Reclamações Eletrónico Oficial"
              >
                <div className="flex items-center gap-3">
                  {/* Official badge emulation */}
                  <div className="w-10 h-10 bg-red-600 border border-white text-white font-extrabold flex items-center justify-center text-center text-[10px] leading-tight shrink-0 shadow-[2px_2px_0px_#000000]">
                    LRE
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-xs font-extrabold text-white group-hover:text-red-400 transition-colors uppercase tracking-wider flex items-center gap-1.5">
                      <span>{t.footer.complaintBookText}</span>
                      <ExternalLink size={12} />
                    </p>
                    <p className="text-[10px] text-zinc-400 truncate mt-0.5">
                      livroreclamacoes.pt
                    </p>
                  </div>
                </div>
                <p className="text-[10px] text-zinc-500 mt-2 border-t border-zinc-800 pt-1.5">
                  {t.footer.complaintBookDesc}
                </p>
              </a>
            </div>

          </div>

        </div>

        {/* Bottom Bar: Copyright */}
        <div className="mt-8 pt-6 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4">
          <p>{t.footer.copyright}</p>
          <div className="flex items-center gap-2 text-zinc-400 font-mono text-[11px]">
            <span>Pombal • Leiria • Portugal</span>
            <span>💋</span>
          </div>
        </div>

      </div>

    </footer>
  );
};
