import { SiteContent } from '../types/cms';

export const DEFAULT_CONTENT: SiteContent = {
  brand: {
    name: 'WE-TECH',
    location: {
      pt: 'Bissau, Guiné-Bissau',
      fr: 'Bissau, Guinée-Bissau',
      en: 'Bissau, Guinea-Bissau',
    },
  },
  nav: {
    services: {
      pt: 'Serviços',
      fr: 'Services',
      en: 'Services',
    },
    projects: {
      pt: 'Plataformas',
      fr: 'Plateformes',
      en: 'Platforms',
    },
    leadership: {
      pt: 'Direção',
      fr: 'Direction',
      en: 'Executive',
    },
    partnerships: {
      pt: 'Parcerias',
      fr: 'Partenariats',
      en: 'Partnerships',
    },
    contactCta: {
      pt: 'Contactar',
      fr: 'Contacter',
      en: 'Contact Us',
    },
  },
  hero: {
    kicker: {
      pt: 'Bissau, Guiné-Bissau · Tecnologia & Serviços Digitais',
      fr: 'Bissau, Guinée-Bissau · Technologie & Services Numériques',
      en: 'Bissau, Guinea-Bissau · Digital Technology & Services',
    },
    headline: {
      pt: 'Infraestrutura digital concebida para o quotidiano de Bissau',
      fr: 'L’infrastructure numérique conçue pour le quotidien à Bissau',
      en: 'Digital infrastructure built for everyday life in Bissau',
    },
    subheadline: {
      pt: 'A WE-TECH desenvolve plataformas locais de comércio, restauração, mobilidade e saúde — e presta serviços completos de engenharia, marketing e equipamento informático através da sua filial Bissau Digital.',
      fr: 'WE-TECH développe des plateformes locales de commerce, restauration, mobilité et santé — et délivre des services complets d’ingénierie, marketing et matériel informatique via sa filiale Bissau Digital.',
      en: 'WE-TECH builds local platforms for commerce, food delivery, mobility, and healthcare — alongside full-service digital engineering, marketing, and IT hardware through its subsidiary Bissau Digital.',
    },
    primaryCta: {
      pt: 'Explorar Plataformas',
      fr: 'Découvrir les Plateformes',
      en: 'Explore Platforms',
    },
    secondaryCta: {
      pt: 'Serviços Bissau Digital',
      fr: 'Services Bissau Digital',
      en: 'Bissau Digital Services',
    },
    imageKey: 'heroStudio',
    imageAlt: {
      pt: 'Equipa técnica da WE-TECH em Bissau a colaborar em aplicações móveis e plataformas digitais',
      fr: 'Équipe technique de WE-TECH à Bissau collaborant sur des applications mobiles et plateformes numériques',
      en: 'WE-TECH engineering team in Bissau collaborating on mobile applications and digital platforms',
    },
    metrics: [
      {
        value: '04',
        label: {
          pt: 'Plataformas Próprias',
          fr: 'Plateformes Propriétaires',
          en: 'Proprietary Platforms',
        },
        context: {
          pt: 'BindiCumpra, Kummy, Bissau Go e FarmaGo',
          fr: 'BindiCumpra, Kummy, Bissau Go et FarmaGo',
          en: 'BindiCumpra, Kummy, Bissau Go & FarmaGo',
        },
      },
      {
        value: '05',
        label: {
          pt: 'Áreas Bissau Digital',
          fr: 'Pôles Bissau Digital',
          en: 'Bissau Digital Divisions',
        },
        context: {
          pt: 'Web, Apps Mobile, Marketing, Design UX/UI e Hardware',
          fr: 'Web, Apps Mobile, Marketing, Design UX/UI et Matériel',
          en: 'Web, Mobile Apps, Marketing, UX/UI Design & Hardware',
        },
      },
      {
        value: '100%',
        label: {
          pt: 'Pagamentos Locais',
          fr: 'Paiements Locaux',
          en: 'Local Payments',
        },
        context: {
          pt: 'Orange Money, MTN Mobile Money e numerário integrados',
          fr: 'Orange Money, MTN Mobile Money et espèces intégrés',
          en: 'Orange Money, MTN Mobile Money & cash integrated',
        },
      },
      {
        value: '2026',
        label: {
          pt: 'Lançamentos Ativos',
          fr: 'Déploiements Actifs',
          en: 'Active Rollouts',
        },
        context: {
          pt: 'MVPs concluídos e parcerias operacionais no terreno',
          fr: 'MVP finalisés et partenariats opérationnels sur le terrain',
          en: 'MVPs completed with live field partnerships',
        },
      },
    ],
  },
  bissauDigital: {
    kicker: {
      pt: 'Filial Operacional · Bissau Digital',
      fr: 'Filiale Opérationnelle · Bissau Digital',
      en: 'Operational Subsidiary · Bissau Digital',
    },
    title: {
      pt: 'Bissau Digital: engenharia, design e crescimento para empresas e instituições',
      fr: 'Bissau Digital : ingénierie, design et croissance pour entreprises et institutions',
      en: 'Bissau Digital: engineering, design, and growth for businesses and institutions',
    },
    subtitle: {
      pt: 'Transformação digital feita por quem conhece a Guiné-Bissau. Soluções completas, da estratégia ao código, da infraestrutura ao marketing — otimizadas para ligações móveis locais e telemóveis de entrada.',
      fr: 'Transformation numérique conçue par ceux qui connaissent la Guinée-Bissau. Des solutions complètes, de la stratégie au code, de l’infrastructure au marketing — optimisées pour les connexions locales et mobiles d’entrée de gamme.',
      en: 'Digital transformation built by people who know Guinea-Bissau. End-to-end solutions from strategy to code, infrastructure to marketing — optimized for local mobile networks and entry-level smartphones.',
    },
    websiteUrl: 'https://bissaudigital.tech',
    websiteLabel: {
      pt: 'Visitar bissaudigital.tech',
      fr: 'Visiter bissaudigital.tech',
      en: 'Visit bissaudigital.tech',
    },
    trustNote: {
      pt: 'Primeira consulta gratuita · Resposta em até 24 horas',
      fr: 'Première consultation gratuite · Réponse sous 24 heures',
      en: 'Free initial consultation · Response within 24 hours',
    },
    trackRecordTitle: {
      pt: 'Experiência comprovada no terreno em Bissau',
      fr: 'Expérience prouvée sur le terrain à Bissau',
      en: 'Proven track record on the ground in Bissau',
    },
    trackRecordItems: {
      pt: [
        'Soluções institucionais (DGCI: gestão de multas com OCR, consulta NIF e agente de IA no WhatsApp para dúvidas fiscais)',
        'Projetos para o setor da saúde (Saúde Bandim) e instituições universitárias em Bissau',
        'Equipa local com mais de 8 anos de experiência em projetos públicos e privados na África Ocidental',
      ],
      fr: [
        'Solutions institutionnelles (DGCI : gestion des amendes par OCR, consultation NIF et agent IA WhatsApp fiscal)',
        'Projets pour le secteur de la santé (Saúde Bandim) et établissements universitaires à Bissau',
        'Équipe locale avec plus de 8 ans d’expérience sur des projets publics et privés en Afrique de l’Ouest',
      ],
      en: [
        'Institutional systems (DGCI: OCR fine management, NIF lookup, and WhatsApp AI tax assistant)',
        'Healthcare & academic deployments (Saúde Bandim and local universities in Bissau)',
        'Local engineering team with 8+ years delivering public and private digital projects in West Africa',
      ],
    },
    imageKey: 'bissauDigitalTeam',
    imageAlt: {
      pt: 'Especialistas da Bissau Digital a conceber interfaces móveis e estratégias digitais em Bissau',
      fr: 'Spécialistes de Bissau Digital concevant des interfaces mobiles et stratégies numériques à Bissau',
      en: 'Bissau Digital specialists designing mobile interfaces and digital strategies in Bissau',
    },
    services: [
      {
        id: 'web-dev',
        number: '01',
        title: {
          pt: 'Criação de Sites & Plataformas Web',
          fr: 'Création de Sites & Plateformes Web',
          en: 'Website & Web Platform Development',
        },
        summary: {
          pt: 'Sites institucionais, portais e plataformas de comércio eletrónico rápidos, responsivos e preparados para redes com largura de banda reduzida.',
          fr: 'Sites institutionnels, portails et plateformes e-commerce rapides, responsives et optimisés pour les connexions à faible débit.',
          en: 'Fast, responsive corporate websites, portals, and e-commerce platforms engineered for low-bandwidth networks.',
        },
        deliverables: {
          pt: ['Sites institucionais em 2 a 3 semanas', 'Plataformas web e e-commerce (4 a 8 semanas)', 'Otimização SEO técnica e velocidade móvel'],
          fr: ['Sites vitrines livrés en 2 à 3 semaines', 'Plateformes web et e-commerce (4 à 8 semaines)', 'Optimisation SEO technique et performance mobile'],
          en: ['Corporate websites delivered in 2–3 weeks', 'Custom web & e-commerce platforms (4–8 weeks)', 'Technical SEO & mobile speed optimization'],
        },
        highlight: {
          pt: 'Carregamento leve adaptado à realidade da conectividade na Guiné-Bissau.',
          fr: 'Chargement léger adapté à la réalité de la connectivité en Guinée-Bissau.',
          en: 'Lightweight loading tailored to connectivity conditions in Guinea-Bissau.',
        },
      },
      {
        id: 'mobile-apps',
        number: '02',
        title: {
          pt: 'Aplicações Móveis Android & iOS',
          fr: 'Applications Mobiles Android & iOS',
          en: 'Android & iOS Mobile Applications',
        },
        summary: {
          pt: 'Aplicações nativas e híbridas com arquitetura offline-first e integração direta de pagamentos móveis locais.',
          fr: 'Applications natives et hybrides avec architecture offline-first et intégration directe des paiements mobiles locaux.',
          en: 'Native and cross-platform apps featuring offline-first architecture and direct local mobile money integration.',
        },
        deliverables: {
          pt: ['Integração Orange Money e MTN Mobile Money', 'Funcionamento offline-first e sincronização leve', 'Painéis de gestão e APIs escaláveis'],
          fr: ['Intégration Orange Money et MTN Mobile Money', 'Mode offline-first et synchronisation légère', 'Tableaux de bord de gestion et APIs évolutives'],
          en: ['Orange Money & MTN Mobile Money integration', 'Offline-first mode with resilient sync', 'Management dashboards & scalable APIs'],
        },
        highlight: {
          pt: 'Construídas para telemóveis Android de uso corrente e fluxos de pagamento locais.',
          fr: 'Conçues pour les smartphones Android courants et les flux de paiement locaux.',
          en: 'Engineered for everyday Android handsets and local payment flows.',
        },
      },
      {
        id: 'digital-marketing',
        number: '03',
        title: {
          pt: 'Marketing Digital & Crescimento',
          fr: 'Marketing Digital & Croissance',
          en: 'Digital Marketing & Growth',
        },
        summary: {
          pt: 'Estratégias de aquisição, gestão de redes sociais, campanhas digitais e posicionamento em motores de busca para a África Ocidental.',
          fr: 'Stratégies d’acquisition, gestion des réseaux sociaux, campagnes publicitaires et référencement SEO pour l’Afrique de l’Ouest.',
          en: 'Customer acquisition strategies, social media management, paid campaigns, and search visibility for West Africa.',
        },
        deliverables: {
          pt: ['Campanhas orientadas para conversão e WhatsApp', 'Gestão editorial multilingue (PT / FR / Crioulo)', 'SEO local e relatórios mensais mensuráveis'],
          fr: ['Campagnes orientées conversion et WhatsApp', 'Gestion éditoriale multilingue (PT / FR / Créole)', 'SEO local et rapports de performance mensuels'],
          en: ['Conversion & WhatsApp lead-generation campaigns', 'Multilingual editorial content (PT / FR / Creole)', 'Local SEO & measurable monthly reporting'],
        },
        highlight: {
          pt: 'Comunicação digital alinhada com os hábitos culturais e linguísticos locais.',
          fr: 'Communication digitale alignée sur les usages culturels et linguistiques locaux.',
          en: 'Digital communication aligned with local cultural and linguistic habits.',
        },
      },
      {
        id: 'ux-design',
        number: '04',
        title: {
          pt: 'Design UX/UI & Prototipagem',
          fr: 'Design UX/UI & Prototypage',
          en: 'UX/UI Design & Prototyping',
        },
        summary: {
          pt: 'Maquetes interativas e sistemas visuais mobile-first para validar cada fluxo de utilizador antes do desenvolvimento.',
          fr: 'Maquettes interactives et systèmes visuels mobile-first pour valider chaque parcours utilisateur avant le développement.',
          en: 'Interactive prototypes and mobile-first design systems to validate every user journey prior to engineering.',
        },
        deliverables: {
          pt: ['Protótipos clicáveis de alta fidelidade', 'Interfaces acessíveis para novos utilizadores digitais', 'Identidade visual e sistemas de design'],
          fr: ['Prototypes cliquables haute fidélité', 'Interfaces accessibles aux primo-utilisateurs du numérique', 'Identité visuelle et design systems'],
          en: ['High-fidelity clickable prototypes', 'Accessible interfaces for first-time digital users', 'Brand identity & component design systems'],
        },
        highlight: {
          pt: 'Cada ecrã é testado para clareza imediata e baixa fricção.',
          fr: 'Chaque écran est conçu pour une clé immédiate et une friction minimale.',
          en: 'Every screen is crafted for immediate clarity and minimal friction.',
        },
      },
      {
        id: 'hardware-it',
        number: '05',
        title: {
          pt: 'Fornecimento de Material Informático & TI',
          fr: 'Fourniture de Matériel Informatique & IT',
          en: 'IT Hardware Supply & Infrastructure',
        },
        summary: {
          pt: 'Aprovisionamento, configuração e suporte de equipamentos profissionais para escritórios, equipas comerciais e instituições.',
          fr: 'Approvisionnement, configuration et maintenance d’équipements professionnels pour bureaux, commerces et institutions.',
          en: 'Procurement, setup, and support of professional hardware for offices, retail teams, and institutions.',
        },
        deliverables: {
          pt: ['Computadores portáteis, estações de trabalho e servidores', 'Terminais de ponto de venda (POS) e redes empresariais', 'Instalação, garantia e assistência técnica em Bissau'],
          fr: ['Ordinateurs portables, postes de travail et serveurs', 'Terminaux de point de vente (POS) et réseaux d’entreprise', 'Installation, garantie et support technique à Bissau'],
          en: ['Laptops, workstations & enterprise servers', 'Point-of-sale (POS) terminals & office networking', 'On-site installation, warranty & support in Bissau'],
        },
        highlight: {
          pt: 'A ponte completa entre o software da empresa e o equipamento no terreno.',
          fr: 'Le lien complet entre vos outils logiciels et votre équipement sur le terrain.',
          en: 'Bridging enterprise software with reliable hardware in the field.',
        },
      },
    ],
  },
  projectsSection: {
    kicker: {
      pt: 'Portefólio de Plataformas · Guiné-Bissau',
      fr: 'Portefeuille de Plateformes · Guinée-Bissau',
      en: 'Platform Portfolio · Guinea-Bissau',
    },
    title: {
      pt: 'Quatro plataformas concebidas para necessidades concretas em Bissau',
      fr: 'Quatre plateformes conçues pour des besoins concrets à Bissau',
      en: 'Four platforms engineered for concrete daily needs in Bissau',
    },
    subtitle: {
      pt: 'Comprar e vender, encomendar refeições, deslocar-se pela cidade e aceder a medicamentos — cada projeto resolve um desafio quotidiano com tecnologia local.',
      fr: 'Acheter et vendre, se faire livrer un repas, se déplacer en ville et accéder à une pharmacie — chaque projet répond à un besoin concret avec une technologie locale.',
      en: 'Buying and selling, ordering meals, moving across the city, and accessing pharmacies — each platform solves an everyday challenge with locally adapted technology.',
    },
    allFilterLabel: {
      pt: 'Visão Geral',
      fr: 'Vue d’ensemble',
      en: 'Overview',
    },
    tableHeaders: {
      project: { pt: 'Plataforma', fr: 'Plateforme', en: 'Platform' },
      what: { pt: 'O que oferece', fr: 'Ce que c’est', en: 'What it is' },
      audience: { pt: 'Destinatários', fr: 'Pour qui', en: 'Target Audience' },
      status: { pt: 'Estado', fr: 'Avancement', en: 'Status' },
    },
    platforms: [
      {
        id: 'bindicumpra',
        name: 'BindiCumpra',
        category: {
          pt: 'Marketplace Agritech',
          fr: 'Marketplace Agritech',
          en: 'Agritech Marketplace',
        },
        modelReference: {
          pt: 'Comércio Local & Campo',
          fr: 'Commerce Local & Terrain',
          en: 'Local & Field Commerce',
        },
        tagline: {
          pt: 'Marketplace onde vendedores locais apresentam os seus produtos a compradores num só lugar',
          fr: 'Une marketplace où les vendeurs proposent leurs produits aux acheteurs en ligne',
          en: 'An online marketplace connecting local sellers directly with buyers in one place',
        },
        description: {
          pt: 'Orientada para o setor agritech na Guiné-Bissau, a BindiCumpra permite a qualquer produtor ou comerciante publicar anúncios e alcançar mais clientes — mesmo sem experiência prévia com ferramentas digitais, graças ao acompanhamento presencial de agentes de terreno.',
          fr: 'Orientée agritech en Guinée-Bissau, BindiCumpra permet aux vendeurs de publier leurs annonces et de toucher plus d’acheteurs — y compris ceux peu familiers avec le numérique, grâce à des agents de terrain qui accompagnent leur inscription.',
          en: 'Focused on Guinea-Bissau’s agritech economy, BindiCumpra enables sellers to publish listings and reach wider audiences — including merchants unfamiliar with digital tools, supported by field agents during onboarding.',
        },
        forSideA: {
          label: { pt: 'Para os vendedores', fr: 'Pour les vendeurs', en: 'For sellers' },
          detail: {
            pt: 'Montra digital para apresentar produtos, ampliar vendas e contar com apoio presencial no registo.',
            fr: 'Une vitrine pour présenter leurs produits, toucher plus d’acheteurs et être accompagnés sur le terrain.',
            en: 'A digital storefront to showcase products, reach more buyers, and receive in-person onboarding.',
          },
        },
        forSideB: {
          label: { pt: 'Para os compradores', fr: 'Pour les acheteurs', en: 'For buyers' },
          detail: {
            pt: 'Um ponto único de pesquisa e contacto direto com produtores e comerciantes verificados.',
            fr: 'Un endroit unique pour trouver des produits et entrer directement en contact avec les vendeurs.',
            en: 'One unified destination to discover products and contact local sellers directly.',
          },
        },
        payments: {
          pt: 'Orange Money e numerário (os dois meios mais utilizados localmente)',
          fr: 'Orange Money et espèces (les deux moyens les plus utilisés sur place)',
          en: 'Orange Money and cash (the two most widely used local payment methods)',
        },
        businessModel: {
          pt: 'Acesso gratuito inicial, com opções pagas de destaque para maior visibilidade dos produtos.',
          fr: 'Accès gratuit pour démarrer, avec des options payantes pour mieux mettre les produits en avant.',
          en: 'Free entry tier for sellers, with paid promotion options to boost product visibility.',
        },
        status: {
          pt: 'Lançamento previsto: 1 de novembro de 2026',
          fr: 'Lancement prévu : 1er novembre 2026',
          en: 'Scheduled launch: November 1, 2026',
        },
        logoKey: 'bindicumpraLogo',
        visualKey: 'bindicumpraVisual',
        websiteUrl: 'https://bindicumpra.net',
        imageAlt: {
          pt: 'Visuel oficial da BindiCumpra Bissau: a tua nova montra digital na Guiné-Bissau',
          fr: 'Visuel officiel BindiCumpra Bissau : vitrine numérique en Guinée-Bissau',
          en: 'Official BindiCumpra Bissau visual showcasing local marketplace app',
        },
        accentHex: '#047857',
      },
      {
        id: 'kummy',
        name: 'Kummy',
        category: {
          pt: 'Entrega de Refeições',
          fr: 'Livraison de Repas',
          en: 'Food Delivery',
        },
        modelReference: {
          pt: 'Modelo Uber Eats',
          fr: 'Modèle Uber Eats',
          en: 'Uber Eats Model',
        },
        tagline: {
          pt: 'Plataforma de entrega de refeições com frota própria de estafetas em Bissau',
          fr: 'Plateforme de livraison de repas avec sa propre équipe de livreurs à Bissau',
          en: 'Meal delivery platform operating its own dedicated courier fleet in Bissau',
        },
        description: {
          pt: 'Os restaurantes publicam a sua ementa e recebem pedidos num painel dedicado sem se preocuparem com a logística: a Kummy assegura toda a entrega com a sua própria equipa e endereços descritos por bairro e ponto de referência, adaptados a Bissau.',
          fr: 'Les restaurants proposent leur menu sans gérer la logistique : ils préparent la commande et Kummy s’occupe de toute la livraison avec sa propre équipe et des adresses par quartier et point de repère adaptées à Bissau.',
          en: 'Restaurants publish menus and receive orders through an operational dashboard without managing logistics: Kummy handles delivery end-to-end with neighborhood and landmark addressing tailored to Bissau.',
        },
        forSideA: {
          label: { pt: 'Para os restaurantes', fr: 'Pour les restaurants', en: 'For restaurants' },
          detail: {
            pt: 'Painel operacional ativo para receber e gerir pedidos sem organizar logística de entrega.',
            fr: 'Tableau de bord opérationnel pour recevoir et gérer les commandes sans gérer la livraison.',
            en: 'Live restaurant dashboard to receive and manage orders without running delivery logistics.',
          },
        },
        forSideB: {
          label: { pt: 'Para os clientes', fr: 'Pour les clients', en: 'For customers' },
          detail: {
            pt: 'Encomendar refeições com indicação por bairro e ponto de referência claro em Bissau.',
            fr: 'Commander un repas et se le faire livrer avec une adresse par quartier et point de repère.',
            en: 'Order meals delivered directly using intuitive Bissau neighborhood and landmark directions.',
          },
        },
        payments: {
          pt: 'Numerário, Orange Money e MTN Mobile Money',
          fr: 'Espèces, Orange Money et MTN Mobile Money',
          en: 'Cash, Orange Money, and MTN Mobile Money',
        },
        businessModel: {
          pt: 'Comissão sobre as vendas do restaurante e taxa de entrega paga pelo cliente.',
          fr: 'Commission sur les ventes du restaurant et frais de livraison payés par le client.',
          en: 'Commission on restaurant sales plus delivery fee paid by the customer.',
        },
        status: {
          pt: 'Painel restaurante ativo (cliente Papa Loca) · App cliente em desenvolvimento',
          fr: 'Tableau de bord actif (client Papa Loca) · App client en développement',
          en: 'Restaurant dashboard live (Papa Loca onboarded) · Customer app in development',
        },
        logoKey: 'kummyLogo',
        visualKey: 'kummyVisual',
        websiteUrl: 'https://www.kummygo.com/',
        imageAlt: {
          pt: 'Visuel oficial Kummy: a tua comida, rápido em Bissau',
          fr: 'Visuel officiel Kummy : livraison rapide de repas à Bissau',
          en: 'Official Kummy food delivery visual in Bissau',
        },
        accentHex: '#D97706',
      },
      {
        id: 'bissau-go',
        name: 'Bissau Go',
        category: {
          pt: 'Mobilidade & VTC',
          fr: 'Mobilité & VTC',
          en: 'Ride-Hailing / VTC',
        },
        modelReference: {
          pt: 'Modelo Yango · Primeiro VTC de Bissau',
          fr: 'Modèle Yango · Premier VTC à Bissau',
          en: 'Yango Model · First VTC in Bissau',
        },
        tagline: {
          pt: 'O primeiro serviço VTC em Bissau com preço conhecido antecipadamente e sem negociação',
          fr: 'Le premier service de VTC à Bissau avec prix connu à l’avance et sans négociation',
          en: 'Bissau’s first ride-hailing platform with upfront pricing and zero fare negotiation',
        },
        description: {
          pt: 'A Bissau Go moderniza o transporte urbano ao substituir a negociação oral do táxi clássico por uma solicitação simples no telemóvel. Disponibiliza dois modos de tarifa — táxi privado e táxi partilhado — alinhados com os hábitos de deslocação em Bissau.',
          fr: 'Bissau Go remplace la négociation orale du taxi classique par une commande simple sur téléphone. Deux modes de tarification sont prévus : taxi privé et taxi partagé, fidèle à l’usage habituel à Bissau.',
          en: 'Bissau Go modernizes urban transit by replacing verbal fare haggling with instant mobile booking. Offers both Private Taxi and Shared Taxi fare modes tailored to Bissau’s daily commuting habits.',
        },
        forSideA: {
          label: { pt: 'Para os passageiros', fr: 'Pour les passagers', en: 'For passengers' },
          detail: {
            pt: 'Tarifa transparente definida antes da viagem, recolha rápida e escolha entre táxi privado ou partilhado.',
            fr: 'Un prix connu à l’avance, une commande simple sans négociation et le choix privé ou partagé.',
            en: 'Upfront transparent fare before booking, simple dispatch, and private or shared options.',
          },
        },
        forSideB: {
          label: { pt: 'Para os motoristas', fr: 'Pour les chauffeurs', en: 'For drivers' },
          detail: {
            pt: 'Fluxo constante de pedidos adicionais através da aplicação móvel com rotas claras.',
            fr: 'Une source supplémentaire de clients directement via l’application avec trajets clairs.',
            en: 'Consistent stream of incremental ride requests directly through the driver app.',
          },
        },
        payments: {
          pt: 'Tarifa fixa transparente · Pagamento móvel e numerário',
          fr: 'Tarification transparente · Paiement mobile et espèces',
          en: 'Transparent fixed fare · Mobile money & cash',
        },
        businessModel: {
          pt: 'Dois modos de tarifa: Táxi Privado e Táxi Partilhado.',
          fr: 'Deux modes de tarification : Taxi Privé et Taxi Partagé.',
          en: 'Dual fare model: Private Taxi and Shared Taxi.',
        },
        status: {
          pt: 'MVP concluído · Próxima etapa: recrutamento dos primeiros motoristas',
          fr: 'MVP terminé · Prochaine étape : recrutement des premiers chauffeurs',
          en: 'MVP complete · Next phase: onboarding initial drivers',
        },
        logoKey: 'bissauGoLogo',
        visualKey: 'bissauGoVisual',
        imageAlt: {
          pt: 'Visuel oficial Bissau Go: acompanhe o seu táxi em tempo real',
          fr: 'Visuel officiel Bissau Go : suivi du taxi en temps réel sur l’application',
          en: 'Official Bissau Go live taxi tracking app visual',
        },
        accentHex: '#0284C7',
      },
      {
        id: 'farmago',
        name: 'FarmaGo',
        category: {
          pt: 'Saúde & Farmácias',
          fr: 'Santé & Pharmacies',
          en: 'Health & Pharmacies',
        },
        modelReference: {
          pt: 'Geolocalização & Acesso Farmacêutico',
          fr: 'Géolocalisation & Accès Pharmaceutique',
          en: 'Pharmacy Geolocation & Access',
        },
        tagline: {
          pt: 'Plataforma que liga pacientes às farmácias mais próximas com localização exata',
          fr: 'Plateforme reliant patients et pharmacies avec géolocalisation exacte',
          en: 'Platform connecting patients with nearby pharmacies via exact geolocation',
        },
        description: {
          pt: 'A FarmaGo dota os farmacêuticos de um canal digital profissional e permite aos cidadãos localizar com precisão a farmácia mais próxima, verificar disponibilidade e adquirir os seus medicamentos diretamente na plataforma.',
          fr: 'FarmaGo offre aux pharmaciens un canal numérique pour présenter leur officine et permet aux patients de localiser exactement la pharmacie la plus proche et d’acheter leurs médicaments en ligne.',
          en: 'FarmaGo equips pharmacists with a dedicated digital sales channel while helping patients locate the exact nearest pharmacy and purchase medicines seamlessly from the platform.',
        },
        forSideA: {
          label: { pt: 'Para os farmacêuticos', fr: 'Pour les pharmaciens', en: 'For pharmacists' },
          detail: {
            pt: 'Canal digital estruturado para apresentar a farmácia, gerir catálogo e servir mais pacientes.',
            fr: 'Un canal numérique pour présenter leur pharmacie et vendre à un plus grand nombre de patients.',
            en: 'A dedicated digital storefront to present their pharmacy and reach more patients.',
          },
        },
        forSideB: {
          label: { pt: 'Para os pacientes', fr: 'Pour les patients', en: 'For patients' },
          detail: {
            pt: 'Localização exata no mapa e aquisição rápida de medicamentos sem deslocações desnecessárias.',
            fr: 'Localisation exacte de la pharmacie la plus proche et achat rapide de médicaments.',
            en: 'Exact map geolocation of the closest pharmacy and fast medicine ordering.',
          },
        },
        payments: {
          pt: 'Pagamento móvel integrado e numerário na recolha ou entrega',
          fr: 'Paiement mobile intégré et espèces au retrait ou à la livraison',
          en: 'Integrated mobile money and cash upon pickup or delivery',
        },
        businessModel: {
          pt: 'Canal digital B2C para farmácias licenciadas em Bissau.',
          fr: 'Canal numérique B2C dédié aux pharmacies agréées à Bissau.',
          en: 'B2C digital marketplace built for licensed pharmacies in Bissau.',
        },
        status: {
          pt: 'Em estruturação · Abertura para parcerias com farmácias e distribuidores',
          fr: 'En structuration · Ouvert aux partenariats avec pharmacies et distributeurs',
          en: 'In rollout · Open for pharmacy and healthcare distribution partnerships',
        },
        logoKey: 'farmagoLogo',
        visualKey: 'farmagoVisual',
        websiteUrl: 'https://farmago.eurekaconsultingbis.com/',
        imageAlt: {
          pt: 'Visuel oficial FarmaGo: encontre o seu medicamento na Guiné-Bissau',
          fr: 'Visuel officiel FarmaGo : trouvez vos médicaments en Guinée-Bissau',
          en: 'Official FarmaGo visual: find your medicine in Guinea-Bissau',
        },
        accentHex: '#0D9488',
      },
    ],
  },
  synergy: {
    kicker: {
      pt: 'Arquitetura Partilhada · Porque Avançam Juntos',
      fr: 'Architecture Partagée · Pourquoi ces Projets Vont Ensemble',
      en: 'Shared Architecture · Why These Platforms Work Together',
    },
    title: {
      pt: 'Um único núcleo tecnológico e conhecimento de terreno ao serviço de quatro setores',
      fr: 'Un même noyau technique et une expertise terrain au service de quatre secteurs',
      en: 'One unified engineering core and field team powering four essential sectors',
    },
    subtitle: {
      pt: 'Em vez de quatro projetos isolados, a WE-TECH constrói blocos reutilizáveis pensados de raiz para a realidade da Guiné-Bissau.',
      fr: 'Plutôt que quatre projets isolés, WE-TECH déploie des briques technologiques communes pensées pour la réalité bissau-guinéenne.',
      en: 'Rather than four isolated apps, WE-TECH shares foundational infrastructure tailored from day one to Guinea-Bissau.',
    },
    pillars: [
      {
        id: 'payments',
        number: '01',
        title: {
          pt: 'Pagamentos Móveis & Numerário',
          fr: 'Paiement Mobile & Espèces',
          en: 'Mobile Money & Cash Flows',
        },
        description: {
          pt: 'Integração nativa com Orange Money, MTN e conciliação de numerário — os métodos reais utilizados todos os dias em Bissau.',
          fr: 'Intégration native d’Orange Money, MTN et suivi des paiements en espèces — les moyens réellement utilisés au quotidien.',
          en: 'Native integration of Orange Money, MTN, and cash reconciliation matching daily commerce habits in Bissau.',
        },
      },
      {
        id: 'addressing',
        number: '02',
        title: {
          pt: 'Endereços por Bairro & Pontos de Referência',
          fr: 'Adresses par Quartier & Points de Repère',
          en: 'Neighborhood & Landmark Addressing',
        },
        description: {
          pt: 'Geolocalização combinada com referências locais de bairro e conteúdos em português, facilitando entregas e recolhas sem falhas.',
          fr: 'Géolocalisation associée aux quartiers et points de repère locaux, avec interfaces pensées en portugais.',
          en: 'GPS coordinates paired with familiar neighborhood landmarks and Portuguese-first interfaces for accurate dispatch.',
        },
      },
      {
        id: 'shared-team',
        number: '03',
        title: {
          pt: 'Equipa Técnica & Agentes no Terreno',
          fr: 'Équipe Technique & Présence Terrain',
          en: 'Unified Engineering & Field Onboarding',
        },
        description: {
          pt: 'A mesma equipa de engenharia, cultura de produto e rede de agentes acompanha comerciantes, restaurantes, motoristas e farmácias em paralelo.',
          fr: 'La même équipe technique, culture produit et force terrain accompagnent vendeurs, restaurateurs, chauffeurs et pharmaciens en parallèle.',
          en: 'One shared product team and field network onboard merchants, restaurants, drivers, and pharmacies in parallel.',
        },
      },
    ],
  },
  leadership: {
    kicker: {
      pt: 'Fundador & CEO · WE-TECH',
      fr: 'Fondateur & CEO · WE-TECH',
      en: 'Founder & CEO · WE-TECH',
    },
    title: {
      pt: 'Visão empreendedora enraizada na África Ocidental',
      fr: 'Une vision entrepreneuriale ancrée en Afrique de l’Ouest',
      en: 'Entrepreneurial leadership rooted in West Africa',
    },
    ceoName: 'Pape Pathé Pierre Fal',
    ceoRole: {
      pt: 'Fundador & CEO da WE-TECH',
      fr: 'Fondateur & CEO de WE-TECH',
      en: 'Founder & CEO, WE-TECH',
    },
    photoKey: 'ceoPortrait',
    bioHeading: {
      pt: 'Nota Biográfica do CEO',
      fr: 'Biographie du CEO',
      en: 'CEO Biography',
    },
    bioParagraphs: {
      pt: [
        'À frente da WE-TECH e da sua filial operacional Bissau Digital, Pape Pathé Pierre Fal conduz uma estratégia tecnológica pragmática: construir ferramentas digitais que funcionem com fiabilidade nas condições reais do mercado da Guiné-Bissau.',
        'Este espaço biográfico está reservado para acolher em breve a biografia oficial completa de Pape Pathé Pierre Fal, detalhando o seu percurso empreendedor e a sua visão para a transformação digital em Bissau.',
      ],
      fr: [
        'À la tête de WE-TECH et de sa filiale opérationnelle Bissau Digital, Pape Pathé Pierre Fal porte une vision technologique pragmatique : concevoir des plateformes numériques fiables et adaptées aux réalités du terrain en Guinée-Bissau.',
        'Cet espace est réservé pour accueillir prochainement la biographie officielle complète de Pape Pathé Pierre Fal, retraçant son parcours entrepreneurial et sa vision pour la transformation numérique à Bissau.',
      ],
      en: [
        'Leading WE-TECH and its operational subsidiary Bissau Digital, Pape Pathé Pierre Fal champions a pragmatic technology agenda: building reliable digital platforms tailored to real-world market conditions in Guinea-Bissau.',
        'This dedicated section is reserved for Pape Pathé Pierre Fal’s complete official biography, detailing his entrepreneurial journey and vision for digital transformation in Bissau.',
      ],
    },
    bioPendingNotice: {
      pt: 'Espaço reservado para a biografia oficial completa de Pape Pathé Pierre Fal.',
      fr: 'Emplacement réservé pour la biographie officielle complète de Pape Pathé Pierre Fal.',
      en: 'Dedicated space reserved for Pape Pathé Pierre Fal’s full official biography.',
    },
  },
  contact: {
    kicker: {
      pt: 'Colaboração & Parcerias Estratégicas',
      fr: 'Collaboration & Partenariats Stratégiques',
      en: 'Collaboration & Strategic Partnerships',
    },
    title: {
      pt: 'Construa connosco o próximo capítulo digital da Guiné-Bissau',
      fr: 'Construisons ensemble la prochaine étape numérique en Guinée-Bissau',
      en: 'Partner with us on Guinea-Bissau’s next digital chapter',
    },
    subtitle: {
      pt: 'As modalidades de parceria são definidas em conjunto, consoante a plataforma ou serviço da Bissau Digital que mais lhe interessa — investimento, operação comercial, logística ou transformação institucional.',
      fr: 'Les modalités d’un partenariat sont définies ensemble selon le projet ou le service Bissau Digital qui vous intéresse — investissement, déploiement commercial, logistique ou transformation institutionnelle.',
      en: 'Partnership frameworks are tailored collaboratively around the platform or Bissau Digital capability that fits your goals — investment, commercial rollout, logistics, or institutional modernization.',
    },
    email: 'contact@wetechgroupe.com',
    phones: ['+245 957 933 333', '+245 966 797 364'],
    address: {
      pt: 'Bissau, Antula',
      fr: 'Bissau, Antula',
      en: 'Bissau, Antula',
    },
    labels: {
      phones: {
        pt: 'Telefones Diretos',
        fr: 'Téléphones Directs',
        en: 'Direct Phone Numbers',
      },
      email: {
        pt: 'Correio Eletrónico',
        fr: 'Adresse E-mail',
        en: 'Email Address',
      },
      address: {
        pt: 'Endereço',
        fr: 'Adresse',
        en: 'Address',
      },
    },
  },
  footer: {
    tagline: {
      pt: 'Empresa tecnológica sediada em Bissau, Guiné-Bissau. Plataformas digitais próprias e serviços empresariais através da filial Bissau Digital.',
      fr: 'Entreprise du numérique basée à Bissau, Guinée-Bissau. Plateformes propriétaires et services aux entreprises via sa filiale Bissau Digital.',
      en: 'Digital technology company headquartered in Bissau, Guinea-Bissau. Proprietary platforms and enterprise digital services via Bissau Digital.',
    },
    copyright: {
      pt: '© 2026 WE-TECH · Bissau Digital. Todos os direitos reservados.',
      fr: '© 2026 WE-TECH · Bissau Digital. Tous droits réservés.',
      en: '© 2026 WE-TECH · Bissau Digital. All rights reserved.',
    },
    bissauDigitalLink: {
      pt: 'Portal Bissau Digital',
      fr: 'Portail Bissau Digital',
      en: 'Bissau Digital Portal',
    },
  },
};
