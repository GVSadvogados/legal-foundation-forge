import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
    window.setTimeout(() => setSent(false), 3500);
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="field-grid">
        <div className="field">
          <label htmlFor="name">Nome</label>
          <input id="name" name="name" placeholder="Seu nome completo" />
        </div>
        <div className="field">
          <label htmlFor="email">E-mail</label>
          <input id="email" name="email" type="email" placeholder="seu@email.com" />
        </div>
        <div className="field">
          <label htmlFor="phone">Telefone</label>
          <input id="phone" name="phone" placeholder="(00) 00000-0000" />
        </div>
        <div className="field">
          <label htmlFor="subject">Assunto</label>
          <input id="subject" name="subject" placeholder="Assunto da mensagem" />
        </div>
      </div>

      <div className="field">
        <label htmlFor="message">Mensagem</label>
        <textarea id="message" name="message" placeholder="Descreva brevemente sua situação" />
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 14, alignItems: "center" }}>
        <button type="submit" className="button button--primary">
          <Send size={16} />
          Enviar mensagem
        </button>
        {sent ? <span style={{ color: "var(--stone)", fontSize: "0.94rem" }}>Mensagem registrada (placeholder, sem envio real).</span> : null}
      </div>
    </form>
  );
}
