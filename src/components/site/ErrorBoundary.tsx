import { Component, type ErrorInfo, type ReactNode } from "react";

type Props = { children: ReactNode };
type State = { hasError: boolean };

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("Erro na aplicação:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ minHeight: "60vh", display: "grid", placeItems: "center", padding: 24 }}>
          <div className="card" style={{ maxWidth: 560, textAlign: "center" }}>
            <div className="eyebrow" style={{ justifyContent: "center" }}>
              Algo deu errado
            </div>
            <h1 className="section-title" style={{ maxWidth: "none", margin: "0 auto 10px" }}>
              Não foi possível carregar esta página.
            </h1>
            <p className="section-text" style={{ margin: "0 auto 24px" }}>
              Tente recarregar a página. Se o problema continuar, entre em contato pelo WhatsApp.
            </p>
            <button type="button" className="button button--primary" onClick={() => window.location.reload()}>
              Recarregar página
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
