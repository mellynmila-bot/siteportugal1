import React, { useState } from 'react';
import { translations } from './data/translations';
import { Language } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { ServicesSection } from './components/ServicesSection';
import { GallerySection } from './components/GallerySection';
import { AboutSection } from './components/AboutSection';
import { SocialReelSection } from './components/SocialReelSection';
import { ReviewsSection } from './components/ReviewsSection';
import { StudioSection } from './components/StudioSection';
import { BookingBuilder } from './components/BookingBuilder';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { LegalModal } from './components/LegalModals';
import { FloatingActions } from './components/FloatingActions';

export default function App() {
  const [lang, setLang] = useState<Language>('pt');
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>(undefined);
  const [selectedArtStyle, setSelectedArtStyle] = useState<string | undefined>(undefined);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | 'ral' | null>(null);

  const t = translations[lang] || translations.pt;

  const handleSelectService = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    const element = document.getElementById('agendamento');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectArtStyle = (artTitle: string) => {
    setSelectedArtStyle(artTitle);
    const element = document.getElementById('agendamento');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#121212] text-white flex flex-col font-['Plus_Jakarta_Sans',sans-serif] selection:bg-[#A855F7] selection:text-white">
      {/* Top Bar Navigation */}
      <Navbar
        currentLang={lang}
        onLanguageChange={setLang}
        t={t}
      />

      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero t={t} />

        {/* 2. Infinite Marquee Banner */}
        <Marquee items={t.marquee} />

        {/* 3. Services Section */}
        <ServicesSection
          t={t}
          onSelectService={handleSelectService}
        />

        {/* 4. Gallery Section with Lightbox */}
        <GallerySection
          t={t}
          onSelectArtStyle={handleSelectArtStyle}
        />

        {/* 5. About Her Section (Cataleya Gu) */}
        <AboutSection t={t} />

        {/* 6. Social Media & Embedded Instagram Reel */}
        <SocialReelSection t={t} />

        {/* 7. Client Feedbacks (5.0 Google Stars, 6 Reviews) */}
        <ReviewsSection t={t} />

        {/* 8. Studio Section (Infinite Carousel, Hygiene, Google Maps) */}
        <StudioSection t={t} />

        {/* 9. Smart WhatsApp Booking Generator */}
        <BookingBuilder
          t={t}
          preselectedServiceId={selectedServiceId}
          preselectedArtStyle={selectedArtStyle}
        />

        {/* 10. Frequently Asked Questions */}
        <FaqSection t={t} />
      </main>

      {/* 11. Footer with Portugal Legal Requirements & Complaints Book */}
      <Footer
        t={t}
        onOpenLegal={(type) => setLegalModalType(type)}
      />

      {/* Interactive Legal Modals */}
      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />

      {/* Persistent Floating Quick Actions */}
      <FloatingActions />
    </div>
  );
}
