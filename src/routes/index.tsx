import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Briefcase, Gavel, User, Shield, Award, Users2, Clock } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionTitle } from "@/components/site/SectionTitle";
import { AreaCard } from "@/components/site/AreaCard";
import { TestimonialCard } from "@/components/site/TestimonialCard";
import { CTASection } from "@/components/site/CTASection";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GVS Advogados Associados — Atuação jurídica estratégica e ética" },
      { name: "description", content: "Escritório de advocacia com atendimento personalizado em Direito do Trabalho, do Consumidor e Civil e Família." },
      { property: "og:title", content: "GVS Advogados Associados" },
      { property: "og:description", content: "Escritório de advocacia com atendimento personalizado em Direito do Trabalho, do Consumidor e Civil e Família." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative min-h-[92vh] overflow-hidden bg-ink text-white flex items-center pt-32 pb-24">
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 20% 30%, oklch(0.745 0.09 82) 0, transparent 55%), radial-gradient(ellipse at 80% 70%, oklch(0.4 0 0) 0, transparent 55%)",
          }}
        />
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        <div className="container-page relative grid gap-16 lg:grid-cols-[1.3fr_1fr] lg:items-center">
          <div>
            <Reveal className="mb-6 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.28em] text-gold-soft">
              <span className="h-px w-8 bg-gold" />
              Advocacia Institucional
            </Reveal>
            <Reveal as="h1" className="font-serif text-5xl leading-[1.02] sm:text-6xl md:text-7xl">
              Atuação jurídica estratégica,
              <br />
              <span className="italic text-gold-soft">ética e personalizada.</span>
            </Reveal>
            <Reveal as="p" className="mt-8 max-w-xl text-lg leading-relaxed text-white/70">
              [Breve subtítulo institucional placeholder sobre o escritório, sua forma de atuação
              e o compromisso com cada cliente atendido.]
            </Reveal>
            <Reveal className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/contato"
                className="inline-flex items-center gap-2 rounded-sm bg-gold px-7 py-4 text-sm font-medium text-ink transition-colors hover:bg-gold-soft"
              >
                Agendar consulta
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/areas-de-atuacao"
                className="inline-flex items-center gap-2 rounded-sm border border-white/20 px-7 py-4 text-sm font-medium text-white transition-colors hover:border-gold hover:text-gold"
              >
                Áreas de atuação
              </Link>
            </Reveal>
          </div>

          <Reveal className="relative hidden lg:block">
            <div className="relative aspect-[4/5] w-full overflow-hidden border border-white/10 bg-gradient-to-br from-graphite via-ink to-graphite">
              <div
                aria-hidden
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, transparent 40%, oklch(0.745 0.09 82 / 0.3) 100%)",
                }}
              />
              <div className="absolute inset-6 border border-gold/30" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="text-[10px] uppercase tracking-[0.3em] text-gold-soft/80">
                  Imagem placeholder
                </div>
                <div className="mt-2 font-serif text-2xl text-white/90">
                  Substitua por foto do escritório
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Apresentação */}
      <section className="bg-background py-24 sm:py-32">
        <div className="container-page grid gap-16 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <Reveal>
            <SectionTitle
              kicker="Sobre o escritório"
              title="Compromisso com cada cliente e cada causa."
            />
          </Reveal>
          <Reveal className="space-y-5 text-base leading-relaxed text-muted-foreground lg:pt-4">
            <p>
              [Texto institucional placeholder — apresente aqui, em duas ou três frases, o
              posicionamento do escritório, sua história e o tipo de relacionamento construído
              com os clientes.]
            </p>
            <p>
              [Segundo parágrafo placeholder — reforce diferenciais como atendimento humanizado,
              atuação preventiva e experiência da equipe.]
            </p>
            <Link
              to="/quem-somos"
              className="inline-flex items-center gap-2 pt-4 text-sm font-medium text-ink hover:text-stone transition-colors"
            >
              Conheça o escritório
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Áreas */}
      <section className="bg-warm py-24 sm:py-32">
        <div className="container-page">
          <Reveal>
            <SectionTitle
              kicker="Áreas de atuação"
              title="Três frentes principais, uma mesma dedicação."
              subtitle="Escolha uma área para conhecer nossa forma de atuação, os casos comuns e os vídeos explicativos."
            />
          </Reveal>
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {[
              { icon: Briefcase, title: "Direito do Trabalho", to: "/areas-de-atuacao/direito-do-trabalho", n: "01", desc: "Atuação em demandas trabalhistas com foco em resultado e segurança jurídica." },
              { icon: User, title: "Direito do Consumidor", to: "/areas-de-atuacao/direito-do-consumidor", n: "02", desc: "Defesa dos direitos do consumidor em relações de consumo abusivas ou falhas." },
              { icon: Gavel, title: "Direito Civil e Família", to: "/areas-de-atuacao/direito-civil-e-familia", n: "03", desc: "Suporte jurídico em questões civis, patrimoniais e familiares complexas." },
            ].map((a) => (
              <Reveal key={a.title}>
                <AreaCard icon={a.icon} title={a.title} description={a.desc} to={a.to} number={a.n} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="bg-background py-24 sm:py-32">
        <div className="container-page">
          <Reveal>
            <SectionTitle
              kicker="Diferenciais"
              title="Por que escolher o escritório."
              align="center"
            />
          </Reveal>
          <div className="mt-16 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Shield, t: "Ética e transparência", d: "[Descrição placeholder sobre o compromisso ético do escritório.]" },
              { icon: Award, t: "Experiência consolidada", d: "[Descrição placeholder sobre trajetória e casos atendidos.]" },
              { icon: Users2, t: "Atendimento humanizado", d: "[Descrição placeholder sobre proximidade com o cliente.]" },
              { icon: Clock, t: "Resposta ágil", d: "[Descrição placeholder sobre agilidade e disponibilidade.]" },
            ].map((f) => (
              <Reveal key={f.t} className="text-center">
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-border text-stone">
                  <f.icon className="h-5 w-5" strokeWidth={1.4} />
                </span>
                <h3 className="mt-6 font-serif text-xl text-ink">{f.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="bg-warm py-24 sm:py-32">
        <div className="container-page">
          <Reveal>
            <SectionTitle
              kicker="Depoimentos"
              title="O que dizem os clientes atendidos."
            />
          </Reveal>
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { q: "[Depoimento placeholder — texto neutro sobre a experiência com o escritório.]", n: "Cliente Placeholder", a: "Direito do Trabalho" },
              { q: "[Depoimento placeholder — texto neutro sobre a experiência com o escritório.]", n: "Cliente Placeholder", a: "Direito do Consumidor" },
              { q: "[Depoimento placeholder — texto neutro sobre a experiência com o escritório.]", n: "Cliente Placeholder", a: "Direito Civil e Família" },
            ].map((t, i) => (
              <Reveal key={i}>
                <TestimonialCard quote={t.q} name={t.n} area={t.a} />
              </Reveal>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/depoimentos" className="inline-flex items-center gap-2 text-sm font-medium text-ink hover:text-stone">
              Ver todos os depoimentos
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title="Vamos analisar o seu caso."
        description="[Texto placeholder de chamada final — convide o visitante a agendar uma conversa inicial.]"
      />
    </SiteLayout>
  );
}
