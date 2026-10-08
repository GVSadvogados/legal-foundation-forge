import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Cookie } from "lucide-react";

const STORAGE_KEY = "gvs-cookie-consent";

function readConsent(): string | null {
  try {
    return window.localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

function writeConsent(value: "accepted" | "rejected") {
  try {
    window.localStorage.setItem(STORAGE_KEY, value);
  } catch {
    // localStorage indisponível (modo privado, por exemplo); apenas oculta o banner nesta sessão.
  }
}

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(!readConsent());
  }, []);

  if (!visible) return null;

  const decide = (value: "accepted" | "rejected") => {
    writeConsent(value);
    setVisible(false);
  };

  return (
    <div className="cookie-banner" role="dialog" aria-label="Aviso de cookies">
      <div className="cookie-banner-inner">
        <div className="cookie-banner-icon">
          <Cookie size={20} />
        </div>
        <p className="cookie-banner-text">
          Utilizamos cookies essenciais e de análise para melhorar sua experiência neste site. Ao continuar navegando, você concorda com nossa{" "}
          <Link to="/politica-de-privacidade">Política de Privacidade</Link>.
        </p>
        <div className="cookie-banner-actions">
          <button type="button" className="button button--ghost" onClick={() => decide("rejected")}>
            Rejeitar
          </button>
          <button type="button" className="button button--primary" onClick={() => decide("accepted")}>
            Aceitar
          </button>
        </div>
      </div>
    </div>
  );
}
