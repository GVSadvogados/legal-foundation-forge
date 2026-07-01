import { Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle } from "lucide-react";

interface Props {
  eyebrow?: string;
  title: string;
  description?: string;
}

export function CTASection({
  eyebrow = "Fale com o escritório",
  title,
  description,
}: Props) {
  return (
    <section className="relative overflow-hidden bg-ink py-24 text-white">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 30% 50%, oklch(0.745 0.09 82) 0, transparent 45%)",
        }}
      />
      <div className="container-page relative grid gap-10 md:grid-cols-[1.4fr_1fr] md:items-end">
        <div>
          <div className="mb-5 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.28em] text-gold-soft">
            <span className="h-px w-8 bg-gold" />
            {eyebrow}
          </div>
          <h2 className="font-serif text-4xl leading-[1.05] sm:text-5xl">{title}</h2>
          {description && (
            <p className="mt-5 max-w-xl text-white/70">{description}</p>
          )}
        </div>
        <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
          <Link
            to="/contato"
            className="inline-flex items-center justify-center gap-2 rounded-sm bg-gold px-6 py-4 text-sm font-medium text-ink transition-colors hover:bg-gold-soft"
          >
            Agendar consulta
            <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 rounded-sm border border-white/20 px-6 py-4 text-sm font-medium text-white transition-colors hover:border-gold hover:text-gold"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
