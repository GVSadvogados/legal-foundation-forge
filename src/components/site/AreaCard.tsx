import { Link } from "@tanstack/react-router";
import { ArrowUpRight, type LucideIcon } from "lucide-react";

interface Props {
  icon: LucideIcon;
  title: string;
  description: string;
  to: string;
  number?: string;
}

export function AreaCard({ icon: Icon, title, description, to, number }: Props) {
  return (
    <Link
      to={to}
      className="group relative flex h-full flex-col justify-between border border-border bg-card p-8 transition-all duration-500 hover:-translate-y-1 hover:border-stone hover:shadow-[0_20px_60px_-30px_rgba(0,0,0,0.4)]"
    >
      <div>
        <div className="flex items-start justify-between">
          <span className="inline-flex h-14 w-14 items-center justify-center rounded-sm border border-border bg-warm/60 text-stone transition-colors group-hover:border-gold group-hover:bg-ink group-hover:text-gold">
            <Icon className="h-6 w-6" strokeWidth={1.4} />
          </span>
          {number && (
            <span className="font-serif text-3xl text-muted-foreground/40">{number}</span>
          )}
        </div>
        <h3 className="mt-8 font-serif text-2xl text-ink">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{description}</p>
      </div>
      <div className="mt-8 flex items-center gap-2 text-sm font-medium text-stone transition-colors group-hover:text-gold">
        Saiba mais
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>
    </Link>
  );
}
