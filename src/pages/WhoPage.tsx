import { HeartHandshake, Eye, Target } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { SectionTitle } from "@/components/site/SectionTitle";
import { CTASection } from "@/components/site/CTASection";
import { AttorneySpotlight } from "@/components/site/AttorneySpotlight";
import { Reveal } from "@/components/site/Reveal";
import { siteOab } from "@/data";
import { usePageMeta } from "./PageMeta";

export function WhoPage() {
  usePageMeta({
    title: "Quem Somos — GVS Advogados Associados",
    description: "Conheça a história, os valores e a postura institucional do escritório GVS Advogados Associados.",
    path: "/quem-somos",
  });

  const pillars = [
    { icon: Target, title: "Missão", copy: "Atuação jurídica técnica, ética e estratégica, com orientação segura em cada etapa da demanda." },
    { icon: Eye, title: "Visão", copy: "Consolidar uma advocacia reconhecida pela excelência técnica e pela confiança construída com os clientes." },
    { icon: HeartHandshake, title: "Valores", copy: "Ética, transparência, compromisso e respeito às particularidades de cada cliente e causa." },
  ];

  return (
    <>
      <PageHero
        eyebrow="Quem Somos"
        title="Uma advocacia construída sobre confiança, clareza e técnica."
        description="Conheça a postura institucional do escritório e a forma como conduzimos cada demanda com seriedade, proximidade e rigor jurídico."
        breadcrumbs={[{ label: "Início", to: "/" }, { label: "Quem Somos" }]}
        primaryAction={{ label: "Fale conosco", to: "/contato" }}
        secondaryAction={{ label: "Áreas de atuação", to: "/areas-de-atuacao" }}
      />

      <section className="section section--soft">
        <div className="container-page band-grid band-grid--3">
          {pillars.map((pillar, index) => (
            <Reveal key={pillar.title} delay={index * 80}>
              <div className="card">
                <div className="card-icon">
                  <pillar.icon size={22} />
                </div>
                <h3 className="card-title" style={{ fontSize: "1.85rem" }}>
                  {pillar.title}
                </h3>
                <p className="card-copy">{pillar.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section section--soft">
        <div className="container-page hero-grid hero-grid--two">
          <Reveal>
            <SectionTitle kicker="Nossa história" title="Trajetória construída caso a caso." />
          </Reveal>
          <Reveal>
            <div className="card card--soft">
              <p className="section-text lede--dark" style={{ marginTop: 0 }}>
                A trajetória do escritório é construída caso a caso, com relações de confiança duradouras, transparência e respeito às particularidades de cada cliente. A atuação preventiva orienta decisões seguras desde a análise inicial até a conclusão da demanda.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <AttorneySpotlight />

      <section className="section section--soft">
        <div className="container-page band">
          <Reveal>
            <SectionTitle
              kicker="Estrutura profissional"
              title="Atendimento próximo, postura técnica e compromisso institucional."
            />
          </Reveal>
          <div className="band-grid band-grid--3">
            {[
              "Atuação preventiva e contenciosa com leitura estratégica do caso.",
              "Comunicação clara, diligente e comprometida com cada etapa da demanda.",
              `${siteOab} e presença institucional alinhada à sobriedade da advocacia.`,
            ].map((item, index) => (
              <Reveal key={item} delay={index * 80}>
                <div className="card card--soft">
                  <p className="card-copy" style={{ marginTop: 0 }}>
                    {item}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Seu caso merece análise técnica e acompanhamento próximo."
        description="Entre em contato para receber orientação jurídica segura e alinhada à sua demanda."
      />
    </>
  );
}
