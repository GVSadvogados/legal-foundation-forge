import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

interface Crumb {
  label: string;
  to?: string;
}

interface Props {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumbs?: Crumb[];
}

export function PageHero({ eyebrow, title, description, breadcrumbs }: Props) {
  return (
    <section className="relative overflow-hidden bg-ink pt-32 pb-20 text-white">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, oklch(0.745 0.09 82) 0, transparent 50%), radial-gradient(circle at 80% 80%, oklch(0.4 0 0) 0, transparent 55%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent"
      />
      <div className="container-page relative">
        {breadcrumbs && (
          <nav className="mb-6 flex flex-wrap items-center gap-2 text-xs text-white/50">
            {breadcrumbs.map((c, i) => (
              <span key={i} className="flex items-center gap-2">
                {i > 0 && <ChevronRight className="h-3 w-3" />}
                {c.to ? (
                  <Link to={c.to} className="hover:text-gold transition-colors">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-white/70">{c.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        {eyebrow && (
          <div className="mb-5 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.28em] text-gold-soft">
            <span className="h-px w-8 bg-gold" />
            {eyebrow}
          </div>
        )}
        <h1 className="font-serif text-5xl leading-[1.05] sm:text-6xl md:text-7xl max-w-4xl">
          {title}
        </h1>
        {description && (
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
