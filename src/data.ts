export type Project = {
  id: string;
  index: string;
  title: string;
  tagline: string;
  year: string;
  description: string;
  highlights: string[];
  stack: string[];
  links: { label: string; href: string }[];
  visual: "gamelist" | "raiolaranja" | "qrcode" | "rogertech";
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: "panorama-gamelist",
    index: "01",
    title: "Panorama Gamelist",
    tagline: "Catálogo de jogos retrô",
    year: "2026",
    featured: true,
    description:
      "Catálogo web com cerca de 14.389 jogos retrô de 22 plataformas. Uma interface responsiva pensada para navegar por décadas de história dos games sem fricção — do primeiro scroll à descoberta de um clássico esquecido.",
    highlights: [
      "Infinite scroll com IntersectionObserver para carregar o catálogo sob demanda",
      "Busca client-side e sistema de favoritos com exportação de lista",
      "Tema dark/light com persistência local",
      "Deploy na Vercel com analytics integrado",
    ],
    stack: [
      "JavaScript",
      "IntersectionObserver",
      "LocalStorage",
      "Vercel",
      "Analytics",
    ],
    links: [
      { label: "panoramapanorama.com.br", href: "https://panoramapanorama.com.br/" },
      { label: "versão vercel", href: "https://panorama-games.vercel.app/" },
    ],
    visual: "gamelist",
  },
  {
    id: "raiolaranja",
    index: "02",
    title: "Raiolaranja",
    tagline: "Ferramentas para corredores",
    year: "2026",
    description:
      "Aplicação para corredores com calculadoras de ritmo, velocidade e distância. Desenvolvida em Next.js e TypeScript, com cálculos em tempo real e uma interface mobile-first feita para usar durante o treino.",
    highlights: [
      "Calculadoras de ritmo, velocidade e distância com resultado em tempo real",
      "Interface responsiva com foco em usabilidade mobile",
      "Arquitetura componentizada e deploy preparado para Vercel",
      "Analytics integrado para monitoramento de uso",
    ],
    stack: ["Next.js", "TypeScript", "Vercel", "Analytics"],
    links: [{ label: "raiolaranja.vercel.app", href: "https://raiolaranja.vercel.app/" }],
    visual: "raiolaranja",
  },
  {
    id: "qrcode-gratis",
    index: "03",
    title: "QrCode Grátis",
    tagline: "Gerador de QR Codes",
    year: "2026",
    description:
      "Aplicação web para geração dinâmica de QR Codes, com renderização em tempo real e foco total em simplicidade. Digite, valide e gere códigos instantaneamente, sem cadastro e sem ruído.",
    highlights: [
      "Geração instantânea com renderização em tempo real",
      "Validação de entrada para links e conteúdos personalizados",
      "Estrutura componentizada e otimizada para performance",
      "Deploy preparado para Vercel",
    ],
    stack: ["Web App", "Tempo real", "Vercel"],
    links: [{ label: "qrcodegratis.vercel.app", href: "https://qrcodegratis.vercel.app/" }],
    visual: "qrcode",
  },
  {
    id: "rogertech",
    index: "04",
    title: "Rogertech",
    tagline: "Portfólio profissional",
    year: "2026",
    description:
      "Portfólio para apresentar projetos, experiências e competências em desenvolvimento web. Navegação fluida, visual moderno e arquitetura componentizada, pronta para crescer junto com o trabalho.",
    highlights: [
      "Interface moderna e responsiva com foco em performance",
      "Navegação fluida e experiência do usuário cuidada",
      "Integração com GitHub e deploy na Vercel",
      "Arquitetura componentizada para fácil manutenção",
    ],
    stack: ["React", "TypeScript", "Vercel", "GitHub"],
    links: [{ label: "rogertech.vercel.app", href: "https://rogertech.vercel.app/" }],
    visual: "rogertech",
  },
];

export type Job = {
  period: string;
  role: string;
  company: string;
  summary: string;
  highlights: string[];
};

