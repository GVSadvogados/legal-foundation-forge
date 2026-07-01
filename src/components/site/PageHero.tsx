import { Link } from "@tanstack/react-router";
import { ChevronRight, ArrowRight } from "lucide-react";

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
      <div className="animated-blob blob-1" />
      <div className="animated-blob blob-2" />
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
                  Estrutura institucional
                </p>
                <h3 className="hero-card-title">Visual sóbrio, leitura imediata, presença premium.</h3>
                <p className="hero-card-copy">
                  O site foi reorganizado para valorizar hierarquia, respiração e fluidez entre seções.
                </p>
              </div>
              <div className="hero-card">
                <h3 className="hero-card-title">Navegação clara</h3>
                <p className="hero-card-copy">
                  Home, áreas, vídeos, depoimentos e contato ficam mais fáceis de escanear no desktop e no mobile.
                </p>
              </div>
              <div className="hero-card">
                <h3 className="hero-card-title">Animações discretas</h3>
                <p className="hero-card-copy">
                  Revelação por scroll, hover refinado e microinterações suaves sem exagero visual.
                </p>
              </div>
              <div className="hero-metrics">
                <div className="metric">
                  <strong>08</strong>
                  <span>rotas principais</span>
                </div>
                <div className="metric">
                  <strong>03</strong>
                  <span>áreas de atuação</span>
                </div>
                <div className="metric">
                  <strong>100%</strong>
                  <span>placeholders prontos</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
