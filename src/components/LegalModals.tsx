import React from 'react';
import { X, Shield, FileText, Scale } from 'lucide-react';

interface LegalModalProps {
  type: 'privacy' | 'terms' | 'ral' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative max-w-2xl w-full bg-[#18181b] border-4 border-white shadow-[8px_8px_0px_#A855F7] p-6 sm:p-8 text-white max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-zinc-800">
          <div className="flex items-center gap-2.5">
            {type === 'privacy' && <Shield size={20} className="text-[#A855F7]" />}
            {type === 'terms' && <FileText size={20} className="text-[#A855F7]" />}
            {type === 'ral' && <Scale size={20} className="text-[#A855F7]" />}
            <h3 className="text-xl font-extrabold font-display">
              {type === 'privacy' && 'Política de Privacidade (RGPD)'}
              {type === 'terms' && 'Termos de Serviço & Marcações'}
              {type === 'ral' && 'Resolução Alternativa de Litígios (RAL)'}
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 bg-black border border-zinc-700 hover:border-white text-zinc-300 hover:text-white"
          >
            <X size={18} />
          </button>
        </div>

        {/* Content */}
        <div className="space-y-4 text-xs sm:text-sm text-zinc-300 leading-relaxed">
          {type === 'privacy' && (
            <>
              <p>
                Em conformidade com o Regulamento Geral sobre a Proteção de Dados (RGPD - Regulamento (UE) 2016/679) e a Lei n.º 58/2019 de Portugal, informamos que os dados pessoais fornecidos (nome, número de telefone e preferências de serviço) destinam-se exclusivamente à gestão de agendamentos e comunicação direta com a cliente no âmbito dos serviços de estética prestados por <strong>Nailz by Cataleya</strong>.
              </p>
              <h4 className="font-bold text-white pt-2">1. Responsável pelo Tratamento:</h4>
              <p>Firma / Profissional: [Inserir Nome Completo / Nome Comercial], NIF: [000.000.000], com sede/morada em R. Principal, 3100-378 Pombal, Portugal.</p>
              <h4 className="font-bold text-white pt-2">2. Finalidade e Conservação:</h4>
              <p>Os dados recolhidos através do WhatsApp ou formulário deste website não são partilhados nem comercializados a terceiros e são mantidos unicamente pelo período estritamente necessário à gestão de marcações e histórico de serviços.</p>
              <h4 className="font-bold text-white pt-2">3. Direitos do Titular:</h4>
              <p>Tem o direito de aceder, retificar ou solicitar a eliminação dos seus dados a qualquer momento contactando-nos através do e-mail oficial [nailzbycataleya@hotmail.com] ou do telefone [+351 910 850 882].</p>
            </>
          )}

          {type === 'terms' && (
            <>
              <p>
                Os presentes termos regulam a prestação de serviços de Nail Art, extensão de unhas e tratamentos de estética no estúdio <strong>Nailz by Cataleya</strong> em Pombal, Portugal.
              </p>
              <h4 className="font-bold text-white pt-2">1. Marcações e Pontualidade:</h4>
              <p>As marcações são efetuadas previamente mediante confirmação via WhatsApp. Pedimos que chegue com pontualidade. Tolerância máxima de 15 minutos, após a qual a sessão poderá ser reduzida ou remarcada para não prejudicar as clientes seguintes.</p>
              <h4 className="font-bold text-white pt-2">2. Taxa de Reserva (Sinal):</h4>
              <p>Poderá ser solicitada uma caução/sinal para bloquear o horário na agenda. Em caso de cancelamento com menos de 24 horas de antecedência ou falta injustificada, o valor do sinal não é reembolsável.</p>
              <h4 className="font-bold text-white pt-2">3. Garantia de Serviço:</h4>
              <p>Garantimos a qualidade e reparação gratuita de eventuais quebras ou descolamentos no prazo de 48 horas após a aplicação, desde que decorrentes de defeito de aplicação e não de mau uso ou impacto traumático.</p>
            </>
          )}

          {type === 'ral' && (
            <>
              <p>
                Em cumprimento do disposto no artigo 18.º da Lei n.º 144/2015, de 8 de setembro, informa-se que em caso de litígio de consumo, o consumidor pode recorrer a uma Entidade de Resolução Alternativa de Litígios de Consumo (RAL):
              </p>
              <div className="p-3 bg-black border border-zinc-700 my-2">
                <p className="font-bold text-white">CNIACC – Centro Nacional de Informação e Arbitragem de Conflitos de Consumo</p>
                <p className="text-xs text-zinc-400 mt-1">Faculdade de Direito da Universidade Nova de Lisboa, Campus de Campolide, 1099-032 Lisboa</p>
                <p className="text-xs text-zinc-400">Telefone: 21 384 74 84 | E-mail: cniacc@unl.pt | Web: www.cniacc.pt</p>
              </div>
              <p>
                As entidades de resolução alternativa de litígios são independentes e imparciais. Mais informações em Portal do Consumidor (<a href="https://www.consumidor.gov.pt" target="_blank" rel="noopener noreferrer" className="underline text-[#A855F7]">www.consumidor.gov.pt</a>).
              </p>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="mt-6 pt-4 border-t border-zinc-800 text-right">
          <button
            type="button"
            onClick={onClose}
            className="neo-btn-purple px-4 py-2 text-xs font-bold uppercase tracking-wider"
          >
            Compreendido & Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
