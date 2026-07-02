import { AreaPageTemplate } from "@/components/site/AreaPageTemplate";
import { usePageMeta } from "./PageMeta";

export function AreaFamilyPage() {
  usePageMeta({
    title: "Direito Civil — GVS Advogados Associados",
    description:
      "Atuação em Direito Civil com acompanhamento técnico em conflitos patrimoniais, contratuais e responsabilidades civis.",
    path: "/areas-de-atuacao/direito-civil-e-familia",
  });

  return (
    <AreaPageTemplate
      area="Direito Civil"
      title="Suporte jurídico em relações civis e patrimoniais."
      intro="Prestamos orientação em conflitos civis com análise cuidadosa dos fatos, atenção aos reflexos patrimoniais e condução estratégica das medidas adequadas ao caso."
      about={[
        "A atuação em Direito Civil exige leitura técnica apurada, análise documental consistente e compreensão clara dos interesses envolvidos. Nosso trabalho é direcionado à proteção do patrimônio, ao equilíbrio das relações jurídicas e à busca de soluções seguras para cada situação.",
        "Com atendimento próximo e postura diligente, acompanhamos o cliente em todas as etapas da demanda, oferecendo orientação objetiva para tomada de decisão e condução qualificada do processo.",
      ]}
      videos={[
        { title: "Conflitos patrimoniais e prova documental.", description: "Vídeo sobre organização de documentos e análise da demanda civil.", duration: "05:36" },
        { title: "Responsabilidade civil e reparação de danos.", description: "Conteúdo breve sobre direitos, deveres e medidas cabíveis.", duration: "04:29" },
        { title: "Contratos e riscos jurídicos recorrentes.", description: "Vídeo explicativo sobre cláusulas, descumprimento e prevenção.", duration: "06:18" },
      ]}
      cases={[
        "Conflitos patrimoniais",
        "Responsabilidade civil",
        "Descumprimento contratual",
        "Cobranças e obrigações civis",
        "Orientação preventiva em relações civis",
        "Entre outros casos",
      ]}
    />
  );
}
