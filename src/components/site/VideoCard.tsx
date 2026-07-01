import { Play } from "lucide-react";

interface Props {
  title: string;
  description?: string;
  duration?: string;
}

export function VideoCard({ title, description, duration }: Props) {
  return (
    <article className="group cursor-pointer">
      <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-graphite to-ink">
        <div
          aria-hidden
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(135deg, transparent 0%, transparent 40%, oklch(0.745 0.09 82 / 0.25) 100%)",
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="inline-flex h-16 w-16 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:border-gold group-hover:bg-gold group-hover:text-ink">
            <Play className="h-6 w-6 translate-x-0.5" fill="currentColor" />
          </span>
        </div>
        {duration && (
          <span className="absolute bottom-3 right-3 rounded-sm bg-ink/80 px-2 py-1 text-[10px] font-medium text-white">
            {duration}
          </span>
        )}
      </div>
      <h3 className="mt-5 font-serif text-xl text-ink transition-colors group-hover:text-stone">
        {title}
      </h3>
      {description && (
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
      )}
    </article>
  );
}
