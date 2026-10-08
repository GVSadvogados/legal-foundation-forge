import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { siteAddress, siteEmail, siteEmailHref, sitePhoneDisplay, sitePhoneTelHref } from "@/data";
import { usePageMeta } from "./PageMeta";

const sections = [
  {
    title: "1. Quem é o controlador dos dados",
    body: [
      "Esta política descreve como o escritório GVS Advogados Associados (OAB Nº 67.584) trata os dados pessoais coletados por meio deste site, em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 — LGPD).",
    ],
  },
  {
    title: "2. Quais dados coletamos",
    body: [
      "Coletamos apenas o que você informa voluntariamente no formulário de contato: nome e mensagem. Este site não tem servidor de armazenamento — os dados são usados só para montar a mensagem aberta no WhatsApp do escritório, e nenhum fica salvo em banco de dados.",
    ],
  },
  {
    title: "3. Cookies",
    body: [
      "Utilizamos cookies essenciais ao funcionamento do site e, quando aplicável, cookies de análise de audiência. Você pode gerenciar suas preferências a qualquer momento nas configurações do navegador.",
    ],
  },
  {
    title: "4. Finalidade do tratamento",
    body: ["Os dados do formulário de contato são usados apenas para viabilizar o primeiro contato entre você e o escritório."],
  },
  {
    title: "5. Compartilhamento de dados",
    body: [
      "Não vendemos, alugamos ou compartilhamos seus dados com terceiros para fins comerciais. As informações do formulário vão apenas para o WhatsApp do escritório.",
    ],
  },
  {
    title: "6. Seus direitos como titular de dados",
    body: [
      "Nos termos da LGPD, você pode confirmar a existência de tratamento, acessar, corrigir, anonimizar, eliminar dados ou revogar o consentimento, entre outros direitos previstos em lei. Para exercê-los, use os canais de contato abaixo.",
    ],
  },
  {
    title: "7. Alterações desta política",
    body: ["Esta política pode ser atualizada periodicamente. Recomendamos a consulta ocasional desta página."],
  },
];

export function PrivacyPolicyPage() {
  usePageMeta({
    title: "Política de Privacidade — GVS Advogados Associados",
    description: "Como o escritório GVS Advogados Associados trata dados pessoais e cookies coletados por meio deste site, em conformidade com a LGPD.",
    path: "/politica-de-privacidade",
  });

  return (
    <>
      <PageHero
        eyebrow="Transparência"
        title="Política de Privacidade."
        description="Entenda como tratamos os dados pessoais e os cookies deste site, em conformidade com a Lei Geral de Proteção de Dados (LGPD)."
        breadcrumbs={[{ label: "Início", to: "/" }, { label: "Política de Privacidade" }]}
      />

      <section className="section section--soft">
        <div className="container-page">
          <Reveal>
            <div className="card card--soft policy-card" style={{ maxWidth: 820, margin: "0 auto" }}>
              {sections.map((section) => (
                <div key={section.title} className="policy-section">
                  <h3 className="policy-heading">{section.title}</h3>
                  {section.body.map((paragraph) => (
                    <p key={paragraph} className="section-text lede--dark" style={{ marginTop: 12 }}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              ))}

              <div className="subtle-rule" style={{ margin: "8px 0 24px" }} />

              <h3 className="policy-heading">8. Contato do controlador</h3>
              <p className="section-text lede--dark" style={{ marginTop: 12 }}>
                Telefone: <a href={sitePhoneTelHref}>{sitePhoneDisplay}</a>
                <br />
                E-mail: <a href={siteEmailHref}>{siteEmail}</a>
                <br />
                Endereço: {siteAddress}
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
