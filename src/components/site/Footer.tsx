import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Scale } from "lucide-react";
import { navItems, siteAddress, siteOab, sitePhoneDisplay } from "@/data";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container-page footer-top">
        <div>
          <div className="brand" style={{ marginBottom: 16 }}>
            <span className="brand-mark">
              <Scale size={18} />
            </span>
            <span className="brand-copy">
              <span className="brand-name">GVS Advogados</span>
              <span className="brand-subtitle">Associados</span>
            </span>
          </div>
          <h3 className="footer-title">Advocacia institucional com presença clara, elegante e funcional.</h3>
          <p className="footer-copy">
            Mais do que oferecer soluções jurídicas, construímos relações baseadas em confiança, estratégia e compromisso. Cada atuação é conduzida com excelência técnica e atenção às particularidades de cada caso.
          </p>
          <div className="trust-row trust-row--footer">
            <span className="trust-pill">{siteOab}</span>
            <span className="trust-pill">Atendimento personalizado</span>
            <span className="trust-pill">Atuação estratégica</span>
          </div>
        </div>

        <div>
          <h4 className="footer-heading">Navegação</h4>
          <div className="footer-links">
            {navItems.map((item) => (
              <Link key={item.to} to={item.to}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="footer-heading">Contato</h4>
          <div className="footer-links">
            <span className="footer-contact">
              <Phone size={16} /> {sitePhoneDisplay}
            </span>
            <span className="footer-contact">
              <Mail size={16} /> gillianoadv@gvsadvocacia.com
            </span>
            <span className="footer-contact">
              <MapPin size={16} /> {siteAddress}
            </span>
          </div>
        </div>
      </div>

      <div className="container-page footer-bottom">
        <span>© {new Date().getFullYear()} GVS Advogados Associados. Todos os direitos reservados.</span>
        <span>{siteOab}</span>
      </div>
    </footer>
  );
}
