import { AreaPageTemplate } from "@/components/site/AreaPageTemplate";
import { usePageMeta } from "./PageMeta";

export function AreaWorkPage() {
  usePageMeta({
    title: "Direito do Trabalho — GVS Advogados Associados",
    description: "Atuação em Direito do Trabalho: processos, consultoria e defesa de direitos trabalhistas.",
    path: "/areas-de-atuacao/direito-do-trabalho",
  });

  return (
    <AreaPageTemplate
      area="Direito do Trabalho"
      title="Defesa técnica em relações de trabalho."
      intro="Texto placeholder introduzindo a atuação trabalhista de forma clara, objetiva e profissional."
      about={[
        "Parágrafo placeholder para descrever demandas trabalhistas atendidas, como consultoria, análise documental e estratégia processual.",
        "Parágrafo placeholder reforçando cuidado, precisão e uma comunicação mais acessível para o cliente.",
      ]}
      videos={[
        { title: "Como organizar uma demanda trabalhista.", description: "Vídeo placeholder com visão geral da área.", duration: "04:18" },
        { title: "Pontos que merecem atenção em rescisão.", description: "Vídeo placeholder sobre direitos e riscos comuns.", duration: "05:41" },
        { title: "Quando buscar orientação trabalhista.", description: "Conteúdo curto para facilitar a navegação.", duration: "03:57" },
      ]}
      cases={[
        "Análise de vínculo, verbas rescisórias e documentação trabalhista.",
        "Orientação em desligamentos, acordos e passivos recorrentes.",
        "Acompanhamento de demandas com foco em clareza e proteção do cliente.",
        "Consultoria preventiva para reduzir risco jurídico na empresa ou no caso individual.",
      ]}
    />
  );
}
