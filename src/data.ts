import { BriefcaseBusiness, Handshake, Scale, ShieldCheck, Sparkles, Users, Video, Award } from "lucide-react";

export const navItems = [
  { to: "/", label: "Início" },
  { to: "/quem-somos", label: "Quem Somos" },
  { to: "/areas-de-atuacao", label: "Áreas" },
  { to: "/videos", label: "Vídeos" },
  { to: "/depoimentos", label: "Depoimentos" },
  { to: "/contato", label: "Contato" },
] as const;

export const homeAreas = [
  {
    icon: BriefcaseBusiness,
    title: "Direito do Trabalho",
    description:
      "Atuação em demandas trabalhistas, consultivas e estratégicas, com foco em segurança jurídica e clareza para o cliente.",
    to: "/areas-de-atuacao/direito-do-trabalho",
  },
  {
    icon: ShieldCheck,
    title: "Direito do Consumidor",
    description:
      "Defesa em conflitos de consumo, falhas de serviço, cobranças indevidas e situações de abuso contratual.",
    to: "/areas-de-atuacao/direito-do-consumidor",
  },
  {
    icon: Scale,
    title: "Direito Civil e Família",
    description:
      "Acompanhamento jurídico em temas civis, patrimoniais e familiares com sensibilidade e técnica.",
    to: "/areas-de-atuacao/direito-civil-e-familia",
  },
];

export const differentiators = [
  {
    icon: Sparkles,
    title: "Presença sofisticada",
    description: "A identidade visual foi organizada para transmitir autoridade, calma e zelo profissional desde o primeiro olhar.",
  },
  {
    icon: Handshake,
    title: "Atendimento humano",
    description: "O tom do site valoriza proximidade, escuta e leitura cuidadosa de cada caso, sem exageros ou ruído.",
  },
  {
    icon: Users,
    title: "Navegação objetiva",
    description: "As áreas, páginas institucionais e contato ficam claros, com percurso curto até o agendamento.",
  },
  {
    icon: Award,
    title: "Ritmo visual premium",
    description: "Cards, blocos e animações foram pensados para parecerem mais refinados, sem perder sobriedade.",
  },
];

export const testimonials = [
  {
    quote:
      "A experiência foi clara, objetiva e transmitiu confiança do começo ao fim. O atendimento teve muita atenção aos detalhes.",
    name: "Cliente Placeholder",
    area: "Direito do Trabalho",
  },
  {
    quote:
      "O escritório explicou cada etapa com paciência e conduziu o caso com postura muito profissional.",
    name: "Cliente Placeholder",
    area: "Direito do Consumidor",
  },
  {
    quote:
      "Fiquei seguro para tomar decisões importantes porque recebi orientação técnica e acessível ao mesmo tempo.",
    name: "Cliente Placeholder",
    area: "Direito Civil e Família",
  },
];

export const videoItems = [
  { title: "Entenda o que observar em um contrato.", description: "Vídeo explicativo placeholder sobre análise contratual e prevenção de riscos.", duration: "04:12" },
  { title: "Como agir diante de uma cobrança indevida.", description: "Conteúdo rápido sobre caminhos possíveis em defesa do consumidor.", duration: "05:48" },
  { title: "Direitos trabalhistas que merecem atenção.", description: "Resumo visual sobre situações recorrentes na área trabalhista.", duration: "06:03" },
  { title: "Dúvidas comuns sobre divórcio e guarda.", description: "Vídeo institucional placeholder com tom sereno e informativo.", duration: "03:56" },
  { title: "Overbooking e cancelamento de voo.", description: "Vídeo destaque sugerido para a área do consumidor com foco em companhia aérea.", duration: "07:10" },
  { title: "Inventário, partilha e organização patrimonial.", description: "Vídeo explicativo sobre questões civis e sucessórias.", duration: "05:22" },
];
