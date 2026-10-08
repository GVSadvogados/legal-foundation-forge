import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { siteAddress, siteEmail, siteEmailHref, sitePhoneDisplay, sitePhoneTelHref } from "@/data";
import { usePageMeta } from "./PageMeta";

const sections = [
  {
    title: "1. Quem é o controlador dos dados",
    body: [
      "Esta Política de Privacidade descreve como o escritório GVS Advogados Associados, inscrito sob a OAB Nº 67.584, com sede em " +
        siteAddress +
        ", trata os dados pessoais coletados por meio deste site, em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 — LGPD).",
    ],
  },
  {
    title: "2. Quais dados coletamos",
    body: [
      "Coletamos apenas os dados que você nos fornece voluntariamente ao preencher o formulário de contato: nome, e-mail, telefone e o conteúdo da mensagem enviada.",
      "Este site não possui servidor próprio de armazenamento de dados: ao enviar o formulário de contato, as informações preenchidas são utilizadas exclusivamente para montar uma mensagem que é aberta diretamente no WhatsApp do escritório, para envio por você. Nenhum dado do formulário é armazenado em banco de dados ou servidor deste site.",
    ],
  },
  {
    title: "3. Cookies",
    body: [
      "Utilizamos cookies essenciais ao funcionamento do site e, quando aplicável, cookies de análise de audiência, que nos ajudam a entender como o site é utilizado e a melhorar a experiência de navegação.",
      "Você pode gerenciar suas preferências de cookies a qualquer momento por meio das configurações do seu navegador ou limpando os dados de navegação armazenados localmente.",
    ],
  },
  {
    title: "4. Finalidade do tratamento",
    body: [
      "Os dados fornecidos por meio do formulário de contato são utilizados exclusivamente para possibilitar o primeiro contato entre você e o escritório, a fim de esclarecer dúvidas e avaliar a possibilidade de atendimento jurídico.",
    ],
  },
  {
    title: "5. Compartilhamento de dados",
    body: [
      "Não vendemos, alugamos ou compartilhamos seus dados pessoais com terceiros para fins comerciais. Os dados informados no formulário de contato são direcionados apenas ao WhatsApp do próprio escritório.",
    ],
  },
  {
    title: "6. Seus direitos como titular de dados",
    body: [
      "Nos termos da LGPD, você tem direito a confirmar a existência de tratamento, acessar, corrigir, anonimizar, bloquear ou eliminar dados desnecessários, solicitar a portabilidade e revogar o consentimento dado, entre outros direitos previstos em lei.",
      "Para exercer qualquer um desses direitos, entre em contato pelos canais indicados abaixo.",
    ],
  },
  {
    title: "7. Alterações desta política",
    body: [
      "Esta Política de Privacidade pode ser atualizada periodicamente para refletir melhorias no site ou mudanças legislativas. Recomendamos a consulta ocasional desta página.",
    ],
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
