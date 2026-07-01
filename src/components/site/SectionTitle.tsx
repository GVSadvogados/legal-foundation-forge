import { cn } from "@/lib/utils";

interface Props {
  kicker?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  invert?: boolean;
  className?: string;
}

export function SectionTitle({
  kicker,
  title,
  subtitle,
  align = "left",
  invert = false,
  className,
}: Props) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {kicker && (
        <div
          className={cn(
            "mb-4 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.28em]",
            align === "center" && "justify-center",
            invert ? "text-gold-soft" : "text-stone",
          )}
        >
          <span className="h-px w-8 bg-gold" />
          {kicker}
        </div>
      )}
      <h2
        className={cn(
          "font-serif text-4xl leading-[1.05] sm:text-5xl",
          invert ? "text-white" : "text-ink",
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed",
            invert ? "text-white/70" : "text-muted-foreground",
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
