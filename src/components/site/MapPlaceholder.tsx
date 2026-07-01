import { MapPin } from "lucide-react";

export function MapPlaceholder() {
  return (
    <div
      className="relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden border border-border bg-warm"
      style={{
        backgroundImage:
          "linear-gradient(to right, oklch(0.9 0 0) 1px, transparent 1px), linear-gradient(to bottom, oklch(0.9 0 0) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-white/40" />
      <div className="relative flex flex-col items-center gap-3 text-center">
        <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-ink text-gold shadow-lg">
          <MapPin className="h-6 w-6" />
        </span>
        <div className="text-xs uppercase tracking-[0.28em] text-muted-foreground">
          Mapa placeholder
        </div>
      </div>
    </div>
  );
}
