import React, { useEffect, useState } from 'react';
import { X, CheckCircle2 } from 'lucide-react';

export type ModalType = 'privacy' | 'terms' | 'contact' | 'order' | null;

interface LegalModalProps {
  activeModal: ModalType;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ activeModal, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!activeModal) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeModal, onClose]);

  useEffect(() => {
    setError('');
    setSubmitted(false);
  }, [activeModal]);

  if (!activeModal) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError('Por favor, preencha todos os campos.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError('Informe um endereço de e-mail válido.');
      return;
    }
    setError('');
    setSubmitted(true);
    setName('');
    setEmail('');
    setMessage('');
  };

  const title =
    activeModal === 'privacy'
      ? 'Política de Privacidade'
      : activeModal === 'terms'
        ? 'Termos de Uso'
        : activeModal === 'order'
          ? '300 Projetos de Paisagismo'
          : 'Contato — Rep Ebooks';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg rounded-2xl border border-[#24533d]/15 bg-[#fafaf7] p-6 text-[#202621] shadow-2xl sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-4 flex items-center justify-between gap-4">
          <h2
            id="modal-title"
            className="text-xl font-semibold text-[#173d2d] sm:text-2xl"
          >
            {title}
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar janela"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#eef4ea] text-[#24533d] transition-colors hover:bg-[#dde8d5]"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {activeModal === 'privacy' && (
          <div className="space-y-3 text-sm leading-relaxed text-[#4a544c]">
            <p>
              A <strong>Rep Ebooks</strong> respeita a sua privacidade. Os dados informados no
              momento da compra são utilizados exclusivamente para o processamento do pedido e o
              envio das orientações de acesso à coleção digital{' '}
              <strong>300 Projetos de Paisagismo</strong>.
            </p>
            <p>
              Não compartilhamos, vendemos ou cedemos suas informações pessoais a terceiros fora das
              operações estritamente necessárias para a liberação do material adquirido.
            </p>
            <p>
              Em caso de dúvidas ou solicitações relacionadas aos seus dados, entre em contato pelo
              nosso canal de atendimento.
            </p>
          </div>
        )}

        {activeModal === 'terms' && (
          <div className="space-y-3 text-sm leading-relaxed text-[#4a544c]">
            <p>
              Ao adquirir a coleção digital <strong>300 Projetos de Paisagismo</strong> da{' '}
              <strong>Rep Ebooks</strong>, você recebe acesso vitalício para consulta pessoal ou
              profissional de referências de paisagismo em dispositivos compatíveis.
            </p>
            <p>
              O material é 100% digital e destinado ao uso individual do comprador. Não é permitida
              a redistribuição comercial ou revenda não autorizada do acervo completo ou parcial.
            </p>
            <p>
              O acesso é liberado após a confirmação do pagamento único, sem cobranças recorrentes.
            </p>
          </div>
        )}

        {activeModal === 'contact' && (
          <div>
            {submitted ? (
              <div className="flex flex-col items-center gap-3 rounded-xl bg-[#eef4ea] p-6 text-center">
                <CheckCircle2 className="h-10 w-10 text-[#24533d]" />
                <h3 className="text-lg font-semibold text-[#173d2d]">Mensagem recebida</h3>
                <p className="text-sm text-[#4a544c]">
                  Obrigado por entrar em contato com a Rep Ebooks. Responderemos em breve.
                </p>
                <button
                  type="button"
                  onClick={onClose}
                  className="mt-2 rounded-xl bg-[#24533d] px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-[#173d2d]"
                >
                  Fechar
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <p className="text-sm text-[#4a544c]">
                  Precisa de ajuda com seu pedido ou acesso? Envie uma mensagem para a equipe da{' '}
                  <strong>Rep Ebooks</strong>.
                </p>
                <div>
                  <label htmlFor="contact-name" className="mb-1 block text-xs font-bold text-[#173d2d]">
                    Nome completo
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Seu nome"
                    className="w-full rounded-xl border border-[#24533d]/20 bg-white px-3.5 py-2.5 text-sm text-[#202621] focus:border-[#24533d] focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="mb-1 block text-xs font-bold text-[#173d2d]">
                    E-mail
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="seuemail@exemplo.com"
                    className="w-full rounded-xl border border-[#24533d]/20 bg-white px-3.5 py-2.5 text-sm text-[#202621] focus:border-[#24533d] focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="contact-msg" className="mb-1 block text-xs font-bold text-[#173d2d]">
                    Mensagem
                  </label>
                  <textarea
                    id="contact-msg"
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Como podemos ajudar?"
                    className="w-full rounded-xl border border-[#24533d]/20 bg-white px-3.5 py-2.5 text-sm text-[#202621] focus:border-[#24533d] focus:outline-none"
                  />
                </div>
                {error && <p className="text-xs font-semibold text-[#9a5224]">{error}</p>}
                <button type="submit" className="btn">
                  Enviar mensagem
                </button>
              </form>
            )}
          </div>
        )}

        {activeModal === 'order' && (
          <div className="space-y-4 text-sm leading-relaxed text-[#4a544c]">
            <div className="rounded-xl border border-[#24533d]/15 bg-white p-4">
              <div className="flex items-baseline justify-between gap-4">
                <span className="font-bold text-[#173d2d]">Coleção Completa + 2 Bônus</span>
                <span className="font-semibold text-[#173d2d] text-lg tabular-nums">R$ 9,90</span>
              </div>
              <p className="mt-1 text-xs text-[#6b746c]">
                Pagamento único • Acesso digital e vitalício — Rep Ebooks
              </p>
            </div>
            <p>
              Material 100% digital com 300 projetos e referências de paisagismo, além dos guias
              complementares de Plantas Ornamentais e Jardins de Baixa Manutenção.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="btn"
            >
              Fechar
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
