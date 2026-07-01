import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { SectionTitle } from "@/components/site/SectionTitle";
import { AreaCard } from "@/components/site/AreaCard";
import { CTASection } from "@/components/site/CTASection";
import { Reveal } from "@/components/site/Reveal";
import { homeAreas } from "@/data";
import { usePageMeta } from "./PageMeta";

export function AreasHubPage() {
  usePageMeta({
    title: "Áreas de Atuação — GVS Advogados Associados",
    description: "Direito do Trabalho, Direito do Consumidor e Direito Civil e Família. Conheça as áreas de atuação do escritório.",
  });

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Áreas de Atuação"
        title="Escolha uma área para entender como atuamos."
        description="Página hub com três frentes principais em cards mais amplos, com melhor leitura e visual mais premium."
        breadcrumbs={[{ label: "Início", to: "/" }, { label: "Áreas de Atuação" }]}
        primaryAction={{ label: "Falar conosco", to: "/contato" }}
      />

      <section className="section section--light">
        <div className="container-page band">
          <Reveal>
            <SectionTitle kicker="Especialidades" title="Três portas de entrada para o atendimento." align="center" />
          </Reveal>
          <div className="band-grid band-grid--3">
            {homeAreas.map((area, index) => (
              <Reveal key={area.title} delay={index * 90}>
                <AreaCard {...area} icon={area.icon} number={`0${index + 1}`} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Ainda em dúvida sobre a área certa?" description="Texto placeholder convidando o visitante a entrar em contato para orientação inicial." />
    </SiteLayout>
  );
}
