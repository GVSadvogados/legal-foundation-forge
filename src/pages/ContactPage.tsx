import { Clock, Mail, MessageCircle, MapPin, Phone } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { SectionTitle } from "@/components/site/SectionTitle";
import { ContactForm } from "@/components/site/ContactForm";
import { MapPlaceholder } from "@/components/site/MapPlaceholder";
import { Reveal } from "@/components/site/Reveal";
import { sitePhoneDisplay } from "@/data";
import { usePageMeta } from "./PageMeta";

export function ContactPage() {
  usePageMeta({
    title: "Contato — GVS Advogados Associados",
    description:
      "Fale com o escritório GVS Advogados Associados. Telefone, WhatsApp, e-mail, endereço e formulário de contato.",
    path: "/contato",
  });

  const items = [
    { icon: Phone, label: "Telefone", value: sitePhoneDisplay },
    { icon: MessageCircle, label: "WhatsApp", value: sitePhoneDisplay },
    { icon: Mail, label: "E-mail", value: "gillianoadv@gvsadvocacia.com" },
    { icon: MapPin, label: "Endereço", value: "Endereço profissional a ser informado" },
    { icon: Clock, label: "Horário", value: "Segunda a sexta, das 8h às 18h" },
  ];

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Contato"
        title="Fale com o escritório."
        description="Seu caso merece uma análise especializada. Entre em contato para receber orientação segura e atendimento próximo."
        breadcrumbs={[{ label: "Início", to: "/" }, { label: "Contato" }]}
      />

      <section className="section section--light">
        <div className="container-page contact-grid">
          <Reveal>
            <div className="contact-card">
              <SectionTitle kicker="Envie sua mensagem" title="Solicite uma análise do seu caso" />
              <div style={{ marginTop: 28 }}>
                <ContactForm />
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="contact-card">
              <SectionTitle kicker="Canais diretos" title="Fale com o escritório" />
              <div className="contact-stack" style={{ marginTop: 24 }}>
                {items.map((item) => (
                  <div className="contact-item" key={item.label}>
                    <div className="contact-icon">
                      <item.icon size={16} />
                    </div>
                    <div>
                      <div className="testimonial-area" style={{ marginTop: 0 }}>
                        {item.label}
                      </div>
                      <div style={{ marginTop: 6, color: "var(--ink)", lineHeight: 1.65 }}>{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 22 }}>
                <MapPlaceholder />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
