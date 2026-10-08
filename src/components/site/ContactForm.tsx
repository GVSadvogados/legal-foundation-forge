import { useState, type FormEvent } from "react";
import { MessageCircle } from "lucide-react";
import { buildWhatsappHref, whatsappDefaultMessage } from "@/data";

function buildMessage(fields: { name: string; email: string; phone: string; subject: string; message: string }) {
  const lines = [whatsappDefaultMessage, ""];
  lines.push(`Nome: ${fields.name.trim()}`);
  if (fields.subject.trim()) lines.push(`Assunto: ${fields.subject.trim()}`);
  if (fields.phone.trim()) lines.push(`Telefone: ${fields.phone.trim()}`);
  if (fields.email.trim()) lines.push(`E-mail: ${fields.email.trim()}`);
  lines.push(`Mensagem: ${fields.message.trim()}`);
  return lines.join("\n");
}

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [fields, setFields] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

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
      <div className="field-grid">
        <div className="field">
          <label htmlFor="name">Nome</label>
          <input id="name" name="name" placeholder="Seu nome completo" required value={fields.name} onChange={onChange("name")} />
        </div>
        <div className="field">
          <label htmlFor="email">E-mail</label>
          <input id="email" name="email" type="email" placeholder="seu@email.com" value={fields.email} onChange={onChange("email")} />
        </div>
        <div className="field">
          <label htmlFor="phone">Telefone</label>
          <input id="phone" name="phone" placeholder="(00) 00000-0000" value={fields.phone} onChange={onChange("phone")} />
        </div>
        <div className="field">
          <label htmlFor="subject">Assunto</label>
          <input id="subject" name="subject" placeholder="Assunto da mensagem" value={fields.subject} onChange={onChange("subject")} />
        </div>
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
