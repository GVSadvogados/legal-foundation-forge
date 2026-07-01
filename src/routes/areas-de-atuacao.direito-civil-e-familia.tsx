import { createFileRoute } from "@tanstack/react-router";
import { AreaPageTemplate } from "@/components/site/AreaPageTemplate";

export const Route = createFileRoute("/areas-de-atuacao/direito-civil-e-familia")({
  head: () => ({
    meta: [
      { title: "Direito Civil e Família — GVS Advogados Associados" },
      { name: "description", content: "Atuação em Direito Civil e Família: divórcio, inventário, guarda, alimentos e demandas patrimoniais." },
      { property: "og:title", content: "Direito Civil e Família — GVS Advogados Associados" },
      { property: "og:description", content: "Atuação em Direito Civil e Família: divórcio, inventário, guarda, alimentos e demandas patrimoniais." },
      { property: "og:url", content: "/areas-de-atuacao/direito-civil-e-familia" },
    ],
    links: [{ rel: "canonical", href: "/areas-de-atuacao/direito-civil-e-familia" }],
  }),
  component: () => (
    <AreaPageTemplate
      area="Direito Civil e Família"
      title="Suporte jurídico em questões civis e familiares."
      intro="[Descrição placeholder da área, apresentando a atuação em Direito Civil e de Família.]"
      about={[
        "[Parágrafo placeholder — descreva as demandas atendidas em Direito Civil e Família.]",
        "[Parágrafo placeholder — reforce a atuação com sensibilidade em temas familiares e patrimoniais.]",
      ]}
      videos={[
        { title: "[Título do vídeo placeholder]", description: "[Descrição curta placeholder do conteúdo do vídeo.]", duration: "05:48" },
        { title: "[Título do vídeo placeholder]", description: "[Descrição curta placeholder do conteúdo do vídeo.]", duration: "04:20" },
        { title: "[Título do vídeo placeholder]", description: "[Descrição curta placeholder do conteúdo do vídeo.]", duration: "06:15" },
      ]}
      cases={[
        "[Caso comum placeholder — exemplo em Direito de Família.]",
        "[Caso comum placeholder — exemplo em Direito Civil.]",
        "[Caso comum placeholder — exemplo patrimonial.]",
        "[Caso comum placeholder — exemplo sucessório.]",
        "[Caso comum placeholder — exemplo contratual.]",
      ]}
    />
  ),
});
