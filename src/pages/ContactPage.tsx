import { Clock, Mail, MessageCircle, Phone } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { SectionTitle } from "@/components/site/SectionTitle";
import { AttorneySpotlight } from "@/components/site/AttorneySpotlight";
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
        <div className="container-page">
          <Reveal>
            <div className="contact-card contact-card--compact">
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
            </div>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
