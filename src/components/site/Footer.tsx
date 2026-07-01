import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Scale } from "lucide-react";
import { navItems } from "@/data";

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
            Texto institucional placeholder sobre a atuação do escritório, com foco em confiança,
            técnica e atendimento próximo. A proposta visual foi afinada para transmitir sobriedade
            sem perder calor humano.
          </p>
          <div className="trust-row trust-row--footer">
            <span className="trust-pill">OAB [placeholder]</span>
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
              <Phone size={16} /> [+55 (00) 0000-0000]
            </span>
            <span className="footer-contact">
              <Mail size={16} /> [contato@seudominio.com.br]
            </span>
            <span className="footer-contact">
              <MapPin size={16} /> [Rua Placeholder, 000 — Bairro, Cidade/UF]
            </span>
          </div>
        </div>
      </div>

      <div className="container-page footer-bottom">
        <span>© {new Date().getFullYear()} GVS Advogados Associados. Todos os direitos reservados.</span>
        <span>OAB [placeholder] · Site institucional em estrutura premium</span>
      </div>
    </footer>
  );
}
