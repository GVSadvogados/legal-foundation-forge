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
        description="Cards mais limpos, com leitura confortável e aspecto institucional refinado."
        breadcrumbs={[{ label: "Início", to: "/" }, { label: "Depoimentos" }]}
      />

      <section className="section section--warm">
        <div className="container-page band">
          <Reveal>
            <SectionTitle kicker="Experiência" title="A percepção do cliente também precisa parecer organizada." />
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

      <CTASection title="Seu caso pode ser o próximo." description="CTA placeholder para levar o visitante ao contato sem fricção." />
    </SiteLayout>
  );
}
