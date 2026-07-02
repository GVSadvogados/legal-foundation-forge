import { Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle } from "lucide-react";
import { siteWhatsappHref } from "@/data";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function CTASection({ eyebrow = "FALE COM O ESCRITORIO", title, description }: Props) {
  return (
    <section className="section section--dark">
      <div className="container-page hero-grid hero-grid--two" style={{ alignItems: "end" }}>
        <div>
          <div className="eyebrow">{eyebrow}</div>
          <h2 className="section-title" style={{ color: "#fff" }}>
            {title}
          </h2>
          {description ? <p className="lede">{description}</p> : null}
        </div>
        <div className="hero-actions" style={{ justifyContent: "flex-end" }}>
          <Link to="/contato" className="button button--primary">
            Solicite uma Análise do seu Caso
            <ArrowRight size={16} />
          </Link>
          <a href={siteWhatsappHref} className="button button--ghost" target="_blank" rel="noreferrer">
            <MessageCircle size={16} />
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
