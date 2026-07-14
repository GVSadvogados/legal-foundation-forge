import { useEffect, useState } from "react";
import { Link, useMatchRoute } from "@tanstack/react-router";
import { Menu, MessageCircle, Scale, X } from "lucide-react";
import { navItems, siteWhatsappHref } from "@/data";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const matchRoute = useMatchRoute();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <div className="container-page header-row">
          <Link to="/" className="brand" onClick={() => setOpen(false)}>
            <span className="brand-mark">
              <Scale size={18} />
            </span>
            <span className="brand-copy">
              <span className="brand-name">GVS Advogados</span>
              <span className="brand-subtitle">Associados</span>
            </span>
          </Link>

          <nav className="nav">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`nav-link ${matchRoute({ to: item.to, fuzzy: item.to !== "/" }) ? "active" : ""}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="header-actions">
            <a href={siteWhatsappHref} className="button button--ghost" target="_blank" rel="noreferrer">
              <MessageCircle size={16} />
              <span className="header-cta-label">WhatsApp</span>
            </a>
            <button className="menu-button" onClick={() => setOpen(true)} aria-label="Abrir menu">
              <Menu size={18} />
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-panel ${open ? "is-open" : ""}`} aria-hidden={!open}>
        <div className="mobile-drawer">
          <div className="mobile-drawer-top">
            <Link to="/" className="brand" onClick={() => setOpen(false)}>
              <span className="brand-mark">
                <Scale size={18} />
              </span>
              <span className="brand-copy">
                <span className="brand-name">GVS Advogados</span>
                <span className="brand-subtitle">Associados</span>
              </span>
            </Link>
            <button className="icon-button" onClick={() => setOpen(false)} aria-label="Fechar menu">
              <X size={18} />
            </button>
          </div>

          <div className="mobile-links">
            {navItems.map((item) => (
              <Link key={item.to} to={item.to} onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
          </div>

          <div className="mobile-drawer-cta">
            <a href={siteWhatsappHref} className="button button--primary" style={{ width: "100%" }} target="_blank" rel="noreferrer">
              <MessageCircle size={16} />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
