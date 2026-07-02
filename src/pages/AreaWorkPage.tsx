import { AreaPageTemplate } from "@/components/site/AreaPageTemplate";
import { usePageMeta } from "./PageMeta";

export function AreaWorkPage() {
  usePageMeta({
    title: "Direito do Trabalho — GVS Advogados Associados",
    description: "Atuação em Direito do Trabalho com análise técnica, estratégia processual e defesa dos direitos trabalhistas.",
    path: "/areas-de-atuacao/direito-do-trabalho",
  });

  return (
    <AreaPageTemplate
      area="Direito do Trabalho"
      title="Atuação técnica em conflitos e direitos trabalhistas."
      intro="Prestamos orientação jurídica em demandas trabalhistas com leitura estratégica do caso, análise documental e condução segura em todas as etapas da demanda."
      about={[
        "Nossa atuação em Direito do Trabalho é pautada pela análise minuciosa da relação laboral, da documentação existente e dos impactos jurídicos de cada medida. Buscamos construir estratégias consistentes, voltadas à proteção dos direitos do cliente e à condução técnica do processo.",
        "Com atendimento próximo e comunicação clara, acompanhamos cada fase da demanda com responsabilidade e diligência, assegurando que o cliente compreenda os caminhos jurídicos disponíveis para o seu caso.",
      ]}
      videos={[
        { title: "Acidente de trabalho: como agir.", description: "Vídeo explicativo sobre providências iniciais, documentos e direitos envolvidos.", duration: "04:18" },
        { title: "Horas extras e jornada excessiva.", description: "Conteúdo objetivo sobre registro, prova e diferenças devidas.", duration: "05:41" },
        { title: "Rescisão, justa causa e verbas trabalhistas.", description: "Resumo sobre situações recorrentes e orientação inicial.", duration: "03:57" },
      ]}
      cases={[
        "Acidente de trabalho",
        "Sobrecarga de jornada",
        "Horas extras não pagas",
        "Assédio moral no trabalho",
        "Justa causa indevida",
        "Rescisão sem aviso prévio",
        "Ausência do adicional de insalubridade",
        "Entre outros casos",
      ]}
    />
  );
}
