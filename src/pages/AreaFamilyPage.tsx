import { AreaPageTemplate } from "@/components/site/AreaPageTemplate";
import { usePageMeta } from "./PageMeta";

export function AreaFamilyPage() {
  usePageMeta({
    title: "Direito Civil e Família — GVS Advogados Associados",
    description: "Atuação em Direito Civil e Família: divórcio, inventário, guarda, alimentos e demandas patrimoniais.",
  });

  return (
    <AreaPageTemplate
      area="Direito Civil e Família"
      title="Suporte jurídico em questões civis e familiares."
      intro="Texto placeholder para apresentar o cuidado, a técnica e a postura humana da atuação nesta área."
      about={[
        "Parágrafo placeholder descrevendo demandas civis e familiares com sensibilidade e clareza.",
        "Parágrafo placeholder reforçando organização patrimonial, orientação processual e acompanhamento próximo.",
      ]}
      videos={[
        { title: "Divórcio e organização do processo.", description: "Vídeo placeholder com visão institucional.", duration: "05:36" },
        { title: "Guarda e alimentos em pauta.", description: "Conteúdo breve sobre temas familiares recorrentes.", duration: "04:29" },
        { title: "Inventário e partilha: pontos de atenção.", description: "Vídeo placeholder sobre estrutura sucessória.", duration: "06:18" },
      ]}
      cases={[
        "Divórcio, guarda, alimentos e revisão de acordos.",
        "Inventário, partilha e planejamento patrimonial.",
        "Demandas contratuais e patrimoniais de rotina civil.",
        "Orientação em conflitos familiares que exigem diálogo e técnica.",
      ]}
    />
  );
}
