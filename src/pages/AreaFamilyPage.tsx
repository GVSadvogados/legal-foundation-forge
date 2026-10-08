import { AreaPageTemplate } from "@/components/site/AreaPageTemplate";
import { usePageMeta } from "./PageMeta";

export function AreaFamilyPage() {
  usePageMeta({
    title: "Direito Civil e Família — GVS Advogados Associados",
    description:
      "Atuação em Direito Civil e de Família: conflitos patrimoniais, contratuais e imobiliários, além de divórcio, guarda, pensão alimentícia e inventário.",
    path: "/areas-de-atuacao/direito-civil-e-familia",
  });

  return (
    <AreaPageTemplate
      area="Direito Civil e Família"
      title="Suporte jurídico em relações civis, patrimoniais e familiares."
      intro="Orientação em conflitos civis e familiares, com análise cuidadosa dos fatos e condução estratégica das medidas adequadas a cada caso."
      about={[
        "A atuação em Direito Civil exige leitura técnica apurada e análise documental consistente, voltada à proteção do patrimônio e ao equilíbrio das relações jurídicas.",
        "Nas demandas de família, conduzimos cada caso com discrição e sensibilidade às particularidades de cada núcleo familiar, com acompanhamento próximo em todas as etapas, judiciais ou extrajudiciais.",
      ]}
      cases={[
        "Divórcio consensual e litigioso",
        "Guarda, convivência familiar e regulamentação de visitas",
        "Pensão alimentícia: fixação, revisão e execução",
        "Partilha de bens e reconhecimento de união estável",
        "Inventário e partilha de herança, judicial e extrajudicial",
        "Atrasos e irregularidades na entrega de imóveis",
        "Vícios e problemas de construção",
        "Elaboração e revisão de contratos imobiliários e empresariais",
        "Cláusulas abusivas em contratos bancários e fraudes financeiras",
        "Cobrança e inadimplemento contratual",
        "Entre outros casos",
      ]}
    />
  );
}
