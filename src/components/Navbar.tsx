import React, { useState } from 'react';
import { Menu, X, Globe, MessageCircle } from 'lucide-react';
import { Language } from '../types';
import { SparkleIcon } from './SparkleIcon';

interface NavbarProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  t: any;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLang,
  onLanguageChange,
  t,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  const navLinks = [
    { href: '#servicos', label: t.nav.services },
    { href: '#galeria', label: t.nav.gallery },
    { href: '#sobre', label: t.nav.about },
    { href: '#estudio', label: t.nav.studio },
    { href: '#avaliacoes', label: t.nav.reviews },
    { href: '#faq', label: t.nav.faq },
  ];

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'pt', label: 'PT (Portugal)', flag: '🇵🇹' },
    { code: 'en', label: 'EN (English)', flag: '🇬🇧' },
    { code: 'es', label: 'ES (Español)', flag: '🇪🇸' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[#D4AF37]/20 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="flex items-center gap-2 text-2xl sm:text-3xl font-bold tracking-wider text-white hover:text-[#D4AF37] transition-colors whitespace-nowrap shrink-0 font-display"
          >
            <span>Nailz by Cataleya</span>
            <SparkleIcon size={14} color="#D4AF37" className="animate-spin-slow" />
          </a>

          {/* Zone 2: Clean single-line text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-semibold tracking-widest uppercase text-zinc-300">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-[#D4AF37] hover:underline underline-offset-8 decoration-[#D4AF37] decoration-1 transition-all whitespace-nowrap shrink-0"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 primary action + Language Selector */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Language Selector */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold uppercase tracking-wider text-zinc-200 bg-zinc-900 border border-zinc-800 hover:border-[#D4AF37] transition-colors whitespace-nowrap cursor-pointer"
                title="Alterar Idioma"
              >
                <Globe size={13} className="text-[#D4AF37]" />
                <span>{currentLang}</span>
              </button>

              {langDropdownOpen && (
                <div className="absolute right-0 mt-2 w-44 bg-[#121212] border border-[#D4AF37]/40 shadow-xl py-1 z-50">
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      type="button"
                      onClick={() => {
                        onLanguageChange(l.code);
                        setLangDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2 text-xs font-medium flex items-center justify-between transition-colors cursor-pointer ${
                        currentLang === l.code
                          ? 'bg-[#D4AF37] text-black font-bold'
                          : 'text-zinc-200 hover:bg-zinc-800 hover:text-[#D4AF37]'
                      }`}
                    >
                      <span>{l.label}</span>
                      <span>{l.flag}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Primary Action Button (Luxury Gold) */}
            <a
              href="#agendamento"
              className="luxury-btn-gold hidden sm:flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-widest whitespace-nowrap shrink-0"
            >
              <MessageCircle size={15} />
              <span>{t.nav.bookNow}</span>
            </a>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-zinc-300 hover:text-white bg-zinc-900 border border-zinc-800 cursor-pointer"
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#D4AF37]/20 bg-[#0D0D0D] px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 text-xs font-bold tracking-widest uppercase text-zinc-200 hover:bg-zinc-900 hover:text-[#D4AF37] border-b border-zinc-900 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-2">
            <a
              href="#agendamento"
              onClick={() => setMobileMenuOpen(false)}
              className="luxury-btn-gold w-full flex items-center justify-center gap-2 py-3 text-xs font-bold uppercase tracking-widest"
            >
              <MessageCircle size={16} />
              <span>{t.nav.bookNow}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
