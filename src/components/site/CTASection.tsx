import { Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle } from "lucide-react";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function CTASection({ eyebrow = "Fale com o escritório", title, description }: Props) {
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
            Agendar conversa
            <ArrowRight size={16} />
          </Link>
          <Link to="/contato" className="button button--ghost">
            <MessageCircle size={16} />
            Ver contato
          </Link>
        </div>
      </div>
    </section>
  );
}
