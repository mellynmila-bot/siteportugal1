import { GalleryItem, ReviewItem, ServiceItem, StudioPhoto, FaqItem } from '../types';

export const BUSINESS_INFO = {
  name: 'Nailz by Cataleya',
  tagline: 'Cataleya Gu | Nail Art Pombal 💋 Especialista em unhas decoradas',
  subtitle: 'A tua referência de Nail Art em Pombal',
  address: 'R. Principal, 3100-378 Pombal, Portugal',
  phone: '+351 910 850 882',
  email: 'nailzbycataleya@hotmail.com',
  whatsappNumber: '351910850882',
  whatsappUrl: 'https://wa.me/351910850882',
  instagramUrl: 'https://www.instagram.com/nailzbycataleya',
  instagramHandle: '@nailzbycataleya',
  tiktokUrl: 'https://www.tiktok.com/@nailzbycataleya',
  tiktokHandle: '@nailzbycataleya',
  facebookUrl: 'https://www.facebook.com/people/Nailz-by-Cataleya/61579397540376/?mibextid=wwXIfr&rdid=bOSJqmWMM3f9Ygxx&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1EY2E4wBEt%2F%3Fmibextid%3DwwXIfr',
  googleMapsUrl: 'https://www.google.com/maps/place/Nailz+by+Cataleya/@39.919034,-8.642212,16z/data=!4m6!3m5!1s0xd2243edfeefd055:0x9dfb1c250b48e145!8m2!3d39.8920288!4d-8.6825423!16s%2Fg%2F11xs8kpxw1?hl=pt-BR&entry=ttu&g_ep=EgoyMDI2MTAwNy4wIKXMDSoASAFQAw%3D%3D',
  coordinates: {
    lat: 39.8920288,
    lng: -8.6825423,
  },
  photos: {
    heroPortrait: 'https://i.ibb.co/Ng1ysYgh/Improve-image-quality-2-K-20261013153616.webp',
    aboutPortrait: 'https://i.ibb.co/NgBcnZNV/Improve-image-quality-2-K-20261013154639.webp',
  },
  reelUrl: 'https://www.instagram.com/reel/DaadEMGtRoV/',
  reelEmbedUrl: 'https://www.instagram.com/reel/DaadEMGtRoV/embed/',
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'classic',
    name: 'Nail Art Simples / Clássica',
    category: 'classic',
    tag: 'Elegância Minimal',
    description: 'Detalhes refinados com francesinhas diferenciadas (duplas, invertidas, coloridas ou cromadas), pontos de luz, glitter suave, linhas gráficas finas e acabamento impecável.',
    images: [
      'https://i.ibb.co/M5hQKq6Q/Save-Clip-App-575497956-18321216937256358-2475539574756385057-n.webp',
      'https://i.ibb.co/DgzD0kL6/Save-Clip-App-566427096-18317488249256358-6123297984168627003-n.webp',
      'https://i.ibb.co/Xfn2scSB/Save-Clip-App-562337636-18316671169256358-9154381977632419170-n.webp',
      'https://i.ibb.co/9kqCVDH3/Save-Clip-App-582406606-18322159822256358-553439361431674952-n.webp',
    ],
    popular: false,
  },
  {
    id: 'advanced',
    name: 'Nail Art Avançada',
    category: 'drawing',
    tag: 'Arte À Mão Livre',
    description: 'Desenhos complexos à mão livre, personagens, ilustrações personalizadas, efeitos mármore, chamas, degradês street e técnicas encapsuladas com camadas de profundidade.',
    images: [
      'https://i.ibb.co/ZRL1wddJ/Save-Clip-App-572832634-18320726029256358-5468809410576737595-n.webp',
      'https://i.ibb.co/20B8zkDL/Save-Clip-App-568052151-18318071098256358-1081266455964645425-n.webp',
      'https://i.ibb.co/R4gKB3P4/Save-Clip-App-565659995-18317560831256358-5158438123533487390-n.webp',
      'https://i.ibb.co/jZwpypv6/Save-Clip-App-566644155-18317367028256358-8266108717088554937-n.webp',
    ],
    popular: true,
  },
  {
    id: 'art3d',
    name: 'Nail Art 3D / Joias & Esculturas',
    category: '3d',
    tag: 'Y2K & Alta Joalharia',
    description: 'Flores em alto relevo modeladas em gel, gotas derretidas com efeito cromado, esculturas em gel, correntes, pingentes e aplicação de cristais com fixação duradoura.',
    images: [
      'https://i.ibb.co/DDTBWpwT/Save-Clip-App-817217397-18362531044256358-7234769127331176608-n.webp',
      'https://i.ibb.co/Q3B4Sb92/Save-Clip-App-733743010-18351198067256358-4882125132838377392-n.webp',
      'https://i.ibb.co/7h0Z9DQ/Save-Clip-App-817946489-18362531002256358-2590653499932114930-n.webp',
      'https://i.ibb.co/CKsHSzxB/Save-Clip-App-546720823-18312347992256358-2557004250215384409-n-1.webp',
    ],
    popular: true,
  },
  {
    id: 'pedicure',
    name: 'Pedicure / Nail art',
    category: 'pedicure',
    tag: 'Cuidado Completo & Design',
    description: 'Tratamento e embelezamento completo dos pés com alinhamento, cuticulagem segura, esmaltação em gel e nail art personalizada com máxima durabilidade.',
    images: [
      'https://i.ibb.co/0VQhZLZB/Save-Clip-App-541924478-18311375908256358-1656145941244891991-n.jpg',
    ],
    popular: false,
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-2',
    image: 'https://i.ibb.co/M5hQKq6Q/Save-Clip-App-575497956-18321216937256358-2475539574756385057-n.webp',
  },
  {
    id: 'g-3',
    image: 'https://i.ibb.co/DgzD0kL6/Save-Clip-App-566427096-18317488249256358-6123297984168627003-n.webp',
  },
  {
    id: 'g-4',
    image: 'https://i.ibb.co/Xfn2scSB/Save-Clip-App-562337636-18316671169256358-9154381977632419170-n.webp',
  },
  {
    id: 'g-5',
    image: 'https://i.ibb.co/ZRL1wddJ/Save-Clip-App-572832634-18320726029256358-5468809410576737595-n.webp',
  },
  {
    id: 'g-6',
    image: 'https://i.ibb.co/20B8zkDL/Save-Clip-App-568052151-18318071098256358-1081266455964645425-n.webp',
  },
  {
    id: 'g-7',
    image: 'https://i.ibb.co/R4gKB3P4/Save-Clip-App-565659995-18317560831256358-5158438123533487390-n.webp',
  },
  {
    id: 'g-8',
    image: 'https://i.ibb.co/jZwpypv6/Save-Clip-App-566644155-18317367028256358-8266108717088554937-n.webp',
  },
  {
    id: 'g-9',
    image: 'https://i.ibb.co/DDTBWpwT/Save-Clip-App-817217397-18362531044256358-7234769127331176608-n.webp',
  },
  {
    id: 'g-10',
    image: 'https://i.ibb.co/Q3B4Sb92/Save-Clip-App-733743010-18351198067256358-4882125132838377392-n.webp',
  },
  {
    id: 'g-11',
    image: 'https://i.ibb.co/7h0Z9DQ/Save-Clip-App-817946489-18362531002256358-2590653499932114930-n.webp',
  },
  {
    id: 'g-12',
    image: 'https://i.ibb.co/CKsHSzxB/Save-Clip-App-546720823-18312347992256358-2557004250215384409-n-1.webp',
  },
  {
    id: 'g-13',
    image: 'https://i.ibb.co/0VQhZLZB/Save-Clip-App-541924478-18311375908256358-1656145941244891991-n.jpg',
  },
];

