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
      intro="Atuamos em demandas previdenciárias com foco na análise técnica do histórico contributivo, dos requisitos legais e das medidas cabíveis para a concessão ou revisão do benefício."
      about={[
        "O Direito Previdenciário exige atenção aos detalhes do histórico laboral e contributivo, além de leitura precisa dos requisitos legais aplicáveis a cada benefício. Nossa atuação busca oferecer orientação segura para a definição da melhor estratégia administrativa ou judicial.",
        "Acompanhamos o cliente desde a análise inicial da documentação até a condução do pedido, recurso ou demanda judicial, sempre com clareza na comunicação e zelo técnico em cada etapa.",
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
