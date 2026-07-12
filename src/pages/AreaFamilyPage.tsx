import { AreaPageTemplate } from "@/components/site/AreaPageTemplate";
import { usePageMeta } from "./PageMeta";

export function AreaFamilyPage() {
  usePageMeta({
    title: "Direito Civil — GVS Advogados Associados",
    description:
      "Atuação em Direito Civil com acompanhamento técnico em conflitos patrimoniais, contratuais, imobiliários e responsabilidades civis.",
    path: "/areas-de-atuacao/direito-civil-e-familia",
  });

  return (
    <AreaPageTemplate
      area="Direito Civil"
      title="Suporte jurídico em relações civis, contratuais e patrimoniais."
      intro="Prestamos orientação em conflitos civis com análise cuidadosa dos fatos, atenção aos reflexos patrimoniais e condução estratégica das medidas adequadas ao caso."
      about={[
        "A atuação em Direito Civil exige leitura técnica apurada, análise documental consistente e compreensão clara dos interesses envolvidos. Nosso trabalho é direcionado à proteção do patrimônio, ao equilíbrio das relações jurídicas e à busca de soluções seguras para cada situação.",
        "Com atendimento próximo e postura diligente, acompanhamos o cliente em todas as etapas da demanda, oferecendo orientação objetiva para tomada de decisão e condução qualificada do processo.",
      ]}
      cases={[
        "Atrasos e irregularidades na entrega de imóveis",
        "Vícios e problemas de construção",
        "Elaboração e revisão de contratos imobiliários",
        "Regularização documental de imóveis",
        "Cláusulas abusivas em contratos bancários",
        "Fraudes e movimentações bancárias indevidas",
        "Elaboração e revisão de contratos empresariais",
        "Cobrança e inadimplemento contratual",
        "Entre outros casos",
      ]}
    />
  );
}
