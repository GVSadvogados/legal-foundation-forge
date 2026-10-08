import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import gillianoPhoto from "@/assets/gilliano-vinicius-freitas-souza.jpeg";
import { leadAttorneyName, leadAttorneyOab } from "@/data";
import { Reveal } from "./Reveal";

export function TrustStrip() {
  return (
    <section className="section section--soft">
      <div className="container-page">
        <Reveal>
          <Link to="/quem-somos" className="trust-strip">
            <img src={gillianoPhoto} alt={leadAttorneyName} className="trust-strip-photo" width={720} height={989} />
            <div className="trust-strip-copy">
              <div className="trust-strip-name">{leadAttorneyName}</div>
              <div className="trust-strip-oab">{leadAttorneyOab} · Mais de 7 anos de advocacia</div>
            </div>
            <span className="trust-strip-link">
              <span>Conheça o advogado</span>
              <ArrowRight size={16} />
            </span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
