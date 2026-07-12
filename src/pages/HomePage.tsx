import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, MessageCircle, Phone } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
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
    <SiteLayout>
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
                      Mais do que oferecer soluções jurídicas, construímos relações baseadas em confiança, estratégia e compromisso. Cada atuação é conduzida com excelência técnica e atenção às particularidades de cada caso.
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
        <div className="container-page band" style={{ gridTemplateColumns: "0.9fr 1.1fr", display: "grid", gap: 40 }}>
          <Reveal>
            <SectionTitle kicker="Sobre o escritório" title="Compromisso com cada cliente e cada causa." />
          </Reveal>
          <Reveal>
            <div className="card card--soft">
              <p className="section-text lede--dark" style={{ margin: 0 }}>
                Consolidado há mais de 7 anos na advocacia, o escritório pauta sua atuação pela excelência técnica, pela ética e pelo compromisso com cada caso sob sua responsabilidade. Nossa trajetória é construída a partir de relações de confiança duradouras, fundamentadas na transparência, no rigor jurídico e no respeito às particularidades de cada cliente.
              </p>
              <div className="subtle-rule" style={{ margin: "22px 0" }} />
              <p className="section-text lede--dark" style={{ margin: 0 }}>
                A atuação preventiva constitui um dos pilares de nosso trabalho, permitindo a identificação antecipada de riscos e a orientação segura na tomada de decisões. Aliada à experiência consolidada de nossa equipe, oferecemos um atendimento próximo e diligente, assegurando acompanhamento qualificado em todas as etapas de cada demanda.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--soft-alt">
        <div className="container-page band">
          <Reveal>
            <SectionTitle
              kicker="Áreas de atuação"
              title="Cinco frentes principais, uma mesma dedicação."
              subtitle="Escolha uma área para conhecer nossa forma de atuação e os casos mais recorrentes em cada frente."
            />
          </Reveal>
          <div className="band-grid band-grid--5">
            {homeAreas.map((area, index) => (
              <Reveal key={area.title} delay={index * 80}>
                <AreaCard {...area} icon={area.icon} number={`0${index + 1}`} />
              </Reveal>
            ))}
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

      <section className="section section--soft-alt">
        <div className="container-page band">
          <Reveal>
            <SectionTitle kicker="Depoimentos" title="O que dizem os clientes atendidos." />
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
        title="Seu caso merece uma análise especializada."
        description="Não deixe que a falta de orientação coloque seus direitos em risco. Entre em contato e saiba qual é o melhor caminho para o seu caso."
      />
    </SiteLayout>
  );
}
