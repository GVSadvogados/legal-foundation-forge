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
      intro="Prestamos orientação em casos envolvendo companhias aéreas, com análise técnica dos direitos do passageiro e das medidas cabíveis para reparação dos prejuízos sofridos."
      about={[
        "A legislação e a regulamentação do transporte aéreo asseguram direitos importantes ao passageiro em situações de atraso, cancelamento, alteração de voo, negativa de embarque e extravio de bagagem. Nossa atuação busca verificar o descumprimento dessas obrigações e adotar a medida adequada para cada caso.",
        "Com leitura estratégica da documentação e comunicação objetiva, acompanhamos o cliente na busca por reembolso, reacomodação, assistência material e eventual indenização, conforme a extensão do prejuízo suportado.",
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
