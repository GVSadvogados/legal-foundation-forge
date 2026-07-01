import { createFileRoute } from "@tanstack/react-router";
import { Briefcase, User, Gavel } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { AreaCard } from "@/components/site/AreaCard";
import { CTASection } from "@/components/site/CTASection";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/areas-de-atuacao/")({
  head: () => ({
    meta: [
      { title: "Áreas de Atuação — GVS Advogados Associados" },
      { name: "description", content: "Direito do Trabalho, Direito do Consumidor e Direito Civil e Família. Conheça as áreas de atuação do escritório." },
      { property: "og:title", content: "Áreas de Atuação — GVS Advogados Associados" },
      { property: "og:description", content: "Direito do Trabalho, Direito do Consumidor e Direito Civil e Família." },
      { property: "og:url", content: "/areas-de-atuacao" },
    ],
    links: [{ rel: "canonical", href: "/areas-de-atuacao" }],
  }),
  component: AreasHub,
});

function AreasHub() {
  const areas = [
    { icon: Briefcase, title: "Direito do Trabalho", to: "/areas-de-atuacao/direito-do-trabalho", n: "01", desc: "[Descrição placeholder — atuação em processos e consultoria trabalhista.]" },
    { icon: User, title: "Direito do Consumidor", to: "/areas-de-atuacao/direito-do-consumidor", n: "02", desc: "[Descrição placeholder — defesa em relações de consumo e falhas de serviço.]" },
    { icon: Gavel, title: "Direito Civil e Família", to: "/areas-de-atuacao/direito-civil-e-familia", n: "03", desc: "[Descrição placeholder — questões civis, patrimoniais e familiares.]" },
  ];

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Áreas de Atuação"
        title="Escolha uma área para saber mais."
        description="[Texto placeholder — apresente brevemente as três frentes principais de atuação do escritório.]"
        breadcrumbs={[{ label: "Início", to: "/" }, { label: "Áreas de Atuação" }]}
      />
      <section className="bg-background py-24 sm:py-32">
        <div className="container-page grid gap-6 md:grid-cols-3">
          {areas.map((a) => (
            <Reveal key={a.title}>
              <AreaCard {...a} description={a.desc} number={a.n} />
            </Reveal>
          ))}
        </div>
      </section>
      <CTASection title="Precisa de orientação jurídica?" description="[Texto placeholder — convide o visitante a entrar em contato.]" />
    </SiteLayout>
  );
}
