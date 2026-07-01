import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin, Facebook, Mail, Phone, MapPin, Scale } from "lucide-react";
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
          <p style={{ maxWidth: 560, lineHeight: 1.85, marginTop: 16 }}>
            Breve texto institucional placeholder sobre a atuação do escritório, com foco em confiança, técnica e atendimento próximo.
          </p>
          <div style={{ display: "flex", gap: 12, marginTop: 20 }}>
            {[Instagram, Linkedin, Facebook].map((Icon, index) => (
              <a key={index} href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="icon-button" aria-label="Rede social">
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 style={{ color: "#fff", fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: "1.6rem", margin: "0 0 18px" }}>Navegação</h4>
          <div className="footer-links">
            {navItems.map((item) => (
              <Link key={item.to} to={item.to}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 style={{ color: "#fff", fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: "1.6rem", margin: "0 0 18px" }}>Contato</h4>
          <div className="footer-links">
            <span style={{ display: "inline-flex", gap: 10, alignItems: "center" }}><Phone size={16} /> [Telefone placeholder]</span>
            <span style={{ display: "inline-flex", gap: 10, alignItems: "center" }}><Mail size={16} /> [email@placeholder.com.br]</span>
            <span style={{ display: "inline-flex", gap: 10, alignItems: "center" }}><MapPin size={16} /> [Endereço placeholder]</span>
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
