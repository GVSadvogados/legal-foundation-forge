import type { CSSProperties, ElementType, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { useReveal } from "@/hooks/use-reveal";

type RevealProps = HTMLAttributes<HTMLElement> & {
  as?: ElementType;
  delay?: number;
};

export function Reveal({ as: Tag = "div", delay = 0, className, style, children, ...props }: RevealProps) {
  const ref = useReveal<HTMLElement>();
  const revealStyle = {
    ...(style as CSSProperties),
    ["--reveal-delay" as any]: `${delay}ms`,
  } as CSSProperties;

  return (
    <Tag ref={ref} className={cn("reveal", className)} style={revealStyle} {...props}>
      {children}
    </Tag>
  );
}
