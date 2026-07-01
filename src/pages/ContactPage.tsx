import { Clock, Mail, MessageCircle, MapPin, Phone } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { SectionTitle } from "@/components/site/SectionTitle";
import { ContactForm } from "@/components/site/ContactForm";
import { MapPlaceholder } from "@/components/site/MapPlaceholder";
import { Reveal } from "@/components/site/Reveal";
import { usePageMeta } from "./PageMeta";

export function ContactPage() {
  usePageMeta({
    title: "Contato — GVS Advogados Associados",
    description:
      "Fale com o escritório GVS Advogados Associados. Telefone, e-mail, WhatsApp, endereço e formulário de contato.",
    path: "/contato",
  });

  const items = [
    { icon: Phone, label: "Telefone", value: "[+55 (00) 0000-0000]" },
    { icon: MessageCircle, label: "WhatsApp", value: "[+55 (00) 00000-0000]" },
    { icon: Mail, label: "E-mail", value: "[contato@seudominio.com.br]" },
    { icon: MapPin, label: "Endereço", value: "[Rua Placeholder, 000 — Bairro, Cidade/UF]" },
    { icon: Clock, label: "Horário", value: "[Segunda a sexta, 09h às 18h]" },
  ];

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Contato"
        title="Vamos conversar sobre o seu caso."
        description="Página de contato mais organizada, com formulário, canais diretos e mapa placeholder em equilíbrio."
        breadcrumbs={[{ label: "Início", to: "/" }, { label: "Contato" }]}
      />

      <section className="section section--light">
        <div className="container-page contact-grid">
          <Reveal>
            <div className="contact-card">
              <SectionTitle kicker="Envie sua mensagem" title="Formulário de contato" />
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
