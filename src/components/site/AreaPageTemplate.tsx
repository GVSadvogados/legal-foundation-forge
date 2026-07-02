import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, Play } from "lucide-react";
import { SiteLayout } from "./SiteLayout";
import { PageHero } from "./PageHero";
import { SectionTitle } from "./SectionTitle";
import { VideoCard } from "./VideoCard";
import { CTASection } from "./CTASection";
import { Reveal } from "./Reveal";

type AreaPageProps = {
  area: string;
  title: string;
  intro: string;
  about: string[];
  videos: { title: string; description: string; duration?: string }[];
  cases: string[];
  featuredVideo?: { title: string; description: string };
};

export function AreaPageTemplate({ area, title, intro, about, videos, cases, featuredVideo }: AreaPageProps) {
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

      <section className="section section--light">
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

      <section className="section section--warm">
        <div className="container-page band">
          <Reveal>
            <SectionTitle
              kicker="Vídeos explicativos"
              title="Conteúdos para orientar com clareza."
              subtitle="Materiais introdutórios para ajudar na compreensão da área e facilitar uma conversa mais objetiva com o escritório."
            />
          </Reveal>
          <div className="band-grid band-grid--3">
            {videos.map((video, index) => (
              <Reveal key={video.title} delay={index * 70}>
                <VideoCard {...video} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--light">
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

      {featuredVideo ? (
        <section className="section section--dark">
          <div className="container-page hero-grid hero-grid--two">
            <Reveal>
              <div className="eyebrow">Vídeo destaque</div>
              <h2 className="section-title" style={{ color: "#fff" }}>
                {featuredVideo.title}
              </h2>
              <p className="lede">{featuredVideo.description}</p>
            </Reveal>
            <Reveal>
              <div className="video-thumb video-thumb--large">
                <div className="play-badge">
                  <div className="play-circle">
                    <Play size={28} fill="currentColor" />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      ) : null}

      <CTASection
        title="Seu caso merece uma análise especializada."
        description="Entre em contato com o escritório e receba orientação jurídica segura, estratégica e alinhada às particularidades da sua demanda."
      />
    </SiteLayout>
  );
}
