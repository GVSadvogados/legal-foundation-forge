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
      intro="Prestamos orientação em conflitos civis e familiares com análise cuidadosa dos fatos, atenção aos reflexos patrimoniais e emocionais e condução estratégica das medidas adequadas ao caso."
      about={[
        "A atuação em Direito Civil exige leitura técnica apurada, análise documental consistente e compreensão clara dos interesses envolvidos. Nosso trabalho é direcionado à proteção do patrimônio, ao equilíbrio das relações jurídicas e à busca de soluções seguras para cada situação.",
        "Nas demandas de Direito de Família, conduzimos cada caso com discrição e sensibilidade às particularidades de cada núcleo familiar, sem abrir mão do rigor técnico necessário para a proteção dos direitos do cliente e, quando houver, dos filhos envolvidos.",
        "Com atendimento próximo e postura diligente, acompanhamos o cliente em todas as etapas da demanda, oferecendo orientação objetiva para tomada de decisão e condução qualificada do processo, seja ele extrajudicial ou judicial.",
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
