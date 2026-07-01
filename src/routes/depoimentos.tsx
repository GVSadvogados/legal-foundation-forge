import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { TestimonialCard } from "@/components/site/TestimonialCard";
import { CTASection } from "@/components/site/CTASection";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/depoimentos")({
  head: () => ({
    meta: [
      { title: "Depoimentos — GVS Advogados Associados" },
      { name: "description", content: "Depoimentos de clientes atendidos pelo escritório GVS Advogados Associados." },
      { property: "og:title", content: "Depoimentos — GVS Advogados Associados" },
      { property: "og:description", content: "Depoimentos de clientes atendidos pelo escritório GVS Advogados Associados." },
      { property: "og:url", content: "/depoimentos" },
    ],
    links: [{ rel: "canonical", href: "/depoimentos" }],
  }),
  component: Depoimentos,
});

function Depoimentos() {
  const items = [
    { q: "[Depoimento placeholder — texto fictício neutro sobre a experiência com o escritório.]", n: "Cliente Placeholder", a: "Direito do Trabalho" },
    { q: "[Depoimento placeholder — texto fictício neutro sobre a experiência com o escritório.]", n: "Cliente Placeholder", a: "Direito do Consumidor" },
    { q: "[Depoimento placeholder — texto fictício neutro sobre a experiência com o escritório.]", n: "Cliente Placeholder", a: "Direito Civil e Família" },
    { q: "[Depoimento placeholder — texto fictício neutro sobre a experiência com o escritório.]", n: "Cliente Placeholder", a: "Direito do Trabalho" },
    { q: "[Depoimento placeholder — texto fictício neutro sobre a experiência com o escritório.]", n: "Cliente Placeholder", a: "Direito do Consumidor" },
    { q: "[Depoimento placeholder — texto fictício neutro sobre a experiência com o escritório.]", n: "Cliente Placeholder", a: "Direito Civil e Família" },
  ];

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Depoimentos"
        title="Referências de quem foi atendido."
        description="[Texto placeholder introduzindo os depoimentos de clientes.]"
        breadcrumbs={[{ label: "Início", to: "/" }, { label: "Depoimentos" }]}
      />
      <section className="bg-background py-24 sm:py-32">
        <div className="container-page grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((t, i) => (
            <Reveal key={i}>
              <TestimonialCard quote={t.q} name={t.n} area={t.a} />
            </Reveal>
          ))}
        </div>
      </section>
      <CTASection title="Seu caso pode ser o próximo." description="[Texto placeholder de CTA convidando ao contato.]" />
    </SiteLayout>
  );
}
