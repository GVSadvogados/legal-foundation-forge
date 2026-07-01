import { createFileRoute } from "@tanstack/react-router";
import { Target, Eye, HeartHandshake } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { SectionTitle } from "@/components/site/SectionTitle";
import { CTASection } from "@/components/site/CTASection";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/quem-somos")({
  head: () => ({
    meta: [
      { title: "Quem Somos — GVS Advogados Associados" },
      { name: "description", content: "Conheça a história, missão, valores e equipe do escritório GVS Advogados Associados." },
      { property: "og:title", content: "Quem Somos — GVS Advogados Associados" },
      { property: "og:description", content: "Conheça a história, missão, valores e equipe do escritório GVS Advogados Associados." },
      { property: "og:url", content: "/quem-somos" },
    ],
    links: [{ rel: "canonical", href: "/quem-somos" }],
  }),
  component: QuemSomos,
});

function QuemSomos() {
  const pillars = [
    { icon: Target, t: "Missão", d: "[Missão placeholder — descreva em uma ou duas frases o propósito central do escritório.]" },
    { icon: Eye, t: "Visão", d: "[Visão placeholder — onde o escritório quer chegar e como quer ser reconhecido.]" },
    { icon: HeartHandshake, t: "Valores", d: "[Valores placeholder — ética, transparência, comprometimento e atendimento humanizado.]" },
  ];

  const team = [1, 2, 3, 4];

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Quem Somos"
        title="Uma advocacia construída sobre confiança e técnica."
        description="[Texto placeholder de abertura sobre o escritório, sua origem e a forma como conduz cada atendimento.]"
        breadcrumbs={[{ label: "Início", to: "/" }, { label: "Quem Somos" }]}
      />

      <section className="bg-background py-24 sm:py-32">
        <div className="container-page grid gap-8 md:grid-cols-3">
          {pillars.map((p) => (
            <Reveal key={p.t} className="border border-border bg-card p-8">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-sm bg-warm text-stone">
                <p.icon className="h-5 w-5" strokeWidth={1.4} />
              </span>
              <h3 className="mt-6 font-serif text-2xl text-ink">{p.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-warm py-24 sm:py-32">
        <div className="container-page grid gap-16 lg:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <SectionTitle kicker="Nossa história" title="Trajetória construída caso a caso." />
          </Reveal>
          <Reveal className="space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>[Parágrafo placeholder — conte a origem do escritório, os fundadores e o momento em que foi criado.]</p>
            <p>[Parágrafo placeholder — descreva a evolução, especializações desenvolvidas e marcos importantes.]</p>
            <p>[Parágrafo placeholder — reforce a forma de atuação atual e o posicionamento perante os clientes.]</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-background py-24 sm:py-32">
        <div className="container-page">
          <Reveal>
            <SectionTitle
              kicker="Equipe"
              title="Profissionais dedicados a cada demanda."
              subtitle="[Texto placeholder sobre a equipe, formação e áreas de especialização.]"
            />
          </Reveal>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((n) => (
              <Reveal key={n} className="group">
                <div className="relative aspect-[3/4] overflow-hidden bg-gradient-to-br from-warm to-muted">
                  <div className="absolute inset-4 border border-border" />
                  <div className="absolute bottom-4 left-4 right-4 text-xs uppercase tracking-[0.24em] text-muted-foreground">
                    Foto placeholder
                  </div>
                </div>
                <div className="mt-5">
                  <div className="font-serif text-xl text-ink">Nome do Advogado {n}</div>
                  <div className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    Área de atuação · OAB [placeholder]
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Conte com uma equipe experiente." description="[Texto placeholder de CTA para agendar uma conversa inicial.]" />
    </SiteLayout>
  );
}
