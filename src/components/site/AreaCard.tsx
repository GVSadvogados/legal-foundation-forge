import { Link } from "@tanstack/react-router";
import { ArrowUpRight, type LucideIcon } from "lucide-react";

type Props = {
  icon: LucideIcon;
  title: string;
  description: string;
  to: string;
  number?: string;
};

export function AreaCard({ icon: Icon, title, description, to, number }: Props) {
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
