import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { SectionTitle } from "@/components/site/SectionTitle";
import { TestimonialCard } from "@/components/site/TestimonialCard";
import { CTASection } from "@/components/site/CTASection";
import { Reveal } from "@/components/site/Reveal";
import { testimonials } from "@/data";
import { usePageMeta } from "./PageMeta";

export function TestimonialsPage() {
  usePageMeta({
    title: "Depoimentos — GVS Advogados Associados",
    description: "Depoimentos de clientes atendidos pelo escritório GVS Advogados Associados.",
    path: "/depoimentos",
  });

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Depoimentos"
        title="Referências de quem já foi atendido."
        description="Relatos que refletem a seriedade do atendimento, a clareza da orientação jurídica e o cuidado dedicado a cada demanda."
        breadcrumbs={[{ label: "Início", to: "/" }, { label: "Depoimentos" }]}
      />

      <section className="section section--warm">
        <div className="container-page band">
          <Reveal>
            <SectionTitle kicker="Experiência" title="O que dizem os clientes atendidos pelo escritório." />
          </Reveal>
          <div className="band-grid band-grid--3">
            {testimonials.map((item, index) => (
              <Reveal key={item.name + index} delay={index * 80}>
                <TestimonialCard {...item} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Seu caso merece uma análise especializada." description="Entre em contato e receba orientação jurídica segura para avaliar o melhor caminho para a sua demanda." />
    </SiteLayout>
  );
}
