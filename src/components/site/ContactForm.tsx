import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3500);
  };

  const field =
    "w-full border-0 border-b border-border bg-transparent px-0 py-3 text-sm text-ink placeholder:text-muted-foreground/70 focus:border-stone focus:outline-none focus:ring-0 transition-colors";
  const label = "block text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground";

  return (
    <form onSubmit={onSubmit} className="space-y-8">
      <div className="grid gap-8 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={label}>Nome</label>
          <input id="name" name="name" required className={field} placeholder="Seu nome completo" />
        </div>
        <div>
          <label htmlFor="email" className={label}>E-mail</label>
          <input id="email" name="email" type="email" required className={field} placeholder="seu@email.com" />
        </div>
        <div>
          <label htmlFor="phone" className={label}>Telefone</label>
          <input id="phone" name="phone" className={field} placeholder="(00) 00000-0000" />
        </div>
        <div>
          <label htmlFor="subject" className={label}>Assunto</label>
          <input id="subject" name="subject" className={field} placeholder="Assunto da mensagem" />
        </div>
      </div>
      <div>
        <label htmlFor="message" className={label}>Mensagem</label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={field + " resize-none"}
          placeholder="Descreva brevemente sua situação"
        />
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-sm bg-ink px-6 py-4 text-sm font-medium text-white transition-colors hover:bg-stone"
        >
          <Send className="h-4 w-4" />
          Enviar mensagem
        </button>
        {sent && (
          <span className="text-sm text-stone">
            Mensagem registrada (placeholder — sem envio real).
          </span>
        )}
      </div>
    </form>
  );
}
