import { Link } from "@tanstack/react-router";
import type { LucideIcon } from "lucide-react";
import { ArrowUpRight } from "lucide-react";

type Props = {
  icon: LucideIcon;
  title: string;
  description: string;
  to: string;
  number?: string;
};

export function AreaCard({ icon: Icon, title, description, to, number }: Props) {
  return (
    <Link to={to} className="card">
      <div className="card-header">
        <div className="card-icon">
          <Icon size={24} strokeWidth={1.5} />
        </div>
        {number ? <div style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: "2.4rem", color: "rgba(13,13,13,.18)", lineHeight: 1 }}>{number}</div> : null}
      </div>
      <h3 className="card-title">{title}</h3>
      <p className="card-copy">{description}</p>
      <div className="card-footer">
        Saiba mais <ArrowUpRight size={16} />
      </div>
    </Link>
  );
}
