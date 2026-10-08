import { useState, type FormEvent } from "react";
import { MessageCircle } from "lucide-react";
import { buildWhatsappHref, whatsappDefaultMessage } from "@/data";

function buildMessage(fields: { name: string; message: string }) {
  return [whatsappDefaultMessage, "", `Nome: ${fields.name.trim()}`, `Mensagem: ${fields.message.trim()}`].join("\n");
}

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [fields, setFields] = useState({ name: "", message: "" });

  const onChange = (key: keyof typeof fields) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFields((prev) => ({ ...prev, [key]: event.target.value }));
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const text = buildMessage(fields);
    window.open(buildWhatsappHref(text), "_blank", "noopener,noreferrer");
    setSent(true);
    window.setTimeout(() => setSent(false), 6000);
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="field">
        <label htmlFor="name">Nome</label>
        <input id="name" name="name" placeholder="Seu nome completo" required value={fields.name} onChange={onChange("name")} />
      </div>

      <div className="field">
        <label htmlFor="message">Mensagem</label>
        <textarea
          id="message"
          name="message"
          placeholder="Descreva brevemente sua situação"
          required
          value={fields.message}
          onChange={onChange("message")}
        />
      </div>

      <div className="form-actions">
        <button type="submit" className="button button--primary">
          <MessageCircle size={16} />
          Enviar pelo WhatsApp
        </button>
        {sent ? (
          <span className="form-feedback">Mensagem pronta! Confirme o envio na aba do WhatsApp que acabamos de abrir.</span>
        ) : null}
      </div>
    </form>
  );
}
