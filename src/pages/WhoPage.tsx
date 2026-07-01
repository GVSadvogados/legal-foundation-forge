import { HeartHandshake, Target, Eye } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { SectionTitle } from "@/components/site/SectionTitle";
import { CTASection } from "@/components/site/CTASection";
import { Reveal } from "@/components/site/Reveal";
import { usePageMeta } from "./PageMeta";

export function WhoPage() {
  usePageMeta({
    title: "Quem Somos — GVS Advogados Associados",
    description: "Conheça a história, missão, valores e equipe do escritório GVS Advogados Associados.",
  });

  const pillars = [
    { icon: Target, title: "Missão", copy: "Texto placeholder sobre o propósito do escritório e a forma de servir cada cliente." },
    { icon: Eye, title: "Visão", copy: "Texto placeholder sobre direção, posicionamento e o lugar que o escritório quer ocupar." },
    { icon: HeartHandshake, title: "Valores", copy: "Texto placeholder com ética, transparência, comprometimento e sensibilidade." },
  ];

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Quem Somos"
        title="Uma advocacia construída sobre confiança, clareza e técnica."
        description="Texto de abertura placeholder explicando origem, propósito e postura do escritório de forma mais sofisticada."
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
                <h3 className="card-title" style={{ fontSize: "1.85rem" }}>{pillar.title}</h3>
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
                Texto placeholder para contar a origem do escritório, evolução e postura no atendimento.
              </p>
              <p className="section-text lede--dark">
                Segundo parágrafo placeholder reforçando experiência, especialização e alinhamento com o perfil do cliente.
              </p>
              <p className="section-text lede--dark" style={{ marginBottom: 0 }}>
                Terceiro trecho opcional para fechar a narrativa com uma visão mais humana e madura.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--light">
        <div className="container-page band">
          <Reveal>
            <SectionTitle kicker="Equipe" title="Profissionais dedicados a cada demanda." subtitle="Foto e nomes continuam como placeholders neutros para troca futura." />
          </Reveal>
          <div className="band-grid band-grid--4">
            {Array.from({ length: 4 }).map((_, index) => (
              <Reveal key={index} delay={index * 70}>
                <div className="card">
                  <div className="hero-panel" style={{ minHeight: 260, borderRadius: 22 }}>
                    <div className="hero-panel-inner" style={{ padding: 18 }}>
                      <div className="hero-card" style={{ marginTop: "auto" }}>
                        Foto placeholder
                      </div>
                    </div>
                  </div>
                  <h3 className="card-title" style={{ fontSize: "1.7rem" }}>Nome do Advogado {index + 1}</h3>
                  <p className="card-copy">Área de atuação · OAB [placeholder]</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Conte com uma equipe experiente e organizada." description="CTA placeholder para levar o visitante ao contato de forma natural." />
    </SiteLayout>
  );
}
