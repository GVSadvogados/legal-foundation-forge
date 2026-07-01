import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionTitle } from "@/components/site/SectionTitle";
import { AreaCard } from "@/components/site/AreaCard";
import { TestimonialCard } from "@/components/site/TestimonialCard";
import { CTASection } from "@/components/site/CTASection";
import { Reveal } from "@/components/site/Reveal";
import { differentiators, homeAreas, testimonials, trustSignals } from "@/data";
import { usePageMeta } from "./PageMeta";

export function HomePage() {
  usePageMeta({
    title: "GVS Advogados Associados — Advocacia institucional premium",
    description:
      "Site institucional de advocacia com visual sóbrio, navegação clara, animações discretas e estrutura profissional.",
    path: "/",
  });

  return (
    <SiteLayout>
      <section className="section section--dark hero">
        <div className="container-page hero-grid hero-grid--two">
          <Reveal>
            <div className="eyebrow">GVS Advogados Associados</div>
            <h1 className="hero-title">Advocacia com presença elegante e leitura imediata.</h1>
            <p className="lede">
              Estrutura institucional pensada para transmitir sobriedade, confiança e direção
              clara desde o primeiro contato, com navegação objetiva e animações discretas.
            </p>
            <div className="trust-row">
              {trustSignals.map((item) => (
                <span key={item} className="trust-pill">
                  {item}
                </span>
              ))}
            </div>
            <div className="hero-actions">
              <Link to="/contato" className="button button--primary">
                Agendar conversa
                <ArrowRight size={16} />
              </Link>
              <Link to="/areas-de-atuacao" className="button button--ghost">
                Ver áreas de atuação
              </Link>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="hero-panel">
              <div className="hero-panel-inner">
                <div className="hero-stack">
                  <div className="hero-card">
                    <p className="brand-subtitle" style={{ marginBottom: 10 }}>
                      Atualização visual
                    </p>
                    <h3 className="hero-card-title">Mais organização, menos ruído.</h3>
                    <p className="hero-card-copy">
                      O layout foi reorganizado para equilibrar hierarquia, respiro e fluidez entre as
                      seções, com leitura mais segura no desktop e no mobile.
                    </p>
                  </div>
                  <div className="hero-card">
                    <h3 className="hero-card-title">Animações sutis</h3>
                    <p className="hero-card-copy">
                      Revelações por scroll, pequenos movimentos nos cards e hover refinado elevam a
                      percepção do site sem exagero visual.
                    </p>
                  </div>
                  <div className="hero-card">
                    <h3 className="hero-card-title">Tom jurídico premium</h3>
                    <p className="hero-card-copy">
                      A linguagem visual ficou mais sóbria, com contraste, respiro e uma paleta que
                      conversa melhor com o universo da advocacia.
                    </p>
                  </div>
                  <div className="hero-metrics">
                    <div className="metric">
                      <strong>08</strong>
                      <span>rotas organizadas</span>
                    </div>
                    <div className="metric">
                      <strong>03</strong>
                      <span>áreas centrais</span>
                    </div>
                    <div className="metric">
                      <strong>1</strong>
                      <span>linguagem visual unificada</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--light">
        <div className="container-page band" style={{ gridTemplateColumns: "0.9fr 1.1fr", display: "grid", gap: 40 }}>
          <Reveal>
            <SectionTitle kicker="Apresentação" title="Estrutura institucional pronta para crescer." />
          </Reveal>
          <Reveal>
            <div className="card card--soft">
              <p className="section-text lede--dark" style={{ margin: 0 }}>
                Texto institucional placeholder sobre o escritório, sua postura profissional e a forma
                como lida com cada caso. A ideia aqui é transmitir confiança sem ficar pesado.
              </p>
              <div className="subtle-rule" style={{ margin: "22px 0" }} />
              <p className="section-text lede--dark" style={{ margin: 0 }}>
                Segundo trecho placeholder reforçando atendimento humanizado, clareza na comunicação e
                atuação técnica.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--warm">
        <div className="container-page band">
          <Reveal>
            <SectionTitle
              kicker="Áreas de atuação"
              title="Três frentes principais, uma experiência mais clara."
              subtitle="Os cards estão mais orgânicos, com melhor espaçamento e hierarquia para leitura rápida."
            />
          </Reveal>
          <div className="band-grid band-grid--3">
            {homeAreas.map((area, index) => (
              <Reveal key={area.title} delay={index * 80}>
                <AreaCard {...area} icon={area.icon} number={`0${index + 1}`} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--light">
        <div className="container-page band">
          <Reveal>
            <SectionTitle kicker="Diferenciais" title="O que melhora a percepção do site." align="center" />
          </Reveal>
          <div className="band-grid band-grid--4">
            {differentiators.map((item, index) => (
              <Reveal key={item.title} delay={index * 70}>
                <div className="card">
                  <div className="card-icon">
                    <item.icon size={24} strokeWidth={1.5} />
                  </div>
                  <h3 className="card-title" style={{ fontSize: "1.8rem" }}>
                    {item.title}
                  </h3>
                  <p className="card-copy">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--warm">
        <div className="container-page band">
          <Reveal>
            <SectionTitle kicker="Depoimentos" title="Blocos mais limpos e com melhor ritmo." />
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

      <CTASection
        title="Agora o site está mais pronto para parecer um escritório real."
        description="A última etapa é preencher os textos definitivos, links reais e dados de contato."
      />
    </SiteLayout>
  );
}
