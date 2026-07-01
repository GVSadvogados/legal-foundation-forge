import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MessageCircle, MapPin, Clock } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { ContactForm } from "@/components/site/ContactForm";
import { MapPlaceholder } from "@/components/site/MapPlaceholder";
import { SectionTitle } from "@/components/site/SectionTitle";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — GVS Advogados Associados" },
      { name: "description", content: "Fale com o escritório GVS Advogados Associados. Telefone, e-mail, WhatsApp, endereço e formulário de contato." },
      { property: "og:title", content: "Contato — GVS Advogados Associados" },
      { property: "og:description", content: "Fale com o escritório GVS Advogados Associados. Telefone, e-mail, WhatsApp e formulário de contato." },
      { property: "og:url", content: "/contato" },
    ],
    links: [{ rel: "canonical", href: "/contato" }],
  }),
  component: Contato,
});

function Contato() {
  const items = [
    { icon: Phone, label: "Telefone", value: "[+55 (00) 0000-0000]" },
    { icon: MessageCircle, label: "WhatsApp", value: "[+55 (00) 00000-0000]" },
    { icon: Mail, label: "E-mail", value: "[contato@placeholder.com.br]" },
    { icon: MapPin, label: "Endereço", value: "[Rua Placeholder, 000 — Bairro, Cidade/UF, CEP 00000-000]" },
    { icon: Clock, label: "Horário", value: "[Segunda a sexta, 09h às 18h]" },
  ];

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Contato"
        title="Vamos conversar sobre o seu caso."
        description="[Texto placeholder — convide o visitante a preencher o formulário ou entrar em contato pelos canais disponíveis.]"
        breadcrumbs={[{ label: "Início", to: "/" }, { label: "Contato" }]}
      />

      <section className="bg-background py-24 sm:py-32">
        <div className="container-page grid gap-16 lg:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <SectionTitle kicker="Envie sua mensagem" title="Formulário de contato" />
            <div className="mt-10">
              <ContactForm />
            </div>
          </Reveal>

          <Reveal className="space-y-8">
            <div>
              <SectionTitle kicker="Canais diretos" title="Fale com o escritório" />
            </div>
            <ul className="divide-y divide-border border-y border-border">
              {items.map((it) => (
                <li key={it.label} className="flex items-start gap-5 py-5">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-sm bg-warm text-stone">
                    <it.icon className="h-4 w-4" />
                  </span>
                  <div>
                    <div className="text-[11px] font-medium uppercase tracking-[0.24em] text-muted-foreground">
                      {it.label}
                    </div>
                    <div className="mt-1 text-base text-ink">{it.value}</div>
                  </div>
                </li>
              ))}
            </ul>
            <MapPlaceholder />
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
