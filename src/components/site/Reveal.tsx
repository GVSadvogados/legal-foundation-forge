import type { ElementType, HTMLAttributes } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

interface RevealProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
}

export function Reveal({ as: Tag = "div", className, children, ...props }: RevealProps) {
  const ref = useReveal<HTMLElement>();
  return (
    <Tag ref={ref} className={cn("reveal", className)} {...props}>
      {children}
    </Tag>
  );
}
