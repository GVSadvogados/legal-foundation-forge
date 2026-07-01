import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, Play } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { SectionTitle } from "@/components/site/SectionTitle";
import { VideoCard } from "@/components/site/VideoCard";
import { CTASection } from "@/components/site/CTASection";
import { Reveal } from "@/components/site/Reveal";

interface AreaPageProps {
  area: string;
  title: string;
  intro: string;
  about: string[];
  videos: { title: string; description: string; duration?: string }[];
  cases: string[];
  featuredVideo?: { title: string; description: string };
  extra?: ReactNode;
}

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
      />

      {/* O que atuamos */}
      <section className="bg-background py-24 sm:py-32">
        <div className="container-page grid gap-16 lg:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <SectionTitle kicker="O que atuamos" title="Nossa forma de atuação nesta área." />
          </Reveal>
          <Reveal className="space-y-5 text-base leading-relaxed text-muted-foreground">
            {about.map((p, i) => <p key={i}>{p}</p>)}
          </Reveal>
        </div>
      </section>

      {/* Vídeos explicativos */}
      <section className="bg-warm py-24 sm:py-32">
        <div className="container-page">
          <Reveal>
            <SectionTitle
              kicker="Vídeos explicativos"
              title="Casos comuns explicados pelo advogado."
              subtitle="[Texto placeholder introduzindo os vídeos desta área de atuação.]"
            />
          </Reveal>
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {videos.map((v, i) => (
              <Reveal key={i}>
                <VideoCard {...v} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Casos comuns */}
      <section className="bg-background py-24 sm:py-32">
        <div className="container-page grid gap-16 lg:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <SectionTitle kicker="Casos comuns" title="Situações em que podemos ajudar." />
          </Reveal>
          <Reveal>
            <ul className="divide-y divide-border border-y border-border">
              {cases.map((c, i) => (
                <li key={i} className="flex items-start gap-4 py-5">
                  <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-gold/50 text-gold">
                    <Check className="h-3 w-3" />
                  </span>
                  <span className="text-base text-ink">{c}</span>
                </li>
              ))}
            </ul>
            <Link to="/contato" className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-ink hover:text-stone">
              Fale sobre seu caso
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {featuredVideo && (
        <section className="bg-ink py-24 sm:py-32 text-white">
          <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <Reveal>
              <div className="mb-5 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.28em] text-gold-soft">
                <span className="h-px w-8 bg-gold" />
                Vídeo destaque
              </div>
              <h2 className="font-serif text-4xl leading-[1.05] sm:text-5xl">{featuredVideo.title}</h2>
              <p className="mt-6 max-w-lg text-white/70">{featuredVideo.description}</p>
            </Reveal>
            <Reveal>
              <div className="group relative aspect-video overflow-hidden border border-white/10 bg-graphite">
                <div aria-hidden className="absolute inset-0 opacity-40" style={{ backgroundImage: "linear-gradient(135deg, transparent 40%, oklch(0.745 0.09 82 / 0.35) 100%)" }} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="inline-flex h-20 w-20 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur transition-all group-hover:scale-110 group-hover:border-gold group-hover:bg-gold group-hover:text-ink cursor-pointer">
                    <Play className="h-7 w-7 translate-x-0.5" fill="currentColor" />
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      <CTASection title="Vamos analisar sua situação." description="[Texto placeholder de CTA específico da área.]" />
    </SiteLayout>
  );
}
