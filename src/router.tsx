import {
  Link,
  Outlet,
  createRootRoute,
  createRoute,
  createRouter,
  lazyRouteComponent,
  useLocation,
} from "@tanstack/react-router";
import { Suspense, useEffect } from "react";
import { SiteLayout } from "./components/site/SiteLayout";
import { ErrorBoundary } from "./components/site/ErrorBoundary";
import { usePageMeta } from "./pages/PageMeta";

const rootRoute = createRootRoute({
  component: RootOutlet,
  notFoundComponent: NotFoundPage,
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: lazyRouteComponent(() => import("./pages/HomePage"), "HomePage"),
});

const whoRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/quem-somos",
  component: lazyRouteComponent(() => import("./pages/WhoPage"), "WhoPage"),
});

const areasHubRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/areas-de-atuacao",
  component: lazyRouteComponent(() => import("./pages/AreasHubPage"), "AreasHubPage"),
});

const areaWorkRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/areas-de-atuacao/direito-do-trabalho",
  component: lazyRouteComponent(() => import("./pages/AreaWorkPage"), "AreaWorkPage"),
});

const areaConsumerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/areas-de-atuacao/direito-do-consumidor",
  component: lazyRouteComponent(() => import("./pages/AreaConsumerPage"), "AreaConsumerPage"),
});

const areaFamilyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/areas-de-atuacao/direito-civil-e-familia",
  component: lazyRouteComponent(() => import("./pages/AreaFamilyPage"), "AreaFamilyPage"),
});

const areaPrevidenciarioRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/areas-de-atuacao/direito-previdenciario",
  component: lazyRouteComponent(() => import("./pages/AreaPrevidenciarioPage"), "AreaPrevidenciarioPage"),
});

const areaPassengerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/areas-de-atuacao/direito-do-passageiro-aereo",
  component: lazyRouteComponent(() => import("./pages/AreaPassengerPage"), "AreaPassengerPage"),
});

const testimonialsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/depoimentos",
  component: lazyRouteComponent(() => import("./pages/TestimonialsPage"), "TestimonialsPage"),
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contato",
  component: lazyRouteComponent(() => import("./pages/ContactPage"), "ContactPage"),
});

const privacyPolicyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/politica-de-privacidade",
  component: lazyRouteComponent(() => import("./pages/PrivacyPolicyPage"), "PrivacyPolicyPage"),
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
  privacyPolicyRoute,
]);

export const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

function PageLoader() {
  return (
    <div className="page-loader" aria-hidden="true">
      <span className="page-loader-dot" />
    </div>
  );
}

function RootOutlet() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <SiteLayout>
      <ErrorBoundary>
        <Suspense fallback={<PageLoader />}>
          <Outlet />
        </Suspense>
      </ErrorBoundary>
    </SiteLayout>
  );
}

function NotFoundPage() {
  usePageMeta({
    title: "Página não encontrada — GVS Advogados Associados",
    description: "O endereço solicitado não existe neste site.",
    noIndex: true,
  });

  return (
    <div style={{ minHeight: "60vh", display: "grid", placeItems: "center", padding: 24 }}>
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
