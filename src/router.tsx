import { Link, Outlet, createRootRoute, createRoute, createRouter, useLocation } from "@tanstack/react-router";
import { useEffect } from "react";
import { HomePage } from "./pages/HomePage";
import { WhoPage } from "./pages/WhoPage";
import { AreasHubPage } from "./pages/AreasHubPage";
import { AreaWorkPage } from "./pages/AreaWorkPage";
import { AreaConsumerPage } from "./pages/AreaConsumerPage";
import { AreaFamilyPage } from "./pages/AreaFamilyPage";
import { AreaPrevidenciarioPage } from "./pages/AreaPrevidenciarioPage";
import { AreaPassengerPage } from "./pages/AreaPassengerPage";
import { TestimonialsPage } from "./pages/TestimonialsPage";
import { ContactPage } from "./pages/ContactPage";

const rootRoute = createRootRoute({
  component: RootOutlet,
  notFoundComponent: NotFoundPage,
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const whoRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/quem-somos",
  component: WhoPage,
});

const areasHubRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/areas-de-atuacao",
  component: AreasHubPage,
});

const areaWorkRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/areas-de-atuacao/direito-do-trabalho",
  component: AreaWorkPage,
});

const areaConsumerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/areas-de-atuacao/direito-do-consumidor",
  component: AreaConsumerPage,
});

const areaFamilyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/areas-de-atuacao/direito-civil-e-familia",
  component: AreaFamilyPage,
});

const areaPrevidenciarioRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/areas-de-atuacao/direito-previdenciario",
  component: AreaPrevidenciarioPage,
});

const areaPassengerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/areas-de-atuacao/direito-do-passageiro-aereo",
  component: AreaPassengerPage,
});

const testimonialsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/depoimentos",
  component: TestimonialsPage,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contato",
  component: ContactPage,
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  whoRoute,
  areasHubRoute,
  areaWorkRoute,
  areaConsumerRoute,
  areaFamilyRoute,
  areaPrevidenciarioRoute,
  areaPassengerRoute,
  testimonialsRoute,
  contactRoute,
]);

export const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

function RootOutlet() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return <Outlet />;
}

function NotFoundPage() {
  return (
    <div style={{ minHeight: "100vh", display: "grid", placeItems: "center", background: "var(--bg)", padding: 24 }}>
      <div className="card" style={{ maxWidth: 560, textAlign: "center" }}>
        <div className="eyebrow" style={{ justifyContent: "center" }}>
          Página não encontrada
        </div>
        <h1 className="section-title" style={{ maxWidth: "none", margin: "0 auto 10px" }}>
          O endereço solicitado não existe.
        </h1>
        <p className="section-text" style={{ margin: "0 auto 24px" }}>
          Você pode voltar para a página inicial e seguir a navegação principal do escritório.
        </p>
        <Link to="/" className="button button--primary">
          Voltar para a home
        </Link>
      </div>
    </div>
  );
}
