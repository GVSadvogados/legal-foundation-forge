import { AreaPageTemplate } from "@/components/site/AreaPageTemplate";
import { usePageMeta } from "./PageMeta";

export function AreaConsumerPage() {
  usePageMeta({
    title: "Direito do Consumidor — GVS Advogados Associados",
    description: "Defesa dos direitos do consumidor em relações de consumo abusivas, cobranças indevidas e falhas de serviço.",
  });

  return (
    <AreaPageTemplate
      area="Direito do Consumidor"
      title="Defesa em relações de consumo."
      intro="Texto placeholder com linguagem de entrada que reforça segurança e condução objetiva dos conflitos de consumo."
      about={[
        "Parágrafo placeholder descrevendo atuação em falhas de serviço, problemas contratuais e defesa do consumidor.",
        "Parágrafo placeholder reforçando a abordagem estratégica e a leitura cuidadosa do caso.",
      ]}
      videos={[
        { title: "Cobrança indevida: por onde começar.", description: "Vídeo placeholder sobre análise inicial de consumo.", duration: "04:54" },
        { title: "Falha de serviço e direitos básicos.", description: "Conteúdo breve com linguagem acessível.", duration: "05:21" },
        { title: "Cancelamento, reembolso e resposta da empresa.", description: "Vídeo institucional sobre caminhos possíveis.", duration: "06:07" },
      ]}
      cases={[
        "Cobranças indevidas e contratos com cláusulas abusivas.",
        "Falha na prestação de serviço e resposta insuficiente da empresa.",
        "Negativa de cobertura, reembolso ou solução administrativa.",
        "Problemas com companhias aéreas, atrasos, cancelamentos e overbooking.",
      ]}
      featuredVideo={{
        title: "Overbooking, atrasos e cancelamentos de voo.",
        description: "Bloco destaque sugerido para reforçar o conteúdo da área com um tema recorrente e visualmente mais forte.",
      }}
    />
  );
}
