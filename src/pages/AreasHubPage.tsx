import { FileSearch, Handshake, MessageCircle } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { SectionTitle } from "@/components/site/SectionTitle";
import { AreaCard } from "@/components/site/AreaCard";
import { CTASection } from "@/components/site/CTASection";
import { Reveal } from "@/components/site/Reveal";
import { homeAreas } from "@/data";
import { usePageMeta } from "./PageMeta";

const steps = [
  {
    icon: MessageCircle,
    title: "1. Primeiro contato",
    copy: "Você entra em contato pelo formulário, telefone ou WhatsApp e conta brevemente a sua situação.",
  },
  {
    icon: FileSearch,
    title: "2. Análise do caso",
    copy: "Avaliamos os detalhes jurídicos da demanda e explicamos com clareza as possibilidades e o caminho mais indicado.",
  },
  {
    icon: Handshake,
    title: "3. Condução estratégica",
    copy: "Conduzimos o caso com acompanhamento próximo, mantendo você informado sobre cada etapa do processo.",
  },
];

export function AreasHubPage() {
  usePageMeta({
    title: "Áreas de Atuação — GVS Advogados Associados",
    description:
      "Conheça as cinco áreas de atuação do escritório: Trabalho, Consumidor, Civil, Previdenciário e Passageiro Aéreo.",
    path: "/areas-de-atuacao",
  });

  return (
    <>
      <PageHero
        eyebrow="Áreas de Atuação"
        title="Escolha a área que melhor corresponde ao seu caso."
        description="Conheça nossas principais frentes de atuação e veja como o escritório conduz cada demanda com estratégia, clareza e acompanhamento próximo."
        breadcrumbs={[{ label: "Início", to: "/" }, { label: "Áreas de Atuação" }]}
        primaryAction={{ label: "Falar com o escritório", to: "/contato" }}
      />

      <section className="section section--soft">
        <div className="container-page band">
          <Reveal>
            <SectionTitle kicker="Especialidades" title="Cinco áreas para um atendimento jurídico completo." align="center" />
          </Reveal>
          <div className="band-grid band-grid--5">
            {homeAreas.map((area, index) => (
              <Reveal key={area.title} delay={index * 90}>
                <AreaCard {...area} icon={area.icon} number={`0${index + 1}`} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container-page band">
          <Reveal>
            <SectionTitle kicker="Como funciona" title="Como é conduzido o atendimento." align="center" />
          </Reveal>
          <div className="band-grid band-grid--3">
            {steps.map((step, index) => (
              <Reveal key={step.title} delay={index * 80}>
                <div className="card">
                  <div className="card-icon">
                    <step.icon size={22} strokeWidth={1.5} />
                  </div>
                  <h3 className="card-title" style={{ fontSize: "1.6rem" }}>
                    {step.title}
                  </h3>
                  <p className="card-copy">{step.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Seu caso pode começar com a orientação certa."
        description="Entre em contato para uma análise inicial e entenda qual é o melhor caminho jurídico para a sua demanda."
      />
    </>
  );
}
