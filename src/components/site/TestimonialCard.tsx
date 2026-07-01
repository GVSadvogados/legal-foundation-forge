import { Quote } from "lucide-react";

interface Props {
  quote: string;
  name: string;
  area: string;
}

export function TestimonialCard({ quote, name, area }: Props) {
  return (
    <figure className="flex h-full flex-col border border-border bg-card p-8 transition-colors hover:border-stone/60">
      <Quote className="h-8 w-8 text-gold" strokeWidth={1.2} />
      <blockquote className="mt-6 flex-1 font-serif text-xl leading-snug text-ink">
        “{quote}”
      </blockquote>
      <figcaption className="mt-8 border-t border-border pt-5">
        <div className="text-sm font-semibold text-ink">{name}</div>
        <div className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
          {area}
        </div>
      </figcaption>
    </figure>
  );
}
