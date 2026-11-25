import React, { useEffect, useRef, useState } from 'react';
import { Icon, IconName } from './components/Icons';
import { LegalModal, ModalType } from './components/LegalModal';

const CHECKOUT_URL = 'https://pay.cakto.com.br/tew3yt3_1368599';

interface ImageSlotProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  loading?: 'eager' | 'lazy';
  fetchPriority?: 'high' | 'auto';
  isTestimonial?: boolean;
  children?: React.ReactNode;
}

const ImageSlot: React.FC<ImageSlotProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  loading = 'lazy',
  fetchPriority,
  isTestimonial = false,
  children,
}) => {
  const [failed, setFailed] = useState(false);
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`slot ${className} ${isTestimonial && loaded ? 'is-loaded' : ''}`}>
      {children}
      {!failed && (
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={loading}
          fetchPriority={fetchPriority}
          decoding="async"
          referrerPolicy="no-referrer"
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
        />
      )}
      <div className="slot__ph" aria-hidden="true">
        <Icon name="camera" />
        <span className="slot__ph-label">Imagem ilustrativa</span>
      </div>
    </div>
  );
};

const STYLES: Array<{ src: string; alt: string; title: string; desc: string; delay?: string }> = [
  {
    src: '/images/estilo-tropical.png',
    alt: 'Projeto de jardim tropical',
    title: 'Jardim Tropical',
    desc: 'Vegetação exuberante e composição natural.',
  },
  {
    src: '/images/estilo-moderno.png',
    alt: 'Projeto de jardim moderno',
    title: 'Jardim Moderno',
    desc: 'Linhas limpas, organização e sofisticação.',
    delay: '60ms',
  },
  {
    src: '/images/estilo-minimalista.png',
    alt: 'Projeto de jardim minimalista',
    title: 'Jardim Minimalista',
    desc: 'Menos elementos, mais equilíbrio visual.',
    delay: '120ms',
  },
  {
    src: '/images/estilo-mediterraneo.png',
    alt: 'Projeto de jardim mediterrâneo',
    title: 'Jardim Mediterrâneo',
    desc: 'Texturas naturais, pedras e espécies características.',
    delay: '180ms',
  },
  {
    src: '/images/estilo-pedras.png',
    alt: 'Projeto de jardim com pedras ornamentais',
    title: 'Jardim com Pedras',
    desc: 'Composições modernas utilizando pedras ornamentais.',
  },
  {
    src: '/images/estilo-palmeiras.png',
    alt: 'Projeto de jardim com palmeiras',
    title: 'Jardim com Palmeiras',
    desc: 'Projetos marcantes para fachadas e áreas externas.',
    delay: '60ms',
  },
  {
    src: '/images/estilo-deck.png',
    alt: 'Projeto de jardim com deck de madeira',
    title: 'Jardim com Deck',
    desc: 'Integração entre madeira, vegetação e áreas de convivência.',
    delay: '120ms',
  },
  {
    src: '/images/estilo-baixa-manutencao.png',
    alt: 'Projeto de jardim de baixa manutenção',
    title: 'Jardim de Baixa Manutenção',
    desc: 'Alternativas pensadas para quem busca praticidade.',
    delay: '180ms',
  },
];

const TESTIMONIALS = [
  { src: '/images/depoimento-01.png', alt: 'Depoimento de cliente 1', delay: undefined },
  { src: '/images/depoimento-02.png', alt: 'Depoimento de cliente 2', delay: '80ms' },
  { src: '/images/depoimento-03.png', alt: 'Depoimento de cliente 3', delay: '160ms' },
  { src: '/images/depoimento-04.png', alt: 'Depoimento de cliente 4', delay: undefined },
  { src: '/images/depoimento-05.png', alt: 'Depoimento de cliente 5', delay: '80ms' },
  { src: '/images/depoimento-06.png', alt: 'Depoimento de cliente 6', delay: '160ms' },
];

