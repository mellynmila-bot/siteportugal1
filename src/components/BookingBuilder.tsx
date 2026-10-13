import React, { useState, useEffect } from 'react';
import { MessageCircle, Send, Copy, Check, Sparkles, AlertCircle, Info, Image, Calendar, Clock } from 'lucide-react';
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
    <section id="agendamento" className="py-20 bg-[#121212] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-900 border border-zinc-700 text-[#A855F7] text-xs font-bold uppercase tracking-widest shadow-[2px_2px_0px_#A855F7]">
            <SparkleIcon size={12} className="text-[#A855F7]" />
            <span>{t.bookingSection.kicker}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display">
            {t.bookingSection.title}
          </h2>

          <p className="text-base text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            {t.bookingSection.subtitle}
          </p>
        </div>

        {/* Educational Pre-Booking Banner */}
        <div className="mb-12 p-6 bg-[#18181b] border-3 border-[#A855F7] shadow-[6px_6px_0px_#000000]">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-[#A855F7] text-white border border-black shrink-0 hidden sm:block">
              <Info size={24} />
            </div>
            <div className="space-y-3 w-full">
              <div className="flex items-center gap-2">
                <Sparkles size={18} className="text-[#A855F7]" />
                <h3 className="text-base sm:text-lg font-extrabold text-white font-display">
                  {t.bookingSection.guideTitle}
                </h3>
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs sm:text-sm text-zinc-300">
                {t.bookingSection.guideSteps.map((step: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-2 bg-zinc-900/90 p-3 border border-zinc-800">
                    <span className="font-mono text-[#A855F7] font-bold">0{idx + 1}.</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Interactive Form & Live Preview Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Configuration Steps */}
          <div className="lg:col-span-7 bg-[#18181b] p-6 sm:p-8 border-2 border-zinc-800 shadow-[6px_6px_0px_#000000] space-y-6">
            
            {/* Step 1: Nome */}
            <div>
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#A855F7] mb-2">
                {t.bookingSection.form.step1Title}
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={t.bookingSection.form.namePlaceholder}
                className="w-full bg-black border-2 border-zinc-700 focus:border-[#A855F7] px-4 py-3 text-white text-sm outline-none transition-colors"
              />
            </div>

            {/* Step 2: Serviço Pretendido */}
            <div>
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#A855F7] mb-2">
                {t.bookingSection.form.step2Title}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {SERVICES.map((s) => {
                  const isSelected = service === s.id;
                  const itemTrans = t.servicesSection.items[s.id];
                  return (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setService(s.id)}
                      className={`text-left p-3 border-2 transition-all text-xs font-bold ${
                        isSelected
                          ? 'bg-[#A855F7] text-white border-black shadow-[3px_3px_0px_#000000]'
                          : 'bg-zinc-900 text-zinc-300 border-zinc-800 hover:border-zinc-600'
                      }`}
                    >
                      <p className="font-extrabold truncate">{itemTrans?.name || s.name}</p>
                      <p className={`text-[11px] mt-0.5 ${isSelected ? 'text-purple-100' : 'text-zinc-400'}`}>
                        {itemTrans?.tag || s.tag}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Estado Atual das Unhas */}
            <div>
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#A855F7] mb-2">
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
                    className={`w-full text-left p-3 border-2 text-xs font-medium flex items-center justify-between transition-all ${
                      status === item.id
                        ? 'bg-zinc-800 text-white border-[#A855F7]'
                        : 'bg-zinc-900/60 text-zinc-400 border-zinc-800 hover:text-white'
                    }`}
                  >
                    <span>{item.label}</span>
                    <span className={`w-3.5 h-3.5 border ${status === item.id ? 'bg-[#A855F7] border-black' : 'border-zinc-700'}`} />
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Formato e Comprimento */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#A855F7] mb-2">
                  Formato da Unha
                </label>
                <select
                  value={shape}
                  onChange={(e) => setShape(e.target.value)}
                  className="w-full bg-black border-2 border-zinc-700 focus:border-[#A855F7] px-3 py-2.5 text-white text-xs outline-none"
                >
                  <option value="almond">{t.bookingSection.form.shapeAlmond}</option>
                  <option value="square">{t.bookingSection.form.shapeSquare}</option>
                  <option value="stiletto">{t.bookingSection.form.shapeStiletto}</option>
                  <option value="coffin">{t.bookingSection.form.shapeCoffin}</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#A855F7] mb-2">
                  Comprimento
                </label>
                <select
                  value={length}
                  onChange={(e) => setLength(e.target.value)}
                  className="w-full bg-black border-2 border-zinc-700 focus:border-[#A855F7] px-3 py-2.5 text-white text-xs outline-none"
                >
                  <option value="short">{t.bookingSection.form.lengthShort}</option>
                  <option value="medium">{t.bookingSection.form.lengthMedium}</option>
                  <option value="long">{t.bookingSection.form.lengthLong}</option>
                </select>
              </div>
            </div>

            {/* Step 5: Foto de Referência */}
            <div>
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#A855F7] mb-2">
                {t.bookingSection.form.step5Title}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <button
                  type="button"
                  onClick={() => setHasPhoto('yes')}
                  className={`p-3 border-2 text-xs font-bold text-left transition-all ${
                    hasPhoto === 'yes'
                      ? 'bg-zinc-800 text-white border-[#A855F7]'
                      : 'bg-zinc-900 text-zinc-400 border-zinc-800'
                  }`}
                >
                  <span>{t.bookingSection.form.hasPhotoYes}</span>
                </button>
                <button
                  type="button"
                  onClick={() => setHasPhoto('no')}
                  className={`p-3 border-2 text-xs font-bold text-left transition-all ${
                    hasPhoto === 'no'
                      ? 'bg-zinc-800 text-white border-[#A855F7]'
                      : 'bg-zinc-900 text-zinc-400 border-zinc-800'
                  }`}
                >
                  <span>{t.bookingSection.form.hasPhotoNo}</span>
                </button>
              </div>
            </div>

            {/* Step 6: Disponibilidade de Horário (Digitar o melhor horário) */}
            <div>
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#A855F7] mb-2">
                {t.bookingSection.form.step6Title}
              </label>
              <input
                type="text"
                value={timePreference}
                onChange={(e) => setTimePreference(e.target.value)}
                placeholder="Digita aqui os teus dias e horários preferidos (ex: Terça à tarde, Sábado de manhã...)"
                className="w-full bg-black border-2 border-zinc-700 focus:border-[#A855F7] px-4 py-3 text-white text-xs sm:text-sm outline-none transition-colors"
              />
            </div>

            {/* Step 7: Observações Adicionais */}
            <div>
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#A855F7] mb-2">
                {t.bookingSection.form.step7Title}
              </label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder={t.bookingSection.form.notesPlaceholder}
                rows={2}
                className="w-full bg-black border-2 border-zinc-700 focus:border-[#A855F7] px-4 py-2.5 text-white text-xs outline-none resize-none"
              />
            </div>

          </div>

          {/* Right Column: Live Message Preview & Direct WhatsApp Action */}
          <div className="lg:col-span-5 sticky top-24 space-y-4">
            
            <div className="bg-[#18181b] p-6 border-4 border-white shadow-[8px_8px_0px_#000000]">
              
              {/* Preview Header */}
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-zinc-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-emerald-400 rounded-full" />
                  <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                    {t.bookingSection.form.previewTitle}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={handleCopy}
                  className="text-xs text-zinc-400 hover:text-white flex items-center gap-1 font-mono transition-colors"
                >
                  {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                  <span>{copied ? 'Copiado!' : 'Copiar'}</span>
                </button>
              </div>

              {/* Message Bubble Simulator */}
              <div className="bg-[#0f1411] border-2 border-emerald-950/60 p-4 font-sans text-xs leading-relaxed text-zinc-200 whitespace-pre-line rounded-lg shadow-inner">
                {formattedMessage}
              </div>

              {/* Helper tip */}
              <p className="text-[11px] text-zinc-400 mt-3 flex items-center gap-1.5">
                <Sparkles size={12} className="text-[#A855F7] shrink-0" />
                <span>Ao clicares no botão, o WhatsApp abre diretamente com esta mensagem pré-escrita.</span>
              </p>

              {/* Big Neo-Brutalist WhatsApp Action */}
              <div className="mt-5 space-y-2">
                <button
                  type="button"
                  onClick={handleSendWhatsApp}
                  className="neo-btn-purple w-full flex items-center justify-center gap-3 py-4 px-4 text-sm sm:text-base font-extrabold uppercase tracking-wide cursor-pointer"
                >
                  <MessageCircle size={20} />
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
