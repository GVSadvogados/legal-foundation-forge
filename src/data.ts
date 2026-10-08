import {
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
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
  { to: "/depoimentos", label: "Depoimentos" },
  { to: "/contato", label: "Contato" },
] as const;

export const sitePhoneDisplay = "62 99176-7200";
export const sitePhoneDigits = "5562991767200";
export const sitePhoneTelHref = `tel:+${sitePhoneDigits}`;
export const siteEmail = "gillianoadv@gvsadvocacia.com";
export const siteEmailHref = `mailto:${siteEmail}`;

export const whatsappDefaultMessage =
  "Olá! Vim pelo site e gostaria de obter mais informações sobre os serviços do escritório.";

export function buildWhatsappHref(message: string = whatsappDefaultMessage) {
  return `https://wa.me/${sitePhoneDigits}?text=${encodeURIComponent(message)}`;
}

export const siteWhatsappHref = buildWhatsappHref();
export const siteAddress =
  "Avenida C-4, nº 931, Edifício Terra Office, Sala 1602-A, Setor Jardim América, Goiânia/GO, CEP: 74265-040";
export const siteAddressParts = {
  streetAddress: "Avenida C-4, nº 931, Edifício Terra Office, Sala 1602-A, Setor Jardim América",
  addressLocality: "Goiânia",
  addressRegion: "GO",
  postalCode: "74265-040",
  addressCountry: "BR",
} as const;
export const siteOab = "OAB Nº 67.584";
export const leadAttorneyName = "Gilliano Vinícius Freitas Souza";
export const leadAttorneyOab = "OAB-GO 67584";
export const leadAttorneyBio = [
  "Graduado em Direito pela UNIFASAM.",
  "Pós-graduado em Direito Previdenciário pela Universidade Anhanguera.",
  "Pós-graduação em Direito Civil e Processo Civil pelo Proordem.",
] as const;

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
      "Compras online, produtos com defeito, atraso na entrega e cláusulas abusivas em relações de consumo.",
    to: "/areas-de-atuacao/direito-do-consumidor",
  },
  {
    icon: Building2,
    title: "Direito Civil e Família",
    description:
      "Imóveis, contratos e cobranças, além de divórcio, partilha de bens, pensão alimentícia e inventário, com atuação técnica e próxima.",
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
  {
    quote:
      "Precisava de orientação sobre minha aposentadoria e não sabia por onde começar. Recebi uma explicação clara sobre cada etapa do processo e acompanhamento constante até a conclusão, com total transparência.",
    name: "Marlene Aparecida",
    area: "Direito Previdenciário",
  },
  {
    quote:
      "Tive um voo cancelado sem nenhuma assistência da companhia aérea. O escritório conduziu todo o processo com agilidade e me manteve informado em cada fase, até a solução favorável do caso.",
    name: "Rodrigo Teixeira",
    area: "Direito do Passageiro Aéreo",
  },
];
