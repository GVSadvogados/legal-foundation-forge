import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { SectionTitle } from "@/components/site/SectionTitle";
import { AttorneySpotlight } from "@/components/site/AttorneySpotlight";
import { ContactForm } from "@/components/site/ContactForm";
import { MapEmbed } from "@/components/site/MapEmbed";
import { Reveal } from "@/components/site/Reveal";
import { siteAddress, siteEmail, siteEmailHref, sitePhoneDisplay, sitePhoneTelHref, siteWhatsappHref } from "@/data";
import { usePageMeta } from "./PageMeta";

export function ContactPage() {
  usePageMeta({
    title: "Contato — GVS Advogados Associados",
    description:
      "Fale com o escritório GVS Advogados Associados. Telefone, WhatsApp, e-mail, endereço e formulário de contato.",
    path: "/contato",
  });

  const items = [
    { icon: Phone, label: "Telefone", value: sitePhoneDisplay, href: sitePhoneTelHref },
    { icon: MessageCircle, label: "WhatsApp", value: sitePhoneDisplay, href: siteWhatsappHref, external: true },
    { icon: Mail, label: "E-mail", value: siteEmail, href: siteEmailHref },
    {
      icon: MapPin,
      label: "Endereço",
      value: siteAddress,
      href: `https://maps.google.com/maps?q=${encodeURIComponent(siteAddress)}`,
      external: true,
    },
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

      <AttorneySpotlight compact />

      <section className="section section--soft">
        <div className="container-page contact-grid">
          <Reveal>
            <div className="contact-card">
              <SectionTitle
                kicker="Envie uma mensagem"
                title="Conte brevemente o seu caso"
                subtitle="Preencha o formulário abaixo: sua mensagem será aberta no WhatsApp do escritório, pronta para enviar."
              />
              <div style={{ marginTop: 24 }}>
                <ContactForm />
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div style={{ display: "grid", gap: 24, height: "100%" }}>
              <div className="contact-card">
                <SectionTitle kicker="Canais diretos" title="Outras formas de contato" />
                <div className="contact-stack" style={{ marginTop: 24 }}>
                  {items.map((item) => {
                    const Tag = item.href ? "a" : "div";
                    return (
                      <Tag
                        className="contact-item"
                        key={item.label}
                        {...(item.href
                          ? { href: item.href, ...(item.external ? { target: "_blank", rel: "noreferrer" } : {}) }
                          : {})}
                      >
                        <div className="contact-icon">
                          <item.icon size={16} />
                        </div>
                        <div>
                          <div className="testimonial-area" style={{ marginTop: 0 }}>
                            {item.label}
                          </div>
                          <div style={{ marginTop: 6, color: "var(--ink)", lineHeight: 1.65 }}>{item.value}</div>
                        </div>
                      </Tag>
                    );
                  })}
                </div>
              </div>

              <MapEmbed />
            </div>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