const FAQS = [
  {
    id: 'faq-1',
    question: 'O que vou receber?',
    answer:
      'Você receberá acesso à coleção digital com 300 projetos e referências de paisagismo, além dos materiais complementares incluídos na oferta.',
  },
  {
    id: 'faq-2',
    question: 'É um produto físico?',
    answer:
      'Não. O conteúdo é 100% digital e pode ser acessado utilizando dispositivos compatíveis, como celular, tablet ou computador.',
  },
  {
    id: 'faq-3',
    question: 'Preciso entender de paisagismo?',
    answer:
      'Não. A coleção foi organizada para servir como referência tanto para iniciantes quanto para pessoas que já possuem experiência na área.',
  },
  {
    id: 'faq-4',
    question: 'Os projetos servem para qualquer espaço?',
    answer:
      'A coleção apresenta propostas para diferentes tipos e tamanhos de ambientes. As referências podem ser utilizadas para encontrar ideias adequadas às características de cada espaço.',
  },
  {
    id: 'faq-5',
    question: 'O acesso expira?',
    answer: 'Não. O acesso ao material adquirido é vitalício.',
  },
  {
    id: 'faq-6',
    question: 'Como receberei meu acesso?',
    answer:
      'Após a confirmação do pagamento, você receberá as orientações necessárias para acessar seu material digital.',
  },
];

const LEFT_FEATURES: Array<{ icon: IconName; title: string; desc: string; delay?: string }> = [
  {
    icon: 'area',
    title: 'Área indicada',
    desc: 'Veja referências pensadas para diferentes dimensões e tipos de ambiente.',
  },
  {
    icon: 'sun',
    title: 'Exposição ao sol',
    desc: 'Entenda quais projetos funcionam melhor em locais de sol pleno, meia-sombra ou outras condições.',
    delay: '80ms',
  },
  {
    icon: 'list',
    title: 'Lista de plantas',
    desc: 'Tenha referências das espécies utilizadas em diferentes propostas de paisagismo.',
    delay: '160ms',
  },
];

const RIGHT_FEATURES: Array<{ icon: IconName; title: string; desc: string; delay?: string }> = [
  {
    icon: 'gauge',
    title: 'Nível de manutenção',
    desc: 'Compare alternativas de baixa, média ou maior necessidade de cuidados.',
  },
  {
    icon: 'wallet',
    title: 'Faixa de investimento',
    desc: 'Use as referências para compreender melhor a complexidade de cada estilo de projeto.',
    delay: '80ms',
  },
  {
    icon: 'drops',
    title: 'Irrigação e cuidados',
    desc: 'Encontre orientações que ajudam a entender as necessidades do jardim.',
    delay: '160ms',
  },
];

const FOR_WHO_ITEMS = [
  'Quer transformar o próprio jardim',
  'Está construindo ou reformando',
  'Procura ideias para fachada ou quintal',
  'Trabalha com jardinagem ou paisagismo',
  'Quer apresentar novas referências para clientes',
  'Gosta de decoração e áreas externas',
  'Quer aproveitar melhor um espaço vazio',
];

