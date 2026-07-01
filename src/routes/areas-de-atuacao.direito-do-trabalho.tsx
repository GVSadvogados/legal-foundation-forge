import { createFileRoute } from "@tanstack/react-router";
import { AreaPageTemplate } from "@/components/site/AreaPageTemplate";

export const Route = createFileRoute("/areas-de-atuacao/direito-do-trabalho")({
  head: () => ({
    meta: [
      { title: "Direito do Trabalho — GVS Advogados Associados" },
      { name: "description", content: "Atuação em Direito do Trabalho: processos, consultoria e defesa de direitos trabalhistas." },
      { property: "og:title", content: "Direito do Trabalho — GVS Advogados Associados" },
      { property: "og:description", content: "Atuação em Direito do Trabalho: processos, consultoria e defesa de direitos trabalhistas." },
      { property: "og:url", content: "/areas-de-atuacao/direito-do-trabalho" },
    ],
    links: [{ rel: "canonical", href: "/areas-de-atuacao/direito-do-trabalho" }],
  }),
  component: () => (
    <AreaPageTemplate
      area="Direito do Trabalho"
      title="Defesa técnica em relações de trabalho."
      intro="[Descrição placeholder da área, apresentando de forma breve a atuação e o público atendido.]"
      about={[
        "[Parágrafo placeholder — descreva os serviços e áreas de atuação dentro do Direito do Trabalho.]",
        "[Parágrafo placeholder — reforce a abordagem técnica, estratégica e humanizada nos casos trabalhistas.]",
      ]}
      videos={[
        { title: "[Título do vídeo placeholder]", description: "[Descrição curta placeholder do conteúdo do vídeo.]", duration: "04:12" },
        { title: "[Título do vídeo placeholder]", description: "[Descrição curta placeholder do conteúdo do vídeo.]", duration: "06:45" },
        { title: "[Título do vídeo placeholder]", description: "[Descrição curta placeholder do conteúdo do vídeo.]", duration: "03:28" },
      ]}
      cases={[
        "[Caso comum placeholder — exemplo de situação trabalhista atendida.]",
        "[Caso comum placeholder — exemplo de situação trabalhista atendida.]",
        "[Caso comum placeholder — exemplo de situação trabalhista atendida.]",
        "[Caso comum placeholder — exemplo de situação trabalhista atendida.]",
        "[Caso comum placeholder — exemplo de situação trabalhista atendida.]",
      ]}
    />
  ),
});
