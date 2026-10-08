import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, MessageCircle, Phone } from "lucide-react";
import { SectionTitle } from "@/components/site/SectionTitle";
import { AreaCard } from "@/components/site/AreaCard";
import { TestimonialCard } from "@/components/site/TestimonialCard";
import { CTASection } from "@/components/site/CTASection";
import { Reveal } from "@/components/site/Reveal";
import { differentiators, homeAreas, siteOab, sitePhoneDisplay, siteWhatsappHref, testimonials, trustSignals } from "@/data";
import { usePageMeta } from "./PageMeta";

export function HomePage() {
  usePageMeta({
    title: "GVS Advogados Associados — Advocacia estratégica e personalizada",
    description:
      "Escritório de advocacia com atuação estratégica, ética e personalizada, atendimento próximo e cinco áreas de atuação.",
    path: "/",
  });

  return (
    <>
      <section className="section section--dark hero">
        <div className="container-page hero-grid hero-grid--two">
          <Reveal>
            <div className="eyebrow">Advocacia institucional</div>
            <h1 className="hero-title">Atuação jurídica estratégica, ética e personalizada.</h1>
            <p className="lede">
              Da análise inicial à decisão final, cada passo é pensado para proteger seus interesses com inteligência jurídica e comprometimento genuíno.
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
                Solicite uma Análise do seu Caso
                <ArrowRight size={16} />
              </Link>
              <a href={siteWhatsappHref} className="button button--ghost" target="_blank" rel="noreferrer">
                <MessageCircle size={16} />
                WhatsApp
              </a>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="hero-panel">
              <div className="hero-panel-inner">
                <div className="hero-stack">
                  <div className="hero-card">
                    <p className="brand-subtitle" style={{ marginBottom: 10 }}>
                      Atendimento estratégico
                    </p>
                    <h3 className="hero-card-title">Mais de 7 anos de atuação com leitura técnica e acompanhamento próximo.</h3>
                    <p className="hero-card-copy">
                      Mais do que soluções jurídicas, construímos relações de confiança com excelência técnica e atenção às particularidades de cada caso.
                    </p>
                  </div>
                  <div className="hero-card">
                    <div className="hero-list">
                      <div className="hero-list-item">
                        <CheckCircle2 size={16} />
                        <span>Atendimento personalizado e diligente em todas as etapas.</span>
                      </div>
                      <div className="hero-list-item">
                        <CheckCircle2 size={16} />
                        <span>Prevenção de riscos e orientação segura para tomada de decisão.</span>
                      </div>
                      <div className="hero-list-item">
                        <Phone size={16} />
                        <span>{sitePhoneDisplay}</span>
                      </div>
                    </div>
                  </div>
                  <div className="hero-metrics">
                    <div className="metric">
                      <strong>05</strong>
                      <span>áreas de atuação</span>
                    </div>
                    <div className="metric">
                      <strong>7+</strong>
                      <span>anos de advocacia</span>
                    </div>
                    <div className="metric">
                      <strong>{siteOab.replace("OAB Nº ", "")}</strong>
                      <span>registro profissional</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container-page split-band">
          <Reveal>
            <SectionTitle kicker="Sobre o escritório" title="Compromisso com cada cliente e cada causa." />
          </Reveal>
          <Reveal>
            <div className="card card--soft">
              <p className="section-text lede--dark" style={{ margin: 0 }}>
                Consolidado há mais de 7 anos na advocacia, o escritório pauta sua atuação pela excelência técnica, pela ética e pela atuação preventiva — identificando riscos cedo e orientando a tomada de decisão com segurança, em acompanhamento próximo e diligente a cada etapa da demanda.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container-page band">
          <Reveal>
            <SectionTitle
              kicker="Áreas de atuação"
              title="Cinco frentes principais, uma mesma dedicação."
              subtitle="Um resumo rápido de onde podemos ajudar — veja o detalhe de cada frente na página de áreas de atuação."
            />
          </Reveal>
          <div className="area-teaser-list">
            {homeAreas.map((area, index) => (
              <Reveal key={area.title} delay={index * 60}>
                <AreaCard {...area} icon={area.icon} compact />
              </Reveal>
            ))}
          </div>
          <div style={{ marginTop: 28, display: "flex", justifyContent: "center" }}>
            <Link to="/areas-de-atuacao" className="button button--ghost-dark">
              Ver todas as áreas
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container-page band">
          <Reveal>
            <SectionTitle kicker="Diferenciais" title="Por que escolher o escritório." align="center" />
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

      <section className="section section--soft">
        <div className="container-page band">
          <Reveal>
            <SectionTitle kicker="Depoimentos" title="O que dizem os clientes atendidos." />
          </Reveal>
          <div className="band-grid band-grid--2">
            {testimonials.slice(0, 2).map((item, index) => (
              <Reveal key={item.name + index} delay={index * 80}>
                <TestimonialCard {...item} />
              </Reveal>
            ))}
          </div>
          <div style={{ marginTop: 28, display: "flex", justifyContent: "center" }}>
            <Link to="/depoimentos" className="button button--ghost-dark">
              Ver todos os depoimentos
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title="Seu caso merece uma análise especializada."
        description="Entre em contato e saiba qual é o melhor caminho para o seu caso."
      />
    </>
  );
}
