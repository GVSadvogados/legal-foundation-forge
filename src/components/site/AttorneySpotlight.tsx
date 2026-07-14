import { BadgeCheck, GraduationCap, Scale } from "lucide-react";
import gillianoPhoto from "@/assets/gilliano-vinicius-freitas-souza.jpeg";
import { leadAttorneyBio, leadAttorneyName, leadAttorneyOab } from "@/data";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";

type Props = {
  compact?: boolean;
};

export function AttorneySpotlight({ compact = false }: Props) {
  return (
    <section className={`section ${compact ? "section--soft-alt" : "section--soft"}`}>
      <div className="container-page">
        <div className="attorney-spotlight">
          <Reveal>
            <div className="attorney-media">
              <img
                src={gillianoPhoto}
                alt={leadAttorneyName}
                className="attorney-photo"
              />
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="attorney-copy">
              <SectionTitle
                kicker="Quem vai cuidar do seu caso"
                title="Conheça quem vai cuidar do seu caso."
                subtitle="Atuação jurídica com seriedade, proximidade e leitura técnica cuidadosa em cada etapa da demanda."
              />

              <div className="attorney-name-block">
                <h3 className="attorney-name">{leadAttorneyName}</h3>
                <div className="attorney-oab">
                  <Scale size={16} />
                  <span>{leadAttorneyOab}</span>
                </div>
              </div>

              <div className="attorney-badges">
                <span className="trust-pill trust-pill--soft">
                  <BadgeCheck size={14} />
                  Mais de 7 anos de advocacia
                </span>
                <span className="trust-pill trust-pill--soft">
                  <GraduationCap size={14} />
                  Formação jurídica continuada
                </span>
              </div>

              <div className="attorney-credentials">
                {leadAttorneyBio.map((item) => (
                  <div key={item} className="attorney-credential">
                    <span className="card-bullet">
                      <BadgeCheck size={14} />
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
