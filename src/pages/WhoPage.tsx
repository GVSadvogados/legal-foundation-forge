import { HeartHandshake, Eye, Target } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
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
    { icon: Target, title: "Missão", copy: "Oferecer atuação jurídica técnica, ética e estratégica, com orientação segura e acompanhamento diligente em cada etapa da demanda." },
    { icon: Eye, title: "Visão", copy: "Consolidar uma advocacia reconhecida pela excelência técnica, pela confiança construída com os clientes e pela seriedade na condução de cada caso." },
    { icon: HeartHandshake, title: "Valores", copy: "Ética, transparência, compromisso, respeito às particularidades do cliente e atenção rigorosa aos desdobramentos de cada causa." },
  ];

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Quem Somos"
        title="Uma advocacia construída sobre confiança, clareza e técnica."
        description="Conheça a postura institucional do escritório e a forma como conduzimos cada demanda com seriedade, proximidade e rigor jurídico."
        breadcrumbs={[{ label: "Início", to: "/" }, { label: "Quem Somos" }]}
        primaryAction={{ label: "Fale conosco", to: "/contato" }}
        secondaryAction={{ label: "Áreas de atuação", to: "/areas-de-atuacao" }}
      />

      <section className="section section--light">
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

      <section className="section section--warm">
        <div className="container-page hero-grid hero-grid--two">
          <Reveal>
            <SectionTitle kicker="Nossa história" title="Trajetória construída caso a caso." />
          </Reveal>
          <Reveal>
            <div className="card card--soft">
              <p className="section-text lede--dark" style={{ marginTop: 0 }}>
                Consolidado há mais de 7 anos na advocacia, o escritório pauta sua atuação pela excelência técnica, pela ética e pelo compromisso com cada caso sob sua responsabilidade. Nossa trajetória é construída a partir de relações de confiança duradouras, fundamentadas na transparência, no rigor jurídico e no respeito às particularidades de cada cliente.
              </p>
              <p className="section-text lede--dark">
                A atuação preventiva constitui um dos pilares de nosso trabalho, permitindo a identificação antecipada de riscos e a orientação segura na tomada de decisões. Aliada à experiência consolidada de nossa equipe, oferecemos um atendimento próximo e diligente, assegurando acompanhamento qualificado em todas as etapas de cada demanda.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <AttorneySpotlight />

      <section className="section section--light">
        <div className="container-page band">
          <Reveal>
            <SectionTitle
              kicker="Estrutura profissional"
              title="Atendimento próximo, postura técnica e compromisso institucional."
              subtitle="Neste momento, o site prioriza a apresentação institucional do escritório sem blocos de imagem do ambiente físico."
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
        description="Entre em contato com o escritório para receber orientação jurídica segura e alinhada às particularidades da sua demanda."
      />
    </SiteLayout>
  );
}
