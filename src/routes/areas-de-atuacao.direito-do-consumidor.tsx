import { createFileRoute } from "@tanstack/react-router";
import { AreaPageTemplate } from "@/components/site/AreaPageTemplate";

export const Route = createFileRoute("/areas-de-atuacao/direito-do-consumidor")({
  head: () => ({
    meta: [
      { title: "Direito do Consumidor — GVS Advogados Associados" },
      { name: "description", content: "Defesa dos direitos do consumidor em relações de consumo abusivas, cobranças indevidas e falhas de serviço." },
      { property: "og:title", content: "Direito do Consumidor — GVS Advogados Associados" },
      { property: "og:description", content: "Defesa dos direitos do consumidor em relações de consumo abusivas, cobranças indevidas e falhas de serviço." },
      { property: "og:url", content: "/areas-de-atuacao/direito-do-consumidor" },
    ],
    links: [{ rel: "canonical", href: "/areas-de-atuacao/direito-do-consumidor" }],
  }),
  component: () => (
    <AreaPageTemplate
      area="Direito do Consumidor"
      title="Defesa em relações de consumo."
      intro="[Descrição placeholder da área, apresentando de forma breve a atuação em defesa do consumidor.]"
      about={[
        "[Parágrafo placeholder — descreva os serviços dentro do Direito do Consumidor.]",
        "[Parágrafo placeholder — reforce a atuação em casos de falhas na prestação de serviço, cobranças indevidas e negativas de cobertura.]",
      ]}
      videos={[
        { title: "[Título do vídeo placeholder]", description: "[Descrição curta placeholder do conteúdo do vídeo.]", duration: "05:10" },
        { title: "[Título do vídeo placeholder]", description: "[Descrição curta placeholder do conteúdo do vídeo.]", duration: "04:02" },
        { title: "[Título do vídeo placeholder]", description: "[Descrição curta placeholder do conteúdo do vídeo.]", duration: "07:33" },
      ]}
      cases={[
        "[Caso comum placeholder — exemplo em relação de consumo.]",
        "[Caso comum placeholder — exemplo em relação de consumo.]",
        "[Caso comum placeholder — exemplo em relação de consumo.]",
        "[Caso comum placeholder — exemplo em relação de consumo.]",
        "[Caso comum placeholder — exemplo em relação de consumo.]",
      ]}
      featuredVideo={{
        title: "Overbooking em viagens de avião.",
        description: "[Descrição placeholder de vídeo destaque tratando de overbooking, cancelamentos, atrasos e outras situações com companhias aéreas.]",
      }}
    />
  ),
});
