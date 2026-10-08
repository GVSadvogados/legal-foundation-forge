import { AreaPageTemplate } from "@/components/site/AreaPageTemplate";
import { usePageMeta } from "./PageMeta";

export function AreaConsumerPage() {
  usePageMeta({
    title: "Direito do Consumidor — GVS Advogados Associados",
    description:
      "Atuação em Direito do Consumidor com foco em falhas de serviço, relações abusivas, reembolso e reparação de danos.",
    path: "/areas-de-atuacao/direito-do-consumidor",
  });

  return (
    <AreaPageTemplate
      area="Direito do Consumidor"
      title="Defesa qualificada nas relações de consumo."
      intro="Atuamos na proteção dos direitos do consumidor em falhas de serviço, práticas abusivas e descumprimento contratual."
      about={[
        "Atuamos para restabelecer o equilíbrio nas relações de consumo, identificando abusividades e falhas na prestação do serviço, com orientação segura desde a fase extrajudicial até as medidas judiciais cabíveis.",
      ]}
      cases={[
        "Direito de arrependimento em compras online",
        "Produtos com garantia não cumprida",
        "Propaganda enganosa ou abusiva",
        "Produtos não entregues após a compra",
        "Produtos com defeito sem ressarcimento ou substituição",
        "Cláusulas contratuais abusivas que prejudiquem o consumidor",
        "Entre outros casos",
      ]}
    />
  );
}