export const experience: Job[] = [
  {
    period: "Jan 2026 — Jun 2026",
    role: "Desenvolvedor Web & Suporte Digital",
    company: "Panorama",
    summary:
      "Desenvolvimento e manutenção de páginas web, landing pages e listas de produtos, com ajustes de layout, personalização visual e foco em performance e usabilidade.",
    highlights: [
      "Páginas de conversão e conteúdos digitais para apresentação de produtos",
      "Atendimento ao cliente via WhatsApp e plataformas digitais",
      "Participação em estratégias comerciais e soluções digitais",
    ],
  },
  {
    period: "2023 — 2025",
    role: "Analista de TI",
    company: "CELTRANS",
    summary:
      "Suporte técnico nível 1 e 2, presencial e remoto, garantindo a continuidade das operações da CELTRANS, Claro e Embratel.",
    highlights: [
      "Registro, categorização e resolução de incidentes e requisições",
      "Administração de usuários no Active Directory e permissões de acesso",
      "Manutenção preventiva e corretiva de desktops, notebooks e ativos de rede",
      "Documentação técnica e base de conhecimento para usuários e equipe",
    ],
  },
  {
    period: "2016 — 2020",
    role: "Operador da Seção Pessoal de Militar",
    company: "CGABEG · Força Aérea Brasileira",
    summary:
      "Suporte de TI presencial, manutenção de hardware e software, além do controle administrativo do efetivo militar.",
    highlights: [
      "Diagnóstico de sistemas, formatação e manutenção de hardware",
      "Planilhas de controle do efetivo e inspeção de saúde",
      "Registro de militares e civis em sistema informatizado",
    ],
  },
  {
    period: "2015 — 2026",
    role: "Técnico em Informática",
    company: "Rogertech",
    summary:
      "Suporte presencial e remoto, manutenção de computadores e desenvolvimento web para clientes e projetos próprios.",
    highlights: [
      "Formatação, instalação e configuração de Windows, Linux e Android",
      "Montagem e manutenção de desktops e notebooks",
      "Configuração de redes domésticas e desenvolvimento web",
    ],
  },
];

export const education = [
  {
    course: "Ciências da Computação",
    school: "Estácio",
    year: "Conclusão em 2025",
  },
  {
    course: "Técnico em Informática",
    school: "Educandus",
    year: "Conclusão em 2018",
  },
];

export const certifications = [
  {
    name: "NLW Operator — Fullstack",
    org: "Rocketseat",
    year: "2026",
    featured: true,
  },
  {
    name: "Microsoft Azure Fundamentals AZ-900",
    org: "KaSolution",
    year: "2023",
    featured: true,
  },
  {
    name: "Visão Geral do ITIL 4",
    org: "KaSolution",
    year: "2023",
    featured: true,
  },
  {
    name: "Multi Stack React + Python",
    org: "TreinaWeb",
    year: "2022",
    featured: true,
  },
  {
    name: "Web Design: PHP, HTML, CSS, JavaScript",
    org: "Udemy",
    year: "2022",
  },
  { name: "Linguagem JavaScript", org: "Udemy", year: "2022" },
  { name: "Websites com HTML5 e CSS3", org: "DIO", year: "2022" },
  { name: "SQL", org: "Udemy", year: "2022" },
  { name: "Bootstrap 5", org: "Udemy", year: "2022" },
  { name: "Segurança da Informação", org: "iPed", year: "2023" },
  { name: "Segurança da Informação", org: "Bradesco", year: "2022" },
];

export const skillGroups = [
  {
    label: "Front-end",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Vite",
      "HTML",
      "CSS",
      "SASS",
      "Tailwind CSS",
    ],
  },
  {
    label: "Back-end & dados",
    items: ["Node.js", "APIs REST", "SQL"],
  },
  {
    label: "Ferramentas & IA",
    items: [
      "Git",
      "GitHub",
      "Vercel",
      "Analytics",
      "Gemini",
      "DeepSeek",
      "IA aplicada ao desenvolvimento",
    ],
  },
];

export const techMarquee = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Vite",
  "HTML5",
  "CSS3",
  "SASS",
  "Tailwind",
  "SQL",
  "Git",
  "GitHub",
  "Vercel",
];

export const stats = [
  { value: 4, label: "projetos no ar" },
  { value: 14389, label: "jogos catalogados" },
  { value: 22, label: "plataformas retrô" },
  { value: 11, label: "certificações" },
];

export const contact = {
  email: "mroger.dev@gmail.com",
  phone: "+55 21 99905-5127",
  whatsapp: "https://wa.me/5521999055127",
  linkedin: "https://www.linkedin.com/in/matheus-roger-22555b235/",
  github: "https://github.com/i-roger",
  location: "Rio de Janeiro, Brasil",
  resume: "/curriculo-matheus-roger.pdf",
};
