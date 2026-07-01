import { cn } from "@/lib/utils";

type Props = {
  kicker?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
};

export function SectionTitle({ kicker, title, subtitle, align = "left", dark = false, className }: Props) {
  return (
    <div className={cn("section-head", align === "center" && "section-head--center", className)}>
      {kicker ? <div className="section-kicker">{kicker}</div> : null}
      <h2 className="section-title" style={dark ? { color: "#fff" } : undefined}>
        {title}
      </h2>
      {subtitle ? (
        <p className="section-text" style={dark ? { color: "rgba(255,255,255,.72)" } : undefined}>
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
