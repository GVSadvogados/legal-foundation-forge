import { AreaPageTemplate } from "@/components/site/AreaPageTemplate";
import { usePageMeta } from "./PageMeta";

export function AreaPrevidenciarioPage() {
  usePageMeta({
    title: "Direito Previdenciário — GVS Advogados Associados",
    description:
      "Atuação em Direito Previdenciário com análise técnica de benefícios, aposentadorias e recursos administrativos e judiciais.",
    path: "/areas-de-atuacao/direito-previdenciario",
  });

  return (
    <AreaPageTemplate
      area="Direito Previdenciário"
      title="Orientação segura para benefícios e aposentadorias."
      intro="Atuamos em demandas previdenciárias com análise técnica do histórico contributivo e dos requisitos legais de cada benefício."
      about={[
        "O Direito Previdenciário exige atenção ao histórico contributivo e leitura precisa dos requisitos legais de cada benefício. Acompanhamos o cliente desde a análise da documentação até o pedido, recurso ou demanda judicial, com clareza e zelo técnico.",
      ]}
      cases={[
        "Aposentadoria por idade, tempo de contribuição, invalidez ou especial (atividades de risco ou insalubres)",
        "Auxílio-doença negado ou cessado indevidamente",
        "Auxílio-acidente",
        "Pensão por morte",
        "Salário-maternidade",
        "BPC/LOAS (Benefício de Prestação Continuada)",
        "Entre outros casos",
      ]}
    />
  );
}
