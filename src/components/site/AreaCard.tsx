import { Link } from "@tanstack/react-router";
import { ArrowUpRight, type LucideIcon } from "lucide-react";

type Props = {
  icon: LucideIcon;
  title: string;
  description: string;
  to: string;
  number?: string;
  compact?: boolean;
};

export function AreaCard({ icon: Icon, title, description, to, number, compact = false }: Props) {
  if (compact) {
    return (
      <Link to={to} className="card area-card area-card--compact">
        <div className="card-icon">
          <Icon size={22} strokeWidth={1.5} />
        </div>
        <h3 className="card-title card-title--compact">{title}</h3>
        <div className="card-footer">
          <span>Saiba mais</span> <ArrowUpRight size={14} />
        </div>
      </Link>
    );
  }

  return (
    <Link to={to} className="card area-card">
      <div className="card-header">
        <div className="card-icon">
          <Icon size={24} strokeWidth={1.5} />
        </div>
        {number ? (
          <div className="card-number">{number}</div>
        ) : null}
      </div>
      <h3 className="card-title">{title}</h3>
      <p className="card-copy">{description}</p>
      <div className="card-footer">
        Saiba mais <ArrowUpRight size={16} />
      </div>
    </Link>
  );
}
