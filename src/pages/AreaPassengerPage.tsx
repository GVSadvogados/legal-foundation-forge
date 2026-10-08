import { AreaPageTemplate } from "@/components/site/AreaPageTemplate";
import { usePageMeta } from "./PageMeta";

export function AreaPassengerPage() {
  usePageMeta({
    title: "Direito do Passageiro Aéreo — GVS Advogados Associados",
    description:
      "Atuação em Direito do Passageiro Aéreo com suporte em atrasos, cancelamentos, overbooking, bagagem e reembolso.",
    path: "/areas-de-atuacao/direito-do-passageiro-aereo",
  });

  return (
    <AreaPageTemplate
      area="Direito do Passageiro Aéreo"
      title="Defesa dos direitos do passageiro em viagens aéreas."
      intro="Orientação em casos envolvendo companhias aéreas, com análise técnica dos direitos do passageiro e das medidas cabíveis."
      about={[
        "A regulamentação do transporte aéreo assegura direitos ao passageiro em atrasos, cancelamentos, negativa de embarque e extravio de bagagem. Avaliamos o descumprimento dessas obrigações e buscamos reembolso, reacomodação, assistência material ou indenização, conforme o prejuízo sofrido.",
      ]}
      cases={[
        "Falta de informação sobre atrasos, cancelamentos ou alterações de voo",
        "Ausência de assistência material (comunicação, alimentação, hospedagem e transporte)",
        "Recusa de reembolso ou reacomodação em atrasos e cancelamentos",
        "Overbooking (embarque negado) sem indenização",
        "Extravio, dano ou roubo de bagagem",
        "Negativa de cancelamento e reembolso dentro do prazo legal",
        "Falta de assistência a passageiros com mobilidade reduzida ou deficiência",
        "Entre outros casos",
      ]}
    />
  );
}
