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
      intro="Atuamos na proteção dos direitos do consumidor em situações que envolvem falhas na prestação de serviços, práticas abusivas e descumprimento de obrigações legais e contratuais."
      about={[
        "Nossa atuação em Direito do Consumidor busca restabelecer o equilíbrio nas relações de consumo, identificando abusividades, falhas na prestação do serviço e prejuízos suportados pelo cliente. Cada caso é analisado com rigor técnico e foco em soluções efetivas.",
        "Prestamos orientação segura desde a fase inicial do conflito, seja em tentativas de solução extrajudicial, seja na adoção das medidas judiciais adequadas, sempre com comunicação clara e acompanhamento próximo.",
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
