import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { CookieConsent } from "./CookieConsent";
import { useOrganizationSchema } from "@/pages/PageMeta";

export function SiteLayout({ children }: { children: ReactNode }) {
  useOrganizationSchema();

  return (
    <div className="app-shell">
      <Header />
      <main className="page">{children}</main>
      <Footer />
      <CookieConsent />
    </div>
  );
}