export const STUDIO_PHOTOS: StudioPhoto[] = [
  {
    id: 's-1',
    url: 'https://i.ibb.co/bMnQcCNW/Improve-image-quality-2-K-20261013155346.webp',
    title: 'Bancada Profissional de Nail Art & Equipamento de Alta Precisão',
  },
  {
    id: 's-2',
    url: 'https://i.ibb.co/gZgrGWhY/Improve-image-quality-2-K-20261013155351.webp',
    title: 'Ambiente Privado, Acolhedor e Focado na Tua Experiência VIP',
  },
  {
    id: 's-3',
    url: 'https://i.ibb.co/7JJYpgZP/Improve-image-quality-2-K-20261013155434.webp',
    title: 'Estação de Esterilização, Produtos Certificados UE & Conforto',
  },
];

export const GOOGLE_REVIEWS: ReviewItem[] = [
  {
    id: 'r-1',
    name: 'Beatriz Ferreira',
    rating: 5,
    date: 'Há 2 semanas',
    service: 'Nail Art 3D & Joias',
    text: 'A Cataleya é surreal! Fiz unhas com arte 3D e aguentaram mais de um mês intactas sem partir nenhuma joia. A dedicação e o cuidado com a higiene deixaram-me super tranquila. Não troco por ninguém em Pombal!',
    verified: true,
  },
  {
    id: 'r-2',
    name: 'Inês Carreira',
    rating: 5,
    date: 'Há 1 mês',
    service: 'Nail Art Avançada (Desenho à mão)',
    text: 'Levei uma referência super complexa do Pinterest e a Cataleya desenhou tudo à mão livre na perfeição! Fiquei de boca aberta com a precisão dos traços. O espaço é lindo, limpo e super acolhedor.',
    verified: true,
  },
  {
    id: 'r-3',
    name: 'Margarida Santos',
    rating: 5,
    date: 'Há 3 semanas',
    service: 'Pedicure & Nail Art',
    text: 'Fiz manicure e pedicure com nail art e o resultado ficou incrível. Trabalho limpo, materiais de muita qualidade e pontualidade ímpar.',
    verified: true,
  },
  {
    id: 'r-4',
    name: 'Mariana Duarte',
    rating: 5,
    date: 'Há 1 mês',
    service: 'Nail Art Y2K com Cristais',
    text: 'Experiência de 5 estrelas do início ao fim! Fui super bem recebida, o estúdio transmite muita paz e ela explica cada passo. As unhas ficaram exatamente como sonhei. Recomendo a 1000%!',
    verified: true,
  },
  {
    id: 'r-5',
    name: 'Carolina Silva',
    rating: 5,
    date: 'Há 2 meses',
    service: 'Nail Art Simples / Clássica',
    text: 'Melhor nail artist de toda a região de Leiria e Pombal! Técnica impecável na cutícula russa, sem qualquer dor ou desconforto. As unhas duram 4 semanas como se tivessem sido feitas ontem.',
    verified: true,
  },
  {
    id: 'r-6',
    name: 'Joana Rodrigues',
    rating: 5,
    date: 'Há 2 meses',
    service: 'Nail Art 3D / Joias & Esculturas',
    text: 'A atenção aos detalhes e o profissionalismo da Cataleya são incomparáveis. O agendamento é super prático e ela tira todas as dúvidas. O resultado foi uma verdadeira obra de arte nas minhas mãos!',
    verified: true,
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Quanto tempo dura uma aplicação de gel ou Nail Art?',
    answer: 'Com os devidos cuidados diários, o nosso gel e as decorações duram entre 3 a 4 semanas com excelente fixação, sem levantamentos e sem descolar joias ou elementos 3D. Recomendamos a manutenção regular a cada 3 a 4 semanas para preservar a saúde da unha natural.',
  },
  {
    id: 'faq-2',
    question: 'Como funciona o processo de agendamento pelo WhatsApp?',
    answer: 'Para garantir que o teu horário tem o tempo exato reservado para a tua ideia, utiliza o nosso gerador de mensagens aqui no site. Podes indicar o serviço, enviar fotos de referência, informar se já tens produto de outro espaço e a tua disponibilidade. Ao clicares no botão, a mensagem vai pré-preenchida para o WhatsApp da Cataleya (+351 910 850 882) pronta a enviar!',
  },
  {
    id: 'faq-3',
    question: 'É necessário pagar um sinal para reservar a vaga?',
    answer: 'Para confirmar o teu horário de forma definitiva na agenda e bloquear o período exclusivo para ti, é solicitada uma taxa de reserva (sinal), que é posteriormente descontada do valor final do teu serviço no dia do atendimento.',
  },
  {
    id: 'faq-4',
    question: 'Fazem remoção de produto aplicado noutro salão?',
    answer: 'Sim, realizamos a remoção segura com brocas e técnicas que preservam a integridade da lâmina ungueal. Solicitamos apenas que avises no momento do agendamento (marcando essa opção no gerador de mensagens) para adicionarmos o tempo necessário ao teu atendimento.',
  },
  {
    id: 'faq-5',
    question: 'As joias e decorações 3D caem com facilidade?',
    answer: 'Não! Todas as joias, cristais e flores 3D são encapsuladas e fixadas com géis construtores de alta densidade específicos para alta joalharia em unhas. Podes realizar as tuas tarefas quotidianas normalmente sem medo de perder peças.',
  },
  {
    id: 'faq-6',
    question: 'Onde fica localizado o estúdio em Pombal e tem estacionamento?',
    answer: 'O estúdio situa-se na R. Principal, 3100-378 Pombal, Portugal. É um espaço de fácil acesso com áreas de estacionamento gratuitas e seguras nas imediações para que chegues com toda a tranquilidade.',
  },
];
