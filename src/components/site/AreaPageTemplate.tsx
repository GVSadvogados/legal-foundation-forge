import { Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { SiteLayout } from "./SiteLayout";
import { PageHero } from "./PageHero";
import { SectionTitle } from "./SectionTitle";
import { CTASection } from "./CTASection";
import { Reveal } from "./Reveal";

type AreaPageProps = {
  area: string;
  title: string;
  intro: string;
  about: string[];
  cases: string[];
};

export function AreaPageTemplate({ area, title, intro, about, cases }: AreaPageProps) {
  return (
    <SiteLayout>
      <PageHero
        eyebrow={area}
        title={title}
        description={intro}
        breadcrumbs={[
          { label: "Início", to: "/" },
          { label: "Áreas de Atuação", to: "/areas-de-atuacao" },
          { label: area },
        ]}
        primaryAction={{ label: "Falar com o escritório", to: "/contato" }}
        secondaryAction={{ label: "Ver outras áreas", to: "/areas-de-atuacao" }}
      />

      <section className="section section--soft">
        <div className="container-page hero-grid hero-grid--two">
          <Reveal>
            <SectionTitle kicker="O que atuamos" title="Nossa forma de atuação nesta área." />
          </Reveal>
          <Reveal>
            <div className="card card--soft">
              {about.map((paragraph) => (
                <p key={paragraph} className="section-text lede--dark" style={{ marginBottom: 16 }}>
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--soft-alt">
        <div className="container-page hero-grid hero-grid--two">
          <Reveal>
            <SectionTitle kicker="Casos comuns" title="Situações em que podemos ajudar." />
          </Reveal>
          <Reveal>
            <ul className="card-list">
              {cases.map((item) => (
                <li key={item}>
                  <span className="card-bullet">
                    <Check size={14} />
                  </span>
                  <span className="lede--dark" style={{ lineHeight: 1.7 }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <Link to="/contato" className="button button--ghost-dark" style={{ marginTop: 24, width: "fit-content" }}>
              Solicite uma análise do seu caso
              <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      <CTASection
        title="Seu caso merece uma análise especializada."
        description="Entre em contato com o escritório e receba orientação jurídica segura, estratégica e alinhada às particularidades da sua demanda."
      />
    </SiteLayout>
  );
}
