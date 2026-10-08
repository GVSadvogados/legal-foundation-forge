import { useEffect, useRef, useState } from "react";
import { Link, useMatchRoute } from "@tanstack/react-router";
import { Menu, MessageCircle, Scale, X } from "lucide-react";
import { navItems, siteWhatsappHref } from "@/data";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const matchRoute = useMatchRoute();
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      menuButtonRef.current?.focus();
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

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
            {navItems.map((item) => {
              const isActive = Boolean(matchRoute({ to: item.to, fuzzy: item.to !== "/" }));
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`nav-link ${isActive ? "active" : ""}`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="header-actions">
            <a href={siteWhatsappHref} className="button button--ghost" target="_blank" rel="noreferrer">
              <MessageCircle size={16} />
              <span className="header-cta-label">WhatsApp</span>
            </a>
            <button className="menu-button" ref={menuButtonRef} onClick={() => setOpen(true)} aria-label="Abrir menu">
              <Menu size={18} />
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-panel ${open ? "is-open" : ""}`} role="dialog" aria-modal="true" aria-label="Menu de navegação" aria-hidden={!open}>
        <div className="mobile-drawer">
          <div className="mobile-drawer-top">
            <Link to="/" className="brand" onClick={closeMenu}>
              <span className="brand-mark">
                <Scale size={18} />
              </span>
              <span className="brand-copy">
                <span className="brand-name">GVS Advogados</span>
                <span className="brand-subtitle">Associados</span>
              </span>
            </Link>
            <button className="icon-button" ref={closeButtonRef} onClick={closeMenu} aria-label="Fechar menu">
              <X size={18} />
            </button>
          </div>

          <div className="mobile-links">
            {navItems.map((item) => {
              const isActive = Boolean(matchRoute({ to: item.to, fuzzy: item.to !== "/" }));
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={isActive ? "active" : ""}
                  aria-current={isActive ? "page" : undefined}
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              );
            })}
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
