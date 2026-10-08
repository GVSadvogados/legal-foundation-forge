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
      intro="Orientação jurídica em demandas trabalhistas, com leitura estratégica do caso e condução segura em cada etapa."
      about={[
        "Analisamos a relação laboral e a documentação com rigor técnico, construindo estratégias voltadas à proteção dos direitos do cliente, com acompanhamento próximo e comunicação clara em cada fase do processo.",
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
