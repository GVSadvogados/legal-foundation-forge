import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronRight, MessageCircle, Scale, ShieldCheck } from "lucide-react";
import { siteOab, sitePhoneDisplay, siteWhatsappHref } from "@/data";

type Crumb = { label: string; to?: string };

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumbs?: Crumb[];
  primaryAction?: { label: string; to: string };
  secondaryAction?: { label: string; to: string };
};

export function PageHero({ eyebrow, title, description, breadcrumbs, primaryAction, secondaryAction }: Props) {
  return (
    <section className="section section--dark hero">
      <div className="container-page hero-grid hero-grid--two">
        <div>
          {breadcrumbs ? (
            <nav className="breadcrumbs" style={{ marginBottom: 18 }}>
              {breadcrumbs.map((crumb, index) => (
                <span key={`${crumb.label}-${index}`} style={{ display: "inline-flex", gap: 10, alignItems: "center" }}>
                  {index > 0 ? <ChevronRight size={12} /> : null}
                  {crumb.to ? <Link to={crumb.to}>{crumb.label}</Link> : <span style={{ color: "rgba(255,255,255,.82)" }}>{crumb.label}</span>}
                </span>
              ))}
            </nav>
          ) : null}
          {eyebrow ? <div className="eyebrow">{eyebrow}</div> : null}
          <h1 className="hero-title">{title}</h1>
          {description ? <p className="lede">{description}</p> : null}
          {primaryAction || secondaryAction ? (
            <div className="hero-actions">
              {primaryAction ? (
                <Link to={primaryAction.to} className="button button--primary">
                  {primaryAction.label}
                  <ArrowRight size={16} />
                </Link>
              ) : null}
              {secondaryAction ? (
                <Link to={secondaryAction.to} className="button button--ghost">
                  {secondaryAction.label}
                </Link>
              ) : null}
            </div>
          ) : null}
        </div>

        <div className="hero-panel">
          <div className="hero-panel-inner">
            <div className="hero-stack">
              <div className="hero-card">
                <p className="brand-subtitle" style={{ marginBottom: 10 }}>
                  Presença institucional
                </p>
                <h3 className="hero-card-title">Atuação técnica com estratégia, clareza e proximidade.</h3>
                <p className="hero-card-copy">
                  Cada demanda é conduzida com seriedade, atenção aos detalhes e acompanhamento diligente, respeitando as particularidades jurídicas de cada cliente.
                </p>
              </div>
              <div className="hero-card">
                <div className="hero-list">
                  <div className="hero-list-item">
                    <ShieldCheck size={16} />
                    <span>{siteOab}</span>
                  </div>
                  <div className="hero-list-item">
                    <Scale size={16} />
                    <span>Mais de 7 anos de experiência na advocacia.</span>
                  </div>
                  <div className="hero-list-item">
                    <MessageCircle size={16} />
                    <span>{sitePhoneDisplay}</span>
                  </div>
                </div>
              </div>
              <a href={siteWhatsappHref} className="button button--ghost" target="_blank" rel="noreferrer">
                <MessageCircle size={16} />
                Falar pelo WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
