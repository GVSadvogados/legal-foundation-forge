import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { VideoCard } from "@/components/site/VideoCard";
import { CTASection } from "@/components/site/CTASection";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/videos")({
  head: () => ({
    meta: [
      { title: "Vídeos Institucionais — GVS Advogados Associados" },
      { name: "description", content: "Vídeos institucionais e explicativos do escritório GVS Advogados Associados." },
      { property: "og:title", content: "Vídeos Institucionais — GVS Advogados Associados" },
      { property: "og:description", content: "Vídeos institucionais e explicativos do escritório GVS Advogados Associados." },
      { property: "og:url", content: "/videos" },
    ],
    links: [{ rel: "canonical", href: "/videos" }],
  }),
  component: Videos,
});

function Videos() {
  const videos = Array.from({ length: 6 }).map((_, i) => ({
    title: `[Título do vídeo placeholder ${i + 1}]`,
    description: "[Descrição curta placeholder sobre o conteúdo do vídeo.]",
    duration: ["04:12", "05:33", "07:08", "03:47", "06:22", "05:01"][i],
  }));

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Vídeos Institucionais"
        title="Conteúdos sobre nossa forma de atuar."
        description="[Texto placeholder introdutório sobre os vídeos publicados pelo escritório.]"
        breadcrumbs={[{ label: "Início", to: "/" }, { label: "Vídeos" }]}
      />
      <section className="bg-background py-24 sm:py-32">
        <div className="container-page grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {videos.map((v, i) => (
            <Reveal key={i}>
              <VideoCard {...v} />
            </Reveal>
          ))}
        </div>
      </section>
      <CTASection
        eyebrow="Novos conteúdos"
        title="Acompanhe as próximas publicações."
        description="[Texto placeholder convidando a acompanhar as redes sociais para novos conteúdos.]"
      />
    </SiteLayout>
  );
}
