import {
  BadgeCheck,
  BriefcaseBusiness,
  Clock3,
  HandCoins,
  Plane,
  Scale,
  Shield,
  ShieldCheck,
  Users,
} from "lucide-react";

export const navItems = [
  { to: "/", label: "Início" },
  { to: "/quem-somos", label: "Quem Somos" },
  { to: "/areas-de-atuacao", label: "Áreas" },
  { to: "/videos", label: "Vídeos" },
  { to: "/depoimentos", label: "Depoimentos" },
  { to: "/contato", label: "Contato" },
] as const;

export const sitePhoneDisplay = "+55 62 8259-7658";
export const sitePhoneDigits = "556282597658";
export const siteWhatsappHref = `https://wa.me/${sitePhoneDigits}`;
export const siteOab = "OAB Nº 67.584";

export const trustSignals = [
  siteOab,
  "Atendimento personalizado",
  "Leitura estratégica do caso",
] as const;

export const homeAreas = [
  {
    icon: BriefcaseBusiness,
    title: "Direito do Trabalho",
    description:
      "Acidente de trabalho, horas extras não pagas, assédio moral, justa causa indevida e outras demandas trabalhistas.",
    to: "/areas-de-atuacao/direito-do-trabalho",
  },
  {
    icon: ShieldCheck,
    title: "Direito do Consumidor",
    description:
      "Compras online, produtos com defeito, propaganda enganosa, atraso na entrega e cláusulas abusivas.",
    to: "/areas-de-atuacao/direito-do-consumidor",
  },
  {
    icon: Scale,
    title: "Direito Civil",
    description:
      "Questões patrimoniais, contratuais e conflitos civis tratados com técnica, discrição e acompanhamento próximo.",
    to: "/areas-de-atuacao/direito-civil-e-familia",
  },
  {
    icon: HandCoins,
    title: "Direito Previdenciário",
    description:
      "Aposentadorias, auxílio-doença, auxílio-acidente, pensão por morte, salário-maternidade e BPC/LOAS.",
    to: "/areas-de-atuacao/direito-previdenciario",
  },
  {
    icon: Plane,
    title: "Direito do Passageiro Aéreo",
    description:
      "Atrasos, cancelamentos, overbooking, bagagem extraviada e reembolso em situações de transporte aéreo.",
    to: "/areas-de-atuacao/direito-do-passageiro-aereo",
  },
];

export const differentiators = [
  {
    icon: Shield,
    title: "Ética e transparência",
    description:
      "Pautamos nossa atuação pelos princípios da probidade e da lealdade processual, mantendo os clientes devidamente cientificados quanto ao andamento processual e às estratégias jurídicas adotadas em cada demanda.",
  },
  {
    icon: BadgeCheck,
    title: "Experiência consolidada",
    description:
      "Mais de 7 anos de exercício da advocacia nos conferiram sólida bagagem jurisprudencial e doutrinária, resultado da atuação em causas de diferentes graus de complexidade nas mais diversas searas do Direito.",
  },
  {
    icon: Users,
    title: "Atendimento humanizado",
    description:
      "Reconhecemos que cada processo transcende a esfera meramente técnica, razão pela qual dedicamos atenção individualizada a cada cliente, observando as particularidades fáticas e jurídicas de sua causa.",
  },
  {
    icon: Clock3,
    title: "Resposta ágil",
    description:
      "Comprometemo-nos com a celeridade processual e a diligência no acompanhamento de prazos e intimações, assegurando aos clientes retorno tempestivo quanto ao trâmite de suas demandas.",
  },
];

export const testimonials = [
  {
    quote:
      "Fui muito bem orientado durante todo o processo, com explicações claras sobre cada etapa. A equipe demonstrou domínio técnico e cuidado genuíno com o meu caso, o que me trouxe segurança do início ao fim.",
    name: "Lucas Urzeda",
    area: "Direito do Trabalho",
  },
  {
    quote:
      "Busquei o escritório para resolver um problema que parecia sem solução, e fui surpreendida pela agilidade e atenção no atendimento. Me senti amparada em cada contato, com retornos rápidos e honestos.",
    name: "Leiliana Freitas",
    area: "Direito do Consumidor",
  },
  {
    quote:
      "Em um momento delicado para minha família, encontrei profissionais sérios e humanos, que conduziram tudo com discrição e respeito. Recomendo pela competência e, principalmente, pela forma humanizada de atender.",
    name: "Nivaldo Rosa",
    area: "Direito Civil e Família",
  },
];

export const videoItems = [
  {
    title: "Entenda o que observar em um contrato.",
    description: "Vídeo explicativo sobre análise contratual e prevenção de riscos jurídicos.",
    duration: "04:12",
  },
  {
    title: "Como agir diante de uma cobrança indevida.",
    description: "Conteúdo objetivo sobre caminhos possíveis em defesa do consumidor.",
    duration: "05:48",
  },
  {
    title: "Direitos trabalhistas que merecem atenção.",
    description: "Resumo visual sobre situações recorrentes na área trabalhista.",
    duration: "06:03",
  },
  {
    title: "Dúvidas comuns sobre guarda, alimentos e família.",
    description: "Vídeo institucional com linguagem serena e orientação clara.",
    duration: "03:56",
  },
  {
    title: "Overbooking e cancelamento de voo.",
    description: "Conteúdo explicativo sobre direitos do passageiro aéreo e indenização.",
    duration: "07:10",
  },
  {
    title: "Aposentadoria e benefícios: pontos de atenção.",
    description: "Vídeo introdutório sobre direitos previdenciários e análise documental.",
    duration: "05:22",
  },
];
