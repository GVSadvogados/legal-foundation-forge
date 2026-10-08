import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { CookieConsent } from "./CookieConsent";
import { useOrganizationSchema } from "@/pages/PageMeta";

export function SiteLayout({ children }: { children: ReactNode }) {
  useOrganizationSchema();

  return (
    <div className="app-shell">
      <a href="#main-content" className="skip-link">
        Pular para o conteúdo
      </a>
      <Header />
      <main id="main-content" className="page" tabIndex={-1}>
        {children}
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
}