export default function App() {
  const [openFaq, setOpenFaq] = useState<string | null>(null);
  const [showStickyCta, setShowStickyCta] = useState(false);
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  const heroRef = useRef<HTMLElement | null>(null);
  const ofertaRef = useRef<HTMLElement | null>(null);
  const footerRef = useRef<HTMLElement | null>(null);
  const faqContentRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
      reveals.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    reveals.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;
    const targets = [heroRef.current, ofertaRef.current, footerRef.current].filter(
      (el): el is HTMLElement => Boolean(el)
    );
    if (targets.length === 0) return;

    const seen = new Map<Element, boolean>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          seen.set(entry.target, entry.isIntersecting);
        });
        const anyVisible = targets.some((t) => seen.get(t) !== false);
        setShowStickyCta(!anyVisible);
      },
      { threshold: 0 }
    );

    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);

  const toggleFaq = (id: string) => {
    setOpenFaq((prev) => (prev === id ? null : id));
  };

  return (
    <>
      <main>
        {/* 1. HERO / OFERTA */}
        <section className="hero" id="topo" ref={heroRef}>
          <div className="container">
            <div className="hero__brand">
              <Icon name="leaf" />
              rep ebooks
            </div>

            <div className="hero__grid">
              <div className="hero__top reveal">
                <div className="badge-offer">
                  <span className="badge-offer__dot" aria-hidden="true" />
                  Oferta especial • Acesso imediato
                </div>
                <h1>
                  Transforme qualquer espaço com <span className="hl">300 Projetos de Paisagismo</span>
                </h1>
                <p className="hero__sub">
                  Tenha centenas de ideias e referências para planejar jardins bonitos, funcionais e
                  bem organizados — mesmo sem saber por onde começar.
                </p>
              </div>

              <div className="hero__media reveal" style={{ '--d': '120ms' } as React.CSSProperties}>
                <div className="hero-visual">
                  <div className="hero-visual__deco" aria-hidden="true" />
                  <ImageSlot
                    src="/images/hero.png"
                    alt="Jardim residencial moderno com paisagismo planejado"
                    width={880}
                    height={968}
                    loading="eager"
                    fetchPriority="high"
                  />
                  <div className="hero-seal">
                    <Icon name="infinity" />
                    Acesso
                    <br />
                    vitalício
                  </div>
                </div>
              </div>

              <div className="hero__bottom reveal" style={{ '--d': '200ms' } as React.CSSProperties}>
                <ul className="hero__checks">
                  <li>
                    <span className="check-dot">
                      <Icon name="check" className="icon icon--xs" />
                    </span>
                    Diferentes estilos de jardim
                  </li>
                  <li>
                    <span className="check-dot">
                      <Icon name="check" className="icon icon--xs" />
                    </span>
                    Projetos para vários tamanhos de espaço
                  </li>
                  <li>
                    <span className="check-dot">
                      <Icon name="check" className="icon icon--xs" />
                    </span>
                    Informações práticas para execução
                  </li>
                </ul>

                <div className="price-card">
                  <div className="price-card__info">
                    <p className="price-card__from">
                      De <s>R$ 29,90</s>
                    </p>
                    <p className="price-card__label">Por apenas</p>
                    <p className="price">
                      <span className="price__cur">R$</span>
                      <span className="price__val">9,90</span>
                    </p>
                    <span className="price-card__limited">
                      <Icon name="clock" className="icon icon--xs" />
                      Oferta especial por tempo limitado
                    </span>
                  </div>
                  <a
                    href={CHECKOUT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--xl"
                  >
                    Quero acessar os 300 projetos
                    <Icon name="arrow" className="icon icon--sm" />
                  </a>
                  <p className="btn-note">
                    Pagamento único<span className="dot">•</span>Acesso imediato
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. BENEFÍCIOS */}
        <section className="section section--white">
          <div className="container">
            <div className="section-head reveal">
              <h2>Imagine saber exatamente como transformar aquele espaço vazio...</h2>
              <p>
                Com boas referências, escolher o estilo, as plantas e a organização do jardim fica
                muito mais simples.
              </p>
            </div>
            <div className="cards-3">
              <article className="card reveal">
                <span className="icon-tile">
                  <Icon name="eye" />
                </span>
                <h3>Visualize antes de começar</h3>
                <p>
                  Use os projetos como referência para entender como plantas, pedras, caminhos,
                  iluminação e outros elementos podem trabalhar juntos.
                </p>
              </article>
              <article className="card reveal" style={{ '--d': '100ms' } as React.CSSProperties}>
                <span className="icon-tile">
                  <Icon name="clock" />
                </span>
                <h3>Economize tempo planejando</h3>
                <p>
                  Em vez de começar do zero, tenha centenas de ideias prontas para adaptar ao seu
                  espaço.
                </p>
              </article>
              <article className="card reveal" style={{ '--d': '200ms' } as React.CSSProperties}>
                <span className="icon-tile">
                  <Icon name="compass" />
                </span>
                <h3>Encontre o estilo ideal</h3>
                <p>
                  Explore diferentes propostas de paisagismo até encontrar aquelas que mais combinam
                  com sua casa ou projeto.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* 3. POR QUE TER OS PROJETOS? */}
        <section className="section section--sand">
          <div className="container">
            <div className="section-head reveal">
              <span className="eyebrow">
                <Icon name="sprout" />
                Por que adquirir
              </span>
              <h2>Por que ter uma biblioteca de projetos de paisagismo?</h2>
            </div>
            <div className="why">
              <article className="why__item reveal">
                <span className="why__icon">
                  <Icon name="layers" />
                </span>
                <div>
                  <span className="why__num">01</span>
                  <h3>Centenas de referências</h3>
                  <p>
                    Tenha ideias para jardins modernos, tropicais, minimalistas, rústicos,
                    mediterrâneos e muito mais.
                  </p>
                </div>
              </article>
              <article className="why__item reveal" style={{ '--d': '100ms' } as React.CSSProperties}>
                <span className="why__icon">
                  <Icon name="map" />
                </span>
                <div>
                  <span className="why__num">02</span>
                  <h3>Projetos para diferentes espaços</h3>
                  <p>
                    Encontre inspirações para corredores laterais, fachadas, quintais, áreas
                    gourmet, jardins pequenos e grandes áreas.
                  </p>
                </div>
              </article>
              <article className="why__item reveal" style={{ '--d': '200ms' } as React.CSSProperties}>
                <span className="why__icon">
                  <Icon name="clipboard" />
                </span>
                <div>
                  <span className="why__num">03</span>
                  <h3>Informações que ajudam no planejamento</h3>
                  <p>
                    Consulte características importantes para entender melhor cada composição e
                    adaptar as ideias ao seu ambiente.
                  </p>
                </div>
              </article>
            </div>
            <div className="btn-wrap reveal">
              <a href="#oferta" className="btn">
                Quero meus projetos de paisagismo
                <Icon name="arrow" className="icon icon--sm" />
              </a>
            </div>
          </div>
        </section>

        {/* 4. O QUE VOCÊ VAI RECEBER */}
        <section className="section section--mist">
          <div className="container">
            <div className="section-head reveal">
              <span className="eyebrow">
                <Icon name="book" />
                Pacote completo
              </span>
              <h2>Mais do que imagens bonitas: projetos pensados para ajudar no planejamento</h2>
              <p>
                A coleção reúne projetos e referências organizadas para facilitar a escolha do
                paisagismo ideal.
              </p>
            </div>
            <div className="receive">
              <div className="receive__col">
                {LEFT_FEATURES.map((item) => (
                  <article
                    key={item.title}
                    className="feature reveal"
                    style={item.delay ? ({ '--d': item.delay } as React.CSSProperties) : undefined}
                  >
                    <span className="feature__icon">
                      <Icon name={item.icon} />
                    </span>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.desc}</p>
                    </div>
                  </article>
                ))}
              </div>

              <div className="receive__media reveal">
                <ImageSlot
                  src="/images/paginas-internas.png"
                  alt="Páginas internas da coleção 300 Projetos de Paisagismo"
                  width={880}
                  height={1012}
                  className="pages-slot"
                />
              </div>

              <div className="receive__col">
                {RIGHT_FEATURES.map((item) => (
                  <article
                    key={item.title}
                    className="feature reveal"
                    style={item.delay ? ({ '--d': item.delay } as React.CSSProperties) : undefined}
                  >
                    <span className="feature__icon">
                      <Icon name={item.icon} />
                    </span>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.desc}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 5. TIPOS DE PAISAGISMO */}
        <section className="section section--white">
          <div className="container">
            <div className="section-head reveal">
              <span className="eyebrow">
                <Icon name="leaf" />
                Estilos e espaços
              </span>
              <h2>Uma coleção para diferentes estilos e espaços</h2>
              <p>
                Explore projetos completamente diferentes e encontre referências para praticamente
                qualquer ambiente.
              </p>
            </div>
            <div className="styles">
              {STYLES.map((styleItem) => (
                <article
                  key={styleItem.title}
                  className="style-card reveal"
                  style={styleItem.delay ? ({ '--d': styleItem.delay } as React.CSSProperties) : undefined}
                >
                  <ImageSlot
                    src={styleItem.src}
                    alt={styleItem.alt}
                    width={600}
                    height={450}
                  />
                  <div className="style-card__body">
                    <h3>{styleItem.title}</h3>
                    <p>{styleItem.desc}</p>
                  </div>
                </article>
              ))}
            </div>
            <p className="more reveal">E muito mais...</p>
            <div className="btn-wrap reveal">
              <a href="#oferta" className="btn">
                Ver os 300 projetos
                <Icon name="arrow" className="icon icon--sm" />
              </a>
            </div>
          </div>
        </section>

        {/* 6. TRANSFORMAÇÃO (antes / depois) */}
        <section className="section section--dark">
          <div className="container">
            <div className="transform">
              <div className="transform__text reveal">
                <span className="eyebrow eyebrow--gold">
                  <Icon name="sparkles" />
                  Transformação
                </span>
                <h2>Pare de olhar para um espaço vazio sem saber o que fazer</h2>
                <p>
                  Ter boas referências muda completamente a maneira de planejar um jardim. Você
                  consegue visualizar combinações, comparar estilos e descobrir soluções que talvez
                  nunca tivesse imaginado.
                </p>
              </div>
              <div className="reveal" style={{ '--d': '120ms' } as React.CSSProperties}>
                <div className="ba">
                  <figure className="ba__item ba__item--before">
                    <ImageSlot
                      src="/images/antes.png"
                      alt="Espaço externo antes do planejamento de paisagismo"
                      width={600}
                      height={800}
                    >
                      <span className="ba__tag">ANTES</span>
                    </ImageSlot>
                    <figcaption>Espaço sem planejamento</figcaption>
                  </figure>
                  <figure className="ba__item ba__item--after">
                    <ImageSlot
                      src="/images/depois.png"
                      alt="Espaço externo depois do paisagismo, organizado e verde"
                      width={600}
                      height={800}
                    >
                      <span className="ba__tag">DEPOIS</span>
                    </ImageSlot>
                    <figcaption>Ambiente organizado, verde e valorizado</figcaption>
                  </figure>
                </div>
                <p className="ba__note">Imagens meramente ilustrativas.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 7. PARA QUEM É */}
        <section className="section section--sand">
          <div className="container">
            <div className="forwho">
              <div className="forwho__head reveal">
                <span className="eyebrow">
                  <Icon name="sprout" />
                  Para quem é
                </span>
                <h2>Os projetos são ideais para quem...</h2>
                <p>
                  Seja para a própria casa ou para apresentar a clientes, a coleção ajuda a sair do
                  zero com mais clareza.
                </p>
              </div>
              <ul className="forwho__list">
                {FOR_WHO_ITEMS.map((text, index) => (
                  <li
                    key={text}
                    className="reveal"
                    style={
                      index > 0 ? ({ '--d': `${index * 50}ms` } as React.CSSProperties) : undefined
                    }
                  >
                    <span className="check-dot">
                      <Icon name="check" className="icon icon--xs" />
                    </span>
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 8. BÔNUS */}
        <section className="section section--white">
          <div className="container">
            <div className="section-head reveal">
              <span className="eyebrow">
                <Icon name="gift" />
                Bônus exclusivos
              </span>
              <h2>Comprando hoje você também recebe</h2>
            </div>
            <div className="bonus-grid">
              <article className="bonus reveal">
                <div className="bonus__media">
                  <span className="bonus__num">BÔNUS 01</span>
                  <span className="bonus__free">
                    <Icon name="gift" className="icon icon--xs" />
                    GRÁTIS HOJE
                  </span>
                  <ImageSlot
                    src="/images/bonus-01.png"
                    alt="Bônus: Guia de Plantas Ornamentais"
                    width={800}
                    height={550}
                  />
                </div>
                <div className="bonus__body">
                  <h3>Guia de Plantas Ornamentais</h3>
                  <p>
                    Uma referência complementar para conhecer opções de plantas utilizadas em
                    diferentes estilos de jardim.
                  </p>
                </div>
              </article>
              <article className="bonus reveal" style={{ '--d': '120ms' } as React.CSSProperties}>
                <div className="bonus__media">
                  <span className="bonus__num">BÔNUS 02</span>
                  <span className="bonus__free">
                    <Icon name="gift" className="icon icon--xs" />
                    GRÁTIS HOJE
                  </span>
                  <ImageSlot
                    src="/images/bonus-02.png"
                    alt="Bônus: Guia de Jardins de Baixa Manutenção"
                    width={800}
                    height={550}
                  />
                </div>
                <div className="bonus__body">
                  <h3>Guia de Jardins de Baixa Manutenção</h3>
                  <p>
                    Ideias e referências para criar espaços bonitos priorizando praticidade nos
                    cuidados.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* 9. COMO VOU RECEBER? */}
        <section className="section section--mist">
          <div className="container">
            <div className="section-head reveal">
              <span className="eyebrow">
                <Icon name="devices" />
                Acesso
              </span>
              <h2>Como recebo os 300 Projetos de Paisagismo?</h2>
            </div>
            <div className="steps">
              <article className="step reveal">
                <div className="step__top">
                  <span className="step__num">01</span>
                  <span className="step__icon">
                    <Icon name="bag" />
                  </span>
                </div>
                <h3>Faça seu pedido</h3>
                <p>Clique no botão de compra e conclua seu pedido.</p>
              </article>
              <article className="step reveal" style={{ '--d': '100ms' } as React.CSSProperties}>
                <div className="step__top">
                  <span className="step__num">02</span>
                  <span className="step__icon">
                    <Icon name="card" />
                  </span>
                </div>
                <h3>Pagamento confirmado</h3>
                <p>Assim que o pagamento for identificado, seu acesso será liberado.</p>
              </article>
              <article className="step reveal" style={{ '--d': '200ms' } as React.CSSProperties}>
                <div className="step__top">
                  <span className="step__num">03</span>
                  <span className="step__icon">
                    <Icon name="devices" />
                  </span>
                </div>
                <h3>Acesse seu material</h3>
                <p>
                  Receba as instruções para acessar seu material digital pelo celular, computador ou
                  tablet.
                </p>
              </article>
            </div>
            <ul className="perks reveal">
              <li className="perk">
                <Icon name="card" />
                Pagamento único
              </li>
              <li className="perk">
                <Icon name="infinity" />
                Acesso vitalício
              </li>
              <li className="perk">
                <Icon name="cloud" />
                Material 100% digital
              </li>
              <li className="perk">
                <Icon name="book" />
                Consulte quando quiser
              </li>
            </ul>
          </div>
        </section>

        {/* 10. DEPOIMENTOS */}
        <section className="section section--white">
          <div className="container">
            <div className="section-head reveal">
              <span className="eyebrow">
                <Icon name="star" />
                Depoimentos
              </span>
              <h2>Veja o que nossos clientes estão dizendo</h2>
            </div>
            <div className="testi" role="list">
              {TESTIMONIALS.map((item) => (
                <figure
                  key={item.src}
                  className="testi__card reveal"
                  role="listitem"
                  style={item.delay ? ({ '--d': item.delay } as React.CSSProperties) : undefined}
                >
                  <div className="testi__stars" aria-label="5 estrelas">
                    <Icon name="star" />
                    <Icon name="star" />
                    <Icon name="star" />
                    <Icon name="star" />
                    <Icon name="star" />
                  </div>
                  <ImageSlot
                    src={item.src}
                    alt={item.alt}
                    width={600}
                    height={400}
                    isTestimonial
                  />
                </figure>
              ))}
            </div>
            <p className="testi-hint">
              Arraste para ver mais
              <Icon name="swipe" className="icon icon--sm" />
            </p>
          </div>
        </section>

        {/* Faixa de oferta */}
        <div className="strip">
          <div className="strip__inner">
            <Icon name="sparkles" />
            <span>Oferta especial por tempo limitado</span>
            <Icon name="sparkles" />
          </div>
        </div>

        {/* 11. OFERTA FINAL */}
        <section className="section section--dark offer" id="oferta" ref={ofertaRef}>
          <div className="container">
            <div className="offer__box reveal">
              <span className="eyebrow eyebrow--gold">
                <Icon name="sparkles" />
                Oferta especial
              </span>
              <h2>
                Tenha acesso aos <em>300 Projetos de Paisagismo</em>
              </h2>
              <ul className="offer__list">
                <li>
                  <span className="check-dot">
                    <Icon name="check" className="icon icon--xs" />
                  </span>
                  300 projetos e referências
                </li>
                <li>
                  <span className="check-dot">
                    <Icon name="check" className="icon icon--xs" />
                  </span>
                  Diferentes estilos de paisagismo
                </li>
                <li>
                  <span className="check-dot">
                    <Icon name="check" className="icon icon--xs" />
                  </span>
                  Informações práticas dos projetos
                </li>
                <li>
                  <span className="check-dot">
                    <Icon name="check" className="icon icon--xs" />
                  </span>
                  Acesso digital
                </li>
                <li>
                  <span className="check-dot">
                    <Icon name="check" className="icon icon--xs" />
                  </span>
                  Acesso vitalício
                </li>
                <li>
                  <span className="check-dot">
                    <Icon name="check" className="icon icon--xs" />
                  </span>
                  2 bônus especiais
                </li>
              </ul>
              <div className="offer__price">
                <p className="price-card__from">
                  De <s>R$ 29,90</s>
                </p>
                <p className="price-card__label">Por apenas:</p>
                <p className="price">
                  <span className="price__cur">R$</span>
                  <span className="price__val">9,90</span>
                </p>
                <span className="offer__once">PAGAMENTO ÚNICO</span>
              </div>
              <a
                href={CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--xl"
              >
                Sim, quero acessar os 300 projetos
              </a>
              <p className="btn-note">
                <Icon name="lock" className="icon icon--sm" />
                Compra segura<span className="dot">•</span>Acesso digital
              </p>
            </div>
          </div>
        </section>

        {/* 12. COMPRA SEGURA */}
        <section className="section section--sand">
          <div className="container">
            <div className="section-head reveal">
              <h2>Sua compra é simples e segura</h2>
            </div>
            <div className="trust-grid">
              <article className="trust reveal">
                <span className="trust__icon">
                  <Icon name="shield" />
                </span>
                <div>
                  <h3>Pagamento Seguro</h3>
                  <p>Ambiente protegido durante sua compra.</p>
                </div>
              </article>
              <article className="trust reveal" style={{ '--d': '100ms' } as React.CSSProperties}>
                <span className="trust__icon">
                  <Icon name="cloud" />
                </span>
                <div>
                  <h3>Acesso Digital</h3>
                  <p>Receba as informações de acesso após a confirmação.</p>
                </div>
              </article>
              <article className="trust reveal" style={{ '--d': '200ms' } as React.CSSProperties}>
                <span className="trust__icon">
                  <Icon name="card" />
                </span>
                <div>
                  <h3>Pagamento Único</h3>
                  <p>Sem mensalidades para manter acesso ao material.</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* 13. FAQ */}
        <section className="section section--white">
          <div className="container">
            <div className="section-head reveal">
              <h2>Perguntas Frequentes</h2>
            </div>
            <div className="faq">
              {FAQS.map((item) => {
                const isOpen = openFaq === item.id;
                const contentEl = faqContentRefs.current[item.id];
                const maxHeight = isOpen && contentEl ? `${contentEl.scrollHeight}px` : undefined;

                return (
                  <div key={item.id} className={`faq-item reveal ${isOpen ? 'is-open' : ''}`}>
                    <button
                      type="button"
                      className="faq-button"
                      aria-expanded={isOpen}
                      aria-controls={item.id}
                      id={`${item.id}-btn`}
                      onClick={() => toggleFaq(item.id)}
                    >
                      <span>{item.question}</span>
                      <span className="faq-icon" aria-hidden="true">
                        <Icon name="chevron" className="icon icon--sm" />
                      </span>
                    </button>
                    <div
                      className="faq-content-wrapper"
                      id={item.id}
                      role="region"
                      aria-labelledby={`${item.id}-btn`}
                      style={{ maxHeight }}
                    >
                      <div
                        className="faq-content"
                        ref={(el) => {
                          faqContentRefs.current[item.id] = el;
                        }}
                      >
                        {item.answer}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer" ref={footerRef}>
        <div className="container">
          <div className="footer__logo">
            <Icon name="leaf" />
            300 Projetos de Paisagismo
          </div>
          <nav className="footer__links" aria-label="Links institucionais">
            <button type="button" onClick={() => setActiveModal('privacy')}>
              Política de Privacidade
            </button>
            <button type="button" onClick={() => setActiveModal('terms')}>
              Termos de Uso
            </button>
            <button type="button" onClick={() => setActiveModal('contact')}>
              Contato
            </button>
          </nav>
          <p>© 2026 Rep Ebooks. Todos os direitos reservados.</p>
          <p className="footer__by">by rep ebooks</p>
        </div>
      </footer>

      {/* CTA flutuante (mobile) */}
      <div className={`sticky-cta ${showStickyCta ? 'is-shown' : ''}`} aria-hidden={!showStickyCta}>
        <div className="sticky-cta__info">
          <strong>300 Projetos de Paisagismo</strong>
          <span>Pagamento único • Acesso vitalício</span>
        </div>
        <a
          href={CHECKOUT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
          tabIndex={showStickyCta ? 0 : -1}
        >
          Acessar por R$9,90
        </a>
      </div>

      <LegalModal activeModal={activeModal} onClose={() => setActiveModal(null)} />
    </>
  );
}
