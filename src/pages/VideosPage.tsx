import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { SectionTitle } from "@/components/site/SectionTitle";
import { VideoCard } from "@/components/site/VideoCard";
import { CTASection } from "@/components/site/CTASection";
import { Reveal } from "@/components/site/Reveal";
import { videoItems } from "@/data";
import { usePageMeta } from "./PageMeta";

export function VideosPage() {
  usePageMeta({
    title: "Vídeos Institucionais — GVS Advogados Associados",
    description: "Vídeos institucionais e explicativos do escritório GVS Advogados Associados.",
    path: "/videos",
  });

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Vídeos Institucionais"
        title="Conteúdos sobre a atuação do escritório."
        description="Materiais explicativos para apresentar temas recorrentes, orientar o visitante e aproximar a linguagem jurídica do seu caso concreto."
        breadcrumbs={[{ label: "Início", to: "/" }, { label: "Vídeos" }]}
      />

      <section className="section section--light">
        <div className="container-page band">
          <Reveal>
            <SectionTitle kicker="Biblioteca" title="Vídeos organizados por temas de interesse." />
          </Reveal>
          <div className="band-grid band-grid--3">
            {videoItems.map((video, index) => (
              <Reveal key={video.title} delay={index * 70}>
                <VideoCard {...video} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Seu caso merece uma análise especializada."
        description="Entre em contato com o escritório para receber orientação jurídica segura e direcionada à sua necessidade."
      />
    </SiteLayout>
  );
}
