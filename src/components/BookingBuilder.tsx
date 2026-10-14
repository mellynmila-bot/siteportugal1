import React, { useState, useEffect } from 'react';
import { MessageCircle, Copy, Check, Sparkles, Info } from 'lucide-react';
import { BUSINESS_INFO, SERVICES } from '../data/content';
import { SparkleIcon } from './SparkleIcon';

interface BookingBuilderProps {
  t: any;
  preselectedServiceId?: string;
  preselectedArtStyle?: string;
}

export const BookingBuilder: React.FC<BookingBuilderProps> = ({
  t,
  preselectedServiceId,
  preselectedArtStyle,
}) => {
  const [name, setName] = useState('');
  const [service, setService] = useState('art3d');
  const [status, setStatus] = useState('natural');
  const [length, setLength] = useState('medium');
  const [shape, setShape] = useState('almond');
  const [hasPhoto, setHasPhoto] = useState('yes');
  const [timePreference, setTimePreference] = useState('');
  const [customArtStyle, setCustomArtStyle] = useState('');
  const [notes, setNotes] = useState('');
  const [copied, setCopied] = useState(false);

  // Sync external preselection
  useEffect(() => {
    if (preselectedServiceId) {
      setService(preselectedServiceId);
    }
  }, [preselectedServiceId]);

  useEffect(() => {
    if (preselectedArtStyle) {
      setCustomArtStyle(preselectedArtStyle);
      setService('art3d');
    }
  }, [preselectedArtStyle]);

  // Resolve labels for summary
  const getServiceName = (id: string) => {
    const s = SERVICES.find((item) => item.id === id);
    if (!s) return 'Nail Art';
    const translated = t.servicesSection.items[id];
    return translated?.name || s.name;
  };

  const getStatusLabel = (code: string) => {
    switch (code) {
      case 'natural':
        return t.bookingSection.form.statusNatural;
      case 'removal':
        return t.bookingSection.form.statusRemoval;
      case 'maintenance':
        return t.bookingSection.form.statusMaintenance;
      default:
        return code;
    }
  };

  const getLengthLabel = (code: string) => {
    switch (code) {
      case 'short':
        return t.bookingSection.form.lengthShort;
      case 'medium':
        return t.bookingSection.form.lengthMedium;
      case 'long':
        return t.bookingSection.form.lengthLong;
      default:
        return code;
    }
  };

  const getShapeLabel = (code: string) => {
    switch (code) {
      case 'almond':
        return t.bookingSection.form.shapeAlmond;
      case 'square':
        return t.bookingSection.form.shapeSquare;
      case 'stiletto':
        return t.bookingSection.form.shapeStiletto;
      case 'coffin':
        return t.bookingSection.form.shapeCoffin;
      default:
        return code;
    }
  };

  // Build formatted text message
  const formattedMessage = `Olá Cataleya! Gostaria de agendar uma sessão de Nail Art em Pombal 💋

• Nome: ${name.trim() || '[O meu nome]'}
• Serviço: ${getServiceName(service)}${customArtStyle ? ` (Referência: "${customArtStyle}")` : ''}
• Estado atual das unhas: ${getStatusLabel(status)}
• Formato e Comprimento: ${getShapeLabel(shape)} • ${getLengthLabel(length)}
• Fotos de Referência: ${hasPhoto === 'yes' ? 'Sim (vou enviar fotos anexas aqui na conversa)' : 'Ainda não (gostaria de decidir no estúdio)'}
• Horário pretendido: ${timePreference.trim() || '[A combinar no WhatsApp]'}${notes.trim() ? `\n• Observações: ${notes.trim()}` : ''}

Podemos ver as próximas vagas disponíveis na agenda? Obrigada! ✨`;

  const handleCopy = () => {
    navigator.clipboard.writeText(formattedMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSendWhatsApp = () => {
    const encoded = encodeURIComponent(formattedMessage);
    const url = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encoded}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="agendamento" className="py-20 sm:py-24 bg-white text-stone-900 relative overflow-hidden border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-amber-50 border border-[#D4AF37]/50 text-[#B38715] text-xs font-bold uppercase tracking-widest">
            <SparkleIcon size={12} color="#B38715" />
            <span>{t.bookingSection.kicker}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-stone-950 tracking-tight font-display">
            {t.bookingSection.title}
          </h2>

          <p className="text-base text-stone-600 max-w-2xl mx-auto leading-relaxed">
            {t.bookingSection.subtitle}
          </p>
        </div>

        {/* Educational Pre-Booking Banner */}
        <div className="mb-12 p-6 sm:p-7 bg-amber-50/70 border border-[#D4AF37]/50 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-gradient-to-r from-[#DFBA73] to-[#C5A880] text-[#0A0A0A] shrink-0 hidden sm:block shadow-sm">
              <Info size={22} />
            </div>
            <div className="space-y-3 w-full">
              <div className="flex items-center gap-2">
                <Sparkles size={16} className="text-[#B38715]" />
                <h3 className="text-base sm:text-lg font-bold text-stone-950 font-display">
                  {t.bookingSection.guideTitle}
                </h3>
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-3 gap-3.5 text-xs sm:text-sm text-stone-700">
                {t.bookingSection.guideSteps.map((step: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-2.5 bg-white p-3.5 border border-[#D4AF37]/30 shadow-xs">
                    <span className="font-mono text-[#B38715] font-bold">0{idx + 1}.</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Interactive Form & Live Preview Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Interactive Configuration Steps */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 border border-stone-200 shadow-sm space-y-6">
            
            {/* Step 1: Nome */}
            <div>
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#B38715] mb-2">
                {t.bookingSection.form.step1Title}
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={t.bookingSection.form.namePlaceholder}
                className="w-full bg-stone-50 border border-stone-300 focus:border-[#D4AF37] px-4 py-3 text-stone-900 text-sm outline-none transition-colors"
              />
            </div>

            {/* Step 2: Serviço Pretendido */}
            <div>
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#B38715] mb-2">
                {t.bookingSection.form.step2Title}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {SERVICES.map((s) => {
                  const isSelected = service === s.id;
                  const itemTrans = t.servicesSection.items[s.id];
                  return (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setService(s.id)}
                      className={`text-left p-3.5 border transition-all text-xs cursor-pointer ${
                        isSelected
                          ? 'bg-amber-50 text-stone-950 border-[#D4AF37] shadow-sm font-bold'
                          : 'bg-stone-50 text-stone-700 border-stone-200 hover:border-stone-400 font-medium'
                      }`}
                    >
                      <p className="font-bold truncate">{itemTrans?.name || s.name}</p>
                      <p className={`text-[11px] mt-0.5 ${isSelected ? 'text-[#B38715] font-semibold' : 'text-stone-500'}`}>
                        {itemTrans?.tag || s.tag}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Estado Atual das Unhas */}
            <div>
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#B38715] mb-2">
                {t.bookingSection.form.step3Title}
              </label>
              <div className="space-y-2">
                {[
                  { id: 'natural', label: t.bookingSection.form.statusNatural },
                  { id: 'removal', label: t.bookingSection.form.statusRemoval },
                  { id: 'maintenance', label: t.bookingSection.form.statusMaintenance },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setStatus(item.id)}
                    className={`w-full text-left p-3.5 border text-xs font-medium flex items-center justify-between transition-all cursor-pointer ${
                      status === item.id
                        ? 'bg-amber-50 text-stone-950 border-[#D4AF37] font-semibold'
                        : 'bg-stone-50 text-stone-600 border-stone-200 hover:border-stone-400'
                    }`}
                  >
                    <span>{item.label}</span>
                    <span className={`w-3.5 h-3.5 rounded-full border ${status === item.id ? 'bg-[#D4AF37] border-[#D4AF37]' : 'border-stone-300'}`} />
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Formato e Comprimento */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#B38715] mb-2">
                  Formato da Unha
                </label>
                <select
                  value={shape}
                  onChange={(e) => setShape(e.target.value)}
                  className="w-full bg-stone-50 border border-stone-300 focus:border-[#D4AF37] px-3.5 py-2.5 text-stone-900 text-xs outline-none"
                >
                  <option value="almond">{t.bookingSection.form.shapeAlmond}</option>
                  <option value="square">{t.bookingSection.form.shapeSquare}</option>
                  <option value="stiletto">{t.bookingSection.form.shapeStiletto}</option>
                  <option value="coffin">{t.bookingSection.form.shapeCoffin}</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#B38715] mb-2">
                  Comprimento
                </label>
                <select
                  value={length}
                  onChange={(e) => setLength(e.target.value)}
                  className="w-full bg-stone-50 border border-stone-300 focus:border-[#D4AF37] px-3.5 py-2.5 text-stone-900 text-xs outline-none"
                >
                  <option value="short">{t.bookingSection.form.lengthShort}</option>
                  <option value="medium">{t.bookingSection.form.lengthMedium}</option>
                  <option value="long">{t.bookingSection.form.lengthLong}</option>
                </select>
              </div>
            </div>

            {/* Step 5: Foto de Referência */}
            <div>
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#B38715] mb-2">
                {t.bookingSection.form.step5Title}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setHasPhoto('yes')}
                  className={`p-3.5 border text-xs font-bold text-left transition-all cursor-pointer ${
                    hasPhoto === 'yes'
                      ? 'bg-amber-50 text-stone-950 border-[#D4AF37]'
                      : 'bg-stone-50 text-stone-600 border-stone-200'
                  }`}
                >
                  <span>{t.bookingSection.form.hasPhotoYes}</span>
                </button>
                <button
                  type="button"
                  onClick={() => setHasPhoto('no')}
                  className={`p-3.5 border text-xs font-bold text-left transition-all cursor-pointer ${
                    hasPhoto === 'no'
                      ? 'bg-amber-50 text-stone-950 border-[#D4AF37]'
                      : 'bg-stone-50 text-stone-600 border-stone-200'
                  }`}
                >
                  <span>{t.bookingSection.form.hasPhotoNo}</span>
                </button>
              </div>
            </div>

            {/* Step 6: Disponibilidade de Horário (Digitar o melhor horário) */}
            <div>
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#B38715] mb-2">
                {t.bookingSection.form.step6Title}
              </label>
              <input
                type="text"
                value={timePreference}
                onChange={(e) => setTimePreference(e.target.value)}
                placeholder="Digita aqui os teus dias e horários preferidos (ex: Terça à tarde, Sábado de manhã...)"
                className="w-full bg-stone-50 border border-stone-300 focus:border-[#D4AF37] px-4 py-3 text-stone-900 text-xs sm:text-sm outline-none transition-colors"
              />
            </div>

            {/* Step 7: Observações Adicionais */}
            <div>
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#B38715] mb-2">
                {t.bookingSection.form.step7Title}
              </label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder={t.bookingSection.form.notesPlaceholder}
                rows={2}
                className="w-full bg-stone-50 border border-stone-300 focus:border-[#D4AF37] px-4 py-2.5 text-stone-900 text-xs outline-none resize-none"
              />
            </div>

          </div>

          {/* Right Column: Live Message Preview & Direct WhatsApp Action */}
          <div className="lg:col-span-5 sticky top-24 space-y-4">
            
            <div className="bg-[#111111] p-6 sm:p-7 border border-[#D4AF37]/40 shadow-xl text-white">
              
              {/* Preview Header */}
              <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-zinc-800">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse" />
                  <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                    {t.bookingSection.form.previewTitle}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={handleCopy}
                  className="text-xs text-zinc-400 hover:text-[#D4AF37] flex items-center gap-1 font-mono transition-colors cursor-pointer"
                >
                  {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                  <span>{copied ? 'Copiado!' : 'Copiar'}</span>
                </button>
              </div>

              {/* Message Bubble Simulator */}
              <div className="bg-[#0A0A0A] border border-zinc-800 p-4 font-sans text-xs leading-relaxed text-zinc-300 whitespace-pre-line shadow-inner">
                {formattedMessage}
              </div>

              {/* Helper tip */}
              <p className="text-[11px] text-zinc-400 mt-3.5 flex items-center gap-1.5">
                <Sparkles size={12} className="text-[#D4AF37] shrink-0" />
                <span>Ao clicares no botão, o WhatsApp abre diretamente com esta mensagem pré-escrita.</span>
              </p>

              {/* Big Luxury Gold WhatsApp Action */}
              <div className="mt-5 space-y-2.5">
                <button
                  type="button"
                  onClick={handleSendWhatsApp}
                  className="luxury-btn-gold w-full flex items-center justify-center gap-3 py-4 px-4 text-xs sm:text-sm font-bold uppercase tracking-widest cursor-pointer"
                >
                  <MessageCircle size={19} />
                  <span>{t.bookingSection.form.sendBtn}</span>
                </button>

                <p className="text-center text-[11px] font-mono text-zinc-400">
                  WhatsApp Oficial: +351 910 850 882 (Pombal, Portugal)
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
